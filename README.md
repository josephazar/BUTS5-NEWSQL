# S5 BUT NORD FRANCHE COMTE


Projet de départ pour le cours Nouvelles bases de données: NodeJS + NoSQL


### Setup
- Utilisez NodeJS version 16+
- Lancez `npm install` à la racine du projet pour installer les dépendances du serveur.
- Allez dans le répertoire client et exécutez `npm install --legacy-peer-deps --force`
- Retournez à la racine du projet et lancez `npm run dev` pour démarrer le serveur.
- Accédez à l'application à l'adresse `localhost:3000` dans votre navigateur.
- Front-end: `localhost:3000`
- Back-end: `localhost:5000`

**Important:**
Les identifiants pour la base de données Mongo Atlas dans dev.js sont en lecture seule. Si vous essayez de vous connecter sans d'abord ajouter votre propre chaîne de connexion, vous verrez une erreur : `[0] MongoError: user is not allowed to do action [insert] on [advnode.users]`
Vous pouvez également utiliser votre propre base de données MongoDB locale ou une base de données MongoDB Dockerisée.