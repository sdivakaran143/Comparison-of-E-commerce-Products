const axios =require("axios"),cherio=require('cheerio');
const price=(producturl)=>{
    axios.get(producturl).then(({data})=>{
        const $ =cherio.load(data);
        console.log("The products is : "+$(".B_NuCI").text().substr(0,($(".B_NuCI").text()).length/3)+"...");
        console.log("The products value is "+$("._16Jk6d").text());
        //console.log(data);
    });
};
let Link="https://www.flipkart.com/acer-nitro-27-inch-full-hd-led-backlit-ips-panel-165-gaming-monitor-vg270s/p/itme964fae95303f?pid=MONG9R2NTE8YVHEA&lid=LSTMONG9R2NTE8YVHEAELDQIL&marketplace=FLIPKART&store=6bo%2Fg0i%2F9no&srno=b_1_2&otracker=hp_omu_Best%2Bof%2BElectronics_4_3.dealCard.OMU_TXZMLQJZFW8U_3&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all%2Chp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_4_NA_view-all_3&fm=neo%2Fmerchandising&iid=48fb71ef-d12d-4b0a-a92d-e36e7ab58757.MONG9R2NTE8YVHEA.SEARCH&ppt=hp&ppn=homepage&ssid=up9wxozlj40000001663324480223";
price(Link);