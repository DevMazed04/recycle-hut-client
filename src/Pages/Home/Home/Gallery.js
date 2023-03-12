import React from 'react';
import p1 from '../../../assets/images/R-i-Phone-12-pro.png'
import p2 from '../../../assets/images/R-nokia-3310-black.png'
import p3 from '../../../assets/images/R-Realme-C17.png'
import p4 from '../../../assets/images/R-symphony-D54.png'
import p5 from '../../../assets/images/R-Walton-Primo-RM2.png'
import p6 from '../../../assets/images/R-Apple-i-Phone-6-White.png'

const Gallery = () => {
  return (
    <div>
      <section class="overflow-hidden text-neutral-700">
        <div class="container mx-auto py-2 lg:px-5 lg:p-5">
          <div class="-m-1 flex flex-wrap md:-m-2">
            <div class="flex w-1/2 flex-wrap">
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-[5px] object-cover object-center common"
                  // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(70).webp"
                  src={p6}
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-[5px] object-cover object-center common"
                  // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(72).webp" 
                  src={p2}
                />
              </div>
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-[5px] object-cover object-center common"
                  // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(73).webp" 
                  src={p1}
                />
              </div>
            </div>
            <div class="flex w-1/2 flex-wrap">
              <div class="w-full p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-[5px] object-cover object-center common"
                  // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(74).webp"
                  src={p5}
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-[5px] object-cover object-center common"
                  // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(75).webp"
                  src={p3}
                />
              </div>
              <div class="w-1/2 p-1 md:p-2">
                <img
                  alt="gallery"
                  class="block h-full w-full rounded-[5px] object-cover object-center common"
                  // src="https://tecdn.b-cdn.net/img/Photos/Horizontal/Nature/4-col/img%20(77).webp"
                  src={p4}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Gallery;