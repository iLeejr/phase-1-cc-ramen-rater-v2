const ramenMenu = document.getElementById("ramen-menu")

const displayRamens = () => {
  
  fetch("http://localhost:3000/ramens")
    .then(response => response.json())
    .then(ramens => ramens.forEach(ramen => {
      const img = document.createElement("img")
      img.src = ramen.image
      img.alt = ramen.name
      img.addEventListener("click", (e) => handleClick(ramen))
      ramenMenu.append(img)
    })
    )
}

// Callbacks
const handleClick = (ramen) => {
  document.getElementById("#ramen-detail")
  const displayImage = document.querySelector(".detail-image")
  displayImage.src = ramen.image
  displayImage.alt = ramen.image

  const displayName = document.querySelector(".name")
  displayName.textContent = ramen.name

  const displayRestaurant = document.querySelector(".restaurant")
  displayRestaurant.textContent = ramen.restaurant

  const displayRating = document.querySelector("#rating-display")
  displayRating.textContent = ramen.rating

  const displayComment = document.querySelector("#comment-display")
  displayComment.textContent = ramen.comment




};

const ramenForm = document.querySelector("#new-ramen")

ramenForm.addEventListener("submit", addRamen)
  




function addRamen(e){
// const addSubmitListener = (e) => {
  e.preventDefault()
  
  
  const newRamen = {
    name: e.target.name.value,
    restaurant: e.target.restaurant.value,
    image: e.target.image.value,
    rating: parseInt(e.target.rating.value),
    comment: e.target['new-comment'].value,
}
const img = document.createElement("img")
img.src = newRamen.image
img.alt = newRamen.name
img.addEventListener("click", (e) => handleClick(newRamen))
ramenMenu.append(img)
e.target.reset()
}



const main = () => {
  displayRamens()
//   addSubmitListener()
}

main()



// // Export functions for testing
// export {
//   displayRamens,
//   addSubmitListener,
//   handleClick,
//   main,
// };