function carousel(){
  var carouselImgs = $(".carousel-imgs");
  var activeIndex = 0;

  setInterval(function () {
    carouselImgs.removeClass("active").addClass("hidden");

    activeIndex++;

    if (activeIndex > carouselImgs.length - 1) {
      activeIndex = 0;
    }

    carouselImgs.eq(activeIndex).removeClass("hidden").addClass("active");
  },10000);
}

function init(){
  carousel();
}

$(document).ready(init);
