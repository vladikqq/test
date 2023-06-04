function datego() {
    let date = new Date('Oct 24 2026 2:58:50');
    let now = new Date();
    gap = date - now;
    let hours = (Math.floor(gap / 1000 / 60 / 60) % 24).toString();
    let minutes = (Math.floor(gap / 1000 / 60) % 60).toString();
    let seconds = (Math.floor(gap / 1000) % 60).toString();
    let secondsHtml = document.getElementById("seconds");
    let minutesHtml = document.getElementById("minutes");
    let hoursHtml = document.getElementById("hours");

    if (seconds.length <= 1) {
        secondsHtml.innerHTML = '0' + seconds;
    } else {
        secondsHtml.innerHTML = seconds;
    }

    if (minutes.length <= 1) {
        minutesHtml.innerHTML = '0' + minutes;
    } else {
        minutesHtml.innerHTML = minutes;
    }
    if (hours.length <= 1) {
        hoursHtml.innerHTML = '0' + hours;
    } else {
        hoursHtml.innerHTML = hours;
    }

}

datego();
setInterval(datego, 1000);


function popupfunc() {
    let btnq = document.querySelector('.more');
    btnq.addEventListener('click', function () {
        document.querySelector('.more').classList.add('more-splash');
        document.querySelector('.overlay').style.display = 'flex';
    });

    document.querySelector('.popup-close').addEventListener('click', function () {
        document.querySelector('.more').classList.remove('more-splash');
        document.querySelector('.overlay').style.display = 'none';
    });
}
popupfunc();

let dots = document.getElementsByClassName('dot');
let dotsArea = document.getElementsByClassName('slider-dots')[0];
let slides = document.getElementsByClassName('slider-item');
let prevBtn = document.getElementsByClassName('prev');
let nextBtn = document.getElementsByClassName('next');
slideIndex = 1;
showSlides(slideIndex);
function showSlides(n) {
    if (n < 1) {
        slideIndex = slides.length;
    } else if (n > slides.length) {
        slideIndex = 1;
    }

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }
    slides[slideIndex - 1].style.display = 'block';
    dots[slideIndex - 1].classList.add('active');

}
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prevBtn[0].onclick = function () {
    plusSlides(-1);
};
nextBtn[0].onclick = function () {
    plusSlides(1);
};

dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dot') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
};
console.log(prevBtn);


let counter = document.querySelectorAll('.counter-block-input')[0];
let daysmoney = document.querySelectorAll('.counter-block-input')[1];
let select = document.querySelector('#select');
let total = document.querySelector('#total');
total.textContent = 0;

counter.addEventListener('keyup', money);
daysmoney.addEventListener('keyup', money);
select.addEventListener('change', money);

function money() {
    if (counter.value != '' && daysmoney.value != '') {
        total.textContent = counter.value * daysmoney.value * select.value * 2228;
    }

}
// 



const php = 'http://yoga/server.php';

let numberField = document.querySelector(".popup-form__input");
let application = document.querySelector(".popup-form__btn");

let email = document.querySelectorAll("#form > input")[0];
let number2 = document.querySelectorAll("#form > input")[1];
let contact = document.querySelector("#form > button");

application.addEventListener('click', async e => {
    e.preventDefault();
 let userNumber = numberField.value;
 let userData = {
    number: userNumber
 };
let sendData = JSON.stringify(userData);
    fetch(php, {
        method: 'POST',
        body: sendData,
        headers: {
      "Content-Type": "application/json"
        }
    });

});
contact.addEventListener('click', function () {
    fetch('server.php', {
        method: 'POST',


    });
});




// 

window.addEventListener('DOMContentLoaded', () => {

    const tabs = document.querySelectorAll('.info-header-tab'),
        tabsContent = document.querySelectorAll('.info-tabcontent'),
        tabsParent = document.querySelector('.info-header');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });

        tabs.forEach(tab => {
            tab.classList.remove("tabheader__item_active");
        });
    }

    function showTabContent(i = 0) {
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('info-header-tab')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
});