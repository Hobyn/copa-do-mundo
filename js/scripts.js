
//script banner

let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function(){
    nextImage();

}, 3000)

function nextImage() {
    count++;
    if (count > 4) {
        count = 1;
    }
    document.getElementById("radio" + count).checked = true;

}

//script troca de tela

// script cronometro

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minsEl = document.getElementById('mins')
const secsEl = document.getElementById('seconds')


const copa = '20 Nov 2022'


function countdown () {
    const inicioCopa = new Date(copa);
    const currentDate = new Date();

    const totalSeconds = (inicioCopa - currentDate) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds/ 3600) % 24;
    const mins = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    daysEl.innerHTML = days;
    hoursEl.innerHTML = formateTime(hours);
    minsEl.innerHTML = formateTime(mins)
    secsEl.innerHTML = formateTime(seconds)


}



function formateTime(time){
    return time < 10 ? `0${time}` :time;
}

countdown();

setInterval(countdown, 1000);


let ul = document.querySelector('nav ul');
let menuBtn = document.querySelector('.menu-btn i');

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open');
    }else{
        ul.classList.add('open');
       
    }
}

//script cards


//script cardsA
var swiper = new Swiper(".mySwiperA", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 3,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".volA",
    prevEl: ".avcA",
  },
});




//script cardsB
var swiper = new Swiper(".mySwiperB", {
  slidesPerView: 2,
  spaceBetween: 40,
  slidesPerGroup: 3,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".volB",
    prevEl: ".avcB",
  },
});


//script cardsC

var swiper = new Swiper(".mySwiperC", {
  slidesPerView: 2,
  spaceBetween: 20,
  slidesPerGroup: 2,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".volC",
    prevEl: ".avcC",
  },
});

//script cardsD

var swiper = new Swiper(".mySwiperD", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".volD",
    prevEl: ".avcD",
  },
});
//script cardsE

var swiper = new Swiper(".mySwiperE", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".volE",
    prevEl: ".avcE",
  },
});

//script cardsF

var swiper = new Swiper(".mySwiperF", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".volF",
    prevEl: ".avcF",
  },
});
//script cardsG

var swiper = new Swiper(".mySwiperG", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".volG",
    prevEl: ".avcG",
  },
});

//script cardsH

var swiper = new Swiper(".mySwiperH", {
  slidesPerView: 2,
  spaceBetween: 30,
  slidesPerGroup: 2,
  autoplay: {
    delay: 5500,
    disableOnInteraction: false,
  },
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".volH",
    prevEl: ".avcH",
  },
});



var swiper = new Swiper(".mySwiper-Banner", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
