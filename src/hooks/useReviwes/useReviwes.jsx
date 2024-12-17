import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import useAxiosPublic from "../useAxiosPublic/useAxiosPublic";

const useReviews = (serviceId) => {
  const axiosPublic = useAxiosPublic();
  const [filteredReviews, setFilteredReviews] = useState([]);

  // Fetch reviews
  const {
    data: reviews = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["reviews", serviceId],
    queryFn: async () => {
      const response = await axiosPublic.get("/reviews");
      return response.data;
    },
  });

  // Filter reviews for the specific service
  useEffect(() => {
    if (reviews.length > 0) {
      const filtered = reviews.filter((rev) => rev.service === serviceId);
      setFilteredReviews(filtered);
    }
  }, [reviews, serviceId]);

  // Calculate average rating
  const calculateAverageRating = () => {
    const totalRating = filteredReviews.reduce((acc, rev) => acc + rev.rating, 0);
    return totalRating / filteredReviews.length || 0;
  };

  // Render star icons based on rating
  const renderRatingStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        i <= rating ? (
          <FaStar key={i} size={20} color="orange" />
        ) : (
          <FaRegStar key={i} size={20} color="orange" />
        )
      );
    }
    return stars;
  };

  return {
    filteredReviews,
    isLoading,
    isError,
    error,
    refetch,
    calculateAverageRating,
    renderRatingStars,
  };
};

export default useReviews;
