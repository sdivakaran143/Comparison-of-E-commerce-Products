const axios = require('axios');
const cheerio = require('cheerio');
const request = require('request');

function fetchPriceAmazon(productUrl) {
    axios.get(productUrl).then(({ data }) => {
        // console.log(code);
        const $ = cheerio.load(data);
        console.log('\nAmazon :');
        let productName = $('#title').text().trim();

        let productPrice = $('#corePrice_desktop > div > table > tbody > tr:nth-child(2) > td.a-span12 > span.a-price.a-text-price.a-size-medium.apexPriceToPay > span:nth-child(2)').text();
        // console.log(productName + "\n" + productPrice);
        if (productPrice.length == 0) {
            productPrice = $('#corePriceDisplay_desktop_feature_div > div.a-section.a-spacing-none.aok-align-center > span.a-price.aok-align-center.reinventPricePriceToPayMargin.priceToPay > span:nth-child(2) > span.a-price-whole').text();
            if (productPrice.length == 0) {
                productPrice = "NOT GIVEN";
            }
        }

        let productRatio = $('#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-4-5 > span').text() + ' Rated by ' + $('#acrCustomerReviewText').text() + ' People';
        if ($('#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-4-5 > span').text().length == 0) {
            productRatio = $('#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-4 > span').text() + ' Rated by ' + $('#acrCustomerReviewText').text() + ' People';
            if ($('#acrPopover > span.a-declarative > a > i.a-icon.a-icon-star.a-star-4 > span').text().length == 0) {
                productRatio = "NOT GIVEN";
            }
        }
        console.log(`Product Name : ${productName}\nProduct Price : ${productPrice}\nProduct Star Ratio : ${productRatio}`);

    });
}

const fetchPriceflipkart = (productUrl) => {
    axios.get(productUrl).then(({ data }) => {
        const $ = cheerio.load(data);
        console.log('\nFlipkart :');
        let productName = $('.B_NuCI').text().trim();

        let productPrice = $('._16Jk6d').text();
        let productRatio;
        if ($('div').hasClass('_2d4LTz')) {
            productRatio = $('._2d4LTz').text() + ' out of 5 stars rated by ' + $('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(3) > div > div:nth-child(2) > div > div > span._2_R_DZ > span > span:nth-child(1)').text() + ' People';//_3LWZlK
        } else if ($('div').hasClass('_3LWZlK')) {
            // console.log("hi");
            let floatVal = parseFloat($('._3LWZlK').text()).toFixed(1);
            productRatio = floatVal + ' out of 5 stars rated by ' + $('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div._3Zuayz > div > div > span._2_R_DZ > span').text() + ' People';
        }
        else {
            productRatio = "NOT GIVEN";
        }
        // if ($('._2d4LTz').text().length == 0) {
        //     productRatio = $('._2d4LTz').text() + ' out of 5 stars rated by ' + $('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(2) > div > div:nth-child(2) > div > div > span._2_R_DZ > span > span:nth-child(1)').text() + ' People';
        // if ($('._2d4LTz').text().length == 0) {

        console.log(`Product Name : ${productName}\nProduct Price : ${productPrice}\nProduct Star Ratio : ${productRatio}\n\n`);

        // let checkItem = $('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(3) > div._3Z0lU8 > div').text();
        // console.log($('#container > div > div._2c7YLP.UtUXW0._6t1WkM._3HqJxg > div._1YokD2._2GoDe3 > div._1YokD2._3Mn1Gg.col-8-12 > div:nth-child(3) > div._3Z0lU8 > div.rd9nIL').text());
    })
}

//Croma Product detail :
const fetchProductCroma = (productUrl) => {
    request(productUrl, (error, response, html) => {
        if (!error) {
            // console.log(html);
            const $ = cheerio.load(html);
            // axios.get(productUrl).then(({ data }) => {
            // const $ = cheerio.load(data);
            console.log('Chroma :');

            let productName = $('#pdpdatael > div.cp-section.banner-spacing.show-pdp-icon > div.container > div > div > div > div.col-md-6.right-alignElement > div > ul > li > h1').text()
            console.log(productName);

            console.log($('*[@id="pdp-product-price"]').text());

            // let productPrice = $("#pdp-product-price").text();
            // let productPrice = $('.amount').text();

            // Not Working :
            // let ModelSeries = $('*[@id="specification_container"]/ul[2]/li[2]/ul[2]/li[2]').text();
            // let ModelNumber = $('.cp-specification-spec-details').text();

            // let productPrice = $('.pdp-product-price').text();
            // console.log("product Name :" + productName + '\n' + "product Price :" + productPrice);
        }
    });
}



//get List and Link:

//Flipkart :
const getFlipkartProductList = (productListUrl, itemName, brand, model) => {
    axios.get(productListUrl).then(({ data }) => {
        const $ = cheerio.load(data);
        console.log("List :");

        $('._1AtVbE').each((i, val) => {


            let listName;
            let listLink;
            let tempListName;
            let checkName;
            // console.log($(val).find('._2WkVRV').text());
            if ($('div').hasClass('_2WkVRV')) {
                // console.log("hi");
                checkName = $(val).find('._2WkVRV').text()
                listName = $(val).find('.IRpwTa').text();
                listLink = $(val).find('.IRpwTa').attr('href');
                tempListName = checkName.toLowerCase();
            } else if ($('div').hasClass('_4rR01T')) {

                listName = $(val).find('._4rR01T').text();
                // console.log(listName);
                listLink = $(val).find('._1fQZEK').attr('href');
                tempListName = listName.toLowerCase();
            }
            else if ($('a').hasClass('s1Q9rs')) {
                listName = $(val).find('.s1Q9rs').text();
                listLink = $(val).find('.s1Q9rs').attr('href');
                tempListName = listName.toLowerCase();
            } else { console.log("Not Found") }
            if (tempListName != null && tempListName.includes(itemName.toLowerCase()) && ((tempListName.includes(brand.toLowerCase())) || (tempListName.includes(model.toLowerCase())))) {
                console.log(listName + '\n');
                fetchPriceflipkart("https://www.flipkart.com" + listLink);
            }
        })
    })
}

//Amazon :
const getAmazonProductList = (productListUrl, itemName) => {
    request({url: productListUrl, gzip: true}, (error,response,html) => {
        if (!error) {
            const $ = cheerio.load(html);
            console.log(html);
            console.log("List :");
            $('.s-result-item').each((i, val) => {
                const listName = $(val).find('.a-size-mini').text();
                const listLink = $(val).find('.a-link-normal').attr('href');
                let tempListName = listName.toLowerCase();
                // let tempListName = listName.split(' ')[0].toLowerCase();  OPTIONAL
                if (tempListName.includes(itemName.toLowerCase()) && !listName.includes('(Renewed)')) {
                    console.log(listName + '\n');
                    fetchPriceAmazon("https://www.amazon.in" + listLink);
                }
            })
        }
    });
}

// //Amazon :
// const getAmazonProductList = (productListUrl, itemName) => {
//     request(productListUrl, (error, response, html) => {
//         if (!error) {
//             const $ = cheerio.load(html);
//             // console.log(html);

//             let listName = "";
//             let listLink = "";
//             let tempListName = "";
//             let checkName = "";
//             $('.s-result-item').each((i, val) => {
//                 // console.log($('spa').hasClass('.a-size-base-plus'));
//                 // if ($('span').hasClass('a-size-base-plus')) {
//                 //     console.log("hi");//a-size-medium
//                 //     checkName = $(val).find('._2WkVRV').text()
//                 //     listName = $(val).find('.a-size-base-plus').text();
//                 //     listLink = $(val).find('.a-link-normal').attr('href');
//                 //     tempListName = listName.toLowerCase();
//                 // } else {
//                 // console.log("hi");
//                 listName = $(val).find('.a-size-medium').text();
//                 listLink = $(val).find('.a-link-normal').attr('href');
//                 tempListName = listName.toLowerCase();
//                 // }
//                 // let tempListName = listName.split(' ')[0].toLowerCase();  OPTIONAL
//                 if (tempListName.includes(itemName.toLowerCase()) && !listName.includes('(Renewed)')) {
//                     // console.log(listName + '\n' + listLink);
//                     fetchPriceAmazon("https://www.amazon.in" + listLink);
//                 }
//             })
//         }
//     });
// }

//Chroma :
const getChromaProductList = (productListUrl) => {

    request(productListUrl, (error, response, html) => {
        if (!error) {
            // console.log(html);
            const $ = cheerio.load(html);
            console.log($('[id="\32 55915"] > div.product-info > div:nth-child(1) > h3 > a').text());
        }
    });

    // axios.get(productListUrl).then(({ data }) => {
    //     // console.log(data);
    //     const $ = cheerio.load(data);
    //     console.log($('*[@id="255915"]/div[2]/div[1]/h3').text());
    //     // console.log("List :");
    //     $('.product-item').each((i, val) => {
    //         // const item = $(val).text();
    //         console.log(i);
    //     });
    // })
}

// test case : 1
const InputName = "philips vacuum cleaner";
const brand = "";
const model = "";

// const InputName = "casio watch";
// const brand = "";
// const model = "";
// const InputName = "dell laptop";
// const InputName = "hp laptop";

// test case : 2
// Need to remove the not stack and not rated item
// const InputName = "Victus gaming laptop";

// test case : 3
// const InputName = "iphone 14 pro max gold";

// test case : 4
// const InputName = "wall clocks";
// const brand = "";
// const model = "";

// test case : 5
// const InputName = "wall sticker";

// test case : 6
// const InputName = "outdoor light";


const startingWord = InputName.split(' ')[0];
const ItemName = (InputName.replace(/\s/g, '%20'));

// getFlipkartProductList('https://www.flipkart.com/search?q=$' + ItemName + '&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off', startingWord, brand, model);
// console.log('https://www.amazon.in/s?k=' + ItemName + '&crid=1JAHVN17F0AV4&sprefix=victus+gaming+lapto%2Caps%2C1244&ref=nb_sb_noss_2');
console.log('https://www.amazon.in/s?k=' + ItemName + '&crid=1JAHVN17F0AV4&sprefix=victus+gaming+lapto%2Caps%2C1244&ref=nb_sb_noss_2');
getAmazonProductList('https://www.amazon.in/s?k=' + ItemName + '&crid=1JAHVN17F0AV4&sprefix=victus+gaming+lapto%2Caps%2C1244&ref=nb_sb_noss_2', startingWord);

// fetchProductCroma('https://www.croma.com/philips-dry-vacuum-cleaner-0-4-litres-tank-fc6726-01-deep-black-/p/255915');
// getChromaProductList('https://www.croma.com/search/?q=' + ItemName + '%3Arelevance%3AZAStatusFlag%3Atrue%3AexcludeOOSFlag&text=philips%20vacuum%20cleaner');