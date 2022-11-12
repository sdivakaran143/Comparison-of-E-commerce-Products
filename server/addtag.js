function addatpage(productName,link){
    const ele=document.createElement('a');
    const text=document.createTextNode(productName);
    ele.appendChild(text);
    document.getElementById("addhere").appendChild(ele);
    ele.classList.add("list");
    ele.setAttribute('href',link);
    
}
addatpage("summma","https://www.amazon.in//inches-Horizon-Ready-Android-L32M6-EI/dp/B08WPPDFLD/ref=sr_1_9?keywords=mi+tv&qid=1668102731&qu=eyJxc2MiOiI0LjcyIiwicXNhIjoiNC4zOCIsInFzcCI6IjMuNjMifQ%3D%3D&sr=8-9");
addatpage("summma","https://www.amazon.in//inches-Horizon-Ready-Android-L32M6-EI/dp/B08WPPDFLD/ref=sr_1_9?keywords=mi+tv&qid=1668102731&qu=eyJxc2MiOiI0LjcyIiwicXNhIjoiNC4zOCIsInFzcCI6IjMuNjMifQ%3D%3D&sr=8-9");

// const elm=document.createElement('a');
// const t=document.createTextNode("gvvgvgvgvvvvgv");
// console.log(t);
// elm.appendChild(t);
// console.log(elm);
// document.getElementById("addhere").appendChild(elm)
// t.nodeValue="g"
// elm.classList.add("summma");