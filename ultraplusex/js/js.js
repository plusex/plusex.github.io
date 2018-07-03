function timer(){

    var minute = parseInt(window.localStorage.getItem('minutes'));
    var second = parseInt(window.localStorage.getItem('seconds'));
    var clock = document.querySelector('#clock');
    var form = document.querySelector('#aksia');
    var formTwo = document.querySelector('#ne-aksia');
    var timeOut = document.querySelector('#timeOut');
    console.log(timeOut);
    var end = false;
     
    if( second > 0 ) second--;
    else{
        second = 59;
        if( minute > 0 ) minute--;
        else {
            minute = 0;
            second = 59;
            end = true;
        }
    }
 
    if(end){
        clearInterval(intervalID);
        minute.innerHTML = "0";
        form.style.display = "none";
        timeOut.style.display = "block";
        clock.style.display = "none";
        formTwo.style.display = "flex";
    }else{
    	window.localStorage.setItem('minutes', minute)
        document.querySelector('#minute').innerHTML = minute;
        if(second < 10) {
            second = "0" + second;
        }
    	window.localStorage.setItem('seconds', second)
        document.querySelector('#second').innerHTML = second;
    }
}
window.intervalID = setInterval(timer, 1000);