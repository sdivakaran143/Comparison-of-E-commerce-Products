// import './App.css';
import React from 'react';
import {Amazoncard} from "./cards"
import {Flipkartcards} from "./cards"
import css from "./App.module.css"

function App() {
      return (
        <div className="main">
        {/* <div className="cards">
          <Amazoncard/>
        </div>
        
      <div className="flipkartbox">
      <div className="cards">
        <Flipkartcards/>
      </div>
      </div> */}
       <div className="css.nav">
      <nav>
        <h2>Title</h2>

        <div className="nav-li">
          <a>hello</a>
          <a>hxd</a>
          <a>cxxcv</a>
          <a>gxcgnf</a>
        </div>
      </nav>

      <div className="searchDiv">
        <form action="/searchData" method="post">
          <input type="text" placeholder="Product Name" />
          <button>Search</button>
        </form>
        
      </div>
    </div>
    <div className="body-content">
      <div className="content-element">
        <div className="amazon-content">
          <div className="amazon-title">
            <h2>Amazon</h2>
          </div>

          <div className="card_cont">
            <Amazoncard/>
          </div>
        </div>
        <div className="flipkart-content">
          <div className="flipkart-title">
            <h2>Flipkart</h2>
          </div>

          <div className="card_cont">
          <Flipkartcards/>
          </div>
        </div>
      </div>

      <div className="btn-compare">
        <button className="compare-btn" type="submit">COMPARE</button>
      </div>
    </div>
    </div>
  );
}

export default App;
