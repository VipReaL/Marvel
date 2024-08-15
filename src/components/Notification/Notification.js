import './Notification.css';

import { ROOT_MODAL } from '../../constants/root';

import imgCloseBlack from '../../img/close_black.svg';

class Notification {
    render() {
        const htmlWrapper = `
            <div class="notification__container">
                <span>Нет контента</span>
                <button 
                    class="notification__close btn"
                    onclick="modal.innerHTML = ''"
                    style="background-image: url(${imgCloseBlack})"
                ></button>
            </div>
            
        `

        ROOT_MODAL.innerHTML = htmlWrapper;
    }
}

export default new Notification();