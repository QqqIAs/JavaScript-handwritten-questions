type cacl = (num1: number, num2: number) => number

// 推断返回值
type HyreturnType<T extends (...args: any[]) => number> = T extends (...args: any[]) => infer R ? R : never
function foo(num1: HyreturnType<cacl>)

//推断参数
type HyparameterType<T extends (args: any[]) => number> = T extends (...args: infer P) => number ? P : never

//额外补充
/**
 * Partial可选
 * Required 必填
 * Record 构造键值对
 * Pick 挑选属性
 * Omit 过滤属性
 */