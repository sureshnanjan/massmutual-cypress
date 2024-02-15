import { BrokenImagesPage } from "../../cy-implementation/BrokenImagesPage";
import { HomePage } from "../../cy-implementation/HomePage";
import { BrokenImageOperations } from "../../operations/broken_image_actions";
import { HerokuAppPageNames, HerokuAppType } from "../../operations/heroku_app_type";
describe("Heroku App Page scenarios", ()=>{
    it("Checking Broken Images Page Title",()=>{
        // Navigaet to Broken IMage
        // what am i typing
        const page = new HomePage()
        const navpage = page.gotoExample(HerokuAppPageNames.broken_images)
        navpage.getTitle().should("have.text","Broken Images");


    });

    it.only("Broken Image Page has correct number of Images", ()=>{
        const page = new HomePage()
        const navpage = page.gotoExample(HerokuAppPageNames.broken_images)
        navpage.getAvailableImages().should("have.length",3)


    });

});