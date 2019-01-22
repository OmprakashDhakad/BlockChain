var mysql = require('mysql');
var db_config = {
    host  :'127.0.0.1',
    port : 3000,
    user  : 'root',
    'password' : 'root',
    database  : 'blockchain'

}

var connection ;

function handDisconnect(){
    connection = mysql.createConnection(db_config);
    connection.connect(function(err){
        if(err){
            console.log('Error when connecting to db :',err);
            setTimeout(handDisconnect,2000);
        }
    });
    connection.on('error',function(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            handleDisconnect();
        }else{
            throw err;
        }
    })
}

handDisconnect();

module.exports = connection;