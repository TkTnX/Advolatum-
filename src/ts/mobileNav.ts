export function toggleMobileNav() {
  const burgerBtn = document.querySelector(".mobileBtn");
    burgerBtn !== null && burgerBtn.addEventListener("click", () => {
      document.querySelector(".mobile__nav")?.classList.toggle("mobile__nav--active");
      document.body.classList.toggle("overflow-hidden")
      burgerBtn.classList.toggle("mobileBtn--active");
      
    });
}
