import { createApp } from 'vue'
import App from './App.vue'
import ajax from './utils/ajax'
import router from './router/index'
import echarts from './utils/echarts'
import BootstrapVue3 from 'bootstrap-vue-3'

// Optional, since every component import their Bootstrap functionality
// the following line is not necessary
// import 'bootstrap'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue-3/dist/bootstrap-vue-3.css'
//import { Button,DatePicker,Popup} from 'vant';

const app = createApp(App)
app.use(router)
app.use(BootstrapVue3)
//app.use(Button)
//app.use(DatePicker)
//app.use(Popup)
app.mount('#app')
app.config.globalProperties.ajax = ajax
app.config.globalProperties.echarts = echarts