// eslint-disable-next-line no-use-before-define
import React, { ChangeEvent, FormEvent, useState } from "react"

function AddCategory({ handleAdd }: { handleAdd: (value: string) => void }) {
  const [inputValue, setInputValue] = useState("")

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value)
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    e.stopPropagation()

    if (inputValue.trim().length > 2) {
      handleAdd(inputValue)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="inputValue"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  )
}

export default AddCategory
