/*
npm install
node app.js
//http://localhost:3000/get?q=
instalar ngrok

//pasos ngrok
ejecutar el ngrok.exe (abrir el cmd)
C:\Users\JULIAN DAVID GOMEZ\ngrok>
el token que me da ngrok al iniciar sesion
ngrok.exe authtoken 1g9UWJdg7IFB4wt7t1HHxkqP3Jj_2PbPGQAx8BUE6QTYiGWwJ
luego: ngrok.exe http 3000
seleccionamos: Forwarding                    https://c7528178a29b.ngrok.io -> http://localhost:3000
copio y pego en localhost:3000 :  https://c7528178a29b.ngrok.io/get?q=
desde la carpeta express-server: node app.js (para correr el servidor en el localhost:3000)



//firebase
Firebase post install completed. To re-run this script, navigate to the root directory of `nativescript-plugin-firebase` in your `node_modules` folder and run: `npm run config`.
*/

var express = require("express"), cors = require('cors');
var app = express();

app.use(express.json());
app.use(cors());
app.listen(3000, () => console.log("Server running on port 3000"));
var noticias = [
    "Literatura París",
    "Futbol Barcelona",
    "Futbol Barranquilla",
    "Política Montevideo",
    "Economía Santiago de Chile",
    "Cocina CDMX",
    "Finanzas Nueva York"
];

//http://localhost:3000/get?q=
app.get("/get", (req, res, next) =>
    res.json(noticias.filter((c) =>
        c.toLowerCase().indexOf(req.query.q.toString().toLowerCase()) > -1)
    )
);


var misFavoritos = [];
app.get("/favs", (req, res, next) => res.json(misFavoritos));
app.post("/favs", (req, res, next) => {
    console.log(req.body);
    misFavoritos.push(req.body.nuevo);
    res.json(misFavoritos);
});


//
var news = [
    { "id":1,
      "titulo": "Literatura París",
      "categoria": "Cultura",
      "nota": "good",
      "countReview": 1,
      "leyendo": false,
      "favorita": false },
    { "id":2,
      "titulo": "Futbol Barcelona",
      "categoria": "Deportes",
      "nota": "good",
      "countReview": 1,
      "leyendo": false,
      "favorita": false },
    { "id":3,
      "titulo": "Futbol Barranquilla",
      "categoria": "Deportes",
      "nota": "good",
      "countReview": 1,
      "leyendo": false,
      "favorita": false },
    { "id":4,
      "titulo": "Política Montevideo",
      "categoria": "Política",
      "nota": "good",
      "countReview": 1,
      "leyendo": false,
      "favorita": false },
    { "id":5,
      "titulo": "Economía Santiago de Chile",
      "categoria": "Economía y Finanzas",
      "nota": "good",
      "countReview": 1,
      "leyendo": false,
      "favorita": false },
    { "id":6,
      "titulo": "Cocina CDMX",
      "categoria": "Cultura",
      "nota": "good",
      "countReview": 1,
      "leyendo": false,
      "favorita": false },
    { "id":7,
      "titulo": "Finanzas Nueva York",
      "categoria": "Economía y Finanzas",
      "nota": "good",
      "countReview": 1,
      "leyendo": false,
      "favorita": false },
];


app.get("/news", (req, res, next) =>
    res.json(news.filter((c) =>
        
        c.titulo.toLowerCase().indexOf(req.query.q.toString().toLowerCase()) > -1)
    )
);
