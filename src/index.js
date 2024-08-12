import { getDataApi } from "./utils/getDataApi";
import { BASE_URL, URL_COMICS, URL_CHARACTERS } from './constants/api';

(async () => {
    const data = await getDataApi.getData(BASE_URL + URL_CHARACTERS);
    console.log(data);
})();