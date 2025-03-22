import { RESTAURANT_IMAGES_URL } from "../utils/constant";
import { FaStar } from "react-icons/fa";
const RestaurentCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, locality } =
    props.resData?.info;
  return (
    <div className="m-6 w-[250px]">
      <img
        className="h-[120] mb-3 w-[100%] object-cover rounded-lg shadow-lg"
        src={RESTAURANT_IMAGES_URL + cloudinaryImageId}
      />
      <h3 className="font-bold mb-1 truncate whitespace-nowrap overflow-hidden">
        {name}
      </h3>
      <p className="res-cuisine truncate whitespace-nowrap overflow-hidden">
        {cuisines.join(", ")}{" "}
      </p>
      <p className="flex gap-1 items-center res-rating">
      <FaStar color="green"/> {avgRating}  / {sla.slaString}{" "}
      </p>
      <p className="res-area">{locality}</p>
    </div>
  );
};

export const withVegLabel = (RestaurentCard) => {
  return (pros) => {
    return (
      <div className="relative group">
        <span className="z-10 absolute -top-2 left-2 bg-green-800 text-white text-xs font-semibold uppercase px-3 py-1 rounded-md shadow-lg tracking-wide transition-transform duration-300 ease-in-out group-hover:scale-95">
          Veg
        </span>

        <div className="transition-transform duration-300 ease-in-out transform group-hover:scale-95">
          <RestaurentCard {...pros} />
        </div>
      </div>
    );
  };
};

export default RestaurentCard;
