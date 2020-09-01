var express = require('express');
var mysql = require('mysql');
var app = express();

var connection = mysql.createConnection({
  //Propiedades
  host: 'localhost',
  user: 'root',
  password: '1234',
  database: 'bd'
});

connection.connect(function(error) {
  if(error)
  {
    console.log('Error de conexión');
  }
  else
  {
    console.log('Conexión exitosa');
  }
});

app.get('/', function(req, resp) {
  //about mysql
  connection.query("SELECT * FROM estudiante", function(error, rows, fields){
    if(!!error)
    {
      console.log('Error en la consulta');
    }
    else
    {
      console.log('Consulta exitosa');
    }
  });
})

app.listen(1337);