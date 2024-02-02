export function render(movieList) {
  const list = document.querySelector("#movie-list");

  const elementsToRemove = list?.querySelectorAll("li");
  elementsToRemove?.forEach((element) => {
    list?.removeChild(element);
  });

  movieList.forEach((movieObject) => {
    const item = document.createElement("div");
    item.classList.add('movie-card');
    const itemTitle = document.createElement("h3");
    itemTitle.textContent = movieObject.title;

    const imgDOM = document.createElement("img");
    const imgUrl = "https://image.tmdb.org/t/p/w500" + movieObject.poster_path;
    imgDOM.setAttribute("src", imgUrl);

    const itemDate = document.createElement("h4");
    itemDate.textContent = movieObject.release_date;

    const itemLink = document.createElement("a");
    itemLink.textContent = "More..."
    itemLink.setAttribute("href", "movie.html/" + movieObject.id);
    

    item.appendChild(itemTitle);
    item.appendChild(imgDOM);
    item.appendChild(itemDate);
    item.appendChild(itemLink);

    list?.appendChild(item);
  });
  
};