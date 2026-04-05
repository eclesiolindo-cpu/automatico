const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json({ limit: '50mb' })); // Aumentado para suportar imagens em Base64

// O Banco de Dados em Memória (Para persistência real, use MongoDB)
let database = {
    users: [],
    products: [],
    transactions: [],
    chats: []
};

// Rota para ler os dados
app.get('/api/db', (req, res) => {
    res.json(database);
});

// Rota para salvar os dados
app.post('/api/db', (req, res) => {
    database = req.body;
    res.json({ message: "Sincronizado com sucesso!" });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));
