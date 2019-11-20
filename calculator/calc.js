window.addEventListener('load', function() {
    let elems = {
        display: document.querySelector('#mainDisplay'),
        result: document.querySelector('#result'),
        clear: document.querySelector('#clear'),
        numPlate: document.querySelectorAll('.number-plate button'),
        toolPlate: document.querySelectorAll('.tools-plate button[data-action]'),
        equally: document.querySelector('.tools-plate button#equally'),
    }
    console.log(elems.display);

    // always focus input
    elems.display.focus();

    // clear display
    elems.clear.addEventListener('click', function() {
        elems.display.value = '';
        elems.display.focus();
        elems.result.innerHTML = '';
        window.val = ""
    })

    for(let i = 0; i < elems.toolPlate.length; i++) {
        elems.toolPlate[i].addEventListener('click', function()  {
            elems.display.focus();
            window.val = elems.display.value + this.getAttribute('data-action');
            elems.display.value = elems.display.value + ' ' + this.getAttribute('data-action') + ' ';
            console.log(window.val);
        })
    }
    
    for(let i = 0; i < elems.numPlate.length; i++) {
        elems.numPlate[i].addEventListener('click', function()  {
            elems.display.focus();
            if (elems.display.value.length < 25) {
                window.val = (elems.display.value + this.getAttribute('data-value'));
                elems.display.value = window.val;
                console.log(window.val);
            } 
            if (elems.display.value.length == 21) {
                elems.display.style.fontSize = '17px';
            }
        })
    }
    elems.display.addEventListener('input', function() {
        window.val = this.value;
        console.log(window.val);
        if (elems.display.value.length == 21) {
            elems.display.style.fontSize = '17px';
        }
    })

    elems.equally.addEventListener('click', function() {
        window.val = window.val.split(' ')
        for(let i = 0; i < window.val.length; i ++) {
            if(window.val[i] == '*') {
               elems.result.innerHTML = +window.val[window.val.indexOf('*') - 1] * +window.val[window.val.indexOf('*') + 1]
            }
            else if(window.val[i] == '+') {
                elems.result.innerHTML = +window.val[window.val.indexOf('+') - 1] + +window.val[window.val.indexOf('+') + 1]
            }
            else if(window.val[i] == '-') {
                elems.result.innerHTML = +window.val[window.val.indexOf('-') - 1] - +window.val[window.val.indexOf('-') + 1]
            }
            else if(window.val[i] == '/') {
                elems.result.innerHTML = +window.val[window.val.indexOf('/') - 1] / +window.val[window.val.indexOf('/') + 1]
            }
        }
    })
})