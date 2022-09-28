const express = require('express');
const routes = require('./my_modules/routes');
const app = express();
app.set('view engine', 'ejs'); // Définition du moteur de template
const port = 3000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});

// Ajout d'un middleware ?
// Rend des fichiers dispo au front
app.use(express.static('public'));


// Au lieu de mettre les routes dedans on les sort dans un module
// Permet d'appeler des routes, si on en met une par fichier, on peut l'utiliser plusieurs fois avec plusieurs fichiers appelés via require
// On fait ça pour alléger le fichier app, et SoC
app.use(routes);