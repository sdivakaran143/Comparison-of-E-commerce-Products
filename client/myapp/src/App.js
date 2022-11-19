import logo from './logo.svg';
import './App.css';
import amzdata,{amazon} from "./database.json";
import flipdata,{flipkart} from "./database.json";

export default function App() {
  return (
          <div classname="main">

            <div classname="amazonbox">
            <h1><b>amazon</b></h1>
            {amzdata.amazon.map(x => {
                return( 
                  <div key={x.id}>
                  <img src={x.image} alt={x.image}/><br/>
                  <a href={x.link}>{x.name}</a><br/>
                  </div>
                )
              })}
        </div>
          <div classname="flipkartbox">
          <h1><b>flipkart</b></h1>
                  {flipdata.flipkart.map(y => {
                      return( 
                        <div key={y.id}>
                        <img src={y.image} alt={y.name}/><br/>
                        <a href={y.link}>{y.name}</a><br/>
                        </div>
                      )
                    })}
          </div>
      </div>

    // <div className="App">
    //   <div class="amazonbox"><h1><b>Amazon</b></h1>
    //   <div>
    //   {amzdata.amazon.map(x => {
    //     return( 
    //       <div key={x.id}>
            
    //       <li><a href={x.link}>{x.name}</a></li>
    //   </div>
    //     )
    //   })
    //   }
    //   </div>
    //   </div>
    //   <div class="flikartbox">
    //       <h1><b>Flipkart</b></h1>
    //         <div>
    //             {flipdata.flipkart.map(y => {
    //               return( 
    //                 <div key={y.id}>
                      
    //                 <li><a href={y.link}>{y.name}</a></li>
    //                 </div>
    //               )
    //             })}
    //         </div>
    //   </div>
    // </div>
  );
}


