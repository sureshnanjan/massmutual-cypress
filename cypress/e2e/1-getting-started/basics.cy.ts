import { HomePageActions } from "../../../operations/home_page_actions";
import { HomePageImpl } from "../../support/HomePageImpl";

describe("Heroku App Scenarios", ()=>{
    it.skip('First Type Script', () => {
        cy.visit("/").get('li').as("Elements")
        //cy.get("li img li",{timeout:12000}).as("Elements")
        cy.get("@Elements").should("have.length", 44);
    });

    it.skip("Without Credentials its a failure",()=>{

        cy.visit("http://the-internet.herokuapp.com/basic_auth",{auth:{username:'admin', password:'admin'}});


    });

    it.skip("Without Cookies AB Test splits", ()=>{
        cy.setCookie("optimizelyOptOut","true")

        cy.visit("https://the-internet.herokuapp.com/abtest").get("h3").should("have.text","No A/B Test")

        
    });

    it("Context Click and Handle Alert",()=>{
        cy.on("window:confirm", (text)=>{
            return true;
        })
        cy.on("window:alert",(text)=>{
            expect(text).equal("Test appeared")
        })
        cy.visit("https://the-internet.herokuapp.com/context_menu").get('#hot-spot').rightclick();
    })
    
    it.skip("Using Page Object", ()=>{
        const expected = 44;
        const page:HomePageActions = new HomePageImpl();
        const actual = page.getExamples();
        expect(actual).equal(expected);
    
    
    });
    it.skip("Using Page Object subtitle ", ()=>{
        const expected = "Available Example";
        const page:HomePageActions = new HomePageImpl();
        const actual = page.getSubTitle();
        expect(actual).equal(expected);
    
    
    });
});
