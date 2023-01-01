const axios =require("axios"),cherio=require('cheerio'),req =require("request"),fs=require("fs");
val={};
specobj={};
speck=[];
aboutarr=[]

// function  aboutFilter(about){
//     temp=about.split("    ");
//     for (let i = 0; i < temp.length; i++) {
//         if(temp[i].length>10){ 
//             aboutarr.push(temp[i])
//         }
//     }
// }
function specificationFilter(arr1,arr2){
    
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

function init(producturl) {
    return new Promise((res, re) => {
        req({url: producturl, gzip: true},(error,response,html)=> {
            console.log("st");
            const $=cherio.load(html);
            product=$("#title").text().trim();
            spec=(product.substring(product.indexOf("(")));
            if(product.indexOf("(")>-1){
                product=product.substring(0,product.indexOf("("));
            }
            if(!($("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span > span:nth-child(2) > span.a-price-whole").text())){
                price=($("#corePrice_desktop > div > table > tbody > tr:nth-child(2) > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span.a-offscreen").text());
                 if(!$("#corePrice_desktop > div > table > tbody > tr:nth-child(2) > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span.a-offscreen").text()){
                     price=("Unable to Fetch The Product Price ....")
                 }
             }
             else{
                 price=($("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span > span:nth-child(2) > span.a-price-whole").text());
             }
             var star;
             //rating
             //=($("#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star > span").text()).substring(0,18)
             for (let i = 0; i < 6; i++) {
                    if(($("#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-"+i).text()).substring(0,18)) 
                        star=($("#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-"+i).text()).substring(0,18) 
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
            specificationFilter(arrl,arrr);
            
             about=($("#feature-bullets")).text().trim();
            //  aboutFilter(about)
             val={
                name:product,
                price:price,
                specification :spec,
                rating:star
                ,rated:$("#acrCustomerReviewText").text().substring(0,($("#acrCustomerReviewText").text()).indexOf("s")+1)
                ,offer:($("#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-size-large.a-color-price.savingPriceOverride.aok-align-center.reinventPriceSavingsPercentageMargin.savingsPercentage").text())
                ,emi:($("#inemi_feature_div > span:nth-child(1)").text())
                ,deliveryChrage:($("#FREE_DELIVERY > div.a-section.a-spacing-none.icon-content > a").text().trim())
                ,replcement:($("#RETURNS_POLICY > span > div.a-section.a-spacing-none.icon-content > a").text())
                ,spec:specobj,
                arr:aboutarr
            }
            // console.log(val);
            res()
        })
})
}
function updateAmazonJson(id){
    const data = fs.readFileSync('./client/myapp/src/database.json', 'utf8')
    const databases = JSON.parse(data)
    val = Object.assign(databases.amazon[id].detials, val)
    databases.amazon[id].detials=val;
    fs.writeFileSync('./client/myapp/src/database.json', JSON.stringify(databases,null,5));
    // console.log(user);
}
module.exports={
    Flipkartdetials : function (producturl){
        
    }, 
    Amazondetials:async function (producturl,id){
        await init(producturl);
        updateAmazonJson(id);
    },
    // Amazondetials:(producturl)=>{
    //     init(producturl).then(console.log(val))
    // },
    print:function hai(){
        console.log(val);
    }
};

// const amlin="https://www.amazon.in/Redmi-inches-Smart-L43M6-RA-Android/dp/B09G73T643/ref=sr_1_2_sspa?keywords=mi+tv&qid=1668266401&qu=eyJxc2MiOiI0LjcyIiwicXNhIjoiNC4zOCIsInFzcCI6IjMuNjMifQ%3D%3D&sr=8-2-spons&sp_csd=d2lkZ2V0TmFtZT1zcF9hdGY&psc=1";
// const fliplin="https://www.flipkart.com/mi-4a-horizon-100-cm-40-inch-full-hd-led-smart-android-tv-20w-powerful-audio-bezel-less-frame/p/itm3c92e3fcfdeca?pid=TVSG36HHUKPKGJFC&lid=LSTTVSG36HHUKPKGJFCES4MSK&marketplace=FLIPKART&q=Mi%20tv%204a&store=ckf%2Fczl&srno=s_1_2&otracker=search&otracker1=search&fm=Search&iid=1f8487a0-04b7-4109-a356-7cc2d311d196.TVSG36HHUKPKGJFC.SEARCH&ppt=sp&ppn=sp&ssid=0az5zwxvk00000001663344698985&qH=04e81d700cbf8360";
// Flipkartdetials(fliplin);
// Amazondetials(amlin)