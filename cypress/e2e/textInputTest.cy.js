import { TextInput } from "../pages/textInput";
const textInput = new TextInput()
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/textinput')
    cy.viewport(414, 896);
  });
  it('passes', () => {
    textInput.validateHamburIconMenu()
    textInput.validateOptionHamburgMenu()
    textInput.validateNewOpenWindowHome()
  })
  it('passes', () => {
    textInput.validateHamburIconMenu()
    textInput.validateOptionHamburgMenu()
  })
  it('passes', () => {
    textInput.validateHamburIconMenu()
    textInput.validateOptionHamburgMenu()
    textInput.validateNewOpenWindowHome()
  })
  it('passes', () => {
    textInput.validateHamburIconMenu()
    textInput.validateOptionHamburgMenu()
    textInput.validateNewOpenWindowResources()
  })
  it.only('passes', () => {
    textInput.clickAndValidateInputText()
    textInput.clickUpdateButton()
    textInput.validateUpdateTextButton()
  })
})