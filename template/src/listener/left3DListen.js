import { EventBus } from "../eventBus/eventBus";
import projectConfig from "../store/modules/projectConfig";



export const left3DListen = {


}



left3DListen.mounted = function () {

  EventBus.bus.addListener("LEFT_DETAIL", controlHandle);
}

left3DListen.remove = function () {

  EventBus.bus.removeListener("LEFT_DETAIL", controlHandle);
}



function controlHandle(item) {

  if(projectConfig.state.mapType == "3d"){
    // console.log(item);
    let newItem = []
    if(item.lists){
      for(let i in item.lists){
        newItem.push(item.lists[i].tit)
      }
    }else{
      newItem.push(item.tit)
    }



  }
}
