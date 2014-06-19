# IncreaseNumber

----

[![spm version](http://spmjs.io/badge/increasenumber)](http://spmjs.io/package/increasenumber)

数字自动增加的动画组件

- 支持参数修改动画时间
- 支持函数式输入控制变化进程
- 支持整数模式和小数模式
- 支持金额格式化


## Normal usage

```html
<div>
  <p class="data-increase" data-num="200000">0</p>
  <p class="data-increase" data-num="1000">0</p>
  <p><span class="data-increase data-percent" data-num="95.88">0</span> %</p>
</div>
```

```js
seajs.use('increasenumber', function(IncreaseNumber) {
  var increase = new IncreaseNumber('.data-increase');
  increase.start();
});
```

## API

### <span class="option-name">start()</span>

动画启动函数。

### <span class="option-name">stop()</span>

停止当前动画。

### <span class="option-name">setEvent(key, function)</span>

设置事件方法，目前支持<code>'beforeShow'</code>设置数字显示前的变化，例如：

```js
increase.setEvent('beforeShow', function(value, index, element){
	return value + '%';
});
```

### <span class="option-name">setAnimeFunction(function)</span>

设置数字变化的控制公式，与设置options中的animeFunc一致。

### <span class="option-name">IncreaseNumber.moneyFormat(num, n)</span>

金额格式化工具，输入num金额和保留小数点后n位，返回带逗号分割的标准金额格式。


## API (Options)

### <span class="option-name">decimalClass</span>

<span class="option-value">default: 'data-decimal'</span>

区分小数和整数的类名，存在该类名的数字默认显示两位小数，并且对应的param.isDecimal为true。

### <span class="option-name">dataAttr</span>

<span class="option-value">default: 'data-num'</span>

获取数据源的属性名。

### <span class="option-name">start</span>

<span class="option-value">default: 0</span>

动画起始时，数字起始值或以该百分比乘以数字得到起始值。

<code>start</code>值大于等1于时为起始值，<code>start</code>值小于1时为起始百分比。

### <span class="option-name">totalTime</span>

<span class="option-value">default: 3000</span>

总共动画耗费时间（毫秒）。

### <span class="option-name">intervalTime</span>

<span class="option-value">default: 40</span>

动画帧间隔时间（毫米）。

### <span class="option-name">animeFunc</span>

<span class="option-value">default: <code>function(x, a, index, element)</code></span>

数字变化的控制公式，x为单位坐标，a为变化速度，index为当前元素在组内下标，element为当前元素的DOM对象。

通过改变animeFunc可以控制动画变化的进程，例如使用平稳变化的线性函数：

```js
var increase = new IncreaseNumber('.data-increase', {
  animeFunc: function(x, a, index, element) {
    return a * x;
  }
});
increase.start();
```
