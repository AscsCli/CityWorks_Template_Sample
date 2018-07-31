import { EventBus } from '../eventBus/eventBus';
import projectConfig from "../store/modules/projectConfig";
import {listenerInit} from "./listenerInit";

export const head3DIconListen = {}

head3DIconListen.mounted = function () {


  EventBus.bus.addListener(EventBus.HEAD_ICON, controlHandle)

}

head3DIconListen.remove = function () {

  EventBus.bus.removeListener(EventBus.HEAD_ICON, controlHandle);

}


function controlHandle(item) {

  if(projectConfig.state.mapType == "3d"){

    // console.log(item);
    if (item.type == "router") {
      listenerInit.router.push(item.router);
    }
    else{
      actionControl(item);
    }
  }
}


function actionControl(item) {


  switch (item.title) {
    case '测量':

      break;

  }

}



