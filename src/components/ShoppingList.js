import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, addItem }) {
  const [selectedCategory, setSelectedCategory] = useState("All"); // this is how this component will know which items to display
  const [search, setSearch] = useState("") // this too - but I don't think we're done with it yet
  // the first item is where the value is stored - selectedCategory, search. setSelectedCategory, setSearch are function that'll let us set those
  // if we want to be able to use some other part of the app (Like Filter.js) to control what's in search or selectedCategory, we pass those setting functions to that part of the app

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  // next step, filter items based on our search term, not just filter (i think) 
  // we should be able to chain another filter on items 

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  }).filter((item) => item.name.toLowerCase().includes(search.toLowerCase()));
  // we don't need addItem in here, but we need it in itemForm so I'm passing it down again on line 27
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={addItem} />
      <Filter search={search} onSearchChange={setSearch}onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
