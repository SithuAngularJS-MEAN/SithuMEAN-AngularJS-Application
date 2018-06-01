var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

// To Store data from new Register user details
router.post('/registerUser',function(req,res,next){
  var db = req.db;
  console.log("req.body is : ",req.body);
  //Set our collection
  var collection = db.get('userRegisterCollection');
  //Submit to the DB
  collection.insert(req.body, function(err,doc){
    if(err){
      //If is failed , return error
      res.send("There was a problem adding the information")
    }else{
      res.send(true);
    }
  });
});

module.exports = router;


/**collection.find({},{},function(e,docs){
    var statusMsg = {
      "Registeration":"Success"
    };
    res.send(statusMsg);
  }); */