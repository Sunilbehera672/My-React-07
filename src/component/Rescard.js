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
                 {CDN_URL}
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