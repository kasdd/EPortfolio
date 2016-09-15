/* global x */
var imagecountJartazi = 1;
var totalJartazi = 4;
var imagecountSchool = 1;
var totalSchool = 4;
function slide(x) {

    var img = document.getElementById('img');
    imagecountJartazi = imagecountJartazi + x;
    if (imagecountJartazi > totalJartazi) {
        imagecountJartazi = 1;
    }
    if (imagecountJartazi < 1) {
        imagecountJartazi = totalJartazi;
    }
    img.src = "img/slider/jartazi" + imagecountJartazi + ".jpg";
}

function slideSchool(x) {
    var img = document.getElementById('img');
    imagecountSchool = imagecountSchool + x;
    if (imagecountSchool > totalSchool) {
        imagecountSchool = 1;
    }
    if (imagecountSchool < 1) {
        imagecountSchool = totalSchool;
    }
    img.src = "img/slider/school" + imagecountSchool + ".jpg";
}




