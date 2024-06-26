import htpp from 'node:http'

const tasks = []

const server = htpp.createServer((req, res) => {
  const { method, url } = req
  console.log(method)
  console.log(url)

  if (method === 'GET' && url === '/tasks') {
    return res
      .setHeader('Content-type', 'application/json')
      .end(JSON.stringify(tasks))
  } else if (method === 'POST' && url === '/tasks') {
    tasks.push({
      id: 1,
      title: 'Cycling',
      description: 'Cycling on the street',
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
