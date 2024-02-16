describe("The Restful Booker CRUD Operations", {baseUrl:"https://restful-booker.herokuapp.com"},()=>{
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