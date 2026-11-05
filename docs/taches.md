# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés |03/11|03/11 | Dépôt GitHub ; dictionnaire et relevé des tests |
| Fiche 2 : lire et écrire le JSON |03/11 |03/11| Commit afbb53c ; 3 tests stockage verts |
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs |04/11 |04/11 |commit1777f5a;11 tests registre verts |
| Fiche 4 : rechercher et trier ; choix 3 et 4 |04/11 |04/11 |5 tests recherche verts; fonctionnalité intégrées dans app.js |
| Fiche 5 : synthèse ; choix 5 |04/11 |04/11 |6 test synthèse verts; fonctionnalité intégrée dans app.js|
| Tests par un camarade ; mes propres tests |05/11 |En cours |28 tests verts sur les modules vérifiés ; 9 tests bonus en échec |
| Fiche agronomique ; README ; documents |05/11 |A faire |README et dictionnaire rédigés ; fiche agronomique renseignée, relecture du coach à obtenir |
| Dépôt cloné et lancé ailleurs ; démonstration répétée |05/11 |A faire |A vérifier |
| Bonus |05/11 |Non commencé |Facultatif |

**Blocages** (le message exact, ce que j'ai essayé, la solution)

Dossier du projet apparemment vide après le clonage :
vérification du chemin et du contenu avec PowerShell, puis ouverture du bon dossier dans VS Code.

Problème avec Git : j'ai exécuté la commande git init dans un dossier qui contenait déjà un dépôt Git cloné. Git a affiché l'avertissement warning: adding embedded git repository.

Tentative : j'ai essayé de réinitialiser le dépôt et de configurer son adresse distante.

Solution : j'ai vérifié le dépôt Git existant et utilisé git remote set-url origin pour configurer correctement l'adresse du dépôt GitHub, au lieu de créer un dépôt imbriqué.
