if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'korge-ext-swf-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korge-ext-swf-js'.");
}
if (typeof this['korio-js'] === 'undefined') {
  throw new Error("Error loading module 'korge-ext-swf-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korge-ext-swf-js'.");
}
if (typeof this['korma-js'] === 'undefined') {
  throw new Error("Error loading module 'korge-ext-swf-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korge-ext-swf-js'.");
}
if (typeof this['korim-js'] === 'undefined') {
  throw new Error("Error loading module 'korge-ext-swf-js'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'korge-ext-swf-js'.");
}
if (typeof this['korge-js'] === 'undefined') {
  throw new Error("Error loading module 'korge-ext-swf-js'. Its dependency 'korge-js' was not found. Please, check whether 'korge-js' is loaded prior to 'korge-ext-swf-js'.");
}
if (typeof this['korfl-js'] === 'undefined') {
  throw new Error("Error loading module 'korge-ext-swf-js'. Its dependency 'korfl-js' was not found. Please, check whether 'korfl-js' is loaded prior to 'korge-ext-swf-js'.");
}
this['korge-ext-swf-js'] = function (_, Kotlin, $module$korio_js, $module$korma_js, $module$korim_js, $module$korge_js, $module$korfl_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Extra = $module$korio_js.com.soywiz.korio.util.Extra;
  var Extra$Mixin = $module$korio_js.com.soywiz.korio.util.Extra.Mixin;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var BinPacker = $module$korma_js.com.soywiz.korma.geom.binpack.BinPacker;
  var nextAlignedTo = $module$korio_js.com.soywiz.korio.util.nextAlignedTo_dqglrj$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_7wnvza$;
  var get_nextPowerOfTwo = $module$korma_js.com.soywiz.korma.numeric.get_nextPowerOfTwo_s8ev3n$;
  var Bitmap32 = $module$korim_js.com.soywiz.korim.bitmap.Bitmap32;
  var texture = $module$korge_js.com.soywiz.korge.view.texture_q2u7nr$;
  var Rectangle = $module$korma_js.com.soywiz.korma.geom.Rectangle;
  var slice = $module$korim_js.com.soywiz.korim.bitmap.slice_ko78oz$;
  var TextureWithBitmapSlice = $module$korge_js.com.soywiz.korge.render.TextureWithBitmapSlice;
  var Unit = Kotlin.kotlin.Unit;
  var CompoundShape = $module$korim_js.com.soywiz.korim.vector.CompoundShape;
  var Context2d$CycleMethod = $module$korim_js.com.soywiz.korim.vector.Context2d.CycleMethod;
  var GradientSpreadMode = $module$korfl_js.com.codeazur.as3swf.data.consts.GradientSpreadMode;
  var Context2d = $module$korim_js.com.soywiz.korim.vector.Context2d;
  var Context2d$Color = $module$korim_js.com.soywiz.korim.vector.Context2d.Color;
  var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
  var DoubleArrayList_init = $module$korma_js.com.soywiz.korma.ds.DoubleArrayList_init_gf7tl1$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var IntArrayList_init = $module$korma_js.com.soywiz.korma.ds.IntArrayList_init_q5rwfd$;
  var Matrix2d = $module$korma_js.com.soywiz.korma.Matrix2d;
  var Context2d$Gradient$InterpolationMethod = $module$korim_js.com.soywiz.korim.vector.Context2d.Gradient.InterpolationMethod;
  var GradientInterpolationMode = $module$korfl_js.com.codeazur.as3swf.data.consts.GradientInterpolationMode;
  var Context2d$LinearGradient = $module$korim_js.com.soywiz.korim.vector.Context2d.LinearGradient;
  var GradientType = $module$korfl_js.com.codeazur.as3swf.data.GradientType;
  var Context2d$RadialGradient = $module$korim_js.com.soywiz.korim.vector.Context2d.RadialGradient;
  var Context2d$BitmapPaint = $module$korim_js.com.soywiz.korim.vector.Context2d.BitmapPaint;
  var FillShape = $module$korim_js.com.soywiz.korim.vector.FillShape;
  var GraphicsPath = $module$korim_js.com.soywiz.korim.vector.GraphicsPath;
  var Context2d$ScaleMode = $module$korim_js.com.soywiz.korim.vector.Context2d.ScaleMode;
  var PolylineShape = $module$korim_js.com.soywiz.korim.vector.PolylineShape;
  var Context2d$LineCap = $module$korim_js.com.soywiz.korim.vector.Context2d.LineCap;
  var LineCapsStyle = $module$korfl_js.com.codeazur.as3swf.data.consts.LineCapsStyle;
  var ShapeExporter = $module$korfl_js.com.codeazur.as3swf.exporters.ShapeExporter;
  var toIntCeil = $module$korio_js.com.soywiz.korio.util.toIntCeil_yrwdxr$;
  var clamp = $module$korio_js.com.soywiz.korio.util.clamp_e4yvb3$;
  var LoggerShapeExporter = $module$korfl_js.com.codeazur.as3swf.exporters.LoggerShapeExporter;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var NativeImage = $module$korim_js.com.soywiz.korim.bitmap.NativeImage_vux9f0$;
  var color = $module$korim_js.com.soywiz.korim.color;
  var ColorTransform = $module$korim_js.com.soywiz.korim.color.ColorTransform;
  var extract8 = $module$korio_js.com.soywiz.korio.util.extract8_dqglrj$;
  var Context2d$ShapeRasterizerMethod = $module$korim_js.com.soywiz.korim.vector.Context2d.ShapeRasterizerMethod;
  var AnLibrarySerializer$Config = $module$korge_js.com.soywiz.korge.animate.serialization.AnLibrarySerializer.Config;
  var Extra$Property = $module$korio_js.com.soywiz.korio.util.Extra.Property;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var yaml = $module$korio_js.com.soywiz.korio.serialization.yaml;
  var serialization = $module$korio_js.com.soywiz.korio.serialization;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var SWF = $module$korfl_js.com.codeazur.as3swf.SWF;
  var AnLibrary = $module$korge_js.com.soywiz.korge.animate.AnLibrary;
  var AnSymbolMovieClip = $module$korge_js.com.soywiz.korge.animate.AnSymbolMovieClip;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var AnSymbolMovieClipSubTimeline = $module$korge_js.com.soywiz.korge.animate.AnSymbolMovieClipSubTimeline;
  var fill = $module$korio_js.com.soywiz.korio.typedarray.fill_jfbbbd$;
  var AnSymbolMovieClipState = $module$korge_js.com.soywiz.korge.animate.AnSymbolMovieClipState;
  var AnEventAction = $module$korge_js.com.soywiz.korge.animate.AnEventAction;
  var AnPlaySoundAction = $module$korge_js.com.soywiz.korge.animate.AnPlaySoundAction;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var substr = $module$korio_js.com.soywiz.korio.util.substr_6ic1pp$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var ABC$TraitMethod = $module$korfl_js.com.soywiz.korfl.abc.ABC.TraitMethod;
  var AbcIntOperation = $module$korfl_js.com.soywiz.korfl.abc.AbcIntOperation;
  var AbcOpcode = $module$korfl_js.com.soywiz.korfl.abc.AbcOpcode;
  var AbcStringOperation = $module$korfl_js.com.soywiz.korfl.abc.AbcStringOperation;
  var AbcMultinameIntOperation = $module$korfl_js.com.soywiz.korfl.abc.AbcMultinameIntOperation;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var sorted = Kotlin.kotlin.collections.sorted_exjks8$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var ShapeExporterBoundsBuilder = $module$korfl_js.com.codeazur.as3swf.exporters.ShapeExporterBoundsBuilder;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var TagPlaceObject = $module$korfl_js.com.codeazur.as3swf.tags.TagPlaceObject;
  var TagShowFrame = $module$korfl_js.com.codeazur.as3swf.tags.TagShowFrame;
  var AnSymbolLimits = $module$korge_js.com.soywiz.korge.animate.AnSymbolLimits;
  var AnSymbolBitmap = $module$korge_js.com.soywiz.korge.animate.AnSymbolBitmap;
  var BlendMode = $module$korge_js.com.soywiz.korge.view.BlendMode;
  var AnSymbolTimelineFrame = $module$korge_js.com.soywiz.korge.animate.AnSymbolTimelineFrame;
  var AnSymbolUidDef = $module$korge_js.com.soywiz.korge.animate.AnSymbolUidDef;
  var TagDefineSceneAndFrameLabelData = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineSceneAndFrameLabelData;
  var TagFrameLabel = $module$korfl_js.com.codeazur.as3swf.tags.TagFrameLabel;
  var BitSet = $module$korio_js.com.soywiz.korio.ds.BitSet;
  var TagFileAttributes = $module$korfl_js.com.codeazur.as3swf.tags.TagFileAttributes;
  var TagSetBackgroundColor = $module$korfl_js.com.codeazur.as3swf.tags.TagSetBackgroundColor;
  var TagProtect = $module$korfl_js.com.codeazur.as3swf.tags.TagProtect;
  var TagDefineFont = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineFont;
  var TagDefineFontName = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineFontName;
  var TagDefineFontAlignZones = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineFontAlignZones;
  var AnTextFieldSymbol = $module$korge_js.com.soywiz.korge.animate.AnTextFieldSymbol;
  var TagDefineEditText = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineEditText;
  var TagCSMTextSettings = $module$korfl_js.com.codeazur.as3swf.tags.TagCSMTextSettings;
  var ActionStop = $module$korfl_js.com.codeazur.as3swf.data.actions.ActionStop;
  var ActionPlay = $module$korfl_js.com.codeazur.as3swf.data.actions.ActionPlay;
  var ActionGotoFrame = $module$korfl_js.com.codeazur.as3swf.data.actions.ActionGotoFrame;
  var TagDoAction = $module$korfl_js.com.codeazur.as3swf.tags.TagDoAction;
  var TagSoundStreamHead = $module$korfl_js.com.codeazur.as3swf.tags.TagSoundStreamHead;
  var AnSymbolSound = $module$korge_js.com.soywiz.korge.animate.AnSymbolSound;
  var TagDefineSound = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineSound;
  var TagStartSound = $module$korfl_js.com.codeazur.as3swf.tags.TagStartSound;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var TagJPEGTables = $module$korfl_js.com.codeazur.as3swf.tags.TagJPEGTables;
  var IDefinitionTag = $module$korfl_js.com.codeazur.as3swf.tags.IDefinitionTag;
  var openAsync = $module$korio_js.com.soywiz.korio.stream.openAsync_m1iwyb$;
  var readBitmap = $module$korim_js.com.soywiz.korim.format.readBitmap_4wi2o0$;
  var TagDefineBitsJPEG3 = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineBitsJPEG3;
  var BitmapChannel = $module$korim_js.com.soywiz.korim.bitmap.BitmapChannel;
  var Bitmap8 = $module$korim_js.com.soywiz.korim.bitmap.Bitmap8;
  var TagDefineBitsJPEG2 = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineBitsJPEG2;
  var FastByteArrayInputStream = $module$korio_js.com.soywiz.korio.stream.FastByteArrayInputStream;
  var BitmapFormat = $module$korfl_js.com.codeazur.as3swf.data.consts.BitmapFormat;
  var TagDefineBitsLossless = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineBitsLossless;
  var TagDefineBits = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineBits;
  var AnSymbolShape = $module$korge_js.com.soywiz.korge.animate.AnSymbolShape;
  var TagDefineShape = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineShape;
  var BoundsBuilder = $module$korma_js.com.soywiz.korma.geom.BoundsBuilder;
  var AnSymbolMorphShape = $module$korge_js.com.soywiz.korge.animate.AnSymbolMorphShape;
  var TagDefineMorphShape = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineMorphShape;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var TagDoABC = $module$korfl_js.com.codeazur.as3swf.tags.TagDoABC;
  var TagSymbolClass = $module$korfl_js.com.codeazur.as3swf.tags.TagSymbolClass;
  var TagDefineSprite = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineSprite;
  var TagDefineScalingGrid = $module$korfl_js.com.codeazur.as3swf.tags.TagDefineScalingGrid;
  var consts = $module$korfl_js.com.codeazur.as3swf.data.consts;
  var Map = Kotlin.kotlin.collections.Map;
  var json = $module$korio_js.com.soywiz.korio.serialization.json;
  var TagRemoveObject = $module$korfl_js.com.codeazur.as3swf.tags.TagRemoveObject;
  var TagEnd = $module$korfl_js.com.codeazur.as3swf.tags.TagEnd;
  var get_animateLibraryLoaders = $module$korge_js.com.soywiz.korge.animate.get_animateLibraryLoaders_jv80cy$;
  var KorgeFileLoader = $module$korge_js.com.soywiz.korge.view.KorgeFileLoader;
  var KorgeFileLoaderTester = $module$korge_js.com.soywiz.korge.view.KorgeFileLoaderTester;
  var KorgePlugin = $module$korge_js.com.soywiz.korge.plugin.KorgePlugin;
  SWFShapeRasterizer.prototype = Object.create(ShapeExporter.prototype);
  SWFShapeRasterizer.prototype.constructor = SWFShapeRasterizer;
  SwfPlugin.prototype = Object.create(KorgePlugin.prototype);
  SwfPlugin.prototype.constructor = SwfPlugin;
  function BitmapWithScale(bitmap, scale, bounds) {
    this.bitmap = bitmap;
    this.scale = scale;
    this.bounds = bounds;
    this.$delegate_usexy4$_0 = new Extra$Mixin();
    this.width = this.bitmap.width;
    this.height = this.bitmap.height;
  }
  Object.defineProperty(BitmapWithScale.prototype, 'extra', {
    get: function () {
      return this.$delegate_usexy4$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_usexy4$_0.extra = tmp$;
    }
  });
  BitmapWithScale.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BitmapWithScale',
    interfaces: [Extra]
  };
  BitmapWithScale.prototype.component1 = function () {
    return this.bitmap;
  };
  BitmapWithScale.prototype.component2 = function () {
    return this.scale;
  };
  BitmapWithScale.prototype.component3 = function () {
    return this.bounds;
  };
  BitmapWithScale.prototype.copy_st96dd$ = function (bitmap, scale, bounds) {
    return new BitmapWithScale(bitmap === void 0 ? this.bitmap : bitmap, scale === void 0 ? this.scale : scale, bounds === void 0 ? this.bounds : bounds);
  };
  BitmapWithScale.prototype.toString = function () {
    return 'BitmapWithScale(bitmap=' + Kotlin.toString(this.bitmap) + (', scale=' + Kotlin.toString(this.scale)) + (', bounds=' + Kotlin.toString(this.bounds)) + ')';
  };
  BitmapWithScale.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bitmap) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    return result;
  };
  BitmapWithScale.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bitmap, other.bitmap) && Kotlin.equals(this.scale, other.scale) && Kotlin.equals(this.bounds, other.bounds)))));
  };
  var Size_init = $module$korma_js.com.soywiz.korma.geom.Size;
  function toAtlas$lambda(it) {
    var width = nextAlignedTo(it.width + 4 | 0, 4);
    var height = nextAlignedTo(it.height + 4 | 0, 4);
    return new Size_init(Kotlin.numberToDouble(width), Kotlin.numberToDouble(height));
  }
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_xf5xz2$;
  function toAtlas($receiver, views, maxTextureSide, mipmaps, continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var values = toList($receiver.values);
    var packs = BinPacker.Companion.packSeveral_7eyens$(maxTextureSide, maxTextureSide, values, toAtlas$lambda);
    var bitmapsToTextures = HashMap_init();
    var premult = (tmp$_1 = (tmp$_0 = (tmp$ = firstOrNull($receiver.values)) != null ? tmp$.bitmap : null) != null ? tmp$_0.premult : null) != null ? tmp$_1 : true;
    tmp$_2 = packs.iterator();
    while (tmp$_2.hasNext()) {
      var pack = tmp$_2.next();
      var width = get_nextPowerOfTwo(pack.width | 0);
      var height = get_nextPowerOfTwo(pack.height | 0);
      var bmp = new Bitmap32(width, height, void 0, premult);
      tmp$_3 = pack.items.iterator();
      while (tmp$_3.hasNext()) {
        var tmp$_5 = tmp$_3.next();
        var ibmp = tmp$_5.component1()
        , rect = tmp$_5.component2();
        var dx = (rect.x | 0) + 2 | 0;
        var dy = (rect.y | 0) + 2 | 0;
        bmp.put_dryc6d$(ibmp.bitmap.toBMP32(), dx, dy);
      }
      var texture_0 = texture(views, bmp, mipmaps);
      tmp$_4 = pack.items.iterator();
      while (tmp$_4.hasNext()) {
        var tmp$_6 = tmp$_4.next();
        var ibmp_0 = tmp$_6.component1()
        , rect_0 = tmp$_6.component2();
        var rect2 = new Rectangle(rect_0.x + 2, rect_0.y + 2, rect_0.width - 4, rect_0.height - 4);
        var value = new TextureWithBitmapSlice(texture_0.slice_2da8yn$(rect2), slice(bmp, rect2.toInt()), ibmp_0.scale, ibmp_0.bounds);
        bitmapsToTextures.put_xwzc9p$(ibmp_0, value);
      }
    }
    var destination = LinkedHashMap_init_0(mapCapacity($receiver.size));
    var tmp$_7;
    tmp$_7 = $receiver.entries.iterator();
    while (tmp$_7.hasNext()) {
      var element = tmp$_7.next();
      var tmp$_8;
      destination.put_xwzc9p$(element.key, (tmp$_8 = bitmapsToTextures.get_11rb$(element.value)) != null ? tmp$_8 : Kotlin.throwNPE());
    }
    return destination;
  }
  var Math_0 = Math;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  function SWFShapeRasterizer(swf, debug, bounds, export_0, rasterizerMethod, antialiasing, requestScale, minSide, maxSide, path) {
    if (requestScale === void 0)
      requestScale = 2.0;
    if (minSide === void 0)
      minSide = 16;
    if (maxSide === void 0)
      maxSide = 512;
    if (path === void 0)
      path = new GraphicsPath();
    ShapeExporter.call(this);
    this.swf = swf;
    this.debug = debug;
    this.bounds = bounds;
    this.export = export_0;
    this.rasterizerMethod = rasterizerMethod;
    this.antialiasing = antialiasing;
    this.requestScale = requestScale;
    this.minSide = minSide;
    this.maxSide = maxSide;
    this.path = path;
    var b = toIntCeil(this.bounds.width);
    this.realBoundsWidth = Math_0.max(1, b);
    var b_0 = toIntCeil(this.bounds.height);
    this.realBoundsHeight = Math_0.max(1, b_0);
    this.desiredBoundsWidth = this.realBoundsWidth * this.requestScale | 0;
    this.desiredBoundsHeight = this.realBoundsHeight * this.requestScale | 0;
    this.limitBoundsWidth = clamp(this.desiredBoundsWidth, this.minSide, this.maxSide);
    this.limitBoundsHeight = clamp(this.desiredBoundsHeight, this.minSide, this.maxSide);
    var a = this.limitBoundsWidth / this.realBoundsWidth;
    var b_1 = this.limitBoundsHeight / this.realBoundsHeight;
    this.actualScale = Math_0.min(a, b_1);
    this.actualBoundsWidth = this.realBoundsWidth * this.actualScale | 0;
    this.actualBoundsHeight = this.realBoundsHeight * this.actualScale | 0;
    this.cshape = new CompoundShape(emptyList());
    this.shapes = ArrayList_init();
    this.actualShape_t28buy$_0 = lazy(SWFShapeRasterizer$actualShape$lambda(this));
    this.image_r1df8e$_0 = lazy(SWFShapeRasterizer$image$lambda(this));
    this.imageWithScale_ydotyq$_0 = lazy(SWFShapeRasterizer$imageWithScale$lambda(this));
    this.drawingFill = true;
    this.apath = new GraphicsPath();
    this.fillStyle = Context2d.None;
    this.lineWidth_0 = 1.0;
    this.lineScaleMode_0 = Context2d$ScaleMode.NORMAL;
    this.miterLimit_0 = 1.0;
    this.lineCap_0 = Context2d$LineCap.ROUND;
    this.strokeStyle_0 = new Context2d$Color(color.Colors.BLACK);
  }
  Object.defineProperty(SWFShapeRasterizer.prototype, 'actualShape', {
    get: function () {
      var $receiver = this.actualShape_t28buy$_0;
      new Kotlin.PropertyMetadata('actualShape');
      return $receiver.value;
    }
  });
  Object.defineProperty(SWFShapeRasterizer.prototype, 'image', {
    get: function () {
      var $receiver = this.image_r1df8e$_0;
      new Kotlin.PropertyMetadata('image');
      return $receiver.value;
    }
  });
  Object.defineProperty(SWFShapeRasterizer.prototype, 'imageWithScale', {
    get: function () {
      var $receiver = this.imageWithScale_ydotyq$_0;
      new Kotlin.PropertyMetadata('imageWithScale');
      return $receiver.value;
    }
  });
  SWFShapeRasterizer.prototype.beginShape = function () {
  };
  SWFShapeRasterizer.prototype.endShape = function () {
    this.cshape = new CompoundShape(this.shapes);
  };
  SWFShapeRasterizer.prototype.beginFills = function () {
    this.flush_0();
    this.drawingFill = true;
  };
  SWFShapeRasterizer.prototype.endFills = function () {
    this.flush_0();
  };
  SWFShapeRasterizer.prototype.beginLines = function () {
    this.flush_0();
    this.drawingFill = false;
  };
  SWFShapeRasterizer.prototype.endLines = function () {
    this.flush_0();
  };
  SWFShapeRasterizer.prototype.toCtx_vpq9nk$ = function ($receiver) {
    if (Kotlin.equals($receiver, GradientSpreadMode.PAD))
      return Context2d$CycleMethod.NO_CYCLE;
    else if (Kotlin.equals($receiver, GradientSpreadMode.REFLECT))
      return Context2d$CycleMethod.REFLECT;
    else if (Kotlin.equals($receiver, GradientSpreadMode.REPEAT))
      return Context2d$CycleMethod.REPEAT;
    else
      return Kotlin.noWhenBranchMatched();
  };
  SWFShapeRasterizer.prototype.beginFill_5wr77w$$default = function (color, alpha) {
    this.flush_0();
    this.drawingFill = true;
    this.fillStyle = new Context2d$Color(decodeSWFColor(color, alpha));
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  SWFShapeRasterizer.prototype.createGradientPaint_0 = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
    var tmp$, tmp$_0;
    var destination = ArrayList_init(collectionSizeOrDefault(ratios, 10));
    var tmp$_1;
    tmp$_1 = ratios.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(item / 255.0);
    }
    var aratios = DoubleArrayList_init(toDoubleArray(destination));
    var $receiver = zip(colors, alphas);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_2;
    tmp$_2 = $receiver.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(decodeSWFColor(item_0.first, item_0.second));
    }
    var acolors = IntArrayList_init(toIntArray(destination_0));
    var m2 = new Matrix2d();
    m2.copyFrom_7f5bc6$(matrix);
    m2.pretranslate_lu1900$(-0.5, -0.5);
    m2.prescale_lu1900$(1638.4 / 2.0, 1638.4 / 2.0);
    m2.scale_lu1900$(20.0, 20.0);
    if (Kotlin.equals(interpolationMethod, GradientInterpolationMode.NORMAL))
      tmp$ = Context2d$Gradient$InterpolationMethod.NORMAL;
    else if (Kotlin.equals(interpolationMethod, GradientInterpolationMode.LINEAR))
      tmp$ = Context2d$Gradient$InterpolationMethod.LINEAR;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    var imethod = tmp$;
    if (Kotlin.equals(type, GradientType.LINEAR))
      tmp$_0 = new Context2d$LinearGradient(-1.0, 0.0, +1.0, 0.0, aratios, acolors, this.toCtx_vpq9nk$(spreadMethod), m2, imethod);
    else if (Kotlin.equals(type, GradientType.RADIAL))
      tmp$_0 = new Context2d$RadialGradient(focalPointRatio, 0.0, 0.0, 0.0, 0.0, 1.0, aratios, acolors, this.toCtx_vpq9nk$(spreadMethod), m2, imethod);
    else
      tmp$_0 = Kotlin.noWhenBranchMatched();
    return tmp$_0;
  };
  SWFShapeRasterizer.prototype.beginGradientFill_gkeasy$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
    this.flush_0();
    this.drawingFill = true;
    this.fillStyle = this.createGradientPaint_0(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  SWFShapeRasterizer.prototype.beginBitmapFill_24bixh$$default = function (bitmapId, matrix, repeat, smooth) {
    var tmp$;
    this.flush_0();
    this.drawingFill = true;
    var bmp = (tmp$ = get_bitmaps(this.swf).get_11rb$(bitmapId)) != null ? tmp$ : new Bitmap32(1, 1);
    this.fillStyle = new Context2d$BitmapPaint(bmp, matrix.clone().scale_lu1900$(20.0, 20.0), repeat, smooth);
  };
  SWFShapeRasterizer.prototype.endFill = function () {
    this.flush_0();
  };
  SWFShapeRasterizer.prototype.__flushFill_0 = function () {
    if (this.apath.isEmpty())
      return;
    var $receiver = this.shapes;
    var element = new FillShape(this.apath, null, this.fillStyle, (new Matrix2d()).prescale_lu1900$(1.0 / 20.0, 1.0 / 20.0));
    $receiver.add_11rb$(element);
    this.apath = new GraphicsPath();
  };
  SWFShapeRasterizer.prototype.__flushStroke_0 = function () {
    if (this.apath.isEmpty())
      return;
    var $receiver = this.shapes;
    var element = new PolylineShape(this.apath, null, this.strokeStyle_0, (new Matrix2d()).prescale_lu1900$(1.0 / 20.0, 1.0 / 20.0), this.lineWidth_0, true, Context2d$ScaleMode.NORMAL, this.lineCap_0, this.lineCap_0, 'joints', this.miterLimit_0);
    $receiver.add_11rb$(element);
    this.apath = new GraphicsPath();
  };
  SWFShapeRasterizer.prototype.flush_0 = function () {
    if (this.drawingFill) {
      this.__flushFill_0();
    }
     else {
      this.__flushStroke_0();
    }
  };
  SWFShapeRasterizer.prototype.lineStyle_lp30oh$$default = function (thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
    var tmp$;
    this.flush_0();
    this.drawingFill = false;
    this.lineWidth_0 = thickness * 20.0;
    this.lineScaleMode_0 = scaleMode;
    this.miterLimit_0 = miterLimit;
    this.strokeStyle_0 = new Context2d$Color(decodeSWFColor(color, alpha));
    if (Kotlin.equals(startCaps, LineCapsStyle.NO))
      tmp$ = Context2d$LineCap.BUTT;
    else if (Kotlin.equals(startCaps, LineCapsStyle.ROUND))
      tmp$ = Context2d$LineCap.ROUND;
    else if (Kotlin.equals(startCaps, LineCapsStyle.SQUARE))
      tmp$ = Context2d$LineCap.SQUARE;
    else
      tmp$ = Kotlin.noWhenBranchMatched();
    this.lineCap_0 = tmp$;
  };
  SWFShapeRasterizer.prototype.lineGradientStyle_gkeasy$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
    this.flush_0();
    this.drawingFill = false;
    this.strokeStyle_0 = this.createGradientPaint_0(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  SWFShapeRasterizer.prototype.fix_0 = function ($receiver) {
    return $receiver * 20 | 0;
  };
  SWFShapeRasterizer.prototype.moveTo_lu1900$ = function (x, y) {
    this.apath.moveTo_lu1900$(this.fix_0(x), this.fix_0(y));
    if (this.drawingFill)
      this.path.moveTo_lu1900$(x, y);
  };
  SWFShapeRasterizer.prototype.lineTo_lu1900$ = function (x, y) {
    this.apath.lineTo_lu1900$(this.fix_0(x), this.fix_0(y));
    if (this.drawingFill)
      this.path.lineTo_lu1900$(x, y);
  };
  SWFShapeRasterizer.prototype.curveTo_6y0v78$ = function (controlX, controlY, anchorX, anchorY) {
    this.apath.quadTo_6y0v78$(this.fix_0(controlX), this.fix_0(controlY), this.fix_0(anchorX), this.fix_0(anchorY));
    if (this.drawingFill)
      this.path.quadTo_6y0v78$(controlX, controlY, anchorX, anchorY);
  };
  SWFShapeRasterizer.prototype.closePath = function () {
    this.apath.close();
    if (this.drawingFill)
      this.path.close();
  };
  function SWFShapeRasterizer$actualShape$lambda(this$SWFShapeRasterizer) {
    return function () {
      this$SWFShapeRasterizer.export(this$SWFShapeRasterizer.debug ? new LoggerShapeExporter(this$SWFShapeRasterizer) : this$SWFShapeRasterizer);
      return this$SWFShapeRasterizer.cshape;
    };
  }
  function SWFShapeRasterizer$image$lambda(this$SWFShapeRasterizer) {
    return function () {
      var image = NativeImage(this$SWFShapeRasterizer.actualBoundsWidth, this$SWFShapeRasterizer.actualBoundsHeight);
      var ctx = image.getContext2d_6taknv$(this$SWFShapeRasterizer.antialiasing);
      ctx.scale_lu1900$(this$SWFShapeRasterizer.actualScale, this$SWFShapeRasterizer.actualScale);
      ctx.translate_lu1900$(-this$SWFShapeRasterizer.bounds.x, -this$SWFShapeRasterizer.bounds.y);
      ctx.drawShape_gwrl1p$(this$SWFShapeRasterizer.actualShape, this$SWFShapeRasterizer.rasterizerMethod);
      return image;
    };
  }
  function SWFShapeRasterizer$imageWithScale$lambda(this$SWFShapeRasterizer) {
    return function () {
      return new BitmapWithScale(this$SWFShapeRasterizer.image, this$SWFShapeRasterizer.actualScale, this$SWFShapeRasterizer.bounds);
    };
  }
  SWFShapeRasterizer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFShapeRasterizer',
    interfaces: [ShapeExporter]
  };
  function toColorTransform($receiver) {
    return new ColorTransform($receiver.rMult, $receiver.gMult, $receiver.bMult, $receiver.aMult, $receiver.rAdd, $receiver.gAdd, $receiver.bAdd, $receiver.aAdd);
  }
  function decodeSWFColor(color_0, alpha) {
    if (alpha === void 0)
      alpha = 1.0;
    return color.RGBA.pack_tjonv8$(extract8(color_0, 16), extract8(color_0, 8), extract8(color_0, 0), alpha * 255 | 0);
  }
  function SWFExportConfig(debug, mipmaps, antialiasing, rasterizerMethod, exportScale, minShapeSide, maxShapeSide, minMorphShapeSide, maxMorphShapeSide, maxTextureSide, exportPaths, adaptiveScaling, smoothInterpolation) {
    if (debug === void 0)
      debug = false;
    if (mipmaps === void 0)
      mipmaps = true;
    if (antialiasing === void 0)
      antialiasing = true;
    if (rasterizerMethod === void 0)
      rasterizerMethod = Context2d$ShapeRasterizerMethod.X4;
    if (exportScale === void 0)
      exportScale = 1.0;
    if (minShapeSide === void 0)
      minShapeSide = 64;
    if (maxShapeSide === void 0)
      maxShapeSide = 512;
    if (minMorphShapeSide === void 0)
      minMorphShapeSide = 16;
    if (maxMorphShapeSide === void 0)
      maxMorphShapeSide = 128;
    if (maxTextureSide === void 0)
      maxTextureSide = 4096;
    if (exportPaths === void 0)
      exportPaths = false;
    if (adaptiveScaling === void 0)
      adaptiveScaling = true;
    if (smoothInterpolation === void 0)
      smoothInterpolation = true;
    this.debug = debug;
    this.mipmaps = mipmaps;
    this.antialiasing = antialiasing;
    this.rasterizerMethod = rasterizerMethod;
    this.exportScale = exportScale;
    this.minShapeSide = minShapeSide;
    this.maxShapeSide = maxShapeSide;
    this.minMorphShapeSide = minMorphShapeSide;
    this.maxMorphShapeSide = maxMorphShapeSide;
    this.maxTextureSide = maxTextureSide;
    this.exportPaths = exportPaths;
    this.adaptiveScaling = adaptiveScaling;
    this.smoothInterpolation = smoothInterpolation;
  }
  SWFExportConfig.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFExportConfig',
    interfaces: []
  };
  SWFExportConfig.prototype.component1 = function () {
    return this.debug;
  };
  SWFExportConfig.prototype.component2 = function () {
    return this.mipmaps;
  };
  SWFExportConfig.prototype.component3 = function () {
    return this.antialiasing;
  };
  SWFExportConfig.prototype.component4 = function () {
    return this.rasterizerMethod;
  };
  SWFExportConfig.prototype.component5 = function () {
    return this.exportScale;
  };
  SWFExportConfig.prototype.component6 = function () {
    return this.minShapeSide;
  };
  SWFExportConfig.prototype.component7 = function () {
    return this.maxShapeSide;
  };
  SWFExportConfig.prototype.component8 = function () {
    return this.minMorphShapeSide;
  };
  SWFExportConfig.prototype.component9 = function () {
    return this.maxMorphShapeSide;
  };
  SWFExportConfig.prototype.component10 = function () {
    return this.maxTextureSide;
  };
  SWFExportConfig.prototype.component11 = function () {
    return this.exportPaths;
  };
  SWFExportConfig.prototype.component12 = function () {
    return this.adaptiveScaling;
  };
  SWFExportConfig.prototype.component13 = function () {
    return this.smoothInterpolation;
  };
  SWFExportConfig.prototype.copy_2ool5d$ = function (debug, mipmaps, antialiasing, rasterizerMethod, exportScale, minShapeSide, maxShapeSide, minMorphShapeSide, maxMorphShapeSide, maxTextureSide, exportPaths, adaptiveScaling, smoothInterpolation) {
    return new SWFExportConfig(debug === void 0 ? this.debug : debug, mipmaps === void 0 ? this.mipmaps : mipmaps, antialiasing === void 0 ? this.antialiasing : antialiasing, rasterizerMethod === void 0 ? this.rasterizerMethod : rasterizerMethod, exportScale === void 0 ? this.exportScale : exportScale, minShapeSide === void 0 ? this.minShapeSide : minShapeSide, maxShapeSide === void 0 ? this.maxShapeSide : maxShapeSide, minMorphShapeSide === void 0 ? this.minMorphShapeSide : minMorphShapeSide, maxMorphShapeSide === void 0 ? this.maxMorphShapeSide : maxMorphShapeSide, maxTextureSide === void 0 ? this.maxTextureSide : maxTextureSide, exportPaths === void 0 ? this.exportPaths : exportPaths, adaptiveScaling === void 0 ? this.adaptiveScaling : adaptiveScaling, smoothInterpolation === void 0 ? this.smoothInterpolation : smoothInterpolation);
  };
  SWFExportConfig.prototype.toString = function () {
    return 'SWFExportConfig(debug=' + Kotlin.toString(this.debug) + (', mipmaps=' + Kotlin.toString(this.mipmaps)) + (', antialiasing=' + Kotlin.toString(this.antialiasing)) + (', rasterizerMethod=' + Kotlin.toString(this.rasterizerMethod)) + (', exportScale=' + Kotlin.toString(this.exportScale)) + (', minShapeSide=' + Kotlin.toString(this.minShapeSide)) + (', maxShapeSide=' + Kotlin.toString(this.maxShapeSide)) + (', minMorphShapeSide=' + Kotlin.toString(this.minMorphShapeSide)) + (', maxMorphShapeSide=' + Kotlin.toString(this.maxMorphShapeSide)) + (', maxTextureSide=' + Kotlin.toString(this.maxTextureSide)) + (', exportPaths=' + Kotlin.toString(this.exportPaths)) + (', adaptiveScaling=' + Kotlin.toString(this.adaptiveScaling)) + (', smoothInterpolation=' + Kotlin.toString(this.smoothInterpolation)) + ')';
  };
  SWFExportConfig.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.debug) | 0;
    result = result * 31 + Kotlin.hashCode(this.mipmaps) | 0;
    result = result * 31 + Kotlin.hashCode(this.antialiasing) | 0;
    result = result * 31 + Kotlin.hashCode(this.rasterizerMethod) | 0;
    result = result * 31 + Kotlin.hashCode(this.exportScale) | 0;
    result = result * 31 + Kotlin.hashCode(this.minShapeSide) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxShapeSide) | 0;
    result = result * 31 + Kotlin.hashCode(this.minMorphShapeSide) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxMorphShapeSide) | 0;
    result = result * 31 + Kotlin.hashCode(this.maxTextureSide) | 0;
    result = result * 31 + Kotlin.hashCode(this.exportPaths) | 0;
    result = result * 31 + Kotlin.hashCode(this.adaptiveScaling) | 0;
    result = result * 31 + Kotlin.hashCode(this.smoothInterpolation) | 0;
    return result;
  };
  SWFExportConfig.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.debug, other.debug) && Kotlin.equals(this.mipmaps, other.mipmaps) && Kotlin.equals(this.antialiasing, other.antialiasing) && Kotlin.equals(this.rasterizerMethod, other.rasterizerMethod) && Kotlin.equals(this.exportScale, other.exportScale) && Kotlin.equals(this.minShapeSide, other.minShapeSide) && Kotlin.equals(this.maxShapeSide, other.maxShapeSide) && Kotlin.equals(this.minMorphShapeSide, other.minMorphShapeSide) && Kotlin.equals(this.maxMorphShapeSide, other.maxMorphShapeSide) && Kotlin.equals(this.maxTextureSide, other.maxTextureSide) && Kotlin.equals(this.exportPaths, other.exportPaths) && Kotlin.equals(this.adaptiveScaling, other.adaptiveScaling) && Kotlin.equals(this.smoothInterpolation, other.smoothInterpolation)))));
  };
  function toAnLibrarySerializerConfig($receiver, compression) {
    if (compression === void 0)
      compression = 1.0;
    return new AnLibrarySerializer$Config(compression, $receiver.exportPaths, $receiver.mipmaps);
  }
  function readSWF($receiver, views, config, continuation) {
    return config != null ? readSWF_1($receiver, views, config, void 0, continuation) : readSWF_0($receiver, views, void 0, void 0, continuation);
  }
  function swfExportConfig$lambda() {
    return new SWFExportConfig();
  }
  var swfExportConfig;
  var Any = Object;
  var lmapOf = $module$korio_js.com.soywiz.korio.ds.lmapOf_qfcya0$;
  function get_swfExportConfig($receiver) {
    var property = new Kotlin.PropertyMetadata('swfExportConfig');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = swfExportConfig.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = swfExportConfig.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = swfExportConfig.name) != null ? tmp$_3 : property.callableName;
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
  function set_swfExportConfig($receiver, swfExportConfig_0) {
    var property = new Kotlin.PropertyMetadata('swfExportConfig');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = swfExportConfig.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = swfExportConfig_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function readSWF_0($receiver_0, views_0, content_0, defaultConfig_0, continuation_0, suspended) {
    var instance = new Coroutine$readSWF($receiver_0, views_0, content_0, defaultConfig_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readSWF($receiver_0, views_0, content_0, defaultConfig_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$configFile = void 0;
    this.local$config = void 0;
    this.local$lib = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
    this.local$content = content_0;
    this.local$defaultConfig = defaultConfig_0;
    this.local$e = void 0;
  }
  Coroutine$readSWF.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSWF.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSWF.prototype.constructor = Coroutine$readSWF;
  Coroutine$readSWF.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$content === void 0)
              this.local$content = null;
            if (this.local$defaultConfig === void 0)
              this.local$defaultConfig = new SWFExportConfig();
            this.local$configFile = this.local$$receiver.appendExtension_61zpoe$('config');
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.local$configFile.exists(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            if (this.result_0) {
              this.local$tmp$ = yaml.Yaml;
              this.state_0 = 2;
              this.result_0 = this.local$configFile.readString_qa9gbo$(void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.local$tmp$_0 = this.local$defaultConfig;
              this.state_0 = 3;
              continue;
            }

          case 2:
            this.local$tmp$_0 = this.local$tmp$.decodeToType_27ii8w$(this.result_0, Kotlin.getKClass(SWFExportConfig), serialization.Mapper);
            this.state_0 = 3;
            continue;
          case 3:
            this.exceptionState_0 = 7;
            this.state_0 = 5;
            continue;
          case 4:
            this.exceptionState_0 = 7;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, Throwable)) {
              printStackTrace(this.local$e);
              this.local$tmp$_0 = new SWFExportConfig();
            }
             else
              throw this.local$e;
            this.state_0 = 5;
            continue;
          case 5:
            this.local$config = this.local$tmp$_0;
            this.state_0 = 6;
            this.result_0 = readSWF_1(this.local$$receiver, this.local$views, this.local$config, this.local$content, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.local$lib = this.result_0;
            set_swfExportConfig(this.local$lib, this.local$config);
            return this.local$lib;
          case 7:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 7)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function readSWF_1($receiver_0, views_0, config_0, content_0, continuation_0, suspended) {
    var instance = new Coroutine$readSWF_0($receiver_0, views_0, config_0, content_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readSWF_0($receiver_0, views_0, config_0, content_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
    this.local$config = config_0;
    this.local$content = content_0;
  }
  Coroutine$readSWF_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSWF_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSWF_0.prototype.constructor = Coroutine$readSWF_0;
  Coroutine$readSWF_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$content === void 0)
              this.local$content = null;
            this.local$tmp$ = new SwfLoaderMethod(this.local$views, this.local$config);
            if (this.local$content == null) {
              this.state_0 = 2;
              this.result_0 = this.local$$receiver.readAll(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$content = this.result_0;
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$.load_fqrh44$(this.local$content, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
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
  var get_depth0 = defineInlineFunction('korge-ext-swf-js.com.soywiz.korge.ext.swf.get_depth0_hy38tf$', function ($receiver) {
    return $receiver.depth - 1 | 0;
  });
  var get_clipDepth0 = defineInlineFunction('korge-ext-swf-js.com.soywiz.korge.ext.swf.get_clipDepth0_hy38tf$', function ($receiver) {
    return $receiver.clipDepth - 1 | 0;
  });
  var get_depth0_0 = defineInlineFunction('korge-ext-swf-js.com.soywiz.korge.ext.swf.get_depth0_383cd4$', function ($receiver) {
    return $receiver.depth - 1 | 0;
  });
  function bitmaps$lambda() {
    return HashMap_init();
  }
  var bitmaps;
  function get_bitmaps($receiver) {
    var property = new Kotlin.PropertyMetadata('bitmaps');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = bitmaps.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = bitmaps.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = bitmaps.name) != null ? tmp$_3 : property.callableName;
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
  function MySwfFrame(index0, maxDepths) {
    this.index0 = index0;
    this.name = null;
    this.depths = ArrayList_init();
    this.actions = ArrayList_init();
  }
  function MySwfFrame$Action() {
  }
  function MySwfFrame$Action$Stop() {
    MySwfFrame$Action$Stop_instance = this;
  }
  MySwfFrame$Action$Stop.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Stop',
    interfaces: [MySwfFrame$Action]
  };
  var MySwfFrame$Action$Stop_instance = null;
  function MySwfFrame$Action$Stop_getInstance() {
    if (MySwfFrame$Action$Stop_instance === null) {
      new MySwfFrame$Action$Stop();
    }
    return MySwfFrame$Action$Stop_instance;
  }
  function MySwfFrame$Action$Play() {
    MySwfFrame$Action$Play_instance = this;
  }
  MySwfFrame$Action$Play.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Play',
    interfaces: [MySwfFrame$Action]
  };
  var MySwfFrame$Action$Play_instance = null;
  function MySwfFrame$Action$Play_getInstance() {
    if (MySwfFrame$Action$Play_instance === null) {
      new MySwfFrame$Action$Play();
    }
    return MySwfFrame$Action$Play_instance;
  }
  function MySwfFrame$Action$Goto(frame0) {
    this.frame0 = frame0;
  }
  MySwfFrame$Action$Goto.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Goto',
    interfaces: [MySwfFrame$Action]
  };
  function MySwfFrame$Action$PlaySound(soundId) {
    this.soundId = soundId;
  }
  MySwfFrame$Action$PlaySound.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PlaySound',
    interfaces: [MySwfFrame$Action]
  };
  MySwfFrame$Action.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Action',
    interfaces: []
  };
  Object.defineProperty(MySwfFrame.prototype, 'isFirst', {
    get: function () {
      return this.index0 === 0;
    }
  });
  Object.defineProperty(MySwfFrame.prototype, 'hasStop', {
    get: function () {
      return this.actions.contains_11rb$(MySwfFrame$Action$Stop_getInstance());
    }
  });
  var Collection = Kotlin.kotlin.collections.Collection;
  Object.defineProperty(MySwfFrame.prototype, 'hasGoto', {
    get: function () {
      var $receiver = this.actions;
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
          if (Kotlin.isType(element, MySwfFrame$Action$Goto)) {
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
  Object.defineProperty(MySwfFrame.prototype, 'hasFlow', {
    get: function () {
      return this.hasStop || this.hasGoto;
    }
  });
  MySwfFrame.prototype.stop = function () {
    var $receiver = this.actions;
    var element = MySwfFrame$Action$Stop_getInstance();
    $receiver.add_11rb$(element);
  };
  MySwfFrame.prototype.play = function () {
    var $receiver = this.actions;
    var element = MySwfFrame$Action$Play_getInstance();
    $receiver.add_11rb$(element);
  };
  MySwfFrame.prototype.goto_za3lpa$ = function (frame) {
    var $receiver = this.actions;
    var element = new MySwfFrame$Action$Goto(frame);
    $receiver.add_11rb$(element);
  };
  MySwfFrame.prototype.gotoAndStop_za3lpa$ = function (frame) {
    this.goto_za3lpa$(frame);
    this.stop();
  };
  MySwfFrame.prototype.gotoAndPlay_za3lpa$ = function (frame) {
    this.goto_za3lpa$(frame);
    this.play();
  };
  MySwfFrame.prototype.playSound_za3lpa$ = function (soundId) {
    var $receiver = this.actions;
    var element = new MySwfFrame$Action$PlaySound(soundId);
    $receiver.add_11rb$(element);
  };
  MySwfFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MySwfFrame',
    interfaces: []
  };
  function MySwfTimeline() {
    this.frames = ArrayList_init();
  }
  MySwfTimeline.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MySwfTimeline',
    interfaces: []
  };
  function swfTimeline$lambda() {
    return new MySwfTimeline();
  }
  var swfTimeline;
  function get_swfTimeline($receiver) {
    var property = new Kotlin.PropertyMetadata('swfTimeline');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = swfTimeline.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = swfTimeline.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = swfTimeline.name) != null ? tmp$_3 : property.callableName;
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
  function labelsToFrame0$lambda() {
    return HashMap_init();
  }
  var labelsToFrame0;
  function get_labelsToFrame0($receiver) {
    var property = new Kotlin.PropertyMetadata('labelsToFrame0');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = labelsToFrame0.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = labelsToFrame0.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = labelsToFrame0.name) != null ? tmp$_3 : property.callableName;
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
  function tagDefineMorphShape$lambda() {
    return null;
  }
  var tagDefineMorphShape;
  function get_tagDefineMorphShape($receiver) {
    var property = new Kotlin.PropertyMetadata('tagDefineMorphShape');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = tagDefineMorphShape.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = tagDefineMorphShape.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = tagDefineMorphShape.name) != null ? tmp$_3 : property.callableName;
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
  function set_tagDefineMorphShape($receiver, tagDefineMorphShape_0) {
    var property = new Kotlin.PropertyMetadata('tagDefineMorphShape');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = tagDefineMorphShape.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = tagDefineMorphShape_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function tagDefineShape$lambda() {
    return null;
  }
  var tagDefineShape;
  function get_tagDefineShape($receiver) {
    var property = new Kotlin.PropertyMetadata('tagDefineShape');
    var getValue_uu943u$result;
    getValue_uu943u$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = tagDefineShape.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : Kotlin.throwCCE();
      if (res == null) {
        var r = tagDefineShape.defaultGen();
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = tagDefineShape.name) != null ? tmp$_3 : property.callableName;
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
  function set_tagDefineShape($receiver, tagDefineShape_0) {
    var property = new Kotlin.PropertyMetadata('tagDefineShape');
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = tagDefineShape.name) != null ? tmp$ : property.callableName;
    tmp$_2 = (tmp$_1 = tagDefineShape_0) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : Kotlin.throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  }
  function MinMaxDouble(count, min, max) {
    if (count === void 0)
      count = 0;
    if (min === void 0)
      min = 0.0;
    if (max === void 0)
      max = 0.0;
    this.count = count;
    this.min = min;
    this.max = max;
  }
  Object.defineProperty(MinMaxDouble.prototype, 'isEmpty', {
    get: function () {
      return this.count === 0;
    }
  });
  Object.defineProperty(MinMaxDouble.prototype, 'isNotEmpty', {
    get: function () {
      return this.count > 0;
    }
  });
  MinMaxDouble.prototype.register_14dthe$ = function (value) {
    if (this.isEmpty) {
      this.min = value;
      this.max = value;
    }
     else {
      var a = this.min;
      this.min = Math_0.min(a, value);
      var a_0 = this.max;
      this.max = Math_0.max(a_0, value);
    }
    this.count = this.count + 1 | 0;
  };
  MinMaxDouble.prototype.register_3dsga4$ = function (value) {
    if (value.isNotEmpty) {
      this.register_14dthe$(value.min);
      this.register_14dthe$(value.max);
    }
  };
  MinMaxDouble.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MinMaxDouble',
    interfaces: []
  };
  MinMaxDouble.prototype.component1 = function () {
    return this.count;
  };
  MinMaxDouble.prototype.component2 = function () {
    return this.min;
  };
  MinMaxDouble.prototype.component3 = function () {
    return this.max;
  };
  MinMaxDouble.prototype.copy_w4xg1m$ = function (count, min, max) {
    return new MinMaxDouble(count === void 0 ? this.count : count, min === void 0 ? this.min : min, max === void 0 ? this.max : max);
  };
  MinMaxDouble.prototype.toString = function () {
    return 'MinMaxDouble(count=' + Kotlin.toString(this.count) + (', min=' + Kotlin.toString(this.min)) + (', max=' + Kotlin.toString(this.max)) + ')';
  };
  MinMaxDouble.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.count) | 0;
    result = result * 31 + Kotlin.hashCode(this.min) | 0;
    result = result * 31 + Kotlin.hashCode(this.max) | 0;
    return result;
  };
  MinMaxDouble.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.count, other.count) && Kotlin.equals(this.min, other.min) && Kotlin.equals(this.max, other.max)))));
  };
  function SymbolAnalyzeInfo(characterId) {
    this.characterId = characterId;
    this.hasNinePatch = false;
    this.parents = LinkedHashSet_init();
    this.scaleBounds = new MinMaxDouble();
    this.globalScaleBounds_ibmyij$_0 = lazy(SymbolAnalyzeInfo$globalScaleBounds$lambda(this));
  }
  Object.defineProperty(SymbolAnalyzeInfo.prototype, 'globalScaleBounds', {
    get: function () {
      var $receiver = this.globalScaleBounds_ibmyij$_0;
      new Kotlin.PropertyMetadata('globalScaleBounds');
      return $receiver.value;
    }
  });
  SymbolAnalyzeInfo.prototype.registerParent_ic6ump$ = function (characterId) {
    this.parents.add_11rb$(characterId);
  };
  SymbolAnalyzeInfo.prototype.registerScale_lu1900$ = function (scaleX, scaleY) {
    this.scaleBounds.register_14dthe$(Math_0.max(scaleX, scaleY));
  };
  SymbolAnalyzeInfo.prototype.registerMatrix_yx07kl$ = function (matrix) {
    var tmp$ = this.registerScale_lu1900$;
    var a = matrix.a;
    var tmp$_0 = Math_0.abs(a);
    var a_0 = matrix.d;
    tmp$.call(this, tmp$_0, Math_0.abs(a_0));
  };
  function SymbolAnalyzeInfo$globalScaleBounds$lambda(this$SymbolAnalyzeInfo) {
    return function () {
      var tmp$;
      var out = new MinMaxDouble();
      if (this$SymbolAnalyzeInfo.parents.isEmpty()) {
        if (this$SymbolAnalyzeInfo.scaleBounds.isNotEmpty) {
          out.register_3dsga4$(this$SymbolAnalyzeInfo.scaleBounds);
        }
         else {
          out.register_14dthe$(1.0);
        }
      }
       else {
        tmp$ = this$SymbolAnalyzeInfo.parents.iterator();
        while (tmp$.hasNext()) {
          var parent = tmp$.next();
          if (parent.hasNinePatch)
            continue;
          out.register_14dthe$(this$SymbolAnalyzeInfo.scaleBounds.min * parent.globalScaleBounds.min);
          out.register_14dthe$(this$SymbolAnalyzeInfo.scaleBounds.max * parent.globalScaleBounds.max);
        }
      }
      return out;
    };
  }
  SymbolAnalyzeInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SymbolAnalyzeInfo',
    interfaces: []
  };
  function SWFShapeRasterizerRequest(swf, charId, shapeBounds, export_0, config) {
    this.swf = swf;
    this.charId = charId;
    this.shapeBounds = shapeBounds;
    this.export = export_0;
    this.config = config;
    this.path = new GraphicsPath();
  }
  SWFShapeRasterizerRequest.prototype.getRasterizer_14dthe$ = function (maxScale) {
    var adaptiveScaling = this.config.adaptiveScaling ? maxScale : 1.0;
    return new SWFShapeRasterizer(this.swf, this.config.debug, this.shapeBounds, this.export, this.config.rasterizerMethod, this.config.antialiasing, this.config.exportScale * adaptiveScaling, this.config.minShapeSide, this.config.maxShapeSide, this.path);
  };
  SWFShapeRasterizerRequest.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFShapeRasterizerRequest',
    interfaces: []
  };
  function SwfLoaderMethod(views, config) {
    this.views = views;
    this.config = config;
    this.swf_z67kx$_0 = this.swf_z67kx$_0;
    this.lib_z1g72$_0 = this.lib_z1g72$_0;
    this.classNameToTypes = HashMap_init();
    this.classNameToTagId = HashMap_init();
    this.shapesToPopulate = LinkedHashMap_init();
    this.morphShapesToPopulate = ArrayList_init();
    this.morphShapeRatios = HashMap_init();
    this.analyzerInfos_0 = HashMap_init();
    this.symbols = ArrayList_init();
    this.totalPlaceObject = 0;
    this.globalTotalShowFrame = 0;
    this.spritesById = HashMap_init();
  }
  Object.defineProperty(SwfLoaderMethod.prototype, 'swf', {
    get: function () {
      if (this.swf_z67kx$_0 == null)
        return Kotlin.throwUPAE('swf');
      return this.swf_z67kx$_0;
    },
    set: function (swf) {
      this.swf_z67kx$_0 = swf;
    }
  });
  Object.defineProperty(SwfLoaderMethod.prototype, 'lib', {
    get: function () {
      if (this.lib_z1g72$_0 == null)
        return Kotlin.throwUPAE('lib');
      return this.lib_z1g72$_0;
    },
    set: function (lib) {
      this.lib_z1g72$_0 = lib;
    }
  });
  SwfLoaderMethod.prototype.analyzerInfo_za3lpa$ = function (id) {
    var $receiver = this.analyzerInfos_0;
    var tmp$;
    var value = $receiver.get_11rb$(id);
    if (value == null) {
      var answer = new SymbolAnalyzeInfo(id);
      $receiver.put_xwzc9p$(id, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  SwfLoaderMethod.prototype.load_fqrh44$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$load_fqrh44$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$load_fqrh44$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$bounds = void 0;
    this.local$symbol = void 0;
    this.local$data = data_0;
  }
  Coroutine$load_fqrh44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$load_fqrh44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$load_fqrh44$.prototype.constructor = Coroutine$load_fqrh44$;
  Coroutine$load_fqrh44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = (new SWF()).loadBytes_fqrh44$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.swf = this.result_0;
            this.local$bounds = this.$this.swf.frameSize.rect;
            this.$this.lib = new AnLibrary(this.$this.views, this.local$bounds.width | 0, this.local$bounds.height | 0, this.$this.swf.frameRate);
            this.state_0 = 3;
            this.result_0 = this.$this.parseMovieClip_4uxq7o$(this.$this.swf.tags, new AnSymbolMovieClip(0, 'MainTimeLine', this.$this.findLimits_dh5fw2$(this.$this.swf.tags)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$tmp$ = this.$this.symbols.iterator();
            while (this.local$tmp$.hasNext()) {
              this.local$symbol = this.local$tmp$.next();
              this.$this.lib.addSymbol_lvjwfe$(this.local$symbol);
            }

            this.state_0 = 4;
            this.result_0 = this.$this.processAs3Actions_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.state_0 = 5;
            this.result_0 = this.$this.generateActualTimelines_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 5:
            this.$this.lib.processSymbolNames();
            this.state_0 = 6;
            this.result_0 = this.$this.generateTextures_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.$this.finalProcessing_0();
            return this.$this.lib;
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
  SwfLoaderMethod.prototype.finalProcessing_0 = function () {
  };
  SwfLoaderMethod.prototype.getFrameTime_za3lpa$ = function (index0) {
    return (index0 * this.lib.msPerFrameDouble | 0) * 1000 | 0;
  };
  function SwfLoaderMethod$generateActualTimelines$Subtimeline(this$SwfLoaderMethod, index, totalFrames, nextState, nextStatePlay) {
    this.this$SwfLoaderMethod = this$SwfLoaderMethod;
    if (totalFrames === void 0)
      totalFrames = 0;
    if (nextState === void 0)
      nextState = null;
    if (nextStatePlay === void 0)
      nextStatePlay = true;
    this.index = index;
    this.totalFrames = totalFrames;
    this.nextState = nextState;
    this.nextStatePlay = nextStatePlay;
  }
  Object.defineProperty(SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype, 'totalTime', {
    get: function () {
      return this.this$SwfLoaderMethod.getFrameTime_za3lpa$(this.totalFrames);
    }
  });
  SwfLoaderMethod$generateActualTimelines$Subtimeline.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Subtimeline',
    interfaces: []
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.component1 = function () {
    return this.index;
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.component2 = function () {
    return this.totalFrames;
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.component3 = function () {
    return this.nextState;
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.component4 = function () {
    return this.nextStatePlay;
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.copy_nj6m92$ = function (index, totalFrames, nextState, nextStatePlay) {
    return new SwfLoaderMethod$generateActualTimelines$Subtimeline(this.this$SwfLoaderMethod, index === void 0 ? this.index : index, totalFrames === void 0 ? this.totalFrames : totalFrames, nextState === void 0 ? this.nextState : nextState, nextStatePlay === void 0 ? this.nextStatePlay : nextStatePlay);
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.toString = function () {
    return 'Subtimeline(index=' + Kotlin.toString(this.index) + (', totalFrames=' + Kotlin.toString(this.totalFrames)) + (', nextState=' + Kotlin.toString(this.nextState)) + (', nextStatePlay=' + Kotlin.toString(this.nextStatePlay)) + ')';
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalFrames) | 0;
    result = result * 31 + Kotlin.hashCode(this.nextState) | 0;
    result = result * 31 + Kotlin.hashCode(this.nextStatePlay) | 0;
    return result;
  };
  SwfLoaderMethod$generateActualTimelines$Subtimeline.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.totalFrames, other.totalFrames) && Kotlin.equals(this.nextState, other.nextState) && Kotlin.equals(this.nextStatePlay, other.nextStatePlay)))));
  };
  function SwfLoaderMethod$generateActualTimelines$FrameInfo(this$SwfLoaderMethod, subtimeline, frameInSubTimeline, stateName, startSubtimeline, startNamedState) {
    this.this$SwfLoaderMethod = this$SwfLoaderMethod;
    this.subtimeline = subtimeline;
    this.frameInSubTimeline = frameInSubTimeline;
    this.stateName = stateName;
    this.startSubtimeline = startSubtimeline;
    this.startNamedState = startNamedState;
    this.timeInSubTimeline = this$SwfLoaderMethod.getFrameTime_za3lpa$(this.frameInSubTimeline);
  }
  SwfLoaderMethod$generateActualTimelines$FrameInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FrameInfo',
    interfaces: []
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.component1 = function () {
    return this.subtimeline;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.component2 = function () {
    return this.frameInSubTimeline;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.component3 = function () {
    return this.stateName;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.component4 = function () {
    return this.startSubtimeline;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.component5 = function () {
    return this.startNamedState;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.copy_xk48av$ = function (subtimeline, frameInSubTimeline, stateName, startSubtimeline, startNamedState) {
    return new SwfLoaderMethod$generateActualTimelines$FrameInfo(this.this$SwfLoaderMethod, subtimeline === void 0 ? this.subtimeline : subtimeline, frameInSubTimeline === void 0 ? this.frameInSubTimeline : frameInSubTimeline, stateName === void 0 ? this.stateName : stateName, startSubtimeline === void 0 ? this.startSubtimeline : startSubtimeline, startNamedState === void 0 ? this.startNamedState : startNamedState);
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.toString = function () {
    return 'FrameInfo(subtimeline=' + Kotlin.toString(this.subtimeline) + (', frameInSubTimeline=' + Kotlin.toString(this.frameInSubTimeline)) + (', stateName=' + Kotlin.toString(this.stateName)) + (', startSubtimeline=' + Kotlin.toString(this.startSubtimeline)) + (', startNamedState=' + Kotlin.toString(this.startNamedState)) + ')';
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.subtimeline) | 0;
    result = result * 31 + Kotlin.hashCode(this.frameInSubTimeline) | 0;
    result = result * 31 + Kotlin.hashCode(this.stateName) | 0;
    result = result * 31 + Kotlin.hashCode(this.startSubtimeline) | 0;
    result = result * 31 + Kotlin.hashCode(this.startNamedState) | 0;
    return result;
  };
  SwfLoaderMethod$generateActualTimelines$FrameInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.subtimeline, other.subtimeline) && Kotlin.equals(this.frameInSubTimeline, other.frameInSubTimeline) && Kotlin.equals(this.stateName, other.stateName) && Kotlin.equals(this.startSubtimeline, other.startSubtimeline) && Kotlin.equals(this.startNamedState, other.startNamedState)))));
  };
  var HashSet_init = Kotlin.kotlin.collections.HashSet_init_287e2$;
  SwfLoaderMethod.prototype.generateActualTimelines_0 = function (continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    var $receiver = this.lib.symbolsById;
    var destination = ArrayList_init();
    var tmp$_10;
    tmp$_10 = $receiver.iterator();
    while (tmp$_10.hasNext()) {
      var element = tmp$_10.next();
      if (Kotlin.isType(element, AnSymbolMovieClip))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var symbol = tmp$.next();
      var swfTimeline = get_swfTimeline(symbol);
      var justAfterStopOrStart = true;
      var stateStartFrame = 0;
      var frameInfos = ArrayList_init(swfTimeline.frames.size);
      var referencedFrames = HashSet_init();
      tmp$_0 = swfTimeline.frames.iterator();
      while (tmp$_0.hasNext()) {
        var frame = tmp$_0.next();
        if (frame.hasGoto) {
          var $receiver_0 = frame.actions;
          var destination_0 = ArrayList_init();
          var tmp$_11;
          tmp$_11 = $receiver_0.iterator();
          while (tmp$_11.hasNext()) {
            var element_0 = tmp$_11.next();
            if (Kotlin.isType(element_0, MySwfFrame$Action$Goto))
              destination_0.add_11rb$(element_0);
          }
          var goto = first(destination_0);
          var element_1 = goto.frame0;
          referencedFrames.add_11rb$(element_1);
        }
      }
      var flow = true;
      var stateName = 'default';
      var frameIndex = 0;
      var subtimelineIndex = -1;
      var subtimelines = ArrayList_init();
      tmp$_1 = swfTimeline.frames.iterator();
      while (tmp$_1.hasNext()) {
        var frame_0 = tmp$_1.next();
        var startNamedState = false;
        var startSubtimeline = false;
        if (flow) {
          if (frame_0.isFirst)
            tmp$_3 = 'default';
          else if (frame_0.name != null)
            tmp$_3 = (tmp$_2 = frame_0.name) != null ? tmp$_2 : Kotlin.throwNPE();
          else
            tmp$_3 = 'frame' + frame_0.index0;
          stateName = tmp$_3;
          frameIndex = 0;
          subtimelineIndex = subtimelineIndex + 1 | 0;
          var element_2 = new SwfLoaderMethod$generateActualTimelines$Subtimeline(this, subtimelineIndex);
          subtimelines.add_11rb$(element_2);
          startNamedState = true;
          startSubtimeline = true;
        }
        if (frame_0.name != null) {
          stateName = (tmp$_4 = frame_0.name) != null ? tmp$_4 : Kotlin.throwNPE();
          startNamedState = true;
        }
         else if (referencedFrames.contains_11rb$(frame_0.index0)) {
          stateName = 'frame' + frame_0.index0;
          startNamedState = true;
        }
        var subtimeline = subtimelines.get_za3lpa$(subtimelineIndex);
        subtimeline.totalFrames = subtimeline.totalFrames + 1 | 0;
        flow = frame_0.hasFlow;
        var element_3 = new SwfLoaderMethod$generateActualTimelines$FrameInfo(this, subtimeline, frameIndex, stateName, startSubtimeline, startNamedState);
        frameInfos.add_11rb$(element_3);
        frameIndex = frameIndex + 1 | 0;
      }
      tmp$_5 = swfTimeline.frames.iterator();
      while (tmp$_5.hasNext()) {
        var frame_1 = tmp$_5.next();
        var info = frameInfos.get_za3lpa$(frame_1.index0);
        var isLast = frame_1.index0 === last(swfTimeline.frames).index0;
        if (frame_1.hasFlow) {
          tmp$_6 = frame_1.actions.iterator();
          while (tmp$_6.hasNext()) {
            var action = tmp$_6.next();
            if (Kotlin.isType(action, MySwfFrame$Action$Goto))
              info.subtimeline.nextState = frameInfos.get_za3lpa$(action.frame0).stateName;
            else if (Kotlin.isType(action, MySwfFrame$Action$Stop))
              info.subtimeline.nextStatePlay = false;
            else if (Kotlin.isType(action, MySwfFrame$Action$Play))
              info.subtimeline.nextStatePlay = true;
          }
        }
         else {
          if (isLast) {
            info.subtimeline.nextState = 'default';
            info.subtimeline.nextStatePlay = true;
          }
        }
      }
      var totalDepths = symbol.limits.totalDepths;
      var currentSubTimeline = new AnSymbolMovieClipSubTimeline(totalDepths);
      var lastDepths = Kotlin.newArray(totalDepths, null);
      tmp$_7 = swfTimeline.frames.iterator();
      while (tmp$_7.hasNext()) {
        var frame_2 = tmp$_7.next();
        var info_0 = frameInfos.get_za3lpa$(frame_2.index0);
        var currentTime = info_0.timeInSubTimeline;
        if (info_0.startSubtimeline) {
          currentSubTimeline = new AnSymbolMovieClipSubTimeline(totalDepths);
          fill(lastDepths, null);
          var subtimeline_0 = info_0.subtimeline;
          currentSubTimeline.totalTime = subtimeline_0.totalTime;
          currentSubTimeline.nextState = subtimeline_0.nextState;
          currentSubTimeline.nextStatePlay = subtimeline_0.nextStatePlay;
          if (frame_2.isFirst) {
            var $receiver_1 = symbol.states;
            var value = new AnSymbolMovieClipState('default', currentSubTimeline, 0);
            $receiver_1.put_xwzc9p$('default', value);
            var $receiver_2 = symbol.states;
            var value_0 = new AnSymbolMovieClipState('frame0', currentSubTimeline, 0);
            $receiver_2.put_xwzc9p$('frame0', value_0);
          }
        }
        if (info_0.startNamedState) {
          currentSubTimeline.actions.add_wxm5ur$(info_0.timeInSubTimeline, new AnEventAction(info_0.stateName));
          var $receiver_3 = symbol.states;
          var key = info_0.stateName;
          var value_1 = new AnSymbolMovieClipState(info_0.stateName, currentSubTimeline, info_0.timeInSubTimeline);
          $receiver_3.put_xwzc9p$(key, value_1);
        }
        tmp$_8 = frame_2.depths.iterator();
        while (tmp$_8.hasNext()) {
          var depth = tmp$_8.next();
          var n = depth.depth;
          var lastDepth = lastDepths[n];
          if (!Kotlin.equals(depth, lastDepth)) {
            currentSubTimeline.timelines[depth.depth].add_wxm5ur$(info_0.timeInSubTimeline, depth);
            lastDepths[n] = depth;
          }
        }
        tmp$_9 = frame_2.actions.iterator();
        while (tmp$_9.hasNext()) {
          var it = tmp$_9.next();
          if (Kotlin.isType(it, MySwfFrame$Action$PlaySound))
            currentSubTimeline.actions.add_wxm5ur$(currentTime, new AnPlaySoundAction(it.soundId));
        }
      }
    }
  };
  SwfLoaderMethod.prototype.processAs3Actions_0 = function (continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18;
    tmp$ = this.classNameToTagId.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_19 = tmp$.next();
      var className = tmp$_19.key;
      var tagId = tmp$_19.value;
      this.lib.symbolsById.get_za3lpa$(tagId).name = className;
      tmp$_0 = this.classNameToTypes.get_11rb$(className);
      if (tmp$_0 == null) {
        continue;
      }
      var type = tmp$_0;
      tmp$_2 = (tmp$_1 = this.lib.symbolsById.get_za3lpa$(tagId)) == null || Kotlin.isType(tmp$_1, AnSymbolMovieClip) ? tmp$_1 : null;
      if (tmp$_2 == null) {
        continue;
      }
      var symbol = tmp$_2;
      var abc = type.abc;
      var labelsToFrame0 = get_labelsToFrame0(symbol);
      tmp$_3 = type.instanceTraits.iterator();
      while (tmp$_3.hasNext()) {
        var trait = tmp$_3.next();
        var simpleName = trait.name.simpleName;
        if (startsWith(simpleName, 'frame')) {
          var show = void 0;
          var ignoreErrors$result;
          ignoreErrors$break: do {
            if (show === void 0)
              show = false;
            try {
              ignoreErrors$result = toInt(substr(simpleName, 5));
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
          tmp$_4 = ignoreErrors$result;
          if (tmp$_4 == null) {
            continue;
          }
          var frame = tmp$_4;
          var frame0 = frame - 1 | 0;
          tmp$_6 = (tmp$_5 = trait) == null || Kotlin.isType(tmp$_5, ABC$TraitMethod) ? tmp$_5 : Kotlin.throwCCE();
          if (tmp$_6 == null) {
            continue;
          }
          var traitMethod = tmp$_6;
          var methodDesc = abc.methodsDesc.get_za3lpa$(traitMethod.methodIndex);
          tmp$_7 = methodDesc.body;
          if (tmp$_7 == null) {
            continue;
          }
          var body = tmp$_7;
          var lastValue = null;
          tmp$_8 = body.ops.iterator();
          while (tmp$_8.hasNext()) {
            var op = tmp$_8.next();
            tmp$_9 = op.opcode;
            if (Kotlin.equals(tmp$_9, AbcOpcode.PushByte))
              lastValue = (Kotlin.isType(tmp$_10 = op, AbcIntOperation) ? tmp$_10 : Kotlin.throwCCE()).value;
            else if (Kotlin.equals(tmp$_9, AbcOpcode.PushShort))
              lastValue = (Kotlin.isType(tmp$_11 = op, AbcIntOperation) ? tmp$_11 : Kotlin.throwCCE()).value;
            else if (Kotlin.equals(tmp$_9, AbcOpcode.PushInt))
              lastValue = (Kotlin.isType(tmp$_12 = op, AbcIntOperation) ? tmp$_12 : Kotlin.throwCCE()).value;
            else if (Kotlin.equals(tmp$_9, AbcOpcode.PushUInt))
              lastValue = (Kotlin.isType(tmp$_13 = op, AbcIntOperation) ? tmp$_13 : Kotlin.throwCCE()).value;
            else if (Kotlin.equals(tmp$_9, AbcOpcode.PushString))
              lastValue = (Kotlin.isType(tmp$_14 = op, AbcStringOperation) ? tmp$_14 : Kotlin.throwCCE()).value;
            else if (Kotlin.equals(tmp$_9, AbcOpcode.CallPropVoid)) {
              var call = Kotlin.isType(tmp$_15 = op, AbcMultinameIntOperation) ? tmp$_15 : Kotlin.throwCCE();
              var callMethodName = call.multiname.simpleName;
              var frameData = get_swfTimeline(symbol).frames.get_za3lpa$(frame0);
              if (Kotlin.equals(callMethodName, 'gotoAndPlay') || Kotlin.equals(callMethodName, 'gotoAndStop')) {
                tmp$_16 = lastValue;
                if (typeof tmp$_16 === 'string')
                  tmp$_18 = (tmp$_17 = labelsToFrame0.get_11rb$(lastValue)) != null ? tmp$_17 : 0;
                else if (typeof tmp$_16 === 'number')
                  tmp$_18 = lastValue - 1 | 0;
                else
                  tmp$_18 = 0;
                var gotoFrame0 = tmp$_18;
                if (Kotlin.equals(callMethodName, 'gotoAndStop')) {
                  frameData.gotoAndStop_za3lpa$(gotoFrame0);
                }
                 else {
                  frameData.gotoAndPlay_za3lpa$(gotoFrame0);
                }
              }
               else if (Kotlin.equals(callMethodName, 'play'))
                frameData.play();
              else if (Kotlin.equals(callMethodName, 'stop'))
                frameData.stop();
              lastValue = null;
            }
          }
        }
      }
    }
  };
  function SwfLoaderMethod$generateTextures$lambda(closure$shape) {
    return function (texture) {
      closure$shape.textureWithBitmap = texture;
      return Unit;
    };
  }
  function SwfLoaderMethod$generateTextures$lambda_0(closure$tag, closure$ratio) {
    return function (it) {
      try {
        closure$tag.export_33tt3r$(it, closure$ratio);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          printStackTrace(e);
        }
         else
          throw e;
      }
      return Unit;
    };
  }
  function SwfLoaderMethod$generateTextures$lambda_1(closure$morph, closure$ratio) {
    return function (texture) {
      closure$morph.texturesWithBitmap.add_wxm5ur$(closure$ratio * 1000 | 0, texture);
      return Unit;
    };
  }
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  SwfLoaderMethod.prototype.generateTextures_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$generateTextures_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$generateTextures_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$itemsInAtlas = void 0;
    this.local$tmp$_5 = void 0;
    this.local$shape = void 0;
    this.local$rasterizerRequest = void 0;
    this.local$info = void 0;
    this.local$rasterizer = void 0;
    this.local$morph = void 0;
    this.local$tag = void 0;
    this.local$ratios = void 0;
    this.local$MAX_RATIOS = void 0;
    this.local$tmp$_6 = void 0;
    this.local$$receiver = void 0;
    this.local$destination = void 0;
    this.local$tmp$_7 = void 0;
    this.local$item = void 0;
    this.local$aratios = void 0;
    this.local$ratio = void 0;
    this.local$bb = void 0;
    this.local$bounds = void 0;
    this.local$rasterizer_0 = void 0;
    this.local$tmp$_8 = void 0;
    this.local$processor = void 0;
    this.local$texture = void 0;
  }
  Coroutine$generateTextures_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$generateTextures_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$generateTextures_0.prototype.constructor = Coroutine$generateTextures_0;
  Coroutine$generateTextures_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$itemsInAtlas = LinkedHashMap_init();
            this.local$tmp$ = this.$this.shapesToPopulate.entries.iterator();
            while (this.local$tmp$.hasNext()) {
              this.local$tmp$_5 = this.local$tmp$.next();
              this.local$shape = this.local$tmp$_5.key;
              this.local$rasterizerRequest = this.local$tmp$_5.value;
              this.local$info = this.$this.analyzerInfo_za3lpa$(this.local$rasterizerRequest.charId);
              this.local$rasterizer = this.local$rasterizerRequest.getRasterizer_14dthe$(this.local$info.globalScaleBounds.max);
              this.local$itemsInAtlas.put_xwzc9p$(SwfLoaderMethod$generateTextures$lambda(this.local$shape), this.local$rasterizer.imageWithScale);
            }

            this.local$tmp$_0 = this.$this.morphShapesToPopulate.iterator();
            while (this.local$tmp$_0.hasNext()) {
              this.local$morph = this.local$tmp$_0.next();
              this.local$tag = (this.local$tmp$_1 = get_tagDefineMorphShape(this.local$morph)) != null ? this.local$tmp$_1 : Kotlin.throwNPE();
              this.local$ratios = sorted((this.local$tmp$_2 = this.$this.morphShapeRatios.get_11rb$(this.local$tag.characterId)) != null ? this.local$tmp$_2 : emptySet());
              this.local$MAX_RATIOS = 24;
              if (this.local$ratios.size > this.local$MAX_RATIOS) {
                this.local$$receiver = until(0, this.local$MAX_RATIOS);
                this.local$destination = ArrayList_init(collectionSizeOrDefault(this.local$$receiver, 10));
                this.local$tmp$_7 = this.local$$receiver.iterator();
                while (this.local$tmp$_7.hasNext()) {
                  this.local$item = this.local$tmp$_7.next();
                  this.local$destination.add_11rb$(this.local$item / (this.local$MAX_RATIOS - 1 | 0));
                }
                this.local$tmp$_6 = this.local$destination;
              }
               else
                this.local$tmp$_6 = this.local$ratios;
              this.local$aratios = this.local$tmp$_6;
              this.local$tmp$_3 = this.local$aratios.iterator();
              while (this.local$tmp$_3.hasNext()) {
                this.local$ratio = this.local$tmp$_3.next();
                this.local$bb = new ShapeExporterBoundsBuilder();
                try {
                  this.local$tag.export_33tt3r$(this.local$bb, this.local$ratio);
                }
                 catch (e) {
                  if (Kotlin.isType(e, Throwable)) {
                    printStackTrace(e);
                  }
                   else
                    throw e;
                }
                this.local$bounds = this.local$bb.bb.getBounds_2da8yn$();
                this.local$rasterizer_0 = new SWFShapeRasterizer(this.$this.swf, this.$this.config.debug, this.local$bounds, SwfLoaderMethod$generateTextures$lambda_0(this.local$tag, this.local$ratio), this.$this.config.rasterizerMethod, this.$this.config.antialiasing, this.$this.config.exportScale, this.$this.config.minMorphShapeSide, this.$this.config.maxMorphShapeSide);
                this.local$itemsInAtlas.put_xwzc9p$(SwfLoaderMethod$generateTextures$lambda_1(this.local$morph, this.local$ratio), this.local$rasterizer_0.imageWithScale);
              }
            }

            this.state_0 = 2;
            this.result_0 = toAtlas(this.local$itemsInAtlas, this.$this.views, this.$this.config.maxTextureSide, this.$this.config.mipmaps, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_4 = this.result_0.entries.iterator();
            while (this.local$tmp$_4.hasNext()) {
              this.local$tmp$_8 = this.local$tmp$_4.next();
              this.local$processor = this.local$tmp$_8.key;
              this.local$texture = this.local$tmp$_8.value;
              this.local$processor(this.local$texture);
            }

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
  SwfLoaderMethod.prototype.findLimits_dh5fw2$ = function (tags) {
    var tmp$;
    var maxDepth = -1;
    var totalFrames = 0;
    var items = HashSet_init();
    tmp$ = tags.iterator();
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      if (Kotlin.isType(it, TagPlaceObject)) {
        if (it.hasCharacter) {
          var element = to(it.depth - 1 | 0, it.characterId);
          items.add_11rb$(element);
        }
        var tmp$_0 = maxDepth;
        var b = it.depth - 1 | 0;
        maxDepth = Math_0.max(tmp$_0, b);
        if (it.hasClipDepth) {
          var tmp$_1 = maxDepth;
          var b_0 = (it.clipDepth - 1 | 0) + 1 | 0;
          maxDepth = Math_0.max(tmp$_1, b_0);
        }
      }
       else if (Kotlin.isType(it, TagShowFrame)) {
        totalFrames = totalFrames + 1 | 0;
      }
    }
    return new AnSymbolLimits(maxDepth + 1 | 0, totalFrames, items.size, totalFrames * this.lib.msPerFrameDouble | 0);
  };
  SwfLoaderMethod.prototype.registerBitmap_i0lgm1$ = function (charId, bmp, name) {
    if (name === void 0)
      name = null;
    get_bitmaps(this.swf).put_xwzc9p$(charId, bmp);
    var $receiver = this.symbols;
    var element = new AnSymbolBitmap(charId, name, bmp);
    $receiver.add_11rb$(element);
  };
  function SwfLoaderMethod$parseMovieClip$DepthInfo(depth, uid, charId, clipDepth, name, colorTransform, ratio, matrix, blendMode) {
    if (uid === void 0)
      uid = -1;
    if (charId === void 0)
      charId = -1;
    if (clipDepth === void 0)
      clipDepth = -1;
    if (name === void 0)
      name = null;
    if (colorTransform === void 0)
      colorTransform = ColorTransform.Companion.identity;
    if (ratio === void 0)
      ratio = 0.0;
    if (matrix === void 0)
      matrix = new Matrix2d();
    if (blendMode === void 0)
      blendMode = BlendMode.INHERIT;
    this.depth = depth;
    this.uid = uid;
    this.charId = charId;
    this.clipDepth = clipDepth;
    this.name = name;
    this.colorTransform = colorTransform;
    this.ratio = ratio;
    this.matrix = matrix;
    this.blendMode = blendMode;
  }
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.reset = function () {
    this.uid = -1;
    this.ratio = 0.0;
    this.charId = -1;
    this.clipDepth = -1;
    this.colorTransform = ColorTransform.Companion.identity;
    this.name = null;
    this.matrix = new Matrix2d();
    this.blendMode = BlendMode.INHERIT;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.createFrameElement = function () {
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.toFrameElement = function () {
    return new AnSymbolTimelineFrame(this.depth, this.uid, this.clipDepth, this.ratio, this.matrix, this.name, this.colorTransform, this.blendMode);
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DepthInfo',
    interfaces: []
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component1 = function () {
    return this.depth;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component2 = function () {
    return this.uid;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component3 = function () {
    return this.charId;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component4 = function () {
    return this.clipDepth;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component5 = function () {
    return this.name;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component6 = function () {
    return this.colorTransform;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component7 = function () {
    return this.ratio;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component8 = function () {
    return this.matrix;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.component9 = function () {
    return this.blendMode;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.copy_smurm5$ = function (depth, uid, charId, clipDepth, name, colorTransform, ratio, matrix, blendMode) {
    return new SwfLoaderMethod$parseMovieClip$DepthInfo(depth === void 0 ? this.depth : depth, uid === void 0 ? this.uid : uid, charId === void 0 ? this.charId : charId, clipDepth === void 0 ? this.clipDepth : clipDepth, name === void 0 ? this.name : name, colorTransform === void 0 ? this.colorTransform : colorTransform, ratio === void 0 ? this.ratio : ratio, matrix === void 0 ? this.matrix : matrix, blendMode === void 0 ? this.blendMode : blendMode);
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.toString = function () {
    return 'DepthInfo(depth=' + Kotlin.toString(this.depth) + (', uid=' + Kotlin.toString(this.uid)) + (', charId=' + Kotlin.toString(this.charId)) + (', clipDepth=' + Kotlin.toString(this.clipDepth)) + (', name=' + Kotlin.toString(this.name)) + (', colorTransform=' + Kotlin.toString(this.colorTransform)) + (', ratio=' + Kotlin.toString(this.ratio)) + (', matrix=' + Kotlin.toString(this.matrix)) + (', blendMode=' + Kotlin.toString(this.blendMode)) + ')';
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.depth) | 0;
    result = result * 31 + Kotlin.hashCode(this.uid) | 0;
    result = result * 31 + Kotlin.hashCode(this.charId) | 0;
    result = result * 31 + Kotlin.hashCode(this.clipDepth) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorTransform) | 0;
    result = result * 31 + Kotlin.hashCode(this.ratio) | 0;
    result = result * 31 + Kotlin.hashCode(this.matrix) | 0;
    result = result * 31 + Kotlin.hashCode(this.blendMode) | 0;
    return result;
  };
  SwfLoaderMethod$parseMovieClip$DepthInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.depth, other.depth) && Kotlin.equals(this.uid, other.uid) && Kotlin.equals(this.charId, other.charId) && Kotlin.equals(this.clipDepth, other.clipDepth) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.colorTransform, other.colorTransform) && Kotlin.equals(this.ratio, other.ratio) && Kotlin.equals(this.matrix, other.matrix) && Kotlin.equals(this.blendMode, other.blendMode)))));
  };
  function SwfLoaderMethod$parseMovieClip$getUid(closure$depths, closure$uniqueIds, closure$mc) {
    return function (depth) {
      var charId = closure$depths[depth].charId;
      var $receiver = closure$uniqueIds;
      var key = to(depth, charId);
      var tmp$;
      var value = $receiver.get_11rb$(key);
      if (value == null) {
        var closure$uniqueIds_0 = closure$uniqueIds;
        var closure$mc_0 = closure$mc;
        var uid = closure$uniqueIds_0.size;
        closure$mc_0.uidInfo[uid] = new AnSymbolUidDef(charId);
        var answer = uid;
        $receiver.put_xwzc9p$(key, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      return tmp$;
    };
  }
  function SwfLoaderMethod$parseMovieClip$lambda(closure$mc, closure$currentFrame) {
    return function () {
      return get_swfTimeline(closure$mc).frames.get_za3lpa$(closure$currentFrame.v);
    };
  }
  function SwfLoaderMethod$parseMovieClip$lambda_0(closure$tag) {
    return function (it) {
      closure$tag.export_dsznx3$(it);
      return Unit;
    };
  }
  var Array_0 = Array;
  var putAll = Kotlin.kotlin.collections.putAll_cweazw$;
  SwfLoaderMethod.prototype.parseMovieClip_4uxq7o$ = function (tags_0, mc_0, continuation_0, suspended) {
    var instance = new Coroutine$parseMovieClip_4uxq7o$(this, tags_0, mc_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parseMovieClip_4uxq7o$($this, tags_0, mc_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 17;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_5 = void 0;
    this.local$tmp$_6 = void 0;
    this.local$tmp$_7 = void 0;
    this.local$tmp$_8 = void 0;
    this.local$tmp$_9 = void 0;
    this.local$tmp$_10 = void 0;
    this.local$tmp$_11 = void 0;
    this.local$tmp$_12 = void 0;
    this.local$swfTimeline = void 0;
    this.local$labelsToFrame0 = void 0;
    this.local$uniqueIds = void 0;
    this.local$array = void 0;
    this.local$tmp$_13 = void 0;
    this.local$i = void 0;
    this.local$depths = void 0;
    this.local$getUid = void 0;
    this.local$totalShowFramesInMc = void 0;
    this.local$it = void 0;
    this.local$currentFrame = void 0;
    this.local$tmp$_14 = void 0;
    this.local$$receiver = void 0;
    this.local$destination = void 0;
    this.local$tmp$_15 = void 0;
    this.local$item = void 0;
    this.local$$receiver_0 = void 0;
    this.local$key = void 0;
    this.local$$receiver_1 = void 0;
    this.local$element = void 0;
    this.local$tmp$_16 = void 0;
    this.local$name = void 0;
    this.local$index = void 0;
    this.local$depthsChanged = void 0;
    this.local$currentFrame_0 = void 0;
    this.local$it_0 = void 0;
    this.local$currentTime = void 0;
    this.local$swfCurrentFrame = void 0;
    this.local$tmp$_17 = void 0;
    this.local$tmp$_18 = void 0;
    this.local$element_0 = void 0;
    this.local$action = void 0;
    this.local$soundBytes = void 0;
    this.local$$receiver_2 = void 0;
    this.local$element_1 = void 0;
    this.local$fbmp = void 0;
    this.local$bitsData = void 0;
    this.local$nativeBitmap = void 0;
    this.local$bmp_0 = void 0;
    this.local$fmaskinfo = void 0;
    this.local$maskinfo = void 0;
    this.local$funcompressedData = void 0;
    this.local$uncompressedData = void 0;
    this.local$ncolors = void 0;
    this.local$s = void 0;
    this.local$$receiver_9 = void 0;
    this.local$destination_3 = void 0;
    this.local$tmp$_30 = void 0;
    this.local$item_2 = void 0;
    this.local$$receiver_10 = void 0;
    this.local$destination_4 = void 0;
    this.local$tmp$_31 = void 0;
    this.local$item_3 = void 0;
    this.local$clut = void 0;
    this.local$pixels = void 0;
    this.local$bmp = void 0;
    this.local$components = void 0;
    this.local$colorFormat = void 0;
    this.local$n = void 0;
    this.local$tag = void 0;
    this.local$rasterizerRequest = void 0;
    this.local$symbol = void 0;
    this.local$$receiver_3 = void 0;
    this.local$pair = void 0;
    this.local$startBounds = void 0;
    this.local$endBounds = void 0;
    this.local$bounds = void 0;
    this.local$bounds2 = void 0;
    this.local$symbol_0 = void 0;
    this.local$tmp$_19 = void 0;
    this.local$$receiver_4 = void 0;
    this.local$destination_0 = void 0;
    this.local$tmp$_20 = void 0;
    this.local$item_0 = void 0;
    this.local$map = void 0;
    this.local$tmp$_21 = void 0;
    this.local$$receiver_5 = void 0;
    this.local$destination_1 = void 0;
    this.local$tmp$_22 = void 0;
    this.local$element_2 = void 0;
    this.local$destination_2 = void 0;
    this.local$tmp$_23 = void 0;
    this.local$item_1 = void 0;
    this.local$tmp$_24 = void 0;
    this.local$map_0 = void 0;
    this.local$childMc = void 0;
    this.local$$receiver_6 = void 0;
    this.local$key_0 = void 0;
    this.local$childMc_0 = void 0;
    this.local$depthId = void 0;
    this.local$clipDepthId = void 0;
    this.local$depth = void 0;
    this.local$ct = void 0;
    this.local$m = void 0;
    this.local$uid = void 0;
    this.local$metaData = void 0;
    this.local$tmp$_25 = void 0;
    this.local$tmp$_26 = void 0;
    this.local$uidInfo = void 0;
    this.local$show = void 0;
    this.local$ignoreErrors$result = void 0;
    this.local$tmp$_27 = void 0;
    this.local$tmp$_28 = void 0;
    this.local$eprops = void 0;
    this.local$$receiver_7 = void 0;
    this.local$key_1 = void 0;
    this.local$tmp$_29 = void 0;
    this.local$value = void 0;
    this.local$answer = void 0;
    this.local$ratios = void 0;
    this.local$element_3 = void 0;
    this.local$depth_0 = void 0;
    this.local$$receiver_8 = void 0;
    this.local$element_4 = void 0;
    this.local$tags = tags_0;
    this.local$mc = mc_0;
    this.local$e = void 0;
  }
  Coroutine$parseMovieClip_4uxq7o$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parseMovieClip_4uxq7o$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parseMovieClip_4uxq7o$.prototype.constructor = Coroutine$parseMovieClip_4uxq7o$;
  Coroutine$parseMovieClip_4uxq7o$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.symbols.add_11rb$(this.local$mc);
            this.local$swfTimeline = get_swfTimeline(this.local$mc);
            this.local$labelsToFrame0 = get_labelsToFrame0(this.local$mc);
            this.local$uniqueIds = HashMap_init();
            this.local$array = Array_0(this.local$mc.limits.totalDepths);
            this.local$tmp$_13 = this.local$array.length - 1 | 0;
            for (this.local$i = 0; this.local$i <= this.local$tmp$_13; this.local$i++) {
              this.local$array[this.local$i] = new SwfLoaderMethod$parseMovieClip$DepthInfo(this.local$i);
            }

            this.local$depths = this.local$array;
            this.local$getUid = SwfLoaderMethod$parseMovieClip$getUid(this.local$depths, this.local$uniqueIds, this.local$mc);
            this.local$totalShowFramesInMc = 0;
            this.local$tmp$ = this.local$tags.iterator();
            while (this.local$tmp$.hasNext()) {
              this.local$it = this.local$tmp$.next();
              this.local$currentFrame = this.local$swfTimeline.frames.size;
              if (Kotlin.isType(this.local$it, TagDefineSceneAndFrameLabelData)) {
                this.local$tmp$_14 = get_labelsToFrame0(this.local$mc);
                this.local$$receiver = this.local$it.frameLabels;
                this.local$destination = ArrayList_init(collectionSizeOrDefault(this.local$$receiver, 10));
                this.local$tmp$_15 = this.local$$receiver.iterator();
                while (this.local$tmp$_15.hasNext()) {
                  this.local$item = this.local$tmp$_15.next();
                  this.local$destination.add_11rb$(to(this.local$item.name, this.local$item.frameNumber - 1 | 0));
                }
                putAll(this.local$tmp$_14, this.local$destination);
              }
               else if (Kotlin.isType(this.local$it, TagFrameLabel)) {
                this.local$$receiver_0 = get_labelsToFrame0(this.local$mc);
                this.local$key = this.local$it.frameName;
                this.local$$receiver_0.put_xwzc9p$(this.local$key, this.local$currentFrame);
              }
               else if (Kotlin.isType(this.local$it, TagShowFrame)) {
                this.local$$receiver_1 = this.local$swfTimeline.frames;
                this.local$element = new MySwfFrame(this.local$currentFrame, this.local$mc.limits.totalDepths);
                this.local$$receiver_1.add_11rb$(this.local$element);
                this.local$totalShowFramesInMc = this.local$totalShowFramesInMc + 1 | 0;
              }
            }

            this.local$tmp$_0 = get_labelsToFrame0(this.local$mc).entries.iterator();
            while (this.local$tmp$_0.hasNext()) {
              this.local$tmp$_16 = this.local$tmp$_0.next();
              this.local$name = this.local$tmp$_16.key;
              this.local$index = this.local$tmp$_16.value;
              this.local$swfTimeline.frames.get_za3lpa$(this.local$index).name = this.local$name;
            }

            this.local$depthsChanged = new BitSet(this.local$depths.length);
            this.local$currentFrame_0 = {v: 0};
            this.local$tmp$_1 = this.local$tags.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 33;
              continue;
            }

            this.local$it_0 = this.local$tmp$_1.next();
            this.local$currentTime = this.$this.getFrameTime_za3lpa$(this.local$currentFrame_0.v);
            this.local$swfCurrentFrame = lazy(SwfLoaderMethod$parseMovieClip$lambda(this.local$mc, this.local$currentFrame_0));
            if (!Kotlin.isType(this.local$it_0, TagDefineSceneAndFrameLabelData)) {
              if (!Kotlin.isType(this.local$it_0, TagFrameLabel)) {
                if (!Kotlin.isType(this.local$it_0, TagFileAttributes)) {
                  if (Kotlin.isType(this.local$it_0, TagSetBackgroundColor)) {
                    this.$this.lib.bgcolor = decodeSWFColor(this.local$it_0.color);
                    this.state_0 = 29;
                    continue;
                  }
                   else {
                    if (!Kotlin.isType(this.local$it_0, TagProtect)) {
                      if (!Kotlin.isType(this.local$it_0, TagDefineFont)) {
                        if (!Kotlin.isType(this.local$it_0, TagDefineFontName)) {
                          if (!Kotlin.isType(this.local$it_0, TagDefineFontAlignZones)) {
                            if (Kotlin.isType(this.local$it_0, TagDefineEditText)) {
                              this.local$tmp$_17 = this.$this.symbols;
                              this.local$element_0 = new AnTextFieldSymbol(this.local$it_0.characterId, null, (this.local$tmp$_18 = this.local$it_0.initialText) != null ? this.local$tmp$_18 : '', this.local$it_0.bounds.rect);
                              this.local$tmp$_17.add_11rb$(this.local$element_0);
                              this.state_0 = 24;
                              continue;
                            }
                             else {
                              if (!Kotlin.isType(this.local$it_0, TagCSMTextSettings)) {
                                if (Kotlin.isType(this.local$it_0, TagDoAction)) {
                                  this.local$tmp$_2 = this.local$it_0.actions.iterator();
                                  while (this.local$tmp$_2.hasNext()) {
                                    this.local$action = this.local$tmp$_2.next();
                                    if (Kotlin.isType(this.local$action, ActionStop)) {
                                      new Kotlin.PropertyMetadata('swfCurrentFrame');
                                      this.local$swfCurrentFrame.value.stop();
                                    }
                                     else if (Kotlin.isType(this.local$action, ActionPlay)) {
                                      new Kotlin.PropertyMetadata('swfCurrentFrame');
                                      this.local$swfCurrentFrame.value.play();
                                    }
                                     else if (Kotlin.isType(this.local$action, ActionGotoFrame)) {
                                      new Kotlin.PropertyMetadata('swfCurrentFrame');
                                      this.local$swfCurrentFrame.value.goto_za3lpa$(this.local$action.frame);
                                    }
                                  }
                                  this.state_0 = 22;
                                  continue;
                                }
                                 else {
                                  if (!Kotlin.isType(this.local$it_0, TagSoundStreamHead)) {
                                    if (Kotlin.isType(this.local$it_0, TagDefineSound)) {
                                      this.local$soundBytes = this.local$it_0.soundData.cloneToNewByteArray();
                                      this.local$$receiver_2 = this.$this.symbols;
                                      this.local$element_1 = new AnSymbolSound(this.local$it_0.characterId, null, null, this.local$soundBytes);
                                      this.local$$receiver_2.add_11rb$(this.local$element_1);
                                      this.state_0 = 20;
                                      continue;
                                    }
                                     else {
                                      if (Kotlin.isType(this.local$it_0, TagStartSound)) {
                                        new Kotlin.PropertyMetadata('swfCurrentFrame');
                                        this.local$swfCurrentFrame.value.playSound_za3lpa$(this.local$it_0.soundId);
                                        this.state_0 = 19;
                                        continue;
                                      }
                                       else {
                                        if (Kotlin.isType(this.local$it_0, TagJPEGTables)) {
                                          println('Unhandled tag: ' + this.local$it_0);
                                          this.state_0 = 18;
                                          continue;
                                        }
                                         else {
                                          if (Kotlin.isType(this.local$it_0, TagDefineBits) || Kotlin.isType(this.local$it_0, TagDefineBitsLossless)) {
                                            this.local$fbmp = new Bitmap32(1, 1);
                                            Kotlin.isType(this.local$tmp$_3 = this.local$it_0, IDefinitionTag) ? this.local$tmp$_3 : Kotlin.throwCCE();
                                            if (Kotlin.isType(this.local$it_0, TagDefineBitsJPEG2)) {
                                              this.local$bitsData = this.local$it_0.bitmapData.cloneToNewByteArray();
                                              this.exceptionState_0 = 11;
                                              this.state_0 = 10;
                                              this.result_0 = readBitmap(openAsync(this.local$bitsData), void 0, void 0, this);
                                              if (this.result_0 === COROUTINE_SUSPENDED)
                                                return COROUTINE_SUSPENDED;
                                              break;
                                            }
                                             else {
                                              if (Kotlin.isType(this.local$it_0, TagDefineBitsLossless)) {
                                                this.local$funcompressedData = this.local$it_0.zlibBitmapData.cloneToNewFlashByteArray();
                                                this.state_0 = 8;
                                                this.result_0 = this.local$funcompressedData.uncompressInWorker_61zpoe$('zlib', this);
                                                if (this.result_0 === COROUTINE_SUSPENDED)
                                                  return COROUTINE_SUSPENDED;
                                                break;
                                              }
                                               else {
                                                this.state_0 = 9;
                                                continue;
                                              }
                                            }
                                          }
                                           else {
                                            if (Kotlin.isType(this.local$it_0, TagDefineShape)) {
                                              this.local$tag = this.local$it_0;
                                              this.local$rasterizerRequest = new SWFShapeRasterizerRequest(this.$this.swf, this.local$tag.characterId, this.local$tag.shapeBounds.rect, SwfLoaderMethod$parseMovieClip$lambda_0(this.local$tag), this.$this.config);
                                              this.local$symbol = new AnSymbolShape(this.local$it_0.characterId, null, this.local$rasterizerRequest.shapeBounds, null, this.local$rasterizerRequest.path);
                                              set_tagDefineShape(this.local$symbol, this.local$it_0);
                                              this.$this.symbols.add_11rb$(this.local$symbol);
                                              this.local$$receiver_3 = this.$this.shapesToPopulate;
                                              this.local$pair = to(this.local$symbol, this.local$rasterizerRequest);
                                              this.local$$receiver_3.put_xwzc9p$(this.local$pair.first, this.local$pair.second);
                                              this.state_0 = 7;
                                              continue;
                                            }
                                             else {
                                              if (Kotlin.isType(this.local$it_0, TagDefineMorphShape)) {
                                                this.local$startBounds = this.local$it_0.startBounds.rect;
                                                this.local$endBounds = this.local$it_0.endBounds.rect;
                                                this.local$bounds = (new BoundsBuilder()).add_2da8yn$(this.local$startBounds).add_2da8yn$(this.local$endBounds).add_2da8yn$(this.local$it_0.startEdgeBounds.rect).add_2da8yn$(this.local$it_0.endEdgeBounds.rect).getBounds_2da8yn$();
                                                this.local$bounds2 = this.local$bounds.copy_6y0v78$(void 0, void 0, this.local$bounds.width + 100, this.local$bounds.height + 100);
                                                this.local$symbol_0 = new AnSymbolMorphShape(this.local$it_0.characterId, null, this.local$bounds2);
                                                set_tagDefineMorphShape(this.local$symbol_0, this.local$it_0);
                                                this.$this.symbols.add_11rb$(this.local$symbol_0);
                                                this.$this.morphShapesToPopulate.add_11rb$(this.local$symbol_0);
                                                this.state_0 = 6;
                                                continue;
                                              }
                                               else {
                                                if (Kotlin.isType(this.local$it_0, TagDoABC)) {
                                                  this.local$tmp$_19 = this.$this.classNameToTypes;
                                                  this.local$$receiver_4 = this.local$it_0.abc.typesInfo;
                                                  this.local$destination_0 = ArrayList_init(collectionSizeOrDefault(this.local$$receiver_4, 10));
                                                  this.local$tmp$_20 = this.local$$receiver_4.iterator();
                                                  while (this.local$tmp$_20.hasNext()) {
                                                    this.local$item_0 = this.local$tmp$_20.next();
                                                    this.local$destination_0.add_11rb$(to(this.local$item_0.name.toString(), this.local$item_0));
                                                  }
                                                  this.local$map = toMap(this.local$destination_0);
                                                  this.local$tmp$_19.putAll_a2k3zr$(this.local$map);
                                                  this.state_0 = 5;
                                                  continue;
                                                }
                                                 else {
                                                  if (Kotlin.isType(this.local$it_0, TagSymbolClass)) {
                                                    this.local$tmp$_21 = this.$this.classNameToTagId;
                                                    this.local$$receiver_5 = this.local$it_0.symbols;
                                                    this.local$destination_1 = ArrayList_init();
                                                    this.local$tmp$_22 = this.local$$receiver_5.iterator();
                                                    while (this.local$tmp$_22.hasNext()) {
                                                      this.local$element_2 = this.local$tmp$_22.next();
                                                      if (this.local$element_2.name != null)
                                                        this.local$destination_1.add_11rb$(this.local$element_2);
                                                    }
                                                    this.local$destination_2 = ArrayList_init(collectionSizeOrDefault(this.local$destination_1, 10));
                                                    this.local$tmp$_23 = this.local$destination_1.iterator();
                                                    while (this.local$tmp$_23.hasNext()) {
                                                      this.local$item_1 = this.local$tmp$_23.next();
                                                      this.local$destination_2.add_11rb$(to((this.local$tmp$_24 = this.local$item_1.name) != null ? this.local$tmp$_24 : Kotlin.throwNPE(), this.local$item_1.tagId));
                                                    }
                                                    this.local$map_0 = toMap(this.local$destination_2);
                                                    this.local$tmp$_21.putAll_a2k3zr$(this.local$map_0);
                                                    this.state_0 = 4;
                                                    continue;
                                                  }
                                                   else {
                                                    if (Kotlin.isType(this.local$it_0, TagDefineSprite)) {
                                                      this.local$childMc = new AnSymbolMovieClip(this.local$it_0.characterId, null, this.$this.findLimits_dh5fw2$(this.local$it_0.tags));
                                                      this.local$$receiver_6 = this.$this.spritesById;
                                                      this.local$key_0 = this.local$it_0.characterId;
                                                      this.local$$receiver_6.put_xwzc9p$(this.local$key_0, this.local$childMc);
                                                      this.state_0 = 2;
                                                      this.result_0 = this.$this.parseMovieClip_4uxq7o$(this.local$it_0.tags, this.local$childMc, this);
                                                      if (this.result_0 === COROUTINE_SUSPENDED)
                                                        return COROUTINE_SUSPENDED;
                                                      break;
                                                    }
                                                     else {
                                                      if (Kotlin.isType(this.local$it_0, TagDefineScalingGrid)) {
                                                        this.local$childMc_0 = this.$this.spritesById.get_11rb$(this.local$it_0.characterId);
                                                        if (this.local$childMc_0 != null) {
                                                          this.local$childMc_0.ninePatch = this.local$it_0.splitter.rect;
                                                        }
                                                        this.$this.analyzerInfo_za3lpa$(this.local$it_0.characterId).hasNinePatch = true;
                                                      }
                                                       else if (Kotlin.isType(this.local$it_0, TagPlaceObject)) {
                                                        this.$this.totalPlaceObject = this.$this.totalPlaceObject + 1 | 0;
                                                        this.local$depthId = this.local$it_0.depth - 1 | 0;
                                                        this.local$clipDepthId = this.local$it_0.hasClipDepth ? (this.local$it_0.clipDepth - 1 | 0) - 1 | 0 : -1;
                                                        this.local$depth = this.local$depths[this.local$depthId];
                                                        if (this.local$it_0.hasCharacter)
                                                          this.local$depth.charId = this.local$it_0.characterId;
                                                        if (this.local$it_0.hasClipDepth)
                                                          this.local$depth.clipDepth = this.local$clipDepthId;
                                                        if (this.local$it_0.hasName)
                                                          this.local$depth.name = this.local$it_0.instanceName;
                                                        if (this.local$it_0.hasColorTransform) {
                                                          this.local$ct = toColorTransform((this.local$tmp$_8 = this.local$it_0.colorTransform) != null ? this.local$tmp$_8 : Kotlin.throwNPE());
                                                          this.local$depth.colorTransform = this.local$ct;
                                                        }
                                                        if (this.local$it_0.hasMatrix) {
                                                          this.local$m = ((this.local$tmp$_9 = this.local$it_0.matrix) != null ? this.local$tmp$_9 : Kotlin.throwNPE()).matrix;
                                                          this.local$depth.matrix = this.local$m;
                                                        }
                                                        if (this.local$it_0.hasBlendMode) {
                                                          this.local$tmp$_10 = this.local$it_0.blendMode;
                                                          if (this.local$tmp$_10 === consts.BlendMode.NORMAL_0)
                                                            this.local$tmp$_11 = BlendMode.NORMAL;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.NORMAL_1)
                                                            this.local$tmp$_11 = BlendMode.NORMAL;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.LAYER)
                                                            this.local$tmp$_11 = BlendMode.INHERIT;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.MULTIPLY)
                                                            this.local$tmp$_11 = BlendMode.MULTIPLY;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.SCREEN)
                                                            this.local$tmp$_11 = BlendMode.SCREEN;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.LIGHTEN)
                                                            this.local$tmp$_11 = BlendMode.LIGHTEN;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.DARKEN)
                                                            this.local$tmp$_11 = BlendMode.DARKEN;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.DIFFERENCE)
                                                            this.local$tmp$_11 = BlendMode.DIFFERENCE;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.ADD)
                                                            this.local$tmp$_11 = BlendMode.ADD;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.SUBTRACT)
                                                            this.local$tmp$_11 = BlendMode.SUBTRACT;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.INVERT)
                                                            this.local$tmp$_11 = BlendMode.INVERT;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.ALPHA)
                                                            this.local$tmp$_11 = BlendMode.ALPHA;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.ERASE)
                                                            this.local$tmp$_11 = BlendMode.ERASE;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.OVERLAY)
                                                            this.local$tmp$_11 = BlendMode.INHERIT;
                                                          else if (this.local$tmp$_10 === consts.BlendMode.HARDLIGHT)
                                                            this.local$tmp$_11 = BlendMode.HARDLIGHT;
                                                          else
                                                            this.local$tmp$_11 = BlendMode.INHERIT;
                                                          this.local$depth.blendMode = this.local$tmp$_11;
                                                        }
                                                        this.local$uid = this.local$getUid(this.local$depthId);
                                                        this.local$metaData = this.local$it_0.metaData;
                                                        this.local$tmp$_25 = (this.local$metaData != null && Kotlin.isType(this.local$metaData, Map));
                                                        if (this.local$tmp$_25) {
                                                          this.local$tmp$_25 = (Kotlin.isType(this.local$tmp$_26 = this.local$metaData, Map) ? this.local$tmp$_26 : Kotlin.throwCCE()).containsKey_11rb$('props');
                                                        }
                                                        if (this.local$tmp$_25) {
                                                          this.local$uidInfo = this.local$mc.uidInfo[this.local$uid];
                                                          this.local$show = void 0;
                                                          ignoreErrors$break: do {
                                                            if (this.local$show === void 0)
                                                              this.local$show = false;
                                                            try {
                                                              this.local$ignoreErrors$result = Kotlin.isType(this.local$tmp$_27 = json.Json.decode_61zpoe$(Kotlin.toString((Kotlin.isType(this.local$tmp$_28 = this.local$metaData, Map) ? this.local$tmp$_28 : Kotlin.throwCCE()).get_11rb$('props'))), Map) ? this.local$tmp$_27 : Kotlin.throwCCE();
                                                            }
                                                             catch (e) {
                                                              if (Kotlin.isType(e, Throwable)) {
                                                                if (this.local$show)
                                                                  printStackTrace(e);
                                                                this.local$ignoreErrors$result = null;
                                                                break ignoreErrors$break;
                                                              }
                                                               else
                                                                throw e;
                                                            }
                                                          }
                                                           while (false);
                                                          this.local$eprops = this.local$ignoreErrors$result;
                                                          if (this.local$eprops != null) {
                                                            this.local$uidInfo.extraProps.putAll_a2k3zr$(this.local$eprops);
                                                          }
                                                        }
                                                        if (this.local$it_0.hasRatio) {
                                                          this.local$depth.ratio = this.local$it_0.ratiod;
                                                          this.local$$receiver_7 = this.$this.morphShapeRatios;
                                                          this.local$key_1 = this.local$depth.charId;
                                                          this.local$value = this.local$$receiver_7.get_11rb$(this.local$key_1);
                                                          if (this.local$value == null) {
                                                            this.local$answer = HashSet_init();
                                                            this.local$$receiver_7.put_xwzc9p$(this.local$key_1, this.local$answer);
                                                            this.local$tmp$_29 = this.local$answer;
                                                          }
                                                           else {
                                                            this.local$tmp$_29 = this.local$value;
                                                          }
                                                          this.local$ratios = this.local$tmp$_29;
                                                          this.local$element_3 = this.local$it_0.ratiod;
                                                          this.local$ratios.add_11rb$(this.local$element_3);
                                                        }
                                                        this.$this.analyzerInfo_za3lpa$(this.local$depth.charId).registerParent_ic6ump$(this.$this.analyzerInfo_za3lpa$(this.local$mc.id));
                                                        this.$this.analyzerInfo_za3lpa$(this.local$depth.charId).registerMatrix_yx07kl$(this.local$depth.matrix);
                                                        this.local$depth.uid = this.local$uid;
                                                        this.local$depthsChanged.set_fzusl$(this.local$depthId, true);
                                                      }
                                                       else if (Kotlin.isType(this.local$it_0, TagRemoveObject)) {
                                                        this.local$depths[this.local$it_0.depth - 1 | 0].reset();
                                                        this.local$depthsChanged.set_fzusl$(this.local$it_0.depth - 1 | 0, true);
                                                      }
                                                       else if (Kotlin.isType(this.local$it_0, TagShowFrame)) {
                                                        this.$this.globalTotalShowFrame = this.$this.globalTotalShowFrame + 1 | 0;
                                                        for (this.local$tmp$_12 = 0; this.local$tmp$_12 !== this.local$depths.length; ++this.local$tmp$_12) {
                                                          this.local$depth_0 = this.local$depths[this.local$tmp$_12];
                                                          new Kotlin.PropertyMetadata('swfCurrentFrame');
                                                          this.local$$receiver_8 = this.local$swfCurrentFrame.value.depths;
                                                          this.local$element_4 = this.local$depth_0.toFrameElement();
                                                          this.local$$receiver_8.add_11rb$(this.local$element_4);
                                                        }
                                                        this.local$depthsChanged.clear();
                                                        this.local$currentFrame_0.v = this.local$currentFrame_0.v + 1 | 0;
                                                      }
                                                       else if (!Kotlin.isType(this.local$it_0, TagEnd)) {
                                                        println('Unhandled tag ' + this.local$it_0);
                                                      }
                                                      this.state_0 = 3;
                                                      continue;
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                   else {
                                    this.state_0 = 21;
                                    continue;
                                  }
                                }
                              }
                               else {
                                this.state_0 = 23;
                                continue;
                              }
                            }
                          }
                           else {
                            this.state_0 = 25;
                            continue;
                          }
                        }
                         else {
                          this.state_0 = 26;
                          continue;
                        }
                      }
                       else {
                        this.state_0 = 27;
                        continue;
                      }
                    }
                     else {
                      this.state_0 = 28;
                      continue;
                    }
                  }
                }
                 else {
                  this.state_0 = 30;
                  continue;
                }
              }
               else {
                this.state_0 = 31;
                continue;
              }
            }
             else {
              this.state_0 = 32;
              continue;
            }

          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 16;
            continue;
          case 8:
            this.local$uncompressedData = this.local$funcompressedData.cloneToNewByteArray();
            this.local$tmp$_5 = this.local$it_0.bitmapFormat;
            if (Kotlin.equals(this.local$tmp$_5, BitmapFormat.BIT_8)) {
              this.local$ncolors = this.local$it_0.bitmapColorTableSize;
              this.local$s = new FastByteArrayInputStream(this.local$uncompressedData);
              if (this.local$it_0.hasAlpha) {
                this.local$$receiver_9 = until(0, this.local$ncolors);
                this.local$destination_3 = ArrayList_init(collectionSizeOrDefault(this.local$$receiver_9, 10));
                this.local$tmp$_30 = this.local$$receiver_9.iterator();
                while (this.local$tmp$_30.hasNext()) {
                  this.local$item_2 = this.local$tmp$_30.next();
                  this.local$destination_3.add_11rb$(this.local$s.readS32_le());
                }
                this.local$tmp$_6 = toIntArray(this.local$destination_3);
              }
               else {
                this.local$$receiver_10 = until(0, this.local$ncolors);
                this.local$destination_4 = ArrayList_init(collectionSizeOrDefault(this.local$$receiver_10, 10));
                this.local$tmp$_31 = this.local$$receiver_10.iterator();
                while (this.local$tmp$_31.hasNext()) {
                  this.local$item_3 = this.local$tmp$_31.next();
                  this.local$destination_4.add_11rb$(~16777215 | this.local$s.readU24_le());
                }
                this.local$tmp$_6 = toIntArray(this.local$destination_4);
              }
              this.local$clut = this.local$tmp$_6;
              this.local$pixels = this.local$s.readBytes_za3lpa$(Kotlin.imul(this.local$it_0.actualWidth, this.local$it_0.actualHeight));
              this.local$bmp = new Bitmap8(this.local$it_0.actualWidth, this.local$it_0.actualHeight, this.local$pixels, this.local$clut);
              this.local$fbmp = this.local$bmp;
            }
             else if (Kotlin.equals(this.local$tmp$_5, BitmapFormat.BIT_15))
              this.local$fbmp = new Bitmap32(this.local$it_0.actualWidth, this.local$it_0.actualHeight, color.BGRA_5551.decode_exhmhv$(this.local$uncompressedData));
            else if (Kotlin.equals(this.local$tmp$_5, BitmapFormat.BIT_24_32)) {
              this.local$components = this.local$uncompressedData.length / Kotlin.imul(this.local$it_0.bitmapWidth, this.local$it_0.bitmapHeight) | 0;
              this.local$colorFormat = color.BGRA;
              this.local$fbmp = new Bitmap32(this.local$it_0.bitmapWidth, this.local$it_0.bitmapHeight, this.local$colorFormat.decode_exhmhv$(this.local$uncompressedData, void 0, void 0, false));
              if (!this.local$it_0.hasAlpha) {
                this.local$tmp$_7 = this.local$fbmp.data.length;
                for (this.local$n = 0; this.local$n < this.local$tmp$_7; this.local$n++)
                  this.local$fbmp.data[this.local$n] = ~16777215 | this.local$fbmp.data[this.local$n] & 16777215;
              }
            }

            this.state_0 = 9;
            continue;
          case 9:
            this.state_0 = 15;
            continue;
          case 10:
            this.local$tmp$_4 = this.result_0;
            this.exceptionState_0 = 17;
            this.state_0 = 12;
            continue;
          case 11:
            this.exceptionState_0 = 17;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, Throwable)) {
              printStackTrace(this.local$e);
              this.local$tmp$_4 = new Bitmap32(1, 1);
            }
             else
              throw this.local$e;
            this.state_0 = 12;
            continue;
          case 12:
            this.local$nativeBitmap = this.local$tmp$_4;
            this.local$bmp_0 = this.local$nativeBitmap.toBMP32();
            this.local$fbmp = this.local$bmp_0;
            if (Kotlin.isType(this.local$it_0, TagDefineBitsJPEG3)) {
              this.local$fmaskinfo = this.local$it_0.bitmapAlphaData.cloneToNewFlashByteArray();
              this.state_0 = 13;
              this.result_0 = this.local$fmaskinfo.uncompressInWorker_61zpoe$('zlib', this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 14;
              continue;
            }

          case 13:
            this.local$maskinfo = this.local$fmaskinfo.cloneToNewByteArray();
            this.local$bmp_0.writeChannel_z3s5mf$(BitmapChannel.ALPHA, new Bitmap8(this.local$bmp_0.width, this.local$bmp_0.height, this.local$maskinfo));
            this.state_0 = 14;
            continue;
          case 14:
            this.state_0 = 15;
            continue;
          case 15:
            this.$this.registerBitmap_i0lgm1$(this.local$it_0.characterId, this.local$fbmp, null);
            this.state_0 = 16;
            continue;
          case 16:
            this.state_0 = 18;
            continue;
          case 17:
            throw this.exception_0;
          case 18:
            this.state_0 = 19;
            continue;
          case 19:
            this.state_0 = 20;
            continue;
          case 20:
            this.state_0 = 21;
            continue;
          case 21:
            this.state_0 = 22;
            continue;
          case 22:
            this.state_0 = 23;
            continue;
          case 23:
            this.state_0 = 24;
            continue;
          case 24:
            this.state_0 = 25;
            continue;
          case 25:
            this.state_0 = 26;
            continue;
          case 26:
            this.state_0 = 27;
            continue;
          case 27:
            this.state_0 = 28;
            continue;
          case 28:
            this.state_0 = 29;
            continue;
          case 29:
            this.state_0 = 30;
            continue;
          case 30:
            this.state_0 = 31;
            continue;
          case 31:
            this.state_0 = 32;
            continue;
          case 32:
            this.state_0 = 1;
            continue;
          case 33:
            return;
        }
      }
       catch (e) {
        if (this.state_0 === 17)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  SwfLoaderMethod.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SwfLoaderMethod',
    interfaces: []
  };
  function SwfPlugin() {
    SwfPlugin_instance = this;
    KorgePlugin.call(this);
  }
  function SwfPlugin$register$lambda$lambda($receiver_0, content_0, views_0, continuation_0, suspended) {
    var instance = new Coroutine$SwfPlugin$register$lambda$lambda($receiver_0, content_0, views_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$SwfPlugin$register$lambda$lambda($receiver_0, content_0, views_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
    this.local$views = views_0;
  }
  Coroutine$SwfPlugin$register$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwfPlugin$register$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwfPlugin$register$lambda$lambda.prototype.constructor = Coroutine$SwfPlugin$register$lambda$lambda;
  Coroutine$SwfPlugin$register$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readSWF_0(this.local$$receiver, this.local$views, this.local$content.ba, void 0, this);
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
  function SwfPlugin$register$lambda(s_0, injector_0, continuation_0, suspended) {
    var instance = new Coroutine$SwfPlugin$register$lambda(s_0, injector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$SwfPlugin$register$lambda(s_0, injector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$MAGIC = void 0;
    this.local$s = s_0;
    this.local$injector = injector_0;
  }
  Coroutine$SwfPlugin$register$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SwfPlugin$register$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SwfPlugin$register$lambda.prototype.constructor = Coroutine$SwfPlugin$register$lambda;
  Coroutine$SwfPlugin$register$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$MAGIC = this.local$s.readString_uyw3ma$(3);
            if (Kotlin.equals(this.local$MAGIC, 'FWS') || Kotlin.equals(this.local$MAGIC, 'CWS') || Kotlin.equals(this.local$MAGIC, 'ZWS'))
              return new KorgeFileLoader('swf', SwfPlugin$register$lambda$lambda);
            else
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
  SwfPlugin.prototype.register_gohfjx$ = function (views, continuation) {
    var $receiver = get_animateLibraryLoaders(views);
    var element = new KorgeFileLoaderTester('swf', SwfPlugin$register$lambda);
    $receiver.add_11rb$(element);
  };
  SwfPlugin.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SwfPlugin',
    interfaces: [KorgePlugin]
  };
  var SwfPlugin_instance = null;
  function SwfPlugin_getInstance() {
    if (SwfPlugin_instance === null) {
      new SwfPlugin();
    }
    return SwfPlugin_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korge = package$soywiz.korge || (package$soywiz.korge = {});
  var package$ext = package$korge.ext || (package$korge.ext = {});
  var package$swf = package$ext.swf || (package$ext.swf = {});
  package$swf.BitmapWithScale = BitmapWithScale;
  $$importsForInline$$['korma-js'] = $module$korma_js;
  package$swf.toAtlas_g1rcz0$ = toAtlas;
  package$swf.SWFShapeRasterizer = SWFShapeRasterizer;
  package$swf.toColorTransform_f33qu1$ = toColorTransform;
  package$swf.decodeSWFColor_5wr77w$ = decodeSWFColor;
  package$swf.SWFExportConfig = SWFExportConfig;
  package$swf.toAnLibrarySerializerConfig_shk0ru$ = toAnLibrarySerializerConfig;
  package$swf.readSWF_u3otb2$ = readSWF;
  $$importsForInline$$['korio-js'] = $module$korio_js;
  package$swf.get_swfExportConfig_h930be$ = get_swfExportConfig;
  package$swf.set_swfExportConfig_lb291p$ = set_swfExportConfig;
  package$swf.readSWF_2q2ks2$ = readSWF_0;
  package$swf.readSWF_exq168$ = readSWF_1;
  package$swf.get_depth0_hy38tf$ = get_depth0;
  package$swf.get_clipDepth0_hy38tf$ = get_clipDepth0;
  package$swf.get_depth0_383cd4$ = get_depth0_0;
  package$swf.get_bitmaps_jvsduk$ = get_bitmaps;
  Object.defineProperty(MySwfFrame$Action, 'Stop', {
    get: MySwfFrame$Action$Stop_getInstance
  });
  Object.defineProperty(MySwfFrame$Action, 'Play', {
    get: MySwfFrame$Action$Play_getInstance
  });
  MySwfFrame$Action.Goto = MySwfFrame$Action$Goto;
  MySwfFrame$Action.PlaySound = MySwfFrame$Action$PlaySound;
  MySwfFrame.Action = MySwfFrame$Action;
  package$swf.MySwfFrame = MySwfFrame;
  package$swf.MySwfTimeline = MySwfTimeline;
  package$swf.get_swfTimeline_lhqk9w$ = get_swfTimeline;
  package$swf.get_labelsToFrame0_lhqk9w$ = get_labelsToFrame0;
  package$swf.get_tagDefineMorphShape_8m292s$ = get_tagDefineMorphShape;
  package$swf.set_tagDefineMorphShape_mb38wb$ = set_tagDefineMorphShape;
  package$swf.get_tagDefineShape_dg24so$ = get_tagDefineShape;
  package$swf.set_tagDefineShape_e3dwnv$ = set_tagDefineShape;
  package$swf.MinMaxDouble = MinMaxDouble;
  package$swf.SymbolAnalyzeInfo = SymbolAnalyzeInfo;
  package$swf.SWFShapeRasterizerRequest = SWFShapeRasterizerRequest;
  $$importsForInline$$['korge-ext-swf-js'] = _;
  package$swf.SwfLoaderMethod = SwfLoaderMethod;
  Object.defineProperty(package$swf, 'SwfPlugin', {
    get: SwfPlugin_getInstance
  });
  swfExportConfig = new Extra$Property(void 0, swfExportConfig$lambda);
  bitmaps = new Extra$Property(void 0, bitmaps$lambda);
  swfTimeline = new Extra$Property(void 0, swfTimeline$lambda);
  labelsToFrame0 = new Extra$Property(void 0, labelsToFrame0$lambda);
  tagDefineMorphShape = new Extra$Property(void 0, tagDefineMorphShape$lambda);
  tagDefineShape = new Extra$Property(void 0, tagDefineShape$lambda);
  Kotlin.defineModule('korge-ext-swf-js', _);
  return _;
}(typeof this['korge-ext-swf-js'] === 'undefined' ? {} : this['korge-ext-swf-js'], kotlin, this['korio-js'], this['korma-js'], this['korim-js'], this['korge-js'], this['korfl-js']);
