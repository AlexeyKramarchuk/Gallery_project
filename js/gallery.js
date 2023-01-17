class Gallery {
  #container;
  #arrayOfImages;

  #currentPreviewImageIndex = 0;
  #imageElements = [];
  #previewContainer = null;

  #arrowLeft;
  #arrowRight;

  constructor(container, arrayOfImages) {
    this.#container = container;
    this.#arrayOfImages = arrayOfImages;

    this.#formatToHtmlElements();
    this.#createGallery();
  }

  #formatToHtmlElements() {
    this.#imageElements = this.#arrayOfImages.map((imgPath, idx) => {
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", imgPath);
      imgElement.setAttribute("data-index", idx);
      return imgElement;
    });
  }

  #refreshPreview() {
    const { src } = this.#imageElements[this.#currentPreviewImageIndex];

    if (this.#currentPreviewImageIndex === 0) {
      this.#arrowLeft.style = "visibility: hidden";
    } else {
      this.#arrowLeft.style = "visibility: visibile";
    }

    if (this.#currentPreviewImageIndex === this.#imageElements.length - 1) {
      this.#arrowRight.style = "visibility: hidden";
    } else {
      this.#arrowRight.style = "visibility: visibile";
    }

    // console.log(this.#imageElements);
    console.log(this.#currentPreviewImageIndex);
    console.dir(this.#imageElements[this.#currentPreviewImageIndex]);
    
  

    this.#imageElements[this.#currentPreviewImageIndex].classList.add("active");
    

    this.#previewContainer.querySelector("img").setAttribute("src", src);
  }

  #changePreviewImage = (e) => {
    if (e.target.tagName !== "IMG") return;

    const { dataset } = e.target;

    this.#currentPreviewImageIndex = Number(dataset.index);

    this.#refreshPreview();

  };

  #createThumbnails() {
    const thumbnailsContainer = document.createElement("div");
    thumbnailsContainer.classList.add("thumbnails");
    thumbnailsContainer.addEventListener("click", this.#changePreviewImage);

    this.#imageElements.forEach((el) => {
      thumbnailsContainer.appendChild(el);
    });

    this.#container.appendChild(thumbnailsContainer);

  
  }
  
  #createPreview() {
    this.#previewContainer = document.createElement("div");
    this.#previewContainer.classList.add("preview");

    const firstImageCopy =
      this.#imageElements[this.#currentPreviewImageIndex].cloneNode();

    this.#previewContainer.appendChild(firstImageCopy);
    this.#container.appendChild(this.#previewContainer);
  }

  #createGallery() {
    //   this.#imagesElements.forEach((el) => {
    //     this.#container.appendChild(el);
    //   });
    this.#createPreview();
    this.#createArrowElement();
    this.#createThumbnails();

    this.#refreshPreview();
  }

  scrollThumbnails() {
    this.thumbnailsContainer;
  }

  #createArrowElement() {
    const arrowContainer = document.createElement("div");
    arrowContainer.classList.add("arrows");

    this.#arrowLeft = document.createElement("button");
    this.#arrowLeft.classList.add("left");
    this.#arrowLeft.addEventListener("click", () => {
      if (this.#currentPreviewImageIndex <= 0) {
        return;
      }

      this.#currentPreviewImageIndex--;
      this.#refreshPreview();
    });
    arrowContainer.appendChild(this.#arrowLeft);

    this.#arrowRight = document.createElement("button");
    this.#arrowRight.classList.add("right");
    this.#arrowRight.addEventListener("click", () => {
      if (this.#currentPreviewImageIndex >= this.#imageElements.length - 1) {
        return;
      }

      this.#currentPreviewImageIndex++;
      this.#refreshPreview();
    });
    arrowContainer.appendChild(this.#arrowRight);

    this.#previewContainer.appendChild(arrowContainer);
  }
}

export default Gallery;
