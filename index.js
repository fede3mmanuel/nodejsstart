const express = require('express');

const app = express();

app.get('/', (request, response) => {
    readFile('./home.html', 'utf-8', (err, html) => {
        if (err) {
            response.status(500).send('sorry')
        }
        response.send(html);
    })
});

app.listen(process.env.PORT || 3000, () => console.log('App available on localhost:3000'))