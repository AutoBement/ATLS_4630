import './style.css'

// Putting in the API.
// Made it all a function to make calling it easier
function catImage (){
    let image = document.getElementById("image-cat");
    // API 
    fetch('https://api.thecatapi.com/v1/images/search')
    .then(resp => resp.json())
    .then(json => image.src = json[0].url);
}

// The button. Each time the button is pressed, catImage will run and give a new picture
function btnClick(){
    let button = document.getElementById("new-cat-btn");
    button.addEventListener("click", catImage);
}

// Running 
document.addEventListener("DOMContentLoaded",() => {
    catImage();
    btnClick();
})