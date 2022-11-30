import React from 'react';
import { Link } from 'react-router-dom';
import './Page404.css';

const Page404 = () => {
   const bg = "https://i.ibb.co/KWJS1hc/404.jpg"
   return (
      <div style=
         {{ background: `url(${bg})`, backgroundSize: "cover", backgroundRepeat: "repeat" }}>
         <div className="notfound flex flex-col justify-center items-center text-yellow-400">
            <div className="notfound-404">
               <h1 className='text-red-600 font-bold'>404</h1>
            </div>
            <h2 className='text-[22px] font-semibold'>Oops! This Page Could Not Be Found</h2>
            <p className='text-[16px] font-semibol'>Sorry this page does not exist, have been removed, name changed or temporarily unavailable</p>
            <div>
               <Link to="/">
                  <button className='btn btn-primary mt-4' >Go To Home</button>
               </Link>
            </div>
         </div>
      </div>
   );
};

export default Page404;