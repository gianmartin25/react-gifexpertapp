// import { useEffect, useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";
// import { getGifs } from "../helpers/getGifs";

export const GifGrid = ({ category, index }) => {
  const { data: images, loading } = useFetchGifs(category);

  // useEffect(() => {
  //   // console.log(category);
  //   // getGifs(category).then((gifs) => setImages(gifs));
  // }, [category]);

  // []
  //se ejecuta solo una vez porque no tiene dependencias
  // [category]
  // se va a ejecutar cuando [category] cambie

  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando</p>}
      <section className="cards">
        {images.map((image) => (
          <GifGridItem key={image.id} {...image} />
        ))}
      </section>
    </>
  );
};
