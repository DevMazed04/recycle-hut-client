import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import toast from "react-hot-toast";
import ConfirmationModal from "../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../Shared/Loading/Loading";


const AllAdmins = () => {
  const [deletingAdmin, setDeletingAdmin] = useState(null);

  const closeModal = () => {
    setDeletingAdmin(null);
  };

  const {
    data: users = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("https://recycle-hut-server.vercel.app/users");
      const data = await res.json();
      return data;
    },
  });

  const admins = users.filter((user) => user.role === "admin");

  const handleDeleteAdmin = (user) => {
    fetch(`https://recycle-hut-server.vercel.app/users/${user._id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          refetch();
          toast.success(`${user.name} deleted successfully`);
        }
      });
  };


  if (isLoading) {
    return <Loading></Loading>;
  }


  return (
    <div className="p-8">
      <h2 className="text-3xl mb-5">All Admins ({admins?.length})</h2>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th>SL</th>
              <th>Admin Name</th>
              <th>Email Address</th>
              <th>Admin Action</th>
            </tr>
          </thead>
          <tbody>
            {admins.map((admin, i) => (
              <tr key={admin._id}>
                <th>{i + 1}</th>
                <td>{admin.name}</td>
                <td>{admin.email}</td>
                {
                  admins.length > 1 &&
                  <td>
                    {
                      admin?.email !== "devmazed04@gmail.com" ?
                        <label
                          onClick={() => setDeletingAdmin(admin)}
                          htmlFor="confirmation-modal"
                          className="btn btn-xs btn-error  bg-red-500 text-white"
                        >
                          Delete Admin
                        </label>
                        :
                        <span className="text-green-500 font-bold ml- text-[16px]">Main Admin</span>
                    }
                  </td>
                }
              </tr>
            ))}
          </tbody>
        </table>
      </div>


      {deletingAdmin && (
        <ConfirmationModal
          title={`Are you sure to delete this Admin?`}
          message={`Deleting admin ${deletingAdmin.name} cannot be undone.`}
          successAction={handleDeleteAdmin}
          successButtonName="Delete"
          modalData={deletingAdmin}
          closeModal={closeModal}
        ></ConfirmationModal>
      )}
    </div>
  );
};

export default AllAdmins;
