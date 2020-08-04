var express = require('express');
var app = express();


var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({
  extended: true
}));


app.use(express.static("public"));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
});



app.post("/", function(req, res) {
  res.setHeader("Content-Type", "text/html;charset=utf-8");
  /*recogemos los valores del formulario*/
  var nombre = req.body.nombre;
  var mes = Number(req.body.mes);
  var anio = Number(req.body.fecha);
  /*Array con los nombres de los famosos*/
  var nombres = ["No seleccionaste", "Martiño Rivas", "Shakira", "Chuck Norris", "Luis Fonsi", "Megan Fox", "Messi", "Sandra Bullock", "Chris Hemsworth", "Berk Atan", "Key Winslet", "Leo DiCaprio", "Brad Pitt"];
  /*Calculo la edad en años con una resta*/
  var edad = 2020 - anio;
  /*mostrar resultado final*/
  res.send("<h1>Felicidades:" + nombre + " ,naciste el mismo mes que " + nombres[mes] + "Este año cumpliras: " + edad + "años, si el coronavirus lo permite</h1>");
})


app.listen(3000, function() {
  console.log("yuju");
});
