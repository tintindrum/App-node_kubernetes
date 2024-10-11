const express = require('express');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://mongodb:27017/my-database', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Simple route to test connection
app.get('/', (req, res) => {
    res.send('Bonjour de la team Node js!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Serveur run : ${PORT}`);
});
