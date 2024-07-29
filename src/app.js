const express = require('express')
const bodyParser = require('body-parser')
const userController = require('./controllers/userController')

const app = express()

const PORT = 8080

app.use(bodyParser.json())

app.get('/', (req, res) => {
  console.log('hey, rota geral')
})

app.get('/users/:id', (req, res) => {
  userController.getUser(req, res)
})

app.get('/users', (req, res) => {
  userController.getUsers(req, res)
})

app.post('/users', (req, res) => {
  userController.createUser(req, res)
})

app.patch('/users/:id', (req, res) => {
  userController.editUser(req, res)
})

app.delete('/users/:id', (req, res) => {
  userController.deleteUser(req, res)
})

app.listen(PORT, () => {
  console.log('Sistema iniciado na porta ', PORT)
})
