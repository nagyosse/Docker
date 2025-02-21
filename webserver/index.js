const express = require('express');

const app = express();

app.get('/', (req, res) => {
        res.send('Szevesz Lacika!');
});

app.listen(8888, () => {
        console.log('A szerever elindult a 888 porton.');
});