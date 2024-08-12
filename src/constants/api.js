import { md5 } from 'js-md5';

export const PUBLIC_KEY = '422466a5b1237fbd5080199ea68db0b0';
export const PRIVATE_KEY = '06cdb26a684e4f7c235202a64bb993d0513a23f5';
export const TIME_STAMP = new Date().getTime().toString();
export const HASH = md5(TIME_STAMP + PRIVATE_KEY + PUBLIC_KEY);
export const BASE_URL = 'https://gateway.marvel.com/v1/public/';

export const URL_COMICS = 'comics';
export const URL_CHARACTERS = 'characters';