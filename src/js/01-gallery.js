import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items.js';

// Change code below this line
const galleryList = document.querySelector('.gallery');

const itemsGallery = galleryItems
  .map(
    item => `
    <li class="gallery__item">
    <a
    class="gallery__link"
    href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"/>
      </a>
    </li>
`
  )
  .join('');
galleryList.innerHTML = itemsGallery;
// console.log(itemsGallery);
// console.log(galleryItems);

galleryList.addEventListener('click', onImageClick);

function onImageClick(eve) {
  eve.preventDefault();

  const clickElem = eve.target;
  //   console.log(clickElem);

  if (clickElem.nodeName !== 'IMG') {
    return;
  }
  const originImage = clickElem.dataset.source;
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
