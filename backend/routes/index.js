import express from 'express'
import { handleGetRequest } from '../controllers/handleGetRequest.js'
import { handlePayment } from '../controllers/index.js'
const routes = express.Router()
// check routes
routes.get('/', handleGetRequest)
routes.post("/payment",handlePayment)

export default routes
