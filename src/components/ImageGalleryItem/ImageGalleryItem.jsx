import React from 'react'
import PropTypes from "prop-types";
import { ListItem, Img } from './ImageGalleryItem.styled';

const ImageGalleryItem = ({
    smallImgSrc,
    largeImgSrc,
    openModal
    }) => {
	return (
            <ListItem className="gallery-item" onClick={() => openModal(largeImgSrc)}>
                <Img src={smallImgSrc} alt="" loading="lazy" />
            </ListItem>
	)
}

export default ImageGalleryItem

ImageGalleryItem.propTypes = {
    smallImgSrc: PropTypes.string.isRequired,
    largeImgSrc: PropTypes.string.isRequired,
    openModal: PropTypes.func.isRequired,
  };
