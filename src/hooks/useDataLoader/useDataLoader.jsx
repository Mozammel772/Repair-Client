import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useDataLoader = (endpoint, queryKey) => {
  const axiosPublic = useAxiosPublic();

  const {
    data = null,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: [queryKey],
    queryFn: async () => {
      const response = await axiosPublic.get(endpoint);
      return response.data;
    },
  });

  return {
    data,
    isLoading,
    isError,
    error,
    refetch,
  };
};

export default useDataLoader;
