import Rescard from "./Rescard";
import { useState, useEffect } from "react";
import Shimmer from "./shimmer";

const Body = () => {
  const [listOfResturants, setListOfResturant] = useState([]);

  const [filteredResturant, setFilteredResturant] = useState([]);

  const[searchText,setSearchText]=useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=20.2959847&lng=85.8246101&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const json = await data.json();

    console.log(json);

    setListOfResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredResturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  //conditional rendering 
  return listOfResturants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" 
          value = {searchText}
          onChange={(e)=>{
              setSearchText(e.target.value);
          }}
          />
          <button className="search-btn"  onClick={()=>{
              const filteredResturant= listOfResturants.filter(
                (res)=>res.info.name.toLowerCase()
                .includes(searchText.toLowerCase())
            )

            setFilteredResturant(filteredResturant);
          }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfResturants.filter(
              (res) => res.info.avgRating >= 4.6
            );
            setListOfResturant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {filteredResturant.map((restaurant, index) => (
          <Rescard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
