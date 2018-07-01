function timer(){

    var minute = document.querySelector('#minute').innerHTML;
    var second = document.querySelector('#second').innerHTML;
    var form = document.querySelector('form');
    var end = false;
     
    if( second > 0 ) second--;
    else{
        second = 59;
         
        if( minute > 0 ) minute--;
        else{
            second = 59;
            end = true;
        }
    }
 
    if(end){
        clearInterval(intervalID);
        form.style.display = "none";
    }else{
        document.querySelector('#minute').innerHTML = minute;
        if(second < 10) {
            second = "0" + second;
        }
        document.querySelector('#second').innerHTML = second;
    }
}
window.intervalID = setInterval(timer, 1000);