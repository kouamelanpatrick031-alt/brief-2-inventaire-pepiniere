# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | unique et non vide | — | N01 |
| `nomCommun`|Nom commun de l'espèce observée | texte|chaîne de caractères non vide |-|cacao |
| `groupe`|groupe botanique de la plante |texte |doit être exactement angiosperme ou gymnosperme |-|angiosperme |
| `nombrePlants`|Nombre de plants comptés lors du relevé |nombre |nombre entier supérieur ou égal à 0 | plants | 30 |
| `dateReleve` |Date du comptage sur le terrain |texte |format AAAA-MM-JJ obligatoire, doit être une vraie date qui existe |-|2026-10-24 |

**Listes de valeurs autorisées** : `groupe` = `angiosperme`, `gymnosperme` uniquement. Ce sont les valeurs fournies par le coach.

**Sources** : Les données sont fictives et servent à reproduire un inventaire de pépinière. Lors du relevé sur le terrain, la personne chargée de l'inventaire identifie chaque espèce à partir de son étiquette, d'une photo ou d'un spécimen, puis compte les plants correspondants et enregistre les informations. Les dix enregistrements de départ portent tous la même date de relevé : **2026-10-24 (24 octobre 2026)**. Les groupes botaniques autorisés (`angiosperme` et `gymnosperme`) ont été fournis par le coach. Fichier source : `donnees/plants.json`.
