# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.
L'objectif de ce document est de vérifier le bon fonctionnement de l'application d'inventaire de la pépinière. Les résultats attendus sont définis avant les essais, puis comparés aux résultats obtenus avec le programme.

Les calculs de référence sont réalisés à partir des 10 plants initialement présents dans donnees/plants.json.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. 

| Résultat | Calcul à la main | Valeur du programme |
| --- | --- | --- |
| Stock total | 30+45+20+50+25+18+12+22+8+10 = 240 plants | 240 plants |
| Angiospermes | 8 espèces, 30+45+20+50+25+18+12+22 = 222 plants | 8 espèces, 222 plants |
| Gymnospermes | 2 espèces, 8+10 = 18 plants | 2 espèces, 18 plants |
| Stocks faibles (10 ou moins) | N09 (8) et N10 (10) | 2 plants |
| Espèce la plus abondante | N04, tomate, 50 | N04, tomate, 50 plants |

Les calculs ont été réalisés avec l'aide de ChatGPT, puis revérifiés manuellement.

Vérification complémentaire du seuil de stock faible

Pour vérifier le fonctionnement du seuil de 10 plants, un calcul complémentaire a été réalisé en modifiant fictivement deux quantités : N07 passe de 12 à 9 plants et N04 passe de 50 à 40 plants.

Les résultats obtenus sont :

Stock total : 227 plants.

Angiospermes : 8 espèces, 212 plants.

Gymnospermes : 2 espèces, 15 plants.

Stocks faibles : N07, N09 et N10, soit 3 plants.

Espèce la plus abondante : N02, maïs, avec 45 plants.

Ce calcul confirme que le seuil de 10 plants est inclus dans la catégorie des stocks faibles.

**Essais dans le menu** : Les essais manuels ont été réalisés avec les 10 données initiales restaurées. Les fonctionnalités de liste, recherche, tri et synthèse ont été vérifiées dans le menu.
| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Ajouter un plant | Le plant valide est ajouté à l'inventaire et conservé après redémarrage | N11 papayer ajouté avec 15 plants ; retrouvé après redémarrage dans l'inventaire | Moi-même |
| Lister l'inventaire | Afficher les 10 plants initiaux | Les 10 plants de N01 à N10 s'affichent correctement, sans N11 | Moi-même |
| Rechercher |Trouver un plant par code, nom ou groupe ; signaler un code introuvable | Recherche testée, notamment avec un code inexistant | Moi-même |
| Trier | Afficher les plants par nombre croissant |Les 10 plants sont classés correctement, de N09 (8 plants) à N04 (50 plants).| Moi-même |
| Synthèse | Afficher 10 espèces et 240 plants | Résultat conforme : 10 espèces, 240 plants, groupes et stocks faibles corrects | Moi-même |
| Choix inconnu (9) | Afficher un message d'erreur et revenir au menu |Choix inconnu : « 9 ». Tapez un chiffre du menu. puis retour au menu| Moi-même |

Sur un autre poste : Non effectué. Ce test reste à réaliser sur un deuxième ordinateur en suivant les instructions du README.
