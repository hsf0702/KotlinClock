if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'app'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'app'.");
}
var app = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var Unit = Kotlin.kotlin.Unit;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var math = Kotlin.kotlin.math;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var canvans;
  var ctx;
  var width;
  var height;
  var radius;
  function main$lambda() {
    drawClock();
    return Unit;
  }
  function main(args) {
    console.log('KotlinJs');
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    drawClock();
    window.setInterval(main$lambda, 1000);
  }
  function drawClock() {
    ctx.clearRect(0.0, 0.0, width, height);
    drawBackGround();
    drawDots();
    drawHoursText();
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    println(hour.toString() + ',' + minute.toString() + ',' + second.toString());
    drawHoursLine(hour, minute);
    drawMintuesLine(minute);
    drawSecondsLine(second);
    drawCenterDot();
    ctx.restore();
  }
  function drawCenterDot() {
    ctx.beginPath();
    ctx.arc(0.0, 0.0, 4.0, 0.0, 2 * math.PI);
    ctx.fillStyle = '#ccc';
    ctx.fill();
  }
  function drawHoursLine(hours, minute) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * math.PI / 12 * hours;
    var mRad = 2 * math.PI / 60 / 12 * minute;
    ctx.lineCap = 'round';
    ctx.rotate(rad + mRad);
    ctx.moveTo(0.0, 10.0);
    ctx.lineTo(0.0, -radius / 2);
    ctx.stroke();
    ctx.restore();
  }
  function drawMintuesLine(minutes) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * math.PI / 60 * minutes;
    ctx.lineCap = 'round';
    ctx.lineWidth = 4.0;
    ctx.rotate(rad);
    ctx.moveTo(0.0, 12.0);
    ctx.lineTo(0.0, -radius + 36);
    ctx.stroke();
    ctx.restore();
  }
  function drawSecondsLine(seconds) {
    ctx.save();
    ctx.beginPath();
    var rad = 2 * math.PI / 60 * seconds;
    ctx.lineCap = 'round';
    ctx.lineWidth = 3.0;
    ctx.rotate(rad);
    ctx.fillStyle = '#f00';
    ctx.moveTo(-2.0, 20.0);
    ctx.lineTo(2.0, 20.0);
    ctx.lineTo(1.0, -radius + 18);
    ctx.lineTo(-1.0, -radius + 18);
    ctx.fill();
    ctx.restore();
  }
  var hourArr;
  var Math_0 = Math;
  function drawHoursText() {
    var $receiver = hourArr;
    var tmp$, tmp$_0;
    var index = 0;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      var index_0 = (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0);
      ctx.beginPath();
      ctx.font = '20px Arial';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var rad = 2 * math.PI / 12 * index_0;
      var x = Math_0.cos(rad) * (radius - 25);
      var y = Math_0.sin(rad) * (radius - 25);
      ctx.fillStyle = '#000';
      ctx.fillText(item, x, y);
    }
  }
  function drawDots() {
    var range = new IntRange(0, 59);
    var tmp$;
    tmp$ = range.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      ctx.beginPath();
      var rad = 2 * math.PI / 60 * element;
      var x = Math_0.cos(rad) * (radius - 10);
      var y = Math_0.sin(rad) * (radius - 10);
      ctx.arc(x, y, 2.0, 0.0, 2 * math.PI);
      if (element % 5 === 0) {
        ctx.fillStyle = '#000';
      }
       else {
        ctx.fillStyle = '#ccc';
      }
      ctx.fill();
    }
  }
  function drawBackGround() {
    ctx.save();
    ctx.beginPath();
    ctx.lineWidth = 6.0;
    ctx.translate(width / 2 | 0, (height / 2 | 0) - 200);
    ctx.arc(0.0, 0.0, radius, 0.0, 2 * math.PI);
    ctx.stroke();
  }
  Object.defineProperty(_, 'canvans', {
    get: function () {
      return canvans;
    }
  });
  Object.defineProperty(_, 'ctx', {
    get: function () {
      return ctx;
    }
  });
  Object.defineProperty(_, 'width', {
    get: function () {
      return width;
    }
  });
  Object.defineProperty(_, 'height', {
    get: function () {
      return height;
    }
  });
  Object.defineProperty(_, 'radius', {
    get: function () {
      return radius;
    }
  });
  _.main_kand9s$ = main;
  _.drawCenterDot = drawCenterDot;
  _.drawHoursLine_vux9f0$ = drawHoursLine;
  _.drawMintuesLine_za3lpa$ = drawMintuesLine;
  _.drawSecondsLine_za3lpa$ = drawSecondsLine;
  Object.defineProperty(_, 'hourArr', {
    get: function () {
      return hourArr;
    }
  });
  _.drawHoursText = drawHoursText;
  _.drawDots = drawDots;
  _.drawBackGround = drawBackGround;
  var tmp$, tmp$_0;
  canvans = Kotlin.isType(tmp$ = document.getElementById('canvans'), HTMLCanvasElement) ? tmp$ : throwCCE();
  ctx = Kotlin.isType(tmp$_0 = canvans.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
  width = window.innerWidth;
  height = window.innerHeight;
  radius = 100.0;
  hourArr = ['3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '1', '2'];
  main([]);
  Kotlin.defineModule('app', _);
  return _;
}(typeof app === 'undefined' ? {} : app, kotlin);
