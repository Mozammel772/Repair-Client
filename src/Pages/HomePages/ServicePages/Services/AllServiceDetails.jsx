import React from "react";
import { FcRating } from "react-icons/fc";
import { TiTickOutline } from "react-icons/ti";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
const AllServiceDetails = ({ service }) => {
  const { title, image, price } = service;

  const handleBookAppointment = (service) => {
    console.log(service);
  };

  return (
    <div>
      <div className=" bg-base-200 lg:min-h-screen mb-20">
        <div className="hero-content flex-col lg:flex-row-reverse ">
          <div className="w-full">
            <div className="card bg-base-100  lg:w-[500px] lg:h-[360px] shadow-xl  ">
              <div className="flex justify-between items-center p-10 ">
                <h2 className="card-title text-2xl font-bold uppercase">
                  Package
                </h2>
                <h2 className="text-2xl font-bold">
                  <span className="text-4xl">৳</span>{" "}
                  {price || "No Avaiable Price"}
                </h2>
              </div>
              <div className="text-xl font-semibold px-10">
                <h1 className="my-2">Avaiable Service Packages</h1>
                <div className="flex items-center gap-2">
                  <span className="my-2">
                    <TiTickOutline color="orange" size="30" />
                  </span>
                  <h2 className="text-gray-500">{title}</h2>
                </div>
                <div className="card-actions my-10">
                  <button
                    onClick={() => handleBookAppointment(service)}
                    className="mt-4 w-full bg-orange-500 text-xl font-semibold text-white py-3 px-4 rounded-lg shadow hover:bg-orange-600"
                  >
                    <span>Book Appoinment</span>
                  </button>
                </div>
              </div>
            </div>
            <div className=" lg:w-[500px] shadow-xl ">
              <div className="flex items-center gap-2 bg-green-200 text-xl font-semibold py-5 rounded-md my-5 px-10">
                <h1>
                  <TiTickOutline color="orange" size="30"></TiTickOutline>
                </h1>
                <h1>20 Order Completed</h1>
              </div>
            </div>
            <div className=" lg:w-[500px] shadow-xl ">
              <div className="flex items-center gap-2 bg-red-200 text-xl font-semibold py-5 rounded-md my-5 px-10">
                <h1>
                  <FcRating color="orange" size="30"></FcRating>
                </h1>
                <h1>Seller Ratting : 100 %</h1>
              </div>
            </div>
          </div>
          <div className="w-full ">
            <div className="lg:w-[700px] lg:h-[555px]">
              <div>
                <figure className="">
                  <img className="w-full rounded-md" src={image} alt="Album" />
                </figure>
                <div>
                  <div className="flex items-center my-5 ">
                    <div className="flex items-center">
                      <div class="avatar online">
                        <div class="w-12 rounded-full">
                          <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                      </div>
                      <p className="ml-2 text-gray-500 text-2xl uppercase font-semibold">
                        {"Repair"}
                      </p>
                    </div>
                    <div className="ml-20">
                      <p>{"Rating"}</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Overviwes Section */}
              <div className="divider"></div>
              <div>
                <Tabs>
                  <TabList className="flex gap-10 text-xl text-gray-500 border-b-2 border-gray-200 pb-2">
                    <Tab className="cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-md transition-all duration-300 ease-in-out">
                      Overview
                    </Tab>
                    <Tab className="cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-md transition-all duration-300 ease-in-out">
                      About Seller
                    </Tab>
                    <Tab className="cursor-pointer py-2 px-4 hover:bg-gray-100 rounded-md transition-all duration-300 ease-in-out">
                      Reviews
                    </Tab>
                  </TabList>

                  <TabPanel>
                    <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </h2>
                  </TabPanel>
                  <TabPanel>
                    <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
                      Lorem Ipsum is simply dummy text of the printing and
                      typesetting industry. Lorem Ipsum has been the industry's
                      standard dummy text ever since the 1500s, when an unknown
                      printer took a galley of type and scrambled it to make a
                      type specimen book. It has survived not only five
                      centuries, but also the leap into electronic typesetting,
                      remaining essentially unchanged. It was popularised in the
                      1960s with the release of Letraset sheets containing Lorem
                      Ipsum passages, and more recently with desktop publishing
                      software like Aldus PageMaker including versions of Lorem
                      Ipsum.
                    </h2>
                  </TabPanel>
                  <TabPanel>
                    <h2 className="text-lg text-gray-700 bg-white p-10 rounded-md">
                      it to make a type specimen book. It has survived not only
                      five centuries, but also the leap into electronic
                      typesetting, remaining essentially unchanged. It was
                      popularised in the 1960s with the release of Letraset
                      sheets containing Lorem Ipsum passages, and more recently
                      with desktop publishing software like Aldus PageMaker
                      including versions of Lorem Ipsum.
                    </h2>
                  </TabPanel>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllServiceDetails;
