const express=require('express');
const app=express();
const path=require('path');

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.static(path.join(__dirname,'public')));

const todo=['suicide','hell','die'];

app.get('/',(req,res)=>{
    res.render('index');
})

app.get('/todos',(req,res)=>{
    res.render('todos',{todo})
})

app.get('/random',(req,res)=>{
    const rnum=Math.floor(Math.random() * 10);
    res.render('random',{rnum});
})

app.listen(3000,()=>{
    console.log("server is running");
})