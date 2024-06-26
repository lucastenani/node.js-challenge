import htpp from 'node:http'

import { Database } from './database.js'
import { json } from './middlewares/json.js'

const database = new Database()

const server = htpp.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  if (method === 'GET' && url === '/tasks') {
    const tasks = database.select('tasks')

    return res.end(JSON.stringify(tasks))
  } else if (method === 'POST' && url === '/tasks') {
    const { title, description } = req.body

    const task = {
      title,
      description,
      completed_at: null,
    }

    database.insert('tasks', task)

    return res.writeHead(201).end()
  } else if (method === 'PUT' && url === '/tasks/:id') {
    return res.writeHead(404).end()
  } else if (method === 'DELETE' && url === '/tasks/:id') {
    return res.writeHead(404).end()
  } else if (method === '/tasks/:id/complete' && url === '/tasks/:id') {
    return res.writeHead(404).end()
  }

  return res.writeHead(404).end()
})

server.listen(3333)
