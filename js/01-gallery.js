import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);

// 1. Створення і рендер розмітки на підставі масиву даних galleryItems і наданого шаблону елемента галереї.

const divGalleryEl = document.getElementsByClassName('gallery')[0];

const markupGallery = makeMarkupGallery(galleryItems);

divGalleryEl.innerHTML = markupGallery;

// 2. Реалізація делегування на div.gallery і отримання url великого зображення.

let modal;

divGalleryEl.addEventListener('click', onClickGallery);

function onClickGallery(e) {
	e.preventDefault();
	const target = e.target;
	if (target.nodeName !== "IMG") {
		return;
	}
	
	const originalUrl = target.dataset.source;

	modal = makeModalImg(originalUrl);

	modal.show();
}

function onKeyDownCloseModal(e) {
	if (e.code !== 'Escape') {
		return;
	}
	modal.close();
}

function makeModalImg(url) {
	const instance = basicLightbox.create(`
		<img src="${url}" />
	`, {
		onShow: () => {
        	window.addEventListener('keydown', onKeyDownCloseModal);
		},
		onClose: () => {
        	console.log('delete EventListener');
			window.removeEventListener('keydown', onKeyDownCloseModal);
    	}
	});

	return instance;
}

function makeMarkupGallery(data) {
	return data
		.map(({ preview, original, description }) => {
			return `<div class="gallery__item">
						<a class="gallery__link" href="${original}">
							<img
							class="gallery__image"
							src="${preview}"
							data-source="${original}"
							alt="${description}"
							/>
						</a>
					</div>`;
		})
		.join('');
}




