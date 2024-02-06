import React, { useState } from "react";
import { v4 as uuid } from "uuid";

function ItemForm({onItemFormSubmit}) {
  const [newItemName, setNewItemName] = useState("")
  const [newItemCategory, setNewItemCategory] = useState("")

  function handleSubmit(event) {
    event.preventDefault()
    console.log(event.target.value) // I'm just trying to figure out the best way to get the name and category for the item we're adding
    // we're not going to use event.target.value we're going to use more state
    onItemFormSubmit({
      id: uuid(),
      name: newItemName,
      category: newItemCategory
    })
  }

  function handleNameChange(event) {
    setNewItemName(event.target.value)
  }

  function handleCategoryChange(event) {
    setNewItemCategory(event.target.value)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameChange}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategoryChange}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
