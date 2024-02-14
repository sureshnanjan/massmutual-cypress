/***
 * This interface provides all the actions related to the Add Remove Elements Heroku page
 */
export interface AddRemoveElementsActions{
    /***
     * Obtains the Title text on the Add Remove Elements Page
     */
    getTitle: () => Cypress.Chainable;
    /***
     * Adds a new element to the page
     */
    addElement: () => Cypress.Chainable;
    /***
     * Removes the newly added element in the Page
     */
    removeElement: () => Cypress.Chainable;
    /**
     * 
     * @returns The collection of newly addded elements
     */
    getAddedElements: () => Cypress.Chainable;

}