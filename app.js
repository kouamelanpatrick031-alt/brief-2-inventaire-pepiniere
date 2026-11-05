// Inventaire de la pépinière — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { GROUPES, ajouterPlant, formaterPlant, listerPlants, trouverParId } from './src/registre.js';
import { filtrerParGroupe, rechercherParNom, trierParNombrePlants } from './src/recherche.js';
import { SEUIL_STOCK_FAIBLE, especeLaPlusAbondante, stocksFaibles, syntheseParGroupe, totalPlants } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/plants.json';

async function main() {
  ouvrirSaisie();

  console.log('==================================================');
  console.log('   INVENTAIRE DE LA PÉPINIÈRE');
  console.log('   Pépinière pédagogique');
  console.log('==================================================');

  let plants = [];

try {
  plants = await chargerJson(FICHIER_DONNEES);
  console.log(`${plants.length} espèce(s) chargée(s) depuis ${FICHIER_DONNEES}.`);
} catch (erreur) {
  console.log(`Impossible de lire ${FICHIER_DONNEES} : ${erreur.message}. L'inventaire démarre vide.`);
}
while (true) {
  console.log('\n--------------------- MENU ---------------------');
  console.log('1. Ajouter un plant');
  console.log("2. Lister l'inventaire");
  console.log('3. Rechercher (code, nom, groupe)');
  console.log('4. Trier (nombre de plants)');
  console.log('5. Synthèse des quantités');
  console.log('0. Quitter');

  const choix = await demander('Votre choix : ');
  if (choix === null || choix === '0') {
    console.log('Au revoir !');
    break;
  }

  switch (choix) {
    case '1': {
  console.log('\n--- Ajouter un plant ---');

  const id = await demander('Code du plant (ex. N11) : ');
  if (id === null) {
    console.log('Au revoir !');
    fermerSaisie();
    return;
  }

  const nomCommun = await demander('Nom commun (ex. papayer) : ');
  if (nomCommun === null) {
    console.log('Au revoir !');
    fermerSaisie();
    return;
  }

  const groupe = await demander(
    `Groupe botanique (${GROUPES.join(' ou ')}) : `
  );
  if (groupe === null) {
    console.log('Au revoir !');
    fermerSaisie();
    return;
  }

  const nombrePlants = await demander('Nombre de plants (entier) : ');
  if (nombrePlants === null) {
    console.log('Au revoir !');
    fermerSaisie();
    return;
  }

  const dateReleve = await demander('Date du relevé (AAAA-MM-JJ) : ');
  if (dateReleve === null) {
    console.log('Au revoir !');
    fermerSaisie();
    return;
  }

  const saisie = {
    id: id.toUpperCase(),
    nomCommun: nomCommun.toLowerCase(),
    groupe: groupe.toLowerCase(),
    nombrePlants,
    dateReleve
  };

  const erreurs = ajouterPlant(plants, saisie);

  if (erreurs.length > 0) {
    console.log('Ajout refusé :');
    erreurs.forEach((erreur) => console.log(`  - ${erreur}`));
    console.log(`L'inventaire compte toujours ${plants.length} espèce(s).`);
  } else {
    await enregistrerJson(FICHIER_DONNEES, plants);
    console.log(`Plant ${saisie.id} ajouté. L'inventaire compte ${plants.length} espèce(s).`);
  }

  break;
}

          case '2':
      console.log(`--- Inventaire (${plants.length} espèce(s)) ---`);
      console.log(listerPlants(plants));
      break;

    case '3': {
      console.log('\n--- Rechercher ---');
      console.log('1. Par code');
      console.log('2. Par nom commun');
      console.log('3. Les espèces d’un groupe botanique');

      const sousChoix = await demander('Votre choix : ');

      if (sousChoix === null) break;

      switch (sousChoix) {
        case '1': {
          const code = await demander('Code : ');
          if (code === null) break;

          const plant = trouverParId(plants, code.toUpperCase());

          if (plant) {
            console.log(formaterPlant(plant));
          } else {
            console.log(`Plant ${code.toUpperCase()} introuvable.`);
          }
          break;
        }

        case '2': {
          const texte = await demander('Nom ou partie du nom : ');
          if (texte === null) break;

          const recherche = texte.toLowerCase();
          const resultats = rechercherParNom(plants, recherche);

          console.log(
            `${resultats.length} espèce(s) dont le nom contient « ${recherche} » :`
          );
          console.log(listerPlants(resultats));
          break;
        }

        case '3': {
          const groupe = await demander(
            'Groupe (angiosperme ou gymnosperme) : '
          );
          if (groupe === null) break;

          const groupeRecherche = groupe.toLowerCase();
          const resultats = filtrerParGroupe(plants, groupeRecherche);

          console.log(
            `${resultats.length} espèce(s) du groupe ${groupeRecherche} :`
          );
          console.log(listerPlants(resultats));
          break;
        }

        default:
          console.log('Choix inconnu : retour au menu.');
      }
      break;
    }

    case '4': {
      console.log('\n--- Trier ---');
      console.log('1. Par nombre de plants croissant');

      const sousChoix = await demander('Votre choix : ');

      if (sousChoix === null) break;

      if (sousChoix === '1') {
        const plantsTries = trierParNombrePlants(plants);
        console.log(listerPlants(plantsTries));
      } else {
        console.log('Choix inconnu : retour au menu.');
      }
      break;
    }
    case '5': {
      console.log("--- Synthèse de l'inventaire ---");
      console.log(`Nombre d'espèces : ${plants.length}`);
      console.log(`Stock total : ${totalPlants(plants)} plants`);
      console.log('Par groupe botanique :');

      const synthese = syntheseParGroupe(plants);

      for (const [groupe, valeurs] of Object.entries(synthese)) {
        console.log(`  ${groupe} : ${valeurs.especes} espèce(s), ${valeurs.plants} plants`);
      }

      const abondante = especeLaPlusAbondante(plants);

      if (abondante === null) {
        console.log('Espèce la plus abondante : aucune donnée');
      } else {
        console.log(`Espèce la plus abondante : ${formaterPlant(abondante)}`);
      }

      const faibles = stocksFaibles(plants, SEUIL_STOCK_FAIBLE);

      console.log(`Stocks faibles (≤ ${SEUIL_STOCK_FAIBLE} plants) : ${faibles.length}`);

      if (faibles.length > 0) {
        console.log(
          listerPlants(faibles)
            .split('\n')
            .map((ligne) => `  ${ligne}`)
            .join('\n')
        );
      }

      console.log(`Rappel : le seuil de ${SEUIL_STOCK_FAIBLE} plants est un repère pédagogique de suivi, pas une recommandation de production.`);
      break;
    }
    default:
      console.log(`Choix inconnu : « ${choix} ». Tapez un chiffre du menu.`);
  }
}

  fermerSaisie();
}

main();
