<template>
    <div>
         <b-row  class="py-1">
             <b-col><b-form-input v-model="sdate" type="date"></b-form-input></b-col>
             <b-col><b-form-select v-model="ex1Selected" :options="ex1Options"></b-form-select></b-col>
         </b-row>
            <div v-for="item in TableData">
                <b-row style="background:#f4f4f4;border:1px solid #d4d4d4" class="py-1">
                <b-col style="text-align:center;border-right:1px solid #d4d4d4">{{item.TEAMNAME}}:<span class="fw-bolder">{{item.STATENAME}}</span></b-col>
                <b-col style="text-align:center">{{item.SHIFTNAME}}:<span class="fw-bolder">{{item.STATENAME}}</span></b-col>
                </b-row>
                <b-row class="py-1">
                    <b-col>机台:<span class="fw-bolder">{{item.RESOURCENAME}}</span></b-col>
                    <b-col>计划:<span class="link-success">{{item.QUANTITY}}</span>箱</b-col>
                </b-row>
                    <b-row class="py-1">
                    <b-col>牌号:<span class="fw-bolder">{{item.PRODUCTNAME}}</span></b-col>
                </b-row>
                    <b-row class="py-1">
                    <b-col>工单号:<span class="link-primary">{{item.PLANCODE}}</span></b-col>
                </b-row>
            </div>
            
    </div>
</template>
<script>
  import {ref, onMounted,getCurrentInstance,watchEffect } from 'vue'
  import moment from 'moment'
    export default {
        name:'schedual',
        setup() {
            // vue3中取消了this的概念，可用getCurrentInstance来获取上下文，这里的proxy相当于this
            const { proxy } = getCurrentInstance()
            const sdate = ref(moment().format('YYYY-MM-DD'))
            const ex1Selected = ref()
            const ex1Options = [
                {value: null, text: '包装机'},
            ]
            //初始化
            const TableData = ref([{TEAMNAME:'甲班',SHIFTNAME:'白班',STATENAME:'运行'}])
            const init = () =>{
                proxy.ajax.post('liuzhoutobacco/dps_packworkorder',{date:sdate.value},res=>{
                    proxy.TableData =res
                    console.log(res)
                })
            }
            //onMounted(init)
            watchEffect(()=>{
                console.log(sdate.value)
                init()
            })
            //初始化
            return{
                //top
                sdate,ex1Selected,ex1Options,
                //int
                init,TableData,
                
            }
        },
        mounted(){
        }
}
</script>