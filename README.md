# S03E05-flower-exemple
Exercice Express/EJS pour un peu de pratique ! 

## La mise en place 

1. Créer un dossier contenant un fichier **app.js**, un dossier **"my_modules"**, un dossier **"views"**, et un dossier **"public"**.
2. Initialiser **npm**, installer **express** et **ejs**
3. Préparer le fichier app.js pour qu'il soit lié aux modules et permette de lancer le serveur
4. Créer deux modules : un module **"routes.js"** permettant de gérer les routes, et un **"flowers.js"**
    - Le module **routes** doit être mis en place comme nécessaire, vous pouvez déjà tester une route de page d'accueil (/) avec un HTML basique par exemple, rangé dans le dossier **views** (Cette page ne sera pas vraiment utilisée pour la suite, mais vous pouvez vous organiser comme vous le souhaitez !)
    - Le module **flowers** doit être un tableau qui contient des objets avec les informations sur les fleurs :
      - *name*,
      - *description*,
5. Créer la route **"/fleurs"** et la lier à une page ejs rangée dans le dossier **views**. Créer la page ejs permettant d'obtenir une la liste des fleurs contenues dans le module créé ci-dessus (via une boucle, et non en dur !). (Il peut être recommandé de créer des fichiers partiaux, comme header et footer, pour éviter de répéter ces long et illisibles bouts d'HTML si jamais on refait la même page !)
6. Rendre les fleurs cliquables pour la suite, via un lien qui aurait le format **"/fleur/nomDeLaFleur"**. 
   
   ![IMG1](/ressources_enonce/IMG1.png)


## Le dynamisme 

7. Créer une route dynamique respectant le format **"/fleur/nomDeLaFleur"**. 
8. Cette route doit conduire vers une page contenant le *nom de la fleur* et la *description* (à récupérer dans le module flowers créé précédemment !) -C'est ici qu'on peut réutiliser header et footer créé précédemment-
9. Si vous le souhaitez, vous pouvez modifier le title de la page (dans le head) pour qu'il soit aussi dynamique en fonction de la fleur. Si vous avez créé un fichier header à part, il faudra l'ajouter avec des paramètres pour cela !
   
   ![IMG2](/ressources_enonce/IMG2.png)

## Les fichiers publics

10. Ajouter 3 dossier dans le dossier public : **js**, **img** et **css**.
11. Lier le dossier public au système en ajoutant la ligne de code nécessaire dans votre app.js vue aujourd'hui (express.static ...)
12. Ajouter un fichier **css**, le lier aux fichiers déjà créé (via le header) et mettez le style de votre choix !
13. Ajouter des **images** : 
    - Dans le module flowers.js, vous pouvez rajouter dans chaque objet une propriété "imgUrl" qui contiendrait un chemin pour aller vers une image.
    - Téléchargez l'image sur internet,
    - Vous pouvez ranger ces images dans le dossier "public/img" créé plus tôt, et les rajouter à votre page dynamique en fonction de la fleur choisie !
14. Ajouter des **boutons** 
    - Un bouton **Retour** permettant de revenir à la liste des fleurs (/fleurs)
    - Un bouton "Est ce que cette fleur te plait ?" Qui permet d'utiliser du JS front !
      - On crée un fichier **appFront.js** dans "public/js" qu'on lie via la balise script dans le footer de nos pages.
      - On sélectionne et on écoute ce bouton
      - Au clic, on ouvre un boite **"confirm"** pour lui demander si la fleur lui plait ou non,
      - On lui répond en conséquences de sa réponse !

### Bon courage à tous ! 

   ![IMG3](/ressources_enonce/IMG3.png)