const express = require('express');
const fleurs = require('./fleurs');
const findFlower = require('./findFlower');

// On va utiliser le router de express.
// Cela permet de définir des routes en dehors de notre app
const router = express.Router();

// Je renseigne mes routes
// EN ECRIVANT ROUTER ET PAS APP CF CI DESSUS ON A APPELE APP
router.get('/', (request, response) => {
  response.sendFile('index.html', {root: './views'}); // Pour remonter sans prendre un forbidden, on doit l'écrire en relatif si on remonte avec le Root
});

router.get('/woaw', (request, response) => {
    // Maintenant que EJS est installé ET configuré
    // Je peut utiliser la méthode render qui va s'occuper de générer le rendu avec le fichier ejs indiqué. 
    // De base render va aller chercher dans le dossier views.
    response.render('woaw');
  });

  router.get('/fleurs', (request, response) => {
    // Maintenant que EJS est installé ET configuré
    // Je peut utiliser la méthode render qui va s'occuper de générer le rendu avec le fichier ejs indiqué. 
    // De base render va aller chercher dans le dossier views.
    response.render('fleurs', {
        fleurs
    }); // Ici, le second argument c'est les données qu'on lui passe
  });


  router.get('/fleur/:fleur', (request, response) => {
    const flower = request.params.fleur;
    const flowerFound = findFlower.findFlower(flower);
    response.render('fleurUnique', {
        flowerFound
    }); // Ici, le second argument c'est les données qu'on lui passe
  });

router.get('/toto', (request, response) => {
    response.send('Hello Toto !');
});

module.exports = router;
