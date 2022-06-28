import { useState } from 'react';
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = ({ defaultCategories=[] }) => {
  const [categories, setCategories] = useState(defaultCategories);

  const onAddCategory = newCategory => {
    if (categories.includes(newCategory.toLowerCase())) return;
    setCategories([newCategory, ...categories]);
  };

  return (
    <>
      <h1>Gif Expert App</h1>
      <hr />
      <AddCategory 
        // setCategories={ setCategories }
        onNewCategory={ value => onAddCategory(value) }
      />
      <ol>
        {categories?.map(category => (
          <h1>{ category } </h1>
        ))}
      </ol>
    </>
  );
};
