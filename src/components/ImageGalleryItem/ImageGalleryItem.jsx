import React from 'react'
// import PropTypes from "prop-types";
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

// ImageGalleryItem.propTypes = {
// 	contact: PropTypes.shape({
// 		  		name: PropTypes.string.isRequired,
// 		  		number: PropTypes.string.isRequired,
// 		  		id: PropTypes.string.isRequired,
// 		}).isRequired,
// };
