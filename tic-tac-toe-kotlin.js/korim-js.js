(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korma-js', 'korio-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korma-js'), require('korio-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korim-js'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korim-js'.");
    }
    root['korim-js'] = factory(typeof this['korim-js'] === 'undefined' ? {} : this['korim-js'], kotlin, this['korma-js'], this['korio-js']);
  }
}(this, function (_, Kotlin, $module$korma_js, $module$korio_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var clamp = $module$korio_js.com.soywiz.korio.util.clamp_e4yvb3$;
  var Unit = Kotlin.kotlin.Unit;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var Sizeable = $module$korma_js.com.soywiz.korma.geom.Sizeable;
  var copyTo = $module$korma_js.com.soywiz.korma.buffer.copyTo_m9cn97$;
  var fill = $module$korio_js.com.soywiz.korio.typedarray.fill_tpuxuu$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var IllegalArgumentException = Kotlin.kotlin.IllegalArgumentException;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var Enum = Kotlin.kotlin.Enum;
  var RectangleInt_init = $module$korma_js.com.soywiz.korma.geom.RectangleInt_init_tjonv8$;
  var insert = $module$korio_js.com.soywiz.korio.util.insert_4684dr$;
  var copyRangeTo = $module$korio_js.com.soywiz.korio.typedarray.copyRangeTo_boa5ab$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var UByteArray = $module$korio_js.com.soywiz.korio.util.UByteArray;
  var crypto = $module$korio_js.com.soywiz.korio.crypto;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var extractScaledFF = $module$korio_js.com.soywiz.korio.util.extractScaledFF_e4yvb3$;
  var extractScaledFFDefault = $module$korio_js.com.soywiz.korio.util.extractScaledFFDefault_4684dr$;
  var insertScaledFF = $module$korio_js.com.soywiz.korio.util.insertScaledFF_4684dr$;
  var readU16_le = $module$korio_js.com.soywiz.korio.util.readU16_le_mrm5p$;
  var readU16_be = $module$korio_js.com.soywiz.korio.util.readU16_be_mrm5p$;
  var readU24_le = $module$korio_js.com.soywiz.korio.util.readU24_le_mrm5p$;
  var readU24_be = $module$korio_js.com.soywiz.korio.util.readU24_be_mrm5p$;
  var readS32_le = $module$korio_js.com.soywiz.korio.util.readS32_le_mrm5p$;
  var readS32_be = $module$korio_js.com.soywiz.korio.util.readS32_be_mrm5p$;
  var write16_le = $module$korio_js.com.soywiz.korio.util.write16_le_ietg8x$;
  var write16_be = $module$korio_js.com.soywiz.korio.util.write16_be_ietg8x$;
  var write24_le = $module$korio_js.com.soywiz.korio.util.write24_le_ietg8x$;
  var write24_be = $module$korio_js.com.soywiz.korio.util.write24_be_ietg8x$;
  var write32_le = $module$korio_js.com.soywiz.korio.util.write32_le_ietg8x$;
  var write32_be = $module$korio_js.com.soywiz.korio.util.write32_be_ietg8x$;
  var interpolate = $module$korma_js.com.soywiz.korma.interpolation.interpolate_nig4hr$;
  var interpolate_0 = $module$korma_js.com.soywiz.korma.interpolation.interpolate_i767ff$;
  var get_niceStr = $module$korma_js.com.soywiz.korma.numeric.get_niceStr_yrwdxr$;
  var Interpolable = $module$korma_js.com.soywiz.korma.interpolation.Interpolable;
  var MutableInterpolable = $module$korma_js.com.soywiz.korma.interpolation.MutableInterpolable;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var substr = $module$korio_js.com.soywiz.korio.util.substr_6ic1pp$;
  var substr_0 = $module$korio_js.com.soywiz.korio.util.substr_qgyqat$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var extract8 = $module$korio_js.com.soywiz.korio.util.extract8_dqglrj$;
  var format = $module$korio_js.com.soywiz.korio.lang.format_e33kwl$;
  var get_niceStr_0 = $module$korio_js.com.soywiz.korio.util.get_niceStr_81szk$;
  var insert8 = $module$korio_js.com.soywiz.korio.util.insert8_e4yvb3$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var withIndex = Kotlin.kotlin.collections.withIndex_tmsbgo$;
  var String_fromIntArray = $module$korio_js.com.soywiz.korio.lang.String_fromIntArray_nd5v6f$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var readStringz = $module$korio_js.com.soywiz.korio.stream.readStringz_6ey4ts$;
  var readS32_le_0 = $module$korio_js.com.soywiz.korio.stream.readS32_le_p2awyq$;
  var readS16_le = $module$korio_js.com.soywiz.korio.stream.readS16_le_p2awyq$;
  var readBytes = $module$korio_js.com.soywiz.korio.stream.readBytes_xpzb7k$;
  var listOf = Kotlin.kotlin.collections.listOf_mh5how$;
  var readIntArray_le = $module$korio_js.com.soywiz.korio.stream.readIntArray_le_xpzb7k$;
  var readString = $module$korio_js.com.soywiz.korio.stream.readString_6ey4ts$;
  var readStream = $module$korio_js.com.soywiz.korio.stream.readStream_hsu5ns$;
  var readAll = $module$korio_js.com.soywiz.korio.stream.readAll_ucmi9i$;
  var openSync = $module$korio_js.com.soywiz.korio.stream.openSync_m1iwyb$;
  var Extra = $module$korio_js.com.soywiz.korio.util.Extra;
  var Extra$Property = $module$korio_js.com.soywiz.korio.util.Extra.Property;
  var readU32_le = $module$korio_js.com.soywiz.korio.util.readU32_le_mrm5p$;
  var PathInfo = $module$korio_js.com.soywiz.korio.vfs.PathInfo;
  var readU8 = $module$korio_js.com.soywiz.korio.util.readU8_mrm5p$;
  var readU16_le_0 = $module$korio_js.com.soywiz.korio.stream.readU16_le_p2awyq$;
  var readU8_0 = $module$korio_js.com.soywiz.korio.stream.readU8_p2awyq$;
  var slice = $module$korio_js.com.soywiz.korio.stream.slice_ucmi9i$;
  var readU32_be = $module$korio_js.com.soywiz.korio.stream.readU32_be_p2awyq$;
  var sliceWithSize = $module$korio_js.com.soywiz.korio.stream.sliceWithSize_1r8368$;
  var IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var Extra$Mixin = $module$korio_js.com.soywiz.korio.util.Extra.Mixin;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var executeInWorker = $module$korio_js.com.soywiz.korio.async.executeInWorker_lnyleu$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var get_hexString = $module$korio_js.com.soywiz.korio.util.get_hexString_964n91$;
  var IOException = $module$korio_js.com.soywiz.korio.lang.IOException;
  var IllegalStateException = Kotlin.kotlin.IllegalStateException;
  var EOFException = $module$korio_js.com.soywiz.korio.lang.EOFException;
  var fill_0 = $module$korio_js.com.soywiz.korio.typedarray.fill_htcctw$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var requireNoNulls = Kotlin.kotlin.collections.requireNoNulls_9b7vla$;
  var fill_1 = $module$korio_js.com.soywiz.korio.typedarray.fill_6mk3ue$;
  var readAll_0 = $module$korio_js.com.soywiz.korio.stream.readAll_yjldv$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var write32_be_0 = $module$korio_js.com.soywiz.korio.stream.write32_be_n5df9z$;
  var toByteArray = $module$korio_js.com.soywiz.korio.lang.toByteArray_7jlb4b$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var writeBytes = $module$korio_js.com.soywiz.korio.stream.writeBytes_o1e1if$;
  var convertRangeClamped = $module$korio_js.com.soywiz.korio.util.convertRangeClamped_legt9$;
  var write8 = $module$korio_js.com.soywiz.korio.util.write8_ietg8x$;
  var compression = $module$korio_js.com.soywiz.korio.compression;
  var write8_0 = $module$korio_js.com.soywiz.korio.stream.write8_n5df9z$;
  var readS32_be_0 = $module$korio_js.com.soywiz.korio.stream.readS32_be_p2awyq$;
  var ByteArrayBuilder_init = $module$korio_js.com.soywiz.korio.ds.ByteArrayBuilder_init;
  var UByteArray_init = $module$korio_js.com.soywiz.korio.util.UByteArray_init_za3lpa$;
  var readStream_0 = $module$korio_js.com.soywiz.korio.stream.readStream_gezhyr$;
  var get_eof = $module$korio_js.com.soywiz.korio.stream.get_eof_ucmi9i$;
  var readU16_be_0 = $module$korio_js.com.soywiz.korio.stream.readU16_be_p2awyq$;
  var lang = $module$korio_js.com.soywiz.korio.lang;
  var toString = $module$korio_js.com.soywiz.korio.lang.toString_5kit73$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var write16_le_0 = $module$korio_js.com.soywiz.korio.stream.write16_le_n5df9z$;
  var bounds = $module$korma_js.com.soywiz.korma.geom.bounds_kobt9m$;
  var withIndex_0 = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var Matrix2d = $module$korma_js.com.soywiz.korma.Matrix2d;
  var math = Kotlin.kotlin.math;
  var Rectangle = $module$korma_js.com.soywiz.korma.geom.Rectangle;
  var DoubleArrayList = $module$korma_js.com.soywiz.korma.ds.DoubleArrayList;
  var IntArrayList = $module$korma_js.com.soywiz.korma.ds.IntArrayList;
  var DoubleArrayList_init = $module$korma_js.com.soywiz.korma.ds.DoubleArrayList_init_hlrnxz$;
  var IntArrayList_init = $module$korma_js.com.soywiz.korma.ds.IntArrayList_init_d3xoud$;
  var LinkedList = $module$korio_js.com.soywiz.korio.ds.LinkedList;
  var VectorPath$Winding = $module$korma_js.com.soywiz.korma.geom.VectorPath.Winding;
  var VectorPath = $module$korma_js.com.soywiz.korma.geom.VectorPath;
  var Xml = $module$korio_js.com.soywiz.korio.serialization.xml.Xml;
  var get_niceStr_1 = $module$korio_js.com.soywiz.korio.util.get_niceStr_yrwdxr$;
  var linkedMapOf = Kotlin.kotlin.collections.linkedMapOf_qfcya0$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var Matrix2d$Type = $module$korma_js.com.soywiz.korma.Matrix2d.Type;
  var BoundsBuilder = $module$korma_js.com.soywiz.korma.geom.BoundsBuilder;
  var plus = Kotlin.kotlin.collections.plus_iwxh38$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var Pair = Kotlin.kotlin.Pair;
  var get_allChildren = $module$korio_js.com.soywiz.korio.serialization.xml.get_allChildren_ibjdnu$;
  var StrReader = $module$korio_js.com.soywiz.korio.util.StrReader;
  var get_isNumeric = $module$korio_js.com.soywiz.korio.util.get_isNumeric_myv2d0$;
  var mapWhile = $module$korio_js.com.soywiz.korio.util.mapWhile_sj71nh$;
  var ListReader = $module$korio_js.com.soywiz.korio.util.ListReader;
  var isDigit = $module$korio_js.com.soywiz.korio.util.isDigit_myv2d0$;
  var Xml_0 = $module$korio_js.com.soywiz.korio.serialization.xml.Xml_61zpoe$;
  var LocalVfs = $module$korio_js.com.soywiz.korio.vfs.LocalVfs;
  var UrlVfs = $module$korio_js.com.soywiz.korio.vfs.UrlVfs;
  var VfsSpecialReader = $module$korio_js.com.soywiz.korio.vfs.VfsSpecialReader;
  BitmapIndexed.prototype = Object.create(Bitmap.prototype);
  BitmapIndexed.prototype.constructor = BitmapIndexed;
  Bitmap1.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap1.prototype.constructor = Bitmap1;
  Bitmap2.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap2.prototype.constructor = Bitmap2;
  Bitmap32.prototype = Object.create(Bitmap.prototype);
  Bitmap32.prototype.constructor = Bitmap32;
  Bitmap4.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap4.prototype.constructor = Bitmap4;
  Bitmap8.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap8.prototype.constructor = Bitmap8;
  BitmapChannel.prototype = Object.create(Enum.prototype);
  BitmapChannel.prototype.constructor = BitmapChannel;
  NativeImage.prototype = Object.create(Bitmap.prototype);
  NativeImage.prototype.constructor = NativeImage;
  ColorFormat32.prototype = Object.create(ColorFormat.prototype);
  ColorFormat32.prototype.constructor = ColorFormat32;
  ARGB.prototype = Object.create(ColorFormat32.prototype);
  ARGB.prototype.constructor = ARGB;
  BGRA.prototype = Object.create(ColorFormat32.prototype);
  BGRA.prototype.constructor = BGRA;
  ColorFormat16.prototype = Object.create(ColorFormat.prototype);
  ColorFormat16.prototype.constructor = ColorFormat16;
  ColorFormat24.prototype = Object.create(ColorFormat.prototype);
  ColorFormat24.prototype.constructor = ColorFormat24;
  RGB.prototype = Object.create(ColorFormat24.prototype);
  RGB.prototype.constructor = RGB;
  RGBA.prototype = Object.create(ColorFormat32.prototype);
  RGBA.prototype.constructor = RGBA;
  RGBA_4444.prototype = Object.create(ColorFormat16.prototype);
  RGBA_4444.prototype.constructor = RGBA_4444;
  RGBA_5551.prototype = Object.create(ColorFormat16.prototype);
  RGBA_5551.prototype.constructor = RGBA_5551;
  RGB_555.prototype = Object.create(ColorFormat16.prototype);
  RGB_555.prototype.constructor = RGB_555;
  RGB_565.prototype = Object.create(ColorFormat16.prototype);
  RGB_565.prototype.constructor = RGB_565;
  BGRA_4444.prototype = Object.create(ColorFormat16.prototype);
  BGRA_4444.prototype.constructor = BGRA_4444;
  BGR_555.prototype = Object.create(ColorFormat16.prototype);
  BGR_555.prototype.constructor = BGR_555;
  BGR_565.prototype = Object.create(ColorFormat16.prototype);
  BGR_565.prototype.constructor = BGR_565;
  BGRA_5551.prototype = Object.create(ColorFormat16.prototype);
  BGRA_5551.prototype.constructor = BGRA_5551;
  YUVA.prototype = Object.create(ColorFormat32.prototype);
  YUVA.prototype.constructor = YUVA;
  BMP.prototype = Object.create(ImageFormat.prototype);
  BMP.prototype.constructor = BMP;
  DDS.prototype = Object.create(ImageFormat.prototype);
  DDS.prototype.constructor = DDS;
  DXT.prototype = Object.create(ImageFormat.prototype);
  DXT.prototype.constructor = DXT;
  DXT1Base.prototype = Object.create(DXT.prototype);
  DXT1Base.prototype.constructor = DXT1Base;
  DXT1.prototype = Object.create(DXT1Base.prototype);
  DXT1.prototype.constructor = DXT1;
  DXT2_3.prototype = Object.create(DXT.prototype);
  DXT2_3.prototype.constructor = DXT2_3;
  DXT2.prototype = Object.create(DXT2_3.prototype);
  DXT2.prototype.constructor = DXT2;
  DXT3.prototype = Object.create(DXT2_3.prototype);
  DXT3.prototype.constructor = DXT3;
  DXT4_5.prototype = Object.create(DXT.prototype);
  DXT4_5.prototype.constructor = DXT4_5;
  DXT4.prototype = Object.create(DXT4_5.prototype);
  DXT4.prototype.constructor = DXT4;
  DXT5.prototype = Object.create(DXT4_5.prototype);
  DXT5.prototype.constructor = DXT5;
  ICO.prototype = Object.create(ImageFormat.prototype);
  ICO.prototype.constructor = ICO;
  ImageFormats.prototype = Object.create(ImageFormat.prototype);
  ImageFormats.prototype.constructor = ImageFormats;
  JPEG.prototype = Object.create(ImageFormat.prototype);
  JPEG.prototype.constructor = JPEG;
  PNG$Colorspace.prototype = Object.create(Enum.prototype);
  PNG$Colorspace.prototype.constructor = PNG$Colorspace;
  PNG.prototype = Object.create(ImageFormat.prototype);
  PNG.prototype.constructor = PNG;
  PSD.prototype = Object.create(ImageFormat.prototype);
  PSD.prototype.constructor = PSD;
  SVG.prototype = Object.create(ImageFormat.prototype);
  SVG.prototype.constructor = SVG;
  TGA.prototype = Object.create(ImageFormat.prototype);
  TGA.prototype.constructor = TGA;
  Bitmap32Context2d.prototype = Object.create(Context2d$Renderer.prototype);
  Bitmap32Context2d.prototype.constructor = Bitmap32Context2d;
  Context2d$LineCap.prototype = Object.create(Enum.prototype);
  Context2d$LineCap.prototype.constructor = Context2d$LineCap;
  Context2d$LineJoin.prototype = Object.create(Enum.prototype);
  Context2d$LineJoin.prototype.constructor = Context2d$LineJoin;
  Context2d$CycleMethod.prototype = Object.create(Enum.prototype);
  Context2d$CycleMethod.prototype.constructor = Context2d$CycleMethod;
  Context2d$ShapeRasterizerMethod.prototype = Object.create(Enum.prototype);
  Context2d$ShapeRasterizerMethod.prototype.constructor = Context2d$ShapeRasterizerMethod;
  Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype = Object.create(Context2d$Renderer.prototype);
  Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype.constructor = Context2d$Renderer$Companion$DUMMY$ObjectLiteral;
  Context2d$VerticalAlign.prototype = Object.create(Enum.prototype);
  Context2d$VerticalAlign.prototype.constructor = Context2d$VerticalAlign;
  Context2d$HorizontalAlign.prototype = Object.create(Enum.prototype);
  Context2d$HorizontalAlign.prototype.constructor = Context2d$HorizontalAlign;
  Context2d$ScaleMode.prototype = Object.create(Enum.prototype);
  Context2d$ScaleMode.prototype.constructor = Context2d$ScaleMode;
  Context2d$Gradient$InterpolationMethod.prototype = Object.create(Enum.prototype);
  Context2d$Gradient$InterpolationMethod.prototype.constructor = Context2d$Gradient$InterpolationMethod;
  Context2d$LinearGradient.prototype = Object.create(Context2d$Gradient.prototype);
  Context2d$LinearGradient.prototype.constructor = Context2d$LinearGradient;
  Context2d$RadialGradient.prototype = Object.create(Context2d$Gradient.prototype);
  Context2d$RadialGradient.prototype.constructor = Context2d$RadialGradient;
  GraphicsPath.prototype = Object.create(VectorPath.prototype);
  GraphicsPath.prototype.constructor = GraphicsPath;
  SVG$GradientUnits.prototype = Object.create(Enum.prototype);
  SVG$GradientUnits.prototype.constructor = SVG$GradientUnits;
  HtmlImageSpecialReader.prototype = Object.create(VfsSpecialReader.prototype);
  HtmlImageSpecialReader.prototype.constructor = HtmlImageSpecialReader;
  CanvasNativeImage.prototype = Object.create(NativeImage.prototype);
  CanvasNativeImage.prototype.constructor = CanvasNativeImage;
  CanvasContext2dRenderer.prototype = Object.create(Context2d$Renderer.prototype);
  CanvasContext2dRenderer.prototype.constructor = CanvasContext2dRenderer;
  function Bitmap(width, height, bpp, premult) {
    this.width = width;
    this.height = height;
    this.bpp = bpp;
    this.premult = premult;
  }
  Object.defineProperty(Bitmap.prototype, 'stride', {
    get: function () {
      return Kotlin.imul(this.width, this.bpp) / 8 | 0;
    }
  });
  Object.defineProperty(Bitmap.prototype, 'area', {
    get: function () {
      return Kotlin.imul(this.width, this.height);
    }
  });
  Bitmap.prototype.index_vux9f0$ = function (x, y) {
    return Kotlin.imul(y, this.width) + x | 0;
  };
  var Size_init = $module$korma_js.com.soywiz.korma.geom.Size;
  Object.defineProperty(Bitmap.prototype, 'size', {
    get: function () {
      var width = this.width;
      var height = this.height;
      return new Size_init(Kotlin.numberToDouble(width), Kotlin.numberToDouble(height));
    }
  });
  Bitmap.prototype.get32_vux9f0$ = function (x, y) {
    return 0;
  };
  Bitmap.prototype.set_qt1dr2$ = function (x, y, color) {
  };
  Bitmap.prototype.get_vux9f0$ = function (x, y) {
    return 0;
  };
  Bitmap.prototype.inBoundsX_za3lpa$ = function (x) {
    return x >= 0 && x < this.width;
  };
  Bitmap.prototype.inBoundsY_za3lpa$ = function (y) {
    return y >= 0 && y < this.height;
  };
  Bitmap.prototype.inBounds_vux9f0$ = function (x, y) {
    return this.inBoundsX_za3lpa$(x) && this.inBoundsY_za3lpa$(y);
  };
  Bitmap.prototype.clampX_za3lpa$ = function (x) {
    return clamp(x, 0, this.width - 1 | 0);
  };
  Bitmap.prototype.clampY_za3lpa$ = function (y) {
    return clamp(y, 0, this.height - 1 | 0);
  };
  Bitmap.prototype.flipY = function () {
    var tmp$;
    tmp$ = this.height / 2 | 0;
    for (var y = 0; y < tmp$; y++)
      this.swapRows_vux9f0$(y, this.height - y - 1 | 0);
    return this;
  };
  Bitmap.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    throw new UnsupportedOperationException('Not implemented context2d on Bitmap, please use NativeImage instead');
  };
  Bitmap.prototype.getContext2d_6taknv$ = function (antialiasing, callback$default) {
    if (antialiasing === void 0)
      antialiasing = true;
    return callback$default ? callback$default(antialiasing) : this.getContext2d_6taknv$$default(antialiasing);
  };
  Bitmap.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return invalidOp('Unsupported createWithThisFormat');
  };
  Bitmap.prototype.toBMP32 = function () {
    var tmp$, tmp$_0;
    if (Kotlin.isType(this, Bitmap32))
      return this;
    else if (Kotlin.isType(this, NativeImage))
      return this.toBmp32();
    else {
      var out = Bitmap32_init(this.width, this.height, 0, this.premult);
      tmp$ = this.height;
      for (var y = 0; y < tmp$; y++) {
        tmp$_0 = this.width;
        for (var x = 0; x < tmp$_0; x++)
          out.set_qt1dr2$(x, y, this.get32_vux9f0$(x, y));
      }
      return out;
    }
  };
  Bitmap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Bitmap',
    interfaces: [Sizeable]
  };
  function createWithThisFormatTyped($receiver, width, height) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.createWithThisFormat_vux9f0$(width, height), Bitmap) ? tmp$ : Kotlin.throwCCE();
  }
  function Bitmap1(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / 8 | 0);
    if (palette === void 0)
      palette = new Int32Array(2);
    BitmapIndexed.call(this, 1, width, height, data, palette);
  }
  Bitmap1.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap1(width, height);
  };
  Bitmap1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Bitmap1',
    interfaces: [BitmapIndexed]
  };
  function Bitmap2(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / 4 | 0);
    if (palette === void 0)
      palette = new Int32Array(4);
    BitmapIndexed.call(this, 2, width, height, data, palette);
  }
  Bitmap2.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap2(width, height);
  };
  Bitmap2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Bitmap2',
    interfaces: [BitmapIndexed]
  };
  var Math_0 = Math;
  function Bitmap32(width, height, data, premult) {
    Bitmap32$Companion_getInstance();
    if (data === void 0)
      data = new Int32Array(Kotlin.imul(width, height));
    if (premult === void 0)
      premult = false;
    Bitmap.call(this, width, height, 32, premult);
    this.data = data;
    if (this.data.length < Kotlin.imul(width, height))
      throw new RuntimeException('Bitmap data is too short: width=' + width + ', height=' + height + ', data=ByteArray(' + this.data.length + '), area=' + Kotlin.imul(width, height));
    this.temp_0 = new Int32Array(Math_0.max(width, height));
  }
  Bitmap32.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap32(width, height, void 0, this.premult);
  };
  Bitmap32.prototype.set_qt1dr2$ = function (x, y, color) {
    this.data[this.index_vux9f0$(x, y)] = color;
  };
  Bitmap32.prototype.get_vux9f0$ = function (x, y) {
    return this.data[this.index_vux9f0$(x, y)];
  };
  Bitmap32.prototype.get32_vux9f0$ = function (x, y) {
    return this.get_vux9f0$(x, y);
  };
  Bitmap32.prototype.setRow_aio0fn$ = function (y, row) {
    copyTo(row, 0, this.data, this.index_vux9f0$(0, y), this.width);
  };
  Bitmap32.prototype._draw_dd24ng$ = function (src, dx, dy, sleft, stop, sright, sbottom, mix) {
    var dst = this;
    var width = sright - sleft | 0;
    var height = sbottom - stop | 0;
    var dstData = dst.data;
    var srcData = src.data;
    for (var y = 0; y < height; y++) {
      var dstOffset = dst.index_vux9f0$(dx, dy + y | 0);
      var srcOffset = src.index_vux9f0$(sleft, stop + y | 0);
      if (mix) {
        for (var x = 0; x < width; x++)
          dstData[dstOffset + x | 0] = RGBA_getInstance().mix_vux9f0$(dstData[dstOffset + x | 0], srcData[srcOffset + x | 0]);
      }
       else {
        copyTo(srcData, srcOffset, dstData, dstOffset, width);
      }
    }
  };
  Bitmap32.prototype.drawPixelMixed_qt1dr2$ = function (x, y, c) {
    this.set_qt1dr2$(x, y, RGBA_getInstance().mix_vux9f0$(this.get_vux9f0$(x, y), c));
  };
  Bitmap32.prototype._drawPut_11mu8c$ = function (mix, other, _dx, _dy) {
    if (_dx === void 0)
      _dx = 0;
    if (_dy === void 0)
      _dy = 0;
    var dx = _dx;
    var dy = _dy;
    var sleft = 0;
    var stop = 0;
    var sright = other.width;
    var sbottom = other.height;
    if (dx < 0) {
      sleft = -dx;
      dx = 0;
    }
    if (dy < 0) {
      stop = -dy;
      dy = 0;
    }
    this._draw_dd24ng$(other, dx, dy, sleft, stop, sright, sbottom, mix);
  };
  Bitmap32.prototype.fill_4qozqa$ = function (color, x, y, width, height) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = this.width;
    if (height === void 0)
      height = this.height;
    var x1 = this.clampX_za3lpa$(x);
    var x2 = this.clampX_za3lpa$(x + width - 1 | 0);
    var y1 = this.clampY_za3lpa$(y);
    var y2 = this.clampY_za3lpa$(y + height - 1 | 0);
    for (var cy = y1; cy <= y2; cy++)
      fill(this.data, color, this.index_vux9f0$(x1, cy), this.index_vux9f0$(x2, cy) + 1 | 0);
  };
  Bitmap32.prototype._draw_uui62f$ = function (src, dx, dy, mix) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    var b = src.bounds;
    var availableWidth = this.width - dx | 0;
    var availableHeight = this.height - dy | 0;
    var b_0 = b.width;
    var awidth = Math_0.min(availableWidth, b_0);
    var b_1 = b.height;
    var aheight = Math_0.min(availableHeight, b_1);
    this._draw_dd24ng$(src.bmp, dx, dy, b.x, b.y, b.x + awidth | 0, b.y + aheight | 0, mix);
  };
  Bitmap32.prototype.put_dryc6d$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._drawPut_11mu8c$(false, src, dx, dy);
  };
  Bitmap32.prototype.draw_dryc6d$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._drawPut_11mu8c$(true, src, dx, dy);
  };
  Bitmap32.prototype.put_a26vum$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._draw_uui62f$(src, dx, dy, false);
  };
  Bitmap32.prototype.draw_a26vum$ = function (src, dx, dy) {
    if (dx === void 0)
      dx = 0;
    if (dy === void 0)
      dy = 0;
    this._draw_uui62f$(src, dx, dy, true);
  };
  Bitmap32.prototype.copySliceWithBounds_tjonv8$ = function (left, top, right, bottom) {
    return this.copySliceWithSize_tjonv8$(left, top, right - left | 0, bottom - top | 0);
  };
  Bitmap32.prototype.copySliceWithSize_tjonv8$ = function (x, y, width, height) {
    var out = new Bitmap32(width, height);
    for (var yy = 0; yy < height; yy++) {
      copyTo(this.data, this.index_vux9f0$(x, y + yy | 0), out.data, out.index_vux9f0$(0, y), width);
    }
    return out;
  };
  Bitmap32.prototype.forEach_uijzbn$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.forEach_uijzbn$', function (callback) {
    var tmp$, tmp$_0, tmp$_1;
    var n = 0;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.width;
      for (var x = 0; x < tmp$_0; x++) {
        callback((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), x, y);
      }
    }
  });
  Bitmap32.prototype.setEach_7n50yu$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.setEach_7n50yu$', wrapFunction(function () {
    return function (callback) {
      var tmp$, tmp$_0, tmp$_1;
      var n = 0;
      tmp$ = this.height;
      for (var y = 0; y < tmp$; y++) {
        tmp$_0 = this.width;
        for (var x = 0; x < tmp$_0; x++) {
          this.data[tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1] = callback(x, y);
        }
      }
    };
  }));
  Bitmap32.prototype.transformColor_ddsh32$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.transformColor_ddsh32$', wrapFunction(function () {
    return function (callback) {
      var tmp$, tmp$_0, tmp$_1;
      var n = 0;
      tmp$ = this.height;
      for (var y = 0; y < tmp$; y++) {
        tmp$_0 = this.width;
        for (var x = 0; x < tmp$_0; x++) {
          var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
          this.data[n_0] = callback(this.data[n_0]);
        }
      }
    };
  }));
  Bitmap32.prototype.writeChannel_ccmnuj$ = function (destination, input, source) {
    var tmp$;
    var sourceShift = source.shift;
    var destShift = destination.shift;
    var destClear = destination.clearMask;
    var thisData = this.data;
    var inputData = input.data;
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      var c = inputData[n] >>> sourceShift & 255;
      thisData[n] = thisData[n] & destClear | c << destShift;
    }
  };
  Bitmap32.prototype.writeChannel_z3s5mf$ = function (destination, input) {
    var tmp$;
    var destShift = destination.index * 8 | 0;
    var destClear = ~(255 << destShift);
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      var c = input.data[n] & 255;
      this.data[n] = this.data[n] & destClear | c << destShift;
    }
  };
  Bitmap32.prototype.writeChannel_ehzdij$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.writeChannel_ehzdij$', function (destination, gen) {
    var tmp$, tmp$_0;
    var destShift = destination.index * 8 | 0;
    var destClear = ~(255 << destShift);
    var n = 0;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.width;
      for (var x = 0; x < tmp$_0; x++) {
        var c = gen(x, y) & 255;
        this.data[n] = this.data[n] & destClear | c << destShift;
        n = n + 1 | 0;
      }
    }
  });
  Bitmap32.prototype.writeChannelN_qv1f5z$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.writeChannelN_qv1f5z$', function (destination, gen) {
    var tmp$;
    var destShift = destination.index * 8 | 0;
    var destClear = ~(255 << destShift);
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      var c = gen(n) & 255;
      this.data[n] = this.data[n] & destClear | c << destShift;
    }
  });
  Bitmap32.prototype.extractChannel_25cr2x$ = function (channel) {
    var tmp$;
    var out = new Bitmap8(this.width, this.height);
    var shift = channel.shift;
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      out.data[n] = Kotlin.toByte(this.data[n] >>> shift & 255);
    }
    return out;
  };
  function Bitmap32$Companion() {
    Bitmap32$Companion_instance = this;
  }
  Bitmap32$Companion.prototype.copyRect_dpalmc$ = function (src, srcX, srcY, dst, dstX, dstY, width, height) {
    for (var y = 0; y < height; y++) {
      var srcIndex = src.index_vux9f0$(srcX, srcY + y | 0);
      var dstIndex = dst.index_vux9f0$(dstX, dstY + y | 0);
      copyTo(src.data, srcIndex, dst.data, dstIndex, width);
    }
  };
  Bitmap32$Companion.prototype.createWithAlpha_h1jruv$ = function (color, alpha, alphaChannel) {
    if (alphaChannel === void 0)
      alphaChannel = BitmapChannel$RED_getInstance();
    var out = new Bitmap32(color.width, color.height);
    out.put_dryc6d$(color);
    out.writeChannel_ccmnuj$(BitmapChannel$ALPHA_getInstance(), alpha, BitmapChannel$RED_getInstance());
    return out;
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  Bitmap32$Companion.prototype.matchesSSMI_irislw$ = function (a, b, continuation) {
    throw new NotImplementedError_init();
  };
  Bitmap32$Companion.prototype.matches_9ho1nm$ = function (a, b, threshold, continuation) {
    if (threshold === void 0)
      threshold = 32;
    var diff = this.diff_irislw$(a, b);
    var $receiver = diff.data;
    var all$result;
    all$break: do {
      var tmp$;
      for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
        var element = $receiver[tmp$];
        if (!(RGBA_getInstance().getR_za3lpa$(element) < threshold && RGBA_getInstance().getG_za3lpa$(element) < threshold && RGBA_getInstance().getB_za3lpa$(element) < threshold && RGBA_getInstance().getA_za3lpa$(element) < threshold)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  Bitmap32$Companion.prototype.diff_irislw$ = function (a, b) {
    var tmp$;
    if (a.width !== b.width || a.height !== b.height)
      throw new IllegalArgumentException(a + ' not matches ' + b + ' size');
    var a32 = a.toBMP32();
    var b32 = b.toBMP32();
    var out = new Bitmap32(a.width, a.height, void 0, true);
    tmp$ = out.area;
    for (var n = 0; n < tmp$; n++) {
      var c1 = RGBA_getInstance().premultiplyFast_za3lpa$(a32.data[n]);
      var c2 = RGBA_getInstance().premultiplyFast_za3lpa$(b32.data[n]);
      var dr = abs(RGBA_getInstance().getR_za3lpa$(c1) - RGBA_getInstance().getR_za3lpa$(c2) | 0);
      var dg = abs(RGBA_getInstance().getG_za3lpa$(c1) - RGBA_getInstance().getG_za3lpa$(c2) | 0);
      var db = abs(RGBA_getInstance().getB_za3lpa$(c1) - RGBA_getInstance().getB_za3lpa$(c2) | 0);
      var da = abs(RGBA_getInstance().getA_za3lpa$(c1) - RGBA_getInstance().getA_za3lpa$(c2) | 0);
      out.data[n] = RGBA_getInstance().pack_tjonv8$(dr, dg, db, da);
    }
    return out;
  };
  Bitmap32$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Bitmap32$Companion_instance = null;
  function Bitmap32$Companion_getInstance() {
    if (Bitmap32$Companion_instance === null) {
      new Bitmap32$Companion();
    }
    return Bitmap32$Companion_instance;
  }
  Bitmap32.prototype.invert = function () {
    this.xor_za3lpa$(16777215);
  };
  Bitmap32.prototype.xor_za3lpa$ = function (value) {
    var tmp$;
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++)
      this.data[n] = this.data[n] ^ value;
  };
  Bitmap32.prototype.toString = function () {
    return 'Bitmap32(' + this.width + ', ' + this.height + ')';
  };
  Bitmap32.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var s0 = this.index_vux9f0$(0, y0);
    var s1 = this.index_vux9f0$(0, y1);
    copyTo(this.data, s0, this.temp_0, 0, this.width);
    copyTo(this.data, s1, this.data, s0, this.width);
    copyTo(this.temp_0, 0, this.data, s1, this.width);
  };
  Bitmap32.prototype.writeDecoded_77vltg$ = function (color, data, offset, littleEndian) {
    if (offset === void 0)
      offset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    color.decode_c0jzf6$(data, offset, this.data, 0, this.area, littleEndian);
    return this;
  };
  Bitmap32.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    return new Context2d(new Bitmap32Context2d(this));
  };
  Bitmap32.prototype.clone = function () {
    return new Bitmap32(this.width, this.height, this.data.slice(), this.premult);
  };
  Bitmap32.prototype.premultipliedIfRequired = function () {
    return this.premult ? this : this.premultiplied();
  };
  Bitmap32.prototype.depremultipliedIfRequired = function () {
    return !this.premult ? this : this.depremultiplied();
  };
  Bitmap32.prototype.premultiplied = function () {
    var $receiver = this.clone();
    $receiver.premultiplyInplace();
    return $receiver;
  };
  Bitmap32.prototype.depremultiplied = function () {
    var $receiver = this.clone();
    $receiver.depremultiplyInplace();
    return $receiver;
  };
  Bitmap32.prototype.premultiplyInplace = function () {
    var tmp$;
    if (this.premult)
      return;
    this.premult = true;
    tmp$ = this.data.length;
    for (var n = 0; n < tmp$; n++)
      this.data[n] = RGBA_getInstance().premultiplyFast_za3lpa$(this.data[n]);
  };
  Bitmap32.prototype.depremultiplyInplace = function () {
    var tmp$;
    if (!this.premult)
      return;
    this.premult = false;
    tmp$ = this.data.length;
    for (var n = 0; n < tmp$; n++)
      this.data[n] = RGBA_getInstance().depremultiplyFast_za3lpa$(this.data[n]);
  };
  Bitmap32.prototype.mipmap_za3lpa$ = function (levels) {
    var tmp$, tmp$_0;
    var temp = this.clone();
    temp.premultiplyInplace();
    var dst = temp.data;
    var twidth = this.width;
    var theight = this.height;
    for (var level = 0; level < levels; level++) {
      twidth = twidth / 2 | 0;
      theight = theight / 2 | 0;
      tmp$ = theight;
      for (var y = 0; y < tmp$; y++) {
        var n = temp.index_vux9f0$(0, y);
        var m = temp.index_vux9f0$(0, y * 2 | 0);
        tmp$_0 = twidth;
        for (var x = 0; x < tmp$_0; x++) {
          var c1 = dst[m];
          var c2 = dst[m + 1 | 0];
          var c3 = dst[m + this.width | 0];
          var c4 = dst[m + this.width + 1 | 0];
          dst[n] = RGBA_getInstance().blendRGBAFastAlreadyPremultiplied_05_tjonv8$(c1, c2, c3, c4);
          m = m + 2 | 0;
          n = n + 1 | 0;
        }
      }
    }
    var out = new Bitmap32(twidth, theight, void 0, true);
    Bitmap32$Companion_getInstance().copyRect_dpalmc$(temp, 0, 0, out, 0, 0, twidth, theight);
    return out;
  };
  Bitmap32.prototype.iterator = function () {
    return Kotlin.intArrayIterator(this.data);
  };
  Bitmap32.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Bitmap32',
    interfaces: [Iterable, Bitmap]
  };
  function Bitmap32_init(width, height, value, premult, $this) {
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, premult);
    fill($this.data, value);
    return $this;
  }
  function Bitmap32_init_0(width, height, value, $this) {
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, false);
    fill($this.data, value);
    return $this;
  }
  function Bitmap32_init_1(width, height, premult, generator, $this) {
    if (premult === void 0)
      premult = false;
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, premult);
    var tmp$, tmp$_0, tmp$_1;
    var n = 0;
    tmp$ = $this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = $this.width;
      for (var x = 0; x < tmp$_0; x++) {
        $this.data[tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1] = generator(x, y);
      }
    }
    return $this;
  }
  function Bitmap4(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / 2 | 0);
    if (palette === void 0)
      palette = new Int32Array(16);
    BitmapIndexed.call(this, 4, width, height, data, palette);
  }
  Bitmap4.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap4(width, height);
  };
  Bitmap4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Bitmap4',
    interfaces: [BitmapIndexed]
  };
  function Bitmap8(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height));
    if (palette === void 0)
      palette = new Int32Array(255);
    BitmapIndexed.call(this, 8, width, height, data, palette);
  }
  Bitmap8.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap8(width, height);
  };
  Bitmap8.prototype.set_qt1dr2$ = function (x, y, color) {
    var $this = this.datau;
    var n = this.index_vux9f0$(x, y);
    $this.data[n] = Kotlin.toByte(color);
  };
  Bitmap8.prototype.get_vux9f0$ = function (x, y) {
    var $this = this.datau;
    var n = this.index_vux9f0$(x, y);
    return $this.data[n] & 255;
  };
  Bitmap8.prototype.get32_vux9f0$ = function (x, y) {
    return this.palette[this.get_vux9f0$(x, y)];
  };
  Bitmap8.prototype.toString = function () {
    return 'Bitmap8(' + this.width + ', ' + this.height + ', palette=' + this.palette.length + ')';
  };
  Bitmap8.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Bitmap8',
    interfaces: [BitmapIndexed]
  };
  function BitmapChannel(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
    this.shift = this.index * 8 | 0;
    this.setMask = 255 << this.shift;
    this.clearMask = ~this.setMask;
  }
  function BitmapChannel_initFields() {
    BitmapChannel_initFields = function () {
    };
    BitmapChannel$RED_instance = new BitmapChannel('RED', 0, 0);
    BitmapChannel$GREEN_instance = new BitmapChannel('GREEN', 1, 1);
    BitmapChannel$BLUE_instance = new BitmapChannel('BLUE', 2, 2);
    BitmapChannel$ALPHA_instance = new BitmapChannel('ALPHA', 3, 3);
  }
  var BitmapChannel$RED_instance;
  function BitmapChannel$RED_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$RED_instance;
  }
  var BitmapChannel$GREEN_instance;
  function BitmapChannel$GREEN_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$GREEN_instance;
  }
  var BitmapChannel$BLUE_instance;
  function BitmapChannel$BLUE_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$BLUE_instance;
  }
  var BitmapChannel$ALPHA_instance;
  function BitmapChannel$ALPHA_getInstance() {
    BitmapChannel_initFields();
    return BitmapChannel$ALPHA_instance;
  }
  BitmapChannel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BitmapChannel',
    interfaces: [Enum]
  };
  function BitmapChannel$values() {
    return [BitmapChannel$RED_getInstance(), BitmapChannel$GREEN_getInstance(), BitmapChannel$BLUE_getInstance(), BitmapChannel$ALPHA_getInstance()];
  }
  BitmapChannel.values = BitmapChannel$values;
  function BitmapChannel$valueOf(name) {
    switch (name) {
      case 'RED':
        return BitmapChannel$RED_getInstance();
      case 'GREEN':
        return BitmapChannel$GREEN_getInstance();
      case 'BLUE':
        return BitmapChannel$BLUE_getInstance();
      case 'ALPHA':
        return BitmapChannel$ALPHA_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korim.bitmap.BitmapChannel.' + name);
    }
  }
  BitmapChannel.valueOf_61zpoe$ = BitmapChannel$valueOf;
  function sliceWithBounds($receiver, left, top, right, bottom) {
    return new BitmapSlice($receiver, RectangleInt_init(left, top, right - left | 0, bottom - top | 0));
  }
  function sliceWithSize_0($receiver, x, y, width, height) {
    return new BitmapSlice($receiver, RectangleInt_init(x, y, width, height));
  }
  function slice_0($receiver, bounds) {
    return new BitmapSlice($receiver, bounds);
  }
  function matchContents($receiver, that) {
    if ($receiver.width !== that.width || $receiver.height !== that.height)
      return false;
    var l = $receiver.toBMP32().depremultipliedIfRequired();
    var r = that.toBMP32().depremultipliedIfRequired();
    var width = l.width;
    var height = l.height;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        if (l.get32_vux9f0$(x, y) !== r.get32_vux9f0$(x, y))
          return false;
      }
    }
    return true;
  }
  function BitmapIndexed(bpp, width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / (8 / bpp | 0) | 0);
    if (palette === void 0)
      palette = new Int32Array(1 << bpp);
    Bitmap.call(this, width, height, bpp, false);
    this.data = data;
    this.palette = palette;
    if (this.data.length < (Kotlin.imul(width, height) / (8 / bpp | 0) | 0))
      throw new RuntimeException('Bitmap data is too short: width=' + width + ', height=' + height + ', data=ByteArray(' + this.data.length + '), area=' + Kotlin.imul(width, height));
    this.temp = new Int8Array(Math_0.max(width, height));
    this.datau = new UByteArray(this.data);
    this.n8_dbpp = 8 / bpp | 0;
    this.mask = (1 << bpp) - 1 | 0;
  }
  BitmapIndexed.prototype.toString = function () {
    return 'BitmapIndexed(bpp=' + this.bpp + ', width=' + this.width + ', height=' + this.height + ', clut=' + this.palette.length + ')';
  };
  BitmapIndexed.prototype.get_vux9f0$ = function (x, y) {
    var $this = this.datau;
    var n = this.index_d_vux9f0$(x, y);
    return ($this.data[n] & 255) >>> Kotlin.imul(this.bpp, this.index_m_vux9f0$(x, y)) & this.mask;
  };
  BitmapIndexed.prototype.set_qt1dr2$ = function (x, y, color) {
    var i = this.index_d_vux9f0$(x, y);
    var tmp$ = this.datau;
    var v = insert(this.datau.data[i] & 255, color, Kotlin.imul(this.bpp, this.index_m_vux9f0$(x, y)), this.bpp);
    tmp$.data[i] = Kotlin.toByte(v);
  };
  BitmapIndexed.prototype.get32_vux9f0$ = function (x, y) {
    return this.palette[this.get_vux9f0$(x, y)];
  };
  BitmapIndexed.prototype.index_d_vux9f0$ = function (x, y) {
    return this.index_vux9f0$(x, y) / this.n8_dbpp | 0;
  };
  BitmapIndexed.prototype.index_m_vux9f0$ = function (x, y) {
    return this.index_vux9f0$(x, y) % this.n8_dbpp;
  };
  BitmapIndexed.prototype.setRow_sdjen6$ = function (y, row) {
    copyRangeTo(row.data, 0, this.data, this.index_vux9f0$(0, y), this.stride);
  };
  BitmapIndexed.prototype.setRow_3fbn1q$ = function (y, row) {
    copyRangeTo(row, 0, this.data, this.index_vux9f0$(0, y), this.stride);
  };
  BitmapIndexed.prototype.setWhitescalePalette = function () {
    var tmp$;
    tmp$ = this.palette.length;
    for (var n = 0; n < tmp$; n++) {
      var col = n / this.palette.length * 255 | 0;
      this.palette[n] = RGBA_getInstance().invoke_tjonv8$(col, col, col, 255);
    }
    return this;
  };
  BitmapIndexed.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var s0 = this.index_d_vux9f0$(0, y0);
    var s1 = this.index_d_vux9f0$(0, y1);
    copyRangeTo(this.data, s0, this.temp, 0, this.stride);
    copyRangeTo(this.data, s1, this.data, s0, this.stride);
    copyRangeTo(this.temp, 0, this.data, s1, this.stride);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  BitmapIndexed.prototype.toLines_61zpoe$ = function (palette) {
    var $receiver = until(0, this.height);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = until(0, this.height);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(toBoxedChar(palette.charCodeAt(this.get_vux9f0$(item_0, item))));
      }
      tmp$_0.call(destination, joinToString(destination_0, ''));
    }
    return destination;
  };
  BitmapIndexed.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BitmapIndexed',
    interfaces: [Bitmap]
  };
  function BitmapSlice(bmp, bounds) {
    this.bmp = bmp;
    this.bounds = bounds;
  }
  BitmapSlice.prototype.extract = function () {
    var sx = this.bounds.x;
    var sy = this.bounds.y;
    var swidth = this.bounds.width;
    var sheight = this.bounds.height;
    var out = createWithThisFormatTyped(this.bmp, swidth, sheight);
    for (var y = 0; y < sheight; y++) {
      for (var x = 0; x < swidth; x++) {
        out.set_qt1dr2$(x, y, this.bmp.get_vux9f0$(sx + x | 0, sy + y | 0));
      }
    }
    return out;
  };
  BitmapSlice.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BitmapSlice',
    interfaces: []
  };
  function NativeImage(width, height, data, premultiplied) {
    Bitmap.call(this, width, height, 32, premultiplied);
    this.data = data;
  }
  NativeImage.prototype.swapRows_vux9f0$ = function (y0, y1) {
    throw new UnsupportedOperationException();
  };
  NativeImage.prototype.toBmp32 = function () {
    return this.toNonNativeBmp().toBMP32();
  };
  NativeImage.prototype.toUri = function () {
    return 'data:image/png;base64,' + crypto.Base64.encode_fqrh44$(PNG_getInstance().encode_hnx2ev$(this, new ImageEncodingProps('out.png')));
  };
  NativeImage.prototype.toString = function () {
    return this.name + '(' + this.width + ', ' + this.height + ')';
  };
  NativeImage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NativeImage',
    interfaces: [Bitmap]
  };
  function mipmap($receiver, levels) {
    return nativeImageFormatProvider.mipmap_uwsoz2$($receiver, levels);
  }
  function toUri($receiver) {
    if (Kotlin.isType($receiver, NativeImage))
      return $receiver.toUri();
    return 'data:image/png;base64,' + crypto.Base64.encode_fqrh44$(PNG_getInstance().encode_hnx2ev$($receiver, new ImageEncodingProps('out.png')));
  }
  function NativeImage_0(width, height) {
    return nativeImageFormatProvider.create_vux9f0$(width, height);
  }
  function NativeImage_1(width, height, d, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    var bmp = NativeImage_0(width, height);
    try {
      var ctx = bmp.getContext2d_6taknv$();
      ctx.save();
      try {
        ctx.scale_lu1900$(scaleX, scaleY);
        ctx.draw_ywv3s4$(d);
      }
      finally {
        ctx.restore();
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        printStackTrace(e);
      }
       else
        throw e;
    }
    return bmp;
  }
  function NativeImage_2(d, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    return NativeImage_1(d.width * scaleX | 0, d.height * scaleY | 0, d, scaleX, scaleY);
  }
  function ensureNative($receiver) {
    if (Kotlin.isType($receiver, NativeImage))
      return $receiver;
    else
      return nativeImageFormatProvider.copy_uler2c$($receiver);
  }
  function raster($receiver, scaleX, scaleY) {
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = scaleX;
    return NativeImage_2($receiver, scaleX, scaleY);
  }
  function ARGB() {
    ARGB_instance = this;
    ColorFormat32.call(this);
    this.$delegate_mcsiax$_0 = new ColorFormatBase$Mixin(8, 8, 16, 8, 24, 8, 0, 8);
  }
  ARGB.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getA_za3lpa$(v);
  };
  ARGB.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getB_za3lpa$(v);
  };
  ARGB.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getG_za3lpa$(v);
  };
  ARGB.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_mcsiax$_0.getR_za3lpa$(v);
  };
  ARGB.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_mcsiax$_0.pack_tjonv8$(r, g, b, a);
  };
  ARGB.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ARGB',
    interfaces: [ColorFormat32, ColorFormatBase]
  };
  var ARGB_instance = null;
  function ARGB_getInstance() {
    if (ARGB_instance === null) {
      new ARGB();
    }
    return ARGB_instance;
  }
  function BGRA() {
    BGRA_instance = this;
    ColorFormat32.call(this);
    this.$delegate_mcsxe9$_0 = new ColorFormatBase$Mixin(16, 8, 8, 8, 0, 8, 24, 8);
  }
  BGRA.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getA_za3lpa$(v);
  };
  BGRA.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getB_za3lpa$(v);
  };
  BGRA.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getG_za3lpa$(v);
  };
  BGRA.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_mcsxe9$_0.getR_za3lpa$(v);
  };
  BGRA.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_mcsxe9$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BGRA',
    interfaces: [ColorFormat32, ColorFormatBase]
  };
  var BGRA_instance = null;
  function BGRA_getInstance() {
    if (BGRA_instance === null) {
      new BGRA();
    }
    return BGRA_instance;
  }
  function ColorFormatBase() {
  }
  function ColorFormatBase$Mixin(rOffset, rSize, gOffset, gSize, bOffset, bSize, aOffset, aSize) {
    this.rOffset = rOffset;
    this.rSize = rSize;
    this.gOffset = gOffset;
    this.gSize = gSize;
    this.bOffset = bOffset;
    this.bSize = bSize;
    this.aOffset = aOffset;
    this.aSize = aSize;
  }
  ColorFormatBase$Mixin.prototype.getR_za3lpa$ = function (v) {
    return extractScaledFF(v, this.rOffset, this.rSize);
  };
  ColorFormatBase$Mixin.prototype.getG_za3lpa$ = function (v) {
    return extractScaledFF(v, this.gOffset, this.gSize);
  };
  ColorFormatBase$Mixin.prototype.getB_za3lpa$ = function (v) {
    return extractScaledFF(v, this.bOffset, this.bSize);
  };
  ColorFormatBase$Mixin.prototype.getA_za3lpa$ = function (v) {
    return extractScaledFFDefault(v, this.aOffset, this.aSize, 255);
  };
  ColorFormatBase$Mixin.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return insertScaledFF(insertScaledFF(insertScaledFF(insertScaledFF(0, r, this.rOffset, this.rSize), g, this.gOffset, this.gSize), b, this.bOffset, this.bSize), a, this.aOffset, this.aSize);
  };
  ColorFormatBase$Mixin.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Mixin',
    interfaces: [ColorFormatBase]
  };
  ColorFormatBase.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ColorFormatBase',
    interfaces: []
  };
  function ColorFormat(bpp) {
    ColorFormat$Companion_getInstance();
    this.bpp = bpp;
    this.bytesPerPixel = this.bpp / 8 | 0;
  }
  ColorFormat.prototype.getRf_za3lpa$ = function (v) {
    return this.getR_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getGf_za3lpa$ = function (v) {
    return this.getG_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getBf_za3lpa$ = function (v) {
    return this.getB_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getAf_za3lpa$ = function (v) {
    return this.getA_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getRd_za3lpa$ = function (v) {
    return this.getR_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getGd_za3lpa$ = function (v) {
    return this.getG_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getBd_za3lpa$ = function (v) {
    return this.getB_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.getAd_za3lpa$ = function (v) {
    return this.getA_za3lpa$(v) / 255.0;
  };
  ColorFormat.prototype.toRGBA_za3lpa$ = function (v) {
    return RGBA_getInstance().packFast_tjonv8$(this.getR_za3lpa$(v), this.getG_za3lpa$(v), this.getB_za3lpa$(v), this.getA_za3lpa$(v));
  };
  ColorFormat.prototype.packRGBA_za3lpa$ = function (v) {
    return this.pack_tjonv8$(RGBA_getInstance().getR_za3lpa$(v), RGBA_getInstance().getG_za3lpa$(v), RGBA_getInstance().getB_za3lpa$(v), RGBA_getInstance().getA_za3lpa$(v));
  };
  ColorFormat.prototype.convertTo_slk207$ = function (color, target) {
    return target.pack_tjonv8$(this.getR_za3lpa$(color), this.getG_za3lpa$(color), this.getB_za3lpa$(color), this.getA_za3lpa$(color));
  };
  function ColorFormat$Companion() {
    ColorFormat$Companion_instance = this;
  }
  ColorFormat$Companion.prototype.clamp0_FF_za3lpa$ = function (v) {
    return v < 0 ? 0 : v > 255 ? 255 : v;
  };
  ColorFormat$Companion.prototype.clampf01_mx4ult$ = function (v) {
    return v < 0.0 ? 0.0 : v > 1.0 ? 1.0 : v;
  };
  ColorFormat$Companion.prototype.clampFF_za3lpa$ = function (a) {
    return Math_0.min(a, 255);
  };
  ColorFormat$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColorFormat$Companion_instance = null;
  function ColorFormat$Companion_getInstance() {
    if (ColorFormat$Companion_instance === null) {
      new ColorFormat$Companion();
    }
    return ColorFormat$Companion_instance;
  }
  ColorFormat.prototype.decodeInternal_pvkvsx$ = defineInlineFunction('korim-js.com.soywiz.korim.color.ColorFormat.decodeInternal_pvkvsx$', wrapFunction(function () {
    var color = _.com.soywiz.korim.color;
    return function (data, dataOffset, out, outOffset, size, read) {
      var tmp$;
      var io = dataOffset;
      var oo = outOffset;
      var bytesPerPixel = this.bytesPerPixel;
      for (var n = 0; n < size; n++) {
        var c = read(data, io);
        io = io + bytesPerPixel | 0;
        out[tmp$ = oo, oo = tmp$ + 1 | 0, tmp$] = color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c), this.getG_za3lpa$(c), this.getB_za3lpa$(c), this.getA_za3lpa$(c));
      }
    };
  }));
  ColorFormat.prototype.decode_c0jzf6$$default = function (data, dataOffset, out, outOffset, size, littleEndian) {
    var tmp$;
    tmp$ = this.bpp;
    if (tmp$ === 16)
      if (littleEndian) {
        var tmp$_0;
        var io = dataOffset;
        var oo = outOffset;
        var bytesPerPixel = this.bytesPerPixel;
        for (var n = 0; n < size; n++) {
          var c = readU16_le(data, io);
          io = io + bytesPerPixel | 0;
          out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c), this.getG_za3lpa$(c), this.getB_za3lpa$(c), this.getA_za3lpa$(c));
        }
      }
       else {
        var tmp$_1;
        var io_0 = dataOffset;
        var oo_0 = outOffset;
        var bytesPerPixel_0 = this.bytesPerPixel;
        for (var n_0 = 0; n_0 < size; n_0++) {
          var c_0 = readU16_be(data, io_0);
          io_0 = io_0 + bytesPerPixel_0 | 0;
          out[tmp$_1 = oo_0, oo_0 = tmp$_1 + 1 | 0, tmp$_1] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c_0), this.getG_za3lpa$(c_0), this.getB_za3lpa$(c_0), this.getA_za3lpa$(c_0));
        }
      }
     else if (tmp$ === 24)
      if (littleEndian) {
        var tmp$_2;
        var io_1 = dataOffset;
        var oo_1 = outOffset;
        var bytesPerPixel_1 = this.bytesPerPixel;
        for (var n_1 = 0; n_1 < size; n_1++) {
          var c_1 = readU24_le(data, io_1);
          io_1 = io_1 + bytesPerPixel_1 | 0;
          out[tmp$_2 = oo_1, oo_1 = tmp$_2 + 1 | 0, tmp$_2] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c_1), this.getG_za3lpa$(c_1), this.getB_za3lpa$(c_1), this.getA_za3lpa$(c_1));
        }
      }
       else {
        var tmp$_3;
        var io_2 = dataOffset;
        var oo_2 = outOffset;
        var bytesPerPixel_2 = this.bytesPerPixel;
        for (var n_2 = 0; n_2 < size; n_2++) {
          var c_2 = readU24_be(data, io_2);
          io_2 = io_2 + bytesPerPixel_2 | 0;
          out[tmp$_3 = oo_2, oo_2 = tmp$_3 + 1 | 0, tmp$_3] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c_2), this.getG_za3lpa$(c_2), this.getB_za3lpa$(c_2), this.getA_za3lpa$(c_2));
        }
      }
     else if (tmp$ === 32)
      if (littleEndian) {
        var tmp$_4;
        var io_3 = dataOffset;
        var oo_3 = outOffset;
        var bytesPerPixel_3 = this.bytesPerPixel;
        for (var n_3 = 0; n_3 < size; n_3++) {
          var c_3 = readS32_le(data, io_3);
          io_3 = io_3 + bytesPerPixel_3 | 0;
          out[tmp$_4 = oo_3, oo_3 = tmp$_4 + 1 | 0, tmp$_4] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c_3), this.getG_za3lpa$(c_3), this.getB_za3lpa$(c_3), this.getA_za3lpa$(c_3));
        }
      }
       else {
        var tmp$_5;
        var io_4 = dataOffset;
        var oo_4 = outOffset;
        var bytesPerPixel_4 = this.bytesPerPixel;
        for (var n_4 = 0; n_4 < size; n_4++) {
          var c_4 = readS32_be(data, io_4);
          io_4 = io_4 + bytesPerPixel_4 | 0;
          out[tmp$_5 = oo_4, oo_4 = tmp$_5 + 1 | 0, tmp$_5] = package$color.RGBA.packFast_tjonv8$(this.getR_za3lpa$(c_4), this.getG_za3lpa$(c_4), this.getB_za3lpa$(c_4), this.getA_za3lpa$(c_4));
        }
      }
     else
      throw new IllegalArgumentException('Unsupported bpp ' + this.bpp);
  };
  ColorFormat.prototype.decode_c0jzf6$ = function (data, dataOffset, out, outOffset, size, littleEndian, callback$default) {
    if (littleEndian === void 0)
      littleEndian = true;
    callback$default ? callback$default(data, dataOffset, out, outOffset, size, littleEndian) : this.decode_c0jzf6$$default(data, dataOffset, out, outOffset, size, littleEndian);
  };
  ColorFormat.prototype.decode_exhmhv$$default = function (data, dataOffset, size, littleEndian) {
    var out = new Int32Array(size);
    this.decode_c0jzf6$(data, dataOffset, out, 0, size, littleEndian);
    return out;
  };
  ColorFormat.prototype.decode_exhmhv$ = function (data, dataOffset, size, littleEndian, callback$default) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (size === void 0)
      size = data.length / this.bytesPerPixel | 0;
    if (littleEndian === void 0)
      littleEndian = true;
    return callback$default ? callback$default(data, dataOffset, size, littleEndian) : this.decode_exhmhv$$default(data, dataOffset, size, littleEndian);
  };
  ColorFormat.prototype.decodeToBitmap32_qq690d$$default = function (width, height, data, dataOffset, littleEndian) {
    return new Bitmap32(width, height, this.decode_exhmhv$(data, dataOffset, Kotlin.imul(width, height), littleEndian));
  };
  ColorFormat.prototype.decodeToBitmap32_qq690d$ = function (width, height, data, dataOffset, littleEndian, callback$default) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    return callback$default ? callback$default(width, height, data, dataOffset, littleEndian) : this.decodeToBitmap32_qq690d$$default(width, height, data, dataOffset, littleEndian);
  };
  ColorFormat.prototype.encode_upcuk2$$default = function (colors, colorsOffset, out, outOffset, size, littleEndian) {
    var tmp$, tmp$_0;
    var io = colorsOffset;
    var oo = outOffset;
    for (var n = 0; n < size; n++) {
      var c = colors[tmp$ = io, io = tmp$ + 1 | 0, tmp$];
      var ec = this.pack_tjonv8$(RGBA_getInstance().getR_za3lpa$(c), RGBA_getInstance().getG_za3lpa$(c), RGBA_getInstance().getB_za3lpa$(c), RGBA_getInstance().getA_za3lpa$(c));
      tmp$_0 = this.bpp;
      if (tmp$_0 === 16)
        if (littleEndian)
          write16_le(out, oo, ec);
        else
          write16_be(out, oo, ec);
      else if (tmp$_0 === 24)
        if (littleEndian)
          write24_le(out, oo, ec);
        else
          write24_be(out, oo, ec);
      else if (tmp$_0 === 32)
        if (littleEndian)
          write32_le(out, oo, ec);
        else
          write32_be(out, oo, ec);
      else
        throw new IllegalArgumentException('Unsupported bpp ' + this.bpp);
      oo = oo + this.bytesPerPixel | 0;
    }
  };
  ColorFormat.prototype.encode_upcuk2$ = function (colors, colorsOffset, out, outOffset, size, littleEndian, callback$default) {
    if (littleEndian === void 0)
      littleEndian = true;
    callback$default ? callback$default(colors, colorsOffset, out, outOffset, size, littleEndian) : this.encode_upcuk2$$default(colors, colorsOffset, out, outOffset, size, littleEndian);
  };
  ColorFormat.prototype.encode_mbw8y8$$default = function (colors, colorsOffset, size, littleEndian) {
    var out = new Int8Array(Kotlin.imul(size, this.bytesPerPixel));
    this.encode_upcuk2$(colors, colorsOffset, out, 0, size, littleEndian);
    return out;
  };
  ColorFormat.prototype.encode_mbw8y8$ = function (colors, colorsOffset, size, littleEndian, callback$default) {
    if (colorsOffset === void 0)
      colorsOffset = 0;
    if (size === void 0)
      size = colors.length;
    if (littleEndian === void 0)
      littleEndian = true;
    return callback$default ? callback$default(colors, colorsOffset, size, littleEndian) : this.encode_mbw8y8$$default(colors, colorsOffset, size, littleEndian);
  };
  ColorFormat.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ColorFormat',
    interfaces: [ColorFormatBase]
  };
  function ColorFormat16() {
    ColorFormat.call(this, 16);
  }
  ColorFormat16.prototype.encode_1zbdyj$ = function (colors, colorsOffset, out, outOffset, size) {
    var tmp$, tmp$_0;
    var io = colorsOffset;
    var oo = outOffset;
    for (var n = 0; n < size; n++) {
      var c = colors[tmp$ = io, io = tmp$ + 1 | 0, tmp$];
      out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = Kotlin.toShort(this.pack_tjonv8$(RGBA_getInstance().getR_za3lpa$(c), RGBA_getInstance().getG_za3lpa$(c), RGBA_getInstance().getB_za3lpa$(c), RGBA_getInstance().getA_za3lpa$(c)));
    }
  };
  ColorFormat16.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ColorFormat16',
    interfaces: [ColorFormat]
  };
  function ColorFormat24() {
    ColorFormat.call(this, 24);
  }
  ColorFormat24.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ColorFormat24',
    interfaces: [ColorFormat]
  };
  function ColorFormat32() {
    ColorFormat.call(this, 32);
  }
  ColorFormat32.prototype.encode_lvhpry$ = function (colors, colorsOffset, out, outOffset, size) {
    var tmp$, tmp$_0;
    var io = colorsOffset;
    var oo = outOffset;
    for (var n = 0; n < size; n++) {
      var c = colors[tmp$ = io, io = tmp$ + 1 | 0, tmp$];
      out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = this.pack_tjonv8$(RGBA_getInstance().getR_za3lpa$(c), RGBA_getInstance().getG_za3lpa$(c), RGBA_getInstance().getB_za3lpa$(c), RGBA_getInstance().getA_za3lpa$(c));
    }
  };
  ColorFormat32.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ColorFormat32',
    interfaces: [ColorFormat]
  };
  function ColorTransform(_mR, _mG, _mB, _mA, _aR, _aG, _aB, _aA) {
    ColorTransform$Companion_getInstance();
    if (_mR === void 0)
      _mR = 1.0;
    if (_mG === void 0)
      _mG = 1.0;
    if (_mB === void 0)
      _mB = 1.0;
    if (_mA === void 0)
      _mA = 1.0;
    if (_aR === void 0)
      _aR = 0;
    if (_aG === void 0)
      _aG = 0;
    if (_aB === void 0)
      _aB = 0;
    if (_aA === void 0)
      _aA = 0;
    this._mR_0 = _mR;
    this._mG_0 = _mG;
    this._mB_0 = _mB;
    this._mA_0 = _mA;
    this._aR_0 = _aR;
    this._aG_0 = _aG;
    this._aB_0 = _aB;
    this._aA_0 = _aA;
    this.dirty_0 = true;
    this._colorMul_0 = 0;
    this._colorAdd_0 = 0;
  }
  function ColorTransform$Companion() {
    ColorTransform$Companion_instance = this;
    this.identity = new ColorTransform();
  }
  ColorTransform$Companion.prototype.Multiply_6y0v78$ = function (r, g, b, a) {
    return new ColorTransform(r, g, b, a, 0, 0, 0, 0);
  };
  ColorTransform$Companion.prototype.Add_tjonv8$ = function (r, g, b, a) {
    return new ColorTransform(Kotlin.numberToDouble(1), Kotlin.numberToDouble(1), Kotlin.numberToDouble(1), Kotlin.numberToDouble(1), Kotlin.numberToInt(r), Kotlin.numberToInt(g), Kotlin.numberToInt(b), Kotlin.numberToInt(a));
  };
  ColorTransform$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ColorTransform$Companion_instance = null;
  function ColorTransform$Companion_getInstance() {
    if (ColorTransform$Companion_instance === null) {
      new ColorTransform$Companion();
    }
    return ColorTransform$Companion_instance;
  }
  ColorTransform.prototype.setToInterpolated_v05y7o$ = function (l, r, ratio) {
    return this.setTo_s3cjg4$(interpolate(ratio, l.mR, r.mR), interpolate(ratio, l.mG, r.mG), interpolate(ratio, l.mB, r.mB), interpolate(ratio, l.mA, r.mA), interpolate_0(ratio, l.aR, r.aR), interpolate_0(ratio, l.aG, r.aG), interpolate_0(ratio, l.aB, r.aB), interpolate_0(ratio, l.aA, r.aA));
  };
  ColorTransform.prototype.interpolateWith_e37ph5$ = function (other, ratio) {
    return (new ColorTransform()).setToInterpolated_v05y7o$(this, other, ratio);
  };
  ColorTransform.prototype.computeColors_0 = function () {
    if (this.dirty_0) {
      this.dirty_0 = false;
      this._colorMul_0 = RGBA_getInstance().packf_7b5o5w$(this._mR_0, this._mG_0, this._mB_0, this._mA_0);
      this._colorAdd_0 = this.packAdd_0(this._aR_0, this._aG_0, this._aB_0, this._aA_0);
    }
    return this;
  };
  ColorTransform.prototype.packAdd_0 = function (r, g, b, a) {
    return this.packAddComponent_0(r) << 0 | this.packAddComponent_0(g) << 8 | this.packAddComponent_0(b) << 16 | this.packAddComponent_0(a) << 24;
  };
  ColorTransform.prototype.packAddComponent_0 = function (v) {
    return clamp(127 + (v >> 1) | 0, 0, 255);
  };
  ColorTransform.prototype.unpackAddComponent_0 = function (v) {
    return (v - 127 | 0) * 2 | 0;
  };
  Object.defineProperty(ColorTransform.prototype, 'colorMul', {
    get: function () {
      return this.computeColors_0()._colorMul_0;
    },
    set: function (v) {
      this._mR_0 = RGBA_getInstance().getFastRf_za3lpa$(v);
      this._mG_0 = RGBA_getInstance().getFastGf_za3lpa$(v);
      this._mB_0 = RGBA_getInstance().getFastBf_za3lpa$(v);
      this._mA_0 = RGBA_getInstance().getFastAf_za3lpa$(v);
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'colorAdd', {
    get: function () {
      return this.computeColors_0()._colorAdd_0;
    },
    set: function (v) {
      this._aR_0 = this.unpackAddComponent_0(RGBA_getInstance().getFastR_za3lpa$(v));
      this._aG_0 = this.unpackAddComponent_0(RGBA_getInstance().getFastG_za3lpa$(v));
      this._aB_0 = this.unpackAddComponent_0(RGBA_getInstance().getFastB_za3lpa$(v));
      this._aA_0 = this.unpackAddComponent_0(RGBA_getInstance().getFastA_za3lpa$(v));
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mR', {
    get: function () {
      return this._mR_0;
    },
    set: function (v) {
      this._mR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mG', {
    get: function () {
      return this._mG_0;
    },
    set: function (v) {
      this._mG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mB', {
    get: function () {
      return this._mB_0;
    },
    set: function (v) {
      this._mB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mA', {
    get: function () {
      return this._mA_0;
    },
    set: function (v) {
      this._mA_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mRf', {
    get: function () {
      return this._mR_0;
    },
    set: function (v) {
      this._mR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mGf', {
    get: function () {
      return this._mG_0;
    },
    set: function (v) {
      this._mG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mBf', {
    get: function () {
      return this._mB_0;
    },
    set: function (v) {
      this._mB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'mAf', {
    get: function () {
      return this._mA_0;
    },
    set: function (v) {
      this._mA_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aR', {
    get: function () {
      return this._aR_0;
    },
    set: function (v) {
      this._aR_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aG', {
    get: function () {
      return this._aG_0;
    },
    set: function (v) {
      this._aG_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aB', {
    get: function () {
      return this._aB_0;
    },
    set: function (v) {
      this._aB_0 = v;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'aA', {
    get: function () {
      return this._aA_0;
    },
    set: function (v) {
      this._aA_0 = v;
      this.dirty_0 = true;
    }
  });
  ColorTransform.prototype.setMultiplyTo_6y0v78$ = function (mR, mG, mB, mA) {
    if (mR === void 0)
      mR = 1.0;
    if (mG === void 0)
      mG = 1.0;
    if (mB === void 0)
      mB = 1.0;
    if (mA === void 0)
      mA = 1.0;
    this._mR_0 = mR;
    this._mG_0 = mG;
    this._mB_0 = mB;
    this._mA_0 = mA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.setAddTo_tjonv8$ = function (aR, aG, aB, aA) {
    if (aR === void 0)
      aR = 0;
    if (aG === void 0)
      aG = 0;
    if (aB === void 0)
      aB = 0;
    if (aA === void 0)
      aA = 0;
    this._aR_0 = aR;
    this._aG_0 = aG;
    this._aB_0 = aB;
    this._aA_0 = aA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.setTo_s3cjg4$ = function (mR, mG, mB, mA, aR, aG, aB, aA) {
    if (mR === void 0)
      mR = 1.0;
    if (mG === void 0)
      mG = 1.0;
    if (mB === void 0)
      mB = 1.0;
    if (mA === void 0)
      mA = 1.0;
    if (aR === void 0)
      aR = 0;
    if (aG === void 0)
      aG = 0;
    if (aB === void 0)
      aB = 0;
    if (aA === void 0)
      aA = 0;
    this._mR_0 = mR;
    this._mG_0 = mG;
    this._mB_0 = mB;
    this._mA_0 = mA;
    this._aR_0 = aR;
    this._aG_0 = aG;
    this._aB_0 = aB;
    this._aA_0 = aA;
    this.dirty_0 = true;
    return this;
  };
  ColorTransform.prototype.copyFrom_54kf7e$ = function (t) {
    this._mR_0 = t._mR_0;
    this._mG_0 = t._mG_0;
    this._mB_0 = t._mB_0;
    this._mA_0 = t._mA_0;
    this._aR_0 = t._aR_0;
    this._aG_0 = t._aG_0;
    this._aB_0 = t._aB_0;
    this._aA_0 = t._aA_0;
    this.dirty_0 = t.dirty_0;
    this._colorAdd_0 = t._colorAdd_0;
    this._colorMul_0 = t._colorMul_0;
    return this;
  };
  ColorTransform.prototype.setToConcat_k8ycrk$ = function (l, r) {
    return this.setTo_s3cjg4$(l.mR * r.mR, l.mG * r.mG, l.mB * r.mB, l.mA * r.mA, l.aR + r.aR | 0, l.aG + r.aG | 0, l.aB + r.aB | 0, l.aA + r.aA | 0);
  };
  ColorTransform.prototype.toString = function () {
    return 'ColorTransform(*[' + get_niceStr(this.mR) + ', ' + get_niceStr(this.mG) + ', ' + get_niceStr(this.mB) + ', ' + get_niceStr(this.mA) + ']+[' + this.aR + ', ' + this.aG + ', ' + this.aB + ', ' + this.aA + '])';
  };
  ColorTransform.prototype.isIdentity = function () {
    return this.mR === 1.0 && this.mG === 1.0 && this.mB === 1.0 && this.mA === 1.0 && this.aR === 0 && this.aG === 0 && this.aB === 0 && this.aA === 0;
  };
  ColorTransform.prototype.hasJustAlpha = function () {
    return this.mR === 1.0 && this.mG === 1.0 && this.mB === 1.0 && this.aR === 0 && this.aG === 0 && this.aB === 0 && this.aA === 0;
  };
  ColorTransform.prototype.setToIdentity = function () {
    return this.setTo_s3cjg4$(1.0, 1.0, 1.0, 1.0, 0, 0, 0, 0);
  };
  ColorTransform.prototype.applyToColor_za3lpa$ = function (color) {
    var r = RGBA_getInstance().getFastR_za3lpa$(color) * this.mR + this.aR | 0;
    var g = RGBA_getInstance().getFastG_za3lpa$(color) * this.mG + this.aG | 0;
    var b = RGBA_getInstance().getFastB_za3lpa$(color) * this.mB + this.aB | 0;
    var a = RGBA_getInstance().getFastA_za3lpa$(color) * this.mA + this.aA | 0;
    return RGBA_getInstance().pack_tjonv8$(r, g, b, a);
  };
  ColorTransform.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ColorTransform',
    interfaces: [Interpolable, MutableInterpolable]
  };
  ColorTransform.prototype.component1_0 = function () {
    return this._mR_0;
  };
  ColorTransform.prototype.component2_0 = function () {
    return this._mG_0;
  };
  ColorTransform.prototype.component3_0 = function () {
    return this._mB_0;
  };
  ColorTransform.prototype.component4_0 = function () {
    return this._mA_0;
  };
  ColorTransform.prototype.component5_0 = function () {
    return this._aR_0;
  };
  ColorTransform.prototype.component6_0 = function () {
    return this._aG_0;
  };
  ColorTransform.prototype.component7_0 = function () {
    return this._aB_0;
  };
  ColorTransform.prototype.component8_0 = function () {
    return this._aA_0;
  };
  ColorTransform.prototype.copy_s3cjg4$ = function (_mR, _mG, _mB, _mA, _aR, _aG, _aB, _aA) {
    return new ColorTransform(_mR === void 0 ? this._mR_0 : _mR, _mG === void 0 ? this._mG_0 : _mG, _mB === void 0 ? this._mB_0 : _mB, _mA === void 0 ? this._mA_0 : _mA, _aR === void 0 ? this._aR_0 : _aR, _aG === void 0 ? this._aG_0 : _aG, _aB === void 0 ? this._aB_0 : _aB, _aA === void 0 ? this._aA_0 : _aA);
  };
  ColorTransform.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this._mR_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mG_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mB_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._mA_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aR_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aG_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aB_0) | 0;
    result = result * 31 + Kotlin.hashCode(this._aA_0) | 0;
    return result;
  };
  ColorTransform.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this._mR_0, other._mR_0) && Kotlin.equals(this._mG_0, other._mG_0) && Kotlin.equals(this._mB_0, other._mB_0) && Kotlin.equals(this._mA_0, other._mA_0) && Kotlin.equals(this._aR_0, other._aR_0) && Kotlin.equals(this._aG_0, other._aG_0) && Kotlin.equals(this._aB_0, other._aB_0) && Kotlin.equals(this._aA_0, other._aA_0)))));
  };
  var ColorTransform_0 = defineInlineFunction('korim-js.com.soywiz.korim.color.ColorTransform_6tck58$', wrapFunction(function () {
    var ColorTransform_init = _.com.soywiz.korim.color.ColorTransform;
    return function (mR, mG, mB, mA, aR, aG, aB, aA) {
      return new ColorTransform_init(Kotlin.numberToDouble(mR), Kotlin.numberToDouble(mG), Kotlin.numberToDouble(mB), Kotlin.numberToDouble(mA), Kotlin.numberToInt(aR), Kotlin.numberToInt(aG), Kotlin.numberToInt(aB), Kotlin.numberToInt(aA));
    };
  }));
  function Colors() {
    Colors_instance = this;
    this.WHITE = RGBA_getInstance().packFast_tjonv8$(255, 255, 255, 255);
    this.BLACK = RGBA_getInstance().packFast_tjonv8$(0, 0, 0, 255);
    this.RED = RGBA_getInstance().packFast_tjonv8$(255, 0, 0, 255);
    this.GREEN = RGBA_getInstance().packFast_tjonv8$(0, 255, 0, 255);
    this.BLUE = RGBA_getInstance().packFast_tjonv8$(0, 0, 255, 255);
    this.TRANSPARENT_BLACK = RGBA_getInstance().packFast_tjonv8$(0, 0, 0, 0);
    this.TRANSPARENT_WHITE = RGBA_getInstance().packFast_tjonv8$(0, 0, 0, 0);
  }
  Colors.prototype.get_61zpoe$ = function (s) {
    if (startsWith(s, '#')) {
      var ss = substr(s, 1);
      var N = ss.length >= 6 ? 2 : 1;
      var comps = ss.length / N | 0;
      var scale = N === 1 ? 1.0 / 15.0 : 1.0 / 255.0;
      var rf = toInt(substr_0(ss, N * 0 | 0, N), 16) * scale;
      var gf = toInt(substr_0(ss, N * 1 | 0, N), 16) * scale;
      var bf = toInt(substr_0(ss, N * 2 | 0, N), 16) * scale;
      var af = comps >= 4 ? toInt(substr_0(ss, N * 3 | 0, N), 16) * scale : 1.0;
      return RGBA_getInstance().packf_6y0v78$(rf, gf, bf, af);
    }
     else {
      invalidOp('Unsupported color ' + s);
    }
  };
  Colors.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Colors',
    interfaces: []
  };
  var Colors_instance = null;
  function Colors_getInstance() {
    if (Colors_instance === null) {
      new Colors();
    }
    return Colors_instance;
  }
  function NamedColors() {
    NamedColors_instance = this;
    this.colorsByName = mapOf([to('black', RGBA_getInstance().invoke_tjonv8$(0, 0, 0, 255)), to('white', RGBA_getInstance().invoke_tjonv8$(255, 255, 255, 255)), to('red', RGBA_getInstance().invoke_tjonv8$(255, 0, 0, 255)), to('green', RGBA_getInstance().invoke_tjonv8$(0, 128, 0, 255)), to('blue', RGBA_getInstance().invoke_tjonv8$(0, 0, 255, 255)), to('lime', RGBA_getInstance().invoke_tjonv8$(0, 255, 0, 255)), to('orange', RGBA_getInstance().invoke_tjonv8$(255, 165, 0, 255)), to('pink', RGBA_getInstance().invoke_tjonv8$(255, 192, 203, 255))]);
  }
  NamedColors.prototype.get_bm4lxs$ = function (str, default_0) {
    if (default_0 === void 0)
      default_0 = Colors_getInstance().RED;
    var tmp$, tmp$_0;
    if (startsWith(str, '#')) {
      var hex = substr(str, 1);
      var r;
      var g;
      var b;
      var a;
      tmp$ = hex.length;
      if (tmp$ === 3) {
        r = (toInt(substr_0(hex, 0, 1), 16) * 255 | 0) / 15 | 0;
        g = (toInt(substr_0(hex, 1, 1), 16) * 255 | 0) / 15 | 0;
        b = (toInt(substr_0(hex, 2, 1), 16) * 255 | 0) / 15 | 0;
        a = 255;
      }
       else if (tmp$ === 6) {
        r = toInt(substr_0(hex, 0, 2), 16);
        g = toInt(substr_0(hex, 2, 2), 16);
        b = toInt(substr_0(hex, 4, 2), 16);
        a = 255;
      }
       else {
        r = 0;
        g = 0;
        b = 0;
        a = 255;
      }
      return RGBA_getInstance().pack_tjonv8$(r, g, b, a);
    }
     else {
      return (tmp$_0 = this.colorsByName.get_11rb$(str.toLowerCase())) != null ? tmp$_0 : default_0;
    }
  };
  NamedColors.prototype.toHtmlString_za3lpa$ = function (color) {
    return 'RGBA(' + Kotlin.toString(RGBA_getInstance().getR_za3lpa$(color)) + ',' + Kotlin.toString(RGBA_getInstance().getG_za3lpa$(color)) + ',' + Kotlin.toString(RGBA_getInstance().getB_za3lpa$(color)) + ',' + Kotlin.toString(RGBA_getInstance().getAf_za3lpa$(color)) + ')';
  };
  NamedColors.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'NamedColors',
    interfaces: []
  };
  var NamedColors_instance = null;
  function NamedColors_getInstance() {
    if (NamedColors_instance === null) {
      new NamedColors();
    }
    return NamedColors_instance;
  }
  function RGB() {
    RGB_instance = this;
    ColorFormat24.call(this);
  }
  RGB.prototype.getR_za3lpa$ = function (v) {
    return extract8(v, 0);
  };
  RGB.prototype.getG_za3lpa$ = function (v) {
    return extract8(v, 8);
  };
  RGB.prototype.getB_za3lpa$ = function (v) {
    return extract8(v, 16);
  };
  RGB.prototype.getA_za3lpa$ = function (v) {
    return 255;
  };
  RGB.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return insert(insert(insert(0, r, 0, 8), g, 8, 8), b, 16, 8);
  };
  RGB.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RGB',
    interfaces: [ColorFormat24]
  };
  var RGB_instance = null;
  function RGB_getInstance() {
    if (RGB_instance === null) {
      new RGB();
    }
    return RGB_instance;
  }
  function RGBA() {
    RGBA_instance = this;
    ColorFormat32.call(this);
  }
  RGBA.prototype.getR_za3lpa$ = function (v) {
    return this.getFastR_za3lpa$(v);
  };
  RGBA.prototype.getG_za3lpa$ = function (v) {
    return this.getFastG_za3lpa$(v);
  };
  RGBA.prototype.getB_za3lpa$ = function (v) {
    return this.getFastB_za3lpa$(v);
  };
  RGBA.prototype.getA_za3lpa$ = function (v) {
    return this.getFastA_za3lpa$(v);
  };
  RGBA.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(r) << 0 | ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(g) << 8 | ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(b) << 16 | ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(a) << 24;
  };
  RGBA.prototype.getFastR_za3lpa$ = function (v) {
    return v >>> 0 & 255;
  };
  RGBA.prototype.getFastG_za3lpa$ = function (v) {
    return v >>> 8 & 255;
  };
  RGBA.prototype.getFastB_za3lpa$ = function (v) {
    return v >>> 16 & 255;
  };
  RGBA.prototype.getFastA_za3lpa$ = function (v) {
    return v >>> 24 & 255;
  };
  RGBA.prototype.getFastRf_za3lpa$ = function (v) {
    return (v >>> 0 & 255) / 255;
  };
  RGBA.prototype.getFastGf_za3lpa$ = function (v) {
    return (v >>> 8 & 255) / 255;
  };
  RGBA.prototype.getFastBf_za3lpa$ = function (v) {
    return (v >>> 16 & 255) / 255;
  };
  RGBA.prototype.getFastAf_za3lpa$ = function (v) {
    return (v >>> 24 & 255) / 255;
  };
  RGBA.prototype.getFastRd_za3lpa$ = function (v) {
    return (v >>> 0 & 255) / 255;
  };
  RGBA.prototype.getFastGd_za3lpa$ = function (v) {
    return (v >>> 8 & 255) / 255;
  };
  RGBA.prototype.getFastBd_za3lpa$ = function (v) {
    return (v >>> 16 & 255) / 255;
  };
  RGBA.prototype.getFastAd_za3lpa$ = function (v) {
    return (v >>> 24 & 255) / 255;
  };
  RGBA.prototype.getRGB_za3lpa$ = function (v) {
    return v & 16777215;
  };
  RGBA.prototype.multipliedByAlpha_za3lpa$ = function (v) {
    return this.premultiplyFast_za3lpa$(v);
  };
  RGBA.prototype.toHexString_za3lpa$ = function (v) {
    return format('#%02x%02x%02x%02x', [this.getFastR_za3lpa$(v), this.getFastG_za3lpa$(v), this.getFastB_za3lpa$(v), this.getFastA_za3lpa$(v)]);
  };
  RGBA.prototype.toHtmlColor_za3lpa$ = function (v) {
    return 'rgba(' + this.getFastR_za3lpa$(v) + ', ' + this.getFastG_za3lpa$(v) + ', ' + this.getFastB_za3lpa$(v) + ', ' + this.getFastAf_za3lpa$(v) + ')';
  };
  RGBA.prototype.premultiply_za3lpa$ = function (v) {
    return this.premultiplyFast_za3lpa$(v);
  };
  RGBA.prototype.premultiplyAccurate_za3lpa$ = function (v) {
    var a1 = this.getFastA_za3lpa$(v);
    var af = a1 / 255.0;
    return this.packFast_tjonv8$(this.getFastR_za3lpa$(v) * af | 0, this.getFastG_za3lpa$(v) * af | 0, this.getFastB_za3lpa$(v) * af | 0, a1);
  };
  RGBA.prototype.premultiplyFast_za3lpa$ = function (v) {
    var A = (v >>> 24) + 1 | 0;
    var RB = Kotlin.imul(v & 16711935, A) >>> 8 & 16711935;
    var G = Kotlin.imul(v & 65280, A) >>> 8 & 65280;
    return v & ~16777215 | RB | G;
  };
  RGBA.prototype.mutliplyByAlpha_5wr77w$ = function (v, alpha) {
    return RGBA_getInstance().pack_tjonv8$(this.getFastR_za3lpa$(v), this.getFastG_za3lpa$(v), this.getFastB_za3lpa$(v), this.getFastA_za3lpa$(v) * alpha | 0);
  };
  RGBA.prototype.depremultiply_za3lpa$ = function (v) {
    return this.depremultiplyFast_za3lpa$(v);
  };
  RGBA.prototype.depremultiplyAccurate_za3lpa$ = function (v) {
    var alpha = this.getAd_za3lpa$(v);
    if (alpha === 0.0) {
      return Colors_getInstance().TRANSPARENT_WHITE;
    }
     else {
      var ialpha = 1.0 / alpha;
      return this.pack_tjonv8$(this.getFastR_za3lpa$(v) * ialpha | 0, this.getFastG_za3lpa$(v) * ialpha | 0, this.getFastB_za3lpa$(v) * ialpha | 0, this.getFastA_za3lpa$(v));
    }
  };
  RGBA.prototype.clampf1_yrwdxr$ = function ($receiver) {
    return $receiver > 1.0 ? 1.0 : $receiver;
  };
  RGBA.prototype.clamp255_s8ev3n$ = function ($receiver) {
    return $receiver > 255 ? 255 : $receiver;
  };
  RGBA.prototype.depremultiplyFast_za3lpa$ = function (v) {
    var A = v >>> 24;
    var alpha = A / 255.0;
    if (alpha === 0.0)
      return 0;
    var ialpha = 1.0 / alpha;
    var R = this.clamp255_s8ev3n$(this.getFastR_za3lpa$(v) * ialpha | 0);
    var G = this.clamp255_s8ev3n$(this.getFastG_za3lpa$(v) * ialpha | 0);
    var B = this.clamp255_s8ev3n$(this.getFastB_za3lpa$(v) * ialpha | 0);
    return this.packFast_tjonv8$(R, G, B, A);
  };
  RGBA.prototype.depremultiplyFastOld_za3lpa$ = function (v) {
    var A = v >>> 24;
    if (A === 0)
      return 0;
    var R = clamp(((v >>> 0 & 255) * 255 | 0) / A | 0, 0, 255);
    var G = clamp(((v >>> 8 & 255) * 255 | 0) / A | 0, 0, 255);
    var B = clamp(((v >>> 16 & 255) * 255 | 0) / A | 0, 0, 255);
    return this.packFast_tjonv8$(R, G, B, A);
  };
  RGBA.prototype.depremultiplyFaster_za3lpa$ = function (v) {
    var A = v >>> 24;
    var A1 = A + 1 | 0;
    var R = (((v >>> 0 & 255) << 8) / A1 | 0) & 255;
    var G = (((v >>> 8 & 255) << 8) / A1 | 0) & 255;
    var B = (((v >>> 16 & 255) << 8) / A1 | 0) & 255;
    return this.packFast_tjonv8$(R, G, B, A);
  };
  RGBA.prototype.depremultiplyFastest_za3lpa$ = function (v) {
    var A = (v >>> 24) + 1 | 0;
    var R = (((v & 255) << 8) / A | 0) & 240;
    var G = (((v & 65280) << 8) / A | 0) & 65280;
    var B = (((v & 16711680) << 8) / A | 0) & 16711680;
    return v & ~16777215 | B | G | R;
  };
  RGBA.prototype.packFast_tjonv8$ = function (r, g, b, a) {
    return r << 0 | g << 8 | b << 16 | a << 24;
  };
  RGBA.prototype.packfFast_7b5o5w$ = function (r, g, b, a) {
    return (r * 255 | 0) << 0 | (g * 255 | 0) << 8 | (b * 255 | 0) << 16 | (a * 255 | 0) << 24;
  };
  RGBA.prototype.packRGB_A_vux9f0$ = function (rgb, a) {
    return rgb & 16777215 | a << 24;
  };
  RGBA.prototype.blendComponent_224j3y$ = function (c1, c2, factor) {
    return c1 * (1.0 - factor) + c2 * factor & 255;
  };
  RGBA.prototype.blendRGB_qt1dr2$ = function (c1, c2, factor256) {
    var f1 = 256 - factor256 | 0;
    return (Kotlin.imul(c1 & 16711935, f1) + Kotlin.imul(c2 & 16711935, factor256) & (new Kotlin.Long(-16711936, 0)).toInt() | Kotlin.imul(c1 & 65280, f1) + Kotlin.imul(c2 & 65280, factor256) & 16711680) >>> 8;
  };
  RGBA.prototype.blend_qt1dr2$ = function (c1, c2, factor) {
    return this.blendRGB_qt1dr2$(c1, c2, factor);
  };
  RGBA.prototype.blend_224j3y$ = function (c1, c2, factor) {
    return this.blendRGB_224j3y$(c1, c2, factor);
  };
  RGBA.prototype.blendRGB_224j3y$ = function (c1, c2, factor) {
    return this.blendRGB_qt1dr2$(c1, c2, factor * 256 | 0);
  };
  RGBA.prototype.blendRGBA_224j3y$ = function (c1, c2, factor) {
    var RGB = this.blendRGB_qt1dr2$(c1 & 16777215, c2 & 16777215, factor * 256 | 0);
    var A = this.blendComponent_224j3y$(this.getFastA_za3lpa$(c1), this.getFastA_za3lpa$(c2), factor);
    return this.packRGB_A_vux9f0$(RGB, A);
  };
  RGBA.prototype.invoke_tjonv8$ = function (r, g, b, a) {
    return this.pack_tjonv8$(r, g, b, a);
  };
  RGBA.prototype.rgbaToBgra_za3lpa$ = function (v) {
    return v << 16 & 16711680 | v >> 16 & 255 | v & (new Kotlin.Long(-16711936, 0)).toInt();
  };
  RGBA.prototype.d2i_0 = function (v) {
    return ColorFormat$Companion_getInstance().clampf01_mx4ult$(v) * 255 | 0;
  };
  RGBA.prototype.f2i_0 = function (v) {
    return ColorFormat$Companion_getInstance().clampf01_mx4ult$(v) * 255 | 0;
  };
  RGBA.prototype.packf_6y0v78$ = function (r, g, b, a) {
    return this.packFast_tjonv8$(this.d2i_0(r), this.d2i_0(g), this.d2i_0(b), this.d2i_0(a));
  };
  RGBA.prototype.packf_7b5o5w$ = function (r, g, b, a) {
    return this.packFast_tjonv8$(this.f2i_0(r), this.f2i_0(g), this.f2i_0(b), this.f2i_0(a));
  };
  RGBA.prototype.packf_24o109$ = function (rgb, a) {
    return this.packRGB_A_vux9f0$(rgb, this.f2i_0(a));
  };
  RGBA.prototype.mix_vux9f0$ = function (dst, src) {
    var tmp$;
    var srcA = RGBA_getInstance().getFastA_za3lpa$(src);
    if (srcA === 0)
      tmp$ = dst;
    else if (srcA === 255)
      tmp$ = src;
    else {
      tmp$ = RGBA_getInstance().packRGB_A_vux9f0$(this.blendRGB_qt1dr2$(dst, src, srcA + 1 | 0), ColorFormat$Companion_getInstance().clampFF_za3lpa$(RGBA_getInstance().getFastA_za3lpa$(dst) + srcA | 0));
    }
    return tmp$;
  };
  RGBA.prototype.multiply_vux9f0$ = function (c1, c2) {
    return RGBA_getInstance().pack_tjonv8$(Kotlin.imul(RGBA_getInstance().getFastR_za3lpa$(c1), RGBA_getInstance().getFastR_za3lpa$(c2)) / 255 | 0, Kotlin.imul(RGBA_getInstance().getFastG_za3lpa$(c1), RGBA_getInstance().getFastG_za3lpa$(c2)) / 255 | 0, Kotlin.imul(RGBA_getInstance().getFastB_za3lpa$(c1), RGBA_getInstance().getFastB_za3lpa$(c2)) / 255 | 0, Kotlin.imul(RGBA_getInstance().getFastA_za3lpa$(c1), RGBA_getInstance().getFastA_za3lpa$(c2)) / 255 | 0);
  };
  RGBA.prototype.blendRGBAFastAlreadyPremultiplied_05_vux9f0$ = function (c1, c2) {
    var RB = (c1 & 16711935) + (c2 & 16711935) >>> 1 & 16711935;
    var G = (c1 & 65280) + (c2 & 65280) >>> 1 & 65280;
    var A = (c1 >>> 24) + (c2 >>> 24) >>> 1 & 255;
    return A << 24 | RB | G;
  };
  RGBA.prototype.blendRGBAFastAlreadyPremultiplied_05_tjonv8$ = function (c1, c2, c3, c4) {
    var RB = (c1 & 16711935) + (c2 & 16711935) + (c3 & 16711935) + (c4 & 16711935) >>> 2 & 16711935;
    var G = (c1 & 65280) + (c2 & 65280) + (c3 & 65280) + (c4 & 65280) >>> 2 & 65280;
    var A = (c1 >>> 24) + (c2 >>> 24) + (c3 >>> 24) + (c4 >>> 24) >>> 2 & 255;
    return A << 24 | RB | G;
  };
  RGBA.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RGBA',
    interfaces: [ColorFormat32]
  };
  var RGBA_instance = null;
  function RGBA_getInstance() {
    if (RGBA_instance === null) {
      new RGBA();
    }
    return RGBA_instance;
  }
  function RGBA_4444() {
    RGBA_4444_instance = this;
    ColorFormat16.call(this);
    this.$delegate_kmfwcy$_0 = new ColorFormatBase$Mixin(0, 4, 4, 4, 8, 4, 12, 4);
  }
  RGBA_4444.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getA_za3lpa$(v);
  };
  RGBA_4444.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getB_za3lpa$(v);
  };
  RGBA_4444.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getG_za3lpa$(v);
  };
  RGBA_4444.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_kmfwcy$_0.getR_za3lpa$(v);
  };
  RGBA_4444.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_kmfwcy$_0.pack_tjonv8$(r, g, b, a);
  };
  RGBA_4444.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RGBA_4444',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var RGBA_4444_instance = null;
  function RGBA_4444_getInstance() {
    if (RGBA_4444_instance === null) {
      new RGBA_4444();
    }
    return RGBA_4444_instance;
  }
  function RGBA_5551() {
    RGBA_5551_instance = this;
    ColorFormat16.call(this);
    this.$delegate_kmf8ly$_0 = new ColorFormatBase$Mixin(0, 5, 5, 5, 10, 5, 15, 1);
  }
  RGBA_5551.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getA_za3lpa$(v);
  };
  RGBA_5551.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getB_za3lpa$(v);
  };
  RGBA_5551.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getG_za3lpa$(v);
  };
  RGBA_5551.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_kmf8ly$_0.getR_za3lpa$(v);
  };
  RGBA_5551.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_kmf8ly$_0.pack_tjonv8$(r, g, b, a);
  };
  RGBA_5551.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RGBA_5551',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var RGBA_5551_instance = null;
  function RGBA_5551_getInstance() {
    if (RGBA_5551_instance === null) {
      new RGBA_5551();
    }
    return RGBA_5551_instance;
  }
  function RGB_555() {
    RGB_555_instance = this;
    ColorFormat16.call(this);
    this.$delegate_x15h52$_0 = new ColorFormatBase$Mixin(0, 5, 5, 5, 10, 5, 15, 0);
  }
  RGB_555.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getA_za3lpa$(v);
  };
  RGB_555.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getB_za3lpa$(v);
  };
  RGB_555.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getG_za3lpa$(v);
  };
  RGB_555.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_x15h52$_0.getR_za3lpa$(v);
  };
  RGB_555.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_x15h52$_0.pack_tjonv8$(r, g, b, a);
  };
  RGB_555.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RGB_555',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var RGB_555_instance = null;
  function RGB_555_getInstance() {
    if (RGB_555_instance === null) {
      new RGB_555();
    }
    return RGB_555_instance;
  }
  function RGB_565() {
    RGB_565_instance = this;
    ColorFormat16.call(this);
    this.$delegate_x15h5x$_0 = new ColorFormatBase$Mixin(0, 5, 5, 6, 11, 5, 15, 0);
  }
  RGB_565.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getA_za3lpa$(v);
  };
  RGB_565.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getB_za3lpa$(v);
  };
  RGB_565.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getG_za3lpa$(v);
  };
  RGB_565.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_x15h5x$_0.getR_za3lpa$(v);
  };
  RGB_565.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_x15h5x$_0.pack_tjonv8$(r, g, b, a);
  };
  RGB_565.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RGB_565',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var RGB_565_instance = null;
  function RGB_565_getInstance() {
    if (RGB_565_instance === null) {
      new RGB_565();
    }
    return RGB_565_instance;
  }
  function BGRA_4444() {
    BGRA_4444_instance = this;
    ColorFormat16.call(this);
    this.$delegate_htfjwy$_0 = new ColorFormatBase$Mixin(8, 4, 4, 4, 0, 4, 12, 4);
  }
  BGRA_4444.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getA_za3lpa$(v);
  };
  BGRA_4444.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getB_za3lpa$(v);
  };
  BGRA_4444.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getG_za3lpa$(v);
  };
  BGRA_4444.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_htfjwy$_0.getR_za3lpa$(v);
  };
  BGRA_4444.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_htfjwy$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA_4444.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BGRA_4444',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var BGRA_4444_instance = null;
  function BGRA_4444_getInstance() {
    if (BGRA_4444_instance === null) {
      new BGRA_4444();
    }
    return BGRA_4444_instance;
  }
  function BGR_555() {
    BGR_555_instance = this;
    ColorFormat16.call(this);
    this.$delegate_bixszq$_0 = new ColorFormatBase$Mixin(10, 5, 5, 5, 0, 5, 15, 0);
  }
  BGR_555.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getA_za3lpa$(v);
  };
  BGR_555.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getB_za3lpa$(v);
  };
  BGR_555.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getG_za3lpa$(v);
  };
  BGR_555.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_bixszq$_0.getR_za3lpa$(v);
  };
  BGR_555.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_bixszq$_0.pack_tjonv8$(r, g, b, a);
  };
  BGR_555.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BGR_555',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var BGR_555_instance = null;
  function BGR_555_getInstance() {
    if (BGR_555_instance === null) {
      new BGR_555();
    }
    return BGR_555_instance;
  }
  function BGR_565() {
    BGR_565_instance = this;
    ColorFormat16.call(this);
    this.$delegate_bixt0l$_0 = new ColorFormatBase$Mixin(11, 5, 5, 6, 0, 5, 15, 0);
  }
  BGR_565.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getA_za3lpa$(v);
  };
  BGR_565.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getB_za3lpa$(v);
  };
  BGR_565.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getG_za3lpa$(v);
  };
  BGR_565.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_bixt0l$_0.getR_za3lpa$(v);
  };
  BGR_565.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_bixt0l$_0.pack_tjonv8$(r, g, b, a);
  };
  BGR_565.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BGR_565',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var BGR_565_instance = null;
  function BGR_565_getInstance() {
    if (BGR_565_instance === null) {
      new BGR_565();
    }
    return BGR_565_instance;
  }
  function BGRA_5551() {
    BGRA_5551_instance = this;
    ColorFormat16.call(this);
    this.$delegate_htew5y$_0 = new ColorFormatBase$Mixin(10, 5, 5, 5, 0, 5, 15, 1);
  }
  BGRA_5551.prototype.getA_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getA_za3lpa$(v);
  };
  BGRA_5551.prototype.getB_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getB_za3lpa$(v);
  };
  BGRA_5551.prototype.getG_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getG_za3lpa$(v);
  };
  BGRA_5551.prototype.getR_za3lpa$ = function (v) {
    return this.$delegate_htew5y$_0.getR_za3lpa$(v);
  };
  BGRA_5551.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.$delegate_htew5y$_0.pack_tjonv8$(r, g, b, a);
  };
  BGRA_5551.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BGRA_5551',
    interfaces: [ColorFormat16, ColorFormatBase]
  };
  var BGRA_5551_instance = null;
  function BGRA_5551_getInstance() {
    if (BGRA_5551_instance === null) {
      new BGRA_5551();
    }
    return BGRA_5551_instance;
  }
  function RGBAd(r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  }
  RGBAd.prototype.set_6y0v78$ = function (r, g, b, a) {
    this.r = r;
    this.g = g;
    this.b = b;
    this.a = a;
  };
  RGBAd.prototype.add_6y0v78$ = function (r, g, b, a) {
    this.r = this.r + r;
    this.g = this.g + g;
    this.b = this.b + b;
    this.a = this.a + a;
  };
  RGBAd.prototype.set_h1ferx$ = function (c) {
    this.set_6y0v78$(c.r, c.g, c.b, c.a);
  };
  RGBAd.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RGBAd',
    interfaces: []
  };
  function RGBAd_init(c, $this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, c.r, c.g, c.b, c.a);
    return $this;
  }
  function RGBAd_init_0(c, $this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, RGBA_getInstance().getRd_za3lpa$(c), RGBA_getInstance().getGd_za3lpa$(c), RGBA_getInstance().getBd_za3lpa$(c), RGBA_getInstance().getAd_za3lpa$(c));
    return $this;
  }
  function RGBAd_init_1($this) {
    $this = $this || Object.create(RGBAd.prototype);
    RGBAd.call($this, 0.0, 0.0, 0.0, 0.0);
    return $this;
  }
  function RGBAf(_r, _g, _b, _a) {
    if (_r === void 0)
      _r = 1.0;
    if (_g === void 0)
      _g = 1.0;
    if (_b === void 0)
      _b = 1.0;
    if (_a === void 0)
      _a = 1.0;
    this._r_0 = _r;
    this._g_0 = _g;
    this._b_0 = _b;
    this._a_0 = _a;
    this.dirty_0 = true;
    this._rgba_0 = -1;
  }
  Object.defineProperty(RGBAf.prototype, 'r', {
    get: function () {
      return this._r_0;
    },
    set: function (v) {
      this._r_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'g', {
    get: function () {
      return this._g_0;
    },
    set: function (v) {
      this._g_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'b', {
    get: function () {
      return this._b_0;
    },
    set: function (v) {
      this._b_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'a', {
    get: function () {
      return this._a_0;
    },
    set: function (v) {
      this._a_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'rd', {
    get: function () {
      return this._r_0;
    },
    set: function (v) {
      this._r_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'gd', {
    get: function () {
      return this._g_0;
    },
    set: function (v) {
      this._g_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'bd', {
    get: function () {
      return this._b_0;
    },
    set: function (v) {
      this._b_0 = v;
      this.makeDirty_0();
    }
  });
  Object.defineProperty(RGBAf.prototype, 'ad', {
    get: function () {
      return this._a_0;
    },
    set: function (v) {
      this._a_0 = v;
      this.makeDirty_0();
    }
  });
  RGBAf.prototype.makeDirty_0 = function () {
    this.dirty_0 = true;
  };
  Object.defineProperty(RGBAf.prototype, 'rgba', {
    get: function () {
      if (this.dirty_0) {
        this.dirty_0 = false;
        this._rgba_0 = RGBA_getInstance().packfFast_7b5o5w$(this._r_0, this._g_0, this._b_0, this._a_0);
      }
      return this._rgba_0;
    }
  });
  RGBAf.prototype.setTo_7b5o5w$ = function (r, g, b, a) {
    this._r_0 = r;
    this._g_0 = g;
    this._b_0 = b;
    this._a_0 = a;
    this.makeDirty_0();
  };
  RGBAf.prototype.copyFrom_h1ferv$ = function (that) {
    this.setTo_7b5o5w$(that.r, that.g, that.b, that.a);
  };
  RGBAf.prototype.setToMultiply_h1ferv$ = function (that) {
    this.setToMultiply_7b5o5w$(that.r, that.g, that.b, that.a);
  };
  RGBAf.prototype.setToMultiply_7b5o5w$ = function (r, g, b, a) {
    this.setTo_7b5o5w$(this.r * r, this.g * g, this.b * b, this.a * a);
  };
  RGBAf.prototype.toRGBA = function () {
    return RGBA_getInstance().packFast_tjonv8$((this.r * 255 | 0) & 255, (this.g * 255 | 0) & 255, (this.b * 255 | 0) & 255, (this.a * 255 | 0) & 255);
  };
  RGBAf.prototype.setToIdentity = function () {
    this.setTo_7b5o5w$(1.0, 1.0, 1.0, 1.0);
  };
  RGBAf.prototype.toString = function () {
    return 'RGBAf(' + get_niceStr_0(this.r) + ', ' + get_niceStr_0(this.g) + ', ' + get_niceStr_0(this.b) + ', ' + get_niceStr_0(this.a) + ')';
  };
  RGBAf.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RGBAf',
    interfaces: []
  };
  var RGBAf_0 = defineInlineFunction('korim-js.com.soywiz.korim.color.RGBAf_1ugm5o$', wrapFunction(function () {
    var RGBAf_init = _.com.soywiz.korim.color.RGBAf;
    return function (r, g, b, a) {
      return new RGBAf_init(Kotlin.numberToDouble(r), Kotlin.numberToDouble(g), Kotlin.numberToDouble(b), Kotlin.numberToDouble(a));
    };
  }));
  function YUVA() {
    YUVA_instance = this;
    ColorFormat32.call(this);
  }
  YUVA.prototype.getY_za3lpa$ = function (v) {
    return extract8(v, 0);
  };
  YUVA.prototype.getU_za3lpa$ = function (v) {
    return extract8(v, 8);
  };
  YUVA.prototype.getV_za3lpa$ = function (v) {
    return extract8(v, 16);
  };
  YUVA.prototype.getA_za3lpa$ = function (v) {
    return extract8(v, 24);
  };
  YUVA.prototype.getR_za3lpa$ = function (v) {
    return this.getR_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA.prototype.getG_za3lpa$ = function (v) {
    return this.getG_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA.prototype.getB_za3lpa$ = function (v) {
    return this.getB_qt1dr2$(this.getY_za3lpa$(v), this.getU_za3lpa$(v), this.getV_za3lpa$(v));
  };
  YUVA.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return this.packYUVA_tjonv8$(this.getY_qt1dr2$(r, g, b), this.getU_qt1dr2$(r, g, b), this.getV_qt1dr2$(r, g, b), a);
  };
  YUVA.prototype.packYUVA_tjonv8$ = function (y, u, v, a) {
    return insert8(insert8(insert8(insert8(0, y, 0), u, 8), v, 16), a, 24);
  };
  YUVA.prototype.getY_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(0.299 * r + 0.587 * g + 0.114 * b | 0);
  };
  YUVA.prototype.getU_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(0.492 * Kotlin.imul(b, this.getY_qt1dr2$(r, g, b)) | 0);
  };
  YUVA.prototype.getV_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(0.877 * Kotlin.imul(r, this.getY_qt1dr2$(r, g, b)) | 0);
  };
  YUVA.prototype.getR_qt1dr2$ = function (y, u, v) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(y + 1.14 * v | 0);
  };
  YUVA.prototype.getG_qt1dr2$ = function (y, u, v) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(y - 0.395 * u - 0.581 * v | 0);
  };
  YUVA.prototype.getB_qt1dr2$ = function (y, u, v) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(y + 2.033 * u | 0);
  };
  YUVA.prototype.YUVtoRGB_yus68p$ = function (out, outPos, inY, inU, inV, inPos, count) {
    var tmp$;
    var opos = outPos;
    var ipos = inPos;
    for (var n = 0; n < count; n++) {
      var y = inY[ipos] & 255;
      var u = (inU[ipos] & 255) - 128 | 0;
      var v = (inV[ipos] & 255) - 128 | 0;
      var r = ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(y + (32768 + (v * 91881 | 0) >> 16) | 0);
      var g = ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(y + (32768 - (v * 46802 | 0) - (u * 22554 | 0) >> 16) | 0);
      var b = ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(y + (32768 + (u * 116130 | 0) >> 16) | 0);
      out[tmp$ = opos, opos = tmp$ + 1 | 0, tmp$] = RGBA_getInstance().packFast_tjonv8$(r, g, b, 255);
      ipos = ipos + 1 | 0;
    }
  };
  YUVA.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'YUVA',
    interfaces: [ColorFormat32]
  };
  var YUVA_instance = null;
  function YUVA_getInstance() {
    if (YUVA_instance === null) {
      new YUVA();
    }
    return YUVA_instance;
  }
  function drawText($receiver, font, str, x, y, color) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    font.drawText_r20ym9$($receiver, str, x, y, color);
  }
  function BitmapFont(atlas, size, lineHeight, glyphInfos) {
    this.atlas = atlas;
    this.size = size;
    this.lineHeight = lineHeight;
    this.glyphInfos = glyphInfos;
    var $receiver = this.glyphInfos;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.id, new BitmapFont$Glyph(slice_0(this.atlas, item.bounds), item)));
    }
    this.glyphsById = toMap(destination);
  }
  BitmapFont.prototype.measureWidth_61zpoe$ = function (text) {
    var tmp$;
    var x = 0;
    tmp$ = iterator(text);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      var glyph = this.glyphsById.get_11rb$(c | 0);
      if (glyph != null)
        x = x + glyph.advance | 0;
    }
    return x;
  };
  BitmapFont.prototype.drawText_r20ym9$ = function (bmp, str, x, y, color) {
    if (x === void 0)
      x = 0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    var tmp$;
    var py = y;
    var px = x;
    tmp$ = iterator(str);
    while (tmp$.hasNext()) {
      var c = unboxChar(tmp$.next());
      var g = this.glyphsById.get_11rb$(c | 0);
      if (g != null) {
        bmp.draw_a26vum$(g.bmp, px, py);
        px = px + g.advance | 0;
      }
      if (c === 10) {
        py = py + this.lineHeight | 0;
        px = x;
      }
    }
  };
  function BitmapFont$Glyph(bmp, info) {
    this.bmp = bmp;
    this.info = info;
    this.advance = this.info.advance;
  }
  BitmapFont$Glyph.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Glyph',
    interfaces: []
  };
  BitmapFont$Glyph.prototype.component1 = function () {
    return this.bmp;
  };
  BitmapFont$Glyph.prototype.component2 = function () {
    return this.info;
  };
  BitmapFont$Glyph.prototype.copy_dbhi79$ = function (bmp, info) {
    return new BitmapFont$Glyph(bmp === void 0 ? this.bmp : bmp, info === void 0 ? this.info : info);
  };
  BitmapFont$Glyph.prototype.toString = function () {
    return 'Glyph(bmp=' + Kotlin.toString(this.bmp) + (', info=' + Kotlin.toString(this.info)) + ')';
  };
  BitmapFont$Glyph.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bmp) | 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    return result;
  };
  BitmapFont$Glyph.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bmp, other.bmp) && Kotlin.equals(this.info, other.info)))));
  };
  function BitmapFont$GlyphInfo(id, bounds, advance) {
    this.id = id;
    this.bounds = bounds;
    this.advance = advance;
  }
  BitmapFont$GlyphInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GlyphInfo',
    interfaces: []
  };
  BitmapFont$GlyphInfo.prototype.component1 = function () {
    return this.id;
  };
  BitmapFont$GlyphInfo.prototype.component2 = function () {
    return this.bounds;
  };
  BitmapFont$GlyphInfo.prototype.component3 = function () {
    return this.advance;
  };
  BitmapFont$GlyphInfo.prototype.copy_73oo50$ = function (id, bounds, advance) {
    return new BitmapFont$GlyphInfo(id === void 0 ? this.id : id, bounds === void 0 ? this.bounds : bounds, advance === void 0 ? this.advance : advance);
  };
  BitmapFont$GlyphInfo.prototype.toString = function () {
    return 'GlyphInfo(id=' + Kotlin.toString(this.id) + (', bounds=' + Kotlin.toString(this.bounds)) + (', advance=' + Kotlin.toString(this.advance)) + ')';
  };
  BitmapFont$GlyphInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    result = result * 31 + Kotlin.hashCode(this.advance) | 0;
    return result;
  };
  BitmapFont$GlyphInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.bounds, other.bounds) && Kotlin.equals(this.advance, other.advance)))));
  };
  BitmapFont.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BitmapFont',
    interfaces: []
  };
  function BitmapFontGenerator() {
    BitmapFontGenerator_instance = this;
    this.SPACE = ' ';
    this.UPPERCASE = joinToString(new CharRange(65, 90), '');
    this.LOWERCASE = joinToString(new CharRange(97, 122), '');
    this.NUMBERS = joinToString(new CharRange(48, 57), '');
    this.PUNCTUATION = '!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}';
    this.LATIN_BASIC = '\xC7\xFC\xE9\xE2\xE4\xE0\xE5\xE7\xEA\xEB\xE8\xEF\xEE\xEC\xC4\xC5\xC9\xE6\xC6\xF4\xF6\xF2\xFB\xF9\xFF\xD6\xDC\xA2\xA3\xA5P\xC9\xE1\xED\xF3\xFA\xF1\xD1\xAA\xB0\xBF\xAC\xBD\xBC\xA1\xAB\xBB\xDF\xB5\xF8\xB1\xF7\xB0\xB7.\xB2';
    this.LATIN_ALL = this.SPACE + this.UPPERCASE + this.LOWERCASE + this.NUMBERS + this.PUNCTUATION + this.LATIN_BASIC;
    this.bni = NativeImage_0(1, 1);
  }
  BitmapFontGenerator.prototype.generate_h6sd2a$ = function (fontName, fontSize, chars) {
    var tmp$ = this.generate_i84517$;
    var $receiver = get_indices(chars);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(chars.charCodeAt(item) | 0);
    }
    return tmp$.call(this, fontName, fontSize, toIntArray(destination));
  };
  BitmapFontGenerator.prototype.generate_i84517$ = function (fontName, fontSize, chars) {
    var tmp$;
    var bnictx = this.bni.getContext2d_6taknv$();
    bnictx.font = new Context2d$Font(fontName, fontSize);
    var bitmapHeight = bnictx.getTextBounds_jznmvy$('a').bounds.height | 0;
    var destination = ArrayList_init(chars.length);
    var tmp$_0;
    for (tmp$_0 = 0; tmp$_0 !== chars.length; ++tmp$_0) {
      var item = chars[tmp$_0];
      destination.add_11rb$(bnictx.getTextBounds_jznmvy$(String.fromCharCode(Kotlin.toChar(item))).bounds.width | 0);
    }
    var widths = destination;
    var destination_0 = ArrayList_init(collectionSizeOrDefault(widths, 10));
    var tmp$_1;
    tmp$_1 = widths.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(item_0 + 2 | 0);
    }
    var widthsSum = sum(destination_0);
    var ni = NativeImage_0(widthsSum, bitmapHeight);
    var g = ni.getContext2d_6taknv$();
    g.fillStyle = g.createColor_za3lpa$(Colors_getInstance().WHITE);
    g.font = new Context2d$Font(fontName, fontSize);
    g.horizontalAlign = Context2d$HorizontalAlign$LEFT_getInstance();
    g.verticalAlign = Context2d$VerticalAlign$TOP_getInstance();
    var glyphs = ArrayList_init();
    var x = 0;
    var itemp = new Int32Array(1);
    tmp$ = withIndex(chars).iterator();
    while (tmp$.hasNext()) {
      var tmp$_2 = tmp$.next();
      var index = tmp$_2.component1()
      , char = tmp$_2.component2();
      var width = widths.get_za3lpa$(index);
      itemp[0] = char;
      g.fillText_ai6r6m$(String_fromIntArray(itemp, 0, 1), x, 0.0);
      var element = new BitmapFont$GlyphInfo(char, RectangleInt_init(x, 0, width, ni.height), width);
      glyphs.add_11rb$(element);
      x = x + (width + 2) | 0;
    }
    println('BitmapFontGenerator.generate(' + fontName + ', ' + fontSize + ', ' + chars + ', premult=' + ni.premult + ')');
    return new BitmapFont(ni.toBMP32(), fontSize, fontSize, glyphs);
  };
  BitmapFontGenerator.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BitmapFontGenerator',
    interfaces: []
  };
  var BitmapFontGenerator_instance = null;
  function BitmapFontGenerator_getInstance() {
    if (BitmapFontGenerator_instance === null) {
      new BitmapFontGenerator();
    }
    return BitmapFontGenerator_instance;
  }
  function BMP() {
    BMP_instance = this;
    ImageFormat.call(this, ['bmp']);
  }
  BMP.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!Kotlin.equals(readStringz(s, 2), 'BM'))
      return null;
    var size = readS32_le_0(s);
    var reserved1 = readS16_le(s);
    var reserved2 = readS16_le(s);
    var offBits = readS32_le_0(s);
    var bsize = readS32_le_0(s);
    var width = readS32_le_0(s);
    var height = readS32_le_0(s);
    var planes = readS16_le(s);
    var bitcount = readS16_le(s);
    var $receiver = new ImageInfo();
    $receiver.width = width;
    $receiver.height = height;
    $receiver.bitsPerPixel = bitcount;
    return $receiver;
  };
  BMP.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.decodeHeader_1ooaqm$(s, props);
    if (tmp$ == null) {
      throw new IllegalArgumentException('Not a BMP file');
    }
    var h = tmp$;
    var compression = readS32_le_0(s);
    var sizeImage = readS32_le_0(s);
    var pixelsPerMeterX = readS32_le_0(s);
    var pixelsPerMeterY = readS32_le_0(s);
    var clrUsed = readS32_le_0(s);
    var clrImportant = readS32_le_0(s);
    if (h.bitsPerPixel === 8) {
      var out = new Bitmap8(h.width, h.height);
      for (var n = 0; n < 256; n++)
        out.palette[n] = readS32_le_0(s) | (new Kotlin.Long(-16777216, 0)).toInt();
      tmp$_0 = h.height;
      for (var n_0 = 0; n_0 < tmp$_0; n_0++)
        out.setRow_3fbn1q$(h.height - n_0 - 1 | 0, readBytes(s, h.width));
      return new ImageData(listOf(new ImageFrame(out)));
    }
     else {
      var out_0 = new Bitmap32(h.width, h.height);
      tmp$_1 = h.height;
      for (var n_1 = 0; n_1 < tmp$_1; n_1++)
        out_0.setRow_aio0fn$(h.height - n_1 - 1 | 0, readIntArray_le(s, h.width));
      return new ImageData(listOf(new ImageFrame(out_0)));
    }
  };
  BMP.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BMP',
    interfaces: [ImageFormat]
  };
  var BMP_instance = null;
  function BMP_getInstance() {
    if (BMP_instance === null) {
      new BMP();
    }
    return BMP_instance;
  }
  function DDS() {
    DDS_instance = this;
    ImageFormat.call(this, ['dds']);
    this.fourcc_qovqgb$_8rhdqq$_0 = new Extra$Property(void 0, DDS$fourcc$lambda);
  }
  var Any = Object;
  var lmapOf = $module$korio_js.com.soywiz.korio.ds.lmapOf_qfcya0$;
  DDS.prototype.get_fourcc_qovqgb$ = function ($receiver) {
    var $this = this.fourcc_qovqgb$_8rhdqq$_0;
    var property = new Kotlin.PropertyMetadata('fourcc');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = $this.name) != null ? tmp$_3 : property.callableName;
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
  };
  DDS.prototype.set_fourcc_nqhl9v$ = function ($receiver, fourcc) {
    var $this = this.fourcc_qovqgb$_8rhdqq$_0;
    var property = new Kotlin.PropertyMetadata('fourcc');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = fourcc) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  };
  DDS.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!Kotlin.equals(readString(s, 4), 'DDS '))
      return null;
    var size = readS32_le_0(s);
    var sh = readStream(s, size - 4 | 0);
    var flags = readS32_le_0(sh);
    var height = readS32_le_0(sh);
    var width = readS32_le_0(sh);
    var pitchOrLinearSize = readS32_le_0(sh);
    var depth = readS32_le_0(sh);
    var mipmapCount = readS32_le_0(sh);
    var reserved = readIntArray_le(sh, 11);
    var pf_size = readS32_le_0(sh);
    var pf_s = readStream(sh, pf_size - 4 | 0);
    var pf_flags = readS32_le_0(pf_s);
    var pf_fourcc = readString(pf_s, 4);
    var pf_bitcount = readS32_le_0(pf_s);
    var pf_rbitmask = readS32_le_0(pf_s);
    var pf_gbitmask = readS32_le_0(pf_s);
    var pf_bbitmask = readS32_le_0(pf_s);
    var pf_abitmask = readS32_le_0(pf_s);
    var caps = readS32_le_0(sh);
    var caps2 = readS32_le_0(sh);
    var caps3 = readS32_le_0(sh);
    var caps4 = readS32_le_0(sh);
    var reserved2 = readS32_le_0(sh);
    var $receiver = new ImageInfo();
    $receiver.width = width;
    $receiver.height = height;
    $receiver.bitsPerPixel = 32;
    this.set_fourcc_nqhl9v$($receiver, pf_fourcc);
    return $receiver;
  };
  DDS.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    var h = (tmp$ = this.decodeHeader_1ooaqm$(s, props)) != null ? tmp$ : invalidOp('Not a DDS file');
    var fourcc = this.get_fourcc_qovqgb$(h).toUpperCase();
    if (Kotlin.equals(fourcc, 'DXT1'))
      tmp$_0 = DXT1_getInstance();
    else if (Kotlin.equals(fourcc, 'DXT3'))
      tmp$_0 = DXT3_getInstance();
    else if (Kotlin.equals(fourcc, 'DXT4'))
      tmp$_0 = DXT4_getInstance();
    else if (Kotlin.equals(fourcc, 'DXT5'))
      tmp$_0 = DXT5_getInstance();
    else
      tmp$_0 = invalidOp("Unsupported DDS FourCC '" + fourcc + "'");
    var subimageFormat = tmp$_0;
    var bytes = readAll(s);
    return subimageFormat.readImage_1ooaqm$(openSync(bytes), new ImageDecodingProps('image.' + fourcc, h.width, h.height));
  };
  function DDS$fourcc$lambda() {
    return '    ';
  }
  DDS.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'DDS',
    interfaces: [ImageFormat]
  };
  var DDS_instance = null;
  function DDS_getInstance() {
    if (DDS_instance === null) {
      new DDS();
    }
    return DDS_instance;
  }
  function DXT1() {
    DXT1_instance = this;
    DXT1Base.call(this, 'dxt1', true);
  }
  DXT1.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'DXT1',
    interfaces: [DXT1Base]
  };
  var DXT1_instance = null;
  function DXT1_getInstance() {
    if (DXT1_instance === null) {
      new DXT1();
    }
    return DXT1_instance;
  }
  function DXT2() {
    DXT2_instance = this;
    DXT2_3.call(this, 'dxt2', true);
  }
  DXT2.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'DXT2',
    interfaces: [DXT2_3]
  };
  var DXT2_instance = null;
  function DXT2_getInstance() {
    if (DXT2_instance === null) {
      new DXT2();
    }
    return DXT2_instance;
  }
  function DXT3() {
    DXT3_instance = this;
    DXT2_3.call(this, 'dxt3', false);
  }
  DXT3.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'DXT3',
    interfaces: [DXT2_3]
  };
  var DXT3_instance = null;
  function DXT3_getInstance() {
    if (DXT3_instance === null) {
      new DXT3();
    }
    return DXT3_instance;
  }
  function DXT4() {
    DXT4_instance = this;
    DXT4_5.call(this, 'dxt4', true);
  }
  DXT4.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'DXT4',
    interfaces: [DXT4_5]
  };
  var DXT4_instance = null;
  function DXT4_getInstance() {
    if (DXT4_instance === null) {
      new DXT4();
    }
    return DXT4_instance;
  }
  function DXT5() {
    DXT5_instance = this;
    DXT4_5.call(this, 'dxt5', false);
  }
  DXT5.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'DXT5',
    interfaces: [DXT4_5]
  };
  var DXT5_instance = null;
  function DXT5_getInstance() {
    if (DXT5_instance === null) {
      new DXT5();
    }
    return DXT5_instance;
  }
  function DXT1Base(format, premult) {
    DXT.call(this, format, true, 8);
  }
  DXT1Base.prototype.decodeRow_kz0417$ = function (data, dataOffset, bmp, bmpOffset, bmpStride) {
    DXT$Companion_getInstance().decodeDxt1ColorCond_syel7v$(data, dataOffset + 0 | 0, this.cc);
    var cdata = readS32_le(data, dataOffset + 4 | 0);
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        bmp[pos + x | 0] = RGBA_getInstance().packRGB_A_vux9f0$(this.cc[c], 255);
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT1Base.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DXT1Base',
    interfaces: [DXT]
  };
  function DXT2_3(format, premult) {
    DXT.call(this, format, premult, 16);
  }
  DXT2_3.prototype.decodeRow_kz0417$ = function (data, dataOffset, bmp, bmpOffset, bmpStride) {
    DXT$Companion_getInstance().decodeDxt5Alpha_syel7v$(data, dataOffset + 0 | 0, this.aa);
    DXT$Companion_getInstance().decodeDxt1Color_syel7v$(data, dataOffset + 8 | 0, this.cc);
    var cdata = readS32_le(data, dataOffset + 8 + 4 | 0);
    var adata = readU32_le(data, dataOffset + 2 | 0).or(Kotlin.Long.fromInt(readU16_le(data, dataOffset + 6 | 0)).shiftLeft(32));
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        var a = adata.shiftRightUnsigned(n * 3 | 0).and(Kotlin.Long.fromInt(7)).toInt();
        bmp[pos + x | 0] = RGBA_getInstance().packRGB_A_vux9f0$(this.cc[c], this.aa[a]);
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT2_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DXT2_3',
    interfaces: [DXT]
  };
  function DXT4_5(format, premult) {
    DXT.call(this, format, premult, 16);
  }
  DXT4_5.prototype.decodeRow_kz0417$ = function (data, dataOffset, bmp, bmpOffset, bmpStride) {
    DXT$Companion_getInstance().decodeDxt5Alpha_syel7v$(data, dataOffset + 0 | 0, this.aa);
    DXT$Companion_getInstance().decodeDxt1ColorCond_syel7v$(data, dataOffset + 8 | 0, this.cc);
    var cdata = readS32_le(data, dataOffset + 8 + 4 | 0);
    var adata = readU32_le(data, dataOffset + 2 | 0).or(Kotlin.Long.fromInt(readU16_le(data, dataOffset + 6 | 0)).shiftLeft(32));
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        var a = adata.shiftRightUnsigned(n * 3 | 0).and(Kotlin.Long.fromInt(7)).toInt();
        bmp[pos + x | 0] = RGBA_getInstance().packRGB_A_vux9f0$(this.cc[c], this.aa[a]);
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT4_5.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DXT4_5',
    interfaces: [DXT]
  };
  function DXT(format, premult, blockSize) {
    DXT$Companion_getInstance();
    ImageFormat.call(this, [format]);
    this.format = format;
    this.premult = premult;
    this.blockSize = blockSize;
    this.aa = new Int32Array(8);
    this.cc = new Int32Array(4);
  }
  DXT.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!startsWith((new PathInfo(props.filename)).extensionLC, this.format))
      return null;
    var $receiver = new ImageInfo();
    var tmp$, tmp$_0;
    $receiver.width = (tmp$ = props.width) != null ? tmp$ : 1;
    $receiver.height = (tmp$_0 = props.height) != null ? tmp$_0 : 1;
    return $receiver;
  };
  DXT.prototype.decodeBitmap_mj6st8$ = function (bytes, width, height) {
    var out = new Bitmap32(width, height, void 0, this.premult);
    var blockWidth = out.width / 4 | 0;
    var blockHeight = out.height / 4 | 0;
    var offset = 0;
    for (var y = 0; y < blockHeight; y++) {
      for (var x = 0; x < blockWidth; x++) {
        this.decodeRow_kz0417$(bytes, offset, out.data, out.index_vux9f0$(x * 4 | 0, y * 4 | 0), out.width);
        offset = offset + this.blockSize | 0;
      }
    }
    return out;
  };
  DXT.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    var bytes = readAll(s);
    var totalPixels = ((bytes.length / this.blockSize | 0) * 4 | 0) * 4 | 0;
    var potentialSide = Math_0.sqrt(totalPixels) | 0;
    var width = (tmp$ = props.width) != null ? tmp$ : potentialSide;
    var height = (tmp$_0 = props.height) != null ? tmp$_0 : potentialSide;
    return new ImageData(listOf(new ImageFrame(this.decodeBitmap_mj6st8$(bytes, width, height))));
  };
  function DXT$Companion() {
    DXT$Companion_instance = this;
    this.FACT_2_3 = 2.0 / 3.0 * 256 | 0;
    this.FACT_1_3 = 1.0 / 3.0 * 256 | 0;
    this.FACT_1_2 = 1.0 / 2.0 * 256 | 0;
  }
  DXT$Companion.prototype.decodeRGB656_za3lpa$ = function (v) {
    return BGR_565_getInstance().toRGBA_za3lpa$(v);
  };
  DXT$Companion.prototype.decodeDxt1ColorCond_syel7v$ = function (data, dataOffset, cc) {
    var c0 = readU16_le(data, dataOffset + 0 | 0);
    var c1 = readU16_le(data, dataOffset + 2 | 0);
    cc[0] = this.decodeRGB656_za3lpa$(c0);
    cc[1] = this.decodeRGB656_za3lpa$(c1);
    if (c0 > c1) {
      cc[2] = RGBA_getInstance().blendRGB_qt1dr2$(cc[0], cc[1], this.FACT_2_3);
      cc[3] = RGBA_getInstance().blendRGB_qt1dr2$(cc[0], cc[1], this.FACT_1_3);
    }
     else {
      cc[2] = RGBA_getInstance().blendRGB_qt1dr2$(cc[0], cc[1], this.FACT_1_2);
      cc[3] = Colors_getInstance().TRANSPARENT_BLACK;
    }
  };
  DXT$Companion.prototype.decodeDxt1Color_syel7v$ = function (data, dataOffset, cc) {
    cc[0] = this.decodeRGB656_za3lpa$(readU16_le(data, dataOffset + 0 | 0));
    cc[1] = this.decodeRGB656_za3lpa$(readU16_le(data, dataOffset + 2 | 0));
    cc[2] = RGBA_getInstance().blendRGB_qt1dr2$(cc[0], cc[1], this.FACT_2_3);
    cc[3] = RGBA_getInstance().blendRGB_qt1dr2$(cc[0], cc[1], this.FACT_1_3);
  };
  DXT$Companion.prototype.decodeDxt5Alpha_syel7v$ = function (data, dataOffset, aa) {
    var a0 = readU8(data, dataOffset + 0 | 0);
    var a1 = readU8(data, dataOffset + 1 | 0);
    aa[0] = a0;
    aa[1] = a1;
    if (a0 > a1) {
      aa[2] = ((6 * a0 | 0) + (1 * a1 | 0) | 0) / 7 | 0;
      aa[3] = ((5 * a0 | 0) + (2 * a1 | 0) | 0) / 7 | 0;
      aa[4] = ((4 * a0 | 0) + (3 * a1 | 0) | 0) / 7 | 0;
      aa[5] = ((3 * a0 | 0) + (4 * a1 | 0) | 0) / 7 | 0;
      aa[6] = ((2 * a0 | 0) + (5 * a1 | 0) | 0) / 7 | 0;
      aa[7] = ((1 * a0 | 0) + (6 * a1 | 0) | 0) / 7 | 0;
    }
     else {
      aa[2] = ((4 * a0 | 0) + (1 * a1 | 0) | 0) / 5 | 0;
      aa[3] = ((3 * a0 | 0) + (2 * a1 | 0) | 0) / 5 | 0;
      aa[4] = ((2 * a0 | 0) + (3 * a1 | 0) | 0) / 5 | 0;
      aa[5] = ((1 * a0 | 0) + (4 * a1 | 0) | 0) / 5 | 0;
      aa[6] = 0;
      aa[7] = 255;
    }
  };
  DXT$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DXT$Companion_instance = null;
  function DXT$Companion_getInstance() {
    if (DXT$Companion_instance === null) {
      new DXT$Companion();
    }
    return DXT$Companion_instance;
  }
  DXT.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DXT',
    interfaces: [ImageFormat]
  };
  function ICO() {
    ICO_instance = this;
    ImageFormat.call(this, ['ico']);
  }
  ICO.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (readU16_le_0(s) !== 0)
      return null;
    if (readU16_le_0(s) !== 1)
      return null;
    var count = readU16_le_0(s);
    if (count >= 1000)
      return null;
    return new ImageInfo();
  };
  function ICO$readImage$DirEntry(width, height, colorCount, reserved, planes, bitCount, size, offset) {
    this.width = width;
    this.height = height;
    this.colorCount = colorCount;
    this.reserved = reserved;
    this.planes = planes;
    this.bitCount = bitCount;
    this.size = size;
    this.offset = offset;
  }
  ICO$readImage$DirEntry.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DirEntry',
    interfaces: []
  };
  ICO$readImage$DirEntry.prototype.component1 = function () {
    return this.width;
  };
  ICO$readImage$DirEntry.prototype.component2 = function () {
    return this.height;
  };
  ICO$readImage$DirEntry.prototype.component3 = function () {
    return this.colorCount;
  };
  ICO$readImage$DirEntry.prototype.component4 = function () {
    return this.reserved;
  };
  ICO$readImage$DirEntry.prototype.component5 = function () {
    return this.planes;
  };
  ICO$readImage$DirEntry.prototype.component6 = function () {
    return this.bitCount;
  };
  ICO$readImage$DirEntry.prototype.component7 = function () {
    return this.size;
  };
  ICO$readImage$DirEntry.prototype.component8 = function () {
    return this.offset;
  };
  ICO$readImage$DirEntry.prototype.copy_wrdw30$ = function (width, height, colorCount, reserved, planes, bitCount, size, offset) {
    return new ICO$readImage$DirEntry(width === void 0 ? this.width : width, height === void 0 ? this.height : height, colorCount === void 0 ? this.colorCount : colorCount, reserved === void 0 ? this.reserved : reserved, planes === void 0 ? this.planes : planes, bitCount === void 0 ? this.bitCount : bitCount, size === void 0 ? this.size : size, offset === void 0 ? this.offset : offset);
  };
  ICO$readImage$DirEntry.prototype.toString = function () {
    return 'DirEntry(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + (', colorCount=' + Kotlin.toString(this.colorCount)) + (', reserved=' + Kotlin.toString(this.reserved)) + (', planes=' + Kotlin.toString(this.planes)) + (', bitCount=' + Kotlin.toString(this.bitCount)) + (', size=' + Kotlin.toString(this.size)) + (', offset=' + Kotlin.toString(this.offset)) + ')';
  };
  ICO$readImage$DirEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.reserved) | 0;
    result = result * 31 + Kotlin.hashCode(this.planes) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitCount) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  ICO$readImage$DirEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.colorCount, other.colorCount) && Kotlin.equals(this.reserved, other.reserved) && Kotlin.equals(this.planes, other.planes) && Kotlin.equals(this.bitCount, other.bitCount) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.offset, other.offset)))));
  };
  function ICO$readImage$readDirEntry(closure$s) {
    return function () {
      return new ICO$readImage$DirEntry(readU8_0(closure$s), readU8_0(closure$s), readU8_0(closure$s), readU8_0(closure$s), readU16_le_0(closure$s), readU16_le_0(closure$s), readS32_le_0(closure$s), readS32_le_0(closure$s));
    };
  }
  function ICO$readImage$readBitmap(closure$props) {
    return function (e, s) {
      var tmp$;
      var tryPNGHead = readU32_be(slice(s));
      if (Kotlin.equals(tryPNGHead, new Kotlin.Long(-1991225785, 0)))
        return PNG_getInstance().decode_1ooaqm$(slice(s), closure$props.copy_qp3p0u$(closure$props.filename + '.png'));
      var headerSize = readS32_le_0(s);
      var width = readS32_le_0(s);
      var height = readS32_le_0(s);
      var planes = readS16_le(s);
      var bitCount = readS16_le(s);
      var compression = readS32_le_0(s);
      var imageSize = readS32_le_0(s);
      var pixelsXPerMeter = readS32_le_0(s);
      var pixelsYPerMeter = readS32_le_0(s);
      var clrUsed = readS32_le_0(s);
      var clrImportant = readS32_le_0(s);
      var palette = new Int32Array(0);
      if (compression !== 0)
        throw new UnsupportedOperationException('Not supported compressed .ico');
      if (bitCount <= 8) {
        var colors = clrUsed === 0 ? 1 << bitCount : clrUsed;
        var $receiver = until(0, colors);
        var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var tmp$_1 = destination.add_11rb$;
          var b = readU8_0(s);
          var g = readU8_0(s);
          var r = readU8_0(s);
          var reserved = readU8_0(s);
          tmp$_1.call(destination, RGBA_getInstance().invoke_tjonv8$(r, g, b, 255));
        }
        palette = toIntArray(destination);
      }
      var stride = Kotlin.imul(e.width, bitCount) / 8 | 0;
      var data = readBytes(s, Kotlin.imul(stride, e.height));
      if (bitCount === 4)
        tmp$ = new Bitmap4(e.width, e.height, data, palette);
      else if (bitCount === 8)
        tmp$ = new Bitmap8(e.width, e.height, data, palette);
      else if (bitCount === 32)
        tmp$ = (new Bitmap32(e.width, e.height)).writeDecoded_77vltg$(BGRA_getInstance(), data);
      else
        throw new UnsupportedOperationException('Unsupported bitCount: ' + bitCount);
      return tmp$;
    };
  }
  ICO.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    var readDirEntry = ICO$readImage$readDirEntry(s);
    var readBitmap = ICO$readImage$readBitmap(props);
    var reserved = readU16_le_0(s);
    var type = readU16_le_0(s);
    var count = readU16_le_0(s);
    var $receiver = until(0, count);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(readDirEntry());
    }
    var entries = destination;
    var bitmaps = ArrayList_init();
    tmp$ = entries.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var bmp = readBitmap(e, sliceWithSize(s, Kotlin.Long.fromInt(e.offset), Kotlin.Long.fromInt(e.size)));
      bmp.flipY();
      bitmaps.add_11rb$(bmp);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(bitmaps, 10));
    var tmp$_1;
    tmp$_1 = bitmaps.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(new ImageFrame(item_0, void 0, void 0, void 0, false));
    }
    return new ImageData(destination_0);
  };
  ICO.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ICO',
    interfaces: [ImageFormat]
  };
  var ICO_instance = null;
  function ICO_getInstance() {
    if (ICO_instance === null) {
      new ICO();
    }
    return ICO_instance;
  }
  function ImageData(frames) {
    this.frames = frames;
    this.$delegate_eltpmo$_0 = new Extra$Mixin();
  }
  Object.defineProperty(ImageData.prototype, 'area', {
    get: function () {
      return get_area(this.frames);
    }
  });
  function ImageData$get_ImageData$mainBitmap$lambda(it) {
    if (it.main) {
      return IntCompanionObject.MAX_VALUE;
    }
     else {
      return Kotlin.imul(Kotlin.imul(it.bitmap.width, it.bitmap.height), Kotlin.imul(it.bitmap.bpp, it.bitmap.bpp));
    }
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var compareByDescending$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(b), selector(a));
      };
    };
  });
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kotlin.Kind.CLASS, interfaces: [Comparator]};
  Object.defineProperty(ImageData.prototype, 'mainBitmap', {
    get: function () {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = firstOrNull(sortedWith(this.frames, new Comparator$ObjectLiteral(compareByDescending$lambda(ImageData$get_ImageData$mainBitmap$lambda))))) != null ? tmp$.bitmap : null;
      if (tmp$_0 == null) {
        throw new IllegalArgumentException('No bitmap found');
      }
      return tmp$_0;
    }
  });
  ImageData.prototype.toString = function () {
    return 'ImageData(' + this.frames + ')';
  };
  Object.defineProperty(ImageData.prototype, 'extra', {
    get: function () {
      return this.$delegate_eltpmo$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_eltpmo$_0.extra = tmp$;
    }
  });
  ImageData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ImageData',
    interfaces: [Extra]
  };
  function ImageDecodingProps(filename, width, height, extra) {
    if (filename === void 0)
      filename = 'unknown';
    if (width === void 0)
      width = null;
    if (height === void 0)
      height = null;
    if (extra === void 0)
      extra = null;
    this.filename = filename;
    this.width = width;
    this.height = height;
    this.extra_5zgpe1$_0 = extra;
  }
  Object.defineProperty(ImageDecodingProps.prototype, 'extra', {
    get: function () {
      return this.extra_5zgpe1$_0;
    },
    set: function (extra) {
      this.extra_5zgpe1$_0 = extra;
    }
  });
  ImageDecodingProps.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ImageDecodingProps',
    interfaces: [Extra]
  };
  ImageDecodingProps.prototype.component1 = function () {
    return this.filename;
  };
  ImageDecodingProps.prototype.component2 = function () {
    return this.width;
  };
  ImageDecodingProps.prototype.component3 = function () {
    return this.height;
  };
  ImageDecodingProps.prototype.component4 = function () {
    return this.extra;
  };
  ImageDecodingProps.prototype.copy_qp3p0u$ = function (filename, width, height, extra) {
    return new ImageDecodingProps(filename === void 0 ? this.filename : filename, width === void 0 ? this.width : width, height === void 0 ? this.height : height, extra === void 0 ? this.extra : extra);
  };
  ImageDecodingProps.prototype.toString = function () {
    return 'ImageDecodingProps(filename=' + Kotlin.toString(this.filename) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  ImageDecodingProps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  ImageDecodingProps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.extra, other.extra)))));
  };
  function ImageEncodingProps(filename, quality, extra) {
    if (filename === void 0)
      filename = '';
    if (quality === void 0)
      quality = 0.81;
    if (extra === void 0)
      extra = null;
    this.filename = filename;
    this.quality = quality;
    this.extra_flamk1$_0 = extra;
  }
  Object.defineProperty(ImageEncodingProps.prototype, 'extra', {
    get: function () {
      return this.extra_flamk1$_0;
    },
    set: function (extra) {
      this.extra_flamk1$_0 = extra;
    }
  });
  ImageEncodingProps.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ImageEncodingProps',
    interfaces: [Extra]
  };
  ImageEncodingProps.prototype.component1 = function () {
    return this.filename;
  };
  ImageEncodingProps.prototype.component2 = function () {
    return this.quality;
  };
  ImageEncodingProps.prototype.component3 = function () {
    return this.extra;
  };
  ImageEncodingProps.prototype.copy_x69rha$ = function (filename, quality, extra) {
    return new ImageEncodingProps(filename === void 0 ? this.filename : filename, quality === void 0 ? this.quality : quality, extra === void 0 ? this.extra : extra);
  };
  ImageEncodingProps.prototype.toString = function () {
    return 'ImageEncodingProps(filename=' + Kotlin.toString(this.filename) + (', quality=' + Kotlin.toString(this.quality)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  ImageEncodingProps.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.filename) | 0;
    result = result * 31 + Kotlin.hashCode(this.quality) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  ImageEncodingProps.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.filename, other.filename) && Kotlin.equals(this.quality, other.quality) && Kotlin.equals(this.extra, other.extra)))));
  };
  function ImageFormat(exts) {
    var destination = ArrayList_init(exts.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== exts.length; ++tmp$) {
      var item = exts[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var trim = Kotlin.kotlin.text.trim_gw00vp$;
      var $receiver = item.toLowerCase();
      var tmp$_1;
      tmp$_0.call(destination, trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : Kotlin.throwCCE()).toString());
    }
    this.extensions = toSet(destination);
  }
  ImageFormat.prototype.readImage_1ooaqm$$default = function (s, props) {
    throw new NotImplementedError_init();
  };
  ImageFormat.prototype.readImage_1ooaqm$ = function (s, props, callback$default) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return callback$default ? callback$default(s, props) : this.readImage_1ooaqm$$default(s, props);
  };
  ImageFormat.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    throw new UnsupportedOperationException();
  };
  ImageFormat.prototype.writeImage_2psbf2$ = function (image, s, props, callback$default) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    callback$default ? callback$default(image, s, props) : this.writeImage_2psbf2$$default(image, s, props);
  };
  ImageFormat.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var show = true;
    var ignoreErrors$result;
    ignoreErrors$break: do {
      if (show === void 0)
        show = false;
      try {
        var bmp = this.read_1ooaqm$(s, props);
        var $receiver = new ImageInfo();
        $receiver.width = bmp.width;
        $receiver.height = bmp.height;
        $receiver.bitsPerPixel = bmp.bpp;
        ignoreErrors$result = $receiver;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          if (show)
            printStackTrace(e);
          ignoreErrors$result = null;
          break ignoreErrors$break;
        }
         else
          throw e;
      }
    }
     while (false);
    return ignoreErrors$result;
  };
  ImageFormat.prototype.decodeHeader_1ooaqm$ = function (s, props, callback$default) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return callback$default ? callback$default(s, props) : this.decodeHeader_1ooaqm$$default(s, props);
  };
  function ImageFormat$readImageInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImageFormat$readImageInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ImageFormat$readImageInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$s = closure$s_0;
    this.local$closure$filename = closure$filename_0;
    this.local$this$ImageFormat = this$ImageFormat_0;
  }
  Coroutine$ImageFormat$readImageInWorker$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImageFormat$readImageInWorker$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImageFormat$readImageInWorker$lambda.prototype.constructor = Coroutine$ImageFormat$readImageInWorker$lambda;
  Coroutine$ImageFormat$readImageInWorker$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ImageFormat.readImage_1ooaqm$(this.local$closure$s, (new ImageDecodingProps()).copy_qp3p0u$(this.local$closure$filename));
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
  ImageFormat.prototype.readImageInWorker_zdd1ed$ = function (s, filename, continuation) {
    if (filename === void 0)
      filename = 'unknown';
    return executeInWorker(ImageFormat$readImageInWorker$lambda(s, filename, this), continuation);
  };
  ImageFormat.prototype.read_zdd1ed$ = function (s, filename) {
    if (filename === void 0)
      filename = 'unknown';
    return this.readImage_1ooaqm$(s, (new ImageDecodingProps()).copy_qp3p0u$(filename)).mainBitmap;
  };
  ImageFormat.prototype.read_phxig4$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$read_phxig4$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$read_phxig4$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$read_phxig4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_phxig4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_phxig4$.prototype.constructor = Coroutine$read_phxig4$;
  Coroutine$read_phxig4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.read_zdd1ed$(this.result_0, this.local$file.basename);
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
  ImageFormat.prototype.read_nwlife$ = function (s, filename) {
    if (filename === void 0)
      filename = 'unknown';
    return this.read_zdd1ed$(openSync(s), filename);
  };
  ImageFormat.prototype.read_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.readImage_1ooaqm$(s, props).mainBitmap;
  };
  ImageFormat.prototype.read_pdgdrr$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(openSync(s), props);
  };
  ImageFormat.prototype.check_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    var tmp$;
    var show = true;
    var ignoreErrors$result;
    ignoreErrors$break: do {
      if (show === void 0)
        show = false;
      try {
        ignoreErrors$result = this.decodeHeader_1ooaqm$(s, props) != null;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          if (show)
            printStackTrace(e);
          ignoreErrors$result = null;
          break ignoreErrors$break;
        }
         else
          throw e;
      }
    }
     while (false);
    return (tmp$ = ignoreErrors$result) != null ? tmp$ : false;
  };
  ImageFormat.prototype.decode_1ooaqm$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(s, props);
  };
  ImageFormat.prototype.decode_pdgdrr$ = function (s, props) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return this.read_1ooaqm$(openSync(s), props);
  };
  ImageFormat.prototype.decode_phxig4$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_phxig4$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_phxig4$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$decode_phxig4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_phxig4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_phxig4$.prototype.constructor = Coroutine$decode_phxig4$;
  Coroutine$decode_phxig4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.read_zdd1ed$(this.result_0, this.local$file.basename);
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
  function ImageFormat$decodeInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImageFormat$decodeInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ImageFormat$decodeInWorker$lambda(closure$s_0, closure$filename_0, this$ImageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$s = closure$s_0;
    this.local$closure$filename = closure$filename_0;
    this.local$this$ImageFormat = this$ImageFormat_0;
  }
  Coroutine$ImageFormat$decodeInWorker$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImageFormat$decodeInWorker$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImageFormat$decodeInWorker$lambda.prototype.constructor = Coroutine$ImageFormat$decodeInWorker$lambda;
  Coroutine$ImageFormat$decodeInWorker$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ImageFormat.read_zdd1ed$(openSync(this.local$closure$s), this.local$closure$filename);
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
  ImageFormat.prototype.decodeInWorker_nwlife$ = function (s, filename, continuation) {
    if (filename === void 0)
      filename = 'unknown';
    return executeInWorker(ImageFormat$decodeInWorker$lambda(s, filename, this), continuation);
  };
  var ByteArrayBuffer_init = $module$korio_js.com.soywiz.korio.util.ByteArrayBuffer_init_za3lpa$;
  var MemorySyncStream = $module$korio_js.com.soywiz.korio.stream.MemorySyncStream_r6iki3$;
  ImageFormat.prototype.encode_dqmhj5$ = function (frames, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    var initialCapacity = get_area(frames) * 4 | 0;
    if (initialCapacity === void 0)
      initialCapacity = 4096;
    var buffer = ByteArrayBuffer_init(initialCapacity);
    var s = MemorySyncStream(buffer);
    this.writeImage_2psbf2$(new ImageData(frames), s, props);
    return buffer.toByteArray();
  };
  ImageFormat.prototype.encode_ruzdkj$ = function (image, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    var initialCapacity = image.area * 4 | 0;
    if (initialCapacity === void 0)
      initialCapacity = 4096;
    var buffer = ByteArrayBuffer_init(initialCapacity);
    var s = MemorySyncStream(buffer);
    this.writeImage_2psbf2$(image, s, props);
    return buffer.toByteArray();
  };
  ImageFormat.prototype.encode_hnx2ev$ = function (bitmap, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    return this.encode_dqmhj5$(listOf(new ImageFrame(bitmap)), props);
  };
  ImageFormat.prototype.read_ldwfpl$ = function (file_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$read_ldwfpl$(this, file_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$read_ldwfpl$($this, file_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
    this.local$props = props_0;
  }
  Coroutine$read_ldwfpl$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_ldwfpl$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_ldwfpl$.prototype.constructor = Coroutine$read_ldwfpl$;
  Coroutine$read_ldwfpl$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$file.readAll(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.readImageInWorker_1ooaqm$(openSync(this.result_0), this.local$props.copy_qp3p0u$(this.local$file.basename), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
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
  function ImageFormat$readImageInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImageFormat$readImageInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ImageFormat$readImageInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$s = closure$s_0;
    this.local$closure$props = closure$props_0;
    this.local$this$ImageFormat = this$ImageFormat_0;
  }
  Coroutine$ImageFormat$readImageInWorker$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImageFormat$readImageInWorker$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImageFormat$readImageInWorker$lambda_0.prototype.constructor = Coroutine$ImageFormat$readImageInWorker$lambda_0;
  Coroutine$ImageFormat$readImageInWorker$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ImageFormat.readImage_1ooaqm$(this.local$closure$s, this.local$closure$props);
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
  ImageFormat.prototype.readImageInWorker_1ooaqm$ = function (s, props, continuation) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return executeInWorker(ImageFormat$readImageInWorker$lambda_0(s, props, this), continuation);
  };
  function ImageFormat$decodeInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImageFormat$decodeInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ImageFormat$decodeInWorker$lambda_0(closure$s_0, closure$props_0, this$ImageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$s = closure$s_0;
    this.local$closure$props = closure$props_0;
    this.local$this$ImageFormat = this$ImageFormat_0;
  }
  Coroutine$ImageFormat$decodeInWorker$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImageFormat$decodeInWorker$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImageFormat$decodeInWorker$lambda_0.prototype.constructor = Coroutine$ImageFormat$decodeInWorker$lambda_0;
  Coroutine$ImageFormat$decodeInWorker$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ImageFormat.read_1ooaqm$(openSync(this.local$closure$s), this.local$closure$props);
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
  ImageFormat.prototype.decodeInWorker_pdgdrr$ = function (s, props, continuation) {
    if (props === void 0)
      props = new ImageDecodingProps();
    return executeInWorker(ImageFormat$decodeInWorker$lambda_0(s, props, this), continuation);
  };
  function ImageFormat$encodeInWorker$lambda(closure$bitmap_0, closure$props_0, this$ImageFormat_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ImageFormat$encodeInWorker$lambda(closure$bitmap_0, closure$props_0, this$ImageFormat_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ImageFormat$encodeInWorker$lambda(closure$bitmap_0, closure$props_0, this$ImageFormat_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$bitmap = closure$bitmap_0;
    this.local$closure$props = closure$props_0;
    this.local$this$ImageFormat = this$ImageFormat_0;
  }
  Coroutine$ImageFormat$encodeInWorker$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ImageFormat$encodeInWorker$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ImageFormat$encodeInWorker$lambda.prototype.constructor = Coroutine$ImageFormat$encodeInWorker$lambda;
  Coroutine$ImageFormat$encodeInWorker$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ImageFormat.encode_hnx2ev$(this.local$closure$bitmap, this.local$closure$props);
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
  ImageFormat.prototype.encodeInWorker_hnx2ev$ = function (bitmap, props, continuation) {
    if (props === void 0)
      props = new ImageEncodingProps();
    return executeInWorker(ImageFormat$encodeInWorker$lambda(bitmap, props, this), continuation);
  };
  ImageFormat.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ImageFormat',
    interfaces: []
  };
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function ImageFormats() {
    ImageFormat.call(this, ['']);
    this.formats_0 = LinkedHashSet_init();
  }
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  ImageFormats.prototype.register_56bozu$ = function (format) {
    addAll(this.formats_0, format);
    return this;
  };
  ImageFormats.prototype.register_qcealv$ = function (format) {
    this.formats_0.add_11rb$(format);
    return this;
  };
  var addAll_0 = Kotlin.kotlin.collections.addAll_ipc267$;
  ImageFormats.prototype.register_ld8ot4$ = function (format) {
    addAll_0(this.formats_0, format);
    return this;
  };
  ImageFormats.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    tmp$ = this.formats_0.iterator();
    while (tmp$.hasNext()) {
      var format = tmp$.next();
      try {
        tmp$_0 = format.decodeHeader_1ooaqm$(slice(s), props);
        if (tmp$_0 == null) {
          continue;
        }
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          continue;
        }
         else
          throw e;
      }
      return tmp$_0;
    }
    return null;
  };
  ImageFormats.prototype.readImage_1ooaqm$$default = function (s, props) {
    var $receiver = this.formats_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (element.check_1ooaqm$(slice(s), props)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var format = firstOrNull$result;
    if (format != null)
      return format.readImage_1ooaqm$(slice(s), props);
    throw new UnsupportedOperationException('Not suitable image format : MAGIC:' + readString(slice(s), 4) + '(' + get_hexString(readBytes(slice(s), 4)) + ')');
  };
  ImageFormats.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$;
    var ext = (new PathInfo(props.filename)).extensionLC;
    var $receiver = this.formats_0;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (element.extensions.contains_11rb$(ext)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    tmp$ = firstOrNull$result;
    if (tmp$ == null) {
      throw new UnsupportedOperationException("Don't know how to generate file for extension '" + ext + "'");
    }
    var format = tmp$;
    format.writeImage_2psbf2$(image, s, props);
  };
  ImageFormats.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ImageFormats',
    interfaces: [ImageFormat]
  };
  function writeTo($receiver_0, file_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$writeTo($receiver_0, file_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$writeTo($receiver_0, file_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$file = file_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
  }
  Coroutine$writeTo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeTo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeTo.prototype.constructor = Coroutine$writeTo;
  Coroutine$writeTo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageEncodingProps();
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.state_0 = 2;
            this.result_0 = this.local$file.writeBytes_gssovf$(this.local$formats.encode_hnx2ev$(this.local$$receiver, this.local$props.copy_x69rha$(this.local$file.basename)), [], this);
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
  var defaultImageFormats;
  function ImageFrame(bitmap, time, targetX, targetY, main) {
    if (time === void 0)
      time = Kotlin.Long.ZERO;
    if (targetX === void 0)
      targetX = 0;
    if (targetY === void 0)
      targetY = 0;
    if (main === void 0)
      main = true;
    this.bitmap = bitmap;
    this.time = time;
    this.targetX = targetX;
    this.targetY = targetY;
    this.main = main;
    this.$delegate_qnaswn$_0 = new Extra$Mixin();
  }
  Object.defineProperty(ImageFrame.prototype, 'area', {
    get: function () {
      return this.bitmap.area;
    }
  });
  ImageFrame.prototype.toString = function () {
    return 'ImageFrame(' + this.bitmap + ', time=' + this.time + ', targetX=' + this.targetX + ', targetY=' + this.targetY + ', main=' + this.main + ')';
  };
  Object.defineProperty(ImageFrame.prototype, 'extra', {
    get: function () {
      return this.$delegate_qnaswn$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_qnaswn$_0.extra = tmp$;
    }
  });
  ImageFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ImageFrame',
    interfaces: [Extra]
  };
  function get_area($receiver) {
    var tmp$;
    var sum = 0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + element.area | 0;
    }
    return sum;
  }
  function ImageInfo() {
    this.$delegate_elx5vo$_0 = new Extra$Mixin();
    this.width = 0;
    this.height = 0;
    this.bitsPerPixel = 0;
  }
  Object.defineProperty(ImageInfo.prototype, 'size', {
    get: function () {
      var width = this.width;
      var height = this.height;
      return new Size_init(Kotlin.numberToDouble(width), Kotlin.numberToDouble(height));
    }
  });
  ImageInfo.prototype.toString = function () {
    return 'ImageInfo(width=' + this.width + ', height=' + this.height + ', bpp=' + this.bitsPerPixel + ', extra=' + Kotlin.toString(this.extra) + ')';
  };
  Object.defineProperty(ImageInfo.prototype, 'extra', {
    get: function () {
      return this.$delegate_elx5vo$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_elx5vo$_0.extra = tmp$;
    }
  });
  ImageInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ImageInfo',
    interfaces: [Extra]
  };
  function JPEG() {
    JPEG_instance = this;
    ImageFormat.call(this, ['jpg', 'jpeg']);
  }
  JPEG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    try {
      var decoder = new JPEG$JPEGDecoder(openSync(readAll(s)));
      decoder.decodeHeader();
      var $receiver = new ImageInfo();
      $receiver.width = decoder.imageWidth;
      $receiver.height = decoder.imageHeight;
      $receiver.bitsPerPixel = 24;
      return $receiver;
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return null;
      }
       else
        throw e;
    }
  };
  JPEG.prototype.readImage_1ooaqm$$default = function (s, props) {
    var decoder = new JPEG$JPEGDecoder(openSync(readAll(s)));
    decoder.decodeHeader();
    decoder.startDecode();
    var out = new Bitmap32(decoder.imageWidth, decoder.imageHeight);
    decoder.decodeRGB_7lcbvb$(out.data, 0, out.width, decoder.numMCURows);
    return new ImageData(listOf(new ImageFrame(out)));
  };
  var Array_0 = Array;
  function JPEG$JPEGDecoder(iss) {
    JPEG$JPEGDecoder$Companion_getInstance();
    this.iss_0 = iss;
    this.inputBuffer_0 = new Int8Array(16384);
    this.inputBufferPos_0 = 0;
    this.inputBufferValid_0 = 0;
    this.headerDecoded_0 = false;
    this.insideSOS_0 = false;
    this.foundEOI_0 = false;
    this.currentMCURow_0 = 0;
    this.idct2D_0 = new JPEG$JPEGDecoder$IDCT_2D();
    this.data_0 = new Int16Array(64);
    var array = Array_0(8);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = JPEG$JPEGDecoder$Huffman$Companion_getInstance().dummy;
    }
    this.huffmanTables_0 = array;
    var array_0 = Array_0(4);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Int8Array(64);
    }
    this.dequant_0 = array_0;
    this.components_0 = [];
    this.order_0 = [];
    this.codeBuffer_0 = 0;
    this.codeBits_0 = 0;
    this.marker_0 = JPEG$JPEGDecoder$Companion_getInstance().MARKER_NONE_8be2vx$;
    this.restartInterval_0 = 0;
    this.todo_0 = 0;
    this.numMCUColumns = 0;
    this.numMCURows = 0;
    this.imageWidth_ea0884$_0 = 0;
    this.imageHeight_pbsmk5$_0 = 0;
    this.imgHMax = 0;
    this.imgVMax = 0;
    this.nomore = false;
    var array_1 = Array_0(3);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = new Int8Array(0);
    }
    this.decodeTmp = array_1;
    var array_2 = Array_0(3);
    var tmp$_2;
    tmp$_2 = array_2.length - 1 | 0;
    for (var i_2 = 0; i_2 <= tmp$_2; i_2++) {
      array_2[i_2] = new Int8Array(0);
    }
    this.upsampleTmp = array_2;
  }
  Object.defineProperty(JPEG$JPEGDecoder.prototype, 'imageWidth', {
    get: function () {
      this.ensureHeaderDecoded_0();
      return this.imageWidth_ea0884$_0;
    },
    set: function (imageWidth) {
      this.imageWidth_ea0884$_0 = imageWidth;
    }
  });
  Object.defineProperty(JPEG$JPEGDecoder.prototype, 'imageHeight', {
    get: function () {
      this.ensureHeaderDecoded_0();
      return this.imageHeight_pbsmk5$_0;
    },
    set: function (imageHeight) {
      this.imageHeight_pbsmk5$_0 = imageHeight;
    }
  });
  JPEG$JPEGDecoder.prototype.decodeHeader = function () {
    if (this.headerDecoded_0)
      return;
    this.headerDecoded_0 = true;
    var m = this.getMarker_0();
    if (m !== 216)
      throw new IOException('no SOI');
    m = this.getMarker_0();
    while (m !== 192 && m !== 193) {
      this.processMarker_0(m);
      m = this.getMarker_0();
      while (m === JPEG$JPEGDecoder$Companion_getInstance().MARKER_NONE_8be2vx$)
        m = this.getMarker_0();
    }
    this.processSOF_0();
  };
  JPEG$JPEGDecoder.prototype.startDecode = function () {
    if (this.insideSOS_0)
      throw new IllegalStateException('decode already started');
    if (this.foundEOI_0)
      return false;
    this.decodeHeader();
    var m = this.getMarker_0();
    while (m !== 217) {
      if (m === 218) {
        this.processScanHeader_0();
        this.insideSOS_0 = true;
        this.currentMCURow_0 = 0;
        this.reset_0();
        return true;
      }
       else {
        this.processMarker_0(m);
      }
      m = this.getMarker_0();
    }
    this.foundEOI_0 = true;
    return false;
  };
  JPEG$JPEGDecoder.prototype.decodeRGB_7lcbvb$ = function (dst, outPos, stride, numMCURows) {
    var tmp$;
    if (!this.insideSOS_0)
      throw new IllegalStateException('decode not started');
    if (numMCURows <= 0 || (this.currentMCURow_0 + numMCURows | 0) > this.numMCURows)
      throw new IllegalArgumentException('numMCURows');
    if (this.order_0.length !== 3)
      throw new UnsupportedOperationException('RGB decode only supported for 3 channels');
    var YUVstride = Kotlin.imul(this.numMCUColumns, this.imgHMax) * 8 | 0;
    var requiresUpsampling = this.allocateDecodeTmp_0(YUVstride);
    var YtoRGB = this.order_0[0].upsampler !== 0 ? this.upsampleTmp[0] : this.decodeTmp[0];
    var UtoRGB = this.order_0[1].upsampler !== 0 ? this.upsampleTmp[1] : this.decodeTmp[1];
    var VtoRGB = this.order_0[2].upsampler !== 0 ? this.upsampleTmp[2] : this.decodeTmp[2];
    for (var j = 0; j < numMCURows; j++) {
      this.decodeMCUrow_0();
      if (requiresUpsampling)
        this.doUpsampling_0(YUVstride);
      var n = this.imgVMax * 8 | 0;
      var opos = outPos;
      var a = this.imageHeight - Kotlin.imul(this.currentMCURow_0 - 1 | 0, n) | 0;
      var b = n;
      n = Math_0.min(a, b);
      tmp$ = n;
      for (var i = 0; i < tmp$; i++) {
        YUVA_getInstance().YUVtoRGB_yus68p$(dst, opos, YtoRGB, UtoRGB, VtoRGB, Kotlin.imul(i, YUVstride), this.imageWidth);
        opos = opos + stride | 0;
      }
      if (this.marker_0 !== JPEG$JPEGDecoder$Companion_getInstance().MARKER_NONE_8be2vx$)
        break;
    }
    this.checkDecodeEnd_0();
  };
  JPEG$JPEGDecoder.prototype.checkDecodeEnd_0 = function () {
    if (this.currentMCURow_0 >= this.numMCURows || this.marker_0 !== JPEG$JPEGDecoder$Companion_getInstance().MARKER_NONE_8be2vx$) {
      this.insideSOS_0 = false;
      if (this.marker_0 === JPEG$JPEGDecoder$Companion_getInstance().MARKER_NONE_8be2vx$)
        this.skipPadding_0();
    }
  };
  JPEG$JPEGDecoder.prototype.fetch_0 = function () {
    this.inputBufferPos_0 = 0;
    this.inputBufferValid_0 = this.iss_0.read_mj6st8$(this.inputBuffer_0, 0, this.inputBuffer_0.length);
    if (this.inputBufferValid_0 <= 0)
      throw new EOFException('eof');
  };
  JPEG$JPEGDecoder.prototype.read_0 = function (buf, off, len) {
    var o = off;
    var l = len;
    while (l > 0) {
      var avail = this.inputBufferValid_0 - this.inputBufferPos_0 | 0;
      if (avail === 0) {
        this.fetch_0();
        continue;
      }
      var copy = avail > l ? l : avail;
      copyRangeTo(this.inputBuffer_0, this.inputBufferPos_0, buf, o, copy);
      o = o + copy | 0;
      l = l - copy | 0;
      this.inputBufferPos_0 = this.inputBufferPos_0 + copy | 0;
    }
  };
  JPEG$JPEGDecoder.prototype.u8_0 = function () {
    var tmp$;
    if (this.inputBufferPos_0 === this.inputBufferValid_0)
      this.fetch_0();
    return this.inputBuffer_0[tmp$ = this.inputBufferPos_0, this.inputBufferPos_0 = tmp$ + 1 | 0, tmp$] & 255;
  };
  JPEG$JPEGDecoder.prototype.u16_0 = function () {
    return this.u8_0() << 8 | this.u8_0();
  };
  JPEG$JPEGDecoder.prototype.skip_0 = function (amount) {
    var amnt = amount;
    while (amnt > 0) {
      var inputBufferRemaining = this.inputBufferValid_0 - this.inputBufferPos_0 | 0;
      if (amnt > inputBufferRemaining) {
        amnt = amnt - inputBufferRemaining | 0;
        this.fetch_0();
      }
       else {
        this.inputBufferPos_0 = this.inputBufferPos_0 + amnt | 0;
        return;
      }
    }
  };
  JPEG$JPEGDecoder.prototype.growBufferCheckMarker_0 = function () {
    var c = this.u8_0();
    if (c !== 0) {
      this.marker_0 = c;
      this.nomore = true;
    }
  };
  JPEG$JPEGDecoder.prototype.growBufferUnsafe_0 = function () {
    do {
      var b = 0;
      if (!this.nomore) {
        b = this.u8_0();
        if (b === 255)
          this.growBufferCheckMarker_0();
      }
      this.codeBuffer_0 = this.codeBuffer_0 | b << 24 - this.codeBits_0;
      this.codeBits_0 = this.codeBits_0 + 8 | 0;
    }
     while (this.codeBits_0 <= 24);
  };
  JPEG$JPEGDecoder.prototype.decode_0 = function (h) {
    if (this.codeBits_0 < 16)
      this.growBufferUnsafe_0();
    var k = h.fast_8be2vx$[this.codeBuffer_0 >>> 32 - JPEG$JPEGDecoder$Huffman$Companion_getInstance().FAST_BITS_8be2vx$] & 255;
    if (k < 255) {
      var s = h.size_8be2vx$[k];
      this.codeBuffer_0 = this.codeBuffer_0 << s;
      this.codeBits_0 = this.codeBits_0 - s | 0;
      return h.values_8be2vx$[k] & 255;
    }
    return this.decodeSlow_0(h);
  };
  JPEG$JPEGDecoder.prototype.decodeSlow_0 = function (h) {
    var temp = this.codeBuffer_0 >>> 16;
    var s = JPEG$JPEGDecoder$Huffman$Companion_getInstance().FAST_BITS_8be2vx$ + 1 | 0;
    while (temp >= h.maxCode_8be2vx$[s]) {
      s = s + 1 | 0;
    }
    var k = (temp >>> 16 - s) + h.delta_8be2vx$[s] | 0;
    this.codeBuffer_0 = this.codeBuffer_0 << s;
    this.codeBits_0 = this.codeBits_0 - s | 0;
    return h.values_8be2vx$[k] & 255;
  };
  JPEG$JPEGDecoder.prototype.extendReceive_0 = function (n) {
    if (this.codeBits_0 < 24)
      this.growBufferUnsafe_0();
    var k = this.codeBuffer_0 >>> 32 - n;
    this.codeBuffer_0 = this.codeBuffer_0 << n;
    this.codeBits_0 = this.codeBits_0 - n | 0;
    var limit = 1 << n - 1;
    if (k < limit)
      k = k - ((limit * 2 | 0) - 1) | 0;
    return k;
  };
  JPEG$JPEGDecoder.prototype.decodeBlock_0 = function (data, c) {
    fill_0(data, Kotlin.toShort(0));
    var dq = c.dequant;
    var t = this.decode_0(c.huffDC);
    var dc = c.dcPred;
    if (t > 0) {
      dc = dc + this.extendReceive_0(t) | 0;
      c.dcPred = dc;
    }
    data[0] = Kotlin.toShort(Kotlin.imul(dc, dq[0] & 255));
    var hac = c.huffAC;
    var k = 1;
    do {
      var rs = this.decode_0(hac);
      k = k + (rs >> 4) | 0;
      var s = rs & 15;
      if (s !== 0) {
        var v = Kotlin.imul(this.extendReceive_0(s), dq[k] & 255);
        data[JPEG$JPEGDecoder$Companion_getInstance().dezigzag_8be2vx$.charCodeAt(k) | 0] = Kotlin.toShort(v);
      }
       else if (rs !== 240) {
        break;
      }
    }
     while ((k = k + 1 | 0, k) < 64);
  };
  JPEG$JPEGDecoder.prototype.getMarker_0 = function () {
    var m = this.marker_0;
    if (m !== JPEG$JPEGDecoder$Companion_getInstance().MARKER_NONE_8be2vx$) {
      this.marker_0 = JPEG$JPEGDecoder$Companion_getInstance().MARKER_NONE_8be2vx$;
      return m;
    }
    m = this.u8_0();
    if (m !== 255)
      return JPEG$JPEGDecoder$Companion_getInstance().MARKER_NONE_8be2vx$;
    do {
      m = this.u8_0();
    }
     while (m === 255);
    return m;
  };
  JPEG$JPEGDecoder.prototype.reset_0 = function () {
    var tmp$, tmp$_0;
    this.codeBits_0 = 0;
    this.codeBuffer_0 = 0;
    this.nomore = false;
    this.marker_0 = JPEG$JPEGDecoder$Companion_getInstance().MARKER_NONE_8be2vx$;
    this.todo_0 = this.restartInterval_0 !== 0 ? this.restartInterval_0 : IntCompanionObject.MAX_VALUE;
    tmp$ = this.components_0;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var c = tmp$[tmp$_0];
      c.dcPred = 0;
    }
  };
  JPEG$JPEGDecoder.prototype.checkRestart_0 = function () {
    if (this.codeBits_0 < 24)
      this.growBufferUnsafe_0();
    if ((new IntRange(208, 215)).contains_mef7kx$(this.marker_0)) {
      this.reset_0();
      return true;
    }
    return false;
  };
  JPEG$JPEGDecoder.prototype.processMarker_0 = function (marker) {
    if (marker >= 224 && (marker <= 239 || marker === 254)) {
      var l = this.u16_0() - 2 | 0;
      if (l < 0)
        throw new IOException('bad length');
      this.skip_0(l);
      return;
    }
    if (marker === JPEG$JPEGDecoder$Companion_getInstance().MARKER_NONE_8be2vx$)
      throw new IOException('Expected marker');
    else if (marker === 194)
      throw new IOException('Progressive JPEG not supported');
    else if (marker === 221) {
      if (this.u16_0() !== 4)
        throw new IOException('bad DRI length');
      this.restartInterval_0 = this.u16_0();
    }
     else if (marker === 219) {
      var l_0 = this.u16_0() - 2 | 0;
      while (l_0 >= 65) {
        var q = this.u8_0();
        var p = q >> 4;
        var t = q & 15;
        if (p !== 0)
          throw new IOException('bad DQT type');
        if (t > 3)
          throw new IOException('bad DQT table');
        this.read_0(this.dequant_0[t], 0, 64);
        l_0 = l_0 - 65 | 0;
      }
      if (l_0 !== 0)
        throw new IOException('bad DQT length');
    }
     else if (marker === 196) {
      var l_1 = this.u16_0() - 2 | 0;
      while (l_1 > 17) {
        var q_0 = this.u8_0();
        var tc = q_0 >> 4;
        var th = q_0 & 15;
        if (tc > 1 || th > 3)
          throw new IOException('bad DHT header');
        var tmp = this.idct2D_0.tmp2D_8be2vx$;
        for (var i = 0; i < 16; i++)
          tmp[i] = this.u8_0();
        var h = new JPEG$JPEGDecoder$Huffman(tmp);
        var m = h.numSymbols;
        l_1 = l_1 - (17 + m) | 0;
        if (l_1 < 0)
          throw new IOException('bad DHT length');
        this.read_0(h.values_8be2vx$, 0, m);
        this.huffmanTables_0[(tc * 4 | 0) + th | 0] = h;
      }
      if (l_1 !== 0)
        throw new IOException('bad DHT length');
    }
     else
      throw new IOException('Unknown marker: ' + Kotlin.toString(marker));
  };
  JPEG$JPEGDecoder.prototype.skipPadding_0 = function () {
    var x;
    do {
      x = this.u8_0();
    }
     while (x === 0);
    if (x === 255)
      this.marker_0 = this.u8_0();
  };
  JPEG$JPEGDecoder.prototype.processScanHeader_0 = function () {
    var tmp$, tmp$_0;
    var ls = this.u16_0();
    var scanN = this.u8_0();
    if (scanN < 1 || scanN > 4)
      throw new IOException('bad SOS component count');
    if (ls !== (6 + (2 * scanN | 0) | 0))
      throw new IOException('bad SOS length');
    var lorder = Kotlin.newArray(scanN, null);
    for (var i = 0; i < scanN; i++) {
      var id = this.u8_0();
      var q = this.u8_0();
      tmp$ = this.components_0;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var c = tmp$[tmp$_0];
        if (c.id === id) {
          var hd = q >> 4;
          var ha = q & 15;
          if (hd > 3 || ha > 3)
            throw new IOException('bad huffman table index');
          c.huffDC = this.huffmanTables_0[hd];
          c.huffAC = this.huffmanTables_0[ha + 4 | 0];
          if (c.huffDC.dummy || c.huffAC.dummy)
            throw new IOException('bad huffman table index');
          lorder[i] = c;
          break;
        }
      }
      if (lorder[i] == null)
        throw new IOException('unknown color component');
    }
    this.order_0 = requireNoNulls(lorder);
    if (this.u8_0() !== 0)
      throw new IOException('bad SOS');
    this.u8_0();
    if (this.u8_0() !== 0)
      throw new IOException('bad SOS');
  };
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  JPEG$JPEGDecoder.prototype.processSOF_0 = function () {
    var lf = this.u16_0();
    if (lf < 11)
      throw new IOException('bad SOF length');
    if (this.u8_0() !== 8)
      throw new IOException('only 8 bit JPEG supported');
    this.imageHeight = this.u16_0();
    this.imageWidth = this.u16_0();
    if (this.imageWidth <= 0 || this.imageHeight <= 0)
      throw new IOException('Invalid image size');
    var numComps = this.u8_0();
    if (numComps !== 3 && numComps !== 1)
      throw new IOException('bad component count');
    if (lf !== (8 + (3 * numComps | 0) | 0))
      throw new IOException('bad SOF length');
    var hMax = {v: 1};
    var vMax = {v: 1};
    var $receiver = until(0, numComps);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var c = new JPEG$JPEGDecoder$Component(this.u8_0());
      var q = this.u8_0();
      var tq = this.u8_0();
      c.blocksPerMCUHorz = q >> 4;
      c.blocksPerMCUVert = q & 15;
      if (c.blocksPerMCUHorz === 0 || c.blocksPerMCUHorz > 4)
        throw new IOException('bad H');
      if (c.blocksPerMCUVert === 0 || c.blocksPerMCUVert > 4)
        throw new IOException('bad V');
      if (tq > 3)
        throw new IOException('bad TQ');
      c.dequant = this.dequant_0[tq];
      var a = hMax.v;
      var b = c.blocksPerMCUHorz;
      hMax.v = Math_0.max(a, b);
      var a_0 = vMax.v;
      var b_0 = c.blocksPerMCUVert;
      vMax.v = Math_0.max(a_0, b_0);
      tmp$_0.call(destination, c);
    }
    this.components_0 = copyToArray(destination);
    var mcuW = hMax.v * 8 | 0;
    var mcuH = vMax.v * 8 | 0;
    this.imgHMax = hMax.v;
    this.imgVMax = vMax.v;
    this.numMCUColumns = (this.imageWidth + mcuW - 1 | 0) / mcuW | 0;
    this.numMCURows = (this.imageHeight + mcuH - 1 | 0) / mcuH | 0;
    for (var i = 0; i < numComps; i++) {
      var c_0 = this.components_0[i];
      c_0.width = (Kotlin.imul(this.imageWidth, c_0.blocksPerMCUHorz) + hMax.v - 1 | 0) / hMax.v | 0;
      c_0.height = (Kotlin.imul(this.imageHeight, c_0.blocksPerMCUVert) + vMax.v - 1 | 0) / vMax.v | 0;
      c_0.minReqWidth = Kotlin.imul(this.numMCUColumns, c_0.blocksPerMCUHorz) * 8 | 0;
      c_0.minReqHeight = Kotlin.imul(this.numMCURows, c_0.blocksPerMCUVert) * 8 | 0;
      if (c_0.blocksPerMCUHorz < hMax.v)
        c_0.upsampler = c_0.upsampler | 1;
      if (c_0.blocksPerMCUVert < vMax.v)
        c_0.upsampler = c_0.upsampler | 2;
    }
  };
  JPEG$JPEGDecoder.prototype.ensureHeaderDecoded_0 = function () {
    if (!this.headerDecoded_0)
      throw new IllegalStateException('need to decode header first');
  };
  JPEG$JPEGDecoder.prototype.allocateDecodeTmp_0 = function (YUVstride) {
    var requiresUpsampling = false;
    for (var compIdx = 0; compIdx < 3; compIdx++) {
      var c = this.order_0[compIdx];
      var reqSize = Kotlin.imul(c.minReqWidth, c.blocksPerMCUVert) * 8 | 0;
      if (this.decodeTmp[compIdx].length < reqSize)
        this.decodeTmp[compIdx] = new Int8Array(reqSize);
      if (c.upsampler !== 0) {
        var upsampleReq = Kotlin.imul(this.imgVMax * 8 | 0, YUVstride);
        if (this.upsampleTmp[compIdx].length < upsampleReq) {
          this.upsampleTmp[compIdx] = new Int8Array(upsampleReq);
        }
        requiresUpsampling = true;
      }
    }
    return requiresUpsampling;
  };
  JPEG$JPEGDecoder.prototype.decodeMCUrow_0 = function () {
    var tmp$;
    this.currentMCURow_0 = this.currentMCURow_0 + 1 | 0;
    tmp$ = this.numMCUColumns;
    for (var i = 0; i < tmp$; i++) {
      for (var compIdx = 0; compIdx < 3; compIdx++) {
        var c = this.order_0[compIdx];
        var outStride = c.minReqWidth;
        var outPosY = Kotlin.imul(8 * i | 0, c.blocksPerMCUHorz);
        var y = 0;
        while (y < c.blocksPerMCUVert) {
          var x = 0;
          var outPos = outPosY;
          while (x < c.blocksPerMCUHorz) {
            this.decodeBlock_0(this.data_0, c);
            this.idct2D_0.compute_rltqhu$(this.decodeTmp[compIdx], outPos, outStride, this.data_0);
            x = x + 1 | 0;
            outPos = outPos + 8 | 0;
          }
          y = y + 1 | 0;
          outPosY = outPosY + (8 * outStride | 0) | 0;
        }
      }
      if ((this.todo_0 = this.todo_0 - 1 | 0, this.todo_0) <= 0 && !this.checkRestart_0())
        break;
    }
  };
  JPEG$JPEGDecoder.prototype.doUpsampling_0 = function (YUVstride) {
    var tmp$;
    for (var compIdx = 0; compIdx < 3; compIdx++) {
      var c = this.order_0[compIdx];
      var inStride = c.minReqWidth;
      var height = c.blocksPerMCUVert * 8 | 0;
      tmp$ = c.upsampler;
      if (tmp$ === 1) {
        for (var i = 0; i < height; i++) {
          JPEG$JPEGDecoder$Companion_getInstance().upsampleH2_0(this.upsampleTmp[compIdx], Kotlin.imul(i, YUVstride), this.decodeTmp[compIdx], Kotlin.imul(i, inStride), c.width);
        }
      }
       else if (tmp$ === 2) {
        var i_0 = 0;
        var inPos0 = 0;
        var inPos1 = 0;
        while (i_0 < height) {
          JPEG$JPEGDecoder$Companion_getInstance().upsampleV2_0(this.upsampleTmp[compIdx], Kotlin.imul((i_0 * 2 | 0) + 0 | 0, YUVstride), this.decodeTmp[compIdx], inPos0, inPos1, c.width);
          JPEG$JPEGDecoder$Companion_getInstance().upsampleV2_0(this.upsampleTmp[compIdx], Kotlin.imul((i_0 * 2 | 0) + 1 | 0, YUVstride), this.decodeTmp[compIdx], inPos1, inPos0, c.width);
          inPos0 = inPos1;
          inPos1 = inPos1 + inStride | 0;
          i_0 = i_0 + 1 | 0;
        }
        var i_1 = 0;
        var inPos0_0 = 0;
        var inPos1_0 = 0;
        while (i_1 < height) {
          JPEG$JPEGDecoder$Companion_getInstance().upsampleHV2_0(this.upsampleTmp[compIdx], Kotlin.imul((i_1 * 2 | 0) + 0 | 0, YUVstride), this.decodeTmp[compIdx], inPos0_0, inPos1_0, c.width);
          JPEG$JPEGDecoder$Companion_getInstance().upsampleHV2_0(this.upsampleTmp[compIdx], Kotlin.imul((i_1 * 2 | 0) + 1 | 0, YUVstride), this.decodeTmp[compIdx], inPos1_0, inPos0_0, c.width);
          inPos0_0 = inPos1_0;
          inPos1_0 = inPos1_0 + inStride | 0;
          i_1 = i_1 + 1 | 0;
        }
      }
       else if (tmp$ === 3) {
        var i_2 = 0;
        var inPos0_1 = 0;
        var inPos1_1 = 0;
        while (i_2 < height) {
          JPEG$JPEGDecoder$Companion_getInstance().upsampleHV2_0(this.upsampleTmp[compIdx], Kotlin.imul((i_2 * 2 | 0) + 0 | 0, YUVstride), this.decodeTmp[compIdx], inPos0_1, inPos1_1, c.width);
          JPEG$JPEGDecoder$Companion_getInstance().upsampleHV2_0(this.upsampleTmp[compIdx], Kotlin.imul((i_2 * 2 | 0) + 1 | 0, YUVstride), this.decodeTmp[compIdx], inPos1_1, inPos0_1, c.width);
          inPos0_1 = inPos1_1;
          inPos1_1 = inPos1_1 + inStride | 0;
          i_2 = i_2 + 1 | 0;
        }
      }
    }
  };
  function JPEG$JPEGDecoder$Huffman(count, dummy) {
    JPEG$JPEGDecoder$Huffman$Companion_getInstance();
    if (dummy === void 0)
      dummy = false;
    this.count = count;
    this.dummy = dummy;
    var tmp$;
    var sum = 0;
    tmp$ = until(0, 16).iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      sum = sum + this.count[element] | 0;
    }
    this.numSymbols = sum;
    this.fast_8be2vx$ = new Int8Array(1 << JPEG$JPEGDecoder$Huffman$Companion_getInstance().FAST_BITS_8be2vx$);
    this.values_8be2vx$ = new Int8Array(this.numSymbols);
    var $receiver = new Int8Array(this.numSymbols);
    var tmp$_0, tmp$_1;
    var k = 0;
    for (var i = 0; i < 16; i++) {
      tmp$_0 = this.count[i];
      for (var j = 0; j < tmp$_0; j++) {
        $receiver[tmp$_1 = k, k = tmp$_1 + 1 | 0, tmp$_1] = Kotlin.toByte(i + 1 | 0);
      }
    }
    this.size_8be2vx$ = $receiver;
    this.maxCode_8be2vx$ = new Int32Array(18);
    this.delta_8be2vx$ = new Int32Array(17);
    var code = new Int32Array(256);
    var k_0 = {v: 0};
    var tmp$_2, tmp$_3;
    var c = 0;
    for (var i_0 = 1; i_0 <= 16; i_0++) {
      this.delta_8be2vx$[i_0] = k_0.v - c | 0;
      if (k_0.v < this.numSymbols && this.size_8be2vx$[k_0.v] === i_0) {
        do {
          code[tmp$_3 = k_0.v, k_0.v = tmp$_3 + 1 | 0, tmp$_3] = (tmp$_2 = c, c = tmp$_2 + 1 | 0, tmp$_2);
        }
         while (k_0.v < this.numSymbols && this.size_8be2vx$[k_0.v] === i_0);
        if ((c - 1 | 0) >= 1 << i_0)
          throw new IOException('Bad code length');
      }
      this.maxCode_8be2vx$[i_0] = c << 16 - i_0;
      c = c << 1;
    }
    this.maxCode_8be2vx$[17] = IntCompanionObject.MAX_VALUE;
    fill_1(this.fast_8be2vx$, Kotlin.toByte(-1));
    var tmp$_4;
    tmp$_4 = k_0.v;
    for (var i_1 = 0; i_1 < tmp$_4; i_1++) {
      var s = this.size_8be2vx$[i_1];
      if (s <= JPEG$JPEGDecoder$Huffman$Companion_getInstance().FAST_BITS_8be2vx$) {
        var c_0 = code[i_1] << JPEG$JPEGDecoder$Huffman$Companion_getInstance().FAST_BITS_8be2vx$ - s;
        var m = 1 << JPEG$JPEGDecoder$Huffman$Companion_getInstance().FAST_BITS_8be2vx$ - s;
        for (var j_0 = 0; j_0 < m; j_0++)
          this.fast_8be2vx$[c_0 + j_0 | 0] = Kotlin.toByte(i_1);
      }
    }
  }
  function JPEG$JPEGDecoder$Huffman$Companion() {
    JPEG$JPEGDecoder$Huffman$Companion_instance = this;
    this.FAST_BITS_8be2vx$ = 9;
    this.dummy = new JPEG$JPEGDecoder$Huffman(new Int32Array(16), true);
  }
  JPEG$JPEGDecoder$Huffman$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JPEG$JPEGDecoder$Huffman$Companion_instance = null;
  function JPEG$JPEGDecoder$Huffman$Companion_getInstance() {
    if (JPEG$JPEGDecoder$Huffman$Companion_instance === null) {
      new JPEG$JPEGDecoder$Huffman$Companion();
    }
    return JPEG$JPEGDecoder$Huffman$Companion_instance;
  }
  JPEG$JPEGDecoder$Huffman.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Huffman',
    interfaces: []
  };
  function JPEG$JPEGDecoder$IDCT_2D() {
    JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance();
    this.tmp2D_8be2vx$ = new Int32Array(64);
  }
  JPEG$JPEGDecoder$IDCT_2D.prototype.computeV_0 = function (data) {
    var tmp = this.tmp2D_8be2vx$;
    var i = 0;
    do {
      this.computeVOne_0(data, i, tmp);
    }
     while ((i = i + 1 | 0, i) < 8);
  };
  JPEG$JPEGDecoder$IDCT_2D.prototype.computeVOne_0 = function (data, i, tmp) {
    var s0 = data[i + 0 | 0];
    var s1 = data[i + 8 | 0];
    var s2 = data[i + 16 | 0];
    var s3 = data[i + 24 | 0];
    var s4 = data[i + 32 | 0];
    var s5 = data[i + 40 | 0];
    var s6 = data[i + 48 | 0];
    var s7 = data[i + 56 | 0];
    var p1 = Kotlin.imul(s2 + s6 | 0, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C00);
    var p2 = (s0 + s4 << 12) + 512 | 0;
    var p3 = (s0 - s4 << 12) + 512 | 0;
    var p4 = p1 + Kotlin.imul(s6, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C01) | 0;
    var p5 = p1 + Kotlin.imul(s2, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C02) | 0;
    var x0 = p2 + p5 | 0;
    var x3 = p2 - p5 | 0;
    var x1 = p3 + p4 | 0;
    var x2 = p3 - p4 | 0;
    var p1b = s7 + s1 | 0;
    var p2b = s5 + s3 | 0;
    var p3b = s7 + s3 | 0;
    var p4b = s5 + s1 | 0;
    var p5b = Kotlin.imul(p3b + p4b | 0, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C03);
    var p1c = p5b + Kotlin.imul(p1b, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C08) | 0;
    var p2c = p5b + Kotlin.imul(p2b, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C09) | 0;
    var p3c = Kotlin.imul(p3b, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C10);
    var p4c = Kotlin.imul(p4b, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C11);
    var t0 = Kotlin.imul(s7, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C04) + p1c + p3c | 0;
    var t1 = Kotlin.imul(s5, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C05) + p2c + p4c | 0;
    var t2 = Kotlin.imul(s3, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C06) + p2c + p3c | 0;
    var t3 = Kotlin.imul(s1, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C07) + p1c + p4c | 0;
    tmp[i + 0 | 0] = x0 + t3 >> 10;
    tmp[i + 56 | 0] = x0 - t3 >> 10;
    tmp[i + 8 | 0] = x1 + t2 >> 10;
    tmp[i + 48 | 0] = x1 - t2 >> 10;
    tmp[i + 16 | 0] = x2 + t1 >> 10;
    tmp[i + 40 | 0] = x2 - t1 >> 10;
    tmp[i + 24 | 0] = x3 + t0 >> 10;
    tmp[i + 32 | 0] = x3 - t0 >> 10;
  };
  JPEG$JPEGDecoder$IDCT_2D.prototype.compute_rltqhu$ = function (out, outPos, outStride, data) {
    var opos = outPos;
    this.computeV_0(data);
    var tmp = this.tmp2D_8be2vx$;
    var i = 0;
    while (i < 64) {
      this.computeOne_0(i, opos, out, tmp);
      opos = opos + outStride | 0;
      i = i + 8 | 0;
    }
  };
  JPEG$JPEGDecoder$IDCT_2D.prototype.computeOne_0 = function (i, opos, out, tmp) {
    var s0 = tmp[i + 0 | 0] + (257 << 4) | 0;
    var s1 = tmp[i + 1 | 0];
    var s2 = tmp[i + 2 | 0];
    var s3 = tmp[i + 3 | 0];
    var s4 = tmp[i + 4 | 0];
    var s5 = tmp[i + 5 | 0];
    var s6 = tmp[i + 6 | 0];
    var s7 = tmp[i + 7 | 0];
    var p1 = Kotlin.imul(s2 + s6 | 0, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C00);
    var p2 = s0 + s4 << 12;
    var p3 = s0 - s4 << 12;
    var p4 = p1 + Kotlin.imul(s6, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C01) | 0;
    var p5 = p1 + Kotlin.imul(s2, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C02) | 0;
    var x0 = p2 + p5 | 0;
    var x3 = p2 - p5 | 0;
    var x1 = p3 + p4 | 0;
    var x2 = p3 - p4 | 0;
    var p1b = s7 + s1 | 0;
    var p2b = s5 + s3 | 0;
    var p3b = s7 + s3 | 0;
    var p4b = s5 + s1 | 0;
    var p5b = Kotlin.imul(p3b + p4b | 0, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C03);
    var p1c = p5b + Kotlin.imul(p1b, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C08) | 0;
    var p2c = p5b + Kotlin.imul(p2b, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C09) | 0;
    var p3c = Kotlin.imul(p3b, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C10);
    var p4c = Kotlin.imul(p4b, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C11);
    var t0 = Kotlin.imul(s7, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C04) + p1c + p3c | 0;
    var t1 = Kotlin.imul(s5, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C05) + p2c + p4c | 0;
    var t2 = Kotlin.imul(s3, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C06) + p2c + p3c | 0;
    var t3 = Kotlin.imul(s1, JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().C07) + p1c + p4c | 0;
    out[opos + 0 | 0] = JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().clampShift17_0(x0 + t3 | 0);
    out[opos + 7 | 0] = JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().clampShift17_0(x0 - t3 | 0);
    out[opos + 1 | 0] = JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().clampShift17_0(x1 + t2 | 0);
    out[opos + 6 | 0] = JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().clampShift17_0(x1 - t2 | 0);
    out[opos + 2 | 0] = JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().clampShift17_0(x2 + t1 | 0);
    out[opos + 5 | 0] = JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().clampShift17_0(x2 - t1 | 0);
    out[opos + 3 | 0] = JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().clampShift17_0(x3 + t0 | 0);
    out[opos + 4 | 0] = JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance().clampShift17_0(x3 - t0 | 0);
  };
  function JPEG$JPEGDecoder$IDCT_2D$Companion() {
    JPEG$JPEGDecoder$IDCT_2D$Companion_instance = this;
    this.C00 = 2217;
    this.C01 = -7568;
    this.C02 = 3135;
    this.C03 = 4816;
    this.C04 = 1223;
    this.C05 = 8410;
    this.C06 = 12586;
    this.C07 = 6149;
    this.C08 = -3686;
    this.C09 = -10498;
    this.C10 = -8035;
    this.C11 = -1598;
  }
  JPEG$JPEGDecoder$IDCT_2D$Companion.prototype.clampShift17_0 = function (x) {
    return Kotlin.toByte(x < 0 ? 0 : x > 255 << 17 ? 255 : x >>> 17);
  };
  JPEG$JPEGDecoder$IDCT_2D$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JPEG$JPEGDecoder$IDCT_2D$Companion_instance = null;
  function JPEG$JPEGDecoder$IDCT_2D$Companion_getInstance() {
    if (JPEG$JPEGDecoder$IDCT_2D$Companion_instance === null) {
      new JPEG$JPEGDecoder$IDCT_2D$Companion();
    }
    return JPEG$JPEGDecoder$IDCT_2D$Companion_instance;
  }
  JPEG$JPEGDecoder$IDCT_2D.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'IDCT_2D',
    interfaces: []
  };
  function JPEG$JPEGDecoder$Component(id) {
    this.id = id;
    this.dcPred = 0;
    this.huffDC = JPEG$JPEGDecoder$Huffman$Companion_getInstance().dummy;
    this.huffAC = JPEG$JPEGDecoder$Huffman$Companion_getInstance().dummy;
    this.dequant = new Int8Array(0);
    this.blocksPerMCUVert = 0;
    this.blocksPerMCUHorz = 0;
    this.width = 0;
    this.height = 0;
    this.minReqWidth = 0;
    this.minReqHeight = 0;
    this.upsampler = 0;
  }
  JPEG$JPEGDecoder$Component.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Component',
    interfaces: []
  };
  function JPEG$JPEGDecoder$Companion() {
    JPEG$JPEGDecoder$Companion_instance = this;
    this.MARKER_NONE_8be2vx$ = 255;
    this.dezigzag_8be2vx$ = '' + '\x00\x01\b\x10\t\x02\x03\n' + '\x11\x18 \x19\x12\x0B\x04\x05' + '\f\x13\x1A!(0)"' + '\x1B\x14\r\x06\x07\x0E\x15\x1C' + '#*1892+$' + '\x1D\x16\x0F\x17\x1E%,3' + ":;4-&\x1F'." + '5<=6/7>?' + '????????' + '???????';
  }
  JPEG$JPEGDecoder$Companion.prototype.upsampleH2_0 = function (out, outPos, inp, inPos, width) {
    if (width === 1) {
      out[outPos + 1 | 0] = inp[inPos];
      out[outPos] = out[outPos + 1 | 0];
    }
     else {
      var i0 = inp[inPos] & 255;
      var i1 = inp[inPos + 1 | 0] & 255;
      out[outPos] = Kotlin.toByte(i0);
      out[outPos + 1 | 0] = Kotlin.toByte((i0 * 3 | 0) + i1 + 2 >> 2);
      for (var i = 2; i < width; i++) {
        var i2 = inp[inPos + i | 0] & 255;
        var n = (i1 * 3 | 0) + 2 | 0;
        out[outPos + (i * 2 | 0) - 2 | 0] = Kotlin.toByte(n + i0 >> 2);
        out[outPos + (i * 2 | 0) - 1 | 0] = Kotlin.toByte(n + i2 >> 2);
        i0 = i1;
        i1 = i2;
      }
      out[outPos + (width * 2 | 0) - 2 | 0] = Kotlin.toByte((i0 * 3 | 0) + i1 + 2 >> 2);
      out[outPos + (width * 2 | 0) - 1 | 0] = Kotlin.toByte(i1);
    }
  };
  JPEG$JPEGDecoder$Companion.prototype.upsampleV2_0 = function (out, outPos, inp, inPos0, inPos1, width) {
    for (var i = 0; i < width; i++)
      out[outPos + i | 0] = Kotlin.toByte((3 * (inp[inPos0 + i | 0] & 255) | 0) + (inp[inPos1 + i | 0] & 255) + 2 >> 2);
  };
  JPEG$JPEGDecoder$Companion.prototype.upsampleHV2_0 = function (out, outPos, inp, inPos0, inPos1, width) {
    if (width === 1) {
      var i0 = inp[inPos0] & 255;
      var i1 = inp[inPos1] & 255;
      out[outPos + 1 | 0] = Kotlin.toByte((i0 * 3 | 0) + i1 + 2 >> 2);
      out[outPos] = out[outPos + 1 | 0];
    }
     else {
      var i1_0 = (3 * (inp[inPos0] & 255) | 0) + (inp[inPos1] & 255) | 0;
      out[outPos] = Kotlin.toByte(i1_0 + 2 >> 2);
      for (var i = 1; i < width; i++) {
        var i0_0 = i1_0;
        i1_0 = (3 * (inp[inPos0 + i | 0] & 255) | 0) + (inp[inPos1 + i | 0] & 255) | 0;
        out[outPos + (i * 2 | 0) - 1 | 0] = Kotlin.toByte((3 * i0_0 | 0) + i1_0 + 8 >> 4);
        out[outPos + (i * 2 | 0) | 0] = Kotlin.toByte((3 * i1_0 | 0) + i0_0 + 8 >> 4);
      }
      out[outPos + (width * 2 | 0) - 1 | 0] = Kotlin.toByte(i1_0 + 2 >> 2);
    }
  };
  JPEG$JPEGDecoder$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JPEG$JPEGDecoder$Companion_instance = null;
  function JPEG$JPEGDecoder$Companion_getInstance() {
    if (JPEG$JPEGDecoder$Companion_instance === null) {
      new JPEG$JPEGDecoder$Companion();
    }
    return JPEG$JPEGDecoder$Companion_instance;
  }
  JPEG$JPEGDecoder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'JPEGDecoder',
    interfaces: []
  };
  JPEG.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'JPEG',
    interfaces: [ImageFormat]
  };
  var JPEG_instance = null;
  function JPEG_getInstance() {
    if (JPEG_instance === null) {
      new JPEG();
    }
    return JPEG_instance;
  }
  function decode($receiver_0, s_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decode($receiver_0, s_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decode($receiver_0, s_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$props = props_0;
  }
  Coroutine$decode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode.prototype.constructor = Coroutine$decode;
  Coroutine$decode.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$s.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_1ooaqm$(this.result_0, this.local$props.copy_qp3p0u$(this.local$s.basename));
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
  function decode_0($receiver_0, s_0, filename_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_0($receiver_0, s_0, filename_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decode_0($receiver_0, s_0, filename_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$filename = filename_0;
  }
  Coroutine$decode_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_0.prototype.constructor = Coroutine$decode_0;
  Coroutine$decode_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_pdgdrr$(this.result_0, new ImageDecodingProps(this.local$filename));
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
  function decode_1($receiver_0, s_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_1($receiver_0, s_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decode_1($receiver_0, s_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$s = s_0;
    this.local$props = props_0;
  }
  Coroutine$decode_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_1.prototype.constructor = Coroutine$decode_1;
  Coroutine$decode_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_pdgdrr$(this.result_0, this.local$props);
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
  function nativeImageFormatProviders$lambda() {
    return listOf(NativeImageFormatProvider_getInstance());
  }
  var nativeImageFormatProviders;
  function get_nativeImageFormatProviders() {
    new Kotlin.PropertyMetadata('nativeImageFormatProviders');
    return nativeImageFormatProviders.value;
  }
  var nativeImageFormatProvider;
  function displayImage(bmp, continuation) {
    return nativeImageFormatProvider.display_uler2c$(bmp, continuation);
  }
  function decodeImageBytes(bytes_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeImageBytes(bytes_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decodeImageBytes(bytes_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$tmp$ = void 0;
    this.local$nip = void 0;
    this.local$bytes = bytes_0;
    this.local$t = void 0;
  }
  Coroutine$decodeImageBytes.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeImageBytes.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeImageBytes.prototype.constructor = Coroutine$decodeImageBytes;
  Coroutine$decodeImageBytes.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = get_nativeImageFormatProviders().iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }

            this.local$nip = this.local$tmp$.next();
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = this.local$nip.decode_fqrh44$(this.local$bytes, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 5;
            this.local$t = this.exception_0;
            if (!Kotlin.isType(this.local$t, Throwable))
              throw this.local$t;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            throw this.exception_0;
          case 6:
            throw new UnsupportedOperationException('No format supported');
        }
      }
       catch (e) {
        if (this.state_0 === 5)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readNativeImage($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readNativeImage($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readNativeImage($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readNativeImage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readNativeImage.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readNativeImage.prototype.constructor = Coroutine$readNativeImage;
  Coroutine$readNativeImage.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = decodeImageBytes(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
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
  function readImageData($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
  }
  Coroutine$readImageData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData.prototype.constructor = Coroutine$readImageData;
  Coroutine$readImageData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, this.local$props.copy_qp3p0u$(this.local$$receiver.basename));
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
  function readBitmapListNoNative($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$item = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readBitmapListNoNative.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapListNoNative.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapListNoNative.prototype.constructor = Coroutine$readBitmapListNoNative;
  Coroutine$readBitmapListNoNative.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readImageData_1(this.local$$receiver, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver_0 = this.result_0.frames;
            this.local$destination = ArrayList_init(collectionSizeOrDefault(this.local$$receiver_0, 10));
            this.local$tmp$ = this.local$$receiver_0.iterator();
            while (this.local$tmp$.hasNext()) {
              this.local$item = this.local$tmp$.next();
              this.local$destination.add_11rb$(this.local$item.bitmap);
            }

            return this.local$destination;
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
  function readNativeImage_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readNativeImage_0($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readNativeImage_0($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readNativeImage_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readNativeImage_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readNativeImage_0.prototype.constructor = Coroutine$readNativeImage_0;
  Coroutine$readNativeImage_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = decodeImageBytes(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
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
  function readImageData_0($receiver_0, basename_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData_0($receiver_0, basename_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData_0($receiver_0, basename_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$basename = basename_0;
    this.local$formats = formats_0;
  }
  Coroutine$readImageData_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData_0.prototype.constructor = Coroutine$readImageData_0;
  Coroutine$readImageData_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$basename === void 0)
              this.local$basename = 'file.bin';
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.readImageInWorker_1ooaqm$(openSync(this.result_0), new ImageDecodingProps(this.local$basename), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
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
  function readImageDataProps($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageDataProps($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageDataProps($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
  }
  Coroutine$readImageDataProps.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageDataProps.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageDataProps.prototype.constructor = Coroutine$readImageDataProps;
  Coroutine$readImageDataProps.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps('file.bin');
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.readImageInWorker_1ooaqm$(openSync(this.result_0), this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
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
  function readBitmapListNoNative_0($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative_0($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative_0($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$item = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readBitmapListNoNative_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapListNoNative_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapListNoNative_0.prototype.constructor = Coroutine$readBitmapListNoNative_0;
  Coroutine$readBitmapListNoNative_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readImageData_0(this.local$$receiver, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver_0 = this.result_0.frames;
            this.local$destination = ArrayList_init(collectionSizeOrDefault(this.local$$receiver_0, 10));
            this.local$tmp$ = this.local$$receiver_0.iterator();
            while (this.local$tmp$.hasNext()) {
              this.local$item = this.local$tmp$.next();
              this.local$destination.add_11rb$(this.local$item.bitmap);
            }

            return this.local$destination;
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
  function readBitmapInfo($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapInfo($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapInfo($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapInfo.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapInfo.prototype.constructor = Coroutine$readBitmapInfo;
  Coroutine$readBitmapInfo.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.decodeHeader_1ooaqm$(this.result_0, this.local$props);
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
  function readImageData_1($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData_1($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData_1($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readImageData_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readImageData_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readImageData_1.prototype.constructor = Coroutine$readImageData_1;
  Coroutine$readImageData_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, new ImageDecodingProps(this.local$$receiver.basename));
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
  function readBitmapListNoNative_1($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative_1($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative_1($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver_0 = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$item = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapListNoNative_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapListNoNative_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapListNoNative_1.prototype.constructor = Coroutine$readBitmapListNoNative_1;
  Coroutine$readBitmapListNoNative_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.state_0 = 2;
            this.result_0 = readImageData_1(this.local$$receiver, this.local$formats, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver_0 = this.result_0.frames;
            this.local$destination = ArrayList_init(collectionSizeOrDefault(this.local$$receiver_0, 10));
            this.local$tmp$ = this.local$$receiver_0.iterator();
            while (this.local$tmp$.hasNext()) {
              this.local$item = this.local$tmp$.next();
              this.local$destination.add_11rb$(this.local$item.bitmap);
            }

            return this.local$destination;
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
  function readBitmap($receiver, basename, formats, continuation) {
    if (formats === void 0)
      formats = defaultImageFormats;
    return readBitmap_0($receiver, new ImageDecodingProps(basename), formats, continuation);
  }
  function readBitmap_0($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmap($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmap($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$tmp$ = void 0;
    this.local$bytes = void 0;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
    this.local$t = void 0;
  }
  Coroutine$readBitmap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmap.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmap.prototype.constructor = Coroutine$readBitmap;
  Coroutine$readBitmap.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps('file.bin');
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.state_0 = 1;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.local$bytes = this.result_0;
            this.exceptionState_0 = 5;
            if (nativeImageLoadingEnabled) {
              this.state_0 = 3;
              this.result_0 = decodeImageBytes(this.local$bytes, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }

          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.exceptionState_0 = 9;
            this.state_0 = 8;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            this.local$t = this.exception_0;
            if (Kotlin.isType(this.local$t, Throwable)) {
              this.state_0 = 6;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              throw this.local$t;
            }

          case 6:
            this.local$tmp$ = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            return this.local$tmp$;
          case 9:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 9)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmapInfo_0($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapInfo_0($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapInfo_0($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapInfo_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapInfo_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapInfo_0.prototype.constructor = Coroutine$readBitmapInfo_0;
  Coroutine$readBitmapInfo_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.decodeHeader_1ooaqm$(this.result_0);
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
  function readBitmapOptimized($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapOptimized($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapOptimized($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver = $receiver_0;
    this.local$t = void 0;
  }
  Coroutine$readBitmapOptimized.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapOptimized.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapOptimized.prototype.constructor = Coroutine$readBitmapOptimized;
  Coroutine$readBitmapOptimized.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.readSpecial_lmshww$(Kotlin.getKClass(NativeImage), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 6;
            this.local$t = this.exception_0;
            if (Kotlin.isType(this.local$t, Throwable)) {
              printStackTrace(this.local$t);
              this.state_0 = 3;
              this.result_0 = readBitmap_1(this.local$$receiver, void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              throw this.local$t;
            }

          case 3:
            return this.result_0;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            return;
          case 6:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 6)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readBitmap_1($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmap_0($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmap_0($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$tmp$ = void 0;
    this.local$file = void 0;
    this.local$bytes = void 0;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
    this.local$t = void 0;
  }
  Coroutine$readBitmap_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmap_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmap_0.prototype.constructor = Coroutine$readBitmap_0;
  Coroutine$readBitmap_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.local$file = this.local$$receiver;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.local$bytes = this.result_0;
            this.exceptionState_0 = 5;
            if (nativeImageLoadingEnabled) {
              this.state_0 = 3;
              this.result_0 = decodeImageBytes(this.local$bytes, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props.copy_qp3p0u$(this.local$file.basename), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }

          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 3:
            this.local$tmp$ = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.exceptionState_0 = 9;
            this.state_0 = 8;
            continue;
          case 5:
            this.exceptionState_0 = 9;
            this.local$t = this.exception_0;
            if (Kotlin.isType(this.local$t, Throwable)) {
              this.state_0 = 6;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props.copy_qp3p0u$(this.local$file.basename), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              throw this.local$t;
            }

          case 6:
            this.local$tmp$ = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            return this.local$tmp$;
          case 9:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 9)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  var nativeImageLoadingEnabled;
  var disableNativeImageLoading = defineInlineFunction('korim-js.com.soywiz.korim.format.disableNativeImageLoading_o14v8n$', wrapFunction(function () {
    var format = _.com.soywiz.korim.format;
    return function (callback, continuation) {
      var oldNativeImageLoadingEnabled = format.nativeImageLoadingEnabled;
      try {
        format.nativeImageLoadingEnabled = false;
        callback();
      }
      finally {
        format.nativeImageLoadingEnabled = oldNativeImageLoadingEnabled;
      }
    };
  }));
  function readBitmapNoNative($receiver_0, props_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapNoNative($receiver_0, props_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapNoNative($receiver_0, props_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$props = props_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapNoNative.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapNoNative.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapNoNative.prototype.constructor = Coroutine$readBitmapNoNative;
  Coroutine$readBitmapNoNative.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$props === void 0)
              this.local$props = new ImageDecodingProps();
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.readImageInWorker_1ooaqm$(this.result_0, this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0.mainBitmap;
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
  function readBitmapNoNative_0($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapNoNative_0($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapNoNative_0($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapNoNative_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapNoNative_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapNoNative_0.prototype.constructor = Coroutine$readBitmapNoNative_0;
  Coroutine$readBitmapNoNative_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultImageFormats;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.decodeInWorker_nwlife$(this.result_0, this.local$$receiver.basename, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
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
  function writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$writeBitmap($receiver_0, bitmap_0, format_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$bitmap = bitmap_0;
    this.local$format = format_0;
    this.local$props = props_0;
  }
  Coroutine$writeBitmap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeBitmap.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeBitmap.prototype.constructor = Coroutine$writeBitmap;
  Coroutine$writeBitmap.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$format === void 0)
              this.local$format = defaultImageFormats;
            if (this.local$props === void 0)
              this.local$props = new ImageEncodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$format.encodeInWorker_hnx2ev$(this.local$bitmap, this.local$props.copy_x69rha$(this.local$$receiver.basename), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.write_gssovf$(this.result_0, [], this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
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
  function showImageAndWaitExt($receiver, continuation) {
    return showImageAndWait($receiver, continuation);
  }
  function showImagesAndWaitExt($receiver, continuation) {
    return showImagesAndWait($receiver, continuation);
  }
  function showImageAndWait(image_0, continuation_0, suspended) {
    var instance = new Coroutine$showImageAndWait(image_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$showImageAndWait(image_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$image = image_0;
  }
  Coroutine$showImageAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showImageAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showImageAndWait.prototype.constructor = Coroutine$showImageAndWait;
  Coroutine$showImageAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            println('Showing... ' + this.local$image);
            this.state_0 = 2;
            this.result_0 = nativeImageFormatProvider.display_uler2c$(this.local$image, this);
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
  function showImagesAndWait(image_0, continuation_0, suspended) {
    var instance = new Coroutine$showImagesAndWait(image_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$showImagesAndWait(image_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$frame = void 0;
    this.local$image = image_0;
  }
  Coroutine$showImagesAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showImagesAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showImagesAndWait.prototype.constructor = Coroutine$showImagesAndWait;
  Coroutine$showImagesAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.local$image.frames.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            this.local$frame = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = showImageAndWait(this.local$frame.bitmap, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
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
  function PNG() {
    PNG_instance = this;
    ImageFormat.call(this, ['png']);
    this.MAGIC1 = (new Kotlin.Long(-1991225785, 0)).toInt();
    this.MAGIC2 = 218765834;
  }
  function PNG$Colorspace(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PNG$Colorspace_initFields() {
    PNG$Colorspace_initFields = function () {
    };
    PNG$Colorspace$GRAYSCALE_instance = new PNG$Colorspace('GRAYSCALE', 0, 0);
    PNG$Colorspace$RGB_instance = new PNG$Colorspace('RGB', 1, 2);
    PNG$Colorspace$INDEXED_instance = new PNG$Colorspace('INDEXED', 2, 3);
    PNG$Colorspace$GRAYSCALE_ALPHA_instance = new PNG$Colorspace('GRAYSCALE_ALPHA', 3, 4);
    PNG$Colorspace$RGBA_instance = new PNG$Colorspace('RGBA', 4, 6);
    PNG$Colorspace$Companion_getInstance();
  }
  var PNG$Colorspace$GRAYSCALE_instance;
  function PNG$Colorspace$GRAYSCALE_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$GRAYSCALE_instance;
  }
  var PNG$Colorspace$RGB_instance;
  function PNG$Colorspace$RGB_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$RGB_instance;
  }
  var PNG$Colorspace$INDEXED_instance;
  function PNG$Colorspace$INDEXED_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$INDEXED_instance;
  }
  var PNG$Colorspace$GRAYSCALE_ALPHA_instance;
  function PNG$Colorspace$GRAYSCALE_ALPHA_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$GRAYSCALE_ALPHA_instance;
  }
  var PNG$Colorspace$RGBA_instance;
  function PNG$Colorspace$RGBA_getInstance() {
    PNG$Colorspace_initFields();
    return PNG$Colorspace$RGBA_instance;
  }
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  function PNG$Colorspace$Companion() {
    PNG$Colorspace$Companion_instance = this;
    var $receiver = PNG$Colorspace$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.BY_ID = destination;
  }
  PNG$Colorspace$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PNG$Colorspace$Companion_instance = null;
  function PNG$Colorspace$Companion_getInstance() {
    PNG$Colorspace_initFields();
    if (PNG$Colorspace$Companion_instance === null) {
      new PNG$Colorspace$Companion();
    }
    return PNG$Colorspace$Companion_instance;
  }
  PNG$Colorspace.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Colorspace',
    interfaces: [Enum]
  };
  function PNG$Colorspace$values() {
    return [PNG$Colorspace$GRAYSCALE_getInstance(), PNG$Colorspace$RGB_getInstance(), PNG$Colorspace$INDEXED_getInstance(), PNG$Colorspace$GRAYSCALE_ALPHA_getInstance(), PNG$Colorspace$RGBA_getInstance()];
  }
  PNG$Colorspace.values = PNG$Colorspace$values;
  function PNG$Colorspace$valueOf(name) {
    switch (name) {
      case 'GRAYSCALE':
        return PNG$Colorspace$GRAYSCALE_getInstance();
      case 'RGB':
        return PNG$Colorspace$RGB_getInstance();
      case 'INDEXED':
        return PNG$Colorspace$INDEXED_getInstance();
      case 'GRAYSCALE_ALPHA':
        return PNG$Colorspace$GRAYSCALE_ALPHA_getInstance();
      case 'RGBA':
        return PNG$Colorspace$RGBA_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korim.format.PNG.Colorspace.' + name);
    }
  }
  PNG$Colorspace.valueOf_61zpoe$ = PNG$Colorspace$valueOf;
  function PNG$Header(width, height, bitsPerChannel, colorspace, compressionmethod, filtermethod, interlacemethod) {
    this.width = width;
    this.height = height;
    this.bitsPerChannel = bitsPerChannel;
    this.colorspace = colorspace;
    this.compressionmethod = compressionmethod;
    this.filtermethod = filtermethod;
    this.interlacemethod = interlacemethod;
    var tmp$, tmp$_0;
    tmp$ = this.colorspace;
    if (Kotlin.equals(tmp$, PNG$Colorspace$GRAYSCALE_getInstance()))
      tmp$_0 = 1;
    else if (Kotlin.equals(tmp$, PNG$Colorspace$INDEXED_getInstance()))
      tmp$_0 = 1;
    else if (Kotlin.equals(tmp$, PNG$Colorspace$GRAYSCALE_ALPHA_getInstance()))
      tmp$_0 = 2;
    else if (Kotlin.equals(tmp$, PNG$Colorspace$RGB_getInstance()))
      tmp$_0 = 3;
    else if (Kotlin.equals(tmp$, PNG$Colorspace$RGBA_getInstance()))
      tmp$_0 = 4;
    else
      tmp$_0 = 1;
    this.bytes = tmp$_0;
    this.stride = Kotlin.imul(this.width, this.bytes);
  }
  PNG$Header.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Header',
    interfaces: []
  };
  PNG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$;
    try {
      var header = Kotlin.isType(tmp$ = this.readCommon_0(s, true), PNG$Header) ? tmp$ : Kotlin.throwCCE();
      var $receiver = new ImageInfo();
      $receiver.width = header.width;
      $receiver.height = header.height;
      $receiver.bitsPerPixel = header.bitsPerChannel;
      return $receiver;
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        return null;
      }
       else
        throw t;
    }
  };
  function PNG$writeImage$writeChunk(closure$s) {
    return function (name, data) {
      var nameBytes = copyOf(toByteArray(name), 4);
      var crc = new CRC32();
      crc.update_mj6st8$(nameBytes);
      crc.update_mj6st8$(data);
      write32_be_0(closure$s, data.length);
      writeBytes(closure$s, nameBytes);
      writeBytes(closure$s, data);
      write32_be_0(closure$s, crc.value);
    };
  }
  function PNG$writeImage$compress(closure$level) {
    return function (data) {
      if (closure$level === 0) {
        var adler32 = new Adler32();
        var a = data.length / 65535;
        var blocks = Math_0.ceil(a) | 0;
        var lastBlockSize = data.length % 65535;
        var out = new Int8Array(2 + 4 + data.length + (blocks * 5 | 0) | 0);
        var upos = 0;
        var pos = 2;
        write8(out, 0, 120);
        write8(out, 1, 1);
        for (var n = 0; n < blocks; n++) {
          var last = n === (blocks - 1 | 0);
          var size = last ? lastBlockSize : 65535;
          write8(out, pos, last ? 1 : 0);
          write16_le(out, pos + 1 | 0, size);
          write16_le(out, pos + 3 | 0, ~size);
          copyRangeTo(data, upos, out, pos + 5 | 0, size);
          pos = pos + (5 + size) | 0;
          upos = upos + size | 0;
        }
        adler32.update_mj6st8$(data, 0, data.length);
        write32_be(out, pos + 0 | 0, adler32.value);
        return out;
      }
       else {
        return compression.SyncCompression.deflate_ir89t6$(data, closure$level);
      }
    };
  }
  function PNG$writeImage$writeChunk_0(closure$writeChunk) {
    return function (name, initialCapacity, callback) {
      if (initialCapacity === void 0)
        initialCapacity = 4096;
      var tmp$ = closure$writeChunk;
      var initialCapacity_0 = initialCapacity;
      if (initialCapacity_0 === void 0)
        initialCapacity_0 = 4096;
      var buffer = ByteArrayBuffer_init(initialCapacity_0);
      var s = MemorySyncStream(buffer);
      callback(s);
      return tmp$(name, buffer.toByteArray());
    };
  }
  function PNG$writeImage$writeChunkCompressed(closure$compress, closure$writeChunk) {
    return function (name, initialCapacity, callback) {
      if (initialCapacity === void 0)
        initialCapacity = 4096;
      var tmp$ = closure$writeChunk;
      var tmp$_0 = closure$compress;
      var initialCapacity_0 = initialCapacity;
      if (initialCapacity_0 === void 0)
        initialCapacity_0 = 4096;
      var buffer = ByteArrayBuffer_init(initialCapacity_0);
      var s = MemorySyncStream(buffer);
      callback(s);
      return tmp$(name, tmp$_0(buffer.toByteArray()));
    };
  }
  function PNG$writeImage$writeHeader$lambda(closure$width, closure$height, closure$colorspace) {
    return function ($receiver) {
      write32_be_0($receiver, closure$width);
      write32_be_0($receiver, closure$height);
      write8_0($receiver, 8);
      write8_0($receiver, closure$colorspace.id);
      write8_0($receiver, 0);
      write8_0($receiver, 0);
      write8_0($receiver, 0);
      return Unit;
    };
  }
  function PNG$writeImage$writeHeader(closure$width, closure$height, closure$writeChunk) {
    return function (colorspace) {
      closure$writeChunk('IHDR', 13, PNG$writeImage$writeHeader$lambda(closure$width, closure$height, colorspace));
    };
  }
  function PNG$writeImage$lambda(closure$bitmap) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$bitmap.palette;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var c = tmp$[tmp$_0];
        write8_0($receiver, RGBA_getInstance().getR_za3lpa$(c));
        write8_0($receiver, RGBA_getInstance().getG_za3lpa$(c));
        write8_0($receiver, RGBA_getInstance().getB_za3lpa$(c));
      }
      return Unit;
    };
  }
  function PNG$writeImage$lambda_0(closure$bitmap) {
    return function ($receiver) {
      var tmp$, tmp$_0;
      tmp$ = closure$bitmap.palette;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var c = tmp$[tmp$_0];
        write8_0($receiver, RGBA_getInstance().getA_za3lpa$(c));
      }
      return Unit;
    };
  }
  function PNG$writeImage$lambda_1($receiver) {
    return Unit;
  }
  PNG.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$, tmp$_0;
    var bitmap = image.mainBitmap;
    var width = bitmap.width;
    var height = bitmap.height;
    write32_be_0(s, this.MAGIC1);
    write32_be_0(s, this.MAGIC2);
    var writeChunk = PNG$writeImage$writeChunk(s);
    var level = convertRangeClamped(props.quality, 0.0, 1.0, 0.0, 9.0) | 0;
    var compress = PNG$writeImage$compress(level);
    var writeChunk_0 = PNG$writeImage$writeChunk_0(writeChunk);
    var writeChunkCompressed = PNG$writeImage$writeChunkCompressed(compress, writeChunk);
    var writeHeader = PNG$writeImage$writeHeader(width, height, writeChunk_0);
    if (Kotlin.isType(bitmap, Bitmap8)) {
      writeHeader(PNG$Colorspace$INDEXED_getInstance());
      writeChunk_0('PLTE', bitmap.palette.length * 3 | 0, PNG$writeImage$lambda(bitmap));
      writeChunk_0('tRNS', bitmap.palette.length * 1 | 0, PNG$writeImage$lambda_0(bitmap));
      var out = new Int8Array(height + Kotlin.imul(width, height) | 0);
      var pos = 0;
      for (var y = 0; y < height; y++) {
        write8(out, (tmp$ = pos, pos = tmp$ + 1 | 0, tmp$), 0);
        var index = bitmap.index_vux9f0$(0, y);
        copyRangeTo(bitmap.data, index, out, pos, width);
        pos = pos + width | 0;
      }
      writeChunk('IDAT', compress(out));
    }
     else if (Kotlin.isType(bitmap, Bitmap32)) {
      writeHeader(PNG$Colorspace$RGBA_getInstance());
      var out_0 = new Int8Array(height + (Kotlin.imul(width, height) * 4 | 0) | 0);
      var pos_0 = 0;
      for (var y_0 = 0; y_0 < height; y_0++) {
        write8(out_0, (tmp$_0 = pos_0, pos_0 = tmp$_0 + 1 | 0, tmp$_0), 0);
        var index_0 = bitmap.index_vux9f0$(0, y_0);
        if (bitmap.premult) {
          for (var x = 0; x < width; x++) {
            write32_le(out_0, pos_0, RGBA_getInstance().depremultiplyFast_za3lpa$(bitmap.data[index_0 + x | 0]));
            pos_0 = pos_0 + 4 | 0;
          }
        }
         else {
          for (var x_0 = 0; x_0 < width; x_0++) {
            write32_le(out_0, pos_0, bitmap.data[index_0 + x_0 | 0]);
            pos_0 = pos_0 + 4 | 0;
          }
        }
      }
      writeChunk('IDAT', compress(out_0));
    }
    writeChunk_0('IEND', 0, PNG$writeImage$lambda_1);
  };
  function PNG$readCommon$readChunk(closure$pheader, closure$paletteCount, closure$rgbPalette, closure$aPalette, closure$pngdata) {
    return function ($receiver) {
      var tmp$;
      var length = readS32_be_0($receiver);
      var type = readStringz($receiver, 4);
      var data = readStream_0($receiver, Kotlin.Long.fromInt(length));
      var crc = readS32_be_0($receiver);
      if (Kotlin.equals(type, 'IHDR')) {
        var tmp$_0;
        closure$pheader.v = new PNG$Header(readS32_be_0(data), readS32_be_0(data), readU8_0(data), (tmp$_0 = PNG$Colorspace$Companion_getInstance().BY_ID.get_11rb$(readU8_0(data))) != null ? tmp$_0 : PNG$Colorspace$RGBA_getInstance(), readU8_0(data), readU8_0(data), readU8_0(data));
        var header = (tmp$ = closure$pheader.v) != null ? tmp$ : Kotlin.throwNPE();
      }
       else if (Kotlin.equals(type, 'PLTE')) {
        var tmp$_1 = closure$paletteCount;
        var a = closure$paletteCount.v;
        var b = data.length.toInt() / 3 | 0;
        tmp$_1.v = Math_0.max(a, b);
        data.read_mj6st8$(closure$rgbPalette.data, 0, data.length.toInt());
      }
       else if (Kotlin.equals(type, 'tRNS')) {
        var tmp$_2 = closure$paletteCount;
        var a_0 = closure$paletteCount.v;
        var b_0 = data.length.toInt();
        tmp$_2.v = Math_0.max(a_0, b_0);
        data.read_mj6st8$(closure$aPalette.data, 0, data.length.toInt());
      }
       else if (Kotlin.equals(type, 'IDAT'))
        closure$pngdata.append_fqrh44$(readAll(data));
      else
        Kotlin.equals(type, 'IEND');
    };
  }
  PNG.prototype.readCommon_0 = function (s, readHeader) {
    var tmp$, tmp$_0;
    if (readS32_be_0(s) !== this.MAGIC1)
      throw new IllegalArgumentException('Invalid PNG file');
    readS32_be_0(s);
    var pheader = {v: null};
    var pngdata = ByteArrayBuilder_init();
    var rgbPalette = UByteArray_init(3 * 256 | 0);
    var array = new Int8Array(256);
    var tmp$_1;
    tmp$_1 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_1; i++) {
      array[i] = -1;
    }
    var aPalette = new UByteArray(array);
    var paletteCount = {v: 0};
    var readChunk = PNG$readCommon$readChunk(pheader, paletteCount, rgbPalette, aPalette, pngdata);
    while (!get_eof(s)) {
      readChunk(s);
      if (readHeader && pheader.v != null)
        return pheader.v;
    }
    tmp$ = pheader.v;
    if (tmp$ == null) {
      throw new IllegalArgumentException('PNG without header!');
    }
    var header = tmp$;
    var width = header.width;
    var height = header.height;
    var datab = new Int8Array(Kotlin.imul(Kotlin.imul(1 + width | 0, height), header.bytes));
    var stride = header.stride;
    compression.SyncCompression.inflateTo_r9qwmk$(pngdata.toByteArray(), datab);
    var data = openSync(datab);
    var lastRow = UByteArray_init(stride);
    var currentRow = UByteArray_init(stride);
    if (header.bytes === 1) {
      var $receiver = until(0, paletteCount.v);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        var tmp$_3 = destination.add_11rb$;
        var tmp$_4 = RGBA_getInstance();
        var n = (item * 3 | 0) + 0 | 0;
        var tmp$_5 = rgbPalette.data[n] & 255;
        var n_0 = (item * 3 | 0) + 1 | 0;
        var tmp$_6 = rgbPalette.data[n_0] & 255;
        var n_1 = (item * 3 | 0) + 2 | 0;
        tmp$_3.call(destination, tmp$_4.invoke_tjonv8$(tmp$_5, tmp$_6, rgbPalette.data[n_1] & 255, aPalette.data[item] & 255));
      }
      var palette = toIntArray(destination);
      var out = new Bitmap8(width, height, void 0, palette);
      for (var y = 0; y < height; y++) {
        var filter = readU8_0(data);
        data.read_mj6st8$(currentRow.data, 0, stride);
        this.applyFilter_wafytw$(filter, lastRow, currentRow, header.bytes);
        out.setRow_3fbn1q$(y, currentRow.data);
        var temp = currentRow;
        currentRow = lastRow;
        lastRow = temp;
      }
      return out;
    }
     else {
      var row = new Int32Array(width);
      var out_0 = new Bitmap32(width, height);
      for (var y_0 = 0; y_0 < height; y_0++) {
        var filter_0 = readU8_0(data);
        data.read_mj6st8$(currentRow.data, 0, stride);
        this.applyFilter_wafytw$(filter_0, lastRow, currentRow, header.bytes);
        tmp$_0 = header.bytes;
        if (tmp$_0 === 3)
          RGB_getInstance().decode_c0jzf6$(currentRow.data, 0, row, 0, width);
        else if (tmp$_0 === 4)
          RGBA_getInstance().decode_c0jzf6$(currentRow.data, 0, row, 0, width);
        else {
          throw new NotImplementedError_init('An operation is not implemented: ' + ('Bytes: ' + header.bytes));
        }
        out_0.setRow_aio0fn$(y_0, row);
        var temp_0 = currentRow;
        currentRow = lastRow;
        lastRow = temp_0;
      }
      return out_0;
    }
  };
  PNG.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    return new ImageData(listOf(new ImageFrame(Kotlin.isType(tmp$ = this.readCommon_0(s, false), Bitmap) ? tmp$ : Kotlin.throwCCE())));
  };
  PNG.prototype.paethPredictor_qt1dr2$ = function (a, b, c) {
    var p = a + b - c | 0;
    var pa = abs(p - a | 0);
    var pb = abs(p - b | 0);
    var pc = abs(p - c | 0);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
  };
  PNG.prototype.applyFilter_wafytw$ = function (filter, p, c, bpp) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (filter !== 0)
      if (filter === 1) {
        tmp$ = c.size;
        for (var n = bpp; n < tmp$; n++) {
          var tmp$_3 = c.data[n] & 255;
          var n_0 = n - bpp | 0;
          var v = tmp$_3 + (c.data[n_0] & 255) | 0;
          c.data[n] = Kotlin.toByte(v);
        }
      }
       else if (filter === 2) {
        tmp$_0 = c.size;
        for (var n_1 = 0; n_1 < tmp$_0; n_1++) {
          var v_0 = (c.data[n_1] & 255) + (p.data[n_1] & 255) | 0;
          c.data[n_1] = Kotlin.toByte(v_0);
        }
      }
       else if (filter === 3) {
        for (var n_2 = 0; n_2 < bpp; n_2++) {
          var v_1 = (c.data[n_2] & 255) + ((p.data[n_2] & 255) / 2 | 0) | 0;
          c.data[n_2] = Kotlin.toByte(v_1);
        }
        tmp$_1 = c.size;
        for (var n_3 = bpp; n_3 < tmp$_1; n_3++) {
          var tmp$_4 = c.data[n_3] & 255;
          var n_4 = n_3 - bpp | 0;
          var v_2 = tmp$_4 + (((c.data[n_4] & 255) + (p.data[n_3] & 255) | 0) / 2 | 0) | 0;
          c.data[n_3] = Kotlin.toByte(v_2);
        }
      }
       else if (filter === 4) {
        for (var n_5 = 0; n_5 < bpp; n_5++) {
          var v_3 = (c.data[n_5] & 255) + (p.data[n_5] & 255) | 0;
          c.data[n_5] = Kotlin.toByte(v_3);
        }
        tmp$_2 = c.size;
        for (var n_6 = bpp; n_6 < tmp$_2; n_6++) {
          var tmp$_5 = c.data[n_6] & 255;
          var tmp$_6 = this.paethPredictor_qt1dr2$;
          var n_7 = n_6 - bpp | 0;
          var tmp$_7 = c.data[n_7] & 255;
          var tmp$_8 = p.data[n_6] & 255;
          var n_8 = n_6 - bpp | 0;
          var v_4 = tmp$_5 + tmp$_6.call(this, tmp$_7, tmp$_8, p.data[n_8] & 255) | 0;
          c.data[n_6] = Kotlin.toByte(v_4);
        }
      }
       else {
        throw new NotImplementedError_init('An operation is not implemented: ' + ('Filter: ' + filter));
      }
  };
  PNG.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'PNG',
    interfaces: [ImageFormat]
  };
  var PNG_instance = null;
  function PNG_getInstance() {
    if (PNG_instance === null) {
      new PNG();
    }
    return PNG_instance;
  }
  function Adler32() {
    Adler32$Companion_getInstance();
    this.s1_0 = 1;
    this.s2_0 = 0;
  }
  Object.defineProperty(Adler32.prototype, 'value', {
    get: function () {
      return this.s2_0 << 16 | this.s1_0;
    }
  });
  Adler32.prototype.reset_za3lpa$ = function (init) {
    this.s1_0 = init >> 0 & 65535;
    this.s2_0 = init >> 16 & 65535;
  };
  Adler32.prototype.reset = function () {
    this.s1_0 = 1;
    this.s2_0 = 0;
  };
  Adler32.prototype.update_mj6st8$ = function (buf, index, len) {
    var tmp$, tmp$_0, tmp$_1;
    var index_0 = index;
    var len_0 = len;
    if (len_0 === 1) {
      var tmp$_2;
      this.s1_0 = this.s1_0 + (buf[tmp$_2 = index_0, index_0 = tmp$_2 + 1 | 0, tmp$_2] & 255) | 0;
      this.s2_0 = this.s2_0 + this.s1_0 | 0;
      this.s1_0 = this.s1_0 % Adler32$Companion_getInstance().BASE_0;
      this.s2_0 = this.s2_0 % Adler32$Companion_getInstance().BASE_0;
      return;
    }
    var len1 = len_0 / Adler32$Companion_getInstance().NMAX_0 | 0;
    var len2 = len_0 % Adler32$Companion_getInstance().NMAX_0;
    while ((tmp$ = len1, len1 = tmp$ - 1 | 0, tmp$) > 0) {
      var k = Adler32$Companion_getInstance().NMAX_0;
      len_0 = len_0 - k | 0;
      while ((tmp$_0 = k, k = tmp$_0 - 1 | 0, tmp$_0) > 0) {
        var tmp$_3;
        this.s1_0 = this.s1_0 + (buf[tmp$_3 = index_0, index_0 = tmp$_3 + 1 | 0, tmp$_3] & 255) | 0;
        this.s2_0 = this.s2_0 + this.s1_0 | 0;
      }
      this.s1_0 = this.s1_0 % Adler32$Companion_getInstance().BASE_0;
      this.s2_0 = this.s2_0 % Adler32$Companion_getInstance().BASE_0;
    }
    var k_0 = len2;
    len_0 = len_0 - k_0 | 0;
    while ((tmp$_1 = k_0, k_0 = tmp$_1 - 1 | 0, tmp$_1) > 0) {
      var tmp$_4;
      this.s1_0 = this.s1_0 + (buf[tmp$_4 = index_0, index_0 = tmp$_4 + 1 | 0, tmp$_4] & 255) | 0;
      this.s2_0 = this.s2_0 + this.s1_0 | 0;
    }
    this.s1_0 = this.s1_0 % Adler32$Companion_getInstance().BASE_0;
    this.s2_0 = this.s2_0 % Adler32$Companion_getInstance().BASE_0;
  };
  Adler32.prototype.copy = function () {
    var foo = new Adler32();
    foo.s1_0 = this.s1_0;
    foo.s2_0 = this.s2_0;
    return foo;
  };
  function Adler32$Companion() {
    Adler32$Companion_instance = this;
    this.BASE_0 = 65521;
    this.NMAX_0 = 5552;
  }
  Adler32$Companion.prototype.combine_e84ct6$ = function (adler1, adler2, len2) {
    var BASEL = Kotlin.Long.fromInt(65521);
    var sum1;
    var sum2;
    var rem;
    rem = len2.modulo(Kotlin.Long.fromInt(65521));
    sum1 = adler1.and(Kotlin.Long.fromInt(65535));
    sum2 = rem.multiply(sum1);
    sum2 = sum2.modulo(Kotlin.Long.fromInt(65521));
    sum1 = sum1.add(adler2.and(Kotlin.Long.fromInt(65535)).add(Kotlin.Long.fromInt(65521)).subtract(Kotlin.Long.fromInt(1)));
    sum2 = sum2.add(adler1.shiftRight(16).and(Kotlin.Long.fromInt(65535)).add(adler2.shiftRight(16).and(Kotlin.Long.fromInt(65535))).add(Kotlin.Long.fromInt(65521)).subtract(rem));
    if (sum1.compareTo_11rb$(Kotlin.Long.fromInt(65521)) >= 0)
      sum1 = sum1.subtract(Kotlin.Long.fromInt(65521));
    if (sum1.compareTo_11rb$(Kotlin.Long.fromInt(65521)) >= 0)
      sum1 = sum1.subtract(Kotlin.Long.fromInt(65521));
    if (sum2.compareTo_11rb$(Kotlin.Long.fromInt(131042)) >= 0)
      sum2 = sum2.subtract(Kotlin.Long.fromInt(131042));
    if (sum2.compareTo_11rb$(Kotlin.Long.fromInt(65521)) >= 0)
      sum2 = sum2.subtract(Kotlin.Long.fromInt(65521));
    return sum1.or(sum2.shiftLeft(16));
  };
  Adler32$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Adler32$Companion_instance = null;
  function Adler32$Companion_getInstance() {
    if (Adler32$Companion_instance === null) {
      new Adler32$Companion();
    }
    return Adler32$Companion_instance;
  }
  Adler32.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Adler32',
    interfaces: []
  };
  function CRC32() {
    CRC32$Companion_getInstance();
    this.v_0 = 0;
  }
  Object.defineProperty(CRC32.prototype, 'value', {
    get: function () {
      return this.v_0;
    }
  });
  CRC32.prototype.update_mj6st8$ = function (buf, index, len) {
    if (index === void 0)
      index = 0;
    if (len === void 0)
      len = buf.length - index | 0;
    var tmp$, tmp$_0;
    var index_0 = index;
    var len_0 = len;
    var c = ~this.v_0;
    while ((len_0 = len_0 - 1 | 0, len_0) >= 0) {
      c = ((tmp$ = CRC32$Companion_getInstance().crc_table_0) != null ? tmp$ : Kotlin.throwNPE())[(c ^ buf[tmp$_0 = index_0, index_0 = tmp$_0 + 1 | 0, tmp$_0]) & 255] ^ c >>> 8;
    }
    this.v_0 = ~c;
  };
  CRC32.prototype.reset = function () {
    this.v_0 = 0;
  };
  CRC32.prototype.reset_za3lpa$ = function (vv) {
    this.v_0 = vv;
  };
  CRC32.prototype.copy = function () {
    var foo = new CRC32();
    foo.v_0 = this.v_0;
    return foo;
  };
  function CRC32$Companion() {
    CRC32$Companion_instance = this;
    this.crc_table_0 = new Int32Array(256);
    for (var n = 0; n < 256; n++) {
      var c = n;
      var k = 8;
      while ((k = k - 1 | 0, k) >= 0) {
        if ((c & 1) !== 0) {
          c = -306674912 ^ c >>> 1;
        }
         else {
          c = c >>> 1;
        }
      }
      this.crc_table_0[n] = c;
    }
    this.GF2_DIM_0 = 32;
  }
  CRC32$Companion.prototype.combine_e84ct6$ = function (crc1, crc2, len2) {
    var tmp$;
    var crc1_0 = crc1;
    var len2_0 = len2;
    var row;
    var even = Kotlin.longArray(this.GF2_DIM_0);
    var odd = Kotlin.longArray(this.GF2_DIM_0);
    if (len2_0.compareTo_11rb$(Kotlin.Long.fromInt(0)) <= 0)
      return crc1_0;
    odd[0] = new Kotlin.Long(-306674912, 0);
    row = Kotlin.Long.ONE;
    tmp$ = this.GF2_DIM_0;
    for (var n = 1; n < tmp$; n++) {
      odd[n] = row;
      row = row.shiftLeft(1);
    }
    this.gf2_matrix_square_fua24x$(even, odd);
    this.gf2_matrix_square_fua24x$(odd, even);
    do {
      this.gf2_matrix_square_fua24x$(even, odd);
      if (!Kotlin.equals(len2_0.and(Kotlin.Long.ONE), Kotlin.Long.ZERO))
        crc1_0 = this.gf2_matrix_times_0(even, crc1_0);
      len2_0 = len2_0.shiftRight(1);
      if (Kotlin.equals(len2_0, Kotlin.Long.ZERO))
        break;
      this.gf2_matrix_square_fua24x$(odd, even);
      if (!Kotlin.equals(len2_0.and(Kotlin.Long.ONE), Kotlin.Long.ZERO))
        crc1_0 = this.gf2_matrix_times_0(odd, crc1_0);
      len2_0 = len2_0.shiftRight(1);
    }
     while (!Kotlin.equals(len2_0, Kotlin.Long.ZERO));
    crc1_0 = crc1_0.xor(crc2);
    return crc1_0;
  };
  CRC32$Companion.prototype.gf2_matrix_times_0 = function (mat, vec) {
    var vec_0 = vec;
    var sum = Kotlin.Long.ZERO;
    var index = 0;
    while (!Kotlin.equals(vec_0, Kotlin.Long.ZERO)) {
      if (!Kotlin.equals(vec_0.and(Kotlin.Long.ONE), Kotlin.Long.ZERO))
        sum = sum.xor(mat[index]);
      vec_0 = vec_0.shiftRight(1);
      index = index + 1 | 0;
    }
    return sum;
  };
  CRC32$Companion.prototype.gf2_matrix_square_fua24x$ = function (square, mat) {
    var tmp$;
    tmp$ = this.GF2_DIM_0;
    for (var n = 0; n < tmp$; n++)
      square[n] = this.gf2_matrix_times_0(mat, mat[n]);
  };
  Object.defineProperty(CRC32$Companion.prototype, 'crC32Table', {
    get: function () {
      var tmp = new Int32Array(this.crc_table_0.length);
      copyTo(this.crc_table_0, 0, tmp, 0, tmp.length);
      return tmp;
    }
  });
  CRC32$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var CRC32$Companion_instance = null;
  function CRC32$Companion_getInstance() {
    if (CRC32$Companion_instance === null) {
      new CRC32$Companion();
    }
    return CRC32$Companion_instance;
  }
  CRC32.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CRC32',
    interfaces: []
  };
  function PSD() {
    PSD_instance = this;
    ImageFormat.call(this, ['psd']);
  }
  PSD.prototype.readImage_1ooaqm$$default = function (s, props) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'not implemented');
  };
  PSD.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!Kotlin.equals(readStringz(s, 4), '8BPS'))
      return null;
    var version = readU16_be_0(s);
    if (version !== 1)
      if (version === 2)
        return null;
      else
        return null;
    s.position = s.position.add(Kotlin.Long.fromInt(6));
    var channels = readU16_be_0(s);
    var height = readS32_be_0(s);
    var width = readS32_be_0(s);
    var bitsPerChannel = readU16_be_0(s);
    var colorMode = readU16_be_0(s);
    var $receiver = new ImageInfo();
    $receiver.width = width;
    $receiver.height = height;
    $receiver.bitsPerPixel = Kotlin.imul($receiver.bitsPerPixel, channels);
    return $receiver;
  };
  PSD.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'PSD',
    interfaces: [ImageFormat]
  };
  var PSD_instance = null;
  function PSD_getInstance() {
    if (PSD_instance === null) {
      new PSD();
    }
    return PSD_instance;
  }
  function SVG() {
    SVG_instance = this;
    ImageFormat.call(this, ['svg']);
  }
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  SVG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$ = slice(s);
    var b = s.length.toInt();
    var $receiver = readString(tmp$, Math_0.min(100, b));
    var tmp$_0;
    var start = trim(Kotlin.isCharSequence(tmp$_0 = $receiver) ? tmp$_0 : Kotlin.throwCCE()).toString().toLowerCase();
    try {
      if (startsWith(start, '<svg') || startsWith(start, '<?xml')) {
        var $receiver_0 = toString(readAll(slice(s)), lang.Charsets.UTF_8);
        var tmp$_1;
        var content = trim(Kotlin.isCharSequence(tmp$_1 = $receiver_0) ? tmp$_1 : Kotlin.throwCCE()).toString();
        var svg = SVG_init(content);
        var $receiver_1 = new ImageInfo();
        $receiver_1.width = svg.width;
        $receiver_1.height = svg.height;
        return $receiver_1;
      }
       else {
        return null;
      }
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        return null;
      }
       else
        throw t;
    }
  };
  SVG.prototype.readImage_1ooaqm$$default = function (s, props) {
    var $receiver = toString(readAll(slice(s)), lang.Charsets.UTF_8);
    var tmp$;
    var content = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : Kotlin.throwCCE()).toString();
    var svg = SVG_init(content);
    return new ImageData(listOf(new ImageFrame(render_0(svg).toBmp32())));
  };
  SVG.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SVG',
    interfaces: [ImageFormat]
  };
  var SVG_instance = null;
  function SVG_getInstance() {
    if (SVG_instance === null) {
      new SVG();
    }
    return SVG_instance;
  }
  var StandardImageFormats;
  function registerStandard($receiver) {
    $receiver.register_ld8ot4$(StandardImageFormats);
    return $receiver;
  }
  function TGA() {
    TGA_instance = this;
    ImageFormat.call(this, ['tga']);
  }
  TGA.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    try {
      var h = this.readHeader_39qel5$(s);
      var $receiver = new ImageInfo();
      $receiver.width = h.width;
      $receiver.height = h.height;
      $receiver.bitsPerPixel = h.bitsPerPixel;
      return $receiver;
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        return null;
      }
       else
        throw t;
    }
  };
  function TGA$Info(width, height, flipY, bitsPerPixel) {
    this.width = width;
    this.height = height;
    this.flipY = flipY;
    this.bitsPerPixel = bitsPerPixel;
    this.area = Kotlin.imul(this.width, this.height);
    this.bytes = this.bitsPerPixel / 8 | 0;
  }
  TGA$Info.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  TGA.prototype.readHeader_39qel5$ = function (s) {
    var idLength = readU8_0(s);
    var colorMapType = readU8_0(s);
    var imageType = readU8_0(s);
    if (imageType === 1) {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported indexed');
    }
     else if (imageType !== 2)
      if (imageType === 9 || imageType === 10) {
        throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported RLE');
      }
       else {
        throw new NotImplementedError_init('An operation is not implemented: ' + 'Unknown TGA');
      }
    var firstIndexEntry = readU16_le_0(s);
    var colorMapLength = readU16_le_0(s);
    var colorMapEntrySize = readU8_0(s);
    s.position = s.position.add(Kotlin.Long.fromInt(Kotlin.imul(colorMapLength, colorMapEntrySize)));
    var xorig = readS16_le(s);
    var yorig = readS16_le(s);
    var width = readS16_le(s);
    var height = readS16_le(s);
    var pixelDepth = readU8_0(s);
    if (pixelDepth !== 24 && pixelDepth !== 32) {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Not a RGBA tga');
    }
    var imageDescriptor = readU8_0(s);
    var flipY = (imageDescriptor >>> 5 & 1) === 0;
    var storage = imageDescriptor >>> 6 & 3;
    readBytes(s, idLength);
    return new TGA$Info(width, height, flipY, pixelDepth);
  };
  TGA.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    var info = this.readHeader_39qel5$(s);
    tmp$ = info.bitsPerPixel;
    if (tmp$ === 24)
      tmp$_0 = RGB_getInstance();
    else if (tmp$ === 32)
      tmp$_0 = RGBA_getInstance();
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Not a RGBA tga');
    }
    var format = tmp$_0;
    var out = (new Bitmap32(info.width, info.height)).writeDecoded_77vltg$(format, readBytes(s, Kotlin.imul(info.area, info.bytes)));
    if (info.flipY)
      out.flipY();
    return new ImageData(listOf(new ImageFrame(out)));
  };
  TGA.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var bitmap = image.mainBitmap;
    if (Kotlin.isType(bitmap, Bitmap8)) {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented encoding TGA Bitmap8');
    }
     else if (Kotlin.isType(bitmap, Bitmap32)) {
      var data = new Int8Array(bitmap.area * 4 | 0);
      var m = 0;
      tmp$ = bitmap.data;
      for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
        var c = tmp$[tmp$_0];
        data[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = Kotlin.toByte(RGBA_getInstance().getR_za3lpa$(c));
        data[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = Kotlin.toByte(RGBA_getInstance().getG_za3lpa$(c));
        data[tmp$_3 = m, m = tmp$_3 + 1 | 0, tmp$_3] = Kotlin.toByte(RGBA_getInstance().getB_za3lpa$(c));
        data[tmp$_4 = m, m = tmp$_4 + 1 | 0, tmp$_4] = Kotlin.toByte(RGBA_getInstance().getA_za3lpa$(c));
      }
      write8_0(s, 0);
      write8_0(s, 0);
      write8_0(s, 2);
      write16_le_0(s, 0);
      write16_le_0(s, 0);
      write8_0(s, 0);
      write16_le_0(s, 0);
      write16_le_0(s, 0);
      write16_le_0(s, bitmap.width);
      write16_le_0(s, bitmap.height);
      write8_0(s, 32);
      write8_0(s, 8);
      writeBytes(s, data);
    }
  };
  TGA.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'TGA',
    interfaces: [ImageFormat]
  };
  var TGA_instance = null;
  function TGA_getInstance() {
    if (TGA_instance === null) {
      new TGA();
    }
    return TGA_instance;
  }
  function render($receiver) {
    var tmp$;
    var colors = listOf_0([Colors_getInstance().RED, Colors_getInstance().GREEN, Colors_getInstance().BLUE, Colors_getInstance().BLACK]);
    var bounds_0 = bounds($receiver);
    var out = new Bitmap32(bounds_0.width | 0, bounds_0.height | 0);
    tmp$ = withIndex_0($receiver).iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var index = tmp$_0.component1()
      , r = tmp$_0.component2();
      var color = colors.get_za3lpa$(index % colors.size);
      out.fill_4qozqa$(color, r.x | 0, r.y | 0, r.width | 0, r.height | 0);
    }
    return out;
  }
  function Bitmap32Context2d(bmp) {
    Context2d$Renderer.call(this);
    this.bmp = bmp;
  }
  Object.defineProperty(Bitmap32Context2d.prototype, 'width', {
    get: function () {
      return this.bmp.width;
    }
  });
  Object.defineProperty(Bitmap32Context2d.prototype, 'height', {
    get: function () {
      return this.bmp.height;
    }
  });
  Bitmap32Context2d.prototype.render_w64o9o$ = function (state, fill) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented context2d on Bitmap32, please use NativeImage instead');
  };
  Bitmap32Context2d.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Bitmap32Context2d',
    interfaces: [Context2d$Renderer]
  };
  var RedirectMutableFieldGen_init = $module$korio_js.com.soywiz.korio.util.RedirectMutableFieldGen;
  function Context2d(renderer) {
    this.renderer = renderer;
    this.state = new Context2d$State();
    this.stack_0 = new LinkedList();
    this.lineScaleMode_uvt0g7$_0 = new RedirectMutableFieldGen_init(Context2d$lineScaleMode$lambda(this));
    this.lineWidth_eizzma$_0 = new RedirectMutableFieldGen_init(Context2d$lineWidth$lambda(this));
    this.lineCap_3v9p9a$_0 = new RedirectMutableFieldGen_init(Context2d$lineCap$lambda(this));
    this.strokeStyle_b8jfmh$_0 = new RedirectMutableFieldGen_init(Context2d$strokeStyle$lambda(this));
    this.fillStyle_mocpqm$_0 = new RedirectMutableFieldGen_init(Context2d$fillStyle$lambda(this));
    this.font_hw4l97$_0 = new RedirectMutableFieldGen_init(Context2d$font$lambda(this));
    this.verticalAlign_9mcoep$_0 = new RedirectMutableFieldGen_init(Context2d$verticalAlign$lambda(this));
    this.horizontalAlign_o0d4qn$_0 = new RedirectMutableFieldGen_init(Context2d$horizontalAlign$lambda(this));
    this.globalAlpha_l2yrp7$_0 = new RedirectMutableFieldGen_init(Context2d$globalAlpha$lambda(this));
    this.none = Context2d$None_getInstance();
  }
  Object.defineProperty(Context2d.prototype, 'width', {
    get: function () {
      return this.renderer.width;
    }
  });
  Object.defineProperty(Context2d.prototype, 'height', {
    get: function () {
      return this.renderer.height;
    }
  });
  function Context2d$LineCap(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$LineCap_initFields() {
    Context2d$LineCap_initFields = function () {
    };
    Context2d$LineCap$BUTT_instance = new Context2d$LineCap('BUTT', 0);
    Context2d$LineCap$ROUND_instance = new Context2d$LineCap('ROUND', 1);
    Context2d$LineCap$SQUARE_instance = new Context2d$LineCap('SQUARE', 2);
  }
  var Context2d$LineCap$BUTT_instance;
  function Context2d$LineCap$BUTT_getInstance() {
    Context2d$LineCap_initFields();
    return Context2d$LineCap$BUTT_instance;
  }
  var Context2d$LineCap$ROUND_instance;
  function Context2d$LineCap$ROUND_getInstance() {
    Context2d$LineCap_initFields();
    return Context2d$LineCap$ROUND_instance;
  }
  var Context2d$LineCap$SQUARE_instance;
  function Context2d$LineCap$SQUARE_getInstance() {
    Context2d$LineCap_initFields();
    return Context2d$LineCap$SQUARE_instance;
  }
  Context2d$LineCap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LineCap',
    interfaces: [Enum]
  };
  function Context2d$LineCap$values() {
    return [Context2d$LineCap$BUTT_getInstance(), Context2d$LineCap$ROUND_getInstance(), Context2d$LineCap$SQUARE_getInstance()];
  }
  Context2d$LineCap.values = Context2d$LineCap$values;
  function Context2d$LineCap$valueOf(name) {
    switch (name) {
      case 'BUTT':
        return Context2d$LineCap$BUTT_getInstance();
      case 'ROUND':
        return Context2d$LineCap$ROUND_getInstance();
      case 'SQUARE':
        return Context2d$LineCap$SQUARE_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korim.vector.Context2d.LineCap.' + name);
    }
  }
  Context2d$LineCap.valueOf_61zpoe$ = Context2d$LineCap$valueOf;
  function Context2d$LineJoin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$LineJoin_initFields() {
    Context2d$LineJoin_initFields = function () {
    };
    Context2d$LineJoin$BEVEL_instance = new Context2d$LineJoin('BEVEL', 0);
    Context2d$LineJoin$MITER_instance = new Context2d$LineJoin('MITER', 1);
    Context2d$LineJoin$ROUND_instance = new Context2d$LineJoin('ROUND', 2);
  }
  var Context2d$LineJoin$BEVEL_instance;
  function Context2d$LineJoin$BEVEL_getInstance() {
    Context2d$LineJoin_initFields();
    return Context2d$LineJoin$BEVEL_instance;
  }
  var Context2d$LineJoin$MITER_instance;
  function Context2d$LineJoin$MITER_getInstance() {
    Context2d$LineJoin_initFields();
    return Context2d$LineJoin$MITER_instance;
  }
  var Context2d$LineJoin$ROUND_instance;
  function Context2d$LineJoin$ROUND_getInstance() {
    Context2d$LineJoin_initFields();
    return Context2d$LineJoin$ROUND_instance;
  }
  Context2d$LineJoin.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LineJoin',
    interfaces: [Enum]
  };
  function Context2d$LineJoin$values() {
    return [Context2d$LineJoin$BEVEL_getInstance(), Context2d$LineJoin$MITER_getInstance(), Context2d$LineJoin$ROUND_getInstance()];
  }
  Context2d$LineJoin.values = Context2d$LineJoin$values;
  function Context2d$LineJoin$valueOf(name) {
    switch (name) {
      case 'BEVEL':
        return Context2d$LineJoin$BEVEL_getInstance();
      case 'MITER':
        return Context2d$LineJoin$MITER_getInstance();
      case 'ROUND':
        return Context2d$LineJoin$ROUND_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korim.vector.Context2d.LineJoin.' + name);
    }
  }
  Context2d$LineJoin.valueOf_61zpoe$ = Context2d$LineJoin$valueOf;
  function Context2d$CycleMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$CycleMethod_initFields() {
    Context2d$CycleMethod_initFields = function () {
    };
    Context2d$CycleMethod$NO_CYCLE_instance = new Context2d$CycleMethod('NO_CYCLE', 0);
    Context2d$CycleMethod$REFLECT_instance = new Context2d$CycleMethod('REFLECT', 1);
    Context2d$CycleMethod$REPEAT_instance = new Context2d$CycleMethod('REPEAT', 2);
  }
  var Context2d$CycleMethod$NO_CYCLE_instance;
  function Context2d$CycleMethod$NO_CYCLE_getInstance() {
    Context2d$CycleMethod_initFields();
    return Context2d$CycleMethod$NO_CYCLE_instance;
  }
  var Context2d$CycleMethod$REFLECT_instance;
  function Context2d$CycleMethod$REFLECT_getInstance() {
    Context2d$CycleMethod_initFields();
    return Context2d$CycleMethod$REFLECT_instance;
  }
  var Context2d$CycleMethod$REPEAT_instance;
  function Context2d$CycleMethod$REPEAT_getInstance() {
    Context2d$CycleMethod_initFields();
    return Context2d$CycleMethod$REPEAT_instance;
  }
  Context2d$CycleMethod.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CycleMethod',
    interfaces: [Enum]
  };
  function Context2d$CycleMethod$values() {
    return [Context2d$CycleMethod$NO_CYCLE_getInstance(), Context2d$CycleMethod$REFLECT_getInstance(), Context2d$CycleMethod$REPEAT_getInstance()];
  }
  Context2d$CycleMethod.values = Context2d$CycleMethod$values;
  function Context2d$CycleMethod$valueOf(name) {
    switch (name) {
      case 'NO_CYCLE':
        return Context2d$CycleMethod$NO_CYCLE_getInstance();
      case 'REFLECT':
        return Context2d$CycleMethod$REFLECT_getInstance();
      case 'REPEAT':
        return Context2d$CycleMethod$REPEAT_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korim.vector.Context2d.CycleMethod.' + name);
    }
  }
  Context2d$CycleMethod.valueOf_61zpoe$ = Context2d$CycleMethod$valueOf;
  function Context2d$ShapeRasterizerMethod(name, ordinal, scale) {
    Enum.call(this);
    this.scale = scale;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$ShapeRasterizerMethod_initFields() {
    Context2d$ShapeRasterizerMethod_initFields = function () {
    };
    Context2d$ShapeRasterizerMethod$NONE_instance = new Context2d$ShapeRasterizerMethod('NONE', 0, 0.0);
    Context2d$ShapeRasterizerMethod$X1_instance = new Context2d$ShapeRasterizerMethod('X1', 1, 1.0);
    Context2d$ShapeRasterizerMethod$X2_instance = new Context2d$ShapeRasterizerMethod('X2', 2, 2.0);
    Context2d$ShapeRasterizerMethod$X4_instance = new Context2d$ShapeRasterizerMethod('X4', 3, 4.0);
  }
  var Context2d$ShapeRasterizerMethod$NONE_instance;
  function Context2d$ShapeRasterizerMethod$NONE_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$NONE_instance;
  }
  var Context2d$ShapeRasterizerMethod$X1_instance;
  function Context2d$ShapeRasterizerMethod$X1_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$X1_instance;
  }
  var Context2d$ShapeRasterizerMethod$X2_instance;
  function Context2d$ShapeRasterizerMethod$X2_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$X2_instance;
  }
  var Context2d$ShapeRasterizerMethod$X4_instance;
  function Context2d$ShapeRasterizerMethod$X4_getInstance() {
    Context2d$ShapeRasterizerMethod_initFields();
    return Context2d$ShapeRasterizerMethod$X4_instance;
  }
  Context2d$ShapeRasterizerMethod.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ShapeRasterizerMethod',
    interfaces: [Enum]
  };
  function Context2d$ShapeRasterizerMethod$values() {
    return [Context2d$ShapeRasterizerMethod$NONE_getInstance(), Context2d$ShapeRasterizerMethod$X1_getInstance(), Context2d$ShapeRasterizerMethod$X2_getInstance(), Context2d$ShapeRasterizerMethod$X4_getInstance()];
  }
  Context2d$ShapeRasterizerMethod.values = Context2d$ShapeRasterizerMethod$values;
  function Context2d$ShapeRasterizerMethod$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Context2d$ShapeRasterizerMethod$NONE_getInstance();
      case 'X1':
        return Context2d$ShapeRasterizerMethod$X1_getInstance();
      case 'X2':
        return Context2d$ShapeRasterizerMethod$X2_getInstance();
      case 'X4':
        return Context2d$ShapeRasterizerMethod$X4_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korim.vector.Context2d.ShapeRasterizerMethod.' + name);
    }
  }
  Context2d$ShapeRasterizerMethod.valueOf_61zpoe$ = Context2d$ShapeRasterizerMethod$valueOf;
  function Context2d$Renderer() {
    Context2d$Renderer$Companion_getInstance();
  }
  function Context2d$Renderer$Companion() {
    Context2d$Renderer$Companion_instance = this;
    this.DUMMY = new Context2d$Renderer$Companion$DUMMY$ObjectLiteral();
  }
  function Context2d$Renderer$Companion$DUMMY$ObjectLiteral() {
    Context2d$Renderer.call(this);
    this.width_uh5bgs$_0 = 128;
    this.height_cguacb$_0 = 128;
  }
  Object.defineProperty(Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.width_uh5bgs$_0;
    }
  });
  Object.defineProperty(Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.height_cguacb$_0;
    }
  });
  Context2d$Renderer$Companion$DUMMY$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Context2d$Renderer]
  };
  Context2d$Renderer$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Context2d$Renderer$Companion_instance = null;
  function Context2d$Renderer$Companion_getInstance() {
    if (Context2d$Renderer$Companion_instance === null) {
      new Context2d$Renderer$Companion();
    }
    return Context2d$Renderer$Companion_instance;
  }
  Context2d$Renderer.prototype.render_w64o9o$ = function (state, fill) {
  };
  Context2d$Renderer.prototype.renderText_2jdvt1$ = function (state, font, text, x, y, fill) {
  };
  Context2d$Renderer.prototype.getBounds_qlucl1$ = function (font, text, out) {
    out.bounds.setTo_6y0v78$(0.0, 0.0, 0.0, 0.0);
  };
  Context2d$Renderer.prototype.drawImage_4amb17$$default = function (image, x, y, width, height, transform) {
  };
  Context2d$Renderer.prototype.drawImage_4amb17$ = function (image, x, y, width, height, transform, callback$default) {
    if (width === void 0)
      width = image.width;
    if (height === void 0)
      height = image.height;
    if (transform === void 0)
      transform = new Matrix2d();
    callback$default ? callback$default(image, x, y, width, height, transform) : this.drawImage_4amb17$$default(image, x, y, width, height, transform);
  };
  Context2d$Renderer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Renderer',
    interfaces: []
  };
  function Context2d$VerticalAlign(name, ordinal, ratio) {
    Enum.call(this);
    this.ratio = ratio;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$VerticalAlign_initFields() {
    Context2d$VerticalAlign_initFields = function () {
    };
    Context2d$VerticalAlign$TOP_instance = new Context2d$VerticalAlign('TOP', 0, 0.0);
    Context2d$VerticalAlign$MIDLE_instance = new Context2d$VerticalAlign('MIDLE', 1, 0.5);
    Context2d$VerticalAlign$BASELINE_instance = new Context2d$VerticalAlign('BASELINE', 2, 1.0);
    Context2d$VerticalAlign$BOTTOM_instance = new Context2d$VerticalAlign('BOTTOM', 3, 1.0);
  }
  var Context2d$VerticalAlign$TOP_instance;
  function Context2d$VerticalAlign$TOP_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$TOP_instance;
  }
  var Context2d$VerticalAlign$MIDLE_instance;
  function Context2d$VerticalAlign$MIDLE_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$MIDLE_instance;
  }
  var Context2d$VerticalAlign$BASELINE_instance;
  function Context2d$VerticalAlign$BASELINE_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$BASELINE_instance;
  }
  var Context2d$VerticalAlign$BOTTOM_instance;
  function Context2d$VerticalAlign$BOTTOM_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$BOTTOM_instance;
  }
  Context2d$VerticalAlign.prototype.getOffsetY_lu1900$ = function (height, baseline) {
    if (Kotlin.equals(this, Context2d$VerticalAlign$BASELINE_getInstance()))
      return baseline;
    else
      return height * this.ratio;
  };
  Context2d$VerticalAlign.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VerticalAlign',
    interfaces: [Enum]
  };
  function Context2d$VerticalAlign$values() {
    return [Context2d$VerticalAlign$TOP_getInstance(), Context2d$VerticalAlign$MIDLE_getInstance(), Context2d$VerticalAlign$BASELINE_getInstance(), Context2d$VerticalAlign$BOTTOM_getInstance()];
  }
  Context2d$VerticalAlign.values = Context2d$VerticalAlign$values;
  function Context2d$VerticalAlign$valueOf(name) {
    switch (name) {
      case 'TOP':
        return Context2d$VerticalAlign$TOP_getInstance();
      case 'MIDLE':
        return Context2d$VerticalAlign$MIDLE_getInstance();
      case 'BASELINE':
        return Context2d$VerticalAlign$BASELINE_getInstance();
      case 'BOTTOM':
        return Context2d$VerticalAlign$BOTTOM_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korim.vector.Context2d.VerticalAlign.' + name);
    }
  }
  Context2d$VerticalAlign.valueOf_61zpoe$ = Context2d$VerticalAlign$valueOf;
  function Context2d$HorizontalAlign(name, ordinal, ratio) {
    Enum.call(this);
    this.ratio = ratio;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$HorizontalAlign_initFields() {
    Context2d$HorizontalAlign_initFields = function () {
    };
    Context2d$HorizontalAlign$LEFT_instance = new Context2d$HorizontalAlign('LEFT', 0, 0.0);
    Context2d$HorizontalAlign$CENTER_instance = new Context2d$HorizontalAlign('CENTER', 1, 0.5);
    Context2d$HorizontalAlign$RIGHT_instance = new Context2d$HorizontalAlign('RIGHT', 2, 1.0);
  }
  var Context2d$HorizontalAlign$LEFT_instance;
  function Context2d$HorizontalAlign$LEFT_getInstance() {
    Context2d$HorizontalAlign_initFields();
    return Context2d$HorizontalAlign$LEFT_instance;
  }
  var Context2d$HorizontalAlign$CENTER_instance;
  function Context2d$HorizontalAlign$CENTER_getInstance() {
    Context2d$HorizontalAlign_initFields();
    return Context2d$HorizontalAlign$CENTER_instance;
  }
  var Context2d$HorizontalAlign$RIGHT_instance;
  function Context2d$HorizontalAlign$RIGHT_getInstance() {
    Context2d$HorizontalAlign_initFields();
    return Context2d$HorizontalAlign$RIGHT_instance;
  }
  Context2d$HorizontalAlign.prototype.getOffsetX_14dthe$ = function (width) {
    return width * this.ratio;
  };
  Context2d$HorizontalAlign.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HorizontalAlign',
    interfaces: [Enum]
  };
  function Context2d$HorizontalAlign$values() {
    return [Context2d$HorizontalAlign$LEFT_getInstance(), Context2d$HorizontalAlign$CENTER_getInstance(), Context2d$HorizontalAlign$RIGHT_getInstance()];
  }
  Context2d$HorizontalAlign.values = Context2d$HorizontalAlign$values;
  function Context2d$HorizontalAlign$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return Context2d$HorizontalAlign$LEFT_getInstance();
      case 'CENTER':
        return Context2d$HorizontalAlign$CENTER_getInstance();
      case 'RIGHT':
        return Context2d$HorizontalAlign$RIGHT_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korim.vector.Context2d.HorizontalAlign.' + name);
    }
  }
  Context2d$HorizontalAlign.valueOf_61zpoe$ = Context2d$HorizontalAlign$valueOf;
  function Context2d$ScaleMode(name, ordinal, hScale, vScale) {
    Enum.call(this);
    this.hScale = hScale;
    this.vScale = vScale;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$ScaleMode_initFields() {
    Context2d$ScaleMode_initFields = function () {
    };
    Context2d$ScaleMode$NONE_instance = new Context2d$ScaleMode('NONE', 0, false, false);
    Context2d$ScaleMode$HORIZONTAL_instance = new Context2d$ScaleMode('HORIZONTAL', 1, true, false);
    Context2d$ScaleMode$VERTICAL_instance = new Context2d$ScaleMode('VERTICAL', 2, false, true);
    Context2d$ScaleMode$NORMAL_instance = new Context2d$ScaleMode('NORMAL', 3, true, true);
  }
  var Context2d$ScaleMode$NONE_instance;
  function Context2d$ScaleMode$NONE_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$NONE_instance;
  }
  var Context2d$ScaleMode$HORIZONTAL_instance;
  function Context2d$ScaleMode$HORIZONTAL_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$HORIZONTAL_instance;
  }
  var Context2d$ScaleMode$VERTICAL_instance;
  function Context2d$ScaleMode$VERTICAL_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$VERTICAL_instance;
  }
  var Context2d$ScaleMode$NORMAL_instance;
  function Context2d$ScaleMode$NORMAL_getInstance() {
    Context2d$ScaleMode_initFields();
    return Context2d$ScaleMode$NORMAL_instance;
  }
  Context2d$ScaleMode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ScaleMode',
    interfaces: [Enum]
  };
  function Context2d$ScaleMode$values() {
    return [Context2d$ScaleMode$NONE_getInstance(), Context2d$ScaleMode$HORIZONTAL_getInstance(), Context2d$ScaleMode$VERTICAL_getInstance(), Context2d$ScaleMode$NORMAL_getInstance()];
  }
  Context2d$ScaleMode.values = Context2d$ScaleMode$values;
  function Context2d$ScaleMode$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Context2d$ScaleMode$NONE_getInstance();
      case 'HORIZONTAL':
        return Context2d$ScaleMode$HORIZONTAL_getInstance();
      case 'VERTICAL':
        return Context2d$ScaleMode$VERTICAL_getInstance();
      case 'NORMAL':
        return Context2d$ScaleMode$NORMAL_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korim.vector.Context2d.ScaleMode.' + name);
    }
  }
  Context2d$ScaleMode.valueOf_61zpoe$ = Context2d$ScaleMode$valueOf;
  function Context2d$State(transform, clip, path, lineScaleMode, lineWidth, lineCap, lineJoin, miterLimit, strokeStyle, fillStyle, font, verticalAlign, horizontalAlign, globalAlpha) {
    if (transform === void 0)
      transform = new Matrix2d();
    if (clip === void 0)
      clip = null;
    if (path === void 0)
      path = new GraphicsPath();
    if (lineScaleMode === void 0)
      lineScaleMode = Context2d$ScaleMode$NORMAL_getInstance();
    if (lineWidth === void 0)
      lineWidth = 1.0;
    if (lineCap === void 0)
      lineCap = Context2d$LineCap$BUTT_getInstance();
    if (lineJoin === void 0)
      lineJoin = Context2d$LineJoin$MITER_getInstance();
    if (miterLimit === void 0)
      miterLimit = 10.0;
    if (strokeStyle === void 0)
      strokeStyle = new Context2d$Color(Colors_getInstance().BLACK);
    if (fillStyle === void 0)
      fillStyle = new Context2d$Color(Colors_getInstance().BLACK);
    if (font === void 0)
      font = new Context2d$Font('sans-serif', 10.0);
    if (verticalAlign === void 0)
      verticalAlign = Context2d$VerticalAlign$BASELINE_getInstance();
    if (horizontalAlign === void 0)
      horizontalAlign = Context2d$HorizontalAlign$LEFT_getInstance();
    if (globalAlpha === void 0)
      globalAlpha = 1.0;
    this.transform = transform;
    this.clip = clip;
    this.path = path;
    this.lineScaleMode = lineScaleMode;
    this.lineWidth = lineWidth;
    this.lineCap = lineCap;
    this.lineJoin = lineJoin;
    this.miterLimit = miterLimit;
    this.strokeStyle = strokeStyle;
    this.fillStyle = fillStyle;
    this.font = font;
    this.verticalAlign = verticalAlign;
    this.horizontalAlign = horizontalAlign;
    this.globalAlpha = globalAlpha;
  }
  Context2d$State.prototype.clone = function () {
    var tmp$;
    return this.copy_ihvang$(this.transform.clone(), (tmp$ = this.clip) != null ? tmp$.clone() : null, this.path.clone());
  };
  Context2d$State.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'State',
    interfaces: []
  };
  Context2d$State.prototype.component1 = function () {
    return this.transform;
  };
  Context2d$State.prototype.component2 = function () {
    return this.clip;
  };
  Context2d$State.prototype.component3 = function () {
    return this.path;
  };
  Context2d$State.prototype.component4 = function () {
    return this.lineScaleMode;
  };
  Context2d$State.prototype.component5 = function () {
    return this.lineWidth;
  };
  Context2d$State.prototype.component6 = function () {
    return this.lineCap;
  };
  Context2d$State.prototype.component7 = function () {
    return this.lineJoin;
  };
  Context2d$State.prototype.component8 = function () {
    return this.miterLimit;
  };
  Context2d$State.prototype.component9 = function () {
    return this.strokeStyle;
  };
  Context2d$State.prototype.component10 = function () {
    return this.fillStyle;
  };
  Context2d$State.prototype.component11 = function () {
    return this.font;
  };
  Context2d$State.prototype.component12 = function () {
    return this.verticalAlign;
  };
  Context2d$State.prototype.component13 = function () {
    return this.horizontalAlign;
  };
  Context2d$State.prototype.component14 = function () {
    return this.globalAlpha;
  };
  Context2d$State.prototype.copy_ihvang$ = function (transform, clip, path, lineScaleMode, lineWidth, lineCap, lineJoin, miterLimit, strokeStyle, fillStyle, font, verticalAlign, horizontalAlign, globalAlpha) {
    return new Context2d$State(transform === void 0 ? this.transform : transform, clip === void 0 ? this.clip : clip, path === void 0 ? this.path : path, lineScaleMode === void 0 ? this.lineScaleMode : lineScaleMode, lineWidth === void 0 ? this.lineWidth : lineWidth, lineCap === void 0 ? this.lineCap : lineCap, lineJoin === void 0 ? this.lineJoin : lineJoin, miterLimit === void 0 ? this.miterLimit : miterLimit, strokeStyle === void 0 ? this.strokeStyle : strokeStyle, fillStyle === void 0 ? this.fillStyle : fillStyle, font === void 0 ? this.font : font, verticalAlign === void 0 ? this.verticalAlign : verticalAlign, horizontalAlign === void 0 ? this.horizontalAlign : horizontalAlign, globalAlpha === void 0 ? this.globalAlpha : globalAlpha);
  };
  Context2d$State.prototype.toString = function () {
    return 'State(transform=' + Kotlin.toString(this.transform) + (', clip=' + Kotlin.toString(this.clip)) + (', path=' + Kotlin.toString(this.path)) + (', lineScaleMode=' + Kotlin.toString(this.lineScaleMode)) + (', lineWidth=' + Kotlin.toString(this.lineWidth)) + (', lineCap=' + Kotlin.toString(this.lineCap)) + (', lineJoin=' + Kotlin.toString(this.lineJoin)) + (', miterLimit=' + Kotlin.toString(this.miterLimit)) + (', strokeStyle=' + Kotlin.toString(this.strokeStyle)) + (', fillStyle=' + Kotlin.toString(this.fillStyle)) + (', font=' + Kotlin.toString(this.font)) + (', verticalAlign=' + Kotlin.toString(this.verticalAlign)) + (', horizontalAlign=' + Kotlin.toString(this.horizontalAlign)) + (', globalAlpha=' + Kotlin.toString(this.globalAlpha)) + ')';
  };
  Context2d$State.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineScaleMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineCap) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineJoin) | 0;
    result = result * 31 + Kotlin.hashCode(this.miterLimit) | 0;
    result = result * 31 + Kotlin.hashCode(this.strokeStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.fillStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    result = result * 31 + Kotlin.hashCode(this.verticalAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.horizontalAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.globalAlpha) | 0;
    return result;
  };
  Context2d$State.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.path, other.path) && Kotlin.equals(this.lineScaleMode, other.lineScaleMode) && Kotlin.equals(this.lineWidth, other.lineWidth) && Kotlin.equals(this.lineCap, other.lineCap) && Kotlin.equals(this.lineJoin, other.lineJoin) && Kotlin.equals(this.miterLimit, other.miterLimit) && Kotlin.equals(this.strokeStyle, other.strokeStyle) && Kotlin.equals(this.fillStyle, other.fillStyle) && Kotlin.equals(this.font, other.font) && Kotlin.equals(this.verticalAlign, other.verticalAlign) && Kotlin.equals(this.horizontalAlign, other.horizontalAlign) && Kotlin.equals(this.globalAlpha, other.globalAlpha)))));
  };
  Object.defineProperty(Context2d.prototype, 'lineScaleMode', {
    get: function () {
      var $this = this.lineScaleMode_uvt0g7$_0;
      new Kotlin.PropertyMetadata('lineScaleMode');
      return $this.redirect().get();
    },
    set: function (lineScaleMode) {
      var $this = this.lineScaleMode_uvt0g7$_0;
      new Kotlin.PropertyMetadata('lineScaleMode');
      $this.redirect().set(lineScaleMode);
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineWidth', {
    get: function () {
      var $this = this.lineWidth_eizzma$_0;
      new Kotlin.PropertyMetadata('lineWidth');
      return $this.redirect().get();
    },
    set: function (lineWidth) {
      var $this = this.lineWidth_eizzma$_0;
      new Kotlin.PropertyMetadata('lineWidth');
      $this.redirect().set(lineWidth);
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineCap', {
    get: function () {
      var $this = this.lineCap_3v9p9a$_0;
      new Kotlin.PropertyMetadata('lineCap');
      return $this.redirect().get();
    },
    set: function (lineCap) {
      var $this = this.lineCap_3v9p9a$_0;
      new Kotlin.PropertyMetadata('lineCap');
      $this.redirect().set(lineCap);
    }
  });
  Object.defineProperty(Context2d.prototype, 'strokeStyle', {
    get: function () {
      var $this = this.strokeStyle_b8jfmh$_0;
      new Kotlin.PropertyMetadata('strokeStyle');
      return $this.redirect().get();
    },
    set: function (strokeStyle) {
      var $this = this.strokeStyle_b8jfmh$_0;
      new Kotlin.PropertyMetadata('strokeStyle');
      $this.redirect().set(strokeStyle);
    }
  });
  Object.defineProperty(Context2d.prototype, 'fillStyle', {
    get: function () {
      var $this = this.fillStyle_mocpqm$_0;
      new Kotlin.PropertyMetadata('fillStyle');
      return $this.redirect().get();
    },
    set: function (fillStyle) {
      var $this = this.fillStyle_mocpqm$_0;
      new Kotlin.PropertyMetadata('fillStyle');
      $this.redirect().set(fillStyle);
    }
  });
  Object.defineProperty(Context2d.prototype, 'font', {
    get: function () {
      var $this = this.font_hw4l97$_0;
      new Kotlin.PropertyMetadata('font');
      return $this.redirect().get();
    },
    set: function (font) {
      var $this = this.font_hw4l97$_0;
      new Kotlin.PropertyMetadata('font');
      $this.redirect().set(font);
    }
  });
  Object.defineProperty(Context2d.prototype, 'verticalAlign', {
    get: function () {
      var $this = this.verticalAlign_9mcoep$_0;
      new Kotlin.PropertyMetadata('verticalAlign');
      return $this.redirect().get();
    },
    set: function (verticalAlign) {
      var $this = this.verticalAlign_9mcoep$_0;
      new Kotlin.PropertyMetadata('verticalAlign');
      $this.redirect().set(verticalAlign);
    }
  });
  Object.defineProperty(Context2d.prototype, 'horizontalAlign', {
    get: function () {
      var $this = this.horizontalAlign_o0d4qn$_0;
      new Kotlin.PropertyMetadata('horizontalAlign');
      return $this.redirect().get();
    },
    set: function (horizontalAlign) {
      var $this = this.horizontalAlign_o0d4qn$_0;
      new Kotlin.PropertyMetadata('horizontalAlign');
      $this.redirect().set(horizontalAlign);
    }
  });
  Object.defineProperty(Context2d.prototype, 'globalAlpha', {
    get: function () {
      var $this = this.globalAlpha_l2yrp7$_0;
      new Kotlin.PropertyMetadata('globalAlpha');
      return $this.redirect().get();
    },
    set: function (globalAlpha) {
      var $this = this.globalAlpha_l2yrp7$_0;
      new Kotlin.PropertyMetadata('globalAlpha');
      $this.redirect().set(globalAlpha);
    }
  });
  Context2d.prototype.keepApply_hqcxwp$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.keepApply_hqcxwp$', wrapFunction(function () {
    return function (callback) {
      this.save();
      try {
        callback(this);
      }
      finally {
        this.restore();
      }
      return this;
    };
  }));
  Context2d.prototype.keep_o14v8n$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.keep_o14v8n$', function (callback) {
    this.save();
    try {
      callback();
    }
    finally {
      this.restore();
    }
  });
  Context2d.prototype.keepTransform_o14v8n$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.keepTransform_o14v8n$', function (callback) {
    var t = this.state.transform;
    var a = t.a;
    var b = t.b;
    var c = t.c;
    var d = t.d;
    var tx = t.tx;
    var ty = t.ty;
    try {
      callback();
    }
    finally {
      t.setTo_15yvbs$(a, b, c, d, tx, ty);
    }
  });
  Context2d.prototype.save = function () {
    return this.stack_0.addLast_11rb$(this.state.clone());
  };
  Context2d.prototype.restore = function () {
    this.state = this.stack_0.removeLast();
  };
  Context2d.prototype.scale_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    return this.state.transform.prescale_lu1900$(sx, sy);
  };
  Context2d.prototype.rotate_14dthe$ = function (angle) {
    return this.state.transform.prerotate_14dthe$(angle);
  };
  Context2d.prototype.translate_lu1900$ = function (tx, ty) {
    return this.state.transform.pretranslate_lu1900$(tx, ty);
  };
  Context2d.prototype.transform_yx07kl$ = function (m) {
    return this.state.transform.premultiply_7f5bc6$(m);
  };
  Context2d.prototype.transform_15yvbs$ = function (a, b, c, d, tx, ty) {
    return this.state.transform.premultiply_15yvbs$(a, b, c, d, tx, ty);
  };
  Context2d.prototype.setTransform_yx07kl$ = function (m) {
    this.state.transform.copyFrom_7f5bc6$(m);
  };
  Context2d.prototype.setTransform_15yvbs$ = function (a, b, c, d, tx, ty) {
    return this.state.transform.setTo_15yvbs$(a, b, c, d, tx, ty);
  };
  Context2d.prototype.shear_lu1900$ = function (sx, sy) {
    return this.transform_15yvbs$(1.0, sy, sx, 1.0, 0.0, 0.0);
  };
  Context2d.prototype.moveTo_vux9f0$ = function (x, y) {
    this.moveTo_lu1900$(x, y);
  };
  Context2d.prototype.lineTo_vux9f0$ = function (x, y) {
    this.lineTo_lu1900$(x, y);
  };
  Context2d.prototype.quadraticCurveTo_tjonv8$ = function (cx, cy, ax, ay) {
    this.quadraticCurveTo_6y0v78$(cx, cy, ax, ay);
  };
  Context2d.prototype.bezierCurveTo_mbbjvw$ = function (cx1, cy1, cx2, cy2, ax, ay) {
    this.bezierCurveTo_15yvbs$(cx1, cy1, cx2, cy2, ax, ay);
  };
  Context2d.prototype.arcTo_4qozqa$ = function (x1, y1, x2, y2, radius) {
    this.arcTo_1lq62i$(x1, y1, x2, y2, radius);
  };
  Context2d.prototype.moveTo_r62tv1$ = function (p) {
    this.moveTo_lu1900$(p.x, p.y);
  };
  Context2d.prototype.lineTo_r62tv1$ = function (p) {
    this.lineTo_lu1900$(p.x, p.y);
  };
  Context2d.prototype.quadraticCurveTo_g6xq6k$ = function (c, a) {
    this.quadraticCurveTo_6y0v78$(c.x, c.y, a.x, a.y);
  };
  Context2d.prototype.bezierCurveTo_immp3h$ = function (c1, c2, a) {
    this.bezierCurveTo_15yvbs$(c1.x, c1.y, c2.x, c2.y, a.x, a.y);
  };
  Context2d.prototype.arcTo_cnijz2$ = function (p1, p2, radius) {
    this.arcTo_1lq62i$(p1.x, p1.y, p2.x, p2.y, radius);
  };
  Context2d.prototype.rect_tjonv8$ = function (x, y, width, height) {
    this.rect_6y0v78$(x, y, width, height);
  };
  Context2d.prototype.strokeRect_tjonv8$ = function (x, y, width, height) {
    this.strokeRect_6y0v78$(x, y, width, height);
  };
  Context2d.prototype.fillRect_tjonv8$ = function (x, y, width, height) {
    this.fillRect_6y0v78$(x, y, width, height);
  };
  Context2d.prototype.arc_1lq62i$ = function (x, y, r, start, end) {
    this.state.path.arc_1lq62i$(x, y, r, start, end);
  };
  Context2d.prototype.strokeDot_lu1900$ = function (x, y) {
    this.beginPath();
    this.moveTo_lu1900$(x, y);
    this.lineTo_lu1900$(x, y);
    this.stroke();
  };
  Context2d.prototype.arcTo_1lq62i$ = function (x1, y1, x2, y2, r) {
    this.state.path.arcTo_1lq62i$(x1, y1, x2, y2, r);
  };
  Context2d.prototype.circle_yvo9jy$ = function (x, y, radius) {
    this.arc_1lq62i$(x, y, radius, 0.0, math.PI * 2.0);
  };
  Context2d.prototype.moveTo_lu1900$ = function (x, y) {
    this.state.path.moveTo_lu1900$(x, y);
  };
  Context2d.prototype.lineTo_lu1900$ = function (x, y) {
    this.state.path.lineTo_lu1900$(x, y);
  };
  Context2d.prototype.quadraticCurveTo_6y0v78$ = function (cx, cy, ax, ay) {
    this.state.path.quadTo_6y0v78$(cx, cy, ax, ay);
  };
  Context2d.prototype.bezierCurveTo_15yvbs$ = function (cx1, cy1, cx2, cy2, x, y) {
    this.state.path.cubicTo_15yvbs$(cx1, cy1, cx2, cy2, x, y);
  };
  Context2d.prototype.rect_6y0v78$ = function (x, y, width, height) {
    this.state.path.rect_6y0v78$(x, y, width, height);
  };
  Context2d.prototype.roundRect_15yvbs$ = function (x, y, w, h, rx, ry) {
    if (ry === void 0)
      ry = rx;
    this.beginPath();
    this.state.path.roundRect_15yvbs$(x, y, w, h, rx, ry);
    this.closePath();
  };
  Context2d.prototype.path_lcui0n$ = function (path) {
    this.state.path.write_3wv7u0$(path);
  };
  Context2d.prototype.draw_ywv3s4$ = function (d) {
    d.draw_vuz2tk$(this);
  };
  Context2d.prototype.strokeRect_6y0v78$ = function (x, y, width, height) {
    this.beginPath();
    this.rect_6y0v78$(x, y, width, height);
    this.stroke();
  };
  Context2d.prototype.fillRect_6y0v78$ = function (x, y, width, height) {
    this.beginPath();
    this.rect_6y0v78$(x, y, width, height);
    this.fill();
  };
  Context2d.prototype.beginPath = function () {
    this.state.path = new GraphicsPath();
  };
  Context2d.prototype.closePath = function () {
    this.state.path.close();
  };
  Context2d.prototype.stroke = function () {
    if (!Kotlin.equals(this.state.strokeStyle, Context2d$None_getInstance()))
      this.renderer.render_w64o9o$(this.state, false);
  };
  Context2d.prototype.fill = function () {
    if (!Kotlin.equals(this.state.fillStyle, Context2d$None_getInstance()))
      this.renderer.render_w64o9o$(this.state, true);
  };
  Context2d.prototype.fill_i8h3xk$ = function (paint) {
    this.fillStyle = paint;
    this.fill();
  };
  Context2d.prototype.stroke_i8h3xk$ = function (paint) {
    this.strokeStyle = paint;
    this.stroke();
  };
  Context2d.prototype.fillStroke = function () {
    this.fill();
    this.stroke();
  };
  Context2d.prototype.clip = function () {
    this.state.clip = this.state.path;
  };
  Context2d.prototype.drawShape_gwrl1p$ = function (shape, rasterizerMethod) {
    if (rasterizerMethod === void 0)
      rasterizerMethod = Context2d$ShapeRasterizerMethod$X4_getInstance();
    var tmp$;
    if (Kotlin.equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$NONE_getInstance()))
      shape.draw_vuz2tk$(this);
    else if (Kotlin.equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X1_getInstance()) || Kotlin.equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X2_getInstance()) || Kotlin.equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X4_getInstance())) {
      var scale = rasterizerMethod.scale;
      var a = this.renderer.width * scale;
      var tmp$_0 = Math_0.ceil(a) | 0;
      var a_0 = this.renderer.height * scale;
      var newBi = NativeImage_0(tmp$_0, Math_0.ceil(a_0) | 0);
      var bi = newBi.getContext2d_6taknv$(false);
      bi.scale_lu1900$(scale, scale);
      bi.transform_yx07kl$(this.state.transform);
      bi.draw_ywv3s4$(shape);
      if (Kotlin.equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X1_getInstance()))
        tmp$ = newBi;
      else if (Kotlin.equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X2_getInstance()))
        tmp$ = mipmap(newBi, 1);
      else if (Kotlin.equals(rasterizerMethod, Context2d$ShapeRasterizerMethod$X4_getInstance()))
        tmp$ = mipmap(newBi, 2);
      else
        tmp$ = newBi;
      var renderBi = tmp$;
      var t = this.state.transform;
      var a_1 = t.a;
      var b = t.b;
      var c = t.c;
      var d = t.d;
      var tx = t.tx;
      var ty = t.ty;
      try {
        this.setTransform_yx07kl$(new Matrix2d());
        this.renderer.drawImage_4amb17$(renderBi, 0, 0);
      }
      finally {
        t.setTo_15yvbs$(a_1, b, c, d, tx, ty);
      }
    }
  };
  Context2d.prototype.createLinearGradient_6y0v78$ = function (x0, y0, x1, y1) {
    return new Context2d$LinearGradient(x0, y0, x1, y1);
  };
  Context2d.prototype.createRadialGradient_15yvbs$ = function (x0, y0, r0, x1, y1, r1) {
    return new Context2d$RadialGradient(x0, y0, r0, x1, y1, r1);
  };
  Context2d.prototype.createColor_za3lpa$ = function (color) {
    return new Context2d$Color(color);
  };
  Context2d.prototype.createPattern_q12jej$ = function (bitmap, repeat, smooth, transform) {
    if (repeat === void 0)
      repeat = false;
    if (smooth === void 0)
      smooth = true;
    if (transform === void 0)
      transform = new Matrix2d();
    return new Context2d$BitmapPaint(bitmap, transform, repeat, smooth);
  };
  function Context2d$Font(name, size) {
    this.name = name;
    this.size = size;
  }
  Context2d$Font.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Font',
    interfaces: []
  };
  Context2d$Font.prototype.component1 = function () {
    return this.name;
  };
  Context2d$Font.prototype.component2 = function () {
    return this.size;
  };
  Context2d$Font.prototype.copy_io5o9c$ = function (name, size) {
    return new Context2d$Font(name === void 0 ? this.name : name, size === void 0 ? this.size : size);
  };
  Context2d$Font.prototype.toString = function () {
    return 'Font(name=' + Kotlin.toString(this.name) + (', size=' + Kotlin.toString(this.size)) + ')';
  };
  Context2d$Font.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  Context2d$Font.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.size, other.size)))));
  };
  function Context2d$TextMetrics(bounds) {
    if (bounds === void 0)
      bounds = new Rectangle();
    this.bounds = bounds;
  }
  Context2d$TextMetrics.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TextMetrics',
    interfaces: []
  };
  Context2d$TextMetrics.prototype.component1 = function () {
    return this.bounds;
  };
  Context2d$TextMetrics.prototype.copy_2da8yn$ = function (bounds) {
    return new Context2d$TextMetrics(bounds === void 0 ? this.bounds : bounds);
  };
  Context2d$TextMetrics.prototype.toString = function () {
    return 'TextMetrics(bounds=' + Kotlin.toString(this.bounds) + ')';
  };
  Context2d$TextMetrics.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    return result;
  };
  Context2d$TextMetrics.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.bounds, other.bounds))));
  };
  Context2d.prototype.getTextBounds_jznmvy$ = function (text, out) {
    if (out === void 0)
      out = new Context2d$TextMetrics();
    this.renderer.getBounds_qlucl1$(this.font, text, out);
    return out;
  };
  Context2d.prototype.fillText_ai6r6m$ = function (text, x, y) {
    this.renderText_a7koit$(text, x, y, true);
  };
  Context2d.prototype.strokeText_ai6r6m$ = function (text, x, y) {
    this.renderText_a7koit$(text, x, y, false);
  };
  Context2d.prototype.renderText_a7koit$ = function (text, x, y, fill) {
    this.renderer.renderText_2jdvt1$(this.state, this.font, text, x, y, fill);
  };
  Context2d.prototype.drawImage_dpo8os$ = function (image, x, y, width, height) {
    if (width === void 0)
      width = image.width;
    if (height === void 0)
      height = image.height;
    if (true) {
      this.beginPath();
      this.moveTo_vux9f0$(x, y);
      this.lineTo_vux9f0$(x + width | 0, y);
      this.lineTo_vux9f0$(x + width | 0, y + height | 0);
      this.lineTo_vux9f0$(x, y + height | 0);
      this.closePath();
      this.fillStyle = this.createPattern_q12jej$(image, void 0, void 0, (new Matrix2d()).scale_lu1900$(width / image.width, height / image.height));
      this.fill();
    }
     else {
      this.renderer.drawImage_4amb17$(image, x, y, width, height, this.state.transform);
    }
  };
  function Context2d$Paint() {
  }
  Context2d$Paint.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Paint',
    interfaces: []
  };
  function Context2d$None() {
    Context2d$None_instance = this;
  }
  Context2d$None.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'None',
    interfaces: [Context2d$Paint]
  };
  var Context2d$None_instance = null;
  function Context2d$None_getInstance() {
    if (Context2d$None_instance === null) {
      new Context2d$None();
    }
    return Context2d$None_instance;
  }
  function Context2d$Color(color) {
    this.color = color;
  }
  Context2d$Color.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Color',
    interfaces: [Context2d$Paint]
  };
  Context2d$Color.prototype.component1 = function () {
    return this.color;
  };
  Context2d$Color.prototype.copy_za3lpa$ = function (color) {
    return new Context2d$Color(color === void 0 ? this.color : color);
  };
  Context2d$Color.prototype.toString = function () {
    return 'Color(color=' + Kotlin.toString(this.color) + ')';
  };
  Context2d$Color.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    return result;
  };
  Context2d$Color.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.color, other.color))));
  };
  function Context2d$TransformedPaint() {
  }
  Context2d$TransformedPaint.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'TransformedPaint',
    interfaces: [Context2d$Paint]
  };
  function Context2d$Gradient(x0, y0, x1, y1, stops, colors, cycle, transform, interpolationMethod) {
    if (stops === void 0)
      stops = new DoubleArrayList();
    if (colors === void 0)
      colors = new IntArrayList();
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.stops = stops;
    this.colors = colors;
    this.cycle = cycle;
    this.transform_llmwna$_0 = transform;
    this.interpolationMethod = interpolationMethod;
    this.numberOfStops = this.stops.size;
  }
  Object.defineProperty(Context2d$Gradient.prototype, 'transform', {
    get: function () {
      return this.transform_llmwna$_0;
    }
  });
  function Context2d$Gradient$InterpolationMethod(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$Gradient$InterpolationMethod_initFields() {
    Context2d$Gradient$InterpolationMethod_initFields = function () {
    };
    Context2d$Gradient$InterpolationMethod$LINEAR_instance = new Context2d$Gradient$InterpolationMethod('LINEAR', 0);
    Context2d$Gradient$InterpolationMethod$NORMAL_instance = new Context2d$Gradient$InterpolationMethod('NORMAL', 1);
  }
  var Context2d$Gradient$InterpolationMethod$LINEAR_instance;
  function Context2d$Gradient$InterpolationMethod$LINEAR_getInstance() {
    Context2d$Gradient$InterpolationMethod_initFields();
    return Context2d$Gradient$InterpolationMethod$LINEAR_instance;
  }
  var Context2d$Gradient$InterpolationMethod$NORMAL_instance;
  function Context2d$Gradient$InterpolationMethod$NORMAL_getInstance() {
    Context2d$Gradient$InterpolationMethod_initFields();
    return Context2d$Gradient$InterpolationMethod$NORMAL_instance;
  }
  Context2d$Gradient$InterpolationMethod.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InterpolationMethod',
    interfaces: [Enum]
  };
  function Context2d$Gradient$InterpolationMethod$values() {
    return [Context2d$Gradient$InterpolationMethod$LINEAR_getInstance(), Context2d$Gradient$InterpolationMethod$NORMAL_getInstance()];
  }
  Context2d$Gradient$InterpolationMethod.values = Context2d$Gradient$InterpolationMethod$values;
  function Context2d$Gradient$InterpolationMethod$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return Context2d$Gradient$InterpolationMethod$LINEAR_getInstance();
      case 'NORMAL':
        return Context2d$Gradient$InterpolationMethod$NORMAL_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korim.vector.Context2d.Gradient.InterpolationMethod.' + name);
    }
  }
  Context2d$Gradient$InterpolationMethod.valueOf_61zpoe$ = Context2d$Gradient$InterpolationMethod$valueOf;
  Context2d$Gradient.prototype.addColorStop_12fank$ = function (stop, color) {
    this.stops.plusAssign_14dthe$(stop);
    this.colors.plusAssign_za3lpa$(color);
    return this;
  };
  Context2d$Gradient.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Gradient',
    interfaces: [Context2d$TransformedPaint]
  };
  function Context2d$LinearGradient(x0, y0, x1, y1, stops, colors, cycle, transform, interpolationMethod) {
    if (stops === void 0)
      stops = new DoubleArrayList();
    if (colors === void 0)
      colors = new IntArrayList();
    if (cycle === void 0)
      cycle = Context2d$CycleMethod$NO_CYCLE_getInstance();
    if (transform === void 0)
      transform = new Matrix2d();
    if (interpolationMethod === void 0)
      interpolationMethod = Context2d$Gradient$InterpolationMethod$NORMAL_getInstance();
    Context2d$Gradient.call(this, x0, y0, x1, y1, stops, colors, cycle, transform, interpolationMethod);
  }
  Context2d$LinearGradient.prototype.applyMatrix_yx07kl$ = function (m) {
    return new Context2d$LinearGradient(m.transformX_lu1900$(this.x0, this.y0), m.transformY_lu1900$(this.x0, this.y0), m.transformX_lu1900$(this.x1, this.y1), m.transformY_lu1900$(this.x1, this.y1), DoubleArrayList_init(this.stops), IntArrayList_init(this.colors));
  };
  Context2d$LinearGradient.prototype.toString = function () {
    return 'LinearGradient(' + this.x0 + ', ' + this.y0 + ', ' + this.x1 + ', ' + this.y1 + ', ' + this.stops + ', ' + this.colors + ')';
  };
  Context2d$LinearGradient.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LinearGradient',
    interfaces: [Context2d$Gradient]
  };
  function Context2d$RadialGradient(x0, y0, r0, x1, y1, r1, stops, colors, cycle, transform, interpolationMethod) {
    if (stops === void 0)
      stops = new DoubleArrayList();
    if (colors === void 0)
      colors = new IntArrayList();
    if (cycle === void 0)
      cycle = Context2d$CycleMethod$NO_CYCLE_getInstance();
    if (transform === void 0)
      transform = new Matrix2d();
    if (interpolationMethod === void 0)
      interpolationMethod = Context2d$Gradient$InterpolationMethod$NORMAL_getInstance();
    Context2d$Gradient.call(this, x0, y0, x1, y1, stops, colors, cycle, transform, interpolationMethod);
    this.r0 = r0;
    this.r1 = r1;
  }
  Context2d$RadialGradient.prototype.applyMatrix_yx07kl$ = function (m) {
    return new Context2d$RadialGradient(m.transformX_lu1900$(this.x0, this.y0), m.transformY_lu1900$(this.x0, this.y0), this.r0, m.transformX_lu1900$(this.x1, this.y1), m.transformY_lu1900$(this.x1, this.y1), this.r1, DoubleArrayList_init(this.stops), IntArrayList_init(this.colors));
  };
  Context2d$RadialGradient.prototype.toString = function () {
    return 'RadialGradient(' + this.x0 + ', ' + this.y0 + ', ' + this.r0 + ', ' + this.x1 + ', ' + this.y1 + ', ' + this.r1 + ', ' + this.stops + ', ' + this.colors + ')';
  };
  Context2d$RadialGradient.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RadialGradient',
    interfaces: [Context2d$Gradient]
  };
  function Context2d$BitmapPaint(bitmap, transform, repeat, smooth) {
    if (repeat === void 0)
      repeat = false;
    if (smooth === void 0)
      smooth = true;
    this.bitmap = bitmap;
    this.transform_jssmr$_0 = transform;
    this.repeat = repeat;
    this.smooth = smooth;
  }
  Object.defineProperty(Context2d$BitmapPaint.prototype, 'transform', {
    get: function () {
      return this.transform_jssmr$_0;
    }
  });
  Context2d$BitmapPaint.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BitmapPaint',
    interfaces: [Context2d$TransformedPaint]
  };
  function Context2d$Drawable() {
  }
  Context2d$Drawable.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Drawable',
    interfaces: []
  };
  function Context2d$BoundsDrawable() {
  }
  Context2d$BoundsDrawable.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'BoundsDrawable',
    interfaces: [Context2d$Drawable]
  };
  function Context2d$SizedDrawable() {
  }
  Context2d$SizedDrawable.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'SizedDrawable',
    interfaces: [Context2d$Drawable]
  };
  function Context2d$FuncDrawable(action) {
    this.action = action;
  }
  Context2d$FuncDrawable.prototype.draw_vuz2tk$ = function (c) {
    c.save();
    try {
      this.action(c);
    }
    finally {
      c.restore();
    }
  };
  Context2d$FuncDrawable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FuncDrawable',
    interfaces: [Context2d$Drawable]
  };
  function Context2d$lineScaleMode$lambda(this$Context2d) {
    return function () {
      return Kotlin.getPropertyCallableRef('lineScaleMode', 0, function ($receiver) {
        return $receiver.lineScaleMode;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineScaleMode = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$lineWidth$lambda(this$Context2d) {
    return function () {
      return Kotlin.getPropertyCallableRef('lineWidth', 0, function ($receiver) {
        return $receiver.lineWidth;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineWidth = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$lineCap$lambda(this$Context2d) {
    return function () {
      return Kotlin.getPropertyCallableRef('lineCap', 0, function ($receiver) {
        return $receiver.lineCap;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineCap = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$strokeStyle$lambda(this$Context2d) {
    return function () {
      return Kotlin.getPropertyCallableRef('strokeStyle', 0, function ($receiver) {
        return $receiver.strokeStyle;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.strokeStyle = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$fillStyle$lambda(this$Context2d) {
    return function () {
      return Kotlin.getPropertyCallableRef('fillStyle', 0, function ($receiver) {
        return $receiver.fillStyle;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.fillStyle = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$font$lambda(this$Context2d) {
    return function () {
      return Kotlin.getPropertyCallableRef('font', 0, function ($receiver) {
        return $receiver.font;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.font = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$verticalAlign$lambda(this$Context2d) {
    return function () {
      return Kotlin.getPropertyCallableRef('verticalAlign', 0, function ($receiver) {
        return $receiver.verticalAlign;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.verticalAlign = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$horizontalAlign$lambda(this$Context2d) {
    return function () {
      return Kotlin.getPropertyCallableRef('horizontalAlign', 0, function ($receiver) {
        return $receiver.horizontalAlign;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.horizontalAlign = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$globalAlpha$lambda(this$Context2d) {
    return function () {
      return Kotlin.getPropertyCallableRef('globalAlpha', 0, function ($receiver) {
        return $receiver.globalAlpha;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.globalAlpha = value;
      }.bind(null, this$Context2d.state));
    };
  }
  Context2d.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Context2d',
    interfaces: []
  };
  function filled$ObjectLiteral(closure$paint, this$filled) {
    this.closure$paint = closure$paint;
    this.this$filled = this$filled;
    this.$delegate_ytihto$_0 = this$filled;
  }
  filled$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.fillStyle = this.closure$paint;
    this.this$filled.draw_vuz2tk$(c);
    c.fill();
  };
  Object.defineProperty(filled$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.$delegate_ytihto$_0.height;
    }
  });
  Object.defineProperty(filled$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.$delegate_ytihto$_0.width;
    }
  });
  filled$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Context2d$SizedDrawable]
  };
  function filled($receiver, paint) {
    return new filled$ObjectLiteral(paint, $receiver);
  }
  function render_0($receiver) {
    var image = NativeImage_0($receiver.width, $receiver.height);
    var ctx = image.getContext2d_6taknv$();
    $receiver.draw_vuz2tk$(ctx);
    return image;
  }
  function GraphicsPath(commands, data, winding) {
    if (commands === void 0)
      commands = new IntArrayList();
    if (data === void 0)
      data = new DoubleArrayList();
    if (winding === void 0)
      winding = VectorPath$Winding.EVEN_ODD;
    VectorPath.call(this, commands, data, winding);
  }
  Object.defineProperty(GraphicsPath.prototype, 'width', {
    get: function () {
      return this.getBounds_iqjpvb$().width | 0;
    }
  });
  Object.defineProperty(GraphicsPath.prototype, 'height', {
    get: function () {
      return this.getBounds_iqjpvb$().height | 0;
    }
  });
  GraphicsPath.prototype.draw_vuz2tk$ = function (c) {
    c.state.path.write_3wv7u0$(this);
  };
  GraphicsPath.prototype.clone = function () {
    return new GraphicsPath(IntArrayList_init(this.commands), DoubleArrayList_init(this.data), this.winding);
  };
  GraphicsPath.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GraphicsPath',
    interfaces: [Context2d$SizedDrawable, VectorPath]
  };
  function SvgBuilder(bounds, scale) {
    this.bounds = bounds;
    this.scale = scale;
    this.defs = ArrayList_init();
    this.nodes = ArrayList_init();
  }
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  SvgBuilder.prototype.toXml = function () {
    return Xml.Companion.Tag_imnfz6$('svg', linkedMapOf([to('width', get_niceStr_1(this.bounds.width * this.scale) + 'px'), to('height', get_niceStr_1(this.bounds.height * this.scale) + 'px'), to('viewBox', '0 0 ' + get_niceStr_1(this.bounds.width * this.scale) + ' ' + get_niceStr_1(this.bounds.height * this.scale)), to('xmlns', 'http://www.w3.org/2000/svg'), to('xmlns:xlink', 'http://www.w3.org/1999/xlink')]), listOf_0([Xml.Companion.Tag_imnfz6$('defs', emptyMap(), this.defs), Xml.Companion.Tag_imnfz6$('g', mapOf_0(to('transform', toSvg((new Matrix2d()).translate_lu1900$(-this.bounds.x, -this.bounds.y).scale_lu1900$(this.scale, this.scale)))), this.nodes)]));
  };
  SvgBuilder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SvgBuilder',
    interfaces: []
  };
  function toSvg($receiver) {
    var block$result;
    var tmp$;
    tmp$ = $receiver.getType();
    if (Kotlin.equals(tmp$, Matrix2d$Type.IDENTITY)) {
      block$result = 'translate()';
    }
     else if (Kotlin.equals(tmp$, Matrix2d$Type.TRANSLATE)) {
      block$result = 'translate(' + get_niceStr_1($receiver.tx) + ', ' + get_niceStr_1($receiver.ty) + ')';
    }
     else if (Kotlin.equals(tmp$, Matrix2d$Type.SCALE)) {
      block$result = 'scale(' + get_niceStr_1($receiver.a) + ', ' + get_niceStr_1($receiver.d) + ')';
    }
     else if (Kotlin.equals(tmp$, Matrix2d$Type.SCALE_TRANSLATE)) {
      block$result = 'translate(' + get_niceStr_1($receiver.tx) + ', ' + get_niceStr_1($receiver.ty) + ') scale(' + get_niceStr_1($receiver.a) + ', ' + get_niceStr_1($receiver.d) + ')';
    }
     else {
      block$result = 'matrix(' + get_niceStr_1($receiver.a) + ', ' + get_niceStr_1($receiver.b) + ', ' + get_niceStr_1($receiver.c) + ', ' + get_niceStr_1($receiver.d) + ', ' + get_niceStr_1($receiver.tx) + ', ' + get_niceStr_1($receiver.ty) + ')';
    }
    return block$result;
  }
  function toSvgPathString$fixX($receiver) {
    return get_niceStr_1($receiver);
  }
  function toSvgPathString$fixY($receiver) {
    return get_niceStr_1($receiver);
  }
  function toSvgPathString($receiver) {
    var parts = ArrayList_init();
    var fixX = toSvgPathString$fixX;
    var fixY = toSvgPathString$fixY;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var n = 0;
    tmp$ = $receiver.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      if (cmd === VectorPath.Command.MOVE_TO) {
        var x = $receiver.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
        var y = $receiver.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
        var element = 'M' + fixX(x) + ' ' + fixY(y);
        parts.add_11rb$(element);
      }
       else if (cmd === VectorPath.Command.LINE_TO) {
        var x_0 = $receiver.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
        var y_0 = $receiver.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
        var element_0 = 'L' + fixX(x_0) + ' ' + fixY(y_0);
        parts.add_11rb$(element_0);
      }
       else if (cmd === VectorPath.Command.QUAD_TO) {
        var x1 = $receiver.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
        var y1 = $receiver.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
        var x2 = $receiver.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
        var y2 = $receiver.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
        var element_1 = 'Q' + fixX(x1) + ' ' + fixY(y1) + ', ' + fixX(x2) + ' ' + fixY(y2);
        parts.add_11rb$(element_1);
      }
       else if (cmd === VectorPath.Command.BEZIER_TO) {
        var x1_0 = $receiver.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
        var y1_0 = $receiver.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
        var x2_0 = $receiver.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
        var y2_0 = $receiver.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
        var x3 = $receiver.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
        var y3 = $receiver.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
        var element_2 = 'C' + fixX(x1_0) + ' ' + fixY(y1_0) + ', ' + fixX(x2_0) + ' ' + fixY(y2_0) + ', ' + fixX(x3) + ' ' + fixY(y3);
        parts.add_11rb$(element_2);
      }
       else if (cmd === VectorPath.Command.CLOSE) {
        parts.add_11rb$('Z');
      }
    }
    return joinToString(parts, '');
  }
  function Shape() {
  }
  Shape.prototype.buildSvg_b7xfbk$ = function (svg) {
  };
  Shape.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Shape',
    interfaces: [Context2d$Drawable]
  };
  function getBounds($receiver, out) {
    if (out === void 0)
      out = new Rectangle();
    var bb = new BoundsBuilder();
    $receiver.addBounds_w97n1m$(bb);
    bb.getBounds_2da8yn$(out);
    return out;
  }
  function toSvg_0($receiver, scale) {
    if (scale === void 0)
      scale = 1.0;
    var $receiver_0 = new SvgBuilder(getBounds($receiver), scale);
    $receiver.buildSvg_b7xfbk$($receiver_0);
    return $receiver_0.toXml();
  }
  function StyledShape() {
  }
  StyledShape.prototype.addBounds_w97n1m$ = function (bb) {
    this.path.addBounds_w97n1m$(bb);
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  StyledShape.prototype.buildSvg_b7xfbk$ = function (svg) {
    var tmp$ = svg.nodes;
    var element = Xml.Companion.Tag_imnfz6$('path', plus(mapOf_0(to('d', toSvgPathString(this.path))), this.getSvgXmlAttributes_b7xfbk$(svg)), emptyList());
    tmp$.add_11rb$(element);
  };
  StyledShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return emptyMap();
  };
  StyledShape.prototype.draw_vuz2tk$ = function (c) {
    var t = c.state.transform;
    var a = t.a;
    var b = t.b;
    var c_0 = t.c;
    var d = t.d;
    var tx = t.tx;
    var ty = t.ty;
    try {
      var tmp$;
      c.transform_yx07kl$(this.transform);
      c.beginPath();
      this.path.draw_vuz2tk$(c);
      if (this.clip != null) {
        ((tmp$ = this.clip) != null ? tmp$ : Kotlin.throwNPE()).draw_vuz2tk$(c);
        c.clip();
      }
      this.drawInternal_vuz2tk$(c);
    }
    finally {
      t.setTo_15yvbs$(a, b, c_0, d, tx, ty);
    }
  };
  StyledShape.prototype.drawInternal_vuz2tk$ = function (c) {
  };
  StyledShape.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'StyledShape',
    interfaces: [Shape]
  };
  function colorToSvg(color) {
    var r = RGBA_getInstance().getR_za3lpa$(color);
    var g = RGBA_getInstance().getG_za3lpa$(color);
    var b = RGBA_getInstance().getB_za3lpa$(color);
    var af = RGBA_getInstance().getAf_za3lpa$(color);
    return 'rgba(' + r + ',' + g + ',' + b + ',' + af + ')';
  }
  function toSvg_1($receiver, svg) {
    var id = svg.defs.size;
    if (Kotlin.isType($receiver, Context2d$Gradient)) {
      var $receiver_0 = until(0, $receiver.numberOfStops);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var ratio = $receiver.stops.get_za3lpa$(item);
        var color = $receiver.colors.get_za3lpa$(item);
        tmp$_0.call(destination, Xml.Companion.Tag_imnfz6$('stop', mapOf([to('offset', (ratio * 100).toString() + '%'), to('stop-color', colorToSvg(color))]), emptyList()));
      }
      var stops = destination;
      if (Kotlin.isType($receiver, Context2d$LinearGradient)) {
        var $receiver_1 = svg.defs;
        var element = Xml.Companion.Tag_imnfz6$('linearGradient', mapOf([to('id', 'def' + id), to('x1', $receiver.x0.toString()), to('y1', $receiver.y0.toString()), to('x2', $receiver.x1.toString()), to('y2', $receiver.y1.toString()), to('gradientTransform', toSvg($receiver.transform))]), stops);
        $receiver_1.add_11rb$(element);
      }
       else if (Kotlin.isType($receiver, Context2d$RadialGradient)) {
        var $receiver_2 = svg.defs;
        var element_0 = Xml.Companion.Tag_imnfz6$('radialGradient', mapOf([to('id', 'def' + id), to('cx', $receiver.x0.toString()), to('cy', $receiver.y0.toString()), to('fx', $receiver.x1.toString()), to('fy', $receiver.y1.toString()), to('r', $receiver.r1.toString()), to('gradientTransform', toSvg($receiver.transform))]), stops);
        $receiver_2.add_11rb$(element_0);
      }
      return 'url(#def' + id + ')';
    }
     else if (Kotlin.isType($receiver, Context2d$BitmapPaint)) {
      var tmp$_1 = svg.defs;
      var element_1 = Xml.Companion.Tag_imnfz6$('pattern', mapOf([to('id', 'def' + id), to('patternUnits', 'userSpaceOnUse'), to('width', $receiver.bitmap.width.toString()), to('height', $receiver.bitmap.height.toString()), to('patternTransform', toSvg($receiver.transform))]), listOf(Xml.Companion.Tag_imnfz6$('image', mapOf([to('xlink:href', toUri($receiver.bitmap)), to('width', $receiver.bitmap.width.toString()), to('height', $receiver.bitmap.height.toString())]), emptyList())));
      tmp$_1.add_11rb$(element_1);
      return 'url(#def' + id + ')';
    }
     else if (Kotlin.isType($receiver, Context2d$Color))
      return colorToSvg($receiver.color);
    else
      return 'red';
  }
  function FillShape(path, clip, paint, transform) {
    this.path_2357gs$_0 = path;
    this.clip_1w6on5$_0 = clip;
    this.paint_6bthi3$_0 = paint;
    this.transform_dukfqh$_0 = transform;
  }
  Object.defineProperty(FillShape.prototype, 'path', {
    get: function () {
      return this.path_2357gs$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'clip', {
    get: function () {
      return this.clip_1w6on5$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'paint', {
    get: function () {
      return this.paint_6bthi3$_0;
    }
  });
  Object.defineProperty(FillShape.prototype, 'transform', {
    get: function () {
      return this.transform_dukfqh$_0;
    }
  });
  FillShape.prototype.drawInternal_vuz2tk$ = function (c) {
    c.fill_i8h3xk$(this.paint);
  };
  FillShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return plus(StyledShape.prototype.getSvgXmlAttributes_b7xfbk$.call(this, svg), mapOf_0(to('fill', toSvg_1(this.paint, svg))));
  };
  FillShape.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FillShape',
    interfaces: [StyledShape]
  };
  FillShape.prototype.component1 = function () {
    return this.path;
  };
  FillShape.prototype.component2 = function () {
    return this.clip;
  };
  FillShape.prototype.component3 = function () {
    return this.paint;
  };
  FillShape.prototype.component4 = function () {
    return this.transform;
  };
  FillShape.prototype.copy_g3wweg$ = function (path, clip, paint, transform) {
    return new FillShape(path === void 0 ? this.path : path, clip === void 0 ? this.clip : clip, paint === void 0 ? this.paint : paint, transform === void 0 ? this.transform : transform);
  };
  FillShape.prototype.toString = function () {
    return 'FillShape(path=' + Kotlin.toString(this.path) + (', clip=' + Kotlin.toString(this.clip)) + (', paint=' + Kotlin.toString(this.paint)) + (', transform=' + Kotlin.toString(this.transform)) + ')';
  };
  FillShape.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.paint) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    return result;
  };
  FillShape.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.paint, other.paint) && Kotlin.equals(this.transform, other.transform)))));
  };
  function PolylineShape(path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
    this.path_szk01b$_0 = path;
    this.clip_sslh7o$_0 = clip;
    this.paint_osfjj2$_0 = paint;
    this.transform_eb3l64$_0 = transform;
    this.thickness = thickness;
    this.pixelHinting = pixelHinting;
    this.scaleMode = scaleMode;
    this.startCaps = startCaps;
    this.endCaps = endCaps;
    this.joints = joints;
    this.miterLimit = miterLimit;
  }
  Object.defineProperty(PolylineShape.prototype, 'path', {
    get: function () {
      return this.path_szk01b$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'clip', {
    get: function () {
      return this.clip_sslh7o$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'paint', {
    get: function () {
      return this.paint_osfjj2$_0;
    }
  });
  Object.defineProperty(PolylineShape.prototype, 'transform', {
    get: function () {
      return this.transform_eb3l64$_0;
    }
  });
  PolylineShape.prototype.drawInternal_vuz2tk$ = function (c) {
    c.lineScaleMode = this.scaleMode;
    c.lineWidth = this.thickness;
    c.lineCap = this.endCaps;
    c.stroke_i8h3xk$(this.paint);
  };
  PolylineShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return plus(StyledShape.prototype.getSvgXmlAttributes_b7xfbk$.call(this, svg), mapOf([to('stroke-width', this.thickness.toString()), to('stroke', toSvg_1(this.paint, svg))]));
  };
  PolylineShape.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PolylineShape',
    interfaces: [StyledShape]
  };
  PolylineShape.prototype.component1 = function () {
    return this.path;
  };
  PolylineShape.prototype.component2 = function () {
    return this.clip;
  };
  PolylineShape.prototype.component3 = function () {
    return this.paint;
  };
  PolylineShape.prototype.component4 = function () {
    return this.transform;
  };
  PolylineShape.prototype.component5 = function () {
    return this.thickness;
  };
  PolylineShape.prototype.component6 = function () {
    return this.pixelHinting;
  };
  PolylineShape.prototype.component7 = function () {
    return this.scaleMode;
  };
  PolylineShape.prototype.component8 = function () {
    return this.startCaps;
  };
  PolylineShape.prototype.component9 = function () {
    return this.endCaps;
  };
  PolylineShape.prototype.component10 = function () {
    return this.joints;
  };
  PolylineShape.prototype.component11 = function () {
    return this.miterLimit;
  };
  PolylineShape.prototype.copy_c5uspr$ = function (path, clip, paint, transform, thickness, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
    return new PolylineShape(path === void 0 ? this.path : path, clip === void 0 ? this.clip : clip, paint === void 0 ? this.paint : paint, transform === void 0 ? this.transform : transform, thickness === void 0 ? this.thickness : thickness, pixelHinting === void 0 ? this.pixelHinting : pixelHinting, scaleMode === void 0 ? this.scaleMode : scaleMode, startCaps === void 0 ? this.startCaps : startCaps, endCaps === void 0 ? this.endCaps : endCaps, joints === void 0 ? this.joints : joints, miterLimit === void 0 ? this.miterLimit : miterLimit);
  };
  PolylineShape.prototype.toString = function () {
    return 'PolylineShape(path=' + Kotlin.toString(this.path) + (', clip=' + Kotlin.toString(this.clip)) + (', paint=' + Kotlin.toString(this.paint)) + (', transform=' + Kotlin.toString(this.transform)) + (', thickness=' + Kotlin.toString(this.thickness)) + (', pixelHinting=' + Kotlin.toString(this.pixelHinting)) + (', scaleMode=' + Kotlin.toString(this.scaleMode)) + (', startCaps=' + Kotlin.toString(this.startCaps)) + (', endCaps=' + Kotlin.toString(this.endCaps)) + (', joints=' + Kotlin.toString(this.joints)) + (', miterLimit=' + Kotlin.toString(this.miterLimit)) + ')';
  };
  PolylineShape.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    result = result * 31 + Kotlin.hashCode(this.clip) | 0;
    result = result * 31 + Kotlin.hashCode(this.paint) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.thickness) | 0;
    result = result * 31 + Kotlin.hashCode(this.pixelHinting) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.startCaps) | 0;
    result = result * 31 + Kotlin.hashCode(this.endCaps) | 0;
    result = result * 31 + Kotlin.hashCode(this.joints) | 0;
    result = result * 31 + Kotlin.hashCode(this.miterLimit) | 0;
    return result;
  };
  PolylineShape.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.path, other.path) && Kotlin.equals(this.clip, other.clip) && Kotlin.equals(this.paint, other.paint) && Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.thickness, other.thickness) && Kotlin.equals(this.pixelHinting, other.pixelHinting) && Kotlin.equals(this.scaleMode, other.scaleMode) && Kotlin.equals(this.startCaps, other.startCaps) && Kotlin.equals(this.endCaps, other.endCaps) && Kotlin.equals(this.joints, other.joints) && Kotlin.equals(this.miterLimit, other.miterLimit)))));
  };
  function CompoundShape(components) {
    this.components = components;
  }
  CompoundShape.prototype.addBounds_w97n1m$ = function (bb) {
    var tmp$;
    tmp$ = this.components.iterator();
    while (tmp$.hasNext()) {
      var component = tmp$.next();
      component.addBounds_w97n1m$(bb);
    }
  };
  CompoundShape.prototype.draw_vuz2tk$ = function (c) {
    var tmp$;
    tmp$ = this.components.iterator();
    while (tmp$.hasNext()) {
      var component = tmp$.next();
      component.draw_vuz2tk$(c);
    }
  };
  CompoundShape.prototype.buildSvg_b7xfbk$ = function (svg) {
    var tmp$;
    tmp$ = this.components.iterator();
    while (tmp$.hasNext()) {
      var component = tmp$.next();
      component.buildSvg_b7xfbk$(svg);
    }
  };
  CompoundShape.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CompoundShape',
    interfaces: [Shape]
  };
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function SVG_0(root) {
    this.root = root;
    this.x = this.root.int_bm4lxs$('x', 0);
    this.y = this.root.int_bm4lxs$('y', 0);
    this.width_q93f0k$_0 = this.root.int_bm4lxs$('width', 128);
    this.height_tn4usr$_0 = this.root.int_bm4lxs$('height', 128);
    var tmp$;
    this.viewBox = (tmp$ = this.root.getString_61zpoe$('viewBox')) != null ? tmp$ : '0 0 ' + this.width + ' ' + this.height;
    this.defs = HashMap_init();
    this.parseDefs();
  }
  Object.defineProperty(SVG_0.prototype, 'width', {
    get: function () {
      return this.width_q93f0k$_0;
    }
  });
  Object.defineProperty(SVG_0.prototype, 'height', {
    get: function () {
      return this.height_tn4usr$_0;
    }
  });
  function SVG$Style() {
    this.props = HashMap_init();
  }
  SVG$Style.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Style',
    interfaces: []
  };
  function SVG$GradientUnits(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SVG$GradientUnits_initFields() {
    SVG$GradientUnits_initFields = function () {
    };
    SVG$GradientUnits$USER_SPACE_ON_USER_instance = new SVG$GradientUnits('USER_SPACE_ON_USER', 0);
    SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance = new SVG$GradientUnits('OBJECT_BOUNDING_BOX', 1);
  }
  var SVG$GradientUnits$USER_SPACE_ON_USER_instance;
  function SVG$GradientUnits$USER_SPACE_ON_USER_getInstance() {
    SVG$GradientUnits_initFields();
    return SVG$GradientUnits$USER_SPACE_ON_USER_instance;
  }
  var SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance;
  function SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance() {
    SVG$GradientUnits_initFields();
    return SVG$GradientUnits$OBJECT_BOUNDING_BOX_instance;
  }
  SVG$GradientUnits.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GradientUnits',
    interfaces: [Enum]
  };
  function SVG$GradientUnits$values() {
    return [SVG$GradientUnits$USER_SPACE_ON_USER_getInstance(), SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance()];
  }
  SVG$GradientUnits.values = SVG$GradientUnits$values;
  function SVG$GradientUnits$valueOf(name) {
    switch (name) {
      case 'USER_SPACE_ON_USER':
        return SVG$GradientUnits$USER_SPACE_ON_USER_getInstance();
      case 'OBJECT_BOUNDING_BOX':
        return SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korim.vector.format.SVG.GradientUnits.' + name);
    }
  }
  SVG$GradientUnits.valueOf_61zpoe$ = SVG$GradientUnits$valueOf;
  SVG_0.prototype.parsePercent_61zpoe$ = function (str) {
    var tmp$;
    if (endsWith(str, '%')) {
      tmp$ = toDouble(substr_0(str, 0, -1)) / 100.0;
    }
     else {
      tmp$ = toDouble(str);
    }
    return tmp$;
  };
  SVG_0.prototype.parseStops_473e7m$ = function (xml) {
    var tmp$;
    var out = ArrayList_init();
    tmp$ = xml.children_61zpoe$('stop').iterator();
    while (tmp$.hasNext()) {
      var stop = tmp$.next();
      var offset = this.parsePercent_61zpoe$(stop.str_puj7f4$('offset'));
      var colorStop = NamedColors_getInstance().get_bm4lxs$(stop.str_puj7f4$('stop-color'));
      var alphaStop = stop.double_io5o9c$('stop-opacity', 1.0);
      var element = new Pair(offset, RGBA_getInstance().packRGB_A_vux9f0$(colorStop, alphaStop * 255 | 0));
      out.add_11rb$(element);
    }
    return out;
  };
  SVG_0.prototype.parseDef_473e7m$ = function (def) {
    var tmp$, tmp$_0;
    var type = def.nameLC;
    if (Kotlin.equals(type, 'lineargradient') || Kotlin.equals(type, 'radialgradient')) {
      var id = def.str_puj7f4$('id').toLowerCase();
      var x0 = def.double_io5o9c$('x1', 0.0);
      var y0 = def.double_io5o9c$('y1', 0.0);
      var x1 = def.double_io5o9c$('x2', 1.0);
      var y1 = def.double_io5o9c$('y2', 1.0);
      var stops = this.parseStops_473e7m$(def);
      if (Kotlin.equals(type, 'lineargradient')) {
        tmp$ = new Context2d$LinearGradient(x0, y0, x1, y1);
      }
       else {
        var r0 = def.double_io5o9c$('r0', 0.0);
        var r1 = def.double_io5o9c$('r1', 0.0);
        tmp$ = new Context2d$RadialGradient(x0, y0, r0, x1, y1, r1);
      }
      var g = tmp$;
      tmp$_0 = stops.iterator();
      while (tmp$_0.hasNext()) {
        var tmp$_1 = tmp$_0.next();
        var offset = tmp$_1.component1()
        , color = tmp$_1.component2();
        g.addColorStop_12fank$(offset, color);
      }
      this.defs.put_xwzc9p$(id, g);
    }
     else if (!Kotlin.equals(type, 'style'))
      if (!Kotlin.equals(type, '_text_')) {
        println("Unhandled def: '" + type + "'");
      }
  };
  SVG_0.prototype.parseDefs = function () {
    var tmp$;
    tmp$ = get_allChildren(this.root.get_61zpoe$('defs')).iterator();
    while (tmp$.hasNext()) {
      var def = tmp$.next();
      this.parseDef_473e7m$(def);
    }
  };
  SVG_0.prototype.draw_vuz2tk$ = function (c) {
    c.save();
    try {
      c.strokeStyle = Context2d$None_getInstance();
      c.fillStyle = Context2d$None_getInstance();
      this.drawElement_97uusy$(this.root, c);
    }
    finally {
      c.restore();
    }
  };
  SVG_0.prototype.drawChildren_97uusy$ = function (xml, c) {
    var tmp$;
    tmp$ = xml.allChildren.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      this.drawElement_97uusy$(child, c);
    }
  };
  SVG_0.prototype.parseFillStroke_vgfctv$ = function (c, str2, bounds) {
    var tmp$;
    var str = str2.toLowerCase();
    if (startsWith(str, 'url(')) {
      var urlPattern = substr_0(str, 4, -1);
      if (startsWith(urlPattern, '#')) {
        var idName = substr(urlPattern, 1).toLowerCase();
        var def = this.defs.get_11rb$(idName);
        if (def == null) {
          println(this.defs);
          println("Can't find svg definition '" + idName + "'");
        }
        tmp$ = def != null ? def : c.none;
      }
       else {
        println('Unsupported ' + str);
        tmp$ = c.none;
      }
    }
     else {
      if (Kotlin.equals(str, 'none'))
        tmp$ = c.none;
      else
        tmp$ = c.createColor_za3lpa$(NamedColors_getInstance().get_bm4lxs$(str));
    }
    var res = tmp$;
    if (Kotlin.isType(res, Context2d$Gradient)) {
      var m = new Matrix2d();
      m.scale_lu1900$(bounds.width, bounds.height);
      var out = res.applyMatrix_yx07kl$(m);
      return out;
    }
     else {
      return res;
    }
  };
  function SVG$drawElement$lambda$lambda(closure$ss) {
    return function () {
      return closure$ss.hasMore;
    };
  }
  var StrReader$readWhile$lambda = wrapFunction(function () {
    var toBoxedChar = Kotlin.toBoxedChar;
    return function (closure$filter, this$StrReader) {
      return function () {
        var $this = this$StrReader;
        var filter = closure$filter;
        while ($this.hasMore && filter(toBoxedChar($this.peekChar())))
          $this.readChar();
        return Unit;
      };
    };
  });
  function SVG$drawElement$lambda$lambda_0(closure$ss) {
    return function (it) {
      var $this = closure$ss;
      while (true) {
        var tmp$ = $this.hasMore;
        if (tmp$) {
          tmp$ = !get_isNumeric(unboxChar(toBoxedChar($this.peekChar())));
        }
        if (!tmp$)
          break;
        $this.readChar();
      }
      var $this_0 = closure$ss;
      var tmp$_0;
      var start = $this_0.pos;
      while (true) {
        var tmp$_1 = $this_0.hasMore;
        if (tmp$_1) {
          tmp$_1 = get_isNumeric(unboxChar(toBoxedChar($this_0.peekChar())));
        }
        if (!tmp$_1)
          break;
        $this_0.readChar();
      }
      var end = $this_0.pos;
      var out = toDouble((tmp$_0 = end > start ? $this_0.slice_vux9f0$(start, end) : null) != null ? tmp$_0 : '');
      var $this_1 = closure$ss;
      while (true) {
        var tmp$_2 = $this_1.hasMore;
        if (tmp$_2) {
          tmp$_2 = !get_isNumeric(unboxChar(toBoxedChar($this_1.peekChar())));
        }
        if (!tmp$_2)
          break;
        $this_1.readChar();
      }
      return out;
    };
  }
  function SVG$drawElement$lambda$readNumber($receiver) {
    var $this = $receiver.skipSpaces();
    var tmp$;
    var start = $this.pos;
    while (true) {
      var tmp$_0 = $this.hasMore;
      if (tmp$_0) {
        var it = toBoxedChar($this.peekChar());
        tmp$_0 = isDigit(unboxChar(it)) || unboxChar(it) === 45 || unboxChar(it) === 46;
      }
      if (!tmp$_0)
        break;
      $this.readChar();
    }
    var end = $this.pos;
    return toDouble((tmp$ = end > start ? $this.slice_vux9f0$(start, end) : null) != null ? tmp$ : '');
  }
  var Context2d$keepApply$lambda$lambda = wrapFunction(function () {
    return function (closure$callback, this$) {
      return function () {
        closure$callback(this$);
        return Unit;
      };
    };
  });
  var Context2d$keepApply$lambda = wrapFunction(function () {
    return function (closure$callback) {
      return function ($receiver) {
        $receiver.save();
        try {
          closure$callback($receiver);
        }
        finally {
          $receiver.restore();
        }
        return Unit;
      };
    };
  });
  SVG_0.prototype.drawElement_97uusy$ = function (xml, c) {
    c.save();
    try {
      var tmp$, tmp$_0;
      var bounds = new Rectangle();
      var nodeName = xml.nameLC;
      if (!Kotlin.equals(nodeName, '_text_'))
        if (Kotlin.equals(nodeName, 'svg'))
          this.drawChildren_97uusy$(xml, c);
        else if (Kotlin.equals(nodeName, 'lineargradient') || Kotlin.equals(nodeName, 'radialgradient'))
          this.parseDef_473e7m$(xml);
        else if (Kotlin.equals(nodeName, 'rect')) {
          var x = xml.double_io5o9c$('x');
          var y = xml.double_io5o9c$('y');
          var width = xml.double_io5o9c$('width');
          var height = xml.double_io5o9c$('height');
          var rx = xml.double_io5o9c$('rx');
          var ry = xml.double_io5o9c$('ry');
          bounds.setTo_6y0v78$(x, y, width, height);
          c.roundRect_15yvbs$(x, y, width, height, rx, ry);
        }
         else if (Kotlin.equals(nodeName, 'circle')) {
          var cx = xml.double_io5o9c$('cx');
          var cy = xml.double_io5o9c$('cy');
          var radius = xml.double_io5o9c$('r');
          c.circle_yvo9jy$(cx, cy, radius);
          bounds.setBounds_6y0v78$(cx - radius, cy - radius, cx + radius, cy + radius);
        }
         else if (Kotlin.equals(nodeName, 'polyline') || Kotlin.equals(nodeName, 'polygon')) {
          c.beginPath();
          var ss = new StrReader(xml.str_puj7f4$('points'));
          var pps = new ListReader(mapWhile(SVG$drawElement$lambda$lambda(ss), SVG$drawElement$lambda$lambda_0(ss)));
          var path = new GraphicsPath();
          var edges = 0;
          path.moveTo_lu1900$(pps.read(), pps.read());
          while (pps.hasMore) {
            var x_0 = pps.read();
            var y_0 = pps.read();
            path.lineTo_lu1900$(x_0, y_0);
            edges = edges + 1 | 0;
          }
          if (Kotlin.equals(nodeName, 'polygon'))
            path.close();
          path.getBounds_iqjpvb$(bounds);
          c.path_lcui0n$(path);
        }
         else if (Kotlin.equals(nodeName, 'line')) {
          c.beginPath();
          var x1 = xml.double_io5o9c$('x1');
          var y1 = xml.double_io5o9c$('y1');
          var x2 = xml.double_io5o9c$('x2');
          var y2 = xml.double_io5o9c$('y2');
          c.moveTo_lu1900$(x1, y1);
          c.lineTo_lu1900$(x2, y2);
          bounds.setBounds_6y0v78$(x1, y1, x2, y2);
        }
         else if (!Kotlin.equals(nodeName, 'g'))
          if (Kotlin.equals(nodeName, 'text'))
            c.fillText_ai6r6m$(xml.text, xml.double_io5o9c$('x') + xml.double_io5o9c$('dx'), xml.double_io5o9c$('y') + xml.double_io5o9c$('dy'));
          else if (Kotlin.equals(nodeName, 'path')) {
            var d = xml.str_puj7f4$('d');
            var dr = new StrReader(d);
            var readNumber = SVG$drawElement$lambda$readNumber;
            var path_0 = new GraphicsPath();
            while (!dr.eof) {
              dr.skipSpaces();
              var cmd = dr.read();
              if (cmd === 77)
                path_0.moveTo_lu1900$(readNumber(dr), readNumber(dr));
              else if (cmd === 109)
                path_0.rMoveTo_lu1900$(readNumber(dr), readNumber(dr));
              else if (cmd === 76)
                path_0.lineTo_lu1900$(readNumber(dr), readNumber(dr));
              else if (cmd === 108)
                path_0.rLineTo_lu1900$(readNumber(dr), readNumber(dr));
              else if (cmd === 81)
                path_0.quadTo_6y0v78$(readNumber(dr), readNumber(dr), readNumber(dr), readNumber(dr));
              else if (cmd === 113)
                path_0.rQuadTo_6y0v78$(readNumber(dr), readNumber(dr), readNumber(dr), readNumber(dr));
              else if (cmd === 67)
                path_0.cubicTo_15yvbs$(readNumber(dr), readNumber(dr), readNumber(dr), readNumber(dr), readNumber(dr), readNumber(dr));
              else if (cmd === 99)
                path_0.rCubicTo_15yvbs$(readNumber(dr), readNumber(dr), readNumber(dr), readNumber(dr), readNumber(dr), readNumber(dr));
              else if (cmd === 72)
                path_0.moveToH_14dthe$(readNumber(dr));
              else if (cmd === 104)
                path_0.rMoveToH_14dthe$(readNumber(dr));
              else if (cmd === 86)
                path_0.moveToV_14dthe$(readNumber(dr));
              else if (cmd === 118)
                path_0.rMoveToV_14dthe$(readNumber(dr));
              else if (cmd === 90)
                path_0.close();
              else if (cmd === 122)
                path_0.close();
              else {
                throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported ' + String.fromCharCode(cmd)));
              }
            }
            path_0.getBounds_iqjpvb$(bounds);
            c.beginPath();
            c.path_lcui0n$(path_0);
          }
      if (xml.hasAttribute_61zpoe$('stroke-width')) {
        c.lineWidth = xml.double_io5o9c$('stroke-width', 1.0);
      }
      if (xml.hasAttribute_61zpoe$('stroke')) {
        c.strokeStyle = this.parseFillStroke_vgfctv$(c, xml.str_puj7f4$('stroke'), bounds);
      }
      if (xml.hasAttribute_61zpoe$('fill')) {
        c.fillStyle = this.parseFillStroke_vgfctv$(c, xml.str_puj7f4$('fill'), bounds);
      }
      if (xml.hasAttribute_61zpoe$('font-size')) {
        c.font = c.font.copy_io5o9c$(void 0, xml.double_io5o9c$('font-size'));
      }
      if (xml.hasAttribute_61zpoe$('font-family')) {
        c.font = c.font.copy_io5o9c$(xml.str_puj7f4$('font-family'));
      }
      if (xml.hasAttribute_61zpoe$('text-anchor')) {
        tmp$ = xml.str_puj7f4$('text-anchor').toLowerCase();
        if (Kotlin.equals(tmp$, 'left'))
          tmp$_0 = Context2d$HorizontalAlign$LEFT_getInstance();
        else if (Kotlin.equals(tmp$, 'center') || Kotlin.equals(tmp$, 'middle'))
          tmp$_0 = Context2d$HorizontalAlign$CENTER_getInstance();
        else if (Kotlin.equals(tmp$, 'right'))
          tmp$_0 = Context2d$HorizontalAlign$RIGHT_getInstance();
        else
          tmp$_0 = c.horizontalAlign;
        c.horizontalAlign = tmp$_0;
      }
      if (xml.hasAttribute_61zpoe$('fill-opacity')) {
        c.globalAlpha = xml.double_io5o9c$('fill-opacity', 1.0);
      }
      if (Kotlin.equals(nodeName, 'g'))
        this.drawChildren_97uusy$(xml, c);
      c.fillStroke();
    }
    finally {
      c.restore();
    }
    return c;
  };
  SVG_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SVG',
    interfaces: [Context2d$SizedDrawable]
  };
  function SVG_init(str, $this) {
    $this = $this || Object.create(SVG_0.prototype);
    SVG_0.call($this, Xml_0(str));
    return $this;
  }
  function NativeImageSpecialReader() {
    NativeImageSpecialReader_instance = this;
    this.instance_os49up$_0 = lazy(NativeImageSpecialReader$instance$lambda);
  }
  Object.defineProperty(NativeImageSpecialReader.prototype, 'instance', {
    get: function () {
      var $receiver = this.instance_os49up$_0;
      new Kotlin.PropertyMetadata('instance');
      return $receiver.value;
    }
  });
  function NativeImageSpecialReader$instance$lambda() {
    return new HtmlImageSpecialReader();
  }
  NativeImageSpecialReader.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'NativeImageSpecialReader',
    interfaces: []
  };
  var NativeImageSpecialReader_instance = null;
  function NativeImageSpecialReader_getInstance() {
    if (NativeImageSpecialReader_instance === null) {
      new NativeImageSpecialReader();
    }
    return NativeImageSpecialReader_instance;
  }
  function HtmlImage() {
    HtmlImage_instance = this;
  }
  HtmlImage.prototype.createHtmlCanvas_vux9f0$ = function (width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };
  HtmlImage.prototype.renderToHtmlCanvas_to9ovb$ = function (bmpData, bmpWidth, bmpHeight, canvas) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var bmpDataData = bmpData;
    var pixelCount = bmpData.length;
    var ctx = canvas.getContext('2d');
    var idata = ctx.createImageData(bmpWidth, bmpHeight);
    var idataData = idata.data;
    var m = 0;
    for (var n = 0; n < pixelCount; n++) {
      var c = bmpDataData[n];
      idataData[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = Kotlin.toByte(c >>> 0 & 255);
      idataData[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = Kotlin.toByte(c >>> 8 & 255);
      idataData[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = Kotlin.toByte(c >>> 16 & 255);
      idataData[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = Kotlin.toByte(c >>> 24 & 255);
    }
    ctx.putImageData(idata, 0.0, 0.0);
    return canvas;
  };
  HtmlImage.prototype.renderToHtmlCanvas_4jes5x$ = function (bmp, canvas) {
    return this.renderToHtmlCanvas_to9ovb$(bmp.data, bmp.width, bmp.height, canvas);
  };
  HtmlImage.prototype.renderHtmlCanvasIntoBitmap_y7limx$ = function (canvas, out) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var width = canvas.width;
    var height = canvas.height;
    var len = Kotlin.imul(width, height);
    var ctx = canvas.getContext('2d');
    var data = ctx.getImageData(0.0, 0.0, width, height);
    var ddata = data.data;
    var m = 0;
    for (var n = 0; n < len; n++) {
      var r = ddata[tmp$ = m, m = tmp$ + 1 | 0, tmp$];
      var g = ddata[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0];
      var b = ddata[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1];
      var a = ddata[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2];
      out[n] = r << 0 | g << 8 | b << 16 | a << 24;
    }
  };
  HtmlImage.prototype.renderHtmlCanvasIntoBitmap_co8odx$ = function (canvas, bmp) {
    this.renderHtmlCanvasIntoBitmap_y7limx$(canvas, bmp.data);
  };
  HtmlImage.prototype.bitmapToHtmlCanvas_59u9qz$ = function (bmp) {
    return this.renderToHtmlCanvas_4jes5x$(bmp, this.createHtmlCanvas_vux9f0$(bmp.width, bmp.height));
  };
  HtmlImage.prototype.htmlCanvasToDataUrl_ap7jt0$ = function (canvas) {
    return canvas.toDataURL();
  };
  HtmlImage.prototype.htmlCanvasClear_ap7jt0$ = function (canvas) {
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0.0, 0.0, canvas.width, canvas.height);
  };
  HtmlImage.prototype.htmlCanvasSetSize_v0aytg$ = function (canvas, width, height) {
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };
  HtmlImage.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'HtmlImage',
    interfaces: []
  };
  var HtmlImage_instance = null;
  function HtmlImage_getInstance() {
    if (HtmlImage_instance === null) {
      new HtmlImage();
    }
    return HtmlImage_instance;
  }
  function toHtmlNative($receiver) {
    if (Kotlin.isType($receiver, CanvasNativeImage))
      return $receiver;
    else
      return new CanvasNativeImage(HtmlImage_getInstance().bitmapToHtmlCanvas_59u9qz$($receiver.toBMP32()));
  }
  function HtmlImageSpecialReader() {
    VfsSpecialReader.call(this, Kotlin.getKClass(NativeImage));
  }
  HtmlImageSpecialReader.prototype.readSpecial_9oq4me$ = function (vfs_0, path_0, continuation_0, suspended) {
    var instance = new Coroutine$readSpecial_9oq4me$(this, vfs_0, path_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$readSpecial_9oq4me$($this, vfs_0, path_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$jsUrl = void 0;
    this.local$canvas = void 0;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
  }
  Coroutine$readSpecial_9oq4me$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSpecial_9oq4me$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSpecial_9oq4me$.prototype.constructor = Coroutine$readSpecial_9oq4me$;
  Coroutine$readSpecial_9oq4me$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$vfs, LocalVfs)) {
              this.state_0 = 6;
              this.result_0 = NativeImageFormatProvider$BrowserImage_getInstance().loadImage_61zpoe$(this.local$path, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              if (Kotlin.isType(this.local$vfs, UrlVfs)) {
                this.local$jsUrl = this.local$vfs.getFullUrl_61zpoe$(this.local$path);
                this.state_0 = 4;
                this.result_0 = NativeImageFormatProvider$BrowserImage_getInstance().loadImage_61zpoe$(this.local$jsUrl, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                break;
              }
               else {
                this.local$tmp$ = NativeImageFormatProvider$BrowserImage_getInstance();
                this.state_0 = 2;
                this.result_0 = this.local$vfs.get_61zpoe$(this.local$path).readAll(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                break;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.decodeToCanvas_fqrh44$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 5;
            continue;
          case 4:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 7;
            continue;
          case 6:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            this.local$canvas = this.local$tmp$_0;
            return new CanvasNativeImage(this.local$canvas);
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
  HtmlImageSpecialReader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HtmlImageSpecialReader',
    interfaces: [VfsSpecialReader]
  };
  function CanvasNativeImage(canvas) {
    NativeImage.call(this, canvas.width, canvas.height, canvas, false);
    this.canvas = canvas;
    this.name_yldoag$_0 = 'CanvasNativeImage';
  }
  Object.defineProperty(CanvasNativeImage.prototype, 'name', {
    get: function () {
      return this.name_yldoag$_0;
    }
  });
  CanvasNativeImage.prototype.toNonNativeBmp = function () {
    var data = new Int32Array(Kotlin.imul(this.width, this.height));
    NativeImageFormatProvider$BrowserImage_getInstance().imgData_y7limx$(this.canvas, data);
    return new Bitmap32(this.width, this.height, data);
  };
  CanvasNativeImage.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    return new Context2d(new CanvasContext2dRenderer(this.canvas));
  };
  CanvasNativeImage.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CanvasNativeImage',
    interfaces: [NativeImage]
  };
  function NativeImageFormatProvider() {
    NativeImageFormatProvider_instance = this;
  }
  NativeImageFormatProvider.prototype.decode_fqrh44$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_fqrh44$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_fqrh44$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$decode_fqrh44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_fqrh44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_fqrh44$.prototype.constructor = Coroutine$decode_fqrh44$;
  Coroutine$decode_fqrh44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = NativeImageFormatProvider$BrowserImage_getInstance().decodeToCanvas_fqrh44$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return new CanvasNativeImage(this.result_0);
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
  NativeImageFormatProvider.prototype.create_vux9f0$ = function (width, height) {
    var canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    return new CanvasNativeImage(canvas);
  };
  NativeImageFormatProvider.prototype.copy_uler2c$ = function (bmp) {
    return new CanvasNativeImage(HtmlImage_getInstance().bitmapToHtmlCanvas_59u9qz$(bmp.toBMP32()));
  };
  NativeImageFormatProvider.prototype.display_uler2c$ = function (bitmap, continuation) {
    var tmp$;
    var img = toHtmlNative(bitmap);
    (tmp$ = document.body) != null ? tmp$.appendChild(img.canvas) : null;
  };
  NativeImageFormatProvider.prototype.mipmap_uwsoz2$ = function (bmp, levels) {
    var out = ensureNative(bmp);
    for (var n = 0; n < levels; n++)
      out = this.mipmap_uler2c$(out);
    return out;
  };
  NativeImageFormatProvider.prototype.mipmap_uler2c$ = function (bmp) {
    var a = bmp.width * 0.5;
    var tmp$ = Math_0.ceil(a) | 0;
    var a_0 = bmp.height * 0.5;
    var out = NativeImage_0(tmp$, Math_0.ceil(a_0) | 0);
    out.getContext2d_6taknv$(true).renderer.drawImage_4amb17$(bmp, 0, 0, out.width, out.height);
    return out;
  };
  function NativeImageFormatProvider$BrowserImage() {
    NativeImageFormatProvider$BrowserImage_instance = this;
  }
  NativeImageFormatProvider$BrowserImage.prototype.decodeToCanvas_fqrh44$ = function (bytes_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeToCanvas_fqrh44$(this, bytes_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decodeToCanvas_fqrh44$($this, bytes_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$type = void 0;
    this.local$o = void 0;
    this.local$blob = void 0;
    this.local$blobURL = void 0;
    this.local$bytes = bytes_0;
  }
  Coroutine$decodeToCanvas_fqrh44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeToCanvas_fqrh44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeToCanvas_fqrh44$.prototype.constructor = Coroutine$decodeToCanvas_fqrh44$;
  Coroutine$decodeToCanvas_fqrh44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = [this.local$bytes];
            this.local$type = 'image/png';
            if (this.local$type === void 0)
              this.local$type = '';
            this.local$o = {};
            this.local$o['type'] = this.local$type;
            this.local$blob = new Blob(this.local$tmp$, this.local$o);
            this.local$blobURL = URL.createObjectURL(this.local$blob);
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.$this.loadImage_61zpoe$(this.local$blobURL, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.exceptionState_0 = 6;
            this.finallyPath_0 = [2];
            this.state_0 = 5;
            this.$returnValue = this.result_0;
            continue;
          case 2:
            return this.$returnValue;
          case 3:
            return;
          case 4:
            this.finallyPath_0 = [6];
            this.state_0 = 5;
            continue;
          case 5:
            URL.revokeObjectURL(this.local$blobURL);
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 6)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda(closure$img, closure$c) {
    return function (it) {
      var canvas = document.createElement('canvas');
      canvas.width = closure$img.width;
      canvas.height = closure$img.height;
      var ctx = canvas.getContext('2d');
      ctx.drawImage(closure$img, 0.0, 0.0);
      closure$c.resume_11rb$(canvas);
      return Unit;
    };
  }
  function NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda_0(closure$c) {
    return function (f, f_0, f_1, f_2, f_3) {
      closure$c.resumeWithException_tcv7n7$(new RuntimeException('error loading image'));
      return Unit;
    };
  }
  function NativeImageFormatProvider$BrowserImage$loadImage$lambda(closure$jsUrl) {
    return function (c) {
      var img = new Image();
      img.onload = NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda(img, c);
      img.onerror = NativeImageFormatProvider$BrowserImage$loadImage$lambda$lambda_0(c);
      img.src = closure$jsUrl;
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
  NativeImageFormatProvider$BrowserImage.prototype.loadImage_61zpoe$ = function (jsUrl, continuation) {
    return suspendCoroutine$lambda(_korioSuspendCoroutine$lambda(korioSuspendCoroutine$lambda(NativeImageFormatProvider$BrowserImage$loadImage$lambda(jsUrl))))(continuation.facade);
  };
  NativeImageFormatProvider$BrowserImage.prototype.imgData_y7limx$ = function (canvas, out) {
    HtmlImage_getInstance().renderHtmlCanvasIntoBitmap_y7limx$(canvas, out);
  };
  NativeImageFormatProvider$BrowserImage.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BrowserImage',
    interfaces: []
  };
  var NativeImageFormatProvider$BrowserImage_instance = null;
  function NativeImageFormatProvider$BrowserImage_getInstance() {
    if (NativeImageFormatProvider$BrowserImage_instance === null) {
      new NativeImageFormatProvider$BrowserImage();
    }
    return NativeImageFormatProvider$BrowserImage_instance;
  }
  NativeImageFormatProvider.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'NativeImageFormatProvider',
    interfaces: []
  };
  var NativeImageFormatProvider_instance = null;
  function NativeImageFormatProvider_getInstance() {
    if (NativeImageFormatProvider_instance === null) {
      new NativeImageFormatProvider();
    }
    return NativeImageFormatProvider_instance;
  }
  function CanvasContext2dRenderer(canvas) {
    Context2d$Renderer.call(this);
    this.canvas_0 = canvas;
    this.ctx = this.canvas_0.getContext('2d');
  }
  Object.defineProperty(CanvasContext2dRenderer.prototype, 'width', {
    get: function () {
      return this.canvas_0.width;
    }
  });
  Object.defineProperty(CanvasContext2dRenderer.prototype, 'height', {
    get: function () {
      return this.canvas_0.height;
    }
  });
  CanvasContext2dRenderer.prototype.toJsStr_2y61xz$ = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    if (Kotlin.isType($receiver, Context2d$None))
      tmp$_1 = 'none';
    else if (Kotlin.isType($receiver, Context2d$Color))
      tmp$_1 = NamedColors_getInstance().toHtmlString_za3lpa$($receiver.color);
    else if (Kotlin.isType($receiver, Context2d$LinearGradient)) {
      var grad = this.ctx.createLinearGradient($receiver.x0, $receiver.y0, $receiver.x1, $receiver.y1);
      tmp$ = $receiver.stops.size;
      for (var n = 0; n < tmp$; n++) {
        var stop = $receiver.stops.get_za3lpa$(n);
        var color = $receiver.colors.get_za3lpa$(n);
        grad.addColorStop(stop, NamedColors_getInstance().toHtmlString_za3lpa$(color));
      }
      tmp$_1 = grad;
    }
     else if (Kotlin.isType($receiver, Context2d$RadialGradient)) {
      var grad_0 = this.ctx.createRadialGradient($receiver.x0, $receiver.y0, $receiver.r0, $receiver.x1, $receiver.y1, $receiver.r1);
      tmp$_0 = $receiver.stops.size;
      for (var n_0 = 0; n_0 < tmp$_0; n_0++) {
        var stop_0 = $receiver.stops.get_za3lpa$(n_0);
        var color_0 = $receiver.colors.get_za3lpa$(n_0);
        grad_0.addColorStop(stop_0, NamedColors_getInstance().toHtmlString_za3lpa$(color_0));
      }
      tmp$_1 = grad_0;
    }
     else if (Kotlin.isType($receiver, Context2d$BitmapPaint))
      tmp$_1 = this.ctx.createPattern(toHtmlNative($receiver.bitmap).canvas, $receiver.repeat ? 'repeat' : 'no-repeat');
    else
      tmp$_1 = 'black';
    return tmp$_1;
  };
  CanvasContext2dRenderer.prototype.keep_0 = function (callback) {
    this.ctx.save();
    try {
      return callback();
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.setFont_0 = function (font) {
    this.ctx.font = font.size.toString() + "px '" + font.name + "'";
  };
  CanvasContext2dRenderer.prototype.setState_0 = function (state, fill) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.ctx.globalAlpha = state.globalAlpha;
    this.setFont_0(state.font);
    var t = state.transform;
    this.ctx.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty);
    if (fill) {
      this.ctx.fillStyle = this.toJsStr_2y61xz$(state.fillStyle);
    }
     else {
      this.ctx.lineWidth = state.lineWidth;
      tmp$_1 = this.ctx;
      tmp$ = state.lineJoin;
      if (Kotlin.equals(tmp$, Context2d$LineJoin$BEVEL_getInstance())) {
        tmp$_0 = 'bevel';
      }
       else if (Kotlin.equals(tmp$, Context2d$LineJoin$MITER_getInstance())) {
        tmp$_0 = 'miter';
      }
       else if (Kotlin.equals(tmp$, Context2d$LineJoin$ROUND_getInstance())) {
        tmp$_0 = 'round';
      }
       else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      tmp$_1.lineJoin = tmp$_0;
      tmp$_4 = this.ctx;
      tmp$_2 = state.lineCap;
      if (Kotlin.equals(tmp$_2, Context2d$LineCap$BUTT_getInstance())) {
        tmp$_3 = 'butt';
      }
       else if (Kotlin.equals(tmp$_2, Context2d$LineCap$ROUND_getInstance())) {
        tmp$_3 = 'round';
      }
       else if (Kotlin.equals(tmp$_2, Context2d$LineCap$SQUARE_getInstance())) {
        tmp$_3 = 'square';
      }
       else
        tmp$_3 = Kotlin.noWhenBranchMatched();
      tmp$_4.lineCap = tmp$_3;
      this.ctx.strokeStyle = this.toJsStr_2y61xz$(state.strokeStyle);
    }
  };
  CanvasContext2dRenderer.prototype.transformPaint_0 = function (paint) {
    if (Kotlin.isType(paint, Context2d$TransformedPaint)) {
      var m = paint.transform;
      this.ctx.transform(m.a, m.b, m.c, m.d, m.tx, m.ty);
    }
  };
  CanvasContext2dRenderer.prototype.drawImage_4amb17$$default = function (image, x, y, width, height, transform) {
    var tmp$;
    this.ctx.save();
    try {
      this.ctx.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);
      this.ctx.drawImage((Kotlin.isType(tmp$ = ensureNative(image), CanvasNativeImage) ? tmp$ : Kotlin.throwCCE()).canvas, x, y, width, height);
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.render_w64o9o$ = function (state, fill) {
    if (state.path.isEmpty())
      return;
    this.ctx.save();
    try {
      this.setState_0(state, fill);
      this.ctx.beginPath();
      var $this = state.path;
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      var n = 0;
      tmp$ = $this.commands.iterator();
      while (tmp$.hasNext()) {
        var cmd = tmp$.next();
        if (cmd === VectorPath.Command.MOVE_TO) {
          var x = $this.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          var y = $this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
          this.ctx.moveTo(x, y);
        }
         else if (cmd === VectorPath.Command.LINE_TO) {
          var x_0 = $this.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = $this.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
          this.ctx.lineTo(x_0, y_0);
        }
         else if (cmd === VectorPath.Command.QUAD_TO) {
          var x1 = $this.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = $this.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = $this.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = $this.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
          this.ctx.quadraticCurveTo(x1, y1, x2, y2);
        }
         else if (cmd === VectorPath.Command.BEZIER_TO) {
          var x1_0 = $this.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = $this.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = $this.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = $this.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = $this.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = $this.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
          this.ctx.bezierCurveTo(x1_0, y1_0, x2_0, y2_0, x3, y3);
        }
         else if (cmd === VectorPath.Command.CLOSE) {
          this.ctx.closePath();
        }
      }
      this.ctx.save();
      if (fill) {
        this.transformPaint_0(state.fillStyle);
        this.ctx.fill();
      }
       else {
        this.transformPaint_0(state.strokeStyle);
        this.ctx.stroke();
      }
      this.ctx.restore();
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.renderText_2jdvt1$ = function (state, font, text, x, y, fill) {
    this.ctx.save();
    try {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      this.setState_0(state, fill);
      tmp$_1 = this.ctx;
      tmp$ = state.verticalAlign;
      if (Kotlin.equals(tmp$, Context2d$VerticalAlign$TOP_getInstance())) {
        tmp$_0 = 'top';
      }
       else if (Kotlin.equals(tmp$, Context2d$VerticalAlign$MIDLE_getInstance())) {
        tmp$_0 = 'middle';
      }
       else if (Kotlin.equals(tmp$, Context2d$VerticalAlign$BASELINE_getInstance())) {
        tmp$_0 = 'alphabetic';
      }
       else if (Kotlin.equals(tmp$, Context2d$VerticalAlign$BOTTOM_getInstance())) {
        tmp$_0 = 'bottom';
      }
       else
        tmp$_0 = Kotlin.noWhenBranchMatched();
      tmp$_1.textBaseline = tmp$_0;
      tmp$_4 = this.ctx;
      tmp$_2 = state.horizontalAlign;
      if (Kotlin.equals(tmp$_2, Context2d$HorizontalAlign$LEFT_getInstance())) {
        tmp$_3 = 'left';
      }
       else if (Kotlin.equals(tmp$_2, Context2d$HorizontalAlign$CENTER_getInstance())) {
        tmp$_3 = 'center';
      }
       else if (Kotlin.equals(tmp$_2, Context2d$HorizontalAlign$RIGHT_getInstance())) {
        tmp$_3 = 'right';
      }
       else
        tmp$_3 = Kotlin.noWhenBranchMatched();
      tmp$_4.textAlign = tmp$_3;
      if (fill) {
        this.ctx.fillText(text, x, y);
      }
       else {
        this.ctx.strokeText(text, x, y);
      }
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.prototype.getBounds_qlucl1$ = function (font, text, out) {
    this.ctx.save();
    try {
      this.setFont_0(font);
      var metrics = this.ctx.measureText(text);
      var width = metrics.width | 0;
      out.bounds.setTo_6y0v78$(0, 0, width + 2, font.size);
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CanvasContext2dRenderer',
    interfaces: [Context2d$Renderer]
  };
  $$importsForInline$$['korma-js'] = $module$korma_js;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korim = package$soywiz.korim || (package$soywiz.korim = {});
  var package$bitmap = package$korim.bitmap || (package$korim.bitmap = {});
  package$bitmap.Bitmap = Bitmap;
  package$bitmap.createWithThisFormatTyped_cq1euf$ = createWithThisFormatTyped;
  package$bitmap.Bitmap1 = Bitmap1;
  package$bitmap.Bitmap2 = Bitmap2;
  $$importsForInline$$['korim-js'] = _;
  Object.defineProperty(Bitmap32, 'Companion', {
    get: Bitmap32$Companion_getInstance
  });
  package$bitmap.Bitmap32_init_x84gdh$ = Bitmap32_init;
  package$bitmap.Bitmap32_init_qt1dr2$ = Bitmap32_init_0;
  package$bitmap.Bitmap32_init_guskdz$ = Bitmap32_init_1;
  package$bitmap.Bitmap32 = Bitmap32;
  package$bitmap.Bitmap4 = Bitmap4;
  $$importsForInline$$['korio-js'] = $module$korio_js;
  package$bitmap.Bitmap8 = Bitmap8;
  Object.defineProperty(BitmapChannel, 'RED', {
    get: BitmapChannel$RED_getInstance
  });
  Object.defineProperty(BitmapChannel, 'GREEN', {
    get: BitmapChannel$GREEN_getInstance
  });
  Object.defineProperty(BitmapChannel, 'BLUE', {
    get: BitmapChannel$BLUE_getInstance
  });
  Object.defineProperty(BitmapChannel, 'ALPHA', {
    get: BitmapChannel$ALPHA_getInstance
  });
  package$bitmap.BitmapChannel = BitmapChannel;
  package$bitmap.sliceWithBounds_or9s9z$ = sliceWithBounds;
  package$bitmap.sliceWithSize_or9s9z$ = sliceWithSize_0;
  package$bitmap.slice_ko78oz$ = slice_0;
  package$bitmap.matchContents_1cy7pt$ = matchContents;
  package$bitmap.BitmapIndexed = BitmapIndexed;
  package$bitmap.BitmapSlice = BitmapSlice;
  package$bitmap.NativeImage = NativeImage;
  package$bitmap.mipmap_lzupcl$ = mipmap;
  package$bitmap.toUri_p18lal$ = toUri;
  package$bitmap.NativeImage_vux9f0$ = NativeImage_0;
  package$bitmap.NativeImage_oiyklk$ = NativeImage_1;
  package$bitmap.NativeImage_7vwhb5$ = NativeImage_2;
  package$bitmap.ensureNative_p18lal$ = ensureNative;
  package$bitmap.raster_kiw58k$ = raster;
  var package$color = package$korim.color || (package$korim.color = {});
  Object.defineProperty(package$color, 'ARGB', {
    get: ARGB_getInstance
  });
  Object.defineProperty(package$color, 'BGRA', {
    get: BGRA_getInstance
  });
  ColorFormatBase.Mixin = ColorFormatBase$Mixin;
  package$color.ColorFormatBase = ColorFormatBase;
  Object.defineProperty(ColorFormat, 'Companion', {
    get: ColorFormat$Companion_getInstance
  });
  package$color.ColorFormat = ColorFormat;
  package$color.ColorFormat16 = ColorFormat16;
  package$color.ColorFormat24 = ColorFormat24;
  package$color.ColorFormat32 = ColorFormat32;
  Object.defineProperty(ColorTransform, 'Companion', {
    get: ColorTransform$Companion_getInstance
  });
  package$color.ColorTransform = ColorTransform;
  package$color.ColorTransform_6tck58$ = ColorTransform_0;
  Object.defineProperty(package$color, 'Colors', {
    get: Colors_getInstance
  });
  Object.defineProperty(package$color, 'NamedColors', {
    get: NamedColors_getInstance
  });
  Object.defineProperty(package$color, 'RGB', {
    get: RGB_getInstance
  });
  Object.defineProperty(package$color, 'RGBA', {
    get: RGBA_getInstance
  });
  Object.defineProperty(package$color, 'RGBA_4444', {
    get: RGBA_4444_getInstance
  });
  Object.defineProperty(package$color, 'RGBA_5551', {
    get: RGBA_5551_getInstance
  });
  Object.defineProperty(package$color, 'RGB_555', {
    get: RGB_555_getInstance
  });
  Object.defineProperty(package$color, 'RGB_565', {
    get: RGB_565_getInstance
  });
  Object.defineProperty(package$color, 'BGRA_4444', {
    get: BGRA_4444_getInstance
  });
  Object.defineProperty(package$color, 'BGR_555', {
    get: BGR_555_getInstance
  });
  Object.defineProperty(package$color, 'BGR_565', {
    get: BGR_565_getInstance
  });
  Object.defineProperty(package$color, 'BGRA_5551', {
    get: BGRA_5551_getInstance
  });
  package$color.RGBAd_init_h1ferx$ = RGBAd_init;
  package$color.RGBAd_init_za3lpa$ = RGBAd_init_0;
  package$color.RGBAd_init = RGBAd_init_1;
  package$color.RGBAd = RGBAd;
  package$color.RGBAf = RGBAf;
  package$color.RGBAf_1ugm5o$ = RGBAf_0;
  Object.defineProperty(package$color, 'YUVA', {
    get: YUVA_getInstance
  });
  var package$font = package$korim.font || (package$korim.font = {});
  package$font.drawText_3onmvx$ = drawText;
  BitmapFont.Glyph = BitmapFont$Glyph;
  BitmapFont.GlyphInfo = BitmapFont$GlyphInfo;
  package$font.BitmapFont = BitmapFont;
  Object.defineProperty(package$font, 'BitmapFontGenerator', {
    get: BitmapFontGenerator_getInstance
  });
  var package$format = package$korim.format || (package$korim.format = {});
  Object.defineProperty(package$format, 'BMP', {
    get: BMP_getInstance
  });
  Object.defineProperty(package$format, 'DDS', {
    get: DDS_getInstance
  });
  Object.defineProperty(package$format, 'DXT1', {
    get: DXT1_getInstance
  });
  Object.defineProperty(package$format, 'DXT2', {
    get: DXT2_getInstance
  });
  Object.defineProperty(package$format, 'DXT3', {
    get: DXT3_getInstance
  });
  Object.defineProperty(package$format, 'DXT4', {
    get: DXT4_getInstance
  });
  Object.defineProperty(package$format, 'DXT5', {
    get: DXT5_getInstance
  });
  package$format.DXT1Base = DXT1Base;
  package$format.DXT2_3 = DXT2_3;
  package$format.DXT4_5 = DXT4_5;
  Object.defineProperty(DXT, 'Companion', {
    get: DXT$Companion_getInstance
  });
  package$format.DXT = DXT;
  Object.defineProperty(package$format, 'ICO', {
    get: ICO_getInstance
  });
  package$format.ImageData = ImageData;
  package$format.ImageDecodingProps = ImageDecodingProps;
  package$format.ImageEncodingProps = ImageEncodingProps;
  package$format.ImageFormat = ImageFormat;
  package$format.ImageFormats = ImageFormats;
  package$format.writeTo_2xi4om$ = writeTo;
  Object.defineProperty(package$format, 'defaultImageFormats', {
    get: function () {
      return defaultImageFormats;
    }
  });
  package$format.ImageFrame = ImageFrame;
  package$format.get_area_mj13kf$ = get_area;
  package$format.ImageInfo = ImageInfo;
  Object.defineProperty(package$format, 'JPEG', {
    get: JPEG_getInstance
  });
  package$format.decode_k1939n$ = decode;
  package$format.decode_cv04aa$ = decode_0;
  package$format.decode_rk4kpr$ = decode_1;
  Object.defineProperty(package$format, 'nativeImageFormatProviders', {
    get: get_nativeImageFormatProviders
  });
  Object.defineProperty(package$format, 'nativeImageFormatProvider', {
    get: function () {
      return nativeImageFormatProvider;
    }
  });
  package$format.displayImage_uler2c$ = displayImage;
  package$format.decodeImageBytes_fqrh44$ = decodeImageBytes;
  package$format.readNativeImage_93ma6j$ = readNativeImage;
  package$format.readImageData_ub4gzs$ = readImageData;
  package$format.readBitmapListNoNative_93ma6j$ = readBitmapListNoNative;
  package$format.readNativeImage_yjldv$ = readNativeImage_0;
  package$format.readImageData_qnhdbr$ = readImageData_0;
  package$format.readImageDataProps_4wi2o0$ = readImageDataProps;
  package$format.readBitmapListNoNative_yjldv$ = readBitmapListNoNative_0;
  package$format.readBitmapInfo_ub4gzs$ = readBitmapInfo;
  package$format.readImageData_vzk2sv$ = readImageData_1;
  package$format.readBitmapListNoNative_vzk2sv$ = readBitmapListNoNative_1;
  package$format.readBitmap_qnhdbr$ = readBitmap;
  package$format.readBitmap_4wi2o0$ = readBitmap_0;
  package$format.readBitmapInfo_vzk2sv$ = readBitmapInfo_0;
  package$format.readBitmapOptimized_93ma6j$ = readBitmapOptimized;
  package$format.readBitmap_ub4gzs$ = readBitmap_1;
  Object.defineProperty(package$format, 'nativeImageLoadingEnabled', {
    get: function () {
      return nativeImageLoadingEnabled;
    },
    set: function (value) {
      nativeImageLoadingEnabled = value;
    }
  });
  package$format.readBitmapNoNative_ub4gzs$ = readBitmapNoNative;
  package$format.readBitmapNoNative_vzk2sv$ = readBitmapNoNative_0;
  package$format.writeBitmap_uk5x8r$ = writeBitmap;
  package$format.showImageAndWaitExt_p18lal$ = showImageAndWaitExt;
  package$format.showImagesAndWaitExt_qlwqpb$ = showImagesAndWaitExt;
  package$format.showImageAndWait_uler2c$ = showImageAndWait;
  package$format.showImagesAndWait_eltpmo$ = showImagesAndWait;
  Object.defineProperty(PNG$Colorspace, 'GRAYSCALE', {
    get: PNG$Colorspace$GRAYSCALE_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'RGB', {
    get: PNG$Colorspace$RGB_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'INDEXED', {
    get: PNG$Colorspace$INDEXED_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'GRAYSCALE_ALPHA', {
    get: PNG$Colorspace$GRAYSCALE_ALPHA_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'RGBA', {
    get: PNG$Colorspace$RGBA_getInstance
  });
  Object.defineProperty(PNG$Colorspace, 'Companion', {
    get: PNG$Colorspace$Companion_getInstance
  });
  PNG.prototype.Colorspace = PNG$Colorspace;
  PNG.prototype.Header = PNG$Header;
  Object.defineProperty(package$format, 'PNG', {
    get: PNG_getInstance
  });
  Object.defineProperty(Adler32, 'Companion', {
    get: Adler32$Companion_getInstance
  });
  package$format.Adler32 = Adler32;
  Object.defineProperty(CRC32, 'Companion', {
    get: CRC32$Companion_getInstance
  });
  package$format.CRC32 = CRC32;
  Object.defineProperty(package$format, 'PSD', {
    get: PSD_getInstance
  });
  Object.defineProperty(package$format, 'SVG', {
    get: SVG_getInstance
  });
  Object.defineProperty(package$format, 'StandardImageFormats', {
    get: function () {
      return StandardImageFormats;
    }
  });
  package$format.registerStandard_txhjkn$ = registerStandard;
  TGA.prototype.Info = TGA$Info;
  Object.defineProperty(package$format, 'TGA', {
    get: TGA_getInstance
  });
  var package$geom = package$korim.geom || (package$korim.geom = {});
  package$geom.render_m8xwlz$ = render;
  var package$vector = package$korim.vector || (package$korim.vector = {});
  package$vector.Bitmap32Context2d = Bitmap32Context2d;
  Object.defineProperty(Context2d$LineCap, 'BUTT', {
    get: Context2d$LineCap$BUTT_getInstance
  });
  Object.defineProperty(Context2d$LineCap, 'ROUND', {
    get: Context2d$LineCap$ROUND_getInstance
  });
  Object.defineProperty(Context2d$LineCap, 'SQUARE', {
    get: Context2d$LineCap$SQUARE_getInstance
  });
  Context2d.LineCap = Context2d$LineCap;
  Object.defineProperty(Context2d$LineJoin, 'BEVEL', {
    get: Context2d$LineJoin$BEVEL_getInstance
  });
  Object.defineProperty(Context2d$LineJoin, 'MITER', {
    get: Context2d$LineJoin$MITER_getInstance
  });
  Object.defineProperty(Context2d$LineJoin, 'ROUND', {
    get: Context2d$LineJoin$ROUND_getInstance
  });
  Context2d.LineJoin = Context2d$LineJoin;
  Object.defineProperty(Context2d$CycleMethod, 'NO_CYCLE', {
    get: Context2d$CycleMethod$NO_CYCLE_getInstance
  });
  Object.defineProperty(Context2d$CycleMethod, 'REFLECT', {
    get: Context2d$CycleMethod$REFLECT_getInstance
  });
  Object.defineProperty(Context2d$CycleMethod, 'REPEAT', {
    get: Context2d$CycleMethod$REPEAT_getInstance
  });
  Context2d.CycleMethod = Context2d$CycleMethod;
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'NONE', {
    get: Context2d$ShapeRasterizerMethod$NONE_getInstance
  });
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'X1', {
    get: Context2d$ShapeRasterizerMethod$X1_getInstance
  });
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'X2', {
    get: Context2d$ShapeRasterizerMethod$X2_getInstance
  });
  Object.defineProperty(Context2d$ShapeRasterizerMethod, 'X4', {
    get: Context2d$ShapeRasterizerMethod$X4_getInstance
  });
  Context2d.ShapeRasterizerMethod = Context2d$ShapeRasterizerMethod;
  Object.defineProperty(Context2d$Renderer, 'Companion', {
    get: Context2d$Renderer$Companion_getInstance
  });
  Context2d.Renderer = Context2d$Renderer;
  Object.defineProperty(Context2d$VerticalAlign, 'TOP', {
    get: Context2d$VerticalAlign$TOP_getInstance
  });
  Object.defineProperty(Context2d$VerticalAlign, 'MIDLE', {
    get: Context2d$VerticalAlign$MIDLE_getInstance
  });
  Object.defineProperty(Context2d$VerticalAlign, 'BASELINE', {
    get: Context2d$VerticalAlign$BASELINE_getInstance
  });
  Object.defineProperty(Context2d$VerticalAlign, 'BOTTOM', {
    get: Context2d$VerticalAlign$BOTTOM_getInstance
  });
  Context2d.VerticalAlign = Context2d$VerticalAlign;
  Object.defineProperty(Context2d$HorizontalAlign, 'LEFT', {
    get: Context2d$HorizontalAlign$LEFT_getInstance
  });
  Object.defineProperty(Context2d$HorizontalAlign, 'CENTER', {
    get: Context2d$HorizontalAlign$CENTER_getInstance
  });
  Object.defineProperty(Context2d$HorizontalAlign, 'RIGHT', {
    get: Context2d$HorizontalAlign$RIGHT_getInstance
  });
  Context2d.HorizontalAlign = Context2d$HorizontalAlign;
  Object.defineProperty(Context2d$ScaleMode, 'NONE', {
    get: Context2d$ScaleMode$NONE_getInstance
  });
  Object.defineProperty(Context2d$ScaleMode, 'HORIZONTAL', {
    get: Context2d$ScaleMode$HORIZONTAL_getInstance
  });
  Object.defineProperty(Context2d$ScaleMode, 'VERTICAL', {
    get: Context2d$ScaleMode$VERTICAL_getInstance
  });
  Object.defineProperty(Context2d$ScaleMode, 'NORMAL', {
    get: Context2d$ScaleMode$NORMAL_getInstance
  });
  Context2d.ScaleMode = Context2d$ScaleMode;
  Context2d.State = Context2d$State;
  Context2d.Font = Context2d$Font;
  Context2d.TextMetrics = Context2d$TextMetrics;
  Context2d.Paint = Context2d$Paint;
  Object.defineProperty(Context2d, 'None', {
    get: Context2d$None_getInstance
  });
  Context2d.Color = Context2d$Color;
  Context2d.TransformedPaint = Context2d$TransformedPaint;
  Object.defineProperty(Context2d$Gradient$InterpolationMethod, 'LINEAR', {
    get: Context2d$Gradient$InterpolationMethod$LINEAR_getInstance
  });
  Object.defineProperty(Context2d$Gradient$InterpolationMethod, 'NORMAL', {
    get: Context2d$Gradient$InterpolationMethod$NORMAL_getInstance
  });
  Context2d$Gradient.InterpolationMethod = Context2d$Gradient$InterpolationMethod;
  Context2d.Gradient = Context2d$Gradient;
  Context2d.LinearGradient = Context2d$LinearGradient;
  Context2d.RadialGradient = Context2d$RadialGradient;
  Context2d.BitmapPaint = Context2d$BitmapPaint;
  Context2d.Drawable = Context2d$Drawable;
  Context2d.BoundsDrawable = Context2d$BoundsDrawable;
  Context2d.SizedDrawable = Context2d$SizedDrawable;
  Context2d.FuncDrawable = Context2d$FuncDrawable;
  package$vector.Context2d = Context2d;
  package$vector.filled_8a6l4s$ = filled;
  package$vector.render_hd3tpo$ = render_0;
  package$vector.GraphicsPath = GraphicsPath;
  package$vector.SvgBuilder = SvgBuilder;
  package$vector.toSvgPathString_krcd5j$ = toSvgPathString;
  package$vector.Shape = Shape;
  package$vector.getBounds_infsew$ = getBounds;
  package$vector.toSvg_wxx4ll$ = toSvg_0;
  package$vector.StyledShape = StyledShape;
  package$vector.toSvg_mjfkvb$ = toSvg_1;
  package$vector.FillShape = FillShape;
  package$vector.PolylineShape = PolylineShape;
  package$vector.CompoundShape = CompoundShape;
  SVG_0.Style = SVG$Style;
  Object.defineProperty(SVG$GradientUnits, 'USER_SPACE_ON_USER', {
    get: SVG$GradientUnits$USER_SPACE_ON_USER_getInstance
  });
  Object.defineProperty(SVG$GradientUnits, 'OBJECT_BOUNDING_BOX', {
    get: SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance
  });
  SVG_0.GradientUnits = SVG$GradientUnits;
  var package$format_0 = package$vector.format || (package$vector.format = {});
  package$format_0.SVG_init_61zpoe$ = SVG_init;
  package$format_0.SVG = SVG_0;
  Object.defineProperty(package$korim, 'NativeImageSpecialReader', {
    get: NativeImageSpecialReader_getInstance
  });
  Object.defineProperty(package$format, 'HtmlImage', {
    get: HtmlImage_getInstance
  });
  package$format.toHtmlNative_p18lal$ = toHtmlNative;
  package$format.HtmlImageSpecialReader = HtmlImageSpecialReader;
  package$format.CanvasNativeImage = CanvasNativeImage;
  Object.defineProperty(NativeImageFormatProvider.prototype, 'BrowserImage', {
    get: NativeImageFormatProvider$BrowserImage_getInstance
  });
  Object.defineProperty(package$format, 'NativeImageFormatProvider', {
    get: NativeImageFormatProvider_getInstance
  });
  package$format.CanvasContext2dRenderer = CanvasContext2dRenderer;
  FillShape.prototype.addBounds_w97n1m$ = StyledShape.prototype.addBounds_w97n1m$;
  FillShape.prototype.buildSvg_b7xfbk$ = StyledShape.prototype.buildSvg_b7xfbk$;
  FillShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  PolylineShape.prototype.addBounds_w97n1m$ = StyledShape.prototype.addBounds_w97n1m$;
  PolylineShape.prototype.buildSvg_b7xfbk$ = StyledShape.prototype.buildSvg_b7xfbk$;
  PolylineShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  defaultImageFormats = new ImageFormats();
  nativeImageFormatProviders = lazy(nativeImageFormatProviders$lambda);
  nativeImageFormatProvider = NativeImageFormatProvider_getInstance();
  nativeImageLoadingEnabled = true;
  StandardImageFormats = listOf_0([JPEG_getInstance(), PNG_getInstance(), TGA_getInstance()]);
  Kotlin.defineModule('korim-js', _);
  return _;
}));
