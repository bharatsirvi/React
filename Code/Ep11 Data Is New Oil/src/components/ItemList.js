import { RESTAURANT_IMAGES_URL } from "../utils/constant";
import { FaStar } from "react-icons/fa";
const ItemList = ({ items }) => {
  console.log("items", items);
  return (
    <div>
      {items.map((item) => (
        <div
          className="m-2 p-2 border-b border-gray-300"
          key={item.card.info.id}
        >
          <div className="flex  justify-between gap-6 p-4">
            <div className="w-9/12">
              <span className="font-semibold text-gray-800">
                {item.card.info.name}
              </span>
              <span className="text-gray-600">
                {" "}
                - ₹{item.card.info.price || item.card.info.defaultPrice / 100}
              </span>
              {item.card.info.ratings.aggregatedRating.rating && (
                <p className="flex gap-1 text-xs text-gray-500 mt-1">
                  <FaStar color="green"/>  
                  {item.card.info.ratings.aggregatedRating.rating} (
                  {item.card.info.ratings.aggregatedRating.ratingCountV2})
                </p>
              )}
              <p className="text-xs text-gray-500 mt-1">
                {item.card.info.description}
              </p>
            </div>

            <div className="w-3/12 h-32 shadow-xl rounded-lg overflow-hidden">
              <button className="rounded-tl-lg rounded-br-lg p-2 z-10 text-xs font-bold absolute  text-green-600 shadow-md bg-gray-100 hover:cursor-pointer">
                ADD +
              </button>
              {item?.card?.info?.imageId ? <img
                  className="w-full h-full object-cover"
                  src={RESTAURANT_IMAGES_URL + item.card.info.imageId}
                  alt={item.card.info.name}
                />:null}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
export default ItemList;
