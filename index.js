const app = require('./server');

const host = "http://localhost";
const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`Servidor iniciado en ${host}:${port}`);
});