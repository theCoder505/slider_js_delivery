var stackedCard = new stackedCards({
    selector: '.stacked-cards',
    layout: "fanOut",
    transformOrigin: "bottom",
});
stackedCard.init();


$('body').on('click', '#card-middle', function(e) {
    document.getElementById("card-left").style.cssText = "transform-origin: center bottom; transform: translate(-100%, 0%) scale(0.8) rotate(-10deg);"
    document.getElementById("card-right").style.cssText = "transform-origin: center bottom;transform: translate(0%, 0%) scale(0.8) rotate(10deg);"
});


setInterval(function() {

    if (document.getElementsByClassName("jsCards")[0].classList.contains("runInterval")) {
        document.getElementsByClassName("jsCards")[1].classList.add("runInterval");
        document.getElementsByClassName("jsCards")[0].classList.remove("runInterval");
        document.querySelector(".runInterval").click();
    } else if (document.getElementsByClassName("jsCards")[1].classList.contains("runInterval")) {
        document.getElementsByClassName("jsCards")[2].classList.add("runInterval");
        document.getElementsByClassName("jsCards")[1].classList.remove("runInterval");
        document.querySelector(".runInterval").click();
    } else if (document.getElementsByClassName("jsCards")[2].classList.contains("runInterval")) {
        document.getElementsByClassName("jsCards")[0].classList.add("runInterval");
        document.getElementsByClassName("jsCards")[2].classList.remove("runInterval");
        document.querySelector(".runInterval").click();
    }


}, 6000);