### 模板方法模式
* 模版方法模式是一种基于继承的设计模式，在javascript中没有真正意义上的继承，所有继承都是来自  
原型(prototype)上的继承，随着es6的到来，实现了继承的‘概念’，让我们可以以一种很方便简洁的方式即成，但是本质上还是原型继承。

* 模板方式模式由两部分组成，第一部分是抽象父类，第二部分是具体的实现子类。抽象父类主要是封装了子类的算法框架，以及实现了一些公共的方法和其他方法的执行顺序。子类通过继承父类，继承了父类的算法框架，并进行重写。

#### 优点
* 提供公共的代码便于维护。行为由父类控制，具体有子类来实现。
#### 缺点
* 其中每一个具体实现都需要继承的子类来实现，这无疑到之类的个数增加，使得系统庞大