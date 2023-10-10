
let srcImagesArray = ["./img/01.webp","./img/02.webp","./img/03.webp","./img/04.webp","./img/05.webp"]

console.log(srcImagesArray)

let containerDOMElement = document.querySelector('.container-big')

console.log(containerDOMElement)


for (let i = 0; i < srcImagesArray.length; i++ ) {
    let currentSrc = srcImagesArray[i] ;
    console.log(currentSrc)

    let htmlString = `
    <div class="image"> 
        <img src="${currentSrc}">
    </div>
    `

    containerDOMElement.innerHTML += htmlString
}

let imageDOMElements = document.querySelectorAll('.image')
console.log(imageDOMElements)

let firstImageDOMElement = imageDOMElements[0]
firstImageDOMElement.classList.add('active')


document.querySelector(".button-a").addEventListener("click", function() {
    let firstImageDOMElement = imageDOMElements[0]
    firstImageDOMElement.classList.remove('active')
    let secondImageDOMElement = imageDOMElements[1]
    secondImageDOMElement.classList.add('active')
  });


document.querySelector(".button-b").addEventListener("click", function() {
    
  });