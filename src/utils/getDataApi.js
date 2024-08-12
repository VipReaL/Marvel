import axios from 'axios';
import { PUBLIC_KEY, TIME_STAMP, HASH, } from '../constants/api';

class GetDataApi {
    async getData(url) {
        try {
            const response = await axios.get(url, {
                params: {
                    ts: TIME_STAMP,
                    apikey: PUBLIC_KEY,
                    hash: HASH,
                }
            })
    
            return response.data.data.results;
        } catch (error) {
            console.log(error.message);
            return false;
        }
    }
}

export const getDataApi = new GetDataApi();