//este codigo es lo mismo que NodeJs


const express = require('express');// importamos express
const morgan = require('morgan');//middleware
const app = express(); //el modulo retorna un obejeto

//settings
app.set('appName', 'Fazt curse');//creamos una variable y la definimos con un valor
app.set('port', 3000);//definimos el puerto
app.set('view engine', 'ejs');//le indicamos que usaremos EJS

//middleware
/*const logger = (req, res, next) => {
    console.log(`Request received: ${req.protocol}://${req.get('host')}${req.originalUrl}`)
    next();
}
*/

app.use(express.json()); //linea para que entienda la app formatos json ya biene instalado en express
app.use(morgan('dev')); // importar el middleware procesa y muetra por consola antes de llegar a las rutas
//app.use(logger); //todos los middleware se ejecutan de esta forma

//para cualquier ruta especifica user pasara
// app.all('/user', (req, res, next) => {
//     console.log('por aqui paso all')
//     next();
// });

//rutas

//ruta de ejs 
app.get('/', (req, res) => {
    const data = [{name: 'Erk'}, {name: 'thay'},, {name: 'chess'}, {name: 'skky'}] //datos que recibira el ejs
    res.render('index.ejs', {people: data}); //ejecutamos el motor deplantillas y le mandamos los parametros que recibira EJS
});

//se le indica que hacer en al correr el servidor
app.get('/user', (req, res) => { //cuando el usr busque una pag indica que hace
    res.json({
        username: 'Erk',
        lastname: 'Mad'
    });
});


//se puede hacer una ruta dinamica ejemplo recibir un id
app.post('/user/:id', (req, res) => { //cuando el usr busque una pag indica que hace
    console.log(req.body)//recibe lo del fron end y se podra manipular
    console.log(req.params)//recibe el parametro 
    res.send('post request received')
});

//se le indica que hacer en al correr el servidor
app.put('/user/:id', (req, res) => { //cuando el usr busque una pag indica que hace
    console.log(req.body)
    res.send(`User ${req.params.id} update`)//recibe el req.params.userId el id del usuario otrogado
});

//se le indica que hacer en al correr el servidor
app.delete('/user/:userId', (req, res) => { //cuando el usr busque una pag indica que hace
    res.send(`User ${req.params.userId} deleted`)//recibe el req.params.userId el id del usuario otrogado
});

app.use(express.static('public'));// ya viene instalado en express

// ejecucion del servidor
app.listen(app.get('port'), () => {
    console.log(app.get('appName'))//usamos la variable que creamos
    console.log("servern on port", app.get('port'));
});