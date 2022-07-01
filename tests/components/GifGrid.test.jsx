import { render, screen } from '@testing-library/react';
import { GifGrid } from '../../src/components/GifGrid';

describe('Test on file <GifGrid />', () => {
  const category = 'One Punch';

  test('Should show charging initially', () => {
    render(<GifGrid category={ category } />);
    expect(screen.getByText('Loading')).toBeTruthy();
  });
});