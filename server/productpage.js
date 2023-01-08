const axios =require("axios"),cherio=require('cheerio'),req =require("request"),fs=require("fs");
val={};
specobj={};
speck=[];
aboutarr=[]
filpval={};
flipspecobj={};
let databases;
// function  aboutFilter(about){
//     temp=about.split("    ");
//     for (let i = 0; i < temp.length; i++) {
//         if(temp[i].length>10){ 
//             aboutarr.push(temp[i])
//         }
//     }
// }
function flipkartSpecificationFliter(arr1,arr2){
    for (let i = 0; i < arr1.length; i++) {
        flipspecobj[arr1[i]]=arr2[i];
    }
}
function amazonSpecificationFilter(arr1,arr2){
    for (let i = 0; i < arr1.length; i++) {
        specobj[arr1[i]]=arr2[i];
    }

    // specif=specif.substring(specif.indexOf("Brand"));
    // specif=specif.substring(0,specif.indexOf("\n"));
    // arr=specif.split("     ");
    // for (let index = 0; index < arr.length; index++) {
    //     if((arr[index].length)>1){
    //         speck.push(arr[index]);
    //     }
    // }
    // for (let index = 0; index < speck.length; index+=2) {
    //    obj[speck[index]]=speck[index+1];
    // }
    // console.log(obj);
}

function initamazon(producturl) {
    return new Promise((res, re) => {
        req({url: producturl, gzip: true},(error,response,html)=> {
            // console.log(producturl);
            if(!error){
                console.log("Ast");
            const $=cherio.load(html);
            product=$("#productTitle").text().trim();
            spec=(product.substring(product.indexOf("(")));
            if(product.indexOf("(")>-1){
                if(product.substring(0,product.indexOf("("))!=""){
                    product=product.substring(0,product.indexOf("("));
                };
            }
            if(!($("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span > span:nth-child(2) > span.a-price-whole").text())){
            price=($("#corePrice_desktop > div > table > tbody > tr:nth-child(2) > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span.a-offscreen").text());
                if(price==""){
                    price=($("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole").text())
                 }
             }
             else{
                price=($("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span > span:nth-child(2) > span.a-price-whole").text());
             }
             //rating
             //=($("#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star > span").text()).substring(0,18)
             /*for (let i = 0; i < 6; i++) {
                    for (let j = 0; j <=9;j++) {
                        if(($("#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-"+i+"-"+j).text()).substring(0,18)) {
                            star=($("#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-"+i+"-"+j).text()).substring(0,18)
                            break;
                        }
                        else if(($("#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-"+i).text()).substring(0,18)){
                            star=($("#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-"+i).text()).substring(0,18);
                            break;
                        }
                    }
             }*/
             let star = $('#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-4-5 > span').text() + ' Rated by ' + $('#acrCustomerReviewText').text() + ' People';
             if ($('#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-4-5 > span').text().length == 0) {
                 star = $('#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-4 > span').text() + ' Rated by ' + $('#acrCustomerReviewText').text() + ' People';
                 if ($('#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-4 > span').text().length == 0) {
                     star = "0 ratings";
                 }
                }
                
             let rated =$("#acrCustomerReviewText").text().substring(0,($("#acrCustomerReviewText").text()).indexOf("s")+1);
             if(rated==""){
                rated="0 customers rated.."
             }
             var arrl=[];
             var arrr=[]
             $(".prodDetSectionEntry").each((i,val)=>{
                 if(($(val).text()).charAt(0)==" "){
                    arrl.push(($(val).text()).substring(1))
                }
                else arrl.push($(val).text())
            })
            $(".prodDetAttrValue").each((i,val)=>{
                if((($(val).text()).charAt(0))=="\n"){
                    arrr.push(($(val).text()).substring(18))
                }
                else arrr.push($(val).text())
            })
            amazonSpecificationFilter(arrl,arrr);
            let offerpercentage=($("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-size-large.a-color-price.savingPriceOverride.aok-align-center.reinventPriceSavingsPercentageMargin.savingsPercentage").text());
            if(offerpercentage==""){
                offerpercentage="0%"
            }
            
            //  about=($("#feature-bullets")).text().trim();
            //  aboutFilter(about)
            // if(price.length==""){
            //     console.log("reacll...");
            //     console.log(producturl);
            //     // await initamazon(producturl);
            // }
             val={
                name:product,
                price:price,
                specification :spec,
                rating:star.substring(0,17),
                rated:rated,
                offer:offerpercentage
                ,emi:($("#inemi_feature_div > span:nth-child(1)").text())
                ,deliveryChrage:($("#FREE_DELIVERY > div.a-section.a-spacing-none.icon-content > a").text().trim())
                ,replcement:($("#RETURNS_POLICY > span > div.a-section.a-spacing-none.icon-content > a").text())
                ,spec:specobj
            }
            // console.log(val);
            }
            res()
        })
})
}
idcount=1;
function updateAmazonJson(id){
    const data = fs.readFileSync('F://webScrapingProject//client//myapp//src//database.json', 'utf8')
    databases = JSON.parse(data)
    // console.log(val+"  "+id);
    // val = Object.assign(databases.amazon[id].detials, val)
    databases.amazon[id].detials=val;
    fs.writeFileSync('F://webScrapingProject//client//myapp//src//database.json', JSON.stringify(databases,null,5));
    // console.log(idcount);
    if((databases.amazon).length==idcount){
        process.exit()
    }
    idcount++;
    // console.log(databases);
}

function updateflipkartJson(id){
    const data = fs.readFileSync('F://webScrapingProject//client//myapp//src//database.json', 'utf8')
    databases = JSON.parse(data)
    // val = Object.assign(databases.flipkart[id].detials, val)
    databases.flipkart[id].detials=flipval;
    fs.writeFileSync('F://webScrapingProject//client//myapp//src//database.json', JSON.stringify(databases,null,5));

}

function initflipkart(producturl){
    return new Promise((res, re) => {
        console.log("Fst");
        req(producturl,(error,response,html)=>{
            if(!error){
                const $=cherio.load(html);
                var string=$(".B_NuCI").text().trim();
                var indexbracket=string.indexOf('(')-1;
                var productName=(string.substring(0,indexbracket));
                var spec=(string.substring(string.indexOf("(")));
                var price =($("._16Jk6d").text());
                var ratting=($('._3LWZlK').text().substring(0,3)+" out of 5 stars");
                var custrated=($("#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(2) > div > div > span._2_R_DZ > span > span:nth-child(1)").text()+"found...!");
        fliparrl=[];fliparrr=[];
                $("._1hKmbr").each((i,val)=>{
                    fliparrl.push($(val).text());
                })
                $("._21lJbe").each((i,val)=>{
                    fliparrr.push($(val).text());
                })
                flipkartSpecificationFliter(fliparrl,fliparrr);
                // console.log(fliparrl);
                // console.log(fliparrr);
                flipval={
                    productName:productName,
                    specification:spec,
                    price:price,
                    ratting:ratting,
                    cust:custrated,
                    offer:$("#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div.dyC4hf > div.CEmiEU > div > div._3Ay6Sb._31Dcoz > span").text()
                    ,emi:"Sign up for Flipkart Pay Later and get Flipkart Gift Card worth up to ₹500*"
                    ,deliveryChrage:"based on location"
                    ,replacement:$("._2MJMLX").text()
                    ,spec:flipspecobj
                }
            res();
            }
        })
    })
}

module.exports={
    Amazondetials:async function (producturl,id){
        await initamazon(producturl);
        updateAmazonJson(id);
    },
    Flipkartdetials :async function (producturl,id){
        await initflipkart(producturl);
        updateflipkartJson(id);
    },
    // Amazondetials:(producturl)=>{
    //     init(producturl).then(console.log(val))
    // },
    // makeobj: function (){
    //     return status
    // }
};
// let status=false;
// const amlin="https://www.amazon.in/Redmi-inches-Smart-L43M6-RA-Android/dp/B09G73T643/ref=sr_1_2_sspa?keywords=mi+tv&qid=1668266401&qu=eyJxc2MiOiI0LjcyIiwicXNhIjoiNC4zOCIsInFzcCI6IjMuNjMifQ%3D%3D&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1";
// const fliplin="https://www.flipkart.com/mi-4a-horizon-100-cm-40-inch-full-hd-led-smart-android-tv-20w-powerful-audio-bezel-less-frame/p/itm3c92e3fcfdeca?pid=TVSG36HHUKPKGJFC&lid=LSTTVSG36HHUKPKGJFCES4MSK&marketplace=FLIPKART&q=Mi%20tv%204a&store=ckf%2Fczl&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=1f8487a0-04b7-4109-a356-7cc2d311d196.TVSG36HHUKPKGJFC.SEARCH&ppt=sp&ppn=sp&ssid=0az5zwxvk00000001663344698985&qH=04e81d700cbf8360";
// Flipkartdetials(fliplin);
// Amazondetials(amlin)
        // process.on('exit', () => {
        //     Whatisthestatus()
        // })
        // function Whatisthestatus(){
        //     // console.log("exit....");
        //     status=true
        // }
