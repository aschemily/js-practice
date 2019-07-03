var items = document.getElementsByClassName('mini-cart-container')

var cartAmount = 0
var cartTotal = 0
var productImages = []

for (let i = 0; i < items.length; i++) {
  console.log(items[i].getAttribute('data-quantity'))

  cartAmount = items[i].getAttribute('data-quantity')


	 cartTotalQuery = items[i].querySelectorAll('.mini-cart-totals .mini-cart-subtotals .order-totals-table .order-total .order-value')
	 cartTotal = cartTotalQuery[0].textContent //using brackets


	var productImage = items[i].querySelectorAll('.mini-cart-content .mini-cart-products .mini-cart-product .mini-cart-image')



    for (let i = 0; i < productImage.length; i++){
       productImages.push(productImage[i].innerHTML)

    }

}

 console.log([cartAmount,
  cartTotal,
     productImages])

 $(window).on('scroll', function(){
  var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

   var scrollPercent = (s / (d - c)) * 100;

  	if(parseInt(scrollPercent) >= 90){
       // alert(cartTotal + cartAmount + productImage)

var span = document.getElementsByClassName("close")[0];
var modal = document.getElementById("myModal");

// When the user clicks on the button, open the modal
		window.onscroll = function() {myFunction()};

			function myFunction(){
					modal.style.display = "block";
					for (i = 0; i < productImages.length; i++){
						document.write("<li><img src='" + productImages[i] + "' width='160' height='120'/><span>" + backgroundImages[i] + "</span></li>")
					}
				}
				// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

       }
})
