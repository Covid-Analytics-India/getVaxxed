// export const API_URL = "https://crypto-spring-boot.herokuapp.com";
export const API_URL =
  process.env['NODE_ENV'] === 'production'
    ? 'https://getvaxxed.herokuapp.com/'
    : 'http://localhost:8080';
