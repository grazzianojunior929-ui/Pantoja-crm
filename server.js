const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

//Habilita o servidor a enteder arquivos estáticos (HTML, CSS, JS do front-end)
app.get('/api/status', (req, res) => {
    res.json({ status: 'Online', message: 'API do CRM funcionando com sucesso!' });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});