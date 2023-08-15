//Constants
const url = "https://api.punkapi.com/v2/beers"
const beerDisplayImage = document.querySelector("#beer-image")
const beerDisplayName = document.querySelector("#nameOfBeer")
const beerDisplayTagline = document.querySelector("#beerTagline")
const beerDisplayDescription = document.querySelector("#description")
const beerDisplayBrewersTips = document.querySelector("#brewersTips p")

// Functions
function beerDisplay(beerObj){
    beerDisplayImage.src = beerObj.image_url
    beerDisplayName.textContent = beerObj.name
    beerDisplayTagline.textContent = beerObj.tagline
    beerDisplayDescription.textContent = beerObj.description
    beerDisplayBrewersTips.textContent = beerObj.brewers_tips
}


//Initial fetch GET 
fetch(url)
.then(res => res.json())
.then(data => {   
    let beerObj = data[0]
    console.log(beerObj)
    beerDisplay(beerObj)

})