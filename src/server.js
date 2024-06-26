import htpp from 'node:http'

const tasks = []

const server = htpp.createServer(async (req, res) => {
  const { method, url } = req
  const buffers = []

  for await (const chunk of req) {
    buffers.push(chunk)
  }

  try {
    req.body = JSON.parse(Buffer.concat(buffers).toString())
  } catch (error) {
    req.body = null
  }

  if (method === 'GET' && url === '/tasks') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(tasks))
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
