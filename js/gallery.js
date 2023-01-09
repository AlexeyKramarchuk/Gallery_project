class Gallery {
  #container;
  #arrayOfImages;

  #imageElements = [];
  #previewContainer = null;

  constructor(container, arrayOfImages) {
    this.#container = container;
    this.#arrayOfImages = arrayOfImages;

    this.#formatToHtmlElements();
    this.#createGallery();
  }

  #formatToHtmlElements() {
    this.#imageElements = this.#arrayOfImages.map((imgPath) => {
      const imgElement = document.createElement("img");
      imgElement.setAttribute("src", imgPath);
      return imgElement;
    });
  }

  #changePreviewImage = (e) => {
    if (e.target.tagName !== "IMG") return;

    this.#previewContainer.innerHTML = "";
    this.#previewContainer.appendChild(e.target.cloneNode());
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

    const firstImageCopy = this.#imageElements[0].cloneNode();

    this.#previewContainer.appendChild(firstImageCopy);
    this.#container.appendChild(this.#previewContainer);
  }

  #createGallery() {
    //   this.#imagesElements.forEach((el) => {
    //     this.#container.appendChild(el);
    //   });
    this.#createPreview();
    this.#createThumbnails();

    console.log("cr", this);
  }
}

export default Gallery;
