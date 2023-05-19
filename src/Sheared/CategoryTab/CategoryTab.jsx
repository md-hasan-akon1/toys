import React, { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
const CategoryTab = () => {
const [category,setCategory]=useState('category1')

    const handelCategory=(category)=>{
        setCategory(category)
    }
console.log(category)
    return (
        <div>
            <Tabs>
                    <TabList>
                        <Tab onClick={()=>handelCategory("category1")}>title1</Tab>
                        <Tab onClick={()=>handelCategory("category2")}>Title 2</Tab>
                        <Tab onClick={()=>handelCategory("category3")}>Title 3</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
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