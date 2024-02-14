import { HomePageActions } from "../../operations/home_page_actions";

export class HomePageImpl implements HomePageActions{
    readonly titleLocator:string;
    readonly subtitleLocator:string;
    /**
     *
     */
    constructor() {
      
       this.titleLocator= '.heading';
       this.subtitleLocator = 'h2';
       cy.visit("/");

    }


    getTitle() {
        return cy.get(this.titleLocator)
    };
    getSubTitle() {
        return "";
    }
    getExamples(){
        return [];
    }
    gotoExample(){}
    
}