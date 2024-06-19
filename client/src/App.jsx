import { useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import './App.css'
import StripeCheckout from 'react-stripe-checkout'
function App() {
  const [product, setproduct] = useState({
    name: 'react ',
    price: 10,
    productBy: 'facebook',
  })

  const makePayment = async (token) => {
    const obj = {
      token,
      product,
    }
    const payload = await axios.post('http://localhost:3000/payment', obj)
    console.log(payload)
  }
  return (
    <>
      <div>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        <StripeCheckout
          stripeKey={import.meta.env.VITE_PUBLISH_API}
          token={makePayment}
          name="Buy React"
          amount={product.price * 100}
          shippingAddress
          billingAddress
        >
          <button>Buy React in {product.price}$</button>
        </StripeCheckout>
      </p>
    </>
  )
}

export default App
