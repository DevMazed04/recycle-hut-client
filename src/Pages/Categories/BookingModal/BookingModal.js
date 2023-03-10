import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../contexts/AuthProvider';

const BookingModal = ({ phone, setPhone }) => {
  const { productName, resalePrice, productImg, sellerEmail } = phone;
  const { user } = useContext(AuthContext);

  const bookingDate = new Date().toLocaleDateString();
  const bookingTime = new Date().toLocaleTimeString();

  const handleBooking = event => {
    event.preventDefault();
    const form = event.target;
    const phone = form.phone.value;
    const meetLocation = form.meetLocation.value;

    const booking = {
      mobileName: productName,
      img: productImg,
      price: resalePrice,
      sellerEmail,
      buyerName: user.displayName,
      buyerEmail: user.email,
      buyerMobile: phone,
      meetLocation,
      bookingDate,
      bookingTime,
    }
    console.log("booking", booking);

    fetch('https://recycle-hut-server.vercel.app/bookings', {
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
          <h3 className="text-xl text-cyan-500 font-bold">
            You Are Booking:</h3>
          <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
            <input type="text" disabled value={productName} className="input w-full input-bordered mt-[-20px]" />
            <input type="text" disabled value={resalePrice} className="input w-full input-bordered " />
            <input type="text" defaultValue={user?.displayName} disabled placeholder="Name" className="input w-full input-bordered" />
            <input type="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input w-full input-bordered" />
            <input type="text" defaultValue={bookingDate} disabled placeholder="Booking Date" className="input w-full input-bordered" />
            <input type="text" defaultValue={bookingTime} disabled placeholder="Booking Time" className="input w-full input-bordered" />
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