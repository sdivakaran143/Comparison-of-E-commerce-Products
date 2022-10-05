const axios =require("axios"),cherio=require('cheerio');

const FlipkartLinkFetch=(producturl,list)=>{
    axios.get(producturl).then(({data})=>{
        const $ =cherio.load(data);
        for (let i = 2; i < 10; i++) {
            let producttitle=($('#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(' + i + ') > div > div > div > a > div._3pLy-c.row > div.col.col-7-12 > div._4rR01T').text().toLowerCase());
            for(let j=0;j<list.length;j++){
            if(producttitle.includes(list[j])||producttitle==''){}
            else{break;} if(j==list.length-1){
                console.log(i+"===========> "+producttitle);i=11;break;
            }}
        }  
    });
}; 
let Name ="1.5 ton hitachi".toLowerCase().trim();
let link=Name.replace(" "+"%20%20");
let FlipkartLink="https://www.flipkart.com/search?q="+link+"&otracker=AS_Query_HistoryAutoSuggest_5_0&otracker1=AS_Query_HistoryAutoSuggest_5_0&marketplace=FLIPKART&as-show=on&as=off&as-pos=5&as-type=HISTORY";
requirements=Name.split(" ");
FlipkartLinkFetch(FlipkartLink,requirements);
//document.querySelector("#container > div > div._36fx1h._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div:nth-child(2) > div:nth-child(2) > div > div")