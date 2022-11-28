import React from "react";

const ApplePhone = ({ applePhone, setPhone }) => {
   const {
      postedDate,
      postedTime,
      productImg,
      productName,
      brand,
      model,
      category,
      description,
      yearsOfUse,
      conditionType,
      resalePrice,
      originalPrice,
      sellerName,
      sellerMobile,
      sellerEmail,
      location,
   } = applePhone;

   return (
      <div className="card md:card-side bg-base-100 shadow-xl w-[85%] lg:w-[65%] mx-auto">
         <figure>
            <img
               src={productImg}
               alt={productName}
               className="w-[100%] h-[250px]  lg:h-[350px] rounded-xl p-10 pb-0 md:pb-10 "
            />
         </figure>
         <div className="card-body">
            <h2 className="card-title font-bold text-2xl mb-5 text-cyan-500">{productName}</h2>
            <p>
               <span className="font-semibold">Brand:</span> {brand}
            </p>
            <p>
               <span className="font-semibold">Model:</span> {model}
            </p>
            <p>
               <span className="font-semibold">Category:</span> {category}
            </p>
            <p>
               <span className="font-semibold">Years of Used:</span> {yearsOfUse}
            </p>
            <p>
               <span className="font-semibold">Condition Type:</span> {conditionType}
            </p>
            <p>
               <span className="font-semibold">Resale Price:</span> {resalePrice} Tk
            </p>
            <p>
               <span className="font-semibold">Original Price:</span> {originalPrice}
               Tk
            </p>
            <p>
               <span className="font-semibold">Seller Name:</span> {sellerName}
            </p>
            <p>
               <span className="font-semibold">Seller Mobile:</span> {sellerMobile}
            </p>
            <p>
               <span className="font-semibold">Seller Email:</span> {sellerEmail}
            </p>
            <p>
               <span className="font-semibold">Location:</span> {location}
            </p>
            <p>
               <span className="font-semibold">Posted Date:</span> {postedDate}
            </p>
            <p>
               <span className="font-semibold">Posted Time:</span> {postedTime}
            </p>
            <p>
               <span className="font-semibold">Description:</span> {description}
            </p>

            <div className="card-actions mt-4 lg:justify-end">
               <label
                  htmlFor="booking-modal"
                  className="btn btn-accent bg-cyan-600 text-white"
                  onClick={() => setPhone(applePhone)}
               >
                  Book Now
               </label>
            </div>
         </div>
      </div>
   );
};

export default ApplePhone;
