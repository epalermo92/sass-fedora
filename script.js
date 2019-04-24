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

function dropDown(){
  var liDrop = $("li#drop");
  var bars = $("i.fas.fa-bars");

  liDrop.click(function () {
    $(this).children(".dropdown-menu").slideToggle();
  });

  bars.click(function () {
    var dropDownMenu = $(".drop-down-menu");

    dropDownMenu.slideToggle();
  });

}

function init(){
  carousel();
  dropDown();
}

$(document).ready(init);
