import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import toast from 'react-hot-toast';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const AllProducts = () => {
   const [deletingProduct, setDeletingProduct] = useState(null);

   const closeModal = () => {
      setDeletingProduct(null);
   }

   const { data: products = [], isLoading, refetch } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
         const res = await fetch('https://recycle-hut-server.vercel.app/products');
         const data = await res.json();
         return data;
      }
   });

   const handleDeleteProduct = product => {
      fetch(`https://recycle-hut-server.vercel.app/products/${product._id}`, {
         method: 'DELETE',
      })
         .then(res => res.json())
         .then(data => {
            if (data.deletedCount > 0) {
               refetch();
               toast.success(`${product.productName} deleted successfully`)
            }
         })
   }

   if (isLoading) {
      return <Loading></Loading>
   }

   return (
      <div className='p-8'>
         <h2 className="text-3xl mb-5">All Products ({products?.length})</h2>
         <div className="overflow-x-auto">
            <table className="table w-full">
               <thead>
                  <tr>
                     <th>SL</th>
                     <th>Product Name</th>
                     <th>Image</th>
                     <th>Category</th>
                     <th>Price</th>
                     <th>Delete</th>
                  </tr>
               </thead>
               <tbody>
                  {
                     products.map((product, i) => <tr key={product._id}>
                        <th>{i + 1}</th>
                        <td>{product.productName}</td>
                        <td>
                           <img
                              src={product.productImg}
                              alt={product.productName}
                              width="50px"
                           />
                        </td>
                        <td>{product.category}</td>
                        <td>{product.resalePrice} Tk</td>
                        <td>
                           <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-xs btn-error bg-red-500 text-white">Delete</label>
                        </td>
                     </tr>)
                  }
               </tbody>
            </table>
         </div>

         {
            deletingProduct && <ConfirmationModal
               title={`Are you sure to delete this product?`}
               message={`Deleting product ${deletingProduct.productName} cannot be undone.`}
               successAction={handleDeleteProduct}
               successButtonName="Delete"
               modalData={deletingProduct}
               closeModal={closeModal}
            >
            </ConfirmationModal>
         }
      </div>
   );
};

export default AllProducts;