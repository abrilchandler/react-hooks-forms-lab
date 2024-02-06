import React, {useState} from "react";

function Filter({ onCategoryChange, search, onSearchChange }) {
  // we passed the functions for setting our search and category here - we also passed the current state of search
  // that's why our input onChange on line 14 can now cause search (in ShoppingList) to change
  // and our onChange on line 15 can change selectedCategory (in ShoppingList) 

  function handleSearchChange(event) {
    onSearchChange(event.target.value)
  }

  return (
    <div className="Filter">
      <input type="text" name="search" value={search} onChange={handleSearchChange} placeholder="Search..." />
      <select name="filter" onChange={onCategoryChange}>
        <option value="All">Filter by category</option>
        <option value="Produce">Produce</option>
        <option value="Dairy">Dairy</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;
