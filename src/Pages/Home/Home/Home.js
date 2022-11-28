import React from 'react';
// import Banner from '../Banner/Banner';
import Categories from '../../Categories/CategoriesInfo/CategoriesInfo';
import ContactUs from '../ContactUs/ContactUs';
import DentalCareInfo from '../DentalCareInfo/DentalCareInfo';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import ServiceCards from '../ServiceCards/ServiceCards';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
   return (
      <div>
         <div className='mx-[21px]'>
            {/* <Banner></Banner> */}

            <div className='my-16 border header mx-auto rounded-lg px-0 md:flex flex-col  lg:flex-row justify-around items-center py-3 pt-0 py-sm-0 header-bg'>
               <div>
                  <img className='rounded-lg mt-5 flex' src="https://i.ibb.co/X2xWdxM/essential-feature-of-building-an-on-demand-food-ordering-app.jpg" alt="" width="250px" />
               </div>
               <div className='text-start w-1/2 mt-5'>
                  <h2 className='text-[28px] mb-3 font-semibold'>What is your Delivery Today?</h2>
                  <small className='text-black text-[14px]'>Welcome to <strong>Recycle Hut</strong> website. You can visit my website, choose your favourite food items and make a delivery service order. I will deliver to your items in time. </small>
               </div>
            </div>

            <Categories></Categories>
            <ServiceCards></ServiceCards>
            <DentalCareInfo></DentalCareInfo>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>
         </div>
      </div>
   );
};

export default Home;