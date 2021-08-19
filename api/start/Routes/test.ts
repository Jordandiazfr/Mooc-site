import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default async function TestRoute({}: HttpContextContract) {
  return Database.from('jojo').select('*')
}
