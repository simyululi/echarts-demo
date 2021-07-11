<template>
  <div style="width: 100%;height: 100%;">
    <div class="barChart" ref="barChart"></div>
  </div>
</template>
<script>
export default {
  name: "bar",
  props:{
    sellData:{
      type:Array,
      default:[10, 52, 200, 334, 390, 330, 220],
    }
  },
  watch:{
    sellData:{
      handler(val){
        this.createEchart(val)
      }
    }
  },
  mounted() {
    this.initEcharts()
    this.createEchart(this.sellData);
  },
  methods: {
    initEcharts(){
      this.myChart = this.$echarts.init(this.$refs.barChart)
    },
    createEchart(data) {
      let chartoption = {
        color: ["#2f89cf"],
        //表格大小
        grid: {
          left: "0%",
          top: "10px",
          right: "0%",
          bottom: "4%",
          containLabel: true,
        },
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效,影子效果
            type: "shadow", // 默认为直线，可选为：'line' | 'shadow'
          },
        },
        xAxis: [
          {
            type: "category",
            data: [
              "101",
              "102",
              "103",
              "104",
              "105",
              "106",
            ],
            axisTick: {
              alignWithLabel: true,
            },
            axisLabel: {
              color: "rgba(7,0,0,0.6)",
              fontSize: "12",
            },
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              color: "rgba(17,0,0,0.6)",
              fontSize: "12",
            },
            lineStyle: {
              color: "rgba(3,0,0,0.1)",
              width: 1,
              type: "solid",
            },
            splitLine: {
              lineStyle: {
                color: "rgba(255,255,255,.1)",
              },
            },
          },
        ],
        series: [
          {
            name: "bar",
            type: "bar",
            barWidth: "60%",
            data: data,
          },
        ],
      }
      this.myChart.setOption(chartoption)
    },
  },
}
</script>

<style scoped>
.barChart {
  width: 100%;
  height: 100%;
}
</style>
