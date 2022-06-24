import React, { useState, useEffect } from 'react'
import { Route, Link, Switch } from 'react-router-dom'
import Home from './components/home'
import Form from './components/order'
import schema from './validation/formSchema'

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
        setFormValues(initialFormValues)
      })
      .catch((err) => console.error(err))
  }

  const orderChange = (name, value) => {
    yup
      .reach(chema, name)
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
      <h1 className='header'>Lambda Eats</h1>
      <div className='links'>
        <Link t0='/' id='home'>
          Home
        </Link>
        <Link to='/pizza' id='order-pizza'>
          Order Now!
        </Link>
      </div>
      <Switch>
        <Route exact path={'/pizza'}>
          <Form
            values={values}
            change={orderChange}
            submit={submitOrder}
            disabled={disabled}
            errors={errors}
          />
        </Route>
        <Route path='/'>
          <Home />
        </Route>
      </Switch>
    </div>
  )
}
export default App
