import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantMenuCategory from "./RestaurentMenuCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const [showIndex, setShowIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  console.log("resInfo ->> ", resInfo);
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => card.card.card.itemCards
    )[0]?.card.card;

  const categories =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  console.log("category", categories);

  return (
    <div className="w-8/12 m-auto p-10">
      <h2 className="uppercase text-2xl font-bold">{name}</h2>

      {categories.map((category, index) => (
        <RestaurantMenuCategory
          categoryData={category?.card.card}
          key={index}
          index={index}
          showItems={index==showIndex?true:false}
          setShowIndex= {setShowIndex}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
