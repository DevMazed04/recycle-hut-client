import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../../BookingModal/BookingModal';
import AndroidPhone from './AndroidPhone';

const AndroidPhones = () => {
   const [phone, setPhone] = useState(null);

   const { data: products = [], isLoading, refetch, } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
         const res = await fetch("https://recycle-hut-server.vercel.app/products");
         const data = await res.json();
         return data;
      }
   });

   const androidPhones = products.filter(product => product.category === "Android Phones");
   refetch();

   if (isLoading) {
      return <Loading></Loading>
   }

   return (
      <div>
         <h2 className='text-2xl text-center mt-10'> Available
            Android Phones <span className='font-bold'>({androidPhones?.length})</span>
         </h2>

         <div className='grid grid-cols-1 gap-10 my-16'>
            {
               androidPhones.map(androidPhone =>
                  <AndroidPhone
                     key={androidPhone._id}
                     androidPhone={androidPhone}
                     setPhone={setPhone}>
                  </AndroidPhone>
               )
            }
         </div>

         {
            phone &&
            <BookingModal
               phone={phone}
               setPhone={setPhone}>
            </BookingModal>
         }
      </div>
   );
};

export default AndroidPhones;