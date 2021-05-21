import Client from '../database'

export type World = {
  id: number;
  name: string;
  type: string;
  weight: number;
}

export class MythicalWorldStore {
  async index(): Promise<World[]> {
    try {
      const conn = await Client.connect()
      const sql = 'SELECT * FROM mythical_world'
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Cannot get world ${err}`)
    }
  }
}