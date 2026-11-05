// Rechercher et trier les plants.
// Fiche : fiches/4-rechercher-trier.md

// Recherche un plant par une partie de son nom, sans tenir compte des majuscules.
export function rechercherParNom(plants, texte) {
  return plants.filter((plant) =>
    plant.nomCommun.toLowerCase().includes(texte.toLowerCase())
  );
}

// Filtre les plants selon leur groupe botanique.
export function filtrerParGroupe(plants, groupe) {
  return plants.filter((plant) => plant.groupe === groupe);
}

// Renvoie une copie de l'inventaire triée par quantité croissante.
export function trierParNombrePlants(plants) {
  return [...plants].sort((a, b) => a.nombrePlants - b.nombrePlants);
}