import { render } from "./render";

    const itemTitle = document.createElement("h3");
    itemTitle.textContent = movieObject.title;

    const imgDOM = document.createElement("img");
    const imgUrl = "https://image.tmdb.org/t/p/w500" + movieObject.poster_path;
    imgDOM.setAttribute("src", imgUrl);

    const itemDate = document.createElement("h4");
    itemDate.textContent = movieObject.release_date;


       //Remplacez 'VOTRE_CLE_API' par votre clé d'API TMDB
        const apiKey = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTk3ZDdkZWNhYjY2NmViNWJkYjQ4ZWNiMDdiNTZjMCIsInN1YiI6IjY1YjIxODgwYTgwMjM2MDE1MGFlNzRkZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.esFqkhpnw2NTbbs6ciYhOoG6Vn0oM6nWGcOfXe8TTNs; 
        //Remplacez 'ID_DU_FILM' par l'ID du film que vous souhaitez récupérer
        /*const movieId = */

        const movieInfoContainer = document.getElementById(movieObject.infoContainer);
        const movieTitleElement = document.getElementById(movieObject.title);
        const movieDescriptionElement = document.getElementById(movieObject.apiKeyDescription);
        const moviePosterElement = document.getElementById(movieObject.imgDOM);

        // Fonction pour récupérer les détails du film depuis l'API TMDB
        async function getMovieDetails() {
            try {
                const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=fr-FR`);
                const data = await response.json();

                // Mettez à jour les éléments HTML avec les détails du film
                movieTitleElement.textContent = data.title;
                movieDescriptionElement.textContent = data.overview;
                
                // Construisez l'URL complet de l'affiche du film
                const posterPath = data.poster_path;
                const posterUrl = `https://image.tmdb.org/t/p/w500${moviePosterElement}`;
                moviePosterElement.src = movieObject.posterUrl;

            } catch (error) {
                console.error('Erreur lors de la récupération des détails du film:', error);
            }
        }

        // Appel de la fonction pour obtenir les détails du film au chargement de la page
        getMovieDetails();


