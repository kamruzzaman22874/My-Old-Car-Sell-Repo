import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import UniqueSection from '../UniqueSection/UniqueSection';


const Home = () => {
    const [servicesData, setServicesData] = useState();


    useEffect(()=> {
        fetch('data.json')
        .then(res => res.json())
        .then(data =>{
            setServicesData(data)
        })
    },[])
  console.log(servicesData);
    return (
        <div className='mx-auto'>
            <Banner></Banner>
            {/* <UniqueSection></UniqueSection> */}
           <div className='grid grid-cols-3 mt-10 px-24'>
           {
                servicesData?.map(data=> <Category
                data={data}
                ></Category>)
            }
           </div>


           
            
        </div>
    );
};

export default Home;