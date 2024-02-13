export interface HomePageActions{
    getTitle: () => string;
    getSubTitle: () => string;
    getExamples: () => string[];
    gotoExample: () => void;
}