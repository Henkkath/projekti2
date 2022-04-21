function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      //document.getElementById("demo").innerHTML = xhttp.responseText;
  
  
      const moviesList = document.getElementById("movies");
  
  
      const xmlDoc = xhttp.responseXML;
  
      const shows = xmlDoc.getElementsByTagName("Show");
  
      const showsArray = Array.from(shows);
  
      showsArray.forEach((show) => {
  
          const listItem = document.createElement("li");
          const movieName = show.getElementsByTagName("Title")[0].innerHTML;
          const movieId = show.getElementsByTagName("ID")[0].innerHTML;
          listItem.innerHTML = movieId + "/" + movieName;
  
          moviesList.appendChild(listItem);
  
      })
    }
    xhttp.open("GET", "https://www.finnkino.fi/xml/Schedule/", true);
    xhttp.send();
}

function filterOsta(e){                           //Tämä funktio erittelee valmiit ja keskeneräiset listan tavarat
    const teatterit = showsArray.childNodes;
    teatterit.forEach(function(loadDoc){
      switch(e.target.value){
        case "1014":
            loadDoc.style.display ='flex';
          break;
          case "1012":
            loadDoc.style.display ='flex';
          break;
        case "1039":
            loadDoc.style.display ='flex';
          break;
          case "1038":
            loadDoc.style.display ='flex';
          break;
          case "1002":
            loadDoc.style.display ='flex';
          break;
          case "1045":
            loadDoc.style.display ='flex';
          break;
          case "1031":
            loadDoc.style.display ='flex';
          break;
          case "1032":
            loadDoc.style.display ='flex';
          break;
          case "1033":
            loadDoc.style.display ='flex';
          break;
          case "1013":
            loadDoc.style.display ='flex';
          break;
          case "1015":
            loadDoc.style.display ='flex';
          break;
          case "1016":
            loadDoc.style.display ='flex';
          break;
          case "1017":
            loadDoc.style.display ='flex';
          break;
          case "1041":
            loadDoc.style.display ='flex';
          break;
          case "1018":
            loadDoc.style.display ='flex';
          break;
          case "1019":
            loadDoc.style.display ='flex';
          break;
          case "1021":
            loadDoc.style.display ='flex';
          break;
          case "1034":
            loadDoc.style.display ='flex';
          break;
          case "1035":
            loadDoc.style.display ='flex';
          break;
          case "1022":
            loadDoc.style.display ='flex';
          break;
      }
    });
  }