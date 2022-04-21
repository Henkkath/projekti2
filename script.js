let teatteri = ""
function loadMovies() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      //document.getElementById("demo").innerHTML = xhttp.responseText;
  
      deleteMovieList("leffaLista");

      const movieList = createMovieList("leffaLista");

      const xmlDoc = xhttp.responseXML;
  
      const shows = xmlDoc.getElementsByTagName("Show");
  
      const showsArray = Array.from(shows);

      
  
      showsArray.forEach((show) => {
  
          const listItem = document.createElement("li");
          const movieName = show.getElementsByTagName("Title")[0].innerHTML;
          const movieId = show.getElementsByTagName("ID")[0].innerHTML;
          listItem.innerHTML = movieId + "/" + movieName;
  
          movieList.appendChild(listItem);
  
      })
    }
    xhttp.open("GET", "https://www.finnkino.fi/xml/schedule?area=" + teatteri, true);
    xhttp.send();
}



  function leffa (teatteriId){

    teatteri = teatteriId;
    

    

    console.log(teatteriId);

    // https://www.finnkino.fi/xml/schedule?area=1012 //

  }

  function deleteMovieList(movieListName){

    const movieList = document.getElementById(movieListName)
      
      if (movieList !== null ){
        movieList.remove();
      }
 
      

  };

  function createMovieList(movieListName){

    const movieList = document.createElement("ul");
    movieList.id = movieListName;
           document.getElementById("demo").appendChild(movieList);
           return movieList;
           
    
    

  };