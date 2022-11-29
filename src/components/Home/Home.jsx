import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import ProductCategory from '../ProductCategory/ProductCategory';
import UniqueSection from '../UniqueSection/UniqueSection';


const Home = () => {
    // const [servicesData, setServicesData] = useState();
    const [viewCar ,setViewCar] = useState(null)


    // useEffect(()=> {
    //     fetch('data.json')
    //     .then(res => res.json())
    //     .then(data =>{
    //         setServicesData(data)
    //     })
    // },[])
//   console.log(servicesData);
    return (
        <div className='mx-auto'>
            <Banner></Banner>
            <ProductCategory></ProductCategory>




















            
            {/* <Category></Category>
            <ProductCategory></ProductCategory>
           <UniqueSection></UniqueSection> */}
  
        </div>
    );
};

export default Home;