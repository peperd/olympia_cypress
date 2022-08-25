/// <reference types="cypress" />

import { faker } from '@faker-js/faker';
import SignUp from "../pages/SignUpPage";

const signUp = new SignUp()

describe('sample test cases for Olympia casino', () => {
    before(() => {
        signUp.openWebpage()
    })

    let email = faker.internet.email();
    let password = faker.internet.password();
    let firstName = faker.name.firstName();
    let lastName = faker.name.lastName();
    let birthDay = faker.datatype.number({
        'min': 1,
        'max': 30
    });;
    let birthMonth = faker.datatype.number({
        'min': 1,
        'max': 12
    });;
    let birthYear = faker.datatype.number({
        'min': 1960,
        'max': 2000
    });;
    let phoneNumber = faker.phone.number('#######');
    let city = faker.address.cityName();
    let address = faker.address.streetAddress();
    let postalCode = faker.address.zipCode()

    it('Fill in first modal window in Sign Up', () => {
        signUp.inputEmail(email);
        signUp.inputPassword(password);
        signUp.chooseAUDCurrency();
        signUp.clickNextButton()
    })

    it('Fill in second modal window in Sign Up', () => {      
      signUp.inputFirstName(firstName);
      signUp.inputLastName(lastName);
      signUp.inputBirthDate(birthDay);
      signUp.inputBirthMonth(birthMonth);
      signUp.inputBirthYear(birthYear);
      signUp.inputPhoneNumber(phoneNumber);
      signUp.clickNextButton()
    })

    it('Fill in third modal window and validate', () => {
        signUp.inputCity(city);
        signUp.inputAddress(address);
        signUp.inputPostalCode(postalCode)
        signUp.checkCheckboxes();
        signUp.checkForErrors();
        signUp.verifySignUpButton()
    })
})
    