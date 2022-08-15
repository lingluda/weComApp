<template>
  <div>
    <!-- 头部 -->
    <b-row>
    <b-col cols="1"><svg viewBox="0 0 1024 1024" style="width:16px;hight:16px" class="m-2" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8=""><path fill="currentColor" d="M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"></path></svg></b-col>
    <b-col cols="11"><b-form-input v-model="sdate" type="date"></b-form-input></b-col>
    </b-row>
    <b-row class="my-2">
      <b-col cols="6">
        <van-circle class="ms-4" v-model:current-rate="currentRate" :stroke-width="60" color="red" :rate="90" :speed="100" :text="text"/>
        <div class="ms-5">月进度</div>
        </b-col>
      <b-col cols="6">
        <van-circle class="ms-2" v-model:current-rate="currentRate" :stroke-width="60" color="orange" :rate="80" :speed="100" :text="text"/>
        <div class="ms-4">月进度</div>
      </b-col>  
    </b-row>
    <!-- 表格 -->
    <div style="background:#f4f4f4" class="p-2 fw-bold">各牌号产量: </div>
    <table class="table table-bordered">
      <thead>
        <tr>
          <td>牌号</td>
          <td>计划量</td>
          <td>产量</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>真龙(娇子)2008</td>
          <td>2002</td>
          <td>1202</td>
        </tr>
      </tbody>
    </table>
    <div style="background:#f4f4f4" class="p-2 fw-bold">各班产量: </div>
    <div id="Chart" _echarts_instance_="ec_12345" :style="{ width: '300px', height: '300px' }"></div>
  </div>
</template>
<script>
import { ref,onMounted,computed,getCurrentInstance,nextTick} from 'vue';
export default {
    setup() {
      // vue3中取消了this的概念，可用getCurrentInstance来获取上下文，这里的proxy相当于this
      const { proxy } = getCurrentInstance()
      //环形进度条
      const currentRate = ref(0);
      const text = computed(() => currentRate.value.toFixed(0) + '%');
      //环形进度条end
      const sdate = ref();
      //初始化echarts实例
      const create = () =>{
      let c_dom = document.getElementById('Chart')
      c_dom.removeAttribute("_echarts_instance_")
      let myChart = proxy.echarts.init(c_dom);
        // 绘制图表
        myChart.setOption({
           title: {
            text: ''
          },
          tooltip: {},
          xAxis: {
            data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
          },
          yAxis: {},
          series: [
            {
              name: '销量',
              type: 'bar',
              data: [5, 20, 36, 10, 10, 20]
            }
          ]
        });
      }
     //初始化echarts实例
        nextTick(()=>{
          create()
        })
    return {
      sdate,create,
      currentRate,text
    }
  },
 
}
</script>
