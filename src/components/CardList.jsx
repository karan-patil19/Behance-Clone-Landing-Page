// eslint-disable-next-line no-unused-vars
import React ,{ useState }from "react";
import { BEHANCEITEM } from "../Data";
import PropTypes from "prop-types";
import { FaFileSignature, FaHandHoldingHeart } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import { HeartIcon } from '@heroicons/react/24/solid';

const BehanceList = ({ selectedCategory, searchCategory }) => {
  const [likeditems,setlikedItems]= useState([]);
  const handleLike = (id)=>{
    if(likeditems.includes(id)){
      setlikedItems(likeditems.filter(item=>item !== id));
    }
    else{
      setlikedItems([...likeditems,id])
    }
    
  }
  const searchItems = searchCategory
    ? BEHANCEITEM.filter((item) =>
        item.searchCategory.toLowerCase().includes(searchCategory.toLowerCase())
      )
    : BEHANCEITEM;

  const sortedItems = [...searchItems].sort((a, b) => {
    if (a.sortItem[selectedCategory] && b.sortItem[selectedCategory]) {
      if (selectedCategory == "Most Recent") {
        const [dayA, monthA, yearA] = a.sortItem[selectedCategory]
          .split("/")
          .map(Number);
        const [dayB, monthB, yearB] = b.sortItem[selectedCategory]
          .split("/")
          .map(Number);
        const dateA = new Date(yearA, monthA - 1, dayA);
        const dateB = new Date(yearB, monthB - 1, dayB);
        return dateB - dateA;
      } else {
        return b.sortItem[selectedCategory] - a.sortItem[selectedCategory];
      }
    } else {
      return 0;
    }
  });

  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-col-3 lg:grid-cols-3 gap-6">
          {sortedItems.map((item, index) => (
            <div
              key={index}
              className="category-item bg-white rounded-md overflow-hidden shadow-md"
            >
              <div className="relative">
                <img
                  src={item.featureImg}
                  alt={item.featureTxt}
                  className="w-full h-48 object-cover"
                ></img>
                <div className="save-file absolute top-2 left-2 flex items-center py-2 px-3 bg-black/50 rounded-full cursor-pointer">
                  <MdDateRange className="text-white text-sm pr-1" />
                  <span className="text-white text-xs font-medium">
                    {item.sortItem["Most Recent"]}
                  </span>
                </div>
                <div className=" absolute top-2 right-2 flex items-center py-2 px-3 bg-black/50 rounded-full cursor-pointer">
                  <FaFileSignature className="text-white text-sm pr-1 " />
                  <span className="text-white text-xs font-medium mr-2">
                    {item.sortItem.Curated}
                  </span>
                  <FaHandHoldingHeart className="text-white text-sm pr-1" />
                  <span className="text-white text-xs font-medium">
                    {item.sortItem.Recommended}
                  </span>
                </div>
                <div className="patch absolute top-0 right-2 transform translate-y-[-10px] hover:translate-y-[-5px]cursor-pointer">
                  <img src={item.fePatch} alt=""></img>
                </div>
              </div>
              <div className="py-3 flex justify-between items-center">
                <div className="cursor-pointer">
                  <h4 className="font-medium text-sm leading-[15px] text-ellipsis hover:underline">
                    {item.featureTxt}
                  </h4>
                  <span className="text-sm hover:underline">{item.feUser}</span>
                </div>
                <div className="flex space-x-5">
                <div className = {`be-like flex items-center cursor-pointer ${likeditems.includes(item.id) ?
                  'text-red-500' : 'text-[#959595]'}`} onClick={()=>handleLike(item.id)}>
                  <HeartIcon className="li-icon w-5 h-5"/>
                  <span className="text-sm font-medium text -[#959595]">{item.sortItem["Most Appreciated"]}</span>
                </div>
                <div className="be-watch flex items-center">
                <div className="wa-icon text-[#959595]">{item.fewatchIcon}</div>
                <span className="text-sm  mr-4 font-medium text -[#959595]">{item.sortItem["Most Viewed"]}</span>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
BehanceList.propTypes = {
  selectedCategory: PropTypes.oneOf([
    "Recommended",
    "Curated",
    "Most Appreciated",
    "Most Viewed",
    "Most Discussed",
    "Most Recent",
  ]).isRequired,
  searchCategory: PropTypes.string.isRequired,
};
export default BehanceList;
