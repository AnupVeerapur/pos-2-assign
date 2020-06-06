const expconstress = require('express');
const compression = require('compression');
const path = require('path');

const app = expconstress();
// const app = express();

app.use(compression());

// app.use('/static', express.static("./build/static/"));

app.get('/', (req, res) => {
    res.sendFile('index.html', { root: './build/' });
});

const PORT = process.env.PORT || 3005;

app.listen(PORT, '0.0.0.0', (err) => {
    if (err) { console.log(err); }
    console.info(`==> 🌎 app listening on http://localhost:${PORT}.`);
});