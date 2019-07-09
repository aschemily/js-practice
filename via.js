//set global variable to control scrolling of modal
var userScrolledToPercent = false;

$(window).on('scroll', function() {
  var s = $(window).scrollTop(),
    d = $(document).height(),
    c = $(window).height();


  var scrollPercent = (s / (d - c)) * 100;

  if (parseInt(scrollPercent) >= 90) {
    //if user has scrolled to bottom 10% of page run below
    var span = document.getElementsByClassName("close")[0];
    var modal = document.getElementById("myModal");


    // When the user scrolls to bottom 10% of page
    //userScrolledToPercent = true;
    if (!userScrolledToPercent) {
      displayModal()
    }


    function displayModal() {
      modal.style.display = "block";

    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {

      modal.style.display = "none";
      $("body").css("overflow", "auto");
      userScrolledToPercent = false;
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
        $("body").css("overflow", "auto");
        userScrolledToPercent = false;

      }
    }

  }

})
