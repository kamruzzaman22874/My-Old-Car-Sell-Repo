import React from 'react';
import { useContext } from 'react';
import AddProduct from '../../AddProduct/AddProduct';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AllSeller = () => {

  const {user} = useContext(AuthContext);
  

  return (
    <div>
          {/* <AddProduct></AddProduct> */}
    </div>
  );
};

export default AllSeller;