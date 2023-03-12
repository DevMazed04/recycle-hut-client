import React from 'react';
import { Link } from 'react-router-dom';

const CategoryInfo = ({ categoryInfo }) => {
   const { _id, name, description, img } = categoryInfo;
   return (
      <div>
         <Link to={`/category/${_id}`}>
            <div className="flex justify-center items-center shadow-lg px-2 lg:px-6 py-0 border rounded-xl gap-3 bg-slate-50 common">
               <img src={img} alt="img" className='w-[100px] h-[85px] borde' />
               <div className="card-body w-full px-0 p-7 text-black">
                  <h2 className="card-title">{name}</h2>
                  <p>{description}</p>
               </div>
            </div>
         </Link>
      </div>
   );
};

export default CategoryInfo;