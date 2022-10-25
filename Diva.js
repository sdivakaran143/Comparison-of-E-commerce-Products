const axios =require("axios"),cherio=require('cheerio'),req =require("request");
const Flipkartdetials=(producturl)=>{
    axios.get(producturl).then(({data})=>{
        const $ =cherio.load(data);
        var string=$(".B_NuCI").text().trim();
        console.log("\nthe price at Flipkart  : ");
        console.log("The products is : "+string.substring(0,string.indexOf("(")));
        console.log("Product spec is : "+splitStr(string));
        console.log("The products value is "+$("._16Jk6d").text());
        console.log("Star Ratting : "+$('._3LWZlK').text().substring(0,3)+" out of 5 stars");
        console.log($("#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(2) > div > div > span._2_R_DZ > span > span:nth-child(1)").text()+"found...!");
        //console.log(data);
    });
}; 
const Amazondetials=(producturl)=>{
    axios.get(producturl).then(({data})=>{
        const $ =cherio.load(data);
        var string=$("#title").text().trim();
        console.log("\nthe price at Amazon  : ");
        console.log("The products is : "+string.substring(0,string.indexOf("(")));
        console.log("Product spec is : "+splitStr($("#title").text()));
        if(!($("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span > span:nth-child(2) > span.a-price-whole").text())){
           console.log("The products value is "+$("#corePrice_desktop > div > table > tbody > tr:nth-child(2) > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span.a-offscreen").text());
            if(!$("#corePrice_desktop > div > table > tbody > tr:nth-child(2) > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span.a-offscreen").text()){
                console.log("Unable to Fetch The Product Price ....")
            }
        }
        else{
            console.log("The products value is ₹"+$("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span > span:nth-child(2) > span.a-price-whole").text());
        }//console.log(data);

        console.log("Star Rattings : "+$("#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-4-5 > span").text())
        console.log($('#acrCustomerReviewText').text()+" found...!");
    });
};
function splitStr(str) {
    var string =str.substring(str.indexOf("("),str.length).replaceAll("|",",");
   return(string);
}

/*
bellow part is perfornming product id  generation process  
*/

//create main link // need to alter ....
function findtheproductinflipkart(FlipkartLink){
    req(FlipkartLink,(error,response,html)=>{
        if(!error){
            const $=cherio.load(html);
            const link=($("._1fQZEK").attr('href'));
            Flipkartdetials("https://www.flipkart.com"+link);
        }
    })
    }
    let Name ="mi tv 4x 32 inch".toLowerCase().trim();
    let fliplink=Name.replace(" "+"%20%20");
    let FlipkartLink="https://www.flipkart.com/search?q="+fliplink+"&otracker=AS_Query_HistoryAutoSuggest_5_0&otracker1=AS_Query_HistoryAutoSuggest_5_0&marketplace=FLIPKART&as-show=on&as=off&as-pos=5&as-type=HISTORY";
    requirements=Name.split(" ");

  findtheproductinflipkart(FlipkartLink)
    
    function findtheproductinamazon(Amazonink){
        req(AmazonLink,(error,response,html)=>{
            if(!error){
                const $=cherio.load(html);
                const link=($("#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(5)").attr("data-asin"))
                Amazondetials("https://www.amazon.in/dp/"+link);
            }
        })
    }
    let amlink=Name.replaceAll(" ","+");
    let AmazonLink="https://www.amazon.in/s?k="+amlink

    findtheproductinamazon("https://www.amazon.in/s?k=philipse+trimer&crid=896KYIVK7LQR&sprefix=philips+trimer%2Caps%2C298&ref=nb_sb_noss_2")