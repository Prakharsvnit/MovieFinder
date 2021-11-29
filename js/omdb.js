async function searchMovie(){
    let movie = document.getElementById("movieName").value;
    
    let response = await fetch(`https://www.omdbapi.com/?t=${movie}&y=&plot=short&r=json&apikey=6c53d1f9`);
    
    let data = await response.json();

    if(data.Response == "False"){

        alert(data.Error)

    }else{


    
    var data_div = document.getElementById("data");

    var div_1 = document.createElement("div");

    div_1.setAttribute("class", "container");
    
    div_1.setAttribute("class", "box");

    var image = document.createElement("img")

    image.src = data.Poster;

    image.setAttribute("class","poster")

    var title = document.createElement("h1");

    title.innerHTML = data.Title;

    var rating = document.createElement("p");

    rating.innerHTML = "Rating : "+ data.imdbRating;

    var duration = document.createElement("p");

    duration.innerHTML = "Runtime : "+data.Runtime;

    var date = document.createElement("p");

    date.innerHTML = "Release Date : "+data.Released;

    var plot = document.createElement("p");

    plot.innerHTML = "Plot : "+ data.Plot;

    if(data.imdbRating > 8.5){

        var heading = document.createElement("p");

        heading.innerHTML = "Recommended";

        heading.style.float = "right";

        heading.style.color = "#4aa1f3"

        div_1.append(image,title,rating,duration,date,plot,heading);
        
        data_div.append(div_1);
    }
    
    div_1.append(image,title,rating,duration,date,plot);

    data_div.append(div_1);

    }
}



