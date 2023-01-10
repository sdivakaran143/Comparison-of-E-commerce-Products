import React, { useState } from "react";
import amzdata, { amazon } from "./database.json";
import flipdata, { flipkart } from "./database.json";
import "./App.css";

function AmzClick() {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };

  /*
  let card_cont = document.querySelector(".card_cont");
  let card_cont_ama = document.querySelector(".card_cont_ama");
  let card_cont_fli = document.querySelector(".card_cont_fli");

  let prod_cont = document.querySelector(".prod_cont");
  let prod_cont_ama = document.querySelector(".prod_cont_ama");
  let prod_cont_flip = document.querySelector(".prod_cont_flip");

  let btn_back_ama = document.querySelector(".btn_back_ama");

  let btn_back_fli = document.querySelector(".btn_back_fli");

  let btnAmz;

  let btnFli;

  let ama = false;
  let flip = false;

  let AmaId = 0;
  let FliId = 0;

  btnAmz = document.querySelector(".btnAmz");
  
  console.log("hiiharish");
  card_cont_ama.classList.toggle("hidden");
  prod_cont_ama.classList.toggle("hidden");

  btn_back_ama.addEventListener("click", () => {
    card_cont_ama.classList.toggle("hidden");
    prod_cont_ama.classList.toggle("hidden");
  });
  */
}
// console.log(flipkart);
const Amazoncard = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="amazonbox">
      <div className={isActive ? "hidden" : ""}>
        <div>
          <img className="product-img" src="./workplace.jpg" alt="lap" />
        </div>

        <button className="btn_back_ama" onClick={handleToggle}>
          Back
        </button>

        <h3 className="product-name">Title :</h3>
        <h3 className="product-price">Price :</h3>
        <h3 className="product-rating">Rating :</h3>
        <h3 className="product-name">Title :</h3>
        <h3 className="product-price">Price :</h3>
        <h3 className="product-rating">Rating :</h3>
        <h3 className="product-name">Title :</h3>
        <h3 className="product-price">Price :</h3>
        <h3 className="product-rating">Rating :</h3>
      </div>
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
              <button className="btnAmz" onClick={handleToggle}>
                +
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const Flipkartcards = () => {
  const [isActive, setActive] = useState("false");

  const handleToggle = () => {
    setActive(!isActive);
  };
  return (
    <div className="flipkartbox">
      {/* <div className="prod_cont prod_cont_flip hidden "> */}
      {/* <div className={isActive ? "" : "hidden"}> */}

      <div className={isActive ? "hidden" : ""}>
          
        <div>
          <img className="product-img" src="./workplace.jpg" alt="lap" />
        </div>

        <button className="btn_back_fli" onClick={handleToggle}>
          Back
        </button>

        <h3 className="product-name">Title :</h3>
        <h3 className="product-price">Price :</h3>
        <h3 className="product-rating">Rating :</h3>
        <h3 className="product-name">Title :</h3>
        <h3 className="product-price">Price :</h3>
        <h3 className="product-rating">Rating :</h3>
        <h3 className="product-name">Title :</h3>
        <h3 className="product-price">Price :</h3>
        <h3 className="product-rating">Rating :</h3>
      </div>
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
                <button className="btnFli" onClick={ handleToggle}>
                  +
                </button>
              </div>
            </div>
          </div>
        );
      })}
      {/* </div> */}
    </div>
  );
};
export { Flipkartcards, Amazoncard };