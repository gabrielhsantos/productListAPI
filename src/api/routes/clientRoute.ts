import * as express from 'express'
import { authMiddleware } from '@api/middlewares/auth'
import { ClientController } from '../controllers/client/clientController'

const client = new ClientController()
const clients = express.Router()

clients.post('/', authMiddleware, client.saveClient)
clients.get('/', authMiddleware, client.clientsList)
clients.get('/:id', authMiddleware, client.findClient)
clients.patch('/:id', authMiddleware, client.updateClient)
clients.delete('/:id', authMiddleware, client.removeClient)

export { clients }