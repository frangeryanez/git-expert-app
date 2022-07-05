import { renderHook, waitFor } from '@testing-library/react';
import { useFetchGifs } from '../../src/hooks/useFetchGifs';

describe('Test on the hook useFetchGifs', () => {
  const category = 'One Punch';

  test('Should return the initial state', () => {
    const { result } = renderHook(() => useFetchGifs(category));
    const { images, loading } = result.current;

    expect(images.length).toBe(0);
    expect(loading).toBeTruthy();
  });

  test('Should return an array of images and loading in false', async() => {
    const { result } = renderHook(() => useFetchGifs(category));
    await waitFor(
      () => expect(result.current.images.length).toBeGreaterThan(0)
    );
    const { images, loading } = result.current;
    expect(images.length).toBeGreaterThan(0);
    expect(images.length).toBe(10);
    expect(loading).toBeFalsy();
  });
});