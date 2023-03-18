import * as mongoose from 'mongoose'

export const Connect = async (): Promise<typeof mongoose> => {
  return await mongoose.connect('your connection string')
}
