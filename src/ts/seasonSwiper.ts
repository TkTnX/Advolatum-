import Swiper from "swiper";
import "swiper/css";
import { Pagination } from "swiper/modules";

export function seasonSwiper() {
  const swiper = new Swiper(".swiper", {
    modules: [Pagination],

    pagination: {
      el: ".swiper-pagination",
    },
  });
  swiper;
}
