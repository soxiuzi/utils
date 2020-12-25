// 判断数据类型

const oproto = Object.prototype.toString

export default {
  /**
   * 是否为undefined类型
   * @param obj 待检测对象
   */
  isUndefined(obj) {
    return typeof obj === 'undefined'
  },
  /**
   * 是否为number类型
   * @param obj 待检测对象 
   */
  isNumber(obj) {
    return typeof obj === 'number'
  },
  /**
   * 是否为string类型
   * @param obj 待检测对象 
   */
  isString(obj) {
    return typeof obj === 'string'
  },
  /**
   * 是否为布尔类型
   * @param obj 待检测对象 
   */
  isBoolean(obj) {
    return typeof obj === 'boolean'
  },
  /**
   * 是否为null类型
   * @param obj 待检测对象
   */
  isNull(obj) {
    return obj === null
  },
  /**
   * 是否是函数类型
   * @param obj 待检测对象 
   */
  isFunction(obj) {
    return typeof obj === 'function'
  },
  /**
   * 是否是数组类型
   * @param obj 待检测对象 
   */
  isArray(obj) {
    return Array.isArray ? Array.isArray(obj) : oproto.call(obj) == '[object, Array]'
  },
  /**
   * 是否是对象类型
   * @param obj 待检测对象 
   */
  isObject(obj) {
    return oproto.call(obj) == '[object, Object]'
  }
}