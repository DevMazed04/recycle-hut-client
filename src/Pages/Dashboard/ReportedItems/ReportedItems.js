import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const ReportedItems = () => {
   const [deletingReportedItem, setDeletingReportedItem] = useState(null);

   const closeModal = () => {
      setDeletingReportedItem(null);
   }

   const { data: reportedItems = [], isLoading, refetch } = useQuery({
      queryKey: ['reportedItems'],
      queryFn: async () => {
         const res = await fetch('https://recycle-hut-server.vercel.app/reported-items');
         const data = await res.json();
         return data;
      }
   });

   const handleDeleteProduct = reportedItem => {
      fetch(`https://recycle-hut-server.vercel.app/reported-items/${reportedItem._id}`, {
         method: 'DELETE',
      })
         .then(res => res.json())
         .then(data => {
            if (data.deletedCount > 0) {
               refetch();
               toast.success(`${reportedItem.productName} is deleted from Reported Item`)
            }
         })
   }

   if (isLoading) {
      return <Loading></Loading>
   }

   return (
      <div className='p-8'>
         {
            reportedItems?.length === 0 ? (
               <h3 className="text-red-500 font-semibold text-[20px] mt-10 flex justify-center items-center w-[90%] mx-auto h-[400px] text-center">
                  No Reported Items Found!
               </h3>
            ) : (
               <>
                  <h2 className="text-3xl mb-5">All Reported Items ({reportedItems?.length})</h2>
                  <div className="overflow-x-auto">
                     <table className="table w-full">
                        <thead>
                           <tr>
                              <th>SL</th>
                              <th>Reported Item Name</th>
                              <th>Image</th>
                              <th>Category</th>
                              <th>Seller Name</th>
                              <th>Delete</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              reportedItems.map((reportedItem, i) => <tr key={reportedItem._id}>
                                 <th>{i + 1}</th>
                                 <td>{reportedItem.productName}</td>
                                 <td>
                                    <img
                                       src={reportedItem.productImg}
                                       alt={reportedItem.productName}
                                       width="50px"
                                    />
                                 </td>
                                 <td>{reportedItem.category}</td>
                                 <td>{reportedItem.sellerName}</td>
                                 <td>
                                    <label onClick={() => setDeletingReportedItem(reportedItem)} htmlFor="confirmation-modal" className="btn btn-xs btn-error bg-red-500 text-white">Delete</label>
                                 </td>
                              </tr>)
                           }
                        </tbody>
                     </table>
                  </div>

                  {
                     deletingReportedItem && <ConfirmationModal
                        title={`Are you sure to delete this Reported Item?`}
                        message={`Deleting ${deletingReportedItem.productName} cannot be undone.`}
                        successAction={handleDeleteProduct}
                        successButtonName="Delete"
                        modalData={deletingReportedItem}
                        closeModal={closeModal}
                     >
                     </ConfirmationModal>
                  }
               </>
            )}
      </div>
   );
};

export default ReportedItems;