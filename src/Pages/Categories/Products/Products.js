import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AndroidPhone from './AndroidPhone';

const Products = () => {
   // const [androidPhones, setAndroidPhones] = useState([]);
   // const [androidMobile, setAndroidMobile] = useState(null);
   const [phones, setPhones] = useState(null);

   const { data: products = [], refetch, isLoading } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
         const res = await fetch("https://recycle-hut-server.vercel.app/products");
         const data = await res.json();
         return data;
      }
   });

   // useEffect(() => {
   //    fetch('https://recycle-hut-server.vercel.app/androidPhones')
   //       .then(res => res.json())
   //       .then(data => setAndroidPhones(data))
   // }, []);

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