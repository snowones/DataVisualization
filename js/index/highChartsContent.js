    /*正文*/
    var chart1 = Highcharts.chart('rightOne', {
        chart: {
            zoomType: 'xy',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        legend:{
            itemStyle:{
                color: "#9da879"
            }
        },
        title: {
            text: ''
        },
        // subtitle: {
        //     text: '数据来源: WorldClimate.com'
        // },
        xAxis:  [{
            categories: ['10-19', '10-20', '10-21', '10-22'],
            crosshair: true
        }],
        yAxis: [{ // Primary yAxis
            labels: {
                format: '{value}',
                style: {
                    color: "#21f1e4"
                }
            },
            title: {
                text: '个',
                style: {
                    color: "#21f1e4"
                },
                rotation: 0
            }
        }, { // Secondary yAxis
            title: {
                text: '台',
                style: {
                    color: "#f0f156"
                },
                rotation: 0
            },
            labels: {
                format: '{value} ',
                style: {
                    color: "#f0f156"
                }
            },
            opposite: true
        }],
        tooltip: {
            shared: true
        },
        series:  [{
            name: '集群',
            type: 'column',
            yAxis: 1,
            data: [0,0,0, 1],
            tooltip: {
                valueSuffix: ' mm'
            }
        },{
            name: '节点',
            type: 'column',
            yAxis: 1,
            data: [0,0,0, 1],
            tooltip: {
                valueSuffix: ' mm'
            }
        }, {
            name: '虚拟机',
            type: 'spline',
            data: [0,0,0,20],
            tooltip: {
                valueSuffix: '°C'
            }
        }]
    });

    var chart2 = Highcharts.chart('centerOne-right', {
        chart: {
            type: 'areaspline',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        exporting: {
            enabled: false
        },
        legend:{
            itemStyle:{
                color: "#9da879"
            }
        },
        legend:{
            enabled:false
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        title: {
            text: ''
        },
        xAxis:[{
            categories: ['10-18', '10-19', '10-20', '10-21', '10-22'],
            crosshair: true
        }],
        yAxis: {
            title: {
                text: '日志增长',
                style:{
                    color: "#21f1e4"
                }
            },
            labels:{
                style:{
                    color: "#21f1e4"
                }
            }
        },
        tooltip: {
            shared: true,
            valueSuffix: ' 单位'
        },
        plotOptions: {
            areaspline: {
                fillOpacity: 0.5
            },
        },
        series:  [{
            name: '日志增长量',
            data: [0, 0, 0, 22, 11]
        }]
    });

    Highcharts.setOptions({
        chart: {
            type: 'solidgauge',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        title: {
            text: '',
        },
        pane: {
            center: ['50%', '60%'],
            size: '100%',
            startAngle: -140,
            endAngle: 140,
            background: {
                backgroundColor: (Highcharts.theme && Highcharts.theme.background2) || '#1f3a58',
                innerRadius: '60%',
                outerRadius: '100%',
                shape: 'arc'
            }
        },
        tooltip: {
            enabled: false
        },
        yAxis: {
            plotBands: {
                //borderColor:'#000000',
                // borderWidth:0,
                from: 0,
                to: 100000,
                color: '#1f3a58' // green
            },
            stops: [
                [0.1, '#080bbf'], // green
                [0.5, '#0b5dde'], // yellow
                [0.7, '#3ac5ef'] // red
            ],
            lineWidth: 0,
            minorTickInterval: null,
            tickPixelInterval: 200,//像素间隔
            tickWidth: 2,
            tickAmount: 6,//刻度总数
            tickPosition: 'inside',// 刻度线位置 内外
            tickLength: 15,
            //tickmarkPlacement:'between',
            tickColor: '#a664ff',
            // visible:false,//坐标轴是否显示
            title: {
                y: -50
            },
            labels: {
                // enabled:false,
                y: 5,
                style:{
                    "font-size":"15px",
                    color: "#21f1e4"
                }
            }

        },
        plotOptions: {
            solidgauge: {
                dataLabels: {
                    y: -20,
                    borderWidth: 0,
                    useHTML: true
                }
            }
        }
    });
    // 速度仪表

    var chart5 = Highcharts.chart('yb3', {
        yAxis: {
            min: 0,
            max: 22,
            tickPositions: [0, 22],
            title: {
                style:{
                    'font-size':'14px',
                    color:'#238BF1'
                },
                y:130,
                text: '虚拟机活跃量'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            data: [{
                y: 4,
                innerRadius: 80,
                // radius: 98,
                name: 'dd',
                color: '#C0C0C0'
            }],
            dataLabels: {
                style: {
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: 'white'
                },
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver">' + '已占用(台)' + '</span></div>'
            }
        }]
    });

    //        $.ajax({
    //        type: "get",
    //        url: "#(ctx)/cs/core/speed2",
    //        async:true,
    //        dataType: 'JSON',
    //        success: function(res) {
    //            console.log("zyxtest1");
    //            console.log(res);
    //            console.log(res[0])
    //            console.log(res[0].total)
    //            console.log(res[0].used);
    //            var chart5 = Highcharts.chart('yb4', {
    //                yAxis: {
    //                    min: 0,
    //                    max: res[0].total,
    //                    tickPositions: [0,res[0].total],
    //                    title:{
    //                        style:{
    //                            'font-size':'14px',
    //                            color:'#238BF1'
    //                        },
    //                        y:130,
    //                        text: '存储消耗量'
    //                    }
    //                },
    //                credits: {
    //                    enabled: false
    //                },
    //                series: [{
    //                    data: [{
    //                        y:res[0].used,
    //                        innerRadius: 80,
    //                        // radius: 98,
    //                        name:'dd',
    //                    }],
    //                    dataLabels: {
    //                        style: {
    //                            fontWeight: 'bold',
    //                            fontSize: '20px',
    //                            color: 'black'
    //                        },
    //                        format: '<div style="text-align:center"><span style="font-size:25px;color:' +
    //                        ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white') + '">{y}</span><br/>' +
    //                        '<span style="font-size:12px;color:silver">'+ '已消耗(G)'+'</span></div>'
    //                    }
    //                }]
    //            });
    //        }
    //    });

    var chart5 = Highcharts.chart('yb4', {
        yAxis: {
            min: 0,
            max: 220,
            tickPositions: [0,220],
            title:{
                style:{
                    'font-size':'14px',
                    color:'#238BF1'
                },
                y:130,
                text: '存储消耗量'
            }
        },
        credits: {
            enabled: false
        },
        series: [{
            data: [{
                y:35,
                innerRadius: 80,
                // radius: 98,
                name:'dd',
            }],
            dataLabels: {
                style: {
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: 'black'
                },
                format: '<div style="text-align:center"><span style="font-size:25px;color:' +
                ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white') + '">{y}</span><br/>' +
                '<span style="font-size:12px;color:silver">'+ '已消耗(G)'+'</span></div>'
            }
        }]
    });


    var chart3 = Highcharts.chart('yb1', {
        yAxis: {
            min: 0,
            max: 100,
            tickPositions: [0, 100],
            title: null,
            tickAmount: 2,//刻度总数
        },
        credits: {
            enabled: false
        },
        series: [{
            data: [{
                y: 19,
                innerRadius: 80,
                // radius: 98,
                name: 'dd',
            }],
            dataLabels: {
                style: {
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: 'black'
                },
                format: '<div style="text-align:center"><br/>' +
                '<span style="font-size:12px;color:silver">' + 19 + '%' + '</span></div>'
            }
        }]
    });


    var chart4 = Highcharts.chart('bubble1', {
        chart: {
            type: 'bubble',
            zoomType: 'xy',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        exporting: {
            enabled: false
        },
        credits: {
            enabled: false // 禁用版权信息
        },
        legend:{
            itemStyle:{
                color: "#9da879"
            }
        },
        yAxis: {
            min: 0,
            lineColor: 'white',
            lineWidth: 1,
            gridLineWidth: "0px",
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            labels:{
                style:{
                    color: "#f0f156",
                }
            },
            title: {
                text: '个',
                style: {
                    color: "#f0f156",
                    'font-size':'14px'
                },
                y:-4,
                rotation: 0
            }
        },
        xAxis:{
            tickWidth: 10,
            lineWidth: 3,
            labels: {
                // enabled:false,
                y:25,
                style:{
                    "font-size":"15px",
                    color: "#21f1e4"
                }
            },
            title: {
                text: '',
                style: {
                    color: '#238BF1'
                }
            }
        },
        title: {
            text: ''
        },
        series: [{
            name:'集群',
            // 每个气泡包含三个值，x，y，z；其中 x，y用于定位，z 用于计算气泡大小
            data: [[1, 1, 10]]
        }]
    });

    //        $.ajax({
    //            type: "get",
    //            url: "#(ctx)/cs/core/DCspeed2",
    //            async:true,
    //            dataType: 'JSON',
    //            success: function(res) {
    //                console.log("zyxtest2");
    //                console.log(res);
    //                console.log(res[0]);
    //                console.log(res[0].used);
    //        var chart5 = Highcharts.chart('yb2', {
    //            yAxis: {
    //                min: 0,
    //                max: 100,
    //                tickPositions: [0,100],
    //                title: null,
    //                tickAmount: 2,//刻度总数
    //            },
    //            credits: {
    //                enabled: false
    //            },
    //            series: [{
    //                data: [{
    //                    y:res[0].used,
    //                    innerRadius: 80,
    //                    // radius: 98,
    //                    name:'dd',
    //                }],
    //                dataLabels: {
    //                    style: {
    //                        fontWeight: 'bold',
    //                        fontSize: '20px',
    //                        color: 'black'
    //                    },
    //                    format: '<div style="text-align:center"><span style="font-size:25px;color:' +
    //                    ((Highcharts.theme && Highcharts.theme.contrastTextColor) || 'white') + '">{y}%</span><br/>' +
    //                    '<span style="font-size:12px;color:silver">'+res[0].used+'%'+'</span></div>'
    //                }
    //            }]
    //        });
    //            }
    //        });
    var chart5 = Highcharts.chart('yb2', {
        yAxis: {
            min: 0,
            max: 100,
            tickPositions: [0,100],
            title: null,
            tickAmount: 2,//刻度总数
        },
        credits: {
            enabled: false
        },
        series: [{
            data: [{
                y:16,
                innerRadius: 80,
                // radius: 98,
                name:'dd',
            }],
            dataLabels: {
                style: {
                    fontWeight: 'bold',
                    fontSize: '20px',
                    color: 'black'
                },
                format: '<div style="text-align:center"><br/>' +
                '<span style="font-size:12px;color:silver">'+16+'%'+'</span></div>'
            }
        }]
    });


    //        $.ajax({
    //            type: "get",
    //            url: "#(ctx)/cs/core/bubble2",
    //            async:true,
    //            dataType: 'JSON',
    //            success: function(res) {
    //                var chart6 = Highcharts.chart('bubble2', {
    //                    chart: {
    //                        type: 'bubble',
    //                        zoomType: 'xy',
    //                        backgroundColor: 'rgba(0,0,0,0)'
    //                    },
    //                    exporting: {
    //                        enabled: false
    //                    },
    //                    credits:{
    //                        enabled: false // 禁用版权信息
    //                    },
    //                    legend:{
    //                        itemStyle:{
    //                            color: "#9da879"
    //                        }
    //                    },
    //                    yAxis: {
    //                        lineColor: 'white',
    //                        lineWidth: 1,
    //                        gridLineWidth: "0px",
    //                        minorTickInterval: null,
    //                        tickPixelInterval: 400,
    //                        tickWidth: 0,
    //                        labels:{
    //                            style:{
    //                                color: "#f0f156",
    //                            }
    //                        },
    //                        title: {
    //                            text: 'TB',
    //                            style: {
    //                                color: "#f0f156",
    //                                'font-size':'14px'
    //                            },
    //                            y:-4,
    //                            rotation: 0
    //                        }
    //                    },
    //                    xAxis:{
    //                        tickWidth: 10,
    //                        lineWidth: 3,
    //                        labels: {
    //                            // enabled:false,
    //                            y:25,
    //                            style:{
    //                                "font-size":"15px",
    //                                color: "#21f1e4"
    //                            }
    //                        }
    //                    },
    //                    title: {
    //                        text: ''
    //                    },
    //                    series: res
    //                });
    //
    //            }
    //        });


    var chart6 = Highcharts.chart('bubble2', {
        chart: {
            type: 'bubble',
            zoomType: 'xy',
            backgroundColor: 'rgba(0,0,0,0)'
        },
        exporting: {
            enabled: false
        },
        credits:{
            enabled: false // 禁用版权信息
        },
        legend:{
            itemStyle:{
                color: "#9da879"
            }
        },
        yAxis: {
            min: 0,
            lineColor: 'white',
            lineWidth: 1,
            gridLineWidth: "0px",
            minorTickInterval: null,
            tickPixelInterval: 400,
            tickWidth: 0,
            labels:{
                style:{
                    color: "#f0f156",
                }
            },
            title: {
                text: 'TB',
                style: {
                    color: "#f0f156",
                    'font-size':'14px'
                },
                y:-4,
                rotation: 0
            }
        },
        xAxis:{
            tickWidth: 10,
            lineWidth: 3,
            labels: {
                // enabled:false,
                y:25,
                style:{
                    "font-size":"15px",
                    color: "#21f1e4"
                }
            }
        },
        title: {
            text: ''
        },
        series: [{
            name:'池',
            // 每个气泡包含三个值，x，y，z；其中 x，y用于定位，z 用于计算气泡大小
            data: [[1, 0.2, 10]]
        }]
    });

    function requestData() {


        Highcharts.chart('rightThree', {
                    chart: {
                        plotBackgroundColor: null,
                        plotBorderWidth: null,
                        plotShadow: false,
                        type: 'pie',
                        backgroundColor: 'rgba(0,0,0,0)'
                    },
                    exporting: {
                        enabled: false
                    },
                    credits: {
                        enabled: false // 禁用版权信息
                    },
                    title: {
                        text: ''
                    },
                    legend:{
                        itemStyle:{
                            color: "#9da879"
                        }
                    },
                    tooltip: {
                        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
                    },
                    plotOptions: {
                        pie: {
                            allowPointSelect: true,
                            cursor: 'pointer',
                            dataLabels: {
                                enabled: true,
                                format:'<b>{point.name}</b>: {point.percentage:.1f}%',
                                style:{
                                    color:'white'
                                }
                            },
                            showInLegend: true
                        }
                    },
                    colors:['#f1242e','#1452f1'],
                    series: [{
                        name: 'Brands',
                        colorByPoint: true,
                        data: [
                            {
                                name: '危险操作',
                                y: 1
                            }, {
                                name: '安全操作',
                                y: 19
                            },
                        ]
                    }]
                });

        setTimeout(requestData, 10000);
    }
    requestData();