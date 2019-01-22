var mysql = require('mysql');
var db_config = {
    host  = '127.0.0.1',
    user  = 'root',
    'password' : 'root',
    database  = 'blockchain'

}

var concection ;

function handDisconnect(){
    concection = mysql.createConnection(db_config);
    concection.connect(function(err){
        if(err){
            console.log('Error when connecting to db :',err);
            setTimeout(handDisconnect,2000);
        }
    });
    concection.on('error',function(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleDisconnect();
        }else{
            throw err;
        }
    })
}

handleDisconnect();

module.exports = concection;