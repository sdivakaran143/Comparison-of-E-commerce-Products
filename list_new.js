const req =require("request"),cherio=require('cheerio'),axios=require("axios");
let FlipkartObj={};
let AmazonObj={};
function findtheproductinflipkart(FlipkartLink,requirements){
req(FlipkartLink,(error,response,html)=>{
    if(!error){
        const $=cherio.load(html);
        $("._2kHMtA").each((i,val)=>{
            const listname=$(val).find("._4rR01T").text().toLowerCase();
            for(let i=0;i<requirements.length;i++){
                if(!listname.includes(requirements[i])){break;}
                if(requirements.length-1==i){FlipkartObj[listname]=("https://www.flipkart.com"+$(val).find("._1fQZEK").attr('href'))}
            }
        })
        // const link=($("._1fQZEK").attr('href'));
        // console.log("\nFLIPKART LINK : \nhttps://www.flipkart.com"+link)
    }
    console.log(Object.values(FlipkartObj));
})
}
let Name ="philips vacuum cleaner".toLowerCase().trim();
let fliplink=Name.replace(" "+"%20%20");
let FlipkartLink="https://www.flipkart.com/search?q="+fliplink+"&otracker=AS_Query_HistoryAutoSuggest_5_0&otracker1=AS_Query_HistoryAutoSuggest_5_0&marketplace=FLIPKART&as-show=on&as=off&as-pos=5&as-type=HISTORY";
requirements=Name.split(" ");
findtheproductinflipkart(FlipkartLink,requirements)


function findtheproductinamazon(AmazonLink,requirements){
    req(AmazonLink,(error,response,html)=>{
        if(!error){
            const $=cherio.load(html);
            $(".s-card-container").each((i,val)=>{
                const listname=$(val).find(".a-size-medium").text().toLowerCase();
                for(let i=0;i<requirements.length;i++){
                    if(!listname.includes(requirements[i])){break;}
                    if(requirements.length-1==i && !(($(val).find('.a-color-secondary').text())=="Sponsored")){AmazonObj[listname]="https://www.amazon.in/"+$(val).find('.a-link-normal').attr('href')
                }
                }
            })//a-color-secondary
            console.log(Object.values(AmazonObj));
            // if(!error){
            //     const $=cherio.load(html);
            //     const link=($("#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(5)").attr("data-asin"))
            //     console.log("Amazon link  : https://www.amazon.in/dp/"+link)
            // }
        }
    })
}
let amlink=Name.replaceAll(" ","+");
let AmazonLink="https://www.amazon.in/s?k="+amlink
findtheproductinamazon(AmazonLink,requirements)

//class="s-result-item s-asin sg-col-0-of-12 sg-col-16-of-20 AdHolder sg-col s-widget-spacing-small sg-col-12-of-16"
///html/body/div[1]/div[2]/div[1]/div[1]/div/span[3]/div[2]/div[3]
////*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[3]
///html/body/div[1]/div[2]/div[1]/div[1]/div/span[3]/div[2]/div[5]
/////*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[5]
//#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(2) > div > div > div > a
//#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(3) > div > div > div > a
