import PropTypes from 'prop-types';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {
  const { images, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{ category }</h3>
      {loading && (
        <p className="card animate__animated animate__flash">Loading</p>
      )}
      <div className="card-grid">
        {images?.map(item => (
          <GifGridItem key={ item.id } { ...item } />
        ))}
      </div>
    </>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired
};