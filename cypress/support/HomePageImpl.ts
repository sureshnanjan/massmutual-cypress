import { HomePageActions } from "../../operations/home_page_actions";

export class HomePageImpl implements HomePageActions{
    readonly url:string ;
    readonly titleLocator:string;
    readonly subtitleLocator:string;
    /**
     *
     */
    constructor() {
       this.titleLocator= '.heading';
       this.subtitleLocator = 'h2';
       this.url = ""

    }


    getTitle() {
        cy.get(this.titleLocator).then((el)=>{

            return el.text;
        })
        return "";
    };
    getSubTitle() {
        return "";
    }
    getExamples(){
        return [];
    }
    gotoExample(){}
    
}