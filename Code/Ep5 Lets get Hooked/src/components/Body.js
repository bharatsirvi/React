import cardDataArr from "../utils/mockData";
import RestaurentCard from "./RestaurentCard";
import { useState } from "react";

const Body = () => {
  console.log("render");
  const [listOfRestaurants, setListOfRestaurants] = useState(cardDataArr);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.7
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurentCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
