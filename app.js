import React from "react"
import ReactDOM from "react-dom/client"

//React Element

//const jsxheading = <h1 id="heading">Namste React using jsx</h1>

//if we use jsx in multiple line then we need to use braket i.e paranthesis.
//const jh = (<h1>
// Namaste react
//  <h1>)   like that


//React Component 
//- class based component - old 
//- functional based component - new 
// React functional component :- 
// const HeadingComponent = ()=>{
//       return <h1>Namste React functional Component </h1>
// }

// Component Composition => component inside a component 
// const Title = ()=>{
//     return   <h1 id = "head" >Namaste Everyone </h1>
// }

// const Heading1 = ()=>{
//     return   <div id = "root">
//       <Title/>
//       <h1 id = "head1">Namaste React</h1>
//     </div>
// }

const ele = <span>Raect Element </span>

const title =(
      <h1
      id = "heading" className = "root">
            {ele}
            Namaste Sunil🤝
      </h1>
);

const HeadingComponent = ()=>{
      return (
            <div id = "divele" >
                  {title}
                  <h1 id = "heading1">
                        Namaste Everyone using jsx🤷‍♀️
                  </h1>
            </div>
      )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);