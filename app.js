//element to store image values --> src and alt minimum
const images = [
  {
    image: "./Assets/bambooforrest.jpg",
    thumbnail: "./Assets/bambooforrest.jpg",
    alt: "sunlight peaking through a bamboo forrest",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    id: "pic0",
  },
  {
    image: "./Assets/beach.jpg",
    thumbnail: "./Assets/beach.jpg",
    alt: "Bahamas Beach",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    id: "pic1",
  },
  {
    image: "./Assets/lama.jpg",
    thumbnail: "./Assets/lama.jpg",
    alt: "A lama infront of a mountain view",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    id: "pic2",
  },
  {
    image: "./Assets/dncanada.jpg",
    thumbnail: "./Assets/dncanada",
    alt: "a view of district 9 in canada",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    id: "pic3",
  },
  {
    image: "./Assets/mountainrange.jpg",
    thumbnail: "./Assets/mountainrange.jpg",
    alt: "a mountain range",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    id: "pic4",
  },
  {
    image: "./Assets/sandstone.jpg",
    thumbnail: "./Assets/sandstone.jpg",
    alt: "A redish sandstone crag",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    id: "pic5",
  },
  {
    image: "./Assets/snowymountain.jpg",
    thumbnail: "./Assets/snowymountain.jpg",
    alt: "a snowy mountain view",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    id: "pic6",
  },
  {
    image: "./Assets/waterfall.jpg",
    thumbnail: "./Assets/waterfall.jpg",
    alt: "View of niagra falls",
    description:
      "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit",
    id: "pic7",
  },
];

let displayImage = document.getElementById("main-img-display");
let displayText = document.getElementById("img-description");
let thumbnailContainer = document.getElementById("thumbnail-container");
let currentImageIndex = 0;
const displayElem = document.getElementById("display");

function init() {
  // await fetchImages()
  createThumbnails();
  setImageAndDescriptionDisplay(images, currentImageIndex);
}

function setImageAndDescriptionDisplay(array, index) {
  if (index < 0) index = array.length - 1;
  if (index > array.length - 1) index = 0;
  displayImage.setAttribute("src", array[index].image);
  displayImage.setAttribute("alt", array[index].alt);
  displayText.innerHTML = array[index].description;
  currentImageIndex = index;
}

function createThumbnails() {
  for (let image of images) {
    let thumbnail = document.createElement("img");

    thumbnail.setAttribute("src", image.image);
    thumbnail.setAttribute("alt", image.alt);
    thumbnail.setAttribute("tabindex", "0");
    thumbnail.classList.add("thumb-image");
    thumbnailContainer.appendChild(thumbnail);

    const matchImageId = (element) => element.id == image.id;
    thumbnail.addEventListener("click", function () {
      currentImageIndex = images.findIndex(matchImageId);
      setImageAndDescriptionDisplay(images, currentImageIndex);
    });
    thumbnail.addEventListener("keydown", function (event) {
      if (event.key === "Enter") {
        currentImageIndex = images.findIndex(matchImageId);
        setImageAndDescriptionDisplay(images, currentImageIndex);
      }
    });
  }

  let next = document.querySelector("#next");
  next.textContent = "→";
  next.addEventListener("click", function () {
    setImageAndDescriptionDisplay(images, ++currentImageIndex);
  });
  let previous = document.querySelector("#previous");
  previous.textContent = "←";
  previous.addEventListener("click", function () {
    setImageAndDescriptionDisplay(images, --currentImageIndex);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowRight")
      setImageAndDescriptionDisplay(images, ++currentImageIndex);
    if (event.key === "ArrowLeft")
      setImageAndDescriptionDisplay(images, --currentImageIndex);
  });
}

//!stretch goal (completely optional): carousel or arrow keys
//global variable to store the current img index for the big image
//let currentIndex = 0;

//select the DOM elements that contain our images with a document method
//select the thumbnail-container
//select the large-image-container

//function to create my thumbnail images --> action
//function createThumbnails(thumbnailContainer) {
//a loop to create multiple images --> forEach /for loop
//thumbnailContainer.forEach((thumbnail, index) => {
//a document method that creates a DOM element (img)
//assign a value to the img attributes (eg. img.src = "value")
//(optional) assign a class name to the img element (.className property)
//append the new elements to the DOM using a document method
//add an event listener for each image
//thumbnail.addEventListener("click", function (){
//when the user clicks on the image, we are going to call the function that creates the large image
//createLargeImage(thumbnail[index]);
// })
// });
//}

// createThumbnails(argument --> images)

//function createLargeImage(largeImage) {
//problem -->  the images appear one after the other (innerHTML = "")
//create an image element
//(optional) add a classname
//set the src value
//set the alt value
//append the large image to the DOM
//}

window.onload = init;
