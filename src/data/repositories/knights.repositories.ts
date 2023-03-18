import type Knight from '../../domain/models/knight.model'
import { Connect } from '../../main/config/database.config'
import { Knights } from '../../domain/entities/knights.entity'
import { Types } from 'mongoose'
import { Weapons } from '../../domain/entities/weapon.entity'

export default class KnightsRepositories {
  async find (
    page: string,
    itemsPerPage: string,
    filter?: string
  ): Promise<Knight[]> {
    try {
      await Connect()

      return (await Knights
        .find()
        .populate('weapons')
        .skip((Number(page) - 1) * Number(itemsPerPage))
        .limit(Number(itemsPerPage))
        .exec() as unknown) as Knight[]
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async create (knight: Knight): Promise<void> {
    try {
      await Connect()

      const knights = new Knights({
        name: knight.name,
        birthday: knight.birthday,
        nickname: knight.nickname,
        attributes: knight.attributes,
        keyAttribute: knight.keyAttribute,
        class: knight.class,
        weapons: knight.weapons,
        equippedWeapon: knight.equippedWeapon,
        _id: new Types.ObjectId()
      })

      const data = await knights.save()

      for (const id of data.weapons) {
        await Weapons.updateOne({ _id: id }, { $push: { knights: data._id } })
      }
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }
}
