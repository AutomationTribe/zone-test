// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import Utility from "../pages/Utility";
import CheckoutPage from "../pages/CheckoutPage";
import User from "../fixtures/user.json";

let utility,checkout;
Cypress.Commands.add("search",function(searchTerm,expectedUrl){

  utility =  new Utility();
  utility.search(searchTerm,expectedUrl);

})

Cypress.Commands.add("fillCheckoutForm",function(user ){

    checkout = new CheckoutPage();

    checkout.enterFirstName(User.personalDetails.firstName);
    checkout.enterlastName(User.personalDetails.lastName);
    checkout.enterEmail(User.personalDetails.email);
    checkout.enterTelephone(User.personalDetails.telephone);
    checkout.enterPassword(User.personalDetails.password);
    checkout.enterConfirmPassword(User.personalDetails.password);

    checkout.enterCompanyName(User.billingDetails.company);
    checkout.enterAddress(User.billingDetails.address);
    checkout.enterCity(User.billingDetails.city);
    checkout.enterPostCode(User.billingDetails.postCode);
    checkout.selectCountry(User.billingDetails.country);
    checkout.selectState(User.billingDetails.state);

})