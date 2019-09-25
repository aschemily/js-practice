document.addEventListener('DOMContentLoaded', ()=>{
  const container = document.getElementById('container')
  const htmlBody = document.querySelector("body")
  //console.log('results', results)
  //console.log('dankMemes', dankMemes)

function renderMovies(results){
 results.forEach(movie =>{

   container.innerHTML += showMovie(movie)

  })

}

  function showMovie(movie){
   //console.log('show movie is ', movie.title)
    return(
      `<div id=${movie.id}class="movie-container">
           <h1>${movie.title}</h1>
          <h3>${movie.release_date}</h3>
           <p>
             ${movie.overview}
           </p>
         </div>`)

  }
  renderMovies(results)

})
