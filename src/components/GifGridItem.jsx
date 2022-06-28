import PropTypes from 'prop-types';

export const GifGridItem = ({ id, title, url }) => {
  return (
    <div className="card animate__animated animate__fadeIn">
      <img 
        alt={ title } 
        id={id} 
        src={ url } 
      />
      <p>{ title }</p>
    </div>
  );
};

GifGridItem.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};