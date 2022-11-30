import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../Shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AndroidPhone from './AndroidPhone';

const Products = () => {

   const [phones, setPhones] = useState(null);

   const { data: products = [], isLoading } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
         const res = await fetch("https://recycle-hut-server.vercel.app/products");
         const data = await res.json();
         return data;
      }
   });

   if (isLoading) {
      return <Loading></Loading>
   }


   return (
      <div>
         <h2 className='text-2xl text-center mt-10'> Available Products <span className='font-bold'>({products.length})</span>
         </h2>

         <div className='grid grid-cols-1 gap-10 my-16'>
            {
               products.map(product =>
                  <AndroidPhone
                     key={product._id}
                     products={products}
                     setPhones={setPhones}>
                  </AndroidPhone>
               )
            }
         </div>

         {
            phones &&
            <BookingModal
               phones={phones}
               setPhones={setPhones}>
            </BookingModal>
         }
      </div>
   );
};

export default Products;