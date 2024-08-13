import './Comics.css'

import { ROOT_INDEX } from '../../constants/root';
import { getDataApi } from "../../utils/getDataApi";
import { BASE_URL, URL_COMICS, URL_CHARACTERS, IMG_STANDARD_XLARGE, IMG_NOT_AVAILABLE } from '../../constants/api';

import Error from '../Error/Error';

class Comics {
    eventListener() {
        document.querySelectorAll('.comics__item').forEach(element => {
            const uri = element.getAttribute('data-url');
            element.addEventListener('click', () => {
                console.log(uri);
            })
        })
    }

    renderComics(data) {
        let htmlContent = '';

        data.forEach(({ id, title, thumbnail: { path, extension } }) => {

            if (path.lastIndexOf(IMG_NOT_AVAILABLE) === -1) {
                const uri = BASE_URL + URL_COMICS + '/' + id + '/' + URL_CHARACTERS
                const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

                htmlContent += `
                    <li class="comics__item" data-url="${uri}">
                        <img src='${imgSrc}' class="comics__img" />
                        <span class="comics__name">${title}</span>
                    </li>
                `
            }
        });

        const htmlWrapper = `
            <ul class="comics__container">
                ${htmlContent}
            </ul>
        `

        ROOT_INDEX.innerHTML = htmlWrapper;
    }

    async render() {
        const data = await getDataApi.getData(BASE_URL + URL_COMICS);

        data ? this.renderComics(data) : Error.render();
    }
}

export default new Comics();