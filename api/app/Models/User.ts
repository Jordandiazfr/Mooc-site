import { DateTime } from 'luxon'
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class User extends BaseModel {
  @column({ isPrimary: true })
  public id: string

  @column()
  public email: string

  @column({ serializeAs: null })
  public password: string

  @column()
  public firstName: string

  @column()
  public lastName: string

  @column()
  public Role: string

  @column()
  public info: string

  @column.dateTime({ autoCreate: true })
  public creationDate: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  public updateAt: DateTime
}

/* Define a custom database table name.
export default class User extends BaseModel {
  public static table = 'app_users'
}
Defaults to the plural and snake case version of the model name. */
