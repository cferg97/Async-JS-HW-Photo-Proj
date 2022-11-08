// fetch("https://api.pexels.com/v1/search?query=sunset", {
//     headers: {
//         Authorization: "563492ad6f9170000100000101083f1c66614d9497ddc9522ac943a1"
//     }
// })
//     .then((response) => {
//         return response.json()
//     })
//     .then((images) => {
//         console.log(images.photos)
//     })

const container = document.getElementById("card-con")

let hideCard = (event) => {
    let card = event.target.parentElement.parentElement.parentElement.parentElement.parentElement;
    card.remove();
}

const loadPictures = () => {
    fetch("https://api.pexels.com/v1/search?query=dogs", {
    headers: {
        Authorization: "563492ad6f9170000100000101083f1c66614d9497ddc9522ac943a1"
    }
})
    .then((response) => {
        return response.json()
    })
    .then((images) => {
        console.log(images)

        clearPage()

        for (data of images.photos){
            console.log(data)
            container.innerHTML += `<div class="col-md-4">
            <div class="card mb-4 shadow-sm">

              <div class="card-body" style="height: 30rem">
                <img class="card-img-top m-0 mb-2 photo" src="${data.src.landscape}">
                <p class="card-text align-content-center justify-content-center mt-5">
                  ${data.alt} by ${data.photographer}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" onclick="hideCard(event)" class="btn btn-sm btn-outline-secondary">
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">Image ID: ${data.id}</small>
                </div>
              </div>
            </div>
          </div>`

        }
    })

}

const loadSecondary = () => {
    fetch("https://api.pexels.com/v1/search?query=coffee", {
    headers: {
        Authorization: "563492ad6f9170000100000101083f1c66614d9497ddc9522ac943a1"
    }
})
    .then((response) => {
        return response.json()
    })
    .then((images) => {
        console.log(images)

        clearPage()

        for (data of images.photos){
            console.log(data)
            container.innerHTML += `<div class="col-md-4">
            <div class="card mb-4 shadow-sm">

              <div class="card-body" style="height: 30rem">
                <img class="card-img-top m-0 mb-5 photo" src="${data.src.landscape}">
                <p class="card-text align-content-center justify-content-center mt-4">
                    ${data.alt} by ${data.photographer}
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" onclick="hideCard(event)" class="btn btn-sm btn-outline-secondary">
                      Hide
                    </button>
                  </div>
                  <small class="text-muted">Image ID: ${data.id}</small>
                </div>
              </div>
            </div>
          </div>`

        }
    })

}

const searchImage = () => {
    let search = document.getElementById("search-bar").value 
    fetch(`https://api.pexels.com/v1/search?query=${search}`, {
        headers: {
            Authorization: "563492ad6f9170000100000101083f1c66614d9497ddc9522ac943a1"
        }
    })
        .then((response) => {
            return response.json()
        })
        .then((images) => {
            console.log(images)
    
            for (data of images.photos){
                console.log(data)
                container.innerHTML += `<div class="col-md-4">
                <div class="card mb-4 shadow-sm">
    
                  <div class="card-body" style="height: 30rem">
                    <img class="card-img-top m-0 mb-5 photo" src="${data.src.landscape}">
                    <p class="card-text align-content-center justify-content-center mt-4">
                        ${data.alt} By ${data.photographer}
                    </p>
                    <div class="d-flex justify-content-between align-items-center">
                      <div class="btn-group">
                        <button type="button" class="btn btn-sm btn-outline-secondary">
                          View
                        </button>
                        <button id="hide" onclick="hideCard(event)" type="button" class="btn btn-sm btn-outline-secondary">
                          Hide
                        </button>
                      </div>
                      <small class="text-muted">Image ID: ${data.id}</small>
                    </div>
                  </div>
                </div>
              </div>`
    
            }
        })
}


let searchBtn = document.getElementById("loadImages")
searchBtn.addEventListener("click", loadPictures)

let secondaryBtn = document.getElementById("loadSecondary")
secondaryBtn.addEventListener("click", loadSecondary)

let btn = document.getElementById("search-btn")

btn.addEventListener("click", searchImage)

let searchbar = document.getElementById("search-bar")
searchbar.addEventListener("keydown", (event) => {
    if (event.key === "Enter"){
        searchImage()
    }
    else{
        return
    }
})

const clearPage = () => {
    const container = document.getElementById("card-con")
    let search = document.getElementById("search-bar")
    search.value = ""
    container.innerHTML = ""
}

searchbar.addEventListener("click", clearPage)



/* <div class="col-md-4">
            <div class="card mb-4 shadow-sm">

              <div class="card-body">
                <img class="card-img-top" src="..." style="width:100%; height: 225">
                <p class="card-text">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      View
                    </button>
                    <button type="button" class="btn btn-sm btn-outline-secondary">
                      Edit
                    </button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
            </div>
          </div> */