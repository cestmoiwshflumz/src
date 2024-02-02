import "./index.css";
import { getTrendMovies } from "./getTrendMovies";
import { changeTitle } from "./changeTitle";
import { render } from "./render";


changeTitle("Chargement ...");

getTrendMovies()
  .then((movies) => {
    console.log(movies);

    changeTitle("Les films du jour");
    console.log("end");

    render(movies);
  })
  .catch((error) => {
    changeTitle("Une erreur réseau s'est produite");
  });



  
  



