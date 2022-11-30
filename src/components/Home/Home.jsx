import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import Banner from '../Banner/Banner';
import Loader from '../Loader/Loader';
import ProductCategory from '../ProductCategory/ProductCategory';
import UniqueSection from '../UniqueSection/UniqueSection';
import Advertisement from './Advertisement/Advertisement';


const Home = () => {
    const {loading} = useContext(AuthContext)
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

if(loading){
    return <Loader></Loader>
}

    return (
        <div className='mx-auto max-w-[100vw]' >
            <Banner></Banner>
            <Advertisement></Advertisement>
            <ProductCategory></ProductCategory>
            <UniqueSection></UniqueSection>





















      {/* <Category></Category>
            <ProductCategory></ProductCategory>
        
   */}
        </div>
    );
};

export default Home;