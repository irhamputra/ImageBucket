// #1 import React lib
import React from 'react';
import ImageDetail from './image_detail';

// Dummy data
const IMAGES = [
    { title: 'Pen', link: 'https://dummyimage.com/600x400' },
    { title: 'Pine Tree', link: 'https://dummyimage.com/600x400' },
    { title: 'Mug', link: 'https://dummyimage.com/600x400' }
];

// #2 Creating component
const ImageList = () => {
    const RenderedImages = IMAGES.map((image) => {
       return <ImageDetail image={image}/>
    });

    return (
        <ul>
            {RenderedImages}
        </ul>
    )
};

// #3 Export component
export default ImageList;