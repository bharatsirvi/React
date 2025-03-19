import { RESTAURANT_IMAGES_URL } from "../utils/constant";
const RestaurentCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, locality } =
    props.resData?.card?.card?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={RESTAURANT_IMAGES_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <p className="res-cuisine">{cuisines.join(", ")} </p>
      <p className="res-rating">{avgRating} star </p>
      <p className="res-area">{locality}</p>
      <p className="res-sla">{sla.slaString}</p>
    </div>
  );
};
export default RestaurentCard;
