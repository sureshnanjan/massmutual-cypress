import { AddRemoveElementsActions } from "../operations/add_remove_actions";
export class AddRemoveElements implements AddRemoveElementsActions{
    readonly titleLocator:string;
    readonly addElementLocator:string;
    readonly removeElementLocator:string;
    /**
     *
     */
    constructor() {
        this.titleLocator = "h3";
        this.addElementLocator = "Add Element";
        this.removeElementLocator = ".added-manually";
        
    }
    getTitle(){
        return cy.get(this.titleLocator);
    };
    addElement(){
        return cy.contains(this.addElementLocator).click();
    };
    removeElement(){
        return cy.get(this.removeElementLocator).click();
    };
    getAddedElements(){
        return cy.get(this.removeElementLocator);
    };
    
}