// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import { HashLoader } from "react-spinners";
// import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
// import useAxiosrepair from "../../../hooks/useCategory/useCategory";
// const Category = () => {
//   const [category, setCategory] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const categoryData = useAxiosrepair();
//   // fetch data from API
//   useEffect(() => {
//     setLoading(true);
//     categoryData
//       .get("/category")
//       .then((response) => response.json())
//       .then((data) => {
//         console.log(data);
//         setCategory(data);
//         setLoading(false);
//       })
//   }, []);
//   return (
//     <div>
//       <div>
//         <SectionTittle
//           heading={"All-Category"}
//           subHeading={"Our Service Categories"}
//         />
//       </div>
//       {loading && <HashLoader color="#fa01ff" loading size={50} />}
//         <Link
//           className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5"
//           to={"/all-category-repair"}
//         >
//           {" "}
//           {category.map((item, index) => (
//             <div
//               key={index}
//               className="card card-compact bg-base-100 w-full shadow-xl"
//             >
//               <figure>
//                 <img src={item.image} alt={item.name} />
//               </figure>
//               <div className="card-body">
//                 <h2 className="card-title text-xl font-bold font-serif text-center">
//                   {item.service}
//                 </h2>
//                 <p className="text-md font-medium text-center">
//                   {item.totalService} + Service
//                 </p>
//               </div>
//             </div>
//           ))}
//         </Link>

//     </div>
//   );
// };

// export default Category;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SectionTittle from "../../../Components/SectionTittle/SectionTittle";
import useAxiosrepair from "../../../hooks/useCategory/useCategory";
import Loading from "../../../Shared/Loading/Loading";

const Category = () => {
  const [category, setCategory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const categoryData = useAxiosrepair();

  useEffect(() => {
    setLoading(true);
    setError(null); // Reset error on new request
    categoryData
      .get("/category")
      .then((response) => {
        setCategory(response.data || []); // Fallback to an empty array
        setLoading(false);
      })
      .catch((err) => {
        setError("No Available Data at This Moment");
        setLoading(false);
      });
  }, [categoryData]);

  return (
    <div>
      <SectionTittle
        heading="All-Category"
        subHeading="Our Service Categories"
      />

      {loading && <Loading />}
      {!loading && error && (
        <p className="text-red-500 text-center text-xl font-bold py-5">{error}</p>
      )}

      {!loading && !error && category.length === 0 && (
        <p className="text-gray-500 text-center">No Available Data</p>
      )}

      {!loading && !error && category.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {category.map((item, index) => (
            <Link
              key={index}
              to={`/all-category-repair/${item.id}`}
              className="card card-compact bg-base-100 w-full shadow-xl"
            >
              <figure>
                <img src={item.image} alt={item.name} />
              </figure>
              <div className="card-body">
                <h2 className="card-title text-xl font-bold font-serif text-center">
                  {item.service}
                </h2>
                <p className="text-md font-medium text-center">
                  {item.totalService} + Service
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default Category;
