/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'


Route.get('/', async () => {
  return { hello: 'world' }
})

// Rotas de Usuário
Route.get('/users', 'UsersController.getAll')
Route.post('/users', 'UsersController.create')
Route.put('/users', 'UsersController.update')
Route.delete('/users', 'UsersController.delete')


// Rotas de Remédio
Route.post('/remedies', 'RemediesController.create')
Route.get('/remedies', 'RemediesController.getAll')
Route.put('/remedies', 'RemediesController.update')
Route.delete('/remedies', 'RemediesController.delete')

// Rotas de Funcionario
Route.post('/employees', 'EmployeesController.create')
Route.get('/employees', 'EmployeesController.getAll')
Route.put('/employees', 'EmployeesController.update')
Route.delete('/employees', 'EmployeesController.delete')

// Rota de login funcionario
Route.post('/login', async ({auth, request, response}) => {
  const name = request.input('name')
  const cpf = request.input('cpf ')

  try {
    const token = await auth.use('api').attempt(name, cpf)
    return token
  } catch {

    return response.unauthorized('Invalid credentials')
  }

})




// localhost: /users/create_user
