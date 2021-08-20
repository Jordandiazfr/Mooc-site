import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { v4 } from 'uuid'
import { schema, rules } from '@ioc:Adonis/Core/Validator'
import User from '../../../app/Models/User'

interface NewUser {
  id?: string
  firstName?: string
  lastName?: string
  password?: string
  email?: string
}

export default class UsersController {
  /* GET METHOD */
  public async get() {
    return Database.from('users').select('*')
  }

  /* POST METHOD */
  public async post(ctx: HttpContextContract) {
    const payload: NewUser = ctx.request.body()

    const user = new User()
    // Assign username and email
    user.id = v4()
    user.firstName = payload.firstName!
    user.lastName = payload.lastName!
    user.email = payload.email!
    user.password = payload.password!

    // Insert to the database
    console.log(user)
    await user.save()
    return user.$isPersisted
  }

  /* UPDATE METHOD */
  public async update(ctx: HttpContextContract) {
    return ctx
  }
}



{
  email: schema.string({}, [
    rules.email()
  ])
}
