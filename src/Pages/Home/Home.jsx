import React, { useEffect, useState } from 'react';
import UseTitle from '../../CostomHook/UseTitle';
import Banner from '../../Sheared/Banner/Banner';
import Gallery from '../../Sheared/Gallery/Gallery';

import CategoryTab from '../../Sheared/CategoryTab/CategoryTab';
import { ToastContainer } from 'react-toastify';
import SwiperSection from '../SwiperSection/SwiperSection';
import NewProduct from '../../Sheared/NewProduct/NewProduct';

const Home = () => {
    UseTitle('home')
    const [photos, setPhoto] = useState([])
    useEffect(() => {
        fetch('https://assignment-11-server-phi-five.vercel.app/imgData')
            .then(res => res.json())
            .then(data => setPhoto(data))

    }, [])
    return (
        <div>
            {/* banner */}
            <Banner></Banner>
            <ToastContainer />
            {/* Gallery */}
            <div className='text-center'>
                <h1 className='font-mono font-bold text-5xl mt-5 mb-3'>Our Products Gallery</h1>
                <p>Lorem, ipsum dolor sit amet consectetur <br /> adipisicing elit. Modi, libero.</p>
            </div>
            <section className='grid grid-cols-2  lg:grid-cols-4 gap-4'>
                {
                    photos.map(photo => <Gallery
                        key={photo.id}
                        photo={photo}
                    ></Gallery>)
                }
            </section>

            <section className='mt-10'>
                <CategoryTab></CategoryTab>
            </section>
            {/* extra section-1 */}
            <h1 className=' text-center font-mono font-bold text-5xl mt-5 mb-3'>Our Customer Review</h1>
            <SwiperSection></SwiperSection>

            {/* extra section-2 */}
            <h1 className=' text-center font-mono font-bold text-5xl mt-5 mb-3'>Our New Product</h1>
            <NewProduct></NewProduct>
        </div>
    );
};

export default Home;