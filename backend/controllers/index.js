import Stripe from 'stripe'
import { v4 as uuidv4 } from 'uuid'
import dotenv from 'dotenv'
dotenv.config()

const stripe = new Stripe(process.env.SCERTE_API) // Replace with your Stripe secret key

export const handlePayment = (req, res) => {
  const { product, token } = req.body

  console.log(product)
  console.log(product?.price)
  const id = uuidv4()

  stripe.customers
    .create({
      email: token.email,
      source: token.id,
    })
    .then((customer) => {
      return stripe.charges.create(
        {
          amount: product.price * 100, // Amount in cents
          currency: 'usd',
          customer: customer.id,
          receipt_email: token.email,
          description: product.name,
        },
        { idempotencyKey: id }
      )
    })
    .then((result) => res.status(200).json(result))
    .catch((err) => res.status(500).json(err.message))
}
