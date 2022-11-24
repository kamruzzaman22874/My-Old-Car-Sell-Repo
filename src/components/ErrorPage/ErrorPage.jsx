import React from 'react';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <section className='flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100'>
        <div className='container flex flex-col items-center justify-center px-5 mx-auto my-8'>
            <div className='max-w-md text-center'>
                <img
                    className='w-[250px] mx-auto'
                    src='https://webdeasy.de/wp-content/uploads/2020/06/404-pages.jpg'
                    alt=''
                />
                <p className='text-2xl font-semibold md:text-3xl'>
                    Sorry, we couldn't find this page.
                </p>
                <p className='mt-4 mb-8 dark:text-gray-400'>
                    But dont worry, you can find plenty of other things on our
                    homepage.
                </p>
                <Link to='/home'>
                    <button className='bg-yellow-600 hover:bg-yellow-800 px-3 py-2 rounded-md'>
                        Back to Home
                    </button>
                </Link>
            </div>
        </div>
    </section>
    );
};

export default ErrorPage;
