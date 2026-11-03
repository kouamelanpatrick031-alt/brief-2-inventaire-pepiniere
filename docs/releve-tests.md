# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. 

| Résultat | Calcul à la main | Valeur du programme |
| --- | --- | --- |
| Stock total | 30+45+20+50+25+18+12+22+8+10 = 240 plants | à compléter à l'étape 5 |
| Angiospermes | 8 espèces, 30+45+20+50+25+18+12+22 = 222 plants | à compléter |
| Gymnospermes | 2 espèces, 8+10 = 18 plants | à compléter |
| Stocks faibles (10 ou moins) | N09 (8) et N10 (10) | à compléter |
| Espèce la plus abondante | N04, tomate, 50 | à compléter |

Ces chiffres viennent des données plants.json, je les ai obtenus avec l'aide de GPT pour aller plus vite et je les ai revérifiés à la main.

J'ai refait les calculs seul avec N07 à 9 et N04 à 40, j'ai trouvé 227 au total, 209 angiospermes, 3 stocks faibles N07, N09 et N10, et N02 le plus abondant, ce qui m'a montré que 10 est bien inclus dans les stocks faibles.

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| ✏️ | | | |
| ✏️ | | | |
| ✏️ | | | |
| ✏️ | | | |
| ✏️ | | | |
| ✏️ | | | |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
