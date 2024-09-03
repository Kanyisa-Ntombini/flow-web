function PictureBlock({ imageSrc }) {
  function handleDownLoad() {
    alert('Downloaded!');
  }

  return (
    <div className="Block">
      <figure>
        <img src={imageSrc} alt="a tree" />
      </figure>
      <button onClick={handleDownLoad}>Download</button>
    </div>
  );
}

export default PictureBlock;
