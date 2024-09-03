import './Header.css';
// import SearchBar from './SearchBar/SearchBar.js';
import getAccessToken from '../../instagram_api/get_access_token.js';

/*
1. Header
  - title
  - Navigation Bar?

2. Main
- Search Bar
  - display name of user
  - display all users photos
  - each photo must have a download button

*/

export default function Header() {
  const linkToOpenInBrowser =
    'https://api.instagram.com/oauth/authorize?client_id=1409820282971631&redirect_uri=https://flow-web-888.netlify.app/&scope=user_profile,user_media&response_type=code';

  const handleClick = async () => {
    const authorisationLink =
      document.getElementById('authorisationLink').value;
    console.log(authorisationLink);
    getAccessToken(authorisationLink)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <header>
      <h1>Flow</h1>
      <button>
        <a href={linkToOpenInBrowser} target="_blank" rel="noreferrer">
          open in new tab
        </a>
      </button>
      <label htmlFor="authorisationLink">paste link</label>
      <input type="text" id="authorisationLink" />
      <button onClick={handleClick}>Go</button>
      {/* <SearchBar /> */}
      <hr />
    </header>
  );
}
