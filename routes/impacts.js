var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var impactData = "";
var timeData = "";

var connect = mysql.createConnection({
  Host: "localhost",
  port: "3306",
  user: "player",
  password: "root",
  database: "playerinfo"
});
connect.connect(function(err) {
  if (err) {
    throw err;
  }
});

const SelectImpactData = 'SELECT impacts,time FROM impacts';
router.get('/', (req, res) => {
  connect.query(
      SelectImpactData,function (err,result,fields) {
        if(err) throw err;
        //console.log('result: ',result);
          impactData = result['impacts'];
          timeData = result['time'];
        res.render('impacts',{
          title: 'Player Impacts',
          result: result
        });
      });
});


module.exports = router;

