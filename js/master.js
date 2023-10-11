
let srcImagesArray = ["./img/01.webp","./img/02.webp","./img/03.webp","./img/04.webp","./img/05.webp"]

console.log(srcImagesArray)

let containerDOMElement = document.querySelector('.container-big')

console.log(containerDOMElement)

let indexCurrentImage = 0;

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

let currentImageDOMElement = imageDOMElements[indexCurrentImage]
currentImageDOMElement.classList.add('active')


document.querySelector(".button-backward").addEventListener("click", function() {
   
  
    let currentImageDOMElement = imageDOMElements[indexCurrentImage]
    currentImageDOMElement.classList.remove('active')


    indexCurrentImage--;

    if (indexCurrentImage < 0){
        indexCurrentImage = srcImagesArray.length-1
        console.log(indexCurrentImage)
    }


    let nextImageDOMElement = imageDOMElements[indexCurrentImage]
    nextImageDOMElement.classList.add('active')
  });


document.querySelector(".button-forward").addEventListener("click", function() {
   
  
    let currentImageDOMElement = imageDOMElements[indexCurrentImage]
    currentImageDOMElement.classList.remove('active')


    indexCurrentImage++;
    
    if (indexCurrentImage > (srcImagesArray.length)-1){
        indexCurrentImage = 0   
    }


    let nextImageDOMElement = imageDOMElements[indexCurrentImage]
    nextImageDOMElement.classList.add('active')

  });

