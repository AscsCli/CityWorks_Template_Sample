
import {EventBus} from '../eventBus/eventBus';
import projectConfig from "../store/modules/projectConfig";
import {listenerInit} from "./listenerInit";


export const center3DControl = {}



center3DControl.mounted = function() {


  EventBus.bus.addListener(EventBus.CENTER_TAB, controlHandle);


}

center3DControl.remove = function () {

  EventBus.bus.removeListener(EventBus.CENTER_TAB, controlHandle);
}


function controlHandle(item) {

  if (projectConfig.state.mapType == "3d") {

    // console.log(item);

    if (item.type == "router") {
      listenerInit.router.push(item.router);
    }
    else {

      actionControl(item);
    }


  }
}


function actionControl(item) {

  switch (item.title) {
    case '选中':

      break;

  }
}
