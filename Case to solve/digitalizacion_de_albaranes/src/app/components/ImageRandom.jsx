async function ImageRandom() {
  const { url } = await fetch("https://picsum.photos/100");
  return (
    <div
      className="image-container"
      style={{ textAlign: "center", margin: "20px" }}
    >
      {url ? (
        <img
          src={url}
          alt="Random"
          style={{ width: "120px", height: "120px", borderRadius: "8px" }}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default ImageRandom;
