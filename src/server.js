import htpp from 'node:http'

import { json } from './middlewares/json.js'
import { routes } from './routes.js'

const server = htpp.createServer(async (req, res) => {
  const { method, url } = req

  await json(req, res)

  const route = routes.find((route) => {
    return route.method === method && route.path === url
  })

  return route ? route.handler(req, res) : res.writeHead(404).end()
})

server.listen(3333)
