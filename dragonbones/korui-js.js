(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio-js', 'klogger-js', 'kds-js', 'korma-js', 'kmem-js', 'korim-js', 'korag-js', 'kotlinx-coroutines-core', 'korag-opengl-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio-js'), require('klogger-js'), require('kds-js'), require('korma-js'), require('kmem-js'), require('korim-js'), require('korag-js'), require('kotlinx-coroutines-core'), require('korag-opengl-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korui-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korui-js'.");
    }
    if (typeof this['klogger-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'klogger-js' was not found. Please, check whether 'klogger-js' is loaded prior to 'korui-js'.");
    }
    if (typeof this['kds-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'kds-js' was not found. Please, check whether 'kds-js' is loaded prior to 'korui-js'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korui-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'korui-js'.");
    }
    if (typeof this['korim-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'korui-js'.");
    }
    if (typeof this['korag-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'korag-js' was not found. Please, check whether 'korag-js' is loaded prior to 'korui-js'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korui-js'.");
    }
    if (typeof this['korag-opengl-js'] === 'undefined') {
      throw new Error("Error loading module 'korui-js'. Its dependency 'korag-opengl-js' was not found. Please, check whether 'korag-opengl-js' is loaded prior to 'korui-js'.");
    }
    root['korui-js'] = factory(typeof this['korui-js'] === 'undefined' ? {} : this['korui-js'], kotlin, this['korio-js'], this['klogger-js'], this['kds-js'], this['korma-js'], this['kmem-js'], this['korim-js'], this['korag-js'], this['kotlinx-coroutines-core'], this['korag-opengl-js']);
  }
}(this, function (_, Kotlin, $module$korio_js, $module$klogger_js, $module$kds_js, $module$korma_js, $module$kmem_js, $module$korim_js, $module$korag_js, $module$kotlinx_coroutines_core, $module$korag_opengl_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Closeable = $module$korio_js.com.soywiz.korio.lang.Closeable;
  var Logger = $module$klogger_js.com.soywiz.klogger.Logger;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var throwUPAE = Kotlin.throwUPAE;
  var Korio = $module$korio_js.com.soywiz.korio.Korio_u4brvc$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var throwCCE = Kotlin.throwCCE;
  var Closeable_0 = $module$korio_js.com.soywiz.korio.lang.Closeable_o14v8n$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Pool = $module$kds_js.com.soywiz.kds.Pool;
  var Exception_init = Kotlin.kotlin.Exception_init;
  var Exception = Kotlin.kotlin.Exception;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var MVector2 = $module$korma_js.com.soywiz.korma.MVector2;
  var Extra = $module$kds_js.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_js.com.soywiz.kds.Extra.Mixin;
  var toBoxedChar = Kotlin.toBoxedChar;
  var numberToInt = Kotlin.numberToInt;
  var toString = Kotlin.toString;
  var clamp = $module$kmem_js.com.soywiz.kmem.clamp_e4yvb3$;
  var arraycopy = $module$kmem_js.com.soywiz.kmem.arraycopy_dgpv4k$;
  var getBit = $module$kmem_js.com.soywiz.kmem.getBit_dqglrj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var lang = $module$korio_js.com.soywiz.korio.lang;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Any = Object;
  var color = $module$korim_js.com.soywiz.korim.color;
  var extraProperty = $module$kds_js.com.soywiz.kds.extraProperty;
  var incr = $module$kds_js.com.soywiz.kds.incr_9idthx$;
  var async = $module$korio_js.com.soywiz.korio.async;
  var launchImmediately = $module$korio_js.com.soywiz.korio.async.launchImmediately_vruxnc$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var equals = Kotlin.equals;
  var ensureNotNull = Kotlin.ensureNotNull;
  var SizeInt = $module$korma_js.com.soywiz.korma.geom.SizeInt;
  var RectangleInt_init = $module$korma_js.com.soywiz.korma.geom.RectangleInt_init_tjonv8$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var AGContainer = $module$korag_js.com.soywiz.korag.AGContainer;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var indexOf = Kotlin.kotlin.collections.indexOf_bv23uc$;
  var NativeImage = $module$korim_js.com.soywiz.korim.bitmap.NativeImage_vux9f0$;
  var ScaleMode = $module$korma_js.com.soywiz.korma.geom.ScaleMode;
  var Annotation = Kotlin.kotlin.Annotation;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_mqih57$;
  var util = $module$korio_js.com.soywiz.korio.util;
  var DisposableHandle = $module$kotlinx_coroutines_core.kotlinx.coroutines.DisposableHandle;
  var CoroutineDispatcher = $module$kotlinx_coroutines_core.kotlinx.coroutines.CoroutineDispatcher;
  var Delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.Delay;
  var DelayFrame = $module$korio_js.com.soywiz.korio.async.DelayFrame;
  var korag = $module$korag_opengl_js.com.soywiz.korag;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var closeable = $module$korio_js.com.soywiz.korio.lang.closeable_n2ytw$;
  var getKClass = Kotlin.getKClass;
  var toChar = Kotlin.toChar;
  var cancellable = $module$korio_js.com.soywiz.korio.lang.cancellable_6257sj$;
  var getCallableRef = Kotlin.getCallableRef;
  var format = $module$korim_js.com.soywiz.korim.format;
  var HtmlNativeImage = $module$korim_js.com.soywiz.korim.format.HtmlNativeImage;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var arraycopy_0 = $module$kmem_js.com.soywiz.kmem.arraycopy_nlwz52$;
  var AsyncStreamBase = $module$korio_js.com.soywiz.korio.stream.AsyncStreamBase;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var FileNotFoundException = $module$korio_js.com.soywiz.korio.FileNotFoundException;
  var toAsyncStream = $module$korio_js.com.soywiz.korio.stream.toAsyncStream_ejtyh5$;
  var toAsync = $module$korio_js.com.soywiz.korio.async.toAsync_7wnvza$;
  var Vfs = $module$korio_js.com.soywiz.korio.file.Vfs;
  PreventDefaultException.prototype = Object.create(Exception.prototype);
  PreventDefaultException.prototype.constructor = PreventDefaultException;
  MouseEvent$Type.prototype = Object.create(Enum.prototype);
  MouseEvent$Type.prototype.constructor = MouseEvent$Type;
  MouseEvent_0.prototype = Object.create(Event.prototype);
  MouseEvent_0.prototype.constructor = MouseEvent_0;
  MouseScrollEvent.prototype = Object.create(Event.prototype);
  MouseScrollEvent.prototype.constructor = MouseScrollEvent;
  TouchEvent$Type.prototype = Object.create(Enum.prototype);
  TouchEvent$Type.prototype.constructor = TouchEvent$Type;
  TouchEvent.prototype = Object.create(Event.prototype);
  TouchEvent.prototype.constructor = TouchEvent;
  KeyEvent$Type.prototype = Object.create(Enum.prototype);
  KeyEvent$Type.prototype.constructor = KeyEvent$Type;
  KeyEvent.prototype = Object.create(Event.prototype);
  KeyEvent.prototype.constructor = KeyEvent;
  GamePadConnectionEvent$Type.prototype = Object.create(Enum.prototype);
  GamePadConnectionEvent$Type.prototype.constructor = GamePadConnectionEvent$Type;
  GamePadConnectionEvent.prototype = Object.create(Event.prototype);
  GamePadConnectionEvent.prototype.constructor = GamePadConnectionEvent;
  GamePadButtonEvent$Type.prototype = Object.create(Enum.prototype);
  GamePadButtonEvent$Type.prototype.constructor = GamePadButtonEvent$Type;
  GamePadButtonEvent.prototype = Object.create(Event.prototype);
  GamePadButtonEvent.prototype.constructor = GamePadButtonEvent;
  GamePadStickEvent.prototype = Object.create(Event.prototype);
  GamePadStickEvent.prototype.constructor = GamePadStickEvent;
  ChangeEvent.prototype = Object.create(Event.prototype);
  ChangeEvent.prototype.constructor = ChangeEvent;
  ResizedEvent.prototype = Object.create(Event.prototype);
  ResizedEvent.prototype.constructor = ResizedEvent;
  DropFileEvent$Type.prototype = Object.create(Enum.prototype);
  DropFileEvent$Type.prototype.constructor = DropFileEvent$Type;
  DropFileEvent.prototype = Object.create(Event.prototype);
  DropFileEvent.prototype.constructor = DropFileEvent;
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
  MouseButton.prototype = Object.create(Enum.prototype);
  MouseButton.prototype.constructor = MouseButton;
  Key.prototype = Object.create(Enum.prototype);
  Key.prototype.constructor = Key;
  GameStick.prototype = Object.create(Enum.prototype);
  GameStick.prototype.constructor = GameStick;
  GameButton.prototype = Object.create(Enum.prototype);
  GameButton.prototype.constructor = GameButton;
  StandardGamepadMapping.prototype = Object.create(GamepadMapping.prototype);
  StandardGamepadMapping.prototype.constructor = StandardGamepadMapping;
  LightQuality.prototype = Object.create(Enum.prototype);
  LightQuality.prototype.constructor = LightQuality;
  LightComponents$getEventListener$lambda$ObjectLiteral.prototype = Object.create(EventDispatcher$Mixin.prototype);
  LightComponents$getEventListener$lambda$ObjectLiteral.prototype.constructor = LightComponents$getEventListener$lambda$ObjectLiteral;
  LightType.prototype = Object.create(Enum.prototype);
  LightType.prototype.constructor = LightType;
  LogLightComponents.prototype = Object.create(LightComponents.prototype);
  LogLightComponents.prototype.constructor = LogLightComponents;
  DummyLightComponents.prototype = Object.create(LightComponents.prototype);
  DummyLightComponents.prototype.constructor = DummyLightComponents;
  Container.prototype = Object.create(Component.prototype);
  Container.prototype.constructor = Container;
  ScrollPane.prototype = Object.create(Container.prototype);
  ScrollPane.prototype.constructor = ScrollPane;
  TabPane.prototype = Object.create(Container.prototype);
  TabPane.prototype.constructor = TabPane;
  TabPage.prototype = Object.create(Container.prototype);
  TabPage.prototype.constructor = TabPage;
  Frame.prototype = Object.create(Container.prototype);
  Frame.prototype.constructor = Frame;
  AgCanvas.prototype = Object.create(Component.prototype);
  AgCanvas.prototype.constructor = AgCanvas;
  Button.prototype = Object.create(Component.prototype);
  Button.prototype.constructor = Button;
  ComboBox.prototype = Object.create(Component.prototype);
  ComboBox.prototype.constructor = ComboBox;
  Label.prototype = Object.create(Component.prototype);
  Label.prototype.constructor = Label;
  TextField.prototype = Object.create(Component.prototype);
  TextField.prototype.constructor = TextField;
  TextArea.prototype = Object.create(Component.prototype);
  TextArea.prototype.constructor = TextArea;
  CheckBox.prototype = Object.create(Component.prototype);
  CheckBox.prototype.constructor = CheckBox;
  RadioButton.prototype = Object.create(Component.prototype);
  RadioButton.prototype.constructor = RadioButton;
  Progress.prototype = Object.create(Component.prototype);
  Progress.prototype.constructor = Progress;
  Slider.prototype = Object.create(Component.prototype);
  Slider.prototype.constructor = Slider;
  Spacer.prototype = Object.create(Component.prototype);
  Spacer.prototype.constructor = Spacer;
  Image.prototype = Object.create(Component.prototype);
  Image.prototype.constructor = Image;
  CustomComponent.prototype = Object.create(Container.prototype);
  CustomComponent.prototype.constructor = CustomComponent;
  BaseCanvas.prototype = Object.create(Container.prototype);
  BaseCanvas.prototype.constructor = BaseCanvas;
  VectorImage.prototype = Object.create(BaseCanvas.prototype);
  VectorImage.prototype.constructor = VectorImage;
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
  NodeDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  NodeDispatcher.prototype.constructor = NodeDispatcher;
  MessageQueue.prototype = Object.create(Queue.prototype);
  MessageQueue.prototype.constructor = MessageQueue;
  HtmlDispatcher$queue$ObjectLiteral.prototype = Object.create(MessageQueue.prototype);
  HtmlDispatcher$queue$ObjectLiteral.prototype.constructor = HtmlDispatcher$queue$ObjectLiteral;
  HtmlDispatcher.prototype = Object.create(CoroutineDispatcher.prototype);
  HtmlDispatcher.prototype.constructor = HtmlDispatcher;
  HtmlLightComponents.prototype = Object.create(LightComponents.prototype);
  HtmlLightComponents.prototype.constructor = HtmlLightComponents;
  JsFileAsyncStreamBase.prototype = Object.create(AsyncStreamBase.prototype);
  JsFileAsyncStreamBase.prototype.constructor = JsFileAsyncStreamBase;
  JsFilesVfs.prototype = Object.create(Vfs.prototype);
  JsFilesVfs.prototype.constructor = JsFilesVfs;
  Nimbus_111_1420_Safari_GamepadMapping.prototype = Object.create(GamepadMapping.prototype);
  Nimbus_111_1420_Safari_GamepadMapping.prototype.constructor = Nimbus_111_1420_Safari_GamepadMapping;
  function ApplicationAware() {
  }
  ApplicationAware.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ApplicationAware',
    interfaces: []
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function Application(coroutineContext, light) {
    Application$Companion_getInstance();
    this.coroutineContext = coroutineContext;
    this.light = light;
    this.app_3zye0p$_0 = this;
    this.frames = ArrayList_init();
    var $receiver = new Length$Context();
    $receiver.pixelsPerInch = this.light.getDpi();
    this.lengthContext = $receiver;
  }
  function Application$Companion() {
    Application$Companion_instance = this;
  }
  Application$Companion.prototype.invoke = function (continuation) {
    return Application$Companion_getInstance().invoke_8y393m$(defaultLight(continuation.context), continuation);
  };
  Application$Companion.prototype.invoke_8y393m$ = function (light, continuation) {
    return new Application(continuation.context, light);
  };
  Application$Companion.prototype.invoke_syil3v$ = function (light_0, callback_0, continuation_0, suspended) {
    var instance = new Coroutine$invoke_syil3v$(this, light_0, callback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$invoke_syil3v$($this, light_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$light = light_0;
    this.local$callback = callback_0;
  }
  Coroutine$invoke_syil3v$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$invoke_syil3v$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$invoke_syil3v$.prototype.constructor = Coroutine$invoke_syil3v$;
  Coroutine$invoke_syil3v$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var app = new Application(this.context, this.local$light);
            this.exceptionState_0 = 3;
            this.state_0 = 1;
            this.result_0 = this.local$callback(app, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.exceptionState_0 = 5;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            continue;
          case 2:
            return;
          case 3:
            this.finallyPath_0 = [5];
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 5:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 5) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Application$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Application$Companion_instance = null;
  function Application$Companion_getInstance() {
    if (Application$Companion_instance === null) {
      new Application$Companion();
    }
    return Application$Companion_instance;
  }
  Object.defineProperty(Application.prototype, 'app', {
    get: function () {
      return this.app_3zye0p$_0;
    }
  });
  Object.defineProperty(Application.prototype, 'devicePixelRatio', {
    get: function () {
      return this.light.getDevicePixelRatio();
    }
  });
  Application.prototype.close = function () {
  };
  Application.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Application',
    interfaces: [ApplicationAware, Closeable]
  };
  var koruiApplicationLog;
  function Application$lambda$lambda(closure$callback_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$Application$lambda$lambda(closure$callback_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Application$lambda$lambda(closure$callback_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Application$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Application$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Application$lambda$lambda.prototype.constructor = Coroutine$Application$lambda$lambda;
  Coroutine$Application$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$callback(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Application$lambda(closure$callback_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Application$lambda(closure$callback_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Application$lambda(closure$callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
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
            this.state_0 = 2;
            this.result_0 = Application$Companion_getInstance().invoke_syil3v$(get_defaultLightFactory().create_1fupul$(this.context), Application$lambda$lambda(this.local$closure$callback), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Application_0(callback) {
    Korui(void 0, Application$lambda(callback));
  }
  var Logger$Level = $module$klogger_js.com.soywiz.klogger.Logger.Level;
  function framePre$lambda(closure$resizing, closure$frame, this$framePre) {
    return function (e) {
      if (!closure$resizing.v) {
        closure$resizing.v = true;
        try {
          var $this = koruiApplicationLog;
          var level = Logger$Level.INFO;
          if ($this.isEnabled_fs4ikx$(level)) {
            $this.actualLog_pwm3k3$(level, 'Application.frame.ResizedEvent: ' + e.width + ',' + e.height);
          }
          closure$frame.invalidate();
          closure$frame.setBoundsAndRelayout_tjonv8$(0, 0, e.width, e.height);
          this$framePre.light.repaint_za3rmp$(closure$frame.handle);
        }
        finally {
          closure$resizing.v = false;
        }
      }
      return Unit;
    };
  }
  function framePre($receiver, title, width, height, icon) {
    if (width === void 0)
      width = 640;
    if (height === void 0)
      height = 480;
    if (icon === void 0)
      icon = null;
    var $receiver_0 = new Frame($receiver, title);
    $receiver_0.setBoundsInternal_tjonv8$(0, 0, width, height);
    var frame = $receiver_0;
    frame.icon = icon;
    var $this = koruiApplicationLog;
    var level = Logger$Level.INFO;
    if ($this.isEnabled_fs4ikx$(level)) {
      $this.actualLog_pwm3k3$(level, 'Application.frame: ' + frame.actualBounds);
    }
    var resizing = {v: false};
    frame.addEventListener_htgam$(getKClass(ResizedEvent), framePre$lambda(resizing, frame, $receiver));
    return frame;
  }
  function framePost($receiver, frame) {
    $receiver.frames.add_11rb$(frame);
    frame.setBoundsAndRelayout_tjonv8$(0, 0, frame.actualBounds.width, frame.actualBounds.height);
    frame.invalidate();
    frame.visible = true;
    $receiver.light.configuredFrame_za3rmp$(frame.handle);
  }
  var frame = defineInlineFunction('korui-js.com.soywiz.korui.frame_3que30$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var framePre = _.com.soywiz.korui.framePre_n94ab8$;
    var framePost = _.com.soywiz.korui.framePost_7vdf2s$;
    function frame$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, title, width, height, icon, callback) {
      if (width === void 0)
        width = 640;
      if (height === void 0)
        height = 480;
      if (icon === void 0)
        icon = null;
      if (callback === void 0)
        callback = frame$lambda;
      var $receiver_0 = framePre($receiver, title, width, height, icon);
      callback($receiver_0);
      framePost($receiver, $receiver_0);
      return $receiver_0;
    };
  }));
  function CanvasApplicationEx$lambda(f, f_0, continuation_0, suspended) {
    var instance = new Coroutine$CanvasApplicationEx$lambda(f, f_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$CanvasApplicationEx$lambda(f, f_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$CanvasApplicationEx$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CanvasApplicationEx$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CanvasApplicationEx$lambda.prototype.constructor = Coroutine$CanvasApplicationEx$lambda;
  Coroutine$CanvasApplicationEx$lambda.prototype.doResume = function () {
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
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function CanvasApplicationEx(title_0, width_0, height_0, icon_0, light_0, quality_0, callback_0, continuation_0, suspended) {
    var instance = new Coroutine$CanvasApplicationEx(title_0, width_0, height_0, icon_0, light_0, quality_0, callback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$CanvasApplicationEx(title_0, width_0, height_0, icon_0, light_0, quality_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$title = title_0;
    this.local$width = width_0;
    this.local$height = height_0;
    this.local$icon = icon_0;
    this.local$light = light_0;
    this.local$quality = quality_0;
    this.local$callback = callback_0;
  }
  Coroutine$CanvasApplicationEx.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$CanvasApplicationEx.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$CanvasApplicationEx.prototype.constructor = Coroutine$CanvasApplicationEx;
  Coroutine$CanvasApplicationEx.prototype.doResume = function () {
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
              this.local$light = null;
            if (this.local$quality === void 0)
              this.local$quality = LightQuality$PERFORMANCE_getInstance();
            if (this.local$callback === void 0)
              this.local$callback = CanvasApplicationEx$lambda;
            var llight = this.local$light != null ? this.local$light : defaultLight(this.context);
            llight.quality = this.local$quality;
            var application = new Application(this.context, llight);
            var canvas = {v: null};
            var $receiver = framePre(application, this.local$title, this.local$width, this.local$height, this.local$icon);
            var $receiver_0 = $receiver.add_x0aukp$(new AgCanvas($receiver.app));
            $receiver_0.focus();
            canvas.v = $receiver_0;
            framePost(application, $receiver);
            var frame = $receiver;
            this.state_0 = 2;
            this.result_0 = this.local$callback(canvas.v == null ? throwUPAE('canvas') : canvas.v, frame, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Korui$lambda(closure$entry_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$Korui$lambda(closure$entry_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Korui$lambda(closure$entry_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$entry = closure$entry_0;
  }
  Coroutine$Korui$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korui$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korui$lambda.prototype.constructor = Coroutine$Korui$lambda;
  Coroutine$Korui$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$entry(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function Korui(context, entry) {
    if (context === void 0)
      context = get_KoruiDispatcher();
    Korio(context, Korui$lambda(entry));
  }
  function Screen() {
  }
  Screen.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Screen',
    interfaces: []
  };
  function EventDispatcher() {
    EventDispatcher$Companion_getInstance();
  }
  EventDispatcher.prototype.copyFrom_llfj4l$ = function (other) {
  };
  function EventDispatcher$Mixin() {
    this.handlers_y14kin$_0 = LinkedHashMap_init();
    this.tempHandlers_kcvkur$_0 = new Pool(EventDispatcher$Mixin$tempHandlers$lambda, void 0, EventDispatcher$Mixin$tempHandlers$lambda_0);
  }
  EventDispatcher$Mixin.prototype.getHandlersFor_7nsa2d$_0 = function (clazz) {
    var tmp$;
    var $receiver = this.handlers_y14kin$_0;
    var tmp$_0;
    var value = $receiver.get_11rb$(clazz);
    if (value == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(clazz, answer);
      tmp$_0 = answer;
    }
     else {
      tmp$_0 = value;
    }
    return Kotlin.isType(tmp$ = tmp$_0, ArrayList) ? tmp$ : throwCCE();
  };
  function EventDispatcher$Mixin$addEventListener$lambda(closure$clazz, this$Mixin, closure$handler) {
    return function () {
      var $receiver = this$Mixin.getHandlersFor_7nsa2d$_0(closure$clazz);
      var element = closure$handler;
      $receiver.remove_11rb$(element);
      return Unit;
    };
  }
  EventDispatcher$Mixin.prototype.addEventListener_htgam$ = function (clazz, handler) {
    this.getHandlersFor_7nsa2d$_0(clazz).add_11rb$(handler);
    return Closeable_0(EventDispatcher$Mixin$addEventListener$lambda(clazz, this, handler));
  };
  EventDispatcher$Mixin.prototype.copyFrom_llfj4l$ = function (other) {
    var tmp$, tmp$_0;
    this.handlers_y14kin$_0.clear();
    if (Kotlin.isType(other, EventDispatcher$Mixin)) {
      tmp$ = other.handlers_y14kin$_0.entries.iterator();
      while (tmp$.hasNext()) {
        var tmp$_1 = tmp$.next();
        var clazz = tmp$_1.key;
        var events = tmp$_1.value;
        tmp$_0 = events.iterator();
        while (tmp$_0.hasNext()) {
          var event = tmp$_0.next();
          this.addEventListener_htgam$(clazz, event);
        }
      }
    }
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  EventDispatcher$Mixin.prototype.dispatch_dt5jzj$ = function (clazz, event) {
    var $this = this.tempHandlers_kcvkur$_0;
    var temp = $this.alloc();
    try {
      var tmp$, tmp$_0;
      var rtemp = Kotlin.isType(tmp$ = temp, ArrayList) ? tmp$ : throwCCE();
      addAll(rtemp, this.getHandlersFor_7nsa2d$_0(clazz));
      tmp$_0 = rtemp.iterator();
      while (tmp$_0.hasNext()) {
        var handler = tmp$_0.next();
        handler(event);
      }
    }
    finally {
      $this.free_11rb$(temp);
    }
  };
  function EventDispatcher$Mixin$tempHandlers$lambda(it) {
    it.clear();
    return Unit;
  }
  function EventDispatcher$Mixin$tempHandlers$lambda_0(it) {
    return ArrayList_init();
  }
  EventDispatcher$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [EventDispatcher]
  };
  function EventDispatcher$Companion() {
    EventDispatcher$Companion_instance = this;
  }
  EventDispatcher$Companion.prototype.invoke = function () {
    return new EventDispatcher$Mixin();
  };
  EventDispatcher$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EventDispatcher$Companion_instance = null;
  function EventDispatcher$Companion_getInstance() {
    if (EventDispatcher$Companion_instance === null) {
      new EventDispatcher$Companion();
    }
    return EventDispatcher$Companion_instance;
  }
  EventDispatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EventDispatcher',
    interfaces: []
  };
  function DummyEventDispatcher() {
    DummyEventDispatcher_instance = this;
  }
  DummyEventDispatcher.prototype.close = function () {
  };
  DummyEventDispatcher.prototype.addEventListener_htgam$ = function (clazz, handler) {
    return this;
  };
  DummyEventDispatcher.prototype.dispatch_dt5jzj$ = function (clazz, event) {
  };
  DummyEventDispatcher.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DummyEventDispatcher',
    interfaces: [Closeable, EventDispatcher]
  };
  var DummyEventDispatcher_instance = null;
  function DummyEventDispatcher_getInstance() {
    if (DummyEventDispatcher_instance === null) {
      new DummyEventDispatcher();
    }
    return DummyEventDispatcher_instance;
  }
  var addEventListener = defineInlineFunction('korui-js.com.soywiz.korui.event.addEventListener_on4rkt$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, handler) {
      return $receiver.addEventListener_htgam$(getKClass(T_0), handler);
    };
  }));
  var dispatch = defineInlineFunction('korui-js.com.soywiz.korui.event.dispatch_6to85q$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, $receiver, event) {
      $receiver.dispatch_dt5jzj$(getKClass(T_0), event);
    };
  }));
  function Event() {
    this.target = null;
  }
  Event.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Event',
    interfaces: []
  };
  function preventDefault(reason) {
    if (reason === void 0)
      reason = null;
    throw new PreventDefaultException(reason);
  }
  function PreventDefaultException(reason) {
    if (reason === void 0)
      reason = null;
    Exception_init(this);
    this.reason = reason;
    this.name = 'PreventDefaultException';
  }
  PreventDefaultException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PreventDefaultException',
    interfaces: [Exception]
  };
  function MouseEvent_0(type, id, x, y, button, buttons, isShiftDown, isCtrlDown, isAltDown, isMetaDown, scaleCoords) {
    if (type === void 0)
      type = MouseEvent$Type$MOVE_getInstance();
    if (id === void 0)
      id = 0;
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (button === void 0)
      button = MouseButton$LEFT_getInstance();
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
    if (scaleCoords === void 0)
      scaleCoords = true;
    Event.call(this);
    this.type = type;
    this.id = id;
    this.x = x;
    this.y = y;
    this.button = button;
    this.buttons = buttons;
    this.isShiftDown = isShiftDown;
    this.isCtrlDown = isCtrlDown;
    this.isAltDown = isAltDown;
    this.isMetaDown = isMetaDown;
    this.scaleCoords = scaleCoords;
  }
  function MouseEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MouseEvent$Type_initFields() {
    MouseEvent$Type_initFields = function () {
    };
    MouseEvent$Type$MOVE_instance = new MouseEvent$Type('MOVE', 0);
    MouseEvent$Type$DRAG_instance = new MouseEvent$Type('DRAG', 1);
    MouseEvent$Type$UP_instance = new MouseEvent$Type('UP', 2);
    MouseEvent$Type$DOWN_instance = new MouseEvent$Type('DOWN', 3);
    MouseEvent$Type$CLICK_instance = new MouseEvent$Type('CLICK', 4);
    MouseEvent$Type$ENTER_instance = new MouseEvent$Type('ENTER', 5);
    MouseEvent$Type$EXIT_instance = new MouseEvent$Type('EXIT', 6);
  }
  var MouseEvent$Type$MOVE_instance;
  function MouseEvent$Type$MOVE_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$MOVE_instance;
  }
  var MouseEvent$Type$DRAG_instance;
  function MouseEvent$Type$DRAG_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$DRAG_instance;
  }
  var MouseEvent$Type$UP_instance;
  function MouseEvent$Type$UP_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$UP_instance;
  }
  var MouseEvent$Type$DOWN_instance;
  function MouseEvent$Type$DOWN_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$DOWN_instance;
  }
  var MouseEvent$Type$CLICK_instance;
  function MouseEvent$Type$CLICK_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$CLICK_instance;
  }
  var MouseEvent$Type$ENTER_instance;
  function MouseEvent$Type$ENTER_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$ENTER_instance;
  }
  var MouseEvent$Type$EXIT_instance;
  function MouseEvent$Type$EXIT_getInstance() {
    MouseEvent$Type_initFields();
    return MouseEvent$Type$EXIT_instance;
  }
  MouseEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function MouseEvent$Type$values() {
    return [MouseEvent$Type$MOVE_getInstance(), MouseEvent$Type$DRAG_getInstance(), MouseEvent$Type$UP_getInstance(), MouseEvent$Type$DOWN_getInstance(), MouseEvent$Type$CLICK_getInstance(), MouseEvent$Type$ENTER_getInstance(), MouseEvent$Type$EXIT_getInstance()];
  }
  MouseEvent$Type.values = MouseEvent$Type$values;
  function MouseEvent$Type$valueOf(name) {
    switch (name) {
      case 'MOVE':
        return MouseEvent$Type$MOVE_getInstance();
      case 'DRAG':
        return MouseEvent$Type$DRAG_getInstance();
      case 'UP':
        return MouseEvent$Type$UP_getInstance();
      case 'DOWN':
        return MouseEvent$Type$DOWN_getInstance();
      case 'CLICK':
        return MouseEvent$Type$CLICK_getInstance();
      case 'ENTER':
        return MouseEvent$Type$ENTER_getInstance();
      case 'EXIT':
        return MouseEvent$Type$EXIT_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.event.MouseEvent.Type.' + name);
    }
  }
  MouseEvent$Type.valueOf_61zpoe$ = MouseEvent$Type$valueOf;
  MouseEvent_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseEvent',
    interfaces: [Event]
  };
  MouseEvent_0.prototype.component1 = function () {
    return this.type;
  };
  MouseEvent_0.prototype.component2 = function () {
    return this.id;
  };
  MouseEvent_0.prototype.component3 = function () {
    return this.x;
  };
  MouseEvent_0.prototype.component4 = function () {
    return this.y;
  };
  MouseEvent_0.prototype.component5 = function () {
    return this.button;
  };
  MouseEvent_0.prototype.component6 = function () {
    return this.buttons;
  };
  MouseEvent_0.prototype.component7 = function () {
    return this.isShiftDown;
  };
  MouseEvent_0.prototype.component8 = function () {
    return this.isCtrlDown;
  };
  MouseEvent_0.prototype.component9 = function () {
    return this.isAltDown;
  };
  MouseEvent_0.prototype.component10 = function () {
    return this.isMetaDown;
  };
  MouseEvent_0.prototype.component11 = function () {
    return this.scaleCoords;
  };
  MouseEvent_0.prototype.copy_rym7az$ = function (type, id, x, y, button, buttons, isShiftDown, isCtrlDown, isAltDown, isMetaDown, scaleCoords) {
    return new MouseEvent_0(type === void 0 ? this.type : type, id === void 0 ? this.id : id, x === void 0 ? this.x : x, y === void 0 ? this.y : y, button === void 0 ? this.button : button, buttons === void 0 ? this.buttons : buttons, isShiftDown === void 0 ? this.isShiftDown : isShiftDown, isCtrlDown === void 0 ? this.isCtrlDown : isCtrlDown, isAltDown === void 0 ? this.isAltDown : isAltDown, isMetaDown === void 0 ? this.isMetaDown : isMetaDown, scaleCoords === void 0 ? this.scaleCoords : scaleCoords);
  };
  MouseEvent_0.prototype.toString = function () {
    return 'MouseEvent(type=' + Kotlin.toString(this.type) + (', id=' + Kotlin.toString(this.id)) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', button=' + Kotlin.toString(this.button)) + (', buttons=' + Kotlin.toString(this.buttons)) + (', isShiftDown=' + Kotlin.toString(this.isShiftDown)) + (', isCtrlDown=' + Kotlin.toString(this.isCtrlDown)) + (', isAltDown=' + Kotlin.toString(this.isAltDown)) + (', isMetaDown=' + Kotlin.toString(this.isMetaDown)) + (', scaleCoords=' + Kotlin.toString(this.scaleCoords)) + ')';
  };
  MouseEvent_0.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.button) | 0;
    result = result * 31 + Kotlin.hashCode(this.buttons) | 0;
    result = result * 31 + Kotlin.hashCode(this.isShiftDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isCtrlDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isAltDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isMetaDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleCoords) | 0;
    return result;
  };
  MouseEvent_0.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.button, other.button) && Kotlin.equals(this.buttons, other.buttons) && Kotlin.equals(this.isShiftDown, other.isShiftDown) && Kotlin.equals(this.isCtrlDown, other.isCtrlDown) && Kotlin.equals(this.isAltDown, other.isAltDown) && Kotlin.equals(this.isMetaDown, other.isMetaDown) && Kotlin.equals(this.scaleCoords, other.scaleCoords)))));
  };
  function MouseScrollEvent(id, x, y, delta, isShiftDown, isCtrlDown, isAltDown, isMetaDown) {
    if (id === void 0)
      id = 0;
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (delta === void 0)
      delta = 0.0;
    if (isShiftDown === void 0)
      isShiftDown = false;
    if (isCtrlDown === void 0)
      isCtrlDown = false;
    if (isAltDown === void 0)
      isAltDown = false;
    if (isMetaDown === void 0)
      isMetaDown = false;
    Event.call(this);
    this.id = id;
    this.x = x;
    this.y = y;
    this.delta = delta;
    this.isShiftDown = isShiftDown;
    this.isCtrlDown = isCtrlDown;
    this.isAltDown = isAltDown;
    this.isMetaDown = isMetaDown;
  }
  MouseScrollEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseScrollEvent',
    interfaces: [Event]
  };
  MouseScrollEvent.prototype.component1 = function () {
    return this.id;
  };
  MouseScrollEvent.prototype.component2 = function () {
    return this.x;
  };
  MouseScrollEvent.prototype.component3 = function () {
    return this.y;
  };
  MouseScrollEvent.prototype.component4 = function () {
    return this.delta;
  };
  MouseScrollEvent.prototype.component5 = function () {
    return this.isShiftDown;
  };
  MouseScrollEvent.prototype.component6 = function () {
    return this.isCtrlDown;
  };
  MouseScrollEvent.prototype.component7 = function () {
    return this.isAltDown;
  };
  MouseScrollEvent.prototype.component8 = function () {
    return this.isMetaDown;
  };
  MouseScrollEvent.prototype.copy_hn7vzo$ = function (id, x, y, delta, isShiftDown, isCtrlDown, isAltDown, isMetaDown) {
    return new MouseScrollEvent(id === void 0 ? this.id : id, x === void 0 ? this.x : x, y === void 0 ? this.y : y, delta === void 0 ? this.delta : delta, isShiftDown === void 0 ? this.isShiftDown : isShiftDown, isCtrlDown === void 0 ? this.isCtrlDown : isCtrlDown, isAltDown === void 0 ? this.isAltDown : isAltDown, isMetaDown === void 0 ? this.isMetaDown : isMetaDown);
  };
  MouseScrollEvent.prototype.toString = function () {
    return 'MouseScrollEvent(id=' + Kotlin.toString(this.id) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', delta=' + Kotlin.toString(this.delta)) + (', isShiftDown=' + Kotlin.toString(this.isShiftDown)) + (', isCtrlDown=' + Kotlin.toString(this.isCtrlDown)) + (', isAltDown=' + Kotlin.toString(this.isAltDown)) + (', isMetaDown=' + Kotlin.toString(this.isMetaDown)) + ')';
  };
  MouseScrollEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.delta) | 0;
    result = result * 31 + Kotlin.hashCode(this.isShiftDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isCtrlDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isAltDown) | 0;
    result = result * 31 + Kotlin.hashCode(this.isMetaDown) | 0;
    return result;
  };
  MouseScrollEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.delta, other.delta) && Kotlin.equals(this.isShiftDown, other.isShiftDown) && Kotlin.equals(this.isCtrlDown, other.isCtrlDown) && Kotlin.equals(this.isAltDown, other.isAltDown) && Kotlin.equals(this.isMetaDown, other.isMetaDown)))));
  };
  function Touch(index, active, id, startTime, currentTime, start, current) {
    Touch$Companion_getInstance();
    if (index === void 0)
      index = -1;
    if (active === void 0)
      active = false;
    if (id === void 0)
      id = -1;
    if (startTime === void 0)
      startTime = 0.0;
    if (currentTime === void 0)
      currentTime = 0.0;
    if (start === void 0)
      start = new MVector2();
    if (current === void 0)
      current = new MVector2();
    this.index = index;
    this.active = active;
    this.id = id;
    this.startTime = startTime;
    this.currentTime = currentTime;
    this.start = start;
    this.current = current;
    this.$delegate_tofj9l$_0 = new Extra$Mixin();
  }
  function Touch$Companion() {
    Touch$Companion_instance = this;
    this.dummy = new Touch(-1);
  }
  Touch$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Touch$Companion_instance = null;
  function Touch$Companion_getInstance() {
    if (Touch$Companion_instance === null) {
      new Touch$Companion();
    }
    return Touch$Companion_instance;
  }
  Object.defineProperty(Touch.prototype, 'extra', {
    get: function () {
      return this.$delegate_tofj9l$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_tofj9l$_0.extra = tmp$;
    }
  });
  Touch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Touch',
    interfaces: [Extra]
  };
  Touch.prototype.component1 = function () {
    return this.index;
  };
  Touch.prototype.component2 = function () {
    return this.active;
  };
  Touch.prototype.component3 = function () {
    return this.id;
  };
  Touch.prototype.component4 = function () {
    return this.startTime;
  };
  Touch.prototype.component5 = function () {
    return this.currentTime;
  };
  Touch.prototype.component6 = function () {
    return this.start;
  };
  Touch.prototype.component7 = function () {
    return this.current;
  };
  Touch.prototype.copy_jomvml$ = function (index, active, id, startTime, currentTime, start, current) {
    return new Touch(index === void 0 ? this.index : index, active === void 0 ? this.active : active, id === void 0 ? this.id : id, startTime === void 0 ? this.startTime : startTime, currentTime === void 0 ? this.currentTime : currentTime, start === void 0 ? this.start : start, current === void 0 ? this.current : current);
  };
  Touch.prototype.toString = function () {
    return 'Touch(index=' + Kotlin.toString(this.index) + (', active=' + Kotlin.toString(this.active)) + (', id=' + Kotlin.toString(this.id)) + (', startTime=' + Kotlin.toString(this.startTime)) + (', currentTime=' + Kotlin.toString(this.currentTime)) + (', start=' + Kotlin.toString(this.start)) + (', current=' + Kotlin.toString(this.current)) + ')';
  };
  Touch.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.active) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.startTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.start) | 0;
    result = result * 31 + Kotlin.hashCode(this.current) | 0;
    return result;
  };
  Touch.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.active, other.active) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.startTime, other.startTime) && Kotlin.equals(this.currentTime, other.currentTime) && Kotlin.equals(this.start, other.start) && Kotlin.equals(this.current, other.current)))));
  };
  function TouchEvent(type, screen, touch, scaleCoords) {
    if (type === void 0)
      type = TouchEvent$Type$START_getInstance();
    if (screen === void 0)
      screen = 0;
    if (touch === void 0)
      touch = new Touch();
    if (scaleCoords === void 0)
      scaleCoords = true;
    Event.call(this);
    this.type = type;
    this.screen = screen;
    this.touch = touch;
    this.scaleCoords = scaleCoords;
  }
  function TouchEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TouchEvent$Type_initFields() {
    TouchEvent$Type_initFields = function () {
    };
    TouchEvent$Type$START_instance = new TouchEvent$Type('START', 0);
    TouchEvent$Type$END_instance = new TouchEvent$Type('END', 1);
    TouchEvent$Type$MOVE_instance = new TouchEvent$Type('MOVE', 2);
  }
  var TouchEvent$Type$START_instance;
  function TouchEvent$Type$START_getInstance() {
    TouchEvent$Type_initFields();
    return TouchEvent$Type$START_instance;
  }
  var TouchEvent$Type$END_instance;
  function TouchEvent$Type$END_getInstance() {
    TouchEvent$Type_initFields();
    return TouchEvent$Type$END_instance;
  }
  var TouchEvent$Type$MOVE_instance;
  function TouchEvent$Type$MOVE_getInstance() {
    TouchEvent$Type_initFields();
    return TouchEvent$Type$MOVE_instance;
  }
  TouchEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function TouchEvent$Type$values() {
    return [TouchEvent$Type$START_getInstance(), TouchEvent$Type$END_getInstance(), TouchEvent$Type$MOVE_getInstance()];
  }
  TouchEvent$Type.values = TouchEvent$Type$values;
  function TouchEvent$Type$valueOf(name) {
    switch (name) {
      case 'START':
        return TouchEvent$Type$START_getInstance();
      case 'END':
        return TouchEvent$Type$END_getInstance();
      case 'MOVE':
        return TouchEvent$Type$MOVE_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.event.TouchEvent.Type.' + name);
    }
  }
  TouchEvent$Type.valueOf_61zpoe$ = TouchEvent$Type$valueOf;
  TouchEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TouchEvent',
    interfaces: [Event]
  };
  TouchEvent.prototype.component1 = function () {
    return this.type;
  };
  TouchEvent.prototype.component2 = function () {
    return this.screen;
  };
  TouchEvent.prototype.component3 = function () {
    return this.touch;
  };
  TouchEvent.prototype.component4 = function () {
    return this.scaleCoords;
  };
  TouchEvent.prototype.copy_gzx0tz$ = function (type, screen, touch, scaleCoords) {
    return new TouchEvent(type === void 0 ? this.type : type, screen === void 0 ? this.screen : screen, touch === void 0 ? this.touch : touch, scaleCoords === void 0 ? this.scaleCoords : scaleCoords);
  };
  TouchEvent.prototype.toString = function () {
    return 'TouchEvent(type=' + Kotlin.toString(this.type) + (', screen=' + Kotlin.toString(this.screen)) + (', touch=' + Kotlin.toString(this.touch)) + (', scaleCoords=' + Kotlin.toString(this.scaleCoords)) + ')';
  };
  TouchEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.screen) | 0;
    result = result * 31 + Kotlin.hashCode(this.touch) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleCoords) | 0;
    return result;
  };
  TouchEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.screen, other.screen) && Kotlin.equals(this.touch, other.touch) && Kotlin.equals(this.scaleCoords, other.scaleCoords)))));
  };
  function KeyEvent(type, id, key, keyCode, char) {
    if (type === void 0)
      type = KeyEvent$Type$UP_getInstance();
    if (id === void 0)
      id = 0;
    if (key === void 0)
      key = Key$UP_getInstance();
    if (keyCode === void 0)
      keyCode = 0;
    if (char === void 0)
      char = 0;
    Event.call(this);
    this.type = type;
    this.id = id;
    this.key = key;
    this.keyCode = keyCode;
    this.char = toBoxedChar(char);
  }
  function KeyEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function KeyEvent$Type_initFields() {
    KeyEvent$Type_initFields = function () {
    };
    KeyEvent$Type$UP_instance = new KeyEvent$Type('UP', 0);
    KeyEvent$Type$DOWN_instance = new KeyEvent$Type('DOWN', 1);
    KeyEvent$Type$TYPE_instance = new KeyEvent$Type('TYPE', 2);
  }
  var KeyEvent$Type$UP_instance;
  function KeyEvent$Type$UP_getInstance() {
    KeyEvent$Type_initFields();
    return KeyEvent$Type$UP_instance;
  }
  var KeyEvent$Type$DOWN_instance;
  function KeyEvent$Type$DOWN_getInstance() {
    KeyEvent$Type_initFields();
    return KeyEvent$Type$DOWN_instance;
  }
  var KeyEvent$Type$TYPE_instance;
  function KeyEvent$Type$TYPE_getInstance() {
    KeyEvent$Type_initFields();
    return KeyEvent$Type$TYPE_instance;
  }
  KeyEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function KeyEvent$Type$values() {
    return [KeyEvent$Type$UP_getInstance(), KeyEvent$Type$DOWN_getInstance(), KeyEvent$Type$TYPE_getInstance()];
  }
  KeyEvent$Type.values = KeyEvent$Type$values;
  function KeyEvent$Type$valueOf(name) {
    switch (name) {
      case 'UP':
        return KeyEvent$Type$UP_getInstance();
      case 'DOWN':
        return KeyEvent$Type$DOWN_getInstance();
      case 'TYPE':
        return KeyEvent$Type$TYPE_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.event.KeyEvent.Type.' + name);
    }
  }
  KeyEvent$Type.valueOf_61zpoe$ = KeyEvent$Type$valueOf;
  KeyEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyEvent',
    interfaces: [Event]
  };
  KeyEvent.prototype.component1 = function () {
    return this.type;
  };
  KeyEvent.prototype.component2 = function () {
    return this.id;
  };
  KeyEvent.prototype.component3 = function () {
    return this.key;
  };
  KeyEvent.prototype.component4 = function () {
    return this.keyCode;
  };
  KeyEvent.prototype.component5 = function () {
    return this.char;
  };
  KeyEvent.prototype.copy_v5f453$ = function (type, id, key, keyCode, char) {
    return new KeyEvent(type === void 0 ? this.type : type, id === void 0 ? this.id : id, key === void 0 ? this.key : key, keyCode === void 0 ? this.keyCode : keyCode, char === void 0 ? this.char : char);
  };
  KeyEvent.prototype.toString = function () {
    return 'KeyEvent(type=' + Kotlin.toString(this.type) + (', id=' + Kotlin.toString(this.id)) + (', key=' + Kotlin.toString(this.key)) + (', keyCode=' + Kotlin.toString(this.keyCode)) + (', char=' + Kotlin.toString(this.char)) + ')';
  };
  KeyEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.keyCode) | 0;
    result = result * 31 + Kotlin.hashCode(this.char) | 0;
    return result;
  };
  KeyEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.id, other.id) && Kotlin.equals(this.key, other.key) && Kotlin.equals(this.keyCode, other.keyCode) && Kotlin.equals(this.char, other.char)))));
  };
  function GamePadConnectionEvent(type, gamepad) {
    if (type === void 0)
      type = GamePadConnectionEvent$Type$CONNECTED_getInstance();
    if (gamepad === void 0)
      gamepad = 0;
    Event.call(this);
    this.type = type;
    this.gamepad = gamepad;
  }
  function GamePadConnectionEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GamePadConnectionEvent$Type_initFields() {
    GamePadConnectionEvent$Type_initFields = function () {
    };
    GamePadConnectionEvent$Type$CONNECTED_instance = new GamePadConnectionEvent$Type('CONNECTED', 0);
    GamePadConnectionEvent$Type$DISCONNECTED_instance = new GamePadConnectionEvent$Type('DISCONNECTED', 1);
  }
  var GamePadConnectionEvent$Type$CONNECTED_instance;
  function GamePadConnectionEvent$Type$CONNECTED_getInstance() {
    GamePadConnectionEvent$Type_initFields();
    return GamePadConnectionEvent$Type$CONNECTED_instance;
  }
  var GamePadConnectionEvent$Type$DISCONNECTED_instance;
  function GamePadConnectionEvent$Type$DISCONNECTED_getInstance() {
    GamePadConnectionEvent$Type_initFields();
    return GamePadConnectionEvent$Type$DISCONNECTED_instance;
  }
  GamePadConnectionEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function GamePadConnectionEvent$Type$values() {
    return [GamePadConnectionEvent$Type$CONNECTED_getInstance(), GamePadConnectionEvent$Type$DISCONNECTED_getInstance()];
  }
  GamePadConnectionEvent$Type.values = GamePadConnectionEvent$Type$values;
  function GamePadConnectionEvent$Type$valueOf(name) {
    switch (name) {
      case 'CONNECTED':
        return GamePadConnectionEvent$Type$CONNECTED_getInstance();
      case 'DISCONNECTED':
        return GamePadConnectionEvent$Type$DISCONNECTED_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.event.GamePadConnectionEvent.Type.' + name);
    }
  }
  GamePadConnectionEvent$Type.valueOf_61zpoe$ = GamePadConnectionEvent$Type$valueOf;
  GamePadConnectionEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadConnectionEvent',
    interfaces: [Event]
  };
  GamePadConnectionEvent.prototype.component1 = function () {
    return this.type;
  };
  GamePadConnectionEvent.prototype.component2 = function () {
    return this.gamepad;
  };
  GamePadConnectionEvent.prototype.copy_ph6rdj$ = function (type, gamepad) {
    return new GamePadConnectionEvent(type === void 0 ? this.type : type, gamepad === void 0 ? this.gamepad : gamepad);
  };
  GamePadConnectionEvent.prototype.toString = function () {
    return 'GamePadConnectionEvent(type=' + Kotlin.toString(this.type) + (', gamepad=' + Kotlin.toString(this.gamepad)) + ')';
  };
  GamePadConnectionEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.gamepad) | 0;
    return result;
  };
  GamePadConnectionEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.gamepad, other.gamepad)))));
  };
  function GamePadButtonEvent(type, gamepad, button, value) {
    Event.call(this);
    this.type = type;
    this.gamepad = gamepad;
    this.button = button;
    this.value = value;
  }
  function GamePadButtonEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GamePadButtonEvent$Type_initFields() {
    GamePadButtonEvent$Type_initFields = function () {
    };
    GamePadButtonEvent$Type$UP_instance = new GamePadButtonEvent$Type('UP', 0);
    GamePadButtonEvent$Type$DOWN_instance = new GamePadButtonEvent$Type('DOWN', 1);
  }
  var GamePadButtonEvent$Type$UP_instance;
  function GamePadButtonEvent$Type$UP_getInstance() {
    GamePadButtonEvent$Type_initFields();
    return GamePadButtonEvent$Type$UP_instance;
  }
  var GamePadButtonEvent$Type$DOWN_instance;
  function GamePadButtonEvent$Type$DOWN_getInstance() {
    GamePadButtonEvent$Type_initFields();
    return GamePadButtonEvent$Type$DOWN_instance;
  }
  GamePadButtonEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function GamePadButtonEvent$Type$values() {
    return [GamePadButtonEvent$Type$UP_getInstance(), GamePadButtonEvent$Type$DOWN_getInstance()];
  }
  GamePadButtonEvent$Type.values = GamePadButtonEvent$Type$values;
  function GamePadButtonEvent$Type$valueOf(name) {
    switch (name) {
      case 'UP':
        return GamePadButtonEvent$Type$UP_getInstance();
      case 'DOWN':
        return GamePadButtonEvent$Type$DOWN_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.event.GamePadButtonEvent.Type.' + name);
    }
  }
  GamePadButtonEvent$Type.valueOf_61zpoe$ = GamePadButtonEvent$Type$valueOf;
  GamePadButtonEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadButtonEvent',
    interfaces: [Event]
  };
  GamePadButtonEvent.prototype.component1 = function () {
    return this.type;
  };
  GamePadButtonEvent.prototype.component2 = function () {
    return this.gamepad;
  };
  GamePadButtonEvent.prototype.component3 = function () {
    return this.button;
  };
  GamePadButtonEvent.prototype.component4 = function () {
    return this.value;
  };
  GamePadButtonEvent.prototype.copy_fp51hp$ = function (type, gamepad, button, value) {
    return new GamePadButtonEvent(type === void 0 ? this.type : type, gamepad === void 0 ? this.gamepad : gamepad, button === void 0 ? this.button : button, value === void 0 ? this.value : value);
  };
  GamePadButtonEvent.prototype.toString = function () {
    return 'GamePadButtonEvent(type=' + Kotlin.toString(this.type) + (', gamepad=' + Kotlin.toString(this.gamepad)) + (', button=' + Kotlin.toString(this.button)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  GamePadButtonEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.gamepad) | 0;
    result = result * 31 + Kotlin.hashCode(this.button) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  GamePadButtonEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.gamepad, other.gamepad) && Kotlin.equals(this.button, other.button) && Kotlin.equals(this.value, other.value)))));
  };
  function GamePadStickEvent(gamepad, stick, x, y) {
    Event.call(this);
    this.gamepad = gamepad;
    this.stick = stick;
    this.x = x;
    this.y = y;
  }
  GamePadStickEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadStickEvent',
    interfaces: [Event]
  };
  GamePadStickEvent.prototype.component1 = function () {
    return this.gamepad;
  };
  GamePadStickEvent.prototype.component2 = function () {
    return this.stick;
  };
  GamePadStickEvent.prototype.component3 = function () {
    return this.x;
  };
  GamePadStickEvent.prototype.component4 = function () {
    return this.y;
  };
  GamePadStickEvent.prototype.copy_16acyu$ = function (gamepad, stick, x, y) {
    return new GamePadStickEvent(gamepad === void 0 ? this.gamepad : gamepad, stick === void 0 ? this.stick : stick, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  GamePadStickEvent.prototype.toString = function () {
    return 'GamePadStickEvent(gamepad=' + Kotlin.toString(this.gamepad) + (', stick=' + Kotlin.toString(this.stick)) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  GamePadStickEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.gamepad) | 0;
    result = result * 31 + Kotlin.hashCode(this.stick) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  GamePadStickEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.gamepad, other.gamepad) && Kotlin.equals(this.stick, other.stick) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function ChangeEvent(oldValue, newValue) {
    if (oldValue === void 0)
      oldValue = null;
    if (newValue === void 0)
      newValue = null;
    Event.call(this);
    this.oldValue = oldValue;
    this.newValue = newValue;
  }
  ChangeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeEvent',
    interfaces: [Event]
  };
  ChangeEvent.prototype.component1 = function () {
    return this.oldValue;
  };
  ChangeEvent.prototype.component2 = function () {
    return this.newValue;
  };
  ChangeEvent.prototype.copy_oaftn8$ = function (oldValue, newValue) {
    return new ChangeEvent(oldValue === void 0 ? this.oldValue : oldValue, newValue === void 0 ? this.newValue : newValue);
  };
  ChangeEvent.prototype.toString = function () {
    return 'ChangeEvent(oldValue=' + Kotlin.toString(this.oldValue) + (', newValue=' + Kotlin.toString(this.newValue)) + ')';
  };
  ChangeEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.oldValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.newValue) | 0;
    return result;
  };
  ChangeEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.oldValue, other.oldValue) && Kotlin.equals(this.newValue, other.newValue)))));
  };
  function ResizedEvent(width, height) {
    if (width === void 0)
      width = 0;
    if (height === void 0)
      height = 0;
    Event.call(this);
    this.width = width;
    this.height = height;
  }
  ResizedEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResizedEvent',
    interfaces: [Event]
  };
  ResizedEvent.prototype.component1 = function () {
    return this.width;
  };
  ResizedEvent.prototype.component2 = function () {
    return this.height;
  };
  ResizedEvent.prototype.copy_vux9f0$ = function (width, height) {
    return new ResizedEvent(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  ResizedEvent.prototype.toString = function () {
    return 'ResizedEvent(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  ResizedEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  ResizedEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function DropFileEvent(type, files) {
    if (type === void 0)
      type = DropFileEvent$Type$ENTER_getInstance();
    if (files === void 0)
      files = null;
    Event.call(this);
    this.type = type;
    this.files = files;
  }
  function DropFileEvent$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DropFileEvent$Type_initFields() {
    DropFileEvent$Type_initFields = function () {
    };
    DropFileEvent$Type$ENTER_instance = new DropFileEvent$Type('ENTER', 0);
    DropFileEvent$Type$EXIT_instance = new DropFileEvent$Type('EXIT', 1);
    DropFileEvent$Type$DROP_instance = new DropFileEvent$Type('DROP', 2);
  }
  var DropFileEvent$Type$ENTER_instance;
  function DropFileEvent$Type$ENTER_getInstance() {
    DropFileEvent$Type_initFields();
    return DropFileEvent$Type$ENTER_instance;
  }
  var DropFileEvent$Type$EXIT_instance;
  function DropFileEvent$Type$EXIT_getInstance() {
    DropFileEvent$Type_initFields();
    return DropFileEvent$Type$EXIT_instance;
  }
  var DropFileEvent$Type$DROP_instance;
  function DropFileEvent$Type$DROP_getInstance() {
    DropFileEvent$Type_initFields();
    return DropFileEvent$Type$DROP_instance;
  }
  DropFileEvent$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function DropFileEvent$Type$values() {
    return [DropFileEvent$Type$ENTER_getInstance(), DropFileEvent$Type$EXIT_getInstance(), DropFileEvent$Type$DROP_getInstance()];
  }
  DropFileEvent$Type.values = DropFileEvent$Type$values;
  function DropFileEvent$Type$valueOf(name) {
    switch (name) {
      case 'ENTER':
        return DropFileEvent$Type$ENTER_getInstance();
      case 'EXIT':
        return DropFileEvent$Type$EXIT_getInstance();
      case 'DROP':
        return DropFileEvent$Type$DROP_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.event.DropFileEvent.Type.' + name);
    }
  }
  DropFileEvent$Type.valueOf_61zpoe$ = DropFileEvent$Type$valueOf;
  DropFileEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DropFileEvent',
    interfaces: [Event]
  };
  DropFileEvent.prototype.component1 = function () {
    return this.type;
  };
  DropFileEvent.prototype.component2 = function () {
    return this.files;
  };
  DropFileEvent.prototype.copy_7fofvs$ = function (type, files) {
    return new DropFileEvent(type === void 0 ? this.type : type, files === void 0 ? this.files : files);
  };
  DropFileEvent.prototype.toString = function () {
    return 'DropFileEvent(type=' + Kotlin.toString(this.type) + (', files=' + Kotlin.toString(this.files)) + ')';
  };
  DropFileEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.files) | 0;
    return result;
  };
  DropFileEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.files, other.files)))));
  };
  function MouseEvents(ed) {
    this.ed = ed;
  }
  function MouseEvents$click$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$CLICK_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.click_o14v8n$ = function (callback) {
    return this.ed.addEventListener_htgam$(getKClass(MouseEvent_0), MouseEvents$click$lambda(callback));
  };
  function MouseEvents$up$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$UP_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.up_o14v8n$ = function (callback) {
    return this.ed.addEventListener_htgam$(getKClass(MouseEvent_0), MouseEvents$up$lambda(callback));
  };
  function MouseEvents$down$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$DOWN_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.down_o14v8n$ = function (callback) {
    return this.ed.addEventListener_htgam$(getKClass(MouseEvent_0), MouseEvents$down$lambda(callback));
  };
  function MouseEvents$move$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$MOVE_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.move_o14v8n$ = function (callback) {
    return this.ed.addEventListener_htgam$(getKClass(MouseEvent_0), MouseEvents$move$lambda(callback));
  };
  function MouseEvents$drag$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$DRAG_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.drag_o14v8n$ = function (callback) {
    return this.ed.addEventListener_htgam$(getKClass(MouseEvent_0), MouseEvents$drag$lambda(callback));
  };
  function MouseEvents$enter$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$ENTER_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.enter_o14v8n$ = function (callback) {
    return this.ed.addEventListener_htgam$(getKClass(MouseEvent_0), MouseEvents$enter$lambda(callback));
  };
  function MouseEvents$exit$lambda(closure$callback) {
    return function (it) {
      if (it.type === MouseEvent$Type$EXIT_getInstance())
        closure$callback();
      return Unit;
    };
  }
  MouseEvents.prototype.exit_o14v8n$ = function (callback) {
    return this.ed.addEventListener_htgam$(getKClass(MouseEvent_0), MouseEvents$exit$lambda(callback));
  };
  MouseEvents.prototype.close = function () {
  };
  MouseEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseEvents',
    interfaces: [Closeable]
  };
  function KeysEvents(ed) {
    this.ed = ed;
  }
  function KeysEvents$down$lambda(closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$DOWN_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.down_s23bsw$ = function (callback) {
    return this.ed.addEventListener_htgam$(getKClass(KeyEvent), KeysEvents$down$lambda(callback));
  };
  function KeysEvents$up$lambda(closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$UP_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.up_s23bsw$ = function (callback) {
    return this.ed.addEventListener_htgam$(getKClass(KeyEvent), KeysEvents$up$lambda(callback));
  };
  function KeysEvents$press$lambda(closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$TYPE_getInstance())
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.press_s23bsw$ = function (callback) {
    return this.ed.addEventListener_htgam$(getKClass(KeyEvent), KeysEvents$press$lambda(callback));
  };
  function KeysEvents$down$lambda_0(closure$key, closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$DOWN_getInstance() && it.key === closure$key)
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.down_k0ur59$ = function (key, callback) {
    return this.ed.addEventListener_htgam$(getKClass(KeyEvent), KeysEvents$down$lambda_0(key, callback));
  };
  function KeysEvents$up$lambda_0(closure$key, closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$UP_getInstance() && it.key === closure$key)
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.up_k0ur59$ = function (key, callback) {
    return this.ed.addEventListener_htgam$(getKClass(KeyEvent), KeysEvents$up$lambda_0(key, callback));
  };
  function KeysEvents$press$lambda_0(closure$key, closure$callback) {
    return function (it) {
      if (it.type === KeyEvent$Type$TYPE_getInstance() && it.key === closure$key)
        closure$callback(it);
      return Unit;
    };
  }
  KeysEvents.prototype.press_k0ur59$ = function (key, callback) {
    return this.ed.addEventListener_htgam$(getKClass(KeyEvent), KeysEvents$press$lambda_0(key, callback));
  };
  KeysEvents.prototype.close = function () {
  };
  KeysEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeysEvents',
    interfaces: [Closeable]
  };
  function mouse($receiver, callback) {
    var $receiver_0 = new MouseEvents($receiver);
    callback($receiver_0);
    return $receiver_0;
  }
  function keys($receiver, callback) {
    var $receiver_0 = new KeysEvents($receiver);
    callback($receiver_0);
    return $receiver_0;
  }
  function Length() {
    Length$Companion_getInstance();
  }
  function Length$Fixed() {
    Length.call(this);
  }
  Length$Fixed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fixed',
    interfaces: [Length]
  };
  function Length$Variable() {
    Length.call(this);
  }
  Length$Variable.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
    simpleName: 'Context',
    interfaces: []
  };
  function Length$MM(v) {
    Length$Fixed.call(this);
    this.v = v;
  }
  Length$MM.prototype.calc_96r7jk$ = function (ctx) {
    return numberToInt(this.v * ctx.pixelsPerInch * 0.0393701);
  };
  Length$MM.prototype.toString = function () {
    return this.v.toString() + 'mm';
  };
  Length$MM.$metadata$ = {
    kind: Kind_CLASS,
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
    return numberToInt(this.v * ctx.pixelsPerInch * 0.393701);
  };
  Length$CM.prototype.toString = function () {
    return this.v.toString() + 'cm';
  };
  Length$CM.$metadata$ = {
    kind: Kind_CLASS,
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
    return numberToInt(this.v * ctx.pixelsPerInch);
  };
  Length$INCH.prototype.toString = function () {
    return this.v.toString() + 'inch';
  };
  Length$INCH.$metadata$ = {
    kind: Kind_CLASS,
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
    return numberToInt(this.v * ctx.pixelRatio);
  };
  Length$PT.prototype.toString = function () {
    return this.v.toString() + 'pt';
  };
  Length$PT.$metadata$ = {
    kind: Kind_CLASS,
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
    return numberToInt(this.v * ctx.fontSize);
  };
  Length$EM.prototype.toString = function () {
    return this.v.toString() + 'em';
  };
  Length$EM.$metadata$ = {
    kind: Kind_CLASS,
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
    return numberToInt(this.v * ctx.viewportWidth1pc);
  };
  Length$VW.prototype.toString = function () {
    return this.v.toString() + 'em';
  };
  Length$VW.$metadata$ = {
    kind: Kind_CLASS,
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
    return numberToInt(this.v * ctx.viewportHeight1pc);
  };
  Length$VH.prototype.toString = function () {
    return this.v.toString() + 'em';
  };
  Length$VH.$metadata$ = {
    kind: Kind_CLASS,
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
    return numberToInt(tmp$ * Math_0.min(a, b));
  };
  Length$VMIN.prototype.toString = function () {
    return this.v.toString() + 'em';
  };
  Length$VMIN.$metadata$ = {
    kind: Kind_CLASS,
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
    return numberToInt(tmp$ * Math_0.max(a, b));
  };
  Length$VMAX.prototype.toString = function () {
    return this.v.toString() + 'em';
  };
  Length$VMAX.$metadata$ = {
    kind: Kind_CLASS,
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
    return numberToInt(this.ratio * ctx.size);
  };
  Length$Ratio.prototype.toString = function () {
    return (this.ratio * 100).toString() + '%';
  };
  Length$Ratio.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    return numberToInt(calcMax(this.a, ctx) * this.scale);
  };
  Length$Scale.prototype.toString = function () {
    return '(' + toString(this.a) + ' * ' + this.scale + ')';
  };
  Length$Scale.$metadata$ = {
    kind: Kind_CLASS,
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
    var minCalc = calcMin(min, ctx, ignoreBounds ? -2147483648 : 0);
    var maxCalc = calcMax(max, ctx, ignoreBounds ? 2147483647 : ctx.size);
    return clamp(sizeCalc, minCalc, maxCalc);
  };
  Length$Companion.$metadata$ = {
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
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
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
  Size.prototype.copyFrom_ae35fa$ = function (other) {
    return this.setTo_6fmdh0$(other.width, other.height);
  };
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
    kind: Kind_CLASS,
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
  function MouseButton(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MouseButton_initFields() {
    MouseButton_initFields = function () {
    };
    MouseButton$LEFT_instance = new MouseButton('LEFT', 0, 0);
    MouseButton$RIGHT_instance = new MouseButton('RIGHT', 1, 1);
    MouseButton$MIDDLE_instance = new MouseButton('MIDDLE', 2, 2);
    MouseButton$BUTTON3_instance = new MouseButton('BUTTON3', 3, 3);
    MouseButton$BUTTON4_instance = new MouseButton('BUTTON4', 4, 4);
    MouseButton$BUTTON5_instance = new MouseButton('BUTTON5', 5, 5);
    MouseButton$Companion_getInstance();
  }
  var MouseButton$LEFT_instance;
  function MouseButton$LEFT_getInstance() {
    MouseButton_initFields();
    return MouseButton$LEFT_instance;
  }
  var MouseButton$RIGHT_instance;
  function MouseButton$RIGHT_getInstance() {
    MouseButton_initFields();
    return MouseButton$RIGHT_instance;
  }
  var MouseButton$MIDDLE_instance;
  function MouseButton$MIDDLE_getInstance() {
    MouseButton_initFields();
    return MouseButton$MIDDLE_instance;
  }
  var MouseButton$BUTTON3_instance;
  function MouseButton$BUTTON3_getInstance() {
    MouseButton_initFields();
    return MouseButton$BUTTON3_instance;
  }
  var MouseButton$BUTTON4_instance;
  function MouseButton$BUTTON4_getInstance() {
    MouseButton_initFields();
    return MouseButton$BUTTON4_instance;
  }
  var MouseButton$BUTTON5_instance;
  function MouseButton$BUTTON5_getInstance() {
    MouseButton_initFields();
    return MouseButton$BUTTON5_instance;
  }
  function MouseButton$Companion() {
    MouseButton$Companion_instance = this;
    this.BUTTONS = MouseButton$values();
  }
  MouseButton$Companion.prototype.get_za3lpa$ = function (id) {
    return this.BUTTONS[id];
  };
  MouseButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MouseButton$Companion_instance = null;
  function MouseButton$Companion_getInstance() {
    MouseButton_initFields();
    if (MouseButton$Companion_instance === null) {
      new MouseButton$Companion();
    }
    return MouseButton$Companion_instance;
  }
  MouseButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseButton',
    interfaces: [Enum]
  };
  function MouseButton$values() {
    return [MouseButton$LEFT_getInstance(), MouseButton$RIGHT_getInstance(), MouseButton$MIDDLE_getInstance(), MouseButton$BUTTON3_getInstance(), MouseButton$BUTTON4_getInstance(), MouseButton$BUTTON5_getInstance()];
  }
  MouseButton.values = MouseButton$values;
  function MouseButton$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return MouseButton$LEFT_getInstance();
      case 'RIGHT':
        return MouseButton$RIGHT_getInstance();
      case 'MIDDLE':
        return MouseButton$MIDDLE_getInstance();
      case 'BUTTON3':
        return MouseButton$BUTTON3_getInstance();
      case 'BUTTON4':
        return MouseButton$BUTTON4_getInstance();
      case 'BUTTON5':
        return MouseButton$BUTTON5_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.input.MouseButton.' + name);
    }
  }
  MouseButton.valueOf_61zpoe$ = MouseButton$valueOf;
  function Key(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Key_initFields() {
    Key_initFields = function () {
    };
    Key$SPACE_instance = new Key('SPACE', 0);
    Key$APOSTROPHE_instance = new Key('APOSTROPHE', 1);
    Key$COMMA_instance = new Key('COMMA', 2);
    Key$MINUS_instance = new Key('MINUS', 3);
    Key$PERIOD_instance = new Key('PERIOD', 4);
    Key$SLASH_instance = new Key('SLASH', 5);
    Key$N0_instance = new Key('N0', 6);
    Key$N1_instance = new Key('N1', 7);
    Key$N2_instance = new Key('N2', 8);
    Key$N3_instance = new Key('N3', 9);
    Key$N4_instance = new Key('N4', 10);
    Key$N5_instance = new Key('N5', 11);
    Key$N6_instance = new Key('N6', 12);
    Key$N7_instance = new Key('N7', 13);
    Key$N8_instance = new Key('N8', 14);
    Key$N9_instance = new Key('N9', 15);
    Key$SEMICOLON_instance = new Key('SEMICOLON', 16);
    Key$EQUAL_instance = new Key('EQUAL', 17);
    Key$A_instance = new Key('A', 18);
    Key$B_instance = new Key('B', 19);
    Key$C_instance = new Key('C', 20);
    Key$D_instance = new Key('D', 21);
    Key$E_instance = new Key('E', 22);
    Key$F_instance = new Key('F', 23);
    Key$G_instance = new Key('G', 24);
    Key$H_instance = new Key('H', 25);
    Key$I_instance = new Key('I', 26);
    Key$J_instance = new Key('J', 27);
    Key$K_instance = new Key('K', 28);
    Key$L_instance = new Key('L', 29);
    Key$M_instance = new Key('M', 30);
    Key$N_instance = new Key('N', 31);
    Key$O_instance = new Key('O', 32);
    Key$P_instance = new Key('P', 33);
    Key$Q_instance = new Key('Q', 34);
    Key$R_instance = new Key('R', 35);
    Key$S_instance = new Key('S', 36);
    Key$T_instance = new Key('T', 37);
    Key$U_instance = new Key('U', 38);
    Key$V_instance = new Key('V', 39);
    Key$W_instance = new Key('W', 40);
    Key$X_instance = new Key('X', 41);
    Key$Y_instance = new Key('Y', 42);
    Key$Z_instance = new Key('Z', 43);
    Key$LEFT_BRACKET_instance = new Key('LEFT_BRACKET', 44);
    Key$BACKSLASH_instance = new Key('BACKSLASH', 45);
    Key$RIGHT_BRACKET_instance = new Key('RIGHT_BRACKET', 46);
    Key$GRAVE_ACCENT_instance = new Key('GRAVE_ACCENT', 47);
    Key$WORLD_1_instance = new Key('WORLD_1', 48);
    Key$WORLD_2_instance = new Key('WORLD_2', 49);
    Key$ESCAPE_instance = new Key('ESCAPE', 50);
    Key$ENTER_instance = new Key('ENTER', 51);
    Key$TAB_instance = new Key('TAB', 52);
    Key$BACKSPACE_instance = new Key('BACKSPACE', 53);
    Key$INSERT_instance = new Key('INSERT', 54);
    Key$DELETE_instance = new Key('DELETE', 55);
    Key$RIGHT_instance = new Key('RIGHT', 56);
    Key$LEFT_instance = new Key('LEFT', 57);
    Key$DOWN_instance = new Key('DOWN', 58);
    Key$UP_instance = new Key('UP', 59);
    Key$PAGE_UP_instance = new Key('PAGE_UP', 60);
    Key$PAGE_DOWN_instance = new Key('PAGE_DOWN', 61);
    Key$HOME_instance = new Key('HOME', 62);
    Key$END_instance = new Key('END', 63);
    Key$CAPS_LOCK_instance = new Key('CAPS_LOCK', 64);
    Key$SCROLL_LOCK_instance = new Key('SCROLL_LOCK', 65);
    Key$NUM_LOCK_instance = new Key('NUM_LOCK', 66);
    Key$PRINT_SCREEN_instance = new Key('PRINT_SCREEN', 67);
    Key$PAUSE_instance = new Key('PAUSE', 68);
    Key$F1_instance = new Key('F1', 69);
    Key$F2_instance = new Key('F2', 70);
    Key$F3_instance = new Key('F3', 71);
    Key$F4_instance = new Key('F4', 72);
    Key$F5_instance = new Key('F5', 73);
    Key$F6_instance = new Key('F6', 74);
    Key$F7_instance = new Key('F7', 75);
    Key$F8_instance = new Key('F8', 76);
    Key$F9_instance = new Key('F9', 77);
    Key$F10_instance = new Key('F10', 78);
    Key$F11_instance = new Key('F11', 79);
    Key$F12_instance = new Key('F12', 80);
    Key$F13_instance = new Key('F13', 81);
    Key$F14_instance = new Key('F14', 82);
    Key$F15_instance = new Key('F15', 83);
    Key$F16_instance = new Key('F16', 84);
    Key$F17_instance = new Key('F17', 85);
    Key$F18_instance = new Key('F18', 86);
    Key$F19_instance = new Key('F19', 87);
    Key$F20_instance = new Key('F20', 88);
    Key$F21_instance = new Key('F21', 89);
    Key$F22_instance = new Key('F22', 90);
    Key$F23_instance = new Key('F23', 91);
    Key$F24_instance = new Key('F24', 92);
    Key$F25_instance = new Key('F25', 93);
    Key$KP_0_instance = new Key('KP_0', 94);
    Key$KP_1_instance = new Key('KP_1', 95);
    Key$KP_2_instance = new Key('KP_2', 96);
    Key$KP_3_instance = new Key('KP_3', 97);
    Key$KP_4_instance = new Key('KP_4', 98);
    Key$KP_5_instance = new Key('KP_5', 99);
    Key$KP_6_instance = new Key('KP_6', 100);
    Key$KP_7_instance = new Key('KP_7', 101);
    Key$KP_8_instance = new Key('KP_8', 102);
    Key$KP_9_instance = new Key('KP_9', 103);
    Key$KP_DECIMAL_instance = new Key('KP_DECIMAL', 104);
    Key$KP_DIVIDE_instance = new Key('KP_DIVIDE', 105);
    Key$KP_MULTIPLY_instance = new Key('KP_MULTIPLY', 106);
    Key$KP_SUBTRACT_instance = new Key('KP_SUBTRACT', 107);
    Key$KP_ADD_instance = new Key('KP_ADD', 108);
    Key$KP_ENTER_instance = new Key('KP_ENTER', 109);
    Key$KP_EQUAL_instance = new Key('KP_EQUAL', 110);
    Key$LEFT_SHIFT_instance = new Key('LEFT_SHIFT', 111);
    Key$LEFT_CONTROL_instance = new Key('LEFT_CONTROL', 112);
    Key$LEFT_ALT_instance = new Key('LEFT_ALT', 113);
    Key$LEFT_SUPER_instance = new Key('LEFT_SUPER', 114);
    Key$RIGHT_SHIFT_instance = new Key('RIGHT_SHIFT', 115);
    Key$RIGHT_CONTROL_instance = new Key('RIGHT_CONTROL', 116);
    Key$RIGHT_ALT_instance = new Key('RIGHT_ALT', 117);
    Key$RIGHT_SUPER_instance = new Key('RIGHT_SUPER', 118);
    Key$MENU_instance = new Key('MENU', 119);
    Key$UNDERLINE_instance = new Key('UNDERLINE', 120);
    Key$SELECT_KEY_instance = new Key('SELECT_KEY', 121);
    Key$UNKNOWN_instance = new Key('UNKNOWN', 122);
  }
  var Key$SPACE_instance;
  function Key$SPACE_getInstance() {
    Key_initFields();
    return Key$SPACE_instance;
  }
  var Key$APOSTROPHE_instance;
  function Key$APOSTROPHE_getInstance() {
    Key_initFields();
    return Key$APOSTROPHE_instance;
  }
  var Key$COMMA_instance;
  function Key$COMMA_getInstance() {
    Key_initFields();
    return Key$COMMA_instance;
  }
  var Key$MINUS_instance;
  function Key$MINUS_getInstance() {
    Key_initFields();
    return Key$MINUS_instance;
  }
  var Key$PERIOD_instance;
  function Key$PERIOD_getInstance() {
    Key_initFields();
    return Key$PERIOD_instance;
  }
  var Key$SLASH_instance;
  function Key$SLASH_getInstance() {
    Key_initFields();
    return Key$SLASH_instance;
  }
  var Key$N0_instance;
  function Key$N0_getInstance() {
    Key_initFields();
    return Key$N0_instance;
  }
  var Key$N1_instance;
  function Key$N1_getInstance() {
    Key_initFields();
    return Key$N1_instance;
  }
  var Key$N2_instance;
  function Key$N2_getInstance() {
    Key_initFields();
    return Key$N2_instance;
  }
  var Key$N3_instance;
  function Key$N3_getInstance() {
    Key_initFields();
    return Key$N3_instance;
  }
  var Key$N4_instance;
  function Key$N4_getInstance() {
    Key_initFields();
    return Key$N4_instance;
  }
  var Key$N5_instance;
  function Key$N5_getInstance() {
    Key_initFields();
    return Key$N5_instance;
  }
  var Key$N6_instance;
  function Key$N6_getInstance() {
    Key_initFields();
    return Key$N6_instance;
  }
  var Key$N7_instance;
  function Key$N7_getInstance() {
    Key_initFields();
    return Key$N7_instance;
  }
  var Key$N8_instance;
  function Key$N8_getInstance() {
    Key_initFields();
    return Key$N8_instance;
  }
  var Key$N9_instance;
  function Key$N9_getInstance() {
    Key_initFields();
    return Key$N9_instance;
  }
  var Key$SEMICOLON_instance;
  function Key$SEMICOLON_getInstance() {
    Key_initFields();
    return Key$SEMICOLON_instance;
  }
  var Key$EQUAL_instance;
  function Key$EQUAL_getInstance() {
    Key_initFields();
    return Key$EQUAL_instance;
  }
  var Key$A_instance;
  function Key$A_getInstance() {
    Key_initFields();
    return Key$A_instance;
  }
  var Key$B_instance;
  function Key$B_getInstance() {
    Key_initFields();
    return Key$B_instance;
  }
  var Key$C_instance;
  function Key$C_getInstance() {
    Key_initFields();
    return Key$C_instance;
  }
  var Key$D_instance;
  function Key$D_getInstance() {
    Key_initFields();
    return Key$D_instance;
  }
  var Key$E_instance;
  function Key$E_getInstance() {
    Key_initFields();
    return Key$E_instance;
  }
  var Key$F_instance;
  function Key$F_getInstance() {
    Key_initFields();
    return Key$F_instance;
  }
  var Key$G_instance;
  function Key$G_getInstance() {
    Key_initFields();
    return Key$G_instance;
  }
  var Key$H_instance;
  function Key$H_getInstance() {
    Key_initFields();
    return Key$H_instance;
  }
  var Key$I_instance;
  function Key$I_getInstance() {
    Key_initFields();
    return Key$I_instance;
  }
  var Key$J_instance;
  function Key$J_getInstance() {
    Key_initFields();
    return Key$J_instance;
  }
  var Key$K_instance;
  function Key$K_getInstance() {
    Key_initFields();
    return Key$K_instance;
  }
  var Key$L_instance;
  function Key$L_getInstance() {
    Key_initFields();
    return Key$L_instance;
  }
  var Key$M_instance;
  function Key$M_getInstance() {
    Key_initFields();
    return Key$M_instance;
  }
  var Key$N_instance;
  function Key$N_getInstance() {
    Key_initFields();
    return Key$N_instance;
  }
  var Key$O_instance;
  function Key$O_getInstance() {
    Key_initFields();
    return Key$O_instance;
  }
  var Key$P_instance;
  function Key$P_getInstance() {
    Key_initFields();
    return Key$P_instance;
  }
  var Key$Q_instance;
  function Key$Q_getInstance() {
    Key_initFields();
    return Key$Q_instance;
  }
  var Key$R_instance;
  function Key$R_getInstance() {
    Key_initFields();
    return Key$R_instance;
  }
  var Key$S_instance;
  function Key$S_getInstance() {
    Key_initFields();
    return Key$S_instance;
  }
  var Key$T_instance;
  function Key$T_getInstance() {
    Key_initFields();
    return Key$T_instance;
  }
  var Key$U_instance;
  function Key$U_getInstance() {
    Key_initFields();
    return Key$U_instance;
  }
  var Key$V_instance;
  function Key$V_getInstance() {
    Key_initFields();
    return Key$V_instance;
  }
  var Key$W_instance;
  function Key$W_getInstance() {
    Key_initFields();
    return Key$W_instance;
  }
  var Key$X_instance;
  function Key$X_getInstance() {
    Key_initFields();
    return Key$X_instance;
  }
  var Key$Y_instance;
  function Key$Y_getInstance() {
    Key_initFields();
    return Key$Y_instance;
  }
  var Key$Z_instance;
  function Key$Z_getInstance() {
    Key_initFields();
    return Key$Z_instance;
  }
  var Key$LEFT_BRACKET_instance;
  function Key$LEFT_BRACKET_getInstance() {
    Key_initFields();
    return Key$LEFT_BRACKET_instance;
  }
  var Key$BACKSLASH_instance;
  function Key$BACKSLASH_getInstance() {
    Key_initFields();
    return Key$BACKSLASH_instance;
  }
  var Key$RIGHT_BRACKET_instance;
  function Key$RIGHT_BRACKET_getInstance() {
    Key_initFields();
    return Key$RIGHT_BRACKET_instance;
  }
  var Key$GRAVE_ACCENT_instance;
  function Key$GRAVE_ACCENT_getInstance() {
    Key_initFields();
    return Key$GRAVE_ACCENT_instance;
  }
  var Key$WORLD_1_instance;
  function Key$WORLD_1_getInstance() {
    Key_initFields();
    return Key$WORLD_1_instance;
  }
  var Key$WORLD_2_instance;
  function Key$WORLD_2_getInstance() {
    Key_initFields();
    return Key$WORLD_2_instance;
  }
  var Key$ESCAPE_instance;
  function Key$ESCAPE_getInstance() {
    Key_initFields();
    return Key$ESCAPE_instance;
  }
  var Key$ENTER_instance;
  function Key$ENTER_getInstance() {
    Key_initFields();
    return Key$ENTER_instance;
  }
  var Key$TAB_instance;
  function Key$TAB_getInstance() {
    Key_initFields();
    return Key$TAB_instance;
  }
  var Key$BACKSPACE_instance;
  function Key$BACKSPACE_getInstance() {
    Key_initFields();
    return Key$BACKSPACE_instance;
  }
  var Key$INSERT_instance;
  function Key$INSERT_getInstance() {
    Key_initFields();
    return Key$INSERT_instance;
  }
  var Key$DELETE_instance;
  function Key$DELETE_getInstance() {
    Key_initFields();
    return Key$DELETE_instance;
  }
  var Key$RIGHT_instance;
  function Key$RIGHT_getInstance() {
    Key_initFields();
    return Key$RIGHT_instance;
  }
  var Key$LEFT_instance;
  function Key$LEFT_getInstance() {
    Key_initFields();
    return Key$LEFT_instance;
  }
  var Key$DOWN_instance;
  function Key$DOWN_getInstance() {
    Key_initFields();
    return Key$DOWN_instance;
  }
  var Key$UP_instance;
  function Key$UP_getInstance() {
    Key_initFields();
    return Key$UP_instance;
  }
  var Key$PAGE_UP_instance;
  function Key$PAGE_UP_getInstance() {
    Key_initFields();
    return Key$PAGE_UP_instance;
  }
  var Key$PAGE_DOWN_instance;
  function Key$PAGE_DOWN_getInstance() {
    Key_initFields();
    return Key$PAGE_DOWN_instance;
  }
  var Key$HOME_instance;
  function Key$HOME_getInstance() {
    Key_initFields();
    return Key$HOME_instance;
  }
  var Key$END_instance;
  function Key$END_getInstance() {
    Key_initFields();
    return Key$END_instance;
  }
  var Key$CAPS_LOCK_instance;
  function Key$CAPS_LOCK_getInstance() {
    Key_initFields();
    return Key$CAPS_LOCK_instance;
  }
  var Key$SCROLL_LOCK_instance;
  function Key$SCROLL_LOCK_getInstance() {
    Key_initFields();
    return Key$SCROLL_LOCK_instance;
  }
  var Key$NUM_LOCK_instance;
  function Key$NUM_LOCK_getInstance() {
    Key_initFields();
    return Key$NUM_LOCK_instance;
  }
  var Key$PRINT_SCREEN_instance;
  function Key$PRINT_SCREEN_getInstance() {
    Key_initFields();
    return Key$PRINT_SCREEN_instance;
  }
  var Key$PAUSE_instance;
  function Key$PAUSE_getInstance() {
    Key_initFields();
    return Key$PAUSE_instance;
  }
  var Key$F1_instance;
  function Key$F1_getInstance() {
    Key_initFields();
    return Key$F1_instance;
  }
  var Key$F2_instance;
  function Key$F2_getInstance() {
    Key_initFields();
    return Key$F2_instance;
  }
  var Key$F3_instance;
  function Key$F3_getInstance() {
    Key_initFields();
    return Key$F3_instance;
  }
  var Key$F4_instance;
  function Key$F4_getInstance() {
    Key_initFields();
    return Key$F4_instance;
  }
  var Key$F5_instance;
  function Key$F5_getInstance() {
    Key_initFields();
    return Key$F5_instance;
  }
  var Key$F6_instance;
  function Key$F6_getInstance() {
    Key_initFields();
    return Key$F6_instance;
  }
  var Key$F7_instance;
  function Key$F7_getInstance() {
    Key_initFields();
    return Key$F7_instance;
  }
  var Key$F8_instance;
  function Key$F8_getInstance() {
    Key_initFields();
    return Key$F8_instance;
  }
  var Key$F9_instance;
  function Key$F9_getInstance() {
    Key_initFields();
    return Key$F9_instance;
  }
  var Key$F10_instance;
  function Key$F10_getInstance() {
    Key_initFields();
    return Key$F10_instance;
  }
  var Key$F11_instance;
  function Key$F11_getInstance() {
    Key_initFields();
    return Key$F11_instance;
  }
  var Key$F12_instance;
  function Key$F12_getInstance() {
    Key_initFields();
    return Key$F12_instance;
  }
  var Key$F13_instance;
  function Key$F13_getInstance() {
    Key_initFields();
    return Key$F13_instance;
  }
  var Key$F14_instance;
  function Key$F14_getInstance() {
    Key_initFields();
    return Key$F14_instance;
  }
  var Key$F15_instance;
  function Key$F15_getInstance() {
    Key_initFields();
    return Key$F15_instance;
  }
  var Key$F16_instance;
  function Key$F16_getInstance() {
    Key_initFields();
    return Key$F16_instance;
  }
  var Key$F17_instance;
  function Key$F17_getInstance() {
    Key_initFields();
    return Key$F17_instance;
  }
  var Key$F18_instance;
  function Key$F18_getInstance() {
    Key_initFields();
    return Key$F18_instance;
  }
  var Key$F19_instance;
  function Key$F19_getInstance() {
    Key_initFields();
    return Key$F19_instance;
  }
  var Key$F20_instance;
  function Key$F20_getInstance() {
    Key_initFields();
    return Key$F20_instance;
  }
  var Key$F21_instance;
  function Key$F21_getInstance() {
    Key_initFields();
    return Key$F21_instance;
  }
  var Key$F22_instance;
  function Key$F22_getInstance() {
    Key_initFields();
    return Key$F22_instance;
  }
  var Key$F23_instance;
  function Key$F23_getInstance() {
    Key_initFields();
    return Key$F23_instance;
  }
  var Key$F24_instance;
  function Key$F24_getInstance() {
    Key_initFields();
    return Key$F24_instance;
  }
  var Key$F25_instance;
  function Key$F25_getInstance() {
    Key_initFields();
    return Key$F25_instance;
  }
  var Key$KP_0_instance;
  function Key$KP_0_getInstance() {
    Key_initFields();
    return Key$KP_0_instance;
  }
  var Key$KP_1_instance;
  function Key$KP_1_getInstance() {
    Key_initFields();
    return Key$KP_1_instance;
  }
  var Key$KP_2_instance;
  function Key$KP_2_getInstance() {
    Key_initFields();
    return Key$KP_2_instance;
  }
  var Key$KP_3_instance;
  function Key$KP_3_getInstance() {
    Key_initFields();
    return Key$KP_3_instance;
  }
  var Key$KP_4_instance;
  function Key$KP_4_getInstance() {
    Key_initFields();
    return Key$KP_4_instance;
  }
  var Key$KP_5_instance;
  function Key$KP_5_getInstance() {
    Key_initFields();
    return Key$KP_5_instance;
  }
  var Key$KP_6_instance;
  function Key$KP_6_getInstance() {
    Key_initFields();
    return Key$KP_6_instance;
  }
  var Key$KP_7_instance;
  function Key$KP_7_getInstance() {
    Key_initFields();
    return Key$KP_7_instance;
  }
  var Key$KP_8_instance;
  function Key$KP_8_getInstance() {
    Key_initFields();
    return Key$KP_8_instance;
  }
  var Key$KP_9_instance;
  function Key$KP_9_getInstance() {
    Key_initFields();
    return Key$KP_9_instance;
  }
  var Key$KP_DECIMAL_instance;
  function Key$KP_DECIMAL_getInstance() {
    Key_initFields();
    return Key$KP_DECIMAL_instance;
  }
  var Key$KP_DIVIDE_instance;
  function Key$KP_DIVIDE_getInstance() {
    Key_initFields();
    return Key$KP_DIVIDE_instance;
  }
  var Key$KP_MULTIPLY_instance;
  function Key$KP_MULTIPLY_getInstance() {
    Key_initFields();
    return Key$KP_MULTIPLY_instance;
  }
  var Key$KP_SUBTRACT_instance;
  function Key$KP_SUBTRACT_getInstance() {
    Key_initFields();
    return Key$KP_SUBTRACT_instance;
  }
  var Key$KP_ADD_instance;
  function Key$KP_ADD_getInstance() {
    Key_initFields();
    return Key$KP_ADD_instance;
  }
  var Key$KP_ENTER_instance;
  function Key$KP_ENTER_getInstance() {
    Key_initFields();
    return Key$KP_ENTER_instance;
  }
  var Key$KP_EQUAL_instance;
  function Key$KP_EQUAL_getInstance() {
    Key_initFields();
    return Key$KP_EQUAL_instance;
  }
  var Key$LEFT_SHIFT_instance;
  function Key$LEFT_SHIFT_getInstance() {
    Key_initFields();
    return Key$LEFT_SHIFT_instance;
  }
  var Key$LEFT_CONTROL_instance;
  function Key$LEFT_CONTROL_getInstance() {
    Key_initFields();
    return Key$LEFT_CONTROL_instance;
  }
  var Key$LEFT_ALT_instance;
  function Key$LEFT_ALT_getInstance() {
    Key_initFields();
    return Key$LEFT_ALT_instance;
  }
  var Key$LEFT_SUPER_instance;
  function Key$LEFT_SUPER_getInstance() {
    Key_initFields();
    return Key$LEFT_SUPER_instance;
  }
  var Key$RIGHT_SHIFT_instance;
  function Key$RIGHT_SHIFT_getInstance() {
    Key_initFields();
    return Key$RIGHT_SHIFT_instance;
  }
  var Key$RIGHT_CONTROL_instance;
  function Key$RIGHT_CONTROL_getInstance() {
    Key_initFields();
    return Key$RIGHT_CONTROL_instance;
  }
  var Key$RIGHT_ALT_instance;
  function Key$RIGHT_ALT_getInstance() {
    Key_initFields();
    return Key$RIGHT_ALT_instance;
  }
  var Key$RIGHT_SUPER_instance;
  function Key$RIGHT_SUPER_getInstance() {
    Key_initFields();
    return Key$RIGHT_SUPER_instance;
  }
  var Key$MENU_instance;
  function Key$MENU_getInstance() {
    Key_initFields();
    return Key$MENU_instance;
  }
  var Key$UNDERLINE_instance;
  function Key$UNDERLINE_getInstance() {
    Key_initFields();
    return Key$UNDERLINE_instance;
  }
  var Key$SELECT_KEY_instance;
  function Key$SELECT_KEY_getInstance() {
    Key_initFields();
    return Key$SELECT_KEY_instance;
  }
  var Key$UNKNOWN_instance;
  function Key$UNKNOWN_getInstance() {
    Key_initFields();
    return Key$UNKNOWN_instance;
  }
  Key.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Key',
    interfaces: [Enum]
  };
  function Key$values() {
    return [Key$SPACE_getInstance(), Key$APOSTROPHE_getInstance(), Key$COMMA_getInstance(), Key$MINUS_getInstance(), Key$PERIOD_getInstance(), Key$SLASH_getInstance(), Key$N0_getInstance(), Key$N1_getInstance(), Key$N2_getInstance(), Key$N3_getInstance(), Key$N4_getInstance(), Key$N5_getInstance(), Key$N6_getInstance(), Key$N7_getInstance(), Key$N8_getInstance(), Key$N9_getInstance(), Key$SEMICOLON_getInstance(), Key$EQUAL_getInstance(), Key$A_getInstance(), Key$B_getInstance(), Key$C_getInstance(), Key$D_getInstance(), Key$E_getInstance(), Key$F_getInstance(), Key$G_getInstance(), Key$H_getInstance(), Key$I_getInstance(), Key$J_getInstance(), Key$K_getInstance(), Key$L_getInstance(), Key$M_getInstance(), Key$N_getInstance(), Key$O_getInstance(), Key$P_getInstance(), Key$Q_getInstance(), Key$R_getInstance(), Key$S_getInstance(), Key$T_getInstance(), Key$U_getInstance(), Key$V_getInstance(), Key$W_getInstance(), Key$X_getInstance(), Key$Y_getInstance(), Key$Z_getInstance(), Key$LEFT_BRACKET_getInstance(), Key$BACKSLASH_getInstance(), Key$RIGHT_BRACKET_getInstance(), Key$GRAVE_ACCENT_getInstance(), Key$WORLD_1_getInstance(), Key$WORLD_2_getInstance(), Key$ESCAPE_getInstance(), Key$ENTER_getInstance(), Key$TAB_getInstance(), Key$BACKSPACE_getInstance(), Key$INSERT_getInstance(), Key$DELETE_getInstance(), Key$RIGHT_getInstance(), Key$LEFT_getInstance(), Key$DOWN_getInstance(), Key$UP_getInstance(), Key$PAGE_UP_getInstance(), Key$PAGE_DOWN_getInstance(), Key$HOME_getInstance(), Key$END_getInstance(), Key$CAPS_LOCK_getInstance(), Key$SCROLL_LOCK_getInstance(), Key$NUM_LOCK_getInstance(), Key$PRINT_SCREEN_getInstance(), Key$PAUSE_getInstance(), Key$F1_getInstance(), Key$F2_getInstance(), Key$F3_getInstance(), Key$F4_getInstance(), Key$F5_getInstance(), Key$F6_getInstance(), Key$F7_getInstance(), Key$F8_getInstance(), Key$F9_getInstance(), Key$F10_getInstance(), Key$F11_getInstance(), Key$F12_getInstance(), Key$F13_getInstance(), Key$F14_getInstance(), Key$F15_getInstance(), Key$F16_getInstance(), Key$F17_getInstance(), Key$F18_getInstance(), Key$F19_getInstance(), Key$F20_getInstance(), Key$F21_getInstance(), Key$F22_getInstance(), Key$F23_getInstance(), Key$F24_getInstance(), Key$F25_getInstance(), Key$KP_0_getInstance(), Key$KP_1_getInstance(), Key$KP_2_getInstance(), Key$KP_3_getInstance(), Key$KP_4_getInstance(), Key$KP_5_getInstance(), Key$KP_6_getInstance(), Key$KP_7_getInstance(), Key$KP_8_getInstance(), Key$KP_9_getInstance(), Key$KP_DECIMAL_getInstance(), Key$KP_DIVIDE_getInstance(), Key$KP_MULTIPLY_getInstance(), Key$KP_SUBTRACT_getInstance(), Key$KP_ADD_getInstance(), Key$KP_ENTER_getInstance(), Key$KP_EQUAL_getInstance(), Key$LEFT_SHIFT_getInstance(), Key$LEFT_CONTROL_getInstance(), Key$LEFT_ALT_getInstance(), Key$LEFT_SUPER_getInstance(), Key$RIGHT_SHIFT_getInstance(), Key$RIGHT_CONTROL_getInstance(), Key$RIGHT_ALT_getInstance(), Key$RIGHT_SUPER_getInstance(), Key$MENU_getInstance(), Key$UNDERLINE_getInstance(), Key$SELECT_KEY_getInstance(), Key$UNKNOWN_getInstance()];
  }
  Key.values = Key$values;
  function Key$valueOf(name) {
    switch (name) {
      case 'SPACE':
        return Key$SPACE_getInstance();
      case 'APOSTROPHE':
        return Key$APOSTROPHE_getInstance();
      case 'COMMA':
        return Key$COMMA_getInstance();
      case 'MINUS':
        return Key$MINUS_getInstance();
      case 'PERIOD':
        return Key$PERIOD_getInstance();
      case 'SLASH':
        return Key$SLASH_getInstance();
      case 'N0':
        return Key$N0_getInstance();
      case 'N1':
        return Key$N1_getInstance();
      case 'N2':
        return Key$N2_getInstance();
      case 'N3':
        return Key$N3_getInstance();
      case 'N4':
        return Key$N4_getInstance();
      case 'N5':
        return Key$N5_getInstance();
      case 'N6':
        return Key$N6_getInstance();
      case 'N7':
        return Key$N7_getInstance();
      case 'N8':
        return Key$N8_getInstance();
      case 'N9':
        return Key$N9_getInstance();
      case 'SEMICOLON':
        return Key$SEMICOLON_getInstance();
      case 'EQUAL':
        return Key$EQUAL_getInstance();
      case 'A':
        return Key$A_getInstance();
      case 'B':
        return Key$B_getInstance();
      case 'C':
        return Key$C_getInstance();
      case 'D':
        return Key$D_getInstance();
      case 'E':
        return Key$E_getInstance();
      case 'F':
        return Key$F_getInstance();
      case 'G':
        return Key$G_getInstance();
      case 'H':
        return Key$H_getInstance();
      case 'I':
        return Key$I_getInstance();
      case 'J':
        return Key$J_getInstance();
      case 'K':
        return Key$K_getInstance();
      case 'L':
        return Key$L_getInstance();
      case 'M':
        return Key$M_getInstance();
      case 'N':
        return Key$N_getInstance();
      case 'O':
        return Key$O_getInstance();
      case 'P':
        return Key$P_getInstance();
      case 'Q':
        return Key$Q_getInstance();
      case 'R':
        return Key$R_getInstance();
      case 'S':
        return Key$S_getInstance();
      case 'T':
        return Key$T_getInstance();
      case 'U':
        return Key$U_getInstance();
      case 'V':
        return Key$V_getInstance();
      case 'W':
        return Key$W_getInstance();
      case 'X':
        return Key$X_getInstance();
      case 'Y':
        return Key$Y_getInstance();
      case 'Z':
        return Key$Z_getInstance();
      case 'LEFT_BRACKET':
        return Key$LEFT_BRACKET_getInstance();
      case 'BACKSLASH':
        return Key$BACKSLASH_getInstance();
      case 'RIGHT_BRACKET':
        return Key$RIGHT_BRACKET_getInstance();
      case 'GRAVE_ACCENT':
        return Key$GRAVE_ACCENT_getInstance();
      case 'WORLD_1':
        return Key$WORLD_1_getInstance();
      case 'WORLD_2':
        return Key$WORLD_2_getInstance();
      case 'ESCAPE':
        return Key$ESCAPE_getInstance();
      case 'ENTER':
        return Key$ENTER_getInstance();
      case 'TAB':
        return Key$TAB_getInstance();
      case 'BACKSPACE':
        return Key$BACKSPACE_getInstance();
      case 'INSERT':
        return Key$INSERT_getInstance();
      case 'DELETE':
        return Key$DELETE_getInstance();
      case 'RIGHT':
        return Key$RIGHT_getInstance();
      case 'LEFT':
        return Key$LEFT_getInstance();
      case 'DOWN':
        return Key$DOWN_getInstance();
      case 'UP':
        return Key$UP_getInstance();
      case 'PAGE_UP':
        return Key$PAGE_UP_getInstance();
      case 'PAGE_DOWN':
        return Key$PAGE_DOWN_getInstance();
      case 'HOME':
        return Key$HOME_getInstance();
      case 'END':
        return Key$END_getInstance();
      case 'CAPS_LOCK':
        return Key$CAPS_LOCK_getInstance();
      case 'SCROLL_LOCK':
        return Key$SCROLL_LOCK_getInstance();
      case 'NUM_LOCK':
        return Key$NUM_LOCK_getInstance();
      case 'PRINT_SCREEN':
        return Key$PRINT_SCREEN_getInstance();
      case 'PAUSE':
        return Key$PAUSE_getInstance();
      case 'F1':
        return Key$F1_getInstance();
      case 'F2':
        return Key$F2_getInstance();
      case 'F3':
        return Key$F3_getInstance();
      case 'F4':
        return Key$F4_getInstance();
      case 'F5':
        return Key$F5_getInstance();
      case 'F6':
        return Key$F6_getInstance();
      case 'F7':
        return Key$F7_getInstance();
      case 'F8':
        return Key$F8_getInstance();
      case 'F9':
        return Key$F9_getInstance();
      case 'F10':
        return Key$F10_getInstance();
      case 'F11':
        return Key$F11_getInstance();
      case 'F12':
        return Key$F12_getInstance();
      case 'F13':
        return Key$F13_getInstance();
      case 'F14':
        return Key$F14_getInstance();
      case 'F15':
        return Key$F15_getInstance();
      case 'F16':
        return Key$F16_getInstance();
      case 'F17':
        return Key$F17_getInstance();
      case 'F18':
        return Key$F18_getInstance();
      case 'F19':
        return Key$F19_getInstance();
      case 'F20':
        return Key$F20_getInstance();
      case 'F21':
        return Key$F21_getInstance();
      case 'F22':
        return Key$F22_getInstance();
      case 'F23':
        return Key$F23_getInstance();
      case 'F24':
        return Key$F24_getInstance();
      case 'F25':
        return Key$F25_getInstance();
      case 'KP_0':
        return Key$KP_0_getInstance();
      case 'KP_1':
        return Key$KP_1_getInstance();
      case 'KP_2':
        return Key$KP_2_getInstance();
      case 'KP_3':
        return Key$KP_3_getInstance();
      case 'KP_4':
        return Key$KP_4_getInstance();
      case 'KP_5':
        return Key$KP_5_getInstance();
      case 'KP_6':
        return Key$KP_6_getInstance();
      case 'KP_7':
        return Key$KP_7_getInstance();
      case 'KP_8':
        return Key$KP_8_getInstance();
      case 'KP_9':
        return Key$KP_9_getInstance();
      case 'KP_DECIMAL':
        return Key$KP_DECIMAL_getInstance();
      case 'KP_DIVIDE':
        return Key$KP_DIVIDE_getInstance();
      case 'KP_MULTIPLY':
        return Key$KP_MULTIPLY_getInstance();
      case 'KP_SUBTRACT':
        return Key$KP_SUBTRACT_getInstance();
      case 'KP_ADD':
        return Key$KP_ADD_getInstance();
      case 'KP_ENTER':
        return Key$KP_ENTER_getInstance();
      case 'KP_EQUAL':
        return Key$KP_EQUAL_getInstance();
      case 'LEFT_SHIFT':
        return Key$LEFT_SHIFT_getInstance();
      case 'LEFT_CONTROL':
        return Key$LEFT_CONTROL_getInstance();
      case 'LEFT_ALT':
        return Key$LEFT_ALT_getInstance();
      case 'LEFT_SUPER':
        return Key$LEFT_SUPER_getInstance();
      case 'RIGHT_SHIFT':
        return Key$RIGHT_SHIFT_getInstance();
      case 'RIGHT_CONTROL':
        return Key$RIGHT_CONTROL_getInstance();
      case 'RIGHT_ALT':
        return Key$RIGHT_ALT_getInstance();
      case 'RIGHT_SUPER':
        return Key$RIGHT_SUPER_getInstance();
      case 'MENU':
        return Key$MENU_getInstance();
      case 'UNDERLINE':
        return Key$UNDERLINE_getInstance();
      case 'SELECT_KEY':
        return Key$SELECT_KEY_getInstance();
      case 'UNKNOWN':
        return Key$UNKNOWN_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.input.Key.' + name);
    }
  }
  Key.valueOf_61zpoe$ = Key$valueOf;
  function GameStick(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameStick_initFields() {
    GameStick_initFields = function () {
    };
    GameStick$LEFT_instance = new GameStick('LEFT', 0, 0);
    GameStick$RIGHT_instance = new GameStick('RIGHT', 1, 1);
    GameStick$Companion_getInstance();
  }
  var GameStick$LEFT_instance;
  function GameStick$LEFT_getInstance() {
    GameStick_initFields();
    return GameStick$LEFT_instance;
  }
  var GameStick$RIGHT_instance;
  function GameStick$RIGHT_getInstance() {
    GameStick_initFields();
    return GameStick$RIGHT_instance;
  }
  function GameStick$Companion() {
    GameStick$Companion_instance = this;
    this.STICKS = GameStick$values();
  }
  GameStick$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameStick$Companion_instance = null;
  function GameStick$Companion_getInstance() {
    GameStick_initFields();
    if (GameStick$Companion_instance === null) {
      new GameStick$Companion();
    }
    return GameStick$Companion_instance;
  }
  GameStick.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameStick',
    interfaces: [Enum]
  };
  function GameStick$values() {
    return [GameStick$LEFT_getInstance(), GameStick$RIGHT_getInstance()];
  }
  GameStick.values = GameStick$values;
  function GameStick$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return GameStick$LEFT_getInstance();
      case 'RIGHT':
        return GameStick$RIGHT_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.input.GameStick.' + name);
    }
  }
  GameStick.valueOf_61zpoe$ = GameStick$valueOf;
  function GameButton(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GameButton_initFields() {
    GameButton_initFields = function () {
    };
    GameButton$LEFT_instance = new GameButton('LEFT', 0, 0);
    GameButton$RIGHT_instance = new GameButton('RIGHT', 1, 1);
    GameButton$UP_instance = new GameButton('UP', 2, 2);
    GameButton$DOWN_instance = new GameButton('DOWN', 3, 3);
    GameButton$BUTTON0_instance = new GameButton('BUTTON0', 4, 4);
    GameButton$BUTTON1_instance = new GameButton('BUTTON1', 5, 5);
    GameButton$BUTTON2_instance = new GameButton('BUTTON2', 6, 6);
    GameButton$BUTTON3_instance = new GameButton('BUTTON3', 7, 7);
    GameButton$SELECT_instance = new GameButton('SELECT', 8, 8);
    GameButton$START_instance = new GameButton('START', 9, 9);
    GameButton$SYSTEM_instance = new GameButton('SYSTEM', 10, 10);
    GameButton$L1_instance = new GameButton('L1', 11, 11);
    GameButton$R1_instance = new GameButton('R1', 12, 12);
    GameButton$L2_instance = new GameButton('L2', 13, 13);
    GameButton$R2_instance = new GameButton('R2', 14, 14);
    GameButton$L3_instance = new GameButton('L3', 15, 15);
    GameButton$R3_instance = new GameButton('R3', 16, 16);
    GameButton$LX_instance = new GameButton('LX', 17, 17);
    GameButton$LY_instance = new GameButton('LY', 18, 18);
    GameButton$RX_instance = new GameButton('RX', 19, 19);
    GameButton$RY_instance = new GameButton('RY', 20, 20);
    GameButton$BUTTON4_instance = new GameButton('BUTTON4', 21, 24);
    GameButton$BUTTON5_instance = new GameButton('BUTTON5', 22, 25);
    GameButton$BUTTON6_instance = new GameButton('BUTTON6', 23, 26);
    GameButton$BUTTON7_instance = new GameButton('BUTTON7', 24, 27);
    GameButton$BUTTON8_instance = new GameButton('BUTTON8', 25, 28);
    GameButton$Companion_getInstance();
  }
  var GameButton$LEFT_instance;
  function GameButton$LEFT_getInstance() {
    GameButton_initFields();
    return GameButton$LEFT_instance;
  }
  var GameButton$RIGHT_instance;
  function GameButton$RIGHT_getInstance() {
    GameButton_initFields();
    return GameButton$RIGHT_instance;
  }
  var GameButton$UP_instance;
  function GameButton$UP_getInstance() {
    GameButton_initFields();
    return GameButton$UP_instance;
  }
  var GameButton$DOWN_instance;
  function GameButton$DOWN_getInstance() {
    GameButton_initFields();
    return GameButton$DOWN_instance;
  }
  var GameButton$BUTTON0_instance;
  function GameButton$BUTTON0_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON0_instance;
  }
  var GameButton$BUTTON1_instance;
  function GameButton$BUTTON1_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON1_instance;
  }
  var GameButton$BUTTON2_instance;
  function GameButton$BUTTON2_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON2_instance;
  }
  var GameButton$BUTTON3_instance;
  function GameButton$BUTTON3_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON3_instance;
  }
  var GameButton$SELECT_instance;
  function GameButton$SELECT_getInstance() {
    GameButton_initFields();
    return GameButton$SELECT_instance;
  }
  var GameButton$START_instance;
  function GameButton$START_getInstance() {
    GameButton_initFields();
    return GameButton$START_instance;
  }
  var GameButton$SYSTEM_instance;
  function GameButton$SYSTEM_getInstance() {
    GameButton_initFields();
    return GameButton$SYSTEM_instance;
  }
  var GameButton$L1_instance;
  function GameButton$L1_getInstance() {
    GameButton_initFields();
    return GameButton$L1_instance;
  }
  var GameButton$R1_instance;
  function GameButton$R1_getInstance() {
    GameButton_initFields();
    return GameButton$R1_instance;
  }
  var GameButton$L2_instance;
  function GameButton$L2_getInstance() {
    GameButton_initFields();
    return GameButton$L2_instance;
  }
  var GameButton$R2_instance;
  function GameButton$R2_getInstance() {
    GameButton_initFields();
    return GameButton$R2_instance;
  }
  var GameButton$L3_instance;
  function GameButton$L3_getInstance() {
    GameButton_initFields();
    return GameButton$L3_instance;
  }
  var GameButton$R3_instance;
  function GameButton$R3_getInstance() {
    GameButton_initFields();
    return GameButton$R3_instance;
  }
  var GameButton$LX_instance;
  function GameButton$LX_getInstance() {
    GameButton_initFields();
    return GameButton$LX_instance;
  }
  var GameButton$LY_instance;
  function GameButton$LY_getInstance() {
    GameButton_initFields();
    return GameButton$LY_instance;
  }
  var GameButton$RX_instance;
  function GameButton$RX_getInstance() {
    GameButton_initFields();
    return GameButton$RX_instance;
  }
  var GameButton$RY_instance;
  function GameButton$RY_getInstance() {
    GameButton_initFields();
    return GameButton$RY_instance;
  }
  var GameButton$BUTTON4_instance;
  function GameButton$BUTTON4_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON4_instance;
  }
  var GameButton$BUTTON5_instance;
  function GameButton$BUTTON5_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON5_instance;
  }
  var GameButton$BUTTON6_instance;
  function GameButton$BUTTON6_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON6_instance;
  }
  var GameButton$BUTTON7_instance;
  function GameButton$BUTTON7_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON7_instance;
  }
  var GameButton$BUTTON8_instance;
  function GameButton$BUTTON8_getInstance() {
    GameButton_initFields();
    return GameButton$BUTTON8_instance;
  }
  function GameButton$Companion() {
    GameButton$Companion_instance = this;
    this.BUTTONS = GameButton$values();
    this.MAX = 32;
  }
  GameButton$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GameButton$Companion_instance = null;
  function GameButton$Companion_getInstance() {
    GameButton_initFields();
    if (GameButton$Companion_instance === null) {
      new GameButton$Companion();
    }
    return GameButton$Companion_instance;
  }
  GameButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GameButton',
    interfaces: [Enum]
  };
  function GameButton$values() {
    return [GameButton$LEFT_getInstance(), GameButton$RIGHT_getInstance(), GameButton$UP_getInstance(), GameButton$DOWN_getInstance(), GameButton$BUTTON0_getInstance(), GameButton$BUTTON1_getInstance(), GameButton$BUTTON2_getInstance(), GameButton$BUTTON3_getInstance(), GameButton$SELECT_getInstance(), GameButton$START_getInstance(), GameButton$SYSTEM_getInstance(), GameButton$L1_getInstance(), GameButton$R1_getInstance(), GameButton$L2_getInstance(), GameButton$R2_getInstance(), GameButton$L3_getInstance(), GameButton$R3_getInstance(), GameButton$LX_getInstance(), GameButton$LY_getInstance(), GameButton$RX_getInstance(), GameButton$RY_getInstance(), GameButton$BUTTON4_getInstance(), GameButton$BUTTON5_getInstance(), GameButton$BUTTON6_getInstance(), GameButton$BUTTON7_getInstance(), GameButton$BUTTON8_getInstance()];
  }
  GameButton.values = GameButton$values;
  function GameButton$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return GameButton$LEFT_getInstance();
      case 'RIGHT':
        return GameButton$RIGHT_getInstance();
      case 'UP':
        return GameButton$UP_getInstance();
      case 'DOWN':
        return GameButton$DOWN_getInstance();
      case 'BUTTON0':
        return GameButton$BUTTON0_getInstance();
      case 'BUTTON1':
        return GameButton$BUTTON1_getInstance();
      case 'BUTTON2':
        return GameButton$BUTTON2_getInstance();
      case 'BUTTON3':
        return GameButton$BUTTON3_getInstance();
      case 'SELECT':
        return GameButton$SELECT_getInstance();
      case 'START':
        return GameButton$START_getInstance();
      case 'SYSTEM':
        return GameButton$SYSTEM_getInstance();
      case 'L1':
        return GameButton$L1_getInstance();
      case 'R1':
        return GameButton$R1_getInstance();
      case 'L2':
        return GameButton$L2_getInstance();
      case 'R2':
        return GameButton$R2_getInstance();
      case 'L3':
        return GameButton$L3_getInstance();
      case 'R3':
        return GameButton$R3_getInstance();
      case 'LX':
        return GameButton$LX_getInstance();
      case 'LY':
        return GameButton$LY_getInstance();
      case 'RX':
        return GameButton$RX_getInstance();
      case 'RY':
        return GameButton$RY_getInstance();
      case 'BUTTON4':
        return GameButton$BUTTON4_getInstance();
      case 'BUTTON5':
        return GameButton$BUTTON5_getInstance();
      case 'BUTTON6':
        return GameButton$BUTTON6_getInstance();
      case 'BUTTON7':
        return GameButton$BUTTON7_getInstance();
      case 'BUTTON8':
        return GameButton$BUTTON8_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.input.GameButton.' + name);
    }
  }
  GameButton.valueOf_61zpoe$ = GameButton$valueOf;
  function GamepadInfo(index, connected, name, mapping, buttons, axes) {
    if (index === void 0)
      index = 0;
    if (connected === void 0)
      connected = false;
    if (name === void 0)
      name = 'unknown';
    if (mapping === void 0)
      mapping = StandardGamepadMapping_getInstance();
    if (buttons === void 0)
      buttons = 0;
    if (axes === void 0)
      axes = new Float64Array(16);
    this.index = index;
    this.connected = connected;
    this.name = name;
    this.mapping = mapping;
    this.buttons = buttons;
    this.axes = axes;
  }
  GamepadInfo.prototype.copyFrom_42hpqv$ = function (that) {
    this.index = that.index;
    this.name = that.name;
    this.mapping = that.mapping;
    this.buttons = that.buttons;
    this.connected = that.connected;
    var tmp$ = that.axes;
    var tmp$_0 = this.axes;
    var a = this.axes.length;
    var b = that.axes.length;
    arraycopy(tmp$, 0, tmp$_0, 0, Math_0.min(a, b));
  };
  GamepadInfo.prototype.get_39lcfq$ = function (button) {
    return this.mapping.get_1ntcv1$(button, this.buttons, this.axes);
  };
  GamepadInfo.prototype.toString = function () {
    return 'Gamepad[' + this.index + '][' + this.name + ']' + this.mapping.toString_8cvqit$(this.buttons, this.axes);
  };
  GamepadInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamepadInfo',
    interfaces: []
  };
  function GamepadMapping() {
  }
  GamepadMapping.prototype.getButton_dqglrj$ = function ($receiver, index) {
    return getBit($receiver, index) ? 1.0 : 0.0;
  };
  function GamepadMapping$toString$lambda(closure$buttons, closure$axes, this$GamepadMapping) {
    return function (it) {
      return it.name + '=' + this$GamepadMapping.get_1ntcv1$(it, closure$buttons, closure$axes);
    };
  }
  GamepadMapping.prototype.toString_8cvqit$ = function (buttons, axes) {
    return this.id + '(' + joinToString(GameButton$values(), ', ', void 0, void 0, void 0, void 0, GamepadMapping$toString$lambda(buttons, axes, this)) + ')';
  };
  GamepadMapping.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamepadMapping',
    interfaces: []
  };
  function StandardGamepadMapping() {
    StandardGamepadMapping_instance = this;
    GamepadMapping.call(this);
    this.id_2nbyu7$_0 = 'Standard';
  }
  Object.defineProperty(StandardGamepadMapping.prototype, 'id', {
    get: function () {
      return this.id_2nbyu7$_0;
    }
  });
  StandardGamepadMapping.prototype.get_1ntcv1$ = function (button, buttons, axes) {
    var tmp$;
    switch (button.name) {
      case 'BUTTON0':
        tmp$ = this.getButton_dqglrj$(buttons, 0);
        break;
      case 'BUTTON1':
        tmp$ = this.getButton_dqglrj$(buttons, 1);
        break;
      case 'BUTTON2':
        tmp$ = this.getButton_dqglrj$(buttons, 2);
        break;
      case 'BUTTON3':
        tmp$ = this.getButton_dqglrj$(buttons, 3);
        break;
      case 'L1':
        tmp$ = this.getButton_dqglrj$(buttons, 4);
        break;
      case 'R1':
        tmp$ = this.getButton_dqglrj$(buttons, 5);
        break;
      case 'L2':
        tmp$ = this.getButton_dqglrj$(buttons, 6);
        break;
      case 'R2':
        tmp$ = this.getButton_dqglrj$(buttons, 7);
        break;
      case 'SELECT':
        tmp$ = this.getButton_dqglrj$(buttons, 8);
        break;
      case 'START':
        tmp$ = this.getButton_dqglrj$(buttons, 9);
        break;
      case 'L3':
        tmp$ = this.getButton_dqglrj$(buttons, 10);
        break;
      case 'R3':
        tmp$ = this.getButton_dqglrj$(buttons, 11);
        break;
      case 'UP':
        tmp$ = this.getButton_dqglrj$(buttons, 12);
        break;
      case 'DOWN':
        tmp$ = this.getButton_dqglrj$(buttons, 13);
        break;
      case 'LEFT':
        tmp$ = this.getButton_dqglrj$(buttons, 14);
        break;
      case 'RIGHT':
        tmp$ = this.getButton_dqglrj$(buttons, 15);
        break;
      case 'SYSTEM':
        tmp$ = this.getButton_dqglrj$(buttons, 16);
        break;
      case 'LX':
        tmp$ = axes[0];
        break;
      case 'LY':
        tmp$ = axes[1];
        break;
      case 'RX':
        tmp$ = axes[2];
        break;
      case 'RY':
        tmp$ = axes[3];
        break;
      default:tmp$ = 0.0;
        break;
    }
    return tmp$;
  };
  StandardGamepadMapping.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'StandardGamepadMapping',
    interfaces: [GamepadMapping]
  };
  var StandardGamepadMapping_instance = null;
  function StandardGamepadMapping_getInstance() {
    if (StandardGamepadMapping_instance === null) {
      new StandardGamepadMapping();
    }
    return StandardGamepadMapping_instance;
  }
  var lightLog;
  function LightComponentsFactory() {
  }
  LightComponentsFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'LightComponentsFactory',
    interfaces: []
  };
  function LightQuality(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LightQuality_initFields() {
    LightQuality_initFields = function () {
    };
    LightQuality$QUALITY_instance = new LightQuality('QUALITY', 0);
    LightQuality$PERFORMANCE_instance = new LightQuality('PERFORMANCE', 1);
  }
  var LightQuality$QUALITY_instance;
  function LightQuality$QUALITY_getInstance() {
    LightQuality_initFields();
    return LightQuality$QUALITY_instance;
  }
  var LightQuality$PERFORMANCE_instance;
  function LightQuality$PERFORMANCE_getInstance() {
    LightQuality_initFields();
    return LightQuality$PERFORMANCE_instance;
  }
  LightQuality.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LightQuality',
    interfaces: [Enum]
  };
  function LightQuality$values() {
    return [LightQuality$QUALITY_getInstance(), LightQuality$PERFORMANCE_getInstance()];
  }
  LightQuality.values = LightQuality$values;
  function LightQuality$valueOf(name) {
    switch (name) {
      case 'QUALITY':
        return LightQuality$QUALITY_getInstance();
      case 'PERFORMANCE':
        return LightQuality$PERFORMANCE_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.light.LightQuality.' + name);
    }
  }
  LightQuality.valueOf_61zpoe$ = LightQuality$valueOf;
  function LightComponents() {
    this.quality = LightQuality$PERFORMANCE_getInstance();
    this.insideEventHandler_wpylzi$_0 = false;
    this.eds_70fvdu$_0 = LinkedHashMap_init();
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
    kind: Kind_CLASS,
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
  function LightComponents$getEventListener$lambda$ObjectLiteral(closure$c, this$LightComponents) {
    this.closure$c = closure$c;
    this.this$LightComponents = this$LightComponents;
    EventDispatcher$Mixin.call(this);
    this.registeredClasses = LinkedHashSet_init();
  }
  LightComponents$getEventListener$lambda$ObjectLiteral.prototype.addEventListener_htgam$ = function (clazz, handler) {
    if (!this.registeredClasses.contains_11rb$(clazz)) {
      this.registeredClasses.add_11rb$(clazz);
      this.this$LightComponents.registerEventKind_7v19vx$(this.closure$c, clazz, this);
    }
    return EventDispatcher$Mixin.prototype.addEventListener_htgam$.call(this, clazz, handler);
  };
  function LightComponents$getEventListener$lambda$ObjectLiteral$dispatch$lambda(this$, closure$clazz, closure$event) {
    return function () {
      EventDispatcher$Mixin.prototype.dispatch_dt5jzj$.call(this$, closure$clazz, closure$event);
      return Unit;
    };
  }
  LightComponents$getEventListener$lambda$ObjectLiteral.prototype.dispatch_dt5jzj$ = function (clazz, event) {
    this.this$LightComponents.insideEventHandler_klfg04$(LightComponents$getEventListener$lambda$ObjectLiteral$dispatch$lambda(this, clazz, event));
  };
  LightComponents$getEventListener$lambda$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [EventDispatcher$Mixin]
  };
  LightComponents.prototype.getEventListener_za3rmp$ = function (c) {
    var $receiver = this.eds_70fvdu$_0;
    var tmp$;
    var value = $receiver.get_11rb$(c);
    if (value == null) {
      var answer = new LightComponents$getEventListener$lambda$ObjectLiteral(c, this);
      $receiver.put_xwzc9p$(c, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  LightComponents.prototype.register_yp9zl7$ = function (c, clazz, handler) {
    return this.getEventListener_za3rmp$(c).addEventListener_htgam$(clazz, handler);
  };
  LightComponents.prototype.registerEventKind_7v19vx$ = function (c, clazz, ed) {
    return lang.DummyCloseable;
  };
  LightComponents.prototype.getDpi = function () {
    return 96.0;
  };
  LightComponents.prototype.getDevicePixelRatio = function () {
    return 1.0;
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
  LightComponents.prototype.dialogPrompt_h80hvh$$default = function (c, message, initialValue, continuation) {
    throw UnsupportedOperationException_init();
  };
  LightComponents.prototype.dialogPrompt_h80hvh$ = function (c, message, initialValue, continuation, callback$default) {
    if (initialValue === void 0)
      initialValue = '';
    return callback$default ? callback$default(c, message, initialValue, continuation) : this.dialogPrompt_h80hvh$$default(c, message, initialValue, continuation);
  };
  LightComponents.prototype.dialogOpenFile_hwpqgh$ = function (c, filter, continuation) {
    throw UnsupportedOperationException_init();
  };
  LightComponents.prototype.openURL_61zpoe$ = function (url) {
  };
  LightComponents.prototype.open_3ekr7n$ = function (file) {
    this.openURL_61zpoe$(file.absolutePath);
  };
  LightComponents.prototype.configuredFrame_za3rmp$ = function (handle) {
  };
  LightComponents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LightComponents',
    interfaces: []
  };
  function defaultLightFactory$lambda() {
    return NativeLightsComponentsFactory_getInstance();
  }
  var defaultLightFactory;
  function get_defaultLightFactory() {
    return defaultLightFactory.value;
  }
  function defaultLight(context) {
    return get_defaultLightFactory().create_1fupul$(context);
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
    LightType$COMBO_BOX_instance = new LightType('COMBO_BOX', 11);
    LightType$RADIO_BUTTON_instance = new LightType('RADIO_BUTTON', 12);
    LightType$SLIDER_instance = new LightType('SLIDER', 13);
    LightType$TABPANE_instance = new LightType('TABPANE', 14);
    LightType$TABPAGE_instance = new LightType('TABPAGE', 15);
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
  var LightType$COMBO_BOX_instance;
  function LightType$COMBO_BOX_getInstance() {
    LightType_initFields();
    return LightType$COMBO_BOX_instance;
  }
  var LightType$RADIO_BUTTON_instance;
  function LightType$RADIO_BUTTON_getInstance() {
    LightType_initFields();
    return LightType$RADIO_BUTTON_instance;
  }
  var LightType$SLIDER_instance;
  function LightType$SLIDER_getInstance() {
    LightType_initFields();
    return LightType$SLIDER_instance;
  }
  var LightType$TABPANE_instance;
  function LightType$TABPANE_getInstance() {
    LightType_initFields();
    return LightType$TABPANE_instance;
  }
  var LightType$TABPAGE_instance;
  function LightType$TABPAGE_getInstance() {
    LightType_initFields();
    return LightType$TABPAGE_instance;
  }
  LightType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LightType',
    interfaces: [Enum]
  };
  function LightType$values() {
    return [LightType$FRAME_getInstance(), LightType$CONTAINER_getInstance(), LightType$BUTTON_getInstance(), LightType$PROGRESS_getInstance(), LightType$IMAGE_getInstance(), LightType$LABEL_getInstance(), LightType$TEXT_FIELD_getInstance(), LightType$TEXT_AREA_getInstance(), LightType$CHECK_BOX_getInstance(), LightType$SCROLL_PANE_getInstance(), LightType$AGCANVAS_getInstance(), LightType$COMBO_BOX_getInstance(), LightType$RADIO_BUTTON_getInstance(), LightType$SLIDER_getInstance(), LightType$TABPANE_getInstance(), LightType$TABPAGE_getInstance()];
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
      case 'COMBO_BOX':
        return LightType$COMBO_BOX_getInstance();
      case 'RADIO_BUTTON':
        return LightType$RADIO_BUTTON_getInstance();
      case 'SLIDER':
        return LightType$SLIDER_getInstance();
      case 'TABPANE':
        return LightType$TABPANE_getInstance();
      case 'TABPAGE':
        return LightType$TABPAGE_getInstance();
      default:throwISE('No enum constant com.soywiz.korui.light.LightType.' + name);
    }
  }
  LightType.valueOf_61zpoe$ = LightType$valueOf;
  function ComboBoxItem(obj, string) {
    this.obj = obj;
    this.string = string;
  }
  ComboBoxItem.prototype.toString = function () {
    return this.string;
  };
  ComboBoxItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComboBoxItem',
    interfaces: []
  };
  ComboBoxItem.prototype.component1 = function () {
    return this.obj;
  };
  ComboBoxItem.prototype.component2 = function () {
    return this.string;
  };
  ComboBoxItem.prototype.copy_hvn9da$ = function (obj, string) {
    return new ComboBoxItem(obj === void 0 ? this.obj : obj, string === void 0 ? this.string : string);
  };
  ComboBoxItem.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.obj) | 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    return result;
  };
  ComboBoxItem.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.obj, other.obj) && Kotlin.equals(this.string, other.string)))));
  };
  function LightAction(name) {
    LightAction$Companion_getInstance();
    this.name = name;
  }
  function LightAction$Companion() {
    LightAction$Companion_instance = this;
    this.FOCUS = new LightAction('FOCUS');
  }
  LightAction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
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
    return (tmp$ = v) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  LightAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LightAction',
    interfaces: []
  };
  function LightProperty(name, default_0) {
    LightProperty$Companion_getInstance();
    this.name = name;
    this.default = default_0;
  }
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
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
    this.COMBO_BOX_ITEMS = new LightProperty('COMBO_BOX_ITEMS', emptyList());
    this.SELECTED_INDEX = new LightProperty('SELECTED_INDEX', 0);
    this.NAME = new LightProperty('NAME', 'Name');
  }
  LightProperty$Companion.$metadata$ = {
    kind: Kind_OBJECT,
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
    return (tmp$ = v) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  LightProperty.prototype.getOrDefault_s8jyv4$ = function (v) {
    var tmp$;
    return v == null ? this.default : (tmp$ = v) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  LightProperty.prototype.toString = function () {
    return 'LightProperty[' + this.name + ']';
  };
  LightProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LightProperty',
    interfaces: []
  };
  function ag$lambda() {
    return null;
  }
  var ag;
  var ag_metadata = new PropertyMetadata('ag');
  function get_ag($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_1 = $receiver.extra;
    tmp$_0 = (tmp$ = ag.name) != null ? tmp$ : ag_metadata.callableName;
    return (tmp$_3 = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE()) != null ? tmp$_3 : ag.default();
  }
  var lmapOf = $module$kds_js.com.soywiz.kds.lmapOf_qfcya0$;
  function set_ag($receiver, ag_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = ag.name) != null ? tmp$ : ag_metadata.callableName;
    tmp$_2 = (tmp$_1 = ag_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function LogLightComponents() {
    LightComponents.call(this);
    this.log = ArrayList_init();
    this.lastIdPerType = LinkedHashMap_init();
  }
  LogLightComponents.prototype.create_3wpq0m$ = function (type) {
    var id = incr(this.lastIdPerType, type, 1) - 1 | 0;
    var $receiver = this.log;
    var element = 'create(' + type + ')=' + id;
    $receiver.add_11rb$(element);
    return new LightComponents$LightComponentInfo(type.toString() + id);
  };
  LogLightComponents.prototype.setParent_hfmcy5$ = function (c, parent) {
    var $receiver = this.log;
    var element = 'setParent(' + c + ',' + toString(parent) + ')';
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
    kind: Kind_CLASS,
    simpleName: 'LogLightComponents',
    interfaces: [LightComponents]
  };
  function React() {
    React_instance = this;
  }
  React.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'React',
    interfaces: []
  };
  var React_instance = null;
  function React_getInstance() {
    if (React_instance === null) {
      new React();
    }
    return React_instance;
  }
  function ReactComponent() {
    this.virtualApp_mwxnc5$_lsjfv2$_0 = this.virtualApp_mwxnc5$_lsjfv2$_0;
    this.virtualRoot_b6fho$_q7a4qm$_0 = this.virtualRoot_b6fho$_q7a4qm$_0;
    this.root_lxaehl$_a72mo8$_0 = this.root_lxaehl$_a72mo8$_0;
    this._state_jc84d3$_9vfuxk$_0 = this._state_jc84d3$_9vfuxk$_0;
  }
  Object.defineProperty(ReactComponent.prototype, 'virtualApp_mwxnc5$_0', {
    get: function () {
      if (this.virtualApp_mwxnc5$_lsjfv2$_0 == null)
        return throwUPAE('virtualApp');
      return this.virtualApp_mwxnc5$_lsjfv2$_0;
    },
    set: function (virtualApp) {
      this.virtualApp_mwxnc5$_lsjfv2$_0 = virtualApp;
    }
  });
  Object.defineProperty(ReactComponent.prototype, 'virtualRoot_b6fho$_0', {
    get: function () {
      if (this.virtualRoot_b6fho$_q7a4qm$_0 == null)
        return throwUPAE('virtualRoot');
      return this.virtualRoot_b6fho$_q7a4qm$_0;
    },
    set: function (virtualRoot) {
      this.virtualRoot_b6fho$_q7a4qm$_0 = virtualRoot;
    }
  });
  Object.defineProperty(ReactComponent.prototype, 'root_lxaehl$_0', {
    get: function () {
      if (this.root_lxaehl$_a72mo8$_0 == null)
        return throwUPAE('root');
      return this.root_lxaehl$_a72mo8$_0;
    },
    set: function (root) {
      this.root_lxaehl$_a72mo8$_0 = root;
    }
  });
  Object.defineProperty(ReactComponent.prototype, '_state_jc84d3$_0', {
    get: function () {
      if (this._state_jc84d3$_9vfuxk$_0 == null)
        return throwUPAE('_state');
      return this._state_jc84d3$_9vfuxk$_0;
    },
    set: function (_state) {
      this._state_jc84d3$_9vfuxk$_0 = _state;
    }
  });
  function ReactComponent$set_ReactComponent$state$lambda(this$ReactComponent_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ReactComponent$set_ReactComponent$state$lambda(this$ReactComponent_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ReactComponent$set_ReactComponent$state$lambda(this$ReactComponent_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ReactComponent = this$ReactComponent_0;
  }
  Coroutine$ReactComponent$set_ReactComponent$state$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ReactComponent$set_ReactComponent$state$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ReactComponent$set_ReactComponent$state$lambda.prototype.constructor = Coroutine$ReactComponent$set_ReactComponent$state$lambda;
  Coroutine$ReactComponent$set_ReactComponent$state$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var diff = false;
            if (diff) {
              this.local$this$ReactComponent.virtualRoot_b6fho$_0.removeAll();
              this.state_0 = 3;
              this.result_0 = this.local$this$ReactComponent.render_r5smt6$(this.local$this$ReactComponent.virtualRoot_b6fho$_0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$this$ReactComponent.root_lxaehl$_0.removeAll();
              this.state_0 = 2;
              this.result_0 = this.local$this$ReactComponent.render_r5smt6$(this.local$this$ReactComponent.root_lxaehl$_0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 4;
            continue;
          case 3:
            synchronizeTo(this.local$this$ReactComponent.virtualRoot_b6fho$_0, this.local$this$ReactComponent.root_lxaehl$_0);
            this.state_0 = 4;
            continue;
          case 4:
            return this.local$this$ReactComponent.root_lxaehl$_0.relayout();
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  Object.defineProperty(ReactComponent.prototype, 'state', {
    get: function () {
      return this._state_jc84d3$_0;
    },
    set: function (value) {
      this._state_jc84d3$_0 = value;
      launchImmediately(async.KorioDefaultDispatcher, void 0, ReactComponent$set_ReactComponent$state$lambda(this));
    }
  });
  ReactComponent.prototype.attach_a1ycvf$ = function ($receiver, root, initialState) {
    this.virtualApp_mwxnc5$_0 = new Application(root.app.coroutineContext, DummyLightComponents_getInstance());
    this.virtualRoot_b6fho$_0 = root.clone_s67df2$(this.virtualApp_mwxnc5$_0);
    this.root_lxaehl$_0 = root;
    this.state = initialState;
  };
  ReactComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactComponent',
    interfaces: []
  };
  function attachReactComponent($receiver, component, state) {
    component.attach_a1ycvf$(React_getInstance(), $receiver, state);
  }
  function reactFrame($receiver, component, state, title, width, height, icon, continuation) {
    if (width === void 0)
      width = 640;
    if (height === void 0)
      height = 480;
    if (icon === void 0)
      icon = null;
    var $receiver_0 = framePre($receiver, title, width, height, icon);
    attachReactComponent($receiver_0, component, state);
    framePost($receiver, $receiver_0);
    return $receiver_0;
  }
  function ReactUpdater(real, virtualNext) {
    this.real = real;
    this.virtualNext = virtualNext;
    this.realComponentsByKey_0 = getComponentsByKey(this.real);
  }
  ReactUpdater.prototype.reactUpdate = function () {
    this.real.copyStateFrom_o3ssl7$(this.virtualNext);
    this.reactUpdate_cybqhm$(this.real, this.virtualNext);
  };
  var Collection = Kotlin.kotlin.collections.Collection;
  var Map = Kotlin.kotlin.collections.Map;
  ReactUpdater.prototype.reactUpdate_cybqhm$ = function (real, virtualNext) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var realVirtualZip = zip(real.children, virtualNext.children);
    var tmp$_4 = real.children.size === virtualNext.children.size;
    if (tmp$_4) {
      var all$result;
      all$break: do {
        var tmp$_5;
        if (Kotlin.isType(realVirtualZip, Collection) && realVirtualZip.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$_5 = realVirtualZip.iterator();
        while (tmp$_5.hasNext()) {
          var element = tmp$_5.next();
          if (!equals(element.first.toString(), element.second.toString())) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      tmp$_4 = all$result;
    }
    if (tmp$_4) {
      tmp$ = realVirtualZip.iterator();
      while (tmp$.hasNext()) {
        var tmp$_6 = tmp$.next();
        var realChild = tmp$_6.component1()
        , virtualChild = tmp$_6.component2();
        realChild.copyStateFrom_o3ssl7$(virtualChild);
        if (Kotlin.isType(realChild, Container)) {
          this.reactUpdate_cybqhm$(realChild, Kotlin.isType(tmp$_0 = virtualChild, Container) ? tmp$_0 : throwCCE());
        }
      }
    }
     else {
      real.removeAll();
      tmp$_1 = virtualNext.children.iterator();
      while (tmp$_1.hasNext()) {
        var virtualChild_0 = tmp$_1.next();
        var $receiver = this.realComponentsByKey_0;
        var key = get_key(virtualChild_0);
        var tmp$_7;
        if ((Kotlin.isType(tmp$_7 = $receiver, Map) ? tmp$_7 : throwCCE()).containsKey_11rb$(key)) {
          var $receiver_0 = this.realComponentsByKey_0;
          var key_0 = get_key(virtualChild_0);
          var tmp$_8;
          var $receiver_1 = ensureNotNull((Kotlin.isType(tmp$_8 = $receiver_0, Map) ? tmp$_8 : throwCCE()).get_11rb$(key_0));
          $receiver_1.copyStateFrom_o3ssl7$(virtualChild_0);
          tmp$_2 = $receiver_1;
        }
         else {
          tmp$_2 = virtualChild_0.clone_s67df2$(real.app);
        }
        var realChild_0 = tmp$_2;
        if (Kotlin.isType(realChild_0, Container)) {
          this.reactUpdate_cybqhm$(realChild_0, Kotlin.isType(tmp$_3 = virtualChild_0, Container) ? tmp$_3 : throwCCE());
        }
        real.add_x0aukp$(realChild_0);
      }
    }
  };
  ReactUpdater.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ReactUpdater',
    interfaces: []
  };
  function synchronizeTo($receiver, real) {
    (new ReactUpdater(real, $receiver)).reactUpdate();
  }
  function getComponentsByKey($receiver, out) {
    if (out === void 0)
      out = LinkedHashMap_init();
    var tmp$;
    if (get_key($receiver) != null) {
      var key = ensureNotNull(get_key($receiver));
      out.put_xwzc9p$(key, $receiver);
    }
    if (Kotlin.isType($receiver, Container)) {
      tmp$ = $receiver.children.iterator();
      while (tmp$.hasNext()) {
        var child = tmp$.next();
        getComponentsByKey(child, out);
      }
    }
    return out;
  }
  function DummyLightComponents() {
    DummyLightComponents_instance = this;
    LightComponents.call(this);
  }
  DummyLightComponents.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DummyLightComponents',
    interfaces: [LightComponents]
  };
  var DummyLightComponents_instance = null;
  function DummyLightComponents_getInstance() {
    if (DummyLightComponents_instance === null) {
      new DummyLightComponents();
    }
    return DummyLightComponents_instance;
  }
  function key$lambda() {
    return null;
  }
  var key;
  var key_metadata = new PropertyMetadata('key');
  function get_key($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_1 = $receiver.extra;
    tmp$_0 = (tmp$ = key.name) != null ? tmp$ : key_metadata.callableName;
    return (tmp$_3 = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE()) != null ? tmp$_3 : key.default();
  }
  function set_key($receiver, key_0) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = key.name) != null ? tmp$ : key_metadata.callableName;
    tmp$_2 = (tmp$_1 = key_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
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
  Style.prototype.copyFrom_n0jn2q$ = function (other) {
    this.position = other.position;
    this.size.copyFrom_ae35fa$(other.size);
    this.minSize.copyFrom_ae35fa$(other.minSize);
    this.maxSize.copyFrom_ae35fa$(other.maxSize);
    this.padding.setTo_7r3nag$(other.padding);
    this.top = other.top;
    this.bottom = other.bottom;
    this.left = other.left;
    this.right = other.right;
  };
  Style.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_INTERFACE,
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
    this.app_h41u4e$_0 = app;
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
    this.eventListener_jppo6j$_0 = lazy(Component$eventListener$lambda(this));
    this.parent_ahormh$_0 = null;
    this.mouseX = 0;
    this.mouseY = 0;
    this.visible_ycdo4v$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().VISIBLE);
  }
  Object.defineProperty(Component.prototype, 'app', {
    get: function () {
      return this.app_h41u4e$_0;
    }
  });
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
    kind: Kind_CLASS,
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
  Object.defineProperty(Component.prototype, 'eventListener', {
    get: function () {
      return this.eventListener_jppo6j$_0.value;
    }
  });
  Component.prototype.addEventListener_htgam$ = function (clazz, handler) {
    return this.eventListener.addEventListener_htgam$(clazz, handler);
  };
  Component.prototype.dispatch_dt5jzj$ = function (clazz, event) {
    this.eventListener.dispatch_dt5jzj$(clazz, event);
  };
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
    if (reset || !equals(this.properties.get_11rb$(key), value)) {
      this.properties.put_xwzc9p$(key, value);
      this.lc.setProperty_qiitpl$(this.handle, key, value);
    }
  };
  Component.prototype.getProperty_93jcji$ = function (key) {
    var tmp$;
    var $receiver = this.properties;
    var tmp$_0;
    return (Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(key) ? (tmp$ = this.properties.get_11rb$(key)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE() : key.default;
  };
  Component.prototype.setBoundsInternal_t9mhyo$ = function (bounds) {
    return this.setBoundsInternal_tjonv8$(bounds.x, bounds.y, bounds.width, bounds.height);
  };
  Component.prototype.relayout = function () {
    return this.setBoundsAndRelayout_t9mhyo$(this.actualBounds);
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
      var tmp$, tmp$_0;
      if (!equals(this.parent_ahormh$_0, newParent)) {
        var old = this.parent_ahormh$_0;
        (tmp$ = old != null ? old.children : null) != null ? tmp$.remove_11rb$(this) : null;
        this.parent_ahormh$_0 = newParent;
        (tmp$_0 = newParent != null ? newParent.children : null) != null ? tmp$_0.add_11rb$(this) : null;
        this.lc.setParent_hfmcy5$(this.handle, newParent != null ? newParent.handle : null);
        newParent != null ? (newParent.invalidate(), Unit) : null;
        this.ancestorChanged_5m6hec$(old, newParent);
      }
    }
  });
  Object.defineProperty(Component.prototype, 'root', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$ = this.parent) != null ? tmp$.root : null) != null ? tmp$_1 : (tmp$_0 = this) == null || Kotlin.isType(tmp$_0, Container) ? tmp$_0 : null;
    }
  });
  Object.defineProperty(Component.prototype, 'parentFrame', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$ = this) == null || Kotlin.isType(tmp$, Frame) ? tmp$ : null) != null ? tmp$_1 : (tmp$_0 = this.parent) != null ? tmp$_0.parentFrame : null;
    }
  });
  Component.prototype.ancestorChanged_5m6hec$ = function (old, newParent) {
  };
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, visible);
      (tmp$ = $this.setHandler) != null ? tmp$(visible) : null;
    }
  });
  Component.prototype.toString = function () {
    return 'Component(' + this.type + ')';
  };
  Component.prototype.focus = function () {
    this.lc.callAction_rg4qv$(this.handle, LightAction$Companion_getInstance().FOCUS, null);
  };
  Component.prototype.copyStateFrom_qxphw6$ = function (props) {
    var tmp$;
    tmp$ = props.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var prop = tmp$_0.key;
      var value = tmp$_0.value;
      this.setProperty_aa6fc1$(prop, value);
    }
  };
  Component.prototype.copyStateFrom_o3ssl7$ = function (other) {
    this.copyStateFrom_qxphw6$(other.properties);
    this.style = other.style;
    this.eventListener.copyFrom_llfj4l$(other.eventListener);
  };
  Component.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new Component(newApp, this.type);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  Object.defineProperty(Component.prototype, 'extra', {
    get: function () {
      return this.$delegate_o3ssl7$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_o3ssl7$_0.extra = tmp$;
    }
  });
  function Component$eventListener$lambda(this$Component) {
    return function () {
      return this$Component.lc.getEventListener_za3rmp$(this$Component.handle);
    };
  }
  Component.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Component',
    interfaces: [ApplicationAware, EventDispatcher, Extra, Styled]
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
  Container.prototype.remove_x0aukp$ = function (other) {
    other.parent = null;
    return other;
  };
  Container.prototype.removeAll = function () {
    var tmp$;
    tmp$ = reversed(toList(this.children)).iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      child.parent = null;
    }
  };
  Container.prototype.ancestorChanged_5m6hec$ = function (old, newParent) {
    var tmp$;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      child.ancestorChanged_5m6hec$(old, newParent);
    }
  };
  Container.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new Container(newApp, this.layout, this.type);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  Container.prototype.toString = function () {
    return 'Container(' + this.type + ')';
  };
  Container.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Container',
    interfaces: [Component]
  };
  function ScrollPane(app, layout) {
    Container.call(this, app, layout, LightType$SCROLL_PANE_getInstance());
  }
  ScrollPane.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new ScrollPane(newApp, this.layout);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  ScrollPane.prototype.toString = function () {
    return 'ScrollPane';
  };
  ScrollPane.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScrollPane',
    interfaces: [Container]
  };
  function TabPane(app) {
    Container.call(this, app, new LayeredLayout(app), LightType$TABPANE_getInstance());
  }
  TabPane.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new TabPane(newApp);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  TabPane.prototype.toString = function () {
    return 'TabPane';
  };
  TabPane.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TabPane',
    interfaces: [Container]
  };
  function TabPage(app) {
    Container.call(this, app, new LayeredLayout(app), LightType$TABPAGE_getInstance());
    this.title_aelxj8$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().NAME, true);
  }
  Object.defineProperty(TabPage.prototype, 'title', {
    get: function () {
      var $this = this.title_aelxj8$_0;
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
      var $this = this.title_aelxj8$_0;
      var tmp$;
      this.setProperty_aa6fc1$($this.key, title);
      (tmp$ = $this.setHandler) != null ? tmp$(title) : null;
    }
  });
  TabPage.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new TabPage(newApp);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  TabPage.prototype.toString = function () {
    return 'TabPage';
  };
  TabPage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TabPage',
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, title);
      (tmp$ = $this.setHandler) != null ? tmp$(title) : null;
    }
  });
  Object.defineProperty(Frame.prototype, 'icon', {
    get: function () {
      var $this = this.icon_d1vkig$_0;
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, icon);
      (tmp$ = $this.setHandler) != null ? tmp$(icon) : null;
    }
  });
  Object.defineProperty(Frame.prototype, 'bgcolor', {
    get: function () {
      var $this = this.bgcolor_jnwmqz$_0;
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, bgcolor);
      (tmp$ = $this.setHandler) != null ? tmp$(bgcolor) : null;
    }
  });
  Frame.prototype.dialogOpenFile_61zpoe$ = function (filter, continuation) {
    if (filter === void 0)
      filter = '';
    if (!this.lc.insideEventHandler)
      throw IllegalStateException_init("Can't open file dialog outside an event");
    return this.lc.dialogOpenFile_hwpqgh$(this.handle, filter, continuation);
  };
  Frame.prototype.prompt_puj7f4$ = function (message, initialValue, continuation) {
    if (initialValue === void 0)
      initialValue = '';
    return this.lc.dialogPrompt_h80hvh$(this.handle, message, initialValue, continuation);
  };
  Frame.prototype.alert_61zpoe$ = function (message, continuation) {
    return this.lc.dialogAlert_hwpqgh$(this.handle, message, continuation);
  };
  Frame.prototype.openURL_61zpoe$ = function (url) {
    this.lc.openURL_61zpoe$(url);
  };
  function Frame$onDropFiles$lambda(closure$enter, closure$exit, closure$drop) {
    return function (it) {
      var tmp$;
      switch (it.type.name) {
        case 'ENTER':
          closure$enter();
          break;
        case 'EXIT':
          closure$exit();
          break;
        case 'DROP':
          closure$drop((tmp$ = it.files) != null ? tmp$ : emptyList());
          break;
        default:Kotlin.noWhenBranchMatched();
          break;
      }
      return Unit;
    };
  }
  Frame.prototype.onDropFiles_yd2xun$ = function (enter, exit, drop) {
    return this.eventListener.addEventListener_htgam$(getKClass(DropFileEvent), Frame$onDropFiles$lambda(enter, exit, drop));
  };
  Frame.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new Frame(newApp, this.title);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  Frame.prototype.toString = function () {
    return 'Frame';
  };
  Frame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Frame',
    interfaces: [Container]
  };
  function AgCanvas(app) {
    Component.call(this, app, LightType$AGCANVAS_getInstance());
    var tmp$;
    var tmp$_0;
    if ((tmp$ = get_ag(this.componentInfo)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init('AgCanvas:componentInfo.ag == null'.toString());
    }
    this.ag_oaxj5w$_0 = tmp$_0;
  }
  Object.defineProperty(AgCanvas.prototype, 'ag', {
    get: function () {
      return this.ag_oaxj5w$_0;
    }
  });
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
  AgCanvas.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new AgCanvas(newApp);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  AgCanvas.prototype.toString = function () {
    return 'AGCanvas';
  };
  AgCanvas.$metadata$ = {
    kind: Kind_CLASS,
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, text);
      (tmp$ = $this.setHandler) != null ? tmp$(text) : null;
    }
  });
  Button.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new Button(newApp, this.text);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  Button.prototype.toString = function () {
    return 'Button';
  };
  Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [Component]
  };
  function ComboBox(app, items, toString) {
    if (toString === void 0)
      toString = ComboBox_init$lambda;
    Component.call(this, app, LightType$COMBO_BOX_getInstance());
    this.toString_0 = toString;
    this.rawItems_0 = emptyList();
    this.internalItems_i5lac0$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().COMBO_BOX_ITEMS);
    this.selectedIndex_tmhntw$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().SELECTED_INDEX, true);
    this.items = items;
  }
  Object.defineProperty(ComboBox.prototype, 'internalItems_0', {
    get: function () {
      var $this = this.internalItems_i5lac0$_0;
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
    set: function (internalItems) {
      var $this = this.internalItems_i5lac0$_0;
      var tmp$;
      this.setProperty_aa6fc1$($this.key, internalItems);
      (tmp$ = $this.setHandler) != null ? tmp$(internalItems) : null;
    }
  });
  Object.defineProperty(ComboBox.prototype, 'selectedIndex', {
    get: function () {
      var $this = this.selectedIndex_tmhntw$_0;
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
    set: function (selectedIndex) {
      var $this = this.selectedIndex_tmhntw$_0;
      var tmp$;
      this.setProperty_aa6fc1$($this.key, selectedIndex);
      (tmp$ = $this.setHandler) != null ? tmp$(selectedIndex) : null;
    }
  });
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  Object.defineProperty(ComboBox.prototype, 'items', {
    get: function () {
      return this.rawItems_0;
    },
    set: function (value) {
      this.rawItems_0 = toList(value);
      var $receiver = this.rawItems_0;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(new ComboBoxItem(item, this.toString_0(item)));
      }
      this.internalItems_0 = destination;
    }
  });
  Object.defineProperty(ComboBox.prototype, 'selectedItem', {
    get: function () {
      return getOrNull(this.rawItems_0, this.selectedIndex);
    },
    set: function (value) {
      this.selectedIndex = indexOf(this.rawItems_0, value);
    }
  });
  function ComboBox$change$lambda(closure$callback) {
    return function (it) {
      closure$callback();
      return Unit;
    };
  }
  ComboBox.prototype.change_o14v8n$ = function (callback) {
    this.addEventListener_htgam$(getKClass(ChangeEvent), ComboBox$change$lambda(callback));
  };
  ComboBox.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new ComboBox(newApp, this.items);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  ComboBox.prototype.toString = function () {
    return 'ComboBox';
  };
  function ComboBox_init$lambda(it) {
    return toString(it);
  }
  ComboBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComboBox',
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, text);
      (tmp$ = $this.setHandler) != null ? tmp$(text) : null;
    }
  });
  Label.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new Label(newApp, this.text);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  Label.prototype.toString = function () {
    return 'Label';
  };
  Label.$metadata$ = {
    kind: Kind_CLASS,
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, text);
      (tmp$ = $this.setHandler) != null ? tmp$(text) : null;
    }
  });
  TextField.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new Label(newApp, this.text);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  TextField.prototype.toString = function () {
    return 'TextField';
  };
  TextField.$metadata$ = {
    kind: Kind_CLASS,
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, text);
      (tmp$ = $this.setHandler) != null ? tmp$(text) : null;
    }
  });
  TextArea.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new Label(newApp, this.text);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  TextArea.prototype.toString = function () {
    return 'TextArea';
  };
  TextArea.$metadata$ = {
    kind: Kind_CLASS,
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, text);
      (tmp$ = $this.setHandler) != null ? tmp$(text) : null;
    }
  });
  Object.defineProperty(CheckBox.prototype, 'checked', {
    get: function () {
      var $this = this.checked_3m3fl2$_0;
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, checked);
      (tmp$ = $this.setHandler) != null ? tmp$(checked) : null;
    }
  });
  CheckBox.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new CheckBox(newApp, this.text, this.checked);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  CheckBox.prototype.toString = function () {
    return 'CheckBox';
  };
  CheckBox.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CheckBox',
    interfaces: [Component]
  };
  function RadioButtonGroup() {
    this.mradios_8be2vx$ = ArrayList_init();
    this.radios = this.mradios_8be2vx$;
  }
  Object.defineProperty(RadioButtonGroup.prototype, 'selected', {
    get: function () {
      var $receiver = this.radios;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.checked) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return firstOrNull$result;
    },
    set: function (value) {
      var tmp$;
      tmp$ = this.radios.iterator();
      while (tmp$.hasNext()) {
        var radio = tmp$.next();
        radio.internalChecked_8be2vx$ = radio === value;
      }
    }
  });
  RadioButtonGroup.prototype.toString = function () {
    return 'RadioButtonGroup';
  };
  RadioButtonGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RadioButtonGroup',
    interfaces: []
  };
  function RadioButton(app, initialGroup, text, initialChecked) {
    Component.call(this, app, LightType$RADIO_BUTTON_getInstance());
    this.text_h0kdsk$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().TEXT);
    this.internalChecked_8be2vx$_7zymqr$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().CHECKED, true);
    initialGroup.mradios_8be2vx$.add_11rb$(this);
    this.group_ob61jo$_0 = initialGroup;
    this.text = text;
    this.checked = initialChecked;
    this.addEventListener_htgam$(getKClass(ChangeEvent), RadioButton_init$lambda(this));
  }
  Object.defineProperty(RadioButton.prototype, 'text', {
    get: function () {
      var $this = this.text_h0kdsk$_0;
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
      var $this = this.text_h0kdsk$_0;
      var tmp$;
      this.setProperty_aa6fc1$($this.key, text);
      (tmp$ = $this.setHandler) != null ? tmp$(text) : null;
    }
  });
  Object.defineProperty(RadioButton.prototype, 'internalChecked_8be2vx$', {
    get: function () {
      var $this = this.internalChecked_8be2vx$_7zymqr$_0;
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
    set: function (internalChecked) {
      var $this = this.internalChecked_8be2vx$_7zymqr$_0;
      var tmp$;
      this.setProperty_aa6fc1$($this.key, internalChecked);
      (tmp$ = $this.setHandler) != null ? tmp$(internalChecked) : null;
    }
  });
  Object.defineProperty(RadioButton.prototype, 'checked', {
    get: function () {
      return this.internalChecked_8be2vx$;
    },
    set: function (value) {
      if (value)
        this.group.selected = this;
    }
  });
  Object.defineProperty(RadioButton.prototype, 'group', {
    get: function () {
      return this.group_ob61jo$_0;
    },
    set: function (value) {
      this.group_ob61jo$_0.mradios_8be2vx$.remove_11rb$(this);
      this.group_ob61jo$_0 = value;
      this.group_ob61jo$_0.mradios_8be2vx$.add_11rb$(this);
      if (this.checked)
        this.group.selected = this;
    }
  });
  RadioButton.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new RadioButton(newApp, this.group, this.text, this.checked);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  RadioButton.prototype.toString = function () {
    return 'RadioButton';
  };
  function RadioButton_init$lambda(this$RadioButton) {
    return function (it) {
      var tmp$;
      if (this$RadioButton.checked) {
        tmp$ = this$RadioButton.group.radios.iterator();
        while (tmp$.hasNext()) {
          var radio = tmp$.next();
          if (!equals(radio, this$RadioButton))
            radio.checked = false;
        }
      }
      return Unit;
    };
  }
  RadioButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RadioButton',
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, current);
      (tmp$ = $this.setHandler) != null ? tmp$(current) : null;
    }
  });
  Object.defineProperty(Progress.prototype, 'max', {
    get: function () {
      var $this = this.max_awpbjz$_0;
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, max);
      (tmp$ = $this.setHandler) != null ? tmp$(max) : null;
    }
  });
  Progress.prototype.set_vux9f0$ = function (current, max) {
    this.current = current;
    this.max = max;
  };
  Progress.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new Progress(newApp, this.current, this.max);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  Progress.prototype.toString = function () {
    return 'Progress';
  };
  Progress.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Progress',
    interfaces: [Component]
  };
  function Slider(app, current, max) {
    if (current === void 0)
      current = 0;
    if (max === void 0)
      max = 100;
    Component.call(this, app, LightType$SLIDER_getInstance());
    this.current_h25x7u$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().PROGRESS_CURRENT, true);
    this.max_58l8jv$_0 = new Component$lightProperty(LightProperty$Companion_getInstance().PROGRESS_MAX, true);
    this.set_vux9f0$(current, max);
  }
  Object.defineProperty(Slider.prototype, 'current', {
    get: function () {
      var $this = this.current_h25x7u$_0;
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
      var $this = this.current_h25x7u$_0;
      var tmp$;
      this.setProperty_aa6fc1$($this.key, current);
      (tmp$ = $this.setHandler) != null ? tmp$(current) : null;
    }
  });
  Object.defineProperty(Slider.prototype, 'max', {
    get: function () {
      var $this = this.max_58l8jv$_0;
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
      var $this = this.max_58l8jv$_0;
      var tmp$;
      this.setProperty_aa6fc1$($this.key, max);
      (tmp$ = $this.setHandler) != null ? tmp$(max) : null;
    }
  });
  Slider.prototype.set_vux9f0$ = function (current, max) {
    this.current = current;
    this.max = max;
  };
  function Slider$onUpdate$lambda(closure$callback, this$Slider) {
    return function (it) {
      closure$callback(this$Slider.current);
      return Unit;
    };
  }
  Slider.prototype.onUpdate_b4k9x1$ = function (callback) {
    this.addEventListener_htgam$(getKClass(ChangeEvent), Slider$onUpdate$lambda(callback, this));
  };
  Slider.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new Slider(newApp, this.current, this.max);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  Slider.prototype.toString = function () {
    return 'Slider';
  };
  Slider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slider',
    interfaces: [Component]
  };
  function Spacer(app) {
    Component.call(this, app, LightType$CONTAINER_getInstance());
  }
  Spacer.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new Spacer(newApp);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  Spacer.prototype.toString = function () {
    return 'Spacer';
  };
  Spacer.$metadata$ = {
    kind: Kind_CLASS,
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, image);
      (tmp$ = $this.setHandler) != null ? tmp$(image) : null;
    }
  });
  Object.defineProperty(Image.prototype, 'smooth', {
    get: function () {
      var $this = this.smooth_x34etd$_0;
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
      var tmp$;
      this.setProperty_aa6fc1$($this.key, smooth);
      (tmp$ = $this.setHandler) != null ? tmp$(smooth) : null;
    }
  });
  Image.prototype.refreshImage = function () {
    this.setProperty_aa6fc1$(LightProperty$Companion_getInstance().IMAGE, this.image, true);
  };
  Image.prototype.copyStateFrom_o3ssl7$ = function (other) {
    var tmp$;
    Kotlin.isType(tmp$ = other, Image) ? tmp$ : throwCCE();
    Component.prototype.copyStateFrom_o3ssl7$.call(this, other);
    this.image = other.image;
  };
  Image.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new Image(newApp);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  Image.prototype.toString = function () {
    return 'Image';
  };
  function Image$image$lambda(this$Image) {
    return function (it) {
      if (it != null) {
        if (!equals(this$Image.style.defaultSize.width, get_pt(it.width)) || !equals(this$Image.style.defaultSize.height, get_pt(it.height))) {
          this$Image.style.defaultSize.setTo_6fmdh0$(get_pt(it.width), get_pt(it.height));
        }
        this$Image.invalidate();
      }
      return Unit;
    };
  }
  Image.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Image',
    interfaces: [Component]
  };
  function CustomComponent(app) {
    Container.call(this, app, new LayeredLayout(app));
  }
  CustomComponent.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new CustomComponent(newApp);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  CustomComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CustomComponent',
    interfaces: [Container]
  };
  function BaseCanvas(app) {
    Container.call(this, app, new LayeredLayout(app));
    var bitmap = NativeImage(1, 1);
    var $receiver = new Image(this.app);
    $receiver.image = bitmap;
    $receiver.style.defaultSize.width = get_pt(bitmap.width);
    $receiver.style.defaultSize.height = get_pt(bitmap.height);
    this.img_57ksx0$_0 = this.add_x0aukp$($receiver);
    this.antialiased = true;
    this.highDpi = true;
  }
  BaseCanvas.prototype.onResized_tjonv8$ = function (x, y, width, height) {
    Container.prototype.onResized_tjonv8$.call(this, x, y, width, height);
    this.repaint_g66c6o$_0(width, height);
  };
  BaseCanvas.prototype.repaint = function () {
    this.repaint_g66c6o$_0(this.actualWidth, this.actualHeight);
  };
  BaseCanvas.prototype.repaint_g66c6o$_0 = function (width, height) {
    var scale = this.highDpi ? this.app.devicePixelRatio : 1.0;
    var rwidth = numberToInt(width * scale);
    var rheight = numberToInt(height * scale);
    var image = NativeImage(rwidth, rheight);
    var ctx = image.getContext2d_6taknv$(this.antialiased).withScaledRenderer_lu1900$(scale);
    this.render_6rdc61$(ctx);
    this.img_57ksx0$_0.image = image;
  };
  BaseCanvas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseCanvas',
    interfaces: [Container]
  };
  function VectorImage(app) {
    BaseCanvas.call(this, app);
    this.d = null;
    this.targetWidth = null;
    this.targetHeight = null;
  }
  VectorImage.prototype.setVector_qcbl4z$ = function (d, width, height) {
    this.d = d;
    this.targetWidth = width;
    this.targetHeight = height;
    this.invalidate();
  };
  VectorImage.prototype.render_6rdc61$ = function ($receiver) {
    var tmp$;
    var twidth = this.targetWidth;
    var theight = this.targetHeight;
    var sx = twidth != null ? $receiver.width / twidth : 1.0;
    var sy = theight != null ? $receiver.height / theight : 1.0;
    (tmp$ = this.d) != null ? (tmp$.draw_vuz2tk$($receiver.withScaledRenderer_lu1900$(sx, sy)), Unit) : null;
  };
  VectorImage.prototype.copyStateFrom_o3ssl7$ = function (other) {
    var tmp$;
    Kotlin.isType(tmp$ = other, VectorImage) ? tmp$ : throwCCE();
    BaseCanvas.prototype.copyStateFrom_o3ssl7$.call(this, other);
    this.setVector_qcbl4z$(other.d, other.targetWidth, other.targetHeight);
  };
  VectorImage.prototype.clone_s67df2$ = function (newApp) {
    var $receiver = new VectorImage(newApp);
    $receiver.copyStateFrom_o3ssl7$(this);
    return $receiver;
  };
  VectorImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VectorImage',
    interfaces: [BaseCanvas]
  };
  function setSize($receiver, width, height) {
    $receiver.style.size.setTo_6fmdh0$(width, height);
    return $receiver;
  }
  var button = defineInlineFunction('korui-js.com.soywiz.korui.ui.button_2tkcjd$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Button_init = _.com.soywiz.korui.ui.Button;
    function button$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, text, callback) {
      if (callback === void 0)
        callback = button$lambda;
      var $receiver_0 = new Button_init($receiver.app, text);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var progress = defineInlineFunction('korui-js.com.soywiz.korui.ui.progress_ldwcq4$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Progress_init = _.com.soywiz.korui.ui.Progress;
    function progress$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, current, max, callback) {
      if (callback === void 0)
        callback = progress$lambda;
      var $receiver_0 = new Progress_init($receiver.app, current, max);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var slider = defineInlineFunction('korui-js.com.soywiz.korui.ui.slider_e97nrc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Slider_init = _.com.soywiz.korui.ui.Slider;
    function slider$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, current, max, callback) {
      if (callback === void 0)
        callback = slider$lambda;
      var $receiver_0 = new Slider_init($receiver.app, current, max);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var agCanvas = defineInlineFunction('korui-js.com.soywiz.korui.ui.agCanvas_25j7gb$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var AgCanvas_init = _.com.soywiz.korui.ui.AgCanvas;
    function agCanvas$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, callback) {
      if (callback === void 0)
        callback = agCanvas$lambda;
      return $receiver.add_x0aukp$(new AgCanvas_init($receiver.app));
    };
  }));
  var image = defineInlineFunction('korui-js.com.soywiz.korui.ui.image_mgnqpk$', wrapFunction(function () {
    var Image_init = _.com.soywiz.korui.ui.Image;
    return function ($receiver, bitmap, callback) {
      var $receiver_0 = new Image_init($receiver.app);
      callback($receiver_0);
      $receiver_0.image = bitmap;
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var image_0 = defineInlineFunction('korui-js.com.soywiz.korui.ui.image_wfl2m6$', wrapFunction(function () {
    var Image_init = _.com.soywiz.korui.ui.Image;
    var get_pt = _.com.soywiz.korui.geom.len.get_pt_s8ev3n$;
    return function ($receiver, bitmap) {
      var $receiver_0 = new Image_init($receiver.app);
      $receiver_0.image = bitmap;
      $receiver_0.style.defaultSize.width = get_pt(bitmap.width);
      $receiver_0.style.defaultSize.height = get_pt(bitmap.height);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var spacer = defineInlineFunction('korui-js.com.soywiz.korui.ui.spacer_r5smt6$', wrapFunction(function () {
    var Spacer_init = _.com.soywiz.korui.ui.Spacer;
    return function ($receiver) {
      return $receiver.add_x0aukp$(new Spacer_init($receiver.app));
    };
  }));
  var label = defineInlineFunction('korui-js.com.soywiz.korui.ui.label_9aibpz$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Label_init = _.com.soywiz.korui.ui.Label;
    function label$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, text, callback) {
      if (callback === void 0)
        callback = label$lambda;
      var $receiver_0 = new Label_init($receiver.app, text);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var comboBox = defineInlineFunction('korui-js.com.soywiz.korui.ui.comboBox_xkb3r5$', wrapFunction(function () {
    var toString = Kotlin.toString;
    var Unit = Kotlin.kotlin.Unit;
    var toList = Kotlin.kotlin.collections.toList_us0mfu$;
    var ComboBox_init = _.com.soywiz.korui.ui.ComboBox;
    function comboBox$lambda(it) {
      return toString(it);
    }
    function comboBox$lambda_0($receiver) {
      return Unit;
    }
    return function ($receiver, items, toString, callback) {
      if (toString === void 0)
        toString = comboBox$lambda;
      if (callback === void 0)
        callback = comboBox$lambda_0;
      var $receiver_0 = new ComboBox_init($receiver.app, toList(items), toString);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var checkBox = defineInlineFunction('korui-js.com.soywiz.korui.ui.checkBox_exwykh$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var CheckBox_init = _.com.soywiz.korui.ui.CheckBox;
    function checkBox$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, text, checked, callback) {
      if (checked === void 0)
        checked = false;
      if (callback === void 0)
        callback = checkBox$lambda;
      var $receiver_0 = new CheckBox_init($receiver.app, text, checked);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var radioButton = defineInlineFunction('korui-js.com.soywiz.korui.ui.radioButton_vdjnn$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var RadioButton_init = _.com.soywiz.korui.ui.RadioButton;
    function radioButton$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, group, text, checked, callback) {
      if (checked === void 0)
        checked = false;
      if (callback === void 0)
        callback = radioButton$lambda;
      var $receiver_0 = new RadioButton_init($receiver.app, group, text, checked);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var textField = defineInlineFunction('korui-js.com.soywiz.korui.ui.textField_udeuls$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var TextField_init = _.com.soywiz.korui.ui.TextField;
    function textField$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, text, callback) {
      if (text === void 0)
        text = '';
      if (callback === void 0)
        callback = textField$lambda;
      var $receiver_0 = new TextField_init($receiver.app, text);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var textArea = defineInlineFunction('korui-js.com.soywiz.korui.ui.textArea_f0qump$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var TextArea_init = _.com.soywiz.korui.ui.TextArea;
    function textArea$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, text, callback) {
      if (text === void 0)
        text = '';
      if (callback === void 0)
        callback = textArea$lambda;
      var $receiver_0 = new TextArea_init($receiver.app, text);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var layers = defineInlineFunction('korui-js.com.soywiz.korui.ui.layers_tkfvn2$', wrapFunction(function () {
    var LayeredLayout_init = _.com.soywiz.korui.ui.LayeredLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    return function ($receiver, callback) {
      var $receiver_0 = new Container_init($receiver.app, new LayeredLayout_init($receiver.app));
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var layersKeepAspectRatio = defineInlineFunction('korui-js.com.soywiz.korui.ui.layersKeepAspectRatio_2p4qfc$', wrapFunction(function () {
    var Anchor = _.$$importsForInline$$['korma-js'].com.soywiz.korma.geom.Anchor;
    var ScaleMode = _.$$importsForInline$$['korma-js'].com.soywiz.korma.geom.ScaleMode;
    var LayeredKeepAspectLayout_init = _.com.soywiz.korui.ui.LayeredKeepAspectLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    return function ($receiver, anchor, scaleMode, callback) {
      if (anchor === void 0)
        anchor = Anchor.Companion.MIDDLE_CENTER;
      if (scaleMode === void 0)
        scaleMode = ScaleMode.Companion.SHOW_ALL;
      var $receiver_0 = new Container_init($receiver.app, new LayeredKeepAspectLayout_init($receiver.app, anchor, scaleMode));
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var vertical = defineInlineFunction('korui-js.com.soywiz.korui.ui.vertical_tkfvn2$', wrapFunction(function () {
    var VerticalLayout_init = _.com.soywiz.korui.ui.VerticalLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    return function ($receiver, callback) {
      var $receiver_0 = new Container_init($receiver.app, new VerticalLayout_init($receiver.app));
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var horizontal = defineInlineFunction('korui-js.com.soywiz.korui.ui.horizontal_tkfvn2$', wrapFunction(function () {
    var HorizontalLayout_init = _.com.soywiz.korui.ui.HorizontalLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    return function ($receiver, callback) {
      var $receiver_0 = new Container_init($receiver.app, new HorizontalLayout_init($receiver.app));
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var inline = defineInlineFunction('korui-js.com.soywiz.korui.ui.inline_tkfvn2$', wrapFunction(function () {
    var InlineLayout_init = _.com.soywiz.korui.ui.InlineLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    return function ($receiver, callback) {
      var $receiver_0 = new Container_init($receiver.app, new InlineLayout_init($receiver.app));
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var relative = defineInlineFunction('korui-js.com.soywiz.korui.ui.relative_tkfvn2$', wrapFunction(function () {
    var RelativeLayout_init = _.com.soywiz.korui.ui.RelativeLayout;
    var Container_init = _.com.soywiz.korui.ui.Container;
    return function ($receiver, callback) {
      var $receiver_0 = new Container_init($receiver.app, new RelativeLayout_init($receiver.app));
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var scrollPane = defineInlineFunction('korui-js.com.soywiz.korui.ui.scrollPane_lgr6m4$', wrapFunction(function () {
    var ScrollPaneLayout_init = _.com.soywiz.korui.ui.ScrollPaneLayout;
    var ScrollPane_init = _.com.soywiz.korui.ui.ScrollPane;
    return function ($receiver, callback) {
      var $receiver_0 = new ScrollPane_init($receiver.app, new ScrollPaneLayout_init($receiver.app));
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var tabPane = defineInlineFunction('korui-js.com.soywiz.korui.ui.tabPane_j71cpe$', wrapFunction(function () {
    var TabPane_init = _.com.soywiz.korui.ui.TabPane;
    return function ($receiver, callback) {
      var $receiver_0 = new TabPane_init($receiver.app);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var page = defineInlineFunction('korui-js.com.soywiz.korui.ui.page_ya6sjn$', wrapFunction(function () {
    var TabPage_init = _.com.soywiz.korui.ui.TabPage;
    return function ($receiver, title, callback) {
      var $receiver_0 = new TabPage_init($receiver.app);
      $receiver_0.title = title;
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var vectorImage = defineInlineFunction('korui-js.com.soywiz.korui.ui.vectorImage_lz2sxk$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var VectorImage_init = _.com.soywiz.korui.ui.VectorImage;
    function vectorImage$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, vector, callback) {
      if (callback === void 0)
        callback = vectorImage$lambda;
      var $receiver_0 = new VectorImage_init($receiver.app);
      $receiver_0.setVector_qcbl4z$(vector, vector.width, vector.height);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  var vectorImage_0 = defineInlineFunction('korui-js.com.soywiz.korui.ui.vectorImage_fu8jv7$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var VectorImage_init = _.com.soywiz.korui.ui.VectorImage;
    function vectorImage$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, vector, callback) {
      if (callback === void 0)
        callback = vectorImage$lambda;
      var $receiver_0 = new VectorImage_init($receiver.app);
      $receiver_0.setVector_qcbl4z$(vector, null, null);
      callback($receiver_0);
      return $receiver.add_x0aukp$($receiver_0);
    };
  }));
  function ComponentDslMarker() {
  }
  ComponentDslMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ComponentDslMarker',
    interfaces: [Annotation]
  };
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korui.ui.Layout.ScaleMode2.' + name);
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
    kind: Kind_CLASS,
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
    switch (scaled.name) {
      case 'SHRINK':
        tmp$_0 = pos > size ? scaleFit : 1.0;
        break;
      case 'ALWAYS':
        tmp$_0 = scaleFit;
        break;
      case 'NEVER':
        tmp$_0 = 1.0;
        break;
      default:tmp$_0 = Kotlin.noWhenBranchMatched();
        break;
    }
    var scale = tmp$_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault(out, 10));
    var tmp$_1;
    tmp$_1 = out.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination.add_11rb$(item_0.copy_xxbne8$(void 0, new IntRange(numberToInt(item_0.bounds.start * scale), numberToInt(item_0.bounds.endInclusive * scale)), numberToInt(item_0.padPrev * scale)));
    }
    return destination;
  };
  Layout.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
    simpleName: 'VerticalHorizontalLayout',
    interfaces: [Layout]
  };
  function VerticalLayout(app) {
    VerticalHorizontalLayout.call(this, app, true, Layout$ScaleMode2$SHRINK_getInstance(), true);
  }
  VerticalLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerticalLayout',
    interfaces: [VerticalHorizontalLayout]
  };
  function HorizontalLayout(app) {
    VerticalHorizontalLayout.call(this, app, false, Layout$ScaleMode2$ALWAYS_getInstance(), true);
  }
  HorizontalLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HorizontalLayout',
    interfaces: [VerticalHorizontalLayout]
  };
  function ScrollPaneLayout(app) {
    VerticalHorizontalLayout.call(this, app, true, Layout$ScaleMode2$NEVER_getInstance(), false);
  }
  ScrollPaneLayout.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
    simpleName: 'RelativeLayout',
    interfaces: [Layout]
  };
  function get_KoruiDispatcher() {
    return util.OS.isNodejs ? NodeDispatcher_getInstance() : HtmlDispatcher_getInstance();
  }
  function toMillisFaster($receiver, time) {
    switch ($receiver.name) {
      case 'SECONDS':
        return time.toInt() * 1000 | 0;
      case 'MILLISECONDS':
        return time.toInt();
      default:return Kotlin.noWhenBranchMatched();
    }
  }
  function NodeDispatcher() {
    NodeDispatcher_instance = this;
    CoroutineDispatcher.call(this);
  }
  function NodeDispatcher$dispatch$lambda(closure$block) {
    return function () {
      closure$block.run();
      return Unit;
    };
  }
  NodeDispatcher.prototype.dispatch_5bn72i$ = function (context, block) {
    setTimeout(NodeDispatcher$dispatch$lambda(block), 0);
  };
  function NodeDispatcher$scheduleResumeAfterDelay$lambda(closure$continuation, this$NodeDispatcher) {
    return function () {
      var receiver = closure$continuation;
      receiver.resumeUndispatched_hyuxa3$(this$NodeDispatcher, Unit);
      return Unit;
    };
  }
  function NodeDispatcher$scheduleResumeAfterDelay$lambda_0(closure$timeout) {
    return function (it) {
      clearTimeout(closure$timeout);
      return Unit;
    };
  }
  NodeDispatcher.prototype.scheduleResumeAfterDelay_hzpi9w$ = function (time, unit, continuation) {
    var timeout = setTimeout(NodeDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), toMillisFaster(unit, time));
    continuation.invokeOnCancellation_f05bi3$(NodeDispatcher$scheduleResumeAfterDelay$lambda_0(timeout));
  };
  function NodeDispatcher$invokeOnTimeout$lambda(closure$block) {
    return function () {
      closure$block.run();
      return Unit;
    };
  }
  function NodeDispatcher$invokeOnTimeout$ObjectLiteral(closure$timeout) {
    this.closure$timeout = closure$timeout;
  }
  NodeDispatcher$invokeOnTimeout$ObjectLiteral.prototype.dispose = function () {
    clearTimeout(this.closure$timeout);
  };
  NodeDispatcher$invokeOnTimeout$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DisposableHandle]
  };
  NodeDispatcher.prototype.invokeOnTimeout_rvvvjy$ = function (time, unit, block) {
    var timeout = setTimeout(NodeDispatcher$invokeOnTimeout$lambda(block), toMillisFaster(unit, time));
    return new NodeDispatcher$invokeOnTimeout$ObjectLiteral(timeout);
  };
  NodeDispatcher.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NodeDispatcher',
    interfaces: [DelayFrame, Delay, CoroutineDispatcher]
  };
  var NodeDispatcher_instance = null;
  function NodeDispatcher_getInstance() {
    if (NodeDispatcher_instance === null) {
      new NodeDispatcher();
    }
    return NodeDispatcher_instance;
  }
  function HtmlDispatcher() {
    HtmlDispatcher_instance = this;
    CoroutineDispatcher.call(this);
    this.messageName_0 = 'dispatchCoroutine';
    this.queue_0 = new HtmlDispatcher$queue$ObjectLiteral();
    window.addEventListener('message', HtmlDispatcher_init$lambda(this), true);
  }
  HtmlDispatcher.prototype.dispatch_5bn72i$ = function (context, block) {
    this.queue_0.enqueue_771g0p$(block);
  };
  function HtmlDispatcher$scheduleResumeAfterDelay$lambda(closure$continuation, this$HtmlDispatcher) {
    return function () {
      var receiver = closure$continuation;
      receiver.resumeUndispatched_hyuxa3$(this$HtmlDispatcher, Unit);
      return Unit;
    };
  }
  HtmlDispatcher.prototype.scheduleResumeAfterDelay_hzpi9w$ = function (time, unit, continuation) {
    window.setTimeout(HtmlDispatcher$scheduleResumeAfterDelay$lambda(continuation, this), unit.toMillis_s8cxhz$(time).toInt());
  };
  function HtmlDispatcher$invokeOnTimeout$lambda(closure$block) {
    return function () {
      closure$block.run();
      return Unit;
    };
  }
  function HtmlDispatcher$invokeOnTimeout$ObjectLiteral(closure$handle) {
    this.closure$handle = closure$handle;
  }
  HtmlDispatcher$invokeOnTimeout$ObjectLiteral.prototype.dispose = function () {
    window.clearTimeout(this.closure$handle);
  };
  HtmlDispatcher$invokeOnTimeout$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [DisposableHandle]
  };
  HtmlDispatcher.prototype.invokeOnTimeout_rvvvjy$ = function (time, unit, block) {
    var handle = window.setTimeout(HtmlDispatcher$invokeOnTimeout$lambda(block), unit.toMillis_s8cxhz$(time).toInt());
    return new HtmlDispatcher$invokeOnTimeout$ObjectLiteral(handle);
  };
  function HtmlDispatcher$delayFrame$lambda(closure$continuation, this$HtmlDispatcher) {
    return function (it) {
      var receiver = closure$continuation;
      receiver.resumeUndispatched_hyuxa3$(this$HtmlDispatcher, Unit);
      return Unit;
    };
  }
  HtmlDispatcher.prototype.delayFrame_fefoe3$ = function (continuation) {
    window.requestAnimationFrame(HtmlDispatcher$delayFrame$lambda(continuation, this));
  };
  HtmlDispatcher.prototype.toString = function () {
    return 'HtmlDispatcher';
  };
  function HtmlDispatcher$queue$ObjectLiteral() {
    MessageQueue.call(this);
  }
  HtmlDispatcher$queue$ObjectLiteral.prototype.schedule = function () {
    window.postMessage(HtmlDispatcher_getInstance().messageName_0, '*');
  };
  HtmlDispatcher$queue$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MessageQueue]
  };
  function HtmlDispatcher_init$lambda(this$HtmlDispatcher) {
    return function (event) {
      if (event.source == window && event.data == this$HtmlDispatcher.messageName_0) {
        event.stopPropagation();
        this$HtmlDispatcher.queue_0.process();
      }
      return Unit;
    };
  }
  HtmlDispatcher.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlDispatcher',
    interfaces: [DelayFrame, Delay, CoroutineDispatcher]
  };
  var HtmlDispatcher_instance = null;
  function HtmlDispatcher_getInstance() {
    if (HtmlDispatcher_instance === null) {
      new HtmlDispatcher();
    }
    return HtmlDispatcher_instance;
  }
  function Queue() {
    this.queue_0 = Kotlin.newArray(8, null);
    this.head_0 = 0;
    this.tail_0 = 0;
  }
  Object.defineProperty(Queue.prototype, 'isEmpty', {
    get: function () {
      return this.head_0 === this.tail_0;
    }
  });
  Queue.prototype.poll = function () {
    var tmp$;
    if (this.isEmpty)
      return null;
    var result = ensureNotNull(this.queue_0[this.head_0]);
    this.queue_0[this.head_0] = null;
    this.head_0 = this.next_0(this.head_0);
    return Kotlin.isType(tmp$ = result, Any) ? tmp$ : throwCCE();
  };
  Queue.prototype.add_trkh7z$ = function (element) {
    var newTail = this.next_0(this.tail_0);
    if (newTail === this.head_0) {
      this.resize_0();
      this.add_trkh7z$(element);
      return;
    }
    this.queue_0[this.tail_0] = element;
    this.tail_0 = newTail;
  };
  Queue.prototype.resize_0 = function () {
    var tmp$;
    var i = this.head_0;
    var j = 0;
    var a = Kotlin.newArray(this.queue_0.length * 2 | 0, null);
    while (i !== this.tail_0) {
      a[tmp$ = j, j = tmp$ + 1 | 0, tmp$] = this.queue_0[i];
      i = this.next_0(i);
    }
    this.queue_0 = a;
    this.head_0 = 0;
    this.tail_0 = j;
  };
  Queue.prototype.next_0 = function ($receiver) {
    var j = $receiver + 1 | 0;
    return j === this.queue_0.length ? 0 : j;
  };
  Queue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Queue',
    interfaces: []
  };
  function MessageQueue() {
    Queue.call(this);
    this.yieldEvery = 16;
    this.scheduled_0 = false;
  }
  MessageQueue.prototype.enqueue_771g0p$ = function (element) {
    this.add_trkh7z$(element);
    if (!this.scheduled_0) {
      this.scheduled_0 = true;
      this.schedule();
    }
  };
  MessageQueue.prototype.process = function () {
    try {
      var times = this.yieldEvery;
      for (var index = 0; index < times; index++) {
        var tmp$;
        tmp$ = this.poll();
        if (tmp$ == null) {
          return;
        }
        var element = tmp$;
        element.run();
      }
    }
    finally {
      if (this.isEmpty) {
        this.scheduled_0 = false;
      }
       else {
        this.schedule();
      }
    }
  };
  MessageQueue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MessageQueue',
    interfaces: [Queue]
  };
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
    var inputFile = Kotlin.isType(tmp$_2 = document.createElement('input'), HTMLInputElement) ? tmp$_2 : throwCCE();
    inputFile.type = 'file';
    inputFile.style.visibility = 'hidden';
    windowInputFile = inputFile;
    selectedFiles = [];
    (tmp$_3 = document.body) != null ? tmp$_3.appendChild(inputFile) : null;
  }
  Object.defineProperty(HtmlLightComponents.prototype, 'windowWidth', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = (tmp$ = document.documentElement) != null ? tmp$.clientWidth : null) != null ? tmp$_0 : window.innerWidth) != null ? tmp$_1 : 128;
    }
  });
  Object.defineProperty(HtmlLightComponents.prototype, 'windowHeight', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = (tmp$ = document.documentElement) != null ? tmp$.clientHeight : null) != null ? tmp$_0 : window.innerHeight) != null ? tmp$_1 : 128;
    }
  });
  Object.defineProperty(HtmlLightComponents.prototype, 'xScale', {
    get: function () {
      return this.quality === LightQuality$QUALITY_getInstance() ? this.devicePixelRatio : 1.0;
    }
  });
  Object.defineProperty(HtmlLightComponents.prototype, 'yScale', {
    get: function () {
      return this.quality === LightQuality$QUALITY_getInstance() ? this.devicePixelRatio : 1.0;
    }
  });
  Object.defineProperty(HtmlLightComponents.prototype, 'xEventScale', {
    get: function () {
      return this.xScale;
    }
  });
  Object.defineProperty(HtmlLightComponents.prototype, 'yEventScale', {
    get: function () {
      return this.yScale;
    }
  });
  HtmlLightComponents.prototype.addStyles_61zpoe$ = function (css) {
    var tmp$, tmp$_0, tmp$_1;
    var head = (tmp$_0 = document.head) != null ? tmp$_0 : Kotlin.isType(tmp$ = document.getElementsByTagName('head')[0], HTMLHeadElement) ? tmp$ : throwCCE();
    var style = Kotlin.isType(tmp$_1 = document.createElement('style'), HTMLStyleElement) ? tmp$_1 : throwCCE();
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    var agg = {v: null};
    switch (type.name) {
      case 'FRAME':
        var $receiver = Kotlin.isType(tmp$ = document.createElement('article'), HTMLElement) ? tmp$ : throwCCE();
        var tmp$_12, tmp$_13;
        $receiver.className = 'FRAME';
        (tmp$_12 = document.body) != null ? tmp$_12.appendChild($receiver) : null;
        mainFrame = $receiver;
        (tmp$_13 = mainFrame != null ? mainFrame.style : null) != null ? (tmp$_13.visibility = 'hidden') : null;
        tmp$_11 = $receiver;
        break;
      case 'CONTAINER':
        var $receiver_0 = Kotlin.isType(tmp$_0 = document.createElement('div'), HTMLElement) ? tmp$_0 : throwCCE();
        $receiver_0.className = 'CONTAINER';
        tmp$_11 = $receiver_0;
        break;
      case 'SCROLL_PANE':
        var $receiver_1 = Kotlin.isType(tmp$_1 = document.createElement('div'), HTMLElement) ? tmp$_1 : throwCCE();
        $receiver_1.className = 'SCROLL_PANE';
        tmp$_11 = $receiver_1;
        break;
      case 'BUTTON':
        var $receiver_2 = Kotlin.isType(tmp$_2 = document.createElement('input'), HTMLInputElement) ? tmp$_2 : throwCCE();
        $receiver_2.className = 'BUTTON';
        $receiver_2.type = 'button';
        tmp$_11 = $receiver_2;
        break;
      case 'PROGRESS':
        var $receiver_3 = Kotlin.isType(tmp$_3 = document.createElement('progress'), HTMLElement) ? tmp$_3 : throwCCE();
        $receiver_3.className = 'PROGRESS';
        tmp$_11 = $receiver_3;
        break;
      case 'IMAGE':
        var $receiver_4 = ensureNotNull(Kotlin.isType(tmp$_4 = document.createElement('canvas'), HTMLCanvasElement) ? tmp$_4 : throwCCE());
        $receiver_4.className = 'IMAGE';
        $receiver_4.style.imageRendering = 'pixelated';
        tmp$_11 = $receiver_4;
        break;
      case 'LABEL':
        var $receiver_5 = Kotlin.isType(tmp$_5 = document.createElement('label'), HTMLElement) ? tmp$_5 : throwCCE();
        $receiver_5.className = 'LABEL';
        tmp$_11 = $receiver_5;
        break;
      case 'TEXT_FIELD':
        var $receiver_6 = ensureNotNull(Kotlin.isType(tmp$_6 = document.createElement('input'), HTMLInputElement) ? tmp$_6 : throwCCE());
        $receiver_6.className = 'TEXT_FIELD';
        $receiver_6.type = 'text';
        tmp$_11 = $receiver_6;
        break;
      case 'TEXT_AREA':
        var $receiver_7 = Kotlin.isType(tmp$_7 = document.createElement('textarea'), HTMLElement) ? tmp$_7 : throwCCE();
        $receiver_7.className = 'TEXT_AREA';
        tmp$_11 = $receiver_7;
        break;
      case 'CHECK_BOX':
        var $receiver_8 = Kotlin.isType(tmp$_8 = document.createElement('label'), HTMLElement) ? tmp$_8 : throwCCE();
        var tmp$_14;
        $receiver_8.className = 'CHECK_BOX';
        $receiver_8['data-type'] = 'checkbox';
        var input = Kotlin.isType(tmp$_14 = document.createElement('input'), HTMLInputElement) ? tmp$_14 : throwCCE();
        input.className = 'TEXT_FIELD';
        input.type = 'checkbox';
        $receiver_8.appendChild(input);
        $receiver_8.appendChild(ensureNotNull(document.createElement('span')));
        tmp$_11 = $receiver_8;
        break;
      case 'AGCANVAS':
        agg.v = korag.AGOpenglFactory.create_s8jyv4$(null).create_s8jyv4$(null);
        var cc = Kotlin.isType(tmp$_9 = agg.v.nativeComponent, HTMLCanvasElement) ? tmp$_9 : throwCCE();
        cc.tabIndex = 1;
        cc.style.outline = 'none';
        tmp$_11 = cc;
        break;
      default:var $receiver_9 = Kotlin.isType(tmp$_10 = document.createElement('div'), HTMLElement) ? tmp$_10 : throwCCE();
        $receiver_9.className = 'UNKNOWN';
        tmp$_11 = $receiver_9;
        break;
    }
    var handle = tmp$_11;
    var tmp$_15;
    var style = handle.style;
    style.position = 'absolute';
    switch (type.name) {
      case 'SCROLL_PANE':
      case 'TEXT_AREA':
      case 'TEXT_FIELD':
        tmp$_15 = true;
        break;
      default:tmp$_15 = false;
        break;
    }
    var overflow = tmp$_15;
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
    var child = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : throwCCE();
    (tmp$_0 = child.parentNode) != null ? tmp$_0.removeChild(child) : null;
    if (parent != null) {
      (Kotlin.isType(tmp$_1 = parent, HTMLElement) ? tmp$_1 : throwCCE()).appendChild(child);
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
    return Closeable_0(HtmlLightComponents$addCloseableEventListener$lambda($receiver, name, func));
  };
  function HtmlLightComponents$registerEventKind$dispatchMouseEvent(closure$ed, closure$event, this$HtmlLightComponents) {
    return function (e) {
      var tmp$;
      var me = Kotlin.isType(tmp$ = e, MouseEvent) ? tmp$ : throwCCE();
      var tmp$_0 = closure$ed;
      var $receiver = closure$event;
      var this$HtmlLightComponents_0 = this$HtmlLightComponents;
      var tmp$_1;
      $receiver.id = 0;
      $receiver.x = numberToInt(me.offsetX * this$HtmlLightComponents_0.xEventScale);
      $receiver.y = numberToInt(me.offsetY * this$HtmlLightComponents_0.yEventScale);
      $receiver.button = MouseButton$Companion_getInstance().get_za3lpa$(me.button);
      $receiver.buttons = me.buttons;
      $receiver.isAltDown = me.altKey;
      $receiver.isCtrlDown = me.ctrlKey;
      $receiver.isShiftDown = me.shiftKey;
      $receiver.isMetaDown = me.metaKey;
      $receiver.scaleCoords = false;
      switch (me.type) {
        case 'click':
          tmp$_1 = MouseEvent$Type$CLICK_getInstance();
          break;
        case 'mousemove':
          if (me.button === 0) {
            tmp$_1 = MouseEvent$Type$MOVE_getInstance();
          }
           else {
            tmp$_1 = MouseEvent$Type$DRAG_getInstance();
          }

          break;
        case 'mouseup':
          tmp$_1 = MouseEvent$Type$UP_getInstance();
          break;
        case 'mousedown':
          tmp$_1 = MouseEvent$Type$DOWN_getInstance();
          break;
        case 'mouseenter':
          tmp$_1 = MouseEvent$Type$DOWN_getInstance();
          break;
        case 'mouseover':
          tmp$_1 = MouseEvent$Type$ENTER_getInstance();
          break;
        case 'mouseout':
          tmp$_1 = MouseEvent$Type$EXIT_getInstance();
          break;
        default:throw IllegalStateException_init(('Unsupported event type ' + me.type).toString());
      }
      $receiver.type = tmp$_1;
      tmp$_0.dispatch_dt5jzj$(getKClass(MouseEvent_0), $receiver);
    };
  }
  function HtmlLightComponents$registerEventKind$lambda$lambda(closure$dispatchMouseEvent) {
    return function (it) {
      closure$dispatchMouseEvent(it);
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$dispatchMouseEvent_0(closure$ed, closure$event) {
    return function (e) {
      var tmp$;
      var me = Kotlin.isType(tmp$ = e, KeyboardEvent) ? tmp$ : throwCCE();
      var tmp$_0 = closure$ed;
      var $receiver = closure$event;
      var tmp$_1, tmp$_2;
      $receiver.id = 0;
      $receiver.keyCode = me.keyCode;
      switch (me.key) {
        case '0':
          tmp$_1 = Key$N0_getInstance();
          break;
        case '1':
          tmp$_1 = Key$N1_getInstance();
          break;
        case '2':
          tmp$_1 = Key$N2_getInstance();
          break;
        case '3':
          tmp$_1 = Key$N3_getInstance();
          break;
        case '4':
          tmp$_1 = Key$N4_getInstance();
          break;
        case '5':
          tmp$_1 = Key$N5_getInstance();
          break;
        case '6':
          tmp$_1 = Key$N6_getInstance();
          break;
        case '7':
          tmp$_1 = Key$N7_getInstance();
          break;
        case '8':
          tmp$_1 = Key$N8_getInstance();
          break;
        case '9':
          tmp$_1 = Key$N9_getInstance();
          break;
        case 'a':
          tmp$_1 = Key$A_getInstance();
          break;
        case 'b':
          tmp$_1 = Key$B_getInstance();
          break;
        case 'c':
          tmp$_1 = Key$C_getInstance();
          break;
        case 'd':
          tmp$_1 = Key$D_getInstance();
          break;
        case 'e':
          tmp$_1 = Key$E_getInstance();
          break;
        case 'f':
          tmp$_1 = Key$F_getInstance();
          break;
        case 'g':
          tmp$_1 = Key$G_getInstance();
          break;
        case 'h':
          tmp$_1 = Key$H_getInstance();
          break;
        case 'i':
          tmp$_1 = Key$I_getInstance();
          break;
        case 'j':
          tmp$_1 = Key$J_getInstance();
          break;
        case 'k':
          tmp$_1 = Key$K_getInstance();
          break;
        case 'l':
          tmp$_1 = Key$L_getInstance();
          break;
        case 'm':
          tmp$_1 = Key$M_getInstance();
          break;
        case 'n':
          tmp$_1 = Key$N_getInstance();
          break;
        case 'o':
          tmp$_1 = Key$O_getInstance();
          break;
        case 'p':
          tmp$_1 = Key$P_getInstance();
          break;
        case 'q':
          tmp$_1 = Key$Q_getInstance();
          break;
        case 'r':
          tmp$_1 = Key$R_getInstance();
          break;
        case 's':
          tmp$_1 = Key$S_getInstance();
          break;
        case 't':
          tmp$_1 = Key$T_getInstance();
          break;
        case 'u':
          tmp$_1 = Key$U_getInstance();
          break;
        case 'v':
          tmp$_1 = Key$V_getInstance();
          break;
        case 'w':
          tmp$_1 = Key$W_getInstance();
          break;
        case 'x':
          tmp$_1 = Key$X_getInstance();
          break;
        case 'y':
          tmp$_1 = Key$Y_getInstance();
          break;
        case 'z':
          tmp$_1 = Key$Z_getInstance();
          break;
        case 'F1':
          tmp$_1 = Key$F1_getInstance();
          break;
        case 'F2':
          tmp$_1 = Key$F2_getInstance();
          break;
        case 'F3':
          tmp$_1 = Key$F3_getInstance();
          break;
        case 'F4':
          tmp$_1 = Key$F4_getInstance();
          break;
        case 'F5':
          tmp$_1 = Key$F5_getInstance();
          break;
        case 'F6':
          tmp$_1 = Key$F6_getInstance();
          break;
        case 'F7':
          tmp$_1 = Key$F7_getInstance();
          break;
        case 'F8':
          tmp$_1 = Key$F8_getInstance();
          break;
        case 'F9':
          tmp$_1 = Key$F9_getInstance();
          break;
        case 'F10':
          tmp$_1 = Key$F10_getInstance();
          break;
        case 'F11':
          tmp$_1 = Key$F11_getInstance();
          break;
        case 'F12':
          tmp$_1 = Key$F12_getInstance();
          break;
        case 'F13':
          tmp$_1 = Key$F13_getInstance();
          break;
        case 'F14':
          tmp$_1 = Key$F14_getInstance();
          break;
        case 'F15':
          tmp$_1 = Key$F15_getInstance();
          break;
        case 'F16':
          tmp$_1 = Key$F16_getInstance();
          break;
        case 'F17':
          tmp$_1 = Key$F17_getInstance();
          break;
        case 'F18':
          tmp$_1 = Key$F18_getInstance();
          break;
        case 'F19':
          tmp$_1 = Key$F19_getInstance();
          break;
        case 'F20':
          tmp$_1 = Key$F20_getInstance();
          break;
        case 'F21':
          tmp$_1 = Key$F21_getInstance();
          break;
        case 'F22':
          tmp$_1 = Key$F22_getInstance();
          break;
        case 'F23':
          tmp$_1 = Key$F23_getInstance();
          break;
        case 'F24':
          tmp$_1 = Key$F24_getInstance();
          break;
        case 'F25':
          tmp$_1 = Key$F25_getInstance();
          break;
        default:switch (me.code) {
            case 'MetaLeft':
              tmp$_1 = Key$LEFT_SUPER_getInstance();
              break;
            case 'MetaRight':
              tmp$_1 = Key$RIGHT_SUPER_getInstance();
              break;
            case 'ShiftLeft':
              tmp$_1 = Key$LEFT_SHIFT_getInstance();
              break;
            case 'ShiftRight':
              tmp$_1 = Key$RIGHT_SHIFT_getInstance();
              break;
            case 'ControlLeft':
              tmp$_1 = Key$LEFT_CONTROL_getInstance();
              break;
            case 'ControlRight':
              tmp$_1 = Key$RIGHT_CONTROL_getInstance();
              break;
            case 'AltLeft':
              tmp$_1 = Key$LEFT_ALT_getInstance();
              break;
            case 'AltRight':
              tmp$_1 = Key$RIGHT_ALT_getInstance();
              break;
            case 'Space':
              tmp$_1 = Key$SPACE_getInstance();
              break;
            case 'ArrowUp':
              tmp$_1 = Key$UP_getInstance();
              break;
            case 'ArrowDown':
              tmp$_1 = Key$DOWN_getInstance();
              break;
            case 'ArrowLeft':
              tmp$_1 = Key$LEFT_getInstance();
              break;
            case 'ArrowRight':
              tmp$_1 = Key$RIGHT_getInstance();
              break;
            case 'Enter':
              tmp$_1 = Key$ENTER_getInstance();
              break;
            case 'Escape':
              tmp$_1 = Key$ESCAPE_getInstance();
              break;
            case 'Backspace':
              tmp$_1 = Key$BACKSPACE_getInstance();
              break;
            case 'Period':
              tmp$_1 = Key$PERIOD_getInstance();
              break;
            case 'Comma':
              tmp$_1 = Key$COMMA_getInstance();
              break;
            case 'Semicolon':
              tmp$_1 = Key$SEMICOLON_getInstance();
              break;
            case 'Slash':
              tmp$_1 = Key$SLASH_getInstance();
              break;
            case 'Tab':
              tmp$_1 = Key$TAB_getInstance();
              break;
            default:tmp$_1 = Key$UNKNOWN_getInstance();
              break;
          }

          break;
      }
      $receiver.key = tmp$_1;
      $receiver.char = toBoxedChar(toChar(me.charCode));
      switch (me.type) {
        case 'keydown':
          tmp$_2 = KeyEvent$Type$DOWN_getInstance();
          break;
        case 'keyup':
          tmp$_2 = KeyEvent$Type$UP_getInstance();
          break;
        case 'keypress':
          tmp$_2 = KeyEvent$Type$TYPE_getInstance();
          break;
        default:throw IllegalStateException_init(('Unsupported event type ' + me.type).toString());
      }
      $receiver.type = tmp$_2;
      tmp$_0.dispatch_dt5jzj$(getKClass(KeyEvent), $receiver);
    };
  }
  function HtmlLightComponents$registerEventKind$lambda$lambda_0(closure$dispatchMouseEvent) {
    return function (it) {
      closure$dispatchMouseEvent(it);
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$dispatchChangeEvent(closure$ed, closure$event) {
    return function (e) {
      var tmp$ = closure$ed;
      var $receiver = closure$event;
      $receiver.oldValue = null;
      $receiver.newValue = null;
      tmp$.dispatch_dt5jzj$(getKClass(ChangeEvent), $receiver);
    };
  }
  function HtmlLightComponents$registerEventKind$lambda$lambda_1(closure$dispatchChangeEvent) {
    return function (it) {
      closure$dispatchChangeEvent(it);
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$update(closure$lastWidth, this$HtmlLightComponents, closure$lastHeight, closure$ed, closure$info) {
    return function () {
      var tmp$, tmp$_0;
      if (closure$lastWidth.v !== this$HtmlLightComponents.windowWidth || closure$lastHeight.v !== this$HtmlLightComponents.windowHeight) {
        closure$lastWidth.v = this$HtmlLightComponents.windowWidth;
        closure$lastHeight.v = this$HtmlLightComponents.windowHeight;
        if (mainFrame != null) {
          (tmp$ = mainFrame != null ? mainFrame.style : null) != null ? (tmp$.width = closure$lastWidth.v.toString() + 'px') : null;
          (tmp$_0 = mainFrame != null ? mainFrame.style : null) != null ? (tmp$_0.height = closure$lastHeight.v.toString() + 'px') : null;
        }
        var tmp$_1 = closure$ed;
        var $receiver = closure$info;
        var closure$lastWidth_0 = closure$lastWidth;
        var closure$lastHeight_0 = closure$lastHeight;
        $receiver.width = closure$lastWidth_0.v;
        $receiver.height = closure$lastHeight_0.v;
        tmp$_1.dispatch_dt5jzj$(getKClass(ResizedEvent), $receiver);
      }
    };
  }
  function HtmlLightComponents$registerEventKind$timer(closure$update, closure$closed) {
    return function closure$timer() {
      closure$update();
      if (!closure$closed.v) {
        window.setTimeout(getCallableRef('timer', function () {
          return closure$timer(), Unit;
        }), 100);
      }
    };
  }
  function HtmlLightComponents$registerEventKind$lambda(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$lambda_0(closure$update) {
    return function (it) {
      closure$update();
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$ObjectLiteral(closure$closed) {
    this.closure$closed = closure$closed;
  }
  HtmlLightComponents$registerEventKind$ObjectLiteral.prototype.close = function () {
    this.closure$closed.v = true;
  };
  HtmlLightComponents$registerEventKind$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Closeable]
  };
  function HtmlLightComponents$registerEventKind$process(closure$ed, closure$info) {
    return function (connected, e) {
      var tmp$ = closure$ed;
      var $receiver = closure$info;
      var tmp$_0;
      if (connected)
        tmp$_0 = GamePadConnectionEvent$Type$CONNECTED_getInstance();
      else
        tmp$_0 = GamePadConnectionEvent$Type$DISCONNECTED_getInstance();
      $receiver.type = tmp$_0;
      $receiver.gamepad = e.gamepad.index;
      tmp$.dispatch_dt5jzj$(getKClass(GamePadConnectionEvent), $receiver);
    };
  }
  function HtmlLightComponents$registerEventKind$lambda_1(closure$process) {
    return function (it) {
      closure$process(true, it);
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$lambda_2(closure$process) {
    return function (it) {
      closure$process(false, it);
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$process_0(this$HtmlLightComponents) {
    return function (type, e, preventDefault) {
      var out = ArrayList_init();
      var touches = e.changedTouches;
      var touchesLength = touches.length;
      for (var n = 0; n < touchesLength; n++) {
        var touch = touches[n];
        var $receiver = new TouchEvent();
        var this$HtmlLightComponents_0 = this$HtmlLightComponents;
        $receiver.type = type;
        $receiver.touch.current.x = touch.pageX * this$HtmlLightComponents_0.xEventScale;
        $receiver.touch.current.y = touch.pageY * this$HtmlLightComponents_0.yEventScale;
        $receiver.touch.id = touch.identifier;
        $receiver.scaleCoords = false;
        out.add_11rb$($receiver);
      }
      if (preventDefault)
        e.preventDefault();
      return out;
    };
  }
  function HtmlLightComponents$registerEventKind$lambda_3(closure$process, closure$ed) {
    return function (it) {
      var tmp$;
      tmp$ = closure$process(TouchEvent$Type$START_getInstance(), it, true).iterator();
      while (tmp$.hasNext()) {
        var info = tmp$.next();
        closure$ed.dispatch_dt5jzj$(getKClass(TouchEvent), info);
      }
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$lambda_4(closure$process, closure$ed) {
    return function (it) {
      var tmp$;
      tmp$ = closure$process(TouchEvent$Type$END_getInstance(), it, true).iterator();
      while (tmp$.hasNext()) {
        var info = tmp$.next();
        closure$ed.dispatch_dt5jzj$(getKClass(TouchEvent), info);
      }
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$lambda_5(closure$process, closure$ed) {
    return function (it) {
      var tmp$;
      tmp$ = closure$process(TouchEvent$Type$MOVE_getInstance(), it, true).iterator();
      while (tmp$.hasNext()) {
        var info = tmp$.next();
        closure$ed.dispatch_dt5jzj$(getKClass(TouchEvent), info);
      }
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$ondrop(closure$ed) {
    return function (e) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      e.preventDefault();
      tmp$ = e.dataTransfer;
      if (tmp$ == null) {
        return;
      }
      var dt = tmp$;
      var files = ArrayList_init();
      tmp$_0 = dt.items.length;
      for (var n = 0; n < tmp$_0; n++) {
        tmp$_1 = dt.items[n];
        if (tmp$_1 == null) {
          continue;
        }
        var item = tmp$_1;
        tmp$_2 = item.getAsFile();
        if (tmp$_2 == null) {
          continue;
        }
        var file = tmp$_2;
        files.add_11rb$(file);
      }
      var fileSystem = new JsFilesVfs(files);
      var tmp$_3 = closure$ed;
      var tmp$_4 = DropFileEvent$Type$ENTER_getInstance();
      var destination = ArrayList_init_0(collectionSizeOrDefault(files, 10));
      var tmp$_5;
      tmp$_5 = files.iterator();
      while (tmp$_5.hasNext()) {
        var item_0 = tmp$_5.next();
        destination.add_11rb$(fileSystem.get_61zpoe$(item_0.name));
      }
      var event = new DropFileEvent(tmp$_4, destination);
      tmp$_3.dispatch_dt5jzj$(getKClass(DropFileEvent), event);
    };
  }
  function HtmlLightComponents$registerEventKind$ondragenter(closure$ed) {
    return function (e) {
      e.preventDefault();
      var $receiver = closure$ed;
      var event = new DropFileEvent(DropFileEvent$Type$ENTER_getInstance(), null);
      $receiver.dispatch_dt5jzj$(getKClass(DropFileEvent), event);
    };
  }
  function HtmlLightComponents$registerEventKind$ondragexit(closure$ed) {
    return function (e) {
      e.preventDefault();
      var $receiver = closure$ed;
      var event = new DropFileEvent(DropFileEvent$Type$EXIT_getInstance(), null);
      $receiver.dispatch_dt5jzj$(getKClass(DropFileEvent), event);
    };
  }
  function HtmlLightComponents$registerEventKind$lambda_6(closure$ondrop) {
    return function (it) {
      closure$ondrop(it);
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$lambda_7(closure$ondragenter) {
    return function (it) {
      closure$ondragenter(it);
      return Unit;
    };
  }
  function HtmlLightComponents$registerEventKind$lambda_8(it) {
    it.preventDefault();
    return Unit;
  }
  function HtmlLightComponents$registerEventKind$lambda_9(closure$ondragexit) {
    return function (it) {
      closure$ondragexit(it);
      return Unit;
    };
  }
  HtmlLightComponents.prototype.registerEventKind_7v19vx$ = function (c, clazz, ed) {
    var tmp$;
    var node = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : throwCCE();
    if (equals(clazz, getKClass(MouseEvent_0))) {
      var event = new MouseEvent_0();
      var dispatchMouseEvent = HtmlLightComponents$registerEventKind$dispatchMouseEvent(ed, event, this);
      var $receiver = listOf(['click', 'mouseover', 'mousemove', 'mouseup', 'mousedown']);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(this.addCloseableEventListener_0(node, item, HtmlLightComponents$registerEventKind$lambda$lambda(dispatchMouseEvent)));
      }
      return closeable(destination);
    }
     else if (equals(clazz, getKClass(KeyEvent))) {
      var event_0 = new KeyEvent();
      var dispatchMouseEvent_0 = HtmlLightComponents$registerEventKind$dispatchMouseEvent_0(ed, event_0);
      var $receiver_0 = listOf(['keydown', 'keyup', 'keypress']);
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(this.addCloseableEventListener_0(node, item_0, HtmlLightComponents$registerEventKind$lambda$lambda_0(dispatchMouseEvent_0)));
      }
      return closeable(destination_0);
    }
     else if (equals(clazz, getKClass(ChangeEvent))) {
      var event_1 = new ChangeEvent();
      var dispatchChangeEvent = HtmlLightComponents$registerEventKind$dispatchChangeEvent(ed, event_1);
      var $receiver_1 = listOf(['change', 'keypress', 'input', 'textInput', 'paste']);
      var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var item_1 = tmp$_2.next();
        destination_1.add_11rb$(this.addCloseableEventListener_0(node, item_1, HtmlLightComponents$registerEventKind$lambda$lambda_1(dispatchChangeEvent)));
      }
      cancellable(closeable(destination_1));
    }
     else if (equals(clazz, getKClass(ResizedEvent))) {
      var node_0 = window;
      var info = new ResizedEvent();
      var lastWidth = {v: -1};
      var lastHeight = {v: -1};
      var closed = {v: false};
      var update = HtmlLightComponents$registerEventKind$update(lastWidth, this, lastHeight, ed, info);
      var timer = HtmlLightComponents$registerEventKind$timer(update, closed);
      timer();
      return closeable(listOf([this.addCloseableEventListener_0(node_0, 'resize', HtmlLightComponents$registerEventKind$lambda(update)), this.addCloseableEventListener_0(node_0, 'deviceorientation', HtmlLightComponents$registerEventKind$lambda_0(update)), new HtmlLightComponents$registerEventKind$ObjectLiteral(closed)]));
    }
     else if (equals(clazz, getKClass(GamePadConnectionEvent))) {
      var info_0 = new GamePadConnectionEvent();
      var rnode = equals(node.tagName.toUpperCase(), 'CANVAS') ? window : node;
      var process = HtmlLightComponents$registerEventKind$process(ed, info_0);
      return closeable(listOf([this.addCloseableEventListener_0(rnode, 'gamepadconnected', HtmlLightComponents$registerEventKind$lambda_1(process)), this.addCloseableEventListener_0(rnode, 'gamepaddisconnected', HtmlLightComponents$registerEventKind$lambda_2(process))]));
    }
     else if (equals(clazz, getKClass(TouchEvent))) {
      var process_0 = HtmlLightComponents$registerEventKind$process_0(this);
      return closeable(listOf([this.addCloseableEventListener_0(node, 'touchstart', HtmlLightComponents$registerEventKind$lambda_3(process_0, ed)), this.addCloseableEventListener_0(node, 'touchend', HtmlLightComponents$registerEventKind$lambda_4(process_0, ed)), this.addCloseableEventListener_0(node, 'touchmove', HtmlLightComponents$registerEventKind$lambda_5(process_0, ed))]));
    }
     else if (equals(clazz, getKClass(DropFileEvent))) {
      var ondrop = HtmlLightComponents$registerEventKind$ondrop(ed);
      var ondragenter = HtmlLightComponents$registerEventKind$ondragenter(ed);
      var ondragexit = HtmlLightComponents$registerEventKind$ondragexit(ed);
      return closeable(listOf([this.addCloseableEventListener_0(node, 'drop', HtmlLightComponents$registerEventKind$lambda_6(ondrop)), this.addCloseableEventListener_0(node, 'dragenter', HtmlLightComponents$registerEventKind$lambda_7(ondragenter)), this.addCloseableEventListener_0(node, 'dragover', HtmlLightComponents$registerEventKind$lambda_8), this.addCloseableEventListener_0(node, 'dragleave', HtmlLightComponents$registerEventKind$lambda_9(ondragexit))]));
    }
    return lang.DummyCloseable;
  };
  HtmlLightComponents.prototype.callAction_rg4qv$ = function (c, key, param) {
    if (equals(key, LightAction$Companion_getInstance().FOCUS)) {
      var child = c;
      child.focus();
    }
  };
  HtmlLightComponents.prototype.setProperty_qiitpl$ = function (c, key, value) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var child = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : throwCCE();
    var childOrDocumentBody = equals(child.nodeName.toLowerCase(), 'article') ? document.body : child;
    var nodeName = child.nodeName.toLowerCase();
    if (equals(key, LightProperty$Companion_getInstance().TEXT)) {
      var v = key.get_s8jyv4$(value);
      if (equals(nodeName, 'article')) {
        document.title = v;
      }
       else if (equals(nodeName, 'input') || equals(nodeName, 'textarea')) {
        (Kotlin.isType(tmp$_0 = child, HTMLInputElement) ? tmp$_0 : throwCCE()).value = v;
      }
       else {
        if (child['data-type'] == 'checkbox') {
          (tmp$_2 = (tmp$_1 = child.querySelector('span')) == null || Kotlin.isType(tmp$_1, HTMLSpanElement) ? tmp$_1 : null) != null ? (tmp$_2.innerText = v) : null;
        }
         else {
          child.innerText = v;
        }
      }
    }
     else if (equals(key, LightProperty$Companion_getInstance().PROGRESS_CURRENT)) {
      var v_0 = key.get_s8jyv4$(value);
      (Kotlin.isType(tmp$_3 = child, HTMLInputElement) ? tmp$_3 : throwCCE()).value = v_0.toString();
    }
     else if (equals(key, LightProperty$Companion_getInstance().PROGRESS_MAX)) {
      var v_1 = key.get_s8jyv4$(value);
      (Kotlin.isType(tmp$_4 = child, HTMLInputElement) ? tmp$_4 : throwCCE()).max = v_1.toString();
    }
     else if (equals(key, LightProperty$Companion_getInstance().BGCOLOR)) {
      var v_2 = key.get_s8jyv4$(value);
      (tmp$_5 = childOrDocumentBody != null ? childOrDocumentBody.style : null) != null ? (tmp$_5.background = v_2.htmlColor) : null;
    }
     else if (equals(key, LightProperty$Companion_getInstance().IMAGE_SMOOTH)) {
      var v_3 = key.get_s8jyv4$(value);
      child.style.imageRendering = v_3 ? 'auto' : 'pixelated';
    }
     else if (equals(key, LightProperty$Companion_getInstance().ICON)) {
      var v_4 = key.get_s8jyv4$(value);
      if (v_4 != null) {
        var href = format.HtmlImage.htmlCanvasToDataUrl_ap7jt0$(format.HtmlImage.bitmapToHtmlCanvas_59u9qz$(v_4.toBMP32()));
        var link = document.querySelector("link[rel*='icon']");
        if (link == null) {
          link = Kotlin.isType(tmp$_6 = document.createElement('link'), HTMLLinkElement) ? tmp$_6 : throwCCE();
        }
        link.type = 'image/x-icon';
        link.rel = 'shortcut icon';
        link.href = href;
        (tmp$_7 = document.getElementsByTagName('head')[0]) != null ? tmp$_7.appendChild(link) : null;
      }
    }
     else if (equals(key, LightProperty$Companion_getInstance().IMAGE)) {
      var bmp = key.get_s8jyv4$(value);
      if (Kotlin.isType(bmp, HtmlNativeImage)) {
        this.setCanvas_0(c, bmp.lazyCanvasElement);
      }
       else {
        this.setImage32_0(c, bmp != null ? bmp.toBMP32() : null);
      }
    }
     else if (equals(key, LightProperty$Companion_getInstance().VISIBLE)) {
      var v_5 = key.get_s8jyv4$(value);
      child.style.display = v_5 ? 'block' : 'none';
    }
     else if (equals(key, LightProperty$Companion_getInstance().CHECKED)) {
      var v_6 = key.get_s8jyv4$(value);
      (Kotlin.isType(tmp$_8 = child.querySelector('input[type=checkbox]'), HTMLInputElement) ? tmp$_8 : throwCCE()).checked = v_6;
    }
  };
  HtmlLightComponents.prototype.getProperty_jku6jz$ = function (c, key) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var child = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : throwCCE();
    if (equals(key, LightProperty$Companion_getInstance().TEXT))
      return (tmp$_1 = (Kotlin.isType(tmp$_0 = child, HTMLInputElement) ? tmp$_0 : throwCCE()).value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    else if (equals(key, LightProperty$Companion_getInstance().CHECKED)) {
      var input = (Kotlin.isType(tmp$_2 = child, HTMLInputElement) ? tmp$_2 : throwCCE()).querySelector('input[type=checkbox]');
      var checked = input.checked;
      return (tmp$_3 = checked) == null || Kotlin.isType(tmp$_3, Any) ? tmp$_3 : throwCCE();
    }
    return LightComponents.prototype.getProperty_jku6jz$.call(this, c, key);
  };
  HtmlLightComponents.prototype.setCanvas_0 = function (c, bmp) {
    var tmp$, tmp$_0;
    var targetCanvas = Kotlin.isType(tmp$ = c, HTMLCanvasElement) ? tmp$ : throwCCE();
    if (bmp != null) {
      targetCanvas.width = bmp.width;
      targetCanvas.height = bmp.height;
      var ctx = Kotlin.isType(tmp$_0 = targetCanvas.getContext('2d'), CanvasRenderingContext2D) ? tmp$_0 : throwCCE();
      format.HtmlImage.htmlCanvasClear_ap7jt0$(targetCanvas);
      ctx.drawImage(bmp, 0.0, 0.0);
    }
     else {
      format.HtmlImage.htmlCanvasClear_ap7jt0$(targetCanvas);
    }
  };
  HtmlLightComponents.prototype.setImage32_0 = function (c, bmp) {
    var tmp$;
    var canvas = Kotlin.isType(tmp$ = c, HTMLCanvasElement) ? tmp$ : throwCCE();
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
    var child = Kotlin.isType(tmp$ = c, HTMLElement) ? tmp$ : throwCCE();
    var childStyle = child.style;
    childStyle.left = x.toString() + 'px';
    childStyle.top = y.toString() + 'px';
    childStyle.width = width.toString() + 'px';
    childStyle.height = height.toString() + 'px';
    if (Kotlin.isType(child, HTMLCanvasElement)) {
      child.width = numberToInt(width * this.xScale);
      child.height = numberToInt(height * this.yScale);
    }
  };
  HtmlLightComponents.prototype.repaint_za3rmp$ = function (c) {
    var tmp$;
    (tmp$ = mainFrame != null ? mainFrame.style : null) != null ? (tmp$.visibility = 'visible') : null;
  };
  var SuccessOrFailure = Kotlin.kotlin.SuccessOrFailure;
  function HtmlLightComponents$dialogAlert$lambda$lambda(closure$c) {
    return function () {
      closure$c.resumeWith_i5d895$(new SuccessOrFailure(Unit));
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
  var intercepted = Kotlin.kotlin.coroutines.intrinsics.intercepted_f9mg25$;
  var CancellableContinuationImpl_init = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellableContinuationImpl;
  function suspendCancellableCoroutine$lambda(closure$holdCancellability, closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      if (!closure$holdCancellability)
        cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  HtmlLightComponents.prototype.dialogAlert_hwpqgh$ = function (c, message_0, continuation_0, suspended) {
    var instance = new Coroutine$dialogAlert_hwpqgh$(this, c, message_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$dialogAlert_hwpqgh$($this, c, message_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$message = message_0;
  }
  Coroutine$dialogAlert_hwpqgh$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$dialogAlert_hwpqgh$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$dialogAlert_hwpqgh$.prototype.constructor = Coroutine$dialogAlert_hwpqgh$;
  Coroutine$dialogAlert_hwpqgh$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda(false, HtmlLightComponents$dialogAlert$lambda(this.local$message))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var SuccessOrFailure$SuccessOrFailure$Failure_init = Kotlin.kotlin.SuccessOrFailure.Failure;
  function HtmlLightComponents$dialogPrompt$lambda$lambda(closure$result, closure$c) {
    return function () {
      if (closure$result == null) {
        var $receiver = closure$c;
        var exception = new CancellationException('cancelled');
        $receiver.resumeWith_i5d895$(new SuccessOrFailure(new SuccessOrFailure$SuccessOrFailure$Failure_init(exception)));
      }
       else {
        var $receiver_0 = closure$c;
        var value = closure$result;
        $receiver_0.resumeWith_i5d895$(new SuccessOrFailure(value));
      }
      return Unit;
    };
  }
  function HtmlLightComponents$dialogPrompt$lambda(closure$message, closure$initialValue) {
    return function (c) {
      var result = window.prompt(closure$message, closure$initialValue);
      window.setTimeout(HtmlLightComponents$dialogPrompt$lambda$lambda(result, c), 0);
      return Unit;
    };
  }
  function suspendCancellableCoroutine$lambda_0(closure$holdCancellability, closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      if (!closure$holdCancellability)
        cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  HtmlLightComponents.prototype.dialogPrompt_h80hvh$$default = function (c, message_0, initialValue_0, continuation_0, suspended) {
    var instance = new Coroutine$dialogPrompt_h80hvh$$default(this, c, message_0, initialValue_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$dialogPrompt_h80hvh$$default($this, c, message_0, initialValue_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$message = message_0;
    this.local$initialValue = initialValue_0;
  }
  Coroutine$dialogPrompt_h80hvh$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$dialogPrompt_h80hvh$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$dialogPrompt_h80hvh$$default.prototype.constructor = Coroutine$dialogPrompt_h80hvh$$default;
  Coroutine$dialogPrompt_h80hvh$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda_0(false, HtmlLightComponents$dialogPrompt$lambda(this.local$message, this.local$initialValue))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function HtmlLightComponents$dialogOpenFile$lambda$lambda(closure$completedOnce, closure$files, closure$continuation) {
    return function () {
      var tmp$;
      if (!closure$completedOnce.v) {
        closure$completedOnce.v = true;
        selectedFiles = closure$files.v;
        if (closure$files.v.length > 0.0) {
          var fileName = closure$files.v[0].name;
          var ff = ArrayList_init();
          tmp$ = selectedFiles.length;
          for (var n = 0; n < tmp$; n++) {
            var element = selectedFiles[n];
            ff.add_11rb$(element);
          }
          var sf = new JsFilesVfs(ff);
          var $receiver = closure$continuation;
          var value = sf.get_61zpoe$(fileName);
          $receiver.resumeWith_i5d895$(new SuccessOrFailure(value));
        }
         else {
          var $receiver_0 = closure$continuation;
          var exception = new CancellationException('cancel');
          $receiver_0.resumeWith_i5d895$(new SuccessOrFailure(new SuccessOrFailure$SuccessOrFailure$Failure_init(exception)));
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
      closure$files.v = e.target['files'];
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
  function suspendCancellableCoroutine$lambda_1(closure$holdCancellability, closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      if (!closure$holdCancellability)
        cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  HtmlLightComponents.prototype.dialogOpenFile_hwpqgh$ = function (c, filter, continuation_0, suspended) {
    var instance = new Coroutine$dialogOpenFile_hwpqgh$(this, c, filter, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$dialogOpenFile_hwpqgh$($this, c, filter, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$dialogOpenFile_hwpqgh$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$dialogOpenFile_hwpqgh$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$dialogOpenFile_hwpqgh$.prototype.constructor = Coroutine$dialogOpenFile_hwpqgh$;
  Coroutine$dialogOpenFile_hwpqgh$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda_1(false, HtmlLightComponents$dialogOpenFile$lambda)(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HtmlLightComponents.prototype.openURL_61zpoe$ = function (url) {
    window.open(url, '_blank');
  };
  HtmlLightComponents.prototype.getDpi = function () {
    return numberToInt(window.devicePixelRatio) * 96 | 0;
  };
  HtmlLightComponents.prototype.getDevicePixelRatio = function () {
    var tmp$;
    return (tmp$ = window.devicePixelRatio) != null ? tmp$ : 1.0;
  };
  HtmlLightComponents.prototype.configuredFrame_za3rmp$ = function (handle) {
    var $receiver = this.getEventListener_za3rmp$(handle);
    var event = new ResizedEvent(this.windowWidth, this.windowHeight);
    $receiver.dispatch_dt5jzj$(getKClass(ResizedEvent), event);
  };
  HtmlLightComponents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlLightComponents',
    interfaces: [LightComponents]
  };
  function JsFileAsyncStreamBase(jsfile) {
    AsyncStreamBase.call(this);
    this.jsfile = jsfile;
  }
  JsFileAsyncStreamBase.prototype.getLength = function (continuation) {
    return Kotlin.Long.fromNumber(this.jsfile.size);
  };
  function JsFileAsyncStreamBase$readBytes$lambda$lambda(closure$reader, closure$c) {
    return function (it) {
      var result = closure$reader.result;
      var tmp$ = closure$c;
      var value = new Int8Array(result);
      tmp$.resumeWith_i5d895$(new SuccessOrFailure(value));
      return Unit;
    };
  }
  function JsFileAsyncStreamBase$readBytes$lambda$lambda_0(closure$c) {
    return function (it) {
      var $receiver = closure$c;
      var exception = RuntimeException_init('error reading file');
      $receiver.resumeWith_i5d895$(new SuccessOrFailure(new SuccessOrFailure$SuccessOrFailure$Failure_init(exception)));
      return Unit;
    };
  }
  function JsFileAsyncStreamBase$readBytes$lambda(this$JsFileAsyncStreamBase, closure$position, closure$len) {
    return function (c) {
      var reader = new FileReader();
      reader.onload = JsFileAsyncStreamBase$readBytes$lambda$lambda(reader, c);
      reader.onerror = JsFileAsyncStreamBase$readBytes$lambda$lambda_0(c);
      reader.readAsArrayBuffer(this$JsFileAsyncStreamBase.jsfile.slice(closure$position, closure$position + closure$len));
      return Unit;
    };
  }
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
    };
  }
  JsFileAsyncStreamBase.prototype.readBytes_12fank$ = function (position_0, len_0, continuation_0, suspended) {
    var instance = new Coroutine$readBytes_12fank$(this, position_0, len_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$readBytes_12fank$($this, position_0, len_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$position = position_0;
    this.local$len = len_0;
  }
  Coroutine$readBytes_12fank$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBytes_12fank$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBytes_12fank$.prototype.constructor = Coroutine$readBytes_12fank$;
  Coroutine$readBytes_12fank$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCoroutine$lambda(JsFileAsyncStreamBase$readBytes$lambda(this.$this, this.local$position, this.local$len))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            return this.result_0;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsFileAsyncStreamBase.prototype.read_4m9kcn$ = function (position_0, buffer_0, offset_0, len_0, continuation_0, suspended) {
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
            this.result_0 = this.$this.readBytes_12fank$(this.local$position.toNumber(), this.local$len, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var data = this.result_0;
            arraycopy_0(data, 0, this.local$buffer, this.local$offset, data.length);
            return data.length;
        }
      }
       catch (e) {
        if (this.state_0 === 1) {
          this.exceptionState_0 = this.state_0;
          throw e;
        }
         else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  JsFileAsyncStreamBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsFileAsyncStreamBase',
    interfaces: [AsyncStreamBase]
  };
  function JsFilesVfs(files) {
    Vfs.call(this);
    this.files = files;
  }
  JsFilesVfs.prototype._locate_0 = function (name) {
    var length = this.files.size;
    for (var n = 0; n < length; n++) {
      var file = this.files.get_za3lpa$(n);
      if (equals(file.name, name)) {
        return file;
      }
    }
    return null;
  };
  JsFilesVfs.prototype.locate_0 = function (path) {
    return this._locate_0(trim(path, Kotlin.charArrayOf(47)));
  };
  JsFilesVfs.prototype.open_vb0dls$ = function (path, mode, continuation) {
    var tmp$;
    tmp$ = this.locate_0(path);
    if (tmp$ == null) {
      throw new FileNotFoundException(path);
    }
    var jsfile = tmp$;
    return toAsyncStream(new JsFileAsyncStreamBase(jsfile));
  };
  JsFilesVfs.prototype.stat_61zpoe$ = function (path, continuation) {
    var tmp$;
    tmp$ = this.locate_0(path);
    if (tmp$ == null) {
      return this.createNonExistsStat_4w9ihe$(path);
    }
    var file = tmp$;
    return this.createExistsStat_mv8ifk$(path, false, Kotlin.Long.fromNumber(file.size));
  };
  JsFilesVfs.prototype.list_61zpoe$ = function (path, continuation) {
    var $receiver = this.files;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.get_61zpoe$(item.name));
    }
    return toAsync(destination);
  };
  JsFilesVfs.prototype.toString = function () {
    return 'JsFilesVfs';
  };
  JsFilesVfs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JsFilesVfs',
    interfaces: [Vfs]
  };
  function Nimbus_111_1420_Safari_GamepadMapping() {
    Nimbus_111_1420_Safari_GamepadMapping_instance = this;
    GamepadMapping.call(this);
    this.id_20msv0$_0 = '111-1420-Nimbus';
  }
  Object.defineProperty(Nimbus_111_1420_Safari_GamepadMapping.prototype, 'id', {
    get: function () {
      return this.id_20msv0$_0;
    }
  });
  Nimbus_111_1420_Safari_GamepadMapping.prototype.get_1ntcv1$ = function (button, buttons, axes) {
    var tmp$;
    switch (button.name) {
      case 'BUTTON0':
        tmp$ = this.getButton_dqglrj$(buttons, 0);
        break;
      case 'BUTTON1':
        tmp$ = this.getButton_dqglrj$(buttons, 1);
        break;
      case 'BUTTON2':
        tmp$ = this.getButton_dqglrj$(buttons, 2);
        break;
      case 'BUTTON3':
        tmp$ = this.getButton_dqglrj$(buttons, 3);
        break;
      case 'L1':
        tmp$ = this.getButton_dqglrj$(buttons, 4);
        break;
      case 'R1':
        tmp$ = this.getButton_dqglrj$(buttons, 5);
        break;
      case 'L2':
        tmp$ = this.getButton_dqglrj$(buttons, 6);
        break;
      case 'R2':
        tmp$ = this.getButton_dqglrj$(buttons, 7);
        break;
      case 'LEFT':
        tmp$ = this.getButton_dqglrj$(buttons, 8);
        break;
      case 'DOWN':
        tmp$ = this.getButton_dqglrj$(buttons, 9);
        break;
      case 'RIGHT':
        tmp$ = this.getButton_dqglrj$(buttons, 10);
        break;
      case 'UP':
        tmp$ = this.getButton_dqglrj$(buttons, 11);
        break;
      case 'SELECT':
        tmp$ = 0.0;
        break;
      case 'START':
        tmp$ = 0.0;
        break;
      case 'SYSTEM':
        tmp$ = 0.0;
        break;
      case 'LX':
        tmp$ = axes[0];
        break;
      case 'LY':
        tmp$ = axes[1];
        break;
      case 'RX':
        tmp$ = axes[2];
        break;
      case 'RY':
        tmp$ = axes[3];
        break;
      default:tmp$ = 0.0;
        break;
    }
    return tmp$;
  };
  Nimbus_111_1420_Safari_GamepadMapping.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Nimbus_111_1420_Safari_GamepadMapping',
    interfaces: [GamepadMapping]
  };
  var Nimbus_111_1420_Safari_GamepadMapping_instance = null;
  function Nimbus_111_1420_Safari_GamepadMapping_getInstance() {
    if (Nimbus_111_1420_Safari_GamepadMapping_instance === null) {
      new Nimbus_111_1420_Safari_GamepadMapping();
    }
    return Nimbus_111_1420_Safari_GamepadMapping_instance;
  }
  var knownControllers;
  function NativeLightsComponentsFactory() {
    NativeLightsComponentsFactory_instance = this;
  }
  NativeLightsComponentsFactory.prototype.create_1fupul$ = function (context) {
    return new HtmlLightComponents();
  };
  NativeLightsComponentsFactory.$metadata$ = {
    kind: Kind_OBJECT,
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
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korui = package$soywiz.korui || (package$soywiz.korui = {});
  package$korui.ApplicationAware = ApplicationAware;
  Object.defineProperty(Application, 'Companion', {
    get: Application$Companion_getInstance
  });
  package$korui.Application = Application;
  package$korui.Application_fnd1or$ = Application_0;
  $$importsForInline$$['klogger-js'] = $module$klogger_js;
  $$importsForInline$$['korui-js'] = _;
  package$korui.framePre_n94ab8$ = framePre;
  package$korui.framePost_7vdf2s$ = framePost;
  package$korui.frame_3que30$ = frame;
  package$korui.CanvasApplicationEx_9hehyl$ = CanvasApplicationEx;
  package$korui.Korui_6as5xg$ = Korui;
  package$korui.Screen = Screen;
  $$importsForInline$$['kds-js'] = $module$kds_js;
  EventDispatcher.Mixin = EventDispatcher$Mixin;
  Object.defineProperty(EventDispatcher, 'Companion', {
    get: EventDispatcher$Companion_getInstance
  });
  var package$event = package$korui.event || (package$korui.event = {});
  package$event.EventDispatcher = EventDispatcher;
  Object.defineProperty(package$event, 'DummyEventDispatcher', {
    get: DummyEventDispatcher_getInstance
  });
  package$event.Event = Event;
  package$event.preventDefault_s8jyv4$ = preventDefault;
  package$event.PreventDefaultException = PreventDefaultException;
  Object.defineProperty(MouseEvent$Type, 'MOVE', {
    get: MouseEvent$Type$MOVE_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'DRAG', {
    get: MouseEvent$Type$DRAG_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'UP', {
    get: MouseEvent$Type$UP_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'DOWN', {
    get: MouseEvent$Type$DOWN_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'CLICK', {
    get: MouseEvent$Type$CLICK_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'ENTER', {
    get: MouseEvent$Type$ENTER_getInstance
  });
  Object.defineProperty(MouseEvent$Type, 'EXIT', {
    get: MouseEvent$Type$EXIT_getInstance
  });
  MouseEvent_0.Type = MouseEvent$Type;
  package$event.MouseEvent = MouseEvent_0;
  package$event.MouseScrollEvent = MouseScrollEvent;
  Object.defineProperty(Touch, 'Companion', {
    get: Touch$Companion_getInstance
  });
  package$event.Touch = Touch;
  Object.defineProperty(TouchEvent$Type, 'START', {
    get: TouchEvent$Type$START_getInstance
  });
  Object.defineProperty(TouchEvent$Type, 'END', {
    get: TouchEvent$Type$END_getInstance
  });
  Object.defineProperty(TouchEvent$Type, 'MOVE', {
    get: TouchEvent$Type$MOVE_getInstance
  });
  TouchEvent.Type = TouchEvent$Type;
  package$event.TouchEvent = TouchEvent;
  Object.defineProperty(KeyEvent$Type, 'UP', {
    get: KeyEvent$Type$UP_getInstance
  });
  Object.defineProperty(KeyEvent$Type, 'DOWN', {
    get: KeyEvent$Type$DOWN_getInstance
  });
  Object.defineProperty(KeyEvent$Type, 'TYPE', {
    get: KeyEvent$Type$TYPE_getInstance
  });
  KeyEvent.Type = KeyEvent$Type;
  package$event.KeyEvent = KeyEvent;
  Object.defineProperty(GamePadConnectionEvent$Type, 'CONNECTED', {
    get: GamePadConnectionEvent$Type$CONNECTED_getInstance
  });
  Object.defineProperty(GamePadConnectionEvent$Type, 'DISCONNECTED', {
    get: GamePadConnectionEvent$Type$DISCONNECTED_getInstance
  });
  GamePadConnectionEvent.Type = GamePadConnectionEvent$Type;
  package$event.GamePadConnectionEvent = GamePadConnectionEvent;
  Object.defineProperty(GamePadButtonEvent$Type, 'UP', {
    get: GamePadButtonEvent$Type$UP_getInstance
  });
  Object.defineProperty(GamePadButtonEvent$Type, 'DOWN', {
    get: GamePadButtonEvent$Type$DOWN_getInstance
  });
  GamePadButtonEvent.Type = GamePadButtonEvent$Type;
  package$event.GamePadButtonEvent = GamePadButtonEvent;
  package$event.GamePadStickEvent = GamePadStickEvent;
  package$event.ChangeEvent = ChangeEvent;
  package$event.ResizedEvent = ResizedEvent;
  Object.defineProperty(DropFileEvent$Type, 'ENTER', {
    get: DropFileEvent$Type$ENTER_getInstance
  });
  Object.defineProperty(DropFileEvent$Type, 'EXIT', {
    get: DropFileEvent$Type$EXIT_getInstance
  });
  Object.defineProperty(DropFileEvent$Type, 'DROP', {
    get: DropFileEvent$Type$DROP_getInstance
  });
  DropFileEvent.Type = DropFileEvent$Type;
  package$event.DropFileEvent = DropFileEvent;
  package$event.MouseEvents = MouseEvents;
  package$event.KeysEvents = KeysEvents;
  package$event.mouse_voqr0r$ = mouse;
  package$event.keys_sfqeha$ = keys;
  Length.Fixed = Length$Fixed;
  Length.Variable = Length$Variable;
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
  Object.defineProperty(MouseButton, 'LEFT', {
    get: MouseButton$LEFT_getInstance
  });
  Object.defineProperty(MouseButton, 'RIGHT', {
    get: MouseButton$RIGHT_getInstance
  });
  Object.defineProperty(MouseButton, 'MIDDLE', {
    get: MouseButton$MIDDLE_getInstance
  });
  Object.defineProperty(MouseButton, 'BUTTON3', {
    get: MouseButton$BUTTON3_getInstance
  });
  Object.defineProperty(MouseButton, 'BUTTON4', {
    get: MouseButton$BUTTON4_getInstance
  });
  Object.defineProperty(MouseButton, 'BUTTON5', {
    get: MouseButton$BUTTON5_getInstance
  });
  Object.defineProperty(MouseButton, 'Companion', {
    get: MouseButton$Companion_getInstance
  });
  var package$input = package$korui.input || (package$korui.input = {});
  package$input.MouseButton = MouseButton;
  Object.defineProperty(Key, 'SPACE', {
    get: Key$SPACE_getInstance
  });
  Object.defineProperty(Key, 'APOSTROPHE', {
    get: Key$APOSTROPHE_getInstance
  });
  Object.defineProperty(Key, 'COMMA', {
    get: Key$COMMA_getInstance
  });
  Object.defineProperty(Key, 'MINUS', {
    get: Key$MINUS_getInstance
  });
  Object.defineProperty(Key, 'PERIOD', {
    get: Key$PERIOD_getInstance
  });
  Object.defineProperty(Key, 'SLASH', {
    get: Key$SLASH_getInstance
  });
  Object.defineProperty(Key, 'N0', {
    get: Key$N0_getInstance
  });
  Object.defineProperty(Key, 'N1', {
    get: Key$N1_getInstance
  });
  Object.defineProperty(Key, 'N2', {
    get: Key$N2_getInstance
  });
  Object.defineProperty(Key, 'N3', {
    get: Key$N3_getInstance
  });
  Object.defineProperty(Key, 'N4', {
    get: Key$N4_getInstance
  });
  Object.defineProperty(Key, 'N5', {
    get: Key$N5_getInstance
  });
  Object.defineProperty(Key, 'N6', {
    get: Key$N6_getInstance
  });
  Object.defineProperty(Key, 'N7', {
    get: Key$N7_getInstance
  });
  Object.defineProperty(Key, 'N8', {
    get: Key$N8_getInstance
  });
  Object.defineProperty(Key, 'N9', {
    get: Key$N9_getInstance
  });
  Object.defineProperty(Key, 'SEMICOLON', {
    get: Key$SEMICOLON_getInstance
  });
  Object.defineProperty(Key, 'EQUAL', {
    get: Key$EQUAL_getInstance
  });
  Object.defineProperty(Key, 'A', {
    get: Key$A_getInstance
  });
  Object.defineProperty(Key, 'B', {
    get: Key$B_getInstance
  });
  Object.defineProperty(Key, 'C', {
    get: Key$C_getInstance
  });
  Object.defineProperty(Key, 'D', {
    get: Key$D_getInstance
  });
  Object.defineProperty(Key, 'E', {
    get: Key$E_getInstance
  });
  Object.defineProperty(Key, 'F', {
    get: Key$F_getInstance
  });
  Object.defineProperty(Key, 'G', {
    get: Key$G_getInstance
  });
  Object.defineProperty(Key, 'H', {
    get: Key$H_getInstance
  });
  Object.defineProperty(Key, 'I', {
    get: Key$I_getInstance
  });
  Object.defineProperty(Key, 'J', {
    get: Key$J_getInstance
  });
  Object.defineProperty(Key, 'K', {
    get: Key$K_getInstance
  });
  Object.defineProperty(Key, 'L', {
    get: Key$L_getInstance
  });
  Object.defineProperty(Key, 'M', {
    get: Key$M_getInstance
  });
  Object.defineProperty(Key, 'N', {
    get: Key$N_getInstance
  });
  Object.defineProperty(Key, 'O', {
    get: Key$O_getInstance
  });
  Object.defineProperty(Key, 'P', {
    get: Key$P_getInstance
  });
  Object.defineProperty(Key, 'Q', {
    get: Key$Q_getInstance
  });
  Object.defineProperty(Key, 'R', {
    get: Key$R_getInstance
  });
  Object.defineProperty(Key, 'S', {
    get: Key$S_getInstance
  });
  Object.defineProperty(Key, 'T', {
    get: Key$T_getInstance
  });
  Object.defineProperty(Key, 'U', {
    get: Key$U_getInstance
  });
  Object.defineProperty(Key, 'V', {
    get: Key$V_getInstance
  });
  Object.defineProperty(Key, 'W', {
    get: Key$W_getInstance
  });
  Object.defineProperty(Key, 'X', {
    get: Key$X_getInstance
  });
  Object.defineProperty(Key, 'Y', {
    get: Key$Y_getInstance
  });
  Object.defineProperty(Key, 'Z', {
    get: Key$Z_getInstance
  });
  Object.defineProperty(Key, 'LEFT_BRACKET', {
    get: Key$LEFT_BRACKET_getInstance
  });
  Object.defineProperty(Key, 'BACKSLASH', {
    get: Key$BACKSLASH_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_BRACKET', {
    get: Key$RIGHT_BRACKET_getInstance
  });
  Object.defineProperty(Key, 'GRAVE_ACCENT', {
    get: Key$GRAVE_ACCENT_getInstance
  });
  Object.defineProperty(Key, 'WORLD_1', {
    get: Key$WORLD_1_getInstance
  });
  Object.defineProperty(Key, 'WORLD_2', {
    get: Key$WORLD_2_getInstance
  });
  Object.defineProperty(Key, 'ESCAPE', {
    get: Key$ESCAPE_getInstance
  });
  Object.defineProperty(Key, 'ENTER', {
    get: Key$ENTER_getInstance
  });
  Object.defineProperty(Key, 'TAB', {
    get: Key$TAB_getInstance
  });
  Object.defineProperty(Key, 'BACKSPACE', {
    get: Key$BACKSPACE_getInstance
  });
  Object.defineProperty(Key, 'INSERT', {
    get: Key$INSERT_getInstance
  });
  Object.defineProperty(Key, 'DELETE', {
    get: Key$DELETE_getInstance
  });
  Object.defineProperty(Key, 'RIGHT', {
    get: Key$RIGHT_getInstance
  });
  Object.defineProperty(Key, 'LEFT', {
    get: Key$LEFT_getInstance
  });
  Object.defineProperty(Key, 'DOWN', {
    get: Key$DOWN_getInstance
  });
  Object.defineProperty(Key, 'UP', {
    get: Key$UP_getInstance
  });
  Object.defineProperty(Key, 'PAGE_UP', {
    get: Key$PAGE_UP_getInstance
  });
  Object.defineProperty(Key, 'PAGE_DOWN', {
    get: Key$PAGE_DOWN_getInstance
  });
  Object.defineProperty(Key, 'HOME', {
    get: Key$HOME_getInstance
  });
  Object.defineProperty(Key, 'END', {
    get: Key$END_getInstance
  });
  Object.defineProperty(Key, 'CAPS_LOCK', {
    get: Key$CAPS_LOCK_getInstance
  });
  Object.defineProperty(Key, 'SCROLL_LOCK', {
    get: Key$SCROLL_LOCK_getInstance
  });
  Object.defineProperty(Key, 'NUM_LOCK', {
    get: Key$NUM_LOCK_getInstance
  });
  Object.defineProperty(Key, 'PRINT_SCREEN', {
    get: Key$PRINT_SCREEN_getInstance
  });
  Object.defineProperty(Key, 'PAUSE', {
    get: Key$PAUSE_getInstance
  });
  Object.defineProperty(Key, 'F1', {
    get: Key$F1_getInstance
  });
  Object.defineProperty(Key, 'F2', {
    get: Key$F2_getInstance
  });
  Object.defineProperty(Key, 'F3', {
    get: Key$F3_getInstance
  });
  Object.defineProperty(Key, 'F4', {
    get: Key$F4_getInstance
  });
  Object.defineProperty(Key, 'F5', {
    get: Key$F5_getInstance
  });
  Object.defineProperty(Key, 'F6', {
    get: Key$F6_getInstance
  });
  Object.defineProperty(Key, 'F7', {
    get: Key$F7_getInstance
  });
  Object.defineProperty(Key, 'F8', {
    get: Key$F8_getInstance
  });
  Object.defineProperty(Key, 'F9', {
    get: Key$F9_getInstance
  });
  Object.defineProperty(Key, 'F10', {
    get: Key$F10_getInstance
  });
  Object.defineProperty(Key, 'F11', {
    get: Key$F11_getInstance
  });
  Object.defineProperty(Key, 'F12', {
    get: Key$F12_getInstance
  });
  Object.defineProperty(Key, 'F13', {
    get: Key$F13_getInstance
  });
  Object.defineProperty(Key, 'F14', {
    get: Key$F14_getInstance
  });
  Object.defineProperty(Key, 'F15', {
    get: Key$F15_getInstance
  });
  Object.defineProperty(Key, 'F16', {
    get: Key$F16_getInstance
  });
  Object.defineProperty(Key, 'F17', {
    get: Key$F17_getInstance
  });
  Object.defineProperty(Key, 'F18', {
    get: Key$F18_getInstance
  });
  Object.defineProperty(Key, 'F19', {
    get: Key$F19_getInstance
  });
  Object.defineProperty(Key, 'F20', {
    get: Key$F20_getInstance
  });
  Object.defineProperty(Key, 'F21', {
    get: Key$F21_getInstance
  });
  Object.defineProperty(Key, 'F22', {
    get: Key$F22_getInstance
  });
  Object.defineProperty(Key, 'F23', {
    get: Key$F23_getInstance
  });
  Object.defineProperty(Key, 'F24', {
    get: Key$F24_getInstance
  });
  Object.defineProperty(Key, 'F25', {
    get: Key$F25_getInstance
  });
  Object.defineProperty(Key, 'KP_0', {
    get: Key$KP_0_getInstance
  });
  Object.defineProperty(Key, 'KP_1', {
    get: Key$KP_1_getInstance
  });
  Object.defineProperty(Key, 'KP_2', {
    get: Key$KP_2_getInstance
  });
  Object.defineProperty(Key, 'KP_3', {
    get: Key$KP_3_getInstance
  });
  Object.defineProperty(Key, 'KP_4', {
    get: Key$KP_4_getInstance
  });
  Object.defineProperty(Key, 'KP_5', {
    get: Key$KP_5_getInstance
  });
  Object.defineProperty(Key, 'KP_6', {
    get: Key$KP_6_getInstance
  });
  Object.defineProperty(Key, 'KP_7', {
    get: Key$KP_7_getInstance
  });
  Object.defineProperty(Key, 'KP_8', {
    get: Key$KP_8_getInstance
  });
  Object.defineProperty(Key, 'KP_9', {
    get: Key$KP_9_getInstance
  });
  Object.defineProperty(Key, 'KP_DECIMAL', {
    get: Key$KP_DECIMAL_getInstance
  });
  Object.defineProperty(Key, 'KP_DIVIDE', {
    get: Key$KP_DIVIDE_getInstance
  });
  Object.defineProperty(Key, 'KP_MULTIPLY', {
    get: Key$KP_MULTIPLY_getInstance
  });
  Object.defineProperty(Key, 'KP_SUBTRACT', {
    get: Key$KP_SUBTRACT_getInstance
  });
  Object.defineProperty(Key, 'KP_ADD', {
    get: Key$KP_ADD_getInstance
  });
  Object.defineProperty(Key, 'KP_ENTER', {
    get: Key$KP_ENTER_getInstance
  });
  Object.defineProperty(Key, 'KP_EQUAL', {
    get: Key$KP_EQUAL_getInstance
  });
  Object.defineProperty(Key, 'LEFT_SHIFT', {
    get: Key$LEFT_SHIFT_getInstance
  });
  Object.defineProperty(Key, 'LEFT_CONTROL', {
    get: Key$LEFT_CONTROL_getInstance
  });
  Object.defineProperty(Key, 'LEFT_ALT', {
    get: Key$LEFT_ALT_getInstance
  });
  Object.defineProperty(Key, 'LEFT_SUPER', {
    get: Key$LEFT_SUPER_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_SHIFT', {
    get: Key$RIGHT_SHIFT_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_CONTROL', {
    get: Key$RIGHT_CONTROL_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_ALT', {
    get: Key$RIGHT_ALT_getInstance
  });
  Object.defineProperty(Key, 'RIGHT_SUPER', {
    get: Key$RIGHT_SUPER_getInstance
  });
  Object.defineProperty(Key, 'MENU', {
    get: Key$MENU_getInstance
  });
  Object.defineProperty(Key, 'UNDERLINE', {
    get: Key$UNDERLINE_getInstance
  });
  Object.defineProperty(Key, 'SELECT_KEY', {
    get: Key$SELECT_KEY_getInstance
  });
  Object.defineProperty(Key, 'UNKNOWN', {
    get: Key$UNKNOWN_getInstance
  });
  package$input.Key = Key;
  Object.defineProperty(GameStick, 'LEFT', {
    get: GameStick$LEFT_getInstance
  });
  Object.defineProperty(GameStick, 'RIGHT', {
    get: GameStick$RIGHT_getInstance
  });
  Object.defineProperty(GameStick, 'Companion', {
    get: GameStick$Companion_getInstance
  });
  package$input.GameStick = GameStick;
  Object.defineProperty(GameButton, 'LEFT', {
    get: GameButton$LEFT_getInstance
  });
  Object.defineProperty(GameButton, 'RIGHT', {
    get: GameButton$RIGHT_getInstance
  });
  Object.defineProperty(GameButton, 'UP', {
    get: GameButton$UP_getInstance
  });
  Object.defineProperty(GameButton, 'DOWN', {
    get: GameButton$DOWN_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON0', {
    get: GameButton$BUTTON0_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON1', {
    get: GameButton$BUTTON1_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON2', {
    get: GameButton$BUTTON2_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON3', {
    get: GameButton$BUTTON3_getInstance
  });
  Object.defineProperty(GameButton, 'SELECT', {
    get: GameButton$SELECT_getInstance
  });
  Object.defineProperty(GameButton, 'START', {
    get: GameButton$START_getInstance
  });
  Object.defineProperty(GameButton, 'SYSTEM', {
    get: GameButton$SYSTEM_getInstance
  });
  Object.defineProperty(GameButton, 'L1', {
    get: GameButton$L1_getInstance
  });
  Object.defineProperty(GameButton, 'R1', {
    get: GameButton$R1_getInstance
  });
  Object.defineProperty(GameButton, 'L2', {
    get: GameButton$L2_getInstance
  });
  Object.defineProperty(GameButton, 'R2', {
    get: GameButton$R2_getInstance
  });
  Object.defineProperty(GameButton, 'L3', {
    get: GameButton$L3_getInstance
  });
  Object.defineProperty(GameButton, 'R3', {
    get: GameButton$R3_getInstance
  });
  Object.defineProperty(GameButton, 'LX', {
    get: GameButton$LX_getInstance
  });
  Object.defineProperty(GameButton, 'LY', {
    get: GameButton$LY_getInstance
  });
  Object.defineProperty(GameButton, 'RX', {
    get: GameButton$RX_getInstance
  });
  Object.defineProperty(GameButton, 'RY', {
    get: GameButton$RY_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON4', {
    get: GameButton$BUTTON4_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON5', {
    get: GameButton$BUTTON5_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON6', {
    get: GameButton$BUTTON6_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON7', {
    get: GameButton$BUTTON7_getInstance
  });
  Object.defineProperty(GameButton, 'BUTTON8', {
    get: GameButton$BUTTON8_getInstance
  });
  Object.defineProperty(GameButton, 'Companion', {
    get: GameButton$Companion_getInstance
  });
  package$input.GameButton = GameButton;
  package$input.GamepadInfo = GamepadInfo;
  package$input.GamepadMapping = GamepadMapping;
  Object.defineProperty(package$input, 'StandardGamepadMapping', {
    get: StandardGamepadMapping_getInstance
  });
  var package$light = package$korui.light || (package$korui.light = {});
  Object.defineProperty(package$light, 'lightLog_8be2vx$', {
    get: function () {
      return lightLog;
    }
  });
  package$light.LightComponentsFactory = LightComponentsFactory;
  Object.defineProperty(LightQuality, 'QUALITY', {
    get: LightQuality$QUALITY_getInstance
  });
  Object.defineProperty(LightQuality, 'PERFORMANCE', {
    get: LightQuality$PERFORMANCE_getInstance
  });
  package$light.LightQuality = LightQuality;
  LightComponents.LightComponentInfo = LightComponents$LightComponentInfo;
  package$light.LightComponents = LightComponents;
  Object.defineProperty(package$light, 'defaultLightFactory', {
    get: get_defaultLightFactory
  });
  package$light.defaultLight_1fupul$ = defaultLight;
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
  Object.defineProperty(LightType, 'COMBO_BOX', {
    get: LightType$COMBO_BOX_getInstance
  });
  Object.defineProperty(LightType, 'RADIO_BUTTON', {
    get: LightType$RADIO_BUTTON_getInstance
  });
  Object.defineProperty(LightType, 'SLIDER', {
    get: LightType$SLIDER_getInstance
  });
  Object.defineProperty(LightType, 'TABPANE', {
    get: LightType$TABPANE_getInstance
  });
  Object.defineProperty(LightType, 'TABPAGE', {
    get: LightType$TABPAGE_getInstance
  });
  package$light.LightType = LightType;
  package$light.ComboBoxItem = ComboBoxItem;
  Object.defineProperty(LightAction, 'Companion', {
    get: LightAction$Companion_getInstance
  });
  package$light.LightAction = LightAction;
  Object.defineProperty(LightProperty, 'Companion', {
    get: LightProperty$Companion_getInstance
  });
  package$light.LightProperty = LightProperty;
  package$light.get_ag_tl6g5e$ = get_ag;
  package$light.set_ag_gdt3dl$ = set_ag;
  var package$log = package$light.log || (package$light.log = {});
  package$log.LogLightComponents = LogLightComponents;
  var package$react = package$korui.react || (package$korui.react = {});
  Object.defineProperty(package$react, 'React', {
    get: React_getInstance
  });
  package$react.ReactComponent = ReactComponent;
  package$react.attachReactComponent_77c6do$ = attachReactComponent;
  package$react.reactFrame_b0yaq8$ = reactFrame;
  package$react.ReactUpdater = ReactUpdater;
  package$react.synchronizeTo_ce43r1$ = synchronizeTo;
  package$react.getComponentsByKey_f2m0ba$ = getComponentsByKey;
  Object.defineProperty(package$react, 'DummyLightComponents', {
    get: DummyLightComponents_getInstance
  });
  package$react.get_key_y2fzii$ = get_key;
  package$react.set_key_ft9o6t$ = set_key;
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
  package$ui.TabPane = TabPane;
  package$ui.TabPage = TabPage;
  package$ui.Frame = Frame;
  package$ui.AgCanvas = AgCanvas;
  package$ui.Button = Button;
  package$ui.ComboBox = ComboBox;
  package$ui.Label = Label;
  package$ui.TextField = TextField;
  package$ui.TextArea = TextArea;
  package$ui.CheckBox = CheckBox;
  package$ui.RadioButtonGroup = RadioButtonGroup;
  package$ui.RadioButton = RadioButton;
  package$ui.Progress = Progress;
  package$ui.Slider = Slider;
  package$ui.Spacer = Spacer;
  package$ui.Image = Image;
  package$ui.CustomComponent = CustomComponent;
  package$ui.BaseCanvas = BaseCanvas;
  package$ui.VectorImage = VectorImage;
  package$ui.setSize_bakply$ = setSize;
  package$ui.button_2tkcjd$ = button;
  package$ui.progress_ldwcq4$ = progress;
  package$ui.slider_e97nrc$ = slider;
  package$ui.agCanvas_25j7gb$ = agCanvas;
  package$ui.image_mgnqpk$ = image;
  package$ui.image_wfl2m6$ = image_0;
  package$ui.spacer_r5smt6$ = spacer;
  package$ui.label_9aibpz$ = label;
  package$ui.comboBox_xkb3r5$ = comboBox;
  package$ui.checkBox_exwykh$ = checkBox;
  package$ui.radioButton_vdjnn$ = radioButton;
  package$ui.textField_udeuls$ = textField;
  package$ui.textArea_f0qump$ = textArea;
  package$ui.layers_tkfvn2$ = layers;
  $$importsForInline$$['korma-js'] = $module$korma_js;
  package$ui.layersKeepAspectRatio_2p4qfc$ = layersKeepAspectRatio;
  package$ui.vertical_tkfvn2$ = vertical;
  package$ui.horizontal_tkfvn2$ = horizontal;
  package$ui.inline_tkfvn2$ = inline;
  package$ui.relative_tkfvn2$ = relative;
  package$ui.scrollPane_lgr6m4$ = scrollPane;
  package$ui.tabPane_j71cpe$ = tabPane;
  package$ui.page_ya6sjn$ = page;
  package$ui.vectorImage_lz2sxk$ = vectorImage;
  package$ui.vectorImage_fu8jv7$ = vectorImage_0;
  package$ui.ComponentDslMarker = ComponentDslMarker;
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
  Object.defineProperty(package$korui, 'KoruiDispatcher', {
    get: get_KoruiDispatcher
  });
  package$korui.toMillisFaster_xobtn0$ = toMillisFaster;
  Object.defineProperty(package$korui, 'NodeDispatcher', {
    get: NodeDispatcher_getInstance
  });
  Object.defineProperty(package$korui, 'HtmlDispatcher', {
    get: HtmlDispatcher_getInstance
  });
  package$korui.Queue = Queue;
  package$korui.MessageQueue = MessageQueue;
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
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$light.HtmlLightComponents = HtmlLightComponents;
  package$light.JsFileAsyncStreamBase = JsFileAsyncStreamBase;
  package$light.JsFilesVfs = JsFilesVfs;
  Object.defineProperty(package$light, 'Nimbus_111_1420_Safari_GamepadMapping', {
    get: Nimbus_111_1420_Safari_GamepadMapping_getInstance
  });
  Object.defineProperty(package$light, 'knownControllers', {
    get: function () {
      return knownControllers;
    }
  });
  Object.defineProperty(package$light, 'NativeLightsComponentsFactory', {
    get: NativeLightsComponentsFactory_getInstance
  });
  DummyEventDispatcher.prototype.copyFrom_llfj4l$ = EventDispatcher.prototype.copyFrom_llfj4l$;
  Component.prototype.copyFrom_llfj4l$ = EventDispatcher.prototype.copyFrom_llfj4l$;
  NodeDispatcher.prototype.delay_tho5ed$$default = Delay.prototype.delay_tho5ed$$default;
  NodeDispatcher.prototype.delayFrame_fefoe3$ = DelayFrame.prototype.delayFrame_fefoe3$;
  NodeDispatcher.prototype.delay_tho5ed$ = Delay.prototype.delay_tho5ed$;
  HtmlDispatcher.prototype.delay_tho5ed$$default = Delay.prototype.delay_tho5ed$$default;
  HtmlDispatcher.prototype.delay_tho5ed$ = Delay.prototype.delay_tho5ed$;
  koruiApplicationLog = Logger.Companion.invoke_61zpoe$('korui-application');
  lightLog = Logger.Companion.invoke_61zpoe$('light');
  defaultLightFactory = lazy(defaultLightFactory$lambda);
  ag = new extraProperty('ag', ag$lambda);
  key = new extraProperty('react.key', key$lambda);
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  windowInputFile = null;
  selectedFiles = [];
  mainFrame = null;
  var $receiver = listOf([StandardGamepadMapping_getInstance(), Nimbus_111_1420_Safari_GamepadMapping_getInstance()]);
  var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
  var destination = LinkedHashMap_init_0(capacity);
  var tmp$;
  tmp$ = $receiver.iterator();
  while (tmp$.hasNext()) {
    var element = tmp$.next();
    destination.put_xwzc9p$(element.id, element);
  }
  knownControllers = destination;
  Kotlin.defineModule('korui-js', _);
  return _;
}));

//# sourceMappingURL=korui-js.js.map
