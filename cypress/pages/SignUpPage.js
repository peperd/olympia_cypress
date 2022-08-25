/// <reference types="cypress" />
     
import BasePage from "./BasePage";
import selectors from "../resources/selectors"
const base = new BasePage()

class SignUp extends BasePage{
    openWebpage() {
        Cypress.on('uncaught:exception', (err, runnable) => {
            return false;
          });
        base.url();
        base.clickBySel(selectors.singUpButton);
        cy.url().should('include', 'sign-up=modal')
    }
    
    inputEmail(email) {
        base.setValue(selectors.inputEmailPlaceholder, email)
    }

    inputPassword(password) {
        base.setValue(selectors.inputPasswordPlaceholder, password)
    }

    chooseAUDCurrency() {
        base.clickBySel(selectors.chooseCurrencyDropdown);
        base.clickBySel(selectors.chooseAUDCurrencyItem)
    }

    inputFirstName(firstName) {
        base.setValue(selectors.inputFirstNamePlaceholder, firstName)
    }

    inputLastName(lastName) {
        base.setValue(selectors.inputLastNamePlaceholder, lastName)
    }

    inputBirthDate(birthDate) {
        base.setValue(selectors.inputDayOfBirthPlaceholder, birthDate)
    }

    inputBirthMonth(birthMonth) {
        base.setValue(selectors.inputMonthOfBirthPlaceholder, birthMonth)
    }

    inputBirthYear(birthYear) {
        base.setValue(selectors.inputYearOfBirthPlaceholder, birthYear)
    }

    inputPhoneNumber(phoneNumber) {
        base.setValue(selectors.inputMobileNumberPlaceholder, phoneNumber)
    }

    inputCity(city) {
        base.setValue(selectors.inputCityPlaceholder, city)
    }

    inputAddress(address) {
        base.setValue(selectors.inputAddressPlaceholder, address)
    }

    inputPostalCode(code) {
        base.setValue(selectors.inputPostalCodePlaceholder, code)
    }

    checkCheckboxes() {
        cy.get(selectors.checkboxes)
        .its('length')
        .then(numberOfCheckboxes => {
            for (let i=0; i <= numberOfCheckboxes-1; i +=1) {
                cy.get(selectors.checkboxes)
                .eq(i)
                .click()
            }
        })
    }

    checkForErrors() {
        cy.get(selectors.errorMessage).should('not.exist')
    }

    verifySignUpButton() {
        cy.get(selectors.verifySignUpButton).should('exist')
    }

    clickNextButton() {
        base.clickByText(selectors.nextButton)
    }
}

export default SignUp
