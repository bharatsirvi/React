import RestaurentCard from "./RestaurentCard";
import { SWIGGY_API_URL } from "../utils/constant";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");
  useEffect(() => {
    console.log("use Effect");
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await fetch(SWIGGY_API_URL);
    const data = await response.json();
    console.log(data);

    setFilteredRestaurant(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //optional chaining
    setListOfRestaurants(
      data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus == false) {
    return <div>you are offline</div>;
  }
  console.log("body render");

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="px-30 mt-8">
      <div className="filter flex items-center gap-8 m-4">
        <div className="flex gap-2">
          <input
            type="text"
            className="p-2 border-1 border-gray-300 rounded-md focus:border-green-400 focus:ring focus:ring-blue-200 outline-none hover:"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-400 rounded-md hover:cursor-pointer hover:bg-green-500"
            onClick={() => {
              console.log(searchText);
              const filteredList = listOfRestaurants.filter((res) => {
                return res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase());
              });
              setFilteredRestaurant(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="px-4 py-2 bg-yellow-300 rounded-md hover:cursor-pointer hover:bg-yellow-400"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setFilteredRestaurant(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="font-bold mx-4 mt-8 text-2xl ">
        Top Restaurants Near You
      </div>
      <div className="flex flex-wrap mx-4">
        {filteredRestaurant.map((restaurant) => (
          <Link
            className="link"
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            {" "}
            <RestaurentCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
