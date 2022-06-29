import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

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
      {categories?.map(category => (
        <GifGrid 
          category={ category } 
          key={ category } 
        />
      ))}
    </>
  );
};
