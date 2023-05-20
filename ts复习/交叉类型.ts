/*
 * @Author: QqqIAs 1982421402@qq.com
 * @Date: 2023-05-20 15:49:45
 * @LastEditors: QqqIAs 1982421402@qq.com
 * @LastEditTime: 2023-05-20 15:52:03
 * @FilePath: \手写\手写题\ts复习\交叉类型.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
interface Colorful {
  color: string;
}

interface IRun {
  running: () => void;
}

type newType = Colorful & IRun;

const obj: newType = {
  color: "red",
  running: function () {},
};
