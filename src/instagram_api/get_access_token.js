import axios from 'axios';

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
      client_id: '1409820282971631',
      client_secret: '7f291034019d3dbea408e8635ba300e4',
      grant_type: 'authorization_code',
      redirect_uri: 'https://flow-web-888.netlify.app/',
      code: code,
    },
  });
  console.log(response);
  return response.data;
  /* 
   {
   access_token: 'IGQWRPSkF6D',
   user_id: 754745747
 }
   */
};

export default getAccessToken;
