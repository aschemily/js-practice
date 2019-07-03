var body = document.getElementById("mod-body")
					var docFrag = document.createDocumentFragment();
					productImages.forEach(function(url, index, originalArray){
						varimg = document.createElement('img')
						img.src = url
						docFrag.appendChild(img)
					})
					body.appendChild(docFrag)
