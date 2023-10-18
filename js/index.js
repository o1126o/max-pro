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

(function () {
    // 销售总量饼状图
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

(function () {
    // 用户总量柱状图
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