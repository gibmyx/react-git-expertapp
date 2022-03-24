// eslint-disable-next-line no-use-before-define
import React from "react"

interface Image {
  id: string
  title: string
  url: string
}

function GifGridItem({ id, title, url }: Image) {
  return (
    <div className="card animate__animated animate__bounce animate__fadeIn">
      <img src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}

export default GifGridItem
