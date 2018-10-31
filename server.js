const express= require('express');
const path=require('path');
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.set("view engine","hbs")
//app.use('/',express.static(path.join(__dirname,'public')));





app.use('/public',require('./routes/public'))
app.use('/private',require('./routes/private'))
app.use('/',require('./routes/route'))

app.listen(9874);