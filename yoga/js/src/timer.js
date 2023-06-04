function datego() {
    let date = new Date('Oct 19 2026 11:41:40');
    let now = new Date();
    gap = date - now;
    let hourse = Math.floor(gap / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(gap / 1000 / 60) % 60;
    let seconds = Math.floor(gap / 1000) % 60;
    document.getElementById("hours").innerHTML = hourse;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}
datego();
setInterval(datego, 1000);

