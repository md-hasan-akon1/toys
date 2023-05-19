import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import CategoryTable from '../CategoryTable/CategoryTable';
const CategoryTab = () => {
    const [category, setCategory] = useState('Sports Cars')
    const [CategoryData, setCategoryData] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/data/${category}`)
            .then(res => res.json())
            .then(data => setCategoryData(data))
    }, [category])

    const handelCategory = (category) => {
        setCategory(category)
    }

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab onClick={() => handelCategory("Sports Cars")}>Sports Cars</Tab>
                    <Tab onClick={() => handelCategory("Off-Road Vehicles")}>Off-Road Vehicles</Tab>
                    <Tab onClick={() => handelCategory("Vintage Cars")}>Vintage Cars</Tab>
                </TabList>

                <TabPanel>
                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                        {
                            CategoryData.map(dt => <CategoryTable
                                key={dt._id}
                                data={dt}
                            ></CategoryTable>)
                        }
                    </div>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 2</h2>
                </TabPanel>
                <TabPanel>
                    <h2>Any content 3</h2>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default CategoryTab;