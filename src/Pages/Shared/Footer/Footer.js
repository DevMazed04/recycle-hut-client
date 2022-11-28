import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
   return (
      <section>
         <footer className="footer py-10 text-base-content mt-7 flex flex-col ml-10 md:ml-0 md:flex-row md:justify-around">
            <div className='mb-10 lg:mb-0'>
               <span className="footer-title">SERVICES</span>
               <Link to="/" className="link link-hover">Emergency Checkup</Link>
               <Link to="/" className="link link-hover">Monthly Checkup</Link>
               <Link to="/" className="link link-hover">Weekly Checkup</Link>
               <Link to="/" className="link link-hover">Deep Checkup</Link>
            </div>

            <div className='mb-10 lg:mb-0'>
               <span className="footer-title">ORAL HEALTH</span>
               <Link to="/home" className="link link-hover">Fluoride Treatment</Link>
               <Link to="/home" className="link link-hover">Cavity Filling</Link>
               <Link to="/home" className="link link-hover">Teath Whitening</Link>
            </div>

            <div>
               <span className="footer-title">OUR ADDRESS</span>
               <Link to="/home" className="link link-hover">Terms of use</Link>
               <Link to="/home" className="link link-hover">Privacy policy</Link>
               <Link to="/home" className="link link-hover">Cookie policy</Link>
            </div>
         </footer>

         <div>
            <p className='text-center mt-8 mb-3'>Copyright © 2022 - All right reserved</p>
         </div>
      </section>
   );
};

export default Footer;