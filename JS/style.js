function slideInLeftDelayed(selector, opacity, animation_time, delay_time) {
   const element = document.querySelectorAll(selector);
   element.forEach((el, i) =>{el.style.opacity = opacity; el.style.animation = `slideInLeft ${animation_time}s ease-out ${i * delay_time}s forwards`;});
}

function slideOutLeftDelayed(selector, opacity, animation_time,delay_time) {
    const element = document.querySelectorAll(selector);
     element.forEach((el, i) =>{el.style.opacity = opacity; el.style.animation = `slideOutLeft ${animation_time}s ease-out ${(element.length - 1 - i)* delay_time}s`;});
}

function ManyElementsAnimation(selector, cssAnimation) {
    const element = document.querySelectorAll(selector);
    element.forEach(el => {el.style.animation = cssAnimation})
}

function openNav() {
    document.body.style.overflow = "hidden";
    document.getElementById("mobile-navbar").classList.add("mobile-navbar-opened");
    document.getElementById("under-overlay-box").classList.add("under-overlay-box-opened");
    slideInLeftDelayed(".mobile-nav-link", 0, 0.4, 0.120);
}

function closeNav() {
    document.body.style.overflow = "scroll"
    document.getElementById("mobile-navbar").classList.remove("mobile-navbar-opened");
    document.getElementById("under-overlay-box").classList.remove("under-overlay-box-opened");
    slideOutLeftDelayed(".mobile-nav-link", 1, 0.4, 0.1);
}

function openFooterMenu() {
  const container = document.querySelector(".social-list-container");
  const chevron = document.querySelector(".list-button-span .chevron-down");
  const isOpen = container.classList.toggle("social-list-container-opened");
  chevron.classList.toggle("social-list-button-chevron-opened");
  if (isOpen) {
      ManyElementsAnimation(".menu-link", "slideUp 0.3s ease-out forwards");
  } else {
      slideOutLeftDelayed(".menu-link", 1, 0.2, 0.05);

  }
}



