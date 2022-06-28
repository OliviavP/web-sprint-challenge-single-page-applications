import React from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: yellow;
`
const StyledButton = styled.button`
  background-color: black;
  color: red;
  font-size: 20px;
  border-radius: 5px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: red;
    color: black;
  }
`

export default function Homepage() {
  const history = useHistory()

  const routeToOrder = () => {
    history.push('/pizza')
  }
  return (
    <StyledWrapper className='wrapper'>
      <img
        src='https://www.pngarts.com/files/3/Pizza-Free-PNG-Image.png'
        alt='Image of a pizza'
      />
      <StyledButton onClick={routeToOrder} className='order-button'>
        Order Now!
      </StyledButton>
    </StyledWrapper>
  )
}
