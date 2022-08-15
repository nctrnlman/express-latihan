const express = require ('express')
const userRouter = require('./router/users')
const app = express()
//warning
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get('/', function (request,response) {
    response.send('Home')
})

app.get('/profile', function (request,response){
    response.redirect('http://expressjs.com/')
})

app.use(userRouter)

app.get('/rhazes/:idrhazes', function (request,response){
    rhazes = request.params.idrhazes
    response.send(rhazes)
})

app.get('/wa', function(request,response){
    response.redirect('http://web.whatsapp.com')
})


app.listen(2000,function() {
    console.log('Server is okay')
    
})