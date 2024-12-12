import { useQuery } from "@tanstack/react-query";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxioPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";

const UserServicePost = () => {
  const axiosPublic = useAxioPublic();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();
  // Fetch service data with React Query
  const {
    data: services = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["services", user?.email],
    queryFn: async () => {
      const response = await axiosPublic.get(
        `/servicepost?email=${user?.email}`
      );
      return response.data;
    },
  });

  const handleDeletePost = (service) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPublic.delete(`/servicepost/${service?._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div className="mt-20">
      {/* Section Title */}
      <div>
        <SectionTittle
          heading={"Repair Service Items"}
          subHeading={"All Repair Service Items"}
        />
      </div>

      {/* Loading State */}
      {isLoading && (
        <div className="flex justify-center items-center h-40">
          <div className="loader border-t-4 border-blue-500 w-10 h-10 rounded-full animate-spin"></div>
        </div>
      )}

      {/* Error State */}
      {isError && (
        <div className="text-center py-5 font-bold text-red-500 text-lg mt-5">
          {error?.message || "Failed to load services. Please try again later."}
          <button
            onClick={refetch}
            className="ml-3 text-blue-500 underline btn"
          >
            Retry
          </button>
        </div>
      )}

      {/* No Data State */}
      {!isLoading && !isError && services.length === 0 && (
        <div className="text-center text-gray-500 text-lg m-5">
          No service items available at the moment.
        </div>
      )}

      {/* Display Services */}
      <div className="">
        <div className="overflow-x-auto">
          <table className="table w-full">
            {/* head */}
            <thead>
              <tr className="text-xl font-semibold bg-orange-400 text-black w-full">
                <th>#</th>
                <th>Name</th>
                <th>Service</th>
                <th>Description</th>
                <th>Description</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {services.map((post, index) => (
                <tr key={post._id}>
                  <th>
                    <label>{index + 1}</label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={
                              post?.image ||
                              "https://img.daisyui.com/images/profile/demo/2@94.webp"
                            }
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{post?.Name}</div>
                        <div className="text-sm opacity-50">{post?.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {post.ServiceType}
                    <br />
                    <span className="badge badge-ghost badge-sm">
                      {post.createdAt}
                    </span>
                  </td>
                  <td>{post.Description}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                  <th>
                    <button
                      onClick={() => handleDeletePost(user)}
                      className="btn btn-ghost btn-lg"
                    >
                      <FaTrashAlt className="text-red-600"></FaTrashAlt>
                    </button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserServicePost;
