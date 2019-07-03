let items = document.getElementsByClassName('mini-cart-container')

let cartAmount = 0
let cartTotal = 0
let productImages = []

for (let i = 0; i < items.length; i++) {
  console.log(items[i].getAttribute('data-quantity'))

  cartAmount = items[i].getAttribute('data-quantity')


	 cartTotalQuery = items[i].querySelectorAll('.mini-cart-totals .mini-cart-subtotals .order-totals-table .order-total .order-value')
	 cartTotal = cartTotalQuery[0].textContent //using brackets


	let productImage = items[i].querySelectorAll('.mini-cart-content .mini-cart-products .mini-cart-product .mini-cart-image')



    for (let i = 0; i < productImage.length; i++){
       productImages.push(productImage[i].innerHTML)

    }

}

 console.log([cartAmount,
  cartTotal,
     productImage])

 $(window).on('scroll', function(){
  let s = $(window).scrollTop(),
      d = $(document).height(),
      c = $(window).height();

   let scrollPercent = (s / (d - c)) * 100;

  	if(parseInt(scrollPercent) >= 90){
       // alert(cartTotal + cartAmount + productImage)
            var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
modal.addEventListener("scroll", function(event){
    console.log('scrolling')
});

onclick = function() {
  modal.style.display = "block";
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
