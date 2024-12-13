import { useQuery } from "@tanstack/react-query";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useAuth from "../../../hooks/useAuth/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: users = [],
    refetch,
    isError,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  // const handleMakeAdmin = (user) => {
  //   axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
  //     console.log(res.data);
  //     if (res.data.modifiedCount > 0) {
  //       refetch();
  //       Swal.fire({
  //         position: "top-end",
  //         icon: "success",
  //         title: `${user.name} is an Admin Now!`,
  //         showConfirmButton: false,
  //         timer: 1500,
  //       });
  //     }
  //   });
  // };

  const handleChangeRole = (user, role) => {
    const roleText = role === "admin" ? "Admin" : "Moderator";
    const rolePath = `/users/${role}/${user._id}`;

    Swal.fire({
      title: `Do you want to make this user a ${roleText}?`,
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: `Yes, Make ${roleText}`,
      denyButtonText: `Don't Make ${roleText}`,
    }).then((result) => {
      if (result.isConfirmed) {
        // Make the API call only after confirmation
        axiosSecure
          .patch(rolePath)
          .then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
              Swal.fire(`User is now a ${roleText}!`, "", "success");
            } else {
              Swal.fire("Failed to update role", "", "error");
            }
          })
          .catch((error) => {
            console.error(`Error making user ${roleText}:`, error);
            Swal.fire("An error occurred", "", "error");
          });
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
      refetch();
    });
  };

  const handleDeleteUser = (user) => {
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
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
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
      <SectionTittle
        heading={"All User "}
        subHeading={"All User Loging From Admin"}
      ></SectionTittle>
      <div className="flex justify-evenly my-4 font-bold">
        <h2 className="text-3xl">All Users</h2>
        <h2 className="text-3xl">Total Users: {users.length}</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full ">
          {/* head */}
          <thead className="bg-orange-400 text-xl text-black rounded-md">
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-xl font-semibold">
            {users?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                {/* <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : (
                    <button
                      onClick={() => handleMakeAdmin(user)}
                      className="btn btn-lg bg-orange-500"
                    >
                      <FaUsers
                        className="text-white 
                                          text-2xl"
                      ></FaUsers>
                    </button>
                  )}
                </td> */}
                <td>
                  {user.role === "admin" ? (
                    "Admin"
                  ) : user.role === "moderator" ? (
                    "Moderator"
                  ) : (
                    <>
                      <button
                        onClick={() => handleChangeRole(user, "admin")}
                        className="btn btn-lg bg-orange-500"
                      >
                        <FaUsers className="text-white text-2xl" />
                      </button>
                      <button
                        onClick={() => handleChangeRole(user, "moderator")}
                        className="btn btn-lg bg-blue-500 ml-2"
                      >
                        <FaUsers className="text-white text-2xl" />
                      </button>
                    </>
                  )}
                </td>

                <td>
                  <button
                    onClick={() => handleDeleteUser(user)}
                    className="btn btn-ghost btn-lg"
                  >
                    <FaTrashAlt className="text-red-600"></FaTrashAlt>
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div>
          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center items-center h-40">
              <div className="loader border-t-4 border-blue-500 w-10 h-10 rounded-full animate-spin"></div>
            </div>
          )}

          {/* Error State */}
          {isError && (
            <div className="text-center py-5 font-bold text-red-500 text-lg mt-5">
              {error?.message ||
                "Failed to Users Data. Please try again later."}
              <button
                onClick={refetch}
                className="ml-3 text-blue-500 underline btn"
              >
                Retry
              </button>
            </div>
          )}

          {/* No Data State */}
          {!isLoading && !isError && users.length === 0 && (
            <div className="text-center text-gray-500 text-lg m-5">
              No Users Data available at the moment.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
