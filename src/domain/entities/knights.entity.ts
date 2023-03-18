import { Schema } from 'mongoose'
import * as mongoose from 'mongoose'

const Knight = new Schema({
  _id: { type: Schema.Types.ObjectId },
  name: { type: String, required: true },
  nickname: { type: String, required: true },
  birthday: { type: String, required: true },
  class: { type: String, required: true },
  weapons: [{ ref: 'Weapon', type: Schema.Types.ObjectId }],
  equippedWeapon: { type: Schema.Types.ObjectId, required: false },
  attributes: { type: Schema.Types.Mixed, required: true },
  keyAttribute: { type: String, required: true }
}, { collection: 'knights' })

export const Knights = mongoose.model('Knight', Knight)
