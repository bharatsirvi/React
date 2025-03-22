import { useState } from "react";
import ItemList from "./ItemList";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const RestaurantMenuCategory = ({categoryData,showItems,setShowIndex,index}) => {
 
  console.log("pros->", categoryData);
  const { title, itemCards } = categoryData;
  const handleClicked =()=>{
    showItems==true? setShowIndex(null): setShowIndex(index)
  }
  return (
    <div>
      <div className="my-8  shadow-md p-4 rounded-md">
        <div className="px-2 flex justify-between hover:cursor-pointer" onClick={handleClicked}>
          <span className="font-bold">
            {title} ({itemCards.length})
          </span>
          <span> {showItems?<IoIosArrowUp/>:<IoIosArrowDown/>}  </span>
        </div>
        {showItems  && <ItemList items={itemCards} />}      
      </div>
    </div>
  );
};

export default RestaurantMenuCategory;
