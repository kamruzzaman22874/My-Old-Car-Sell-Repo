import React from 'react';

const Banner = () => {
    return (
       <section className='bg-base-200 py-14'>
         <div className="w-11/12 mx-auto rounded-lg">
        <div className="flex items-center flex-col lg:flex-row-reverse w-full">
          <img className='lg:mr-8' src="Old-car.png" alt='img' />
          <div className='lg:ml-16'>
            <h1 className="lg:text-5xl text-2xl font-bold">CAR HOUSE</h1>
            <p className="py-6 w-3/4 lg:text-xl text-justify">Find the best deals on cars from the trusted dealers and sellers in Bangladesh Old Cars Hatbazar.Its a popular and famous for old cars sell in Bangladesh.</p>
            <button className="btn btn-info">Booking Now</button>
          </div>
        </div>
      </div>
       </section>
    );
};

export default Banner;