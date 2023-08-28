const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app')
const app = express();
const port = 3000;

app.get("/", (req,res) => {
  res.send('Hello borntoDev.com')  
}) //ใช้จัดการ request

app.listen(port, ()=>{
    debug("Listening on port %d", chalk.blue("Test js"));
})
