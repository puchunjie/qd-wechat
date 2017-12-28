const URI = 'http://192.168.0.251'
const fetch = require('./fetch')

/**
 * 数据获取公共封装
 */
function fetchApi(path,params) {
  return fetch(URI,path,params)
}


/** =====================首页接口======================== */

/**
 * 获取卖家排行榜数据
 * @param  {String} type   类型，例如：'coming_soon'
 * @param  {Number} page   页码
 * @param  {Number} count  页条数
 * @param  {String} search 搜索关键词
 * @return {Promise}       包含抓取任务的Promise
 */
export const getSellerRank = () => {
  return fetchApi('api/main/countSellActive').then(res => res.data)
}