import './App.css'

import { getDataApi } from "../../utils/getDataApi";
import { BASE_URL, URL_COMICS, URL_CHARACTERS } from '../../constants/api';

class App {
    async render() {
        const data = await getDataApi.getData(BASE_URL + URL_CHARACTERS);
        console.log(data);
    }
}

export default new App();