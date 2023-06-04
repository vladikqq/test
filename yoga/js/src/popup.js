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
