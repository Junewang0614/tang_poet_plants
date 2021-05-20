//1. data
//2. mycharts
var mychart = echarts.init(document.getElementById("chart"));
option = {
    //color:['rgb(238,63,77,0.65)','rgb(236,155,173,0.8)','rgb(252,161,6,0.7)','rgb(244,206,105)','rgb(208,222,170)','rgb(140,194,105)','rgb(93,190,138)','rgb(147,213,220)','rgb(147,181,207)','rgb(17,101,154,0.7)','rgb(94,121,135,0.8)','rgb(73,92,105)','rgb(20,35,32,0.8)','rgb(19,24,36,0.8)','rgb(0,0,0,0.8)'],
    //color:['rgb(249,236,195,0.8)','rgb(214,227,197)','rgb(192,217,188)','rgb(162,200,173)','rgb(133,180,160)','rgb(94,147,139)','rgb(93,147,139)','rgb(74,125,124)','rgb(66,114,118)','rgb(65,101,109)','rgb(62,100,113)','rgb(60,100,115)','rgb(54,90,106)','rgb(47,78,98)','rgb(42,70,91)','rgb(35,57,81)'],
    //color:['rgb(182,42,45,0.9)','rgb(182,42,45,0.7)','rgb(244,105,74,0.8)','rgb(244,105,74,0.6)','rgb(238,171,41,0.8)','rgb(238,171,41,0.6)','rgb(108,166,128,0.6)','rgb(108,166,128,0.8)','rgb(83,122,72,0.6)','rgb(83,122,72,0.7)','rgb(126,145,186,0.85)','rgb(126,145,186,1)','rgb(101,92,133,0.85)','rgb(101,92,133,1)','rgb(87,79,115,0.95)'],
    color: ['rgb(189,63,66)', 'rgb(204,105,108)', 'rgb(246,135,110)', 'rgb(248,165,146)', 'rgb(241,188,84)', 'rgb(245,205,127)', 'rgb(167,202,179)', 'rgb(137,184,153)', 'rgb(152,175,145)', 'rgb(134,162,127)', 'rgb(145,161,196)', 'rgb(126,145,186)', 'rgb(124,116,151)', 'rgb(101,92,133)', 'rgb(96,88,122)'],
/*     tooltip: {
        trigger: 'item',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    }, */
    /*图例，颜色*/
    legend: {
        orient: "vertical",
        left: "90%",
        bottom:"5%",
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
        data: ['柳树', '李', '杨树', '茶', '莲', '飞蓬', '梁', '泽兰', '木樨', '肉桂', '桑树', '竹', '梅', '地钱', '香蒲', '白茅', '梧桐', '桐花', '藜', '稻', '枫', '菊花', '稷', '大麻', '芦苇'],
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
            data: [9, 5, 8, 3, 18, 6, 5, 5, 4, 4, 0, 3, 2, 1, 1, 0, 2, 1, 1, 0, 1, 0, 0, 0, 1]
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
            data: [10, 9, 6, 7, 5, 3, 5, 9, 2, 2, 3, 5, 4, 0, 4, 1, 2, 1, 3, 1, 0, 1, 1, 1, 0]
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
            data: [13, 22, 8, 8, 5, 6, 10, 4, 7, 7, 5, 0, 2, 3, 1, 6, 3, 4, 1, 3, 1, 3, 1, 2, 0]
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
            data: [3, 9, 3, 4, 3, 6, 1, 3, 1, 1, 1, 3, 2, 3, 2, 1, 1, 1, 0, 1, 1, 2, 3, 1, 0]
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
            data: [3, 3, 1, 6, 6, 0, 1, 2, 0, 0, 0, 3, 1, 1, 5, 4, 1, 1, 0, 1, 1, 0, 1, 0, 1]
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
            data: [19, 7, 5, 7, 6, 5, 5, 2, 4, 4, 4, 7, 5, 5, 3, 1, 2, 3, 6, 3, 1, 6, 2, 2, 1]
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
            data: [18, 1, 5, 6, 3, 4, 1, 3, 3, 3, 4, 0, 5, 2, 2, 2, 1, 0, 0, 0, 2, 3, 0, 2, 2]
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
            data: [12, 3, 6, 4, 3, 3, 3, 4, 4, 4, 2, 2, 5, 5, 0, 0, 3, 5, 0, 1, 3, 2, 0, 0, 2]
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
            data: [52, 31, 25, 17, 15, 17, 10, 7, 11, 11, 5, 4, 4, 0, 2, 3, 2, 1, 7, 3, 4, 1, 2, 3, 3]
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
            data: [10, 2, 5, 1, 4, 1, 3, 0, 5, 5, 0, 3, 2, 5, 4, 2, 4, 5, 1, 2, 2, 2, 2, 0, 0]
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
            data: [17, 10, 8, 7, 6, 4, 6, 3, 2, 2, 2, 2, 4, 4, 1, 2, 3, 5, 1, 0, 1, 2, 0, 0, 1]
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
            data: [7, 6, 4, 7, 2, 8, 7, 2, 0, 0, 11, 3, 1, 1, 2, 6, 3, 0, 4, 7, 4, 3, 3, 5, 1]
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
            data: [10, 4, 6, 8, 3, 5, 12, 9, 5, 5, 2, 2, 3, 2, 1, 1, 2, 1, 0, 2, 5, 0, 6, 3, 2]
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
            data: [6, 3, 3, 4, 4, 4, 4, 2, 4, 4, 4, 4, 0, 3, 2, 2, 1, 1, 3, 2, 0, 0, 1, 2, 1]
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
            data: [7, 5, 5, 6, 7, 6, 0, 3, 1, 1, 8, 2, 0, 2, 2, 0, 1, 1, 2, 2, 0, 0, 2, 1, 2],
            barMaxWidth: 15,
            barCateGoryGap: 10
        }
    ]
};
mychart.setOption(option);