import React, { useState } from "react";
import amzdata, { amazon } from "./database.json";
import flipdata, { flipkart } from "./database.json";
import "./App.css";

var obj = {};
var objDetails = {};
var objSpec = {};

var objAmz = {};
var objAmzDetails = {};
var objAmzSpec = {};

const Amazoncard = () => {
  const [isActive, setActive] = useState("false");

  const handleToggleAmz = (valObj) => {
    // const handleToggle = () => {
    setActive(!isActive);
    objAmz = valObj;
    objAmzDetails = valObj.detials;
    objAmzSpec = valObj.detials.spec;
  };

  const handleToggleAmzClose = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div className={isActive ? "hidden" : ""}>
        <div>
          <img src={objAmz.image} alt={objAmz.image} className="productimage" />
        </div>

        <button className="btn_back_ama" onClick={handleToggleAmzClose}>
          Back
        </button>

        <h3 className="product-name">Title : {objAmz.name}</h3>
        <h3 className="product-price">price : {objAmzDetails.price}</h3>
        <h3 className="product-rating">Rating : {objAmzDetails.ratting}</h3>
        <h3 className="product-offer">Offer : {objAmzDetails.offer}</h3>
        <h3 className="product-deliCharg">
          Delivary Charge : {objAmzDetails.deliveryChrage}
        </h3>
        <h3 className="product-emi">EMI : {objAmzDetails.emi}</h3>
      </div>
      <div className="amazonbox">
        <div className={isActive ? "" : "hidden"}>
          {amzdata.amazon.map((x) => {
            return (
              <div key={x.id} className="amazoncard">
                <img src={x.image} alt={x.image} className="productimage" />
                <div className="cardcontent">
                  <a href={x.link}>{x.detials.name}</a>
                  <br />
                  <br />
                  <p>PRICE: {x.detials.price}</p>
                  <p>RATING: {x.detials.rating}</p>
                  <p>OFFER: {x.detials.offer}</p>
                </div>
                <button className="btnAmz" onClick={()=>{
                  objAmz = x;
                  handleToggleAmz(objAmz);
                }}>
                  +
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const Flipkartcards = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = (valObj) => {
    // const handleToggle = () => {
    setActive(!isActive);
    obj = valObj;
    objDetails = valObj.detials;
    objSpec = valObj.detials.spec;
  };

  const handleToggleClose = () => {
    setActive(!isActive);
  };
  return (
    <div>
      <div className={isActive ? "hidden" : ""}>
        <div></div>
        <img src={obj.image} alt={obj.image} className="productimage" /> 
        <h3 className="product-name">Title : {obj.name}</h3>
        <h3 className="product-price">price : {objDetails.price}</h3>
        <h3 className="product-rating">Rating : {objDetails.ratting}</h3>
        <h3 className="product-offer">Offer : {objDetails.offer}</h3>
        <h3 className="product-deliCharg">
          Delivary Charge : {objDetails.deliveryChrage}
        </h3>
        <h3 className="product-emi">EMI : {objDetails.emi}</h3>

        <button className="btn_back_fli" onClick={handleToggleClose}>
          Back
        </button>
      </div>

      <div className="flipkartbox">
        {flipdata.flipkart.map((y) => {
          return (
            <div>
              <div key={y.id} className={isActive ? "" : "hidden"}>
                <div className="flipkartcard">
                  <img src={y.image} alt={y.image} className="productimage" />
                  <br />
                  <div className="cardcontent">
                    <a href={y.link}>{y.detials.productName}</a>
                    <br />
                    <br />
                    <p>PRICE: {y.detials.price}</p>
                    <p>RATING: {y.detials.ratting}</p>
                    <p>OFFER: {y.detials.offer}</p>
                  </div>

                  <button
                    className="btnFli"
                    onClick={() => {
                      obj = y;
                      handleToggle(obj);
                    }}
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export { Flipkartcards, Amazoncard };