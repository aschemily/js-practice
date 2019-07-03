var items = document.getElementsByClassName('mini-cart-container')

var cartAmount = 0
var cartTotal = 0
var productImages = []

for (let i = 0; i < items.length; i++) {

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


var userHasScrolled = false;


 $(window).on('scroll', function(){
  var s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

   var scrollPercent = (s / (d - c)) * 100;


  	if(parseInt(scrollPercent) >= 90){


			var span = document.getElementsByClassName("close")[0];
			var modal = document.getElementById("myModal");

			// When the user scrolls to bottom 10% of page, trigger modal
				window.onscroll = function() {
					if (!userHasScrolled){


						displayModal()
						displayElements()

					}
          
					userHasScrolled = false;

				};

			function displayModal(){

					modal.style.display = "block";

				}

			function displayElements(){
				var body = document.getElementById("mod-body")
				var listElements = document.getElementById("list-elements")
					var displayCartAmount = document.createElement('li')
						displayCartAmount.innerHTML = cartAmount

					var displayCartTotal = document.createElement('li')
						displayCartTotal.innerHTML = cartTotal

					productImages.forEach(img =>{
							//console.log('IMAGE',img)
								var href = document.createElement('a')
									href.innerHTML = img
									//createImg.style.display = 'block';
									//createImg.style.verticalAlign = 'bottom';
								listElements.appendChild(href)
							})

						listElements.appendChild(displayCartAmount)
						listElements.appendChild(displayCartTotal)

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
userHasScrolled = false;

})
