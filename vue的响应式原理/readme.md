!(/image.png)
上图中，每个对象的每个属性都会对应一个dep对象，同一个对象的多个属性的dep对象会被放在一个map对象中，多个对象的map对象会被存放到一个objMap对象(WeakMap)中。
如果我们想拿到obj对象的name属性依赖，只需要：
const dep = objMap.get(obj).get(name)
dep.notify()
那么，如何去自动收集依赖呢？可以使用对象属性的getter，在执行get函数时，自动拿到dep对象，并且添加fn函数。
如果一个函数中会使用多次某个属性，那么会调用多次getter，将该函数收集。
为此我们可以使用Set来存储依赖函数，并且我们在addDepend时候并不需要传参，而是直接使用reactiveFn。为此我们可以作出如下优化。
