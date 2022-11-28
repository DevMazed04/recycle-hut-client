import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AndroidPhones from '../Categories/AndroidPhones/AndroidPhones';
import FeaturePhones from '../Categories/FeaturePhones/FeaturePhones';
import ApplePhones from '../Categories/ApplePhones/ApplePhones';

const SingleCategory = () => {
   const category = useLoaderData();
   console.log('category:', category)

   return (
      <div>
         {
            category.name === "Feature Phones" &&
            <FeaturePhones></FeaturePhones>
         }

         {
            category.name === "Android Phones" &&
            <AndroidPhones></AndroidPhones>
         }

         {
            category.name === "Apple Phones" &&
            <ApplePhones></ApplePhones>
         }
      </div >
   );
};

export default SingleCategory;