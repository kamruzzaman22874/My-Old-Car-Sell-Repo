import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import Loader from '../../Loader/Loader';
import DeleteModal from '../DeleteModal/DeleteModal';

const AllSeller = () => {

    const { logUser, loading } = useContext(AuthContext);
	const [deletingUser, setDeletingUser] = useState(null);
	console.log('deletingUser', deletingUser);
	// console.log(logUser?.role);
	//! fetch for getting products data from mongodb.....

	const url = 'http://localhost:5000/usersrole';

	const { data: usersrole = [], refetch } = useQuery({
		queryKey: ['usersrole'],
		queryFn: async () => {
			const res = await fetch(url);
			const data = await res.json();
			return data;
		},
	});

	console.log(usersrole);

	//! Cancel Button of modal...
	const closeModal = () => {
		setDeletingUser(null);
	};

	//! Delete button of modal...
	const handleDeleteUser = (seller) => {
		console.log('seller', seller?._id);
		fetch(`http://localhost:5000/seller/${seller?._id}`, {
			method: 'DELETE',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.deletedCount > 0) {
					toast.success(`${seller.name} delete successfully!!`);
				}
				refetch();
			});
	};

	const handleMakeVerify = (id) => {
		fetch(`http://localhost:5000/users/verify/${id}`, {
			method: 'PUT',
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data.modifiedCount > 0) {
					refetch();
					toast.success('successfully verified this seller! ');
				}
			});
	};

	if (loading) {
		return <Loader></Loader>;
	}
  

  return (
    <div>
    {!usersrole && <h1>No Seller logged</h1>}
    <h1 className='text-2xl text-center font-bold italic lg:p-4'>All sellers here</h1>

    <div className='lg:overflow-x-auto'>
        <table className='table w-full'>
            <thead>
                <tr>
                    <th>User</th>
                    <th className='hidden lg:block'>Role</th>
                    <th>Verify</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {usersrole &&
                    usersrole?.map((seller) => (
                        <tr>
                            <td>
                                <div className='flex items-center space-x-3'>
                                    <div className='avatar'>
                                        <div className='mask mask-squircle w-12 h-12'>
                                            <img
                                                src={seller.image}
                                                alt='Avatar Tailwind CSS Component'
                                            />
                                        </div>
                                    </div>
                                    <div>
                                        <div className='font-bold'>{seller.name}</div>
                                        <div className='text-sm opacity-50'>{seller.email}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <div className='hidden lg:block'>
                                    {seller.role}
                                    <br />
                                    <span className='badge badge-ghost badge-sm'>
                                        **********
                                    </span>
                                </div>
                            </td>

                            {seller?.permission === 'Verified' ? (
                                <p>Verified</p>
                            ) : (
                                <td>
                                    <label
                                        onClick={() => handleMakeVerify(seller?._id)}
                                        className='btn btn-sm text-white border-0 bg-blue-500 hover:bg-blue-700'
                                    >
                                        Verify
                                    </label>
                                </td>
                            )}

                            <td>
                                <label
                                    onClick={() => setDeletingUser(seller)}
                                    htmlFor='confirmation-modal'
                                    className='btn btn-sm text-white border-0 bg-red-500 hover:bg-red-700'
                                >
                                    Delete
                                </label>
                            </td>
                        </tr>
                    ))}
            </tbody>
        </table>
    </div>

    {deletingUser && (
        <DeleteModal
            deletingUser={deletingUser}
            image={deletingUser?.photoURL}
            name={deletingUser?.name}
            email={deletingUser?.email}
            closeModal={closeModal}
            successAction={handleDeleteUser}
        ></DeleteModal>
    )}

    {!usersrole && <p>No seller here</p>}
</div>

  );
};

export default AllSeller;