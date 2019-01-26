$(document).ready(function () {
    $('.inform').on('click', function(e) {
        e.preventDefault()
        $(this).parent().parent().parent().find('.information').fadeIn().css({
            transform : 'translateX(0px)'
        });
        $('.portfolio').css({
            overflowY: 'hidden'
        })
        var target = $('.portfolio').scrollTop();
        $('.information').css({
            top: target
        })
    })
    $('.exit').on('click', function (e) {
        e.preventDefault();
        $('.information').fadeOut().css({
            transform : 'translateX(-620px)'
        });
        $('.portfolio').css({
            overflowY: 'scroll'
        });
    });
    $('.link').on('click', function (e) {
        var attrTab = $(this).attr('data-tab');
        var attrLink = $(this).attr('data-link');
        $('.link').removeAttr('id').not(this);
        $(this).attr('id', attrTab);
        if(attrLink == 'web') {
            e.preventDefault();
            webDown();
            $('span.small').removeClass('active-tab');
            $('span.website').addClass('active-tab');
        }
        else if (attrLink == 'all') {
            e.preventDefault();
            allDown()
            $('span.small').removeClass('active-tab');
        }
        else if (attrLink == 'des') {
            e.preventDefault();
            desDown()
            $('span.small').removeClass('active-tab');
            $('span.design').addClass('active-tab');
        }
    });
    $('.point-des').on('click', function(e) {
        e.preventDefault();
        desDown()
        var attrTab = $('.link.des-tab').attr('data-tab');
        $('.link').removeAttr('id');
        $('.link.des-tab').attr('id', attrTab);
        $('span.small').removeClass('active-tab');
        $('span.design').addClass('active-tab');
    })
    $('.point-web').on('click', function(e) {
        e.preventDefault();
        webDown()
        var attrTab = $('.link.web-tab').attr('data-tab');
        $('.link').removeAttr('id');
        $('.link.web-tab').attr('id', attrTab);
        $('span.small').removeClass('active-tab');
        $('span.website').addClass('active-tab');
    })
    $('.p-html-css').animate({
        width: '93%'
    }, 3000);
    $('.p-js-jquery').animate({
        width: '70%'
    }, 3000);
    $('.p-adobe').animate({
        width: '58%'
    }, 3000);
    function webDown () {
        if($('.item.web').attr('style')) {
            $('.item.web').slideDown(400);
        }
        if($('.item').hasClass('web')) {
            $('.item').not('.web').slideUp(700);
            $('.not-found').fadeOut(10);
        } else {
            $('.item').not('.web').slideUp(500);
            $('.not-found').fadeIn(1500);
        }
    }
    function desDown() {
        if($('.item.des').attr('style')) {
            $('.item.des').slideDown(400);
        }
        if($('.item').hasClass('des')) {
            $('.item').not('.des').slideUp(700);
            $('.not-found').fadeOut(10);
        } else {
            $('.item').not('.des').slideUp(500);
            $('.not-found').fadeIn(1500);
        }
    }
    function allDown () {
        $('.item').slideDown(700);
        $('.not-found').fadeOut(10);
    }
});
