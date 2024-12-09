import React from "react";
import { Controller, useForm } from "react-hook-form";

// Sample categories (this can be fetched from an API)
const serviceCategories = [
  { value: "game", label: "Game of Thrones" },
  { value: "lost", label: "Lost" },
  { value: "bad", label: "Breaking Bad" },
  { value: "dead", label: "Walking Dead" },
];

const ServiceCategorySelect = () => {
  const { control, handleSubmit } = useForm();

  // Form submission handler
  const onSubmit = (data) => {
    // The selected category will be inside `data.serviceType`
    console.log("Selected Service Type: ", data.serviceType);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="form-control">
        <label className="label" htmlFor="category">
          <span className="label-text text-lg font-semibold">Service Category:</span>
        </label>
        <Controller
          name="serviceType"
          control={control}
          rules={{
            required: "Service category is required",
          }}
          render={({ field, fieldState }) => {
            const { error } = fieldState;
            return (
              <div className="relative">
                <select
                  {...field}
                  className={`select select-primary w-full border rounded px-3 py-2 text-gray-700 transition-colors hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 ${
                    error ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="" disabled>
                    Choose Your Service Category?
                  </option>
                  {serviceCategories.map((category) => (
                    <option key={category.value} value={category.value}>
                      {category.label}
                    </option>
                  ))}
                </select>
                {error && (
                  <p className="text-red-500 text-sm mt-1">{error.message}</p>
                )}
              </div>
            );
          }}
        />
      </div>

      {/* Submit Button */}
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  );
};

export default ServiceCategorySelect;
