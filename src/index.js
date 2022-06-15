document.addEventListener('DOMContentLoaded', () => {

    fetch('http://localhost:3000/ramens')
    .then(res => res.json())
    .then((ramenObj) => {
        ramenObj.forEach( ramenObj => {
            //Create ramen images
            const ramenImage = document.createElement('img')
            ramenImage.src = ramenObj.image
            
            //Add event listener to update main image and info
            ramenImage.addEventListener('click', () => {
                const imageDetail = document.querySelector('.detail-image')
                imageDetail.src = ramenObj.image

                const nameDetail = document.querySelector('.name')
                nameDetail.textContent = ramenObj.name

                const restaurantDetail = document.querySelector('.restaurant')
                restaurantDetail.textContent = ramenObj.restaurant

                const rating = document.querySelector('#rating-display')
                rating.textContent = ramenObj.rating

                const comment = document.querySelector('#comment-display')
                comment.textContent = ramenObj.comment

            })

            //Add image to DOM
            document.querySelector('#ramen-menu').append(ramenImage)
        })
        
    })

    //Add new ramen using form
    const form = document.querySelector('#new-ramen')
    form.addEventListener('submit', function(e){
        e.preventDefault()
        const ramenMenu = document.querySelector('#ramen-menu')
        const newRamenImage = document.createElement('img')
        newRamenImage.src = e.target.image.value

        newRamenImage.addEventListener('click', () => {
            
            const newRamen = {
                "name": e.target.name.value,
                "restaurant": e.target.restaurant.value,
                "image": e.target.image.value,
                "rating": e.target.rating.value,
                "comment": e.target["new-comment"].value
            }
            
            const imageDetail = document.querySelector('.detail-image')
            imageDetail.src = newRamen.image

            const nameDetail = document.querySelector('.name')
            nameDetail.textContent = newRamen.name

            const restaurantDetail = document.querySelector('.restaurant')
            restaurantDetail.textContent = newRamen.restaurant

            const rating = document.querySelector('#rating-display')
            rating.textContent = newRamen.rating

            const comment = document.querySelector('#comment-display')
            comment.textContent = newRamen.comment
        })
        ramenMenu.append(newRamenImage)
    })

})