import React, { useContext, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../../contexts/AuthProvider';

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('https://recycle-hut-server.vercel.app/categories')
      .then(res => res.json())
      .then(data => setCategories(data))
  }, []);


  const handlelogOut = () => {
    logOut()
      .then(() => {
        navigate('/login');

      })
      .catch(err => console.error(err))
  };

  const menuItems =
    <React.Fragment>
      <li className='hover:font-bold hover:text-[16px]'><Link to="/home" className='rounded-lg'>Home</Link></li>

      <li className='hover:font-bold hover:text-[16px]'>
        <Link>
          Categories
          <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
        </Link>
        <ul className="p-2 bg-cyan-600">
          {
            categories.map(category =>
              <li key={category._id}>
                <Link to={`/category/${category._id}`}>
                  {category.name}
                </Link>
              </li>
            )
          }

        </ul>
      </li>

      <li className='hover:font-bold hover:text-[16px]'><Link to="/blog" className='rounded-lg'>Blog</Link></li>

      {
        user?.uid ?
          <>
            <li className='hover:font-bold hover:text-[16px]'><Link to="/dashboard" className='rounded-lg'>Dashboard</Link></li>
            <li className='hover:font-bold hover:text-[16px]'> <button onClick={handlelogOut} className='rounded-lg'>Log Out</button> </li>
          </>
          :
          <>
            <li className='hover:font-bold hover:text-[16px]'><Link to="/login" className='rounded-lg'>Login</Link></li>
          </>
      }
    </React.Fragment>

  return (
    <div className='z-10'>
      <div className="navbar flex justify-between bg-cyan-600 text-white">
        <div className="navbar-start">
          <div className="dropdown" >
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className='h-5 w-5' viewBox="0 0 448 512">
                <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-52 bg-cyan-600">
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">Recycle Hut</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal">
            {menuItems}
          </ul>
        </div>
        <label htmlFor="dashboard-drawer" tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
        </label>
      </div>
    </div>
  );
};

export default Navbar;