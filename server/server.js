const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const apiRouter = require('./router/apiroot');
const { tokencron } = require("./controller/cron");

const http = require('http').createServer(app);

http.listen(8080, () => {
    tokencron();
    console.log('Listening 8080');
});

app.use(cors());

app.use(express.json({
    limit: '10mb'
}));
app.use(express.urlencoded({
    limit: '10mb',
    extended: false
}));

app.use('/', apiRouter);