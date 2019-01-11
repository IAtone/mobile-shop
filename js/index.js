//音乐播放暂停
(function () {
    var music = document.getElementsByClassName('music')[0];
    var audio = document.getElementsByTagName('audio')[0];
    var flag = true;
    music.addEventListener('click', function () {
        if (flag == true) {
            music.style.animation = 'none';
            flag = false;
            audio.pause();
        } else {
            music.style.animation = 'play 1s linear infinite';
            flag = true;
            audio.play();
        }
    }, false);
}())

// 底部推送关闭

var ad = document.getElementsByClassName('ad')[0];
var oClose = document.getElementsByClassName('close')[0];

oClose.addEventListener('click', function () {
    ad.style.display = 'none';
}, false);

//活动二维码间歇抖动
// var code = document.getElementsByClassName('code')[0];
// var codeTime = setInterval(function () {
//     clearInterval(codeTime);
//     code.style.animation = "shake 1s linear";
// }, 3000)

// 滚动条滚动右边消失
// var outer_r = document.getElementsByClassName('outer_top-right')[0];
// var scroll_top = document.createElement.scrollTop || document.body.scrollTop;
// window.onscroll = function () {
//     outer_r.style.opacity = 0;
// }


//返回顶部
var returnTop = document.getElementsByClassName('returnTop')[0];

returnTop.addEventListener('click', function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}, false);

// 点赞变红心
var love = document.getElementsByClassName('love')[0];
var heart = love.getElementsByTagName('img')[0];
var loveNum = love.getElementsByTagName('b')[0];
var flag = true;
heart.addEventListener('click', function () {
    if (flag) {
        heart.src = 'image/heart.png';
        heart.style.animation = 'none';
        loveNum.innerHTML = Number(loveNum.innerHTML) + 1;
        flag = false;
    } else {
        heart.src = 'image/love.png';
        heart.style.animation = 'love 0.7s linear infinite';
        loveNum.innerHTML = Number(loveNum.innerHTML) - 1;
        flag = true;
    }

}, false)

// 倒计时
var day = document.getElementsByClassName('day')[0];
var hour = document.getElementsByClassName('hour')[0];
var minute = document.getElementsByClassName('minute')[0];
var second = document.getElementsByClassName('second')[0];

var count = function () {
    var endTime = new Date('2018/12/10 00:00:00');
    var nowTime = new Date();
    var t = endTime.getTime() - nowTime.getTime();
    var d = '';
    var h = '';
    var m = '';
    var s = '';
    if (t > 0) {
        d = Math.floor(t / 1000 / 60 / 60 / 24);
        h = Math.floor(t / 1000 / 60 / 60 % 24);
        m = Math.floor(t / 1000 / 60 % 60);
        s = Math.floor(t / 1000 % 60);
    }

    function toDouble(n) {
        return n < 10 ? '0' + n : n;
    }

    day.innerHTML = toDouble(d);
    hour.innerHTML = toDouble(h);
    minute.innerHTML = toDouble(m);
    second.innerHTML = toDouble(s);
}

setInterval(count, 1000);

