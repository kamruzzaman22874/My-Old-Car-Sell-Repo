import React, { useEffect, useState } from 'react';

const CategoryCard = () => {
    const [data , setData] = useState([])

    useEffect(()=>{
        fetch('car.json')
        .then(res => res.json())
        .then(datas =>{
            console.log(datas);
            setData(data);
        })
    },[])
    // const categoryId = useLoaderData();
    // console.log(categoryId);
    // useEffect(()=>{
    //     fetch(`http://localhost:5000/category/${categoryId}`)
    //     .then(res => res.json())
    //     .then(data =>{
    //         console.log(data);
    //     })
    // },[categoryId])




    return (
        <div>
            <h2>Category Id</h2>
           
        </div>
    );
};

export default CategoryCard;