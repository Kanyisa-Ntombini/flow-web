// import axios from 'axios';
// import getAccessToken from './get_access_token.js';
// const { access_token, user_id } = getAccessToken();

// const getData = async () => {
//   const baseUrl = 'https://graph.instagram.com';

//   const mediaId = `17880014288366092`;
//   const endpoints = `me`;
//   const queryParams = `fields=id,username&access_token=${ACCESS_TOKEN}`;
//   const urlToFetch = `${baseUrl}/${endpoints}?${queryParams}`;

//   const rawUsernameData = await axios.get(urlToFetch);

//   return rawUsernameData.data;
// };

const getData = () => {
  return {
    username: 'Kanyisa N',
  };
};

export default getData;
