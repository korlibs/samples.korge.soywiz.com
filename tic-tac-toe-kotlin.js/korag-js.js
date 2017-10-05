(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio-js', 'korim-js', 'korma-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio-js'), require('korim-js'), require('korma-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korag-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korag-js'.");
    }
    if (typeof this['korim-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'korag-js'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korag-js'.");
    }
    root['korag-js'] = factory(typeof this['korag-js'] === 'undefined' ? {} : this['korag-js'], kotlin, this['korio-js'], this['korim-js'], this['korma-js']);
  }
}(this, function (_, Kotlin, $module$korio_js, $module$korim_js, $module$korma_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Signal = $module$korio_js.com.soywiz.korio.async.Signal;
  var Unit = Kotlin.kotlin.Unit;
  var Enum = Kotlin.kotlin.Enum;
  var experimental = Kotlin.kotlin.coroutines.experimental;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var async = $module$korio_js.com.soywiz.korio.async.async_g3zeo5$;
  var Closeable = $module$korio_js.com.soywiz.korio.lang.Closeable;
  var FastMemory = $module$korio_js.com.soywiz.korio.mem.FastMemory;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var color = $module$korim_js.com.soywiz.korim.color;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Extra = $module$korio_js.com.soywiz.korio.util.Extra;
  var Extra$Mixin = $module$korio_js.com.soywiz.korio.util.Extra.Mixin;
  var Promise$Deferred = $module$korio_js.com.soywiz.korio.async.Promise.Deferred;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Pool_init = $module$korio_js.com.soywiz.korio.util.Pool_init_xsjjga$;
  var toList = Kotlin.kotlin.collections.toList_rjqryz$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var Any = Object;
  var StringBuilder = Kotlin.kotlin.text.StringBuilder;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toList_0 = Kotlin.kotlin.collections.toList_us0mfu$;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var lang = $module$korio_js.com.soywiz.korio.lang;
  var CanvasNativeImage = $module$korim_js.com.soywiz.korim.format.CanvasNativeImage;
  var Bitmap32 = $module$korim_js.com.soywiz.korim.bitmap.Bitmap32;
  var Bitmap8 = $module$korim_js.com.soywiz.korim.bitmap.Bitmap8;
  var toShortArray = Kotlin.kotlin.collections.toShortArray_p5z1wt$;
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var Once = $module$korio_js.com.soywiz.korio.util.Once;
  AG$BlendEquation.prototype = Object.create(Enum.prototype);
  AG$BlendEquation.prototype.constructor = AG$BlendEquation;
  AG$BlendFactor.prototype = Object.create(Enum.prototype);
  AG$BlendFactor.prototype.constructor = AG$BlendFactor;
  AG$Texture$Kind.prototype = Object.create(Enum.prototype);
  AG$Texture$Kind.prototype.constructor = AG$Texture$Kind;
  AG$Buffer$Kind.prototype = Object.create(Enum.prototype);
  AG$Buffer$Kind.prototype.constructor = AG$Buffer$Kind;
  AG$DrawType.prototype = Object.create(Enum.prototype);
  AG$DrawType.prototype.constructor = AG$DrawType;
  AG$StencilOp.prototype = Object.create(Enum.prototype);
  AG$StencilOp.prototype.constructor = AG$StencilOp;
  AG$TriangleFace.prototype = Object.create(Enum.prototype);
  AG$TriangleFace.prototype.constructor = AG$TriangleFace;
  AG$CompareMode.prototype = Object.create(Enum.prototype);
  AG$CompareMode.prototype.constructor = AG$CompareMode;
  LogAG$LogTexture.prototype = Object.create(AG$Texture.prototype);
  LogAG$LogTexture.prototype.constructor = LogAG$LogTexture;
  LogAG$LogBuffer.prototype = Object.create(AG$Buffer.prototype);
  LogAG$LogBuffer.prototype.constructor = LogAG$LogBuffer;
  LogAG$LogRenderBuffer.prototype = Object.create(AG$RenderBuffer.prototype);
  LogAG$LogRenderBuffer.prototype.constructor = LogAG$LogRenderBuffer;
  LogAG.prototype = Object.create(AG.prototype);
  LogAG.prototype.constructor = LogAG;
  GlslGenerator.prototype = Object.create(Program$Visitor.prototype);
  GlslGenerator.prototype.constructor = GlslGenerator;
  VarType.prototype = Object.create(Enum.prototype);
  VarType.prototype.constructor = VarType;
  ShaderType.prototype = Object.create(Enum.prototype);
  ShaderType.prototype.constructor = ShaderType;
  Variable.prototype = Object.create(Operand.prototype);
  Variable.prototype.constructor = Variable;
  Attribute.prototype = Object.create(Variable.prototype);
  Attribute.prototype.constructor = Attribute;
  Varying.prototype = Object.create(Variable.prototype);
  Varying.prototype.constructor = Varying;
  Uniform.prototype = Object.create(Variable.prototype);
  Uniform.prototype.constructor = Uniform;
  Temp.prototype = Object.create(Variable.prototype);
  Temp.prototype.constructor = Temp;
  Output.prototype = Object.create(Variable.prototype);
  Output.prototype.constructor = Output;
  Program$Binop.prototype = Object.create(Operand.prototype);
  Program$Binop.prototype.constructor = Program$Binop;
  Program$IntLiteral.prototype = Object.create(Operand.prototype);
  Program$IntLiteral.prototype.constructor = Program$IntLiteral;
  Program$FloatLiteral.prototype = Object.create(Operand.prototype);
  Program$FloatLiteral.prototype.constructor = Program$FloatLiteral;
  Program$BoolLiteral.prototype = Object.create(Operand.prototype);
  Program$BoolLiteral.prototype.constructor = Program$BoolLiteral;
  Program$Vector.prototype = Object.create(Operand.prototype);
  Program$Vector.prototype.constructor = Program$Vector;
  Program$Swizzle.prototype = Object.create(Operand.prototype);
  Program$Swizzle.prototype.constructor = Program$Swizzle;
  Program$Func.prototype = Object.create(Operand.prototype);
  Program$Func.prototype.constructor = Program$Func;
  Program$Stm$Stms.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$Stms.prototype.constructor = Program$Stm$Stms;
  Program$Stm$Set.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$Set.prototype.constructor = Program$Stm$Set;
  Program$Stm$Discard.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$Discard.prototype.constructor = Program$Stm$Discard;
  Program$Stm$If.prototype = Object.create(Program$Stm.prototype);
  Program$Stm$If.prototype.constructor = Program$Stm$If;
  Shader$uniforms$lambda$ObjectLiteral.prototype = Object.create(Program$Visitor.prototype);
  Shader$uniforms$lambda$ObjectLiteral.prototype.constructor = Shader$uniforms$lambda$ObjectLiteral;
  Shader$attributes$lambda$ObjectLiteral.prototype = Object.create(Program$Visitor.prototype);
  Shader$attributes$lambda$ObjectLiteral.prototype.constructor = Shader$attributes$lambda$ObjectLiteral;
  VertexShader.prototype = Object.create(Shader.prototype);
  VertexShader.prototype.constructor = VertexShader;
  FragmentShader.prototype = Object.create(Shader.prototype);
  FragmentShader.prototype.constructor = FragmentShader;
  AGSoftware.prototype = Object.create(AG.prototype);
  AGSoftware.prototype.constructor = AGSoftware;
  AGWebgl$WebglTexture.prototype = Object.create(AG$Texture.prototype);
  AGWebgl$WebglTexture.prototype.constructor = AGWebgl$WebglTexture;
  AGWebgl$WebglBuffer.prototype = Object.create(AG$Buffer.prototype);
  AGWebgl$WebglBuffer.prototype.constructor = AGWebgl$WebglBuffer;
  AGWebgl$WebglRenderBuffer.prototype = Object.create(AG$RenderBuffer.prototype);
  AGWebgl$WebglRenderBuffer.prototype.constructor = AGWebgl$WebglRenderBuffer;
  AGWebgl.prototype = Object.create(AG.prototype);
  AGWebgl.prototype.constructor = AGWebgl;
  function defaultFactory$lambda() {
    return AGFactoryFactory_getInstance().create();
  }
  var defaultFactory;
  function get_defaultFactory() {
    new Kotlin.PropertyMetadata('defaultFactory');
    return defaultFactory.value;
  }
  function agFactory$lambda() {
    return get_defaultFactory();
  }
  var agFactory;
  function get_agFactory() {
    new Kotlin.PropertyMetadata('agFactory');
    return agFactory.value;
  }
  function AGFactory() {
  }
  AGFactory.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'AGFactory',
    interfaces: []
  };
  function AGInput() {
    this.mouseEvent = new AGInput$MouseEvent();
    this.keyEvent = new AGInput$KeyEvent();
    this.gamepadEvent = new AGInput$GamepadEvent();
    this.touchEvent = new AGInput$TouchEvent();
    this.onMouseOver_6kk5ye$_0 = new Signal();
    this.onMouseUp_akqznx$_0 = new Signal();
    this.onMouseDown_6qq050$_0 = new Signal();
    this.onMouseClick_3jzwou$_0 = new Signal();
    this.onKeyDown_q3dda$_0 = new Signal();
    this.onKeyUp_euut3b$_0 = new Signal();
    this.onKeyTyped_eqt8q2$_0 = new Signal();
    this.onTouchStart_pd6uv2$_0 = new Signal();
    this.onTouchEnd_nlirxh$_0 = new Signal();
    this.onTouchMove_lcgw83$_0 = new Signal();
    this.onGamepadButtonDown_4kj1a6$_0 = new Signal();
    this.onGamepadButtonUp_84vmjp$_0 = new Signal();
  }
  function AGInput$MouseEvent(buttons, x, y) {
    if (buttons === void 0)
      buttons = 0;
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    this.buttons = buttons;
    this.x = x;
    this.y = y;
  }
  AGInput$MouseEvent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MouseEvent',
    interfaces: []
  };
  AGInput$MouseEvent.prototype.component1 = function () {
    return this.buttons;
  };
  AGInput$MouseEvent.prototype.component2 = function () {
    return this.x;
  };
  AGInput$MouseEvent.prototype.component3 = function () {
    return this.y;
  };
  AGInput$MouseEvent.prototype.copy_qt1dr2$ = function (buttons, x, y) {
    return new AGInput$MouseEvent(buttons === void 0 ? this.buttons : buttons, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  AGInput$MouseEvent.prototype.toString = function () {
    return 'MouseEvent(buttons=' + Kotlin.toString(this.buttons) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  AGInput$MouseEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.buttons) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  AGInput$MouseEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.buttons, other.buttons) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function AGInput$KeyEvent(keyCode) {
    if (keyCode === void 0)
      keyCode = 0;
    this.keyCode = keyCode;
  }
  AGInput$KeyEvent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'KeyEvent',
    interfaces: []
  };
  AGInput$KeyEvent.prototype.component1 = function () {
    return this.keyCode;
  };
  AGInput$KeyEvent.prototype.copy_za3lpa$ = function (keyCode) {
    return new AGInput$KeyEvent(keyCode === void 0 ? this.keyCode : keyCode);
  };
  AGInput$KeyEvent.prototype.toString = function () {
    return 'KeyEvent(keyCode=' + Kotlin.toString(this.keyCode) + ')';
  };
  AGInput$KeyEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.keyCode) | 0;
    return result;
  };
  AGInput$KeyEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.keyCode, other.keyCode))));
  };
  function AGInput$GamepadEvent(padIndex, button) {
    if (padIndex === void 0)
      padIndex = 0;
    if (button === void 0)
      button = 0;
    this.padIndex = padIndex;
    this.button = button;
  }
  AGInput$GamepadEvent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GamepadEvent',
    interfaces: []
  };
  AGInput$GamepadEvent.prototype.component1 = function () {
    return this.padIndex;
  };
  AGInput$GamepadEvent.prototype.component2 = function () {
    return this.button;
  };
  AGInput$GamepadEvent.prototype.copy_vux9f0$ = function (padIndex, button) {
    return new AGInput$GamepadEvent(padIndex === void 0 ? this.padIndex : padIndex, button === void 0 ? this.button : button);
  };
  AGInput$GamepadEvent.prototype.toString = function () {
    return 'GamepadEvent(padIndex=' + Kotlin.toString(this.padIndex) + (', button=' + Kotlin.toString(this.button)) + ')';
  };
  AGInput$GamepadEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.padIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.button) | 0;
    return result;
  };
  AGInput$GamepadEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.padIndex, other.padIndex) && Kotlin.equals(this.button, other.button)))));
  };
  function AGInput$TouchEvent(id, x, y) {
    if (id === void 0)
      id = 0;
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    this.id = id;
    this.x = x;
    this.y = y;
  }
  AGInput$TouchEvent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TouchEvent',
    interfaces: []
  };
  AGInput$TouchEvent.prototype.component1 = function () {
    return this.id;
  };
  AGInput$TouchEvent.prototype.component2 = function () {
    return this.x;
  };
  AGInput$TouchEvent.prototype.component3 = function () {
    return this.y;
  };
  AGInput$TouchEvent.prototype.copy_qt1dr2$ = function (id, x, y) {
    return new AGInput$TouchEvent(id === void 0 ? this.id : id, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  AGInput$TouchEvent.prototype.toString = function () {
    return 'TouchEvent(id=' + Kotlin.toString(this.id) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  AGInput$TouchEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  AGInput$TouchEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  Object.defineProperty(AGInput.prototype, 'mouseX', {
    get: function () {
      return this.mouseEvent.x;
    }
  });
  Object.defineProperty(AGInput.prototype, 'mouseY', {
    get: function () {
      return this.mouseEvent.y;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onMouseOver', {
    get: function () {
      return this.onMouseOver_6kk5ye$_0;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onMouseUp', {
    get: function () {
      return this.onMouseUp_akqznx$_0;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onMouseDown', {
    get: function () {
      return this.onMouseDown_6qq050$_0;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onMouseClick', {
    get: function () {
      return this.onMouseClick_3jzwou$_0;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onKeyDown', {
    get: function () {
      return this.onKeyDown_q3dda$_0;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onKeyUp', {
    get: function () {
      return this.onKeyUp_euut3b$_0;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onKeyTyped', {
    get: function () {
      return this.onKeyTyped_eqt8q2$_0;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onTouchStart', {
    get: function () {
      return this.onTouchStart_pd6uv2$_0;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onTouchEnd', {
    get: function () {
      return this.onTouchEnd_nlirxh$_0;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onTouchMove', {
    get: function () {
      return this.onTouchMove_lcgw83$_0;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onGamepadButtonDown', {
    get: function () {
      return this.onGamepadButtonDown_4kj1a6$_0;
    }
  });
  Object.defineProperty(AGInput.prototype, 'onGamepadButtonUp', {
    get: function () {
      return this.onGamepadButtonUp_84vmjp$_0;
    }
  });
  AGInput.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AGInput',
    interfaces: []
  };
  function AGContainer() {
  }
  AGContainer.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'AGContainer',
    interfaces: []
  };
  function AGWindow() {
  }
  AGWindow.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AGWindow',
    interfaces: [AGContainer]
  };
  var Size_init = $module$korma_js.com.soywiz.korma.geom.Size;
  function AG() {
    this.$delegate_y4f8iy$_0 = new Extra$Mixin();
    this.contextVersion = 0;
    this.backWidth_6mt6b1$_0 = 640;
    this.backHeight_1g24zw$_0 = 480;
    this.maxTextureSize_6yxley$_0 = new Size_init(Kotlin.numberToDouble(2048), Kotlin.numberToDouble(2048));
    this.pixelDensity_7ud42o$_0 = 1.0;
    this.onReadyDeferred_qesokv$_0 = new Promise$Deferred();
    this.onReady = this.onReadyDeferred_qesokv$_0.promise;
    this.onRender = new Signal();
    this.onResized = new Signal();
    this.dummyTexture_s1lppr$_0 = lazy(AG$dummyTexture$lambda(this));
    this.dummyStencilState_6gllmd$_0 = new AG$StencilState();
    this.dummyColorMaskState_s1o3tk$_0 = new AG$ColorMaskState();
    this.frameRenderBuffers = LinkedHashSet_init();
    this.renderBuffers = Pool_init(void 0, AG$renderBuffers$lambda(this));
    this.renderingToTexture = false;
  }
  Object.defineProperty(AG.prototype, 'backWidth', {
    get: function () {
      return this.backWidth_6mt6b1$_0;
    },
    set: function (backWidth) {
      this.backWidth_6mt6b1$_0 = backWidth;
    }
  });
  Object.defineProperty(AG.prototype, 'backHeight', {
    get: function () {
      return this.backHeight_1g24zw$_0;
    },
    set: function (backHeight) {
      this.backHeight_1g24zw$_0 = backHeight;
    }
  });
  Object.defineProperty(AG.prototype, 'maxTextureSize', {
    get: function () {
      return this.maxTextureSize_6yxley$_0;
    }
  });
  Object.defineProperty(AG.prototype, 'pixelDensity', {
    get: function () {
      return this.pixelDensity_7ud42o$_0;
    }
  });
  AG.prototype.ready = function () {
    this.onReadyDeferred_qesokv$_0.resolve_11rb$(this);
  };
  AG.prototype.repaint = function () {
  };
  AG.prototype.resized = function () {
    this.onResized.invoke_11rb$(Unit);
  };
  AG.prototype.dispose = function () {
  };
  function AG$BlendEquation(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$BlendEquation_initFields() {
    AG$BlendEquation_initFields = function () {
    };
    AG$BlendEquation$ADD_instance = new AG$BlendEquation('ADD', 0);
    AG$BlendEquation$SUBTRACT_instance = new AG$BlendEquation('SUBTRACT', 1);
    AG$BlendEquation$REVERSE_SUBTRACT_instance = new AG$BlendEquation('REVERSE_SUBTRACT', 2);
  }
  var AG$BlendEquation$ADD_instance;
  function AG$BlendEquation$ADD_getInstance() {
    AG$BlendEquation_initFields();
    return AG$BlendEquation$ADD_instance;
  }
  var AG$BlendEquation$SUBTRACT_instance;
  function AG$BlendEquation$SUBTRACT_getInstance() {
    AG$BlendEquation_initFields();
    return AG$BlendEquation$SUBTRACT_instance;
  }
  var AG$BlendEquation$REVERSE_SUBTRACT_instance;
  function AG$BlendEquation$REVERSE_SUBTRACT_getInstance() {
    AG$BlendEquation_initFields();
    return AG$BlendEquation$REVERSE_SUBTRACT_instance;
  }
  AG$BlendEquation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BlendEquation',
    interfaces: [Enum]
  };
  function AG$BlendEquation$values() {
    return [AG$BlendEquation$ADD_getInstance(), AG$BlendEquation$SUBTRACT_getInstance(), AG$BlendEquation$REVERSE_SUBTRACT_getInstance()];
  }
  AG$BlendEquation.values = AG$BlendEquation$values;
  function AG$BlendEquation$valueOf(name) {
    switch (name) {
      case 'ADD':
        return AG$BlendEquation$ADD_getInstance();
      case 'SUBTRACT':
        return AG$BlendEquation$SUBTRACT_getInstance();
      case 'REVERSE_SUBTRACT':
        return AG$BlendEquation$REVERSE_SUBTRACT_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korag.AG.BlendEquation.' + name);
    }
  }
  AG$BlendEquation.valueOf_61zpoe$ = AG$BlendEquation$valueOf;
  function AG$BlendFactor(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$BlendFactor_initFields() {
    AG$BlendFactor_initFields = function () {
    };
    AG$BlendFactor$DESTINATION_ALPHA_instance = new AG$BlendFactor('DESTINATION_ALPHA', 0);
    AG$BlendFactor$DESTINATION_COLOR_instance = new AG$BlendFactor('DESTINATION_COLOR', 1);
    AG$BlendFactor$ONE_instance = new AG$BlendFactor('ONE', 2);
    AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_instance = new AG$BlendFactor('ONE_MINUS_DESTINATION_ALPHA', 3);
    AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_instance = new AG$BlendFactor('ONE_MINUS_DESTINATION_COLOR', 4);
    AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_instance = new AG$BlendFactor('ONE_MINUS_SOURCE_ALPHA', 5);
    AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_instance = new AG$BlendFactor('ONE_MINUS_SOURCE_COLOR', 6);
    AG$BlendFactor$SOURCE_ALPHA_instance = new AG$BlendFactor('SOURCE_ALPHA', 7);
    AG$BlendFactor$SOURCE_COLOR_instance = new AG$BlendFactor('SOURCE_COLOR', 8);
    AG$BlendFactor$ZERO_instance = new AG$BlendFactor('ZERO', 9);
  }
  var AG$BlendFactor$DESTINATION_ALPHA_instance;
  function AG$BlendFactor$DESTINATION_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$DESTINATION_ALPHA_instance;
  }
  var AG$BlendFactor$DESTINATION_COLOR_instance;
  function AG$BlendFactor$DESTINATION_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$DESTINATION_COLOR_instance;
  }
  var AG$BlendFactor$ONE_instance;
  function AG$BlendFactor$ONE_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_instance;
  }
  var AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_instance;
  function AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_instance;
  }
  var AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_instance;
  function AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_instance;
  }
  var AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_instance;
  function AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_instance;
  }
  var AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_instance;
  function AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_instance;
  }
  var AG$BlendFactor$SOURCE_ALPHA_instance;
  function AG$BlendFactor$SOURCE_ALPHA_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$SOURCE_ALPHA_instance;
  }
  var AG$BlendFactor$SOURCE_COLOR_instance;
  function AG$BlendFactor$SOURCE_COLOR_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$SOURCE_COLOR_instance;
  }
  var AG$BlendFactor$ZERO_instance;
  function AG$BlendFactor$ZERO_getInstance() {
    AG$BlendFactor_initFields();
    return AG$BlendFactor$ZERO_instance;
  }
  AG$BlendFactor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BlendFactor',
    interfaces: [Enum]
  };
  function AG$BlendFactor$values() {
    return [AG$BlendFactor$DESTINATION_ALPHA_getInstance(), AG$BlendFactor$DESTINATION_COLOR_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance(), AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance(), AG$BlendFactor$SOURCE_ALPHA_getInstance(), AG$BlendFactor$SOURCE_COLOR_getInstance(), AG$BlendFactor$ZERO_getInstance()];
  }
  AG$BlendFactor.values = AG$BlendFactor$values;
  function AG$BlendFactor$valueOf(name) {
    switch (name) {
      case 'DESTINATION_ALPHA':
        return AG$BlendFactor$DESTINATION_ALPHA_getInstance();
      case 'DESTINATION_COLOR':
        return AG$BlendFactor$DESTINATION_COLOR_getInstance();
      case 'ONE':
        return AG$BlendFactor$ONE_getInstance();
      case 'ONE_MINUS_DESTINATION_ALPHA':
        return AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance();
      case 'ONE_MINUS_DESTINATION_COLOR':
        return AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance();
      case 'ONE_MINUS_SOURCE_ALPHA':
        return AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance();
      case 'ONE_MINUS_SOURCE_COLOR':
        return AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance();
      case 'SOURCE_ALPHA':
        return AG$BlendFactor$SOURCE_ALPHA_getInstance();
      case 'SOURCE_COLOR':
        return AG$BlendFactor$SOURCE_COLOR_getInstance();
      case 'ZERO':
        return AG$BlendFactor$ZERO_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korag.AG.BlendFactor.' + name);
    }
  }
  AG$BlendFactor.valueOf_61zpoe$ = AG$BlendFactor$valueOf;
  function AG$Blending(srcRGB, dstRGB, srcA, dstA, eqRGB, eqA) {
    AG$Blending$Companion_getInstance();
    if (srcA === void 0)
      srcA = srcRGB;
    if (dstA === void 0)
      dstA = dstRGB;
    if (eqRGB === void 0)
      eqRGB = AG$BlendEquation$ADD_getInstance();
    if (eqA === void 0)
      eqA = eqRGB;
    this.srcRGB = srcRGB;
    this.dstRGB = dstRGB;
    this.srcA = srcA;
    this.dstA = dstA;
    this.eqRGB = eqRGB;
    this.eqA = eqA;
  }
  Object.defineProperty(AG$Blending.prototype, 'disabled', {
    get: function () {
      return this.srcRGB === AG$BlendFactor$ONE_getInstance() && this.dstRGB === AG$BlendFactor$ZERO_getInstance() && this.srcA === AG$BlendFactor$ONE_getInstance() && this.dstA === AG$BlendFactor$ZERO_getInstance();
    }
  });
  Object.defineProperty(AG$Blending.prototype, 'enabled', {
    get: function () {
      return !this.disabled;
    }
  });
  function AG$Blending$Companion() {
    AG$Blending$Companion_instance = this;
    this.NORMAL = new AG$Blending(AG$BlendFactor$SOURCE_ALPHA_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance());
  }
  AG$Blending$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AG$Blending$Companion_instance = null;
  function AG$Blending$Companion_getInstance() {
    if (AG$Blending$Companion_instance === null) {
      new AG$Blending$Companion();
    }
    return AG$Blending$Companion_instance;
  }
  AG$Blending.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Blending',
    interfaces: []
  };
  function AG$AG$Blending_init(src, dst, eq, $this) {
    if (eq === void 0)
      eq = AG$BlendEquation$ADD_getInstance();
    $this = $this || Object.create(AG$Blending.prototype);
    AG$Blending.call($this, src, dst, src, dst, eq, eq);
    return $this;
  }
  AG$Blending.prototype.component1 = function () {
    return this.srcRGB;
  };
  AG$Blending.prototype.component2 = function () {
    return this.dstRGB;
  };
  AG$Blending.prototype.component3 = function () {
    return this.srcA;
  };
  AG$Blending.prototype.component4 = function () {
    return this.dstA;
  };
  AG$Blending.prototype.component5 = function () {
    return this.eqRGB;
  };
  AG$Blending.prototype.component6 = function () {
    return this.eqA;
  };
  AG$Blending.prototype.copy_sbntou$ = function (srcRGB, dstRGB, srcA, dstA, eqRGB, eqA) {
    return new AG$Blending(srcRGB === void 0 ? this.srcRGB : srcRGB, dstRGB === void 0 ? this.dstRGB : dstRGB, srcA === void 0 ? this.srcA : srcA, dstA === void 0 ? this.dstA : dstA, eqRGB === void 0 ? this.eqRGB : eqRGB, eqA === void 0 ? this.eqA : eqA);
  };
  AG$Blending.prototype.toString = function () {
    return 'Blending(srcRGB=' + Kotlin.toString(this.srcRGB) + (', dstRGB=' + Kotlin.toString(this.dstRGB)) + (', srcA=' + Kotlin.toString(this.srcA)) + (', dstA=' + Kotlin.toString(this.dstA)) + (', eqRGB=' + Kotlin.toString(this.eqRGB)) + (', eqA=' + Kotlin.toString(this.eqA)) + ')';
  };
  AG$Blending.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.srcRGB) | 0;
    result = result * 31 + Kotlin.hashCode(this.dstRGB) | 0;
    result = result * 31 + Kotlin.hashCode(this.srcA) | 0;
    result = result * 31 + Kotlin.hashCode(this.dstA) | 0;
    result = result * 31 + Kotlin.hashCode(this.eqRGB) | 0;
    result = result * 31 + Kotlin.hashCode(this.eqA) | 0;
    return result;
  };
  AG$Blending.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.srcRGB, other.srcRGB) && Kotlin.equals(this.dstRGB, other.dstRGB) && Kotlin.equals(this.srcA, other.srcA) && Kotlin.equals(this.dstA, other.dstA) && Kotlin.equals(this.eqRGB, other.eqRGB) && Kotlin.equals(this.eqA, other.eqA)))));
  };
  function AG$BitmapSourceBase() {
  }
  AG$BitmapSourceBase.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'BitmapSourceBase',
    interfaces: []
  };
  function AG$SyncBitmapSource(rgba, width, height, gen) {
    AG$SyncBitmapSource$Companion_getInstance();
    this.rgba_ltsnud$_0 = rgba;
    this.width_v92m8r$_0 = width;
    this.height_gq1qoy$_0 = height;
    this.gen = gen;
  }
  Object.defineProperty(AG$SyncBitmapSource.prototype, 'rgba', {
    get: function () {
      return this.rgba_ltsnud$_0;
    }
  });
  Object.defineProperty(AG$SyncBitmapSource.prototype, 'width', {
    get: function () {
      return this.width_v92m8r$_0;
    }
  });
  Object.defineProperty(AG$SyncBitmapSource.prototype, 'height', {
    get: function () {
      return this.height_gq1qoy$_0;
    }
  });
  function AG$SyncBitmapSource$Companion() {
    AG$SyncBitmapSource$Companion_instance = this;
    this.NULL = new AG$SyncBitmapSource(true, 0, 0, AG$SyncBitmapSource$Companion$NULL$lambda);
  }
  function AG$SyncBitmapSource$Companion$NULL$lambda() {
    return null;
  }
  AG$SyncBitmapSource$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AG$SyncBitmapSource$Companion_instance = null;
  function AG$SyncBitmapSource$Companion_getInstance() {
    if (AG$SyncBitmapSource$Companion_instance === null) {
      new AG$SyncBitmapSource$Companion();
    }
    return AG$SyncBitmapSource$Companion_instance;
  }
  AG$SyncBitmapSource.prototype.toString = function () {
    return 'SyncBitmapSource(rgba=' + this.rgba + ', width=' + this.width + ', height=' + this.height + ')';
  };
  AG$SyncBitmapSource.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SyncBitmapSource',
    interfaces: [AG$BitmapSourceBase]
  };
  function AG$AsyncBitmapSource(coroutineContext, rgba, width, height, gen) {
    AG$AsyncBitmapSource$Companion_getInstance();
    this.coroutineContext = coroutineContext;
    this.rgba_gss57q$_0 = rgba;
    this.width_pyti6s$_0 = width;
    this.height_eqw6oj$_0 = height;
    this.gen = gen;
  }
  Object.defineProperty(AG$AsyncBitmapSource.prototype, 'rgba', {
    get: function () {
      return this.rgba_gss57q$_0;
    }
  });
  Object.defineProperty(AG$AsyncBitmapSource.prototype, 'width', {
    get: function () {
      return this.width_pyti6s$_0;
    }
  });
  Object.defineProperty(AG$AsyncBitmapSource.prototype, 'height', {
    get: function () {
      return this.height_eqw6oj$_0;
    }
  });
  function AG$AsyncBitmapSource$Companion() {
    AG$AsyncBitmapSource$Companion_instance = this;
    this.NULL = new AG$AsyncBitmapSource(experimental.EmptyCoroutineContext, true, 0, 0, AG$AsyncBitmapSource$Companion$NULL$lambda);
  }
  function AG$AsyncBitmapSource$Companion$NULL$lambda(continuation_0, suspended) {
    var instance = new Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.prototype.constructor = Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda;
  Coroutine$AG$AsyncBitmapSource$Companion$NULL$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return null;
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
  AG$AsyncBitmapSource$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AG$AsyncBitmapSource$Companion_instance = null;
  function AG$AsyncBitmapSource$Companion_getInstance() {
    if (AG$AsyncBitmapSource$Companion_instance === null) {
      new AG$AsyncBitmapSource$Companion();
    }
    return AG$AsyncBitmapSource$Companion_instance;
  }
  AG$AsyncBitmapSource.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AsyncBitmapSource',
    interfaces: [AG$BitmapSourceBase]
  };
  function AG$Texture() {
    this.premultiplied = true;
    this.requestMipmaps = false;
    this.mipmaps_fmt7mu$_0 = false;
    this.source = AG$SyncBitmapSource$Companion_getInstance().NULL;
    this.uploaded_bjht0x$_0 = false;
    this.generating_dlstkz$_0 = false;
    this.generated_6fnrcm$_0 = false;
    this.tempBitmap_rlmwj0$_0 = null;
    this.ready_9e90wu$_0 = false;
  }
  Object.defineProperty(AG$Texture.prototype, 'mipmaps', {
    get: function () {
      return this.mipmaps_fmt7mu$_0;
    },
    set: function (mipmaps) {
      this.mipmaps_fmt7mu$_0 = mipmaps;
    }
  });
  Object.defineProperty(AG$Texture.prototype, 'ready', {
    get: function () {
      return this.ready_9e90wu$_0;
    },
    set: function (ready) {
      this.ready_9e90wu$_0 = ready;
    }
  });
  AG$Texture.prototype.invalidate = function () {
    this.uploaded_bjht0x$_0 = false;
    this.generating_dlstkz$_0 = false;
    this.generated_6fnrcm$_0 = false;
  };
  function AG$Texture$upload$lambda(closure$bmp) {
    return function () {
      return closure$bmp;
    };
  }
  AG$Texture.prototype.upload_nn58bg$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.upload_fh4hjo$(bmp != null ? new AG$SyncBitmapSource(bmp.bpp > 8, bmp.width, bmp.height, AG$Texture$upload$lambda(bmp)) : AG$SyncBitmapSource$Companion_getInstance().NULL, mipmaps);
  };
  AG$Texture.prototype.upload_fh4hjo$ = function (source, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    this.source = source;
    this.uploadedSource();
    this.requestMipmaps = mipmaps;
    return this;
  };
  AG$Texture.prototype.uploadedSource = function () {
  };
  AG$Texture.prototype.bind = function () {
  };
  AG$Texture.prototype.unbind = function () {
  };
  AG$Texture.prototype.manualUpload = function () {
    this.uploaded_bjht0x$_0 = true;
    return this;
  };
  function AG$Texture$bindEnsuring$lambda(closure$source_0, this$Texture_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$AG$Texture$bindEnsuring$lambda(closure$source_0, this$Texture_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$AG$Texture$bindEnsuring$lambda(closure$source_0, this$Texture_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$source = closure$source_0;
    this.local$this$Texture = this$Texture_0;
    this.local$tmp$ = void 0;
  }
  Coroutine$AG$Texture$bindEnsuring$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AG$Texture$bindEnsuring$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AG$Texture$bindEnsuring$lambda.prototype.constructor = Coroutine$AG$Texture$bindEnsuring$lambda;
  Coroutine$AG$Texture$bindEnsuring$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$source.gen(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.local$this$Texture.tempBitmap_rlmwj0$_0 = this.local$tmp$;
            return this.local$this$Texture.generated_6fnrcm$_0 = true, Unit;
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
  AG$Texture.prototype.bindEnsuring = function () {
    this.bind();
    var source = this.source;
    if (!this.uploaded_bjht0x$_0) {
      if (!this.generating_dlstkz$_0) {
        this.generating_dlstkz$_0 = true;
        if (Kotlin.isType(source, AG$SyncBitmapSource)) {
          this.tempBitmap_rlmwj0$_0 = source.gen();
          this.generated_6fnrcm$_0 = true;
        }
         else if (Kotlin.isType(source, AG$AsyncBitmapSource))
          async(source.coroutineContext, AG$Texture$bindEnsuring$lambda(source, this));
      }
      if (this.generated_6fnrcm$_0) {
        this.uploaded_bjht0x$_0 = true;
        this.generating_dlstkz$_0 = false;
        this.generated_6fnrcm$_0 = false;
        this.actualSyncUpload_u9zjc3$(source, this.tempBitmap_rlmwj0$_0, this.requestMipmaps);
        this.tempBitmap_rlmwj0$_0 = null;
        this.ready = true;
      }
    }
  };
  AG$Texture.prototype.actualSyncUpload_u9zjc3$ = function (source, bmp, requestMipmaps) {
  };
  function AG$Texture$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$Texture$Kind_initFields() {
    AG$Texture$Kind_initFields = function () {
    };
    AG$Texture$Kind$RGBA_instance = new AG$Texture$Kind('RGBA', 0);
    AG$Texture$Kind$LUMINANCE_instance = new AG$Texture$Kind('LUMINANCE', 1);
  }
  var AG$Texture$Kind$RGBA_instance;
  function AG$Texture$Kind$RGBA_getInstance() {
    AG$Texture$Kind_initFields();
    return AG$Texture$Kind$RGBA_instance;
  }
  var AG$Texture$Kind$LUMINANCE_instance;
  function AG$Texture$Kind$LUMINANCE_getInstance() {
    AG$Texture$Kind_initFields();
    return AG$Texture$Kind$LUMINANCE_instance;
  }
  AG$Texture$Kind.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function AG$Texture$Kind$values() {
    return [AG$Texture$Kind$RGBA_getInstance(), AG$Texture$Kind$LUMINANCE_getInstance()];
  }
  AG$Texture$Kind.values = AG$Texture$Kind$values;
  function AG$Texture$Kind$valueOf(name) {
    switch (name) {
      case 'RGBA':
        return AG$Texture$Kind$RGBA_getInstance();
      case 'LUMINANCE':
        return AG$Texture$Kind$LUMINANCE_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korag.AG.Texture.Kind.' + name);
    }
  }
  AG$Texture$Kind.valueOf_61zpoe$ = AG$Texture$Kind$valueOf;
  AG$Texture.prototype.close = function () {
  };
  AG$Texture.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Texture',
    interfaces: [Closeable]
  };
  function AG$TextureUnit(texture, linear) {
    if (texture === void 0)
      texture = null;
    if (linear === void 0)
      linear = true;
    this.texture = texture;
    this.linear = linear;
  }
  AG$TextureUnit.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TextureUnit',
    interfaces: []
  };
  AG$TextureUnit.prototype.component1 = function () {
    return this.texture;
  };
  AG$TextureUnit.prototype.component2 = function () {
    return this.linear;
  };
  AG$TextureUnit.prototype.copy_qgz3nv$ = function (texture, linear) {
    return new AG$TextureUnit(texture === void 0 ? this.texture : texture, linear === void 0 ? this.linear : linear);
  };
  AG$TextureUnit.prototype.toString = function () {
    return 'TextureUnit(texture=' + Kotlin.toString(this.texture) + (', linear=' + Kotlin.toString(this.linear)) + ')';
  };
  AG$TextureUnit.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.texture) | 0;
    result = result * 31 + Kotlin.hashCode(this.linear) | 0;
    return result;
  };
  AG$TextureUnit.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.texture, other.texture) && Kotlin.equals(this.linear, other.linear)))));
  };
  function AG$Buffer(kind) {
    this.kind = kind;
    this.dirty = false;
    this.mem = null;
    this.memOffset = 0;
    this.memLength = 0;
  }
  function AG$Buffer$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$Buffer$Kind_initFields() {
    AG$Buffer$Kind_initFields = function () {
    };
    AG$Buffer$Kind$INDEX_instance = new AG$Buffer$Kind('INDEX', 0);
    AG$Buffer$Kind$VERTEX_instance = new AG$Buffer$Kind('VERTEX', 1);
  }
  var AG$Buffer$Kind$INDEX_instance;
  function AG$Buffer$Kind$INDEX_getInstance() {
    AG$Buffer$Kind_initFields();
    return AG$Buffer$Kind$INDEX_instance;
  }
  var AG$Buffer$Kind$VERTEX_instance;
  function AG$Buffer$Kind$VERTEX_getInstance() {
    AG$Buffer$Kind_initFields();
    return AG$Buffer$Kind$VERTEX_instance;
  }
  AG$Buffer$Kind.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function AG$Buffer$Kind$values() {
    return [AG$Buffer$Kind$INDEX_getInstance(), AG$Buffer$Kind$VERTEX_getInstance()];
  }
  AG$Buffer$Kind.values = AG$Buffer$Kind$values;
  function AG$Buffer$Kind$valueOf(name) {
    switch (name) {
      case 'INDEX':
        return AG$Buffer$Kind$INDEX_getInstance();
      case 'VERTEX':
        return AG$Buffer$Kind$VERTEX_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korag.AG.Buffer.Kind.' + name);
    }
  }
  AG$Buffer$Kind.valueOf_61zpoe$ = AG$Buffer$Kind$valueOf;
  AG$Buffer.prototype.afterSetMem = function () {
  };
  AG$Buffer.prototype.upload_mj6st8$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    var tmp$;
    this.mem = FastMemory.Companion.alloc_za3lpa$(length);
    ((tmp$ = this.mem) != null ? tmp$ : Kotlin.throwNPE()).setAlignedArrayInt8_3fge6q$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_kgymra$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    var tmp$;
    this.mem = FastMemory.Companion.alloc_za3lpa$(length * 4 | 0);
    ((tmp$ = this.mem) != null ? tmp$ : Kotlin.throwNPE()).setAlignedArrayFloat32_3hvitc$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length * 4 | 0;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_nd5v6f$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    var tmp$;
    this.mem = FastMemory.Companion.alloc_za3lpa$(length * 4 | 0);
    ((tmp$ = this.mem) != null ? tmp$ : Kotlin.throwNPE()).setAlignedArrayInt32_coga0j$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length * 4 | 0;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_359eei$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length;
    var tmp$;
    this.mem = FastMemory.Companion.alloc_za3lpa$(length * 2 | 0);
    ((tmp$ = this.mem) != null ? tmp$ : Kotlin.throwNPE()).setAlignedArrayInt16_r43jz4$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length * 2 | 0;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_kgabju$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.size;
    this.mem = data;
    this.memOffset = offset;
    this.memLength = length;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.close = function () {
    this.mem = null;
    this.memOffset = 0;
    this.memLength = 0;
    this.dirty = true;
  };
  AG$Buffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Buffer',
    interfaces: [Closeable]
  };
  function AG$DrawType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$DrawType_initFields() {
    AG$DrawType_initFields = function () {
    };
    AG$DrawType$TRIANGLES_instance = new AG$DrawType('TRIANGLES', 0);
    AG$DrawType$TRIANGLE_STRIP_instance = new AG$DrawType('TRIANGLE_STRIP', 1);
  }
  var AG$DrawType$TRIANGLES_instance;
  function AG$DrawType$TRIANGLES_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$TRIANGLES_instance;
  }
  var AG$DrawType$TRIANGLE_STRIP_instance;
  function AG$DrawType$TRIANGLE_STRIP_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$TRIANGLE_STRIP_instance;
  }
  AG$DrawType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DrawType',
    interfaces: [Enum]
  };
  function AG$DrawType$values() {
    return [AG$DrawType$TRIANGLES_getInstance(), AG$DrawType$TRIANGLE_STRIP_getInstance()];
  }
  AG$DrawType.values = AG$DrawType$values;
  function AG$DrawType$valueOf(name) {
    switch (name) {
      case 'TRIANGLES':
        return AG$DrawType$TRIANGLES_getInstance();
      case 'TRIANGLE_STRIP':
        return AG$DrawType$TRIANGLE_STRIP_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korag.AG.DrawType.' + name);
    }
  }
  AG$DrawType.valueOf_61zpoe$ = AG$DrawType$valueOf;
  Object.defineProperty(AG.prototype, 'dummyTexture', {
    get: function () {
      var $receiver = this.dummyTexture_s1lppr$_0;
      new Kotlin.PropertyMetadata('dummyTexture');
      return $receiver.value;
    }
  });
  AG.prototype.createTexture = function () {
    return new AG$Texture();
  };
  AG.prototype.createTexture_lg0pjf$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.createTexture().upload_nn58bg$(bmp, mipmaps);
  };
  AG.prototype.createBuffer_g6fstm$ = function (kind) {
    return new AG$Buffer(kind);
  };
  AG.prototype.createIndexBuffer = function () {
    return this.createBuffer_g6fstm$(AG$Buffer$Kind$INDEX_getInstance());
  };
  AG.prototype.createVertexBuffer = function () {
    return this.createBuffer_g6fstm$(AG$Buffer$Kind$VERTEX_getInstance());
  };
  AG.prototype.createIndexBuffer_359eei$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length - offset | 0;
    var $receiver = this.createIndexBuffer();
    $receiver.upload_359eei$(data, offset, length);
    return $receiver;
  };
  AG.prototype.createIndexBuffer_kgabju$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.size - offset | 0;
    var $receiver = this.createIndexBuffer();
    $receiver.upload_kgabju$(data, offset, length);
    return $receiver;
  };
  AG.prototype.createVertexBuffer_kgymra$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.length - offset | 0;
    var $receiver = this.createVertexBuffer();
    $receiver.upload_kgymra$(data, offset, length);
    return $receiver;
  };
  AG.prototype.createVertexBuffer_kgabju$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.size - offset | 0;
    var $receiver = this.createVertexBuffer();
    $receiver.upload_kgabju$(data, offset, length);
    return $receiver;
  };
  function AG$StencilOp(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$StencilOp_initFields() {
    AG$StencilOp_initFields = function () {
    };
    AG$StencilOp$DECREMENT_SATURATE_instance = new AG$StencilOp('DECREMENT_SATURATE', 0);
    AG$StencilOp$DECREMENT_WRAP_instance = new AG$StencilOp('DECREMENT_WRAP', 1);
    AG$StencilOp$INCREMENT_SATURATE_instance = new AG$StencilOp('INCREMENT_SATURATE', 2);
    AG$StencilOp$INCREMENT_WRAP_instance = new AG$StencilOp('INCREMENT_WRAP', 3);
    AG$StencilOp$INVERT_instance = new AG$StencilOp('INVERT', 4);
    AG$StencilOp$KEEP_instance = new AG$StencilOp('KEEP', 5);
    AG$StencilOp$SET_instance = new AG$StencilOp('SET', 6);
    AG$StencilOp$ZERO_instance = new AG$StencilOp('ZERO', 7);
  }
  var AG$StencilOp$DECREMENT_SATURATE_instance;
  function AG$StencilOp$DECREMENT_SATURATE_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$DECREMENT_SATURATE_instance;
  }
  var AG$StencilOp$DECREMENT_WRAP_instance;
  function AG$StencilOp$DECREMENT_WRAP_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$DECREMENT_WRAP_instance;
  }
  var AG$StencilOp$INCREMENT_SATURATE_instance;
  function AG$StencilOp$INCREMENT_SATURATE_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$INCREMENT_SATURATE_instance;
  }
  var AG$StencilOp$INCREMENT_WRAP_instance;
  function AG$StencilOp$INCREMENT_WRAP_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$INCREMENT_WRAP_instance;
  }
  var AG$StencilOp$INVERT_instance;
  function AG$StencilOp$INVERT_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$INVERT_instance;
  }
  var AG$StencilOp$KEEP_instance;
  function AG$StencilOp$KEEP_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$KEEP_instance;
  }
  var AG$StencilOp$SET_instance;
  function AG$StencilOp$SET_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$SET_instance;
  }
  var AG$StencilOp$ZERO_instance;
  function AG$StencilOp$ZERO_getInstance() {
    AG$StencilOp_initFields();
    return AG$StencilOp$ZERO_instance;
  }
  AG$StencilOp.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StencilOp',
    interfaces: [Enum]
  };
  function AG$StencilOp$values() {
    return [AG$StencilOp$DECREMENT_SATURATE_getInstance(), AG$StencilOp$DECREMENT_WRAP_getInstance(), AG$StencilOp$INCREMENT_SATURATE_getInstance(), AG$StencilOp$INCREMENT_WRAP_getInstance(), AG$StencilOp$INVERT_getInstance(), AG$StencilOp$KEEP_getInstance(), AG$StencilOp$SET_getInstance(), AG$StencilOp$ZERO_getInstance()];
  }
  AG$StencilOp.values = AG$StencilOp$values;
  function AG$StencilOp$valueOf(name) {
    switch (name) {
      case 'DECREMENT_SATURATE':
        return AG$StencilOp$DECREMENT_SATURATE_getInstance();
      case 'DECREMENT_WRAP':
        return AG$StencilOp$DECREMENT_WRAP_getInstance();
      case 'INCREMENT_SATURATE':
        return AG$StencilOp$INCREMENT_SATURATE_getInstance();
      case 'INCREMENT_WRAP':
        return AG$StencilOp$INCREMENT_WRAP_getInstance();
      case 'INVERT':
        return AG$StencilOp$INVERT_getInstance();
      case 'KEEP':
        return AG$StencilOp$KEEP_getInstance();
      case 'SET':
        return AG$StencilOp$SET_getInstance();
      case 'ZERO':
        return AG$StencilOp$ZERO_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korag.AG.StencilOp.' + name);
    }
  }
  AG$StencilOp.valueOf_61zpoe$ = AG$StencilOp$valueOf;
  function AG$TriangleFace(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$TriangleFace_initFields() {
    AG$TriangleFace_initFields = function () {
    };
    AG$TriangleFace$FRONT_instance = new AG$TriangleFace('FRONT', 0);
    AG$TriangleFace$BACK_instance = new AG$TriangleFace('BACK', 1);
    AG$TriangleFace$FRONT_AND_BACK_instance = new AG$TriangleFace('FRONT_AND_BACK', 2);
    AG$TriangleFace$NONE_instance = new AG$TriangleFace('NONE', 3);
  }
  var AG$TriangleFace$FRONT_instance;
  function AG$TriangleFace$FRONT_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$FRONT_instance;
  }
  var AG$TriangleFace$BACK_instance;
  function AG$TriangleFace$BACK_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$BACK_instance;
  }
  var AG$TriangleFace$FRONT_AND_BACK_instance;
  function AG$TriangleFace$FRONT_AND_BACK_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$FRONT_AND_BACK_instance;
  }
  var AG$TriangleFace$NONE_instance;
  function AG$TriangleFace$NONE_getInstance() {
    AG$TriangleFace_initFields();
    return AG$TriangleFace$NONE_instance;
  }
  AG$TriangleFace.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TriangleFace',
    interfaces: [Enum]
  };
  function AG$TriangleFace$values() {
    return [AG$TriangleFace$FRONT_getInstance(), AG$TriangleFace$BACK_getInstance(), AG$TriangleFace$FRONT_AND_BACK_getInstance(), AG$TriangleFace$NONE_getInstance()];
  }
  AG$TriangleFace.values = AG$TriangleFace$values;
  function AG$TriangleFace$valueOf(name) {
    switch (name) {
      case 'FRONT':
        return AG$TriangleFace$FRONT_getInstance();
      case 'BACK':
        return AG$TriangleFace$BACK_getInstance();
      case 'FRONT_AND_BACK':
        return AG$TriangleFace$FRONT_AND_BACK_getInstance();
      case 'NONE':
        return AG$TriangleFace$NONE_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korag.AG.TriangleFace.' + name);
    }
  }
  AG$TriangleFace.valueOf_61zpoe$ = AG$TriangleFace$valueOf;
  function AG$CompareMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$CompareMode_initFields() {
    AG$CompareMode_initFields = function () {
    };
    AG$CompareMode$ALWAYS_instance = new AG$CompareMode('ALWAYS', 0);
    AG$CompareMode$EQUAL_instance = new AG$CompareMode('EQUAL', 1);
    AG$CompareMode$GREATER_instance = new AG$CompareMode('GREATER', 2);
    AG$CompareMode$GREATER_EQUAL_instance = new AG$CompareMode('GREATER_EQUAL', 3);
    AG$CompareMode$LESS_instance = new AG$CompareMode('LESS', 4);
    AG$CompareMode$LESS_EQUAL_instance = new AG$CompareMode('LESS_EQUAL', 5);
    AG$CompareMode$NEVER_instance = new AG$CompareMode('NEVER', 6);
    AG$CompareMode$NOT_EQUAL_instance = new AG$CompareMode('NOT_EQUAL', 7);
  }
  var AG$CompareMode$ALWAYS_instance;
  function AG$CompareMode$ALWAYS_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$ALWAYS_instance;
  }
  var AG$CompareMode$EQUAL_instance;
  function AG$CompareMode$EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$EQUAL_instance;
  }
  var AG$CompareMode$GREATER_instance;
  function AG$CompareMode$GREATER_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$GREATER_instance;
  }
  var AG$CompareMode$GREATER_EQUAL_instance;
  function AG$CompareMode$GREATER_EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$GREATER_EQUAL_instance;
  }
  var AG$CompareMode$LESS_instance;
  function AG$CompareMode$LESS_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$LESS_instance;
  }
  var AG$CompareMode$LESS_EQUAL_instance;
  function AG$CompareMode$LESS_EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$LESS_EQUAL_instance;
  }
  var AG$CompareMode$NEVER_instance;
  function AG$CompareMode$NEVER_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$NEVER_instance;
  }
  var AG$CompareMode$NOT_EQUAL_instance;
  function AG$CompareMode$NOT_EQUAL_getInstance() {
    AG$CompareMode_initFields();
    return AG$CompareMode$NOT_EQUAL_instance;
  }
  AG$CompareMode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CompareMode',
    interfaces: [Enum]
  };
  function AG$CompareMode$values() {
    return [AG$CompareMode$ALWAYS_getInstance(), AG$CompareMode$EQUAL_getInstance(), AG$CompareMode$GREATER_getInstance(), AG$CompareMode$GREATER_EQUAL_getInstance(), AG$CompareMode$LESS_getInstance(), AG$CompareMode$LESS_EQUAL_getInstance(), AG$CompareMode$NEVER_getInstance(), AG$CompareMode$NOT_EQUAL_getInstance()];
  }
  AG$CompareMode.values = AG$CompareMode$values;
  function AG$CompareMode$valueOf(name) {
    switch (name) {
      case 'ALWAYS':
        return AG$CompareMode$ALWAYS_getInstance();
      case 'EQUAL':
        return AG$CompareMode$EQUAL_getInstance();
      case 'GREATER':
        return AG$CompareMode$GREATER_getInstance();
      case 'GREATER_EQUAL':
        return AG$CompareMode$GREATER_EQUAL_getInstance();
      case 'LESS':
        return AG$CompareMode$LESS_getInstance();
      case 'LESS_EQUAL':
        return AG$CompareMode$LESS_EQUAL_getInstance();
      case 'NEVER':
        return AG$CompareMode$NEVER_getInstance();
      case 'NOT_EQUAL':
        return AG$CompareMode$NOT_EQUAL_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korag.AG.CompareMode.' + name);
    }
  }
  AG$CompareMode.valueOf_61zpoe$ = AG$CompareMode$valueOf;
  function AG$ColorMaskState(red, green, blue, alpha) {
    if (red === void 0)
      red = true;
    if (green === void 0)
      green = true;
    if (blue === void 0)
      blue = true;
    if (alpha === void 0)
      alpha = true;
    this.red = red;
    this.green = green;
    this.blue = blue;
    this.alpha = alpha;
  }
  AG$ColorMaskState.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ColorMaskState',
    interfaces: []
  };
  AG$ColorMaskState.prototype.component1 = function () {
    return this.red;
  };
  AG$ColorMaskState.prototype.component2 = function () {
    return this.green;
  };
  AG$ColorMaskState.prototype.component3 = function () {
    return this.blue;
  };
  AG$ColorMaskState.prototype.component4 = function () {
    return this.alpha;
  };
  AG$ColorMaskState.prototype.copy_nyyhg$ = function (red, green, blue, alpha) {
    return new AG$ColorMaskState(red === void 0 ? this.red : red, green === void 0 ? this.green : green, blue === void 0 ? this.blue : blue, alpha === void 0 ? this.alpha : alpha);
  };
  AG$ColorMaskState.prototype.toString = function () {
    return 'ColorMaskState(red=' + Kotlin.toString(this.red) + (', green=' + Kotlin.toString(this.green)) + (', blue=' + Kotlin.toString(this.blue)) + (', alpha=' + Kotlin.toString(this.alpha)) + ')';
  };
  AG$ColorMaskState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.red) | 0;
    result = result * 31 + Kotlin.hashCode(this.green) | 0;
    result = result * 31 + Kotlin.hashCode(this.blue) | 0;
    result = result * 31 + Kotlin.hashCode(this.alpha) | 0;
    return result;
  };
  AG$ColorMaskState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.red, other.red) && Kotlin.equals(this.green, other.green) && Kotlin.equals(this.blue, other.blue) && Kotlin.equals(this.alpha, other.alpha)))));
  };
  function AG$StencilState(enabled, triangleFace, compareMode, actionOnBothPass, actionOnDepthFail, actionOnDepthPassStencilFail, referenceValue, readMask, writeMask) {
    if (enabled === void 0)
      enabled = false;
    if (triangleFace === void 0)
      triangleFace = AG$TriangleFace$FRONT_AND_BACK_getInstance();
    if (compareMode === void 0)
      compareMode = AG$CompareMode$ALWAYS_getInstance();
    if (actionOnBothPass === void 0)
      actionOnBothPass = AG$StencilOp$KEEP_getInstance();
    if (actionOnDepthFail === void 0)
      actionOnDepthFail = AG$StencilOp$KEEP_getInstance();
    if (actionOnDepthPassStencilFail === void 0)
      actionOnDepthPassStencilFail = AG$StencilOp$KEEP_getInstance();
    if (referenceValue === void 0)
      referenceValue = 0;
    if (readMask === void 0)
      readMask = 255;
    if (writeMask === void 0)
      writeMask = 255;
    this.enabled = enabled;
    this.triangleFace = triangleFace;
    this.compareMode = compareMode;
    this.actionOnBothPass = actionOnBothPass;
    this.actionOnDepthFail = actionOnDepthFail;
    this.actionOnDepthPassStencilFail = actionOnDepthPassStencilFail;
    this.referenceValue = referenceValue;
    this.readMask = readMask;
    this.writeMask = writeMask;
  }
  AG$StencilState.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StencilState',
    interfaces: []
  };
  AG$StencilState.prototype.component1 = function () {
    return this.enabled;
  };
  AG$StencilState.prototype.component2 = function () {
    return this.triangleFace;
  };
  AG$StencilState.prototype.component3 = function () {
    return this.compareMode;
  };
  AG$StencilState.prototype.component4 = function () {
    return this.actionOnBothPass;
  };
  AG$StencilState.prototype.component5 = function () {
    return this.actionOnDepthFail;
  };
  AG$StencilState.prototype.component6 = function () {
    return this.actionOnDepthPassStencilFail;
  };
  AG$StencilState.prototype.component7 = function () {
    return this.referenceValue;
  };
  AG$StencilState.prototype.component8 = function () {
    return this.readMask;
  };
  AG$StencilState.prototype.component9 = function () {
    return this.writeMask;
  };
  AG$StencilState.prototype.copy_7kk0z5$ = function (enabled, triangleFace, compareMode, actionOnBothPass, actionOnDepthFail, actionOnDepthPassStencilFail, referenceValue, readMask, writeMask) {
    return new AG$StencilState(enabled === void 0 ? this.enabled : enabled, triangleFace === void 0 ? this.triangleFace : triangleFace, compareMode === void 0 ? this.compareMode : compareMode, actionOnBothPass === void 0 ? this.actionOnBothPass : actionOnBothPass, actionOnDepthFail === void 0 ? this.actionOnDepthFail : actionOnDepthFail, actionOnDepthPassStencilFail === void 0 ? this.actionOnDepthPassStencilFail : actionOnDepthPassStencilFail, referenceValue === void 0 ? this.referenceValue : referenceValue, readMask === void 0 ? this.readMask : readMask, writeMask === void 0 ? this.writeMask : writeMask);
  };
  AG$StencilState.prototype.toString = function () {
    return 'StencilState(enabled=' + Kotlin.toString(this.enabled) + (', triangleFace=' + Kotlin.toString(this.triangleFace)) + (', compareMode=' + Kotlin.toString(this.compareMode)) + (', actionOnBothPass=' + Kotlin.toString(this.actionOnBothPass)) + (', actionOnDepthFail=' + Kotlin.toString(this.actionOnDepthFail)) + (', actionOnDepthPassStencilFail=' + Kotlin.toString(this.actionOnDepthPassStencilFail)) + (', referenceValue=' + Kotlin.toString(this.referenceValue)) + (', readMask=' + Kotlin.toString(this.readMask)) + (', writeMask=' + Kotlin.toString(this.writeMask)) + ')';
  };
  AG$StencilState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.enabled) | 0;
    result = result * 31 + Kotlin.hashCode(this.triangleFace) | 0;
    result = result * 31 + Kotlin.hashCode(this.compareMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.actionOnBothPass) | 0;
    result = result * 31 + Kotlin.hashCode(this.actionOnDepthFail) | 0;
    result = result * 31 + Kotlin.hashCode(this.actionOnDepthPassStencilFail) | 0;
    result = result * 31 + Kotlin.hashCode(this.referenceValue) | 0;
    result = result * 31 + Kotlin.hashCode(this.readMask) | 0;
    result = result * 31 + Kotlin.hashCode(this.writeMask) | 0;
    return result;
  };
  AG$StencilState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.enabled, other.enabled) && Kotlin.equals(this.triangleFace, other.triangleFace) && Kotlin.equals(this.compareMode, other.compareMode) && Kotlin.equals(this.actionOnBothPass, other.actionOnBothPass) && Kotlin.equals(this.actionOnDepthFail, other.actionOnDepthFail) && Kotlin.equals(this.actionOnDepthPassStencilFail, other.actionOnDepthPassStencilFail) && Kotlin.equals(this.referenceValue, other.referenceValue) && Kotlin.equals(this.readMask, other.readMask) && Kotlin.equals(this.writeMask, other.writeMask)))));
  };
  AG.prototype.draw_3hoar0$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask) {
  };
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  AG.prototype.draw_3hoar0$ = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, callback$default) {
    if (indices === void 0)
      indices = null;
    if (offset === void 0)
      offset = 0;
    if (blending === void 0)
      blending = AG$Blending$Companion_getInstance().NORMAL;
    if (uniforms === void 0) {
      uniforms = emptyMap();
    }
    if (stencil === void 0)
      stencil = this.dummyStencilState_6gllmd$_0;
    if (colorMask === void 0)
      colorMask = this.dummyColorMaskState_s1o3tk$_0;
    callback$default ? callback$default(vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask) : this.draw_3hoar0$$default(vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask);
  };
  AG.prototype.checkBuffers_j53ep8$ = function (vertices, indices) {
    if (vertices.kind !== AG$Buffer$Kind$VERTEX_getInstance())
      invalidOp('Not a VertexBuffer');
    if (indices.kind !== AG$Buffer$Kind$INDEX_getInstance())
      invalidOp('Not a IndexBuffer');
  };
  AG.prototype.disposeTemporalPerFrameStuff = function () {
  };
  function AG$RenderBuffer($outer) {
    this.$outer = $outer;
    this.cachedTexVersion_5oiwyh$_0 = -1;
    this._tex_wlye6q$_0 = null;
  }
  Object.defineProperty(AG$RenderBuffer.prototype, 'tex', {
    get: function () {
      var tmp$;
      if (this.cachedTexVersion_5oiwyh$_0 !== this.$outer.contextVersion) {
        this.cachedTexVersion_5oiwyh$_0 = this.$outer.contextVersion;
        this._tex_wlye6q$_0 = this.$outer.createTexture().manualUpload();
      }
      return (tmp$ = this._tex_wlye6q$_0) != null ? tmp$ : Kotlin.throwNPE();
    }
  });
  AG$RenderBuffer.prototype.start_vux9f0$ = function (width, height) {
  };
  AG$RenderBuffer.prototype.end = function () {
  };
  AG$RenderBuffer.prototype.readBitmap_59u9qz$ = function (bmp) {
  };
  AG$RenderBuffer.prototype.close = function () {
  };
  AG$RenderBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RenderBuffer',
    interfaces: [Closeable]
  };
  AG.prototype.createRenderBuffer = function () {
    return new AG$RenderBuffer(this);
  };
  AG.prototype.flip = function () {
    this.disposeTemporalPerFrameStuff();
    this.renderBuffers.free_p1ys8y$(this.frameRenderBuffers);
    this.frameRenderBuffers.clear();
    this.flipInternal();
  };
  AG.prototype.flipInternal = function () {
  };
  AG.prototype.clear_2lepo2$$default = function (color, depth, stencil, clearColor, clearDepth, clearStencil) {
  };
  AG.prototype.clear_2lepo2$ = function (color_0, depth, stencil, clearColor, clearDepth, clearStencil, callback$default) {
    if (color_0 === void 0)
      color_0 = color.Colors.TRANSPARENT_BLACK;
    if (depth === void 0)
      depth = 0.0;
    if (stencil === void 0)
      stencil = 0;
    if (clearColor === void 0)
      clearColor = true;
    if (clearDepth === void 0)
      clearDepth = true;
    if (clearStencil === void 0)
      clearStencil = true;
    callback$default ? callback$default(color_0, depth, stencil, clearColor, clearDepth, clearStencil) : this.clear_2lepo2$$default(color_0, depth, stencil, clearColor, clearDepth, clearStencil);
  };
  function AG$RenderTexture(tex, width, height, closeAction) {
    this.tex = tex;
    this.width = width;
    this.height = height;
    this.closeAction = closeAction;
  }
  AG$RenderTexture.prototype.close = function () {
    this.closeAction();
  };
  AG$RenderTexture.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RenderTexture',
    interfaces: [Closeable]
  };
  AG.prototype.renderToTexture_sxjeop$ = defineInlineFunction('korag-js.com.soywiz.korag.AG.renderToTexture_sxjeop$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var AG$AG$RenderTexture_init = _.com.soywiz.korag.AG.RenderTexture;
    function AG$renderToTextureInternal$lambda(this$AG, closure$rb) {
      return function () {
        var $receiver = this$AG.frameRenderBuffers;
        var element = closure$rb;
        $receiver.remove_11rb$(element);
        this$AG.renderBuffers.free_11rb$(closure$rb);
        return Unit;
      };
    }
    return function (width, height, callback) {
      var oldRendering = this.renderingToTexture;
      var oldWidth = this.backWidth;
      var oldHeight = this.backHeight;
      this.renderingToTexture = true;
      this.backWidth = width;
      this.backHeight = height;
      try {
        var rb = this.renderBuffers.alloc();
        this.frameRenderBuffers.add_11rb$(rb);
        var oldRendering_0 = this.renderingToTexture;
        this.renderingToTexture = true;
        rb.start_vux9f0$(width, height);
        try {
          this.clear_2lepo2$(0);
          callback();
        }
        finally {
          rb.end();
          this.renderingToTexture = oldRendering_0;
        }
        return new AG$AG$RenderTexture_init(rb.tex, width, height, AG$renderToTextureInternal$lambda(this, rb));
      }
      finally {
        this.renderingToTexture = oldRendering;
        this.backWidth = oldWidth;
        this.backHeight = oldHeight;
      }
    };
  }));
  AG.prototype.renderToTextureInternal_sxjeop$ = defineInlineFunction('korag-js.com.soywiz.korag.AG.renderToTextureInternal_sxjeop$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var AG$AG$RenderTexture_init = _.com.soywiz.korag.AG.RenderTexture;
    function AG$renderToTextureInternal$lambda(this$AG, closure$rb) {
      return function () {
        var $receiver = this$AG.frameRenderBuffers;
        var element = closure$rb;
        $receiver.remove_11rb$(element);
        this$AG.renderBuffers.free_11rb$(closure$rb);
        return Unit;
      };
    }
    return function (width, height, callback) {
      var rb = this.renderBuffers.alloc();
      this.frameRenderBuffers.add_11rb$(rb);
      var oldRendering = this.renderingToTexture;
      this.renderingToTexture = true;
      rb.start_vux9f0$(width, height);
      try {
        this.clear_2lepo2$(0);
        callback();
      }
      finally {
        rb.end();
        this.renderingToTexture = oldRendering;
      }
      return new AG$AG$RenderTexture_init(rb.tex, width, height, AG$renderToTextureInternal$lambda(this, rb));
    };
  }));
  AG.prototype.renderToBitmap_1xki6w$ = defineInlineFunction('korag-js.com.soywiz.korag.AG.renderToBitmap_1xki6w$', function (bmp, callback) {
    var rb = this.renderBuffers.alloc();
    var oldRendering = this.renderingToTexture;
    this.renderingToTexture = true;
    rb.start_vux9f0$(bmp.width, bmp.height);
    try {
      this.clear_2lepo2$(0);
      callback();
    }
    finally {
      rb.readBitmap_59u9qz$(bmp);
      rb.end();
      this.renderingToTexture = oldRendering;
      this.renderBuffers.free_11rb$(rb);
    }
  });
  Object.defineProperty(AG.prototype, 'extra', {
    get: function () {
      return this.$delegate_y4f8iy$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_y4f8iy$_0.extra = tmp$;
    }
  });
  function AG$dummyTexture$lambda(this$AG) {
    return function () {
      return this$AG.createTexture();
    };
  }
  function AG$renderBuffers$lambda(this$AG) {
    return function () {
      return this$AG.createRenderBuffer();
    };
  }
  AG.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AG',
    interfaces: [Extra]
  };
  function DefaultShaders() {
    DefaultShaders_instance = this;
    this.u_Tex = new Uniform('u_Tex', VarType$TextureUnit_getInstance());
    this.u_ProjMat = new Uniform('u_ProjMat', VarType$Mat4_getInstance());
    this.a_Pos = new Attribute('a_Pos', VarType$Float2_getInstance(), false);
    this.a_Tex = new Attribute('a_Tex', VarType$Float2_getInstance(), false);
    this.a_Col = new Attribute('a_Col', VarType$Byte4_getInstance(), true);
    this.v_Tex = new Varying('v_Tex', VarType$Float2_getInstance());
    this.v_Col = new Varying('v_Col', VarType$Byte4_getInstance());
    this.t_Temp1 = new Temp(0, VarType$Float4_getInstance());
    this.textureUnit = new AG$TextureUnit();
    this.FORMAT_DEFAULT = VertexLayout_init([this.a_Pos, this.a_Tex, this.a_Col]);
    this.LAYOUT_DEFAULT = VertexLayout_init([this.a_Pos, this.a_Tex, this.a_Col]);
    this.VERTEX_DEFAULT = VertexShader_0(DefaultShaders$VERTEX_DEFAULT$lambda(this));
    this.FRAGMENT_SOLID_COLOR = FragmentShader_0(DefaultShaders$FRAGMENT_SOLID_COLOR$lambda(this));
    this.PROGRAM_TINTED_TEXTURE = new Program(this.VERTEX_DEFAULT, FragmentShader_0(DefaultShaders$PROGRAM_TINTED_TEXTURE$lambda(this)), 'PROGRAM_TINTED_TEXTURE');
    this.PROGRAM_TINTED_TEXTURE_PREMULT = new Program(this.VERTEX_DEFAULT, FragmentShader_0(DefaultShaders$PROGRAM_TINTED_TEXTURE_PREMULT$lambda(this)), 'PROGRAM_TINTED_TEXTURE');
    this.PROGRAM_SOLID_COLOR = new Program(this.VERTEX_DEFAULT, this.FRAGMENT_SOLID_COLOR, 'PROGRAM_SOLID_COLOR');
    this.FORMAT_DEBUG = VertexLayout_init([this.a_Pos]);
    this.LAYOUT_DEBUG = VertexLayout_init([this.a_Pos]);
    this.PROGRAM_DEBUG = new Program(VertexShader_0(DefaultShaders$PROGRAM_DEBUG$lambda(this)), FragmentShader_0(DefaultShaders$PROGRAM_DEBUG$lambda_0), 'PROGRAM_DEBUG');
    this.PROGRAM_DEBUG_WITH_PROJ = new Program(VertexShader_0(DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda(this)), FragmentShader_0(DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda_0), 'PROGRAM_DEBUG_WITH_PROJ');
    this.PROGRAM_DEFAULT_lphlbv$_0 = lazy(DefaultShaders$PROGRAM_DEFAULT$lambda(this));
  }
  Object.defineProperty(DefaultShaders.prototype, 'PROGRAM_DEFAULT', {
    get: function () {
      var $receiver = this.PROGRAM_DEFAULT_lphlbv$_0;
      new Kotlin.PropertyMetadata('PROGRAM_DEFAULT');
      return $receiver.value;
    }
  });
  function DefaultShaders$VERTEX_DEFAULT$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$(this$DefaultShaders.v_Tex, this$DefaultShaders.a_Tex);
      $receiver.SET_q0hzsk$(this$DefaultShaders.v_Col, this$DefaultShaders.a_Col);
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$(this$DefaultShaders.u_ProjMat, $receiver.vec4_hywno3$([this$DefaultShaders.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)])));
      return Unit;
    };
  }
  function DefaultShaders$FRAGMENT_SOLID_COLOR$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.set_2oogdr$($receiver.out, this$DefaultShaders.v_Col);
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_TINTED_TEXTURE$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$($receiver.get_hhgt4v$($receiver.texture2D_q0hzsk$(this$DefaultShaders.u_Tex, $receiver.get_hhgt4v$(this$DefaultShaders.v_Tex, 'xy')), 'rgba'), this$DefaultShaders.v_Col));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_TINTED_TEXTURE_PREMULT$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$(this$DefaultShaders.t_Temp1, $receiver.texture2D_q0hzsk$(this$DefaultShaders.u_Tex, $receiver.get_hhgt4v$(this$DefaultShaders.v_Tex, 'xy')));
      $receiver.SET_q0hzsk$($receiver.get_hhgt4v$(this$DefaultShaders.t_Temp1, 'rgb'), $receiver.div_2oogdr$($receiver.get_hhgt4v$(this$DefaultShaders.t_Temp1, 'rgb'), $receiver.get_hhgt4v$(this$DefaultShaders.t_Temp1, 'a')));
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$($receiver.get_hhgt4v$(this$DefaultShaders.t_Temp1, 'rgba'), this$DefaultShaders.v_Col));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_DEBUG$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$($receiver.out, $receiver.vec4_hywno3$([this$DefaultShaders.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_DEBUG$lambda_0($receiver) {
    $receiver.set_2oogdr$($receiver.out, $receiver.vec4_hywno3$([$receiver.get_lit_81szk$(1.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
    return Unit;
  }
  function DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda(this$DefaultShaders) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$(this$DefaultShaders.u_ProjMat, $receiver.vec4_hywno3$([this$DefaultShaders.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)])));
      return Unit;
    };
  }
  function DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda_0($receiver) {
    $receiver.SET_q0hzsk$($receiver.out, $receiver.vec4_hywno3$([$receiver.get_lit_81szk$(1.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)]));
    return Unit;
  }
  function DefaultShaders$PROGRAM_DEFAULT$lambda(this$DefaultShaders) {
    return function () {
      return this$DefaultShaders.PROGRAM_TINTED_TEXTURE_PREMULT;
    };
  }
  DefaultShaders.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'DefaultShaders',
    interfaces: []
  };
  var DefaultShaders_instance = null;
  function DefaultShaders_getInstance() {
    if (DefaultShaders_instance === null) {
      new DefaultShaders();
    }
    return DefaultShaders_instance;
  }
  function Matrix2D(a, b, c, d, tx, ty) {
    if (a === void 0)
      a = 1.0;
    if (b === void 0)
      b = 0.0;
    if (c === void 0)
      c = 0.0;
    if (d === void 0)
      d = 1.0;
    if (tx === void 0)
      tx = 0.0;
    if (ty === void 0)
      ty = 0.0;
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
  }
  Matrix2D.prototype.setTo_15yvbs$ = function (a, b, c, d, tx, ty) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
    return this;
  };
  Matrix2D.prototype.copyFrom_cnfzat$ = function (that) {
    this.setTo_15yvbs$(that.a, that.b, that.c, that.d, that.tx, that.ty);
  };
  var Math_0 = Math;
  Matrix2D.prototype.rotate_14dthe$ = function (theta) {
    var cos = Math_0.cos(theta);
    var sin = Math_0.sin(theta);
    var a1 = this.a * cos - this.b * sin;
    this.b = this.a * sin + this.b * cos;
    this.a = a1;
    var c1 = this.c * cos - this.d * sin;
    this.d = this.c * sin + this.d * cos;
    this.c = c1;
    var tx1 = this.tx * cos - this.ty * sin;
    this.ty = this.tx * sin + this.ty * cos;
    this.tx = tx1;
    return this;
  };
  Matrix2D.prototype.scale_lu1900$ = function (sx, sy) {
    return this.setTo_15yvbs$(this.a * sx, this.b * sx, this.c * sy, this.d * sy, this.tx * sx, this.ty * sy);
  };
  Matrix2D.prototype.prescale_lu1900$ = function (sx, sy) {
    return this.setTo_15yvbs$(this.a * sx, this.b * sx, this.c * sy, this.d * sy, this.tx, this.ty);
  };
  Matrix2D.prototype.pretranslate_lu1900$ = function (dx, dy) {
    this.tx += this.a * dx + this.c * dy;
    this.ty += this.b * dx + this.d * dy;
    return this;
  };
  Matrix2D.prototype.prerotate_14dthe$ = function (theta) {
    var m = new Matrix2D();
    m.rotate_14dthe$(theta);
    this.premulitply_cnfzat$(m);
    return this;
  };
  Matrix2D.prototype.premulitply_cnfzat$ = function (m) {
    return this.premulitply_15yvbs$(m.a, m.b, m.c, m.d, m.tx, m.ty);
  };
  Matrix2D.prototype.premulitply_15yvbs$ = function (la, lb, lc, ld, ltx, lty) {
    return this.setTo_15yvbs$(la * this.a + lb * this.c, la * this.b + lb * this.d, lc * this.a + ld * this.c, lc * this.b + ld * this.d, ltx * this.a + lty * this.c + this.tx, ltx * this.b + lty * this.d + this.ty);
  };
  Matrix2D.prototype.multiply_trc86s$ = function (l, r) {
    return this.setTo_15yvbs$(l.a * r.a + l.b * r.c, l.a * r.b + l.b * r.d, l.c * r.a + l.d * r.c, l.c * r.b + l.d * r.d, l.tx * r.a + l.ty * r.c + r.tx, l.tx * r.b + l.ty * r.d + r.ty);
  };
  Matrix2D.prototype.transform_nxgfrw$ = function (px, py, out) {
    if (out === void 0)
      out = new Point2D();
    return out.setTo_lu1900$(this.transformX_lu1900$(px, py), this.transformY_lu1900$(px, py));
  };
  Matrix2D.prototype.transformX_lu1900$ = function (px, py) {
    return this.a * px + this.c * py + this.tx;
  };
  Matrix2D.prototype.transformY_lu1900$ = function (px, py) {
    return this.d * py + this.b * px + this.ty;
  };
  Matrix2D.prototype.transformXf_lu1900$ = function (px, py) {
    return this.a * px + this.c * py + this.tx;
  };
  Matrix2D.prototype.transformYf_lu1900$ = function (px, py) {
    return this.d * py + this.b * px + this.ty;
  };
  Matrix2D.prototype.toString = function () {
    return 'Matrix2D(a=' + this.a + ', b=' + this.b + ', c=' + this.c + ', d=' + this.d + ', tx=' + this.tx + ', ty=' + this.ty + ')';
  };
  Matrix2D.prototype.setToIdentity = function () {
    return this.setTo_15yvbs$(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
  };
  Matrix2D.prototype.setToInverse = function () {
    var norm = this.a * this.d - this.b * this.c;
    if (norm === 0.0) {
      this.a = 0.0;
      this.b = 0.0;
      this.c = 0.0;
      this.d = 0.0;
      this.tx = -this.tx;
      this.ty = -this.ty;
    }
     else {
      norm = 1.0 / norm;
      var a1 = this.d * norm;
      this.d = this.a * norm;
      this.a = a1;
      this.b *= -norm;
      this.c *= -norm;
      var tx1 = -this.a * this.tx - this.c * this.ty;
      this.ty = -this.b * this.tx - this.d * this.ty;
      this.tx = tx1;
    }
    return this;
  };
  Matrix2D.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Matrix2D',
    interfaces: []
  };
  function Matrix3(val) {
    if (val === void 0)
      val = new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]);
    this.val = val;
  }
  Matrix3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Matrix3',
    interfaces: []
  };
  function Matrix4(data) {
    Matrix4$Companion_getInstance();
    if (data === void 0)
      data = new Float32Array([1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0]);
    this.data = data;
  }
  Matrix4.prototype.get_vux9f0$ = function (x, y) {
    return this.data[(y * 4 | 0) + x | 0];
  };
  function Matrix4$Companion() {
    Matrix4$Companion_instance = this;
    this.TEMP_0 = new Matrix4();
    this.TEMP_LINE_0 = new Float32Array(4);
  }
  Matrix4$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Matrix4$Companion_instance = null;
  function Matrix4$Companion_getInstance() {
    if (Matrix4$Companion_instance === null) {
      new Matrix4$Companion();
    }
    return Matrix4$Companion_instance;
  }
  Matrix4.prototype.transpose = function () {
    Matrix4$Companion_getInstance().TEMP_0.copyFrom_rwji5t$(this);
    this.setRow_i8oon4$(0, Matrix4$Companion_getInstance().TEMP_0.getColumn_i8oon4$(0, Matrix4$Companion_getInstance().TEMP_LINE_0));
    this.setRow_i8oon4$(1, Matrix4$Companion_getInstance().TEMP_0.getColumn_i8oon4$(1, Matrix4$Companion_getInstance().TEMP_LINE_0));
    this.setRow_i8oon4$(2, Matrix4$Companion_getInstance().TEMP_0.getColumn_i8oon4$(2, Matrix4$Companion_getInstance().TEMP_LINE_0));
    this.setRow_i8oon4$(3, Matrix4$Companion_getInstance().TEMP_0.getColumn_i8oon4$(3, Matrix4$Companion_getInstance().TEMP_LINE_0));
    return this;
  };
  Matrix4.prototype.getRow_i8oon4$ = function (n, target) {
    if (target === void 0)
      target = new Float32Array(4);
    var m = n * 4 | 0;
    target[0] = this.data[m + 0 | 0];
    target[1] = this.data[m + 1 | 0];
    target[2] = this.data[m + 2 | 0];
    target[3] = this.data[m + 3 | 0];
    return target;
  };
  Matrix4.prototype.getColumn_i8oon4$ = function (n, target) {
    if (target === void 0)
      target = new Float32Array(4);
    target[0] = this.data[n + 0 | 0];
    target[1] = this.data[n + 4 | 0];
    target[2] = this.data[n + 8 | 0];
    target[3] = this.data[n + 12 | 0];
    return target;
  };
  Matrix4.prototype.setRow_xpxj32$ = function (n, a, b, c, d) {
    var m = n * 4 | 0;
    this.data[m + 0 | 0] = a;
    this.data[m + 1 | 0] = b;
    this.data[m + 2 | 0] = c;
    this.data[m + 3 | 0] = d;
    return this;
  };
  Matrix4.prototype.setRow_i8oon4$ = function (n, data) {
    return this.setRow_xpxj32$(n, data[0], data[1], data[2], data[3]);
  };
  Matrix4.prototype.setColumn_i8oon4$ = function (n, data) {
    return this.setColumn_xpxj32$(n, data[0], data[1], data[2], data[3]);
  };
  Matrix4.prototype.setColumn_xpxj32$ = function (n, a, b, c, d) {
    this.data[n + 0 | 0] = a;
    this.data[n + 4 | 0] = b;
    this.data[n + 8 | 0] = c;
    this.data[n + 12 | 0] = d;
    return this;
  };
  Matrix4.prototype.setTo_8odxlg$ = function (a0, b0, c0, d0, a1, b1, c1, d1, a2, b2, c2, d2, a3, b3, c3, d3) {
    this.setRow_xpxj32$(0, a0, b0, c0, d0);
    this.setRow_xpxj32$(1, a1, b1, c1, d1);
    this.setRow_xpxj32$(2, a2, b2, c2, d2);
    this.setRow_xpxj32$(3, a3, b3, c3, d3);
    return this;
  };
  Matrix4.prototype.copyFrom_rwji5t$ = function (that) {
    for (var n = 0; n < 16; n++)
      this.data[n] = that.data[n];
    return this;
  };
  Matrix4.prototype.copyFrom_cnfzat$ = function (that) {
    return this.setTo_8odxlg$(that.a, that.b, 0.0, 0.0, that.c, that.d, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, that.tx, that.ty, 0.0, 1.0);
  };
  Matrix4.prototype.setToOrtho_w8lrqs$ = function (left, top, right, bottom, near, far) {
    var lr = 1 / (left - right);
    var bt = 1 / (bottom - top);
    var nf = 1 / (near - far);
    this.setRow_xpxj32$(0, -2 * lr, 0.0, 0.0, 0.0);
    this.setRow_xpxj32$(1, 0.0, -2 * bt, 0.0, 0.0);
    this.setRow_xpxj32$(2, 0.0, 0.0, 2 * nf, 0.0);
    this.setRow_xpxj32$(3, (left + right) * lr, (top + bottom) * bt, (far + near) * nf, 1.0);
    return this;
  };
  Matrix4.prototype.toString = function () {
    return 'Matrix4(' + toList(this.data) + ')';
  };
  Matrix4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Matrix4',
    interfaces: []
  };
  function Point2D(x, y) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = x;
    this.x = x;
    this.y = y;
  }
  Point2D.prototype.setTo_lu1900$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  Point2D.prototype.copyFrom_7d4we8$ = function (that) {
    return this.setTo_lu1900$(that.x, that.y);
  };
  Point2D.prototype.setToTransform_a1iznb$ = function (mat, p) {
    return this.setToTransform_483ajd$(mat, p.x, p.y);
  };
  Point2D.prototype.setToTransform_483ajd$ = function (mat, x, y) {
    return this.setTo_lu1900$(mat.transformX_lu1900$(x, y), mat.transformY_lu1900$(x, y));
  };
  Point2D.prototype.setToAdd_7k34us$ = function (a, b) {
    return this.setTo_lu1900$(a.x + b.x, a.y + b.y);
  };
  Point2D.prototype.plusAssign_7d4we8$ = function (that) {
    this.setTo_lu1900$(this.x + that.x, this.y + that.y);
  };
  Point2D.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Point2D',
    interfaces: []
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function LogAG(width, height) {
    if (width === void 0)
      width = 640;
    if (height === void 0)
      height = 480;
    AG.call(this);
    this.log = ArrayList_init();
    this.nativeComponent_kfwasu$_0 = new Any();
    this.ready();
    this.backWidth_md67wn$_0 = width;
    this.backHeight_82hv7y$_0 = height;
    this.textureId_gyj2n2$_0 = 0;
    this.bufferId_lvkfs1$_0 = 0;
    this.renderBufferId_2y4l0r$_0 = 0;
  }
  Object.defineProperty(LogAG.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_kfwasu$_0;
    }
  });
  LogAG.prototype.log_kwvgae$_0 = function (str) {
    this.log.add_11rb$(str);
  };
  LogAG.prototype.getLogAsString = function () {
    return joinToString(this.log, '\n');
  };
  LogAG.prototype.clear_2lepo2$$default = function (color, depth, stencil, clearColor, clearDepth, clearStencil) {
    this.log_kwvgae$_0('clear(' + color + ', ' + depth + ', ' + stencil + ', ' + clearColor + ', ' + clearDepth + ', ' + clearStencil + ')');
  };
  Object.defineProperty(LogAG.prototype, 'backWidth', {
    get: function () {
      return this.backWidth_md67wn$_0;
    },
    set: function (value) {
      this.backWidth_md67wn$_0 = value;
      this.log_kwvgae$_0('backWidth = ' + value);
    }
  });
  Object.defineProperty(LogAG.prototype, 'backHeight', {
    get: function () {
      return this.backHeight_82hv7y$_0;
    },
    set: function (value) {
      this.backHeight_82hv7y$_0 = value;
      this.log_kwvgae$_0('backHeight = ' + value);
    }
  });
  LogAG.prototype.repaint = function () {
    this.log_kwvgae$_0('repaint()');
  };
  LogAG.prototype.resized = function () {
    this.log_kwvgae$_0('resized()');
    this.onResized.invoke_11rb$(Unit);
  };
  LogAG.prototype.dispose = function () {
    this.log_kwvgae$_0('dispose()');
  };
  function LogAG$LogTexture($outer, id) {
    this.$outer = $outer;
    AG$Texture.call(this);
    this.id = id;
  }
  LogAG$LogTexture.prototype.uploadedSource = function () {
    this.$outer.log_kwvgae$_0(this + '.uploadedBitmap(' + this.source + ', ' + this.source.width + ', ' + this.source.height + ')');
  };
  LogAG$LogTexture.prototype.close = function () {
    this.$outer.log_kwvgae$_0(this + '.close()');
  };
  LogAG$LogTexture.prototype.toString = function () {
    return 'Texture[' + this.id + ']';
  };
  LogAG$LogTexture.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LogTexture',
    interfaces: [AG$Texture]
  };
  function LogAG$LogBuffer($outer, id, kind) {
    this.$outer = $outer;
    AG$Buffer.call(this, kind);
    this.id = id;
  }
  Object.defineProperty(LogAG$LogBuffer.prototype, 'logmem', {
    get: function () {
      return this.mem;
    }
  });
  Object.defineProperty(LogAG$LogBuffer.prototype, 'logmemOffset', {
    get: function () {
      return this.memOffset;
    }
  });
  Object.defineProperty(LogAG$LogBuffer.prototype, 'logmemLength', {
    get: function () {
      return this.memLength;
    }
  });
  LogAG$LogBuffer.prototype.afterSetMem = function () {
    var tmp$, tmp$_0;
    tmp$_0 = this + '.afterSetMem(mem[' + ((tmp$ = this.mem) != null ? tmp$ : Kotlin.throwNPE()).size + '])';
    this.$outer.log_kwvgae$_0(tmp$_0);
  };
  LogAG$LogBuffer.prototype.close = function () {
    this.$outer.log_kwvgae$_0(this + '.close()');
  };
  LogAG$LogBuffer.prototype.toString = function () {
    return 'Buffer[' + this.id + ']';
  };
  LogAG$LogBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LogBuffer',
    interfaces: [AG$Buffer]
  };
  function LogAG$LogRenderBuffer($outer, id) {
    this.$outer = $outer;
    AG$RenderBuffer.call(this, this.$outer);
    this.id = id;
  }
  LogAG$LogRenderBuffer.prototype.start_vux9f0$ = function (width, height) {
    this.$outer.log_kwvgae$_0(this + '.start(' + width + ', ' + height + ')');
  };
  LogAG$LogRenderBuffer.prototype.end = function () {
    this.$outer.log_kwvgae$_0(this + '.end()');
  };
  LogAG$LogRenderBuffer.prototype.readBitmap_59u9qz$ = function (bmp) {
    this.$outer.log_kwvgae$_0(this + '.readBitmap(' + bmp + ')');
  };
  LogAG$LogRenderBuffer.prototype.close = function () {
    this.$outer.log_kwvgae$_0(this + '.close()');
  };
  LogAG$LogRenderBuffer.prototype.toString = function () {
    return 'RenderBuffer[' + this.id + ']';
  };
  LogAG$LogRenderBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LogRenderBuffer',
    interfaces: [AG$RenderBuffer]
  };
  LogAG.prototype.createTexture = function () {
    var tmp$;
    var $receiver = new LogAG$LogTexture(this, (tmp$ = this.textureId_gyj2n2$_0, this.textureId_gyj2n2$_0 = tmp$ + 1 | 0, tmp$));
    this.log_kwvgae$_0('createTexture():' + $receiver.id);
    return $receiver;
  };
  LogAG.prototype.createBuffer_g6fstm$ = function (kind) {
    var tmp$;
    var $receiver = new LogAG$LogBuffer(this, (tmp$ = this.bufferId_lvkfs1$_0, this.bufferId_lvkfs1$_0 = tmp$ + 1 | 0, tmp$), kind);
    this.log_kwvgae$_0('createBuffer(' + kind + '):' + $receiver.id);
    return $receiver;
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  LogAG.prototype.draw_3hoar0$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    try {
      this.log_kwvgae$_0('draw(vertices=' + vertices + ', indices=' + Kotlin.toString(indices) + ', program=' + program + ', type=' + type + ', vertexLayout=' + vertexLayout + ', vertexCount=' + vertexCount + ', offset=' + offset + ', blending=' + blending + ', uniforms=' + uniforms + ', stencil=' + stencil + ', colorMask=' + colorMask + ')');
      var missingUniforms = minus(program.uniforms, uniforms.keys);
      var extraUniforms = minus(uniforms.keys, program.uniforms);
      var missingAttributes = minus(toSet(vertexLayout.attributes), program.attributes);
      var extraAttributes = minus(program.attributes, toSet(vertexLayout.attributes));
      if (!missingUniforms.isEmpty())
        this.log_kwvgae$_0('::draw.ERROR.Missing:' + missingUniforms);
      if (!extraUniforms.isEmpty())
        this.log_kwvgae$_0('::draw.ERROR.Unexpected:' + extraUniforms);
      if (!missingAttributes.isEmpty())
        this.log_kwvgae$_0('::draw.ERROR.Missing:' + missingAttributes);
      if (!extraAttributes.isEmpty())
        this.log_kwvgae$_0('::draw.ERROR.Unexpected:' + extraAttributes);
      var vertexMem = (tmp$_0 = (Kotlin.isType(tmp$ = vertices, LogAG$LogBuffer) ? tmp$ : Kotlin.throwCCE()).logmem) != null ? tmp$_0 : Kotlin.throwNPE();
      var vertexMemOffset = (Kotlin.isType(tmp$_1 = vertices, LogAG$LogBuffer) ? tmp$_1 : Kotlin.throwCCE()).logmemOffset;
      var indexMem = (Kotlin.isType(tmp$_2 = indices, LogAG$LogBuffer) ? tmp$_2 : Kotlin.throwCCE()).logmem;
      var $receiver = until(offset, offset + vertexCount | 0);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_7;
      tmp$_7 = $receiver.iterator();
      while (tmp$_7.hasNext()) {
        var item = tmp$_7.next();
        var tmp$_8;
        destination.add_11rb$((tmp$_8 = (indexMem != null ? indexMem : Kotlin.throwNPE()).getAlignedInt16_za3lpa$(item)) != null ? tmp$_8 : 0);
      }
      var _indices = destination;
      this.log_kwvgae$_0('::draw.indices=' + _indices);
      tmp$_3 = distinct(sorted(_indices)).iterator();
      while (tmp$_3.hasNext()) {
        var index = tmp$_3.next();
        var os = index * vertexLayout.totalSize;
        var attributes = ArrayList_init();
        tmp$_4 = zip(vertexLayout.attributes, vertexLayout.attributePositions).iterator();
        while (tmp$_4.hasNext()) {
          var tmp$_9 = tmp$_4.next();
          var attribute = tmp$_9.component1()
          , pos = tmp$_9.component2();
          var o = os + pos + vertexMemOffset | 0;
          tmp$_5 = attribute.type;
          if (Kotlin.equals(tmp$_5, VarType$Int1_getInstance()))
            tmp$_6 = 'int(' + Kotlin.toString(vertexMem.getInt32_za3lpa$(o + 0 | 0)) + ')';
          else if (Kotlin.equals(tmp$_5, VarType$Float1_getInstance()))
            tmp$_6 = 'float(' + Kotlin.toString(vertexMem.getFloat32_za3lpa$(o + 0 | 0)) + ')';
          else if (Kotlin.equals(tmp$_5, VarType$Float2_getInstance()))
            tmp$_6 = 'vec2(' + Kotlin.toString(vertexMem.getFloat32_za3lpa$(o + 0 | 0)) + ',' + Kotlin.toString(vertexMem.getFloat32_za3lpa$(o + 4 | 0)) + ')';
          else if (Kotlin.equals(tmp$_5, VarType$Float3_getInstance()))
            tmp$_6 = 'vec3(' + Kotlin.toString(vertexMem.getFloat32_za3lpa$(o + 0 | 0)) + ',' + Kotlin.toString(vertexMem.getFloat32_za3lpa$(o + 4 | 0)) + ',' + Kotlin.toString(vertexMem.getFloat32_za3lpa$(o + 8 | 0)) + ')';
          else if (Kotlin.equals(tmp$_5, VarType$Byte4_getInstance()))
            tmp$_6 = 'byte4(' + Kotlin.toString(vertexMem.getInt32_za3lpa$(o + 0 | 0)) + ')';
          else
            tmp$_6 = 'Unsupported(' + attribute.type + ')';
          var info = tmp$_6;
          var element = attribute.name + '[' + info + ']';
          attributes.add_11rb$(element);
        }
        this.log_kwvgae$_0('::draw.vertex[' + index + ']: ' + joinToString(attributes, ', '));
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.log_kwvgae$_0('ERROR: ' + Kotlin.toString(e.message));
        printStackTrace(e);
      }
       else
        throw e;
    }
  };
  LogAG.prototype.disposeTemporalPerFrameStuff = function () {
    this.log_kwvgae$_0('disposeTemporalPerFrameStuff()');
  };
  LogAG.prototype.createRenderBuffer = function () {
    var tmp$;
    var $receiver = new LogAG$LogRenderBuffer(this, (tmp$ = this.renderBufferId_2y4l0r$_0, this.renderBufferId_2y4l0r$_0 = tmp$ + 1 | 0, tmp$));
    this.log_kwvgae$_0('createRenderBuffer():' + $receiver.id);
    return $receiver;
  };
  LogAG.prototype.flipInternal = function () {
    this.log_kwvgae$_0('flipInternal()');
  };
  LogAG.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LogAG',
    interfaces: [AG]
  };
  function toGlSlString($receiver, gles) {
    if (gles === void 0)
      gles = true;
    return (new GlslGenerator(ShaderType$VERTEX_getInstance(), gles)).generate_57b21j$($receiver.stm);
  }
  function toGlSlString_0($receiver, gles) {
    if (gles === void 0)
      gles = true;
    return (new GlslGenerator(ShaderType$FRAGMENT_getInstance(), gles)).generate_57b21j$($receiver.stm);
  }
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  function GlslGenerator(kind, gles) {
    if (gles === void 0)
      gles = true;
    Program$Visitor.call(this);
    this.kind = kind;
    this.gles = gles;
    this.temps_0 = HashSet_init();
    this.attributes_0 = HashSet_init();
    this.varyings_0 = HashSet_init();
    this.uniforms_0 = HashSet_init();
    this.programStr_0 = new StringBuilder();
  }
  GlslGenerator.prototype.typeToString_b2kxjc$ = function (type) {
    if (Kotlin.equals(type, VarType$Float1_getInstance()))
      return 'float';
    else if (Kotlin.equals(type, VarType$Float2_getInstance()))
      return 'vec2';
    else if (Kotlin.equals(type, VarType$Float3_getInstance()))
      return 'vec3';
    else if (Kotlin.equals(type, VarType$Float4_getInstance()))
      return 'vec4';
    else if (Kotlin.equals(type, VarType$Byte4_getInstance()))
      return 'vec4';
    else if (Kotlin.equals(type, VarType$Mat4_getInstance()))
      return 'mat4';
    else if (Kotlin.equals(type, VarType$TextureUnit_getInstance()))
      return 'sampler2D';
    else
      return invalidOp("Don't know how to serialize type " + type);
  };
  GlslGenerator.prototype.generate_57b21j$ = function (root) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.temps_0.clear();
    this.attributes_0.clear();
    this.varyings_0.clear();
    this.uniforms_0.clear();
    this.programStr_0 = new StringBuilder();
    this.visit_57b21j$(root);
    var prefix = ArrayList_init();
    var tmp$_3 = this.kind === ShaderType$FRAGMENT_getInstance();
    if (tmp$_3) {
      tmp$_3 = !this.attributes_0.isEmpty();
    }
    if (tmp$_3) {
      throw new RuntimeException("Can't use attributes in fragment shader");
    }
    tmp$ = this.attributes_0.iterator();
    while (tmp$.hasNext()) {
      var a = tmp$.next();
      var element = 'attribute ' + this.typeToString_b2kxjc$(a.type) + ' ' + a.name + ';';
      prefix.add_11rb$(element);
    }
    tmp$_0 = this.uniforms_0.iterator();
    while (tmp$_0.hasNext()) {
      var u = tmp$_0.next();
      var element_0 = 'uniform ' + this.typeToString_b2kxjc$(u.type) + ' ' + u.name + ';';
      prefix.add_11rb$(element_0);
    }
    tmp$_1 = this.varyings_0.iterator();
    while (tmp$_1.hasNext()) {
      var v = tmp$_1.next();
      var element_1 = 'varying ' + this.typeToString_b2kxjc$(v.type) + ' ' + v.name + ';';
      prefix.add_11rb$(element_1);
    }
    var precissions = ArrayList_init();
    var element_2 = '#ifdef GL_ES';
    precissions.add_11rb$(element_2);
    var element_3 = 'precision mediump float;';
    precissions.add_11rb$(element_3);
    var element_4 = 'precision mediump int;';
    precissions.add_11rb$(element_4);
    var element_5 = 'precision lowp sampler2D;';
    precissions.add_11rb$(element_5);
    var element_6 = 'precision lowp samplerCube;';
    precissions.add_11rb$(element_6);
    precissions.add_11rb$('#endif');
    var $receiver = this.temps_0;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_4;
    tmp$_4 = $receiver.iterator();
    while (tmp$_4.hasNext()) {
      var item = tmp$_4.next();
      destination.add_11rb$(this.typeToString_b2kxjc$(item.type) + ' ' + item.name + ';');
    }
    var tempsStr = destination;
    if (this.gles) {
      tmp$_2 = joinToString(precissions, '\n') + '\n';
    }
     else {
      tmp$_2 = '';
    }
    var preprefix = tmp$_2;
    return preprefix + joinToString(prefix, '\n') + '\n' + 'void main() {' + joinToString(tempsStr, '\n') + this.programStr_0.toString() + '}';
  };
  GlslGenerator.prototype.visit_1xgyq4$ = function (stms) {
    var tmp$;
    this.programStr_0.append_gw00v9$('{');
    tmp$ = stms.stms.iterator();
    while (tmp$.hasNext()) {
      var stm = tmp$.next();
      this.visit_57b21j$(stm);
    }
    this.programStr_0.append_gw00v9$('}');
  };
  GlslGenerator.prototype.visit_tq3hhf$ = function (stm) {
    this.visit_dq1c34$(stm.to);
    this.programStr_0.append_gw00v9$(' = ');
    this.visit_dq1c34$(stm.from);
    this.programStr_0.append_gw00v9$(';');
  };
  GlslGenerator.prototype.visit_d6ige1$ = function (stm) {
    this.programStr_0.append_gw00v9$('discard;');
  };
  GlslGenerator.prototype.visit_b87eze$ = function (operand) {
    var tmp$;
    this.programStr_0.append_gw00v9$('vec4(');
    var first = true;
    tmp$ = operand.ops.iterator();
    while (tmp$.hasNext()) {
      var op = tmp$.next();
      if (!first) {
        this.programStr_0.append_gw00v9$(',');
      }
      this.visit_dq1c34$(op);
      first = false;
    }
    this.programStr_0.append_gw00v9$(')');
  };
  GlslGenerator.prototype.visit_s5t3yz$ = function (operand) {
    this.programStr_0.append_gw00v9$('(');
    this.visit_dq1c34$(operand.left);
    this.programStr_0.append_gw00v9$(operand.op);
    this.visit_dq1c34$(operand.right);
    this.programStr_0.append_gw00v9$(')');
  };
  GlslGenerator.prototype.visit_j8ixcp$ = function (func) {
    var tmp$;
    this.programStr_0.append_gw00v9$(func.name);
    this.programStr_0.append_gw00v9$('(');
    var first = true;
    tmp$ = func.ops.iterator();
    while (tmp$.hasNext()) {
      var op = tmp$.next();
      if (!first)
        this.programStr_0.append_gw00v9$(', ');
      this.visit_dq1c34$(op);
      first = false;
    }
    this.programStr_0.append_gw00v9$(')');
  };
  GlslGenerator.prototype.visit_ceyg7y$ = function (stm) {
    var tmp$;
    this.programStr_0.append_gw00v9$('if (');
    this.visit_dq1c34$(stm.cond);
    this.programStr_0.append_gw00v9$(') ');
    this.visit_57b21j$(stm.tbody);
    if (stm.fbody != null) {
      this.programStr_0.append_gw00v9$(' else ');
      this.visit_57b21j$((tmp$ = stm.fbody) != null ? tmp$ : Kotlin.throwNPE());
    }
  };
  GlslGenerator.prototype.visit_bmfbl7$ = function (operand) {
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType(operand, Output)) {
      tmp$_1 = this.programStr_0;
      tmp$ = this.kind;
      if (Kotlin.equals(tmp$, ShaderType$VERTEX_getInstance()))
        tmp$_0 = 'gl_Position';
      else if (Kotlin.equals(tmp$, ShaderType$FRAGMENT_getInstance()))
        tmp$_0 = 'gl_FragColor';
      else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      tmp$_1.append_gw00v9$(tmp$_0);
    }
     else {
      this.programStr_0.append_gw00v9$(operand.name);
    }
    Program$Visitor.prototype.visit_bmfbl7$.call(this, operand);
  };
  GlslGenerator.prototype.visit_nykr6b$ = function (temp) {
    this.temps_0.add_11rb$(temp);
    Program$Visitor.prototype.visit_nykr6b$.call(this, temp);
  };
  GlslGenerator.prototype.visit_3kqgd9$ = function (attribute) {
    this.attributes_0.add_11rb$(attribute);
    Program$Visitor.prototype.visit_3kqgd9$.call(this, attribute);
  };
  GlslGenerator.prototype.visit_b38853$ = function (varying) {
    this.varyings_0.add_11rb$(varying);
    Program$Visitor.prototype.visit_b38853$.call(this, varying);
  };
  GlslGenerator.prototype.visit_2f4vi3$ = function (uniform) {
    this.uniforms_0.add_11rb$(uniform);
    Program$Visitor.prototype.visit_2f4vi3$.call(this, uniform);
  };
  GlslGenerator.prototype.visit_e3ui06$ = function (output) {
    Program$Visitor.prototype.visit_e3ui06$.call(this, output);
  };
  GlslGenerator.prototype.visit_jod55v$ = function (operand) {
    this.programStr_0.append_s8jyv4$(operand.value);
    Program$Visitor.prototype.visit_jod55v$.call(this, operand);
  };
  GlslGenerator.prototype.visit_u1pe22$ = function (operand) {
    var str = operand.value.toString();
    if (contains(str, 46)) {
      this.programStr_0.append_gw00v9$(str);
    }
     else {
      this.programStr_0.append_gw00v9$(str + '.0');
    }
    Program$Visitor.prototype.visit_u1pe22$.call(this, operand);
  };
  GlslGenerator.prototype.visit_zamv4y$ = function (operand) {
    this.programStr_0.append_s8jyv4$(operand.value);
    Program$Visitor.prototype.visit_zamv4y$.call(this, operand);
  };
  GlslGenerator.prototype.visit_sbsglh$ = function (operand) {
    this.visit_dq1c34$(operand.left);
    this.programStr_0.append_gw00v9$('.' + operand.swizzle);
  };
  GlslGenerator.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GlslGenerator',
    interfaces: [Program$Visitor]
  };
  function toGlSl($receiver) {
    return (new GlslGenerator($receiver.type)).generate_57b21j$($receiver.stm);
  }
  function VarType(name, ordinal, bytesSize, elementCount) {
    Enum.call(this);
    this.bytesSize = bytesSize;
    this.elementCount = elementCount;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VarType_initFields() {
    VarType_initFields = function () {
    };
    VarType$TextureUnit_instance = new VarType('TextureUnit', 0, 4, 1);
    VarType$Bool1_instance = new VarType('Bool1', 1, 1, 1);
    VarType$Int1_instance = new VarType('Int1', 2, 4, 1);
    VarType$Float1_instance = new VarType('Float1', 3, 4, 1);
    VarType$Float2_instance = new VarType('Float2', 4, 8, 2);
    VarType$Float3_instance = new VarType('Float3', 5, 12, 3);
    VarType$Float4_instance = new VarType('Float4', 6, 16, 4);
    VarType$Mat4_instance = new VarType('Mat4', 7, (4 * 4 | 0) * 4 | 0, 16);
    VarType$Byte4_instance = new VarType('Byte4', 8, 4, 4);
  }
  var VarType$TextureUnit_instance;
  function VarType$TextureUnit_getInstance() {
    VarType_initFields();
    return VarType$TextureUnit_instance;
  }
  var VarType$Bool1_instance;
  function VarType$Bool1_getInstance() {
    VarType_initFields();
    return VarType$Bool1_instance;
  }
  var VarType$Int1_instance;
  function VarType$Int1_getInstance() {
    VarType_initFields();
    return VarType$Int1_instance;
  }
  var VarType$Float1_instance;
  function VarType$Float1_getInstance() {
    VarType_initFields();
    return VarType$Float1_instance;
  }
  var VarType$Float2_instance;
  function VarType$Float2_getInstance() {
    VarType_initFields();
    return VarType$Float2_instance;
  }
  var VarType$Float3_instance;
  function VarType$Float3_getInstance() {
    VarType_initFields();
    return VarType$Float3_instance;
  }
  var VarType$Float4_instance;
  function VarType$Float4_getInstance() {
    VarType_initFields();
    return VarType$Float4_instance;
  }
  var VarType$Mat4_instance;
  function VarType$Mat4_getInstance() {
    VarType_initFields();
    return VarType$Mat4_instance;
  }
  var VarType$Byte4_instance;
  function VarType$Byte4_getInstance() {
    VarType_initFields();
    return VarType$Byte4_instance;
  }
  VarType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VarType',
    interfaces: [Enum]
  };
  function VarType$values() {
    return [VarType$TextureUnit_getInstance(), VarType$Bool1_getInstance(), VarType$Int1_getInstance(), VarType$Float1_getInstance(), VarType$Float2_getInstance(), VarType$Float3_getInstance(), VarType$Float4_getInstance(), VarType$Mat4_getInstance(), VarType$Byte4_getInstance()];
  }
  VarType.values = VarType$values;
  function VarType$valueOf(name) {
    switch (name) {
      case 'TextureUnit':
        return VarType$TextureUnit_getInstance();
      case 'Bool1':
        return VarType$Bool1_getInstance();
      case 'Int1':
        return VarType$Int1_getInstance();
      case 'Float1':
        return VarType$Float1_getInstance();
      case 'Float2':
        return VarType$Float2_getInstance();
      case 'Float3':
        return VarType$Float3_getInstance();
      case 'Float4':
        return VarType$Float4_getInstance();
      case 'Mat4':
        return VarType$Mat4_getInstance();
      case 'Byte4':
        return VarType$Byte4_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korag.shader.VarType.' + name);
    }
  }
  VarType.valueOf_61zpoe$ = VarType$valueOf;
  function ShaderType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ShaderType_initFields() {
    ShaderType_initFields = function () {
    };
    ShaderType$VERTEX_instance = new ShaderType('VERTEX', 0);
    ShaderType$FRAGMENT_instance = new ShaderType('FRAGMENT', 1);
  }
  var ShaderType$VERTEX_instance;
  function ShaderType$VERTEX_getInstance() {
    ShaderType_initFields();
    return ShaderType$VERTEX_instance;
  }
  var ShaderType$FRAGMENT_instance;
  function ShaderType$FRAGMENT_getInstance() {
    ShaderType_initFields();
    return ShaderType$FRAGMENT_instance;
  }
  ShaderType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ShaderType',
    interfaces: [Enum]
  };
  function ShaderType$values() {
    return [ShaderType$VERTEX_getInstance(), ShaderType$FRAGMENT_getInstance()];
  }
  ShaderType.values = ShaderType$values;
  function ShaderType$valueOf(name) {
    switch (name) {
      case 'VERTEX':
        return ShaderType$VERTEX_getInstance();
      case 'FRAGMENT':
        return ShaderType$FRAGMENT_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korag.shader.ShaderType.' + name);
    }
  }
  ShaderType.valueOf_61zpoe$ = ShaderType$valueOf;
  function Operand(type) {
    this.type = type;
  }
  Operand.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Operand',
    interfaces: []
  };
  function Variable(name, type) {
    Operand.call(this, type);
    this.name = name;
    this.id = 0;
    this.data = null;
  }
  Variable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Variable',
    interfaces: [Operand]
  };
  function Attribute(name, type, normalized) {
    Variable.call(this, name, type);
    this.normalized = normalized;
  }
  Attribute.prototype.toString = function () {
    return 'Attribute(' + this.name + ')';
  };
  Attribute.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Attribute',
    interfaces: [Variable]
  };
  function Varying(name, type) {
    Variable.call(this, name, type);
  }
  Varying.prototype.toString = function () {
    return 'Varying(' + this.name + ')';
  };
  Varying.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Varying',
    interfaces: [Variable]
  };
  function Uniform(name, type) {
    Variable.call(this, name, type);
  }
  Uniform.prototype.toString = function () {
    return 'Uniform(' + this.name + ')';
  };
  Uniform.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Uniform',
    interfaces: [Variable]
  };
  function Temp(id, type) {
    Variable.call(this, 'temp' + id, type);
  }
  Temp.prototype.toString = function () {
    return 'Temp(' + this.name + ')';
  };
  Temp.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Temp',
    interfaces: [Variable]
  };
  function Output() {
    Output_instance = this;
    Variable.call(this, 'out', VarType$Float4_getInstance());
  }
  Output.prototype.toString = function () {
    return 'Output';
  };
  Output.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Output',
    interfaces: [Variable]
  };
  var Output_instance = null;
  function Output_getInstance() {
    if (Output_instance === null) {
      new Output();
    }
    return Output_instance;
  }
  function Program(vertex, fragment, name) {
    if (name === void 0)
      name = 'program';
    this.vertex = vertex;
    this.fragment = fragment;
    this.name = name;
    this.uniforms_opu58o$_0 = lazy(Program$uniforms$lambda(this));
    this.attributes_u73xi8$_0 = lazy(Program$attributes$lambda(this));
  }
  Object.defineProperty(Program.prototype, 'uniforms', {
    get: function () {
      var $receiver = this.uniforms_opu58o$_0;
      new Kotlin.PropertyMetadata('uniforms');
      return $receiver.value;
    }
  });
  Object.defineProperty(Program.prototype, 'attributes', {
    get: function () {
      var $receiver = this.attributes_u73xi8$_0;
      new Kotlin.PropertyMetadata('attributes');
      return $receiver.value;
    }
  });
  Program.prototype.close = function () {
  };
  Program.prototype.toString = function () {
    var tmp$ = 'Program(name=' + this.name + ', attributes=';
    var $receiver = this.attributes;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.name);
    }
    var tmp$_1 = tmp$ + destination + ', uniforms=';
    var $receiver_0 = this.uniforms;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(item_0.name);
    }
    return tmp$_1 + destination_0 + ')';
  };
  function Program$Binop(left, op, right) {
    Operand.call(this, left.type);
    this.left = left;
    this.op = op;
    this.right = right;
  }
  Program$Binop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Binop',
    interfaces: [Operand]
  };
  function Program$IntLiteral(value) {
    Operand.call(this, VarType$Int1_getInstance());
    this.value = value;
  }
  Program$IntLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'IntLiteral',
    interfaces: [Operand]
  };
  function Program$FloatLiteral(value) {
    Operand.call(this, VarType$Float1_getInstance());
    this.value = value;
  }
  Program$FloatLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FloatLiteral',
    interfaces: [Operand]
  };
  function Program$BoolLiteral(value) {
    Operand.call(this, VarType$Bool1_getInstance());
    this.value = value;
  }
  Program$BoolLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BoolLiteral',
    interfaces: [Operand]
  };
  function Program$Vector(type, ops) {
    Operand.call(this, type);
    this.ops = ops;
  }
  Program$Vector.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Vector',
    interfaces: [Operand]
  };
  function Program$Swizzle(left, swizzle) {
    Operand.call(this, left.type);
    this.left = left;
    this.swizzle = swizzle;
  }
  Program$Swizzle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Swizzle',
    interfaces: [Operand]
  };
  function Program$Func(name, ops) {
    Operand.call(this, VarType$Float1_getInstance());
    this.name = name;
    this.ops = ops;
  }
  Program$Func.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Func',
    interfaces: [Operand]
  };
  function Program$Stm() {
  }
  function Program$Stm$Stms(stms) {
    Program$Stm.call(this);
    this.stms = stms;
  }
  Program$Stm$Stms.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Stms',
    interfaces: [Program$Stm]
  };
  function Program$Stm$Set(to, from) {
    Program$Stm.call(this);
    this.to = to;
    this.from = from;
  }
  Program$Stm$Set.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Set',
    interfaces: [Program$Stm]
  };
  function Program$Stm$Discard() {
    Program$Stm.call(this);
  }
  Program$Stm$Discard.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Discard',
    interfaces: [Program$Stm]
  };
  function Program$Stm$If(cond, tbody, fbody) {
    if (fbody === void 0)
      fbody = null;
    Program$Stm.call(this);
    this.cond = cond;
    this.tbody = tbody;
    this.fbody = fbody;
  }
  Program$Stm$If.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'If',
    interfaces: [Program$Stm]
  };
  Program$Stm.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Stm',
    interfaces: []
  };
  function Program$Builder(type) {
    this.type = type;
    this.outputStms = ArrayList_init();
    this.out = Output_getInstance();
  }
  Program$Builder.prototype.ELSE_q23b5m$ = function ($receiver, callback) {
    var body = new Program$Builder(this.type);
    callback(body);
    $receiver.fbody = new Program$Stm$Stms(body.outputStms);
  };
  Program$Builder.prototype.IF_4dsix7$ = defineInlineFunction('korag-js.com.soywiz.korag.shader.Program.Builder.IF_4dsix7$', wrapFunction(function () {
    var Program$Program$Builder_init = _.com.soywiz.korag.shader.Program.Builder;
    var Program$Stm$Program$Stm$Stms_init = _.com.soywiz.korag.shader.Program.Stm.Stms;
    var Program$Stm$Program$Stm$If_init = _.com.soywiz.korag.shader.Program.Stm.If;
    return function (cond, callback) {
      var body = new Program$Program$Builder_init(this.type);
      callback(body);
      var stmIf = new Program$Stm$Program$Stm$If_init(cond, new Program$Stm$Program$Stm$Stms_init(body.outputStms));
      this.outputStms.add_11rb$(stmIf);
      return stmIf;
    };
  }));
  Program$Builder.prototype.SET_q0hzsk$ = function (target, expr) {
    var $receiver = this.outputStms;
    var element = new Program$Stm$Set(target, expr);
    $receiver.add_11rb$(element);
  };
  Program$Builder.prototype.DISCARD = function () {
    var $receiver = this.outputStms;
    var element = new Program$Stm$Discard();
    $receiver.add_11rb$(element);
  };
  Program$Builder.prototype.set_2oogdr$ = function ($receiver, from) {
    var $receiver_0 = this.outputStms;
    var element = new Program$Stm$Set($receiver, from);
    $receiver_0.add_11rb$(element);
  };
  Program$Builder.prototype.assign_2oogdr$ = function ($receiver, from) {
    var $receiver_0 = this.outputStms;
    var element = new Program$Stm$Set($receiver, from);
    $receiver_0.add_11rb$(element);
  };
  Program$Builder.prototype.sin_dq1c34$ = function (arg) {
    return new Program$Func('sin', listOf(arg));
  };
  Program$Builder.prototype.cos_dq1c34$ = function (arg) {
    return new Program$Func('cos', listOf(arg));
  };
  Program$Builder.prototype.tan_dq1c34$ = function (arg) {
    return new Program$Func('tan', listOf(arg));
  };
  Program$Builder.prototype.asin_dq1c34$ = function (arg) {
    return new Program$Func('asin', listOf(arg));
  };
  Program$Builder.prototype.acos_dq1c34$ = function (arg) {
    return new Program$Func('acos', listOf(arg));
  };
  Program$Builder.prototype.atan_dq1c34$ = function (arg) {
    return new Program$Func('atan', listOf(arg));
  };
  Program$Builder.prototype.radians_dq1c34$ = function (arg) {
    return new Program$Func('radians', listOf(arg));
  };
  Program$Builder.prototype.degrees_dq1c34$ = function (arg) {
    return new Program$Func('degrees', listOf(arg));
  };
  Program$Builder.prototype.texture2D_q0hzsk$ = function (a, b) {
    return new Program$Func('texture2D', listOf_0([a, b]));
  };
  Program$Builder.prototype.pow_q0hzsk$ = function (b, e) {
    return new Program$Func('pow', listOf_0([b, e]));
  };
  Program$Builder.prototype.exp_dq1c34$ = function (v) {
    return new Program$Func('exp', listOf(v));
  };
  Program$Builder.prototype.exp2_dq1c34$ = function (v) {
    return new Program$Func('exp2', listOf(v));
  };
  Program$Builder.prototype.log_dq1c34$ = function (v) {
    return new Program$Func('log', listOf(v));
  };
  Program$Builder.prototype.log2_dq1c34$ = function (v) {
    return new Program$Func('log2', listOf(v));
  };
  Program$Builder.prototype.sqrt_dq1c34$ = function (v) {
    return new Program$Func('sqrt', listOf(v));
  };
  Program$Builder.prototype.inversesqrt_dq1c34$ = function (v) {
    return new Program$Func('inversesqrt', listOf(v));
  };
  Program$Builder.prototype.abs_dq1c34$ = function (v) {
    return new Program$Func('abs', listOf(v));
  };
  Program$Builder.prototype.sign_dq1c34$ = function (v) {
    return new Program$Func('sign', listOf(v));
  };
  Program$Builder.prototype.ceil_dq1c34$ = function (v) {
    return new Program$Func('ceil', listOf(v));
  };
  Program$Builder.prototype.floor_dq1c34$ = function (v) {
    return new Program$Func('floor', listOf(v));
  };
  Program$Builder.prototype.fract_dq1c34$ = function (v) {
    return new Program$Func('fract', listOf(v));
  };
  Program$Builder.prototype.clamp_qzk4o8$ = function (v, min, max) {
    return new Program$Func('clamp', listOf_0([v, min, max]));
  };
  Program$Builder.prototype.min_q0hzsk$ = function (a, b) {
    return new Program$Func('min', listOf_0([a, b]));
  };
  Program$Builder.prototype.max_q0hzsk$ = function (a, b) {
    return new Program$Func('max', listOf_0([a, b]));
  };
  Program$Builder.prototype.mod_q0hzsk$ = function (a, b) {
    return new Program$Func('mod', listOf_0([a, b]));
  };
  Program$Builder.prototype.step_q0hzsk$ = function (a, b) {
    return new Program$Func('step', listOf_0([a, b]));
  };
  Program$Builder.prototype.smoothstep_qzk4o8$ = function (a, b, c) {
    return new Program$Func('smoothstep', listOf_0([a, b, c]));
  };
  Program$Builder.prototype.mix_qzk4o8$ = function (a, b, step) {
    return new Program$Func('mix', listOf_0([a, b, step]));
  };
  Program$Builder.prototype.get_lit_s8ev3n$ = function ($receiver) {
    return new Program$IntLiteral($receiver);
  };
  Program$Builder.prototype.get_lit_yrwdxr$ = function ($receiver) {
    return new Program$FloatLiteral($receiver);
  };
  Program$Builder.prototype.get_lit_81szk$ = function ($receiver) {
    return new Program$FloatLiteral($receiver);
  };
  Program$Builder.prototype.get_lit_1v8dcc$ = function ($receiver) {
    return new Program$BoolLiteral($receiver);
  };
  Program$Builder.prototype.lit_7ox3bl$ = function (type, ops) {
    return new Program$Vector(type, toList_0(ops));
  };
  Program$Builder.prototype.vec4_hywno3$ = function (ops) {
    return new Program$Vector(VarType$Float4_getInstance(), toList_0(ops));
  };
  Program$Builder.prototype.get_hhgt4v$ = function ($receiver, swizzle) {
    return new Program$Swizzle($receiver, swizzle);
  };
  Program$Builder.prototype.minus_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '-', that);
  };
  Program$Builder.prototype.plus_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '+', that);
  };
  Program$Builder.prototype.times_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '*', that);
  };
  Program$Builder.prototype.div_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '/', that);
  };
  Program$Builder.prototype.rem_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '%', that);
  };
  Program$Builder.prototype.eq_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '==', that);
  };
  Program$Builder.prototype.ne_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '!=', that);
  };
  Program$Builder.prototype.lt_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '<', that);
  };
  Program$Builder.prototype.le_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '<=', that);
  };
  Program$Builder.prototype.gt_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '>', that);
  };
  Program$Builder.prototype.ge_2oogdr$ = function ($receiver, that) {
    return new Program$Binop($receiver, '>=', that);
  };
  Program$Builder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Builder',
    interfaces: []
  };
  function Program$Visitor() {
  }
  Program$Visitor.prototype.visit_57b21j$ = function (stm) {
    if (Kotlin.isType(stm, Program$Stm$Stms))
      this.visit_1xgyq4$(stm);
    else if (Kotlin.isType(stm, Program$Stm$Set))
      this.visit_tq3hhf$(stm);
    else if (Kotlin.isType(stm, Program$Stm$If))
      this.visit_ceyg7y$(stm);
    else if (Kotlin.isType(stm, Program$Stm$Discard))
      this.visit_d6ige1$(stm);
    else
      Kotlin.noWhenBranchMatched();
  };
  Program$Visitor.prototype.visit_1xgyq4$ = function (stms) {
    var tmp$;
    tmp$ = stms.stms.iterator();
    while (tmp$.hasNext()) {
      var stm = tmp$.next();
      this.visit_57b21j$(stm);
    }
  };
  Program$Visitor.prototype.visit_ceyg7y$ = function (stm) {
    this.visit_dq1c34$(stm.cond);
    this.visit_57b21j$(stm.tbody);
  };
  Program$Visitor.prototype.visit_tq3hhf$ = function (stm) {
    this.visit_dq1c34$(stm.from);
    this.visit_dq1c34$(stm.to);
  };
  Program$Visitor.prototype.visit_d6ige1$ = function (stm) {
  };
  Program$Visitor.prototype.visit_dq1c34$ = function (operand) {
    if (Kotlin.isType(operand, Variable))
      this.visit_bmfbl7$(operand);
    else if (Kotlin.isType(operand, Program$Binop))
      this.visit_s5t3yz$(operand);
    else if (Kotlin.isType(operand, Program$BoolLiteral))
      this.visit_zamv4y$(operand);
    else if (Kotlin.isType(operand, Program$IntLiteral))
      this.visit_jod55v$(operand);
    else if (Kotlin.isType(operand, Program$FloatLiteral))
      this.visit_u1pe22$(operand);
    else if (Kotlin.isType(operand, Program$Vector))
      this.visit_b87eze$(operand);
    else if (Kotlin.isType(operand, Program$Swizzle))
      this.visit_sbsglh$(operand);
    else if (Kotlin.isType(operand, Program$Func))
      this.visit_j8ixcp$(operand);
    else
      invalidOp("Don't know how to visit operand " + operand);
  };
  Program$Visitor.prototype.visit_j8ixcp$ = function (func) {
    var tmp$;
    tmp$ = func.ops.iterator();
    while (tmp$.hasNext()) {
      var op = tmp$.next();
      this.visit_dq1c34$(op);
    }
  };
  Program$Visitor.prototype.visit_bmfbl7$ = function (operand) {
    if (Kotlin.isType(operand, Attribute))
      this.visit_3kqgd9$(operand);
    else if (Kotlin.isType(operand, Varying))
      this.visit_b38853$(operand);
    else if (Kotlin.isType(operand, Uniform))
      this.visit_2f4vi3$(operand);
    else if (Kotlin.isType(operand, Output))
      this.visit_e3ui06$(operand);
    else if (Kotlin.isType(operand, Temp))
      this.visit_nykr6b$(operand);
    else
      invalidOp("Don't know how to visit basename " + operand);
  };
  Program$Visitor.prototype.visit_nykr6b$ = function (temp) {
  };
  Program$Visitor.prototype.visit_3kqgd9$ = function (attribute) {
  };
  Program$Visitor.prototype.visit_b38853$ = function (varying) {
  };
  Program$Visitor.prototype.visit_2f4vi3$ = function (uniform) {
  };
  Program$Visitor.prototype.visit_e3ui06$ = function (output) {
  };
  Program$Visitor.prototype.visit_s5t3yz$ = function (operand) {
    this.visit_dq1c34$(operand.left);
    this.visit_dq1c34$(operand.right);
  };
  Program$Visitor.prototype.visit_sbsglh$ = function (operand) {
    this.visit_dq1c34$(operand.left);
  };
  Program$Visitor.prototype.visit_b87eze$ = function (operand) {
    var tmp$;
    tmp$ = operand.ops.iterator();
    while (tmp$.hasNext()) {
      var op = tmp$.next();
      this.visit_dq1c34$(op);
    }
  };
  Program$Visitor.prototype.visit_jod55v$ = function (operand) {
  };
  Program$Visitor.prototype.visit_u1pe22$ = function (operand) {
  };
  Program$Visitor.prototype.visit_zamv4y$ = function (operand) {
  };
  Program$Visitor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Visitor',
    interfaces: []
  };
  function Program$uniforms$lambda(this$Program) {
    return function () {
      return plus(this$Program.vertex.uniforms, this$Program.fragment.uniforms);
    };
  }
  function Program$attributes$lambda(this$Program) {
    return function () {
      return plus(this$Program.vertex.attributes, this$Program.fragment.attributes);
    };
  }
  Program.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Program',
    interfaces: [Closeable]
  };
  function Shader(type, stm) {
    this.type = type;
    this.stm = stm;
    this.uniforms_bnz1nv$_0 = lazy(Shader$uniforms$lambda(this));
    this.attributes_cq9n1p$_0 = lazy(Shader$attributes$lambda(this));
  }
  Object.defineProperty(Shader.prototype, 'uniforms', {
    get: function () {
      var $receiver = this.uniforms_bnz1nv$_0;
      new Kotlin.PropertyMetadata('uniforms');
      return $receiver.value;
    }
  });
  Object.defineProperty(Shader.prototype, 'attributes', {
    get: function () {
      var $receiver = this.attributes_cq9n1p$_0;
      new Kotlin.PropertyMetadata('attributes');
      return $receiver.value;
    }
  });
  function Shader$uniforms$lambda$ObjectLiteral(closure$out) {
    this.closure$out = closure$out;
    Program$Visitor.call(this);
  }
  Shader$uniforms$lambda$ObjectLiteral.prototype.visit_2f4vi3$ = function (uniform) {
    this.closure$out;
    this.closure$out.add_11rb$(uniform);
  };
  Shader$uniforms$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Program$Visitor]
  };
  function Shader$uniforms$lambda(this$Shader) {
    return function () {
      var out = LinkedHashSet_init();
      (new Shader$uniforms$lambda$ObjectLiteral(out)).visit_57b21j$(this$Shader.stm);
      return toSet(out);
    };
  }
  function Shader$attributes$lambda$ObjectLiteral(closure$out) {
    this.closure$out = closure$out;
    Program$Visitor.call(this);
  }
  Shader$attributes$lambda$ObjectLiteral.prototype.visit_3kqgd9$ = function (attribute) {
    this.closure$out;
    this.closure$out.add_11rb$(attribute);
  };
  Shader$attributes$lambda$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Program$Visitor]
  };
  function Shader$attributes$lambda(this$Shader) {
    return function () {
      var out = LinkedHashSet_init();
      (new Shader$attributes$lambda$ObjectLiteral(out)).visit_57b21j$(this$Shader.stm);
      return toSet(out);
    };
  }
  Shader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Shader',
    interfaces: []
  };
  function VertexShader(stm) {
    Shader.call(this, ShaderType$VERTEX_getInstance(), stm);
  }
  VertexShader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VertexShader',
    interfaces: [Shader]
  };
  function FragmentShader(stm) {
    Shader.call(this, ShaderType$FRAGMENT_getInstance(), stm);
  }
  FragmentShader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FragmentShader',
    interfaces: [Shader]
  };
  function VertexShader_0(callback) {
    var builder = new Program$Builder(ShaderType$VERTEX_getInstance());
    callback(builder);
    return new VertexShader(new Program$Stm$Stms(builder.outputStms));
  }
  function FragmentShader_0(callback) {
    var builder = new Program$Builder(ShaderType$FRAGMENT_getInstance());
    callback(builder);
    return new FragmentShader(new Program$Stm$Stms(builder.outputStms));
  }
  function VertexLayout(attributes) {
    this.attributes = attributes;
    this.totalSize_ev5sn0$_0 = 0;
    var $receiver = this.attributes;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var out = this.totalSize;
      this.totalSize = this.totalSize + item.type.bytesSize | 0;
      tmp$_0.call(destination, out);
    }
    this.attributePositions = destination;
  }
  Object.defineProperty(VertexLayout.prototype, 'totalSize', {
    get: function () {
      return this.totalSize_ev5sn0$_0;
    },
    set: function (totalSize) {
      this.totalSize_ev5sn0$_0 = totalSize;
    }
  });
  VertexLayout.prototype.toString = function () {
    var $receiver = this.attributes;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.name);
    }
    return 'VertexLayout[' + joinToString(destination, ', ') + ']';
  };
  VertexLayout.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VertexLayout',
    interfaces: []
  };
  function VertexLayout_init(attributes, $this) {
    $this = $this || Object.create(VertexLayout.prototype);
    VertexLayout.call($this, toList_0(attributes));
    return $this;
  }
  function AGFactorySoftware() {
    this.supportsNativeFrame_tmfibi$_0 = false;
  }
  Object.defineProperty(AGFactorySoftware.prototype, 'supportsNativeFrame', {
    get: function () {
      return this.supportsNativeFrame_tmfibi$_0;
    }
  });
  AGFactorySoftware.prototype.create = function () {
    return new AGSoftware();
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  AGFactorySoftware.prototype.createFastWindow_3m52m6$ = function (title, width, height) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  AGFactorySoftware.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AGFactorySoftware',
    interfaces: [AGFactory]
  };
  function AGSoftware() {
    AG.call(this);
    this.nativeComponent_wz502q$_0 = new Any();
    this.ready();
  }
  Object.defineProperty(AGSoftware.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_wz502q$_0;
    }
  });
  AGSoftware.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AGSoftware',
    interfaces: [AG]
  };
  function AGFactoryFactory() {
    AGFactoryFactory_instance = this;
  }
  AGFactoryFactory.prototype.create = function () {
    return AGFactoryWebgl_getInstance();
  };
  AGFactoryFactory.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'AGFactoryFactory',
    interfaces: []
  };
  var AGFactoryFactory_instance = null;
  function AGFactoryFactory_getInstance() {
    if (AGFactoryFactory_instance === null) {
      new AGFactoryFactory();
    }
    return AGFactoryFactory_instance;
  }
  function AGFactoryWebgl() {
    AGFactoryWebgl_instance = this;
    this.supportsNativeFrame_xyi6nj$_0 = true;
  }
  Object.defineProperty(AGFactoryWebgl.prototype, 'supportsNativeFrame', {
    get: function () {
      return this.supportsNativeFrame_xyi6nj$_0;
    }
  });
  AGFactoryWebgl.prototype.create = function () {
    return new AGWebgl();
  };
  AGFactoryWebgl.prototype.createFastWindow_3m52m6$ = function (title, width, height) {
    throw new NotImplementedError_init();
  };
  AGFactoryWebgl.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'AGFactoryWebgl',
    interfaces: [AGFactory]
  };
  var AGFactoryWebgl_instance = null;
  function AGFactoryWebgl_getInstance() {
    if (AGFactoryWebgl_instance === null) {
      new AGFactoryWebgl();
    }
    return AGFactoryWebgl_instance;
  }
  function jsEmptyObject() {
    return {};
  }
  function jsObject(pairs) {
    var tmp$;
    var out = jsEmptyObject();
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var tmp$_0 = pairs[tmp$];
      var k = tmp$_0.component1()
      , v = tmp$_0.component2();
      if (v != null)
        out[k] = v;
    }
    return out;
  }
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function AGWebgl() {
    AG.call(this);
    var tmp$, tmp$_0;
    this.canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : Kotlin.throwCCE();
    this.glOpts = jsObject([to('premultipliedAlpha', false), to('alpha', false), to('stencil', true)]);
    this.gl = (tmp$_0 = this.canvas.getContext('webgl', this.glOpts)) != null ? tmp$_0 : this.canvas.getContext('experimental-webgl', this.glOpts);
    this.nativeComponent_ktsp3z$_0 = this.canvas;
    this.onReadyOnce = new Once();
    this.canvas.addEventListener('webglcontextlost', AGWebgl_init$lambda, false);
    this.canvas.addEventListener('webglcontextrestored', AGWebgl_init$lambda_0(this), false);
    this.programs_0 = HashMap_init();
    this.tempTextures = ArrayList_init();
  }
  Object.defineProperty(AGWebgl.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_ktsp3z$_0;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'pixelDensity', {
    get: function () {
      var tmp$;
      return (tmp$ = window.devicePixelRatio) != null ? tmp$ : 1.0;
    }
  });
  AGWebgl.prototype.repaint = function () {
    var $this = this.onReadyOnce;
    if (!$this.completed) {
      $this.completed = true;
      this.ready();
    }
    this.onRender.invoke_11rb$(this);
  };
  AGWebgl.prototype.resized = function () {
    this.backWidth = this.canvas.width;
    this.backHeight = this.canvas.height;
    this.gl.viewport(0, 0, this.backWidth, this.backHeight);
    this.onResized.invoke_11rb$(Unit);
  };
  AGWebgl.prototype.dispose = function () {
  };
  AGWebgl.prototype.clear_2lepo2$$default = function (color_0, depth, stencil, clearColor, clearDepth, clearStencil) {
    var bits = 0;
    this.gl.disable(WebGLRenderingContext.SCISSOR_TEST);
    if (clearColor) {
      bits = bits | WebGLRenderingContext.COLOR_BUFFER_BIT;
      this.gl.clearColor(color.RGBA.getRf_za3lpa$(color_0), color.RGBA.getGf_za3lpa$(color_0), color.RGBA.getBf_za3lpa$(color_0), color.RGBA.getAf_za3lpa$(color_0));
    }
    if (clearDepth) {
      bits = bits | WebGLRenderingContext.DEPTH_BUFFER_BIT;
      this.gl.clearDepth(depth);
    }
    if (clearStencil) {
      bits = bits | WebGLRenderingContext.STENCIL_BUFFER_BIT;
      this.gl.stencilMask(-1);
      this.gl.clearStencil(stencil);
    }
    this.gl.clear(bits);
  };
  function AGWebgl$WebglProgram($outer, p) {
    this.$outer = $outer;
    this.p = p;
    this.program = this.$outer.gl.createProgram();
    this.cachedVersion = -1;
    this.vertex = null;
    this.fragment = null;
  }
  AGWebgl$WebglProgram.prototype.createShader_19mbxw$ = function (type, source) {
    var shader = this.$outer.gl.createShader(type);
    this.$outer.gl.shaderSource(shader, source);
    this.$outer.gl.compileShader(shader);
    var success = this.$outer.gl.getShaderParameter(shader, WebGLRenderingContext.COMPILE_STATUS);
    if (!success) {
      var error = this.$outer.gl.getShaderInfoLog(shader);
      lang.Console.error_s8jyv4$(Kotlin.toString(shader));
      lang.Console.error_s8jyv4$(source);
      lang.Console.error_s8jyv4$('Could not compile WebGL shader: ' + error);
      throw new RuntimeException(error);
    }
    return shader;
  };
  AGWebgl$WebglProgram.prototype.ensure_0 = function () {
    if (this.cachedVersion !== this.$outer.contextVersion) {
      this.cachedVersion = this.$outer.contextVersion;
      this.vertex = this.createShader_19mbxw$(WebGLRenderingContext.VERTEX_SHADER, toGlSlString(this.p.vertex));
      this.fragment = this.createShader_19mbxw$(WebGLRenderingContext.FRAGMENT_SHADER, toGlSlString_0(this.p.fragment));
      this.$outer.gl.attachShader(this.program, this.vertex);
      this.$outer.gl.attachShader(this.program, this.fragment);
      this.$outer.gl.linkProgram(this.program);
      var linkStatus = this.$outer.gl.getProgramParameter(this.program, WebGLRenderingContext.LINK_STATUS);
      if (!linkStatus) {
        var info = this.$outer.gl.getProgramInfoLog(this.program);
        lang.Console.error_s8jyv4$('Could not compile WebGL program: ' + info);
      }
    }
  };
  AGWebgl$WebglProgram.prototype.bind = function () {
    this.ensure_0();
    this.$outer.gl.useProgram(this.program);
  };
  AGWebgl$WebglProgram.prototype.unbind = function () {
    this.$outer.gl.useProgram(null);
  };
  AGWebgl$WebglProgram.prototype.close = function () {
    this.ensure_0();
    this.$outer.gl.deleteShader(this.vertex);
    this.$outer.gl.deleteShader(this.fragment);
    this.$outer.gl.deleteProgram(this.program);
  };
  AGWebgl$WebglProgram.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebglProgram',
    interfaces: [Closeable]
  };
  function AGWebgl$WebglTexture($outer) {
    this.$outer = $outer;
    AG$Texture.call(this);
    this.cachedVersion = -1;
    this._tex_0 = null;
  }
  Object.defineProperty(AGWebgl$WebglTexture.prototype, 'tex', {
    get: function () {
      if (this.cachedVersion !== this.$outer.contextVersion) {
        this.cachedVersion = this.$outer.contextVersion;
        this.invalidate();
        this._tex_0 = this.$outer.gl.createTexture();
      }
      return this._tex_0;
    }
  });
  AGWebgl$WebglTexture.prototype.actualSyncUpload_u9zjc3$ = function (source, bmp, requestMipmaps) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (bmp != null)
      if (Kotlin.isType(bmp, CanvasNativeImage)) {
        var type = WebGLRenderingContext.RGBA;
        this.$outer.gl.pixelStorei(WebGLRenderingContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplied ? 1 : 0);
        this.$outer.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, type, type, WebGLRenderingContext.UNSIGNED_BYTE, bmp.canvas);
      }
       else if (Kotlin.isType(bmp, Bitmap32) || Kotlin.isType(bmp, Bitmap8)) {
        var width = bmp.width;
        var height = bmp.height;
        var rgba = Kotlin.isType(bmp, Bitmap32);
        var Bpp = rgba ? 4 : 1;
        var data = (tmp$_4 = (tmp$_0 = Kotlin.isType(tmp$ = bmp, Bitmap32) ? tmp$ : null) != null ? tmp$_0.data : null) != null ? tmp$_4 : (tmp$_3 = (tmp$_2 = Kotlin.isType(tmp$_1 = bmp, Bitmap8) ? tmp$_1 : null) != null ? tmp$_2.data : null) != null ? tmp$_3 : new Int8Array(Kotlin.imul(Kotlin.imul(width, height), Bpp));
        var rdata = new Uint8Array(data.buffer, 0, Kotlin.imul(Kotlin.imul(width, height), Bpp));
        var type_0 = rgba ? WebGLRenderingContext.RGBA : WebGLRenderingContext.LUMINANCE;
        this.$outer.gl.pixelStorei(WebGLRenderingContext.UNPACK_PREMULTIPLY_ALPHA_WEBGL, this.premultiplied ^ bmp.premult ? 1 : 0);
        this.$outer.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, type_0, width, height, 0, type_0, WebGLRenderingContext.UNSIGNED_BYTE, rdata);
      }
    this.mipmaps = false;
    if (requestMipmaps) {
      this.bind();
      this.setFilter_6taknv$(true);
      this.setWrapST_0();
      this.$outer.gl.generateMipmap(WebGLRenderingContext.TEXTURE_2D);
      this.mipmaps = true;
    }
  };
  AGWebgl$WebglTexture.prototype.bind = function () {
    this.$outer;
    this.$outer.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.tex);
  };
  AGWebgl$WebglTexture.prototype.unbind = function () {
    this.$outer;
    this.$outer.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
  };
  AGWebgl$WebglTexture.prototype.close = function () {
    this.$outer;
    this.$outer.gl.deleteTexture(this.tex);
  };
  AGWebgl$WebglTexture.prototype.setFilter_6taknv$ = function (linear) {
    var tmp$;
    if (this.mipmaps) {
      tmp$ = linear ? WebGLRenderingContext.LINEAR_MIPMAP_NEAREST : WebGLRenderingContext.NEAREST_MIPMAP_NEAREST;
    }
     else {
      tmp$ = linear ? WebGLRenderingContext.LINEAR : WebGLRenderingContext.NEAREST;
    }
    var minFilter = tmp$;
    var magFilter = linear ? WebGLRenderingContext.LINEAR : WebGLRenderingContext.NEAREST;
    this.setWrapST_0();
    this.setMinMag_0(minFilter, magFilter);
  };
  AGWebgl$WebglTexture.prototype.setWrapST_0 = function () {
    this.$outer.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_S, WebGLRenderingContext.CLAMP_TO_EDGE);
    this.$outer.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_WRAP_T, WebGLRenderingContext.CLAMP_TO_EDGE);
  };
  AGWebgl$WebglTexture.prototype.setMinMag_0 = function (min, mag) {
    this.$outer.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, min);
    this.$outer.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, mag);
  };
  AGWebgl$WebglTexture.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebglTexture',
    interfaces: [AG$Texture]
  };
  function AGWebgl$WebglBuffer($outer, kind) {
    this.$outer = $outer;
    AG$Buffer.call(this, kind);
    this.cachedVersion = -1;
    this.buffer = null;
    this.target = kind === AG$Buffer$Kind$INDEX_getInstance() ? WebGLRenderingContext.ELEMENT_ARRAY_BUFFER : WebGLRenderingContext.ARRAY_BUFFER;
  }
  AGWebgl$WebglBuffer.prototype.afterSetMem = function () {
  };
  AGWebgl$WebglBuffer.prototype.bind = function () {
    var tmp$;
    if (this.cachedVersion !== this.$outer.contextVersion) {
      this.cachedVersion = this.$outer.contextVersion;
      this.buffer = null;
      this.dirty = true;
    }
    if (this.buffer == null) {
      this.buffer = this.$outer.gl.createBuffer();
    }
    this.$outer.gl.bindBuffer(this.target, this.buffer);
    if (this.dirty) {
      var mem2 = (tmp$ = this.mem) != null ? tmp$ : Kotlin.throwNPE();
      var buffer = mem2.buffer;
      var typedArray = new Int8Array(buffer.buffer, this.memOffset, this.memLength);
      this.$outer.gl.bufferData(this.target, typedArray, WebGLRenderingContext.STATIC_DRAW);
    }
  };
  AGWebgl$WebglBuffer.prototype.close = function () {
    if (this.buffer != null) {
      this.$outer.gl.deleteBuffer(this.buffer);
    }
    this.buffer = null;
  };
  AGWebgl$WebglBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebglBuffer',
    interfaces: [AG$Buffer]
  };
  AGWebgl.prototype.createTexture = function () {
    return new AGWebgl$WebglTexture(this);
  };
  AGWebgl.prototype.createBuffer_g6fstm$ = function (kind) {
    return new AGWebgl$WebglBuffer(this, kind);
  };
  AGWebgl.prototype.getProgram_21rgaz$ = function (program) {
    var $receiver = this.programs_0;
    var key = program.name;
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var answer = new AGWebgl$WebglProgram(this, program);
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  AGWebgl.prototype.get_webglElementType_bxje6x$ = function ($receiver) {
    if (Kotlin.equals($receiver, VarType$Int1_getInstance()))
      return WebGLRenderingContext.INT;
    else if (Kotlin.equals($receiver, VarType$Float1_getInstance()) || Kotlin.equals($receiver, VarType$Float2_getInstance()) || Kotlin.equals($receiver, VarType$Float3_getInstance()) || Kotlin.equals($receiver, VarType$Float4_getInstance()))
      return WebGLRenderingContext.FLOAT;
    else if (Kotlin.equals($receiver, VarType$Mat4_getInstance()))
      return WebGLRenderingContext.FLOAT;
    else if (Kotlin.equals($receiver, VarType$Bool1_getInstance()))
      return WebGLRenderingContext.UNSIGNED_BYTE;
    else if (Kotlin.equals($receiver, VarType$Byte4_getInstance()))
      return WebGLRenderingContext.UNSIGNED_BYTE;
    else if (Kotlin.equals($receiver, VarType$TextureUnit_getInstance()))
      return WebGLRenderingContext.INT;
    else
      return Kotlin.noWhenBranchMatched();
  };
  AGWebgl.prototype.get_glDrawMode_7dvn3b$ = function ($receiver) {
    if (Kotlin.equals($receiver, AG$DrawType$TRIANGLES_getInstance()))
      return WebGLRenderingContext.TRIANGLES;
    else if (Kotlin.equals($receiver, AG$DrawType$TRIANGLE_STRIP_getInstance()))
      return WebGLRenderingContext.TRIANGLE_STRIP;
    else
      return Kotlin.noWhenBranchMatched();
  };
  AGWebgl.prototype.toGl_0 = function ($receiver) {
    if (Kotlin.equals($receiver, AG$BlendEquation$ADD_getInstance()))
      return WebGLRenderingContext.FUNC_ADD;
    else if (Kotlin.equals($receiver, AG$BlendEquation$SUBTRACT_getInstance()))
      return WebGLRenderingContext.FUNC_SUBTRACT;
    else if (Kotlin.equals($receiver, AG$BlendEquation$REVERSE_SUBTRACT_getInstance()))
      return WebGLRenderingContext.FUNC_REVERSE_SUBTRACT;
    else
      return Kotlin.noWhenBranchMatched();
  };
  AGWebgl.prototype.toGl_1 = function ($receiver) {
    if (Kotlin.equals($receiver, AG$BlendFactor$DESTINATION_ALPHA_getInstance()))
      return WebGLRenderingContext.DST_ALPHA;
    else if (Kotlin.equals($receiver, AG$BlendFactor$DESTINATION_COLOR_getInstance()))
      return WebGLRenderingContext.DST_COLOR;
    else if (Kotlin.equals($receiver, AG$BlendFactor$ONE_getInstance()))
      return WebGLRenderingContext.ONE;
    else if (Kotlin.equals($receiver, AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance()))
      return WebGLRenderingContext.ONE_MINUS_DST_ALPHA;
    else if (Kotlin.equals($receiver, AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance()))
      return WebGLRenderingContext.ONE_MINUS_DST_COLOR;
    else if (Kotlin.equals($receiver, AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance()))
      return WebGLRenderingContext.ONE_MINUS_SRC_ALPHA;
    else if (Kotlin.equals($receiver, AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance()))
      return WebGLRenderingContext.ONE_MINUS_SRC_COLOR;
    else if (Kotlin.equals($receiver, AG$BlendFactor$SOURCE_ALPHA_getInstance()))
      return WebGLRenderingContext.SRC_ALPHA;
    else if (Kotlin.equals($receiver, AG$BlendFactor$SOURCE_COLOR_getInstance()))
      return WebGLRenderingContext.SRC_COLOR;
    else if (Kotlin.equals($receiver, AG$BlendFactor$ZERO_getInstance()))
      return WebGLRenderingContext.ZERO;
    else
      return Kotlin.noWhenBranchMatched();
  };
  AGWebgl.prototype.toGl_j3v1aq$ = function ($receiver) {
    if (Kotlin.equals($receiver, AG$TriangleFace$FRONT_getInstance()))
      return WebGLRenderingContext.FRONT;
    else if (Kotlin.equals($receiver, AG$TriangleFace$BACK_getInstance()))
      return WebGLRenderingContext.BACK;
    else if (Kotlin.equals($receiver, AG$TriangleFace$FRONT_AND_BACK_getInstance()))
      return WebGLRenderingContext.FRONT_AND_BACK;
    else if (Kotlin.equals($receiver, AG$TriangleFace$NONE_getInstance()))
      return WebGLRenderingContext.FRONT;
    else
      return Kotlin.noWhenBranchMatched();
  };
  AGWebgl.prototype.toGl_d0rqip$ = function ($receiver) {
    if (Kotlin.equals($receiver, AG$CompareMode$ALWAYS_getInstance()))
      return WebGLRenderingContext.ALWAYS;
    else if (Kotlin.equals($receiver, AG$CompareMode$EQUAL_getInstance()))
      return WebGLRenderingContext.EQUAL;
    else if (Kotlin.equals($receiver, AG$CompareMode$GREATER_getInstance()))
      return WebGLRenderingContext.GREATER;
    else if (Kotlin.equals($receiver, AG$CompareMode$GREATER_EQUAL_getInstance()))
      return WebGLRenderingContext.GEQUAL;
    else if (Kotlin.equals($receiver, AG$CompareMode$LESS_getInstance()))
      return WebGLRenderingContext.LESS;
    else if (Kotlin.equals($receiver, AG$CompareMode$LESS_EQUAL_getInstance()))
      return WebGLRenderingContext.LEQUAL;
    else if (Kotlin.equals($receiver, AG$CompareMode$NEVER_getInstance()))
      return WebGLRenderingContext.NEVER;
    else if (Kotlin.equals($receiver, AG$CompareMode$NOT_EQUAL_getInstance()))
      return WebGLRenderingContext.NOTEQUAL;
    else
      return Kotlin.noWhenBranchMatched();
  };
  AGWebgl.prototype.toGl_7ptukq$ = function ($receiver) {
    if (Kotlin.equals($receiver, AG$StencilOp$DECREMENT_SATURATE_getInstance()))
      return WebGLRenderingContext.DECR;
    else if (Kotlin.equals($receiver, AG$StencilOp$DECREMENT_WRAP_getInstance()))
      return WebGLRenderingContext.DECR_WRAP;
    else if (Kotlin.equals($receiver, AG$StencilOp$INCREMENT_SATURATE_getInstance()))
      return WebGLRenderingContext.INCR;
    else if (Kotlin.equals($receiver, AG$StencilOp$INCREMENT_WRAP_getInstance()))
      return WebGLRenderingContext.INCR_WRAP;
    else if (Kotlin.equals($receiver, AG$StencilOp$INVERT_getInstance()))
      return WebGLRenderingContext.INVERT;
    else if (Kotlin.equals($receiver, AG$StencilOp$KEEP_getInstance()))
      return WebGLRenderingContext.KEEP;
    else if (Kotlin.equals($receiver, AG$StencilOp$SET_getInstance()))
      return WebGLRenderingContext.REPLACE;
    else if (Kotlin.equals($receiver, AG$StencilOp$ZERO_getInstance()))
      return WebGLRenderingContext.ZERO;
    else
      return Kotlin.noWhenBranchMatched();
  };
  AGWebgl.prototype.draw_3hoar0$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    var mustFreeIndices = indices == null;
    var tmp$_13;
    if (indices != null)
      tmp$_13 = indices;
    else {
      var tmp$_14 = this.createIndexBuffer_359eei$;
      var $receiver = until(0, vertexCount);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_15;
      tmp$_15 = $receiver.iterator();
      while (tmp$_15.hasNext()) {
        var item = tmp$_15.next();
        destination.add_11rb$(Kotlin.toShort(item));
      }
      tmp$_13 = tmp$_14.call(this, toShortArray(destination));
    }
    var aindices = tmp$_13;
    this.checkBuffers_j53ep8$(vertices, aindices);
    var glProgram = this.getProgram_21rgaz$(program);
    (Kotlin.isType(tmp$ = vertices, AGWebgl$WebglBuffer) ? tmp$ : Kotlin.throwCCE()).bind();
    (Kotlin.isType(tmp$_0 = aindices, AGWebgl$WebglBuffer) ? tmp$_0 : Kotlin.throwCCE()).bind();
    glProgram.bind();
    tmp$_1 = get_indices(vertexLayout.attributePositions);
    tmp$_2 = tmp$_1.first;
    tmp$_3 = tmp$_1.last;
    tmp$_4 = tmp$_1.step;
    for (var n = tmp$_2; n <= tmp$_3; n += tmp$_4) {
      var att = vertexLayout.attributes.get_za3lpa$(n);
      var off = vertexLayout.attributePositions.get_za3lpa$(n);
      var loc = this.gl.getAttribLocation(glProgram.program, att.name);
      var glElementType = this.get_webglElementType_bxje6x$(att.type);
      var elementCount = att.type.elementCount;
      var totalSize = vertexLayout.totalSize;
      if (loc >= 0) {
        this.gl.enableVertexAttribArray(loc);
        this.gl.vertexAttribPointer(loc, elementCount, glElementType, att.normalized, totalSize, off);
      }
    }
    var textureUnit = 0;
    tmp$_5 = uniforms.entries.iterator();
    while (tmp$_5.hasNext()) {
      var tmp$_16 = tmp$_5.next();
      var uniform = tmp$_16.key;
      var value = tmp$_16.value;
      tmp$_6 = this.glGetUniformLocation_0(glProgram, uniform.name);
      if (tmp$_6 == null) {
        continue;
      }
      var location = tmp$_6;
      tmp$_7 = uniform.type;
      if (Kotlin.equals(tmp$_7, VarType$TextureUnit_getInstance())) {
        var unit = Kotlin.isType(tmp$_8 = value, AG$TextureUnit) ? tmp$_8 : Kotlin.throwCCE();
        this.gl.activeTexture(WebGLRenderingContext.TEXTURE0 + textureUnit | 0);
        var tex = (tmp$_9 = unit.texture) == null || Kotlin.isType(tmp$_9, AGWebgl$WebglTexture) ? tmp$_9 : Kotlin.throwCCE();
        tex != null ? (tex.bindEnsuring(), Unit) : null;
        tex != null ? (tex.setFilter_6taknv$(unit.linear), Unit) : null;
        this.gl.uniform1i(location, textureUnit);
        textureUnit = textureUnit + 1 | 0;
      }
       else if (Kotlin.equals(tmp$_7, VarType$Mat4_getInstance())) {
        this.glUniformMatrix4fv_0(location, false, (Kotlin.isType(tmp$_10 = value, Matrix4) ? tmp$_10 : Kotlin.throwCCE()).data);
      }
       else if (Kotlin.equals(tmp$_7, VarType$Float1_getInstance())) {
        this.gl.uniform1f(location, Kotlin.numberToDouble(Kotlin.isNumber(tmp$_11 = value) ? tmp$_11 : Kotlin.throwCCE()));
      }
       else
        invalidOp("Don't know how to set uniform " + uniform.type);
    }
    if (blending.disabled) {
      this.gl.disable(WebGLRenderingContext.BLEND);
    }
     else {
      this.gl.enable(WebGLRenderingContext.BLEND);
      this.gl.blendEquationSeparate(this.toGl_0(blending.eqRGB), this.toGl_0(blending.eqA));
      this.gl.blendFuncSeparate(this.toGl_1(blending.srcRGB), this.toGl_1(blending.dstRGB), this.toGl_1(blending.srcA), this.toGl_1(blending.dstA));
    }
    this.gl.colorMask(colorMask.red, colorMask.green, colorMask.blue, colorMask.alpha);
    if (stencil.enabled) {
      this.gl.enable(WebGLRenderingContext.STENCIL_TEST);
      this.gl.stencilFunc(this.toGl_d0rqip$(stencil.compareMode), stencil.referenceValue, stencil.readMask);
      this.gl.stencilOp(this.toGl_7ptukq$(stencil.actionOnDepthFail), this.toGl_7ptukq$(stencil.actionOnDepthPassStencilFail), this.toGl_7ptukq$(stencil.actionOnBothPass));
      this.gl.stencilMask(stencil.writeMask);
    }
     else {
      this.gl.disable(WebGLRenderingContext.STENCIL_TEST);
      this.gl.stencilMask(0);
    }
    this.gl.drawElements(this.get_glDrawMode_7dvn3b$(type), vertexCount, WebGLRenderingContext.UNSIGNED_SHORT, offset);
    this.gl.activeTexture(WebGLRenderingContext.TEXTURE0);
    tmp$_12 = vertexLayout.attributes.iterator();
    while (tmp$_12.hasNext()) {
      var att_0 = tmp$_12.next();
      var loc_0 = this.gl.getAttribLocation(glProgram.program, att_0.name);
      if (loc_0 >= 0) {
        this.gl.disableVertexAttribArray(loc_0);
      }
    }
    if (mustFreeIndices)
      aindices.close();
  };
  AGWebgl.prototype.glUniformMatrix4fv_0 = function (location, b, values) {
    var tmp$;
    this.gl.uniformMatrix4fv(location, b, Kotlin.isType(tmp$ = values, Float32Array) ? tmp$ : Kotlin.throwCCE());
  };
  AGWebgl.prototype.glGetUniformLocation_0 = function (glProgram, name) {
    return this.gl.getUniformLocation(glProgram.program, name);
  };
  AGWebgl.prototype.disposeTemporalPerFrameStuff = function () {
    var tmp$;
    tmp$ = this.tempTextures.iterator();
    while (tmp$.hasNext()) {
      var tt = tmp$.next();
      tt.close();
    }
    this.tempTextures.clear();
  };
  AGWebgl.prototype.flipInternal = function () {
  };
  function AGWebgl$WebglRenderBuffer($outer) {
    this.$outer = $outer;
    AG$RenderBuffer.call(this, this.$outer);
    this.cachedVersion = -1;
    this.renderbuffer = null;
    this.framebuffer = null;
    this.oldViewport = new Int32Array(4);
  }
  Object.defineProperty(AGWebgl$WebglRenderBuffer.prototype, 'wtex', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.tex, AGWebgl$WebglTexture) ? tmp$ : Kotlin.throwCCE();
    }
  });
  AGWebgl$WebglRenderBuffer.prototype.start_vux9f0$ = function (width, height) {
    var tmp$;
    if (this.cachedVersion !== this.$outer.contextVersion) {
      this.cachedVersion = this.$outer.contextVersion;
      this.renderbuffer = this.$outer.gl.createRenderbuffer();
      this.framebuffer = this.$outer.gl.createFramebuffer();
    }
    this.oldViewport = Kotlin.isIntArray(tmp$ = this.$outer.gl.getParameter(WebGLRenderingContext.VIEWPORT)) ? tmp$ : Kotlin.throwCCE();
    this.$outer.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, this.wtex.tex);
    this.$outer.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MAG_FILTER, WebGLRenderingContext.LINEAR);
    this.$outer.gl.texParameteri(WebGLRenderingContext.TEXTURE_2D, WebGLRenderingContext.TEXTURE_MIN_FILTER, WebGLRenderingContext.LINEAR);
    this.$outer.gl.texImage2D(WebGLRenderingContext.TEXTURE_2D, 0, WebGLRenderingContext.RGBA, width, height, 0, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, null);
    this.$outer.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
    this.$outer.gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, this.renderbuffer);
    this.$outer.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, this.framebuffer);
    this.$outer.gl.framebufferTexture2D(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.COLOR_ATTACHMENT0, WebGLRenderingContext.TEXTURE_2D, this.wtex.tex, 0);
    this.$outer.gl.renderbufferStorage(WebGLRenderingContext.RENDERBUFFER, WebGLRenderingContext.DEPTH_COMPONENT16, width, height);
    this.$outer.gl.framebufferRenderbuffer(WebGLRenderingContext.FRAMEBUFFER, WebGLRenderingContext.DEPTH_ATTACHMENT, WebGLRenderingContext.RENDERBUFFER, this.renderbuffer);
    this.$outer.gl.viewport(0, 0, width, height);
  };
  AGWebgl$WebglRenderBuffer.prototype.end = function () {
    this.$outer.gl.flush();
    this.$outer.gl.bindTexture(WebGLRenderingContext.TEXTURE_2D, null);
    this.$outer.gl.bindRenderbuffer(WebGLRenderingContext.RENDERBUFFER, null);
    this.$outer.gl.bindFramebuffer(WebGLRenderingContext.FRAMEBUFFER, null);
    this.$outer.gl.viewport(this.oldViewport[0], this.oldViewport[1], this.oldViewport[2], this.oldViewport[3]);
  };
  AGWebgl$WebglRenderBuffer.prototype.readBitmap_59u9qz$ = function (bmp) {
    var tmp$;
    var ibuffer = new Uint8Array(bmp.area * 4 | 0);
    this.$outer.gl.readPixels(0, 0, bmp.width, bmp.height, WebGLRenderingContext.RGBA, WebGLRenderingContext.UNSIGNED_BYTE, ibuffer);
    tmp$ = bmp.area;
    for (var n = 0; n < tmp$; n++) {
      bmp.data[n] = color.RGBA.rgbaToBgra_za3lpa$(ibuffer[n]);
    }
  };
  AGWebgl$WebglRenderBuffer.prototype.close = function () {
    this.$outer.gl.deleteFramebuffer(this.framebuffer);
    this.$outer.gl.deleteRenderbuffer(this.renderbuffer);
  };
  AGWebgl$WebglRenderBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'WebglRenderBuffer',
    interfaces: [AG$RenderBuffer]
  };
  AGWebgl.prototype.createRenderBuffer = function () {
    return new AGWebgl$WebglRenderBuffer(this);
  };
  function AGWebgl_init$lambda(e) {
    e.preventDefault();
    return Unit;
  }
  function AGWebgl_init$lambda_0(this$AGWebgl) {
    return function (e) {
      var tmp$;
      tmp$ = this$AGWebgl.contextVersion;
      this$AGWebgl.contextVersion = tmp$ + 1 | 0;
      return Unit;
    };
  }
  AGWebgl.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AGWebgl',
    interfaces: [AG]
  };
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korag = package$soywiz.korag || (package$soywiz.korag = {});
  Object.defineProperty(package$korag, 'defaultFactory', {
    get: get_defaultFactory
  });
  Object.defineProperty(package$korag, 'agFactory', {
    get: get_agFactory
  });
  package$korag.AGFactory = AGFactory;
  AGInput.MouseEvent = AGInput$MouseEvent;
  AGInput.KeyEvent = AGInput$KeyEvent;
  AGInput.GamepadEvent = AGInput$GamepadEvent;
  AGInput.TouchEvent = AGInput$TouchEvent;
  package$korag.AGInput = AGInput;
  package$korag.AGContainer = AGContainer;
  package$korag.AGWindow = AGWindow;
  Object.defineProperty(AG$BlendEquation, 'ADD', {
    get: AG$BlendEquation$ADD_getInstance
  });
  Object.defineProperty(AG$BlendEquation, 'SUBTRACT', {
    get: AG$BlendEquation$SUBTRACT_getInstance
  });
  Object.defineProperty(AG$BlendEquation, 'REVERSE_SUBTRACT', {
    get: AG$BlendEquation$REVERSE_SUBTRACT_getInstance
  });
  AG.BlendEquation = AG$BlendEquation;
  Object.defineProperty(AG$BlendFactor, 'DESTINATION_ALPHA', {
    get: AG$BlendFactor$DESTINATION_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'DESTINATION_COLOR', {
    get: AG$BlendFactor$DESTINATION_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE', {
    get: AG$BlendFactor$ONE_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_DESTINATION_ALPHA', {
    get: AG$BlendFactor$ONE_MINUS_DESTINATION_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_DESTINATION_COLOR', {
    get: AG$BlendFactor$ONE_MINUS_DESTINATION_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_SOURCE_ALPHA', {
    get: AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ONE_MINUS_SOURCE_COLOR', {
    get: AG$BlendFactor$ONE_MINUS_SOURCE_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'SOURCE_ALPHA', {
    get: AG$BlendFactor$SOURCE_ALPHA_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'SOURCE_COLOR', {
    get: AG$BlendFactor$SOURCE_COLOR_getInstance
  });
  Object.defineProperty(AG$BlendFactor, 'ZERO', {
    get: AG$BlendFactor$ZERO_getInstance
  });
  AG.BlendFactor = AG$BlendFactor;
  Object.defineProperty(AG$Blending, 'Companion', {
    get: AG$Blending$Companion_getInstance
  });
  AG.Blending_init_6oerul$ = AG$AG$Blending_init;
  AG.Blending = AG$Blending;
  AG.BitmapSourceBase = AG$BitmapSourceBase;
  Object.defineProperty(AG$SyncBitmapSource, 'Companion', {
    get: AG$SyncBitmapSource$Companion_getInstance
  });
  AG.SyncBitmapSource = AG$SyncBitmapSource;
  Object.defineProperty(AG$AsyncBitmapSource, 'Companion', {
    get: AG$AsyncBitmapSource$Companion_getInstance
  });
  AG.AsyncBitmapSource = AG$AsyncBitmapSource;
  Object.defineProperty(AG$Texture$Kind, 'RGBA', {
    get: AG$Texture$Kind$RGBA_getInstance
  });
  Object.defineProperty(AG$Texture$Kind, 'LUMINANCE', {
    get: AG$Texture$Kind$LUMINANCE_getInstance
  });
  AG$Texture.Kind = AG$Texture$Kind;
  AG.Texture = AG$Texture;
  AG.TextureUnit = AG$TextureUnit;
  Object.defineProperty(AG$Buffer$Kind, 'INDEX', {
    get: AG$Buffer$Kind$INDEX_getInstance
  });
  Object.defineProperty(AG$Buffer$Kind, 'VERTEX', {
    get: AG$Buffer$Kind$VERTEX_getInstance
  });
  AG$Buffer.Kind = AG$Buffer$Kind;
  AG.Buffer = AG$Buffer;
  Object.defineProperty(AG$DrawType, 'TRIANGLES', {
    get: AG$DrawType$TRIANGLES_getInstance
  });
  Object.defineProperty(AG$DrawType, 'TRIANGLE_STRIP', {
    get: AG$DrawType$TRIANGLE_STRIP_getInstance
  });
  AG.DrawType = AG$DrawType;
  Object.defineProperty(AG$StencilOp, 'DECREMENT_SATURATE', {
    get: AG$StencilOp$DECREMENT_SATURATE_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'DECREMENT_WRAP', {
    get: AG$StencilOp$DECREMENT_WRAP_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'INCREMENT_SATURATE', {
    get: AG$StencilOp$INCREMENT_SATURATE_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'INCREMENT_WRAP', {
    get: AG$StencilOp$INCREMENT_WRAP_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'INVERT', {
    get: AG$StencilOp$INVERT_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'KEEP', {
    get: AG$StencilOp$KEEP_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'SET', {
    get: AG$StencilOp$SET_getInstance
  });
  Object.defineProperty(AG$StencilOp, 'ZERO', {
    get: AG$StencilOp$ZERO_getInstance
  });
  AG.StencilOp = AG$StencilOp;
  Object.defineProperty(AG$TriangleFace, 'FRONT', {
    get: AG$TriangleFace$FRONT_getInstance
  });
  Object.defineProperty(AG$TriangleFace, 'BACK', {
    get: AG$TriangleFace$BACK_getInstance
  });
  Object.defineProperty(AG$TriangleFace, 'FRONT_AND_BACK', {
    get: AG$TriangleFace$FRONT_AND_BACK_getInstance
  });
  Object.defineProperty(AG$TriangleFace, 'NONE', {
    get: AG$TriangleFace$NONE_getInstance
  });
  AG.TriangleFace = AG$TriangleFace;
  Object.defineProperty(AG$CompareMode, 'ALWAYS', {
    get: AG$CompareMode$ALWAYS_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'EQUAL', {
    get: AG$CompareMode$EQUAL_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'GREATER', {
    get: AG$CompareMode$GREATER_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'GREATER_EQUAL', {
    get: AG$CompareMode$GREATER_EQUAL_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'LESS', {
    get: AG$CompareMode$LESS_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'LESS_EQUAL', {
    get: AG$CompareMode$LESS_EQUAL_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'NEVER', {
    get: AG$CompareMode$NEVER_getInstance
  });
  Object.defineProperty(AG$CompareMode, 'NOT_EQUAL', {
    get: AG$CompareMode$NOT_EQUAL_getInstance
  });
  AG.CompareMode = AG$CompareMode;
  AG.ColorMaskState = AG$ColorMaskState;
  AG.StencilState = AG$StencilState;
  AG.RenderBuffer = AG$RenderBuffer;
  AG.RenderTexture = AG$RenderTexture;
  $$importsForInline$$['korag-js'] = _;
  $$importsForInline$$['korma-js'] = $module$korma_js;
  package$korag.AG = AG;
  Object.defineProperty(package$korag, 'DefaultShaders', {
    get: DefaultShaders_getInstance
  });
  var package$geom = package$korag.geom || (package$korag.geom = {});
  package$geom.Matrix2D = Matrix2D;
  package$geom.Matrix3 = Matrix3;
  Object.defineProperty(Matrix4, 'Companion', {
    get: Matrix4$Companion_getInstance
  });
  package$geom.Matrix4 = Matrix4;
  package$geom.Point2D = Point2D;
  LogAG.LogTexture = LogAG$LogTexture;
  LogAG.LogBuffer = LogAG$LogBuffer;
  LogAG.LogRenderBuffer = LogAG$LogRenderBuffer;
  var package$log = package$korag.log || (package$korag.log = {});
  package$log.LogAG = LogAG;
  var package$shader = package$korag.shader || (package$korag.shader = {});
  var package$gl = package$shader.gl || (package$shader.gl = {});
  package$gl.toGlSlString_chci2g$ = toGlSlString;
  package$gl.toGlSlString_jdx5zw$ = toGlSlString_0;
  package$gl.GlslGenerator = GlslGenerator;
  package$gl.toGlSl_twd9hr$ = toGlSl;
  Object.defineProperty(VarType, 'TextureUnit', {
    get: VarType$TextureUnit_getInstance
  });
  Object.defineProperty(VarType, 'Bool1', {
    get: VarType$Bool1_getInstance
  });
  Object.defineProperty(VarType, 'Int1', {
    get: VarType$Int1_getInstance
  });
  Object.defineProperty(VarType, 'Float1', {
    get: VarType$Float1_getInstance
  });
  Object.defineProperty(VarType, 'Float2', {
    get: VarType$Float2_getInstance
  });
  Object.defineProperty(VarType, 'Float3', {
    get: VarType$Float3_getInstance
  });
  Object.defineProperty(VarType, 'Float4', {
    get: VarType$Float4_getInstance
  });
  Object.defineProperty(VarType, 'Mat4', {
    get: VarType$Mat4_getInstance
  });
  Object.defineProperty(VarType, 'Byte4', {
    get: VarType$Byte4_getInstance
  });
  package$shader.VarType = VarType;
  Object.defineProperty(ShaderType, 'VERTEX', {
    get: ShaderType$VERTEX_getInstance
  });
  Object.defineProperty(ShaderType, 'FRAGMENT', {
    get: ShaderType$FRAGMENT_getInstance
  });
  package$shader.ShaderType = ShaderType;
  package$shader.Operand = Operand;
  package$shader.Variable = Variable;
  package$shader.Attribute = Attribute;
  package$shader.Varying = Varying;
  package$shader.Uniform = Uniform;
  package$shader.Temp = Temp;
  Object.defineProperty(package$shader, 'Output', {
    get: Output_getInstance
  });
  Program.Binop = Program$Binop;
  Program.IntLiteral = Program$IntLiteral;
  Program.FloatLiteral = Program$FloatLiteral;
  Program.BoolLiteral = Program$BoolLiteral;
  Program.Vector = Program$Vector;
  Program.Swizzle = Program$Swizzle;
  Program.Func = Program$Func;
  Program$Stm.Stms = Program$Stm$Stms;
  Program$Stm.Set = Program$Stm$Set;
  Program$Stm.Discard = Program$Stm$Discard;
  Program$Stm.If = Program$Stm$If;
  Program.Stm = Program$Stm;
  Program.Builder = Program$Builder;
  Program.Visitor = Program$Visitor;
  package$shader.Program = Program;
  package$shader.Shader = Shader;
  package$shader.VertexShader = VertexShader;
  package$shader.FragmentShader = FragmentShader;
  package$shader.VertexShader_8zzl3$ = VertexShader_0;
  package$shader.FragmentShader_8zzl3$ = FragmentShader_0;
  package$shader.VertexLayout_init_f1u95s$ = VertexLayout_init;
  package$shader.VertexLayout = VertexLayout;
  var package$software = package$korag.software || (package$korag.software = {});
  package$software.AGFactorySoftware = AGFactorySoftware;
  package$software.AGSoftware = AGSoftware;
  Object.defineProperty(package$korag, 'AGFactoryFactory', {
    get: AGFactoryFactory_getInstance
  });
  Object.defineProperty(package$korag, 'AGFactoryWebgl', {
    get: AGFactoryWebgl_getInstance
  });
  package$korag.jsEmptyObject = jsEmptyObject;
  package$korag.jsObject_pyyo18$ = jsObject;
  $$importsForInline$$['korio-js'] = $module$korio_js;
  AGWebgl.WebglProgram = AGWebgl$WebglProgram;
  AGWebgl.WebglTexture = AGWebgl$WebglTexture;
  AGWebgl.WebglBuffer = AGWebgl$WebglBuffer;
  AGWebgl.WebglRenderBuffer = AGWebgl$WebglRenderBuffer;
  package$korag.AGWebgl = AGWebgl;
  defaultFactory = lazy(defaultFactory$lambda);
  agFactory = lazy(agFactory$lambda);
  Kotlin.defineModule('korag-js', _);
  return _;
}));
