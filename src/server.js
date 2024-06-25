import htpp from 'node:http'

const server = htpp.createServer((req, res) => {
  return res.end('Hello World!')
})

server.listen(3333)
