import React from 'react';

const CategoryFilter = ({ categories, handleCategoryChange }) => {
  return (
    <div>
      <label htmlFor="categories">Filter by Category:</label>
      <select id="categories" onChange={(e) => handleCategoryChange(e.target.value)}>
        {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;