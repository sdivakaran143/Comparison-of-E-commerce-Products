const axios =require("axios"),cherio=require('cheerio');

const AmazonLinkFetch=(producturl)=>{
    axios.get(producturl).then(({data})=>{
        const $ =cherio.load(data);
        console.log($(".sg-col-inner").text());
    });
}; 
let productname="oneplus phone";
productname=productname.replaceAll(" ","+");
let producturl="https://www.amazon.in/s?k="+productname;

AmazonLinkFetch(producturl);