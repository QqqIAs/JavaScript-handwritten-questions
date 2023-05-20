/*
 * @Author: QqqIAs 1982421402@qq.com
 * @Date: 2023-05-20 15:16:17
 * @LastEditors: QqqIAs 1982421402@qq.com
 * @LastEditTime: 2023-05-20 15:16:32
 * @FilePath: \手写\手写题\ts复习\unknown.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
function foo(): string {
  return "abc";
}

function bar(): number {
  return 123;
}

let result: unknown;
const falg = true;

if (falg) {
  result = foo();
} else {
  result = bar()
}

if(typeof result === 'string') {
  console.log('12321321')
}

export {}