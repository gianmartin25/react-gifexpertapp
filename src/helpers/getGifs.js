export const getGifs = async (category) => {
  const url = await fetch(
    `https://api.giphy.com/v1/gifs/search?api_key=45YiLnovxLNswvl7wuxJ2mWkO8gOczk1&q=${encodeURI(
      category
    )}&limit=10`
  );
  // encodeURI() //reemplaza los espacios por porcentajes en la URL
  const { data } = await url.json();

  const gifs = data.map(({ images, title, id }) => {
    return { url: images?.downsized_medium.url, title, id };
  });
  console.log(gifs);
  return gifs;
  // console.log(data);
};
