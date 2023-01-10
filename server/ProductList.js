const { count } = require("console");
const req =require("request"),cherio=require('cheerio'),axios=require("axios"),fs=require('fs'),findmainpage=require("./productpage");
// let FlipkartObj={};
// let AmazonObj={};

let flipkartproducts=[];
let amazonproducts=[];
let z=0;
let amz=0;
let flip=0;

function storefilpkart(listname,listLink,image,requirements){
    // console.log("flipc   "+z++);
    for(let i=0;i<requirements.length;i++){
            if(!listname.includes(requirements[i])&&!requirements[i].includes("and")){
                break;
            }

            if(i==requirements.length-1){
                // console.log(listname);

                //  if(listname.includes(requirements[i])){FlipkartObj[listname]=("https://www.flipkart.com"+listLink);  
                findmainpage.Flipkartdetials(("https://www.flipkart.com"+listLink),flip);
                flipkartproducts.push({
                    id:++flip,
                    name:listname,
                    link:("https://www.flipkart.com"+listLink),
                    image:image,
                    detials:{
                        "site":"flipkart"
                    }
                });
  
            }
            
        }
}
function findtheproductinflipkart(FlipkartLink,requirements){
    console.log("flip  "+z++);

req(FlipkartLink,(error,response,html)=>{
    if(!error){
        const $=cherio.load(html);
        requirements=(($("._10Ermr").children('span').text()).toLowerCase().trim()).split(" ");
        $('._1AtVbE').each((i, val) => {
            let listname,listLink,image;
            if ($('div').hasClass('_2WkVRV')) {
                listname=($(val).find('.IRpwTa').text()).toLowerCase();
                listLink=$(val).find('.IRpwTa').attr('href')
                image=$(val).find('._396cs4').attr('src')
            } else if ($('div').hasClass('_4rR01T')) {
                listname=($(val).find('._4rR01T').text()).toLowerCase()
                listLink=$(val).find('._1fQZEK').attr('href')
                image=$(val).find('._396cs4').attr('src')
            }
            else if ($('a').hasClass('s1Q9rs')) {
                listname=($(val).find('.s1Q9rs').text()).toLowerCase()
                listLink=$(val).find('.s1Q9rs').attr('href')
                image=$(val).find('._396cs4').attr('src')
            } else { console.log("Not Found") }
            if(image==undefined){
                image=$(val).find('._2r_T1I').attr('src')
            }
            storefilpkart(listname,listLink,image,requirements)
        })
    }
    storeinjson();
    // console.log(objflipkart)
    // console.log(Object.keys(FlipkartObj));
});
}


function findtheproductinamazon(AmazonLink,requirements){
    console.log("amz");
    req({url: AmazonLink, gzip: true}, (error,response,html) => {
        // req(AmazonLink,(error,response,html)=>{
            console.log("amzon  "+z++);
            if(!error){
                const $=cherio.load(html);
                // console.log($("#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span.a-color-state.a-text-bold").text());
                if(""!=$(".a-text-italic").text()){
                    requirements=$(".a-text-italic").text().toLowerCase().split(" "); 
                    // var reqname=($("#search > span > div > h1 > div > div.sg-col-14-of-20.sg-col.s-breadcrumb.sg-col-10-of-16.sg-col-6-of-12 > div > div > span.a-color-state.a-text-bold").text().trim().toLowerCase())
                    // requirements=(reqname.substring(1,reqname.length-1)).split(" "); 
                }
                console.log(requirements);
                $(".s-card-container").each((i,val)=>{
                    const listname=$(val).find(".a-text-normal").text().toLowerCase();
                for(let i=0;i<requirements.length;i++){
                    // console.log(listname);
                    if(!(($(val).find('.a-color-secondary').text())=="Sponsored")){
                        if(!listname.includes(requirements[i])&&!requirements[i].includes("and")){
                            break;
                        }
                        if(i==(requirements.length-1)){
                            let n=listname.indexOf("₹");
                            if(listname.indexOf("₹")==-1){
                                n=listname.length;
                            }
                            // AmazonObj[(listname).substring(0,n)]="https://www.amazon.in/"+$(val).find('.a-link-normal').attr('href');
                            // findmainpage.Amazondetials("https://www.amazon.in//HP-16-1-inch-Micro-Edge-Anti-Glare-16-C0136Ax/dp/B09SPZY67Q/ref=sr_1_3?keywords=hp+omen&qid=1672555776&sr=8-3")
                            findmainpage.Amazondetials(("https://www.amazon.in/"+$(val).find('.a-text-normal').attr('href')),amz);
                            amazonproducts.push({
                                id:++amz,
                                name:(listname).substring(0,n),
                                link:"https://www.amazon.in/"+($(val).find('.a-text-normal').attr('href')),
                                image:$(val).find('.s-image').attr('src'),
                                detials:{
                                    "site":"amazon"
                                }
                            });
                            // console.log($('.s-image').attr('src'));
                            // console.log(amz+findmainpage.print());
                            
                        }
                    }
                }
            })//a-color-secondary
            // let json =JSON.stringify(AmazonObj); 
            // console.log(json);
            // console.log(Object.values(AmazonObj));
            // storeinjson("amazon",objamazon);
            // if(!error){
                //     const $=cherio.load(html);
                //     const link=($("#search > div.s-desktop-width-max.s-desktop-content.s-opposite-dir.sg-row > div.s-matching-dir.sg-col-16-of-20.sg-col.sg-col-8-of-12.sg-col-12-of-16 > div > span:nth-child(4) > div.s-main-slot.s-result-list.s-search-results.sg-row > div:nth-child(5)").attr("data-asin"))
                //     console.log("Amazon link  : https://www.amazon.in/dp/"+link)
                // }
                // findtheproductinflipkart(FlipkartLink,requirements)
                storeinjson();
            }else{
                console.log("server is unreachable...");
            }
        })
        
    }
    // testCases
        // cable creation multiport adapter usb c
        // asssssus vivoboook
        // tp link ethernet adapter
        // data warehousing and dATA MINING"
        // object oriented development sysytem
        // hp victus
    
    
        
        //class="s-result-item s-asin sg-col-0-of-12 sg-col-16-of-20 AdHolder sg-col s-widget-spacing-small sg-col-12-of-16"
    ///html/body/div[1]/div[2]/div[1]/div[1]/div/span[3]/div[2]/div[3]
    ////*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[3]
    ///html/body/div[1]/div[2]/div[1]/div[1]/div/span[3]/div[2]/div[5]
    /////*[@id="search"]/div[1]/div[1]/div/span[3]/div[2]/div[5]
//#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(2) > div > div > div > a
//#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(3) > div > div > div > a
let mycount=0;
async function storeinjson() {
    mycount++;
    if(mycount==2&&amazonproducts.length==0){
        amazonproducts=[{
            "detials": {
              "name": "SEARCHED PRODUCTS NOT AVAILABLE",
          }
       }]
    }    
    if(mycount==2&&flipkartproducts.length==0){
        console.log("called..");
        flipkartproducts=[ {
            "detials": {
                 "productName":"SEARCHED PRODUCTS NOT AVAILABLE",
            }
            }]
       }
    var json={
        amazon:amazonproducts,
        flipkart:flipkartproducts
    }
    // fs.writeFileSync('F://webScrapingProject//client//myapp//src//database.json', JSON.stringify(json,null,5));
    fs.writeFile('F://webScrapingProject//client//myapp//src//database.json', JSON.stringify(json,10000,5), err => {
            if (err) throw err;
            console.log('data written successfully on db.json...');
        });
    }
    
    

    module.exports = {
        make_API_call : function(productname){
             flipkartproducts=[];
             amazonproducts=[];
             z=0;
             amz=0;
             flip=0;
            let Name =productname.toLowerCase().trim();
    
            let fliplink=Name.replaceAll(" ","%20%20");
            let FlipkartLink="https://www.flipkart.com/search?q="+fliplink+"&otracker=AS_Query_HistoryAutoSuggest_5_0&otracker1=AS_Query_HistoryAutoSuggest_5_0&marketplace=FLIPKART&as-show=on&as=off&as-pos=5&as-type=HISTORY";
            requirements=Name.split(" ");
            findtheproductinflipkart(FlipkartLink,requirements)   
            
            let amlink=Name.replaceAll(" ","+");
            let AmazonLink="https://www.amazon.in/s?k="+amlink
            findtheproductinamazon(AmazonLink,requirements)
        }
    }
