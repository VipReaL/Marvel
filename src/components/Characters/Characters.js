import './Characters.css';

import { IMG_STANDARD_XLARGE } from '../../constants/api';
import { getDataApi } from "../../utils/getDataApi";
import { ROOT_MODAL } from '../../constants/root';
import Notification from '../Notification/Notification';

import imgCloseWhite from '../../img/close_white.svg'

class Characters {
    renderContent(data) {
        let htmlContent = '';

        data.forEach(({ name, thumbnail: { path, extension } }) => {
            const imgSrc = path + '/' + IMG_STANDARD_XLARGE + '.' + extension;

            htmlContent += `
                <li class="characters__item">
                    <img src='${imgSrc}' class="characters__img img-cover" />
                    <span class="characters__name">${name}</span>
                </li>
            `;
        });

        const htmlWrapper = `
            <div class="wrapper">
                <ul class="characters__container">
                    ${htmlContent}
                </ul>
                <button 
                    class="characters__close btn"
                    onclick="modal.innerHTML = ''"
                    style="background-image: url(${imgCloseWhite})"
                ></button>
            </div>
        `;

        ROOT_MODAL.innerHTML = htmlWrapper;
    }

    async render(uri) {
        const data = await getDataApi.getData(uri);

        data.length ? this.renderContent(data) : Notification.render();
    }
}

export default new Characters();