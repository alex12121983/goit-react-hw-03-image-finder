import { Component } from 'react'
import { List } from './ImageGallery.styled';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem'

class ImageGallery extends Component {

    render(){
        const {images, openModal} = this.props
        return(
                <List>
                    {images.map(el => (
                        <ImageGalleryItem 
                            key={el.id}
                            smallImgSrc={el.webformatURL}
                            largeImgSrc={el.largeImageURL}
                            openModal={openModal}
                        />
                    ))}
                </List>
            )
    }
}

export default ImageGallery