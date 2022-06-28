import React from 'react'

export default function OrderForm(props) {
  const { values, submit, change, errors } = props

  const onSubmit = (evt) => {
    evt.preventDefault()
    submit()
  }
  const onChange = (evt) => {
    const { name, value, checked, type } = evt.target
    const valueUse = type === 'checkbox' ? checked : value
    change(name, valueUse)
  }

  return (
    <form className='form' onSubmit={onSubmit} id='pizza-form'>
      <div className='main'>
        <h1>Create Your Pizza!</h1>
      </div>
      <div className='inputs'>
        <div className='name'>
          <h2>Enter Name</h2>
          <div>{errors.name}</div>
          <input
            id='name-input'
            type='text'
            name='name'
            placeholder='Type your name'
            value={values.name}
            onChange={onChange}
          />
        </div>
        <div className='size'>
          <h2>Pizza Size</h2>
          <select
            name='size'
            value={values.size}
            id='size-dropdown'
            onChange={onChange}
          >
            <option value=''>---Select Pizza---</option>
            <option value='8'>8 inches</option>
            <option value='10'>10 inches</option>
            <option value='12'>12 inches</option>
            <option value='14'>14 inches</option>
          </select>
        </div>
        <div className='toppings'>
          <h2>Toppings</h2>
          <label>
            Cheese
            <input
              type='checkbox'
              name='cheese'
              checked={values.cheese}
              onChange={onChange}
            />
          </label>
          <label>
            Pepperoni
            <input
              type='checkbox'
              name='pepperoni'
              checked={values.pepperoni}
              onChange={onChange}
            />
          </label>
          <label>
            Onions
            <input
              type='checkbox'
              name='onions'
              checked={values.onions}
              onChange={onChange}
            />
          </label>
          <label>
            Olives
            <input
              type='checkbox'
              name='olives'
              checked={values.olives}
              onChange={onChange}
            />
          </label>
        </div>
        <div className='Special'>
          <h2>Special Instructions</h2>
          <input
            type='text'
            name='special'
            value={values.special}
            onChange={onChange}
            id='special-text'
          />
        </div>
      </div>
      <div className='submit'>
        <button id='order-button'>Order Now</button>
      </div>
    </form>
  )
}
