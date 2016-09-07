Ng-League

If you don't want to follow the steps go to https://ng-league.herokuapp.com/performance will be an issue because of external databases. Additionally most images are referenced to websites not stored locally. The heroku site is not the most recent version.

STEPS

1."npm install" to install node modules

2.If you just clone the Repo you need to connect the database to the  heroku database which is commented out on line 16 of server.js. Performance will suffer if the heroku db is used. You can alternatively(and preferably) create your own database (must match line 15 location) and run functions getChampions and getItems to load the database(this is the method preferred). The functions are located on lines 17 and 18. ONLY RUN THESE FUNCTIONS ONCE.
 
3.type "npm run tsc:w" for the ts compiler and "gulp" for the sass compiler
    a. You can change gulpfile-all.js to gulpfile.js to have the tsc compiler and the sass compiler under just gulp. Gulp tsc takes slightly longer which is why they are seperated.

4.Important: The summoner lookup page has severe limitations because I do not have a production riot api key. So you can do one summoner look up every 5 minutes. If you do not know an account use ethanblanc. Console logs and other "non production" code was left int because this is not a final version.

