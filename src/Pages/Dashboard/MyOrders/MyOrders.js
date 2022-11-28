import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = `http://localhost:5000/bookings?email=${user?.email}`;

  const { data: bookings = [] } = useQuery({
    queryKey: ['bookings', user?.email],
    queryFn: async () => {
      const res = await fetch(url
        // {
        //   headers: {
        //     authorization: `bearer ${localStorage.getItem('accessToken')}`
        //   }
        // }
      );
      const data = await res.json();
      return data;
    }
  })

  return (
    <div className='p-8'>
      {
        bookings?.length === 0 ?
          <h3 className='text-red-500 font-semibold text-[20px] mt-10 flex justify-center items-center w-[90%] mx-auto h-[400px] text-center'>Your Order List is Empty! Please purchase a Product. </h3>
          :
          <>
            <h3 className="text-3xl mb-5">My Orders ({bookings?.length})</h3>
            <div className="overflow-x-auto">
              <table className="table w-full">
                <thead>
                  <tr>
                    <th>SL</th>
                    <th>Image</th>
                    <th>Title</th>
                    <th>Price</th>
                    <th>Pay</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    bookings?.map((booking, i) => <tr key={booking._id}>
                      <th>{i + 1}</th>
                      <td><img src={booking.img} alt={booking.mobileName} width="30px" /></td>
                      <td>{booking.mobileName}</td>
                      <td>{booking.price}</td>
                      <td>{booking.slot}</td>
                    </tr>)
                  }
                </tbody>
              </table>
            </div>
          </>

      }
    </div>
  );
};

export default MyOrders;