const express = require ('express')
const router = express.Router()

let users = [
    {id: 1, name: 'rhazes', email: 'rhazes@gmail.com'},
    {id: 2, name: 'asep', email: 'asep@gmail.com'}
]

router.route('/users')

.get(function (req,res){
    res.json(users)
})

.post( function (req,res){
    users.push(req.body)
    res.send(users)
})

router.put('/users/:id', function (req,res){
    const id = req.params.id
    users.filter(user =>{
        if(user.id == id){
            user.id = id
            user.name = req.body.name
            user.email = req.body.email

            return user
        }
    })
    res.json(users)
})

router.delete('/users/:usersid', function (req,res){
    let id = req.params.usersid
    users = users.filter(user => user.id != id)
    res.send(users)
})

module.exports = router