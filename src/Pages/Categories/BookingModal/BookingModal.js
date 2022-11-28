import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ phone, setPhone, refetch }) => {
   const { productName, resalePrice, productImg } = phone;
   const { user } = useContext(AuthContext);

   const handleBooking = event => {
      event.preventDefault();
      const form = event.target;
      const phone = form.phone.value;
      const meetLocation = form.meetLocation.value;

      const booking = {
         mobileName: productName,
         img: productImg,
         price: resalePrice,
         buyerName: user.displayName,
         buyerEmail: user.email,
         buyerMobile: phone,
         meetLocation
      }
      console.log("booking", booking);

      fetch('http://localhost:5000/bookings', {
         method: 'POST',
         headers: {
            'content-type': 'application/json'
         },
         body: JSON.stringify(booking)
      })
         .then(res => res.json())
         .then(data => {
            console.log(data);
            if (data.acknowledged) {
               setPhone(null);
               toast.success(`${productName} booked successfully...`);
               refetch();
            }
            else {
               toast.error(data.message);
            }
         })
   }

   return (
      <>
         <input type="checkbox" id="booking-modal" className="modal-toggle" />
         <div className="modal">
            <div className="modal-box relative">
               <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
               <h3 className="text-xl text-cyan-500 font-bold ">{productName}</h3>
               <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                  <input type="text" disabled value={productName} className="input w-full input-bordered " />
                  <input type="text" disabled value={resalePrice} className="input w-full input-bordered " />
                  <input type="text" defaultValue={user?.displayName} disabled placeholder="Name" className="input w-full input-bordered" />
                  <input type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
                  <input name="phone" type="text" placeholder="Phone Number" className="input w-full input-bordered" required />
                  <input name="meetLocation" type="text" placeholder="Meeting Location" className="input w-full input-bordered" required />
                  <br />
                  <input className='btn btn-accent bg-cyan-500 text-white w-full' type="submit" value="Submit" />
               </form>
            </div>
         </div>
      </>
   );
};

export default BookingModal;