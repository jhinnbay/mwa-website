// // menu start
// var menu = document.getElementById("menu");
// var menuBtn = document.getElementById("menuBtn");
// var body = document.body;
// menuBtn.onclick = function () {
//   menu.classList.toggle("active");
//   menuBtn.classList.toggle("active");
//   body.classList.toggle("active");
// };
// window.onclick = function (event) {
//   if (event.target == menu) {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   }
// };
// // menu end

// // scroll start
// let header = document.getElementById("header");
// function scrollFunc() {
//   if (window.pageYOffset >= 60) {
//     header.classList.add("sticky");
//   } else {
//     header.classList.remove("sticky");
//   }
// }
// const links = document.querySelectorAll(".links");
// const sections = document.querySelectorAll(".anchor");
// function changeLinkState() {
//   let index = sections.length;
//   while (--index && window.scrollY + 100 < sections[index].offsetTop) {}
//   links.forEach((link) => link.classList.remove("active"));
//   links[index]?.classList.add("active");
// }
// links.forEach((e) => {
//   onLinkClick(e);
// });
// function onLinkClick(linkItem) {
//   linkItem.addEventListener("click", function () {
//     menu.classList.remove("active");
//     menuBtn.classList.remove("active");
//     body.classList.remove("active");
//   });
// }
// window.onscroll = function () {
//   changeLinkState();
//   scrollFunc();
// };
// scroll end
// faq start
const tabBtn = document.querySelectorAll(".tabBtn");
const tabEvent = document.querySelectorAll(".tabEvent");
tabBtn.forEach((e) => {
  onTabClick(tabBtn, tabEvent, e);
});
function onTabClick(tabBtns, tabItems, item) {
  item.addEventListener("click", function (e) {
    let currentBtn = item;
    let tabId = currentBtn.getAttribute("data-tab");
    let currentTab = document.querySelector(tabId);
    if (currentBtn.classList.contains("active")) {
      console.log("now active");
      const faq = currentBtn.parentElement.querySelector(".tabEvent");
      if (faq) {
        faq.classList.remove("active");
        currentBtn.classList.remove("active");
      }
    } else if (!currentBtn.classList.contains("active")) {
      tabBtns.forEach(function (item) {
        item.classList.remove("active");
      });

      tabItems.forEach(function (item) {
        item.classList.remove("active");
      });
      currentBtn.classList.add("active");
      currentTab.classList.add("active");
    }
  });
}
// faq end
// sliders
$(function () {
  $(".introMain__slider").slick({
    dots: false,
    infinite: false,
    speed: 300,
    cssEase: "linear",
    slidesToShow: 2.4,
    speed: 5000,
    autoplay: true,
    autoplaySpeed: 0,
    draggable: false,
    focusOnSelect: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 3,
          arrows: false,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 440,
        settings: {
          slidesToShow: 2,
          arrows: false,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
//  $(function () {
//   $(".testimonials__inner-slider").slick({
//     dots: true,
//     infinite: true,
//     centerMode: false,
//     fade: true,
//     arrows:true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//   });
// });

// connected sliders
// $(function () {
//   $(".about__inner-swiper").slick({
//     infinite: true,
//     slidesToShow: 4,
//     slidesToScroll: 1,
//     vertical: true,
//     verticalSwiping: true,
//     focusOnSelect: true,
//     arrows: false,
//     speed: 500,
//     asNavFor: '.about__inner-slider',
//     responsive: [
//       {
//         breakpoint: 930,
//         settings: {

//         },
//       },
//     ],
//   });
// });

// $(function () {
//   $(".about__inner-slider").slick({
//     dots: false,
//     infinite: true,
//     centerMode: false,
//     arrows: false,
//     fade: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     asNavFor: '.about__inner-swiper',
//   });
// });

// /*mobile slider */
// function mobileOnlySlider() {
//   $(".slider").slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 1,
//     adaptiveHeight: false,
//     arrows: false,
//     dots: false,
//   });
// }
// if (window.innerWidth < 440) {
//   mobileOnlySlider();
// }
// function resizeListener(e) {
//   if (window.innerWidth < 440) {
//     $(".slider").addClass("sliderMob");
//     if (!$(".slider").hasClass("slick-initialized")) {
//       mobileOnlySlider();
//     }
//   } else {
//     $(".slider").removeClass("sliderMob");
//     if ($(".slider").hasClass("slick-initialized")) {
//       $(".slider").slick("unslick");
//     }
//   }
// }
// resizeListener();
// $(window).resize(resizeListener);
