Ng-League

If you don't want to follow the steps go to https://ng-league.herokuapp.com/ major performance issues because of external database. Also most images are referenced to websites not copied locally.

STEPS

1."npm install" to install node modules

2.If you just clone the Repo you need to connect the database to the  heroku database which is commented out on line 16 of server.js. Performance will suffer if the heroku db is used. You can alternatively(and preferably) create your own database (must match line 15 create) and run functions getChampions and getItems to load the database(this is preferred). Lines 17 and 18 for the functions.
 
3.type "npm run tsc:w" for the ts compiler and "gulp" for the sass compiler
    a. You can change gulpfile-all.js to gulpfile.js to have the tsc compiler and the sass compiler under just gulp. Gulp tsc takes slightly longer which is why they are seperated.

4.Important: The summoner lookup page has severe limitations because I do not have a production riot api key. So you can do one summoner look up every 5 minutes. If you do not know an account use ethanblanc.

