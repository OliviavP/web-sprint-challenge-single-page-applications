describe('empty spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })
})

const nameInput = () => cy.get('input[id="name-input"]')
const sizeInput = () => cy.get('input[id="size-dropdown"]')
const cheeseInput = () => cy.get('input[name="cheese"]')
const peppInput = () => cy.get('input[name="pepperoni"]')
const onInput = () => cy.get('input[name="onions"]')
const oliInput = () => cy.get('input[name="olives"]')
const ordButton = () => cy.get('input[id="order-button"')

it('add text', () => {
  nameInput()
    .should('have.value', '')
    .type('Olivia')
    .should('have.value', 'Olivia')
})
it('choose size', () => {
  sizeInput().select('12')
})
it('can choose toppings', () => {
  cheeseInput().click()
  peppInput().click()
  onInput().click()
  oliInput().click()
})
it('submits order form', () => {
  ordButton().click()
})
