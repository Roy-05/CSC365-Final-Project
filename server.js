'use strict';

const express = require('express'),
    app = express(),
    request = require('request'),
    pokeModule = require('./modules/storage')

app.use(express.static('static'));

app.set('view engine', 'pug');
app.set('views', 'static/views');

app.get(''
    
    request({
    method: 'GET',
    url: ``,
    json: true
},
function(error,response,pokemon){
    res.json();
});
});)

const server = app.listen(3000, function() {
	console.log(`Server started on port ${server.address().port}`);
});

