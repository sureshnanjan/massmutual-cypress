describe.skip("The Restful Booker CRUD Operations", {baseUrl:"https://restful-booker.herokuapp.com"},()=>{
    let token:string;
    let bookingdate:string
    it.skip("Health Check is OK", ()=>{
        cy.request({
            method: 'GET',
            url: '/ping'
        }).then(response => {
            expect(response.status).to.eq(201)
        })
    });

    it.skip("Getting auth Token works ", ()=>{
        cy.request({
            method: 'POST',
            url : '/auth',
            body : {
                "username" : "admin",
                "password" : "password123"
            },
            headers: {
                'Content-Type': 'application/json',
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            // cy.log(JSON.stringify(response))
            token = response.body.token
            cy.log("Your token is: "+ token)
        })
    })

    it.skip("Delete Not works without Token",()=>{
        cy.request({
            method: 'DELETE',
            url : '/booking/1',
            headers: {
            'content-type': 'application/json',
            'accept' : 'application/json',
            'cookie' : `token=${token}`
            },
        }).then((response) => {
            expect(response.status).to.eq(201)
        })
    })

    it.skip("Getting Booking Data", ()=>{
        let bookingNum = "1310"
        cy.request({
            method: 'GET',
            url: `/booking/${bookingNum}`
        }).then(response => {
            expect(response.status).to.eq(200)
            //expect(response.body).has.property('firstname','PutTest')
            bookingNum = response.body.bookingdates.checkin;
            expect(response.body.bookingdates).has.property('checkin','2018-01-01')
            expect(bookingNum).equals("2018-01-01");
            //JSON.stringify()
            cy.log(JSON.stringify(response.body))
            

                   
        })



    });

    it.skip("Get all bookings", ()=>{
        cy.request({
            method: 'GET',
            url: '/booking'
        }).then(response => {
            expect(response.status).to.eq(200)
            console.table(response.body)
                              
        })


    });

    it("Intercepting requests works", ()=>{

        cy.intercept('GET', '*/9999*',{ hostname: 'https://restful-booker.herokuapp.com', 
            statusCode: 201,
            body: {
              name: 'Peter Pan',
            },
          })

        //cy.intercept("GET", "https://restful-booker.herokuapp.com/booking/9999*", {name:"suresh", "some": "Thing"})

        cy.request({
            method: 'GET',
            url: '/booking/9999'
        }).then((response) => {
            //expect(response.status).to.eq(200)
            expect(response.body).to.have.property("name","Suresh")
                              
        })



    });


});
/**
 * Cypress provides the cy.intercept() method, which allows you to spy on and stub network requests 
 * made by your application. It operates at the network layer, meaning 
 * it doesn’t actually make requests but listens to them as they occur.
 * When you use cy.intercept(), Cypress sets up a network proxy in the browser.
 * It catches requests made by your app and responds back to the browser.
 * You can use it to simulate different server responses or network conditions during testing.
 * You can intercept requests based on:
 * URL (e.g., cy.intercept('/api/data'))
 * HTTP method (e.g., cy.intercept('GET', '/api/data'))
 * Custom route matchers (e.g., using an object with properties like method, url, hostname, etc.)
 */
describe("Intercepting Network Requests", ()=>{
    /**
     * The cy.request() command makes actual HTTP requests to the specified URL.
     * It does not use the stubbed routes set up by cy.route() or cy.intercept().
     * If you use cy.request(), it will hit the actual server, even if you’ve stubbed the same URL.
     * These commands are specifically designed for stubbing network requests within your application.
     * They intercept requests made by your app and provide predefined responses.
     * They do not make actual HTTP requests to external servers.
     */
    it.only("Static Responses or Stubbing Demo", ()=>{
        // Here after the stubbing the Heroku App home page return this
        // stubbed response instead of the actual contents of the home page
        cy.intercept('/*', { statusCode: 200, body: { message: 'Success' } }).as('demo');
        cy.visit('/');
        cy.wait('@demo').then((interception)=>{
            
            cy.log(JSON.stringify(interception.response?.body));
            expect(interception?.response?.body).to.have.property("message","Success");
    });
        
    });
    it("Dynamic Handling using route handler functions Demo",()=>{
        cy.intercept('/api/data', (req) => {
            // Modify request or response as needed
            req.reply({ statusCode: 200, body: { message: 'Custom response' } });
          });
          
    });
    it("Using route for simple stubbing",()=>{
        

    });
});