import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllBuyers = () => {
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

   const buyers = users.filter(user => user.role === "buyer");

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
         <h2 className="text-3xl mb-5">All Buyers ({buyers?.length})</h2>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>SL</th>
                     <th>Buyer Name</th>
                     <th>Email Address</th>
                     <th>Action</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     buyers.map((buyer, i) => <tr key={buyer._id}>
                        <th>{i + 1}</th>
                        <td>{buyer.name}</td>
                        <td>{buyer.email}</td>
                        <td>
                           <label onClick={() => setDeletingUser(buyer)} htmlFor="confirmation-modal" className="btn btn-xs btn-error bg-red-500 text-white">Delete</label>
                        </td>
                     </tr>)
                  }
               </tbody>
            </table>
         </div>

         {
            deletingUser && <ConfirmationModal
               title={`Are you sure to delete this User?`}
               message={`Deleting user ${deletingUser.name} cannot be undone.`}
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

export default AllBuyers;