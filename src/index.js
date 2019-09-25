document.addEventListener('DOMContentLoaded',()=>{
  //grab html
  let allMovies = []
//  console.log('results', results)
   //const htmlBody = document.querySelector("body")
  const container = document.getElementById('container')

  // console.log('movieContainer', movieContainer)

  fetch("https://api.themoviedb.org/3/discover/movie?api_key=33bbb4eed7c89e4ae3f7aef4072aa7c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1")
  .then(r => r.json())
  .then(data =>{
  //  console.log('data is', data.results)
    // allMovies = data.results
    //
    // container.innerHTML = renderMovies(allMovies)
    // console.log('all', allMovies)

    data.results.map(movie =>{
      return (container.innerHTML +=
        `<div id=${movie.id}class="movie-container">
        <h1>${movie.title}</h1>
        <h3>${movie.release_date}</h3>
        <p>
          ${movie.overview}
        </p>
      </div>`)
    })



  })



// const renderMovies = (movies)=>{
// //  console.log('in render', movies)
//   return movies.map(movie => showMovie(movie)).join('')
//
// }
//
// const showMovie = (movie)=>{
//   //console.log('show movie is ', movie.title)
//   return
//   (`<div id=${movie.id}class="movie-container">
//     <h1>${movie.title}</h1>
//     <h3>${movie.release_date}</h3>
//     <p>
//       ${movie.overview}
//     </p>
//   </div>`)
//
// }



})
