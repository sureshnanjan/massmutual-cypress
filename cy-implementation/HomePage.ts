import { HerokuAppPageNames } from "../operations/heroku_app_type";
import { HomePageActions } from "../operations/home_page_actions";
import { AddRemoveElements } from "./AddRemoveElementsPage";

export class HomePage implements HomePageActions{
    readonly titleLocator:string;
    readonly subtitleLocator:string;
    readonly exampleLocator:string;
    /**
     *
     */
    constructor() {
      
       this.titleLocator= '.heading';
       this.subtitleLocator = 'h2';
       this.exampleLocator = "li";
       cy.visit("/");

    }
    getTitle() {
        return cy.get(this.titleLocator);
    };
    getSubTitle() {
        return cy.get(this.subtitleLocator);
    }
    getExamples(){
        return cy.get(this.exampleLocator);
    }
    gotoExample(name:HerokuAppPageNames){
        cy.contains(name).click(); // Searches based on displayed text
        switch (name) {
            case HerokuAppPageNames.add_remove:
                return new AddRemoveElements();
                break;
        
            default:
                return this;
                break;
        }
    }

    
    
}