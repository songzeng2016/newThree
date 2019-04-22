window.onload = function () {
    var length = 3;
    var index = 0;
    var time = 5000;
    var banner = document.getElementById('banner');
    var imgs = banner.getElementsByClassName('img');
    var dots = banner.getElementsByClassName('dot');
    var left = banner.getElementsByClassName('left')[0];
    var right = banner.getElementsByClassName('right')[0];

    var reset = function () {
        for (var i = 0; i < length; i++) {
            imgs[i].style.opacity = 0;
            dots[i].style.opacity = 0.5;
        }
    };

    var loop = function () {
        reset();

        if (index < length - 1) {
            index++
        } else {
            index = 0;
        }
        imgs[index].style.opacity = 1;
        dots[index].style.opacity = 1;
    };

    imgs[index].style.opacity = 1;
    dots[index].style.opacity = 1;

    clearInterval(timer);
    var timer = setInterval(loop, time);

    banner.onmouseover = function () {  // 鼠标引入，清除定时器，轮播图停止
        clearInterval(timer);
    };
    banner.onmouseout = function () {  // 鼠标移出，重新调用定时器，轮播图开始
        clearInterval(timer);
        timer = setInterval(loop, time);
    };

    left.addEventListener('click', function () {
        clearInterval(timer);
        timer = setInterval(loop, time);
        reset();
        if (index === 0) {
            index = length - 1;
        } else {
            index--;
        }
        imgs[index].style.opacity = 1;
        dots[index].style.opacity = 1;
    });
    right.addEventListener('click', function () {
        clearInterval(timer);
        timer = setInterval(loop, time);
        reset();
        if (index === length - 1) {
            index = 0;
        } else {
            index++;
        }
        imgs[index].style.opacity = 1;
        dots[index].style.opacity = 1;
    });

    // for (var i = 0; i < length; i++) {
    //     dots[i].index = i;
    //     dots[i].onclick = function () {  // 添加圆点点击事件
    //         reset();
    //         index = this.index;
    //         imgs[index].style.opacity = 1;
    //         dots[index].style.opacity = 1;
    //     }
    // }
};