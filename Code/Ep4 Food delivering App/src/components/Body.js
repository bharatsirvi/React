import cardDataArr from "../utils/mockData"
import RestaurentCard from "./RestaurentCard";

const Body = () => (
    <div className="body">
      <div className="search">Seacrh</div>
      <div className="res-container">
        {cardDataArr.map((restaurant) => (
          <RestaurentCard
            resData={restaurant}
            key={restaurant.card.card.info.id}
          />
        ))}
      </div>
    </div>
  );

  export default Body;