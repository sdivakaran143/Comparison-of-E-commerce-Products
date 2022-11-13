let data = [
    {
        "id": 1,
        "name": "Zahid",
        "county": "pakistan"
    },
    {
        "id": 2,
        "name": "John",
        "country": "USA"
    },
    {
        "id": 3,
        "name": "Parkash",
        "country": "india"
    }
]


const fs = require('fs');
// async function json_reader (path, call) {
//     fs.readFile(path, 'utf-8', (err, data) => {
//         if (err) {
//             return call && call(err);
//         }
//         try {
//             const js_data = JSON.parse(data);
//             return call && call(null, js_data);
//         } catch (err) {
//             return call && call(err);
//         }     
//     });
// }
    //  json_reader('./test1.json', (err, data) => {
    //     if (err) {
    //         console.log(err);
    //     } else {
    //         console.log(data[1].list1);
    //     }
    // });

fs.writeFile('./test1.json', JSON.stringify(data, null, 2), err => {
    if (err) {
        console.log(err);
    } else {
        console.log('data written successfully');
    }
});