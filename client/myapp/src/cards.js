import amzdata,{amazon} from "./database.json";
import flipdata,{flipkart} from "./database.json";
import './App.css';
// console.log(flipkart);
const Amazoncard=()=>{
    return(
    <div className="amazonbox">
    {amzdata.amazon.map(x => {
        return( 
          <div key={x.id} className="amazoncard">
              <img src={x.image} alt={x.image} className="productimage"/>
          <div className="cardcontent">
              <a href={x.link}>{x.detials.name}</a><br/><br/>
              <p>PRICE: {x.detials.price}</p>
              <p>RATING: {x.detials.rating}</p>
              <p>OFFER: {x.detials.offer}</p></div>
          </div>
        )
      })}
</div>);
}

const Flipkartcards=()=>{
  return(
    <div classname="flipkartbox">
          {flipdata.flipkart.map(y => {
              return(
                  <div key={y.id} className="flipkartcard">
                   <img src={y.image} alt={y.image} className="productimage"/><br/>
                      <div className="cardcontent">
                          <a href={y.link}>{y.detials.productName}</a><br/><br/>
                          <p>PRICE: {y.detials.price}</p>
                          <p>RATING: {y.detials.ratting}</p>
                          <p>OFFER: {y.detials.offer}</p>
                        </div>
                  </div>
                      )
              })}
    </div>
  );
}
export {Flipkartcards,Amazoncard}