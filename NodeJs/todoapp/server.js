const express = require('express');
const app = express();

app.listen(8080, function(){
    console.log('listening on 8080')

});

app.get('/', function(req,res){
    res.sendFile(__dirname + '/index.html')
})

app.get('/test', function(req,res){
    res.send('test');
})


app.get('/beauty', function(req,res){
    res.send('뷰티 관련 페이지입니다2.');
})
