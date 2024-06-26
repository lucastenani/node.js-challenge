import { randomUUID } from 'node:crypto'

export class Database {
  #database = {}

  #generateTimestamps() {
    const now = new Date()
    return {
      created_at: now.toISOString(),
      updated_at: now.toISOString(),
    }
  }

  select(table) {
    const data = this.#database[table] ?? []

    return data
  }

  insert(table, data) {
    const timestamps = this.#generateTimestamps()
    const id = randomUUID()
    const record = { id, ...data, ...timestamps }

    Array.isArray(this.#database[table])
      ? this.#database[table].push(record)
      : (this.#database[table] = [record])

    return data
  }
}
