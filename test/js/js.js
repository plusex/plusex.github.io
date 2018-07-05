/* function timer() {

    var hour = parseInt(window.localStorage.getItem('hours'));
    console.log(hour);
    var minute = parseInt(window.localStorage.getItem('minutes'));
    var second = parseInt(window.localStorage.getItem('seconds'));
    var clock = document.querySelector('#clock');
    var form = document.querySelector('#aksia');
    var formTwo = document.querySelector('#ne-aksia');
    var timeOut = document.querySelector('#timeOut');
    var end = false;
    if (second > 0) second--;
    else {
        second = 59;
        if (minute > 0) minute--;
        else {
            second = 59;
            minute = 0;
            if (hour > 0) hour--;
            else end = true;
        }
    }

    if (end) {
        clearInterval(intervalID);
        form.style.display = "none";
        timeOut.style.display = "block";
        clock.style.display = "none";
        formTwo.style.display = "flex";
    } else {
        window.localStorage.setItem('hours', hour)
        document.querySelector('#hour').innerHTML = hour;
        if (hour < 10) {
            hour = "0" + hour;
        }
        window.localStorage.setItem('minutes', minute)
        document.querySelector('#minute').innerHTML = minute;
        if (second < 10) {
            second = "0" + second;
        }
        window.localStorage.setItem('seconds', second)
        document.querySelector('#second').innerHTML = second;
    }
}
window.intervalID = setInterval(timer, 1000); */
function timer() {

    var hour = parseInt(window.localStorage.getItem('hours'));
    var minute = parseInt(window.localStorage.getItem('minutes'));
    var second = parseInt(window.localStorage.getItem('seconds'));
    var clock = document.querySelector('#clock');
    var form = document.querySelector('#aksia');
    var formTwo = document.querySelector('#ne-aksia');
    var timeOut = document.querySelector('#timeOut');
    var end = false;

    if (second > 0) second--;
    else {
        second = 59;
        if (minute > 0) minute--;
        else {
            second = 59;
            minute = 59;
            if (hour > 0) hour--;
            else end = true;
        }
    }

    if (end) {
        clearInterval(intervalID);
        form.style.display = "none";
        timeOut.style.display = "block";
        clock.style.display = "none";
        formTwo.style.display = "flex";
    } else {
    		if (hour < 10) {
        		hour = "0" + hour;
        }
        window.localStorage.setItem('hours', hour)
        document.querySelector('#hour').innerHTML = hour;
        if (minute < 10) {
        		minute = "0" + minute;
        }
        window.localStorage.setItem('minutes', minute)
        document.querySelector('#minute').innerHTML = minute;
        if (second < 10) {
            second = "0" + second;
        }
        window.localStorage.setItem('seconds', second)
        document.querySelector('#second').innerHTML = second;
    }
}
window.intervalID = setInterval(timer, 1000);

window.addEventListener('load', function (e) {
    var body = document.querySelector('body');
    body.addEventListener("contextmenu", function (e) {
        e.preventDefault();
    });
    shortcut.add("F12", function(e) {
        e.preventDefault();
    });
    shortcut.add("Ctrl+Shift+I",function(e) {
        e.preventDefault();
    });
    var short = document.querySelector('#short');
    var long = document.querySelector('#long');
    //input
    var shortRadio = document.querySelector('#two');
    var shortSelect = document.querySelector('.shortSelect');
    var longRadio = document.querySelector('#three');
    var longSelect = document.querySelector('.longSelect');
    var formSend = document.querySelector('.form-send');
    var noAllWrite = document.querySelector('.no-all-write');
    //call
    
    formSend.addEventListener("submit", function(e) {
        if(shortRadio.checked) {
           if(!longRadio.checked) {
               
           }
        }
        else if(longRadio.checked) {
            if (!shortRadio.checked) {
            }
        }
        else {
            e.preventDefault();
            noAllWrite.style.opacity = "1";
        }
    })
    short.addEventListener("click", function () {
        shortRadio.checked = true;
        shortSelect.classList.add("active");
        longSelect.classList.remove("active");
    })
    long.addEventListener("click", function () {
        longRadio.checked = true;
        longSelect.classList.add("active");
        shortSelect.classList.remove("active");
    })
    shortRadio.addEventListener('input', function (e) {
        shortSelect.classList.toggle("active");
        longSelect.classList.remove("active");
    });
    longRadio.addEventListener('input', function (e) {
        longSelect.classList.toggle("active");
        shortSelect.classList.remove("active");
    });
});