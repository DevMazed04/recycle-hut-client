import React from "react";
import banner1 from "../../../assets/images/b-1.jpg";
import banner2 from "../../../assets/images/b-2.jpg";
import banner3 from "../../../assets/images/b-3.png";

const Banner = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        className="carousel slide relative rounded-xl"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src={banner2}
              className="block w-full h-[220px] md:h-[300px] lg:h-[450px] rounded-xl"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-[24px] text-cyan-700 font-bold">Recycle Hut</h5>
              <p className="text-cyan-600 font-semibold text-[15px]">
                The best way for buying and selling all kinds of phones.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={banner3}
              className="block w-full h-[220px] md:h-[300px] lg:h-[450px] rounded-xl"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-[24px] text-cyan-700 font-bold">Recycle Hut</h5>
              <p className="text-cyan-600 font-semibold text-[15px]">
                The best way for buying and selling all kinds of phones.
              </p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src={banner1}
              className="block w-full h-[220px] md:h-[300px] lg:h-[450px] rounded-xl"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-[24px] text-cyan-700 font-bold">Recycle Hut</h5>
              <p className="text-cyan-600 font-semibold text-[15px]">
                The best way for buying and selling all kinds of phones.
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Banner;
