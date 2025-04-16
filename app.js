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
    },[heading1,heading2]);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(container);
    