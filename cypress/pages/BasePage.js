import selectors from "../resources/selectors";

class BasePage{
    url(){
        cy.visit('');
        cy.url().should('include','olympia')
    }

    setValue(WebElement, value) {
        cy.get(WebElement).type(value)
    }

    clickByText(text) {
        cy.contains(text).click()
    }

    clickBySel(selector) {
        cy.get(selector).click()
    }

    clickOnOneOfList(selector, index) {
        cy.get(selector).eq(index).click()
    }

}

export default BasePage