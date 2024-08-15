let timer_display=document.querySelector(".timer-display");
let str_btn=document.getElementById("str-btn");
let stp_btn=document.getElementById("stp-btn");
let pss_btn=document.getElementById("pss-btn");
let msec= 0;
let secs= 0;
let mins= 0;
let timerId=null;
str_btn.addEventListener('click',function(){
    if(timerId!==null){
        clearInterval(timerId);
    }
    timerId=setInterval(strTimer,10);
});
stp_btn.addEventListener("click",function(){
    clearInterval(timerId);

});
pss_btn.addEventListener("click",function(){
    clearInterval(timerId);
    timer_display.innerHTML=`00 : 00 : 00`;
    msec=secs=mins=0;
});
function strTimer(){
    msec++;
    if(msec==100){
        msec=0;
        secs++;
        if(secs==60){
            secs=0;
            mins++;
        }
    }
    let msecString=msec < 10? `0${msec}` : msec;
    let secString=secs < 10? `0${secs}` : secs;
    let minString=mins < 10? `0${mins}` : mins;
    timer_display.innerHTML=`${minString} : ${secString} : ${msecString} `;
}
