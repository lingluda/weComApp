<template>
    <div>
          <b-row class="container">
            <b-col cols="1"><svg viewBox="0 0 1024 1024" style="width:16px;hight:16px" class="m-2" xmlns="http://www.w3.org/2000/svg" data-v-78e17ca8=""><path fill="currentColor" d="M128 384v512h768V192H768v32a32 32 0 1 1-64 0v-32H320v32a32 32 0 0 1-64 0v-32H128v128h768v64H128zm192-256h384V96a32 32 0 1 1 64 0v32h160a32 32 0 0 1 32 32v768a32 32 0 0 1-32 32H96a32 32 0 0 1-32-32V160a32 32 0 0 1 32-32h160V96a32 32 0 0 1 64 0v32zm-32 384h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 0 1 0 64h-64a32 32 0 0 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm192-192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64zm0 192h64a32 32 0 1 1 0 64h-64a32 32 0 1 1 0-64z"></path></svg></b-col>
            <b-col cols="5"><b-form-input v-model="sdate" type="date"></b-form-input></b-col>
            <b-col cols="1"><span>至</span></b-col>
            <b-col cols="5"><b-form-input v-model="sdate" type="date"></b-form-input></b-col>
        </b-row>
         <div id="myChart" _echarts_instance_='ec_12' :style="{ width: '100%', height: '300px' }"></div>
         <div id="myChart1" _echarts_instance_='ec_13' :style="{ width: '100%', height: '300px' }"></div>
    </div>
</template>
<script>
import {ref,onMounted,getCurrentInstance,nextTick} from 'vue'
export default {
    name:'qtyScore',
    setup(){
        const { proxy } = getCurrentInstance()
        const sdate =ref()
          //饼图
        const create = () =>{
            let c_dom = document.getElementById('myChart')
            c_dom.removeAttribute("_echarts_instance_")
            let myChart = proxy.echarts.init(c_dom);
                // 绘制图表
                myChart.setOption({
                title: {
                text: '班组得分排名',
                left: 'center'
                },
                tooltip: {},
                xAxis: {
                    type: 'category',
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {
                    type: 'value',
                },
                series: [
                {
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }
                ]
            });
        }
        //饼图end
         //柱状图
        const create1 = () =>{
            let c_dom = document.getElementById('myChart1')
            c_dom.removeAttribute("_echarts_instance_")
          let myChart = proxy.echarts.init(c_dom);
          // 绘制图表
          myChart.setOption({
            title: {
              text: '机台得分排名',
              left: 'center'
            },
            tooltip: {},
            xAxis: {
                type: 'value',
            },
            yAxis: {
                type: 'category',
                data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
            },
            series: [
              {
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
              }
            ]
          });
        }
        //柱状图end
        nextTick(()=>{
          create(),create1()
        })
        // onMounted(()=>{
        //     create(),create1()
        // })
        return {
            sdate,
            create,create1
        }
    }
}
</script>

