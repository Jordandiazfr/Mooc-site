import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default async function displayusers({}: HttpContextContract) {
  return Database.from('users').select('*')
}
