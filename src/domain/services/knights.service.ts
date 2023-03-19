import type Knight from '../models/knight.model'
import KnightsRepositories from '../../data/repositories/knights.repositories'
import { isNullOrUndefined } from '../../infra/helpers/verification.helper'

export class KnightsService {
  repository!: KnightsRepositories
  async find (
    page: string,
    itemsPerPage: string,
    filter?: string
  ): Promise<Knight[] | Error> {
    try {
      if (isNullOrUndefined(filter)) {
        return await this.repository.find(page, itemsPerPage)
      }

      return await this.repository.find(page, itemsPerPage, filter)
    } catch (err) {
      return new Error((err as Error).message)
    }
  }

  async findById (
    id: string
  ): Promise<Knight> {
    try {
      const repository = new KnightsRepositories()

      return await repository.findById(id)
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async create (knight: Knight): Promise<void> {
    try {
      await this.repository.create(knight)
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async update (knight: Knight, id: string): Promise<void> {
    try {
      await this.repository.update(knight, id)
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }

  async delete (id: string): Promise<void> {
    try {
      await this.repository.delete(id)
    } catch (err) {
      throw new Error((err as Error).message)
    }
  }
}
