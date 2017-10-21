// #1 import React lib
import React from 'react';
import ImageDetail from './image_detail';

// #2 Creating component
const ImageList = (props) => {
    const validImages = props.images.filter(image => !image.is_album);

    const RenderedImages = validImages.map((image) => {
       return <ImageDetail key={image.title} image={image}/>
    });

    return (
        <ul className="media-list list-group">
            {RenderedImages}
        </ul>
    )
};

// #3 Export component
export default ImageList;