const users = [
  { id: 1, name: 'Fulano' },
  { id: 2, name: 'Cicrano' },
]

const getUsers = (req, res) => {
  console.log('users: ', users)
  console.log('req: ', req)
  // res.body
  return res.status(200).json(users)
}

const getUser = (req, res) => {
  const { id } = req.params
  const user = users.find((user) => user.id.toString() === id)
  return res.status(200).json(user)
}

const createUser = (req, res) => {
  const nextId = users.length + 1
  users.push({ id: nextId, name: `${req.body['name']}` })
  const user = users.find((user) => user.id.toString() === nextId)
  return res.status(200).json(user)
}

const editUser = (req, res) => {
  const { id } = req.params
  console.log('edita user ', id)
}

const deleteUser = (req, res) => {
  const { id } = req.params
  console.log('deleta user ', id)
}

module.exports = { getUsers, getUser, createUser, editUser, deleteUser }
