


import {center2DControl} from "./center2DControl";
import {center3DControl} from "./center3DControl";
import {head2DIconListen} from "./head2DIconListen";
import {head3DIconListen} from "./head3DIconListen";
import {left2DListen} from "./left2DListen";
import {left3DListen} from "./left3DListen";


export const listenerInit = {};


listenerInit.router = null
listenerInit.init = function(router){

  listenerInit.router = router;
  center2DControl.mounted();

  center3DControl.mounted();

  head2DIconListen.mounted();

  head3DIconListen.mounted();

  left3DListen.mounted();

  left2DListen.mounted();
}

listenerInit.remove = function () {

  center2DControl.remove();

  center3DControl.remove();

  head2DIconListen.remove();

  head3DIconListen.remove();

  left3DListen.remove();

  left2DListen.remove();
}




