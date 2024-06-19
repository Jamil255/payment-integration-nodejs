import Stripe from 'stripe'
export const handlePayment = async (req, res) => {
  try {
    const stripe = new Stripe(process.env.SCERTE_API)

    const customer = await stripe.customers.create({
      email: 'customer@example.com',
    })

    console.log(customer.id)
  } catch (error) {
    console.log(error.message)
  }
}
