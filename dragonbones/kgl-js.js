(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kmem-js', 'korim-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kmem-js'), require('korim-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kgl-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kgl-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'kgl-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'kgl-js'.");
    }
    if (typeof this['korim-js'] === 'undefined') {
      throw new Error("Error loading module 'kgl-js'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'kgl-js'.");
    }
    root['kgl-js'] = factory(typeof this['kgl-js'] === 'undefined' ? {} : this['kgl-js'], kotlin, this['kmem-js'], this['korim-js']);
  }
}(this, function (_, Kotlin, $module$kmem_js, $module$korim_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toByte = Kotlin.toByte;
  var toChar = Kotlin.toChar;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var KmlNativeBuffer_init = $module$kmem_js.com.soywiz.kmem.KmlNativeBuffer_init_za3lpa$;
  var Unit = Kotlin.kotlin.Unit;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var getCallableRef = Kotlin.getCallableRef;
  var toString = Kotlin.toString;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var HtmlNativeImage = $module$korim_js.com.soywiz.korim.format.HtmlNativeImage;
  var throwCCE = Kotlin.throwCCE;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var reversed = Kotlin.kotlin.ranges.reversed_zf1xzc$;
  var toMutableList = Kotlin.kotlin.collections.toMutableList_7wnvza$;
  KmlGlDummy.prototype = Object.create(KmlGl.prototype);
  KmlGlDummy.prototype.constructor = KmlGlDummy;
  KmlGlException.prototype = Object.create(RuntimeException.prototype);
  KmlGlException.prototype.constructor = KmlGlException;
  KmlGlProxy.prototype = Object.create(KmlGl.prototype);
  KmlGlProxy.prototype.constructor = KmlGlProxy;
  LogKmlGlProxy.prototype = Object.create(KmlGlProxy.prototype);
  LogKmlGlProxy.prototype.constructor = LogKmlGlProxy;
  CheckErrorsKmlGlProxy.prototype = Object.create(KmlGlProxy.prototype);
  CheckErrorsKmlGlProxy.prototype.constructor = CheckErrorsKmlGlProxy;
  KmlGlJsCanvas.prototype = Object.create(KmlGl.prototype);
  KmlGlJsCanvas.prototype.constructor = KmlGlJsCanvas;
  function toAsciiString($receiver) {
    var tmp$;
    var out = '';
    tmp$ = $receiver.mem.byteLength;
    for (var n = 0; n < tmp$; n++) {
      var b = $receiver.getByte_za3lpa$(n);
      if (b === toByte(0))
        break;
      out += String.fromCharCode(toChar(b));
    }
    return out;
  }
  function putAsciiString($receiver, str) {
    var tmp$, tmp$_0, tmp$_1;
    var n = 0;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      if ($receiver.mem.byteLength >= n) {
        $receiver.setByte_6t1wet$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0), toByte(c | 0));
      }
    }
    if ($receiver.mem.byteLength >= n) {
      $receiver.setByte_6t1wet$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), toByte(0));
    }
    return $receiver;
  }
  function kmlByteBufferOf(values) {
    var $receiver = KmlNativeBuffer_init(values.length * 1 | 0);
    for (var n = 0; n < values.length; n++)
      $receiver.setByte_6t1wet$(n, values[n]);
    return $receiver;
  }
  function kmlShortBufferOf(values) {
    var $receiver = KmlNativeBuffer_init(values.length * 2 | 0);
    for (var n = 0; n < values.length; n++)
      $receiver.setShort_2bqt6h$(n, values[n]);
    return $receiver;
  }
  function kmlIntBufferOf(values) {
    var $receiver = KmlNativeBuffer_init(values.length * 4 | 0);
    for (var n = 0; n < values.length; n++)
      $receiver.setInt_vux9f0$(n, values[n]);
    return $receiver;
  }
  function kmlFloatBufferOf(values) {
    var $receiver = KmlNativeBuffer_init(values.length * 4 | 0);
    for (var n = 0; n < values.length; n++)
      $receiver.setFloat_24o109$(n, values[n]);
    return $receiver;
  }
  var DataBufferAlloc = defineInlineFunction('kgl-js.com.soywiz.kgl.DataBufferAlloc_poguz7$', wrapFunction(function () {
    var KmlNativeBuffer_init = _.$$importsForInline$$['kmem-js'].com.soywiz.kmem.KmlNativeBuffer_init_za3lpa$;
    return function (size, callback) {
      var buffer = KmlNativeBuffer_init(size);
      try {
        return callback(buffer);
      }
      finally {
      }
    };
  }));
  function toTempBuffer($receiver, callback) {
    var buffer = KmlNativeBuffer_init($receiver.length);
    var ints = buffer.arrayInt;
    for (var n = 0; n !== $receiver.length; ++n) {
      ints[n] = $receiver[n];
    }
    return callback(buffer);
  }
  function KmlGl() {
    this.DEPTH_BUFFER_BIT = 256;
    this.STENCIL_BUFFER_BIT = 1024;
    this.COLOR_BUFFER_BIT = 16384;
    this.FALSE = 0;
    this.TRUE = 1;
    this.POINTS = 0;
    this.LINES = 1;
    this.LINE_LOOP = 2;
    this.LINE_STRIP = 3;
    this.TRIANGLES = 4;
    this.TRIANGLE_STRIP = 5;
    this.TRIANGLE_FAN = 6;
    this.ZERO = 0;
    this.ONE = 1;
    this.SRC_COLOR = 768;
    this.ONE_MINUS_SRC_COLOR = 769;
    this.SRC_ALPHA = 770;
    this.ONE_MINUS_SRC_ALPHA = 771;
    this.DST_ALPHA = 772;
    this.ONE_MINUS_DST_ALPHA = 773;
    this.DST_COLOR = 774;
    this.ONE_MINUS_DST_COLOR = 775;
    this.SRC_ALPHA_SATURATE = 776;
    this.FUNC_ADD = 32774;
    this.BLEND_EQUATION = 32777;
    this.BLEND_EQUATION_RGB = 32777;
    this.BLEND_EQUATION_ALPHA = 34877;
    this.FUNC_SUBTRACT = 32778;
    this.FUNC_REVERSE_SUBTRACT = 32779;
    this.BLEND_DST_RGB = 32968;
    this.BLEND_SRC_RGB = 32969;
    this.BLEND_DST_ALPHA = 32970;
    this.BLEND_SRC_ALPHA = 32971;
    this.CONSTANT_COLOR = 32769;
    this.ONE_MINUS_CONSTANT_COLOR = 32770;
    this.CONSTANT_ALPHA = 32771;
    this.ONE_MINUS_CONSTANT_ALPHA = 32772;
    this.BLEND_COLOR = 32773;
    this.ARRAY_BUFFER = 34962;
    this.ELEMENT_ARRAY_BUFFER = 34963;
    this.ARRAY_BUFFER_BINDING = 34964;
    this.ELEMENT_ARRAY_BUFFER_BINDING = 34965;
    this.STREAM_DRAW = 35040;
    this.STATIC_DRAW = 35044;
    this.DYNAMIC_DRAW = 35048;
    this.BUFFER_SIZE = 34660;
    this.BUFFER_USAGE = 34661;
    this.CURRENT_VERTEX_ATTRIB = 34342;
    this.FRONT = 1028;
    this.BACK = 1029;
    this.FRONT_AND_BACK = 1032;
    this.TEXTURE_2D = 3553;
    this.CULL_FACE = 2884;
    this.BLEND = 3042;
    this.DITHER = 3024;
    this.STENCIL_TEST = 2960;
    this.DEPTH_TEST = 2929;
    this.SCISSOR_TEST = 3089;
    this.POLYGON_OFFSET_FILL = 32823;
    this.SAMPLE_ALPHA_TO_COVERAGE = 32926;
    this.SAMPLE_COVERAGE = 32928;
    this.NO_ERROR = 0;
    this.INVALID_ENUM = 1280;
    this.INVALID_VALUE = 1281;
    this.INVALID_OPERATION = 1282;
    this.OUT_OF_MEMORY = 1285;
    this.CW = 2304;
    this.CCW = 2305;
    this.LINE_WIDTH = 2849;
    this.ALIASED_POINT_SIZE_RANGE = 33901;
    this.ALIASED_LINE_WIDTH_RANGE = 33902;
    this.CULL_FACE_MODE = 2885;
    this.FRONT_FACE = 2886;
    this.DEPTH_RANGE = 2928;
    this.DEPTH_WRITEMASK = 2930;
    this.DEPTH_CLEAR_VALUE = 2931;
    this.DEPTH_FUNC = 2932;
    this.STENCIL_CLEAR_VALUE = 2961;
    this.STENCIL_FUNC = 2962;
    this.STENCIL_FAIL = 2964;
    this.STENCIL_PASS_DEPTH_FAIL = 2965;
    this.STENCIL_PASS_DEPTH_PASS = 2966;
    this.STENCIL_REF = 2967;
    this.STENCIL_VALUE_MASK = 2963;
    this.STENCIL_WRITEMASK = 2968;
    this.STENCIL_BACK_FUNC = 34816;
    this.STENCIL_BACK_FAIL = 34817;
    this.STENCIL_BACK_PASS_DEPTH_FAIL = 34818;
    this.STENCIL_BACK_PASS_DEPTH_PASS = 34819;
    this.STENCIL_BACK_REF = 36003;
    this.STENCIL_BACK_VALUE_MASK = 36004;
    this.STENCIL_BACK_WRITEMASK = 36005;
    this.VIEWPORT = 2978;
    this.SCISSOR_BOX = 3088;
    this.COLOR_CLEAR_VALUE = 3106;
    this.COLOR_WRITEMASK = 3107;
    this.UNPACK_ALIGNMENT = 3317;
    this.PACK_ALIGNMENT = 3333;
    this.MAX_TEXTURE_SIZE = 3379;
    this.MAX_VIEWPORT_DIMS = 3386;
    this.SUBPIXEL_BITS = 3408;
    this.RED_BITS = 3410;
    this.GREEN_BITS = 3411;
    this.BLUE_BITS = 3412;
    this.ALPHA_BITS = 3413;
    this.DEPTH_BITS = 3414;
    this.STENCIL_BITS = 3415;
    this.POLYGON_OFFSET_UNITS = 10752;
    this.POLYGON_OFFSET_FACTOR = 32824;
    this.TEXTURE_BINDING_2D = 32873;
    this.SAMPLE_BUFFERS = 32936;
    this.SAMPLES = 32937;
    this.SAMPLE_COVERAGE_VALUE = 32938;
    this.SAMPLE_COVERAGE_INVERT = 32939;
    this.NUM_COMPRESSED_TEXTURE_FORMATS = 34466;
    this.COMPRESSED_TEXTURE_FORMATS = 34467;
    this.DONT_CARE = 4352;
    this.FASTEST = 4353;
    this.NICEST = 4354;
    this.GENERATE_MIPMAP_HINT = 33170;
    this.BYTE = 5120;
    this.UNSIGNED_BYTE = 5121;
    this.SHORT = 5122;
    this.UNSIGNED_SHORT = 5123;
    this.INT = 5124;
    this.UNSIGNED_INT = 5125;
    this.FLOAT = 5126;
    this.FIXED = 5132;
    this.DEPTH_COMPONENT = 6402;
    this.ALPHA = 6406;
    this.RGB = 6407;
    this.RGBA = 6408;
    this.LUMINANCE = 6409;
    this.LUMINANCE_ALPHA = 6410;
    this.UNSIGNED_SHORT_4_4_4_4 = 32819;
    this.UNSIGNED_SHORT_5_5_5_1 = 32820;
    this.UNSIGNED_SHORT_5_6_5 = 33635;
    this.FRAGMENT_SHADER = 35632;
    this.VERTEX_SHADER = 35633;
    this.MAX_VERTEX_ATTRIBS = 34921;
    this.MAX_VERTEX_UNIFORM_VECTORS = 36347;
    this.MAX_VARYING_VECTORS = 36348;
    this.MAX_COMBINED_TEXTURE_IMAGE_UNITS = 35661;
    this.MAX_VERTEX_TEXTURE_IMAGE_UNITS = 35660;
    this.MAX_TEXTURE_IMAGE_UNITS = 34930;
    this.MAX_FRAGMENT_UNIFORM_VECTORS = 36349;
    this.SHADER_TYPE = 35663;
    this.DELETE_STATUS = 35712;
    this.LINK_STATUS = 35714;
    this.VALIDATE_STATUS = 35715;
    this.ATTACHED_SHADERS = 35717;
    this.ACTIVE_UNIFORMS = 35718;
    this.ACTIVE_UNIFORM_MAX_LENGTH = 35719;
    this.ACTIVE_ATTRIBUTES = 35721;
    this.ACTIVE_ATTRIBUTE_MAX_LENGTH = 35722;
    this.SHADING_LANGUAGE_VERSION = 35724;
    this.CURRENT_PROGRAM = 35725;
    this.NEVER = 512;
    this.LESS = 513;
    this.EQUAL = 514;
    this.LEQUAL = 515;
    this.GREATER = 516;
    this.NOTEQUAL = 517;
    this.GEQUAL = 518;
    this.ALWAYS = 519;
    this.KEEP = 7680;
    this.REPLACE = 7681;
    this.INCR = 7682;
    this.DECR = 7683;
    this.INVERT = 5386;
    this.INCR_WRAP = 34055;
    this.DECR_WRAP = 34056;
    this.VENDOR = 7936;
    this.RENDERER = 7937;
    this.VERSION = 7938;
    this.EXTENSIONS = 7939;
    this.NEAREST = 9728;
    this.LINEAR = 9729;
    this.NEAREST_MIPMAP_NEAREST = 9984;
    this.LINEAR_MIPMAP_NEAREST = 9985;
    this.NEAREST_MIPMAP_LINEAR = 9986;
    this.LINEAR_MIPMAP_LINEAR = 9987;
    this.TEXTURE_MAG_FILTER = 10240;
    this.TEXTURE_MIN_FILTER = 10241;
    this.TEXTURE_WRAP_S = 10242;
    this.TEXTURE_WRAP_T = 10243;
    this.TEXTURE = 5890;
    this.TEXTURE_CUBE_MAP = 34067;
    this.TEXTURE_BINDING_CUBE_MAP = 34068;
    this.TEXTURE_CUBE_MAP_POSITIVE_X = 34069;
    this.TEXTURE_CUBE_MAP_NEGATIVE_X = 34070;
    this.TEXTURE_CUBE_MAP_POSITIVE_Y = 34071;
    this.TEXTURE_CUBE_MAP_NEGATIVE_Y = 34072;
    this.TEXTURE_CUBE_MAP_POSITIVE_Z = 34073;
    this.TEXTURE_CUBE_MAP_NEGATIVE_Z = 34074;
    this.MAX_CUBE_MAP_TEXTURE_SIZE = 34076;
    this.TEXTURE0 = 33984;
    this.TEXTURE1 = 33985;
    this.TEXTURE2 = 33986;
    this.TEXTURE3 = 33987;
    this.TEXTURE4 = 33988;
    this.TEXTURE5 = 33989;
    this.TEXTURE6 = 33990;
    this.TEXTURE7 = 33991;
    this.TEXTURE8 = 33992;
    this.TEXTURE9 = 33993;
    this.TEXTURE10 = 33994;
    this.TEXTURE11 = 33995;
    this.TEXTURE12 = 33996;
    this.TEXTURE13 = 33997;
    this.TEXTURE14 = 33998;
    this.TEXTURE15 = 33999;
    this.TEXTURE16 = 34000;
    this.TEXTURE17 = 34001;
    this.TEXTURE18 = 34002;
    this.TEXTURE19 = 34003;
    this.TEXTURE20 = 34004;
    this.TEXTURE21 = 34005;
    this.TEXTURE22 = 34006;
    this.TEXTURE23 = 34007;
    this.TEXTURE24 = 34008;
    this.TEXTURE25 = 34009;
    this.TEXTURE26 = 34010;
    this.TEXTURE27 = 34011;
    this.TEXTURE28 = 34012;
    this.TEXTURE29 = 34013;
    this.TEXTURE30 = 34014;
    this.TEXTURE31 = 34015;
    this.ACTIVE_TEXTURE = 34016;
    this.REPEAT = 10497;
    this.CLAMP_TO_EDGE = 33071;
    this.MIRRORED_REPEAT = 33648;
    this.FLOAT_VEC2 = 35664;
    this.FLOAT_VEC3 = 35665;
    this.FLOAT_VEC4 = 35666;
    this.INT_VEC2 = 35667;
    this.INT_VEC3 = 35668;
    this.INT_VEC4 = 35669;
    this.BOOL = 35670;
    this.BOOL_VEC2 = 35671;
    this.BOOL_VEC3 = 35672;
    this.BOOL_VEC4 = 35673;
    this.FLOAT_MAT2 = 35674;
    this.FLOAT_MAT3 = 35675;
    this.FLOAT_MAT4 = 35676;
    this.SAMPLER_2D = 35678;
    this.SAMPLER_CUBE = 35680;
    this.VERTEX_ATTRIB_ARRAY_ENABLED = 34338;
    this.VERTEX_ATTRIB_ARRAY_SIZE = 34339;
    this.VERTEX_ATTRIB_ARRAY_STRIDE = 34340;
    this.VERTEX_ATTRIB_ARRAY_TYPE = 34341;
    this.VERTEX_ATTRIB_ARRAY_NORMALIZED = 34922;
    this.VERTEX_ATTRIB_ARRAY_POINTER = 34373;
    this.VERTEX_ATTRIB_ARRAY_BUFFER_BINDING = 34975;
    this.IMPLEMENTATION_COLOR_READ_TYPE = 35738;
    this.IMPLEMENTATION_COLOR_READ_FORMAT = 35739;
    this.COMPILE_STATUS = 35713;
    this.INFO_LOG_LENGTH = 35716;
    this.SHADER_SOURCE_LENGTH = 35720;
    this.SHADER_COMPILER = 36346;
    this.SHADER_BINARY_FORMATS = 36344;
    this.NUM_SHADER_BINARY_FORMATS = 36345;
    this.LOW_FLOAT = 36336;
    this.MEDIUM_FLOAT = 36337;
    this.HIGH_FLOAT = 36338;
    this.LOW_INT = 36339;
    this.MEDIUM_INT = 36340;
    this.HIGH_INT = 36341;
    this.FRAMEBUFFER = 36160;
    this.RENDERBUFFER = 36161;
    this.RGBA4 = 32854;
    this.RGB5_A1 = 32855;
    this.RGB565 = 36194;
    this.DEPTH_COMPONENT16 = 33189;
    this.STENCIL_INDEX8 = 36168;
    this.RENDERBUFFER_WIDTH = 36162;
    this.RENDERBUFFER_HEIGHT = 36163;
    this.RENDERBUFFER_INTERNAL_FORMAT = 36164;
    this.RENDERBUFFER_RED_SIZE = 36176;
    this.RENDERBUFFER_GREEN_SIZE = 36177;
    this.RENDERBUFFER_BLUE_SIZE = 36178;
    this.RENDERBUFFER_ALPHA_SIZE = 36179;
    this.RENDERBUFFER_DEPTH_SIZE = 36180;
    this.RENDERBUFFER_STENCIL_SIZE = 36181;
    this.FRAMEBUFFER_ATTACHMENT_OBJECT_TYPE = 36048;
    this.FRAMEBUFFER_ATTACHMENT_OBJECT_NAME = 36049;
    this.FRAMEBUFFER_ATTACHMENT_TEXTURE_LEVEL = 36050;
    this.FRAMEBUFFER_ATTACHMENT_TEXTURE_CUBE_MAP_FACE = 36051;
    this.COLOR_ATTACHMENT0 = 36064;
    this.DEPTH_ATTACHMENT = 36096;
    this.STENCIL_ATTACHMENT = 36128;
    this.NONE = 0;
    this.FRAMEBUFFER_COMPLETE = 36053;
    this.FRAMEBUFFER_INCOMPLETE_ATTACHMENT = 36054;
    this.FRAMEBUFFER_INCOMPLETE_MISSING_ATTACHMENT = 36055;
    this.FRAMEBUFFER_INCOMPLETE_DIMENSIONS = 36057;
    this.FRAMEBUFFER_UNSUPPORTED = 36061;
    this.FRAMEBUFFER_BINDING = 36006;
    this.RENDERBUFFER_BINDING = 36007;
    this.MAX_RENDERBUFFER_SIZE = 34024;
    this.INVALID_FRAMEBUFFER_OPERATION = 1286;
  }
  KmlGl.prototype.startFrame = function () {
  };
  KmlGl.prototype.endFrame = function () {
  };
  KmlGl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGl',
    interfaces: []
  };
  function KmlGlDummy() {
    KmlGlDummy_instance = this;
    KmlGl.call(this);
  }
  KmlGlDummy.prototype.activeTexture_za3lpa$ = function (texture) {
  };
  KmlGlDummy.prototype.attachShader_vux9f0$ = function (program, shader) {
  };
  KmlGlDummy.prototype.bindAttribLocation_98i29q$ = function (program, index, name) {
  };
  KmlGlDummy.prototype.bindBuffer_vux9f0$ = function (target, buffer) {
  };
  KmlGlDummy.prototype.bindFramebuffer_vux9f0$ = function (target, framebuffer) {
  };
  KmlGlDummy.prototype.bindRenderbuffer_vux9f0$ = function (target, renderbuffer) {
  };
  KmlGlDummy.prototype.bindTexture_vux9f0$ = function (target, texture) {
  };
  KmlGlDummy.prototype.blendColor_7b5o5w$ = function (red, green, blue, alpha) {
  };
  KmlGlDummy.prototype.blendEquation_za3lpa$ = function (mode) {
  };
  KmlGlDummy.prototype.blendEquationSeparate_vux9f0$ = function (modeRGB, modeAlpha) {
  };
  KmlGlDummy.prototype.blendFunc_vux9f0$ = function (sfactor, dfactor) {
  };
  KmlGlDummy.prototype.blendFuncSeparate_tjonv8$ = function (sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha) {
  };
  KmlGlDummy.prototype.bufferData_h17dt1$ = function (target, size, data, usage) {
  };
  KmlGlDummy.prototype.bufferSubData_ebfds9$ = function (target, offset, size, data) {
  };
  KmlGlDummy.prototype.checkFramebufferStatus_za3lpa$ = function (target) {
    return 0;
  };
  KmlGlDummy.prototype.clear_za3lpa$ = function (mask) {
  };
  KmlGlDummy.prototype.clearColor_7b5o5w$ = function (red, green, blue, alpha) {
  };
  KmlGlDummy.prototype.clearDepthf_mx4ult$ = function (d) {
  };
  KmlGlDummy.prototype.clearStencil_za3lpa$ = function (s) {
  };
  KmlGlDummy.prototype.colorMask_nyyhg$ = function (red, green, blue, alpha) {
  };
  KmlGlDummy.prototype.compileShader_za3lpa$ = function (shader) {
  };
  KmlGlDummy.prototype.compressedTexImage2D_uh7f9l$ = function (target, level, internalformat, width, height, border, imageSize, data) {
  };
  KmlGlDummy.prototype.compressedTexSubImage2D_yd22hf$ = function (target, level, xoffset, yoffset, width, height, format, imageSize, data) {
  };
  KmlGlDummy.prototype.copyTexImage2D_wrdw30$ = function (target, level, internalformat, x, y, width, height, border) {
  };
  KmlGlDummy.prototype.copyTexSubImage2D_wrdw30$ = function (target, level, xoffset, yoffset, x, y, width, height) {
  };
  KmlGlDummy.prototype.createProgram = function () {
    return 0;
  };
  KmlGlDummy.prototype.createShader_za3lpa$ = function (type) {
    return 0;
  };
  KmlGlDummy.prototype.cullFace_za3lpa$ = function (mode) {
  };
  KmlGlDummy.prototype.deleteBuffers_h86ci1$ = function (n, items) {
  };
  KmlGlDummy.prototype.deleteFramebuffers_h86ci1$ = function (n, items) {
  };
  KmlGlDummy.prototype.deleteProgram_za3lpa$ = function (program) {
  };
  KmlGlDummy.prototype.deleteRenderbuffers_h86ci1$ = function (n, items) {
  };
  KmlGlDummy.prototype.deleteShader_za3lpa$ = function (shader) {
  };
  KmlGlDummy.prototype.deleteTextures_h86ci1$ = function (n, items) {
  };
  KmlGlDummy.prototype.depthFunc_za3lpa$ = function (func) {
  };
  KmlGlDummy.prototype.depthMask_6taknv$ = function (flag) {
  };
  KmlGlDummy.prototype.depthRangef_dleff0$ = function (n, f) {
  };
  KmlGlDummy.prototype.detachShader_vux9f0$ = function (program, shader) {
  };
  KmlGlDummy.prototype.disable_za3lpa$ = function (cap) {
  };
  KmlGlDummy.prototype.disableVertexAttribArray_za3lpa$ = function (index) {
  };
  KmlGlDummy.prototype.drawArrays_qt1dr2$ = function (mode, first, count) {
  };
  KmlGlDummy.prototype.drawElements_tjonv8$ = function (mode, count, type, indices) {
  };
  KmlGlDummy.prototype.enable_za3lpa$ = function (cap) {
  };
  KmlGlDummy.prototype.enableVertexAttribArray_za3lpa$ = function (index) {
  };
  KmlGlDummy.prototype.finish = function () {
  };
  KmlGlDummy.prototype.flush = function () {
  };
  KmlGlDummy.prototype.framebufferRenderbuffer_tjonv8$ = function (target, attachment, renderbuffertarget, renderbuffer) {
  };
  KmlGlDummy.prototype.framebufferTexture2D_4qozqa$ = function (target, attachment, textarget, texture, level) {
  };
  KmlGlDummy.prototype.frontFace_za3lpa$ = function (mode) {
  };
  KmlGlDummy.prototype.genBuffers_h86ci1$ = function (n, buffers) {
  };
  KmlGlDummy.prototype.generateMipmap_za3lpa$ = function (target) {
  };
  KmlGlDummy.prototype.genFramebuffers_h86ci1$ = function (n, framebuffers) {
  };
  KmlGlDummy.prototype.genRenderbuffers_h86ci1$ = function (n, renderbuffers) {
  };
  KmlGlDummy.prototype.genTextures_h86ci1$ = function (n, textures) {
  };
  KmlGlDummy.prototype.getActiveAttrib_2j7v7i$ = function (program, index, bufSize, length, size, type, name) {
  };
  KmlGlDummy.prototype.getActiveUniform_2j7v7i$ = function (program, index, bufSize, length, size, type, name) {
  };
  KmlGlDummy.prototype.getAttachedShaders_o7ptx6$ = function (program, maxCount, count, shaders) {
  };
  KmlGlDummy.prototype.getAttribLocation_19mbxw$ = function (program, name) {
    return 0;
  };
  KmlGlDummy.prototype.getUniformLocation_19mbxw$ = function (program, name) {
    return 0;
  };
  KmlGlDummy.prototype.getBooleanv_h86ci1$ = function (pname, data) {
  };
  KmlGlDummy.prototype.getBufferParameteriv_yd7u0d$ = function (target, pname, params) {
  };
  KmlGlDummy.prototype.getError = function () {
    return 0;
  };
  KmlGlDummy.prototype.getFloatv_h86ci1$ = function (pname, data) {
  };
  KmlGlDummy.prototype.getFramebufferAttachmentParameteriv_ebfds9$ = function (target, attachment, pname, params) {
  };
  KmlGlDummy.prototype.getIntegerv_h86ci1$ = function (pname, data) {
  };
  KmlGlDummy.prototype.getProgramInfoLog_o7ptx6$ = function (program, bufSize, length, infoLog) {
  };
  KmlGlDummy.prototype.getRenderbufferParameteriv_yd7u0d$ = function (target, pname, params) {
  };
  KmlGlDummy.prototype.getProgramiv_yd7u0d$ = function (program, pname, params) {
  };
  KmlGlDummy.prototype.getShaderiv_yd7u0d$ = function (shader, pname, params) {
  };
  KmlGlDummy.prototype.getShaderInfoLog_o7ptx6$ = function (shader, bufSize, length, infoLog) {
  };
  KmlGlDummy.prototype.getShaderPrecisionFormat_o7ptx6$ = function (shadertype, precisiontype, range, precision) {
  };
  KmlGlDummy.prototype.getShaderSource_o7ptx6$ = function (shader, bufSize, length, source) {
  };
  KmlGlDummy.prototype.getString_za3lpa$ = function (name) {
    return '';
  };
  KmlGlDummy.prototype.getTexParameterfv_yd7u0d$ = function (target, pname, params) {
  };
  KmlGlDummy.prototype.getTexParameteriv_yd7u0d$ = function (target, pname, params) {
  };
  KmlGlDummy.prototype.getUniformfv_yd7u0d$ = function (program, location, params) {
  };
  KmlGlDummy.prototype.getUniformiv_yd7u0d$ = function (program, location, params) {
  };
  KmlGlDummy.prototype.getVertexAttribfv_yd7u0d$ = function (index, pname, params) {
  };
  KmlGlDummy.prototype.getVertexAttribiv_yd7u0d$ = function (index, pname, params) {
  };
  KmlGlDummy.prototype.getVertexAttribPointerv_yd7u0d$ = function (index, pname, pointer) {
  };
  KmlGlDummy.prototype.hint_vux9f0$ = function (target, mode) {
  };
  KmlGlDummy.prototype.isBuffer_za3lpa$ = function (buffer) {
    return false;
  };
  KmlGlDummy.prototype.isEnabled_za3lpa$ = function (cap) {
    return false;
  };
  KmlGlDummy.prototype.isFramebuffer_za3lpa$ = function (framebuffer) {
    return false;
  };
  KmlGlDummy.prototype.isProgram_za3lpa$ = function (program) {
    return false;
  };
  KmlGlDummy.prototype.isRenderbuffer_za3lpa$ = function (renderbuffer) {
    return false;
  };
  KmlGlDummy.prototype.isShader_za3lpa$ = function (shader) {
    return false;
  };
  KmlGlDummy.prototype.isTexture_za3lpa$ = function (texture) {
    return false;
  };
  KmlGlDummy.prototype.lineWidth_mx4ult$ = function (width) {
  };
  KmlGlDummy.prototype.linkProgram_za3lpa$ = function (program) {
  };
  KmlGlDummy.prototype.pixelStorei_vux9f0$ = function (pname, param) {
  };
  KmlGlDummy.prototype.polygonOffset_dleff0$ = function (factor, units) {
  };
  KmlGlDummy.prototype.readPixels_mk0vkj$ = function (x, y, width, height, format, type, pixels) {
  };
  KmlGlDummy.prototype.releaseShaderCompiler = function () {
  };
  KmlGlDummy.prototype.renderbufferStorage_tjonv8$ = function (target, internalformat, width, height) {
  };
  KmlGlDummy.prototype.sampleCoverage_8ca0d4$ = function (value, invert) {
  };
  KmlGlDummy.prototype.scissor_tjonv8$ = function (x, y, width, height) {
  };
  KmlGlDummy.prototype.shaderBinary_1o7eri$ = function (count, shaders, binaryformat, binary, length) {
  };
  KmlGlDummy.prototype.shaderSource_19mbxw$ = function (shader, string) {
  };
  KmlGlDummy.prototype.stencilFunc_qt1dr2$ = function (func, ref, mask) {
  };
  KmlGlDummy.prototype.stencilFuncSeparate_tjonv8$ = function (face, func, ref, mask) {
  };
  KmlGlDummy.prototype.stencilMask_za3lpa$ = function (mask) {
  };
  KmlGlDummy.prototype.stencilMaskSeparate_vux9f0$ = function (face, mask) {
  };
  KmlGlDummy.prototype.stencilOp_qt1dr2$ = function (fail, zfail, zpass) {
  };
  KmlGlDummy.prototype.stencilOpSeparate_tjonv8$ = function (face, sfail, dpfail, dppass) {
  };
  KmlGlDummy.prototype.texImage2D_7wol0$ = function (target, level, internalformat, width, height, border, format, type, pixels) {
  };
  KmlGlDummy.prototype.texImage2D_gqqctv$ = function (target, level, internalformat, format, type, data) {
  };
  KmlGlDummy.prototype.texParameterf_n0b4r3$ = function (target, pname, param) {
  };
  KmlGlDummy.prototype.texParameterfv_yd7u0d$ = function (target, pname, params) {
  };
  KmlGlDummy.prototype.texParameteri_qt1dr2$ = function (target, pname, param) {
  };
  KmlGlDummy.prototype.texParameteriv_yd7u0d$ = function (target, pname, params) {
  };
  KmlGlDummy.prototype.texSubImage2D_yd22hf$ = function (target, level, xoffset, yoffset, width, height, format, type, pixels) {
  };
  KmlGlDummy.prototype.uniform1f_24o109$ = function (location, v0) {
  };
  KmlGlDummy.prototype.uniform1fv_yd7u0d$ = function (location, count, value) {
  };
  KmlGlDummy.prototype.uniform1i_vux9f0$ = function (location, v0) {
  };
  KmlGlDummy.prototype.uniform1iv_yd7u0d$ = function (location, count, value) {
  };
  KmlGlDummy.prototype.uniform2f_nhq4am$ = function (location, v0, v1) {
  };
  KmlGlDummy.prototype.uniform2fv_yd7u0d$ = function (location, count, value) {
  };
  KmlGlDummy.prototype.uniform2i_qt1dr2$ = function (location, v0, v1) {
  };
  KmlGlDummy.prototype.uniform2iv_yd7u0d$ = function (location, count, value) {
  };
  KmlGlDummy.prototype.uniform3f_eyukp3$ = function (location, v0, v1, v2) {
  };
  KmlGlDummy.prototype.uniform3fv_yd7u0d$ = function (location, count, value) {
  };
  KmlGlDummy.prototype.uniform3i_tjonv8$ = function (location, v0, v1, v2) {
  };
  KmlGlDummy.prototype.uniform3iv_yd7u0d$ = function (location, count, value) {
  };
  KmlGlDummy.prototype.uniform4f_xpxj32$ = function (location, v0, v1, v2, v3) {
  };
  KmlGlDummy.prototype.uniform4fv_yd7u0d$ = function (location, count, value) {
  };
  KmlGlDummy.prototype.uniform4i_4qozqa$ = function (location, v0, v1, v2, v3) {
  };
  KmlGlDummy.prototype.uniform4iv_yd7u0d$ = function (location, count, value) {
  };
  KmlGlDummy.prototype.uniformMatrix2fv_gsjgaq$ = function (location, count, transpose, value) {
  };
  KmlGlDummy.prototype.uniformMatrix3fv_gsjgaq$ = function (location, count, transpose, value) {
  };
  KmlGlDummy.prototype.uniformMatrix4fv_gsjgaq$ = function (location, count, transpose, value) {
  };
  KmlGlDummy.prototype.useProgram_za3lpa$ = function (program) {
  };
  KmlGlDummy.prototype.validateProgram_za3lpa$ = function (program) {
  };
  KmlGlDummy.prototype.vertexAttrib1f_24o109$ = function (index, x) {
  };
  KmlGlDummy.prototype.vertexAttrib1fv_h86ci1$ = function (index, v) {
  };
  KmlGlDummy.prototype.vertexAttrib2f_nhq4am$ = function (index, x, y) {
  };
  KmlGlDummy.prototype.vertexAttrib2fv_h86ci1$ = function (index, v) {
  };
  KmlGlDummy.prototype.vertexAttrib3f_eyukp3$ = function (index, x, y, z) {
  };
  KmlGlDummy.prototype.vertexAttrib3fv_h86ci1$ = function (index, v) {
  };
  KmlGlDummy.prototype.vertexAttrib4f_xpxj32$ = function (index, x, y, z, w) {
  };
  KmlGlDummy.prototype.vertexAttrib4fv_h86ci1$ = function (index, v) {
  };
  KmlGlDummy.prototype.vertexAttribPointer_owihk5$ = function (index, size, type, normalized, stride, pointer) {
  };
  KmlGlDummy.prototype.viewport_tjonv8$ = function (x, y, width, height) {
  };
  KmlGlDummy.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KmlGlDummy',
    interfaces: [KmlGl]
  };
  var KmlGlDummy_instance = null;
  function KmlGlDummy_getInstance() {
    if (KmlGlDummy_instance === null) {
      new KmlGlDummy();
    }
    return KmlGlDummy_instance;
  }
  function KmlGlException(message) {
    RuntimeException_init(message, this);
    this.name = 'KmlGlException';
  }
  KmlGlException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlException',
    interfaces: [RuntimeException]
  };
  function getShaderiv($receiver, shader, type) {
    var it = KmlNativeBuffer_init(4);
    $receiver.getShaderiv_yd7u0d$(shader, type, it);
    return it.getInt_za3lpa$(0);
  }
  function getProgramiv($receiver, program, type) {
    var it = KmlNativeBuffer_init(4);
    $receiver.getProgramiv_yd7u0d$(program, type, it);
    return it.getInt_za3lpa$(0);
  }
  function getBooleanv($receiver, pname) {
    var it = KmlNativeBuffer_init(4);
    $receiver.getBooleanv_h86ci1$(pname, it);
    return it.get_za3lpa$(0) !== 0;
  }
  function getFloatv($receiver, pname) {
    var it = KmlNativeBuffer_init(4);
    $receiver.getFloatv_h86ci1$(pname, it);
    return it.getFloat_za3lpa$(0);
  }
  function getIntegerv($receiver, pname) {
    var it = KmlNativeBuffer_init(4);
    $receiver.getIntegerv_h86ci1$(pname, it);
    return it.getInt_za3lpa$(0);
  }
  var getInfoLog = wrapFunction(function () {
    var KmlNativeBuffer_init = $module$kmem_js.com.soywiz.kmem.KmlNativeBuffer_init_za3lpa$;
    return function ($receiver, obj, getiv, getInfoLog) {
      var size = getiv(obj, $receiver.INFO_LOG_LENGTH);
      var sizev = KmlNativeBuffer_init(4);
      var mbuffer = KmlNativeBuffer_init(size);
      getInfoLog(obj, size, sizev, mbuffer);
      return toAsciiString(mbuffer);
    };
  });
  function getShaderInfoLog($receiver, shader) {
    var getiv = getCallableRef('getShaderiv', function ($receiver, shader, type) {
      return getShaderiv($receiver, shader, type);
    }.bind(null, $receiver));
    var getInfoLog = getCallableRef('getShaderInfoLog', function ($receiver, shader, bufSize, length, infoLog) {
      return $receiver.getShaderInfoLog_o7ptx6$(shader, bufSize, length, infoLog), Unit;
    }.bind(null, $receiver));
    var size = getiv(shader, $receiver.INFO_LOG_LENGTH);
    var sizev = KmlNativeBuffer_init(4);
    var mbuffer = KmlNativeBuffer_init(size);
    getInfoLog(shader, size, sizev, mbuffer);
    return toAsciiString(mbuffer);
  }
  function getProgramInfoLog($receiver, shader) {
    var getiv = getCallableRef('getProgramiv', function ($receiver, program, type) {
      return getProgramiv($receiver, program, type);
    }.bind(null, $receiver));
    var getInfoLog = getCallableRef('getProgramInfoLog', function ($receiver, program, bufSize, length, infoLog) {
      return $receiver.getProgramInfoLog_o7ptx6$(program, bufSize, length, infoLog), Unit;
    }.bind(null, $receiver));
    var size = getiv(shader, $receiver.INFO_LOG_LENGTH);
    var sizev = KmlNativeBuffer_init(4);
    var mbuffer = KmlNativeBuffer_init(size);
    getInfoLog(shader, size, sizev, mbuffer);
    return toAsciiString(mbuffer);
  }
  function compileShaderAndCheck($receiver, shader) {
    $receiver.compileShader_za3lpa$(shader);
    if (getShaderiv($receiver, shader, $receiver.COMPILE_STATUS) !== $receiver.TRUE) {
      throw new KmlGlException(getShaderInfoLog($receiver, shader));
    }
  }
  function linkProgramAndCheck($receiver, program) {
    $receiver.linkProgram_za3lpa$(program);
    if (getProgramiv($receiver, program, $receiver.LINK_STATUS) !== $receiver.TRUE) {
      throw new KmlGlException(getProgramInfoLog($receiver, program));
    }
  }
  function getErrorString($receiver, error) {
    if (error === void 0)
      error = $receiver.getError();
    var tmp$;
    switch (error) {
      case 0:
        tmp$ = 'NO_ERROR';
        break;
      case 1280:
        tmp$ = 'INVALID_ENUM';
        break;
      case 1281:
        tmp$ = 'INVALID_VALUE';
        break;
      case 1282:
        tmp$ = 'INVALID_OPERATION';
        break;
      case 1285:
        tmp$ = 'OUT_OF_MEMORY';
        break;
      default:tmp$ = 'UNKNOWN_ERROR' + error;
        break;
    }
    return tmp$;
  }
  function KmlGlProxy(parent) {
    KmlGl.call(this);
    this.parent = parent;
  }
  KmlGlProxy.prototype.before_puj7f4$ = function (name, params) {
  };
  KmlGlProxy.prototype.after_6hosri$ = function (name, params, result) {
  };
  KmlGlProxy.prototype.activeTexture_za3lpa$ = function (texture) {
    var sparams = texture.toString();
    this.before_puj7f4$('activeTexture', sparams);
    var res = this.parent.activeTexture_za3lpa$(texture);
    this.after_6hosri$('activeTexture', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.attachShader_vux9f0$ = function (program, shader) {
    var sparams = program.toString() + ', ' + shader;
    this.before_puj7f4$('attachShader', sparams);
    var res = this.parent.attachShader_vux9f0$(program, shader);
    this.after_6hosri$('attachShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bindAttribLocation_98i29q$ = function (program, index, name) {
    var sparams = program.toString() + ', ' + index + ', ' + name;
    this.before_puj7f4$('bindAttribLocation', sparams);
    var res = this.parent.bindAttribLocation_98i29q$(program, index, name);
    this.after_6hosri$('bindAttribLocation', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bindBuffer_vux9f0$ = function (target, buffer) {
    var sparams = target.toString() + ', ' + buffer;
    this.before_puj7f4$('bindBuffer', sparams);
    var res = this.parent.bindBuffer_vux9f0$(target, buffer);
    this.after_6hosri$('bindBuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bindFramebuffer_vux9f0$ = function (target, framebuffer) {
    var sparams = target.toString() + ', ' + framebuffer;
    this.before_puj7f4$('bindFramebuffer', sparams);
    var res = this.parent.bindFramebuffer_vux9f0$(target, framebuffer);
    this.after_6hosri$('bindFramebuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bindRenderbuffer_vux9f0$ = function (target, renderbuffer) {
    var sparams = target.toString() + ', ' + renderbuffer;
    this.before_puj7f4$('bindRenderbuffer', sparams);
    var res = this.parent.bindRenderbuffer_vux9f0$(target, renderbuffer);
    this.after_6hosri$('bindRenderbuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bindTexture_vux9f0$ = function (target, texture) {
    var sparams = target.toString() + ', ' + texture;
    this.before_puj7f4$('bindTexture', sparams);
    var res = this.parent.bindTexture_vux9f0$(target, texture);
    this.after_6hosri$('bindTexture', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.blendColor_7b5o5w$ = function (red, green, blue, alpha) {
    var sparams = red.toString() + ', ' + green + ', ' + blue + ', ' + alpha;
    this.before_puj7f4$('blendColor', sparams);
    var res = this.parent.blendColor_7b5o5w$(red, green, blue, alpha);
    this.after_6hosri$('blendColor', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.blendEquation_za3lpa$ = function (mode) {
    var sparams = mode.toString();
    this.before_puj7f4$('blendEquation', sparams);
    var res = this.parent.blendEquation_za3lpa$(mode);
    this.after_6hosri$('blendEquation', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.blendEquationSeparate_vux9f0$ = function (modeRGB, modeAlpha) {
    var sparams = modeRGB.toString() + ', ' + modeAlpha;
    this.before_puj7f4$('blendEquationSeparate', sparams);
    var res = this.parent.blendEquationSeparate_vux9f0$(modeRGB, modeAlpha);
    this.after_6hosri$('blendEquationSeparate', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.blendFunc_vux9f0$ = function (sfactor, dfactor) {
    var sparams = sfactor.toString() + ', ' + dfactor;
    this.before_puj7f4$('blendFunc', sparams);
    var res = this.parent.blendFunc_vux9f0$(sfactor, dfactor);
    this.after_6hosri$('blendFunc', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.blendFuncSeparate_tjonv8$ = function (sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha) {
    var sparams = sfactorRGB.toString() + ', ' + dfactorRGB + ', ' + sfactorAlpha + ', ' + dfactorAlpha;
    this.before_puj7f4$('blendFuncSeparate', sparams);
    var res = this.parent.blendFuncSeparate_tjonv8$(sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha);
    this.after_6hosri$('blendFuncSeparate', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bufferData_h17dt1$ = function (target, size, data, usage) {
    var sparams = target.toString() + ', ' + size + ', ' + data + ', ' + usage;
    this.before_puj7f4$('bufferData', sparams);
    var res = this.parent.bufferData_h17dt1$(target, size, data, usage);
    this.after_6hosri$('bufferData', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.bufferSubData_ebfds9$ = function (target, offset, size, data) {
    var sparams = target.toString() + ', ' + offset + ', ' + size + ', ' + data;
    this.before_puj7f4$('bufferSubData', sparams);
    var res = this.parent.bufferSubData_ebfds9$(target, offset, size, data);
    this.after_6hosri$('bufferSubData', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.checkFramebufferStatus_za3lpa$ = function (target) {
    var sparams = target.toString();
    this.before_puj7f4$('checkFramebufferStatus', sparams);
    var res = this.parent.checkFramebufferStatus_za3lpa$(target);
    this.after_6hosri$('checkFramebufferStatus', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.clear_za3lpa$ = function (mask) {
    var sparams = mask.toString();
    this.before_puj7f4$('clear', sparams);
    var res = this.parent.clear_za3lpa$(mask);
    this.after_6hosri$('clear', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.clearColor_7b5o5w$ = function (red, green, blue, alpha) {
    var sparams = red.toString() + ', ' + green + ', ' + blue + ', ' + alpha;
    this.before_puj7f4$('clearColor', sparams);
    var res = this.parent.clearColor_7b5o5w$(red, green, blue, alpha);
    this.after_6hosri$('clearColor', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.clearDepthf_mx4ult$ = function (d) {
    var sparams = d.toString();
    this.before_puj7f4$('clearDepthf', sparams);
    var res = this.parent.clearDepthf_mx4ult$(d);
    this.after_6hosri$('clearDepthf', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.clearStencil_za3lpa$ = function (s) {
    var sparams = s.toString();
    this.before_puj7f4$('clearStencil', sparams);
    var res = this.parent.clearStencil_za3lpa$(s);
    this.after_6hosri$('clearStencil', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.colorMask_nyyhg$ = function (red, green, blue, alpha) {
    var sparams = red.toString() + ', ' + green + ', ' + blue + ', ' + alpha;
    this.before_puj7f4$('colorMask', sparams);
    var res = this.parent.colorMask_nyyhg$(red, green, blue, alpha);
    this.after_6hosri$('colorMask', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.compileShader_za3lpa$ = function (shader) {
    var sparams = shader.toString();
    this.before_puj7f4$('compileShader', sparams);
    var res = this.parent.compileShader_za3lpa$(shader);
    this.after_6hosri$('compileShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.compressedTexImage2D_uh7f9l$ = function (target, level, internalformat, width, height, border, imageSize, data) {
    var sparams = target.toString() + ', ' + level + ', ' + internalformat + ', ' + width + ', ' + height + ', ' + border + ', ' + imageSize + ', ' + data;
    this.before_puj7f4$('compressedTexImage2D', sparams);
    var res = this.parent.compressedTexImage2D_uh7f9l$(target, level, internalformat, width, height, border, imageSize, data);
    this.after_6hosri$('compressedTexImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.compressedTexSubImage2D_yd22hf$ = function (target, level, xoffset, yoffset, width, height, format, imageSize, data) {
    var sparams = target.toString() + ', ' + level + ', ' + xoffset + ', ' + yoffset + ', ' + width + ', ' + height + ', ' + format + ', ' + imageSize + ', ' + data;
    this.before_puj7f4$('compressedTexSubImage2D', sparams);
    var res = this.parent.compressedTexSubImage2D_yd22hf$(target, level, xoffset, yoffset, width, height, format, imageSize, data);
    this.after_6hosri$('compressedTexSubImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.copyTexImage2D_wrdw30$ = function (target, level, internalformat, x, y, width, height, border) {
    var sparams = target.toString() + ', ' + level + ', ' + internalformat + ', ' + x + ', ' + y + ', ' + width + ', ' + height + ', ' + border;
    this.before_puj7f4$('copyTexImage2D', sparams);
    var res = this.parent.copyTexImage2D_wrdw30$(target, level, internalformat, x, y, width, height, border);
    this.after_6hosri$('copyTexImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.copyTexSubImage2D_wrdw30$ = function (target, level, xoffset, yoffset, x, y, width, height) {
    var sparams = target.toString() + ', ' + level + ', ' + xoffset + ', ' + yoffset + ', ' + x + ', ' + y + ', ' + width + ', ' + height;
    this.before_puj7f4$('copyTexSubImage2D', sparams);
    var res = this.parent.copyTexSubImage2D_wrdw30$(target, level, xoffset, yoffset, x, y, width, height);
    this.after_6hosri$('copyTexSubImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.createProgram = function () {
    var sparams = '';
    this.before_puj7f4$('createProgram', sparams);
    var res = this.parent.createProgram();
    this.after_6hosri$('createProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.createShader_za3lpa$ = function (type) {
    var sparams = type.toString();
    this.before_puj7f4$('createShader', sparams);
    var res = this.parent.createShader_za3lpa$(type);
    this.after_6hosri$('createShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.cullFace_za3lpa$ = function (mode) {
    var sparams = mode.toString();
    this.before_puj7f4$('cullFace', sparams);
    var res = this.parent.cullFace_za3lpa$(mode);
    this.after_6hosri$('cullFace', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteBuffers_h86ci1$ = function (n, items) {
    var sparams = n.toString() + ', ' + items;
    this.before_puj7f4$('deleteBuffers', sparams);
    var res = this.parent.deleteBuffers_h86ci1$(n, items);
    this.after_6hosri$('deleteBuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteFramebuffers_h86ci1$ = function (n, items) {
    var sparams = n.toString() + ', ' + items;
    this.before_puj7f4$('deleteFramebuffers', sparams);
    var res = this.parent.deleteFramebuffers_h86ci1$(n, items);
    this.after_6hosri$('deleteFramebuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteProgram_za3lpa$ = function (program) {
    var sparams = program.toString();
    this.before_puj7f4$('deleteProgram', sparams);
    var res = this.parent.deleteProgram_za3lpa$(program);
    this.after_6hosri$('deleteProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteRenderbuffers_h86ci1$ = function (n, items) {
    var sparams = n.toString() + ', ' + items;
    this.before_puj7f4$('deleteRenderbuffers', sparams);
    var res = this.parent.deleteRenderbuffers_h86ci1$(n, items);
    this.after_6hosri$('deleteRenderbuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteShader_za3lpa$ = function (shader) {
    var sparams = shader.toString();
    this.before_puj7f4$('deleteShader', sparams);
    var res = this.parent.deleteShader_za3lpa$(shader);
    this.after_6hosri$('deleteShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.deleteTextures_h86ci1$ = function (n, items) {
    var sparams = n.toString() + ', ' + items;
    this.before_puj7f4$('deleteTextures', sparams);
    var res = this.parent.deleteTextures_h86ci1$(n, items);
    this.after_6hosri$('deleteTextures', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.depthFunc_za3lpa$ = function (func) {
    var sparams = func.toString();
    this.before_puj7f4$('depthFunc', sparams);
    var res = this.parent.depthFunc_za3lpa$(func);
    this.after_6hosri$('depthFunc', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.depthMask_6taknv$ = function (flag) {
    var sparams = flag.toString();
    this.before_puj7f4$('depthMask', sparams);
    var res = this.parent.depthMask_6taknv$(flag);
    this.after_6hosri$('depthMask', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.depthRangef_dleff0$ = function (n, f) {
    var sparams = n.toString() + ', ' + f;
    this.before_puj7f4$('depthRangef', sparams);
    var res = this.parent.depthRangef_dleff0$(n, f);
    this.after_6hosri$('depthRangef', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.detachShader_vux9f0$ = function (program, shader) {
    var sparams = program.toString() + ', ' + shader;
    this.before_puj7f4$('detachShader', sparams);
    var res = this.parent.detachShader_vux9f0$(program, shader);
    this.after_6hosri$('detachShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.disable_za3lpa$ = function (cap) {
    var sparams = cap.toString();
    this.before_puj7f4$('disable', sparams);
    var res = this.parent.disable_za3lpa$(cap);
    this.after_6hosri$('disable', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.disableVertexAttribArray_za3lpa$ = function (index) {
    var sparams = index.toString();
    this.before_puj7f4$('disableVertexAttribArray', sparams);
    var res = this.parent.disableVertexAttribArray_za3lpa$(index);
    this.after_6hosri$('disableVertexAttribArray', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.drawArrays_qt1dr2$ = function (mode, first, count) {
    var sparams = mode.toString() + ', ' + first + ', ' + count;
    this.before_puj7f4$('drawArrays', sparams);
    var res = this.parent.drawArrays_qt1dr2$(mode, first, count);
    this.after_6hosri$('drawArrays', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.drawElements_tjonv8$ = function (mode, count, type, indices) {
    var sparams = mode.toString() + ', ' + count + ', ' + type + ', ' + indices;
    this.before_puj7f4$('drawElements', sparams);
    var res = this.parent.drawElements_tjonv8$(mode, count, type, indices);
    this.after_6hosri$('drawElements', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.enable_za3lpa$ = function (cap) {
    var sparams = cap.toString();
    this.before_puj7f4$('enable', sparams);
    var res = this.parent.enable_za3lpa$(cap);
    this.after_6hosri$('enable', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.enableVertexAttribArray_za3lpa$ = function (index) {
    var sparams = index.toString();
    this.before_puj7f4$('enableVertexAttribArray', sparams);
    var res = this.parent.enableVertexAttribArray_za3lpa$(index);
    this.after_6hosri$('enableVertexAttribArray', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.finish = function () {
    var sparams = '';
    this.before_puj7f4$('finish', sparams);
    var res = this.parent.finish();
    this.after_6hosri$('finish', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.flush = function () {
    var sparams = '';
    this.before_puj7f4$('flush', sparams);
    var res = this.parent.flush();
    this.after_6hosri$('flush', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.framebufferRenderbuffer_tjonv8$ = function (target, attachment, renderbuffertarget, renderbuffer) {
    var sparams = target.toString() + ', ' + attachment + ', ' + renderbuffertarget + ', ' + renderbuffer;
    this.before_puj7f4$('framebufferRenderbuffer', sparams);
    var res = this.parent.framebufferRenderbuffer_tjonv8$(target, attachment, renderbuffertarget, renderbuffer);
    this.after_6hosri$('framebufferRenderbuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.framebufferTexture2D_4qozqa$ = function (target, attachment, textarget, texture, level) {
    var sparams = target.toString() + ', ' + attachment + ', ' + textarget + ', ' + texture + ', ' + level;
    this.before_puj7f4$('framebufferTexture2D', sparams);
    var res = this.parent.framebufferTexture2D_4qozqa$(target, attachment, textarget, texture, level);
    this.after_6hosri$('framebufferTexture2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.frontFace_za3lpa$ = function (mode) {
    var sparams = mode.toString();
    this.before_puj7f4$('frontFace', sparams);
    var res = this.parent.frontFace_za3lpa$(mode);
    this.after_6hosri$('frontFace', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.genBuffers_h86ci1$ = function (n, buffers) {
    var sparams = n.toString() + ', ' + buffers;
    this.before_puj7f4$('genBuffers', sparams);
    var res = this.parent.genBuffers_h86ci1$(n, buffers);
    this.after_6hosri$('genBuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.generateMipmap_za3lpa$ = function (target) {
    var sparams = target.toString();
    this.before_puj7f4$('generateMipmap', sparams);
    var res = this.parent.generateMipmap_za3lpa$(target);
    this.after_6hosri$('generateMipmap', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.genFramebuffers_h86ci1$ = function (n, framebuffers) {
    var sparams = n.toString() + ', ' + framebuffers;
    this.before_puj7f4$('genFramebuffers', sparams);
    var res = this.parent.genFramebuffers_h86ci1$(n, framebuffers);
    this.after_6hosri$('genFramebuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.genRenderbuffers_h86ci1$ = function (n, renderbuffers) {
    var sparams = n.toString() + ', ' + renderbuffers;
    this.before_puj7f4$('genRenderbuffers', sparams);
    var res = this.parent.genRenderbuffers_h86ci1$(n, renderbuffers);
    this.after_6hosri$('genRenderbuffers', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.genTextures_h86ci1$ = function (n, textures) {
    var sparams = n.toString() + ', ' + textures;
    this.before_puj7f4$('genTextures', sparams);
    var res = this.parent.genTextures_h86ci1$(n, textures);
    this.after_6hosri$('genTextures', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getActiveAttrib_2j7v7i$ = function (program, index, bufSize, length, size, type, name) {
    var sparams = program.toString() + ', ' + index + ', ' + bufSize + ', ' + length + ', ' + size + ', ' + type + ', ' + name;
    this.before_puj7f4$('getActiveAttrib', sparams);
    var res = this.parent.getActiveAttrib_2j7v7i$(program, index, bufSize, length, size, type, name);
    this.after_6hosri$('getActiveAttrib', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getActiveUniform_2j7v7i$ = function (program, index, bufSize, length, size, type, name) {
    var sparams = program.toString() + ', ' + index + ', ' + bufSize + ', ' + length + ', ' + size + ', ' + type + ', ' + name;
    this.before_puj7f4$('getActiveUniform', sparams);
    var res = this.parent.getActiveUniform_2j7v7i$(program, index, bufSize, length, size, type, name);
    this.after_6hosri$('getActiveUniform', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getAttachedShaders_o7ptx6$ = function (program, maxCount, count, shaders) {
    var sparams = program.toString() + ', ' + maxCount + ', ' + count + ', ' + shaders;
    this.before_puj7f4$('getAttachedShaders', sparams);
    var res = this.parent.getAttachedShaders_o7ptx6$(program, maxCount, count, shaders);
    this.after_6hosri$('getAttachedShaders', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getAttribLocation_19mbxw$ = function (program, name) {
    var sparams = program.toString() + ', ' + name;
    this.before_puj7f4$('getAttribLocation', sparams);
    var res = this.parent.getAttribLocation_19mbxw$(program, name);
    this.after_6hosri$('getAttribLocation', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getUniformLocation_19mbxw$ = function (program, name) {
    var sparams = program.toString() + ', ' + name;
    this.before_puj7f4$('getUniformLocation', sparams);
    var res = this.parent.getUniformLocation_19mbxw$(program, name);
    this.after_6hosri$('getUniformLocation', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getBooleanv_h86ci1$ = function (pname, data) {
    var sparams = pname.toString() + ', ' + data;
    this.before_puj7f4$('getBooleanv', sparams);
    var res = this.parent.getBooleanv_h86ci1$(pname, data);
    this.after_6hosri$('getBooleanv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getBufferParameteriv_yd7u0d$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getBufferParameteriv', sparams);
    var res = this.parent.getBufferParameteriv_yd7u0d$(target, pname, params);
    this.after_6hosri$('getBufferParameteriv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getError = function () {
    var sparams = '';
    this.before_puj7f4$('getError', sparams);
    var res = this.parent.getError();
    this.after_6hosri$('getError', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getFloatv_h86ci1$ = function (pname, data) {
    var sparams = pname.toString() + ', ' + data;
    this.before_puj7f4$('getFloatv', sparams);
    var res = this.parent.getFloatv_h86ci1$(pname, data);
    this.after_6hosri$('getFloatv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getFramebufferAttachmentParameteriv_ebfds9$ = function (target, attachment, pname, params) {
    var sparams = target.toString() + ', ' + attachment + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getFramebufferAttachmentParameteriv', sparams);
    var res = this.parent.getFramebufferAttachmentParameteriv_ebfds9$(target, attachment, pname, params);
    this.after_6hosri$('getFramebufferAttachmentParameteriv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getIntegerv_h86ci1$ = function (pname, data) {
    var sparams = pname.toString() + ', ' + data;
    this.before_puj7f4$('getIntegerv', sparams);
    var res = this.parent.getIntegerv_h86ci1$(pname, data);
    this.after_6hosri$('getIntegerv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getProgramInfoLog_o7ptx6$ = function (program, bufSize, length, infoLog) {
    var sparams = program.toString() + ', ' + bufSize + ', ' + length + ', ' + infoLog;
    this.before_puj7f4$('getProgramInfoLog', sparams);
    var res = this.parent.getProgramInfoLog_o7ptx6$(program, bufSize, length, infoLog);
    this.after_6hosri$('getProgramInfoLog', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getRenderbufferParameteriv_yd7u0d$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getRenderbufferParameteriv', sparams);
    var res = this.parent.getRenderbufferParameteriv_yd7u0d$(target, pname, params);
    this.after_6hosri$('getRenderbufferParameteriv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getProgramiv_yd7u0d$ = function (program, pname, params) {
    var sparams = program.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getProgramiv', sparams);
    var res = this.parent.getProgramiv_yd7u0d$(program, pname, params);
    this.after_6hosri$('getProgramiv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getShaderiv_yd7u0d$ = function (shader, pname, params) {
    var sparams = shader.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getShaderiv', sparams);
    var res = this.parent.getShaderiv_yd7u0d$(shader, pname, params);
    this.after_6hosri$('getShaderiv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getShaderInfoLog_o7ptx6$ = function (shader, bufSize, length, infoLog) {
    var sparams = shader.toString() + ', ' + bufSize + ', ' + length + ', ' + infoLog;
    this.before_puj7f4$('getShaderInfoLog', sparams);
    var res = this.parent.getShaderInfoLog_o7ptx6$(shader, bufSize, length, infoLog);
    this.after_6hosri$('getShaderInfoLog', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getShaderPrecisionFormat_o7ptx6$ = function (shadertype, precisiontype, range, precision) {
    var sparams = shadertype.toString() + ', ' + precisiontype + ', ' + range + ', ' + precision;
    this.before_puj7f4$('getShaderPrecisionFormat', sparams);
    var res = this.parent.getShaderPrecisionFormat_o7ptx6$(shadertype, precisiontype, range, precision);
    this.after_6hosri$('getShaderPrecisionFormat', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getShaderSource_o7ptx6$ = function (shader, bufSize, length, source) {
    var sparams = shader.toString() + ', ' + bufSize + ', ' + length + ', ' + source;
    this.before_puj7f4$('getShaderSource', sparams);
    var res = this.parent.getShaderSource_o7ptx6$(shader, bufSize, length, source);
    this.after_6hosri$('getShaderSource', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getString_za3lpa$ = function (name) {
    var sparams = name.toString();
    this.before_puj7f4$('getString', sparams);
    var res = this.parent.getString_za3lpa$(name);
    this.after_6hosri$('getString', sparams, res);
    return res;
  };
  KmlGlProxy.prototype.getTexParameterfv_yd7u0d$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getTexParameterfv', sparams);
    var res = this.parent.getTexParameterfv_yd7u0d$(target, pname, params);
    this.after_6hosri$('getTexParameterfv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getTexParameteriv_yd7u0d$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getTexParameteriv', sparams);
    var res = this.parent.getTexParameteriv_yd7u0d$(target, pname, params);
    this.after_6hosri$('getTexParameteriv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getUniformfv_yd7u0d$ = function (program, location, params) {
    var sparams = program.toString() + ', ' + location + ', ' + params;
    this.before_puj7f4$('getUniformfv', sparams);
    var res = this.parent.getUniformfv_yd7u0d$(program, location, params);
    this.after_6hosri$('getUniformfv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getUniformiv_yd7u0d$ = function (program, location, params) {
    var sparams = program.toString() + ', ' + location + ', ' + params;
    this.before_puj7f4$('getUniformiv', sparams);
    var res = this.parent.getUniformiv_yd7u0d$(program, location, params);
    this.after_6hosri$('getUniformiv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getVertexAttribfv_yd7u0d$ = function (index, pname, params) {
    var sparams = index.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getVertexAttribfv', sparams);
    var res = this.parent.getVertexAttribfv_yd7u0d$(index, pname, params);
    this.after_6hosri$('getVertexAttribfv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getVertexAttribiv_yd7u0d$ = function (index, pname, params) {
    var sparams = index.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('getVertexAttribiv', sparams);
    var res = this.parent.getVertexAttribiv_yd7u0d$(index, pname, params);
    this.after_6hosri$('getVertexAttribiv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.getVertexAttribPointerv_yd7u0d$ = function (index, pname, pointer) {
    var sparams = index.toString() + ', ' + pname + ', ' + pointer;
    this.before_puj7f4$('getVertexAttribPointerv', sparams);
    var res = this.parent.getVertexAttribPointerv_yd7u0d$(index, pname, pointer);
    this.after_6hosri$('getVertexAttribPointerv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.hint_vux9f0$ = function (target, mode) {
    var sparams = target.toString() + ', ' + mode;
    this.before_puj7f4$('hint', sparams);
    var res = this.parent.hint_vux9f0$(target, mode);
    this.after_6hosri$('hint', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isBuffer_za3lpa$ = function (buffer) {
    var sparams = buffer.toString();
    this.before_puj7f4$('isBuffer', sparams);
    var res = this.parent.isBuffer_za3lpa$(buffer);
    this.after_6hosri$('isBuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isEnabled_za3lpa$ = function (cap) {
    var sparams = cap.toString();
    this.before_puj7f4$('isEnabled', sparams);
    var res = this.parent.isEnabled_za3lpa$(cap);
    this.after_6hosri$('isEnabled', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isFramebuffer_za3lpa$ = function (framebuffer) {
    var sparams = framebuffer.toString();
    this.before_puj7f4$('isFramebuffer', sparams);
    var res = this.parent.isFramebuffer_za3lpa$(framebuffer);
    this.after_6hosri$('isFramebuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isProgram_za3lpa$ = function (program) {
    var sparams = program.toString();
    this.before_puj7f4$('isProgram', sparams);
    var res = this.parent.isProgram_za3lpa$(program);
    this.after_6hosri$('isProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isRenderbuffer_za3lpa$ = function (renderbuffer) {
    var sparams = renderbuffer.toString();
    this.before_puj7f4$('isRenderbuffer', sparams);
    var res = this.parent.isRenderbuffer_za3lpa$(renderbuffer);
    this.after_6hosri$('isRenderbuffer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isShader_za3lpa$ = function (shader) {
    var sparams = shader.toString();
    this.before_puj7f4$('isShader', sparams);
    var res = this.parent.isShader_za3lpa$(shader);
    this.after_6hosri$('isShader', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.isTexture_za3lpa$ = function (texture) {
    var sparams = texture.toString();
    this.before_puj7f4$('isTexture', sparams);
    var res = this.parent.isTexture_za3lpa$(texture);
    this.after_6hosri$('isTexture', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.lineWidth_mx4ult$ = function (width) {
    var sparams = width.toString();
    this.before_puj7f4$('lineWidth', sparams);
    var res = this.parent.lineWidth_mx4ult$(width);
    this.after_6hosri$('lineWidth', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.linkProgram_za3lpa$ = function (program) {
    var sparams = program.toString();
    this.before_puj7f4$('linkProgram', sparams);
    var res = this.parent.linkProgram_za3lpa$(program);
    this.after_6hosri$('linkProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.pixelStorei_vux9f0$ = function (pname, param) {
    var sparams = pname.toString() + ', ' + param;
    this.before_puj7f4$('pixelStorei', sparams);
    var res = this.parent.pixelStorei_vux9f0$(pname, param);
    this.after_6hosri$('pixelStorei', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.polygonOffset_dleff0$ = function (factor, units) {
    var sparams = factor.toString() + ', ' + units;
    this.before_puj7f4$('polygonOffset', sparams);
    var res = this.parent.polygonOffset_dleff0$(factor, units);
    this.after_6hosri$('polygonOffset', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.readPixels_mk0vkj$ = function (x, y, width, height, format, type, pixels) {
    var sparams = x.toString() + ', ' + y + ', ' + width + ', ' + height + ', ' + format + ', ' + type + ', ' + pixels;
    this.before_puj7f4$('readPixels', sparams);
    var res = this.parent.readPixels_mk0vkj$(x, y, width, height, format, type, pixels);
    this.after_6hosri$('readPixels', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.releaseShaderCompiler = function () {
    var sparams = '';
    this.before_puj7f4$('releaseShaderCompiler', sparams);
    var res = this.parent.releaseShaderCompiler();
    this.after_6hosri$('releaseShaderCompiler', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.renderbufferStorage_tjonv8$ = function (target, internalformat, width, height) {
    var sparams = target.toString() + ', ' + internalformat + ', ' + width + ', ' + height;
    this.before_puj7f4$('renderbufferStorage', sparams);
    var res = this.parent.renderbufferStorage_tjonv8$(target, internalformat, width, height);
    this.after_6hosri$('renderbufferStorage', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.sampleCoverage_8ca0d4$ = function (value, invert) {
    var sparams = value.toString() + ', ' + invert;
    this.before_puj7f4$('sampleCoverage', sparams);
    var res = this.parent.sampleCoverage_8ca0d4$(value, invert);
    this.after_6hosri$('sampleCoverage', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.scissor_tjonv8$ = function (x, y, width, height) {
    var sparams = x.toString() + ', ' + y + ', ' + width + ', ' + height;
    this.before_puj7f4$('scissor', sparams);
    var res = this.parent.scissor_tjonv8$(x, y, width, height);
    this.after_6hosri$('scissor', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.shaderBinary_1o7eri$ = function (count, shaders, binaryformat, binary, length) {
    var sparams = count.toString() + ', ' + shaders + ', ' + binaryformat + ', ' + binary + ', ' + length;
    this.before_puj7f4$('shaderBinary', sparams);
    var res = this.parent.shaderBinary_1o7eri$(count, shaders, binaryformat, binary, length);
    this.after_6hosri$('shaderBinary', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.shaderSource_19mbxw$ = function (shader, string) {
    var sparams = shader.toString() + ', ' + string;
    this.before_puj7f4$('shaderSource', sparams);
    var res = this.parent.shaderSource_19mbxw$(shader, string);
    this.after_6hosri$('shaderSource', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilFunc_qt1dr2$ = function (func, ref, mask) {
    var sparams = func.toString() + ', ' + ref + ', ' + mask;
    this.before_puj7f4$('stencilFunc', sparams);
    var res = this.parent.stencilFunc_qt1dr2$(func, ref, mask);
    this.after_6hosri$('stencilFunc', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilFuncSeparate_tjonv8$ = function (face, func, ref, mask) {
    var sparams = face.toString() + ', ' + func + ', ' + ref + ', ' + mask;
    this.before_puj7f4$('stencilFuncSeparate', sparams);
    var res = this.parent.stencilFuncSeparate_tjonv8$(face, func, ref, mask);
    this.after_6hosri$('stencilFuncSeparate', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilMask_za3lpa$ = function (mask) {
    var sparams = mask.toString();
    this.before_puj7f4$('stencilMask', sparams);
    var res = this.parent.stencilMask_za3lpa$(mask);
    this.after_6hosri$('stencilMask', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilMaskSeparate_vux9f0$ = function (face, mask) {
    var sparams = face.toString() + ', ' + mask;
    this.before_puj7f4$('stencilMaskSeparate', sparams);
    var res = this.parent.stencilMaskSeparate_vux9f0$(face, mask);
    this.after_6hosri$('stencilMaskSeparate', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilOp_qt1dr2$ = function (fail, zfail, zpass) {
    var sparams = fail.toString() + ', ' + zfail + ', ' + zpass;
    this.before_puj7f4$('stencilOp', sparams);
    var res = this.parent.stencilOp_qt1dr2$(fail, zfail, zpass);
    this.after_6hosri$('stencilOp', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.stencilOpSeparate_tjonv8$ = function (face, sfail, dpfail, dppass) {
    var sparams = face.toString() + ', ' + sfail + ', ' + dpfail + ', ' + dppass;
    this.before_puj7f4$('stencilOpSeparate', sparams);
    var res = this.parent.stencilOpSeparate_tjonv8$(face, sfail, dpfail, dppass);
    this.after_6hosri$('stencilOpSeparate', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texImage2D_7wol0$ = function (target, level, internalformat, width, height, border, format, type, pixels) {
    var sparams = target.toString() + ', ' + level + ', ' + internalformat + ', ' + width + ', ' + height + ', ' + border + ', ' + format + ', ' + type + ', ' + toString(pixels);
    this.before_puj7f4$('texImage2D', sparams);
    var res = this.parent.texImage2D_7wol0$(target, level, internalformat, width, height, border, format, type, pixels);
    this.after_6hosri$('texImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texImage2D_gqqctv$ = function (target, level, internalformat, format, type, data) {
    var sparams = target.toString() + ', ' + level + ', ' + internalformat + ', ' + format + ', ' + type + ', ' + data;
    this.before_puj7f4$('texImage2D', sparams);
    var res = this.parent.texImage2D_gqqctv$(target, level, internalformat, format, type, data);
    this.after_6hosri$('texImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texParameterf_n0b4r3$ = function (target, pname, param) {
    var sparams = target.toString() + ', ' + pname + ', ' + param;
    this.before_puj7f4$('texParameterf', sparams);
    var res = this.parent.texParameterf_n0b4r3$(target, pname, param);
    this.after_6hosri$('texParameterf', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texParameterfv_yd7u0d$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('texParameterfv', sparams);
    var res = this.parent.texParameterfv_yd7u0d$(target, pname, params);
    this.after_6hosri$('texParameterfv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texParameteri_qt1dr2$ = function (target, pname, param) {
    var sparams = target.toString() + ', ' + pname + ', ' + param;
    this.before_puj7f4$('texParameteri', sparams);
    var res = this.parent.texParameteri_qt1dr2$(target, pname, param);
    this.after_6hosri$('texParameteri', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texParameteriv_yd7u0d$ = function (target, pname, params) {
    var sparams = target.toString() + ', ' + pname + ', ' + params;
    this.before_puj7f4$('texParameteriv', sparams);
    var res = this.parent.texParameteriv_yd7u0d$(target, pname, params);
    this.after_6hosri$('texParameteriv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.texSubImage2D_yd22hf$ = function (target, level, xoffset, yoffset, width, height, format, type, pixels) {
    var sparams = target.toString() + ', ' + level + ', ' + xoffset + ', ' + yoffset + ', ' + width + ', ' + height + ', ' + format + ', ' + type + ', ' + pixels;
    this.before_puj7f4$('texSubImage2D', sparams);
    var res = this.parent.texSubImage2D_yd22hf$(target, level, xoffset, yoffset, width, height, format, type, pixels);
    this.after_6hosri$('texSubImage2D', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform1f_24o109$ = function (location, v0) {
    var sparams = location.toString() + ', ' + v0;
    this.before_puj7f4$('uniform1f', sparams);
    var res = this.parent.uniform1f_24o109$(location, v0);
    this.after_6hosri$('uniform1f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform1fv_yd7u0d$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform1fv', sparams);
    var res = this.parent.uniform1fv_yd7u0d$(location, count, value);
    this.after_6hosri$('uniform1fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform1i_vux9f0$ = function (location, v0) {
    var sparams = location.toString() + ', ' + v0;
    this.before_puj7f4$('uniform1i', sparams);
    var res = this.parent.uniform1i_vux9f0$(location, v0);
    this.after_6hosri$('uniform1i', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform1iv_yd7u0d$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform1iv', sparams);
    var res = this.parent.uniform1iv_yd7u0d$(location, count, value);
    this.after_6hosri$('uniform1iv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform2f_nhq4am$ = function (location, v0, v1) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1;
    this.before_puj7f4$('uniform2f', sparams);
    var res = this.parent.uniform2f_nhq4am$(location, v0, v1);
    this.after_6hosri$('uniform2f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform2fv_yd7u0d$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform2fv', sparams);
    var res = this.parent.uniform2fv_yd7u0d$(location, count, value);
    this.after_6hosri$('uniform2fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform2i_qt1dr2$ = function (location, v0, v1) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1;
    this.before_puj7f4$('uniform2i', sparams);
    var res = this.parent.uniform2i_qt1dr2$(location, v0, v1);
    this.after_6hosri$('uniform2i', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform2iv_yd7u0d$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform2iv', sparams);
    var res = this.parent.uniform2iv_yd7u0d$(location, count, value);
    this.after_6hosri$('uniform2iv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform3f_eyukp3$ = function (location, v0, v1, v2) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1 + ', ' + v2;
    this.before_puj7f4$('uniform3f', sparams);
    var res = this.parent.uniform3f_eyukp3$(location, v0, v1, v2);
    this.after_6hosri$('uniform3f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform3fv_yd7u0d$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform3fv', sparams);
    var res = this.parent.uniform3fv_yd7u0d$(location, count, value);
    this.after_6hosri$('uniform3fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform3i_tjonv8$ = function (location, v0, v1, v2) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1 + ', ' + v2;
    this.before_puj7f4$('uniform3i', sparams);
    var res = this.parent.uniform3i_tjonv8$(location, v0, v1, v2);
    this.after_6hosri$('uniform3i', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform3iv_yd7u0d$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform3iv', sparams);
    var res = this.parent.uniform3iv_yd7u0d$(location, count, value);
    this.after_6hosri$('uniform3iv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform4f_xpxj32$ = function (location, v0, v1, v2, v3) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1 + ', ' + v2 + ', ' + v3;
    this.before_puj7f4$('uniform4f', sparams);
    var res = this.parent.uniform4f_xpxj32$(location, v0, v1, v2, v3);
    this.after_6hosri$('uniform4f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform4fv_yd7u0d$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform4fv', sparams);
    var res = this.parent.uniform4fv_yd7u0d$(location, count, value);
    this.after_6hosri$('uniform4fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform4i_4qozqa$ = function (location, v0, v1, v2, v3) {
    var sparams = location.toString() + ', ' + v0 + ', ' + v1 + ', ' + v2 + ', ' + v3;
    this.before_puj7f4$('uniform4i', sparams);
    var res = this.parent.uniform4i_4qozqa$(location, v0, v1, v2, v3);
    this.after_6hosri$('uniform4i', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniform4iv_yd7u0d$ = function (location, count, value) {
    var sparams = location.toString() + ', ' + count + ', ' + value;
    this.before_puj7f4$('uniform4iv', sparams);
    var res = this.parent.uniform4iv_yd7u0d$(location, count, value);
    this.after_6hosri$('uniform4iv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniformMatrix2fv_gsjgaq$ = function (location, count, transpose, value) {
    var sparams = location.toString() + ', ' + count + ', ' + transpose + ', ' + value;
    this.before_puj7f4$('uniformMatrix2fv', sparams);
    var res = this.parent.uniformMatrix2fv_gsjgaq$(location, count, transpose, value);
    this.after_6hosri$('uniformMatrix2fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniformMatrix3fv_gsjgaq$ = function (location, count, transpose, value) {
    var sparams = location.toString() + ', ' + count + ', ' + transpose + ', ' + value;
    this.before_puj7f4$('uniformMatrix3fv', sparams);
    var res = this.parent.uniformMatrix3fv_gsjgaq$(location, count, transpose, value);
    this.after_6hosri$('uniformMatrix3fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.uniformMatrix4fv_gsjgaq$ = function (location, count, transpose, value) {
    var sparams = location.toString() + ', ' + count + ', ' + transpose + ', ' + value;
    this.before_puj7f4$('uniformMatrix4fv', sparams);
    var res = this.parent.uniformMatrix4fv_gsjgaq$(location, count, transpose, value);
    this.after_6hosri$('uniformMatrix4fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.useProgram_za3lpa$ = function (program) {
    var sparams = program.toString();
    this.before_puj7f4$('useProgram', sparams);
    var res = this.parent.useProgram_za3lpa$(program);
    this.after_6hosri$('useProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.validateProgram_za3lpa$ = function (program) {
    var sparams = program.toString();
    this.before_puj7f4$('validateProgram', sparams);
    var res = this.parent.validateProgram_za3lpa$(program);
    this.after_6hosri$('validateProgram', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib1f_24o109$ = function (index, x) {
    var sparams = index.toString() + ', ' + x;
    this.before_puj7f4$('vertexAttrib1f', sparams);
    var res = this.parent.vertexAttrib1f_24o109$(index, x);
    this.after_6hosri$('vertexAttrib1f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib1fv_h86ci1$ = function (index, v) {
    var sparams = index.toString() + ', ' + v;
    this.before_puj7f4$('vertexAttrib1fv', sparams);
    var res = this.parent.vertexAttrib1fv_h86ci1$(index, v);
    this.after_6hosri$('vertexAttrib1fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib2f_nhq4am$ = function (index, x, y) {
    var sparams = index.toString() + ', ' + x + ', ' + y;
    this.before_puj7f4$('vertexAttrib2f', sparams);
    var res = this.parent.vertexAttrib2f_nhq4am$(index, x, y);
    this.after_6hosri$('vertexAttrib2f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib2fv_h86ci1$ = function (index, v) {
    var sparams = index.toString() + ', ' + v;
    this.before_puj7f4$('vertexAttrib2fv', sparams);
    var res = this.parent.vertexAttrib2fv_h86ci1$(index, v);
    this.after_6hosri$('vertexAttrib2fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib3f_eyukp3$ = function (index, x, y, z) {
    var sparams = index.toString() + ', ' + x + ', ' + y + ', ' + z;
    this.before_puj7f4$('vertexAttrib3f', sparams);
    var res = this.parent.vertexAttrib3f_eyukp3$(index, x, y, z);
    this.after_6hosri$('vertexAttrib3f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib3fv_h86ci1$ = function (index, v) {
    var sparams = index.toString() + ', ' + v;
    this.before_puj7f4$('vertexAttrib3fv', sparams);
    var res = this.parent.vertexAttrib3fv_h86ci1$(index, v);
    this.after_6hosri$('vertexAttrib3fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib4f_xpxj32$ = function (index, x, y, z, w) {
    var sparams = index.toString() + ', ' + x + ', ' + y + ', ' + z + ', ' + w;
    this.before_puj7f4$('vertexAttrib4f', sparams);
    var res = this.parent.vertexAttrib4f_xpxj32$(index, x, y, z, w);
    this.after_6hosri$('vertexAttrib4f', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttrib4fv_h86ci1$ = function (index, v) {
    var sparams = index.toString() + ', ' + v;
    this.before_puj7f4$('vertexAttrib4fv', sparams);
    var res = this.parent.vertexAttrib4fv_h86ci1$(index, v);
    this.after_6hosri$('vertexAttrib4fv', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.vertexAttribPointer_owihk5$ = function (index, size, type, normalized, stride, pointer) {
    var sparams = index.toString() + ', ' + size + ', ' + type + ', ' + normalized + ', ' + stride + ', ' + pointer;
    this.before_puj7f4$('vertexAttribPointer', sparams);
    var res = this.parent.vertexAttribPointer_owihk5$(index, size, type, normalized, stride, pointer);
    this.after_6hosri$('vertexAttribPointer', sparams, res.toString());
    return res;
  };
  KmlGlProxy.prototype.viewport_tjonv8$ = function (x, y, width, height) {
    var sparams = x.toString() + ', ' + y + ', ' + width + ', ' + height;
    this.before_puj7f4$('viewport', sparams);
    var res = this.parent.viewport_tjonv8$(x, y, width, height);
    this.after_6hosri$('viewport', sparams, res.toString());
    return res;
  };
  KmlGlProxy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlProxy',
    interfaces: [KmlGl]
  };
  function LogKmlGlProxy(parent) {
    KmlGlProxy.call(this, parent);
  }
  LogKmlGlProxy.prototype.before_puj7f4$ = function (name, params) {
    println('before: ' + name + ' (' + params + ')');
  };
  LogKmlGlProxy.prototype.after_6hosri$ = function (name, params, result) {
    println('after: ' + name + ' (' + params + ') = ' + result);
  };
  LogKmlGlProxy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogKmlGlProxy',
    interfaces: [KmlGlProxy]
  };
  function CheckErrorsKmlGlProxy(parent) {
    KmlGlProxy.call(this, parent);
  }
  CheckErrorsKmlGlProxy.prototype.after_6hosri$ = function (name, params, result) {
    var error = this.parent.getError();
    if (error !== this.NO_ERROR) {
      println('glError: ' + error + ' ' + getErrorString(this, error) + ' calling ' + name + '(' + params + ') = ' + result);
      throw RuntimeException_init('glError: ' + error + ' ' + getErrorString(this, error) + ' calling ' + name + '(' + params + ') = ' + result);
    }
  };
  CheckErrorsKmlGlProxy.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CheckErrorsKmlGlProxy',
    interfaces: [KmlGlProxy]
  };
  function KmlGlProgram(gl, program, vertex, fragment) {
    this.gl = gl;
    this.program = program;
    this.vertex = vertex;
    this.fragment = fragment;
  }
  KmlGlProgram.prototype.use = function () {
    this.gl.useProgram_za3lpa$(this.program);
  };
  KmlGlProgram.prototype.unuse = function () {
    this.gl.useProgram_za3lpa$(0);
  };
  KmlGlProgram.prototype.getAttribLocation_61zpoe$ = function (name) {
    return this.gl.getAttribLocation_19mbxw$(this.program, name);
  };
  KmlGlProgram.prototype.getUniformLocation_61zpoe$ = function (name) {
    return this.gl.getUniformLocation_19mbxw$(this.program, name);
  };
  KmlGlProgram.prototype.dispose = function () {
    this.gl.deleteProgram_za3lpa$(this.program);
    this.gl.deleteShader_za3lpa$(this.vertex);
    this.gl.deleteShader_za3lpa$(this.fragment);
  };
  KmlGlProgram.prototype.use_o14v8n$ = defineInlineFunction('kgl-js.com.soywiz.kgl.KmlGlProgram.use_o14v8n$', wrapFunction(function () {
    var getIntegerv = _.com.soywiz.kgl.getIntegerv_4t3mty$;
    return function (callback) {
      var oldProgram = getIntegerv(this.gl, this.gl.CURRENT_PROGRAM);
      this.gl.useProgram_za3lpa$(this.program);
      try {
        callback();
      }
      finally {
        this.gl.useProgram_za3lpa$(oldProgram);
      }
    };
  }));
  KmlGlProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlProgram',
    interfaces: []
  };
  function createShader($receiver, type, source) {
    var shader = $receiver.createShader_za3lpa$(type);
    $receiver.shaderSource_19mbxw$(shader, source);
    compileShaderAndCheck($receiver, shader);
    return shader;
  }
  function createProgram($receiver, vertex, fragment) {
    var program = $receiver.createProgram();
    var shaderVertex = createShader($receiver, $receiver.VERTEX_SHADER, vertex);
    var shaderFragment = createShader($receiver, $receiver.FRAGMENT_SHADER, fragment);
    $receiver.attachShader_vux9f0$(program, shaderVertex);
    $receiver.attachShader_vux9f0$(program, shaderFragment);
    linkProgramAndCheck($receiver, program);
    return new KmlGlProgram($receiver, program, shaderVertex, shaderFragment);
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  function KmlGlVertexLayout(program) {
    this.program = program;
    this.gl = this.program.gl;
    this.index_0 = 0;
    this.size_0 = 0;
    this.elements_0 = ArrayList_init();
  }
  function KmlGlVertexLayout$Element(index, size, type, pointer, normalized) {
    this.index = index;
    this.size = size;
    this.type = type;
    this.pointer = pointer;
    this.normalized = normalized;
  }
  KmlGlVertexLayout$Element.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Element',
    interfaces: []
  };
  KmlGlVertexLayout$Element.prototype.component1 = function () {
    return this.index;
  };
  KmlGlVertexLayout$Element.prototype.component2 = function () {
    return this.size;
  };
  KmlGlVertexLayout$Element.prototype.component3 = function () {
    return this.type;
  };
  KmlGlVertexLayout$Element.prototype.component4 = function () {
    return this.pointer;
  };
  KmlGlVertexLayout$Element.prototype.component5 = function () {
    return this.normalized;
  };
  KmlGlVertexLayout$Element.prototype.copy_7bka6z$ = function (index, size, type, pointer, normalized) {
    return new KmlGlVertexLayout$Element(index === void 0 ? this.index : index, size === void 0 ? this.size : size, type === void 0 ? this.type : type, pointer === void 0 ? this.pointer : pointer, normalized === void 0 ? this.normalized : normalized);
  };
  KmlGlVertexLayout$Element.prototype.toString = function () {
    return 'Element(index=' + Kotlin.toString(this.index) + (', size=' + Kotlin.toString(this.size)) + (', type=' + Kotlin.toString(this.type)) + (', pointer=' + Kotlin.toString(this.pointer)) + (', normalized=' + Kotlin.toString(this.normalized)) + ')';
  };
  KmlGlVertexLayout$Element.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.pointer) | 0;
    result = result * 31 + Kotlin.hashCode(this.normalized) | 0;
    return result;
  };
  KmlGlVertexLayout$Element.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.pointer, other.pointer) && Kotlin.equals(this.normalized, other.normalized)))));
  };
  KmlGlVertexLayout.prototype.add_0 = function (name, type, esize, count, normalized) {
    var attribIndex = this.program.getAttribLocation_61zpoe$(name);
    if (attribIndex < 0)
      throw RuntimeException_init("Can't find attribute with name '" + name + "' in program " + this.program);
    var $receiver = this.elements_0;
    var element = new KmlGlVertexLayout$Element(attribIndex, count, type, this.size_0, normalized);
    $receiver.add_11rb$(element);
    this.size_0 = this.size_0 + Kotlin.imul(count, esize) | 0;
    this.index_0 = this.index_0 + 1 | 0;
    return this;
  };
  KmlGlVertexLayout.prototype.byte_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.BYTE, 1, count, normalized);
  };
  KmlGlVertexLayout.prototype.ubyte_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.UNSIGNED_BYTE, 1, count, normalized);
  };
  KmlGlVertexLayout.prototype.short_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.SHORT, 2, count, normalized);
  };
  KmlGlVertexLayout.prototype.ushort_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.UNSIGNED_SHORT, 2, count, normalized);
  };
  KmlGlVertexLayout.prototype.int_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.INT, 4, count, normalized);
  };
  KmlGlVertexLayout.prototype.float_37lk95$ = function (name, count, normalized) {
    if (normalized === void 0)
      normalized = false;
    return this.add_0(name, this.gl.FLOAT, 4, count, normalized);
  };
  KmlGlVertexLayout.prototype.enable = function () {
    var $receiver = this.gl;
    var tmp$;
    tmp$ = this.elements_0;
    for (var index = 0; index !== tmp$.size; ++index) {
      var element = this.elements_0.get_za3lpa$(index);
      $receiver.enableVertexAttribArray_za3lpa$(index);
      $receiver.vertexAttribPointer_owihk5$(element.index, element.size, element.type, element.normalized, this.size_0, element.pointer);
    }
  };
  KmlGlVertexLayout.prototype.disable = function () {
    var tmp$;
    tmp$ = this.elements_0;
    for (var index = 0; index !== tmp$.size; ++index) {
      this.gl.disableVertexAttribArray_za3lpa$(index);
    }
  };
  KmlGlVertexLayout.prototype.use_o14v8n$ = defineInlineFunction('kgl-js.com.soywiz.kgl.KmlGlVertexLayout.use_o14v8n$', wrapFunction(function () {
    var getIntegerv = _.com.soywiz.kgl.getIntegerv_4t3mty$;
    return function (callback) {
      var $this = this.program;
      var oldProgram = getIntegerv($this.gl, $this.gl.CURRENT_PROGRAM);
      $this.gl.useProgram_za3lpa$($this.program);
      try {
        this.enable();
        try {
          callback();
        }
        finally {
          this.disable();
        }
      }
      finally {
        $this.gl.useProgram_za3lpa$(oldProgram);
      }
    };
  }));
  KmlGlVertexLayout.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlVertexLayout',
    interfaces: []
  };
  function layout($receiver, config) {
    var $receiver_0 = new KmlGlVertexLayout($receiver);
    config($receiver_0);
    return $receiver_0;
  }
  function KmlGlBuffer(gl, type, buf) {
    this.gl = gl;
    this.type = type;
    this.buf = buf;
  }
  KmlGlBuffer.prototype.bind = function () {
    this.gl.bindBuffer_vux9f0$(this.type, this.buf);
  };
  KmlGlBuffer.prototype.unbind = function () {
    this.gl.bindBuffer_vux9f0$(this.type, 0);
  };
  KmlGlBuffer.prototype.bind_o14v8n$ = defineInlineFunction('kgl-js.com.soywiz.kgl.KmlGlBuffer.bind_o14v8n$', function (callback) {
    this.bind();
    try {
      callback();
    }
    finally {
      this.unbind();
    }
  });
  KmlGlBuffer.prototype.setData_e4gf39$ = function (data, size) {
    if (size === void 0)
      size = data.size;
    this.bind();
    this.gl.bufferData_h17dt1$(this.type, size, data, this.gl.STATIC_DRAW);
    return this;
  };
  KmlGlBuffer.prototype.dispose = function () {
    this.gl.deleteBuffers_h86ci1$(1, KmlNativeBuffer_init(4));
  };
  KmlGlBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlBuffer',
    interfaces: []
  };
  function createBuffer($receiver, type) {
    var it = KmlNativeBuffer_init(4);
    $receiver.genBuffers_h86ci1$(1, it);
    var id = it.getInt_za3lpa$(0);
    return new KmlGlBuffer($receiver, type, id);
  }
  function createArrayBuffer($receiver) {
    return createBuffer($receiver, $receiver.ARRAY_BUFFER);
  }
  function createElementArrayBuffer($receiver) {
    return createBuffer($receiver, $receiver.ELEMENT_ARRAY_BUFFER);
  }
  var drawArrays = defineInlineFunction('kgl-js.com.soywiz.kgl.drawArrays_pvmwt$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function drawArrays$lambda($receiver) {
      return Unit;
    }
    var getIntegerv = _.com.soywiz.kgl.getIntegerv_4t3mty$;
    return function ($receiver, vertices, mode, first, count, uniforms) {
      if (uniforms === void 0)
        uniforms = drawArrays$lambda;
      var $this = $receiver.program;
      var oldProgram = getIntegerv($this.gl, $this.gl.CURRENT_PROGRAM);
      $this.gl.useProgram_za3lpa$($this.program);
      try {
        $receiver.enable();
        try {
          vertices.bind();
          try {
            uniforms($receiver.gl);
            $receiver.gl.drawArrays_qt1dr2$(mode, first, count);
          }
          finally {
            vertices.unbind();
          }
        }
        finally {
          $receiver.disable();
        }
      }
      finally {
        $this.gl.useProgram_za3lpa$(oldProgram);
      }
    };
  }));
  var drawElements = defineInlineFunction('kgl-js.com.soywiz.kgl.drawElements_albd6e$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    function drawElements$lambda($receiver) {
      return Unit;
    }
    var getIntegerv = _.com.soywiz.kgl.getIntegerv_4t3mty$;
    return function ($receiver, vertices, indices, mode, count, type, offset, uniforms) {
      if (type === void 0)
        type = $receiver.gl.UNSIGNED_SHORT;
      if (offset === void 0)
        offset = 0;
      if (uniforms === void 0)
        uniforms = drawElements$lambda;
      var $this = $receiver.program;
      var oldProgram = getIntegerv($this.gl, $this.gl.CURRENT_PROGRAM);
      $this.gl.useProgram_za3lpa$($this.program);
      try {
        $receiver.enable();
        try {
          vertices.bind();
          try {
            indices.bind();
            try {
              uniforms($receiver.gl);
              $receiver.gl.drawElements_tjonv8$(mode, count, type, offset);
            }
            finally {
              indices.unbind();
            }
          }
          finally {
            vertices.unbind();
          }
        }
        finally {
          $receiver.disable();
        }
      }
      finally {
        $this.gl.useProgram_za3lpa$(oldProgram);
      }
    };
  }));
  function KmlGlTex(gl, tex) {
    this.gl = gl;
    this.tex = tex;
    this.width = 0;
    this.height = 0;
    this.smooth = true;
    this.clampToEdge = true;
  }
  KmlGlTex.prototype.bind_za3lpa$ = function (unit) {
    var $receiver = this.gl;
    $receiver.activeTexture_za3lpa$($receiver.TEXTURE0 + unit | 0);
    $receiver.bindTexture_vux9f0$($receiver.TEXTURE_2D, this.tex);
    $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_MIN_FILTER, this.smooth ? this.gl.LINEAR : this.gl.NEAREST);
    $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_MAG_FILTER, this.smooth ? this.gl.LINEAR : this.gl.NEAREST);
    $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_WRAP_S, this.clampToEdge ? this.gl.CLAMP_TO_EDGE : this.gl.REPEAT);
    $receiver.texParameteri_qt1dr2$($receiver.TEXTURE_2D, $receiver.TEXTURE_WRAP_T, this.clampToEdge ? this.gl.CLAMP_TO_EDGE : this.gl.REPEAT);
  };
  KmlGlTex.prototype.upload_ajpbo3$ = function (width, height, data, format, type) {
    if (format === void 0)
      format = this.gl.RGBA;
    if (type === void 0)
      type = this.gl.UNSIGNED_BYTE;
    this.bind_za3lpa$(0);
    this.gl.texImage2D_7wol0$(this.gl.TEXTURE_2D, 0, format, width, height, 0, format, type, data);
    this.width = width;
    this.height = height;
    return this;
  };
  function KmlGlTex$upload$lambda(closure$width, closure$height, closure$format, closure$type, this$KmlGlTex) {
    return function (it) {
      return this$KmlGlTex.upload_ajpbo3$(closure$width, closure$height, it, closure$format, closure$type);
    };
  }
  KmlGlTex.prototype.upload_ydkzvt$ = function (width, height, data, format, type) {
    if (format === void 0)
      format = this.gl.RGBA;
    if (type === void 0)
      type = this.gl.UNSIGNED_BYTE;
    return toTempBuffer(data, KmlGlTex$upload$lambda(width, height, format, type, this));
  };
  KmlGlTex.prototype.upload_lxh57t$ = function (data, format, type) {
    if (format === void 0)
      format = this.gl.RGBA;
    if (type === void 0)
      type = this.gl.UNSIGNED_BYTE;
    this.bind_za3lpa$(0);
    this.gl.texImage2D_gqqctv$(this.gl.TEXTURE_2D, 0, format, format, type, data);
    this.width = data.width;
    this.height = data.height;
    return this;
  };
  KmlGlTex.prototype.dispose = function () {
    var it = KmlNativeBuffer_init(1);
    it.setInt_vux9f0$(0, this.tex);
    this.gl.deleteTextures_h86ci1$(1, it);
  };
  KmlGlTex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlTex',
    interfaces: []
  };
  function createKmlTexture($receiver) {
    var it = KmlNativeBuffer_init(4);
    $receiver.genTextures_h86ci1$(1, it);
    var buf = it.getInt_za3lpa$(0);
    return (new KmlGlTex($receiver, buf)).upload_ajpbo3$(1, 1, KmlNativeBuffer_init(4));
  }
  function uniformTex($receiver, location, tex, unit) {
    tex.bind_za3lpa$(unit);
    $receiver.uniform1i_vux9f0$(location, unit);
  }
  function KmlGlUtil() {
    KmlGlUtil_instance = this;
  }
  var sliceFloat32Buffer = $module$kmem_js.com.soywiz.kmem.sliceFloat32Buffer_3gn6rj$;
  var ArrayBuffer_init = ArrayBuffer;
  KmlGlUtil.prototype.ortho_wwalyr$ = function (width, height, near, far, out) {
    if (near === void 0)
      near = 0.0;
    if (far === void 0)
      far = 1.0;
    if (out === void 0) {
      out = sliceFloat32Buffer(new ArrayBuffer_init((64 * 4 | 0) + 15 & -16));
    }
    return this.ortho_67zf3n$(height, 0.0, 0.0, width, near, far, out);
  };
  KmlGlUtil.prototype.ortho_67zf3n$ = function (bottom, top, left, right, near, far, M) {
    if (M === void 0) {
      M = sliceFloat32Buffer(new ArrayBuffer_init((16 * 4 | 0) + 15 & -16));
    }
    M[0] = 2 / (right - left);
    M[1] = 0.0;
    M[2] = 0.0;
    M[3] = 0.0;
    M[4] = 0.0;
    M[5] = 2 / (top - bottom);
    M[6] = 0.0;
    M[7] = 0.0;
    M[8] = 0.0;
    M[9] = 0.0;
    M[10] = -2 / (far - near);
    M[11] = 0.0;
    M[12] = -(right + left) / (right - left);
    M[13] = -(top + bottom) / (top - bottom);
    M[14] = -(far + near) / (far - near);
    M[15] = 1.0;
    return M.buffer;
  };
  KmlGlUtil.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KmlGlUtil',
    interfaces: []
  };
  var KmlGlUtil_instance = null;
  function KmlGlUtil_getInstance() {
    if (KmlGlUtil_instance === null) {
      new KmlGlUtil();
    }
    return KmlGlUtil_instance;
  }
  function KmlGlJsCanvas(canvas, glOpts) {
    KmlGl.call(this);
    this.canvas = canvas;
    this.glOpts = glOpts;
    var tmp$;
    this.gl = (tmp$ = this.canvas.getContext('webgl', this.glOpts)) != null ? tmp$ : this.canvas.getContext('experimental-webgl', this.glOpts);
    this.items_0 = Kotlin.newArray(8192, null);
    this.freeList_0 = toMutableList(reversed(until(1, this.items_0.length)));
  }
  KmlGlJsCanvas.prototype.alloc_0 = function ($receiver) {
    if ($receiver === null)
      return 0;
    if ($receiver.id === undefined) {
      var index = this.freeList_0.removeAt_za3lpa$(this.freeList_0.size - 1 | 0);
      this.items_0[index] = $receiver;
      $receiver.id = index;
    }
    return $receiver.id;
  };
  KmlGlJsCanvas.prototype.get_0 = function ($receiver) {
    return $receiver !== 0 ? this.items_0[$receiver] : null;
  };
  KmlGlJsCanvas.prototype.free_0 = function ($receiver) {
    var block$result;
    if ($receiver !== 0) {
      var out = this.items_0[$receiver];
      this.freeList_0.add_11rb$($receiver);
      this.items_0[$receiver] = null;
      block$result = out;
    }
     else {
      block$result = null;
    }
    return block$result;
  };
  KmlGlJsCanvas.prototype.activeTexture_za3lpa$ = function (texture) {
    this.gl.activeTexture(texture);
  };
  KmlGlJsCanvas.prototype.attachShader_vux9f0$ = function (program, shader) {
    this.gl.attachShader(this.get_0(program), this.get_0(shader));
  };
  KmlGlJsCanvas.prototype.bindAttribLocation_98i29q$ = function (program, index, name) {
    this.gl.bindAttribLocation(this.get_0(program), index, name);
  };
  KmlGlJsCanvas.prototype.bindBuffer_vux9f0$ = function (target, buffer) {
    this.gl.bindBuffer(target, this.get_0(buffer));
  };
  KmlGlJsCanvas.prototype.bindFramebuffer_vux9f0$ = function (target, framebuffer) {
    this.gl.bindFramebuffer(target, this.get_0(framebuffer));
  };
  KmlGlJsCanvas.prototype.bindRenderbuffer_vux9f0$ = function (target, renderbuffer) {
    this.gl.bindRenderbuffer(target, this.get_0(renderbuffer));
  };
  KmlGlJsCanvas.prototype.bindTexture_vux9f0$ = function (target, texture) {
    this.gl.bindTexture(target, this.get_0(texture));
  };
  KmlGlJsCanvas.prototype.blendColor_7b5o5w$ = function (red, green, blue, alpha) {
    this.gl.blendColor(red, green, blue, alpha);
  };
  KmlGlJsCanvas.prototype.blendEquation_za3lpa$ = function (mode) {
    this.gl.blendEquation(mode);
  };
  KmlGlJsCanvas.prototype.blendEquationSeparate_vux9f0$ = function (modeRGB, modeAlpha) {
    this.gl.blendEquationSeparate(modeRGB, modeAlpha);
  };
  KmlGlJsCanvas.prototype.blendFunc_vux9f0$ = function (sfactor, dfactor) {
    this.gl.blendFunc(sfactor, dfactor);
  };
  KmlGlJsCanvas.prototype.blendFuncSeparate_tjonv8$ = function (sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha) {
    this.gl.blendFuncSeparate(sfactorRGB, dfactorRGB, sfactorAlpha, dfactorAlpha);
  };
  KmlGlJsCanvas.prototype.bufferData_h17dt1$ = function (target, size, data, usage) {
    this.gl.bufferData(target, new Uint8Array(get_arrayBuffer(data), 0, size), usage);
  };
  KmlGlJsCanvas.prototype.bufferSubData_ebfds9$ = function (target, offset, size, data) {
    this.gl.bufferSubData(target, offset, new Uint8Array(get_arrayBuffer(data), 0, size));
  };
  KmlGlJsCanvas.prototype.checkFramebufferStatus_za3lpa$ = function (target) {
    return this.gl.checkFramebufferStatus(target);
  };
  KmlGlJsCanvas.prototype.clear_za3lpa$ = function (mask) {
    this.gl.clear(mask);
  };
  KmlGlJsCanvas.prototype.clearColor_7b5o5w$ = function (red, green, blue, alpha) {
    this.gl.clearColor(red, green, blue, alpha);
  };
  KmlGlJsCanvas.prototype.clearDepthf_mx4ult$ = function (d) {
    this.gl.clearDepth(d);
  };
  KmlGlJsCanvas.prototype.clearStencil_za3lpa$ = function (s) {
    this.gl.clearStencil(s);
  };
  KmlGlJsCanvas.prototype.colorMask_nyyhg$ = function (red, green, blue, alpha) {
    this.gl.colorMask(red, green, blue, alpha);
  };
  KmlGlJsCanvas.prototype.compileShader_za3lpa$ = function (shader) {
    this.gl.compileShader(this.get_0(shader));
  };
  KmlGlJsCanvas.prototype.compressedTexImage2D_uh7f9l$ = function (target, level, internalformat, width, height, border, imageSize, data) {
    this.gl.compressedTexImage2D(target, level, internalformat, width, height, border, data != null ? data.arrayByte : null);
  };
  KmlGlJsCanvas.prototype.compressedTexSubImage2D_yd22hf$ = function (target, level, xoffset, yoffset, width, height, format, imageSize, data) {
    this.gl.compressedTexSubImage2D(target, level, xoffset, yoffset, width, height, format, data != null ? data.arrayByte : null);
  };
  KmlGlJsCanvas.prototype.copyTexImage2D_wrdw30$ = function (target, level, internalformat, x, y, width, height, border) {
    this.gl.copyTexImage2D(target, level, internalformat, x, y, width, height, border);
  };
  KmlGlJsCanvas.prototype.copyTexSubImage2D_wrdw30$ = function (target, level, xoffset, yoffset, x, y, width, height) {
    this.gl.copyTexSubImage2D(target, level, xoffset, yoffset, x, y, width, height);
  };
  KmlGlJsCanvas.prototype.createProgram = function () {
    return this.alloc_0(this.gl.createProgram());
  };
  KmlGlJsCanvas.prototype.createShader_za3lpa$ = function (type) {
    return this.alloc_0(this.gl.createShader(type));
  };
  KmlGlJsCanvas.prototype.cullFace_za3lpa$ = function (mode) {
    this.gl.cullFace(mode);
  };
  KmlGlJsCanvas.prototype.deleteBuffers_h86ci1$ = function (n, items) {
    for (var p = 0; p < n; p++) {
      this.gl.deleteBuffer(this.free_0(items.arrayInt[p]));
    }
  };
  KmlGlJsCanvas.prototype.deleteFramebuffers_h86ci1$ = function (n, items) {
    for (var p = 0; p < n; p++) {
      this.gl.deleteFramebuffer(this.free_0(items.arrayInt[p]));
    }
  };
  KmlGlJsCanvas.prototype.deleteProgram_za3lpa$ = function (program) {
    this.gl.deleteProgram(this.get_0(program));
  };
  KmlGlJsCanvas.prototype.deleteRenderbuffers_h86ci1$ = function (n, items) {
    for (var p = 0; p < n; p++) {
      this.gl.deleteRenderbuffer(this.free_0(items.arrayInt[p]));
    }
  };
  KmlGlJsCanvas.prototype.deleteShader_za3lpa$ = function (shader) {
    this.gl.deleteShader(this.get_0(shader));
  };
  KmlGlJsCanvas.prototype.deleteTextures_h86ci1$ = function (n, items) {
    for (var p = 0; p < n; p++) {
      this.gl.deleteTexture(this.free_0(items.arrayInt[p]));
    }
  };
  KmlGlJsCanvas.prototype.depthFunc_za3lpa$ = function (func) {
    this.gl.depthFunc(func);
  };
  KmlGlJsCanvas.prototype.depthMask_6taknv$ = function (flag) {
    this.gl.depthMask(flag);
  };
  KmlGlJsCanvas.prototype.depthRangef_dleff0$ = function (n, f) {
    this.gl.depthRange(n, f);
  };
  KmlGlJsCanvas.prototype.detachShader_vux9f0$ = function (program, shader) {
    this.gl.detachShader(this.get_0(program), this.get_0(shader));
  };
  KmlGlJsCanvas.prototype.disable_za3lpa$ = function (cap) {
    this.gl.disable(cap);
  };
  KmlGlJsCanvas.prototype.disableVertexAttribArray_za3lpa$ = function (index) {
    this.gl.disableVertexAttribArray(index);
  };
  KmlGlJsCanvas.prototype.drawArrays_qt1dr2$ = function (mode, first, count) {
    this.gl.drawArrays(mode, first, count);
  };
  KmlGlJsCanvas.prototype.drawElements_tjonv8$ = function (mode, count, type, indices) {
    this.gl.drawElements(mode, count, type, indices);
  };
  KmlGlJsCanvas.prototype.enable_za3lpa$ = function (cap) {
    this.gl.enable(cap);
  };
  KmlGlJsCanvas.prototype.enableVertexAttribArray_za3lpa$ = function (index) {
    this.gl.enableVertexAttribArray(index);
  };
  KmlGlJsCanvas.prototype.finish = function () {
    this.gl.finish();
  };
  KmlGlJsCanvas.prototype.flush = function () {
    this.gl.flush();
  };
  KmlGlJsCanvas.prototype.framebufferRenderbuffer_tjonv8$ = function (target, attachment, renderbuffertarget, renderbuffer) {
    this.gl.framebufferRenderbuffer(target, attachment, renderbuffertarget, this.get_0(renderbuffer));
  };
  KmlGlJsCanvas.prototype.framebufferTexture2D_4qozqa$ = function (target, attachment, textarget, texture, level) {
    this.gl.framebufferTexture2D(target, attachment, textarget, this.get_0(texture), level);
  };
  KmlGlJsCanvas.prototype.frontFace_za3lpa$ = function (mode) {
    this.gl.frontFace(mode);
  };
  KmlGlJsCanvas.prototype.genBuffers_h86ci1$ = function (n, buffers) {
    for (var p = 0; p < n; p++) {
      buffers.arrayInt[p] = this.alloc_0(this.gl.createBuffer());
    }
  };
  KmlGlJsCanvas.prototype.generateMipmap_za3lpa$ = function (target) {
    this.gl.generateMipmap(target);
  };
  KmlGlJsCanvas.prototype.genFramebuffers_h86ci1$ = function (n, framebuffers) {
    for (var p = 0; p < n; p++) {
      framebuffers.arrayInt[p] = this.alloc_0(this.gl.createFramebuffer());
    }
  };
  KmlGlJsCanvas.prototype.genRenderbuffers_h86ci1$ = function (n, renderbuffers) {
    for (var p = 0; p < n; p++) {
      renderbuffers.arrayInt[p] = this.alloc_0(this.gl.createRenderbuffer());
    }
  };
  KmlGlJsCanvas.prototype.genTextures_h86ci1$ = function (n, textures) {
    for (var p = 0; p < n; p++) {
      textures.arrayInt[p] = this.alloc_0(this.gl.createTexture());
    }
  };
  KmlGlJsCanvas.prototype.getActiveAttrib_2j7v7i$ = function (program, index, bufSize, length, size, type, name) {
    var info = ensureNotNull(this.gl.getActiveAttrib(this.get_0(program), index));
    size.arrayInt[0] = info.size;
    type.arrayInt[0] = info.type;
    putAsciiString(name, info.name);
    length.arrayInt[0] = info.size + 1 | 0;
  };
  KmlGlJsCanvas.prototype.getActiveUniform_2j7v7i$ = function (program, index, bufSize, length, size, type, name) {
    var info = ensureNotNull(this.gl.getActiveUniform(this.get_0(program), index));
    size.arrayInt[0] = info.size;
    type.arrayInt[0] = info.type;
    putAsciiString(name, info.name);
    length.arrayInt[0] = info.size + 1 | 0;
  };
  var Math_0 = Math;
  KmlGlJsCanvas.prototype.getAttachedShaders_o7ptx6$ = function (program, maxCount, count, shaders) {
    var tmp$;
    var ashaders = ensureNotNull(this.gl.getAttachedShaders(this.get_0(program)));
    count.arrayInt[0] = ashaders.length;
    tmp$ = Math_0.min(maxCount, ashaders.length);
    for (var n = 0; n < tmp$; n++) {
      shaders.arrayInt[n] = ashaders[n].id;
    }
  };
  KmlGlJsCanvas.prototype.getAttribLocation_19mbxw$ = function (program, name) {
    return this.gl.getAttribLocation(this.get_0(program), name);
  };
  KmlGlJsCanvas.prototype.getUniformLocation_19mbxw$ = function (program, name) {
    var prg = this.get_0(program);
    if (prg.uniforms === undefined)
      prg.uniforms = {};
    if (prg.uniforms[name] === undefined)
      prg.uniforms[name] = this.alloc_0(this.gl.getUniformLocation(prg, name));
    return prg.uniforms[name];
  };
  KmlGlJsCanvas.prototype.getBooleanv_h86ci1$ = function (pname, data) {
    data.arrayInt[0] = this.gl.getParameter(pname);
  };
  KmlGlJsCanvas.prototype.getBufferParameteriv_yd7u0d$ = function (target, pname, params) {
    params.arrayInt[0] = this.gl.getBufferParameter(target, pname);
  };
  KmlGlJsCanvas.prototype.getError = function () {
    return this.gl.getError();
  };
  KmlGlJsCanvas.prototype.getFloatv_h86ci1$ = function (pname, data) {
    data.arrayFloat[0] = this.gl.getParameter(pname);
  };
  KmlGlJsCanvas.prototype.getFramebufferAttachmentParameteriv_ebfds9$ = function (target, attachment, pname, params) {
    params.arrayInt[0] = this.gl.getFramebufferAttachmentParameter(target, attachment, pname);
  };
  KmlGlJsCanvas.prototype.getIntegerv_h86ci1$ = function (pname, data) {
    data.arrayInt[0] = this.gl.getParameter(pname);
  };
  KmlGlJsCanvas.prototype.getProgramInfoLog_o7ptx6$ = function (program, bufSize, length, infoLog) {
    var tmp$;
    var str = (tmp$ = this.gl.getProgramInfoLog(this.get_0(program))) != null ? tmp$ : '';
    length.arrayInt[0] = str.length;
    putAsciiString(infoLog, str);
  };
  KmlGlJsCanvas.prototype.getRenderbufferParameteriv_yd7u0d$ = function (target, pname, params) {
    params.arrayInt[0] = this.gl.getRenderbufferParameter(target, pname);
  };
  KmlGlJsCanvas.prototype.getProgramiv_yd7u0d$ = function (program, pname, params) {
    var tmp$, tmp$_0, tmp$_1;
    if (pname === this.INFO_LOG_LENGTH) {
      params.arrayInt[0] = (tmp$_1 = (tmp$_0 = (tmp$ = this.gl.getProgramInfoLog(this.get_0(program))) != null ? tmp$.length : null) != null ? tmp$_0 + 1 | 0 : null) != null ? tmp$_1 : 1;
    }
     else {
      params.arrayInt[0] = this.gl.getProgramParameter(this.get_0(program), pname);
    }
  };
  KmlGlJsCanvas.prototype.getShaderiv_yd7u0d$ = function (shader, pname, params) {
    var tmp$, tmp$_0, tmp$_1;
    if (pname === this.INFO_LOG_LENGTH) {
      params.arrayInt[0] = (tmp$_1 = (tmp$_0 = (tmp$ = this.gl.getShaderInfoLog(this.get_0(shader))) != null ? tmp$.length : null) != null ? tmp$_0 + 1 | 0 : null) != null ? tmp$_1 : 1;
    }
     else {
      params.arrayInt[0] = this.gl.getShaderParameter(this.get_0(shader), pname);
    }
  };
  KmlGlJsCanvas.prototype.getShaderInfoLog_o7ptx6$ = function (shader, bufSize, length, infoLog) {
    var tmp$;
    var str = (tmp$ = this.gl.getShaderInfoLog(this.get_0(shader))) != null ? tmp$ : '';
    length.arrayInt[0] = str.length;
    putAsciiString(infoLog, str);
  };
  KmlGlJsCanvas.prototype.getShaderPrecisionFormat_o7ptx6$ = function (shadertype, precisiontype, range, precision) {
    var info = this.gl.getShaderPrecisionFormat(shadertype, precisiontype);
    if (info != null) {
      range.arrayInt[0] = info.rangeMin;
      range.arrayInt[1] = info.rangeMax;
      precision.arrayInt[0] = info.precision;
    }
  };
  KmlGlJsCanvas.prototype.getShaderSource_o7ptx6$ = function (shader, bufSize, length, source) {
    var tmp$;
    var str = (tmp$ = this.gl.getShaderSource(this.get_0(shader))) != null ? tmp$ : '';
    length.arrayInt[0] = str.length;
    putAsciiString(source, str);
  };
  KmlGlJsCanvas.prototype.getString_za3lpa$ = function (name) {
    return this.gl.getParameter(name);
  };
  KmlGlJsCanvas.prototype.getTexParameterfv_yd7u0d$ = function (target, pname, params) {
    params.arrayFloat[0] = this.gl.getTexParameter(target, pname);
  };
  KmlGlJsCanvas.prototype.getTexParameteriv_yd7u0d$ = function (target, pname, params) {
    params.arrayInt[0] = this.gl.getTexParameter(target, pname);
  };
  KmlGlJsCanvas.prototype.getUniformfv_yd7u0d$ = function (program, location, params) {
    params.arrayFloat[0] = this.gl.getUniform(this.get_0(program), this.get_0(location));
  };
  KmlGlJsCanvas.prototype.getUniformiv_yd7u0d$ = function (program, location, params) {
    params.arrayInt[0] = this.gl.getUniform(this.get_0(program), this.get_0(location));
  };
  KmlGlJsCanvas.prototype.getVertexAttribfv_yd7u0d$ = function (index, pname, params) {
    params.arrayFloat[0] = this.gl.getVertexAttrib(index, pname);
  };
  KmlGlJsCanvas.prototype.getVertexAttribiv_yd7u0d$ = function (index, pname, params) {
    params.arrayInt[0] = this.gl.getVertexAttrib(index, pname);
  };
  KmlGlJsCanvas.prototype.getVertexAttribPointerv_yd7u0d$ = function (index, pname, pointer) {
    pointer.arrayInt[0] = this.gl.getVertexAttrib(index, pname);
  };
  KmlGlJsCanvas.prototype.hint_vux9f0$ = function (target, mode) {
    this.gl.hint(target, mode);
  };
  KmlGlJsCanvas.prototype.isBuffer_za3lpa$ = function (buffer) {
    return this.gl.isBuffer(this.get_0(buffer));
  };
  KmlGlJsCanvas.prototype.isEnabled_za3lpa$ = function (cap) {
    return this.gl.isEnabled(cap);
  };
  KmlGlJsCanvas.prototype.isFramebuffer_za3lpa$ = function (framebuffer) {
    return this.gl.isFramebuffer(this.get_0(framebuffer));
  };
  KmlGlJsCanvas.prototype.isProgram_za3lpa$ = function (program) {
    return this.gl.isProgram(this.get_0(program));
  };
  KmlGlJsCanvas.prototype.isRenderbuffer_za3lpa$ = function (renderbuffer) {
    return this.gl.isRenderbuffer(this.get_0(renderbuffer));
  };
  KmlGlJsCanvas.prototype.isShader_za3lpa$ = function (shader) {
    return this.gl.isShader(this.get_0(shader));
  };
  KmlGlJsCanvas.prototype.isTexture_za3lpa$ = function (texture) {
    return this.gl.isTexture(this.get_0(texture));
  };
  KmlGlJsCanvas.prototype.lineWidth_mx4ult$ = function (width) {
    this.gl.lineWidth(width);
  };
  KmlGlJsCanvas.prototype.linkProgram_za3lpa$ = function (program) {
    this.gl.linkProgram(this.get_0(program));
  };
  KmlGlJsCanvas.prototype.pixelStorei_vux9f0$ = function (pname, param) {
    this.gl.pixelStorei(pname, param);
  };
  KmlGlJsCanvas.prototype.polygonOffset_dleff0$ = function (factor, units) {
    this.gl.polygonOffset(factor, units);
  };
  KmlGlJsCanvas.prototype.readPixels_mk0vkj$ = function (x, y, width, height, format, type, pixels) {
    this.gl.readPixels(x, y, width, height, format, type, get_arrayUByte(pixels));
  };
  KmlGlJsCanvas.prototype.releaseShaderCompiler = function () {
  };
  KmlGlJsCanvas.prototype.renderbufferStorage_tjonv8$ = function (target, internalformat, width, height) {
    this.gl.renderbufferStorage(target, internalformat, width, height);
  };
  KmlGlJsCanvas.prototype.sampleCoverage_8ca0d4$ = function (value, invert) {
    this.gl.sampleCoverage(value, invert);
  };
  KmlGlJsCanvas.prototype.scissor_tjonv8$ = function (x, y, width, height) {
    this.gl.scissor(x, y, width, height);
  };
  KmlGlJsCanvas.prototype.shaderBinary_1o7eri$ = function (count, shaders, binaryformat, binary, length) {
    throw new KmlGlException('shaderBinary not implemented in Webgl');
  };
  KmlGlJsCanvas.prototype.shaderSource_19mbxw$ = function (shader, string) {
    this.gl.shaderSource(this.get_0(shader), '#ifdef GL_ES' + '\n' + 'precision mediump float;' + '\n' + '#endif' + '\n' + string);
  };
  KmlGlJsCanvas.prototype.stencilFunc_qt1dr2$ = function (func, ref, mask) {
    this.gl.stencilFunc(func, ref, mask);
  };
  KmlGlJsCanvas.prototype.stencilFuncSeparate_tjonv8$ = function (face, func, ref, mask) {
    this.gl.stencilFuncSeparate(face, func, ref, mask);
  };
  KmlGlJsCanvas.prototype.stencilMask_za3lpa$ = function (mask) {
    this.gl.stencilMask(mask);
  };
  KmlGlJsCanvas.prototype.stencilMaskSeparate_vux9f0$ = function (face, mask) {
    this.gl.stencilMaskSeparate(face, mask);
  };
  KmlGlJsCanvas.prototype.stencilOp_qt1dr2$ = function (fail, zfail, zpass) {
    this.gl.stencilOp(fail, zfail, zpass);
  };
  KmlGlJsCanvas.prototype.stencilOpSeparate_tjonv8$ = function (face, sfail, dpfail, dppass) {
    this.gl.stencilOpSeparate(face, sfail, dpfail, dppass);
  };
  KmlGlJsCanvas.prototype.texImage2D_7wol0$ = function (target, level, internalformat, width, height, border, format, type, pixels) {
    this.gl.texImage2D(target, level, internalformat, width, height, border, format, type, pixels != null ? get_arrayUByte(pixels) : null);
  };
  KmlGlJsCanvas.prototype.texImage2D_gqqctv$ = function (target, level, internalformat, format, type, data) {
    var tmp$;
    this.gl.texImage2D(target, level, internalformat, format, type, (Kotlin.isType(tmp$ = data, HtmlNativeImage) ? tmp$ : throwCCE()).texSource);
  };
  KmlGlJsCanvas.prototype.texParameterf_n0b4r3$ = function (target, pname, param) {
    this.gl.texParameterf(target, pname, param);
  };
  KmlGlJsCanvas.prototype.texParameterfv_yd7u0d$ = function (target, pname, params) {
    this.gl.texParameterf(target, pname, params.arrayFloat[0]);
  };
  KmlGlJsCanvas.prototype.texParameteri_qt1dr2$ = function (target, pname, param) {
    this.gl.texParameteri(target, pname, param);
  };
  KmlGlJsCanvas.prototype.texParameteriv_yd7u0d$ = function (target, pname, params) {
    this.gl.texParameteri(target, pname, params.arrayInt[0]);
  };
  KmlGlJsCanvas.prototype.texSubImage2D_yd22hf$ = function (target, level, xoffset, yoffset, width, height, format, type, pixels) {
    this.gl.texSubImage2D(target, level, xoffset, yoffset, width, height, format, type, get_arrayUByte(pixels));
  };
  KmlGlJsCanvas.prototype.uniform1f_24o109$ = function (location, v0) {
    this.gl.uniform1f(this.get_0(location), v0);
  };
  KmlGlJsCanvas.prototype.uniform1fv_yd7u0d$ = function (location, count, value) {
    this.gl.uniform1fv(this.get_0(location), value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniform1i_vux9f0$ = function (location, v0) {
    this.gl.uniform1i(this.get_0(location), v0);
  };
  KmlGlJsCanvas.prototype.uniform1iv_yd7u0d$ = function (location, count, value) {
    this.gl.uniform1iv(this.get_0(location), value.arrayInt);
  };
  KmlGlJsCanvas.prototype.uniform2f_nhq4am$ = function (location, v0, v1) {
    this.gl.uniform2f(this.get_0(location), v0, v1);
  };
  KmlGlJsCanvas.prototype.uniform2fv_yd7u0d$ = function (location, count, value) {
    this.gl.uniform2fv(this.get_0(location), value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniform2i_qt1dr2$ = function (location, v0, v1) {
    this.gl.uniform2i(this.get_0(location), v0, v1);
  };
  KmlGlJsCanvas.prototype.uniform2iv_yd7u0d$ = function (location, count, value) {
    this.gl.uniform2iv(this.get_0(location), value.arrayInt);
  };
  KmlGlJsCanvas.prototype.uniform3f_eyukp3$ = function (location, v0, v1, v2) {
    this.gl.uniform3f(this.get_0(location), v0, v1, v2);
  };
  KmlGlJsCanvas.prototype.uniform3fv_yd7u0d$ = function (location, count, value) {
    this.gl.uniform3fv(this.get_0(location), value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniform3i_tjonv8$ = function (location, v0, v1, v2) {
    this.gl.uniform3i(this.get_0(location), v0, v1, v2);
  };
  KmlGlJsCanvas.prototype.uniform3iv_yd7u0d$ = function (location, count, value) {
    this.gl.uniform3iv(this.get_0(location), value.arrayInt);
  };
  KmlGlJsCanvas.prototype.uniform4f_xpxj32$ = function (location, v0, v1, v2, v3) {
    this.gl.uniform4f(this.get_0(location), v0, v1, v2, v3);
  };
  KmlGlJsCanvas.prototype.uniform4fv_yd7u0d$ = function (location, count, value) {
    this.gl.uniform4fv(this.get_0(location), value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniform4i_4qozqa$ = function (location, v0, v1, v2, v3) {
    this.gl.uniform4i(this.get_0(location), v0, v1, v2, v3);
  };
  KmlGlJsCanvas.prototype.uniform4iv_yd7u0d$ = function (location, count, value) {
    this.gl.uniform4iv(this.get_0(location), value.arrayInt);
  };
  KmlGlJsCanvas.prototype.uniformMatrix2fv_gsjgaq$ = function (location, count, transpose, value) {
    this.gl.uniformMatrix2fv(this.get_0(location), transpose, value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniformMatrix3fv_gsjgaq$ = function (location, count, transpose, value) {
    this.gl.uniformMatrix3fv(this.get_0(location), transpose, value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.uniformMatrix4fv_gsjgaq$ = function (location, count, transpose, value) {
    this.gl.uniformMatrix4fv(this.get_0(location), transpose, value.arrayFloat);
  };
  KmlGlJsCanvas.prototype.useProgram_za3lpa$ = function (program) {
    this.gl.useProgram(this.get_0(program));
  };
  KmlGlJsCanvas.prototype.validateProgram_za3lpa$ = function (program) {
    this.gl.validateProgram(this.get_0(program));
  };
  KmlGlJsCanvas.prototype.vertexAttrib1f_24o109$ = function (index, x) {
    this.gl.vertexAttrib1f(index, x);
  };
  KmlGlJsCanvas.prototype.vertexAttrib1fv_h86ci1$ = function (index, v) {
    this.gl.vertexAttrib1fv(index, v);
  };
  KmlGlJsCanvas.prototype.vertexAttrib2f_nhq4am$ = function (index, x, y) {
    this.gl.vertexAttrib2f(index, x, y);
  };
  KmlGlJsCanvas.prototype.vertexAttrib2fv_h86ci1$ = function (index, v) {
    this.gl.vertexAttrib2fv(index, v);
  };
  KmlGlJsCanvas.prototype.vertexAttrib3f_eyukp3$ = function (index, x, y, z) {
    this.gl.vertexAttrib3f(index, x, y, z);
  };
  KmlGlJsCanvas.prototype.vertexAttrib3fv_h86ci1$ = function (index, v) {
    this.gl.vertexAttrib3fv(index, v);
  };
  KmlGlJsCanvas.prototype.vertexAttrib4f_xpxj32$ = function (index, x, y, z, w) {
    this.gl.vertexAttrib4f(index, x, y, z, w);
  };
  KmlGlJsCanvas.prototype.vertexAttrib4fv_h86ci1$ = function (index, v) {
    this.gl.vertexAttrib4fv(index, v);
  };
  KmlGlJsCanvas.prototype.vertexAttribPointer_owihk5$ = function (index, size, type, normalized, stride, pointer) {
    this.gl.vertexAttribPointer(index, size, type, normalized, stride, pointer);
  };
  KmlGlJsCanvas.prototype.viewport_tjonv8$ = function (x, y, width, height) {
    this.gl.viewport(x, y, width, height);
  };
  KmlGlJsCanvas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlGlJsCanvas',
    interfaces: [KmlGl]
  };
  function get_arrayBuffer($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.mem, ArrayBuffer) ? tmp$ : throwCCE();
  }
  function get_arrayUByte($receiver) {
    return new Uint8Array($receiver.mem);
  }
  $$importsForInline$$['kmem-js'] = $module$kmem_js;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$kgl = package$soywiz.kgl || (package$soywiz.kgl = {});
  package$kgl.toAsciiString_vgse4k$ = toAsciiString;
  package$kgl.putAsciiString_5apqrm$ = putAsciiString;
  package$kgl.kmlByteBufferOf_wcry4u$ = kmlByteBufferOf;
  package$kgl.kmlShortBufferOf_yd0neo$ = kmlShortBufferOf;
  package$kgl.kmlIntBufferOf_pmhfmb$ = kmlIntBufferOf;
  package$kgl.kmlFloatBufferOf_8cqhcw$ = kmlFloatBufferOf;
  $$importsForInline$$['kgl-js'] = _;
  package$kgl.DataBufferAlloc_poguz7$ = DataBufferAlloc;
  package$kgl.toTempBuffer_x7bddt$ = toTempBuffer;
  package$kgl.KmlGl = KmlGl;
  Object.defineProperty(package$kgl, 'KmlGlDummy', {
    get: KmlGlDummy_getInstance
  });
  package$kgl.KmlGlException = KmlGlException;
  package$kgl.getShaderiv_3majd4$ = getShaderiv;
  package$kgl.getProgramiv_3majd4$ = getProgramiv;
  package$kgl.getBooleanv_4t3mty$ = getBooleanv;
  package$kgl.getFloatv_4t3mty$ = getFloatv;
  package$kgl.getIntegerv_4t3mty$ = getIntegerv;
  package$kgl.getShaderInfoLog_4t3mty$ = getShaderInfoLog;
  package$kgl.getProgramInfoLog_4t3mty$ = getProgramInfoLog;
  package$kgl.compileShaderAndCheck_4t3mty$ = compileShaderAndCheck;
  package$kgl.linkProgramAndCheck_4t3mty$ = linkProgramAndCheck;
  package$kgl.getErrorString_4t3mty$ = getErrorString;
  package$kgl.KmlGlProxy = KmlGlProxy;
  package$kgl.LogKmlGlProxy = LogKmlGlProxy;
  package$kgl.CheckErrorsKmlGlProxy = CheckErrorsKmlGlProxy;
  package$kgl.KmlGlProgram = KmlGlProgram;
  package$kgl.createProgram_7lf8po$ = createProgram;
  KmlGlVertexLayout.Element = KmlGlVertexLayout$Element;
  package$kgl.KmlGlVertexLayout = KmlGlVertexLayout;
  package$kgl.layout_dhxfg8$ = layout;
  package$kgl.KmlGlBuffer = KmlGlBuffer;
  package$kgl.createBuffer_4t3mty$ = createBuffer;
  package$kgl.createArrayBuffer_v5mrd8$ = createArrayBuffer;
  package$kgl.createElementArrayBuffer_v5mrd8$ = createElementArrayBuffer;
  package$kgl.drawArrays_pvmwt$ = drawArrays;
  package$kgl.drawElements_albd6e$ = drawElements;
  package$kgl.KmlGlTex = KmlGlTex;
  package$kgl.createKmlTexture_v5mrd8$ = createKmlTexture;
  package$kgl.uniformTex_5p5ms8$ = uniformTex;
  Object.defineProperty(package$kgl, 'KmlGlUtil', {
    get: KmlGlUtil_getInstance
  });
  package$kgl.KmlGlJsCanvas = KmlGlJsCanvas;
  package$kgl.get_arrayBuffer_vgse4k$ = get_arrayBuffer;
  package$kgl.get_arrayUByte_vgse4k$ = get_arrayUByte;
  Kotlin.defineModule('kgl-js', _);
  return _;
}));

//# sourceMappingURL=kgl-js.js.map
