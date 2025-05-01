import {LOGO_URL} from "../utils/constant"
import { useState } from "react";

const Header = () => {

  const [btn,setBtn]=useState("Login");
    return (
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src="https://www.logodesign.net/logo/smoking-burger-with-lettuce-3624ld.png?nwm=1&nws=1&industry=fast-food&sf=&txt_keyword=All"
          />
        </div>
        <div className="Nav-item">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact us</li>
          <li>Cart</li>
          <button className="login" onClick={
            ()=>{
              btn === "Login"?
              setBtn("Logout"):setBtn("Login");
            }
          }>
            {btn}
          </button>
        </ul>
        </div>
      </div>
    );
  };

  export default Header;