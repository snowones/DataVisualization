  /*echarts*/

    function requestData1() {
        // var data; //数据
        // $.ajax({
        //     type: "get",
        //     url: "#(ctx)/sys/user/frontdate",
        //     async: false,
        //     dataType: 'JSON',
        //     success: function (res) {
        //         data = res;
        //     }
        // });


        var leftChart = echarts.init(document.getElementById('leftmain')),
            leftOption = {
                tooltip: {
                    trigger: 'item',
                    formatter: "{a} <br/>{b}: {c} ({d}%)"
                },
                // legend: {
                //     orient: 'vertical',
                //     x: 'left',
                //     data:['直接访问','邮件营销','联盟广告','视频广告','搜索引擎']
                // },
                series: [
                    {
                        name: '访问来源',
                        type: 'pie',
                        radius: ['50%', '70%'],
                        avoidLabelOverlap: false,
                        label: {
                            normal: {
                                show: false,
                                position: 'center'
                            },
                            emphasis: {
                                show: true,
                                textStyle: {
                                    fontSize: '30',
                                    fontWeight: 'bold'
                                }
                            }
                        },
                        labelLine: {
                            normal: {
                                show: false
                            }
                        },
                        data:[
                                 {value:335, name:'直接访问'},
                                 {value:310, name:'邮件营销'},
                            ]
                    }
                ]
            };
        leftChart.setOption(leftOption);
        setTimeout(requestData1, 10000);
    }
    requestData1();