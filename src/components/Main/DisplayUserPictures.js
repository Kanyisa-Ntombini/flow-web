import PictureBlock from './PictureBlock.js';

import getImages from '../../instagram_api/get_images.js';
// ^^ getImages is a function that returns a promise. It requests the user's images from the instagram api

import getData from '../../instagram_api/get_user_data.js';
const { username } = getData();
// ^^ getData is a function that returns a promise. It requests the user name from the instagram api

export default function DisplayUserPictures() {
  const imagesToPrint = getImages();
  const allUserPictures = imagesToPrint.map((item, index) => {
    return <PictureBlock imageSrc={item} key={index} />;
  });

  return (
    <section>
      <h2>{username}</h2>
      <div className="AllImages">{allUserPictures}</div>
    </section>
  );
}
