import {CDN_URL} from "../utils/constant";

const Rescard = (props) =>{
    const{resData}=props;

const {
  cloudinaryImageId,
  name,
  cuisines,
  locality, 
  avgRating
} = resData?.info;


    return (
          <div className="res-card">
               <img 
               className="reslogo"
               src= {
                 "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"
                  +cloudinaryImageId
               }
               />
               <h3>{name}</h3>
               <h4>⭐{avgRating}▪️{resData.info.sla.slaString}</h4>
               <h4>{cuisines.join(", ")}</h4>
               <h4>{locality}</h4>

          </div>
    )
}

export default Rescard;