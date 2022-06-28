import { useState } from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    const value = inputValue.trim();
    if (value.length <= 1) return;

    // setCategories(categories => [inputValue, ...categories]);
    onNewCategory(value);
    setInputValue('');
  };

  return (
    <form onSubmit={ onSubmit }>
      <input 
        type="text"
        value={ inputValue }
        onChange={ onInputChange }
      />
    </form>
  );
};

AddCategory.propTypes = {
  onNewCategory: PropTypes.func.isRequired
};