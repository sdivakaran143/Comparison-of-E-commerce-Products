const req =require("request"),cherio=require('cheerio'),axios=require("axios");
function ChromaDetials(chromalink){
    req(chromalink,(error,response,html)=>{
        if(!error){
            const $ =cherio.load(html);
            console.log($(".pd-title").text());
            console.log($(".tax-text").text());
               
        }
           
    
    })
}
let chromalink="https://www.croma.com/mi-5a-108-cm-43-inch-full-hd-led-smart-android-tv-with-google-assistance-2022-model-/p/259209";
ChromaDetials(chromalink);