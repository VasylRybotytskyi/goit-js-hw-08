<<<<<<< Updated upstream
import SimpleLightbox from 'simplelightbox';
import "simplelightbox/dist/simple-lightbox.min.css";

import { galleryItems } from './gallery-items'; 


const galleryContainer = document.querySelector('.gallery');

const markup = galleryItems.reduce(
        (acc, { original, preview, description }) =>
          (acc += `<li>
        <a class="gallery__item" href="${original}">
            <img class="gallery__image" 
                src="${preview}"
                alt="${description}" />
        </a>
      </li>`),
        ''
      );

galleryContainer.insertAdjacentHTML('beforeend', markup);

var lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
});
=======
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
>>>>>>> Stashed changes

console.log(galleryItems);
