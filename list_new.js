const req =require("request"),cherio=require('cheerio'),axios=require("axios");

function findtheproductinflipkart(FlipkartLink){
req(FlipkartLink,(error,response,html)=>{
    if(!error){
        const $=cherio.load(html);
        const link=($("._1fQZEK").attr('href'));
        console.log("\nFLIPKART LINK : \nhttps://www.flipkart.com"+link)
    }
    
})
}
let Name ="philips vacuum cleaner".toLowerCase().trim();
let fliplink=Name.replace(" "+"%20%20");
let FlipkartLink="https://www.flipkart.com/search?q="+fliplink+"&otracker=AS_Query_HistoryAutoSuggest_5_0&otracker1=AS_Query_HistoryAutoSuggest_5_0&marketplace=FLIPKART&as-show=on&as=off&as-pos=5&as-type=HISTORY";
requirements=Name.split(" ");
findtheproductinflipkart(FlipkartLink)

function findtheproductinamazon(Amazonink){
    req(AmazonLink,(error,response,html)=>{
        if(!error){
            const $=cherio.load(html);
            const link=($("#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(5)").attr("data-asin"))
            console.log("\nAMAZON LINK :\nhttps://www.amazon.in/dp/"+link)
        }
    })
}
let amlink=Name.replaceAll(" ","+");
let AmazonLink="https://www.amazon.in/s?k="+amlink
findtheproductinamazon(AmazonLink)

//class="s-result-item s-asin sg-col-0-of-12 sg-col-16-of-20 AdHolder sg-col s-widget-spacing-small sg-col-12-of-16"
///html/body/div[1]/div[2]/div[1]/div[1]/div/span[3]/div[2]/div[3]
////*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[3]
///html/body/div[1]/div[2]/div[1]/div[1]/div/span[3]/div[2]/div[5]
/////*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[5]