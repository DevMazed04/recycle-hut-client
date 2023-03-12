import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import Categories from '../../Categories/CategoriesInfo/CategoriesInfo';
import Banner from '../Banner/Banner';
import Gallery from './Gallery';

const Home = () => {
  const { user } = useContext(AuthContext);

  return (
    <>
      {user?.emailVerified ? <></>
        :
        <div className={user ? 'bg-base-100 w-[90%] md:w-[50%] lg:w-[30%] mx-auto text-center rounded-lg px-3 py-3 mt-5 lg:mt-4 shadow-lg' : 'hidden'}>
          <span className='text-red-600'>Email is not verified! Please check your inbox.</span>
        </div>
      }

      <div className={user?.emailVerified ? 'mt-6' : 'mt-5 lg:mt-5'}>
        <div className='mx-[21px]'>
          <Banner></Banner>

          <div className='mt-16 mb-10 w-[100%] md:w-[100%] mx-auto rounded-lg px-0 md:flex flex-col lg:flex-row justify-around items-center py-3 pt-0 py-sm-0'>
            <div className='lg:w-[40%] rounded'>
              {/* <img className='rounded-xl mt-5 flex' src="https://i.ibb.co/XWxyFSP/buy-second-hand-mobile-e1566879912819.jpg" alt="" width="400px" /> */}
              <Gallery></Gallery>
            </div>
            <div className='text-start w-[95%] md:w-[50%] mx-auto md:mx-0 mt-5'>
              <h2 className='text-[29px] mb-3 font-semibold'>Looking for Used Phone Market?</h2>
              <small className='text-black text-[14px]'>Welcome to <strong>Recycle Hut</strong> website. Visiting my website, you can buy used phones by creating a buyer account or you can also sell your used phones by creating a seller account. So, lets's Buy or Sell your phones under three category now ! </small>
            </div>
          </div>
          <Categories></Categories>
        </div>
      </div>
    </>
  );
};

export default Home;