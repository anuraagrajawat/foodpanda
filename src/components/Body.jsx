import React, { useEffect, useState, useCallback } from "react";
import Restaurant from "./Restaurant";
import Shimmer from "./Shimmer";
import { Link } from "react-router"; 

const Body = () => {
  const [listOfRes, setRes] = useState([]); // For filtered list
  const [originalList, setOriginalList] = useState([]); // Main list
  const [loading, setLoading] = useState(true);
  const [inputVal, setInputVal] = useState("");
  const [isFiltered, setIsFiltered] = useState(false); // Track filter toggle

  const fetch_api = async () => {
    try {
      const api_data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.627981&lng=77.3648567&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
      );
      const json = await api_data.json();
      const restaurants =
        json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
      setRes(restaurants);
      setOriginalList(restaurants);
    } catch (error) {
      console.error("Error fetching API data:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch_api();
  }, []);

  const filterHandler = useCallback(() => {
    if (isFiltered) {
      setRes(originalList);
    } else {
      const filteredData = originalList.filter((res) => res.info.avgRating > 4.1);
      setRes(filteredData);
    }
    setIsFiltered(!isFiltered);
  }, [isFiltered, originalList]);

  const inputHandler = (event) => {
    setInputVal(event.target.value);
  };

  const searchHandler = () => {
    const filteredData = originalList.filter((res) =>
      res.info.name.toLowerCase().includes(inputVal.toLowerCase())
    );
    setRes(filteredData);
  };

  if (loading) {
    return <Shimmer />;
  }

  return (
    <div className="body_main p-6 bg-gray-100">
      <div className="body_main2 flex justify-between items-center mb-8">
        <div className="body_search flex items-center space-x-4 w-full max-w-xl">
          <input
            type="text"
            name="search-restaurant"
            id="search-bar"
            onChange={inputHandler}
            placeholder="Search for Restaurants"
            value={inputVal}
            className="p-4 text-xl border border-gray-300 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-swiggyOrange"
          />
          <button
            onClick={searchHandler}
            id="search-bar-btn"
            className="bg-swiggyOrange text-white text-lg py-3 px-6 rounded-lg hover:bg-orange-600 transition-all duration-300"
          >
            Search
          </button>
        </div>
        <div className="filter-div mt-4 sm:mt-0">
          <button
            onClick={filterHandler}
            id="filter-btn"
            className="bg-swiggyYellow text-black text-lg py-3 px-6 rounded-lg hover:bg-yellow-500 transition-all duration-300 w-60"
          >
            {isFiltered ? "Show All Restaurants" : "Top Rated Restaurants"}
          </button>
        </div>
      </div>

      <div className="body_cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {listOfRes.map((restaurant) => (
          <Link
            to={`/restaurants/${restaurant.info.id}`}
            key={restaurant.info.id}
            className="block"
          >
            <Restaurant data={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
