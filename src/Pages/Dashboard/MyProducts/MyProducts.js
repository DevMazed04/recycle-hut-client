import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';
import ConfirmationModal from '../../Shared/ConfirmationModal/ConfirmationModal';
import Loading from '../../Shared/Loading/Loading';

const MyProducts = () => {
  const { user } = useContext(AuthContext);
  const [deletingProduct, setDeletingProduct] = useState(null);

  const closeModal = () => {
    setDeletingProduct(null);
  }

  const { data: products, isLoading, refetch } = useQuery({
    queryKey: ['products'],
    queryFn: async () => { 
      try {
        const res = await fetch('https://recycle-hut-server.vercel.app/products', {
        });
        const data = await res.json();
        return data;
      }
      catch (error) {
      }
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

  const myProducts = products.filter(product => product.sellerEmail === user.email);

  return (
    <div className='p-8'>
      {
        myProducts?.length === 0 ?
          <h3 className='text-red-500 font-semibold text-[20px] mt-10 flex justify-center items-center w-[90%] mx-auto h-[400px]'>You have no added product! Please add a product. </h3>
          :
          <>
            <h2 className="text-3xl mb-5">My Products ({myProducts?.length})</h2>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Product Name</th>
                    <th>Image</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    myProducts.map((myProduct, i) => <tr key={myProduct._id}>
                      <th>{i + 1}</th>
                      <td>{myProduct.productName}</td>
                      <td><div className="avatar">
                        <div className="w-10 rounded-lg">
                          <img src={myProduct.productImg} alt={myProduct.productName} />
                        </div>
                      </div></td>
                      <td>{myProduct.category}</td>
                      <td>{myProduct.resalePrice} Tk</td>
                      <td>
                        <label onClick={() => setDeletingProduct(myProduct)} htmlFor="confirmation-modal" className="btn btn-sm btn-error bg-red-500 text-white">Delete</label>
                      </td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>

            {
              deletingProduct && <ConfirmationModal
                title={`Are you sure to delete this Product?`}
                message={`Deleting product ${deletingProduct.productName} cannot be undone.`}
                successAction={handleDeleteProduct}
                successButtonName="Delete"
                modalData={deletingProduct}
                closeModal={closeModal}
              >
              </ConfirmationModal>
            }
          </>
      }
    </div>
  );
};

export default MyProducts;