// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import Autosuggest from "react-autosuggest";
import { CgMenuLeft } from "react-icons/cg";
import {  IoSearchSharp } from "react-icons/io5";
import { MdArrowDropDown } from "react-icons/md";
import PropTypes from "prop-types";
import {
  adobeLogo,
  adobe_cloude,
  behance_logo,
  searchType,
  tagName,
} from "../Data";


const searchSuggestions = [
  "Photography",
  "Creative",
  "Beaches",
  "Wallpaper",
  "Universe",
];

const categories = [
  "Recommended",
  "Curated",
  "Most Appreciated",
  "Most Viewed",
  "Most Discussed",
  "Most Recent",
];

function Header({ selectedCategory, setSelectedCategory ,setSearchCategory }) {
  const [value, setValue] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedSuggestion,setSelectedSuggestion]=useState("")

  const openMenu = () => {
    const main_header = document.getElementById("header");
    main_header.classList.toggle("menuopen");
  };

  

  const onChange = (event,{newValue})=>{
    setValue(newValue)
  }

  const onSuggestionsFetchRequested = ({ value }) => {
    setSuggestions(getSuggestions(value));
  };

  const onSuggestionsClearRequested = () => {
    setSuggestions([]);
  };

  const getSuggestions = (value) => {
    const inputValue = value.trim().toLowerCase();
    const inputLength = inputValue.length;
    return inputLength === 0
      ? []
      : searchSuggestions.filter(
          (suggestion) =>
            suggestion.toLowerCase().slice(0, inputLength) === inputValue
        );
  };

  const getSuggestionValue = (suggestion) => suggestion;

  const renderSuggestion = (suggestion) => <div>{suggestion}</div>;

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handelSearch = ()=>{
    setSearchCategory(selectedSuggestion)
  }

const inputProps ={
  placeholder:"Search the creative world at work",
  value,
  onChange: onChange,
  className:"bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-md lg:text-xl font-bold text-[#222] placeholder:text-[#777]"
}

  const theme = {
    input:
      "bg-transparent outline-none w-[90%] lg:w-full truncate pl-16 text-md lg:text-xl font-bold text-[#222] placeholder:text-[#777]",
    suggestionsContainer: "absolute z-10 w-full bg-white shadow-lg mt-1",
    suggestion: "p-2 hover:bg-gray-200 cursor-pointer",
    suggestionHighlighted: "bg-gray-200",
  };

  return (
    <>
      <header
        id="header"
        className="header sticky top -0 left-0 w-full bg-white z-50 shadow-md"
      >
        <div className="border-b sticky top-0 bg-white z-10">
          <div className="container-fluid">
            <div className="top-header py-4 lg:py-3 px-5 border-b border">
              <div className="navbar flex item-center justify-between">
                <div className="brand-logo flex items-center">
                  <div
                    className="phone-menu pr-3 text-2xl cursor-pointer block lg:hidden "
                    onClick={() => openMenu()}
                  >
                    <CgMenuLeft></CgMenuLeft>
                  </div>
                  <img
                    src={behance_logo}
                    alt="Behance Logo"
                    className="w-auto h-[40px]"
                  />
                  <div className="page-links lg:ml:8 hidden lg:block">
                    <ul className="flex item-center">
                      <li className="mx-3 font-medium text-md active">
                        <a href="#">For you </a>
                      </li>
                      <li className="mx-3 font-medium text-md active">
                        <a href="#">Discover </a>
                      </li>
                      <li className="mx-3 font-medium text-md active">
                        <a href="#">Live Streame </a>
                      </li>
                      <li className="mx-3 font-medium text-md active">
                        <a href="#">Hire </a>
                      </li>
                      <li className="mx-3 font-medium text-md active">
                        <a href="#">Jobs</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="hidden lg:block">
                  <div className="action-area flex items-center">
                    <div className="login-btn rounded-full border px-4 py-1 border-[#dee8ff]">
                      <a
                        href="#"
                        className="text-[#0057ff] font-medium text-md"
                      >
                        Login
                      </a>
                    </div>
                    <div className="login-btn rounded-full border px-4 py-1 bg-[#0057ff]">
                      <a href="#" className="text-white font-medium text-md">
                        SignUp
                      </a>
                    </div>
                    <span className="text-gray-300"> </span>
                    <div className="free-btn mx-4 flex items-center border rounded-full px-4 py-1">
                      <div className="cloud-icon pr-2">
                        <img
                          src={adobe_cloude}
                          alt="Adobe Cloud"
                          className="w-8 h-8"
                        ></img>
                      </div>
                      <a href="#">Free Trial</a>
                    </div>
                    <div className="adobe-btn mx-4 flex items-center hover:opacity-70">
                      <img
                        src={adobeLogo}
                        alt="Adobe Logo"
                        className="w-6 h-6"
                      ></img>
                      <a href="#" className="p1-1 font-bold text-black text-sm">
                        Adobe
                      </a>
                    </div>
                  </div>
                </div>
                <div className="phone-search block lg:hidden cursor-pointer pr-3 text-2xl">
                  <IoSearchSharp></IoSearchSharp>
                </div>
              </div>
            </div>
            <div className="search-area p-5 realtive overflow-visible">
              <div className="search-box w-full border-2 rounded-full bg-[#f9f9f9] overflow-visible flex items-center justify-between relative">
                <div className="input-box relative lg:w-full">
                  <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}
                    theme={theme}
                    onSuggestionSelected={(event,{suggestionValue})=>setSelectedSuggestion(suggestionValue)}
                    
                  />
                  <div className="search-icon text-2xl text-[#777] absolute top-[2px] left-4">
                    <IoSearchSharp className="hover:cursor-pointer" onClick={handelSearch}></IoSearchSharp>
                  </div>
                </div>
                <div className="tags-search bg-white px-4 py-3 border-1-2">
                  <ul className="flex items-center">
                    <li className="text-black lg:bg-black mx-1 py-1 lg:text-white px-3 rounded-full font-medium text-sm">
                      <a href="#">Projects</a>
                    </li>
                    <div className="dy-arrow block lg:hidden">
                      <MdArrowDropDown></MdArrowDropDown>
                    </div>
                    {searchType.map((tags) => (
                      <li
                        className="mx-1 font-medium text-sm py-1 px-3 hidden lg:block rounded-full hover:bg-[#eee]"
                        key={tags.sItems}
                      >
                        <a href="#">{tags.sItems} </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
            <div className="behance-tools flex items-center justify-between pb-5 px-2">
              <div className="tools flex items-center">
                {tagName.map((tools) => (
                  <div
                    className="tools-item flex items-center border rounded-md px-3 py-2 mx-1"
                    key={tools.tags}
                  >
                    <div className="t-icon">{tools.tagIcon}</div>
                    <div className="tname px-2">
                      <p className="text-sm font-bold"> {tools.tags}</p>
                    </div>
                    <div className="dt-arrow">
                      <MdArrowDropDown />
                    </div>
                  </div>
                ))}
              </div>
              <div className="category-sort  hidden  lg:block shadow-md">
                <div className="relative">
                  <label
                    htmlFor="sortCategory"
                    className="absolute top-0 left-3 text-sm text-gray-800 px-1 "
                  >
                    {" "}
                    Sort by
                  </label>
                  <select id="sortCategory"
                  className="text-black-500 bg-white p-4 pl-10 pr-6 font-medium text-md cursor-pointer appearance-none border-none outline-none shadow-sm" style={{width:"200px"}}
                  value={selectedCategory}
                  onChange={handleCategoryChange}>
                  {categories.map((category)=>(
                    <option value={category} key={category}>{category}</option>
                  )
                    )}
                  </select>
                  <div className="absolute right-3 top-1/2 transform-y-1/2 pointer-events-none">
                  <MdArrowDropDown className="text-black"/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
Header.propTypes = {
  selectedCategory: PropTypes.string.isRequired,
  setSelectedCategory: PropTypes.func.isRequired,
  setSearchCategory: PropTypes.func.isRequired,
};


export default Header;
