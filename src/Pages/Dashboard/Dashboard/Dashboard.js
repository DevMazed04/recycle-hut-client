import React, { useContext, useState } from "react";
import { AuthContext } from "../../../contexts/AuthProvider";

const Dashboard = () => {
   const { user } = useContext(AuthContext);

   const [time, setTime] = useState(null);
   setInterval(() => setTime(new Date().toLocaleTimeString()), 1000);

   return (
      <div>
         <div className="text-center mt-[260px]">
            <span className="text-[16px]"> <span className="text-[14px]">Now</span>
               <span className="text-cyan-600 font-semibol"> {time}</span>
            </span>
         </div>
         <div className="text-[22px] font-semibold mt-1 flex justify-center items-center w-[90%] mx-auto ">
            <span className="text-center">
               Hi! <span className="font-bold text-green-500  text-[20px]">
                  {user?.displayName}
               </span>
               <br /> Welcome To Your Dashboard
            </span>
         </div>
      </div>
   );
};

export default Dashboard;
