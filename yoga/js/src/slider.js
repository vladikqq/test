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
    slides[slides - 1].style.display = 'block';
    dots[slides - 1].classList.add('active');

}
function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

prevBtn.onclick = function () {
    plusSlides(-1);
};
nextBtn.onclick = function () {
    plusSlides(1);
};

dotsArea.onclick = function (e) {
    for (let i = 0; i < dots.length + 1; i++) {
        if (e.target.classList.contains('dots-item') && e.target == dots[i - 1]) {
            currentSlide(i);
        }
    }
};
