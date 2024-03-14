export class TextInput{
    elements = {
        toggleHamburBtn: () => cy.get('button[data-toggle="collapse"]'),
        menuToggleBtn: () => cy.get('div ul li'),
        getLinkHome: () => cy.get('a[href="/home"]'),
        getLinkResources: () => cy.get('a[href="/resources"]'),
        getInputText: () => cy.get('#newButtonName'),
        getUpdateBtn: () => cy.get('#updatingButton')
    }
    validateHamburIconMenu = () => {
        this.elements.toggleHamburBtn().should('be.visible').click()
    }
    validateOptionHamburgMenu = () => {
        this.validateHamburIconMenu()
        this.elements.menuToggleBtn().find('a[href="/home"]').should('be.visible')
        this.elements.menuToggleBtn().find('a[href="/resources"]').should('be.visible')
    }
    validateNewOpenWindowHome = () => {
        this.elements.getLinkHome().invoke("removeAttr", "target").click()
        cy.get('#title').should('have.text', "UI Test AutomationPlayground")
    }
    validateNewOpenWindowResources = () => {
        this.elements.getLinkResources().invoke("removeAttr", "target").click()
        cy.get('h3').should('have.text', "Resources")
    }
    clickAndValidateInputText = () => {
        this.elements.getInputText().should('be.visible').click().clear().type('Este es un texto')
    }
    clickUpdateButton = () => {
        return this.elements.getUpdateBtn().click()
    }
    validateUpdateTextButton = () => {
        this.clickAndValidateInputText()
        const text = 'Este es un texto'
        return this.clickUpdateButton().should('contain.text', text)
    }
}