import axios from 'axios'

axios.defaults.baseURL = 'http://10.162.98.71:8081/service-api/service'
let ajax ={}
ajax.post = function (url,params,callback){
    axios.post(url,params).then(res=>{
        if(res.status==200){
            callback(res.data)
        }else{
            alert(res.message)
        }
    })
}
export default ajax;