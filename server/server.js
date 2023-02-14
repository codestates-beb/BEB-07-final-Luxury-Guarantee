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
app.use(express.static(path.join(__dirname, '../client/build')));

if (require('./https_config').options.exist) {
    const https = require('https');
    const options = require('./https_config').options;
    const httpsPort = 8443;
    https.createServer(options, app).listen(httpsPort, () => {
        console.log(`server is listening at PORT : ${httpsPort}`);
    });
} else {
    app.listen(app.get('port'), () => {
        console.log(`server is listening at PORT : ${app.get('port')}`);
    });
}



