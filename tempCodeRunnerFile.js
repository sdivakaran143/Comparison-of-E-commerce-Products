 $(".sg-col-inner").each((i,val)=>{
                console.log("new")
                const listname=$(val).find(".a-link-normal").text().toLowerCase();
                console.log(listname);
                for(let i=0;i<requirements.length;i++){
                    if(!listname.includes(requirements[i])){break;}
                    if(requirements.length-1==i){FlipkartObj[listname]="https://www.amazon.in/dp/"+($(".a-link-normal").attr('href'))}
                }
            })
