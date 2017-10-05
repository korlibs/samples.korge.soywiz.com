(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio-js', 'korim-js', 'korma-js', 'korag-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio-js'), require('korim-js'), require('korma-js'), require('korag-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korui-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korui-js'.");
    }
    if (typeof this['korim-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'korui-js'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korui-js'.");
    }
    if (typeof this['korag-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'korag-js' was not found. Please, check whether 'korag-js' is loaded prior to 'korui-js'.");
    }
    root['korui-js'] = factory(typeof this['korui-js'] === 'undefined' ? {} : this['korui-js'], kotlin, this['korio-js'], this['korim-js'], this['korma-js'], this['korag-js']);
  }
}(this, function (_, Kotlin, $module$korio_js, $module$korim_js, $module$korma_js, $module$korag_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var withCoroutineContext = $module$korio_js.com.soywiz.korio.coroutine.withCoroutineContext_3hy5wj$;
  var Unit = Kotlin.kotlin.Unit;
  var get_eventLoop = $module$korio_js.com.soywiz.korio.async.get_eventLoop_45jet4$;
  var spawn = $module$korio_js.com.soywiz.korio.async.spawn_g3zeo5$;
  var await_0 = $module$korio_js.com.soywiz.korio.async.await_7zc599$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var clamp = $module$korio_js.com.soywiz.korio.util.clamp_e4yvb3$;
  var Extra = $module$korio_js.com.soywiz.korio.util.Extra;
  var Extra$Mixin = $module$korio_js.com.soywiz.korio.util.Extra.Mixin;
  var Closeable = $module$korio_js.com.soywiz.korio.lang.Closeable_o14v8n$;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Enum = Kotlin.kotlin.Enum;
  var Any = Object;
  var color = $module$korim_js.com.soywiz.korim.color;
  var extraProperty = $module$korio_js.com.soywiz.korio.util.extraProperty;
  var SizeInt = $module$korma_js.com.soywiz.korma.geom.SizeInt;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var RectangleInt_init = $module$korma_js.com.soywiz.korma.geom.RectangleInt_init_tjonv8$;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var AGInput = $module$korag_js.com.soywiz.korag.AGInput;
  var AGContainer = $module$korag_js.com.soywiz.korag.AGContainer;
  var ScaleMode = $module$korma_js.com.soywiz.korma.geom.ScaleMode;
  var execAndForget = $module$korio_js.com.soywiz.korio.async.execAndForget_v9w3zs$;
  var Once = $module$korio_js.com.soywiz.korio.util.Once;
  var Extra$Property = $module$korio_js.com.soywiz.korio.util.Extra.Property;
  var Signal = $module$korio_js.com.soywiz.korio.async.Signal;
  var Extra$PropertyThis = $module$korio_js.com.soywiz.korio.util.Extra.PropertyThis;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_mqih57$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var NativeImage = $module$korim_js.com.soywiz.korim.bitmap.NativeImage_vux9f0$;
  var NativeImage_0 = $module$korim_js.com.soywiz.korim.bitmap.NativeImage_oiyklk$;
  var async = $module$korio_js.com.soywiz.korio.async;
  var korag = $module$korag_js.com.soywiz.korag;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var closeable = $module$korio_js.com.soywiz.korio.lang.closeable_n2ytw$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var format = $module$korim_js.com.soywiz.korim.format;
  var CanvasNativeImage = $module$korim_js.com.soywiz.korim.format.CanvasNativeImage;
  var CancellationException = $module$korio_js.com.soywiz.korio.lang.CancellationException;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var FileNotFoundException = $module$korio_js.com.soywiz.korio.lang.FileNotFoundException;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var copyRangeTo = $module$korio_js.com.soywiz.korio.typedarray.copyRangeTo_boa5ab$;
  var AsyncStreamBase = $module$korio_js.com.soywiz.korio.stream.AsyncStreamBase;
  var toAsyncStream = $module$korio_js.com.soywiz.korio.stream.toAsyncStream_ejtyh5$;
  var Vfs = $module$korio_js.com.soywiz.korio.vfs.Vfs;
  frame$ObjectLiteral.prototype = Object.create(LightResizeHandler.prototype);
  frame$ObjectLiteral.prototype.constructor = frame$ObjectLiteral;
  Length$Fixed.prototype = Object.create(Length.prototype);
  Length$Fixed.prototype.constructor = Length$Fixed;
  Length$Variable.prototype = Object.create(Length.prototype);
  Length$Variable.prototype.constructor = Length$Variable;
  Length$MM.prototype = Object.create(Length$Fixed.prototype);
  Length$MM.prototype.constructor = Length$MM;
  Length$CM.prototype = Object.create(Length$Fixed.prototype);
  Length$CM.prototype.constructor = Length$CM;
  Length$INCH.prototype = Object.create(Length$Fixed.prototype);
  Length$INCH.prototype.constructor = Length$INCH;
  Length$PT.prototype = Object.create(Length$Fixed.prototype);
  Length$PT.prototype.constructor = Length$PT;
  Length$EM.prototype = Object.create(Length$Fixed.prototype);
  Length$EM.prototype.constructor = Length$EM;
  Length$VW.prototype = Object.create(Length$Fixed.prototype);
  Length$VW.prototype.constructor = Length$VW;
  Length$VH.prototype = Object.create(Length$Fixed.prototype);
  Length$VH.prototype.constructor = Length$VH;
  Length$VMIN.prototype = Object.create(Length$Fixed.prototype);
  Length$VMIN.prototype.constructor = Length$VMIN;
  Length$VMAX.prototype = Object.create(Length$Fixed.prototype);
  Length$VMAX.prototype.constructor = Length$VMAX;
  Length$Ratio.prototype = Object.create(Length$Variable.prototype);
  Length$Ratio.prototype.constructor = Length$Ratio;
  Length$Binop.prototype = Object.create(Length.prototype);
  Length$Binop.prototype.constructor = Length$Binop;
  Length$Scale.prototype = Object.create(Length.prototype);
  Length$Scale.prototype.constructor = Length$Scale;
  LightType.prototype = Object.create(Enum.prototype);
  LightType.prototype.constructor = LightType;
  LogLightComponents.prototype = Object.create(LightComponents.prototype);
  LogLightComponents.prototype.constructor = LogLightComponents;
  Container.prototype = Object.create(Component.prototype);
  Container.prototype.constructor = Container;
  ScrollPane.prototype = Object.create(Container.prototype);
  ScrollPane.prototype.constructor = ScrollPane;
  Frame.prototype = Object.create(Container.prototype);
  Frame.prototype.constructor = Frame;
  AgCanvas.prototype = Object.create(Component.prototype);
  AgCanvas.prototype.constructor = AgCanvas;
  Button.prototype = Object.create(Component.prototype);
  Button.prototype.constructor = Button;
  Label.prototype = Object.create(Component.prototype);
  Label.prototype.constructor = Label;
  TextField.prototype = Object.create(Component.prototype);
  TextField.prototype.constructor = TextField;
  TextArea.prototype = Object.create(Component.prototype);
  TextArea.prototype.constructor = TextArea;
  CheckBox.prototype = Object.create(Component.prototype);
  CheckBox.prototype.constructor = CheckBox;
  Progress.prototype = Object.create(Component.prototype);
  Progress.prototype.constructor = Progress;
  Spacer.prototype = Object.create(Component.prototype);
  Spacer.prototype.constructor = Spacer;
  Image.prototype = Object.create(Component.prototype);
  Image.prototype.constructor = Image;
  registerMouseEventOnce$lambda$ObjectLiteral.prototype = Object.create(LightMouseHandler.prototype);
  registerMouseEventOnce$lambda$ObjectLiteral.prototype.constructor = registerMouseEventOnce$lambda$ObjectLiteral;
  registerKeyEventOnce$lambda$ObjectLiteral.prototype = Object.create(LightKeyHandler.prototype);
  registerKeyEventOnce$lambda$ObjectLiteral.prototype.constructor = registerKeyEventOnce$lambda$ObjectLiteral;
  registerTouchEventOnce$lambda$ObjectLiteral.prototype = Object.create(LightTouchHandler.prototype);
  registerTouchEventOnce$lambda$ObjectLiteral.prototype.constructor = registerTouchEventOnce$lambda$ObjectLiteral;
  registerGamepadEventOnce$lambda$ObjectLiteral.prototype = Object.create(LightGamepadHandler.prototype);
  registerGamepadEventOnce$lambda$ObjectLiteral.prototype.constructor = registerGamepadEventOnce$lambda$ObjectLiteral;
  registerChangeEventOnce$lambda$ObjectLiteral.prototype = Object.create(LightChangeHandler.prototype);
  registerChangeEventOnce$lambda$ObjectLiteral.prototype.constructor = registerChangeEventOnce$lambda$ObjectLiteral;
  Layout$ScaleMode2.prototype = Object.create(Enum.prototype);
  Layout$ScaleMode2.prototype.constructor = Layout$ScaleMode2;
  LayeredLayout.prototype = Object.create(Layout.prototype);
  LayeredLayout.prototype.constructor = LayeredLayout;
  LayeredKeepAspectLayout.prototype = Object.create(Layout.prototype);
  LayeredKeepAspectLayout.prototype.constructor = LayeredKeepAspectLayout;
  VerticalHorizontalLayout.prototype = Object.create(Layout.prototype);
  VerticalHorizontalLayout.prototype.constructor = VerticalHorizontalLayout;
  VerticalLayout.prototype = Object.create(VerticalHorizontalLayout.prototype);
  VerticalLayout.prototype.constructor = VerticalLayout;
  HorizontalLayout.prototype = Object.create(VerticalHorizontalLayout.prototype);
  HorizontalLayout.prototype.constructor = HorizontalLayout;
  ScrollPaneLayout.prototype = Object.create(VerticalHorizontalLayout.prototype);
  ScrollPaneLayout.prototype.constructor = ScrollPaneLayout;
  InlineLayout.prototype = Object.create(Layout.prototype);
  InlineLayout.prototype.constructor = InlineLayout;
  RelativeLayout.prototype = Object.create(Layout.prototype);
  RelativeLayout.prototype.constructor = RelativeLayout;
  VectorImage.prototype = Object.create(Container.prototype);
  VectorImage.prototype.constructor = VectorImage;
  HtmlLightComponents.prototype = Object.create(LightComponents.prototype);
  HtmlLightComponents.prototype.constructor = HtmlLightComponents;
  SelectedFilesVfs$open$ObjectLiteral.prototype = Object.create(AsyncStreamBase.prototype);
  SelectedFilesVfs$open$ObjectLiteral.prototype.constructor = SelectedFilesVfs$open$ObjectLiteral;
  SelectedFilesVfs.prototype = Object.create(Vfs.prototype);
  SelectedFilesVfs.prototype.constructor = SelectedFilesVfs;
  function Application$lambda(closure$light_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Application$lambda(closure$light_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Application$lambda(closure$light_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$light = closure$light_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Application$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Application$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Application$lambda.prototype.constructor = Coroutine$Application$lambda;
  Coroutine$Application$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Application_0(this.local$$receiver, this.local$closure$light);
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
  function Application(light, continuation) {
    if (light === void 0)
      light = get_defaultLight();
    return withCoroutineContext(Application$lambda(light), continuation);
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function Application_0(coroutineContext, light) {
    if (light === void 0)
      light = get_defaultLight();
    this.coroutineContext = coroutineContext;
    this.light = light;
    this.frames = ArrayList_init();
    var $receiver = new Length$Context();
    $receiver.pixelsPerInch = this.light.getDpi();
    this.lengthContext = $receiver;
    spawn(this.coroutineContext, Application_init$lambda(this));
  }
  function Application_init$lambda(this$Application_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Application_init$lambda(this$Application_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Application_init$lambda(this$Application_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Application = this$Application_0;
    this.local$tmp$ = void 0;
    this.local$$receiver = void 0;
    this.local$destination = void 0;
    this.local$tmp$_0 = void 0;
    this.local$element = void 0;
    this.local$frame = void 0;
  }
  Coroutine$Application_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Application_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Application_init$lambda.prototype.constructor = Coroutine$Application_init$lambda;
  Coroutine$Application_init$lambda.prototype.doResume = function () {
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
            this.result_0 = get_eventLoop(this.local$this$Application.coroutineContext).sleep_za3lpa$(16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$$receiver = this.local$this$Application.frames;
            this.local$destination = ArrayList_init();
            this.local$tmp$_0 = this.local$$receiver.iterator();
            while (this.local$tmp$_0.hasNext()) {
              this.local$element = this.local$tmp$_0.next();
              if (!this.local$element.valid)
                this.local$destination.add_11rb$(this.local$element);
            }

            this.local$tmp$ = this.local$destination.iterator();
            while (this.local$tmp$.hasNext()) {
              this.local$frame = this.local$tmp$.next();
              if (!this.local$frame.valid) {
                this.local$frame.setBoundsAndRelayout_t9mhyo$(this.local$frame.actualBounds);
                this.local$this$Application.light.repaint_za3rmp$(this.local$frame.handle);
              }
            }

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
  Application_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Application',
    interfaces: []
  };
  function frame$lambda($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$frame$lambda($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$frame$lambda($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$frame$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$frame$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$frame$lambda.prototype.constructor = Coroutine$frame$lambda;
  Coroutine$frame$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
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
  function frame$ObjectLiteral(closure$frame) {
    this.closure$frame = closure$frame;
    LightResizeHandler.call(this);
  }
  frame$ObjectLiteral.prototype.resized_6l6v7i$ = function (e) {
    this.closure$frame.setBoundsInternal_tjonv8$(0, 0, e.width, e.height);
    this.closure$frame.invalidate();
  };
  frame$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [LightResizeHandler]
  };
  function frame($receiver_0, title_0, width_0, height_0, icon_0, callback_0, continuation_0, suspended) {
    var instance = new Coroutine$frame($receiver_0, title_0, width_0, height_0, icon_0, callback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$frame($receiver_0, title_0, width_0, height_0, icon_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$frame = void 0;
    this.local$$receiver = $receiver_0;
    this.local$title = title_0;
    this.local$width = width_0;
    this.local$height = height_0;
    this.local$icon = icon_0;
    this.local$callback = callback_0;
  }
  Coroutine$frame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$frame.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$frame.prototype.constructor = Coroutine$frame;
  Coroutine$frame.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$width === void 0)
              this.local$width = 640;
            if (this.local$height === void 0)
              this.local$height = 480;
            if (this.local$icon === void 0)
              this.local$icon = null;
            if (this.local$callback === void 0)
              this.local$callback = frame$lambda;
            this.local$$receiver_0 = new Frame(this.local$$receiver, this.local$title);
            this.local$$receiver_0.setBoundsInternal_tjonv8$(0, 0, this.local$width, this.local$height);
            this.local$frame = this.local$$receiver_0;
            this.local$frame.icon = this.local$icon;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$frame, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver.light.setBounds_tiwvvj$(this.local$frame.handle, 0, 0, this.local$frame.actualBounds.width, this.local$frame.actualBounds.height);
            this.local$$receiver.light.addHandler_x9u3zh$(this.local$frame.handle, new frame$ObjectLiteral(this.local$frame));
            this.local$$receiver.frames.add_11rb$(this.local$frame);
            this.local$frame.visible = true;
            this.local$frame.invalidate();
            return this.local$frame;
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
  function CanvasApplication$lambda(it_0, continuation_0, suspended) {
    var instance = new Coroutine$CanvasApplication$lambda(it_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$CanvasApplication$lambda(it_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$it = it_0;
  }
  Coroutine$CanvasApplication$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CanvasApplication$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CanvasApplication$lambda.prototype.constructor = Coroutine$CanvasApplication$lambda;
  Coroutine$CanvasApplication$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return Unit;
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
  function CanvasApplication$lambda$lambda(closure$callback_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CanvasApplication$lambda$lambda(closure$callback_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$CanvasApplication$lambda$lambda(closure$callback_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
    this.local$tmp$ = void 0;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$CanvasApplication$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CanvasApplication$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CanvasApplication$lambda$lambda.prototype.constructor = Coroutine$CanvasApplication$lambda$lambda;
  Coroutine$CanvasApplication$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$closure$callback;
            this.local$$receiver_0 = agCanvas(this.local$$receiver);
            this.local$$receiver_0.focus();
            this.state_0 = 2;
            this.result_0 = this.local$tmp$(this.local$$receiver_0, this);
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
  function CanvasApplication$lambda_0(closure$light_0, closure$title_0, closure$width_0, closure$height_0, closure$icon_0, closure$callback_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$CanvasApplication$lambda_0(closure$light_0, closure$title_0, closure$width_0, closure$height_0, closure$icon_0, closure$callback_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$CanvasApplication$lambda_0(closure$light_0, closure$title_0, closure$width_0, closure$height_0, closure$icon_0, closure$callback_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$light = closure$light_0;
    this.local$closure$title = closure$title_0;
    this.local$closure$width = closure$width_0;
    this.local$closure$height = closure$height_0;
    this.local$closure$icon = closure$icon_0;
    this.local$closure$callback = closure$callback_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$CanvasApplication$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CanvasApplication$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CanvasApplication$lambda_0.prototype.constructor = Coroutine$CanvasApplication$lambda_0;
  Coroutine$CanvasApplication$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = frame(new Application_0(this.local$$receiver, this.local$closure$light), this.local$closure$title, this.local$closure$width, this.local$closure$height, this.local$closure$icon, CanvasApplication$lambda$lambda(this.local$closure$callback), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
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
  function CanvasApplication(title_0, width_0, height_0, icon_0, light_0, callback_0, continuation_0, suspended) {
    var instance = new Coroutine$CanvasApplication(title_0, width_0, height_0, icon_0, light_0, callback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$CanvasApplication(title_0, width_0, height_0, icon_0, light_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$title = title_0;
    this.local$width = width_0;
    this.local$height = height_0;
    this.local$icon = icon_0;
    this.local$light = light_0;
    this.local$callback = callback_0;
  }
  Coroutine$CanvasApplication.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CanvasApplication.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CanvasApplication.prototype.constructor = Coroutine$CanvasApplication;
  Coroutine$CanvasApplication.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$width === void 0)
              this.local$width = 640;
            if (this.local$height === void 0)
              this.local$height = 480;
            if (this.local$icon === void 0)
              this.local$icon = null;
            if (this.local$light === void 0)
              this.local$light = get_defaultLight();
            if (this.local$callback === void 0)
              this.local$callback = CanvasApplication$lambda;
            this.state_0 = 2;
            this.result_0 = withCoroutineContext(CanvasApplication$lambda_0(this.local$light, this.local$title, this.local$width, this.local$height, this.local$icon, this.local$callback), this);
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
  function Screen() {
  }
  Screen.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Screen',
    interfaces: []
  };
  function Length() {
    Length$Companion_getInstance();
  }
  function Length$Fixed() {
    Length.call(this);
  }
  Length$Fixed.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Fixed',
    interfaces: [Length]
  };
  function Length$Variable() {
    Length.call(this);
  }
  Length$Variable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Variable',
    interfaces: [Length]
  };
  function Length$Context() {
    this.fontSize = 16.0;
    this.viewportWidth = 640.0;
    this.viewportHeight = 480.0;
    this.size = 100;
    this.pixelsPerInch = 96.0;
  }
  Length$Context.prototype.setSize_za3lpa$ = function (v) {
    this.size = v;
    return this;
  };
  Object.defineProperty(Length$Context.prototype, 'viewportWidth1pc', {
    get: function () {
      return this.viewportWidth * 0.01;
    }
  });
  Object.defineProperty(Length$Context.prototype, 'viewportHeight1pc', {
    get: function () {
      return this.viewportHeight * 0.01;
    }
  });
  Object.defineProperty(Length$Context.prototype, 'pixelRatio', {
    get: function () {
      return this.pixelsPerInch / 96.0;
    }
  });
  Length$Context.prototype.keep_ctx3jt$ = defineInlineFunction('korui-js.com.soywiz.korui.geom.len.Length.Context.keep_ctx3jt$', function (callback) {
    var oldFontSize = this.fontSize;
    var oldViewportWidth = this.viewportWidth;
    var oldViewportHeight = this.viewportHeight;
    var oldSize = this.size;
    var oldPixelsPerInch = this.pixelsPerInch;
    try {
      callback(this);
    }
    finally {
      this.fontSize = oldFontSize;
      this.viewportWidth = oldViewportWidth;
      this.viewportHeight = oldViewportHeight;
      this.size = oldSize;
      this.pixelsPerInch = oldPixelsPerInch;
    }
  });
  Length$Context.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Context',
    interfaces: []
  };
  function Length$MM(v) {
    Length$Fixed.call(this);
    this.v = v;
  }
  Length$MM.prototype.calc_96r7jk$ = function (ctx) {
    return this.v * ctx.pixelsPerInch * 0.0393701 | 0;
  };
  Length$MM.prototype.toString = function () {
    return this.v.toString() + 'mm';
  };
  Length$MM.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MM',
    interfaces: [Length$Fixed]
  };
  Length$MM.prototype.component1 = function () {
    return this.v;
  };
  Length$MM.prototype.copy_14dthe$ = function (v) {
    return new Length$MM(v === void 0 ? this.v : v);
  };
  Length$MM.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  Length$MM.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.v, other.v))));
  };
  function Length$CM(v) {
    Length$Fixed.call(this);
    this.v = v;
  }
  Length$CM.prototype.calc_96r7jk$ = function (ctx) {
    return this.v * ctx.pixelsPerInch * 0.393701 | 0;
  };
  Length$CM.prototype.toString = function () {
    return this.v.toString() + 'cm';
  };
  Length$CM.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CM',
    interfaces: [Length$Fixed]
  };
  Length$CM.prototype.component1 = function () {
    return this.v;
  };
  Length$CM.prototype.copy_14dthe$ = function (v) {
    return new Length$CM(v === void 0 ? this.v : v);
  };
  Length$CM.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  Length$CM.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.v, other.v))));
  };
  function Length$INCH(v) {
    Length$Fixed.call(this);
    this.v = v;
  }
  Length$INCH.prototype.calc_96r7jk$ = function (ctx) {
    return this.v * ctx.pixelsPerInch | 0;
  };
  Length$INCH.prototype.toString = function () {
    return this.v.toString() + 'inch';
  };
  Length$INCH.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'INCH',
    interfaces: [Length$Fixed]
  };
  Length$INCH.prototype.component1 = function () {
    return this.v;
  };
  Length$INCH.prototype.copy_14dthe$ = function (v) {
    return new Length$INCH(v === void 0 ? this.v : v);
  };
  Length$INCH.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  Length$INCH.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.v, other.v))));
  };
  function Length$PT(v) {
    Length$Fixed.call(this);
    this.v = v;
  }
  Length$PT.prototype.calc_96r7jk$ = function (ctx) {
    return this.v * ctx.pixelRatio | 0;
  };
  Length$PT.prototype.toString = function () {
    return this.v.toString() + 'pt';
  };
  Length$PT.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PT',
    interfaces: [Length$Fixed]
  };
  Length$PT.prototype.component1 = function () {
    return this.v;
  };
  Length$PT.prototype.copy_14dthe$ = function (v) {
    return new Length$PT(v === void 0 ? this.v : v);
  };
  Length$PT.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  Length$PT.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.v, other.v))));
  };
  function Length$EM(v) {
    Length$Fixed.call(this);
    this.v = v;
  }
  Length$EM.prototype.calc_96r7jk$ = function (ctx) {
    return this.v * ctx.fontSize | 0;
  };
  Length$EM.prototype.toString = function () {
    return this.v.toString() + 'em';
  };
  Length$EM.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'EM',
    interfaces: [Length$Fixed]
  };
  Length$EM.prototype.component1 = function () {
    return this.v;
  };
  Length$EM.prototype.copy_14dthe$ = function (v) {
    return new Length$EM(v === void 0 ? this.v : v);
  };
  Length$EM.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  Length$EM.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.v, other.v))));
  };
  function Length$VW(v) {
    Length$Fixed.call(this);
    this.v = v;
  }
  Length$VW.prototype.calc_96r7jk$ = function (ctx) {
    return this.v * ctx.viewportWidth1pc | 0;
  };
  Length$VW.prototype.toString = function () {
    return this.v.toString() + 'em';
  };
  Length$VW.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VW',
    interfaces: [Length$Fixed]
  };
  Length$VW.prototype.component1 = function () {
    return this.v;
  };
  Length$VW.prototype.copy_14dthe$ = function (v) {
    return new Length$VW(v === void 0 ? this.v : v);
  };
  Length$VW.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  Length$VW.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.v, other.v))));
  };
  function Length$VH(v) {
    Length$Fixed.call(this);
    this.v = v;
  }
  Length$VH.prototype.calc_96r7jk$ = function (ctx) {
    return this.v * ctx.viewportHeight1pc | 0;
  };
  Length$VH.prototype.toString = function () {
    return this.v.toString() + 'em';
  };
  Length$VH.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VH',
    interfaces: [Length$Fixed]
  };
  Length$VH.prototype.component1 = function () {
    return this.v;
  };
  Length$VH.prototype.copy_14dthe$ = function (v) {
    return new Length$VH(v === void 0 ? this.v : v);
  };
  Length$VH.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  Length$VH.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.v, other.v))));
  };
  function Length$VMIN(v) {
    Length$Fixed.call(this);
    this.v = v;
  }
  var Math_0 = Math;
  Length$VMIN.prototype.calc_96r7jk$ = function (ctx) {
    var tmp$ = this.v;
    var a = ctx.viewportWidth1pc;
    var b = ctx.viewportHeight1pc;
    return tmp$ * Math_0.min(a, b) | 0;
  };
  Length$VMIN.prototype.toString = function () {
    return this.v.toString() + 'em';
  };
  Length$VMIN.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VMIN',
    interfaces: [Length$Fixed]
  };
  Length$VMIN.prototype.component1 = function () {
    return this.v;
  };
  Length$VMIN.prototype.copy_14dthe$ = function (v) {
    return new Length$VMIN(v === void 0 ? this.v : v);
  };
  Length$VMIN.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  Length$VMIN.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.v, other.v))));
  };
  function Length$VMAX(v) {
    Length$Fixed.call(this);
    this.v = v;
  }
  Length$VMAX.prototype.calc_96r7jk$ = function (ctx) {
    var tmp$ = this.v;
    var a = ctx.viewportWidth1pc;
    var b = ctx.viewportHeight1pc;
    return tmp$ * Math_0.max(a, b) | 0;
  };
  Length$VMAX.prototype.toString = function () {
    return this.v.toString() + 'em';
  };
  Length$VMAX.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VMAX',
    interfaces: [Length$Fixed]
  };
  Length$VMAX.prototype.component1 = function () {
    return this.v;
  };
  Length$VMAX.prototype.copy_14dthe$ = function (v) {
    return new Length$VMAX(v === void 0 ? this.v : v);
  };
  Length$VMAX.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.v) | 0;
    return result;
  };
  Length$VMAX.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.v, other.v))));
  };
  function Length$Ratio(ratio) {
    Length$Variable.call(this);
    this.ratio = ratio;
  }
  Length$Ratio.prototype.calc_96r7jk$ = function (ctx) {
    return this.ratio * ctx.size | 0;
  };
  Length$Ratio.prototype.toString = function () {
    return (this.ratio * 100).toString() + '%';
  };
  Length$Ratio.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Ratio',
    interfaces: [Length$Variable]
  };
  Length$Ratio.prototype.component1 = function () {
    return this.ratio;
  };
  Length$Ratio.prototype.copy_14dthe$ = function (ratio) {
    return new Length$Ratio(ratio === void 0 ? this.ratio : ratio);
  };
  Length$Ratio.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.ratio) | 0;
    return result;
  };
  Length$Ratio.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.ratio, other.ratio))));
  };
  function Length$Binop(a, b, op, act) {
    Length.call(this);
    this.a = a;
    this.b = b;
    this.op = op;
    this.act = act;
  }
  Length$Binop.prototype.calc_96r7jk$ = function (ctx) {
    return this.act(this.a.calc_96r7jk$(ctx), this.b.calc_96r7jk$(ctx));
  };
  Length$Binop.prototype.toString = function () {
    return '(' + this.a + ' ' + this.op + ' ' + this.b + ')';
  };
  Length$Binop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Binop',
    interfaces: [Length]
  };
  Length$Binop.prototype.component1 = function () {
    return this.a;
  };
  Length$Binop.prototype.component2 = function () {
    return this.b;
  };
  Length$Binop.prototype.component3 = function () {
    return this.op;
  };
  Length$Binop.prototype.component4 = function () {
    return this.act;
  };
  Length$Binop.prototype.copy_v6ojpo$ = function (a, b, op, act) {
    return new Length$Binop(a === void 0 ? this.a : a, b === void 0 ? this.b : b, op === void 0 ? this.op : op, act === void 0 ? this.act : act);
  };
  Length$Binop.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.op) | 0;
    result = result * 31 + Kotlin.hashCode(this.act) | 0;
    return result;
  };
  Length$Binop.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.op, other.op) && Kotlin.equals(this.act, other.act)))));
  };
  function Length$Scale(a, scale) {
    Length.call(this);
    this.a = a;
    this.scale = scale;
  }
  Length$Scale.prototype.calc_96r7jk$ = function (ctx) {
    return calcMax(this.a, ctx) * this.scale | 0;
  };
  Length$Scale.prototype.toString = function () {
    return '(' + Kotlin.toString(this.a) + ' * ' + this.scale + ')';
  };
  Length$Scale.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Scale',
    interfaces: [Length]
  };
  Length$Scale.prototype.component1 = function () {
    return this.a;
  };
  Length$Scale.prototype.component2 = function () {
    return this.scale;
  };
  Length$Scale.prototype.copy_tany4i$ = function (a, scale) {
    return new Length$Scale(a === void 0 ? this.a : a, scale === void 0 ? this.scale : scale);
  };
  Length$Scale.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    return result;
  };
  Length$Scale.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.scale, other.scale)))));
  };
  function Length$Companion() {
    Length$Companion_instance = this;
    this.ZERO = new Length$PT(0.0);
  }
  Length$Companion.prototype.calc_keb01c$ = function (ctx, default_0, size, min, max, ignoreBounds) {
    if (min === void 0)
      min = null;
    if (max === void 0)
      max = null;
    if (ignoreBounds === void 0)
      ignoreBounds = false;
    var sizeCalc = (size != null ? size : default_0).calc_96r7jk$(ctx);
    var minCalc = calcMin(min, ctx, ignoreBounds ? IntCompanionObject.MIN_VALUE : 0);
    var maxCalc = calcMax(max, ctx, ignoreBounds ? IntCompanionObject.MAX_VALUE : ctx.size);
    return clamp(sizeCalc, minCalc, maxCalc);
  };
  Length$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Length$Companion_instance = null;
  function Length$Companion_getInstance() {
    if (Length$Companion_instance === null) {
      new Length$Companion();
    }
    return Length$Companion_instance;
  }
  function Length$plus$lambda(a, b) {
    return a + b | 0;
  }
  Length.prototype.plus_px1v1r$ = function (that) {
    return new Length$Binop(this, that, '+', Length$plus$lambda);
  };
  function Length$minus$lambda(a, b) {
    return a - b | 0;
  }
  Length.prototype.minus_px1v1r$ = function (that) {
    return new Length$Binop(this, that, '-', Length$minus$lambda);
  };
  Length.prototype.times_14dthe$ = function (that) {
    return new Length$Scale(this, that);
  };
  Length.prototype.times_za3lpa$ = function (that) {
    return new Length$Scale(this, that);
  };
  Length.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Length',
    interfaces: []
  };
  function MathEx() {
    MathEx_instance = this;
  }
  MathEx.prototype.min_sdesaw$ = function (a, b) {
    return Kotlin.compareTo(a, b) < 0 ? a : b;
  };
  MathEx.prototype.max_sdesaw$ = function (a, b) {
    return Kotlin.compareTo(a, b) > 0 ? a : b;
  };
  MathEx.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'MathEx',
    interfaces: []
  };
  var MathEx_instance = null;
  function MathEx_getInstance() {
    if (MathEx_instance === null) {
      new MathEx();
    }
    return MathEx_instance;
  }
  function calcMin($receiver, ctx, default_0) {
    if (default_0 === void 0)
      default_0 = 0;
    var tmp$;
    return (tmp$ = $receiver != null ? $receiver.calc_96r7jk$(ctx) : null) != null ? tmp$ : default_0;
  }
  function calcMax($receiver, ctx, default_0) {
    if (default_0 === void 0)
      default_0 = ctx.size;
    var tmp$;
    return (tmp$ = $receiver != null ? $receiver.calc_96r7jk$(ctx) : null) != null ? tmp$ : default_0;
  }
  function times($receiver, that) {
    return new Length$Scale($receiver, that);
  }
  function setNewTo($receiver, ctx, bounds, x, y, width, height) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return $receiver.setTo_tjonv8$((tmp$ = x != null ? x.calc_96r7jk$(ctx.setSize_za3lpa$(bounds.width)) : null) != null ? tmp$ : bounds.x, (tmp$_0 = y != null ? y.calc_96r7jk$(ctx.setSize_za3lpa$(bounds.height)) : null) != null ? tmp$_0 : bounds.y, (tmp$_1 = width != null ? width.calc_96r7jk$(ctx.setSize_za3lpa$(bounds.width)) : null) != null ? tmp$_1 : bounds.width, (tmp$_2 = height != null ? height.calc_96r7jk$(ctx.setSize_za3lpa$(bounds.height)) : null) != null ? tmp$_2 : bounds.height);
  }
  function setNewBoundsTo($receiver, ctx, bounds, left, top, right, bottom) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    return $receiver.setBoundsTo_tjonv8$((tmp$ = left != null ? left.calc_96r7jk$(ctx.setSize_za3lpa$(bounds.width)) : null) != null ? tmp$ : bounds.left, (tmp$_0 = top != null ? top.calc_96r7jk$(ctx.setSize_za3lpa$(bounds.height)) : null) != null ? tmp$_0 : bounds.top, (tmp$_1 = right != null ? right.calc_96r7jk$(ctx.setSize_za3lpa$(bounds.width)) : null) != null ? tmp$_1 : bounds.right, (tmp$_2 = bottom != null ? bottom.calc_96r7jk$(ctx.setSize_za3lpa$(bounds.height)) : null) != null ? tmp$_2 : bounds.bottom);
  }
  function get_mm($receiver) {
    return new Length$MM($receiver);
  }
  function get_cm($receiver) {
    return new Length$CM($receiver);
  }
  function get_inch($receiver) {
    return new Length$INCH($receiver);
  }
  function get_pt($receiver) {
    return new Length$PT($receiver);
  }
  function get_em($receiver) {
    return new Length$EM($receiver);
  }
  function get_vw($receiver) {
    return new Length$VW($receiver);
  }
  function get_vh($receiver) {
    return new Length$VH($receiver);
  }
  function get_vmin($receiver) {
    return new Length$VMIN($receiver);
  }
  function get_vmax($receiver) {
    return new Length$VMAX($receiver);
  }
  function get_percent($receiver) {
    return new Length$Ratio($receiver / 100.0);
  }
  function get_mm_0($receiver) {
    return new Length$MM($receiver);
  }
  function get_cm_0($receiver) {
    return new Length$CM($receiver);
  }
  function get_inch_0($receiver) {
    return new Length$INCH($receiver);
  }
  function get_pt_0($receiver) {
    return new Length$PT($receiver);
  }
  function get_em_0($receiver) {
    return new Length$EM($receiver);
  }
  function get_vw_0($receiver) {
    return new Length$VW($receiver);
  }
  function get_vh_0($receiver) {
    return new Length$VH($receiver);
  }
  function get_vmin_0($receiver) {
    return new Length$VMIN($receiver);
  }
  function get_vmax_0($receiver) {
    return new Length$VMAX($receiver);
  }
  function get_percent_0($receiver) {
    return new Length$Ratio($receiver / 100.0);
  }
  function get_ratio($receiver) {
    return new Length$Ratio($receiver);
  }
  function Padding(top, right, bottom, left) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
  }
  Padding.prototype.setTo_k1f9s4$ = function (top, right, bottom, left) {
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.left = left;
    return this;
  };
  Padding.prototype.setTo_6fmdh0$ = function (vertical, horizontal) {
    return this.setTo_k1f9s4$(vertical, horizontal, vertical, horizontal);
  };
  Padding.prototype.setTo_m4d4ts$ = function (pad) {
    return this.setTo_k1f9s4$(pad, pad, pad, pad);
  };
  Padding.prototype.setTo_7r3nag$ = function (pad) {
    return this.setTo_k1f9s4$(pad.top, pad.right, pad.bottom, pad.left);
  };
  Padding.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Padding',
    interfaces: []
  };
  function Padding_init(vertical, horizontal, $this) {
    $this = $this || Object.create(Padding.prototype);
    Padding.call($this, vertical, horizontal, vertical, horizontal);
    return $this;
  }
  function Padding_init_0(pad, $this) {
    $this = $this || Object.create(Padding.prototype);
    Padding.call($this, pad, pad, pad, pad);
    return $this;
  }
  function Padding_init_1($this) {
    $this = $this || Object.create(Padding.prototype);
    Padding.call($this, Length$Companion_getInstance().ZERO, Length$Companion_getInstance().ZERO, Length$Companion_getInstance().ZERO, Length$Companion_getInstance().ZERO);
    return $this;
  }
  Padding.prototype.component1 = function () {
    return this.top;
  };
  Padding.prototype.component2 = function () {
    return this.right;
  };
  Padding.prototype.component3 = function () {
    return this.bottom;
  };
  Padding.prototype.component4 = function () {
    return this.left;
  };
  Padding.prototype.copy_k1f9s4$ = function (top, right, bottom, left) {
    return new Padding(top === void 0 ? this.top : top, right === void 0 ? this.right : right, bottom === void 0 ? this.bottom : bottom, left === void 0 ? this.left : left);
  };
  Padding.prototype.toString = function () {
    return 'Padding(top=' + Kotlin.toString(this.top) + (', right=' + Kotlin.toString(this.right)) + (', bottom=' + Kotlin.toString(this.bottom)) + (', left=' + Kotlin.toString(this.left)) + ')';
  };
  Padding.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.top) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    result = result * 31 + Kotlin.hashCode(this.bottom) | 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    return result;
  };
  Padding.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.top, other.top) && Kotlin.equals(this.right, other.right) && Kotlin.equals(this.bottom, other.bottom) && Kotlin.equals(this.left, other.left)))));
  };
  function Position(x, y) {
    this.x = x;
    this.y = y;
  }
  Position.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Position',
    interfaces: []
  };
  Position.prototype.component1 = function () {
    return this.x;
  };
  Position.prototype.component2 = function () {
    return this.y;
  };
  Position.prototype.copy_6fmdh0$ = function (x, y) {
    return new Position(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Position.prototype.toString = function () {
    return 'Position(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Position.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Position.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Size(width, height) {
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    this.width = width;
    this.height = height;
  }
  Size.prototype.setTo_6fmdh0$ = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  };
  Size.prototype.setToScale_lu1900$ = function (sX, sY) {
    if (sY === void 0)
      sY = sX;
    this.setTo_6fmdh0$(times(this.width, sX), times(this.height, sY));
    return this;
  };
  Size.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Size',
    interfaces: []
  };
  Size.prototype.component1 = function () {
    return this.width;
  };
  Size.prototype.component2 = function () {
    return this.height;
  };
  Size.prototype.copy_6fmdh0$ = function (width, height) {
    return new Size(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Size.prototype.toString = function () {
    return 'Size(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Size.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Size.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function LightComponentsFactory() {
  }
  LightComponentsFactory.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'LightComponentsFactory',
    interfaces: []
  };
  function LightComponents() {
    this.insideEventHandler_wpylzi$_0 = false;
  }
  function LightComponents$LightComponentInfo(handle) {
    this.handle = handle;
    this.$delegate_ai2ro1$_0 = new Extra$Mixin();
  }
  Object.defineProperty(LightComponents$LightComponentInfo.prototype, 'extra', {
    get: function () {
      return this.$delegate_ai2ro1$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_ai2ro1$_0.extra = tmp$;
    }
  });
  LightComponents$LightComponentInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LightComponentInfo',
    interfaces: [Extra]
  };
  LightComponents.prototype.create_3wpq0m$ = function (type) {
    return new LightComponents$LightComponentInfo(Unit);
  };
  LightComponents.prototype.setParent_hfmcy5$ = function (c, parent) {
  };
  Object.defineProperty(LightComponents.prototype, 'insideEventHandler', {
    get: function () {
      return this.insideEventHandler_wpylzi$_0;
    },
    set: function (insideEventHandler) {
      this.insideEventHandler_wpylzi$_0 = insideEventHandler;
    }
  });
  LightComponents.prototype.insideEventHandler_klfg04$ = function (callback) {
    var oldEventHandler = this.insideEventHandler;
    try {
      this.insideEventHandler = true;
      return callback();
    }
    finally {
      this.insideEventHandler = oldEventHandler;
    }
  };
  function LightComponents$up2$lambda(this$up2, closure$info) {
    return function () {
      this$up2.up_1pji0r$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.up2_oi3x8t$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$up2$lambda($receiver, info));
  };
  function LightComponents$down2$lambda(this$down2, closure$info) {
    return function () {
      this$down2.down_1pji0r$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.down2_oi3x8t$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$down2$lambda($receiver, info));
  };
  function LightComponents$click2$lambda(this$click2, closure$info) {
    return function () {
      this$click2.click_1pji0r$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.click2_oi3x8t$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$click2$lambda($receiver, info));
  };
  function LightComponents$over2$lambda(this$over2, closure$info) {
    return function () {
      this$over2.over_1pji0r$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.over2_oi3x8t$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$over2$lambda($receiver, info));
  };
  function LightComponents$enter2$lambda(this$enter2, closure$info) {
    return function () {
      this$enter2.enter_1pji0r$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.enter2_oi3x8t$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$enter2$lambda($receiver, info));
  };
  function LightComponents$exit2$lambda(this$exit2, closure$info) {
    return function () {
      this$exit2.exit_1pji0r$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.exit2_oi3x8t$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$exit2$lambda($receiver, info));
  };
  function LightComponents$changed2$lambda(this$changed2, closure$info) {
    return function () {
      this$changed2.changed_x3b3b2$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.changed2_rf5cof$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$changed2$lambda($receiver, info));
  };
  function LightComponents$resized2$lambda(this$resized2, closure$info) {
    return function () {
      this$resized2.resized_6l6v7i$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.resized2_hogl87$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$resized2$lambda($receiver, info));
  };
  function LightComponents$up2$lambda_0(this$up2, closure$info) {
    return function () {
      this$up2.up_tzhr5h$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.up2_fo2i4t$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$up2$lambda_0($receiver, info));
  };
  function LightComponents$down2$lambda_0(this$down2, closure$info) {
    return function () {
      this$down2.down_tzhr5h$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.down2_fo2i4t$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$down2$lambda_0($receiver, info));
  };
  function LightComponents$typed2$lambda(this$typed2, closure$info) {
    return function () {
      this$typed2.typed_tzhr5h$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.typed2_fo2i4t$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$typed2$lambda($receiver, info));
  };
  function LightComponents$start2$lambda(this$start2, closure$info) {
    return function () {
      this$start2.start_6ixrvv$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.start2_dtsyb7$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$start2$lambda($receiver, info));
  };
  function LightComponents$end2$lambda(this$end2, closure$info) {
    return function () {
      this$end2.end_6ixrvv$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.end2_dtsyb7$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$end2$lambda($receiver, info));
  };
  function LightComponents$move2$lambda(this$move2, closure$info) {
    return function () {
      this$move2.move_6ixrvv$(closure$info);
      return Unit;
    };
  }
  LightComponents.prototype.move2_dtsyb7$ = function ($receiver, info) {
    this.insideEventHandler_klfg04$(LightComponents$move2$lambda($receiver, info));
  };
  function LightComponents$addHandler$lambda() {
    return Unit;
  }
  LightComponents.prototype.addHandler_kxnioe$ = function (c, listener) {
    return Closeable(LightComponents$addHandler$lambda);
  };
  function LightComponents$addHandler$lambda_0() {
    return Unit;
  }
  LightComponents.prototype.addHandler_8fo827$ = function (c, listener) {
    return Closeable(LightComponents$addHandler$lambda_0);
  };
  function LightComponents$addHandler$lambda_1() {
    return Unit;
  }
  LightComponents.prototype.addHandler_x9u3zh$ = function (c, listener) {
    return Closeable(LightComponents$addHandler$lambda_1);
  };
  function LightComponents$addHandler$lambda_2() {
    return Unit;
  }
  LightComponents.prototype.addHandler_fho2ac$ = function (c, listener) {
    return Closeable(LightComponents$addHandler$lambda_2);
  };
  function LightComponents$addHandler$lambda_3() {
    return Unit;
  }
  LightComponents.prototype.addHandler_bq7i26$ = function (c, listener) {
    return Closeable(LightComponents$addHandler$lambda_3);
  };
  function LightComponents$addHandler$lambda_4() {
    return Unit;
  }
  LightComponents.prototype.addHandler_wddoqc$ = function (c, listener) {
    return Closeable(LightComponents$addHandler$lambda_4);
  };
  LightComponents.prototype.getDpi = function () {
    return 96.0;
  };
  LightComponents.prototype.callAction_rg4qv$ = function (c, key, param) {
  };
  LightComponents.prototype.setProperty_qiitpl$ = function (c, key, value) {
  };
  LightComponents.prototype.getProperty_jku6jz$ = function (c, key) {
    return key.default;
  };
  LightComponents.prototype.setBounds_tiwvvj$ = function (c, x, y, width, height) {
  };
  LightComponents.prototype.repaint_za3rmp$ = function (c) {
  };
  LightComponents.prototype.dialogAlert_hwpqgh$ = function (c, message, continuation) {
    return Unit;
  };
  LightComponents.prototype.dialogPrompt_hwpqgh$ = function (c, message, continuation) {
    throw new UnsupportedOperationException();
  };
  LightComponents.prototype.dialogOpenFile_hwpqgh$ = function (c, filter, continuation) {
    throw new UnsupportedOperationException();
  };
  LightComponents.prototype.openURL_61zpoe$ = function (url) {
  };
  LightComponents.prototype.open_phxig4$ = function (file) {
    this.openURL_61zpoe$(file.absolutePath);
  };
  LightComponents.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LightComponents',
    interfaces: []
  };
  function LightChangeHandler() {
  }
  function LightChangeHandler$Info(dummy) {
    if (dummy === void 0)
      dummy = true;
    this.dummy = dummy;
  }
  LightChangeHandler$Info.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  LightChangeHandler$Info.prototype.component1 = function () {
    return this.dummy;
  };
  LightChangeHandler$Info.prototype.copy_6taknv$ = function (dummy) {
    return new LightChangeHandler$Info(dummy === void 0 ? this.dummy : dummy);
  };
  LightChangeHandler$Info.prototype.toString = function () {
    return 'Info(dummy=' + Kotlin.toString(this.dummy) + ')';
  };
  LightChangeHandler$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.dummy) | 0;
    return result;
  };
  LightChangeHandler$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.dummy, other.dummy))));
  };
  LightChangeHandler.prototype.changed_x3b3b2$ = function (info) {
  };
  LightChangeHandler.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LightChangeHandler',
    interfaces: []
  };
  function LightResizeHandler() {
  }
  function LightResizeHandler$Info(width, height) {
    if (width === void 0)
      width = 0;
    if (height === void 0)
      height = 0;
    this.width = width;
    this.height = height;
  }
  LightResizeHandler$Info.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  LightResizeHandler$Info.prototype.component1 = function () {
    return this.width;
  };
  LightResizeHandler$Info.prototype.component2 = function () {
    return this.height;
  };
  LightResizeHandler$Info.prototype.copy_vux9f0$ = function (width, height) {
    return new LightResizeHandler$Info(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  LightResizeHandler$Info.prototype.toString = function () {
    return 'Info(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  LightResizeHandler$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  LightResizeHandler$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  LightResizeHandler.prototype.resized_6l6v7i$ = function (info) {
  };
  LightResizeHandler.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LightResizeHandler',
    interfaces: []
  };
  function LightMouseHandler() {
  }
  function LightMouseHandler$Info(x, y, buttons, isShiftDown, isCtrlDown, isAltDown, isMetaDown) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (buttons === void 0)
      buttons = 0;
    if (isShiftDown === void 0)
      isShiftDown = false;
    if (isCtrlDown === void 0)
      isCtrlDown = false;
    if (isAltDown === void 0)
      isAltDown = false;
    if (isMetaDown === void 0)
      isMetaDown = false;
    this.x = x;
    this.y = y;
    this.buttons = buttons;
    this.isShiftDown = isShiftDown;
    this.isCtrlDown = isCtrlDown;
    this.isAltDown = isAltDown;
    this.isMetaDown = isMetaDown;
  }
  LightMouseHandler$Info.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  LightMouseHandler$Info.prototype.component1 = function () {
    return this.x;
  };
  LightMouseHandler$Info.prototype.component2 = function () {
    return this.y;
  };
  LightMouseHandler$Info.prototype.component3 = function () {
    return this.buttons;
  };
  LightMouseHandler$Info.prototype.component4 = function () {
    return this.isShiftDown;
  };
  LightMouseHandler$Info.prototype.component5 = function () {
    return this.isCtrlDown;
  };
  LightMouseHandler$Info.prototype.component6 = function () {
    return this.isAltDown;
  };
  LightMouseHandler$Info.prototype.component7 = function () {
    return this.isMetaDown;
  };
  LightMouseHandler$Info.prototype.copy_fvbujm$ = function (x, y, buttons, isShiftDown, isCtrlDown, isAltDown, isMetaDown) {
    return new LightMouseHandler$Info(x === void 0 ? this.x : x, y === void 0 ? this.y : y, buttons === void 0 ? this.buttons : buttons, isShiftDown === void 0 ? this.isShiftDown : isShiftDown, isCtrlDown === void 0 ? this.isCtrlDown : isCtrlDown, isAltDown === void 0 ? this.isAltDown : isAltDown, isMetaDown === void 0 ? this.isMetaDown : isMetaDown);
  };
  LightMouseHandler$Info.prototype.toString = function () {
    return 'Info(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', buttons=' + Kotlin.toString(this.buttons)) + (', isShiftDown=' + Kotlin.toString(this.isShiftDown)) + (', isCtrlDown=' + Kotlin.toString(this.isCtrlDown)) + (', isAltDown=' + Kotlin.toString(this.isAltDown)) + (', isMetaDown=' + Kotlin.toString(this.isMetaDown)) + ')';
  };
  LightMouseHandler$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.buttons) | 0;
    result = result * 31 + Kotlin.hashCode(this.isShiftDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isCtrlDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isAltDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isMetaDown) | 0;
    return result;
  };
  LightMouseHandler$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.buttons, other.buttons) && Kotlin.equals(this.isShiftDown, other.isShiftDown) && Kotlin.equals(this.isCtrlDown, other.isCtrlDown) && Kotlin.equals(this.isAltDown, other.isAltDown) && Kotlin.equals(this.isMetaDown, other.isMetaDown)))));
  };
  LightMouseHandler.prototype.enter_1pji0r$ = function (info) {
  };
  LightMouseHandler.prototype.exit_1pji0r$ = function (info) {
  };
  LightMouseHandler.prototype.over_1pji0r$ = function (info) {
  };
  LightMouseHandler.prototype.up_1pji0r$ = function (info) {
  };
  LightMouseHandler.prototype.down_1pji0r$ = function (info) {
  };
  LightMouseHandler.prototype.click_1pji0r$ = function (info) {
  };
  LightMouseHandler.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LightMouseHandler',
    interfaces: []
  };
  function LightKeyHandler() {
  }
  function LightKeyHandler$Info(keyCode) {
    if (keyCode === void 0)
      keyCode = 0;
    this.keyCode = keyCode;
  }
  LightKeyHandler$Info.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  LightKeyHandler$Info.prototype.component1 = function () {
    return this.keyCode;
  };
  LightKeyHandler$Info.prototype.copy_za3lpa$ = function (keyCode) {
    return new LightKeyHandler$Info(keyCode === void 0 ? this.keyCode : keyCode);
  };
  LightKeyHandler$Info.prototype.toString = function () {
    return 'Info(keyCode=' + Kotlin.toString(this.keyCode) + ')';
  };
  LightKeyHandler$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.keyCode) | 0;
    return result;
  };
  LightKeyHandler$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.keyCode, other.keyCode))));
  };
  LightKeyHandler.prototype.typed_tzhr5h$ = function (info) {
  };
  LightKeyHandler.prototype.down_tzhr5h$ = function (info) {
  };
  LightKeyHandler.prototype.up_tzhr5h$ = function (info) {
  };
  LightKeyHandler.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LightKeyHandler',
    interfaces: []
  };
  function LightGamepadHandler() {
  }
  function LightGamepadHandler$Info(id, buttons, axis) {
    if (id === void 0)
      id = 0;
    if (buttons === void 0)
      buttons = 0;
    if (axis === void 0)
      axis = new Float64Array(16);
    this.id = id;
    this.buttons = buttons;
    this.axis = axis;
  }
  LightGamepadHandler$Info.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  LightGamepadHandler$Info.prototype.component1 = function () {
    return this.id;
  };
  LightGamepadHandler$Info.prototype.component2 = function () {
    return this.buttons;
  };
  LightGamepadHandler$Info.prototype.component3 = function () {
    return this.axis;
  };
  LightGamepadHandler$Info.prototype.copy_5f2rid$ = function (id, buttons, axis) {
    return new LightGamepadHandler$Info(id === void 0 ? this.id : id, buttons === void 0 ? this.buttons : buttons, axis === void 0 ? this.axis : axis);
  };
  LightGamepadHandler$Info.prototype.toString = function () {
    return 'Info(id=' + Kotlin.toString(this.id) + (', buttons=' + Kotlin.toString(this.buttons)) + (', axis=' + Kotlin.toString(this.axis)) + ')';
  };
  LightGamepadHandler$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.buttons) | 0;
    result = result * 31 + Kotlin.hashCode(this.axis) | 0;
    return result;
  };
  LightGamepadHandler$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.buttons, other.buttons) && Kotlin.equals(this.axis, other.axis)))));
  };
  LightGamepadHandler.prototype.down_3c6md3$ = function (info) {
  };
  LightGamepadHandler.prototype.up_3c6md3$ = function (info) {
  };
  LightGamepadHandler.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LightGamepadHandler',
    interfaces: []
  };
  function LightTouchHandler() {
  }
  function LightTouchHandler$Info(x, y, id) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (id === void 0)
      id = 0;
    this.x = x;
    this.y = y;
    this.id = id;
  }
  LightTouchHandler$Info.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  LightTouchHandler$Info.prototype.component1 = function () {
    return this.x;
  };
  LightTouchHandler$Info.prototype.component2 = function () {
    return this.y;
  };
  LightTouchHandler$Info.prototype.component3 = function () {
    return this.id;
  };
  LightTouchHandler$Info.prototype.copy_qt1dr2$ = function (x, y, id) {
    return new LightTouchHandler$Info(x === void 0 ? this.x : x, y === void 0 ? this.y : y, id === void 0 ? this.id : id);
  };
  LightTouchHandler$Info.prototype.toString = function () {
    return 'Info(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', id=' + Kotlin.toString(this.id)) + ')';
  };
  LightTouchHandler$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  LightTouchHandler$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.id, other.id)))));
  };
  LightTouchHandler.prototype.start_6ixrvv$ = function (info) {
  };
  LightTouchHandler.prototype.end_6ixrvv$ = function (info) {
  };
  LightTouchHandler.prototype.move_6ixrvv$ = function (info) {
  };
  LightTouchHandler.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LightTouchHandler',
    interfaces: []
  };
  function defaultLightFactory$lambda() {
    return NativeLightsComponentsFactory_getInstance();
  }
  var defaultLightFactory;
  function get_defaultLightFactory() {
    new Kotlin.PropertyMetadata('defaultLightFactory');
    return defaultLightFactory.value;
  }
  function defaultLight$lambda() {
    return get_defaultLightFactory().create();
  }
  var defaultLight;
  function get_defaultLight() {
    new Kotlin.PropertyMetadata('defaultLight');
    return defaultLight.value;
  }
  function LightType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LightType_initFields() {
    LightType_initFields = function () {
    };
    LightType$FRAME_instance = new LightType('FRAME', 0);
    LightType$CONTAINER_instance = new LightType('CONTAINER', 1);
    LightType$BUTTON_instance = new LightType('BUTTON', 2);
    LightType$PROGRESS_instance = new LightType('PROGRESS', 3);
    LightType$IMAGE_instance = new LightType('IMAGE', 4);
    LightType$LABEL_instance = new LightType('LABEL', 5);
    LightType$TEXT_FIELD_instance = new LightType('TEXT_FIELD', 6);
    LightType$TEXT_AREA_instance = new LightType('TEXT_AREA', 7);
    LightType$CHECK_BOX_instance = new LightType('CHECK_BOX', 8);
    LightType$SCROLL_PANE_instance = new LightType('SCROLL_PANE', 9);
    LightType$AGCANVAS_instance = new LightType('AGCANVAS', 10);
  }
  var LightType$FRAME_instance;
  function LightType$FRAME_getInstance() {
    LightType_initFields();
    return LightType$FRAME_instance;
  }
  var LightType$CONTAINER_instance;
  function LightType$CONTAINER_getInstance() {
    LightType_initFields();
    return LightType$CONTAINER_instance;
  }
  var LightType$BUTTON_instance;
  function LightType$BUTTON_getInstance() {
    LightType_initFields();
    return LightType$BUTTON_instance;
  }
  var LightType$PROGRESS_instance;
  function LightType$PROGRESS_getInstance() {
    LightType_initFields();
    return LightType$PROGRESS_instance;
  }
  var LightType$IMAGE_instance;
  function LightType$IMAGE_getInstance() {
    LightType_initFields();
    return LightType$IMAGE_instance;
  }
  var LightType$LABEL_instance;
  function LightType$LABEL_getInstance() {
    LightType_initFields();
    return LightType$LABEL_instance;
  }
  var LightType$TEXT_FIELD_instance;
  function LightType$TEXT_FIELD_getInstance() {
    LightType_initFields();
    return LightType$TEXT_FIELD_instance;
  }
  var LightType$TEXT_AREA_instance;
  function LightType$TEXT_AREA_getInstance() {
    LightType_initFields();
    return LightType$TEXT_AREA_instance;
  }
  var LightType$CHECK_BOX_instance;
  function LightType$CHECK_BOX_getInstance() {
    LightType_initFields();
    return LightType$CHECK_BOX_instance;
  }
  var LightType$SCROLL_PANE_instance;
  function LightType$SCROLL_PANE_getInstance() {
    LightType_initFields();
    return LightType$SCROLL_PANE_instance;
  }
  var LightType$AGCANVAS_instance;
  function LightType$AGCANVAS_getInstance() {
    LightType_initFields();
    return LightType$AGCANVAS_instance;
  }
  LightType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LightType',
    interfaces: [Enum]
  };
  function LightType$values() {
    return [LightType$FRAME_getInstance(), LightType$CONTAINER_getInstance(), LightType$BUTTON_getInstance(), LightType$PROGRESS_getInstance(), LightType$IMAGE_getInstance(), LightType$LABEL_getInstance(), LightType$TEXT_FIELD_getInstance(), LightType$TEXT_AREA_getInstance(), LightType$CHECK_BOX_getInstance(), LightType$SCROLL_PANE_getInstance(), LightType$AGCANVAS_getInstance()];
  }
  LightType.values = LightType$values;
  function LightType$valueOf(name) {
    switch (name) {
      case 'FRAME':
        return LightType$FRAME_getInstance();
      case 'CONTAINER':
        return LightType$CONTAINER_getInstance();
      case 'BUTTON':
        return LightType$BUTTON_getInstance();
      case 'PROGRESS':
        return LightType$PROGRESS_getInstance();
      case 'IMAGE':
        return LightType$IMAGE_getInstance();
      case 'LABEL':
        return LightType$LABEL_getInstance();
      case 'TEXT_FIELD':
        return LightType$TEXT_FIELD_getInstance();
      case 'TEXT_AREA':
        return LightType$TEXT_AREA_getInstance();
      case 'CHECK_BOX':
        return LightType$CHECK_BOX_getInstance();
      case 'SCROLL_PANE':
        return LightType$SCROLL_PANE_getInstance();
      case 'AGCANVAS':
        return LightType$AGCANVAS_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korui.light.LightType.' + name);
    }
  }
  LightType.valueOf_61zpoe$ = LightType$valueOf;
  function LightAction(name) {
    LightAction$Companion_getInstance();
    this.name = name;
  }
  function LightAction$Companion() {
    LightAction$Companion_instance = this;
    this.FOCUS = new LightAction('FOCUS');
  }
  LightAction$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LightAction$Companion_instance = null;
  function LightAction$Companion_getInstance() {
    if (LightAction$Companion_instance === null) {
      new LightAction$Companion();
    }
    return LightAction$Companion_instance;
  }
  LightAction.prototype.get_s8jyv4$ = function (v) {
    var tmp$;
    return (tmp$ = v) == null || Kotlin.isType(tmp$, Any) ? tmp$ : Kotlin.throwCCE();
  };
  LightAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LightAction',
    interfaces: []
  };
  function LightProperty(name, default_0) {
    LightProperty$Companion_getInstance();
    this.name = name;
    this.default = default_0;
  }
  function LightProperty$Companion() {
    LightProperty$Companion_instance = this;
    this.VISIBLE = new LightProperty('VISIBLE', true);
    this.TEXT = new LightProperty('TEXT', '');
    this.ICON = new LightProperty('ICON', null);
    this.BGCOLOR = new LightProperty('BGCOLOR', color.Colors.BLACK);
    this.PROGRESS_CURRENT = new LightProperty('PROGRESS_CURRENT', 0);
    this.PROGRESS_MAX = new LightProperty('PROGRESS_MAX', 100);
    this.IMAGE = new LightProperty('IMAGE', null);
    this.IMAGE_SMOOTH = new LightProperty('IMAGE_SMOOTH', true);
    this.CHECKED = new LightProperty('CHECKED', false);
  }
  LightProperty$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LightProperty$Companion_instance = null;
  function LightProperty$Companion_getInstance() {
    if (LightProperty$Companion_instance === null) {
      new LightProperty$Companion();
    }
    return LightProperty$Companion_instance;
  }
  LightProperty.prototype.get_s8jyv4$ = function (v) {
    var tmp$;
    return (tmp$ = v) == null || Kotlin.isType(tmp$, Any) ? tmp$ : Kotlin.throwCCE();
  };
  LightProperty.prototype.getOrDefault_s8jyv4$ = function (v) {
    var tmp$;
    return v == null ? this.default : (tmp$ = v) == null || Kotlin.isType(tmp$, Any) ? tmp$ : Kotlin.throwCCE();
  };
  LightProperty.prototype.toString = function () {
    return 'LightProperty[' + this.name + ']';
  };
  LightProperty.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LightProperty',
    interfaces: []
  };
  var ag;
  function get_ag($receiver) {
    new Kotlin.PropertyMetadata('ag');
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = $receiver.extra) != null ? tmp$.get_11rb$(ag.name) : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : Kotlin.throwCCE()) != null ? tmp$_1 : ag.default;
  }
  var lmapOf = $module$korio_js.com.soywiz.korio.ds.lmapOf_qfcya0$;
  function set_ag($receiver, ag_0) {
    new Kotlin.PropertyMetadata('ag');
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_2 = $receiver.extra;
    tmp$ = ag.name;
    tmp$_1 = (tmp$_0 = ag_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : Kotlin.throwCCE();
    if (tmp$_2 != null) {
      tmp$_2.put_xwzc9p$(tmp$, tmp$_1);
    }
  }
  function LogLightComponents() {
    LightComponents.call(this);
    this.log = ArrayList_init();
    this.lastId = 0;
  }
  LogLightComponents.prototype.create_3wpq0m$ = function (type) {
    var tmp$;
    var id = (tmp$ = this.lastId, this.lastId = tmp$ + 1 | 0, tmp$);
    var $receiver = this.log;
    var element = 'create(' + type + ')=' + id;
    $receiver.add_11rb$(element);
    return new LightComponents$LightComponentInfo(id);
  };
  LogLightComponents.prototype.setParent_hfmcy5$ = function (c, parent) {
    var $receiver = this.log;
    var element = 'setParent(' + c + ',' + Kotlin.toString(parent) + ')';
    $receiver.add_11rb$(element);
  };
  LogLightComponents.prototype.setBounds_tiwvvj$ = function (c, x, y, width, height) {
    var $receiver = this.log;
    var element = 'setBounds(' + c + ',' + x + ',' + y + ',' + width + ',' + height + ')';
    $receiver.add_11rb$(element);
  };
  LogLightComponents.prototype.setProperty_qiitpl$ = function (c, key, value) {
    var $receiver = this.log;
    var element = 'setProperty(' + c + ',' + key + ',' + value + ')';
    $receiver.add_11rb$(element);
  };
  LogLightComponents.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LogLightComponents',
    interfaces: [LightComponents]
  };
  function Style(parent) {
    if (parent === void 0)
      parent = null;
    this.parent = parent;
    this.position = new Position(null, null);
    this.defaultSize = new Size(get_cm(3), get_cm_0(0.8));
    this.size = new Size(null, null);
    this.minSize = new Size(null, null);
    this.maxSize = new Size(null, null);
    this.padding = Padding_init_0(null);
    this.relativeTo = null;
    this.top = null;
    this.bottom = null;
    this.left = null;
    this.right = null;
    this.style_p457r9$_0 = this;
  }
  Object.defineProperty(Style.prototype, 'style', {
    get: function () {
      return this.style_p457r9$_0;
    }
  });
  Style.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Style',
    interfaces: [Styled]
  };
  function Style_0(callback) {
    var $receiver = new Style();
    callback($receiver);
    return $receiver;
  }
  function get_classStyle($receiver) {
    return $receiver.style.parent;
  }
  function set_classStyle($receiver, value) {
    $receiver.style.parent = value;
  }
  function Styled() {
  }
  Styled.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Styled',
    interfaces: []
  };
  function get_computedX($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = $receiver.style.position.x) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedX(tmp$) : null) != null ? tmp$_1 : Length$Companion_getInstance().ZERO;
  }
  function get_computedY($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = $receiver.style.position.y) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedY(tmp$) : null) != null ? tmp$_1 : Length$Companion_getInstance().ZERO;
  }
  function get_width($receiver) {
    return $receiver.style.size.width;
  }
  function set_width($receiver, v) {
    $receiver.style.size.width = v;
  }
  function get_height($receiver) {
    return $receiver.style.size.height;
  }
  function set_height($receiver, v) {
    $receiver.style.size.height = v;
  }
  function get_minWidth($receiver) {
    return $receiver.style.minSize.width;
  }
  function set_minWidth($receiver, v) {
    $receiver.style.minSize.width = v;
  }
  function get_minHeight($receiver) {
    return $receiver.style.minSize.height;
  }
  function set_minHeight($receiver, v) {
    $receiver.style.minSize.height = v;
  }
  function get_maxWidth($receiver) {
    return $receiver.style.maxSize.width;
  }
  function set_maxWidth($receiver, v) {
    $receiver.style.maxSize.width = v;
  }
  function get_maxHeight($receiver) {
    return $receiver.style.maxSize.height;
  }
  function set_maxHeight($receiver, v) {
    $receiver.style.maxSize.height = v;
  }
  function get_padding($receiver) {
    return $receiver.style.padding;
  }
  function set_padding($receiver, value) {
    $receiver.style.padding.setTo_7r3nag$(value);
  }
  function get_relativeTo($receiver) {
    return $receiver.style.relativeTo;
  }
  function set_relativeTo($receiver, value) {
    $receiver.style.relativeTo = value;
  }
  function get_top($receiver) {
    return $receiver.style.top;
  }
  function set_top($receiver, value) {
    $receiver.style.top = value;
  }
  function get_bottom($receiver) {
    return $receiver.style.bottom;
  }
  function set_bottom($receiver, value) {
    $receiver.style.bottom = value;
  }
  function get_left($receiver) {
    return $receiver.style.left;
  }
  function set_left($receiver, value) {
    $receiver.style.left = value;
  }
  function get_right($receiver) {
    return $receiver.style.right;
  }
  function set_right($receiver, value) {
    $receiver.style.right = value;
  }
  function get_computedPaddingTop($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = get_padding($receiver).top) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedPaddingTop(tmp$) : null) != null ? tmp$_1 : Length$Companion_getInstance().ZERO;
  }
  function get_computedPaddingRight($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = get_padding($receiver).right) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedPaddingRight(tmp$) : null) != null ? tmp$_1 : Length$Companion_getInstance().ZERO;
  }
  function get_computedPaddingBottom($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = get_padding($receiver).bottom) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedPaddingBottom(tmp$) : null) != null ? tmp$_1 : Length$Companion_getInstance().ZERO;
  }
  function get_computedPaddingLeft($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = get_padding($receiver).left) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedPaddingLeft(tmp$) : null) != null ? tmp$_1 : Length$Companion_getInstance().ZERO;
  }
  function get_computedPaddingLeftPlusRight($receiver) {
    return get_computedPaddingLeft($receiver).plus_px1v1r$(get_computedPaddingRight($receiver));
  }
  function get_computedPaddingTopPlusBottom($receiver) {
    return get_computedPaddingTop($receiver).plus_px1v1r$(get_computedPaddingBottom($receiver));
  }
  function get_computedWidth($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.style.size.width) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedWidth(tmp$) : null;
  }
  function get_computedHeight($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.style.size.height) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedHeight(tmp$) : null;
  }
  function get_computedDefaultWidth($receiver) {
    var tmp$;
    return (tmp$ = $receiver.style.defaultSize.width) != null ? tmp$ : get_pt(120);
  }
  function get_computedDefaultHeight($receiver) {
    var tmp$;
    return (tmp$ = $receiver.style.defaultSize.height) != null ? tmp$ : get_pt(32);
  }
  function get_computedMinWidth($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.style.minSize.width) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedMinWidth(tmp$) : null;
  }
  function get_computedMinHeight($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.style.minSize.height) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedMinHeight(tmp$) : null;
  }
  function get_computedMaxWidth($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.style.maxSize.width) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedMaxWidth(tmp$) : null;
  }
  function get_computedMaxHeight($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.style.maxSize.height) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedMaxHeight(tmp$) : null;
  }
  function get_computedRelativeTo($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.style.relativeTo) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedRelativeTo(tmp$) : null;
  }
  function get_computedTop($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.style.top) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedTop(tmp$) : null;
  }
  function get_computedBottom($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.style.bottom) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedBottom(tmp$) : null;
  }
  function get_computedLeft($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.style.left) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedLeft(tmp$) : null;
  }
  function get_computedRight($receiver) {
    var tmp$, tmp$_0;
    return (tmp$_0 = $receiver.style.right) != null ? tmp$_0 : (tmp$ = $receiver.style.parent) != null ? get_computedRight(tmp$) : null;
  }
  function computedCalcWidth($receiver, ctx, ignoreBounds) {
    if (ignoreBounds === void 0)
      ignoreBounds = false;
    return Length$Companion_getInstance().calc_keb01c$(ctx, get_computedDefaultWidth($receiver), get_computedWidth($receiver), get_computedMinWidth($receiver), get_computedMaxWidth($receiver), ignoreBounds);
  }
  function computedCalcHeight($receiver, ctx, ignoreBounds) {
    if (ignoreBounds === void 0)
      ignoreBounds = false;
    return Length$Companion_getInstance().calc_keb01c$(ctx, get_computedDefaultHeight($receiver), get_computedHeight($receiver), get_computedMinHeight($receiver), get_computedMaxHeight($receiver), ignoreBounds);
  }
  function computedCalcSize($receiver, ctx, size, out, ignoreBounds) {
    if (out === void 0)
      out = new SizeInt();
    if (ignoreBounds === void 0)
      ignoreBounds = false;
    return out.setTo_vux9f0$(computedCalcWidth($receiver, ctx.setSize_za3lpa$(size.width), ignoreBounds), computedCalcHeight($receiver, ctx.setSize_za3lpa$(size.height), ignoreBounds));
  }
  function Component(app, type) {
    this.app = app;
    this.type = type;
    this.$delegate_o3ssl7$_0 = new Extra$Mixin();
    this.coroutineContext = this.app.coroutineContext;
    this.lc = this.app.light;
    this.style_set6z2$_0 = new Style();
    this.componentInfo = this.lc.create_3wpq0m$(this.type);
    this.handle = this.componentInfo.handle;
    this.properties = LinkedHashMap_init();
    this.valid = false;
    this.nativeBounds = RectangleInt_init();
    this.actualBounds = RectangleInt_init();
    this.parent_ahormh$_0 = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.visible_ycdo4v$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().VISIBLE);
  }
  function Component$lightProperty(key, getable, setHandler) {
    if (getable === void 0)
      getable = false;
    if (setHandler === void 0)
      setHandler = null;
    this.key = key;
    this.getable = getable;
    this.setHandler = setHandler;
  }
  Component$lightProperty.prototype.getValue_syiuo7$ = defineInlineFunction('korui-js.com.soywiz.korui.ui.Component.lightProperty.getValue_syiuo7$', function (thisRef, property) {
    if (this.getable)
      return thisRef.lc.getProperty_jku6jz$(thisRef.handle, this.key);
    return thisRef.getProperty_93jcji$(this.key);
  });
  Component$lightProperty.prototype.setValue_yc5io2$ = defineInlineFunction('korui-js.com.soywiz.korui.ui.Component.lightProperty.setValue_yc5io2$', wrapFunction(function () {
    return function (thisRef, property, value) {
      var tmp$;
      thisRef.setProperty_aa6fc1$(this.key, value);
      (tmp$ = this.setHandler) != null ? tmp$(value) : null;
    };
  }));
  Component$lightProperty.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'lightProperty',
    interfaces: []
  };
  Object.defineProperty(Component.prototype, 'style', {
    get: function () {
      return this.style_set6z2$_0;
    },
    set: function (style) {
      this.style_set6z2$_0 = style;
    }
  });
  Object.defineProperty(Component.prototype, 'actualWidth', {
    get: function () {
      return this.actualBounds.width;
    }
  });
  Object.defineProperty(Component.prototype, 'actualHeight', {
    get: function () {
      return this.actualBounds.height;
    }
  });
  Component.prototype.setProperty_aa6fc1$ = function (key, value, reset) {
    if (reset === void 0)
      reset = false;
    if (reset || !Kotlin.equals(this.properties.get_11rb$(key), value)) {
      this.properties.put_xwzc9p$(key, value);
      this.lc.setProperty_qiitpl$(this.handle, key, value);
    }
  };
  var Map = Kotlin.kotlin.collections.Map;
  Component.prototype.getProperty_93jcji$ = function (key) {
    var tmp$;
    var $receiver = this.properties;
    var tmp$_0;
    return (Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : Kotlin.throwCCE()).containsKey_11rb$(key) ? (tmp$ = this.properties.get_11rb$(key)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : Kotlin.throwCCE() : key.default;
  };
  Component.prototype.setBoundsInternal_t9mhyo$ = function (bounds) {
    return this.setBoundsInternal_tjonv8$(bounds.x, bounds.y, bounds.width, bounds.height);
  };
  Component.prototype.setBoundsInternal_tjonv8$ = function (x, y, width, height) {
    var resized = this.nativeBounds.width !== width || this.nativeBounds.height !== height;
    this.nativeBounds.setTo_tjonv8$(x, y, width, height);
    this.actualBounds.setTo_tjonv8$(x, y, width, height);
    this.lc.setBounds_tiwvvj$(this.handle, x, y, width, height);
    if (resized) {
      this.onResized_tjonv8$(x, y, width, height);
      this.repaint();
    }
    return this.actualBounds;
  };
  Component.prototype.onResized_tjonv8$ = function (x, y, width, height) {
  };
  Component.prototype.repaint = function () {
  };
  Component.prototype.recreate = function () {
    var tmp$, tmp$_0;
    this.handle = this.lc.create_3wpq0m$(this.type);
    this.lc.setBounds_tiwvvj$(this.handle, this.nativeBounds.x, this.nativeBounds.y, this.nativeBounds.width, this.nativeBounds.height);
    tmp$ = this.properties.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var key = tmp$_1.key;
      var value = tmp$_1.value;
      this.lc.setProperty_qiitpl$(this.handle, key, value);
    }
    this.lc.setParent_hfmcy5$(this.handle, (tmp$_0 = this.parent) != null ? tmp$_0.handle : null);
  };
  Object.defineProperty(Component.prototype, 'parent', {
    get: function () {
      return this.parent_ahormh$_0;
    },
    set: function (newParent) {
      var tmp$;
      if (newParent != null) {
        newParent.children.remove_11rb$(this);
      }
      this.parent_ahormh$_0 = newParent;
      (tmp$ = newParent != null ? newParent.children : null) != null ? tmp$.add_11rb$(this) : null;
      this.lc.setParent_hfmcy5$(this.handle, newParent != null ? newParent.handle : null);
      newParent != null ? (newParent.invalidate(), Unit) : null;
    }
  });
  Component.prototype.invalidate = function () {
    this.invalidateAncestors();
    this.invalidateDescendants();
  };
  Component.prototype.invalidateDescendants = function () {
    this.valid = false;
  };
  Component.prototype.invalidateAncestors = function () {
    var tmp$;
    if (!this.valid)
      return;
    this.valid = false;
    (tmp$ = this.parent) != null ? (tmp$.invalidateAncestors(), Unit) : null;
  };
  Component.prototype.setBoundsAndRelayout_tjonv8$ = function (x, y, width, height) {
    if (this.valid)
      return this.actualBounds;
    this.valid = true;
    return this.setBoundsInternal_tjonv8$(x, y, width, height);
  };
  Component.prototype.setBoundsAndRelayout_t9mhyo$ = function (rect) {
    return this.setBoundsAndRelayout_tjonv8$(rect.x, rect.y, rect.width, rect.height);
  };
  Object.defineProperty(Component.prototype, 'visible', {
    get: function () {
      var $this = this.visible_ycdo4v$_0;
      new Kotlin.PropertyMetadata('visible');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (visible) {
      var $this = this.visible_ycdo4v$_0;
      new Kotlin.PropertyMetadata('visible');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, visible);
      (tmp$ = $this.setHandler) != null ? tmp$(visible) : null;
    }
  });
  Component.prototype.toString = function () {
    var tmp$;
    return (tmp$ = Kotlin.getKClassFromExpression(this).simpleName) != null ? tmp$ : 'unknown';
  };
  Component.prototype.focus = function () {
    this.lc.callAction_rg4qv$(this.handle, LightAction$Companion_getInstance().FOCUS, null);
  };
  Object.defineProperty(Component.prototype, 'extra', {
    get: function () {
      return this.$delegate_o3ssl7$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_o3ssl7$_0.extra = tmp$;
    }
  });
  Component.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Component',
    interfaces: [Extra, Styled]
  };
  function Container(app, layout, type) {
    if (type === void 0)
      type = LightType$CONTAINER_getInstance();
    Component.call(this, app, type);
    this.layout = layout;
    this.children = ArrayList_init();
  }
  Container.prototype.recreate = function () {
    var tmp$;
    Component.prototype.recreate.call(this);
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      child.recreate();
    }
  };
  Container.prototype.invalidateDescendants = function () {
    var tmp$;
    Component.prototype.invalidateDescendants.call(this);
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      child.invalidateDescendants();
    }
  };
  Container.prototype.setBoundsAndRelayout_tjonv8$ = function (x, y, width, height) {
    if (this.valid)
      return this.actualBounds;
    this.valid = true;
    return this.setBoundsInternal_t9mhyo$(this.layout.applyLayout_9q70rn$(this, this.children, x, y, width, height, this.actualBounds));
  };
  Container.prototype.add_x0aukp$ = function (other) {
    other.parent = this;
    return other;
  };
  Container.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Container',
    interfaces: [Component]
  };
  function ScrollPane(app, layout) {
    Container.call(this, app, layout, LightType$SCROLL_PANE_getInstance());
  }
  ScrollPane.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ScrollPane',
    interfaces: [Container]
  };
  function Frame(app, title) {
    Container.call(this, app, new LayeredLayout(app), LightType$FRAME_getInstance());
    this.title_qvdge3$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().TEXT);
    this.icon_d1vkig$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().ICON);
    this.bgcolor_jnwmqz$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().BGCOLOR);
    this.title = title;
  }
  Object.defineProperty(Frame.prototype, 'title', {
    get: function () {
      var $this = this.title_qvdge3$_0;
      new Kotlin.PropertyMetadata('title');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (title) {
      var $this = this.title_qvdge3$_0;
      new Kotlin.PropertyMetadata('title');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, title);
      (tmp$ = $this.setHandler) != null ? tmp$(title) : null;
    }
  });
  Object.defineProperty(Frame.prototype, 'icon', {
    get: function () {
      var $this = this.icon_d1vkig$_0;
      new Kotlin.PropertyMetadata('icon');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (icon) {
      var $this = this.icon_d1vkig$_0;
      new Kotlin.PropertyMetadata('icon');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, icon);
      (tmp$ = $this.setHandler) != null ? tmp$(icon) : null;
    }
  });
  Object.defineProperty(Frame.prototype, 'bgcolor', {
    get: function () {
      var $this = this.bgcolor_jnwmqz$_0;
      new Kotlin.PropertyMetadata('bgcolor');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (bgcolor) {
      var $this = this.bgcolor_jnwmqz$_0;
      new Kotlin.PropertyMetadata('bgcolor');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, bgcolor);
      (tmp$ = $this.setHandler) != null ? tmp$(bgcolor) : null;
    }
  });
  Frame.prototype.dialogOpenFile_61zpoe$ = function (filter, continuation) {
    if (filter === void 0)
      filter = '';
    if (!this.lc.insideEventHandler)
      throw new IllegalStateException("Can't open file dialog outside an event");
    return this.lc.dialogOpenFile_hwpqgh$(this.handle, filter, continuation);
  };
  Frame.prototype.prompt_61zpoe$ = function (message, continuation) {
    return this.lc.dialogPrompt_hwpqgh$(this.handle, message, continuation);
  };
  Frame.prototype.alert_61zpoe$ = function (message, continuation) {
    return this.lc.dialogAlert_hwpqgh$(this.handle, message, continuation);
  };
  Frame.prototype.openURL_61zpoe$ = function (url) {
    this.lc.openURL_61zpoe$(url);
  };
  Frame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Frame',
    interfaces: [Container]
  };
  function AgCanvas(app) {
    Component.call(this, app, LightType$AGCANVAS_getInstance());
    var tmp$;
    this.ag_oaxj5w$_0 = (tmp$ = get_ag(this.componentInfo)) != null ? tmp$ : Kotlin.throwNPE();
    this.agInput_5uul5a$_0 = new AGInput();
    get_onMouseUp(this).invoke_qlkmfe$(AgCanvas_init$lambda(this));
    get_onMouseDown(this).invoke_qlkmfe$(AgCanvas_init$lambda_0(this));
    get_onMouseOver(this).invoke_qlkmfe$(AgCanvas_init$lambda_1(this));
    get_onMouseClick(this).invoke_qlkmfe$(AgCanvas_init$lambda_2(this));
    get_onKeyDown(this).invoke_qlkmfe$(AgCanvas_init$lambda_3(this));
    get_onKeyUp(this).invoke_qlkmfe$(AgCanvas_init$lambda_4(this));
    get_onKeyTyped(this).invoke_qlkmfe$(AgCanvas_init$lambda_5(this));
    get_onTouchStart(this).invoke_qlkmfe$(AgCanvas_init$lambda_6(this));
    get_onTouchEnd(this).invoke_qlkmfe$(AgCanvas_init$lambda_7(this));
    get_onTouchMove(this).invoke_qlkmfe$(AgCanvas_init$lambda_8(this));
  }
  Object.defineProperty(AgCanvas.prototype, 'ag', {
    get: function () {
      return this.ag_oaxj5w$_0;
    }
  });
  Object.defineProperty(AgCanvas.prototype, 'agInput', {
    get: function () {
      return this.agInput_5uul5a$_0;
    }
  });
  AgCanvas.prototype.updateMouse_0 = function (e) {
    this.agInput.mouseEvent.x = e.x;
    this.agInput.mouseEvent.y = e.y;
  };
  AgCanvas.prototype.updateKey_0 = function (e) {
    this.agInput.keyEvent.keyCode = e.keyCode;
  };
  AgCanvas.prototype.updateTouch_0 = function (e) {
    this.agInput.touchEvent.id = e.id;
    this.agInput.touchEvent.x = e.x;
    this.agInput.touchEvent.y = e.y;
  };
  AgCanvas.prototype.repaint = function () {
    this.ag.repaint();
  };
  AgCanvas.prototype.onResized_tjonv8$ = function (x, y, width, height) {
    Component.prototype.onResized_tjonv8$.call(this, x, y, width, height);
    this.ag.resized();
  };
  function AgCanvas$onRender$lambda(closure$callback) {
    return function (it) {
      closure$callback(it);
      return Unit;
    };
  }
  AgCanvas.prototype.onRender_uyzvff$ = function (callback) {
    this.ag.onRender.invoke_qlkmfe$(AgCanvas$onRender$lambda(callback));
  };
  function AgCanvas_init$lambda(this$AgCanvas) {
    return function (it) {
      this$AgCanvas.updateMouse_0(it);
      this$AgCanvas.agInput.onMouseUp.invoke_11rb$(this$AgCanvas.agInput.mouseEvent);
      return Unit;
    };
  }
  function AgCanvas_init$lambda_0(this$AgCanvas) {
    return function (it) {
      this$AgCanvas.updateMouse_0(it);
      this$AgCanvas.agInput.onMouseDown.invoke_11rb$(this$AgCanvas.agInput.mouseEvent);
      return Unit;
    };
  }
  function AgCanvas_init$lambda_1(this$AgCanvas) {
    return function (it) {
      this$AgCanvas.updateMouse_0(it);
      this$AgCanvas.agInput.onMouseOver.invoke_11rb$(this$AgCanvas.agInput.mouseEvent);
      return Unit;
    };
  }
  function AgCanvas_init$lambda_2(this$AgCanvas) {
    return function (it) {
      this$AgCanvas.updateMouse_0(it);
      this$AgCanvas.agInput.onMouseClick.invoke_11rb$(this$AgCanvas.agInput.mouseEvent);
      return Unit;
    };
  }
  function AgCanvas_init$lambda_3(this$AgCanvas) {
    return function (it) {
      this$AgCanvas.updateKey_0(it);
      this$AgCanvas.agInput.onKeyDown.invoke_11rb$(this$AgCanvas.agInput.keyEvent);
      return Unit;
    };
  }
  function AgCanvas_init$lambda_4(this$AgCanvas) {
    return function (it) {
      this$AgCanvas.updateKey_0(it);
      this$AgCanvas.agInput.onKeyUp.invoke_11rb$(this$AgCanvas.agInput.keyEvent);
      return Unit;
    };
  }
  function AgCanvas_init$lambda_5(this$AgCanvas) {
    return function (it) {
      this$AgCanvas.updateKey_0(it);
      this$AgCanvas.agInput.onKeyTyped.invoke_11rb$(this$AgCanvas.agInput.keyEvent);
      return Unit;
    };
  }
  function AgCanvas_init$lambda_6(this$AgCanvas) {
    return function (it) {
      this$AgCanvas.updateTouch_0(it);
      this$AgCanvas.agInput.onTouchStart.invoke_11rb$(this$AgCanvas.agInput.touchEvent);
      return Unit;
    };
  }
  function AgCanvas_init$lambda_7(this$AgCanvas) {
    return function (it) {
      this$AgCanvas.updateTouch_0(it);
      this$AgCanvas.agInput.onTouchEnd.invoke_11rb$(this$AgCanvas.agInput.touchEvent);
      return Unit;
    };
  }
  function AgCanvas_init$lambda_8(this$AgCanvas) {
    return function (it) {
      this$AgCanvas.updateTouch_0(it);
      this$AgCanvas.agInput.onTouchMove.invoke_11rb$(this$AgCanvas.agInput.touchEvent);
      return Unit;
    };
  }
  AgCanvas.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AgCanvas',
    interfaces: [AGContainer, Component]
  };
  function Button(app, text) {
    Component.call(this, app, LightType$BUTTON_getInstance());
    this.text_fjlbd$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().TEXT);
    this.text = text;
  }
  Object.defineProperty(Button.prototype, 'text', {
    get: function () {
      var $this = this.text_fjlbd$_0;
      new Kotlin.PropertyMetadata('text');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (text) {
      var $this = this.text_fjlbd$_0;
      new Kotlin.PropertyMetadata('text');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, text);
      (tmp$ = $this.setHandler) != null ? tmp$(text) : null;
    }
  });
  Button.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Button',
    interfaces: [Component]
  };
  function Label(app, text) {
    Component.call(this, app, LightType$LABEL_getInstance());
    this.text_9jtyth$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().TEXT);
    this.text = text;
  }
  Object.defineProperty(Label.prototype, 'text', {
    get: function () {
      var $this = this.text_9jtyth$_0;
      new Kotlin.PropertyMetadata('text');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (text) {
      var $this = this.text_9jtyth$_0;
      new Kotlin.PropertyMetadata('text');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, text);
      (tmp$ = $this.setHandler) != null ? tmp$(text) : null;
    }
  });
  Label.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Label',
    interfaces: [Component]
  };
  function TextField(app, text) {
    Component.call(this, app, LightType$TEXT_FIELD_getInstance());
    this.text_m98nf8$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().TEXT, true);
    this.text = text;
  }
  Object.defineProperty(TextField.prototype, 'text', {
    get: function () {
      var $this = this.text_m98nf8$_0;
      new Kotlin.PropertyMetadata('text');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (text) {
      var $this = this.text_m98nf8$_0;
      new Kotlin.PropertyMetadata('text');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, text);
      (tmp$ = $this.setHandler) != null ? tmp$(text) : null;
    }
  });
  TextField.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TextField',
    interfaces: [Component]
  };
  function TextArea(app, text) {
    Component.call(this, app, LightType$TEXT_AREA_getInstance());
    this.text_r48hch$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().TEXT, true);
    this.text = text;
  }
  Object.defineProperty(TextArea.prototype, 'text', {
    get: function () {
      var $this = this.text_r48hch$_0;
      new Kotlin.PropertyMetadata('text');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (text) {
      var $this = this.text_r48hch$_0;
      new Kotlin.PropertyMetadata('text');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, text);
      (tmp$ = $this.setHandler) != null ? tmp$(text) : null;
    }
  });
  TextArea.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TextArea',
    interfaces: [Component]
  };
  function CheckBox(app, text, initialChecked) {
    Component.call(this, app, LightType$CHECK_BOX_getInstance());
    this.text_dmrk4m$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().TEXT);
    this.checked_3m3fl2$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().CHECKED, true);
    this.text = text;
    this.checked = initialChecked;
  }
  Object.defineProperty(CheckBox.prototype, 'text', {
    get: function () {
      var $this = this.text_dmrk4m$_0;
      new Kotlin.PropertyMetadata('text');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (text) {
      var $this = this.text_dmrk4m$_0;
      new Kotlin.PropertyMetadata('text');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, text);
      (tmp$ = $this.setHandler) != null ? tmp$(text) : null;
    }
  });
  Object.defineProperty(CheckBox.prototype, 'checked', {
    get: function () {
      var $this = this.checked_3m3fl2$_0;
      new Kotlin.PropertyMetadata('checked');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (checked) {
      var $this = this.checked_3m3fl2$_0;
      new Kotlin.PropertyMetadata('checked');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, checked);
      (tmp$ = $this.setHandler) != null ? tmp$(checked) : null;
    }
  });
  CheckBox.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CheckBox',
    interfaces: [Component]
  };
  function Progress(app, current, max) {
    if (current === void 0)
      current = 0;
    if (max === void 0)
      max = 100;
    Component.call(this, app, LightType$PROGRESS_getInstance());
    this.current_6wvho6$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().PROGRESS_CURRENT);
    this.max_awpbjz$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().PROGRESS_MAX);
    this.set_vux9f0$(current, max);
  }
  Object.defineProperty(Progress.prototype, 'current', {
    get: function () {
      var $this = this.current_6wvho6$_0;
      new Kotlin.PropertyMetadata('current');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (current) {
      var $this = this.current_6wvho6$_0;
      new Kotlin.PropertyMetadata('current');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, current);
      (tmp$ = $this.setHandler) != null ? tmp$(current) : null;
    }
  });
  Object.defineProperty(Progress.prototype, 'max', {
    get: function () {
      var $this = this.max_awpbjz$_0;
      new Kotlin.PropertyMetadata('max');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (max) {
      var $this = this.max_awpbjz$_0;
      new Kotlin.PropertyMetadata('max');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, max);
      (tmp$ = $this.setHandler) != null ? tmp$(max) : null;
    }
  });
  Progress.prototype.set_vux9f0$ = function (current, max) {
    this.current = current;
    this.max = max;
  };
  Progress.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Progress',
    interfaces: [Component]
  };
  function Spacer(app) {
    Component.call(this, app, LightType$CONTAINER_getInstance());
  }
  Spacer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Spacer',
    interfaces: [Component]
  };
  function Image(app) {
    Component.call(this, app, LightType$IMAGE_getInstance());
    this.image_wp04q$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().IMAGE, void 0, Image$image$lambda(this));
    this.smooth_x34etd$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().IMAGE_SMOOTH);
  }
  Object.defineProperty(Image.prototype, 'image', {
    get: function () {
      var $this = this.image_wp04q$_0;
      new Kotlin.PropertyMetadata('image');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (image) {
      var $this = this.image_wp04q$_0;
      new Kotlin.PropertyMetadata('image');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, image);
      (tmp$ = $this.setHandler) != null ? tmp$(image) : null;
    }
  });
  Object.defineProperty(Image.prototype, 'smooth', {
    get: function () {
      var $this = this.smooth_x34etd$_0;
      new Kotlin.PropertyMetadata('smooth');
      var getValue_syiuo7$result;
      getValue_syiuo7$break: do {
        if ($this.getable) {
          getValue_syiuo7$result = this.lc.getProperty_jku6jz$(this.handle, $this.key);
          break getValue_syiuo7$break;
        }
        getValue_syiuo7$result = this.getProperty_93jcji$($this.key);
      }
       while (false);
      return getValue_syiuo7$result;
    },
    set: function (smooth) {
      var $this = this.smooth_x34etd$_0;
      new Kotlin.PropertyMetadata('smooth');
      var tmp$;
      this.setProperty_aa6fc1$($this.key, smooth);
      (tmp$ = $this.setHandler) != null ? tmp$(smooth) : null;
    }
  });
  Image.prototype.refreshImage = function () {
    this.setProperty_aa6fc1$(LightProperty$Companion_getInstance().IMAGE, this.image, true);
  };
  function Image$image$lambda(this$Image) {
    return function (it) {
      if (it != null) {
        if (!Kotlin.equals(this$Image.style.defaultSize.width, get_pt(it.width)) || !Kotlin.equals(this$Image.style.defaultSize.height, get_pt(it.height))) {
          this$Image.style.defaultSize.setTo_6fmdh0$(get_pt(it.width), get_pt(it.height));
          this$Image.invalidate();
        }
      }
      return Unit;
    };
  }
  Image.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Image',
    interfaces: [Component]
  };
  function setSize($receiver, width, height) {
    $receiver.style.size.setTo_6fmdh0$(width, height);
    return $receiver;
  }
  function button($receiver, text, continuation) {
    return $receiver.add_x0aukp$(new Button($receiver.app, text));
  }
  var button_0 = defineInlineFunction('korui-js.com.soywiz.korui.ui.button_7vtrb7$', wrapFunction(function () {
    var Button_init = _.com.soywiz.korui.ui.Button;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    return function ($receiver_0, text_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$button($receiver_0, text_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$button($receiver_0, text_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$text = text_0;
    this.local$callback = callback_0;
  }
  Coroutine$button.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$button.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$button.prototype.constructor = Coroutine$button;
  Coroutine$button.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = new Button_init(this.local$$receiver.app, this.local$text);
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var progress = defineInlineFunction('korui-js.com.soywiz.korui.ui.progress_rtqiw6$', wrapFunction(function () {
    var Progress_init = _.com.soywiz.korui.ui.Progress;
    return function ($receiver, current, max, continuation) {
      return $receiver.add_x0aukp$(new Progress_init($receiver.app, current, max));
    };
  }));
  function agCanvas($receiver) {
    var $receiver_0 = new AgCanvas($receiver.app);
    var canvas = $receiver_0;
    return $receiver.add_x0aukp$($receiver_0);
  }
  var agCanvas_0 = defineInlineFunction('korui-js.com.soywiz.korui.ui.agCanvas_25j7gb$', wrapFunction(function () {
    var AgCanvas_init = _.com.soywiz.korui.ui.AgCanvas;
    return function ($receiver, callback) {
      var $receiver_0 = new AgCanvas_init($receiver.app);
      var canvas = $receiver_0;
      callback(canvas);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var image = defineInlineFunction('korui-js.com.soywiz.korui.ui.image_uhrqwu$', wrapFunction(function () {
    var Image_init = _.com.soywiz.korui.ui.Image;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    return function ($receiver_0, bitmap_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$image($receiver_0, bitmap_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$image($receiver_0, bitmap_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$closure$continuation = void 0;
    this.local$$receiver = $receiver_0;
    this.local$bitmap = bitmap_0;
    this.local$callback = callback_0;
  }
  Coroutine$image.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$image.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$image.prototype.constructor = Coroutine$image;
  Coroutine$image.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = new Image_init(this.local$$receiver.app);
            this.local$closure$continuation = this;
            this.local$$receiver_0.image = this.local$bitmap;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this.local$closure$continuation);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var image_0 = defineInlineFunction('korui-js.com.soywiz.korui.ui.image_wfl2m6$', wrapFunction(function () {
    var Image_init = _.com.soywiz.korui.ui.Image;
    var get_pt = _.com.soywiz.korui.geom.len.get_pt_s8ev3n$;
    return function ($receiver, bitmap, continuation) {
      var $receiver_0 = new Image_init($receiver.app);
      $receiver_0.image = bitmap;
      $receiver_0.style.defaultSize.width = get_pt(bitmap.width);
      $receiver_0.style.defaultSize.height = get_pt(bitmap.height);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var spacer = defineInlineFunction('korui-js.com.soywiz.korui.ui.spacer_r5smt6$', wrapFunction(function () {
    var Spacer_init = _.com.soywiz.korui.ui.Spacer;
    return function ($receiver, continuation) {
      return $receiver.add_x0aukp$(new Spacer_init($receiver.app));
    };
  }));
  var label = defineInlineFunction('korui-js.com.soywiz.korui.ui.label_dplrmp$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Label_init = _.com.soywiz.korui.ui.Label;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    function label$lambda($receiver, continuation) {
      return Unit;
    }
    return function ($receiver_0, text_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$label($receiver_0, text_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$label($receiver_0, text_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$text = text_0;
    this.local$callback = callback_0;
  }
  Coroutine$label.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$label.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$label.prototype.constructor = Coroutine$label;
  Coroutine$label.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$callback === void 0)
              this.local$callback = label$lambda;
            this.local$$receiver_0 = new Label_init(this.local$$receiver.app, this.local$text);
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var checkBox = defineInlineFunction('korui-js.com.soywiz.korui.ui.checkBox_7v3y9x$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var CheckBox_init = _.com.soywiz.korui.ui.CheckBox;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    function checkBox$lambda($receiver, continuation) {
      return Unit;
    }
    return function ($receiver_0, text_0, checked_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$checkBox($receiver_0, text_0, checked_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$checkBox($receiver_0, text_0, checked_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$text = text_0;
    this.local$checked = checked_0;
    this.local$callback = callback_0;
  }
  Coroutine$checkBox.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$checkBox.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$checkBox.prototype.constructor = Coroutine$checkBox;
  Coroutine$checkBox.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$checked === void 0)
              this.local$checked = false;
            if (this.local$callback === void 0)
              this.local$callback = checkBox$lambda;
            this.local$$receiver_0 = new CheckBox_init(this.local$$receiver.app, this.local$text, this.local$checked);
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var textField = defineInlineFunction('korui-js.com.soywiz.korui.ui.textField_2m75bu$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var TextField_init = _.com.soywiz.korui.ui.TextField;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    function textField$lambda($receiver, continuation) {
      return Unit;
    }
    return function ($receiver_0, text_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$textField($receiver_0, text_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$textField($receiver_0, text_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$text = text_0;
    this.local$callback = callback_0;
  }
  Coroutine$textField.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$textField.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$textField.prototype.constructor = Coroutine$textField;
  Coroutine$textField.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$text === void 0)
              this.local$text = '';
            if (this.local$callback === void 0)
              this.local$callback = textField$lambda;
            this.local$$receiver_0 = new TextField_init(this.local$$receiver.app, this.local$text);
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var textArea = defineInlineFunction('korui-js.com.soywiz.korui.ui.textArea_kqtko5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var TextArea_init = _.com.soywiz.korui.ui.TextArea;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    function textArea$lambda($receiver, continuation) {
      return Unit;
    }
    return function ($receiver_0, text_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$textArea($receiver_0, text_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$textArea($receiver_0, text_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$text = text_0;
    this.local$callback = callback_0;
  }
  Coroutine$textArea.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$textArea.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$textArea.prototype.constructor = Coroutine$textArea;
  Coroutine$textArea.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$text === void 0)
              this.local$text = '';
            if (this.local$callback === void 0)
              this.local$callback = textArea$lambda;
            this.local$$receiver_0 = new TextArea_init(this.local$$receiver.app, this.local$text);
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var layers = defineInlineFunction('korui-js.com.soywiz.korui.ui.layers_e5qoxs$', wrapFunction(function () {
    var LayeredLayout_init = _.com.soywiz.korui.ui.LayeredLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    return function ($receiver_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$layers($receiver_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$layers($receiver_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$callback = callback_0;
  }
  Coroutine$layers.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$layers.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$layers.prototype.constructor = Coroutine$layers;
  Coroutine$layers.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = new Container_init(this.local$$receiver.app, new LayeredLayout_init(this.local$$receiver.app));
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var layersKeepAspectRatio = defineInlineFunction('korui-js.com.soywiz.korui.ui.layersKeepAspectRatio_hhp93e$', wrapFunction(function () {
    var Anchor = _.$$importsForInline$$['korma-js'].com.soywiz.korma.geom.Anchor;
    var ScaleMode = _.$$importsForInline$$['korma-js'].com.soywiz.korma.geom.ScaleMode;
    var LayeredKeepAspectLayout_init = _.com.soywiz.korui.ui.LayeredKeepAspectLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    return function ($receiver_0, anchor_0, scaleMode_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$layersKeepAspectRatio($receiver_0, anchor_0, scaleMode_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$layersKeepAspectRatio($receiver_0, anchor_0, scaleMode_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$anchor = anchor_0;
    this.local$scaleMode = scaleMode_0;
    this.local$callback = callback_0;
  }
  Coroutine$layersKeepAspectRatio.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$layersKeepAspectRatio.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$layersKeepAspectRatio.prototype.constructor = Coroutine$layersKeepAspectRatio;
  Coroutine$layersKeepAspectRatio.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$anchor === void 0)
              this.local$anchor = Anchor.Companion.MIDDLE_CENTER;
            if (this.local$scaleMode === void 0)
              this.local$scaleMode = ScaleMode.Companion.SHOW_ALL;
            this.local$$receiver_0 = new Container_init(this.local$$receiver.app, new LayeredKeepAspectLayout_init(this.local$$receiver.app, this.local$anchor, this.local$scaleMode));
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var vertical = defineInlineFunction('korui-js.com.soywiz.korui.ui.vertical_e5qoxs$', wrapFunction(function () {
    var VerticalLayout_init = _.com.soywiz.korui.ui.VerticalLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    return function ($receiver_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$vertical($receiver_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$vertical($receiver_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$callback = callback_0;
  }
  Coroutine$vertical.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$vertical.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$vertical.prototype.constructor = Coroutine$vertical;
  Coroutine$vertical.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = new Container_init(this.local$$receiver.app, new VerticalLayout_init(this.local$$receiver.app));
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var horizontal = defineInlineFunction('korui-js.com.soywiz.korui.ui.horizontal_e5qoxs$', wrapFunction(function () {
    var HorizontalLayout_init = _.com.soywiz.korui.ui.HorizontalLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    return function ($receiver_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$horizontal($receiver_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$horizontal($receiver_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$callback = callback_0;
  }
  Coroutine$horizontal.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$horizontal.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$horizontal.prototype.constructor = Coroutine$horizontal;
  Coroutine$horizontal.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = new Container_init(this.local$$receiver.app, new HorizontalLayout_init(this.local$$receiver.app));
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var inline = defineInlineFunction('korui-js.com.soywiz.korui.ui.inline_e5qoxs$', wrapFunction(function () {
    var InlineLayout_init = _.com.soywiz.korui.ui.InlineLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    return function ($receiver_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$inline($receiver_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$inline($receiver_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$callback = callback_0;
  }
  Coroutine$inline.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$inline.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$inline.prototype.constructor = Coroutine$inline;
  Coroutine$inline.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = new Container_init(this.local$$receiver.app, new InlineLayout_init(this.local$$receiver.app));
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var relative = defineInlineFunction('korui-js.com.soywiz.korui.ui.relative_e5qoxs$', wrapFunction(function () {
    var RelativeLayout_init = _.com.soywiz.korui.ui.RelativeLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    return function ($receiver_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$relative($receiver_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$relative($receiver_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$callback = callback_0;
  }
  Coroutine$relative.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$relative.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$relative.prototype.constructor = Coroutine$relative;
  Coroutine$relative.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = new Container_init(this.local$$receiver.app, new RelativeLayout_init(this.local$$receiver.app));
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var scrollPane = defineInlineFunction('korui-js.com.soywiz.korui.ui.scrollPane_rf9v0u$', wrapFunction(function () {
    var ScrollPaneLayout_init = _.com.soywiz.korui.ui.ScrollPaneLayout;
    var ScrollPane_init = _.com.soywiz.korui.ui.ScrollPane;
    var await_0 = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.await_7zc599$;
    return function ($receiver_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$scrollPane($receiver_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$scrollPane($receiver_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$callback = callback_0;
  }
  Coroutine$scrollPane.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$scrollPane.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$scrollPane.prototype.constructor = Coroutine$scrollPane;
  Coroutine$scrollPane.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = new ScrollPane_init(this.local$$receiver.app, new ScrollPaneLayout_init(this.local$$receiver.app));
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$$receiver_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  function click$lambda$lambda(closure$handler, this$) {
    return function (it) {
      execAndForget(closure$handler, this$.coroutineContext, this$);
      return Unit;
    };
  }
  function click($receiver, handler) {
    get_onMouseClick($receiver).invoke_qlkmfe$(click$lambda$lambda(handler, $receiver));
    return $receiver;
  }
  function mouseOver$lambda$lambda(closure$handler, this$) {
    return function (it) {
      execAndForget(closure$handler, this$.coroutineContext, this$);
      return Unit;
    };
  }
  function mouseOver($receiver, handler) {
    get_onMouseOver($receiver).invoke_qlkmfe$(mouseOver$lambda$lambda(handler, $receiver));
    return $receiver;
  }
  function mouseEnter$lambda$lambda(closure$handler, this$) {
    return function (it) {
      execAndForget(closure$handler, this$.coroutineContext, this$);
      return Unit;
    };
  }
  function mouseEnter($receiver, handler) {
    get_onMouseEnter($receiver).invoke_qlkmfe$(mouseEnter$lambda$lambda(handler, $receiver));
    return $receiver;
  }
  function mouseExit$lambda$lambda(closure$handler, this$) {
    return function (it) {
      execAndForget(closure$handler, this$.coroutineContext, this$);
      return Unit;
    };
  }
  function mouseExit($receiver, handler) {
    get_onMouseExit($receiver).invoke_qlkmfe$(mouseExit$lambda$lambda(handler, $receiver));
    return $receiver;
  }
  function mouseEventOnce$lambda() {
    return new Once();
  }
  var mouseEventOnce;
  function get_mouseEventOnce($receiver) {
    var property = new Kotlin.PropertyMetadata('mouseEventOnce');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = mouseEventOnce.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = mouseEventOnce.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = mouseEventOnce.name) != null ? tmp$_3 : property.callableName;
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
  function set_mouseEventOnce($receiver, mouseEventOnce_0) {
    var property = new Kotlin.PropertyMetadata('mouseEventOnce');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = mouseEventOnce.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = mouseEventOnce_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function keyEventOnce$lambda() {
    return new Once();
  }
  var keyEventOnce;
  function get_keyEventOnce($receiver) {
    var property = new Kotlin.PropertyMetadata('keyEventOnce');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = keyEventOnce.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = keyEventOnce.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = keyEventOnce.name) != null ? tmp$_3 : property.callableName;
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
  function set_keyEventOnce($receiver, keyEventOnce_0) {
    var property = new Kotlin.PropertyMetadata('keyEventOnce');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = keyEventOnce.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = keyEventOnce_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function touchEventOnce$lambda() {
    return new Once();
  }
  var touchEventOnce;
  function get_touchEventOnce($receiver) {
    var property = new Kotlin.PropertyMetadata('touchEventOnce');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = touchEventOnce.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = touchEventOnce.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = touchEventOnce.name) != null ? tmp$_3 : property.callableName;
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
  function set_touchEventOnce($receiver, touchEventOnce_0) {
    var property = new Kotlin.PropertyMetadata('touchEventOnce');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = touchEventOnce.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = touchEventOnce_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function gamepadEventOnce$lambda() {
    return new Once();
  }
  var gamepadEventOnce;
  function get_gamepadEventOnce($receiver) {
    var property = new Kotlin.PropertyMetadata('gamepadEventOnce');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = gamepadEventOnce.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = gamepadEventOnce.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = gamepadEventOnce.name) != null ? tmp$_3 : property.callableName;
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
  function set_gamepadEventOnce($receiver, gamepadEventOnce_0) {
    var property = new Kotlin.PropertyMetadata('gamepadEventOnce');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = gamepadEventOnce.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = gamepadEventOnce_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function changeEventOnce$lambda() {
    return new Once();
  }
  var changeEventOnce;
  function get_changeEventOnce($receiver) {
    var property = new Kotlin.PropertyMetadata('changeEventOnce');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = changeEventOnce.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = changeEventOnce.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = changeEventOnce.name) != null ? tmp$_3 : property.callableName;
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
  function set_changeEventOnce($receiver, changeEventOnce_0) {
    var property = new Kotlin.PropertyMetadata('changeEventOnce');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = changeEventOnce.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = changeEventOnce_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function createMyHandler$lambda$lambda(closure$init, this$) {
    return function () {
      closure$init(this$);
      return Unit;
    };
  }
  function createMyHandler$lambda(closure$init) {
    return function ($receiver) {
      return new Signal(createMyHandler$lambda$lambda(closure$init, $receiver));
    };
  }
  function createMyHandler(init) {
    return new Extra$PropertyThis(void 0, createMyHandler$lambda(init));
  }
  function createMouseHandler$lambda($receiver) {
    registerMouseEventOnce($receiver);
    return Unit;
  }
  function createMouseHandler() {
    return createMyHandler(createMouseHandler$lambda);
  }
  function createKeyHandler$lambda($receiver) {
    registerKeyEventOnce($receiver);
    return Unit;
  }
  function createKeyHandler() {
    return createMyHandler(createKeyHandler$lambda);
  }
  function createTouchHandler$lambda($receiver) {
    registerTouchEventOnce($receiver);
    return Unit;
  }
  function createTouchHandler() {
    return createMyHandler(createTouchHandler$lambda);
  }
  function createGamepadHandler$lambda($receiver) {
    registerGamepadEventOnce($receiver);
    return Unit;
  }
  function createGamepadHandler() {
    return createMyHandler(createGamepadHandler$lambda);
  }
  function createChangeHandler$lambda($receiver) {
    registerChangeEventOnce($receiver);
    return Unit;
  }
  function createChangeHandler() {
    return createMyHandler(createChangeHandler$lambda);
  }
  var onMouseUp;
  function get_onMouseUp($receiver) {
    var property = new Kotlin.PropertyMetadata('onMouseUp');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onMouseUp.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onMouseUp.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onMouseUp.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onMouseDown;
  function get_onMouseDown($receiver) {
    var property = new Kotlin.PropertyMetadata('onMouseDown');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onMouseDown.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onMouseDown.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onMouseDown.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onMouseClick;
  function get_onMouseClick($receiver) {
    var property = new Kotlin.PropertyMetadata('onMouseClick');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onMouseClick.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onMouseClick.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onMouseClick.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onMouseOver;
  function get_onMouseOver($receiver) {
    var property = new Kotlin.PropertyMetadata('onMouseOver');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onMouseOver.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onMouseOver.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onMouseOver.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onMouseEnter;
  function get_onMouseEnter($receiver) {
    var property = new Kotlin.PropertyMetadata('onMouseEnter');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onMouseEnter.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onMouseEnter.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onMouseEnter.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onMouseExit;
  function get_onMouseExit($receiver) {
    var property = new Kotlin.PropertyMetadata('onMouseExit');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onMouseExit.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onMouseExit.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onMouseExit.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onKeyTyped;
  function get_onKeyTyped($receiver) {
    var property = new Kotlin.PropertyMetadata('onKeyTyped');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onKeyTyped.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onKeyTyped.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onKeyTyped.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onKeyDown;
  function get_onKeyDown($receiver) {
    var property = new Kotlin.PropertyMetadata('onKeyDown');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onKeyDown.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onKeyDown.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onKeyDown.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onKeyUp;
  function get_onKeyUp($receiver) {
    var property = new Kotlin.PropertyMetadata('onKeyUp');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onKeyUp.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onKeyUp.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onKeyUp.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onTouchStart;
  function get_onTouchStart($receiver) {
    var property = new Kotlin.PropertyMetadata('onTouchStart');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onTouchStart.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onTouchStart.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onTouchStart.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onTouchEnd;
  function get_onTouchEnd($receiver) {
    var property = new Kotlin.PropertyMetadata('onTouchEnd');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onTouchEnd.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onTouchEnd.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onTouchEnd.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onTouchMove;
  function get_onTouchMove($receiver) {
    var property = new Kotlin.PropertyMetadata('onTouchMove');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onTouchMove.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onTouchMove.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onTouchMove.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onGamepadDown;
  function get_onGamepadDown($receiver) {
    var property = new Kotlin.PropertyMetadata('onGamepadDown');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onGamepadDown.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onGamepadDown.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onGamepadDown.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onGamepadUp;
  function get_onGamepadUp($receiver) {
    var property = new Kotlin.PropertyMetadata('onGamepadUp');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onGamepadUp.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onGamepadUp.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onGamepadUp.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  var onChange;
  function get_onChange($receiver) {
    var property = new Kotlin.PropertyMetadata('onChange');
    var getValue_k5kq3i$result;
    getValue_k5kq3i$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = onChange.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = onChange.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = onChange.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : Kotlin.throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_k5kq3i$result = r;
        break getValue_k5kq3i$break;
      }
      getValue_k5kq3i$result = res;
    }
     while (false);
    return getValue_k5kq3i$result;
  }
  function registerMouseEventOnce$lambda$handle(this$registerMouseEventOnce) {
    return function ($receiver) {
      var this$registerMouseEventOnce_0 = this$registerMouseEventOnce;
      this$registerMouseEventOnce_0.mouseX = $receiver.x;
      this$registerMouseEventOnce_0.mouseY = $receiver.y;
      return $receiver;
    };
  }
  function registerMouseEventOnce$lambda$ObjectLiteral(this$registerMouseEventOnce, closure$handle) {
    this.this$registerMouseEventOnce = this$registerMouseEventOnce;
    this.closure$handle = closure$handle;
    LightMouseHandler.call(this);
  }
  registerMouseEventOnce$lambda$ObjectLiteral.prototype.enter_1pji0r$ = function (info) {
    get_onMouseEnter(this.this$registerMouseEventOnce).invoke_11rb$(this.closure$handle(info));
  };
  registerMouseEventOnce$lambda$ObjectLiteral.prototype.exit_1pji0r$ = function (info) {
    get_onMouseExit(this.this$registerMouseEventOnce).invoke_11rb$(this.closure$handle(info));
  };
  registerMouseEventOnce$lambda$ObjectLiteral.prototype.over_1pji0r$ = function (info) {
    get_onMouseOver(this.this$registerMouseEventOnce).invoke_11rb$(this.closure$handle(info));
  };
  registerMouseEventOnce$lambda$ObjectLiteral.prototype.up_1pji0r$ = function (info) {
    get_onMouseUp(this.this$registerMouseEventOnce).invoke_11rb$(this.closure$handle(info));
  };
  registerMouseEventOnce$lambda$ObjectLiteral.prototype.down_1pji0r$ = function (info) {
    get_onMouseDown(this.this$registerMouseEventOnce).invoke_11rb$(this.closure$handle(info));
  };
  registerMouseEventOnce$lambda$ObjectLiteral.prototype.click_1pji0r$ = function (info) {
    get_onMouseClick(this.this$registerMouseEventOnce).invoke_11rb$(this.closure$handle(info));
  };
  registerMouseEventOnce$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [LightMouseHandler]
  };
  function registerMouseEventOnce($receiver) {
    var $this = get_mouseEventOnce($receiver);
    if (!$this.completed) {
      $this.completed = true;
      var handle = registerMouseEventOnce$lambda$handle($receiver);
      $receiver.lc.addHandler_kxnioe$($receiver.handle, new registerMouseEventOnce$lambda$ObjectLiteral($receiver, handle));
    }
  }
  function registerKeyEventOnce$lambda$ObjectLiteral(this$registerKeyEventOnce) {
    this.this$registerKeyEventOnce = this$registerKeyEventOnce;
    LightKeyHandler.call(this);
  }
  registerKeyEventOnce$lambda$ObjectLiteral.prototype.typed_tzhr5h$ = function (info) {
    get_onKeyTyped(this.this$registerKeyEventOnce).invoke_11rb$(info);
  };
  registerKeyEventOnce$lambda$ObjectLiteral.prototype.down_tzhr5h$ = function (info) {
    get_onKeyDown(this.this$registerKeyEventOnce).invoke_11rb$(info);
  };
  registerKeyEventOnce$lambda$ObjectLiteral.prototype.up_tzhr5h$ = function (info) {
    get_onKeyUp(this.this$registerKeyEventOnce).invoke_11rb$(info);
  };
  registerKeyEventOnce$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [LightKeyHandler]
  };
  function registerKeyEventOnce($receiver) {
    var $this = get_keyEventOnce($receiver);
    if (!$this.completed) {
      $this.completed = true;
      $receiver.lc.addHandler_fho2ac$($receiver.handle, new registerKeyEventOnce$lambda$ObjectLiteral($receiver));
    }
  }
  function registerTouchEventOnce$lambda$ObjectLiteral(this$registerTouchEventOnce) {
    this.this$registerTouchEventOnce = this$registerTouchEventOnce;
    LightTouchHandler.call(this);
  }
  registerTouchEventOnce$lambda$ObjectLiteral.prototype.start_6ixrvv$ = function (info) {
    get_onTouchStart(this.this$registerTouchEventOnce).invoke_11rb$(info);
  };
  registerTouchEventOnce$lambda$ObjectLiteral.prototype.end_6ixrvv$ = function (info) {
    get_onTouchEnd(this.this$registerTouchEventOnce).invoke_11rb$(info);
  };
  registerTouchEventOnce$lambda$ObjectLiteral.prototype.move_6ixrvv$ = function (info) {
    get_onTouchMove(this.this$registerTouchEventOnce).invoke_11rb$(info);
  };
  registerTouchEventOnce$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [LightTouchHandler]
  };
  function registerTouchEventOnce($receiver) {
    var $this = get_touchEventOnce($receiver);
    if (!$this.completed) {
      $this.completed = true;
      $receiver.lc.addHandler_wddoqc$($receiver.handle, new registerTouchEventOnce$lambda$ObjectLiteral($receiver));
    }
  }
  function registerGamepadEventOnce$lambda$ObjectLiteral(this$registerGamepadEventOnce) {
    this.this$registerGamepadEventOnce = this$registerGamepadEventOnce;
    LightGamepadHandler.call(this);
  }
  registerGamepadEventOnce$lambda$ObjectLiteral.prototype.down_3c6md3$ = function (info) {
    get_onGamepadDown(this.this$registerGamepadEventOnce).invoke_11rb$(info);
  };
  registerGamepadEventOnce$lambda$ObjectLiteral.prototype.up_3c6md3$ = function (info) {
    get_onGamepadUp(this.this$registerGamepadEventOnce).invoke_11rb$(info);
  };
  registerGamepadEventOnce$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [LightGamepadHandler]
  };
  function registerGamepadEventOnce($receiver) {
    var $this = get_gamepadEventOnce($receiver);
    if (!$this.completed) {
      $this.completed = true;
      $receiver.lc.addHandler_bq7i26$($receiver.handle, new registerGamepadEventOnce$lambda$ObjectLiteral($receiver));
    }
  }
  function registerChangeEventOnce$lambda$ObjectLiteral(this$registerChangeEventOnce) {
    this.this$registerChangeEventOnce = this$registerChangeEventOnce;
    LightChangeHandler.call(this);
  }
  registerChangeEventOnce$lambda$ObjectLiteral.prototype.changed_x3b3b2$ = function (info) {
    get_onChange(this.this$registerChangeEventOnce).invoke_11rb$(info);
  };
  registerChangeEventOnce$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [LightChangeHandler]
  };
  function registerChangeEventOnce($receiver) {
    var $this = get_changeEventOnce($receiver);
    if (!$this.completed) {
      $this.completed = true;
      $receiver.lc.addHandler_8fo827$($receiver.handle, new registerChangeEventOnce$lambda$ObjectLiteral($receiver));
    }
  }
  function Layout(app) {
    this.app = app;
    this.ctx = this.app.lengthContext;
  }
  Layout.prototype.applyLayout_ypng6b$ = function (parent, children, inoutBounds) {
    var $this = this.ctx;
    var oldFontSize = $this.fontSize;
    var oldViewportWidth = $this.viewportWidth;
    var oldViewportHeight = $this.viewportHeight;
    var oldSize = $this.size;
    var oldPixelsPerInch = $this.pixelsPerInch;
    try {
      $this.viewportWidth = inoutBounds.width;
      $this.viewportHeight = inoutBounds.height;
      this.applyLayoutInternal_ypng6b$(parent, children, inoutBounds);
    }
    finally {
      $this.fontSize = oldFontSize;
      $this.viewportWidth = oldViewportWidth;
      $this.viewportHeight = oldViewportHeight;
      $this.size = oldSize;
      $this.pixelsPerInch = oldPixelsPerInch;
    }
  };
  Layout.prototype.applyLayoutInternal_ypng6b$ = function (parent, children, inoutBounds) {
  };
  Layout.prototype.applyLayout_9q70rn$ = function (parent, children, x, y, width, height, out) {
    if (out === void 0)
      out = RectangleInt_init();
    this.applyLayout_ypng6b$(parent, children, out.setTo_tjonv8$(x, y, width, height));
    return out;
  };
  function Layout$ScaleMode2(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Layout$ScaleMode2_initFields() {
    Layout$ScaleMode2_initFields = function () {
    };
    Layout$ScaleMode2$NEVER_instance = new Layout$ScaleMode2('NEVER', 0);
    Layout$ScaleMode2$SHRINK_instance = new Layout$ScaleMode2('SHRINK', 1);
    Layout$ScaleMode2$ALWAYS_instance = new Layout$ScaleMode2('ALWAYS', 2);
  }
  var Layout$ScaleMode2$NEVER_instance;
  function Layout$ScaleMode2$NEVER_getInstance() {
    Layout$ScaleMode2_initFields();
    return Layout$ScaleMode2$NEVER_instance;
  }
  var Layout$ScaleMode2$SHRINK_instance;
  function Layout$ScaleMode2$SHRINK_getInstance() {
    Layout$ScaleMode2_initFields();
    return Layout$ScaleMode2$SHRINK_instance;
  }
  var Layout$ScaleMode2$ALWAYS_instance;
  function Layout$ScaleMode2$ALWAYS_getInstance() {
    Layout$ScaleMode2_initFields();
    return Layout$ScaleMode2$ALWAYS_instance;
  }
  Layout$ScaleMode2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ScaleMode2',
    interfaces: [Enum]
  };
  function Layout$ScaleMode2$values() {
    return [Layout$ScaleMode2$NEVER_getInstance(), Layout$ScaleMode2$SHRINK_getInstance(), Layout$ScaleMode2$ALWAYS_getInstance()];
  }
  Layout$ScaleMode2.values = Layout$ScaleMode2$values;
  function Layout$ScaleMode2$valueOf(name) {
    switch (name) {
      case 'NEVER':
        return Layout$ScaleMode2$NEVER_getInstance();
      case 'SHRINK':
        return Layout$ScaleMode2$SHRINK_getInstance();
      case 'ALWAYS':
        return Layout$ScaleMode2$ALWAYS_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korui.ui.Layout.ScaleMode2.' + name);
    }
  }
  Layout$ScaleMode2.valueOf_61zpoe$ = Layout$ScaleMode2$valueOf;
  function Layout$ResultBounds(child, bounds, padPrev) {
    this.child = child;
    this.bounds = bounds;
    this.padPrev = padPrev;
    this.len = this.bounds.endInclusive - this.bounds.start | 0;
  }
  Layout$ResultBounds.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ResultBounds',
    interfaces: []
  };
  Layout$ResultBounds.prototype.component1 = function () {
    return this.child;
  };
  Layout$ResultBounds.prototype.component2 = function () {
    return this.bounds;
  };
  Layout$ResultBounds.prototype.component3 = function () {
    return this.padPrev;
  };
  Layout$ResultBounds.prototype.copy_xxbne8$ = function (child, bounds, padPrev) {
    return new Layout$ResultBounds(child === void 0 ? this.child : child, bounds === void 0 ? this.bounds : bounds, padPrev === void 0 ? this.padPrev : padPrev);
  };
  Layout$ResultBounds.prototype.toString = function () {
    return 'ResultBounds(child=' + Kotlin.toString(this.child) + (', bounds=' + Kotlin.toString(this.bounds)) + (', padPrev=' + Kotlin.toString(this.padPrev)) + ')';
  };
  Layout$ResultBounds.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.child) | 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    result = result * 31 + Kotlin.hashCode(this.padPrev) | 0;
    return result;
  };
  Layout$ResultBounds.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.child, other.child) && Kotlin.equals(this.bounds, other.bounds) && Kotlin.equals(this.padPrev, other.padPrev)))));
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  Layout.prototype.genAxisBounds_4ixdkk$ = function (size, list, itemSize, paddingPrev, paddingNext, scaled) {
    var tmp$, tmp$_0;
    var pos = 0;
    var lastPadding = 0;
    var out = ArrayList_init();
    tmp$ = list.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var a = lastPadding;
      var b = calcMax(paddingPrev(item), this.ctx.setSize_za3lpa$(size));
      var itemPaddingPrev = Math_0.max(a, b);
      var itemSizeSize = itemSize(item, size);
      var actualItemPaddingPrev = lastPadding !== 0 ? itemPaddingPrev : 0;
      pos = pos + actualItemPaddingPrev | 0;
      var start = pos;
      pos = pos + itemSizeSize | 0;
      var end = pos;
      var element = new Layout$ResultBounds(item, until(start, end), actualItemPaddingPrev);
      out.add_11rb$(element);
      lastPadding = calcMax(paddingNext(item), this.ctx.setSize_za3lpa$(size));
    }
    var scaleFit = size / pos;
    if (Kotlin.equals(scaled, Layout$ScaleMode2$SHRINK_getInstance()))
      tmp$_0 = pos > size ? scaleFit : 1.0;
    else if (Kotlin.equals(scaled, Layout$ScaleMode2$ALWAYS_getInstance()))
      tmp$_0 = scaleFit;
    else if (Kotlin.equals(scaled, Layout$ScaleMode2$NEVER_getInstance()))
      tmp$_0 = 1.0;
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    var scale = tmp$_0;
    var destination = ArrayList_init(collectionSizeOrDefault(out, 10));
    var tmp$_1;
    tmp$_1 = out.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination.add_11rb$(item_0.copy_xxbne8$(void 0, new IntRange(item_0.bounds.start * scale | 0, item_0.bounds.endInclusive * scale | 0), item_0.padPrev * scale | 0));
    }
    return destination;
  };
  Layout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Layout',
    interfaces: []
  };
  function LayeredLayout(app) {
    Layout.call(this, app);
  }
  LayeredLayout.prototype.applyLayoutInternal_ypng6b$ = function (parent, children, inoutBounds) {
    var tmp$;
    var actualBounds = setNewBoundsTo(RectangleInt_init(), this.ctx, inoutBounds, get_computedPaddingLeft(parent.style), get_computedPaddingTop(parent.style), get_percent(100).minus_px1v1r$(get_computedPaddingRight(parent.style)), get_percent(100).minus_px1v1r$(get_computedPaddingBottom(parent.style)));
    tmp$ = children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      child.setBoundsAndRelayout_t9mhyo$(actualBounds);
    }
  };
  LayeredLayout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LayeredLayout',
    interfaces: [Layout]
  };
  function LayeredKeepAspectLayout(app, anchor, scaleMode) {
    if (scaleMode === void 0)
      scaleMode = ScaleMode.Companion.SHOW_ALL;
    Layout.call(this, app);
    this.anchor = anchor;
    this.scaleMode = scaleMode;
  }
  LayeredKeepAspectLayout.prototype.applyLayoutInternal_ypng6b$ = function (parent, children, inoutBounds) {
    var tmp$;
    var actualBounds = setNewBoundsTo(RectangleInt_init(), this.ctx, inoutBounds, get_computedPaddingLeft(parent.style), get_computedPaddingTop(parent.style), get_percent(100).minus_px1v1r$(get_computedPaddingRight(parent.style)), get_percent(100).minus_px1v1r$(get_computedPaddingBottom(parent.style)));
    tmp$ = children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      var size1 = computedCalcSize(child, this.ctx, actualBounds.size, void 0, true);
      var asize = size1.applyScaleMode_l1tb1d$(actualBounds.size, this.scaleMode);
      var endSize = asize.anchoredIn_t311vp$(actualBounds, this.anchor);
      child.setBoundsAndRelayout_t9mhyo$(endSize);
      child.setBoundsInternal_t9mhyo$(endSize);
    }
  };
  LayeredKeepAspectLayout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LayeredKeepAspectLayout',
    interfaces: [Layout]
  };
  function VerticalHorizontalLayout(app, vertical, scaleMode, resizeContainer) {
    Layout.call(this, app);
    this.vertical = vertical;
    this.scaleMode = scaleMode;
    this.resizeContainer = resizeContainer;
  }
  function VerticalHorizontalLayout$applyLayoutInternal$lambda(this$VerticalHorizontalLayout) {
    return function ($receiver, it) {
      return this$VerticalHorizontalLayout.vertical ? computedCalcHeight($receiver, this$VerticalHorizontalLayout.ctx.setSize_za3lpa$(it)) : computedCalcWidth($receiver, this$VerticalHorizontalLayout.ctx.setSize_za3lpa$(it));
    };
  }
  function VerticalHorizontalLayout$applyLayoutInternal$lambda_0(closure$paddingPrev) {
    return function ($receiver) {
      return closure$paddingPrev;
    };
  }
  function VerticalHorizontalLayout$applyLayoutInternal$lambda_1(closure$paddingNext) {
    return function ($receiver) {
      return closure$paddingNext;
    };
  }
  VerticalHorizontalLayout.prototype.applyLayoutInternal_ypng6b$ = function (parent, children, inoutBounds) {
    var tmp$;
    var paddingPrev = this.vertical ? get_computedPaddingTop(parent.style) : get_computedPaddingLeft(parent.style);
    var paddingNext = this.vertical ? get_computedPaddingBottom(parent.style) : get_computedPaddingRight(parent.style);
    var inboundsSide = this.vertical ? inoutBounds.height : inoutBounds.width;
    var posList = this.genAxisBounds_4ixdkk$(inboundsSide, children, VerticalHorizontalLayout$applyLayoutInternal$lambda(this), VerticalHorizontalLayout$applyLayoutInternal$lambda_0(paddingPrev), VerticalHorizontalLayout$applyLayoutInternal$lambda_1(paddingNext), this.scaleMode);
    var roffset = 0;
    tmp$ = posList.iterator();
    while (tmp$.hasNext()) {
      var pos = tmp$.next();
      roffset = roffset + pos.padPrev | 0;
      if (this.vertical) {
        var cbounds = pos.child.setBoundsAndRelayout_tjonv8$(0, roffset, inoutBounds.width, pos.len);
        roffset = roffset + cbounds.height | 0;
      }
       else {
        var cbounds_0 = pos.child.setBoundsAndRelayout_tjonv8$(roffset, 0, pos.len, inoutBounds.height);
        roffset = roffset + cbounds_0.width | 0;
      }
    }
    if (this.resizeContainer) {
      if (this.vertical) {
        inoutBounds.setSize_vux9f0$(inoutBounds.width, roffset);
      }
       else {
        inoutBounds.setSize_vux9f0$(roffset, inoutBounds.height);
      }
    }
  };
  VerticalHorizontalLayout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VerticalHorizontalLayout',
    interfaces: [Layout]
  };
  function VerticalLayout(app) {
    VerticalHorizontalLayout.call(this, app, true, Layout$ScaleMode2$SHRINK_getInstance(), true);
  }
  VerticalLayout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VerticalLayout',
    interfaces: [VerticalHorizontalLayout]
  };
  function HorizontalLayout(app) {
    VerticalHorizontalLayout.call(this, app, false, Layout$ScaleMode2$ALWAYS_getInstance(), true);
  }
  HorizontalLayout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HorizontalLayout',
    interfaces: [VerticalHorizontalLayout]
  };
  function ScrollPaneLayout(app) {
    VerticalHorizontalLayout.call(this, app, true, Layout$ScaleMode2$NEVER_getInstance(), false);
  }
  ScrollPaneLayout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ScrollPaneLayout',
    interfaces: [VerticalHorizontalLayout]
  };
  function InlineLayout(app) {
    Layout.call(this, app);
  }
  function InlineLayout$applyLayoutInternal$lambda(this$InlineLayout) {
    return function ($receiver, it) {
      return computedCalcWidth($receiver, this$InlineLayout.ctx.setSize_za3lpa$(it));
    };
  }
  function InlineLayout$applyLayoutInternal$lambda_0(closure$parent) {
    return function ($receiver) {
      return get_computedPaddingLeft(closure$parent.style);
    };
  }
  function InlineLayout$applyLayoutInternal$lambda_1(closure$parent) {
    return function ($receiver) {
      return get_computedPaddingRight(closure$parent.style);
    };
  }
  InlineLayout.prototype.applyLayoutInternal_ypng6b$ = function (parent, children, inoutBounds) {
    var tmp$;
    var posList = this.genAxisBounds_4ixdkk$(inoutBounds.width, children, InlineLayout$applyLayoutInternal$lambda(this), InlineLayout$applyLayoutInternal$lambda_0(parent), InlineLayout$applyLayoutInternal$lambda_1(parent), Layout$ScaleMode2$NEVER_getInstance());
    var maxheight = 0;
    var xoffset = 0;
    tmp$ = posList.iterator();
    while (tmp$.hasNext()) {
      var pos = tmp$.next();
      var cheight = computedCalcHeight(pos.child, this.ctx.setSize_za3lpa$(inoutBounds.height), true);
      xoffset = xoffset + pos.padPrev | 0;
      var a = maxheight;
      maxheight = Math_0.max(a, cheight);
      var cbounds = pos.child.setBoundsAndRelayout_tjonv8$(xoffset, 0, pos.len, cheight);
      xoffset = xoffset + cbounds.width | 0;
    }
    inoutBounds.setSize_vux9f0$(inoutBounds.width, maxheight);
  };
  InlineLayout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InlineLayout',
    interfaces: [Layout]
  };
  function RelativeLayout(app) {
    Layout.call(this, app);
  }
  function RelativeLayout$applyLayoutInternal$compute(closure$computed, closure$childrenSet, this$RelativeLayout, closure$parentWidth, closure$parentHeight, closure$maxHeight) {
    return function closure$compute(c) {
      if (closure$computed.contains_11rb$(c))
        return c.actualBounds;
      closure$computed.add_11rb$(c);
      if (!closure$childrenSet.contains_11rb$(c))
        return c.actualBounds;
      var relativeTo = get_computedRelativeTo(c);
      var cw = computedCalcWidth(c, this$RelativeLayout.ctx.setSize_za3lpa$(closure$parentWidth));
      var ch = computedCalcHeight(c, this$RelativeLayout.ctx.setSize_za3lpa$(closure$parentHeight));
      var cComputedLeft = get_computedLeft(c);
      var cComputedTop = get_computedTop(c);
      var cComputedRight = get_computedRight(c);
      var cComputedBottom = get_computedBottom(c);
      var cActualBounds = c.actualBounds;
      cActualBounds.setSize_vux9f0$(cw, ch);
      if (cComputedLeft != null) {
        var leftRelative = relativeTo != null ? closure$compute(relativeTo).right : 0;
        cActualBounds.x = leftRelative + cComputedLeft.calc_96r7jk$(this$RelativeLayout.ctx.setSize_za3lpa$(closure$parentWidth)) | 0;
      }
       else if (cComputedRight != null) {
        var rightRelative = relativeTo != null ? closure$compute(relativeTo).left : closure$parentWidth;
        cActualBounds.x = rightRelative - cComputedRight.calc_96r7jk$(this$RelativeLayout.ctx.setSize_za3lpa$(closure$parentWidth)) - c.actualBounds.width | 0;
      }
       else {
        cActualBounds.x = relativeTo != null ? closure$compute(relativeTo).x : 0;
      }
      if (cComputedTop != null) {
        var topRelative = relativeTo != null ? closure$compute(relativeTo).bottom : 0;
        cActualBounds.y = topRelative + cComputedTop.calc_96r7jk$(this$RelativeLayout.ctx.setSize_za3lpa$(closure$parentHeight)) | 0;
      }
       else if (cComputedBottom != null) {
        var bottomRelative = relativeTo != null ? closure$compute(relativeTo).top : closure$parentHeight;
        cActualBounds.y = bottomRelative - cComputedBottom.calc_96r7jk$(this$RelativeLayout.ctx.setSize_za3lpa$(closure$parentHeight)) - c.actualBounds.height | 0;
      }
       else {
        cActualBounds.y = relativeTo != null ? closure$compute(relativeTo).y : 0;
      }
      c.setBoundsAndRelayout_t9mhyo$(cActualBounds);
      var tmp$ = closure$maxHeight;
      var a = closure$maxHeight.v;
      var b = cActualBounds.height;
      tmp$.v = Math_0.max(a, b);
      return c.actualBounds;
    };
  }
  RelativeLayout.prototype.applyLayoutInternal_ypng6b$ = function (parent, children, inoutBounds) {
    var tmp$;
    var parentWidth = inoutBounds.width;
    var parentHeight = inoutBounds.height;
    var childrenSet = HashSet_init(toList(children));
    var computed = LinkedHashSet_init();
    var maxHeight = {v: parentHeight};
    var compute = RelativeLayout$applyLayoutInternal$compute(computed, childrenSet, this, parentWidth, parentHeight, maxHeight);
    tmp$ = children.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      compute(c);
    }
  };
  RelativeLayout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RelativeLayout',
    interfaces: [Layout]
  };
  function vectorImage($receiver_0, vector_0, continuation_0, suspended) {
    var instance = new Coroutine$vectorImage($receiver_0, vector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$vectorImage($receiver_0, vector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$closure$continuation = void 0;
    this.local$$receiver = $receiver_0;
    this.local$vector = vector_0;
  }
  Coroutine$vectorImage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$vectorImage.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$vectorImage.prototype.constructor = Coroutine$vectorImage;
  Coroutine$vectorImage.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = new VectorImage(this.local$$receiver.app);
            this.local$closure$continuation = this;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver_0.setVector_qmzsv0$(this.local$vector, this.local$vector.width, this.local$vector.height, this.local$closure$continuation);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  var vectorImage_0 = defineInlineFunction('korui-js.com.soywiz.korui.ui.vectorImage_lz2sxk$', wrapFunction(function () {
    var VectorImage_init = _.com.soywiz.korui.ui.VectorImage;
    return function ($receiver_0, vector_0, callback_0, continuation_0, suspended) {
      var instance = new Coroutine$vectorImage_0($receiver_0, vector_0, callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }));
  function Coroutine$vectorImage_0($receiver_0, vector_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$closure$continuation = void 0;
    this.local$$receiver = $receiver_0;
    this.local$vector = vector_0;
    this.local$callback = callback_0;
  }
  Coroutine$vectorImage_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$vectorImage_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$vectorImage_0.prototype.constructor = Coroutine$vectorImage_0;
  Coroutine$vectorImage_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver_0 = new VectorImage_init(this.local$$receiver.app);
            this.local$closure$continuation = this;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver_0.setVector_qmzsv0$(this.local$vector, this.local$vector.width, this.local$vector.height, this.local$closure$continuation);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$callback(this.local$$receiver_0);
            return this.local$$receiver.add_x0aukp$(this.local$$receiver_0);
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
  function VectorImage(app) {
    Container.call(this, app, new LayeredLayout(app));
    this.d_9jzme4$_0 = this.d_9jzme4$_0;
    this.img_jm9cm3$_0 = this.img_jm9cm3$_0;
    this.targetWidth = 512;
    this.targetHeight = 512;
  }
  Object.defineProperty(VectorImage.prototype, 'd', {
    get: function () {
      if (this.d_9jzme4$_0 == null)
        return Kotlin.throwUPAE('d');
      return this.d_9jzme4$_0;
    },
    set: function (d) {
      this.d_9jzme4$_0 = d;
    }
  });
  Object.defineProperty(VectorImage.prototype, 'img', {
    get: function () {
      if (this.img_jm9cm3$_0 == null)
        return Kotlin.throwUPAE('img');
      return this.img_jm9cm3$_0;
    },
    set: function (img) {
      this.img_jm9cm3$_0 = img;
    }
  });
  VectorImage.prototype.setVector_qmzsv0$ = function (d_0, width_0, height_0, continuation_0, suspended) {
    var instance = new Coroutine$setVector_qmzsv0$(this, d_0, width_0, height_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$setVector_qmzsv0$($this, d_0, width_0, height_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$bitmap = void 0;
    this.local$$receiver = void 0;
    this.local$d = d_0;
    this.local$width = width_0;
    this.local$height = height_0;
  }
  Coroutine$setVector_qmzsv0$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setVector_qmzsv0$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setVector_qmzsv0$.prototype.constructor = Coroutine$setVector_qmzsv0$;
  Coroutine$setVector_qmzsv0$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.d = this.local$d;
            this.$this.targetWidth = this.local$width;
            this.$this.targetHeight = this.local$height;
            this.$this.style.defaultSize.setTo_6fmdh0$(get_pt(this.local$width), get_pt(this.local$height));
            this.local$bitmap = NativeImage(1, 1);
            this.local$$receiver = new Image(this.$this.app);
            this.local$$receiver.image = this.local$bitmap;
            this.local$$receiver.style.defaultSize.width = get_pt(this.local$bitmap.width);
            this.local$$receiver.style.defaultSize.height = get_pt(this.local$bitmap.height);
            this.result_0 = this.$this.add_x0aukp$(this.local$$receiver);
            this.$this.img = this.result_0;
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
  VectorImage.prototype.onResized_tjonv8$ = function (x, y, width, height) {
    this.img.image = this.raster_vux9f0$(width, height);
  };
  VectorImage.prototype.raster_vux9f0$ = function (width, height) {
    return NativeImage_0(width, height, this.d, width / this.targetWidth, height / this.targetHeight);
  };
  VectorImage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VectorImage',
    interfaces: [Container]
  };
  function KoruiEventLoop() {
    KoruiEventLoop_instance = this;
    this.instance_5jnlrf$_0 = lazy(KoruiEventLoop$instance$lambda);
  }
  Object.defineProperty(KoruiEventLoop.prototype, 'instance', {
    get: function () {
      var $receiver = this.instance_5jnlrf$_0;
      new Kotlin.PropertyMetadata('instance');
      return $receiver.value;
    }
  });
  function KoruiEventLoop$instance$lambda() {
    return async.eventLoopFactoryDefaultImpl.createEventLoop();
  }
  KoruiEventLoop.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'KoruiEventLoop',
    interfaces: []
  };
  var KoruiEventLoop_instance = null;
  function KoruiEventLoop_getInstance() {
    if (KoruiEventLoop_instance === null) {
      new KoruiEventLoop();
    }
    return KoruiEventLoop_instance;
  }
  function NativeLightsComponentsFactory() {
    NativeLightsComponentsFactory_instance = this;
  }
  NativeLightsComponentsFactory.prototype.create = function () {
    return new HtmlLightComponents();
  };
  NativeLightsComponentsFactory.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'NativeLightsComponentsFactory',
    interfaces: [LightComponentsFactory]
  };
  var NativeLightsComponentsFactory_instance = null;
  function NativeLightsComponentsFactory_getInstance() {
    if (NativeLightsComponentsFactory_instance === null) {
      new NativeLightsComponentsFactory();
    }
    return NativeLightsComponentsFactory_instance;
  }
  var windowInputFile;
  var selectedFiles;
  var mainFrame;
  function HtmlLightComponents() {
    LightComponents.call(this);
    this.tDevicePixelRatio = window.devicePixelRatio;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.tDevicePixelRatio <= 0.0)
      tmp$ = 1.0;
    else if (isNaN_0(this.tDevicePixelRatio))
      tmp$ = 1.0;
    else if (isInfinite(this.tDevicePixelRatio))
      tmp$ = 1.0;
    else
      tmp$ = this.tDevicePixelRatio;
    this.devicePixelRatio = tmp$;
    this.addStyles_61zpoe$('\n\t\t\tbody {\n\t\t\t\tfont: 11pt Arial;\n\t\t\t}\n\t\t\t.BUTTON {\n\t\t\t\t-moz-box-shadow:inset 0px 1px 0px 0px #ffffff;\n\t\t\t\t-webkit-box-shadow:inset 0px 1px 0px 0px #ffffff;\n\t\t\t\tbox-shadow:inset 0px 1px 0px 0px #ffffff;\n\t\t\t\tbackground:linear-gradient(to bottom, #ffffff 5%, #f6f6f6 100%);\n\t\t\t\tbackground-color:#ffffff;\n\t\t\t\t-moz-border-radius:6px;\n\t\t\t\t-webkit-border-radius:6px;\n\t\t\t\tborder-radius:6px;\n\t\t\t\tborder:1px solid #dcdcdc;\n\t\t\t\tdisplay:inline-block;\n\t\t\t\tcursor:pointer;\n\t\t\t\tcolor:#666666;\n\t\t\t\tfont-family:Arial;\n\t\t\t\tfont-size:15px;\n\t\t\t\tfont-weight:bold;\n\t\t\t\tpadding:6px 24px;\n\t\t\t\ttext-decoration:none;\n\t\t\t\ttext-shadow:0px 1px 0px #ffffff;\n\t\t\t}\n\t\t\t.BUTTON:hover {\n\t\t\t\tbackground:linear-gradient(to bottom, #f6f6f6 5%, #ffffff 100%);\n\t\t\t\tbackground-color:#f6f6f6;\n\t\t\t}\n\t\t\t.BUTTON:active {\n\t\t\t\tpadding-top: 7px;\n\t\t\t\tpadding-bottom: 5px;\n\n\t\t\t\tbackground:linear-gradient(to bottom, #f0f0f0 5%, #f6f6f6 100%);\n\t\t\t\tbackground-color:#f6f6f6;\n\t\t\t}\n\t\t\t.BUTTON:focus {\n\t\t\t\t/*outline: auto 5px -webkit-focus-ring-color;*/\n\t\t\t\toutline: auto 1px black;\n\t\t\t}\n\t\t\t.TEXT_AREA {\n\t\t\t\twhite-space: nowrap;\n\t\t\t\tresize: none;\n\t\t\t}\n\t\t');
    (tmp$_1 = (tmp$_0 = document.body) != null ? tmp$_0.style : null) != null ? (tmp$_1.background = '#f0f0f0') : null;
    var inputFile = Kotlin.isType(tmp$_2 = document.createElement('input'), HTMLInputElement) ? tmp$_2 : Kotlin.throwCCE();
    inputFile.type = 'file';
    inputFile.style.visibility = 'hidden';
    windowInputFile = inputFile;
    selectedFiles = [];
    (tmp$_3 = document.body) != null ? tmp$_3.appendChild(inputFile) : null;
  }
  HtmlLightComponents.prototype.addStyles_61zpoe$ = function (css) {
    var tmp$, tmp$_0, tmp$_1;
    var head = (tmp$_0 = document.head) != null ? tmp$_0 : Kotlin.isType(tmp$ = document.getElementsByTagName('head')[0], HTMLHeadElement) ? tmp$ : Kotlin.throwCCE();
    var style = Kotlin.isType(tmp$_1 = document.createElement('style'), HTMLStyleElement) ? tmp$_1 : Kotlin.throwCCE();
    style.type = 'text/css';
    if (style.styleSheet != null) {
      style.styleSheet.cssText = css;
    }
     else {
      style.appendChild(document.createTextNode(css));
    }
    head.appendChild(style);
  };
  HtmlLightComponents.prototype.create_3wpq0m$ = function (type) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
    var agg = {v: null};
    if (Kotlin.equals(type, LightType$FRAME_getInstance())) {
      var $receiver = Kotlin.isType(tmp$ = document.createElement('article'), HTMLElement) ? tmp$ : Kotlin.throwCCE();
      var tmp$_15, tmp$_16;
      $receiver.className = 'FRAME';
      (tmp$_15 = document.body) != null ? tmp$_15.appendChild($receiver) : null;
      mainFrame = $receiver;
      (tmp$_16 = mainFrame != null ? mainFrame.style : null) != null ? (tmp$_16.visibility = 'hidden') : null;
      tmp$_14 = $receiver;
    }
     else if (Kotlin.equals(type, LightType$CONTAINER_getInstance())) {
      var $receiver_0 = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : Kotlin.throwCCE();
      $receiver_0.className = 'CONTAINER';
      tmp$_14 = $receiver_0;
    }
     else if (Kotlin.equals(type, LightType$SCROLL_PANE_getInstance())) {
      var $receiver_1 = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLElement) ? tmp$_1 : Kotlin.throwCCE();
      $receiver_1.className = 'SCROLL_PANE';
      tmp$_14 = $receiver_1;
    }
     else if (Kotlin.equals(type, LightType$BUTTON_getInstance())) {
      var $receiver_2 = Kotlin.isType(tmp$_2 = document.createElement('input'), HTMLInputElement) ? tmp$_2 : Kotlin.throwCCE();
      $receiver_2.className = 'BUTTON';
      $receiver_2.type = 'button';
      tmp$_14 = $receiver_2;
    }
     else if (Kotlin.equals(type, LightType$PROGRESS_getInstance())) {
      var $receiver_3 = Kotlin.isType(tmp$_3 = document.createElement('progress'), HTMLElement) ? tmp$_3 : Kotlin.throwCCE();
      $receiver_3.className = 'PROGRESS';
      tmp$_14 = $receiver_3;
    }
     else if (Kotlin.equals(type, LightType$IMAGE_getInstance())) {
      var $receiver_4 = (tmp$_5 = Kotlin.isType(tmp$_4 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_4 : Kotlin.throwCCE()) != null ? tmp$_5 : Kotlin.throwNPE();
      $receiver_4.className = 'IMAGE';
      $receiver_4.style.imageRendering = 'pixelated';
      tmp$_14 = $receiver_4;
    }
     else if (Kotlin.equals(type, LightType$LABEL_getInstance())) {
      var $receiver_5 = Kotlin.isType(tmp$_6 = document.createElement('label'), HTMLElement) ? tmp$_6 : Kotlin.throwCCE();
      $receiver_5.className = 'LABEL';
      tmp$_14 = $receiver_5;
    }
     else if (Kotlin.equals(type, LightType$TEXT_FIELD_getInstance())) {
      var $receiver_6 = (tmp$_8 = Kotlin.isType(tmp$_7 = document.createElement('input'), HTMLInputElement) ? tmp$_7 : Kotlin.throwCCE()) != null ? tmp$_8 : Kotlin.throwNPE();
      $receiver_6.className = 'TEXT_FIELD';
      $receiver_6.type = 'text';
      tmp$_14 = $receiver_6;
    }
     else if (Kotlin.equals(type, LightType$TEXT_AREA_getInstance())) {
      var $receiver_7 = Kotlin.isType(tmp$_9 = document.createElement('textarea'), HTMLElement) ? tmp$_9 : Kotlin.throwCCE();
      $receiver_7.className = 'TEXT_AREA';
      tmp$_14 = $receiver_7;
    }
     else if (Kotlin.equals(type, LightType$CHECK_BOX_getInstance())) {
      var $receiver_8 = Kotlin.isType(tmp$_10 = document.createElement('label'), HTMLElement) ? tmp$_10 : Kotlin.throwCCE();
      var tmp$_17, tmp$_18;
      $receiver_8.className = 'CHECK_BOX';
      $receiver_8['data-type'] = 'checkbox';
      var input = Kotlin.isType(tmp$_17 = document.createElement('input'), HTMLInputElement) ? tmp$_17 : Kotlin.throwCCE();
      input.className = 'TEXT_FIELD';
      input.type = 'checkbox';
      $receiver_8.appendChild(input);
      $receiver_8.appendChild((tmp$_18 = document.createElement('span')) != null ? tmp$_18 : Kotlin.throwNPE());
      tmp$_14 = $receiver_8;
    }
     else if (Kotlin.equals(type, LightType$AGCANVAS_getInstance())) {
      agg.v = korag.agFactory.create();
      tmp$_14 = Kotlin.isType(tmp$_12 = (tmp$_11 = agg.v) != null ? tmp$_11.nativeComponent : null, HTMLCanvasElement) ? tmp$_12 : Kotlin.throwCCE();
    }
     else {
      var $receiver_9 = Kotlin.isType(tmp$_13 = document.createElement('div'), HTMLElement) ? tmp$_13 : Kotlin.throwCCE();
      $receiver_9.className = 'UNKNOWN';
      tmp$_14 = $receiver_9;
    }
    var handle = tmp$_14;
    var tmp$_19;
    var style = handle.style;
    style.position = 'absolute';
    if (Kotlin.equals(type, LightType$SCROLL_PANE_getInstance()) || Kotlin.equals(type, LightType$TEXT_AREA_getInstance()) || Kotlin.equals(type, LightType$TEXT_FIELD_getInstance()))
      tmp$_19 = true;
    else
      tmp$_19 = false;
    var overflow = tmp$_19;
    style.overflowY = overflow ? 'auto' : 'hidden';
    style.overflowX = overflow ? 'auto' : 'hidden';
    style.left = '0px';
    style.top = '0px';
    style.width = '100px';
    style.height = '100px';
    var $receiver_10 = new LightComponents$LightComponentInfo(handle);
    if (agg.v != null)
      set_ag($receiver_10, agg.v);
    return $receiver_10;
  };
  HtmlLightComponents.prototype.setParent_hfmcy5$ = function (c, parent) {
    var tmp$, tmp$_0, tmp$_1;
    var child = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : Kotlin.throwCCE();
    (tmp$_0 = child.parentNode) != null ? tmp$_0.removeChild(child) : null;
    if (parent != null) {
      (Kotlin.isType(tmp$_1 = parent, HTMLElement) ? tmp$_1 : Kotlin.throwCCE()).appendChild(child);
    }
  };
  function HtmlLightComponents$addCloseableEventListener$lambda(this$addCloseableEventListener, closure$name, closure$func) {
    return function () {
      this$addCloseableEventListener.removeEventListener(closure$name, closure$func);
      return Unit;
    };
  }
  HtmlLightComponents.prototype.addCloseableEventListener_0 = function ($receiver, name, func) {
    $receiver.addEventListener(name, func);
    return Closeable(HtmlLightComponents$addCloseableEventListener$lambda($receiver, name, func));
  };
  function HtmlLightComponents$addHandler$process(closure$info, this$HtmlLightComponents) {
    return function (e, buttons) {
      var $receiver = closure$info;
      var this$HtmlLightComponents_0 = this$HtmlLightComponents;
      $receiver.x = (e.offsetX | 0) * this$HtmlLightComponents_0.devicePixelRatio | 0;
      $receiver.y = (e.offsetY | 0) * this$HtmlLightComponents_0.devicePixelRatio | 0;
      $receiver.buttons = buttons;
      return $receiver;
    };
  }
  function HtmlLightComponents$addHandler$lambda(closure$listener, closure$process, this$HtmlLightComponents) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_0 = Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      tmp$_1 = closure$process(tmp$_0, 1);
      this$HtmlLightComponents.click2_oi3x8t$(closure$listener, tmp$_1);
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_0(closure$listener, closure$process, this$HtmlLightComponents) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_0 = Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      tmp$_1 = closure$process(tmp$_0, 0);
      this$HtmlLightComponents.over2_oi3x8t$(closure$listener, tmp$_1);
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_1(closure$listener, closure$process, this$HtmlLightComponents) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_0 = Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      tmp$_1 = closure$process(tmp$_0, 0);
      this$HtmlLightComponents.over2_oi3x8t$(closure$listener, tmp$_1);
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_2(closure$listener, closure$process, this$HtmlLightComponents) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_0 = Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      tmp$_1 = closure$process(tmp$_0, 0);
      this$HtmlLightComponents.up2_oi3x8t$(closure$listener, tmp$_1);
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_3(closure$listener, closure$process, this$HtmlLightComponents) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_0 = Kotlin.isType(tmp$ = it, MouseEvent) ? tmp$ : Kotlin.throwCCE();
      tmp$_1 = closure$process(tmp$_0, 0);
      this$HtmlLightComponents.down2_oi3x8t$(closure$listener, tmp$_1);
      return Unit;
    };
  }
  HtmlLightComponents.prototype.addHandler_kxnioe$ = function (c, listener) {
    var tmp$;
    var node = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : Kotlin.throwCCE();
    var info = new LightMouseHandler$Info();
    var process = HtmlLightComponents$addHandler$process(info, this);
    return closeable(listOf([this.addCloseableEventListener_0(node, 'click', HtmlLightComponents$addHandler$lambda(listener, process, this)), this.addCloseableEventListener_0(node, 'mouseover', HtmlLightComponents$addHandler$lambda_0(listener, process, this)), this.addCloseableEventListener_0(node, 'mousemove', HtmlLightComponents$addHandler$lambda_1(listener, process, this)), this.addCloseableEventListener_0(node, 'mouseup', HtmlLightComponents$addHandler$lambda_2(listener, process, this)), this.addCloseableEventListener_0(node, 'mousedown', HtmlLightComponents$addHandler$lambda_3(listener, process, this))]));
  };
  function HtmlLightComponents$addHandler$lambda_4(closure$listener, closure$info, this$HtmlLightComponents) {
    return function (it) {
      this$HtmlLightComponents.changed2_rf5cof$(closure$listener, closure$info);
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_5(closure$listener, closure$info, this$HtmlLightComponents) {
    return function (it) {
      this$HtmlLightComponents.changed2_rf5cof$(closure$listener, closure$info);
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_6(closure$listener, closure$info, this$HtmlLightComponents) {
    return function (it) {
      this$HtmlLightComponents.changed2_rf5cof$(closure$listener, closure$info);
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_7(closure$listener, closure$info, this$HtmlLightComponents) {
    return function (it) {
      this$HtmlLightComponents.changed2_rf5cof$(closure$listener, closure$info);
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_8(closure$listener, closure$info, this$HtmlLightComponents) {
    return function (it) {
      this$HtmlLightComponents.changed2_rf5cof$(closure$listener, closure$info);
      return Unit;
    };
  }
  HtmlLightComponents.prototype.addHandler_8fo827$ = function (c, listener) {
    var tmp$;
    var node = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : Kotlin.throwCCE();
    var info = new LightChangeHandler$Info();
    return closeable(listOf([this.addCloseableEventListener_0(node, 'change', HtmlLightComponents$addHandler$lambda_4(listener, info, this)), this.addCloseableEventListener_0(node, 'keypress', HtmlLightComponents$addHandler$lambda_5(listener, info, this)), this.addCloseableEventListener_0(node, 'input', HtmlLightComponents$addHandler$lambda_6(listener, info, this)), this.addCloseableEventListener_0(node, 'textInput', HtmlLightComponents$addHandler$lambda_7(listener, info, this)), this.addCloseableEventListener_0(node, 'paste', HtmlLightComponents$addHandler$lambda_8(listener, info, this))]));
  };
  function HtmlLightComponents$addHandler$send(closure$listener, closure$info, this$HtmlLightComponents) {
    return function () {
      var tmp$, tmp$_0;
      if (mainFrame != null) {
        (tmp$ = mainFrame != null ? mainFrame.style : null) != null ? (tmp$.width = window.innerWidth.toString() + 'px') : null;
        (tmp$_0 = mainFrame != null ? mainFrame.style : null) != null ? (tmp$_0.height = window.innerHeight.toString() + 'px') : null;
      }
      var tmp$_1 = this$HtmlLightComponents;
      var tmp$_2 = closure$listener;
      var $receiver = closure$info;
      $receiver.width = window.innerWidth;
      $receiver.height = window.innerHeight;
      tmp$_1.resized2_hogl87$(tmp$_2, $receiver);
    };
  }
  function HtmlLightComponents$addHandler$lambda_9(closure$send) {
    return function (it) {
      closure$send();
      return Unit;
    };
  }
  HtmlLightComponents.prototype.addHandler_x9u3zh$ = function (c, listener) {
    var node = window;
    var info = new LightResizeHandler$Info();
    var send = HtmlLightComponents$addHandler$send(listener, info, this);
    send();
    return closeable(listOf_0(this.addCloseableEventListener_0(node, 'resize', HtmlLightComponents$addHandler$lambda_9(send))));
  };
  function HtmlLightComponents$addHandler$process_0(closure$info) {
    return function (e) {
      var $receiver = closure$info;
      $receiver.keyCode = e.keyCode;
      return $receiver;
    };
  }
  function HtmlLightComponents$addHandler$lambda_10(closure$listener, closure$process, this$HtmlLightComponents) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_0 = Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : Kotlin.throwCCE();
      tmp$_1 = closure$process(tmp$_0);
      this$HtmlLightComponents.down2_fo2i4t$(closure$listener, tmp$_1);
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_11(closure$listener, closure$process, this$HtmlLightComponents) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_0 = Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : Kotlin.throwCCE();
      tmp$_1 = closure$process(tmp$_0);
      this$HtmlLightComponents.up2_fo2i4t$(closure$listener, tmp$_1);
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_12(closure$listener, closure$process, this$HtmlLightComponents) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      tmp$_0 = Kotlin.isType(tmp$ = it, KeyboardEvent) ? tmp$ : Kotlin.throwCCE();
      tmp$_1 = closure$process(tmp$_0);
      this$HtmlLightComponents.typed2_fo2i4t$(closure$listener, tmp$_1);
      return Unit;
    };
  }
  HtmlLightComponents.prototype.addHandler_fho2ac$ = function (c, listener) {
    var tmp$;
    var node = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : Kotlin.throwCCE();
    var info = new LightKeyHandler$Info();
    var process = HtmlLightComponents$addHandler$process_0(info);
    return closeable(listOf([this.addCloseableEventListener_0(node, 'keydown', HtmlLightComponents$addHandler$lambda_10(listener, process, this)), this.addCloseableEventListener_0(node, 'keyup', HtmlLightComponents$addHandler$lambda_11(listener, process, this)), this.addCloseableEventListener_0(node, 'keypress', HtmlLightComponents$addHandler$lambda_12(listener, process, this))]));
  };
  HtmlLightComponents.prototype.addHandler_bq7i26$ = function (c, listener) {
    return LightComponents.prototype.addHandler_bq7i26$.call(this, c, listener);
  };
  function HtmlLightComponents$addHandler$process_1(this$HtmlLightComponents) {
    return function (e, preventDefault) {
      var tmp$;
      var out = ArrayList_init();
      var touches = e.changedTouches;
      tmp$ = touches.length.toInt();
      for (var n = 0; n < tmp$; n++) {
        var touch = touches[n];
        var $receiver = new LightTouchHandler$Info();
        var this$HtmlLightComponents_0 = this$HtmlLightComponents;
        $receiver.x = touch.pageX * this$HtmlLightComponents_0.devicePixelRatio;
        $receiver.y = touch.pageY * this$HtmlLightComponents_0.devicePixelRatio;
        $receiver.id = touch.identifier;
        out.add_11rb$($receiver);
      }
      if (preventDefault)
        e.preventDefault();
      return out;
    };
  }
  function HtmlLightComponents$addHandler$lambda_13(closure$process, closure$listener, this$HtmlLightComponents) {
    return function (it) {
      var tmp$;
      tmp$ = closure$process(it, false).iterator();
      while (tmp$.hasNext()) {
        var info = tmp$.next();
        this$HtmlLightComponents.start2_dtsyb7$(closure$listener, info);
      }
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_14(closure$process, closure$listener, this$HtmlLightComponents) {
    return function (it) {
      var tmp$;
      tmp$ = closure$process(it, false).iterator();
      while (tmp$.hasNext()) {
        var info = tmp$.next();
        this$HtmlLightComponents.end2_dtsyb7$(closure$listener, info);
      }
      return Unit;
    };
  }
  function HtmlLightComponents$addHandler$lambda_15(closure$process, closure$listener, this$HtmlLightComponents) {
    return function (it) {
      var tmp$;
      tmp$ = closure$process(it, true).iterator();
      while (tmp$.hasNext()) {
        var info = tmp$.next();
        this$HtmlLightComponents.move2_dtsyb7$(closure$listener, info);
      }
      return Unit;
    };
  }
  HtmlLightComponents.prototype.addHandler_wddoqc$ = function (c, listener) {
    var tmp$;
    var node = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : Kotlin.throwCCE();
    var process = HtmlLightComponents$addHandler$process_1(this);
    return closeable(listOf([this.addCloseableEventListener_0(node, 'touchstart', HtmlLightComponents$addHandler$lambda_13(process, listener, this)), this.addCloseableEventListener_0(node, 'touchend', HtmlLightComponents$addHandler$lambda_14(process, listener, this)), this.addCloseableEventListener_0(node, 'touchmove', HtmlLightComponents$addHandler$lambda_15(process, listener, this))]));
  };
  HtmlLightComponents.prototype.callAction_rg4qv$ = function (c, key, param) {
    if (Kotlin.equals(key, LightAction$Companion_getInstance().FOCUS)) {
      var child = c;
      child.focus();
    }
  };
  HtmlLightComponents.prototype.setProperty_qiitpl$ = function (c, key, value) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    var child = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : Kotlin.throwCCE();
    var childOrDocumentBody = Kotlin.equals(child.nodeName.toLowerCase(), 'article') ? document.body : child;
    var nodeName = child.nodeName.toLowerCase();
    if (Kotlin.equals(key, LightProperty$Companion_getInstance().TEXT)) {
      var v = key.get_s8jyv4$(value);
      if (Kotlin.equals(nodeName, 'article')) {
        document.title = v;
      }
       else if (Kotlin.equals(nodeName, 'input') || Kotlin.equals(nodeName, 'textarea')) {
        (Kotlin.isType(tmp$_0 = child, HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE()).value = v;
      }
       else {
        if (child['data-type'] == 'checkbox') {
          (tmp$_2 = Kotlin.isType(tmp$_1 = child.querySelector('span'), HTMLSpanElement) ? tmp$_1 : Kotlin.throwCCE()) != null ? (tmp$_2.innerText = v) : null;
        }
         else {
          child.innerText = v;
        }
      }
    }
     else if (Kotlin.equals(key, LightProperty$Companion_getInstance().PROGRESS_CURRENT)) {
      var v_0 = key.get_s8jyv4$(value);
      (Kotlin.isType(tmp$_3 = child, HTMLInputElement) ? tmp$_3 : Kotlin.throwCCE()).value = v_0.toString();
    }
     else if (Kotlin.equals(key, LightProperty$Companion_getInstance().PROGRESS_MAX)) {
      var v_1 = key.get_s8jyv4$(value);
      (Kotlin.isType(tmp$_4 = child, HTMLInputElement) ? tmp$_4 : Kotlin.throwCCE()).max = v_1.toString();
    }
     else if (Kotlin.equals(key, LightProperty$Companion_getInstance().BGCOLOR)) {
      var v_2 = key.get_s8jyv4$(value);
      (tmp$_5 = childOrDocumentBody != null ? childOrDocumentBody.style : null) != null ? (tmp$_5.background = this.colorString_za3lpa$(v_2)) : null;
    }
     else if (Kotlin.equals(key, LightProperty$Companion_getInstance().IMAGE_SMOOTH)) {
      var v_3 = key.get_s8jyv4$(value);
      child.style.imageRendering = v_3 ? 'auto' : 'pixelated';
    }
     else if (Kotlin.equals(key, LightProperty$Companion_getInstance().ICON)) {
      var v_4 = key.get_s8jyv4$(value);
      if (v_4 != null) {
        var href = format.HtmlImage.htmlCanvasToDataUrl_ap7jt0$(format.HtmlImage.bitmapToHtmlCanvas_59u9qz$(v_4.toBMP32()));
        var link = (tmp$_6 = document.querySelector("link[rel*='icon']")) == null || Kotlin.isType(tmp$_6, HTMLLinkElement) ? tmp$_6 : null;
        if (link == null) {
          link = Kotlin.isType(tmp$_7 = document.createElement('link'), HTMLLinkElement) ? tmp$_7 : Kotlin.throwCCE();
        }
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        (tmp$_8 = document.getElementsByTagName('head')[0]) != null ? tmp$_8.appendChild(link) : null;
      }
    }
     else if (Kotlin.equals(key, LightProperty$Companion_getInstance().IMAGE)) {
      var bmp = key.get_s8jyv4$(value);
      if (Kotlin.isType(bmp, CanvasNativeImage)) {
        this.setCanvas_0(c, bmp.canvas);
      }
       else {
        this.setImage32_0(c, bmp != null ? bmp.toBMP32() : null);
      }
    }
     else if (Kotlin.equals(key, LightProperty$Companion_getInstance().VISIBLE)) {
      var v_5 = key.get_s8jyv4$(value);
      if (child != null)
        child.style.display = v_5 ? 'block' : 'none';
    }
     else if (Kotlin.equals(key, LightProperty$Companion_getInstance().CHECKED)) {
      var v_6 = key.get_s8jyv4$(value);
      (Kotlin.isType(tmp$_9 = child.querySelector('input[type=checkbox]'), HTMLInputElement) ? tmp$_9 : Kotlin.throwCCE()).checked = v_6;
    }
  };
  HtmlLightComponents.prototype.getProperty_jku6jz$ = function (c, key) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var child = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : Kotlin.throwCCE();
    if (Kotlin.equals(key, LightProperty$Companion_getInstance().TEXT))
      return (tmp$_1 = (Kotlin.isType(tmp$_0 = child, HTMLInputElement) ? tmp$_0 : Kotlin.throwCCE()).value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    else if (Kotlin.equals(key, LightProperty$Companion_getInstance().CHECKED)) {
      var input = (Kotlin.isType(tmp$_2 = child, HTMLInputElement) ? tmp$_2 : Kotlin.throwCCE()).querySelector('input[type=checkbox]');
      var checked = input.checked;
      return (tmp$_3 = checked) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : Kotlin.throwCCE();
    }
    return LightComponents.prototype.getProperty_jku6jz$.call(this, c, key);
  };
  HtmlLightComponents.prototype.colorString_za3lpa$ = function (c) {
    return 'RGBA(' + color.RGBA.getR_za3lpa$(c) + ',' + color.RGBA.getG_za3lpa$(c) + ',' + color.RGBA.getB_za3lpa$(c) + ',' + color.RGBA.getAf_za3lpa$(c) + ')';
  };
  HtmlLightComponents.prototype.setCanvas_0 = function (c, bmp) {
    var tmp$, tmp$_0;
    var targetCanvas = Kotlin.isType(tmp$ = c, HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    if (bmp != null) {
      targetCanvas.width = bmp.width;
      targetCanvas.height = bmp.height;
      var ctx = Kotlin.isType(tmp$_0 = targetCanvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : Kotlin.throwCCE();
      format.HtmlImage.htmlCanvasClear_ap7jt0$(targetCanvas);
      ctx.drawImage(bmp, 0.0, 0.0);
    }
     else {
      format.HtmlImage.htmlCanvasClear_ap7jt0$(targetCanvas);
    }
  };
  HtmlLightComponents.prototype.setImage32_0 = function (c, bmp) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = c, HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    if (bmp != null) {
      format.HtmlImage.htmlCanvasSetSize_v0aytg$(canvas, bmp.width, bmp.height);
      format.HtmlImage.renderToHtmlCanvas_4jes5x$(bmp, canvas);
    }
     else {
      format.HtmlImage.htmlCanvasClear_ap7jt0$(canvas);
    }
  };
  HtmlLightComponents.prototype.setBounds_tiwvvj$ = function (c, x, y, width, height) {
    var tmp$;
    var child = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : Kotlin.throwCCE();
    var childStyle = child.style;
    childStyle.left = x.toString() + 'px';
    childStyle.top = y.toString() + 'px';
    childStyle.width = width.toString() + 'px';
    childStyle.height = height.toString() + 'px';
    if (Kotlin.isType(child, HTMLCanvasElement)) {
      child.width = width * this.devicePixelRatio | 0;
      child.height = height * this.devicePixelRatio | 0;
    }
  };
  HtmlLightComponents.prototype.repaint_za3rmp$ = function (c) {
    var tmp$;
    (tmp$ = mainFrame != null ? mainFrame.style : null) != null ? (tmp$.visibility = 'visible') : null;
  };
  function HtmlLightComponents$dialogAlert$lambda$lambda(closure$c) {
    return function () {
      closure$c.resume_11rb$(Unit);
      return Unit;
    };
  }
  function HtmlLightComponents$dialogAlert$lambda(closure$message) {
    return function (c) {
      window.alert(closure$message);
      window.setTimeout(HtmlLightComponents$dialogAlert$lambda$lambda(c), 0);
      return Unit;
    };
  }
  var toEventLoop = $module$korio_js.com.soywiz.korio.async.toEventLoop_5cx0c9$;
  function korioSuspendCoroutine$lambda(closure$block) {
    return function (c) {
      closure$block(toEventLoop(c));
      return Unit;
    };
  }
  function _korioSuspendCoroutine$lambda(closure$block) {
    return function (c) {
      closure$block(c);
      return Unit;
    };
  }
  var SafeContinuation_init = Kotlin.kotlin.coroutines.experimental.SafeContinuation_init_n4f53e$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  HtmlLightComponents.prototype.dialogAlert_hwpqgh$ = function (c, message, continuation) {
    return suspendCoroutine$lambda(_korioSuspendCoroutine$lambda(korioSuspendCoroutine$lambda(HtmlLightComponents$dialogAlert$lambda(message))))(continuation.facade);
  };
  function HtmlLightComponents$dialogPrompt$lambda$lambda(closure$result, closure$c) {
    return function () {
      if (closure$result == null) {
        closure$c.resumeWithException_tcv7n7$(new CancellationException('cancelled'));
      }
       else {
        closure$c.resume_11rb$(closure$result);
      }
      return Unit;
    };
  }
  function HtmlLightComponents$dialogPrompt$lambda(closure$message) {
    return function (c) {
      var result = window.prompt(closure$message);
      window.setTimeout(HtmlLightComponents$dialogPrompt$lambda$lambda(result, c), 0);
      return Unit;
    };
  }
  function korioSuspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      closure$block(toEventLoop(c));
      return Unit;
    };
  }
  function _korioSuspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      closure$block(c);
      return Unit;
    };
  }
  function suspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  HtmlLightComponents.prototype.dialogPrompt_hwpqgh$ = function (c, message, continuation) {
    return suspendCoroutine$lambda_0(_korioSuspendCoroutine$lambda_0(korioSuspendCoroutine$lambda_0(HtmlLightComponents$dialogPrompt$lambda(message))))(continuation.facade);
  };
  function HtmlLightComponents$dialogOpenFile$lambda$lambda(closure$completedOnce, closure$files, closure$continuation) {
    return function () {
      if (!closure$completedOnce.v) {
        closure$completedOnce.v = true;
        selectedFiles = closure$files.v;
        if (closure$files.v.length > 0) {
          var fileName = closure$files.v[0].name;
          closure$continuation.resume_11rb$(SelectedFilesVfs_getInstance().get_61zpoe$(fileName));
        }
         else {
          closure$continuation.resumeWithException_tcv7n7$(new CancellationException('cancel'));
        }
      }
      return Unit;
    };
  }
  function HtmlLightComponents$dialogOpenFile$lambda$lambda$lambda$lambda(closure$completed) {
    return function () {
      closure$completed();
      return Unit;
    };
  }
  function HtmlLightComponents$dialogOpenFile$lambda$lambda$lambda(closure$completed) {
    return function (it) {
      var tmp$;
      (tmp$ = document.body) != null ? (tmp$.onfocus = null) : null;
      return window.setTimeout(HtmlLightComponents$dialogOpenFile$lambda$lambda$lambda$lambda(closure$completed), 2000);
    };
  }
  function HtmlLightComponents$dialogOpenFile$lambda$lambda_0(closure$completed) {
    return function (it) {
      var tmp$;
      (tmp$ = document.body) != null ? (tmp$.onfocus = HtmlLightComponents$dialogOpenFile$lambda$lambda$lambda(closure$completed)) : null;
      return Unit;
    };
  }
  function HtmlLightComponents$dialogOpenFile$lambda$lambda_1(closure$files, closure$completed) {
    return function (e) {
      closure$files.v = (e != null ? e.target : null)['files'];
      closure$completed();
      return Unit;
    };
  }
  function HtmlLightComponents$dialogOpenFile$lambda(continuation) {
    var inputFile = windowInputFile;
    var completedOnce = {v: false};
    var files = {v: []};
    var completed = HtmlLightComponents$dialogOpenFile$lambda$lambda(completedOnce, files, continuation);
    windowInputFile != null ? (windowInputFile.value = '') : null;
    windowInputFile != null ? (windowInputFile.onclick = HtmlLightComponents$dialogOpenFile$lambda$lambda_0(completed)) : null;
    windowInputFile != null ? (windowInputFile.onchange = HtmlLightComponents$dialogOpenFile$lambda$lambda_1(files, completed)) : null;
    inputFile != null ? (inputFile.click(), Unit) : null;
    return Unit;
  }
  function korioSuspendCoroutine$lambda_1(closure$block) {
    return function (c) {
      closure$block(toEventLoop(c));
      return Unit;
    };
  }
  function _korioSuspendCoroutine$lambda_1(closure$block) {
    return function (c) {
      closure$block(c);
      return Unit;
    };
  }
  function suspendCoroutine$lambda_1(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  HtmlLightComponents.prototype.dialogOpenFile_hwpqgh$ = function (c, filter, continuation) {
    return suspendCoroutine$lambda_1(_korioSuspendCoroutine$lambda_1(korioSuspendCoroutine$lambda_1(HtmlLightComponents$dialogOpenFile$lambda)))(continuation.facade);
  };
  HtmlLightComponents.prototype.openURL_61zpoe$ = function (url) {
    window.open(url, '_blank');
  };
  HtmlLightComponents.prototype.getDpi = function () {
    return (window.devicePixelRatio | 0) * 96 | 0;
  };
  HtmlLightComponents.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HtmlLightComponents',
    interfaces: [LightComponents]
  };
  function SelectedFilesVfs() {
    SelectedFilesVfs_instance = this;
    Vfs.call(this);
  }
  SelectedFilesVfs.prototype._locate_0 = function (name) {
    var tmp$;
    var length = selectedFiles.length;
    for (var n = 0; n < length; n++) {
      var file = selectedFiles[n];
      if (Kotlin.equals((tmp$ = file.name) != null ? tmp$ : Kotlin.throwNPE(), name)) {
        return file;
      }
    }
    return null;
  };
  SelectedFilesVfs.prototype.jsstat_0 = function (file) {
    var tmp$, tmp$_0;
    return new JsStat((tmp$_0 = (tmp$ = file != null ? file.size : null) != null ? tmp$ : null) != null ? tmp$_0 : 0.0);
  };
  SelectedFilesVfs.prototype.locate_0 = function (path) {
    return this._locate_0(trim(path, Kotlin.charArrayOf(47)));
  };
  function SelectedFilesVfs$open$ObjectLiteral(closure$jsfile, closure$jsstat) {
    this.closure$jsfile = closure$jsfile;
    this.closure$jsstat = closure$jsstat;
    AsyncStreamBase.call(this);
  }
  function SelectedFilesVfs$open$ObjectLiteral$_read$lambda$lambda(closure$reader, closure$c) {
    return function (it) {
      var tmp$;
      var result = closure$reader.result;
      var u8array = new Uint8Array(Kotlin.isType(tmp$ = result, Uint8Array) ? tmp$ : Kotlin.throwCCE());
      var out = new Int8Array(u8array.length);
      out.setArraySlice(0, u8array);
      closure$c.resume_11rb$(out);
      return Unit;
    };
  }
  function SelectedFilesVfs$open$ObjectLiteral$_read$lambda$lambda_0(closure$c) {
    return function (it) {
      closure$c.resumeWithException_tcv7n7$(new RuntimeException('error reading file'));
      return Unit;
    };
  }
  function SelectedFilesVfs$open$ObjectLiteral$_read$lambda(closure$jsfile, closure$position, closure$len) {
    return function (c) {
      var reader = new FileReader();
      var djsfile = closure$jsfile;
      var slice = djsfile.slice(closure$position, closure$position + closure$len);
      reader.onload = SelectedFilesVfs$open$ObjectLiteral$_read$lambda$lambda(reader, c);
      reader.onerror = SelectedFilesVfs$open$ObjectLiteral$_read$lambda$lambda_0(c);
      reader.readAsArrayBuffer(slice);
      return Unit;
    };
  }
  function korioSuspendCoroutine$lambda_2(closure$block) {
    return function (c) {
      closure$block(toEventLoop(c));
      return Unit;
    };
  }
  function _korioSuspendCoroutine$lambda_2(closure$block) {
    return function (c) {
      closure$block(c);
      return Unit;
    };
  }
  function suspendCoroutine$lambda_2(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  SelectedFilesVfs$open$ObjectLiteral.prototype._read_m1j1tk$ = function (jsfile, position, len, continuation) {
    return suspendCoroutine$lambda_2(_korioSuspendCoroutine$lambda_2(korioSuspendCoroutine$lambda_2(SelectedFilesVfs$open$ObjectLiteral$_read$lambda(jsfile, position, len))))(continuation.facade);
  };
  SelectedFilesVfs$open$ObjectLiteral.prototype.read_4m9kcn$ = function (position_0, buffer_0, offset_0, len_0, continuation_0, suspended) {
    var instance = new Coroutine$read_4m9kcn$(this, position_0, buffer_0, offset_0, len_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$read_4m9kcn$($this, position_0, buffer_0, offset_0, len_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = void 0;
    this.local$position = position_0;
    this.local$buffer = buffer_0;
    this.local$offset = offset_0;
    this.local$len = len_0;
  }
  Coroutine$read_4m9kcn$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_4m9kcn$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_4m9kcn$.prototype.constructor = Coroutine$read_4m9kcn$;
  Coroutine$read_4m9kcn$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this._read_m1j1tk$(this.$this.closure$jsfile, this.local$position.toNumber(), this.local$len, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$data = this.result_0;
            copyRangeTo(this.local$data, 0, this.local$buffer, this.local$offset, this.local$data.length);
            return this.local$data.length;
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
  SelectedFilesVfs$open$ObjectLiteral.prototype.getLength = function (continuation) {
    return Kotlin.Long.fromNumber(this.closure$jsstat.size);
  };
  SelectedFilesVfs$open$ObjectLiteral.prototype.close = function (continuation) {
    return Unit;
  };
  SelectedFilesVfs$open$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [AsyncStreamBase]
  };
  SelectedFilesVfs.prototype.open_j4ip3x$ = function (path_0, mode_0, continuation_0, suspended) {
    var instance = new Coroutine$open_j4ip3x$(this, path_0, mode_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$open_j4ip3x$($this, path_0, mode_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$jsfile = void 0;
    this.local$jsstat = void 0;
    this.local$path = path_0;
    this.local$mode = mode_0;
  }
  Coroutine$open_j4ip3x$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$open_j4ip3x$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$open_j4ip3x$.prototype.constructor = Coroutine$open_j4ip3x$;
  Coroutine$open_j4ip3x$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.locate_0(this.local$path);
            if (this.local$tmp$ == null) {
              throw new FileNotFoundException(this.local$path);
            }

            this.local$jsfile = this.local$tmp$;
            this.local$jsstat = this.$this.jsstat_0(this.local$jsfile);
            return toAsyncStream(new SelectedFilesVfs$open$ObjectLiteral(this.local$jsfile, this.local$jsstat));
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
  SelectedFilesVfs.prototype.stat_61zpoe$ = function (path, continuation) {
    return this.jsstat_0(this.locate_0(path)).toStat_y39hoq$(path, this);
  };
  SelectedFilesVfs.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SelectedFilesVfs',
    interfaces: [Vfs]
  };
  var SelectedFilesVfs_instance = null;
  function SelectedFilesVfs_getInstance() {
    if (SelectedFilesVfs_instance === null) {
      new SelectedFilesVfs();
    }
    return SelectedFilesVfs_instance;
  }
  function JsStat(size, isDirectory) {
    if (isDirectory === void 0)
      isDirectory = false;
    this.size = size;
    this.isDirectory = isDirectory;
  }
  JsStat.prototype.toStat_y39hoq$ = function (path, vfs) {
    return vfs.createExistsStat_sjl0ub$(path, this.isDirectory, Kotlin.Long.fromNumber(this.size));
  };
  JsStat.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JsStat',
    interfaces: []
  };
  JsStat.prototype.component1 = function () {
    return this.size;
  };
  JsStat.prototype.component2 = function () {
    return this.isDirectory;
  };
  JsStat.prototype.copy_8555vt$ = function (size, isDirectory) {
    return new JsStat(size === void 0 ? this.size : size, isDirectory === void 0 ? this.isDirectory : isDirectory);
  };
  JsStat.prototype.toString = function () {
    return 'JsStat(size=' + Kotlin.toString(this.size) + (', isDirectory=' + Kotlin.toString(this.isDirectory)) + ')';
  };
  JsStat.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.isDirectory) | 0;
    return result;
  };
  JsStat.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.size, other.size) && Kotlin.equals(this.isDirectory, other.isDirectory)))));
  };
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korui = package$soywiz.korui || (package$soywiz.korui = {});
  package$korui.Application_8y393m$ = Application;
  package$korui.Application = Application_0;
  package$korui.frame_ag1eqq$ = frame;
  package$korui.CanvasApplication_4lq8kv$ = CanvasApplication;
  package$korui.Screen = Screen;
  Length.Fixed = Length$Fixed;
  Length.Variable = Length$Variable;
  $$importsForInline$$['korui-js'] = _;
  Length.Context = Length$Context;
  Length.MM = Length$MM;
  Length.CM = Length$CM;
  Length.INCH = Length$INCH;
  Length.PT = Length$PT;
  Length.EM = Length$EM;
  Length.VW = Length$VW;
  Length.VH = Length$VH;
  Length.VMIN = Length$VMIN;
  Length.VMAX = Length$VMAX;
  Length.Ratio = Length$Ratio;
  Length.Binop = Length$Binop;
  Length.Scale = Length$Scale;
  Object.defineProperty(Length, 'Companion', {
    get: Length$Companion_getInstance
  });
  var package$geom = package$korui.geom || (package$korui.geom = {});
  var package$len = package$geom.len || (package$geom.len = {});
  package$len.Length = Length;
  Object.defineProperty(package$len, 'MathEx', {
    get: MathEx_getInstance
  });
  package$len.calcMin_mwrzxb$ = calcMin;
  package$len.calcMax_mwrzxb$ = calcMax;
  package$len.times_47obj3$ = times;
  package$len.setNewTo_41jvel$ = setNewTo;
  package$len.setNewBoundsTo_41jvel$ = setNewBoundsTo;
  package$len.get_mm_s8ev3n$ = get_mm;
  package$len.get_cm_s8ev3n$ = get_cm;
  package$len.get_inch_s8ev3n$ = get_inch;
  package$len.get_pt_s8ev3n$ = get_pt;
  package$len.get_em_s8ev3n$ = get_em;
  package$len.get_vw_s8ev3n$ = get_vw;
  package$len.get_vh_s8ev3n$ = get_vh;
  package$len.get_vmin_s8ev3n$ = get_vmin;
  package$len.get_vmax_s8ev3n$ = get_vmax;
  package$len.get_percent_s8ev3n$ = get_percent;
  package$len.get_mm_yrwdxr$ = get_mm_0;
  package$len.get_cm_yrwdxr$ = get_cm_0;
  package$len.get_inch_yrwdxr$ = get_inch_0;
  package$len.get_pt_yrwdxr$ = get_pt_0;
  package$len.get_em_yrwdxr$ = get_em_0;
  package$len.get_vw_yrwdxr$ = get_vw_0;
  package$len.get_vh_yrwdxr$ = get_vh_0;
  package$len.get_vmin_yrwdxr$ = get_vmin_0;
  package$len.get_vmax_yrwdxr$ = get_vmax_0;
  package$len.get_percent_yrwdxr$ = get_percent_0;
  package$len.get_ratio_yrwdxr$ = get_ratio;
  package$len.Padding_init_6fmdh0$ = Padding_init;
  package$len.Padding_init_m4d4ts$ = Padding_init_0;
  package$len.Padding_init = Padding_init_1;
  package$len.Padding = Padding;
  package$len.Position = Position;
  package$len.Size = Size;
  var package$light = package$korui.light || (package$korui.light = {});
  package$light.LightComponentsFactory = LightComponentsFactory;
  LightComponents.LightComponentInfo = LightComponents$LightComponentInfo;
  package$light.LightComponents = LightComponents;
  LightChangeHandler.Info = LightChangeHandler$Info;
  package$light.LightChangeHandler = LightChangeHandler;
  LightResizeHandler.Info = LightResizeHandler$Info;
  package$light.LightResizeHandler = LightResizeHandler;
  LightMouseHandler.Info = LightMouseHandler$Info;
  package$light.LightMouseHandler = LightMouseHandler;
  LightKeyHandler.Info = LightKeyHandler$Info;
  package$light.LightKeyHandler = LightKeyHandler;
  LightGamepadHandler.Info = LightGamepadHandler$Info;
  package$light.LightGamepadHandler = LightGamepadHandler;
  LightTouchHandler.Info = LightTouchHandler$Info;
  package$light.LightTouchHandler = LightTouchHandler;
  Object.defineProperty(package$light, 'defaultLightFactory', {
    get: get_defaultLightFactory
  });
  Object.defineProperty(package$light, 'defaultLight', {
    get: get_defaultLight
  });
  Object.defineProperty(LightType, 'FRAME', {
    get: LightType$FRAME_getInstance
  });
  Object.defineProperty(LightType, 'CONTAINER', {
    get: LightType$CONTAINER_getInstance
  });
  Object.defineProperty(LightType, 'BUTTON', {
    get: LightType$BUTTON_getInstance
  });
  Object.defineProperty(LightType, 'PROGRESS', {
    get: LightType$PROGRESS_getInstance
  });
  Object.defineProperty(LightType, 'IMAGE', {
    get: LightType$IMAGE_getInstance
  });
  Object.defineProperty(LightType, 'LABEL', {
    get: LightType$LABEL_getInstance
  });
  Object.defineProperty(LightType, 'TEXT_FIELD', {
    get: LightType$TEXT_FIELD_getInstance
  });
  Object.defineProperty(LightType, 'TEXT_AREA', {
    get: LightType$TEXT_AREA_getInstance
  });
  Object.defineProperty(LightType, 'CHECK_BOX', {
    get: LightType$CHECK_BOX_getInstance
  });
  Object.defineProperty(LightType, 'SCROLL_PANE', {
    get: LightType$SCROLL_PANE_getInstance
  });
  Object.defineProperty(LightType, 'AGCANVAS', {
    get: LightType$AGCANVAS_getInstance
  });
  package$light.LightType = LightType;
  Object.defineProperty(LightAction, 'Companion', {
    get: LightAction$Companion_getInstance
  });
  package$light.LightAction = LightAction;
  Object.defineProperty(LightProperty, 'Companion', {
    get: LightProperty$Companion_getInstance
  });
  package$light.LightProperty = LightProperty;
  $$importsForInline$$['korio-js'] = $module$korio_js;
  package$light.get_ag_tl6g5e$ = get_ag;
  package$light.set_ag_gdt3dl$ = set_ag;
  var package$log = package$light.log || (package$light.log = {});
  package$log.LogLightComponents = LogLightComponents;
  var package$style = package$korui.style || (package$korui.style = {});
  package$style.Style = Style;
  package$style.Style_6j6aij$ = Style_0;
  package$style.get_classStyle_qy9zrx$ = get_classStyle;
  package$style.set_classStyle_ln5ga8$ = set_classStyle;
  package$style.Styled = Styled;
  package$style.get_computedX_qy9zrx$ = get_computedX;
  package$style.get_computedY_qy9zrx$ = get_computedY;
  package$style.get_width_qy9zrx$ = get_width;
  package$style.set_width_5zxibx$ = set_width;
  package$style.get_height_qy9zrx$ = get_height;
  package$style.set_height_5zxibx$ = set_height;
  package$style.get_minWidth_qy9zrx$ = get_minWidth;
  package$style.set_minWidth_5zxibx$ = set_minWidth;
  package$style.get_minHeight_qy9zrx$ = get_minHeight;
  package$style.set_minHeight_5zxibx$ = set_minHeight;
  package$style.get_maxWidth_qy9zrx$ = get_maxWidth;
  package$style.set_maxWidth_5zxibx$ = set_maxWidth;
  package$style.get_maxHeight_qy9zrx$ = get_maxHeight;
  package$style.set_maxHeight_5zxibx$ = set_maxHeight;
  package$style.get_padding_qy9zrx$ = get_padding;
  package$style.set_padding_kd6zv9$ = set_padding;
  package$style.get_relativeTo_qy9zrx$ = get_relativeTo;
  package$style.set_relativeTo_w99ia1$ = set_relativeTo;
  package$style.get_top_qy9zrx$ = get_top;
  package$style.set_top_5zxibx$ = set_top;
  package$style.get_bottom_qy9zrx$ = get_bottom;
  package$style.set_bottom_5zxibx$ = set_bottom;
  package$style.get_left_qy9zrx$ = get_left;
  package$style.set_left_5zxibx$ = set_left;
  package$style.get_right_qy9zrx$ = get_right;
  package$style.set_right_5zxibx$ = set_right;
  package$style.get_computedPaddingTop_qy9zrx$ = get_computedPaddingTop;
  package$style.get_computedPaddingRight_qy9zrx$ = get_computedPaddingRight;
  package$style.get_computedPaddingBottom_qy9zrx$ = get_computedPaddingBottom;
  package$style.get_computedPaddingLeft_qy9zrx$ = get_computedPaddingLeft;
  package$style.get_computedPaddingLeftPlusRight_qy9zrx$ = get_computedPaddingLeftPlusRight;
  package$style.get_computedPaddingTopPlusBottom_qy9zrx$ = get_computedPaddingTopPlusBottom;
  package$style.get_computedWidth_qy9zrx$ = get_computedWidth;
  package$style.get_computedHeight_qy9zrx$ = get_computedHeight;
  package$style.get_computedDefaultWidth_qy9zrx$ = get_computedDefaultWidth;
  package$style.get_computedDefaultHeight_qy9zrx$ = get_computedDefaultHeight;
  package$style.get_computedMinWidth_qy9zrx$ = get_computedMinWidth;
  package$style.get_computedMinHeight_qy9zrx$ = get_computedMinHeight;
  package$style.get_computedMaxWidth_qy9zrx$ = get_computedMaxWidth;
  package$style.get_computedMaxHeight_qy9zrx$ = get_computedMaxHeight;
  package$style.get_computedRelativeTo_qy9zrx$ = get_computedRelativeTo;
  package$style.get_computedTop_qy9zrx$ = get_computedTop;
  package$style.get_computedBottom_qy9zrx$ = get_computedBottom;
  package$style.get_computedLeft_qy9zrx$ = get_computedLeft;
  package$style.get_computedRight_qy9zrx$ = get_computedRight;
  package$style.computedCalcWidth_stvupm$ = computedCalcWidth;
  package$style.computedCalcHeight_stvupm$ = computedCalcHeight;
  package$style.computedCalcSize_wltu7e$ = computedCalcSize;
  Component.lightProperty = Component$lightProperty;
  var package$ui = package$korui.ui || (package$korui.ui = {});
  package$ui.Component = Component;
  package$ui.Container = Container;
  package$ui.ScrollPane = ScrollPane;
  package$ui.Frame = Frame;
  package$ui.AgCanvas = AgCanvas;
  package$ui.Button = Button;
  package$ui.Label = Label;
  package$ui.TextField = TextField;
  package$ui.TextArea = TextArea;
  package$ui.CheckBox = CheckBox;
  package$ui.Progress = Progress;
  package$ui.Spacer = Spacer;
  package$ui.Image = Image;
  package$ui.setSize_bakply$ = setSize;
  package$ui.button_r7al8o$ = button;
  package$ui.agCanvas_r5smt6$ = agCanvas;
  package$ui.agCanvas_25j7gb$ = agCanvas_0;
  $$importsForInline$$['korma-js'] = $module$korma_js;
  package$ui.click_2hbmbi$ = click;
  package$ui.mouseOver_2hbmbi$ = mouseOver;
  package$ui.mouseEnter_2hbmbi$ = mouseEnter;
  package$ui.mouseExit_2hbmbi$ = mouseExit;
  package$ui.get_onMouseUp_y2fzii$ = get_onMouseUp;
  package$ui.get_onMouseDown_y2fzii$ = get_onMouseDown;
  package$ui.get_onMouseClick_y2fzii$ = get_onMouseClick;
  package$ui.get_onMouseOver_y2fzii$ = get_onMouseOver;
  package$ui.get_onMouseEnter_y2fzii$ = get_onMouseEnter;
  package$ui.get_onMouseExit_y2fzii$ = get_onMouseExit;
  package$ui.get_onKeyTyped_y2fzii$ = get_onKeyTyped;
  package$ui.get_onKeyDown_y2fzii$ = get_onKeyDown;
  package$ui.get_onKeyUp_y2fzii$ = get_onKeyUp;
  package$ui.get_onTouchStart_y2fzii$ = get_onTouchStart;
  package$ui.get_onTouchEnd_y2fzii$ = get_onTouchEnd;
  package$ui.get_onTouchMove_y2fzii$ = get_onTouchMove;
  package$ui.get_onGamepadDown_y2fzii$ = get_onGamepadDown;
  package$ui.get_onGamepadUp_y2fzii$ = get_onGamepadUp;
  package$ui.get_onChange_y2fzii$ = get_onChange;
  Object.defineProperty(Layout$ScaleMode2, 'NEVER', {
    get: Layout$ScaleMode2$NEVER_getInstance
  });
  Object.defineProperty(Layout$ScaleMode2, 'SHRINK', {
    get: Layout$ScaleMode2$SHRINK_getInstance
  });
  Object.defineProperty(Layout$ScaleMode2, 'ALWAYS', {
    get: Layout$ScaleMode2$ALWAYS_getInstance
  });
  Layout.ScaleMode2 = Layout$ScaleMode2;
  Layout.ResultBounds = Layout$ResultBounds;
  package$ui.Layout = Layout;
  package$ui.LayeredLayout = LayeredLayout;
  package$ui.LayeredKeepAspectLayout = LayeredKeepAspectLayout;
  package$ui.VerticalHorizontalLayout = VerticalHorizontalLayout;
  package$ui.VerticalLayout = VerticalLayout;
  package$ui.HorizontalLayout = HorizontalLayout;
  package$ui.ScrollPaneLayout = ScrollPaneLayout;
  package$ui.InlineLayout = InlineLayout;
  package$ui.RelativeLayout = RelativeLayout;
  package$ui.vectorImage_m1y6wl$ = vectorImage;
  package$ui.VectorImage = VectorImage;
  Object.defineProperty(package$korui, 'KoruiEventLoop', {
    get: KoruiEventLoop_getInstance
  });
  Object.defineProperty(package$light, 'NativeLightsComponentsFactory', {
    get: NativeLightsComponentsFactory_getInstance
  });
  Object.defineProperty(package$light, 'windowInputFile', {
    get: function () {
      return windowInputFile;
    },
    set: function (value) {
      windowInputFile = value;
    }
  });
  Object.defineProperty(package$light, 'selectedFiles', {
    get: function () {
      return selectedFiles;
    },
    set: function (value) {
      selectedFiles = value;
    }
  });
  Object.defineProperty(package$light, 'mainFrame', {
    get: function () {
      return mainFrame;
    },
    set: function (value) {
      mainFrame = value;
    }
  });
  package$light.HtmlLightComponents = HtmlLightComponents;
  Object.defineProperty(package$light, 'SelectedFilesVfs', {
    get: SelectedFilesVfs_getInstance
  });
  package$light.JsStat = JsStat;
  defaultLightFactory = lazy(defaultLightFactory$lambda);
  defaultLight = lazy(defaultLight$lambda);
  ag = new extraProperty('ag', null);
  mouseEventOnce = new Extra$Property(void 0, mouseEventOnce$lambda);
  keyEventOnce = new Extra$Property(void 0, keyEventOnce$lambda);
  touchEventOnce = new Extra$Property(void 0, touchEventOnce$lambda);
  gamepadEventOnce = new Extra$Property(void 0, gamepadEventOnce$lambda);
  changeEventOnce = new Extra$Property(void 0, changeEventOnce$lambda);
  onMouseUp = createMouseHandler();
  onMouseDown = createMouseHandler();
  onMouseClick = createMouseHandler();
  onMouseOver = createMouseHandler();
  onMouseEnter = createMouseHandler();
  onMouseExit = createMouseHandler();
  onKeyTyped = createKeyHandler();
  onKeyDown = createKeyHandler();
  onKeyUp = createKeyHandler();
  onTouchStart = createTouchHandler();
  onTouchEnd = createTouchHandler();
  onTouchMove = createTouchHandler();
  onGamepadDown = createGamepadHandler();
  onGamepadUp = createGamepadHandler();
  onChange = createChangeHandler();
  windowInputFile = null;
  selectedFiles = [];
  mainFrame = null;
  Kotlin.defineModule('korui-js', _);
  return _;
}));
