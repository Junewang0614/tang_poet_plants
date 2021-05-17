//1. data
//2. mycharts
var mychart = echarts.init(document.getElementById("chart"));
option = {
    tooltip: {
        trigger: 'axis',
        axisPointer: {            // Use axis to trigger tooltip
            type: 'shadow'        // 'shadow' as default; can also be 'line' or 'shadow'
        }
    },
    /*图例，颜色*/
    legend: {
        data: ['爱情','赞美','友情','励志','闲适','抒怀','思乡','思念','送别','孤寂','愁苦','忧国忧民','咏史怀古','壮志难酬','讽刺'],
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
        containLabel: true
    },
    xAxis: {
        type: 'value'
    },
    /*改成植物数据*/
    yAxis: {
        type: 'category',
        data: ['芦苇', '大麻', '稷', '菊花', '枫', '稻', '藜', '桐花', '梧桐', '白茅', '香蒲', '地钱', '梅', '竹', '桑树', '肉桂', '木樨', '泽兰', '梁', '飞蓬', '莲', '茶', '杨树', '李', '柳树'],
        axisLine: {
            show: false
        },
        axisTick: {
            show: false
        }
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
            data: [1, 0, 0, 0, 1, 0, 1, 1, 2, 0, 1, 1, 2, 3, 0, 4, 4, 5, 5, 6, 18, 3, 8, 5, 9]
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
            data: [0, 1, 1, 1, 0, 1, 3, 1, 2, 1, 4, 0, 4, 5, 3, 2, 2, 9, 5, 3, 5, 7, 6, 9, 10]
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
            data: [0, 2, 1, 3, 1, 3, 1, 4, 3, 6, 1, 3, 2, 0, 5, 7, 7, 4, 10, 6, 5, 8, 8, 22, 13]
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
            data: [0, 1, 3, 2, 1, 1, 0, 1, 1, 1, 2, 3, 2, 3, 1, 1, 1, 3, 1, 6, 3, 4, 3, 9, 3]
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
            data: [1, 0, 1, 0, 1, 1, 0, 1, 1, 4, 5, 1, 1, 3, 0, 0, 0, 2, 1, 0, 6, 6, 1, 3, 3]
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
            data: [1, 2, 2, 6, 1, 3, 6, 3, 2, 1, 3, 5, 5, 7, 4, 4, 4, 2, 5, 5, 6, 7, 5, 7, 19]
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
            data: [2, 2, 0, 3, 2, 0, 0, 0, 1, 2, 2, 2, 5, 0, 4, 3, 3, 3, 1, 4, 3, 6, 5, 1, 18]
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
            data: [2, 0, 0, 2, 3, 1, 0, 5, 3, 0, 0, 5, 5, 2, 2, 4, 4, 4, 3, 3, 3, 4, 6, 3, 12]
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
            data: [3, 3, 2, 1, 4, 3, 7, 1, 2, 3, 2, 0, 4, 4, 5, 11, 11, 7, 10, 17, 15, 17, 25, 31, 52]
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
            data: [0, 0, 2, 2, 2, 2, 1, 5, 4, 2, 4, 5, 2, 3, 0, 5, 5, 0, 3, 1, 4, 1, 5, 2, 10]
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
            data: [1, 0, 0, 2, 1, 0, 1, 5, 3, 2, 1, 4, 4, 2, 2, 2, 2, 3, 6, 4, 6, 7, 8, 10, 17]
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
            data: [1, 5, 3, 3, 4, 7, 4, 0, 3, 6, 2, 1, 1, 3, 11, 0, 0, 2, 7, 8, 2, 7, 4, 6, 7]
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
            data: [2, 3, 6, 0, 5, 2, 0, 1, 2, 1, 1, 2, 3, 2, 2, 5, 5, 9, 12, 5, 3, 8, 6, 4, 10]
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
            data: [1, 2, 1, 0, 0, 2, 3, 1, 1, 2, 2, 3, 0, 4, 4, 4, 4, 2, 4, 4, 4, 4, 3, 3, 6]
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
            data: [2, 1, 2, 0, 0, 2, 2, 1, 1, 0, 2, 2, 0, 2, 8, 1, 1, 3, 0, 6, 7, 6, 5, 5, 7]
        }
    ]
};
mychart.setOption(option);