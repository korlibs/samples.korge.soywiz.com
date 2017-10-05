(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio-js', 'korma-js', 'korge-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio-js'), require('korma-js'), require('korge-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'output'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'output'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'output'.");
    }
    if (typeof this['korge-js'] === 'undefined') {
      throw new Error("Error loading module 'output'. Its dependency 'korge-js' was not found. Please, check whether 'korge-js' is loaded prior to 'output'.");
    }
    root.output = factory(typeof output === 'undefined' ? {} : output, kotlin, this['korio-js'], this['korma-js'], this['korge-js']);
  }
}(this, function (_, Kotlin, $module$korio_js, $module$korma_js, $module$korge_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Enum = Kotlin.kotlin.Enum;
  var Extra = $module$korio_js.com.soywiz.korio.util.Extra;
  var Extra$Mixin = $module$korio_js.com.soywiz.korio.util.Extra.Mixin;
  var PointInt = $module$korma_js.com.soywiz.korma.geom.PointInt;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var Unit = Kotlin.kotlin.Unit;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var Extra$Property = $module$korio_js.com.soywiz.korio.util.Extra.Property;
  var Signal = $module$korio_js.com.soywiz.korio.async.Signal;
  var get_0 = $module$korge_js.com.soywiz.korge.view.get_4h3qbs$;
  var play = $module$korge_js.com.soywiz.korge.animate.play_4h3qbs$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var tween = $module$korge_js.com.soywiz.korge.tween.tween_wrai67$;
  var async = $module$korio_js.com.soywiz.korio.async.async_3hy5wj$;
  var tween_0 = $module$korge_js.com.soywiz.korge.tween;
  var AnLibrary = $module$korge_js.com.soywiz.korge.animate.AnLibrary;
  var getPath = $module$korge_js.com.soywiz.korge.resources.getPath_lz4a6m$;
  var korge = $module$korge_js.com.soywiz.korge;
  var AsyncInjector = $module$korio_js.com.soywiz.korio.inject.AsyncInjector;
  var Module = $module$korge_js.com.soywiz.korge.scene.Module;
  var animate = $module$korge_js.com.soywiz.korge.animate;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var descendantsWithPropInt = $module$korge_js.com.soywiz.korge.view.descendantsWithPropInt_obdzzd$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var setText = $module$korge_js.com.soywiz.korge.view.setText_4h3qbs$;
  var minus = Kotlin.kotlin.collections.minus_q4559j$;
  var get_mouse = $module$korge_js.com.soywiz.korge.input.get_mouse_gohfi1$;
  var waitOne = $module$korio_js.com.soywiz.korio.async.waitOne_b1yv1r$;
  var go = $module$korio_js.com.soywiz.korio.async.go_n2b8nk$;
  var Scene = $module$korge_js.com.soywiz.korge.scene.Scene;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  Chip.prototype = Object.create(Enum.prototype);
  Chip.prototype.constructor = Chip;
  TicTacToeModule.prototype = Object.create(Module.prototype);
  TicTacToeModule.prototype.constructor = TicTacToeModule;
  TicTacToeMainScene.prototype = Object.create(Scene.prototype);
  TicTacToeMainScene.prototype.constructor = TicTacToeMainScene;
  function Chip(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Chip_initFields() {
    Chip_initFields = function () {
    };
    Chip$EMPTY_instance = new Chip('EMPTY', 0);
    Chip$CROSS_instance = new Chip('CROSS', 1);
    Chip$CIRCLE_instance = new Chip('CIRCLE', 2);
  }
  var Chip$EMPTY_instance;
  function Chip$EMPTY_getInstance() {
    Chip_initFields();
    return Chip$EMPTY_instance;
  }
  var Chip$CROSS_instance;
  function Chip$CROSS_getInstance() {
    Chip_initFields();
    return Chip$CROSS_instance;
  }
  var Chip$CIRCLE_instance;
  function Chip$CIRCLE_getInstance() {
    Chip_initFields();
    return Chip$CIRCLE_instance;
  }
  Chip.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Chip',
    interfaces: [Enum]
  };
  function Chip$values() {
    return [Chip$EMPTY_getInstance(), Chip$CROSS_getInstance(), Chip$CIRCLE_getInstance()];
  }
  Chip.values = Chip$values;
  function Chip$valueOf(name) {
    switch (name) {
      case 'EMPTY':
        return Chip$EMPTY_getInstance();
      case 'CROSS':
        return Chip$CROSS_getInstance();
      case 'CIRCLE':
        return Chip$CIRCLE_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korge.tictactoe.Chip.' + name);
    }
  }
  Chip.valueOf_61zpoe$ = Chip$valueOf;
  var Array2_init = $module$korma_js.com.soywiz.korma.ds.Array2;
  var Array_0 = Array;
  function Board(width, height, lineSize) {
    if (width === void 0)
      width = 3;
    if (height === void 0)
      height = width;
    if (lineSize === void 0)
      lineSize = width;
    this.width = width;
    this.height = height;
    this.lineSize = lineSize;
    var width_0 = this.width;
    var height_0 = this.height;
    var array = Array_0(Kotlin.imul(width_0, height_0));
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = Board$cells$lambda(this)(i);
    }
    this.cells = new Array2_init(width_0, height_0, array);
    this.lines = ArrayList_init();
    var tmp$_0, tmp$_1;
    var addLine = Board_init$addLine(this);
    tmp$_0 = this.height;
    for (var y = 0; y <= tmp$_0; y++) {
      tmp$_1 = this.width;
      for (var x = 0; x <= tmp$_1; x++) {
        addLine(this.select_4qozqa$(x, y, 1, 0, this.lineSize));
        addLine(this.select_4qozqa$(x, y, 0, 1, this.lineSize));
        addLine(this.select_4qozqa$(x, y, 1, 1, this.lineSize));
        addLine(this.select_4qozqa$(this.width - x - 1 | 0, y, -1, 1, this.lineSize));
      }
    }
  }
  function Board$Cell(x, y) {
    this.x = x;
    this.y = y;
    this.$delegate_tykasy$_0 = new Extra$Mixin();
    this.pos = new PointInt(this.x, this.y);
    this.value = Chip$EMPTY_getInstance();
  }
  Object.defineProperty(Board$Cell.prototype, 'extra', {
    get: function () {
      return this.$delegate_tykasy$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_tykasy$_0.extra = tmp$;
    }
  });
  Board$Cell.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Cell',
    interfaces: [Extra]
  };
  Board.prototype.inside_vux9f0$ = function (x, y) {
    return this.cells.inside_vux9f0$(x, y);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  Board.prototype.select_4qozqa$ = function (x, y, dx, dy, size) {
    if (!this.inside_vux9f0$(x, y))
      return null;
    if (!this.inside_vux9f0$(x + Kotlin.imul(dx, size - 1 | 0) | 0, y + Kotlin.imul(dy, size - 1 | 0) | 0))
      return null;
    var $receiver = until(0, size);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.cells.get_vux9f0$(x + Kotlin.imul(dx, item) | 0, y + Kotlin.imul(dy, item) | 0));
    }
    return destination;
  };
  Board.prototype.get_vux9f0$ = function (x, y) {
    return this.cells.get_vux9f0$(x, y);
  };
  Board.prototype.set_ucnn0w$ = function (x, y, value) {
    this.cells.get_vux9f0$(x, y).value = value;
  };
  var Collection = Kotlin.kotlin.collections.Collection;
  Board.prototype.get_chipLine_vxk3h4$ = function ($receiver) {
    var expected = first($receiver).value;
    var tmp$;
    if (expected === Chip$EMPTY_getInstance())
      tmp$ = null;
    else {
      var all$result;
      all$break: do {
        var tmp$_0;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (!(element.value === expected)) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      tmp$ = all$result ? expected : null;
    }
    return tmp$;
  };
  Object.defineProperty(Board.prototype, 'moreMovements', {
    get: function () {
      var $receiver = this.cells;
      var any$result;
      any$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          any$result = false;
          break any$break;
        }
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.value === Chip$EMPTY_getInstance()) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    }
  });
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  Object.defineProperty(Board.prototype, 'winnerLine', {
    get: function () {
      var tmp$;
      var out = ArrayList_init();
      tmp$ = this.lines.iterator();
      while (tmp$.hasNext()) {
        var line = tmp$.next();
        if (this.get_chipLine_vxk3h4$(line) != null) {
          addAll(out, line);
        }
      }
      return out.isEmpty() ? null : toList(toSet(out));
    }
  });
  Object.defineProperty(Board.prototype, 'winner', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.winnerLine) != null ? firstOrNull(tmp$) : null) != null ? tmp$_0.value : null;
    }
  });
  function Board$cells$lambda(this$Board) {
    return function (it) {
      return new Board$Cell(it % this$Board.width, it / this$Board.width | 0);
    };
  }
  function Board_init$addLine(this$Board) {
    return function (line) {
      if (line != null) {
        this$Board.lines.add_11rb$(line);
      }
    };
  }
  Board.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Board',
    interfaces: []
  };
  function view$lambda() {
    return null;
  }
  var view;
  var Any = Object;
  var lmapOf = $module$korio_js.com.soywiz.korio.ds.lmapOf_qfcya0$;
  function get_view($receiver) {
    var property = new Kotlin.PropertyMetadata('view');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = view.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = view.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = view.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_uu943u$result = r;
        break getValue_uu943u$break;
      }
      getValue_uu943u$result = res;
    }
     while (false);
    return getValue_uu943u$result;
  }
  function set_view($receiver, view_0) {
    var property = new Kotlin.PropertyMetadata('view');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = view.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = view_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function get_vview($receiver) {
    var tmp$;
    return (tmp$ = get_view($receiver)) != null ? tmp$ : Kotlin.throwNPE();
  }
  function onPress$lambda() {
    return new Signal();
  }
  var onPress;
  function get_onPress($receiver) {
    var property = new Kotlin.PropertyMetadata('onPress');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onPress.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onPress.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onPress.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_uu943u$result = r;
        break getValue_uu943u$break;
      }
      getValue_uu943u$result = res;
    }
     while (false);
    return getValue_uu943u$result;
  }
  function set($receiver, type) {
    var tmp$, tmp$_0;
    $receiver.value = type;
    tmp$_0 = get_0(get_view($receiver), 'chip');
    if (Kotlin.equals(type, Chip$EMPTY_getInstance()))
      tmp$ = 'empty';
    else if (Kotlin.equals(type, Chip$CIRCLE_getInstance()))
      tmp$ = 'circle';
    else if (Kotlin.equals(type, Chip$CROSS_getInstance()))
      tmp$ = 'cross';
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    play(tmp$_0, tmp$);
  }
  var interpolate = $module$korge_js.$$importsForInline$$['korma-js'].com.soywiz.korma.interpolation.interpolate_yvo9jy$;
  var V2_init = $module$korge_js.com.soywiz.korge.tween.V2;
  var withEasing = $module$korge_js.com.soywiz.korge.tween.withEasing_3705oi$;
  var TimeSpan = $module$korge_js.com.soywiz.korge.time.TimeSpan;
  function setAnimate$lambda(this$setAnimate_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$setAnimate$lambda(this$setAnimate_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$setAnimate$lambda(this$setAnimate_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$setAnimate = this$setAnimate_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$setAnimate$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setAnimate$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setAnimate$lambda.prototype.constructor = Coroutine$setAnimate$lambda;
  Coroutine$setAnimate$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$_4 = get_view(this.local$this$setAnimate);
            this.local$tmp$_0 = new V2_init(Kotlin.getPropertyCallableRef('alpha', 0, function ($receiver) {
              return $receiver.alpha;
            }.bind(null, (this.local$tmp$ = get_0(get_view(this.local$this$setAnimate), 'chip')) != null ? this.local$tmp$ : Kotlin.throwNPE()), function ($receiver, value) {
              $receiver.alpha = value;
            }.bind(null, (this.local$tmp$ = get_0(get_view(this.local$this$setAnimate), 'chip')) != null ? this.local$tmp$ : Kotlin.throwNPE())), Kotlin.numberToDouble(0.7), Kotlin.numberToDouble(1.0), Kotlin.getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            }));
            this.local$tmp$_2 = withEasing(new V2_init(Kotlin.getPropertyCallableRef('scale', 0, function ($receiver) {
              return $receiver.scale;
            }.bind(null, (this.local$tmp$_1 = get_0(get_view(this.local$this$setAnimate), 'chip')) != null ? this.local$tmp$_1 : Kotlin.throwNPE()), function ($receiver, value) {
              $receiver.scale = value;
            }.bind(null, (this.local$tmp$_1 = get_0(get_view(this.local$this$setAnimate), 'chip')) != null ? this.local$tmp$_1 : Kotlin.throwNPE())), Kotlin.numberToDouble(0.8), Kotlin.numberToDouble(1.0), Kotlin.getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            })), tween_0.Easings.EASE_OUT_ELASTIC);
            this.local$tmp$_3 = TimeSpan.Companion.fromMilliseconds_za3lpa$(Kotlin.numberToInt(300));
            this.state_0 = 2;
            this.result_0 = tween(this.local$tmp$_4, [this.local$tmp$_0, this.local$tmp$_2], this.local$tmp$_3, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function setAnimate($receiver_0, type_0, continuation_0, suspended) {
    var instance = new Coroutine$setAnimate($receiver_0, type_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$setAnimate($receiver_0, type_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$type = type_0;
  }
  Coroutine$setAnimate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setAnimate.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setAnimate.prototype.constructor = Coroutine$setAnimate;
  Coroutine$setAnimate.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            set(this.local$$receiver, this.local$type);
            this.state_0 = 2;
            this.result_0 = async(setAnimate$lambda(this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function highlighting$lambda() {
    return false;
  }
  var highlighting;
  function get_highlighting($receiver) {
    var property = new Kotlin.PropertyMetadata('highlighting');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = highlighting.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = highlighting.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = highlighting.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_uu943u$result = r;
        break getValue_uu943u$break;
      }
      getValue_uu943u$result = res;
    }
     while (false);
    return getValue_uu943u$result;
  }
  function set_highlighting($receiver, highlighting_0) {
    var property = new Kotlin.PropertyMetadata('highlighting');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = highlighting.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = highlighting_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function highlight$lambda(this$highlight_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$highlight$lambda(this$highlight_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$highlight$lambda(this$highlight_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$highlight = this$highlight_0;
    this.local$tmp$ = void 0;
    this.local$hl = void 0;
    this.local$$receiver = void 0;
    this.local$$receiver_0 = void 0;
    this.local$$receiver_1 = $receiver_0;
  }
  Coroutine$highlight$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$highlight$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$highlight$lambda.prototype.constructor = Coroutine$highlight$lambda;
  Coroutine$highlight$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$hl = (this.local$tmp$ = get_0(get_view(this.local$this$highlight), 'highlight')) != null ? this.local$tmp$ : Kotlin.throwNPE();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!get_highlighting(this.local$this$highlight)) {
              this.state_0 = 5;
              continue;
            }

            this.local$$receiver = Kotlin.getPropertyCallableRef('alpha', 0, function ($receiver) {
              return $receiver.alpha;
            }.bind(null, this.local$hl), function ($receiver, value) {
              $receiver.alpha = value;
            }.bind(null, this.local$hl));
            this.state_0 = 3;
            this.result_0 = tween(this.local$hl, [withEasing(new V2_init(this.local$$receiver, this.local$$receiver.get(), Kotlin.numberToDouble(0.7), Kotlin.getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            })), tween_0.Easings.EASE_IN_OUT_QUAD)], TimeSpan.Companion.fromMilliseconds_za3lpa$(Kotlin.numberToInt(300)), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$$receiver_0 = Kotlin.getPropertyCallableRef('alpha', 0, function ($receiver) {
              return $receiver.alpha;
            }.bind(null, this.local$hl), function ($receiver, value) {
              $receiver.alpha = value;
            }.bind(null, this.local$hl));
            this.state_0 = 4;
            this.result_0 = tween(this.local$hl, [withEasing(new V2_init(this.local$$receiver_0, this.local$$receiver_0.get(), Kotlin.numberToDouble(1.0), Kotlin.getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            })), tween_0.Easings.EASE_IN_OUT_QUAD)], TimeSpan.Companion.fromMilliseconds_za3lpa$(Kotlin.numberToInt(200)), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.state_0 = 2;
            continue;
          case 5:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function highlight$lambda_0(this$highlight_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$highlight$lambda_0(this$highlight_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$highlight$lambda_0(this$highlight_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$highlight = this$highlight_0;
    this.local$tmp$ = void 0;
    this.local$ch = void 0;
    this.local$$receiver = void 0;
    this.local$$receiver_0 = void 0;
    this.local$$receiver_1 = void 0;
    this.local$$receiver_2 = void 0;
    this.local$$receiver_3 = $receiver_0;
  }
  Coroutine$highlight$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$highlight$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$highlight$lambda_0.prototype.constructor = Coroutine$highlight$lambda_0;
  Coroutine$highlight$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$ch = (this.local$tmp$ = get_0(get_view(this.local$this$highlight), 'chip')) != null ? this.local$tmp$ : Kotlin.throwNPE();
            this.local$$receiver = Kotlin.getPropertyCallableRef('scale', 0, function ($receiver) {
              return $receiver.scale;
            }.bind(null, this.local$ch), function ($receiver, value) {
              $receiver.scale = value;
            }.bind(null, this.local$ch));
            this.state_0 = 2;
            this.result_0 = tween(this.local$ch, [withEasing(new V2_init(this.local$$receiver, this.local$$receiver.get(), Kotlin.numberToDouble(0.4), Kotlin.getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            })), tween_0.Easings.EASE_OUT_QUAD)], TimeSpan.Companion.fromMilliseconds_za3lpa$(Kotlin.numberToInt(100)), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver_0 = Kotlin.getPropertyCallableRef('scale', 0, function ($receiver) {
              return $receiver.scale;
            }.bind(null, this.local$ch), function ($receiver, value) {
              $receiver.scale = value;
            }.bind(null, this.local$ch));
            this.state_0 = 3;
            this.result_0 = tween(this.local$ch, [withEasing(new V2_init(this.local$$receiver_0, this.local$$receiver_0.get(), Kotlin.numberToDouble(1.2), Kotlin.getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            })), tween_0.Easings.EASE_OUT_ELASTIC)], TimeSpan.Companion.fromMilliseconds_za3lpa$(Kotlin.numberToInt(300)), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            if (!get_highlighting(this.local$this$highlight)) {
              this.state_0 = 7;
              continue;
            }

            this.local$$receiver_1 = Kotlin.getPropertyCallableRef('scale', 0, function ($receiver) {
              return $receiver.scale;
            }.bind(null, this.local$ch), function ($receiver, value) {
              $receiver.scale = value;
            }.bind(null, this.local$ch));
            this.state_0 = 5;
            this.result_0 = tween(this.local$ch, [withEasing(new V2_init(this.local$$receiver_1, this.local$$receiver_1.get(), Kotlin.numberToDouble(1.0), Kotlin.getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            })), tween_0.Easings.EASE_OUT_QUAD)], TimeSpan.Companion.fromMilliseconds_za3lpa$(Kotlin.numberToInt(300)), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 5:
            this.local$$receiver_2 = Kotlin.getPropertyCallableRef('scale', 0, function ($receiver) {
              return $receiver.scale;
            }.bind(null, this.local$ch), function ($receiver, value) {
              $receiver.scale = value;
            }.bind(null, this.local$ch));
            this.state_0 = 6;
            this.result_0 = tween(this.local$ch, [withEasing(new V2_init(this.local$$receiver_2, this.local$$receiver_2.get(), Kotlin.numberToDouble(1.2), Kotlin.getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            })), tween_0.Easings.EASE_OUT_ELASTIC)], TimeSpan.Companion.fromMilliseconds_za3lpa$(Kotlin.numberToInt(300)), void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.state_0 = 4;
            continue;
          case 7:
            return Unit;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function highlight($receiver_0, highlight_0, continuation_0, suspended) {
    var instance = new Coroutine$highlight($receiver_0, highlight_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$highlight($receiver_0, highlight_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$highlight = highlight_0;
  }
  Coroutine$highlight.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$highlight.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$highlight.prototype.constructor = Coroutine$highlight;
  Coroutine$highlight.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            play(get_0(get_view(this.local$$receiver), 'highlight'), this.local$highlight ? 'highlight' : 'none');
            set_highlighting(this.local$$receiver, this.local$highlight);
            if (this.local$highlight) {
              this.state_0 = 2;
              this.result_0 = async(highlight$lambda(this.local$$receiver), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = async(highlight$lambda_0(this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function lowlight$lambda(this$lowlight_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$lowlight$lambda(this$lowlight_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$lowlight$lambda(this$lowlight_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$lowlight = this$lowlight_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_5 = void 0;
    this.local$$receiver = void 0;
    this.local$$receiver_0 = $receiver_0;
  }
  Coroutine$lowlight$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$lowlight$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$lowlight$lambda.prototype.constructor = Coroutine$lowlight$lambda;
  Coroutine$lowlight$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$_5 = get_view(this.local$this$lowlight);
            this.local$tmp$_0 = new V2_init(Kotlin.getPropertyCallableRef('scale', 0, function ($receiver) {
              return $receiver.scale;
            }.bind(null, (this.local$tmp$ = get_view(this.local$this$lowlight)) != null ? this.local$tmp$ : Kotlin.throwNPE()), function ($receiver, value) {
              $receiver.scale = value;
            }.bind(null, (this.local$tmp$ = get_view(this.local$this$lowlight)) != null ? this.local$tmp$ : Kotlin.throwNPE())), Kotlin.numberToDouble(1.0), Kotlin.numberToDouble(0.7), Kotlin.getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            }));
            this.local$$receiver = Kotlin.getPropertyCallableRef('alpha', 0, function ($receiver) {
              return $receiver.alpha;
            }.bind(null, (this.local$tmp$_1 = get_view(this.local$this$lowlight)) != null ? this.local$tmp$_1 : Kotlin.throwNPE()), function ($receiver, value) {
              $receiver.alpha = value;
            }.bind(null, (this.local$tmp$_1 = get_view(this.local$this$lowlight)) != null ? this.local$tmp$_1 : Kotlin.throwNPE()));
            this.local$tmp$_2 = new V2_init(this.local$$receiver, this.local$$receiver.get(), Kotlin.numberToDouble(0.3), Kotlin.getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            }));
            this.local$tmp$_3 = TimeSpan.Companion.fromMilliseconds_za3lpa$(Kotlin.numberToInt(300));
            this.local$tmp$_4 = tween_0.Easings.EASE_OUT_QUAD;
            this.state_0 = 2;
            this.result_0 = tween(this.local$tmp$_5, [this.local$tmp$_0, this.local$tmp$_2], this.local$tmp$_3, this.local$tmp$_4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function lowlight($receiver_0, lowlight_0, continuation_0, suspended) {
    var instance = new Coroutine$lowlight($receiver_0, lowlight_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$lowlight($receiver_0, lowlight_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$lowlight = lowlight_0;
  }
  Coroutine$lowlight.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$lowlight.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$lowlight.prototype.constructor = Coroutine$lowlight;
  Coroutine$lowlight.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = async(lowlight$lambda(this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function reset($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$reset($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$reset($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$cell = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$reset.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$reset.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$reset.prototype.constructor = Coroutine$reset;
  Coroutine$reset.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$$receiver.cells.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            this.local$cell = this.local$tmp$.next();
            set(this.local$cell, Chip$EMPTY_getInstance());
            this.state_0 = 3;
            this.result_0 = highlight(this.local$cell, false, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            (this.local$tmp$_0 = get_view(this.local$cell)) != null ? (this.local$tmp$_0.scale = 1.0) : null;
            (this.local$tmp$_1 = get_view(this.local$cell)) != null ? (this.local$tmp$_1.alpha = 1.0) : null;
            (this.local$tmp$_2 = get_0(get_view(this.local$cell), 'chip')) != null ? (this.local$tmp$_2.scale = 1.0) : null;
            (this.local$tmp$_3 = get_0(get_view(this.local$cell), 'chip')) != null ? (this.local$tmp$_3.alpha = 1.0) : null;
            this.state_0 = 2;
            continue;
          case 4:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function init$lambda(this$init_0) {
    return function (it_0, continuation_0, suspended) {
      var instance = new Coroutine$init$lambda(this$init_0, it_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$init$lambda(this$init_0, it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$init = this$init_0;
    this.local$it = it_0;
  }
  Coroutine$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init$lambda.prototype.constructor = Coroutine$init$lambda;
  Coroutine$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return get_onPress(this.local$this$init).invoke_11rb$(Unit), Unit;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var addSuspend = $module$korge_js.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_vumi11$;
  function init($receiver, view) {
    set_view($receiver, view);
    set($receiver, $receiver.value);
    var $receiver_0 = get_0(view, 'hit');
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = $receiver_0 != null ? get_mouse($receiver_0) : null) != null ? tmp$.onClick : null) != null ? addSuspend(tmp$_0, $receiver_0.views.coroutineContext, init$lambda($receiver)) : null;
  }
  function generatedInject$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$generatedInject$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$generatedInject$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$generatedInject$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$generatedInject$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$generatedInject$lambda.prototype.constructor = Coroutine$generatedInject$lambda;
  Coroutine$generatedInject$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = getPath(this.local$$receiver, Kotlin.getKClass(AnLibrary), 'main.ani', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return new TicTacToeMainScene(this.result_0);
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function generatedInject($receiver) {
    return $receiver.mapPrototype_7g6y7r$(Kotlin.getKClass(TicTacToeMainScene), generatedInject$lambda);
  }
  function TicTacToe() {
    TicTacToe_instance = this;
  }
  TicTacToe.prototype.main_kand9s$ = function (args) {
    korge.Korge.invoke_hyyfuf$(TicTacToeModule_getInstance(), void 0, void 0, void 0, void 0, void 0, generatedInject(new AsyncInjector()));
  };
  TicTacToe.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'TicTacToe',
    interfaces: []
  };
  var TicTacToe_instance = null;
  function TicTacToe_getInstance() {
    if (TicTacToe_instance === null) {
      new TicTacToe();
    }
    return TicTacToe_instance;
  }
  function TicTacToeModule() {
    TicTacToeModule_instance = this;
    Module.call(this);
    this.mainScene_k5z6cr$_0 = Kotlin.getKClass(TicTacToeMainScene);
    this.title_c6jjwa$_0 = 'tic-tac-toe';
    this.icon_xt0b0d$_0 = 'icon.png';
    this.plugins_dluaf2$_0 = plus(Kotlin.callGetter(this, Module.prototype, 'plugins'), listOf(animate.AnLibraryPlugin));
  }
  Object.defineProperty(TicTacToeModule.prototype, 'mainScene', {
    get: function () {
      return this.mainScene_k5z6cr$_0;
    }
  });
  Object.defineProperty(TicTacToeModule.prototype, 'title', {
    get: function () {
      return this.title_c6jjwa$_0;
    }
  });
  Object.defineProperty(TicTacToeModule.prototype, 'icon', {
    get: function () {
      return this.icon_xt0b0d$_0;
    }
  });
  Object.defineProperty(TicTacToeModule.prototype, 'plugins', {
    get: function () {
      return this.plugins_dluaf2$_0;
    }
  });
  TicTacToeModule.prototype.init_e2b4l9$ = function (injector, continuation) {
  };
  TicTacToeModule.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'TicTacToeModule',
    interfaces: [Module]
  };
  var TicTacToeModule_instance = null;
  function TicTacToeModule_getInstance() {
    if (TicTacToeModule_instance === null) {
      new TicTacToeModule();
    }
    return TicTacToeModule_instance;
  }
  function TicTacToeMainScene(mainLibrary) {
    Scene.call(this);
    this.mainLibrary = mainLibrary;
    this.board = new Board(3, 3);
    this.game_2q2nht$_0 = this.game_2q2nht$_0;
  }
  Object.defineProperty(TicTacToeMainScene.prototype, 'game', {
    get: function () {
      if (this.game_2q2nht$_0 == null)
        return Kotlin.throwUPAE('game');
      return this.game_2q2nht$_0;
    },
    set: function (game) {
      this.game_2q2nht$_0 = game;
    }
  });
  function TicTacToeMainScene$sceneInit$lambda(this$TicTacToeMainScene_0, closure$sceneView_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$TicTacToeMainScene$sceneInit$lambda(this$TicTacToeMainScene_0, closure$sceneView_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TicTacToeMainScene$sceneInit$lambda(this$TicTacToeMainScene_0, closure$sceneView_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$TicTacToeMainScene = this$TicTacToeMainScene_0;
    this.local$closure$sceneView = closure$sceneView_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$result = void 0;
    this.local$results = void 0;
    this.local$cell = void 0;
    this.local$cell_0 = void 0;
  }
  Coroutine$TicTacToeMainScene$sceneInit$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TicTacToeMainScene$sceneInit$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TicTacToeMainScene$sceneInit$lambda.prototype.constructor = Coroutine$TicTacToeMainScene$sceneInit$lambda;
  Coroutine$TicTacToeMainScene$sceneInit$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = reset(this.local$this$TicTacToeMainScene.game.board, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$this$TicTacToeMainScene.game.game(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.local$result = this.result_0;
            println(this.local$result);
            this.local$results = this.local$this$TicTacToeMainScene.mainLibrary.createMovieClip_61zpoe$('Results');
            if (Kotlin.isType(this.local$result, Game$Result$DRAW)) {
              setText(get_0(this.local$results, 'result'), 'DRAW');
              this.state_0 = 12;
              continue;
            }
             else {
              if (Kotlin.isType(this.local$result, Game$Result$WIN)) {
                setText(get_0(this.local$results, 'result'), 'WIN');
                this.local$tmp$ = this.local$result.cells.iterator();
                this.state_0 = 5;
                continue;
              }
               else {
                this.state_0 = 11;
                continue;
              }
            }

          case 5:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            this.local$cell = this.local$tmp$.next();
            this.state_0 = 6;
            this.result_0 = highlight(this.local$cell, true, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.state_0 = 5;
            continue;
          case 7:
            this.local$tmp$_0 = minus(toList(this.local$this$TicTacToeMainScene.game.board.cells), this.local$result.cells).iterator();
            this.state_0 = 8;
            continue;
          case 8:
            if (!this.local$tmp$_0.hasNext()) {
              this.state_0 = 10;
              continue;
            }

            this.local$cell_0 = this.local$tmp$_0.next();
            this.state_0 = 9;
            this.result_0 = lowlight(this.local$cell_0, true, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 9:
            this.state_0 = 8;
            continue;
          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            this.local$closure$sceneView.plusAssign_l5rad2$(this.local$results);
            this.state_0 = 13;
            this.result_0 = (this.local$tmp$_3 = (this.local$tmp$_2 = (this.local$tmp$_1 = get_0(this.local$results, 'hit')) != null ? get_mouse(this.local$tmp$_1) : null) != null ? this.local$tmp$_2.onClick : null) != null ? waitOne(this.local$tmp$_3, this) : null;
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 13:
            this.local$results.removeFromParent();
            this.state_0 = 2;
            continue;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  TicTacToeMainScene.prototype.sceneInit_f3yb8w$ = function (sceneView_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_f3yb8w$(this, sceneView_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneInit_f3yb8w$($this, sceneView_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$rowView = void 0;
    this.local$row = void 0;
    this.local$tmp$_2 = void 0;
    this.local$cellView = void 0;
    this.local$cell = void 0;
    this.local$p1 = void 0;
    this.local$p2 = void 0;
    this.local$sceneView = sceneView_0;
  }
  Coroutine$sceneInit_f3yb8w$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_f3yb8w$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_f3yb8w$.prototype.constructor = Coroutine$sceneInit_f3yb8w$;
  Coroutine$sceneInit_f3yb8w$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$sceneView.plusAssign_l5rad2$(this.$this.mainLibrary.createMainTimeLine());
            this.local$tmp$ = descendantsWithPropInt(this.local$sceneView, 'row').iterator();
            while (this.local$tmp$.hasNext()) {
              this.local$tmp$_1 = this.local$tmp$.next();
              this.local$rowView = this.local$tmp$_1.component1(), this.local$row = this.local$tmp$_1.component2();
              this.local$tmp$_0 = descendantsWithPropInt(this.local$rowView, 'cell').iterator();
              while (this.local$tmp$_0.hasNext()) {
                this.local$tmp$_2 = this.local$tmp$_0.next();
                this.local$cellView = this.local$tmp$_2.component1(), this.local$cell = this.local$tmp$_2.component2();
                init(this.$this.board.cells.get_vux9f0$(this.local$row, this.local$cell), this.local$cellView);
              }
            }

            this.local$p1 = new InteractivePlayer(this.$this.board, Chip$CROSS_getInstance());
            this.local$p2 = new BotPlayer(this.$this.board, Chip$CIRCLE_getInstance());
            this.$this.game = new Game(this.$this.board, listOf_0([this.local$p1, this.local$p2]));
            this.$this.cancellables.plusAssign_kou100$(go(this.$this, TicTacToeMainScene$sceneInit$lambda(this.$this, this.local$sceneView)));
            return;
          case 1:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  TicTacToeMainScene.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TicTacToeMainScene',
    interfaces: [Scene]
  };
  function Player() {
  }
  Player.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Player',
    interfaces: []
  };
  function Game(board, players) {
    this.board = board;
    this.players = players;
  }
  function Game$Result() {
  }
  function Game$Result$DRAW() {
    Game$Result$DRAW_instance = this;
  }
  Game$Result$DRAW.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'DRAW',
    interfaces: [Game$Result]
  };
  var Game$Result$DRAW_instance = null;
  function Game$Result$DRAW_getInstance() {
    if (Game$Result$DRAW_instance === null) {
      new Game$Result$DRAW();
    }
    return Game$Result$DRAW_instance;
  }
  function Game$Result$WIN(player, cells) {
    this.player = player;
    this.cells = cells;
  }
  Game$Result$WIN.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WIN',
    interfaces: [Game$Result]
  };
  Game$Result.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Result',
    interfaces: []
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  Game.prototype.game = function (continuation_0, suspended) {
    var instance = new Coroutine$game(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$game($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$turn = void 0;
    this.local$currentPlayer = void 0;
    this.local$pos = void 0;
  }
  Coroutine$game.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$game.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$game.prototype.constructor = Coroutine$game;
  Coroutine$game.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$turn = 0;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.$this.board.moreMovements) {
              this.state_0 = 9;
              continue;
            }

            this.local$currentPlayer = this.$this.players.get_za3lpa$(this.local$turn % this.$this.players.size);
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$currentPlayer.move(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.local$pos = this.result_0;
            println(this.local$pos);
            if (this.$this.board.cells.get_kp3ah4$(this.local$pos).value === Chip$EMPTY_getInstance()) {
              this.state_0 = 5;
              this.result_0 = setAnimate(this.$this.board.cells.get_kp3ah4$(this.local$pos), this.local$currentPlayer.chip, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 5:
            this.state_0 = 7;
            continue;
          case 6:
            this.state_0 = 3;
            continue;
          case 7:
            if (this.$this.board.winner != null) {
              return new Game$Result$WIN(this.local$currentPlayer, (this.local$tmp$ = this.$this.board.winnerLine) != null ? this.local$tmp$ : emptyList());
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 8:
            this.local$turn = this.local$turn + 1 | 0;
            this.state_0 = 2;
            continue;
          case 9:
            return Game$Result$DRAW_getInstance();
        }
      }
       catch (e) {
        if (this.state_0 === 1)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Game.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Game',
    interfaces: []
  };
  function BotPlayer(board, chip) {
    this.board = board;
    this.chip_h05mf0$_0 = chip;
  }
  Object.defineProperty(BotPlayer.prototype, 'chip', {
    get: function () {
      return this.chip_h05mf0$_0;
    }
  });
  BotPlayer.prototype.move = function (continuation) {
    var tmp$;
    tmp$ = this.board.cells.iterator();
    while (tmp$.hasNext()) {
      var cell = tmp$.next();
      if (cell.value === Chip$EMPTY_getInstance()) {
        return cell.pos;
      }
    }
    invalidOp('No more movements');
  };
  BotPlayer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BotPlayer',
    interfaces: [Player]
  };
  function InteractivePlayer(board, chip) {
    this.board = board;
    this.chip_rcuy3l$_0 = chip;
    this.clicked = new Signal();
    var tmp$;
    tmp$ = this.board.cells.iterator();
    while (tmp$.hasNext()) {
      var cell = tmp$.next();
      get_onPress(cell).invoke_qlkmfe$(InteractivePlayer_init$lambda(this, cell));
    }
  }
  Object.defineProperty(InteractivePlayer.prototype, 'chip', {
    get: function () {
      return this.chip_rcuy3l$_0;
    }
  });
  InteractivePlayer.prototype.move = function (continuation) {
    return waitOne(this.clicked, continuation);
  };
  function InteractivePlayer_init$lambda(this$InteractivePlayer, closure$cell) {
    return function (it) {
      this$InteractivePlayer.clicked.invoke_11rb$(closure$cell.pos);
      return Unit;
    };
  }
  InteractivePlayer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InteractivePlayer',
    interfaces: [Player]
  };
  Object.defineProperty(Chip, 'EMPTY', {
    get: Chip$EMPTY_getInstance
  });
  Object.defineProperty(Chip, 'CROSS', {
    get: Chip$CROSS_getInstance
  });
  Object.defineProperty(Chip, 'CIRCLE', {
    get: Chip$CIRCLE_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korge = package$soywiz.korge || (package$soywiz.korge = {});
  var package$tictactoe = package$korge.tictactoe || (package$korge.tictactoe = {});
  package$tictactoe.Chip = Chip;
  Board.Cell = Board$Cell;
  $$importsForInline$$['korma-js'] = $module$korma_js;
  package$tictactoe.Board = Board;
  $$importsForInline$$['korio-js'] = $module$korio_js;
  package$tictactoe.get_view_5d0l7j$ = get_view;
  package$tictactoe.set_view_7z8ozc$ = set_view;
  package$tictactoe.get_vview_5d0l7j$ = get_vview;
  package$tictactoe.get_onPress_5d0l7j$ = get_onPress;
  package$tictactoe.set_wbgzap$ = set;
  $$importsForInline$$['korge-js'] = $module$korge_js;
  package$tictactoe.setAnimate_wbgzap$ = setAnimate;
  package$tictactoe.get_highlighting_5d0l7j$ = get_highlighting;
  package$tictactoe.set_highlighting_38afp8$ = set_highlighting;
  package$tictactoe.highlight_38afp8$ = highlight;
  package$tictactoe.lowlight_38afp8$ = lowlight;
  package$tictactoe.reset_9rptmb$ = reset;
  package$tictactoe.init_il5yzt$ = init;
  package$tictactoe.generatedInject_9swmes$ = generatedInject;
  Object.defineProperty(package$tictactoe, 'TicTacToe', {
    get: TicTacToe_getInstance
  });
  Object.defineProperty(package$tictactoe, 'TicTacToeModule', {
    get: TicTacToeModule_getInstance
  });
  package$tictactoe.TicTacToeMainScene = TicTacToeMainScene;
  package$tictactoe.Player = Player;
  Object.defineProperty(Game$Result, 'DRAW', {
    get: Game$Result$DRAW_getInstance
  });
  Game$Result.WIN = Game$Result$WIN;
  Game.Result = Game$Result;
  package$tictactoe.Game = Game;
  package$tictactoe.BotPlayer = BotPlayer;
  package$tictactoe.InteractivePlayer = InteractivePlayer;
  view = new Extra$Property(void 0, view$lambda);
  onPress = new Extra$Property(void 0, onPress$lambda);
  highlighting = new Extra$Property(void 0, highlighting$lambda);
  Kotlin.defineModule('output', _);
  return _;
}));
