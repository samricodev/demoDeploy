const express = require('express');
const cors = require('cors');
const { json } = require('express');

const app = express();
const port = 3000;

let transArray = []

app.use(
 express.urlencoded({
    extended: true
 })   
)

app.use(express.json({
    type: "*/*"
}))

app.use(cors());

app.get('/transactions', (req,res) =>{
    res.send(JSON.stringify(transArray));
})


app.post('/transactions',(req, res) =>{
    let transaction = req.body;
    transArray.push(transaction);
    res.send(JSON.stringify("Guardada bb"));
    console.log(transArray);
})

app.listen(port, () => {
    console.log(`Estoy ejecutando en http://localhost:${port}`);
})