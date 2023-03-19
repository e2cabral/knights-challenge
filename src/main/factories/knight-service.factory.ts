import KnightsRepositories from '../../data/repositories/knights.repositories'
import { KnightsService } from '../../domain/services/knights.service'

export default class KnightServiceFactory {
  getInstance (): KnightsService {
    const service = this.createService()
    service.repository = this.createRepository()

    return service
  }

  private createService (): KnightsService {
    return new KnightsService()
  }

  private createRepository (): KnightsRepositories {
    return new KnightsRepositories()
  }
}
