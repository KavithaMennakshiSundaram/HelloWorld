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


var ErrorSchema= new Schema({ 
          loc                                : {lat: Number,  lng: Number }, 
          Address                        : String, 
          create_date                : {type: Date, default: Date.now} 
}); 

var ErrorSchemaModel = mongoose.model('ErrorSchema',ErrorSchema);
/*
ErrorSchemaModel.save(function (err, model) {
  if (err) 
{
console.log("jdhj");

throw err;}

  console.log("My new User is saved",
    "`save` hook worked as espected since we had no errors here");
});


*/




// Routes
app.get('/', function(req, res) {
  //saveUser();

getRecord(res);
});


function getRecord(res){

	logger.info("inside  List  :::::::::::");
	logger.debug("Loggly test :::::::::::::");



     // logger.error("DB saved record :::::::::::::::"+docs);
console.log("testing ::::::::::::::");
	var query = userModel.find({});	
	query.exec(function (err, docs) {

		if(err){
			logger.error(err);
		}else{
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
		  
	});*/


}

app.listen(3000);





//-------------------------------------------Global Exception handler--------------------------------------------------------------------







