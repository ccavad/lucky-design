// dom elements

const scrollTopBtn = document.querySelector(".scrollTopBtn");
const products = document.querySelectorAll(".product");

// variables 

let cartData = [];

// cart functionality 

products.forEach(product => {
  product.addEventListener("click", e => {
    if (e.target.classList.contains("addToCartBtn")) {
      const prd = e.target.parentNode;
      console.log(prd.querySelector(".product-price").innerText)
    } else if (e.target.parentNode.classList.contains("product-wished")) {
      e.target.src = "assets/images/icon/heart-filled.svg";
    }
  })
})

// swiper 
let swiper = new Swiper(".banner-slider .swiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
  },
});

var swiper2 = new Swiper(".partners-slider", {
  slidesPerView: 4,
  spaceBetween: 30,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  autoplay: {
    delay: 3000,
  },
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 2,
      spaceBetween: 20
    },
    480: {
      slidesPerView: 3,
      spaceBetween: 25
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 30
    }
  }
});

// scroll

window.addEventListener("scroll", () => {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block"
  } else {
    scrollTopBtn.style.display = "none"
  }
})

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  })
})
