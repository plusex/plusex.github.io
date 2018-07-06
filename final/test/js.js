function timer() {
    var hour = parseInt(window.localStorage.getItem('hours'));
    var minute = parseInt(window.localStorage.getItem('minutes'));
    var second = parseInt(window.localStorage.getItem('seconds'));
    var end = false;
     
    if( second > 0 ) second--;
    else{
        second = 59;
         
        if( minute > 0 ) minute--;
        else{
            second = 59;
            minute = 59;
            if(hour > 0) {
                hour--;
            }
            else {
                end = true;
            }
        }
    }
 
    if(end){
        if (isNaN(hour)) {
            hour = parseInt(window.localStorage.setItem('hours', 24));
        }
        else if (end){
            clearInterval(intervalID);
        }
    }else{
    	window.localStorage.setItem('hours', hour);
        document.querySelector('#hour').innerHTML = hour;
        if (minute < 10) {
            minute = "0" + minute;
        }
    	window.localStorage.setItem('minutes', minute);
        document.querySelector('#minute').innerHTML = minute;
        if(second < 10) {
            second = "0" + second;
        }
    		window.localStorage.setItem('seconds', second);
        document.querySelector('#second').innerHTML = second;
    }
}
window.intervalID = setInterval(timer, 1);