import React from 'react';

const Loading = () => {
   return (
      <>
         <div className="flex items-center justify-center h-[700px]">
            <div className="spinner-grow inline-block w-8 h-8 bg-cyan-500 rounded-full opacity-0 text-blue-600" role="status">
               <span className="visually-hidden">Loading...</span>
            </div>
         </div>
      </>
   );
};

export default Loading;