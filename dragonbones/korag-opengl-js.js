(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korag-js', 'kmem-js', 'korma-js', 'korio-js', 'kgl-js', 'klogger-js', 'korim-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korag-js'), require('kmem-js'), require('korma-js'), require('korio-js'), require('kgl-js'), require('klogger-js'), require('korim-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korag-opengl-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korag-opengl-js'.");
    }
    if (typeof this['korag-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-opengl-js'. Its dependency 'korag-js' was not found. Please, check whether 'korag-js' is loaded prior to 'korag-opengl-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-opengl-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'korag-opengl-js'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-opengl-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korag-opengl-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-opengl-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korag-opengl-js'.");
    }
    if (typeof this['kgl-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-opengl-js'. Its dependency 'kgl-js' was not found. Please, check whether 'kgl-js' is loaded prior to 'korag-opengl-js'.");
    }
    if (typeof this['klogger-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-opengl-js'. Its dependency 'klogger-js' was not found. Please, check whether 'klogger-js' is loaded prior to 'korag-opengl-js'.");
    }
    if (typeof this['korim-js'] === 'undefined') {
      throw new Error("Error loading module 'korag-opengl-js'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'korag-opengl-js'.");
    }
    root['korag-opengl-js'] = factory(typeof this['korag-opengl-js'] === 'undefined' ? {} : this['korag-opengl-js'], kotlin, this['korag-js'], this['kmem-js'], this['korma-js'], this['korio-js'], this['kgl-js'], this['klogger-js'], this['korim-js']);
  }
}(this, function (_, Kotlin, $module$korag_js, $module$kmem_js, $module$korma_js, $module$korio_js, $module$kgl_js, $module$klogger_js, $module$korim_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var AG = $module$korag_js.com.soywiz.korag.AG;
  var Unit = Kotlin.kotlin.Unit;
  var throwCCE = Kotlin.throwCCE;
  var AG$RenderBuffer = $module$korag_js.com.soywiz.korag.AG.RenderBuffer;
  var KmlNativeBuffer_init = $module$kmem_js.com.soywiz.kmem.KmlNativeBuffer_init_za3lpa$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var toShort = Kotlin.toShort;
  var toShortArray = Kotlin.kotlin.collections.toShortArray_p5z1wt$;
  var AG$TextureUnit = $module$korag_js.com.soywiz.korag.AG.TextureUnit;
  var Matrix4 = $module$korma_js.com.soywiz.korma.Matrix4;
  var setFloats = $module$kmem_js.com.soywiz.kmem.setFloats_x5rszg$;
  var numberToDouble = Kotlin.numberToDouble;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var AG$CompareMode = $module$korag_js.com.soywiz.korag.AG.CompareMode;
  var replace = Kotlin.kotlin.text.replace_680rmw$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toNewGlslString = $module$korag_js.com.soywiz.korag.shader.gl.toNewGlslString_9hqjge$;
  var getShaderiv = $module$kgl_js.com.soywiz.kgl.getShaderiv_3majd4$;
  var getShaderInfoLog = $module$kgl_js.com.soywiz.kgl.getShaderInfoLog_4t3mty$;
  var klogger = $module$klogger_js.com.soywiz.klogger;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Closeable = $module$korio_js.com.soywiz.korio.lang.Closeable;
  var ensureNotNull = Kotlin.ensureNotNull;
  var AG$Buffer = $module$korag_js.com.soywiz.korag.AG.Buffer;
  var AG$Buffer$Kind = $module$korag_js.com.soywiz.korag.AG.Buffer.Kind;
  var unsupported = $module$korio_js.com.soywiz.korio.error.unsupported_61zpoe$;
  var NativeImage = $module$korim_js.com.soywiz.korim.bitmap.NativeImage;
  var arraycopy = $module$kmem_js.com.soywiz.kmem.arraycopy_8tjh9j$;
  var Bitmap8 = $module$korim_js.com.soywiz.korim.bitmap.Bitmap8;
  var arraycopy_0 = $module$kmem_js.com.soywiz.kmem.arraycopy_ou7pqt$;
  var Bitmap32 = $module$korim_js.com.soywiz.korim.bitmap.Bitmap32;
  var unsupported_0 = $module$korio_js.com.soywiz.korio.error.unsupported;
  var AG$Texture = $module$korag_js.com.soywiz.korag.AG.Texture;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var AGFactory = $module$korag_js.com.soywiz.korag.AGFactory;
  var Logger = $module$klogger_js.com.soywiz.klogger.Logger;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var isInfinite = Kotlin.kotlin.isInfinite_yrwdxr$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var KmlGlJsCanvas = $module$kgl_js.com.soywiz.kgl.KmlGlJsCanvas;
  var Once = $module$korio_js.com.soywiz.korio.util.Once;
  var AGContainer = $module$korag_js.com.soywiz.korag.AGContainer;
  AGOpengl$GlRenderBuffer.prototype = Object.create(AG$RenderBuffer.prototype);
  AGOpengl$GlRenderBuffer.prototype.constructor = AGOpengl$GlRenderBuffer;
  AGOpengl$GlBuffer.prototype = Object.create(AG$Buffer.prototype);
  AGOpengl$GlBuffer.prototype.constructor = AGOpengl$GlBuffer;
  AGOpengl$GlTexture.prototype = Object.create(AG$Texture.prototype);
  AGOpengl$GlTexture.prototype.constructor = AGOpengl$GlTexture;
  AGOpengl.prototype = Object.create(AG.prototype);
  AGOpengl.prototype.constructor = AGOpengl;
  AGWebgl.prototype = Object.create(AGOpengl.prototype);
  AGWebgl.prototype.constructor = AGWebgl;
  function AGOpengl() {
    AG.call(this);
    this.devicePixelRatio_n8znee$_0 = 1.0;
    this.tempBuffer1 = KmlNativeBuffer_init(4);
    this.tempBuffer16 = KmlNativeBuffer_init(64);
    this.programs_nsjc6a$_0 = HashMap_init();
  }
  Object.defineProperty(AGOpengl.prototype, 'devicePixelRatio', {
    get: function () {
      return this.devicePixelRatio_n8znee$_0;
    },
    set: function (devicePixelRatio) {
      this.devicePixelRatio_n8znee$_0 = devicePixelRatio;
    }
  });
  AGOpengl.prototype.createBuffer_g6fstm$ = function (kind) {
    return new AGOpengl$GlBuffer(this, kind);
  };
  AGOpengl.prototype.setViewport_tjonv8$ = function (x, y, width, height) {
    AG.prototype.setViewport_tjonv8$.call(this, x, y, width, height);
    this.gl.viewport_tjonv8$(x, y, width, height);
  };
  AGOpengl.prototype.setSwapInterval_za3lpa$ = function (value) {
  };
  function AGOpengl$GlRenderBuffer($outer) {
    this.$outer = $outer;
    AG$RenderBuffer.call(this, this.$outer);
    this.cachedVersion = -1;
    this.renderbufferDepth = KmlNativeBuffer_init(4);
    this.framebuffer = KmlNativeBuffer_init(4);
    this.oldViewport = new Int32Array(4);
  }
  Object.defineProperty(AGOpengl$GlRenderBuffer.prototype, 'wtex', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.tex, AGOpengl$GlTexture) ? tmp$ : throwCCE();
    }
  });
  AGOpengl$GlRenderBuffer.prototype.start_vux9f0$ = function (width, height) {
    this.$outer.setSwapInterval_za3lpa$(0);
    if (this.cachedVersion !== this.$outer.contextVersion) {
      this.cachedVersion = this.$outer.contextVersion;
      this.$outer;
      this.$outer.gl.genRenderbuffers_h86ci1$(1, this.renderbufferDepth);
      this.$outer;
      this.$outer.gl.genFramebuffers_h86ci1$(1, this.framebuffer);
    }
    this.$outer.getViewport_q5rwfd$(this.oldViewport);
    this.$outer;
    var this$AGOpengl = this.$outer;
    this$AGOpengl.gl.bindTexture_vux9f0$(this$AGOpengl.gl.TEXTURE_2D, this.wtex.tex);
    this.$outer;
    var this$AGOpengl_0 = this.$outer;
    this$AGOpengl_0.gl.texParameteri_qt1dr2$(this$AGOpengl_0.gl.TEXTURE_2D, this$AGOpengl_0.gl.TEXTURE_MAG_FILTER, this$AGOpengl_0.gl.LINEAR);
    this.$outer;
    var this$AGOpengl_1 = this.$outer;
    this$AGOpengl_1.gl.texParameteri_qt1dr2$(this$AGOpengl_1.gl.TEXTURE_2D, this$AGOpengl_1.gl.TEXTURE_MIN_FILTER, this$AGOpengl_1.gl.LINEAR);
    this.$outer;
    var this$AGOpengl_2 = this.$outer;
    this$AGOpengl_2.gl.texImage2D_7wol0$(this$AGOpengl_2.gl.TEXTURE_2D, 0, this$AGOpengl_2.gl.RGBA, width, height, 0, this$AGOpengl_2.gl.RGBA, this$AGOpengl_2.gl.UNSIGNED_BYTE, null);
    this.$outer;
    var this$AGOpengl_3 = this.$outer;
    this$AGOpengl_3.gl.bindTexture_vux9f0$(this$AGOpengl_3.gl.TEXTURE_2D, 0);
    this.$outer;
    var this$AGOpengl_4 = this.$outer;
    this$AGOpengl_4.gl.bindRenderbuffer_vux9f0$(this$AGOpengl_4.gl.RENDERBUFFER, this.renderbufferDepth.getInt_za3lpa$(0));
    this.$outer;
    var this$AGOpengl_5 = this.$outer;
    this$AGOpengl_5.gl.renderbufferStorage_tjonv8$(this$AGOpengl_5.gl.RENDERBUFFER, this$AGOpengl_5.gl.DEPTH_COMPONENT16, width, height);
    this.$outer;
    var this$AGOpengl_6 = this.$outer;
    this$AGOpengl_6.gl.bindFramebuffer_vux9f0$(this$AGOpengl_6.gl.FRAMEBUFFER, this.framebuffer.getInt_za3lpa$(0));
    this.$outer;
    var this$AGOpengl_7 = this.$outer;
    this$AGOpengl_7.gl.framebufferTexture2D_4qozqa$(this$AGOpengl_7.gl.FRAMEBUFFER, this$AGOpengl_7.gl.COLOR_ATTACHMENT0, this$AGOpengl_7.gl.TEXTURE_2D, this.wtex.tex, 0);
    this.$outer;
    var this$AGOpengl_8 = this.$outer;
    this$AGOpengl_8.gl.framebufferRenderbuffer_tjonv8$(this$AGOpengl_8.gl.FRAMEBUFFER, this$AGOpengl_8.gl.DEPTH_ATTACHMENT, this$AGOpengl_8.gl.RENDERBUFFER, this.renderbufferDepth.getInt_za3lpa$(0));
    this.$outer.setViewport_tjonv8$(0, 0, width, height);
  };
  AGOpengl$GlRenderBuffer.prototype.end = function () {
    this.$outer;
    var this$AGOpengl = this.$outer;
    this$AGOpengl.gl.bindTexture_vux9f0$(this$AGOpengl.gl.TEXTURE_2D, 0);
    this.$outer;
    var this$AGOpengl_0 = this.$outer;
    this$AGOpengl_0.gl.bindRenderbuffer_vux9f0$(this$AGOpengl_0.gl.RENDERBUFFER, 0);
    this.$outer;
    var this$AGOpengl_1 = this.$outer;
    this$AGOpengl_1.gl.bindFramebuffer_vux9f0$(this$AGOpengl_1.gl.FRAMEBUFFER, 0);
    this.$outer.setViewport_q5rwfd$(this.oldViewport);
  };
  AGOpengl$GlRenderBuffer.prototype.close = function () {
    this.$outer;
    this.$outer.gl.deleteFramebuffers_h86ci1$(1, this.framebuffer);
    this.$outer;
    this.$outer.gl.deleteRenderbuffers_h86ci1$(1, this.renderbufferDepth);
    this.framebuffer.setInt_vux9f0$(0, 0);
    this.renderbufferDepth.setInt_vux9f0$(0, 0);
  };
  AGOpengl$GlRenderBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlRenderBuffer',
    interfaces: [AG$RenderBuffer]
  };
  AGOpengl.prototype.createRenderBuffer = function () {
    return new AGOpengl$GlRenderBuffer(this);
  };
  AGOpengl.prototype.toGl_8vgxol$_0 = function ($receiver) {
    switch ($receiver.name) {
      case 'ADD':
        return this.gl.FUNC_ADD;
      case 'SUBTRACT':
        return this.gl.FUNC_SUBTRACT;
      case 'REVERSE_SUBTRACT':
        return this.gl.FUNC_REVERSE_SUBTRACT;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_yoxntk$_0 = function ($receiver) {
    switch ($receiver.name) {
      case 'DESTINATION_ALPHA':
        return this.gl.DST_ALPHA;
      case 'DESTINATION_COLOR':
        return this.gl.DST_COLOR;
      case 'ONE':
        return this.gl.ONE;
      case 'ONE_MINUS_DESTINATION_ALPHA':
        return this.gl.ONE_MINUS_DST_ALPHA;
      case 'ONE_MINUS_DESTINATION_COLOR':
        return this.gl.ONE_MINUS_DST_COLOR;
      case 'ONE_MINUS_SOURCE_ALPHA':
        return this.gl.ONE_MINUS_SRC_ALPHA;
      case 'ONE_MINUS_SOURCE_COLOR':
        return this.gl.ONE_MINUS_SRC_COLOR;
      case 'SOURCE_ALPHA':
        return this.gl.SRC_ALPHA;
      case 'SOURCE_COLOR':
        return this.gl.SRC_COLOR;
      case 'ZERO':
        return this.gl.ZERO;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_j3v1aq$ = function ($receiver) {
    switch ($receiver.name) {
      case 'FRONT':
        return this.gl.FRONT;
      case 'BACK':
        return this.gl.BACK;
      case 'FRONT_AND_BACK':
        return this.gl.FRONT_AND_BACK;
      case 'NONE':
        return this.gl.FRONT;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_d0rqip$ = function ($receiver) {
    switch ($receiver.name) {
      case 'ALWAYS':
        return this.gl.ALWAYS;
      case 'EQUAL':
        return this.gl.EQUAL;
      case 'GREATER':
        return this.gl.GREATER;
      case 'GREATER_EQUAL':
        return this.gl.GEQUAL;
      case 'LESS':
        return this.gl.LESS;
      case 'LESS_EQUAL':
        return this.gl.LEQUAL;
      case 'NEVER':
        return this.gl.NEVER;
      case 'NOT_EQUAL':
        return this.gl.NOTEQUAL;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.toGl_7ptukq$ = function ($receiver) {
    switch ($receiver.name) {
      case 'DECREMENT_SATURATE':
        return this.gl.DECR;
      case 'DECREMENT_WRAP':
        return this.gl.DECR_WRAP;
      case 'INCREMENT_SATURATE':
        return this.gl.INCR;
      case 'INCREMENT_WRAP':
        return this.gl.INCR_WRAP;
      case 'INVERT':
        return this.gl.INVERT;
      case 'KEEP':
        return this.gl.KEEP;
      case 'SET':
        return this.gl.REPLACE;
      case 'ZERO':
        return this.gl.ZERO;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  AGOpengl.prototype.draw_2mei04$$default = function (vertices, program, type, vertexLayout, vertexCount, indices, offset, blending, uniforms, stencil, colorMask, renderState, scissor) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var mustFreeIndices = indices == null;
    var tmp$_9;
    if (indices != null)
      tmp$_9 = indices;
    else {
      var $receiver = until(0, vertexCount);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_10;
      tmp$_10 = $receiver.iterator();
      while (tmp$_10.hasNext()) {
        var item = tmp$_10.next();
        destination.add_11rb$(toShort(item));
      }
      tmp$_9 = this.createIndexBuffer_359eei$(toShortArray(destination));
    }
    var aindices = tmp$_9;
    if (scissor != null) {
      this.gl.enable_za3lpa$(this.gl.SCISSOR_TEST);
      this.gl.scissor_tjonv8$(scissor.x, this.backHeight - scissor.y - scissor.height | 0, scissor.width, scissor.height);
    }
     else {
      this.gl.disable_za3lpa$(this.gl.SCISSOR_TEST);
    }
    this.checkBuffers_j53ep8$(vertices, aindices);
    var glProgram = this.getProgram_21rgaz$(program);
    (Kotlin.isType(tmp$ = vertices, AGOpengl$GlBuffer) ? tmp$ : throwCCE()).bind_jm7esb$(this.gl);
    (Kotlin.isType(tmp$_0 = aindices, AGOpengl$GlBuffer) ? tmp$_0 : throwCCE()).bind_jm7esb$(this.gl);
    glProgram.use();
    var totalSize = vertexLayout.totalSize;
    tmp$_1 = vertexLayout.attributePositions;
    for (var n = 0; n !== tmp$_1.size; ++n) {
      var att = vertexLayout.attributes.get_za3lpa$(n);
      if (att.active) {
        var off = vertexLayout.attributePositions.get_za3lpa$(n);
        var loc = glProgram.getAttribLocation_61zpoe$(att.name);
        var glElementType = this.get_glElementType_bxje6x$(att.type);
        var elementCount = att.type.elementCount;
        if (loc >= 0) {
          this.gl.enableVertexAttribArray_za3lpa$(loc);
          this.gl.vertexAttribPointer_owihk5$(loc, elementCount, glElementType, att.normalized, totalSize, off);
        }
      }
    }
    var textureUnit = {v: 0};
    tmp$_2 = uniforms.entries.iterator();
    while (tmp$_2.hasNext()) {
      var tmp$_11 = tmp$_2.next();
      var uniform = tmp$_11.key;
      var value = tmp$_11.value;
      var location = this.gl.getUniformLocation_19mbxw$(glProgram.id, uniform.name);
      switch (uniform.type.name) {
        case 'TextureUnit':
          var unit = Kotlin.isType(tmp$_3 = value, AG$TextureUnit) ? tmp$_3 : throwCCE();
          this.gl.activeTexture_za3lpa$(this.gl.TEXTURE0 + textureUnit.v | 0);
          var tex = (tmp$_4 = unit.texture) == null || Kotlin.isType(tmp$_4, AGOpengl$GlTexture) ? tmp$_4 : throwCCE();
          tex != null ? (tex.bindEnsuring(), Unit) : null;
          tex != null ? (tex.setFilter_6taknv$(unit.linear), Unit) : null;
          this.gl.uniform1i_vux9f0$(location, textureUnit.v);
          textureUnit.v = textureUnit.v + 1 | 0;
          break;
        case 'Mat4':
          var tmp$_12;
          this.gl.uniformMatrix4fv_gsjgaq$(location, 1, false, setFloats(this.tempBuffer16, 0, (Kotlin.isType(tmp$_12 = value, Matrix4) ? tmp$_12 : throwCCE()).data, 0, 16));
          break;
        case 'Float1':
          var tmp$_13;
          this.gl.uniform1f_24o109$(location, numberToDouble(Kotlin.isNumber(tmp$_13 = value) ? tmp$_13 : throwCCE()));
          break;
        case 'Float2':
          var fa = Kotlin.isFloatArray(tmp$_5 = value) ? tmp$_5 : throwCCE();
          this.gl.uniform2f_nhq4am$(location, fa[0], fa[1]);
          break;
        case 'Float3':
          var fa_0 = Kotlin.isFloatArray(tmp$_6 = value) ? tmp$_6 : throwCCE();
          this.gl.uniform3f_eyukp3$(location, fa_0[0], fa_0[1], fa_0[2]);
          break;
        case 'Float4':
          var fa_1 = Kotlin.isFloatArray(tmp$_7 = value) ? tmp$_7 : throwCCE();
          this.gl.uniform4f_xpxj32$(location, fa_1[0], fa_1[1], fa_1[2], fa_1[3]);
          break;
        default:invalidOp("Don't know how to set uniform " + uniform.type);
          break;
      }
    }
    if (blending.enabled) {
      this.gl.enable_za3lpa$(this.gl.BLEND);
      this.gl.blendEquationSeparate_vux9f0$(this.toGl_8vgxol$_0(blending.eqRGB), this.toGl_8vgxol$_0(blending.eqA));
      this.gl.blendFuncSeparate_tjonv8$(this.toGl_yoxntk$_0(blending.srcRGB), this.toGl_yoxntk$_0(blending.dstRGB), this.toGl_yoxntk$_0(blending.srcA), this.toGl_yoxntk$_0(blending.dstA));
    }
     else {
      this.gl.disable_za3lpa$(this.gl.BLEND);
    }
    this.gl.disable_za3lpa$(this.gl.CULL_FACE);
    this.gl.frontFace_za3lpa$(this.gl.CW);
    this.gl.depthMask_6taknv$(renderState.depthMask);
    this.gl.depthRangef_dleff0$(renderState.depthNear, renderState.depthFar);
    this.gl.lineWidth_mx4ult$(renderState.lineWidth);
    if (renderState.depthFunc !== AG$CompareMode.ALWAYS) {
      this.gl.enable_za3lpa$(this.gl.DEPTH_TEST);
      this.gl.depthFunc_za3lpa$(this.toGl_d0rqip$(renderState.depthFunc));
    }
     else {
      this.gl.disable_za3lpa$(this.gl.DEPTH_TEST);
    }
    this.gl.colorMask_nyyhg$(colorMask.red, colorMask.green, colorMask.blue, colorMask.alpha);
    if (stencil.enabled) {
      this.gl.enable_za3lpa$(this.gl.STENCIL_TEST);
      this.gl.stencilFunc_qt1dr2$(this.toGl_d0rqip$(stencil.compareMode), stencil.referenceValue, stencil.readMask);
      this.gl.stencilOp_qt1dr2$(this.toGl_7ptukq$(stencil.actionOnDepthFail), this.toGl_7ptukq$(stencil.actionOnDepthPassStencilFail), this.toGl_7ptukq$(stencil.actionOnBothPass));
      this.gl.stencilMask_za3lpa$(stencil.writeMask);
    }
     else {
      this.gl.disable_za3lpa$(this.gl.STENCIL_TEST);
      this.gl.stencilMask_za3lpa$(0);
    }
    this.gl.drawElements_tjonv8$(this.get_glDrawMode_7dvn3b$(type), vertexCount, this.gl.UNSIGNED_SHORT, offset);
    this.gl.activeTexture_za3lpa$(this.gl.TEXTURE0);
    var $receiver_0 = vertexLayout.attributes;
    var destination_0 = ArrayList_init_0();
    var tmp$_14;
    tmp$_14 = $receiver_0.iterator();
    while (tmp$_14.hasNext()) {
      var element = tmp$_14.next();
      if (element.active)
        destination_0.add_11rb$(element);
    }
    tmp$_8 = destination_0.iterator();
    while (tmp$_8.hasNext()) {
      var att_0 = tmp$_8.next();
      var loc_0 = glProgram.getAttribLocation_61zpoe$(att_0.name);
      if (loc_0 >= 0) {
        this.gl.disableVertexAttribArray_za3lpa$(loc_0);
      }
    }
    if (mustFreeIndices)
      aindices.close();
  };
  AGOpengl.prototype.get_glDrawMode_7dvn3b$ = function ($receiver) {
    switch ($receiver.name) {
      case 'POINTS':
        return this.gl.POINTS;
      case 'LINE_STRIP':
        return this.gl.LINE_STRIP;
      case 'LINE_LOOP':
        return this.gl.LINE_LOOP;
      case 'LINES':
        return this.gl.LINES;
      case 'TRIANGLE_STRIP':
        return this.gl.TRIANGLE_STRIP;
      case 'TRIANGLE_FAN':
        return this.gl.TRIANGLE_FAN;
      case 'TRIANGLES':
        return this.gl.TRIANGLES;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.get_glElementType_bxje6x$ = function ($receiver) {
    switch ($receiver.kind.name) {
      case 'BYTE':
        return this.gl.BYTE;
      case 'UNSIGNED_BYTE':
        return this.gl.UNSIGNED_BYTE;
      case 'SHORT':
        return this.gl.SHORT;
      case 'UNSIGNED_SHORT':
        return this.gl.UNSIGNED_SHORT;
      case 'INT':
        return this.gl.UNSIGNED_INT;
      case 'FLOAT':
        return this.gl.FLOAT;
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  AGOpengl.prototype.getProgram_21rgaz$ = function (program) {
    var $receiver = this.programs_nsjc6a$_0;
    var tmp$;
    var value = $receiver.get_11rb$(program);
    if (value == null) {
      var answer = new AGOpengl$GlProgram(this, this.gl, program);
      $receiver.put_xwzc9p$(program, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  function AGOpengl$GlProgram($outer, gl, program) {
    this.$outer = $outer;
    this.gl = gl;
    this.program = program;
    this.cachedVersion = -1;
    this.id = 0;
    this.fragmentShaderId = 0;
    this.vertexShaderId = 0;
    this.cachedAttribLocations = LinkedHashMap_init();
  }
  AGOpengl$GlProgram.prototype.getAttribLocation_61zpoe$ = function (name) {
    var $receiver = this.cachedAttribLocations;
    var tmp$;
    var value = $receiver.get_11rb$(name);
    if (value == null) {
      var answer = this.gl.getAttribLocation_19mbxw$(this.id, name);
      $receiver.put_xwzc9p$(name, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  AGOpengl$GlProgram.prototype.replaceVersion_0 = function ($receiver, version) {
    return replace($receiver, '#version 100', '#version ' + version);
  };
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  AGOpengl$GlProgram.prototype.ensure_0 = function () {
    var tmp$;
    if (this.cachedVersion !== this.$outer.contextVersion) {
      this.cachedVersion = this.$outer.contextVersion;
      this.id = this.gl.createProgram();
      var glslVersionString = this.gl.getString_za3lpa$(this.gl.SHADING_LANGUAGE_VERSION);
      var $receiver = replace(glslVersionString, '.', '');
      var tmp$_0;
      var glslVersionInt = (tmp$ = toIntOrNull(trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : throwCCE()).toString())) != null ? tmp$ : 100;
      println('GL_SHADING_LANGUAGE_VERSION: ' + glslVersionInt + ' : ' + glslVersionString);
      this.fragmentShaderId = this.createShader_19mbxw$(this.gl.FRAGMENT_SHADER, toNewGlslString(this.program.fragment, false, glslVersionInt));
      this.vertexShaderId = this.createShader_19mbxw$(this.gl.VERTEX_SHADER, toNewGlslString(this.program.vertex, false, glslVersionInt));
      this.gl.attachShader_vux9f0$(this.id, this.fragmentShaderId);
      this.gl.attachShader_vux9f0$(this.id, this.vertexShaderId);
      this.gl.linkProgram_za3lpa$(this.id);
      this.$outer.tempBuffer1.setInt_vux9f0$(0, 0);
      this.$outer;
      this.gl.getProgramiv_yd7u0d$(this.id, this.gl.LINK_STATUS, this.$outer.tempBuffer1);
    }
  };
  AGOpengl$GlProgram.prototype.createShader_19mbxw$ = function (type, str) {
    var shaderId = this.gl.createShader_za3lpa$(type);
    this.gl.shaderSource_19mbxw$(shaderId, str);
    this.gl.compileShader_za3lpa$(shaderId);
    var out = getShaderiv(this.gl, shaderId, this.gl.COMPILE_STATUS);
    if (out !== this.gl.TRUE) {
      var error = getShaderInfoLog(this.gl, shaderId);
      klogger.Console;
      var msg = [str];
      var tmp$;
      (tmp$ = console).error.apply(tmp$, msg);
      throw RuntimeException_init('Error Compiling Shader : ' + error);
    }
    return shaderId;
  };
  AGOpengl$GlProgram.prototype.use = function () {
    this.ensure_0();
    this.gl.useProgram_za3lpa$(this.id);
  };
  AGOpengl$GlProgram.prototype.unuse = function () {
    this.ensure_0();
    this.gl.useProgram_za3lpa$(0);
  };
  AGOpengl$GlProgram.prototype.close = function () {
    this.gl.deleteShader_za3lpa$(this.fragmentShaderId);
    this.gl.deleteShader_za3lpa$(this.vertexShaderId);
    this.gl.deleteProgram_za3lpa$(this.id);
  };
  AGOpengl$GlProgram.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlProgram',
    interfaces: [Closeable]
  };
  AGOpengl.prototype.clear_yvqa77$$default = function (color, depth, stencil, clearColor, clearDepth, clearStencil) {
    var bits = {v: 0};
    this.gl.disable_za3lpa$(this.gl.SCISSOR_TEST);
    if (clearColor) {
      bits.v = bits.v | this.gl.COLOR_BUFFER_BIT;
      this.gl.clearColor_7b5o5w$(color.rf, color.gf, color.bf, color.af);
    }
    if (clearDepth) {
      bits.v = bits.v | this.gl.DEPTH_BUFFER_BIT;
      this.gl.clearDepthf_mx4ult$(depth);
    }
    if (clearStencil) {
      bits.v = bits.v | this.gl.STENCIL_BUFFER_BIT;
      this.gl.stencilMask_za3lpa$(-1);
      this.gl.clearStencil_za3lpa$(stencil);
    }
    this.gl.clear_za3lpa$(bits.v);
  };
  AGOpengl.prototype.createTexture_6taknv$ = function (premultiplied) {
    return new AGOpengl$GlTexture(this, this.gl, premultiplied);
  };
  function AGOpengl$GlBuffer($outer, kind) {
    this.$outer = $outer;
    AG$Buffer.call(this, kind);
    this.cachedVersion = -1;
    this.id_0 = -1;
    this.glKind = kind === AG$Buffer$Kind.INDEX ? this.$outer.gl.ELEMENT_ARRAY_BUFFER : this.$outer.gl.ARRAY_BUFFER;
  }
  AGOpengl$GlBuffer.prototype.afterSetMem = function () {
  };
  AGOpengl$GlBuffer.prototype.close = function () {
    this.$outer;
    var this$AGOpengl = this.$outer;
    var buffer = KmlNativeBuffer_init(4);
    buffer.setInt_vux9f0$(0, this.id_0);
    this$AGOpengl.gl.deleteBuffers_h86ci1$(1, buffer);
    this.id_0 = -1;
  };
  AGOpengl$GlBuffer.prototype.getGlId_jm7esb$ = function (gl) {
    if (this.cachedVersion !== this.$outer.contextVersion) {
      this.cachedVersion = this.$outer.contextVersion;
      this.id_0 = -1;
    }
    if (this.id_0 < 0) {
      this.$outer;
      this.$outer;
      var it = KmlNativeBuffer_init(4);
      gl.genBuffers_h86ci1$(1, it);
      this.id_0 = it.getInt_za3lpa$(0);
    }
    if (this.dirty) {
      this._bind_mxkahf$(gl, this.id_0);
      if (this.mem != null) {
        gl.bufferData_h17dt1$(this.glKind, this.memLength, ensureNotNull(this.mem), gl.STATIC_DRAW);
      }
    }
    return this.id_0;
  };
  AGOpengl$GlBuffer.prototype._bind_mxkahf$ = function (gl, id) {
    gl.bindBuffer_vux9f0$(this.glKind, id);
  };
  AGOpengl$GlBuffer.prototype.bind_jm7esb$ = function (gl) {
    this._bind_mxkahf$(gl, this.getGlId_jm7esb$(gl));
  };
  AGOpengl$GlBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlBuffer',
    interfaces: [AG$Buffer]
  };
  function AGOpengl$GlTexture($outer, gl, premultiplied) {
    this.$outer = $outer;
    AG$Texture.call(this, this.$outer);
    this.gl = gl;
    this.premultiplied_8apmqt$_0 = premultiplied;
    this.cachedVersion = -1;
    this.texIds = KmlNativeBuffer_init(4);
    this.closed_0 = false;
  }
  Object.defineProperty(AGOpengl$GlTexture.prototype, 'premultiplied', {
    get: function () {
      return this.premultiplied_8apmqt$_0;
    }
  });
  Object.defineProperty(AGOpengl$GlTexture.prototype, 'tex', {
    get: function () {
      if (this.cachedVersion !== this.$outer.contextVersion) {
        this.cachedVersion = this.$outer.contextVersion;
        this.invalidate();
        this.gl.genTextures_h86ci1$(1, this.texIds);
      }
      return this.texIds.getInt_za3lpa$(0);
    }
  });
  AGOpengl$GlTexture.prototype.createBufferForBitmap_p18la5$ = function (bmp) {
    var tmp$;
    if (bmp == null)
      tmp$ = null;
    else if (Kotlin.isType(bmp, NativeImage))
      tmp$ = unsupported('Should not call createBufferForBitmap with a NativeImage');
    else if (Kotlin.isType(bmp, Bitmap8)) {
      var mem = KmlNativeBuffer_init(bmp.area);
      arraycopy(bmp.data, 0, mem.arrayByte, 0, bmp.area);
      return mem;
    }
     else if (Kotlin.isType(bmp, Bitmap32)) {
      var abmp = this.premultiplied ? bmp.premultipliedIfRequired() : bmp.depremultipliedIfRequired();
      var mem_0 = KmlNativeBuffer_init(abmp.area * 4 | 0);
      arraycopy_0(abmp.data.array, 0, mem_0.arrayInt, 0, abmp.area);
      return mem_0;
    }
     else
      tmp$ = unsupported_0();
    return tmp$;
  };
  AGOpengl$GlTexture.prototype.actualSyncUpload_u9zjc3$ = function (source, bmp, requestMipmaps) {
    var tmp$;
    var bytesPerPixel = source.rgba ? 4 : 1;
    if (source.rgba) {
      tmp$ = this.gl.RGBA;
    }
     else {
      tmp$ = this.gl.LUMINANCE;
    }
    var type = tmp$;
    if (Kotlin.isType(bmp, NativeImage)) {
      this.gl.texImage2D_gqqctv$(this.gl.TEXTURE_2D, 0, type, type, this.gl.UNSIGNED_BYTE, bmp);
    }
     else {
      var buffer = this.createBufferForBitmap_p18la5$(bmp);
      if (buffer != null) {
        this.gl.texImage2D_7wol0$(this.gl.TEXTURE_2D, 0, type, source.width, source.height, 0, type, this.gl.UNSIGNED_BYTE, buffer);
      }
    }
    this.mipmaps = false;
    if (requestMipmaps) {
      this.mipmaps = true;
      this.bind();
      this.setFilter_6taknv$(true);
      this.setWrapST_0();
      this.gl.generateMipmap_za3lpa$(this.gl.TEXTURE_2D);
    }
  };
  AGOpengl$GlTexture.prototype.bind = function () {
    this.gl.bindTexture_vux9f0$(this.gl.TEXTURE_2D, this.tex);
  };
  AGOpengl$GlTexture.prototype.unbind = function () {
    this.gl.bindTexture_vux9f0$(this.gl.TEXTURE_2D, 0);
  };
  AGOpengl$GlTexture.prototype.close = function () {
    AG$Texture.prototype.close.call(this);
    if (!this.closed_0) {
      this.closed_0 = true;
      this.gl.deleteTextures_h86ci1$(1, this.texIds);
    }
  };
  AGOpengl$GlTexture.prototype.setFilter_6taknv$ = function (linear) {
    var tmp$;
    if (this.mipmaps) {
      tmp$ = linear ? this.gl.LINEAR_MIPMAP_NEAREST : this.gl.NEAREST_MIPMAP_NEAREST;
    }
     else {
      tmp$ = linear ? this.gl.LINEAR : this.gl.NEAREST;
    }
    var minFilter = tmp$;
    var magFilter = linear ? this.gl.LINEAR : this.gl.NEAREST;
    this.setWrapST_0();
    this.setMinMag_0(minFilter, magFilter);
  };
  AGOpengl$GlTexture.prototype.setWrapST_0 = function () {
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_S, this.gl.CLAMP_TO_EDGE);
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_WRAP_T, this.gl.CLAMP_TO_EDGE);
  };
  AGOpengl$GlTexture.prototype.setMinMag_0 = function (min, mag) {
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_MIN_FILTER, min);
    this.gl.texParameteri_qt1dr2$(this.gl.TEXTURE_2D, this.gl.TEXTURE_MAG_FILTER, mag);
  };
  AGOpengl$GlTexture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlTexture',
    interfaces: [AG$Texture]
  };
  AGOpengl.prototype.checkErrors_klfg04$ = defineInlineFunction('korag-opengl-js.com.soywiz.korag.AGOpengl.checkErrors_klfg04$', function (callback) {
    return callback();
  });
  AGOpengl.prototype.readColor_59u9qz$ = function (bitmap) {
    var buffer = KmlNativeBuffer_init(bitmap.area * 4 | 0);
    this.gl.readPixels_mk0vkj$(0, 0, bitmap.width, bitmap.height, this.gl.RGBA, this.gl.UNSIGNED_BYTE, buffer);
    buffer.getAlignedArrayInt32_coga0j$(0, bitmap.data.array, 0, bitmap.area);
  };
  AGOpengl.prototype.readDepth_l5lmba$ = function (width, height, out) {
    var area = Kotlin.imul(width, height);
    var buffer = KmlNativeBuffer_init(area * 4 | 0);
    this.gl.readPixels_mk0vkj$(0, 0, width, height, this.gl.DEPTH_COMPONENT, this.gl.FLOAT, buffer);
    buffer.getAlignedArrayFloat32_3hvitc$(0, out, 0, area);
  };
  AGOpengl.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AGOpengl',
    interfaces: [AG]
  };
  function AGOpenglFactory() {
    AGOpenglFactory_instance = this;
  }
  AGOpenglFactory.prototype.create_s8jyv4$ = function (nativeComponent) {
    return AGFactoryWebgl_getInstance();
  };
  Object.defineProperty(AGOpenglFactory.prototype, 'isTouchDevice', {
    get: function () {
      return 'ontouchstart' in window || navigator.maxTouchPoints;
    }
  });
  AGOpenglFactory.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AGOpenglFactory',
    interfaces: []
  };
  var AGOpenglFactory_instance = null;
  function AGOpenglFactory_getInstance() {
    if (AGOpenglFactory_instance === null) {
      new AGOpenglFactory();
    }
    return AGOpenglFactory_instance;
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
  AGFactoryWebgl.prototype.create_s8jyv4$ = function (nativeControl) {
    return new AGWebgl();
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  AGFactoryWebgl.prototype.createFastWindow_3m52m6$ = function (title, width, height) {
    throw new NotImplementedError_init();
  };
  AGFactoryWebgl.$metadata$ = {
    kind: Kind_OBJECT,
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
  function AGWebgl() {
    AGWebgl$Companion_getInstance();
    AGOpengl.call(this);
    this.ag_1tusrt$_0 = this;
    var tmp$;
    this.canvas = Kotlin.isType(tmp$ = document.createElement('canvas'), HTMLCanvasElement) ? tmp$ : throwCCE();
    this.glOpts = jsObject([to('premultipliedAlpha', false), to('alpha', false), to('stencil', true)]);
    this.gl_1tuxca$_0 = new KmlGlJsCanvas(this.canvas, this.glOpts);
    window.ag = this;
    this.nativeComponent_ktsp3z$_0 = this.canvas;
    this.devicePixelRatio_sbtx5g$_0 = 1.0;
    this.onReadyOnce = new Once();
    this.canvas.addEventListener('webglcontextlost', AGWebgl_init$lambda, false);
    this.canvas.addEventListener('webglcontextrestored', AGWebgl_init$lambda_0(this), false);
  }
  function AGWebgl$Companion() {
    AGWebgl$Companion_instance = this;
    this.log = Logger.Companion.invoke_61zpoe$('AGWebgl');
  }
  AGWebgl$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AGWebgl$Companion_instance = null;
  function AGWebgl$Companion_getInstance() {
    if (AGWebgl$Companion_instance === null) {
      new AGWebgl$Companion();
    }
    return AGWebgl$Companion_instance;
  }
  Object.defineProperty(AGWebgl.prototype, 'ag', {
    get: function () {
      return this.ag_1tusrt$_0;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'gl', {
    get: function () {
      return this.gl_1tuxca$_0;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'nativeComponent', {
    get: function () {
      return this.nativeComponent_ktsp3z$_0;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'tDevicePixelRatio', {
    get: function () {
      return window.devicePixelRatio;
    }
  });
  Object.defineProperty(AGWebgl.prototype, 'devicePixelRatio', {
    get: function () {
      if (this.tDevicePixelRatio <= 0.0)
        return 1.0;
      else if (isNaN_0(this.tDevicePixelRatio))
        return 1.0;
      else if (isInfinite(this.tDevicePixelRatio))
        return 1.0;
      else
        return this.tDevicePixelRatio;
    },
    set: function (devicePixelRatio) {
      this.devicePixelRatio_sbtx5g$_0 = devicePixelRatio;
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
    this.setViewport_tjonv8$(0, 0, this.canvas.width, this.canvas.height);
    this.onResized.invoke_11rb$(Unit);
  };
  AGWebgl.prototype.dispose = function () {
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
    kind: Kind_CLASS,
    simpleName: 'AGWebgl',
    interfaces: [AGContainer, AGOpengl]
  };
  $$importsForInline$$['korag-opengl-js'] = _;
  AGOpengl.GlRenderBuffer = AGOpengl$GlRenderBuffer;
  $$importsForInline$$['klogger-js'] = $module$klogger_js;
  AGOpengl.GlProgram = AGOpengl$GlProgram;
  $$importsForInline$$['kmem-js'] = $module$kmem_js;
  AGOpengl.GlBuffer = AGOpengl$GlBuffer;
  AGOpengl.GlTexture = AGOpengl$GlTexture;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korag = package$soywiz.korag || (package$soywiz.korag = {});
  package$korag.AGOpengl = AGOpengl;
  Object.defineProperty(package$korag, 'AGOpenglFactory', {
    get: AGOpenglFactory_getInstance
  });
  Object.defineProperty(package$korag, 'AGFactoryWebgl', {
    get: AGFactoryWebgl_getInstance
  });
  package$korag.jsEmptyObject = jsEmptyObject;
  package$korag.jsObject_pyyo18$ = jsObject;
  Object.defineProperty(AGWebgl, 'Companion', {
    get: AGWebgl$Companion_getInstance
  });
  $$importsForInline$$['korio-js'] = $module$korio_js;
  package$korag.AGWebgl = AGWebgl;
  Kotlin.defineModule('korag-opengl-js', _);
  return _;
}));

//# sourceMappingURL=korag-opengl-js.js.map
