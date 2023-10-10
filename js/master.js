
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

let imageDOMElement = document.querySelectorAll('.image')
console.log(imageDOMElement)


document.querySelector(".button-a").addEventListener("click", function() {
    
  });


document.querySelector(".button-b").addEventListener("click", function() {
    
  });