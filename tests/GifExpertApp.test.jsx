import { render } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('Test on file <GifExpertApp />', () => { 
  test('Must match the snapshot', () => {  
    const { container } = render(<GifExpertApp />);
    expect(container).toMatchSnapshot();
  });
});