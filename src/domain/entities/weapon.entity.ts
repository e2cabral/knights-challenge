import { Schema } from 'mongoose'
import * as mongoose from 'mongoose'

const Weapon = new Schema({
  _id: { type: Schema.Types.ObjectId },
  name: { type: String, required: true },
  mod: { type: Number, required: true },
  attr: { type: String, required: true },
  knights: [{ ref: 'Knight', type: Schema.Types.ObjectId, required: false }]
}, { collection: 'weapons' })

export const Weapons = mongoose.model('Weapon', Weapon)
