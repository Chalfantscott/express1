const express = require('express');
const fs = require('fs');
const app = express();

app.get('/', (request, result) => {
    result.send('Hey Builders!');
});

app.get('/blog', (request, response) => {
    fs.readFile('blog-data.json', (err, data) =>{
        if (err) {return console.log(err)}
        response.send(JSON.parse(data));
    })
})

app.listen(3000, () => {
    console.log('Running on port 3000');
});