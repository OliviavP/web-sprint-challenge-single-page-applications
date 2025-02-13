import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/home'
import Form from './components/order'
import schema from './validation/formSchema'
import axios from 'axios'
import * as yup from 'yup'
import styled from 'styled-components'

const StyledTitle = styled.h1`
  align-items: center;
  display: flex;
  justify-content: center;
  font-size: 50px;
  transition: all 0.2s ease-in-out;
  &:hover {
    color: gold;
  }
`

const initialFormValues = {
  name: '',
  size: '',
  cheese: false,
  pepperoni: false,
  onions: false,
  olives: false,
  special: '',
}

const initialFormErrors = {
  name: '',
  size: '',
}

const initialDisabled = true
const initialOrder = []

const App = () => {
  const [values, setValues] = useState(initialFormValues)
  const [errors, setErrors] = useState(initialFormErrors)
  const [order, setOrder] = useState(initialOrder)
  const [disabled, setDisabled] = useState(initialDisabled)

  const newOrder = (addNew) => {
    axios
      .post('https://reqres.in/api/orders', addNew)
      .then((res) => {
        setOrder([res.data, ...order])
        setValues(initialFormValues)
      })
      .catch((err) => console.error(err))
  }

  const orderChange = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setErrors({ ...errors, [name]: '' })
      })
      .catch((err) => {
        setErrors({ ...errors, [name]: err.errors[0] })
      })
    setValues({ ...values, [name]: value })
  }

  const submitOrder = () => {
    const addNew = {
      name: values.name.trim(),
      size: values.size.trim(),
      toppings: ['cheese', 'pepperoni', 'onions', 'olives'],
      special: values.special.trim(),
    }
    newOrder(addNew)
  }
  useEffect(() => {
    schema.isValid(values).then((valid) => {
      setDisabled(!valid)
    })
  }, [values])
  return (
    <div className='app'>
      <StyledTitle className='header'>Lambda Eats</StyledTitle>
      <div className='links'>
        <Link to='/' id='pizza-form'></Link>
        <Link to='/pizza' id='order-pizza'></Link>
      </div>
      <Switch>
        <Route exact path='/pizza'>
          <Form
            values={values}
            change={orderChange}
            submit={submitOrder}
            disabled={disabled}
            errors={errors}
          />
        </Route>
        <Route exact path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
export default App
