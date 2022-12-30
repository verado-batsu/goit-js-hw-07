import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.
const ulGalleryEl = document.getElementsByClassName('gallery')[0];

const markupGallery = makeMarkupGallery(galleryItems);

ulGalleryEl.innerHTML = markupGallery;

const lightbox = new SimpleLightbox('.gallery a', {
	captionsData: `alt`,
	captionDelay: 250,
});


function makeMarkupGallery(data) {
	return data
		.map(({ preview, original, description }) => {
			return `
			<a class="gallery__item" href="${original}">
				<img class="gallery__image" src="${preview}" alt="${description}" />
			</a>`
		})
		.join('');
}