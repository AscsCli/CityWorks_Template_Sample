import EventEmitter from 'wolfy87-eventemitter'
export const EventBus = {};
/**
 * 创建一个事件总线实例
 * */
EventBus.bus = new EventEmitter;
/**
 * head中对应icon事件
 */
EventBus.HEAD_ICON = "HEAD_ICON";

/**
 * 左侧第一列 行政区域等事件
 */
EventBus.LEFT_FIRSTC = "LEFT_FIRSTC"

/**
 * 左侧第二列详细列表事件
 */
EventBus.LEFT_DETAIL = "LEFT_DETAIL";

/**
 * center中对应tab事件
 */
EventBus.CENTER_TAB = "CENTER_TAB";



