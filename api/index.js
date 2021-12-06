const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

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

app.get('/prueba', (req,res) => {
    res.send('Hola');
});

app.listen(port, () => {
    console.log(`ejecuandose en ${port}`);
});
