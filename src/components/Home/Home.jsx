import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import CategoryModal from '../Category/CategoryModal/CategoryModal';
import UniqueSection from '../UniqueSection/UniqueSection';


const Home = () => {
    const [servicesData, setServicesData] = useState();
    const [viewCar ,setViewCar] = useState(null)


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
           <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-10 gap-8 px-2'>
           {
                servicesData?.map(data=> <Category
                data={data}
                setViewCar = {setViewCar}
                ></Category>)
            }
           </div>
           {/* { viewCar &&
            <CategoryModal
           viewCar={viewCar}
           ></CategoryModal>
           } */}
           <UniqueSection></UniqueSection>


           
            
        </div>
    );
};

export default Home;