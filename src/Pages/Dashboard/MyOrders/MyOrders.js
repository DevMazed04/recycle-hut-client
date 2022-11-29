import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const MyOrders = () => {
  const { user } = useContext(AuthContext);

  const url = "https://recycle-hut-server.vercel.app/bookings";
  const { data: bookings = [] } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await fetch(url);
      const data = await res.json();
      return data;
    },
  });

  const myOrders = bookings.filter(myOrder => myOrder.buyerEmail === user.email);

  return (
    <div className="p-8">
      {myOrders?.length === 0 ? (
        <h3 className="text-red-500 font-semibold text-[20px] mt-10 flex justify-center items-center w-[90%] mx-auto h-[400px] text-center">
          Your order list is empty! Please book a product first.
        </h3>
      ) : (
        <>
          <h3 className="text-3xl mb-5">My Orders ({myOrders?.length})</h3>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th>SL</th>
                  <th>Image</th>
                  <th>Phone Name</th>
                  <th>Price</th>
                  <th>Pay</th>
                </tr>
              </thead>
              <tbody>
                {myOrders?.map((myOrder, i) => (
                  <tr key={myOrder._id}>
                    <th>{i + 1}</th>
                    <td>
                      <img
                        src={myOrder.img}
                        alt={myOrder.mobileName}
                        width="30px"
                      />
                    </td>
                    <td>{myOrder.mobileName}</td>
                    <td>{myOrder.price} Tk</td>
                    {/* <td>{booking.slot}</td> */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </>
      )}
    </div>
  );
};

export default MyOrders;
