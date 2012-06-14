// Module dependencies.
var express = require('express');
var mongoose = require('mongoose');
var _= require('underscore');

var logger= require('./WinstonLog');

mongoose.connect('mongodb://localhost:1234/node');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var app = express.createServer();

// Configuration
app.configure( function() {
app.use(express.bodyParser());
});


//DataModel
	var user = new Schema({
	firstName : String,
	lastName:String
});
var userModel = mongoose.model('user',user);


// Routes
app.get('/', function(req, res) {
  saveUser();
});


function getRecord(res){
	logger.info("inside  List  :::::::::::");
	var query = userModel.find({});	
	query.exec(function (err, docs) {

		if(err){
			console.log(err);
		}else{

			console.warn(docs);
			_.each(docs,function(item){
						//logger.info("USEr : "+item.firstName)
					});

		res.send(JSON.stringify(docs));
		}

		
	});			
}


function saveUser(){


/*var userInstance = new userModel();
	userInstance.firstName = "kavitha";
	userInstance.lastName = "m";
	userInstance.save(function (err) {
		  logger.log("Save Error::::::::::::"+err);
		  getRecord(res);
	});*/


}

app.listen(3000);

 














