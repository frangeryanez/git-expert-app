import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

jest.mock('../../src/hooks/useFetchGifs');

describe('Test on file <GifGrid />', () => {
  const category = 'One Punch';

  test('Should show charging initially', () => {
    useFetchGifs.mockReturnValue({
      images: [],
      loading: true
    });
    render(<GifGrid category={ category } />);
    expect(screen.getByText('Loading')).toBeTruthy();
  });

  test('Should display items when loading images from useFetchGifs', () => {
    const gifs = [
      {
        id: 'ABC',
        title: 'Saitama',
        url: 'https://www.images.com/saitama.jpg'
      },
      {
        id: 'DRF',
        title: 'Goku',
        url: 'https://www.images.com/goku.jpg'
      }
    ];

    useFetchGifs.mockReturnValue({
      images: gifs,
      loading: false
    });

    render(<GifGrid category={ category } />);
    expect(screen.getAllByRole('img').length).toBe(2);
  });
});