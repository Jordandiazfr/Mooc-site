/* eslint-disable prettier/prettier */
import User from '../../app/Models/User'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'
import { Request } from '@adonisjs/core/build/standalone'
import { DateTime } from 'luxon'
import {uuid} from 'uuidv4'

interface NewUser {
  id?: string,
  firstname?: string,
  email?: string,
  updateAt?: DateTime
}

export default async function newUser({request, response}: HttpContextContract) {

  const payload: NewUser = request.body()

  console.log(payload.firstname)
  console.log(payload)

  const user = await User.create({
    id: uuid(),
    firstName: payload.firstname,
    email: payload.email,
    updateAt: payload.updateAt
  })
  
  console.log(user.$isPersisted) // true
}


