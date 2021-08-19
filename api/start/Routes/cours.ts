import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Database from '@ioc:Adonis/Lucid/Database'

export default async function showCours({}: HttpContextContract) {
  return Database.from('Cours').select('*')
}
