import axios from 'axios';
import dotenv from 'dotenv';
dotenv.config();
const { INSTAGRAM_APP_ID, INSTAGRAM_APP_SECRET } = process.env;

const getAuthorizationCode = (authorizationWindowUrl) => {
  return authorizationWindowUrl.split('code=')[1].split('#_')[0];
};

const getAccessToken = async (authorizationWindowUrl) => {
  const code = getAuthorizationCode(authorizationWindowUrl);
  const response = await axios({
    url: 'https://api.instagram.com/oauth/access_token',
    method: 'post',
    headers: {
      'Content-type': 'multipart/form-data',
    },
    data: {
      client_id: INSTAGRAM_APP_ID,
      client_secret: INSTAGRAM_APP_SECRET,
      grant_type: 'authorization_code',
      redirect_uri: 'https://flow-web-888.netlify.app/',
      code: code,
    },
  });
  return response.data;
};

export default getAccessToken;
