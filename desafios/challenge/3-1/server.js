const express = require('express')
const nunjucks = require('nunjucks')
const data = require("./data/data")

const server = express()

server.set('view engine', 'njk')
server.use(express.static('public'))

nunjucks.configure('view',{
    express: server,
    autoescape: false, //Permite o uso de html em variaveis njk
    noCache: true
})
/* Rotas */
server.get("/", function(req,res){
    res.render('courses', {courses : data.courses})
})

server.get("/about", function(req,res){
    res.render('about', {company: data.about})
})

server.use(function(req,res){
    res.status(404).render("not-found")
})

server.listen(5000, function(){
    console.log('Server is running at port 5000')
})