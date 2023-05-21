import React from 'react';

const Gallery = ({photo}) => {
    const {img,title}=photo;
    return (
        <div data-aos="zoom-out-right" data-aos-duration="2000" className='border rounded-lg'>
        
            <img title={title} className='h-50 w-50 mx-auto my-auto' src={img} alt="" />
        </div>
    );
};

export default Gallery;