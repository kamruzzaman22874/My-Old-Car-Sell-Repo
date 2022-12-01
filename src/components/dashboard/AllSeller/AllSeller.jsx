import React from 'react';
import { useContext } from 'react';
import AddProduct from '../../AddProduct/AddProduct';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AllSeller = () => {

  const {user} = useContext(AuthContext);
  

  return (
    <div>
          <h1>This is seller</h1>
    </div>
  );
};

export default AllSeller;