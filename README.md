# Schemas d'importation d'enregistrements pour le logiciel Finance D - Tenue de livres simplifiée
Il s'agit des schemas JSON qui servent à la validation des enregistrements à importer dans un dossier du logiciel.
Quand les fichiers .json ne respecte pas la structure d'object attendue, ils ne peuvent pas être importés.

## schemaImportJSON.js
Ce fichier est le plus important. C'est celui-ci qui détermine la structure globale du fichier JSON.
Remarquez que celui-ci utilise des schemas qui sont localisés dans d'autres fichiers aux quels vous avez également accès.

### Le meilleur moyen de comprendre un schema JSON
Le plus simple pour vous aider à comprendre le schema serait de créer un fichier d'exportation JSON directement dans le logiciel et de l'ouvrir dans votre éditeur de code.
En faisant cela, vous auriez un exemple à suivre.
