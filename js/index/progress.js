   /*子弹图*/
    var name1=0.048, name2=0, name3=0.19, name4=0;
  //全部换成假数据
    // $.ajax({
    //     type: "get",
    //     url: "#(ctx)/cs/core/ipUse",
    //     async: false,
    //     dataType: 'JSON',
    //     success: function (res) {
    //         name1 = res[0].name;
    //         console.log(name1);
    //     }
    // });
    // $.ajax({
    //     type: "get",
    //     url: "#(ctx)/cs/core/devicekUse",
    //     async: false,
    //     dataType: 'JSON',
    //     success: function (res) {
    //         name2 = res[0].name;
    //         console.log(name2);
    //     }
    // });
    // $.ajax({
    //     type: "get",
    //     url: "#(ctx)/cs/core/diskUse",
    //     async: false,
    //     dataType: 'JSON',
    //     success: function (res) {
    //         name3 = res[0].name;
    //         console.log(name3);
    //     }
    // });
    // $.ajax({
    //     type: "get",
    //     url: "#(ctx)/cs/core/isoUse",
    //     async: false,
    //     dataType: 'JSON',
    //     success: function (res) {
    //         name4 = res[0].name;
    //         console.log(name4);
    //     }
    // });



    function color(number) {
        var color;
        if (number > 0.8) {
            color = "#fb9211"
        }
        if (0.4 < number < 0.8) {
            color = "#01d0f8"
        }
        if (number < 0.4) {
            color = "#0f3fdd"
        }
        return color;
    }
    function setWidth(number) {
        var num;
        num = number * 100 + "%";
        return num;
    }


    function time() {
        clearInterval(timer);
        var timer = setInterval(function () {
//          console.log("@@@@@")
            if (true) {
                $("#sec1").find(".progress-bar").css({"width": setWidth(name1), "background-color": color(name1)})
            }
            if (true) {
                $("#sec2").find(".progress-bar").css({"width": setWidth(name2), "background-color": color(name2)})
            }
            if (true) {
                $("#sec3").find(".progress-bar").css({"width": setWidth(name3), "background-color": color(name3)})
            }
            if (true) {
                $("#sec4").find(".progress-bar").css({"width": setWidth(name4), "background-color": color(name4)})
            }
        }, 1000);
        $(".container").find(".progress-bar").css("width", "0%");
    }
   time();