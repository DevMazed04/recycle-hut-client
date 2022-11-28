import React, { useEffect, useState } from "react";
import CategoryInfo from "./CategoryInfo";

const CategoriesInfo = () => {
   const [categoriesInfo, setCategoriesInfo] = useState([]);

   useEffect(() => {
      fetch('http://localhost:5000/categories')
         .then(res => res.json())
         .then(data => setCategoriesInfo(data))
   }, []);

   return (
      <div>
         <h3 className="uppercase text-[20px] text-secondary font-semibold mb-4">
            Phone Categories
         </h3>

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categoriesInfo.map((categoryInfo) => (
               <CategoryInfo
                  key={categoryInfo._id}
                  categoryInfo={categoryInfo}>
               </CategoryInfo>
            ))}
         </div>
      </div>
   );
};

export default CategoriesInfo;
