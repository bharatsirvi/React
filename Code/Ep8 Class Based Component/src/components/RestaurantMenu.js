import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { MENU_API_URL } from "../utils/constant";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [resInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API_URL + resId);
    const json = await data.json();
    console.log(json.data);
    setResInfo(json.data);
  };
  if (resInfo === null) return <Shimmer />;

  const { name, cloudinaryImageId, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => card.card.card.title === "Recommended"
    )[0]?.card.card;

  return (
    <div className="menu">
      <h2 className="res-name">{name}</h2>
      <p>{cuisines.join(",")}</p>
      <p>{avgRating}</p>
      <p>{costForTwoMessage}</p>
      <h3 className="menu-title">Menu </h3>
      <ul className="menu-items">
        {itemCards.map((item, index) => {
          const { name, price, defaultPrice } = item.card.info;
          return (
            <li key={index}>
              {name + "  -  " + (price || defaultPrice) / 100}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
