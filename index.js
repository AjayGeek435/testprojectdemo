const express = require("express");
const app = express();

const path = require('path');
const PORT = process.env.PORT || 8000;

app.get('/',(req,res) => {
    res.send("Hello Welcome To The NodeJS Server...");
});



app.use(express.static(path.join(__dirname,"reactjsclient", "build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build","reactjsclient", "index.html"));
});


app.get('/api/posts',(req,res) => {

  const posts = [
    {id:101,userId:"Ajay"},
    {id:102,userId:"Darshil"},
  ]
  return res.json(posts);
});

app.get('/api/pages',(req,res) => {

  const posts = [
    {id:10,userId:"Ajay"},
    {id:11,userId:"Darshil"},
  ]
  return res.json(posts);
});


app.listen(PORT , () => {
    console.log(`Port Number ${PORT}`);
})
