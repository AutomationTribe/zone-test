class Utility{

    search(searchTerm,expectedUrl){

       cy.get("[name='search']").eq(1).type(searchTerm,{force:true});
        cy.get("button[title='Search']").click({force:true});
        cy.wait(3000);
        cy.url().should("eq",expectedUrl);
    }
}
export default Utility