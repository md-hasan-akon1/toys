import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTable from '../CategoryTable/CategoryTable';
import AOS from 'aos';
import 'aos/dist/aos.css';
const CategoryTab = () => {
    const [category, setCategory] = useState('Sports Cars')
    const [CategoryData, setCategoryData] = useState([])

    useEffect(() => {
        fetch(`https://assignment-11-server-phi-five.vercel.app/data/${category}`)
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }, [category])

    const handelCategory = (category) => {
        setCategory(category)
    }
    AOS.init();
    return (
        <div>
            <h1 className='text-center text-3xl font-bold mb-4'>Shop By Category</h1>
            <Tabs>
                <TabList className='bg-black text-white font-bold font-serif'>
                    <Tab onClick={() => handelCategory("Sports Cars")}>Sports Cars</Tab>
                    <Tab onClick={() => handelCategory("Off-Road Vehicles")}>Off-Road Vehicles</Tab>
                    <Tab onClick={() => handelCategory("Vintage Cars")}>Vintage Cars</Tab>
                </TabList>

                <TabPanel>
                    <div data-aos="fade-up"
                        
                        data-aos-duration="2000"
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            CategoryData.map(dt => <CategoryTable
                                key={dt._id}
                                data={dt}
                            ></CategoryTable>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div data-aos="fade-up"
                        
                        data-aos-duration="2000"
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            CategoryData.map(dt => <CategoryTable
                                key={dt._id}
                                data={dt}
                            ></CategoryTable>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <div data-aos="fade-up"
                        
                        data-aos-duration="2000"
                        className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            CategoryData.map(dt => <CategoryTable
                                key={dt._id}
                                data={dt}
                            ></CategoryTable>)
                        }
                    </div>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;