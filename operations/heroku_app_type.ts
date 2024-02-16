import { AddRemoveElementsActions } from "./add_remove_actions";
import { BrokenImageOperations } from "./broken_image_actions";
import { HomePageActions } from "./home_page_actions";

export type HerokuAppType = HomePageActions | AddRemoveElementsActions | BrokenImageOperations

export enum HerokuAppPageNames {
    add_remove = "Add/Remove Elements",
    ab_testing = "A/B Testing",
    basic_auth = "Basic Auth",
    broken_images = "Broken Images",
    context_menu = "Context Menu"
  }