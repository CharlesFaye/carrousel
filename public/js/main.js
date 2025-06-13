const figure = document.querySelector('figure');
const img = document.querySelector('img');
const figcaption = document.querySelector('figcaption');
const nextBtn = document.getElementById('next-btn');
const previousBtn = document.getElementById('previous-btn');


const images = [
  {
    src: "images/image1.jpg",
    alt: "image 1",
    caption: "image of servers",
    loading: "eager"
  },
  {
    src: "images/image2.jpg",
    alt: "image 2",
    caption: "a screen computer displaying code",
    loading: "lazy"
  },
  {
    src: "images/image3.jpg",
    alt: "image 3",
    caption : "an image with red lights",
    loading: "lazy"
  },
  {
    src: "images/image4.jpg",
    alt: "image 4",
    caption: "a working desktop",
    loading: "lazy"
  }
];

let intervalId;

/**
 * Starts the automatic slideshow by cycling through the images array every 5 seconds.
 * Updates the image source, alt text, loading attribute, and caption accordingly.
 * Uses a setInterval to handle the timing and looping logic.
 * 
 * @function
 * @returns {void}
 */
const startAutoSlide = () => {
  intervalId = setInterval(() => {
    while (i < images.length) {
    img.src = images[i].src;
    img.alt = images[i].alt;
    img.loading = images[i].loading;
    figcaption.textContent = images[i].caption;
    i++;
    if (i === images.length) {
      i = 0;
    }
    break;
 }
  },5000)
  
}
//startAutoSlide()

/*

img.addEventListener('mouseover', () => {
    clearInterval(intervalId)
  });

img.addEventListener('mouseout', () => {
  startAutoSlide()
}) */
  




let i = 1;
let j;


/**
 * Advances the carousel to the next image.
 * Updates the image source, alt text, loading attribute, and caption.
 * Loops back to the first image after reaching the end of the images array.
 *
 * Assumes the existence of the following variables in the outer scope:
 * - images: Array of image objects with 'src', 'alt', 'loading', and 'caption' properties.
 * - img: The HTMLImageElement to update.
 * - figcaption: The HTMLFigcaptionElement to update.
 * - i: Current index in the images array.
 * - j: Variable to store the previous index.
 */
const moveToNextImage = () => {

 while (i < images.length) {
    j = i;
    img.src = images[i].src;
    img.alt = images[i].alt;
    img.loading = images[i].loading;
    figcaption.textContent = images[i].caption;
    i++;
    if (i === images.length) {
      i = 0;
    }
    break;
 }
}


/**
 * Moves the carousel to the previous image.
 * 
 * Decrements the current image index `j` if possible, updates the image and caption displayed.
 * Handles special cases when reaching the start of the image list by resetting indices.
 * 
 * Side Effects:
 * - Updates the `img` element's `src`, `alt`, and `loading` attributes.
 * - Updates the `figcaption` text content.
 * - Modifies the global indices `j` and `i`.
 * 
 * Assumes:
 * - `images` is an array of image objects with `src`, `alt`, `loading`, and `caption` properties.
 * - `img` is a reference to an image DOM element.
 * - `figcaption` is a reference to a figcaption DOM element.
 * - `j` and `i` are global indices used for navigation.
 */
const moveBackToPreviousImage = () => {
    if (j > 0) {
         j--;
        img.src = images[j].src;
        img.alt = images[j].alt;
        img.loading = images[j].loading;
        figcaption.textContent = images[j].caption;
   
    }
    
    if (j === 0) {
      j = images.length;
      i = 1;
    }
    if (j === 1) {
      i = 2;
    }
    if (j === 2) {
      i = 3;
    } 
}


nextBtn.addEventListener('click', moveToNextImage);
previousBtn.addEventListener('click', moveBackToPreviousImage);
