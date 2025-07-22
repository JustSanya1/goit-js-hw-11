import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery")
const gallerySimpleLightBox = new SimpleLightbox(".gallery-link", {})

export function createGallery(images) {
    let imgArrayString = images.map(({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) =>
        `<li class="gallery-li">
        <a class="gallery-link" href="${largeImageURL}">
            <img class="gallery-img" src="${webformatURL}" alt="${tags}"/>
        </a>
        <div class="img-div">
            <p class="img-p">Likes<span class="img-span">${likes}</span></p>
            <p class="img-p">Views<span class="img-span">${views}</span></p>
            <p class="img-p">Comments<span class="img-span">${comments}</span></p>
            <p class="img-p">Downloads<span class="img-span">${downloads}</span></p>
            </div>
     </li>`).join("");
    galleryEl.insertAdjacentHTML('beforeend', imgArrayString)
    gallerySimpleLightBox.refresh()
};
export function clearGallery() {
    galleryEl.innerHTML ='';
};
export function showLoader() {
    if (!galleryEl.querySelector('.loader')) {
        const loader = document.createElement("span")
        loader.classList.add("loader");
        galleryEl.append(loader);
    }

};
export function hideLoader() {
    const loader = document.querySelector('.loader')
    if (loader) {
        loader.remove();
    }
};