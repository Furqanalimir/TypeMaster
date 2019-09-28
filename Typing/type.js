
window.onload = function(){
 var time = [0,0,0,0];
 var interval;
 var timeRunning = false;
 const testarea = document.querySelector("inpText");
const theTimer = document.querySelector("#timer");
const wrapper = document.querySelector("#inpText");
const EnteredText = document.querySelector("#inpText");
const textOrigin = document.querySelector(".main p").innerHTML;
const reset = document.querySelector("#reset");


function Reset(){
    
    clearInterval(interval);
    interval = null;
    time = [0,0,0,0];
    timeRunning = false;
    EnteredText.value = "";
    theTimer.innerHTML = "00:00:00";
    wrapper.style.borderColor = "gray";
}

function spellCheck(){
    var EnteredWord = EnteredText.value;
    var WordsCheck = textOrigin.substr(0,EnteredWord.length);
   
        
    if(textOrigin.length == EnteredWord.length || time[0] == 1){
        wrapper.style.borderColor = "black";
        clearInterval(interval);
    }
    else{

    
    if(EnteredWord === WordsCheck){
        wrapper.style.borderColor = "Green";        
     
    }
    else if (EnteredWord != WordsCheck) {
        wrapper.style.borderColor = "red";  
     
    }
       
    else{
        wrapper.style.borderColor = "grey";
    
    }
    }
}

function leadingzero(timer){
    if(timer <= 9){
        timer = "0" + timer; 
    }
    return timer;
}

function clock(){
    
    let currentTime = leadingzero(time[0]) + ":" + leadingzero(time[1]) + ":" + leadingzero(time[2]);
    theTimer.innerHTML = currentTime;
    time[3]++;

    time[0] = Math.floor((time[3]/100)/60);
    time[1] = Math.floor((time[3]/100) - (time[0] * 60));
    time[2] = Math.floor(time[3] - (time[1] * 100) - (time[0] * 6000));


}

function start(){
  
    let startInterval = wrapper.value.length;
    if(startInterval >=0 && !timeRunning){
        timeRunning = true;
            interval = setInterval(clock, 10);
         
    }
}

wrapper.addEventListener("keypress",start,false);
reset.addEventListener("click",Reset,false);
EnteredText.addEventListener("keyup", spellCheck, false);
//EnteredText.addEventListener("keypress", clock, false);
}