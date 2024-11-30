import axios from "axios";

const axiosPublic = axios.create({
baseURL: "http://localhost:3000",
});
const useAxiosrepair = () => {
  return axiosPublic;
};

export default useAxiosrepair;