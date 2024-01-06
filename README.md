# Flow Web

Live site: https://flow-web-888.netlify.app/

## How to get the access token

- Paste the following in the browser
  https://api.instagram.com/oauth/authorize
  ?client_id={app-id}
  &redirect_uri={redirect-uri}
  &scope=user_profile,user_media
  &response_type=code

- You will get a url that ends with code=aaaaaaaaaaaa#-
- Only use code=aaaaaaaaaaaa

- Use the above code in to run the following in the terminal:
  curl -X POST \
   https://api.instagram.com/oauth/access_token \
   -F client_id={app-id} \
   -F client_secret={app-secret} \
   -F grant_type=authorization_code \
   -F redirect_uri={redirect-uri} \
   -F code={code}

- You will get the following that you will save in your .env file
  {
  "access_token": "IGQVJ...",
  "user_id": 17841405793187218
  }

## Testing
