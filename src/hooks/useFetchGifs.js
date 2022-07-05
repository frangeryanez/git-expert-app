import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = category => {
  const [state, setState] = useState({
    images: [],
    loading: true
  });

  // useEffect(() => {
  //   getGifs(category)
  //     .then(images => {
  //       setState({
  //         data: images,
  //         loading: false
  //       })
  //     });
  // }, [category]);

  const getImages = async() => {
    const images = await getGifs(category);
    setState({
      images,
      loading: false
    });
  }
  
  useEffect( () => {
    getImages();
  }, []);

  return state;
};