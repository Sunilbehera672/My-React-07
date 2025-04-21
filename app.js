import React from "react"
import ReactDOM from "react-dom"

//heading 1
 const heading1 = React.createElement("h1", 
    {
          key : "h1",
          id: "title",
          className: "class"
    },
     "Hello World");
    //heading 2
    const heading2 = React.createElement("h2", 
    {
          key : "h2",
          id: "title",
          className: "class"
    },
     "Hello Class");
    //div container 
    const container = React.createElement("div",
    {
      id:"container"
    },[heading1,heading2]);//there are two child heading1 and heading2 . In react if there are two child then you need to give them different keys , because react will easily recognise the child and modifed it .
    const root = ReactDOM.createRoot(document.getElementById("root"));
    //rendering the container .
    root.render(container);
    