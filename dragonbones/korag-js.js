(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kmem-js', 'korio-js', 'korim-js', 'kds-js', 'korma-js', 'kotlinx-coroutines-core', 'klogger-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kmem-js'), require('korio-js'), require('korim-js'), require('kds-js'), require('korma-js'), require('kotlinx-coroutines-core'), require('klogger-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korag-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'korag-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korag-js'.");
    }
    if (typeof this['korim-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'korag-js'.");
    }
    if (typeof this['kds-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'kds-js' was not found. Please, check whether 'kds-js' is loaded prior to 'korag-js'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korag-js'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korag-js'.");
    }
    if (typeof this['klogger-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-js'. Its dependency 'klogger-js' was not found. Please, check whether 'klogger-js' is loaded prior to 'korag-js'.");
    }
    root['korag-js'] = factory(typeof this['korag-js'] === 'undefined' ? {} : this['korag-js'], kotlin, this['kmem-js'], this['korio-js'], this['korim-js'], this['kds-js'], this['korma-js'], this['kotlinx-coroutines-core'], this['klogger-js']);
  }
}(this, function (_, Kotlin, $module$kmem_js, $module$korio_js, $module$korim_js, $module$kds_js, $module$korma_js, $module$kotlinx_coroutines_core, $module$klogger_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var arraycopy = $module$kmem_js.com.soywiz.kmem.arraycopy_lvhpry$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var coroutines = Kotlin.kotlin.coroutines;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var asyncImmediately = $module$korio_js.com.soywiz.korio.async.asyncImmediately_zctz99$;
  var Closeable = $module$korio_js.com.soywiz.korio.lang.Closeable;
  var KmlNativeBuffer_init = $module$kmem_js.com.soywiz.kmem.KmlNativeBuffer_init_za3lpa$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var color = $module$korim_js.com.soywiz.korim.color;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var Extra = $module$kds_js.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_js.com.soywiz.kds.Extra.Mixin;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Signal = $module$korio_js.com.soywiz.korio.async.Signal;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var Pool_init = $module$kds_js.com.soywiz.kds.Pool_init_rz0iom$;
  var Matrix4 = $module$korma_js.com.soywiz.korma.Matrix4;
  var Logger = $module$klogger_js.com.soywiz.klogger.Logger;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var toString = Kotlin.toString;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var throwCCE = Kotlin.throwCCE;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var Any = Object;
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var contains = Kotlin.kotlin.text.contains_sgbm27$;
  var error = $module$korio_js.com.soywiz.korio.error;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var plus = Kotlin.kotlin.collections.plus_khz7k3$;
  var nextAlignedTo = $module$kmem_js.com.soywiz.kmem.nextAlignedTo_dqglrj$;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var Bitmap32 = $module$korim_js.com.soywiz.korim.bitmap.Bitmap32;
  AG$BlendEquation.prototype = Object.create(Enum.prototype);
  AG$BlendEquation.prototype.constructor = AG$BlendEquation;
  AG$BlendFactor.prototype = Object.create(Enum.prototype);
  AG$BlendFactor.prototype.constructor = AG$BlendFactor;
  AG$TextureKind.prototype = Object.create(Enum.prototype);
  AG$TextureKind.prototype.constructor = AG$TextureKind;
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
  VarKind.prototype = Object.create(Enum.prototype);
  VarKind.prototype.constructor = VarKind;
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
  function AGFactory() {
  }
  AGFactory.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AGFactory',
    interfaces: []
  };
  function AGContainer() {
  }
  AGContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AGContainer',
    interfaces: []
  };
  function AGWindow() {
  }
  AGWindow.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGWindow',
    interfaces: [AGContainer]
  };
  var numberToDouble = Kotlin.numberToDouble;
  var Size_init = $module$korma_js.com.soywiz.korma.geom.Size;
  function AG() {
    this.$delegate_y4f8iy$_0 = new Extra$Mixin();
    this.contextVersion = 0;
    this.maxTextureSize_6yxley$_0 = new Size_init(numberToDouble(2048), numberToDouble(2048));
    this.devicePixelRatio_xydx2f$_0 = 1.0;
    this.onReadyDeferred_qesokv$_0 = CompletableDeferred(Job());
    this.onReady = this.onReadyDeferred_qesokv$_0;
    this.onRender = new Signal();
    this.onResized = new Signal();
    this.viewport = new Int32Array([0, 0, 640, 480]);
    this.lastTextureId = 0;
    this.createdTextureCount = 0;
    this.deletedTextureCount = 0;
    this.dummyTexture_s1lppr$_0 = lazy(AG$dummyTexture$lambda(this));
    this.dummyRenderState_xrscgh$_0 = new AG$RenderState();
    this.dummyStencilState_6gllmd$_0 = new AG$StencilState();
    this.dummyColorMaskState_s1o3tk$_0 = new AG$ColorMaskState();
    this.frameRenderBuffers = LinkedHashSet_init();
    this.renderBuffers = Pool_init(void 0, AG$renderBuffers$lambda(this));
    this.renderingToTexture = false;
    this.drawBmpMat_7r0q0t$_0 = (new Matrix4()).setToOrtho_w8lrqs$(0.0, 0.0, 1.0, 1.0, 0.0, 1.0);
    this.drawBmpVB_dhxfvp$_0 = null;
    this.drawBmpIB_dhx68o$_0 = null;
    this.drawBmpTex_7qw61w$_0 = null;
    this.drawBmpTexUnit_vcjhvc$_0 = null;
    this.drawBmp_VERTICES_uziqgb$_0 = new Float32Array([0.0, 0.0, 0.0, 0.0, Kotlin.floatFromBits(-1), 1.0, 0.0, 1.0, 0.0, Kotlin.floatFromBits(-1), 0.0, 1.0, 0.0, 1.0, Kotlin.floatFromBits(-1), 1.0, 1.0, 1.0, 1.0, Kotlin.floatFromBits(-1)]);
    this.drawBmp_INDICES_7t5mev$_0 = new Int16Array([0, 1, 2, 1, 2, 3]);
    this.drawBmp_UNIFORMS_vfpwd7$_0 = null;
    this.checkErrors = false;
  }
  Object.defineProperty(AG.prototype, 'maxTextureSize', {
    get: function () {
      return this.maxTextureSize_6yxley$_0;
    }
  });
  Object.defineProperty(AG.prototype, 'devicePixelRatio', {
    get: function () {
      return this.devicePixelRatio_xydx2f$_0;
    }
  });
  AG.prototype.ready = function () {
    this.onReadyDeferred_qesokv$_0.complete_11rb$(this);
  };
  AG.prototype.offscreenRendering_o14v8n$ = function (callback) {
    callback();
  };
  AG.prototype.repaint = function () {
  };
  AG.prototype.resized = function () {
    this.onResized.invoke_11rb$(Unit);
  };
  AG.prototype.dispose = function () {
  };
  Object.defineProperty(AG.prototype, 'backWidth', {
    get: function () {
      return this.viewport[2];
    }
  });
  Object.defineProperty(AG.prototype, 'backHeight', {
    get: function () {
      return this.viewport[3];
    }
  });
  AG.prototype.getViewport_q5rwfd$ = function (out) {
    arraycopy(this.viewport, 0, out, 0, 4);
    return out;
  };
  AG.prototype.setViewport_tjonv8$ = function (x, y, width, height) {
    this.viewport[0] = x;
    this.viewport[1] = y;
    this.viewport[2] = width;
    this.viewport[3] = height;
  };
  AG.prototype.setViewport_q5rwfd$ = function (v) {
    this.setViewport_tjonv8$(v[0], v[1], v[2], v[3]);
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korag.AG.BlendEquation.' + name);
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korag.AG.BlendFactor.' + name);
    }
  }
  AG$BlendFactor.valueOf_61zpoe$ = AG$BlendFactor$valueOf;
  function AG$Scissor(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  Object.defineProperty(AG$Scissor.prototype, 'top', {
    get: function () {
      return this.y;
    }
  });
  Object.defineProperty(AG$Scissor.prototype, 'left', {
    get: function () {
      return this.x;
    }
  });
  Object.defineProperty(AG$Scissor.prototype, 'right', {
    get: function () {
      return this.x + this.width | 0;
    }
  });
  Object.defineProperty(AG$Scissor.prototype, 'bottom', {
    get: function () {
      return this.y + this.height | 0;
    }
  });
  AG$Scissor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scissor',
    interfaces: []
  };
  AG$Scissor.prototype.component1 = function () {
    return this.x;
  };
  AG$Scissor.prototype.component2 = function () {
    return this.y;
  };
  AG$Scissor.prototype.component3 = function () {
    return this.width;
  };
  AG$Scissor.prototype.component4 = function () {
    return this.height;
  };
  AG$Scissor.prototype.copy_tjonv8$ = function (x, y, width, height) {
    return new AG$Scissor(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  AG$Scissor.prototype.toString = function () {
    return 'Scissor(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  AG$Scissor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  AG$Scissor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
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
    this.NONE = new AG$Blending(AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ZERO_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ZERO_getInstance());
    this.NORMAL = new AG$Blending(AG$BlendFactor$SOURCE_ALPHA_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance(), AG$BlendFactor$ONE_getInstance(), AG$BlendFactor$ONE_MINUS_SOURCE_ALPHA_getInstance());
  }
  AG$Blending$Companion.$metadata$ = {
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
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
    kind: Kind_INTERFACE,
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
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
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
    this.NULL = new AG$AsyncBitmapSource(coroutines.EmptyCoroutineContext, true, 0, 0, AG$AsyncBitmapSource$Companion$NULL$lambda);
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
  AG$AsyncBitmapSource$Companion.$metadata$ = {
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
    simpleName: 'AsyncBitmapSource',
    interfaces: [AG$BitmapSourceBase]
  };
  function AG$TextureKind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AG$TextureKind_initFields() {
    AG$TextureKind_initFields = function () {
    };
    AG$TextureKind$RGBA_instance = new AG$TextureKind('RGBA', 0);
    AG$TextureKind$LUMINANCE_instance = new AG$TextureKind('LUMINANCE', 1);
  }
  var AG$TextureKind$RGBA_instance;
  function AG$TextureKind$RGBA_getInstance() {
    AG$TextureKind_initFields();
    return AG$TextureKind$RGBA_instance;
  }
  var AG$TextureKind$LUMINANCE_instance;
  function AG$TextureKind$LUMINANCE_getInstance() {
    AG$TextureKind_initFields();
    return AG$TextureKind$LUMINANCE_instance;
  }
  AG$TextureKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureKind',
    interfaces: [Enum]
  };
  function AG$TextureKind$values() {
    return [AG$TextureKind$RGBA_getInstance(), AG$TextureKind$LUMINANCE_getInstance()];
  }
  AG$TextureKind.values = AG$TextureKind$values;
  function AG$TextureKind$valueOf(name) {
    switch (name) {
      case 'RGBA':
        return AG$TextureKind$RGBA_getInstance();
      case 'LUMINANCE':
        return AG$TextureKind$LUMINANCE_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.TextureKind.' + name);
    }
  }
  AG$TextureKind.valueOf_61zpoe$ = AG$TextureKind$valueOf;
  function AG$Texture($outer) {
    this.$outer = $outer;
    this.premultiplied_ra8tjj$_0 = true;
    this.requestMipmaps = false;
    this.mipmaps_fmt7mu$_0 = false;
    this.source = AG$SyncBitmapSource$Companion_getInstance().NULL;
    this.uploaded_bjht0x$_0 = false;
    this.generating_dlstkz$_0 = false;
    this.generated_6fnrcm$_0 = false;
    this.tempBitmap_rlmwj0$_0 = null;
    this.ready_9e90wu$_0 = false;
    var tmp$, tmp$_0;
    this.texId = (tmp$ = this.$outer.lastTextureId, this.$outer.lastTextureId = tmp$ + 1 | 0, tmp$);
    tmp$_0 = this.$outer.createdTextureCount;
    this.$outer.createdTextureCount = tmp$_0 + 1 | 0;
    this.alreadyClosed_j6qvi7$_0 = false;
  }
  Object.defineProperty(AG$Texture.prototype, 'premultiplied', {
    get: function () {
      return this.premultiplied_ra8tjj$_0;
    }
  });
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
  AG$Texture.prototype.upload_2ug3a3$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.upload_nn58bg$(bmp != null ? bmp.extract() : null, mipmaps);
  };
  AG$Texture.prototype.upload_fh4hjo$ = function (source, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    this.source = source;
    this.uploadedSource();
    this.invalidate();
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$this$Texture.tempBitmap_rlmwj0$_0 = this.result_0;
            return this.local$this$Texture.generated_6fnrcm$_0 = true, Unit;
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
          asyncImmediately(source.coroutineContext, void 0, AG$Texture$bindEnsuring$lambda(source, this));
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
  AG$Texture.prototype.close = function () {
    var tmp$;
    if (!this.alreadyClosed_j6qvi7$_0) {
      this.alreadyClosed_j6qvi7$_0 = true;
      this.source = AG$SyncBitmapSource$Companion_getInstance().NULL;
      this.tempBitmap_rlmwj0$_0 = null;
      tmp$ = this.$outer.deletedTextureCount;
      this.$outer.deletedTextureCount = tmp$ + 1 | 0;
    }
  };
  AG$Texture.prototype.printTexStats_3r8gow$_0 = function () {
  };
  AG$Texture.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korag.AG.Buffer.Kind.' + name);
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
    this.mem = KmlNativeBuffer_init(length);
    ensureNotNull(this.mem).setAlignedArrayInt8_3fge6q$(0, data, offset, length);
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
    this.mem = KmlNativeBuffer_init(length * 4 | 0);
    ensureNotNull(this.mem).setAlignedArrayFloat32_3hvitc$(0, data, offset, length);
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
    this.mem = KmlNativeBuffer_init(length * 4 | 0);
    ensureNotNull(this.mem).setAlignedArrayInt32_coga0j$(0, data, offset, length);
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
    this.mem = KmlNativeBuffer_init(length * 2 | 0);
    ensureNotNull(this.mem).setAlignedArrayInt16_r43jz4$(0, data, offset, length);
    this.memOffset = 0;
    this.memLength = length * 2 | 0;
    this.dirty = true;
    this.afterSetMem();
    return this;
  };
  AG$Buffer.prototype.upload_hs2a5p$ = function (data, offset, length) {
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
    kind: Kind_CLASS,
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
    AG$DrawType$POINTS_instance = new AG$DrawType('POINTS', 0);
    AG$DrawType$LINE_STRIP_instance = new AG$DrawType('LINE_STRIP', 1);
    AG$DrawType$LINE_LOOP_instance = new AG$DrawType('LINE_LOOP', 2);
    AG$DrawType$LINES_instance = new AG$DrawType('LINES', 3);
    AG$DrawType$TRIANGLES_instance = new AG$DrawType('TRIANGLES', 4);
    AG$DrawType$TRIANGLE_STRIP_instance = new AG$DrawType('TRIANGLE_STRIP', 5);
    AG$DrawType$TRIANGLE_FAN_instance = new AG$DrawType('TRIANGLE_FAN', 6);
  }
  var AG$DrawType$POINTS_instance;
  function AG$DrawType$POINTS_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$POINTS_instance;
  }
  var AG$DrawType$LINE_STRIP_instance;
  function AG$DrawType$LINE_STRIP_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$LINE_STRIP_instance;
  }
  var AG$DrawType$LINE_LOOP_instance;
  function AG$DrawType$LINE_LOOP_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$LINE_LOOP_instance;
  }
  var AG$DrawType$LINES_instance;
  function AG$DrawType$LINES_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$LINES_instance;
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
  var AG$DrawType$TRIANGLE_FAN_instance;
  function AG$DrawType$TRIANGLE_FAN_getInstance() {
    AG$DrawType_initFields();
    return AG$DrawType$TRIANGLE_FAN_instance;
  }
  AG$DrawType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DrawType',
    interfaces: [Enum]
  };
  function AG$DrawType$values() {
    return [AG$DrawType$POINTS_getInstance(), AG$DrawType$LINE_STRIP_getInstance(), AG$DrawType$LINE_LOOP_getInstance(), AG$DrawType$LINES_getInstance(), AG$DrawType$TRIANGLES_getInstance(), AG$DrawType$TRIANGLE_STRIP_getInstance(), AG$DrawType$TRIANGLE_FAN_getInstance()];
  }
  AG$DrawType.values = AG$DrawType$values;
  function AG$DrawType$valueOf(name) {
    switch (name) {
      case 'POINTS':
        return AG$DrawType$POINTS_getInstance();
      case 'LINE_STRIP':
        return AG$DrawType$LINE_STRIP_getInstance();
      case 'LINE_LOOP':
        return AG$DrawType$LINE_LOOP_getInstance();
      case 'LINES':
        return AG$DrawType$LINES_getInstance();
      case 'TRIANGLES':
        return AG$DrawType$TRIANGLES_getInstance();
      case 'TRIANGLE_STRIP':
        return AG$DrawType$TRIANGLE_STRIP_getInstance();
      case 'TRIANGLE_FAN':
        return AG$DrawType$TRIANGLE_FAN_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.AG.DrawType.' + name);
    }
  }
  AG$DrawType.valueOf_61zpoe$ = AG$DrawType$valueOf;
  Object.defineProperty(AG.prototype, 'dummyTexture', {
    get: function () {
      return this.dummyTexture_s1lppr$_0.value;
    }
  });
  AG.prototype.createTexture = function () {
    return this.createTexture_6taknv$(true);
  };
  AG.prototype.createTexture_lg0pjf$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.createTexture().upload_nn58bg$(bmp, mipmaps);
  };
  AG.prototype.createTexture_ejmmxi$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return this.createTexture().upload_2ug3a3$(bmp, mipmaps);
  };
  AG.prototype.createTexture_mj3tyc$ = function (bmp, mipmaps, premultiplied) {
    if (mipmaps === void 0)
      mipmaps = false;
    if (premultiplied === void 0)
      premultiplied = true;
    return this.createTexture_6taknv$(premultiplied).upload_nn58bg$(bmp, mipmaps);
  };
  AG.prototype.createTexture_6taknv$ = function (premultiplied) {
    return new AG$Texture(this);
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
  AG.prototype.createIndexBuffer_hs2a5p$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.size - offset | 0;
    var $receiver = this.createIndexBuffer();
    $receiver.upload_hs2a5p$(data, offset, length);
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
  AG.prototype.createVertexBuffer_hs2a5p$ = function (data, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = data.size - offset | 0;
    var $receiver = this.createVertexBuffer();
    $receiver.upload_hs2a5p$(data, offset, length);
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korag.AG.StencilOp.' + name);
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korag.AG.TriangleFace.' + name);
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korag.AG.CompareMode.' + name);
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
    kind: Kind_CLASS,
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
  function AG$RenderState(depthFunc, depthMask, depthNear, depthFar, lineWidth) {
    if (depthFunc === void 0)
      depthFunc = AG$CompareMode$ALWAYS_getInstance();
    if (depthMask === void 0)
      depthMask = true;
    if (depthNear === void 0)
      depthNear = 0.0;
    if (depthFar === void 0)
      depthFar = 1.0;
    if (lineWidth === void 0)
      lineWidth = 1.0;
    this.depthFunc = depthFunc;
    this.depthMask = depthMask;
    this.depthNear = depthNear;
    this.depthFar = depthFar;
    this.lineWidth = lineWidth;
  }
  AG$RenderState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderState',
    interfaces: []
  };
  AG$RenderState.prototype.component1 = function () {
    return this.depthFunc;
  };
  AG$RenderState.prototype.component2 = function () {
    return this.depthMask;
  };
  AG$RenderState.prototype.component3 = function () {
    return this.depthNear;
  };
  AG$RenderState.prototype.component4 = function () {
    return this.depthFar;
  };
  AG$RenderState.prototype.component5 = function () {
    return this.lineWidth;
  };
  AG$RenderState.prototype.copy_jsr1pg$ = function (depthFunc, depthMask, depthNear, depthFar, lineWidth) {
    return new AG$RenderState(depthFunc === void 0 ? this.depthFunc : depthFunc, depthMask === void 0 ? this.depthMask : depthMask, depthNear === void 0 ? this.depthNear : depthNear, depthFar === void 0 ? this.depthFar : depthFar, lineWidth === void 0 ? this.lineWidth : lineWidth);
  };
  AG$RenderState.prototype.toString = function () {
    return 'RenderState(depthFunc=' + Kotlin.toString(this.depthFunc) + (', depthMask=' + Kotlin.toString(this.depthMask)) + (', depthNear=' + Kotlin.toString(this.depthNear)) + (', depthFar=' + Kotlin.toString(this.depthFar)) + (', lineWidth=' + Kotlin.toString(this.lineWidth)) + ')';
  };
  AG$RenderState.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.depthFunc) | 0;
    result = result * 31 + Kotlin.hashCode(this.depthMask) | 0;
    result = result * 31 + Kotlin.hashCode(this.depthNear) | 0;
    result = result * 31 + Kotlin.hashCode(this.depthFar) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineWidth) | 0;
    return result;
  };
  AG$RenderState.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.depthFunc, other.depthFunc) && Kotlin.equals(this.depthMask, other.depthMask) && Kotlin.equals(this.depthNear, other.depthNear) && Kotlin.equals(this.depthFar, other.depthFar) && Kotlin.equals(this.lineWidth, other.lineWidth)))));
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
    kind: Kind_CLASS,
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
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  AG.prototype.draw_d5atbn$ = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, scissor) {
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
    if (scissor === void 0)
      scissor = null;
    this.draw_2mei04$(vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, this.dummyRenderState_xrscgh$_0, scissor);
  };
  AG.prototype.draw_2mei04$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) {
  };
  AG.prototype.draw_2mei04$ = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor, callback$default) {
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
    if (renderState === void 0)
      renderState = this.dummyRenderState_xrscgh$_0;
    if (scissor === void 0)
      scissor = null;
    callback$default ? callback$default(vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) : this.draw_2mei04$$default(vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor);
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
      if (this.cachedTexVersion_5oiwyh$_0 !== this.$outer.contextVersion) {
        this.cachedTexVersion_5oiwyh$_0 = this.$outer.contextVersion;
        this._tex_wlye6q$_0 = this.$outer.createTexture_6taknv$(false).manualUpload();
      }
      return ensureNotNull(this._tex_wlye6q$_0);
    }
  });
  AG$RenderBuffer.prototype.start_vux9f0$ = function (width, height) {
  };
  AG$RenderBuffer.prototype.end = function () {
  };
  AG$RenderBuffer.prototype.readBitmap_59u9qz$ = function (bmp) {
    this.$outer.readColor_59u9qz$(bmp);
  };
  AG$RenderBuffer.prototype.readDepth_l5lmba$ = function (width, height, out) {
    this.$outer.readDepth_l5lmba$(width, height, out);
  };
  AG$RenderBuffer.prototype.close = function () {
  };
  AG$RenderBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderBuffer',
    interfaces: [Closeable]
  };
  AG.prototype.createRenderBuffer = function () {
    return new AG$RenderBuffer(this);
  };
  AG.prototype.flip = function () {
    this.disposeTemporalPerFrameStuff();
    this.renderBuffers.free_p1ys8y$(this.frameRenderBuffers);
    if (!this.frameRenderBuffers.isEmpty())
      this.frameRenderBuffers.clear();
    this.flipInternal();
  };
  AG.prototype.flipInternal = function () {
  };
  AG.prototype.clear_yvqa77$$default = function (color, depth, stencil, clearColor, clearDepth, clearStencil) {
  };
  AG.prototype.clear_yvqa77$ = function (color_0, depth, stencil, clearColor, clearDepth, clearStencil, callback$default) {
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
    callback$default ? callback$default(color_0, depth, stencil, clearColor, clearDepth, clearStencil) : this.clear_yvqa77$$default(color_0, depth, stencil, clearColor, clearDepth, clearStencil);
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
    kind: Kind_CLASS,
    simpleName: 'RenderTexture',
    interfaces: [Closeable]
  };
  AG.prototype.renderToTexture_sxjeop$ = defineInlineFunction('korag-js.com.soywiz.korag.AG.renderToTexture_sxjeop$', wrapFunction(function () {
    var color = _.$$importsForInline$$['korim-js'].com.soywiz.korim.color;
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
      try {
        var rb = this.renderBuffers.alloc();
        this.frameRenderBuffers.add_11rb$(rb);
        var oldRendering_0 = this.renderingToTexture;
        this.renderingToTexture = true;
        rb.start_vux9f0$(width, height);
        try {
          this.clear_yvqa77$(color.Colors.TRANSPARENT_BLACK);
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
      }
    };
  }));
  AG.prototype.renderToTextureInternal_sxjeop$ = defineInlineFunction('korag-js.com.soywiz.korag.AG.renderToTextureInternal_sxjeop$', wrapFunction(function () {
    var color = _.$$importsForInline$$['korim-js'].com.soywiz.korim.color;
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
        this.clear_yvqa77$(color.Colors.TRANSPARENT_BLACK);
        callback();
      }
      finally {
        rb.end();
        this.renderingToTexture = oldRendering;
      }
      return new AG$AG$RenderTexture_init(rb.tex, width, height, AG$renderToTextureInternal$lambda(this, rb));
    };
  }));
  AG.prototype.renderToBitmap_1xki6w$ = defineInlineFunction('korag-js.com.soywiz.korag.AG.renderToBitmap_1xki6w$', wrapFunction(function () {
    var color = _.$$importsForInline$$['korim-js'].com.soywiz.korim.color;
    return function (bmp, callback) {
      var rb = this.renderBuffers.alloc();
      var oldRendering = this.renderingToTexture;
      this.renderingToTexture = true;
      rb.start_vux9f0$(bmp.width, bmp.height);
      try {
        this.clear_yvqa77$(color.Colors.TRANSPARENT_BLACK);
        callback();
      }
      finally {
        rb.readBitmap_59u9qz$(bmp);
        rb.end();
        this.renderingToTexture = oldRendering;
        this.renderBuffers.free_11rb$(rb);
      }
    };
  }));
  AG.prototype.renderToBitmapEx_earh6w$ = defineInlineFunction('korag-js.com.soywiz.korag.AG.renderToBitmapEx_earh6w$', wrapFunction(function () {
    var color = _.$$importsForInline$$['korim-js'].com.soywiz.korim.color;
    return function (bmp, callback) {
      var rb = this.renderBuffers.alloc();
      var oldRendering = this.renderingToTexture;
      this.renderingToTexture = true;
      rb.start_vux9f0$(bmp.width, bmp.height);
      try {
        this.clear_yvqa77$(color.Colors.TRANSPARENT_BLACK);
        callback(rb);
      }
      finally {
        rb.readBitmap_59u9qz$(bmp);
        rb.end();
        this.renderingToTexture = oldRendering;
        this.renderBuffers.free_11rb$(rb);
      }
    };
  }));
  AG.prototype.drawBmp_59u9qz$ = function (bitmap) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.drawBmpVB_dhxfvp$_0 == null)
      this.drawBmpVB_dhxfvp$_0 = this.createVertexBuffer();
    if (this.drawBmpIB_dhx68o$_0 == null)
      this.drawBmpIB_dhx68o$_0 = this.createIndexBuffer();
    if (this.drawBmpTex_7qw61w$_0 == null)
      this.drawBmpTex_7qw61w$_0 = this.createTexture();
    if (this.drawBmpTexUnit_vcjhvc$_0 == null)
      this.drawBmpTexUnit_vcjhvc$_0 = new AG$TextureUnit(this.drawBmpTex_7qw61w$_0, false);
    if (this.drawBmp_UNIFORMS_vfpwd7$_0 == null)
      this.drawBmp_UNIFORMS_vfpwd7$_0 = mapOf([to(DefaultShaders_getInstance().u_ProjMat, this.drawBmpMat_7r0q0t$_0), to(DefaultShaders_getInstance().u_Tex, ensureNotNull(this.drawBmpTexUnit_vcjhvc$_0))]);
    (tmp$ = this.drawBmpVB_dhxfvp$_0) != null ? tmp$.upload_kgymra$(this.drawBmp_VERTICES_uziqgb$_0) : null;
    (tmp$_0 = this.drawBmpIB_dhx68o$_0) != null ? tmp$_0.upload_359eei$(this.drawBmp_INDICES_7t5mev$_0) : null;
    (tmp$_1 = this.drawBmpTex_7qw61w$_0) != null ? tmp$_1.upload_nn58bg$(bitmap, false) : null;
    tmp$_2 = ensureNotNull(this.drawBmpVB_dhxfvp$_0);
    tmp$_3 = ensureNotNull(this.drawBmpIB_dhx68o$_0);
    this.draw_d5atbn$(tmp$_2, DefaultShaders_getInstance().PROGRAM_TINTED_TEXTURE, AG$DrawType$TRIANGLES_getInstance(), DefaultShaders_getInstance().LAYOUT_DEFAULT, 6, tmp$_3, void 0, AG$Blending$Companion_getInstance().NONE, ensureNotNull(this.drawBmp_UNIFORMS_vfpwd7$_0));
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  AG.prototype.readColor_59u9qz$ = function (bitmap) {
    throw new NotImplementedError_init();
  };
  AG.prototype.readDepth_l5lmba$ = function (width, height, out) {
    throw new NotImplementedError_init();
  };
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
    return function (it) {
      return this$AG.createRenderBuffer();
    };
  }
  AG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AG',
    interfaces: [Extra]
  };
  var logger;
  var Logger$Level = $module$klogger_js.com.soywiz.klogger.Logger.Level;
  function DefaultShaders() {
    DefaultShaders_instance = this;
    var $this = logger;
    var level = Logger$Level.TRACE;
    if ($this.isEnabled_fs4ikx$(level)) {
      $this.actualLog_pwm3k3$(level, 'DefaultShaders[0]');
    }
    this.u_Tex = new Uniform('u_Tex', VarType$TextureUnit_getInstance());
    var $this_0 = logger;
    var level_0 = Logger$Level.TRACE;
    if ($this_0.isEnabled_fs4ikx$(level_0)) {
      $this_0.actualLog_pwm3k3$(level_0, 'DefaultShaders[1]');
    }
    this.u_ProjMat = new Uniform('u_ProjMat', VarType$Mat4_getInstance());
    this.a_Pos = Attribute_init('a_Pos', VarType$Float2_getInstance(), false);
    this.a_Tex = Attribute_init('a_Tex', VarType$Float2_getInstance(), false);
    this.a_Col = Attribute_init('a_Col', VarType$Byte4_getInstance(), true);
    this.v_Tex = new Varying('v_Tex', VarType$Float2_getInstance());
    this.v_Col = new Varying('v_Col', VarType$Byte4_getInstance());
    this.t_Temp1 = new Temp(0, VarType$Float4_getInstance());
    var $this_1 = logger;
    var level_1 = Logger$Level.TRACE;
    if ($this_1.isEnabled_fs4ikx$(level_1)) {
      $this_1.actualLog_pwm3k3$(level_1, 'DefaultShaders[2]');
    }
    this.textureUnit = new AG$TextureUnit();
    var $this_2 = logger;
    var level_2 = Logger$Level.TRACE;
    if ($this_2.isEnabled_fs4ikx$(level_2)) {
      $this_2.actualLog_pwm3k3$(level_2, 'DefaultShaders[3]');
    }
    this.FORMAT_DEFAULT = VertexLayout_init_0([this.a_Pos, this.a_Tex, this.a_Col]);
    this.LAYOUT_DEFAULT = VertexLayout_init_0([this.a_Pos, this.a_Tex, this.a_Col]);
    this.VERTEX_DEFAULT = VertexShader_0(DefaultShaders$VERTEX_DEFAULT$lambda(this));
    this.FRAGMENT_SOLID_COLOR = FragmentShader_0(DefaultShaders$FRAGMENT_SOLID_COLOR$lambda(this));
    this.PROGRAM_TINTED_TEXTURE = new Program(this.VERTEX_DEFAULT, FragmentShader_0(DefaultShaders$PROGRAM_TINTED_TEXTURE$lambda(this)), 'PROGRAM_TINTED_TEXTURE');
    this.PROGRAM_TINTED_TEXTURE_PREMULT = new Program(this.VERTEX_DEFAULT, FragmentShader_0(DefaultShaders$PROGRAM_TINTED_TEXTURE_PREMULT$lambda(this)), 'PROGRAM_TINTED_TEXTURE');
    this.PROGRAM_SOLID_COLOR = new Program(this.VERTEX_DEFAULT, this.FRAGMENT_SOLID_COLOR, 'PROGRAM_SOLID_COLOR');
    var $this_3 = logger;
    var level_3 = Logger$Level.TRACE;
    if ($this_3.isEnabled_fs4ikx$(level_3)) {
      $this_3.actualLog_pwm3k3$(level_3, 'DefaultShaders[4]');
    }
    this.FORMAT_DEBUG = VertexLayout_init_0([this.a_Pos]);
    this.LAYOUT_DEBUG = VertexLayout_init_0([this.a_Pos]);
    this.PROGRAM_DEBUG = new Program(VertexShader_0(DefaultShaders$PROGRAM_DEBUG$lambda(this)), FragmentShader_0(DefaultShaders$PROGRAM_DEBUG$lambda_0), 'PROGRAM_DEBUG');
    this.PROGRAM_DEBUG_WITH_PROJ = new Program(VertexShader_0(DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda(this)), FragmentShader_0(DefaultShaders$PROGRAM_DEBUG_WITH_PROJ$lambda_0), 'PROGRAM_DEBUG_WITH_PROJ');
    this.PROGRAM_DEFAULT_lphlbv$_0 = lazy(DefaultShaders$PROGRAM_DEFAULT$lambda(this));
    var $this_4 = logger;
    var level_4 = Logger$Level.TRACE;
    if ($this_4.isEnabled_fs4ikx$(level_4)) {
      $this_4.actualLog_pwm3k3$(level_4, 'DefaultShaders[5]');
    }
  }
  Object.defineProperty(DefaultShaders.prototype, 'PROGRAM_DEFAULT', {
    get: function () {
      return this.PROGRAM_DEFAULT_lphlbv$_0.value;
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
    kind: Kind_OBJECT,
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
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
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
  LogAG.prototype.clear_yvqa77$$default = function (color, depth, stencil, clearColor, clearDepth, clearStencil) {
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
  function LogAG$LogTexture($outer, id, premultiplied) {
    this.$outer = $outer;
    AG$Texture.call(this, this.$outer);
    this.id = id;
    this.premultiplied_pk2gt9$_0 = premultiplied;
  }
  Object.defineProperty(LogAG$LogTexture.prototype, 'premultiplied', {
    get: function () {
      return this.premultiplied_pk2gt9$_0;
    }
  });
  LogAG$LogTexture.prototype.uploadedSource = function () {
    this.$outer.log_kwvgae$_0(this.toString() + '.uploadedBitmap(' + this.source + ', ' + this.source.width + ', ' + this.source.height + ')');
  };
  LogAG$LogTexture.prototype.close = function () {
    AG$Texture.prototype.close.call(this);
    this.$outer.log_kwvgae$_0(this.toString() + '.close()');
  };
  LogAG$LogTexture.prototype.toString = function () {
    return 'Texture[' + this.id + ']';
  };
  LogAG$LogTexture.$metadata$ = {
    kind: Kind_CLASS,
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
    this.$outer.log_kwvgae$_0(this.toString() + '.afterSetMem(mem[' + ensureNotNull(this.mem).size + '])');
  };
  LogAG$LogBuffer.prototype.close = function () {
    this.$outer.log_kwvgae$_0(this.toString() + '.close()');
  };
  LogAG$LogBuffer.prototype.toString = function () {
    return 'Buffer[' + this.id + ']';
  };
  LogAG$LogBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogBuffer',
    interfaces: [AG$Buffer]
  };
  function LogAG$LogRenderBuffer($outer, id) {
    this.$outer = $outer;
    AG$RenderBuffer.call(this, this.$outer);
    this.id = id;
  }
  LogAG$LogRenderBuffer.prototype.start_vux9f0$ = function (width, height) {
    this.$outer.log_kwvgae$_0(this.toString() + '.start(' + width + ', ' + height + ')');
  };
  LogAG$LogRenderBuffer.prototype.end = function () {
    this.$outer.log_kwvgae$_0(this.toString() + '.end()');
  };
  LogAG$LogRenderBuffer.prototype.close = function () {
    this.$outer.log_kwvgae$_0(this.toString() + '.close()');
  };
  LogAG$LogRenderBuffer.prototype.toString = function () {
    return 'RenderBuffer[' + this.id + ']';
  };
  LogAG$LogRenderBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogRenderBuffer',
    interfaces: [AG$RenderBuffer]
  };
  LogAG.prototype.createTexture_6taknv$ = function (premultiplied) {
    var tmp$;
    var $receiver = new LogAG$LogTexture(this, (tmp$ = this.textureId_gyj2n2$_0, this.textureId_gyj2n2$_0 = tmp$ + 1 | 0, tmp$), premultiplied);
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
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  LogAG.prototype.draw_2mei04$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    try {
      this.log_kwvgae$_0('draw(vertices=' + vertices + ', indices=' + toString(indices) + ', program=' + program + ', type=' + type + ', vertexLayout=' + vertexLayout + ', vertexCount=' + vertexCount + ', offset=' + offset + ', blending=' + blending + ', uniforms=' + uniforms + ', stencil=' + stencil + ', colorMask=' + colorMask + ')');
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
      var vertexBuffer = Kotlin.isType(tmp$ = vertices, LogAG$LogBuffer) ? tmp$ : throwCCE();
      var vertexMem = ensureNotNull(vertexBuffer.logmem);
      var vertexMemOffset = vertexBuffer.logmemOffset;
      var indexMem = (Kotlin.isType(tmp$_0 = indices, LogAG$LogBuffer) ? tmp$_0 : throwCCE()).logmem;
      var $receiver = until(offset, offset + vertexCount | 0);
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_4;
      tmp$_4 = $receiver.iterator();
      while (tmp$_4.hasNext()) {
        var item = tmp$_4.next();
        destination.add_11rb$(ensureNotNull(indexMem).getAlignedInt16_za3lpa$(item));
      }
      var _indices = destination;
      this.log_kwvgae$_0('::draw.indices=' + _indices);
      tmp$_1 = distinct(sorted(_indices)).iterator();
      while (tmp$_1.hasNext()) {
        var index = tmp$_1.next();
        var os = index * vertexLayout.totalSize;
        var attributes = ArrayList_init();
        tmp$_2 = zip(vertexLayout.attributes, vertexLayout.attributePositions).iterator();
        while (tmp$_2.hasNext()) {
          var tmp$_5 = tmp$_2.next();
          var attribute = tmp$_5.component1()
          , pos = tmp$_5.component2();
          var o = os + pos + vertexMemOffset | 0;
          switch (attribute.type.name) {
            case 'Int1':
              tmp$_3 = 'int(' + toString(vertexMem.getUnalignedInt32_za3lpa$(o + 0 | 0)) + ')';
              break;
            case 'Float1':
              tmp$_3 = 'float(' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 0 | 0)) + ')';
              break;
            case 'Float2':
              tmp$_3 = 'vec2(' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 0 | 0)) + ',' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 4 | 0)) + ')';
              break;
            case 'Float3':
              tmp$_3 = 'vec3(' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 0 | 0)) + ',' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 4 | 0)) + ',' + toString(vertexMem.getUnalignedFloat32_za3lpa$(o + 8 | 0)) + ')';
              break;
            case 'Byte4':
              tmp$_3 = 'byte4(' + toString(vertexMem.getUnalignedInt32_za3lpa$(o + 0 | 0)) + ')';
              break;
            default:tmp$_3 = 'Unsupported(' + attribute.type + ')';
              break;
          }
          var info = tmp$_3;
          var element = attribute.name + '[' + info + ']';
          attributes.add_11rb$(element);
        }
        this.log_kwvgae$_0('::draw.vertex[' + index + ']: ' + joinToString(attributes, ', '));
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        this.log_kwvgae$_0('ERROR: ' + toString(e.message));
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
  LogAG.prototype.readColor_59u9qz$ = function (bitmap) {
    this.log_kwvgae$_0(this.toString() + '.readBitmap(' + bitmap + ')');
  };
  LogAG.prototype.readDepth_l5lmba$ = function (width, height, out) {
    this.log_kwvgae$_0(this.toString() + '.readDepth(' + width + ', ' + height + ', ' + out + ')');
  };
  LogAG.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogAG',
    interfaces: [AG]
  };
  function toNewGlslString($receiver, gles, version) {
    if (gles === void 0)
      gles = true;
    if (version === void 0)
      version = 100;
    return (new GlslGenerator($receiver.type, gles, version)).generate_57b21j$($receiver.stm);
  }
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
  function GlslGenerator(kind, gles, version) {
    if (gles === void 0)
      gles = true;
    if (version === void 0)
      version = 100;
    Program$Visitor.call(this);
    this.kind = kind;
    this.gles = gles;
    this.version = version;
    this.temps_0 = HashSet_init();
    this.attributes_0 = HashSet_init();
    this.varyings_0 = HashSet_init();
    this.uniforms_0 = HashSet_init();
    this.programStr_0 = StringBuilder_init();
  }
  GlslGenerator.prototype.errorType_0 = function (type) {
    return invalidOp("Don't know how to serialize type " + type);
  };
  GlslGenerator.prototype.typeToString_b2kxjc$ = function (type) {
    switch (type.name) {
      case 'Byte4':
        return 'vec4';
      case 'Mat4':
        return 'mat4';
      case 'TextureUnit':
        return 'sampler2D';
      default:switch (type.kind.name) {
          case 'BYTE':
          case 'UNSIGNED_BYTE':
          case 'SHORT':
          case 'UNSIGNED_SHORT':
          case 'FLOAT':
            switch (type.elementCount) {
              case 1:
                return 'float';
              case 2:
                return 'vec2';
              case 3:
                return 'vec3';
              case 4:
                return 'vec4';
              default:return this.errorType_0(type);
            }

          case 'INT':
            switch (type.elementCount) {
              case 1:
                return 'int';
              case 2:
                return 'ivec2';
              case 3:
                return 'ivec3';
              case 4:
                return 'ivec4';
              default:return this.errorType_0(type);
            }

          default:return Kotlin.noWhenBranchMatched();
        }

        break;
    }
  };
  GlslGenerator.prototype.generate_57b21j$ = function (root) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.temps_0.clear();
    this.attributes_0.clear();
    this.varyings_0.clear();
    this.uniforms_0.clear();
    this.programStr_0 = StringBuilder_init();
    this.visit_57b21j$(root);
    var prefix = ArrayList_init();
    var tmp$_3 = this.kind === ShaderType$FRAGMENT_getInstance();
    if (tmp$_3) {
      tmp$_3 = !this.attributes_0.isEmpty();
    }
    if (tmp$_3) {
      throw RuntimeException_init("Can't use attributes in fragment shader");
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
    var element_2 = '#version ' + this.version;
    precissions.add_11rb$(element_2);
    var element_3 = '#ifdef GL_ES';
    precissions.add_11rb$(element_3);
    var element_4 = 'precision mediump float;';
    precissions.add_11rb$(element_4);
    var element_5 = 'precision mediump int;';
    precissions.add_11rb$(element_5);
    var element_6 = 'precision lowp sampler2D;';
    precissions.add_11rb$(element_6);
    var element_7 = 'precision lowp samplerCube;';
    precissions.add_11rb$(element_7);
    precissions.add_11rb$('#endif');
    var $receiver = this.temps_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
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
    this.programStr_0.append_gw00v9$('if (');
    this.visit_dq1c34$(stm.cond);
    this.programStr_0.append_gw00v9$(') ');
    this.visit_57b21j$(stm.tbody);
    if (stm.fbody != null) {
      this.programStr_0.append_gw00v9$(' else ');
      this.visit_57b21j$(ensureNotNull(stm.fbody));
    }
  };
  GlslGenerator.prototype.visit_bmfbl7$ = function (operand) {
    var tmp$, tmp$_0;
    if (Kotlin.isType(operand, Output)) {
      tmp$_0 = this.programStr_0;
      switch (this.kind.name) {
        case 'VERTEX':
          tmp$ = 'gl_Position';
          break;
        case 'FRAGMENT':
          tmp$ = 'gl_FragColor';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_0.append_gw00v9$(tmp$);
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
    kind: Kind_CLASS,
    simpleName: 'GlslGenerator',
    interfaces: [Program$Visitor]
  };
  function toGlSl($receiver) {
    return (new GlslGenerator($receiver.type)).generate_57b21j$($receiver.stm);
  }
  function VarKind(name, ordinal, bytesSize) {
    Enum.call(this);
    this.bytesSize = bytesSize;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VarKind_initFields() {
    VarKind_initFields = function () {
    };
    VarKind$BYTE_instance = new VarKind('BYTE', 0, 1);
    VarKind$UNSIGNED_BYTE_instance = new VarKind('UNSIGNED_BYTE', 1, 1);
    VarKind$SHORT_instance = new VarKind('SHORT', 2, 2);
    VarKind$UNSIGNED_SHORT_instance = new VarKind('UNSIGNED_SHORT', 3, 2);
    VarKind$INT_instance = new VarKind('INT', 4, 4);
    VarKind$FLOAT_instance = new VarKind('FLOAT', 5, 4);
  }
  var VarKind$BYTE_instance;
  function VarKind$BYTE_getInstance() {
    VarKind_initFields();
    return VarKind$BYTE_instance;
  }
  var VarKind$UNSIGNED_BYTE_instance;
  function VarKind$UNSIGNED_BYTE_getInstance() {
    VarKind_initFields();
    return VarKind$UNSIGNED_BYTE_instance;
  }
  var VarKind$SHORT_instance;
  function VarKind$SHORT_getInstance() {
    VarKind_initFields();
    return VarKind$SHORT_instance;
  }
  var VarKind$UNSIGNED_SHORT_instance;
  function VarKind$UNSIGNED_SHORT_getInstance() {
    VarKind_initFields();
    return VarKind$UNSIGNED_SHORT_instance;
  }
  var VarKind$INT_instance;
  function VarKind$INT_getInstance() {
    VarKind_initFields();
    return VarKind$INT_instance;
  }
  var VarKind$FLOAT_instance;
  function VarKind$FLOAT_getInstance() {
    VarKind_initFields();
    return VarKind$FLOAT_instance;
  }
  VarKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VarKind',
    interfaces: [Enum]
  };
  function VarKind$values() {
    return [VarKind$BYTE_getInstance(), VarKind$UNSIGNED_BYTE_getInstance(), VarKind$SHORT_getInstance(), VarKind$UNSIGNED_SHORT_getInstance(), VarKind$INT_getInstance(), VarKind$FLOAT_getInstance()];
  }
  VarKind.values = VarKind$values;
  function VarKind$valueOf(name) {
    switch (name) {
      case 'BYTE':
        return VarKind$BYTE_getInstance();
      case 'UNSIGNED_BYTE':
        return VarKind$UNSIGNED_BYTE_getInstance();
      case 'SHORT':
        return VarKind$SHORT_getInstance();
      case 'UNSIGNED_SHORT':
        return VarKind$UNSIGNED_SHORT_getInstance();
      case 'INT':
        return VarKind$INT_getInstance();
      case 'FLOAT':
        return VarKind$FLOAT_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.shader.VarKind.' + name);
    }
  }
  VarKind.valueOf_61zpoe$ = VarKind$valueOf;
  function VarType(name, ordinal, kind, elementCount) {
    Enum.call(this);
    this.kind = kind;
    this.elementCount = elementCount;
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.bytesSize = Kotlin.imul(this.kind.bytesSize, this.elementCount);
  }
  function VarType_initFields() {
    VarType_initFields = function () {
    };
    VarType$VOID_instance = new VarType('VOID', 0, VarKind$BYTE_getInstance(), 0);
    VarType$Mat4_instance = new VarType('Mat4', 1, VarKind$FLOAT_getInstance(), 16);
    VarType$TextureUnit_instance = new VarType('TextureUnit', 2, VarKind$INT_getInstance(), 1);
    VarType$Int1_instance = new VarType('Int1', 3, VarKind$INT_getInstance(), 1);
    VarType$Float1_instance = new VarType('Float1', 4, VarKind$FLOAT_getInstance(), 1);
    VarType$Float2_instance = new VarType('Float2', 5, VarKind$FLOAT_getInstance(), 2);
    VarType$Float3_instance = new VarType('Float3', 6, VarKind$FLOAT_getInstance(), 3);
    VarType$Float4_instance = new VarType('Float4', 7, VarKind$FLOAT_getInstance(), 4);
    VarType$Short1_instance = new VarType('Short1', 8, VarKind$SHORT_getInstance(), 1);
    VarType$Short2_instance = new VarType('Short2', 9, VarKind$SHORT_getInstance(), 2);
    VarType$Short3_instance = new VarType('Short3', 10, VarKind$SHORT_getInstance(), 3);
    VarType$Short4_instance = new VarType('Short4', 11, VarKind$SHORT_getInstance(), 4);
    VarType$Bool1_instance = new VarType('Bool1', 12, VarKind$UNSIGNED_BYTE_getInstance(), 1);
    VarType$Byte4_instance = new VarType('Byte4', 13, VarKind$UNSIGNED_BYTE_getInstance(), 4);
    VarType$SByte1_instance = new VarType('SByte1', 14, VarKind$BYTE_getInstance(), 1);
    VarType$SByte2_instance = new VarType('SByte2', 15, VarKind$BYTE_getInstance(), 2);
    VarType$SByte3_instance = new VarType('SByte3', 16, VarKind$BYTE_getInstance(), 3);
    VarType$SByte4_instance = new VarType('SByte4', 17, VarKind$BYTE_getInstance(), 4);
    VarType$UByte1_instance = new VarType('UByte1', 18, VarKind$UNSIGNED_BYTE_getInstance(), 1);
    VarType$UByte2_instance = new VarType('UByte2', 19, VarKind$UNSIGNED_BYTE_getInstance(), 2);
    VarType$UByte3_instance = new VarType('UByte3', 20, VarKind$UNSIGNED_BYTE_getInstance(), 3);
    VarType$UByte4_instance = new VarType('UByte4', 21, VarKind$UNSIGNED_BYTE_getInstance(), 4);
    VarType$SShort1_instance = new VarType('SShort1', 22, VarKind$SHORT_getInstance(), 1);
    VarType$SShort2_instance = new VarType('SShort2', 23, VarKind$SHORT_getInstance(), 2);
    VarType$SShort3_instance = new VarType('SShort3', 24, VarKind$SHORT_getInstance(), 3);
    VarType$SShort4_instance = new VarType('SShort4', 25, VarKind$SHORT_getInstance(), 4);
    VarType$UShort1_instance = new VarType('UShort1', 26, VarKind$UNSIGNED_SHORT_getInstance(), 1);
    VarType$UShort2_instance = new VarType('UShort2', 27, VarKind$UNSIGNED_SHORT_getInstance(), 2);
    VarType$UShort3_instance = new VarType('UShort3', 28, VarKind$UNSIGNED_SHORT_getInstance(), 3);
    VarType$UShort4_instance = new VarType('UShort4', 29, VarKind$UNSIGNED_SHORT_getInstance(), 4);
    VarType$SInt1_instance = new VarType('SInt1', 30, VarKind$INT_getInstance(), 1);
    VarType$SInt2_instance = new VarType('SInt2', 31, VarKind$INT_getInstance(), 2);
    VarType$SInt3_instance = new VarType('SInt3', 32, VarKind$INT_getInstance(), 3);
    VarType$SInt4_instance = new VarType('SInt4', 33, VarKind$INT_getInstance(), 4);
    VarType$Companion_getInstance();
  }
  var VarType$VOID_instance;
  function VarType$VOID_getInstance() {
    VarType_initFields();
    return VarType$VOID_instance;
  }
  var VarType$Mat4_instance;
  function VarType$Mat4_getInstance() {
    VarType_initFields();
    return VarType$Mat4_instance;
  }
  var VarType$TextureUnit_instance;
  function VarType$TextureUnit_getInstance() {
    VarType_initFields();
    return VarType$TextureUnit_instance;
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
  var VarType$Short1_instance;
  function VarType$Short1_getInstance() {
    VarType_initFields();
    return VarType$Short1_instance;
  }
  var VarType$Short2_instance;
  function VarType$Short2_getInstance() {
    VarType_initFields();
    return VarType$Short2_instance;
  }
  var VarType$Short3_instance;
  function VarType$Short3_getInstance() {
    VarType_initFields();
    return VarType$Short3_instance;
  }
  var VarType$Short4_instance;
  function VarType$Short4_getInstance() {
    VarType_initFields();
    return VarType$Short4_instance;
  }
  var VarType$Bool1_instance;
  function VarType$Bool1_getInstance() {
    VarType_initFields();
    return VarType$Bool1_instance;
  }
  var VarType$Byte4_instance;
  function VarType$Byte4_getInstance() {
    VarType_initFields();
    return VarType$Byte4_instance;
  }
  var VarType$SByte1_instance;
  function VarType$SByte1_getInstance() {
    VarType_initFields();
    return VarType$SByte1_instance;
  }
  var VarType$SByte2_instance;
  function VarType$SByte2_getInstance() {
    VarType_initFields();
    return VarType$SByte2_instance;
  }
  var VarType$SByte3_instance;
  function VarType$SByte3_getInstance() {
    VarType_initFields();
    return VarType$SByte3_instance;
  }
  var VarType$SByte4_instance;
  function VarType$SByte4_getInstance() {
    VarType_initFields();
    return VarType$SByte4_instance;
  }
  var VarType$UByte1_instance;
  function VarType$UByte1_getInstance() {
    VarType_initFields();
    return VarType$UByte1_instance;
  }
  var VarType$UByte2_instance;
  function VarType$UByte2_getInstance() {
    VarType_initFields();
    return VarType$UByte2_instance;
  }
  var VarType$UByte3_instance;
  function VarType$UByte3_getInstance() {
    VarType_initFields();
    return VarType$UByte3_instance;
  }
  var VarType$UByte4_instance;
  function VarType$UByte4_getInstance() {
    VarType_initFields();
    return VarType$UByte4_instance;
  }
  var VarType$SShort1_instance;
  function VarType$SShort1_getInstance() {
    VarType_initFields();
    return VarType$SShort1_instance;
  }
  var VarType$SShort2_instance;
  function VarType$SShort2_getInstance() {
    VarType_initFields();
    return VarType$SShort2_instance;
  }
  var VarType$SShort3_instance;
  function VarType$SShort3_getInstance() {
    VarType_initFields();
    return VarType$SShort3_instance;
  }
  var VarType$SShort4_instance;
  function VarType$SShort4_getInstance() {
    VarType_initFields();
    return VarType$SShort4_instance;
  }
  var VarType$UShort1_instance;
  function VarType$UShort1_getInstance() {
    VarType_initFields();
    return VarType$UShort1_instance;
  }
  var VarType$UShort2_instance;
  function VarType$UShort2_getInstance() {
    VarType_initFields();
    return VarType$UShort2_instance;
  }
  var VarType$UShort3_instance;
  function VarType$UShort3_getInstance() {
    VarType_initFields();
    return VarType$UShort3_instance;
  }
  var VarType$UShort4_instance;
  function VarType$UShort4_getInstance() {
    VarType_initFields();
    return VarType$UShort4_instance;
  }
  var VarType$SInt1_instance;
  function VarType$SInt1_getInstance() {
    VarType_initFields();
    return VarType$SInt1_instance;
  }
  var VarType$SInt2_instance;
  function VarType$SInt2_getInstance() {
    VarType_initFields();
    return VarType$SInt2_instance;
  }
  var VarType$SInt3_instance;
  function VarType$SInt3_getInstance() {
    VarType_initFields();
    return VarType$SInt3_instance;
  }
  var VarType$SInt4_instance;
  function VarType$SInt4_getInstance() {
    VarType_initFields();
    return VarType$SInt4_instance;
  }
  function VarType$Companion() {
    VarType$Companion_instance = this;
  }
  VarType$Companion.prototype.BYTE_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$VOID_getInstance();
      case 1:
        return VarType$SByte1_getInstance();
      case 2:
        return VarType$SByte2_getInstance();
      case 3:
        return VarType$SByte3_getInstance();
      case 4:
        return VarType$SByte4_getInstance();
      default:return error.invalidOp;
    }
  };
  VarType$Companion.prototype.UBYTE_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$VOID_getInstance();
      case 1:
        return VarType$UByte1_getInstance();
      case 2:
        return VarType$UByte2_getInstance();
      case 3:
        return VarType$UByte3_getInstance();
      case 4:
        return VarType$UByte4_getInstance();
      default:return error.invalidOp;
    }
  };
  VarType$Companion.prototype.SHORT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$VOID_getInstance();
      case 1:
        return VarType$SShort1_getInstance();
      case 2:
        return VarType$SShort2_getInstance();
      case 3:
        return VarType$SShort3_getInstance();
      case 4:
        return VarType$SShort4_getInstance();
      default:return error.invalidOp;
    }
  };
  VarType$Companion.prototype.USHORT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$VOID_getInstance();
      case 1:
        return VarType$UShort1_getInstance();
      case 2:
        return VarType$UShort2_getInstance();
      case 3:
        return VarType$UShort3_getInstance();
      case 4:
        return VarType$UShort4_getInstance();
      default:return error.invalidOp;
    }
  };
  VarType$Companion.prototype.INT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$VOID_getInstance();
      case 1:
        return VarType$SInt1_getInstance();
      case 2:
        return VarType$SInt2_getInstance();
      case 3:
        return VarType$SInt3_getInstance();
      case 4:
        return VarType$SInt4_getInstance();
      default:return error.invalidOp;
    }
  };
  VarType$Companion.prototype.FLOAT_za3lpa$ = function (count) {
    switch (count) {
      case 0:
        return VarType$VOID_getInstance();
      case 1:
        return VarType$Float1_getInstance();
      case 2:
        return VarType$Float2_getInstance();
      case 3:
        return VarType$Float3_getInstance();
      case 4:
        return VarType$Float4_getInstance();
      default:return error.invalidOp;
    }
  };
  VarType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VarType$Companion_instance = null;
  function VarType$Companion_getInstance() {
    VarType_initFields();
    if (VarType$Companion_instance === null) {
      new VarType$Companion();
    }
    return VarType$Companion_instance;
  }
  VarType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VarType',
    interfaces: [Enum]
  };
  function VarType$values() {
    return [VarType$VOID_getInstance(), VarType$Mat4_getInstance(), VarType$TextureUnit_getInstance(), VarType$Int1_getInstance(), VarType$Float1_getInstance(), VarType$Float2_getInstance(), VarType$Float3_getInstance(), VarType$Float4_getInstance(), VarType$Short1_getInstance(), VarType$Short2_getInstance(), VarType$Short3_getInstance(), VarType$Short4_getInstance(), VarType$Bool1_getInstance(), VarType$Byte4_getInstance(), VarType$SByte1_getInstance(), VarType$SByte2_getInstance(), VarType$SByte3_getInstance(), VarType$SByte4_getInstance(), VarType$UByte1_getInstance(), VarType$UByte2_getInstance(), VarType$UByte3_getInstance(), VarType$UByte4_getInstance(), VarType$SShort1_getInstance(), VarType$SShort2_getInstance(), VarType$SShort3_getInstance(), VarType$SShort4_getInstance(), VarType$UShort1_getInstance(), VarType$UShort2_getInstance(), VarType$UShort3_getInstance(), VarType$UShort4_getInstance(), VarType$SInt1_getInstance(), VarType$SInt2_getInstance(), VarType$SInt3_getInstance(), VarType$SInt4_getInstance()];
  }
  VarType.values = VarType$values;
  function VarType$valueOf(name) {
    switch (name) {
      case 'VOID':
        return VarType$VOID_getInstance();
      case 'Mat4':
        return VarType$Mat4_getInstance();
      case 'TextureUnit':
        return VarType$TextureUnit_getInstance();
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
      case 'Short1':
        return VarType$Short1_getInstance();
      case 'Short2':
        return VarType$Short2_getInstance();
      case 'Short3':
        return VarType$Short3_getInstance();
      case 'Short4':
        return VarType$Short4_getInstance();
      case 'Bool1':
        return VarType$Bool1_getInstance();
      case 'Byte4':
        return VarType$Byte4_getInstance();
      case 'SByte1':
        return VarType$SByte1_getInstance();
      case 'SByte2':
        return VarType$SByte2_getInstance();
      case 'SByte3':
        return VarType$SByte3_getInstance();
      case 'SByte4':
        return VarType$SByte4_getInstance();
      case 'UByte1':
        return VarType$UByte1_getInstance();
      case 'UByte2':
        return VarType$UByte2_getInstance();
      case 'UByte3':
        return VarType$UByte3_getInstance();
      case 'UByte4':
        return VarType$UByte4_getInstance();
      case 'SShort1':
        return VarType$SShort1_getInstance();
      case 'SShort2':
        return VarType$SShort2_getInstance();
      case 'SShort3':
        return VarType$SShort3_getInstance();
      case 'SShort4':
        return VarType$SShort4_getInstance();
      case 'UShort1':
        return VarType$UShort1_getInstance();
      case 'UShort2':
        return VarType$UShort2_getInstance();
      case 'UShort3':
        return VarType$UShort3_getInstance();
      case 'UShort4':
        return VarType$UShort4_getInstance();
      case 'SInt1':
        return VarType$SInt1_getInstance();
      case 'SInt2':
        return VarType$SInt2_getInstance();
      case 'SInt3':
        return VarType$SInt3_getInstance();
      case 'SInt4':
        return VarType$SInt4_getInstance();
      default:throwISE('No enum constant com.soywiz.korag.shader.VarType.' + name);
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korag.shader.ShaderType.' + name);
    }
  }
  ShaderType.valueOf_61zpoe$ = ShaderType$valueOf;
  function Operand(type) {
    this.type = type;
  }
  Operand.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
    simpleName: 'Variable',
    interfaces: [Operand]
  };
  function Attribute(name, type, normalized, offset, active) {
    if (offset === void 0)
      offset = null;
    if (active === void 0)
      active = true;
    Variable.call(this, name, type);
    this.normalized = normalized;
    this.offset = offset;
    this.active = active;
  }
  Attribute.prototype.inactived = function () {
    return new Attribute(this.name, this.type, this.normalized, null, false);
  };
  Attribute.prototype.toString = function () {
    return 'Attribute(' + this.name + ')';
  };
  Attribute.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Attribute',
    interfaces: [Variable]
  };
  function Attribute_init(name, type, normalized, $this) {
    $this = $this || Object.create(Attribute.prototype);
    Attribute.call($this, name, type, normalized, null, true);
    return $this;
  }
  function Varying(name, type) {
    Variable.call(this, name, type);
  }
  Varying.prototype.toString = function () {
    return 'Varying(' + this.name + ')';
  };
  Varying.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    kind: Kind_OBJECT,
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
      return this.uniforms_opu58o$_0.value;
    }
  });
  Object.defineProperty(Program.prototype, 'attributes', {
    get: function () {
      return this.attributes_u73xi8$_0.value;
    }
  });
  Program.prototype.close = function () {
  };
  Program.prototype.toString = function () {
    var tmp$ = 'Program(name=' + this.name + ', attributes=';
    var $receiver = this.attributes;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.name);
    }
    var tmp$_1 = tmp$ + destination + ', uniforms=';
    var $receiver_0 = this.uniforms;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
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
    kind: Kind_CLASS,
    simpleName: 'Binop',
    interfaces: [Operand]
  };
  function Program$IntLiteral(value) {
    Operand.call(this, VarType$Int1_getInstance());
    this.value = value;
  }
  Program$IntLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntLiteral',
    interfaces: [Operand]
  };
  function Program$FloatLiteral(value) {
    Operand.call(this, VarType$Float1_getInstance());
    this.value = value;
  }
  Program$FloatLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatLiteral',
    interfaces: [Operand]
  };
  function Program$BoolLiteral(value) {
    Operand.call(this, VarType$Bool1_getInstance());
    this.value = value;
  }
  Program$BoolLiteral.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoolLiteral',
    interfaces: [Operand]
  };
  function Program$Vector(type, ops) {
    Operand.call(this, type);
    this.ops = ops;
  }
  Program$Vector.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Vector',
    interfaces: [Operand]
  };
  function Program$Swizzle(left, swizzle) {
    Operand.call(this, left.type);
    this.left = left;
    this.swizzle = swizzle;
  }
  Program$Swizzle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Swizzle',
    interfaces: [Operand]
  };
  function Program$Func(name, ops) {
    Operand.call(this, VarType$Float1_getInstance());
    this.name = name;
    this.ops = ops;
  }
  Program$Func.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
    simpleName: 'Stms',
    interfaces: [Program$Stm]
  };
  function Program$Stm$Set(to, from) {
    Program$Stm.call(this);
    this.to = to;
    this.from = from;
  }
  Program$Stm$Set.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Set',
    interfaces: [Program$Stm]
  };
  function Program$Stm$Discard() {
    Program$Stm.call(this);
  }
  Program$Stm$Discard.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
    simpleName: 'If',
    interfaces: [Program$Stm]
  };
  Program$Stm.$metadata$ = {
    kind: Kind_CLASS,
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
    return new Program$Vector(type, toList(ops));
  };
  Program$Builder.prototype.vec4_hywno3$ = function (ops) {
    return new Program$Vector(VarType$Float4_getInstance(), toList(ops));
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
      return this.uniforms_bnz1nv$_0.value;
    }
  });
  Object.defineProperty(Shader.prototype, 'attributes', {
    get: function () {
      return this.attributes_cq9n1p$_0.value;
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
    simpleName: 'Shader',
    interfaces: []
  };
  function VertexShader(stm) {
    Shader.call(this, ShaderType$VERTEX_getInstance(), stm);
  }
  VertexShader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VertexShader',
    interfaces: [Shader]
  };
  function FragmentShader(stm) {
    Shader.call(this, ShaderType$FRAGMENT_getInstance(), stm);
  }
  FragmentShader.$metadata$ = {
    kind: Kind_CLASS,
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
  function VertexLayout(attributes, layoutSize) {
    this.attributes = attributes;
    this.layoutSize_0 = layoutSize;
    this._lastPos_0 = 0;
    var $receiver = this.attributes;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var a = item.type.kind.bytesSize;
      tmp$_0.call(destination, a <= 1 ? 1 : a);
    }
    this.alignments = destination;
    var $receiver_0 = this.attributes;
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      var tmp$_2 = destination_0.add_11rb$;
      if (item_0.offset != null) {
        this._lastPos_0 = item_0.offset;
      }
       else {
        this._lastPos_0 = nextAlignedTo(this._lastPos_0, item_0.type.kind.bytesSize);
      }
      var out = this._lastPos_0;
      this._lastPos_0 = this._lastPos_0 + item_0.type.bytesSize | 0;
      tmp$_2.call(destination_0, out);
    }
    this.attributePositions = destination_0;
    var tmp$_3;
    this.maxAlignment = (tmp$_3 = max(this.alignments)) != null ? tmp$_3 : 1;
    var tmp$_4;
    this.totalSize = (tmp$_4 = this.layoutSize_0) != null ? tmp$_4 : nextAlignedTo(this._lastPos_0, this.maxAlignment);
  }
  VertexLayout.prototype.toString = function () {
    var $receiver = this.attributes;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.name);
    }
    return 'VertexLayout[' + joinToString(destination, ', ') + ']';
  };
  VertexLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VertexLayout',
    interfaces: []
  };
  function VertexLayout_init(attributes, $this) {
    $this = $this || Object.create(VertexLayout.prototype);
    VertexLayout.call($this, attributes, null);
    return $this;
  }
  function VertexLayout_init_0(attributes, $this) {
    $this = $this || Object.create(VertexLayout.prototype);
    VertexLayout.call($this, toList(attributes), null);
    return $this;
  }
  function VertexLayout_init_1(attributes, layoutSize, $this) {
    if (layoutSize === void 0)
      layoutSize = null;
    $this = $this || Object.create(VertexLayout.prototype);
    VertexLayout.call($this, toList(attributes), layoutSize);
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
  AGFactorySoftware.prototype.create_s8jyv4$ = function (nativeControl) {
    var tmp$, tmp$_0;
    return new AGSoftware((tmp$_0 = Kotlin.isType(tmp$ = nativeControl, Bitmap32) ? tmp$ : null) != null ? tmp$_0 : new Bitmap32(640, 480));
  };
  AGFactorySoftware.prototype.createFastWindow_3m52m6$ = function (title, width, height) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  AGFactorySoftware.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGFactorySoftware',
    interfaces: [AGFactory]
  };
  function AGSoftware(bitmap) {
    AG.call(this);
    this.bitmap = bitmap;
    this.nativeComponent_wz502q$_0 = this.bitmap;
    this.ready();
  }
  Object.defineProperty(AGSoftware.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_wz502q$_0;
    }
  });
  AGSoftware.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGSoftware',
    interfaces: [AG]
  };
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korag = package$soywiz.korag || (package$soywiz.korag = {});
  package$korag.AGFactory = AGFactory;
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
  AG.Scissor = AG$Scissor;
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
  Object.defineProperty(AG$TextureKind, 'RGBA', {
    get: AG$TextureKind$RGBA_getInstance
  });
  Object.defineProperty(AG$TextureKind, 'LUMINANCE', {
    get: AG$TextureKind$LUMINANCE_getInstance
  });
  AG.TextureKind = AG$TextureKind;
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
  Object.defineProperty(AG$DrawType, 'POINTS', {
    get: AG$DrawType$POINTS_getInstance
  });
  Object.defineProperty(AG$DrawType, 'LINE_STRIP', {
    get: AG$DrawType$LINE_STRIP_getInstance
  });
  Object.defineProperty(AG$DrawType, 'LINE_LOOP', {
    get: AG$DrawType$LINE_LOOP_getInstance
  });
  Object.defineProperty(AG$DrawType, 'LINES', {
    get: AG$DrawType$LINES_getInstance
  });
  Object.defineProperty(AG$DrawType, 'TRIANGLES', {
    get: AG$DrawType$TRIANGLES_getInstance
  });
  Object.defineProperty(AG$DrawType, 'TRIANGLE_STRIP', {
    get: AG$DrawType$TRIANGLE_STRIP_getInstance
  });
  Object.defineProperty(AG$DrawType, 'TRIANGLE_FAN', {
    get: AG$DrawType$TRIANGLE_FAN_getInstance
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
  AG.RenderState = AG$RenderState;
  AG.StencilState = AG$StencilState;
  AG.RenderBuffer = AG$RenderBuffer;
  AG.RenderTexture = AG$RenderTexture;
  $$importsForInline$$['korag-js'] = _;
  $$importsForInline$$['korim-js'] = $module$korim_js;
  $$importsForInline$$['korma-js'] = $module$korma_js;
  package$korag.AG = AG;
  $$importsForInline$$['klogger-js'] = $module$klogger_js;
  Object.defineProperty(package$korag, 'DefaultShaders', {
    get: DefaultShaders_getInstance
  });
  LogAG.LogTexture = LogAG$LogTexture;
  LogAG.LogBuffer = LogAG$LogBuffer;
  LogAG.LogRenderBuffer = LogAG$LogRenderBuffer;
  var package$log = package$korag.log || (package$korag.log = {});
  package$log.LogAG = LogAG;
  var package$shader = package$korag.shader || (package$korag.shader = {});
  var package$gl = package$shader.gl || (package$shader.gl = {});
  package$gl.toNewGlslString_9hqjge$ = toNewGlslString;
  package$gl.toGlSlString_chci2g$ = toGlSlString;
  package$gl.toGlSlString_jdx5zw$ = toGlSlString_0;
  package$gl.GlslGenerator = GlslGenerator;
  package$gl.toGlSl_twd9hr$ = toGlSl;
  Object.defineProperty(VarKind, 'BYTE', {
    get: VarKind$BYTE_getInstance
  });
  Object.defineProperty(VarKind, 'UNSIGNED_BYTE', {
    get: VarKind$UNSIGNED_BYTE_getInstance
  });
  Object.defineProperty(VarKind, 'SHORT', {
    get: VarKind$SHORT_getInstance
  });
  Object.defineProperty(VarKind, 'UNSIGNED_SHORT', {
    get: VarKind$UNSIGNED_SHORT_getInstance
  });
  Object.defineProperty(VarKind, 'INT', {
    get: VarKind$INT_getInstance
  });
  Object.defineProperty(VarKind, 'FLOAT', {
    get: VarKind$FLOAT_getInstance
  });
  package$shader.VarKind = VarKind;
  Object.defineProperty(VarType, 'VOID', {
    get: VarType$VOID_getInstance
  });
  Object.defineProperty(VarType, 'Mat4', {
    get: VarType$Mat4_getInstance
  });
  Object.defineProperty(VarType, 'TextureUnit', {
    get: VarType$TextureUnit_getInstance
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
  Object.defineProperty(VarType, 'Short1', {
    get: VarType$Short1_getInstance
  });
  Object.defineProperty(VarType, 'Short2', {
    get: VarType$Short2_getInstance
  });
  Object.defineProperty(VarType, 'Short3', {
    get: VarType$Short3_getInstance
  });
  Object.defineProperty(VarType, 'Short4', {
    get: VarType$Short4_getInstance
  });
  Object.defineProperty(VarType, 'Bool1', {
    get: VarType$Bool1_getInstance
  });
  Object.defineProperty(VarType, 'Byte4', {
    get: VarType$Byte4_getInstance
  });
  Object.defineProperty(VarType, 'SByte1', {
    get: VarType$SByte1_getInstance
  });
  Object.defineProperty(VarType, 'SByte2', {
    get: VarType$SByte2_getInstance
  });
  Object.defineProperty(VarType, 'SByte3', {
    get: VarType$SByte3_getInstance
  });
  Object.defineProperty(VarType, 'SByte4', {
    get: VarType$SByte4_getInstance
  });
  Object.defineProperty(VarType, 'UByte1', {
    get: VarType$UByte1_getInstance
  });
  Object.defineProperty(VarType, 'UByte2', {
    get: VarType$UByte2_getInstance
  });
  Object.defineProperty(VarType, 'UByte3', {
    get: VarType$UByte3_getInstance
  });
  Object.defineProperty(VarType, 'UByte4', {
    get: VarType$UByte4_getInstance
  });
  Object.defineProperty(VarType, 'SShort1', {
    get: VarType$SShort1_getInstance
  });
  Object.defineProperty(VarType, 'SShort2', {
    get: VarType$SShort2_getInstance
  });
  Object.defineProperty(VarType, 'SShort3', {
    get: VarType$SShort3_getInstance
  });
  Object.defineProperty(VarType, 'SShort4', {
    get: VarType$SShort4_getInstance
  });
  Object.defineProperty(VarType, 'UShort1', {
    get: VarType$UShort1_getInstance
  });
  Object.defineProperty(VarType, 'UShort2', {
    get: VarType$UShort2_getInstance
  });
  Object.defineProperty(VarType, 'UShort3', {
    get: VarType$UShort3_getInstance
  });
  Object.defineProperty(VarType, 'UShort4', {
    get: VarType$UShort4_getInstance
  });
  Object.defineProperty(VarType, 'SInt1', {
    get: VarType$SInt1_getInstance
  });
  Object.defineProperty(VarType, 'SInt2', {
    get: VarType$SInt2_getInstance
  });
  Object.defineProperty(VarType, 'SInt3', {
    get: VarType$SInt3_getInstance
  });
  Object.defineProperty(VarType, 'SInt4', {
    get: VarType$SInt4_getInstance
  });
  Object.defineProperty(VarType, 'Companion', {
    get: VarType$Companion_getInstance
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
  package$shader.Attribute_init_do1xv$ = Attribute_init;
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
  package$shader.VertexLayout_init_agxe9a$ = VertexLayout_init;
  package$shader.VertexLayout_init_f1u95s$ = VertexLayout_init_0;
  package$shader.VertexLayout_init_hub3qn$ = VertexLayout_init_1;
  package$shader.VertexLayout = VertexLayout;
  var package$software = package$korag.software || (package$korag.software = {});
  package$software.AGFactorySoftware = AGFactorySoftware;
  package$software.AGSoftware = AGSoftware;
  logger = Logger.Companion.invoke_61zpoe$('DefaultShaders');
  Kotlin.defineModule('korag-js', _);
  return _;
}));

//# sourceMappingURL=korag-js.js.map
