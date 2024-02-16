import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../../../cy-implementation/HomePage.js";
import { HomePageActions } from "../../../operations/home_page_actions.js";
let page: HomePageActions
When("I visit HerokuApp HomePage", function () {        
    page = new HomePage();
    cy.visit("");
  });
Then("I should see Welcome to the-Internet", function () {        
    page.getTitle().should("have.text","Welcome to the-internet");
  });
When("I Access Cypress documentation", function () {
  cy.visit("https://docs.cypress.io/guides/overview/why-cypress")
});

Then("I should see details for setupNodeEvents", function () {
  cy.contains("Why Cypress").should("contain.text","Cypress")
  });