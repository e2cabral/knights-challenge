import type Weapon from './weapon.model'
import { Attributes } from './attributes.model'

export default interface Knight {
  name: string
  nickname: string
  birthday: string
  class: string
  weapons: Weapon[]
  equippedWeapon: string
  attributes: Attributes
  keyAttribute: string
}
