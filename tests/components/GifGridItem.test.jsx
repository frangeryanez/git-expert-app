import { render, screen } from '@testing-library/react';
import { GifGridItem } from '../../src/components/GifGridItem';

describe('Test on file <GifGridItem />', () => {
  const id = 'image_01';
  const title = 'Title';
  const url = 'https://api.giphy.com/v1/gifs/';
  
  test('Must match the snapshot', () => {
    const { container } = render(
      <GifGridItem 
        id={ id }
        title={ title }
        url={ url }
      />);
    expect(container).toMatchSnapshot();
  });

  test('Must show the image with the indicated URL and ALT', () => {
    render(<GifGridItem id={ id } title={ title } url={ url }/>);
    // expect(screen.getByRole('img').src).toBe(url);
    // expect(screen.getByRole('img').alt).toBe(title);
    const { src, alt } = screen.getByRole('img');
    expect(src).toBe(url);
    expect(alt).toBe(title);
  });

  test('Should display the title in the component', () => {
    render(<GifGridItem id={ id } title={ title } url={ url }/>);
    expect(screen.getByText(title)).toBeTruthy();
  });
});