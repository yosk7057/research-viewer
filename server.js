'use strict';

const fs = require('fs');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 8012;
app.use(express.static(__dirname));
var bodyParser = require('body-parser');

app.get('/', (req, res) => {
    fs.readdir('./img', function(err, files){
        if (err) throw err;
        res.render("index.ejs", {
      	    title: 'Knowledge',
            imgList: files
        })
    });
});

app.listen(PORT);
