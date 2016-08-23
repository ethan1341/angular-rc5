var express= require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var request = require('request');
var bcrypt = require('bcrypt');
app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.static(__dirname));

//db settings
var connect = mongoose.connect('mongodb://localhost/ng-league', function(err) {console.log(err)})
var db = mongoose.connection;
db.once('open', function() {
  console.log('db is open')
});

var championSchema = new mongoose.Schema({
  championObject:Object
})

var itemSchema = new mongoose.Schema({
  itemObject:Object
})

var championCollection = mongoose.model('championModel', championSchema);
var itemCollection = mongoose.model('Item', itemSchema);
    //itemCollection = representation of collection championModel(s) name of the collection in the database championSchema is the schema of the inputted object

function success(){
  console.log('success')
}

function getItems(){
  var options = {
    method: "GET",
    url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/item?itemListData=all",
    qs: {
      api_key: "2ee8e653-62c7-403a-baf1-8e7bc56d0848"
    },
    headers: {
      "User-Agent": "Champions"
    }
  }
  request(options, function(error, response, body) {
    var itemData = JSON.parse(body);
    for( key in itemData.data){
     var itemObject = new itemCollection({itemObject:itemData.data[key]});
      itemObject.save(function(err) {
        console.log(err)
        return success();
      })
    }
  })
}
//getItems()
function getChampions(){
  var options = {
    method: "GET",
    url: "https://global.api.pvp.net/api/lol/static-data/na/v1.2/champion?champData=image,info,stats,spells,tags",
    qs: {
      api_key: "2ee8e653-62c7-403a-baf1-8e7bc56d0848"
    },
    headers: {
      "User-Agent": "Champions"
    }
  }

  request(options, function(error, response, body) {
    var championData = JSON.parse(body);
    for(key in championData.data){
      var championObject = new championCollection({championObject:championData.data[key]})
      championObject.save(function(err) {
        console.log(err)
        return success();
      })
    }


  })
}

//getChampions();

app.get('/', function(req,res){
    res.sendFile('index.html');
});

app.get('/champions', function(req,res){
  championCollection.find({},function(error, champions){
    console.log(champions);
    res.send(champions)
  })
})

app.get('/items', function(req,res){
  itemCollection.find({}, function(error, items){
    res.send(items)
  })
})

app.get('/champions/detail/:id', function(req,res) {
  var id = parseInt(req.params.id);
  console.log('this is id',id)
  var query = championCollection.where({'championObject.id': id})
  query.find(function (err, data) {
    console.log('this is',data)
    res.send(data)
  })
});

app.post('/post',bodyParser.json(), function(req,res){
  console.log(req.body)
})

app.listen(8900, function() {
    console.log("listening on 8900!");
});