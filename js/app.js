import Gallery from "./gallery.js";

const container = document.querySelector(".gallery");

const images = [
  "https://picsum.photos/200/320",
  "https://picsum.photos/200/310",
  "https://picsum.photos/200/300",
];

const gallery = new Gallery(container, images);
