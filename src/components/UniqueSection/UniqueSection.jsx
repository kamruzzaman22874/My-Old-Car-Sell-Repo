import React from 'react';
import { Link } from 'react-router-dom';

const UniqueSection = () => {
    return (
        <section className ='text-gray-400 bg-gray-800 body-font'>
				<div className ='container px-5 py-24 mx-auto'>
					<div className ='flex flex-wrap -mx-4 -mb-10 text-center'>
						<div className ='sm:w-1/2 mb-10 px-4'>
							<div className ='rounded-lg h-64 overflow-hidden'>
								<img
									alt='content'
									className ='object-cover object-center h-full w-full'
									src='https://i.ibb.co/cQrMgdP/corolla3.jpg'
								/>
							</div>
							<h2 className ='title-font text-2xl font-medium text-white mt-6 mb-3'>
                            This Car is Available
							</h2>
							<p className ='leading-relaxed text-base'>
                                Model: Corolla X-2020 <br />
                                Years: @2006
							</p>
							<button className ='flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded'>
								More
							</button>
						</div>
						<div className ='sm:w-1/2 mb-10 px-4'>
							<div className ='rounded-lg h-64 overflow-hidden'>
								<img
									alt='content'
									className ='object-cover object-center h-full w-full'
									src='https://i.ibb.co/h824Lxv/corolla5.jpg'
								/>
							</div>
							<h2 className ='title-font text-2xl font-medium text-white mt-6 mb-3'>
								This Car is Available
							</h2>
							<p className ='leading-relaxed text-base'>
								Model: Tesla <br />
                                Years: 2008
							</p>
							<button className ='flex mx-auto mt-6 text-white bg-indigo-500 border-0 py-2 px-5 focus:outline-none hover:bg-indigo-600 rounded'>
								More
							</button>
						</div>
					</div>
				</div>
                <marquee className="text-3xl text-green-400 font-bold hidden lg:block">Please visit our Show room and Collect Your best choise</marquee>
			</section>
    )
}



export default UniqueSection;