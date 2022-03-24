// eslint-disable-next-line no-use-before-define
import React, { useState } from "react"
import AddCategory from "./components/AddCategory"
import GifGrid from "./components/GifGrid"

function GifExpertApp() {
  const [categories, setCategories] = useState(["One Punch"])

  const handleAdd = (value: string): void => {
    setCategories([value, ...categories])
  }

  return (
    <>
      <h1>GifExpertApp</h1>
      <AddCategory handleAdd={handleAdd} />
      <hr />
      <button onClick={() => handleAdd("HunterXHunter")}>Agregar</button>
      <ol>
        {categories.map((category, index) => (
          <GifGrid key={category} category={category} />
        ))}
      </ol>
    </>
  )
}

export default GifExpertApp
