// eslint-disable-next-line no-use-before-define
import React from "react"
import { useFetchGifs } from "../hooks/useFetchGifs"
import GifGridItem from "./GifGridItem"

interface Image {
  id: string
  title: string
  url: string
}

function GifGrid({ category }: { category: string }) {
  const { data: images, loading } = useFetchGifs(category)
  return (
    <>
      <h3>{category}</h3>
      {loading && <p>Cargando...</p>}
      <div className="card-grid">
        {images.map((image: Image) => (
          <GifGridItem {...image} key={image.id} />
        ))}
      </div>
    </>
  )
}

export default GifGrid
