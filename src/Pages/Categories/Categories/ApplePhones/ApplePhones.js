import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../../../Shared/Loading/Loading';
import BookingModal from '../../BookingModal/BookingModal';
import ApplePhone from './ApplePhone';

const ApplePhones = () => {
   const [phone, setPhone] = useState(null);

   const { data: products = [], isLoading, refetch, } = useQuery({
      queryKey: ['products'],
      queryFn: async () => {
         const res = await fetch("http://localhost:5000/products");
         const data = await res.json();
         return data;
      }
   });

   const applePhones = products.filter(product => product.category === "Apple Phones");
   refetch();

   if (isLoading) {
      return <Loading></Loading>
   }

   return (
      <div>
         <h2 className='text-2xl text-center mt-10'> Available
            Apple Phones <span className='font-bold'>({applePhones?.length})</span>
         </h2>

         <div className='grid grid-cols-1 gap-10 my-16'>
            {
               applePhones.map(applePhone =>
                  <ApplePhone
                     key={applePhone._id}
                     applePhone={applePhone}
                     setPhone={setPhone}>
                  </ApplePhone>
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

export default ApplePhones;