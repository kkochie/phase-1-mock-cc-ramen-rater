document.addEventListener('DOMContentLoaded', () => {
//Get all ramen
    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then(data => data.forEach(displayRamenImage))

//Add ramen images
    function displayRamenImage(ramens) {
        const img = document.createElement('img')
        img.src = ramens.image

        document.querySelector('#ramen-menu').append(img)
    } 

})


