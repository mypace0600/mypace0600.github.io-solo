const clockTitle = document.querySelector(".js-clock");

const lastXmas = new Date("2021-12-25")
const xmas = new Date("2022-12-25");
const year = xmas.getTime()-lastXmas.getTime();

function dDay(){
    const today = new Date();
    const gap = xmas.getTime()-today.getTime();

    if(gap<0){
        xmas.setTime(xmas.getTime()+year);
    }

    const day = Math.floor(gap/(1000*60*60*24));           
    const hours = String(Math.floor(gap%(1000*60*60*24)/(1000*60*60))).padStart(2, "0");
    const min = String(Math.floor(gap%(1000*60*60)/(1000*60))).padStart(2, "0");
    const sec = String(Math.floor(gap%(1000*60)/(1000))).padStart(2, "0");

    clockTitle.innerText=`${day}d ${hours}h ${min}m ${sec}s`;
}

setInterval(dDay,1000);