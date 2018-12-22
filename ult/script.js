window.addEventListener('load', function (e) {
    tagsCreater('.mainText');
    tagsCreater('.mainText2');
    tagsCreater('.mainText3');

    function tagsCreater(tagClass) {
        var tag = document.querySelector(tagClass);
        var text = tag.innerHTML;
        tag.innerHTML = '';
        setTimeout(function () {
            for (let i = 0; i < text.length; i++) {
                var tagCreate = document.createElement('span');
                tagCreate.innerHTML = text.charAt(i);
                if(tagCreate.innerHTML == ' ') {
                    tagCreate.innerHTML = '&nbsp'
                }
                tag.append(tagCreate);
                tagCreate.classList.add('wip');
            }
            textWriter()

            function textWriter() {
                var span = document.querySelectorAll('span.wip');
                for (let i = 0; i < span.length; i++) {
                    span[i].addEventListener('mouseover', function () {
                        var contex = this;
                        contex.classList.add('active');
                        setTimeout(function () {
                            contex.classList.remove('active');
                            contex.classList.add('activeAfter');
                            setTimeout(function () {
                                contex.classList.remove('activeAfter');
                            }, 200)
                        }, 200)
                    })
                    setTimeout(function () {
                        span[i].style.display = 'inline-block';
                        span[i].classList.add('active');
                        span[i].style.color = '#FC0853';
                        setTimeout(function () {
                            span[i].style.color = '';
                            span[i].classList.remove('active');
                            span[i].classList.add('activeAfter');
                            setTimeout(function () {
                                span[i].classList.remove('activeAfter');
                            }, 300)
                        }, 10 * i)
                    }, 70 * i)
                }
            }
        }, 500);
    }








});