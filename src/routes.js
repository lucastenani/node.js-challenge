import { Database } from './database.js'

const database = new Database()

export const routes = [
  {
    method: 'GET',
    path: '/tasks',
    handler: (_, res) => {
      const tasks = database.select('tasks')

      return res.end(JSON.stringify(tasks))
    },
  },
  {
    method: 'POST',
    path: '/tasks',
    handler: (req, res) => {
      const { title, description } = req.body

      const task = {
        title,
        description,
        completed_at: null,
      }

      database.insert('tasks', task)

      return res.writeHead(201).end()
    },
  },
  { method: 'PUT', path: '/tasks/:id', handler: (req, res) => {} },
  { method: 'DELETE', path: '/tasks/:id', handler: (req, res) => {} },
  { method: 'PATCH', path: '/tasks/:id/complete', handler: (req, res) => {} },
]
