import { fireEvent, render, screen } from '@testing-library/react';
import { AddCategory } from '../../src/components/AddCategory';

describe('Test on file <AddCategory />', () => {
  const value = 'Saitama';

  test('Change the value of the text box', () => {
    render(<AddCategory onNewCategory={ () => {} } />);
    const input = screen.getByRole('textbox');

    fireEvent.input(input, { target: { value } });
    expect(input.value).toBe(value);
  });

  test('Should call onNewCategory if the input has a value', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={ onNewCategory } />);
    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form');
    fireEvent.input(input, { target: { value } });
    fireEvent.submit(form);

    expect(input.value).toBe('');
    expect(onNewCategory).toHaveBeenCalled();
    expect(onNewCategory).toHaveBeenCalledTimes(1);
    expect(onNewCategory).toHaveBeenCalledWith(value);
  });

  test('Should not call onNewCategory if input is empty', () => {
    const onNewCategory = jest.fn();
    render(<AddCategory onNewCategory={ onNewCategory } />);
    const form = screen.getByRole('form');
    fireEvent.submit(form);

    expect(onNewCategory).toHaveBeenCalledTimes(0);
    expect(onNewCategory).not.toHaveBeenCalled();
  });
});