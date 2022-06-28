import React from 'react'
import styled from 'styled-components'

const StyledH1 = styled.h1`
  color: darkred;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: gold;
  }
`

const StyleTitle = styled.h2`
  color: darkred;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: gold;
  }
`
const StyleInput = styled.input`
  border-radius: 8px;
`

const StyleSpec = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const StyleButton = styled.button`
  background-color: darkred;
  border-radius: 8px;
  color: gold;
  margin-top: 2%;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: gold;
    color: darkred;
  }
`

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
        <StyledH1>Create Your Pizza!</StyledH1>
      </div>
      <div className='inputs'>
        <StyleSpec className='name'>
          <StyleTitle>Name</StyleTitle>
          <div>{errors.name}</div>
          <StyleInput
            id='name-input'
            type='text'
            name='name'
            placeholder='Type your name'
            value={values.name}
            onChange={onChange}
          />
        </StyleSpec>
        <StyleSpec className='size'>
          <StyleTitle>Pizza Size</StyleTitle>
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
        </StyleSpec>
        <StyleSpec className='toppings'>
          <StyleTitle>Toppings</StyleTitle>
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
        </StyleSpec>
        <StyleSpec className='Special'>
          <StyleTitle>Special Instructions</StyleTitle>
          <StyleInput
            type='text'
            name='special'
            value={values.special}
            onChange={onChange}
            id='special-text'
          />
        </StyleSpec>
      </div>
      <StyleSpec className='submit'>
        <StyleButton id='order-button'>Order Now</StyleButton>
      </StyleSpec>
    </form>
  )
}
