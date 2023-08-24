class CheckoutPage{

    enterFirstName(fName){

        cy.get("input[name='firstname']").type(fName);
    }

    enterlastName(lName){

        cy.get("input[name='lastname']").type(lName);
    }

    enterEmail(email){

        cy.get("input[name='email']").type(email);
    }

    enterTelephone(phone){

        cy.get("input[name='telephone']").type(phone);
    }

    enterPassword(password){

        cy.get("input[name='password']").type(password);
    }

    enterConfirmPassword(password){
        cy.get("input[name='confirm']").type(password);
    }

    enterCompanyName(company){

        cy.get("input[name='company']").type(company);
    }

    enterAddress(address){

        cy.get("input[name='address_1']").type(address);
    }
    enterCity(city){

        cy.get("input[name='city']").type(city);
    }
    enterPostCode(postcode){

        cy.get("input[name='postcode']").type(postcode);
    }
    selectCountry(country){

        cy.get("select[name='country_id']").select(country);
    }

    selectState(state){
        cy.wait(3000);
        cy.get("select[name='zone_id']").select(state);
    }

    
}
export default CheckoutPage