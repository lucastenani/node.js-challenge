import htpp from 'node:http'

import { json } from './middlewares/json.js'

const tasks = []

const server = htpp.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  if (method === 'GET' && url === '/tasks') {
    return res.end(JSON.stringify(tasks))
  } else if (method === 'POST' && url === '/tasks') {
    const { title, description } = req.body

    tasks.push({
      id: 1,
      title,
      description,
      completed_at: null,
      created_at: String(new Date()),
      updated_at: String(new Date()),
    })
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
