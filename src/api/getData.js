import{getJSON} from './ajax'
import { SUCC_CODE,TIMEOUT } from './config';

//获取数据
const getData = (url,Options) => {

  const ajaxPromise = getJSON(url,{
    timeoutTime:TIMEOUT,
    ...Options
  })

  const resultPromist = ajaxPromise.then(response =>{
    // if (response.code!==SUCC_CODE) throw new Error(`出错了:${response.code}`);
    return response.data
  }).catch(err =>{
    console.log(err);
  })
  
  resultPromist.xhr = ajaxPromise.xhr

  return resultPromist
}


//延时
const delay = ms =>{
  return new Promise(resolve =>{
    setTimeout(resolve,ms)
  })
}

//获取延迟的数据
const getDelayedData = (url,options) =>{
  return delay(1000).then(() =>{
    return getData(url,options)
  })
}

export{getData,getDelayedData}