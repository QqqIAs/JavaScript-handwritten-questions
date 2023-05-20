/*
 * @Author: QqqIAs 1982421402@qq.com
 * @Date: 2023-03-22 19:15:38
 * @LastEditors: QqqIAs 1982421402@qq.com
 * @LastEditTime: 2023-04-06 11:39:54
 * @FilePath: \手写\手写题\js基础\25_数组push.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
Array.prototype._push = function(...args) {
  for(let i of agrs) {
    this[this.length] = i
  }
  return this.length
}