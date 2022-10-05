const req =require("request"),cherio=require('cheerio'),axios=require("axios");

function findtheproductinflipkart(FlipkartLink){
req(FlipkartLink,(error,response,html)=>{
    if(!error){
        const $=cherio.load(html);
        const link=($("._1fQZEK").attr('href'));
        console.log("https://www.flipkart.com"+link)
    }
    
})
}
let Name ="mi tv 43 inch".toLowerCase().trim();
let fliplink=Name.replace(" "+"%20%20");
let FlipkartLink="https://www.flipkart.com/search?q="+fliplink+"&otracker=AS_Query_HistoryAutoSuggest_5_0&otracker1=AS_Query_HistoryAutoSuggest_5_0&marketplace=FLIPKART&as-show=on&as=off&as-pos=5&as-type=HISTORY";
requirements=Name.split(" ");
//findtheproductinflipkart(FlipkartLink)

const findtheproductinamazon=(producturl)=>{
    axios.get(producturl).then(({data})=>{
        const $ =cherio.load(data);
        console.log(data);
    });
}; 

let amlink=Name.replaceAll(" ","+");
let AmazonLink="https://www.amazon.in/s?k="+amlink
console.log(AmazonLink);
findtheproductinamazon(AmazonLink)

