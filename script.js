//Constants
const url = "https://api.punkapi.com/v2/beers"
const beerDisplayImage = document.querySelector("#beer-image")
const beerDisplayName = document.querySelector("#nameOfBeer")
const beerDisplayTagline = document.querySelector("#beerTagline")
const beerDisplayDescription = document.querySelector("#description")
const beerDisplayBrewersTips = document.querySelector("#brewersTips p")
const beerMenu = document.querySelector("#bottom")

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

    data.forEach((beer) => {
        const container = document.createElement("div")
        const beerImg = document.createElement("img")
        const beerName = document.createElement("h3")

        beerImg.src = beer.image_url
        beerName.textContent = beer.name

        container.append(beerName, beerImg)
        beerMenu.append(container)

    })

})