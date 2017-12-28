/**
 * WeChat API 模块
 * @type {Object}
 * 用于将微信官方`API`封装为`Promise`方式
 * > 小程序支持以`CommonJS`规范组织代码结构
 */
const wechat = require('./utils/wechat.js')

/**
 * jiedan8 API 模块
 * @type {Object}
 */
const api = require('./utils/api.js')

App({
  /**
   * Global shared
   * 可以定义任何成员，用于在整个应用中共享
   */
  data: {
    name: '抢单',
  },

  /**
   * WeChat API
   */
  wechat: wechat,

  /**
   * jiedan8 API
   */
  api: api,


  /**
   * 生命周期函数--监听小程序初始化
   * 当小程序初始化完成时，会触发 onLaunch（全局只触发一次）
   */
  onLaunch() {
    wechat.getLocation()
  }
})