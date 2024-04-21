import { fetchActualList } from "./ts/actual";
import { collections } from "./ts/collections";
import { toggleMobileNav } from "./ts/mobileNav";
import { seasonSwiper } from "./ts/seasonSwiper";

seasonSwiper();
fetchActualList();
toggleMobileNav();
collections();