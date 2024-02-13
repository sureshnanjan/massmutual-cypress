/// <reference types="cypress" />
import { HomePageActions } from "../operations/home_page_actions";

class HomePage implements HomePageActions {
    getTitle(){
       cy.visit(this.url).get('.heading').then((el)=>{
            return el.text;
        })
        //cy.
    }
    getSubTitle: () => string;
    getExamples: () => string[];
    gotoExample: () => void;
    
}