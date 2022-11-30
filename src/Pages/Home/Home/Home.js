import React from 'react';
// import Banner from '../Banner/Banner';
import Categories from '../../Categories/CategoriesInfo/CategoriesInfo';

const Home = () => {
   return (
      <div>
         <div className='mx-[21px]'>
            {/* <Banner></Banner> */}
            <div className='my-16 w-[90%] mx-auto rounded-lg px-0 md:flex flex-col lg:flex-row justify-around items-center py-3 pt-0 py-sm-0'>
               <div>
                  <img className='rounded-3xl mt-5 flex' src="https://i.ibb.co/XWxyFSP/buy-second-hand-mobile-e1566879912819.jpg" alt="" width="350px" />
               </div>
               <div className='text-start lg:w-1/2 mt-5'>
                  <h2 className='text-[29px] mb-3 font-semibold'>Looking for Used Phones Resale market?</h2>
                  <small className='text-black text-[14px]'>Welcome to <strong>Recycle Hut</strong> website. Visiting my website, you can buy used phones by creating a buyer account or you can also sell your used phones by creating a seller account. So, lets's Buy or Sell your phones under three category now ! </small>
               </div>
            </div>

            <Categories></Categories>
         </div>
      </div>
   );
};

export default Home;