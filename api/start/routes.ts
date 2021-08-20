import Route from '@ioc:Adonis/Core/Route'
import UsersController from 'App/Controllers/Http/UsersController'
import showCours from './Routes/cours'
import newUser from './Routes/newUser'
import displayusers from './Routes/displayusers'

Route.get('/', async () => {
  return { hello: 'jojo v10' }
})

/* User controllers */
Route.get('users', 'UsersController.get')
Route.post('users', 'UsersController.post')

Route.get('/cours', showCours)

Route.post('/adduser', newUser)

Route.get('/displayusers', displayusers)
