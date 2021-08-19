import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class Step extends BaseModel {
  @column({ isPrimary: true })
  public id: number

  @column()
  public stepTitle: string

  @column()
  public stepDescription: string
}
