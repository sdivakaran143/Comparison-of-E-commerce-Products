const req =require("request"),cherio=require('cheerio'),axios=require("axios"),findmainpage=require("./productpage");

let FlipkartObj={};
let AmazonObj={};


function storefilpkart(listname,listLink,requirements){
    for(let i=0;i<requirements.length;i++){
            if(!listname.includes(requirements[i])){
                break;
            }

            if(i==requirements.length-1){
                // if(listname.includes(requirements[i])){FlipkartObj[listname]=("https://www.flipkart.com"+listLink); 
                    findmainpage.Flipkartdetials(("https://www.flipkart.com"+listLink));
                    // break;}
            }
            
        }
}

function findtheproductinflipkart(FlipkartLink,requirements){
req(FlipkartLink,(error,response,html)=>{
    if(!error){
        const $=cherio.load(html);

        $('._1AtVbE').each((i, val) => {
            if ($('div').hasClass('_2WkVRV')) {
                storefilpkart(($(val).find('.IRpwTa').text()).toLowerCase(),$(val).find('.IRpwTa').attr('href'),requirements);
            } else if ($('div').hasClass('_4rR01T')) {
                storefilpkart(($(val).find('._4rR01T').text()).toLowerCase(),$(val).find('._1fQZEK').attr('href'),requirements);
            }
            else if ($('a').hasClass('s1Q9rs')) {
                storefilpkart(($(val).find('.s1Q9rs').text()).toLowerCase(),$(val).find('.s1Q9rs').attr('href'),requirements);
            } else { console.log("Not Found") }
        })
    }
    
    console.log(Object.values(FlipkartObj));
});
}
let Name ="mi tv 4a".toLowerCase().trim();
let fliplink=Name.replaceAll(" ","%20%20");
let FlipkartLink="https://www.flipkart.com/search?q="+fliplink+"&otracker=AS_Query_HistoryAutoSuggest_5_0&otracker1=AS_Query_HistoryAutoSuggest_5_0&marketplace=FLIPKART&as-show=on&as=off&as-pos=5&as-type=HISTORY";
requirements=Name.split(" ");
findtheproductinflipkart(FlipkartLink,requirements)


function findtheproductinamazon(AmazonLink,requirements){
    // req({url: AmazonLink, gzip: true}, (error,response,html) => {
        req(AmazonLink,(error,response,html)=>{
        if(!error){
            const $=cherio.load(html);
            $(".s-card-container").each((i,val)=>{
                const listname=$(val).find(".a-color-base").text().toLowerCase();
                for(let i=0;i<requirements.length;i++){
                    if(!(($(val).find('.a-color-secondary').text())=="Sponsored")){
                        if(!listname.includes(requirements[i])){
                            break;
                        }
                        if(i==(requirements.length-1)){
                            AmazonObj[listname]="https://www.amazon.in/"+$(val).find('.a-link-normal').attr('href');
                            findmainpage.Amazondetials(("https://www.amazon.in/"+$(val).find('.a-link-normal').attr('href')));
                        }
                    }
                }
            })//a-color-secondary
            // let json =JSON.stringify(AmazonObj); 
            // console.log(json);
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
