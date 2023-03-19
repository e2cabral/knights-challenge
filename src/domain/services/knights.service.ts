import type Knight from '../models/knight.model'
import KnightsRepositories from '../../data/repositories/knights.repositories'
import { isNullOrUndefined } from '../../infra/helpers/verification.helper'

export class KnightsService {
  async find (
    page: string,
    itemsPerPage: string,
    filter?: string
  ): Promise<Knight[] | Error> {
    try {
      const repository = new KnightsRepositories()

      if (isNullOrUndefined(filter)) {
        return await repository.find(page, itemsPerPage)
      }

      return await repository.find(page, itemsPerPage, filter)
    } catch (err) {
      return new Error((err as Error).message)
    }
  }

  async create (knight: Knight): Promise<void> {
    try {
      const repository = new KnightsRepositories()
      await repository.create(knight)
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async update (knight: Knight, id: string): Promise<void> {
    try {
      const repository = new KnightsRepositories()
      await repository.update(knight, id)
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }
}
