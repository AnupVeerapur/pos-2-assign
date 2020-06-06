const express = require('express');
const next = require('next');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

let dev = false;

const app = next({ dev, dir: process.cwd() });
const handle = app.getRequestHandler();
const port = process.env.PORT || 3005;

app.prepare().then(() => {
    const server = express();
    server.use(cookieParser());
    server.use(bodyParser.urlencoded({
        extended: true
    }));
    server.use(bodyParser.json());


    server.get('*', (req, res) => {
        return handle(req, res);
    });

    server.listen(port, "127.0.0.1", err => {
        if (err) throw err;
        console.log(`> Ready on http://127.0.0.1:${port}`);
    });
});