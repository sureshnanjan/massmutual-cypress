import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { HomePage } from "../cy-implementation/HomePage.js";
import { HomePageActions } from "../operations/home_page_actions.js";}
let page: HomePageActions
When("I visit HerokuApp HomePage", function () {        
    page = new HomePage();
  });
Then("I should see Welcome to the-Internet", function () {        
    page.getTitle().should("have.text","Welcome to the-Internet");
  });   