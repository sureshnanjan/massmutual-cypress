import { BrokenImageOperations } from "../operations/broken_image_actions";

export class BrokenImagesPage implements BrokenImageOperations{
    readonly titleLocator;
    readonly imagesLocator;
    /**
     *
     */
    constructor() {
        this.titleLocator = "h3";
        this.imagesLocator = "#content > div > img"
        
    }


    getAvailableImages(){
        return cy.get(this.imagesLocator);
    }
    
    getTitle(){
        return cy.get(this.titleLocator);
    }


}