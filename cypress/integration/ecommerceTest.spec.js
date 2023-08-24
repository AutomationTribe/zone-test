describe("All Ecommerce tests",function(){

    before("Setup",function(){
        cy.visit("https://ecommerce-playground.lambdatest.io/");
    })

    it("should search for a phone",function(){

        let searchTerm = "phone";
        let expectedUrl = "https://ecommerce-playground.lambdatest.io/index.php?route=product%2Fsearch&search=phone";
        cy.search(searchTerm,expectedUrl);

    })

    it("should hover over the phone and add phone to cart",function(){

       /* cy.wait(3000);
        cy.get('#mz-product-grid-image-40-212469 > .carousel-inner > .active > .lazy-load').trigger("mouseover",{force:true});
        //cy.wait(3000);
        cy.get("button[title='Add to Chart']").should("be.visible");*/
        cy.get('#mz-product-grid-image-40-212469 > .carousel-inner > .active > .lazy-load').realHover('mouse');
        cy.get("button[title='Add to Cart']").eq(0).should("be.visible").click();

    })

    it("should proceed to checkout",function(){

        cy.get(".form-row > :nth-child(2) > .btn").click({force:true});
    })

    it("should fill the personal and billing details form",function(){

        cy.fillCheckoutForm();
    })

    it("should uncheck the store newsletter",function(){
        cy.get("input[name='newsletter']").uncheck({force:true});
    })

    it("should complete checkout",function(){

        cy.get("input[name='account_agree']").check({force:true});
        cy.get("input[name='agree']").check({force:true});
        cy.get("button[id='button-save']").click();
        cy.wait(1000);
        cy.get("button[id='button-confirm']").click();
        cy.url().should("eq","https://ecommerce-playground.lambdatest.io/index.php?route=checkout/success");
    })
})