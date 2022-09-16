const axios =require("axios"),cherio=require('cheerio');
const price=(producturl)=>{
    axios.get(producturl).then(({data})=>{
        const $ =cherio.load(data);
        console.log("The products value is "+$("._16Jk6d").text());
        //console.log(data);
    });
};

price(
   "https://www.flipkart.com/acer-19-5-inch-hd-led-backlit-tn-panel-monitor-v206hql/p/itmeygcwhszg2vfh?pid=MONEYGCHK5GHSN6B&lid=LSTMONEYGCHK5GHSN6BZGY24X&marketplace=FLIPKART&store=6bo%2Fg0i%2F9no&srno=b_1_1&otracker=hp_omu_Best%2Bof%2BElectronics_4_3.dealCard.OMU_TXZMLQJZFW8U_3&otracker1=hp_rich_navigation_PINNED_neo%2Fmerchandising_NA_NAV_EXPANDABLE_navigationCard_cc_3_L2_view-all%2Chp_omu_PINNED_neo%2Fmerchandising_Best%2Bof%2BElectronics_NA_dealCard_cc_4_NA_view-all_3&fm=neo%2Fmerchandising&iid=48fb71ef-d12d-4b0a-a92d-e36e7ab58757.MONEYGCHK5GHSN6B.SEARCH&ppt=hp&ppn=homepage&ssid=up9wxozlj40000001663324480223");