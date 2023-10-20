// 监控区域
(function () {
    // 监控区域 - 切换功能
    $(".content").eq(0).show()
    $(".monitor .tabs span").click(function () {
        //获取一一对应的下标 
        const _index = $(this).index()
        //点击当前的a 加类名 active  他的兄弟删除类名
        $(this).addClass("active").siblings('span').removeClass("active")
        //选取content 然后狗日对应下标的 显示   当前的兄弟.content隐藏
        $(".content").eq(_index).show().siblings(".content").hide()
    })

    //滚动 each 遍历dom
    //原理：把marquee下面的子盒子都复制一遍 加入到marquee中
    //      然后动画向上滚动，滚动到一半重新开始滚动
    //因为选取的是两个marquee  所以要遍历
    $(".marquee").each(function () {
        const rows = $(this).children().clone()
        $(this).append(rows)
    })

})();

// 销售总量饼状图
(function () {
    const pie = document.querySelector('.pie');
    const echartsInstance = echarts.init(pie);
    const option = {
        color: ['#006cff', '#60cda0', '#ed8884', '#ff9f7f', '#0096ff', '#9fe6b8', '#32c5e9', '#1d9dff'],
        tooltip: {
            trigger: 'item',
            // 格式化提示内容：
            // a 代表图表名称 b 代表数据名称 c 代表数据  d代表  当前数据/总数据的比例
            formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        series: [
            {
                name: '销售统计',
                type: 'pie',
                // 南丁格尔玫瑰图 有两个圆  内圆半径10%  外圆半径70%
                radius: ["10%", "70%"],
                // 图表中心位置 left 50%  top 50% 距离图表DOM容器
                center: ['50%', '50%'],
                roseType: 'radius',
                itemStyle: {
                    borderRadius: 5
                },
                label: {
                    fontSize: 10
                },
                labelLine: {
                    // 连接到图形的线长度
                    length: 6,
                    // 连接到文字的线长度
                    length2: 8
                },
                data: [
                    { value: 20, name: "云南" },
                    { value: 26, name: "北京" },
                    { value: 24, name: "山东" },
                    { value: 25, name: "河北" },
                    { value: 20, name: "江苏" },
                    { value: 25, name: "浙江" },
                    { value: 30, name: "四川" },
                    { value: 42, name: "湖北" }
                ]
            }
        ]
    }
    echartsInstance.setOption(option)
    window.addEventListener("resize", () => {
        echartsInstance.resize()
    })
})();

// 用户总量柱状图
(function () {
    const bar = document.querySelector('.bar');
    const echartsInstance = echarts.init(bar);
    // 中间省略的数据  准备三项
    const item = {
        name: '',
        value: 1200,
        // 柱子颜色
        itemStyle: {
            color: '#254065'
        },
        // 鼠标经过柱子颜色
        emphasis: {
            itemStyle: {
                color: '#254065'
            }
        },
        // 工具提示隐藏
        tooltip: {
            extraCssText: 'opacity:0'
        }
    };
    const option = {
        // 工具提示
        tooltip: {
            // 触发类型  经过轴触发axis  经过轴触发item
            trigger: 'item',
            // 轴触发提示才有效
            axisPointer: {
                // 默认为直线，可选为：'line' 线效果 | 'shadow' 阴影效果       
                type: 'shadow'
            }
        },
        // 图表边界控制
        grid: {
            // 距离 上右下左 的距离
            left: '0',
            right: '3%',
            bottom: '3%',
            top: '5%',
            // 大小是否包含文本【类似于boxsizing】
            containLabel: true,
            //显示边框
            show: true,
            //边框颜色
            borderColor: 'rgba(0, 240, 255, 0.3)'
        },
        // 控制x轴
        xAxis: [
            {
                // 使用类目，必须有data属性
                type: 'category',
                // 使用 data 中的数据设为刻度文字
                data: ['上海', '广州', '北京', '深圳', '合肥', '', '......', '', '杭州', '厦门', '济南', '成都', '重庆'],
                // 刻度设置
                axisTick: {
                    // true意思：图形在刻度中间
                    // false意思：图形在刻度之间
                    alignWithLabel: false,
                    show: false
                },
                //文字
                axisLabel: {
                    color: '#4c9bfd'
                }
            }
        ],
        // 控制y轴
        yAxis: [
            {
                // 使用数据的值设为刻度文字
                type: 'value',
                axisTick: {
                    // true意思：图形在刻度中间
                    // false意思：图形在刻度之间
                    alignWithLabel: false,
                    show: false
                },
                //文字
                axisLabel: {
                    color: '#4c9bfd'
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(0, 240, 255, 0.3)'
                    }
                },
            }
        ],
        // 控制x轴
        series: [

            {
                // series配置
                // 颜色
                itemStyle: {
                    // 提供的工具函数生成渐变颜色
                    color: new echarts.graphic.LinearGradient(
                        // (x1,y2) 点到点 (x2,y2) 之间进行渐变
                        0, 0, 0, 1,
                        [
                            { offset: 0, color: '#00fffb' }, // 0 起始颜色
                            { offset: 1, color: '#0061ce' }  // 1 结束颜色
                        ]
                    )
                },
                // 图表数据名称
                name: '用户统计',
                // 图表类型
                type: 'bar',
                // 柱子宽度
                barWidth: '60%',
                // 数据
                data: [2100, 1900, 1700, 1560, 1400, item, item, item, 900, 750, 600, 480, 240]
            }
        ]
    }
    echartsInstance.setOption(option)
    window.addEventListener("resize", () => {
        echartsInstance.resize()
    })
})();

// 订单区域
(function () {
    var data = {
        day365: { orders: '20,301,987', amount: '99834' },
        day90: { orders: '301,987', amount: '9834' },
        day30: { orders: '1,987', amount: '3834' },
        day1: { orders: '987', amount: '834' }
    }
    let i = 0
    // 点击事件
    $('.order').on('click', '.filter span', function () {
        let _index = $(this).index()
        i = _index
        // 点击之后加类名
        $(this).addClass('active').siblings().removeClass('active')
        // attr() 方法设置或返回被选元素的属性值。 获取span的data-key自定义属性
        var key = $(this).attr('data-key')
        key = data[key]
        $('.order .item h4:eq(0)').text(key.orders)
        $('.order .item h4:eq(1)').text(key.orders)
    });
    // 定时器
    var aclick = $('.order span')
    var timer;
    function autoToggle() {
        timer = setInterval(function () {
            i++;
            if (i > 3) {
                i = 0
            }
            // 每三秒调用点击事件
            aclick.eq(i).click()
        }, 2000)
    }
    autoToggle()

    $(".order").hover(function () {
        clearInterval(timer)
    }, function () {
        autoToggle()
    })
})();

// 销售额逻辑
(function () {
    const line = document.querySelector(".line")
    const echartsInstance = echarts.init(line)
    const option = {
        tooltip: {
            trigger: 'axis'
        },
        // 图例组件
        legend: {
            textStyle: {
                color: '#4c9bfd' // 图例文字颜色

            },
            right: '10%'//距离右边10%
        },
        grid: {
            left: '2%',
            right: '4%',
            bottom: '3%',
            top: '20%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            // 去除轴内间距
            boundaryGap: false,
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisTick: {
                show: false//去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd'//文本颜色
            },
            axisLine: {
                show: false//去除轴线  
            }
        },
        yAxis: {
            // 数据作为刻度文字                                  
            type: 'value',
            axisTick: {
                show: false//去除刻度线
            },
            axisLabel: {
                color: '#4c9bfd'//文本颜色
            },
            axisLine: {
                show: false//去除轴线  
            },
            boundaryGap: false//去除轴内间距
        },
        series: [{
            name: '预期销售额',
            // 数据                                  
            data: [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            // 图表类型                                  
            type: 'line',
            // 圆滑连接                                  
            smooth: true,
            itemStyle: {
                color: '#00f2f1'  // 线颜色
            }
        },
        {
            name: '实际销售额',
            // 数据                                  
            data: [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79],
            // 图表类型                                  
            type: 'line',
            // 圆滑连接                                  
            smooth: true,
            itemStyle: {
                color: '#ed3f35'  // 线颜色
            }
        }
        ]
    };
    echartsInstance.setOption(option)
    window.addEventListener("resize", () => {
        echartsInstance.resize()
    })

    var data = {
        // 年
        year: [
            [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
            [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
        ],
        quarter: [
            [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
            [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
        ],
        month: [
            [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
            [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
        ],
        week: [
            [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
            [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
        ]
    }

    function render(index) {
        $(".caption span").eq(index).addClass("active").siblings("span").removeClass("active")
    }

    let i = 0
    let timer = -1
    function autoToggle() {
        timer = setInterval(() => {
            i++;
            if (i > 3) {
                i = 0
            }
            onClickHandler(i)
        }, 2000)
    }

    function onClickHandler(index) {
        const spanElem = $(".caption span").eq(index);
        spanElem.click(); // 触发点击事件
    }

    autoToggle()

    $(".sales").hover(() => {
        clearInterval(timer)
    }, () => {
        autoToggle()
    })

    $(".caption span").click(function () {
        const index = ($(this).index()) - 1
        render(index)
        const item = data[this.dataset.index]

        option.series[0].data = item[0]
        option.series[1].data = item[1]
        echartsInstance.setOption(option)
    })

})();

// 季度销售进度图
(function () {
    const gauge = document.querySelector('.gauge');
    const echartsInstance = echarts.init(gauge);
    const option = {
        series: [
            {
                type: 'pie',
                radius: ['130%', '150%'], // 放大图形
                center: ['50%', '80%'], // 往下移动  套住75%文字
                label: {
                    show: false
                },
                startAngle: 180,
                hoverOffset: 0, // 鼠标经过不变大
                data: [
                    {
                        value: 100,
                        itemStyle: {
                            // 颜色渐变#00c9e0->#005fc1
                            color: {
                                type: 'linear',
                                x: 0,
                                y: 0,
                                x2: 0,
                                y2: 1,
                                colorStops: [
                                    { offset: 0, color: '#00c9e0' },
                                    { offset: 1, color: '#005fc1' }
                                ]
                            }
                        }
                    },
                    { value: 100, itemStyle: { color: '#12274d' } }, // 颜色#12274d

                    { value: 200, itemStyle: { color: 'transparent' } } // 透明隐藏第三块区域
                ]
            }
        ]
    }
    echartsInstance.setOption(option)
    window.addEventListener("resize", () => {
        echartsInstance.resize()
    })
})();

// 全国热榜
(function () {
    var data = [
        { name: '可爱多', num: '9,086' },
        { name: '娃哈哈', num: '8,341' },
        { name: '喜之郎', num: '7,407' },
        { name: '八喜', num: '6,080' },
        { name: '小洋人', num: '6,724' },
        { name: '好多鱼', num: '2,170' },
    ]
    $('.inner').on('mouseenter', '.sup li', function () {
        $(this).addClass('active').siblings().removeClass('active');
        //获取随机的值  sort方法 是给数组排序 a-b是从小到大
        //.5-随机0-1的数 可能为正可能为负 排序就会随机
        var radomData = data.sort(function (a, b) { return 0.5 - Math.random() });
        var html = '';
        radomData.forEach(function (item) {
            html += `<li><span>${item.name}</span><span>${item.num} <s class="icon-up"></s></span></li>`;
        });
        //渲染
        $('.sub').html(html);
    });
    $('.province .sup li').eq(0).mouseenter();
    var index = 0;
    var timer = setInterval(() => {
        index++;
        if (index > 5) {
            index = 0;
        }
        $('.sup li').eq(index).mouseenter();
    }, 2000);
})();

// 渠道分布逻辑
(function () {
    const radar = document.querySelector('.radar');
    const echartsInstance = echarts.init(radar);
    const dataBJ = [[90, 19, 56, 11, 34]];

    const option = {
        tooltip: {
            show: true,
            // 控制提示框组件的显示位置
            position: ['40%', '10%'],
        },
        radar: {
            center: ['50%', '50%'],
            // 外半径占据容器大小
            radius: '50%',
            indicator: [
                { name: '淘宝', max: 90 },
                { name: '京东', max: 22 },
                { name: '苏宁', max: 75 },
                { name: '微商', max: 22 },
                { name: '其他', max: 132 }
            ],
            shape: 'circle',
            splitNumber: 4,
            name: {
                // 修饰雷达图文本颜色
                textStyle: {
                    color: '#4c9bfd',
                    fontSize:10
                }
            },

            splitLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            },
            splitArea: {
                show: false
            },
            axisLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.5)'
                }
            }
        },
        series: [
            {
                name: '上海',
                type: 'radar',
                lineStyle: {
                    normal: {
                        color: '#fff',
                        // width: 1
                    }
                },
                areaStyle: {
                    color: 'rgba(238, 197, 102, 0.6)',
                },
                data: dataBJ,
                symbol: 'circle',
                // 拐点的大小  
                symbolSize: 5,
                itemStyle: {
                    color: "#fff"
                }
            }
        ]
    }
    echartsInstance.setOption(option)
    window.addEventListener("resize", () => {
        echartsInstance.resize()
    })
})();