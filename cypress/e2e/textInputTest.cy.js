import { TextInput } from "../pages/textInput";
const textInput = new TextInput()
describe('template spec', () => {
  beforeEach(() => {
    cy.visit('/textinput')
    cy.viewport(414, 896);
  });
  it('User clicks on the hamburger menu', () => {
    textInput.validateHamburIconMenu()
    textInput.validateOptionHamburgMenu()
    textInput.validateNewOpenWindowHome()
  })
  it('User views menu options', () => {
    textInput.validateHamburIconMenu()
    textInput.validateOptionHamburgMenu()
  })
  it('User clicks on the home option in the menu', () => {
    textInput.validateHamburIconMenu()
    textInput.validateOptionHamburgMenu()
    textInput.validateNewOpenWindowHome()
  })
  it('User clicks on the resources option in the menu', () => {
    textInput.validateHamburIconMenu()
    textInput.validateOptionHamburgMenu()
    textInput.validateNewOpenWindowResources()
  })
  it('User writes a text and clicks on the button', () => {
    textInput.clickAndValidateInputText()
    textInput.clickUpdateButton()
    textInput.validateUpdateTextButton()
  })
})