(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'klogger-js', 'klock-js', 'korag-js', 'korinject-js', 'korui-js', 'korag-opengl-js', 'korio-js', 'korim-js', 'korma-js', 'kotlinx-coroutines-core', 'kds-js', 'kmem-js', 'korau-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('klogger-js'), require('klock-js'), require('korag-js'), require('korinject-js'), require('korui-js'), require('korag-opengl-js'), require('korio-js'), require('korim-js'), require('korma-js'), require('kotlinx-coroutines-core'), require('kds-js'), require('kmem-js'), require('korau-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korge-js'.");
    }
    if (typeof this['klogger-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'klogger-js' was not found. Please, check whether 'klogger-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['klock-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'klock-js' was not found. Please, check whether 'klock-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korag-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korag-js' was not found. Please, check whether 'korag-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korinject-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korinject-js' was not found. Please, check whether 'korinject-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korui-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korui-js' was not found. Please, check whether 'korui-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korag-opengl-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korag-opengl-js' was not found. Please, check whether 'korag-opengl-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korim-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korge-js'.");
    }
    if (typeof this['kds-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'kds-js' was not found. Please, check whether 'kds-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'korge-js'.");
    }
    if (typeof this['korau-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-js'. Its dependency 'korau-js' was not found. Please, check whether 'korau-js' is loaded prior to 'korge-js'.");
    }
    root['korge-js'] = factory(typeof this['korge-js'] === 'undefined' ? {} : this['korge-js'], kotlin, this['klogger-js'], this['klock-js'], this['korag-js'], this['korinject-js'], this['korui-js'], this['korag-opengl-js'], this['korio-js'], this['korim-js'], this['korma-js'], this['kotlinx-coroutines-core'], this['kds-js'], this['kmem-js'], this['korau-js']);
  }
}(this, function (_, Kotlin, $module$klogger_js, $module$klock_js, $module$korag_js, $module$korinject_js, $module$korui_js, $module$korag_opengl_js, $module$korio_js, $module$korim_js, $module$korma_js, $module$kotlinx_coroutines_core, $module$kds_js, $module$kmem_js, $module$korau_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var getKClass = Kotlin.getKClass;
  var TimeProvider = $module$klock_js.com.soywiz.klock.TimeProvider;
  var CoroutineContext = Kotlin.kotlin.coroutines.CoroutineContext;
  var AG = $module$korag_js.com.soywiz.korag.AG;
  var AsyncInjector = $module$korinject_js.com.soywiz.korinject.AsyncInjector;
  var Frame = $module$korui_js.com.soywiz.korui.ui.Frame;
  var Application = $module$korui_js.com.soywiz.korui.Application;
  var toList = Kotlin.kotlin.collections.toList_us0mfu$;
  var korag = $module$korag_opengl_js.com.soywiz.korag;
  var Unit = Kotlin.kotlin.Unit;
  var animationFrameLoop = $module$korio_js.com.soywiz.korio.async.animationFrameLoop_4os2gr$;
  var color = $module$korim_js.com.soywiz.korim.color;
  var MVector2 = $module$korma_js.com.soywiz.korma.MVector2;
  var klock = $module$klock_js.com.soywiz.klock;
  var equals = Kotlin.equals;
  var MouseEvent$Type = $module$korui_js.com.soywiz.korui.event.MouseEvent.Type;
  var MouseEvent = $module$korui_js.com.soywiz.korui.event.MouseEvent;
  var Key = $module$korui_js.com.soywiz.korui.input.Key;
  var KeyEvent = $module$korui_js.com.soywiz.korui.event.KeyEvent;
  var numberToInt = Kotlin.numberToInt;
  var MouseButton = $module$korui_js.com.soywiz.korui.input.MouseButton;
  var TouchEvent = $module$korui_js.com.soywiz.korui.event.TouchEvent;
  var GamePadButtonEvent = $module$korui_js.com.soywiz.korui.event.GamePadButtonEvent;
  var GamePadStickEvent = $module$korui_js.com.soywiz.korui.event.GamePadStickEvent;
  var GamePadConnectionEvent = $module$korui_js.com.soywiz.korui.event.GamePadConnectionEvent;
  var ResizedEvent = $module$korui_js.com.soywiz.korui.event.ResizedEvent;
  var event = $module$korui_js.com.soywiz.korui.event;
  var korui = $module$korui_js.com.soywiz.korui;
  var Korui = $module$korui_js.com.soywiz.korui.Korui_6as5xg$;
  var korio = $module$korio_js.com.soywiz.korio;
  var format = $module$korim_js.com.soywiz.korim.format;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var util = $module$korio_js.com.soywiz.korio.util;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var render = $module$korim_js.com.soywiz.korim.vector.render_hd3tpo$;
  var std = $module$korio_js.com.soywiz.korio.file.std;
  var readBitmapOptimized = $module$korim_js.com.soywiz.korim.format.readBitmapOptimized_2axf5n$;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var launchImmediately = $module$korio_js.com.soywiz.korio.async.launchImmediately_to1gs7$;
  var CanvasApplicationEx = $module$korui_js.com.soywiz.korui.CanvasApplicationEx_9hehyl$;
  var Logger = $module$klogger_js.com.soywiz.klogger.Logger;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var throwCCE = Kotlin.throwCCE;
  var toString = Kotlin.toString;
  var bitmap = $module$korim_js.com.soywiz.korim.bitmap;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Extra = $module$kds_js.com.soywiz.kds.Extra;
  var Extra$Property = $module$kds_js.com.soywiz.kds.Extra.Property;
  var async = $module$kotlinx_coroutines_core.kotlinx.coroutines.async_rwfjlp$;
  var Signal = $module$korio_js.com.soywiz.korio.async.Signal;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var Anchor = $module$korma_js.com.soywiz.korma.geom.Anchor;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_7wnvza$;
  var AG$StencilState = $module$korag_js.com.soywiz.korag.AG.StencilState;
  var AG$ColorMaskState = $module$korag_js.com.soywiz.korag.AG.ColorMaskState;
  var AG$CompareMode = $module$korag_js.com.soywiz.korag.AG.CompareMode;
  var AG$StencilOp = $module$korag_js.com.soywiz.korag.AG.StencilOp;
  var fill = $module$kmem_js.com.soywiz.kmem.fill_py0txo$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var get_indices = Kotlin.kotlin.collections.get_indices_l1lu5t$;
  var toSet = Kotlin.kotlin.collections.toSet_us0mfu$;
  var Once = $module$korio_js.com.soywiz.korio.util.Once;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var Matrix2d = $module$korma_js.com.soywiz.korma.Matrix2d;
  var Extra$Mixin = $module$kds_js.com.soywiz.kds.Extra.Mixin;
  var sound = $module$korau_js.com.soywiz.korau.sound;
  var AudioData = $module$korau_js.com.soywiz.korau.format.AudioData;
  var AsyncCacheItem = $module$korio_js.com.soywiz.korio.util.AsyncCacheItem;
  var interpolate = $module$korma_js.com.soywiz.korma.interpolation.interpolate_yvo9jy$;
  var ColorTransform = $module$korim_js.com.soywiz.korim.color.ColorTransform;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var firstOrNull_0 = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var binarySearch = $module$kds_js.com.soywiz.kds.binarySearch_s1glwf$;
  var clamp = $module$kmem_js.com.soywiz.kmem.clamp_e4yvb3$;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var IntArrayList = $module$kds_js.com.soywiz.kds.IntArrayList;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var FastByteArrayInputStream = $module$korio_js.com.soywiz.korio.stream.FastByteArrayInputStream;
  var readNativeSoundOptimized = $module$korau_js.com.soywiz.korau.sound.readNativeSoundOptimized_thwgyb$;
  var readAll = $module$korio_js.com.soywiz.korio.stream.readAll_ucmi9i$;
  var extract = $module$kmem_js.com.soywiz.kmem.extract_dqglrj$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var plus = Kotlin.kotlin.collections.plus_b32j0n$;
  var slice = $module$korim_js.com.soywiz.korim.bitmap.slice_umqjjl$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var IntArrayList_init = $module$kds_js.com.soywiz.kds.IntArrayList_init_pmhfmb$;
  var DoubleArrayList_init = $module$kds_js.com.soywiz.kds.DoubleArrayList_init_yqxtqz$;
  var VectorPath = $module$korma_js.com.soywiz.korma.geom.VectorPath;
  var Rectangle = $module$korma_js.com.soywiz.korma.geom.Rectangle;
  var Bitmap32 = $module$korim_js.com.soywiz.korim.bitmap.Bitmap32;
  var json = $module$korio_js.com.soywiz.korio.serialization.json;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var RectangleInt_init = $module$korma_js.com.soywiz.korma.geom.RectangleInt_init_tjonv8$;
  var ImageEncodingProps = $module$korim_js.com.soywiz.korim.format.ImageEncodingProps;
  var writeBitmap = $module$korim_js.com.soywiz.korim.format.writeBitmap_d6890c$;
  var writeS_VL = $module$korio_js.com.soywiz.korio.stream.writeS_VL_n5df9z$;
  var writeStringz = $module$korio_js.com.soywiz.korio.stream.writeStringz_5iah4l$;
  var writeU_VL = $module$korio_js.com.soywiz.korio.stream.writeU_VL_n5df9z$;
  var insert = $module$kmem_js.com.soywiz.kmem.insert_kvkj6u$;
  var drop = Kotlin.kotlin.collections.drop_8ujjk8$;
  var writeStringVL = $module$korio_js.com.soywiz.korio.stream.writeStringVL_61lhbb$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var filterNotNull = Kotlin.kotlin.collections.filterNotNull_m3lr2h$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var withIndex = Kotlin.kotlin.collections.withIndex_7wnvza$;
  var writeF32_le = $module$korio_js.com.soywiz.korio.stream.writeF32_le_dpexvo$;
  var write8 = $module$korio_js.com.soywiz.korio.stream.write8_n5df9z$;
  var write16_le = $module$korio_js.com.soywiz.korio.stream.write16_le_n5df9z$;
  var clamp_0 = $module$kmem_js.com.soywiz.kmem.clamp_nig4hr$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init;
  var sortedByDescending2 = $module$kds_js.com.soywiz.kds.sortedByDescending2_nd8ern$;
  var serialization = $module$korio_js.com.soywiz.korio.serialization;
  var String_0 = String;
  var Double = Number;
  var Boolean_0 = Boolean;
  var readBitmapSlice = $module$korim_js.com.soywiz.korim.format.readBitmapSlice_2axf5n$;
  var lang = $module$korio_js.com.soywiz.korio.lang;
  var readBitmap = $module$korim_js.com.soywiz.korim.format.readBitmap_vi5npc$;
  var sliceWithSize = $module$korim_js.com.soywiz.korim.bitmap.sliceWithSize_or9s9z$;
  var Rectangle_init = $module$korma_js.com.soywiz.korma.geom.Rectangle_init_tjonv8$;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var AsyncDependency = $module$korinject_js.com.soywiz.korinject.AsyncDependency;
  var get_lengthInSeconds = $module$korau_js.com.soywiz.korau.sound.get_lengthInSeconds_kbpa60$;
  var asyncImmediately = $module$korio_js.com.soywiz.korio.async.asyncImmediately_zctz99$;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var toShort = Kotlin.toShort;
  var BaseAudioStream = $module$korau_js.com.soywiz.korau.format.BaseAudioStream;
  var play = $module$korau_js.com.soywiz.korau.format.play_k45y5b$;
  var L0 = Kotlin.Long.ZERO;
  var Extra$PropertyThis = $module$kds_js.com.soywiz.kds.Extra.PropertyThis;
  var toBoxedChar = Kotlin.toBoxedChar;
  var get_indices_0 = Kotlin.kotlin.text.get_indices_gw00vp$;
  var font = $module$korim_js.com.soywiz.korim.font;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var Xml = $module$korio_js.com.soywiz.korio.serialization.xml.Xml_61zpoe$;
  var get_0 = $module$korio_js.com.soywiz.korio.serialization.xml.get_h00kq4$;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
  var lines = Kotlin.kotlin.text.lines_gw00vp$;
  var split = Kotlin.kotlin.text.split_o64adg$;
  var plus_0 = Kotlin.kotlin.collections.plus_mydzjv$;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_7epoxm$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var unquote = $module$korio_js.com.soywiz.korio.util.unquote_pdl1vz$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var substr = $module$korio_js.com.soywiz.korio.lang.substr_qgyqat$;
  var IntMap_init = $module$kds_js.com.soywiz.kds.IntMap_init_42wstk$;
  var Closeable = $module$korio_js.com.soywiz.korio.lang.Closeable;
  var InjectedHandler = $module$korinject_js.com.soywiz.korinject.InjectedHandler;
  var SuspendFunction1 = Function;
  var Closeable_0 = $module$korio_js.com.soywiz.korio.lang.Closeable_o14v8n$;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var Annotation = Kotlin.kotlin.Annotation;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_2p1efm$;
  var Computed = $module$kds_js.com.soywiz.kds.Computed;
  var Computed$WithParent = $module$kds_js.com.soywiz.kds.Computed.WithParent;
  var bounds = $module$korma_js.com.soywiz.korma.geom.bounds_kobt9m$;
  var get_isText = $module$korio_js.com.soywiz.korio.serialization.xml.get_isText_byavcz$;
  var get_isComment = $module$korio_js.com.soywiz.korio.serialization.xml.get_isComment_byavcz$;
  var get_isNode = $module$korio_js.com.soywiz.korio.serialization.xml.get_isNode_byavcz$;
  var Language = $module$korio_js.com.soywiz.korio.i18n.Language;
  var Touch = $module$korui_js.com.soywiz.korui.event.Touch;
  var extraProperty = $module$kds_js.com.soywiz.kds.extraProperty;
  var GamePadButtonEvent$Type = $module$korui_js.com.soywiz.korui.event.GamePadButtonEvent.Type;
  var GamePadConnectionEvent$Type = $module$korui_js.com.soywiz.korui.event.GamePadConnectionEvent.Type;
  var IPointInt = $module$korma_js.com.soywiz.korma.geom.IPointInt_vux9f0$;
  var arraycopy = $module$kmem_js.com.soywiz.kmem.arraycopy_3poh7i$;
  var GamepadInfo = $module$korui_js.com.soywiz.korui.input.GamepadInfo;
  var launchImmediately_0 = $module$korio_js.com.soywiz.korio.async.launchImmediately_vruxnc$;
  var AsyncSignal = $module$korio_js.com.soywiz.korio.async.AsyncSignal;
  var preventDefault = $module$korui_js.com.soywiz.korui.event.preventDefault_s8jyv4$;
  var RGBA = $module$korim_js.com.soywiz.korim.color.RGBA;
  var unboxChar = Kotlin.unboxChar;
  var Event = $module$korui_js.com.soywiz.korui.event.Event;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var readXml = $module$korio_js.com.soywiz.korio.serialization.xml.readXml_yirdke$;
  var AG$BlendFactor = $module$korag_js.com.soywiz.korag.AG.BlendFactor;
  var Angle = $module$korma_js.com.soywiz.korma.geom.Angle;
  var AG$AG$Blending_init = $module$korag_js.com.soywiz.korag.AG.Blending_init_6oerul$;
  var nextDouble = $module$korma_js.com.soywiz.korma.random.nextDouble_eyy2ov$;
  var Random = Kotlin.kotlin.random.Random;
  var Rand = $module$korma_js.com.soywiz.korma.random.Rand;
  var RGBAf = $module$korim_js.com.soywiz.korim.color.RGBAf;
  var minus = Kotlin.kotlin.collections.minus_khz7k3$;
  var toSet_0 = Kotlin.kotlin.collections.toSet_7wnvza$;
  var korag_0 = $module$korag_js.com.soywiz.korag;
  var FragmentShader = $module$korag_js.com.soywiz.korag.shader.FragmentShader_8zzl3$;
  var VarType = $module$korag_js.com.soywiz.korag.shader.VarType;
  var Attribute_init = $module$korag_js.com.soywiz.korag.shader.Attribute_init_do1xv$;
  var Varying = $module$korag_js.com.soywiz.korag.shader.Varying;
  var VertexLayout_init = $module$korag_js.com.soywiz.korag.shader.VertexLayout_init_f1u95s$;
  var VertexShader = $module$korag_js.com.soywiz.korag.shader.VertexShader_8zzl3$;
  var Program = $module$korag_js.com.soywiz.korag.shader.Program;
  var AG$DrawType = $module$korag_js.com.soywiz.korag.AG.DrawType;
  var KmlNativeBuffer = $module$kmem_js.com.soywiz.kmem.KmlNativeBuffer;
  var Matrix4 = $module$korma_js.com.soywiz.korma.Matrix4;
  var AG$TextureUnit = $module$korag_js.com.soywiz.korag.AG.TextureUnit;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var toBits = Kotlin.floatToBits;
  var get_isPowerOfTwo = $module$kmem_js.com.soywiz.kmem.get_isPowerOfTwo_s8ev3n$;
  var get_nextPowerOfTwo = $module$kmem_js.com.soywiz.kmem.get_nextPowerOfTwo_s8ev3n$;
  var use = $module$korio_js.com.soywiz.korio.lang.use_jgrjek$;
  var AG$Scissor = $module$korag_js.com.soywiz.korag.AG.Scissor;
  var Pool_init = $module$kds_js.com.soywiz.kds.Pool_init_rz0iom$;
  var AG$Blending = $module$korag_js.com.soywiz.korag.AG.Blending;
  var throwUPAE = Kotlin.throwUPAE;
  var MountableVfs = $module$korio_js.com.soywiz.korio.file.std.MountableVfs_r2gkaf$;
  var PathInfo = $module$korio_js.com.soywiz.korio.file.PathInfo;
  var get_extensionLC = $module$korio_js.com.soywiz.korio.file.get_extensionLC_hsf53c$;
  var fullPathWithExtension = $module$korio_js.com.soywiz.korio.file.fullPathWithExtension_cn9rna$;
  var AsyncOnce = $module$korio_js.com.soywiz.korio.util.AsyncOnce;
  var crypto = $module$korio_js.com.soywiz.korio.crypto;
  var SizeInt = $module$korma_js.com.soywiz.korma.geom.SizeInt;
  var LightQuality = $module$korui_js.com.soywiz.korui.light.LightQuality;
  var ScaleMode = $module$korma_js.com.soywiz.korma.geom.ScaleMode;
  var InjectorAsyncDependency = $module$korinject_js.com.soywiz.korinject.InjectorAsyncDependency;
  var CoroutineContextHolder = $module$korio_js.com.soywiz.korio.async.CoroutineContextHolder;
  var KClass = Kotlin.kotlin.reflect.KClass;
  var KeyNotFoundException = $module$korio_js.com.soywiz.korio.error.KeyNotFoundException;
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var delay = $module$kotlinx_coroutines_core.kotlinx.coroutines.delay_za3lpa$;
  var delayNextFrame = $module$korio_js.com.soywiz.korio.async.delayNextFrame;
  var L10 = Kotlin.Long.fromInt(10);
  var TimeUnit = $module$kotlinx_coroutines_core.kotlinx.coroutines.timeunit.TimeUnit;
  var withTimeout = $module$kotlinx_coroutines_core.kotlinx.coroutines.withTimeout_n7waqd$;
  var suspendTest = $module$korio_js.com.soywiz.korio.async.suspendTest_ykkwzu$;
  var async_0 = $module$korio_js.com.soywiz.korio.async;
  var EventDispatcher = $module$korui_js.com.soywiz.korui.event.EventDispatcher;
  var max = Kotlin.kotlin.collections.max_exjks8$;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var error = $module$korio_js.com.soywiz.korio.error;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var getCallableRef = Kotlin.getCallableRef;
  var deflate = $module$korio_js.com.soywiz.korio.compression.deflate;
  var uncompress = $module$korio_js.com.soywiz.korio.compression.uncompress_hxpw0q$;
  var readIntArray_le = $module$kmem_js.com.soywiz.kmem.readIntArray_le_ietg8x$;
  var RgbaArray = $module$korim_js.com.soywiz.korim.color.RgbaArray;
  var math = Kotlin.kotlin.math;
  var withTimeout_0 = $module$kotlinx_coroutines_core.kotlinx.coroutines.withTimeout_u6y7q0$;
  var interpolateAny = $module$korma_js.com.soywiz.korma.interpolation.interpolateAny_bb7w4c$;
  var LightComponents$LightComponentInfo = $module$korui_js.com.soywiz.korui.light.LightComponents.LightComponentInfo;
  var LightProperty = $module$korui_js.com.soywiz.korui.light.LightProperty;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var closeable = $module$korio_js.com.soywiz.korio.lang.closeable_n2ytw$;
  var LightComponents = $module$korui_js.com.soywiz.korui.light.LightComponents;
  var AsyncFactory = $module$korinject_js.com.soywiz.korinject.AsyncFactory;
  var cancellable = $module$korio_js.com.soywiz.korio.lang.cancellable_6257sj$;
  var cancel = $module$korio_js.com.soywiz.korio.lang.cancel_8d280p$;
  var Cancellable = $module$korio_js.com.soywiz.korio.lang.Cancellable;
  var AG$BlendEquation = $module$korag_js.com.soywiz.korag.AG.BlendEquation;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var BoundsBuilder = $module$korma_js.com.soywiz.korma.geom.BoundsBuilder;
  var get_niceStr = $module$kmem_js.com.soywiz.kmem.get_niceStr_yrwdxr$;
  var Context2d$Color = $module$korim_js.com.soywiz.korim.vector.Context2d.Color;
  var GraphicsPath = $module$korim_js.com.soywiz.korim.vector.GraphicsPath;
  var FillShape = $module$korim_js.com.soywiz.korim.vector.FillShape;
  var getBounds = $module$korim_js.com.soywiz.korim.vector.getBounds_infsew$;
  var NativeImage = $module$korim_js.com.soywiz.korim.bitmap.NativeImage_vux9f0$;
  var Uint16BufferAlloc = $module$kmem_js.com.soywiz.kmem.Uint16BufferAlloc_za3lpa$;
  var MVector2_init = $module$korma_js.com.soywiz.korma.MVector2_init_vux9f0$;
  var removeAll = Kotlin.kotlin.collections.removeAll_qafx1e$;
  var get_portableSimpleName = $module$korio_js.com.soywiz.korio.lang.get_portableSimpleName_1yb8b7$;
  var get_shex = $module$korio_js.com.soywiz.korio.crypto.get_shex_s8ev3n$;
  var toString_0 = $module$korio_js.com.soywiz.korio.util.toString_9rbwic$;
  var MustOverrideException = $module$korio_js.com.soywiz.korio.error.MustOverrideException;
  var EventDispatcher$Mixin = $module$korui_js.com.soywiz.korui.event.EventDispatcher.Mixin;
  var Matrix2d$Transform = $module$korma_js.com.soywiz.korma.Matrix2d.Transform;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var PreventDefaultException = $module$korui_js.com.soywiz.korui.event.PreventDefaultException;
  var LogAG = $module$korag_js.com.soywiz.korag.log.LogAG;
  var minus_0 = $module$korma_js.com.soywiz.korma.minus_fu3msx$;
  var MVector2Area = $module$korma_js.com.soywiz.korma.MVector2Area;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  var toIntCeil = $module$kmem_js.com.soywiz.kmem.toIntCeil_yrwdxr$;
  var putWithBorder = $module$korim_js.com.soywiz.korim.bitmap.putWithBorder_cxfkob$;
  AnBaseShape.prototype = Object.create(View.prototype);
  AnBaseShape.prototype.constructor = AnBaseShape;
  AnShape.prototype = Object.create(AnBaseShape.prototype);
  AnShape.prototype.constructor = AnShape;
  AnMorphShape.prototype = Object.create(AnBaseShape.prototype);
  AnMorphShape.prototype.constructor = AnMorphShape;
  DummyView.prototype = Object.create(View.prototype);
  DummyView.prototype.constructor = DummyView;
  AnEmptyView.prototype = Object.create(DummyView.prototype);
  AnEmptyView.prototype.constructor = AnEmptyView;
  Container.prototype = Object.create(View.prototype);
  Container.prototype.constructor = Container;
  AnTextField.prototype = Object.create(Container.prototype);
  AnTextField.prototype.constructor = AnTextField;
  AnSimpleAnimation.prototype = Object.create(Container.prototype);
  AnSimpleAnimation.prototype.constructor = AnSimpleAnimation;
  AnMovieClip.prototype = Object.create(Container.prototype);
  AnMovieClip.prototype.constructor = AnMovieClip;
  AnSymbolEmpty.prototype = Object.create(AnSymbol.prototype);
  AnSymbolEmpty.prototype.constructor = AnSymbolEmpty;
  AnSymbolSound.prototype = Object.create(AnSymbol.prototype);
  AnSymbolSound.prototype.constructor = AnSymbolSound;
  AnTextFieldSymbol.prototype = Object.create(AnSymbol.prototype);
  AnTextFieldSymbol.prototype.constructor = AnTextFieldSymbol;
  AnSymbolBaseShape.prototype = Object.create(AnSymbol.prototype);
  AnSymbolBaseShape.prototype.constructor = AnSymbolBaseShape;
  AnSymbolShape.prototype = Object.create(AnSymbolBaseShape.prototype);
  AnSymbolShape.prototype.constructor = AnSymbolShape;
  AnSymbolMorphShape.prototype = Object.create(AnSymbolBaseShape.prototype);
  AnSymbolMorphShape.prototype.constructor = AnSymbolMorphShape;
  AnSymbolBitmap.prototype = Object.create(AnSymbol.prototype);
  AnSymbolBitmap.prototype.constructor = AnSymbolBitmap;
  AnDepthTimeline.prototype = Object.create(Timed.prototype);
  AnDepthTimeline.prototype.constructor = AnDepthTimeline;
  AnSymbolMovieClip.prototype = Object.create(AnSymbol.prototype);
  AnSymbolMovieClip.prototype.constructor = AnSymbolMovieClip;
  MusicChannel.prototype = Object.create(SoundChannel.prototype);
  MusicChannel.prototype.constructor = MusicChannel;
  LipSyncEvent.prototype = Object.create(Event.prototype);
  LipSyncEvent.prototype.constructor = LipSyncEvent;
  ParticleEmitter$Type.prototype = Object.create(Enum.prototype);
  ParticleEmitter$Type.prototype.constructor = ParticleEmitter$Type;
  ParticleEmitterView.prototype = Object.create(View.prototype);
  ParticleEmitterView.prototype.constructor = ParticleEmitterView;
  ScaledScene.prototype = Object.create(Scene.prototype);
  ScaledScene.prototype.constructor = ScaledScene;
  EmptyScene.prototype = Object.create(Scene.prototype);
  EmptyScene.prototype.constructor = EmptyScene;
  LogScene.prototype = Object.create(Scene.prototype);
  LogScene.prototype.constructor = LogScene;
  SceneContainer.prototype = Object.create(Container.prototype);
  SceneContainer.prototype.constructor = SceneContainer;
  TransitionView.prototype = Object.create(Container.prototype);
  TransitionView.prototype.constructor = TransitionView;
  InmemoryStorage.prototype = Object.create(StorageBase.prototype);
  InmemoryStorage.prototype.constructor = InmemoryStorage;
  KorgeTest.prototype = Object.create(ViewsForTesting.prototype);
  KorgeTest.prototype.constructor = KorgeTest;
  ViewsForTesting$timeProvider$ObjectLiteral.prototype = Object.create(TimeProvider.prototype);
  ViewsForTesting$timeProvider$ObjectLiteral.prototype.constructor = ViewsForTesting$timeProvider$ObjectLiteral;
  TiledMap$Layer$Patterns.prototype = Object.create(TiledMap$Layer.prototype);
  TiledMap$Layer$Patterns.prototype.constructor = TiledMap$Layer$Patterns;
  TiledMap$Layer$Objects.prototype = Object.create(TiledMap$Layer.prototype);
  TiledMap$Layer$Objects.prototype.constructor = TiledMap$Layer$Objects;
  TiledMap$Layer$Image.prototype = Object.create(TiledMap$Layer.prototype);
  TiledMap$Layer$Image.prototype.constructor = TiledMap$Layer$Image;
  RKind.prototype = Object.create(Enum.prototype);
  RKind.prototype.constructor = RKind;
  TiledMapView.prototype = Object.create(Container.prototype);
  TiledMapView.prototype.constructor = TiledMapView;
  FixedSizeContainer.prototype = Object.create(Container.prototype);
  FixedSizeContainer.prototype.constructor = FixedSizeContainer;
  Widget.prototype = Object.create(FixedSizeContainer.prototype);
  Widget.prototype.constructor = Widget;
  Button.prototype = Object.create(Widget.prototype);
  Button.prototype.constructor = Button;
  KorgeLightComponents.prototype = Object.create(LightComponents.prototype);
  KorgeLightComponents.prototype.constructor = KorgeLightComponents;
  KoruiFrameView.prototype = Object.create(Widget.prototype);
  KoruiFrameView.prototype.constructor = KoruiFrameView;
  Label.prototype = Object.create(Widget.prototype);
  Label.prototype.constructor = Label;
  BlendMode.prototype = Object.create(Enum.prototype);
  BlendMode.prototype.constructor = BlendMode;
  Camera.prototype = Object.create(Container.prototype);
  Camera.prototype.constructor = Camera;
  RectBase.prototype = Object.create(Container.prototype);
  RectBase.prototype.constructor = RectBase;
  Image.prototype = Object.create(RectBase.prototype);
  Image.prototype.constructor = Image;
  Graphics.prototype = Object.create(Image.prototype);
  Graphics.prototype.constructor = Graphics;
  Mesh$DrawModes.prototype = Object.create(Enum.prototype);
  Mesh$DrawModes.prototype.constructor = Mesh$DrawModes;
  Mesh.prototype = Object.create(View.prototype);
  Mesh.prototype.constructor = Mesh;
  NinePatch.prototype = Object.create(View.prototype);
  NinePatch.prototype.constructor = NinePatch;
  NinePatchEx.prototype = Object.create(View.prototype);
  NinePatchEx.prototype.constructor = NinePatchEx;
  ScaleView.prototype = Object.create(FixedSizeContainer.prototype);
  ScaleView.prototype.constructor = ScaleView;
  SolidRect.prototype = Object.create(RectBase.prototype);
  SolidRect.prototype.constructor = SolidRect;
  Text.prototype = Object.create(View.prototype);
  Text.prototype.constructor = Text;
  View$HitTestType.prototype = Object.create(Enum.prototype);
  View$HitTestType.prototype.constructor = View$HitTestType;
  Stage.prototype = Object.create(Container.prototype);
  Stage.prototype.constructor = Stage;
  TileMap.prototype = Object.create(View.prototype);
  TileMap.prototype.constructor = TileMap;
  function Korge() {
    Korge_instance = this;
    this.logger = Logger.Companion.invoke_61zpoe$('Korge');
  }
  function Korge$setupCanvas$lambda($receiver, continuation_0, suspended) {
    var instance = new Coroutine$Korge$setupCanvas$lambda($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Korge$setupCanvas$lambda($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$Korge$setupCanvas$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$setupCanvas$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$setupCanvas$lambda.prototype.constructor = Coroutine$Korge$setupCanvas$lambda;
  Coroutine$Korge$setupCanvas$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Stats();
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
  function Korge$setupCanvas$lambda_0($receiver, continuation_0, suspended) {
    var instance = new Coroutine$Korge$setupCanvas$lambda_0($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Korge$setupCanvas$lambda_0($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$Korge$setupCanvas$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$setupCanvas$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$setupCanvas$lambda_0.prototype.constructor = Coroutine$Korge$setupCanvas$lambda_0;
  Coroutine$Korge$setupCanvas$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new Input();
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
  function Korge$setupCanvas$lambda_1($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$Korge$setupCanvas$lambda_1($receiver_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Korge$setupCanvas$lambda_1($receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$Korge$setupCanvas$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$setupCanvas$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$setupCanvas$lambda_1.prototype.constructor = Coroutine$Korge$setupCanvas$lambda_1;
  Coroutine$Korge$setupCanvas$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(CoroutineContext), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(AG), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0;
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(AsyncInjector), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.result_0;
            this.local$tmp$_1 = this.result_0;
            this.state_0 = 5;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(Input), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.result_0;
            this.local$tmp$_2 = this.result_0;
            this.state_0 = 6;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(TimeProvider), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.result_0;
            this.local$tmp$_3 = this.result_0;
            this.state_0 = 7;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(Stats), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.result_0;
            return new Views(this.local$tmp$, this.local$tmp$_0, this.local$tmp$_1, this.local$tmp$_2, this.local$tmp$_3, this.result_0);
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
  function Korge$setupCanvas$lambda_2($receiver, continuation_0, suspended) {
    var instance = new Coroutine$Korge$setupCanvas$lambda_2($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Korge$setupCanvas$lambda_2($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$Korge$setupCanvas$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$setupCanvas$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$setupCanvas$lambda_2.prototype.constructor = Coroutine$Korge$setupCanvas$lambda_2;
  Coroutine$Korge$setupCanvas$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new ResourcesRoot();
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
  function Korge$setupCanvas$lambda_3($receiver, continuation_0, suspended) {
    var instance = new Coroutine$Korge$setupCanvas$lambda_3($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$Korge$setupCanvas$lambda_3($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$Korge$setupCanvas$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$setupCanvas$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$setupCanvas$lambda_3.prototype.constructor = Coroutine$Korge$setupCanvas$lambda_3;
  Coroutine$Korge$setupCanvas$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new EmptyScene();
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
  function Korge$setupCanvas$lambda_4() {
    return korag.AGOpenglFactory.isTouchDevice;
  }
  var Logger$Level = $module$klogger_js.com.soywiz.klogger.Logger.Level;
  function Korge$setupCanvas$lambda_5(this$Korge_0, closure$config_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$Korge$setupCanvas$lambda_4(this$Korge_0, closure$config_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Korge$setupCanvas$lambda_4(this$Korge_0, closure$config_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Korge = this$Korge_0;
    this.local$closure$config = closure$config_0;
  }
  Coroutine$Korge$setupCanvas$lambda_4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$setupCanvas$lambda_4.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$setupCanvas$lambda_4.prototype.constructor = Coroutine$Korge$setupCanvas$lambda_4;
  Coroutine$Korge$setupCanvas$lambda_4.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$Korge.logger;
            var level = Logger$Level.TRACE;
            if ($this.isEnabled_fs4ikx$(level)) {
              $this.actualLog_pwm3k3$(level, 'views.animationFrameLoop');
            }

            return this.local$closure$config.container.repaint(), Unit;
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
  var IllegalStateException_init_0 = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var copyToArray = Kotlin.kotlin.collections.copyToArray;
  var TimeSpan = $module$klock_js.com.soywiz.klock.TimeSpan;
  var numberToDouble = Kotlin.numberToDouble;
  Korge.prototype.setupCanvas_dnucxw$ = function (config_0, continuation_0, suspended) {
    var instance = new Coroutine$setupCanvas_dnucxw$(this, config_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$setupCanvas_dnucxw$($this, config_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$injector = void 0;
    this.local$eventDispatcher = void 0;
    this.local$ag = void 0;
    this.local$size = void 0;
    this.local$views = void 0;
    this.local$sc = void 0;
    this.local$config = config_0;
  }
  Coroutine$setupCanvas_dnucxw$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$setupCanvas_dnucxw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$setupCanvas_dnucxw$.prototype.constructor = Coroutine$setupCanvas_dnucxw$;
  Coroutine$setupCanvas_dnucxw$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var $this = this.$this.logger;
            var level = Logger$Level.TRACE;
            if ($this.isEnabled_fs4ikx$(level)) {
              $this.actualLog_pwm3k3$(level, 'Korge.setupCanvas[1]');
            }

            this.local$injector = this.local$config.injector;
            var frame = this.local$config.frame;
            this.local$eventDispatcher = this.local$config.eventDispatcher;
            var tmp$_0;
            if ((tmp$ = this.local$config.container) != null)
              tmp$_0 = tmp$;
            else {
              throw IllegalStateException_init_0('No agContainer defined'.toString());
            }

            var agContainer = tmp$_0;
            this.local$ag = agContainer.ag;
            this.local$size = this.local$config.module.size;
            var moduleArgs = new Korge$ModuleArgs(this.local$config.args);
            var $this_0 = this.$this.logger;
            var level_0 = Logger$Level.TRACE;
            if ($this_0.isEnabled_fs4ikx$(level_0)) {
              $this_0.actualLog_pwm3k3$(level_0, 'pre injector');
            }

            this.local$injector.mapInstance_b1ce0a$(getKClass(Korge$ModuleArgs), moduleArgs).mapInstance_b1ce0a$(getKClass(TimeProvider), this.local$config.timeProvider).mapInstance_b1ce0a$(getKClass(CoroutineContext), this.local$config.context).mapInstance_b1ce0a$(getKClass(Module), this.local$config.module).mapInstance_b1ce0a$(getKClass(AG), this.local$ag).mapInstance_b1ce0a$(getKClass(Korge$Config), this.local$config).mapSingleton_siz2e9$(getKClass(Stats), Korge$setupCanvas$lambda).mapSingleton_siz2e9$(getKClass(Input), Korge$setupCanvas$lambda_0).mapSingleton_siz2e9$(getKClass(Views), Korge$setupCanvas$lambda_1).mapSingleton_siz2e9$(getKClass(ResourcesRoot), Korge$setupCanvas$lambda_2).mapPrototype_siz2e9$(getKClass(EmptyScene), Korge$setupCanvas$lambda_3);
            if (this.local$config.frame != null) {
              this.local$injector.mapInstance_b1ce0a$(getKClass(Frame), this.local$config.frame);
              this.local$injector.mapInstance_b1ce0a$(getKClass(Application), this.local$config.frame.app);
            }

            this.state_0 = 2;
            this.result_0 = this.local$ag.onReady.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $this_1 = this.$this.logger;
            var level_1 = Logger$Level.TRACE;
            if ($this_1.isEnabled_fs4ikx$(level_1)) {
              $this_1.actualLog_pwm3k3$(level_1, 'Korge.setupCanvas[1c]. ag: ' + this.local$ag);
            }

            var $this_2 = this.$this.logger;
            var level_2 = Logger$Level.TRACE;
            if ($this_2.isEnabled_fs4ikx$(level_2)) {
              $this_2.actualLog_pwm3k3$(level_2, 'Korge.setupCanvas[1d]. debug: ' + this.local$config.debug);
            }

            var $this_3 = this.$this.logger;
            var level_3 = Logger$Level.TRACE;
            if ($this_3.isEnabled_fs4ikx$(level_3)) {
              $this_3.actualLog_pwm3k3$(level_3, 'Korge.setupCanvas[1e]. args: ' + toList(this.local$config.args));
            }

            var $this_4 = this.$this.logger;
            var level_4 = Logger$Level.TRACE;
            if ($this_4.isEnabled_fs4ikx$(level_4)) {
              $this_4.actualLog_pwm3k3$(level_4, 'Korge.setupCanvas[1f]. size: ' + this.local$size);
            }

            var $this_5 = this.$this.logger;
            var level_5 = Logger$Level.TRACE;
            if ($this_5.isEnabled_fs4ikx$(level_5)) {
              $this_5.actualLog_pwm3k3$(level_5, 'Korge.setupCanvas[1g]');
            }

            this.state_0 = 3;
            this.result_0 = this.local$injector.get_wx4qjr$(getKClass(Views), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$views = this.result_0;
            var $this_6 = this.$this.logger;
            var level_6 = Logger$Level.TRACE;
            if ($this_6.isEnabled_fs4ikx$(level_6)) {
              $this_6.actualLog_pwm3k3$(level_6, 'Korge.setupCanvas[1h]');
            }

            var input = this.local$views.input;
            var $this_7 = this.$this.logger;
            var level_7 = Logger$Level.TRACE;
            if ($this_7.isEnabled_fs4ikx$(level_7)) {
              $this_7.actualLog_pwm3k3$(level_7, 'Korge.setupCanvas[1i]');
            }

            input._isTouchDeviceGen = Korge$setupCanvas$lambda_4;
            var $this_8 = this.$this.logger;
            var level_8 = Logger$Level.TRACE;
            if ($this_8.isEnabled_fs4ikx$(level_8)) {
              $this_8.actualLog_pwm3k3$(level_8, 'Korge.setupCanvas[1j]');
            }

            this.local$views.debugViews = this.local$config.debug;
            var $this_9 = this.$this.logger;
            var level_9 = Logger$Level.TRACE;
            if ($this_9.isEnabled_fs4ikx$(level_9)) {
              $this_9.actualLog_pwm3k3$(level_9, 'Korge.setupCanvas[1k]');
            }

            this.local$config.constructedViews(this.local$views);
            var $this_10 = this.$this.logger;
            var level_10 = Logger$Level.TRACE;
            if ($this_10.isEnabled_fs4ikx$(level_10)) {
              $this_10.actualLog_pwm3k3$(level_10, 'Korge.setupCanvas[1l]');
            }

            var $this_11 = this.$this.logger;
            var level_11 = Logger$Level.TRACE;
            if ($this_11.isEnabled_fs4ikx$(level_11)) {
              $this_11.actualLog_pwm3k3$(level_11, 'Korge.setupCanvas[2]');
            }

            this.local$views.virtualWidth = this.local$size.width;
            this.local$views.virtualHeight = this.local$size.height;
            this.local$views.scaleAnchor = this.local$config.module.scaleAnchor;
            this.local$views.scaleMode = this.local$config.module.scaleMode;
            this.local$views.clipBorders = this.local$config.module.clipBorders;
            var $this_12 = this.$this.logger;
            var level_12 = Logger$Level.TRACE;
            if ($this_12.isEnabled_fs4ikx$(level_12)) {
              $this_12.actualLog_pwm3k3$(level_12, 'Korge.setupCanvas[3]');
            }

            var $this_13 = this.$this.logger;
            var level_13 = Logger$Level.TRACE;
            if ($this_13.isEnabled_fs4ikx$(level_13)) {
              $this_13.actualLog_pwm3k3$(level_13, 'Korge.setupCanvas[4]');
            }

            this.state_0 = 4;
            this.result_0 = this.local$config.module.init_y6n311$(this.local$injector, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var $this_14 = this.$this.logger;
            var level_14 = Logger$Level.TRACE;
            if ($this_14.isEnabled_fs4ikx$(level_14)) {
              $this_14.actualLog_pwm3k3$(level_14, 'Korge.setupCanvas[5]');
            }

            this.$this.prepareViews_sqwktf$(this.local$views, this.local$eventDispatcher, this.local$config.module.clearEachFrame, this.local$config.module.bgcolor);
            var $this_15 = this.$this.logger;
            var level_15 = Logger$Level.TRACE;
            if ($this_15.isEnabled_fs4ikx$(level_15)) {
              $this_15.actualLog_pwm3k3$(level_15, 'Korge.setupCanvas[7]');
            }

            this.local$views.targetFps = this.local$config.module.targetFps;
            animationFrameLoop(this.context, Korge$setupCanvas$lambda_5(this.$this, this.local$config));
            this.local$sc = new SceneContainer(this.local$views);
            this.local$views.stage.plusAssign_l5rad2$(this.local$sc);
            register(this.$this, this.local$views);
            this.state_0 = 5;
            this.result_0 = this.local$sc.changeTo_oszfv1$(this.local$config.sceneClass, copyToArray(this.local$config.sceneInjects).slice(), TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0)), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var $this_16 = this.$this.logger;
            var level_16 = Logger$Level.TRACE;
            if ($this_16.isEnabled_fs4ikx$(level_16)) {
              $this_16.actualLog_pwm3k3$(level_16, 'Korge.setupCanvas[8]');
            }

            return this.local$sc;
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
  function Korge$prepareViews$pixelRatio(closure$ag) {
    return function () {
      return closure$ag.devicePixelRatio;
    };
  }
  function Korge$prepareViews$getRealX(closure$pixelRatio) {
    return function (x, scaleCoords) {
      return scaleCoords ? x * closure$pixelRatio() : x;
    };
  }
  function Korge$prepareViews$getRealY(closure$pixelRatio) {
    return function (y, scaleCoords) {
      return scaleCoords ? y * closure$pixelRatio() : y;
    };
  }
  function Korge$prepareViews$updateTouch(closure$input) {
    return function (id, x, y, start, end) {
      var touch = closure$input.getTouch_za3lpa$(id);
      var now = klock.Klock.currentTimeMillisDouble();
      touch.id = id;
      touch.active = !end;
      if (start) {
        touch.startTime = now;
        touch.start.setTo_lu1900$(x, y);
      }
      touch.currentTime = now;
      touch.current.setTo_lu1900$(x, y);
      closure$input.updateTouches();
    };
  }
  function Korge$prepareViews$mouseDown(closure$views, closure$downPos, closure$downTime) {
    return function (type, x, y) {
      closure$views.input.mouseButtons = 1;
      closure$views.input.mouse.setTo_lu1900$(x, y);
      closure$views.mouseUpdated();
      closure$downPos.copyFrom_r62tv1$(closure$views.input.mouse);
      closure$downTime.v = klock.Klock.currentTimeMillisDouble();
    };
  }
  function Korge$prepareViews$mouseUp(closure$views, closure$upPos, closure$upTime, closure$downTime) {
    return function (type, x, y) {
      closure$views.input.mouseButtons = 0;
      closure$views.input.mouse.setTo_lu1900$(x, y);
      closure$views.mouseUpdated();
      closure$upPos.copyFrom_r62tv1$(closure$views.input.mouse);
      if (equals(type, 'onTouchEnd')) {
        closure$upTime.v = klock.Klock.currentTimeMillisDouble();
        if (closure$downTime.v - closure$upTime.v <= 40.0) {
          var $receiver = closure$views;
          var event = new MouseEvent(MouseEvent$Type.CLICK);
          $receiver.dispatch_dt5jzj$(getKClass(MouseEvent), event);
        }
      }
    };
  }
  function Korge$prepareViews$mouseDrag(closure$views, closure$moveTime) {
    return function (type, x, y) {
      closure$views.input.mouse.setTo_lu1900$(x, y);
      closure$views.mouseUpdated();
      closure$moveTime.v = klock.Klock.currentTimeMillisDouble();
    };
  }
  function Korge$prepareViews$mouseMove(closure$views, closure$moveTime) {
    return function (type, x, y) {
      closure$views.input.mouse.setTo_lu1900$(x, y);
      closure$views.mouseUpdated();
      closure$moveTime.v = klock.Klock.currentTimeMillisDouble();
    };
  }
  function Korge$prepareViews$lambda(this$Korge, closure$getRealX, closure$getRealY, closure$mouseDown, closure$mouseTouchId, closure$updateTouch, closure$mouseUp, closure$mouseDrag, closure$mouseMove, closure$views) {
    return function (e) {
      var $this = this$Korge.logger;
      var level = Logger$Level.TRACE;
      if ($this.isEnabled_fs4ikx$(level)) {
        $this.actualLog_pwm3k3$(level, 'eventDispatcher.addEventListener<MouseEvent>:' + e);
      }
      var x = closure$getRealX(e.x, e.scaleCoords);
      var y = closure$getRealY(e.y, e.scaleCoords);
      switch (e.type.name) {
        case 'DOWN':
          closure$mouseDown('mouseDown', x, y);
          closure$updateTouch(closure$mouseTouchId, x, y, true, false);
          break;
        case 'UP':
          closure$mouseUp('mouseUp', x, y);
          closure$updateTouch(closure$mouseTouchId, x, y, false, true);
          break;
        case 'MOVE':
          closure$mouseDrag('mouseMove', x, y);
          break;
        case 'DRAG':
          closure$mouseMove('onMouseDrag', x, y);
          closure$updateTouch(closure$mouseTouchId, x, y, false, false);
          break;
        case 'CLICK':
          break;
        case 'ENTER':
          break;
        case 'EXIT':
          break;
      }
      closure$views.dispatch_dt5jzj$(getKClass(MouseEvent), e);
      return Unit;
    };
  }
  function Korge$prepareViews$lambda_0(this$Korge, closure$views) {
    return function (e) {
      var $this = this$Korge.logger;
      var level = Logger$Level.TRACE;
      if ($this.isEnabled_fs4ikx$(level)) {
        $this.actualLog_pwm3k3$(level, 'eventDispatcher.addEventListener<KeyEvent>:' + e);
      }
      switch (e.type.name) {
        case 'DOWN':
          closure$views.input.setKey_fzusl$(e.keyCode, true);
          break;
        case 'UP':
          closure$views.input.setKey_fzusl$(e.keyCode, false);
          if (e.key === Key.F12) {
            closure$views.debugViews = !closure$views.debugViews;
          }

          break;
        case 'TYPE':
          break;
      }
      closure$views.dispatch_dt5jzj$(getKClass(KeyEvent), e);
      return Unit;
    };
  }
  function Korge$prepareViews$touch(closure$updateTouch, closure$mouseDown, closure$mouseUp, closure$moveMouseOutsideInNextFrame, closure$mouseDrag) {
    return function (e, start, end) {
      var t = e.touch;
      var x = t.current.x;
      var y = t.current.y;
      closure$updateTouch(t.id, x, y, start, end);
      if (start)
        closure$mouseDown('onTouchStart', x, y);
      else if (end) {
        closure$mouseUp('onTouchEnd', x, y);
        closure$moveMouseOutsideInNextFrame.v = true;
      }
       else {
        closure$mouseDrag('onTouchMove', x, y);
      }
    };
  }
  function Korge$prepareViews$lambda_1(this$Korge, closure$getRealX, closure$touch, closure$views) {
    return function (e) {
      var $this = this$Korge.logger;
      var level = Logger$Level.TRACE;
      if ($this.isEnabled_fs4ikx$(level)) {
        $this.actualLog_pwm3k3$(level, 'eventDispatcher.addEventListener<TouchEvent>:' + e);
      }
      var ix = numberToInt(closure$getRealX(e.touch.current.x, e.scaleCoords));
      var iy = numberToInt(closure$getRealX(e.touch.current.y, e.scaleCoords));
      switch (e.type.name) {
        case 'START':
          closure$touch(e, true, false);
          var $receiver = closure$views;
          var event = new MouseEvent(MouseEvent$Type.DOWN, 0, ix, iy, MouseButton.LEFT, 1);
          $receiver.dispatch_dt5jzj$(getKClass(MouseEvent), event);
          break;
        case 'MOVE':
          closure$touch(e, false, false);
          var $receiver_0 = closure$views;
          var event_0 = new MouseEvent(MouseEvent$Type.DRAG, 0, ix, iy, MouseButton.LEFT, 1);
          $receiver_0.dispatch_dt5jzj$(getKClass(MouseEvent), event_0);
          break;
        case 'END':
          closure$touch(e, false, true);
          var $receiver_1 = closure$views;
          var event_1 = new MouseEvent(MouseEvent$Type.UP, 0, ix, iy, MouseButton.LEFT, 0);
          $receiver_1.dispatch_dt5jzj$(getKClass(MouseEvent), event_1);
          break;
      }
      closure$views.dispatch_dt5jzj$(getKClass(TouchEvent), e);
      return Unit;
    };
  }
  function Korge$prepareViews$gamepadUpdated(closure$input) {
    return function (gamepad) {
      closure$input.gamepads[gamepad.index].copyFrom_42hpqv$(gamepad);
      closure$input.updateConnectedGamepads();
    };
  }
  function Korge$prepareViews$lambda_2(this$Korge) {
    return function (e) {
      var $this = this$Korge.logger;
      var level = Logger$Level.TRACE;
      if ($this.isEnabled_fs4ikx$(level)) {
        $this.actualLog_pwm3k3$(level, 'eventDispatcher.addEventListener<GamePadButtonEvent>:' + e);
      }
      return Unit;
    };
  }
  function Korge$prepareViews$lambda_3(this$Korge) {
    return function (e) {
      var $this = this$Korge.logger;
      var level = Logger$Level.TRACE;
      if ($this.isEnabled_fs4ikx$(level)) {
        $this.actualLog_pwm3k3$(level, 'eventDispatcher.addEventListener<GamePadStickEvent>:' + e);
      }
      return Unit;
    };
  }
  function Korge$prepareViews$lambda_4(this$Korge) {
    return function (e) {
      var $this = this$Korge.logger;
      var level = Logger$Level.TRACE;
      if ($this.isEnabled_fs4ikx$(level)) {
        $this.actualLog_pwm3k3$(level, 'eventDispatcher.addEventListener<GamePadConnectionEvent>:' + e);
      }
      return Unit;
    };
  }
  function Korge$prepareViews$lambda_5(closure$views, closure$ag) {
    return function (e) {
      closure$views.resized_vux9f0$(closure$ag.backWidth, closure$ag.backHeight);
      return Unit;
    };
  }
  function Korge$prepareViews$lambda_6(closure$views, closure$ag) {
    return function (e) {
      closure$views.resized_vux9f0$(closure$ag.backWidth, closure$ag.backHeight);
      return Unit;
    };
  }
  function Korge$prepareViews$lambda_7(closure$views, closure$clearEachFrame, closure$bgcolor, closure$fixedSizeStep, closure$moveMouseOutsideInNextFrame) {
    return function (it) {
      closure$views.frameUpdateAndRender_c18wb3$(closure$clearEachFrame && closure$views.clearEachFrame, closure$bgcolor, closure$fixedSizeStep);
      if (closure$moveMouseOutsideInNextFrame.v) {
        closure$moveMouseOutsideInNextFrame.v = false;
        closure$views.input.mouse.setTo_lu1900$(numberToDouble(-1000), numberToDouble(-1000));
        closure$views.mouseUpdated();
      }
      return Unit;
    };
  }
  Korge.prototype.prepareViews_sqwktf$ = function (views, eventDispatcher, clearEachFrame, bgcolor, fixedSizeStep) {
    if (clearEachFrame === void 0)
      clearEachFrame = true;
    if (bgcolor === void 0)
      bgcolor = color.Colors.TRANSPARENT_BLACK;
    if (fixedSizeStep === void 0)
      fixedSizeStep = null;
    var input = views.input;
    var ag = views.ag;
    var downPos = new MVector2();
    var upPos = new MVector2();
    var downTime = {v: 0.0};
    var moveTime = {v: 0.0};
    var upTime = {v: 0.0};
    var moveMouseOutsideInNextFrame = {v: false};
    var mouseTouchId = -1;
    var pixelRatio = Korge$prepareViews$pixelRatio(ag);
    var getRealX = Korge$prepareViews$getRealX(pixelRatio);
    var getRealY = Korge$prepareViews$getRealY(pixelRatio);
    var updateTouch = Korge$prepareViews$updateTouch(input);
    var mouseDown = Korge$prepareViews$mouseDown(views, downPos, downTime);
    var mouseUp = Korge$prepareViews$mouseUp(views, upPos, upTime, downTime);
    var mouseDrag = Korge$prepareViews$mouseDrag(views, moveTime);
    var mouseMove = Korge$prepareViews$mouseMove(views, moveTime);
    eventDispatcher.addEventListener_htgam$(getKClass(MouseEvent), Korge$prepareViews$lambda(this, getRealX, getRealY, mouseDown, mouseTouchId, updateTouch, mouseUp, mouseDrag, mouseMove, views));
    eventDispatcher.addEventListener_htgam$(getKClass(KeyEvent), Korge$prepareViews$lambda_0(this, views));
    var touch = Korge$prepareViews$touch(updateTouch, mouseDown, mouseUp, moveMouseOutsideInNextFrame, mouseDrag);
    eventDispatcher.addEventListener_htgam$(getKClass(TouchEvent), Korge$prepareViews$lambda_1(this, getRealX, touch, views));
    var gamepadUpdated = Korge$prepareViews$gamepadUpdated(input);
    eventDispatcher.addEventListener_htgam$(getKClass(GamePadButtonEvent), Korge$prepareViews$lambda_2(this));
    eventDispatcher.addEventListener_htgam$(getKClass(GamePadStickEvent), Korge$prepareViews$lambda_3(this));
    eventDispatcher.addEventListener_htgam$(getKClass(GamePadConnectionEvent), Korge$prepareViews$lambda_4(this));
    eventDispatcher.addEventListener_htgam$(getKClass(ResizedEvent), Korge$prepareViews$lambda_5(views, ag));
    ag.onResized.invoke_qlkmfe$(Korge$prepareViews$lambda_6(views, ag));
    ag.resized();
    var event = new ResizedEvent(100, 100);
    eventDispatcher.dispatch_dt5jzj$(getKClass(ResizedEvent), event);
    ag.onRender.invoke_qlkmfe$(Korge$prepareViews$lambda_7(views, clearEachFrame, bgcolor, fixedSizeStep, moveMouseOutsideInNextFrame));
  };
  function Korge$invoke$lambda(it) {
    return Unit;
  }
  function Korge$invoke$lambda_0(this$Korge_0, closure$module_0, closure$args_0, closure$container_0, closure$eventDispatcher_0, closure$sceneClass_0, closure$sceneInjects_0, closure$injector_0, closure$timeProvider_0, closure$debug_0, closure$trace_0, closure$constructedViews_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Korge$invoke$lambda(this$Korge_0, closure$module_0, closure$args_0, closure$container_0, closure$eventDispatcher_0, closure$sceneClass_0, closure$sceneInjects_0, closure$injector_0, closure$timeProvider_0, closure$debug_0, closure$trace_0, closure$constructedViews_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Korge$invoke$lambda(this$Korge_0, closure$module_0, closure$args_0, closure$container_0, closure$eventDispatcher_0, closure$sceneClass_0, closure$sceneInjects_0, closure$injector_0, closure$timeProvider_0, closure$debug_0, closure$trace_0, closure$constructedViews_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Korge = this$Korge_0;
    this.local$closure$module = closure$module_0;
    this.local$closure$args = closure$args_0;
    this.local$closure$container = closure$container_0;
    this.local$closure$eventDispatcher = closure$eventDispatcher_0;
    this.local$closure$sceneClass = closure$sceneClass_0;
    this.local$closure$sceneInjects = closure$sceneInjects_0;
    this.local$closure$injector = closure$injector_0;
    this.local$closure$timeProvider = closure$timeProvider_0;
    this.local$closure$debug = closure$debug_0;
    this.local$closure$trace = closure$trace_0;
    this.local$closure$constructedViews = closure$constructedViews_0;
  }
  Coroutine$Korge$invoke$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$invoke$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$invoke$lambda.prototype.constructor = Coroutine$Korge$invoke$lambda;
  Coroutine$Korge$invoke$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$Korge.logger;
            var level = Logger$Level.TRACE;
            if ($this.isEnabled_fs4ikx$(level)) {
              $this.actualLog_pwm3k3$(level, 'Korge.invoke');
            }

            this.state_0 = 2;
            this.result_0 = this.local$this$Korge.test_dnucxw$(new Korge$Config(this.local$closure$module, this.local$closure$args, this.local$closure$container, this.local$closure$eventDispatcher, void 0, void 0, this.local$closure$sceneClass, this.local$closure$sceneInjects, this.local$closure$timeProvider, this.local$closure$injector, this.local$closure$debug, this.local$closure$trace, this.local$closure$constructedViews), this);
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
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  Korge.prototype.invoke_bkwmix$ = function (module_0, args, container, eventDispatcher, sceneClass, sceneInjects, timeProvider, injector, debug, trace, constructedViews, context) {
    if (args === void 0)
      args = [];
    if (container === void 0)
      container = null;
    if (eventDispatcher === void 0)
      eventDispatcher = event.DummyEventDispatcher;
    if (sceneClass === void 0)
      sceneClass = module_0.mainScene;
    if (sceneInjects === void 0) {
      sceneInjects = emptyList();
    }
    if (timeProvider === void 0)
      timeProvider = new TimeProvider();
    if (injector === void 0)
      injector = new AsyncInjector();
    if (debug === void 0)
      debug = false;
    if (trace === void 0)
      trace = false;
    if (constructedViews === void 0)
      constructedViews = Korge$invoke$lambda;
    if (context === void 0)
      context = korui.KoruiDispatcher;
    Korui(context, Korge$invoke$lambda_0(this, module_0, args, container, eventDispatcher, sceneClass, sceneInjects, injector, timeProvider, debug, trace, constructedViews));
  };
  function Korge$invoke$lambda_1(this$Korge_0, closure$config_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Korge$invoke$lambda_0(this$Korge_0, closure$config_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Korge$invoke$lambda_0(this$Korge_0, closure$config_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Korge = this$Korge_0;
    this.local$closure$config = closure$config_0;
  }
  Coroutine$Korge$invoke$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$invoke$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$invoke$lambda_0.prototype.constructor = Coroutine$Korge$invoke$lambda_0;
  Coroutine$Korge$invoke$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$Korge.logger;
            var level = Logger$Level.TRACE;
            if ($this.isEnabled_fs4ikx$(level)) {
              $this.actualLog_pwm3k3$(level, 'Korge.invoke(config)');
            }

            this.state_0 = 2;
            this.result_0 = this.local$this$Korge.test_dnucxw$(this.local$closure$config, this);
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
  Korge.prototype.invoke_dnucxw$ = function (config) {
    return korio.KorioNative.asyncEntryPoint_ykkwzu$(config.context, Korge$invoke$lambda_1(this, config));
  };
  function Korge$Config(module_0, args, container, eventDispatcher, imageFormats, frame, sceneClass, sceneInjects, timeProvider, injector, debug, trace, constructedViews, context) {
    if (args === void 0)
      args = [];
    if (container === void 0)
      container = null;
    if (eventDispatcher === void 0)
      eventDispatcher = event.DummyEventDispatcher;
    if (imageFormats === void 0)
      imageFormats = format.defaultImageFormats;
    if (frame === void 0)
      frame = null;
    if (sceneClass === void 0)
      sceneClass = module_0.mainScene;
    if (sceneInjects === void 0) {
      sceneInjects = emptyList();
    }
    if (timeProvider === void 0)
      timeProvider = new TimeProvider();
    if (injector === void 0)
      injector = new AsyncInjector();
    if (debug === void 0)
      debug = false;
    if (trace === void 0)
      trace = false;
    if (constructedViews === void 0)
      constructedViews = Korge$Korge$Config_init$lambda;
    if (context === void 0)
      context = korui.KoruiDispatcher;
    this.module = module_0;
    this.args = args;
    this.container = container;
    this.eventDispatcher = eventDispatcher;
    this.imageFormats = imageFormats;
    this.frame = frame;
    this.sceneClass = sceneClass;
    this.sceneInjects = sceneInjects;
    this.timeProvider = timeProvider;
    this.injector = injector;
    this.debug = debug;
    this.trace = trace;
    this.constructedViews = constructedViews;
    this.context = context;
  }
  function Korge$Korge$Config_init$lambda(it) {
    return Unit;
  }
  Korge$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  Korge$Config.prototype.component1 = function () {
    return this.module;
  };
  Korge$Config.prototype.component2 = function () {
    return this.args;
  };
  Korge$Config.prototype.component3 = function () {
    return this.container;
  };
  Korge$Config.prototype.component4 = function () {
    return this.eventDispatcher;
  };
  Korge$Config.prototype.component5 = function () {
    return this.imageFormats;
  };
  Korge$Config.prototype.component6 = function () {
    return this.frame;
  };
  Korge$Config.prototype.component7 = function () {
    return this.sceneClass;
  };
  Korge$Config.prototype.component8 = function () {
    return this.sceneInjects;
  };
  Korge$Config.prototype.component9 = function () {
    return this.timeProvider;
  };
  Korge$Config.prototype.component10 = function () {
    return this.injector;
  };
  Korge$Config.prototype.component11 = function () {
    return this.debug;
  };
  Korge$Config.prototype.component12 = function () {
    return this.trace;
  };
  Korge$Config.prototype.component13 = function () {
    return this.constructedViews;
  };
  Korge$Config.prototype.component14 = function () {
    return this.context;
  };
  Korge$Config.prototype.copy_79k9w5$ = function (module_0, args, container, eventDispatcher, imageFormats, frame, sceneClass, sceneInjects, timeProvider, injector, debug, trace, constructedViews, context) {
    return new Korge$Config(module_0 === void 0 ? this.module : module_0, args === void 0 ? this.args : args, container === void 0 ? this.container : container, eventDispatcher === void 0 ? this.eventDispatcher : eventDispatcher, imageFormats === void 0 ? this.imageFormats : imageFormats, frame === void 0 ? this.frame : frame, sceneClass === void 0 ? this.sceneClass : sceneClass, sceneInjects === void 0 ? this.sceneInjects : sceneInjects, timeProvider === void 0 ? this.timeProvider : timeProvider, injector === void 0 ? this.injector : injector, debug === void 0 ? this.debug : debug, trace === void 0 ? this.trace : trace, constructedViews === void 0 ? this.constructedViews : constructedViews, context === void 0 ? this.context : context);
  };
  Korge$Config.prototype.toString = function () {
    return 'Config(module=' + Kotlin.toString(this.module) + (', args=' + Kotlin.toString(this.args)) + (', container=' + Kotlin.toString(this.container)) + (', eventDispatcher=' + Kotlin.toString(this.eventDispatcher)) + (', imageFormats=' + Kotlin.toString(this.imageFormats)) + (', frame=' + Kotlin.toString(this.frame)) + (', sceneClass=' + Kotlin.toString(this.sceneClass)) + (', sceneInjects=' + Kotlin.toString(this.sceneInjects)) + (', timeProvider=' + Kotlin.toString(this.timeProvider)) + (', injector=' + Kotlin.toString(this.injector)) + (', debug=' + Kotlin.toString(this.debug)) + (', trace=' + Kotlin.toString(this.trace)) + (', constructedViews=' + Kotlin.toString(this.constructedViews)) + (', context=' + Kotlin.toString(this.context)) + ')';
  };
  Korge$Config.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.module) | 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    result = result * 31 + Kotlin.hashCode(this.container) | 0;
    result = result * 31 + Kotlin.hashCode(this.eventDispatcher) | 0;
    result = result * 31 + Kotlin.hashCode(this.imageFormats) | 0;
    result = result * 31 + Kotlin.hashCode(this.frame) | 0;
    result = result * 31 + Kotlin.hashCode(this.sceneClass) | 0;
    result = result * 31 + Kotlin.hashCode(this.sceneInjects) | 0;
    result = result * 31 + Kotlin.hashCode(this.timeProvider) | 0;
    result = result * 31 + Kotlin.hashCode(this.injector) | 0;
    result = result * 31 + Kotlin.hashCode(this.debug) | 0;
    result = result * 31 + Kotlin.hashCode(this.trace) | 0;
    result = result * 31 + Kotlin.hashCode(this.constructedViews) | 0;
    result = result * 31 + Kotlin.hashCode(this.context) | 0;
    return result;
  };
  Korge$Config.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.module, other.module) && Kotlin.equals(this.args, other.args) && Kotlin.equals(this.container, other.container) && Kotlin.equals(this.eventDispatcher, other.eventDispatcher) && Kotlin.equals(this.imageFormats, other.imageFormats) && Kotlin.equals(this.frame, other.frame) && Kotlin.equals(this.sceneClass, other.sceneClass) && Kotlin.equals(this.sceneInjects, other.sceneInjects) && Kotlin.equals(this.timeProvider, other.timeProvider) && Kotlin.equals(this.injector, other.injector) && Kotlin.equals(this.debug, other.debug) && Kotlin.equals(this.trace, other.trace) && Kotlin.equals(this.constructedViews, other.constructedViews) && Kotlin.equals(this.context, other.context)))));
  };
  function Korge$test$lambda$lambda(this$Korge_0, closure$done_0, closure$config_0, closure$container_0, closure$frame_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Korge$test$lambda$lambda(this$Korge_0, closure$done_0, closure$config_0, closure$container_0, closure$frame_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Korge$test$lambda$lambda(this$Korge_0, closure$done_0, closure$config_0, closure$container_0, closure$frame_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Korge = this$Korge_0;
    this.local$closure$done = closure$done_0;
    this.local$closure$config = closure$config_0;
    this.local$closure$container = closure$container_0;
    this.local$closure$frame = closure$frame_0;
  }
  Coroutine$Korge$test$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$test$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$test$lambda$lambda.prototype.constructor = Coroutine$Korge$test$lambda$lambda;
  Coroutine$Korge$test$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$Korge.logger;
            var level = Logger$Level.TRACE;
            if ($this.isEnabled_fs4ikx$(level)) {
              $this.actualLog_pwm3k3$(level, 'Korge.test [2]');
            }

            this.state_0 = 2;
            this.result_0 = this.local$this$Korge.setupCanvas_dnucxw$(this.local$closure$config.copy_79k9w5$(void 0, void 0, this.local$closure$container, this.local$closure$container, void 0, this.local$closure$frame), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$closure$done.complete_11rb$(this.result_0);
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
  function Korge$test$lambda(this$Korge_0, closure$done_0, closure$config_0) {
    return function (container_0, frame_0, continuation_0, suspended) {
      var instance = new Coroutine$Korge$test$lambda(this$Korge_0, closure$done_0, closure$config_0, container_0, frame_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Korge$test$lambda(this$Korge_0, closure$done_0, closure$config_0, container_0, frame_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Korge = this$Korge_0;
    this.local$closure$done = closure$done_0;
    this.local$closure$config = closure$config_0;
    this.local$container = container_0;
    this.local$frame = frame_0;
  }
  Coroutine$Korge$test$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Korge$test$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Korge$test$lambda.prototype.constructor = Coroutine$Korge$test$lambda;
  Coroutine$Korge$test$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $this = this.local$this$Korge.logger;
            var level = Logger$Level.TRACE;
            if ($this.isEnabled_fs4ikx$(level)) {
              $this.actualLog_pwm3k3$(level, 'Korge.test [1]');
            }

            this.state_0 = 2;
            this.result_0 = launchImmediately(void 0, Korge$test$lambda$lambda(this.local$this$Korge, this.local$closure$done, this.local$closure$config, this.local$container, this.local$frame), this);
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
  Korge.prototype.test_dnucxw$ = function (config_0, continuation_0, suspended) {
    var instance = new Coroutine$test_dnucxw$(this, config_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$test_dnucxw$($this, config_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$done = void 0;
    this.local$module = void 0;
    this.local$config = config_0;
  }
  Coroutine$test_dnucxw$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$test_dnucxw$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$test_dnucxw$.prototype.constructor = Coroutine$test_dnucxw$;
  Coroutine$test_dnucxw$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (util.OS.isJvm) {
              var $this = this.$this.logger;
              var level = Logger$Level.TRACE;
              if ($this.isEnabled_fs4ikx$(level)) {
                $this.actualLog_pwm3k3$(level, "!!!! KORGE: if the main window doesn't appear and hangs, check that the VM option -XstartOnFirstThread is set");
              }
            }

            var $this_0 = this.$this.logger;
            var level_0 = Logger$Level.TRACE;
            if ($this_0.isEnabled_fs4ikx$(level_0)) {
              $this_0.actualLog_pwm3k3$(level_0, 'Korge.test');
            }

            var $this_1 = this.$this.logger;
            var level_1 = Logger$Level.TRACE;
            if ($this_1.isEnabled_fs4ikx$(level_1)) {
              $this_1.actualLog_pwm3k3$(level_1, 'Korge.test.checkEnvironment');
            }

            this.local$done = CompletableDeferred(Job());
            var $this_2 = this.$this.logger;
            var level_2 = Logger$Level.TRACE;
            if ($this_2.isEnabled_fs4ikx$(level_2)) {
              $this_2.actualLog_pwm3k3$(level_2, 'Korge.test without container');
            }

            this.local$module = this.local$config.module;
            var $this_3 = this.$this.logger;
            var level_3 = Logger$Level.TRACE;
            if ($this_3.isEnabled_fs4ikx$(level_3)) {
              $this_3.actualLog_pwm3k3$(level_3, 'Korge.test loading icon');
            }

            this.exceptionState_0 = 4;
            if (this.local$module.iconImage != null) {
              this.local$tmp$ = render(ensureNotNull(this.local$module.iconImage));
              this.state_0 = 3;
              continue;
            }
             else {
              if (this.local$module.icon != null) {
                this.state_0 = 1;
                this.result_0 = readBitmapOptimized(std.ResourcesVfs.get_61zpoe$(ensureNotNull(this.local$module.icon)), this.local$config.imageFormats, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.local$tmp$ = null;
                this.state_0 = 2;
                continue;
              }
            }

          case 1:
            this.local$tmp$ = this.result_0;
            this.state_0 = 2;
            continue;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.exceptionState_0 = 8;
            this.state_0 = 5;
            continue;
          case 4:
            this.exceptionState_0 = 8;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              var $this_4 = this.$this.logger;
              var level_4 = Logger$Level.ERROR;
              if ($this_4.isEnabled_fs4ikx$(level_4)) {
                $this_4.actualLog_pwm3k3$(level_4, "Couldn't get the application icon");
              }
              printStackTrace(e);
              this.local$tmp$ = null;
            }
             else
              throw e;
            this.state_0 = 5;
            continue;
          case 5:
            var icon = this.local$tmp$;
            var $this_5 = this.$this.logger;
            var level_5 = Logger$Level.TRACE;
            if ($this_5.isEnabled_fs4ikx$(level_5)) {
              $this_5.actualLog_pwm3k3$(level_5, 'Korge.test pre CanvasApplicationEx');
            }

            this.state_0 = 6;
            this.result_0 = CanvasApplicationEx(this.local$module.title, this.local$module.windowSize.width, this.local$module.windowSize.height, icon, void 0, this.local$module.quality, Korge$test$lambda(this.$this, this.local$done, this.local$config), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = this.local$done.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            return this.result_0;
          case 8:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 8) {
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
  function Korge$ModuleArgs(args) {
    this.args = args;
  }
  Korge$ModuleArgs.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ModuleArgs',
    interfaces: []
  };
  Korge$ModuleArgs.prototype.component1 = function () {
    return this.args;
  };
  Korge$ModuleArgs.prototype.copy_kand9s$ = function (args) {
    return new Korge$ModuleArgs(args === void 0 ? this.args : args);
  };
  Korge$ModuleArgs.prototype.toString = function () {
    return 'ModuleArgs(args=' + Kotlin.toString(this.args) + ')';
  };
  Korge$ModuleArgs.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.args) | 0;
    return result;
  };
  Korge$ModuleArgs.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.args, other.args))));
  };
  Korge.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korge',
    interfaces: []
  };
  var Korge_instance = null;
  function Korge_getInstance() {
    if (Korge_instance === null) {
      new Korge();
    }
    return Korge_instance;
  }
  function AnElement() {
  }
  AnElement.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnElement',
    interfaces: []
  };
  function createDuplicated($receiver) {
    return $receiver.symbol.create_k19av$($receiver.library);
  }
  function createDuplicatedView($receiver) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.symbol.create_k19av$($receiver.library), View) ? tmp$ : throwCCE();
  }
  function AnBaseShape(library, symbol) {
    View.call(this);
    this.library_fl1jbj$_0 = library;
    this.symbol_jmf2xa$_0 = symbol;
    this.ninePatch = null;
    this.posCuts = [new MVector2(0.0, 0.0), new MVector2(0.25, 0.25), new MVector2(0.75, 0.75), new MVector2(1.0, 1.0)];
    this.texCuts = [new MVector2(0.0, 0.0), new MVector2(0.25, 0.25), new MVector2(0.75, 0.75), new MVector2(1.0, 1.0)];
  }
  Object.defineProperty(AnBaseShape.prototype, 'library', {
    get: function () {
      return this.library_fl1jbj$_0;
    }
  });
  Object.defineProperty(AnBaseShape.prototype, 'symbol', {
    get: function () {
      return this.symbol_jmf2xa$_0;
    }
  });
  AnBaseShape.prototype.render_8isv09$ = function (ctx) {
    if (!this.visible)
      return;
    if (this.ninePatch != null) {
      var np = ensureNotNull(this.ninePatch);
      var lm = ensureNotNull(this.parent).localMatrix;
      var npLeft = np.left - this.dx;
      var npTop = np.top - this.dy;
      var npRight = np.right - this.dx;
      var npBottom = np.bottom - this.dy;
      var ascaleX = lm.a;
      var ascaleY = lm.d;
      this.posCuts[1].setTo_lu1900$(npLeft / this.texWidth / ascaleX, npTop / this.texHeight / ascaleY);
      this.posCuts[2].setTo_lu1900$(1.0 - (this.texWidth - npRight) / this.texWidth / ascaleX, 1.0 - (this.texHeight - npBottom) / this.texHeight / ascaleY);
      this.texCuts[1].setTo_lu1900$(npLeft / this.texWidth, npTop / this.texHeight);
      this.texCuts[2].setTo_lu1900$(npRight / this.texWidth, npBottom / this.texWidth);
      ctx.batch.drawNinePatch_o0jtal$(ctx.getTex_9byvhi$(this.tex), this.dx, this.dy, this.texWidth, this.texHeight, this.posCuts, this.texCuts, this.renderMatrix, this.smoothing, this.globalColorMul, this.globalColorAdd, this.computedBlendMode.factors);
    }
     else {
      ctx.batch.drawQuad_bjriwo$(ctx.getTex_9byvhi$(this.tex), this.dx, this.dy, this.texWidth, this.texHeight, this.renderMatrix, this.smoothing, this.globalColorMul, this.globalColorAdd, this.computedBlendMode.factors);
    }
  };
  AnBaseShape.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var tmp$, tmp$_0;
    var sLeft = this.dx;
    var sTop = this.dy;
    var sRight = sLeft + this.texWidth;
    var sBottom = sTop + this.texHeight;
    return this.checkGlobalBounds_15yvbs$(x, y, sLeft, sTop, sRight, sBottom) && ((tmp$_0 = (tmp$ = this.symbol.path) != null ? tmp$.containsPoint_lu1900$(this.globalToLocalX_lu1900$(x, y), this.globalToLocalY_lu1900$(x, y)) : null) != null ? tmp$_0 : true) ? this : null;
  };
  AnBaseShape.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    var x = this.dx;
    var y = this.dy;
    var width = this.texWidth;
    var height = this.texHeight;
    out.setTo_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
  };
  AnBaseShape.prototype.toString = function () {
    return View.prototype.toString.call(this) + ':symbol=' + toString(this.symbol);
  };
  AnBaseShape.prototype.createInstance = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.symbol.create_k19av$(this.library), View) ? tmp$ : throwCCE();
  };
  AnBaseShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnBaseShape',
    interfaces: [AnElement, View]
  };
  function AnShape(library, shapeSymbol) {
    AnBaseShape.call(this, library, shapeSymbol);
    this.shapeSymbol = shapeSymbol;
    this.dx_759g6x$_0 = this.shapeSymbol.bounds.x;
    this.dy_759g62$_0 = this.shapeSymbol.bounds.y;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.tex_8fiwsu$_0 = (tmp$_0 = (tmp$ = this.shapeSymbol.textureWithBitmap) != null ? tmp$.texture : null) != null ? tmp$_0 : bitmap.Bitmaps.transparent;
    this.texScale_lpomjc$_0 = (tmp$_2 = (tmp$_1 = this.shapeSymbol.textureWithBitmap) != null ? tmp$_1.scale : null) != null ? tmp$_2 : 1.0;
    this.texWidth_np7yn0$_0 = this.tex.width / this.texScale;
    this.texHeight_figemj$_0 = this.tex.height / this.texScale;
    this.smoothing_spgvph$_0 = true;
  }
  Object.defineProperty(AnShape.prototype, 'dx', {
    get: function () {
      return this.dx_759g6x$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'dy', {
    get: function () {
      return this.dy_759g62$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'tex', {
    get: function () {
      return this.tex_8fiwsu$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'texScale', {
    get: function () {
      return this.texScale_lpomjc$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'texWidth', {
    get: function () {
      return this.texWidth_np7yn0$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'texHeight', {
    get: function () {
      return this.texHeight_figemj$_0;
    }
  });
  Object.defineProperty(AnShape.prototype, 'smoothing', {
    get: function () {
      return this.smoothing_spgvph$_0;
    }
  });
  AnShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnShape',
    interfaces: [AnBaseShape, AnElement]
  };
  function AnMorphShape(library, morphSymbol) {
    AnBaseShape.call(this, library, morphSymbol);
    this.morphSymbol = morphSymbol;
    this.timedResult_0 = new Timed$Result();
    this.texWBS = null;
    this.dx_fp5e2l$_0 = 0.0;
    this.dy_fp5e1q$_0 = 0.0;
    this.tex_akf4ty$_0 = bitmap.Bitmaps.transparent;
    this.texScale_2bj60c$_0 = 1.0;
    this.texWidth_bztwo$_0 = 0.0;
    this.texHeight_j84mk1$_0 = 0.0;
    this.smoothing_6145h3$_0 = true;
    this.ratio_3bfsoe$_0 = 0.0;
    this.updatedRatio_0();
  }
  Object.defineProperty(AnMorphShape.prototype, 'dx', {
    get: function () {
      return this.dx_fp5e2l$_0;
    },
    set: function (dx) {
      this.dx_fp5e2l$_0 = dx;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'dy', {
    get: function () {
      return this.dy_fp5e1q$_0;
    },
    set: function (dy) {
      this.dy_fp5e1q$_0 = dy;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'tex', {
    get: function () {
      return this.tex_akf4ty$_0;
    },
    set: function (tex) {
      this.tex_akf4ty$_0 = tex;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'texScale', {
    get: function () {
      return this.texScale_2bj60c$_0;
    },
    set: function (texScale) {
      this.texScale_2bj60c$_0 = texScale;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'texWidth', {
    get: function () {
      return this.texWidth_bztwo$_0;
    },
    set: function (texWidth) {
      this.texWidth_bztwo$_0 = texWidth;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'texHeight', {
    get: function () {
      return this.texHeight_j84mk1$_0;
    },
    set: function (texHeight) {
      this.texHeight_j84mk1$_0 = texHeight;
    }
  });
  Object.defineProperty(AnMorphShape.prototype, 'smoothing', {
    get: function () {
      return this.smoothing_6145h3$_0;
    },
    set: function (smoothing) {
      this.smoothing_6145h3$_0 = smoothing;
    }
  });
  AnMorphShape.prototype.updatedRatio_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    var result = this.morphSymbol.texturesWithBitmap.find_xgt0ho$(numberToInt(this.ratio * 1000), this.timedResult_0);
    this.texWBS = (tmp$ = result.left) != null ? tmp$ : result.right;
    this.dx = (tmp$_3 = (tmp$_2 = (tmp$_1 = (tmp$_0 = this.texWBS) != null ? tmp$_0.bounds : null) != null ? tmp$_1.x : null) != null ? tmp$_2 : null) != null ? tmp$_3 : 0.0;
    this.dy = (tmp$_7 = (tmp$_6 = (tmp$_5 = (tmp$_4 = this.texWBS) != null ? tmp$_4.bounds : null) != null ? tmp$_5.y : null) != null ? tmp$_6 : null) != null ? tmp$_7 : 0.0;
    this.tex = (tmp$_9 = (tmp$_8 = this.texWBS) != null ? tmp$_8.texture : null) != null ? tmp$_9 : bitmap.Bitmaps.transparent;
    this.texScale = (tmp$_11 = (tmp$_10 = this.texWBS) != null ? tmp$_10.scale : null) != null ? tmp$_11 : 1.0;
    this.texWidth = this.tex.width / this.texScale;
    this.texHeight = this.tex.height / this.texScale;
    this.smoothing = true;
  };
  Object.defineProperty(AnMorphShape.prototype, 'ratio', {
    get: function () {
      return this.ratio_3bfsoe$_0;
    },
    set: function (value) {
      this.ratio_3bfsoe$_0 = value;
      this.updatedRatio_0();
    }
  });
  AnMorphShape.prototype.createInstance = function () {
    return new AnMorphShape(this.library, this.morphSymbol);
  };
  AnMorphShape.prototype.copyPropsFrom_l5rad2$ = function (source) {
    var tmp$;
    var src = Kotlin.isType(tmp$ = source, AnMorphShape) ? tmp$ : throwCCE();
    this.dx = src.dx;
    this.dy = src.dy;
    this.tex = src.tex;
    this.texScale = src.texScale;
    this.texWidth = src.texWidth;
    this.texHeight = src.texHeight;
    this.smoothing = src.smoothing;
  };
  AnMorphShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnMorphShape',
    interfaces: [AnBaseShape, AnElement]
  };
  function AnEmptyView(library, symbol) {
    if (symbol === void 0)
      symbol = AnSymbolEmpty_getInstance();
    DummyView.call(this);
    this.library_l7aqcz$_0 = library;
    this.symbol_9cp9vw$_0 = symbol;
  }
  Object.defineProperty(AnEmptyView.prototype, 'library', {
    get: function () {
      return this.library_l7aqcz$_0;
    }
  });
  Object.defineProperty(AnEmptyView.prototype, 'symbol', {
    get: function () {
      return this.symbol_9cp9vw$_0;
    }
  });
  AnEmptyView.prototype.createInstance = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.symbol.create_k19av$(this.library), View) ? tmp$ : throwCCE();
  };
  AnEmptyView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnEmptyView',
    interfaces: [AnElement, DummyView]
  };
  var RedirectMutableField_init = $module$korio_js.com.soywiz.korio.util.RedirectMutableField;
  function AnTextField(library, symbol) {
    Container.call(this);
    this.library_jepa2a$_0 = library;
    this.symbol_h7ho29$_0 = symbol;
    var $receiver = Text$Companion_getInstance().invoke_fnvenn$('', 16.0);
    $receiver.textBounds.copyFrom_2da8yn$(this.symbol.bounds);
    $receiver.html = this.symbol.initialHtml;
    $receiver.relayout();
    this.textField_0 = $receiver;
    this.plusAssign_l5rad2$(this.textField_0);
    this.format_f6ank$_0 = new RedirectMutableField_init(getPropertyCallableRef('format', 0, function ($receiver) {
      return $receiver.format;
    }.bind(null, this.textField_0), function ($receiver, value) {
      $receiver.format = value;
    }.bind(null, this.textField_0)));
    this.text_ry9arq$_0 = new RedirectMutableField_init(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this.textField_0), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this.textField_0)));
    this.html_s4lhfo$_0 = new RedirectMutableField_init(getPropertyCallableRef('html', 0, function ($receiver) {
      return $receiver.html;
    }.bind(null, this.textField_0), function ($receiver, value) {
      $receiver.html = value;
    }.bind(null, this.textField_0)));
  }
  Object.defineProperty(AnTextField.prototype, 'library', {
    get: function () {
      return this.library_jepa2a$_0;
    }
  });
  Object.defineProperty(AnTextField.prototype, 'symbol', {
    get: function () {
      return this.symbol_h7ho29$_0;
    }
  });
  Object.defineProperty(AnTextField.prototype, 'format', {
    get: function () {
      return this.format_f6ank$_0.redirect.get();
    },
    set: function (format) {
      this.format_f6ank$_0.redirect.set(format);
    }
  });
  Object.defineProperty(AnTextField.prototype, 'text', {
    get: function () {
      return this.text_ry9arq$_0.redirect.get();
    },
    set: function (text) {
      this.text_ry9arq$_0.redirect.set(text);
    }
  });
  Object.defineProperty(AnTextField.prototype, 'html', {
    get: function () {
      return this.html_s4lhfo$_0.redirect.get();
    },
    set: function (html) {
      this.html_s4lhfo$_0.redirect.set(html);
    }
  });
  AnTextField.prototype.createInstance = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.symbol.create_k19av$(this.library), View) ? tmp$ : throwCCE();
  };
  AnTextField.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnTextField',
    interfaces: [IHtml, IText, AnElement, Container]
  };
  function stencilIndex$lambda() {
    return 0;
  }
  var stencilIndex;
  var stencilIndex_metadata = new PropertyMetadata('stencilIndex');
  var Any = Object;
  var setExtra = $module$kds_js.com.soywiz.kds.setExtra_46skc7$;
  function get_stencilIndex($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = stencilIndex.name) != null ? tmp$ : stencilIndex_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = stencilIndex.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = stencilIndex.name) != null ? tmp$_3 : stencilIndex_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_stencilIndex($receiver, stencilIndex_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = stencilIndex.name) != null ? tmp$ : stencilIndex_metadata.callableName, (tmp$_0 = stencilIndex_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function TimelineRunner(view, symbol) {
    this.view = view;
    this.symbol = symbol;
    this.library = this.view.library;
    this.views = this.library.views;
    this.currentTime = 0;
    this.currentStateName = null;
    this.currentSubtimeline = null;
    this.onStop = new Signal();
    this.onChangeState = new Signal();
    this.onEvent = new Signal();
    this.running_c9mhrn$_0 = true;
    this.gotoAndPlay_bm4lxs$('default');
    this.tempRangeResult_0 = new Timed$RangeResult();
  }
  Object.defineProperty(TimelineRunner.prototype, 'currentStateTotalTime', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.currentSubtimeline) != null ? tmp$.totalTime : null) != null ? tmp$_0 : 0;
    }
  });
  Object.defineProperty(TimelineRunner.prototype, 'running', {
    get: function () {
      return this.running_c9mhrn$_0;
    },
    set: function (value) {
      this.running_c9mhrn$_0 = value;
      if (!value) {
        this.onStop.invoke_11rb$(Unit);
      }
    }
  });
  TimelineRunner.prototype.getStateTime_61zpoe$ = function (name) {
    var tmp$;
    tmp$ = this.symbol.states.get_11rb$(name);
    if (tmp$ == null) {
      return 0;
    }
    var substate = tmp$;
    return substate.subTimeline.totalTime - substate.startTime | 0;
  };
  TimelineRunner.prototype.gotoAndRunning_xvbo1r$ = function (running, name, time) {
    if (time === void 0)
      time = 0;
    var substate = this.symbol.states.get_11rb$(name);
    if (substate != null) {
      this.currentStateName = substate.name;
      this.currentSubtimeline = substate.subTimeline;
      this.currentTime = substate.startTime + time | 0;
      this.running = running;
      this.update_za3lpa$(0);
      this.onChangeState.invoke_11rb$(name);
    }
  };
  TimelineRunner.prototype.gotoAndPlay_bm4lxs$ = function (name, time) {
    if (time === void 0)
      time = 0;
    this.gotoAndRunning_xvbo1r$(true, name, time);
  };
  TimelineRunner.prototype.gotoAndStop_bm4lxs$ = function (name, time) {
    if (time === void 0)
      time = 0;
    this.gotoAndRunning_xvbo1r$(false, name, time);
  };
  var Math_0 = Math;
  TimelineRunner.prototype.update_za3lpa$ = function (time) {
    if (!this.running)
      return;
    if (this.currentSubtimeline == null)
      return;
    var cs = ensureNotNull(this.currentSubtimeline);
    var tmp$ = this.currentTime;
    var a = this.currentStateTotalTime;
    var b = this.currentTime + time | 0;
    this.eval_0(tmp$, Math_0.min(a, b));
    this.currentTime = this.currentTime + time | 0;
    if (this.currentTime >= this.currentStateTotalTime) {
      var accumulatedTime = this.currentTime - this.currentStateTotalTime | 0;
      var nextState = cs.nextState;
      if (nextState == null) {
        this.running = false;
      }
       else {
        this.gotoAndRunning_xvbo1r$(cs.nextStatePlay, nextState, 0);
        this.currentTime = this.currentTime + accumulatedTime | 0;
        this.eval_0(this.currentTime - accumulatedTime | 0, this.currentTime);
      }
    }
  };
  function TimelineRunner$eval$lambda(this$TimelineRunner_0, closure$action_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$TimelineRunner$eval$lambda(this$TimelineRunner_0, closure$action_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$TimelineRunner$eval$lambda(this$TimelineRunner_0, closure$action_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$TimelineRunner = this$TimelineRunner_0;
    this.local$closure$action = closure$action_0;
  }
  Coroutine$TimelineRunner$eval$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$TimelineRunner$eval$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$TimelineRunner$eval$lambda.prototype.constructor = Coroutine$TimelineRunner$eval$lambda;
  Coroutine$TimelineRunner$eval$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            if ((tmp$_0 = (tmp$ = this.local$this$TimelineRunner.library.symbolsById.get_za3lpa$(this.local$closure$action.soundId)) == null || Kotlin.isType(tmp$, AnSymbolSound) ? tmp$ : throwCCE()) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$_0.getNativeSound(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            var data = this.result_0;
            if (data != null) {
              return get_soundSystem(this.local$this$TimelineRunner.views).play_eej0pj$(data), Unit;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            return Unit;
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
  TimelineRunner.prototype.eval_0 = function (prev, current) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (prev >= current)
      return;
    tmp$_0 = (tmp$ = this.currentSubtimeline) != null ? tmp$.actions : null;
    if (tmp$_0 == null) {
      return;
    }
    var actionsTimeline = tmp$_0;
    var result = actionsTimeline.getRangeIndices_b4nn5q$(prev, current - 1 | 0, this.tempRangeResult_0);
    tmp$_1 = result.startIndex;
    tmp$_2 = result.endIndex;
    execution: for (var n = tmp$_1; n <= tmp$_2; n++) {
      var action = actionsTimeline.objects.get_za3lpa$(n);
      if (Kotlin.isType(action, AnPlaySoundAction))
        async(this.library.views.coroutineContext, void 0, void 0, void 0, TimelineRunner$eval$lambda(this, action));
      else if (Kotlin.isType(action, AnEventAction))
        this.onEvent.invoke_11rb$(action.event);
    }
  };
  TimelineRunner.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimelineRunner',
    interfaces: []
  };
  function AnPlayable() {
  }
  AnPlayable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnPlayable',
    interfaces: []
  };
  function AnSimpleAnimation(frameTime, animations, anchor) {
    if (anchor === void 0)
      anchor = Anchor.Companion.TOP_LEFT;
    Container.call(this);
    this.frameTime = frameTime;
    this.animations = animations;
    this.anchor = anchor;
    this.image = new Image(bitmap.Bitmaps.transparent);
    var tmp$;
    this.defaultAnimation = (tmp$ = firstOrNull(this.animations.values)) != null ? tmp$ : emptyList();
    this.animation = this.defaultAnimation;
    this.elapsedTime_0 = 0;
    this.image.anchorX = this.anchor.sx;
    this.image.anchorY = this.anchor.sy;
    this.myupdate_0();
    this.plusAssign_l5rad2$(this.image);
    this.addUpdatable_b4k9x1$(AnSimpleAnimation_init$lambda(this));
  }
  AnSimpleAnimation.prototype.createInstance = function () {
    return new AnSimpleAnimation(this.frameTime, this.animations, this.anchor);
  };
  Object.defineProperty(AnSimpleAnimation.prototype, 'numberOfFrames', {
    get: function () {
      return this.animation.size;
    }
  });
  AnSimpleAnimation.prototype.play_61zpoe$ = function (name) {
    var tmp$;
    this.animation = (tmp$ = this.animations.get_11rb$(name)) != null ? tmp$ : this.defaultAnimation;
  };
  AnSimpleAnimation.prototype.myupdate_0 = function () {
    var tmp$;
    var frameNum = this.elapsedTime_0 / this.frameTime | 0;
    var bmpSlice = (tmp$ = getOrNull(this.animation, frameNum % this.numberOfFrames)) != null ? tmp$ : bitmap.Bitmaps.transparent;
    this.image.bitmap = bmpSlice;
  };
  function AnSimpleAnimation_init$lambda(this$AnSimpleAnimation) {
    return function (dtMs) {
      this$AnSimpleAnimation.elapsedTime_0 = (this$AnSimpleAnimation.elapsedTime_0 + dtMs | 0) % Kotlin.imul(this$AnSimpleAnimation.numberOfFrames, this$AnSimpleAnimation.frameTime);
      this$AnSimpleAnimation.myupdate_0();
      return Unit;
    };
  }
  AnSimpleAnimation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSimpleAnimation',
    interfaces: [AnPlayable, Container]
  };
  var Array_0 = Array;
  var booleanArray = Kotlin.booleanArray;
  function AnMovieClip(library, symbol) {
    AnMovieClip$Companion_getInstance();
    Container.call(this);
    this.library_kjq3lr$_0 = library;
    this.symbol_aapdmm$_0 = symbol;
    this.tempTimedResult_0 = new Timed$Result();
    this.totalDepths = this.symbol.limits.totalDepths;
    this.totalUids = this.symbol.limits.totalUids;
    var array = Array_0(this.totalDepths);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new DummyView();
    }
    this.dummyDepths = array;
    var array_0 = new Int32Array(this.totalDepths + 10 | 0);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = -1;
    }
    this.maskPushDepths = array_0;
    var array_1 = booleanArray(this.totalDepths + 10 | 0, false);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = false;
    }
    this.maskPopDepths = array_1;
    var array_2 = Array_0(this.totalUids);
    var tmp$_2;
    tmp$_2 = array_2.length - 1 | 0;
    for (var i_2 = 0; i_2 <= tmp$_2; i_2++) {
      var tmp$_3;
      var info = this.symbol.uidInfo[i_2];
      var view = Kotlin.isType(tmp$_3 = this.library.create_za3lpa$(info.characterId), View) ? tmp$_3 : throwCCE();
      view.addProps_y0zsll$(info.extraProps);
      array_2[i_2] = view;
    }
    this.viewUids = array_2;
    this.firstUpdate = true;
    this.smoothing = this.library.defaultSmoothing;
    this.singleFrame = this.symbol.limits.totalFrames <= 1;
    this.unsortedChildren = ArrayList_init(toList(this.dummyDepths));
    this.timelineRunner = new TimelineRunner(this, this.symbol);
    var tmp$_4, tmp$_5;
    tmp$_4 = this.dummyDepths;
    for (tmp$_5 = 0; tmp$_5 !== tmp$_4.length; ++tmp$_5) {
      var d = tmp$_4[tmp$_5];
      this.plusAssign_l5rad2$(d);
    }
    this.addUpdatable_b4k9x1$(AnMovieClip_init$lambda(this));
    this.tempMatrix_0 = new Matrix2d();
  }
  Object.defineProperty(AnMovieClip.prototype, 'library', {
    get: function () {
      return this.library_kjq3lr$_0;
    }
  });
  Object.defineProperty(AnMovieClip.prototype, 'symbol', {
    get: function () {
      return this.symbol_aapdmm$_0;
    }
  });
  AnMovieClip.prototype.clone = function () {
    var $receiver = this.createInstance();
    $receiver.copyPropsFrom_l5rad2$($receiver);
    return $receiver;
  };
  AnMovieClip.prototype.createInstance = function () {
    var tmp$;
    return Kotlin.isType(tmp$ = this.symbol.create_k19av$(this.library), View) ? tmp$ : throwCCE();
  };
  Object.defineProperty(AnMovieClip.prototype, 'onStop', {
    get: function () {
      return this.timelineRunner.onStop;
    }
  });
  Object.defineProperty(AnMovieClip.prototype, 'onEvent', {
    get: function () {
      return this.timelineRunner.onEvent;
    }
  });
  Object.defineProperty(AnMovieClip.prototype, 'onChangeState', {
    get: function () {
      return this.timelineRunner.onChangeState;
    }
  });
  Object.defineProperty(AnMovieClip.prototype, 'currentState', {
    get: function () {
      return this.timelineRunner.currentStateName;
    }
  });
  AnMovieClip.prototype.replaceDepth_0 = function (depth, view) {
    var result = replaceWith(this.unsortedChildren.get_za3lpa$(depth), view);
    this.unsortedChildren.set_wxm5ur$(depth, view);
    return result;
  };
  AnMovieClip.prototype.reset = function () {
    var tmp$, tmp$_0, tmp$_1;
    Container.prototype.reset.call(this);
    tmp$ = this.viewUids;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var view = tmp$[tmp$_0];
      view.reset();
    }
    tmp$_1 = this.unsortedChildren;
    for (var n = 0; n !== tmp$_1.size; ++n) {
      this.replaceDepth_0(n, this.dummyDepths[n]);
    }
  };
  function AnMovieClip$Companion() {
    AnMovieClip$Companion_instance = this;
    this.STATE_NONE = new AnMovieClip$Companion$RenderState(new AG$StencilState(false), new AG$ColorMaskState(true, true, true, true));
    this.STATE_SHAPE = new AnMovieClip$Companion$RenderState(new AG$StencilState(true, void 0, AG$CompareMode.ALWAYS, AG$StencilOp.SET, AG$StencilOp.SET, AG$StencilOp.SET, 0, 0, 255), new AG$ColorMaskState(false, false, false, false));
    this.STATE_CONTENT = new AnMovieClip$Companion$RenderState(new AG$StencilState(true, void 0, AG$CompareMode.EQUAL, AG$StencilOp.KEEP, AG$StencilOp.KEEP, AG$StencilOp.KEEP, 0, 255, 0), new AG$ColorMaskState(true, true, true, true));
  }
  function AnMovieClip$Companion$RenderState(stencil, colorMask) {
    this.stencil = stencil;
    this.colorMask = colorMask;
  }
  AnMovieClip$Companion$RenderState.prototype.set_b4eeiz$ = function (ctx, referenceValue) {
    ctx.flush();
    if (ctx.masksEnabled) {
      this.stencil.referenceValue = referenceValue;
      ctx.batch.stencil = this.stencil;
      ctx.batch.colorMask = this.colorMask;
    }
     else {
      this.stencil.referenceValue = 0;
      ctx.batch.stencil = AnMovieClip$Companion_getInstance().STATE_NONE.stencil;
      ctx.batch.colorMask = AnMovieClip$Companion_getInstance().STATE_NONE.colorMask;
    }
  };
  AnMovieClip$Companion$RenderState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderState',
    interfaces: []
  };
  AnMovieClip$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AnMovieClip$Companion_instance = null;
  function AnMovieClip$Companion_getInstance() {
    if (AnMovieClip$Companion_instance === null) {
      new AnMovieClip$Companion();
    }
    return AnMovieClip$Companion_instance;
  }
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_tmsbgo$;
  var get_lastIndex_0 = Kotlin.kotlin.collections.get_lastIndex_l1lu5t$;
  AnMovieClip.prototype.render_8isv09$ = function (ctx) {
    if (!this.visible)
      return;
    fill(this.maskPopDepths, false);
    var usedStencil = false;
    var state = 0;
    var depth = 0;
    for (var tmp$ = toList_0(this.children).iterator(); tmp$.hasNext(); ++depth) {
      var child = tmp$.next();
      var tmp$_0;
      var $receiver = this.maskPushDepths;
      var maskDepth = depth >= 0 && depth <= get_lastIndex($receiver) ? $receiver[depth] : -1;
      if (maskDepth >= 0) {
        if (get_indices(this.maskPopDepths).contains_mef7kx$(maskDepth)) {
          this.maskPopDepths[maskDepth] = true;
          set_stencilIndex(ctx, get_stencilIndex(ctx) + 1 | 0);
          usedStencil = true;
          AnMovieClip$Companion_getInstance().STATE_SHAPE.set_b4eeiz$(ctx, get_stencilIndex(ctx));
          state = 1;
        }
      }
      if (ctx.masksEnabled)
        tmp$_0 = true;
      else {
        tmp$_0 = true;
      }
      var showChild = tmp$_0;
      if (showChild) {
        child.render_8isv09$(ctx);
      }
      if (maskDepth >= 0) {
        AnMovieClip$Companion_getInstance().STATE_CONTENT.set_b4eeiz$(ctx, get_stencilIndex(ctx));
        state = 2;
      }
      var $receiver_0 = this.maskPopDepths;
      if (depth >= 0 && depth <= get_lastIndex_0($receiver_0) ? $receiver_0[depth] : false) {
        AnMovieClip$Companion_getInstance().STATE_NONE.set_b4eeiz$(ctx, 0);
        set_stencilIndex(ctx, get_stencilIndex(ctx) - 1 | 0);
        state = 0;
      }
    }
    if (usedStencil && get_stencilIndex(ctx) <= 0) {
      set_stencilIndex(ctx, 0);
      ctx.ag.clear_yvqa77$(void 0, void 0, get_stencilIndex(ctx), false, false, true);
    }
  };
  AnMovieClip.prototype.update_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = this.totalDepths;
    for (var depth = 0; depth < tmp$; depth++) {
      tmp$_1 = (tmp$_0 = this.timelineRunner.currentSubtimeline) != null ? tmp$_0.timelines : null;
      if (tmp$_1 == null) {
        continue;
      }
      var timelines = tmp$_1;
      var timeline = timelines[depth];
      if (timeline.size <= 0)
        continue;
      var hasMultipleFrames = timeline.size > 1;
      if (this.smoothing) {
        var tmp$_2 = timeline.find_xgt0ho$(this.timelineRunner.currentTime, this.tempTimedResult_0);
        var index = tmp$_2.component1()
        , left = tmp$_2.component2()
        , right = tmp$_2.component3()
        , ratio = tmp$_2.component4();
        if (left != null)
          this.maskPushDepths[left.depth] = left.clipDepth;
        var view = left != null && left.uid >= 0 ? this.viewUids[left.uid] : this.dummyDepths[depth];
        var placed = this.replaceDepth_0(depth, view);
        if (placed || hasMultipleFrames) {
          if (left != null && right != null && left.uid === right.uid) {
            AnSymbolTimelineFrame$Companion_getInstance().setToViewInterpolated_odkdvs$(view, left, right, ratio);
          }
           else {
            left != null ? (left.setToView_l5rad2$(view), Unit) : null;
          }
          if (this.symbol.ninePatch != null && Kotlin.isType(view, AnBaseShape))
            view.ninePatch = this.symbol.ninePatch;
        }
      }
       else {
        var tmp$_3 = timeline.findWithoutInterpolation_xgt0ho$(this.timelineRunner.currentTime, this.tempTimedResult_0);
        var index_0 = tmp$_3.component1()
        , left_0 = tmp$_3.component2();
        if (left_0 != null)
          this.maskPushDepths[left_0.depth] = left_0.clipDepth;
        var view_0 = left_0 != null && left_0.uid >= 0 ? this.viewUids[left_0.uid] : this.dummyDepths[depth];
        var placed_0 = this.replaceDepth_0(depth, view_0);
        if (placed_0 || hasMultipleFrames) {
          left_0 != null ? (left_0.setToView_l5rad2$(view_0), Unit) : null;
          if (this.symbol.ninePatch != null && Kotlin.isType(view_0, AnBaseShape))
            view_0.ninePatch = this.symbol.ninePatch;
        }
      }
    }
  };
  Object.defineProperty(AnMovieClip.prototype, 'stateNames', {
    get: function () {
      var $receiver = this.symbol.states;
      var destination = ArrayList_init_0($receiver.size);
      var tmp$;
      tmp$ = $receiver.entries.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.value.name);
      }
      return destination;
    }
  });
  AnMovieClip.prototype.play_61zpoe$ = function (name) {
    this.timelineRunner.gotoAndPlay_bm4lxs$(name);
    this.update_0();
  };
  var emptySet = Kotlin.kotlin.collections.emptySet_287e2$;
  AnMovieClip.prototype.playAndWaitStop_61zpoe$ = function (name_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWaitStop_61zpoe$(this, name_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$playAndWaitStop_61zpoe$($this, name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$name = name_0;
  }
  Coroutine$playAndWaitStop_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWaitStop_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWaitStop_61zpoe$.prototype.constructor = Coroutine$playAndWaitStop_61zpoe$;
  Coroutine$playAndWaitStop_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.playAndWaitEvent_qwyf15$(this.local$name, emptySet(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
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
  AnMovieClip.prototype.playAndWaitEvent_60y5e1$ = function (name, events, continuation) {
    return this.playAndWaitEvent_qwyf15$(name, toSet(events), continuation);
  };
  function AnMovieClip$playAndWaitEvent$lambda(closure$name, this$AnMovieClip) {
    return function () {
      this$AnMovieClip.play_61zpoe$(closure$name);
      return Unit;
    };
  }
  AnMovieClip.prototype.playAndWaitEvent_qwyf15$ = function (name, eventsSet, continuation) {
    return this._waitEvent_0(eventsSet, AnMovieClip$playAndWaitEvent$lambda(name, this), continuation);
  };
  AnMovieClip.prototype.waitStop = function (continuation) {
    return this._waitEvent_0(emptySet(), void 0, continuation);
  };
  AnMovieClip.prototype.waitEvent_vqirvp$ = function (events, continuation) {
    return this._waitEvent_0(toSet(events), void 0, continuation);
  };
  AnMovieClip.prototype.waitEvent_ywdfdh$ = function (eventsSet, continuation) {
    return this._waitEvent_0(eventsSet, void 0, continuation);
  };
  function AnMovieClip$_waitEvent$lambda() {
    return Unit;
  }
  function AnMovieClip$_waitEvent$lambda_0(closure$once, closure$deferred) {
    return function (it) {
      var $this = closure$once;
      if (!$this.completed) {
        $this.completed = true;
        closure$deferred.complete_11rb$(null);
      }
      return Unit;
    };
  }
  function AnMovieClip$_waitEvent$lambda_1(closure$eventsSet, closure$once, closure$deferred) {
    return function (it) {
      if (closure$eventsSet.contains_11rb$(it)) {
        var $this = closure$once;
        if (!$this.completed) {
          $this.completed = true;
          closure$deferred.complete_11rb$(it);
        }
      }
      return Unit;
    };
  }
  function AnMovieClip$_waitEvent$lambda_2(closure$eventsSet, closure$once, closure$deferred) {
    return function (it) {
      if (closure$eventsSet.contains_11rb$(it)) {
        var $this = closure$once;
        if (!$this.completed) {
          $this.completed = true;
          closure$deferred.complete_11rb$(it);
        }
      }
      return Unit;
    };
  }
  AnMovieClip.prototype._waitEvent_0 = function (eventsSet_0, afterSignals_0, continuation_0, suspended) {
    var instance = new Coroutine$_waitEvent_0(this, eventsSet_0, afterSignals_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$_waitEvent_0($this, eventsSet_0, afterSignals_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$closeables = void 0;
    this.local$eventsSet = eventsSet_0;
    this.local$afterSignals = afterSignals_0;
  }
  Coroutine$_waitEvent_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$_waitEvent_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$_waitEvent_0.prototype.constructor = Coroutine$_waitEvent_0;
  Coroutine$_waitEvent_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$afterSignals === void 0)
              this.local$afterSignals = AnMovieClip$_waitEvent$lambda;
            var tmp$;
            var once = new Once();
            var deferred = CompletableDeferred(Job());
            this.local$closeables = ArrayList_init_1();
            var element = this.$this.onStop.invoke_qlkmfe$(AnMovieClip$_waitEvent$lambda_0(once, deferred));
            this.local$closeables.add_11rb$(element);
            if (!this.local$eventsSet.isEmpty()) {
              var element_0 = this.$this.onChangeState.invoke_qlkmfe$(AnMovieClip$_waitEvent$lambda_1(this.local$eventsSet, once, deferred));
              this.local$closeables.add_11rb$(element_0);
              var element_1 = this.$this.onEvent.invoke_qlkmfe$(AnMovieClip$_waitEvent$lambda_2(this.local$eventsSet, once, deferred));
              this.local$closeables.add_11rb$(element_1);
            }

            this.exceptionState_0 = 4;
            this.local$afterSignals();
            this.state_0 = 1;
            this.result_0 = deferred.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
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
            tmp$ = this.local$closeables.iterator();
            while (tmp$.hasNext()) {
              var c = tmp$.next();
              c.close();
            }

            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  AnMovieClip.prototype.seekStill_io5o9c$ = function (name, ratio) {
    if (ratio === void 0)
      ratio = 0.0;
    var totalTime = this.timelineRunner.getStateTime_61zpoe$(name);
    this.timelineRunner.gotoAndStop_bm4lxs$(name, numberToInt(totalTime * ratio));
    this.update_0();
  };
  AnMovieClip.prototype.updateInternal_0 = function (dtMs) {
    if (this.timelineRunner.running && (this.firstUpdate || !this.singleFrame)) {
      this.firstUpdate = false;
      this.timelineRunner.update_za3lpa$(dtMs * 1000 | 0);
      this.update_0();
    }
  };
  AnMovieClip.prototype.toString = function () {
    return Container.prototype.toString.call(this) + ':symbol=' + toString(this.symbol);
  };
  function AnMovieClip_init$lambda(this$AnMovieClip) {
    return function (it) {
      this$AnMovieClip.updateInternal_0(it);
      return Unit;
    };
  }
  AnMovieClip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnMovieClip',
    interfaces: [AnPlayable, AnElement, Container]
  };
  function play_0($receiver, name) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $receiver) == null || Kotlin.isType(tmp$, AnPlayable) ? tmp$ : null) != null ? (tmp$_0.play_61zpoe$(name), Unit) : null;
  }
  function playAndWaitStop($receiver_0, name_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWaitStop($receiver_0, name_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$playAndWaitStop($receiver_0, name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$name = name_0;
  }
  Coroutine$playAndWaitStop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWaitStop.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWaitStop.prototype.constructor = Coroutine$playAndWaitStop;
  Coroutine$playAndWaitStop.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            if ((tmp$_0 = (tmp$ = this.local$$receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$_0.playAndWaitStop_61zpoe$(this.local$name, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.result_0 = Unit;
            this.state_0 = 3;
            continue;
          case 3:
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
  function playAndWaitEvent($receiver_0, name_0, events_0, continuation_0, suspended) {
    var instance = new Coroutine$playAndWaitEvent($receiver_0, name_0, events_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$playAndWaitEvent($receiver_0, name_0, events_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$name = name_0;
    this.local$events = events_0;
  }
  Coroutine$playAndWaitEvent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$playAndWaitEvent.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$playAndWaitEvent.prototype.constructor = Coroutine$playAndWaitEvent;
  Coroutine$playAndWaitEvent.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            if ((tmp$_0 = (tmp$ = this.local$$receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$_0.playAndWaitEvent_60y5e1$(this.local$name, this.local$events.slice(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
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
  function waitStop($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$waitStop($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$waitStop($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$waitStop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$waitStop.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$waitStop.prototype.constructor = Coroutine$waitStop;
  Coroutine$waitStop.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            if ((tmp$_0 = (tmp$ = this.local$$receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$_0.waitStop(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
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
  function waitEvent($receiver_0, events_0, continuation_0, suspended) {
    var instance = new Coroutine$waitEvent($receiver_0, events_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$waitEvent($receiver_0, events_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$events = events_0;
  }
  Coroutine$waitEvent.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$waitEvent.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$waitEvent.prototype.constructor = Coroutine$waitEvent;
  Coroutine$waitEvent.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0;
            if ((tmp$_0 = (tmp$ = this.local$$receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$_0.waitEvent_vqirvp$(this.local$events.slice(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
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
  function get_playingName($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = $receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null ? tmp$_0.timelineRunner : null) != null ? tmp$_1.currentStateName : null;
  }
  function seekStill($receiver, name, ratio) {
    if (ratio === void 0)
      ratio = 0.0;
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $receiver) == null || Kotlin.isType(tmp$, AnMovieClip) ? tmp$ : null) != null ? (tmp$_0.seekStill_io5o9c$(name, ratio), Unit) : null;
  }
  function AnSymbol(id, name) {
    if (id === void 0)
      id = -1;
    if (name === void 0)
      name = null;
    this.id = id;
    this.name = name;
    this.$delegate_lvjwfe$_0 = new Extra$Mixin();
  }
  AnSymbol.prototype.create_k19av$ = function (library) {
    return new AnEmptyView(library);
  };
  AnSymbol.prototype.toString = function () {
    return 'Symbol(id=' + this.id + ', name=' + toString(this.name) + ')';
  };
  Object.defineProperty(AnSymbol.prototype, 'extra', {
    get: function () {
      return this.$delegate_lvjwfe$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_lvjwfe$_0.extra = tmp$;
    }
  });
  AnSymbol.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbol',
    interfaces: [Extra]
  };
  function AnSymbolEmpty() {
    AnSymbolEmpty_instance = this;
    AnSymbol.call(this, -1, '');
  }
  AnSymbolEmpty.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AnSymbolEmpty',
    interfaces: [AnSymbol]
  };
  var AnSymbolEmpty_instance = null;
  function AnSymbolEmpty_getInstance() {
    if (AnSymbolEmpty_instance === null) {
      new AnSymbolEmpty();
    }
    return AnSymbolEmpty_instance;
  }
  function AnSymbolSound(id, name, inputSound, dataBytes) {
    AnSymbol.call(this, id, name);
    this.inputSound_0 = inputSound;
    this.dataBytes = dataBytes;
    this.nativeSoundCache_0 = new AsyncCacheItem();
  }
  function AnSymbolSound$getNativeSound$lambda(this$AnSymbolSound_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$AnSymbolSound$getNativeSound$lambda(this$AnSymbolSound_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$AnSymbolSound$getNativeSound$lambda(this$AnSymbolSound_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.local$this$AnSymbolSound = this$AnSymbolSound_0;
    this.local$tmp$_0 = void 0;
  }
  Coroutine$AnSymbolSound$getNativeSound$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AnSymbolSound$getNativeSound$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AnSymbolSound$getNativeSound$lambda.prototype.constructor = Coroutine$AnSymbolSound$getNativeSound$lambda;
  Coroutine$AnSymbolSound$getNativeSound$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.local$this$AnSymbolSound.inputSound_0 == null) {
              this.exceptionState_0 = 2;
              this.state_0 = 1;
              this.result_0 = sound.nativeSoundProvider.createSound_1fhb37$((tmp$ = this.local$this$AnSymbolSound.dataBytes) != null ? tmp$ : new Int8Array([]), void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 1:
            this.local$tmp$_0 = this.result_0;
            this.exceptionState_0 = 7;
            this.state_0 = 5;
            continue;
          case 2:
            this.exceptionState_0 = 7;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              this.state_0 = 3;
              this.result_0 = sound.nativeSoundProvider.createSound_gjpej9$(new AudioData(44100, 2, new Int16Array([])), void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              throw e;
            }

          case 3:
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.local$this$AnSymbolSound.inputSound_0 = this.local$tmp$_0;
            this.state_0 = 6;
            continue;
          case 6:
            return ensureNotNull(this.local$this$AnSymbolSound.inputSound_0);
          case 7:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 7) {
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
  AnSymbolSound.prototype.getNativeSound = function (continuation) {
    return this.nativeSoundCache_0.invoke_cbny1b$(AnSymbolSound$getNativeSound$lambda(this), continuation);
  };
  AnSymbolSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolSound',
    interfaces: [AnSymbol]
  };
  function AnTextFieldSymbol(id, name, initialHtml, bounds) {
    AnSymbol.call(this, id, name);
    this.initialHtml = initialHtml;
    this.bounds = bounds;
  }
  AnTextFieldSymbol.prototype.create_k19av$ = function (library) {
    return new AnTextField(library, this);
  };
  AnTextFieldSymbol.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnTextFieldSymbol',
    interfaces: [AnSymbol]
  };
  function AnSymbolBaseShape(id, name, bounds, path) {
    if (path === void 0)
      path = null;
    AnSymbol.call(this, id, name);
    this.bounds = bounds;
    this.path = path;
  }
  AnSymbolBaseShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolBaseShape',
    interfaces: [AnSymbol]
  };
  function AnSymbolShape(id, name, bounds, textureWithBitmap, path) {
    if (path === void 0)
      path = null;
    AnSymbolBaseShape.call(this, id, name, bounds, path);
    this.textureWithBitmap = textureWithBitmap;
  }
  AnSymbolShape.prototype.create_k19av$ = function (library) {
    return new AnShape(library, this);
  };
  AnSymbolShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolShape',
    interfaces: [AnSymbolBaseShape]
  };
  function AnSymbolMorphShape(id, name, bounds, texturesWithBitmap, path) {
    if (texturesWithBitmap === void 0)
      texturesWithBitmap = new Timed();
    if (path === void 0)
      path = null;
    AnSymbolBaseShape.call(this, id, name, bounds, path);
    this.texturesWithBitmap = texturesWithBitmap;
  }
  AnSymbolMorphShape.prototype.create_k19av$ = function (library) {
    return new AnMorphShape(library, this);
  };
  AnSymbolMorphShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolMorphShape',
    interfaces: [AnSymbolBaseShape]
  };
  function AnSymbolBitmap(id, name, bmp) {
    AnSymbol.call(this, id, name);
    this.bmp = bmp;
  }
  AnSymbolBitmap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolBitmap',
    interfaces: [AnSymbol]
  };
  function AnConstantPool(stringPool) {
    this.stringPool = stringPool;
  }
  AnConstantPool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnConstantPool',
    interfaces: []
  };
  function AnSymbolTimelineFrame(depth, uid, clipDepth, ratio, transform, name, colorTransform, blendMode) {
    AnSymbolTimelineFrame$Companion_getInstance();
    if (depth === void 0)
      depth = -1;
    if (uid === void 0)
      uid = -1;
    if (clipDepth === void 0)
      clipDepth = -1;
    if (ratio === void 0)
      ratio = 0.0;
    if (transform === void 0)
      transform = new Matrix2d();
    if (name === void 0)
      name = null;
    if (colorTransform === void 0)
      colorTransform = new ColorTransform();
    if (blendMode === void 0)
      blendMode = BlendMode$INHERIT_getInstance();
    this.depth = depth;
    this.uid = uid;
    this.clipDepth = clipDepth;
    this.ratio = ratio;
    this.transform = transform;
    this.name = name;
    this.colorTransform = colorTransform;
    this.blendMode = blendMode;
  }
  AnSymbolTimelineFrame.prototype.setToInterpolated_5zcn26$ = function (l, r, ratio) {
    this.transform.setToInterpolated_ehu1mq$(ratio, l.transform, r.transform);
    this.colorTransform.setToInterpolated_v05y7o$(l.colorTransform, r.colorTransform, ratio);
    this.ratio = interpolate(l.ratio, r.ratio, ratio);
    this.name = l.name;
    this.blendMode = l.blendMode;
  };
  function AnSymbolTimelineFrame$Companion() {
    AnSymbolTimelineFrame$Companion_instance = this;
  }
  AnSymbolTimelineFrame$Companion.prototype.setToViewInterpolated_odkdvs$ = function (view, l, r, ratio) {
    view.setMatrixInterpolated_whgrqo$(ratio, l.transform, r.transform);
    view.colorTransform = view.colorTransform.setToInterpolated_v05y7o$(l.colorTransform, r.colorTransform, ratio);
    view.ratio = interpolate(l.ratio, r.ratio, ratio);
    view.name = l.name;
    view.blendMode = l.blendMode;
  };
  AnSymbolTimelineFrame$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AnSymbolTimelineFrame$Companion_instance = null;
  function AnSymbolTimelineFrame$Companion_getInstance() {
    if (AnSymbolTimelineFrame$Companion_instance === null) {
      new AnSymbolTimelineFrame$Companion();
    }
    return AnSymbolTimelineFrame$Companion_instance;
  }
  AnSymbolTimelineFrame.prototype.setToView_l5rad2$ = function (view) {
    view.ratio = this.ratio;
    view.setMatrix_yx07kl$(this.transform);
    view.name = this.name;
    view.colorTransform = this.colorTransform;
    view.blendMode = this.blendMode;
  };
  AnSymbolTimelineFrame.prototype.copyFrom_68sf8e$ = function (other) {
    this.depth = other.depth;
    this.uid = other.uid;
    this.clipDepth = other.clipDepth;
    this.ratio = other.ratio;
    this.transform.copyFrom_7f5bc6$(other.transform);
    this.name = other.name;
    this.colorTransform.copyFrom_54kf7e$(other.colorTransform);
    this.blendMode = other.blendMode;
  };
  AnSymbolTimelineFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolTimelineFrame',
    interfaces: []
  };
  AnSymbolTimelineFrame.prototype.component1 = function () {
    return this.depth;
  };
  AnSymbolTimelineFrame.prototype.component2 = function () {
    return this.uid;
  };
  AnSymbolTimelineFrame.prototype.component3 = function () {
    return this.clipDepth;
  };
  AnSymbolTimelineFrame.prototype.component4 = function () {
    return this.ratio;
  };
  AnSymbolTimelineFrame.prototype.component5 = function () {
    return this.transform;
  };
  AnSymbolTimelineFrame.prototype.component6 = function () {
    return this.name;
  };
  AnSymbolTimelineFrame.prototype.component7 = function () {
    return this.colorTransform;
  };
  AnSymbolTimelineFrame.prototype.component8 = function () {
    return this.blendMode;
  };
  AnSymbolTimelineFrame.prototype.copy_5eqbr5$ = function (depth, uid, clipDepth, ratio, transform, name, colorTransform, blendMode) {
    return new AnSymbolTimelineFrame(depth === void 0 ? this.depth : depth, uid === void 0 ? this.uid : uid, clipDepth === void 0 ? this.clipDepth : clipDepth, ratio === void 0 ? this.ratio : ratio, transform === void 0 ? this.transform : transform, name === void 0 ? this.name : name, colorTransform === void 0 ? this.colorTransform : colorTransform, blendMode === void 0 ? this.blendMode : blendMode);
  };
  AnSymbolTimelineFrame.prototype.toString = function () {
    return 'AnSymbolTimelineFrame(depth=' + Kotlin.toString(this.depth) + (', uid=' + Kotlin.toString(this.uid)) + (', clipDepth=' + Kotlin.toString(this.clipDepth)) + (', ratio=' + Kotlin.toString(this.ratio)) + (', transform=' + Kotlin.toString(this.transform)) + (', name=' + Kotlin.toString(this.name)) + (', colorTransform=' + Kotlin.toString(this.colorTransform)) + (', blendMode=' + Kotlin.toString(this.blendMode)) + ')';
  };
  AnSymbolTimelineFrame.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.depth) | 0;
    result = result * 31 + Kotlin.hashCode(this.uid) | 0;
    result = result * 31 + Kotlin.hashCode(this.clipDepth) | 0;
    result = result * 31 + Kotlin.hashCode(this.ratio) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorTransform) | 0;
    result = result * 31 + Kotlin.hashCode(this.blendMode) | 0;
    return result;
  };
  AnSymbolTimelineFrame.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.depth, other.depth) && Kotlin.equals(this.uid, other.uid) && Kotlin.equals(this.clipDepth, other.clipDepth) && Kotlin.equals(this.ratio, other.ratio) && Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.colorTransform, other.colorTransform) && Kotlin.equals(this.blendMode, other.blendMode)))));
  };
  function AnAction() {
  }
  AnAction.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AnAction',
    interfaces: []
  };
  function AnPlaySoundAction(soundId) {
    this.soundId = soundId;
  }
  AnPlaySoundAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnPlaySoundAction',
    interfaces: [AnAction]
  };
  AnPlaySoundAction.prototype.component1 = function () {
    return this.soundId;
  };
  AnPlaySoundAction.prototype.copy_za3lpa$ = function (soundId) {
    return new AnPlaySoundAction(soundId === void 0 ? this.soundId : soundId);
  };
  AnPlaySoundAction.prototype.toString = function () {
    return 'AnPlaySoundAction(soundId=' + Kotlin.toString(this.soundId) + ')';
  };
  AnPlaySoundAction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.soundId) | 0;
    return result;
  };
  AnPlaySoundAction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.soundId, other.soundId))));
  };
  function AnEventAction(event) {
    this.event = event;
  }
  AnEventAction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnEventAction',
    interfaces: [AnAction]
  };
  AnEventAction.prototype.component1 = function () {
    return this.event;
  };
  AnEventAction.prototype.copy_61zpoe$ = function (event) {
    return new AnEventAction(event === void 0 ? this.event : event);
  };
  AnEventAction.prototype.toString = function () {
    return 'AnEventAction(event=' + Kotlin.toString(this.event) + ')';
  };
  AnEventAction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.event) | 0;
    return result;
  };
  AnEventAction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.event, other.event))));
  };
  function AnDepthTimeline(depth) {
    Timed.call(this);
    this.depth = depth;
  }
  AnDepthTimeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnDepthTimeline',
    interfaces: [Timed]
  };
  function AnSymbolLimits(totalDepths, totalFrames, totalUids, totalTime) {
    this.totalDepths = totalDepths;
    this.totalFrames = totalFrames;
    this.totalUids = totalUids;
    this.totalTime = totalTime;
  }
  AnSymbolLimits.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolLimits',
    interfaces: []
  };
  function AnSymbolUidDef(characterId, extraProps) {
    if (extraProps === void 0)
      extraProps = LinkedHashMap_init();
    this.characterId = characterId;
    this.extraProps = extraProps;
  }
  AnSymbolUidDef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolUidDef',
    interfaces: []
  };
  function AnSymbolMovieClipSubTimeline(totalDepths) {
    this.totalTime = 0;
    var array = Array_0(totalDepths);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new AnDepthTimeline(i);
    }
    this.timelines = array;
    this.actions = new Timed();
    this.nextState = null;
    this.nextStatePlay = false;
  }
  AnSymbolMovieClipSubTimeline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolMovieClipSubTimeline',
    interfaces: []
  };
  function AnSymbolMovieClipState(name, subTimeline, startTime) {
    this.name = name;
    this.subTimeline = subTimeline;
    this.startTime = startTime;
  }
  AnSymbolMovieClipState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolMovieClipState',
    interfaces: []
  };
  function AnSymbolMovieClip(id, name, limits) {
    AnSymbol.call(this, id, name);
    this.limits = limits;
    this.ninePatch = null;
    this.states = HashMap_init();
    var array = Array_0(this.limits.totalUids);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new AnSymbolUidDef(-1, HashMap_init());
    }
    this.uidInfo = array;
  }
  AnSymbolMovieClip.prototype.create_k19av$ = function (library) {
    return new AnMovieClip(library, this);
  };
  AnSymbolMovieClip.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnSymbolMovieClip',
    interfaces: [AnSymbol]
  };
  function animateLibraryLoaders$lambda$lambda$lambda($receiver_0, content_0, views_0, continuation_0, suspended) {
    var instance = new Coroutine$animateLibraryLoaders$lambda$lambda$lambda($receiver_0, content_0, views_0, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$animateLibraryLoaders$lambda$lambda$lambda($receiver_0, content_0, views_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$content = content_0;
    this.local$views = views_0;
  }
  Coroutine$animateLibraryLoaders$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$animateLibraryLoaders$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$animateLibraryLoaders$lambda$lambda$lambda.prototype.constructor = Coroutine$animateLibraryLoaders$lambda$lambda$lambda;
  Coroutine$animateLibraryLoaders$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readAni(this.local$$receiver, this.local$views, this.local$content, this);
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
  function animateLibraryLoaders$lambda$lambda(s_0, injector, continuation_0, suspended) {
    var instance = new Coroutine$animateLibraryLoaders$lambda$lambda(s_0, injector, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$animateLibraryLoaders$lambda$lambda(s_0, injector, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$s = s_0;
  }
  Coroutine$animateLibraryLoaders$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$animateLibraryLoaders$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$animateLibraryLoaders$lambda$lambda.prototype.constructor = Coroutine$animateLibraryLoaders$lambda$lambda;
  Coroutine$animateLibraryLoaders$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (equals(this.local$s.readString_uyw3ma$(8), AniFile_getInstance().MAGIC))
              return new KorgeFileLoader('ani', animateLibraryLoaders$lambda$lambda$lambda);
            else
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
  function animateLibraryLoaders$lambda() {
    return arrayListOf([new KorgeFileLoaderTester('core/ani', animateLibraryLoaders$lambda$lambda)]);
  }
  var animateLibraryLoaders;
  var animateLibraryLoaders_metadata = new PropertyMetadata('animateLibraryLoaders');
  function get_animateLibraryLoaders($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = animateLibraryLoaders.name) != null ? tmp$ : animateLibraryLoaders_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = animateLibraryLoaders.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = animateLibraryLoaders.name) != null ? tmp$_3 : animateLibraryLoaders_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function AnLibrary(views, width, height, fps) {
    this.views = views;
    this.width = width;
    this.height = height;
    this.fps = fps;
    this.$delegate_k19av$_0 = new Extra$Mixin();
    this.msPerFrameDouble = 1000 / this.fps;
    this.msPerFrame = numberToInt(this.msPerFrameDouble);
    this.bgcolor = -1;
    this.symbolsById = ArrayList_init_1();
    this.symbolsByName = HashMap_init();
    this.defaultSmoothing = true;
  }
  AnLibrary.prototype.addSymbol_lvjwfe$ = function (symbol) {
    while (this.symbolsById.size <= symbol.id) {
      var $receiver = this.symbolsById;
      var element = AnSymbolEmpty_getInstance();
      $receiver.add_11rb$(element);
    }
    if (symbol.id >= 0)
      this.symbolsById.set_wxm5ur$(symbol.id, symbol);
  };
  AnLibrary.prototype.processSymbolNames = function () {
    var tmp$;
    tmp$ = this.symbolsById.iterator();
    while (tmp$.hasNext()) {
      var symbol = tmp$.next();
      if (symbol.name != null) {
        var $receiver = this.symbolsByName;
        var key = ensureNotNull(symbol.name);
        $receiver.put_xwzc9p$(key, symbol);
      }
    }
  };
  AnLibrary.prototype.findFirstTexture_w4zmgr$ = function ($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (Kotlin.isType($receiver, AnSymbolEmpty))
      return null;
    else if (Kotlin.isType($receiver, AnSymbolSound))
      return null;
    else if (Kotlin.isType($receiver, AnTextFieldSymbol))
      return null;
    else if (Kotlin.isType($receiver, AnSymbolShape))
      return (tmp$ = $receiver.textureWithBitmap) != null ? tmp$.texture : null;
    else if (Kotlin.isType($receiver, AnSymbolMorphShape))
      return (tmp$_0 = firstOrNull_0($receiver.texturesWithBitmap.objects)) != null ? tmp$_0.texture : null;
    else if (Kotlin.isType($receiver, AnSymbolBitmap))
      return null;
    else if (Kotlin.isType($receiver, AnSymbolMovieClip)) {
      tmp$_1 = $receiver.uidInfo;
      for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
        var uid = tmp$_1[tmp$_2];
        var res = this.findFirstTexture_vkl01n$(this.create_za3lpa$(uid.characterId));
        if (res != null)
          return res;
      }
      return null;
    }
     else
      throw RuntimeException_init("Don't know how to handle " + Kotlin.getKClassFromExpression($receiver));
  };
  AnLibrary.prototype.findFirstTexture_vkl01n$ = function ($receiver) {
    return this.findFirstTexture_w4zmgr$($receiver.symbol);
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  var get_lastIndex_1 = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  AnLibrary.prototype.create_za3lpa$ = function (id) {
    var tmp$;
    if (id < 0) {
      throw new NotImplementedError_init();
    }
     else {
      var $receiver = this.symbolsById;
      tmp$ = (id >= 0 && id <= get_lastIndex_1($receiver) ? $receiver.get_za3lpa$(id) : AnSymbolEmpty_getInstance()).create_k19av$(this);
    }
    return tmp$;
  };
  AnLibrary.prototype.createShape_za3lpa$ = function (id) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.create_za3lpa$(id), AnShape) ? tmp$ : throwCCE();
  };
  AnLibrary.prototype.createMovieClip_za3lpa$ = function (id) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.create_za3lpa$(id), AnMovieClip) ? tmp$ : throwCCE();
  };
  AnLibrary.prototype.getTexture_za3lpa$ = function (id) {
    return this.findFirstTexture_vkl01n$(this.create_za3lpa$(id));
  };
  AnLibrary.prototype.create_61zpoe$ = function (name) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.symbolsByName.get_11rb$(name)) != null ? tmp$.create_k19av$(this) : null) != null ? tmp$_0 : invalidOp("Can't find symbol with name '" + name + "'");
  };
  AnLibrary.prototype.createShape_61zpoe$ = function (name) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.create_61zpoe$(name), AnShape) ? tmp$ : throwCCE();
  };
  AnLibrary.prototype.createMovieClip_61zpoe$ = function (name) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.create_61zpoe$(name), AnMovieClip) ? tmp$ : throwCCE();
  };
  AnLibrary.prototype.getTexture_61zpoe$ = function (name) {
    return this.findFirstTexture_vkl01n$(this.create_61zpoe$(name));
  };
  AnLibrary.prototype.getBitmap_za3lpa$ = function (id) {
    var tmp$;
    return (Kotlin.isType(tmp$ = this.symbolsById.get_za3lpa$(id), AnSymbolBitmap) ? tmp$ : throwCCE()).bmp;
  };
  AnLibrary.prototype.getBitmap_61zpoe$ = function (name) {
    var tmp$;
    return (Kotlin.isType(tmp$ = this.symbolsByName.get_11rb$(name), AnSymbolBitmap) ? tmp$ : throwCCE()).bmp;
  };
  AnLibrary.prototype.createMainTimeLine = function () {
    return this.createMovieClip_za3lpa$(0);
  };
  Object.defineProperty(AnLibrary.prototype, 'extra', {
    get: function () {
      return this.$delegate_k19av$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_k19av$_0.extra = tmp$;
    }
  });
  AnLibrary.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnLibrary',
    interfaces: [Extra]
  };
  function Timed(initialCapacity) {
    if (initialCapacity === void 0)
      initialCapacity = 7;
    this.times = new IntArrayList(initialCapacity);
    this.objects = ArrayList_init_0(initialCapacity);
  }
  Object.defineProperty(Timed.prototype, 'size', {
    get: function () {
      return this.times.size;
    }
  });
  Object.defineProperty(Timed.prototype, 'entries', {
    get: function () {
      return zip(this.times, this.objects);
    }
  });
  Timed.prototype.add_wxm5ur$ = function (time, obj) {
    this.times.add_za3lpa$(time);
    this.objects.add_11rb$(obj);
    var m = this.times.size - 2 | 0;
    while (m >= 0 && time < this.times.get_za3lpa$(m)) {
      this.swap_t3p0pr$_0(m, m + 1 | 0);
      m = m - 1 | 0;
    }
  };
  Timed.prototype.swap_t3p0pr$_0 = function (a, b) {
    var tempTime = this.times.get_za3lpa$(b);
    var tempObject = this.objects.get_za3lpa$(b);
    this.times.set_vux9f0$(b, this.times.get_za3lpa$(a));
    this.objects.set_wxm5ur$(b, this.objects.get_za3lpa$(a));
    this.times.set_vux9f0$(a, tempTime);
    this.objects.set_wxm5ur$(a, tempObject);
  };
  Timed.prototype.findNearIndex_za3lpa$ = function (time) {
    var res = binarySearch(this.times, time);
    return res < 0 ? clamp((-res | 0) - 1 | 0, 0, this.times.size - 1 | 0) : res;
  };
  function Timed$RangeResult(startIndex, endIndex) {
    if (startIndex === void 0)
      startIndex = 0;
    if (endIndex === void 0)
      endIndex = 0;
    this.startIndex = startIndex;
    this.endIndex = endIndex;
  }
  Timed$RangeResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RangeResult',
    interfaces: []
  };
  Timed$RangeResult.prototype.component1 = function () {
    return this.startIndex;
  };
  Timed$RangeResult.prototype.component2 = function () {
    return this.endIndex;
  };
  Timed$RangeResult.prototype.copy_vux9f0$ = function (startIndex, endIndex) {
    return new Timed$RangeResult(startIndex === void 0 ? this.startIndex : startIndex, endIndex === void 0 ? this.endIndex : endIndex);
  };
  Timed$RangeResult.prototype.toString = function () {
    return 'RangeResult(startIndex=' + Kotlin.toString(this.startIndex) + (', endIndex=' + Kotlin.toString(this.endIndex)) + ')';
  };
  Timed$RangeResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.startIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.endIndex) | 0;
    return result;
  };
  Timed$RangeResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.startIndex, other.startIndex) && Kotlin.equals(this.endIndex, other.endIndex)))));
  };
  Timed.prototype.getRangeValues_ex6w2q$ = function (startTime, endTime, out) {
    if (out === void 0) {
      out = ArrayList_init_1();
    }
    var tmp$, tmp$_0;
    var range = this.getRangeIndices_b4nn5q$(startTime, endTime);
    tmp$ = range.startIndex;
    tmp$_0 = range.endIndex;
    for (var n = tmp$; n <= tmp$_0; n++) {
      var element = this.objects.get_za3lpa$(n);
      out.add_11rb$(element);
    }
    return out;
  };
  Timed.prototype.getRangeIndices_b4nn5q$ = function (startTime, endTime, out) {
    if (out === void 0)
      out = new Timed$RangeResult();
    var startIndex = clamp(this.findNearIndex_za3lpa$(startTime) - 1 | 0, 0, this.size - 1 | 0);
    var endIndex = clamp(this.findNearIndex_za3lpa$(endTime) + 1 | 0, 0, this.size - 1 | 0);
    var min = 2147483647;
    var max = -2147483648;
    for (var n = startIndex; n <= endIndex; n++) {
      var time = this.times.get_za3lpa$(n);
      if (startTime <= time && time <= endTime) {
        var a = min;
        min = Math_0.min(a, n);
        var a_0 = max;
        max = Math_0.max(a_0, n);
      }
    }
    out.startIndex = min;
    out.endIndex = max;
    return out;
  };
  Timed.prototype.forEachInRange_x63f18$ = defineInlineFunction('korge-js.com.soywiz.korge.animate.Timed.forEachInRange_x63f18$', wrapFunction(function () {
    var clamp = _.$$importsForInline$$['kmem-js'].com.soywiz.kmem.clamp_e4yvb3$;
    return function (startTime, endTime, maxCalls, callback) {
      if (maxCalls === void 0)
        maxCalls = 2147483647;
      var startIndex = clamp(this.findNearIndex_za3lpa$(startTime) - 1 | 0, 0, this.size - 1 | 0);
      var endIndex = clamp(this.findNearIndex_za3lpa$(endTime) + 1 | 0, 0, this.size - 1 | 0);
      var totalCalls = 0;
      for (var n = startIndex; n <= endIndex; n++) {
        var time = this.times.get_za3lpa$(n);
        var obj = this.objects.get_za3lpa$(n);
        if ((startTime + 1 | 0) <= time && time <= endTime) {
          callback(n, time, obj);
          totalCalls = totalCalls + 1 | 0;
          if (totalCalls >= maxCalls)
            break;
        }
      }
    };
  }));
  function Timed$Result(index, left, right, ratio) {
    if (index === void 0)
      index = 0;
    if (left === void 0)
      left = null;
    if (right === void 0)
      right = null;
    if (ratio === void 0)
      ratio = 0.0;
    this.index = index;
    this.left = left;
    this.right = right;
    this.ratio = ratio;
  }
  Timed$Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  Timed$Result.prototype.component1 = function () {
    return this.index;
  };
  Timed$Result.prototype.component2 = function () {
    return this.left;
  };
  Timed$Result.prototype.component3 = function () {
    return this.right;
  };
  Timed$Result.prototype.component4 = function () {
    return this.ratio;
  };
  Timed$Result.prototype.copy_rnsoye$ = function (index, left, right, ratio) {
    return new Timed$Result(index === void 0 ? this.index : index, left === void 0 ? this.left : left, right === void 0 ? this.right : right, ratio === void 0 ? this.ratio : ratio);
  };
  Timed$Result.prototype.toString = function () {
    return 'Result(index=' + Kotlin.toString(this.index) + (', left=' + Kotlin.toString(this.left)) + (', right=' + Kotlin.toString(this.right)) + (', ratio=' + Kotlin.toString(this.ratio)) + ')';
  };
  Timed$Result.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    result = result * 31 + Kotlin.hashCode(this.ratio) | 0;
    return result;
  };
  Timed$Result.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.index, other.index) && Kotlin.equals(this.left, other.left) && Kotlin.equals(this.right, other.right) && Kotlin.equals(this.ratio, other.ratio)))));
  };
  Timed.prototype.find_xgt0ho$ = function (time, out) {
    if (out === void 0)
      out = new Timed$Result();
    var findAndHandle_rankz6$result;
    findAndHandle_rankz6$break: do {
      if (this.objects.isEmpty()) {
        out.index = 0;
        out.left = null;
        out.right = null;
        out.ratio = 0.0;
        findAndHandle_rankz6$result = out;
        break findAndHandle_rankz6$break;
      }
      var index = this.findNearIndex_za3lpa$(time);
      var timeAtIndex = this.times.get_za3lpa$(index);
      if (time < timeAtIndex && index <= 0) {
        var right = this.objects.get_za3lpa$(0);
        out.index = 0;
        out.left = null;
        out.right = right;
        out.ratio = 0.0;
        findAndHandle_rankz6$result = out;
      }
       else {
        var idx = time < timeAtIndex ? index - 1 | 0 : index;
        var curTimeAtIndex = this.times.get_za3lpa$(idx + 0 | 0);
        if (curTimeAtIndex === time) {
          var left = this.objects.get_za3lpa$(idx);
          out.index = idx;
          out.left = left;
          out.right = null;
          out.ratio = 0.0;
          findAndHandle_rankz6$result = out;
        }
         else {
          if (idx >= (this.times.size - 1 | 0)) {
            var index_0 = this.objects.size;
            var left_0 = this.objects.get_za3lpa$(this.objects.size - 1 | 0);
            out.index = index_0;
            out.left = left_0;
            out.right = null;
            out.ratio = 1.0;
            findAndHandle_rankz6$result = out;
          }
           else {
            var nextTimeAtIndex = this.times.get_za3lpa$(idx + 1 | 0);
            var elapsedTime = time - curTimeAtIndex | 0;
            var totalTime = nextTimeAtIndex - curTimeAtIndex | 0;
            var left_1 = this.objects.get_za3lpa$(idx);
            var right_0 = this.objects.get_za3lpa$(idx + 1 | 0);
            var ratio = elapsedTime / totalTime;
            out.index = idx;
            out.left = left_1;
            out.right = right_0;
            out.ratio = ratio;
            findAndHandle_rankz6$result = out;
          }
        }
      }
    }
     while (false);
    return findAndHandle_rankz6$result;
  };
  Timed.prototype.findAndHandle_rankz6$ = defineInlineFunction('korge-js.com.soywiz.korge.animate.Timed.findAndHandle_rankz6$', function (time, callback) {
    if (this.objects.isEmpty())
      return callback(0, null, null, 0.0);
    var index = this.findNearIndex_za3lpa$(time);
    var timeAtIndex = this.times.get_za3lpa$(index);
    if (time < timeAtIndex && index <= 0) {
      return callback(0, null, this.objects.get_za3lpa$(0), 0.0);
    }
     else {
      var idx = time < timeAtIndex ? index - 1 | 0 : index;
      var curTimeAtIndex = this.times.get_za3lpa$(idx + 0 | 0);
      if (curTimeAtIndex === time) {
        return callback(idx, this.objects.get_za3lpa$(idx), null, 0.0);
      }
       else {
        if (idx >= (this.times.size - 1 | 0)) {
          return callback(this.objects.size, this.objects.get_za3lpa$(this.objects.size - 1 | 0), null, 1.0);
        }
         else {
          var nextTimeAtIndex = this.times.get_za3lpa$(idx + 1 | 0);
          var elapsedTime = time - curTimeAtIndex | 0;
          var totalTime = nextTimeAtIndex - curTimeAtIndex | 0;
          return callback(idx, this.objects.get_za3lpa$(idx), this.objects.get_za3lpa$(idx + 1 | 0), elapsedTime / totalTime);
        }
      }
    }
  });
  Timed.prototype.findWithoutInterpolation_xgt0ho$ = function (time, out) {
    if (out === void 0)
      out = new Timed$Result();
    var findAndHandleWithoutInterpolation_gqpst9$result;
    findAndHandleWithoutInterpolation_gqpst9$break: do {
      var tmp$;
      if (this.objects.isEmpty()) {
        out.index = 0;
        out.left = null;
        out.right = null;
        out.ratio = 0.0;
        findAndHandleWithoutInterpolation_gqpst9$result = out;
        break findAndHandleWithoutInterpolation_gqpst9$break;
      }
      var index = this.findNearIndex_za3lpa$(time);
      var timeAtIndex = this.times.get_za3lpa$(index);
      if (time < timeAtIndex && index <= 0) {
        out.index = 0;
        out.left = null;
        out.right = null;
        out.ratio = 0.0;
        tmp$ = out;
      }
       else {
        var idx = time < timeAtIndex ? index - 1 | 0 : index;
        var curTimeAtIndex = this.times.get_za3lpa$(idx + 0 | 0);
        if (curTimeAtIndex === time) {
          var left = this.objects.get_za3lpa$(idx);
          out.index = idx;
          out.left = left;
          out.right = null;
          out.ratio = 0.0;
          tmp$ = out;
        }
         else if (idx >= (this.times.size - 1 | 0)) {
          var index_0 = this.objects.size;
          var left_0 = this.objects.get_za3lpa$(this.objects.size - 1 | 0);
          out.index = index_0;
          out.left = left_0;
          out.right = null;
          out.ratio = 0.0;
          tmp$ = out;
        }
         else {
          var left_1 = this.objects.get_za3lpa$(idx);
          out.index = idx;
          out.left = left_1;
          out.right = null;
          out.ratio = 0.0;
          tmp$ = out;
        }
      }
      findAndHandleWithoutInterpolation_gqpst9$result = tmp$;
    }
     while (false);
    return findAndHandleWithoutInterpolation_gqpst9$result;
  };
  Timed.prototype.findAndHandleWithoutInterpolation_gqpst9$ = defineInlineFunction('korge-js.com.soywiz.korge.animate.Timed.findAndHandleWithoutInterpolation_gqpst9$', function (time, callback) {
    var tmp$;
    if (this.objects.isEmpty())
      return callback(0, null);
    var index = this.findNearIndex_za3lpa$(time);
    var timeAtIndex = this.times.get_za3lpa$(index);
    if (time < timeAtIndex && index <= 0) {
      tmp$ = callback(0, null);
    }
     else {
      var idx = time < timeAtIndex ? index - 1 | 0 : index;
      var curTimeAtIndex = this.times.get_za3lpa$(idx + 0 | 0);
      if (curTimeAtIndex === time)
        tmp$ = callback(idx, this.objects.get_za3lpa$(idx));
      else if (idx >= (this.times.size - 1 | 0))
        tmp$ = callback(this.objects.size, this.objects.get_za3lpa$(this.objects.size - 1 | 0));
      else
        tmp$ = callback(idx, this.objects.get_za3lpa$(idx));
    }
    return tmp$;
  });
  Timed.prototype.toString = function () {
    return 'Timed(' + this.entries + ')';
  };
  Timed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Timed',
    interfaces: []
  };
  function readAni$lambda(closure$file_0, closure$views_0) {
    return function (index_0, continuation_0, suspended) {
      var instance = new Coroutine$readAni$lambda(closure$file_0, closure$views_0, index_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$readAni$lambda(closure$file_0, closure$views_0, index_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
    this.local$closure$views = closure$views_0;
    this.local$index = index_0;
  }
  Coroutine$readAni$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAni$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAni$lambda.prototype.constructor = Coroutine$readAni$lambda;
  Coroutine$readAni$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBitmapOptimized(this.local$closure$file.withExtension_61zpoe$('ani.' + this.local$index + '.png'), this.local$closure$views.imageFormats, this);
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
  function readAni$lambda_0(closure$file_0) {
    return function (index_0, continuation_0, suspended) {
      var instance = new Coroutine$readAni$lambda_0(closure$file_0, index_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$readAni$lambda_0(closure$file_0, index_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
    this.local$index = index_0;
  }
  Coroutine$readAni$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAni$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAni$lambda_0.prototype.constructor = Coroutine$readAni$lambda_0;
  Coroutine$readAni$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readNativeSoundOptimized(this.local$closure$file.withExtension_61zpoe$('ani.' + this.local$index + '.mp3'), void 0, this);
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
  function readAni($receiver_0, views_0, content_0, continuation_0, suspended) {
    var instance = new Coroutine$readAni($receiver_0, views_0, content_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readAni($receiver_0, views_0, content_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$file = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
    this.local$content = content_0;
  }
  Coroutine$readAni.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAni.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAni.prototype.constructor = Coroutine$readAni;
  Coroutine$readAni.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$content === void 0)
              this.local$content = null;
            this.local$file = this.local$$receiver;
            this.local$tmp$ = AnLibraryDeserializer_getInstance();
            if (this.local$content == null) {
              this.state_0 = 2;
              this.result_0 = this.local$$receiver.readBytes(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.local$content = new FastByteArrayInputStream(this.result_0);
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.local$tmp$.read_splst$(this.local$content, this.local$views, new AnLibraryDeserializer$ExternalReaders(readAni$lambda(this.local$file, this.local$views), readAni$lambda_0(this.local$file)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
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
  function AnLibraryDeserializer() {
    AnLibraryDeserializer_instance = this;
  }
  function AnLibraryDeserializer$ExternalReaders(atlasReader, readSound) {
    this.atlasReader = atlasReader;
    this.readSound = readSound;
  }
  AnLibraryDeserializer$ExternalReaders.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExternalReaders',
    interfaces: []
  };
  AnLibraryDeserializer.prototype.read_yyxl0s$ = function (s, views, externalReaders, continuation) {
    return this.readLibrary_0(new FastByteArrayInputStream(s), views, externalReaders, continuation);
  };
  AnLibraryDeserializer.prototype.read_61jkx5$ = function (s, views, externalReaders, continuation) {
    return this.readLibrary_0(new FastByteArrayInputStream(readAll(s)), views, externalReaders, continuation);
  };
  AnLibraryDeserializer.prototype.read_splst$ = function (s, views, externalReaders, continuation) {
    return this.readLibrary_0(s, views, externalReaders, continuation);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  AnLibraryDeserializer.prototype.readLibrary_0 = function ($receiver_0, views_0, externalReaders_0, continuation_0, suspended) {
    var instance = new Coroutine$readLibrary_0(this, $receiver_0, views_0, externalReaders_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$readLibrary_0($this, $receiver_0, views_0, externalReaders_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$library = void 0;
    this.local$strings = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$atlases = void 0;
    this.local$destination_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
    this.local$externalReaders = externalReaders_0;
  }
  Coroutine$readLibrary_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readLibrary_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readLibrary_0.prototype.constructor = Coroutine$readLibrary_0;
  Coroutine$readLibrary_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            var magic = this.local$$receiver.readStringz_uyw3ma$(8);
            if (!equals(magic, AniFile_getInstance().MAGIC))
              invalidOp('Not a KORGEANI file');
            if (this.local$$receiver.readU_VL() !== 16)
              invalidOp('Just supported KORGEANI version 16');
            var msPerFrame = this.local$$receiver.readU_VL();
            var width = this.local$$receiver.readU_VL();
            var height = this.local$$receiver.readU_VL();
            var fileFlags = this.local$$receiver.readU_VL();
            var mipmaps = extract(fileFlags, 0);
            var smoothInterpolation = !extract(fileFlags, 1);
            var $receiver = new AnLibrary(this.local$views, width, height, 1000.0 / msPerFrame);
            $receiver.defaultSmoothing = smoothInterpolation;
            this.local$library = $receiver;
            var $receiver_0 = until(1, this.local$$receiver.readU_VL());
            var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
            var tmp$_0;
            tmp$_0 = $receiver_0.iterator();
            while (tmp$_0.hasNext()) {
              var item = tmp$_0.next();
              destination.add_11rb$(this.local$$receiver.readStringVL_qa9gbo$());
            }

            this.local$strings = plus([null], destination);
            var $receiver_1 = until(0, this.local$$receiver.readU_VL());
            this.local$destination = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
            this.local$tmp$ = $receiver_1.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var item_0 = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.state_0 = 3;
            this.result_0 = this.local$externalReaders.atlasReader(item_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var bmp = this.result_0;
            this.local$tmp$_0.call(this.local$destination, to(bmp, slice(bmp)));
            this.state_0 = 2;
            continue;
          case 4:
            this.local$atlases = this.local$destination;
            var $receiver_2 = until(0, this.local$$receiver.readU_VL());
            this.local$destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
            this.local$tmp$_1 = $receiver_2.iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var item_1 = this.local$tmp$_1.next();
            this.local$tmp$_2 = this.local$destination_0.add_11rb$;
            this.state_0 = 6;
            this.result_0 = this.local$externalReaders.readSound(item_1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_2.call(this.local$destination_0, this.result_0);
            this.state_0 = 5;
            continue;
          case 7:
            var sounds = this.local$destination_0;
            var $receiver_3 = until(0, this.local$$receiver.readU_VL());
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
            var tmp$_1;
            tmp$_1 = $receiver_3.iterator();
            while (tmp$_1.hasNext()) {
              var item_2 = tmp$_1.next();
              destination_0.add_11rb$(this.$this.readSymbol_0(this.local$$receiver, this.local$strings, this.local$atlases, sounds));
            }

            var symbols = destination_0;
            tmp$ = symbols.iterator();
            while (tmp$.hasNext()) {
              var symbol = tmp$.next();
              this.local$library.addSymbol_lvjwfe$(symbol);
            }

            this.local$library.processSymbolNames();
            return this.local$library;
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
  AnLibraryDeserializer.prototype.readSymbol_0 = function ($receiver, strings, atlases, sounds) {
    var tmp$, tmp$_0;
    var symbolId = $receiver.readU_VL();
    var symbolName = strings[$receiver.readU_VL()];
    var type = $receiver.readU_VL();
    switch (type) {
      case 0:
        tmp$_0 = AnSymbolEmpty_getInstance();
        break;
      case 1:
        var soundId = $receiver.readU_VL();
        tmp$_0 = new AnSymbolSound(symbolId, symbolName, sounds.get_za3lpa$(soundId), null);
        break;
      case 2:
        var initialText = strings[$receiver.readU_VL()];
        var bounds = this.readRect_l4re4c$($receiver);
        tmp$_0 = new AnTextFieldSymbol(symbolId, symbolName, initialText != null ? initialText : '', bounds);
        break;
      case 3:
        var scale = $receiver.readF32_le();
        var bitmapId = $receiver.readU_VL();
        var atlas = atlases.get_za3lpa$(bitmapId);
        var textureBounds = this.readIRect_l4re4c$($receiver);
        var bounds_0 = this.readRect_l4re4c$($receiver);
        var bitmap = atlas.first;
        var texture = atlas.second;
        switch ($receiver.readU_VL()) {
          case 0:
            tmp$ = null;
            break;
          case 1:
            var cmds = new Int32Array($receiver.readU_VL());
            for (var n = 0; n < cmds.length; n++)
              cmds[n] = $receiver.readU8();
            var data = new Float64Array($receiver.readU_VL());
            for (var n_0 = 0; n_0 < data.length; n_0++)
              data[n_0] = $receiver.readF32_le();
            tmp$ = new VectorPath(IntArrayList_init(cmds.slice()), DoubleArrayList_init(data.slice()));
            break;
          default:tmp$ = null;
            break;
        }

        var path = tmp$;
        tmp$_0 = new AnSymbolShape(symbolId, symbolName, bounds_0, new TextureWithBitmapSlice(texture.slice_t9mhyo$(textureBounds), slice(bitmap, textureBounds), scale, bounds_0), path);
        break;
      case 6:
        var nframes = $receiver.readU_VL();
        var texturesWithBitmap = new Timed(nframes);
        for (var n_1 = 0; n_1 < nframes; n_1++) {
          var ratio1000 = $receiver.readU_VL();
          var scale_0 = $receiver.readF32_le();
          var bitmapId_0 = $receiver.readU_VL();
          var bounds_1 = this.readRect_l4re4c$($receiver);
          var textureBounds_0 = this.readIRect_l4re4c$($receiver);
          var atlas_0 = atlases.get_za3lpa$(bitmapId_0);
          var bitmap_0 = atlas_0.first;
          var texture_0 = atlas_0.second;
          texturesWithBitmap.add_wxm5ur$(ratio1000, new TextureWithBitmapSlice(texture_0.slice_t9mhyo$(textureBounds_0), slice(bitmap_0, textureBounds_0), scale_0, bounds_1));
        }

        tmp$_0 = new AnSymbolMorphShape(symbolId, symbolName, new Rectangle(), texturesWithBitmap, null);
        break;
      case 4:
        tmp$_0 = new AnSymbolBitmap(symbolId, symbolName, new Bitmap32(1, 1));
        break;
      case 5:
        tmp$_0 = this.readMovieClip_0($receiver, symbolId, symbolName, strings);
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Type: ' + type));
    }
    var symbol = tmp$_0;
    return symbol;
  };
  AnLibraryDeserializer.prototype.readMovieClip_0 = function ($receiver, symbolId, symbolName, strings) {
    var mcFlags = $receiver.readU8();
    var totalDepths = $receiver.readU_VL();
    var totalFrames = $receiver.readU_VL();
    var totalTime = $receiver.readU_VL();
    var totalUids = $receiver.readU_VL();
    var $receiver_0 = until(0, totalUids);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var charId = $receiver.readU_VL();
      var extraPropsString = $receiver.readStringVL_qa9gbo$();
      var extraProps = extraPropsString.length === 0 ? LinkedHashMap_init() : Kotlin.isType(tmp$_1 = json.Json.decode_61zpoe$(extraPropsString), MutableMap) ? tmp$_1 : throwCCE();
      tmp$_0.call(destination, new AnSymbolUidDef(charId, extraProps));
    }
    var uidsToCharacterIds = copyToArray(destination);
    var mc = new AnSymbolMovieClip(symbolId, symbolName, new AnSymbolLimits(totalDepths, totalFrames, totalUids, totalTime));
    if (extract(mcFlags, 0)) {
      mc.ninePatch = this.readRect_l4re4c$($receiver);
    }
    var $receiver_1 = until(0, $receiver.readU_VL());
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_2;
    tmp$_2 = $receiver_1.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      var tmp$_3 = destination_0.add_11rb$;
      var tmp$_4, tmp$_5, tmp$_6;
      var ss = new AnSymbolMovieClipSubTimeline(totalDepths);
      ss.totalTime = $receiver.readU_VL();
      var stateFlags = $receiver.readU8();
      ss.nextStatePlay = extract(stateFlags, 0);
      ss.nextState = strings[$receiver.readU_VL()];
      var numberOfActionFrames = $receiver.readU_VL();
      var lastFrameTimeInMs = 0;
      for (var n = 0; n < numberOfActionFrames; n++) {
        var deltaTime = $receiver.readU_VL();
        var timeInMs = lastFrameTimeInMs + deltaTime | 0;
        lastFrameTimeInMs = timeInMs;
        var $receiver_2 = until(0, $receiver.readU_VL());
        var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
        var tmp$_7;
        tmp$_7 = $receiver_2.iterator();
        loop_label: while (tmp$_7.hasNext()) {
          var item_1 = tmp$_7.next();
          var tmp$_8 = destination_1.add_11rb$;
          var transform$result;
          transform$break: do {
            var tmp$_9;
            var action = $receiver.readU8();
            switch (action) {
              case 0:
                transform$result = new AnPlaySoundAction($receiver.readU_VL());
                break transform$break;
              case 1:
                transform$result = new AnEventAction((tmp$_9 = strings[$receiver.readU_VL()]) != null ? tmp$_9 : '');
                break transform$break;
              default:throw new NotImplementedError_init();
            }
          }
           while (false);
          tmp$_8.call(destination_1, transform$result);
        }
        var actions = destination_1;
        tmp$_4 = actions.iterator();
        while (tmp$_4.hasNext()) {
          var action_0 = tmp$_4.next();
          ss.actions.add_wxm5ur$(timeInMs * 1000 | 0, action_0);
        }
      }
      for (var depth = 0; depth < totalDepths; depth++) {
        var timeline = ss.timelines[depth];
        var lastUid = -1;
        var lastName = null;
        var lastColorTransform = new ColorTransform();
        var lastMatrix = new Matrix2d();
        var lastClipDepth = -1;
        var lastRatio = 0.0;
        var lastFrameTime = 0;
        var lastBlendMode = BlendMode$INHERIT_getInstance();
        tmp$_5 = $receiver.readU_VL();
        for (var frameIndex = 0; frameIndex < tmp$_5; frameIndex++) {
          var deltaFrameTime = $receiver.readU_VL();
          var frameTime = lastFrameTime + deltaFrameTime | 0;
          lastFrameTime = frameTime;
          var flags = $receiver.readU_VL();
          var hasUid = extract(flags, 0);
          var hasName = extract(flags, 1);
          var hasColorTransform = extract(flags, 2);
          var hasMatrix = extract(flags, 3);
          var hasClipDepth = extract(flags, 4);
          var hasRatio = extract(flags, 5);
          var hasAlpha = extract(flags, 6);
          var hasBlendMode = extract(flags, 7);
          if (hasUid)
            lastUid = $receiver.readU_VL();
          if (hasClipDepth)
            lastClipDepth = $receiver.readS16_le();
          if (hasName)
            lastName = strings[$receiver.readU_VL()];
          if (hasAlpha) {
            var ct = lastColorTransform.copy_s3cjg4$();
            ct.mA = $receiver.readU8() / 255.0;
            lastColorTransform = ct;
          }
           else if (hasColorTransform) {
            var ct_0 = lastColorTransform.copy_s3cjg4$();
            var ctFlags = $receiver.readU8();
            if (extract(ctFlags, 0))
              ct_0.mR = $receiver.readU8() / 255.0;
            if (extract(ctFlags, 1))
              ct_0.mG = $receiver.readU8() / 255.0;
            if (extract(ctFlags, 2))
              ct_0.mB = $receiver.readU8() / 255.0;
            if (extract(ctFlags, 3))
              ct_0.mA = $receiver.readU8() / 255.0;
            if (extract(ctFlags, 4))
              ct_0.aR = $receiver.readS8() * 2;
            if (extract(ctFlags, 5))
              ct_0.aG = $receiver.readS8() * 2;
            if (extract(ctFlags, 6))
              ct_0.aB = $receiver.readS8() * 2;
            if (extract(ctFlags, 7))
              ct_0.aR = $receiver.readS8() * 2;
            lastColorTransform = ct_0;
          }
          if (hasMatrix) {
            var lm = lastMatrix.copy_15yvbs$();
            var matrixFlags = $receiver.readU8();
            if (extract(matrixFlags, 0))
              lm.a = $receiver.readS_VL() / 16384.0;
            if (extract(matrixFlags, 1))
              lm.b = $receiver.readS_VL() / 16384.0;
            if (extract(matrixFlags, 2))
              lm.c = $receiver.readS_VL() / 16384.0;
            if (extract(matrixFlags, 3))
              lm.d = $receiver.readS_VL() / 16384.0;
            if (extract(matrixFlags, 4))
              lm.tx = $receiver.readS_VL() / 20.0;
            if (extract(matrixFlags, 5))
              lm.ty = $receiver.readS_VL() / 20.0;
            lastMatrix = lm;
          }
          if (hasRatio)
            lastRatio = $receiver.readU8() / 255.0;
          if (hasBlendMode) {
            lastBlendMode = (tmp$_6 = BlendMode$Companion_getInstance().BY_ORDINAL.get_11rb$($receiver.readU8())) != null ? tmp$_6 : BlendMode$INHERIT_getInstance();
          }
          timeline.add_wxm5ur$(frameTime * 1000 | 0, new AnSymbolTimelineFrame(depth, lastUid, lastClipDepth, lastRatio, lastMatrix, lastName, lastColorTransform, lastBlendMode));
        }
      }
      tmp$_3.call(destination_0, ss);
    }
    var symbolStates = destination_0;
    for (var n_0 = 0; n_0 < uidsToCharacterIds.length; n_0++)
      mc.uidInfo[n_0] = uidsToCharacterIds[n_0];
    var tmp$_10 = mc.states;
    var $receiver_3 = until(0, $receiver.readU_VL());
    var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
    var tmp$_11;
    tmp$_11 = $receiver_3.iterator();
    while (tmp$_11.hasNext()) {
      var item_2 = tmp$_11.next();
      var tmp$_12 = destination_2.add_11rb$;
      var tmp$_13;
      var name = (tmp$_13 = strings[$receiver.readU_VL()]) != null ? tmp$_13 : '';
      var startTime = $receiver.readU_VL();
      var stateIndex = $receiver.readU_VL();
      symbolStates.get_za3lpa$(stateIndex).actions.add_wxm5ur$(startTime, new AnEventAction(name));
      tmp$_12.call(destination_2, to(name, new AnSymbolMovieClipState(name, symbolStates.get_za3lpa$(stateIndex), startTime)));
    }
    var map = toMap(destination_2);
    tmp$_10.putAll_a2k3zr$(map);
    return mc;
  };
  AnLibraryDeserializer.prototype.readRect_l4re4c$ = function ($receiver) {
    return new Rectangle($receiver.readS_VL() / 20.0, $receiver.readS_VL() / 20.0, $receiver.readS_VL() / 20.0, $receiver.readS_VL() / 20.0);
  };
  AnLibraryDeserializer.prototype.readIRect_l4re4c$ = function ($receiver) {
    return RectangleInt_init($receiver.readS_VL(), $receiver.readS_VL(), $receiver.readS_VL(), $receiver.readS_VL());
  };
  AnLibraryDeserializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AnLibraryDeserializer',
    interfaces: []
  };
  var AnLibraryDeserializer_instance = null;
  function AnLibraryDeserializer_getInstance() {
    if (AnLibraryDeserializer_instance === null) {
      new AnLibraryDeserializer();
    }
    return AnLibraryDeserializer_instance;
  }
  function writeTo$lambda(closure$file_0, closure$format_0, closure$props_0) {
    return function (index_0, atlas_0, continuation_0, suspended) {
      var instance = new Coroutine$writeTo$lambda(closure$file_0, closure$format_0, closure$props_0, index_0, atlas_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$writeTo$lambda(closure$file_0, closure$format_0, closure$props_0, index_0, atlas_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
    this.local$closure$format = closure$format_0;
    this.local$closure$props = closure$props_0;
    this.local$index = index_0;
    this.local$atlas = atlas_0;
  }
  Coroutine$writeTo$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeTo$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeTo$lambda.prototype.constructor = Coroutine$writeTo$lambda;
  Coroutine$writeTo$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = writeBitmap(this.local$closure$file.withExtension_61zpoe$('ani.' + this.local$index + '.png'), this.local$atlas, this.local$closure$format, this.local$closure$props, this);
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
  function writeTo$lambda_0(closure$file_0) {
    return function (index_0, soundData_0, continuation_0, suspended) {
      var instance = new Coroutine$writeTo$lambda_0(closure$file_0, index_0, soundData_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$writeTo$lambda_0(closure$file_0, index_0, soundData_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$file = closure$file_0;
    this.local$index = index_0;
    this.local$soundData = soundData_0;
  }
  Coroutine$writeTo$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeTo$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeTo$lambda_0.prototype.constructor = Coroutine$writeTo$lambda_0;
  Coroutine$writeTo$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$file.withExtension_61zpoe$('ani.' + this.local$index + '.mp3').write_bdsgvo$(this.local$soundData, [], this);
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
  function writeTo($receiver_0, file_0, config_0, continuation_0, suspended) {
    var instance = new Coroutine$writeTo($receiver_0, file_0, config_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$writeTo($receiver_0, file_0, config_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$file = file_0;
    this.local$config = config_0;
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
            if (this.local$config === void 0)
              this.local$config = new AnLibrarySerializer$Config();
            var format_0 = format.PNG;
            var props = new ImageEncodingProps(void 0, this.local$config.compression);
            this.state_0 = 2;
            this.result_0 = AnLibrarySerializer_getInstance().gen_y7lps0$(this.local$$receiver, this.local$config, new AnLibrarySerializer$ExternalWriters(writeTo$lambda(this.local$file, format_0, props), writeTo$lambda_0(this.local$file)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$file.write_bdsgvo$(this.result_0, [], this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function AnLibrarySerializer() {
    AnLibrarySerializer_instance = this;
  }
  function AnLibrarySerializer$ExternalWriters(writeAtlas, writeSound) {
    this.writeAtlas = writeAtlas;
    this.writeSound = writeSound;
  }
  AnLibrarySerializer$ExternalWriters.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ExternalWriters',
    interfaces: []
  };
  function AnLibrarySerializer$Config(compression, keepPaths, mipmaps, smoothInterpolation) {
    if (compression === void 0)
      compression = 1.0;
    if (keepPaths === void 0)
      keepPaths = false;
    if (mipmaps === void 0)
      mipmaps = true;
    if (smoothInterpolation === void 0)
      smoothInterpolation = true;
    this.compression = compression;
    this.keepPaths = keepPaths;
    this.mipmaps = mipmaps;
    this.smoothInterpolation = smoothInterpolation;
  }
  AnLibrarySerializer$Config.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Config',
    interfaces: []
  };
  var ByteArrayBuffer_init = $module$korio_js.$$importsForInline$$['kmem-js'].com.soywiz.kmem.ByteArrayBuffer_init_za3lpa$;
  var MemorySyncStream = $module$korio_js.com.soywiz.korio.stream.MemorySyncStream_yyklod$;
  AnLibrarySerializer.prototype.gen_y7lps0$ = function (library_0, config_0, externalWriters_0, continuation_0, suspended) {
    var instance = new Coroutine$gen_y7lps0$(this, library_0, config_0, externalWriters_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$gen_y7lps0$($this, library_0, config_0, externalWriters_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$buffer = void 0;
    this.local$library = library_0;
    this.local$config = config_0;
    this.local$externalWriters = externalWriters_0;
  }
  Coroutine$gen_y7lps0$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$gen_y7lps0$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$gen_y7lps0$.prototype.constructor = Coroutine$gen_y7lps0$;
  Coroutine$gen_y7lps0$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$config === void 0)
              this.local$config = new AnLibrarySerializer$Config();
            this.local$buffer = ByteArrayBuffer_init(4096);
            var s = MemorySyncStream(this.local$buffer);
            this.state_0 = 2;
            this.result_0 = this.$this.write_t81cod$(s, this.local$library, this.local$config, this.local$externalWriters, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$buffer.toByteArray();
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
  AnLibrarySerializer.prototype.write_t81cod$ = function (s, library, config, externalWriters, continuation) {
    if (config === void 0)
      config = new AnLibrarySerializer$Config();
    return this.writeLibrary_0(s, library, config, externalWriters, continuation);
  };
  AnLibrarySerializer.prototype.writeRect_0 = function ($receiver, r) {
    writeS_VL($receiver, numberToInt(r.x * 20));
    writeS_VL($receiver, numberToInt(r.y * 20));
    writeS_VL($receiver, numberToInt(r.width * 20));
    writeS_VL($receiver, numberToInt(r.height * 20));
  };
  AnLibrarySerializer.prototype.writeIRect_0 = function ($receiver, r) {
    writeS_VL($receiver, r.x);
    writeS_VL($receiver, r.y);
    writeS_VL($receiver, r.width);
    writeS_VL($receiver, r.height);
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  AnLibrarySerializer.prototype.writeLibrary_0 = function ($receiver_0, lib_0, config_0, externalWriters_0, continuation_0, suspended) {
    var instance = new Coroutine$writeLibrary_0(this, $receiver_0, lib_0, config_0, externalWriters_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$writeLibrary_0($this, $receiver_0, lib_0, config_0, externalWriters_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$_6 = void 0;
    this.local$tmp$_7 = void 0;
    this.local$strings = void 0;
    this.local$atlasBitmapsToId = void 0;
    this.local$soundsToId = void 0;
    this.local$$receiver = $receiver_0;
    this.local$lib = lib_0;
    this.local$config = config_0;
    this.local$externalWriters = externalWriters_0;
  }
  Coroutine$writeLibrary_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeLibrary_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeLibrary_0.prototype.constructor = Coroutine$writeLibrary_0;
  Coroutine$writeLibrary_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
            var tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20;
            writeStringz(this.local$$receiver, AniFile_getInstance().MAGIC, 8);
            writeU_VL(this.local$$receiver, 16);
            writeU_VL(this.local$$receiver, this.local$lib.msPerFrame);
            writeU_VL(this.local$$receiver, this.local$lib.width);
            writeU_VL(this.local$$receiver, this.local$lib.height);
            writeU_VL(this.local$$receiver, insert(insert(0, this.local$config.mipmaps, 0), !this.local$config.smoothInterpolation, 1));
            this.local$strings = new OptimizedStringAllocator();
            tmp$ = this.local$lib.symbolsById.iterator();
            while (tmp$.hasNext()) {
              var symbol = tmp$.next();
              this.local$strings.add_pdl1vj$(symbol.name);
              if (Kotlin.isType(symbol, AnSymbolMovieClip)) {
                tmp$_0 = symbol.states.entries.iterator();
                while (tmp$_0.hasNext()) {
                  var ss = tmp$_0.next();
                  this.local$strings.add_pdl1vj$(ss.key);
                  this.local$strings.add_pdl1vj$(ss.value.subTimeline.nextState);
                  tmp$_1 = ss.value.subTimeline.timelines;
                  for (tmp$_2 = 0; tmp$_2 !== tmp$_1.length; ++tmp$_2) {
                    var timeline = tmp$_1[tmp$_2];
                    tmp$_3 = timeline.entries.iterator();
                    while (tmp$_3.hasNext()) {
                      var entry = tmp$_3.next();
                      this.local$strings.add_pdl1vj$(entry.second.name);
                    }
                  }
                  tmp$_4 = ss.value.subTimeline.actions.objects.iterator();
                  while (tmp$_4.hasNext()) {
                    var action = tmp$_4.next();
                    if (Kotlin.isType(action, AnEventAction))
                      this.local$strings.add_pdl1vj$(action.event);
                  }
                }
              }
               else if (Kotlin.isType(symbol, AnTextFieldSymbol))
                this.local$strings.add_pdl1vj$(symbol.initialHtml);
            }

            this.local$strings.finalize();
            writeU_VL(this.local$$receiver, this.local$strings.strings.length);
            tmp$_5 = drop(this.local$strings.strings, 1).iterator();
            while (tmp$_5.hasNext()) {
              var str = tmp$_5.next();
              writeStringVL(this.local$$receiver, ensureNotNull(str));
            }

            var $receiver = this.local$lib.symbolsById;
            var destination = ArrayList_init_1();
            var tmp$_21;
            tmp$_21 = $receiver.iterator();
            while (tmp$_21.hasNext()) {
              var element = tmp$_21.next();
              if (Kotlin.isType(element, AnSymbolShape))
                destination.add_11rb$(element);
            }

            var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
            var tmp$_22;
            tmp$_22 = destination.iterator();
            while (tmp$_22.hasNext()) {
              var item = tmp$_22.next();
              var tmp$_23, tmp$_24;
              destination_0.add_11rb$((tmp$_24 = (tmp$_23 = item.textureWithBitmap) != null ? tmp$_23.bitmapSlice : null) != null ? tmp$_24.bmp : null);
            }

            var $receiver_0 = this.local$lib.symbolsById;
            var destination_1 = ArrayList_init_1();
            var tmp$_25;
            tmp$_25 = $receiver_0.iterator();
            while (tmp$_25.hasNext()) {
              var element_0 = tmp$_25.next();
              if (Kotlin.isType(element_0, AnSymbolMorphShape))
                destination_1.add_11rb$(element_0);
            }

            var destination_2 = ArrayList_init_1();
            var tmp$_26;
            tmp$_26 = destination_1.iterator();
            while (tmp$_26.hasNext()) {
              var element_1 = tmp$_26.next();
              var $receiver_1 = element_1.texturesWithBitmap.entries;
              var destination_3 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
              var tmp$_27;
              tmp$_27 = $receiver_1.iterator();
              while (tmp$_27.hasNext()) {
                var item_0 = tmp$_27.next();
                destination_3.add_11rb$(item_0.second.bitmapSlice.bmp);
              }
              var list = destination_3;
              addAll(destination_2, list);
            }

            var $receiver_2 = listOf([destination_0, destination_2]);
            var destination_4 = ArrayList_init_1();
            var tmp$_28;
            tmp$_28 = $receiver_2.iterator();
            while (tmp$_28.hasNext()) {
              var element_2 = tmp$_28.next();
              var list_0 = element_2;
              addAll(destination_4, list_0);
            }

            var atlasBitmaps = distinct(filterNotNull(destination_4));
            var $receiver_3 = withIndex(atlasBitmaps);
            var destination_5 = ArrayList_init_0(collectionSizeOrDefault($receiver_3, 10));
            var tmp$_29;
            tmp$_29 = $receiver_3.iterator();
            while (tmp$_29.hasNext()) {
              var item_1 = tmp$_29.next();
              destination_5.add_11rb$(to(item_1.value, item_1.index));
            }

            this.local$atlasBitmapsToId = toMap(destination_5);
            writeU_VL(this.local$$receiver, atlasBitmaps.size);
            this.local$tmp$_6 = this.local$atlasBitmapsToId.entries.iterator();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$_6.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var tmp$_30 = this.local$tmp$_6.next();
            var atlas = tmp$_30.key;
            var index = tmp$_30.value;
            this.state_0 = 3;
            this.result_0 = this.local$externalWriters.writeAtlas(index, atlas, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            var $receiver_4 = this.local$lib.symbolsById;
            var destination_6 = ArrayList_init_1();
            var tmp$_31;
            tmp$_31 = $receiver_4.iterator();
            while (tmp$_31.hasNext()) {
              var element_3 = tmp$_31.next();
              if (Kotlin.isType(element_3, AnSymbolSound))
                destination_6.add_11rb$(element_3);
            }

            var $receiver_5 = withIndex(destination_6);
            var destination_7 = ArrayList_init_0(collectionSizeOrDefault($receiver_5, 10));
            var tmp$_32;
            tmp$_32 = $receiver_5.iterator();
            while (tmp$_32.hasNext()) {
              var item_2 = tmp$_32.next();
              destination_7.add_11rb$(to(item_2.value, item_2.index));
            }

            this.local$soundsToId = toMap(destination_7);
            writeU_VL(this.local$$receiver, this.local$soundsToId.size);
            this.local$tmp$_7 = this.local$soundsToId.entries.iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$_7.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var tmp$_33 = this.local$tmp$_7.next();
            var sound = tmp$_33.key;
            var index_0 = tmp$_33.value;
            this.state_0 = 6;
            this.result_0 = this.local$externalWriters.writeSound(index_0, (tmp$_6 = sound.dataBytes) != null ? tmp$_6 : new Int8Array([]), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 5;
            continue;
          case 7:
            var morphShapeCount = 0;
            var shapeCount = 0;
            var movieClipCount = 0;
            var totalFrameCount = 0;
            var totalTimelines = 0;
            writeU_VL(this.local$$receiver, this.local$lib.symbolsById.size);
            tmp$_7 = this.local$lib.symbolsById.iterator();
            while (tmp$_7.hasNext()) {
              var symbol_0 = tmp$_7.next();
              writeU_VL(this.local$$receiver, symbol_0.id);
              writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(symbol_0.name));
              if (Kotlin.isType(symbol_0, AnSymbolEmpty))
                writeU_VL(this.local$$receiver, 0);
              else if (Kotlin.isType(symbol_0, AnSymbolSound)) {
                writeU_VL(this.local$$receiver, 1);
                writeU_VL(this.local$$receiver, ensureNotNull(this.local$soundsToId.get_11rb$(symbol_0)));
              }
               else if (Kotlin.isType(symbol_0, AnTextFieldSymbol)) {
                writeU_VL(this.local$$receiver, 2);
                writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(symbol_0.initialHtml));
                this.$this.writeRect_0(this.local$$receiver, symbol_0.bounds);
              }
               else if (Kotlin.isType(symbol_0, AnSymbolShape)) {
                shapeCount = shapeCount + 1 | 0;
                writeU_VL(this.local$$receiver, 3);
                writeF32_le(this.local$$receiver, ensureNotNull(symbol_0.textureWithBitmap).scale);
                writeU_VL(this.local$$receiver, ensureNotNull(this.local$atlasBitmapsToId.get_11rb$(ensureNotNull(symbol_0.textureWithBitmap).bitmapSlice.bmp)));
                this.$this.writeIRect_0(this.local$$receiver, ensureNotNull(symbol_0.textureWithBitmap).bitmapSlice.bounds);
                this.$this.writeRect_0(this.local$$receiver, symbol_0.bounds);
                var path = symbol_0.path;
                if (this.local$config.keepPaths && path != null) {
                  writeU_VL(this.local$$receiver, 1);
                  writeU_VL(this.local$$receiver, path.commands.size);
                  tmp$_8 = path.commands.iterator();
                  while (tmp$_8.hasNext()) {
                    var cmd = tmp$_8.next();
                    write8(this.local$$receiver, cmd);
                  }
                  writeU_VL(this.local$$receiver, path.data.size);
                  tmp$_9 = path.data.iterator();
                  while (tmp$_9.hasNext()) {
                    var v = tmp$_9.next();
                    writeF32_le(this.local$$receiver, v);
                  }
                }
                 else {
                  writeU_VL(this.local$$receiver, 0);
                }
              }
               else if (Kotlin.isType(symbol_0, AnSymbolMorphShape)) {
                morphShapeCount = morphShapeCount + 1 | 0;
                writeU_VL(this.local$$receiver, 6);
                var entries = symbol_0.texturesWithBitmap.entries;
                writeU_VL(this.local$$receiver, entries.size);
                tmp$_10 = entries.iterator();
                while (tmp$_10.hasNext()) {
                  var tmp$_34 = tmp$_10.next();
                  var ratio1000 = tmp$_34.component1()
                  , textureWithBitmap = tmp$_34.component2();
                  writeU_VL(this.local$$receiver, ratio1000);
                  writeF32_le(this.local$$receiver, textureWithBitmap.scale);
                  writeU_VL(this.local$$receiver, ensureNotNull(this.local$atlasBitmapsToId.get_11rb$(textureWithBitmap.bitmapSlice.bmp)));
                  this.$this.writeRect_0(this.local$$receiver, textureWithBitmap.bounds);
                  this.$this.writeIRect_0(this.local$$receiver, textureWithBitmap.bitmapSlice.bounds);
                }
              }
               else if (Kotlin.isType(symbol_0, AnSymbolBitmap))
                writeU_VL(this.local$$receiver, 4);
              else if (Kotlin.isType(symbol_0, AnSymbolMovieClip)) {
                movieClipCount = movieClipCount + 1 | 0;
                writeU_VL(this.local$$receiver, 5);
                var hasNinePatchRect = symbol_0.ninePatch != null;
                write8(this.local$$receiver, insert(0, hasNinePatchRect, 0));
                var limits = symbol_0.limits;
                writeU_VL(this.local$$receiver, limits.totalDepths);
                writeU_VL(this.local$$receiver, limits.totalFrames);
                writeU_VL(this.local$$receiver, limits.totalTime);
                writeU_VL(this.local$$receiver, limits.totalUids);
                tmp$_11 = symbol_0.uidInfo;
                for (tmp$_12 = 0; tmp$_12 !== tmp$_11.length; ++tmp$_12) {
                  var uidInfo = tmp$_11[tmp$_12];
                  writeU_VL(this.local$$receiver, uidInfo.characterId);
                  var tmp$_35;
                  if (!uidInfo.extraProps.isEmpty()) {
                    var $this = json.Json;
                    var obj = uidInfo.extraProps;
                    var mapper;
                    mapper = serialization.Mapper;
                    var tmp$_36;
                    if (false) {
                      tmp$_36 = $this.encodePrettyUntyped_hvn9da$(mapper.toUntyped_b1ce0a$(getKClass(MutableMap), obj));
                    }
                     else {
                      tmp$_36 = $this.encodeUntyped_s8jyv4$(mapper.toUntyped_b1ce0a$(getKClass(MutableMap), obj));
                    }
                    tmp$_35 = tmp$_36;
                  }
                   else
                    tmp$_35 = '';
                  writeStringVL(this.local$$receiver, tmp$_35);
                }
                var $receiver_6 = symbol_0.states;
                var destination_8 = ArrayList_init_0($receiver_6.size);
                var tmp$_37;
                tmp$_37 = $receiver_6.entries.iterator();
                while (tmp$_37.hasNext()) {
                  var item_3 = tmp$_37.next();
                  destination_8.add_11rb$(item_3.value.subTimeline);
                }
                var symbolStates = distinct(toList_0(destination_8));
                var $receiver_7 = withIndex(symbolStates);
                var destination_9 = ArrayList_init_0(collectionSizeOrDefault($receiver_7, 10));
                var tmp$_38;
                tmp$_38 = $receiver_7.iterator();
                while (tmp$_38.hasNext()) {
                  var item_4 = tmp$_38.next();
                  destination_9.add_11rb$(to(item_4.value, item_4.index));
                }
                var symbolStateToIndex = toMap(destination_9);
                if (hasNinePatchRect) {
                  this.$this.writeRect_0(this.local$$receiver, ensureNotNull(symbol_0.ninePatch));
                }
                writeU_VL(this.local$$receiver, symbolStates.size);
                tmp$_13 = symbolStates.iterator();
                while (tmp$_13.hasNext()) {
                  var ss_0 = tmp$_13.next();
                  writeU_VL(this.local$$receiver, ss_0.totalTime);
                  write8(this.local$$receiver, insert(0, ss_0.nextStatePlay, 0));
                  writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(ss_0.nextState));
                  var lastFrameTimeMs = 0;
                  var $receiver_8 = ss_0.actions.entries;
                  var destination_10 = LinkedHashMap_init();
                  var tmp$_39;
                  tmp$_39 = $receiver_8.iterator();
                  while (tmp$_39.hasNext()) {
                    var element_4 = tmp$_39.next();
                    var key = element_4.first;
                    var tmp$_0_0;
                    var value = destination_10.get_11rb$(key);
                    if (value == null) {
                      var answer = ArrayList_init_1();
                      destination_10.put_xwzc9p$(key, answer);
                      tmp$_0_0 = answer;
                    }
                     else {
                      tmp$_0_0 = value;
                    }
                    var list_1 = tmp$_0_0;
                    list_1.add_11rb$(element_4);
                  }
                  var actionsPerTime = destination_10;
                  writeU_VL(this.local$$receiver, actionsPerTime.size);
                  tmp$_14 = actionsPerTime.entries.iterator();
                  while (tmp$_14.hasNext()) {
                    var tmp$_40 = tmp$_14.next();
                    var timeInMicro = tmp$_40.key;
                    var actions = tmp$_40.value;
                    var timeInMs = timeInMicro / 1000 | 0;
                    writeU_VL(this.local$$receiver, timeInMs - lastFrameTimeMs | 0);
                    lastFrameTimeMs = timeInMs;
                    writeU_VL(this.local$$receiver, actions.size);
                    tmp$_15 = actions.iterator();
                    while (tmp$_15.hasNext()) {
                      var actionInfo = tmp$_15.next();
                      var action_0 = actionInfo.second;
                      if (Kotlin.isType(action_0, AnPlaySoundAction)) {
                        write8(this.local$$receiver, 0);
                        writeU_VL(this.local$$receiver, action_0.soundId);
                      }
                       else if (Kotlin.isType(action_0, AnEventAction)) {
                        write8(this.local$$receiver, 1);
                        writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(action_0.event));
                      }
                       else {
                        throw new NotImplementedError_init();
                      }
                    }
                  }
                  tmp$_16 = ss_0.timelines;
                  for (tmp$_17 = 0; tmp$_17 !== tmp$_16.length; ++tmp$_17) {
                    var timeline_0 = tmp$_16[tmp$_17];
                    totalTimelines = totalTimelines + 1 | 0;
                    var frames = timeline_0.entries;
                    var lastUid = -1;
                    var lastName = null;
                    var lastColorTransform = new ColorTransform();
                    var lastMatrix = new Matrix2d();
                    var lastClipDepth = -1;
                    var lastRatio = 0.0;
                    var lastBlendMode = BlendMode$INHERIT_getInstance();
                    writeU_VL(this.local$$receiver, frames.size);
                    var lastFrameTime = 0;
                    tmp$_18 = frames.iterator();
                    while (tmp$_18.hasNext()) {
                      var tmp$_41 = tmp$_18.next();
                      var frameTime = tmp$_41.component1()
                      , frame = tmp$_41.component2();
                      var storeFrameTime = frameTime / 1000 | 0;
                      totalFrameCount = totalFrameCount + 1 | 0;
                      writeU_VL(this.local$$receiver, storeFrameTime - lastFrameTime | 0);
                      lastFrameTime = storeFrameTime;
                      var ct = frame.colorTransform;
                      var m = frame.transform;
                      var hasUid = frame.uid !== lastUid;
                      var hasName = !equals(frame.name, lastName);
                      var hasColorTransform = !(ct != null ? ct.equals(lastColorTransform) : null);
                      var hasBlendMode = frame.blendMode !== lastBlendMode;
                      var hasAlpha = ct.mR === lastColorTransform.mR && ct.mG === lastColorTransform.mG && ct.mB === lastColorTransform.mB && ct.mA !== lastColorTransform.mA && ct.aR === lastColorTransform.aR && ct.aG === lastColorTransform.aG && ct.aB === lastColorTransform.aB && ct.aA === lastColorTransform.aA;
                      var hasClipDepth = frame.clipDepth !== lastClipDepth;
                      var hasRatio = frame.ratio !== lastRatio;
                      var hasMatrix = !(m != null ? m.equals(lastMatrix) : null);
                      write8(this.local$$receiver, insert(insert(insert(insert(insert(insert(insert(insert(0, hasUid, 0), hasName, 1), hasColorTransform, 2), hasMatrix, 3), hasClipDepth, 4), hasRatio, 5), hasAlpha, 6), hasBlendMode, 7));
                      if (hasUid)
                        writeU_VL(this.local$$receiver, frame.uid);
                      if (hasClipDepth)
                        write16_le(this.local$$receiver, frame.clipDepth);
                      if (hasName)
                        writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(frame.name));
                      if (hasAlpha) {
                        write8(this.local$$receiver, clamp(numberToInt(ct.mA * 255.0), 0, 255));
                      }
                       else if (hasColorTransform) {
                        var hasMR = ct.mR !== lastColorTransform.mR;
                        var hasMG = ct.mG !== lastColorTransform.mG;
                        var hasMB = ct.mB !== lastColorTransform.mB;
                        var hasMA = ct.mA !== lastColorTransform.mA;
                        var hasAR = ct.aR !== lastColorTransform.aR;
                        var hasAG = ct.aG !== lastColorTransform.aG;
                        var hasAB = ct.aB !== lastColorTransform.aB;
                        var hasAA = ct.aA !== lastColorTransform.aA;
                        write8(this.local$$receiver, insert(insert(insert(insert(insert(insert(insert(insert(0, hasMR, 0), hasMG, 1), hasMB, 2), hasMA, 3), hasAR, 4), hasAG, 5), hasAB, 6), hasAA, 7));
                        if (hasMR)
                          write8(this.local$$receiver, numberToInt(clamp_0(ct.mR, 0.0, 1.0) * 255.0));
                        if (hasMG)
                          write8(this.local$$receiver, numberToInt(clamp_0(ct.mG, 0.0, 1.0) * 255.0));
                        if (hasMB)
                          write8(this.local$$receiver, numberToInt(clamp_0(ct.mB, 0.0, 1.0) * 255.0));
                        if (hasMA)
                          write8(this.local$$receiver, numberToInt(clamp_0(ct.mA, 0.0, 1.0) * 255.0));
                        if (hasAR)
                          write8(this.local$$receiver, clamp(ct.aR, -255, 255) / 2 | 0);
                        if (hasAG)
                          write8(this.local$$receiver, clamp(ct.aG, -255, 255) / 2 | 0);
                        if (hasAB)
                          write8(this.local$$receiver, clamp(ct.aB, -255, 255) / 2 | 0);
                        if (hasAA)
                          write8(this.local$$receiver, clamp(ct.aA, -255, 255) / 2 | 0);
                      }
                      if (hasMatrix) {
                        var hasMatrixA = m.a !== lastMatrix.a;
                        var hasMatrixB = m.b !== lastMatrix.b;
                        var hasMatrixC = m.c !== lastMatrix.c;
                        var hasMatrixD = m.d !== lastMatrix.d;
                        var hasMatrixTX = m.tx !== lastMatrix.tx;
                        var hasMatrixTY = m.ty !== lastMatrix.ty;
                        write8(this.local$$receiver, insert(insert(insert(insert(insert(insert(0, hasMatrixA, 0), hasMatrixB, 1), hasMatrixC, 2), hasMatrixD, 3), hasMatrixTX, 4), hasMatrixTY, 5));
                        if (hasMatrixA)
                          writeS_VL(this.local$$receiver, numberToInt(m.a * 16384));
                        if (hasMatrixB)
                          writeS_VL(this.local$$receiver, numberToInt(m.b * 16384));
                        if (hasMatrixC)
                          writeS_VL(this.local$$receiver, numberToInt(m.c * 16384));
                        if (hasMatrixD)
                          writeS_VL(this.local$$receiver, numberToInt(m.d * 16384));
                        if (hasMatrixTX)
                          writeS_VL(this.local$$receiver, numberToInt(m.tx * 20));
                        if (hasMatrixTY)
                          writeS_VL(this.local$$receiver, numberToInt(m.ty * 20));
                      }
                      if (hasRatio)
                        write8(this.local$$receiver, clamp(numberToInt(frame.ratio * 255), 0, 255));
                      if (hasBlendMode) {
                        write8(this.local$$receiver, frame.blendMode.ordinal);
                      }
                      lastUid = frame.uid;
                      lastName = frame.name;
                      lastColorTransform = frame.colorTransform;
                      lastMatrix = m;
                      lastClipDepth = frame.clipDepth;
                      lastRatio = frame.ratio;
                      lastBlendMode = frame.blendMode;
                    }
                  }
                }
                writeU_VL(this.local$$receiver, symbol_0.states.size);
                tmp$_19 = symbol_0.states.entries.iterator();
                while (tmp$_19.hasNext()) {
                  var tmp$_42 = tmp$_19.next();
                  var name = tmp$_42.key;
                  var ssi = tmp$_42.value;
                  var stateIndex = (tmp$_20 = symbolStateToIndex.get_11rb$(ssi.subTimeline)) != null ? tmp$_20 : 0;
                  writeU_VL(this.local$$receiver, this.local$strings.get_pdl1vj$(name));
                  writeU_VL(this.local$$receiver, ssi.startTime);
                  writeU_VL(this.local$$receiver, stateIndex);
                }
              }
            }

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
  AnLibrarySerializer.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AnLibrarySerializer',
    interfaces: []
  };
  var AnLibrarySerializer_instance = null;
  function AnLibrarySerializer_getInstance() {
    if (AnLibrarySerializer_instance === null) {
      new AnLibrarySerializer();
    }
    return AnLibrarySerializer_instance;
  }
  function AniFile() {
    AniFile_instance = this;
    this.MAGIC = 'KORGEANI';
    this.VERSION = 16;
    this.SYMBOL_TYPE_EMPTY = 0;
    this.SYMBOL_TYPE_SOUND = 1;
    this.SYMBOL_TYPE_TEXT = 2;
    this.SYMBOL_TYPE_SHAPE = 3;
    this.SYMBOL_TYPE_BITMAP = 4;
    this.SYMBOL_TYPE_MOVIE_CLIP = 5;
    this.SYMBOL_TYPE_MORPH_SHAPE = 6;
  }
  AniFile.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AniFile',
    interfaces: []
  };
  var AniFile_instance = null;
  function AniFile_getInstance() {
    if (AniFile_instance === null) {
      new AniFile();
    }
    return AniFile_instance;
  }
  function OptimizedStringAllocator() {
    this.finalized_0 = false;
    this.stringsCount_0 = HashMap_init();
    this.strings_pn0ab4$_0 = [];
    this.stringsToIndex_0 = HashMap_init();
  }
  Object.defineProperty(OptimizedStringAllocator.prototype, 'strings', {
    get: function () {
      return this.strings_pn0ab4$_0;
    },
    set: function (strings) {
      this.strings_pn0ab4$_0 = strings;
    }
  });
  var Map = Kotlin.kotlin.collections.Map;
  OptimizedStringAllocator.prototype.add_pdl1vj$ = function (str) {
    if (this.finalized_0)
      throw IllegalStateException_init();
    if (str != null) {
      var $receiver = this.stringsCount_0;
      var tmp$;
      if (!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(str)) {
        this.stringsCount_0.put_xwzc9p$(str, 0);
      }
      var $receiver_0 = this.stringsCount_0;
      var value = ensureNotNull(this.stringsCount_0.get_11rb$(str)) + 1 | 0;
      $receiver_0.put_xwzc9p$(str, value);
    }
  };
  OptimizedStringAllocator.prototype.get_pdl1vj$ = function (str) {
    return this.getIndex_pdl1vj$(str);
  };
  OptimizedStringAllocator.prototype.getIndex_pdl1vj$ = function (str) {
    if (!this.finalized_0)
      throw IllegalStateException_init();
    if (str == null) {
      return 0;
    }
     else {
      return ensureNotNull(this.stringsToIndex_0.get_11rb$(str));
    }
  };
  function OptimizedStringAllocator$finalize$lambda(it) {
    return it.value;
  }
  OptimizedStringAllocator.prototype.finalize = function () {
    var tmp$;
    var $receiver = sortedByDescending2(this.stringsCount_0.entries, OptimizedStringAllocator$finalize$lambda);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.key);
    }
    var toTypedArray$result;
    toTypedArray$result = copyToArray(destination);
    this.strings = [null].concat(toTypedArray$result);
    tmp$ = this.strings.length;
    for (var n = 1; n < tmp$; n++) {
      var $receiver_0 = this.stringsToIndex_0;
      var key = ensureNotNull(this.strings[n]);
      $receiver_0.put_xwzc9p$(key, n);
    }
    this.finalized_0 = true;
  };
  OptimizedStringAllocator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OptimizedStringAllocator',
    interfaces: []
  };
  function get_KorgeDispatcher() {
    return korui.KoruiDispatcher;
  }
  function Atlas(info) {
    Atlas$Companion_getInstance();
    this.info = info;
    this.textures = HashMap_init();
  }
  function Atlas$Companion() {
    Atlas$Companion_instance = this;
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Meta), Atlas$Atlas$Companion_init$lambda);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Rect), Atlas$Atlas$Companion_init$lambda_0);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Size), Atlas$Atlas$Companion_init$lambda_1);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo$Entry), Atlas$Atlas$Companion_init$lambda_2);
    serialization.Mapper.registerType_gs2qrt$(getKClass(AtlasInfo), Atlas$Atlas$Companion_init$lambda_3);
  }
  Atlas$Companion.prototype.ensure = function () {
  };
  function Atlas$Atlas$Companion_init$lambda($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'app');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_0);
    var $receiver_1 = $receiver.get_uozw8h$(it, 'format');
    var tmp$_0 = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_1);
    var $receiver_2 = $receiver.get_uozw8h$(it, 'image');
    var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_2);
    var $receiver_3 = $receiver.get_uozw8h$(it, 'scale');
    var tmp$_2 = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_3);
    var $receiver_4 = $receiver.get_uozw8h$(it, 'size');
    var tmp$_3 = $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Size), $receiver_4);
    var $receiver_5 = $receiver.get_uozw8h$(it, 'version');
    return new AtlasInfo$Meta(tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_5));
  }
  function Atlas$Atlas$Companion_init$lambda_0($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'x');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_0);
    var $receiver_1 = $receiver.get_uozw8h$(it, 'y');
    var tmp$_0 = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_1);
    var $receiver_2 = $receiver.get_uozw8h$(it, 'w');
    var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_2);
    var $receiver_3 = $receiver.get_uozw8h$(it, 'h');
    return new AtlasInfo$Rect(tmp$, tmp$_0, tmp$_1, $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_3));
  }
  function Atlas$Atlas$Companion_init$lambda_1($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'w');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_0);
    var $receiver_1 = $receiver.get_uozw8h$(it, 'h');
    return new AtlasInfo$Size(tmp$, $receiver.map.toTyped_bju3lo$(getKClass(Double), $receiver_1));
  }
  function Atlas$Atlas$Companion_init$lambda_2($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'frame');
    var tmp$ = $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Rect), $receiver_0);
    var $receiver_1 = $receiver.get_uozw8h$(it, 'rotated');
    var tmp$_0 = $receiver.map.toTyped_bju3lo$(getKClass(Boolean_0), $receiver_1);
    var $receiver_2 = $receiver.get_uozw8h$(it, 'source');
    var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Size), $receiver_2);
    var $receiver_3 = $receiver.get_uozw8h$(it, 'spriteSourceSize');
    var tmp$_2 = $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Rect), $receiver_3);
    var $receiver_4 = $receiver.get_uozw8h$(it, 'trimmed');
    return new AtlasInfo$Entry(tmp$, tmp$_0, tmp$_1, tmp$_2, $receiver.map.toTyped_bju3lo$(getKClass(Boolean_0), $receiver_4));
  }
  var toLinkedMap = $module$korio_js.$$importsForInline$$['kds-js'].com.soywiz.kds.toLinkedMap_6hr0sd$;
  var ObjectMapper$TypeContext$genMap$lambda = wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (typeClosure$K, isK, this$TypeContext, typeClosure$V, isV) {
      return function (it) {
        var $this = this$TypeContext;
        var T_0 = typeClosure$K;
        var $receiver = it.key;
        var tmp$ = $this.map.toTyped_bju3lo$(getKClass(T_0), $receiver);
        var $this_0 = this$TypeContext;
        var T_0_0 = typeClosure$V;
        var $receiver_0 = it.value;
        return to(tmp$, $this_0.map.toTyped_bju3lo$(getKClass(T_0_0), $receiver_0));
      };
    };
  });
  function Atlas$Atlas$Companion_init$lambda_3($receiver, it) {
    var $receiver_0 = $receiver.get_uozw8h$(it, 'frames');
    var $receiver_0_0 = $receiver.toDynamicMap_mzud1t$($receiver_0);
    var destination = ArrayList_init_0($receiver_0_0.size);
    var tmp$;
    tmp$ = $receiver_0_0.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_1 = item.key;
      var tmp$_1 = $receiver.map.toTyped_bju3lo$(getKClass(String_0), $receiver_1);
      var $receiver_2 = item.value;
      tmp$_0.call(destination, to(tmp$_1, $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Entry), $receiver_2)));
    }
    var tmp$_2 = toLinkedMap(destination);
    var $receiver_3 = $receiver.get_uozw8h$(it, 'meta');
    return new AtlasInfo(tmp$_2, $receiver.map.toTyped_bju3lo$(getKClass(AtlasInfo$Meta), $receiver_3));
  }
  Atlas$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Atlas$Companion_instance = null;
  function Atlas$Companion_getInstance() {
    if (Atlas$Companion_instance === null) {
      new Atlas$Companion();
    }
    return Atlas$Companion_instance;
  }
  Atlas.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.textures.get_11rb$(name)) != null ? tmp$ : invalidOp("Can't find texture '" + name + "' in atlas");
  };
  Atlas.prototype.load_3q8zhr$ = function (views, folder_0, continuation_0, suspended) {
    var instance = new Coroutine$load_3q8zhr$(this, views, folder_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$load_3q8zhr$($this, views, folder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$folder = folder_0;
  }
  Coroutine$load_3q8zhr$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$load_3q8zhr$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$load_3q8zhr$.prototype.constructor = Coroutine$load_3q8zhr$;
  Coroutine$load_3q8zhr$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            Atlas$Companion_getInstance().ensure();
            this.state_0 = 2;
            this.result_0 = readBitmapSlice(this.local$folder.get_61zpoe$(this.$this.info.image), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var atlasTex = this.result_0;
            tmp$ = this.$this.info.frames.entries.iterator();
            while (tmp$.hasNext()) {
              var tmp$_0 = tmp$.next();
              var frameName = tmp$_0.key;
              var frame = tmp$_0.value;
              var $receiver = this.$this.textures;
              var value = new TransformedTexture(atlasTex.slice_2da8yn$(frame.frame.rect), frame.spriteSourceSize.x, frame.spriteSourceSize.y, frame.rotated);
              $receiver.put_xwzc9p$(frameName, value);
            }

            return this.$this;
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
  Atlas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Atlas',
    interfaces: []
  };
  function readAtlas($receiver_0, views_0, continuation_0, suspended) {
    var instance = new Coroutine$readAtlas($receiver_0, views_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readAtlas($receiver_0, views_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
  }
  Coroutine$readAtlas.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAtlas.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAtlas.prototype.constructor = Coroutine$readAtlas;
  Coroutine$readAtlas.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            Atlas$Companion_getInstance().ensure();
            this.local$tmp$ = AtlasInfo$Companion_getInstance();
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = (new Atlas(this.local$tmp$.loadJsonSpriter_61zpoe$(this.result_0))).load_3q8zhr$(this.local$views, this.local$$receiver.parent, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  function readAtlas2($receiver_0, views, continuation_0, suspended) {
    var instance = new Coroutine$readAtlas2($receiver_0, views, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readAtlas2($receiver_0, views, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$entries = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readAtlas2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAtlas2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAtlas2.prototype.constructor = Coroutine$readAtlas2;
  Coroutine$readAtlas2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = json.Json;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var json_0 = this.local$tmp$.decode_61zpoe$(this.result_0);
            var $receiver = lang.DynamicContextInstance;
            var sprites = $receiver.toDynamicList_mzud1t$($receiver.get_uozw8h$(json_0, 'sprites'));
            var destination = ArrayList_init_0(collectionSizeOrDefault(sprites, 10));
            var tmp$;
            tmp$ = sprites.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              var tmp$_0 = destination.add_11rb$;
              var tmp$_1;
              tmp$_1 = $receiver.toBool_mzud1t$($receiver.get_uozw8h$(item, 'rotated'));
              tmp$_0.call(destination, new Atlas2$Entry($receiver.toInt_mzud1t$($receiver.get_uozw8h$(item, 'x')), $receiver.toInt_mzud1t$($receiver.get_uozw8h$(item, 'y')), $receiver.toInt_mzud1t$($receiver.get_uozw8h$(item, 'w')), $receiver.toInt_mzud1t$($receiver.get_uozw8h$(item, 'h')), $receiver.toInt_mzud1t$($receiver.get_uozw8h$(item, 'margin')), $receiver.toInt_mzud1t$($receiver.get_uozw8h$(item, 'extruded')), toString($receiver.get_uozw8h$(item, 'name')), tmp$_1));
            }

            this.local$entries = destination;
            var width = $receiver.toInt_mzud1t$($receiver.get_uozw8h$(json_0, 'width'));
            var height = $receiver.toInt_mzud1t$($receiver.get_uozw8h$(json_0, 'height'));
            var file = toString($receiver.get_uozw8h$(json_0, 'file'));
            this.state_0 = 3;
            this.result_0 = readBitmap(this.local$$receiver.parent.get_61zpoe$(file), format.defaultImageFormats, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var imageFile = this.result_0;
            var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault(this.local$entries, 10)), 16);
            var destination_0 = LinkedHashMap_init_0(capacity);
            var tmp$_2;
            tmp$_2 = this.local$entries.iterator();
            while (tmp$_2.hasNext()) {
              var element = tmp$_2.next();
              var pair = to(element.name, sliceWithSize(imageFile, element.x, element.y, element.w, element.h));
              destination_0.put_xwzc9p$(pair.first, pair.second);
            }

            return new Atlas2(this.local$entries, destination_0);
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
  function Atlas2(entries, textures) {
    this.entries = entries;
    this.textures = textures;
  }
  function Atlas2$Entry(x, y, w, h, margin, extruded, name, rotated) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.margin = margin;
    this.extruded = extruded;
    this.name = name;
    this.rotated = rotated;
  }
  Atlas2$Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: []
  };
  Atlas2$Entry.prototype.component1 = function () {
    return this.x;
  };
  Atlas2$Entry.prototype.component2 = function () {
    return this.y;
  };
  Atlas2$Entry.prototype.component3 = function () {
    return this.w;
  };
  Atlas2$Entry.prototype.component4 = function () {
    return this.h;
  };
  Atlas2$Entry.prototype.component5 = function () {
    return this.margin;
  };
  Atlas2$Entry.prototype.component6 = function () {
    return this.extruded;
  };
  Atlas2$Entry.prototype.component7 = function () {
    return this.name;
  };
  Atlas2$Entry.prototype.component8 = function () {
    return this.rotated;
  };
  Atlas2$Entry.prototype.copy_mszkzb$ = function (x, y, w, h, margin, extruded, name, rotated) {
    return new Atlas2$Entry(x === void 0 ? this.x : x, y === void 0 ? this.y : y, w === void 0 ? this.w : w, h === void 0 ? this.h : h, margin === void 0 ? this.margin : margin, extruded === void 0 ? this.extruded : extruded, name === void 0 ? this.name : name, rotated === void 0 ? this.rotated : rotated);
  };
  Atlas2$Entry.prototype.toString = function () {
    return 'Entry(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', w=' + Kotlin.toString(this.w)) + (', h=' + Kotlin.toString(this.h)) + (', margin=' + Kotlin.toString(this.margin)) + (', extruded=' + Kotlin.toString(this.extruded)) + (', name=' + Kotlin.toString(this.name)) + (', rotated=' + Kotlin.toString(this.rotated)) + ')';
  };
  Atlas2$Entry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    result = result * 31 + Kotlin.hashCode(this.h) | 0;
    result = result * 31 + Kotlin.hashCode(this.margin) | 0;
    result = result * 31 + Kotlin.hashCode(this.extruded) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotated) | 0;
    return result;
  };
  Atlas2$Entry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.w, other.w) && Kotlin.equals(this.h, other.h) && Kotlin.equals(this.margin, other.margin) && Kotlin.equals(this.extruded, other.extruded) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.rotated, other.rotated)))));
  };
  Atlas2.prototype.get_61zpoe$ = function (name) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.textures.get_11rb$(name)) != null)
      tmp$_0 = tmp$;
    else {
      throw IllegalStateException_init_0(("Can't find '" + name + "' in atlas").toString());
    }
    return tmp$_0;
  };
  Atlas2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Atlas2',
    interfaces: []
  };
  function AtlasInfo(frames, meta) {
    AtlasInfo$Companion_getInstance();
    this.frames = frames;
    this.meta = meta;
  }
  function AtlasInfo$Rect(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }
  Object.defineProperty(AtlasInfo$Rect.prototype, 'rect', {
    get: function () {
      return Rectangle_init(this.x, this.y, this.w, this.h);
    }
  });
  AtlasInfo$Rect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rect',
    interfaces: []
  };
  AtlasInfo$Rect.prototype.component1 = function () {
    return this.x;
  };
  AtlasInfo$Rect.prototype.component2 = function () {
    return this.y;
  };
  AtlasInfo$Rect.prototype.component3 = function () {
    return this.w;
  };
  AtlasInfo$Rect.prototype.component4 = function () {
    return this.h;
  };
  AtlasInfo$Rect.prototype.copy_tjonv8$ = function (x, y, w, h) {
    return new AtlasInfo$Rect(x === void 0 ? this.x : x, y === void 0 ? this.y : y, w === void 0 ? this.w : w, h === void 0 ? this.h : h);
  };
  AtlasInfo$Rect.prototype.toString = function () {
    return 'Rect(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', w=' + Kotlin.toString(this.w)) + (', h=' + Kotlin.toString(this.h)) + ')';
  };
  AtlasInfo$Rect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    result = result * 31 + Kotlin.hashCode(this.h) | 0;
    return result;
  };
  AtlasInfo$Rect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.w, other.w) && Kotlin.equals(this.h, other.h)))));
  };
  function AtlasInfo$Size(w, h) {
    this.w = w;
    this.h = h;
  }
  var Size_init = $module$korma_js.com.soywiz.korma.geom.Size;
  Object.defineProperty(AtlasInfo$Size.prototype, 'size', {
    get: function () {
      var width = this.w;
      var height = this.h;
      return new Size_init(numberToDouble(width), numberToDouble(height));
    }
  });
  AtlasInfo$Size.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Size',
    interfaces: []
  };
  AtlasInfo$Size.prototype.component1 = function () {
    return this.w;
  };
  AtlasInfo$Size.prototype.component2 = function () {
    return this.h;
  };
  AtlasInfo$Size.prototype.copy_vux9f0$ = function (w, h) {
    return new AtlasInfo$Size(w === void 0 ? this.w : w, h === void 0 ? this.h : h);
  };
  AtlasInfo$Size.prototype.toString = function () {
    return 'Size(w=' + Kotlin.toString(this.w) + (', h=' + Kotlin.toString(this.h)) + ')';
  };
  AtlasInfo$Size.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.w) | 0;
    result = result * 31 + Kotlin.hashCode(this.h) | 0;
    return result;
  };
  AtlasInfo$Size.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.w, other.w) && Kotlin.equals(this.h, other.h)))));
  };
  function AtlasInfo$Meta(app, format, image, scale, size, version) {
    this.app = app;
    this.format = format;
    this.image = image;
    this.scale = scale;
    this.size = size;
    this.version = version;
  }
  AtlasInfo$Meta.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Meta',
    interfaces: []
  };
  AtlasInfo$Meta.prototype.component1 = function () {
    return this.app;
  };
  AtlasInfo$Meta.prototype.component2 = function () {
    return this.format;
  };
  AtlasInfo$Meta.prototype.component3 = function () {
    return this.image;
  };
  AtlasInfo$Meta.prototype.component4 = function () {
    return this.scale;
  };
  AtlasInfo$Meta.prototype.component5 = function () {
    return this.size;
  };
  AtlasInfo$Meta.prototype.component6 = function () {
    return this.version;
  };
  AtlasInfo$Meta.prototype.copy_qfz0c5$ = function (app, format, image, scale, size, version) {
    return new AtlasInfo$Meta(app === void 0 ? this.app : app, format === void 0 ? this.format : format, image === void 0 ? this.image : image, scale === void 0 ? this.scale : scale, size === void 0 ? this.size : size, version === void 0 ? this.version : version);
  };
  AtlasInfo$Meta.prototype.toString = function () {
    return 'Meta(app=' + Kotlin.toString(this.app) + (', format=' + Kotlin.toString(this.format)) + (', image=' + Kotlin.toString(this.image)) + (', scale=' + Kotlin.toString(this.scale)) + (', size=' + Kotlin.toString(this.size)) + (', version=' + Kotlin.toString(this.version)) + ')';
  };
  AtlasInfo$Meta.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.app) | 0;
    result = result * 31 + Kotlin.hashCode(this.format) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    return result;
  };
  AtlasInfo$Meta.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.app, other.app) && Kotlin.equals(this.format, other.format) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.scale, other.scale) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.version, other.version)))));
  };
  function AtlasInfo$Entry(frame, rotated, sourceSize, spriteSourceSize, trimmed) {
    this.frame = frame;
    this.rotated = rotated;
    this.sourceSize = sourceSize;
    this.spriteSourceSize = spriteSourceSize;
    this.trimmed = trimmed;
  }
  AtlasInfo$Entry.prototype.applyRotation = function () {
    if (this.rotated) {
      return this.copy_sdu7fd$(this.frame.copy_tjonv8$(void 0, void 0, this.frame.h, this.frame.w), void 0, void 0, this.spriteSourceSize.copy_tjonv8$(this.spriteSourceSize.y, this.spriteSourceSize.x, this.spriteSourceSize.h, this.spriteSourceSize.w));
    }
     else {
      return this;
    }
  };
  AtlasInfo$Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: []
  };
  AtlasInfo$Entry.prototype.component1 = function () {
    return this.frame;
  };
  AtlasInfo$Entry.prototype.component2 = function () {
    return this.rotated;
  };
  AtlasInfo$Entry.prototype.component3 = function () {
    return this.sourceSize;
  };
  AtlasInfo$Entry.prototype.component4 = function () {
    return this.spriteSourceSize;
  };
  AtlasInfo$Entry.prototype.component5 = function () {
    return this.trimmed;
  };
  AtlasInfo$Entry.prototype.copy_sdu7fd$ = function (frame, rotated, sourceSize, spriteSourceSize, trimmed) {
    return new AtlasInfo$Entry(frame === void 0 ? this.frame : frame, rotated === void 0 ? this.rotated : rotated, sourceSize === void 0 ? this.sourceSize : sourceSize, spriteSourceSize === void 0 ? this.spriteSourceSize : spriteSourceSize, trimmed === void 0 ? this.trimmed : trimmed);
  };
  AtlasInfo$Entry.prototype.toString = function () {
    return 'Entry(frame=' + Kotlin.toString(this.frame) + (', rotated=' + Kotlin.toString(this.rotated)) + (', sourceSize=' + Kotlin.toString(this.sourceSize)) + (', spriteSourceSize=' + Kotlin.toString(this.spriteSourceSize)) + (', trimmed=' + Kotlin.toString(this.trimmed)) + ')';
  };
  AtlasInfo$Entry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.frame) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotated) | 0;
    result = result * 31 + Kotlin.hashCode(this.sourceSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.spriteSourceSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.trimmed) | 0;
    return result;
  };
  AtlasInfo$Entry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.frame, other.frame) && Kotlin.equals(this.rotated, other.rotated) && Kotlin.equals(this.sourceSize, other.sourceSize) && Kotlin.equals(this.spriteSourceSize, other.spriteSourceSize) && Kotlin.equals(this.trimmed, other.trimmed)))));
  };
  Object.defineProperty(AtlasInfo.prototype, 'app', {
    get: function () {
      return this.meta.app;
    }
  });
  Object.defineProperty(AtlasInfo.prototype, 'format', {
    get: function () {
      return this.meta.format;
    }
  });
  Object.defineProperty(AtlasInfo.prototype, 'image', {
    get: function () {
      return this.meta.image;
    }
  });
  Object.defineProperty(AtlasInfo.prototype, 'scale', {
    get: function () {
      return this.meta.scale;
    }
  });
  Object.defineProperty(AtlasInfo.prototype, 'size', {
    get: function () {
      return this.meta.size;
    }
  });
  Object.defineProperty(AtlasInfo.prototype, 'version', {
    get: function () {
      return this.meta.version;
    }
  });
  function AtlasInfo$Companion() {
    AtlasInfo$Companion_instance = this;
  }
  AtlasInfo$Companion.prototype.toRect_0 = function ($receiver) {
    var $receiver_0 = lang.DynamicAccess;
    return new AtlasInfo$Rect($receiver_0.get_int_mzud1t$($receiver_0.get_s2h60f$($receiver, 'x')), $receiver_0.get_int_mzud1t$($receiver_0.get_s2h60f$($receiver, 'y')), $receiver_0.get_int_mzud1t$($receiver_0.get_s2h60f$($receiver, 'w')), $receiver_0.get_int_mzud1t$($receiver_0.get_s2h60f$($receiver, 'h')));
  };
  AtlasInfo$Companion.prototype.toSize_0 = function ($receiver) {
    var $receiver_0 = lang.DynamicAccess;
    return new AtlasInfo$Size($receiver_0.get_int_mzud1t$($receiver_0.get_s2h60f$($receiver, 'w')), $receiver_0.get_int_mzud1t$($receiver_0.get_s2h60f$($receiver, 'h')));
  };
  AtlasInfo$Companion.prototype.loadJsonSpriter_61zpoe$ = function (json_0) {
    var value = json.Json.decode_61zpoe$(json_0);
    var $receiver = lang.DynamicAccess;
    var $receiver_0 = $receiver.get_s2h60f$(value, 'frames');
    var $receiver_1 = $receiver.get_keys_mzud1t$($receiver_0);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
    var tmp$;
    tmp$ = $receiver_1.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1 = $receiver.get_str_mzud1t$(item);
      var $receiver_2 = $receiver.get_s2h60f$($receiver_0, $receiver.get_str_mzud1t$(item));
      tmp$_0.call(destination, to(tmp$_1, new AtlasInfo$Entry(this.toRect_0($receiver.get_s2h60f$($receiver_2, 'frame')), $receiver.get_bool_mzud1t$($receiver.get_s2h60f$($receiver_2, 'rotated')), this.toSize_0($receiver.get_s2h60f$($receiver_2, 'sourceSize')), this.toRect_0($receiver.get_s2h60f$($receiver_2, 'spriteSourceSize')), $receiver.get_bool_mzud1t$($receiver.get_s2h60f$($receiver_2, 'trimmed')))));
    }
    var tmp$_2 = toMap(destination);
    var $receiver_3 = $receiver.get_s2h60f$(value, 'meta');
    var info = new AtlasInfo(tmp$_2, new AtlasInfo$Meta($receiver.get_str_mzud1t$($receiver.get_s2h60f$($receiver_3, 'app')), $receiver.get_str_mzud1t$($receiver.get_s2h60f$($receiver_3, 'format')), $receiver.get_str_mzud1t$($receiver.get_s2h60f$($receiver_3, 'image')), $receiver.get_double_mzud1t$($receiver.get_s2h60f$($receiver_3, 'scale')), this.toSize_0($receiver.get_s2h60f$($receiver_3, 'size')), $receiver.get_str_mzud1t$($receiver.get_s2h60f$($receiver_3, 'version'))));
    var $receiver_4 = info.frames;
    var destination_0 = LinkedHashMap_init_0(mapCapacity($receiver_4.size));
    var tmp$_3;
    tmp$_3 = $receiver_4.entries.iterator();
    while (tmp$_3.hasNext()) {
      var element = tmp$_3.next();
      destination_0.put_xwzc9p$(element.key, element.value.applyRotation());
    }
    return info.copy_vxh60e$(destination_0);
  };
  AtlasInfo$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AtlasInfo$Companion_instance = null;
  function AtlasInfo$Companion_getInstance() {
    if (AtlasInfo$Companion_instance === null) {
      new AtlasInfo$Companion();
    }
    return AtlasInfo$Companion_instance;
  }
  AtlasInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtlasInfo',
    interfaces: []
  };
  AtlasInfo.prototype.component1 = function () {
    return this.frames;
  };
  AtlasInfo.prototype.component2 = function () {
    return this.meta;
  };
  AtlasInfo.prototype.copy_vxh60e$ = function (frames, meta) {
    return new AtlasInfo(frames === void 0 ? this.frames : frames, meta === void 0 ? this.meta : meta);
  };
  AtlasInfo.prototype.toString = function () {
    return 'AtlasInfo(frames=' + Kotlin.toString(this.frames) + (', meta=' + Kotlin.toString(this.meta)) + ')';
  };
  AtlasInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.frames) | 0;
    result = result * 31 + Kotlin.hashCode(this.meta) | 0;
    return result;
  };
  AtlasInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.frames, other.frames) && Kotlin.equals(this.meta, other.meta)))));
  };
  function SoundSystem(views) {
    this.views = views;
    this.promises_8be2vx$ = LinkedHashSet_init();
  }
  SoundSystem.prototype.init = function (continuation) {
    sound.nativeSoundProvider.initOnce();
  };
  SoundSystem.prototype.play_ycqh51$ = function (file) {
    return this.createChannel().play_qh36gy$(file.nativeSound);
  };
  SoundSystem.prototype.play_eej0pj$ = function (nativeSound) {
    return this.createChannel().play_qh36gy$(nativeSound);
  };
  SoundSystem.prototype.createChannel = function () {
    return new SoundChannel(this);
  };
  SoundSystem.prototype.createSoundChannel = function () {
    return new SoundChannel(this);
  };
  SoundSystem.prototype.createMusicChannel = function () {
    return new MusicChannel(this);
  };
  SoundSystem.prototype.close = function () {
    var tmp$;
    tmp$ = this.promises_8be2vx$.iterator();
    while (tmp$.hasNext()) {
      var promise = tmp$.next();
      promise.cancel_dbl4no$();
    }
    this.promises_8be2vx$.clear();
  };
  SoundSystem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SoundSystem',
    interfaces: [AsyncDependency]
  };
  function AudioChannel() {
  }
  AudioChannel.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'AudioChannel',
    interfaces: []
  };
  function SoundChannel(soundSystem) {
    this.soundSystem_9la57e$_0 = soundSystem;
    this.enabled = true;
    this.playing_kk5vyu$_0 = false;
    this.position_dt8wyh$_0 = 0.0;
    this.length_pwc0i2$_0 = 0.0;
    this.volume = 1.0;
    this.startedTime_4z4c46$_0 = L0;
    this.promise_qzn8l3$_0 = null;
  }
  Object.defineProperty(SoundChannel.prototype, 'soundSystem', {
    get: function () {
      return this.soundSystem_9la57e$_0;
    }
  });
  Object.defineProperty(SoundChannel.prototype, 'playing', {
    get: function () {
      return this.playing_kk5vyu$_0;
    },
    set: function (playing) {
      this.playing_kk5vyu$_0 = playing;
    }
  });
  Object.defineProperty(SoundChannel.prototype, 'position', {
    get: function () {
      return this.position_dt8wyh$_0;
    },
    set: function (position) {
      this.position_dt8wyh$_0 = position;
    }
  });
  Object.defineProperty(SoundChannel.prototype, 'length', {
    get: function () {
      return this.length_pwc0i2$_0;
    },
    set: function (length) {
      this.length_pwc0i2$_0 = length;
    }
  });
  Object.defineProperty(SoundChannel.prototype, 'remaining', {
    get: function () {
      return this.length - this.position;
    }
  });
  function SoundChannel$play$lambda(current, total) {
    return Unit;
  }
  function SoundChannel$play$lambda$lambda(this$SoundChannel, closure$progress) {
    return function (current, total) {
      this$SoundChannel.position = current;
      this$SoundChannel.length = total;
      closure$progress(current, total);
      return Unit;
    };
  }
  function SoundChannel$play$lambda_0(closure$sound_0, this$SoundChannel_0, closure$progress_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SoundChannel$play$lambda(closure$sound_0, this$SoundChannel_0, closure$progress_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SoundChannel$play$lambda(closure$sound_0, this$SoundChannel_0, closure$progress_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$sound = closure$sound_0;
    this.local$this$SoundChannel = this$SoundChannel_0;
    this.local$closure$progress = closure$progress_0;
  }
  Coroutine$SoundChannel$play$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SoundChannel$play$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SoundChannel$play$lambda.prototype.constructor = Coroutine$SoundChannel$play$lambda;
  Coroutine$SoundChannel$play$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$sound.playAndWait_tuav61$(SoundChannel$play$lambda$lambda(this.local$this$SoundChannel, this.local$closure$progress), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$this$SoundChannel._end_a909ec$_0(), Unit;
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
  SoundChannel.prototype.play_qh36gy$ = function (sound, progress) {
    if (progress === void 0)
      progress = SoundChannel$play$lambda;
    if (this.enabled) {
      this.stop();
      this.startedTime_4z4c46$_0 = TimeProvider.Companion.now();
      this.length = get_lengthInSeconds(sound);
      this.playing = true;
      this.promise_qzn8l3$_0 = asyncImmediately(this.soundSystem.views.coroutineContext, void 0, SoundChannel$play$lambda_0(sound, this, progress));
      var $receiver = this.soundSystem.promises_8be2vx$;
      var element = ensureNotNull(this.promise_qzn8l3$_0);
      $receiver.add_11rb$(element);
    }
    return this;
  };
  function SoundChannel$play$ObjectLiteral(closure$stream, this$SoundChannel) {
    this.closure$stream = closure$stream;
    this.this$SoundChannel = this$SoundChannel;
    this.$delegate_rnqjl3$_0 = closure$stream;
  }
  SoundChannel$play$ObjectLiteral.prototype.read_359eei$ = function (out_0, offset_0, length_0, continuation_0, suspended) {
    var instance = new Coroutine$read_359eei$(this, out_0, offset_0, length_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$read_359eei$($this, out_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$out = out_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$read_359eei$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_359eei$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_359eei$.prototype.constructor = Coroutine$read_359eei$;
  Coroutine$read_359eei$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.closure$stream.read_359eei$(this.local$out, this.local$offset, this.local$length, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var read = this.result_0;
            tmp$ = this.local$offset + read | 0;
            for (var n = this.local$offset; n < tmp$; n++) {
              this.local$out[n] = toShort(numberToInt(clamp_0(this.local$out[n] * this.$this.this$SoundChannel.volume, kotlin_js_internal_ShortCompanionObject.MIN_VALUE, kotlin_js_internal_ShortCompanionObject.MAX_VALUE)));
            }

            return read;
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
  Object.defineProperty(SoundChannel$play$ObjectLiteral.prototype, 'channels', {
    get: function () {
      return this.$delegate_rnqjl3$_0.channels;
    }
  });
  Object.defineProperty(SoundChannel$play$ObjectLiteral.prototype, 'rate', {
    get: function () {
      return this.$delegate_rnqjl3$_0.rate;
    }
  });
  SoundChannel$play$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [BaseAudioStream]
  };
  function SoundChannel$play$lambda_1(closure$astream_0, closure$bufferSeconds_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SoundChannel$play$lambda_0(closure$astream_0, closure$bufferSeconds_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SoundChannel$play$lambda_0(closure$astream_0, closure$bufferSeconds_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$astream = closure$astream_0;
    this.local$closure$bufferSeconds = closure$bufferSeconds_0;
  }
  Coroutine$SoundChannel$play$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SoundChannel$play$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SoundChannel$play$lambda_0.prototype.constructor = Coroutine$SoundChannel$play$lambda_0;
  Coroutine$SoundChannel$play$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = play(this.local$closure$astream, this.local$closure$bufferSeconds, this);
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
  SoundChannel.prototype.play_ptyh8e$ = function (stream, bufferSeconds) {
    if (bufferSeconds === void 0)
      bufferSeconds = 0.1;
    this.stop();
    var astream = new SoundChannel$play$ObjectLiteral(stream, this);
    this.promise_qzn8l3$_0 = asyncImmediately(this.soundSystem.views.coroutineContext, void 0, SoundChannel$play$lambda_1(astream, bufferSeconds));
  };
  SoundChannel.prototype.stop = function () {
    var tmp$;
    this._end_a909ec$_0();
    (tmp$ = this.promise_qzn8l3$_0) != null ? tmp$.cancel_dbl4no$() : null;
    this.promise_qzn8l3$_0 = null;
  };
  SoundChannel.prototype._end_a909ec$_0 = function () {
    if (this.promise_qzn8l3$_0 != null) {
      var $receiver = this.soundSystem.promises_8be2vx$;
      var element = ensureNotNull(this.promise_qzn8l3$_0);
      $receiver.remove_11rb$(element);
    }
    this.position = 0.0;
    this.length = 0.0;
    this.playing = false;
  };
  SoundChannel.prototype.await = function (continuation_0, suspended) {
    var instance = new Coroutine$await(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$await($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$await.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await.prototype.constructor = Coroutine$await;
  Coroutine$await.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if ((tmp$ = this.$this.promise_qzn8l3$_0) != null) {
              this.state_0 = 2;
              this.result_0 = tmp$.await(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
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
  SoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SoundChannel',
    interfaces: [AudioChannel]
  };
  function MusicChannel(soundSystem) {
    SoundChannel.call(this, soundSystem);
    this.soundSystem_tm77lo$_0 = soundSystem;
  }
  Object.defineProperty(MusicChannel.prototype, 'soundSystem', {
    get: function () {
      return this.soundSystem_tm77lo$_0;
    }
  });
  MusicChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MusicChannel',
    interfaces: [SoundChannel]
  };
  function SoundFile(nativeSound, soundSystem) {
    this.nativeSound = nativeSound;
    this.soundSystem = soundSystem;
  }
  SoundFile.prototype.play = function () {
    return this.soundSystem.play_eej0pj$(this.nativeSound);
  };
  SoundFile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SoundFile',
    interfaces: []
  };
  function soundSystem$lambda($receiver) {
    var $receiver_0 = new SoundSystem($receiver);
    $receiver.injector.mapInstance_b1ce0a$(getKClass(SoundSystem), $receiver_0);
    return $receiver_0;
  }
  var soundSystem;
  var soundSystem_metadata = new PropertyMetadata('soundSystem');
  var lmapOf = $module$kds_js.com.soywiz.kds.lmapOf_qfcya0$;
  function get_soundSystem($receiver) {
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = soundSystem.name) != null ? tmp$ : soundSystem_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = soundSystem.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = soundSystem.name) != null ? tmp$_3 : soundSystem_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  function readSoundFile($receiver_0, soundSystem_0, continuation_0, suspended) {
    var instance = new Coroutine$readSoundFile($receiver_0, soundSystem_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readSoundFile($receiver_0, soundSystem_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$soundSystem = soundSystem_0;
  }
  Coroutine$readSoundFile.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSoundFile.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSoundFile.prototype.constructor = Coroutine$readSoundFile;
  Coroutine$readSoundFile.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readNativeSoundOptimized(this.local$$receiver, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new SoundFile(this.result_0, this.local$soundSystem);
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
  function BitmapFont(fontSize, glyphs, kernings) {
    BitmapFont$Companion_getInstance();
    this.fontSize = fontSize;
    this.glyphs = glyphs;
    this.kernings = kernings;
    this.dummyGlyph_gur89u$_0 = lazy(BitmapFont$dummyGlyph$lambda);
  }
  var get_lastIndex_2 = Kotlin.kotlin.text.get_lastIndex_gw00vp$;
  BitmapFont.prototype.getBounds_1y5lg$ = function (text, format, out) {
    var tmp$, tmp$_0, tmp$_1;
    var font = this;
    var scale = format.computedSize / font.fontSize;
    var width = 0.0;
    var height = 0.0;
    var dy = 0.0;
    var dx = 0.0;
    tmp$ = text.length;
    for (var n = 0; n < tmp$; n++) {
      var c1 = text.charCodeAt(n) | 0;
      if (c1 === 10) {
        dx = 0.0;
        dy += font.fontSize;
        var a = height;
        height = Math_0.max(a, dy);
        continue;
      }
      var index = n + 1 | 0;
      var c2 = (index >= 0 && index <= get_lastIndex_2(text) ? text.charCodeAt(index) : unboxChar(toBoxedChar(32))) | 0;
      var kerningOffset = (tmp$_1 = (tmp$_0 = font.kernings.get_za3lpa$(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(c1, c2))) != null ? tmp$_0.amount : null) != null ? tmp$_1 : 0;
      var glyph = font.get_za3lpa$(c1);
      dx += glyph.xadvance + kerningOffset | 0;
      var a_0 = width;
      var b = dx;
      width = Math_0.max(a_0, b);
    }
    height += font.fontSize;
    out.setTo_6y0v78$(0.0, 0.0, width * scale, height * scale);
  };
  function BitmapFont$Kerning(first, second, amount) {
    BitmapFont$Kerning$Companion_getInstance();
    this.first = first;
    this.second = second;
    this.amount = amount;
  }
  function BitmapFont$Kerning$Companion() {
    BitmapFont$Kerning$Companion_instance = this;
  }
  BitmapFont$Kerning$Companion.prototype.buildKey_vux9f0$ = function (f, s) {
    return f | s << 16;
  };
  BitmapFont$Kerning$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapFont$Kerning$Companion_instance = null;
  function BitmapFont$Kerning$Companion_getInstance() {
    if (BitmapFont$Kerning$Companion_instance === null) {
      new BitmapFont$Kerning$Companion();
    }
    return BitmapFont$Kerning$Companion_instance;
  }
  BitmapFont$Kerning.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kerning',
    interfaces: []
  };
  function BitmapFont$Glyph(id, texture, xoffset, yoffset, xadvance) {
    this.id = id;
    this.texture = texture;
    this.xoffset = xoffset;
    this.yoffset = yoffset;
    this.xadvance = xadvance;
  }
  BitmapFont$Glyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glyph',
    interfaces: []
  };
  Object.defineProperty(BitmapFont.prototype, 'dummyGlyph', {
    get: function () {
      return this.dummyGlyph_gur89u$_0.value;
    }
  });
  BitmapFont.prototype.get_za3lpa$ = function (charCode) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.glyphs.get_za3lpa$(charCode)) != null ? tmp$ : this.glyphs.get_za3lpa$(32)) != null ? tmp$_0 : this.dummyGlyph;
  };
  BitmapFont.prototype.get_s8itvh$ = function (char) {
    return this.get_za3lpa$(char | 0);
  };
  BitmapFont.prototype.drawText_b4d2lv$ = function (ctx, textSize, str, x, y, m, colMul, colAdd, blendMode, filtering) {
    if (m === void 0)
      m = new Matrix2d();
    if (colMul === void 0)
      colMul = color.Colors.WHITE;
    if (colAdd === void 0)
      colAdd = 2139062143;
    if (blendMode === void 0)
      blendMode = BlendMode$INHERIT_getInstance();
    if (filtering === void 0)
      filtering = true;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var m2 = m.clone();
    var scale = textSize / this.fontSize;
    m2.pretranslate_lu1900$(x, y);
    m2.prescale_lu1900$(scale, scale);
    var dx = 0;
    var dy = 0;
    tmp$ = get_indices_0(str);
    tmp$_0 = tmp$.first;
    tmp$_1 = tmp$.last;
    tmp$_2 = tmp$.step;
    for (var n = tmp$_0; n <= tmp$_1; n += tmp$_2) {
      var c1 = str.charCodeAt(n) | 0;
      if (c1 === 10) {
        dx = 0;
        dy = dy + this.fontSize | 0;
        continue;
      }
      var index = n + 1 | 0;
      var c2 = (index >= 0 && index <= get_lastIndex_2(str) ? str.charCodeAt(index) : unboxChar(toBoxedChar(32))) | 0;
      var glyph = this.get_za3lpa$(c1);
      var tex = glyph.texture;
      ctx.batch.drawQuad_bjriwo$(ctx.getTex_9byvhi$(tex), dx + glyph.xoffset | 0, dy + glyph.yoffset | 0, void 0, void 0, m2, filtering, colMul, colAdd, blendMode.factors);
      var kerningOffset = (tmp$_4 = (tmp$_3 = this.kernings.get_za3lpa$(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(c1, c2))) != null ? tmp$_3.amount : null) != null ? tmp$_4 : 0;
      dx = dx + (glyph.xadvance + kerningOffset) | 0;
    }
  };
  function BitmapFont$Companion() {
    BitmapFont$Companion_instance = this;
  }
  BitmapFont$Companion.prototype.invoke_b61t5x$ = function (fontName, fontSize, chars, mipmaps) {
    if (chars === void 0)
      chars = font.BitmapFontGenerator.LATIN_ALL;
    if (mipmaps === void 0)
      mipmaps = true;
    return convert(font.BitmapFontGenerator.generate_h6sd2a$(fontName, fontSize, chars));
  };
  BitmapFont$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapFont$Companion_instance = null;
  function BitmapFont$Companion_getInstance() {
    if (BitmapFont$Companion_instance === null) {
      new BitmapFont$Companion();
    }
    return BitmapFont$Companion_instance;
  }
  function BitmapFont$dummyGlyph$lambda() {
    return new BitmapFont$Glyph(-1, bitmap.Bitmaps.transparent, 0, 0, 0);
  }
  BitmapFont.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapFont',
    interfaces: [Html$MetricsProvider]
  };
  function BitmapFont_init(fontSize, glyphs, kernings, $this) {
    $this = $this || Object.create(BitmapFont.prototype);
    BitmapFont.call($this, fontSize, toIntMap(glyphs), toIntMap(kernings));
    return $this;
  }
  function drawText($receiver, font, textSize, str, x, y, m, colMul, colAdd, blendMode) {
    if (m === void 0)
      m = new Matrix2d();
    if (colMul === void 0)
      colMul = color.Colors.WHITE;
    if (colAdd === void 0)
      colAdd = 2139062143;
    if (blendMode === void 0)
      blendMode = BlendMode$INHERIT_getInstance();
    font.drawText_b4d2lv$($receiver, textSize, str, x, y, m, colMul, colAdd, blendMode);
  }
  function readBitmapFont$BmpChar(id, x, y, width, height, xoffset, yoffset, xadvance, page, chnl) {
    this.id = id;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.xoffset = xoffset;
    this.yoffset = yoffset;
    this.xadvance = xadvance;
    this.page = page;
    this.chnl = chnl;
  }
  readBitmapFont$BmpChar.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BmpChar',
    interfaces: []
  };
  readBitmapFont$BmpChar.prototype.component1 = function () {
    return this.id;
  };
  readBitmapFont$BmpChar.prototype.component2 = function () {
    return this.x;
  };
  readBitmapFont$BmpChar.prototype.component3 = function () {
    return this.y;
  };
  readBitmapFont$BmpChar.prototype.component4 = function () {
    return this.width;
  };
  readBitmapFont$BmpChar.prototype.component5 = function () {
    return this.height;
  };
  readBitmapFont$BmpChar.prototype.component6 = function () {
    return this.xoffset;
  };
  readBitmapFont$BmpChar.prototype.component7 = function () {
    return this.yoffset;
  };
  readBitmapFont$BmpChar.prototype.component8 = function () {
    return this.xadvance;
  };
  readBitmapFont$BmpChar.prototype.component9 = function () {
    return this.page;
  };
  readBitmapFont$BmpChar.prototype.component10 = function () {
    return this.chnl;
  };
  readBitmapFont$BmpChar.prototype.copy_q2ofzg$ = function (id, x, y, width, height, xoffset, yoffset, xadvance, page, chnl) {
    return new readBitmapFont$BmpChar(id === void 0 ? this.id : id, x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height, xoffset === void 0 ? this.xoffset : xoffset, yoffset === void 0 ? this.yoffset : yoffset, xadvance === void 0 ? this.xadvance : xadvance, page === void 0 ? this.page : page, chnl === void 0 ? this.chnl : chnl);
  };
  readBitmapFont$BmpChar.prototype.toString = function () {
    return 'BmpChar(id=' + Kotlin.toString(this.id) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + (', xoffset=' + Kotlin.toString(this.xoffset)) + (', yoffset=' + Kotlin.toString(this.yoffset)) + (', xadvance=' + Kotlin.toString(this.xadvance)) + (', page=' + Kotlin.toString(this.page)) + (', chnl=' + Kotlin.toString(this.chnl)) + ')';
  };
  readBitmapFont$BmpChar.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    result = result * 31 + Kotlin.hashCode(this.xoffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.yoffset) | 0;
    result = result * 31 + Kotlin.hashCode(this.xadvance) | 0;
    result = result * 31 + Kotlin.hashCode(this.page) | 0;
    result = result * 31 + Kotlin.hashCode(this.chnl) | 0;
    return result;
  };
  readBitmapFont$BmpChar.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height) && Kotlin.equals(this.xoffset, other.xoffset) && Kotlin.equals(this.yoffset, other.yoffset) && Kotlin.equals(this.xadvance, other.xadvance) && Kotlin.equals(this.page, other.page) && Kotlin.equals(this.chnl, other.chnl)))));
  };
  var trim = Kotlin.kotlin.text.trim_gw00vp$;
  function readBitmapFont($receiver_0, imageFormats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapFont($receiver_0, imageFormats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapFont($receiver_0, imageFormats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$fntFile = void 0;
    this.local$textures = void 0;
    this.local$xml = void 0;
    this.local$fontSize = void 0;
    this.local$id_0 = void 0;
    this.local$kernings = void 0;
    this.local$glyphs = void 0;
    this.local$lineHeight = void 0;
    this.local$id = void 0;
    this.local$$receiver = $receiver_0;
    this.local$imageFormats = imageFormats_0;
  }
  Coroutine$readBitmapFont.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapFont.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapFont.prototype.constructor = Coroutine$readBitmapFont;
  Coroutine$readBitmapFont.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$imageFormats === void 0)
              this.local$imageFormats = format.defaultImageFormats;
            var tmp$, tmp$_0;
            var tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
            this.local$fntFile = this.local$$receiver;
            this.state_0 = 2;
            this.result_0 = this.local$fntFile.readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0;
            var tmp$_12;
            var content = trim(Kotlin.isCharSequence(tmp$_12 = $receiver) ? tmp$_12 : throwCCE()).toString();
            this.local$textures = HashMap_init();
            if (startsWith(content, 60)) {
              this.local$xml = Xml(content);
              this.local$fontSize = (tmp$_0 = (tmp$ = firstOrNull(this.local$xml.get_61zpoe$('info'))) != null ? tmp$.int_bm4lxs$('size', 16) : null) != null ? tmp$_0 : 16;
              this.local$tmp$_1 = get_0(this.local$xml.get_61zpoe$('pages'), 'page').iterator();
              this.state_0 = 9;
              continue;
            }
             else {
              if (startsWith_0(content, 'info')) {
                this.local$kernings = ArrayList_init_1();
                this.local$glyphs = ArrayList_init_1();
                this.local$lineHeight = 16;
                var base = null;
                this.local$tmp$_2 = lines(content).iterator();
                this.state_0 = 3;
                continue;
              }
               else {
                throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported font type starting with ' + substr(content, 0, 16)));
              }
            }

          case 3:
            if (!this.local$tmp$_2.hasNext()) {
              this.state_0 = 7;
              continue;
            }

            var rline = this.local$tmp$_2.next();
            var tmp$_13;
            var line = trim(Kotlin.isCharSequence(tmp$_13 = rline) ? tmp$_13 : throwCCE()).toString();
            var map = LinkedHashMap_init();
            tmp$_1 = split(line, Kotlin.charArrayOf(32)).iterator();
            while (tmp$_1.hasNext()) {
              var part = tmp$_1.next();
              var tmp$_14 = plus_0(split(part, Kotlin.charArrayOf(61)), listOf(['', '']));
              var key = tmp$_14.get_za3lpa$(0);
              var value = tmp$_14.get_za3lpa$(1);
              map.put_xwzc9p$(key, value);
            }

            if (!startsWith_0(line, 'info')) {
              if (startsWith_0(line, 'page')) {
                this.local$id = (tmp$_3 = (tmp$_2 = map.get_11rb$('id')) != null ? toInt(tmp$_2) : null) != null ? tmp$_3 : 0;
                var tmp$_15;
                if ((tmp$_5 = (tmp$_4 = map.get_11rb$('file')) != null ? unquote(tmp$_4) : null) != null)
                  tmp$_15 = tmp$_5;
                else {
                  throw IllegalStateException_init_0('page without file'.toString());
                }
                var file = tmp$_15;
                this.state_0 = 4;
                this.result_0 = readBitmapSlice(this.local$fntFile.parent.get_61zpoe$(file), void 0, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                if (startsWith_0(line, 'common ')) {
                  this.local$lineHeight = (tmp$_7 = (tmp$_6 = map.get_11rb$('lineHeight')) != null ? toIntOrNull(tmp$_6) : null) != null ? tmp$_7 : 16;
                  base = (tmp$_8 = map.get_11rb$('base')) != null ? toIntOrNull(tmp$_8) : null;
                }
                 else if (startsWith_0(line, 'char ')) {
                  var page = (tmp$_10 = (tmp$_9 = map.get_11rb$('page')) != null ? toIntOrNull(tmp$_9) : null) != null ? tmp$_10 : 0;
                  var texture = (tmp$_11 = this.local$textures.get_11rb$(page)) != null ? tmp$_11 : first(this.local$textures.values);
                  var $receiver_0 = lang.DynamicAccess;
                  var tmp$_16, tmp$_17, tmp$_18, tmp$_19;
                  tmp$_16 = $receiver_0.get_int_mzud1t$(map.get_11rb$('id'));
                  tmp$_17 = $receiver_0.get_int_mzud1t$(map.get_11rb$('xoffset'));
                  tmp$_18 = $receiver_0.get_int_mzud1t$(map.get_11rb$('yoffset'));
                  tmp$_19 = $receiver_0.get_int_mzud1t$(map.get_11rb$('xadvance'));
                  var element = new BitmapFont$Glyph(tmp$_16, texture.sliceWithSize_tjonv8$($receiver_0.get_int_mzud1t$(map.get_11rb$('x')), $receiver_0.get_int_mzud1t$(map.get_11rb$('y')), $receiver_0.get_int_mzud1t$(map.get_11rb$('width')), $receiver_0.get_int_mzud1t$(map.get_11rb$('height'))), tmp$_17, tmp$_18, tmp$_19);
                  this.local$glyphs.add_11rb$(element);
                }
                 else if (startsWith_0(line, 'kerning ')) {
                  var tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25;
                  var element_0 = new BitmapFont$Kerning((tmp$_21 = (tmp$_20 = map.get_11rb$('first')) != null ? toIntOrNull(tmp$_20) : null) != null ? tmp$_21 : 0, (tmp$_23 = (tmp$_22 = map.get_11rb$('second')) != null ? toIntOrNull(tmp$_22) : null) != null ? tmp$_23 : 0, (tmp$_25 = (tmp$_24 = map.get_11rb$('amount')) != null ? toIntOrNull(tmp$_24) : null) != null ? tmp$_25 : 0);
                  this.local$kernings.add_11rb$(element_0);
                }
                this.state_0 = 5;
                continue;
              }
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 4:
            var value_0 = this.result_0;
            this.local$textures.put_xwzc9p$(this.local$id, value_0);
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 3;
            continue;
          case 7:
            var tmp$_26 = this.local$lineHeight;
            var destination = ArrayList_init_0(collectionSizeOrDefault(this.local$glyphs, 10));
            var tmp$_27;
            tmp$_27 = this.local$glyphs.iterator();
            while (tmp$_27.hasNext()) {
              var item = tmp$_27.next();
              destination.add_11rb$(to(item.id, item));
            }

            var tmp$_28 = toIntMap(toMap(destination));
            var destination_0 = ArrayList_init_0(collectionSizeOrDefault(this.local$kernings, 10));
            var tmp$_29;
            tmp$_29 = this.local$kernings.iterator();
            while (tmp$_29.hasNext()) {
              var item_0 = tmp$_29.next();
              destination_0.add_11rb$(to(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(item_0.first, item_0.second), item_0));
            }

            return new BitmapFont(tmp$_26, tmp$_28, toIntMap(toMap(destination_0)));
          case 8:
            this.state_0 = 12;
            continue;
          case 9:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 11;
              continue;
            }

            var page_0 = this.local$tmp$_1.next();
            this.local$id_0 = page_0.int_bm4lxs$('id');
            var file_0 = page_0.str_puj7f4$('file');
            var texFile = this.local$fntFile.parent.get_61zpoe$(file_0);
            this.state_0 = 10;
            this.result_0 = readBitmapSlice(texFile, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            var tex = this.result_0;
            this.local$textures.put_xwzc9p$(this.local$id_0, tex);
            this.state_0 = 9;
            continue;
          case 11:
            var $receiver_1 = get_0(this.local$xml.get_61zpoe$('chars'), 'char');
            var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
            var tmp$_30;
            tmp$_30 = $receiver_1.iterator();
            while (tmp$_30.hasNext()) {
              var item_1 = tmp$_30.next();
              var tmp$_31 = destination_1.add_11rb$;
              var tmp$_32;
              var page_1 = item_1.int_bm4lxs$('page');
              var texture_0 = (tmp$_32 = this.local$textures.get_11rb$(page_1)) != null ? tmp$_32 : first(this.local$textures.values);
              tmp$_31.call(destination_1, new BitmapFont$Glyph(item_1.int_bm4lxs$('id'), texture_0.sliceWithSize_tjonv8$(item_1.int_bm4lxs$('x'), item_1.int_bm4lxs$('y'), item_1.int_bm4lxs$('width'), item_1.int_bm4lxs$('height')), item_1.int_bm4lxs$('xoffset'), item_1.int_bm4lxs$('yoffset'), item_1.int_bm4lxs$('xadvance')));
            }

            var glyphs = destination_1;
            var $receiver_2 = get_0(this.local$xml.get_61zpoe$('kernings'), 'kerning');
            var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
            var tmp$_33;
            tmp$_33 = $receiver_2.iterator();
            while (tmp$_33.hasNext()) {
              var item_2 = tmp$_33.next();
              destination_2.add_11rb$(new BitmapFont$Kerning(item_2.int_bm4lxs$('first'), item_2.int_bm4lxs$('second'), item_2.int_bm4lxs$('amount')));
            }

            var kernings = destination_2;
            var destination_3 = ArrayList_init_0(collectionSizeOrDefault(glyphs, 10));
            var tmp$_34;
            tmp$_34 = glyphs.iterator();
            while (tmp$_34.hasNext()) {
              var item_3 = tmp$_34.next();
              destination_3.add_11rb$(to(item_3.id, item_3));
            }

            var tmp$_35 = toIntMap(toMap(destination_3));
            var destination_4 = ArrayList_init_0(collectionSizeOrDefault(kernings, 10));
            var tmp$_36;
            tmp$_36 = kernings.iterator();
            while (tmp$_36.hasNext()) {
              var item_4 = tmp$_36.next();
              destination_4.add_11rb$(to(BitmapFont$Kerning$Companion_getInstance().buildKey_vux9f0$(item_4.first, item_4.second), item_4));
            }

            return new BitmapFont(this.local$fontSize, tmp$_35, toIntMap(toMap(destination_4)));
          case 12:
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
  function toIntMap($receiver) {
    var tmp$;
    var out = IntMap_init();
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.key;
      var v = tmp$_0.value;
      out.set_wxm5ur$(k, v);
    }
    return out;
  }
  function toKorge($receiver) {
    return convert($receiver);
  }
  function convert($receiver) {
    var tmp$;
    var font = $receiver;
    var mipmaps = true;
    var atlasBitmap = mipmaps ? ensurePowerOfTwo(font.atlas) : font.atlas;
    var tex = atlasBitmap;
    var glyphs = ArrayList_init_1();
    tmp$ = font.glyphInfos.iterator();
    while (tmp$.hasNext()) {
      var info = tmp$.next();
      var bounds = info.bounds;
      var texSlice = sliceWithSize(tex, bounds.x, bounds.y, bounds.width, bounds.height);
      var element = new BitmapFont$Glyph(info.id, texSlice, 0, 0, info.advance);
      glyphs.add_11rb$(element);
    }
    var tmp$_0 = font.size;
    var destination = ArrayList_init_0(collectionSizeOrDefault(glyphs, 10));
    var tmp$_1;
    tmp$_1 = glyphs.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(to(item.id, item));
    }
    return new BitmapFont(tmp$_0, toIntMap(toMap(destination)), IntMap_init());
  }
  function Bus(globalBus) {
    this.globalBus_0 = globalBus;
    this.closeables_0 = ArrayList_init_1();
  }
  Bus.prototype.send_za3rmp$ = function (message_0, continuation_0, suspended) {
    var instance = new Coroutine$send_za3rmp$(this, message_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$send_za3rmp$($this, message_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$message = message_0;
  }
  Coroutine$send_za3rmp$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$send_za3rmp$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$send_za3rmp$.prototype.constructor = Coroutine$send_za3rmp$;
  Coroutine$send_za3rmp$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.globalBus_0.send_za3rmp$(this.local$message, this);
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
  Bus.prototype.register_nh4f0o$ = function (clazz, handler) {
    var closeable = this.globalBus_0.register_nh4f0o$(clazz, handler);
    this.closeables_0.add_11rb$(closeable);
    return closeable;
  };
  Bus.prototype.registerInstance_za3rmp$ = function (instance) {
    throw new NotImplementedError_init();
  };
  Bus.prototype.injectedInto_za3rmp$ = function (instance, continuation) {
    this.registerInstance_za3rmp$(instance);
  };
  Bus.prototype.close = function () {
    var tmp$;
    tmp$ = this.closeables_0.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      c.close();
    }
  };
  Bus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bus',
    interfaces: [InjectedHandler, Closeable]
  };
  function GlobalBus() {
    this.perClassHandlers = HashMap_init();
  }
  GlobalBus.prototype.send_za3rmp$ = function (message_0, continuation_0, suspended) {
    var instance = new Coroutine$send_za3rmp$_0(this, message_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$send_za3rmp$_0($this, message_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$message = message_0;
  }
  Coroutine$send_za3rmp$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$send_za3rmp$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$send_za3rmp$_0.prototype.constructor = Coroutine$send_za3rmp$_0;
  Coroutine$send_za3rmp$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var clazz = Kotlin.getKClassFromExpression(this.local$message);
            var handlers = this.$this.perClassHandlers.get_11rb$(clazz);
            if (handlers != null) {
              this.local$tmp$ = handlers.iterator();
              this.state_0 = 2;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 4;
              continue;
            }

            var handler = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = handler(this.local$message, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
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
  GlobalBus.prototype.forClass_0 = function (clazz) {
    var $receiver = this.perClassHandlers;
    var tmp$;
    var value = $receiver.get_11rb$(clazz);
    if (value == null) {
      var answer = ArrayList_init_1();
      $receiver.put_xwzc9p$(clazz, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  function GlobalBus$register$lambda(closure$clazz, this$GlobalBus, closure$chandler) {
    return function () {
      this$GlobalBus.forClass_0(closure$clazz).remove_11rb$(closure$chandler);
      return Unit;
    };
  }
  GlobalBus.prototype.register_nh4f0o$ = function (clazz, handler) {
    var tmp$;
    var chandler = Kotlin.isType(tmp$ = handler, SuspendFunction1) ? tmp$ : throwCCE();
    this.forClass_0(clazz).add_11rb$(chandler);
    return Closeable_0(GlobalBus$register$lambda(clazz, this, chandler));
  };
  GlobalBus.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlobalBus',
    interfaces: []
  };
  function BusHandler() {
  }
  BusHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BusHandler',
    interfaces: [Annotation]
  };
  function Component() {
  }
  Component.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Component',
    interfaces: []
  };
  function attach($receiver) {
    $receiver.view.addComponent_q5itx0$($receiver);
    return $receiver;
  }
  function detach($receiver) {
    $receiver.view.removeComponent_q5itx0$($receiver);
    return $receiver;
  }
  function removeFromView($receiver) {
    $receiver.view.removeComponent_q5itx0$($receiver);
  }
  function TouchComponent() {
  }
  TouchComponent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TouchComponent',
    interfaces: [Component]
  };
  function MouseComponent() {
  }
  MouseComponent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MouseComponent',
    interfaces: [Component]
  };
  function KeyComponent() {
  }
  KeyComponent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'KeyComponent',
    interfaces: [Component]
  };
  function GamepadComponent() {
  }
  GamepadComponent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'GamepadComponent',
    interfaces: [Component]
  };
  function EventComponent() {
  }
  EventComponent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'EventComponent',
    interfaces: [Component]
  };
  function UpdateComponentWithViews() {
  }
  UpdateComponentWithViews.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UpdateComponentWithViews',
    interfaces: [Component]
  };
  function UpdateComponent() {
  }
  UpdateComponent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'UpdateComponent',
    interfaces: [Component]
  };
  function ResizeComponent() {
  }
  ResizeComponent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ResizeComponent',
    interfaces: [Component]
  };
  function DockingComponent(view, anchor) {
    this.view_2hlppf$_0 = view;
    this.anchor = anchor;
  }
  Object.defineProperty(DockingComponent.prototype, 'view', {
    get: function () {
      return this.view_2hlppf$_0;
    }
  });
  DockingComponent.prototype.resized_m5tlkz$ = function (views, width, height) {
    var tmp$;
    this.view.x = views.actualVirtualLeft + views.actualVirtualWidth * this.anchor.sx;
    this.view.y = views.actualVirtualTop + views.actualVirtualHeight * this.anchor.sy;
    this.view.invalidate();
    (tmp$ = this.view.parent) != null ? (tmp$.invalidate(), Unit) : null;
  };
  DockingComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DockingComponent',
    interfaces: [ResizeComponent]
  };
  function dockedTo($receiver, anchor) {
    return attach(new DockingComponent($receiver, anchor));
  }
  var addSuspend = $module$korio_js.com.soywiz.korio.async.addSuspend_w4tsgb$;
  function JellyButton(view, targetScale) {
    if (targetScale === void 0)
      targetScale = 1.5;
    this.view = view;
    this.targetScale = targetScale;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    this.hitTest = (tmp$ = get_6(this.view, 'hitTest')) != null ? tmp$ : this.view;
    this.content = (tmp$_0 = get_6(this.view, 'content')) != null ? tmp$_0 : this.view;
    this.initialScale = (tmp$_2 = (tmp$_1 = this.content) != null ? tmp$_1.scale : null) != null ? tmp$_2 : 1.0;
    this.down = false;
    this.over = false;
    if (!equals(this.hitTest, this.content)) {
      (tmp$_3 = this.hitTest) != null ? (tmp$_3.alpha = 0.0) : null;
    }
    if ((tmp$_4 = this.hitTest) != null) {
      var tmp$_8, tmp$_9;
      (tmp$_9 = (tmp$_8 = tmp$_4 != null ? get_mouse(tmp$_4) : null) != null ? tmp$_8.onOver : null) != null ? addSuspend(tmp$_9, get_KorgeDispatcher(), JellyButton_init$lambda(this)) : null;
    }
    if ((tmp$_5 = this.hitTest) != null) {
      var tmp$_10, tmp$_11;
      (tmp$_11 = (tmp$_10 = tmp$_5 != null ? get_mouse(tmp$_5) : null) != null ? tmp$_10.onOut : null) != null ? addSuspend(tmp$_11, get_KorgeDispatcher(), JellyButton_init$lambda_0(this)) : null;
    }
    if ((tmp$_6 = this.hitTest) != null) {
      var tmp$_12, tmp$_13;
      (tmp$_13 = (tmp$_12 = tmp$_6 != null ? get_mouse(tmp$_6) : null) != null ? tmp$_12.onDown : null) != null ? addSuspend(tmp$_13, get_KorgeDispatcher(), JellyButton_init$lambda_1(this)) : null;
    }
    if ((tmp$_7 = this.hitTest) != null) {
      var tmp$_14, tmp$_15;
      (tmp$_15 = (tmp$_14 = tmp$_7 != null ? get_mouse(tmp$_7) : null) != null ? tmp$_14.onUpAnywhere : null) != null ? addSuspend(tmp$_15, get_KorgeDispatcher(), JellyButton_init$lambda_2(this)) : null;
    }
  }
  JellyButton.prototype.updateState_0 = function (continuation_0, suspended) {
    var instance = new Coroutine$updateState_0(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$updateState_0($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$updateState_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$updateState_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$updateState_0.prototype.constructor = Coroutine$updateState_0;
  Coroutine$updateState_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (this.$this.content == null) {
              return;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.down)
              tmp$ = 1.0 / this.$this.targetScale;
            else if (this.$this.over)
              tmp$ = this.$this.targetScale;
            else
              tmp$ = 1.0;
            var scale = tmp$;
            var tmp$_0 = this.$this.content;
            var $receiver = getPropertyCallableRef('scale', 0, function ($receiver) {
              return $receiver.scale;
            }.bind(null, this.$this.content), function ($receiver, value) {
              $receiver.scale = value;
            }.bind(null, this.$this.content));
            var end = this.$this.initialScale * scale;
            this.state_0 = 3;
            this.result_0 = tween(tmp$_0, [new V2($receiver, $receiver.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
              return interpolate(v0_0, v1_0, step_0);
            }))], TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(200)), Easings_getInstance().EASE_OUT_ELASTIC, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  function JellyButton$onClick$lambda(closure$callback_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$JellyButton$onClick$lambda(closure$callback_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JellyButton$onClick$lambda(closure$callback_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
  }
  Coroutine$JellyButton$onClick$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JellyButton$onClick$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JellyButton$onClick$lambda.prototype.constructor = Coroutine$JellyButton$onClick$lambda;
  Coroutine$JellyButton$onClick$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$callback(this);
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
  JellyButton.prototype.onClick_g2bo5h$ = function (callback) {
    var tmp$;
    if ((tmp$ = this.hitTest) != null) {
      var tmp$_0, tmp$_1;
      (tmp$_1 = (tmp$_0 = tmp$ != null ? get_mouse(tmp$) : null) != null ? tmp$_0.onClick : null) != null ? addSuspend(tmp$_1, get_KorgeDispatcher(), JellyButton$onClick$lambda(callback)) : null;
    }
  };
  function JellyButton_init$lambda(this$JellyButton_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$JellyButton_init$lambda(this$JellyButton_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JellyButton_init$lambda(this$JellyButton_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JellyButton = this$JellyButton_0;
  }
  Coroutine$JellyButton_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JellyButton_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JellyButton_init$lambda.prototype.constructor = Coroutine$JellyButton_init$lambda;
  Coroutine$JellyButton_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$JellyButton.over = true;
            this.state_0 = 2;
            this.result_0 = this.local$this$JellyButton.updateState_0(this);
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
  function JellyButton_init$lambda_0(this$JellyButton_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$JellyButton_init$lambda_0(this$JellyButton_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JellyButton_init$lambda_0(this$JellyButton_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JellyButton = this$JellyButton_0;
  }
  Coroutine$JellyButton_init$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JellyButton_init$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JellyButton_init$lambda_0.prototype.constructor = Coroutine$JellyButton_init$lambda_0;
  Coroutine$JellyButton_init$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$JellyButton.over = false;
            this.state_0 = 2;
            this.result_0 = this.local$this$JellyButton.updateState_0(this);
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
  function JellyButton_init$lambda_1(this$JellyButton_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$JellyButton_init$lambda_1(this$JellyButton_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JellyButton_init$lambda_1(this$JellyButton_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JellyButton = this$JellyButton_0;
  }
  Coroutine$JellyButton_init$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JellyButton_init$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JellyButton_init$lambda_1.prototype.constructor = Coroutine$JellyButton_init$lambda_1;
  Coroutine$JellyButton_init$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$JellyButton.down = true;
            this.state_0 = 2;
            this.result_0 = this.local$this$JellyButton.updateState_0(this);
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
  function JellyButton_init$lambda_2(this$JellyButton_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$JellyButton_init$lambda_2(this$JellyButton_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$JellyButton_init$lambda_2(this$JellyButton_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$JellyButton = this$JellyButton_0;
  }
  Coroutine$JellyButton_init$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$JellyButton_init$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$JellyButton_init$lambda_2.prototype.constructor = Coroutine$JellyButton_init$lambda_2;
  Coroutine$JellyButton_init$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$JellyButton.down = false;
            this.state_0 = 2;
            this.result_0 = this.local$this$JellyButton.updateState_0(this);
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
  JellyButton.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JellyButton',
    interfaces: []
  };
  function jellyButton($receiver, targetScale) {
    if (targetScale === void 0)
      targetScale = 1.5;
    return new JellyButton($receiver, targetScale);
  }
  function SortedChildrenByComponent(view, comparator) {
    this.view_9dhzux$_0 = view;
    this.comparator = comparator;
  }
  Object.defineProperty(SortedChildrenByComponent.prototype, 'view', {
    get: function () {
      return this.view_9dhzux$_0;
    }
  });
  SortedChildrenByComponent.prototype.update_14dthe$ = function (ms) {
    sortChildrenBy(this.view, this.comparator);
  };
  SortedChildrenByComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SortedChildrenByComponent',
    interfaces: [UpdateComponent]
  };
  function sortChildrenBy($receiver, comparator) {
    var tmp$;
    sortWith($receiver.children, comparator);
    tmp$ = $receiver.children.size;
    for (var n = 0; n < tmp$; n++) {
      var child = $receiver.children.get_za3lpa$(n);
      child.index = n;
    }
  }
  function toComparator$lambda(this$toComparator) {
    return function (a, b) {
      return Kotlin.compareTo(this$toComparator(a), this$toComparator(b));
    };
  }
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function toComparator($receiver) {
    return new Comparator$ObjectLiteral(toComparator$lambda($receiver));
  }
  function sortChildrenBy_0($receiver, selector) {
    sortChildrenBy($receiver, toComparator(selector));
  }
  function sortChildrenByY($receiver) {
    sortChildrenBy_0($receiver, getPropertyCallableRef('y', 1, function ($receiver) {
      return $receiver.y;
    }, function ($receiver, value) {
      $receiver.y = value;
    }));
  }
  function keepChildrenSortedBy($receiver, comparator) {
    attach(new SortedChildrenByComponent($receiver, comparator));
    return $receiver;
  }
  function keepChildrenSortedBy_0($receiver, selector) {
    return keepChildrenSortedBy($receiver, toComparator(selector));
  }
  function keepChildrenSortedByY($receiver) {
    return keepChildrenSortedBy_0($receiver, getPropertyCallableRef('y', 1, function ($receiver) {
      return $receiver.y;
    }, function ($receiver, value) {
      $receiver.y = value;
    }));
  }
  function GridViewList(row0, row1, cellSelector, initialRows, initialColumns, container) {
    if (container === void 0)
      container = ensureNotNull(row0.parent);
    this.row0 = row0;
    this.row1 = row1;
    this.cellSelector = cellSelector;
    this.initialRows = initialRows;
    this.initialColumns = initialColumns;
    this.container = container;
    this.rowsData_0 = ArrayList_init_1();
    this.columns_tj6afv$_0 = this.initialColumns;
    this.rows_jykov7$_0 = this.initialRows;
    this.container.removeChildren();
    this.update();
  }
  Object.defineProperty(GridViewList.prototype, 'columns', {
    get: function () {
      return this.columns_tj6afv$_0;
    },
    set: function (value) {
      this.columns_tj6afv$_0 = value;
      this.update();
    }
  });
  Object.defineProperty(GridViewList.prototype, 'rows', {
    get: function () {
      return this.rows_jykov7$_0;
    },
    set: function (value) {
      this.rows_jykov7$_0 = value;
      this.update();
    }
  });
  GridViewList.prototype.addItem_0 = function () {
    var n = this.container.children.size;
    var item = this.row0.clone();
    this.container.plusAssign_l5rad2$(item);
    item.setMatrixInterpolated_whgrqo$(n, this.row0.localMatrix, this.row1.localMatrix);
    var select = this.cellSelector(item);
    var $receiver = this.rowsData_0;
    var element = new ViewList(select.first, select.second, this.columns);
    $receiver.add_11rb$(element);
  };
  GridViewList.prototype.removeLastItem_0 = function () {
    var tmp$;
    (tmp$ = lastOrNull(this.container.children)) != null ? (tmp$.removeFromParent(), Unit) : null;
    this.rowsData_0.removeAt_za3lpa$(this.rowsData_0.size - 1 | 0);
  };
  GridViewList.prototype.update = function () {
    var tmp$;
    while (this.rowsData_0.size < this.rows)
      this.addItem_0();
    while (this.rowsData_0.size > this.rows)
      this.removeLastItem_0();
    tmp$ = this.rowsData_0.iterator();
    while (tmp$.hasNext()) {
      var rowData = tmp$.next();
      rowData.length = this.columns;
    }
  };
  Object.defineProperty(GridViewList.prototype, 'length', {
    get: function () {
      return Kotlin.imul(this.columns, this.rows);
    }
  });
  GridViewList.prototype.get_za3lpa$ = function (row) {
    return this.rowsData_0.get_za3lpa$(row);
  };
  GridViewList.prototype.get_vux9f0$ = function (row, column) {
    return this.get_za3lpa$(row).get_za3lpa$(column);
  };
  GridViewList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GridViewList',
    interfaces: []
  };
  function ViewList(view0, view1, initialCount, container) {
    if (container === void 0)
      container = ensureNotNull(view0.parent);
    this.view0 = view0;
    this.view1 = view1;
    this.initialCount = initialCount;
    this.container = container;
    this.onRemovedView = new Signal();
    this.onAddedView = new Signal();
    var tmp$;
    this.container.removeChildren();
    tmp$ = this.initialCount;
    for (var n = 0; n < tmp$; n++)
      this.addItem_0();
  }
  function ViewList$ChangeEvent(view, index) {
    this.view = view;
    this.index = index;
  }
  ViewList$ChangeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChangeEvent',
    interfaces: []
  };
  ViewList$ChangeEvent.prototype.component1 = function () {
    return this.view;
  };
  ViewList$ChangeEvent.prototype.component2 = function () {
    return this.index;
  };
  ViewList$ChangeEvent.prototype.copy_pwlnko$ = function (view, index) {
    return new ViewList$ChangeEvent(view === void 0 ? this.view : view, index === void 0 ? this.index : index);
  };
  ViewList$ChangeEvent.prototype.toString = function () {
    return 'ChangeEvent(view=' + Kotlin.toString(this.view) + (', index=' + Kotlin.toString(this.index)) + ')';
  };
  ViewList$ChangeEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.view) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    return result;
  };
  ViewList$ChangeEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.view, other.view) && Kotlin.equals(this.index, other.index)))));
  };
  Object.defineProperty(ViewList.prototype, 'children', {
    get: function () {
      return this.container.children;
    }
  });
  ViewList.prototype.addItem_0 = function () {
    var n = this.container.children.size;
    var item = this.view0.clone();
    this.container.plusAssign_l5rad2$(item);
    item.setMatrixInterpolated_whgrqo$(n, this.view0.localMatrix, this.view1.localMatrix);
    this.onAddedView.invoke_11rb$(new ViewList$ChangeEvent(item, n));
  };
  ViewList.prototype.removeLastItem_0 = function () {
    var lastIndex = this.container.children.size - 1 | 0;
    var item = this.children.get_za3lpa$(lastIndex);
    item.removeFromParent();
    this.onRemovedView.invoke_11rb$(new ViewList$ChangeEvent(item, lastIndex));
  };
  Object.defineProperty(ViewList.prototype, 'length', {
    get: function () {
      return this.container.children.size;
    },
    set: function (value) {
      while (value > this.length)
        this.addItem_0();
      while (value < this.length)
        this.removeLastItem_0();
    }
  });
  ViewList.prototype.get_za3lpa$ = function (index) {
    return getOrNull(this.container.children, index);
  };
  ViewList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewList',
    interfaces: []
  };
  function Html() {
    Html_instance = this;
  }
  function Html$Alignment(anchor) {
    Html$Alignment$Companion_getInstance();
    this.anchor = anchor;
  }
  function Html$Alignment$Companion() {
    Html$Alignment$Companion_instance = this;
    this.LEFT = new Html$Alignment(Anchor.Companion.TOP_LEFT);
    this.CENTER = new Html$Alignment(Anchor.Companion.TOP_CENTER);
    this.RIGHT = new Html$Alignment(Anchor.Companion.TOP_RIGHT);
    this.JUSTIFIED = new Html$Alignment(Anchor.Companion.TOP_LEFT);
    this.MIDDLE_LEFT = new Html$Alignment(Anchor.Companion.MIDDLE_LEFT);
    this.MIDDLE_CENTER = new Html$Alignment(Anchor.Companion.MIDDLE_CENTER);
    this.MIDDLE_RIGHT = new Html$Alignment(Anchor.Companion.MIDDLE_RIGHT);
    this.BOTTOM_LEFT = new Html$Alignment(Anchor.Companion.BOTTOM_LEFT);
    this.BOTTOM_CENTER = new Html$Alignment(Anchor.Companion.BOTTOM_CENTER);
    this.BOTTOM_RIGHT = new Html$Alignment(Anchor.Companion.BOTTOM_RIGHT);
  }
  Html$Alignment$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Html$Alignment$Companion_instance = null;
  function Html$Alignment$Companion_getInstance() {
    if (Html$Alignment$Companion_instance === null) {
      new Html$Alignment$Companion();
    }
    return Html$Alignment$Companion_instance;
  }
  Html$Alignment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Alignment',
    interfaces: []
  };
  Html$Alignment.prototype.component1 = function () {
    return this.anchor;
  };
  Html$Alignment.prototype.copy_72irp7$ = function (anchor) {
    return new Html$Alignment(anchor === void 0 ? this.anchor : anchor);
  };
  Html$Alignment.prototype.toString = function () {
    return 'Alignment(anchor=' + Kotlin.toString(this.anchor) + ')';
  };
  Html$Alignment.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.anchor) | 0;
    return result;
  };
  Html$Alignment.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.anchor, other.anchor))));
  };
  function Html$FontFace() {
  }
  function Html$FontFace$Named(name) {
    this.name = name;
  }
  Html$FontFace$Named.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Named',
    interfaces: [Html$FontFace]
  };
  Html$FontFace$Named.prototype.component1 = function () {
    return this.name;
  };
  Html$FontFace$Named.prototype.copy_61zpoe$ = function (name) {
    return new Html$FontFace$Named(name === void 0 ? this.name : name);
  };
  Html$FontFace$Named.prototype.toString = function () {
    return 'Named(name=' + Kotlin.toString(this.name) + ')';
  };
  Html$FontFace$Named.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  Html$FontFace$Named.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function Html$FontFace$Bitmap(font) {
    this.font = font;
  }
  Html$FontFace$Bitmap.prototype.getBounds_1y5lg$ = function (text, format, out) {
    return this.font.getBounds_1y5lg$(text, format, out);
  };
  Html$FontFace$Bitmap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap',
    interfaces: [Html$MetricsProvider, Html$FontFace]
  };
  Html$FontFace$Bitmap.prototype.component1 = function () {
    return this.font;
  };
  Html$FontFace$Bitmap.prototype.copy_unrrau$ = function (font) {
    return new Html$FontFace$Bitmap(font === void 0 ? this.font : font);
  };
  Html$FontFace$Bitmap.prototype.toString = function () {
    return 'Bitmap(font=' + Kotlin.toString(this.font) + ')';
  };
  Html$FontFace$Bitmap.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.font) | 0;
    return result;
  };
  Html$FontFace$Bitmap.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.font, other.font))));
  };
  Html$FontFace.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'FontFace',
    interfaces: []
  };
  function Html$Format(parent, color, face, size, letterSpacing, kerning, align) {
    if (parent === void 0)
      parent = null;
    if (color === void 0)
      color = null;
    if (face === void 0)
      face = null;
    if (size === void 0)
      size = null;
    if (letterSpacing === void 0)
      letterSpacing = null;
    if (kerning === void 0)
      kerning = null;
    if (align === void 0)
      align = null;
    this.parent_ihqhan$_0 = parent;
    this.color = color;
    this.face = face;
    this.size = size;
    this.letterSpacing = letterSpacing;
    this.kerning = kerning;
    this.align = align;
    this.computedFace_asvglt$_0 = new Computed(getPropertyCallableRef('face', 1, function ($receiver) {
      return $receiver.face;
    }, function ($receiver, value) {
      $receiver.face = value;
    }), Html$Format$computedFace$lambda);
    this.computedSize_b06d9p$_0 = new Computed(getPropertyCallableRef('size', 1, function ($receiver) {
      return $receiver.size;
    }, function ($receiver, value) {
      $receiver.size = value;
    }), Html$Format$computedSize$lambda);
    this.computedLetterSpacing_9ivxe1$_0 = new Computed(getPropertyCallableRef('letterSpacing', 1, function ($receiver) {
      return $receiver.letterSpacing;
    }, function ($receiver, value) {
      $receiver.letterSpacing = value;
    }), Html$Format$computedLetterSpacing$lambda);
    this.computedKerning_uyqaje$_0 = new Computed(getPropertyCallableRef('kerning', 1, function ($receiver) {
      return $receiver.kerning;
    }, function ($receiver, value) {
      $receiver.kerning = value;
    }), Html$Format$computedKerning$lambda);
    this.computedAlign_mhjfun$_0 = new Computed(getPropertyCallableRef('align', 1, function ($receiver) {
      return $receiver.align;
    }, function ($receiver, value) {
      $receiver.align = value;
    }), Html$Format$computedAlign$lambda);
  }
  Object.defineProperty(Html$Format.prototype, 'parent', {
    get: function () {
      return this.parent_ihqhan$_0;
    },
    set: function (parent) {
      this.parent_ihqhan$_0 = parent;
    }
  });
  Object.defineProperty(Html$Format.prototype, 'computedColor', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return (tmp$_1 = (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.computedColor : null) != null ? tmp$_0 : this.color) != null ? tmp$_1 : color.Colors.WHITE;
    }
  });
  var Html$Format$computedFace_metadata = new PropertyMetadata('computedFace');
  Object.defineProperty(Html$Format.prototype, 'computedFace', {
    get: function () {
      return this.computedFace_asvglt$_0.getValue_608w9m$(this, Html$Format$computedFace_metadata);
    }
  });
  var Html$Format$computedSize_metadata = new PropertyMetadata('computedSize');
  Object.defineProperty(Html$Format.prototype, 'computedSize', {
    get: function () {
      return this.computedSize_b06d9p$_0.getValue_608w9m$(this, Html$Format$computedSize_metadata);
    }
  });
  var Html$Format$computedLetterSpacing_metadata = new PropertyMetadata('computedLetterSpacing');
  Object.defineProperty(Html$Format.prototype, 'computedLetterSpacing', {
    get: function () {
      return this.computedLetterSpacing_9ivxe1$_0.getValue_608w9m$(this, Html$Format$computedLetterSpacing_metadata);
    }
  });
  var Html$Format$computedKerning_metadata = new PropertyMetadata('computedKerning');
  Object.defineProperty(Html$Format.prototype, 'computedKerning', {
    get: function () {
      return this.computedKerning_uyqaje$_0.getValue_608w9m$(this, Html$Format$computedKerning_metadata);
    }
  });
  var Html$Format$computedAlign_metadata = new PropertyMetadata('computedAlign');
  Object.defineProperty(Html$Format.prototype, 'computedAlign', {
    get: function () {
      return this.computedAlign_mhjfun$_0.getValue_608w9m$(this, Html$Format$computedAlign_metadata);
    }
  });
  Html$Format.prototype.consolidate = function () {
    return new Html$Format(null, this.computedColor, this.computedFace, this.computedSize, this.computedLetterSpacing, this.computedKerning, this.computedAlign);
  };
  function Html$Format$computedFace$lambda() {
    return new Html$FontFace$Named('Arial');
  }
  function Html$Format$computedSize$lambda() {
    return 16;
  }
  function Html$Format$computedLetterSpacing$lambda() {
    return 0.0;
  }
  function Html$Format$computedKerning$lambda() {
    return 0;
  }
  function Html$Format$computedAlign$lambda() {
    return Html$Alignment$Companion_getInstance().LEFT;
  }
  Html$Format.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Format',
    interfaces: [Computed$WithParent]
  };
  Html$Format.prototype.component1 = function () {
    return this.parent;
  };
  Html$Format.prototype.component2 = function () {
    return this.color;
  };
  Html$Format.prototype.component3 = function () {
    return this.face;
  };
  Html$Format.prototype.component4 = function () {
    return this.size;
  };
  Html$Format.prototype.component5 = function () {
    return this.letterSpacing;
  };
  Html$Format.prototype.component6 = function () {
    return this.kerning;
  };
  Html$Format.prototype.component7 = function () {
    return this.align;
  };
  Html$Format.prototype.copy_jk8d6g$ = function (parent, color, face, size, letterSpacing, kerning, align) {
    return new Html$Format(parent === void 0 ? this.parent : parent, color === void 0 ? this.color : color, face === void 0 ? this.face : face, size === void 0 ? this.size : size, letterSpacing === void 0 ? this.letterSpacing : letterSpacing, kerning === void 0 ? this.kerning : kerning, align === void 0 ? this.align : align);
  };
  Html$Format.prototype.toString = function () {
    return 'Format(parent=' + Kotlin.toString(this.parent) + (', color=' + Kotlin.toString(this.color)) + (', face=' + Kotlin.toString(this.face)) + (', size=' + Kotlin.toString(this.size)) + (', letterSpacing=' + Kotlin.toString(this.letterSpacing)) + (', kerning=' + Kotlin.toString(this.kerning)) + (', align=' + Kotlin.toString(this.align)) + ')';
  };
  Html$Format.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.parent) | 0;
    result = result * 31 + Kotlin.hashCode(this.color) | 0;
    result = result * 31 + Kotlin.hashCode(this.face) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    result = result * 31 + Kotlin.hashCode(this.letterSpacing) | 0;
    result = result * 31 + Kotlin.hashCode(this.kerning) | 0;
    result = result * 31 + Kotlin.hashCode(this.align) | 0;
    return result;
  };
  Html$Format.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.parent, other.parent) && Kotlin.equals(this.color, other.color) && Kotlin.equals(this.face, other.face) && Kotlin.equals(this.size, other.size) && Kotlin.equals(this.letterSpacing, other.letterSpacing) && Kotlin.equals(this.kerning, other.kerning) && Kotlin.equals(this.align, other.align)))));
  };
  function Html$MetricsProvider() {
  }
  function Html$MetricsProvider$Identity() {
    Html$MetricsProvider$Identity_instance = this;
  }
  Html$MetricsProvider$Identity.prototype.getBounds_1y5lg$ = function (text, format, out) {
    var width = text.length;
    out.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(1));
  };
  Html$MetricsProvider$Identity.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Identity',
    interfaces: [Html$MetricsProvider]
  };
  var Html$MetricsProvider$Identity_instance = null;
  function Html$MetricsProvider$Identity_getInstance() {
    if (Html$MetricsProvider$Identity_instance === null) {
      new Html$MetricsProvider$Identity();
    }
    return Html$MetricsProvider$Identity_instance;
  }
  Html$MetricsProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MetricsProvider',
    interfaces: []
  };
  function Html$PositionContext(provider, bounds, x, y) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    this.provider = provider;
    this.bounds = bounds;
    this.x = x;
    this.y = y;
  }
  Html$PositionContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PositionContext',
    interfaces: []
  };
  Html$PositionContext.prototype.component1 = function () {
    return this.provider;
  };
  Html$PositionContext.prototype.component2 = function () {
    return this.bounds;
  };
  Html$PositionContext.prototype.component3 = function () {
    return this.x;
  };
  Html$PositionContext.prototype.component4 = function () {
    return this.y;
  };
  Html$PositionContext.prototype.copy_lvkdjn$ = function (provider, bounds, x, y) {
    return new Html$PositionContext(provider === void 0 ? this.provider : provider, bounds === void 0 ? this.bounds : bounds, x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  Html$PositionContext.prototype.toString = function () {
    return 'PositionContext(provider=' + Kotlin.toString(this.provider) + (', bounds=' + Kotlin.toString(this.bounds)) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  Html$PositionContext.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.provider) | 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  Html$PositionContext.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.provider, other.provider) && Kotlin.equals(this.bounds, other.bounds) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function Html$Span(format, text) {
    this.format = format;
    this.text = text;
    this.$delegate_csjjaa$_0 = new Extra$Mixin();
    this.bounds = new Rectangle();
  }
  Html$Span.prototype.doPositioning_tz5d0u$ = function (ctx) {
    ctx.provider.getBounds_1y5lg$(this.text, this.format, this.bounds);
    this.bounds.x = this.bounds.x + ctx.x;
    ctx.x = ctx.x + this.bounds.width;
  };
  Object.defineProperty(Html$Span.prototype, 'extra', {
    get: function () {
      return this.$delegate_csjjaa$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_csjjaa$_0.extra = tmp$;
    }
  });
  Html$Span.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Span',
    interfaces: [Extra]
  };
  Html$Span.prototype.component1 = function () {
    return this.format;
  };
  Html$Span.prototype.component2 = function () {
    return this.text;
  };
  Html$Span.prototype.copy_h7bzz5$ = function (format, text) {
    return new Html$Span(format === void 0 ? this.format : format, text === void 0 ? this.text : text);
  };
  Html$Span.prototype.toString = function () {
    return 'Span(format=' + Kotlin.toString(this.format) + (', text=' + Kotlin.toString(this.text)) + ')';
  };
  Html$Span.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.format) | 0;
    result = result * 31 + Kotlin.hashCode(this.text) | 0;
    return result;
  };
  Html$Span.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.format, other.format) && Kotlin.equals(this.text, other.text)))));
  };
  function Html$Line(spans) {
    if (spans === void 0) {
      spans = ArrayList_init_1();
    }
    this.spans = spans;
    this.$delegate_csexho$_0 = new Extra$Mixin();
    this.format = new Html$Format();
    this.bounds = new Rectangle();
  }
  Object.defineProperty(Html$Line.prototype, 'firstNonEmptySpan', {
    get: function () {
      var $receiver = this.spans;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.text.length > 0) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return firstOrNull$result;
    }
  });
  Html$Line.prototype.doPositioning_tz5d0u$ = function (ctx) {
    var tmp$, tmp$_0;
    ctx.x = ctx.bounds.x;
    tmp$ = this.spans.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      v.doPositioning_tz5d0u$(ctx);
    }
    var $receiver = this.spans;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(item.bounds);
    }
    bounds(destination, this.bounds);
    var restoreY = this.bounds.y;
    this.bounds.setToAnchoredRectangle_7qw0rf$(this.bounds, this.format.computedAlign.anchor, ctx.bounds);
    this.bounds.y = restoreY;
    var sx = this.bounds.x;
    tmp$_0 = this.spans.iterator();
    while (tmp$_0.hasNext()) {
      var v_0 = tmp$_0.next();
      v_0.bounds.x = sx;
      sx += v_0.bounds.width;
    }
    ctx.x = ctx.bounds.x;
    ctx.y = ctx.y + this.bounds.height;
  };
  Object.defineProperty(Html$Line.prototype, 'extra', {
    get: function () {
      return this.$delegate_csexho$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_csexho$_0.extra = tmp$;
    }
  });
  Html$Line.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Line',
    interfaces: [Extra]
  };
  Html$Line.prototype.component1 = function () {
    return this.spans;
  };
  Html$Line.prototype.copy_drxq9z$ = function (spans) {
    return new Html$Line(spans === void 0 ? this.spans : spans);
  };
  Html$Line.prototype.toString = function () {
    return 'Line(spans=' + Kotlin.toString(this.spans) + ')';
  };
  Html$Line.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.spans) | 0;
    return result;
  };
  Html$Line.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.spans, other.spans))));
  };
  function Html$Paragraph(lines) {
    if (lines === void 0) {
      lines = ArrayList_init_1();
    }
    this.lines = lines;
    this.$delegate_uin3h2$_0 = new Extra$Mixin();
    this.bounds = new Rectangle();
  }
  Object.defineProperty(Html$Paragraph.prototype, 'firstNonEmptyLine', {
    get: function () {
      var $receiver = this.lines;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.firstNonEmptySpan != null) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return firstOrNull$result;
    }
  });
  Html$Paragraph.prototype.doPositioning_tz5d0u$ = function (ctx) {
    var tmp$;
    tmp$ = this.lines.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      v.doPositioning_tz5d0u$(ctx);
    }
    var $receiver = this.lines;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.bounds);
    }
    bounds(destination, this.bounds);
    ctx.x = this.bounds.left;
    ctx.y = this.bounds.bottom;
  };
  Object.defineProperty(Html$Paragraph.prototype, 'extra', {
    get: function () {
      return this.$delegate_uin3h2$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_uin3h2$_0.extra = tmp$;
    }
  });
  Html$Paragraph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paragraph',
    interfaces: [Extra]
  };
  Html$Paragraph.prototype.component1 = function () {
    return this.lines;
  };
  Html$Paragraph.prototype.copy_dnyyn1$ = function (lines) {
    return new Html$Paragraph(lines === void 0 ? this.lines : lines);
  };
  Html$Paragraph.prototype.toString = function () {
    return 'Paragraph(lines=' + Kotlin.toString(this.lines) + ')';
  };
  Html$Paragraph.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lines) | 0;
    return result;
  };
  Html$Paragraph.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.lines, other.lines))));
  };
  function Html$Document(paragraphs) {
    if (paragraphs === void 0) {
      paragraphs = ArrayList_init_1();
    }
    this.paragraphs = paragraphs;
    this.$delegate_is0v8z$_0 = new Extra$Mixin();
    this.defaultFormat = new Html$Format();
    this.xml = Xml('');
    this.bounds = new Rectangle();
  }
  Object.defineProperty(Html$Document.prototype, 'text', {
    get: function () {
      var $receiver = this.xml.text;
      var tmp$;
      return trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    }
  });
  Object.defineProperty(Html$Document.prototype, 'firstNonEmptyParagraph', {
    get: function () {
      var $receiver = this.paragraphs;
      var firstOrNull$result;
      firstOrNull$break: do {
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.firstNonEmptyLine != null) {
            firstOrNull$result = element;
            break firstOrNull$break;
          }
        }
        firstOrNull$result = null;
      }
       while (false);
      return firstOrNull$result;
    }
  });
  Object.defineProperty(Html$Document.prototype, 'firstNonEmptySpan', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.firstNonEmptyParagraph) != null ? tmp$.firstNonEmptyLine : null) != null ? tmp$_0.firstNonEmptySpan : null;
    }
  });
  Object.defineProperty(Html$Document.prototype, 'firstFormat', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.firstNonEmptySpan) != null ? tmp$.format : null) != null ? tmp$_0 : new Html$Format();
    }
  });
  Object.defineProperty(Html$Document.prototype, 'allSpans', {
    get: function () {
      var $receiver = this.paragraphs;
      var destination = ArrayList_init_1();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var list = element.lines;
        addAll(destination, list);
      }
      var destination_0 = ArrayList_init_1();
      var tmp$_0;
      tmp$_0 = destination.iterator();
      while (tmp$_0.hasNext()) {
        var element_0 = tmp$_0.next();
        var list_0 = element_0.spans;
        addAll(destination_0, list_0);
      }
      return destination_0;
    }
  });
  Html$Document.prototype.doPositioning_90chdb$ = function (gp, bounds_0) {
    var tmp$;
    var ctx = new Html$PositionContext(gp, bounds_0);
    tmp$ = this.paragraphs.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      v.doPositioning_tz5d0u$(ctx);
    }
    var $receiver = this.paragraphs;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.bounds);
    }
    bounds(destination, this.bounds);
  };
  Object.defineProperty(Html$Document.prototype, 'extra', {
    get: function () {
      return this.$delegate_is0v8z$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_is0v8z$_0.extra = tmp$;
    }
  });
  Html$Document.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Document',
    interfaces: [Extra]
  };
  Html$Document.prototype.component1 = function () {
    return this.paragraphs;
  };
  Html$Document.prototype.copy_ifs9y5$ = function (paragraphs) {
    return new Html$Document(paragraphs === void 0 ? this.paragraphs : paragraphs);
  };
  Html$Document.prototype.toString = function () {
    return 'Document(paragraphs=' + Kotlin.toString(this.paragraphs) + ')';
  };
  Html$Document.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.paragraphs) | 0;
    return result;
  };
  Html$Document.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.paragraphs, other.paragraphs))));
  };
  function Html$HtmlParser() {
    this.document = new Html$Document();
    this.currentLine = new Html$Line();
    this.currentParagraph = new Html$Paragraph();
  }
  Html$HtmlParser.prototype.get_isDisplayBlock_byavcz$ = function ($receiver) {
    return equals($receiver.name, 'p') || equals($receiver.name, 'div');
  };
  Html$HtmlParser.prototype.emitText_h7bzz5$ = function (format, text) {
    if (this.currentLine.spans.isEmpty()) {
      this.currentLine.format = new Html$Format(format);
    }
    var $receiver = this.currentLine.spans;
    var element = new Html$Span(new Html$Format(format), text);
    $receiver.add_11rb$(element);
  };
  Html$HtmlParser.prototype.emitEndOfLine_ktnn5$ = function (format) {
    if (!this.currentLine.spans.isEmpty()) {
      var $receiver = this.currentParagraph.lines;
      var element = this.currentLine;
      $receiver.add_11rb$(element);
      var $receiver_0 = this.document.paragraphs;
      var element_0 = this.currentParagraph;
      $receiver_0.add_11rb$(element_0);
      this.currentParagraph = new Html$Paragraph();
      this.currentLine = new Html$Line();
    }
  };
  Html$HtmlParser.prototype.parse_tdggph$ = function (xml, format) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (get_isText(xml))
      this.emitText_h7bzz5$(format, xml.text);
    else if (!get_isComment(xml))
      if (get_isNode(xml)) {
        var block = this.get_isDisplayBlock_byavcz$(xml);
        switch (xml.str_puj7f4$('align').toLowerCase()) {
          case 'center':
            tmp$ = Html$Alignment$Companion_getInstance().CENTER;
            break;
          case 'left':
            tmp$ = Html$Alignment$Companion_getInstance().LEFT;
            break;
          case 'right':
            tmp$ = Html$Alignment$Companion_getInstance().RIGHT;
            break;
          case 'jusitifed':
            tmp$ = Html$Alignment$Companion_getInstance().JUSTIFIED;
            break;
          default:tmp$ = format.align;
            break;
        }
        format.align = tmp$;
        var face = xml.strNull_61zpoe$('face');
        format.face = face != null ? new Html$FontFace$Named(face) : format.face;
        format.size = (tmp$_0 = xml.intNull_61zpoe$('size')) != null ? tmp$_0 : format.size;
        format.letterSpacing = (tmp$_1 = xml.doubleNull_61zpoe$('letterSpacing')) != null ? tmp$_1 : format.letterSpacing;
        format.kerning = (tmp$_2 = xml.intNull_61zpoe$('kerning')) != null ? tmp$_2 : format.kerning;
        format.color = color.Colors.get_61zpoe$((tmp$_3 = xml.strNull_61zpoe$('color')) != null ? tmp$_3 : 'white');
        tmp$_4 = xml.allChildrenNoComments.iterator();
        while (tmp$_4.hasNext()) {
          var child = tmp$_4.next();
          this.parse_tdggph$(child, new Html$Format(format));
        }
        if (block) {
          this.emitEndOfLine_ktnn5$(format);
        }
      }
    return format;
  };
  Html$HtmlParser.prototype.parse_61zpoe$ = function (html) {
    var xml = Xml(html);
    this.document.xml = xml;
    var format = this.parse_tdggph$(xml, this.document.defaultFormat);
    this.emitEndOfLine_ktnn5$(format);
  };
  Html$HtmlParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlParser',
    interfaces: []
  };
  Html.prototype.parse_61zpoe$ = function (html) {
    var $receiver = new Html$HtmlParser();
    $receiver.parse_61zpoe$(html);
    return $receiver.document;
  };
  Html.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Html',
    interfaces: []
  };
  var Html_instance = null;
  function Html_getInstance() {
    if (Html_instance === null) {
      new Html();
    }
    return Html_instance;
  }
  function ConstantTextSource(text) {
    this.text = text;
  }
  ConstantTextSource.prototype.getText_afl2g8$ = function (language) {
    return this.text;
  };
  ConstantTextSource.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstantTextSource',
    interfaces: [TextSource]
  };
  function TextContainer() {
  }
  TextContainer.prototype.updateText_afl2g8$ = function (language) {
  };
  TextContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TextContainer',
    interfaces: []
  };
  function TextSource() {
  }
  TextSource.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'TextSource',
    interfaces: []
  };
  function toTextSource($receiver) {
    return new ConstantTextSource($receiver);
  }
  function extraLanguage$lambda() {
    return Language.Companion.CURRENT;
  }
  var extraLanguage;
  var extraLanguage_metadata = new PropertyMetadata('extraLanguage');
  function get_extraLanguage($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = extraLanguage.name) != null ? tmp$ : extraLanguage_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = extraLanguage.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = extraLanguage.name) != null ? tmp$_3 : extraLanguage_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_extraLanguage($receiver, extraLanguage_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = extraLanguage.name) != null ? tmp$ : extraLanguage_metadata.callableName, (tmp$_0 = extraLanguage_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function set_language$lambda(closure$value) {
    return function (it) {
      if (Kotlin.isType(it, TextContainer))
        it.updateText_afl2g8$(closure$value);
      return Unit;
    };
  }
  function get_language($receiver) {
    return get_extraLanguage($receiver);
  }
  function set_language($receiver, value) {
    set_extraLanguage($receiver, value);
    foreachDescendant($receiver.stage, set_language$lambda(value));
  }
  function drag$lambda$lambda(this$) {
    return function (it) {
      return new DragComponent(this$);
    };
  }
  function drag$lambda($receiver) {
    return $receiver.getOrCreateComponent_twnkl3$(getKClass(DragComponent), drag$lambda$lambda($receiver));
  }
  var drag;
  var drag_metadata = new PropertyMetadata('drag');
  function get_drag($receiver) {
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = drag.name) != null ? tmp$ : drag_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = drag.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = drag.name) != null ? tmp$_3 : drag_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  var onDragStart = defineInlineFunction('korge-js.com.soywiz.korge.input.onDragStart_75bvmw$', wrapFunction(function () {
    var get_drag = _.com.soywiz.korge.input.get_drag_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_drag($receiver) : null) != null ? tmp$.onDragStart : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  var onDragEnd = defineInlineFunction('korge-js.com.soywiz.korge.input.onDragEnd_75bvmw$', wrapFunction(function () {
    var get_drag = _.com.soywiz.korge.input.get_drag_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_drag($receiver) : null) != null ? tmp$.onDragEnd : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  var onDragMove = defineInlineFunction('korge-js.com.soywiz.korge.input.onDragMove_75bvmw$', wrapFunction(function () {
    var get_drag = _.com.soywiz.korge.input.get_drag_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_drag($receiver) : null) != null ? tmp$.onDragMove : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  function DragComponent(view) {
    this.view_szbxys$_0 = view;
    this.dragging_3d34e2$_4o7twi$_0 = new extraProperty('DragComponent.dragging', DragComponent$dragging$lambda);
    this.info = new DragComponent$Info();
    this.onDragStart = new Signal();
    this.onDragMove = new Signal();
    this.onDragEnd = new Signal();
  }
  Object.defineProperty(DragComponent.prototype, 'view', {
    get: function () {
      return this.view_szbxys$_0;
    }
  });
  function DragComponent$Info(touch, gstart, gend, delta) {
    if (touch === void 0)
      touch = Touch.Companion.dummy;
    if (gstart === void 0)
      gstart = new MVector2();
    if (gend === void 0)
      gend = new MVector2();
    if (delta === void 0)
      delta = new MVector2();
    this.touch = touch;
    this.gstart = gstart;
    this.gend = gend;
    this.delta = delta;
  }
  Object.defineProperty(DragComponent$Info.prototype, 'id', {
    get: function () {
      return this.touch.id;
    }
  });
  DragComponent$Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  DragComponent$Info.prototype.component1 = function () {
    return this.touch;
  };
  DragComponent$Info.prototype.component2 = function () {
    return this.gstart;
  };
  DragComponent$Info.prototype.component3 = function () {
    return this.gend;
  };
  DragComponent$Info.prototype.component4 = function () {
    return this.delta;
  };
  DragComponent$Info.prototype.copy_1eo6c1$ = function (touch, gstart, gend, delta) {
    return new DragComponent$Info(touch === void 0 ? this.touch : touch, gstart === void 0 ? this.gstart : gstart, gend === void 0 ? this.gend : gend, delta === void 0 ? this.delta : delta);
  };
  DragComponent$Info.prototype.toString = function () {
    return 'Info(touch=' + Kotlin.toString(this.touch) + (', gstart=' + Kotlin.toString(this.gstart)) + (', gend=' + Kotlin.toString(this.gend)) + (', delta=' + Kotlin.toString(this.delta)) + ')';
  };
  DragComponent$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.touch) | 0;
    result = result * 31 + Kotlin.hashCode(this.gstart) | 0;
    result = result * 31 + Kotlin.hashCode(this.gend) | 0;
    result = result * 31 + Kotlin.hashCode(this.delta) | 0;
    return result;
  };
  DragComponent$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.touch, other.touch) && Kotlin.equals(this.gstart, other.gstart) && Kotlin.equals(this.gend, other.gend) && Kotlin.equals(this.delta, other.delta)))));
  };
  var DragComponent$dragging_metadata = new PropertyMetadata('dragging');
  DragComponent.prototype.get_dragging_3d34e2$ = function ($receiver) {
    var $this = this.dragging_3d34e2$_4o7twi$_0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$_1 = $receiver.extra;
    tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : DragComponent$dragging_metadata.callableName;
    return (tmp$_3 = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE()) != null ? tmp$_3 : $this.default();
  };
  DragComponent.prototype.set_dragging_hx4td$ = function ($receiver, dragging) {
    var $this = this.dragging_3d34e2$_4o7twi$_0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if ($receiver.extra == null)
      $receiver.extra = lmapOf([]);
    tmp$_3 = $receiver.extra;
    tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : DragComponent$dragging_metadata.callableName;
    tmp$_2 = (tmp$_1 = dragging) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    if (tmp$_3 != null) {
      tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
    }
  };
  DragComponent.prototype.updateStartEndPos_0 = function (touch) {
    this.info.gstart.copyFrom_r62tv1$(touch.current);
    this.info.gend.copyFrom_r62tv1$(touch.current);
    this.info.delta.setToSub_g6xq6k$(this.info.gend, this.info.gstart);
  };
  DragComponent.prototype.updateEndPos_0 = function (touch) {
    this.info.gend.copyFrom_r62tv1$(touch.current);
    this.info.delta.setToSub_g6xq6k$(this.info.gend, this.info.gstart);
  };
  DragComponent.prototype.onTouchEvent_ius2xu$ = function (views, e) {
    var touch = e.touch;
    this.info.touch = touch;
    switch (e.type.name) {
      case 'START':
        if (this.view.hitTest_lu1900$(touch.current.x, touch.current.y) != null) {
          this.set_dragging_hx4td$(touch, true);
          this.updateStartEndPos_0(touch);
          this.onDragStart.invoke_11rb$(this.info);
        }

        break;
      case 'END':
        if (this.get_dragging_3d34e2$(touch)) {
          this.set_dragging_hx4td$(touch, false);
          this.updateEndPos_0(touch);
          this.onDragEnd.invoke_11rb$(this.info);
        }

        break;
      default:if (this.get_dragging_3d34e2$(touch)) {
          this.updateEndPos_0(touch);
          this.onDragMove.invoke_11rb$(this.info);
        }

        break;
    }
  };
  function DragComponent$dragging$lambda() {
    return false;
  }
  DragComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DragComponent',
    interfaces: [TouchComponent]
  };
  function GamePadEvents(view) {
    this.view_h3db45$_0 = view;
    this.stick = new Signal();
    this.button = new Signal();
    this.connection = new Signal();
  }
  Object.defineProperty(GamePadEvents.prototype, 'view', {
    get: function () {
      return this.view_h3db45$_0;
    }
  });
  function GamePadEvents$stick$lambda(closure$playerId, closure$stick, closure$callback) {
    return function (e) {
      if (e.gamepad === closure$playerId && e.stick === closure$stick)
        closure$callback(e.x, e.y);
      return Unit;
    };
  }
  GamePadEvents.prototype.stick_2yprv1$ = function (playerId, stick, callback) {
    this.stick.invoke_qlkmfe$(GamePadEvents$stick$lambda(playerId, stick, callback));
  };
  function GamePadEvents$down$lambda(closure$playerId, closure$button, closure$callback) {
    return function (e) {
      if (e.gamepad === closure$playerId && e.button === closure$button && e.type === GamePadButtonEvent$Type.DOWN)
        closure$callback();
      return Unit;
    };
  }
  GamePadEvents.prototype.down_mswfql$ = function (playerId, button, callback) {
    this.button.invoke_qlkmfe$(GamePadEvents$down$lambda(playerId, button, callback));
  };
  function GamePadEvents$up$lambda(closure$playerId, closure$button, closure$callback) {
    return function (e) {
      if (e.gamepad === closure$playerId && e.button === closure$button && e.type === GamePadButtonEvent$Type.UP)
        closure$callback();
      return Unit;
    };
  }
  GamePadEvents.prototype.up_mswfql$ = function (playerId, button, callback) {
    this.button.invoke_qlkmfe$(GamePadEvents$up$lambda(playerId, button, callback));
  };
  function GamePadEvents$connected$lambda(closure$playerId, closure$callback) {
    return function (e) {
      if (e.gamepad === closure$playerId && e.type === GamePadConnectionEvent$Type.CONNECTED)
        closure$callback();
      return Unit;
    };
  }
  GamePadEvents.prototype.connected_n53o35$ = function (playerId, callback) {
    this.connection.invoke_qlkmfe$(GamePadEvents$connected$lambda(playerId, callback));
  };
  function GamePadEvents$disconnected$lambda(closure$playerId, closure$callback) {
    return function (e) {
      if (e.gamepad === closure$playerId && e.type === GamePadConnectionEvent$Type.DISCONNECTED)
        closure$callback();
      return Unit;
    };
  }
  GamePadEvents.prototype.disconnected_n53o35$ = function (playerId, callback) {
    this.connection.invoke_qlkmfe$(GamePadEvents$disconnected$lambda(playerId, callback));
  };
  GamePadEvents.prototype.onGamepadEvent_96uaj2$ = function (views, event) {
    this.button.invoke_11rb$(event);
  };
  GamePadEvents.prototype.onGamepadEvent_xowe04$ = function (views, event) {
    this.stick.invoke_11rb$(event);
  };
  GamePadEvents.prototype.onGamepadEvent_55g7ry$ = function (views, event) {
    this.connection.invoke_11rb$(event);
  };
  GamePadEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GamePadEvents',
    interfaces: [GamepadComponent]
  };
  function gamepad$lambda$lambda(this$) {
    return function (it) {
      return new GamePadEvents(this$);
    };
  }
  function gamepad$lambda($receiver) {
    return $receiver.getOrCreateComponent_twnkl3$(getKClass(GamePadEvents), gamepad$lambda$lambda($receiver));
  }
  var gamepad;
  var gamepad_metadata = new PropertyMetadata('gamepad');
  function get_gamepad($receiver) {
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = gamepad.name) != null ? tmp$ : gamepad_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = gamepad.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = gamepad.name) != null ? tmp$_3 : gamepad_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  var gamepad_0 = defineInlineFunction('korge-js.com.soywiz.korge.input.gamepad_hynbqt$', wrapFunction(function () {
    var get_gamepad = _.com.soywiz.korge.input.get_gamepad_gohfi1$;
    return function ($receiver, callback) {
      return callback(get_gamepad($receiver));
    };
  }));
  function Gestures(view) {
    this.view_5r8l1p$_0 = view;
    this.onSwipe = new Signal();
  }
  Object.defineProperty(Gestures.prototype, 'view', {
    get: function () {
      return this.view_5r8l1p$_0;
    }
  });
  function Gestures$Direction(point) {
    Gestures$Direction$Companion_getInstance();
    this.point = point;
  }
  Object.defineProperty(Gestures$Direction.prototype, 'x', {
    get: function () {
      return this.point.x;
    }
  });
  Object.defineProperty(Gestures$Direction.prototype, 'y', {
    get: function () {
      return this.point.y;
    }
  });
  function Gestures$Direction$Companion() {
    Gestures$Direction$Companion_instance = this;
    this.Up = Gestures$Gestures$Direction_init(0, -1);
    this.Down = Gestures$Gestures$Direction_init(0, 1);
    this.Left = Gestures$Gestures$Direction_init(-1, 0);
    this.Right = Gestures$Gestures$Direction_init(1, 0);
  }
  Gestures$Direction$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Gestures$Direction$Companion_instance = null;
  function Gestures$Direction$Companion_getInstance() {
    if (Gestures$Direction$Companion_instance === null) {
      new Gestures$Direction$Companion();
    }
    return Gestures$Direction$Companion_instance;
  }
  Gestures$Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: []
  };
  function Gestures$Gestures$Direction_init(x, y, $this) {
    $this = $this || Object.create(Gestures$Direction.prototype);
    Gestures$Direction.call($this, IPointInt(x, y));
    return $this;
  }
  Gestures.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gestures',
    interfaces: [Component]
  };
  function get_gestures$lambda(this$gestures) {
    return function (it) {
      return new Gestures(this$gestures);
    };
  }
  function get_gestures($receiver) {
    return $receiver.getOrCreateComponent_twnkl3$(getKClass(Gestures), get_gestures$lambda($receiver));
  }
  function Input() {
    Input$Companion_getInstance();
    this.$delegate_h2v5n2$_0 = new Extra$Mixin();
    this.dummyTouch = Touch.Companion.dummy;
    var $receiver = until(0, 16);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new Touch(item));
    }
    this.touches = copyToArray(destination);
    this.activeTouches = ArrayList_init_1();
    this._isTouchDeviceGen = Input$_isTouchDeviceGen$lambda;
    this.mouse = new MVector2(-1000.0, -1000.0);
    this.mouseButtons = 0;
    this.clicked = false;
    this.keysRaw = Kotlin.booleanArray(256);
    this.keysRawPrev = Kotlin.booleanArray(256);
    this.keysPressingTime = new Int32Array(256);
    this.keysLastTimeTriggered = new Int32Array(256);
    this.keys = Kotlin.booleanArray(256);
    this.keysJustPressed = Kotlin.booleanArray(256);
    this.keysJustReleased = Kotlin.booleanArray(256);
    var $receiver_0 = until(0, 8);
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(new GamepadInfo(item_0));
    }
    this.gamepads = copyToArray(destination_0);
    this.connectedGamepads = ArrayList_init_1();
  }
  function Input$Companion() {
    Input$Companion_instance = this;
    this.KEYCODES = 256;
  }
  Input$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Input$Companion_instance = null;
  function Input$Companion_getInstance() {
    if (Input$Companion_instance === null) {
      new Input$Companion();
    }
    return Input$Companion_instance;
  }
  Object.defineProperty(Input.prototype, 'isTouchDevice', {
    get: function () {
      return this._isTouchDeviceGen();
    }
  });
  var NoSuchElementException_init = Kotlin.kotlin.NoSuchElementException;
  Input.prototype.getTouch_za3lpa$ = function (id) {
    var tmp$, tmp$_0;
    var tmp$_1;
    var $receiver = this.touches;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_2;
      for (tmp$_2 = 0; tmp$_2 !== $receiver.length; ++tmp$_2) {
        var element = $receiver[tmp$_2];
        if (element.id === id) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    if ((tmp$ = firstOrNull$result) != null)
      tmp$_1 = tmp$;
    else {
      var $receiver_0 = this.touches;
      var first$result;
      first$break: do {
        var tmp$_3;
        for (tmp$_3 = 0; tmp$_3 !== $receiver_0.length; ++tmp$_3) {
          var element_0 = $receiver_0[tmp$_3];
          if (!element_0.active) {
            first$result = element_0;
            break first$break;
          }
        }
        throw new NoSuchElementException_init('Array contains no element matching the predicate.');
      }
       while (false);
      tmp$_1 = first$result;
    }
    return (tmp$_0 = tmp$_1) != null ? tmp$_0 : this.dummyTouch;
  };
  Input.prototype.updateTouches = function () {
    var tmp$, tmp$_0;
    this.activeTouches.clear();
    tmp$ = this.touches;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var touch = tmp$[tmp$_0];
      if (touch.active)
        this.activeTouches.add_11rb$(touch);
    }
  };
  Input.prototype.updateConnectedGamepads = function () {
    var tmp$, tmp$_0;
    this.connectedGamepads.clear();
    tmp$ = this.gamepads;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var gamepad = tmp$[tmp$_0];
      if (gamepad.connected) {
        this.connectedGamepads.add_11rb$(gamepad);
      }
    }
  };
  Input.prototype.setKey_fzusl$ = function (keyCode, b) {
    var pKeyCode = keyCode & 255;
    if (get_indices(this.keysRaw).contains_mef7kx$(pKeyCode))
      this.keysRaw[pKeyCode] = b;
  };
  Input.prototype.startFrame_za3lpa$ = function (dtMs) {
    var tmp$;
    (tmp$ = this.extra) != null ? (tmp$.clear(), Unit) : null;
  };
  Input.prototype.endFrame_za3lpa$ = function (dtMs) {
    var tmp$, tmp$_0;
    this.clicked = false;
    for (var n = 0; n < 256; n++) {
      var prev = this.keysRawPrev[n];
      var curr = this.keysRaw[n];
      this.keysJustReleased[n] = (prev && !curr);
      this.keysJustPressed[n] = (!prev && curr);
      if (curr) {
        tmp$ = this.keysPressingTime;
        tmp$[n] = tmp$[n] + dtMs | 0;
      }
       else {
        this.keysPressingTime[n] = 0;
        this.keysLastTimeTriggered[n] = 0;
      }
      var triggerPress = false;
      var pressingTime = this.keysPressingTime[n];
      if (this.keysPressingTime[n] > 0) {
        if (0 <= pressingTime && pressingTime < 1)
          tmp$_0 = 0;
        else if (1 <= pressingTime && pressingTime < 300)
          tmp$_0 = 100;
        else if (300 <= pressingTime && pressingTime < 1000)
          tmp$_0 = 50;
        else
          tmp$_0 = 20;
        var timeBarrier = tmp$_0;
        var elapsedTime = pressingTime - this.keysLastTimeTriggered[n] | 0;
        if (elapsedTime >= timeBarrier) {
          triggerPress = true;
        }
      }
      if (triggerPress) {
        this.keysLastTimeTriggered[n] = this.keysPressingTime[n];
      }
      this.keys[n] = triggerPress;
    }
    arraycopy(this.keysRaw, 0, this.keysRawPrev, 0, 256);
  };
  Object.defineProperty(Input.prototype, 'extra', {
    get: function () {
      return this.$delegate_h2v5n2$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_h2v5n2$_0.extra = tmp$;
    }
  });
  function Input$_isTouchDeviceGen$lambda() {
    return false;
  }
  Input.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Input',
    interfaces: [Extra]
  };
  function KeysEvents(view) {
    this.view_aulzqo$_0 = view;
    this.onKeyDown = new AsyncSignal();
    this.onKeyUp = new AsyncSignal();
    this.onKeyTyped = new AsyncSignal();
  }
  Object.defineProperty(KeysEvents.prototype, 'view', {
    get: function () {
      return this.view_aulzqo$_0;
    }
  });
  function KeysEvents$down$lambda(closure$key_0, closure$callback_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$KeysEvents$down$lambda(closure$key_0, closure$callback_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysEvents$down$lambda(closure$key_0, closure$callback_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$key = closure$key_0;
    this.local$closure$callback = closure$callback_0;
    this.local$e = e_0;
  }
  Coroutine$KeysEvents$down$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysEvents$down$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysEvents$down$lambda.prototype.constructor = Coroutine$KeysEvents$down$lambda;
  Coroutine$KeysEvents$down$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$e.key === this.local$closure$key)
              return this.local$closure$callback(this.local$closure$key), Unit;
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
  KeysEvents.prototype.down_4f68c5$ = function (key, callback) {
    return this.onKeyDown.invoke_25kf2w$(KeysEvents$down$lambda(key, callback));
  };
  function KeysEvents$up$lambda(closure$key_0, closure$callback_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$KeysEvents$up$lambda(closure$key_0, closure$callback_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysEvents$up$lambda(closure$key_0, closure$callback_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$key = closure$key_0;
    this.local$closure$callback = closure$callback_0;
    this.local$e = e_0;
  }
  Coroutine$KeysEvents$up$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysEvents$up$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysEvents$up$lambda.prototype.constructor = Coroutine$KeysEvents$up$lambda;
  Coroutine$KeysEvents$up$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$e.key === this.local$closure$key)
              return this.local$closure$callback(this.local$closure$key), Unit;
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
  KeysEvents.prototype.up_4f68c5$ = function (key, callback) {
    return this.onKeyUp.invoke_25kf2w$(KeysEvents$up$lambda(key, callback));
  };
  function KeysEvents$typed$lambda(closure$key_0, closure$callback_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$KeysEvents$typed$lambda(closure$key_0, closure$callback_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysEvents$typed$lambda(closure$key_0, closure$callback_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$key = closure$key_0;
    this.local$closure$callback = closure$callback_0;
    this.local$e = e_0;
  }
  Coroutine$KeysEvents$typed$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysEvents$typed$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysEvents$typed$lambda.prototype.constructor = Coroutine$KeysEvents$typed$lambda;
  Coroutine$KeysEvents$typed$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$e.key === this.local$closure$key)
              return this.local$closure$callback(this.local$closure$key), Unit;
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
  KeysEvents.prototype.typed_4f68c5$ = function (key, callback) {
    return this.onKeyTyped.invoke_25kf2w$(KeysEvents$typed$lambda(key, callback));
  };
  function KeysEvents$down$lambda_0(closure$callback_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$KeysEvents$down$lambda_0(closure$callback_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysEvents$down$lambda_0(closure$callback_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
    this.local$e = e_0;
  }
  Coroutine$KeysEvents$down$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysEvents$down$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysEvents$down$lambda_0.prototype.constructor = Coroutine$KeysEvents$down$lambda_0;
  Coroutine$KeysEvents$down$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$callback(this.local$e.key);
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
  KeysEvents.prototype.down_rithoe$ = function (callback) {
    return this.onKeyDown.invoke_25kf2w$(KeysEvents$down$lambda_0(callback));
  };
  function KeysEvents$up$lambda_0(closure$callback_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$KeysEvents$up$lambda_0(closure$callback_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysEvents$up$lambda_0(closure$callback_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
    this.local$e = e_0;
  }
  Coroutine$KeysEvents$up$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysEvents$up$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysEvents$up$lambda_0.prototype.constructor = Coroutine$KeysEvents$up$lambda_0;
  Coroutine$KeysEvents$up$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$callback(this.local$e.key);
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
  KeysEvents.prototype.up_rithoe$ = function (callback) {
    return this.onKeyUp.invoke_25kf2w$(KeysEvents$up$lambda_0(callback));
  };
  function KeysEvents$typed$lambda_0(closure$callback_0) {
    return function (e_0, continuation_0, suspended) {
      var instance = new Coroutine$KeysEvents$typed$lambda_0(closure$callback_0, e_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysEvents$typed$lambda_0(closure$callback_0, e_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$callback = closure$callback_0;
    this.local$e = e_0;
  }
  Coroutine$KeysEvents$typed$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysEvents$typed$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysEvents$typed$lambda_0.prototype.constructor = Coroutine$KeysEvents$typed$lambda_0;
  Coroutine$KeysEvents$typed$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$callback(this.local$e.key);
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
  KeysEvents.prototype.typed_rithoe$ = function (callback) {
    return this.onKeyTyped.invoke_25kf2w$(KeysEvents$typed$lambda_0(callback));
  };
  function KeysEvents$onKeyEvent$lambda(this$KeysEvents_0, closure$event_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$KeysEvents$onKeyEvent$lambda(this$KeysEvents_0, closure$event_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysEvents$onKeyEvent$lambda(this$KeysEvents_0, closure$event_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$KeysEvents = this$KeysEvents_0;
    this.local$closure$event = closure$event_0;
  }
  Coroutine$KeysEvents$onKeyEvent$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysEvents$onKeyEvent$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysEvents$onKeyEvent$lambda.prototype.constructor = Coroutine$KeysEvents$onKeyEvent$lambda;
  Coroutine$KeysEvents$onKeyEvent$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$KeysEvents.onKeyTyped.invoke_11rb$(this.local$closure$event, this);
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
  function KeysEvents$onKeyEvent$lambda_0(this$KeysEvents_0, closure$event_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$KeysEvents$onKeyEvent$lambda_0(this$KeysEvents_0, closure$event_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysEvents$onKeyEvent$lambda_0(this$KeysEvents_0, closure$event_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$KeysEvents = this$KeysEvents_0;
    this.local$closure$event = closure$event_0;
  }
  Coroutine$KeysEvents$onKeyEvent$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysEvents$onKeyEvent$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysEvents$onKeyEvent$lambda_0.prototype.constructor = Coroutine$KeysEvents$onKeyEvent$lambda_0;
  Coroutine$KeysEvents$onKeyEvent$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$KeysEvents.onKeyDown.invoke_11rb$(this.local$closure$event, this);
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
  function KeysEvents$onKeyEvent$lambda_1(this$KeysEvents_0, closure$event_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$KeysEvents$onKeyEvent$lambda_1(this$KeysEvents_0, closure$event_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$KeysEvents$onKeyEvent$lambda_1(this$KeysEvents_0, closure$event_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$KeysEvents = this$KeysEvents_0;
    this.local$closure$event = closure$event_0;
  }
  Coroutine$KeysEvents$onKeyEvent$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$KeysEvents$onKeyEvent$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$KeysEvents$onKeyEvent$lambda_1.prototype.constructor = Coroutine$KeysEvents$onKeyEvent$lambda_1;
  Coroutine$KeysEvents$onKeyEvent$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$KeysEvents.onKeyUp.invoke_11rb$(this.local$closure$event, this);
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
  KeysEvents.prototype.onKeyEvent_6udeny$ = function (views, event) {
    switch (event.type.name) {
      case 'TYPE':
        launchImmediately_0(views.coroutineContext, void 0, KeysEvents$onKeyEvent$lambda(this, event));
        break;
      case 'DOWN':
        launchImmediately_0(views.coroutineContext, void 0, KeysEvents$onKeyEvent$lambda_0(this, event));
        break;
      case 'UP':
        launchImmediately_0(views.coroutineContext, void 0, KeysEvents$onKeyEvent$lambda_1(this, event));
        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  KeysEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeysEvents',
    interfaces: [KeyComponent]
  };
  function keys$lambda$lambda(this$) {
    return function (it) {
      return new KeysEvents(this$);
    };
  }
  function keys$lambda($receiver) {
    return $receiver.getOrCreateComponent_twnkl3$(getKClass(KeysEvents), keys$lambda$lambda($receiver));
  }
  var keys;
  var keys_metadata = new PropertyMetadata('keys');
  function get_keys($receiver) {
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = keys.name) != null ? tmp$ : keys_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = keys.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = keys.name) != null ? tmp$_3 : keys_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  var keys_0 = defineInlineFunction('korge-js.com.soywiz.korge.input.keys_xhqbsk$', wrapFunction(function () {
    var get_keys = _.com.soywiz.korge.input.get_keys_gohfi1$;
    return function ($receiver, callback) {
      return callback(get_keys($receiver));
    };
  }));
  var onKeyDown = defineInlineFunction('korge-js.com.soywiz.korge.input.onKeyDown_buokfe$', wrapFunction(function () {
    var get_keys = _.com.soywiz.korge.input.get_keys_gohfi1$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_keys($receiver) : null) != null ? tmp$.onKeyDown : null) != null ? tmp$_0.add_25kf2w$(handler) : null;
      return $receiver;
    };
  }));
  var onKeyUp = defineInlineFunction('korge-js.com.soywiz.korge.input.onKeyUp_buokfe$', wrapFunction(function () {
    var get_keys = _.com.soywiz.korge.input.get_keys_gohfi1$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_keys($receiver) : null) != null ? tmp$.onKeyUp : null) != null ? tmp$_0.add_25kf2w$(handler) : null;
      return $receiver;
    };
  }));
  var onKeyTyped = defineInlineFunction('korge-js.com.soywiz.korge.input.onKeyTyped_buokfe$', wrapFunction(function () {
    var get_keys = _.com.soywiz.korge.input.get_keys_gohfi1$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_keys($receiver) : null) != null ? tmp$.onKeyTyped : null) != null ? tmp$_0.add_25kf2w$(handler) : null;
      return $receiver;
    };
  }));
  function MouseEvents(view) {
    this.view_8vwvzd$_0 = view;
    this.click = new Signal();
    this.over = new Signal();
    this.out = new Signal();
    this.down = new Signal();
    this.downFromOutside = new Signal();
    this.up = new Signal();
    this.upOutside = new Signal();
    this.upAnywhere = new Signal();
    this.move = new Signal();
    this.moveAnywhere = new Signal();
    this.mouseOutside = new Signal();
    this.onClick = this.click;
    this.onOver = this.over;
    this.onOut = this.out;
    this.onDown = this.down;
    this.onDownFromOutside = this.downFromOutside;
    this.onUp = this.up;
    this.onUpOutside = this.upOutside;
    this.onUpAnywhere = this.upAnywhere;
    this.onMove = this.move;
    this.onMoveAnywhere = this.moveAnywhere;
    this.onMoveOutside = this.mouseOutside;
    this.hitTestType = View$HitTestType$BOUNDING_getInstance();
    this.startedPos = new MVector2();
    this.lastPos = new MVector2();
    this.currentPos = new MVector2();
    this.hitTest_yfgu01$_0 = null;
    this.lastOver_0 = false;
    this.lastPressing_0 = false;
    this.CLICK_THRESHOLD = 16;
    this.mouseHitSearch_w91h29$_jxictu$_0 = new Extra$Property(void 0, MouseEvents$mouseHitSearch$lambda);
    this.mouseHitResult_w91h29$_rniqwt$_0 = new Extra$Property(void 0, MouseEvents$mouseHitResult$lambda);
    this.mouseHitResultUsed_w91h29$_8zi9cw$_0 = new Extra$Property(void 0, MouseEvents$mouseHitResultUsed$lambda);
    this.mouseDebugHandlerOnce_jv80cy$_l49pu8$_0 = new Extra$Property(void 0, MouseEvents$mouseDebugHandlerOnce$lambda);
    this.downPos = new MVector2();
    this.upPos = new MVector2();
    this.clickedCount = 0;
  }
  Object.defineProperty(MouseEvents.prototype, 'view', {
    get: function () {
      return this.view_8vwvzd$_0;
    }
  });
  Object.defineProperty(MouseEvents.prototype, 'hitTest', {
    get: function () {
      return this.hitTest_yfgu01$_0;
    },
    set: function (hitTest) {
      this.hitTest_yfgu01$_0 = hitTest;
    }
  });
  var MouseEvents$mouseHitSearch_metadata = new PropertyMetadata('mouseHitSearch');
  MouseEvents.prototype.get_mouseHitSearch_w91h29$ = function ($receiver) {
    var $this = this.mouseHitSearch_w91h29$_jxictu$_0;
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : MouseEvents$mouseHitSearch_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = $this.name) != null ? tmp$_3 : MouseEvents$mouseHitSearch_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  MouseEvents.prototype.set_mouseHitSearch_rookxo$ = function ($receiver, mouseHitSearch) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = this.mouseHitSearch_w91h29$_jxictu$_0.name) != null ? tmp$ : MouseEvents$mouseHitSearch_metadata.callableName, (tmp$_0 = mouseHitSearch) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  var MouseEvents$mouseHitResult_metadata = new PropertyMetadata('mouseHitResult');
  MouseEvents.prototype.get_mouseHitResult_w91h29$ = function ($receiver) {
    var $this = this.mouseHitResult_w91h29$_rniqwt$_0;
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : MouseEvents$mouseHitResult_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = $this.name) != null ? tmp$_3 : MouseEvents$mouseHitResult_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  MouseEvents.prototype.set_mouseHitResult_irk9rs$ = function ($receiver, mouseHitResult) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = this.mouseHitResult_w91h29$_rniqwt$_0.name) != null ? tmp$ : MouseEvents$mouseHitResult_metadata.callableName, (tmp$_0 = mouseHitResult) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  var MouseEvents$mouseHitResultUsed_metadata = new PropertyMetadata('mouseHitResultUsed');
  MouseEvents.prototype.get_mouseHitResultUsed_w91h29$ = function ($receiver) {
    var $this = this.mouseHitResultUsed_w91h29$_8zi9cw$_0;
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : MouseEvents$mouseHitResultUsed_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = $this.name) != null ? tmp$_3 : MouseEvents$mouseHitResultUsed_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  MouseEvents.prototype.set_mouseHitResultUsed_irk9rs$ = function ($receiver, mouseHitResultUsed) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = this.mouseHitResultUsed_w91h29$_8zi9cw$_0.name) != null ? tmp$ : MouseEvents$mouseHitResultUsed_metadata.callableName, (tmp$_0 = mouseHitResultUsed) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  var MouseEvents$mouseDebugHandlerOnce_metadata = new PropertyMetadata('mouseDebugHandlerOnce');
  MouseEvents.prototype.get_mouseDebugHandlerOnce_jv80cy$ = function ($receiver) {
    var $this = this.mouseDebugHandlerOnce_jv80cy$_l49pu8$_0;
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : MouseEvents$mouseDebugHandlerOnce_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = $this.name) != null ? tmp$_3 : MouseEvents$mouseDebugHandlerOnce_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  MouseEvents.prototype.set_mouseDebugHandlerOnce_eb019r$ = function ($receiver, mouseDebugHandlerOnce) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = this.mouseDebugHandlerOnce_jv80cy$_l49pu8$_0.name) != null ? tmp$ : MouseEvents$mouseDebugHandlerOnce_metadata.callableName, (tmp$_0 = mouseDebugHandlerOnce) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  MouseEvents.prototype.hitTest_0 = function (views) {
    if (!this.get_mouseHitSearch_w91h29$(views.input)) {
      this.set_mouseHitSearch_rookxo$(views.input, true);
      this.set_mouseHitResult_irk9rs$(views.input, views.stage.hitTest_fjnra5$(views.nativeMouseX, views.nativeMouseY, this.hitTestType));
    }
    return this.get_mouseHitResult_w91h29$(views.input);
  };
  Object.defineProperty(MouseEvents.prototype, 'isOver', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.hitTest) != null ? hasAncestor(tmp$, this.view) : null) != null ? tmp$_0 : false;
    }
  });
  MouseEvents.prototype.onMouseEvent_93gp1g$ = function (views, event) {
    var tmp$;
    switch (event.type.name) {
      case 'UP':
        this.upPos.copyFrom_r62tv1$(views.input.mouse);
        if (this.upPos.distanceTo_r62tv1$(this.downPos) < this.CLICK_THRESHOLD) {
          tmp$ = this.clickedCount, this.clickedCount = tmp$ + 1 | 0;
        }

        break;
      case 'DOWN':
        this.downPos.copyFrom_r62tv1$(views.input.mouse);
        break;
      case 'CLICK':
        if (this.isOver) {
          this.onClick.invoke_11rb$(this);
          if (this.onClick.listenerCount > 0) {
            preventDefault(this.view);
          }
        }

        break;
      default:break;
    }
  };
  function MouseEvents$update$lambda$lambda(closure$views, this$MouseEvents) {
    return function ($receiver, ctx) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
      var mouseHit = this$MouseEvents.hitTest_0(closure$views);
      if (mouseHit != null) {
        var bounds = mouseHit.getLocalBounds_2da8yn$();
        tmp$_5 = $receiver.renderContext.batch;
        tmp$ = ctx.getTex_9byvhi$(bitmap.Bitmaps.white);
        tmp$_0 = bounds.x;
        tmp$_1 = bounds.y;
        tmp$_2 = bounds.width;
        tmp$_3 = bounds.height;
        tmp$_4 = RGBA.Companion.invoke_tjonv8$(255, 0, 0, 63);
        tmp$_5.drawQuad_bjriwo$(tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, mouseHit.globalMatrix, void 0, tmp$_4);
        drawText($receiver.renderContext, Fonts$Companion_getInstance().defaultFont, 16.0, mouseHit.toString() + ' : ' + toString(closure$views.nativeMouseX) + ',' + toString(closure$views.nativeMouseY), 0, 0);
      }
      var mouseHitResultUsed = this$MouseEvents.get_mouseHitResultUsed_w91h29$($receiver.input);
      if (mouseHitResultUsed != null) {
        var bounds_0 = mouseHitResultUsed.getLocalBounds_2da8yn$();
        tmp$_12 = $receiver.renderContext.batch;
        tmp$_6 = ctx.getTex_9byvhi$(bitmap.Bitmaps.white);
        tmp$_7 = bounds_0.x;
        tmp$_8 = bounds_0.y;
        tmp$_9 = bounds_0.width;
        tmp$_10 = bounds_0.height;
        tmp$_11 = RGBA.Companion.invoke_tjonv8$(0, 0, 255, 63);
        tmp$_12.drawQuad_bjriwo$(tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, mouseHitResultUsed.globalMatrix, void 0, tmp$_11);
        var vview = mouseHitResultUsed;
        var yy = 16;
        while (vview != null) {
          drawText($receiver.renderContext, Fonts$Companion_getInstance().defaultFont, 16.0, vview.toString(), 0, yy);
          vview = vview != null ? vview.parent : null;
          yy = yy + 16 | 0;
        }
      }
      return Unit;
    };
  }
  MouseEvents.prototype.update_vcgvf3$ = function (views, ms) {
    var dtMs = numberToInt(ms);
    if (!this.view.mouseEnabled)
      return;
    var $this = this.get_mouseDebugHandlerOnce_jv80cy$(views);
    if (!$this.completed) {
      $this.completed = true;
      views.debugHandlers.add_11rb$(MouseEvents$update$lambda$lambda(views, this));
    }
    this.hitTest = this.hitTest_0(views);
    var over = this.isOver;
    if (over)
      this.set_mouseHitResultUsed_irk9rs$(views.input, this.view);
    var pressing = views.input.mouseButtons !== 0;
    var overChanged = this.lastOver_0 !== over;
    var pressingChanged = pressing !== this.lastPressing_0;
    this.view.globalToLocal_n3axqd$(views.input.mouse, this.currentPos);
    if (!overChanged && over && !equals(this.currentPos, this.lastPos))
      this.onMove.invoke_11rb$(this);
    if (!overChanged && !over && !equals(this.currentPos, this.lastPos))
      this.onMoveOutside.invoke_11rb$(this);
    if (!equals(this.currentPos, this.lastPos))
      this.onMoveAnywhere.invoke_11rb$(this);
    if (overChanged && over)
      this.onOver.invoke_11rb$(this);
    if (overChanged && !over)
      this.onOut.invoke_11rb$(this);
    if (over && pressingChanged && pressing) {
      this.startedPos.copyFrom_r62tv1$(this.currentPos);
      this.onDown.invoke_11rb$(this);
    }
    if (overChanged && pressing) {
      this.onDownFromOutside.invoke_11rb$(this);
    }
    if (pressingChanged && !pressing) {
      if (over)
        this.onUp.invoke_11rb$(this);
      else
        this.onUpOutside.invoke_11rb$(this);
      this.onUpAnywhere.invoke_11rb$(this);
    }
    this.lastOver_0 = over;
    this.lastPressing_0 = pressing;
    this.lastPos.copyFrom_r62tv1$(this.currentPos);
    this.clickedCount = 0;
  };
  function MouseEvents$mouseHitSearch$lambda() {
    return false;
  }
  function MouseEvents$mouseHitResult$lambda() {
    return null;
  }
  function MouseEvents$mouseHitResultUsed$lambda() {
    return null;
  }
  function MouseEvents$mouseDebugHandlerOnce$lambda() {
    return new Once();
  }
  MouseEvents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MouseEvents',
    interfaces: [UpdateComponentWithViews, MouseComponent]
  };
  function mouse$lambda$lambda(this$) {
    return function (it) {
      return new MouseEvents(this$);
    };
  }
  function mouse$lambda($receiver) {
    return $receiver.getOrCreateComponent_twnkl3$(getKClass(MouseEvents), mouse$lambda$lambda($receiver));
  }
  var mouse;
  var mouse_metadata = new PropertyMetadata('mouse');
  function get_mouse($receiver) {
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = mouse.name) != null ? tmp$ : mouse_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = mouse.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = mouse.name) != null ? tmp$_3 : mouse_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  var mouse_0 = defineInlineFunction('korge-js.com.soywiz.korge.input.mouse_cr2qe1$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    return function ($receiver, callback) {
      return callback(get_mouse($receiver));
    };
  }));
  var onClick = defineInlineFunction('korge-js.com.soywiz.korge.input.onClick_j1eskf$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onClick : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  var onOver = defineInlineFunction('korge-js.com.soywiz.korge.input.onOver_j1eskf$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onOver : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  var onOut = defineInlineFunction('korge-js.com.soywiz.korge.input.onOut_j1eskf$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onOut : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  var onDown = defineInlineFunction('korge-js.com.soywiz.korge.input.onDown_j1eskf$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onDown : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  var onDownFromOutside = defineInlineFunction('korge-js.com.soywiz.korge.input.onDownFromOutside_j1eskf$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onDownFromOutside : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  var onUp = defineInlineFunction('korge-js.com.soywiz.korge.input.onUp_j1eskf$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onUp : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  var onUpOutside = defineInlineFunction('korge-js.com.soywiz.korge.input.onUpOutside_j1eskf$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onUpOutside : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  var onUpAnywhere = defineInlineFunction('korge-js.com.soywiz.korge.input.onUpAnywhere_j1eskf$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onUpAnywhere : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  var onMove = defineInlineFunction('korge-js.com.soywiz.korge.input.onMove_j1eskf$', wrapFunction(function () {
    var get_mouse = _.com.soywiz.korge.input.get_mouse_gohfi1$;
    var get_KorgeDispatcher = _.com.soywiz.korge.async.get_KorgeDispatcher;
    var addSuspend = _.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
    return function ($receiver, handler) {
      var tmp$, tmp$_0;
      (tmp$_0 = (tmp$ = $receiver != null ? get_mouse($receiver) : null) != null ? tmp$.onMove : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), handler) : null;
      return $receiver;
    };
  }));
  function LipSync(lipsync) {
    this.lipsync = lipsync;
  }
  Object.defineProperty(LipSync.prototype, 'timeMs', {
    get: function () {
      return this.lipsync.length * 16 | 0;
    }
  });
  LipSync.prototype.get_za3lpa$ = function (timeMs) {
    var $receiver = this.lipsync;
    var index = timeMs / 16 | 0;
    return toBoxedChar(index >= 0 && index <= get_lastIndex_2($receiver) ? $receiver.charCodeAt(index) : unboxChar(toBoxedChar(88)));
  };
  LipSync.prototype.getAF_za3lpa$ = function (timeMs) {
    var tmp$;
    var c = unboxChar(this.get_za3lpa$(timeMs));
    switch (c) {
      case 71:
        tmp$ = 66;
        break;
      case 72:
        tmp$ = 67;
        break;
      case 88:
        tmp$ = 65;
        break;
      default:tmp$ = c;
        break;
    }
    return toBoxedChar(tmp$);
  };
  LipSync.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LipSync',
    interfaces: []
  };
  function Voice(views, voice, lipsync) {
    this.views = views;
    this.voice = voice;
    this.lipsync = lipsync;
  }
  Object.defineProperty(Voice.prototype, 'timeMs', {
    get: function () {
      return this.lipsync.timeMs;
    }
  });
  Voice.prototype.get_za3lpa$ = function (timeMs) {
    return this.lipsync.get_za3lpa$(timeMs);
  };
  Voice.prototype.getAF_za3lpa$ = function (timeMs) {
    return this.lipsync.getAF_za3lpa$(timeMs);
  };
  Voice.prototype.play_61zpoe$ = function (name_0, continuation_0, suspended) {
    var instance = new Coroutine$play_61zpoe$(this, name_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$play_61zpoe$($this, name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$name = name_0;
  }
  Coroutine$play_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$play_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$play_61zpoe$.prototype.constructor = Coroutine$play_61zpoe$;
  Coroutine$play_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = get_lipSync(this.$this.views).play_vey2p8$(this.$this, this.local$name, this);
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
  Voice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Voice',
    interfaces: []
  };
  function LipSyncEvent(name, time, lip) {
    if (name === void 0)
      name = '';
    if (time === void 0)
      time = 0.0;
    if (lip === void 0)
      lip = 88;
    Event.call(this);
    this.name = name;
    this.time = time;
    this.lip = toBoxedChar(lip);
  }
  Object.defineProperty(LipSyncEvent.prototype, 'timeMs', {
    get: function () {
      return numberToInt(this.time * 1000);
    }
  });
  LipSyncEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LipSyncEvent',
    interfaces: [Event]
  };
  LipSyncEvent.prototype.component1 = function () {
    return this.name;
  };
  LipSyncEvent.prototype.component2 = function () {
    return this.time;
  };
  LipSyncEvent.prototype.component3 = function () {
    return this.lip;
  };
  LipSyncEvent.prototype.copy_ya8hwn$ = function (name, time, lip) {
    return new LipSyncEvent(name === void 0 ? this.name : name, time === void 0 ? this.time : time, lip === void 0 ? this.lip : lip);
  };
  LipSyncEvent.prototype.toString = function () {
    return 'LipSyncEvent(name=' + Kotlin.toString(this.name) + (', time=' + Kotlin.toString(this.time)) + (', lip=' + Kotlin.toString(this.lip)) + ')';
  };
  LipSyncEvent.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    result = result * 31 + Kotlin.hashCode(this.lip) | 0;
    return result;
  };
  LipSyncEvent.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.time, other.time) && Kotlin.equals(this.lip, other.lip)))));
  };
  function LipSyncHandler(views) {
    this.views = views;
    this.event = new LipSyncEvent();
  }
  LipSyncHandler.prototype.dispatch_0 = function (name, elapsedTime, lip) {
    var tmp$ = this.views;
    var $receiver = this.event;
    $receiver.name = name;
    $receiver.time = elapsedTime;
    $receiver.lip = toBoxedChar(lip);
    tmp$.dispatch_dt5jzj$(getKClass(LipSyncEvent), $receiver);
  };
  function LipSyncHandler$play$lambda$lambda(closure$channel, closure$cancel, closure$name, this$LipSyncHandler, closure$voice) {
    return function (it) {
      var tmp$;
      var elapsedTime = closure$channel.position;
      var elapsedTimeMs = numberToInt(elapsedTime * 1000);
      if (elapsedTime >= closure$channel.length) {
        (tmp$ = closure$cancel.v) != null ? (tmp$.cancel_tcv7n7$(), Unit) : null;
        this$LipSyncHandler.dispatch_0(closure$name, 0.0, 88);
      }
       else {
        this$LipSyncHandler.dispatch_0(closure$name, closure$channel.position, unboxChar(closure$voice.get_za3lpa$(elapsedTimeMs)));
      }
      return Unit;
    };
  }
  var SuccessOrFailure = Kotlin.kotlin.SuccessOrFailure;
  function LipSyncHandler$play$lambda$lambda_0(closure$channel_0, closure$c_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$LipSyncHandler$play$lambda$lambda(closure$channel_0, closure$c_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$LipSyncHandler$play$lambda$lambda(closure$channel_0, closure$c_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$channel = closure$channel_0;
    this.local$closure$c = closure$c_0;
  }
  Coroutine$LipSyncHandler$play$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$LipSyncHandler$play$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$LipSyncHandler$play$lambda$lambda.prototype.constructor = Coroutine$LipSyncHandler$play$lambda$lambda;
  Coroutine$LipSyncHandler$play$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$channel.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$closure$c.resumeWith_i5d895$(new SuccessOrFailure(Unit));
            return Unit;
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
  function LipSyncHandler$play$lambda$lambda_1(closure$cancel, closure$cancel2, closure$channel, closure$name, this$LipSyncHandler) {
    return function (it) {
      var tmp$;
      var tmp$_0;
      if (it != null)
        tmp$_0 = it;
      else {
        throw IllegalStateException_init_0('Unknown'.toString());
      }
      var error = tmp$_0;
      (tmp$ = closure$cancel.v) != null ? (tmp$.cancel_tcv7n7$(error), Unit) : null;
      closure$cancel2.cancel_dbl4no$(error);
      closure$channel.stop();
      this$LipSyncHandler.dispatch_0(closure$name, 0.0, 88);
      return Unit;
    };
  }
  function LipSyncHandler$play$lambda(this$LipSyncHandler, closure$voice, closure$name) {
    return function (c) {
      var cancel = {v: null};
      var channel = get_soundSystem(this$LipSyncHandler.views).play_eej0pj$(closure$voice.voice);
      cancel.v = this$LipSyncHandler.views.stage.addUpdatable_b4k9x1$(LipSyncHandler$play$lambda$lambda(channel, cancel, closure$name, this$LipSyncHandler, closure$voice));
      var cancel2 = launchImmediately_0(c.context, void 0, LipSyncHandler$play$lambda$lambda_0(channel, c));
      c.invokeOnCancellation_f05bi3$(LipSyncHandler$play$lambda$lambda_1(cancel, cancel2, channel, closure$name, this$LipSyncHandler));
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
  LipSyncHandler.prototype.play_vey2p8$ = function (voice_0, name_0, continuation_0, suspended) {
    var instance = new Coroutine$play_vey2p8$(this, voice_0, name_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$play_vey2p8$($this, voice_0, name_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$voice = voice_0;
    this.local$name = name_0;
  }
  Coroutine$play_vey2p8$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$play_vey2p8$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$play_vey2p8$.prototype.constructor = Coroutine$play_vey2p8$;
  Coroutine$play_vey2p8$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda(false, LipSyncHandler$play$lambda(this.$this, this.local$voice, this.local$name))(this);
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
  LipSyncHandler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LipSyncHandler',
    interfaces: []
  };
  function LipSyncComponent(view) {
    this.view_el6p76$_0 = view;
  }
  Object.defineProperty(LipSyncComponent.prototype, 'view', {
    get: function () {
      return this.view_el6p76$_0;
    }
  });
  LipSyncComponent.prototype.onEvent_tgarok$ = function (event) {
    if (Kotlin.isType(event, LipSyncEvent)) {
      var name = this.view.getPropString_puj7f4$('lipsync');
      if (equals(event.name, name)) {
        play_0(this.view, String.fromCharCode(unboxChar(event.lip)));
      }
    }
  };
  LipSyncComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LipSyncComponent',
    interfaces: [EventComponent]
  };
  function lipSync$lambda($receiver) {
    return new LipSyncHandler($receiver);
  }
  var lipSync;
  var lipSync_metadata = new PropertyMetadata('lipSync');
  function get_lipSync($receiver) {
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = lipSync.name) != null ? tmp$ : lipSync_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = lipSync.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = lipSync.name) != null ? tmp$_3 : lipSync_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  }
  function readVoice($receiver_0, views_0, continuation_0, suspended) {
    var instance = new Coroutine$readVoice($receiver_0, views_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readVoice($receiver_0, views_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$lipsyncFile = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
  }
  Coroutine$readVoice.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readVoice.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readVoice.prototype.constructor = Coroutine$readVoice;
  Coroutine$readVoice.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$lipsyncFile = this.local$$receiver.withExtension_61zpoe$('lipsync');
            this.state_0 = 2;
            this.result_0 = readNativeSoundOptimized(this.local$$receiver, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$lipsyncFile.exists(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (this.result_0) {
              this.state_0 = 4;
              this.result_0 = this.local$lipsyncFile.readString_qa9gbo$(void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.local$tmp$_0 = '';
              this.state_0 = 5;
              continue;
            }

          case 4:
            var $receiver = this.result_0;
            var tmp$;
            this.local$tmp$_0 = trim(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
            this.state_0 = 5;
            continue;
          case 5:
            return new Voice(this.local$views, this.local$tmp$, new LipSync(this.local$tmp$_0));
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
  var IVector2_init = $module$korma_js.com.soywiz.korma.IVector2;
  function ParticleEmitter(views) {
    this.views = views;
    this.texture = null;
    this.sourcePosition = new IVector2_init(0.0, 0.0);
    this.sourcePositionVariance = new IVector2_init(0.0, 0.0);
    this.speed = 0.0;
    this.speedVariance = 0.0;
    this.lifeSpan = 0.0;
    this.lifespanVariance = 0.0;
    this.angle = 0.0;
    this.angleVariance = 0.0;
    this.gravity = new IVector2_init(0.0, 0.0);
    this.radialAcceleration = 0.0;
    this.tangentialAcceleration = 0.0;
    this.radialAccelVariance = 0.0;
    this.tangentialAccelVariance = 0.0;
    this.startColor = new RGBAf(1.0, 1.0, 1.0, 1.0);
    this.startColorVariance = new RGBAf(0.0, 0.0, 0.0, 0.0);
    this.endColor = new RGBAf(1.0, 1.0, 1.0, 1.0);
    this.endColorVariance = new RGBAf(0.0, 0.0, 0.0, 0.0);
    this.maxParticles = 0;
    this.startSize = 0.0;
    this.startSizeVariance = 0.0;
    this.endSize = 0.0;
    this.endSizeVariance = 0.0;
    this.duration = 0.0;
    this.emitterType = ParticleEmitter$Type$GRAVITY_getInstance();
    this.maxRadius = 0.0;
    this.maxRadiusVariance = 0.0;
    this.minRadius = 0.0;
    this.minRadiusVariance = 0.0;
    this.rotatePerSecond = 0.0;
    this.rotatePerSecondVariance = 0.0;
    this.blendFactors = BlendMode$NORMAL_getInstance().factors;
    this.rotationStart = 0.0;
    this.rotationStartVariance = 0.0;
    this.rotationEnd = 0.0;
    this.rotationEndVariance = 0.0;
  }
  function ParticleEmitter$Type(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ParticleEmitter$Type_initFields() {
    ParticleEmitter$Type_initFields = function () {
    };
    ParticleEmitter$Type$GRAVITY_instance = new ParticleEmitter$Type('GRAVITY', 0);
    ParticleEmitter$Type$RADIAL_instance = new ParticleEmitter$Type('RADIAL', 1);
  }
  var ParticleEmitter$Type$GRAVITY_instance;
  function ParticleEmitter$Type$GRAVITY_getInstance() {
    ParticleEmitter$Type_initFields();
    return ParticleEmitter$Type$GRAVITY_instance;
  }
  var ParticleEmitter$Type$RADIAL_instance;
  function ParticleEmitter$Type$RADIAL_getInstance() {
    ParticleEmitter$Type_initFields();
    return ParticleEmitter$Type$RADIAL_instance;
  }
  ParticleEmitter$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function ParticleEmitter$Type$values() {
    return [ParticleEmitter$Type$GRAVITY_getInstance(), ParticleEmitter$Type$RADIAL_getInstance()];
  }
  ParticleEmitter$Type.values = ParticleEmitter$Type$values;
  function ParticleEmitter$Type$valueOf(name) {
    switch (name) {
      case 'GRAVITY':
        return ParticleEmitter$Type$GRAVITY_getInstance();
      case 'RADIAL':
        return ParticleEmitter$Type$RADIAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korge.particle.ParticleEmitter.Type.' + name);
    }
  }
  ParticleEmitter$Type.valueOf_61zpoe$ = ParticleEmitter$Type$valueOf;
  ParticleEmitter.prototype.create_syxxoe$ = function (x, y, time) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (time === void 0)
      time = 2147483647;
    var $receiver = new ParticleEmitterView(this, new IVector2_init(numberToDouble(x), numberToDouble(y)));
    $receiver.timeUntilStop = time;
    return $receiver;
  };
  function ParticleEmitter$load$lambda$point(closure$item) {
    return function () {
      var x = closure$item.double_io5o9c$('x');
      var y = closure$item.double_io5o9c$('y');
      return new IVector2_init(numberToDouble(x), numberToDouble(y));
    };
  }
  function ParticleEmitter$load$lambda$scalar(closure$item) {
    return function () {
      return closure$item.double_io5o9c$('value');
    };
  }
  function ParticleEmitter$load$lambda$blendFactor(closure$scalar) {
    return function () {
      switch (numberToInt(closure$scalar())) {
        case 0:
          return AG$BlendFactor.ZERO;
        case 1:
          return AG$BlendFactor.ONE;
        case 768:
          return AG$BlendFactor.SOURCE_COLOR;
        case 769:
          return AG$BlendFactor.ONE_MINUS_SOURCE_COLOR;
        case 770:
          return AG$BlendFactor.SOURCE_ALPHA;
        case 771:
          return AG$BlendFactor.ONE_MINUS_SOURCE_ALPHA;
        case 772:
          return AG$BlendFactor.DESTINATION_ALPHA;
        case 773:
          return AG$BlendFactor.ONE_MINUS_DESTINATION_ALPHA;
        case 774:
          return AG$BlendFactor.DESTINATION_COLOR;
        case 775:
          return AG$BlendFactor.ONE_MINUS_DESTINATION_COLOR;
        default:return AG$BlendFactor.ONE;
      }
    };
  }
  function ParticleEmitter$load$lambda$angle(closure$item) {
    return function () {
      return Angle.Companion.toRadians_14dthe$(closure$item.double_io5o9c$('value'));
    };
  }
  function ParticleEmitter$load$lambda$color(closure$item) {
    return function () {
      var r = closure$item.double_io5o9c$('red');
      var g = closure$item.double_io5o9c$('green');
      var b = closure$item.double_io5o9c$('blue');
      var a = closure$item.double_io5o9c$('alpha');
      return new RGBAf(numberToDouble(r), numberToDouble(g), numberToDouble(b), numberToDouble(a));
    };
  }
  ParticleEmitter.prototype.load_3ekr7n$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$load_3ekr7n$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$load_3ekr7n$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$blendFuncSource = void 0;
    this.local$blendFuncDestination = void 0;
    this.local$file = file_0;
  }
  Coroutine$load_3ekr7n$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$load_3ekr7n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$load_3ekr7n$.prototype.constructor = Coroutine$load_3ekr7n$;
  Coroutine$load_3ekr7n$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.state_0 = 2;
            this.result_0 = readXml(this.local$file, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var particleXml = this.result_0;
            this.local$blendFuncSource = AG$BlendFactor.ONE;
            this.local$blendFuncDestination = AG$BlendFactor.ONE;
            this.local$tmp$ = particleXml.allChildrenNoComments.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 6;
              continue;
            }

            var item = this.local$tmp$.next();
            var point = ParticleEmitter$load$lambda$point(item);
            var scalar = ParticleEmitter$load$lambda$scalar(item);
            var blendFactor = ParticleEmitter$load$lambda$blendFactor(scalar);
            var angle = ParticleEmitter$load$lambda$angle(item);
            var color_0 = ParticleEmitter$load$lambda$color(item);
            switch (item.name.toLowerCase()) {
              case 'texture':
                this.state_0 = 4;
                this.result_0 = readBitmapSlice(this.local$file.parent.get_61zpoe$(item.str_puj7f4$('name')), format.defaultImageFormats, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 'sourceposition':
                this.$this.sourcePosition = point();
                this.state_0 = 5;
                continue;
              case 'sourcepositionvariance':
                this.$this.sourcePositionVariance = point();
                this.state_0 = 5;
                continue;
              case 'speed':
                this.$this.speed = scalar();
                this.state_0 = 5;
                continue;
              case 'speedvariance':
                this.$this.speedVariance = scalar();
                this.state_0 = 5;
                continue;
              case 'particlelifespan':
                this.$this.lifeSpan = scalar();
                this.state_0 = 5;
                continue;
              case 'particlelifespanvariance':
                this.$this.lifespanVariance = scalar();
                this.state_0 = 5;
                continue;
              case 'angle':
                this.$this.angle = angle();
                this.state_0 = 5;
                continue;
              case 'anglevariance':
                this.$this.angleVariance = angle();
                this.state_0 = 5;
                continue;
              case 'gravity':
                this.$this.gravity = point();
                this.state_0 = 5;
                continue;
              case 'radialacceleration':
                this.$this.radialAcceleration = scalar();
                this.state_0 = 5;
                continue;
              case 'tangentialacceleration':
                this.$this.tangentialAcceleration = scalar();
                this.state_0 = 5;
                continue;
              case 'radialaccelvariance':
                this.$this.radialAccelVariance = scalar();
                this.state_0 = 5;
                continue;
              case 'tangentialaccelvariance':
                this.$this.tangentialAccelVariance = scalar();
                this.state_0 = 5;
                continue;
              case 'startcolor':
                this.$this.startColor = color_0();
                this.state_0 = 5;
                continue;
              case 'startcolorvariance':
                this.$this.startColorVariance = color_0();
                this.state_0 = 5;
                continue;
              case 'finishcolor':
                this.$this.endColor = color_0();
                this.state_0 = 5;
                continue;
              case 'finishcolorvariance':
                this.$this.endColorVariance = color_0();
                this.state_0 = 5;
                continue;
              case 'maxparticles':
                this.$this.maxParticles = numberToInt(scalar());
                this.state_0 = 5;
                continue;
              case 'startparticlesize':
                this.$this.startSize = scalar();
                this.state_0 = 5;
                continue;
              case 'startparticlesizevariance':
                this.$this.startSizeVariance = scalar();
                this.state_0 = 5;
                continue;
              case 'finishparticlesize':
                this.$this.endSize = scalar();
                this.state_0 = 5;
                continue;
              case 'finishparticlesizevariance':
                this.$this.endSizeVariance = scalar();
                this.state_0 = 5;
                continue;
              case 'duration':
                this.$this.duration = scalar();
                this.state_0 = 5;
                continue;
              case 'emittertype':
                switch (numberToInt(scalar())) {
                  case 0:
                    tmp$ = ParticleEmitter$Type$GRAVITY_getInstance();
                    break;
                  case 1:
                    tmp$ = ParticleEmitter$Type$RADIAL_getInstance();
                    break;
                  default:tmp$ = ParticleEmitter$Type$GRAVITY_getInstance();
                    break;
                }

                this.$this.emitterType = tmp$;
                this.state_0 = 5;
                continue;
              case 'maxradius':
                this.$this.maxRadius = scalar();
                this.state_0 = 5;
                continue;
              case 'maxradiusvariance':
                this.$this.maxRadiusVariance = scalar();
                this.state_0 = 5;
                continue;
              case 'minradius':
                this.$this.minRadius = scalar();
                this.state_0 = 5;
                continue;
              case 'minradiusvariance':
                this.$this.minRadiusVariance = scalar();
                this.state_0 = 5;
                continue;
              case 'rotatepersecond':
                this.$this.rotatePerSecond = scalar();
                this.state_0 = 5;
                continue;
              case 'rotatepersecondvariance':
                this.$this.rotatePerSecondVariance = scalar();
                this.state_0 = 5;
                continue;
              case 'blendfuncsource':
                this.local$blendFuncSource = blendFactor();
                this.state_0 = 5;
                continue;
              case 'blendfuncdestination':
                this.local$blendFuncDestination = blendFactor();
                this.state_0 = 5;
                continue;
              case 'rotationstart':
                this.$this.rotationStart = angle();
                this.state_0 = 5;
                continue;
              case 'rotationstartvariance':
                this.$this.rotationStartVariance = angle();
                this.state_0 = 5;
                continue;
              case 'rotationend':
                this.$this.rotationEnd = angle();
                this.state_0 = 5;
                continue;
              case 'rotationendvariance':
                this.$this.rotationEndVariance = angle();
                this.state_0 = 5;
                continue;
            }

          case 4:
            this.$this.texture = this.result_0;
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 3;
            continue;
          case 6:
            this.$this.blendFactors = AG$AG$Blending_init(this.local$blendFuncSource, this.local$blendFuncDestination);
            return this.$this;
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
  function ParticleEmitter$Particle(x, y, scale, rotation, currentTime, totalTime, colorR, colorG, colorB, colorA, colorRdelta, colorGdelta, colorBdelta, colorAdelta, startX, startY, velocityX, velocityY, radialAcceleration, tangentialAcceleration, emitRadius, emitRadiusDelta, emitRotation, emitRotationDelta, rotationDelta, scaleDelta) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (scale === void 0)
      scale = 1.0;
    if (rotation === void 0)
      rotation = 0.0;
    if (currentTime === void 0)
      currentTime = 0.0;
    if (totalTime === void 0)
      totalTime = 0.0;
    if (colorR === void 0)
      colorR = 1.0;
    if (colorG === void 0)
      colorG = 1.0;
    if (colorB === void 0)
      colorB = 1.0;
    if (colorA === void 0)
      colorA = 1.0;
    if (colorRdelta === void 0)
      colorRdelta = 0.0;
    if (colorGdelta === void 0)
      colorGdelta = 0.0;
    if (colorBdelta === void 0)
      colorBdelta = 0.0;
    if (colorAdelta === void 0)
      colorAdelta = 0.0;
    if (startX === void 0)
      startX = 0.0;
    if (startY === void 0)
      startY = 0.0;
    if (velocityX === void 0)
      velocityX = 0.0;
    if (velocityY === void 0)
      velocityY = 0.0;
    if (radialAcceleration === void 0)
      radialAcceleration = 0.0;
    if (tangentialAcceleration === void 0)
      tangentialAcceleration = 0.0;
    if (emitRadius === void 0)
      emitRadius = 0.0;
    if (emitRadiusDelta === void 0)
      emitRadiusDelta = 0.0;
    if (emitRotation === void 0)
      emitRotation = 0.0;
    if (emitRotationDelta === void 0)
      emitRotationDelta = 0.0;
    if (rotationDelta === void 0)
      rotationDelta = 0.0;
    if (scaleDelta === void 0)
      scaleDelta = 0.0;
    this.x = x;
    this.y = y;
    this.scale = scale;
    this.rotation = rotation;
    this.currentTime = currentTime;
    this.totalTime = totalTime;
    this.colorR = colorR;
    this.colorG = colorG;
    this.colorB = colorB;
    this.colorA = colorA;
    this.colorRdelta = colorRdelta;
    this.colorGdelta = colorGdelta;
    this.colorBdelta = colorBdelta;
    this.colorAdelta = colorAdelta;
    this.startX = startX;
    this.startY = startY;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.radialAcceleration = radialAcceleration;
    this.tangentialAcceleration = tangentialAcceleration;
    this.emitRadius = emitRadius;
    this.emitRadiusDelta = emitRadiusDelta;
    this.emitRotation = emitRotation;
    this.emitRotationDelta = emitRotationDelta;
    this.rotationDelta = rotationDelta;
    this.scaleDelta = scaleDelta;
  }
  Object.defineProperty(ParticleEmitter$Particle.prototype, 'colorInt', {
    get: function () {
      return new RGBA(RGBA.Companion.packf_7b5o5w$(this.colorR, this.colorG, this.colorB, this.colorA));
    }
  });
  Object.defineProperty(ParticleEmitter$Particle.prototype, 'alive', {
    get: function () {
      return this.currentTime < this.totalTime;
    }
  });
  ParticleEmitter$Particle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Particle',
    interfaces: []
  };
  ParticleEmitter$Particle.prototype.component1 = function () {
    return this.x;
  };
  ParticleEmitter$Particle.prototype.component2 = function () {
    return this.y;
  };
  ParticleEmitter$Particle.prototype.component3 = function () {
    return this.scale;
  };
  ParticleEmitter$Particle.prototype.component4 = function () {
    return this.rotation;
  };
  ParticleEmitter$Particle.prototype.component5 = function () {
    return this.currentTime;
  };
  ParticleEmitter$Particle.prototype.component6 = function () {
    return this.totalTime;
  };
  ParticleEmitter$Particle.prototype.component7 = function () {
    return this.colorR;
  };
  ParticleEmitter$Particle.prototype.component8 = function () {
    return this.colorG;
  };
  ParticleEmitter$Particle.prototype.component9 = function () {
    return this.colorB;
  };
  ParticleEmitter$Particle.prototype.component10 = function () {
    return this.colorA;
  };
  ParticleEmitter$Particle.prototype.component11 = function () {
    return this.colorRdelta;
  };
  ParticleEmitter$Particle.prototype.component12 = function () {
    return this.colorGdelta;
  };
  ParticleEmitter$Particle.prototype.component13 = function () {
    return this.colorBdelta;
  };
  ParticleEmitter$Particle.prototype.component14 = function () {
    return this.colorAdelta;
  };
  ParticleEmitter$Particle.prototype.component15 = function () {
    return this.startX;
  };
  ParticleEmitter$Particle.prototype.component16 = function () {
    return this.startY;
  };
  ParticleEmitter$Particle.prototype.component17 = function () {
    return this.velocityX;
  };
  ParticleEmitter$Particle.prototype.component18 = function () {
    return this.velocityY;
  };
  ParticleEmitter$Particle.prototype.component19 = function () {
    return this.radialAcceleration;
  };
  ParticleEmitter$Particle.prototype.component20 = function () {
    return this.tangentialAcceleration;
  };
  ParticleEmitter$Particle.prototype.component21 = function () {
    return this.emitRadius;
  };
  ParticleEmitter$Particle.prototype.component22 = function () {
    return this.emitRadiusDelta;
  };
  ParticleEmitter$Particle.prototype.component23 = function () {
    return this.emitRotation;
  };
  ParticleEmitter$Particle.prototype.component24 = function () {
    return this.emitRotationDelta;
  };
  ParticleEmitter$Particle.prototype.component25 = function () {
    return this.rotationDelta;
  };
  ParticleEmitter$Particle.prototype.component26 = function () {
    return this.scaleDelta;
  };
  ParticleEmitter$Particle.prototype.copy_7ojnuo$ = function (x, y, scale, rotation, currentTime, totalTime, colorR, colorG, colorB, colorA, colorRdelta, colorGdelta, colorBdelta, colorAdelta, startX, startY, velocityX, velocityY, radialAcceleration, tangentialAcceleration, emitRadius, emitRadiusDelta, emitRotation, emitRotationDelta, rotationDelta, scaleDelta) {
    return new ParticleEmitter$Particle(x === void 0 ? this.x : x, y === void 0 ? this.y : y, scale === void 0 ? this.scale : scale, rotation === void 0 ? this.rotation : rotation, currentTime === void 0 ? this.currentTime : currentTime, totalTime === void 0 ? this.totalTime : totalTime, colorR === void 0 ? this.colorR : colorR, colorG === void 0 ? this.colorG : colorG, colorB === void 0 ? this.colorB : colorB, colorA === void 0 ? this.colorA : colorA, colorRdelta === void 0 ? this.colorRdelta : colorRdelta, colorGdelta === void 0 ? this.colorGdelta : colorGdelta, colorBdelta === void 0 ? this.colorBdelta : colorBdelta, colorAdelta === void 0 ? this.colorAdelta : colorAdelta, startX === void 0 ? this.startX : startX, startY === void 0 ? this.startY : startY, velocityX === void 0 ? this.velocityX : velocityX, velocityY === void 0 ? this.velocityY : velocityY, radialAcceleration === void 0 ? this.radialAcceleration : radialAcceleration, tangentialAcceleration === void 0 ? this.tangentialAcceleration : tangentialAcceleration, emitRadius === void 0 ? this.emitRadius : emitRadius, emitRadiusDelta === void 0 ? this.emitRadiusDelta : emitRadiusDelta, emitRotation === void 0 ? this.emitRotation : emitRotation, emitRotationDelta === void 0 ? this.emitRotationDelta : emitRotationDelta, rotationDelta === void 0 ? this.rotationDelta : rotationDelta, scaleDelta === void 0 ? this.scaleDelta : scaleDelta);
  };
  ParticleEmitter$Particle.prototype.toString = function () {
    return 'Particle(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', scale=' + Kotlin.toString(this.scale)) + (', rotation=' + Kotlin.toString(this.rotation)) + (', currentTime=' + Kotlin.toString(this.currentTime)) + (', totalTime=' + Kotlin.toString(this.totalTime)) + (', colorR=' + Kotlin.toString(this.colorR)) + (', colorG=' + Kotlin.toString(this.colorG)) + (', colorB=' + Kotlin.toString(this.colorB)) + (', colorA=' + Kotlin.toString(this.colorA)) + (', colorRdelta=' + Kotlin.toString(this.colorRdelta)) + (', colorGdelta=' + Kotlin.toString(this.colorGdelta)) + (', colorBdelta=' + Kotlin.toString(this.colorBdelta)) + (', colorAdelta=' + Kotlin.toString(this.colorAdelta)) + (', startX=' + Kotlin.toString(this.startX)) + (', startY=' + Kotlin.toString(this.startY)) + (', velocityX=' + Kotlin.toString(this.velocityX)) + (', velocityY=' + Kotlin.toString(this.velocityY)) + (', radialAcceleration=' + Kotlin.toString(this.radialAcceleration)) + (', tangentialAcceleration=' + Kotlin.toString(this.tangentialAcceleration)) + (', emitRadius=' + Kotlin.toString(this.emitRadius)) + (', emitRadiusDelta=' + Kotlin.toString(this.emitRadiusDelta)) + (', emitRotation=' + Kotlin.toString(this.emitRotation)) + (', emitRotationDelta=' + Kotlin.toString(this.emitRotationDelta)) + (', rotationDelta=' + Kotlin.toString(this.rotationDelta)) + (', scaleDelta=' + Kotlin.toString(this.scaleDelta)) + ')';
  };
  ParticleEmitter$Particle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotation) | 0;
    result = result * 31 + Kotlin.hashCode(this.currentTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalTime) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorR) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorG) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorB) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorA) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorRdelta) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorGdelta) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorBdelta) | 0;
    result = result * 31 + Kotlin.hashCode(this.colorAdelta) | 0;
    result = result * 31 + Kotlin.hashCode(this.startX) | 0;
    result = result * 31 + Kotlin.hashCode(this.startY) | 0;
    result = result * 31 + Kotlin.hashCode(this.velocityX) | 0;
    result = result * 31 + Kotlin.hashCode(this.velocityY) | 0;
    result = result * 31 + Kotlin.hashCode(this.radialAcceleration) | 0;
    result = result * 31 + Kotlin.hashCode(this.tangentialAcceleration) | 0;
    result = result * 31 + Kotlin.hashCode(this.emitRadius) | 0;
    result = result * 31 + Kotlin.hashCode(this.emitRadiusDelta) | 0;
    result = result * 31 + Kotlin.hashCode(this.emitRotation) | 0;
    result = result * 31 + Kotlin.hashCode(this.emitRotationDelta) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotationDelta) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleDelta) | 0;
    return result;
  };
  ParticleEmitter$Particle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.scale, other.scale) && Kotlin.equals(this.rotation, other.rotation) && Kotlin.equals(this.currentTime, other.currentTime) && Kotlin.equals(this.totalTime, other.totalTime) && Kotlin.equals(this.colorR, other.colorR) && Kotlin.equals(this.colorG, other.colorG) && Kotlin.equals(this.colorB, other.colorB) && Kotlin.equals(this.colorA, other.colorA) && Kotlin.equals(this.colorRdelta, other.colorRdelta) && Kotlin.equals(this.colorGdelta, other.colorGdelta) && Kotlin.equals(this.colorBdelta, other.colorBdelta) && Kotlin.equals(this.colorAdelta, other.colorAdelta) && Kotlin.equals(this.startX, other.startX) && Kotlin.equals(this.startY, other.startY) && Kotlin.equals(this.velocityX, other.velocityX) && Kotlin.equals(this.velocityY, other.velocityY) && Kotlin.equals(this.radialAcceleration, other.radialAcceleration) && Kotlin.equals(this.tangentialAcceleration, other.tangentialAcceleration) && Kotlin.equals(this.emitRadius, other.emitRadius) && Kotlin.equals(this.emitRadiusDelta, other.emitRadiusDelta) && Kotlin.equals(this.emitRotation, other.emitRotation) && Kotlin.equals(this.emitRotationDelta, other.emitRotationDelta) && Kotlin.equals(this.rotationDelta, other.rotationDelta) && Kotlin.equals(this.scaleDelta, other.scaleDelta)))));
  };
  function ParticleEmitter$Simulator(emitter, emitterPos, seed) {
    if (emitterPos === void 0) {
      emitterPos = new IVector2_init(0.0, 0.0);
    }
    if (seed === void 0)
      seed = Random.Companion.nextLong();
    this.emitter_0 = emitter;
    this.emitterPos = emitterPos;
    this.seed = seed;
    this.random = Rand.Companion.invoke_s8cxhz$(this.seed);
    this.totalElapsedTime = 0;
    this.timeUntilStop = 2147483647;
    this.emitting = true;
    var tmp$, tmp$_0;
    this.textureWidth = (tmp$_0 = (tmp$ = this.emitter_0.texture) != null ? tmp$.width : null) != null ? tmp$_0 : 16;
    var $receiver = until(0, this.emitter_0.maxParticles);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(this.init_x8u5lw$(new ParticleEmitter$Particle()));
    }
    this.particles = destination;
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  Object.defineProperty(ParticleEmitter$Simulator.prototype, 'aliveCount', {
    get: function () {
      var $receiver = this.particles;
      var count$result;
      count$break: do {
        var tmp$;
        if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
          count$result = 0;
          break count$break;
        }
        var count = 0;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (element.alive) {
            count = count + 1 | 0;
          }
        }
        count$result = count;
      }
       while (false);
      return count$result;
    }
  });
  Object.defineProperty(ParticleEmitter$Simulator.prototype, 'anyAlive', {
    get: function () {
      return this.aliveCount > 0;
    }
  });
  ParticleEmitter$Simulator.prototype.randomVariance_0 = function (base, variance) {
    return base + variance * (nextDouble(this.random) * 2.0 - 1.0);
  };
  ParticleEmitter$Simulator.prototype.init_x8u5lw$ = function (particle) {
    var lifespan = this.randomVariance_0(this.emitter_0.lifeSpan, this.emitter_0.lifespanVariance);
    particle.currentTime = 0.0;
    particle.totalTime = Math_0.max(0.0, lifespan);
    var emitterX = this.emitterPos.x;
    var emitterY = this.emitterPos.y;
    particle.x = this.randomVariance_0(emitterX, this.emitter_0.sourcePositionVariance.x);
    particle.y = this.randomVariance_0(emitterY, this.emitter_0.sourcePositionVariance.y);
    particle.startX = emitterX;
    particle.startY = emitterY;
    var angle = this.randomVariance_0(this.emitter_0.angle, this.emitter_0.angleVariance);
    var speed = this.randomVariance_0(this.emitter_0.speed, this.emitter_0.speedVariance);
    particle.velocityX = speed * Math_0.cos(angle);
    particle.velocityY = speed * Math_0.sin(angle);
    var startRadius = this.randomVariance_0(this.emitter_0.maxRadius, this.emitter_0.maxRadiusVariance);
    var endRadius = this.randomVariance_0(this.emitter_0.minRadius, this.emitter_0.minRadiusVariance);
    particle.emitRadius = startRadius;
    particle.emitRadiusDelta = (endRadius - startRadius) / lifespan;
    particle.emitRotation = this.randomVariance_0(this.emitter_0.angle, this.emitter_0.angleVariance);
    particle.emitRotationDelta = this.randomVariance_0(this.emitter_0.rotatePerSecond, this.emitter_0.rotatePerSecondVariance);
    particle.radialAcceleration = this.randomVariance_0(this.emitter_0.radialAcceleration, this.emitter_0.radialAccelVariance);
    particle.tangentialAcceleration = this.randomVariance_0(this.emitter_0.tangentialAcceleration, this.emitter_0.tangentialAccelVariance);
    var b = this.randomVariance_0(this.emitter_0.startSize, this.emitter_0.startSizeVariance);
    var startSize = Math_0.max(0.1, b);
    var b_0 = this.randomVariance_0(this.emitter_0.endSize, this.emitter_0.endSizeVariance);
    var endSize = Math_0.max(0.1, b_0);
    particle.scale = startSize / this.textureWidth;
    particle.scaleDelta = (endSize - startSize) / lifespan / this.textureWidth;
    particle.colorR = this.randomVariance_0(this.emitter_0.startColor.rd, this.emitter_0.startColorVariance.rd);
    particle.colorG = this.randomVariance_0(this.emitter_0.startColor.gd, this.emitter_0.startColorVariance.gd);
    particle.colorB = this.randomVariance_0(this.emitter_0.startColor.bd, this.emitter_0.startColorVariance.bd);
    particle.colorA = this.randomVariance_0(this.emitter_0.startColor.ad, this.emitter_0.startColorVariance.ad);
    var endColorR = this.randomVariance_0(this.emitter_0.endColor.rd, this.emitter_0.endColorVariance.rd);
    var endColorG = this.randomVariance_0(this.emitter_0.endColor.gd, this.emitter_0.endColorVariance.gd);
    var endColorB = this.randomVariance_0(this.emitter_0.endColor.bd, this.emitter_0.endColorVariance.bd);
    var endColorA = this.randomVariance_0(this.emitter_0.endColor.ad, this.emitter_0.endColorVariance.ad);
    particle.colorRdelta = (endColorR - particle.colorR) / lifespan;
    particle.colorGdelta = (endColorG - particle.colorG) / lifespan;
    particle.colorBdelta = (endColorB - particle.colorB) / lifespan;
    particle.colorAdelta = (endColorA - particle.colorA) / lifespan;
    var startRotation = this.randomVariance_0(this.emitter_0.rotationStart, this.emitter_0.rotationStartVariance);
    var endRotation = this.randomVariance_0(this.emitter_0.rotationEnd, this.emitter_0.rotationEndVariance);
    particle.rotation = startRotation;
    particle.rotationDelta = (endRotation - startRotation) / lifespan;
    return particle;
  };
  ParticleEmitter$Simulator.prototype.advance_7r320e$ = function (particle, _elapsedTime) {
    var restTime = particle.totalTime - particle.currentTime;
    var elapsedTime = restTime > _elapsedTime ? _elapsedTime : restTime;
    particle.currentTime = particle.currentTime + elapsedTime;
    switch (this.emitter_0.emitterType.name) {
      case 'RADIAL':
        particle.emitRotation = particle.emitRotation + particle.emitRotationDelta * elapsedTime;
        particle.emitRadius = particle.emitRadius + particle.emitRadiusDelta * elapsedTime;
        var tmp$ = this.emitter_0.sourcePosition.x;
        var x = particle.emitRotation;
        particle.x = tmp$ - Math_0.cos(x) * particle.emitRadius;
        var tmp$_0 = this.emitter_0.sourcePosition.y;
        var x_0 = particle.emitRotation;
        particle.y = tmp$_0 - Math_0.sin(x_0) * particle.emitRadius;
        break;
      case 'GRAVITY':
        var distanceX = particle.x - particle.startX;
        var distanceY = particle.y - particle.startY;
        var x_1 = distanceX * distanceX + distanceY * distanceY;
        var b = Math_0.sqrt(x_1);
        var distanceScalar = Math_0.max(0.01, b);
        var radialX = distanceX / distanceScalar;
        var radialY = distanceY / distanceScalar;
        var tangentialX = radialX;
        var tangentialY = radialY;
        radialX *= particle.radialAcceleration;
        radialY *= particle.radialAcceleration;
        var newY = tangentialX;
        tangentialX = -tangentialY * particle.tangentialAcceleration;
        tangentialY = newY * particle.tangentialAcceleration;
        particle.velocityX = particle.velocityX + elapsedTime * (this.emitter_0.gravity.x + radialX + tangentialX);
        particle.velocityY = particle.velocityY + elapsedTime * (this.emitter_0.gravity.y + radialY + tangentialY);
        particle.x = particle.x + particle.velocityX * elapsedTime;
        particle.y = particle.y + particle.velocityY * elapsedTime;
        break;
    }
    particle.scale = particle.scale + particle.scaleDelta * elapsedTime;
    particle.rotation = particle.rotation + particle.rotationDelta * elapsedTime;
    particle.colorR = particle.colorR + particle.colorRdelta * elapsedTime;
    particle.colorG = particle.colorG + particle.colorGdelta * elapsedTime;
    particle.colorB = particle.colorB + particle.colorBdelta * elapsedTime;
    particle.colorA = particle.colorA + particle.colorAdelta * elapsedTime;
    if (!particle.alive && this.emitting)
      this.init_x8u5lw$(particle);
  };
  ParticleEmitter$Simulator.prototype.simulate_14dthe$ = function (time) {
    var tmp$;
    this.totalElapsedTime = this.totalElapsedTime + numberToInt(time * 1000.0) | 0;
    if (this.totalElapsedTime >= this.timeUntilStop) {
      this.emitting = false;
    }
    tmp$ = this.particles.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      this.advance_7r320e$(p, time);
    }
  };
  ParticleEmitter$Simulator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Simulator',
    interfaces: []
  };
  ParticleEmitter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParticleEmitter',
    interfaces: []
  };
  function readParticle($receiver, views, continuation) {
    return (new ParticleEmitter(views)).load_3ekr7n$($receiver, continuation);
  }
  function attachParticleAndWait($receiver_0, particle_0, x_0, y_0, time_0, speed_0, continuation_0, suspended) {
    var instance = new Coroutine$attachParticleAndWait($receiver_0, particle_0, x_0, y_0, time_0, speed_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$attachParticleAndWait($receiver_0, particle_0, x_0, y_0, time_0, speed_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$p = void 0;
    this.local$$receiver = $receiver_0;
    this.local$particle = particle_0;
    this.local$x = x_0;
    this.local$y = y_0;
    this.local$time = time_0;
    this.local$speed = speed_0;
  }
  Coroutine$attachParticleAndWait.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$attachParticleAndWait.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$attachParticleAndWait.prototype.constructor = Coroutine$attachParticleAndWait;
  Coroutine$attachParticleAndWait.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$time === void 0)
              this.local$time = 1000;
            if (this.local$speed === void 0)
              this.local$speed = 1.0;
            this.local$p = this.local$particle.create_syxxoe$(this.local$x, this.local$y, this.local$time);
            this.local$p.speed = this.local$speed;
            this.local$$receiver.plusAssign_l5rad2$(this.local$p);
            this.state_0 = 2;
            this.result_0 = this.local$p.waitComplete(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$$receiver.minusAssign_l5rad2$(this.local$p);
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
  var particleEmitter = defineInlineFunction('korge-js.com.soywiz.korge.particle.particleEmitter_eivtgg$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var ParticleEmitterView_init = _.com.soywiz.korge.particle.ParticleEmitterView;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    function particleEmitter$lambda($receiver) {
      return Unit;
    }
    var IVector2_init = _.$$importsForInline$$['korma-js'].com.soywiz.korma.IVector2;
    return function ($receiver, emitter, emitterPos, callback) {
      if (emitterPos === void 0) {
        emitterPos = new IVector2_init(0.0, 0.0);
      }
      if (callback === void 0)
        callback = particleEmitter$lambda;
      var $receiver_0 = addTo(new ParticleEmitterView_init(emitter, emitterPos), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  var RedirectField_init = $module$korio_js.com.soywiz.korio.util.RedirectField;
  function ParticleEmitterView(emitter, emitterPos) {
    if (emitterPos === void 0) {
      emitterPos = new IVector2_init(0.0, 0.0);
    }
    View.call(this);
    this.emitter = emitter;
    this.simulator = new ParticleEmitter$Simulator(this.emitter, emitterPos);
    this.timeUntilStop_eeqpko$_0 = new RedirectMutableField_init(getPropertyCallableRef('timeUntilStop', 0, function ($receiver) {
      return $receiver.timeUntilStop;
    }.bind(null, this.simulator), function ($receiver, value) {
      $receiver.timeUntilStop = value;
    }.bind(null, this.simulator)));
    this.emitterPos_awbsw3$_0 = new RedirectMutableField_init(getPropertyCallableRef('emitterPos', 0, function ($receiver) {
      return $receiver.emitterPos;
    }.bind(null, this.simulator), function ($receiver, value) {
      $receiver.emitterPos = value;
    }.bind(null, this.simulator)));
    this.emitting_q2tdeg$_0 = new RedirectMutableField_init(getPropertyCallableRef('emitting', 0, function ($receiver) {
      return $receiver.emitting;
    }.bind(null, this.simulator), function ($receiver, value) {
      $receiver.emitting = value;
    }.bind(null, this.simulator)));
    this.aliveCount_pen77r$_0 = new RedirectField_init(getPropertyCallableRef('aliveCount', 0, function ($receiver) {
      return $receiver.aliveCount;
    }.bind(null, this.simulator)));
    this.anyAlive_m9nggo$_0 = new RedirectField_init(getPropertyCallableRef('anyAlive', 0, function ($receiver) {
      return $receiver.anyAlive;
    }.bind(null, this.simulator)));
    this.addUpdatable_b4k9x1$(ParticleEmitterView_init$lambda(this));
  }
  Object.defineProperty(ParticleEmitterView.prototype, 'timeUntilStop', {
    get: function () {
      return this.timeUntilStop_eeqpko$_0.redirect.get();
    },
    set: function (timeUntilStop) {
      this.timeUntilStop_eeqpko$_0.redirect.set(timeUntilStop);
    }
  });
  Object.defineProperty(ParticleEmitterView.prototype, 'emitterPos', {
    get: function () {
      return this.emitterPos_awbsw3$_0.redirect.get();
    }
  });
  Object.defineProperty(ParticleEmitterView.prototype, 'emitting', {
    get: function () {
      return this.emitting_q2tdeg$_0.redirect.get();
    },
    set: function (emitting) {
      this.emitting_q2tdeg$_0.redirect.set(emitting);
    }
  });
  Object.defineProperty(ParticleEmitterView.prototype, 'aliveCount', {
    get: function () {
      return this.aliveCount_pen77r$_0.redirect.get();
    }
  });
  Object.defineProperty(ParticleEmitterView.prototype, 'anyAlive', {
    get: function () {
      return this.anyAlive_m9nggo$_0.redirect.get();
    }
  });
  ParticleEmitterView.prototype.waitComplete = function (continuation_0, suspended) {
    var instance = new Coroutine$waitComplete(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$waitComplete($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$waitComplete.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$waitComplete.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$waitComplete.prototype.constructor = Coroutine$waitComplete;
  Coroutine$waitComplete.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (!this.$this.anyAlive) {
              this.state_0 = 4;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = waitFrame(this.$this, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
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
  function ParticleEmitterView$render$lambda(this$ParticleEmitterView, closure$context, closure$ctx, closure$texture, closure$cx, closure$cy) {
    return function () {
      var tmp$;
      closure$context.blendFactors = this$ParticleEmitterView.emitter.blendFactors;
      closure$context.setMatrix_yx07kl$(this$ParticleEmitterView.renderMatrix);
      tmp$ = this$ParticleEmitterView.simulator.particles.iterator();
      while (tmp$.hasNext()) {
        var p = tmp$.next();
        var scale = p.scale;
        closure$context.multiplyColor = p.colorInt;
        closure$context.imageScale_srws8f$(closure$ctx.getTex_9byvhi$(closure$texture), p.x - closure$cx * scale, p.y - closure$cy * scale, scale);
      }
      return Unit;
    };
  }
  function RenderContext2D$keep$lambda$lambda$lambda(closure$callback) {
    return function () {
      return closure$callback();
    };
  }
  function RenderContext2D$keep$lambda$lambda(closure$callback, this$RenderContext2D) {
    return function () {
      var $this = this$RenderContext2D;
      var callback = RenderContext2D$keep$lambda$lambda$lambda(closure$callback);
      var keepColor_klfg04$result;
      var multiplyColor = $this.multiplyColor;
      try {
        keepColor_klfg04$result = callback();
      }
      finally {
        $this.multiplyColor = multiplyColor;
      }
      return keepColor_klfg04$result;
    };
  }
  function RenderContext2D$keep$lambda(closure$callback, this$RenderContext2D) {
    return function () {
      var $this = this$RenderContext2D;
      var callback = RenderContext2D$keep$lambda$lambda(closure$callback, this$RenderContext2D);
      var keepBlendFactors_klfg04$result;
      var oldBlendFactors = $this.blendFactors;
      try {
        keepBlendFactors_klfg04$result = callback();
      }
      finally {
        $this.blendFactors = oldBlendFactors;
      }
      return keepBlendFactors_klfg04$result;
    };
  }
  ParticleEmitterView.prototype.render_8isv09$ = function (ctx) {
    var tmp$;
    if (!this.visible)
      return;
    var context = ctx.ctx2d;
    tmp$ = this.emitter.texture;
    if (tmp$ == null) {
      return;
    }
    var texture = tmp$;
    var cx = texture.width * 0.5;
    var cy = texture.height * 0.5;
    var $this = context.mpool;
    var temp = $this.alloc();
    try {
      temp.copyFrom_7f5bc6$(context.m);
      try {
        RenderContext2D$keep$lambda(ParticleEmitterView$render$lambda(this, context, ctx, texture, cx, cy), context)();
      }
      finally {
        context.m.copyFrom_7f5bc6$(temp);
      }
    }
    finally {
      $this.free_11rb$(temp);
    }
  };
  function ParticleEmitterView_init$lambda(this$ParticleEmitterView) {
    return function (dtMs) {
      this$ParticleEmitterView.simulator.simulate_14dthe$(dtMs / 1000.0);
      return Unit;
    };
  }
  ParticleEmitterView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ParticleEmitterView',
    interfaces: [View]
  };
  function texMipmaps$lambda() {
    return false;
  }
  var texMipmaps;
  var texMipmaps_metadata = new PropertyMetadata('texMipmaps');
  function get_texMipmaps($receiver) {
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = texMipmaps.name) != null ? tmp$ : texMipmaps_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = texMipmaps.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = texMipmaps.name) != null ? tmp$_3 : texMipmaps_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  }
  function set_texMipmaps($receiver, texMipmaps_0) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = texMipmaps.name) != null ? tmp$ : texMipmaps_metadata.callableName, (tmp$_0 = texMipmaps_0) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  }
  function mipmaps($receiver, enable) {
    if (enable === void 0)
      enable = true;
    set_texMipmaps($receiver, enable);
    return $receiver;
  }
  function AgBitmapTextureManager(ag) {
    this.ag = ag;
    this.referencedBitmapsSinceGC = LinkedHashSet_init();
    this.referencedBitmaps = emptySet();
    this._textureBase_p18lal$_uasb02$_0 = new Extra$Property(void 0, AgBitmapTextureManager$_textureBase$lambda);
    this._slices_p18lal$_yt55op$_0 = new Extra$Property(void 0, AgBitmapTextureManager$_slices$lambda);
    this._texture_56kw4r$_ft6rhk$_0 = new Extra$Property(void 0, AgBitmapTextureManager$_texture$lambda);
    this.fcount = 0;
  }
  var AgBitmapTextureManager$_textureBase_metadata = new PropertyMetadata('_textureBase');
  AgBitmapTextureManager.prototype.get__textureBase_p18lal$ = function ($receiver) {
    var $this = this._textureBase_p18lal$_uasb02$_0;
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : AgBitmapTextureManager$_textureBase_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = $this.name) != null ? tmp$_3 : AgBitmapTextureManager$_textureBase_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  AgBitmapTextureManager.prototype.set__textureBase_rvvvso$ = function ($receiver, _textureBase) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = this._textureBase_p18lal$_uasb02$_0.name) != null ? tmp$ : AgBitmapTextureManager$_textureBase_metadata.callableName, (tmp$_0 = _textureBase) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  var AgBitmapTextureManager$_slices_metadata = new PropertyMetadata('_slices');
  AgBitmapTextureManager.prototype.get__slices_p18lal$ = function ($receiver) {
    var $this = this._slices_p18lal$_yt55op$_0;
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : AgBitmapTextureManager$_slices_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = $this.name) != null ? tmp$_3 : AgBitmapTextureManager$_slices_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  AgBitmapTextureManager.prototype.set__slices_ftun4g$ = function ($receiver, _slices) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = this._slices_p18lal$_yt55op$_0.name) != null ? tmp$ : AgBitmapTextureManager$_slices_metadata.callableName, (tmp$_0 = _slices) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  var AgBitmapTextureManager$_texture_metadata = new PropertyMetadata('_texture');
  AgBitmapTextureManager.prototype.get__texture_56kw4r$ = function ($receiver) {
    var $this = this._texture_56kw4r$_ft6rhk$_0;
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : AgBitmapTextureManager$_texture_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = $this.name) != null ? tmp$_3 : AgBitmapTextureManager$_texture_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  AgBitmapTextureManager.prototype.set__texture_4g23fr$ = function ($receiver, _texture) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = this._texture_56kw4r$_ft6rhk$_0.name) != null ? tmp$ : AgBitmapTextureManager$_texture_metadata.callableName, (tmp$_0 = _texture) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  AgBitmapTextureManager.prototype.getTextureBase_uler2c$ = function (bitmap) {
    this.referencedBitmapsSinceGC.add_11rb$(bitmap);
    if (this.get__textureBase_p18lal$(bitmap) == null) {
      this.set__textureBase_rvvvso$(bitmap, new Texture$Base(this.ag.createTexture_mj3tyc$(bitmap, get_texMipmaps(bitmap), bitmap.premult), bitmap.width, bitmap.height));
    }
    return ensureNotNull(this.get__textureBase_p18lal$(bitmap));
  };
  AgBitmapTextureManager.prototype.getTexture_9byvhi$ = function (slice) {
    var $receiver = this.referencedBitmapsSinceGC;
    var element = slice.bmp;
    $receiver.add_11rb$(element);
    this.get__slices_p18lal$(slice.bmp).add_11rb$(slice);
    if (this.get__texture_56kw4r$(slice) == null) {
      this.set__texture_4g23fr$(slice, (new Texture(this.getTextureBase_uler2c$(slice.bmp))).slice_2da8yn$(Rectangle_init(slice.left, slice.top, slice.width, slice.height)));
    }
    return ensureNotNull(this.get__texture_56kw4r$(slice));
  };
  AgBitmapTextureManager.prototype.afterRender = function () {
    this.fcount = this.fcount + 1 | 0;
    if (this.fcount >= 60) {
      this.fcount = 0;
      this.gc();
    }
  };
  AgBitmapTextureManager.prototype.gc = function () {
    var tmp$, tmp$_0, tmp$_1;
    var toRemove = minus(this.referencedBitmaps, this.referencedBitmapsSinceGC);
    tmp$ = toRemove.iterator();
    while (tmp$.hasNext()) {
      var bmp = tmp$.next();
      tmp$_0 = this.get__slices_p18lal$(bmp).iterator();
      while (tmp$_0.hasNext()) {
        var slice = tmp$_0.next();
        this.set__texture_4g23fr$(slice, null);
      }
      (tmp$_1 = this.get__textureBase_p18lal$(bmp)) != null ? (tmp$_1.close(), Unit) : null;
      this.set__textureBase_rvvvso$(bmp, null);
    }
    this.referencedBitmaps = toSet_0(this.referencedBitmapsSinceGC);
  };
  function AgBitmapTextureManager$_textureBase$lambda() {
    return null;
  }
  function AgBitmapTextureManager$_slices$lambda() {
    return LinkedHashSet_init();
  }
  function AgBitmapTextureManager$_texture$lambda() {
    return null;
  }
  AgBitmapTextureManager.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AgBitmapTextureManager',
    interfaces: []
  };
  var logger;
  function BatchBuilder2D(ag, maxQuads) {
    BatchBuilder2D$Companion_getInstance();
    if (maxQuads === void 0)
      maxQuads = 1000;
    this.ag = ag;
    this.maxQuads = maxQuads;
    var $this = logger;
    var level = Logger$Level.TRACE;
    if ($this.isEnabled_fs4ikx$(level)) {
      $this.actualLog_pwm3k3$(level, 'BatchBuilder2D[0]');
    }
    this.flipRenderTexture = true;
    this.maxQuadsMargin = this.maxQuads + 9 | 0;
    this.maxVertices = this.maxQuads * 4 | 0;
    this.maxIndices = this.maxQuads * 6 | 0;
    var $this_0 = logger;
    var level_0 = Logger$Level.TRACE;
    if ($this_0.isEnabled_fs4ikx$(level_0)) {
      $this_0.actualLog_pwm3k3$(level_0, 'BatchBuilder2D[1]');
    }
    this.vertices_0 = KmlNativeBuffer.Companion.alloc_za3lpa$(24 * this.maxVertices | 0);
    this.indices_0 = KmlNativeBuffer.Companion.alloc_za3lpa$(2 * this.maxIndices | 0);
    var $this_1 = logger;
    var level_1 = Logger$Level.TRACE;
    if ($this_1.isEnabled_fs4ikx$(level_1)) {
      $this_1.actualLog_pwm3k3$(level_1, 'BatchBuilder2D[2]');
    }
    this.vertexCount_0 = 0;
    this.vertexPos_0 = 0;
    this.indexPos_0 = 0;
    this.currentTex_0 = null;
    this.currentSmoothing_0 = false;
    this.currentBlendFactors_0 = BlendMode$NORMAL_getInstance().factors;
    var $this_2 = logger;
    var level_2 = Logger$Level.TRACE;
    if ($this_2.isEnabled_fs4ikx$(level_2)) {
      $this_2.actualLog_pwm3k3$(level_2, 'BatchBuilder2D[3]');
    }
    this.vertexBuffer_0 = this.ag.createVertexBuffer();
    this.indexBuffer_0 = this.ag.createIndexBuffer();
    var $this_3 = logger;
    var level_3 = Logger$Level.TRACE;
    if ($this_3.isEnabled_fs4ikx$(level_3)) {
      $this_3.actualLog_pwm3k3$(level_3, 'BatchBuilder2D[4]');
    }
    this.stencil = new AG$StencilState();
    var $this_4 = logger;
    var level_4 = Logger$Level.TRACE;
    if ($this_4.isEnabled_fs4ikx$(level_4)) {
      $this_4.actualLog_pwm3k3$(level_4, 'BatchBuilder2D[5]');
    }
    this.colorMask = new AG$ColorMaskState();
    var $this_5 = logger;
    var level_5 = Logger$Level.TRACE;
    if ($this_5.isEnabled_fs4ikx$(level_5)) {
      $this_5.actualLog_pwm3k3$(level_5, 'BatchBuilder2D[6]');
    }
    this.scissor = null;
    this.identity_0 = new Matrix2d();
    var $this_6 = logger;
    var level_6 = Logger$Level.TRACE;
    if ($this_6.isEnabled_fs4ikx$(level_6)) {
      $this_6.actualLog_pwm3k3$(level_6, 'BatchBuilder2D[7]');
    }
    this.ptt1_0 = new MVector2();
    this.ptt2_0 = new MVector2();
    this.pt1_0 = new MVector2();
    this.pt2_0 = new MVector2();
    this.pt3_0 = new MVector2();
    this.pt4_0 = new MVector2();
    this.pt5_0 = new MVector2();
    this.pt6_0 = new MVector2();
    this.pt7_0 = new MVector2();
    this.pt8_0 = new MVector2();
    var $this_7 = logger;
    var level_7 = Logger$Level.TRACE;
    if ($this_7.isEnabled_fs4ikx$(level_7)) {
      $this_7.actualLog_pwm3k3$(level_7, 'BatchBuilder2D[8]');
    }
    this.projMat_0 = new Matrix4();
    var $this_8 = logger;
    var level_8 = Logger$Level.TRACE;
    if ($this_8.isEnabled_fs4ikx$(level_8)) {
      $this_8.actualLog_pwm3k3$(level_8, 'BatchBuilder2D[9]');
    }
    this.textureUnit_0 = new AG$TextureUnit(null, false);
    var $this_9 = logger;
    var level_9 = Logger$Level.TRACE;
    if ($this_9.isEnabled_fs4ikx$(level_9)) {
      $this_9.actualLog_pwm3k3$(level_9, 'BatchBuilder2D[10]');
    }
    this.uniforms_7s8f7k$_0 = lazy(BatchBuilder2D$uniforms$lambda(this));
    var $this_10 = logger;
    var level_10 = Logger$Level.TRACE;
    if ($this_10.isEnabled_fs4ikx$(level_10)) {
      $this_10.actualLog_pwm3k3$(level_10, 'BatchBuilder2D[11]');
    }
  }
  Object.defineProperty(BatchBuilder2D.prototype, 'uniforms_0', {
    get: function () {
      return this.uniforms_7s8f7k$_0.value;
    }
  });
  BatchBuilder2D.prototype.addVertex_0 = function (x, y, u, v, colorMul, colorAdd) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.vertices_0.setAlignedFloat32_24o109$((tmp$ = this.vertexPos_0, this.vertexPos_0 = tmp$ + 1 | 0, tmp$), x);
    this.vertices_0.setAlignedFloat32_24o109$((tmp$_0 = this.vertexPos_0, this.vertexPos_0 = tmp$_0 + 1 | 0, tmp$_0), y);
    this.vertices_0.setAlignedFloat32_24o109$((tmp$_1 = this.vertexPos_0, this.vertexPos_0 = tmp$_1 + 1 | 0, tmp$_1), u);
    this.vertices_0.setAlignedFloat32_24o109$((tmp$_2 = this.vertexPos_0, this.vertexPos_0 = tmp$_2 + 1 | 0, tmp$_2), v);
    this.vertices_0.setAlignedInt32_vux9f0$((tmp$_3 = this.vertexPos_0, this.vertexPos_0 = tmp$_3 + 1 | 0, tmp$_3), colorMul.rgba);
    this.vertices_0.setAlignedInt32_vux9f0$((tmp$_4 = this.vertexPos_0, this.vertexPos_0 = tmp$_4 + 1 | 0, tmp$_4), colorAdd);
    this.vertexCount_0 = this.vertexCount_0 + 1 | 0;
  };
  BatchBuilder2D.prototype.addIndex_0 = function (idx) {
    var tmp$;
    this.indices_0.setAlignedInt16_2bqt6h$((tmp$ = this.indexPos_0, this.indexPos_0 = tmp$ + 1 | 0, tmp$), toShort(idx));
  };
  BatchBuilder2D.prototype.addIndices_0 = function (i0, i1, i2, i3, i4, i5) {
    this.addIndex_0(i0);
    this.addIndex_0(i1);
    this.addIndex_0(i2);
    this.addIndex_0(i3);
    this.addIndex_0(i4);
    this.addIndex_0(i5);
  };
  BatchBuilder2D.prototype.drawQuadFast_l3b03d$ = function (x0, y0, x1, y1, x2, y2, x3, y3, tex, colorMul, colorAdd, rotated) {
    if (rotated === void 0)
      rotated = false;
    this.ensure_0(6, 4);
    this.addIndex_0(this.vertexCount_0 + 0 | 0);
    this.addIndex_0(this.vertexCount_0 + 1 | 0);
    this.addIndex_0(this.vertexCount_0 + 2 | 0);
    this.addIndex_0(this.vertexCount_0 + 3 | 0);
    this.addIndex_0(this.vertexCount_0 + 0 | 0);
    this.addIndex_0(this.vertexCount_0 + 2 | 0);
    if (rotated) {
      this.addVertex_0(x0, y0, tex.x0, tex.y0, colorMul, colorAdd);
      this.addVertex_0(x1, y1, tex.x1, tex.y0, colorMul, colorAdd);
      this.addVertex_0(x2, y2, tex.x1, tex.y1, colorMul, colorAdd);
      this.addVertex_0(x3, y3, tex.x0, tex.y1, colorMul, colorAdd);
    }
     else {
      this.addVertex_0(x0, y0, tex.x0, tex.y0, colorMul, colorAdd);
      this.addVertex_0(x1, y1, tex.x1, tex.y0, colorMul, colorAdd);
      this.addVertex_0(x2, y2, tex.x1, tex.y1, colorMul, colorAdd);
      this.addVertex_0(x3, y3, tex.x0, tex.y1, colorMul, colorAdd);
    }
  };
  BatchBuilder2D.prototype.drawVertices_7elhgs$ = function (array, vcount, icount) {
    if (vcount === void 0)
      vcount = array.vcount;
    if (icount === void 0)
      icount = array.indices.length;
    var tmp$;
    this.ensure_0(icount, vcount);
    var b = array.indices.length;
    tmp$ = Math_0.min(icount, b);
    for (var idx = 0; idx < tmp$; idx++)
      this.addIndex_0(this.vertexCount_0 + array.indices[idx] | 0);
    this.vertices_0.setAlignedArrayInt32_coga0j$(this.vertexPos_0, array.data_8be2vx$, 0, vcount * 6 | 0);
    this.vertexCount_0 = this.vertexCount_0 + vcount | 0;
    this.vertexPos_0 = this.vertexPos_0 + (vcount * 6 | 0) | 0;
  };
  BatchBuilder2D.prototype.drawVertices_wgeeum$ = function (array, tex, smoothing, blendFactors, vcount, icount) {
    if (vcount === void 0)
      vcount = array.vcount;
    if (icount === void 0)
      icount = array.indices.length;
    this.setStateFast_2cvl8y$(tex, smoothing, blendFactors);
    this.drawVertices_7elhgs$(array, vcount, icount);
  };
  BatchBuilder2D.prototype.ensure_0 = function (indices, vertices) {
    if ((this.indexPos_0 + indices | 0) >= this.maxIndices || (this.vertexPos_0 + vertices | 0) >= this.maxQuads) {
      this.flush();
    }
  };
  BatchBuilder2D.prototype.setStateFast_2cvl8y$ = function (tex, smoothing, blendFactors) {
    this.setStateFast_j79byp$(tex.base, smoothing, blendFactors);
  };
  BatchBuilder2D.prototype.setStateFast_j79byp$ = function (tex, smoothing, blendFactors) {
    var tmp$;
    if (!equals(tex, this.currentTex_0) || this.currentSmoothing_0 !== smoothing || !((tmp$ = this.currentBlendFactors_0) != null ? tmp$.equals(blendFactors) : null)) {
      this.flush();
      this.currentTex_0 = tex;
      this.currentSmoothing_0 = smoothing;
      this.currentBlendFactors_0 = blendFactors;
    }
  };
  BatchBuilder2D.prototype.drawNinePatch_o0jtal$ = function (tex, x, y, width, height, posCuts, texCuts, m, filtering, colorMul, colorAdd, blendFactors) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (width === void 0)
      width = tex.width;
    if (height === void 0)
      height = tex.height;
    if (m === void 0)
      m = this.identity_0;
    if (filtering === void 0)
      filtering = true;
    if (colorMul === void 0)
      colorMul = color.Colors.WHITE;
    if (colorAdd === void 0)
      colorAdd = 2139062143;
    if (blendFactors === void 0)
      blendFactors = BlendMode$NORMAL_getInstance().factors;
    this.setStateFast_2cvl8y$(tex.base, filtering, blendFactors);
    this.ensure_0(54, 16);
    var p_o = this.pt1_0.setToTransform_7jehfj$(m, this.ptt1_0.setTo_lu1900$(numberToDouble(x), numberToDouble(y)));
    var tmp$ = this.pt2_0;
    var tmp$_0 = this.ptt1_0;
    var $this = this.ptt1_0;
    var x_0 = x + width;
    var p_dU = tmp$.setToSub_g6xq6k$(tmp$_0.setToTransform_7jehfj$(m, $this.setTo_lu1900$(numberToDouble(x_0), numberToDouble(y))), p_o);
    var tmp$_1 = this.pt3_0;
    var tmp$_2 = this.ptt1_0;
    var $this_0 = this.ptt1_0;
    var y_0 = y + height;
    var p_dV = tmp$_1.setToSub_g6xq6k$(tmp$_2.setToTransform_7jehfj$(m, $this_0.setTo_lu1900$(numberToDouble(x), numberToDouble(y_0))), p_o);
    var $this_1 = this.pt4_0;
    var x_1 = tex.x0;
    var y_1 = tex.y0;
    var t_o = $this_1.setTo_lu1900$(numberToDouble(x_1), numberToDouble(y_1));
    var tmp$_3 = this.pt5_0;
    var $this_2 = this.ptt1_0;
    var x_2 = tex.x1;
    var y_2 = tex.y0;
    var t_dU = tmp$_3.setToSub_g6xq6k$($this_2.setTo_lu1900$(numberToDouble(x_2), numberToDouble(y_2)), t_o);
    var tmp$_4 = this.pt6_0;
    var $this_3 = this.ptt1_0;
    var x_3 = tex.x0;
    var y_3 = tex.y1;
    var t_dV = tmp$_4.setToSub_g6xq6k$($this_3.setTo_lu1900$(numberToDouble(x_3), numberToDouble(y_3)), t_o);
    var start = this.vertexCount_0;
    for (var cy = 0; cy < 4; cy++) {
      var posCutY = posCuts[cy].y;
      var texCutY = texCuts[cy].y;
      for (var cx = 0; cx < 4; cx++) {
        var posCutX = posCuts[cx].x;
        var texCutX = texCuts[cx].x;
        var p = this.pt7_0.setToAdd_g6xq6k$(p_o, this.ptt1_0.setToAdd_g6xq6k$(this.ptt1_0.setToMul_lpqq81$(p_dU, posCutX), this.ptt2_0.setToMul_lpqq81$(p_dV, posCutY)));
        var t = this.pt8_0.setToAdd_g6xq6k$(t_o, this.ptt1_0.setToAdd_g6xq6k$(this.ptt1_0.setToMul_lpqq81$(t_dU, texCutX), this.ptt2_0.setToMul_lpqq81$(t_dV, texCutY)));
        this.addVertex_0(p.x, p.y, t.x, t.y, colorMul, colorAdd);
      }
    }
    for (var cy_0 = 0; cy_0 < 3; cy_0++) {
      for (var cx_0 = 0; cx_0 < 3; cx_0++) {
        var v0 = start + (cy_0 * 4 | 0) + cx_0 | 0;
        var v1 = v0 + 1 | 0;
        var v2 = v0 + 4 | 0;
        var v3 = v0 + 5 | 0;
        this.addIndex_0(v0);
        this.addIndex_0(v1);
        this.addIndex_0(v2);
        this.addIndex_0(v2);
        this.addIndex_0(v1);
        this.addIndex_0(v3);
      }
    }
  };
  BatchBuilder2D.prototype.drawQuad_bjriwo$ = function (tex, x, y, width, height, m, filtering, colorMul, colorAdd, blendFactors, rotated) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (width === void 0)
      width = tex.width;
    if (height === void 0)
      height = tex.height;
    if (m === void 0)
      m = this.identity_0;
    if (filtering === void 0)
      filtering = true;
    if (colorMul === void 0)
      colorMul = color.Colors.WHITE;
    if (colorAdd === void 0)
      colorAdd = 2139062143;
    if (blendFactors === void 0)
      blendFactors = BlendMode$NORMAL_getInstance().factors;
    if (rotated === void 0)
      rotated = false;
    var x0 = x;
    var x1 = x + width;
    var y0 = y;
    var y1 = y + height;
    this.setStateFast_2cvl8y$(tex.base, filtering, blendFactors);
    this.drawQuadFast_l3b03d$(m.transformXf_lu1900$(x0, y0), m.transformYf_lu1900$(x0, y0), m.transformXf_lu1900$(x1, y0), m.transformYf_lu1900$(x1, y0), m.transformXf_lu1900$(x1, y1), m.transformYf_lu1900$(x1, y1), m.transformXf_lu1900$(x0, y1), m.transformYf_lu1900$(x0, y1), tex, colorMul, colorAdd, rotated);
  };
  function BatchBuilder2D$Companion() {
    BatchBuilder2D$Companion_instance = this;
    var $this = logger;
    var level = Logger$Level.TRACE;
    if ($this.isEnabled_fs4ikx$(level)) {
      $this.actualLog_pwm3k3$(level, 'BatchBuilder2D.Companion[0]');
    }
    this.a_ColMul = korag_0.DefaultShaders.a_Col;
    this.a_ColAdd = Attribute_init('a_Col2', VarType.Byte4, true);
    var $this_0 = logger;
    var level_0 = Logger$Level.TRACE;
    if ($this_0.isEnabled_fs4ikx$(level_0)) {
      $this_0.actualLog_pwm3k3$(level_0, 'BatchBuilder2D.Companion[1]');
    }
    this.v_ColMul = korag_0.DefaultShaders.v_Col;
    this.v_ColAdd = new Varying('v_Col2', VarType.Byte4);
    var $this_1 = logger;
    var level_1 = Logger$Level.TRACE;
    if ($this_1.isEnabled_fs4ikx$(level_1)) {
      $this_1.actualLog_pwm3k3$(level_1, 'BatchBuilder2D.Companion[2]');
    }
    this.LAYOUT = VertexLayout_init([korag_0.DefaultShaders.a_Pos, korag_0.DefaultShaders.a_Tex, this.a_ColMul, this.a_ColAdd]);
    this.VERTEX = VertexShader(BatchBuilder2D$Companion$VERTEX$lambda(this));
    var $this_2 = logger;
    var level_2 = Logger$Level.TRACE;
    if ($this_2.isEnabled_fs4ikx$(level_2)) {
      $this_2.actualLog_pwm3k3$(level_2, 'BatchBuilder2D.Companion[3]');
    }
    this.PROGRAM_PRE = new Program(this.VERTEX, this.buildFragment_0(true), 'BatchBuilder2D.Premultiplied.Tinted');
    this.PROGRAM_NOPRE = new Program(this.VERTEX, this.buildFragment_0(false), 'BatchBuilder2D.NoPremultiplied.Tinted');
    var $this_3 = logger;
    var level_3 = Logger$Level.TRACE;
    if ($this_3.isEnabled_fs4ikx$(level_3)) {
      $this_3.actualLog_pwm3k3$(level_3, 'BatchBuilder2D.Companion[4]');
    }
  }
  var Program$Program$Builder_init = $module$korag_js.com.soywiz.korag.shader.Program.Builder;
  var Program$Stm$Program$Stm$Stms_init = $module$korag_js.com.soywiz.korag.shader.Program.Stm.Stms;
  var Program$Stm$Program$Stm$If_init = $module$korag_js.com.soywiz.korag.shader.Program.Stm.If;
  function BatchBuilder2D$Companion$buildFragment$lambda(closure$premultiplied, this$BatchBuilder2D$) {
    return function ($receiver) {
      var $receiver_0 = korag_0.DefaultShaders;
      var closure$premultiplied_0 = closure$premultiplied;
      var this$BatchBuilder2D$_0 = this$BatchBuilder2D$;
      $receiver.SET_q0hzsk$($receiver_0.t_Temp1, $receiver.texture2D_q0hzsk$($receiver_0.u_Tex, $receiver.get_hhgt4v$($receiver_0.v_Tex, 'xy')));
      if (closure$premultiplied_0) {
        $receiver.SET_q0hzsk$($receiver.get_hhgt4v$($receiver_0.t_Temp1, 'rgb'), $receiver.div_2oogdr$($receiver.get_hhgt4v$($receiver_0.t_Temp1, 'rgb'), $receiver.get_hhgt4v$($receiver_0.t_Temp1, 'a')));
      }
      $receiver.SET_q0hzsk$($receiver.out, $receiver.plus_2oogdr$($receiver.times_2oogdr$($receiver.get_hhgt4v$($receiver_0.t_Temp1, 'rgba'), $receiver.get_hhgt4v$(this$BatchBuilder2D$_0.v_ColMul, 'rgba')), $receiver.times_2oogdr$($receiver.minus_2oogdr$($receiver.get_hhgt4v$(this$BatchBuilder2D$_0.v_ColAdd, 'rgba'), $receiver.vec4_hywno3$([$receiver.get_lit_81szk$(0.5), $receiver.get_lit_81szk$(0.5), $receiver.get_lit_81szk$(0.5), $receiver.get_lit_81szk$(0.5)])), $receiver.get_lit_81szk$(2.0))));
      if (closure$premultiplied_0) {
        var cond = $receiver.le_2oogdr$($receiver.get_hhgt4v$($receiver.out, 'a'), $receiver.get_lit_81szk$(0.0));
        var body = new Program$Program$Builder_init($receiver.type);
        body.DISCARD();
        var stmIf = new Program$Stm$Program$Stm$If_init(cond, new Program$Stm$Program$Stm$Stms_init(body.outputStms));
        $receiver.outputStms.add_11rb$(stmIf);
      }
      return Unit;
    };
  }
  BatchBuilder2D$Companion.prototype.buildFragment_0 = function (premultiplied) {
    return FragmentShader(BatchBuilder2D$Companion$buildFragment$lambda(premultiplied, this));
  };
  function BatchBuilder2D$Companion$VERTEX$lambda(this$BatchBuilder2D$) {
    return function ($receiver) {
      $receiver.SET_q0hzsk$(korag_0.DefaultShaders.v_Tex, korag_0.DefaultShaders.a_Tex);
      $receiver.SET_q0hzsk$(this$BatchBuilder2D$.v_ColMul, this$BatchBuilder2D$.a_ColMul);
      $receiver.SET_q0hzsk$(this$BatchBuilder2D$.v_ColAdd, this$BatchBuilder2D$.a_ColAdd);
      $receiver.SET_q0hzsk$($receiver.out, $receiver.times_2oogdr$(korag_0.DefaultShaders.u_ProjMat, $receiver.vec4_hywno3$([korag_0.DefaultShaders.a_Pos, $receiver.get_lit_81szk$(0.0), $receiver.get_lit_81szk$(1.0)])));
      return Unit;
    };
  }
  BatchBuilder2D$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BatchBuilder2D$Companion_instance = null;
  function BatchBuilder2D$Companion_getInstance() {
    if (BatchBuilder2D$Companion_instance === null) {
      new BatchBuilder2D$Companion();
    }
    return BatchBuilder2D$Companion_instance;
  }
  BatchBuilder2D.prototype.flush = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.vertexCount_0 > 0) {
      if (this.flipRenderTexture && this.ag.renderingToTexture) {
        this.projMat_0.setToOrtho_w8lrqs$(0.0, this.ag.backHeight, this.ag.backWidth, 0.0, -1.0, 1.0);
      }
       else {
        this.projMat_0.setToOrtho_w8lrqs$(0.0, 0.0, this.ag.backWidth, this.ag.backHeight, -1.0, 1.0);
      }
      var factors = this.currentBlendFactors_0;
      this.vertexBuffer_0.upload_hs2a5p$(this.vertices_0, 0, this.vertexPos_0 * 4 | 0);
      this.indexBuffer_0.upload_hs2a5p$(this.indices_0, 0, this.indexPos_0 * 2 | 0);
      this.textureUnit_0.texture = this.currentTex_0;
      this.textureUnit_0.linear = this.currentSmoothing_0;
      tmp$_2 = this.ag;
      tmp$ = this.vertexBuffer_0;
      tmp$_0 = this.indexBuffer_0;
      tmp$_2.draw_d5atbn$(tmp$, ((tmp$_1 = this.currentTex_0) != null ? tmp$_1.premultiplied : null) === true ? BatchBuilder2D$Companion_getInstance().PROGRAM_PRE : BatchBuilder2D$Companion_getInstance().PROGRAM_NOPRE, AG$DrawType.TRIANGLES, BatchBuilder2D$Companion_getInstance().LAYOUT, this.indexPos_0, tmp$_0, void 0, factors, this.uniforms_0, this.stencil, this.colorMask, this.scissor);
    }
    this.vertexCount_0 = 0;
    this.vertexPos_0 = 0;
    this.indexPos_0 = 0;
    this.currentTex_0 = null;
  };
  function BatchBuilder2D$uniforms$lambda(this$BatchBuilder2D) {
    return function () {
      return mapOf([to(korag_0.DefaultShaders.u_ProjMat, this$BatchBuilder2D.projMat_0), to(korag_0.DefaultShaders.u_Tex, this$BatchBuilder2D.textureUnit_0)]);
    };
  }
  BatchBuilder2D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BatchBuilder2D',
    interfaces: []
  };
  function TexturedVertexArray(vcount, indices) {
    TexturedVertexArray$Companion_getInstance();
    this.vcount = vcount;
    this.indices = indices;
    this.data_8be2vx$ = new Int32Array(6 * this.vcount | 0);
    this.offset_0 = 0;
  }
  function TexturedVertexArray$Companion() {
    TexturedVertexArray$Companion_instance = this;
    this.COMPONENTS_PER_VERTEX = 6;
    this.QUAD_INDICES = new Int32Array([0, 1, 2, 3, 0, 2]);
  }
  TexturedVertexArray$Companion.prototype.quadIndices_za3lpa$ = function (quadCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var out = new Int32Array(quadCount * 6 | 0);
    var m = 0;
    var base = 0;
    for (var n = 0; n < quadCount; n++) {
      out[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = base + 0 | 0;
      out[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = base + 1 | 0;
      out[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = base + 2 | 0;
      out[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = base + 3 | 0;
      out[tmp$_3 = m, m = tmp$_3 + 1 | 0, tmp$_3] = base + 0 | 0;
      out[tmp$_4 = m, m = tmp$_4 + 1 | 0, tmp$_4] = base + 2 | 0;
      base = base + 4 | 0;
    }
    return out;
  };
  TexturedVertexArray$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TexturedVertexArray$Companion_instance = null;
  function TexturedVertexArray$Companion_getInstance() {
    if (TexturedVertexArray$Companion_instance === null) {
      new TexturedVertexArray$Companion();
    }
    return TexturedVertexArray$Companion_instance;
  }
  TexturedVertexArray.prototype.select_za3lpa$ = function (i) {
    this.offset_0 = i * 6 | 0;
    return this;
  };
  TexturedVertexArray.prototype.setX_mx4ult$ = function (v) {
    this.data_8be2vx$[this.offset_0 + 0 | 0] = toBits(v);
    return this;
  };
  TexturedVertexArray.prototype.setY_mx4ult$ = function (v) {
    this.data_8be2vx$[this.offset_0 + 1 | 0] = toBits(v);
    return this;
  };
  TexturedVertexArray.prototype.setU_mx4ult$ = function (v) {
    this.data_8be2vx$[this.offset_0 + 2 | 0] = toBits(v);
    return this;
  };
  TexturedVertexArray.prototype.setV_mx4ult$ = function (v) {
    this.data_8be2vx$[this.offset_0 + 3 | 0] = toBits(v);
    return this;
  };
  TexturedVertexArray.prototype.setCMul_md34sx$ = function (v) {
    this.data_8be2vx$[this.offset_0 + 4 | 0] = v.rgba;
    return this;
  };
  TexturedVertexArray.prototype.setCAdd_za3lpa$ = function (v) {
    this.data_8be2vx$[this.offset_0 + 5 | 0] = v;
    return this;
  };
  TexturedVertexArray.prototype.xy_vwzs7b$ = function (x, y, matrix) {
    return this.setX_mx4ult$(matrix.transformX_lu1900$(x, y)).setY_mx4ult$(matrix.transformY_lu1900$(x, y));
  };
  TexturedVertexArray.prototype.xy_lu1900$ = function (x, y) {
    return this.setX_mx4ult$(x).setY_mx4ult$(y);
  };
  TexturedVertexArray.prototype.uv_dleff0$ = function (tx, ty) {
    return this.setU_mx4ult$(tx).setV_mx4ult$(ty);
  };
  TexturedVertexArray.prototype.cols_3hpxcz$ = function (colMul, colAdd) {
    return this.setCMul_md34sx$(colMul).setCAdd_za3lpa$(colAdd);
  };
  Object.defineProperty(TexturedVertexArray.prototype, 'x', {
    get: function () {
      var bits = this.data_8be2vx$[this.offset_0 + 0 | 0];
      return Kotlin.floatFromBits(bits);
    }
  });
  Object.defineProperty(TexturedVertexArray.prototype, 'y', {
    get: function () {
      var bits = this.data_8be2vx$[this.offset_0 + 1 | 0];
      return Kotlin.floatFromBits(bits);
    }
  });
  Object.defineProperty(TexturedVertexArray.prototype, 'u', {
    get: function () {
      var bits = this.data_8be2vx$[this.offset_0 + 2 | 0];
      return Kotlin.floatFromBits(bits);
    }
  });
  Object.defineProperty(TexturedVertexArray.prototype, 'v', {
    get: function () {
      var bits = this.data_8be2vx$[this.offset_0 + 3 | 0];
      return Kotlin.floatFromBits(bits);
    }
  });
  Object.defineProperty(TexturedVertexArray.prototype, 'cMul', {
    get: function () {
      return this.data_8be2vx$[this.offset_0 + 4 | 0];
    }
  });
  Object.defineProperty(TexturedVertexArray.prototype, 'cAdd', {
    get: function () {
      return this.data_8be2vx$[this.offset_0 + 5 | 0];
    }
  });
  Object.defineProperty(TexturedVertexArray.prototype, 'vertexString', {
    get: function () {
      return 'V(xy=(' + this.x + ', ' + this.y + '),uv=' + this.u + ', ' + this.v + ',cMul=' + this.cMul + ',cAdd=' + this.cAdd + ')';
    }
  });
  TexturedVertexArray.prototype.str_za3lpa$ = function (index) {
    var old = this.offset_0;
    try {
      return this.select_za3lpa$(index).vertexString;
    }
    finally {
      this.offset_0 = old;
    }
  };
  TexturedVertexArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TexturedVertexArray',
    interfaces: []
  };
  function ensurePowerOfTwo($receiver) {
    var tmp$;
    if (get_isPowerOfTwo($receiver.width) && get_isPowerOfTwo($receiver.height)) {
      tmp$ = $receiver;
    }
     else {
      var out = new Bitmap32(get_nextPowerOfTwo($receiver.width), get_nextPowerOfTwo($receiver.height));
      out.put_dryc6d$($receiver);
      tmp$ = out;
    }
    return tmp$;
  }
  function RenderContext(ag, bp, stats) {
    if (bp === void 0)
      bp = BoundsProvider$Dummy_getInstance();
    if (stats === void 0)
      stats = new Stats();
    this.ag = ag;
    this.bp = bp;
    this.stats = stats;
    this.$delegate_8isv09$_0 = new Extra$Mixin();
    this.agBitmapTextureManager = new AgBitmapTextureManager(this.ag);
    this.frame = 0;
    this.batch = new BatchBuilder2D(this.ag);
    this.ctx2d = new RenderContext2D(this.batch);
    this.masksEnabled = true;
  }
  RenderContext.prototype.flush = function () {
    this.batch.flush();
  };
  function RenderContext$renderToTexture$lambda(closure$use) {
    return function (rt) {
      closure$use(Texture$Companion_getInstance().invoke_69xoz1$(rt));
      return Unit;
    };
  }
  var color_0 = $module$korag_js.$$importsForInline$$['korim-js'].com.soywiz.korim.color;
  var AG$AG$RenderTexture_init = $module$korag_js.com.soywiz.korag.AG.RenderTexture;
  function AG$renderToTextureInternal$lambda(this$AG, closure$rb) {
    return function () {
      var $receiver = this$AG.frameRenderBuffers;
      var element = closure$rb;
      $receiver.remove_11rb$(element);
      this$AG.renderBuffers.free_11rb$(closure$rb);
      return Unit;
    };
  }
  RenderContext.prototype.renderToTexture_fnloth$ = function (width, height, renderToTexture, use_0) {
    this.flush();
    var $this = this.ag;
    var renderToTexture_sxjeop$result;
    var oldRendering = $this.renderingToTexture;
    var oldWidth = $this.backWidth;
    var oldHeight = $this.backHeight;
    $this.renderingToTexture = true;
    try {
      var rb = $this.renderBuffers.alloc();
      $this.frameRenderBuffers.add_11rb$(rb);
      var oldRendering_0 = $this.renderingToTexture;
      $this.renderingToTexture = true;
      rb.start_vux9f0$(width, height);
      try {
        $this.clear_yvqa77$(color_0.Colors.TRANSPARENT_BLACK);
        renderToTexture();
        this.flush();
      }
      finally {
        rb.end();
        $this.renderingToTexture = oldRendering_0;
      }
      renderToTexture_sxjeop$result = new AG$AG$RenderTexture_init(rb.tex, width, height, AG$renderToTextureInternal$lambda($this, rb));
    }
    finally {
      $this.renderingToTexture = oldRendering;
    }
    use(renderToTexture_sxjeop$result, RenderContext$renderToTexture$lambda(use_0));
  };
  RenderContext.prototype.renderToBitmap_1xki6w$ = function (bmp, callback) {
    this.flush();
    var $this = this.ag;
    var rb = $this.renderBuffers.alloc();
    var oldRendering = $this.renderingToTexture;
    $this.renderingToTexture = true;
    rb.start_vux9f0$(bmp.width, bmp.height);
    try {
      $this.clear_yvqa77$(color_0.Colors.TRANSPARENT_BLACK);
      callback();
      this.flush();
    }
    finally {
      rb.readBitmap_59u9qz$(bmp);
      rb.end();
      $this.renderingToTexture = oldRendering;
      $this.renderBuffers.free_11rb$(rb);
    }
    return bmp;
  };
  RenderContext.prototype.finish = function () {
    this.ag.flip();
  };
  RenderContext.prototype.getTex_9byvhi$ = function (bmp) {
    return this.agBitmapTextureManager.getTexture_9byvhi$(bmp);
  };
  RenderContext.prototype.getTex_uler2c$ = function (bmp) {
    return this.agBitmapTextureManager.getTextureBase_uler2c$(bmp);
  };
  Object.defineProperty(RenderContext.prototype, 'extra', {
    get: function () {
      return this.$delegate_8isv09$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_8isv09$_0.extra = tmp$;
    }
  });
  Object.defineProperty(RenderContext.prototype, 'virtualBottom', {
    get: function () {
      return this.bp.virtualBottom;
    }
  });
  Object.defineProperty(RenderContext.prototype, 'virtualLeft', {
    get: function () {
      return this.bp.virtualLeft;
    }
  });
  Object.defineProperty(RenderContext.prototype, 'virtualRight', {
    get: function () {
      return this.bp.virtualRight;
    }
  });
  Object.defineProperty(RenderContext.prototype, 'virtualTop', {
    get: function () {
      return this.bp.virtualTop;
    }
  });
  RenderContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderContext',
    interfaces: [BoundsProvider, Extra]
  };
  var logger_0;
  function RenderContext2D(batch) {
    this.batch = batch;
    this.$delegate_lchfrf$_0 = new Extra$Mixin();
    var $this = logger_0;
    var level = Logger$Level.TRACE;
    if ($this.isEnabled_fs4ikx$(level)) {
      $this.actualLog_pwm3k3$(level, 'RenderContext2D[0]');
    }
    this.mpool = Pool_init(void 0, RenderContext2D$mpool$lambda);
    var $this_0 = logger_0;
    var level_0 = Logger$Level.TRACE;
    if ($this_0.isEnabled_fs4ikx$(level_0)) {
      $this_0.actualLog_pwm3k3$(level_0, 'RenderContext2D[1]');
    }
    this.m = new Matrix2d();
    this.blendFactors = AG$Blending.Companion.NORMAL;
    this.multiplyColor = color.Colors.WHITE;
    var $this_1 = logger_0;
    var level_1 = Logger$Level.TRACE;
    if ($this_1.isEnabled_fs4ikx$(level_1)) {
      $this_1.actualLog_pwm3k3$(level_1, 'RenderContext2D[2]');
    }
  }
  RenderContext2D.prototype.keepMatrix_klfg04$ = defineInlineFunction('korge-js.com.soywiz.korge.render.RenderContext2D.keepMatrix_klfg04$', wrapFunction(function () {
    return function (callback) {
      var $this = this.mpool;
      var temp = $this.alloc();
      try {
        var callback$result;
        temp.copyFrom_7f5bc6$(this.m);
        try {
          callback$result = callback();
        }
        finally {
          this.m.copyFrom_7f5bc6$(temp);
        }
      }
      finally {
        $this.free_11rb$(temp);
      }
      return callback$result;
    };
  }));
  RenderContext2D.prototype.keepBlendFactors_klfg04$ = defineInlineFunction('korge-js.com.soywiz.korge.render.RenderContext2D.keepBlendFactors_klfg04$', function (callback) {
    var oldBlendFactors = this.blendFactors;
    try {
      return callback();
    }
    finally {
      this.blendFactors = oldBlendFactors;
    }
  });
  RenderContext2D.prototype.keep_klfg04$ = defineInlineFunction('korge-js.com.soywiz.korge.render.RenderContext2D.keep_klfg04$', wrapFunction(function () {
    function RenderContext2D$keep$lambda$lambda$lambda(closure$callback) {
      return function () {
        return closure$callback();
      };
    }
    function RenderContext2D$keep$lambda$lambda(closure$callback, this$RenderContext2D) {
      return function () {
        var $this = this$RenderContext2D;
        var callback = RenderContext2D$keep$lambda$lambda$lambda(closure$callback);
        var keepColor_klfg04$result;
        var multiplyColor = $this.multiplyColor;
        try {
          keepColor_klfg04$result = callback();
        }
        finally {
          $this.multiplyColor = multiplyColor;
        }
        return keepColor_klfg04$result;
      };
    }
    function RenderContext2D$keep$lambda(closure$callback, this$RenderContext2D) {
      return function () {
        var $this = this$RenderContext2D;
        var callback = RenderContext2D$keep$lambda$lambda(closure$callback, this$RenderContext2D);
        var keepBlendFactors_klfg04$result;
        var oldBlendFactors = $this.blendFactors;
        try {
          keepBlendFactors_klfg04$result = callback();
        }
        finally {
          $this.blendFactors = oldBlendFactors;
        }
        return keepBlendFactors_klfg04$result;
      };
    }
    return function (callback) {
      var $this = this.mpool;
      var temp = $this.alloc();
      try {
        var callback$result;
        temp.copyFrom_7f5bc6$(this.m);
        try {
          callback$result = RenderContext2D$keep$lambda(callback, this)();
        }
        finally {
          this.m.copyFrom_7f5bc6$(temp);
        }
      }
      finally {
        $this.free_11rb$(temp);
      }
      return callback$result;
    };
  }));
  RenderContext2D.prototype.keepColor_klfg04$ = defineInlineFunction('korge-js.com.soywiz.korge.render.RenderContext2D.keepColor_klfg04$', function (callback) {
    var multiplyColor = this.multiplyColor;
    try {
      return callback();
    }
    finally {
      this.multiplyColor = multiplyColor;
    }
  });
  RenderContext2D.prototype.setMatrix_yx07kl$ = function (matrix) {
    this.m.copyFrom_7f5bc6$(matrix);
  };
  RenderContext2D.prototype.translate_lu1900$ = function (dx, dy) {
    this.m.pretranslate_lu1900$(dx, dy);
  };
  RenderContext2D.prototype.scale_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    this.m.prescale_lu1900$(sx, sy);
  };
  RenderContext2D.prototype.scale_14dthe$ = function (scale) {
    this.m.prescale_lu1900$(scale, scale);
  };
  RenderContext2D.prototype.rotate_14dthe$ = function (angle) {
    this.m.prerotate_14dthe$(angle);
  };
  RenderContext2D.prototype.imageScale_srws8f$ = function (texture, x, y, scale) {
    this.batch.drawQuad_bjriwo$(texture, x, y, texture.width * scale, texture.height * scale, this.m, void 0, this.multiplyColor, void 0, this.blendFactors);
  };
  RenderContext2D.prototype.scissor_g4u0wo$ = defineInlineFunction('korge-js.com.soywiz.korge.render.RenderContext2D.scissor_g4u0wo$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    var AG$AG$Scissor_init = _.$$importsForInline$$['korag-js'].com.soywiz.korag.AG.Scissor;
    return function (scissor, block) {
      var oldScissor = this.batch.scissor;
      this.batch.flush();
      if (scissor != null) {
        var left = numberToInt(this.m.transformX_lu1900$(scissor.left, scissor.top));
        var top = numberToInt(this.m.transformY_lu1900$(scissor.left, scissor.top));
        var right = numberToInt(this.m.transformX_lu1900$(scissor.right, scissor.bottom));
        var bottom = numberToInt(this.m.transformY_lu1900$(scissor.right, scissor.bottom));
        this.batch.scissor = new AG$AG$Scissor_init(left, top, right - left | 0, bottom - top | 0);
      }
       else {
        this.batch.scissor = null;
      }
      try {
        block();
      }
      finally {
        this.batch.flush();
        this.batch.scissor = oldScissor;
      }
    };
  }));
  Object.defineProperty(RenderContext2D.prototype, 'extra', {
    get: function () {
      return this.$delegate_lchfrf$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_lchfrf$_0.extra = tmp$;
    }
  });
  function RenderContext2D$mpool$lambda(it) {
    return new Matrix2d();
  }
  RenderContext2D.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RenderContext2D',
    interfaces: [Extra]
  };
  function Texture(base, left, top, right, bottom) {
    Texture$Companion_getInstance();
    if (left === void 0)
      left = 0;
    if (top === void 0)
      top = 0;
    if (right === void 0)
      right = base.width;
    if (bottom === void 0)
      bottom = base.height;
    this.base = base;
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.x = this.left;
    this.y = this.top;
    this.width = this.right - this.left | 0;
    this.height = this.bottom - this.top | 0;
    this.x0 = this.left / this.base.width;
    this.x1 = this.right / this.base.width;
    this.y0 = this.top / this.base.height;
    this.y1 = this.bottom / this.base.height;
  }
  Texture.prototype.toString = function () {
    return 'Texture(' + this.base + ', (x=' + this.x + ', y=' + this.y + ', width=' + this.width + ', height=' + this.height + '))';
  };
  Texture.prototype.slice_tjonv8$ = function (x, y, width, height) {
    return this.sliceBounds_tjonv8$(x, y, x + width | 0, y + height | 0);
  };
  Texture.prototype.slice_2da8yn$ = function (rect) {
    return this.slice_tjonv8$(numberToInt(rect.x), numberToInt(rect.y), numberToInt(rect.width), numberToInt(rect.height));
  };
  Texture.prototype.sliceBounds_tjonv8$ = function (left, top, right, bottom) {
    var tleft = clamp(this.x + left | 0, this.left, this.right);
    var tright = clamp(this.x + right | 0, this.left, this.right);
    var ttop = clamp(this.y + top | 0, this.top, this.bottom);
    var tbottom = clamp(this.y + bottom | 0, this.top, this.bottom);
    return new Texture(this.base, tleft, ttop, tright, tbottom);
  };
  function Texture$Companion() {
    Texture$Companion_instance = this;
  }
  Texture$Companion.prototype.invoke_l6jlr1$ = function (agBase, width, height) {
    return new Texture(new Texture$Base(agBase, width, height), 0, 0, width, height);
  };
  Texture$Companion.prototype.invoke_69xoz1$ = function (rtex) {
    return new Texture(new Texture$Base(rtex.tex, rtex.width, rtex.height), 0, 0, rtex.width, rtex.height);
  };
  Texture$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Texture$Companion_instance = null;
  function Texture$Companion_getInstance() {
    if (Texture$Companion_instance === null) {
      new Texture$Companion();
    }
    return Texture$Companion_instance;
  }
  function Texture$Base(base, width, height) {
    this.base = base;
    this.width = width;
    this.height = height;
  }
  Texture$Base.prototype.close = function () {
    this.base.close();
  };
  Texture$Base.prototype.update_hi0ws4$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    this.base.upload_nn58bg$(bmp, mipmaps);
  };
  Texture$Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base',
    interfaces: [Closeable]
  };
  Texture.prototype.update_hi0ws4$ = function (bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    this.base.update_hi0ws4$(bmp, mipmaps);
  };
  Texture.prototype.close = function () {
    this.base.close();
  };
  Texture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Texture',
    interfaces: [Closeable]
  };
  function TextureWithBitmapSlice(texture, bitmapSlice, scale, bounds) {
    this.texture = texture;
    this.bitmapSlice = bitmapSlice;
    this.scale = scale;
    this.bounds = bounds;
  }
  TextureWithBitmapSlice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureWithBitmapSlice',
    interfaces: []
  };
  TextureWithBitmapSlice.prototype.component1 = function () {
    return this.texture;
  };
  TextureWithBitmapSlice.prototype.component2 = function () {
    return this.bitmapSlice;
  };
  TextureWithBitmapSlice.prototype.component3 = function () {
    return this.scale;
  };
  TextureWithBitmapSlice.prototype.component4 = function () {
    return this.bounds;
  };
  TextureWithBitmapSlice.prototype.copy_2403f8$ = function (texture, bitmapSlice, scale, bounds) {
    return new TextureWithBitmapSlice(texture === void 0 ? this.texture : texture, bitmapSlice === void 0 ? this.bitmapSlice : bitmapSlice, scale === void 0 ? this.scale : scale, bounds === void 0 ? this.bounds : bounds);
  };
  TextureWithBitmapSlice.prototype.toString = function () {
    return 'TextureWithBitmapSlice(texture=' + Kotlin.toString(this.texture) + (', bitmapSlice=' + Kotlin.toString(this.bitmapSlice)) + (', scale=' + Kotlin.toString(this.scale)) + (', bounds=' + Kotlin.toString(this.bounds)) + ')';
  };
  TextureWithBitmapSlice.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.texture) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitmapSlice) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale) | 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    return result;
  };
  TextureWithBitmapSlice.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.texture, other.texture) && Kotlin.equals(this.bitmapSlice, other.bitmapSlice) && Kotlin.equals(this.scale, other.scale) && Kotlin.equals(this.bounds, other.bounds)))));
  };
  function TransformedTexture(texture, trimLeft, trimTop, rotated) {
    if (trimLeft === void 0)
      trimLeft = 0.0;
    if (trimTop === void 0)
      trimTop = 0.0;
    if (rotated === void 0)
      rotated = false;
    this.texture = texture;
    this.trimLeft = trimLeft;
    this.trimTop = trimTop;
    this.rotated = rotated;
  }
  TransformedTexture.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransformedTexture',
    interfaces: []
  };
  function Cached(cached) {
    if (cached === void 0)
      cached = true;
    this.cached = cached;
  }
  Cached.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cached',
    interfaces: [Annotation]
  };
  function VPath(path) {
    this.path = path;
  }
  VPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VPath',
    interfaces: []
  };
  VPath.prototype.component1 = function () {
    return this.path;
  };
  VPath.prototype.copy_61zpoe$ = function (path) {
    return new VPath(path === void 0 ? this.path : path);
  };
  VPath.prototype.toString = function () {
    return 'VPath(path=' + Kotlin.toString(this.path) + ')';
  };
  VPath.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.path) | 0;
    return result;
  };
  VPath.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.path, other.path))));
  };
  function getPath($receiver, clazz, path, continuation) {
    return $receiver.getWith_pn9tk4$(clazz, [new VPath(path)], continuation);
  }
  function getPath_0(T_0, isT, $receiver_0, path_0, continuation) {
    return getPath($receiver_0, getKClass(T_0), path_0, continuation);
  }
  defineInlineFunction('korge-js.com.soywiz.korge.resources.getPath_kakg9t$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var getPath = _.com.soywiz.korge.resources.getPath_ufosyu$;
    return function (T_0, isT, $receiver_0, path_0, continuation) {
      Kotlin.suspendCall(getPath($receiver_0, getKClass(T_0), path_0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function ResourcesRoot() {
    this.root_xh3mz4$_0 = this.root_xh3mz4$_0;
    this.mountable_jwvw3z$_0 = this.mountable_jwvw3z$_0;
  }
  Object.defineProperty(ResourcesRoot.prototype, 'root_0', {
    get: function () {
      if (this.root_xh3mz4$_0 == null)
        return throwUPAE('root');
      return this.root_xh3mz4$_0;
    },
    set: function (root) {
      this.root_xh3mz4$_0 = root;
    }
  });
  Object.defineProperty(ResourcesRoot.prototype, 'mountable_0', {
    get: function () {
      if (this.mountable_jwvw3z$_0 == null)
        return throwUPAE('mountable');
      return this.mountable_jwvw3z$_0;
    },
    set: function (mountable) {
      this.mountable_jwvw3z$_0 = mountable;
    }
  });
  ResourcesRoot.prototype.mount_tv2dhr$ = function (path, file) {
    this.mountable_0.mount_tv2dhr$(path, file);
  };
  ResourcesRoot.prototype.get_61zpoe$ = function (path) {
    return this.root_0.get_61zpoe$(path);
  };
  ResourcesRoot.prototype.get_iyg95m$ = function (path) {
    return this.root_0.get_61zpoe$(path.path);
  };
  function ResourcesRoot$init$lambda(this$ResourcesRoot_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$ResourcesRoot$init$lambda(this$ResourcesRoot_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ResourcesRoot$init$lambda(this$ResourcesRoot_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$ResourcesRoot = this$ResourcesRoot_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$ResourcesRoot$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ResourcesRoot$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ResourcesRoot$init$lambda.prototype.constructor = Coroutine$ResourcesRoot$init$lambda;
  Coroutine$ResourcesRoot$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$ResourcesRoot.mountable_0 = this.local$$receiver, Unit;
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
  ResourcesRoot.prototype.init = function (continuation_0, suspended) {
    var instance = new Coroutine$init(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$init($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$init.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init.prototype.constructor = Coroutine$init;
  Coroutine$init.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = MountableVfs(ResourcesRoot$init$lambda(this.$this), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.root_0 = this.result_0;
            this.$this.mount_tv2dhr$('/', std.ResourcesVfs);
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
  function ResourcesRoot$redirected$lambda(closure$redirector_0) {
    return function ($receiver_0, it_0, continuation_0, suspended) {
      var instance = new Coroutine$ResourcesRoot$redirected$lambda(closure$redirector_0, $receiver_0, it_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ResourcesRoot$redirected$lambda(closure$redirector_0, $receiver_0, it_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$redirector = closure$redirector_0;
    this.local$$receiver = $receiver_0;
    this.local$it = it_0;
  }
  Coroutine$ResourcesRoot$redirected$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ResourcesRoot$redirected$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ResourcesRoot$redirected$lambda.prototype.constructor = Coroutine$ResourcesRoot$redirected$lambda;
  Coroutine$ResourcesRoot$redirected$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$closure$redirector(this.local$$receiver, this.local$it);
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
  ResourcesRoot.prototype.redirected_ulb54z$ = function (redirector_0, continuation_0, suspended) {
    var instance = new Coroutine$redirected_ulb54z$(this, redirector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$redirected_ulb54z$($this, redirector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$redirector = redirector_0;
  }
  Coroutine$redirected_ulb54z$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$redirected_ulb54z$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$redirected_ulb54z$.prototype.constructor = Coroutine$redirected_ulb54z$;
  Coroutine$redirected_ulb54z$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.root_0.redirected_j8632z$(ResourcesRoot$redirected$lambda(this.local$redirector), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.root_0 = this.result_0;
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
  function ResourcesRoot$mapExtensions$lambda(closure$mapsLC) {
    return function ($receiver, it) {
      var pi = new PathInfo(it);
      var map = closure$mapsLC.get_11rb$(get_extensionLC(pi));
      if (map != null) {
        return fullPathWithExtension(pi, map);
      }
       else {
        return pi.fullPath;
      }
    };
  }
  ResourcesRoot.prototype.mapExtensions_9ih0sy$ = function (maps_0, continuation_0, suspended) {
    var instance = new Coroutine$mapExtensions_9ih0sy$(this, maps_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$mapExtensions_9ih0sy$($this, maps_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$maps = maps_0;
  }
  Coroutine$mapExtensions_9ih0sy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapExtensions_9ih0sy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapExtensions_9ih0sy$.prototype.constructor = Coroutine$mapExtensions_9ih0sy$;
  Coroutine$mapExtensions_9ih0sy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var destination = ArrayList_init_0(this.local$maps.length);
            var tmp$;
            for (tmp$ = 0; tmp$ !== this.local$maps.length; ++tmp$) {
              var item = this.local$maps[tmp$];
              destination.add_11rb$(to(item.first.toLowerCase(), item.second));
            }

            var mapsLC = toMap(destination);
            this.state_0 = 2;
            this.result_0 = this.$this.redirected_ulb54z$(ResourcesRoot$mapExtensions$lambda(mapsLC), this);
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
  ResourcesRoot.prototype.mapExtensionsJustInJS_9ih0sy$ = function (maps_0, continuation_0, suspended) {
    var instance = new Coroutine$mapExtensionsJustInJS_9ih0sy$(this, maps_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$mapExtensionsJustInJS_9ih0sy$($this, maps_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$maps = maps_0;
  }
  Coroutine$mapExtensionsJustInJS_9ih0sy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mapExtensionsJustInJS_9ih0sy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mapExtensionsJustInJS_9ih0sy$.prototype.constructor = Coroutine$mapExtensionsJustInJS_9ih0sy$;
  Coroutine$mapExtensionsJustInJS_9ih0sy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (util.OS.isJs) {
              this.state_0 = 2;
              this.result_0 = this.$this.mapExtensions_9ih0sy$(this.local$maps.slice(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
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
  ResourcesRoot.prototype.toString = function () {
    return 'ResourcesRoot[' + this.root_0 + ']';
  };
  ResourcesRoot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ResourcesRoot',
    interfaces: [AsyncDependency]
  };
  function DebugBitmapFont() {
    DebugBitmapFont_instance = this;
    this.bmpFontOnce = new AsyncOnce();
    this.DEBUG_FONT_BYTES_f2da1o$_0 = lazy(DebugBitmapFont$DEBUG_FONT_BYTES$lambda);
  }
  Object.defineProperty(DebugBitmapFont.prototype, 'DEBUG_FONT_BYTES', {
    get: function () {
      return this.DEBUG_FONT_BYTES_f2da1o$_0.value;
    }
  });
  function DebugBitmapFont$DEBUG_FONT_BYTES$lambda() {
    return crypto.Base64.decode_61zpoe$('' + 'iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAAGXRFWHRTb2Z0d2Fy' + 'ZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAAZQTFRF////////VXz1bAAAAAJ0Uk5T' + '/wDltzBKAAAG40lEQVR42uybiXLjOAxEH///p7cmsUQA3SApJ5nU1q7KCW2dIIiz' + 'ATGujY8tjn8+H0fuE0b8HS8D93ve0D3g8/bzwnx9uM919x0BN93XvT9HrkuuLxc1' + 'n1MMBHwcmwcSwcMScpP3uur1PK6nfNx0EiAsnicuOFDHIQzOM/088zVkAuKT8uq8' + 'LmXy5HriuB8ohGwIoDwrE4AjYMSFpLL8NavAgfUShGeKWIyTJag8M+NSCOvSp+lc' + 'ghaFULWkbiKEazWkCmv4YfZnARlBY1T60g06zpxuFCZkoUmfSm9Vz0kIda5xQkE0' + 'p1BP5kVDlT9D5l8Zg+VtJCsYtqJVUb10Ceb3oUtw6fprVLthZAMz32RhhGWBABXW' + 'cvmaA9XEqwyoFuQlKIbIOSvykJe0EG60IAvh9SUuIcW0fEkLrGZs9UX1/90N/U7x' + 'nMKlxjLyUwQQbCyBLnnwlAhOKWJBQFGj6eWhm/gqcOmmTy8PFHc6ose1Vy0ttxEZ' + 'xoqAdAHpH80iPuQAm5NIscPlD4xB3MkAXu7ohFCdR/DtM/hobnig6nxdd75savI0' + '1aRa4SvhsZjk3izhl+ClZIm/Er7nJRDeYc8fGxNNVqlbx41uMY1FjRR9vtFbyKhV' + 'KRvJbCh+rBqLrN/IknEoAtHmkckvYdeg2oM6U3YOkdXzL6tmbmifsSGARRiPid2S' + 'FqRQKQccWcoXWtMIH6O3XPyW/ls7UGRJ1bzEgnn1gqQk950TubnkageKu2G/36uf' + 'laOXuE+hD3Yg+P1647yPGER4R1n8toQZhH+BqjxLFDsxSAnitrEZXtUQUnATORBN' + '3RkHMueqO8a5PeryoKw8kYHRy4A1zywISCznSAtGdmfNEhGQFkNABSh+a6OCTv43' + '1FyhHzNAgSY2Nu9r1JCkPpaATl5og1bxBQsCRuOMkogjd8Z7AhdWqxC2IZkSwCoE' + 'YuV8MLnJzWfkWpyaRtSAdby9iRaomE/WZbW2OBrkbM4C9wzV3dDdKh4I6QIJeFLw' + 'xzrdd5z2T+i/QUR7eILFKeCzRFjiHYuoaMuodVLd5Yz7DBXjZx12lGLBGz8yIGyR' + 'zVtmMtzvGKJOxjidnLE6pEDUkhiFq7KUUk6G9w0uKC5aoIphCRgNATlHzCeCsWwl' + 'gDGE8YiA4LglEBil+iXSbpcmYcNCwJfjgRYlfIYe8k3nNDQOk3Pa9fwRAnyKRo6X' + 'mRXSUHii1g8W8UCVQ81B+xxxlkJCUST8tj5Z4gGahHln0plRcSHAW75VPOAzpDUH' + 'CAJRi4/DJXmkGomGi4rhnBNQsVZbARl3aKzxAA2EY7XA1PdqZfB77cI5PlCrURKs' + 'NsLcnCdQr8iKsfkPoOTD83DV3uS06UxpLdWakdUoBcxajTPZKhb18iNjh5j6koo6' + 'o+JVWwy45oxN0VvhuEIAKauO0mDT//ZvbIr8Ow7EnDeLa4Veu3GEQmIjAwU/xIAX' + 'PPXfWVq/CU10NspXVY2BW0Bz2ZAaQ0mHJPsckSFFbTUs1gZQwa2ElUdLZatSD4xq' + 'VTNMDCtZvzR1oC1YxuQejRnBrbDjtANRoWmgtrdGH8XbGKvR9f04cn+A7G9xxFsy' + 'Svwfu5M4svlFCF21TZbA5XNfCQTOw+kbysfEjzS9Ujk/ayskW7twHPNXWAtqFrav' + 't8g1yVukiBZooAxWkMauUSHJK62hc4i6B69BnZYrTEaMCm3uM8DgCpCs0+AgActJ' + 'R2mrNBxAy8Gd3odWqS5lq2yOxn4hA7kJsDe9XZtfwxiw5dW/hhPCQTdHRMuJXbXL' + 'kLSTe+xxDMIu6hoKaHe29HcIOOVAKqH7tsb0oOTUy/4lB2Jv7yEHaEsi2P3POGB9' + 'oPRHNzOl66eO4/sygNh4lrKwcldvacH3EPAFGfguDuxarlqrv1O73e9/MQG3lyDV' + 'neSdgHmef2ega2J/zoHD0kkb37htt7/OvJvpCQeOQowji8gj37CtUP13CNi713F0' + 'fPv+kRQtizr9LgFGKAWFdse7CuxPcIAf4UC37WCy5ppxcFzz6uOY7yDGy3jk/wQ8' + 'I2CRXnCSfiAFQhrw3lfPXUunqSMRgykY/XsJJe4eXauJKVy4pDaCThF8qDVjqYjE' + 'F4CGZMLkrLdE+aW5vYYwUuUDVw/IjYwl6W1wwVLMyBk3LFsIqD2FuZXzMQcqnNK+' + '0NBgzKwLodiOiURAAc/7ggRFNqHpdUG6Lh8gBbxZLzwJGNtSa62G7xuPgmKLmRCP' + 'pl2xWjPD0UN572id+rDrUPIv1fRwJ7VdaJt74TClQw4UGNH3cnmgU7p8KgF7GWhr' + 'xquSrDVUGw6c5PHZMm6wYg7QdUytzL5RSasFYxOzvqeenQ99hhMenPSPAAMAPncv' + 'sT1xehsAAAAASUVORK5CYII=');
  }
  DebugBitmapFont.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'DebugBitmapFont',
    interfaces: []
  };
  var DebugBitmapFont_instance = null;
  function DebugBitmapFont_getInstance() {
    if (DebugBitmapFont_instance === null) {
      new DebugBitmapFont();
    }
    return DebugBitmapFont_instance;
  }
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function getDebugBmpFontOnce$lambda(continuation_0, suspended) {
    var instance = new Coroutine$getDebugBmpFontOnce$lambda(continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$getDebugBmpFontOnce$lambda(continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
  }
  Coroutine$getDebugBmpFontOnce$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getDebugBmpFontOnce$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getDebugBmpFontOnce$lambda.prototype.constructor = Coroutine$getDebugBmpFontOnce$lambda;
  Coroutine$getDebugBmpFontOnce$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = format.nativeImageFormatProvider.decode_fqrh44$(DebugBitmapFont_getInstance().DEBUG_FONT_BYTES, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var tex = slice(this.result_0);
            var fntAdvance = 7;
            var fntWidth = 8;
            var fntHeight = 8;
            var $receiver = until(0, 256);
            var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
            var destination = LinkedHashMap_init_0(capacity);
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var element = tmp$.next();
              var x = element % 16;
              var y = element / 16 | 0;
              var pair = to(element, new BitmapFont$Glyph(element, tex.sliceWithSize_tjonv8$(Kotlin.imul(x, fntWidth), Kotlin.imul(y, fntHeight), fntWidth, fntHeight), 0, 0, fntAdvance));
              destination.put_xwzc9p$(pair.first, pair.second);
            }

            return BitmapFont_init(fntHeight, destination, emptyMap());
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
  function getDebugBmpFontOnce($receiver, continuation) {
    return DebugBitmapFont_getInstance().bmpFontOnce.invoke_cbny1b$(getDebugBmpFontOnce$lambda, continuation);
  }
  function Intent(description) {
    if (description === void 0)
      description = '';
    this.description = description;
  }
  Intent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Intent',
    interfaces: [Annotation]
  };
  function Module() {
    this.bgcolor_pdzsck$_0 = color.Colors.BLACK;
    this.title_vbpu3a$_0 = 'Game';
    this.icon_sodvon$_0 = null;
    this.iconImage_k6m3z4$_0 = null;
    this.quality_my3xyb$_0 = LightQuality.PERFORMANCE;
    this.mainScene_ucriup$_0 = getKClass(EmptyScene);
    this.clearEachFrame_6y6z5f$_0 = true;
    this.targetFps_tqj5xy$_0 = 0.0;
    this.scaleAnchor_ey962r$_0 = Anchor.Companion.MIDDLE_CENTER;
    this.scaleMode_68bjqj$_0 = ScaleMode.Companion.SHOW_ALL;
    this.clipBorders_hdro7f$_0 = true;
  }
  Object.defineProperty(Module.prototype, 'bgcolor', {
    get: function () {
      return this.bgcolor_pdzsck$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'title', {
    get: function () {
      return this.title_vbpu3a$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'icon', {
    get: function () {
      return this.icon_sodvon$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'iconImage', {
    get: function () {
      return this.iconImage_k6m3z4$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'quality', {
    get: function () {
      return this.quality_my3xyb$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'size', {
    get: function () {
      return new SizeInt(640, 480);
    }
  });
  Object.defineProperty(Module.prototype, 'windowSize', {
    get: function () {
      return this.size;
    }
  });
  Object.defineProperty(Module.prototype, 'mainScene', {
    get: function () {
      return this.mainScene_ucriup$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'clearEachFrame', {
    get: function () {
      return this.clearEachFrame_6y6z5f$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'targetFps', {
    get: function () {
      return this.targetFps_tqj5xy$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'scaleAnchor', {
    get: function () {
      return this.scaleAnchor_ey962r$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'scaleMode', {
    get: function () {
      return this.scaleMode_68bjqj$_0;
    }
  });
  Object.defineProperty(Module.prototype, 'clipBorders', {
    get: function () {
      return this.clipBorders_hdro7f$_0;
    }
  });
  Module.prototype.init_y6n311$ = function (injector, continuation) {
  };
  Module.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Module',
    interfaces: []
  };
  function Scene() {
    this.injector_kcjok6$_0 = this.injector_kcjok6$_0;
    this.views_20f2oo$_0 = this.views_20f2oo$_0;
    this.sceneContainer_uiphpl$_0 = this.sceneContainer_uiphpl$_0;
    this.resourcesRoot_9jjxxr$_0 = this.resourcesRoot_9jjxxr$_0;
    this._sceneViewContainer_8be2vx$_r1ibp$_0 = this._sceneViewContainer_8be2vx$_r1ibp$_0;
    this.sceneView_94s8x1$_0 = this.sceneView_94s8x1$_0;
    this.cancellables = new CancellableGroup();
  }
  Object.defineProperty(Scene.prototype, 'injector', {
    get: function () {
      if (this.injector_kcjok6$_0 == null)
        return throwUPAE('injector');
      return this.injector_kcjok6$_0;
    },
    set: function (injector) {
      this.injector_kcjok6$_0 = injector;
    }
  });
  Object.defineProperty(Scene.prototype, 'views', {
    get: function () {
      if (this.views_20f2oo$_0 == null)
        return throwUPAE('views');
      return this.views_20f2oo$_0;
    },
    set: function (views) {
      this.views_20f2oo$_0 = views;
    }
  });
  Object.defineProperty(Scene.prototype, 'ag', {
    get: function () {
      return this.views.ag;
    }
  });
  Object.defineProperty(Scene.prototype, 'sceneContainer', {
    get: function () {
      if (this.sceneContainer_uiphpl$_0 == null)
        return throwUPAE('sceneContainer');
      return this.sceneContainer_uiphpl$_0;
    },
    set: function (sceneContainer) {
      this.sceneContainer_uiphpl$_0 = sceneContainer;
    }
  });
  Object.defineProperty(Scene.prototype, 'resourcesRoot', {
    get: function () {
      if (this.resourcesRoot_9jjxxr$_0 == null)
        return throwUPAE('resourcesRoot');
      return this.resourcesRoot_9jjxxr$_0;
    },
    set: function (resourcesRoot) {
      this.resourcesRoot_9jjxxr$_0 = resourcesRoot;
    }
  });
  Object.defineProperty(Scene.prototype, '_sceneViewContainer_8be2vx$', {
    get: function () {
      if (this._sceneViewContainer_8be2vx$_r1ibp$_0 == null)
        return throwUPAE('_sceneViewContainer');
      return this._sceneViewContainer_8be2vx$_r1ibp$_0;
    },
    set: function (_sceneViewContainer) {
      this._sceneViewContainer_8be2vx$_r1ibp$_0 = _sceneViewContainer;
    }
  });
  Object.defineProperty(Scene.prototype, 'sceneView', {
    get: function () {
      if (this.sceneView_94s8x1$_0 == null)
        return throwUPAE('sceneView');
      return this.sceneView_94s8x1$_0;
    },
    set: function (sceneView) {
      this.sceneView_94s8x1$_0 = sceneView;
    }
  });
  Object.defineProperty(Scene.prototype, 'root', {
    get: function () {
      return this._sceneViewContainer_8be2vx$;
    }
  });
  Object.defineProperty(Scene.prototype, 'coroutineContext', {
    get: function () {
      return this.views.coroutineContext;
    }
  });
  Scene.prototype.createSceneView = function () {
    return new Container();
  };
  Scene.prototype.init_y6n311$ = function (injector_0, continuation_0, suspended) {
    var instance = new Coroutine$init_y6n311$(this, injector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$init_y6n311$($this, injector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$injector = injector_0;
  }
  Coroutine$init_y6n311$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init_y6n311$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init_y6n311$.prototype.constructor = Coroutine$init_y6n311$;
  Coroutine$init_y6n311$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.injector = this.local$injector;
            this.state_0 = 2;
            this.result_0 = this.local$injector.get_wx4qjr$(getKClass(Views), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.views = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$injector.get_wx4qjr$(getKClass(SceneContainer), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.$this.sceneContainer = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$injector.get_wx4qjr$(getKClass(ResourcesRoot), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.$this.resourcesRoot = this.result_0;
            this.$this._sceneViewContainer_8be2vx$ = new Container();
            this.$this.sceneView = this.$this.createSceneView();
            this.$this._sceneViewContainer_8be2vx$.plusAssign_l5rad2$(this.$this.sceneView);
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
  Scene.prototype.sceneAfterInit = function (continuation) {
  };
  Scene.prototype.sceneBeforeLeaving = function (continuation) {
  };
  Scene.prototype.sceneDestroy = function (continuation) {
    this.cancellables.cancel_tcv7n7$();
  };
  Scene.prototype.sceneAfterDestroy = function (continuation) {
  };
  Scene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scene',
    interfaces: [CoroutineContextHolder, ViewsContainer, InjectorAsyncDependency]
  };
  var Size$Size$Immutable_init = $module$korma_js.com.soywiz.korma.geom.Size.Immutable;
  function ScaledScene() {
    Scene.call(this);
    this.sceneSize_kgz5x9$_0 = new Size$Size$Immutable_init(numberToDouble(320), numberToDouble(240));
    this.sceneScale_4jzu6e$_0 = 2.0;
    this.sceneFiltering_vld8x2$_0 = false;
  }
  Object.defineProperty(ScaledScene.prototype, 'sceneSize', {
    get: function () {
      return this.sceneSize_kgz5x9$_0;
    }
  });
  Object.defineProperty(ScaledScene.prototype, 'sceneScale', {
    get: function () {
      return this.sceneScale_4jzu6e$_0;
    }
  });
  Object.defineProperty(ScaledScene.prototype, 'sceneFiltering', {
    get: function () {
      return this.sceneFiltering_vld8x2$_0;
    }
  });
  ScaledScene.prototype.createSceneView = function () {
    return new ScaleView(numberToInt(this.sceneSize.width), numberToInt(this.sceneSize.height), this.sceneScale, this.sceneFiltering);
  };
  ScaledScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaledScene',
    interfaces: [Scene]
  };
  function EmptyScene() {
    Scene.call(this);
  }
  EmptyScene.prototype.sceneInit_st8p7j$ = function ($receiver, continuation) {
  };
  EmptyScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EmptyScene',
    interfaces: [Scene]
  };
  function LogScene() {
    Scene.call(this);
    this.log_c9euda$_0 = ArrayList_init_1();
  }
  Object.defineProperty(LogScene.prototype, 'sceneName', {
    get: function () {
      return 'LogScene';
    }
  });
  Object.defineProperty(LogScene.prototype, 'log', {
    get: function () {
      return this.log_c9euda$_0;
    }
  });
  LogScene.prototype.log_61zpoe$ = function (msg) {
    this.log.add_11rb$(msg);
  };
  LogScene.prototype.init_y6n311$ = function (injector_0, continuation_0, suspended) {
    var instance = new Coroutine$init_y6n311$_0(this, injector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$init_y6n311$_0($this, injector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$injector = injector_0;
  }
  Coroutine$init_y6n311$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init_y6n311$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init_y6n311$_0.prototype.constructor = Coroutine$init_y6n311$_0;
  Coroutine$init_y6n311$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = Scene.prototype.init_y6n311$.call(this.$this, this.local$injector, this);
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
  LogScene.prototype.sceneInit_st8p7j$ = function ($receiver, continuation) {
    this.log_61zpoe$(this.sceneName + '.sceneInit');
  };
  LogScene.prototype.sceneAfterInit = function (continuation_0, suspended) {
    var instance = new Coroutine$sceneAfterInit(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneAfterInit($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$sceneAfterInit.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneAfterInit.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneAfterInit.prototype.constructor = Coroutine$sceneAfterInit;
  Coroutine$sceneAfterInit.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.log_61zpoe$(this.$this.sceneName + '.sceneAfterInit');
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneAfterInit.call(this.$this, this);
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
  LogScene.prototype.sceneDestroy = function (continuation_0, suspended) {
    var instance = new Coroutine$sceneDestroy(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneDestroy($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$sceneDestroy.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneDestroy.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneDestroy.prototype.constructor = Coroutine$sceneDestroy;
  Coroutine$sceneDestroy.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.log_61zpoe$(this.$this.sceneName + '.sceneDestroy');
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneDestroy.call(this.$this, this);
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
  LogScene.prototype.sceneAfterDestroy = function (continuation_0, suspended) {
    var instance = new Coroutine$sceneAfterDestroy(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneAfterDestroy($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$sceneAfterDestroy.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneAfterDestroy.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneAfterDestroy.prototype.constructor = Coroutine$sceneAfterDestroy;
  Coroutine$sceneAfterDestroy.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.log_61zpoe$(this.$this.sceneName + '.sceneAfterDestroy');
            this.state_0 = 2;
            this.result_0 = Scene.prototype.sceneAfterDestroy.call(this.$this, this);
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
  LogScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LogScene',
    interfaces: [Scene]
  };
  function sleep($receiver, time, continuation) {
    return sleep_0($receiver.sceneView, time, continuation);
  }
  function sleepMs($receiver, time, continuation) {
    return sleepMs_0($receiver.sceneView, time, continuation);
  }
  var sceneContainer = defineInlineFunction('korge-js.com.soywiz.korge.scene.sceneContainer_e1tpdc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var SceneContainer_init = _.com.soywiz.korge.scene.SceneContainer;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    function sceneContainer$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, views, callback) {
      if (callback === void 0)
        callback = sceneContainer$lambda;
      var $receiver_0 = addTo(new SceneContainer_init(views), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function SceneContainer(views) {
    SceneContainer$Companion_getInstance();
    Container.call(this);
    this.views = views;
    this.transitionView = new TransitionView();
    this.currentScene = null;
    this.plusAssign_l5rad2$(this.transitionView);
    this.visitStack_0 = arrayListOf([SceneContainer$Companion_getInstance().EMPTY_VISIT_ENTRY_0]);
    this.visitPos_0 = 0;
  }
  SceneContainer.prototype.changeTo_65u6i8$ = function (T_0, isT, injects_0, time_0, transition_0, continuation) {
    if (time_0 === void 0) {
      time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition_0 === void 0)
      transition_0 = scene.AlphaTransition;
    return this.changeTo_oszfv1$(getKClass(T_0), injects_0.slice(), time_0, transition_0, continuation);
  };
  defineInlineFunction('korge-js.com.soywiz.korge.scene.SceneContainer.changeTo_65u6i8$', wrapFunction(function () {
    var scene = _.com.soywiz.korge.scene;
    var getKClass = Kotlin.getKClass;
    var TimeSpan = _.$$importsForInline$$['klock-js'].com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    return function (T_0, isT, injects_0, time_0, transition_0, continuation) {
      if (time_0 === void 0) {
        time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
      }
      if (transition_0 === void 0)
        transition_0 = scene.AlphaTransition;
      Kotlin.suspendCall(this.changeTo_oszfv1$(getKClass(T_0), injects_0.slice(), time_0, transition_0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  SceneContainer.prototype.pushTo_65u6i8$ = function (T_0, isT, injects_0, time_0, transition_0, continuation) {
    if (time_0 === void 0) {
      time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition_0 === void 0)
      transition_0 = scene.AlphaTransition;
    return this.pushTo_oszfv1$(getKClass(T_0), injects_0.slice(), time_0, transition_0, continuation);
  };
  defineInlineFunction('korge-js.com.soywiz.korge.scene.SceneContainer.pushTo_65u6i8$', wrapFunction(function () {
    var scene = _.com.soywiz.korge.scene;
    var getKClass = Kotlin.getKClass;
    var TimeSpan = _.$$importsForInline$$['klock-js'].com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    return function (T_0, isT, injects_0, time_0, transition_0, continuation) {
      if (time_0 === void 0) {
        time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
      }
      if (transition_0 === void 0)
        transition_0 = scene.AlphaTransition;
      Kotlin.suspendCall(this.pushTo_oszfv1$(getKClass(T_0), injects_0.slice(), time_0, transition_0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function SceneContainer$VisitEntry(clazz, injects) {
    this.clazz = clazz;
    this.injects = injects;
  }
  SceneContainer$VisitEntry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VisitEntry',
    interfaces: []
  };
  SceneContainer$VisitEntry.prototype.component1 = function () {
    return this.clazz;
  };
  SceneContainer$VisitEntry.prototype.component2 = function () {
    return this.injects;
  };
  SceneContainer$VisitEntry.prototype.copy_9au196$ = function (clazz, injects) {
    return new SceneContainer$VisitEntry(clazz === void 0 ? this.clazz : clazz, injects === void 0 ? this.injects : injects);
  };
  SceneContainer$VisitEntry.prototype.toString = function () {
    return 'VisitEntry(clazz=' + Kotlin.toString(this.clazz) + (', injects=' + Kotlin.toString(this.injects)) + ')';
  };
  SceneContainer$VisitEntry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.clazz) | 0;
    result = result * 31 + Kotlin.hashCode(this.injects) | 0;
    return result;
  };
  SceneContainer$VisitEntry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.clazz, other.clazz) && Kotlin.equals(this.injects, other.injects)))));
  };
  function SceneContainer$Companion() {
    SceneContainer$Companion_instance = this;
    this.EMPTY_VISIT_ENTRY_0 = new SceneContainer$VisitEntry(getKClass(EmptyScene), emptyList());
  }
  SceneContainer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SceneContainer$Companion_instance = null;
  function SceneContainer$Companion_getInstance() {
    if (SceneContainer$Companion_instance === null) {
      new SceneContainer$Companion();
    }
    return SceneContainer$Companion_instance;
  }
  SceneContainer.prototype.back_oyhko$ = function (time, transition, continuation) {
    if (time === void 0) {
      time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition === void 0)
      transition = AlphaTransition;
    var tmp$;
    this.visitPos_0 = this.visitPos_0 - 1 | 0;
    return this._changeTo_0((tmp$ = getOrNull(this.visitStack_0, this.visitPos_0)) != null ? tmp$ : SceneContainer$Companion_getInstance().EMPTY_VISIT_ENTRY_0, time, transition, continuation);
  };
  SceneContainer.prototype.forward_oyhko$ = function (time, transition, continuation) {
    if (time === void 0) {
      time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition === void 0)
      transition = AlphaTransition;
    var tmp$;
    this.visitPos_0 = this.visitPos_0 + 1 | 0;
    return this._changeTo_0((tmp$ = getOrNull(this.visitStack_0, this.visitPos_0)) != null ? tmp$ : SceneContainer$Companion_getInstance().EMPTY_VISIT_ENTRY_0, time, transition, continuation);
  };
  SceneContainer.prototype.setCurrent_0 = function (entry) {
    while (this.visitStack_0.size <= this.visitPos_0)
      this.visitStack_0.add_11rb$(SceneContainer$Companion_getInstance().EMPTY_VISIT_ENTRY_0);
    this.visitStack_0.set_wxm5ur$(this.visitPos_0, entry);
  };
  SceneContainer.prototype.pushTo_oszfv1$ = function (clazz, injects, time, transition, continuation) {
    if (time === void 0) {
      time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition === void 0)
      transition = AlphaTransition;
    this.visitPos_0 = this.visitPos_0 + 1 | 0;
    this.setCurrent_0(new SceneContainer$VisitEntry(clazz, toList(injects)));
    return this._changeTo_1(clazz, injects.slice(), time, transition, continuation);
  };
  SceneContainer.prototype.changeTo_oszfv1$ = function (clazz, injects, time, transition, continuation) {
    if (time === void 0) {
      time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
    }
    if (transition === void 0)
      transition = AlphaTransition;
    this.setCurrent_0(new SceneContainer$VisitEntry(clazz, toList(injects)));
    return this._changeTo_1(clazz, injects.slice(), time, transition, continuation);
  };
  SceneContainer.prototype._changeTo_0 = function (entry_0, time_0, transition_0, continuation_0, suspended) {
    var instance = new Coroutine$_changeTo_0(this, entry_0, time_0, transition_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$_changeTo_0($this, entry_0, time_0, transition_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$entry = entry_0;
    this.local$time = time_0;
    this.local$transition = transition_0;
  }
  Coroutine$_changeTo_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$_changeTo_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$_changeTo_0.prototype.constructor = Coroutine$_changeTo_0;
  Coroutine$_changeTo_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$time === void 0) {
              this.local$time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
            }

            if (this.local$transition === void 0)
              this.local$transition = AlphaTransition;
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this._changeTo_1(this.local$entry.clazz, copyToArray(this.local$entry.injects).slice(), this.local$time, this.local$transition, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return Kotlin.isType(tmp$ = this.result_0, Scene) ? tmp$ : throwCCE();
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
  function SceneContainer$_changeTo$lambda(closure$instance_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SceneContainer$_changeTo$lambda(closure$instance_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SceneContainer$_changeTo$lambda(closure$instance_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$instance = closure$instance_0;
  }
  Coroutine$SceneContainer$_changeTo$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SceneContainer$_changeTo$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SceneContainer$_changeTo$lambda.prototype.constructor = Coroutine$SceneContainer$_changeTo$lambda;
  Coroutine$SceneContainer$_changeTo$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$instance.sceneAfterDestroy(this);
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
  function SceneContainer$_changeTo$lambda_0(closure$instance_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$SceneContainer$_changeTo$lambda_0(closure$instance_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$SceneContainer$_changeTo$lambda_0(closure$instance_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$instance = closure$instance_0;
  }
  Coroutine$SceneContainer$_changeTo$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$SceneContainer$_changeTo$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$SceneContainer$_changeTo$lambda_0.prototype.constructor = Coroutine$SceneContainer$_changeTo$lambda_0;
  Coroutine$SceneContainer$_changeTo$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$instance.sceneAfterInit(this);
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
  SceneContainer.prototype._changeTo_1 = function (clazz_0, injects_0, time_0, transition_0, continuation_0, suspended) {
    var instance = new Coroutine$_changeTo_1(this, clazz_0, injects_0, time_0, transition_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$_changeTo_1($this, clazz_0, injects_0, time_0, transition_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$oldScene = void 0;
    this.local$instance = void 0;
    this.local$clazz = clazz_0;
    this.local$injects = injects_0;
    this.local$time = time_0;
    this.local$transition = transition_0;
  }
  Coroutine$_changeTo_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$_changeTo_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$_changeTo_1.prototype.constructor = Coroutine$_changeTo_1;
  Coroutine$_changeTo_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$time === void 0) {
              this.local$time = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
            }

            if (this.local$transition === void 0)
              this.local$transition = AlphaTransition;
            var tmp$, tmp$_0;
            this.local$oldScene = this.$this.currentScene;
            var sceneInjector = this.$this.views.injector.child().mapInstance_b1ce0a$(getKClass(SceneContainer), this.$this);
            for (tmp$ = 0; tmp$ !== this.local$injects.length; ++tmp$) {
              var inject = this.local$injects[tmp$];
              sceneInjector.mapInstance_b1ce0a$(Kotlin.isType(tmp$_0 = Kotlin.getKClassFromExpression(inject), KClass) ? tmp$_0 : throwCCE(), inject);
            }

            this.state_0 = 2;
            this.result_0 = sceneInjector.get_wx4qjr$(this.local$clazz, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$instance = this.result_0;
            this.$this.currentScene = this.local$instance;
            this.$this.transitionView.transition = this.local$transition;
            this.$this.transitionView.startNewTransition_l5rad2$(this.local$instance._sceneViewContainer_8be2vx$);
            this.state_0 = 3;
            this.result_0 = this.local$instance.sceneInit_st8p7j$(this.local$instance.sceneView, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (this.local$oldScene != null) {
              this.state_0 = 4;
              this.result_0 = this.local$oldScene.sceneBeforeLeaving(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 5;
              continue;
            }

          case 4:
            this.result_0 = Unit;
            this.state_0 = 5;
            continue;
          case 5:
            if (this.local$time.compareTo_11rb$(TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0))) > 0) {
              this.state_0 = 6;
              this.result_0 = tween(this.$this.transitionView, [new V2(getPropertyCallableRef('ratio', 0, function ($receiver) {
                return $receiver.ratio;
              }.bind(null, this.$this.transitionView), function ($receiver, value) {
                $receiver.ratio = value;
              }.bind(null, this.$this.transitionView)), numberToDouble(0.0), numberToDouble(1.0), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
                return interpolate(v0_0, v1_0, step_0);
              }))], this.local$time, void 0, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.$this.transitionView.ratio = 1.0;
              this.state_0 = 7;
              continue;
            }

          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            if (this.local$oldScene != null) {
              this.state_0 = 8;
              this.result_0 = this.local$oldScene.sceneDestroy(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 9;
              continue;
            }

          case 8:
            this.result_0 = Unit;
            this.state_0 = 9;
            continue;
          case 9:
            launchImmediately_0(get_KorgeDispatcher(), void 0, SceneContainer$_changeTo$lambda(this.local$instance));
            launchImmediately_0(get_KorgeDispatcher(), void 0, SceneContainer$_changeTo$lambda_0(this.local$instance));
            return this.local$instance;
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
  SceneContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SceneContainer',
    interfaces: [Container]
  };
  function TransitionView() {
    Container.call(this);
    this.transition = AlphaTransition;
    this.dummy1 = new Container();
    this.dummy2 = new Container();
    this.addChild_l5rad2$(this.dummy1);
    this.addChild_l5rad2$(this.dummy2);
  }
  Object.defineProperty(TransitionView.prototype, 'prev', {
    get: function () {
      return this.children.get_za3lpa$(0);
    }
  });
  Object.defineProperty(TransitionView.prototype, 'next', {
    get: function () {
      return this.children.get_za3lpa$(1);
    }
  });
  TransitionView.prototype.startNewTransition_l5rad2$ = function (next) {
    this.ratio = 0.0;
    this.setViews_1kpf2s$(this.next, next);
  };
  TransitionView.prototype.setViews_1kpf2s$ = function (prev, next) {
    this.removeChildren();
    this.addChild_l5rad2$(prev);
    this.addChild_l5rad2$(next);
  };
  TransitionView.prototype.render_8isv09$ = function (ctx) {
    if (!this.visible)
      return;
    var m = this.renderMatrix;
    if (this.ratio <= 0.0)
      this.prev.render_8isv09$(ctx);
    else if (this.ratio >= 1.0)
      this.next.render_8isv09$(ctx);
    else
      this.transition.render(ctx, this.prev, this.next, this.ratio);
  };
  TransitionView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransitionView',
    interfaces: [Container]
  };
  function Transition(render) {
    this.render = render;
  }
  Transition.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transition',
    interfaces: []
  };
  function withEasing$lambda(this$withEasing, closure$easing) {
    return function (ctx, prev, next, ratio) {
      this$withEasing.render(ctx, prev, next, closure$easing.invoke_14dthe$(ratio));
      return Unit;
    };
  }
  function withEasing($receiver, easing) {
    return new Transition(withEasing$lambda($receiver, easing));
  }
  function AlphaTransition$lambda(ctx, prev, next, ratio) {
    var prevAlpha = prev.alpha;
    var nextAlpha = next.alpha;
    try {
      prev.alpha = 1.0 - ratio;
      next.alpha = ratio;
      prev.render_8isv09$(ctx);
      next.render_8isv09$(ctx);
    }
    finally {
      prev.alpha = prevAlpha;
      next.alpha = nextAlpha;
    }
    return Unit;
  }
  var AlphaTransition;
  function Achievements() {
  }
  Achievements.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Achievements',
    interfaces: []
  };
  function Ads() {
  }
  Ads.prototype.preload = function (continuation) {
  };
  Ads.prototype.showInterstial = function (continuation) {
  };
  Ads.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ads',
    interfaces: []
  };
  function Analytics() {
  }
  Analytics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Analytics',
    interfaces: []
  };
  function Browser(injector) {
    this.injector = injector;
  }
  Browser.prototype.browse_61zpoe$ = function (url_0, continuation_0, suspended) {
    var instance = new Coroutine$browse_61zpoe$(this, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$browse_61zpoe$($this, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$url = url_0;
  }
  Coroutine$browse_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$browse_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$browse_61zpoe$.prototype.constructor = Coroutine$browse_61zpoe$;
  Coroutine$browse_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.injector.get_wx4qjr$(getKClass(Application), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            this.result_0.light.openURL_61zpoe$(this.local$url.toString());
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
  Browser.prototype.frame = function (continuation_0, suspended) {
    var instance = new Coroutine$frame(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$frame($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
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
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.injector.getOrNull_wx4qjr$(getKClass(Frame), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0) != null ? tmp$ : invalidOp('Frame not available at korge');
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
  Browser.prototype.openFile_61zpoe$$default = function (filter_0, continuation_0, suspended) {
    var instance = new Coroutine$openFile_61zpoe$$default(this, filter_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$openFile_61zpoe$$default($this, filter_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$filter = filter_0;
  }
  Coroutine$openFile_61zpoe$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$openFile_61zpoe$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$openFile_61zpoe$$default.prototype.constructor = Coroutine$openFile_61zpoe$$default;
  Coroutine$openFile_61zpoe$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.frame(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.dialogOpenFile_61zpoe$(this.local$filter, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  Browser.prototype.openFile_61zpoe$ = function (filter, continuation, callback$default) {
    if (filter === void 0)
      filter = '';
    return callback$default ? callback$default(filter, continuation) : this.openFile_61zpoe$$default(filter, continuation);
  };
  Browser.prototype.prompt_puj7f4$ = function (title_0, initialValue_0, continuation_0, suspended) {
    var instance = new Coroutine$prompt_puj7f4$(this, title_0, initialValue_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$prompt_puj7f4$($this, title_0, initialValue_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$title = title_0;
    this.local$initialValue = initialValue_0;
  }
  Coroutine$prompt_puj7f4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$prompt_puj7f4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$prompt_puj7f4$.prototype.constructor = Coroutine$prompt_puj7f4$;
  Coroutine$prompt_puj7f4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.frame(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.prompt_puj7f4$(this.local$title, this.local$initialValue, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  Browser.prototype.alert_61zpoe$ = function (message_0, continuation_0, suspended) {
    var instance = new Coroutine$alert_61zpoe$(this, message_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$alert_61zpoe$($this, message_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$message = message_0;
  }
  Coroutine$alert_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$alert_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$alert_61zpoe$.prototype.constructor = Coroutine$alert_61zpoe$;
  Coroutine$alert_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.frame(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.alert_61zpoe$(this.local$message, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  Browser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Browser',
    interfaces: []
  };
  function CloudSave() {
  }
  CloudSave.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CloudSave',
    interfaces: []
  };
  function InAppPayments() {
  }
  InAppPayments.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InAppPayments',
    interfaces: []
  };
  function RateApp() {
  }
  RateApp.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RateApp',
    interfaces: []
  };
  function Share() {
  }
  Share.prototype.shareMessage_puj7f4$ = function (title, message, continuation) {
  };
  Share.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Share',
    interfaces: []
  };
  function Store() {
  }
  Store.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Store',
    interfaces: []
  };
  function IStorage() {
  }
  IStorage.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IStorage',
    interfaces: []
  };
  function contains($receiver, key) {
    return $receiver.getOrNull_61zpoe$(key) != null;
  }
  function get_1($receiver, key) {
    var tmp$;
    tmp$ = $receiver.getOrNull_61zpoe$(key);
    if (tmp$ == null) {
      throw new KeyNotFoundException(key);
    }
    return tmp$;
  }
  function InmemoryStorage() {
    StorageBase.call(this);
  }
  InmemoryStorage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InmemoryStorage',
    interfaces: [StorageBase]
  };
  function Storage() {
    this.$delegate_fyb14n$_0 = NativeStorage_getInstance();
  }
  Storage.prototype.getOrNull_61zpoe$ = function (key) {
    return this.$delegate_fyb14n$_0.getOrNull_61zpoe$(key);
  };
  Storage.prototype.remove_61zpoe$ = function (key) {
    return this.$delegate_fyb14n$_0.remove_61zpoe$(key);
  };
  Storage.prototype.removeAll = function () {
    return this.$delegate_fyb14n$_0.removeAll();
  };
  Storage.prototype.set_puj7f4$ = function (key, value) {
    return this.$delegate_fyb14n$_0.set_puj7f4$(key, value);
  };
  Storage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Storage',
    interfaces: [IStorage]
  };
  function StorageBase() {
    this.data = HashMap_init();
  }
  StorageBase.prototype.set_puj7f4$ = function (key, value) {
    this.data.put_xwzc9p$(key, value);
  };
  StorageBase.prototype.getOrNull_61zpoe$ = function (key) {
    return this.data.get_11rb$(key);
  };
  StorageBase.prototype.remove_61zpoe$ = function (key) {
    this.data.remove_11rb$(key);
  };
  StorageBase.prototype.removeAll = function () {
    this.data.clear();
  };
  StorageBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StorageBase',
    interfaces: [IStorage]
  };
  function StorageItem(storage, clazz, key, gen) {
    this.storage = storage;
    this.clazz = clazz;
    this.key = key;
    this.gen = gen;
  }
  Object.defineProperty(StorageItem.prototype, 'value', {
    get: function () {
      if (!contains(this.storage, this.key))
        this.storage.set_puj7f4$(this.key, json.Json.encodeUntyped_s8jyv4$(serialization.Mapper.toUntyped_b1ce0a$(this.clazz, this.gen())));
      return json.Json.decodeToType_27ii8w$(get_1(this.storage, this.key), this.clazz);
    },
    set: function (value) {
      this.storage.set_puj7f4$(this.key, json.Json.encodeUntyped_s8jyv4$(serialization.Mapper.toUntyped_b1ce0a$(this.clazz, value)));
    }
  });
  StorageItem.prototype.remove = function () {
    this.storage.remove_61zpoe$(this.key);
  };
  StorageItem.prototype.getValue_t0xcdd$ = defineInlineFunction('korge-js.com.soywiz.korge.service.storage.StorageItem.getValue_t0xcdd$', function (thisRef, property) {
    return this.value;
  });
  StorageItem.prototype.setValue_809r6s$ = defineInlineFunction('korge-js.com.soywiz.korge.service.storage.StorageItem.setValue_809r6s$', wrapFunction(function () {
    return function (thisRef, property, value) {
      this.value = value;
    };
  }));
  StorageItem.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'StorageItem',
    interfaces: []
  };
  var item = defineInlineFunction('korge-js.com.soywiz.korge.service.storage.item_v3w8yo$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    var StorageItem_init = _.com.soywiz.korge.service.storage.StorageItem;
    return function (T_0, isT, $receiver, key, gen) {
      return new StorageItem_init($receiver, getKClass(T_0), key, gen);
    };
  }));
  function Stats() {
    this.counters = new Stats$RCollection();
    this.values = new Stats$RCollection();
  }
  function Stats$Named() {
  }
  Stats$Named.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Named',
    interfaces: []
  };
  function Stats$Counter(name) {
    this.name_c1e9d8$_0 = name;
    this.frameCount_b5fnyj$_0 = 0.0;
    this.countThisFrame_mh3buf$_0 = 0;
    this.totalCount_l0dlro$_0 = 0.0;
  }
  Object.defineProperty(Stats$Counter.prototype, 'name', {
    get: function () {
      return this.name_c1e9d8$_0;
    }
  });
  Object.defineProperty(Stats$Counter.prototype, 'frameCount', {
    get: function () {
      return this.frameCount_b5fnyj$_0;
    },
    set: function (frameCount) {
      this.frameCount_b5fnyj$_0 = frameCount;
    }
  });
  Object.defineProperty(Stats$Counter.prototype, 'countThisFrame', {
    get: function () {
      return this.countThisFrame_mh3buf$_0;
    },
    set: function (countThisFrame) {
      this.countThisFrame_mh3buf$_0 = countThisFrame;
    }
  });
  Object.defineProperty(Stats$Counter.prototype, 'totalCount', {
    get: function () {
      return this.totalCount_l0dlro$_0;
    },
    set: function (totalCount) {
      this.totalCount_l0dlro$_0 = totalCount;
    }
  });
  Object.defineProperty(Stats$Counter.prototype, 'avgCountPerFrame', {
    get: function () {
      return this.totalCount / this.frameCount;
    }
  });
  Stats$Counter.prototype.increment_za3lpa$ = function (count) {
    if (count === void 0)
      count = 1;
    this.countThisFrame = this.countThisFrame + count | 0;
  };
  Stats$Counter.prototype.startFrame = function () {
    this.totalCount = this.totalCount + this.countThisFrame;
    this.frameCount = this.frameCount + 1;
    this.countThisFrame = 0;
  };
  Stats$Counter.prototype.toString = function () {
    return 'Counter(' + this.name + '): [frames=' + this.frameCount + ', totalCount=' + this.totalCount + ', countThisFrame=' + this.countThisFrame + ', avgCountPerFrame=' + this.avgCountPerFrame + ']';
  };
  Stats$Counter.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Counter',
    interfaces: [Stats$Named]
  };
  function Stats$Value($outer, name) {
    this.$outer = $outer;
    this.name_fn17rz$_0 = name;
    this.value = null;
  }
  Object.defineProperty(Stats$Value.prototype, 'name', {
    get: function () {
      return this.name_fn17rz$_0;
    }
  });
  Stats$Value.prototype.startFrame = function () {
  };
  Stats$Value.prototype.set_s8jyv4$ = function (value) {
    this.value = value;
  };
  Stats$Value.prototype.toString = function () {
    return 'Value(' + this.name + '): ' + toString(this.value);
  };
  Stats$Value.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Value',
    interfaces: [Stats$Named]
  };
  Stats.prototype.startFrame = function () {
    var tmp$, tmp$_0;
    tmp$ = this.counters.list.iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      c.startFrame();
    }
    tmp$_0 = this.values.list.iterator();
    while (tmp$_0.hasNext()) {
      var c_0 = tmp$_0.next();
      c_0.startFrame();
    }
  };
  function Stats$RCollection() {
    this.list = ArrayList_init_1();
    this.byName = LinkedHashMap_init();
  }
  Stats$RCollection.prototype.add_9rsjaw$ = function (item) {
    this.list.add_11rb$(item);
    var $receiver = this.byName;
    var key = item.name;
    $receiver.put_xwzc9p$(key, item);
  };
  Stats$RCollection.prototype.getOrPut_2oey2o$ = defineInlineFunction('korge-js.com.soywiz.korge.stat.Stats.RCollection.getOrPut_2oey2o$', wrapFunction(function () {
    return function (name, callback) {
      var $receiver = this.byName;
      var tmp$;
      var value = $receiver.get_11rb$(name);
      if (value == null) {
        var $receiver_0 = callback();
        this.list.add_11rb$($receiver_0);
        var answer = $receiver_0;
        $receiver.put_xwzc9p$(name, answer);
        tmp$ = answer;
      }
       else {
        tmp$ = value;
      }
      return tmp$;
    };
  }));
  Stats$RCollection.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RCollection',
    interfaces: []
  };
  Stats.prototype.counter_61zpoe$ = function (name) {
    var $this = this.counters;
    var $receiver = $this.byName;
    var tmp$;
    var value = $receiver.get_11rb$(name);
    if (value == null) {
      var $receiver_0 = new Stats$Counter(name);
      $this.list.add_11rb$($receiver_0);
      var answer = $receiver_0;
      $receiver.put_xwzc9p$(name, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  Stats.prototype.value_61zpoe$ = function (name) {
    var $this = this.values;
    var $receiver = $this.byName;
    var tmp$;
    var value = $receiver.get_11rb$(name);
    if (value == null) {
      var $receiver_0 = new Stats$Value(this, name);
      $this.list.add_11rb$($receiver_0);
      var answer = $receiver_0;
      $receiver.put_xwzc9p$(name, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  Stats.prototype.dump = function () {
    var tmp$, tmp$_0;
    println('Counters:');
    tmp$ = this.counters.list.iterator();
    while (tmp$.hasNext()) {
      var counter = tmp$.next();
      println(' - ' + counter);
    }
    println('Values:');
    tmp$_0 = this.values.list.iterator();
    while (tmp$_0.hasNext()) {
      var value = tmp$_0.next();
      println(' - ' + value);
    }
  };
  Stats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stats',
    interfaces: []
  };
  function KorgeTest() {
    ViewsForTesting.call(this);
  }
  KorgeTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeTest',
    interfaces: [ViewsForTesting]
  };
  function ViewsForTesting(frameTime) {
    if (frameTime === void 0)
      frameTime = 10;
    this.frameTime = frameTime;
    this.time = L0;
    this.dispatcher = async_0.KorioDefaultDispatcher;
    this.timeProvider = new ViewsForTesting$timeProvider$ObjectLiteral(this);
    this.koruiEventDispatcher = EventDispatcher.Companion.invoke();
    this.viewsLog = new ViewsLog(this.dispatcher);
    Korge_getInstance().prepareViews_sqwktf$(this.views, this.koruiEventDispatcher, void 0, void 0, this.frameTime);
  }
  Object.defineProperty(ViewsForTesting.prototype, 'injector', {
    get: function () {
      return this.viewsLog.injector;
    }
  });
  Object.defineProperty(ViewsForTesting.prototype, 'ag', {
    get: function () {
      return this.viewsLog.ag;
    }
  });
  Object.defineProperty(ViewsForTesting.prototype, 'input', {
    get: function () {
      return this.viewsLog.input;
    }
  });
  Object.defineProperty(ViewsForTesting.prototype, 'views', {
    get: function () {
      return this.viewsLog.views;
    }
  });
  Object.defineProperty(ViewsForTesting.prototype, 'stats', {
    get: function () {
      return this.views.stats;
    }
  });
  ViewsForTesting.prototype.mouseMoveTo_z8e4lc$ = function (x_0, y_0, continuation_0, suspended) {
    var instance = new Coroutine$mouseMoveTo_z8e4lc$(this, x_0, y_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$mouseMoveTo_z8e4lc$($this, x_0, y_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$x = x_0;
    this.local$y = y_0;
  }
  Coroutine$mouseMoveTo_z8e4lc$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mouseMoveTo_z8e4lc$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mouseMoveTo_z8e4lc$.prototype.constructor = Coroutine$mouseMoveTo_z8e4lc$;
  Coroutine$mouseMoveTo_z8e4lc$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.koruiEventDispatcher;
            var event = new MouseEvent(MouseEvent$Type.MOVE, 0, numberToInt(this.local$x), numberToInt(this.local$y));
            $receiver.dispatch_dt5jzj$(getKClass(MouseEvent), event);
            this.$this.time = this.$this.time.add(Kotlin.Long.fromInt(this.$this.frameTime));
            this.$this.ag.onRender.invoke_11rb$(this.$this.ag);
            this.state_0 = 2;
            this.result_0 = delay(this.$this.frameTime * 2 | 0, this);
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
  ViewsForTesting.prototype.mouseDown = function (continuation_0, suspended) {
    var instance = new Coroutine$mouseDown(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$mouseDown($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$mouseDown.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mouseDown.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mouseDown.prototype.constructor = Coroutine$mouseDown;
  Coroutine$mouseDown.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.koruiEventDispatcher;
            var event = new MouseEvent(MouseEvent$Type.DOWN, 0, numberToInt(this.$this.input.mouse.x), numberToInt(this.$this.input.mouse.y), MouseButton.LEFT, 1);
            $receiver.dispatch_dt5jzj$(getKClass(MouseEvent), event);
            this.$this.time = this.$this.time.add(Kotlin.Long.fromInt(this.$this.frameTime));
            this.$this.ag.onRender.invoke_11rb$(this.$this.ag);
            this.state_0 = 2;
            this.result_0 = delay(this.$this.frameTime * 2 | 0, this);
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
  ViewsForTesting.prototype.mouseUp = function (continuation_0, suspended) {
    var instance = new Coroutine$mouseUp(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$mouseUp($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$mouseUp.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$mouseUp.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$mouseUp.prototype.constructor = Coroutine$mouseUp;
  Coroutine$mouseUp.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver = this.$this.koruiEventDispatcher;
            var event = new MouseEvent(MouseEvent$Type.UP, 0, numberToInt(this.$this.input.mouse.x), numberToInt(this.$this.input.mouse.y), MouseButton.LEFT, 0);
            $receiver.dispatch_dt5jzj$(getKClass(MouseEvent), event);
            this.$this.time = this.$this.time.add(Kotlin.Long.fromInt(this.$this.frameTime));
            this.$this.ag.onRender.invoke_11rb$(this.$this.ag);
            this.state_0 = 2;
            this.result_0 = delay(this.$this.frameTime * 2 | 0, this);
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
  ViewsForTesting.prototype.simulateClick_gohfi1$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$simulateClick_gohfi1$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$simulateClick_gohfi1$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$simulateClick_gohfi1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$simulateClick_gohfi1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$simulateClick_gohfi1$.prototype.constructor = Coroutine$simulateClick_gohfi1$;
  Coroutine$simulateClick_gohfi1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            get_mouse(this.local$$receiver).onClick.invoke_11rb$(get_mouse(this.local$$receiver));
            this.$this.ag.onRender.invoke_11rb$(this.$this.ag);
            this.state_0 = 2;
            this.result_0 = delayNextFrame(this);
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
  ViewsForTesting.prototype.simulateOver_gohfi1$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$simulateOver_gohfi1$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$simulateOver_gohfi1$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$simulateOver_gohfi1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$simulateOver_gohfi1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$simulateOver_gohfi1$.prototype.constructor = Coroutine$simulateOver_gohfi1$;
  Coroutine$simulateOver_gohfi1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            get_mouse(this.local$$receiver).onOver.invoke_11rb$(get_mouse(this.local$$receiver));
            this.$this.ag.onRender.invoke_11rb$(this.$this.ag);
            this.state_0 = 2;
            this.result_0 = delayNextFrame(this);
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
  ViewsForTesting.prototype.simulateOut_gohfi1$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$simulateOut_gohfi1$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$simulateOut_gohfi1$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$simulateOut_gohfi1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$simulateOut_gohfi1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$simulateOut_gohfi1$.prototype.constructor = Coroutine$simulateOut_gohfi1$;
  Coroutine$simulateOut_gohfi1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            get_mouse(this.local$$receiver).onOut.invoke_11rb$(get_mouse(this.local$$receiver));
            this.$this.ag.onRender.invoke_11rb$(this.$this.ag);
            this.state_0 = 2;
            this.result_0 = delayNextFrame(this);
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
  ViewsForTesting.prototype.isVisibleToUser_gohfi1$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$isVisibleToUser_gohfi1$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$isVisibleToUser_gohfi1$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$bounds = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$isVisibleToUser_gohfi1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$isVisibleToUser_gohfi1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$isVisibleToUser_gohfi1$.prototype.constructor = Coroutine$isVisibleToUser_gohfi1$;
  Coroutine$isVisibleToUser_gohfi1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (!this.local$$receiver.visible) {
              return false;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$$receiver.alpha <= 0.0) {
              return false;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$bounds = this.local$$receiver.getGlobalBounds_2da8yn$();
            if (this.local$bounds.area <= 0.0) {
              return false;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.$this.injector.get_wx4qjr$(getKClass(Module), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.result_0;
            var module_0 = this.result_0;
            var visibleBounds = Rectangle_init(0, 0, module_0.windowSize.width, module_0.windowSize.height);
            if (!this.local$bounds.intersects_2da8yn$(visibleBounds)) {
              return false;
            }
             else {
              this.state_0 = 6;
              continue;
            }

          case 6:
            return true;
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
  function ViewsForTesting$viewsTest$lambda$lambda(this$ViewsForTesting_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$ViewsForTesting$viewsTest$lambda$lambda(this$ViewsForTesting_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewsForTesting$viewsTest$lambda$lambda(this$ViewsForTesting_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ViewsForTesting = this$ViewsForTesting_0;
  }
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda.prototype.constructor = Coroutine$ViewsForTesting$viewsTest$lambda$lambda;
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$ViewsForTesting.time = this.local$this$ViewsForTesting.time.add(Kotlin.Long.fromInt(this.local$this$ViewsForTesting.frameTime));
            return this.local$this$ViewsForTesting.ag.onRender.invoke_11rb$(this.local$this$ViewsForTesting.ag), Unit;
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
  function ViewsForTesting$viewsTest$lambda$lambda$lambda(closure$block_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$ViewsForTesting$viewsTest$lambda$lambda$lambda(closure$block_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewsForTesting$viewsTest$lambda$lambda$lambda(closure$block_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
  }
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda$lambda.prototype.constructor = Coroutine$ViewsForTesting$viewsTest$lambda$lambda$lambda;
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$block(this);
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
  function ViewsForTesting$viewsTest$lambda$lambda_0(closure$block_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewsForTesting$viewsTest$lambda$lambda_0(closure$block_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewsForTesting$viewsTest$lambda$lambda_0(closure$block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$block = closure$block_0;
  }
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda_0.prototype.constructor = Coroutine$ViewsForTesting$viewsTest$lambda$lambda_0;
  Coroutine$ViewsForTesting$viewsTest$lambda$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = withTimeout(L10, TimeUnit.SECONDS, ViewsForTesting$viewsTest$lambda$lambda$lambda(this.local$closure$block), this);
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
  function ViewsForTesting$viewsTest$lambda(this$ViewsForTesting_0, closure$block_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$ViewsForTesting$viewsTest$lambda(this$ViewsForTesting_0, closure$block_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$ViewsForTesting$viewsTest$lambda(this$ViewsForTesting_0, closure$block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.local$this$ViewsForTesting = this$ViewsForTesting_0;
    this.local$closure$block = closure$block_0;
    this.local$el = void 0;
  }
  Coroutine$ViewsForTesting$viewsTest$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$ViewsForTesting$viewsTest$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$ViewsForTesting$viewsTest$lambda.prototype.constructor = Coroutine$ViewsForTesting$viewsTest$lambda;
  Coroutine$ViewsForTesting$viewsTest$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (util.OS.isNative) {
              return;
            }
             else {
              this.state_0 = 1;
              continue;
            }

          case 1:
            this.local$el = animationFrameLoop(this.local$this$ViewsForTesting.viewsLog.coroutineContext, ViewsForTesting$viewsTest$lambda$lambda(this.local$this$ViewsForTesting));
            this.exceptionState_0 = 5;
            var bb = asyncImmediately(this.local$this$ViewsForTesting.viewsLog.coroutineContext, void 0, ViewsForTesting$viewsTest$lambda$lambda_0(this.local$closure$block));
            this.state_0 = 2;
            this.result_0 = bb.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.exceptionState_0 = 7;
            this.finallyPath_0 = [3];
            this.state_0 = 6;
            this.$returnValue = this.result_0;
            continue;
          case 3:
            return this.$returnValue;
          case 4:
            return;
          case 5:
            this.finallyPath_0 = [7];
            this.state_0 = 6;
            continue;
          case 6:
            this.local$el.close();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 7:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 7) {
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
  ViewsForTesting.prototype.viewsTest_g2bo5h$ = function (block) {
    return suspendTest(this.viewsLog.coroutineContext, ViewsForTesting$viewsTest$lambda(this, block));
  };
  function ViewsForTesting$timeProvider$ObjectLiteral(this$ViewsForTesting) {
    this.this$ViewsForTesting = this$ViewsForTesting;
    TimeProvider.call(this);
  }
  ViewsForTesting$timeProvider$ObjectLiteral.prototype.currentTimeMillis = function () {
    return this.this$ViewsForTesting.time;
  };
  ViewsForTesting$timeProvider$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [TimeProvider]
  };
  ViewsForTesting.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewsForTesting',
    interfaces: []
  };
  function TiledMapData() {
    this.width = 0;
    this.height = 0;
    this.tilewidth = 0;
    this.tileheight = 0;
    this.allLayers = ArrayList_init_1();
    this.tilesets = ArrayList_init_1();
  }
  Object.defineProperty(TiledMapData.prototype, 'pixelWidth', {
    get: function () {
      return Kotlin.imul(this.width, this.tilewidth);
    }
  });
  Object.defineProperty(TiledMapData.prototype, 'pixelHeight', {
    get: function () {
      return Kotlin.imul(this.height, this.tileheight);
    }
  });
  Object.defineProperty(TiledMapData.prototype, 'patternLayers', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tiled.TiledMapData.get_patternLayers', wrapFunction(function () {
      var TiledMap$Layer$Patterns = _.com.soywiz.korge.tiled.TiledMap.Layer.Patterns;
      var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
      return function () {
        var $receiver = this.allLayers;
        var destination = ArrayList_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (Kotlin.isType(element, TiledMap$Layer$Patterns))
            destination.add_11rb$(element);
        }
        return destination;
      };
    }))
  });
  Object.defineProperty(TiledMapData.prototype, 'imageLayers', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tiled.TiledMapData.get_imageLayers', wrapFunction(function () {
      var TiledMap$Layer$Image = _.com.soywiz.korge.tiled.TiledMap.Layer.Image;
      var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
      return function () {
        var $receiver = this.allLayers;
        var destination = ArrayList_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (Kotlin.isType(element, TiledMap$Layer$Image))
            destination.add_11rb$(element);
        }
        return destination;
      };
    }))
  });
  Object.defineProperty(TiledMapData.prototype, 'objectLayers', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tiled.TiledMapData.get_objectLayers', wrapFunction(function () {
      var TiledMap$Layer$Objects = _.com.soywiz.korge.tiled.TiledMap.Layer.Objects;
      var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
      return function () {
        var $receiver = this.allLayers;
        var destination = ArrayList_init();
        var tmp$;
        tmp$ = $receiver.iterator();
        while (tmp$.hasNext()) {
          var element = tmp$.next();
          if (Kotlin.isType(element, TiledMap$Layer$Objects))
            destination.add_11rb$(element);
        }
        return destination;
      };
    }))
  });
  var mapNotNullTo$lambda = wrapFunction(function () {
    return function (closure$transform, closure$destination) {
      return function (element) {
        var tmp$;
        if ((tmp$ = closure$transform(element)) != null) {
          closure$destination.add_11rb$(tmp$);
        }
        return Unit;
      };
    };
  });
  TiledMapData.prototype.getObjectByName_61zpoe$ = function (name) {
    var $receiver = this.allLayers;
    var destination = ArrayList_init_1();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (Kotlin.isType(element, TiledMap$Layer$Objects))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_1();
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var element_0 = tmp$_0.next();
      var tmp$_0_0;
      if ((tmp$_0_0 = element_0.getByName_61zpoe$(name)) != null) {
        destination_0.add_11rb$(tmp$_0_0);
      }
    }
    return firstOrNull_0(destination_0);
  };
  Object.defineProperty(TiledMapData.prototype, 'maxGid', {
    get: function () {
      var tmp$;
      var $receiver = this.tilesets;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(item.firstgid + item.tilecount | 0);
      }
      return (tmp$ = max(destination)) != null ? tmp$ : 0;
    }
  });
  TiledMapData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TiledMapData',
    interfaces: []
  };
  function getPos($receiver, map) {
    var x = get_bounds($receiver).x / map.tilewidth | 0;
    var y = get_bounds($receiver).y / map.tileheight | 0;
    return new IVector2_init(numberToDouble(x), numberToDouble(y));
  }
  function getObjectPosByName($receiver, name) {
    var tmp$;
    tmp$ = $receiver != null ? $receiver.getObjectByName_61zpoe$(name) : null;
    if (tmp$ == null) {
      return null;
    }
    var obj = tmp$;
    return getPos(obj, $receiver);
  }
  function TileSetData(name, firstgid, tilewidth, tileheight, tilecount, columns, image, source, width, height) {
    this.name = name;
    this.firstgid = firstgid;
    this.tilewidth = tilewidth;
    this.tileheight = tileheight;
    this.tilecount = tilecount;
    this.columns = columns;
    this.image = image;
    this.source = source;
    this.width = width;
    this.height = height;
  }
  TileSetData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TileSetData',
    interfaces: []
  };
  TileSetData.prototype.component1 = function () {
    return this.name;
  };
  TileSetData.prototype.component2 = function () {
    return this.firstgid;
  };
  TileSetData.prototype.component3 = function () {
    return this.tilewidth;
  };
  TileSetData.prototype.component4 = function () {
    return this.tileheight;
  };
  TileSetData.prototype.component5 = function () {
    return this.tilecount;
  };
  TileSetData.prototype.component6 = function () {
    return this.columns;
  };
  TileSetData.prototype.component7 = function () {
    return this.image;
  };
  TileSetData.prototype.component8 = function () {
    return this.source;
  };
  TileSetData.prototype.component9 = function () {
    return this.width;
  };
  TileSetData.prototype.component10 = function () {
    return this.height;
  };
  TileSetData.prototype.copy_xq8d19$ = function (name, firstgid, tilewidth, tileheight, tilecount, columns, image, source, width, height) {
    return new TileSetData(name === void 0 ? this.name : name, firstgid === void 0 ? this.firstgid : firstgid, tilewidth === void 0 ? this.tilewidth : tilewidth, tileheight === void 0 ? this.tileheight : tileheight, tilecount === void 0 ? this.tilecount : tilecount, columns === void 0 ? this.columns : columns, image === void 0 ? this.image : image, source === void 0 ? this.source : source, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  TileSetData.prototype.toString = function () {
    return 'TileSetData(name=' + Kotlin.toString(this.name) + (', firstgid=' + Kotlin.toString(this.firstgid)) + (', tilewidth=' + Kotlin.toString(this.tilewidth)) + (', tileheight=' + Kotlin.toString(this.tileheight)) + (', tilecount=' + Kotlin.toString(this.tilecount)) + (', columns=' + Kotlin.toString(this.columns)) + (', image=' + Kotlin.toString(this.image)) + (', source=' + Kotlin.toString(this.source)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  TileSetData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.firstgid) | 0;
    result = result * 31 + Kotlin.hashCode(this.tilewidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.tileheight) | 0;
    result = result * 31 + Kotlin.hashCode(this.tilecount) | 0;
    result = result * 31 + Kotlin.hashCode(this.columns) | 0;
    result = result * 31 + Kotlin.hashCode(this.image) | 0;
    result = result * 31 + Kotlin.hashCode(this.source) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  TileSetData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.firstgid, other.firstgid) && Kotlin.equals(this.tilewidth, other.tilewidth) && Kotlin.equals(this.tileheight, other.tileheight) && Kotlin.equals(this.tilecount, other.tilecount) && Kotlin.equals(this.columns, other.columns) && Kotlin.equals(this.image, other.image) && Kotlin.equals(this.source, other.source) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function TiledMap(data, tilesets, tileset) {
    this.data = data;
    this.tilesets = tilesets;
    this.tileset = tileset;
  }
  Object.defineProperty(TiledMap.prototype, 'width', {
    get: function () {
      return this.data.width;
    }
  });
  Object.defineProperty(TiledMap.prototype, 'height', {
    get: function () {
      return this.data.height;
    }
  });
  Object.defineProperty(TiledMap.prototype, 'tilewidth', {
    get: function () {
      return this.data.tilewidth;
    }
  });
  Object.defineProperty(TiledMap.prototype, 'tileheight', {
    get: function () {
      return this.data.tileheight;
    }
  });
  Object.defineProperty(TiledMap.prototype, 'pixelWidth', {
    get: function () {
      return this.data.pixelWidth;
    }
  });
  Object.defineProperty(TiledMap.prototype, 'pixelHeight', {
    get: function () {
      return this.data.pixelHeight;
    }
  });
  Object.defineProperty(TiledMap.prototype, 'allLayers', {
    get: function () {
      return this.data.allLayers;
    }
  });
  Object.defineProperty(TiledMap.prototype, 'patternLayers', {
    get: function () {
      var $receiver = this.data.allLayers;
      var destination = ArrayList_init_1();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, TiledMap$Layer$Patterns))
          destination.add_11rb$(element);
      }
      return destination;
    }
  });
  Object.defineProperty(TiledMap.prototype, 'imageLayers', {
    get: function () {
      var $receiver = this.data.allLayers;
      var destination = ArrayList_init_1();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, TiledMap$Layer$Image))
          destination.add_11rb$(element);
      }
      return destination;
    }
  });
  Object.defineProperty(TiledMap.prototype, 'objectLayers', {
    get: function () {
      var $receiver = this.data.allLayers;
      var destination = ArrayList_init_1();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, TiledMap$Layer$Objects))
          destination.add_11rb$(element);
      }
      return destination;
    }
  });
  function TiledMap$TiledTileset(tileset, firstgid) {
    if (firstgid === void 0)
      firstgid = 0;
    this.tileset = tileset;
    this.firstgid = firstgid;
  }
  TiledMap$TiledTileset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TiledTileset',
    interfaces: []
  };
  function TiledMap$Layer() {
    this.name = '';
    this.visible = true;
    this.draworder = '';
    this.color = color.Colors.WHITE;
    this.opacity = 1.0;
    this.offsetx = 0.0;
    this.offsety = 0.0;
    this.properties = HashMap_init();
  }
  function TiledMap$Layer$Patterns() {
    TiledMap$Layer.call(this);
    this.map = new Bitmap32(0, 0);
  }
  TiledMap$Layer$Patterns.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Patterns',
    interfaces: [TiledMap$Layer]
  };
  function TiledMap$Layer$ObjectInfo(id, name, type, bounds, objprops) {
    this.id = id;
    this.name = name;
    this.type = type;
    this.bounds = bounds;
    this.objprops = objprops;
  }
  TiledMap$Layer$ObjectInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectInfo',
    interfaces: []
  };
  TiledMap$Layer$ObjectInfo.prototype.component1 = function () {
    return this.id;
  };
  TiledMap$Layer$ObjectInfo.prototype.component2 = function () {
    return this.name;
  };
  TiledMap$Layer$ObjectInfo.prototype.component3 = function () {
    return this.type;
  };
  TiledMap$Layer$ObjectInfo.prototype.component4 = function () {
    return this.bounds;
  };
  TiledMap$Layer$ObjectInfo.prototype.component5 = function () {
    return this.objprops;
  };
  TiledMap$Layer$ObjectInfo.prototype.copy_r6o6kv$ = function (id, name, type, bounds, objprops) {
    return new TiledMap$Layer$ObjectInfo(id === void 0 ? this.id : id, name === void 0 ? this.name : name, type === void 0 ? this.type : type, bounds === void 0 ? this.bounds : bounds, objprops === void 0 ? this.objprops : objprops);
  };
  TiledMap$Layer$ObjectInfo.prototype.toString = function () {
    return 'ObjectInfo(id=' + Kotlin.toString(this.id) + (', name=' + Kotlin.toString(this.name)) + (', type=' + Kotlin.toString(this.type)) + (', bounds=' + Kotlin.toString(this.bounds)) + (', objprops=' + Kotlin.toString(this.objprops)) + ')';
  };
  TiledMap$Layer$ObjectInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.bounds) | 0;
    result = result * 31 + Kotlin.hashCode(this.objprops) | 0;
    return result;
  };
  TiledMap$Layer$ObjectInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.name, other.name) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.bounds, other.bounds) && Kotlin.equals(this.objprops, other.objprops)))));
  };
  function TiledMap$Layer$Objects() {
    TiledMap$Layer.call(this);
    this.objects = ArrayList_init_1();
    this.objectsById_3gi93x$_0 = lazy(TiledMap$Layer$Objects$objectsById$lambda(this));
    this.objectsByName_evrlkj$_0 = lazy(TiledMap$Layer$Objects$objectsByName$lambda(this));
  }
  function TiledMap$Layer$Objects$Object() {
  }
  TiledMap$Layer$Objects$Object.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Object',
    interfaces: []
  };
  function TiledMap$Layer$Objects$Poly() {
  }
  TiledMap$Layer$Objects$Poly.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Poly',
    interfaces: [TiledMap$Layer$Objects$Object]
  };
  function TiledMap$Layer$Objects$Rect(info) {
    this.info_pcr9ch$_0 = info;
  }
  Object.defineProperty(TiledMap$Layer$Objects$Rect.prototype, 'info', {
    get: function () {
      return this.info_pcr9ch$_0;
    }
  });
  TiledMap$Layer$Objects$Rect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rect',
    interfaces: [TiledMap$Layer$Objects$Object]
  };
  TiledMap$Layer$Objects$Rect.prototype.component1 = function () {
    return this.info;
  };
  TiledMap$Layer$Objects$Rect.prototype.copy_dgvk9q$ = function (info) {
    return new TiledMap$Layer$Objects$Rect(info === void 0 ? this.info : info);
  };
  TiledMap$Layer$Objects$Rect.prototype.toString = function () {
    return 'Rect(info=' + Kotlin.toString(this.info) + ')';
  };
  TiledMap$Layer$Objects$Rect.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    return result;
  };
  TiledMap$Layer$Objects$Rect.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.info, other.info))));
  };
  function TiledMap$Layer$Objects$Ellipse(info) {
    this.info_iux9wz$_0 = info;
  }
  Object.defineProperty(TiledMap$Layer$Objects$Ellipse.prototype, 'info', {
    get: function () {
      return this.info_iux9wz$_0;
    }
  });
  TiledMap$Layer$Objects$Ellipse.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Ellipse',
    interfaces: [TiledMap$Layer$Objects$Object]
  };
  TiledMap$Layer$Objects$Ellipse.prototype.component1 = function () {
    return this.info;
  };
  TiledMap$Layer$Objects$Ellipse.prototype.copy_dgvk9q$ = function (info) {
    return new TiledMap$Layer$Objects$Ellipse(info === void 0 ? this.info : info);
  };
  TiledMap$Layer$Objects$Ellipse.prototype.toString = function () {
    return 'Ellipse(info=' + Kotlin.toString(this.info) + ')';
  };
  TiledMap$Layer$Objects$Ellipse.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    return result;
  };
  TiledMap$Layer$Objects$Ellipse.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.info, other.info))));
  };
  function TiledMap$Layer$Objects$Polyline(info, points) {
    this.info_t5ghar$_0 = info;
    this.points_3ptevs$_0 = points;
  }
  Object.defineProperty(TiledMap$Layer$Objects$Polyline.prototype, 'info', {
    get: function () {
      return this.info_t5ghar$_0;
    }
  });
  Object.defineProperty(TiledMap$Layer$Objects$Polyline.prototype, 'points', {
    get: function () {
      return this.points_3ptevs$_0;
    }
  });
  TiledMap$Layer$Objects$Polyline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Polyline',
    interfaces: [TiledMap$Layer$Objects$Poly]
  };
  TiledMap$Layer$Objects$Polyline.prototype.component1 = function () {
    return this.info;
  };
  TiledMap$Layer$Objects$Polyline.prototype.component2 = function () {
    return this.points;
  };
  TiledMap$Layer$Objects$Polyline.prototype.copy_f53wbc$ = function (info, points) {
    return new TiledMap$Layer$Objects$Polyline(info === void 0 ? this.info : info, points === void 0 ? this.points : points);
  };
  TiledMap$Layer$Objects$Polyline.prototype.toString = function () {
    return 'Polyline(info=' + Kotlin.toString(this.info) + (', points=' + Kotlin.toString(this.points)) + ')';
  };
  TiledMap$Layer$Objects$Polyline.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    result = result * 31 + Kotlin.hashCode(this.points) | 0;
    return result;
  };
  TiledMap$Layer$Objects$Polyline.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.info, other.info) && Kotlin.equals(this.points, other.points)))));
  };
  function TiledMap$Layer$Objects$Polygon(info, points) {
    this.info_pxyzmx$_0 = info;
    this.points_w8vlzo$_0 = points;
  }
  Object.defineProperty(TiledMap$Layer$Objects$Polygon.prototype, 'info', {
    get: function () {
      return this.info_pxyzmx$_0;
    }
  });
  Object.defineProperty(TiledMap$Layer$Objects$Polygon.prototype, 'points', {
    get: function () {
      return this.points_w8vlzo$_0;
    }
  });
  TiledMap$Layer$Objects$Polygon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Polygon',
    interfaces: [TiledMap$Layer$Objects$Poly]
  };
  TiledMap$Layer$Objects$Polygon.prototype.component1 = function () {
    return this.info;
  };
  TiledMap$Layer$Objects$Polygon.prototype.component2 = function () {
    return this.points;
  };
  TiledMap$Layer$Objects$Polygon.prototype.copy_f53wbc$ = function (info, points) {
    return new TiledMap$Layer$Objects$Polygon(info === void 0 ? this.info : info, points === void 0 ? this.points : points);
  };
  TiledMap$Layer$Objects$Polygon.prototype.toString = function () {
    return 'Polygon(info=' + Kotlin.toString(this.info) + (', points=' + Kotlin.toString(this.points)) + ')';
  };
  TiledMap$Layer$Objects$Polygon.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.info) | 0;
    result = result * 31 + Kotlin.hashCode(this.points) | 0;
    return result;
  };
  TiledMap$Layer$Objects$Polygon.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.info, other.info) && Kotlin.equals(this.points, other.points)))));
  };
  Object.defineProperty(TiledMap$Layer$Objects.prototype, 'objectsById', {
    get: function () {
      return this.objectsById_3gi93x$_0.value;
    }
  });
  Object.defineProperty(TiledMap$Layer$Objects.prototype, 'objectsByName', {
    get: function () {
      return this.objectsByName_evrlkj$_0.value;
    }
  });
  TiledMap$Layer$Objects.prototype.getById_za3lpa$ = function (id) {
    return this.objectsById.get_11rb$(id);
  };
  TiledMap$Layer$Objects.prototype.getByName_61zpoe$ = function (name) {
    return this.objectsByName.get_11rb$(name);
  };
  function TiledMap$Layer$Objects$objectsById$lambda(this$Objects) {
    return function () {
      var $receiver = this$Objects.objects;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
      var destination = LinkedHashMap_init_0(capacity);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        destination.put_xwzc9p$(get_id(element), element);
      }
      return destination;
    };
  }
  function TiledMap$Layer$Objects$objectsByName$lambda(this$Objects) {
    return function () {
      var $receiver = this$Objects.objects;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
      var destination = LinkedHashMap_init_0(capacity);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        destination.put_xwzc9p$(get_name(element), element);
      }
      return destination;
    };
  }
  TiledMap$Layer$Objects.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Objects',
    interfaces: [TiledMap$Layer]
  };
  function TiledMap$Layer$Image() {
    TiledMap$Layer.call(this);
    this.width = 0;
    this.height = 0;
    this.source = '';
    this.image = new Bitmap32(0, 0);
  }
  TiledMap$Layer$Image.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Image',
    interfaces: [TiledMap$Layer]
  };
  TiledMap$Layer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Layer',
    interfaces: []
  };
  TiledMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TiledMap',
    interfaces: []
  };
  function get_id($receiver) {
    return $receiver.info.id;
  }
  function get_name($receiver) {
    return $receiver.info.name;
  }
  function get_bounds($receiver) {
    return $receiver.info.bounds;
  }
  function get_objprops($receiver) {
    return $receiver.info.objprops;
  }
  var get_patterns = defineInlineFunction('korge-js.com.soywiz.korge.tiled.get_patterns_b7bx3x$', wrapFunction(function () {
    var TiledMap$Layer$Patterns = _.com.soywiz.korge.tiled.TiledMap.Layer.Patterns;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    return function ($receiver) {
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, TiledMap$Layer$Patterns))
          destination.add_11rb$(element);
      }
      return destination;
    };
  }));
  var get_images = defineInlineFunction('korge-js.com.soywiz.korge.tiled.get_images_b7bx3x$', wrapFunction(function () {
    var TiledMap$Layer$Image = _.com.soywiz.korge.tiled.TiledMap.Layer.Image;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    return function ($receiver) {
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, TiledMap$Layer$Image))
          destination.add_11rb$(element);
      }
      return destination;
    };
  }));
  var get_objects = defineInlineFunction('korge-js.com.soywiz.korge.tiled.get_objects_b7bx3x$', wrapFunction(function () {
    var TiledMap$Layer$Objects = _.com.soywiz.korge.tiled.TiledMap.Layer.Objects;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    return function ($receiver) {
      var destination = ArrayList_init();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (Kotlin.isType(element, TiledMap$Layer$Objects))
          destination.add_11rb$(element);
      }
      return destination;
    };
  }));
  var spaces;
  var tilemapLog;
  function TiledFile(name) {
    this.name = name;
  }
  TiledFile.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TiledFile',
    interfaces: []
  };
  function parseProperties($receiver) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var out = LinkedHashMap_init();
    tmp$ = $receiver.children_61zpoe$('property').iterator();
    while (tmp$.hasNext()) {
      var property = tmp$.next();
      var pname = property.str_puj7f4$('name');
      var rawValue = property.hasAttribute_61zpoe$('value') ? property.str_puj7f4$('value') : property.text;
      var type = property.str_puj7f4$('type', 'text');
      switch (type) {
        case 'bool':
          tmp$_2 = equals(rawValue, 'true');
          break;
        case 'color':
          tmp$_2 = color.Colors.get_61zpoe$(rawValue);
          break;
        case 'text':
          tmp$_2 = rawValue;
          break;
        case 'int':
          tmp$_2 = (tmp$_0 = toIntOrNull(rawValue)) != null ? tmp$_0 : 0;
          break;
        case 'float':
          tmp$_2 = (tmp$_1 = toDoubleOrNull(rawValue)) != null ? tmp$_1 : 0.0;
          break;
        case 'file':
          tmp$_2 = new TiledFile(pname);
          break;
        default:tmp$_2 = rawValue;
          break;
      }
      var pvalue = tmp$_2;
      out.put_xwzc9p$(pname, pvalue);
    }
    return out;
  }
  var RectangleInt$RectangleInt$Immutable_init = $module$korma_js.com.soywiz.korma.geom.RectangleInt.Immutable;
  function readTiledMapData($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$readTiledMapData($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readTiledMapData($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_16 = void 0;
    this.local$tmp$_17 = void 0;
    this.local$folder = void 0;
    this.local$tiledMap = void 0;
    this.local$firstgid = void 0;
    this.local$layer = void 0;
    this.local$width = void 0;
    this.local$height = void 0;
    this.local$count = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readTiledMapData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readTiledMapData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readTiledMapData.prototype.constructor = Coroutine$readTiledMapData;
  Coroutine$readTiledMapData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
            var tmp$_14, tmp$_15, tmp$_16;
            var log = tilemapLog;
            var file = this.local$$receiver;
            this.local$folder = this.local$$receiver.parent.jail();
            this.local$tiledMap = new TiledMapData();
            this.state_0 = 2;
            this.result_0 = readXml(file, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var mapXml = this.result_0;
            if (!equals(mapXml.nameLC, 'map')) {
              throw IllegalStateException_init_0('Not a TiledMap XML TMX file starting with <map>'.toString());
            }

            this.local$tiledMap.width = (tmp$ = mapXml.getInt_61zpoe$('width')) != null ? tmp$ : 0;
            this.local$tiledMap.height = (tmp$_0 = mapXml.getInt_61zpoe$('height')) != null ? tmp$_0 : 0;
            this.local$tiledMap.tilewidth = (tmp$_1 = mapXml.getInt_61zpoe$('tilewidth')) != null ? tmp$_1 : 32;
            this.local$tiledMap.tileheight = (tmp$_2 = mapXml.getInt_61zpoe$('tileheight')) != null ? tmp$_2 : 32;
            var $this = tilemapLog;
            var level = Logger$Level.TRACE;
            if ($this.isEnabled_fs4ikx$(level)) {
              $this.actualLog_pwm3k3$(level, 'tilemap: width=' + this.local$tiledMap.width + ', height=' + this.local$tiledMap.height + ', tilewidth=' + this.local$tiledMap.tilewidth + ', tileheight=' + this.local$tiledMap.tileheight);
            }

            var $this_0 = tilemapLog;
            var level_0 = Logger$Level.TRACE;
            if ($this_0.isEnabled_fs4ikx$(level_0)) {
              $this_0.actualLog_pwm3k3$(level_0, 'tilemap: ' + this.local$tiledMap);
            }

            var elements = mapXml.allChildrenNoComments;
            var $this_1 = tilemapLog;
            var level_1 = Logger$Level.TRACE;
            if ($this_1.isEnabled_fs4ikx$(level_1)) {
              $this_1.actualLog_pwm3k3$(level_1, 'tilemap: elements=' + elements.size);
            }

            var $this_2 = tilemapLog;
            var level_2 = Logger$Level.TRACE;
            if ($this_2.isEnabled_fs4ikx$(level_2)) {
              $this_2.actualLog_pwm3k3$(level_2, 'tilemap: elements=' + elements);
            }

            var maxGid = 1;
            this.local$tmp$_3 = elements.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$_3.hasNext()) {
              this.state_0 = 15;
              continue;
            }

            var element = this.local$tmp$_3.next();
            var elementName = element.nameLC;
            if (equals(elementName, 'tileset')) {
              var $this_3 = tilemapLog;
              var level_3 = Logger$Level.TRACE;
              if ($this_3.isEnabled_fs4ikx$(level_3)) {
                $this_3.actualLog_pwm3k3$(level_3, 'tileset');
              }
              this.local$firstgid = element.int_bm4lxs$('firstgid');
              if (element.hasAttribute_61zpoe$('source')) {
                this.state_0 = 12;
                this.result_0 = readXml(this.local$folder.get_61zpoe$(element.str_puj7f4$('source')), this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.local$tmp$_4 = element;
                this.state_0 = 13;
                continue;
              }
            }
             else {
              if (equals(elementName, 'layer') || equals(elementName, 'objectgroup') || equals(elementName, 'imagelayer')) {
                var $this_4 = tilemapLog;
                var level_4 = Logger$Level.TRACE;
                if ($this_4.isEnabled_fs4ikx$(level_4)) {
                  $this_4.actualLog_pwm3k3$(level_4, 'layer:' + elementName);
                }
                switch (element.nameLC) {
                  case 'layer':
                    tmp$_6 = new TiledMap$Layer$Patterns();
                    break;
                  case 'objectgroup':
                    tmp$_6 = new TiledMap$Layer$Objects();
                    break;
                  case 'imagelayer':
                    tmp$_6 = new TiledMap$Layer$Image();
                    break;
                  default:tmp$_6 = error.invalidOp;
                    break;
                }
                this.local$layer = tmp$_6;
                this.local$tiledMap.allLayers.add_11rb$(this.local$layer);
                this.local$layer.name = element.str_puj7f4$('name');
                this.local$layer.visible = element.int_bm4lxs$('visible', 1) !== 0;
                this.local$layer.draworder = element.str_puj7f4$('draworder', '');
                this.local$layer.color = color.Colors.get_61zpoe$(element.str_puj7f4$('color', '#ffffff'));
                this.local$layer.opacity = element.double_io5o9c$('opacity', 1.0);
                this.local$layer.offsetx = element.double_io5o9c$('offsetx', 0.0);
                this.local$layer.offsety = element.double_io5o9c$('offsety', 0.0);
                var properties = (tmp$_7 = element.child_61zpoe$('properties')) != null ? parseProperties(tmp$_7) : null;
                if (properties != null) {
                  this.local$layer.properties.putAll_a2k3zr$(properties);
                }
                if (Kotlin.isType(this.local$layer, TiledMap$Layer$Patterns)) {
                  this.local$width = element.int_bm4lxs$('width');
                  this.local$height = element.int_bm4lxs$('height');
                  this.local$count = Kotlin.imul(this.local$width, this.local$height);
                  var data = element.child_61zpoe$('data');
                  var encoding = (tmp$_8 = data != null ? data.str_puj7f4$('encoding', '') : null) != null ? tmp$_8 : '';
                  var compression = (tmp$_9 = data != null ? data.str_puj7f4$('compression', '') : null) != null ? tmp$_9 : '';
                  if (equals(encoding, '') || equals(encoding, 'xml')) {
                    var tmp$_17;
                    if ((tmp$_10 = data != null ? data.children_61zpoe$('tile') : null) != null) {
                      var destination = ArrayList_init_0(collectionSizeOrDefault(tmp$_10, 10));
                      var tmp$_18;
                      tmp$_18 = tmp$_10.iterator();
                      while (tmp$_18.hasNext()) {
                        var item = tmp$_18.next();
                        destination.add_11rb$(item.int_bm4lxs$('gid'));
                      }
                      tmp$_17 = destination;
                    }
                     else
                      tmp$_17 = null;
                    var items = (tmp$_11 = tmp$_17) != null ? tmp$_11 : emptyList();
                    this.local$tmp$_17 = toIntArray(items);
                    this.state_0 = 9;
                    continue;
                  }
                   else {
                    if (equals(encoding, 'csv')) {
                      var content = (tmp$_12 = data != null ? data.text : null) != null ? tmp$_12 : '';
                      var $receiver = split(spaces.replace_x2uqeu$(content, ''), Kotlin.charArrayOf(44));
                      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
                      var tmp$_19;
                      tmp$_19 = $receiver.iterator();
                      while (tmp$_19.hasNext()) {
                        var item_0 = tmp$_19.next();
                        destination_0.add_11rb$(toInt(item_0));
                      }
                      var items_0 = destination_0;
                      this.local$tmp$_17 = toIntArray(items_0);
                      this.state_0 = 8;
                      continue;
                    }
                     else {
                      if (equals(encoding, 'base64')) {
                        var $receiver_0 = (tmp$_13 = data != null ? data.text : null) != null ? tmp$_13 : '';
                        var tmp$_20;
                        var base64Content = trim(Kotlin.isCharSequence(tmp$_20 = $receiver_0) ? tmp$_20 : throwCCE()).toString();
                        var rawContent = crypto.Base64.decode_61zpoe$(base64Content);
                        switch (compression) {
                          case '':
                            this.local$tmp$_16 = rawContent;
                            this.state_0 = 6;
                            continue;
                          case 'gzip':
                            this.state_0 = 5;
                            this.result_0 = uncompress(rawContent, deflate.GZIP, this);
                            if (this.result_0 === COROUTINE_SUSPENDED)
                              return COROUTINE_SUSPENDED;
                            continue;
                          case 'zlib':
                            this.state_0 = 4;
                            this.result_0 = uncompress(rawContent, deflate.ZLib, this);
                            if (this.result_0 === COROUTINE_SUSPENDED)
                              return COROUTINE_SUSPENDED;
                            continue;
                          default:this.local$tmp$_16 = error.invalidOp;
                            this.state_0 = 6;
                            continue;
                        }
                      }
                       else {
                        this.local$tmp$_17 = invalidOp("Unhandled encoding '" + encoding + "'");
                        this.state_0 = 7;
                        continue;
                      }
                    }
                  }
                }
                 else {
                  if (Kotlin.isType(this.local$layer, TiledMap$Layer$Image)) {
                    tmp$_14 = element.children_61zpoe$('image').iterator();
                    while (tmp$_14.hasNext()) {
                      var image = tmp$_14.next();
                      this.local$layer.source = image.str_puj7f4$('source');
                      this.local$layer.width = image.int_bm4lxs$('width');
                      this.local$layer.height = image.int_bm4lxs$('height');
                    }
                  }
                   else if (Kotlin.isType(this.local$layer, TiledMap$Layer$Objects)) {
                    tmp$_15 = element.children_61zpoe$('object').iterator();
                    while (tmp$_15.hasNext()) {
                      var obj = tmp$_15.next();
                      var id = obj.int_bm4lxs$('id');
                      var name = obj.str_puj7f4$('name');
                      var type = obj.str_puj7f4$('type');
                      var x = obj.int_bm4lxs$('x');
                      var y = obj.int_bm4lxs$('y');
                      var width = obj.int_bm4lxs$('width');
                      var height = obj.int_bm4lxs$('height');
                      var bounds = new RectangleInt$RectangleInt$Immutable_init(numberToInt(x), numberToInt(y), numberToInt(width), numberToInt(height));
                      var rkind = RKind$RECT_getInstance();
                      var points = emptyList();
                      var objprops = LinkedHashMap_init();
                      tmp$_16 = obj.allNodeChildren.iterator();
                      while (tmp$_16.hasNext()) {
                        var kind = tmp$_16.next();
                        var kindType = kind.nameLC;
                        if (equals(kindType, 'ellipse'))
                          rkind = RKind$ELLIPSE_getInstance();
                        else if (equals(kindType, 'polyline') || equals(kindType, 'polygon')) {
                          var pointsStr = kind.str_puj7f4$('points');
                          var $receiver_1 = spaces.split_905azu$(pointsStr, 0);
                          var destination_1 = ArrayList_init_0(collectionSizeOrDefault($receiver_1, 10));
                          var tmp$_21;
                          tmp$_21 = $receiver_1.iterator();
                          while (tmp$_21.hasNext()) {
                            var item_1 = tmp$_21.next();
                            var tmp$_22 = destination_1.add_11rb$;
                            var $receiver_2 = split(item_1, Kotlin.charArrayOf(44));
                            var destination_2 = ArrayList_init_0(collectionSizeOrDefault($receiver_2, 10));
                            var tmp$_23;
                            tmp$_23 = $receiver_2.iterator();
                            while (tmp$_23.hasNext()) {
                              var item_2 = tmp$_23.next();
                              var tmp$_24;
                              var tmp$_25;
                              destination_2.add_11rb$((tmp$_24 = toDoubleOrNull(trim(Kotlin.isCharSequence(tmp$_25 = item_2) ? tmp$_25 : throwCCE()).toString())) != null ? tmp$_24 : 0.0);
                            }
                            var parts = destination_2;
                            var x_0 = parts.get_za3lpa$(0);
                            var y_0 = parts.get_za3lpa$(1);
                            tmp$_22.call(destination_1, new IVector2_init(numberToDouble(x_0), numberToDouble(y_0)));
                          }
                          points = destination_1;
                          rkind = equals(kindType, 'polyline') ? RKind$POLYLINE_getInstance() : RKind$POLYGON_getInstance();
                        }
                         else if (equals(kindType, 'properties'))
                          objprops = parseProperties(kind);
                        else
                          invalidOp("Invalid object kind '" + kindType + "'");
                      }
                      var info = new TiledMap$Layer$ObjectInfo(id, name, type, bounds, objprops);
                      var tmp$_26;
                      tmp$_26 = this.local$layer.objects;
                      var tmp$_27;
                      switch (rkind.name) {
                        case 'RECT':
                          tmp$_27 = new TiledMap$Layer$Objects$Rect(info);
                          break;
                        case 'ELLIPSE':
                          tmp$_27 = new TiledMap$Layer$Objects$Ellipse(info);
                          break;
                        case 'POLYLINE':
                          tmp$_27 = new TiledMap$Layer$Objects$Polyline(info, points);
                          break;
                        case 'POLYGON':
                          tmp$_27 = new TiledMap$Layer$Objects$Polygon(info, points);
                          break;
                        default:tmp$_27 = Kotlin.noWhenBranchMatched();
                          break;
                      }
                      var element_0 = tmp$_27;
                      tmp$_26.add_11rb$(element_0);
                    }
                  }
                  this.state_0 = 10;
                  continue;
                }
              }
               else {
                this.state_0 = 11;
                continue;
              }
            }

          case 4:
            this.local$tmp$_16 = this.result_0;
            this.state_0 = 6;
            continue;
          case 5:
            this.local$tmp$_16 = this.result_0;
            this.state_0 = 6;
            continue;
          case 6:
            var content_0 = this.local$tmp$_16;
            this.local$tmp$_17 = readIntArray_le(content_0, 0, this.local$count);
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.state_0 = 9;
            continue;
          case 9:
            var tilesArray = this.local$tmp$_17;
            if (tilesArray.length !== this.local$count)
              invalidOp('');
            this.local$layer.map = new Bitmap32(this.local$width, this.local$height, new RgbaArray(tilesArray));
            this.state_0 = 10;
            continue;
          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            this.state_0 = 14;
            continue;
          case 12:
            this.local$tmp$_4 = this.result_0;
            this.state_0 = 13;
            continue;
          case 13:
            var element_1 = this.local$tmp$_4;
            var name_0 = element_1.str_puj7f4$('name');
            var tilewidth = element_1.int_bm4lxs$('tilewidth');
            var tileheight = element_1.int_bm4lxs$('tileheight');
            var tilecount = element_1.int_bm4lxs$('tilecount', -1);
            var columns = element_1.int_bm4lxs$('columns', -1);
            var image_0 = element_1.child_61zpoe$('image');
            var source = (tmp$_3 = image_0 != null ? image_0.str_puj7f4$('source') : null) != null ? tmp$_3 : '';
            var width_0 = (tmp$_4 = image_0 != null ? image_0.int_bm4lxs$('width', 0) : null) != null ? tmp$_4 : 0;
            var height_0 = (tmp$_5 = image_0 != null ? image_0.int_bm4lxs$('height', 0) : null) != null ? tmp$_5 : 0;
            var $receiver_3 = this.local$tiledMap.tilesets;
            var element_2 = new TileSetData(name_0, this.local$firstgid, tilewidth, tileheight, tilecount, columns, image_0, source, width_0, height_0);
            $receiver_3.add_11rb$(element_2);
            this.state_0 = 14;
            continue;
          case 14:
            this.state_0 = 3;
            continue;
          case 15:
            return this.local$tiledMap;
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
  function readTiledMap($receiver_0, views_0, hasTransparentColor_0, transparentColor_0, createBorder_0, continuation_0, suspended) {
    var instance = new Coroutine$readTiledMap($receiver_0, views_0, hasTransparentColor_0, transparentColor_0, createBorder_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readTiledMap($receiver_0, views_0, hasTransparentColor_0, transparentColor_0, createBorder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$folder = void 0;
    this.local$data = void 0;
    this.local$combinedTileset = void 0;
    this.local$layer = void 0;
    this.local$tiledTilesets = void 0;
    this.local$tileset = void 0;
    this.local$$receiver = $receiver_0;
    this.local$views = views_0;
    this.local$hasTransparentColor = hasTransparentColor_0;
    this.local$transparentColor = transparentColor_0;
    this.local$createBorder = createBorder_0;
  }
  Coroutine$readTiledMap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readTiledMap.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readTiledMap.prototype.constructor = Coroutine$readTiledMap;
  Coroutine$readTiledMap.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$hasTransparentColor === void 0)
              this.local$hasTransparentColor = false;
            if (this.local$transparentColor === void 0)
              this.local$transparentColor = color.Colors.FUCHSIA;
            if (this.local$createBorder === void 0)
              this.local$createBorder = 1;
            var tmp$, tmp$_0, tmp$_1, tmp$_2;
            this.local$folder = this.local$$receiver.parent.jail();
            this.state_0 = 2;
            this.result_0 = readTiledMapData(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$data = this.result_0;
            this.local$combinedTileset = Kotlin.newArray(this.local$data.maxGid + 1 | 0, null);
            var $receiver = this.local$data.allLayers;
            var destination = ArrayList_init_1();
            var tmp$_3;
            tmp$_3 = $receiver.iterator();
            while (tmp$_3.hasNext()) {
              var element = tmp$_3.next();
              if (Kotlin.isType(element, TiledMap$Layer$Image))
                destination.add_11rb$(element);
            }

            this.local$tmp$ = destination.iterator();
            this.state_0 = 3;
            continue;
          case 3:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 5;
              continue;
            }

            this.local$layer = this.local$tmp$.next();
            this.state_0 = 4;
            this.result_0 = readBitmapOptimized(this.local$folder.get_61zpoe$(this.local$layer.source), this.local$views.imageFormats, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$layer.image = this.result_0;
            this.state_0 = 3;
            continue;
          case 5:
            this.local$tiledTilesets = ArrayList_init_1();
            this.local$tmp$_0 = this.local$data.tilesets.iterator();
            this.state_0 = 6;
            continue;
          case 6:
            if (!this.local$tmp$_0.hasNext()) {
              this.state_0 = 8;
              continue;
            }

            this.local$tileset = this.local$tmp$_0.next();
            this.state_0 = 7;
            this.result_0 = readBitmapOptimized(this.local$folder.get_61zpoe$(this.local$tileset.source), this.local$views.imageFormats, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            var bmp = this.result_0;
            if (this.local$hasTransparentColor) {
              bmp = bmp.toBMP32();
              tmp$ = bmp.area;
              for (var n = 0; n < tmp$; n++) {
                if ((tmp$_0 = bmp.data.get_za3lpa$(n)) != null ? tmp$_0.equals(this.local$transparentColor) : null)
                  bmp.data.set_vlvk8p$(n, color.Colors.TRANSPARENT_BLACK);
              }
            }

            if (this.local$createBorder > 0) {
              bmp = bmp.toBMP32();
              var slices = TileSet$Companion_getInstance().extractBitmaps_ptg1et$(bmp, this.local$tileset.tilewidth, this.local$tileset.tileheight, this.local$tileset.columns, this.local$tileset.tilecount);
              tmp$_1 = TileSet$Companion_getInstance().fromBitmaps_m8cj3d$(this.local$tileset.tilewidth, this.local$tileset.tileheight, slices, this.local$createBorder, false);
            }
             else {
              tmp$_1 = TileSet$Companion_getInstance().invoke_le1w3n$(slice(bmp), this.local$tileset.tilewidth, this.local$tileset.tileheight, this.local$tileset.columns, this.local$tileset.tilecount);
            }

            var ptileset = tmp$_1;
            var tiledTileset = new TiledMap$TiledTileset(ptileset, this.local$tileset.firstgid);
            this.local$tiledTilesets.add_11rb$(tiledTileset);
            var $this = tilemapLog;
            var level = Logger$Level.TRACE;
            if ($this.isEnabled_fs4ikx$(level)) {
              $this.actualLog_pwm3k3$(level, 'tileset:' + tiledTileset);
            }

            tmp$_2 = ptileset.textures.size;
            for (var n_0 = 0; n_0 < tmp$_2; n_0++) {
              this.local$combinedTileset[this.local$tileset.firstgid + n_0 | 0] = ptileset.textures.get_za3lpa$(n_0);
            }

            this.state_0 = 6;
            continue;
          case 8:
            return new TiledMap(this.local$data, this.local$tiledTilesets, new TileSet(toList(this.local$combinedTileset), this.local$data.tilewidth, this.local$data.tileheight));
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
  function RKind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RKind_initFields() {
    RKind_initFields = function () {
    };
    RKind$RECT_instance = new RKind('RECT', 0);
    RKind$ELLIPSE_instance = new RKind('ELLIPSE', 1);
    RKind$POLYLINE_instance = new RKind('POLYLINE', 2);
    RKind$POLYGON_instance = new RKind('POLYGON', 3);
  }
  var RKind$RECT_instance;
  function RKind$RECT_getInstance() {
    RKind_initFields();
    return RKind$RECT_instance;
  }
  var RKind$ELLIPSE_instance;
  function RKind$ELLIPSE_getInstance() {
    RKind_initFields();
    return RKind$ELLIPSE_instance;
  }
  var RKind$POLYLINE_instance;
  function RKind$POLYLINE_getInstance() {
    RKind_initFields();
    return RKind$POLYLINE_instance;
  }
  var RKind$POLYGON_instance;
  function RKind$POLYGON_getInstance() {
    RKind_initFields();
    return RKind$POLYGON_instance;
  }
  RKind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RKind',
    interfaces: [Enum]
  };
  function RKind$values() {
    return [RKind$RECT_getInstance(), RKind$ELLIPSE_getInstance(), RKind$POLYLINE_getInstance(), RKind$POLYGON_getInstance()];
  }
  RKind.values = RKind$values;
  function RKind$valueOf(name) {
    switch (name) {
      case 'RECT':
        return RKind$RECT_getInstance();
      case 'ELLIPSE':
        return RKind$ELLIPSE_getInstance();
      case 'POLYLINE':
        return RKind$POLYLINE_getInstance();
      case 'POLYGON':
        return RKind$POLYGON_getInstance();
      default:throwISE('No enum constant com.soywiz.korge.tiled.RKind.' + name);
    }
  }
  RKind.valueOf_61zpoe$ = RKind$valueOf;
  var tiledMapView = defineInlineFunction('korge-js.com.soywiz.korge.tiled.tiledMapView_anlgk5$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var TiledMapView_init = _.com.soywiz.korge.tiled.TiledMapView;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    function tiledMapView$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, tiledMap, callback) {
      if (callback === void 0)
        callback = tiledMapView$lambda;
      var $receiver_0 = addTo(new TiledMapView_init(tiledMap), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function TiledMapView(tiledMap) {
    Container.call(this);
    this.tiledMap = tiledMap;
    var index = 0;
    for (var tmp$ = this.tiledMap.allLayers.iterator(); tmp$.hasNext(); ++index) {
      var layer = tmp$.next();
      if (Kotlin.isType(layer, TiledMap$Layer$Patterns)) {
        var $receiver = new TileMap(layer.map, this.tiledMap.tileset);
        var tmp$_0;
        $receiver.name = (tmp$_0 = layer.name) != null ? tmp$_0.length > 0 ? tmp$_0 : null : null;
        this.plusAssign_l5rad2$($receiver);
      }
    }
  }
  TiledMapView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TiledMapView',
    interfaces: [Container]
  };
  function createView($receiver) {
    return new TiledMapView($receiver);
  }
  function TimerComponents(view) {
    this.view_tya6ih$_0 = view;
    this.timers_8be2vx$ = ArrayList_init_1();
    this.timersIt_0 = ArrayList_init_1();
  }
  Object.defineProperty(TimerComponents.prototype, 'view', {
    get: function () {
      return this.view_tya6ih$_0;
    }
  });
  TimerComponents.prototype.update_14dthe$ = function (ms) {
    var tmp$;
    this.timersIt_0.clear();
    this.timersIt_0.addAll_brywnq$(this.timers_8be2vx$);
    tmp$ = this.timersIt_0.iterator();
    while (tmp$.hasNext()) {
      var timer = tmp$.next();
      timer(numberToInt(ms));
    }
  };
  TimerComponents.prototype.wait_fv8bff$ = function (time, continuation) {
    return this.waitMilliseconds_za3lpa$(time.ms, continuation);
  };
  TimerComponents.prototype.waitFrame = function (continuation) {
    return this.waitMilliseconds_za3lpa$(0, continuation);
  };
  function TimerComponents$waitMilliseconds$lambda$lambda(closure$elapsedTime, closure$time, this$TimerComponents, closure$timer, closure$c) {
    return function (it) {
      closure$elapsedTime.v = closure$elapsedTime.v + it | 0;
      if (closure$elapsedTime.v >= closure$time) {
        var $receiver = this$TimerComponents.timers_8be2vx$;
        var element = ensureNotNull(closure$timer.v);
        $receiver.remove_11rb$(element);
        closure$c.resumeWith_i5d895$(new SuccessOrFailure(Unit));
      }
      return Unit;
    };
  }
  function TimerComponents$waitMilliseconds$lambda(closure$time, this$TimerComponents) {
    return function (c) {
      var timer = {v: null};
      var elapsedTime = {v: 0};
      timer.v = TimerComponents$waitMilliseconds$lambda$lambda(elapsedTime, closure$time, this$TimerComponents, timer, c);
      var $receiver = this$TimerComponents.timers_8be2vx$;
      var element = timer.v;
      $receiver.add_11rb$(element);
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
  TimerComponents.prototype.waitMilliseconds_za3lpa$ = function (time_0, continuation_0, suspended) {
    var instance = new Coroutine$waitMilliseconds_za3lpa$(this, time_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$waitMilliseconds_za3lpa$($this, time_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$time = time_0;
  }
  Coroutine$waitMilliseconds_za3lpa$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$waitMilliseconds_za3lpa$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$waitMilliseconds_za3lpa$.prototype.constructor = Coroutine$waitMilliseconds_za3lpa$;
  Coroutine$waitMilliseconds_za3lpa$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda_0(false, TimerComponents$waitMilliseconds$lambda(this.local$time, this.$this))(this);
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
  TimerComponents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimerComponents',
    interfaces: [UpdateComponent]
  };
  function TimerComponent(view, totalMs, callback) {
    this.view_nqi9aw$_0 = view;
    this.totalMs = totalMs;
    this.callback = callback;
    this.elapsed = 0.0;
  }
  Object.defineProperty(TimerComponent.prototype, 'view', {
    get: function () {
      return this.view_nqi9aw$_0;
    }
  });
  TimerComponent.prototype.update_14dthe$ = function (ms) {
    this.elapsed += ms;
    if (this.elapsed >= this.totalMs) {
      detach(this);
    }
  };
  TimerComponent.prototype.close = function () {
    detach(this);
  };
  TimerComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimerComponent',
    interfaces: [Closeable, UpdateComponent]
  };
  function get_timers$lambda(this$timers) {
    return function (it) {
      return new TimerComponents(this$timers);
    };
  }
  function get_timers($receiver) {
    return $receiver.getOrCreateComponent_twnkl3$(getKClass(TimerComponents), get_timers$lambda($receiver));
  }
  function waitMs($receiver, time, continuation) {
    return get_timers($receiver).waitMilliseconds_za3lpa$(time, continuation);
  }
  function wait($receiver, time, continuation) {
    return get_timers($receiver).wait_fv8bff$(time, continuation);
  }
  function waitFrame($receiver, continuation) {
    return get_timers($receiver).waitFrame(continuation);
  }
  function sleepMs_0($receiver, time, continuation) {
    return get_timers($receiver).waitMilliseconds_za3lpa$(time, continuation);
  }
  function sleep_0($receiver, time, continuation) {
    return get_timers($receiver).wait_fv8bff$(time, continuation);
  }
  function sleepFrame($receiver, continuation) {
    return get_timers($receiver).waitFrame(continuation);
  }
  function delay_0($receiver, time, continuation) {
    return get_timers($receiver).wait_fv8bff$(time, continuation);
  }
  function timer($receiver, time, callback) {
    return attach(new TimerComponent($receiver, time.milliseconds, callback));
  }
  function Easing() {
    Easing$Companion_getInstance();
  }
  function Easing$Companion() {
    Easing$Companion_instance = this;
  }
  function Easing$Companion$cubic$lambda(closure$f) {
    return function (it) {
      return closure$f(it, 0.0, 1.0, 1.0);
    };
  }
  Easing$Companion.prototype.cubic_ibw4ua$ = function (f) {
    return Easing$Companion_getInstance().invoke_7fnk9s$(Easing$Companion$cubic$lambda(f));
  };
  function Easing$Companion$combine$lambda(closure$start, closure$end) {
    return function (it) {
      return it < 0.5 ? 0.5 * closure$start.invoke_14dthe$(it * 2.0) : 0.5 * closure$end.invoke_14dthe$((it - 0.5) * 2.0) + 0.5;
    };
  }
  Easing$Companion.prototype.combine_xmgja8$ = function (start, end) {
    return Easing$Companion_getInstance().invoke_7fnk9s$(Easing$Companion$combine$lambda(start, end));
  };
  function Easing$Companion$invoke$ObjectLiteral(closure$f) {
    this.closure$f = closure$f;
  }
  Easing$Companion$invoke$ObjectLiteral.prototype.invoke_14dthe$ = function (it) {
    return this.closure$f(it);
  };
  Easing$Companion$invoke$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Easing]
  };
  Easing$Companion.prototype.invoke_7fnk9s$ = function (f) {
    return new Easing$Companion$invoke$ObjectLiteral(f);
  };
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_ELASTIC', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_ELASTIC', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_ELASTIC;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_ELASTIC', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_ELASTIC', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_ELASTIC;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_BOUNCE', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_BOUNCE', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_BOUNCE;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'LINEAR', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_LINEAR', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.LINEAR;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_OUT', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_OUT;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_IN', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_IN;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_BACK', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_BACK', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_BACK;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_BACK', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_BACK', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_BACK;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_BACK', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_OUT_BACK', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_OUT_BACK;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN_BACK', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_IN_BACK', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_IN_BACK;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_ELASTIC', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_OUT_ELASTIC', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_OUT_ELASTIC;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN_ELASTIC', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_IN_ELASTIC', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_IN_ELASTIC;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_BOUNCE', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_BOUNCE', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_BOUNCE;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_BOUNCE', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_OUT_BOUNCE', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_OUT_BOUNCE;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_IN_BOUNCE', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_IN_BOUNCE', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_IN_BOUNCE;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_QUAD', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_QUAD', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_QUAD;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_OUT_QUAD', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_OUT_QUAD', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_OUT_QUAD;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_IN_OUT_QUAD', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_IN_OUT_QUAD', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_IN_OUT_QUAD;
      };
    }))
  });
  Object.defineProperty(Easing$Companion.prototype, 'EASE_SINE', {
    get: defineInlineFunction('korge-js.com.soywiz.korge.tween.Easing.Companion.get_EASE_SINE', wrapFunction(function () {
      var tween = _.com.soywiz.korge.tween;
      return function () {
        return tween.Easings.EASE_SINE;
      };
    }))
  });
  Easing$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Easing$Companion_instance = null;
  function Easing$Companion_getInstance() {
    if (Easing$Companion_instance === null) {
      new Easing$Companion();
    }
    return Easing$Companion_instance;
  }
  Easing.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Easing',
    interfaces: []
  };
  function Easings() {
    Easings_instance = this;
    this.BOUNCE_10_0 = 1.70158;
    this.EASE_IN_ELASTIC = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_ELASTIC$lambda);
    this.EASE_OUT_ELASTIC = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_ELASTIC$lambda);
    this.EASE_OUT_BOUNCE = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_BOUNCE$lambda);
    this.LINEAR = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$LINEAR$lambda);
    this.EASE_IN = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN$lambda);
    this.EASE_OUT = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT$lambda);
    this.EASE_IN_OUT = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_IN, this.EASE_OUT);
    this.EASE_OUT_IN = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_OUT, this.EASE_IN);
    this.EASE_IN_BACK = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_BACK$lambda(this));
    this.EASE_OUT_BACK = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_BACK$lambda(this));
    this.EASE_IN_OUT_BACK = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_IN_BACK, this.EASE_OUT_BACK);
    this.EASE_OUT_IN_BACK = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_OUT_BACK, this.EASE_IN_BACK);
    this.EASE_IN_OUT_ELASTIC = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_IN_ELASTIC, this.EASE_OUT_ELASTIC);
    this.EASE_OUT_IN_ELASTIC = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_OUT_ELASTIC, this.EASE_IN_ELASTIC);
    this.EASE_IN_BOUNCE = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_BOUNCE$lambda(this));
    this.EASE_IN_OUT_BOUNCE = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_IN_BOUNCE, this.EASE_OUT_BOUNCE);
    this.EASE_OUT_IN_BOUNCE = Easing$Companion_getInstance().combine_xmgja8$(this.EASE_OUT_BOUNCE, this.EASE_IN_BOUNCE);
    this.EASE_IN_QUAD = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_QUAD$lambda);
    this.EASE_OUT_QUAD = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_OUT_QUAD$lambda);
    this.EASE_IN_OUT_QUAD = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_IN_OUT_QUAD$lambda);
    this.EASE_SINE = Easing$Companion_getInstance().invoke_7fnk9s$(Easings$EASE_SINE$lambda);
  }
  function Easings$EASE_IN_ELASTIC$lambda(it) {
    if (it === 0.0 || it === 1.0)
      return it;
    else {
      var p = 0.3;
      var s = p / 4.0;
      var inv = it - 1;
      var tmp$ = -1.0;
      var x = 10.0 * inv;
      var tmp$_0 = tmp$ * Math_0.pow(2.0, x);
      var x_0 = (inv - s) * (2.0 * math.PI) / p;
      return tmp$_0 * Math_0.sin(x_0);
    }
  }
  function Easings$EASE_OUT_ELASTIC$lambda(it) {
    if (it === 0.0 || it === 1.0)
      return it;
    else {
      var p = 0.3;
      var s = p / 4.0;
      var x = -10.0 * it;
      var tmp$ = Math_0.pow(2.0, x);
      var x_0 = (it - s) * (2.0 * math.PI) / p;
      return tmp$ * Math_0.sin(x_0) + 1;
    }
  }
  function Easings$EASE_OUT_BOUNCE$lambda(it) {
    var s = 7.5625;
    var p = 2.75;
    if (it < 1.0 / p) {
      return s * Math_0.pow(it, 2.0);
    }
     else if (it < 2.0 / p) {
      var $receiver = it - 1.5 / p;
      return s * Math_0.pow($receiver, 2.0) + 0.75;
    }
     else if (it < 2.5 / p) {
      var $receiver_0 = it - 2.25 / p;
      return s * Math_0.pow($receiver_0, 2.0) + 0.9375;
    }
     else {
      var $receiver_1 = it - 2.625 / p;
      return s * Math_0.pow($receiver_1, 2.0) + 0.984375;
    }
  }
  function Easings$LINEAR$lambda(it) {
    return it;
  }
  function Easings$EASE_IN$lambda(it) {
    return it * it * it;
  }
  function Easings$EASE_OUT$lambda(it) {
    var inv = it - 1.0;
    return inv * inv * inv + 1;
  }
  function Easings$EASE_IN_BACK$lambda(this$Easings) {
    return function (it) {
      return Math_0.pow(it, 2.0) * ((this$Easings.BOUNCE_10_0 + 1.0) * it - this$Easings.BOUNCE_10_0);
    };
  }
  function Easings$EASE_OUT_BACK$lambda(this$Easings) {
    return function (it) {
      var inv = it - 1.0;
      return Math_0.pow(inv, 2.0) * ((this$Easings.BOUNCE_10_0 + 1.0) * inv + this$Easings.BOUNCE_10_0) + 1.0;
    };
  }
  function Easings$EASE_IN_BOUNCE$lambda(this$Easings) {
    return function (it) {
      return 1.0 - this$Easings.EASE_OUT_BOUNCE.invoke_14dthe$(1.0 - it);
    };
  }
  function Easings$EASE_IN_QUAD$lambda(it) {
    return 1.0 * it * it;
  }
  function Easings$EASE_OUT_QUAD$lambda(it) {
    return -1.0 * it * (it - 2);
  }
  function Easings$EASE_IN_OUT_QUAD$lambda(it) {
    var t = it * 2.0;
    return t < 1 ? 1.0 / 2 * t * t : -1.0 / 2 * ((t - 1) * (t - 1 - 2) - 1);
  }
  function Easings$EASE_SINE$lambda(it) {
    return Math_0.sin(it);
  }
  Easings.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Easings',
    interfaces: []
  };
  var Easings_instance = null;
  function Easings_getInstance() {
    if (Easings_instance === null) {
      new Easings();
    }
    return Easings_instance;
  }
  function TweenComponent(view, vs, time, easing, callback, c) {
    if (time === void 0)
      time = null;
    if (easing === void 0) {
      easing = package$tween.Easings.LINEAR;
    }
    this.view_p50uss$_0 = view;
    this.vs_0 = vs;
    this.time = time;
    this.easing = easing;
    this.callback = callback;
    this.c = c;
    this.elapsed = 0;
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.time) != null)
      tmp$_1 = tmp$;
    else {
      var $receiver = this.vs_0;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var item = tmp$_2.next();
        destination.add_11rb$(item.endTime);
      }
      tmp$_1 = max(destination);
    }
    this.ctime = (tmp$_0 = tmp$_1) != null ? tmp$_0 : 1000;
    this.cancelled = false;
    this.done = false;
    this.c.invokeOnCancellation_f05bi3$(TweenComponent_init$lambda(this));
    this.update_14dthe$(0.0);
  }
  Object.defineProperty(TweenComponent.prototype, 'view', {
    get: function () {
      return this.view_p50uss$_0;
    }
  });
  TweenComponent.prototype.completeOnce = function () {
    if (!this.done) {
      this.done = true;
      detach(this);
      this.c.resumeWith_i5d895$(new SuccessOrFailure(Unit));
    }
  };
  TweenComponent.prototype.update_14dthe$ = function (ms) {
    var tmp$, tmp$_0;
    var dtMs = numberToInt(ms);
    if (this.cancelled)
      return this.completeOnce();
    this.elapsed = this.elapsed + dtMs | 0;
    var ratio = clamp_0(this.elapsed / this.ctime, 0.0, 1.0);
    tmp$ = this.vs_0.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      var durationInTween = (tmp$_0 = v.duration_8be2vx$) != null ? tmp$_0 : this.ctime - v.startTime_8be2vx$ | 0;
      var elapsedInTween = clamp(this.elapsed - v.startTime_8be2vx$ | 0, 0, durationInTween);
      var ratioInTween = durationInTween <= 0.0 ? 1.0 : elapsedInTween / durationInTween;
      v.set_14dthe$(this.easing.invoke_14dthe$(ratioInTween));
    }
    this.callback(this.easing.invoke_14dthe$(ratio));
    if (ratio >= 1.0)
      return this.completeOnce();
  };
  TweenComponent.prototype.toString = function () {
    return 'TweenComponent(' + this.view + ')';
  };
  function TweenComponent_init$lambda(this$TweenComponent) {
    return function (it) {
      this$TweenComponent.cancelled = true;
      return Unit;
    };
  }
  TweenComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TweenComponent',
    interfaces: [UpdateComponent]
  };
  function tween$lambda(it) {
    return Unit;
  }
  function tween$lambda$lambda(this$tween, closure$vs, closure$time, closure$easing, closure$callback) {
    return function (c) {
      var view = this$tween;
      attach(new TweenComponent(view, toList(closure$vs), closure$time.milliseconds, closure$easing, closure$callback, c));
      return Unit;
    };
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
  function tween$lambda_0(this$tween_0, closure$vs_0, closure$time_0, closure$easing_0, closure$callback_0) {
    return function ($receiver, continuation_0, suspended) {
      var instance = new Coroutine$tween$lambda(this$tween_0, closure$vs_0, closure$time_0, closure$easing_0, closure$callback_0, $receiver, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$tween$lambda(this$tween_0, closure$vs_0, closure$time_0, closure$easing_0, closure$callback_0, $receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$this$tween = this$tween_0;
    this.local$closure$vs = closure$vs_0;
    this.local$closure$time = closure$time_0;
    this.local$closure$easing = closure$easing_0;
    this.local$closure$callback = closure$callback_0;
  }
  Coroutine$tween$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tween$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tween$lambda.prototype.constructor = Coroutine$tween$lambda;
  Coroutine$tween$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda_1(false, tween$lambda$lambda(this.local$this$tween, this.local$closure$vs, this.local$closure$time, this.local$closure$easing, this.local$closure$callback))(this);
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
  function tween($receiver_0, vs_0, time_0, easing_0, callback_0, continuation_0, suspended) {
    var instance = new Coroutine$tween($receiver_0, vs_0, time_0, easing_0, callback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$tween($receiver_0, vs_0, time_0, easing_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$vs = vs_0;
    this.local$time = time_0;
    this.local$easing = easing_0;
    this.local$callback = callback_0;
  }
  Coroutine$tween.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tween.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tween.prototype.constructor = Coroutine$tween;
  Coroutine$tween.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$easing === void 0) {
              this.local$easing = package$tween.Easings.LINEAR;
            }

            if (this.local$callback === void 0)
              this.local$callback = tween$lambda;
            if (this.local$$receiver != null) {
              this.state_0 = 2;
              this.result_0 = withTimeout_0(300 + (this.local$time.milliseconds * 2 | 0) | 0, tween$lambda_0(this.local$$receiver, this.local$vs, this.local$time, this.local$easing, this.local$callback), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
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
  function show$lambda(this$show) {
    return function (it) {
      this$show.visible = true;
      return Unit;
    };
  }
  function show($receiver, time, easing, continuation) {
    if (easing === void 0) {
      easing = package$tween.Easings.LINEAR;
    }
    var $receiver_0 = getPropertyCallableRef('alpha', 0, function ($receiver) {
      return $receiver.alpha;
    }.bind(null, $receiver), function ($receiver, value) {
      $receiver.alpha = value;
    }.bind(null, $receiver));
    return tween($receiver, [new V2($receiver_0, $receiver_0.get(), numberToDouble(1.0), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
      return interpolate(v0_0, v1_0, step_0);
    }))], time, easing, show$lambda($receiver), continuation);
  }
  function hide($receiver, time, easing, continuation) {
    if (easing === void 0) {
      easing = package$tween.Easings.LINEAR;
    }
    var $receiver_0 = getPropertyCallableRef('alpha', 0, function ($receiver) {
      return $receiver.alpha;
    }.bind(null, $receiver), function ($receiver, value) {
      $receiver.alpha = value;
    }.bind(null, $receiver));
    return tween($receiver, [new V2($receiver_0, $receiver_0.get(), numberToDouble(0.0), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
      return interpolate(v0_0, v1_0, step_0);
    }))], time, easing, void 0, continuation);
  }
  function moveTo($receiver_0, x_0, y_0, time_0, easing_0, continuation_0) {
    if (easing_0 === void 0) {
      easing_0 = package$tween.Easings.LINEAR;
    }
    var $receiver_0 = getPropertyCallableRef('x', 0, function ($receiver_0) {
      return $receiver_0.x;
    }.bind(null, $receiver_0), function ($receiver_0, value_0) {
      $receiver_0.x = value_0;
    }.bind(null, $receiver_0));
    var end = numberToDouble(x_0);
    var tmp$ = new V2($receiver_0, $receiver_0.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
      return interpolate(v0_0, v1_0, step_0);
    }));
    var $receiver_1 = getPropertyCallableRef('y', 0, function ($receiver_0) {
      return $receiver_0.y;
    }.bind(null, $receiver_0), function ($receiver_0, value_0) {
      $receiver_0.y = value_0;
    }.bind(null, $receiver_0));
    var end_0 = numberToDouble(y_0);
    return tween($receiver_0, [tmp$, new V2($receiver_1, $receiver_1.get(), numberToDouble(end_0), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
      return interpolate(v0_0, v1_0, step_0);
    }))], time_0, easing_0, void 0, continuation_0);
  }
  defineInlineFunction('korge-js.com.soywiz.korge.tween.moveTo_42mrl2$', wrapFunction(function () {
    var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
    var numberToDouble = Kotlin.numberToDouble;
    var tween = _.com.soywiz.korge.tween.tween_sqtkcm$;
    var tween_0 = _.com.soywiz.korge.tween;
    var interpolate = _.$$importsForInline$$['korma-js'].com.soywiz.korma.interpolation.interpolate_yvo9jy$;
    var getCallableRef = Kotlin.getCallableRef;
    var V2_init = _.com.soywiz.korge.tween.V2;
    return function ($receiver_0, x_0, y_0, time_0, easing_0, continuation_0) {
      if (easing_0 === void 0) {
        easing_0 = tween_0.Easings.LINEAR;
      }
      var $receiver_1 = getPropertyCallableRef('x', 0, function ($receiver_0) {
        return $receiver_0.x;
      }.bind(null, $receiver_0), function ($receiver_0, value_0) {
        $receiver_0.x = value_0;
      }.bind(null, $receiver_0));
      var end = numberToDouble(x_0);
      var tmp$ = new V2_init($receiver_1, $receiver_1.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }));
      var $receiver_2 = getPropertyCallableRef('y', 0, function ($receiver_0) {
        return $receiver_0.y;
      }.bind(null, $receiver_0), function ($receiver_0, value_0) {
        $receiver_0.y = value_0;
      }.bind(null, $receiver_0));
      var end_0 = numberToDouble(y_0);
      Kotlin.suspendCall(tween($receiver_0, [tmp$, new V2_init($receiver_2, $receiver_2.get(), numberToDouble(end_0), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }))], time_0, easing_0, void 0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function moveBy($receiver_0, dx_0, dy_0, time_0, easing_0, continuation_0) {
    if (easing_0 === void 0) {
      easing_0 = package$tween.Easings.LINEAR;
    }
    var $receiver_0 = getPropertyCallableRef('x', 0, function ($receiver_0) {
      return $receiver_0.x;
    }.bind(null, $receiver_0), function ($receiver_0, value_0) {
      $receiver_0.x = value_0;
    }.bind(null, $receiver_0));
    var end = $receiver_0.x + numberToDouble(dx_0);
    var tmp$ = new V2($receiver_0, $receiver_0.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
      return interpolate(v0_0, v1_0, step_0);
    }));
    var $receiver_1 = getPropertyCallableRef('y', 0, function ($receiver_0) {
      return $receiver_0.y;
    }.bind(null, $receiver_0), function ($receiver_0, value_0) {
      $receiver_0.y = value_0;
    }.bind(null, $receiver_0));
    var end_0 = $receiver_0.y + numberToDouble(dy_0);
    return tween($receiver_0, [tmp$, new V2($receiver_1, $receiver_1.get(), numberToDouble(end_0), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
      return interpolate(v0_0, v1_0, step_0);
    }))], time_0, easing_0, void 0, continuation_0);
  }
  defineInlineFunction('korge-js.com.soywiz.korge.tween.moveBy_42mrl2$', wrapFunction(function () {
    var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
    var numberToDouble = Kotlin.numberToDouble;
    var tween = _.com.soywiz.korge.tween.tween_sqtkcm$;
    var tween_0 = _.com.soywiz.korge.tween;
    var interpolate = _.$$importsForInline$$['korma-js'].com.soywiz.korma.interpolation.interpolate_yvo9jy$;
    var getCallableRef = Kotlin.getCallableRef;
    var V2_init = _.com.soywiz.korge.tween.V2;
    return function ($receiver_0, dx_0, dy_0, time_0, easing_0, continuation_0) {
      if (easing_0 === void 0) {
        easing_0 = tween_0.Easings.LINEAR;
      }
      var $receiver_1 = getPropertyCallableRef('x', 0, function ($receiver_0) {
        return $receiver_0.x;
      }.bind(null, $receiver_0), function ($receiver_0, value_0) {
        $receiver_0.x = value_0;
      }.bind(null, $receiver_0));
      var end = $receiver_0.x + numberToDouble(dx_0);
      var tmp$ = new V2_init($receiver_1, $receiver_1.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }));
      var $receiver_2 = getPropertyCallableRef('y', 0, function ($receiver_0) {
        return $receiver_0.y;
      }.bind(null, $receiver_0), function ($receiver_0, value_0) {
        $receiver_0.y = value_0;
      }.bind(null, $receiver_0));
      var end_0 = $receiver_0.y + numberToDouble(dy_0);
      Kotlin.suspendCall(tween($receiver_0, [tmp$, new V2_init($receiver_2, $receiver_2.get(), numberToDouble(end_0), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }))], time_0, easing_0, void 0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function scaleTo($receiver_0, sx_0, sy_0, time_0, easing_0, continuation_0) {
    if (easing_0 === void 0) {
      easing_0 = package$tween.Easings.LINEAR;
    }
    var $receiver_0 = getPropertyCallableRef('scaleX', 0, function ($receiver_0) {
      return $receiver_0.scaleX;
    }.bind(null, $receiver_0), function ($receiver_0, value_0) {
      $receiver_0.scaleX = value_0;
    }.bind(null, $receiver_0));
    var end = numberToDouble(sx_0);
    var tmp$ = new V2($receiver_0, $receiver_0.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
      return interpolate(v0_0, v1_0, step_0);
    }));
    var $receiver_1 = getPropertyCallableRef('scaleY', 0, function ($receiver_0) {
      return $receiver_0.scaleY;
    }.bind(null, $receiver_0), function ($receiver_0, value_0) {
      $receiver_0.scaleY = value_0;
    }.bind(null, $receiver_0));
    var end_0 = numberToDouble(sy_0);
    return tween($receiver_0, [tmp$, new V2($receiver_1, $receiver_1.get(), numberToDouble(end_0), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
      return interpolate(v0_0, v1_0, step_0);
    }))], time_0, easing_0, void 0, continuation_0);
  }
  defineInlineFunction('korge-js.com.soywiz.korge.tween.scaleTo_42mrl2$', wrapFunction(function () {
    var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
    var numberToDouble = Kotlin.numberToDouble;
    var tween = _.com.soywiz.korge.tween.tween_sqtkcm$;
    var tween_0 = _.com.soywiz.korge.tween;
    var interpolate = _.$$importsForInline$$['korma-js'].com.soywiz.korma.interpolation.interpolate_yvo9jy$;
    var getCallableRef = Kotlin.getCallableRef;
    var V2_init = _.com.soywiz.korge.tween.V2;
    return function ($receiver_0, sx_0, sy_0, time_0, easing_0, continuation_0) {
      if (easing_0 === void 0) {
        easing_0 = tween_0.Easings.LINEAR;
      }
      var $receiver_1 = getPropertyCallableRef('scaleX', 0, function ($receiver_0) {
        return $receiver_0.scaleX;
      }.bind(null, $receiver_0), function ($receiver_0, value_0) {
        $receiver_0.scaleX = value_0;
      }.bind(null, $receiver_0));
      var end = numberToDouble(sx_0);
      var tmp$ = new V2_init($receiver_1, $receiver_1.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }));
      var $receiver_2 = getPropertyCallableRef('scaleY', 0, function ($receiver_0) {
        return $receiver_0.scaleY;
      }.bind(null, $receiver_0), function ($receiver_0, value_0) {
        $receiver_0.scaleY = value_0;
      }.bind(null, $receiver_0));
      var end_0 = numberToDouble(sy_0);
      Kotlin.suspendCall(tween($receiver_0, [tmp$, new V2_init($receiver_2, $receiver_2.get(), numberToDouble(end_0), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }))], time_0, easing_0, void 0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function rotateTo($receiver_0, deg_0, time_0, easing_0, continuation_0) {
    if (easing_0 === void 0) {
      easing_0 = package$tween.Easings.LINEAR;
    }
    var $receiver_0 = getPropertyCallableRef('rotation', 0, function ($receiver_0) {
      return $receiver_0.rotation;
    }.bind(null, $receiver_0), function ($receiver_0, value_0) {
      $receiver_0.rotation = value_0;
    }.bind(null, $receiver_0));
    var end = deg_0.radians;
    return tween($receiver_0, [new V2($receiver_0, $receiver_0.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
      return interpolate(v0_0, v1_0, step_0);
    }))], time_0, easing_0, void 0, continuation_0);
  }
  defineInlineFunction('korge-js.com.soywiz.korge.tween.rotateTo_joi4df$', wrapFunction(function () {
    var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
    var tween = _.com.soywiz.korge.tween.tween_sqtkcm$;
    var tween_0 = _.com.soywiz.korge.tween;
    var numberToDouble = Kotlin.numberToDouble;
    var interpolate = _.$$importsForInline$$['korma-js'].com.soywiz.korma.interpolation.interpolate_yvo9jy$;
    var getCallableRef = Kotlin.getCallableRef;
    var V2_init = _.com.soywiz.korge.tween.V2;
    return function ($receiver_0, deg_0, time_0, easing_0, continuation_0) {
      if (easing_0 === void 0) {
        easing_0 = tween_0.Easings.LINEAR;
      }
      var $receiver_1 = getPropertyCallableRef('rotation', 0, function ($receiver_0) {
        return $receiver_0.rotation;
      }.bind(null, $receiver_0), function ($receiver_0, value_0) {
        $receiver_0.rotation = value_0;
      }.bind(null, $receiver_0));
      var end = deg_0.radians;
      Kotlin.suspendCall(tween($receiver_0, [new V2_init($receiver_1, $receiver_1.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }))], time_0, easing_0, void 0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function rotateBy($receiver_0, ddeg_0, time_0, easing_0, continuation_0) {
    if (easing_0 === void 0) {
      easing_0 = package$tween.Easings.LINEAR;
    }
    var $receiver_0 = getPropertyCallableRef('rotation', 0, function ($receiver_0) {
      return $receiver_0.rotation;
    }.bind(null, $receiver_0), function ($receiver_0, value_0) {
      $receiver_0.rotation = value_0;
    }.bind(null, $receiver_0));
    var end = $receiver_0.rotation + ddeg_0.radians;
    return tween($receiver_0, [new V2($receiver_0, $receiver_0.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
      return interpolate(v0_0, v1_0, step_0);
    }))], time_0, easing_0, void 0, continuation_0);
  }
  defineInlineFunction('korge-js.com.soywiz.korge.tween.rotateBy_joi4df$', wrapFunction(function () {
    var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
    var tween = _.com.soywiz.korge.tween.tween_sqtkcm$;
    var tween_0 = _.com.soywiz.korge.tween;
    var numberToDouble = Kotlin.numberToDouble;
    var interpolate = _.$$importsForInline$$['korma-js'].com.soywiz.korma.interpolation.interpolate_yvo9jy$;
    var getCallableRef = Kotlin.getCallableRef;
    var V2_init = _.com.soywiz.korge.tween.V2;
    return function ($receiver_0, ddeg_0, time_0, easing_0, continuation_0) {
      if (easing_0 === void 0) {
        easing_0 = tween_0.Easings.LINEAR;
      }
      var $receiver_1 = getPropertyCallableRef('rotation', 0, function ($receiver_0) {
        return $receiver_0.rotation;
      }.bind(null, $receiver_0), function ($receiver_0, value_0) {
        $receiver_0.rotation = value_0;
      }.bind(null, $receiver_0));
      var end = $receiver_0.rotation + ddeg_0.radians;
      Kotlin.suspendCall(tween($receiver_0, [new V2_init($receiver_1, $receiver_1.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }))], time_0, easing_0, void 0, Kotlin.coroutineReceiver()));
      return Kotlin.coroutineResult(Kotlin.coroutineReceiver());
    };
  }));
  function V2(key, initial, end, interpolator, startTime, duration) {
    if (startTime === void 0)
      startTime = 0;
    if (duration === void 0)
      duration = null;
    this.key_8be2vx$ = key;
    this.initial_8be2vx$ = initial;
    this.end_8be2vx$ = end;
    this.interpolator_8be2vx$ = interpolator;
    this.startTime_8be2vx$ = startTime;
    this.duration_8be2vx$ = duration;
    var tmp$;
    this.endTime = this.startTime_8be2vx$ + ((tmp$ = this.duration_8be2vx$) != null ? tmp$ : 0) | 0;
  }
  V2.prototype.set_14dthe$ = function (ratio) {
    this.key_8be2vx$.set(this.interpolator_8be2vx$(this.initial_8be2vx$, this.end_8be2vx$, ratio));
  };
  V2.prototype.toString = function () {
    return 'V2(key=' + this.key_8be2vx$.callableName + ', range=[' + this.initial_8be2vx$ + '-' + this.end_8be2vx$ + '], startTime=' + this.startTime_8be2vx$ + ', duration=' + toString(this.duration_8be2vx$) + ')';
  };
  V2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'V2',
    interfaces: []
  };
  function V2_init(key, initial, end, $this) {
    $this = $this || Object.create(V2.prototype);
    V2.call($this, key, initial, end, getCallableRef('interpolateAny', function (min, max, ratio) {
      return interpolateAny(min, max, ratio);
    }));
    return $this;
  }
  V2.prototype.component1_8be2vx$ = function () {
    return this.key_8be2vx$;
  };
  V2.prototype.component2_8be2vx$ = function () {
    return this.initial_8be2vx$;
  };
  V2.prototype.component3_8be2vx$ = function () {
    return this.end_8be2vx$;
  };
  V2.prototype.component4_8be2vx$ = function () {
    return this.interpolator_8be2vx$;
  };
  V2.prototype.component5_8be2vx$ = function () {
    return this.startTime_8be2vx$;
  };
  V2.prototype.component6_8be2vx$ = function () {
    return this.duration_8be2vx$;
  };
  V2.prototype.copy_1f32s1$ = function (key, initial, end, interpolator, startTime, duration) {
    return new V2(key === void 0 ? this.key_8be2vx$ : key, initial === void 0 ? this.initial_8be2vx$ : initial, end === void 0 ? this.end_8be2vx$ : end, interpolator === void 0 ? this.interpolator_8be2vx$ : interpolator, startTime === void 0 ? this.startTime_8be2vx$ : startTime, duration === void 0 ? this.duration_8be2vx$ : duration);
  };
  V2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.initial_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.end_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.interpolator_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.startTime_8be2vx$) | 0;
    result = result * 31 + Kotlin.hashCode(this.duration_8be2vx$) | 0;
    return result;
  };
  V2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key_8be2vx$, other.key_8be2vx$) && Kotlin.equals(this.initial_8be2vx$, other.initial_8be2vx$) && Kotlin.equals(this.end_8be2vx$, other.end_8be2vx$) && Kotlin.equals(this.interpolator_8be2vx$, other.interpolator_8be2vx$) && Kotlin.equals(this.startTime_8be2vx$, other.startTime_8be2vx$) && Kotlin.equals(this.duration_8be2vx$, other.duration_8be2vx$)))));
  };
  function get_2($receiver, end) {
    return new V2($receiver, $receiver.get(), end, getCallableRef('interpolateAny', function (min, max, ratio) {
      return interpolateAny(min, max, ratio);
    }));
  }
  function get_3($receiver, initial, end) {
    return new V2($receiver, initial, end, getCallableRef('interpolateAny', function (min, max, ratio) {
      return interpolateAny(min, max, ratio);
    }));
  }
  var get_4 = defineInlineFunction('korge-js.com.soywiz.korge.tween.get_1ml8v3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var interpolate = _.$$importsForInline$$['korma-js'].com.soywiz.korma.interpolation.interpolate_yvo9jy$;
    var getCallableRef = Kotlin.getCallableRef;
    var V2_init = _.com.soywiz.korge.tween.V2;
    return function ($receiver, end) {
      return new V2_init($receiver, $receiver.get(), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }));
    };
  }));
  var get_5 = defineInlineFunction('korge-js.com.soywiz.korge.tween.get_8jpm3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var interpolate = _.$$importsForInline$$['korma-js'].com.soywiz.korma.interpolation.interpolate_yvo9jy$;
    var getCallableRef = Kotlin.getCallableRef;
    var V2_init = _.com.soywiz.korge.tween.V2;
    return function ($receiver, initial, end) {
      return new V2_init($receiver, numberToDouble(initial), numberToDouble(end), getCallableRef('interpolate', function (v0_0, v1_0, step_0) {
        return interpolate(v0_0, v1_0, step_0);
      }));
    };
  }));
  function rangeTo($receiver, that) {
    return $receiver.copy_1f32s1$(void 0, $receiver.end_8be2vx$, that);
  }
  function rangeTo_0($receiver, that) {
    return get_2($receiver, $receiver.get());
  }
  function rangeTo_1($receiver, that) {
    return get_3($receiver, that.start, that.endInclusive);
  }
  function rangeTo_2($receiver, that) {
    return get_3($receiver, that.first, that.second);
  }
  function withEasing$lambda_0(this$withEasing, closure$easing) {
    return function (a, b, ratio) {
      return this$withEasing.interpolator_8be2vx$(a, b, closure$easing.invoke_14dthe$(ratio));
    };
  }
  function withEasing_0($receiver, easing) {
    return $receiver.copy_1f32s1$(void 0, void 0, void 0, withEasing$lambda_0($receiver, easing));
  }
  function color_1($receiver) {
    return $receiver.copy_1f32s1$(void 0, void 0, void 0, getCallableRef('blendRGBAInt', function ($receiver, c1, c2, factor) {
      return $receiver.blendRGBAInt_224j3y$(c1, c2, factor);
    }.bind(null, RGBA.Companion)));
  }
  function easing$lambda(this$easing, closure$easing) {
    return function (a, b, ratio) {
      return this$easing.interpolator_8be2vx$(a, b, closure$easing.invoke_14dthe$(ratio));
    };
  }
  function easing($receiver, easing) {
    return $receiver.copy_1f32s1$(void 0, void 0, void 0, easing$lambda($receiver, easing));
  }
  var delay_1 = defineInlineFunction('korge-js.com.soywiz.korge.tween.delay_obe6bn$', function ($receiver, startTime) {
    return $receiver.copy_1f32s1$(void 0, void 0, void 0, void 0, startTime.milliseconds);
  });
  var duration = defineInlineFunction('korge-js.com.soywiz.korge.tween.duration_obe6bn$', function ($receiver, duration) {
    return $receiver.copy_1f32s1$(void 0, void 0, void 0, void 0, void 0, duration.milliseconds);
  });
  var linear = defineInlineFunction('korge-js.com.soywiz.korge.tween.linear_2stsxw$', function ($receiver) {
    return $receiver;
  });
  var easeIn = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeIn_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN);
    };
  }));
  var easeOut = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOut_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT);
    };
  }));
  var easeInOut = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInOut_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_OUT);
    };
  }));
  var easeOutIn = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutIn_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_IN);
    };
  }));
  var easeInBack = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInBack_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_BACK);
    };
  }));
  var easeOutBack = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutBack_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_BACK);
    };
  }));
  var easeInOutBack = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInOutBack_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_OUT_BACK);
    };
  }));
  var easeOutInBack = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutInBack_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_IN_BACK);
    };
  }));
  var easeInElastic = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInElastic_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_ELASTIC);
    };
  }));
  var easeOutElastic = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutElastic_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_ELASTIC);
    };
  }));
  var easeInOutElastic = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInOutElastic_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_OUT_ELASTIC);
    };
  }));
  var easeOutInElastic = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutInElastic_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_IN_ELASTIC);
    };
  }));
  var easeInBounce = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInBounce_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_BOUNCE);
    };
  }));
  var easeOutBounce = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutBounce_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_BOUNCE);
    };
  }));
  var easeInOutBounce = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInOutBounce_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_OUT_BOUNCE);
    };
  }));
  var easeOutInBounce = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutInBounce_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_IN_BOUNCE);
    };
  }));
  var easeInQuad = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInQuad_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_QUAD);
    };
  }));
  var easeOutQuad = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeOutQuad_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_OUT_QUAD);
    };
  }));
  var easeInOutQuad = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeInOutQuad_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_IN_OUT_QUAD);
    };
  }));
  var easeSine = defineInlineFunction('korge-js.com.soywiz.korge.tween.easeSine_2stsxw$', wrapFunction(function () {
    var tween = _.com.soywiz.korge.tween;
    var withEasing = _.com.soywiz.korge.tween.withEasing_3705oi$;
    return function ($receiver) {
      return withEasing($receiver, tween.Easings.EASE_SINE);
    };
  }));
  function Button(factory, skin, initialText) {
    if (skin === void 0)
      skin = factory.skin;
    if (initialText === void 0)
      initialText = 'Label';
    Widget.call(this, factory, skin);
    this.over = false;
    this.down = false;
    var $receiver = new NinePatch(skin.buttonOut, this.width, this.height, 0.25, 0.25, 0.25, 0.25);
    this.plusAssign_l5rad2$($receiver);
    this.bgView_0 = $receiver;
    var $receiver_0 = Text$Companion_getInstance().invoke_fnvenn$(initialText);
    this.plusAssign_l5rad2$($receiver_0);
    this.textView_0 = $receiver_0;
    this.text_aqx3h$_0 = new RedirectMutableField_init(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this.textView_0), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this.textView_0)));
    this.html_h33rf$_0 = new RedirectMutableField_init(getPropertyCallableRef('html', 0, function ($receiver) {
      return $receiver.html;
    }.bind(null, this.textView_0), function ($receiver, value) {
      $receiver.html = value;
    }.bind(null, this.textView_0)));
    this.format_9gos89$_0 = new RedirectMutableField_init(getPropertyCallableRef('format', 0, function ($receiver) {
      return $receiver.format;
    }.bind(null, this.textView_0), function ($receiver, value) {
      $receiver.format = value;
    }.bind(null, this.textView_0)));
    var tmp$;
    Html_getInstance();
    tmp$ = Html$Alignment$Companion_getInstance().MIDDLE_CENTER;
    this.format = new Html$Format(void 0, color.Colors.BLACK, void 0, 16, void 0, void 0, tmp$);
    var tmp$_0, tmp$_1;
    (tmp$_1 = (tmp$_0 = this != null ? get_mouse(this) : null) != null ? tmp$_0.onOver : null) != null ? addSuspend(tmp$_1, get_KorgeDispatcher(), Button_init$lambda(this)) : null;
    var tmp$_2, tmp$_3;
    (tmp$_3 = (tmp$_2 = this != null ? get_mouse(this) : null) != null ? tmp$_2.onOut : null) != null ? addSuspend(tmp$_3, get_KorgeDispatcher(), Button_init$lambda_0(this)) : null;
    var tmp$_4, tmp$_5;
    (tmp$_5 = (tmp$_4 = this != null ? get_mouse(this) : null) != null ? tmp$_4.onDown : null) != null ? addSuspend(tmp$_5, get_KorgeDispatcher(), Button_init$lambda_1(this)) : null;
    var tmp$_6, tmp$_7;
    (tmp$_7 = (tmp$_6 = this != null ? get_mouse(this) : null) != null ? tmp$_6.onUp : null) != null ? addSuspend(tmp$_7, get_KorgeDispatcher(), Button_init$lambda_2(this)) : null;
    var tmp$_8, tmp$_9;
    (tmp$_9 = (tmp$_8 = this != null ? get_mouse(this) : null) != null ? tmp$_8.onUpOutside : null) != null ? addSuspend(tmp$_9, get_KorgeDispatcher(), Button_init$lambda_3(this)) : null;
    this.updateState_0();
  }
  Button.prototype.createInstance = function () {
    return new Button(this.factory, this.skin, this.text);
  };
  Object.defineProperty(Button.prototype, 'text', {
    get: function () {
      return this.text_aqx3h$_0.redirect.get();
    },
    set: function (text) {
      this.text_aqx3h$_0.redirect.set(text);
    }
  });
  Object.defineProperty(Button.prototype, 'html', {
    get: function () {
      return this.html_h33rf$_0.redirect.get();
    },
    set: function (html) {
      this.html_h33rf$_0.redirect.set(html);
    }
  });
  Object.defineProperty(Button.prototype, 'format', {
    get: function () {
      return this.format_9gos89$_0.redirect.get();
    },
    set: function (format) {
      this.format_9gos89$_0.redirect.set(format);
    }
  });
  Button.prototype.updateState_0 = function () {
    var tmp$, tmp$_0;
    tmp$_0 = this.bgView_0;
    if (this.down)
      tmp$ = this.skin.buttonDown;
    else if (this.over)
      tmp$ = this.skin.buttonOver;
    else if (!this.over)
      tmp$ = this.skin.buttonOut;
    else
      tmp$ = this.skin.buttonOut;
    tmp$_0.tex = tmp$;
    this.bgView_0.width = this.width;
    this.bgView_0.height = this.height;
    var $this = this.textView_0.textBounds;
    var width = this.width;
    var height = this.height;
    $this.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height));
  };
  Button.prototype.updateSize = function () {
    this.updateState_0();
  };
  function Button_init$lambda(this$Button_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$Button_init$lambda(this$Button_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Button_init$lambda(this$Button_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Button = this$Button_0;
  }
  Coroutine$Button_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Button_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Button_init$lambda.prototype.constructor = Coroutine$Button_init$lambda;
  Coroutine$Button_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$Button.over = true;
            return this.local$this$Button.updateState_0(), Unit;
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
  function Button_init$lambda_0(this$Button_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$Button_init$lambda_0(this$Button_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Button_init$lambda_0(this$Button_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Button = this$Button_0;
  }
  Coroutine$Button_init$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Button_init$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Button_init$lambda_0.prototype.constructor = Coroutine$Button_init$lambda_0;
  Coroutine$Button_init$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$Button.over = false;
            return this.local$this$Button.updateState_0(), Unit;
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
  function Button_init$lambda_1(this$Button_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$Button_init$lambda_1(this$Button_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Button_init$lambda_1(this$Button_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Button = this$Button_0;
  }
  Coroutine$Button_init$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Button_init$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Button_init$lambda_1.prototype.constructor = Coroutine$Button_init$lambda_1;
  Coroutine$Button_init$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$Button.down = true;
            return this.local$this$Button.updateState_0(), Unit;
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
  function Button_init$lambda_2(this$Button_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$Button_init$lambda_2(this$Button_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Button_init$lambda_2(this$Button_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Button = this$Button_0;
  }
  Coroutine$Button_init$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Button_init$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Button_init$lambda_2.prototype.constructor = Coroutine$Button_init$lambda_2;
  Coroutine$Button_init$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$Button.down = false;
            return this.local$this$Button.updateState_0(), Unit;
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
  function Button_init$lambda_3(this$Button_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$Button_init$lambda_3(this$Button_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Button_init$lambda_3(this$Button_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Button = this$Button_0;
  }
  Coroutine$Button_init$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Button_init$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Button_init$lambda_3.prototype.constructor = Coroutine$Button_init$lambda_3;
  Coroutine$Button_init$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$this$Button.down = false;
            return this.local$this$Button.updateState_0(), Unit;
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
  Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [IHtml, IText, Widget]
  };
  function button($receiver, text, skin) {
    if (text === void 0)
      text = 'Button';
    if (skin === void 0)
      skin = $receiver.skin;
    return new Button($receiver, skin, text);
  }
  function KorgeLightComponents(uiFactory) {
    LightComponents.call(this);
    this.uiFactory = uiFactory;
    this.views = this.uiFactory.views;
  }
  KorgeLightComponents.prototype.create_3wpq0m$ = function (type) {
    var tmp$;
    switch (type.name) {
      case 'BUTTON':
        tmp$ = button(this.uiFactory);
        break;
      case 'CONTAINER':
        tmp$ = new FixedSizeContainer();
        break;
      case 'FRAME':
        tmp$ = new FixedSizeContainer();
        break;
      case 'LABEL':
        tmp$ = label(this.uiFactory, '');
        break;
      default:tmp$ = new FixedSizeContainer();
        break;
    }
    var handle = tmp$;
    return new LightComponents$LightComponentInfo(handle);
  };
  KorgeLightComponents.prototype.setBounds_tiwvvj$ = function (c, x, y, width, height) {
    var tmp$;
    var view = Kotlin.isType(tmp$ = c, View) ? tmp$ : throwCCE();
    view.x = x;
    view.y = y;
    view.width = width;
    view.height = height;
  };
  KorgeLightComponents.prototype.setProperty_qiitpl$ = function (c, key, value) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var view = Kotlin.isType(tmp$ = c, View) ? tmp$ : throwCCE();
    if (equals(key, LightProperty.Companion.TEXT))
      (tmp$_2 = Kotlin.isType(tmp$_1 = view, IText) ? tmp$_1 : null) != null ? (tmp$_2.text = typeof (tmp$_0 = value) === 'string' ? tmp$_0 : throwCCE()) : null;
  };
  function KorgeLightComponents$registerEventKind$lambda(closure$ed, closure$mouseEvent) {
    return function (it) {
      var tmp$ = closure$ed;
      var $receiver = closure$mouseEvent;
      $receiver.type = MouseEvent$Type.CLICK;
      $receiver.button = MouseButton.LEFT;
      $receiver.x = 0;
      $receiver.y = 0;
      tmp$.dispatch_dt5jzj$(getKClass(MouseEvent), $receiver);
      return Unit;
    };
  }
  KorgeLightComponents.prototype.registerEventKind_7v19vx$ = function (c, clazz, ed) {
    var tmp$;
    var view = Kotlin.isType(tmp$ = c, View) ? tmp$ : throwCCE();
    var mouseEvent = new MouseEvent();
    if (equals(clazz, getKClass(MouseEvent)))
      return closeable(listOf_0(get_mouse(view).onClick.invoke_qlkmfe$(KorgeLightComponents$registerEventKind$lambda(ed, mouseEvent))));
    return LightComponents.prototype.registerEventKind_7v19vx$.call(this, c, clazz, ed);
  };
  KorgeLightComponents.prototype.openURL_61zpoe$ = function (url) {
  };
  KorgeLightComponents.prototype.setParent_hfmcy5$ = function (c, parent) {
    var tmp$, tmp$_0;
    var view = Kotlin.isType(tmp$ = c, View) ? tmp$ : throwCCE();
    var parentView = (tmp$_0 = parent) == null || Kotlin.isType(tmp$_0, Container) ? tmp$_0 : null;
    parentView != null ? (parentView.addChild_l5rad2$(view), Unit) : null;
  };
  KorgeLightComponents.prototype.repaint_za3rmp$ = function (c) {
  };
  KorgeLightComponents.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeLightComponents',
    interfaces: [LightComponents]
  };
  function KoruiFrameView(factory, skin) {
    if (skin === void 0)
      skin = factory.skin;
    Widget.call(this, factory);
    this.frame_fqmdk9$_0 = this.frame_fqmdk9$_0;
    this.application_hscy8q$_0 = this.application_hscy8q$_0;
  }
  Object.defineProperty(KoruiFrameView.prototype, 'frame', {
    get: function () {
      if (this.frame_fqmdk9$_0 == null)
        return throwUPAE('frame');
      return this.frame_fqmdk9$_0;
    },
    set: function (frame) {
      this.frame_fqmdk9$_0 = frame;
    }
  });
  Object.defineProperty(KoruiFrameView.prototype, 'application', {
    get: function () {
      if (this.application_hscy8q$_0 == null)
        return throwUPAE('application');
      return this.application_hscy8q$_0;
    },
    set: function (application) {
      this.application_hscy8q$_0 = application;
    }
  });
  KoruiFrameView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KoruiFrameView',
    interfaces: [Widget]
  };
  function koruiFrame$lambda($receiver, continuation_0, suspended) {
    var instance = new Coroutine$koruiFrame$lambda($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$koruiFrame$lambda($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$koruiFrame$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$koruiFrame$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$koruiFrame$lambda.prototype.constructor = Coroutine$koruiFrame$lambda;
  Coroutine$koruiFrame$lambda.prototype.doResume = function () {
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
  var framePre = $module$korui_js.com.soywiz.korui.framePre_n94ab8$;
  var framePost = $module$korui_js.com.soywiz.korui.framePost_7vdf2s$;
  function frame$lambda($receiver) {
    return Unit;
  }
  function koruiFrame($receiver_0, builder_0, continuation_0, suspended) {
    var instance = new Coroutine$koruiFrame($receiver_0, builder_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$koruiFrame($receiver_0, builder_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$applicationView = void 0;
    this.local$$receiver = $receiver_0;
    this.local$builder = builder_0;
  }
  Coroutine$koruiFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$koruiFrame.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$koruiFrame.prototype.constructor = Coroutine$koruiFrame;
  Coroutine$koruiFrame.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$builder === void 0)
              this.local$builder = koruiFrame$lambda;
            this.local$applicationView = new KoruiFrameView(this.local$$receiver);
            this.state_0 = 2;
            this.result_0 = Application.Companion.invoke_8y393m$(new KorgeLightComponents(this.local$$receiver), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$applicationView.application = this.result_0;
            var $receiver = this.local$applicationView.application;
            var $receiver_0 = framePre($receiver, 'Main', this.local$$receiver.views.virtualWidth, this.local$$receiver.views.virtualHeight, null);
            frame$lambda($receiver_0);
            framePost($receiver, $receiver_0);
            this.local$applicationView.frame = $receiver_0;
            var tmp$;
            this.local$applicationView.plusAssign_l5rad2$(Kotlin.isType(tmp$ = this.local$applicationView.frame.handle, View) ? tmp$ : throwCCE());
            this.state_0 = 3;
            this.result_0 = this.local$builder(this.local$applicationView.frame, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.local$applicationView;
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
  function Label(factory, skin, initialText) {
    if (skin === void 0)
      skin = factory.skin;
    if (initialText === void 0)
      initialText = 'Label';
    Widget.call(this, factory, skin);
    var $receiver = Text$Companion_getInstance().invoke_fnvenn$(initialText);
    this.plusAssign_l5rad2$($receiver);
    this.textView = $receiver;
    this.text_4zpedr$_0 = new RedirectMutableField_init(getPropertyCallableRef('text', 0, function ($receiver) {
      return $receiver.text;
    }.bind(null, this.textView), function ($receiver, value) {
      $receiver.text = value;
    }.bind(null, this.textView)));
    this.html_561l1p$_0 = new RedirectMutableField_init(getPropertyCallableRef('html', 0, function ($receiver) {
      return $receiver.html;
    }.bind(null, this.textView), function ($receiver, value) {
      $receiver.html = value;
    }.bind(null, this.textView)));
    this.format_ptn6op$_0 = new RedirectMutableField_init(getPropertyCallableRef('format', 0, function ($receiver) {
      return $receiver.format;
    }.bind(null, this.textView), function ($receiver, value) {
      $receiver.format = value;
    }.bind(null, this.textView)));
    var tmp$;
    Html_getInstance();
    tmp$ = Html$Alignment$Companion_getInstance().MIDDLE_CENTER;
    this.format = new Html$Format(void 0, color.Colors.BLACK, void 0, 16, void 0, void 0, tmp$);
  }
  Object.defineProperty(Label.prototype, 'text', {
    get: function () {
      return this.text_4zpedr$_0.redirect.get();
    },
    set: function (text) {
      this.text_4zpedr$_0.redirect.set(text);
    }
  });
  Object.defineProperty(Label.prototype, 'html', {
    get: function () {
      return this.html_561l1p$_0.redirect.get();
    },
    set: function (html) {
      this.html_561l1p$_0.redirect.set(html);
    }
  });
  Object.defineProperty(Label.prototype, 'format', {
    get: function () {
      return this.format_ptn6op$_0.redirect.get();
    },
    set: function (format) {
      this.format_ptn6op$_0.redirect.set(format);
    }
  });
  Label.prototype.updateSize = function () {
    var $this = this.textView.textBounds;
    var width = this.width;
    var height = this.height;
    $this.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height));
  };
  Label.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Label',
    interfaces: [IHtml, IText, Widget]
  };
  function label($receiver, text, skin) {
    if (text === void 0)
      text = 'Label';
    if (skin === void 0)
      skin = $receiver.skin;
    return new Label($receiver, skin, text);
  }
  function UIFactory() {
    this.skin_u8rcwz$_0 = this.skin_u8rcwz$_0;
  }
  Object.defineProperty(UIFactory.prototype, 'skin', {
    get: function () {
      if (this.skin_u8rcwz$_0 == null)
        return throwUPAE('skin');
      return this.skin_u8rcwz$_0;
    },
    set: function (skin) {
      this.skin_u8rcwz$_0 = skin;
    }
  });
  Object.defineProperty(UIFactory.prototype, 'views', {
    get: function () {
      return this.skin.views;
    }
  });
  UIFactory.prototype.init_y6n311$ = function (injector_0, continuation_0, suspended) {
    var instance = new Coroutine$init_y6n311$_1(this, injector_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$init_y6n311$_1($this, injector_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$injector = injector_0;
  }
  Coroutine$init_y6n311$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$init_y6n311$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$init_y6n311$_1.prototype.constructor = Coroutine$init_y6n311$_1;
  Coroutine$init_y6n311$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = getPath(this.local$injector, getKClass(UISkin), 'korge-ui.png', this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.skin = this.result_0;
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
  UIFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UIFactory',
    interfaces: [InjectorAsyncDependency]
  };
  function registerUIFactory$lambda($receiver, continuation_0, suspended) {
    var instance = new Coroutine$registerUIFactory$lambda($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$registerUIFactory$lambda($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$registerUIFactory$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$registerUIFactory$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$registerUIFactory$lambda.prototype.constructor = Coroutine$registerUIFactory$lambda;
  Coroutine$registerUIFactory$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new UIFactory();
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
  function registerUIFactory($receiver) {
    $receiver.views.injector.mapSingleton_siz2e9$(getKClass(UIFactory), registerUIFactory$lambda);
  }
  function UISkin(views, texture) {
    this.views = views;
    this.texture = texture;
    this.buttonOut = this.texture.sliceWithSize_tjonv8$(0, 0, 64, 64);
    this.buttonOver = this.texture.sliceWithSize_tjonv8$(64, 0, 64, 64);
    this.buttonDown = this.texture.sliceWithSize_tjonv8$(128, 0, 64, 64);
  }
  function UISkin$Factory(vpath, resourcesRoot, views) {
    this.vpath_0 = vpath;
    this.resourcesRoot_0 = resourcesRoot;
    this.views_8be2vx$ = views;
  }
  UISkin$Factory.prototype.create = function (continuation_0, suspended) {
    var instance = new Coroutine$create(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$create($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$rpath = void 0;
  }
  Coroutine$create.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$create.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$create.prototype.constructor = Coroutine$create;
  Coroutine$create.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.local$rpath = this.$this.vpath_0.path;
            this.state_0 = 1;
            this.result_0 = readBitmapSlice(this.$this.resourcesRoot_0.get_61zpoe$(this.local$rpath), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var tex = this.result_0;
            println('UISkin.Factory: ' + this.local$rpath);
            this.local$tmp$ = tex;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              printStackTrace(e);
              println('UISkin.Factory: #WHITE#');
              this.local$tmp$ = bitmap.Bitmaps.white;
            }
             else
              throw e;
            this.state_0 = 3;
            continue;
          case 3:
            var texture = this.local$tmp$;
            return new UISkin(this.$this.views_8be2vx$, texture);
          case 4:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 4) {
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
  UISkin$Factory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Factory',
    interfaces: [AsyncFactory]
  };
  UISkin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UISkin',
    interfaces: []
  };
  function getUISkin($receiver_0, path_0, continuation_0, suspended) {
    var instance = new Coroutine$getUISkin($receiver_0, path_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$getUISkin($receiver_0, path_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$$receiver = $receiver_0;
    this.local$path = path_0;
  }
  Coroutine$getUISkin.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$getUISkin.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$getUISkin.prototype.constructor = Coroutine$getUISkin;
  Coroutine$getUISkin.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = new VPath(this.local$path);
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(ResourcesRoot), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
            this.local$tmp$_0 = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.get_wx4qjr$(getKClass(Views), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.result_0;
            return new UISkin$Factory(this.local$tmp$, this.local$tmp$_0, this.result_0);
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
  function Widget(factory, skin) {
    if (skin === void 0)
      skin = factory.skin;
    FixedSizeContainer.call(this);
    this.factory = factory;
    this.skin = skin;
    this.width_1xfeqk$_0 = 100.0;
    this.height_k548j9$_0 = 32.0;
  }
  Object.defineProperty(Widget.prototype, 'width', {
    get: function () {
      return this.width_1xfeqk$_0;
    },
    set: function (value) {
      this.width_1xfeqk$_0 = value;
      this.updateSize();
    }
  });
  Object.defineProperty(Widget.prototype, 'height', {
    get: function () {
      return this.height_k548j9$_0;
    },
    set: function (value) {
      this.height_k548j9$_0 = value;
      this.updateSize();
    }
  });
  Widget.prototype.updateSize = function () {
  };
  Widget.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Widget',
    interfaces: [FixedSizeContainer]
  };
  function CancellableGroup() {
    this.cancellables_0 = ArrayList_init_1();
  }
  CancellableGroup.prototype.plusAssign_9rogis$ = function (c) {
    this.cancellables_0.add_11rb$(c);
  };
  CancellableGroup.prototype.plusAssign_72hza6$ = function (c) {
    var $receiver = this.cancellables_0;
    var element = cancellable(c);
    $receiver.add_11rb$(element);
  };
  CancellableGroup.prototype.addCancellable_9rogis$ = function (c) {
    this.cancellables_0.add_11rb$(c);
  };
  CancellableGroup.prototype.addCloseable_72hza6$ = function (c) {
    var $receiver = this.cancellables_0;
    var element = cancellable(c);
    $receiver.add_11rb$(element);
  };
  CancellableGroup.prototype.cancel_tcv7n7$$default = function (e) {
    cancel(this.cancellables_0, e);
  };
  CancellableGroup.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CancellableGroup',
    interfaces: [Cancellable]
  };
  function AutoClose(callback_0, continuation_0, suspended) {
    var instance = new Coroutine$AutoClose(callback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$AutoClose(callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$group = void 0;
    this.local$callback = callback_0;
  }
  Coroutine$AutoClose.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$AutoClose.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$AutoClose.prototype.constructor = Coroutine$AutoClose;
  Coroutine$AutoClose.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$group = new CancellableGroup();
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.local$callback(this.local$group, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
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
            this.local$group.cancel_tcv7n7$();
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 6:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 6) {
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
  function toBool2($receiver, obj) {
    if (typeof obj === 'boolean')
      return obj;
    else if (typeof obj === 'string') {
      switch (obj.toLowerCase()) {
        case '':
        case '0':
        case 'false':
        case 'ko':
        case 'no':
          return false;
        default:return true;
      }
    }
     else
      return lang.Dynamic.toInt_s8jyv4$(obj) !== 0;
  }
  function BlendMode(name, ordinal, factors) {
    Enum.call(this);
    this.factors = factors;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BlendMode_initFields() {
    BlendMode_initFields = function () {
    };
    BlendMode$INHERIT_instance = new BlendMode('INHERIT', 0, AG$Blending.Companion.NORMAL);
    BlendMode$NONE_instance = new BlendMode('NONE', 1, AG$AG$Blending_init(AG$BlendFactor.ONE, AG$BlendFactor.ZERO));
    BlendMode$NORMAL_instance = new BlendMode('NORMAL', 2, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.ONE_MINUS_SOURCE_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE_MINUS_SOURCE_ALPHA));
    BlendMode$ADD_instance = new BlendMode('ADD', 3, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$MULTIPLY_instance = new BlendMode('MULTIPLY', 4, AG$AG$Blending_init(AG$BlendFactor.DESTINATION_COLOR, AG$BlendFactor.ONE_MINUS_SOURCE_ALPHA));
    BlendMode$SCREEN_instance = new BlendMode('SCREEN', 5, AG$AG$Blending_init(AG$BlendFactor.ONE, AG$BlendFactor.ONE_MINUS_SOURCE_COLOR));
    BlendMode$ERASE_instance = new BlendMode('ERASE', 6, AG$AG$Blending_init(AG$BlendFactor.ZERO, AG$BlendFactor.ONE_MINUS_SOURCE_ALPHA));
    BlendMode$MASK_instance = new BlendMode('MASK', 7, AG$AG$Blending_init(AG$BlendFactor.ZERO, AG$BlendFactor.SOURCE_ALPHA));
    BlendMode$BELOW_instance = new BlendMode('BELOW', 8, AG$AG$Blending_init(AG$BlendFactor.ONE_MINUS_DESTINATION_ALPHA, AG$BlendFactor.DESTINATION_ALPHA));
    BlendMode$SUBTRACT_instance = new BlendMode('SUBTRACT', 9, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE, AG$BlendEquation.REVERSE_SUBTRACT));
    BlendMode$LIGHTEN_instance = new BlendMode('LIGHTEN', 10, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$DARKEN_instance = new BlendMode('DARKEN', 11, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$DIFFERENCE_instance = new BlendMode('DIFFERENCE', 12, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$INVERT_instance = new BlendMode('INVERT', 13, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$ALPHA_instance = new BlendMode('ALPHA', 14, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$HARDLIGHT_instance = new BlendMode('HARDLIGHT', 15, new AG$Blending(AG$BlendFactor.SOURCE_ALPHA, AG$BlendFactor.DESTINATION_ALPHA, AG$BlendFactor.ONE, AG$BlendFactor.ONE));
    BlendMode$Companion_getInstance();
  }
  var BlendMode$INHERIT_instance;
  function BlendMode$INHERIT_getInstance() {
    BlendMode_initFields();
    return BlendMode$INHERIT_instance;
  }
  var BlendMode$NONE_instance;
  function BlendMode$NONE_getInstance() {
    BlendMode_initFields();
    return BlendMode$NONE_instance;
  }
  var BlendMode$NORMAL_instance;
  function BlendMode$NORMAL_getInstance() {
    BlendMode_initFields();
    return BlendMode$NORMAL_instance;
  }
  var BlendMode$ADD_instance;
  function BlendMode$ADD_getInstance() {
    BlendMode_initFields();
    return BlendMode$ADD_instance;
  }
  var BlendMode$MULTIPLY_instance;
  function BlendMode$MULTIPLY_getInstance() {
    BlendMode_initFields();
    return BlendMode$MULTIPLY_instance;
  }
  var BlendMode$SCREEN_instance;
  function BlendMode$SCREEN_getInstance() {
    BlendMode_initFields();
    return BlendMode$SCREEN_instance;
  }
  var BlendMode$ERASE_instance;
  function BlendMode$ERASE_getInstance() {
    BlendMode_initFields();
    return BlendMode$ERASE_instance;
  }
  var BlendMode$MASK_instance;
  function BlendMode$MASK_getInstance() {
    BlendMode_initFields();
    return BlendMode$MASK_instance;
  }
  var BlendMode$BELOW_instance;
  function BlendMode$BELOW_getInstance() {
    BlendMode_initFields();
    return BlendMode$BELOW_instance;
  }
  var BlendMode$SUBTRACT_instance;
  function BlendMode$SUBTRACT_getInstance() {
    BlendMode_initFields();
    return BlendMode$SUBTRACT_instance;
  }
  var BlendMode$LIGHTEN_instance;
  function BlendMode$LIGHTEN_getInstance() {
    BlendMode_initFields();
    return BlendMode$LIGHTEN_instance;
  }
  var BlendMode$DARKEN_instance;
  function BlendMode$DARKEN_getInstance() {
    BlendMode_initFields();
    return BlendMode$DARKEN_instance;
  }
  var BlendMode$DIFFERENCE_instance;
  function BlendMode$DIFFERENCE_getInstance() {
    BlendMode_initFields();
    return BlendMode$DIFFERENCE_instance;
  }
  var BlendMode$INVERT_instance;
  function BlendMode$INVERT_getInstance() {
    BlendMode_initFields();
    return BlendMode$INVERT_instance;
  }
  var BlendMode$ALPHA_instance;
  function BlendMode$ALPHA_getInstance() {
    BlendMode_initFields();
    return BlendMode$ALPHA_instance;
  }
  var BlendMode$HARDLIGHT_instance;
  function BlendMode$HARDLIGHT_getInstance() {
    BlendMode_initFields();
    return BlendMode$HARDLIGHT_instance;
  }
  function BlendMode$Companion() {
    BlendMode$Companion_instance = this;
    this.OVERLAY = BlendMode$NORMAL_getInstance();
    var $receiver = BlendMode$values();
    var destination = ArrayList_init_0($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.ordinal, item));
    }
    this.BY_ORDINAL = toMap(destination);
  }
  BlendMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BlendMode$Companion_instance = null;
  function BlendMode$Companion_getInstance() {
    BlendMode_initFields();
    if (BlendMode$Companion_instance === null) {
      new BlendMode$Companion();
    }
    return BlendMode$Companion_instance;
  }
  BlendMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendMode',
    interfaces: [Enum]
  };
  function BlendMode$values() {
    return [BlendMode$INHERIT_getInstance(), BlendMode$NONE_getInstance(), BlendMode$NORMAL_getInstance(), BlendMode$ADD_getInstance(), BlendMode$MULTIPLY_getInstance(), BlendMode$SCREEN_getInstance(), BlendMode$ERASE_getInstance(), BlendMode$MASK_getInstance(), BlendMode$BELOW_getInstance(), BlendMode$SUBTRACT_getInstance(), BlendMode$LIGHTEN_getInstance(), BlendMode$DARKEN_getInstance(), BlendMode$DIFFERENCE_getInstance(), BlendMode$INVERT_getInstance(), BlendMode$ALPHA_getInstance(), BlendMode$HARDLIGHT_getInstance()];
  }
  BlendMode.values = BlendMode$values;
  function BlendMode$valueOf(name) {
    switch (name) {
      case 'INHERIT':
        return BlendMode$INHERIT_getInstance();
      case 'NONE':
        return BlendMode$NONE_getInstance();
      case 'NORMAL':
        return BlendMode$NORMAL_getInstance();
      case 'ADD':
        return BlendMode$ADD_getInstance();
      case 'MULTIPLY':
        return BlendMode$MULTIPLY_getInstance();
      case 'SCREEN':
        return BlendMode$SCREEN_getInstance();
      case 'ERASE':
        return BlendMode$ERASE_getInstance();
      case 'MASK':
        return BlendMode$MASK_getInstance();
      case 'BELOW':
        return BlendMode$BELOW_getInstance();
      case 'SUBTRACT':
        return BlendMode$SUBTRACT_getInstance();
      case 'LIGHTEN':
        return BlendMode$LIGHTEN_getInstance();
      case 'DARKEN':
        return BlendMode$DARKEN_getInstance();
      case 'DIFFERENCE':
        return BlendMode$DIFFERENCE_getInstance();
      case 'INVERT':
        return BlendMode$INVERT_getInstance();
      case 'ALPHA':
        return BlendMode$ALPHA_getInstance();
      case 'HARDLIGHT':
        return BlendMode$HARDLIGHT_getInstance();
      default:throwISE('No enum constant com.soywiz.korge.view.BlendMode.' + name);
    }
  }
  BlendMode.valueOf_61zpoe$ = BlendMode$valueOf;
  var camera = defineInlineFunction('korge-js.com.soywiz.korge.view.camera_crl2ny$', wrapFunction(function () {
    var Camera_init = _.com.soywiz.korge.view.Camera;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    return function ($receiver, callback) {
      var $receiver_0 = addTo(new Camera_init(), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function Camera() {
    Container.call(this);
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    this.width_lep6zw$_0 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.stage) != null ? tmp$.views : null) != null ? tmp$_0.virtualWidth : null) != null ? tmp$_1 : null) != null ? tmp$_2 : 100.0;
    this.height_fhenp7$_0 = (tmp$_6 = (tmp$_5 = (tmp$_4 = (tmp$_3 = this.stage) != null ? tmp$_3.views : null) != null ? tmp$_4.virtualHeight : null) != null ? tmp$_5 : null) != null ? tmp$_6 : 100.0;
  }
  Object.defineProperty(Camera.prototype, 'width', {
    get: function () {
      return this.width_lep6zw$_0;
    },
    set: function (width) {
      this.width_lep6zw$_0 = width;
    }
  });
  Object.defineProperty(Camera.prototype, 'height', {
    get: function () {
      return this.height_fhenp7$_0;
    },
    set: function (height) {
      this.height_fhenp7$_0 = height;
    }
  });
  Camera.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    var width = this.width;
    var height = this.height;
    out.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height));
  };
  Camera.prototype.getLocalMatrixFittingGlobalRect_2da8yn$ = function (rect) {
    var tmp$, tmp$_0, tmp$_1;
    var destinationBounds = rect;
    var mat = (tmp$_1 = (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.globalMatrix : null) != null ? tmp$_0.clone() : null) != null ? tmp$_1 : new Matrix2d();
    mat.translate_lu1900$(-destinationBounds.x, -destinationBounds.y);
    mat.scale_lu1900$(this.width / destinationBounds.width, this.height / destinationBounds.height);
    return mat;
  };
  Camera.prototype.getLocalMatrixFittingView_gohfih$ = function (view) {
    var tmp$, tmp$_0;
    return this.getLocalMatrixFittingGlobalRect_2da8yn$((tmp$_0 = (tmp$ = view != null ? view : this.stage) != null ? tmp$.globalBounds : null) != null ? tmp$_0 : Rectangle_init(0, 0, 100, 100));
  };
  Camera.prototype.setTo_gohfih$ = function (view) {
    this.localMatrix = this.getLocalMatrixFittingView_gohfih$(view);
  };
  Camera.prototype.setTo_2da8yn$ = function (rect) {
    this.localMatrix = this.getLocalMatrixFittingGlobalRect_2da8yn$(rect);
  };
  Camera.prototype.tweenTo_lp8izu$ = function (view, vs, time, easing, continuation) {
    if (easing === void 0) {
      easing = package$tween.Easings.LINEAR;
    }
    return tween(this, [get_3(getPropertyCallableRef('localMatrix', 0, function ($receiver) {
      return $receiver.localMatrix;
    }.bind(null, this), function ($receiver, value) {
      $receiver.localMatrix = value;
    }.bind(null, this)), this.localMatrix.clone(), this.getLocalMatrixFittingView_gohfih$(view))].concat(vs), time, easing, void 0, continuation);
  };
  Camera.prototype.tweenTo_4pdi80$ = function (rect, vs, time, easing, continuation) {
    if (easing === void 0) {
      easing = package$tween.Easings.LINEAR;
    }
    return tween(this, [get_3(getPropertyCallableRef('localMatrix', 0, function ($receiver) {
      return $receiver.localMatrix;
    }.bind(null, this), function ($receiver, value) {
      $receiver.localMatrix = value;
    }.bind(null, this)), this.localMatrix.clone(), this.getLocalMatrixFittingGlobalRect_2da8yn$(rect))].concat(vs), time, easing, void 0, continuation);
  };
  Camera.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Camera',
    interfaces: [Container]
  };
  var container = defineInlineFunction('korge-js.com.soywiz.korge.view.container_exzb34$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Container_init = _.com.soywiz.korge.view.Container;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    function container$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, callback) {
      if (callback === void 0)
        callback = container$lambda;
      var $receiver_0 = addTo(new Container_init(), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function Container() {
    View.call(this);
    this.children = ArrayList_init_1();
    this.tempMatrix_6lfzyf$_0 = new Matrix2d();
    this.bb_8tnmvw$_0 = new BoundsBuilder();
    this.tempRect_nf3rlo$_0 = new Rectangle();
  }
  Object.defineProperty(Container.prototype, 'containerRoot', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.containerRoot : null) != null ? tmp$_0 : this;
    }
  });
  Container.prototype.swapChildren_1kpf2s$ = function (view1, view2) {
    if (equals(view1.parent, view2.parent) && equals(view1.parent, this)) {
      var index1 = view1.index;
      var index2 = view2.index;
      var tmp$ = this.children;
      view2.index = index1;
      tmp$.set_wxm5ur$(index1, view2);
      var tmp$_0 = this.children;
      view1.index = index2;
      tmp$_0.set_wxm5ur$(index2, view1);
    }
  };
  Container.prototype.addChildAt_pwlnko$ = function (view, index) {
    var tmp$;
    var index_0 = clamp(index, 0, this.children.size);
    view.removeFromParent();
    view.index = index_0;
    this.children.add_wxm5ur$(index_0, view);
    tmp$ = this.children.size;
    for (var n = index_0 + 1 | 0; n < tmp$; n++)
      this.children.get_za3lpa$(n).index = n;
    view.parent = this;
    view.invalidate();
  };
  Container.prototype.getChildIndex_l5rad2$ = function (view) {
    return view.index;
  };
  Container.prototype.getChildAt_za3lpa$ = function (index) {
    return this.children.get_za3lpa$(index);
  };
  Container.prototype.getChildByName_61zpoe$ = function (name) {
    var $receiver = this.children;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (equals(element.name, name)) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    return firstOrNull$result;
  };
  Container.prototype.removeChild_gohfih$ = function (view) {
    if (equals(view != null ? view.parent : null, this)) {
      view != null ? (view.removeFromParent(), Unit) : null;
    }
  };
  Container.prototype.removeChildren = function () {
    var tmp$;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      child.parent = null;
      child.index = -1;
    }
    this.children.clear();
  };
  Container.prototype.addChild_l5rad2$ = function (view) {
    this.plusAssign_l5rad2$(view);
  };
  Container.prototype.invalidate = function () {
    var tmp$;
    this.dirtyVertices = true;
    this.validGlobal_8be2vx$ = false;
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      if (!child.validGlobal_8be2vx$)
        continue;
      child.validGlobal_8be2vx$ = false;
      child.invalidate();
    }
  };
  Container.prototype.plusAssign_l5rad2$ = function (view) {
    view.removeFromParent();
    view.index = this.children.size;
    this.children.add_11rb$(view);
    view.parent = this;
    view.invalidate();
  };
  Container.prototype.minusAssign_l5rad2$ = function (view) {
    if (equals(view.parent, this))
      view.removeFromParent();
  };
  function Container$render$lambda(closure$ctx) {
    return function (child) {
      child.render_8isv09$(closure$ctx);
      return Unit;
    };
  }
  Container.prototype.render_8isv09$ = function (ctx) {
    if (!this.visible)
      return;
    var n = 0;
    while (n < this.children.size) {
      Container$render$lambda(ctx)(this.children.get_za3lpa$(n));
      n = n + 1 | 0;
    }
  };
  Container.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var tmp$, tmp$_0;
    var $receiver = reversed(this.children);
    var predicate = getPropertyCallableRef('visible', 1, function ($receiver) {
      return $receiver.visible;
    }, function ($receiver, value) {
      $receiver.visible = value;
    });
    var destination = ArrayList_init_1();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (predicate(element))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      tmp$_0 = child.hitTest_lu1900$(x, y);
      if (tmp$_0 == null) {
        continue;
      }
      return tmp$_0;
    }
    return null;
  };
  Container.prototype.hitTestBoundingInternal_lu1900$ = function (x, y) {
    var tmp$, tmp$_0;
    var $receiver = reversed(this.children);
    var predicate = getPropertyCallableRef('visible', 1, function ($receiver) {
      return $receiver.visible;
    }, function ($receiver, value) {
      $receiver.visible = value;
    });
    var destination = ArrayList_init_1();
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var element = tmp$_1.next();
      if (predicate(element))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      tmp$_0 = child.hitTestBounding_lu1900$(x, y);
      if (tmp$_0 == null) {
        continue;
      }
      return tmp$_0;
    }
    return null;
  };
  function Container$getLocalBoundsInternal$lambda(this$Container) {
    return function (child) {
      child.getBounds_tvgmbo$(child, this$Container.tempRect_nf3rlo$_0);
      this$Container.bb_8tnmvw$_0.add_2da8yn$(this$Container.tempRect_nf3rlo$_0);
      return Unit;
    };
  }
  Container.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    this.bb_8tnmvw$_0.reset();
    var n = 0;
    while (n < this.children.size) {
      Container$getLocalBoundsInternal$lambda(this)(this.children.get_za3lpa$(n));
      n = n + 1 | 0;
    }
    this.bb_8tnmvw$_0.getBounds_2da8yn$(out);
  };
  function Container$dispatch$lambda(closure$clazz, closure$event) {
    return function (child) {
      child.dispatch_dt5jzj$(closure$clazz, closure$event);
      return Unit;
    };
  }
  Container.prototype.dispatch_dt5jzj$ = function (clazz, event) {
    var n = 0;
    while (n < this.children.size) {
      Container$dispatch$lambda(clazz, event)(this.children.get_za3lpa$(this.children.size - n - 1 | 0));
      n = n + 1 | 0;
    }
    View.prototype.dispatch_dt5jzj$.call(this, clazz, event);
  };
  Container.prototype.safeForEachChildren_74ked7$_0 = function (callback) {
    var n = 0;
    while (n < this.children.size) {
      callback(this.children.get_za3lpa$(n));
      n = n + 1 | 0;
    }
  };
  Container.prototype.safeForEachChildrenReversed_95s7s7$_0 = function (callback) {
    var n = 0;
    while (n < this.children.size) {
      callback(this.children.get_za3lpa$(this.children.size - n - 1 | 0));
      n = n + 1 | 0;
    }
  };
  Container.prototype.createInstance = function () {
    return new Container();
  };
  Container.prototype.clone = function () {
    var tmp$;
    var out = View.prototype.clone.call(this);
    tmp$ = this.children.iterator();
    while (tmp$.hasNext()) {
      var child = tmp$.next();
      plusAssign(out, child.clone());
    }
    return out;
  };
  Container.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Container',
    interfaces: [View]
  };
  function addTo($receiver, parent) {
    parent.plusAssign_l5rad2$($receiver);
    return $receiver;
  }
  function FixedSizeContainer(width, height) {
    if (width === void 0)
      width = 100.0;
    if (height === void 0)
      height = 100.0;
    Container.call(this);
    this.width_qh61hh$_0 = width;
    this.height_ujosw2$_0 = height;
  }
  Object.defineProperty(FixedSizeContainer.prototype, 'width', {
    get: function () {
      return this.width_qh61hh$_0;
    },
    set: function (width) {
      this.width_qh61hh$_0 = width;
    }
  });
  Object.defineProperty(FixedSizeContainer.prototype, 'height', {
    get: function () {
      return this.height_ujosw2$_0;
    },
    set: function (height) {
      this.height_ujosw2$_0 = height;
    }
  });
  FixedSizeContainer.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    var width = this.width;
    var height = this.height;
    out.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height));
  };
  FixedSizeContainer.prototype.toString = function () {
    var out = Container.prototype.toString.call(this);
    out += ':size=(' + get_niceStr(this.width) + 'x' + get_niceStr(this.height) + ')';
    return out;
  };
  FixedSizeContainer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FixedSizeContainer',
    interfaces: [Container]
  };
  function plusAssign($receiver, view) {
    var tmp$;
    var container = (tmp$ = $receiver) == null || Kotlin.isType(tmp$, Container) ? tmp$ : null;
    if (view != null)
      container != null ? (container.addChild_l5rad2$(view), Unit) : null;
  }
  function Fonts() {
    Fonts$Companion_getInstance();
    this.fonts = HashMap_init();
  }
  Fonts.prototype.registerFont_lfzjqc$ = function (name, bmp) {
    var tmp$ = this.fonts;
    var key = name.toLowerCase();
    tmp$.put_xwzc9p$(key, bmp);
  };
  Fonts.prototype.getBitmapFont_bm4lxs$ = function (name, size) {
    var tmp$;
    var nameLC = name.toLowerCase();
    var $receiver = this.fonts;
    var tmp$_0;
    if (!(Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(nameLC)) {
      this.registerFont_lfzjqc$(name, convert(font.BitmapFontGenerator.generate_h6sd2a$(name, Math_0.min(size, 32), font.BitmapFontGenerator.LATIN_ALL)));
    }
    return (tmp$ = this.fonts.get_11rb$(nameLC)) != null ? tmp$ : Fonts$Companion_getInstance().defaultFont;
  };
  Fonts.prototype.getBitmapFont_a1ixm2$ = function (face, size) {
    if (Kotlin.isType(face, Html$FontFace$Named))
      return this.getBitmapFont_bm4lxs$(face.name, size);
    else if (Kotlin.isType(face, Html$FontFace$Bitmap))
      return face.font;
    else
      return invalidOp('Unsupported font face: ' + face);
  };
  Fonts.prototype.getBitmapFont_ktnn5$ = function (format) {
    return this.getBitmapFont_a1ixm2$(format.computedFace, format.computedSize);
  };
  Fonts.prototype.named_61zpoe$ = function (name) {
    return new Html$FontFace$Named(name);
  };
  Fonts.prototype.getBounds_1y5lg$ = function (text, format, out) {
    this.getBitmapFont_a1ixm2$(format.computedFace, format.computedSize).getBounds_1y5lg$(text, format, out);
  };
  function Fonts$Companion() {
    Fonts$Companion_instance = this;
    this.fonts = new Fonts();
    this.defaultFont_wlgtqf$_0 = lazy(Fonts$Companion$defaultFont$lambda);
  }
  Object.defineProperty(Fonts$Companion.prototype, 'defaultFont', {
    get: function () {
      return this.defaultFont_wlgtqf$_0.value;
    }
  });
  function Fonts$Companion$defaultFont$lambda() {
    return convert(font.BitmapFontGenerator.generate_h6sd2a$('Arial', 16, font.BitmapFontGenerator.LATIN_ALL));
  }
  Fonts$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Fonts$Companion_instance = null;
  function Fonts$Companion_getInstance() {
    if (Fonts$Companion_instance === null) {
      new Fonts$Companion();
    }
    return Fonts$Companion_instance;
  }
  Fonts.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fonts',
    interfaces: [Html$MetricsProvider]
  };
  var graphics = defineInlineFunction('korge-js.com.soywiz.korge.view.graphics_gtcasc$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Graphics_init = _.com.soywiz.korge.view.Graphics;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    function graphics$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, callback) {
      if (callback === void 0)
        callback = graphics$lambda;
      var $receiver_0 = addTo(new Graphics_init(), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function Graphics() {
    Image.call(this, bitmap.Bitmaps.transparent);
    this.shapes_0 = ArrayList_init_1();
    this.currentPath_0 = new GraphicsPath();
    this.fill_0 = null;
    this.dirty = true;
    this.sLeft_157jf2$_0 = 0.0;
    this.sTop_94rnwm$_0 = 0.0;
  }
  Graphics.prototype.dirty_o14v8n$ = defineInlineFunction('korge-js.com.soywiz.korge.view.Graphics.dirty_o14v8n$', wrapFunction(function () {
    return function (callback) {
      this.dirty = true;
      callback();
      return this;
    };
  }));
  Graphics.prototype.clear = function () {
    this.shapes_0.clear();
  };
  Graphics.prototype.lineStyle_881qbv$ = function (thickness, color, alpha) {
    this.dirty = true;
    return this;
  };
  Graphics.prototype.moveTo_lu1900$ = function (x, y) {
    this.dirty = true;
    this.currentPath_0.moveTo_lu1900$(x, y);
    return this;
  };
  Graphics.prototype.lineTo_lu1900$ = function (x, y) {
    this.dirty = true;
    this.currentPath_0.lineTo_lu1900$(x, y);
    return this;
  };
  Graphics.prototype.fill_n8gvc8$ = defineInlineFunction('korge-js.com.soywiz.korge.view.Graphics.fill_n8gvc8$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (color, alpha, callback) {
      if (alpha === void 0)
        alpha = 1.0;
      this.beginFill_kzd6w3$(color, numberToDouble(alpha));
      try {
        callback();
      }
      finally {
        this.endFill();
      }
    };
  }));
  Graphics.prototype.beginFill_kzd6w3$ = function (color, alpha) {
    this.dirty = true;
    this.fill_0 = new Context2d$Color(RGBA.Companion.invoke_tjonv8$(color.r, color.g, color.b, numberToInt(alpha * 255)));
    this.currentPath_0 = new GraphicsPath();
    return this;
  };
  Graphics.prototype.drawCircle_yvo9jy$ = function (x, y, r) {
    this.dirty = true;
    this.currentPath_0.circle_yvo9jy$(x, y, r);
    return this;
  };
  Graphics.prototype.drawRect_6y0v78$ = function (x, y, width, height) {
    this.dirty = true;
    this.currentPath_0.rect_6y0v78$(x, y, width, height);
    return this;
  };
  Graphics.prototype.drawShape_3wv7u0$ = function (shape) {
    this.dirty = true;
    this.currentPath_0.write_3wv7u0$(shape);
    return this;
  };
  Graphics.prototype.drawRoundRect_15yvbs$ = function (x, y, width, height, rx, ry) {
    this.dirty = true;
    this.currentPath_0.roundRect_15yvbs$(x, y, width, height, rx, ry);
    return this;
  };
  Graphics.prototype.drawEllipse_6y0v78$ = function (x, y, rw, rh) {
    this.dirty = true;
    this.currentPath_0.ellipse_6y0v78$(x, y, rw, rh);
    return this;
  };
  Graphics.prototype.endFill = function () {
    this.dirty = true;
    var tmp$;
    tmp$ = this.shapes_0;
    var tmp$_0;
    var element = new FillShape(this.currentPath_0, null, (tmp$_0 = this.fill_0) != null ? tmp$_0 : new Context2d$Color(color.Colors.RED), new Matrix2d());
    tmp$.add_11rb$(element);
    this.currentPath_0 = new GraphicsPath();
    return this;
  };
  Object.defineProperty(Graphics.prototype, 'sLeft', {
    get: function () {
      return this.sLeft_157jf2$_0;
    },
    set: function (sLeft) {
      this.sLeft_157jf2$_0 = sLeft;
    }
  });
  Object.defineProperty(Graphics.prototype, 'sTop', {
    get: function () {
      return this.sTop_94rnwm$_0;
    },
    set: function (sTop) {
      this.sTop_94rnwm$_0 = sTop;
    }
  });
  Graphics.prototype.render_8isv09$ = function (ctx) {
    if (this.dirty) {
      this.dirty = false;
      var $receiver = this.shapes_0;
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(getBounds(item));
      }
      var bounds_0 = bounds(destination);
      var image = NativeImage(numberToInt(bounds_0.width), numberToInt(bounds_0.height));
      var ctx_0 = image.getContext2d_6taknv$(true);
      try {
        var tmp$_0;
        tmp$_0 = this.shapes_0.iterator();
        while (tmp$_0.hasNext()) {
          var shape = tmp$_0.next();
          shape.draw_vuz2tk$(ctx_0);
        }
      }
      finally {
        ctx_0.dispose();
      }
      this.bitmap = slice(image);
      this.sLeft = bounds_0.x;
      this.sTop = bounds_0.y;
    }
    Image.prototype.render_8isv09$.call(this, ctx);
  };
  Graphics.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Graphics',
    interfaces: [Image]
  };
  var image = defineInlineFunction('korge-js.com.soywiz.korge.view.image_bsvffa$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Image_init = _.com.soywiz.korge.view.Image;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    function image$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, texture, anchorX, anchorY, callback) {
      if (anchorX === void 0)
        anchorX = 0.0;
      if (anchorY === void 0)
        anchorY = 0.0;
      if (callback === void 0)
        callback = image$lambda;
      var $receiver_0 = addTo(new Image_init(texture, anchorX, anchorY), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  var image_0 = defineInlineFunction('korge-js.com.soywiz.korge.view.image_aw59w$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var Image_init = _.com.soywiz.korge.view.Image_init_4o488k$;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    function image$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, texture, anchorX, anchorY, callback) {
      if (anchorX === void 0)
        anchorX = 0.0;
      if (anchorY === void 0)
        anchorY = 0.0;
      if (callback === void 0)
        callback = image$lambda;
      var $receiver_0 = addTo(Image_init(texture, anchorX, anchorY), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function Image(bitmap, anchorX, anchorY, hitShape, smoothing) {
    if (anchorX === void 0)
      anchorX = 0.0;
    if (anchorY === void 0)
      anchorY = anchorX;
    if (hitShape === void 0)
      hitShape = null;
    if (smoothing === void 0)
      smoothing = true;
    RectBase.call(this, anchorX, anchorY, hitShape, smoothing);
    this.baseBitmap = bitmap;
  }
  Object.defineProperty(Image.prototype, 'bitmap', {
    get: function () {
      return this.baseBitmap;
    },
    set: function (v) {
      this.baseBitmap = v;
    }
  });
  Object.defineProperty(Image.prototype, 'texture', {
    get: function () {
      return this.baseBitmap;
    },
    set: function (v) {
      this.baseBitmap = v;
    }
  });
  Object.defineProperty(Image.prototype, 'bwidth', {
    get: function () {
      return this.bitmap.width;
    }
  });
  Object.defineProperty(Image.prototype, 'bheight', {
    get: function () {
      return this.bitmap.height;
    }
  });
  Image.prototype.createInstance = function () {
    return new Image(this.bitmap, this.anchorX, this.anchorY, this.hitShape, this.smoothing);
  };
  Image.prototype.toString = function () {
    return RectBase.prototype.toString.call(this) + (':bitmap=' + this.bitmap);
  };
  Image.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Image',
    interfaces: [RectBase]
  };
  function Image_init(bitmap, anchorX, anchorY, hitShape, smoothing, $this) {
    if (anchorX === void 0)
      anchorX = 0.0;
    if (anchorY === void 0)
      anchorY = anchorX;
    if (hitShape === void 0)
      hitShape = null;
    if (smoothing === void 0)
      smoothing = true;
    $this = $this || Object.create(Image.prototype);
    Image.call($this, slice(bitmap), anchorX, anchorY, hitShape, smoothing);
    return $this;
  }
  var anchor = defineInlineFunction('korge-js.com.soywiz.korge.view.anchor_iay11n$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, ax, ay) {
      $receiver.anchorX = numberToDouble(ax);
      $receiver.anchorY = numberToDouble(ay);
      return $receiver;
    };
  }));
  var sliceFloat32Buffer = $module$kmem_js.com.soywiz.kmem.sliceFloat32Buffer_3gn6rj$;
  var ArrayBuffer_init = ArrayBuffer;
  function Mesh(texture, vertices, uvs, indices, drawMode) {
    if (texture === void 0)
      texture = null;
    if (vertices === void 0) {
      vertices = sliceFloat32Buffer(new ArrayBuffer_init((0 * 4 | 0) + 15 & -16));
    }
    if (uvs === void 0) {
      uvs = sliceFloat32Buffer(new ArrayBuffer_init((0 * 4 | 0) + 15 & -16));
    }
    if (indices === void 0)
      indices = Uint16BufferAlloc(0);
    if (drawMode === void 0)
      drawMode = Mesh$DrawModes$Triangles_getInstance();
    View.call(this);
    this.texture = texture;
    this.vertices = vertices;
    this.uvs = uvs;
    this.indices = indices;
    this.drawMode = drawMode;
    this.dirty = 0;
    this.indexDirty = 0;
    this.pivotX = 0.0;
    this.pivotY = 0.0;
  }
  function Mesh$DrawModes(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Mesh$DrawModes_initFields() {
    Mesh$DrawModes_initFields = function () {
    };
    Mesh$DrawModes$Triangles_instance = new Mesh$DrawModes('Triangles', 0);
    Mesh$DrawModes$TriangleStrip_instance = new Mesh$DrawModes('TriangleStrip', 1);
  }
  var Mesh$DrawModes$Triangles_instance;
  function Mesh$DrawModes$Triangles_getInstance() {
    Mesh$DrawModes_initFields();
    return Mesh$DrawModes$Triangles_instance;
  }
  var Mesh$DrawModes$TriangleStrip_instance;
  function Mesh$DrawModes$TriangleStrip_getInstance() {
    Mesh$DrawModes_initFields();
    return Mesh$DrawModes$TriangleStrip_instance;
  }
  Mesh$DrawModes.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DrawModes',
    interfaces: [Enum]
  };
  function Mesh$DrawModes$values() {
    return [Mesh$DrawModes$Triangles_getInstance(), Mesh$DrawModes$TriangleStrip_getInstance()];
  }
  Mesh$DrawModes.values = Mesh$DrawModes$values;
  function Mesh$DrawModes$valueOf(name) {
    switch (name) {
      case 'Triangles':
        return Mesh$DrawModes$Triangles_getInstance();
      case 'TriangleStrip':
        return Mesh$DrawModes$TriangleStrip_getInstance();
      default:throwISE('No enum constant com.soywiz.korge.view.Mesh.DrawModes.' + name);
    }
  }
  Mesh$DrawModes.valueOf_61zpoe$ = Mesh$DrawModes$valueOf;
  Object.defineProperty(Mesh.prototype, 'textureNN', {
    get: function () {
      var tmp$;
      return (tmp$ = this.texture) != null ? tmp$ : bitmap.Bitmaps.white;
    }
  });
  Mesh.prototype.render_8isv09$ = function (ctx) {
    var tmp$, tmp$_0;
    var m = this.renderMatrix;
    var cmul = this.colorMul;
    var cadd = this.colorAdd;
    var tva = new TexturedVertexArray(this.vertices.length / 2 | 0, new Int32Array(this.indices.size));
    tmp$ = tva.indices.length;
    for (var n = 0; n < tmp$; n++)
      tva.indices[n] = this.indices.get_za3lpa$(n);
    tmp$_0 = tva.vcount;
    for (var n_0 = 0; n_0 < tmp$_0; n_0++) {
      var x = this.vertices[(n_0 * 2 | 0) + 0 | 0] + this.pivotX;
      var y = this.vertices[(n_0 * 2 | 0) + 1 | 0] + this.pivotY;
      tva.select_za3lpa$(n_0).xy_lu1900$(m.transformX_lu1900$(x, y), m.transformY_lu1900$(x, y)).uv_dleff0$(this.uvs[(n_0 * 2 | 0) + 0 | 0], this.uvs[(n_0 * 2 | 0) + 1 | 0]).cols_3hpxcz$(cmul, cadd);
    }
    ctx.batch.drawVertices_wgeeum$(tva, ctx.getTex_9byvhi$(this.textureNN).base, true, this.blendMode.factors);
  };
  Mesh.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mesh',
    interfaces: [View]
  };
  function pivot($receiver, x, y) {
    $receiver.pivotX = x;
    $receiver.pivotY = y;
    return $receiver;
  }
  var ninePatch = defineInlineFunction('korge-js.com.soywiz.korge.view.ninePatch_yck3qr$', wrapFunction(function () {
    var NinePatch_init = _.com.soywiz.korge.view.NinePatch;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    return function ($receiver, tex, width, height, left, top, right, bottom, callback) {
      var $receiver_0 = addTo(new NinePatch_init(tex, width, height, left, top, right, bottom), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function NinePatch(tex, width, height, left, top, right, bottom) {
    View.call(this);
    this.tex = tex;
    this.width_8rytfn$_0 = width;
    this.height_35700a$_0 = height;
    this.left = left;
    this.top = top;
    this.right = right;
    this.bottom = bottom;
    this.smoothing = true;
    this.sLeft_0 = 0.0;
    this.sTop_0 = 0.0;
    this.posCuts = [MVector2_init(0, 0), new MVector2(this.left, this.top), new MVector2(1.0 - this.right, 1.0 - this.bottom), new MVector2(1.0, 1.0)];
    this.texCuts = [MVector2_init(0, 0), new MVector2(this.left, this.top), new MVector2(1.0 - this.right, 1.0 - this.bottom), new MVector2(1.0, 1.0)];
  }
  Object.defineProperty(NinePatch.prototype, 'width', {
    get: function () {
      return this.width_8rytfn$_0;
    },
    set: function (width) {
      this.width_8rytfn$_0 = width;
    }
  });
  Object.defineProperty(NinePatch.prototype, 'height', {
    get: function () {
      return this.height_35700a$_0;
    },
    set: function (height) {
      this.height_35700a$_0 = height;
    }
  });
  NinePatch.prototype.render_8isv09$ = function (ctx) {
    if (!this.visible)
      return;
    var texLeftWidth = this.tex.width * this.left;
    var texTopHeight = this.tex.height * this.top;
    var texRighttWidth = this.tex.width * this.right;
    var texBottomHeight = this.tex.height * this.bottom;
    var ratioX = this.width < this.tex.width ? this.width / this.tex.width : 1.0;
    var ratioY = this.height < this.tex.height ? this.height / this.tex.height : 1.0;
    var actualRatioX = Math_0.min(ratioX, ratioY);
    var actualRatioY = Math_0.min(ratioX, ratioY);
    this.posCuts[1].setTo_lu1900$(texLeftWidth * actualRatioX / this.width, texTopHeight * actualRatioY / this.height);
    this.posCuts[2].setTo_lu1900$(1.0 - texRighttWidth * actualRatioX / this.width, 1.0 - texBottomHeight * actualRatioY / this.height);
    ctx.batch.drawNinePatch_o0jtal$(ctx.getTex_9byvhi$(this.tex), this.sLeft_0, this.sTop_0, this.width, this.height, this.posCuts, this.texCuts, this.renderMatrix, this.smoothing, this.colorMul, this.colorAdd, this.blendMode.factors);
  };
  NinePatch.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    out.setTo_6y0v78$(this.sLeft_0, this.sTop_0, this.width, this.height);
  };
  NinePatch.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var sRight = this.sLeft_0 + this.width;
    var sBottom = this.sTop_0 + this.height;
    return this.checkGlobalBounds_15yvbs$(x, y, this.sLeft_0, this.sTop_0, sRight, sBottom) ? this : null;
  };
  NinePatch.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NinePatch',
    interfaces: [View]
  };
  var ninePatch_0 = defineInlineFunction('korge-js.com.soywiz.korge.view.ninePatch_acklyn$', wrapFunction(function () {
    var NinePatchEx_init = _.com.soywiz.korge.view.NinePatchEx;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    return function ($receiver, tex, width, height, callback) {
      var $receiver_0 = addTo(new NinePatchEx_init(tex, width, height), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  var ninePatch_1 = defineInlineFunction('korge-js.com.soywiz.korge.view.ninePatch_qlcbrr$', wrapFunction(function () {
    var NinePatchEx = _.com.soywiz.korge.view.NinePatchEx;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    return function ($receiver, ninePatch, width, height, callback) {
      if (width === void 0)
        width = ninePatch.dwidth;
      if (height === void 0)
        height = ninePatch.dheight;
      var $receiver_0 = addTo(NinePatchEx.Companion.invoke_yiqimz$(ninePatch, width, height), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function NinePatchEx(ninePatch, width, height) {
    NinePatchEx$Companion_getInstance();
    View.call(this);
    this.ninePatch = ninePatch;
    this.width_6391me$_0 = width;
    this.height_fe9w7x$_0 = height;
    this.smoothing = true;
    this.bounds_0 = RectangleInt_init();
  }
  Object.defineProperty(NinePatchEx.prototype, 'width', {
    get: function () {
      return this.width_6391me$_0;
    },
    set: function (width) {
      this.width_6391me$_0 = width;
    }
  });
  Object.defineProperty(NinePatchEx.prototype, 'height', {
    get: function () {
      return this.height_fe9w7x$_0;
    },
    set: function (height) {
      this.height_fe9w7x$_0 = height;
    }
  });
  function NinePatchEx$Companion() {
    NinePatchEx$Companion_instance = this;
  }
  NinePatchEx$Companion.prototype.invoke_yiqimz$ = function (ninePatch, width, height) {
    if (width === void 0)
      width = ninePatch.width;
    if (height === void 0)
      height = ninePatch.height;
    return new NinePatchEx(NinePatchEx$NinePatchEx$Tex_init(ninePatch), width, height);
  };
  NinePatchEx$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NinePatchEx$Companion_instance = null;
  function NinePatchEx$Companion_getInstance() {
    if (NinePatchEx$Companion_instance === null) {
      new NinePatchEx$Companion();
    }
    return NinePatchEx$Companion_instance;
  }
  function NinePatchEx$render$lambda$lambda(closure$ctx, this$NinePatchEx, closure$m) {
    return function (segment, x, y, width, height) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_2 = closure$ctx.batch;
      tmp$ = closure$ctx.getTex_9byvhi$(this$NinePatchEx.ninePatch.getSliceTex_5nxubg$(segment));
      tmp$_0 = this$NinePatchEx.colorMul;
      tmp$_1 = this$NinePatchEx.colorAdd;
      tmp$_2.drawQuad_bjriwo$(tmp$, x, y, width, height, closure$m, this$NinePatchEx.smoothing, tmp$_0, tmp$_1, this$NinePatchEx.blendMode.factors);
      return Unit;
    };
  }
  NinePatchEx.prototype.render_8isv09$ = function (ctx) {
    if (!this.visible)
      return;
    var m = this.renderMatrix;
    var xscale = m.a;
    var yscale = m.d;
    this.bounds_0.setTo_tjonv8$(0, 0, numberToInt(this.width * xscale), numberToInt(this.height * yscale));
    var a = m.a;
    var b = m.b;
    var c = m.c;
    var d = m.d;
    var tx = m.tx;
    var ty = m.ty;
    try {
      m.prescale_lu1900$(1.0 / xscale, 1.0 / yscale);
      this.ninePatch.info.computeScale_89dyev$(this.bounds_0, NinePatchEx$render$lambda$lambda(ctx, this, m));
    }
    finally {
      m.a = a;
      m.b = b;
      m.c = c;
      m.d = d;
      m.tx = tx;
      m.ty = ty;
    }
  };
  NinePatchEx.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    out.setTo_6y0v78$(0.0, 0.0, this.width, this.height);
  };
  function NinePatchEx$Tex(tex, info) {
    this.tex = tex;
    this.info = info;
    this.tex_xjwzxv$_fy3lch$_0 = new Extra$PropertyThis(void 0, NinePatchEx$Tex$tex$lambda(this));
  }
  Object.defineProperty(NinePatchEx$Tex.prototype, 'width', {
    get: function () {
      return this.info.width;
    }
  });
  Object.defineProperty(NinePatchEx$Tex.prototype, 'height', {
    get: function () {
      return this.info.height;
    }
  });
  var NinePatchEx$Tex$tex_metadata = new PropertyMetadata('tex');
  NinePatchEx$Tex.prototype.get_tex_xjwzxv$ = function ($receiver) {
    var $this = this.tex_xjwzxv$_fy3lch$_0;
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : NinePatchEx$Tex$tex_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = $this.name) != null ? tmp$_3 : NinePatchEx$Tex$tex_metadata.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        getValue_e5fciw$result = r;
        break getValue_e5fciw$break;
      }
      getValue_e5fciw$result = res;
    }
     while (false);
    return getValue_e5fciw$result;
  };
  NinePatchEx$Tex.prototype.getSliceTex_5nxubg$ = function (s) {
    return this.get_tex_xjwzxv$(s);
  };
  function NinePatchEx$Tex$tex$lambda(this$Tex) {
    return function ($receiver) {
      return this$Tex.tex.slice_t9mhyo$($receiver.rect);
    };
  }
  NinePatchEx$Tex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Tex',
    interfaces: []
  };
  function NinePatchEx$NinePatchEx$Tex_init(ninePatch, $this) {
    $this = $this || Object.create(NinePatchEx$Tex.prototype);
    NinePatchEx$Tex.call($this, ninePatch.content, ninePatch.info);
    return $this;
  }
  NinePatchEx.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NinePatchEx',
    interfaces: [View]
  };
  function RectBase(anchorX, anchorY, hitShape, smoothing) {
    if (anchorX === void 0)
      anchorX = 0.0;
    if (anchorY === void 0)
      anchorY = anchorX;
    if (hitShape === void 0)
      hitShape = null;
    if (smoothing === void 0)
      smoothing = true;
    Container.call(this);
    this.hitShape = hitShape;
    this.smoothing = smoothing;
    this.baseBitmap_iavqr2$_0 = bitmap.Bitmaps.white;
    this.anchorX_gmgbkx$_0 = anchorX;
    this.anchorY_gmgbk2$_0 = anchorY;
    this.vertices_ustx7d$_0 = new TexturedVertexArray(4, TexturedVertexArray$Companion_getInstance().QUAD_INDICES);
  }
  Object.defineProperty(RectBase.prototype, 'baseBitmap', {
    get: function () {
      return this.baseBitmap_iavqr2$_0;
    },
    set: function (v) {
      this.baseBitmap_iavqr2$_0 = v;
      this.dirtyVertices = true;
    }
  });
  Object.defineProperty(RectBase.prototype, 'anchorX', {
    get: function () {
      return this.anchorX_gmgbkx$_0;
    },
    set: function (v) {
      this.anchorX_gmgbkx$_0 = v;
      this.dirtyVertices = true;
    }
  });
  Object.defineProperty(RectBase.prototype, 'anchorY', {
    get: function () {
      return this.anchorY_gmgbk2$_0;
    },
    set: function (v) {
      this.anchorY_gmgbk2$_0 = v;
      this.dirtyVertices = true;
    }
  });
  Object.defineProperty(RectBase.prototype, 'bwidth', {
    get: function () {
      return this.width;
    }
  });
  Object.defineProperty(RectBase.prototype, 'bheight', {
    get: function () {
      return this.height;
    }
  });
  Object.defineProperty(RectBase.prototype, 'sLeft', {
    get: function () {
      return -this.bwidth * this.anchorX;
    }
  });
  Object.defineProperty(RectBase.prototype, 'sTop', {
    get: function () {
      return -this.bheight * this.anchorY;
    }
  });
  RectBase.prototype.computeVertexIfRequired_g6aac5$_0 = function () {
    if (!this.dirtyVertices)
      return;
    this.dirtyVertices = false;
    var matrix = this.renderMatrix;
    var x = this.sLeft;
    var y = this.sTop;
    var width = this.bwidth;
    var height = this.bheight;
    var colMul = this.globalColorMul;
    var colAdd = this.globalColorAdd;
    var bmp = this.baseBitmap;
    this.vertices_ustx7d$_0.select_za3lpa$(0).xy_vwzs7b$(x, y, matrix).uv_dleff0$(bmp.tl_x, bmp.tl_y).cols_3hpxcz$(colMul, colAdd);
    this.vertices_ustx7d$_0.select_za3lpa$(1).xy_vwzs7b$(x + width, y, matrix).uv_dleff0$(bmp.tr_x, bmp.tr_y).cols_3hpxcz$(colMul, colAdd);
    this.vertices_ustx7d$_0.select_za3lpa$(2).xy_vwzs7b$(x + width, y + height, matrix).uv_dleff0$(bmp.br_x, bmp.br_y).cols_3hpxcz$(colMul, colAdd);
    this.vertices_ustx7d$_0.select_za3lpa$(3).xy_vwzs7b$(x, y + height, matrix).uv_dleff0$(bmp.bl_x, bmp.bl_y).cols_3hpxcz$(colMul, colAdd);
  };
  RectBase.prototype.render_8isv09$ = function (ctx) {
    if (!this.visible)
      return;
    Container.prototype.render_8isv09$.call(this, ctx);
    if (this.baseBitmap !== bitmap.Bitmaps.transparent) {
      this.computeVertexIfRequired_g6aac5$_0();
      ctx.batch.drawVertices_wgeeum$(this.vertices_ustx7d$_0, ctx.getTex_9byvhi$(this.baseBitmap).base, this.smoothing, this.computedBlendMode.factors);
    }
  };
  RectBase.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    out.setTo_6y0v78$(this.sLeft, this.sTop, this.bwidth, this.bheight);
  };
  RectBase.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var tmp$;
    var sRight = this.sLeft + this.bwidth;
    var sBottom = this.sTop + this.bheight;
    return this.checkGlobalBounds_15yvbs$(x, y, this.sLeft, this.sTop, sRight, sBottom) && ((tmp$ = this.hitShape) != null ? tmp$.containsPoint_lu1900$(this.globalToLocalX_lu1900$(x, y), this.globalToLocalY_lu1900$(x, y)) : null) !== false ? this : null;
  };
  RectBase.prototype.toString = function () {
    var out = Container.prototype.toString.call(this);
    if (this.anchorX !== 0.0 || this.anchorY !== 0.0)
      out += ':anchor=(' + this.get_str_yrwdxr$(this.anchorX) + ', ' + this.get_str_yrwdxr$(this.anchorY) + ')';
    return out;
  };
  RectBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RectBase',
    interfaces: [Container]
  };
  var anchor_0 = defineInlineFunction('korge-js.com.soywiz.korge.view.anchor_7ptuor$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, ax, ay) {
      $receiver.anchorX = numberToDouble(ax);
      $receiver.anchorY = numberToDouble(ay);
      return $receiver;
    };
  }));
  function Renderable() {
  }
  Renderable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Renderable',
    interfaces: []
  };
  var scaleView = defineInlineFunction('korge-js.com.soywiz.korge.view.scaleView_pzl28r$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var ScaleView_init = _.com.soywiz.korge.view.ScaleView;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    function scaleView$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, width, height, scale, filtering, callback) {
      if (scale === void 0)
        scale = 2.0;
      if (filtering === void 0)
        filtering = false;
      if (callback === void 0)
        callback = scaleView$lambda;
      var $receiver_0 = addTo(new ScaleView_init(width, height, scale, filtering), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function ScaleView(width, height, scale, filtering) {
    if (scale === void 0)
      scale = 2.0;
    if (filtering === void 0)
      filtering = false;
    FixedSizeContainer.call(this);
    this.filtering = filtering;
    this.width = width;
    this.height = height;
    this.scale = scale;
  }
  ScaleView.prototype.super_render_0 = function (ctx) {
    FixedSizeContainer.prototype.render_8isv09$.call(this, ctx);
  };
  function ScaleView$render$lambda(closure$ctx, this$ScaleView) {
    return function () {
      this$ScaleView.super_render_0(closure$ctx);
      return Unit;
    };
  }
  function ScaleView$render$lambda_0(closure$ctx, closure$iwidth, closure$iheight, this$ScaleView) {
    return function (renderTexture) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_2 = closure$ctx.batch;
      tmp$ = this$ScaleView.renderMatrix;
      tmp$_0 = this$ScaleView.colorMul;
      tmp$_1 = this$ScaleView.colorAdd;
      tmp$_2.drawQuad_bjriwo$(renderTexture, 0.0, 0.0, closure$iwidth, closure$iheight, tmp$, this$ScaleView.filtering, tmp$_0, tmp$_1);
      closure$ctx.flush();
      return Unit;
    };
  }
  ScaleView.prototype.render_8isv09$ = function (ctx) {
    var iwidth = numberToInt(this.width);
    var iheight = numberToInt(this.height);
    ctx.renderToTexture_fnloth$(iwidth, iheight, ScaleView$render$lambda(ctx, this), ScaleView$render$lambda_0(ctx, iwidth, iheight, this));
  };
  ScaleView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaleView',
    interfaces: [View$Reference, FixedSizeContainer]
  };
  var solidRect = defineInlineFunction('korge-js.com.soywiz.korge.view.solidRect_gl3y1$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var numberToDouble = Kotlin.numberToDouble;
    var SolidRect_init = _.com.soywiz.korge.view.SolidRect;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    function solidRect$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, width, height, color, callback) {
      if (callback === void 0)
        callback = solidRect$lambda;
      var $receiver_0 = addTo(new SolidRect_init(numberToDouble(width), numberToDouble(height), color), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function SolidRect(width, height, color) {
    SolidRect$Companion_getInstance();
    RectBase.call(this);
    this.width_ffc1ss$_0 = width;
    this.height_a44ymb$_0 = height;
    this.colorMul = color;
  }
  function SolidRect$Companion() {
    SolidRect$Companion_instance = this;
  }
  SolidRect$Companion.prototype.invoke_eprly3$ = defineInlineFunction('korge-js.com.soywiz.korge.view.SolidRect.Companion.invoke_eprly3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var SolidRect_init = _.com.soywiz.korge.view.SolidRect;
    return function (width, height, color) {
      return new SolidRect_init(numberToDouble(width), numberToDouble(height), color);
    };
  }));
  SolidRect$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SolidRect$Companion_instance = null;
  function SolidRect$Companion_getInstance() {
    if (SolidRect$Companion_instance === null) {
      new SolidRect$Companion();
    }
    return SolidRect$Companion_instance;
  }
  Object.defineProperty(SolidRect.prototype, 'width', {
    get: function () {
      return this.width_ffc1ss$_0;
    },
    set: function (v) {
      this.width_ffc1ss$_0 = v;
      this.dirtyVertices = true;
    }
  });
  Object.defineProperty(SolidRect.prototype, 'height', {
    get: function () {
      return this.height_a44ymb$_0;
    },
    set: function (v) {
      this.height_a44ymb$_0 = v;
      this.dirtyVertices = true;
    }
  });
  SolidRect.prototype.createInstance = function () {
    return new SolidRect(this.width, this.height, this.colorMul);
  };
  SolidRect.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SolidRect',
    interfaces: [RectBase]
  };
  var text = defineInlineFunction('korge-js.com.soywiz.korge.view.text_tq6xby$', wrapFunction(function () {
    var Fonts = _.com.soywiz.korge.view.Fonts;
    var Unit = Kotlin.kotlin.Unit;
    var Text = _.com.soywiz.korge.view.Text;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    function text$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, text, textSize, font, callback) {
      if (textSize === void 0)
        textSize = 16.0;
      if (font === void 0)
        font = Fonts.Companion.defaultFont;
      if (callback === void 0)
        callback = text$lambda;
      var $receiver_0 = addTo(Text.Companion.invoke_fnvenn$(text, textSize, void 0, font), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function Text() {
    Text$Companion_getInstance();
    View.call(this);
    this.textBounds = Rectangle_init(0, 0, 1024, 1024);
    this.tempRect_0 = new Rectangle();
    this._text = '';
    this._html = '';
    this.document = null;
    this._format_0 = new Html$Format();
    this.filtering = true;
    this.autoSize_wspygq$_0 = true;
    this.bgcolor = color.Colors.TRANSPARENT_BLACK;
    this.fonts = Fonts$Companion_getInstance().fonts;
  }
  function Text$Companion() {
    Text$Companion_instance = this;
  }
  Text$Companion.prototype.invoke_fnvenn$ = function (text, textSize, color_0, font) {
    if (textSize === void 0)
      textSize = 16.0;
    if (color_0 === void 0)
      color_0 = color.Colors.WHITE;
    if (font === void 0)
      font = Fonts$Companion_getInstance().defaultFont;
    var $receiver = new Text();
    $receiver.format = new Html$Format(void 0, color_0, new Html$FontFace$Bitmap(font), numberToInt(textSize));
    if (!equals(text, ''))
      $receiver.text = text;
    return $receiver;
  };
  Text$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Text$Companion_instance = null;
  function Text$Companion_getInstance() {
    if (Text$Companion_instance === null) {
      new Text$Companion();
    }
    return Text$Companion_instance;
  }
  Object.defineProperty(Text.prototype, 'autoSize', {
    get: function () {
      return this.autoSize_wspygq$_0;
    },
    set: function (value) {
      this.autoSize_wspygq$_0 = value;
      this.recalculateBoundsWhenRequired_0();
    }
  });
  Text.prototype.setTextBounds_2da8yn$ = function (rect) {
    this.textBounds.copyFrom_2da8yn$(rect);
    this.autoSize = false;
  };
  Text.prototype.unsetTextBounds = function () {
    this.autoSize = true;
  };
  Object.defineProperty(Text.prototype, 'format', {
    get: function () {
      return this._format_0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      this._format_0 = value;
      if (!equals(value, (tmp$ = this.document) != null ? tmp$.defaultFormat : null)) {
        (tmp$_1 = (tmp$_0 = this.document) != null ? tmp$_0.defaultFormat : null) != null ? (tmp$_1.parent = value) : null;
      }
      this.recalculateBoundsWhenRequired_0();
    }
  });
  Object.defineProperty(Text.prototype, 'text', {
    get: function () {
      var tmp$, tmp$_0, tmp$_1;
      return this.document != null ? (tmp$_1 = (tmp$_0 = (tmp$ = this.document) != null ? tmp$.xml : null) != null ? tmp$_0.text : null) != null ? tmp$_1 : '' : this._text;
    },
    set: function (value) {
      this._text = value;
      this._html = '';
      this.document = null;
      this.recalculateBoundsWhenRequired_0();
    }
  });
  Object.defineProperty(Text.prototype, 'html', {
    get: function () {
      return this.document != null ? this._html : this._text;
    },
    set: function (value) {
      this.document = Html_getInstance().parse_61zpoe$(value);
      this.relayout();
      ensureNotNull(this.document).defaultFormat.parent = this.format;
      this._text = '';
      this._html = value;
      this._format_0 = ensureNotNull(this.document).firstFormat.consolidate();
    }
  });
  Text.prototype.relayout = function () {
    var tmp$;
    (tmp$ = this.document) != null ? (tmp$.doPositioning_90chdb$(this.fonts, this.textBounds), Unit) : null;
  };
  Text.prototype.render_8isv09$ = function (ctx) {
    var tmp$;
    if (!this.visible)
      return;
    var colorMul = this.globalColorMul;
    var colorAdd = this.globalColorAdd;
    var m = this.renderMatrix;
    if (this.document != null) {
      tmp$ = ensureNotNull(this.document).allSpans.iterator();
      while (tmp$.hasNext()) {
        var span = tmp$.next();
        var font = this.fonts.getBitmapFont_ktnn5$(span.format);
        var format = span.format;
        font.drawText_b4d2lv$(ctx, format.computedSize, this.text, numberToInt(span.bounds.x), numberToInt(span.bounds.y), m, RGBA.Companion.multiply_jh0t86$(colorMul, format.computedColor), colorAdd, this.computedBlendMode, this.filtering);
      }
    }
     else {
      var font_0 = this.fonts.getBitmapFont_ktnn5$(this.format);
      var anchor = this.format.computedAlign.anchor;
      this.fonts.getBounds_1y5lg$(this.text, this.format, this.tempRect_0);
      var px = this.textBounds.x + (this.textBounds.width - this.tempRect_0.width) * anchor.sx;
      var py = this.textBounds.y + (this.textBounds.height - this.tempRect_0.height) * anchor.sy;
      if (this.bgcolor.a !== 0) {
        ctx.batch.drawQuad_bjriwo$(ctx.getTex_9byvhi$(bitmap.Bitmaps.white), this.textBounds.x, this.textBounds.y, this.textBounds.width, this.textBounds.height, m, false, RGBA.Companion.multiply_jh0t86$(this.bgcolor, this.globalColorMul), colorAdd, this.computedBlendMode.factors);
      }
      font_0.drawText_b4d2lv$(ctx, this.format.computedSize, this.text, numberToInt(px), numberToInt(py), m, RGBA.Companion.multiply_jh0t86$(colorMul, this.format.computedColor), colorAdd, this.computedBlendMode, this.filtering);
    }
  };
  Text.prototype.recalculateBounds_0 = function () {
    this.fonts.getBounds_1y5lg$(this.text, this.format, this.textBounds);
  };
  Text.prototype.recalculateBoundsWhenRequired_0 = function () {
    if (this.autoSize)
      this.recalculateBounds_0();
  };
  Text.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    if (this.document != null) {
      out.copyFrom_2da8yn$(ensureNotNull(this.document).bounds);
    }
     else {
      if (this.autoSize) {
        this.fonts.getBounds_1y5lg$(this.text, this.format, out);
        out.setToAnchoredRectangle_7qw0rf$(out, this.format.computedAlign.anchor, this.textBounds);
      }
       else {
        out.copyFrom_2da8yn$(this.textBounds);
      }
    }
  };
  Text.prototype.createInstance = function () {
    return new Text();
  };
  Text.prototype.copyPropsFrom_l5rad2$ = function (source) {
    var tmp$;
    View.prototype.copyPropsFrom_l5rad2$.call(this, source);
    Kotlin.isType(tmp$ = source, Text) ? tmp$ : throwCCE();
    this.textBounds.copyFrom_2da8yn$(source.textBounds);
    if (source._html.length > 0) {
      this.html = source.html;
    }
     else {
      this.text = source.text;
    }
  };
  Text.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Text',
    interfaces: [IHtml, IText, View]
  };
  function IText() {
  }
  IText.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IText',
    interfaces: []
  };
  function IHtml() {
  }
  IHtml.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IHtml',
    interfaces: []
  };
  function setText$lambda$lambda(closure$text) {
    return function (it) {
      if (Kotlin.isType(it, IText))
        it.text = closure$text;
      return Unit;
    };
  }
  function setText($receiver, text) {
    foreachDescendant($receiver, setText$lambda$lambda(text));
  }
  function setHtml$lambda$lambda(closure$html) {
    return function (it) {
      if (Kotlin.isType(it, IHtml))
        it.html = closure$html;
      return Unit;
    };
  }
  function setHtml($receiver, html) {
    foreachDescendant($receiver, setHtml$lambda$lambda(html));
  }
  function Updatable() {
  }
  Updatable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Updatable',
    interfaces: []
  };
  function ViewsDslMarker() {
  }
  ViewsDslMarker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewsDslMarker',
    interfaces: [Annotation]
  };
  function View() {
    View$Companion_getInstance();
    this.$delegate_l5rad2$_0 = new Extra$Mixin();
    this.$delegate_l5rad2$_1 = new EventDispatcher$Mixin();
    this.ratio_u2g8cn$_0 = 0.0;
    this.index_pzwnz4$_0 = 0;
    this.speed = 1.0;
    this.parent_kog7oo$_0 = null;
    this.name = null;
    this.blendMode_yq02qm$_0 = BlendMode$INHERIT_getInstance();
    this._computedBlendMode = BlendMode$INHERIT_getInstance();
    this._scaleX_lmzz6j$_0 = 1.0;
    this._scaleY_lmzz5o$_0 = 1.0;
    this._skewX_mc7zdf$_0 = 0.0;
    this._skewY_mc7zea$_0 = 0.0;
    this._rotation_rhtmt1$_0 = 0.0;
    this.pos = new MVector2();
    this._colorTransform_xtf156$_0 = new ColorTransform();
    this._globalColorTransform_haylp5$_0 = new ColorTransform();
    this._props_l13xo1$_0 = LinkedHashMap_init();
    this.tempTransform_oa88oq$_0 = new Matrix2d$Transform();
    this.mouseEnabled = true;
    this.enabled = true;
    this.visible = true;
    this._localMatrix_be57f9$_0 = new Matrix2d();
    this._globalMatrix = new Matrix2d();
    this._globalVersion_gauj5g$_0 = 0;
    this._globalMatrixInvVersion_66zpqg$_0 = 0;
    this._globalMatrixInv_b24upg$_0 = new Matrix2d();
    this.validLocalProps_8be2vx$ = true;
    this.validLocalMatrix_8be2vx$ = true;
    this.validGlobal_8be2vx$ = false;
    this.components_x3l1w4$_0 = null;
    this._componentsIt_q4o34e$_0 = null;
    this.dirtyVertices = false;
  }
  function View$Reference() {
  }
  View$Reference.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Reference',
    interfaces: []
  };
  function View$HitTestType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function View$HitTestType_initFields() {
    View$HitTestType_initFields = function () {
    };
    View$HitTestType$BOUNDING_instance = new View$HitTestType('BOUNDING', 0);
    View$HitTestType$SHAPE_instance = new View$HitTestType('SHAPE', 1);
  }
  var View$HitTestType$BOUNDING_instance;
  function View$HitTestType$BOUNDING_getInstance() {
    View$HitTestType_initFields();
    return View$HitTestType$BOUNDING_instance;
  }
  var View$HitTestType$SHAPE_instance;
  function View$HitTestType$SHAPE_getInstance() {
    View$HitTestType_initFields();
    return View$HitTestType$SHAPE_instance;
  }
  View$HitTestType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HitTestType',
    interfaces: [Enum]
  };
  function View$HitTestType$values() {
    return [View$HitTestType$BOUNDING_getInstance(), View$HitTestType$SHAPE_getInstance()];
  }
  View$HitTestType.values = View$HitTestType$values;
  function View$HitTestType$valueOf(name) {
    switch (name) {
      case 'BOUNDING':
        return View$HitTestType$BOUNDING_getInstance();
      case 'SHAPE':
        return View$HitTestType$SHAPE_getInstance();
      default:throwISE('No enum constant com.soywiz.korge.view.View.HitTestType.' + name);
    }
  }
  View$HitTestType.valueOf_61zpoe$ = View$HitTestType$valueOf;
  function View$Companion() {
    View$Companion_instance = this;
  }
  View$Companion.prototype.commonAncestor_75c0h2$ = function (left, right) {
    var l = left;
    var r = right;
    var lCount = get_ancestorCount(l);
    var rCount = get_ancestorCount(r);
    while (lCount !== rCount) {
      if (lCount > rCount) {
        lCount = lCount - 1 | 0;
        l = l != null ? l.parent : null;
      }
       else {
        rCount = rCount - 1 | 0;
        r = r != null ? r.parent : null;
      }
      if (lCount < 0 && rCount < 0)
        break;
    }
    return equals(l, r) ? l : null;
  };
  View$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var View$Companion_instance = null;
  function View$Companion_getInstance() {
    if (View$Companion_instance === null) {
      new View$Companion();
    }
    return View$Companion_instance;
  }
  Object.defineProperty(View.prototype, 'ratio', {
    get: function () {
      return this.ratio_u2g8cn$_0;
    },
    set: function (ratio) {
      this.ratio_u2g8cn$_0 = ratio;
    }
  });
  Object.defineProperty(View.prototype, 'index', {
    get: function () {
      return this.index_pzwnz4$_0;
    },
    set: function (index) {
      this.index_pzwnz4$_0 = index;
    }
  });
  Object.defineProperty(View.prototype, 'parent', {
    get: function () {
      return this.parent_kog7oo$_0;
    },
    set: function (parent) {
      this.parent_kog7oo$_0 = parent;
    }
  });
  Object.defineProperty(View.prototype, 'blendMode', {
    get: function () {
      return this.blendMode_yq02qm$_0;
    },
    set: function (value) {
      if (this.blendMode_yq02qm$_0 !== value) {
        this.blendMode_yq02qm$_0 = value;
        this.invalidate();
      }
    }
  });
  Object.defineProperty(View.prototype, 'globalSpeed', {
    get: function () {
      return this.parent != null ? ensureNotNull(this.parent).globalSpeed * this.speed : this.speed;
    }
  });
  Object.defineProperty(View.prototype, 'computedBlendMode', {
    get: function () {
      this._ensureGlobal_sjfzhq$_0();
      return this._computedBlendMode;
    }
  });
  Object.defineProperty(View.prototype, 'x', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0().pos.x;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this.pos.x !== v) {
        this.pos.x = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'y', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0().pos.y;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this.pos.y !== v) {
        this.pos.y = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'scaleX', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0()._scaleX_lmzz6j$_0;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this._scaleX_lmzz6j$_0 !== v) {
        this._scaleX_lmzz6j$_0 = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'scaleY', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0()._scaleY_lmzz5o$_0;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this._scaleY_lmzz5o$_0 !== v) {
        this._scaleY_lmzz5o$_0 = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'skewX', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0()._skewX_mc7zdf$_0;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this._skewX_mc7zdf$_0 !== v) {
        this._skewX_mc7zdf$_0 = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'skewY', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0()._skewY_mc7zea$_0;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this._skewY_mc7zea$_0 !== v) {
        this._skewY_mc7zea$_0 = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'rotation', {
    get: function () {
      return this.ensureTransform_4sgqg4$_0()._rotation_rhtmt1$_0;
    },
    set: function (v) {
      this.ensureTransform_4sgqg4$_0();
      if (this._rotation_rhtmt1$_0 !== v) {
        this._rotation_rhtmt1$_0 = v;
        this.invalidateMatrix();
      }
    }
  });
  Object.defineProperty(View.prototype, 'rotationDegrees', {
    get: function () {
      return Angle.Companion.toDegrees_14dthe$(this.rotation);
    },
    set: function (v) {
      this.rotation = Angle.Companion.toRadians_14dthe$(v);
    }
  });
  Object.defineProperty(View.prototype, 'scale', {
    get: function () {
      return (this.scaleX + this.scaleY) / 2.0;
    },
    set: function (v) {
      this.scaleX = v;
      this.scaleY = v;
    }
  });
  Object.defineProperty(View.prototype, 'globalX', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.localToGlobalX_lu1900$(this.x, this.y) : null) != null ? tmp$_0 : this.x;
    },
    set: function (value) {
      var tmp$, tmp$_0;
      this.x = (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.globalToLocalX_lu1900$(value, this.globalY) : null) != null ? tmp$_0 : value;
    }
  });
  Object.defineProperty(View.prototype, 'globalY', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.localToGlobalY_lu1900$(this.x, this.y) : null) != null ? tmp$_0 : this.y;
    },
    set: function (value) {
      var tmp$, tmp$_0;
      this.y = (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.globalToLocalY_lu1900$(this.globalX, value) : null) != null ? tmp$_0 : value;
    }
  });
  View.prototype.setSize_lu1900$ = function (width, height) {
    this._setSize_ja0vym$_0(width, true, height, true);
  };
  View.prototype._setSize_ja0vym$_0 = function (width, swidth, height, sheight) {
    var bounds = this.getLocalBounds_2da8yn$();
    if (swidth)
      this.scaleX = width / bounds.width;
    if (sheight)
      this.scaleY = height / bounds.height;
  };
  Object.defineProperty(View.prototype, 'width', {
    get: function () {
      return this.getLocalBounds_2da8yn$().width * this.scaleX;
    },
    set: function (value) {
      this._setSize_ja0vym$_0(value, true, 0.0, false);
    }
  });
  Object.defineProperty(View.prototype, 'height', {
    get: function () {
      return this.getLocalBounds_2da8yn$().height * this.scaleY;
    },
    set: function (value) {
      this._setSize_ja0vym$_0(0.0, false, value, true);
    }
  });
  Object.defineProperty(View.prototype, 'colorMul', {
    get: function () {
      return this._colorTransform_xtf156$_0.colorMul;
    },
    set: function (v) {
      this._colorTransform_xtf156$_0.colorMul = v;
      this.invalidateColorTransform_9p0ntq$_0();
    }
  });
  Object.defineProperty(View.prototype, 'colorAdd', {
    get: function () {
      return this._colorTransform_xtf156$_0.colorAdd;
    },
    set: function (v) {
      this._colorTransform_xtf156$_0.colorAdd = v;
      this.invalidateColorTransform_9p0ntq$_0();
    }
  });
  Object.defineProperty(View.prototype, 'alpha', {
    get: function () {
      return this._colorTransform_xtf156$_0.mA;
    },
    set: function (v) {
      this._colorTransform_xtf156$_0.mA = v;
      this.invalidateColorTransform_9p0ntq$_0();
    }
  });
  Object.defineProperty(View.prototype, 'colorTransform', {
    get: function () {
      return this._colorTransform_xtf156$_0;
    },
    set: function (v) {
      this._colorTransform_xtf156$_0.copyFrom_54kf7e$(v);
      this.invalidateColorTransform_9p0ntq$_0();
    }
  });
  Object.defineProperty(View.prototype, 'tint', {
    get: function () {
      return this.colorMul;
    },
    set: function (value) {
      this.colorMul = value;
    }
  });
  View.prototype.invalidateColorTransform_9p0ntq$_0 = function () {
    this.invalidate();
  };
  Object.defineProperty(View.prototype, 'props', {
    get: function () {
      return this._props_l13xo1$_0;
    }
  });
  View.prototype.hasProp_61zpoe$ = function (key) {
    var $receiver = this._props_l13xo1$_0;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key);
  };
  View.prototype.getPropString_puj7f4$ = function (key, default_0) {
    if (default_0 === void 0)
      default_0 = '';
    var tmp$;
    return (tmp$ = this._props_l13xo1$_0.get_11rb$(key)) != null ? tmp$ : default_0;
  };
  View.prototype.getPropInt_bm4lxs$ = function (key, default_0) {
    if (default_0 === void 0)
      default_0 = 0;
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this._props_l13xo1$_0.get_11rb$(key)) != null ? toIntOrNull(tmp$) : null) != null ? tmp$_0 : default_0;
  };
  View.prototype.getPropDouble_io5o9c$ = function (key, default_0) {
    if (default_0 === void 0)
      default_0 = 0.0;
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this._props_l13xo1$_0.get_11rb$(key)) != null ? toDoubleOrNull(tmp$) : null) != null ? tmp$_0 : default_0;
  };
  View.prototype.addProp_puj7f4$ = function (key, value) {
    this._props_l13xo1$_0.put_xwzc9p$(key, value);
  };
  View.prototype.addProps_y0zsll$ = function (values) {
    var tmp$;
    tmp$ = values.entries.iterator();
    while (tmp$.hasNext()) {
      var pair = tmp$.next();
      this.addProp_puj7f4$(pair.key, pair.value);
    }
  };
  View.prototype.ensureTransform_4sgqg4$_0 = function () {
    if (!this.validLocalProps_8be2vx$) {
      this.validLocalProps_8be2vx$ = true;
      var t = this.tempTransform_oa88oq$_0.setMatrix_7f5bc6$(this._localMatrix_be57f9$_0);
      this.pos.x = t.x;
      this.pos.y = t.y;
      this._scaleX_lmzz6j$_0 = t.scaleX;
      this._scaleY_lmzz5o$_0 = t.scaleY;
      this._skewX_mc7zdf$_0 = t.skewX;
      this._skewY_mc7zea$_0 = t.skewY;
      this._rotation_rhtmt1$_0 = t.rotation;
    }
    return this;
  };
  Object.defineProperty(View.prototype, 'root', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.parent) != null ? tmp$.root : null) != null ? tmp$_0 : this;
    }
  });
  Object.defineProperty(View.prototype, 'stage', {
    get: function () {
      var tmp$;
      return (tmp$ = this.root) == null || Kotlin.isType(tmp$, Stage) ? tmp$ : null;
    }
  });
  View.prototype.setMatrix_yx07kl$ = function (matrix) {
    this._localMatrix_be57f9$_0.copyFrom_7f5bc6$(matrix);
    this.validLocalProps_8be2vx$ = false;
    this.invalidate();
  };
  View.prototype.setMatrixInterpolated_whgrqo$ = function (ratio, l, r) {
    this._localMatrix_be57f9$_0.setToInterpolated_ehu1mq$(ratio, l, r);
    this.validLocalProps_8be2vx$ = false;
    this.invalidate();
  };
  View.prototype.setComputedTransform_1w2bfe$ = function (transform) {
    var m = transform.matrix;
    var t = transform.transform;
    this._localMatrix_be57f9$_0.copyFrom_7f5bc6$(m);
    this.pos.x = t.x;
    this.pos.y = t.y;
    this._scaleX_lmzz6j$_0 = t.scaleX;
    this._scaleY_lmzz5o$_0 = t.scaleY;
    this._skewX_mc7zdf$_0 = t.skewY;
    this._skewY_mc7zea$_0 = t.skewY;
    this._rotation_rhtmt1$_0 = t.rotation;
    this.validLocalProps_8be2vx$ = true;
    this.validLocalMatrix_8be2vx$ = true;
    this.invalidate();
  };
  View.prototype.setTransform_i579cd$ = function (transform) {
    var t = transform;
    this.pos.x = t.x;
    this.pos.y = t.y;
    this._scaleX_lmzz6j$_0 = t.scaleX;
    this._scaleY_lmzz5o$_0 = t.scaleY;
    this._skewX_mc7zdf$_0 = t.skewY;
    this._skewY_mc7zea$_0 = t.skewY;
    this._rotation_rhtmt1$_0 = t.rotation;
    this.validLocalProps_8be2vx$ = true;
    this.validLocalMatrix_8be2vx$ = false;
    this.invalidate();
  };
  Object.defineProperty(View.prototype, 'unsafeListRawComponents', {
    get: function () {
      return this.components_x3l1w4$_0;
    }
  });
  Object.defineProperty(View.prototype, 'componentsIt_d5hgox$_0', {
    get: function () {
      if (this.components_x3l1w4$_0 != null) {
        if (this._componentsIt_q4o34e$_0 == null)
          this._componentsIt_q4o34e$_0 = ArrayList_init_1();
        ensureNotNull(this._componentsIt_q4o34e$_0).clear();
        ensureNotNull(this._componentsIt_q4o34e$_0).addAll_brywnq$(ensureNotNull(this.components_x3l1w4$_0));
      }
      return this._componentsIt_q4o34e$_0;
    }
  });
  View.prototype.getOrCreateComponent_sc4rae$ = defineInlineFunction('korge-js.com.soywiz.korge.view.View.getOrCreateComponent_sc4rae$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, gen) {
      return this.getOrCreateComponent_twnkl3$(getKClass(T_0), gen);
    };
  }));
  View.prototype.removeComponent_q5itx0$ = function (c) {
    var tmp$;
    (tmp$ = this.components_x3l1w4$_0) != null ? tmp$.remove_11rb$(c) : null;
  };
  function View$removeComponents$lambda$lambda(closure$c) {
    return function (it) {
      var tmp$;
      return (tmp$ = Kotlin.getKClassFromExpression(it)) != null ? tmp$.equals(closure$c) : null;
    };
  }
  View.prototype.removeComponents_796cw$ = function (c) {
    var tmp$;
    return (tmp$ = this.components_x3l1w4$_0) != null ? removeAll(tmp$, View$removeComponents$lambda$lambda(c)) : null;
  };
  View.prototype.removeAllComponents = function () {
    var tmp$;
    return (tmp$ = this.components_x3l1w4$_0) != null ? (tmp$.clear(), Unit) : null;
  };
  View.prototype.addComponent_q5itx0$ = function (c) {
    var tmp$;
    if (this.components_x3l1w4$_0 == null) {
      this.components_x3l1w4$_0 = ArrayList_init_1();
    }
    if ((tmp$ = this.components_x3l1w4$_0) != null) {
      tmp$.add_11rb$(c);
    }
    return c;
  };
  function View$addUpdatable$ObjectLiteral(this$View, closure$updatable) {
    this.this$View = this$View;
    this.closure$updatable = closure$updatable;
  }
  Object.defineProperty(View$addUpdatable$ObjectLiteral.prototype, 'view', {
    get: function () {
      return this.this$View;
    }
  });
  View$addUpdatable$ObjectLiteral.prototype.update_14dthe$ = function (ms) {
    this.closure$updatable;
    this.closure$updatable(numberToInt(ms));
  };
  View$addUpdatable$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [UpdateComponent]
  };
  function View$addUpdatable$lambda(closure$component) {
    return function (it) {
      detach(closure$component);
      return Unit;
    };
  }
  View.prototype.addUpdatable_b4k9x1$ = function (updatable) {
    var component = attach(new View$addUpdatable$ObjectLiteral(this, updatable));
    component.update_14dthe$(0.0);
    return Cancellable.Companion.invoke_4m4org$(View$addUpdatable$lambda(component));
  };
  View.prototype.getOrCreateComponent_twnkl3$ = function (clazz, gen) {
    var tmp$;
    if (this.components_x3l1w4$_0 == null) {
      this.components_x3l1w4$_0 = ArrayList_init_1();
    }
    var $receiver = ensureNotNull(this.components_x3l1w4$_0);
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var tmp$_1;
        if ((tmp$_1 = Kotlin.getKClassFromExpression(element)) != null ? tmp$_1.equals(clazz) : null) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    var component = firstOrNull$result;
    if (component == null) {
      component = gen(this);
      var $receiver_0 = ensureNotNull(this.components_x3l1w4$_0);
      var element_0 = component;
      $receiver_0.add_11rb$(element_0);
    }
    return Kotlin.isType(tmp$ = ensureNotNull(component), Component) ? tmp$ : throwCCE();
  };
  Object.defineProperty(View.prototype, 'localMatrix', {
    get: function () {
      if (this.validLocalMatrix_8be2vx$)
        return this._localMatrix_be57f9$_0;
      this.validLocalMatrix_8be2vx$ = true;
      this._localMatrix_be57f9$_0.setTransform_8f3r3e$(this.x, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY);
      return this._localMatrix_be57f9$_0;
    },
    set: function (value) {
      this.setMatrix_yx07kl$(value);
      this.invalidate();
    }
  });
  View.prototype._ensureGlobal_sjfzhq$_0 = function () {
    block$break: do {
      if (this.validGlobal_8be2vx$)
        break block$break;
      this.validGlobal_8be2vx$ = true;
      if (this.parent != null) {
        this._globalMatrix.multiply_mgxgbw$(this.localMatrix, ensureNotNull(this.parent).globalMatrix);
        this._globalColorTransform_haylp5$_0.setToConcat_k8ycrk$(this._colorTransform_xtf156$_0, ensureNotNull(this.parent).globalColorTransform);
        this._computedBlendMode = this.blendMode === BlendMode$INHERIT_getInstance() ? ensureNotNull(this.parent).computedBlendMode : this.blendMode;
      }
       else {
        this._globalMatrix.copyFrom_7f5bc6$(this.localMatrix);
        this._globalColorTransform_haylp5$_0.copyFrom_54kf7e$(this._colorTransform_xtf156$_0);
        this._computedBlendMode = this.blendMode === BlendMode$INHERIT_getInstance() ? BlendMode$NORMAL_getInstance() : this.blendMode;
      }
      this._globalVersion_gauj5g$_0 = this._globalVersion_gauj5g$_0 + 1 | 0;
    }
     while (false);
    return this;
  };
  Object.defineProperty(View.prototype, 'globalMatrix', {
    get: function () {
      return this._ensureGlobal_sjfzhq$_0()._globalMatrix;
    },
    set: function (value) {
      if (this.parent != null) {
        this.localMatrix.multiply_mgxgbw$(value, ensureNotNull(this.parent).globalMatrixInv);
      }
       else {
        this.localMatrix.copyFrom_7f5bc6$(value);
      }
    }
  });
  Object.defineProperty(View.prototype, 'renderMatrix', {
    get: function () {
      return this.globalMatrix;
    }
  });
  Object.defineProperty(View.prototype, 'globalColorTransform', {
    get: function () {
      this._ensureGlobal_sjfzhq$_0();
      return this._globalColorTransform_haylp5$_0;
    }
  });
  Object.defineProperty(View.prototype, 'globalColorMul', {
    get: function () {
      return this.globalColorTransform.colorMul;
    }
  });
  Object.defineProperty(View.prototype, 'globalColorAdd', {
    get: function () {
      return this.globalColorTransform.colorAdd;
    }
  });
  Object.defineProperty(View.prototype, 'globalAlpha', {
    get: function () {
      return this.globalColorTransform.mA;
    }
  });
  View.prototype.localMouseX_gohfjx$ = function (views) {
    var p = views.input.mouse;
    return this.globalMatrixInv.transformX_lu1900$(p.x, p.y);
  };
  View.prototype.localMouseY_gohfjx$ = function (views) {
    var p = views.input.mouse;
    return this.globalMatrixInv.transformY_lu1900$(p.x, p.y);
  };
  Object.defineProperty(View.prototype, 'globalMatrixInv', {
    get: function () {
      this._ensureGlobal_sjfzhq$_0();
      if (this._globalMatrixInvVersion_66zpqg$_0 !== this._globalVersion_gauj5g$_0) {
        this._globalMatrixInvVersion_66zpqg$_0 = this._globalVersion_gauj5g$_0;
        this._globalMatrixInv_b24upg$_0.setToInverse_7f5bc6$(this._globalMatrix);
      }
      return this._globalMatrixInv_b24upg$_0;
    }
  });
  View.prototype.invalidateMatrix = function () {
    this.validLocalMatrix_8be2vx$ = false;
    this.invalidate();
  };
  View.prototype.invalidate = function () {
    this.validGlobal_8be2vx$ = false;
    this.dirtyVertices = true;
  };
  View.prototype.toString = function () {
    var out = get_portableSimpleName(Kotlin.getKClassFromExpression(this));
    if (this.x !== 0.0 || this.y !== 0.0)
      out += ':pos=(' + this.get_str_yrwdxr$(this.x) + ',' + this.get_str_yrwdxr$(this.y) + ')';
    if (this.scaleX !== 1.0 || this.scaleY !== 1.0)
      out += ':scale=(' + this.get_str_yrwdxr$(this.scaleX) + ',' + this.get_str_yrwdxr$(this.scaleY) + ')';
    if (this.skewX !== 0.0 || this.skewY !== 0.0)
      out += ':skew=(' + this.get_str_yrwdxr$(this.skewX) + ',' + this.get_str_yrwdxr$(this.skewY) + ')';
    if (this.rotation !== 0.0)
      out += ':rotation=(' + this.get_str_yrwdxr$(this.rotationDegrees) + '\xBA)';
    if (this.name != null)
      out += ':name=(' + toString(this.name) + ')';
    if (this.blendMode !== BlendMode$INHERIT_getInstance())
      out += ':blendMode=(' + this.blendMode + ')';
    if (!this.visible)
      out += ':visible=' + this.visible;
    if (this.alpha !== 1.0)
      out += ':alpha=' + this.alpha;
    if (this.colorMul.rgb !== color.Colors.WHITE.rgb)
      out += ':colorMul=' + this.colorMul.hexString;
    if (this.colorAdd !== 2139062143)
      out += ':colorAdd=' + get_shex(this.colorAdd);
    return out;
  };
  View.prototype.get_str_yrwdxr$ = function ($receiver) {
    return toString_0($receiver, 2, true);
  };
  View.prototype.globalToLocal_n3axqd$ = function (p, out) {
    if (out === void 0)
      out = new MVector2();
    return this.globalToLocalXY_ce8w4o$(p.x, p.y, out);
  };
  View.prototype.globalToLocalXY_ce8w4o$ = function (x, y, out) {
    if (out === void 0)
      out = new MVector2();
    return this.globalMatrixInv.transform_ce8w4o$(x, y, out);
  };
  View.prototype.globalToLocalX_lu1900$ = function (x, y) {
    return this.globalMatrixInv.transformX_lu1900$(x, y);
  };
  View.prototype.globalToLocalY_lu1900$ = function (x, y) {
    return this.globalMatrixInv.transformY_lu1900$(x, y);
  };
  View.prototype.localToGlobal_n3axqd$ = function (p, out) {
    if (out === void 0)
      out = new MVector2();
    return this.localToGlobalXY_ce8w4o$(p.x, p.y, out);
  };
  View.prototype.localToGlobalXY_ce8w4o$ = function (x, y, out) {
    if (out === void 0)
      out = new MVector2();
    return this.globalMatrix.transform_ce8w4o$(x, y, out);
  };
  View.prototype.localToGlobalX_lu1900$ = function (x, y) {
    return this.globalMatrix.transformX_lu1900$(x, y);
  };
  View.prototype.localToGlobalY_lu1900$ = function (x, y) {
    return this.globalMatrix.transformY_lu1900$(x, y);
  };
  View.prototype.hitTest_fjnra5$ = function (x, y, type) {
    switch (type.name) {
      case 'SHAPE':
        return this.hitTest_lu1900$(x, y);
      case 'BOUNDING':
        return this.hitTestBounding_lu1900$(x, y);
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  View.prototype.hitTest_r62tv1$ = function (pos) {
    return this.hitTest_lu1900$(pos.x, pos.y);
  };
  View.prototype.hitTest_lu1900$ = function (x, y) {
    if (!this.mouseEnabled)
      return null;
    return this.hitTestInternal_lu1900$(x, y);
  };
  View.prototype.hitTestBounding_lu1900$ = function (x, y) {
    if (!this.mouseEnabled)
      return null;
    return this.hitTestBoundingInternal_lu1900$(x, y);
  };
  View.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var bounds = this.getLocalBounds_2da8yn$();
    var sLeft = bounds.left;
    var sTop = bounds.top;
    var sRight = bounds.right;
    var sBottom = bounds.bottom;
    return this.checkGlobalBounds_15yvbs$(x, y, sLeft, sTop, sRight, sBottom) ? this : null;
  };
  View.prototype.hitTestBoundingInternal_lu1900$ = function (x, y) {
    var bounds = this.getGlobalBounds_2da8yn$();
    return bounds.contains_lu1900$(x, y) ? this : null;
  };
  View.prototype.checkGlobalBounds_15yvbs$ = function (x, y, sLeft, sTop, sRight, sBottom) {
    var lx = this.globalToLocalX_lu1900$(x, y);
    var ly = this.globalToLocalY_lu1900$(x, y);
    return lx >= sLeft && ly >= sTop && lx < sRight && ly < sBottom;
  };
  View.prototype.reset = function () {
    this._localMatrix_be57f9$_0.setToIdentity();
    this.pos.setTo_lu1900$(0.0, 0.0);
    this._scaleX_lmzz6j$_0 = 1.0;
    this._scaleY_lmzz5o$_0 = 1.0;
    this._skewX_mc7zdf$_0 = 0.0;
    this._skewY_mc7zea$_0 = 0.0;
    this._rotation_rhtmt1$_0 = 0.0;
    this.validLocalMatrix_8be2vx$ = false;
    this.validGlobal_8be2vx$ = false;
    this.invalidate();
  };
  View.prototype.removeFromParent = function () {
    var tmp$, tmp$_0;
    if (this.parent == null)
      return;
    var p = ensureNotNull(this.parent);
    tmp$ = this.index + 1 | 0;
    tmp$_0 = p.children.size;
    for (var i = tmp$; i < tmp$_0; i++) {
      var tmp$_1;
      tmp$_1 = p.children.get_za3lpa$(i);
      tmp$_1.index = tmp$_1.index - 1 | 0;
    }
    p.children.removeAt_za3lpa$(this.index);
    this.parent = null;
    this.index = -1;
  };
  View.prototype.getConcatMatrix_y6lqhr$ = function (target, out) {
    if (out === void 0)
      out = new Matrix2d();
    var current = this;
    out.setToIdentity();
    while (current != null) {
      out.multiply_mgxgbw$(out, current.localMatrix);
      if (equals(current, target))
        break;
      current = current.parent;
    }
    return out;
  };
  Object.defineProperty(View.prototype, 'globalBounds', {
    get: function () {
      return this.getGlobalBounds_2da8yn$();
    }
  });
  View.prototype.getGlobalBounds_2da8yn$ = function (out) {
    if (out === void 0)
      out = new Rectangle();
    return this.getBounds_tvgmbo$(this.root, out);
  };
  View.prototype.getBounds_tvgmbo$ = function (target, out) {
    if (target === void 0)
      target = this;
    if (out === void 0)
      out = new Rectangle();
    var concat = this.getConcatMatrix_y6lqhr$(target != null ? target : this);
    var bb = new BoundsBuilder();
    this.getLocalBoundsInternal_2da8yn$(out);
    var x = out.left;
    var y = out.top;
    var p1 = new IVector2_init(numberToDouble(x), numberToDouble(y));
    var x_0 = out.right;
    var y_0 = out.top;
    var p2 = new IVector2_init(numberToDouble(x_0), numberToDouble(y_0));
    var x_1 = out.right;
    var y_1 = out.bottom;
    var p3 = new IVector2_init(numberToDouble(x_1), numberToDouble(y_1));
    var x_2 = out.left;
    var y_2 = out.bottom;
    var p4 = new IVector2_init(numberToDouble(x_2), numberToDouble(y_2));
    bb.add_lu1900$(concat.transformX_lu1900$(p1.x, p1.y), concat.transformY_lu1900$(p1.x, p1.y));
    bb.add_lu1900$(concat.transformX_lu1900$(p2.x, p2.y), concat.transformY_lu1900$(p2.x, p2.y));
    bb.add_lu1900$(concat.transformX_lu1900$(p3.x, p3.y), concat.transformY_lu1900$(p3.x, p3.y));
    bb.add_lu1900$(concat.transformX_lu1900$(p4.x, p4.y), concat.transformY_lu1900$(p4.x, p4.y));
    bb.getBounds_2da8yn$(out);
    return out;
  };
  View.prototype.getLocalBounds_2da8yn$ = function (out) {
    if (out === void 0)
      out = new Rectangle();
    this.getLocalBoundsInternal_2da8yn$(out);
    return out;
  };
  View.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    out.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(0), numberToDouble(0));
  };
  View.prototype.getLocalBoundsInternal_2da8yn$ = function (out, callback$default) {
    if (out === void 0)
      out = new Rectangle();
    callback$default ? callback$default(out) : this.getLocalBoundsInternal_2da8yn$$default(out);
  };
  View.prototype.createInstance = function () {
    throw new MustOverrideException('Must Override ' + Kotlin.getKClassFromExpression(this) + '.createInstance()');
  };
  View.prototype.copyPropsFrom_l5rad2$ = function (source) {
    this.name = source.name;
    this.colorAdd = source.colorAdd;
    this.colorMul = source.colorMul;
    this.setMatrix_yx07kl$(source.localMatrix);
    this.visible = source.visible;
    this.ratio = source.ratio;
    this.speed = source.speed;
    this.blendMode = source.blendMode;
  };
  View.prototype.findViewByName_61zpoe$ = function (name) {
    var tmp$;
    if (equals(this.name, name))
      return this;
    if (Kotlin.isType(this, Container)) {
      tmp$ = this.children.iterator();
      while (tmp$.hasNext()) {
        var child = tmp$.next();
        var named = child.findViewByName_61zpoe$(name);
        if (named != null)
          return named;
      }
    }
    return null;
  };
  View.prototype.clone = function () {
    var $receiver = this.createInstance();
    $receiver.copyPropsFrom_l5rad2$(this);
    return $receiver;
  };
  Object.defineProperty(View.prototype, 'extra', {
    get: function () {
      return this.$delegate_l5rad2$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_l5rad2$_0.extra = tmp$;
    }
  });
  View.prototype.addEventListener_htgam$ = function (clazz, handler) {
    return this.$delegate_l5rad2$_1.addEventListener_htgam$(clazz, handler);
  };
  View.prototype.copyFrom_llfj4l$ = function (other) {
    return this.$delegate_l5rad2$_1.copyFrom_llfj4l$(other);
  };
  View.prototype.dispatch_dt5jzj$ = function (clazz, event) {
    return this.$delegate_l5rad2$_1.dispatch_dt5jzj$(clazz, event);
  };
  View.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'View',
    interfaces: [EventDispatcher, Extra, Renderable]
  };
  function DummyView() {
    View.call(this);
  }
  DummyView.prototype.createInstance = function () {
    return new DummyView();
  };
  DummyView.prototype.render_8isv09$ = function (ctx) {
  };
  DummyView.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyView',
    interfaces: [View]
  };
  function hasAncestor($receiver, ancestor) {
    var tmp$, tmp$_0;
    return equals($receiver, ancestor) ? true : (tmp$_0 = (tmp$ = $receiver.parent) != null ? hasAncestor(tmp$, ancestor) : null) != null ? tmp$_0 : false;
  }
  function replaceWith($receiver, view) {
    var tmp$, tmp$_0;
    if (equals($receiver, view))
      return false;
    if ($receiver.parent == null)
      return false;
    (tmp$_0 = (tmp$ = view.parent) != null ? tmp$.children : null) != null ? tmp$_0.remove_11rb$(view) : null;
    ensureNotNull($receiver.parent).children.set_wxm5ur$($receiver.index, view);
    view.index = $receiver.index;
    view.parent = $receiver.parent;
    $receiver.parent = null;
    view.invalidate();
    $receiver.index = -1;
    return true;
  }
  function get_ancestorCount($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    return (tmp$_1 = (tmp$_0 = (tmp$ = $receiver != null ? $receiver.parent : null) != null ? get_ancestorCount(tmp$) : null) != null ? tmp$_0 + 1 | 0 : null) != null ? tmp$_1 : 0;
  }
  function ancestorsUpTo($receiver, target) {
    var current = $receiver;
    var out = ArrayList_init_1();
    while (current != null && !equals(current, target)) {
      var element = current;
      out.add_11rb$(element);
      current = current.parent;
    }
    return out;
  }
  function get_ancestors($receiver) {
    return ancestorsUpTo($receiver, null);
  }
  function dump($receiver, indent, emit) {
    if (indent === void 0)
      indent = '';
    if (emit === void 0)
      emit = getCallableRef('println', function (message) {
        return println(message), Unit;
      });
    var tmp$;
    emit(indent + toString($receiver));
    if (Kotlin.isType($receiver, Container)) {
      tmp$ = $receiver.children.iterator();
      while (tmp$.hasNext()) {
        var child = tmp$.next();
        dump(child, indent + ' ', emit);
      }
    }
  }
  function dumpToString$lambda(closure$out) {
    return function (it) {
      closure$out.add_11rb$(it);
      return Unit;
    };
  }
  function dumpToString($receiver) {
    if ($receiver == null)
      return '';
    var out = ArrayList_init_1();
    dump($receiver, void 0, dumpToString$lambda(out));
    return joinToString(out, '\n');
  }
  function foreachDescendant($receiver, handler) {
    var tmp$;
    if ($receiver != null) {
      handler($receiver);
      if (Kotlin.isType($receiver, Container)) {
        tmp$ = $receiver.children.iterator();
        while (tmp$.hasNext()) {
          var child = tmp$.next();
          foreachDescendant(child, handler);
        }
      }
    }
  }
  function descendantsWithProp$lambda(closure$value, closure$prop) {
    return function (it) {
      if (closure$value != null) {
        return equals(it.props.get_11rb$(closure$prop), closure$value);
      }
       else {
        var $receiver = it.props;
        var key = closure$prop;
        var tmp$;
        return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key);
      }
    };
  }
  function descendantsWithProp($receiver, prop, value) {
    if (value === void 0)
      value = null;
    if ($receiver == null) {
      return emptyList();
    }
    return descendantsWith($receiver, void 0, descendantsWithProp$lambda(value, prop));
  }
  function descendantsWithPropString($receiver, prop, value) {
    if (value === void 0)
      value = null;
    var $receiver_0 = descendantsWithProp($receiver, prop, value);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, item.getPropString_puj7f4$(prop)));
    }
    return destination;
  }
  function descendantsWithPropInt($receiver, prop, value) {
    if (value === void 0)
      value = null;
    var $receiver_0 = descendantsWithProp($receiver, prop, value != null ? toString(value) : null);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, item.getPropInt_bm4lxs$(prop)));
    }
    return destination;
  }
  function descendantsWithPropDouble($receiver, prop, value) {
    if (value === void 0)
      value = null;
    var $receiver_0 = descendantsWithProp($receiver, prop, value != null ? toString(value) : null);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, item.getPropInt_bm4lxs$(prop)));
    }
    return destination;
  }
  function get$lambda(closure$name) {
    return function (it) {
      return equals(it.name, closure$name);
    };
  }
  function get_6($receiver, name) {
    return firstDescendantWith($receiver, get$lambda(name));
  }
  function firstDescendantWithName($receiver, name) {
    return get_6($receiver, name);
  }
  function get_allDescendantNames$lambda(closure$out) {
    return function (it) {
      if (it.name != null) {
        var $receiver = closure$out;
        var element = ensureNotNull(it.name);
        $receiver.add_11rb$(element);
      }
      return Unit;
    };
  }
  function get_allDescendantNames($receiver) {
    var out = ArrayList_init_1();
    foreachDescendant($receiver, get_allDescendantNames$lambda(out));
    return out;
  }
  function firstDescendantWith($receiver, check) {
    var tmp$;
    if ($receiver == null)
      return null;
    if (check($receiver))
      return $receiver;
    if (Kotlin.isType($receiver, Container)) {
      tmp$ = $receiver.children.iterator();
      while (tmp$.hasNext()) {
        var child = tmp$.next();
        var res = firstDescendantWith(child, check);
        if (res != null)
          return res;
      }
    }
    return null;
  }
  function descendantsWith($receiver, out, check) {
    if (out === void 0) {
      out = ArrayList_init_1();
    }
    var tmp$;
    if ($receiver != null) {
      if (check($receiver)) {
        out.add_11rb$($receiver);
      }
      if (Kotlin.isType($receiver, Container)) {
        tmp$ = $receiver.children.iterator();
        while (tmp$.hasNext()) {
          var child = tmp$.next();
          descendantsWith(child, out, check);
        }
      }
    }
    return out;
  }
  var xy = defineInlineFunction('korge-js.com.soywiz.korge.view.xy_t6upcb$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y) {
      $receiver.x = numberToDouble(x);
      $receiver.y = numberToDouble(y);
      return $receiver;
    };
  }));
  var position = defineInlineFunction('korge-js.com.soywiz.korge.view.position_t6upcb$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, x, y) {
      $receiver.x = numberToDouble(x);
      $receiver.y = numberToDouble(y);
      return $receiver;
    };
  }));
  var rotation = defineInlineFunction('korge-js.com.soywiz.korge.view.rotation_17knrc$', wrapFunction(function () {
    return function ($receiver, rot) {
      $receiver.rotation = rot.radians;
      return $receiver;
    };
  }));
  var rotation_0 = defineInlineFunction('korge-js.com.soywiz.korge.view.rotation_q8hyz9$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, rot) {
      $receiver.rotation = numberToDouble(rot);
      return $receiver;
    };
  }));
  var rotationDegrees = defineInlineFunction('korge-js.com.soywiz.korge.view.rotationDegrees_q8hyz9$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, degs) {
      $receiver.rotationDegrees = numberToDouble(degs);
      return $receiver;
    };
  }));
  var skew = defineInlineFunction('korge-js.com.soywiz.korge.view.skew_t6upcb$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, sx, sy) {
      $receiver.skewX = numberToDouble(sx);
      $receiver.skewY = numberToDouble(sy);
      return $receiver;
    };
  }));
  var scale = defineInlineFunction('korge-js.com.soywiz.korge.view.scale_t6upcb$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, sx, sy) {
      if (sy === void 0)
        sy = sx;
      $receiver.scaleX = numberToDouble(sx);
      $receiver.scaleY = numberToDouble(sy);
      return $receiver;
    };
  }));
  var alpha = defineInlineFunction('korge-js.com.soywiz.korge.view.alpha_q8hyz9$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, alpha) {
      $receiver.alpha = numberToDouble(alpha);
      return $receiver;
    };
  }));
  var logger_1;
  function BoundsProvider() {
  }
  function BoundsProvider$Dummy() {
    BoundsProvider$Dummy_instance = this;
    this.virtualLeft_qayobp$_0 = 0.0;
    this.virtualTop_5fo4ab$_0 = 0.0;
    this.virtualRight_y10ddg$_0 = 0.0;
    this.virtualBottom_840f3z$_0 = 0.0;
  }
  Object.defineProperty(BoundsProvider$Dummy.prototype, 'virtualLeft', {
    get: function () {
      return this.virtualLeft_qayobp$_0;
    }
  });
  Object.defineProperty(BoundsProvider$Dummy.prototype, 'virtualTop', {
    get: function () {
      return this.virtualTop_5fo4ab$_0;
    }
  });
  Object.defineProperty(BoundsProvider$Dummy.prototype, 'virtualRight', {
    get: function () {
      return this.virtualRight_y10ddg$_0;
    }
  });
  Object.defineProperty(BoundsProvider$Dummy.prototype, 'virtualBottom', {
    get: function () {
      return this.virtualBottom_840f3z$_0;
    }
  });
  BoundsProvider$Dummy.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Dummy',
    interfaces: [BoundsProvider]
  };
  var BoundsProvider$Dummy_instance = null;
  function BoundsProvider$Dummy_getInstance() {
    if (BoundsProvider$Dummy_instance === null) {
      new BoundsProvider$Dummy();
    }
    return BoundsProvider$Dummy_instance;
  }
  BoundsProvider.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BoundsProvider',
    interfaces: []
  };
  function Views(coroutineContext, ag, injector, input, timeProvider, stats) {
    this.coroutineContext_xgztce$_0 = coroutineContext;
    this.ag = ag;
    this.injector = injector;
    this.input = input;
    this.timeProvider = timeProvider;
    this.stats = stats;
    this.$delegate_gohfjx$_0 = new Extra$Mixin();
    this.$delegate_gohfjx$_1 = new EventDispatcher$Mixin();
    this.imageFormats = format.defaultImageFormats;
    this.renderContext = new RenderContext(this.ag, this, this.stats);
    this.agBitmapTextureManager = this.renderContext.agBitmapTextureManager;
    this.clearEachFrame = true;
    this.views = this;
    this.propsTriggers = HashMap_init();
    this.clampElapsedTimeTo = 100;
    this.virtualWidth_pbqlm6$_0 = 640;
    this.virtualHeight_54lv2f$_0 = 480;
    this.actualVirtualLeft_bfyrcp$_0 = 0;
    this.actualVirtualTop_dds7ip$_0 = 0;
    this.actualVirtualWidth_5oahts$_0 = 640;
    this.actualVirtualHeight_oyjd9j$_0 = 480;
    this.scaleMode = ScaleMode.Companion.SHOW_ALL;
    this.scaleAnchor = Anchor.Companion.MIDDLE_CENTER;
    this.clipBorders = true;
    this.resizedEvent_0 = new ResizedEvent(0, 0);
    this.stage = new Stage(this);
    this.root = this.stage;
    this.debugViews = false;
    this.debugHandlers = ArrayList_init_1();
    this.lastTime = this.timeProvider.currentTimeMillis();
    this.tempComponents_0 = ArrayList_init_1();
    this.virtualSize_0 = new SizeInt();
    this.actualSize_0 = new SizeInt();
    this.targetSize_0 = new SizeInt();
    this.targetFps = -1.0;
    this.injector.mapInstance_b1ce0a$(getKClass(CoroutineContext), this.coroutineContext);
    this.injector.mapInstance_b1ce0a$(getKClass(AG), this.ag);
    this.injector.mapInstance_b1ce0a$(getKClass(Views), this);
    this.injector.mapInstance_b1ce0a$(getKClass(SoundSystem), get_soundSystem(this));
  }
  Object.defineProperty(Views.prototype, 'coroutineContext', {
    get: function () {
      return this.coroutineContext_xgztce$_0;
    }
  });
  Object.defineProperty(Views.prototype, 'nativeWidth', {
    get: function () {
      return this.ag.backWidth;
    }
  });
  Object.defineProperty(Views.prototype, 'nativeHeight', {
    get: function () {
      return this.ag.backHeight;
    }
  });
  Object.defineProperty(Views.prototype, 'virtualWidth', {
    get: function () {
      return this.virtualWidth_pbqlm6$_0;
    },
    set: function (virtualWidth) {
      this.virtualWidth_pbqlm6$_0 = virtualWidth;
    }
  });
  Object.defineProperty(Views.prototype, 'virtualHeight', {
    get: function () {
      return this.virtualHeight_54lv2f$_0;
    },
    set: function (virtualHeight) {
      this.virtualHeight_54lv2f$_0 = virtualHeight;
    }
  });
  Object.defineProperty(Views.prototype, 'actualVirtualLeft', {
    get: function () {
      return this.actualVirtualLeft_bfyrcp$_0;
    },
    set: function (actualVirtualLeft) {
      this.actualVirtualLeft_bfyrcp$_0 = actualVirtualLeft;
    }
  });
  Object.defineProperty(Views.prototype, 'actualVirtualTop', {
    get: function () {
      return this.actualVirtualTop_dds7ip$_0;
    },
    set: function (actualVirtualTop) {
      this.actualVirtualTop_dds7ip$_0 = actualVirtualTop;
    }
  });
  Object.defineProperty(Views.prototype, 'actualVirtualWidth', {
    get: function () {
      return this.actualVirtualWidth_5oahts$_0;
    },
    set: function (actualVirtualWidth) {
      this.actualVirtualWidth_5oahts$_0 = actualVirtualWidth;
    }
  });
  Object.defineProperty(Views.prototype, 'actualVirtualHeight', {
    get: function () {
      return this.actualVirtualHeight_oyjd9j$_0;
    },
    set: function (actualVirtualHeight) {
      this.actualVirtualHeight_oyjd9j$_0 = actualVirtualHeight;
    }
  });
  Object.defineProperty(Views.prototype, 'virtualLeft', {
    get: function () {
      return (-this.actualVirtualLeft | 0) * this.views.stage.scaleX;
    }
  });
  Object.defineProperty(Views.prototype, 'virtualTop', {
    get: function () {
      return (-this.actualVirtualTop | 0) * this.views.stage.scaleY;
    }
  });
  Object.defineProperty(Views.prototype, 'virtualRight', {
    get: function () {
      return this.virtualLeft + this.virtualWidth * this.views.stage.scaleX;
    }
  });
  Object.defineProperty(Views.prototype, 'virtualBottom', {
    get: function () {
      return this.virtualTop + this.virtualHeight * this.views.stage.scaleY;
    }
  });
  Object.defineProperty(Views.prototype, 'actualVirtualRight', {
    get: function () {
      return this.actualVirtualWidth;
    }
  });
  Object.defineProperty(Views.prototype, 'actualVirtualBottom', {
    get: function () {
      return this.actualVirtualHeight;
    }
  });
  Object.defineProperty(Views.prototype, 'nativeMouseX', {
    get: function () {
      return this.input.mouse.x;
    }
  });
  Object.defineProperty(Views.prototype, 'nativeMouseY', {
    get: function () {
      return this.input.mouse.y;
    }
  });
  Views.prototype.dumpStats = function () {
    this.stats.dump();
  };
  Views.prototype.registerPropertyTrigger_4kjtw1$ = function (propName, gen) {
    this.propsTriggers.put_xwzc9p$(propName, gen);
  };
  function Views$registerPropertyTriggerSuspend$lambda$lambda(closure$gen_0, closure$view_0, closure$key_0, closure$value_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda(closure$gen_0, closure$view_0, closure$key_0, closure$value_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda(closure$gen_0, closure$view_0, closure$key_0, closure$value_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$gen = closure$gen_0;
    this.local$closure$view = closure$view_0;
    this.local$closure$key = closure$key_0;
    this.local$closure$value = closure$value_0;
  }
  Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda.prototype.constructor = Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda;
  Coroutine$Views$registerPropertyTriggerSuspend$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$gen(this.local$closure$view, this.local$closure$key, this.local$closure$value, this);
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
  function Views$registerPropertyTriggerSuspend$lambda(this$Views, closure$gen) {
    return function (view, key, value) {
      launchImmediately_0(this$Views.coroutineContext, void 0, Views$registerPropertyTriggerSuspend$lambda$lambda(closure$gen, view, key, value));
      return Unit;
    };
  }
  Views.prototype.registerPropertyTriggerSuspend_hkh80f$ = function (propName, gen) {
    this.propsTriggers.put_xwzc9p$(propName, Views$registerPropertyTriggerSuspend$lambda(this, gen));
  };
  Views.prototype.setVirtualSize_vux9f0$ = function (width, height) {
    this.virtualWidth = width;
    this.virtualHeight = height;
    this.resized();
  };
  Views.prototype.dispatch_dt5jzj$ = function (clazz, event) {
    var e_0 = event;
    try {
      this.stage.dispatch_dt5jzj$(clazz, event);
      var tmp$;
      tmp$ = this.getComponents_0(this.stage, this.tempComponents_0).iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        if (Kotlin.isType(c, EventComponent)) {
          c.onEvent_tgarok$(event);
        }
      }
      if (Kotlin.isType(e_0, MouseEvent)) {
        var tmp$_0;
        tmp$_0 = this.getComponents_0(this.stage, this.tempComponents_0).iterator();
        while (tmp$_0.hasNext()) {
          var c_0 = tmp$_0.next();
          if (Kotlin.isType(c_0, MouseComponent)) {
            c_0.onMouseEvent_93gp1g$(this.views, e_0);
          }
        }
      }
       else if (Kotlin.isType(e_0, ResizedEvent)) {
        var tmp$_1;
        tmp$_1 = this.getComponents_0(this.stage, this.tempComponents_0).iterator();
        while (tmp$_1.hasNext()) {
          var c_1 = tmp$_1.next();
          if (Kotlin.isType(c_1, ResizeComponent)) {
            c_1.resized_m5tlkz$(this.views, e_0.width, e_0.height);
          }
        }
      }
       else if (Kotlin.isType(e_0, KeyEvent)) {
        var tmp$_2;
        tmp$_2 = this.getComponents_0(this.stage, this.tempComponents_0).iterator();
        while (tmp$_2.hasNext()) {
          var c_2 = tmp$_2.next();
          if (Kotlin.isType(c_2, KeyComponent)) {
            c_2.onKeyEvent_6udeny$(this.views, e_0);
          }
        }
      }
       else if (Kotlin.isType(e_0, GamePadConnectionEvent)) {
        var tmp$_3;
        tmp$_3 = this.getComponents_0(this.stage, this.tempComponents_0).iterator();
        while (tmp$_3.hasNext()) {
          var c_3 = tmp$_3.next();
          if (Kotlin.isType(c_3, GamepadComponent)) {
            c_3.onGamepadEvent_55g7ry$(this.views, e_0);
          }
        }
      }
       else if (Kotlin.isType(e_0, GamePadButtonEvent)) {
        var tmp$_4;
        tmp$_4 = this.getComponents_0(this.stage, this.tempComponents_0).iterator();
        while (tmp$_4.hasNext()) {
          var c_4 = tmp$_4.next();
          if (Kotlin.isType(c_4, GamepadComponent)) {
            c_4.onGamepadEvent_96uaj2$(this.views, e_0);
          }
        }
      }
       else if (Kotlin.isType(e_0, GamePadStickEvent)) {
        var tmp$_5;
        tmp$_5 = this.getComponents_0(this.stage, this.tempComponents_0).iterator();
        while (tmp$_5.hasNext()) {
          var c_5 = tmp$_5.next();
          if (Kotlin.isType(c_5, GamepadComponent)) {
            c_5.onGamepadEvent_xowe04$(this.views, e_0);
          }
        }
      }
    }
     catch (e) {
      if (!Kotlin.isType(e, PreventDefaultException))
        throw e;
    }
  };
  Views.prototype.render_i9knhm$ = function (clearColor, clear) {
    if (clearColor === void 0)
      clearColor = color.Colors.BLACK;
    if (clear === void 0)
      clear = true;
    var tmp$;
    if (clear)
      this.ag.clear_yvqa77$(clearColor, void 0, 0, true, void 0, true);
    this.stage.render_8isv09$(this.renderContext);
    if (this.debugViews) {
      tmp$ = this.debugHandlers.iterator();
      while (tmp$.hasNext()) {
        var debugHandler = tmp$.next();
        debugHandler(this, this.renderContext);
      }
    }
    this.renderContext.flush();
    this.renderContext.finish();
    this.agBitmapTextureManager.afterRender();
  };
  Views.prototype.frameUpdateAndRender_c18wb3$ = function (clear, clearColor, fixedSizeStep) {
    if (fixedSizeStep === void 0)
      fixedSizeStep = null;
    this.views.stats.startFrame();
    var $this = Korge_getInstance().logger;
    var level = Logger$Level.TRACE;
    if ($this.isEnabled_fs4ikx$(level)) {
      $this.actualLog_pwm3k3$(level, 'ag.onRender');
    }
    var currentTime = this.timeProvider.currentTimeMillis();
    var delta = currentTime.subtract(this.lastTime).toInt();
    var b = this.views.clampElapsedTimeTo;
    var adelta = Math_0.min(delta, b);
    this.lastTime = currentTime;
    if (fixedSizeStep != null) {
      this.update_za3lpa$(fixedSizeStep);
    }
     else {
      this.update_za3lpa$(adelta);
    }
    this.render_i9knhm$(clearColor, clear);
  };
  Views.prototype.update_za3lpa$ = function (dtMs) {
    this.input.startFrame_za3lpa$(dtMs);
    var dtMsD = dtMs;
    var tmp$;
    tmp$ = this.getComponents_0(this.stage, this.tempComponents_0).iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      if (Kotlin.isType(c, UpdateComponent)) {
        c.update_14dthe$(dtMsD * c.view.globalSpeed);
      }
    }
    var tmp$_0;
    tmp$_0 = this.getComponents_0(this.stage, this.tempComponents_0).iterator();
    while (tmp$_0.hasNext()) {
      var c_0 = tmp$_0.next();
      if (Kotlin.isType(c_0, UpdateComponentWithViews)) {
        c_0.update_vcgvf3$(this, dtMsD * c_0.view.globalSpeed);
      }
    }
    this.input.endFrame_za3lpa$(dtMs);
  };
  Views.prototype.forEachComponent_0 = function (T_0, isT, callback) {
    var tmp$;
    tmp$ = this.getComponents_0(this.stage, this.tempComponents_0).iterator();
    while (tmp$.hasNext()) {
      var c = tmp$.next();
      if (isT(c))
        callback(c);
    }
  };
  Views.prototype.getComponents_0 = function (view, out) {
    if (out === void 0) {
      out = ArrayList_init_1();
    }
    out.clear();
    this.appendComponents_0(view, out);
    return out;
  };
  Views.prototype.appendComponents_0 = function (view, out) {
    var tmp$;
    if (Kotlin.isType(view, Container)) {
      tmp$ = view.children.iterator();
      while (tmp$.hasNext()) {
        var child = tmp$.next();
        this.appendComponents_0(child, out);
      }
    }
    var components = view.unsafeListRawComponents;
    if (components != null)
      out.addAll_brywnq$(components);
  };
  Views.prototype.mouseUpdated = function () {
  };
  Views.prototype.resized_vux9f0$ = function (width, height) {
    var actualWidth = width;
    var actualHeight = height;
    this.actualSize_0.setTo_vux9f0$(actualWidth, actualHeight);
    this.resized();
  };
  Views.prototype.resized = function () {
    var virtualWidth = this.virtualWidth;
    var virtualHeight = this.virtualHeight;
    var anchor = this.scaleAnchor;
    this.virtualSize_0.setTo_vux9f0$(virtualWidth, virtualHeight);
    this.scaleMode.invoke_n3lmo2$(this.virtualSize_0, this.actualSize_0, this.targetSize_0);
    var ratioX = this.targetSize_0.width / virtualWidth;
    var ratioY = this.targetSize_0.height / virtualHeight;
    this.actualVirtualWidth = numberToInt(this.actualSize_0.width / ratioX);
    this.actualVirtualHeight = numberToInt(this.actualSize_0.height / ratioY);
    this.stage.scaleX = ratioX;
    this.stage.scaleY = ratioY;
    this.stage.x = numberToInt((this.actualVirtualWidth - virtualWidth | 0) * anchor.sx * ratioX);
    this.stage.y = numberToInt((this.actualVirtualHeight - virtualHeight | 0) * anchor.sy * ratioY);
    this.actualVirtualLeft = -numberToInt(this.stage.x / ratioX) | 0;
    this.actualVirtualTop = -numberToInt(this.stage.y / ratioY) | 0;
    var tmp$ = this.stage;
    var $receiver = this.resizedEvent_0;
    $receiver.width = this.actualSize_0.width;
    $receiver.height = this.actualSize_0.height;
    tmp$.dispatch_dt5jzj$(getKClass(ResizedEvent), $receiver);
    this.stage.invalidate();
  };
  Views.prototype.dispose = function () {
    get_soundSystem(this).close();
  };
  Object.defineProperty(Views.prototype, 'extra', {
    get: function () {
      return this.$delegate_gohfjx$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_gohfjx$_0.extra = tmp$;
    }
  });
  Views.prototype.addEventListener_htgam$ = function (clazz, handler) {
    return this.$delegate_gohfjx$_1.addEventListener_htgam$(clazz, handler);
  };
  Views.prototype.copyFrom_llfj4l$ = function (other) {
    return this.$delegate_gohfjx$_1.copyFrom_llfj4l$(other);
  };
  Views.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Views',
    interfaces: [BoundsProvider, CoroutineContextHolder, EventDispatcher, Extra, Updatable]
  };
  function Stage(views) {
    Container.call(this);
    this.views = views;
  }
  Stage.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    var x = this.views.actualVirtualLeft;
    var y = this.views.actualVirtualTop;
    var width = this.views.actualVirtualWidth;
    var height = this.views.actualVirtualHeight;
    out.setTo_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
  };
  Stage.prototype.hitTestInternal_lu1900$ = function (x, y) {
    var tmp$;
    return (tmp$ = Container.prototype.hitTestInternal_lu1900$.call(this, x, y)) != null ? tmp$ : this;
  };
  Stage.prototype.hitTestBoundingInternal_lu1900$ = function (x, y) {
    var tmp$;
    return (tmp$ = Container.prototype.hitTestBoundingInternal_lu1900$.call(this, x, y)) != null ? tmp$ : this;
  };
  Stage.prototype.render_8isv09$ = function (ctx) {
    var m = this.renderMatrix;
    if (this.views.clipBorders) {
      var $this = ctx.ctx2d;
      var scissor = new AG$Scissor(numberToInt(this.x), numberToInt(this.y), numberToInt(this.views.virtualWidth * this.scaleX), numberToInt(this.views.virtualHeight * this.scaleY));
      var oldScissor = $this.batch.scissor;
      $this.batch.flush();
      if (scissor != null) {
        var left = numberToInt($this.m.transformX_lu1900$(scissor.left, scissor.top));
        var top = numberToInt($this.m.transformY_lu1900$(scissor.left, scissor.top));
        var right = numberToInt($this.m.transformX_lu1900$(scissor.right, scissor.bottom));
        var bottom = numberToInt($this.m.transformY_lu1900$(scissor.right, scissor.bottom));
        $this.batch.scissor = new AG$Scissor(left, top, right - left | 0, bottom - top | 0);
      }
       else {
        $this.batch.scissor = null;
      }
      try {
        Container.prototype.render_8isv09$.call(this, ctx);
      }
      finally {
        $this.batch.flush();
        $this.batch.scissor = oldScissor;
      }
    }
     else {
      Container.prototype.render_8isv09$.call(this, ctx);
    }
  };
  Stage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stage',
    interfaces: [View$Reference, Container]
  };
  function ViewsLog(coroutineContext, injector, ag, input, timeProvider, stats) {
    if (coroutineContext === void 0)
      coroutineContext = get_KorgeDispatcher();
    if (injector === void 0)
      injector = new AsyncInjector();
    if (ag === void 0)
      ag = new LogAG();
    if (input === void 0)
      input = new Input();
    if (timeProvider === void 0)
      timeProvider = new TimeProvider();
    if (stats === void 0)
      stats = new Stats();
    this.coroutineContext = coroutineContext;
    this.injector = injector;
    this.ag = ag;
    this.input = input;
    this.timeProvider = timeProvider;
    this.stats = stats;
    this.views = new Views(this.coroutineContext, this.ag, this.injector, this.input, this.timeProvider, this.stats);
  }
  ViewsLog.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ViewsLog',
    interfaces: []
  };
  function texture($receiver, bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return new Texture(new Texture$Base($receiver.ag.createTexture_lg0pjf$(bmp, mipmaps), bmp.width, bmp.height));
  }
  function texture_0($receiver, bmp, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return new Texture(new Texture$Base($receiver.ag.createTexture_ejmmxi$(bmp, mipmaps), bmp.width, bmp.height));
  }
  function texture_1($receiver, views, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return texture(views, $receiver, mipmaps);
  }
  function texture_2($receiver, width, height, mipmaps) {
    if (mipmaps === void 0)
      mipmaps = false;
    return texture($receiver, new Bitmap32(width, height), mipmaps);
  }
  function texture_3($receiver_0, bmp_0, mipmaps_0, continuation_0, suspended) {
    var instance = new Coroutine$texture($receiver_0, bmp_0, mipmaps_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$texture($receiver_0, bmp_0, mipmaps_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$bmp = bmp_0;
    this.local$mipmaps = mipmaps_0;
  }
  Coroutine$texture.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$texture.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$texture.prototype.constructor = Coroutine$texture;
  Coroutine$texture.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$mipmaps === void 0)
              this.local$mipmaps = false;
            this.state_0 = 2;
            this.result_0 = format.nativeImageFormatProvider.decode_fqrh44$(this.local$bmp, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return texture(this.local$$receiver, this.result_0, this.local$mipmaps);
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
  function ViewsContainer() {
  }
  ViewsContainer.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ViewsContainer',
    interfaces: []
  };
  function get_ag($receiver) {
    return $receiver.views.ag;
  }
  function KorgeFileLoaderTester(name, tester) {
    this.name = name;
    this.tester = tester;
  }
  KorgeFileLoaderTester.prototype.invoke_1wg0ys$ = function (s, injector, continuation) {
    return this.tester(s, injector, continuation);
  };
  KorgeFileLoaderTester.prototype.toString = function () {
    return 'KorgeFileTester(' + '"' + this.name + '"' + ')';
  };
  KorgeFileLoaderTester.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeFileLoaderTester',
    interfaces: []
  };
  KorgeFileLoaderTester.prototype.component1 = function () {
    return this.name;
  };
  KorgeFileLoaderTester.prototype.component2 = function () {
    return this.tester;
  };
  KorgeFileLoaderTester.prototype.copy_n2pgj8$ = function (name, tester) {
    return new KorgeFileLoaderTester(name === void 0 ? this.name : name, tester === void 0 ? this.tester : tester);
  };
  KorgeFileLoaderTester.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.tester) | 0;
    return result;
  };
  KorgeFileLoaderTester.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.tester, other.tester)))));
  };
  function KorgeFileLoader(name, loader) {
    this.name = name;
    this.loader = loader;
  }
  KorgeFileLoader.prototype.toString = function () {
    return 'KorgeFileLoader(' + '"' + this.name + '"' + ')';
  };
  KorgeFileLoader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeFileLoader',
    interfaces: []
  };
  KorgeFileLoader.prototype.component1 = function () {
    return this.name;
  };
  KorgeFileLoader.prototype.component2 = function () {
    return this.loader;
  };
  KorgeFileLoader.prototype.copy_z7e06o$ = function (name, loader) {
    return new KorgeFileLoader(name === void 0 ? this.name : name, loader === void 0 ? this.loader : loader);
  };
  KorgeFileLoader.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.loader) | 0;
    return result;
  };
  KorgeFileLoader.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.loader, other.loader)))));
  };
  var tileMap = defineInlineFunction('korge-js.com.soywiz.korge.view.tiles.tileMap_7fsqxt$', wrapFunction(function () {
    var Unit = Kotlin.kotlin.Unit;
    var TileMap_init = _.com.soywiz.korge.view.tiles.TileMap;
    var addTo = _.com.soywiz.korge.view.addTo_fct211$;
    function tileMap$lambda($receiver) {
      return Unit;
    }
    return function ($receiver, map, tileset, callback) {
      if (callback === void 0)
        callback = tileMap$lambda;
      var $receiver_0 = addTo(new TileMap_init(map, tileset), $receiver);
      callback($receiver_0);
      return $receiver_0;
    };
  }));
  function TileMap(map, tileset) {
    View.call(this);
    this.map = map;
    this.tileset = tileset;
    this.tileWidth = this.tileset.width;
    this.tileHeight = this.tileset.height;
    this.smoothing = true;
    this.t0_wzivzw$_0 = MVector2_init(0, 0);
    this.tt0_s5ne0s$_0 = MVector2_init(0, 0);
    this.tt1_s5ndzx$_0 = MVector2_init(0, 0);
    this.tempPointPool_khp82k$_0 = new MVector2Area(16);
    this.verticesPerTex_56stj7$_0 = LinkedHashMap_init();
    this.lastVirtualRect_w4fsaj$_0 = Rectangle_init(-1, -1, -1, -1);
    this.currentVirtualRect_eyqno6$_0 = Rectangle_init(-1, -1, -1, -1);
  }
  TileMap.prototype.computeVertexIfRequired_clnvp8$_0 = function (ctx) {
    var tmp$;
    if (!this.dirtyVertices)
      return;
    this.dirtyVertices = false;
    var m = this.renderMatrix;
    var renderTilesCounter = ctx.stats.counter_61zpoe$('renderedTiles');
    var pos = m.transform_ce8w4o$(0.0, 0.0);
    var dU = minus_0(m.transform_ce8w4o$(this.tileWidth, 0.0), pos);
    var dV = minus_0(m.transform_ce8w4o$(0.0, this.tileHeight), pos);
    var colMul = this.globalColorMul;
    var colAdd = this.globalColorAdd;
    var pp0 = this.globalToLocal_n3axqd$(this.t0_wzivzw$_0.setTo_lu1900$(this.currentVirtualRect_eyqno6$_0.left, this.currentVirtualRect_eyqno6$_0.top), this.tt0_s5ne0s$_0);
    var pp1 = this.globalToLocal_n3axqd$(this.t0_wzivzw$_0.setTo_lu1900$(this.currentVirtualRect_eyqno6$_0.right, this.currentVirtualRect_eyqno6$_0.bottom), this.tt1_s5ndzx$_0);
    var mx0 = clamp(numberToInt(pp0.x / this.tileWidth - 1), 0, this.map.width);
    var mx1 = clamp(numberToInt(pp1.x / this.tileWidth + 1), 0, this.map.width);
    var my0 = clamp(numberToInt(pp0.y / this.tileHeight - 1), 0, this.map.height);
    var my1 = clamp(numberToInt(pp1.y / this.tileHeight + 1), 0, this.map.height);
    var yheight = my1 - my0 | 0;
    var xwidth = mx1 - mx0 | 0;
    var ntiles = Kotlin.imul(xwidth, yheight);
    this.verticesPerTex_56stj7$_0.clear();
    var count = 0;
    for (var y = my0; y < my1; y++) {
      for (var x = mx0; x < mx1; x++) {
        tmp$ = this.tileset.get_za3lpa$(this.map.getInt_vux9f0$(x, y));
        if (tmp$ == null) {
          continue;
        }
        var tex = tmp$;
        var $receiver = this.verticesPerTex_56stj7$_0;
        var key = tex.bmp;
        var tmp$_0;
        var value = $receiver.get_11rb$(key);
        if (value == null) {
          var indices = TexturedVertexArray$Companion_getInstance().quadIndices_za3lpa$(ntiles);
          var answer = new TileMap$Info(new TexturedVertexArray(ntiles * 4 | 0, indices));
          $receiver.put_xwzc9p$(key, answer);
          tmp$_0 = answer;
        }
         else {
          tmp$_0 = value;
        }
        var info = tmp$_0;
        var $this = this.tempPointPool_khp82k$_0;
        var oldOffset = $this.offset;
        try {
          var tmp$_1, tmp$_2, tmp$_3, tmp$_4;
          var p0 = $this.plus_fu3msx$($this.plus_fu3msx$(pos, $this.alloc().setToMul_lpqq81$(dU, numberToDouble(x))), $this.alloc().setToMul_lpqq81$(dV, numberToDouble(y)));
          var p1 = $this.plus_fu3msx$(p0, dU);
          var p2 = $this.plus_fu3msx$($this.plus_fu3msx$(p0, dU), dV);
          var p3 = $this.plus_fu3msx$(p0, dV);
          info.vertices.select_za3lpa$((tmp$_1 = info.vcount, info.vcount = tmp$_1 + 1 | 0, tmp$_1)).xy_lu1900$(p0.x, p0.y).uv_dleff0$(tex.tl_x, tex.tl_y).cols_3hpxcz$(colMul, colAdd);
          info.vertices.select_za3lpa$((tmp$_2 = info.vcount, info.vcount = tmp$_2 + 1 | 0, tmp$_2)).xy_lu1900$(p1.x, p1.y).uv_dleff0$(tex.tr_x, tex.tr_y).cols_3hpxcz$(colMul, colAdd);
          info.vertices.select_za3lpa$((tmp$_3 = info.vcount, info.vcount = tmp$_3 + 1 | 0, tmp$_3)).xy_lu1900$(p2.x, p2.y).uv_dleff0$(tex.br_x, tex.br_y).cols_3hpxcz$(colMul, colAdd);
          info.vertices.select_za3lpa$((tmp$_4 = info.vcount, info.vcount = tmp$_4 + 1 | 0, tmp$_4)).xy_lu1900$(p3.x, p3.y).uv_dleff0$(tex.bl_x, tex.bl_y).cols_3hpxcz$(colMul, colAdd);
        }
        finally {
          $this.offset = oldOffset;
        }
        info.icount = info.icount + 6 | 0;
        count = count + 1 | 0;
      }
    }
    renderTilesCounter != null ? (renderTilesCounter.increment_za3lpa$(count), Unit) : null;
  };
  function TileMap$Info(vertices) {
    this.vertices = vertices;
    this.vcount = 0;
    this.icount = 0;
  }
  TileMap$Info.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  TileMap.prototype.render_8isv09$ = function (ctx) {
    var tmp$, tmp$_0;
    if (!this.visible)
      return;
    this.currentVirtualRect_eyqno6$_0.setBounds_6y0v78$(ctx.virtualLeft, ctx.virtualTop, ctx.virtualRight, ctx.virtualBottom);
    if (!((tmp$ = this.currentVirtualRect_eyqno6$_0) != null ? tmp$.equals(this.lastVirtualRect_w4fsaj$_0) : null)) {
      this.dirtyVertices = true;
      this.lastVirtualRect_w4fsaj$_0.copyFrom_2da8yn$(this.currentVirtualRect_eyqno6$_0);
    }
    this.computeVertexIfRequired_clnvp8$_0(ctx);
    tmp$_0 = this.verticesPerTex_56stj7$_0.entries.iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_1 = tmp$_0.next();
      var tex = tmp$_1.key;
      var buffer = tmp$_1.value;
      ctx.batch.drawVertices_wgeeum$(buffer.vertices, ctx.getTex_uler2c$(tex), this.smoothing, this.computedBlendMode.factors, buffer.vcount, buffer.icount);
    }
    ctx.flush();
  };
  TileMap.prototype.getLocalBoundsInternal_2da8yn$$default = function (out) {
    var width = this.tileWidth * this.map.width;
    var height = this.tileHeight * this.map.height;
    out.setTo_6y0v78$(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height));
  };
  TileMap.prototype.hitTestInternal_lu1900$ = function (x, y) {
    return this.checkGlobalBounds_15yvbs$(x, y, 0.0, 0.0, this.tileWidth * this.map.width, this.tileHeight * this.map.height) ? this : null;
  };
  TileMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TileMap',
    interfaces: [View]
  };
  function TileSet(textures, width, height, base) {
    TileSet$Companion_getInstance();
    var tmp$, tmp$_0;
    if (base === void 0)
      base = (tmp$_0 = (tmp$ = firstOrNull_0(filterNotNull(textures))) != null ? tmp$.bmp : null) != null ? tmp$_0 : bitmap.Bitmaps.transparent.bmp;
    this.textures = textures;
    this.width = width;
    this.height = height;
    this.base = base;
    var $receiver = this.textures;
    var any$result;
    any$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (element != null ? !equals(element.bmp, this.base) : false) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    if (any$result) {
      throw RuntimeException_init('All tiles in the set must have the same base texture');
    }
  }
  TileSet.prototype.get_za3lpa$ = function (index) {
    return getOrNull(this.textures, index);
  };
  function TileSet$Companion() {
    TileSet$Companion_instance = this;
  }
  TileSet$Companion.prototype.invoke_gx7gyo$ = function (textureMap) {
    var tmp$, tmp$_0;
    var maxKey = (tmp$ = max(textureMap.keys)) != null ? tmp$ : 0;
    var $receiver = new IntRange(0, maxKey);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(textureMap.get_11rb$(item));
    }
    var textures = destination;
    var firstTexture = (tmp$_0 = first_0(textures)) != null ? tmp$_0 : bitmap.Bitmaps.transparent;
    return new TileSet(textures, firstTexture.width, firstTexture.height, firstTexture.bmp);
  };
  TileSet$Companion.prototype.invoke_le1w3n$ = function (base, tileWidth, tileHeight, columns, totalTiles) {
    if (columns === void 0)
      columns = -1;
    if (totalTiles === void 0)
      totalTiles = -1;
    var out = ArrayList_init_1();
    var rows = base.height / tileHeight | 0;
    var actualColumns = columns < 0 ? base.width / tileWidth | 0 : columns;
    var actualTotalTiles = totalTiles < 0 ? Kotlin.imul(rows, actualColumns) : totalTiles;
    complete: for (var y = 0; y < rows; y++) {
      for (var x = 0; x < actualColumns; x++) {
        var element = base.sliceWithSize_tjonv8$(Kotlin.imul(x, tileWidth), Kotlin.imul(y, tileHeight), tileWidth, tileHeight);
        out.add_11rb$(element);
        if (out.size >= actualTotalTiles)
          break complete;
      }
    }
    return new TileSet(out, tileWidth, tileHeight);
  };
  TileSet$Companion.prototype.extractBitmaps_ptg1et$ = function (bmp, tilewidth, tileheight, columns, tilecount) {
    var $receiver = until(0, tilecount);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var y = item / columns | 0;
      var x = item % columns;
      destination.add_11rb$(sliceWithSize(bmp, Kotlin.imul(x, tilewidth), Kotlin.imul(y, tileheight), tilewidth, tileheight).extract());
    }
    return destination;
  };
  TileSet$Companion.prototype.fromBitmaps_m8cj3d$ = function (tilewidth, tileheight, bitmaps, border, mipmaps) {
    if (border === void 0)
      border = 1;
    if (mipmaps === void 0)
      mipmaps = false;
    var tmp$;
    var all$result;
    all$break: do {
      var tmp$_0;
      if (Kotlin.isType(bitmaps, Collection) && bitmaps.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$_0 = bitmaps.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (!(element.width === tilewidth && element.height === tileheight)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    if (!all$result) {
      var message = 'Check failed.';
      throw IllegalStateException_init_0(message.toString());
    }
    if (bitmaps.isEmpty()) {
      return new TileSet(emptyList(), tilewidth, tileheight);
    }
    var border2 = border * 2 | 0;
    var btilewidth = tilewidth + border2 | 0;
    var btileheight = tileheight + border2 | 0;
    var barea = Kotlin.imul(btilewidth, btileheight);
    var fullArea = Kotlin.imul(bitmaps.size, barea);
    var expectedSide = get_nextPowerOfTwo(toIntCeil(Math_0.sqrt(fullArea)));
    var out = new Bitmap32(expectedSide, expectedSide);
    var texs = ArrayList_init_1();
    var columns = out.width / btilewidth | 0;
    var tex;
    for (var m = 0; m < 2; m++) {
      tmp$ = bitmaps.size;
      for (var n = 0; n < tmp$; n++) {
        var y = n / columns | 0;
        var x = n % columns;
        var px = Kotlin.imul(x, btilewidth) + border | 0;
        var py = Kotlin.imul(y, btileheight) + border | 0;
        if (m === 0) {
          putWithBorder(out, px, py, bitmaps.get_za3lpa$(n), border);
        }
         else {
          var element_0 = sliceWithSize(tex == null ? throwUPAE('tex') : tex, px, py, tilewidth, tileheight);
          texs.add_11rb$(element_0);
        }
      }
      if (m === 0) {
        tex = out;
      }
    }
    return new TileSet(texs, tilewidth, tileheight, tex == null ? throwUPAE('tex') : tex);
  };
  TileSet$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TileSet$Companion_instance = null;
  function TileSet$Companion_getInstance() {
    if (TileSet$Companion_instance === null) {
      new TileSet$Companion();
    }
    return TileSet$Companion_instance;
  }
  TileSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TileSet',
    interfaces: []
  };
  var KORGE_VERSION;
  function register($receiver, views) {
    window.views = views;
  }
  function NativeStorage() {
    NativeStorage_instance = this;
  }
  NativeStorage.prototype.set_puj7f4$ = function (key, value) {
    localStorage.setItem(key, value);
  };
  NativeStorage.prototype.getOrNull_61zpoe$ = function (key) {
    return localStorage.getItem(key);
  };
  NativeStorage.prototype.remove_61zpoe$ = function (key) {
    localStorage.removeItem(key);
  };
  NativeStorage.prototype.removeAll = function () {
    localStorage.clear();
  };
  NativeStorage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'NativeStorage',
    interfaces: [IStorage]
  };
  var NativeStorage_instance = null;
  function NativeStorage_getInstance() {
    if (NativeStorage_instance === null) {
      new NativeStorage();
    }
    return NativeStorage_instance;
  }
  $$importsForInline$$['klogger-js'] = $module$klogger_js;
  $$importsForInline$$['korinject-js'] = $module$korinject_js;
  $$importsForInline$$['klock-js'] = $module$klock_js;
  $$importsForInline$$['korui-js'] = $module$korui_js;
  $$importsForInline$$['korma-js'] = $module$korma_js;
  Korge.prototype.Config = Korge$Config;
  Korge.prototype.ModuleArgs = Korge$ModuleArgs;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korge = package$soywiz.korge || (package$soywiz.korge = {});
  Object.defineProperty(package$korge, 'Korge', {
    get: Korge_getInstance
  });
  var package$animate = package$korge.animate || (package$korge.animate = {});
  package$animate.AnElement = AnElement;
  package$animate.createDuplicated_vkl01n$ = createDuplicated;
  package$animate.createDuplicatedView_vkl01n$ = createDuplicatedView;
  package$animate.AnBaseShape = AnBaseShape;
  package$animate.AnShape = AnShape;
  package$animate.AnMorphShape = AnMorphShape;
  package$animate.AnEmptyView = AnEmptyView;
  $$importsForInline$$['korio-js'] = $module$korio_js;
  package$animate.AnTextField = AnTextField;
  $$importsForInline$$['kds-js'] = $module$kds_js;
  package$animate.get_stencilIndex_jxline$ = get_stencilIndex;
  package$animate.set_stencilIndex_t8v26g$ = set_stencilIndex;
  package$animate.TimelineRunner = TimelineRunner;
  package$animate.AnPlayable = AnPlayable;
  package$animate.AnSimpleAnimation = AnSimpleAnimation;
  AnMovieClip$Companion.prototype.RenderState = AnMovieClip$Companion$RenderState;
  Object.defineProperty(AnMovieClip, 'Companion', {
    get: AnMovieClip$Companion_getInstance
  });
  package$animate.AnMovieClip = AnMovieClip;
  package$animate.play_4h3qbs$ = play_0;
  package$animate.playAndWaitStop_4h3qbs$ = playAndWaitStop;
  package$animate.playAndWaitEvent_3rvitr$ = playAndWaitEvent;
  package$animate.waitStop_jv7z46$ = waitStop;
  package$animate.waitEvent_z2n0m7$ = waitEvent;
  package$animate.get_playingName_jv7z46$ = get_playingName;
  package$animate.seekStill_3hzepi$ = seekStill;
  package$animate.AnSymbol = AnSymbol;
  Object.defineProperty(package$animate, 'AnSymbolEmpty', {
    get: AnSymbolEmpty_getInstance
  });
  package$animate.AnSymbolSound = AnSymbolSound;
  package$animate.AnTextFieldSymbol = AnTextFieldSymbol;
  package$animate.AnSymbolBaseShape = AnSymbolBaseShape;
  package$animate.AnSymbolShape = AnSymbolShape;
  package$animate.AnSymbolMorphShape = AnSymbolMorphShape;
  package$animate.AnSymbolBitmap = AnSymbolBitmap;
  package$animate.AnConstantPool = AnConstantPool;
  Object.defineProperty(AnSymbolTimelineFrame, 'Companion', {
    get: AnSymbolTimelineFrame$Companion_getInstance
  });
  package$animate.AnSymbolTimelineFrame = AnSymbolTimelineFrame;
  package$animate.AnAction = AnAction;
  package$animate.AnPlaySoundAction = AnPlaySoundAction;
  package$animate.AnEventAction = AnEventAction;
  package$animate.AnDepthTimeline = AnDepthTimeline;
  package$animate.AnSymbolLimits = AnSymbolLimits;
  package$animate.AnSymbolUidDef = AnSymbolUidDef;
  package$animate.AnSymbolMovieClipSubTimeline = AnSymbolMovieClipSubTimeline;
  package$animate.AnSymbolMovieClipState = AnSymbolMovieClipState;
  package$animate.AnSymbolMovieClip = AnSymbolMovieClip;
  package$animate.get_animateLibraryLoaders_jv80cy$ = get_animateLibraryLoaders;
  package$animate.AnLibrary = AnLibrary;
  Timed.RangeResult = Timed$RangeResult;
  $$importsForInline$$['kmem-js'] = $module$kmem_js;
  $$importsForInline$$['korge-js'] = _;
  Timed.Result = Timed$Result;
  package$animate.Timed = Timed;
  var package$serialization = package$animate.serialization || (package$animate.serialization = {});
  package$serialization.readAni_dptvkb$ = readAni;
  AnLibraryDeserializer.prototype.ExternalReaders = AnLibraryDeserializer$ExternalReaders;
  Object.defineProperty(package$serialization, 'AnLibraryDeserializer', {
    get: AnLibraryDeserializer_getInstance
  });
  package$serialization.writeTo_sjlbpa$ = writeTo;
  AnLibrarySerializer.prototype.ExternalWriters = AnLibrarySerializer$ExternalWriters;
  AnLibrarySerializer.prototype.Config = AnLibrarySerializer$Config;
  Object.defineProperty(package$serialization, 'AnLibrarySerializer', {
    get: AnLibrarySerializer_getInstance
  });
  Object.defineProperty(package$serialization, 'AniFile', {
    get: AniFile_getInstance
  });
  package$serialization.OptimizedStringAllocator = OptimizedStringAllocator;
  var package$async = package$korge.async || (package$korge.async = {});
  Object.defineProperty(package$async, 'KorgeDispatcher', {
    get: get_KorgeDispatcher
  });
  Object.defineProperty(Atlas, 'Companion', {
    get: Atlas$Companion_getInstance
  });
  var package$atlas = package$korge.atlas || (package$korge.atlas = {});
  package$atlas.Atlas = Atlas;
  package$atlas.readAtlas_s70ap7$ = readAtlas;
  package$atlas.readAtlas2_s70ap7$ = readAtlas2;
  Atlas2.Entry = Atlas2$Entry;
  package$atlas.Atlas2 = Atlas2;
  AtlasInfo.Rect = AtlasInfo$Rect;
  AtlasInfo.Size = AtlasInfo$Size;
  AtlasInfo.Meta = AtlasInfo$Meta;
  AtlasInfo.Entry = AtlasInfo$Entry;
  Object.defineProperty(AtlasInfo, 'Companion', {
    get: AtlasInfo$Companion_getInstance
  });
  package$atlas.AtlasInfo = AtlasInfo;
  var package$audio = package$korge.audio || (package$korge.audio = {});
  package$audio.SoundSystem = SoundSystem;
  package$audio.AudioChannel = AudioChannel;
  package$audio.SoundChannel = SoundChannel;
  package$audio.MusicChannel = MusicChannel;
  package$audio.SoundFile = SoundFile;
  package$audio.get_soundSystem_jv80cy$ = get_soundSystem;
  package$audio.readSoundFile_rbde4g$ = readSoundFile;
  Object.defineProperty(BitmapFont$Kerning, 'Companion', {
    get: BitmapFont$Kerning$Companion_getInstance
  });
  BitmapFont.Kerning = BitmapFont$Kerning;
  BitmapFont.Glyph = BitmapFont$Glyph;
  Object.defineProperty(BitmapFont, 'Companion', {
    get: BitmapFont$Companion_getInstance
  });
  var package$bitmapfont = package$korge.bitmapfont || (package$korge.bitmapfont = {});
  package$bitmapfont.BitmapFont_init_fo5joi$ = BitmapFont_init;
  package$bitmapfont.BitmapFont = BitmapFont;
  package$bitmapfont.drawText_yvexq1$ = drawText;
  package$bitmapfont.readBitmapFont_dnzyw$ = readBitmapFont;
  package$bitmapfont.toIntMap_hx7udi$ = toIntMap;
  package$bitmapfont.toKorge_b51j24$ = toKorge;
  package$bitmapfont.convert_b51j24$ = convert;
  var package$bus = package$korge.bus || (package$korge.bus = {});
  package$bus.Bus = Bus;
  package$bus.GlobalBus = GlobalBus;
  package$bus.BusHandler = BusHandler;
  var package$component = package$korge.component || (package$korge.component = {});
  package$component.Component = Component;
  package$component.attach_w53ov9$ = attach;
  package$component.detach_w53ov9$ = detach;
  package$component.removeFromView_tez5q3$ = removeFromView;
  package$component.TouchComponent = TouchComponent;
  package$component.MouseComponent = MouseComponent;
  package$component.KeyComponent = KeyComponent;
  package$component.GamepadComponent = GamepadComponent;
  package$component.EventComponent = EventComponent;
  package$component.UpdateComponentWithViews = UpdateComponentWithViews;
  package$component.UpdateComponent = UpdateComponent;
  package$component.ResizeComponent = ResizeComponent;
  var package$docking = package$component.docking || (package$component.docking = {});
  package$docking.DockingComponent = DockingComponent;
  package$docking.dockedTo_aze1gs$ = dockedTo;
  package$docking.JellyButton = JellyButton;
  package$docking.jellyButton_bnh9hk$ = jellyButton;
  package$docking.SortedChildrenByComponent = SortedChildrenByComponent;
  package$docking.sortChildrenBy_yxcb00$ = sortChildrenBy;
  package$docking.toComparator_s64sm4$ = toComparator;
  package$docking.sortChildrenBy_c413dr$ = sortChildrenBy_0;
  package$docking.sortChildrenByY_st8p7j$ = sortChildrenByY;
  package$docking.keepChildrenSortedBy_q1v4n6$ = keepChildrenSortedBy;
  package$docking.keepChildrenSortedBy_wgyu3k$ = keepChildrenSortedBy_0;
  package$docking.keepChildrenSortedByY_8rk341$ = keepChildrenSortedByY;
  var package$list = package$component.list || (package$component.list = {});
  package$list.GridViewList = GridViewList;
  ViewList.ChangeEvent = ViewList$ChangeEvent;
  package$list.ViewList = ViewList;
  Object.defineProperty(Html$Alignment, 'Companion', {
    get: Html$Alignment$Companion_getInstance
  });
  Html.prototype.Alignment = Html$Alignment;
  Html$FontFace.Named = Html$FontFace$Named;
  Html$FontFace.Bitmap = Html$FontFace$Bitmap;
  Html.prototype.FontFace = Html$FontFace;
  Html.prototype.Format = Html$Format;
  Object.defineProperty(Html$MetricsProvider, 'Identity', {
    get: Html$MetricsProvider$Identity_getInstance
  });
  Html.prototype.MetricsProvider = Html$MetricsProvider;
  Html.prototype.PositionContext = Html$PositionContext;
  Html.prototype.Span = Html$Span;
  Html.prototype.Line = Html$Line;
  Html.prototype.Paragraph = Html$Paragraph;
  Html.prototype.Document = Html$Document;
  Html.prototype.HtmlParser = Html$HtmlParser;
  var package$html = package$korge.html || (package$korge.html = {});
  Object.defineProperty(package$html, 'Html', {
    get: Html_getInstance
  });
  var package$i18n = package$korge.i18n || (package$korge.i18n = {});
  package$i18n.ConstantTextSource = ConstantTextSource;
  package$i18n.TextContainer = TextContainer;
  package$i18n.TextSource = TextSource;
  package$i18n.toTextSource_pdl1vz$ = toTextSource;
  package$i18n.get_language_jv80cy$ = get_language;
  package$i18n.set_language_1y2ct2$ = set_language;
  var package$input = package$korge.input || (package$korge.input = {});
  package$input.get_drag_gohfi1$ = get_drag;
  package$async.get_KorgeDispatcher = get_KorgeDispatcher;
  package$input.onDragStart_75bvmw$ = onDragStart;
  package$input.onDragEnd_75bvmw$ = onDragEnd;
  package$input.onDragMove_75bvmw$ = onDragMove;
  DragComponent.Info = DragComponent$Info;
  package$input.DragComponent = DragComponent;
  package$input.GamePadEvents = GamePadEvents;
  package$input.get_gamepad_gohfi1$ = get_gamepad;
  package$input.gamepad_hynbqt$ = gamepad_0;
  Object.defineProperty(Gestures$Direction, 'Companion', {
    get: Gestures$Direction$Companion_getInstance
  });
  Gestures.Direction_init_vux9f0$ = Gestures$Gestures$Direction_init;
  Gestures.Direction = Gestures$Direction;
  package$input.Gestures = Gestures;
  package$input.get_gestures_gohfi1$ = get_gestures;
  Object.defineProperty(Input, 'Companion', {
    get: Input$Companion_getInstance
  });
  package$input.Input = Input;
  package$input.KeysEvents = KeysEvents;
  package$input.get_keys_gohfi1$ = get_keys;
  package$input.keys_xhqbsk$ = keys_0;
  package$input.onKeyDown_buokfe$ = onKeyDown;
  package$input.onKeyUp_buokfe$ = onKeyUp;
  package$input.onKeyTyped_buokfe$ = onKeyTyped;
  package$input.MouseEvents = MouseEvents;
  package$input.get_mouse_gohfi1$ = get_mouse;
  package$input.mouse_cr2qe1$ = mouse_0;
  package$input.onClick_j1eskf$ = onClick;
  package$input.onOver_j1eskf$ = onOver;
  package$input.onOut_j1eskf$ = onOut;
  package$input.onDown_j1eskf$ = onDown;
  package$input.onDownFromOutside_j1eskf$ = onDownFromOutside;
  package$input.onUp_j1eskf$ = onUp;
  package$input.onUpOutside_j1eskf$ = onUpOutside;
  package$input.onUpAnywhere_j1eskf$ = onUpAnywhere;
  package$input.onMove_j1eskf$ = onMove;
  var package$lipsync = package$korge.lipsync || (package$korge.lipsync = {});
  package$lipsync.LipSync = LipSync;
  package$lipsync.Voice = Voice;
  package$lipsync.LipSyncEvent = LipSyncEvent;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$lipsync.LipSyncHandler = LipSyncHandler;
  package$lipsync.LipSyncComponent = LipSyncComponent;
  package$lipsync.get_lipSync_jv80cy$ = get_lipSync;
  package$lipsync.readVoice_s70ap7$ = readVoice;
  Object.defineProperty(ParticleEmitter$Type, 'GRAVITY', {
    get: ParticleEmitter$Type$GRAVITY_getInstance
  });
  Object.defineProperty(ParticleEmitter$Type, 'RADIAL', {
    get: ParticleEmitter$Type$RADIAL_getInstance
  });
  ParticleEmitter.Type = ParticleEmitter$Type;
  $$importsForInline$$['korim-js'] = $module$korim_js;
  ParticleEmitter.Particle = ParticleEmitter$Particle;
  ParticleEmitter.Simulator = ParticleEmitter$Simulator;
  var package$particle = package$korge.particle || (package$korge.particle = {});
  package$particle.ParticleEmitter = ParticleEmitter;
  package$particle.readParticle_s70ap7$ = readParticle;
  package$particle.attachParticleAndWait_n8drz7$ = attachParticleAndWait;
  var package$view = package$korge.view || (package$korge.view = {});
  package$view.addTo_fct211$ = addTo;
  package$particle.particleEmitter_eivtgg$ = particleEmitter;
  package$particle.ParticleEmitterView = ParticleEmitterView;
  var package$render = package$korge.render || (package$korge.render = {});
  package$render.get_texMipmaps_p18lal$ = get_texMipmaps;
  package$render.set_texMipmaps_p7kutq$ = set_texMipmaps;
  package$render.mipmaps_6tbmt4$ = mipmaps;
  package$render.AgBitmapTextureManager = AgBitmapTextureManager;
  $$importsForInline$$['korag-js'] = $module$korag_js;
  Object.defineProperty(BatchBuilder2D, 'Companion', {
    get: BatchBuilder2D$Companion_getInstance
  });
  package$render.BatchBuilder2D = BatchBuilder2D;
  Object.defineProperty(TexturedVertexArray, 'Companion', {
    get: TexturedVertexArray$Companion_getInstance
  });
  package$render.TexturedVertexArray = TexturedVertexArray;
  package$render.ensurePowerOfTwo_leuab8$ = ensurePowerOfTwo;
  package$render.RenderContext = RenderContext;
  package$render.RenderContext2D = RenderContext2D;
  Object.defineProperty(Texture, 'Companion', {
    get: Texture$Companion_getInstance
  });
  Texture.Base = Texture$Base;
  package$render.Texture = Texture;
  package$render.TextureWithBitmapSlice = TextureWithBitmapSlice;
  package$render.TransformedTexture = TransformedTexture;
  var package$resources = package$korge.resources || (package$korge.resources = {});
  package$resources.Cached = Cached;
  package$resources.VPath = VPath;
  package$resources.getPath_ufosyu$ = getPath;
  package$resources.ResourcesRoot = ResourcesRoot;
  var package$scene = package$korge.scene || (package$korge.scene = {});
  Object.defineProperty(package$scene, 'DebugBitmapFont', {
    get: DebugBitmapFont_getInstance
  });
  package$scene.getDebugBmpFontOnce_fdpuxv$ = getDebugBmpFontOnce;
  package$scene.Intent = Intent;
  package$scene.Module = Module;
  package$scene.Scene = Scene;
  package$scene.ScaledScene = ScaledScene;
  package$scene.EmptyScene = EmptyScene;
  package$scene.LogScene = LogScene;
  package$scene.sleep_bfzdjs$ = sleep;
  package$scene.sleepMs_j3nem9$ = sleepMs;
  package$scene.sceneContainer_e1tpdc$ = sceneContainer;
  Object.defineProperty(SceneContainer, 'Companion', {
    get: SceneContainer$Companion_getInstance
  });
  package$scene.SceneContainer = SceneContainer;
  package$scene.TransitionView = TransitionView;
  package$scene.Transition = Transition;
  package$scene.withEasing_g3uvmu$ = withEasing;
  Object.defineProperty(package$scene, 'AlphaTransition', {
    get: function () {
      return AlphaTransition;
    }
  });
  var package$service = package$korge.service || (package$korge.service = {});
  package$service.Achievements = Achievements;
  package$service.Ads = Ads;
  package$service.Analytics = Analytics;
  package$service.Browser = Browser;
  package$service.CloudSave = CloudSave;
  package$service.InAppPayments = InAppPayments;
  package$service.RateApp = RateApp;
  package$service.Share = Share;
  package$service.Store = Store;
  var package$storage = package$service.storage || (package$service.storage = {});
  package$storage.IStorage = IStorage;
  package$storage.contains_3mep8b$ = contains;
  package$storage.get_3mep8b$ = get_1;
  package$storage.InmemoryStorage = InmemoryStorage;
  package$storage.Storage = Storage;
  package$storage.StorageBase = StorageBase;
  package$storage.StorageItem = StorageItem;
  Stats.Named = Stats$Named;
  Stats.Counter = Stats$Counter;
  Stats.Value = Stats$Value;
  Stats.RCollection = Stats$RCollection;
  var package$stat = package$korge.stat || (package$korge.stat = {});
  package$stat.Stats = Stats;
  var package$tests = package$korge.tests || (package$korge.tests = {});
  package$tests.KorgeTest = KorgeTest;
  package$tests.ViewsForTesting = ViewsForTesting;
  var package$tiled = package$korge.tiled || (package$korge.tiled = {});
  package$tiled.get_patterns_b7bx3x$ = get_patterns;
  package$tiled.get_images_b7bx3x$ = get_images;
  package$tiled.get_objects_b7bx3x$ = get_objects;
  package$tiled.TiledMapData = TiledMapData;
  package$tiled.getPos_5b2yhr$ = getPos;
  package$tiled.getObjectPosByName_y56jle$ = getObjectPosByName;
  package$tiled.TileSetData = TileSetData;
  TiledMap.TiledTileset = TiledMap$TiledTileset;
  TiledMap$Layer.Patterns = TiledMap$Layer$Patterns;
  TiledMap$Layer.ObjectInfo = TiledMap$Layer$ObjectInfo;
  TiledMap$Layer$Objects.Object = TiledMap$Layer$Objects$Object;
  TiledMap$Layer$Objects.Poly = TiledMap$Layer$Objects$Poly;
  TiledMap$Layer$Objects.Rect = TiledMap$Layer$Objects$Rect;
  TiledMap$Layer$Objects.Ellipse = TiledMap$Layer$Objects$Ellipse;
  TiledMap$Layer$Objects.Polyline = TiledMap$Layer$Objects$Polyline;
  TiledMap$Layer$Objects.Polygon = TiledMap$Layer$Objects$Polygon;
  TiledMap$Layer.Objects = TiledMap$Layer$Objects;
  TiledMap$Layer.Image = TiledMap$Layer$Image;
  TiledMap.Layer = TiledMap$Layer;
  package$tiled.TiledMap = TiledMap;
  package$tiled.get_id_65mzvj$ = get_id;
  package$tiled.get_name_65mzvj$ = get_name;
  package$tiled.get_bounds_65mzvj$ = get_bounds;
  package$tiled.get_objprops_65mzvj$ = get_objprops;
  Object.defineProperty(package$tiled, 'tilemapLog', {
    get: function () {
      return tilemapLog;
    }
  });
  package$tiled.TiledFile = TiledFile;
  package$tiled.readTiledMapData_yirdke$ = readTiledMapData;
  package$tiled.readTiledMap_i0id3h$ = readTiledMap;
  package$tiled.tiledMapView_anlgk5$ = tiledMapView;
  package$tiled.TiledMapView = TiledMapView;
  package$tiled.createView_h64rfr$ = createView;
  var package$time = package$korge.time || (package$korge.time = {});
  package$time.TimerComponents = TimerComponents;
  package$time.TimerComponent = TimerComponent;
  package$time.get_timers_gohfi1$ = get_timers;
  package$time.waitMs_7s4zx7$ = waitMs;
  package$time.wait_f287ec$ = wait;
  package$time.waitFrame_gohfi1$ = waitFrame;
  package$time.sleepMs_7s4zx7$ = sleepMs_0;
  package$time.sleep_f287ec$ = sleep_0;
  package$time.sleepFrame_gohfi1$ = sleepFrame;
  package$time.delay_f287ec$ = delay_0;
  package$time.timer_7ghvt3$ = timer;
  var package$tween = package$korge.tween || (package$korge.tween = {});
  Object.defineProperty(Easing, 'Companion', {
    get: Easing$Companion_getInstance
  });
  package$tween.Easing = Easing;
  Object.defineProperty(package$tween, 'Easings', {
    get: Easings_getInstance
  });
  package$tween.TweenComponent = TweenComponent;
  package$tween.tween_sqtkcm$ = tween;
  package$tween.show_d1ji62$ = show;
  package$tween.hide_d1ji62$ = hide;
  package$tween.get_1ml8v3$ = get_4;
  package$tween.moveTo_42mrl2$ = moveTo;
  package$tween.moveBy_42mrl2$ = moveBy;
  package$tween.scaleTo_42mrl2$ = scaleTo;
  package$tween.rotateTo_joi4df$ = rotateTo;
  package$tween.rotateBy_joi4df$ = rotateBy;
  package$tween.V2_init_qypps$ = V2_init;
  package$tween.V2 = V2;
  package$tween.get_k1tobx$ = get_2;
  package$tween.get_75isb1$ = get_3;
  package$tween.get_8jpm3$ = get_5;
  package$tween.rangeTo_lzd8aq$ = rangeTo;
  package$tween.rangeTo_k1tobx$ = rangeTo_0;
  package$tween.rangeTo_vv5xzx$ = rangeTo_1;
  package$tween.rangeTo_2lgwlq$ = rangeTo_2;
  package$tween.withEasing_3705oi$ = withEasing_0;
  package$tween.color_6iy7so$ = color_1;
  package$tween.easing_3705oi$ = easing;
  package$tween.delay_obe6bn$ = delay_1;
  package$tween.duration_obe6bn$ = duration;
  package$tween.linear_2stsxw$ = linear;
  package$tween.easeIn_2stsxw$ = easeIn;
  package$tween.easeOut_2stsxw$ = easeOut;
  package$tween.easeInOut_2stsxw$ = easeInOut;
  package$tween.easeOutIn_2stsxw$ = easeOutIn;
  package$tween.easeInBack_2stsxw$ = easeInBack;
  package$tween.easeOutBack_2stsxw$ = easeOutBack;
  package$tween.easeInOutBack_2stsxw$ = easeInOutBack;
  package$tween.easeOutInBack_2stsxw$ = easeOutInBack;
  package$tween.easeInElastic_2stsxw$ = easeInElastic;
  package$tween.easeOutElastic_2stsxw$ = easeOutElastic;
  package$tween.easeInOutElastic_2stsxw$ = easeInOutElastic;
  package$tween.easeOutInElastic_2stsxw$ = easeOutInElastic;
  package$tween.easeInBounce_2stsxw$ = easeInBounce;
  package$tween.easeOutBounce_2stsxw$ = easeOutBounce;
  package$tween.easeInOutBounce_2stsxw$ = easeInOutBounce;
  package$tween.easeOutInBounce_2stsxw$ = easeOutInBounce;
  package$tween.easeInQuad_2stsxw$ = easeInQuad;
  package$tween.easeOutQuad_2stsxw$ = easeOutQuad;
  package$tween.easeInOutQuad_2stsxw$ = easeInOutQuad;
  package$tween.easeSine_2stsxw$ = easeSine;
  var package$ui = package$korge.ui || (package$korge.ui = {});
  package$ui.Button = Button;
  package$ui.button_kvui7w$ = button;
  package$ui.KorgeLightComponents = KorgeLightComponents;
  package$ui.KoruiFrameView = KoruiFrameView;
  package$ui.koruiFrame_aqhbz3$ = koruiFrame;
  package$ui.Label = Label;
  package$ui.label_kvui7w$ = label;
  package$ui.UIFactory = UIFactory;
  package$ui.registerUIFactory_jv80cy$ = registerUIFactory;
  UISkin.Factory = UISkin$Factory;
  package$ui.UISkin = UISkin;
  package$ui.getUISkin_49yuzq$ = getUISkin;
  package$ui.Widget = Widget;
  var package$util = package$korge.util || (package$korge.util = {});
  package$util.CancellableGroup = CancellableGroup;
  package$util.AutoClose_bzevgd$ = AutoClose;
  package$util.toBool2_5clz4$ = toBool2;
  Object.defineProperty(BlendMode, 'INHERIT', {
    get: BlendMode$INHERIT_getInstance
  });
  Object.defineProperty(BlendMode, 'NONE', {
    get: BlendMode$NONE_getInstance
  });
  Object.defineProperty(BlendMode, 'NORMAL', {
    get: BlendMode$NORMAL_getInstance
  });
  Object.defineProperty(BlendMode, 'ADD', {
    get: BlendMode$ADD_getInstance
  });
  Object.defineProperty(BlendMode, 'MULTIPLY', {
    get: BlendMode$MULTIPLY_getInstance
  });
  Object.defineProperty(BlendMode, 'SCREEN', {
    get: BlendMode$SCREEN_getInstance
  });
  Object.defineProperty(BlendMode, 'ERASE', {
    get: BlendMode$ERASE_getInstance
  });
  Object.defineProperty(BlendMode, 'MASK', {
    get: BlendMode$MASK_getInstance
  });
  Object.defineProperty(BlendMode, 'BELOW', {
    get: BlendMode$BELOW_getInstance
  });
  Object.defineProperty(BlendMode, 'SUBTRACT', {
    get: BlendMode$SUBTRACT_getInstance
  });
  Object.defineProperty(BlendMode, 'LIGHTEN', {
    get: BlendMode$LIGHTEN_getInstance
  });
  Object.defineProperty(BlendMode, 'DARKEN', {
    get: BlendMode$DARKEN_getInstance
  });
  Object.defineProperty(BlendMode, 'DIFFERENCE', {
    get: BlendMode$DIFFERENCE_getInstance
  });
  Object.defineProperty(BlendMode, 'INVERT', {
    get: BlendMode$INVERT_getInstance
  });
  Object.defineProperty(BlendMode, 'ALPHA', {
    get: BlendMode$ALPHA_getInstance
  });
  Object.defineProperty(BlendMode, 'HARDLIGHT', {
    get: BlendMode$HARDLIGHT_getInstance
  });
  Object.defineProperty(BlendMode, 'Companion', {
    get: BlendMode$Companion_getInstance
  });
  package$view.BlendMode = BlendMode;
  package$view.camera_crl2ny$ = camera;
  package$view.Camera = Camera;
  package$view.container_exzb34$ = container;
  package$view.Container = Container;
  package$view.FixedSizeContainer = FixedSizeContainer;
  package$view.plusAssign_5hnngd$ = plusAssign;
  Object.defineProperty(Fonts, 'Companion', {
    get: Fonts$Companion_getInstance
  });
  package$view.Fonts = Fonts;
  package$view.graphics_gtcasc$ = graphics;
  package$view.Graphics = Graphics;
  package$view.image_bsvffa$ = image;
  package$view.Image_init_4o488k$ = Image_init;
  package$view.image_aw59w$ = image_0;
  package$view.Image = Image;
  package$view.anchor_iay11n$ = anchor;
  Object.defineProperty(Mesh$DrawModes, 'Triangles', {
    get: Mesh$DrawModes$Triangles_getInstance
  });
  Object.defineProperty(Mesh$DrawModes, 'TriangleStrip', {
    get: Mesh$DrawModes$TriangleStrip_getInstance
  });
  Mesh.DrawModes = Mesh$DrawModes;
  package$view.Mesh = Mesh;
  package$view.pivot_2c5zt9$ = pivot;
  package$view.ninePatch_yck3qr$ = ninePatch;
  package$view.NinePatch = NinePatch;
  package$view.ninePatch_acklyn$ = ninePatch_0;
  package$view.NinePatchEx = NinePatchEx;
  package$view.ninePatch_qlcbrr$ = ninePatch_1;
  Object.defineProperty(NinePatchEx, 'Companion', {
    get: NinePatchEx$Companion_getInstance
  });
  NinePatchEx.Tex_init_hdw37b$ = NinePatchEx$NinePatchEx$Tex_init;
  NinePatchEx.Tex = NinePatchEx$Tex;
  package$view.RectBase = RectBase;
  package$view.anchor_7ptuor$ = anchor_0;
  package$view.Renderable = Renderable;
  package$view.scaleView_pzl28r$ = scaleView;
  package$view.ScaleView = ScaleView;
  package$view.solidRect_gl3y1$ = solidRect;
  Object.defineProperty(SolidRect, 'Companion', {
    get: SolidRect$Companion_getInstance
  });
  package$view.SolidRect = SolidRect;
  package$view.Text = Text;
  package$view.text_tq6xby$ = text;
  Object.defineProperty(Text, 'Companion', {
    get: Text$Companion_getInstance
  });
  package$view.IText = IText;
  package$view.IHtml = IHtml;
  package$view.setText_4h3qbs$ = setText;
  package$view.setHtml_4h3qbs$ = setHtml;
  package$view.Updatable = Updatable;
  package$view.ViewsDslMarker = ViewsDslMarker;
  View.Reference = View$Reference;
  Object.defineProperty(View$HitTestType, 'BOUNDING', {
    get: View$HitTestType$BOUNDING_getInstance
  });
  Object.defineProperty(View$HitTestType, 'SHAPE', {
    get: View$HitTestType$SHAPE_getInstance
  });
  View.HitTestType = View$HitTestType;
  Object.defineProperty(View, 'Companion', {
    get: View$Companion_getInstance
  });
  package$view.View = View;
  package$view.DummyView = DummyView;
  package$view.hasAncestor_ow9aoh$ = hasAncestor;
  package$view.replaceWith_ow9aoh$ = replaceWith;
  package$view.get_ancestorCount_jv7z46$ = get_ancestorCount;
  package$view.ancestorsUpTo_5hnngd$ = ancestorsUpTo;
  package$view.get_ancestors_jv7z46$ = get_ancestors;
  package$view.dump_ryd74p$ = dump;
  package$view.dumpToString_jv7z46$ = dumpToString;
  package$view.foreachDescendant_1m112d$ = foreachDescendant;
  package$view.descendantsWithProp_s229vv$ = descendantsWithProp;
  package$view.descendantsWithPropString_s229vv$ = descendantsWithPropString;
  package$view.descendantsWithPropInt_obdzzd$ = descendantsWithPropInt;
  package$view.descendantsWithPropDouble_xkqg1h$ = descendantsWithPropDouble;
  package$view.get_4h3qbs$ = get_6;
  package$view.firstDescendantWithName_4h3qbs$ = firstDescendantWithName;
  package$view.get_allDescendantNames_jv7z46$ = get_allDescendantNames;
  package$view.firstDescendantWith_tm69th$ = firstDescendantWith;
  package$view.descendantsWith_yd6hk$ = descendantsWith;
  package$view.xy_t6upcb$ = xy;
  package$view.position_t6upcb$ = position;
  package$view.rotation_17knrc$ = rotation;
  package$view.rotation_q8hyz9$ = rotation_0;
  package$view.rotationDegrees_q8hyz9$ = rotationDegrees;
  package$view.skew_t6upcb$ = skew;
  package$view.scale_t6upcb$ = scale;
  package$view.alpha_q8hyz9$ = alpha;
  Object.defineProperty(BoundsProvider, 'Dummy', {
    get: BoundsProvider$Dummy_getInstance
  });
  package$view.BoundsProvider = BoundsProvider;
  package$view.Views = Views;
  package$view.Stage = Stage;
  package$view.ViewsLog = ViewsLog;
  package$view.texture_q2u7nr$ = texture;
  package$view.texture_icneeg$ = texture_0;
  package$view.texture_tgw6oz$ = texture_1;
  package$view.texture_h60gx9$ = texture_2;
  package$view.texture_jlutv3$ = texture_3;
  package$view.ViewsContainer = ViewsContainer;
  package$view.get_ag_okreqd$ = get_ag;
  package$view.KorgeFileLoaderTester = KorgeFileLoaderTester;
  package$view.KorgeFileLoader = KorgeFileLoader;
  var package$tiles = package$view.tiles || (package$view.tiles = {});
  package$tiles.tileMap_7fsqxt$ = tileMap;
  TileMap.Info = TileMap$Info;
  package$tiles.TileMap = TileMap;
  Object.defineProperty(TileSet, 'Companion', {
    get: TileSet$Companion_getInstance
  });
  package$tiles.TileSet = TileSet;
  Object.defineProperty(package$korge, 'KORGE_VERSION_8be2vx$', {
    get: function () {
      return KORGE_VERSION;
    }
  });
  package$korge.register_jqwtmq$ = register;
  Object.defineProperty(package$storage, 'NativeStorage', {
    get: NativeStorage_getInstance
  });
  CancellableGroup.prototype.cancel_tcv7n7$ = Cancellable.prototype.cancel_tcv7n7$;
  stencilIndex = new Extra$Property(void 0, stencilIndex$lambda);
  animateLibraryLoaders = new Extra$Property(void 0, animateLibraryLoaders$lambda);
  soundSystem = new Extra$PropertyThis(void 0, soundSystem$lambda);
  extraLanguage = new Extra$Property(void 0, extraLanguage$lambda);
  drag = new Extra$PropertyThis(void 0, drag$lambda);
  gamepad = new Extra$PropertyThis(void 0, gamepad$lambda);
  keys = new Extra$PropertyThis(void 0, keys$lambda);
  mouse = new Extra$PropertyThis(void 0, mouse$lambda);
  lipSync = new Extra$PropertyThis(void 0, lipSync$lambda);
  texMipmaps = new Extra$Property(void 0, texMipmaps$lambda);
  logger = Logger.Companion.invoke_61zpoe$('BatchBuilder2D');
  logger_0 = Logger.Companion.invoke_61zpoe$('RenderContext2D');
  AlphaTransition = new Transition(AlphaTransition$lambda);
  spaces = Regex_init('\\s+');
  tilemapLog = Logger.Companion.invoke_61zpoe$('tilemap');
  logger_1 = Logger.Companion.invoke_61zpoe$('Views');
  KORGE_VERSION = '0.20.1';
  Kotlin.defineModule('korge-js', _);
  return _;
}));

//# sourceMappingURL=korge-js.js.map
