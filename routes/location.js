var express = require('express');
var mysql = require('mysql');
var router = express.Router();

var connect = mysql.createConnection({
    Host: "localhost",
    port: "3306",
    user: "player",
    password: "magic",
    database: "playerinfo"
});
connect.connect(function(err) {
    if (err) {
        throw err;
    }
});


router.get('/', (req, res) => {
    const SelectLocationData = 'SELECT latitude,longitude,time FROM location';
    connect.query(
        SelectLocationData,function (err,result,fields) {
            if(err) throw err;
            //console.log('location: ', result);
            res.render('location',{
                title: 'Player Location',
            result: result
            });
        });
});

module.exports = router;