//1. data
//2. mycharts
//3. 古诗的dataset


var mychart = echarts.init(document.getElementById("chart"));
option = {
    //color:['rgb(238,63,77,0.65)','rgb(236,155,173,0.8)','rgb(252,161,6,0.7)','rgb(244,206,105)','rgb(208,222,170)','rgb(140,194,105)','rgb(93,190,138)','rgb(147,213,220)','rgb(147,181,207)','rgb(17,101,154,0.7)','rgb(94,121,135,0.8)','rgb(73,92,105)','rgb(20,35,32,0.8)','rgb(19,24,36,0.8)','rgb(0,0,0,0.8)'],
    //color:['rgb(249,236,195,0.8)','rgb(214,227,197)','rgb(192,217,188)','rgb(162,200,173)','rgb(133,180,160)','rgb(94,147,139)','rgb(93,147,139)','rgb(74,125,124)','rgb(66,114,118)','rgb(65,101,109)','rgb(62,100,113)','rgb(60,100,115)','rgb(54,90,106)','rgb(47,78,98)','rgb(42,70,91)','rgb(35,57,81)'],
    //color:['rgb(182,42,45,0.9)','rgb(182,42,45,0.7)','rgb(244,105,74,0.8)','rgb(244,105,74,0.6)','rgb(238,171,41,0.8)','rgb(238,171,41,0.6)','rgb(108,166,128,0.6)','rgb(108,166,128,0.8)','rgb(83,122,72,0.6)','rgb(83,122,72,0.7)','rgb(126,145,186,0.85)','rgb(126,145,186,1)','rgb(101,92,133,0.85)','rgb(101,92,133,1)','rgb(87,79,115,0.95)'],
    color: ['rgb(189,63,66)', 'rgb(204,105,108)', 'rgb(246,135,110)', 'rgb(248,165,146)', 'rgb(241,188,84)', 'rgb(245,205,127)', 'rgb(167,202,179)', 'rgb(137,184,153)', 'rgb(152,175,145)', 'rgb(134,162,127)', 'rgb(145,161,196)', 'rgb(126,145,186)', 'rgb(124,116,151)', 'rgb(101,92,133)', 'rgb(96,88,122)'],
        /*formatter(params) {
            for (x in params) {
                console.log("x:" + x);
                plant = params[x].axisValue;
                sense = params[x].seriesName;
                console.log(params);
                console.log("sense:"+sense);
                content = poets_dataset[plant][sense];
                var i;
                var strcontent = "<br/>";
                for(i = 0;i < content.length;i++){
                    strcontent = strcontent + content[i];
                    strcontent = strcontent + "<br/>";
                }

               //console.log(plant + "表示" + sense + "的诗句有：" + "\n" + content);
                //return plant + "表示" + sense + "的诗句有：" + strcontent;
                return "dddd";
            }
        }*/

        tooltip : {
            trigger: 'axis',
            axisPointer: {
                type: "cross",
                label: {
                    formatter: function (params) {
                        if (params.seriesData.length === 0) {
                            window.mouseCurValue = params.value;
                        }
                    }
                }
            },
            formatter: function (params) {
                let res = "", sum = 0;
                for (let i = 0; i < params.length; i++) {
                    var j;
                    let series = params[i];
                    sum += Number(series.data);
                    if (sum >= window.mouseCurValue) {
                        res = series.axisValue + "<br/>" + series.marker + series.seriesName + ":" + series.data + "<br/>";
                        plant = series.axisValue;
                        sense = series.seriesName;
                        console.log(plant)
                        console.log(sense)
                        content = poets_dataset[plant][sense];
                        strcontent="<br/>";

                        if(exp_plants[plant].hasOwnProperty(sense))
                        {
                          console.log(exp_plants[plant][sense])
                          res =res+exp_plants[plant][sense] + "<br/>";
                        }

                        else if(exp_plants[plant].hasOwnProperty("通用")){
                          console.log(exp_plants[plant]["通用"])
                          res =res+exp_plants[plant]["通用"] + "<br/>";
                        }
                        for( j = 0;j < content.length;j++){
                            strcontent = strcontent + content[j];
                            strcontent = strcontent + "<br/>";
                        }
                        console.log(res)
                        if (j > 0)
                            res = res +"<br/>"+"利用"+"<strong>"+plant+"</strong>" + "表示" +"<strong>"+ sense+"</strong>" + "的唐诗有："+strcontent;
                        break;
                    }
                }
                return res;
            },
        },
    /*图例，颜色*/
    legend: {
        orient: "vertical",
        left: "90%",
        bottom: "5%",
        textStyle: {
            fontStyle: "normal",
            fontWeight: "normal",
            fontSize: 10,
        },
        itemWidth: 18,
        data: ['爱情', '赞美', '友情', '励志', '闲适', '抒怀', '思乡', '思念', '送别', '孤寂', '愁苦', '忧国忧民', '咏史怀古', '壮志难酬', '讽刺'],
        /*selected: {
            '爱情':false,
            '赞美':false,
            '友情':false,
            '励志':false,
            '闲适':false,
            '抒怀':false,
            '思乡':false,
            '思念':false,
            '送别':false,
            '孤寂':false,
            '愁苦':false,
            '忧国忧民':false,
            '咏史怀古':false,
            '壮志难酬':false,
            '讽刺':false
        }*/
    },
    /*图的位置*/
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
        width: "85%"
    },
    yAxis: {
        type: 'value'
    },
    /*改成植物数据*/
    xAxis: {
        type: 'category',
        data: ['芦苇', '大麻', '菊花', '枫', '稻', '藜', '桐花', '梧桐', '白茅', '香蒲', '地钱', '梅', '竹', '桑树', '肉桂', '木樨', '泽兰', '梁', '飞蓬', '莲', '茶', '桃李', '柳树'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        },
    },
    /*一个情感对应一个{}*/
    series: [
        {
            name: '爱情',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [1, 0, 0, 1, 0, 1, 1, 2, 0, 1, 1, 2, 3, 0, 4, 4, 5, 5, 6, 18, 3, 5, 9]
        },
        {
            name: '赞美',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [0, 1, 1, 0, 1, 3, 1, 2, 1, 4, 0, 4, 5, 3, 2, 2, 9, 5, 3, 5, 7, 9, 10]
        },
        {
            name: '友情',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [0, 2, 3, 1, 3, 1, 4, 3, 6, 1, 3, 2, 0, 5, 7, 7, 4, 10, 6, 5, 8, 22, 13]
        },
        {
            name: '励志',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [0, 1, 2, 1, 1, 0, 1, 1, 1, 2, 3, 2, 3, 1, 1, 1, 3, 1, 6, 3, 4, 9, 3]
        },
        {
            name: '闲适',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [1, 0, 0, 1, 1, 0, 1, 1, 4, 5, 1, 1, 3, 0, 0, 0, 2, 1, 0, 6, 6, 3, 3]
        },
        {
            name: '抒怀',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [1, 2, 6, 1, 3, 6, 3, 2, 1, 3, 5, 5, 7, 4, 4, 4, 2, 5, 5, 6, 7, 7, 19]
        },
        {
            name: '思乡',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [2, 2, 3, 2, 0, 0, 0, 1, 2, 2, 2, 5, 0, 4, 3, 3, 3, 1, 4, 3, 6, 1, 18]
        },
        {
            name: '思念',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [2, 0, 2, 3, 1, 0, 5, 3, 0, 0, 5, 5, 2, 2, 4, 4, 4, 3, 3, 3, 4, 3, 12]
        },
        {
            name: '送别',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [3, 3, 1, 4, 3, 7, 1, 2, 3, 2, 0, 4, 4, 5, 11, 11, 7, 10, 17, 15, 17, 31, 52]
        },
        {
            name: '孤寂',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [0, 0, 2, 2, 2, 1, 5, 4, 2, 4, 5, 2, 3, 0, 5, 5, 0, 3, 1, 4, 1, 2, 10]
        },
        {
            name: '愁苦',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [1, 0, 2, 1, 0, 1, 5, 3, 2, 1, 4, 4, 2, 2, 2, 2, 3, 6, 4, 6, 7, 10, 17]
        },
        {
            name: '忧国忧民',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [1, 5, 3, 4, 7, 4, 0, 3, 6, 2, 1, 1, 3, 11, 0, 0, 2, 7, 8, 2, 7, 6, 7]
        },
        {
            name: '咏史怀古',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [2, 3, 0, 5, 2, 0, 1, 2, 1, 1, 2, 3, 2, 2, 5, 5, 9, 12, 5, 3, 8, 4, 10]
        },
        {
            name: '壮志难酬',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [1, 2, 0, 0, 2, 3, 1, 1, 2, 2, 3, 0, 4, 4, 4, 4, 2, 4, 4, 4, 4, 3, 6]
        },
        {
            name: '讽刺',
            type: 'bar',
            stack: 'total',
            label: {
                show: false
            },
            emphasis: {
                focus: 'series'
            },
            data: [2, 1, 0, 0, 2, 2, 1, 1, 0, 2, 2, 0, 2, 8, 1, 1, 3, 0, 6, 7, 6, 5, 7],
            barMaxWidth: 15,
            barCateGoryGap: 10
        }
    ]
};

mychart.on('click',function(params){
    plant = params.name;
    sense = params.seriesName;

    
});
mychart.setOption(option);