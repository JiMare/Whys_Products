import ky from 'ky';

export const api = ky.create({
  prefixUrl: 'https://dummyjson.com/',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});
