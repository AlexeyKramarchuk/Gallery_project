const container = document.querySelector(".gallery")



class Gallery {
  container;
  arrayOfImages;

  constructor(container, arrayOfImages){
    this.container = container;
    this.arrayOfImages = arrayOfImages;
  }
 
  formatToHtmlElements(arrayOfImages) {
    arrayOfImages.map((imgPath) => {
    
      const imgElement = document.createElement("img");
      imgElement.setAttribute('src', imgPath);
      return imgElement
    })
  }

  createGallery() {
    this.imgElement.forEach(el => {
      container.appendChild(el)
    })
  }
}
console.log(container)
  
