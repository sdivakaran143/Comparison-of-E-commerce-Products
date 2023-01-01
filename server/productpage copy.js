const axios =require("axios"),cherio=require('cheerio'),req =require("request");
val="hai"
module.exports={
    Flipkartdetials : function (producturl){
        axios.get(producturl).then(({data})=>{
            const $ =cherio.load(data);
            var string=$(".B_NuCI").text().trim();
            console.log("\nthe price at Flipkart  : ");
            console.log("The products is : "+string.substring(0,string.indexOf("(")));
            console.log("Product spec is : "+string.substring(string.indexOf("(")));
            console.log("The products value is "+$("._16Jk6d").text());
            console.log("Star Ratting : "+$('._3LWZlK').text().substring(0,3)+" out of 5 stars");
            console.log($("#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(2) > div > div > span._2_R_DZ > span > span:nth-child(1)").text()+"found...!");
            //console.log(data);
        });
    }, 
    Amazondetials:function (producturl){
        var val="hello";
        axios.get(producturl).then(({data})=>{
            const $ =cherio.load(data);
            var string=$("#title").text().trim();
            console.log("\nthe price at Amazon  : ");
            console.log("The products is : "+string.substring(0,string.indexOf("(")));
            console.log("Product spec is : "+string.substring(string.indexOf("(")));
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
    },
    print:function hai(){
        console.log(val);
    }
};

// const amlin="https://www.amazon.in/Redmi-inches-Smart-L43M6-RA-Android/dp/B09G73T643/ref=sr_1_2_sspa?keywords=mi+tv&qid=1668266401&qu=eyJxc2MiOiI0LjcyIiwicXNhIjoiNC4zOCIsInFzcCI6IjMuNjMifQ%3D%3D&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1";
// const fliplin="https://www.flipkart.com/mi-4a-horizon-100-cm-40-inch-full-hd-led-smart-android-tv-20w-powerful-audio-bezel-less-frame/p/itm3c92e3fcfdeca?pid=TVSG36HHUKPKGJFC&lid=LSTTVSG36HHUKPKGJFCES4MSK&marketplace=FLIPKART&q=Mi%20tv%204a&store=ckf%2Fczl&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=1f8487a0-04b7-4109-a356-7cc2d311d196.TVSG36HHUKPKGJFC.SEARCH&ppt=sp&ppn=sp&ssid=0az5zwxvk00000001663344698985&qH=04e81d700cbf8360";
// Flipkartdetials(fliplin);
// Amazondetials(amlin)