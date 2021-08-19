import Route from '@ioc:Adonis/Core/Route'
import TestRoute from './Routes/test'
import showCours from './Routes/cours'
import newUser from './Routes/newUser'
import displayusers from './Routes/displayusers'

Route.get('/', async () => {
  return { hello: 'jojo v10' }
})

Route.get('/test', TestRoute)

Route.get('/cours', showCours)

Route.post('/adduser', newUser)

Route.get('/displayusers', displayusers)
