// toTop
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("myBtn").style.display = "block";
    } else {
        document.getElementById("myBtn").style.display = "none";
    }
}

// 点击按钮，返回顶部
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


//轮播导航

var i = 0;
var timer;
$(document).ready(function() {
    $('.banner-list>.ig').eq(0).show().siblings('.banner-list>.ig').hide();

    showTime();

    $('.page>.tag').hover(function() {
        i = $(this).index();
        Show();
        clearInterval(timer);
    }, function() {
        showTime();
    });

    $("idx-banner>.prev").click(function() {
        clearInterval(timer);
        if (i == 0) {
            i = 4;
        }
        i--;
        Show();
        showTime();
    });


    $("idx-banner>.next").click(function() {
        clearInterval(timer);
        if (i == 4) {
            i = 0;
        }
        i++;
        Show();
        showTime();
    });
});

//创建一个showTime函数

function showTime() {
    timer = setInterval(function() {
        //调用一个Show()函数
        Show();
        i++;
        //当图片是最后一张的后面时，设置图片为第一张
        if (i == 4) {
            i = 0;
        }
    }, 2000);
}

function Show() {
    $('.banner-list>.ig').eq(i).fadeIn(300).siblings('.banner-list>.ig').fadeOut(300);
}