import { RESTAURANT_IMAGES_URL } from "../utils/constant";
const RestaurentCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, locality } =
    props.resData?.info;
  return (
    <div className="m-6 w-[250px] transition-transform duration-300 ease-in-out hover:scale-95">
      <img
        className="h-[120] mb-3 w-[100%] object-cover rounded-lg shadow-lg"
        src={RESTAURANT_IMAGES_URL + cloudinaryImageId}
      />
      <h3 className="font-bold mb-1 truncate whitespace-nowrap overflow-hidden">{name}</h3>
      <p className="res-cuisine truncate whitespace-nowrap overflow-hidden">{cuisines.join(", ")} </p>
      <p className="res-rating">
        {avgRating} ⭐️ / {sla.slaString}{" "}
      </p>
      <p className="res-area">{locality}</p>
    </div>
  );
};
export default RestaurentCard;
