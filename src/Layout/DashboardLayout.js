import React, { useContext } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';
import Navbar from '../Pages/Shared/Navbar/Navbar';

const DashboardLayout = () => {
  const { user } = useContext(AuthContext);

  const [isBuyer] = useBuyer(user?.email);
  const [isSeller] = useSeller(user?.email);
  const [isAdmin] = useAdmin(user?.email);

  return (
    <div>
      <Navbar></Navbar>
      <div className="drawer drawer-mobile">
        <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">
          <Outlet></Outlet>
        </div>
        <div className="drawer-side">
          <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-[240px] bg-gray-800 text-white">

            {
              isBuyer && <>
                <li className='text-[17px] hover:text-[19px] hover:text-lg font-semibold hover:text-cyan-400'><Link to="/dashboard/myorders">My Orders</Link></li>
              </>
            }

            {
              isSeller && <>
                <li className='text-[17px] hover:text-[19px] hover:text-lg font-semibold hover:text-cyan-400'><Link to="/dashboard/addproduct">Add A Product</Link></li>
                <li className='text-[17px] hover:text-[19px] hover:text-lg font-semibold hover:text-cyan-400'><Link to="/dashboard/myproducts">My Products</Link></li>
                <li className='text-[17px] hover:text-[19px] hover:text-lg font-semibold hover:text-cyan-400'><Link to="/dashboard/mybuyers">My Buyers</Link></li>
              </>
            }

            {
              isAdmin && <>
                <li className='text-[17px] hover:text-[19px] hover:text-lg font-semibold hover:text-cyan-400'><Link to="/dashboard/manageallusers">Manage All Users</Link></li>
                <li className='text-[17px] hover:text-[19px] hover:text-lg font-semibold hover:text-cyan-400'><Link to="/dashboard/allproducts">All Products</Link></li>
                <li className='text-[17px] hover:text-[19px] hover:text-lg font-semibold hover:text-cyan-400'><Link to="/dashboard/alladmins">All Admins</Link></li>
                <li className='text-[17px] hover:text-[19px] hover:text-lg font-semibold hover:text-cyan-400'><Link to="/dashboard/allbuyers">All Buyers</Link></li>
                <li className='text-[17px] hover:text-[19px] hover:text-lg font-semibold hover:text-cyan-400'><Link to="/dashboard/allsellers">All Sellers</Link></li>
                <li className='text-[17px] hover:text-[19px] hover:text-lg font-semibold hover:text-cyan-400'><Link to="/dashboard/reporteditems">Reported Items</Link></li>
              </>
            }
          </ul>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;