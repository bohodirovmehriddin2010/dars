import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from "./home/home";
import Product from "./product/product"
import blog from "./blog/blog"




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
      <h1>
          MY REACT APP
      </h1>
      <MyBtn/>
      <MyBtn/>
      <MyBtn/>
      <br/>
      <Home/>
      <br/>
      <Product/>
      <br/>
      <blog/>
  </div>
);

function MyBtn(){
    return(
        <button className="bg-aqua">Click me</button>
    );
}
