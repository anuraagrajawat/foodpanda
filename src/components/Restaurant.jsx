import React from "react";
import { CDN_URL } from "../utils/url";

const Restaurant = ({ data }) => {
  const { name, costForTwo, avgRating, cuisines, cloudinaryImageId } = data.info;
  const { slaString } = data.info.sla;

  return (
    <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 p-4">
      <img
        id="reslogo"
        src={CDN_URL + cloudinaryImageId}
        alt="reslogo"
        className="w-full h-40 object-cover rounded-lg mb-4"
      />
      <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
      <h4 className="text-lg text-gray-600">{cuisines.slice(0, 3).join(", ")}</h4>
      <h4 className="text-lg text-gray-600">Avg Ratings: ⭐ {avgRating}</h4>
      <h4 className="text-lg text-gray-600">💵 {costForTwo}</h4>
      <h4 className="text-lg text-gray-600">⌛ {slaString}</h4>
    </div>
  );
};

export default Restaurant;
