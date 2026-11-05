# Inventaire de la pépinière

> Projet individuel du SAS DFS, brief 2 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

Cette application s'adresse au responsable d'une pépinière qui souhaite suivre les espèces végétales élevées dans son établissement. Il a besoin de connaître les quantités de plants disponibles et de retrouver facilement les informations sur chaque entrée de son inventaire. Pour chaque entrée, il saisit un code, un nom commun, un groupe botanique, une quantité de plants et une date de relevé. Le programme permet d'ajouter un plant, de consulter l'inventaire, de rechercher par code ou par nom, de filtrer par groupe botanique et de trier les quantités. Il affiche également une synthèse des stocks, de leur répartition par groupe botanique et des espèces les plus abondantes. Les données sont enregistrées dans un fichier JSON afin d'être conservées après la fermeture du programme. Cet outil constitue un support pédagogique de gestion d'inventaire : il ne réalise ni diagnostic agronomique, ni recommandation de production, ni gestion commerciale.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/kouamelanpatrick031-alt/brief-2-inventaire-pepiniere.git
cd brief-2-inventaire-pepiniere
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

✏️ *Cochez seulement ce qui marche : `- [x]`.*

- [x] Données lues et enregistrées dans `donnees/plants.json`
- [x] Ajouter un plant, saisies invalides refusées sans arrêter le programme
- [x] Lister l'inventaire, message si l'inventaire est vide
- [x] Rechercher par code ou par nom ; filtrer par groupe botanique
- [x] Trier par nombre de plants
- [x] Synthèse : stock total, espèces et plants par groupe, espèce la plus abondante, stocks faibles (≤ 10 plants)
- [ ] Bonus : supprimer et modifier un plant (choix 6 et 7)
- [ ] Bonus : tri décroissant, groupe le plus fourni

## Données

Les données sont enregistrées dans le fichier donnees/plants.json, qui contient initialement 10 entrées d'inventaire. Chaque entrée comporte les champs suivants : code, nom commun, groupe botanique, quantité de plants et date de relevé. Les quantités sont exprimées en nombre de plants. Les données sont fictives et utilisées dans le cadre pédagogique du projet. Les groupes botaniques acceptés (angiosperme et gymnosperme) sont fournis par le coach. La description détaillée des champs et de leur signification est présentée dans le dictionnaire des données.

## Limites

Les données sont fictives et ne représentent pas nécessairement les stocks d'une pépinière réelle.

Le seuil de 10 plants est un repère pédagogique de suivi, et non une recommandation de production.

L'application ne vérifie pas la réalité botanique des espèces saisies.

Le programme ne fournit pas de conseils agronomiques ni de prévisions de production.

L'application fonctionne localement à partir d'un fichier JSON et ne propose pas de gestion multi-utilisateur.

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

Prénom et nom : kouamelan patrick
Compte GitHub : kouamelanpatrick031-alt

Entraide : accompagnement avec ChatGPT pour comprendre les consignes, les notions JavaScript et les erreurs. Le code a été réalisé, exécuté et vérifié par l'auteur.
