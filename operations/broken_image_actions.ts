export interface BrokenImageOperations{
    getAvailableImages: () => Cypress.Chainable;
    getTitle: ()=> Cypress.Chainable;

    //functionName: () => returntype

}