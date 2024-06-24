import  { Component } from 'react';
import PropTypes from 'prop-types';

class ImageGalleryItem extends Component {
  render() {
    const { webformatURL, onClick } = this.props;

    return (
      <li className="gallery-item" onClick={onClick}>
        <img src={webformatURL} alt="" />
      </li>
    );
  }
}

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
