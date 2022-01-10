// 饼形图
//实例对象

let myChart = echarts.init(document.querySelector(".echarts-pie"));
let option = {
    color: [
        "#07913A",
        "#956134",
        "#F39800",
        "#0E6EB8"
    ],
    title:{
        show:false
    },
    tooltip: {
      trigger: 'item'
    },
    series: [
      {
        type: 'pie',
        left:"10%",
        radius: ['30%', '70%'],
        avoidLabelOverlap: false,
        center:['25%','50%'],
        itemStyle: {
          borderRadius: 0,
          borderColor: '#fff',
          borderWidth: 18
        },
        label: {
          show:true,
          position: 'inner'
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
            color:'#ffffff',
            fontStyle:'normal',
            padding:[15,0,0,0]
          }
        },
        labelLine: {
          show: false
        },
        data: [
          { value: 500, name: '新零售' },
          { value: 500, name: '新金融' },
          { value: 500, name: '高科技' },
          { value: 500, name: '现代\n农业' },
        ]
      }
    ]
  };
    //把配置给实例对象
    myChart.setOption(option);