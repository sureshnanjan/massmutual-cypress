import { HerokuAppType } from "./heroku_app_type";
import { HerokuAppPageNames } from "./heroku_app_type";
export interface HomePageActions{
    getTitle: () => Cypress.Chainable;
    getSubTitle: () => Cypress.Chainable;
    getExamples: () => Cypress.Chainable;
    gotoExample: (example:HerokuAppPageNames) => HerokuAppType;
}