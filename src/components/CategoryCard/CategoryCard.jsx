import React, { useEffect, useState } from 'react';

const CategoryCard = () => {
    const [addProduct , setAddProduct] = useState([])

    useEffect(()=>{
        fetch('car.json')
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setAddProduct(data);
        })
    },[])

    return (
        <div>
            <h2>Category Id</h2>
            {/* {
                addProduct?.map(d => <h2>All Data here {d.length}</h2> )
            } */}
           
        </div>
    );
};

export default CategoryCard;