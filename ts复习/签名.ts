/*
 * @Author: QqqIAs 1982421402@qq.com
 * @Date: 2023-05-23 00:27:13
 * @LastEditors: QqqIAs 1982421402@qq.com
 * @LastEditTime: 2023-05-23 00:33:07
 * @FilePath: \手写\手写题\ts复习\签名.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
//调用签名 作用是为了描述带有属性的函数
interface IFn {
  name: string;
  (num1: number, num2: number): void;
}

function foo(fn: IFn) {
  console.log(fn.name);
  fn(1, 3);
}

//构造签名
interface myPerson {
  new (name: string): Person;
}

class Person {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

function factory(ctor: myPerson) {
  return new ctor("coder");
}

export {}
