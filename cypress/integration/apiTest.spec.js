///<reference types="cypress" />
describe("All API Test cases",function(){

    let options;

    it("should get all posts",function(){

        options = {
            "url" : "https://jsonplaceholder.typicode.com/posts",
            "method" : "get",
        };

        cy.request(options).then((res)=>{
            const posts = res.body;
            expect(res.status).to.eq(200);
            posts.forEach(element => {
                cy.log(element.title)
            });
        })
        
    })

    it("should return all post made by  made by userid 1",function(){

        const userId = 1;
        options = {
            "url" : `https://jsonplaceholder.typicode.com/posts/${userId}`,
            "method" : "get",
        };

        cy.request(options).then((res)=>{

            expect(res.status).to.eq(200);
            const posts =  res.body;
            cy.log(posts);
            cy.log(`Number of posts made by user with Id 1 is ${Object.keys(posts).length}`);
        })
    })

    it("should create a post by user id 1",function(){

        options = { 
            "url" : "https://jsonplaceholder.typicode.com/posts",
            "method" : "post",
            "headers": {
                'Content-type': 'application/json; charset=UTF-8',
            },
            "body" :{
                "title" : "Zone",
                "body" : "Zone QA manager Test",
                "userId": 1
            }
        };

        cy.request(options).then((res)=>{
            expect(res.status).to.eq(201);
        })
    })
})