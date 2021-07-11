<template>
  <div class="home">
    <header>
      <h1>数据展板</h1>
    </header>
    <div class="main">
      <div class="left">
        <div class="chart">
          <h2>表1</h2>
          <bar :sellData="barData"></bar>
        </div>
        <div class="chart">
          <h2>表2</h2>
          <bar :sellData="barData"></bar>
        </div>
        <div class="chart">
          <h2>表3</h2>
          <bar :sellData="barData"></bar>
        </div>
      </div>
      <div class="right">
        <div class="map" ref="midChina">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Bar from "@/components/bar";
  import '@/assets/china.js'
  export default {
    name: "home",
    components: {
      Bar
    },
    data(){
      return{
        barData:[10, 52, 200, 334, 390, 330, 220],
      }
    },
    mounted() {
      this.createEchart()
    },
    methods:{
      createEchart() {
        const self = this
        this.myChart = this.$echarts.init(this.$refs.midChina) //实例化
        const chartOptions = {
          background: "#142957",
          tooltip: {
            trigger: "item",
          },
          geo: {
            map: "china",
            label: {
              emphasis: {
                show: true,
                color: "#fff",
              },
            },
            // 把中国地图放大了1.2倍
            zoom: 1.2,
            roam: false,
            itemStyle: {
              normal: {
                // 地图省份的背景颜色
                areaColor: "rgba(20, 41, 87,0.6)",
                borderColor: "#195BB9",
                borderWidth: 1,
              },
              emphasis: {
                areaColor: "#2B91B7",
              },
            },
          },
          // series: series,
        }
        this.myChart.setOption(chartOptions)
        this.myChart.on('click', function (params) {
          console.log(params.name);
          let arr = []
          for(let i = 0; i < 7; i++){
            arr[i] = Math.floor(Math.random() * (1000 - 1)) + 1
          }
          self.barData = [...arr]
        })
      },
    }

  }
</script>

<style scoped>
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  .home{
    font-family: Arial, Helvetica, sans-serif;
    margin: 0;
    padding: 0;
    /*  背景图定位 / 背景图尺寸  cover 完全铺满容器  contain 完整显示在容器内 */
    /*background: url(../images/bg.jpg) no-repeat #000;*/
    background-size: cover;
    /* 行高是字体1.15倍 */
    line-height: 1.15;
  }
  header{
    /*position: relative;*/
    height: 100px;
    /*background: url(../images/head_bg.png) no-repeat top center;*/
    background-size: 100% 100%;
  }
  h1 {
    font-size: 40px;
    color: #0a0606;
    text-align: center;
    line-height: 100px;
  }
  .main{
    width:1900px;
    display: flex;
    margin: 0 auto;
    background-color: #fff;
    align-items: center;
    height: 820px;
  }
  .left{
    flex: 3;
    width: 60%;
    padding: 0 0.1875rem 0.5rem;
  }
  .chart{
    /*position: absolute;*/
    padding: 0 15px 40px;
    margin-bottom: 15px;
    height: 243px;
    width: 100%;
    /*border:1px solid #2c3e50 ;*/
    background-color: #fff;
    box-shadow: 5px 5px 5px 5px aliceblue;
  }
  h2{
    height: 48px;
    line-height: 48px;
    font-size: 20px;
    text-align: center;
  }

  .right{
    flex: 5;
    width: 100%;
    height: 100%;
    margin-left: 15px;
    /*background-color: #fff;*/
    /*box-shadow: 5px 5px 5px 5px aliceblue;*/
  }
  .map{
    width: 100%;
    height: 759px;
    margin-top: 18px;
    background-color: #fff;
    box-shadow: 5px 5px 5px 5px aliceblue;
  }
</style>
