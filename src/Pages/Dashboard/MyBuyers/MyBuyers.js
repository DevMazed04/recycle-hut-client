import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const MyBuyers = () => {
   const { user } = useContext(AuthContext);

   const { data: bookings = [], isLoading, refetch } = useQuery({
      queryKey: ['bookings'],
      queryFn: async () => {
         const res = await fetch('https://recycle-hut-server.vercel.app/bookings');
         const data = await res.json();
         return data;
      }
   });

   const myBuyers = bookings.filter(booking =>
      booking.sellerEmail === user?.email
   );



   if (isLoading) {
      return <Loading></Loading>
   }

   return (
      <div className='p-8'>
         {myBuyers?.length === 0 ? (
            <h3 className="text-red-500 font-semibold text-[20px] mt-10 flex justify-center items-center w-[90%] mx-auto h-[400px] text-center">
               Currently, You have no Buyer!
            </h3>
         ) : (
            <>
               <h2 className="text-3xl mb-5">My Buyers</h2>
               <div className="overflow-x-auto">
                  <table className="table w-full">
                     <thead>
                        <tr>
                           {/* <th>SL</th> */}
                           <th>Buyer Name</th>
                           <th>Mobile Booked</th>
                           <th>Email Address</th>
                           <th>Phone Number</th>
                           <th>Location</th>
                        </tr>
                     </thead>
                     <tbody>
                        {
                           myBuyers.map((myBuyer, i) => <tr key={myBuyer._id}>
                              {/* <th>{i + 1}</th> */}
                              <td>{myBuyer.buyerName}</td>
                              <td>{myBuyer.mobileName}</td>
                              <td>{myBuyer.buyerEmail}</td>
                              <td>{myBuyer.buyerMobile}</td>
                              <td>{myBuyer.meetLocation}</td>
                           </tr>)
                        }
                     </tbody>
                  </table>
               </div>
            </>
         )}
      </div>
   );
};

export default MyBuyers;