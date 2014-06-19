# IncreaseNumber Demo

----

## Normal usage

普通用法只要实例化一个对象，使用start()方法启动。

```html
<div>
  <p class="data-increase" data-num="200000">0</p>
  <p class="data-increase" data-num="1000">0</p>
  <p><span class="data-increase data-percent" data-num="95.88">0</span> %</p>
</div>

<script>
seajs.use('IncreaseNumber', function(IncreaseNumber) {
  var increase = new IncreaseNumber('.data-increase');
  increase.start();
});
</script>
```

## Set some options

在初始化时，输入一些参数调整动画的效果，包括时间长度控制、动画函数控制等（详见 [API options](http://spmjs.io/docs/increasenumber/latest/#api-options)）

<style>
.increase p{width:200px;padding:10px;margin:10px;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;background-color:#4ecbd8;font-size:20px;font-weight:700;color:#fff}
.increase p:nth-child(2){background-color:#f0640f}
.increase p:nth-child(3){background-color:#88bc2f}
</style>

<div class="increase">
  <p class="data-increase" data-num="200000">0</p>
  <p class="data-increase" data-num="1000">0</p>
  <p><span class="data-increase data-decimal" data-num="95.88">0</span> %</p>
</div>

<script>
seajs.use('../IncreaseNumber', function(IncreaseNumber) {
  var increase = new IncreaseNumber('.data-increase', {
    totalTime: 1000,
    animeFunc: function(x, a) {
      return a * Math.sqrt(x);
    }
  });
  increase.start();
});
</script>

```html
<div class="increase">
  <p class="data-increase" data-num="200000">0</p>
  <p class="data-increase" data-num="1000">0</p>
  <p><span class="data-increase data-decimal" data-num="95.88">0</span> %</p>
</div>

<script>
seajs.use('../IncreaseNumber', function(IncreaseNumber) {
  var increase = new IncreaseNumber('.data-increase', {
    totalTime: 1000,
    animeFunc: function(x, a) {
      return a * Math.sqrt(x);
    }
  });
  increase.start();
});
</script>
```

## Set value before show it

在把数字显示在页面之前可以对计算后的数字进行处理，比如金额格式化。
使用<code>setEvent('beforeShow', function)</code>设置处理的方式。

<div class="increase">
  <p class="data-increase2" data-num="12345678">0</p>
  <p class="data-increase2" data-num="1500000">0</p>
  <p><span class="data-increase2 data-decimal" data-num="66.24">0</span> %</p>
</div>

<script>
seajs.use('../IncreaseNumber', function(IncreaseNumber) {
  var increase = new IncreaseNumber('.data-increase2', {
    totalTime: 1000,
    animeFunc: function(x, a) {
      return a * Math.sqrt(x);
    }
  });

  increase.setEvent('beforeShow', function (value, index) {
    var n = this.param[index].isDecimal ? 2 : 0;
    return IncreaseNumber.moneyFormat(value, n);
  });

  increase.start();
});
</script>

```html
<div class="increase">
  <p class="data-increase2" data-num="12345678">0</p>
  <p class="data-increase2" data-num="1500000">0</p>
  <p><span class="data-increase2 data-decimal" data-num="66.24">0</span> %</p>
</div>

<script>
seajs.use('../IncreaseNumber', function(IncreaseNumber) {
  var increase = new IncreaseNumber('.data-increase2', {
    totalTime: 1000,
    animeFunc: function(x, a) {
      return a * Math.sqrt(x);
    }
  });

  increase.setEvent('beforeShow', function (value, index) {
    var n = this.param[index].isDecimal ? 2 : 0;
    return IncreaseNumber.moneyFormat(value, n);
  });

  increase.start();
});
</script>
```
