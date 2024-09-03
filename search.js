let slideShowArray = [
    "https://image-resizer-cloud-api.akamaized.net/image/CAF4DA51-72E6-414D-A749-94971C483F8F/0-3x1.jpg?width=1800&updatedTime=2024-08-30T14:32:41Z&dt=Web",
    "https://image-resizer-cloud-api.akamaized.net/image/CAF4DA51-72E6-414D-A749-94971C483F8F/0-3x1.jpg?width=1800&updatedTime=2024-08-30T14:32:41Z&dt=Web",
    "https://image-resizer-cloud-api.akamaized.net/image/3D24C9D0-A513-488B-9CAF-50D4BF2D13C3/0-3x1.jpg?width=1800&updatedTime=2024-08-30T14:37:12Z&dt=Web",
    "https://image-resizer-cloud-api.akamaized.net/image/2CD58353-24C9-4F51-9279-C8E1746D5C1F/0-3x1.jpg?width=1800&updatedTime=2024-08-31T12:12:14Z&dt=Web"
];

function slideShow(){
    let i = 0;

    const slideShowDiv = document.querySelector(".slide-show");
    const image = document.createElement('img');
    image.classList = "image";
    image.src = slideShowArray[i];
    slideShowDiv.append(image);

    setInterval(function(){
        if(i == slideShowArray.length){
            i = 0;
        }
        image.src = slideShowArray[i];
        i = i+1;
    },1000);
}

slideShow();

// https://www.omdbapi.com/?apikey=9a4f31a2&s=money%20heist
// http://www.omdbapi.com/?apikey=[yourkey]&

let inputValue = document.getElementById("input");
let buttonValue = document.getElementById("button");

buttonValue.addEventListener("click", searchMovie);

async function searchMovie(){
    

    try{
        
        let query = inputValue.value;
        let response = await fetch(`http://www.omdbapi.com/?apikey=9a4f31a2&s=${query}`);
        let data = await response.json();
        console.log(data.Search);
        appendMovies(data.Search);
    }
    catch(error){
        console.log("Error Fetching Data", error);
        let div = document.getElementById("not-found");
        div.innerHTML = "Result Not Found";
    }
}

function appendMovies(data){
    let movieConainer = document.getElementById("movie-container");
    movieConainer.innerHTML = "";
    data.forEach((element)=>{
        let container = document.createElement("div");
        let img = document.createElement("img");
        img.src = element.Poster;
        let title = document.createElement("h3");
        title.innerHTML = `Title : ${element.Title}`;
        let year = document.createElement("p");
        year.innerHTML = `Year : ${element.Year}`;
        let type = document.createElement("p");
        type.innerHTML = `Type : ${element.Type}`;
        container.append(img, title, year, type);
        movieConainer.append(container);
    }) 
}