import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllSellers = () => {
   const [deletingUser, setDeletingUser] = useState(null);

   const closeModal = () => {
      setDeletingUser(null);
   }

   const { data: users = [], isLoading, refetch } = useQuery({
      queryKey: ['users'],
      queryFn: async () => {
         const res = await fetch('https://recycle-hut-server.vercel.app/users');
         const data = await res.json();
         return data;
      }
   });

   const sellers = users.filter(user => user.role === "seller");

   const handleVerifySeller = id => {
      fetch(`https://recycle-hut-server.vercel.app/users/seller/${id}`, {
         method: 'PUT',
      })
         .then(res => res.json())
         .then(data => {
            if (data.modifiedCount > 0) {
               toast.success('Seller Verified Successfully...')
               refetch();
            }
         })
   }

   const handleDeleteUser = user => {
      fetch(`https://recycle-hut-server.vercel.app/users/${user._id}`, {
         method: 'DELETE',
      })
         .then(res => res.json())
         .then(data => {
            if (data.deletedCount > 0) {
               refetch();
               toast.success(`${user.name} deleted successfully`)
            }
         })
   }

   if (isLoading) {
      return <Loading></Loading>
   }

   return (
      <div className='p-8'>
         <h2 className="text-3xl mb-5">All Sellers ({sellers?.length})</h2>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>SL</th>
                     <th>Seller Name</th>
                     <th>Email Address</th>
                     <th>Verify Seller</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     sellers.map((seller, i) => <tr key={seller._id}>
                        <th>{i + 1}</th>
                        <td>{seller.name}</td>
                        <td>{seller.email}</td>
                        <td>{seller?.verifyStatus !== 'verified' && <button onClick={() => handleVerifySeller(seller._id)} className='btn btn-xs btn-accent bg-cyan-500 text-white'>Verify Seller</button>}</td>
                        <td>
                           <label onClick={() => setDeletingUser(seller)} htmlFor="confirmation-modal" className="btn btn-xs btn-error bg-red-500 text-white">Delete</label>
                        </td>
                     </tr>)
                  }
               </tbody>
            </table>
         </div>

         {
            deletingUser && <ConfirmationModal
               title={`Are you sure to delete this User?`}
               message={`Deleting user  ${deletingUser.name} cannot be undone.`}
               successAction={handleDeleteUser}
               successButtonName="Delete"
               modalData={deletingUser}
               closeModal={closeModal}
            >
            </ConfirmationModal>
         }
      </div>
   );
};

export default AllSellers;