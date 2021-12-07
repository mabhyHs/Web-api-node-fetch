const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

let transactionArr = []

//#region
app.use(
    express.urlencoded({
        extended:true
    }));

app.use(express.json({
    type:"*/*"
}));

app.use(cors());
//#endregion

//obtener
app.get('/transactions', (req,res) => {
    res.send(JSON.stringify(transactionArr));
});

//almacenar
app.post('/transactions', (req,res) => {
    let transaction = req.body;
    transactionArr.push(transaction);
    res.send(JSON.stringify("Saved"));
    console.log(transactionArr);

});

//escuchar puerto
app.listen(port, () => {
    console.log(`ejecuandose en http://localhost: ${port}`);
});
