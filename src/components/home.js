import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Homepage() {
  const history = useHistory()

  const routeToOrder = () => {
    history.push('/pizza')
  }
  return (
    <div className='wrapper'>
      <img src='pizza.jpg' alt='Image of a pizza' />
      <button onClick={routeToOrder} className='order-button'>
        Order Now!
      </button>
    </div>
  )
}
