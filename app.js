const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Olá, Rodou uma Pipeline no codepipeline da AWS! -V2'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
