import { HomePageActions } from "../../../operations/home_page_actions";
import { HomePage } from "../../../cy-implementation/HomePage";
import { HerokuAppPageNames } from "../../../operations/heroku_app_type";
import { forEach } from "../../../node_modules/cypress/types/lodash/index";

describe("Heroku App Scenarios", ()=>{
    it.skip('First Type Script', () => {
        cy.visit("http://the-internet.herokuapp.com/").get('li').as("Elements")
        //cy.get("li img li",{timeout:12000}).as("Elements")

        cy.get("@Elements").then((results)=>{

            console.log(typeof results)

            cy.log(typeof results);

        })
    });
   
    it.skip("Without Credentials its a failure",()=>{

        cy.visit("http://the-internet.herokuapp.com/basic_auth",{auth:{username:'admin', password:'admin'}});

    });

    it.skip("Without Cookies AB Test splits", ()=>{
        cy.setCookie("optimizelyOptOut","true")

        cy.visit("https://the-internet.herokuapp.com/abtest").get("h3").should("have.text","No A/B Test")

        
    });

    it.skip("Context Click and Handle Alert", ()=>{
       cy.on("window:alert", (text)=>{
            expect(text).equal("You selected a context menu")
            //cy.wrap(text).as("alerttext");
        })
        cy.visit("https://the-internet.herokuapp.com/context_menu").get('#hot-spot').rightclick();
        //cy.get("@alerttext").should("have.text","you have cliecked ");
    })

    it.skip("Java Script Alerts for OK Cancel when click OK", ()=>{
        cy.on("window:confirm", ()=>{
            return true;

        })
         cy.visit("https://the-internet.herokuapp.com/javascript_alerts").contains('Click for JS Confirm').click();

         cy.get("#result").should("have.text","You clicked: Ok")
         //cy.get("@alerttext").should("have.text","you have cliecked ");
     })

     it.skip("Java Script Alerts for OK Cancel when click OK", ()=>{
        cy.on("window:confirm", (text)=>{
             //expect(text).equal("You selected a context menu")
             //cy.wrap(text).as("alerttext")
             return false;
         })
         cy.visit("https://the-internet.herokuapp.com/javascript_alerts").contains('Click for JS Confirm').click();

         cy.get("#result").should("have.text","You clicked: Cancel")
         //cy.get("@alerttext").should("have.text","you have cliecked ");
     })
    
    it.skip("Checking Title Works", ()=>{
        /// AAA Arrange Act Assert
        /// BDD - Given When Then
        const expected = "Welcome to the-internet";
        // Action
        const page:HomePageActions = new HomePage();
        // Assertion
        page.getTitle().should("have.text",expected);
    
    
    });

    it.skip("The Home page Has 44 Examples",()=>{
        // Arrange
        const expected = 44;
        const app:HomePageActions = new HomePage(); // Programming to Interfaces
        app.getExamples().should("have.length", expected);
    });

    it.skip("Navigating to Add Remove Works",()=>{
        const expectedTitle = "Add/Remove Elements";
        const app:HomePageActions = new HomePage();
        const newpage = app.gotoExample(HerokuAppPageNames.add_remove);
        newpage.getTitle().should("have.text",expectedTitle);

    });



    it.skip("Navigates to correct example", ()=>{
        const expected = "Add/ Remove Elements";
        const page:HomePageActions = new HomePage();
        page.gotoExample(HerokuAppPageNames.add_remove)

    })


    it.skip("Using Page Object subtitle ", ()=>{
        const expected = "Available Example";
        const page:HomePageActions = new HomePage();
        const actual = page.getSubTitle();
        expect(actual).equal(expected);
    
    
    });

    it.skip('Custom Command works', ()=>{
        cy.handle_popup(true);
        cy.visit('https://the-internet.herokuapp.com/context_menu').get('#hot-spot').rightclick();
        cy.get('@alertText').should("have.text","You selected a context menu");
    });


    it.skip("Cypress is asynchronous", function(){
        cy.visit("https://the-internet.herokuapp.com/").get('.heading').invoke("text").as("mytext") // quesd
        console.log("Starting the tst") // immedo
        cy.wait(2000) //quesd
        //cy.visit("https://the-internet.herokuapp.com/").get("a").invoke("text")
        cy.log("The text is got from the previous").then(()=>{
            expect(this.mytext).equal("Welcome to the-internet") 

        })
    
      });

      it.only("Navigation check Forward",()=>{

        cy.visit("https://the-internet.herokuapp.com/")
        cy.contains("Broken Images").click()
        cy.get("h3").should("have.text","Broken Images");
        cy.go(-1).get("h2").should("have.text","Available Examples")
    
        
      });

      it.skip("Navigation check Backward",()=>{
    
        
      });

      it.skip("Handling Check Boxes defaults work", ()=>{
        cy.visit("https://the-internet.herokuapp.com/checkboxes")
        //cy.get("#checkboxes > input[type=checkbox]:nth-child(2)").should("be.checked")
        //cy.get("#checkboxes > input[type=checkbox]:nth-child(1)").should("not.be.checked")
        cy.get('#checkboxes').contains("checkbox 1").check();
    


    })

    it.skip("Select Box Options",()=>{
        cy.visit("https://the-internet.herokuapp.com/dropdown").get("#dropdown").select("Option 1");
        cy.get("#dropdown option:selected").should("have.length", 1)
    })
});
