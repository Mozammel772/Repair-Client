// import React from "react";
// import CoverSection from "../../../Components/CoverSection/CoverSection";
// import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
// import image from "../../../assets/about/ac-repair.jpg";

// const Dashboard = () => {
//   return (
//     <div>
//       <div className="mt-20">
//         <CoverSection
//           img={image}
//           tittle={"User Dashboard"}
//           subTittle={
//             "Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores veritatis perferendis aut quasi quam corrupti adipisci error velit quas, omnis reprehenderit similique earum necessitatibus expedita minus, enim maiores incidunt neque."
//           }
//         />
//       </div>
//       <div>
//         <SectionTittle
//           heading={"Your Repair Items"}
//           subHeading={"Request Your Repair Items"}
//         />
//       </div>
//     </div>
//   );
// };

// export default Dashboard;



import { useQuery } from "@tanstack/react-query";
import React, { useContext } from "react";
import useAxioPublic from "../../../hooks/useAxiosPublic/useAxiosPublic";
import { AuthContext } from "../../Register/AuthProvider/AuthProvider";

const Dashboard = () => {
  const { user } = useContext(AuthContext);  // Get user context
  const axiosPublic = useAxioPublic();  // Custom hook for axios

  // Check if user email is available
  const userEmail = user?.email;

  const {
    data: posts = [],  // The data returned by the query (posts)
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["servicepost", userEmail],  // Make sure email is in the query key
    queryFn: async () => {
      if (!userEmail) {
        throw new Error("User email is not available");
      }
      const response = await axiosPublic.get(`/servicepost?email=${userEmail}`);
      return response.data;  // Return the filtered posts
    },
    refetchOnWindowFocus: true,  // Refetch if the window is refocused
    staleTime: 0,  // Always fetch fresh data
  });

  return (
    <div>
      <h1 className="mt-20 text-xl font-semibold">My Service Posts</h1>

      {isLoading && <p>Loading...</p>}
      {isError && (
        <p className="text-red-500">
          Failed to load posts. {error?.message || ""}
        </p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.length > 0 ? (
          posts.map((post) => (
            <div
              key={post._id}
              className="card card-compact bg-base-100 w-96 shadow-xl"
            >
              <div className="card-body">
                <h2 className="card-title">{post.ServiceType}</h2>
                <p>{post.Description}</p>
                <p className="text-sm text-gray-500">
                  Posted on: {post.createdAt}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-500 text-center mt-5">
            No posts found for your email.
          </p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

