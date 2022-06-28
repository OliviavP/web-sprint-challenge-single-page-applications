import * as yup from 'yup'

export default yup.object().shape({
  name: yup
    .string()
    .required('Name is required.')
    .min(2, 'name must be at least 2 characters'),
  size: yup.string().oneOf(['8', '10', '12', '14'], 'Pick a size'),
  cheese: yup.boolean(),
  pepperoni: yup.boolean(),
  onions: yup.boolean(),
  olives: yup.boolean(),
  special: yup.string(),
})
