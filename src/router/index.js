import { createRouter, createWebHashHistory } from 'vue-router' 
import Index from '../pages/index.vue'
import Date from '../pages/date.vue'
import Schedual from '../pages/schedual.vue'
import PackOutput from '../pages/packOutput.vue'
import QtyScore from '../pages/qtyScore.vue'
//路由数组
const routes = [
    {
        path: "/",
        name: "index",
        component: Index,
        children: []
    },
    {
        path: "/date",
        name: "date",
        component: Date,
        meta: {
            keepAlive: true
        },
        children: []
    },
    ,
    {
        path: "/schedual",
        name: "schedual",
        component: Schedual,
        meta: {
            keepAlive: true
        },
        children: []
    },
    {
        path: "/packOutput",
        name: "PackOutput",
        component: PackOutput,
        meta: {
            keepAlive: true
        },
        children: []
    },
    {
        path: "/qtyScore",
        name: "QtyScore",
        component: QtyScore,
        meta: {
            keepAlive: true
        },
        children: []
    }
]

//路由对象
const router = createRouter({

          history: createWebHashHistory(),

          routes //上面的路由数组

})

//导出路由对象，在main.js中引用
export default router