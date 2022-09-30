const hoursEI = document.getElementById("hour");
const minutesEI = document.getElementById("minutes");
const secoundsEI = document.getElementById("seconds");
const ampmEL = document.getElementById("ampm");
const mylist = document.getElementById("myList");
const gmt = new Date().getUTCHours();

function clockUpdate(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    // let gmtformate = h - 4;
    let ampm = "AM";
    if(h > 12 ){
      
        ampm = "PM";
    }
   
    h = h < 10 ? "0" + h : h;
    m = m < 10 ? "0" + m : m;
    s = s < 10 ? "0" + s : s;
    
    hoursEI.innerText = h;
    minutesEI.innerText = m;
    secoundsEI.innerText = s;
    ampmEL.innerText = ampm;
    setTimeout(() => {
        clockUpdate();
    }, 00005);
    
}
clockUpdate();
