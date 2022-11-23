import React from 'react';

const Banner = () => {
    return (
        <div className="hero bg-base-200 rounded-lg">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          <img src="Old-car.png" alt='img' />
          <div>
            <h1 className="text-5xl font-bold">Old Cars Sells</h1>
            <p className="py-6">Find the best deals on cars from the trusted dealers and sellers in Bangladesh Old Cars Hatbazar.Its a popular and famous for old cars sell in Bangladesh.</p>
            <button className="btn btn-info">Get Started</button>
          </div>
        </div>
      </div>
    );
};

export default Banner;