import { RESTAURANT_IMAGES_URL } from "../utils/constant";
const RestaurentCard = (props) => {
  const { cloudinaryImageId, name, cuisines, avgRating, sla, locality } =
    props.resData?.info;
  return (
    <div className="res-card">
      <img
        className="res-logo"
        src={RESTAURANT_IMAGES_URL + cloudinaryImageId}
      />
      <h3 className="res-name">{name}</h3>
      <p className="res-cuisine">{cuisines.join(", ")} </p>
      <p className="res-rating">
        {avgRating} ⭐️ / {sla.slaString}{" "}
      </p>
      <p className="res-area">{locality}</p>
    </div>
  );
};
export default RestaurentCard;
