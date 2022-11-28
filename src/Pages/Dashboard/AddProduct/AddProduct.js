import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';
import Loading from '../../Shared/Loading/Loading';

const AddProduct = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const { user } = useContext(AuthContext);
   const imageHostKey = process.env.REACT_APP_imgbb_key;
   const navigate = useNavigate();

   const postedDate = new Date().toLocaleDateString();
   const postedTime = new Date().toLocaleTimeString();

   const { data: categories, isLoading } = useQuery({
      queryKey: ['category'],
      queryFn: async () => {
         const res = await fetch('http://localhost:5000/categories');
         const data = await res.json();
         return data;
      }
   })

   const handleAddProduct = data => {
      const image = data.image[0];
      const formData = new FormData();
      formData.append('image', image);

      const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`
      fetch(url, {
         method: 'POST',
         body: formData
      })
         .then(res => res.json())
         .then(imgData => {
            if (imgData.success) {
               console.log(imgData.data.url);
            }
            const product = {
               postedDate,
               postedTime,
               productImg: imgData.data.url,
               productName: data.name,
               brand: data.brand,
               model: data.model,
               category: data.category,
               description: data.description,
               yearsOfUse: data.yearsOfUse,
               conditionType: data.conditionType,
               resalePrice: data.resalePrice,
               originalPrice: data.originalPrice,
               sellerName: data.sellerName,
               sellerMobile: data.sellerMobile,
               sellerEmail: user?.email,
               location: data.location
            }
            console.log('product:', product)

            // // save product information to the database
            fetch('http://localhost:5000/products', {
               method: 'POST',
               headers: {
                  'content-type': 'application/json',
                  // authorization: `bearer ${localStorage.getItem('accessToken')}`
               },
               body: JSON.stringify(product)
            })
               .then(res => res.json())
               .then(result => {
                  console.log(result);
                  toast.success(`${data.name} is added successfully`);
                  navigate('/dashboard/myproducts')
               })
         })
   }

   if (isLoading) {
      return <Loading></Loading>
   }

   return (
      <div className='lg:w-[50%] mx-auto p-8'>
         <h2 className="text-[27px] mb-5 text-center font-semibold">Add A Product</h2>

         <form onSubmit={handleSubmit(handleAddProduct)} className="border bg-base-100 rounded-xl p-6">

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Phone Name</span></label>
               <input type="text" {...register("name", {
                  required: "Name is Required"
               })} className="input input-bordered w-full" />
               {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Photo</span></label>
               <input type="file" {...register("image", {
                  required: "Photo is Required"
               })} className="input input-bordered w-full p-2" />
               {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Brand</span></label>
               <input type="text" {...register("brand", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.brand && <p className='text-red-500'>{errors.brand.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Model</span></label>
               <input type="text" {...register("model", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.model && <p className='text-red-500'>{errors.model.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Category</span></label>
               <select
                  {...register('category')}
                  className="select input-bordered w-full font-normal">
                  {
                     categories.map(category => <option
                        key={category._id}
                        value={category.name}
                     >{category.name}</option>)
                  }
               </select>
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Description</span></label>
               <input type="text" {...register("description", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.description && <p className='text-red-500'>{errors.description.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Years Of Use</span></label>
               <input type="text" {...register("yearsOfUse", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.yearsOfUse && <p className='text-red-500'>{errors.yearsOfUse.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Condition Type</span></label>
               <input type="text" {...register("conditionType", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.conditionType && <p className='text-red-500'>{errors.conditionType.message}</p>}
            </div>


            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Resale Price</span></label>
               <input type="text" {...register("resalePrice", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.resalePrice && <p className='text-red-500'>{errors.resalePrice.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Original Price</span></label>
               <input type="text" {...register("originalPrice", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.originalPrice && <p className='text-red-500'>{errors.originalPrice.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Seller Name</span></label>
               <input type="text" {...register("sellerName", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.sellerName && <p className='text-red-500'>{errors.sellerName.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Seller Mobile</span></label>
               <input type="text" {...register("sellerMobile", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.sellerMobile && <p className='text-red-500'>{errors.sellerMobile.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Seller Email</span></label>
               <input type="email" defaultValue={user?.email} readOnly {...register("sellerEmail", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.sellerEmail && <p className='text-red-500'>{errors.sellerEmail.message}</p>}
            </div>

            <div className="form-control w-full">
               <label className="label"> <span className="label-text font-semibold">Location</span></label>
               <input type="text" {...register("location", {
                  required: true
               })} className="input input-bordered w-full" />
               {errors.location && <p className='text-red-500'>{errors.location.message}</p>}
            </div>

            <input className='btn btn-accent bg-cyan-500 text-white w-full mt-4' value="Add Product" type="submit" />
         </form>
      </div>
   );
};

export default AddProduct;