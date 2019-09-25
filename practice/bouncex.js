//variables to access the elements
var items = document.getElementsByClassName('mini-cart-container')
var cartAmount = 0
var cartTotal = 0
var productImages = []

for (let i = 0; i < items.length; i++) {
  //using a for loop to access the element and extract their values to set to the variables
  cartAmount = items[i].getAttribute('data-quantity')


  cartTotalQuery = items[i].querySelectorAll('.mini-cart-totals .mini-cart-subtotals .order-totals-table .order-total .order-value')
  cartTotal = cartTotalQuery[0].textContent //using brackets


  var productImage = items[i].querySelectorAll('.mini-cart-content .mini-cart-products .mini-cart-product .mini-cart-image')

  //looping through the product images array
  for (let i = 0; i < productImage.length; i++) {
    productImages.push(productImage[i].innerHTML)
  }

}
//Outputs all the variable values in the browser console
console.log([cartAmount,
  cartTotal,
  productImages
])

//set global variable to control scrolling of modal
var userScrolledToPercent = false;
//set global vairable to have displayElements fn only run once
var functionRun = false;

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

      if (!functionRun) {
        displayElements()
      }

    }


    function displayElements() {
      functionRun = true;
      //creating elements and appending it to modal
      var listElements = document.getElementById("list-elements")
      var modHeader = document.getElementById("mod-header")
      var displayCartAmount = document.createElement('li')
      displayCartAmount.innerHTML = "Cart Amount:" + " " + cartAmount

      var displayCartTotal = document.createElement('li')
      displayCartTotal.innerHTML = "Cart Total:" + " " + cartTotal

      productImages.forEach(img => {
        var href = document.createElement('a')
        href.innerHTML = img
        listElements.appendChild(href)
      })
      //appending elements to modal 
      modHeader.appendChild(displayCartAmount)
      modHeader.appendChild(displayCartTotal)


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
