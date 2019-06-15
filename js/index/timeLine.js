    //时间轴的  滚动事件

    var h = $("#timeline").height();
    //1.1滚动通知
    var num = 0;

    function goLeft() {
        //750是根据你给的尺寸，可变的
        // if (num == -750) {
        if (num == -180) {
            num = 0;
        }
        num -= 1;
        $("#timeline").css({
            top: num
        })
    }
    //设置滚动速度
    var timer = setInterval(goLeft, 25);
