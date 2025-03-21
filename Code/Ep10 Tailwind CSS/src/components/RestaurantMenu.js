import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId)
  console.log("resInfo ->> ",resInfo)
  if (resInfo === null) return <Shimmer />;

  const { name, cuisines, avgRating, costForTwoMessage } =
    resInfo?.cards[2]?.card?.card?.info || {};

  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (card) => card.card.card.itemCards
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
