(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korma-js', 'kmem-js', 'korio-js', 'kds-js', 'klock-js', 'korlibstd-js', 'klogger-js', 'kotlinx-coroutines-core'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korma-js'), require('kmem-js'), require('korio-js'), require('kds-js'), require('klock-js'), require('korlibstd-js'), require('klogger-js'), require('kotlinx-coroutines-core'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korim-js'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['kds-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'kds-js' was not found. Please, check whether 'kds-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['klock-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'klock-js' was not found. Please, check whether 'klock-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['korlibstd-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'korlibstd-js' was not found. Please, check whether 'korlibstd-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['klogger-js'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'klogger-js' was not found. Please, check whether 'klogger-js' is loaded prior to 'korim-js'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korim-js'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korim-js'.");
    }
    root['korim-js'] = factory(typeof this['korim-js'] === 'undefined' ? {} : this['korim-js'], kotlin, this['korma-js'], this['kmem-js'], this['korio-js'], this['kds-js'], this['klock-js'], this['korlibstd-js'], this['klogger-js'], this['kotlinx-coroutines-core']);
  }
}(this, function (_, Kotlin, $module$korma_js, $module$kmem_js, $module$korio_js, $module$kds_js, $module$klock_js, $module$korlibstd_js, $module$klogger_js, $module$kotlinx_coroutines_core) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Unit = Kotlin.kotlin.Unit;
  var toIntFloor = $module$kmem_js.com.soywiz.kmem.toIntFloor_yrwdxr$;
  var toIntCeil = $module$kmem_js.com.soywiz.kmem.toIntCeil_yrwdxr$;
  var clamp = $module$kmem_js.com.soywiz.kmem.clamp_e4yvb3$;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var Extra = $module$kds_js.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_js.com.soywiz.kds.Extra.Mixin;
  var Sizeable = $module$korma_js.com.soywiz.korma.geom.Sizeable;
  var throwCCE = Kotlin.throwCCE;
  var toShort = Kotlin.toShort;
  var arraycopy = $module$kmem_js.com.soywiz.kmem.arraycopy_ai5qaq$;
  var arraycopy_0 = $module$kmem_js.com.soywiz.kmem.arraycopy_lvhpry$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var toByte = Kotlin.toByte;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var numberToInt = Kotlin.numberToInt;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var error = $module$korio_js.com.soywiz.korio.error;
  var insert = $module$kmem_js.com.soywiz.kmem.insert_4684dr$;
  var arraycopy_1 = $module$kmem_js.com.soywiz.kmem.arraycopy_nlwz52$;
  var toBoxedChar = Kotlin.toBoxedChar;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var UByteArray = $module$kmem_js.com.soywiz.kmem.UByteArray;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var RectangleInt = $module$korma_js.com.soywiz.korma.geom.RectangleInt;
  var getCyclic = $module$kds_js.com.soywiz.kds.getCyclic_r20n03$;
  var RectangleInt_init = $module$korma_js.com.soywiz.korma.geom.RectangleInt_init_tjonv8$;
  var UnsupportedOperationException_init_0 = Kotlin.kotlin.UnsupportedOperationException_init;
  var crypto = $module$korio_js.com.soywiz.korio.crypto;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var get_length = $module$korio_js.com.soywiz.korio.util.get_length_9tsm8a$;
  var clamp_0 = $module$kmem_js.com.soywiz.kmem.clamp_nig4hr$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var get_endExclusive = $module$korio_js.com.soywiz.korio.util.get_endExclusive_9tsm8a$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var PropertyMetadata = Kotlin.PropertyMetadata;
  var Extra$PropertyThis = $module$kds_js.com.soywiz.kds.Extra.PropertyThis;
  var sum_0 = Kotlin.kotlin.collections.sum_l63kqw$;
  var extractScaledFF = $module$kmem_js.com.soywiz.kmem.extractScaledFF_e4yvb3$;
  var extractScaledFFDefault = $module$kmem_js.com.soywiz.kmem.extractScaledFFDefault_4684dr$;
  var insertScaledFF = $module$kmem_js.com.soywiz.kmem.insertScaledFF_4684dr$;
  var readU16_le = $module$kmem_js.com.soywiz.kmem.readU16_le_mrm5p$;
  var getCallableRef = Kotlin.getCallableRef;
  var readU16_be = $module$kmem_js.com.soywiz.kmem.readU16_be_mrm5p$;
  var readU24_le = $module$kmem_js.com.soywiz.kmem.readU24_le_mrm5p$;
  var readU24_be = $module$kmem_js.com.soywiz.kmem.readU24_be_mrm5p$;
  var readS32_le = $module$kmem_js.com.soywiz.kmem.readS32_le_mrm5p$;
  var readS32_be = $module$kmem_js.com.soywiz.kmem.readS32_be_mrm5p$;
  var write16_le = $module$kmem_js.com.soywiz.kmem.write16_le_ietg8x$;
  var write16_be = $module$kmem_js.com.soywiz.kmem.write16_be_ietg8x$;
  var write24_le = $module$kmem_js.com.soywiz.kmem.write24_le_ietg8x$;
  var write24_be = $module$kmem_js.com.soywiz.kmem.write24_be_ietg8x$;
  var write32_le = $module$kmem_js.com.soywiz.kmem.write32_le_ietg8x$;
  var write32_be = $module$kmem_js.com.soywiz.kmem.write32_be_ietg8x$;
  var interpolate = $module$korma_js.com.soywiz.korma.interpolation.interpolate_nig4hr$;
  var interpolate_0 = $module$korma_js.com.soywiz.korma.interpolation.interpolate_i767ff$;
  var get_niceStr = $module$kmem_js.com.soywiz.kmem.get_niceStr_yrwdxr$;
  var MutableInterpolable = $module$korma_js.com.soywiz.korma.interpolation.MutableInterpolable;
  var Interpolable = $module$korma_js.com.soywiz.korma.interpolation.Interpolable;
  var substr = $module$korio_js.com.soywiz.korio.lang.substr_6ic1pp$;
  var setOf = Kotlin.kotlin.collections.setOf_i5x0yv$;
  var substr_0 = $module$korio_js.com.soywiz.korio.lang.substr_qgyqat$;
  var toInt = Kotlin.kotlin.text.toInt_6ic1pp$;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var removePrefix = Kotlin.kotlin.text.removePrefix_gsj5wt$;
  var removeSuffix = Kotlin.kotlin.text.removeSuffix_gsj5wt$;
  var split = Kotlin.kotlin.text.split_ip8yn$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var toDoubleOrNull = Kotlin.kotlin.text.toDoubleOrNull_pdl1vz$;
  var toString = Kotlin.toString;
  var format = $module$korio_js.com.soywiz.korio.lang.format_e33kwl$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var extract8 = $module$kmem_js.com.soywiz.kmem.extract8_dqglrj$;
  var insert8 = $module$kmem_js.com.soywiz.kmem.insert8_e4yvb3$;
  var interpolate_1 = $module$korma_js.com.soywiz.korma.interpolation.interpolate_224j3y$;
  var Comparable = Kotlin.kotlin.Comparable;
  var SubListGeneric = $module$korio_js.com.soywiz.korio.ds.SubListGeneric;
  var contains = Kotlin.kotlin.collections.contains_c03ot6$;
  var indexOf = Kotlin.kotlin.collections.indexOf_c03ot6$;
  var lastIndexOf = Kotlin.kotlin.collections.lastIndexOf_c03ot6$;
  var GenericListIterator = $module$korio_js.com.soywiz.korio.ds.GenericListIterator;
  var List = Kotlin.kotlin.collections.List;
  var get_niceStr_0 = $module$kmem_js.com.soywiz.kmem.get_niceStr_81szk$;
  var iterator = Kotlin.kotlin.text.iterator_gw00vp$;
  var unboxChar = Kotlin.unboxChar;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var get_indices = Kotlin.kotlin.text.get_indices_gw00vp$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var toChar = Kotlin.toChar;
  var String_fromIntArray = $module$korio_js.com.soywiz.korio.lang.String_fromIntArray_nd5v6f$;
  var CharRange = Kotlin.kotlin.ranges.CharRange;
  var throwUPAE = Kotlin.throwUPAE;
  var readS16_le = $module$korio_js.com.soywiz.korio.stream.readS16_le_p2awyq$;
  var sliceStart = $module$korio_js.com.soywiz.korio.stream.sliceStart_ucmi9i$;
  var readU16_be_0 = $module$korio_js.com.soywiz.korio.stream.readU16_be_p2awyq$;
  var readStringz = $module$korio_js.com.soywiz.korio.stream.readStringz_6ey4ts$;
  var readS32_be_0 = $module$korio_js.com.soywiz.korio.stream.readS32_be_p2awyq$;
  var sliceWithSize = $module$korio_js.com.soywiz.korio.stream.sliceWithSize_acdave$;
  var lang = $module$korio_js.com.soywiz.korio.lang;
  var sliceWithSize_0 = $module$korio_js.com.soywiz.korio.stream.sliceWithSize_1r8368$;
  var readAll = $module$korio_js.com.soywiz.korio.stream.readAll_ucmi9i$;
  var toString_0 = $module$korio_js.com.soywiz.korio.lang.toString_5kit73$;
  var readBytesExact = $module$korio_js.com.soywiz.korio.stream.readBytesExact_xpzb7k$;
  var FastByteArrayInputStream = $module$korio_js.com.soywiz.korio.stream.FastByteArrayInputStream;
  var toList = Kotlin.kotlin.collections.toList_tmsbgo$;
  var get_hex = $module$korio_js.com.soywiz.korio.crypto.get_hex_s8ev3n$;
  var readS64_be = $module$korio_js.com.soywiz.korio.stream.readS64_be_p2awyq$;
  var L1000 = Kotlin.Long.fromInt(1000);
  var readS16_be = $module$korio_js.com.soywiz.korio.stream.readS16_be_p2awyq$;
  var DateTime = $module$klock_js.com.soywiz.klock.DateTime;
  var last = Kotlin.kotlin.collections.last_2p1efm$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var sliceStart_0 = $module$korio_js.com.soywiz.korio.stream.sliceStart_gezhyr$;
  var readCharArray_be = $module$korio_js.com.soywiz.korio.stream.readCharArray_be_xpzb7k$;
  var readShortArray_be = $module$korio_js.com.soywiz.korio.stream.readShortArray_be_xpzb7k$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_c03ot6$;
  var toUnsigned = $module$kmem_js.com.soywiz.kmem.toUnsigned_s8ev3n$;
  var L0 = Kotlin.Long.ZERO;
  var equals = Kotlin.equals;
  var readS8 = $module$korio_js.com.soywiz.korio.stream.readS8_p2awyq$;
  var readU8 = $module$korio_js.com.soywiz.korio.stream.readU8_p2awyq$;
  var lastOrNull = Kotlin.kotlin.collections.lastOrNull_tmsbgo$;
  var IntArrayList = $module$kds_js.com.soywiz.kds.IntArrayList;
  var copyOf = Kotlin.kotlin.collections.copyOf_c03ot6$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var readS32_le_0 = $module$korio_js.com.soywiz.korio.stream.readS32_le_p2awyq$;
  var readBytes = $module$korio_js.com.soywiz.korio.stream.readBytes_xpzb7k$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var read = $module$korio_js.com.soywiz.korio.stream.read_1fivb2$;
  var skip = $module$korio_js.com.soywiz.korio.stream.skip_hsu5ns$;
  var readString = $module$korio_js.com.soywiz.korio.stream.readString_6ey4ts$;
  var readStream = $module$korio_js.com.soywiz.korio.stream.readStream_hsu5ns$;
  var readIntArray_le = $module$korio_js.com.soywiz.korio.stream.readIntArray_le_xpzb7k$;
  var openSync = $module$korio_js.com.soywiz.korio.stream.openSync_m1iwyb$;
  var Extra$Property = $module$kds_js.com.soywiz.kds.Extra.Property;
  var readU32_le = $module$kmem_js.com.soywiz.kmem.readU32_le_mrm5p$;
  var L7 = Kotlin.Long.fromInt(7);
  var PathInfo = $module$korio_js.com.soywiz.korio.file.PathInfo;
  var get_extensionLC = $module$korio_js.com.soywiz.korio.file.get_extensionLC_hsf53c$;
  var readU8_0 = $module$kmem_js.com.soywiz.kmem.readU8_mrm5p$;
  var readU16_le_0 = $module$korio_js.com.soywiz.korio.stream.readU16_le_p2awyq$;
  var readU32_be = $module$korio_js.com.soywiz.korio.stream.readU32_be_p2awyq$;
  var L2303741511 = new Kotlin.Long(-1991225785, 0);
  var sortedBy2 = $module$kds_js.com.soywiz.kds.sortedBy2_nd8ern$;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var executeInWorker = $module$korio_js.com.soywiz.korio.async.executeInWorker_lnyleu$;
  var get_basename = $module$korio_js.com.soywiz.korio.file.get_basename_hsf53c$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var get_hex_0 = $module$korio_js.com.soywiz.korio.crypto.get_hex_964n91$;
  var plus_0 = Kotlin.kotlin.collections.plus_xfiyik$;
  var plus_1 = Kotlin.kotlin.collections.plus_khz7k3$;
  var atomicLazy = $module$korlibstd_js.com.soywiz.std.atomicLazy_klfg04$;
  var writeBytes = $module$korio_js.com.soywiz.korio.stream.writeBytes_o1e1if$;
  var toString_1 = $module$korio_js.com.soywiz.korio.util.toString_dqglrj$;
  var UByteArray_init = $module$kmem_js.com.soywiz.kmem.UByteArray_init_za3lpa$;
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var max = Kotlin.kotlin.collections.max_tmsbgo$;
  var ByteArrayBuilder = $module$korio_js.com.soywiz.korio.stream.ByteArrayBuilder;
  var readAll_0 = $module$korio_js.com.soywiz.korio.stream.readAll_yjldv$;
  var write32_be_0 = $module$korio_js.com.soywiz.korio.stream.write32_be_n5df9z$;
  var toByteArray = $module$korio_js.com.soywiz.korio.lang.toByteArray_7jlb4b$;
  var copyOf_0 = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var convertRangeClamped = $module$kmem_js.com.soywiz.kmem.convertRangeClamped_legt9$;
  var CompressionContext = $module$korio_js.com.soywiz.korio.compression.CompressionContext;
  var syncCompress = $module$korio_js.com.soywiz.korio.compression.syncCompress_yhvi5r$;
  var write8 = $module$korio_js.com.soywiz.korio.stream.write8_n5df9z$;
  var write8_0 = $module$kmem_js.com.soywiz.kmem.write8_ietg8x$;
  var readStream_0 = $module$korio_js.com.soywiz.korio.stream.readStream_gezhyr$;
  var get_eof = $module$korio_js.com.soywiz.korio.stream.get_eof_ucmi9i$;
  var ByteArrayBuffer_init = $module$kmem_js.com.soywiz.kmem.ByteArrayBuffer_init_za3lpa$;
  var MemorySyncStreamBase = $module$korio_js.com.soywiz.korio.stream.MemorySyncStreamBase;
  var toSyncStream = $module$korio_js.com.soywiz.korio.stream.toSyncStream_wrqxjw$;
  var syncUncompress = $module$korio_js.com.soywiz.korio.compression.syncUncompress_spqvkl$;
  var readExact = $module$korio_js.com.soywiz.korio.stream.readExact_hz4ta6$;
  var deflate = $module$korio_js.com.soywiz.korio.compression.deflate;
  var readAvailable = $module$korio_js.com.soywiz.korio.stream.readAvailable_ucmi9i$;
  var openFastStream = $module$korio_js.com.soywiz.korio.stream.openFastStream_mrm5p$;
  var getOrNull_0 = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var toUnsigned_0 = $module$kmem_js.com.soywiz.kmem.toUnsigned_mz3mee$;
  var write16_le_0 = $module$korio_js.com.soywiz.korio.stream.write16_le_n5df9z$;
  var bounds = $module$korma_js.com.soywiz.korma.geom.bounds_kobt9m$;
  var transformed = $module$korma_js.com.soywiz.korma.transformed_a8te0c$;
  var bounds_0 = $module$korma_js.com.soywiz.korma.geom.bounds_hrwf8m$;
  var toPaths2 = $module$korma_js.com.soywiz.korma.geom.shape.toPaths2_krcd5j$;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var contains_0 = Kotlin.kotlin.ranges.contains_x0ackb$;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var last_0 = Kotlin.kotlin.collections.last_7wnvza$;
  var Matrix2d = $module$korma_js.com.soywiz.korma.Matrix2d;
  var distanceTo = $module$korma_js.com.soywiz.korma.distanceTo_fu3msx$;
  var Angle = $module$korma_js.com.soywiz.korma.geom.Angle;
  var clamp01 = $module$kmem_js.com.soywiz.kmem.clamp01_yrwdxr$;
  var math = Kotlin.kotlin.math;
  var Rectangle = $module$korma_js.com.soywiz.korma.geom.Rectangle;
  var DoubleArrayList_init = $module$kds_js.com.soywiz.kds.DoubleArrayList_init_avch8c$;
  var IntArrayList_init = $module$kds_js.com.soywiz.kds.IntArrayList_init_38vc8i$;
  var DoubleArrayList = $module$kds_js.com.soywiz.kds.DoubleArrayList;
  var LinkedList_init = $module$kds_js.com.soywiz.kds.LinkedList_init_287e2$;
  var getPropertyCallableRef = Kotlin.getPropertyCallableRef;
  var Disposable = $module$korio_js.com.soywiz.korio.lang.Disposable;
  var numberToDouble = Kotlin.numberToDouble;
  var VectorPath$Winding = $module$korma_js.com.soywiz.korma.geom.VectorPath.Winding;
  var VectorPath = $module$korma_js.com.soywiz.korma.geom.VectorPath;
  var Xml = $module$korio_js.com.soywiz.korio.serialization.xml.Xml;
  var linkedMapOf = Kotlin.kotlin.collections.linkedMapOf_qfcya0$;
  var mapOf_0 = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var toString_2 = $module$korio_js.com.soywiz.korio.util.toString_9rbwic$;
  var BoundsBuilder = $module$korma_js.com.soywiz.korma.geom.BoundsBuilder;
  var plus_2 = Kotlin.kotlin.collections.plus_iwxh38$;
  var max_0 = Kotlin.kotlin.collections.max_l63kqw$;
  var first_0 = Kotlin.kotlin.collections.first_2p1efm$;
  var max_1 = Kotlin.kotlin.collections.max_exjks8$;
  var endsWith = Kotlin.kotlin.text.endsWith_7epoxm$;
  var toDouble = Kotlin.kotlin.text.toDouble_pdl1vz$;
  var Pair = Kotlin.kotlin.Pair;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var get_allChildren = $module$korio_js.com.soywiz.korio.serialization.xml.get_allChildren_ibjdnu$;
  var get_isComment = $module$korio_js.com.soywiz.korio.serialization.xml.get_isComment_byavcz$;
  var StrReader = $module$korio_js.com.soywiz.korio.util.StrReader;
  var get_isNumeric = $module$korio_js.com.soywiz.korio.util.get_isNumeric_myv2d0$;
  var mapWhile = $module$kds_js.com.soywiz.kds.mapWhile_sj71nh$;
  var ListReader = $module$kds_js.com.soywiz.kds.ListReader;
  var isDigit = $module$korio_js.com.soywiz.korio.util.isDigit_myv2d0$;
  var isLetterOrUnderscore = $module$korio_js.com.soywiz.korio.util.isLetterOrUnderscore_myv2d0$;
  var expect = $module$kds_js.com.soywiz.kds.expect_2mact2$;
  var Logger = $module$klogger_js.com.soywiz.klogger.Logger;
  var split_0 = Kotlin.kotlin.text.split_o64adg$;
  var Xml_0 = $module$korio_js.com.soywiz.korio.serialization.xml.Xml_61zpoe$;
  var util = $module$korio_js.com.soywiz.korio.util;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var LocalVfs = $module$korio_js.com.soywiz.korio.file.std.LocalVfs;
  var UrlVfs = $module$korio_js.com.soywiz.korio.file.std.UrlVfs;
  var toBase64 = $module$korio_js.com.soywiz.korio.crypto.toBase64_964n91$;
  BitmapIndexed.prototype = Object.create(Bitmap.prototype);
  BitmapIndexed.prototype.constructor = BitmapIndexed;
  Bitmap1.prototype = Object.create(BitmapIndexed.prototype);
  Bitmap1.prototype.constructor = Bitmap1;
  Bitmap16.prototype = Object.create(Bitmap.prototype);
  Bitmap16.prototype.constructor = Bitmap16;
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
  PaletteColorFormat.prototype = Object.create(ColorFormat.prototype);
  PaletteColorFormat.prototype.constructor = PaletteColorFormat;
  RGB.prototype = Object.create(ColorFormat24.prototype);
  RGB.prototype.constructor = RGB;
  RGB$Companion.prototype = Object.create(RGB.prototype);
  RGB$Companion.prototype.constructor = RGB$Companion;
  BGR.prototype = Object.create(RGB.prototype);
  BGR.prototype.constructor = BGR;
  RGBA$Companion.prototype = Object.create(ColorFormat32.prototype);
  RGBA$Companion.prototype.constructor = RGBA$Companion;
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
  YCbCr.prototype = Object.create(ColorFormat32.prototype);
  YCbCr.prototype.constructor = YCbCr;
  YUVA.prototype = Object.create(ColorFormat32.prototype);
  YUVA.prototype.constructor = YUVA;
  TtfFont$NameIds.prototype = Object.create(Enum.prototype);
  TtfFont$NameIds.prototype.constructor = TtfFont$NameIds;
  TtfFont$Origin.prototype = Object.create(Enum.prototype);
  TtfFont$Origin.prototype.constructor = TtfFont$Origin;
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
  PSD$PsdImageInfo.prototype = Object.create(ImageInfo.prototype);
  PSD$PsdImageInfo.prototype.constructor = PSD$PsdImageInfo;
  PSD.prototype = Object.create(ImageFormat.prototype);
  PSD.prototype.constructor = PSD;
  SVG.prototype = Object.create(ImageFormat.prototype);
  SVG.prototype.constructor = SVG;
  TGA.prototype = Object.create(ImageFormat.prototype);
  TGA.prototype.constructor = TGA;
  Bitmap32Context2d$NoneFiller.prototype = Object.create(Bitmap32Context2d$Filler.prototype);
  Bitmap32Context2d$NoneFiller.prototype.constructor = Bitmap32Context2d$NoneFiller;
  Bitmap32Context2d$ColorFiller.prototype = Object.create(Bitmap32Context2d$Filler.prototype);
  Bitmap32Context2d$ColorFiller.prototype.constructor = Bitmap32Context2d$ColorFiller;
  Bitmap32Context2d$BitmapFiller.prototype = Object.create(Bitmap32Context2d$Filler.prototype);
  Bitmap32Context2d$BitmapFiller.prototype.constructor = Bitmap32Context2d$BitmapFiller;
  Bitmap32Context2d$GradientFiller.prototype = Object.create(Bitmap32Context2d$Filler.prototype);
  Bitmap32Context2d$GradientFiller.prototype.constructor = Bitmap32Context2d$GradientFiller;
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
  Context2d$ScaledRenderer.prototype = Object.create(Context2d$Renderer.prototype);
  Context2d$ScaledRenderer.prototype.constructor = Context2d$ScaledRenderer;
  Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype = Object.create(Context2d$Renderer.prototype);
  Context2d$Renderer$Companion$DUMMY$ObjectLiteral.prototype.constructor = Context2d$Renderer$Companion$DUMMY$ObjectLiteral;
  Context2d$VerticalAlign.prototype = Object.create(Enum.prototype);
  Context2d$VerticalAlign.prototype.constructor = Context2d$VerticalAlign;
  Context2d$HorizontalAlign.prototype = Object.create(Enum.prototype);
  Context2d$HorizontalAlign.prototype.constructor = Context2d$HorizontalAlign;
  Context2d$ScaleMode.prototype = Object.create(Enum.prototype);
  Context2d$ScaleMode.prototype.constructor = Context2d$ScaleMode;
  Context2d$Gradient$Kind.prototype = Object.create(Enum.prototype);
  Context2d$Gradient$Kind.prototype.constructor = Context2d$Gradient$Kind;
  Context2d$Gradient$Units.prototype = Object.create(Enum.prototype);
  Context2d$Gradient$Units.prototype.constructor = Context2d$Gradient$Units;
  Context2d$Gradient$InterpolationMethod.prototype = Object.create(Enum.prototype);
  Context2d$Gradient$InterpolationMethod.prototype.constructor = Context2d$Gradient$InterpolationMethod;
  GraphicsPath.prototype = Object.create(VectorPath.prototype);
  GraphicsPath.prototype.constructor = GraphicsPath;
  ChartBars$Fit.prototype = Object.create(Enum.prototype);
  ChartBars$Fit.prototype.constructor = ChartBars$Fit;
  ChartBars.prototype = Object.create(Chart.prototype);
  ChartBars.prototype.constructor = ChartBars;
  SVG$GradientUnits.prototype = Object.create(Enum.prototype);
  SVG$GradientUnits.prototype.constructor = SVG$GradientUnits;
  HtmlNativeImage.prototype = Object.create(NativeImage.prototype);
  HtmlNativeImage.prototype.constructor = HtmlNativeImage;
  HtmlNativeImageFormatProvider.prototype = Object.create(NativeImageFormatProvider.prototype);
  HtmlNativeImageFormatProvider.prototype.constructor = HtmlNativeImageFormatProvider;
  CanvasContext2dRenderer.prototype = Object.create(Context2d$Renderer.prototype);
  CanvasContext2dRenderer.prototype.constructor = CanvasContext2dRenderer;
  function Korim() {
    Korim_instance = this;
    this.VERSION = KORIM_VERSION;
  }
  Korim.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Korim',
    interfaces: []
  };
  var Korim_instance = null;
  function Korim_getInstance() {
    if (Korim_instance === null) {
      new Korim();
    }
    return Korim_instance;
  }
  var KORIM_VERSION;
  function Atlas(slices) {
    this.slices = slices;
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  Object.defineProperty(Atlas.prototype, 'slicesByName', {
    get: function () {
      var $receiver = this.slices;
      var capacity = coerceAtLeast(mapCapacity(collectionSizeOrDefault($receiver, 10)), 16);
      var destination = LinkedHashMap_init_0(capacity);
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        destination.put_xwzc9p$(element.name, element);
      }
      return destination;
    }
  });
  Object.defineProperty(Atlas.prototype, 'size', {
    get: function () {
      return this.slices.size;
    }
  });
  Atlas.prototype.get_61zpoe$ = function (name) {
    return ensureNotNull(this.slicesByName.get_11rb$(name));
  };
  Atlas.prototype.get_za3lpa$ = function (index) {
    return ensureNotNull(this.slices.get_za3lpa$(index));
  };
  Atlas.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Atlas',
    interfaces: []
  };
  function Bitmap(width, height, bpp, premult, backingArray) {
    this.width = width;
    this.height = height;
    this.bpp = bpp;
    this.premult = premult;
    this.backingArray = backingArray;
    this.$delegate_uler2c$_0 = new Extra$Mixin();
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
      return new Size_init(numberToDouble(width), numberToDouble(height));
    }
  });
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  Bitmap.prototype.set32_ci55m7$ = function (x, y, v) {
    throw new NotImplementedError_init();
  };
  Bitmap.prototype.get32_vux9f0$ = function (x, y) {
    return new RGBA(0);
  };
  Bitmap.prototype.setInt_qt1dr2$ = function (x, y, color) {
  };
  Bitmap.prototype.getInt_vux9f0$ = function (x, y) {
    return 0;
  };
  Bitmap.prototype.get32Clamped_vux9f0$ = function (x, y) {
    return this.inBounds_vux9f0$(x, y) ? this.get32_vux9f0$(x, y) : Colors_getInstance().TRANSPARENT_BLACK;
  };
  Bitmap.prototype.get32Sampled_lu1900$ = function (x, y) {
    if (x < 0.0 || x >= this.width || y < 0.0 || y >= this.height)
      return Colors_getInstance().TRANSPARENT_BLACK;
    var x0 = toIntFloor(x);
    var x1 = toIntCeil(x);
    var y0 = toIntFloor(y);
    var y1 = toIntCeil(y);
    var xratio = x % 1;
    var yratio = y % 1;
    var c00 = this.get32Clamped_vux9f0$(x0, y0);
    var c10 = this.inBounds_vux9f0$(x1, y0) ? this.get32Clamped_vux9f0$(x1, y0) : c00;
    var c01 = this.inBounds_vux9f0$(x1, y1) ? this.get32Clamped_vux9f0$(x0, y1) : c00;
    var c11 = this.inBounds_vux9f0$(x1, y1) ? this.get32Clamped_vux9f0$(x1, y1) : c01;
    var c1 = RGBA$Companion_getInstance().blendRGBA_utyrs$(c00, c10, xratio);
    var c2 = RGBA$Companion_getInstance().blendRGBA_utyrs$(c01, c11, xratio);
    return RGBA$Companion_getInstance().blendRGBA_utyrs$(c1, c2, yratio);
  };
  Bitmap.prototype.copy_akhah0$ = function (srcX, srcY, dst, dstX, dstY, width, height) {
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        dst.setInt_qt1dr2$(dstX + x | 0, dstY, this.getInt_vux9f0$(srcX + x | 0, srcY));
      }
    }
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
  Bitmap.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var tmp$;
    tmp$ = this.width;
    for (var x = 0; x < tmp$; x++) {
      var c0 = this.getInt_vux9f0$(x, y0);
      var c1 = this.getInt_vux9f0$(x, y1);
      this.setInt_qt1dr2$(x, y0, c1);
      this.setInt_qt1dr2$(x, y1, c0);
    }
  };
  Bitmap.prototype.context2d_cq4pve$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap.context2d_cq4pve$', function (antialiased, callback) {
    if (antialiased === void 0)
      antialiased = true;
    var ctx = this.getContext2d_6taknv$(antialiased);
    try {
      callback(ctx);
    }
    finally {
      ctx.dispose();
    }
  });
  Bitmap.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    throw UnsupportedOperationException_init('Not implemented context2d on Bitmap, please use NativeImage instead');
  };
  Bitmap.prototype.getContext2d_6taknv$ = function (antialiasing, callback$default) {
    if (antialiasing === void 0)
      antialiasing = true;
    return callback$default ? callback$default(antialiasing) : this.getContext2d_6taknv$$default(antialiasing);
  };
  Bitmap.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return invalidOp('Unsupported createWithThisFormat (' + this + ')');
  };
  function Bitmap$toBMP32$lambda(this$Bitmap) {
    return function (x, y) {
      return this$Bitmap.get32_vux9f0$(x, y);
    };
  }
  Bitmap.prototype.toBMP32 = function () {
    if (Kotlin.isType(this, Bitmap32))
      return this;
    else if (Kotlin.isType(this, NativeImage))
      return this.toBmp32();
    else
      return Bitmap32_init_1(this.width, this.height, this.premult, Bitmap$toBMP32$lambda(this));
  };
  Object.defineProperty(Bitmap.prototype, 'extra', {
    get: function () {
      return this.$delegate_uler2c$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_uler2c$_0.extra = tmp$;
    }
  });
  Bitmap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap',
    interfaces: [Extra, Sizeable]
  };
  function createWithThisFormatTyped($receiver, width, height) {
    var tmp$;
    return Kotlin.isType(tmp$ = $receiver.createWithThisFormat_vux9f0$(width, height), Bitmap) ? tmp$ : throwCCE();
  }
  function extract($receiver, x, y, width, height) {
    var out = createWithThisFormatTyped($receiver, width, height);
    $receiver.copy_akhah0$(x, y, out, 0, 0, width, height);
    return out;
  }
  function Bitmap1(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / 8 | 0);
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(2);
    BitmapIndexed.call(this, 1, width, height, data, palette);
  }
  Bitmap1.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap1(width, height);
  };
  Bitmap1.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap1',
    interfaces: [BitmapIndexed]
  };
  function Bitmap16(width, height, data, format, premult) {
    if (data === void 0)
      data = new Int16Array(Kotlin.imul(width, height));
    if (format === void 0)
      format = RGBA_4444_getInstance();
    if (premult === void 0)
      premult = false;
    Bitmap.call(this, width, height, 16, premult, data);
    this.data = data;
    this.format = format;
  }
  Bitmap16.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap16(width, height, void 0, this.format, this.premult);
  };
  Bitmap16.prototype.set_qt1dr2$ = function (x, y, color) {
    this.setInt_qt1dr2$(x, y, color);
  };
  Bitmap16.prototype.get_vux9f0$ = function (x, y) {
    return this.getInt_vux9f0$(x, y);
  };
  Bitmap16.prototype.setInt_qt1dr2$ = function (x, y, color) {
    this.data[this.index_vux9f0$(x, y)] = toShort(color);
  };
  Bitmap16.prototype.getInt_vux9f0$ = function (x, y) {
    return this.data[this.index_vux9f0$(x, y)] & 65535;
  };
  Bitmap16.prototype.get32_vux9f0$ = function (x, y) {
    return this.format.unpackToRGBA_za3lpa$(this.data[this.index_vux9f0$(x, y)]);
  };
  Bitmap16.prototype.set32_ci55m7$ = function (x, y, v) {
    this.data[this.index_vux9f0$(x, y)] = toShort(this.format.packRGBA_md34sx$(v));
  };
  Bitmap16.prototype.copy_akhah0$ = function (srcX, srcY, dst, dstX, dstY, width, height) {
    var tmp$;
    var src = this;
    var srcArray = src.data;
    var srcIndex = src.index_vux9f0$(srcX, srcY);
    var srcAdd = src.width;
    var dstArray = (Kotlin.isType(tmp$ = dst, Bitmap16) ? tmp$ : throwCCE()).data;
    var dstIndex = dst.index_vux9f0$(dstX, dstY);
    var dstAdd = dst.width;
    for (var y = 0; y < height; y++) {
      arraycopy(srcArray, srcIndex, dstArray, dstIndex, width);
      srcIndex = srcIndex + srcAdd | 0;
      dstIndex = dstIndex + dstAdd | 0;
    }
  };
  Bitmap16.prototype.toString = function () {
    return 'Bitmap16(' + this.width + ', ' + this.height + ', format=' + this.format + ')';
  };
  Bitmap16.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap16',
    interfaces: [Bitmap]
  };
  function Bitmap2(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / 4 | 0);
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(4);
    BitmapIndexed.call(this, 2, width, height, data, palette);
  }
  Bitmap2.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap2(width, height);
  };
  Bitmap2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap2',
    interfaces: [BitmapIndexed]
  };
  var Math_0 = Math;
  function Bitmap32(width, height, data, premult) {
    Bitmap32$Companion_getInstance();
    if (data === void 0)
      data = RgbaArray$Companion_getInstance().invoke_za3lpa$(Kotlin.imul(width, height));
    if (premult === void 0)
      premult = false;
    Bitmap.call(this, width, height, 32, premult, data);
    this.data = data;
    if (this.data.size < Kotlin.imul(width, height))
      throw RuntimeException_init('Bitmap data is too short: width=' + width + ', height=' + height + ', data=ByteArray(' + this.data.size + '), area=' + Kotlin.imul(width, height));
    this.temp_0 = RgbaArray$Companion_getInstance().invoke_za3lpa$(Math_0.max(width, height));
  }
  Bitmap32.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap32(width, height, void 0, this.premult);
  };
  Bitmap32.prototype.copy_akhah0$ = function (srcX, srcY, dst, dstX, dstY, width, height) {
    var tmp$;
    var src = this;
    var srcArray = src.data;
    var srcIndex = src.index_vux9f0$(srcX, srcY);
    var srcAdd = src.width;
    var dstArray = (Kotlin.isType(tmp$ = dst, Bitmap32) ? tmp$ : throwCCE()).data;
    var dstIndex = dst.index_vux9f0$(dstX, dstY);
    var dstAdd = dst.width;
    for (var y = 0; y < height; y++) {
      arraycopy_0(srcArray.array, srcIndex, dstArray.array, dstIndex, width);
      srcIndex = srcIndex + srcAdd | 0;
      dstIndex = dstIndex + dstAdd | 0;
    }
  };
  Bitmap32.prototype.set_ci55m7$ = function (x, y, color) {
    this.data.set_vlvk8p$(this.index_vux9f0$(x, y), color);
  };
  Bitmap32.prototype.get_vux9f0$ = function (x, y) {
    return this.data.get_za3lpa$(this.index_vux9f0$(x, y));
  };
  Bitmap32.prototype.setInt_qt1dr2$ = function (x, y, color) {
    this.data.set_vlvk8p$(this.index_vux9f0$(x, y), new RGBA(color));
  };
  Bitmap32.prototype.getInt_vux9f0$ = function (x, y) {
    return this.data.get_za3lpa$(this.index_vux9f0$(x, y)).rgba;
  };
  Bitmap32.prototype.get32_vux9f0$ = function (x, y) {
    return this.get_vux9f0$(x, y);
  };
  Bitmap32.prototype.set32_ci55m7$ = function (x, y, v) {
    this.set_ci55m7$(x, y, v);
  };
  Bitmap32.prototype.setRow_aio0fn$ = function (y, row) {
    arraycopy_0(row, 0, this.data.array, this.index_vux9f0$(0, y), this.width);
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
          dstData.set_vlvk8p$(dstOffset + x | 0, RGBA$Companion_getInstance().mix_jh0t86$(dstData.get_za3lpa$(dstOffset + x | 0), srcData.get_za3lpa$(srcOffset + x | 0)));
      }
       else {
        arraycopy_0(srcData.array, srcOffset, dstData.array, dstOffset, width);
      }
    }
  };
  Bitmap32.prototype.drawPixelMixed_ci55m7$ = function (x, y, c) {
    this.set_ci55m7$(x, y, RGBA$Companion_getInstance().mix_jh0t86$(this.get_vux9f0$(x, y), c));
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
      sleft = -dx | 0;
      dx = 0;
    }
    if (dy < 0) {
      stop = -dy | 0;
      dy = 0;
    }
    this._draw_dd24ng$(other, dx, dy, sleft, stop, sright, sbottom, mix);
  };
  Bitmap32.prototype.fill_kuukgh$ = function (color, x, y, width, height) {
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
      this.data.fill_eb600h$(color, this.index_vux9f0$(x1, cy), this.index_vux9f0$(x2, cy) + 1 | 0);
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
      arraycopy_2(this.data, this.index_vux9f0$(x, y + yy | 0), out.data, out.index_vux9f0$(0, yy), width);
    }
    return out;
  };
  Bitmap32.prototype.all_vcmugg$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.all_vcmugg$', wrapFunction(function () {
    var until = Kotlin.kotlin.ranges.until_dqglrj$;
    var Collection = Kotlin.kotlin.collections.Collection;
    return function (callback) {
      var $receiver = until(0, this.area);
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
          if (callback(this.data.get_za3lpa$(element))) {
            any$result = true;
            break any$break;
          }
        }
        any$result = false;
      }
       while (false);
      return any$result;
    };
  }));
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
  Bitmap32.prototype.setEach_bbp8wf$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.setEach_bbp8wf$', wrapFunction(function () {
    return function (callback) {
      var tmp$, tmp$_0, tmp$_1;
      var n = 0;
      tmp$ = this.height;
      for (var y = 0; y < tmp$; y++) {
        tmp$_0 = this.width;
        for (var x = 0; x < tmp$_0; x++) {
          this.data.set_vlvk8p$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), callback(x, y));
        }
      }
    };
  }));
  Bitmap32.prototype.transformColor_6pxvls$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.transformColor_6pxvls$', wrapFunction(function () {
    return function (callback) {
      var tmp$, tmp$_0, tmp$_1;
      var n = 0;
      tmp$ = this.height;
      for (var y = 0; y < tmp$; y++) {
        tmp$_0 = this.width;
        for (var x = 0; x < tmp$_0; x++) {
          var n_0 = (tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1);
          this.data.set_vlvk8p$(n_0, callback(this.data.get_za3lpa$(n_0)));
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
      var c = inputData.get_za3lpa$(n).rgba >>> sourceShift & 255;
      thisData.set_vlvk8p$(n, new RGBA(thisData.get_za3lpa$(n).rgba & destClear | c << destShift));
    }
  };
  Bitmap32.prototype.writeChannel_z3s5mf$ = function (destination, input) {
    var tmp$;
    var destShift = destination.index * 8 | 0;
    var destClear = ~(255 << destShift);
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      var c = input.data[n] & 255;
      this.data.set_vlvk8p$(n, new RGBA(this.data.get_za3lpa$(n).rgba & destClear | c << destShift));
    }
  };
  Bitmap32.prototype.writeChannel_ehzdij$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.writeChannel_ehzdij$', wrapFunction(function () {
    var RGBA_init = _.com.soywiz.korim.color.RGBA;
    return function (destination, gen) {
      var tmp$, tmp$_0;
      var destShift = destination.index * 8 | 0;
      var destClear = ~(255 << destShift);
      var n = 0;
      tmp$ = this.height;
      for (var y = 0; y < tmp$; y++) {
        tmp$_0 = this.width;
        for (var x = 0; x < tmp$_0; x++) {
          var c = gen(x, y) & 255;
          this.data.set_vlvk8p$(n, new RGBA_init(this.data.get_za3lpa$(n).rgba & destClear | c << destShift));
          n = n + 1 | 0;
        }
      }
    };
  }));
  Bitmap32.prototype.writeChannelN_qv1f5z$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.Bitmap32.writeChannelN_qv1f5z$', wrapFunction(function () {
    var RGBA_init = _.com.soywiz.korim.color.RGBA;
    return function (destination, gen) {
      var tmp$;
      var destShift = destination.index * 8 | 0;
      var destClear = ~(255 << destShift);
      tmp$ = this.area;
      for (var n = 0; n < tmp$; n++) {
        var c = gen(n) & 255;
        this.data.set_vlvk8p$(n, new RGBA_init(this.data.get_za3lpa$(n).rgba & destClear | c << destShift));
      }
    };
  }));
  Bitmap32.prototype.extractChannel_25cr2x$ = function (channel) {
    var tmp$;
    var out = new Bitmap8(this.width, this.height);
    var shift = channel.shift;
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      out.data[n] = toByte(this.data.get_za3lpa$(n).rgba >>> shift & 255);
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
      arraycopy_2(src.data, srcIndex, dst.data, dstIndex, width);
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
  Bitmap32$Companion.prototype.matchesSSMI_irislw$ = function (a, b, continuation) {
    throw new NotImplementedError_init();
  };
  var Collection = Kotlin.kotlin.collections.Collection;
  Bitmap32$Companion.prototype.matches_9ho1nm$ = function (a, b, threshold, continuation) {
    if (threshold === void 0)
      threshold = 32;
    var diff = this.diff_irislw$(a, b);
    var $receiver = diff.data;
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!(element.r < threshold && element.g < threshold && element.b < threshold && element.a < threshold)) {
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
      throw IllegalArgumentException_init(a.toString() + ' not matches ' + b + ' size');
    var a32 = a.toBMP32();
    var b32 = b.toBMP32();
    var out = new Bitmap32(a.width, a.height, void 0, true);
    tmp$ = out.area;
    for (var n = 0; n < tmp$; n++) {
      var c1 = RGBA$Companion_getInstance().premultiplyFast_md34sx$(a32.data.get_za3lpa$(n));
      var c2 = RGBA$Companion_getInstance().premultiplyFast_md34sx$(b32.data.get_za3lpa$(n));
      var dr = abs(c1.r - c2.r | 0);
      var dg = abs(c1.g - c2.g | 0);
      var db = abs(c1.b - c2.b | 0);
      var da = abs(c1.a - c2.a | 0);
      out.data.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(dr, dg, db, da));
    }
    return out;
  };
  Bitmap32$Companion.$metadata$ = {
    kind: Kind_OBJECT,
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
    this.xor_md34sx$(RGBA$Companion_getInstance().invoke_tjonv8$(255, 255, 255, 0));
  };
  Bitmap32.prototype.xor_md34sx$ = function (value) {
    var tmp$;
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++)
      this.data.set_vlvk8p$(n, new RGBA(this.data.get_za3lpa$(n).rgba ^ value.rgba));
  };
  Bitmap32.prototype.toString = function () {
    return 'Bitmap32(' + this.width + ', ' + this.height + ')';
  };
  Bitmap32.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var s0 = this.index_vux9f0$(0, y0);
    var s1 = this.index_vux9f0$(0, y1);
    arraycopy_2(this.data, s0, this.temp_0, 0, this.width);
    arraycopy_2(this.data, s1, this.data, s0, this.width);
    arraycopy_2(this.temp_0, 0, this.data, s1, this.width);
  };
  Bitmap32.prototype.writeDecoded_77vltg$ = function (color, data, offset, littleEndian) {
    if (offset === void 0)
      offset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    color.decode_lg4na5$(data, offset, this.data, 0, this.area, littleEndian);
    return this;
  };
  Bitmap32.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    return new Context2d(new Bitmap32Context2d(this, antialiasing));
  };
  Bitmap32.prototype.clone = function () {
    return new Bitmap32(this.width, this.height, new RgbaArray(this.data.array.slice()), this.premult);
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
    tmp$ = this.data.size;
    for (var n = 0; n < tmp$; n++)
      this.data.set_vlvk8p$(n, RGBA$Companion_getInstance().premultiplyFast_md34sx$(this.data.get_za3lpa$(n)));
  };
  Bitmap32.prototype.depremultiplyInplace = function () {
    var tmp$;
    if (!this.premult)
      return;
    this.premult = false;
    tmp$ = this.data.size;
    for (var n = 0; n < tmp$; n++)
      this.data.set_vlvk8p$(n, RGBA$Companion_getInstance().depremultiplyFast_md34sx$(this.data.get_za3lpa$(n)));
  };
  Bitmap32.prototype.applyTransform_54kf7e$ = function (ct) {
    var $receiver = this.clone();
    $receiver.applyTransformInline_54kf7e$(ct);
    return $receiver;
  };
  Bitmap32.prototype.applyTransformInline_54kf7e$ = function (ct) {
    var tmp$;
    var array = new Int32Array(256);
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      array[i] = clamp(numberToInt(i * ct.mR + ct.aR), 0, 255);
    }
    var R = array;
    var array_0 = new Int32Array(256);
    var tmp$_1;
    tmp$_1 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_1; i_0++) {
      array_0[i_0] = clamp(numberToInt(i_0 * ct.mG + ct.aG), 0, 255);
    }
    var G = array_0;
    var array_1 = new Int32Array(256);
    var tmp$_2;
    tmp$_2 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_2; i_1++) {
      array_1[i_1] = clamp(numberToInt(i_1 * ct.mB + ct.aB), 0, 255);
    }
    var B = array_1;
    var array_2 = new Int32Array(256);
    var tmp$_3;
    tmp$_3 = array_2.length - 1 | 0;
    for (var i_2 = 0; i_2 <= tmp$_3; i_2++) {
      array_2[i_2] = clamp(numberToInt(i_2 * ct.mA + ct.aA), 0, 255);
    }
    var A = array_2;
    tmp$ = this.data.size;
    for (var n = 0; n < tmp$; n++) {
      var c = this.data.get_za3lpa$(n);
      this.data.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(R[c.r], G[c.g], B[c.b], A[c.a]));
    }
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
          var c1 = dst.get_za3lpa$(m);
          var c2 = dst.get_za3lpa$(m + 1 | 0);
          var c3 = dst.get_za3lpa$(m + this.width | 0);
          var c4 = dst.get_za3lpa$(m + this.width + 1 | 0);
          dst.set_vlvk8p$(n, new RGBA(RGBA$Companion_getInstance().blendRGBAFastAlreadyPremultiplied_05_tjonv8$(c1.rgba, c2.rgba, c3.rgba, c4.rgba)));
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
    return this.data.iterator();
  };
  Bitmap32.prototype.setRowChunk_mv2y54$ = function (x, y, data, width, increment) {
    if (increment === 1) {
      arraycopy_2(data, 0, this.data, this.index_vux9f0$(x, y), width);
    }
     else {
      var m = this.index_vux9f0$(x, y);
      for (var n = 0; n < width; n++) {
        this.data.set_vlvk8p$(m, data.get_za3lpa$(n));
        m = m + increment | 0;
      }
    }
  };
  Bitmap32.prototype.extractBytes = function () {
    return RGBA$Companion_getInstance().encode_864r4v$(this.data);
  };
  Bitmap32.prototype.scaleNearest_vux9f0$ = function (sx, sy) {
    var tmp$, tmp$_0;
    var out = new Bitmap32(Kotlin.imul(this.width, sx), Kotlin.imul(this.height, sy));
    tmp$ = out.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = out.width;
      for (var x = 0; x < tmp$_0; x++) {
        out.set_ci55m7$(x, y, this.get_vux9f0$(x / sx | 0, y / sy | 0));
      }
    }
    return out;
  };
  Bitmap32.prototype.writeComponent_ccmnuj$ = function (dstCmp, from, srcCmp) {
    var tmp$;
    var fdata = from.data;
    tmp$ = this.area;
    for (var n = 0; n < tmp$; n++) {
      this.data.set_vlvk8p$(n, dstCmp.insert_3hpxcz$(this.data.get_za3lpa$(n), srcCmp.extract_md34sx$(fdata.get_za3lpa$(n))));
    }
  };
  Bitmap32.prototype.rgbaToYCbCr = function () {
    var $receiver = new Bitmap32(this.width, this.height);
    var tmp$;
    tmp$ = $receiver.area;
    for (var n = 0; n < tmp$; n++)
      $receiver.data.set_vlvk8p$(n, new RGBA(YCbCr_getInstance().rgbaToYCbCr_md34sx$(this.data.get_za3lpa$(n))));
    return $receiver;
  };
  Bitmap32.prototype.yCbCrToRgba = function () {
    var $receiver = new Bitmap32(this.width, this.height);
    var tmp$;
    tmp$ = $receiver.area;
    for (var n = 0; n < tmp$; n++)
      $receiver.data.set_vlvk8p$(n, YCbCr_getInstance().yCbCrToRgba_za3lpa$(this.data.get_za3lpa$(n).rgba));
    return $receiver;
  };
  Bitmap32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap32',
    interfaces: [Iterable, Bitmap]
  };
  function Bitmap32_init(width, height, value, premult, $this) {
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, premult);
    $this.data.fill_eb600h$(value);
    return $this;
  }
  function Bitmap32_init_0(width, height, value, $this) {
    $this = $this || Object.create(Bitmap32.prototype);
    Bitmap32.call($this, width, height, void 0, false);
    $this.data.fill_eb600h$(value);
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
        $this.data.set_vlvk8p$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1), generator(x, y));
      }
    }
    return $this;
  }
  function Bitmap4(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / 2 | 0);
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(16);
    BitmapIndexed.call(this, 4, width, height, data, palette);
  }
  Bitmap4.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap4(width, height);
  };
  Bitmap4.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap4',
    interfaces: [BitmapIndexed]
  };
  function Bitmap8(width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height));
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(255);
    BitmapIndexed.call(this, 8, width, height, data, palette);
  }
  Bitmap8.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return new Bitmap8(width, height);
  };
  Bitmap8.prototype.setInt_qt1dr2$ = function (x, y, color) {
    var $this = this.datau;
    var n = this.index_vux9f0$(x, y);
    $this.data[n] = toByte(color);
  };
  Bitmap8.prototype.getInt_vux9f0$ = function (x, y) {
    var $this = this.datau;
    var n = this.index_vux9f0$(x, y);
    return $this.data[n] & 255;
  };
  Bitmap8.prototype.get32_vux9f0$ = function (x, y) {
    return this.palette.get_za3lpa$(this.getInt_vux9f0$(x, y));
  };
  Bitmap8.prototype.toString = function () {
    return 'Bitmap8(' + this.width + ', ' + this.height + ', palette=' + this.palette.size + ')';
  };
  Bitmap8.$metadata$ = {
    kind: Kind_CLASS,
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
    BitmapChannel$Companion_getInstance();
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
  BitmapChannel.prototype.extract_md34sx$ = function (rgba) {
    return rgba.rgba >>> this.shift & 255;
  };
  BitmapChannel.prototype.insert_3hpxcz$ = function (rgba, value) {
    return new RGBA(rgba.rgba & this.clearMask | (value & 255) << this.shift);
  };
  function BitmapChannel$Companion() {
    BitmapChannel$Companion_instance = this;
    this.ALL = BitmapChannel$values();
  }
  BitmapChannel$Companion.prototype.get_za3lpa$ = function (index) {
    return this.ALL[index];
  };
  BitmapChannel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapChannel$Companion_instance = null;
  function BitmapChannel$Companion_getInstance() {
    BitmapChannel_initFields();
    if (BitmapChannel$Companion_instance === null) {
      new BitmapChannel$Companion();
    }
    return BitmapChannel$Companion_instance;
  }
  BitmapChannel.$metadata$ = {
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korim.bitmap.BitmapChannel.' + name);
    }
  }
  BitmapChannel.valueOf_61zpoe$ = BitmapChannel$valueOf;
  function get_Y($receiver) {
    return BitmapChannel$RED_getInstance();
  }
  function get_Cb($receiver) {
    return BitmapChannel$GREEN_getInstance();
  }
  function get_Cr($receiver) {
    return BitmapChannel$BLUE_getInstance();
  }
  function get_A($receiver) {
    return BitmapChannel$ALPHA_getInstance();
  }
  function toStringYCbCr($receiver) {
    switch ($receiver.index) {
      case 0:
        return 'Y';
      case 1:
        return 'Cb';
      case 2:
        return 'Cr';
      case 3:
        return 'A';
      default:return error.invalidOp;
    }
  }
  function matchContentsDistinctCount($receiver, that) {
    var tmp$;
    if ($receiver.width !== that.width || $receiver.height !== that.height)
      return -1;
    var l = $receiver.toBMP32().depremultipliedIfRequired();
    var r = that.toBMP32().depremultipliedIfRequired();
    var width = l.width;
    var height = l.height;
    var count = 0;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        if (!((tmp$ = l.get32_vux9f0$(x, y)) != null ? tmp$.equals(r.get32_vux9f0$(x, y)) : null)) {
          count = count + 1 | 0;
        }
      }
    }
    return count;
  }
  function matchContents($receiver, that) {
    return matchContentsDistinctCount($receiver, that) === 0;
  }
  function setAlpha($receiver, value) {
    var tmp$;
    tmp$ = $receiver.data.size;
    for (var n = 0; n < tmp$; n++)
      $receiver.data.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_vux9f0$($receiver.data.get_za3lpa$(n).rgb, value));
  }
  function putWithBorder($receiver, x, y, bmp, border) {
    if (border === void 0)
      border = 1;
    var width = bmp.width;
    var height = bmp.height;
    bmp.copy_akhah0$(0, 0, $receiver, x, y, width, height);
    for (var n = 1; n <= border; n++) {
      $receiver.copy_akhah0$(x, y, $receiver, x - n | 0, y, 1, height);
      $receiver.copy_akhah0$(x + width - 1 | 0, y, $receiver, x + width - 1 + n | 0, y, 1, height);
    }
    for (var n_0 = 1; n_0 <= border; n_0++) {
      var rwidth = width + (border * 2 | 0) | 0;
      $receiver.copy_akhah0$(x, y, $receiver, x, y - n_0 | 0, rwidth, 1);
      $receiver.copy_akhah0$(x, y + height - 1 | 0, $receiver, x, y + height - 1 + n_0 | 0, rwidth, 1);
    }
  }
  function BitmapIndexed(bpp, width, height, data, palette) {
    if (data === void 0)
      data = new Int8Array(Kotlin.imul(width, height) / (8 / bpp | 0) | 0);
    if (palette === void 0)
      palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(1 << bpp);
    Bitmap.call(this, width, height, bpp, false, data);
    this.data = data;
    this.palette = palette;
    if (this.data.length < (Kotlin.imul(width, height) / (8 / bpp | 0) | 0))
      throw RuntimeException_init('Bitmap data is too short: width=' + width + ', height=' + height + ', data=ByteArray(' + this.data.length + '), area=' + Kotlin.imul(width, height));
    this.temp = new Int8Array(Math_0.max(width, height));
    this.datau = new UByteArray(this.data);
    this.n8_dbpp = 8 / bpp | 0;
    this.mask = (1 << bpp) - 1 | 0;
  }
  BitmapIndexed.prototype.toString = function () {
    return 'BitmapIndexed(bpp=' + this.bpp + ', width=' + this.width + ', height=' + this.height + ', clut=' + this.palette.size + ')';
  };
  BitmapIndexed.prototype.get_vux9f0$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.BitmapIndexed.get_vux9f0$', function (x, y) {
    return this.getInt_vux9f0$(x, y);
  });
  BitmapIndexed.prototype.set_qt1dr2$ = defineInlineFunction('korim-js.com.soywiz.korim.bitmap.BitmapIndexed.set_qt1dr2$', function (x, y, color) {
    this.setInt_qt1dr2$(x, y, color);
  });
  BitmapIndexed.prototype.getInt_vux9f0$ = function (x, y) {
    var $this = this.datau;
    var n = this.index_d_vux9f0$(x, y);
    return ($this.data[n] & 255) >>> Kotlin.imul(this.bpp, this.index_m_vux9f0$(x, y)) & this.mask;
  };
  BitmapIndexed.prototype.setInt_qt1dr2$ = function (x, y, color) {
    var i = this.index_d_vux9f0$(x, y);
    var tmp$ = this.datau;
    var v = insert(this.datau.data[i] & 255, color, Kotlin.imul(this.bpp, this.index_m_vux9f0$(x, y)), this.bpp);
    tmp$.data[i] = toByte(v);
  };
  BitmapIndexed.prototype.get32_vux9f0$ = function (x, y) {
    return this.palette.get_za3lpa$(this.getInt_vux9f0$(x, y));
  };
  BitmapIndexed.prototype.index_d_vux9f0$ = function (x, y) {
    return this.index_vux9f0$(x, y) / this.n8_dbpp | 0;
  };
  BitmapIndexed.prototype.index_m_vux9f0$ = function (x, y) {
    return this.index_vux9f0$(x, y) % this.n8_dbpp;
  };
  BitmapIndexed.prototype.setRow_5pgyc$ = function (y, row) {
    arraycopy_1(row.data, 0, this.data, this.index_vux9f0$(0, y), this.stride);
  };
  BitmapIndexed.prototype.setRow_3fbn1q$ = function (y, row) {
    arraycopy_1(row, 0, this.data, this.index_vux9f0$(0, y), this.stride);
  };
  BitmapIndexed.prototype.setWhitescalePalette = function () {
    var tmp$;
    tmp$ = this.palette.size;
    for (var n = 0; n < tmp$; n++) {
      var col = numberToInt(n / this.palette.size * 255);
      this.palette.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(col, col, col, 255));
    }
    return this;
  };
  BitmapIndexed.prototype.swapRows_vux9f0$ = function (y0, y1) {
    var s0 = this.index_d_vux9f0$(0, y0);
    var s1 = this.index_d_vux9f0$(0, y1);
    arraycopy_1(this.data, s0, this.temp, 0, this.stride);
    arraycopy_1(this.data, s1, this.data, s0, this.stride);
    arraycopy_1(this.temp, 0, this.data, s1, this.stride);
  };
  var ArrayList_init_1 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  BitmapIndexed.prototype.toLines_61zpoe$ = function (palette) {
    var $receiver = until(0, this.height);
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = until(0, this.height);
      var destination_0 = ArrayList_init_1(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(toBoxedChar(palette.charCodeAt(this.getInt_vux9f0$(item_0, item))));
      }
      tmp$_0.call(destination, joinToString(destination_0, ''));
    }
    return destination;
  };
  BitmapIndexed.prototype.setRowChunk_y8lvms$ = function (x, y, data, width, increment) {
    var tmp$;
    if (increment === 1) {
      arraycopy_1(data, 0, this.data, this.index_vux9f0$(x, y), width / this.n8_dbpp | 0);
    }
     else {
      var m = this.index_vux9f0$(x, y);
      tmp$ = width / this.n8_dbpp | 0;
      for (var n = 0; n < tmp$; n++) {
        this.data[m] = data[n];
        m = m + increment | 0;
      }
    }
  };
  BitmapIndexed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapIndexed',
    interfaces: [Bitmap]
  };
  function BmpSlice() {
  }
  BmpSlice.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BmpSlice',
    interfaces: [Extra]
  };
  var IVector2_init = $module$korma_js.com.soywiz.korma.IVector2;
  function BitmapSlice(bmp, bounds, name, rotated) {
    if (name === void 0)
      name = 'unknown';
    if (rotated === void 0)
      rotated = false;
    this.bmp_klb0st$_0 = bmp;
    this.bounds = bounds;
    this.name_r4yuh$_0 = name;
    this.$delegate_l9ixl6$_0 = new Extra$Mixin();
    this.parent_fb313s$_0 = null;
    var x = this.left / this.bmp.width;
    var y = this.top / this.bmp.height;
    this.tl_0 = new IVector2_init(numberToDouble(x), numberToDouble(y));
    var x_0 = this.right / this.bmp.width;
    var y_0 = this.bottom / this.bmp.height;
    this.br_0 = new IVector2_init(numberToDouble(x_0), numberToDouble(y_0));
    var x_1 = this.br_0.x;
    var y_1 = this.tl_0.y;
    this.tr_0 = new IVector2_init(numberToDouble(x_1), numberToDouble(y_1));
    var x_2 = this.tl_0.x;
    var y_2 = this.br_0.y;
    this.bl_0 = new IVector2_init(numberToDouble(x_2), numberToDouble(y_2));
    this.points_0 = [this.tl_0, this.tr_0, this.br_0, this.bl_0];
    this.offset_0 = rotated ? 1 : 0;
    this.p0_0 = getCyclic(this.points_0, this.offset_0 + 0 | 0);
    this.p1_0 = getCyclic(this.points_0, this.offset_0 + 1 | 0);
    this.p2_0 = getCyclic(this.points_0, this.offset_0 + 2 | 0);
    this.p3_0 = getCyclic(this.points_0, this.offset_0 + 3 | 0);
    this.tl_x_nngcv$_0 = this.p0_0.x;
    this.tl_y_nngc0$_0 = this.p0_0.y;
    this.tr_x_njmfp$_0 = this.p1_0.x;
    this.tr_y_njmeu$_0 = this.p1_0.y;
    this.br_x_xfx47$_0 = this.p2_0.x;
    this.br_y_xfx3c$_0 = this.p2_0.y;
    this.bl_x_xjr1d$_0 = this.p3_0.x;
    this.bl_y_xjr0i$_0 = this.p3_0.y;
    this.rotated_s99y09$_0 = false;
    this.rotatedAngle_pg30mg$_0 = 0;
  }
  Object.defineProperty(BitmapSlice.prototype, 'bmp', {
    get: function () {
      return this.bmp_klb0st$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'name', {
    get: function () {
      return this.name_r4yuh$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'parent', {
    get: function () {
      return this.parent_fb313s$_0;
    },
    set: function (parent) {
      this.parent_fb313s$_0 = parent;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'left', {
    get: function () {
      return this.bounds.left;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'top', {
    get: function () {
      return this.bounds.top;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'right', {
    get: function () {
      return this.bounds.right;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'bottom', {
    get: function () {
      return this.bounds.bottom;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'width', {
    get: function () {
      return this.bounds.width;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'height', {
    get: function () {
      return this.bounds.height;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tl_x', {
    get: function () {
      return this.tl_x_nngcv$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tl_y', {
    get: function () {
      return this.tl_y_nngc0$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tr_x', {
    get: function () {
      return this.tr_x_njmfp$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'tr_y', {
    get: function () {
      return this.tr_y_njmeu$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'br_x', {
    get: function () {
      return this.br_x_xfx47$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'br_y', {
    get: function () {
      return this.br_y_xfx3c$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'bl_x', {
    get: function () {
      return this.bl_x_xjr1d$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'bl_y', {
    get: function () {
      return this.bl_y_xjr0i$_0;
    }
  });
  BitmapSlice.prototype.extract = function () {
    return extract(this.bmp, this.bounds.x, this.bounds.y, this.bounds.width, this.bounds.height);
  };
  BitmapSlice.prototype.sliceWithBounds_tjonv8$ = function (left, top, right, bottom) {
    return new BitmapSlice(this.bmp, RectangleInt.Companion.fromBounds_tjonv8$(this.clampX_0(left + this.bounds.left | 0), this.clampY_0(top + this.bounds.top | 0), this.clampX_0(right + this.bounds.left | 0), this.clampY_0(bottom + this.bounds.top | 0)));
  };
  BitmapSlice.prototype.sliceWithSize_tjonv8$ = function (x, y, width, height) {
    return this.sliceWithBounds_tjonv8$(x, y, x + width | 0, y + height | 0);
  };
  BitmapSlice.prototype.slice_t9mhyo$ = function (rect) {
    return this.sliceWithBounds_tjonv8$(rect.left, rect.top, rect.right, rect.bottom);
  };
  BitmapSlice.prototype.slice_2da8yn$ = function (rect) {
    return this.slice_t9mhyo$(rect.toInt());
  };
  BitmapSlice.prototype.clampX_0 = function ($receiver) {
    return clamp($receiver, this.bounds.left, this.bounds.right);
  };
  BitmapSlice.prototype.clampY_0 = function ($receiver) {
    return clamp($receiver, this.bounds.top, this.bounds.bottom);
  };
  Object.defineProperty(BitmapSlice.prototype, 'rotated', {
    get: function () {
      return this.rotated_s99y09$_0;
    }
  });
  Object.defineProperty(BitmapSlice.prototype, 'rotatedAngle', {
    get: function () {
      return this.rotatedAngle_pg30mg$_0;
    }
  });
  BitmapSlice.prototype.toString = function () {
    return 'BitmapSlice(' + this.name + ':' + this.bounds.size + ')';
  };
  Object.defineProperty(BitmapSlice.prototype, 'extra', {
    get: function () {
      return this.$delegate_l9ixl6$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_l9ixl6$_0.extra = tmp$;
    }
  });
  BitmapSlice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapSlice',
    interfaces: [BmpSlice, Extra]
  };
  function BitmapSliceCompat(bmp, frame, orig, trim, rotated, name) {
    if (name === void 0)
      name = 'unknown';
    return new BitmapSlice(bmp, frame.toInt(), name, rotated);
  }
  function slice($receiver, bounds, name) {
    if (bounds === void 0)
      bounds = RectangleInt_init(0, 0, $receiver.width, $receiver.height);
    if (name === void 0)
      name = 'unknown';
    return new BitmapSlice($receiver, bounds, name);
  }
  function sliceWithBounds($receiver, left, top, right, bottom) {
    return new BitmapSlice($receiver, RectangleInt_init(left, top, right - left | 0, bottom - top | 0));
  }
  function sliceWithSize_1($receiver, x, y, width, height) {
    return new BitmapSlice($receiver, RectangleInt_init(x, y, width, height));
  }
  function Bitmaps() {
    Bitmaps_instance = this;
    this.transparent = slice(new Bitmap32(1, 1), void 0, 'transparent');
    this.white = slice(new Bitmap32(1, 1, RgbaArray$Companion_getInstance().invoke_bvgci3$(1, Bitmaps$white$lambda)), void 0, 'white');
  }
  function Bitmaps$white$lambda(it) {
    return Colors_getInstance().WHITE;
  }
  Bitmaps.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Bitmaps',
    interfaces: []
  };
  var Bitmaps_instance = null;
  function Bitmaps_getInstance() {
    if (Bitmaps_instance === null) {
      new Bitmaps();
    }
    return Bitmaps_instance;
  }
  function NativeImage(width, height, data, premultiplied) {
    Bitmap.call(this, width, height, 32, premultiplied, null);
    this.data = data;
    this.name_vm0j7s$_0 = 'NativeImage';
  }
  Object.defineProperty(NativeImage.prototype, 'name', {
    get: function () {
      return this.name_vm0j7s$_0;
    }
  });
  NativeImage.prototype.swapRows_vux9f0$ = function (y0, y1) {
    throw UnsupportedOperationException_init_0();
  };
  NativeImage.prototype.toBmp32 = function () {
    return this.toNonNativeBmp().toBMP32();
  };
  NativeImage.prototype.toUri = function () {
    return 'data:image/png;base64,' + crypto.Base64.encode_fqrh44$(PNG_getInstance().encode_hnx2ev$(this, new ImageEncodingProps('out.png')));
  };
  NativeImage.prototype.createWithThisFormat_vux9f0$ = function (width, height) {
    return NativeImage_0(width, height);
  };
  NativeImage.prototype.toString = function () {
    return this.name + '(' + this.width + ', ' + this.height + ')';
  };
  NativeImage.$metadata$ = {
    kind: Kind_CLASS,
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
    return NativeImage_1(numberToInt(d.width * scaleX), numberToInt(d.height * scaleY), d, scaleX, scaleY);
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
  function NinePatchInfo(xranges, yranges, width, height) {
    this.xranges = xranges;
    this.yranges = yranges;
    this.width = width;
    this.height = height;
    this.xaxis = new NinePatchInfo$AxisInfo(this.xranges, this.width);
    this.yaxis = new NinePatchInfo$AxisInfo(this.yranges, this.height);
    this.xsegments = this.xaxis.segments;
    this.ysegments = this.yaxis.segments;
    this.fixedWidth = this.xaxis.fixedLen;
    this.fixedHeight = this.yaxis.fixedLen;
    this.scaledWidth = this.xaxis.scaledLen;
    this.scaledHeight = this.yaxis.scaledLen;
    var $receiver = this.ysegments;
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var $receiver_0 = this.xsegments;
      var destination_0 = ArrayList_init_1(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(new NinePatchInfo$Segment(RectangleInt.Companion.fromBounds_tjonv8$(item_0.range.start, item.range.start, get_endExclusive(item_0.range), get_endExclusive(item.range)), item_0, item));
      }
      tmp$_0.call(destination, destination_0);
    }
    this.segments = destination;
  }
  function NinePatchInfo$AxisSegment(scaled, range) {
    this.scaled = scaled;
    this.range = range;
  }
  Object.defineProperty(NinePatchInfo$AxisSegment.prototype, 'fixed', {
    get: function () {
      return !this.scaled;
    }
  });
  Object.defineProperty(NinePatchInfo$AxisSegment.prototype, 'length', {
    get: function () {
      return get_length(this.range);
    }
  });
  NinePatchInfo$AxisSegment.prototype.computedLength_cfr5bs$ = function (axis, boundsLength) {
    var tmp$;
    var scale = clamp_0(boundsLength / axis.totalLen, 0.0, 1.0);
    if (this.fixed) {
      tmp$ = this.length * scale;
    }
     else {
      var variableSize = boundsLength - axis.fixedLen * scale;
      tmp$ = variableSize * (this.length / axis.scaledLen);
    }
    return tmp$;
  };
  NinePatchInfo$AxisSegment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AxisSegment',
    interfaces: []
  };
  function NinePatchInfo$AxisInfo(ranges, totalLen) {
    this.totalLen = totalLen;
    var destination = ArrayList_init_1(collectionSizeOrDefault(ranges, 10));
    var tmp$;
    tmp$ = ranges.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new NinePatchInfo$AxisSegment(item.first, item.second));
    }
    this.segments = destination;
    var $receiver = this.segments;
    var destination_0 = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (element.fixed)
        destination_0.add_11rb$(element);
    }
    var destination_1 = ArrayList_init_1(collectionSizeOrDefault(destination_0, 10));
    var tmp$_1;
    tmp$_1 = destination_0.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_1.add_11rb$(item_0.length);
    }
    var b = sum(destination_1);
    this.fixedLen = Math_0.max(1, b);
    var $receiver_0 = this.segments;
    var destination_2 = ArrayList_init_0();
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var element_0 = tmp$_2.next();
      if (element_0.scaled)
        destination_2.add_11rb$(element_0);
    }
    var destination_3 = ArrayList_init_1(collectionSizeOrDefault(destination_2, 10));
    var tmp$_3;
    tmp$_3 = destination_2.iterator();
    while (tmp$_3.hasNext()) {
      var item_1 = tmp$_3.next();
      destination_3.add_11rb$(item_1.length);
    }
    var b_0 = sum(destination_3);
    this.scaledLen = Math_0.max(1, b_0);
  }
  NinePatchInfo$AxisInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AxisInfo',
    interfaces: []
  };
  function NinePatchInfo$Segment(rect, x, y) {
    this.rect = rect;
    this.x = x;
    this.y = y;
    this.$delegate_5nxubg$_0 = new Extra$Mixin();
    this.scaleX = this.x.scaled;
    this.scaleY = this.y.scaled;
  }
  Object.defineProperty(NinePatchInfo$Segment.prototype, 'extra', {
    get: function () {
      return this.$delegate_5nxubg$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_5nxubg$_0.extra = tmp$;
    }
  });
  NinePatchInfo$Segment.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Segment',
    interfaces: [Extra]
  };
  NinePatchInfo.prototype.computeScale_89dyev$ = function (bounds, callback) {
    var ry = 0;
    var yindex = 0;
    for (var tmp$ = this.ysegments.iterator(); tmp$.hasNext(); ++yindex) {
      var y = tmp$.next();
      var segHeight = numberToInt(y.computedLength_cfr5bs$(this.yaxis, bounds.height));
      var rx = 0;
      var xindex = 0;
      for (var tmp$_0 = this.xsegments.iterator(); tmp$_0.hasNext(); ++xindex) {
        var x = tmp$_0.next();
        var segWidth = numberToInt(x.computedLength_cfr5bs$(this.xaxis, bounds.width));
        var seg = this.segments.get_za3lpa$(yindex).get_za3lpa$(xindex);
        var segLeft = rx + bounds.left | 0;
        var segTop = ry + bounds.top | 0;
        callback(seg, segLeft, segTop, segWidth, segHeight);
        rx = rx + segWidth | 0;
      }
      ry = ry + segHeight | 0;
    }
  };
  NinePatchInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NinePatchInfo',
    interfaces: []
  };
  function NinePatchInfo_init(width, height, left, top, right, bottom, $this) {
    $this = $this || Object.create(NinePatchInfo.prototype);
    NinePatchInfo.call($this, listOf([to(false, until(0, left)), to(true, until(left, right)), to(false, until(right, width))]), listOf([to(false, until(0, top)), to(true, until(top, bottom)), to(false, until(bottom, height))]), width, height);
    return $this;
  }
  function NinePatchBitmap32(bmp) {
    this.bmp = bmp;
    this.content = sliceWithBounds(this.bmp, 1, 1, this.bmp.width - 1 | 0, this.bmp.height - 1 | 0);
    var $receiver = until(1, this.bmp.width - 1 | 0);
    var tmp$;
    var first = true;
    var pos = 0;
    var startpos = 0;
    var lastRes;
    var out = ArrayList_init_0();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      var current = getA(RGBA$Companion_getInstance(), this.bmp.get_vux9f0$(it, 0)) !== 0;
      if (!first) {
        if (!equals(current, lastRes == null ? throwUPAE('lastRes') : lastRes)) {
          var element = to(lastRes == null ? throwUPAE('lastRes') : lastRes, until(startpos, pos));
          out.add_11rb$(element);
          startpos = pos;
        }
      }
      lastRes = current;
      first = false;
      pos = pos + 1 | 0;
    }
    if (startpos !== pos) {
      var element_0 = to(lastRes == null ? throwUPAE('lastRes') : lastRes, until(startpos, pos));
      out.add_11rb$(element_0);
    }
    var $receiver_0 = until(1, this.bmp.height - 1 | 0);
    var tmp$_0;
    var first_0 = true;
    var pos_0 = 0;
    var startpos_0 = 0;
    var lastRes_0;
    var out_0 = ArrayList_init_0();
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var it_0 = tmp$_0.next();
      var current_0 = getA(RGBA$Companion_getInstance(), this.bmp.get_vux9f0$(0, it_0)) !== 0;
      if (!first_0) {
        if (!equals(current_0, lastRes_0 == null ? throwUPAE('lastRes') : lastRes_0)) {
          var element_1 = to(lastRes_0 == null ? throwUPAE('lastRes') : lastRes_0, until(startpos_0, pos_0));
          out_0.add_11rb$(element_1);
          startpos_0 = pos_0;
        }
      }
      lastRes_0 = current_0;
      first_0 = false;
      pos_0 = pos_0 + 1 | 0;
    }
    if (startpos_0 !== pos_0) {
      var element_0_0 = to(lastRes_0 == null ? throwUPAE('lastRes') : lastRes_0, until(startpos_0, pos_0));
      out_0.add_11rb$(element_0_0);
    }
    this.info = new NinePatchInfo(out, out_0, this.content.width, this.content.height);
    this.bmp_xjwzxv$_xan0lv$_0 = new Extra$PropertyThis(void 0, NinePatchBitmap32$bmp$lambda(this));
  }
  Object.defineProperty(NinePatchBitmap32.prototype, 'width', {
    get: function () {
      return this.bmp.width;
    }
  });
  Object.defineProperty(NinePatchBitmap32.prototype, 'height', {
    get: function () {
      return this.bmp.height;
    }
  });
  Object.defineProperty(NinePatchBitmap32.prototype, 'dwidth', {
    get: function () {
      return this.width;
    }
  });
  Object.defineProperty(NinePatchBitmap32.prototype, 'dheight', {
    get: function () {
      return this.height;
    }
  });
  var NinePatchBitmap32$bmp_metadata = new PropertyMetadata('bmp');
  var Any = Object;
  var lmapOf = $module$kds_js.com.soywiz.kds.lmapOf_qfcya0$;
  NinePatchBitmap32.prototype.get_bmp_xjwzxv$ = function ($receiver) {
    var $this = this.bmp_xjwzxv$_xan0lv$_0;
    var getValue_e5fciw$result;
    getValue_e5fciw$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : NinePatchBitmap32$bmp_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen($receiver);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if ($receiver.extra == null)
          $receiver.extra = lmapOf([]);
        tmp$_7 = $receiver.extra;
        tmp$_4 = (tmp$_3 = $this.name) != null ? tmp$_3 : NinePatchBitmap32$bmp_metadata.callableName;
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
  function NinePatchBitmap32$drawTo$lambda$lambda(this$NinePatchBitmap32, this$, closure$drawRegions) {
    return function (seg, segLeft, segTop, segWidth, segHeight) {
      this$.drawImage_dpo8os$(this$NinePatchBitmap32.get_bmp_xjwzxv$(seg), segLeft, segTop, segWidth, segHeight);
      if (closure$drawRegions) {
        var $this = this$;
        var color = Colors_getInstance().RED;
        this$.rect_6y0v78$(numberToDouble(segLeft), numberToDouble(segTop), numberToDouble(segWidth), numberToDouble(segHeight));
        $this.stroke_i8h3xk$(new Context2d$Color(color));
      }
      return Unit;
    };
  }
  NinePatchBitmap32.prototype.drawTo_i0i8t6$ = function (other, bounds, antialiased, drawRegions) {
    if (antialiased === void 0)
      antialiased = true;
    if (drawRegions === void 0)
      drawRegions = false;
    var ctx = other.getContext2d_6taknv$(antialiased);
    try {
      this.info.computeScale_89dyev$(bounds, NinePatchBitmap32$drawTo$lambda$lambda(this, ctx, drawRegions));
    }
    finally {
      ctx.dispose();
    }
    return other;
  };
  NinePatchBitmap32.prototype.rendered_wnu51o$ = function (width, height, antialiased, drawRegions) {
    if (antialiased === void 0)
      antialiased = true;
    if (drawRegions === void 0)
      drawRegions = false;
    return this.drawTo_i0i8t6$(NativeImage_0(width, height), RectangleInt_init(0, 0, width, height), antialiased, drawRegions).toBMP32();
  };
  function NinePatchBitmap32$bmp$lambda(this$NinePatchBitmap32) {
    return function ($receiver) {
      return this$NinePatchBitmap32.content.slice_t9mhyo$($receiver.rect).extract();
    };
  }
  NinePatchBitmap32.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NinePatchBitmap32',
    interfaces: []
  };
  function asNinePatch($receiver) {
    return new NinePatchBitmap32($receiver.toBMP32());
  }
  function readNinePatch($receiver_0, format_0, continuation_0, suspended) {
    var instance = new Coroutine$readNinePatch($receiver_0, format_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readNinePatch($receiver_0, format_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$format = format_0;
  }
  Coroutine$readNinePatch.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readNinePatch.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readNinePatch.prototype.constructor = Coroutine$readNinePatch;
  Coroutine$readNinePatch.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBitmap_1(this.local$$receiver, this.local$format, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new NinePatchBitmap32(this.result_0.toBMP32());
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
  function PSNR() {
    PSNR_instance = this;
  }
  PSNR.prototype.MSE_h1jruv$ = function (a, b, c) {
    var tmp$;
    if (!((tmp$ = a.size) != null ? tmp$.equals(b.size) : null))
      invalidOp(a.size.toString() + ' != ' + b.size);
    var area = a.area;
    var sum = 0.0;
    for (var n = 0; n < area; n++) {
      var v = c.extract_md34sx$(a.data.get_za3lpa$(n)) - c.extract_md34sx$(b.data.get_za3lpa$(n)) | 0;
      sum += Kotlin.imul(v, v);
    }
    return sum / area;
  };
  PSNR.prototype.MSE_6bycng$ = function (a, b) {
    var $receiver = BitmapChannel$Companion_getInstance().ALL;
    var destination = ArrayList_init_1($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(this.MSE_h1jruv$(a, b, item));
    }
    return sum_0(destination) / 4.0;
  };
  PSNR.prototype.PSNR_0 = function (a, b, mse) {
    var x = 255 / Math_0.sqrt(mse);
    return 20.0 * Math_0.log10(x);
  };
  PSNR.prototype.invoke_6bycng$ = function (a, b) {
    return this.PSNR_0(a, b, this.MSE_6bycng$(a, b));
  };
  PSNR.prototype.invoke_h1jruv$ = function (a, b, c) {
    return this.PSNR_0(a, b, this.MSE_h1jruv$(a, b, c));
  };
  PSNR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PSNR',
    interfaces: []
  };
  var PSNR_instance = null;
  function PSNR_getInstance() {
    if (PSNR_instance === null) {
      new PSNR();
    }
    return PSNR_instance;
  }
  function psnrDiffTo($receiver, that) {
    return computePsnr(Bitmap32$Companion_getInstance(), $receiver, that);
  }
  function computePsnr($receiver, a, b) {
    return PSNR_getInstance().invoke_6bycng$(a, b);
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [ColorFormatBase]
  };
  ColorFormatBase.$metadata$ = {
    kind: Kind_INTERFACE,
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
    return RGBA$Companion_getInstance().invoke_tjonv8$(this.getR_za3lpa$(v), this.getG_za3lpa$(v), this.getB_za3lpa$(v), this.getA_za3lpa$(v));
  };
  ColorFormat.prototype.packRGBA_md34sx$ = function (c) {
    return this.pack_tjonv8$(c.r, c.g, c.b, c.a);
  };
  ColorFormat.prototype.unpackToRGBA_za3lpa$ = function (packed) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(this.getR_za3lpa$(packed), this.getG_za3lpa$(packed), this.getB_za3lpa$(packed), this.getA_za3lpa$(packed));
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
    kind: Kind_OBJECT,
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
  ColorFormat.prototype.decodeInternal_expzoq$ = defineInlineFunction('korim-js.com.soywiz.korim.color.ColorFormat.decodeInternal_expzoq$', wrapFunction(function () {
    var RGBA = _.com.soywiz.korim.color.RGBA;
    return function (data, dataOffset, out, outOffset, size, read) {
      var tmp$;
      var io = dataOffset;
      var oo = outOffset;
      var bytesPerPixel = this.bytesPerPixel;
      for (var n = 0; n < size; n++) {
        var c = read(data, io);
        io = io + bytesPerPixel | 0;
        out.set_vlvk8p$((tmp$ = oo, oo = tmp$ + 1 | 0, tmp$), RGBA.Companion.invoke_tjonv8$(this.getR_za3lpa$(c), this.getG_za3lpa$(c), this.getB_za3lpa$(c), this.getA_za3lpa$(c)));
      }
    };
  }));
  ColorFormat.prototype.decode_lg4na5$$default = function (data, dataOffset, out, outOffset, size, littleEndian) {
    switch (this.bpp) {
      case 16:
        if (littleEndian) {
          var tmp$;
          var io = dataOffset;
          var oo = outOffset;
          var bytesPerPixel = this.bytesPerPixel;
          for (var n = 0; n < size; n++) {
            var c = readU16_le(data, io);
            io = io + bytesPerPixel | 0;
            out.set_vlvk8p$((tmp$ = oo, oo = tmp$ + 1 | 0, tmp$), RGBA.Companion.invoke_tjonv8$(this.getR_za3lpa$(c), this.getG_za3lpa$(c), this.getB_za3lpa$(c), this.getA_za3lpa$(c)));
          }
        }
         else {
          var tmp$_0;
          var io_0 = dataOffset;
          var oo_0 = outOffset;
          var bytesPerPixel_0 = this.bytesPerPixel;
          for (var n_0 = 0; n_0 < size; n_0++) {
            var c_0 = readU16_be(data, io_0);
            io_0 = io_0 + bytesPerPixel_0 | 0;
            out.set_vlvk8p$((tmp$_0 = oo_0, oo_0 = tmp$_0 + 1 | 0, tmp$_0), RGBA.Companion.invoke_tjonv8$(this.getR_za3lpa$(c_0), this.getG_za3lpa$(c_0), this.getB_za3lpa$(c_0), this.getA_za3lpa$(c_0)));
          }
        }

        break;
      case 24:
        if (littleEndian) {
          var tmp$_1;
          var io_1 = dataOffset;
          var oo_1 = outOffset;
          var bytesPerPixel_1 = this.bytesPerPixel;
          for (var n_1 = 0; n_1 < size; n_1++) {
            var c_1 = readU24_le(data, io_1);
            io_1 = io_1 + bytesPerPixel_1 | 0;
            out.set_vlvk8p$((tmp$_1 = oo_1, oo_1 = tmp$_1 + 1 | 0, tmp$_1), RGBA.Companion.invoke_tjonv8$(this.getR_za3lpa$(c_1), this.getG_za3lpa$(c_1), this.getB_za3lpa$(c_1), this.getA_za3lpa$(c_1)));
          }
        }
         else {
          var tmp$_2;
          var io_2 = dataOffset;
          var oo_2 = outOffset;
          var bytesPerPixel_2 = this.bytesPerPixel;
          for (var n_2 = 0; n_2 < size; n_2++) {
            var c_2 = readU24_be(data, io_2);
            io_2 = io_2 + bytesPerPixel_2 | 0;
            out.set_vlvk8p$((tmp$_2 = oo_2, oo_2 = tmp$_2 + 1 | 0, tmp$_2), RGBA.Companion.invoke_tjonv8$(this.getR_za3lpa$(c_2), this.getG_za3lpa$(c_2), this.getB_za3lpa$(c_2), this.getA_za3lpa$(c_2)));
          }
        }

        break;
      case 32:
        if (littleEndian) {
          var tmp$_3;
          var io_3 = dataOffset;
          var oo_3 = outOffset;
          var bytesPerPixel_3 = this.bytesPerPixel;
          for (var n_3 = 0; n_3 < size; n_3++) {
            var c_3 = readS32_le(data, io_3);
            io_3 = io_3 + bytesPerPixel_3 | 0;
            out.set_vlvk8p$((tmp$_3 = oo_3, oo_3 = tmp$_3 + 1 | 0, tmp$_3), RGBA.Companion.invoke_tjonv8$(this.getR_za3lpa$(c_3), this.getG_za3lpa$(c_3), this.getB_za3lpa$(c_3), this.getA_za3lpa$(c_3)));
          }
        }
         else {
          var tmp$_4;
          var io_4 = dataOffset;
          var oo_4 = outOffset;
          var bytesPerPixel_4 = this.bytesPerPixel;
          for (var n_4 = 0; n_4 < size; n_4++) {
            var c_4 = readS32_be(data, io_4);
            io_4 = io_4 + bytesPerPixel_4 | 0;
            out.set_vlvk8p$((tmp$_4 = oo_4, oo_4 = tmp$_4 + 1 | 0, tmp$_4), RGBA.Companion.invoke_tjonv8$(this.getR_za3lpa$(c_4), this.getG_za3lpa$(c_4), this.getB_za3lpa$(c_4), this.getA_za3lpa$(c_4)));
          }
        }

        break;
      default:throw IllegalArgumentException_init('Unsupported bpp ' + this.bpp);
    }
  };
  ColorFormat.prototype.decode_lg4na5$ = function (data, dataOffset, out, outOffset, size, littleEndian, callback$default) {
    if (littleEndian === void 0)
      littleEndian = true;
    callback$default ? callback$default(data, dataOffset, out, outOffset, size, littleEndian) : this.decode_lg4na5$$default(data, dataOffset, out, outOffset, size, littleEndian);
  };
  ColorFormat.prototype.decode_exhmhv$$default = function (data, dataOffset, size, littleEndian) {
    var out = RgbaArray$Companion_getInstance().invoke_za3lpa$(size);
    this.decode_lg4na5$(data, dataOffset, out, 0, size, littleEndian);
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
  ColorFormat.prototype.decodeToBitmap32_131o2$$default = function (bmp, data, dataOffset, littleEndian) {
    this.decode_lg4na5$(data, dataOffset, bmp.data, 0, bmp.area);
    return bmp;
  };
  ColorFormat.prototype.decodeToBitmap32_131o2$ = function (bmp, data, dataOffset, littleEndian, callback$default) {
    if (dataOffset === void 0)
      dataOffset = 0;
    if (littleEndian === void 0)
      littleEndian = true;
    return callback$default ? callback$default(bmp, data, dataOffset, littleEndian) : this.decodeToBitmap32_131o2$$default(bmp, data, dataOffset, littleEndian);
  };
  ColorFormat.prototype.encode_fsadwd$$default = function (colors, colorsOffset, out, outOffset, size, littleEndian) {
    var tmp$;
    var io = colorsOffset;
    var oo = outOffset;
    for (var n = 0; n < size; n++) {
      var c = colors.get_za3lpa$((tmp$ = io, io = tmp$ + 1 | 0, tmp$));
      var ec = this.pack_tjonv8$(c.r, c.g, c.b, c.a);
      switch (this.bpp) {
        case 16:
          if (littleEndian)
            write16_le(out, oo, ec);
          else
            write16_be(out, oo, ec);
          break;
        case 24:
          if (littleEndian)
            write24_le(out, oo, ec);
          else
            write24_be(out, oo, ec);
          break;
        case 32:
          if (littleEndian)
            write32_le(out, oo, ec);
          else
            write32_be(out, oo, ec);
          break;
        default:throw IllegalArgumentException_init('Unsupported bpp ' + this.bpp);
      }
      oo = oo + this.bytesPerPixel | 0;
    }
  };
  ColorFormat.prototype.encode_fsadwd$ = function (colors, colorsOffset, out, outOffset, size, littleEndian, callback$default) {
    if (littleEndian === void 0)
      littleEndian = true;
    callback$default ? callback$default(colors, colorsOffset, out, outOffset, size, littleEndian) : this.encode_fsadwd$$default(colors, colorsOffset, out, outOffset, size, littleEndian);
  };
  ColorFormat.prototype.encode_864r4v$$default = function (colors, colorsOffset, size, littleEndian) {
    var out = new Int8Array(Kotlin.imul(size, this.bytesPerPixel));
    this.encode_fsadwd$(colors, colorsOffset, out, 0, size, littleEndian);
    return out;
  };
  ColorFormat.prototype.encode_864r4v$ = function (colors, colorsOffset, size, littleEndian, callback$default) {
    if (colorsOffset === void 0)
      colorsOffset = 0;
    if (size === void 0)
      size = colors.size;
    if (littleEndian === void 0)
      littleEndian = true;
    return callback$default ? callback$default(colors, colorsOffset, size, littleEndian) : this.encode_864r4v$$default(colors, colorsOffset, size, littleEndian);
  };
  ColorFormat.$metadata$ = {
    kind: Kind_CLASS,
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
      out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = toShort(this.pack_tjonv8$(RGBA$Companion_getInstance().getR_za3lpa$(c), RGBA$Companion_getInstance().getG_za3lpa$(c), RGBA$Companion_getInstance().getB_za3lpa$(c), RGBA$Companion_getInstance().getA_za3lpa$(c)));
    }
  };
  ColorFormat16.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFormat16',
    interfaces: [ColorFormat]
  };
  function ColorFormat24() {
    ColorFormat.call(this, 24);
  }
  ColorFormat24.$metadata$ = {
    kind: Kind_CLASS,
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
      out[tmp$_0 = oo, oo = tmp$_0 + 1 | 0, tmp$_0] = this.pack_tjonv8$(RGBA$Companion_getInstance().getR_za3lpa$(c), RGBA$Companion_getInstance().getG_za3lpa$(c), RGBA$Companion_getInstance().getB_za3lpa$(c), RGBA$Companion_getInstance().getA_za3lpa$(c));
    }
  };
  ColorFormat32.$metadata$ = {
    kind: Kind_CLASS,
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
    this._colorMul_0 = Colors_getInstance().WHITE;
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
    return new ColorTransform(numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToDouble(1), numberToInt(r), numberToInt(g), numberToInt(b), numberToInt(a));
  };
  ColorTransform$Companion.$metadata$ = {
    kind: Kind_OBJECT,
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
      this._colorMul_0 = new RGBA(RGBA$Companion_getInstance().packf_7b5o5w$(this._mR_0, this._mG_0, this._mB_0, this._mA_0));
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
      this._mR_0 = v.rd;
      this._mG_0 = v.gd;
      this._mB_0 = v.bd;
      this._mA_0 = v.ad;
      this.dirty_0 = true;
    }
  });
  Object.defineProperty(ColorTransform.prototype, 'colorAdd', {
    get: function () {
      return this.computeColors_0()._colorAdd_0;
    },
    set: function (v) {
      this._aR_0 = this.unpackAddComponent_0(RGBA$Companion_getInstance().getFastR_za3lpa$(v));
      this._aG_0 = this.unpackAddComponent_0(RGBA$Companion_getInstance().getFastG_za3lpa$(v));
      this._aB_0 = this.unpackAddComponent_0(RGBA$Companion_getInstance().getFastB_za3lpa$(v));
      this._aA_0 = this.unpackAddComponent_0(RGBA$Companion_getInstance().getFastA_za3lpa$(v));
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
    var r = numberToInt(RGBA$Companion_getInstance().getFastR_za3lpa$(color) * this.mR + this.aR);
    var g = numberToInt(RGBA$Companion_getInstance().getFastG_za3lpa$(color) * this.mG + this.aG);
    var b = numberToInt(RGBA$Companion_getInstance().getFastB_za3lpa$(color) * this.mB + this.aB);
    var a = numberToInt(RGBA$Companion_getInstance().getFastA_za3lpa$(color) * this.mA + this.aA);
    return RGBA$Companion_getInstance().pack_tjonv8$(r, g, b, a);
  };
  ColorTransform.$metadata$ = {
    kind: Kind_CLASS,
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
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    var ColorTransform_init = _.com.soywiz.korim.color.ColorTransform;
    return function (mR, mG, mB, mA, aR, aG, aB, aA) {
      return new ColorTransform_init(numberToDouble(mR), numberToDouble(mG), numberToDouble(mB), numberToDouble(mA), numberToInt(aR), numberToInt(aG), numberToInt(aB), numberToInt(aA));
    };
  }));
  function Colors() {
    Colors_instance = this;
    this.WHITE = this.RGB_0(255, 255, 255, 255);
    this.BLACK = this.RGB_0(0, 0, 0, 255);
    this.RED = this.RGB_0(255, 0, 0, 255);
    this.GREEN = this.RGB_0(0, 255, 0, 255);
    this.BLUE = this.RGB_0(0, 0, 255, 255);
    this.TRANSPARENT_BLACK = this.RGB_0(0, 0, 0, 0);
    this.TRANSPARENT_WHITE = this.RGB_0(0, 0, 0, 0);
    this.ALICEBLUE = this.RGB_0(240, 248, 255);
    this.ANTIQUEWHITE = this.RGB_0(250, 235, 215);
    this.AQUA = this.RGB_0(0, 255, 255);
    this.AQUAMARINE = this.RGB_0(127, 255, 212);
    this.AZURE = this.RGB_0(240, 255, 255);
    this.BEIGE = this.RGB_0(245, 245, 220);
    this.BISQUE = this.RGB_0(255, 228, 196);
    this.BLANCHEDALMOND = this.RGB_0(255, 235, 205);
    this.BLUEVIOLET = this.RGB_0(138, 43, 226);
    this.BROWN = this.RGB_0(165, 42, 42);
    this.BURLYWOOD = this.RGB_0(222, 184, 135);
    this.CADETBLUE = this.RGB_0(95, 158, 160);
    this.CHARTREUSE = this.RGB_0(127, 255, 0);
    this.CHOCOLATE = this.RGB_0(210, 105, 30);
    this.CORAL = this.RGB_0(255, 127, 80);
    this.CORNFLOWERBLUE = this.RGB_0(100, 149, 237);
    this.CORNSILK = this.RGB_0(255, 248, 220);
    this.CRIMSON = this.RGB_0(220, 20, 60);
    this.DARKBLUE = this.RGB_0(0, 0, 139);
    this.DARKCYAN = this.RGB_0(0, 139, 139);
    this.DARKGOLDENROD = this.RGB_0(184, 134, 11);
    this.DARKGRAY = this.RGB_0(169, 169, 169);
    this.DARKGREEN = this.RGB_0(0, 100, 0);
    this.DARKGREY = this.RGB_0(169, 169, 169);
    this.DARKKHAKI = this.RGB_0(189, 183, 107);
    this.DARKMAGENTA = this.RGB_0(139, 0, 139);
    this.DARKOLIVEGREEN = this.RGB_0(85, 107, 47);
    this.DARKORANGE = this.RGB_0(255, 140, 0);
    this.DARKORCHID = this.RGB_0(153, 50, 204);
    this.DARKRED = this.RGB_0(139, 0, 0);
    this.DARKSALMON = this.RGB_0(233, 150, 122);
    this.DARKSEAGREEN = this.RGB_0(143, 188, 143);
    this.DARKSLATEBLUE = this.RGB_0(72, 61, 139);
    this.DARKSLATEGRAY = this.RGB_0(47, 79, 79);
    this.DARKSLATEGREY = this.RGB_0(47, 79, 79);
    this.DARKTURQUOISE = this.RGB_0(0, 206, 209);
    this.DARKVIOLET = this.RGB_0(148, 0, 211);
    this.DEEPPINK = this.RGB_0(255, 20, 147);
    this.DEEPSKYBLUE = this.RGB_0(0, 191, 255);
    this.DIMGRAY = this.RGB_0(105, 105, 105);
    this.DIMGREY = this.RGB_0(105, 105, 105);
    this.DODGERBLUE = this.RGB_0(30, 144, 255);
    this.FIREBRICK = this.RGB_0(178, 34, 34);
    this.FLORALWHITE = this.RGB_0(255, 250, 240);
    this.FORESTGREEN = this.RGB_0(34, 139, 34);
    this.FUCHSIA = this.RGB_0(255, 0, 255);
    this.GAINSBORO = this.RGB_0(220, 220, 220);
    this.GHOSTWHITE = this.RGB_0(248, 248, 255);
    this.GOLD = this.RGB_0(255, 215, 0);
    this.GOLDENROD = this.RGB_0(218, 165, 32);
    this.GREENYELLOW = this.RGB_0(173, 255, 47);
    this.HONEYDEW = this.RGB_0(240, 255, 240);
    this.HOTPINK = this.RGB_0(255, 105, 180);
    this.INDIANRED = this.RGB_0(205, 92, 92);
    this.INDIGO = this.RGB_0(75, 0, 130);
    this.IVORY = this.RGB_0(255, 255, 240);
    this.KHAKI = this.RGB_0(240, 230, 140);
    this.LAVENDER = this.RGB_0(230, 230, 250);
    this.LAVENDERBLUSH = this.RGB_0(255, 240, 245);
    this.LAWNGREEN = this.RGB_0(124, 252, 0);
    this.LEMONCHIFFON = this.RGB_0(255, 250, 205);
    this.LIGHTBLUE = this.RGB_0(173, 216, 230);
    this.LIGHTCORAL = this.RGB_0(240, 128, 128);
    this.LIGHTCYAN = this.RGB_0(224, 255, 255);
    this.LIGHTGOLDENRODYELLOW = this.RGB_0(250, 250, 210);
    this.LIGHTGRAY = this.RGB_0(211, 211, 211);
    this.LIGHTGREEN = this.RGB_0(144, 238, 144);
    this.LIGHTGREY = this.RGB_0(211, 211, 211);
    this.LIGHTPINK = this.RGB_0(255, 182, 193);
    this.LIGHTSALMON = this.RGB_0(255, 160, 122);
    this.LIGHTSEAGREEN = this.RGB_0(32, 178, 170);
    this.LIGHTSKYBLUE = this.RGB_0(135, 206, 250);
    this.LIGHTSLATEGRAY = this.RGB_0(119, 136, 153);
    this.LIGHTSLATEGREY = this.RGB_0(119, 136, 153);
    this.LIGHTSTEELBLUE = this.RGB_0(176, 196, 222);
    this.LIGHTYELLOW = this.RGB_0(255, 255, 224);
    this.LIME = this.RGB_0(0, 255, 0);
    this.LIMEGREEN = this.RGB_0(50, 205, 50);
    this.LINEN = this.RGB_0(250, 240, 230);
    this.MAROON = this.RGB_0(128, 0, 0);
    this.MEDIUMAQUAMARINE = this.RGB_0(102, 205, 170);
    this.MEDIUMBLUE = this.RGB_0(0, 0, 205);
    this.MEDIUMORCHID = this.RGB_0(186, 85, 211);
    this.MEDIUMPURPLE = this.RGB_0(147, 112, 219);
    this.MEDIUMSEAGREEN = this.RGB_0(60, 179, 113);
    this.MEDIUMSLATEBLUE = this.RGB_0(123, 104, 238);
    this.MEDIUMSPRINGGREEN = this.RGB_0(0, 250, 154);
    this.MEDIUMTURQUOISE = this.RGB_0(72, 209, 204);
    this.MEDIUMVIOLETRED = this.RGB_0(199, 21, 133);
    this.MIDNIGHTBLUE = this.RGB_0(25, 25, 112);
    this.MINTCREAM = this.RGB_0(245, 255, 250);
    this.MISTYROSE = this.RGB_0(255, 228, 225);
    this.MOCCASIN = this.RGB_0(255, 228, 181);
    this.NAVAJOWHITE = this.RGB_0(255, 222, 173);
    this.NAVY = this.RGB_0(0, 0, 128);
    this.OLDLACE = this.RGB_0(253, 245, 230);
    this.OLIVE = this.RGB_0(128, 128, 0);
    this.OLIVEDRAB = this.RGB_0(107, 142, 35);
    this.ORANGE = this.RGB_0(255, 165, 0);
    this.ORANGERED = this.RGB_0(255, 69, 0);
    this.ORCHID = this.RGB_0(218, 112, 214);
    this.PALEGOLDENROD = this.RGB_0(238, 232, 170);
    this.PALEGREEN = this.RGB_0(152, 251, 152);
    this.PALETURQUOISE = this.RGB_0(175, 238, 238);
    this.PALEVIOLETRED = this.RGB_0(219, 112, 147);
    this.PAPAYAWHIP = this.RGB_0(255, 239, 213);
    this.PEACHPUFF = this.RGB_0(255, 218, 185);
    this.PERU = this.RGB_0(205, 133, 63);
    this.PINK = this.RGB_0(255, 192, 203);
    this.PLUM = this.RGB_0(221, 160, 221);
    this.POWDERBLUE = this.RGB_0(176, 224, 230);
    this.PURPLE = this.RGB_0(128, 0, 128);
    this.ROSYBROWN = this.RGB_0(188, 143, 143);
    this.ROYALBLUE = this.RGB_0(65, 105, 225);
    this.SADDLEBROWN = this.RGB_0(139, 69, 19);
    this.SALMON = this.RGB_0(250, 128, 114);
    this.SANDYBROWN = this.RGB_0(244, 164, 96);
    this.SEAGREEN = this.RGB_0(46, 139, 87);
    this.SEASHELL = this.RGB_0(255, 245, 238);
    this.SIENNA = this.RGB_0(160, 82, 45);
    this.SILVER = this.RGB_0(192, 192, 192);
    this.SKYBLUE = this.RGB_0(135, 206, 235);
    this.SLATEBLUE = this.RGB_0(106, 90, 205);
    this.SLATEGRAY = this.RGB_0(112, 128, 144);
    this.SLATEGREY = this.RGB_0(112, 128, 144);
    this.SNOW = this.RGB_0(255, 250, 250);
    this.SPRINGGREEN = this.RGB_0(0, 255, 127);
    this.STEELBLUE = this.RGB_0(70, 130, 180);
    this.TAN = this.RGB_0(210, 180, 140);
    this.TEAL = this.RGB_0(0, 128, 128);
    this.THISTLE = this.RGB_0(216, 191, 216);
    this.TOMATO = this.RGB_0(255, 99, 71);
    this.TURQUOISE = this.RGB_0(64, 224, 208);
    this.VIOLET = this.RGB_0(238, 130, 238);
    this.WHEAT = this.RGB_0(245, 222, 179);
    this.WHITESMOKE = this.RGB_0(245, 245, 245);
    this.YELLOWGREEN = this.RGB_0(154, 205, 50);
    this.colorsByName = mapOf([to('black', this.BLACK), to('white', this.WHITE), to('red', this.RED), to('green', this.GREEN), to('blue', this.BLUE), to('aliceblue', this.ALICEBLUE), to('antiquewhite', this.ANTIQUEWHITE), to('aqua', this.AQUA), to('aquamarine', this.AQUAMARINE), to('azure', this.AZURE), to('beige', this.BEIGE), to('bisque', this.BISQUE), to('blanchedalmond', this.BLANCHEDALMOND), to('blueviolet', this.BLUEVIOLET), to('brown', this.BROWN), to('burlywood', this.BURLYWOOD), to('cadetblue', this.CADETBLUE), to('chartreuse', this.CHARTREUSE), to('chocolate', this.CHOCOLATE), to('coral', this.CORAL), to('cornflowerblue', this.CORNFLOWERBLUE), to('cornsilk', this.CORNSILK), to('crimson', this.CRIMSON), to('darkblue', this.DARKBLUE), to('darkcyan', this.DARKCYAN), to('darkgoldenrod', this.DARKGOLDENROD), to('darkgray', this.DARKGRAY), to('darkgreen', this.DARKGREEN), to('darkgrey', this.DARKGREY), to('darkkhaki', this.DARKKHAKI), to('darkmagenta', this.DARKMAGENTA), to('darkolivegreen', this.DARKOLIVEGREEN), to('darkorange', this.DARKORANGE), to('darkorchid', this.DARKORCHID), to('darkred', this.DARKRED), to('darksalmon', this.DARKSALMON), to('darkseagreen', this.DARKSEAGREEN), to('darkslateblue', this.DARKSLATEBLUE), to('darkslategray', this.DARKSLATEGRAY), to('darkslategrey', this.DARKSLATEGREY), to('darkturquoise', this.DARKTURQUOISE), to('darkviolet', this.DARKVIOLET), to('deeppink', this.DEEPPINK), to('deepskyblue', this.DEEPSKYBLUE), to('dimgray', this.DIMGRAY), to('dimgrey', this.DIMGREY), to('dodgerblue', this.DODGERBLUE), to('firebrick', this.FIREBRICK), to('floralwhite', this.FLORALWHITE), to('forestgreen', this.FORESTGREEN), to('fuchsia', this.FUCHSIA), to('gainsboro', this.GAINSBORO), to('ghostwhite', this.GHOSTWHITE), to('gold', this.GOLD), to('goldenrod', this.GOLDENROD), to('greenyellow', this.GREENYELLOW), to('honeydew', this.HONEYDEW), to('hotpink', this.HOTPINK), to('indianred', this.INDIANRED), to('indigo', this.INDIGO), to('ivory', this.IVORY), to('khaki', this.KHAKI), to('lavender', this.LAVENDER), to('lavenderblush', this.LAVENDERBLUSH), to('lawngreen', this.LAWNGREEN), to('lemonchiffon', this.LEMONCHIFFON), to('lightblue', this.LIGHTBLUE), to('lightcoral', this.LIGHTCORAL), to('lightcyan', this.LIGHTCYAN), to('lightgoldenrodyellow', this.LIGHTGOLDENRODYELLOW), to('lightgray', this.LIGHTGRAY), to('lightgreen', this.LIGHTGREEN), to('lightgrey', this.LIGHTGREY), to('lightpink', this.LIGHTPINK), to('lightsalmon', this.LIGHTSALMON), to('lightseagreen', this.LIGHTSEAGREEN), to('lightskyblue', this.LIGHTSKYBLUE), to('lightslategray', this.LIGHTSLATEGRAY), to('lightslategrey', this.LIGHTSLATEGREY), to('lightsteelblue', this.LIGHTSTEELBLUE), to('lightyellow', this.LIGHTYELLOW), to('lime', this.LIME), to('limegreen', this.LIMEGREEN), to('linen', this.LINEN), to('maroon', this.MAROON), to('mediumaquamarine', this.MEDIUMAQUAMARINE), to('mediumblue', this.MEDIUMBLUE), to('mediumorchid', this.MEDIUMORCHID), to('mediumpurple', this.MEDIUMPURPLE), to('mediumseagreen', this.MEDIUMSEAGREEN), to('mediumslateblue', this.MEDIUMSLATEBLUE), to('mediumspringgreen', this.MEDIUMSPRINGGREEN), to('mediumturquoise', this.MEDIUMTURQUOISE), to('mediumvioletred', this.MEDIUMVIOLETRED), to('midnightblue', this.MIDNIGHTBLUE), to('mintcream', this.MINTCREAM), to('mistyrose', this.MISTYROSE), to('moccasin', this.MOCCASIN), to('navajowhite', this.NAVAJOWHITE), to('navy', this.NAVY), to('oldlace', this.OLDLACE), to('olive', this.OLIVE), to('olivedrab', this.OLIVEDRAB), to('orange', this.ORANGE), to('orangered', this.ORANGERED), to('orchid', this.ORCHID), to('palegoldenrod', this.PALEGOLDENROD), to('palegreen', this.PALEGREEN), to('paleturquoise', this.PALETURQUOISE), to('palevioletred', this.PALEVIOLETRED), to('papayawhip', this.PAPAYAWHIP), to('peachpuff', this.PEACHPUFF), to('peru', this.PERU), to('pink', this.PINK), to('plum', this.PLUM), to('powderblue', this.POWDERBLUE), to('purple', this.PURPLE), to('rosybrown', this.ROSYBROWN), to('royalblue', this.ROYALBLUE), to('saddlebrown', this.SADDLEBROWN), to('salmon', this.SALMON), to('sandybrown', this.SANDYBROWN), to('seagreen', this.SEAGREEN), to('seashell', this.SEASHELL), to('sienna', this.SIENNA), to('silver', this.SILVER), to('skyblue', this.SKYBLUE), to('slateblue', this.SLATEBLUE), to('slategray', this.SLATEGRAY), to('slategrey', this.SLATEGREY), to('snow', this.SNOW), to('springgreen', this.SPRINGGREEN), to('steelblue', this.STEELBLUE), to('tan', this.TAN), to('teal', this.TEAL), to('thistle', this.THISTLE), to('tomato', this.TOMATO), to('turquoise', this.TURQUOISE), to('violet', this.VIOLET), to('wheat', this.WHEAT), to('whitesmoke', this.WHITESMOKE), to('yellowgreen', this.YELLOWGREEN)]);
  }
  Colors.prototype.RGB_0 = function (r, g, b, a) {
    if (a === void 0)
      a = 255;
    return RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a);
  };
  Colors.prototype.get_61zpoe$ = function (str) {
    return this.get_xtzj24$(str, Colors_getInstance().TRANSPARENT_BLACK, true);
  };
  var get_lastIndex = Kotlin.kotlin.collections.get_lastIndex_55thoc$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  Colors.prototype.get_xtzj24$ = function (str, default_0, errorOnDefault) {
    if (errorOnDefault === void 0)
      errorOnDefault = false;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (startsWith(str, '#')) {
      var hex = substr(str, 1);
      if (!setOf([3, 4, 6, 8]).contains_11rb$(hex.length))
        return this.BLACK;
      var chars = hex.length < 6 ? 1 : 2;
      var scale = hex.length < 6 ? 255.0 / 15.0 : 1.0;
      var hasAlpha = (hex.length / chars | 0) >= 4;
      var r = numberToInt(toInt(substr_0(hex, 0 * chars | 0, chars), 16) * scale);
      var g = numberToInt(toInt(substr_0(hex, 1 * chars | 0, chars), 16) * scale);
      var b = numberToInt(toInt(substr_0(hex, 2 * chars | 0, chars), 16) * scale);
      var a = hasAlpha ? numberToInt(toInt(substr_0(hex, 3 * chars | 0, chars), 16) * scale) : 255;
      return RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a);
    }
     else if (startsWith(str, 'RGBA(', true)) {
      var parts = split(removeSuffix(removePrefix(str.toUpperCase(), 'RGBA('), ')'), [',']);
      var r_0 = (tmp$ = toIntOrNull(0 >= 0 && 0 <= get_lastIndex(parts) ? parts.get_za3lpa$(0) : '0')) != null ? tmp$ : 0;
      var g_0 = (tmp$_0 = toIntOrNull(1 >= 0 && 1 <= get_lastIndex(parts) ? parts.get_za3lpa$(1) : '0')) != null ? tmp$_0 : 0;
      var b_0 = (tmp$_1 = toIntOrNull(2 >= 0 && 2 <= get_lastIndex(parts) ? parts.get_za3lpa$(2) : '0')) != null ? tmp$_1 : 0;
      var af = (tmp$_2 = toDoubleOrNull(3 >= 0 && 3 <= get_lastIndex(parts) ? parts.get_za3lpa$(3) : '1.0')) != null ? tmp$_2 : 1.0;
      return RGBA$Companion_getInstance().invoke_tjonv8$(r_0, g_0, b_0, numberToInt(af * 255));
    }
     else {
      var col = this.colorsByName.get_11rb$(str.toLowerCase());
      if (col == null && errorOnDefault) {
        throw IllegalStateException_init(("Unsupported color '" + str + "'").toString());
      }
      return col != null ? col : default_0;
    }
  };
  Colors.prototype.toHtmlString_za3lpa$ = function (color) {
    return 'RGBA(' + toString(RGBA$Companion_getInstance().getR_za3lpa$(color)) + ',' + toString(RGBA$Companion_getInstance().getG_za3lpa$(color)) + ',' + toString(RGBA$Companion_getInstance().getB_za3lpa$(color)) + ',' + toString(RGBA$Companion_getInstance().getAf_za3lpa$(color)) + ')';
  };
  Colors.prototype.toHtmlStringSimple_za3lpa$ = function (color) {
    return format('#%02x%02x%02x', [RGBA$Companion_getInstance().getR_za3lpa$(color), RGBA$Companion_getInstance().getG_za3lpa$(color), RGBA$Companion_getInstance().getB_za3lpa$(color)]);
  };
  function Colors$Default() {
    Colors$Default_instance = this;
  }
  Colors$Default.prototype.get_61zpoe$ = function (str) {
    return Colors_getInstance().get_xtzj24$(str, Colors_getInstance().RED);
  };
  Colors$Default.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Default',
    interfaces: []
  };
  var Colors$Default_instance = null;
  function Colors$Default_getInstance() {
    if (Colors$Default_instance === null) {
      new Colors$Default();
    }
    return Colors$Default_instance;
  }
  Colors.$metadata$ = {
    kind: Kind_OBJECT,
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
  function PaletteColorFormat(palette) {
    ColorFormat.call(this, 8);
    this.palette = palette;
  }
  PaletteColorFormat.prototype.getR_za3lpa$ = function (v) {
    return RGBA$Companion_getInstance().getFastR_za3lpa$(this.palette[v]);
  };
  PaletteColorFormat.prototype.getG_za3lpa$ = function (v) {
    return RGBA$Companion_getInstance().getFastG_za3lpa$(this.palette[v]);
  };
  PaletteColorFormat.prototype.getB_za3lpa$ = function (v) {
    return RGBA$Companion_getInstance().getFastB_za3lpa$(this.palette[v]);
  };
  PaletteColorFormat.prototype.getA_za3lpa$ = function (v) {
    return RGBA$Companion_getInstance().getFastA_za3lpa$(this.palette[v]);
  };
  PaletteColorFormat.prototype.pack_tjonv8$ = function (r, g, b, a) {
    throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented. Must locate best color in palette');
  };
  PaletteColorFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PaletteColorFormat',
    interfaces: [ColorFormat]
  };
  function RGB(rOffset, gOffset, bOffset) {
    RGB$Companion_getInstance();
    ColorFormat24.call(this);
    this.rOffset = rOffset;
    this.gOffset = gOffset;
    this.bOffset = bOffset;
  }
  RGB.prototype.getR_za3lpa$ = function (v) {
    return extract8(v, this.rOffset);
  };
  RGB.prototype.getG_za3lpa$ = function (v) {
    return extract8(v, this.gOffset);
  };
  RGB.prototype.getB_za3lpa$ = function (v) {
    return extract8(v, this.bOffset);
  };
  RGB.prototype.getA_za3lpa$ = function (v) {
    return 255;
  };
  RGB.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return insert8(insert8(insert8(0, r, this.rOffset), g, this.gOffset), b, this.bOffset);
  };
  function RGB$Companion() {
    RGB$Companion_instance = this;
    RGB.call(this, 0, 8, 16);
  }
  RGB$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [RGB]
  };
  var RGB$Companion_instance = null;
  function RGB$Companion_getInstance() {
    if (RGB$Companion_instance === null) {
      new RGB$Companion();
    }
    return RGB$Companion_instance;
  }
  RGB.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGB',
    interfaces: [ColorFormat24]
  };
  function BGR() {
    BGR_instance = this;
    RGB.call(this, 16, 8, 0);
  }
  BGR.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BGR',
    interfaces: [RGB]
  };
  var BGR_instance = null;
  function BGR_getInstance() {
    if (BGR_instance === null) {
      new BGR();
    }
    return BGR_instance;
  }
  function RGBA(rgba) {
    RGBA$Companion_getInstance();
    this.rgba = rgba;
  }
  Object.defineProperty(RGBA.prototype, 'r', {
    get: function () {
      return this.rgba >>> 0 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'g', {
    get: function () {
      return this.rgba >>> 8 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'b', {
    get: function () {
      return this.rgba >>> 16 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'a', {
    get: function () {
      return this.rgba >>> 24 & 255;
    }
  });
  Object.defineProperty(RGBA.prototype, 'rf', {
    get: function () {
      return this.r / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'gf', {
    get: function () {
      return this.g / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'bf', {
    get: function () {
      return this.b / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'af', {
    get: function () {
      return this.a / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'rd', {
    get: function () {
      return this.r / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'gd', {
    get: function () {
      return this.g / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'bd', {
    get: function () {
      return this.b / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'ad', {
    get: function () {
      return this.a / 255.0;
    }
  });
  Object.defineProperty(RGBA.prototype, 'rgb', {
    get: function () {
      return this.rgba & 16777215;
    }
  });
  RGBA.prototype.withR_za3lpa$ = function (v) {
    return new RGBA(this.rgba & -256 | (v & 255) << 0);
  };
  RGBA.prototype.withG_za3lpa$ = function (v) {
    return new RGBA(this.rgba & -65281 | (v & 255) << 8);
  };
  RGBA.prototype.withB_za3lpa$ = function (v) {
    return new RGBA(this.rgba & -16711681 | (v & 255) << 16);
  };
  RGBA.prototype.withA_za3lpa$ = function (v) {
    return new RGBA(this.rgba & 16777215 | (v & 255) << 16);
  };
  RGBA.prototype.withRGB_za3lpa$ = function (rgb) {
    return RGBA$Companion_getInstance().invoke_vux9f0$(rgb, this.a);
  };
  RGBA.prototype.toInt = function () {
    return this.rgba;
  };
  Object.defineProperty(RGBA.prototype, 'hexString', {
    get: function () {
      return format('#%02x%02x%02x%02x', [this.r, this.g, this.b, this.a]);
    }
  });
  Object.defineProperty(RGBA.prototype, 'htmlColor', {
    get: function () {
      return 'rgba(' + this.r + ', ' + this.g + ', ' + this.b + ', ' + this.af + ')';
    }
  });
  Object.defineProperty(RGBA.prototype, 'htmlStringSimple', {
    get: function () {
      return format('#%02x%02x%02x', [this.r, this.g, this.b]);
    }
  });
  RGBA.prototype.toString = function () {
    return this.hexString;
  };
  RGBA.prototype.plus_md34sx$ = function (other) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(this.r + other.r | 0, this.g + other.g | 0, this.b + other.b | 0, this.a + other.a | 0);
  };
  RGBA.prototype.minus_md34sx$ = function (other) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(this.r - other.r | 0, this.g - other.g | 0, this.b - other.b | 0, this.a - other.a | 0);
  };
  RGBA.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.rgba, other.rgba);
  };
  RGBA.prototype.hashCode = function () {
    return this.rgba;
  };
  RGBA.prototype.equals = function (other) {
    return Kotlin.isType(other, RGBA) ? other.rgba === this.rgba : false;
  };
  RGBA.prototype.equals_md34sx$ = function (other) {
    return other.rgba === this.rgba;
  };
  function RGBA$Companion() {
    RGBA$Companion_instance = this;
    ColorFormat32.call(this);
  }
  RGBA$Companion.prototype.invoke_tjonv8$ = function (r, g, b, a) {
    return new RGBA((r & 255) << 0 | (g & 255) << 8 | (b & 255) << 16 | (a & 255) << 24);
  };
  RGBA$Companion.prototype.invoke_vux9f0$ = function (rgb, a) {
    return new RGBA(rgb & 16777215 | a << 24);
  };
  RGBA$Companion.prototype.getR_za3lpa$ = function (v) {
    return this.getFastR_za3lpa$(v);
  };
  RGBA$Companion.prototype.getG_za3lpa$ = function (v) {
    return this.getFastG_za3lpa$(v);
  };
  RGBA$Companion.prototype.getB_za3lpa$ = function (v) {
    return this.getFastB_za3lpa$(v);
  };
  RGBA$Companion.prototype.getA_za3lpa$ = function (v) {
    return this.getFastA_za3lpa$(v);
  };
  RGBA$Companion.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(r) << 0 | ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(g) << 8 | ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(b) << 16 | ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(a) << 24;
  };
  RGBA$Companion.prototype.getFastR_za3lpa$ = function (v) {
    return v >>> 0 & 255;
  };
  RGBA$Companion.prototype.getFastG_za3lpa$ = function (v) {
    return v >>> 8 & 255;
  };
  RGBA$Companion.prototype.getFastB_za3lpa$ = function (v) {
    return v >>> 16 & 255;
  };
  RGBA$Companion.prototype.getFastA_za3lpa$ = function (v) {
    return v >>> 24 & 255;
  };
  RGBA$Companion.prototype.getFastRf_za3lpa$ = function (v) {
    return (v >>> 0 & 255) / 255;
  };
  RGBA$Companion.prototype.getFastGf_za3lpa$ = function (v) {
    return (v >>> 8 & 255) / 255;
  };
  RGBA$Companion.prototype.getFastBf_za3lpa$ = function (v) {
    return (v >>> 16 & 255) / 255;
  };
  RGBA$Companion.prototype.getFastAf_za3lpa$ = function (v) {
    return (v >>> 24 & 255) / 255;
  };
  RGBA$Companion.prototype.getFastRd_za3lpa$ = function (v) {
    return (v >>> 0 & 255) / 255;
  };
  RGBA$Companion.prototype.getFastGd_za3lpa$ = function (v) {
    return (v >>> 8 & 255) / 255;
  };
  RGBA$Companion.prototype.getFastBd_za3lpa$ = function (v) {
    return (v >>> 16 & 255) / 255;
  };
  RGBA$Companion.prototype.getFastAd_za3lpa$ = function (v) {
    return (v >>> 24 & 255) / 255;
  };
  RGBA$Companion.prototype.getRGB_za3lpa$ = function (v) {
    return v & 16777215;
  };
  RGBA$Companion.prototype.multipliedByAlpha_md34sx$ = function (v) {
    return this.premultiplyFast_md34sx$(v);
  };
  RGBA$Companion.prototype.toHexString_za3lpa$ = function (v) {
    return format('#%02x%02x%02x%02x', [this.getFastR_za3lpa$(v), this.getFastG_za3lpa$(v), this.getFastB_za3lpa$(v), this.getFastA_za3lpa$(v)]);
  };
  RGBA$Companion.prototype.toHtmlColor_za3lpa$ = function (v) {
    return 'rgba(' + this.getFastR_za3lpa$(v) + ', ' + this.getFastG_za3lpa$(v) + ', ' + this.getFastB_za3lpa$(v) + ', ' + this.getFastAf_za3lpa$(v) + ')';
  };
  RGBA$Companion.prototype.premultiply_md34sx$ = function (v) {
    return this.premultiplyFast_md34sx$(v);
  };
  RGBA$Companion.prototype.premultiplyAccurate_za3lpa$ = function (v) {
    var a1 = this.getFastA_za3lpa$(v);
    var af = a1 / 255.0;
    return this.packFast_tjonv8$(numberToInt(this.getFastR_za3lpa$(v) * af), numberToInt(this.getFastG_za3lpa$(v) * af), numberToInt(this.getFastB_za3lpa$(v) * af), a1);
  };
  RGBA$Companion.prototype.premultiplyFast_md34sx$ = function (v) {
    var A = v.a + 1 | 0;
    var RB = Kotlin.imul(v.rgba & 16711935, A) >>> 8 & 16711935;
    var G = Kotlin.imul(v.rgba & 65280, A) >>> 8 & 65280;
    return new RGBA(v.rgba & -16777216 | RB | G);
  };
  RGBA$Companion.prototype.mutliplyByAlpha_5wr77w$ = function (v, alpha) {
    return RGBA$Companion_getInstance().pack_tjonv8$(this.getFastR_za3lpa$(v), this.getFastG_za3lpa$(v), this.getFastB_za3lpa$(v), numberToInt(this.getFastA_za3lpa$(v) * alpha));
  };
  RGBA$Companion.prototype.depremultiply_md34sx$ = function (v) {
    return this.depremultiplyFast_md34sx$(v);
  };
  RGBA$Companion.prototype.depremultiplyAccurate_md34sx$ = function (v) {
    var alpha = v.ad;
    if (alpha === 0.0) {
      return Colors_getInstance().TRANSPARENT_WHITE;
    }
     else {
      var ialpha = 1.0 / alpha;
      return new RGBA(this.pack_tjonv8$(numberToInt(v.r * ialpha), numberToInt(v.g * ialpha), numberToInt(v.b * ialpha), v.a));
    }
  };
  RGBA$Companion.prototype.clampf1_yrwdxr$ = function ($receiver) {
    return $receiver > 1.0 ? 1.0 : $receiver;
  };
  RGBA$Companion.prototype.clamp0_255_s8ev3n$ = function ($receiver) {
    return clamp($receiver, 0, 255);
  };
  RGBA$Companion.prototype.clamp255_s8ev3n$ = function ($receiver) {
    return $receiver > 255 ? 255 : $receiver;
  };
  RGBA$Companion.prototype.depremultiplyFast_md34sx$ = function (v) {
    var A = v.a;
    var alpha = A / 255.0;
    if (alpha === 0.0)
      return new RGBA(0);
    var ialpha = 1.0 / alpha;
    var R = this.clamp255_s8ev3n$(numberToInt(v.r * ialpha));
    var G = this.clamp255_s8ev3n$(numberToInt(v.g * ialpha));
    var B = this.clamp255_s8ev3n$(numberToInt(v.b * ialpha));
    return RGBA$Companion_getInstance().invoke_tjonv8$(R, G, B, A);
  };
  RGBA$Companion.prototype.depremultiplyFast_melyw8$ = function (data, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = data.size;
    for (var n = start; n < end; n++)
      data.set_vlvk8p$(n, this.depremultiplyFast_md34sx$(data.get_za3lpa$(n)));
    return data;
  };
  RGBA$Companion.prototype.premultiplyFast_melyw8$ = function (data, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = data.size;
    for (var n = start; n < end; n++)
      data.set_vlvk8p$(n, this.premultiplyFast_md34sx$(data.get_za3lpa$(n)));
    return data;
  };
  RGBA$Companion.prototype.depremultiplyFastOld_za3lpa$ = function (v) {
    var A = v >>> 24;
    if (A === 0)
      return 0;
    var R = this.clamp0_255_s8ev3n$(((v >>> 0 & 255) * 255 | 0) / A | 0);
    var G = this.clamp0_255_s8ev3n$(((v >>> 8 & 255) * 255 | 0) / A | 0);
    var B = this.clamp0_255_s8ev3n$(((v >>> 16 & 255) * 255 | 0) / A | 0);
    return this.packFast_tjonv8$(R, G, B, A);
  };
  RGBA$Companion.prototype.depremultiplyFaster_za3lpa$ = function (v) {
    var A = v >>> 24;
    var A1 = A + 1 | 0;
    var R = (((v >>> 0 & 255) << 8) / A1 | 0) & 255;
    var G = (((v >>> 8 & 255) << 8) / A1 | 0) & 255;
    var B = (((v >>> 16 & 255) << 8) / A1 | 0) & 255;
    return this.packFast_tjonv8$(R, G, B, A);
  };
  RGBA$Companion.prototype.depremultiplyFastest_za3lpa$ = function (v) {
    var A = (v >>> 24) + 1 | 0;
    var R = (((v & 255) << 8) / A | 0) & 240;
    var G = (((v & 65280) << 8) / A | 0) & 65280;
    var B = (((v & 16711680) << 8) / A | 0) & 16711680;
    return v & -16777216 | B | G | R;
  };
  RGBA$Companion.prototype.packFast_tjonv8$ = function (r, g, b, a) {
    return r << 0 | g << 8 | b << 16 | a << 24;
  };
  RGBA$Companion.prototype.packfFast_7b5o5w$ = function (r, g, b, a) {
    return numberToInt(r * 255) << 0 | numberToInt(g * 255) << 8 | numberToInt(b * 255) << 16 | numberToInt(a * 255) << 24;
  };
  RGBA$Companion.prototype.packRGB_A_vux9f0$ = function (rgb, a) {
    return rgb & 16777215 | a << 24;
  };
  RGBA$Companion.prototype.blendComponent_224j3y$ = function (c1, c2, factor) {
    return numberToInt(c1 * (1.0 - factor) + c2 * factor) & 255;
  };
  RGBA$Companion.prototype.blendRGB_qt1dr2$ = function (c1, c2, factor256) {
    var f1 = 256 - factor256 | 0;
    return (Kotlin.imul(c1 & 16711935, f1) + Kotlin.imul(c2 & 16711935, factor256) & -16711936 | Kotlin.imul(c1 & 65280, f1) + Kotlin.imul(c2 & 65280, factor256) & 16711680) >>> 8;
  };
  RGBA$Companion.prototype.blend_qt1dr2$ = function (c1, c2, factor) {
    return this.blendRGB_qt1dr2$(c1, c2, factor);
  };
  RGBA$Companion.prototype.blend_224j3y$ = function (c1, c2, factor) {
    return this.blendRGB_224j3y$(c1, c2, factor);
  };
  RGBA$Companion.prototype.blendRGB_224j3y$ = function (c1, c2, factor) {
    return this.blendRGB_qt1dr2$(c1, c2, numberToInt(factor * 256));
  };
  RGBA$Companion.prototype.blendRGBAInt_224j3y$ = function (c1, c2, factor) {
    return this.blendRGBA_utyrs$(new RGBA(c1), new RGBA(c2), factor).rgba;
  };
  RGBA$Companion.prototype.blendRGBA_utyrs$ = function (c1, c2, factor) {
    var RGB = this.blendRGB_qt1dr2$(c1.rgba & 16777215, c2.rgba & 16777215, numberToInt(factor * 256));
    var A = this.blendComponent_224j3y$(c1.a, c2.a, factor);
    return new RGBA(this.packRGB_A_vux9f0$(RGB, A));
  };
  RGBA$Companion.prototype.rgbaToBgra_za3lpa$ = function (v) {
    return v << 16 & 16711680 | v >> 16 & 255 | v & -16711936;
  };
  RGBA$Companion.prototype.d2i_0 = function (v) {
    return numberToInt(ColorFormat$Companion_getInstance().clampf01_mx4ult$(v) * 255);
  };
  RGBA$Companion.prototype.f2i_0 = function (v) {
    return numberToInt(ColorFormat$Companion_getInstance().clampf01_mx4ult$(v) * 255);
  };
  RGBA$Companion.prototype.packf_6y0v78$ = function (r, g, b, a) {
    return this.packFast_tjonv8$(this.d2i_0(r), this.d2i_0(g), this.d2i_0(b), this.d2i_0(a));
  };
  RGBA$Companion.prototype.packf_7b5o5w$ = function (r, g, b, a) {
    return this.packFast_tjonv8$(this.f2i_0(r), this.f2i_0(g), this.f2i_0(b), this.f2i_0(a));
  };
  RGBA$Companion.prototype.packf_24o109$ = function (rgb, a) {
    return this.packRGB_A_vux9f0$(rgb, this.f2i_0(a));
  };
  RGBA$Companion.prototype.mix_jh0t86$ = function (dst, src) {
    var tmp$;
    var srcA = src.a;
    switch (srcA) {
      case 0:
        tmp$ = dst;
        break;
      case 255:
        tmp$ = src;
        break;
      default:tmp$ = new RGBA(RGBA$Companion_getInstance().packRGB_A_vux9f0$(this.blendRGB_qt1dr2$(dst.rgba, src.rgba, srcA + 1 | 0), ColorFormat$Companion_getInstance().clampFF_za3lpa$(RGBA$Companion_getInstance().getFastA_za3lpa$(dst.rgba) + srcA | 0)));
        break;
    }
    return tmp$;
  };
  RGBA$Companion.prototype.interpolate_utyrs$ = function (src, dst, ratio) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(interpolate_1(src.r, dst.r, ratio), interpolate_1(src.g, dst.g, ratio), interpolate_1(src.b, dst.b, ratio), interpolate_1(src.a, dst.a, ratio));
  };
  RGBA$Companion.prototype.multiply_jh0t86$ = function (c1, c2) {
    return RGBA$Companion_getInstance().invoke_tjonv8$(ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(Kotlin.imul(c1.r, c2.r) / 255 | 0), ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(Kotlin.imul(c1.g, c2.g) / 255 | 0), ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(Kotlin.imul(c1.b, c2.b) / 255 | 0), ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(Kotlin.imul(c1.a, c2.a) / 255 | 0));
  };
  RGBA$Companion.prototype.blendRGBAFastAlreadyPremultiplied_05_vux9f0$ = function (c1, c2) {
    var RB = (c1 & 16711935) + (c2 & 16711935) >>> 1 & 16711935;
    var G = (c1 & 65280) + (c2 & 65280) >>> 1 & 65280;
    var A = (c1 >>> 24) + (c2 >>> 24) >>> 1 & 255;
    return A << 24 | RB | G;
  };
  RGBA$Companion.prototype.blendRGBAFastAlreadyPremultiplied_05_tjonv8$ = function (c1, c2, c3, c4) {
    var RB = (c1 & 16711935) + (c2 & 16711935) + (c3 & 16711935) + (c4 & 16711935) >>> 2 & 16711935;
    var G = (c1 & 65280) + (c2 & 65280) + (c3 & 65280) + (c4 & 65280) >>> 2 & 65280;
    var A = (c1 >>> 24) + (c2 >>> 24) + (c3 >>> 24) + (c4 >>> 24) >>> 2 & 255;
    return A << 24 | RB | G;
  };
  RGBA$Companion.prototype.toString_za3lpa$ = function (c) {
    return 'RGBA(' + this.getR_za3lpa$(c) + ',' + this.getG_za3lpa$(c) + ',' + this.getB_za3lpa$(c) + ',' + this.getAf_za3lpa$(c) + ')';
  };
  RGBA$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [ColorFormat32]
  };
  var RGBA$Companion_instance = null;
  function RGBA$Companion_getInstance() {
    if (RGBA$Companion_instance === null) {
      new RGBA$Companion();
    }
    return RGBA$Companion_instance;
  }
  RGBA.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBA',
    interfaces: [Comparable]
  };
  function RgbaArray(array) {
    RgbaArray$Companion_getInstance();
    this.array = array;
  }
  RgbaArray.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return new SubListGeneric(this, fromIndex, toIndex);
  };
  RgbaArray.prototype.contains_11rb$ = function (element) {
    return contains(this.array, element.rgba);
  };
  RgbaArray.prototype.containsAll_brywnq$ = function (elements) {
    var all$result;
    all$break: do {
      var tmp$;
      if (Kotlin.isType(elements, Collection) && elements.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$ = elements.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        if (!this.contains_11rb$(element)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  RgbaArray.prototype.indexOf_11rb$ = function (element) {
    return indexOf(this.array, element.rgba);
  };
  RgbaArray.prototype.lastIndexOf_11rb$ = function (element) {
    return lastIndexOf(this.array, element.rgba);
  };
  RgbaArray.prototype.isEmpty = function () {
    return this.array.length === 0;
  };
  RgbaArray.prototype.iterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  RgbaArray.prototype.listIterator = function () {
    return this.listIterator_za3lpa$(0);
  };
  RgbaArray.prototype.listIterator_za3lpa$ = function (index) {
    return new GenericListIterator(this, index);
  };
  function RgbaArray$Companion() {
    RgbaArray$Companion_instance = this;
  }
  RgbaArray$Companion.prototype.invoke_za3lpa$ = function (size) {
    return new RgbaArray(new Int32Array(size));
  };
  RgbaArray$Companion.prototype.invoke_bvgci3$ = function (size, callback) {
    var $receiver = new RgbaArray(new Int32Array(size));
    for (var n = 0; n < size; n++)
      $receiver.set_vlvk8p$(n, callback(n));
    return $receiver;
  };
  RgbaArray$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RgbaArray$Companion_instance = null;
  function RgbaArray$Companion_getInstance() {
    if (RgbaArray$Companion_instance === null) {
      new RgbaArray$Companion();
    }
    return RgbaArray$Companion_instance;
  }
  Object.defineProperty(RgbaArray.prototype, 'size', {
    get: function () {
      return this.array.length;
    }
  });
  RgbaArray.prototype.get_za3lpa$ = function (index) {
    return new RGBA(this.array[index]);
  };
  RgbaArray.prototype.set_vlvk8p$ = function (index, color) {
    this.array[index] = color.rgba;
  };
  RgbaArray.prototype.fill_eb600h$ = function (value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = this.size;
    var $receiver = this.array;
    var value_0 = value.rgba;
    $receiver.fill(value_0, start, end);
  };
  RgbaArray.prototype.toString = function () {
    return 'RgbaArray(' + this.size + ')';
  };
  RgbaArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RgbaArray',
    interfaces: [List]
  };
  function toRgbaArray($receiver) {
    var array = new Int32Array($receiver.size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = $receiver.get_za3lpa$(i).rgba;
    }
    return new RgbaArray(array);
  }
  function arraycopy_2(src, srcPos, dst, dstPos, size) {
    arraycopy_0(src.array, srcPos, dst.array, dstPos, size);
  }
  function getR($receiver, v) {
    return v.r;
  }
  function getG($receiver, v) {
    return v.g;
  }
  function getB($receiver, v) {
    return v.b;
  }
  function getA($receiver, v) {
    return v.a;
  }
  function toHexString($receiver, v) {
    return v.hexString;
  }
  function toHtmlColor($receiver, v) {
    return v.htmlColor;
  }
  function depremultiplyFaster($receiver, v) {
    return new RGBA(RGBA$Companion_getInstance().depremultiplyFaster_za3lpa$(v.toInt()));
  }
  function depremultiplyFastest($receiver, v) {
    return new RGBA(RGBA$Companion_getInstance().depremultiplyFastest_za3lpa$(v.toInt()));
  }
  function toRgbaArray$lambda(this$toRgbaArray) {
    return function (it) {
      return this$toRgbaArray[it];
    };
  }
  function toRgbaArray_0($receiver) {
    return RgbaArray$Companion_getInstance().invoke_bvgci3$($receiver.length, toRgbaArray$lambda($receiver));
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
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
    RGBAd.call($this, RGBA$Companion_getInstance().getRd_za3lpa$(c), RGBA$Companion_getInstance().getGd_za3lpa$(c), RGBA$Companion_getInstance().getBd_za3lpa$(c), RGBA$Companion_getInstance().getAd_za3lpa$(c));
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
        this._rgba_0 = RGBA$Companion_getInstance().packfFast_7b5o5w$(this._r_0, this._g_0, this._b_0, this._a_0);
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
    return RGBA$Companion_getInstance().packFast_tjonv8$(numberToInt(this.r * 255) & 255, numberToInt(this.g * 255) & 255, numberToInt(this.b * 255) & 255, numberToInt(this.a * 255) & 255);
  };
  RGBAf.prototype.setToIdentity = function () {
    this.setTo_7b5o5w$(1.0, 1.0, 1.0, 1.0);
  };
  RGBAf.prototype.toString = function () {
    return 'RGBAf(' + get_niceStr_0(this.r) + ', ' + get_niceStr_0(this.g) + ', ' + get_niceStr_0(this.b) + ', ' + get_niceStr_0(this.a) + ')';
  };
  RGBAf.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RGBAf',
    interfaces: []
  };
  var RGBAf_0 = defineInlineFunction('korim-js.com.soywiz.korim.color.RGBAf_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var RGBAf_init = _.com.soywiz.korim.color.RGBAf;
    return function (r, g, b, a) {
      return new RGBAf_init(numberToDouble(r), numberToDouble(g), numberToDouble(b), numberToDouble(a));
    };
  }));
  function YCbCr() {
    YCbCr_instance = this;
    ColorFormat32.call(this);
  }
  YCbCr.prototype.getY_za3lpa$ = function (v) {
    return extract8(v, 0);
  };
  YCbCr.prototype.getCb_za3lpa$ = function (v) {
    return extract8(v, 8);
  };
  YCbCr.prototype.getCr_za3lpa$ = function (v) {
    return extract8(v, 16);
  };
  YCbCr.prototype.getR_za3lpa$ = function (v) {
    return this.getY_za3lpa$(v);
  };
  YCbCr.prototype.getG_za3lpa$ = function (v) {
    return this.getCb_za3lpa$(v);
  };
  YCbCr.prototype.getB_za3lpa$ = function (v) {
    return this.getCr_za3lpa$(v);
  };
  YCbCr.prototype.getA_za3lpa$ = function (v) {
    return extract8(v, 24);
  };
  YCbCr.prototype.pack_tjonv8$ = function (r, g, b, a) {
    return RGBA$Companion_getInstance().pack_tjonv8$(r, g, b, a);
  };
  YCbCr.prototype.getY_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(0 + 0.299 * r + 0.587 * g + 0.114 * b));
  };
  YCbCr.prototype.getCb_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(128 - 0.168736 * r - 0.331264 * g + 0.5 * b));
  };
  YCbCr.prototype.getCr_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(128 + 0.5 * r - 0.418688 * g - 0.081312 * b));
  };
  YCbCr.prototype.getR_qt1dr2$ = function (y, cb, cr) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y + 1.402 * (cr - 128 | 0)));
  };
  YCbCr.prototype.getG_qt1dr2$ = function (y, cb, cr) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y - 0.34414 * (cb - 128 | 0) - 0.71414 * (cr - 128 | 0)));
  };
  YCbCr.prototype.getB_qt1dr2$ = function (y, cb, cr) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y + 1.772 * (cb - 128 | 0)));
  };
  YCbCr.prototype.rgbaToYCbCr_md34sx$ = function (c) {
    var R = c.r;
    var G = c.g;
    var B = c.b;
    var A = c.a;
    var Y = this.getY_qt1dr2$(R, G, B);
    var Cb = this.getCb_qt1dr2$(R, G, B);
    var Cr = this.getCr_qt1dr2$(R, G, B);
    return RGBA$Companion_getInstance().pack_tjonv8$(Y, Cb, Cr, A);
  };
  YCbCr.prototype.yCbCrToRgba_za3lpa$ = function (c) {
    var Y = RGBA$Companion_getInstance().getR_za3lpa$(c);
    var Cb = RGBA$Companion_getInstance().getG_za3lpa$(c);
    var Cr = RGBA$Companion_getInstance().getB_za3lpa$(c);
    var A = RGBA$Companion_getInstance().getA_za3lpa$(c);
    var R = this.getR_qt1dr2$(Y, Cb, Cr);
    var G = this.getG_qt1dr2$(Y, Cb, Cr);
    var B = this.getB_qt1dr2$(Y, Cb, Cr);
    return RGBA$Companion_getInstance().invoke_tjonv8$(R, G, B, A);
  };
  YCbCr.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'YCbCr',
    interfaces: [ColorFormat32]
  };
  var YCbCr_instance = null;
  function YCbCr_getInstance() {
    if (YCbCr_instance === null) {
      new YCbCr();
    }
    return YCbCr_instance;
  }
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
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(0.299 * r + 0.587 * g + 0.114 * b));
  };
  YUVA.prototype.getU_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(0.492 * Kotlin.imul(b, this.getY_qt1dr2$(r, g, b))));
  };
  YUVA.prototype.getV_qt1dr2$ = function (r, g, b) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(0.877 * Kotlin.imul(r, this.getY_qt1dr2$(r, g, b))));
  };
  YUVA.prototype.getR_qt1dr2$ = function (y, u, v) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y + 1.14 * v));
  };
  YUVA.prototype.getG_qt1dr2$ = function (y, u, v) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y - 0.395 * u - 0.581 * v));
  };
  YUVA.prototype.getB_qt1dr2$ = function (y, u, v) {
    return ColorFormat$Companion_getInstance().clamp0_FF_za3lpa$(numberToInt(y + 2.033 * u));
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
      out[tmp$ = opos, opos = tmp$ + 1 | 0, tmp$] = RGBA$Companion_getInstance().packFast_tjonv8$(r, g, b, 255);
      ipos = ipos + 1 | 0;
    }
  };
  YUVA.$metadata$ = {
    kind: Kind_OBJECT,
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
    font.drawText_y4cp3m$($receiver, str, x, y, color);
  }
  function BitmapFont(atlas, size, lineHeight, glyphInfos) {
    this.atlas = atlas;
    this.size = size;
    this.lineHeight = lineHeight;
    this.glyphInfos = glyphInfos;
    var $receiver = this.glyphInfos;
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.id, new BitmapFont$Glyph(slice(this.atlas, item.bounds), item)));
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
  BitmapFont.prototype.drawText_y4cp3m$ = function (bmp, str, x, y, color) {
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    var $receiver = get_indices(chars);
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(chars.charCodeAt(item) | 0);
    }
    return this.generate_i84517$(fontName, fontSize, toIntArray(destination));
  };
  var TimedResult_init = $module$klock_js.com.soywiz.klock.TimedResult;
  var klock = $module$klock_js.com.soywiz.klock;
  var TimeSpan = $module$klock_js.com.soywiz.klock.TimeSpan;
  BitmapFontGenerator.prototype.generate_i84517$ = function (fontName, fontSize, chars) {
    println('BitmapFontGenerator.generate(' + fontName + ', ' + fontSize + ', ' + chars + ')...');
    var result = {v: null};
    var start = klock.Klock.currentTimeMillisDouble();
    var bnictx = this.bni.getContext2d_6taknv$();
    bnictx.font = new Context2d$Font(fontName, fontSize);
    var bitmapHeight = numberToInt(bnictx.getTextBounds_jznmvy$('a').bounds.height);
    var destination = ArrayList_init_1(chars.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== chars.length; ++tmp$) {
      var item = chars[tmp$];
      destination.add_11rb$(numberToInt(bnictx.getTextBounds_jznmvy$(String.fromCharCode(toChar(item))).bounds.width));
    }
    var widths = destination;
    var destination_0 = ArrayList_init_1(collectionSizeOrDefault(widths, 10));
    var tmp$_0;
    tmp$_0 = widths.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      destination_0.add_11rb$(item_0 + 2 | 0);
    }
    var widthsSum = sum(destination_0);
    var ni = NativeImage_0(widthsSum, bitmapHeight);
    var g = ni.getContext2d_6taknv$();
    g.fillStyle = g.createColor_md34sx$(Colors_getInstance().WHITE);
    g.font = new Context2d$Font(fontName, fontSize);
    g.horizontalAlign = Context2d$HorizontalAlign$LEFT_getInstance();
    g.verticalAlign = Context2d$VerticalAlign$TOP_getInstance();
    var glyphs = ArrayList_init_0();
    var x = 0;
    var itemp = new Int32Array(1);
    for (var index = 0; index !== chars.length; ++index) {
      var char = chars[index];
      var width = widths.get_za3lpa$(index);
      itemp[0] = char;
      g.renderText_a7koit$(String_fromIntArray(itemp, 0, 1), numberToDouble(x), numberToDouble(0.0), true);
      var element = new BitmapFont$GlyphInfo(char, RectangleInt_init(x, 0, width, ni.height), width);
      glyphs.add_11rb$(element);
      x = x + (width + 2) | 0;
    }
    result.v = new BitmapFont(ni.toBMP32(), fontSize, fontSize, glyphs);
    var end = klock.Klock.currentTimeMillisDouble();
    var ms = numberToInt(end - start);
    var result_0 = new TimedResult_init(result.v == null ? throwUPAE('result') : result.v, TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(ms)));
    println('   --> generated in ' + result_0.time);
    return result_0.result;
  };
  BitmapFontGenerator.$metadata$ = {
    kind: Kind_OBJECT,
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
  function TtfFont(s) {
    TtfFont$Companion_getInstance();
    this.s = s;
    this.tablesByName = LinkedHashMap_init();
    this.numGlyphs = 0;
    this.maxPoints = 0;
    this.maxContours = 0;
    this.maxCompositePoints = 0;
    this.maxCompositeContours = 0;
    this.maxZones = 0;
    this.maxTwilightPoints = 0;
    this.maxStorage = 0;
    this.maxFunctionDefs = 0;
    this.maxInstructionDefs = 0;
    this.maxStackElements = 0;
    this.maxSizeOfInstructions = 0;
    this.maxComponentElements = 0;
    this.maxComponentDepth = 0;
    this.hheaVersion = new TtfFont$Fixed(0, 0);
    this.ascender = 0;
    this.descender = 0;
    this.lineGap = 0;
    this.advanceWidthMax = 0;
    this.minLeftSideBearing = 0;
    this.minRightSideBearing = 0;
    this.xMaxExtent = 0;
    this.caretSlopeRise = 0;
    this.caretSlopeRun = 0;
    this.caretOffset = 0;
    this.metricDataFormat = 0;
    this.numberOfHMetrics = 0;
    this.locs = new Int32Array(0);
    this.fontRev = new TtfFont$Fixed(0, 0);
    this.unitsPerEm = 128;
    this.xMin = 0;
    this.yMin = 0;
    this.xMax = 0;
    this.yMax = 0;
    this.macStyle = 0;
    this.lowestRecPPEM = 0;
    this.fontDirectionHint = 0;
    this.indexToLocFormat = 0;
    this.glyphDataFormat = 0;
    this.horMetrics = emptyList();
    this.characterMaps = LinkedHashMap_init();
    this.readHeaderTables();
    this.readHead();
    this.readMaxp();
    this.readHhea();
    this.readNames();
    this.readLoca();
    this.readCmap();
    this.readHmtx();
  }
  function TtfFont$Table(id, checksum, offset, length) {
    this.id = id;
    this.checksum = checksum;
    this.offset = offset;
    this.length = length;
    this.s_7sn1gr$_0 = this.s_7sn1gr$_0;
  }
  Object.defineProperty(TtfFont$Table.prototype, 's', {
    get: function () {
      if (this.s_7sn1gr$_0 == null)
        return throwUPAE('s');
      return this.s_7sn1gr$_0;
    },
    set: function (s) {
      this.s_7sn1gr$_0 = s;
    }
  });
  TtfFont$Table.prototype.open = function () {
    return this.s.clone();
  };
  TtfFont$Table.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Table',
    interfaces: []
  };
  TtfFont$Table.prototype.component1 = function () {
    return this.id;
  };
  TtfFont$Table.prototype.component2 = function () {
    return this.checksum;
  };
  TtfFont$Table.prototype.component3 = function () {
    return this.offset;
  };
  TtfFont$Table.prototype.component4 = function () {
    return this.length;
  };
  TtfFont$Table.prototype.copy_wfrsr4$ = function (id, checksum, offset, length) {
    return new TtfFont$Table(id === void 0 ? this.id : id, checksum === void 0 ? this.checksum : checksum, offset === void 0 ? this.offset : offset, length === void 0 ? this.length : length);
  };
  TtfFont$Table.prototype.toString = function () {
    return 'Table(id=' + Kotlin.toString(this.id) + (', checksum=' + Kotlin.toString(this.checksum)) + (', offset=' + Kotlin.toString(this.offset)) + (', length=' + Kotlin.toString(this.length)) + ')';
  };
  TtfFont$Table.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    result = result * 31 + Kotlin.hashCode(this.checksum) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    result = result * 31 + Kotlin.hashCode(this.length) | 0;
    return result;
  };
  TtfFont$Table.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.id, other.id) && Kotlin.equals(this.checksum, other.checksum) && Kotlin.equals(this.offset, other.offset) && Kotlin.equals(this.length, other.length)))));
  };
  function TtfFont$NameIds(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TtfFont$NameIds_initFields() {
    TtfFont$NameIds_initFields = function () {
    };
    TtfFont$NameIds$COPYRIGHT_instance = new TtfFont$NameIds('COPYRIGHT', 0, 0);
    TtfFont$NameIds$FONT_FAMILY_NAME_instance = new TtfFont$NameIds('FONT_FAMILY_NAME', 1, 1);
    TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance = new TtfFont$NameIds('FONT_SUBFAMILY_NAME', 2, 2);
    TtfFont$NameIds$UNIQUE_FONT_ID_instance = new TtfFont$NameIds('UNIQUE_FONT_ID', 3, 3);
    TtfFont$NameIds$FULL_FONT_NAME_instance = new TtfFont$NameIds('FULL_FONT_NAME', 4, 4);
    TtfFont$NameIds$VERSION_STRING_instance = new TtfFont$NameIds('VERSION_STRING', 5, 5);
    TtfFont$NameIds$POSTSCRIPT_NAME_instance = new TtfFont$NameIds('POSTSCRIPT_NAME', 6, 6);
    TtfFont$NameIds$TRADEMARK_instance = new TtfFont$NameIds('TRADEMARK', 7, 7);
    TtfFont$NameIds$MANUFACTURER_instance = new TtfFont$NameIds('MANUFACTURER', 8, 8);
    TtfFont$NameIds$DESIGNER_instance = new TtfFont$NameIds('DESIGNER', 9, 9);
    TtfFont$NameIds$DESCRIPTION_instance = new TtfFont$NameIds('DESCRIPTION', 10, 10);
    TtfFont$NameIds$URL_VENDOR_instance = new TtfFont$NameIds('URL_VENDOR', 11, 11);
    TtfFont$NameIds$URL_DESIGNER_instance = new TtfFont$NameIds('URL_DESIGNER', 12, 12);
    TtfFont$NameIds$LICENSE_DESCRIPTION_instance = new TtfFont$NameIds('LICENSE_DESCRIPTION', 13, 13);
    TtfFont$NameIds$LICENSE_URL_instance = new TtfFont$NameIds('LICENSE_URL', 14, 14);
    TtfFont$NameIds$RESERVED_15_instance = new TtfFont$NameIds('RESERVED_15', 15, 15);
    TtfFont$NameIds$TYPO_FAMILY_NAME_instance = new TtfFont$NameIds('TYPO_FAMILY_NAME', 16, 16);
    TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance = new TtfFont$NameIds('TYPO_SUBFAMILY_NAME', 17, 17);
    TtfFont$NameIds$COMPATIBLE_FULL_instance = new TtfFont$NameIds('COMPATIBLE_FULL', 18, 18);
    TtfFont$NameIds$SAMPLE_TEXT_instance = new TtfFont$NameIds('SAMPLE_TEXT', 19, 19);
    TtfFont$NameIds$POSTSCRIPT_CID_instance = new TtfFont$NameIds('POSTSCRIPT_CID', 20, 20);
    TtfFont$NameIds$WWS_FAMILY_NAME_instance = new TtfFont$NameIds('WWS_FAMILY_NAME', 21, 21);
    TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance = new TtfFont$NameIds('WWS_SUBFAMILY_NAME', 22, 22);
    TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance = new TtfFont$NameIds('LIGHT_BACKGROUND_PALETTE', 23, 23);
    TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance = new TtfFont$NameIds('DARK_BACKGROUND_PALETTE', 24, 24);
    TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance = new TtfFont$NameIds('VARIATIONS_POSTSCRIPT_NAME_PREFIX', 25, 25);
    TtfFont$NameIds$Companion_getInstance();
  }
  var TtfFont$NameIds$COPYRIGHT_instance;
  function TtfFont$NameIds$COPYRIGHT_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$COPYRIGHT_instance;
  }
  var TtfFont$NameIds$FONT_FAMILY_NAME_instance;
  function TtfFont$NameIds$FONT_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FONT_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FONT_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$UNIQUE_FONT_ID_instance;
  function TtfFont$NameIds$UNIQUE_FONT_ID_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$UNIQUE_FONT_ID_instance;
  }
  var TtfFont$NameIds$FULL_FONT_NAME_instance;
  function TtfFont$NameIds$FULL_FONT_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$FULL_FONT_NAME_instance;
  }
  var TtfFont$NameIds$VERSION_STRING_instance;
  function TtfFont$NameIds$VERSION_STRING_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$VERSION_STRING_instance;
  }
  var TtfFont$NameIds$POSTSCRIPT_NAME_instance;
  function TtfFont$NameIds$POSTSCRIPT_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$POSTSCRIPT_NAME_instance;
  }
  var TtfFont$NameIds$TRADEMARK_instance;
  function TtfFont$NameIds$TRADEMARK_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TRADEMARK_instance;
  }
  var TtfFont$NameIds$MANUFACTURER_instance;
  function TtfFont$NameIds$MANUFACTURER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$MANUFACTURER_instance;
  }
  var TtfFont$NameIds$DESIGNER_instance;
  function TtfFont$NameIds$DESIGNER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DESIGNER_instance;
  }
  var TtfFont$NameIds$DESCRIPTION_instance;
  function TtfFont$NameIds$DESCRIPTION_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DESCRIPTION_instance;
  }
  var TtfFont$NameIds$URL_VENDOR_instance;
  function TtfFont$NameIds$URL_VENDOR_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$URL_VENDOR_instance;
  }
  var TtfFont$NameIds$URL_DESIGNER_instance;
  function TtfFont$NameIds$URL_DESIGNER_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$URL_DESIGNER_instance;
  }
  var TtfFont$NameIds$LICENSE_DESCRIPTION_instance;
  function TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LICENSE_DESCRIPTION_instance;
  }
  var TtfFont$NameIds$LICENSE_URL_instance;
  function TtfFont$NameIds$LICENSE_URL_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LICENSE_URL_instance;
  }
  var TtfFont$NameIds$RESERVED_15_instance;
  function TtfFont$NameIds$RESERVED_15_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$RESERVED_15_instance;
  }
  var TtfFont$NameIds$TYPO_FAMILY_NAME_instance;
  function TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TYPO_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$TYPO_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$COMPATIBLE_FULL_instance;
  function TtfFont$NameIds$COMPATIBLE_FULL_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$COMPATIBLE_FULL_instance;
  }
  var TtfFont$NameIds$SAMPLE_TEXT_instance;
  function TtfFont$NameIds$SAMPLE_TEXT_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$SAMPLE_TEXT_instance;
  }
  var TtfFont$NameIds$POSTSCRIPT_CID_instance;
  function TtfFont$NameIds$POSTSCRIPT_CID_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$POSTSCRIPT_CID_instance;
  }
  var TtfFont$NameIds$WWS_FAMILY_NAME_instance;
  function TtfFont$NameIds$WWS_FAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$WWS_FAMILY_NAME_instance;
  }
  var TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance;
  function TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$WWS_SUBFAMILY_NAME_instance;
  }
  var TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance;
  function TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_instance;
  }
  var TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance;
  function TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$DARK_BACKGROUND_PALETTE_instance;
  }
  var TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance;
  function TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance() {
    TtfFont$NameIds_initFields();
    return TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_instance;
  }
  function TtfFont$NameIds$Companion() {
    TtfFont$NameIds$Companion_instance = this;
    this.names = TtfFont$NameIds$values();
  }
  TtfFont$NameIds$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TtfFont$NameIds$Companion_instance = null;
  function TtfFont$NameIds$Companion_getInstance() {
    TtfFont$NameIds_initFields();
    if (TtfFont$NameIds$Companion_instance === null) {
      new TtfFont$NameIds$Companion();
    }
    return TtfFont$NameIds$Companion_instance;
  }
  TtfFont$NameIds.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NameIds',
    interfaces: [Enum]
  };
  function TtfFont$NameIds$values() {
    return [TtfFont$NameIds$COPYRIGHT_getInstance(), TtfFont$NameIds$FONT_FAMILY_NAME_getInstance(), TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$UNIQUE_FONT_ID_getInstance(), TtfFont$NameIds$FULL_FONT_NAME_getInstance(), TtfFont$NameIds$VERSION_STRING_getInstance(), TtfFont$NameIds$POSTSCRIPT_NAME_getInstance(), TtfFont$NameIds$TRADEMARK_getInstance(), TtfFont$NameIds$MANUFACTURER_getInstance(), TtfFont$NameIds$DESIGNER_getInstance(), TtfFont$NameIds$DESCRIPTION_getInstance(), TtfFont$NameIds$URL_VENDOR_getInstance(), TtfFont$NameIds$URL_DESIGNER_getInstance(), TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance(), TtfFont$NameIds$LICENSE_URL_getInstance(), TtfFont$NameIds$RESERVED_15_getInstance(), TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance(), TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$COMPATIBLE_FULL_getInstance(), TtfFont$NameIds$SAMPLE_TEXT_getInstance(), TtfFont$NameIds$POSTSCRIPT_CID_getInstance(), TtfFont$NameIds$WWS_FAMILY_NAME_getInstance(), TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance(), TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance(), TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance(), TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance()];
  }
  TtfFont$NameIds.values = TtfFont$NameIds$values;
  function TtfFont$NameIds$valueOf(name) {
    switch (name) {
      case 'COPYRIGHT':
        return TtfFont$NameIds$COPYRIGHT_getInstance();
      case 'FONT_FAMILY_NAME':
        return TtfFont$NameIds$FONT_FAMILY_NAME_getInstance();
      case 'FONT_SUBFAMILY_NAME':
        return TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance();
      case 'UNIQUE_FONT_ID':
        return TtfFont$NameIds$UNIQUE_FONT_ID_getInstance();
      case 'FULL_FONT_NAME':
        return TtfFont$NameIds$FULL_FONT_NAME_getInstance();
      case 'VERSION_STRING':
        return TtfFont$NameIds$VERSION_STRING_getInstance();
      case 'POSTSCRIPT_NAME':
        return TtfFont$NameIds$POSTSCRIPT_NAME_getInstance();
      case 'TRADEMARK':
        return TtfFont$NameIds$TRADEMARK_getInstance();
      case 'MANUFACTURER':
        return TtfFont$NameIds$MANUFACTURER_getInstance();
      case 'DESIGNER':
        return TtfFont$NameIds$DESIGNER_getInstance();
      case 'DESCRIPTION':
        return TtfFont$NameIds$DESCRIPTION_getInstance();
      case 'URL_VENDOR':
        return TtfFont$NameIds$URL_VENDOR_getInstance();
      case 'URL_DESIGNER':
        return TtfFont$NameIds$URL_DESIGNER_getInstance();
      case 'LICENSE_DESCRIPTION':
        return TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance();
      case 'LICENSE_URL':
        return TtfFont$NameIds$LICENSE_URL_getInstance();
      case 'RESERVED_15':
        return TtfFont$NameIds$RESERVED_15_getInstance();
      case 'TYPO_FAMILY_NAME':
        return TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance();
      case 'TYPO_SUBFAMILY_NAME':
        return TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance();
      case 'COMPATIBLE_FULL':
        return TtfFont$NameIds$COMPATIBLE_FULL_getInstance();
      case 'SAMPLE_TEXT':
        return TtfFont$NameIds$SAMPLE_TEXT_getInstance();
      case 'POSTSCRIPT_CID':
        return TtfFont$NameIds$POSTSCRIPT_CID_getInstance();
      case 'WWS_FAMILY_NAME':
        return TtfFont$NameIds$WWS_FAMILY_NAME_getInstance();
      case 'WWS_SUBFAMILY_NAME':
        return TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance();
      case 'LIGHT_BACKGROUND_PALETTE':
        return TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance();
      case 'DARK_BACKGROUND_PALETTE':
        return TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance();
      case 'VARIATIONS_POSTSCRIPT_NAME_PREFIX':
        return TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.font.ttf.TtfFont.NameIds.' + name);
    }
  }
  TtfFont$NameIds.valueOf_61zpoe$ = TtfFont$NameIds$valueOf;
  function TtfFont$Fixed(num, den) {
    this.num = num;
    this.den = den;
  }
  TtfFont$Fixed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fixed',
    interfaces: []
  };
  TtfFont$Fixed.prototype.component1 = function () {
    return this.num;
  };
  TtfFont$Fixed.prototype.component2 = function () {
    return this.den;
  };
  TtfFont$Fixed.prototype.copy_vux9f0$ = function (num, den) {
    return new TtfFont$Fixed(num === void 0 ? this.num : num, den === void 0 ? this.den : den);
  };
  TtfFont$Fixed.prototype.toString = function () {
    return 'Fixed(num=' + Kotlin.toString(this.num) + (', den=' + Kotlin.toString(this.den)) + ')';
  };
  TtfFont$Fixed.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.num) | 0;
    result = result * 31 + Kotlin.hashCode(this.den) | 0;
    return result;
  };
  TtfFont$Fixed.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.num, other.num) && Kotlin.equals(this.den, other.den)))));
  };
  TtfFont.prototype.readFixed_ucmi9i$ = function ($receiver) {
    return new TtfFont$Fixed(readS16_le($receiver), readS16_le($receiver));
  };
  function TtfFont$HorMetric(advanceWidth, lsb) {
    this.advanceWidth = advanceWidth;
    this.lsb = lsb;
  }
  TtfFont$HorMetric.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HorMetric',
    interfaces: []
  };
  TtfFont$HorMetric.prototype.component1 = function () {
    return this.advanceWidth;
  };
  TtfFont$HorMetric.prototype.component2 = function () {
    return this.lsb;
  };
  TtfFont$HorMetric.prototype.copy_vux9f0$ = function (advanceWidth, lsb) {
    return new TtfFont$HorMetric(advanceWidth === void 0 ? this.advanceWidth : advanceWidth, lsb === void 0 ? this.lsb : lsb);
  };
  TtfFont$HorMetric.prototype.toString = function () {
    return 'HorMetric(advanceWidth=' + Kotlin.toString(this.advanceWidth) + (', lsb=' + Kotlin.toString(this.lsb)) + ')';
  };
  TtfFont$HorMetric.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.advanceWidth) | 0;
    result = result * 31 + Kotlin.hashCode(this.lsb) | 0;
    return result;
  };
  TtfFont$HorMetric.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.advanceWidth, other.advanceWidth) && Kotlin.equals(this.lsb, other.lsb)))));
  };
  TtfFont.prototype.openTable_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.tablesByName.get_11rb$(name)) != null ? tmp$.open() : null;
  };
  function TtfFont$Companion() {
    TtfFont$Companion_instance = this;
  }
  TtfFont$Companion.prototype.invoke_39qel5$ = function (s) {
    return new TtfFont(s);
  };
  TtfFont$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TtfFont$Companion_instance = null;
  function TtfFont$Companion_getInstance() {
    if (TtfFont$Companion_instance === null) {
      new TtfFont$Companion();
    }
    return TtfFont$Companion_instance;
  }
  TtfFont.prototype.readHeaderTables = function () {
    var $receiver = sliceStart(this.s);
    var tmp$;
    var $receiver_0 = readU16_be_0($receiver);
    if ($receiver_0 !== 1)
      invalidOp('Not a TTF file');
    var majorVersion = $receiver_0;
    var $receiver_1 = readU16_be_0($receiver);
    if ($receiver_1 !== 0)
      invalidOp('Not a TTF file');
    var minorVersion = $receiver_1;
    var numTables = readU16_be_0($receiver);
    var searchRange = readU16_be_0($receiver);
    var entrySelector = readU16_be_0($receiver);
    var rangeShift = readU16_be_0($receiver);
    var $receiver_2 = until(0, numTables);
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_0;
    tmp$_0 = $receiver_2.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(new TtfFont$Table(readStringz($receiver, 4), readS32_be_0($receiver), readS32_be_0($receiver), readS32_be_0($receiver)));
    }
    var tables = destination;
    tmp$ = tables.iterator();
    while (tmp$.hasNext()) {
      var table = tmp$.next();
      table.s = sliceWithSize($receiver, table.offset, table.length);
      var $receiver_3 = this.tablesByName;
      var key = table.id;
      $receiver_3.put_xwzc9p$(key, table);
    }
    return $receiver;
  };
  TtfFont.prototype.runTableUnit_efgvrk$ = defineInlineFunction('korim-js.com.soywiz.korim.font.ttf.TtfFont.runTableUnit_efgvrk$', function (name, callback) {
    var tmp$;
    (tmp$ = this.openTable_61zpoe$(name)) != null ? callback(tmp$) : null;
  });
  TtfFont.prototype.runTable_w0e0qj$ = defineInlineFunction('korim-js.com.soywiz.korim.font.ttf.TtfFont.runTable_w0e0qj$', wrapFunction(function () {
    return function (name, callback) {
      var tmp$;
      return (tmp$ = this.openTable_61zpoe$(name)) != null ? callback(tmp$) : null;
    };
  }));
  TtfFont.prototype.readNames = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('name')) != null) {
      var tmp$_0;
      var format = readU16_be_0(tmp$);
      var count = readU16_be_0(tmp$);
      var stringOffset = readU16_be_0(tmp$);
      for (var n = 0; n < count; n++) {
        var platformId = readU16_be_0(tmp$);
        var encodingId = readU16_be_0(tmp$);
        var languageId = readU16_be_0(tmp$);
        var nameId = readU16_be_0(tmp$);
        var length = readU16_be_0(tmp$);
        var offset = readU16_be_0(tmp$);
        switch (encodingId) {
          case 0:
            tmp$_0 = lang.UTF8;
            break;
          case 1:
            tmp$_0 = lang.UTF16_BE;
            break;
          default:tmp$_0 = lang.UTF16_BE;
            break;
        }
        var charset = tmp$_0;
        var string = toString_0(readAll(sliceWithSize_0(tmp$.clone(), Kotlin.Long.fromInt(stringOffset).add(Kotlin.Long.fromInt(offset)), Kotlin.Long.fromInt(length))), charset);
      }
    }
  };
  TtfFont.prototype.readLoca = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('loca')) != null) {
      var tmp$_0;
      switch (this.indexToLocFormat) {
        case 0:
          tmp$_0 = 2;
          break;
        case 1:
          tmp$_0 = 4;
          break;
        default:tmp$_0 = error.invalidOp;
          break;
      }
      var bytesPerEntry = tmp$_0;
      var data = readBytesExact(tmp$, Kotlin.imul(bytesPerEntry, this.numGlyphs + 1 | 0));
      this.locs = new Int32Array(this.numGlyphs + 1 | 0);
      var $receiver = new FastByteArrayInputStream(data);
      switch (this.indexToLocFormat) {
        case 0:
          var tmp$_1;
          tmp$_1 = this.locs;
          for (var n = 0; n !== tmp$_1.length; ++n) {
            this.locs[n] = $receiver.readU16_be() * 2 | 0;
          }

          break;
        case 1:
          var tmp$_2;
          tmp$_2 = this.locs;
          for (var n_0 = 0; n_0 !== tmp$_2.length; ++n_0) {
            this.locs[n_0] = $receiver.readS32_be() * 2 | 0;
          }

          break;
        default:error.invalidOp;
          break;
      }
      println('locs: ' + toList(this.locs));
    }
  };
  var TimeDistance_init = $module$klock_js.com.soywiz.klock.TimeDistance;
  TtfFont.prototype.readHead = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('head')) != null) {
      if (readU16_be_0(tmp$) !== 1)
        invalidOp('Invalid TTF');
      if (readU16_be_0(tmp$) !== 0)
        invalidOp('Invalid TTF');
      this.fontRev = this.readFixed_ucmi9i$(tmp$);
      var checkSumAdjustment = readS32_be_0(tmp$);
      var $receiver = readS32_be_0(tmp$);
      if ($receiver !== 1594834165)
        invalidOp('Invalid magic ' + get_hex($receiver));
      var flags = readU16_be_0(tmp$);
      this.unitsPerEm = readU16_be_0(tmp$);
      var created = readS64_be(tmp$).multiply(L1000);
      var modified = readS64_be(tmp$).multiply(L1000);
      this.xMin = readS16_be(tmp$);
      this.yMin = readS16_be(tmp$);
      this.xMax = readS16_be(tmp$);
      this.yMax = readS16_be(tmp$);
      this.macStyle = readU16_be_0(tmp$);
      this.lowestRecPPEM = readU16_be_0(tmp$);
      this.fontDirectionHint = readS16_be(tmp$);
      this.indexToLocFormat = readS16_be(tmp$);
      this.glyphDataFormat = readS16_be(tmp$);
      println('unitsPerEm: ' + this.unitsPerEm);
      println('created: ' + DateTime.Companion.invoke_s8cxhz$(created).minus_5t6mhc$(new TimeDistance_init(76)));
      println('modified: ' + DateTime.Companion.invoke_s8cxhz$(modified).minus_5t6mhc$(new TimeDistance_init(76)));
      println('bounds: (' + this.xMin + ', ' + this.yMin + ')-(' + this.xMax + ', ' + this.yMax + ')');
    }
  };
  TtfFont.prototype.readMaxp = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('maxp')) != null) {
      var version = this.readFixed_ucmi9i$(tmp$);
      this.numGlyphs = readU16_be_0(tmp$);
      this.maxPoints = readU16_be_0(tmp$);
      this.maxContours = readU16_be_0(tmp$);
      this.maxCompositePoints = readU16_be_0(tmp$);
      this.maxCompositeContours = readU16_be_0(tmp$);
      this.maxZones = readU16_be_0(tmp$);
      this.maxTwilightPoints = readU16_be_0(tmp$);
      this.maxStorage = readU16_be_0(tmp$);
      this.maxFunctionDefs = readU16_be_0(tmp$);
      this.maxInstructionDefs = readU16_be_0(tmp$);
      this.maxStackElements = readU16_be_0(tmp$);
      this.maxSizeOfInstructions = readU16_be_0(tmp$);
      this.maxComponentElements = readU16_be_0(tmp$);
      this.maxComponentDepth = readU16_be_0(tmp$);
    }
  };
  TtfFont.prototype.readHhea = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('hhea')) != null) {
      this.hheaVersion = this.readFixed_ucmi9i$(tmp$);
      this.ascender = readS16_be(tmp$);
      this.descender = readS16_be(tmp$);
      this.lineGap = readS16_be(tmp$);
      this.advanceWidthMax = readU16_be_0(tmp$);
      this.minLeftSideBearing = readS16_be(tmp$);
      this.minRightSideBearing = readS16_be(tmp$);
      this.xMaxExtent = readS16_be(tmp$);
      this.caretSlopeRise = readS16_be(tmp$);
      this.caretSlopeRun = readS16_be(tmp$);
      this.caretOffset = readS16_be(tmp$);
      readS16_be(tmp$);
      readS16_be(tmp$);
      readS16_be(tmp$);
      readS16_be(tmp$);
      this.metricDataFormat = readS16_be(tmp$);
      this.numberOfHMetrics = readU16_be_0(tmp$);
    }
  };
  TtfFont.prototype.readHmtx = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('hmtx')) != null) {
      var $receiver = until(0, this.numberOfHMetrics);
      var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(new TtfFont$HorMetric(readU16_be_0(tmp$), readS16_be(tmp$)));
      }
      var firstMetrics = destination;
      var lastAdvanceWidth = last(firstMetrics).advanceWidth;
      var $receiver_0 = until(0, this.numGlyphs - this.numberOfHMetrics | 0);
      var destination_0 = ArrayList_init_1(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_1;
      tmp$_1 = $receiver_0.iterator();
      while (tmp$_1.hasNext()) {
        var item_0 = tmp$_1.next();
        destination_0.add_11rb$(new TtfFont$HorMetric(lastAdvanceWidth, readS16_be(tmp$)));
      }
      var compressedMetrics = destination_0;
      this.horMetrics = plus(firstMetrics, compressedMetrics);
    }
  };
  function TtfFont$readCmap$lambda$EncodingRecord(platformId, encodingId, offset) {
    this.platformId = platformId;
    this.encodingId = encodingId;
    this.offset = offset;
  }
  TtfFont$readCmap$lambda$EncodingRecord.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EncodingRecord',
    interfaces: []
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component1 = function () {
    return this.platformId;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component2 = function () {
    return this.encodingId;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.component3 = function () {
    return this.offset;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.copy_qt1dr2$ = function (platformId, encodingId, offset) {
    return new TtfFont$readCmap$lambda$EncodingRecord(platformId === void 0 ? this.platformId : platformId, encodingId === void 0 ? this.encodingId : encodingId, offset === void 0 ? this.offset : offset);
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.toString = function () {
    return 'EncodingRecord(platformId=' + Kotlin.toString(this.platformId) + (', encodingId=' + Kotlin.toString(this.encodingId)) + (', offset=' + Kotlin.toString(this.offset)) + ')';
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.platformId) | 0;
    result = result * 31 + Kotlin.hashCode(this.encodingId) | 0;
    result = result * 31 + Kotlin.hashCode(this.offset) | 0;
    return result;
  };
  TtfFont$readCmap$lambda$EncodingRecord.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.platformId, other.platformId) && Kotlin.equals(this.encodingId, other.encodingId) && Kotlin.equals(this.offset, other.offset)))));
  };
  TtfFont.prototype.readCmap = function () {
    var tmp$;
    if ((tmp$ = this.openTable_61zpoe$('cmap')) != null) {
      var tmp$_0;
      var version = readU16_be_0(tmp$);
      var numTables = readU16_be_0(tmp$);
      var $receiver = until(0, numTables);
      var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
      var tmp$_1;
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var item = tmp$_1.next();
        destination.add_11rb$(new TtfFont$readCmap$lambda$EncodingRecord(readU16_be_0(tmp$), readU16_be_0(tmp$), readS32_be_0(tmp$)));
      }
      var tables = destination;
      tmp$_0 = tables.iterator();
      while (tmp$_0.hasNext()) {
        var table = tmp$_0.next();
        var $receiver_0 = sliceStart_0(tmp$, Kotlin.Long.fromInt(table.offset));
        var tmp$_2;
        var format = readU16_be_0($receiver_0);
        switch (format) {
          case 4:
            var length = readU16_be_0($receiver_0);
            var language = readU16_be_0($receiver_0);
            var segCount = readU16_be_0($receiver_0) / 2 | 0;
            var searchRangeS = readU16_be_0($receiver_0);
            var entrySelector = readU16_be_0($receiver_0);
            var rangeShift = readU16_be_0($receiver_0);
            var endCount = readCharArray_be($receiver_0, segCount);
            readU16_be_0($receiver_0);
            var startCount = readCharArray_be($receiver_0, segCount);
            var idDelta = readShortArray_be($receiver_0, segCount);
            var rangeOffsetPos = $receiver_0.position.toInt();
            var idRangeOffset = readCharArray_be($receiver_0, segCount);
            for (var n = 0; n < segCount; n++) {
              var ec = endCount[n] | 0;
              var sc = startCount[n] | 0;
              var delta = idDelta[n];
              var iro = idRangeOffset[n] | 0;
              for (var c = sc; c <= ec; c++) {
                var index;
                if (iro !== 0) {
                  var glyphIndexOffset = rangeOffsetPos + (n * 2 | 0) | 0;
                  glyphIndexOffset = glyphIndexOffset + iro | 0;
                  glyphIndexOffset = glyphIndexOffset + ((c - sc | 0) * 2 | 0) | 0;
                  index = readU16_be_0(sliceStart_0($receiver_0, Kotlin.Long.fromInt(glyphIndexOffset)));
                  if (index !== 0) {
                    index = index + delta | 0;
                  }
                }
                 else {
                  index = c + delta | 0;
                }
                var $receiver_1 = this.characterMaps;
                var value = index & 65535;
                $receiver_1.put_xwzc9p$(c, value);
              }
            }

            break;
          case 12:
            readU16_be_0($receiver_0);
            var length_0 = readS32_be_0($receiver_0);
            var language_0 = readS32_be_0($receiver_0);
            var numGroups = readS32_be_0($receiver_0);
            for (var n_0 = 0; n_0 < numGroups; n_0++) {
              var startCharCode = readS32_be_0($receiver_0);
              var endCharCode = readS32_be_0($receiver_0);
              var startGlyphId = readS32_be_0($receiver_0);
              var glyphId = startGlyphId;
              for (var c_0 = startCharCode; c_0 <= endCharCode; c_0++) {
                var $receiver_2 = this.characterMaps;
                var value_0 = (tmp$_2 = glyphId, glyphId = tmp$_2 + 1 | 0, tmp$_2);
                $receiver_2.put_xwzc9p$(c_0, value_0);
              }
            }

            break;
          default:break;
        }
        println('cmap.table.format: ' + format);
      }
      println(tables);
    }
  };
  TtfFont.prototype.getCharIndexFromCodePoint_za3lpa$ = function (codePoint) {
    return this.characterMaps.get_11rb$(codePoint);
  };
  TtfFont.prototype.getCharIndexFromChar_s8itvh$ = function (char) {
    return this.characterMaps.get_11rb$(char | 0);
  };
  TtfFont.prototype.getGlyphByCodePoint_za3lpa$ = function (codePoint) {
    var tmp$;
    return (tmp$ = this.characterMaps.get_11rb$(codePoint)) != null ? this.getGlyphByIndex_za3lpa$(tmp$) : null;
  };
  TtfFont.prototype.getGlyphByChar_s8itvh$ = function (char) {
    return this.getGlyphByCodePoint_za3lpa$(char | 0);
  };
  TtfFont.prototype.getGlyphByIndex_za3lpa$ = function (index) {
    var tmp$;
    var tmp$_0;
    if ((tmp$ = this.openTable_61zpoe$('glyf')) != null) {
      var callback$result;
      var tmp$_1, tmp$_2, tmp$_3, tmp$_4;
      var start = (tmp$_2 = (tmp$_1 = getOrNull(this.locs, index)) != null ? toUnsigned(tmp$_1) : null) != null ? tmp$_2 : L0;
      var end = (tmp$_4 = (tmp$_3 = getOrNull(this.locs, index + 1 | 0)) != null ? toUnsigned(tmp$_3) : null) != null ? tmp$_4 : start;
      var size = end.subtract(start);
      if (!equals(size, L0)) {
        callback$result = this.readGlyph_hsu5ns$(sliceStart_0(tmp$, start), index);
      }
       else {
        callback$result = new TtfFont$Glyph(this, 0, 0, 0, 0, new Int32Array([]), new Int32Array([]), new Int32Array([]), new Int32Array([]), this.horMetrics.get_za3lpa$(index).advanceWidth);
      }
      tmp$_0 = callback$result;
    }
     else
      tmp$_0 = null;
    return tmp$_0;
  };
  function mapNotNullTo$lambda(closure$transform, closure$destination) {
    return function (element) {
      var tmp$;
      if ((tmp$ = closure$transform(element)) != null) {
        closure$destination.add_11rb$(tmp$);
      }
      return Unit;
    };
  }
  TtfFont.prototype.getAllGlyphs = function () {
    var $receiver = until(0, this.numGlyphs);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var tmp$_0;
      if ((tmp$_0 = this.getGlyphByIndex_za3lpa$(element)) != null) {
        destination.add_11rb$(tmp$_0);
      }
    }
    return destination;
  };
  function TtfFont$IGlyph() {
  }
  TtfFont$IGlyph.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IGlyph',
    interfaces: []
  };
  function TtfFont$Contour(x, y, onCurve) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (onCurve === void 0)
      onCurve = false;
    this.x = x;
    this.y = y;
    this.onCurve = onCurve;
  }
  TtfFont$Contour.prototype.copyFrom_bj6kc4$ = function (that) {
    this.x = that.x;
    this.y = that.y;
    this.onCurve = that.onCurve;
  };
  TtfFont$Contour.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Contour',
    interfaces: []
  };
  TtfFont$Contour.prototype.component1 = function () {
    return this.x;
  };
  TtfFont$Contour.prototype.component2 = function () {
    return this.y;
  };
  TtfFont$Contour.prototype.component3 = function () {
    return this.onCurve;
  };
  TtfFont$Contour.prototype.copy_ydzd23$ = function (x, y, onCurve) {
    return new TtfFont$Contour(x === void 0 ? this.x : x, y === void 0 ? this.y : y, onCurve === void 0 ? this.onCurve : onCurve);
  };
  TtfFont$Contour.prototype.toString = function () {
    return 'Contour(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', onCurve=' + Kotlin.toString(this.onCurve)) + ')';
  };
  TtfFont$Contour.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.onCurve) | 0;
    return result;
  };
  TtfFont$Contour.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.onCurve, other.onCurve)))));
  };
  function TtfFont$Origin(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TtfFont$Origin_initFields() {
    TtfFont$Origin_initFields = function () {
    };
    TtfFont$Origin$TOP_instance = new TtfFont$Origin('TOP', 0);
    TtfFont$Origin$BASELINE_instance = new TtfFont$Origin('BASELINE', 1);
  }
  var TtfFont$Origin$TOP_instance;
  function TtfFont$Origin$TOP_getInstance() {
    TtfFont$Origin_initFields();
    return TtfFont$Origin$TOP_instance;
  }
  var TtfFont$Origin$BASELINE_instance;
  function TtfFont$Origin$BASELINE_getInstance() {
    TtfFont$Origin_initFields();
    return TtfFont$Origin$BASELINE_instance;
  }
  TtfFont$Origin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Origin',
    interfaces: [Enum]
  };
  function TtfFont$Origin$values() {
    return [TtfFont$Origin$TOP_getInstance(), TtfFont$Origin$BASELINE_getInstance()];
  }
  TtfFont$Origin.values = TtfFont$Origin$values;
  function TtfFont$Origin$valueOf(name) {
    switch (name) {
      case 'TOP':
        return TtfFont$Origin$TOP_getInstance();
      case 'BASELINE':
        return TtfFont$Origin$BASELINE_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.font.ttf.TtfFont.Origin.' + name);
    }
  }
  TtfFont$Origin.valueOf_61zpoe$ = TtfFont$Origin$valueOf;
  TtfFont.prototype.fillText_bdwvm3$ = function (c, text, size, x, y, color, origin) {
    if (size === void 0)
      size = 16.0;
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    if (origin === void 0)
      origin = TtfFont$Origin$BASELINE_getInstance();
    var tmp$;
    var font = this;
    var scale = size / this.unitsPerEm;
    c.translate_lu1900$(x, y);
    tmp$ = iterator(text);
    while (tmp$.hasNext()) {
      var char = unboxChar(tmp$.next());
      var g = this.getGlyphByChar_s8itvh$(char);
      if (g != null) {
        g.fill_g2rfor$(c, 32.0, TtfFont$Origin$TOP_getInstance(), color);
        c.translate_lu1900$(scale * g.advanceWidth, 0.0);
      }
    }
  };
  function TtfFont$GlyphReference(glyph, x, y, scaleX, scale01, scale10, scaleY) {
    this.glyph = glyph;
    this.x = x;
    this.y = y;
    this.scaleX = scaleX;
    this.scale01 = scale01;
    this.scale10 = scale10;
    this.scaleY = scaleY;
  }
  TtfFont$GlyphReference.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GlyphReference',
    interfaces: []
  };
  TtfFont$GlyphReference.prototype.component1 = function () {
    return this.glyph;
  };
  TtfFont$GlyphReference.prototype.component2 = function () {
    return this.x;
  };
  TtfFont$GlyphReference.prototype.component3 = function () {
    return this.y;
  };
  TtfFont$GlyphReference.prototype.component4 = function () {
    return this.scaleX;
  };
  TtfFont$GlyphReference.prototype.component5 = function () {
    return this.scale01;
  };
  TtfFont$GlyphReference.prototype.component6 = function () {
    return this.scale10;
  };
  TtfFont$GlyphReference.prototype.component7 = function () {
    return this.scaleY;
  };
  TtfFont$GlyphReference.prototype.copy_t3pr0x$ = function (glyph, x, y, scaleX, scale01, scale10, scaleY) {
    return new TtfFont$GlyphReference(glyph === void 0 ? this.glyph : glyph, x === void 0 ? this.x : x, y === void 0 ? this.y : y, scaleX === void 0 ? this.scaleX : scaleX, scale01 === void 0 ? this.scale01 : scale01, scale10 === void 0 ? this.scale10 : scale10, scaleY === void 0 ? this.scaleY : scaleY);
  };
  TtfFont$GlyphReference.prototype.toString = function () {
    return 'GlyphReference(glyph=' + Kotlin.toString(this.glyph) + (', x=' + Kotlin.toString(this.x)) + (', y=' + Kotlin.toString(this.y)) + (', scaleX=' + Kotlin.toString(this.scaleX)) + (', scale01=' + Kotlin.toString(this.scale01)) + (', scale10=' + Kotlin.toString(this.scale10)) + (', scaleY=' + Kotlin.toString(this.scaleY)) + ')';
  };
  TtfFont$GlyphReference.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.glyph) | 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleX) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale01) | 0;
    result = result * 31 + Kotlin.hashCode(this.scale10) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleY) | 0;
    return result;
  };
  TtfFont$GlyphReference.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.glyph, other.glyph) && Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.scaleX, other.scaleX) && Kotlin.equals(this.scale01, other.scale01) && Kotlin.equals(this.scale10, other.scale10) && Kotlin.equals(this.scaleY, other.scaleY)))));
  };
  function TtfFont$CompositeGlyph($outer, xMin, yMin, xMax, yMax, refs, advanceWidth) {
    this.$outer = $outer;
    this.xMin_g1rraz$_0 = xMin;
    this.yMin_g17ypm$_0 = yMin;
    this.xMax_g1rwzx$_0 = xMax;
    this.yMax_g184ek$_0 = yMax;
    this.refs = refs;
    this.advanceWidth_f2ft5x$_0 = advanceWidth;
  }
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'xMin', {
    get: function () {
      return this.xMin_g1rraz$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'yMin', {
    get: function () {
      return this.yMin_g17ypm$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'xMax', {
    get: function () {
      return this.xMax_g1rwzx$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'yMax', {
    get: function () {
      return this.yMax_g184ek$_0;
    }
  });
  Object.defineProperty(TtfFont$CompositeGlyph.prototype, 'advanceWidth', {
    get: function () {
      return this.advanceWidth_f2ft5x$_0;
    }
  });
  TtfFont$CompositeGlyph.prototype.fill_g2rfor$ = function (c, size, origin, color) {
    var scale = size / this.$outer.unitsPerEm;
    c.save();
    try {
      var tmp$;
      tmp$ = this.refs.iterator();
      while (tmp$.hasNext()) {
        var ref = tmp$.next();
        c.save();
        try {
          c.translate_lu1900$((ref.x - this.xMin | 0) * scale, ((-ref.y | 0) - this.yMin | 0) * scale);
          c.scale_lu1900$(ref.scaleX, ref.scaleY);
          ref.glyph.fill_g2rfor$(c, size, origin, color);
        }
        finally {
          c.restore();
        }
      }
    }
    finally {
      c.restore();
    }
  };
  TtfFont$CompositeGlyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompositeGlyph',
    interfaces: [TtfFont$IGlyph]
  };
  function TtfFont$Glyph($outer, xMin, yMin, xMax, yMax, contoursIndices, flags, xPos, yPos, advanceWidth) {
    this.$outer = $outer;
    this.xMin_1subio$_0 = xMin;
    this.yMin_1saixb$_0 = yMin;
    this.xMax_1suh7m$_0 = xMax;
    this.yMax_1saom9$_0 = yMax;
    this.contoursIndices = contoursIndices;
    this.flags = flags;
    this.xPos = xPos;
    this.yPos = yPos;
    this.advanceWidth_vy3ewq$_0 = advanceWidth;
  }
  Object.defineProperty(TtfFont$Glyph.prototype, 'xMin', {
    get: function () {
      return this.xMin_1subio$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'yMin', {
    get: function () {
      return this.yMin_1saixb$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'xMax', {
    get: function () {
      return this.xMax_1suh7m$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'yMax', {
    get: function () {
      return this.yMax_1saom9$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'advanceWidth', {
    get: function () {
      return this.advanceWidth_vy3ewq$_0;
    }
  });
  Object.defineProperty(TtfFont$Glyph.prototype, 'npoints', {
    get: function () {
      return this.xPos.length;
    }
  });
  TtfFont$Glyph.prototype.onCurve_za3lpa$ = function (n) {
    return (this.flags[n] & 1) !== 0;
  };
  TtfFont$Glyph.prototype.contour_7faev6$ = function (n, out) {
    if (out === void 0)
      out = new TtfFont$Contour();
    out.x = this.xPos[n];
    out.y = this.yPos[n];
    out.onCurve = this.onCurve_za3lpa$(n);
    return out;
  };
  TtfFont$Glyph.prototype.fill_g2rfor$ = function (c, size, origin, color) {
    var font = this.$outer;
    var scale = size / font.unitsPerEm;
    c.save();
    try {
      var tmp$;
      switch (origin.name) {
        case 'TOP':
          tmp$ = font.yMax - font.yMin + this.yMin | 0;
          break;
        case 'BASELINE':
          tmp$ = 0.0;
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      var ydist = tmp$;
      c.translate_lu1900$(0.0 * scale, (ydist - this.yMin) * scale);
      c.scale_lu1900$(scale, -scale);
      c.beginPath();
      c.draw_ywv3s4$(this.createGraphicsPath());
      c.fill_i8h3xk$(new Context2d$Color(color));
    }
    finally {
      c.restore();
    }
  };
  TtfFont$Glyph.prototype.createGraphicsPath = function () {
    var tmp$;
    var p = new GraphicsPath();
    tmp$ = this.contoursIndices.length - 1 | 0;
    for (var n = 0; n < tmp$; n++) {
      var cstart = this.contoursIndices[n] + 1 | 0;
      var cend = this.contoursIndices[n + 1 | 0];
      var csize = cend - cstart + 1 | 0;
      var curr = this.contour_7faev6$(cend);
      var next = this.contour_7faev6$(cstart);
      if (curr.onCurve) {
        p.moveTo_vux9f0$(curr.x, curr.y);
      }
       else {
        if (next.onCurve) {
          p.moveTo_vux9f0$(next.x, next.y);
        }
         else {
          p.moveTo_vux9f0$((curr.x + next.x | 0) * 0 | 0, numberToInt((curr.y + next.y | 0) * 0.5));
        }
      }
      for (var cpos = 0; cpos < csize; cpos++) {
        var prev = curr;
        curr = next;
        next = this.contour_7faev6$(cstart + (cpos + 1 | 0) % csize | 0);
        if (curr.onCurve) {
          p.lineTo_vux9f0$(curr.x, curr.y);
        }
         else {
          var prev2X = prev.x;
          var prev2Y = prev.y;
          var next2X = next.x;
          var next2Y = next.y;
          if (!prev.onCurve) {
            prev2X = numberToInt((curr.x + prev.x | 0) * 0.5);
            prev2Y = numberToInt((curr.y + prev.y | 0) * 0.5);
            p.lineTo_vux9f0$(prev2X, prev2Y);
          }
          if (!next.onCurve) {
            next2X = numberToInt((curr.x + next.x | 0) * 0.5);
            next2Y = numberToInt((curr.y + next.y | 0) * 0.5);
          }
          p.lineTo_vux9f0$(prev2X, prev2Y);
          p.quadTo_tjonv8$(curr.x, curr.y, next2X, next2Y);
        }
      }
      p.close();
    }
    return p;
  };
  TtfFont$Glyph.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Glyph',
    interfaces: [TtfFont$IGlyph]
  };
  TtfFont.prototype.readF2DOT14_ucmi9i$ = function ($receiver) {
    var v = readS16_be($receiver);
    var i = v >> 14;
    var f = v & 16383;
    return i + f / 16384.0;
  };
  TtfFont.prototype.readMix_be_daiwru$ = function ($receiver, signed, word) {
    var tmp$;
    if (!word && signed)
      tmp$ = readS8($receiver);
    else if (!word && !signed)
      tmp$ = readU8($receiver);
    else if (word && signed)
      tmp$ = readS16_be($receiver);
    else if (word && !signed)
      tmp$ = readU16_be_0($receiver);
    else
      tmp$ = error.invalidOp;
    return tmp$;
  };
  TtfFont.prototype.readGlyph_hsu5ns$ = function ($receiver, index) {
    var tmp$, tmp$_0;
    var ncontours = readS16_be($receiver);
    var xMin = readS16_be($receiver);
    var yMin = readS16_be($receiver);
    var xMax = readS16_be($receiver);
    var yMax = readS16_be($receiver);
    if (ncontours < 0) {
      var ARG_1_AND_2_ARE_WORDS = 1;
      var ARGS_ARE_XY_VALUES = 2;
      var ROUND_XY_TO_GRID = 4;
      var WE_HAVE_A_SCALE = 8;
      var MORE_COMPONENTS = 32;
      var WE_HAVE_AN_X_AND_Y_SCALE = 64;
      var WE_HAVE_A_TWO_BY_TWO = 128;
      var WE_HAVE_INSTRUCTIONS = 256;
      var USE_MY_METRICS = 512;
      var OVERLAP_COMPOUND = 1024;
      var SCALED_COMPONENT_OFFSET = 2048;
      var UNSCALED_COMPONENT_OFFSET = 4096;
      var references = ArrayList_init_0();
      do {
        var flags = readU16_be_0($receiver);
        var glyphIndex = readU16_be_0($receiver);
        var signed = (flags & ARGS_ARE_XY_VALUES) !== 0;
        var words = (flags & ARG_1_AND_2_ARE_WORDS) !== 0;
        var x = this.readMix_be_daiwru$($receiver, signed, words);
        var y = this.readMix_be_daiwru$($receiver, signed, words);
        var scaleX = 1.0;
        var scaleY = 1.0;
        var scale01 = 0.0;
        var scale10 = 0.0;
        if ((flags & WE_HAVE_A_SCALE) !== 0) {
          scaleX = this.readF2DOT14_ucmi9i$($receiver);
          scaleY = scaleX;
        }
         else if ((flags & WE_HAVE_AN_X_AND_Y_SCALE) !== 0) {
          scaleX = this.readF2DOT14_ucmi9i$($receiver);
          scaleY = this.readF2DOT14_ucmi9i$($receiver);
        }
         else if ((flags & WE_HAVE_A_TWO_BY_TWO) !== 0) {
          scaleX = this.readF2DOT14_ucmi9i$($receiver);
          scale01 = this.readF2DOT14_ucmi9i$($receiver);
          scale10 = this.readF2DOT14_ucmi9i$($receiver);
          scaleY = this.readF2DOT14_ucmi9i$($receiver);
        }
        var ref = new TtfFont$GlyphReference(ensureNotNull(this.getGlyphByIndex_za3lpa$(glyphIndex)), x, y, scaleX, scale01, scale10, scaleY);
        references.add_11rb$(ref);
      }
       while ((flags & MORE_COMPONENTS) !== 0);
      return new TtfFont$CompositeGlyph(this, xMin, yMin, xMax, yMax, references, this.horMetrics.get_za3lpa$(index).advanceWidth);
    }
     else {
      var contoursIndices = new Int32Array(ncontours + 1 | 0);
      contoursIndices[0] = -1;
      for (var n = 1; n <= ncontours; n++)
        contoursIndices[n] = readU16_be_0($receiver);
      var instructionLength = readU16_be_0($receiver);
      var instructions = readBytesExact($receiver, instructionLength);
      var numPoints = (tmp$_0 = (tmp$ = lastOrNull(contoursIndices)) != null ? tmp$ + 1 | 0 : null) != null ? tmp$_0 : 0;
      var flags_0 = new IntArrayList();
      var npos = 0;
      while (npos < numPoints) {
        var cf = readU8($receiver);
        flags_0.add_za3lpa$(cf);
        if ((cf & 8) !== 0) {
          var count = readU8($receiver);
          for (var n_0 = 0; n_0 < count; n_0++)
            flags_0.add_za3lpa$(cf);
          npos = npos + (count + 1) | 0;
        }
         else {
          npos = npos + 1 | 0;
        }
      }
      var xPos = new Int32Array(numPoints);
      var yPos = new Int32Array(numPoints);
      for (var xy = 0; xy <= 1; xy++) {
        var pos = xy === 0 ? xPos : yPos;
        var p = 0;
        for (var n_1 = 0; n_1 < numPoints; n_1++) {
          var flag = flags_0.get_za3lpa$(n_1);
          var b1 = (flag >>> 1 + xy & 1) !== 0;
          var b2 = (flag >>> 4 + xy & 1) !== 0;
          if (b1) {
            var magnitude = readU8($receiver);
            if (b2)
              p = p + magnitude | 0;
            else
              p = p - magnitude | 0;
          }
           else if (!b2) {
            p = p + readS16_be($receiver) | 0;
          }
          pos[n_1] = p;
        }
      }
      return new TtfFont$Glyph(this, xMin, yMin, xMax, yMax, contoursIndices, copyOf(flags_0.data, flags_0.size), xPos, yPos, this.horMetrics.get_za3lpa$(index).advanceWidth);
    }
  };
  TtfFont.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TtfFont',
    interfaces: []
  };
  function fillText($receiver, font, text, size, x, y, color, origin) {
    if (size === void 0)
      size = 16.0;
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (color === void 0)
      color = Colors_getInstance().WHITE;
    if (origin === void 0)
      origin = TtfFont$Origin$BASELINE_getInstance();
    font.fillText_bdwvm3$($receiver, text, size, x, y, color, origin);
  }
  function BMP() {
    BMP_instance = this;
    ImageFormat.call(this, ['bmp']);
  }
  BMP.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readStringz(s, 2), 'BM'))
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this.decodeHeader_1ooaqm$(s, props);
    if (tmp$ == null) {
      throw IllegalArgumentException_init('Not a BMP file');
    }
    var h = tmp$;
    var compression = readS32_le_0(s);
    var sizeImage = readS32_le_0(s);
    var pixelsPerMeterX = readS32_le_0(s);
    var pixelsPerMeterY = readS32_le_0(s);
    var clrUsed = readS32_le_0(s);
    var clrImportant = readS32_le_0(s);
    switch (h.bitsPerPixel) {
      case 8:
        var out = new Bitmap8(h.width, h.height);
        for (var n = 0; n < 256; n++)
          out.palette.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_vux9f0$(readS32_le_0(s), 255));
        tmp$_0 = h.height;
        for (var n_0 = 0; n_0 < tmp$_0; n_0++)
          out.setRow_3fbn1q$(h.height - n_0 - 1 | 0, readBytes(s, h.width));
        tmp$_2 = new ImageData(listOf_0(new ImageFrame(out)));
        break;
      case 24:
      case 32:
        var bytesPerRow = Kotlin.imul(h.width, h.bitsPerPixel) / 8 | 0;
        var out_0 = new Bitmap32(h.width, h.height);
        var row = new Int8Array(bytesPerRow);
        var format = h.bitsPerPixel === 24 ? BGR_getInstance() : RGBA$Companion_getInstance();
        var padding = 4 - bytesPerRow % 4 | 0;
        tmp$_1 = h.height;
        for (var n_1 = 0; n_1 < tmp$_1; n_1++) {
          var y = h.height - n_1 - 1 | 0;
          read(s, row);
          format.decode_lg4na5$(row, 0, out_0.data, out_0.index_vux9f0$(0, y), h.width);
          if (padding !== 0) {
            skip(s, padding);
          }
        }

        tmp$_2 = new ImageData(listOf_0(new ImageFrame(out_0)));
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported bitsPerPixel=' + h.bitsPerPixel));
    }
    return tmp$_2;
  };
  BMP.$metadata$ = {
    kind: Kind_OBJECT,
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
  var DDS$fourcc_metadata = new PropertyMetadata('fourcc');
  var setExtra = $module$kds_js.com.soywiz.kds.setExtra_46skc7$;
  DDS.prototype.get_fourcc_qovqgb$ = function ($receiver) {
    var $this = this.fourcc_qovqgb$_8rhdqq$_0;
    var getValue_jvq2vc$result;
    getValue_jvq2vc$break: do {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = $receiver.extra;
      tmp$_0 = (tmp$ = $this.name) != null ? tmp$ : DDS$fourcc_metadata.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = $this.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra($receiver, (tmp$_3 = $this.name) != null ? tmp$_3 : DDS$fourcc_metadata.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        getValue_jvq2vc$result = r;
        break getValue_jvq2vc$break;
      }
      getValue_jvq2vc$result = res;
    }
     while (false);
    return getValue_jvq2vc$result;
  };
  DDS.prototype.set_fourcc_nqhl9v$ = function ($receiver, fourcc) {
    var tmp$, tmp$_0;
    setExtra($receiver, (tmp$ = this.fourcc_qovqgb$_8rhdqq$_0.name) != null ? tmp$ : DDS$fourcc_metadata.callableName, (tmp$_0 = fourcc) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
  };
  DDS.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readString(s, 4), 'DDS '))
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
    switch (fourcc) {
      case 'DXT1':
        tmp$_0 = DXT1_getInstance();
        break;
      case 'DXT3':
        tmp$_0 = DXT3_getInstance();
        break;
      case 'DXT4':
        tmp$_0 = DXT4_getInstance();
        break;
      case 'DXT5':
        tmp$_0 = DXT5_getInstance();
        break;
      default:tmp$_0 = invalidOp("Unsupported DDS FourCC '" + fourcc + "'");
        break;
    }
    var subimageFormat = tmp$_0;
    var bytes = readAll(s);
    return subimageFormat.readImage_1ooaqm$(openSync(bytes), new ImageDecodingProps('image.' + fourcc, h.width, h.height));
  };
  function DDS$fourcc$lambda() {
    return '    ';
  }
  DDS.$metadata$ = {
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
    kind: Kind_OBJECT,
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
  DXT1Base.prototype.decodeRow_cndmu7$ = function (data, dataOffset, bmp, bmpOffset, bmpStride, aa, cc) {
    DXT$Companion_getInstance().decodeDxt1ColorCond_k437h2$(data, dataOffset + 0 | 0, cc);
    var cdata = readS32_le(data, dataOffset + 4 | 0);
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        bmp.set_vlvk8p$(pos + x | 0, RGBA$Companion_getInstance().invoke_vux9f0$(cc.get_za3lpa$(c).rgb, 255));
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT1Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT1Base',
    interfaces: [DXT]
  };
  function DXT2_3(format, premult) {
    DXT.call(this, format, premult, 16);
  }
  DXT2_3.prototype.decodeRow_cndmu7$ = function (data, dataOffset, bmp, bmpOffset, bmpStride, aa, cc) {
    DXT$Companion_getInstance().decodeDxt5Alpha_syel7v$(data, dataOffset + 0 | 0, aa);
    DXT$Companion_getInstance().decodeDxt1Color_k437h2$(data, dataOffset + 8 | 0, cc);
    var cdata = readS32_le(data, dataOffset + 8 + 4 | 0);
    var adata = readU32_le(data, dataOffset + 2 | 0).or(Kotlin.Long.fromInt(readU16_le(data, dataOffset + 6 | 0)).shiftLeft(32));
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        var a = adata.shiftRightUnsigned(n * 3 | 0).and(L7).toInt();
        bmp.set_vlvk8p$(pos + x | 0, RGBA$Companion_getInstance().invoke_vux9f0$(cc.get_za3lpa$(c).rgb, aa[a]));
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT2_3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT2_3',
    interfaces: [DXT]
  };
  function DXT4_5(format, premult) {
    DXT.call(this, format, premult, 16);
  }
  DXT4_5.prototype.decodeRow_cndmu7$ = function (data, dataOffset, bmp, bmpOffset, bmpStride, aa, cc) {
    DXT$Companion_getInstance().decodeDxt5Alpha_syel7v$(data, dataOffset + 0 | 0, aa);
    DXT$Companion_getInstance().decodeDxt1ColorCond_k437h2$(data, dataOffset + 8 | 0, cc);
    var cdata = readS32_le(data, dataOffset + 8 + 4 | 0);
    var adata = readU32_le(data, dataOffset + 2 | 0).or(Kotlin.Long.fromInt(readU16_le(data, dataOffset + 6 | 0)).shiftLeft(32));
    var pos = bmpOffset;
    var n = 0;
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < 4; x++) {
        var c = cdata >>> (n * 2 | 0) & 3;
        var a = adata.shiftRightUnsigned(n * 3 | 0).and(L7).toInt();
        bmp.set_vlvk8p$(pos + x | 0, RGBA$Companion_getInstance().invoke_vux9f0$(cc.get_za3lpa$(c).rgb, aa[a]));
        n = n + 1 | 0;
      }
      pos = pos + bmpStride | 0;
    }
  };
  DXT4_5.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DXT4_5',
    interfaces: [DXT]
  };
  function DXT(format, premult, blockSize) {
    DXT$Companion_getInstance();
    ImageFormat.call(this, [format]);
    this.format = format;
    this.premult = premult;
    this.blockSize = blockSize;
  }
  DXT.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!startsWith(get_extensionLC(new PathInfo(props.filename)), this.format))
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
    var aa = new Int32Array(8);
    var cc = RgbaArray$Companion_getInstance().invoke_za3lpa$(4);
    for (var y = 0; y < blockHeight; y++) {
      for (var x = 0; x < blockWidth; x++) {
        this.decodeRow_cndmu7$(bytes, offset, out.data, out.index_vux9f0$(x * 4 | 0, y * 4 | 0), out.width, aa, cc);
        offset = offset + this.blockSize | 0;
      }
    }
    return out;
  };
  DXT.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    var bytes = readAll(s);
    var totalPixels = ((bytes.length / this.blockSize | 0) * 4 | 0) * 4 | 0;
    var potentialSide = numberToInt(Math_0.sqrt(totalPixels));
    var width = (tmp$ = props.width) != null ? tmp$ : potentialSide;
    var height = (tmp$_0 = props.height) != null ? tmp$_0 : potentialSide;
    return new ImageData(listOf_0(new ImageFrame(this.decodeBitmap_mj6st8$(bytes, width, height))));
  };
  function DXT$Companion() {
    DXT$Companion_instance = this;
    this.FACT_2_3 = 170;
    this.FACT_1_3 = 85;
    this.FACT_1_2 = 128;
  }
  DXT$Companion.prototype.decodeRGB656_za3lpa$ = function (v) {
    return BGR_565_getInstance().toRGBA_za3lpa$(v);
  };
  DXT$Companion.prototype.decodeDxt1ColorCond_k437h2$ = function (data, dataOffset, cc) {
    var c0 = readU16_le(data, dataOffset + 0 | 0);
    var c1 = readU16_le(data, dataOffset + 2 | 0);
    cc.set_vlvk8p$(0, this.decodeRGB656_za3lpa$(c0));
    cc.set_vlvk8p$(1, this.decodeRGB656_za3lpa$(c1));
    if (c0 > c1) {
      cc.set_vlvk8p$(2, new RGBA(RGBA$Companion_getInstance().blendRGB_qt1dr2$(cc.get_za3lpa$(0).rgba, cc.get_za3lpa$(1).rgba, 170)));
      cc.set_vlvk8p$(3, new RGBA(RGBA$Companion_getInstance().blendRGB_qt1dr2$(cc.get_za3lpa$(0).rgba, cc.get_za3lpa$(1).rgba, 85)));
    }
     else {
      cc.set_vlvk8p$(2, new RGBA(RGBA$Companion_getInstance().blendRGB_qt1dr2$(cc.get_za3lpa$(0).rgba, cc.get_za3lpa$(1).rgba, 128)));
      cc.set_vlvk8p$(3, Colors_getInstance().TRANSPARENT_BLACK);
    }
  };
  DXT$Companion.prototype.decodeDxt1Color_k437h2$ = function (data, dataOffset, cc) {
    cc.set_vlvk8p$(0, this.decodeRGB656_za3lpa$(readU16_le(data, dataOffset + 0 | 0)));
    cc.set_vlvk8p$(1, this.decodeRGB656_za3lpa$(readU16_le(data, dataOffset + 2 | 0)));
    cc.set_vlvk8p$(2, new RGBA(RGBA$Companion_getInstance().blendRGB_qt1dr2$(cc.get_za3lpa$(0).rgba, cc.get_za3lpa$(1).rgba, 170)));
    cc.set_vlvk8p$(3, new RGBA(RGBA$Companion_getInstance().blendRGB_qt1dr2$(cc.get_za3lpa$(0).rgba, cc.get_za3lpa$(1).rgba, 85)));
  };
  DXT$Companion.prototype.decodeDxt5Alpha_syel7v$ = function (data, dataOffset, aa) {
    var a0 = readU8_0(data, dataOffset + 0 | 0);
    var a1 = readU8_0(data, dataOffset + 1 | 0);
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
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
      return new ICO$readImage$DirEntry(readU8(closure$s), readU8(closure$s), readU8(closure$s), readU8(closure$s), readU16_le_0(closure$s), readU16_le_0(closure$s), readS32_le_0(closure$s), readS32_le_0(closure$s));
    };
  }
  function ICO$readImage$readBitmap(closure$props) {
    return function (e, s) {
      var tmp$;
      var tryPNGHead = readU32_be(sliceStart(s));
      if (equals(tryPNGHead, L2303741511))
        return PNG_getInstance().decode_1ooaqm$(sliceStart(s), closure$props.copy_qp3p0u$(closure$props.filename + '.png'));
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
      var palette = RgbaArray$Companion_getInstance().invoke_za3lpa$(0);
      if (compression !== 0)
        throw UnsupportedOperationException_init('Not supported compressed .ico');
      if (bitCount <= 8) {
        var colors = clrUsed === 0 ? 1 << bitCount : clrUsed;
        var $receiver = until(0, colors);
        var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          var tmp$_1 = destination.add_11rb$;
          var b = readU8(s);
          var g = readU8(s);
          var r = readU8(s);
          var reserved = readU8(s);
          tmp$_1.call(destination, RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, 255));
        }
        palette = toRgbaArray(destination);
      }
      var stride = Kotlin.imul(e.width, bitCount) / 8 | 0;
      var data = readBytes(s, Kotlin.imul(stride, e.height));
      switch (bitCount) {
        case 4:
          tmp$ = new Bitmap4(e.width, e.height, data, palette);
          break;
        case 8:
          tmp$ = new Bitmap8(e.width, e.height, data, palette);
          break;
        case 32:
          tmp$ = (new Bitmap32(e.width, e.height)).writeDecoded_77vltg$(BGRA_getInstance(), data);
          break;
        default:throw UnsupportedOperationException_init('Unsupported bitCount: ' + bitCount);
      }
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
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(readDirEntry());
    }
    var entries = destination;
    var bitmaps = ArrayList_init_0();
    tmp$ = entries.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      var bmp = readBitmap(e, sliceWithSize_0(s, Kotlin.Long.fromInt(e.offset), Kotlin.Long.fromInt(e.size)));
      bmp.flipY();
      bitmaps.add_11rb$(bmp);
    }
    var destination_0 = ArrayList_init_1(collectionSizeOrDefault(bitmaps, 10));
    var tmp$_1;
    tmp$_1 = bitmaps.iterator();
    while (tmp$_1.hasNext()) {
      var item_0 = tmp$_1.next();
      destination_0.add_11rb$(new ImageFrame(item_0, void 0, void 0, void 0, false));
    }
    return new ImageData(destination_0);
  };
  ICO.$metadata$ = {
    kind: Kind_OBJECT,
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
      return 2147483647;
    }
     else {
      return Kotlin.imul(Kotlin.imul(it.bitmap.width, it.bitmap.height), Kotlin.imul(it.bitmap.bpp, it.bitmap.bpp));
    }
  }
  Object.defineProperty(ImageData.prototype, 'mainBitmap', {
    get: function () {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = firstOrNull(sortedBy2(this.frames, ImageData$get_ImageData$mainBitmap$lambda))) != null ? tmp$.bitmap : null;
      if (tmp$_0 == null) {
        throw IllegalArgumentException_init('No bitmap found');
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    var destination = ArrayList_init_1(exts.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== exts.length; ++tmp$) {
      var item = exts[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var throwCCE = Kotlin.throwCCE;
      var trim = Kotlin.kotlin.text.trim_gw00vp$;
      var $receiver = item.toLowerCase();
      var tmp$_1;
      tmp$_0.call(destination, trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : throwCCE()).toString());
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
    throw UnsupportedOperationException_init_0();
  };
  ImageFormat.prototype.writeImage_2psbf2$ = function (image, s, props, callback$default) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    callback$default ? callback$default(image, s, props) : this.writeImage_2psbf2$$default(image, s, props);
  };
  ImageFormat.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var ignoreErrors$result;
    ignoreErrors$break: do {
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
          if (true)
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
  ImageFormat.prototype.read_3ekr7n$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$read_3ekr7n$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$read_3ekr7n$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$read_3ekr7n$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_3ekr7n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_3ekr7n$.prototype.constructor = Coroutine$read_3ekr7n$;
  Coroutine$read_3ekr7n$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.read_zdd1ed$(this.result_0, get_basename(this.local$file));
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
    var ignoreErrors$result;
    ignoreErrors$break: do {
      try {
        ignoreErrors$result = this.decodeHeader_1ooaqm$(s, props) != null;
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          if (true)
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
  ImageFormat.prototype.decode_3ekr7n$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_3ekr7n$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_3ekr7n$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$decode_3ekr7n$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_3ekr7n$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_3ekr7n$.prototype.constructor = Coroutine$decode_3ekr7n$;
  Coroutine$decode_3ekr7n$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.read_zdd1ed$(this.result_0, get_basename(this.local$file));
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
  ImageFormat.prototype.decodeInWorker_nwlife$ = function (s, filename, continuation) {
    if (filename === void 0)
      filename = 'unknown';
    return executeInWorker(ImageFormat$decodeInWorker$lambda(s, filename, this), continuation);
  };
  var ByteArrayBuffer_init_0 = $module$korio_js.$$importsForInline$$['kmem-js'].com.soywiz.kmem.ByteArrayBuffer_init_za3lpa$;
  var MemorySyncStream = $module$korio_js.com.soywiz.korio.stream.MemorySyncStream_yyklod$;
  ImageFormat.prototype.encode_dqmhj5$ = function (frames, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    var buffer = ByteArrayBuffer_init_0(get_area(frames) * 4 | 0);
    var s = MemorySyncStream(buffer);
    this.writeImage_2psbf2$(new ImageData(frames), s, props);
    return buffer.toByteArray();
  };
  ImageFormat.prototype.encode_ruzdkj$ = function (image, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    var buffer = ByteArrayBuffer_init_0(image.area * 4 | 0);
    var s = MemorySyncStream(buffer);
    this.writeImage_2psbf2$(image, s, props);
    return buffer.toByteArray();
  };
  ImageFormat.prototype.encode_hnx2ev$ = function (bitmap, props) {
    if (props === void 0)
      props = new ImageEncodingProps('unknown');
    return this.encode_dqmhj5$(listOf_0(new ImageFrame(bitmap)), props);
  };
  ImageFormat.prototype.read_jxoshq$ = function (file_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$read_jxoshq$(this, file_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$read_jxoshq$($this, file_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
    this.local$props = props_0;
  }
  Coroutine$read_jxoshq$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_jxoshq$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_jxoshq$.prototype.constructor = Coroutine$read_jxoshq$;
  Coroutine$read_jxoshq$.prototype.doResume = function () {
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.readImageInWorker_1ooaqm$(openSync(this.result_0), this.local$props.copy_qp3p0u$(get_basename(this.local$file)), this);
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
  ImageFormat.prototype.encodeInWorker_hnx2ev$ = function (bitmap, props, continuation) {
    if (props === void 0)
      props = new ImageEncodingProps();
    return executeInWorker(ImageFormat$encodeInWorker$lambda(bitmap, props, this), continuation);
  };
  ImageFormat.prototype.toString = function () {
    return 'ImageFormat(' + this.extensions + ')';
  };
  ImageFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageFormat',
    interfaces: []
  };
  function ImageFormats(formats) {
    ImageFormat.call(this, ['']);
    this.formats = toSet(formats);
  }
  ImageFormats.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$, tmp$_0;
    tmp$ = this.formats.iterator();
    while (tmp$.hasNext()) {
      var format = tmp$.next();
      try {
        tmp$_0 = format.decodeHeader_1ooaqm$(sliceStart(s), props);
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
    var tmp$;
    tmp$ = this.formats.iterator();
    while (tmp$.hasNext()) {
      var format = tmp$.next();
      if (format.check_1ooaqm$(sliceStart(s), props)) {
        return format.readImage_1ooaqm$(sliceStart(s), props);
      }
    }
    throw UnsupportedOperationException_init('Not suitable image format : MAGIC:' + readString(sliceStart(s), 4, lang.ASCII) + '(' + get_hex_0(readBytes(sliceStart(s), 4)) + ') (' + toString_0(readBytes(sliceStart(s), 4), lang.ASCII) + ')');
  };
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  ImageFormats.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$;
    var ext = get_extensionLC(new PathInfo(props.filename));
    var $receiver = this.formats;
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
      var tmp$_1 = "Don't know how to generate file for extension '" + ext + "' (supported extensions ";
      var $receiver_0 = this.formats;
      var destination = ArrayList_init_0();
      var tmp$_2;
      tmp$_2 = $receiver_0.iterator();
      while (tmp$_2.hasNext()) {
        var element_0 = tmp$_2.next();
        var list = element_0.extensions;
        addAll(destination, list);
      }
      throw UnsupportedOperationException_init(tmp$_1 + destination + ') (props ' + props + ')');
    }
    var format = tmp$;
    format.writeImage_2psbf2$(image, s, props);
  };
  ImageFormats.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageFormats',
    interfaces: [ImageFormat]
  };
  function plus_3($receiver, format) {
    return new ImageFormats(plus_0($receiver.formats, format));
  }
  function plus_4($receiver, format) {
    return new ImageFormats(plus_1($receiver.formats, format));
  }
  function writeTo($receiver, file, formats, props, continuation) {
    if (props === void 0)
      props = new ImageEncodingProps();
    return file.writeBytes_bdsgvo$(formats.encode_hnx2ev$($receiver, props.copy_x69rha$(get_basename(file))), [], continuation);
  }
  function defaultImageFormats$lambda() {
    return new ImageFormats(StandardImageFormats);
  }
  var defaultImageFormats;
  function get_defaultImageFormats() {
    return defaultImageFormats.value;
  }
  function ImageFrame(bitmap, time, targetX, targetY, main) {
    if (time === void 0)
      time = L0;
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
    kind: Kind_CLASS,
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
      return new Size_init(numberToDouble(width), numberToDouble(height));
    }
  });
  ImageInfo.prototype.toString = function () {
    return 'ImageInfo(width=' + this.width + ', height=' + this.height + ', bpp=' + this.bitsPerPixel + ', extra=' + toString(this.extra) + ')';
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
    kind: Kind_CLASS,
    simpleName: 'ImageInfo',
    interfaces: [Extra]
  };
  function JPEG() {
    JPEG_instance = this;
    ImageFormat.call(this, ['jpg', 'jpeg']);
  }
  JPEG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    try {
      var info = JPEGDecoder$Companion_getInstance().decodeInfo_fqrh44$(readAll(s));
      var $receiver = new ImageInfo();
      $receiver.width = info.width;
      $receiver.height = info.height;
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
    return new ImageData(listOf_0(new ImageFrame(JPEGDecoder$Companion_getInstance().decode_fqrh44$(readAll(s)))));
  };
  JPEG.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    writeBytes(s, JPEGEncoder$Companion_getInstance().encode_gqk24z$(image.mainBitmap.toBMP32(), numberToInt(props.quality * 100)));
  };
  JPEG.$metadata$ = {
    kind: Kind_OBJECT,
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
  function JPEGDecoder() {
    JPEGDecoder$Companion_getInstance();
    this.dctZigZag_0 = new Int32Array([0, 1, 8, 16, 9, 2, 3, 10, 17, 24, 32, 25, 18, 11, 4, 5, 12, 19, 26, 33, 40, 48, 41, 34, 27, 20, 13, 6, 7, 14, 21, 28, 35, 42, 49, 56, 57, 50, 43, 36, 29, 22, 15, 23, 30, 37, 44, 51, 58, 59, 52, 45, 38, 31, 39, 46, 53, 60, 61, 54, 47, 55, 62, 63]);
    this.dctCos1_0 = 4017;
    this.dctSin1_0 = 799;
    this.dctCos3_0 = 3406;
    this.dctSin3_0 = 2276;
    this.dctCos6_0 = 1567;
    this.dctSin6_0 = 3784;
    this.dctSqrt2_0 = 5793;
    this.dctSqrt1d2_0 = 2896;
    this.width_0 = 0;
    this.height_0 = 0;
    this.jfif_0 = null;
    this.adobe_0 = null;
    this.components_0 = ArrayList_init_0();
    this.colorTransform_0 = null;
  }
  function JPEGDecoder$Jfif(versionMajor, versionMinor, densityUnits, xDensity, yDensity, thumbWidth, thumbHeight, thumbData) {
  }
  JPEGDecoder$Jfif.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Jfif',
    interfaces: []
  };
  function JPEGDecoder$Adobe(version, flags0, flags1, transformCode) {
    this.version = version;
    this.flags0 = flags0;
    this.flags1 = flags1;
    this.transformCode = transformCode;
  }
  JPEGDecoder$Adobe.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Adobe',
    interfaces: []
  };
  JPEGDecoder.prototype.mceil_0 = function (v) {
    return numberToInt(Math_0.ceil(v));
  };
  function JPEGDecoder$HuffmanNode(children, index) {
    if (children === void 0) {
      children = ArrayList_init_0();
    }
    if (index === void 0)
      index = 0;
    this.children = children;
    this.index = index;
  }
  JPEGDecoder$HuffmanNode.prototype.setChildAt_vux3hl$ = function (index, value) {
    while (this.children.size <= index)
      this.children.add_11rb$(Unit);
    this.children.set_wxm5ur$(index, value);
  };
  JPEGDecoder$HuffmanNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HuffmanNode',
    interfaces: []
  };
  JPEGDecoder$HuffmanNode.prototype.component1 = function () {
    return this.children;
  };
  JPEGDecoder$HuffmanNode.prototype.component2 = function () {
    return this.index;
  };
  JPEGDecoder$HuffmanNode.prototype.copy_e2afru$ = function (children, index) {
    return new JPEGDecoder$HuffmanNode(children === void 0 ? this.children : children, index === void 0 ? this.index : index);
  };
  JPEGDecoder$HuffmanNode.prototype.toString = function () {
    return 'HuffmanNode(children=' + Kotlin.toString(this.children) + (', index=' + Kotlin.toString(this.index)) + ')';
  };
  JPEGDecoder$HuffmanNode.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.children) | 0;
    result = result * 31 + Kotlin.hashCode(this.index) | 0;
    return result;
  };
  JPEGDecoder$HuffmanNode.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.children, other.children) && Kotlin.equals(this.index, other.index)))));
  };
  JPEGDecoder.prototype.buildHuffmanTable_0 = function (codeLengths, values) {
    var tmp$, tmp$_0;
    var k = 0;
    var code = ArrayList_init_0();
    var length = 16;
    while (true) {
      var tmp$_1 = length > 0;
      if (tmp$_1) {
        var n = length - 1 | 0;
        tmp$_1 = 0 === (codeLengths.data[n] & 255);
      }
      if (!tmp$_1)
        break;
      length = length - 1 | 0;
    }
    code.add_11rb$(new JPEGDecoder$HuffmanNode());
    var p = code.get_za3lpa$(0);
    var q;
    tmp$ = length;
    for (var i = 0; i < tmp$; i++) {
      tmp$_0 = codeLengths.data[i] & 255;
      for (var j = 0; j < tmp$_0; j++) {
        p = code.removeAt_za3lpa$(code.size - 1 | 0);
        var tmp$_2 = p;
        var tmp$_3 = p.index;
        var n_0 = k;
        tmp$_2.setChildAt_vux3hl$(tmp$_3, values.data[n_0] & 255);
        while (p.index > 0) {
          p = code.removeAt_za3lpa$(code.size - 1 | 0);
        }
        p.index = p.index + 1 | 0;
        code.add_11rb$(p);
        while (code.size <= i) {
          q = new JPEGDecoder$HuffmanNode();
          code.add_11rb$(q);
          p.setChildAt_vux3hl$(p.index, q.children);
          p = q;
        }
        k = k + 1 | 0;
      }
      if ((i + 1 | 0) < length) {
        q = new JPEGDecoder$HuffmanNode();
        code.add_11rb$(q);
        p.setChildAt_vux3hl$(p.index, q.children);
        p = q;
      }
    }
    return code.get_za3lpa$(0).children;
  };
  function JPEGDecoder$decodeScan$readBit(closure$bitsCount, closure$bitsData, closure$data, closure$offset) {
    return function () {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      if (closure$bitsCount.v > 0) {
        tmp$ = closure$bitsCount.v;
        closure$bitsCount.v = tmp$ - 1 | 0;
        return closure$bitsData.v >> closure$bitsCount.v & 1;
      }
      tmp$_1 = (tmp$_0 = closure$offset.v, closure$offset.v = tmp$_0 + 1 | 0, tmp$_0);
      closure$bitsData.v = closure$data.data[tmp$_1] & 255;
      if (closure$bitsData.v === 255) {
        tmp$_3 = (tmp$_2 = closure$offset.v, closure$offset.v = tmp$_2 + 1 | 0, tmp$_2);
        var nextByte = closure$data.data[tmp$_3] & 255;
        if (nextByte !== 0) {
          invalidOp('unexpected marker: ' + toString_1(closure$bitsData.v << 8 | nextByte, 16));
        }
      }
      closure$bitsCount.v = 7;
      return closure$bitsData.v >>> 7;
    };
  }
  function JPEGDecoder$decodeScan$decodeHuffman(closure$readBit) {
    return function (tree) {
      var tmp$;
      var node = tree;
      while (true) {
        var bit = closure$readBit();
        var res = node.get_za3lpa$(bit);
        if (typeof res === 'number')
          return res;
        else if (Kotlin.isType(res, List))
          node = Kotlin.isType(tmp$ = res, List) ? tmp$ : throwCCE();
        else
          invalidOp('invalid huffman sequence');
      }
    };
  }
  function JPEGDecoder$decodeScan$receive(closure$readBit) {
    return function (length) {
      var len = length;
      var n = 0;
      while (len > 0) {
        var bit = closure$readBit();
        n = n << 1 | bit;
        len = len - 1 | 0;
      }
      return n;
    };
  }
  function JPEGDecoder$decodeScan$receiveAndExtend(closure$receive) {
    return function (length) {
      var n = closure$receive(length);
      if (n >= 1 << length - 1)
        return n;
      return n + (-1 << length) + 1 | 0;
    };
  }
  function JPEGDecoder$decodeScan$decodeBaseline(closure$decodeHuffman, closure$receiveAndExtend, this$JPEGDecoder) {
    return function (component, zz) {
      var t = closure$decodeHuffman(component.huffmanTableDC);
      var diff = t === 0 ? 0 : closure$receiveAndExtend(t);
      component.pred = component.pred + diff | 0;
      zz[0] = component.pred;
      var k = 1;
      while (k < 64) {
        var rs = closure$decodeHuffman(component.huffmanTableAC);
        var s = rs & 15;
        var r = rs >> 4;
        if (s === 0) {
          if (r < 15)
            break;
          k = k + 16 | 0;
          continue;
        }
        k = k + r | 0;
        var z = this$JPEGDecoder.dctZigZag_0[k];
        zz[z] = closure$receiveAndExtend(s);
        k = k + 1 | 0;
      }
    };
  }
  function JPEGDecoder$decodeScan$decodeDCFirst(closure$decodeHuffman, closure$receiveAndExtend, closure$successive) {
    return function (component, zz) {
      var t = closure$decodeHuffman(component.huffmanTableDC);
      var diff = t === 0 ? 0 : closure$receiveAndExtend(t) << closure$successive;
      component.pred = component.pred + diff | 0;
      zz[0] = component.pred;
    };
  }
  function JPEGDecoder$decodeScan$decodeDCSuccessive(closure$readBit, closure$successive) {
    return function (component, zz) {
      zz[0] = zz[0] | closure$readBit() << closure$successive;
    };
  }
  function JPEGDecoder$decodeScan$decodeACFirst(closure$eobrun, closure$spectralStart, closure$spectralEnd, closure$decodeHuffman, closure$receive, this$JPEGDecoder, closure$receiveAndExtend, closure$successive) {
    return function (component, zz) {
      var tmp$;
      if (closure$eobrun.v > 0) {
        tmp$ = closure$eobrun.v;
        closure$eobrun.v = tmp$ - 1 | 0;
        return;
      }
      var k = closure$spectralStart;
      var e = closure$spectralEnd;
      while (k <= e) {
        var rs = closure$decodeHuffman(component.huffmanTableAC);
        var s = rs & 15;
        var r = rs >> 4;
        if (s === 0) {
          if (r < 15) {
            closure$eobrun.v = closure$receive(r) + (1 << r) - 1 | 0;
            break;
          }
          k = k + 16 | 0;
          continue;
        }
        k = k + r | 0;
        var z = this$JPEGDecoder.dctZigZag_0[k];
        zz[z] = Kotlin.imul(closure$receiveAndExtend(s), 1 << closure$successive);
        k = k + 1 | 0;
      }
    };
  }
  function JPEGDecoder$decodeScan$decodeACSuccessive(closure$spectralStart, closure$spectralEnd, this$JPEGDecoder, closure$successiveACState, closure$decodeHuffman, closure$receive, closure$eobrun, closure$receiveAndExtend, closure$successiveACNextValue, closure$readBit, closure$successive) {
    return function (component, zz) {
      var tmp$;
      var k = closure$spectralStart;
      var e = closure$spectralEnd;
      var r = 0;
      loop: while (k <= e) {
        var z = this$JPEGDecoder.dctZigZag_0[k];
        var direction = zz[z] < 0 ? -1 : 1;
        switch (closure$successiveACState.v) {
          case 0:
            var rs = closure$decodeHuffman(component.huffmanTableAC);
            var s = rs & 15;
            r = rs >> 4;
            if (s === 0) {
              if (r < 15) {
                closure$eobrun.v = closure$receive(r) + (1 << r) | 0;
                closure$successiveACState.v = 4;
              }
               else {
                r = 16;
                closure$successiveACState.v = 1;
              }
            }
             else {
              if (s !== 1)
                invalidOp('invalid ACn encoding');
              closure$successiveACNextValue.v = closure$receiveAndExtend(s);
              closure$successiveACState.v = r !== 0 ? 2 : 3;
            }

            continue loop;
          case 1:
          case 2:
            if (zz[z] !== 0)
              zz[z] = zz[z] + Kotlin.imul(closure$readBit() << closure$successive, direction) | 0;
            else {
              r = r - 1 | 0;
              if (r === 0)
                closure$successiveACState.v = closure$successiveACState.v === 2 ? 3 : 0;
            }

            break;
          case 3:
            if (zz[z] !== 0)
              zz[z] = zz[z] + Kotlin.imul(closure$readBit() << closure$successive, direction) | 0;
            else {
              zz[z] = closure$successiveACNextValue.v << closure$successive;
              closure$successiveACState.v = 0;
            }

            break;
          case 4:
            if (zz[z] !== 0)
              zz[z] = zz[z] + Kotlin.imul(closure$readBit() << closure$successive, direction) | 0;
            break;
        }
        k = k + 1 | 0;
      }
      if (closure$successiveACState.v === 4) {
        tmp$ = closure$eobrun.v;
        closure$eobrun.v = tmp$ - 1 | 0;
        if (closure$eobrun.v === 0)
          closure$successiveACState.v = 0;
      }
    };
  }
  function JPEGDecoder$decodeScan$decodeMcu(closure$mcusPerLine) {
    return function (component, decode, mcu, row, col) {
      var mcuRow = mcu / closure$mcusPerLine | 0 | 0;
      var mcuCol = mcu % closure$mcusPerLine;
      var blockRow = Kotlin.imul(mcuRow, component.v) + row | 0;
      var blockCol = Kotlin.imul(mcuCol, component.h) + col | 0;
      decode(component, component.blocks.get_za3lpa$(blockRow).get_za3lpa$(blockCol));
    };
  }
  function JPEGDecoder$decodeScan$decodeBlock(component, decode, mcu) {
    var blockRow = mcu / component.blocksPerLine | 0 | 0;
    var blockCol = mcu % component.blocksPerLine;
    decode(component, component.blocks.get_za3lpa$(blockRow).get_za3lpa$(blockCol));
  }
  JPEGDecoder.prototype.decodeScan_0 = function (data, offset, frame, components, resetInterval, spectralStart, spectralEnd, successivePrev, successive) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var resetInterval_0 = resetInterval;
    var offset_0 = {v: offset};
    var mcusPerLine = frame.mcusPerLine;
    var progressive = frame.progressive;
    var startOffset = offset_0.v;
    var bitsData = {v: 0};
    var bitsCount = {v: 0};
    var readBit = JPEGDecoder$decodeScan$readBit(bitsCount, bitsData, data, offset_0);
    var decodeHuffman = JPEGDecoder$decodeScan$decodeHuffman(readBit);
    var receive = JPEGDecoder$decodeScan$receive(readBit);
    var receiveAndExtend = JPEGDecoder$decodeScan$receiveAndExtend(receive);
    var decodeBaseline = JPEGDecoder$decodeScan$decodeBaseline(decodeHuffman, receiveAndExtend, this);
    var decodeDCFirst = JPEGDecoder$decodeScan$decodeDCFirst(decodeHuffman, receiveAndExtend, successive);
    var decodeDCSuccessive = JPEGDecoder$decodeScan$decodeDCSuccessive(readBit, successive);
    var eobrun = {v: 0};
    var decodeACFirst = JPEGDecoder$decodeScan$decodeACFirst(eobrun, spectralStart, spectralEnd, decodeHuffman, receive, this, receiveAndExtend, successive);
    var successiveACState = {v: 0};
    var successiveACNextValue = {v: 0};
    var decodeACSuccessive = JPEGDecoder$decodeScan$decodeACSuccessive(spectralStart, spectralEnd, this, successiveACState, decodeHuffman, receive, eobrun, receiveAndExtend, successiveACNextValue, readBit, successive);
    var decodeMcu = JPEGDecoder$decodeScan$decodeMcu(mcusPerLine);
    var decodeBlock = JPEGDecoder$decodeScan$decodeBlock;
    var componentsLength = components.size;
    var component;
    if (progressive) {
      tmp$ = spectralStart === 0 ? successivePrev === 0 ? getCallableRef('decodeDCFirst', function (component, zz) {
        return decodeDCFirst(component, zz), Unit;
      }) : getCallableRef('decodeDCSuccessive', function (component, zz) {
        return decodeDCSuccessive(component, zz), Unit;
      }) : successivePrev === 0 ? getCallableRef('decodeACFirst', function (component, zz) {
        return decodeACFirst(component, zz), Unit;
      }) : getCallableRef('decodeACSuccessive', function (component, zz) {
        return decodeACSuccessive(component, zz), Unit;
      });
    }
     else {
      tmp$ = getCallableRef('decodeBaseline', function (component, zz) {
        return decodeBaseline(component, zz), Unit;
      });
    }
    var decodeFn = tmp$;
    var mcu = 0;
    if (componentsLength === 1) {
      tmp$_0 = Kotlin.imul(components.get_za3lpa$(0).blocksPerLine, components.get_za3lpa$(0).blocksPerColumn);
    }
     else {
      tmp$_0 = Kotlin.imul(mcusPerLine, frame.mcusPerColumn);
    }
    var mcuExpected = tmp$_0;
    if (resetInterval_0 === 0) {
      resetInterval_0 = mcuExpected;
    }
    var h;
    var v;
    while (mcu < mcuExpected) {
      for (var i = 0; i < componentsLength; i++)
        components.get_za3lpa$(i).pred = 0;
      eobrun.v = 0;
      if (componentsLength === 1) {
        component = components.get_za3lpa$(0);
        tmp$_1 = resetInterval_0;
        for (var n = 0; n < tmp$_1; n++) {
          decodeBlock(component, decodeFn, mcu);
          mcu = mcu + 1 | 0;
        }
      }
       else {
        tmp$_2 = resetInterval_0;
        for (var n_0 = 0; n_0 < tmp$_2; n_0++) {
          for (var i_0 = 0; i_0 < componentsLength; i_0++) {
            component = components.get_za3lpa$(i_0);
            h = component.h;
            v = component.v;
            for (var j = 0; j < v; j++) {
              for (var k = 0; k < h; k++) {
                decodeMcu(component, decodeFn, mcu, j, k);
              }
            }
          }
          mcu = mcu + 1 | 0;
          if (mcu === mcuExpected)
            break;
        }
      }
      bitsCount.v = 0;
      var n_1 = offset_0.v;
      var tmp$_3 = (data.data[n_1] & 255) << 8;
      var n_2 = offset_0.v + 1 | 0;
      var marker = tmp$_3 | data.data[n_2] & 255;
      if (marker < 65280) {
        invalidOp('marker was not found');
      }
      if (65488 <= marker && marker <= 65495) {
        offset_0.v = offset_0.v + 2 | 0;
      }
       else {
        break;
      }
    }
    return offset_0.v - startOffset | 0;
  };
  function JPEGDecoder$buildComponentData$quantizeAndInverse(closure$component, this$JPEGDecoder) {
    return function (zz, dataOut, dataIn) {
      var qt = closure$component.quantizationTable;
      var v0;
      var v1;
      var v2;
      var v3;
      var v4;
      var v5;
      var v6;
      var v7;
      var t;
      var p = dataIn;
      for (var i = 0; i < 64; i++)
        p[i] = Kotlin.imul(zz[i], qt[i]);
      for (var i_0 = 0; i_0 < 8; i_0++) {
        var row = 8 * i_0 | 0;
        if (p[1 + row | 0] === 0 && p[2 + row | 0] === 0 && p[3 + row | 0] === 0 && p[4 + row | 0] === 0 && p[5 + row | 0] === 0 && p[6 + row | 0] === 0 && p[7 + row | 0] === 0) {
          t = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, p[0 + row | 0]) + 512 >> 10;
          p[0 + row | 0] = t;
          p[1 + row | 0] = t;
          p[2 + row | 0] = t;
          p[3 + row | 0] = t;
          p[4 + row | 0] = t;
          p[5 + row | 0] = t;
          p[6 + row | 0] = t;
          p[7 + row | 0] = t;
          continue;
        }
        v0 = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, p[0 + row | 0]) + 128 >> 8;
        v1 = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, p[4 + row | 0]) + 128 >> 8;
        v2 = p[2 + row | 0];
        v3 = p[6 + row | 0];
        v4 = Kotlin.imul(this$JPEGDecoder.dctSqrt1d2_0, p[1 + row | 0] - p[7 + row | 0] | 0) + 128 >> 8;
        v7 = Kotlin.imul(this$JPEGDecoder.dctSqrt1d2_0, p[1 + row | 0] + p[7 + row | 0] | 0) + 128 >> 8;
        v5 = p[3 + row | 0] << 4;
        v6 = p[5 + row | 0] << 4;
        t = v0 - v1 + 1 >> 1;
        v0 = v0 + v1 + 1 >> 1;
        v1 = t;
        t = Kotlin.imul(v2, this$JPEGDecoder.dctSin6_0) + Kotlin.imul(v3, this$JPEGDecoder.dctCos6_0) + 128 >> 8;
        v2 = Kotlin.imul(v2, this$JPEGDecoder.dctCos6_0) - Kotlin.imul(v3, this$JPEGDecoder.dctSin6_0) + 128 >> 8;
        v3 = t;
        t = v4 - v6 + 1 >> 1;
        v4 = v4 + v6 + 1 >> 1;
        v6 = t;
        t = v7 + v5 + 1 >> 1;
        v5 = v7 - v5 + 1 >> 1;
        v7 = t;
        t = v0 - v3 + 1 >> 1;
        v0 = v0 + v3 + 1 >> 1;
        v3 = t;
        t = v1 - v2 + 1 >> 1;
        v1 = v1 + v2 + 1 >> 1;
        v2 = t;
        t = Kotlin.imul(v4, this$JPEGDecoder.dctSin3_0) + Kotlin.imul(v7, this$JPEGDecoder.dctCos3_0) + 2048 >> 12;
        v4 = Kotlin.imul(v4, this$JPEGDecoder.dctCos3_0) - Kotlin.imul(v7, this$JPEGDecoder.dctSin3_0) + 2048 >> 12;
        v7 = t;
        t = Kotlin.imul(v5, this$JPEGDecoder.dctSin1_0) + Kotlin.imul(v6, this$JPEGDecoder.dctCos1_0) + 2048 >> 12;
        v5 = Kotlin.imul(v5, this$JPEGDecoder.dctCos1_0) - Kotlin.imul(v6, this$JPEGDecoder.dctSin1_0) + 2048 >> 12;
        v6 = t;
        p[0 + row | 0] = v0 + v7 | 0;
        p[7 + row | 0] = v0 - v7 | 0;
        p[1 + row | 0] = v1 + v6 | 0;
        p[6 + row | 0] = v1 - v6 | 0;
        p[2 + row | 0] = v2 + v5 | 0;
        p[5 + row | 0] = v2 - v5 | 0;
        p[3 + row | 0] = v3 + v4 | 0;
        p[4 + row | 0] = v3 - v4 | 0;
      }
      for (var col = 0; col < 8; col++) {
        if (p[8 + col | 0] === 0 && p[16 + col | 0] === 0 && p[24 + col | 0] === 0 && p[32 + col | 0] === 0 && p[40 + col | 0] === 0 && p[48 + col | 0] === 0 && p[56 + col | 0] === 0) {
          t = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, dataIn[col + 0 | 0]) + 8192 >> 14;
          p[0 + col | 0] = t;
          p[8 + col | 0] = t;
          p[16 + col | 0] = t;
          p[24 + col | 0] = t;
          p[32 + col | 0] = t;
          p[40 + col | 0] = t;
          p[48 + col | 0] = t;
          p[56 + col | 0] = t;
          continue;
        }
        v0 = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, p[0 + col | 0]) + 2048 >> 12;
        v1 = Kotlin.imul(this$JPEGDecoder.dctSqrt2_0, p[32 + col | 0]) + 2048 >> 12;
        v2 = p[16 + col | 0];
        v3 = p[48 + col | 0];
        v4 = Kotlin.imul(this$JPEGDecoder.dctSqrt1d2_0, p[8 + col | 0] - p[56 + col | 0] | 0) + 2048 >> 12;
        v7 = Kotlin.imul(this$JPEGDecoder.dctSqrt1d2_0, p[8 + col | 0] + p[56 + col | 0] | 0) + 2048 >> 12;
        v5 = p[24 + col | 0];
        v6 = p[40 + col | 0];
        t = v0 - v1 + 1 >> 1;
        v0 = v0 + v1 + 1 >> 1;
        v1 = t;
        t = Kotlin.imul(v2, this$JPEGDecoder.dctSin6_0) + Kotlin.imul(v3, this$JPEGDecoder.dctCos6_0) + 2048 >> 12;
        v2 = Kotlin.imul(v2, this$JPEGDecoder.dctCos6_0) - Kotlin.imul(v3, this$JPEGDecoder.dctSin6_0) + 2048 >> 12;
        v3 = t;
        t = v4 - v6 + 1 >> 1;
        v4 = v4 + v6 + 1 >> 1;
        v6 = t;
        t = v7 + v5 + 1 >> 1;
        v5 = v7 - v5 + 1 >> 1;
        v7 = t;
        t = v0 - v3 + 1 >> 1;
        v0 = v0 + v3 + 1 >> 1;
        v3 = t;
        t = v1 - v2 + 1 >> 1;
        v1 = v1 + v2 + 1 >> 1;
        v2 = t;
        t = Kotlin.imul(v4, this$JPEGDecoder.dctSin3_0) + Kotlin.imul(v7, this$JPEGDecoder.dctCos3_0) + 2048 >> 12;
        v4 = Kotlin.imul(v4, this$JPEGDecoder.dctCos3_0) - Kotlin.imul(v7, this$JPEGDecoder.dctSin3_0) + 2048 >> 12;
        v7 = t;
        t = Kotlin.imul(v5, this$JPEGDecoder.dctSin1_0) + Kotlin.imul(v6, this$JPEGDecoder.dctCos1_0) + 2048 >> 12;
        v5 = Kotlin.imul(v5, this$JPEGDecoder.dctCos1_0) - Kotlin.imul(v6, this$JPEGDecoder.dctSin1_0) + 2048 >> 12;
        v6 = t;
        p[0 + col | 0] = v0 + v7 | 0;
        p[56 + col | 0] = v0 - v7 | 0;
        p[8 + col | 0] = v1 + v6 | 0;
        p[48 + col | 0] = v1 - v6 | 0;
        p[16 + col | 0] = v2 + v5 | 0;
        p[40 + col | 0] = v2 - v5 | 0;
        p[24 + col | 0] = v3 + v4 | 0;
        p[32 + col | 0] = v3 - v4 | 0;
      }
      for (var i_1 = 0; i_1 < 64; i_1++) {
        var sample = 128 + (p[i_1] + 8 >> 4) | 0;
        var v = sample < 0 ? 0 : sample > 255 ? 255 : sample;
        dataOut.data[i_1] = toByte(v);
      }
    };
  }
  JPEGDecoder.prototype.buildComponentData_0 = function (frame, component) {
    var tmp$, tmp$_0;
    var lines = ArrayList_init_0();
    var blocksPerLine = component.blocksPerLine;
    var blocksPerColumn = component.blocksPerColumn;
    var samplesPerLine = blocksPerLine << 3;
    var rr = new Int32Array(64);
    var r = UByteArray_init(64);
    var quantizeAndInverse = JPEGDecoder$buildComponentData$quantizeAndInverse(component, this);
    for (var blockRow = 0; blockRow < blocksPerColumn; blockRow++) {
      var scanLine = blockRow << 3;
      for (var i = 0; i < 8; i++)
        lines.add_11rb$(UByteArray_init(samplesPerLine));
      for (var blockCol = 0; blockCol < blocksPerLine; blockCol++) {
        quantizeAndInverse(component.blocks.get_za3lpa$(blockRow).get_za3lpa$(blockCol), r, rr);
        var offset = 0;
        var sample = blockCol << 3;
        for (var j = 0; j < 8; j++) {
          var line = lines.get_za3lpa$(scanLine + j | 0);
          for (var i_0 = 0; i_0 < 8; i_0++) {
            tmp$_0 = (tmp$ = offset, offset = tmp$ + 1 | 0, tmp$);
            var tmp$_1 = sample + i_0 | 0;
            var v = r.data[tmp$_0] & 255;
            line.data[tmp$_1] = toByte(v);
          }
        }
      }
    }
    return lines;
  };
  JPEGDecoder.prototype.clampTo8bit_0 = function (a) {
    return a < 0 ? 0 : a > 255 ? 255 : a;
  };
  JPEGDecoder.prototype.subarray_0 = function ($receiver, from, to) {
    return new UByteArray($receiver.data.slice(from, to));
  };
  function JPEGDecoder$FrameComponent(h, v, quantizationIdx) {
    this.h = h;
    this.v = v;
    this.quantizationIdx = quantizationIdx;
    this.huffmanTableDC = emptyList();
    this.huffmanTableAC = emptyList();
    this.quantizationTable = new Int32Array(0);
    this.pred = 0;
    this.blocksPerLine = 0;
    this.blocksPerColumn = 0;
    this.blocks = emptyList();
  }
  JPEGDecoder$FrameComponent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameComponent',
    interfaces: []
  };
  function JPEGDecoder$Frame(extended, progressive, precision, scanLines, samplesPerLine, components, componentsOrder, maxH, maxV) {
    if (maxH === void 0)
      maxH = 0;
    if (maxV === void 0)
      maxV = 0;
    this.extended = extended;
    this.progressive = progressive;
    this.precision = precision;
    this.scanLines = scanLines;
    this.samplesPerLine = samplesPerLine;
    this.components = components;
    this.componentsOrder = componentsOrder;
    this.maxH = maxH;
    this.maxV = maxV;
    this.mcusPerLine = 0;
    this.mcusPerColumn = 0;
  }
  JPEGDecoder$Frame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Frame',
    interfaces: []
  };
  function JPEGDecoder$parse$readUint16(closure$data, closure$offset) {
    return function () {
      var $this = closure$data;
      var n = closure$offset.v;
      var tmp$ = ($this.data[n] & 255) << 8;
      var $this_0 = closure$data;
      var n_0 = closure$offset.v + 1 | 0;
      var value = tmp$ | $this_0.data[n_0] & 255;
      closure$offset.v = closure$offset.v + 2 | 0;
      return value;
    };
  }
  function JPEGDecoder$parse$readDataBlock(closure$readUint16, closure$data, closure$offset) {
    return function () {
      var len = closure$readUint16();
      var $receiver = closure$data.data;
      var fromIndex = closure$offset.v;
      var toIndex = closure$offset.v + len - 2 | 0;
      var array = new UByteArray($receiver.slice(fromIndex, toIndex));
      closure$offset.v = closure$offset.v + array.size | 0;
      return array;
    };
  }
  function JPEGDecoder$parse$prepareComponents(this$JPEGDecoder) {
    return function (frame) {
      var tmp$, tmp$_0;
      var maxH = 0;
      var maxV = 0;
      tmp$ = frame.components.iterator();
      while (tmp$.hasNext()) {
        var component = tmp$.next();
        if (maxH < component.h)
          maxH = component.h;
        if (maxV < component.v)
          maxV = component.v;
      }
      var mcusPerLine = this$JPEGDecoder.mceil_0(frame.samplesPerLine / 8.0 / maxH);
      var mcusPerColumn = this$JPEGDecoder.mceil_0(frame.scanLines / 8.0 / maxV);
      tmp$_0 = frame.components.iterator();
      while (tmp$_0.hasNext()) {
        var component_0 = tmp$_0.next();
        var blocksPerLine = this$JPEGDecoder.mceil_0(this$JPEGDecoder.mceil_0(frame.samplesPerLine / 8.0) * component_0.h / maxH);
        var blocksPerColumn = this$JPEGDecoder.mceil_0(this$JPEGDecoder.mceil_0(frame.scanLines / 8.0) * component_0.v / maxV);
        var blocksPerLineForMcu = Kotlin.imul(mcusPerLine, component_0.h);
        var blocksPerColumnForMcu = Kotlin.imul(mcusPerColumn, component_0.v);
        var blocks = ArrayList_init_0();
        for (var i = 0; i < blocksPerColumnForMcu; i++) {
          var row = ArrayList_init_0();
          for (var j = 0; j < blocksPerLineForMcu; j++)
            row.add_11rb$(new Int32Array(64));
          blocks.add_11rb$(row);
        }
        component_0.blocksPerLine = blocksPerLine;
        component_0.blocksPerColumn = blocksPerColumn;
        component_0.blocks = blocks;
      }
      frame.maxH = maxH;
      frame.maxV = maxV;
      frame.mcusPerLine = mcusPerLine;
      frame.mcusPerColumn = mcusPerColumn;
    };
  }
  JPEGDecoder.prototype.parse_dctkei$ = function (data) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15;
    var offset = {v: 0};
    var readUint16 = JPEGDecoder$parse$readUint16(data, offset);
    var readDataBlock = JPEGDecoder$parse$readDataBlock(readUint16, data, offset);
    var prepareComponents = JPEGDecoder$parse$prepareComponents(this);
    var jfif = null;
    var adobe = null;
    var frame;
    var resetInterval = 0;
    var $receiver = until(0, 16);
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
    var tmp$_16;
    tmp$_16 = $receiver.iterator();
    while (tmp$_16.hasNext()) {
      var item = tmp$_16.next();
      destination.add_11rb$(new Int32Array(0));
    }
    var quantizationTables = ArrayList_init(destination);
    var frames = ArrayList_init_0();
    var $receiver_0 = until(0, 16);
    var destination_0 = ArrayList_init_1(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_17;
    tmp$_17 = $receiver_0.iterator();
    while (tmp$_17.hasNext()) {
      var item_0 = tmp$_17.next();
      destination_0.add_11rb$(emptyList());
    }
    var huffmanTablesAC = ArrayList_init(destination_0);
    var $receiver_1 = until(0, 16);
    var destination_1 = ArrayList_init_1(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_18;
    tmp$_18 = $receiver_1.iterator();
    while (tmp$_18.hasNext()) {
      var item_1 = tmp$_18.next();
      destination_1.add_11rb$(emptyList());
    }
    var huffmanTablesDC = ArrayList_init(destination_1);
    var fileMarker = readUint16();
    if (fileMarker !== 65496) {
      invalidOp('SOI not found');
    }
    fileMarker = readUint16();
    while (fileMarker !== 65497) {
      switch (fileMarker) {
        case 65280:
          break;
        case 65504:
        case 65505:
        case 65506:
        case 65507:
        case 65508:
        case 65509:
        case 65510:
        case 65511:
        case 65512:
        case 65513:
        case 65514:
        case 65515:
        case 65516:
        case 65517:
        case 65518:
        case 65519:
        case 65534:
          var appData = readDataBlock();
          if (fileMarker === 65504) {
            var tmp$_19 = (appData.data[0] & 255) === 74;
            if (tmp$_19) {
              tmp$_19 = (appData.data[1] & 255) === 70;
            }
            var tmp$_20 = tmp$_19;
            if (tmp$_20) {
              tmp$_20 = (appData.data[2] & 255) === 73;
            }
            var tmp$_21 = tmp$_20;
            if (tmp$_21) {
              tmp$_21 = (appData.data[3] & 255) === 70;
            }
            var tmp$_22 = tmp$_21;
            if (tmp$_22) {
              tmp$_22 = (appData.data[4] & 255) === 0;
            }
            if (tmp$_22) {
              jfif = new JPEGDecoder$Jfif(appData.data[5] & 255, appData.data[6] & 255, appData.data[7] & 255, (appData.data[8] & 255) << 8 | appData.data[9] & 255, (appData.data[10] & 255) << 8 | appData.data[11] & 255, appData.data[12] & 255, appData.data[13] & 255, this.subarray_0(appData, 14, 14 + Kotlin.imul(3 * (appData.data[12] & 255) | 0, appData.data[13] & 255) | 0));
            }
          }

          if (fileMarker === 65518) {
            var tmp$_23 = (appData.data[0] & 255) === 65;
            if (tmp$_23) {
              tmp$_23 = (appData.data[1] & 255) === 100;
            }
            var tmp$_24 = tmp$_23;
            if (tmp$_24) {
              tmp$_24 = (appData.data[2] & 255) === 111;
            }
            var tmp$_25 = tmp$_24;
            if (tmp$_25) {
              tmp$_25 = (appData.data[3] & 255) === 98;
            }
            var tmp$_26 = tmp$_25;
            if (tmp$_26) {
              tmp$_26 = (appData.data[4] & 255) === 101;
            }
            var tmp$_27 = tmp$_26;
            if (tmp$_27) {
              tmp$_27 = (appData.data[5] & 255) === 0;
            }
            if (tmp$_27) {
              adobe = new JPEGDecoder$Adobe(appData.data[6] & 255, (appData.data[7] & 255) << 8 | appData.data[8] & 255, (appData.data[9] & 255) << 8 | appData.data[10] & 255, (appData.data[11] & 255) !== 0);
            }
          }

          break;
        case 65499:
          var quantizationTablesLength = readUint16();
          var quantizationTablesEnd = quantizationTablesLength + offset.v - 2 | 0;
          while (offset.v < quantizationTablesEnd) {
            var n = (tmp$ = offset.v, offset.v = tmp$ + 1 | 0, tmp$);
            var quantizationTableSpec = data.data[n] & 255;
            var tableData = new Int32Array(64);
            switch (quantizationTableSpec >> 4) {
              case 0:
                for (var j = 0; j < 64; j++) {
                  tmp$_1 = this.dctZigZag_0[j];
                  var n_0 = (tmp$_0 = offset.v, offset.v = tmp$_0 + 1 | 0, tmp$_0);
                  tableData[tmp$_1] = data.data[n_0] & 255;
                }

                break;
              case 1:
                for (var j_0 = 0; j_0 < 64; j_0++)
                  tableData[this.dctZigZag_0[j_0]] = readUint16();
                break;
              default:invalidOp('DQT: invalid table spec');
                break;
            }
            quantizationTables.set_wxm5ur$(quantizationTableSpec & 15, tableData);
          }

          break;
        case 65472:
        case 65473:
        case 65474:
          readUint16();
          var n_1 = (tmp$_2 = offset.v, offset.v = tmp$_2 + 1 | 0, tmp$_2);
          frame = new JPEGDecoder$Frame(fileMarker === 65473, fileMarker === 65474, data.data[n_1] & 255, readUint16(), readUint16(), ArrayList_init_0(), ArrayList_init_0());
          var n_2 = (tmp$_3 = offset.v, offset.v = tmp$_3 + 1 | 0, tmp$_3);
          var componentsCount = data.data[n_2] & 255;
          var componentId;
          for (var i = 0; i < componentsCount; i++) {
            var n_3 = offset.v;
            componentId = data.data[n_3] & 255;
            var n_4 = offset.v + 1 | 0;
            var h = (data.data[n_4] & 255) >> 4;
            var n_5 = offset.v + 1 | 0;
            var v = data.data[n_5] & 255 & 15;
            var n_6 = offset.v + 2 | 0;
            var qId = data.data[n_6] & 255;
            (frame == null ? throwUPAE('frame') : frame).componentsOrder.add_11rb$(componentId);
            while ((frame == null ? throwUPAE('frame') : frame).components.size <= componentId)
              (frame == null ? throwUPAE('frame') : frame).components.add_11rb$(new JPEGDecoder$FrameComponent(0, 0, 0));
            (frame == null ? throwUPAE('frame') : frame).components.set_wxm5ur$(componentId, new JPEGDecoder$FrameComponent(h, v, qId));
            offset.v = offset.v + 3 | 0;
          }

          prepareComponents(frame == null ? throwUPAE('frame') : frame);
          frames.add_11rb$(frame == null ? throwUPAE('frame') : frame);
          break;
        case 65476:
          var huffmanLength = readUint16();
          var i_0 = 2;
          while (i_0 < huffmanLength) {
            var n_7 = (tmp$_4 = offset.v, offset.v = tmp$_4 + 1 | 0, tmp$_4);
            var huffmanTableSpec = data.data[n_7] & 255;
            var codeLengths = UByteArray_init(16);
            var codeLengthSum = 0;
            for (var j_1 = 0; j_1 < 16; j_1++) {
              var n_8 = offset.v;
              var v_0 = data.data[n_8] & 255;
              codeLengths.data[j_1] = toByte(v_0);
              codeLengthSum = codeLengthSum + (codeLengths.data[j_1] & 255) | 0;
              offset.v = offset.v + 1 | 0;
            }
            var huffmanValues = UByteArray_init(codeLengthSum);
            tmp$_5 = codeLengthSum;
            for (var j_2 = 0; j_2 < tmp$_5; j_2++) {
              var n_9 = offset.v;
              var v_1 = data.data[n_9] & 255;
              huffmanValues.data[j_2] = toByte(v_1);
              offset.v = offset.v + 1 | 0;
            }
            i_0 = i_0 + (17 + codeLengthSum) | 0;
            var table = huffmanTableSpec >> 4 === 0 ? huffmanTablesDC : huffmanTablesAC;
            table.set_wxm5ur$(huffmanTableSpec & 15, this.buildHuffmanTable_0(codeLengths, huffmanValues));
          }

          break;
        case 65501:
          readUint16();
          resetInterval = readUint16();
          break;
        case 65498:
          var scanLength = readUint16();
          var n_10 = (tmp$_6 = offset.v, offset.v = tmp$_6 + 1 | 0, tmp$_6);
          var selectorsCount = data.data[n_10] & 255;
          var components = ArrayList_init_0();
          var component;
          for (var i_1 = 0; i_1 < selectorsCount; i_1++) {
            tmp$_8 = (frame == null ? throwUPAE('frame') : frame).components;
            var n_11 = (tmp$_7 = offset.v, offset.v = tmp$_7 + 1 | 0, tmp$_7);
            component = tmp$_8.get_za3lpa$(data.data[n_11] & 255);
            var n_12 = (tmp$_9 = offset.v, offset.v = tmp$_9 + 1 | 0, tmp$_9);
            var tableSpec = data.data[n_12] & 255;
            component.huffmanTableDC = huffmanTablesDC.get_za3lpa$(tableSpec >> 4);
            component.huffmanTableAC = huffmanTablesAC.get_za3lpa$(tableSpec & 15);
            components.add_11rb$(component);
          }

          var n_13 = (tmp$_10 = offset.v, offset.v = tmp$_10 + 1 | 0, tmp$_10);
          var spectralStart = data.data[n_13] & 255;
          var n_14 = (tmp$_11 = offset.v, offset.v = tmp$_11 + 1 | 0, tmp$_11);
          var spectralEnd = data.data[n_14] & 255;
          var n_15 = (tmp$_12 = offset.v, offset.v = tmp$_12 + 1 | 0, tmp$_12);
          var successiveApproximation = data.data[n_15] & 255;
          var processed = this.decodeScan_0(data, offset.v, frame == null ? throwUPAE('frame') : frame, components, resetInterval, spectralStart, spectralEnd, successiveApproximation >> 4, successiveApproximation & 15);
          offset.v = offset.v + processed | 0;
          break;
        default:var n_16 = offset.v - 3 | 0;
          var tmp$_28 = (data.data[n_16] & 255) === 255;
          if (tmp$_28) {
            var n_17 = offset.v - 2 | 0;
            tmp$_28 = (data.data[n_17] & 255) >= 192;
          }

          var tmp$_29 = tmp$_28;
          if (tmp$_29) {
            var n_18 = offset.v - 2 | 0;
            tmp$_29 = (data.data[n_18] & 255) <= 254;
          }

          if (tmp$_29) {
            offset.v = offset.v - 3 | 0;
          }
           else {
            invalidOp('unknown JPEG marker ' + toString_1(fileMarker, 16));
          }

          break;
      }
      fileMarker = readUint16();
    }
    if (frames.size !== 1)
      invalidOp('only single frame JPEGs supported');
    tmp$_13 = frames.size;
    for (var i_2 = 0; i_2 < tmp$_13; i_2++) {
      var cp = frames.get_za3lpa$(i_2).components;
      tmp$_14 = cp.iterator();
      while (tmp$_14.hasNext()) {
        var c = tmp$_14.next();
        c.quantizationTable = quantizationTables.get_za3lpa$(c.quantizationIdx);
        c.quantizationIdx = -1;
      }
    }
    this.width_0 = (frame == null ? throwUPAE('frame') : frame).samplesPerLine;
    this.height_0 = (frame == null ? throwUPAE('frame') : frame).scanLines;
    this.jfif_0 = jfif;
    this.adobe_0 = adobe;
    this.components_0 = ArrayList_init_0();
    tmp$_15 = (frame == null ? throwUPAE('frame') : frame).componentsOrder.size;
    for (var i_3 = 0; i_3 < tmp$_15; i_3++) {
      var component_0 = (frame == null ? throwUPAE('frame') : frame).components.get_za3lpa$((frame == null ? throwUPAE('frame') : frame).componentsOrder.get_za3lpa$(i_3));
      this.components_0.add_11rb$(new JPEGDecoder$Component(this.buildComponentData_0(frame == null ? throwUPAE('frame') : frame, component_0), component_0.h / (frame == null ? throwUPAE('frame') : frame).maxH, component_0.v / (frame == null ? throwUPAE('frame') : frame).maxV));
    }
  };
  function JPEGDecoder$Component(lines, scaleX, scaleY) {
    this.lines = lines;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }
  JPEGDecoder$Component.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Component',
    interfaces: []
  };
  JPEGDecoder.prototype.getData_0 = function (width, height) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24;
    var scaleX = this.width_0 / width | 0;
    var scaleY = this.height_0 / height | 0;
    var offset = 0;
    var dataLength = Kotlin.imul(Kotlin.imul(width, height), this.components_0.size);
    var data = UByteArray_init(dataLength);
    switch (this.components_0.size) {
      case 1:
        var component1 = this.components_0.get_za3lpa$(0);
        for (var y = 0; y < height; y++) {
          var component1Line = component1.lines.get_za3lpa$(numberToInt(y * component1.scaleY * scaleY));
          for (var x = 0; x < width; x++) {
            tmp$_0 = (tmp$ = offset, offset = tmp$ + 1 | 0, tmp$);
            var n = numberToInt(x * component1.scaleX * scaleX);
            var v = component1Line.data[n] & 255;
            data.data[tmp$_0] = toByte(v);
          }
        }

        break;
      case 2:
        var component1_0 = this.components_0.get_za3lpa$(0);
        var component2 = this.components_0.get_za3lpa$(1);
        for (var y_0 = 0; y_0 < height; y_0++) {
          var component1Line_0 = component1_0.lines.get_za3lpa$(numberToInt(y_0 * component1_0.scaleY * scaleY));
          var component2Line = component2.lines.get_za3lpa$(numberToInt(y_0 * component2.scaleY * scaleY));
          for (var x_0 = 0; x_0 < width; x_0++) {
            tmp$_2 = (tmp$_1 = offset, offset = tmp$_1 + 1 | 0, tmp$_1);
            var n_0 = numberToInt(x_0 * component1_0.scaleX * scaleX);
            var v_0 = component1Line_0.data[n_0] & 255;
            data.data[tmp$_2] = toByte(v_0);
            tmp$_4 = (tmp$_3 = offset, offset = tmp$_3 + 1 | 0, tmp$_3);
            var n_1 = numberToInt(x_0 * component2.scaleX * scaleX);
            var v_1 = component2Line.data[n_1] & 255;
            data.data[tmp$_4] = toByte(v_1);
          }
        }

        break;
      case 3:
        var tmp$_25;
        if (((tmp$_25 = this.adobe_0) != null ? tmp$_25.transformCode : null) === true)
          tmp$_6 = true;
        else
          tmp$_6 = (tmp$_5 = this.colorTransform_0) != null ? tmp$_5 : true;
        var colorTransform = tmp$_6;
        var component1_1 = this.components_0.get_za3lpa$(0);
        var component2_0 = this.components_0.get_za3lpa$(1);
        var component3 = this.components_0.get_za3lpa$(2);
        for (var y_1 = 0; y_1 < height; y_1++) {
          var component1Line_1 = component1_1.lines.get_za3lpa$(numberToInt(y_1 * component1_1.scaleY * scaleY));
          var component2Line_0 = component2_0.lines.get_za3lpa$(numberToInt(y_1 * component2_0.scaleY * scaleY));
          var component3Line = component3.lines.get_za3lpa$(numberToInt(y_1 * component3.scaleY * scaleY));
          if (!colorTransform) {
            for (var x_1 = 0; x_1 < width; x_1++) {
              tmp$_8 = (tmp$_7 = offset, offset = tmp$_7 + 1 | 0, tmp$_7);
              var n_2 = numberToInt(x_1 * component1_1.scaleX * scaleX);
              var v_2 = component1Line_1.data[n_2] & 255;
              data.data[tmp$_8] = toByte(v_2);
              tmp$_10 = (tmp$_9 = offset, offset = tmp$_9 + 1 | 0, tmp$_9);
              var n_3 = numberToInt(x_1 * component2_0.scaleX * scaleX);
              var v_3 = component2Line_0.data[n_3] & 255;
              data.data[tmp$_10] = toByte(v_3);
              tmp$_12 = (tmp$_11 = offset, offset = tmp$_11 + 1 | 0, tmp$_11);
              var n_4 = numberToInt(x_1 * component3.scaleX * scaleX);
              var v_4 = component3Line.data[n_4] & 255;
              data.data[tmp$_12] = toByte(v_4);
            }
          }
           else {
            for (var x_2 = 0; x_2 < width; x_2++) {
              var n_5 = numberToInt(x_2 * component1_1.scaleX * scaleX);
              var yy = component1Line_1.data[n_5] & 255;
              var n_6 = numberToInt(x_2 * component2_0.scaleX * scaleX);
              var cb = component2Line_0.data[n_6] & 255;
              var n_7 = numberToInt(x_2 * component3.scaleX * scaleX);
              var cr = component3Line.data[n_7] & 255;
              tmp$_14 = (tmp$_13 = offset, offset = tmp$_13 + 1 | 0, tmp$_13);
              var v_5 = this.clampTo8bit_0(numberToInt(yy + 1.402 * (cr - 128.0)));
              data.data[tmp$_14] = toByte(v_5);
              tmp$_16 = (tmp$_15 = offset, offset = tmp$_15 + 1 | 0, tmp$_15);
              var v_6 = this.clampTo8bit_0(numberToInt(yy - 0.3441363 * (cb - 128.0) - 0.71413636 * (cr - 128.0)));
              data.data[tmp$_16] = toByte(v_6);
              tmp$_18 = (tmp$_17 = offset, offset = tmp$_17 + 1 | 0, tmp$_17);
              var v_7 = this.clampTo8bit_0(numberToInt(yy + 1.772 * (cb - 128.0)));
              data.data[tmp$_18] = toByte(v_7);
            }
          }
        }

        break;
      case 4:
        if (this.adobe_0 == null)
          invalidOp('Unsupported color mode (4 components)');
        var tmp$_26;
        if (((tmp$_26 = this.adobe_0) != null ? tmp$_26.transformCode : null) === true)
          tmp$_20 = true;
        else
          tmp$_20 = (tmp$_19 = this.colorTransform_0) != null ? tmp$_19 : false;
        var colorTransform_0 = tmp$_20;
        var component1_2 = this.components_0.get_za3lpa$(0);
        var component2_1 = this.components_0.get_za3lpa$(1);
        var component3_0 = this.components_0.get_za3lpa$(2);
        var component4 = this.components_0.get_za3lpa$(3);
        for (var y_2 = 0; y_2 < height; y_2++) {
          var component1Line_2 = component1_2.lines.get_za3lpa$(numberToInt(y_2 * component1_2.scaleY * scaleY));
          var component2Line_1 = component2_1.lines.get_za3lpa$(numberToInt(y_2 * component2_1.scaleY * scaleY));
          var component3Line_0 = component3_0.lines.get_za3lpa$(numberToInt(y_2 * component3_0.scaleY * scaleY));
          var component4Line = component4.lines.get_za3lpa$(numberToInt(y_2 * component4.scaleY * scaleY));
          for (var x_3 = 0; x_3 < width; x_3++) {
            var c;
            var m;
            var ye;
            var k;
            if (!colorTransform_0) {
              var n_8 = numberToInt(x_3 * component1_2.scaleX * scaleX);
              c = component1Line_2.data[n_8] & 255;
              var n_9 = numberToInt(x_3 * component2_1.scaleX * scaleX);
              m = component2Line_1.data[n_9] & 255;
              var n_10 = numberToInt(x_3 * component3_0.scaleX * scaleX);
              ye = component3Line_0.data[n_10] & 255;
              var n_11 = numberToInt(x_3 * component4.scaleX * scaleX);
              k = component4Line.data[n_11] & 255;
            }
             else {
              var n_12 = numberToInt(x_3 * component1_2.scaleX * scaleX);
              var yy_0 = component1Line_2.data[n_12] & 255;
              var n_13 = numberToInt(x_3 * component2_1.scaleX * scaleX);
              var cb_0 = component2Line_1.data[n_13] & 255;
              var n_14 = numberToInt(x_3 * component3_0.scaleX * scaleX);
              var cr_0 = component3Line_0.data[n_14] & 255;
              var n_15 = numberToInt(x_3 * component4.scaleX * scaleX);
              k = component4Line.data[n_15] & 255;
              c = 255 - this.clampTo8bit_0(numberToInt(yy_0 + 1.402 * (cr_0 - 128 | 0))) | 0;
              m = 255 - this.clampTo8bit_0(numberToInt(yy_0 - 0.3441363 * (cb_0 - 128 | 0) - 0.71413636 * (cr_0 - 128 | 0))) | 0;
              ye = 255 - this.clampTo8bit_0(numberToInt(yy_0 + 1.772 * (cb_0 - 128 | 0))) | 0;
            }
            var n_16 = (tmp$_21 = offset, offset = tmp$_21 + 1 | 0, tmp$_21);
            var v_8 = 255 - c | 0;
            data.data[n_16] = toByte(v_8);
            var n_17 = (tmp$_22 = offset, offset = tmp$_22 + 1 | 0, tmp$_22);
            var v_9 = 255 - m | 0;
            data.data[n_17] = toByte(v_9);
            var n_18 = (tmp$_23 = offset, offset = tmp$_23 + 1 | 0, tmp$_23);
            var v_10 = 255 - ye | 0;
            data.data[n_18] = toByte(v_10);
            var n_19 = (tmp$_24 = offset, offset = tmp$_24 + 1 | 0, tmp$_24);
            var v_11 = 255 - k | 0;
            data.data[n_19] = toByte(v_11);
          }
        }

        break;
      default:invalidOp('Unsupported color mode');
        break;
    }
    return data;
  };
  JPEGDecoder.prototype.copyToImageData_q4uxu6$ = function (imageData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27;
    var width = imageData.width;
    var height = imageData.height;
    var imageDataArray = imageData.data;
    var data = this.getData_0(width, height);
    var i = 0;
    var j = 0;
    switch (this.components_0.size) {
      case 1:
        tmp$ = Kotlin.imul(width, height);
        for (var n = 0; n < tmp$; n++) {
          var n_0 = (tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0);
          var yy = data.data[n_0] & 255;
          var n_1 = (tmp$_1 = j, j = tmp$_1 + 1 | 0, tmp$_1);
          imageDataArray.data[n_1] = toByte(yy);
          var n_2 = (tmp$_2 = j, j = tmp$_2 + 1 | 0, tmp$_2);
          imageDataArray.data[n_2] = toByte(yy);
          var n_3 = (tmp$_3 = j, j = tmp$_3 + 1 | 0, tmp$_3);
          imageDataArray.data[n_3] = toByte(yy);
          var n_4 = (tmp$_4 = j, j = tmp$_4 + 1 | 0, tmp$_4);
          imageDataArray.data[n_4] = toByte(255);
        }

        break;
      case 3:
        tmp$_5 = Kotlin.imul(width, height);
        for (var n_5 = 0; n_5 < tmp$_5; n_5++) {
          tmp$_8 = (tmp$_7 = j, j = tmp$_7 + 1 | 0, tmp$_7);
          var n_6 = (tmp$_6 = i, i = tmp$_6 + 1 | 0, tmp$_6);
          var v = data.data[n_6] & 255;
          imageDataArray.data[tmp$_8] = toByte(v);
          tmp$_11 = (tmp$_10 = j, j = tmp$_10 + 1 | 0, tmp$_10);
          var n_7 = (tmp$_9 = i, i = tmp$_9 + 1 | 0, tmp$_9);
          var v_0 = data.data[n_7] & 255;
          imageDataArray.data[tmp$_11] = toByte(v_0);
          tmp$_14 = (tmp$_13 = j, j = tmp$_13 + 1 | 0, tmp$_13);
          var n_8 = (tmp$_12 = i, i = tmp$_12 + 1 | 0, tmp$_12);
          var v_1 = data.data[n_8] & 255;
          imageDataArray.data[tmp$_14] = toByte(v_1);
          var n_9 = (tmp$_15 = j, j = tmp$_15 + 1 | 0, tmp$_15);
          imageDataArray.data[n_9] = toByte(255);
        }

        break;
      case 4:
        tmp$_16 = Kotlin.imul(width, height);
        for (var n_10 = 0; n_10 < tmp$_16; n_10++) {
          var n_11 = (tmp$_17 = i, i = tmp$_17 + 1 | 0, tmp$_17);
          var c = data.data[n_11] & 255;
          var n_12 = (tmp$_18 = i, i = tmp$_18 + 1 | 0, tmp$_18);
          var m = data.data[n_12] & 255;
          var n_13 = (tmp$_19 = i, i = tmp$_19 + 1 | 0, tmp$_19);
          var y = data.data[n_13] & 255;
          var n_14 = (tmp$_20 = i, i = tmp$_20 + 1 | 0, tmp$_20);
          var k = data.data[n_14] & 255;
          tmp$_22 = (tmp$_21 = j, j = tmp$_21 + 1 | 0, tmp$_21);
          var v_2 = 255 - this.clampTo8bit_0(Kotlin.imul(c, 1 - (k / 255 | 0) | 0) + k | 0) | 0;
          imageDataArray.data[tmp$_22] = toByte(v_2);
          tmp$_24 = (tmp$_23 = j, j = tmp$_23 + 1 | 0, tmp$_23);
          var v_3 = 255 - this.clampTo8bit_0(Kotlin.imul(m, 1 - (k / 255 | 0) | 0) + k | 0) | 0;
          imageDataArray.data[tmp$_24] = toByte(v_3);
          tmp$_26 = (tmp$_25 = j, j = tmp$_25 + 1 | 0, tmp$_25);
          var v_4 = 255 - this.clampTo8bit_0(Kotlin.imul(y, 1 - (k / 255 | 0) | 0) + k | 0) | 0;
          imageDataArray.data[tmp$_26] = toByte(v_4);
          var n_15 = (tmp$_27 = j, j = tmp$_27 + 1 | 0, tmp$_27);
          imageDataArray.data[n_15] = toByte(255);
        }

        break;
      default:invalidOp('Unsupported color mode');
        break;
    }
  };
  function JPEGDecoder$ImageInfo(width, height) {
    this.width = width;
    this.height = height;
  }
  JPEGDecoder$ImageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageInfo',
    interfaces: []
  };
  JPEGDecoder$ImageInfo.prototype.component1 = function () {
    return this.width;
  };
  JPEGDecoder$ImageInfo.prototype.component2 = function () {
    return this.height;
  };
  JPEGDecoder$ImageInfo.prototype.copy_vux9f0$ = function (width, height) {
    return new JPEGDecoder$ImageInfo(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  JPEGDecoder$ImageInfo.prototype.toString = function () {
    return 'ImageInfo(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  JPEGDecoder$ImageInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  JPEGDecoder$ImageInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function JPEGDecoder$ImageData(width, height, data) {
    this.width = width;
    this.height = height;
    this.data = data;
  }
  JPEGDecoder$ImageData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageData',
    interfaces: []
  };
  function JPEGDecoder$Companion() {
    JPEGDecoder$Companion_instance = this;
  }
  JPEGDecoder$Companion.prototype.decodeInfo_fqrh44$ = function (jpegData) {
    var arr = new UByteArray(jpegData);
    var decoder = new JPEGDecoder();
    decoder.parse_dctkei$(arr);
    return new JPEGDecoder$ImageInfo(decoder.width_0, decoder.height_0);
  };
  JPEGDecoder$Companion.prototype.decode_fqrh44$ = function (jpegData) {
    var data = this.decodeToData_0(jpegData);
    return RGBA$Companion_getInstance().decodeToBitmap32_qq690d$(data.width, data.height, data.data.data);
  };
  JPEGDecoder$Companion.prototype.decodeToData_0 = function (jpegData) {
    var arr = new UByteArray(jpegData);
    var decoder = new JPEGDecoder();
    decoder.parse_dctkei$(arr);
    var image = new JPEGDecoder$ImageData(decoder.width_0, decoder.height_0, UByteArray_init(Kotlin.imul(decoder.width_0, decoder.height_0) * 4 | 0));
    decoder.copyToImageData_q4uxu6$(image);
    return image;
  };
  JPEGDecoder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JPEGDecoder$Companion_instance = null;
  function JPEGDecoder$Companion_getInstance() {
    if (JPEGDecoder$Companion_instance === null) {
      new JPEGDecoder$Companion();
    }
    return JPEGDecoder$Companion_instance;
  }
  JPEGDecoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JPEGDecoder',
    interfaces: []
  };
  var Array_0 = Array;
  function JPEGEncoder(quality) {
    JPEGEncoder$Companion_getInstance();
    if (quality === void 0)
      quality = 50;
    this.yTable_0 = new Int32Array(64);
    this.uvTable_0 = new Int32Array(64);
    this.fdtblY_0 = new Float32Array(64);
    this.fdtblUV_0 = new Float32Array(64);
    this.ydcHt_0 = [];
    this.uvdcHt_0 = [];
    this.yavHt_0 = [];
    this.uvacHt_0 = [];
    var array = Array_0(65535);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Int32Array(2);
    }
    this.bitcode_0 = array;
    this.category_0 = new Int32Array(65535);
    this.outputfDCTQuant_0 = new Int32Array(64);
    this.du_0 = new Int32Array(64);
    this.byteOut_0 = new ByteArrayBuilder();
    this.byteNew_0 = 0;
    this.bytePos_0 = 7;
    this.ydu_0 = new Float32Array(64);
    this.udu_0 = new Float32Array(64);
    this.vdu_0 = new Float32Array(64);
    this.rgbYuvTable_0 = new Int32Array(2048);
    this.currentQuality_0 = 0;
    this.initHuffmanTbl_0();
    this.initCategoryNumber_0();
    this.initRGBYUVTable_0();
    this.setQuality_0(quality);
  }
  JPEGEncoder.prototype.initQuantTables_0 = function (sf) {
    for (var i = 0; i < 64; i++) {
      var x = (Kotlin.imul(JPEGEncoder$Companion_getInstance().YQT_TABLE_0[i], sf) + 50 | 0) / 100.0;
      var t = numberToInt(Math_0.floor(x));
      if (t < 1) {
        t = 1;
      }
       else if (t > 255) {
        t = 255;
      }
      this.yTable_0[JPEGEncoder$Companion_getInstance().ZIG_ZAG_0[i]] = t;
    }
    for (var j = 0; j < 64; j++) {
      var x_0 = (Kotlin.imul(JPEGEncoder$Companion_getInstance().UVQT_TABLE_0[j], sf) + 50.0) / 100.0;
      var u = numberToInt(Math_0.floor(x_0));
      if (u < 1) {
        u = 1;
      }
       else if (u > 255) {
        u = 255;
      }
      this.uvTable_0[JPEGEncoder$Companion_getInstance().ZIG_ZAG_0[j]] = u;
    }
    var k = 0;
    for (var row = 0; row < 8; row++) {
      for (var col = 0; col < 8; col++) {
        this.fdtblY_0[k] = 1.0 / (this.yTable_0[JPEGEncoder$Companion_getInstance().ZIG_ZAG_0[k]] * JPEGEncoder$Companion_getInstance().AASF_TABLE_0[row] * JPEGEncoder$Companion_getInstance().AASF_TABLE_0[col] * 8.0);
        this.fdtblUV_0[k] = 1.0 / (this.uvTable_0[JPEGEncoder$Companion_getInstance().ZIG_ZAG_0[k]] * JPEGEncoder$Companion_getInstance().AASF_TABLE_0[row] * JPEGEncoder$Companion_getInstance().AASF_TABLE_0[col] * 8.0);
        k = k + 1 | 0;
      }
    }
  };
  JPEGEncoder.prototype.computeHuffmanTbl_0 = function (nrCodes, std_table) {
    var tmp$, tmp$_0;
    var codeValue = 0;
    var posInTable = 0;
    var array = Array_0(((tmp$ = max(std_table)) != null ? tmp$ : 0) + 1 | 0);
    var tmp$_1;
    tmp$_1 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_1; i++) {
      array[i] = new Int32Array(2);
    }
    var ht = array;
    for (var k = 1; k <= 16; k++) {
      tmp$_0 = nrCodes[k];
      for (var j = 1; j <= tmp$_0; j++) {
        ht[std_table[posInTable]] = new Int32Array(2);
        ht[std_table[posInTable]][0] = codeValue;
        ht[std_table[posInTable]][1] = k;
        posInTable = posInTable + 1 | 0;
        codeValue = codeValue + 1 | 0;
      }
      codeValue = codeValue * 2 | 0;
    }
    return ht;
  };
  JPEGEncoder.prototype.initHuffmanTbl_0 = function () {
    this.ydcHt_0 = this.computeHuffmanTbl_0(JPEGEncoder$Companion_getInstance().STD_DC_LUMINANCE_NRCODES_0, JPEGEncoder$Companion_getInstance().STD_DC_LUMINANCE_VALUES_0);
    this.uvdcHt_0 = this.computeHuffmanTbl_0(JPEGEncoder$Companion_getInstance().STD_DC_CHROMIANCE_NRCODES_0, JPEGEncoder$Companion_getInstance().STD_DC_CHROMIANCE_VALUES_0);
    this.yavHt_0 = this.computeHuffmanTbl_0(JPEGEncoder$Companion_getInstance().STD_AC_LUMINANCE_NRCODES_0, JPEGEncoder$Companion_getInstance().STD_AC_LUMINANCE_VALUES_0);
    this.uvacHt_0 = this.computeHuffmanTbl_0(JPEGEncoder$Companion_getInstance().STD_AC_CHROMIANCE_NRCODES_0, JPEGEncoder$Companion_getInstance().STD_AC_CHROMIANCE_VALUES_0);
  };
  JPEGEncoder.prototype.initCategoryNumber_0 = function () {
    var tmp$, tmp$_0;
    var nrlower = 1;
    var nrupper = 2;
    for (var cat = 1; cat <= 15; cat++) {
      tmp$ = nrupper;
      for (var nr = nrlower; nr < tmp$; nr++) {
        this.category_0[32767 + nr | 0] = cat;
        this.bitcode_0[32767 + nr | 0] = new Int32Array(2);
        this.bitcode_0[32767 + nr | 0][1] = cat;
        this.bitcode_0[32767 + nr | 0][0] = nr;
      }
      tmp$_0 = -nrlower | 0;
      for (var nrneg = -(nrupper - 1 | 0) | 0; nrneg <= tmp$_0; nrneg++) {
        this.category_0[32767 + nrneg | 0] = cat;
        this.bitcode_0[32767 + nrneg | 0] = new Int32Array(2);
        this.bitcode_0[32767 + nrneg | 0][1] = cat;
        this.bitcode_0[32767 + nrneg | 0][0] = nrupper - 1 + nrneg | 0;
      }
      nrlower = nrlower << 1;
      nrupper = nrupper << 1;
    }
  };
  JPEGEncoder.prototype.initRGBYUVTable_0 = function () {
    for (var i = 0; i < 256; i++) {
      this.rgbYuvTable_0[i + 0 | 0] = 19595 * i | 0;
      this.rgbYuvTable_0[i + 256 | 0] = 38470 * i | 0;
      this.rgbYuvTable_0[i + 512 | 0] = (7471 * i | 0) + 32768 | 0;
      this.rgbYuvTable_0[i + 768 | 0] = -11059 * i | 0;
      this.rgbYuvTable_0[i + 1024 | 0] = -21709 * i | 0;
      this.rgbYuvTable_0[i + 1280 | 0] = (32768 * i | 0) + 8421375 | 0;
      this.rgbYuvTable_0[i + 1536 | 0] = -27439 * i | 0;
      this.rgbYuvTable_0[i + 1792 | 0] = -5329 * i | 0;
    }
  };
  JPEGEncoder.prototype.writeBits_0 = function (bs) {
    var value = bs[0];
    var posval = bs[1] - 1 | 0;
    while (posval >= 0) {
      if ((value & 1 << posval) !== 0) {
        this.byteNew_0 = this.byteNew_0 | 1 << this.bytePos_0;
      }
      posval = posval - 1 | 0;
      this.bytePos_0 = this.bytePos_0 - 1 | 0;
      if (this.bytePos_0 < 0) {
        if (this.byteNew_0 === 255) {
          this.writeByte_0(255);
          this.writeByte_0(0);
        }
         else {
          this.writeByte_0(this.byteNew_0);
        }
        this.bytePos_0 = 7;
        this.byteNew_0 = 0;
      }
    }
  };
  JPEGEncoder.prototype.writeByte_0 = function (value) {
    this.byteOut_0.append_s8j3t7$(toByte(value));
  };
  JPEGEncoder.prototype.writeWord_0 = function (value) {
    this.writeByte_0(value >>> 8 & 255);
    this.writeByte_0(value & 255);
  };
  JPEGEncoder.prototype.fDCTQuant_0 = function (data, fdtbl) {
    var d0;
    var d1;
    var d2;
    var d3;
    var d4;
    var d5;
    var d6;
    var d7;
    var dataOff = 0;
    var i8 = 8;
    var i64 = 64;
    for (var i = 0; i < i8; i++) {
      d0 = data[dataOff + 0 | 0];
      d1 = data[dataOff + 1 | 0];
      d2 = data[dataOff + 2 | 0];
      d3 = data[dataOff + 3 | 0];
      d4 = data[dataOff + 4 | 0];
      d5 = data[dataOff + 5 | 0];
      d6 = data[dataOff + 6 | 0];
      d7 = data[dataOff + 7 | 0];
      var tmp0 = d0 + d7;
      var tmp7 = d0 - d7;
      var tmp1 = d1 + d6;
      var tmp6 = d1 - d6;
      var tmp2 = d2 + d5;
      var tmp5 = d2 - d5;
      var tmp3 = d3 + d4;
      var tmp4 = d3 - d4;
      var tmp10 = tmp0 + tmp3;
      var tmp13 = tmp0 - tmp3;
      var tmp11 = tmp1 + tmp2;
      var tmp12 = tmp1 - tmp2;
      data[dataOff] = tmp10 + tmp11;
      data[dataOff + 4 | 0] = tmp10 - tmp11;
      var z1 = (tmp12 + tmp13) * 0.70710677;
      data[dataOff + 2 | 0] = tmp13 + z1;
      data[dataOff + 6 | 0] = tmp13 - z1;
      tmp10 = tmp4 + tmp5;
      tmp11 = tmp5 + tmp6;
      tmp12 = tmp6 + tmp7;
      var z5 = (tmp10 - tmp12) * 0.38268343;
      var z2 = 0.5411961 * tmp10 + z5;
      var z4 = 1.306563 * tmp12 + z5;
      var z3 = tmp11 * 0.70710677;
      var z11 = tmp7 + z3;
      var z13 = tmp7 - z3;
      data[dataOff + 5 | 0] = z13 + z2;
      data[dataOff + 3 | 0] = z13 - z2;
      data[dataOff + 1 | 0] = z11 + z4;
      data[dataOff + 7 | 0] = z11 - z4;
      dataOff = dataOff + 8 | 0;
    }
    dataOff = 0;
    for (var i_0 = 0; i_0 < i8; i_0++) {
      d0 = data[dataOff];
      d1 = data[dataOff + 8 | 0];
      d2 = data[dataOff + 16 | 0];
      d3 = data[dataOff + 24 | 0];
      d4 = data[dataOff + 32 | 0];
      d5 = data[dataOff + 40 | 0];
      d6 = data[dataOff + 48 | 0];
      d7 = data[dataOff + 56 | 0];
      var tmp0p2 = d0 + d7;
      var tmp7p2 = d0 - d7;
      var tmp1p2 = d1 + d6;
      var tmp6p2 = d1 - d6;
      var tmp2p2 = d2 + d5;
      var tmp5p2 = d2 - d5;
      var tmp3p2 = d3 + d4;
      var tmp4p2 = d3 - d4;
      var tmp10p2 = tmp0p2 + tmp3p2;
      var tmp13p2 = tmp0p2 - tmp3p2;
      var tmp11p2 = tmp1p2 + tmp2p2;
      var tmp12p2 = tmp1p2 - tmp2p2;
      data[dataOff] = tmp10p2 + tmp11p2;
      data[dataOff + 32 | 0] = tmp10p2 - tmp11p2;
      var z1p2 = (tmp12p2 + tmp13p2) * 0.70710677;
      data[dataOff + 16 | 0] = tmp13p2 + z1p2;
      data[dataOff + 48 | 0] = tmp13p2 - z1p2;
      tmp10p2 = tmp4p2 + tmp5p2;
      tmp11p2 = tmp5p2 + tmp6p2;
      tmp12p2 = tmp6p2 + tmp7p2;
      var z5p2 = (tmp10p2 - tmp12p2) * 0.38268343;
      var z2p2 = 0.5411961 * tmp10p2 + z5p2;
      var z4p2 = 1.306563 * tmp12p2 + z5p2;
      var z3p2 = tmp11p2 * 0.70710677;
      var z11p2 = tmp7p2 + z3p2;
      var z13p2 = tmp7p2 - z3p2;
      data[dataOff + 40 | 0] = z13p2 + z2p2;
      data[dataOff + 24 | 0] = z13p2 - z2p2;
      data[dataOff + 8 | 0] = z11p2 + z4p2;
      data[dataOff + 56 | 0] = z11p2 - z4p2;
      dataOff = dataOff + 1 | 0;
    }
    var fDCTQuant;
    for (var i_1 = 0; i_1 < i64; i_1++) {
      fDCTQuant = data[i_1] * fdtbl[i_1];
      this.outputfDCTQuant_0[i_1] = fDCTQuant > 0.0 ? numberToInt(fDCTQuant + 0.5) : numberToInt(fDCTQuant - 0.5);
    }
    return this.outputfDCTQuant_0;
  };
  JPEGEncoder.prototype.writeAPP0_0 = function () {
    this.writeWord_0(65504);
    this.writeWord_0(16);
    this.writeByte_0(74);
    this.writeByte_0(70);
    this.writeByte_0(73);
    this.writeByte_0(70);
    this.writeByte_0(0);
    this.writeByte_0(1);
    this.writeByte_0(1);
    this.writeByte_0(0);
    this.writeWord_0(1);
    this.writeWord_0(1);
    this.writeByte_0(0);
    this.writeByte_0(0);
  };
  JPEGEncoder.prototype.writeSOF0_0 = function (width, height) {
    this.writeWord_0(65472);
    this.writeWord_0(17);
    this.writeByte_0(8);
    this.writeWord_0(height);
    this.writeWord_0(width);
    this.writeByte_0(3);
    this.writeByte_0(1);
    this.writeByte_0(17);
    this.writeByte_0(0);
    this.writeByte_0(2);
    this.writeByte_0(17);
    this.writeByte_0(1);
    this.writeByte_0(3);
    this.writeByte_0(17);
    this.writeByte_0(1);
  };
  JPEGEncoder.prototype.writeDQT_0 = function () {
    this.writeWord_0(65499);
    this.writeWord_0(132);
    this.writeByte_0(0);
    for (var i = 0; i < 64; i++) {
      this.writeByte_0(this.yTable_0[i]);
    }
    this.writeByte_0(1);
    for (var j = 0; j < 64; j++) {
      this.writeByte_0(this.uvTable_0[j]);
    }
  };
  JPEGEncoder.prototype.writeDHT_0 = function () {
    this.writeWord_0(65476);
    this.writeWord_0(418);
    this.writeByte_0(0);
    for (var i = 0; i < 16; i++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_DC_LUMINANCE_NRCODES_0[i + 1 | 0]);
    }
    for (var j = 0; j <= 11; j++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_DC_LUMINANCE_VALUES_0[j]);
    }
    this.writeByte_0(16);
    for (var k = 0; k < 16; k++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_AC_LUMINANCE_NRCODES_0[k + 1 | 0]);
    }
    for (var l = 0; l <= 161; l++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_AC_LUMINANCE_VALUES_0[l]);
    }
    this.writeByte_0(1);
    for (var m = 0; m < 16; m++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_DC_CHROMIANCE_NRCODES_0[m + 1 | 0]);
    }
    for (var n = 0; n <= 11; n++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_DC_CHROMIANCE_VALUES_0[n]);
    }
    this.writeByte_0(17);
    for (var o = 0; o < 16; o++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_AC_CHROMIANCE_NRCODES_0[o + 1 | 0]);
    }
    for (var p = 0; p <= 161; p++) {
      this.writeByte_0(JPEGEncoder$Companion_getInstance().STD_AC_CHROMIANCE_VALUES_0[p]);
    }
  };
  JPEGEncoder.prototype.writeSOS_0 = function () {
    this.writeWord_0(65498);
    this.writeWord_0(12);
    this.writeByte_0(3);
    this.writeByte_0(1);
    this.writeByte_0(0);
    this.writeByte_0(2);
    this.writeByte_0(17);
    this.writeByte_0(3);
    this.writeByte_0(17);
    this.writeByte_0(0);
    this.writeByte_0(63);
    this.writeByte_0(0);
  };
  JPEGEncoder.prototype.processDU_0 = function (CDU, fdtbl, DC, HTDC, HTAC) {
    var dc = DC;
    var eob = HTAC[0];
    var m16zeroes = HTAC[240];
    var pos;
    var i16 = 16;
    var i63 = 63;
    var i64 = 64;
    var duDct = this.fDCTQuant_0(CDU, fdtbl);
    for (var j = 0; j < i64; j++) {
      this.du_0[JPEGEncoder$Companion_getInstance().ZIG_ZAG_0[j]] = duDct[j];
    }
    var diff = this.du_0[0] - dc | 0;
    dc = this.du_0[0];
    if (diff === 0) {
      this.writeBits_0(HTDC[0]);
    }
     else {
      pos = 32767 + diff | 0;
      this.writeBits_0(HTDC[this.category_0[pos]]);
      this.writeBits_0(this.bitcode_0[pos]);
    }
    var end0pos = 63;
    while (end0pos > 0 && this.du_0[end0pos] === 0) {
      end0pos = end0pos - 1 | 0;
    }
    if (end0pos === 0) {
      this.writeBits_0(eob);
      return dc;
    }
    var i = 1;
    var lng;
    while (i <= end0pos) {
      var startpos = i;
      while (this.du_0[i] === 0 && i <= end0pos) {
        i = i + 1 | 0;
      }
      var nrzeroes = i - startpos | 0;
      if (nrzeroes >= i16) {
        lng = nrzeroes >> 4;
        for (var nrmarker = 1; nrmarker <= lng; nrmarker++)
          this.writeBits_0(m16zeroes);
        nrzeroes = nrzeroes & 15;
      }
      pos = 32767 + this.du_0[i] | 0;
      this.writeBits_0(HTAC[(nrzeroes << 4) + this.category_0[pos] | 0]);
      this.writeBits_0(this.bitcode_0[pos]);
      i = i + 1 | 0;
    }
    if (end0pos !== i63) {
      this.writeBits_0(eob);
    }
    return dc;
  };
  JPEGEncoder.prototype.encode_lnhgi4$ = function (bmp, quality) {
    if (quality === void 0)
      quality = null;
    return this.encode_0(new JPEGEncoder$ImageData(bmp.extractBytes(), bmp.width, bmp.height), quality);
  };
  JPEGEncoder.prototype.encode_0 = function (image, quality) {
    if (quality === void 0)
      quality = null;
    var tmp$, tmp$_0, tmp$_1;
    if (quality != null)
      this.setQuality_0(quality);
    this.byteOut_0 = new ByteArrayBuilder();
    this.byteNew_0 = 0;
    this.bytePos_0 = 7;
    this.writeWord_0(65496);
    this.writeAPP0_0();
    this.writeDQT_0();
    this.writeSOF0_0(image.width, image.height);
    this.writeDHT_0();
    this.writeSOS_0();
    var dcy = 0;
    var dcu = 0;
    var dcv = 0;
    this.byteNew_0 = 0;
    this.bytePos_0 = 7;
    var imageData = image.data;
    var width = image.width;
    var height = image.height;
    var quadWidth = width * 4 | 0;
    var x;
    var y = 0;
    var r;
    var g;
    var b;
    var start;
    while (y < height) {
      x = 0;
      while (x < quadWidth) {
        start = Kotlin.imul(quadWidth, y) + x | 0;
        for (var pos = 0; pos < 64; pos++) {
          var row = pos >> 3;
          var col = (pos & 7) * 4 | 0;
          var p = start + Kotlin.imul(row, quadWidth) + col | 0;
          if ((y + row | 0) >= height) {
            p = p - Kotlin.imul(quadWidth, y + 1 + row - height | 0) | 0;
          }
          if ((x + col | 0) >= quadWidth) {
            p = p - (x + col - quadWidth + 4) | 0;
          }
          r = imageData[tmp$ = p, p = tmp$ + 1 | 0, tmp$] & 255;
          g = imageData[tmp$_0 = p, p = tmp$_0 + 1 | 0, tmp$_0] & 255;
          b = imageData[tmp$_1 = p, p = tmp$_1 + 1 | 0, tmp$_1] & 255;
          this.ydu_0[pos] = (this.rgbYuvTable_0[r + 0 | 0] + this.rgbYuvTable_0[g + 256 | 0] + this.rgbYuvTable_0[b + 512 | 0] >> 16) - 128 | 0;
          this.udu_0[pos] = (this.rgbYuvTable_0[r + 768 | 0] + this.rgbYuvTable_0[g + 1024 | 0] + this.rgbYuvTable_0[b + 1280 | 0] >> 16) - 128 | 0;
          this.vdu_0[pos] = (this.rgbYuvTable_0[r + 1280 | 0] + this.rgbYuvTable_0[g + 1536 | 0] + this.rgbYuvTable_0[b + 1792 | 0] >> 16) - 128 | 0;
        }
        dcy = this.processDU_0(this.ydu_0, this.fdtblY_0, dcy, this.ydcHt_0, this.yavHt_0);
        dcu = this.processDU_0(this.udu_0, this.fdtblUV_0, dcu, this.uvdcHt_0, this.uvacHt_0);
        dcv = this.processDU_0(this.vdu_0, this.fdtblUV_0, dcv, this.uvdcHt_0, this.uvacHt_0);
        x = x + 32 | 0;
      }
      y = y + 8 | 0;
    }
    if (this.bytePos_0 >= 0) {
      var fillbits = new Int32Array(2);
      fillbits[1] = this.bytePos_0 + 1 | 0;
      fillbits[0] = (1 << this.bytePos_0 + 1) - 1 | 0;
      this.writeBits_0(fillbits);
    }
    this.writeWord_0(65497);
    return this.byteOut_0.toByteArray();
  };
  JPEGEncoder.prototype.setQuality_0 = function (quality) {
    var quality_0 = quality;
    if (quality_0 <= 0) {
      quality_0 = 1;
    }
    if (quality_0 > 100) {
      quality_0 = 100;
    }
    if (this.currentQuality_0 === quality_0)
      return;
    this.initQuantTables_0(quality_0 < 50 ? 5000 / quality_0 | 0 : 200 - (quality_0 * 2 | 0) | 0);
    this.currentQuality_0 = quality_0;
  };
  function JPEGEncoder$ImageData(data, width, height) {
    this.data = data;
    this.width = width;
    this.height = height;
  }
  JPEGEncoder$ImageData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageData',
    interfaces: []
  };
  function JPEGEncoder$Companion() {
    JPEGEncoder$Companion_instance = this;
    this.ZIG_ZAG_0 = new Int32Array([0, 1, 5, 6, 14, 15, 27, 28, 2, 4, 7, 13, 16, 26, 29, 42, 3, 8, 12, 17, 25, 30, 41, 43, 9, 11, 18, 24, 31, 40, 44, 53, 10, 19, 23, 32, 39, 45, 52, 54, 20, 22, 33, 38, 46, 51, 55, 60, 21, 34, 37, 47, 50, 56, 59, 61, 35, 36, 48, 49, 57, 58, 62, 63]);
    this.STD_DC_LUMINANCE_NRCODES_0 = new Int32Array([0, 0, 1, 5, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0]);
    this.STD_DC_LUMINANCE_VALUES_0 = new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    this.STD_AC_LUMINANCE_NRCODES_0 = new Int32Array([0, 0, 2, 1, 3, 3, 2, 4, 3, 5, 5, 4, 4, 0, 0, 1, 125]);
    this.STD_AC_LUMINANCE_VALUES_0 = new Int32Array([1, 2, 3, 0, 4, 17, 5, 18, 33, 49, 65, 6, 19, 81, 97, 7, 34, 113, 20, 50, 129, 145, 161, 8, 35, 66, 177, 193, 21, 82, 209, 240, 36, 51, 98, 114, 130, 9, 10, 22, 23, 24, 25, 26, 37, 38, 39, 40, 41, 42, 52, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 225, 226, 227, 228, 229, 230, 231, 232, 233, 234, 241, 242, 243, 244, 245, 246, 247, 248, 249, 250]);
    this.STD_DC_CHROMIANCE_NRCODES_0 = new Int32Array([0, 0, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0]);
    this.STD_DC_CHROMIANCE_VALUES_0 = new Int32Array([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    this.STD_AC_CHROMIANCE_NRCODES_0 = new Int32Array([0, 0, 2, 1, 2, 4, 4, 3, 4, 7, 5, 4, 4, 0, 1, 2, 119]);
    this.STD_AC_CHROMIANCE_VALUES_0 = new Int32Array([0, 1, 2, 3, 17, 4, 5, 33, 49, 6, 18, 65, 81, 7, 97, 113, 19, 34, 50, 129, 8, 20, 66, 145, 161, 177, 193, 9, 35, 51, 82, 240, 21, 98, 114, 209, 10, 22, 36, 52, 225, 37, 241, 23, 24, 25, 26, 38, 39, 40, 41, 42, 53, 54, 55, 56, 57, 58, 67, 68, 69, 70, 71, 72, 73, 74, 83, 84, 85, 86, 87, 88, 89, 90, 99, 100, 101, 102, 103, 104, 105, 106, 115, 116, 117, 118, 119, 120, 121, 122, 130, 131, 132, 133, 134, 135, 136, 137, 138, 146, 147, 148, 149, 150, 151, 152, 153, 154, 162, 163, 164, 165, 166, 167, 168, 169, 170, 178, 179, 180, 181, 182, 183, 184, 185, 186, 194, 195, 196, 197, 198, 199, 200, 201, 202, 210, 211, 212, 213, 214, 215, 216, 217, 218, 226, 227, 228, 229, 230, 231, 232, 233, 234, 242, 243, 244, 245, 246, 247, 248, 249, 250]);
    this.YQT_TABLE_0 = new Int32Array([16, 11, 10, 16, 24, 40, 51, 61, 12, 12, 14, 19, 26, 58, 60, 55, 14, 13, 16, 24, 40, 57, 69, 56, 14, 17, 22, 29, 51, 87, 80, 62, 18, 22, 37, 56, 68, 109, 103, 77, 24, 35, 55, 64, 81, 104, 113, 92, 49, 64, 78, 87, 103, 121, 120, 101, 72, 92, 95, 98, 112, 100, 103, 99]);
    this.UVQT_TABLE_0 = new Int32Array([17, 18, 24, 47, 99, 99, 99, 99, 18, 21, 26, 66, 99, 99, 99, 99, 24, 26, 56, 99, 99, 99, 99, 99, 47, 66, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99, 99]);
    this.AASF_TABLE_0 = new Float32Array([1.0, 1.3870399, 1.306563, 1.1758755, 1.0, 0.78569496, 0.5411961, 0.27589938]);
  }
  JPEGEncoder$Companion.prototype.encode_gqk24z$ = function (bmp, quality) {
    if (quality === void 0)
      quality = 50;
    return (new JPEGEncoder(quality)).encode_lnhgi4$(bmp);
  };
  JPEGEncoder$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var JPEGEncoder$Companion_instance = null;
  function JPEGEncoder$Companion_getInstance() {
    if (JPEGEncoder$Companion_instance === null) {
      new JPEGEncoder$Companion();
    }
    return JPEGEncoder$Companion_instance;
  }
  JPEGEncoder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JPEGEncoder',
    interfaces: []
  };
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_1ooaqm$(this.result_0, this.local$props.copy_qp3p0u$(get_basename(this.local$s)));
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_pdgdrr$(this.result_0, new ImageDecodingProps(this.local$filename));
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver.read_pdgdrr$(this.result_0, this.local$props);
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
  function nativeImageFormatProviders$lambda() {
    return listOf_0(nativeImageFormatProvider);
  }
  var nativeImageFormatProviders;
  function get_nativeImageFormatProviders() {
    return nativeImageFormatProviders.value;
  }
  function displayImage(bmp, kind, continuation) {
    if (kind === void 0)
      kind = 0;
    return nativeImageFormatProvider.display_uwsoz2$(bmp, kind, continuation);
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
    this.local$bytes = bytes_0;
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

            var nip = this.local$tmp$.next();
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = nip.decode_fqrh44$(this.local$bytes, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 5;
            var t = this.exception_0;
            if (!Kotlin.isType(t, Throwable))
              throw t;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            throw this.exception_0;
          case 6:
            throw UnsupportedOperationException_init('No format supported');
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
  function decodeImageFile(file_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeImageFile(file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$decodeImageFile(file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$tmp$ = void 0;
    this.local$file = file_0;
  }
  Coroutine$decodeImageFile.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeImageFile.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeImageFile.prototype.constructor = Coroutine$decodeImageFile;
  Coroutine$decodeImageFile.prototype.doResume = function () {
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

            var nip = this.local$tmp$.next();
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = nip.decode_o2v52r$(this.local$file.vfs, this.local$file.path, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.exceptionState_0 = 5;
            var t = this.exception_0;
            if (!Kotlin.isType(t, Throwable))
              throw t;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 1;
            continue;
          case 5:
            throw this.exception_0;
          case 6:
            throw UnsupportedOperationException_init('No format supported');
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
  function readNativeImage($receiver, continuation) {
    return decodeImageFile($receiver, continuation);
  }
  function readImageData($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
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
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, this.local$props.copy_qp3p0u$(get_basename(this.local$$receiver)));
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
  function readNativeImage_0($receiver_0, continuation_0, suspended) {
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
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = decodeImageBytes(this.result_0, this);
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
  function readImageData_0($receiver_0, formats_0, basename_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageData_0($receiver_0, formats_0, basename_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageData_0($receiver_0, formats_0, basename_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$basename = basename_0;
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
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.readImageInWorker_1ooaqm$(openSync(this.result_0), new ImageDecodingProps(this.local$basename), this);
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
  function readImageDataProps($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readImageDataProps($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readImageDataProps($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
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
            this.state_0 = 2;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.readImageInWorker_1ooaqm$(openSync(this.result_0), this.local$props, this);
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
  function readBitmapListNoNative($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
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
            this.result_0 = readImageData_0(this.local$$receiver, this.local$formats, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.frames;
            var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(item.bitmap);
            }

            return destination;
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
  function readBitmapInfo($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapInfo($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapInfo($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
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
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.decodeHeader_1ooaqm$(this.result_0, this.local$props);
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
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.readImage_1ooaqm$(this.result_0, new ImageDecodingProps(get_basename(this.local$$receiver)));
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
  function readBitmapListNoNative_0($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapListNoNative_0($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapListNoNative_0($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
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
            this.result_0 = readImageData_1(this.local$$receiver, this.local$formats, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var $receiver = this.result_0.frames;
            var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
            var tmp$;
            tmp$ = $receiver.iterator();
            while (tmp$.hasNext()) {
              var item = tmp$.next();
              destination.add_11rb$(item.bitmap);
            }

            return destination;
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
  function readBitmap($receiver, basename, formats, continuation) {
    return readBitmap_0($receiver, formats, new ImageDecodingProps(basename), continuation);
  }
  function readBitmap_0($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmap($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmap($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$tmp$ = void 0;
    this.local$bytes = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
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
            this.state_0 = 1;
            this.result_0 = readAll_0(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$bytes = this.result_0;
            this.exceptionState_0 = 5;
            if (nativeImageLoadingEnabled) {
              this.state_0 = 3;
              this.result_0 = decodeImageBytes(this.local$bytes, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
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
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              this.state_0 = 6;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              throw t;
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
        if (this.state_0 === 9) {
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
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$formats.decodeHeader_1ooaqm$(this.result_0);
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
  function readBitmapOptimized($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapOptimized($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapOptimized($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
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
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = nativeImageFormatProvider.decode_3ekr7n$(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 6;
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              printStackTrace(t);
              this.state_0 = 3;
              this.result_0 = readBitmap_1(this.local$$receiver, this.local$formats, void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              throw t;
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
  function readBitmap_1($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmap_0($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmap_0($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 9;
    this.local$tmp$ = void 0;
    this.local$file = void 0;
    this.local$bytes = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
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
            this.local$file = this.local$$receiver;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$bytes = this.result_0;
            this.exceptionState_0 = 5;
            if (nativeImageLoadingEnabled) {
              this.state_0 = 3;
              this.result_0 = decodeImageBytes(this.local$bytes, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 2;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props.copy_qp3p0u$(get_basename(this.local$file)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
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
            var t = this.exception_0;
            if (Kotlin.isType(t, Throwable)) {
              this.state_0 = 6;
              this.result_0 = this.local$formats.decodeInWorker_pdgdrr$(this.local$bytes, this.local$props.copy_qp3p0u$(get_basename(this.local$file)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              throw t;
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
        if (this.state_0 === 9) {
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
  function readBitmapSlice($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapSlice($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapSlice($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readBitmapSlice.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readBitmapSlice.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readBitmapSlice.prototype.constructor = Coroutine$readBitmapSlice;
  Coroutine$readBitmapSlice.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = get_defaultImageFormats();
            this.state_0 = 2;
            this.result_0 = readBitmapOptimized(this.local$$receiver, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return slice(this.result_0);
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
  var nativeImageLoadingEnabled;
  function disableNativeImageLoading(callback_0, continuation) {
    var oldNativeImageLoadingEnabled_0 = format.nativeImageLoadingEnabled;
    try {
      format.nativeImageLoadingEnabled = false;
      callback_0();
    }
    finally {
      format.nativeImageLoadingEnabled = oldNativeImageLoadingEnabled_0;
    }
  }
  defineInlineFunction('korim-js.com.soywiz.korim.format.disableNativeImageLoading_o14v8n$', wrapFunction(function () {
    var format = _.com.soywiz.korim.format;
    return function (callback_0, continuation) {
      var oldNativeImageLoadingEnabled_0 = format.nativeImageLoadingEnabled;
      try {
        format.nativeImageLoadingEnabled = false;
        callback_0();
      }
      finally {
        format.nativeImageLoadingEnabled = oldNativeImageLoadingEnabled_0;
      }
    };
  }));
  function readBitmapNoNative($receiver_0, formats_0, props_0, continuation_0, suspended) {
    var instance = new Coroutine$readBitmapNoNative($receiver_0, formats_0, props_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readBitmapNoNative($receiver_0, formats_0, props_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
    this.local$props = props_0;
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
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.readAsSyncStream(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.readImageInWorker_1ooaqm$(this.result_0, this.local$props, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            return this.result_0.mainBitmap;
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
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.decodeInWorker_nwlife$(this.result_0, get_basename(this.local$$receiver), this);
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
            if (this.local$props === void 0)
              this.local$props = new ImageEncodingProps();
            this.state_0 = 2;
            this.result_0 = this.local$format.encodeInWorker_hnx2ev$(this.local$bitmap, this.local$props.copy_x69rha$(get_basename(this.local$$receiver)), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$$receiver.write_bdsgvo$(this.result_0, [], this);
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
  function NativeImageFormatProvider() {
  }
  NativeImageFormatProvider.prototype.decode_o2v52r$ = function (vfs_0, path_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_o2v52r$(this, vfs_0, path_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_o2v52r$($this, vfs_0, path_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
  }
  Coroutine$decode_o2v52r$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_o2v52r$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_o2v52r$.prototype.constructor = Coroutine$decode_o2v52r$;
  Coroutine$decode_o2v52r$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$vfs.file_61zpoe$(this.local$path).readBytes(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.decode_fqrh44$(this.result_0, this);
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
  NativeImageFormatProvider.prototype.decode_j9tqln$ = function (file, continuation) {
    return this.decode_o2v52r$(file.vfs, file.path, continuation);
  };
  NativeImageFormatProvider.prototype.decode_3ekr7n$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_3ekr7n$_0(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_3ekr7n$_0($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$decode_3ekr7n$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_3ekr7n$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_3ekr7n$_0.prototype.constructor = Coroutine$decode_3ekr7n$_0;
  Coroutine$decode_3ekr7n$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.getUnderlyingUnscapedFile(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.decode_j9tqln$(this.result_0, this);
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
  NativeImageFormatProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeImageFormatProvider',
    interfaces: []
  };
  function showImageAndWaitExt($receiver, continuation) {
    return showImageAndWait($receiver, void 0, continuation);
  }
  function showImagesAndWaitExt($receiver, continuation) {
    return showImagesAndWait($receiver, continuation);
  }
  function showImageAndWait(image_0, kind_0, continuation_0, suspended) {
    var instance = new Coroutine$showImageAndWait(image_0, kind_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$showImageAndWait(image_0, kind_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$image = image_0;
    this.local$kind = kind_0;
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
            if (this.local$kind === void 0)
              this.local$kind = 0;
            println('Showing... ' + this.local$image);
            this.state_0 = 2;
            this.result_0 = nativeImageFormatProvider.display_uwsoz2$(this.local$image, this.local$kind, this);
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
  function showImageAndWait_0(image_0, continuation_0, suspended) {
    var instance = new Coroutine$showImageAndWait_0(image_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$showImageAndWait_0(image_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$image = image_0;
  }
  Coroutine$showImageAndWait_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$showImageAndWait_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$showImageAndWait_0.prototype.constructor = Coroutine$showImageAndWait_0;
  Coroutine$showImageAndWait_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = showImageAndWait(render_0(this.local$image).toBmp32(), void 0, this);
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

            var frame = this.local$tmp$.next();
            this.state_0 = 3;
            this.result_0 = showImageAndWait(frame.bitmap, void 0, this);
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
  function PNG() {
    PNG_instance = this;
    ImageFormat.call(this, ['png']);
    this.MAGIC1 = -1991225785;
    this.MAGIC2 = 218765834;
    this.InterlacedPasses = listOf([new PNG$InterlacedPass(0, 0, 8, 8, 8, 8), new PNG$InterlacedPass(0, 4, 8, 8, 8, 4), new PNG$InterlacedPass(4, 0, 8, 4, 4, 4), new PNG$InterlacedPass(0, 2, 4, 4, 4, 2), new PNG$InterlacedPass(2, 0, 4, 2, 2, 2), new PNG$InterlacedPass(0, 1, 2, 2, 2, 1), new PNG$InterlacedPass(1, 0, 2, 1, 1, 1)]);
    this.NormalPasses = listOf_0(new PNG$InterlacedPass(0, 0, 1, 1, 1, 1));
    this.method_0 = deflate.ZLib;
  }
  function PNG$InterlacedPass(startingRow, startingCol, rowIncrement, colIncrement, blockHeight, blockWidth) {
    this.startingRow = startingRow;
    this.startingCol = startingCol;
    this.rowIncrement = rowIncrement;
    this.colIncrement = colIncrement;
    this.blockHeight = blockHeight;
    this.blockWidth = blockWidth;
    var x = this.colIncrement;
    this.colIncrementShift = numberToInt(Math_0.log2(x));
  }
  PNG$InterlacedPass.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'InterlacedPass',
    interfaces: []
  };
  PNG$InterlacedPass.prototype.component1 = function () {
    return this.startingRow;
  };
  PNG$InterlacedPass.prototype.component2 = function () {
    return this.startingCol;
  };
  PNG$InterlacedPass.prototype.component3 = function () {
    return this.rowIncrement;
  };
  PNG$InterlacedPass.prototype.component4 = function () {
    return this.colIncrement;
  };
  PNG$InterlacedPass.prototype.component5 = function () {
    return this.blockHeight;
  };
  PNG$InterlacedPass.prototype.component6 = function () {
    return this.blockWidth;
  };
  PNG$InterlacedPass.prototype.copy_mbbjvw$ = function (startingRow, startingCol, rowIncrement, colIncrement, blockHeight, blockWidth) {
    return new PNG$InterlacedPass(startingRow === void 0 ? this.startingRow : startingRow, startingCol === void 0 ? this.startingCol : startingCol, rowIncrement === void 0 ? this.rowIncrement : rowIncrement, colIncrement === void 0 ? this.colIncrement : colIncrement, blockHeight === void 0 ? this.blockHeight : blockHeight, blockWidth === void 0 ? this.blockWidth : blockWidth);
  };
  PNG$InterlacedPass.prototype.toString = function () {
    return 'InterlacedPass(startingRow=' + Kotlin.toString(this.startingRow) + (', startingCol=' + Kotlin.toString(this.startingCol)) + (', rowIncrement=' + Kotlin.toString(this.rowIncrement)) + (', colIncrement=' + Kotlin.toString(this.colIncrement)) + (', blockHeight=' + Kotlin.toString(this.blockHeight)) + (', blockWidth=' + Kotlin.toString(this.blockWidth)) + ')';
  };
  PNG$InterlacedPass.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.startingRow) | 0;
    result = result * 31 + Kotlin.hashCode(this.startingCol) | 0;
    result = result * 31 + Kotlin.hashCode(this.rowIncrement) | 0;
    result = result * 31 + Kotlin.hashCode(this.colIncrement) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockHeight) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockWidth) | 0;
    return result;
  };
  PNG$InterlacedPass.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.startingRow, other.startingRow) && Kotlin.equals(this.startingCol, other.startingCol) && Kotlin.equals(this.rowIncrement, other.rowIncrement) && Kotlin.equals(this.colIncrement, other.colIncrement) && Kotlin.equals(this.blockHeight, other.blockHeight) && Kotlin.equals(this.blockWidth, other.blockWidth)))));
  };
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
  function PNG$Colorspace$Companion() {
    PNG$Colorspace$Companion_instance = this;
    var $receiver = PNG$Colorspace$values();
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.BY_ID = destination;
  }
  PNG$Colorspace$Companion.$metadata$ = {
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korim.format.PNG.Colorspace.' + name);
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
    var tmp$;
    switch (this.colorspace.name) {
      case 'GRAYSCALE':
        tmp$ = 1;
        break;
      case 'INDEXED':
        tmp$ = 1;
        break;
      case 'GRAYSCALE_ALPHA':
        tmp$ = 2;
        break;
      case 'RGB':
        tmp$ = 3;
        break;
      case 'RGBA':
        tmp$ = 4;
        break;
      default:tmp$ = Kotlin.noWhenBranchMatched();
        break;
    }
    this.bytes = tmp$;
    this.stride = Kotlin.imul(this.width, this.bytes);
  }
  PNG$Header.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Header',
    interfaces: []
  };
  PNG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$;
    try {
      var header = Kotlin.isType(tmp$ = this.readCommon_0(s, true), PNG$Header) ? tmp$ : throwCCE();
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
      var nameBytes = copyOf_0(toByteArray(name), 4);
      var crc = crypto.CRC32.INITIAL;
      crc = crypto.CRC32.update_3fge6q$(crc, nameBytes);
      crc = crypto.CRC32.update_3fge6q$(crc, data);
      write32_be_0(closure$s, data.length);
      writeBytes(closure$s, nameBytes);
      writeBytes(closure$s, data);
      write32_be_0(closure$s, crc);
    };
  }
  function PNG$writeImage$compress(this$PNG, closure$level) {
    return function (data) {
      return syncCompress(data, this$PNG.method_0, new CompressionContext(closure$level));
    };
  }
  function PNG$writeImage$writeChunk_0(closure$writeChunk) {
    return function (name, initialCapacity, callback) {
      if (initialCapacity === void 0)
        initialCapacity = 4096;
      var tmp$ = closure$writeChunk;
      var buffer = ByteArrayBuffer_init_0(initialCapacity);
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
      var buffer = ByteArrayBuffer_init_0(initialCapacity);
      var s = MemorySyncStream(buffer);
      callback(s);
      return tmp$(name, tmp$_0(buffer.toByteArray()));
    };
  }
  function PNG$writeImage$writeHeader$lambda(closure$width, closure$height, closure$colorspace) {
    return function ($receiver) {
      write32_be_0($receiver, closure$width);
      write32_be_0($receiver, closure$height);
      write8($receiver, 8);
      write8($receiver, closure$colorspace.id);
      write8($receiver, 0);
      write8($receiver, 0);
      write8($receiver, 0);
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
      var tmp$;
      tmp$ = closure$bitmap.palette.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        write8($receiver, getR(RGBA$Companion_getInstance(), c));
        write8($receiver, getG(RGBA$Companion_getInstance(), c));
        write8($receiver, getB(RGBA$Companion_getInstance(), c));
      }
      return Unit;
    };
  }
  function PNG$writeImage$lambda_0(closure$bitmap) {
    return function ($receiver) {
      var tmp$;
      tmp$ = closure$bitmap.palette.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        write8($receiver, getA(RGBA$Companion_getInstance(), c));
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
    write32_be_0(s, -1991225785);
    write32_be_0(s, 218765834);
    var writeChunk = PNG$writeImage$writeChunk(s);
    var level = numberToInt(convertRangeClamped(props.quality, 0.0, 1.0, 0.0, 9.0));
    var compress = PNG$writeImage$compress(this, level);
    var writeChunk_0 = PNG$writeImage$writeChunk_0(writeChunk);
    var writeChunkCompressed = PNG$writeImage$writeChunkCompressed(compress, writeChunk);
    var writeHeader = PNG$writeImage$writeHeader(width, height, writeChunk_0);
    if (Kotlin.isType(bitmap, Bitmap8)) {
      writeHeader(PNG$Colorspace$INDEXED_getInstance());
      writeChunk_0('PLTE', bitmap.palette.size * 3 | 0, PNG$writeImage$lambda(bitmap));
      writeChunk_0('tRNS', bitmap.palette.size * 1 | 0, PNG$writeImage$lambda_0(bitmap));
      var out = new Int8Array(height + Kotlin.imul(width, height) | 0);
      var pos = 0;
      for (var y = 0; y < height; y++) {
        write8_0(out, (tmp$ = pos, pos = tmp$ + 1 | 0, tmp$), 0);
        var index = bitmap.index_vux9f0$(0, y);
        arraycopy_1(bitmap.data, index, out, pos, width);
        pos = pos + width | 0;
      }
      writeChunk('IDAT', compress(out));
    }
     else if (Kotlin.isType(bitmap, Bitmap32)) {
      writeHeader(PNG$Colorspace$RGBA_getInstance());
      var out_0 = new Int8Array(height + (Kotlin.imul(width, height) * 4 | 0) | 0);
      var pos_0 = 0;
      for (var y_0 = 0; y_0 < height; y_0++) {
        write8_0(out_0, (tmp$_0 = pos_0, pos_0 = tmp$_0 + 1 | 0, tmp$_0), 0);
        var index_0 = bitmap.index_vux9f0$(0, y_0);
        if (bitmap.premult) {
          for (var x = 0; x < width; x++) {
            write32_le(out_0, pos_0, RGBA$Companion_getInstance().depremultiplyFast_md34sx$(bitmap.data.get_za3lpa$(index_0 + x | 0)).toInt());
            pos_0 = pos_0 + 4 | 0;
          }
        }
         else {
          for (var x_0 = 0; x_0 < width; x_0++) {
            write32_le(out_0, pos_0, bitmap.data.get_za3lpa$(index_0 + x_0 | 0).toInt());
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
      var length = readS32_be_0($receiver);
      var type = readStringz($receiver, 4);
      var data = readStream_0($receiver, Kotlin.Long.fromInt(length));
      var crc = readS32_be_0($receiver);
      switch (type) {
        case 'IHDR':
          var tmp$;
          closure$pheader.v = new PNG$Header(readS32_be_0(data), readS32_be_0(data), readU8(data), (tmp$ = PNG$Colorspace$Companion_getInstance().BY_ID.get_11rb$(readU8(data))) != null ? tmp$ : PNG$Colorspace$RGBA_getInstance(), readU8(data), readU8(data), readU8(data));
          break;
        case 'PLTE':
          var tmp$_0 = closure$paletteCount;
          var a = closure$paletteCount.v;
          var b = data.length.toInt() / 3 | 0;
          tmp$_0.v = Math_0.max(a, b);
          data.read_mj6st8$(closure$rgbPalette.data, 0, data.length.toInt());
          break;
        case 'tRNS':
          var tmp$_1 = closure$paletteCount;
          var a_0 = closure$paletteCount.v;
          var b_0 = data.length.toInt();
          tmp$_1.v = Math_0.max(a_0, b_0);
          data.read_mj6st8$(closure$aPalette.data, 0, data.length.toInt());
          break;
        case 'IDAT':
          closure$pngdata.append_fqrh44$(readAll(data));
          break;
        case 'IEND':
          break;
      }
    };
  }
  PNG.prototype.readCommon_0 = function (s, readHeader) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var magic = readS32_be_0(s);
    if (magic !== -1991225785)
      throw IllegalArgumentException_init('Invalid PNG file magic: ' + get_hex(magic) + '!=' + get_hex(-1991225785));
    readS32_be_0(s);
    var pheader = {v: null};
    var pngdata = new ByteArrayBuilder();
    var rgbPalette = UByteArray_init(768);
    var array = new Int8Array(256);
    var tmp$_7;
    tmp$_7 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_7; i++) {
      array[i] = -1 | 0;
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
      throw IllegalArgumentException_init('PNG without header!');
    }
    var header = tmp$;
    var width = header.width;
    var height = header.height;
    var databb = ByteArrayBuffer_init(Kotlin.imul(Kotlin.imul(1 + width | 0, height), header.bytes));
    syncUncompress(this.method_0, openSync(pngdata.toByteArray()), toSyncStream(new MemorySyncStreamBase(databb), L0));
    var data = toSyncStream(new MemorySyncStreamBase(databb), L0);
    var context = new PNG$DecodingContext(header);
    var bpp = context.header.bytes;
    var row32 = context.row32;
    if (header.bytes === 1) {
      var tmp$_8 = void 0;
      var $receiver = until(0, paletteCount.v);
      var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
      var tmp$_9;
      tmp$_9 = $receiver.iterator();
      while (tmp$_9.hasNext()) {
        var item = tmp$_9.next();
        var tmp$_10 = destination.add_11rb$;
        var tmp$_11 = RGBA$Companion_getInstance();
        var n = (item * 3 | 0) + 0 | 0;
        var tmp$_12 = rgbPalette.data[n] & 255;
        var n_0 = (item * 3 | 0) + 1 | 0;
        var tmp$_13 = rgbPalette.data[n_0] & 255;
        var n_1 = (item * 3 | 0) + 2 | 0;
        tmp$_10.call(destination, tmp$_11.invoke_tjonv8$(tmp$_12, tmp$_13, rgbPalette.data[n_1] & 255, aPalette.data[item] & 255).rgba);
      }
      tmp$_0 = new Bitmap8(width, height, tmp$_8, new RgbaArray(toIntArray(destination)));
    }
     else
      tmp$_0 = new Bitmap32(width, height);
    var bmp = tmp$_0;
    var bmp8 = (tmp$_1 = bmp) == null || Kotlin.isType(tmp$_1, Bitmap8) ? tmp$_1 : null;
    var bmp32 = (tmp$_2 = bmp) == null || Kotlin.isType(tmp$_2, Bitmap32) ? tmp$_2 : null;
    if (header.interlacemethod === 1)
      tmp$_3 = this.InterlacedPasses;
    else
      tmp$_3 = this.NormalPasses;
    var passes = tmp$_3;
    tmp$_4 = passes.iterator();
    while (tmp$_4.hasNext()) {
      var pass = tmp$_4.next();
      tmp$_5 = pass.startingRow;
      tmp$_6 = pass.rowIncrement;
      for (var row = tmp$_5; row < height; row += tmp$_6) {
        var col = pass.startingCol;
        var colIncrement = pass.colIncrement;
        var pixelsInThisRow = width >>> pass.colIncrementShift;
        var bytesInThisRow = Kotlin.imul(pixelsInThisRow, header.bytes);
        var filter = readU8(data);
        var currentRow = context.currentRow;
        var lastRow = context.lastRow;
        readExact(data, currentRow.data, 0, bytesInThisRow);
        if (bmp8 != null) {
          this.applyFilter_tzwyxu$(filter, lastRow, currentRow, header.bytes);
          bmp8.setRowChunk_y8lvms$(col, row, currentRow.data, width, colIncrement);
        }
         else if (bmp32 != null) {
          this.applyFilter_tzwyxu$(filter, lastRow, currentRow, bpp, bytesInThisRow);
          switch (bpp) {
            case 3:
              RGB$Companion_getInstance().decode_lg4na5$(currentRow.data, 0, row32, 0, pixelsInThisRow);
              break;
            case 4:
              RGBA$Companion_getInstance().decode_lg4na5$(currentRow.data, 0, row32, 0, pixelsInThisRow);
              break;
            default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Bytes: ' + bpp));
          }
          bmp32.setRowChunk_mv2y54$(col, row, row32, width, colIncrement);
        }
        context.swapRows();
      }
    }
    return bmp;
  };
  function PNG$DecodingContext(header) {
    this.header = header;
    this.lastRow = UByteArray_init(this.header.stride);
    this.currentRow = UByteArray_init(this.header.stride);
    this.row32 = RgbaArray$Companion_getInstance().invoke_za3lpa$(this.header.width);
  }
  PNG$DecodingContext.prototype.swapRows = function () {
    var temp = this.currentRow;
    this.currentRow = this.lastRow;
    this.lastRow = temp;
  };
  PNG$DecodingContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DecodingContext',
    interfaces: []
  };
  PNG.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    return new ImageData(listOf_0(new ImageFrame(Kotlin.isType(tmp$ = this.readCommon_0(s, false), Bitmap) ? tmp$ : throwCCE())));
  };
  PNG.prototype.paethPredictor_qt1dr2$ = function (a, b, c) {
    var p = a + b - c | 0;
    var pa = abs(p - a | 0);
    var pb = abs(p - b | 0);
    var pc = abs(p - c | 0);
    return pa <= pb && pa <= pc ? a : pb <= pc ? b : c;
  };
  PNG.prototype.applyFilter_tzwyxu$ = function (filter, p, c, bpp, size) {
    if (size === void 0)
      size = c.size;
    switch (filter) {
      case 0:
        break;
      case 1:
        for (var n = bpp; n < size; n++) {
          var tmp$ = c.data[n] & 255;
          var n_0 = n - bpp | 0;
          var v = tmp$ + (c.data[n_0] & 255) | 0;
          c.data[n] = toByte(v);
        }

        break;
      case 2:
        for (var n_1 = 0; n_1 < size; n_1++) {
          var v_0 = (c.data[n_1] & 255) + (p.data[n_1] & 255) | 0;
          c.data[n_1] = toByte(v_0);
        }

        break;
      case 3:
        for (var n_2 = 0; n_2 < bpp; n_2++) {
          var v_1 = (c.data[n_2] & 255) + ((p.data[n_2] & 255) / 2 | 0) | 0;
          c.data[n_2] = toByte(v_1);
        }

        for (var n_3 = bpp; n_3 < size; n_3++) {
          var tmp$_0 = c.data[n_3] & 255;
          var n_4 = n_3 - bpp | 0;
          var v_2 = tmp$_0 + (((c.data[n_4] & 255) + (p.data[n_3] & 255) | 0) / 2 | 0) | 0;
          c.data[n_3] = toByte(v_2);
        }

        break;
      case 4:
        for (var n_5 = 0; n_5 < bpp; n_5++) {
          var v_3 = (c.data[n_5] & 255) + (p.data[n_5] & 255) | 0;
          c.data[n_5] = toByte(v_3);
        }

        for (var n_6 = bpp; n_6 < size; n_6++) {
          var tmp$_1 = c.data[n_6] & 255;
          var n_7 = n_6 - bpp | 0;
          var tmp$_2 = c.data[n_7] & 255;
          var tmp$_3 = p.data[n_6] & 255;
          var n_8 = n_6 - bpp | 0;
          var v_4 = tmp$_1 + this.paethPredictor_qt1dr2$(tmp$_2, tmp$_3, p.data[n_8] & 255) | 0;
          c.data[n_6] = toByte(v_4);
        }

        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + ('Filter: ' + filter));
    }
  };
  PNG.$metadata$ = {
    kind: Kind_OBJECT,
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
  function PSD() {
    PSD_instance = this;
    ImageFormat.call(this, ['psd']);
  }
  PSD.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    var header = (tmp$ = this.decodeHeader_1ooaqm$(s, props)) != null ? tmp$ : invalidOp('Not a PSD file');
    var colorMode = readStream(s, readS32_be_0(s));
    var imageResources = readStream(s, readS32_be_0(s));
    var layerAndMask = readStream(s, readS32_be_0(s));
    var imageData = this.readImageData_0(openFastStream(readAvailable(s)), header);
    return new ImageData(listOf_0(new ImageFrame(imageData)));
  };
  PSD.prototype.packChannels_0 = function (width, height, channels) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var pos = 0;
    var out = new Bitmap32(width, height);
    var array = new Int8Array(Kotlin.imul(width, height));
    var tmp$_3;
    tmp$_3 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_3; i++) {
      array[i] = -1 | 0;
    }
    var dummyChannel = array;
    var rchannel = (tmp$ = getOrNull_0(channels, 0)) != null ? tmp$ : dummyChannel;
    var gchannel = (tmp$_0 = getOrNull_0(channels, 1)) != null ? tmp$_0 : dummyChannel;
    var bchannel = (tmp$_1 = getOrNull_0(channels, 2)) != null ? tmp$_1 : dummyChannel;
    var achannel = (tmp$_2 = getOrNull_0(channels, 3)) != null ? tmp$_2 : dummyChannel;
    for (var y = 0; y < height; y++) {
      for (var x = 0; x < width; x++) {
        var r = toUnsigned_0(rchannel[pos]);
        var g = toUnsigned_0(gchannel[pos]);
        var b = toUnsigned_0(bchannel[pos]);
        var a = toUnsigned_0(achannel[pos]);
        out.data.set_vlvk8p$(pos, RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a));
        pos = pos + 1 | 0;
      }
    }
    return out;
  };
  PSD.prototype.readImageData_0 = function ($receiver, header) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var compressionMethod = $receiver.readU16_be();
    var width = header.width;
    var height = header.height;
    var cchannels = header.channels;
    var array = Array_0(cchannels);
    var tmp$_4;
    tmp$_4 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_4; i++) {
      array[i] = new Int8Array(Kotlin.imul(width, height));
    }
    var channels = array;
    switch (compressionMethod) {
      case 0:
        for (var n = 0; n < cchannels; n++) {
          channels[n] = $receiver.readBytes_za3lpa$(Kotlin.imul(width, height));
        }

        break;
      case 1:
        var $receiver_0 = until(0, cchannels);
        var destination = ArrayList_init_1(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_5;
        tmp$_5 = $receiver_0.iterator();
        while (tmp$_5.hasNext()) {
          var item = tmp$_5.next();
          destination.add_11rb$($receiver.readShortArray_be_za3lpa$(height));
        }

        var sizes = destination;
        for (var cindex = 0; cindex < cchannels; cindex++) {
          var carray = channels[cindex];
          var cpos = 0;
          tmp$ = sizes.get_za3lpa$(cindex);
          for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
            var size = tmp$[tmp$_0];
            var end = $receiver.offset + size;
            while ($receiver.offset < end) {
              var len = $receiver.readU8();
              if (len >= 128) {
                var byte = $receiver.readU8();
                tmp$_1 = 256 - len | 0;
                for (var j = 0; j <= tmp$_1; j++) {
                  carray[tmp$_2 = cpos, cpos = tmp$_2 + 1 | 0, tmp$_2] = toByte(byte);
                }
              }
               else {
                for (var j_0 = 0; j_0 <= len; j_0++) {
                  carray[tmp$_3 = cpos, cpos = tmp$_3 + 1 | 0, tmp$_3] = toByte($receiver.readU8());
                }
              }
            }
          }
        }

        break;
      default:invalidOp('Unsupported compression method ' + compressionMethod);
        break;
    }
    return this.packChannels_0(width, height, channels);
  };
  function PSD$PsdImageInfo() {
    ImageInfo.call(this);
    this.channels = 0;
    this.bitsPerChannel = 0;
    this.colorMode = 0;
  }
  PSD$PsdImageInfo.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PsdImageInfo',
    interfaces: [ImageInfo]
  };
  PSD.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    if (!equals(readStringz(s, 4), '8BPS'))
      return null;
    var version = readU16_be_0(s);
    switch (version) {
      case 1:
        break;
      case 2:
        return null;
      default:return null;
    }
    var reserved = readBytes(s, 6);
    var channels = readU16_be_0(s);
    var height = readS32_be_0(s);
    var width = readS32_be_0(s);
    var bitsPerChannel = readU16_be_0(s);
    var colorMode = readU16_be_0(s);
    var $receiver = new PSD$PsdImageInfo();
    $receiver.width = width;
    $receiver.height = height;
    $receiver.bitsPerPixel = Kotlin.imul(bitsPerChannel, channels);
    $receiver.channels = channels;
    $receiver.bitsPerChannel = bitsPerChannel;
    $receiver.colorMode = colorMode;
    return $receiver;
  };
  PSD.$metadata$ = {
    kind: Kind_OBJECT,
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
  var trim_0 = Kotlin.kotlin.text.trim_gw00vp$;
  SVG.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$;
    var tmp$_0 = sliceStart(s);
    var b = s.length.toInt();
    var $receiver = readString(tmp$_0, Math_0.min(100, b));
    var tmp$_1;
    var start = trim_0(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : throwCCE()).toString().toLowerCase();
    try {
      if (startsWith(start, '<svg') || startsWith(start, '<?xml')) {
        var $receiver_0 = toString_0(readAll(sliceStart(s)), lang.UTF8);
        var tmp$_2;
        var content = trim_0(Kotlin.isCharSequence(tmp$_2 = $receiver_0) ? tmp$_2 : throwCCE()).toString();
        var svg = SVG_init(content);
        var $receiver_1 = new ImageInfo();
        $receiver_1.width = svg.width;
        $receiver_1.height = svg.height;
        tmp$ = $receiver_1;
      }
       else {
        tmp$ = null;
      }
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        tmp$ = null;
      }
       else
        throw t;
    }
    return tmp$;
  };
  SVG.prototype.readImage_1ooaqm$$default = function (s, props) {
    var $receiver = toString_0(readAll(sliceStart(s)), lang.UTF8);
    var tmp$;
    var content = trim_0(Kotlin.isCharSequence(tmp$ = $receiver) ? tmp$ : throwCCE()).toString();
    var svg = SVG_init(content);
    return new ImageData(listOf_0(new ImageFrame(render_0(svg).toBmp32())));
  };
  SVG.$metadata$ = {
    kind: Kind_OBJECT,
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
  function TGA() {
    TGA_instance = this;
    ImageFormat.call(this, ['tga']);
  }
  TGA.prototype.decodeHeader_1ooaqm$$default = function (s, props) {
    var tmp$;
    try {
      var h = this.readHeader_39qel5$(s);
      var $receiver = new ImageInfo();
      $receiver.width = h.width;
      $receiver.height = h.height;
      $receiver.bitsPerPixel = h.bitsPerPixel;
      tmp$ = $receiver;
    }
     catch (t) {
      if (Kotlin.isType(t, Throwable)) {
        tmp$ = null;
      }
       else
        throw t;
    }
    return tmp$;
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
    kind: Kind_CLASS,
    simpleName: 'Info',
    interfaces: []
  };
  TGA.prototype.readHeader_39qel5$ = function (s) {
    var idLength = readU8(s);
    var colorMapType = readU8(s);
    var imageType = readU8(s);
    switch (imageType) {
      case 1:
        throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported indexed');
      case 2:
        break;
      case 9:
      case 10:
        throw new NotImplementedError_init('An operation is not implemented: ' + 'Unsupported RLE');
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'Unknown TGA');
    }
    var firstIndexEntry = readU16_le_0(s);
    var colorMapLength = readU16_le_0(s);
    var colorMapEntrySize = readU8(s);
    s.position = s.position.add(Kotlin.Long.fromInt(Kotlin.imul(colorMapLength, colorMapEntrySize)));
    var xorig = readS16_le(s);
    var yorig = readS16_le(s);
    var width = readS16_le(s);
    var height = readS16_le(s);
    var pixelDepth = readU8(s);
    switch (pixelDepth) {
      case 24:
      case 32:
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'Not a RGBA tga');
    }
    var imageDescriptor = readU8(s);
    var flipY = (imageDescriptor >>> 5 & 1) === 0;
    var storage = imageDescriptor >>> 6 & 3;
    readBytes(s, idLength);
    return new TGA$Info(width, height, flipY, pixelDepth);
  };
  TGA.prototype.readImage_1ooaqm$$default = function (s, props) {
    var tmp$;
    var info = this.readHeader_39qel5$(s);
    switch (info.bitsPerPixel) {
      case 24:
        tmp$ = RGB$Companion_getInstance();
        break;
      case 32:
        tmp$ = RGBA$Companion_getInstance();
        break;
      default:throw new NotImplementedError_init('An operation is not implemented: ' + 'Not a RGBA tga');
    }
    var format = tmp$;
    var out = (new Bitmap32(info.width, info.height)).writeDecoded_77vltg$(format, readBytes(s, Kotlin.imul(info.area, info.bytes)));
    if (info.flipY)
      out.flipY();
    return new ImageData(listOf_0(new ImageFrame(out)));
  };
  TGA.prototype.writeImage_2psbf2$$default = function (image, s, props) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var bitmap = image.mainBitmap;
    if (Kotlin.isType(bitmap, Bitmap8)) {
      throw new NotImplementedError_init('An operation is not implemented: ' + 'Not implemented encoding TGA Bitmap8');
    }
     else if (Kotlin.isType(bitmap, Bitmap32)) {
      var data = new Int8Array(bitmap.area * 4 | 0);
      var m = 0;
      tmp$ = bitmap.data.iterator();
      while (tmp$.hasNext()) {
        var c = tmp$.next();
        data[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = toByte(c.b);
        data[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = toByte(c.g);
        data[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = toByte(c.r);
        data[tmp$_3 = m, m = tmp$_3 + 1 | 0, tmp$_3] = toByte(c.a);
      }
      write8(s, 0);
      write8(s, 0);
      write8(s, 2);
      write16_le_0(s, 0);
      write16_le_0(s, 0);
      write8(s, 0);
      write16_le_0(s, 0);
      write16_le_0(s, 0);
      write16_le_0(s, bitmap.width);
      write16_le_0(s, bitmap.height);
      write8(s, 32);
      write8(s, 32);
      writeBytes(s, data);
    }
  };
  TGA.$metadata$ = {
    kind: Kind_OBJECT,
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
    var colors = listOf([Colors_getInstance().RED, Colors_getInstance().GREEN, Colors_getInstance().BLUE, Colors_getInstance().BLACK]);
    var bounds_0 = bounds($receiver);
    var out = new Bitmap32(numberToInt(bounds_0.width), numberToInt(bounds_0.height));
    var index = 0;
    for (var tmp$ = $receiver.iterator(); tmp$.hasNext(); ++index) {
      var r = tmp$.next();
      var color = colors.get_za3lpa$(index % colors.size);
      out.fill_kuukgh$(color, numberToInt(r.x), numberToInt(r.y), numberToInt(r.width), numberToInt(r.height));
    }
    return out;
  }
  function Bitmap32Context2d(bmp, antialiasing) {
    Context2d$Renderer.call(this);
    this.bmp = bmp;
    this.antialiasing = antialiasing;
    this.colorFiller = new Bitmap32Context2d$ColorFiller();
    this.gradientFiller = new Bitmap32Context2d$GradientFiller();
    this.bitmapFiller = new Bitmap32Context2d$BitmapFiller(this.antialiasing);
    this.noneFiller = new Bitmap32Context2d$NoneFiller();
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
  function Bitmap32Context2d$render$lambda(it) {
    return it.x;
  }
  Bitmap32Context2d.prototype.render_w64o9o$ = function (state, fill) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var fillStyle = state.fillStyle;
    if (Kotlin.isType(fillStyle, Context2d$None)) {
      var $receiver = this.noneFiller;
      $receiver.set_ydr4zb$(fillStyle, state);
      tmp$ = $receiver;
    }
     else if (Kotlin.isType(fillStyle, Context2d$Color)) {
      var $receiver_0 = this.colorFiller;
      $receiver_0.set_ydr4zb$(fillStyle, state);
      tmp$ = $receiver_0;
    }
     else if (Kotlin.isType(fillStyle, Context2d$Gradient)) {
      var $receiver_1 = this.gradientFiller;
      $receiver_1.set_ydr4zb$(fillStyle, state);
      tmp$ = $receiver_1;
    }
     else if (Kotlin.isType(fillStyle, Context2d$BitmapPaint)) {
      var $receiver_2 = this.bitmapFiller;
      $receiver_2.set_ydr4zb$(fillStyle, state);
      tmp$ = $receiver_2;
    }
     else {
      throw new NotImplementedError_init();
    }
    var filler = tmp$;
    var $receiver_3 = this.getApproximatedPoints_krcd5j$(state.path);
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver_3, 10));
    var tmp$_5;
    tmp$_5 = $receiver_3.iterator();
    while (tmp$_5.hasNext()) {
      var item = tmp$_5.next();
      destination.add_11rb$(transformed(item, state.transform));
    }
    var points = destination;
    var edges = ArrayList_init_0();
    tmp$_0 = points.size;
    for (var n = 0; n < tmp$_0; n++) {
      var a = points.get_za3lpa$(n);
      var b = points.get_za3lpa$((n + 1 | 0) % points.size);
      var edge = a.y < b.y ? new Bitmap32Context2d$Edge(a, b, 1) : new Bitmap32Context2d$Edge(b, a, -1);
      if (edge.isNotCoplanarX) {
        edges.add_11rb$(edge);
      }
    }
    var bounds = bounds_0(points);
    tmp$_1 = numberToInt(bounds.top);
    tmp$_2 = numberToInt(bounds.bottom);
    for (var y = tmp$_1; y <= tmp$_2; y++) {
      tmp$_3 = this.bmp.height;
      if (!(0 <= y && y < tmp$_3))
        continue;
      var destination_0 = ArrayList_init_0();
      var tmp$_6;
      tmp$_6 = edges.iterator();
      while (tmp$_6.hasNext()) {
        var element = tmp$_6.next();
        if (element.containsY_za3lpa$(y))
          destination_0.add_11rb$(element);
      }
      var destination_1 = ArrayList_init_1(collectionSizeOrDefault(destination_0, 10));
      var tmp$_7;
      tmp$_7 = destination_0.iterator();
      while (tmp$_7.hasNext()) {
        var item_0 = tmp$_7.next();
        destination_1.add_11rb$(new IVector2_init(numberToDouble(item_0.intersectX_za3lpa$(y)), numberToDouble(y)));
      }
      var $receiver_4 = sortedBy2(destination_1, Bitmap32Context2d$render$lambda);
      var destination_2 = ArrayList_init_1(collectionSizeOrDefault($receiver_4, 10));
      var tmp$_8;
      tmp$_8 = $receiver_4.iterator();
      while (tmp$_8.hasNext()) {
        var item_1 = tmp$_8.next();
        destination_2.add_11rb$(numberToInt(item_1.x));
      }
      var xx = destination_2;
      tmp$_4 = xx.size - 1 | 0;
      for (var n_0 = 0; n_0 < tmp$_4; n_0++) {
        var a_0 = clamp(xx.get_za3lpa$(n_0 + 0 | 0), 0, this.bmp.width);
        var b_0 = clamp(xx.get_za3lpa$(n_0 + 1 | 0), 0, this.bmp.width);
        if (n_0 % 2 === 0) {
          filler.fill_s5njrs$(this.bmp.data, this.bmp.index_vux9f0$(a_0, y), a_0, y, b_0 - a_0 | 0);
        }
      }
    }
  };
  Bitmap32Context2d.prototype.getApproximatedPoints_krcd5j$ = function ($receiver) {
    var $receiver_0 = toPaths2($receiver);
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element;
      addAll(destination, list);
    }
    return destination;
  };
  function Bitmap32Context2d$Edge(a, b, wind) {
    this.a = a;
    this.b = b;
    this.wind = wind;
    this.isCoplanarX = this.a.y === this.b.y;
    this.isCoplanarY = this.a.x === this.b.x;
    this.slope_0 = (this.b.y - this.a.y) / (this.b.x - this.a.x);
    this.h_0 = this.a.y - this.a.x * this.slope_0;
  }
  Object.defineProperty(Bitmap32Context2d$Edge.prototype, 'isNotCoplanarX', {
    get: function () {
      return !this.isCoplanarX;
    }
  });
  Bitmap32Context2d$Edge.prototype.containsY_za3lpa$ = function (y) {
    return contains_0(rangeTo(this.a.y, this.b.y), y);
  };
  Bitmap32Context2d$Edge.prototype.intersectX_za3lpa$ = function (y) {
    return this.isCoplanarY ? this.a.x : (y - this.h_0) / this.slope_0;
  };
  Bitmap32Context2d$Edge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Edge',
    interfaces: []
  };
  Bitmap32Context2d$Edge.prototype.component1 = function () {
    return this.a;
  };
  Bitmap32Context2d$Edge.prototype.component2 = function () {
    return this.b;
  };
  Bitmap32Context2d$Edge.prototype.component3 = function () {
    return this.wind;
  };
  Bitmap32Context2d$Edge.prototype.copy_j4za2m$ = function (a, b, wind) {
    return new Bitmap32Context2d$Edge(a === void 0 ? this.a : a, b === void 0 ? this.b : b, wind === void 0 ? this.wind : wind);
  };
  Bitmap32Context2d$Edge.prototype.toString = function () {
    return 'Edge(a=' + Kotlin.toString(this.a) + (', b=' + Kotlin.toString(this.b)) + (', wind=' + Kotlin.toString(this.wind)) + ')';
  };
  Bitmap32Context2d$Edge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.wind) | 0;
    return result;
  };
  Bitmap32Context2d$Edge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.wind, other.wind)))));
  };
  function Bitmap32Context2d$Filler() {
    this.fill_43prn$_0 = this.fill_43prn$_0;
    this.state_2s8t03$_0 = this.state_2s8t03$_0;
  }
  Object.defineProperty(Bitmap32Context2d$Filler.prototype, 'fill', {
    get: function () {
      if (this.fill_43prn$_0 == null)
        return throwUPAE('fill');
      return this.fill_43prn$_0;
    },
    set: function (fill) {
      this.fill_43prn$_0 = fill;
    }
  });
  Object.defineProperty(Bitmap32Context2d$Filler.prototype, 'state', {
    get: function () {
      if (this.state_2s8t03$_0 == null)
        return throwUPAE('state');
      return this.state_2s8t03$_0;
    },
    set: function (state) {
      this.state_2s8t03$_0 = state;
    }
  });
  Bitmap32Context2d$Filler.prototype.set_ydr4zb$ = function (paint, state) {
    this.fill = paint;
    this.state = state;
    this.updated();
  };
  Bitmap32Context2d$Filler.prototype.updated = function () {
  };
  Bitmap32Context2d$Filler.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Filler',
    interfaces: []
  };
  function Bitmap32Context2d$NoneFiller() {
    Bitmap32Context2d$Filler.call(this);
  }
  Bitmap32Context2d$NoneFiller.prototype.fill_s5njrs$ = function (data, offset, x, y, count) {
  };
  Bitmap32Context2d$NoneFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NoneFiller',
    interfaces: [Bitmap32Context2d$Filler]
  };
  function Bitmap32Context2d$ColorFiller() {
    Bitmap32Context2d$Filler.call(this);
  }
  Bitmap32Context2d$ColorFiller.prototype.fill_s5njrs$ = function (data, offset, x, y, count) {
    var c = this.fill.color;
    for (var n = 0; n < count; n++) {
      data.set_vlvk8p$(offset + n | 0, c);
    }
  };
  Bitmap32Context2d$ColorFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorFiller',
    interfaces: [Bitmap32Context2d$Filler]
  };
  function Bitmap32Context2d$BitmapFiller(antialiasing) {
    Bitmap32Context2d$Filler.call(this);
    this.antialiasing = antialiasing;
    this.stateTrans_s7hkmw$_0 = this.stateTrans_s7hkmw$_0;
    this.fillTrans_qop94g$_0 = this.fillTrans_qop94g$_0;
  }
  Object.defineProperty(Bitmap32Context2d$BitmapFiller.prototype, 'stateTrans', {
    get: function () {
      if (this.stateTrans_s7hkmw$_0 == null)
        return throwUPAE('stateTrans');
      return this.stateTrans_s7hkmw$_0;
    },
    set: function (stateTrans) {
      this.stateTrans_s7hkmw$_0 = stateTrans;
    }
  });
  Object.defineProperty(Bitmap32Context2d$BitmapFiller.prototype, 'fillTrans', {
    get: function () {
      if (this.fillTrans_qop94g$_0 == null)
        return throwUPAE('fillTrans');
      return this.fillTrans_qop94g$_0;
    },
    set: function (fillTrans) {
      this.fillTrans_qop94g$_0 = fillTrans;
    }
  });
  Bitmap32Context2d$BitmapFiller.prototype.updated = function () {
    this.stateTrans = this.state.transform.inverted_yx07kl$();
    this.fillTrans = this.fill.transform.inverted_yx07kl$();
  };
  Bitmap32Context2d$BitmapFiller.prototype.fill_s5njrs$ = function (data, offset, x, y, count) {
    for (var n = 0; n < count; n++) {
      var $this = this.fillTrans;
      var px = x + n | 0;
      var bmpX = $this.transformX_lu1900$(numberToDouble(px), numberToDouble(y));
      var $this_0 = this.fillTrans;
      var px_0 = y + n | 0;
      var bmpY = $this_0.transformY_lu1900$(numberToDouble(px_0), numberToDouble(y));
      if (this.antialiasing) {
        data.set_vlvk8p$(offset + n | 0, this.fill.bitmap.get32Sampled_lu1900$(bmpX, bmpY));
      }
       else {
        data.set_vlvk8p$(offset + n | 0, this.fill.bitmap.get32Clamped_vux9f0$(numberToInt(bmpX), numberToInt(bmpY)));
      }
    }
  };
  Bitmap32Context2d$BitmapFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitmapFiller',
    interfaces: [Bitmap32Context2d$Filler]
  };
  function Bitmap32Context2d$GradientFiller() {
    Bitmap32Context2d$Filler.call(this);
    this.NCOLORS = 256;
    this.colors = RgbaArray$Companion_getInstance().invoke_za3lpa$(this.NCOLORS);
    this.stateTrans_fsow7d$_0 = this.stateTrans_fsow7d$_0;
    this.fillTrans_2cq24x$_0 = this.fillTrans_2cq24x$_0;
  }
  Bitmap32Context2d$GradientFiller.prototype.stopN_za3lpa$ = function (n) {
    return numberToInt(this.fill.stops.get_za3lpa$(n) * this.NCOLORS);
  };
  Object.defineProperty(Bitmap32Context2d$GradientFiller.prototype, 'stateTrans', {
    get: function () {
      if (this.stateTrans_fsow7d$_0 == null)
        return throwUPAE('stateTrans');
      return this.stateTrans_fsow7d$_0;
    },
    set: function (stateTrans) {
      this.stateTrans_fsow7d$_0 = stateTrans;
    }
  });
  Object.defineProperty(Bitmap32Context2d$GradientFiller.prototype, 'fillTrans', {
    get: function () {
      if (this.fillTrans_2cq24x$_0 == null)
        return throwUPAE('fillTrans');
      return this.fillTrans_2cq24x$_0;
    },
    set: function (fillTrans) {
      this.fillTrans_2cq24x$_0 = fillTrans;
    }
  });
  Bitmap32Context2d$GradientFiller.prototype.updated = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.stateTrans = this.state.transform.inverted_yx07kl$();
    this.fillTrans = this.fill.transform.inverted_yx07kl$();
    tmp$ = this.stopN_za3lpa$(0);
    for (var n = 0; n < tmp$; n++)
      this.colors.set_vlvk8p$(n, new RGBA(first(this.fill.colors)));
    tmp$_0 = this.fill.numberOfStops - 1 | 0;
    for (var n_0 = 0; n_0 < tmp$_0; n_0++) {
      var stop0 = this.stopN_za3lpa$(n_0 + 0 | 0);
      var stop1 = this.stopN_za3lpa$(n_0 + 1 | 0);
      var color0 = new RGBA(this.fill.colors.get_za3lpa$(n_0 + 0 | 0));
      var color1 = new RGBA(this.fill.colors.get_za3lpa$(n_0 + 1 | 0));
      for (var s = stop0; s < stop1; s++) {
        var ratio = (s - stop0 | 0) / (stop1 - stop0 | 0);
        this.colors.set_vlvk8p$(s, RGBA$Companion_getInstance().interpolate_utyrs$(color0, color1, ratio));
      }
    }
    tmp$_1 = this.stopN_za3lpa$(this.fill.numberOfStops - 1 | 0);
    tmp$_2 = this.NCOLORS;
    for (var n_1 = tmp$_1; n_1 < tmp$_2; n_1++)
      this.colors.set_vlvk8p$(n_1, new RGBA(last_0(this.fill.colors)));
  };
  Bitmap32Context2d$GradientFiller.prototype.fill_s5njrs$ = function (data, offset, x, y, count) {
    var x_0 = this.fill.x0;
    var y_0 = this.fill.y0;
    var p0 = new IVector2_init(numberToDouble(x_0), numberToDouble(y_0));
    var x_1 = this.fill.x1;
    var y_1 = this.fill.y1;
    var p1 = new IVector2_init(numberToDouble(x_1), numberToDouble(y_1));
    var $receiver = new Matrix2d();
    $receiver.multiply_mgxgbw$($receiver, this.stateTrans);
    $receiver.multiply_mgxgbw$($receiver, this.fillTrans);
    $receiver.translate_lu1900$(-p0.x, -p0.y);
    $receiver.scale_lu1900$(1.0 / clamp_0(distanceTo(p0, p1), 1.0, 16000.0));
    $receiver.rotate_14dthe$(-Angle.Companion.betweenRad_g6xq6k$(p0, p1));
    var mat = $receiver;
    for (var n = 0; n < count; n++) {
      var ratio = clamp01(mat.transformX_lu1900$(x + n | 0, y));
      data.set_vlvk8p$(offset + n | 0, this.colors.get_za3lpa$(numberToInt(ratio * (this.NCOLORS - 1 | 0))));
    }
  };
  Bitmap32Context2d$GradientFiller.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GradientFiller',
    interfaces: [Bitmap32Context2d$Filler]
  };
  Bitmap32Context2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bitmap32Context2d',
    interfaces: [Context2d$Renderer]
  };
  var RedirectMutableFieldGen_init = $module$korio_js.com.soywiz.korio.util.RedirectMutableFieldGen;
  function Context2d(renderer) {
    this.renderer = renderer;
    this.state = new Context2d$State();
    this.stack_0 = LinkedList_init();
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.LineCap.' + name);
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.LineJoin.' + name);
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.CycleMethod.' + name);
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.ShapeRasterizerMethod.' + name);
    }
  }
  Context2d$ShapeRasterizerMethod.valueOf_61zpoe$ = Context2d$ShapeRasterizerMethod$valueOf;
  Context2d.prototype.dispose = function () {
    this.renderer.dispose();
  };
  Context2d.prototype.withScaledRenderer_lu1900$ = function (scaleX, scaleY) {
    if (scaleY === void 0)
      scaleY = scaleX;
    return scaleX === 1.0 && scaleY === 1.0 ? this : new Context2d(new Context2d$ScaledRenderer(this.renderer, scaleX, scaleY));
  };
  function Context2d$ScaledRenderer(parent, scaleX, scaleY) {
    Context2d$Renderer.call(this);
    this.parent = parent;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }
  Object.defineProperty(Context2d$ScaledRenderer.prototype, 'width', {
    get: function () {
      return numberToInt(this.parent.width / this.scaleX);
    }
  });
  Object.defineProperty(Context2d$ScaledRenderer.prototype, 'height', {
    get: function () {
      return numberToInt(this.parent.height / this.scaleY);
    }
  });
  Context2d$ScaledRenderer.prototype.adjustMatrix_0 = wrapFunction(function () {
    return function (transform, callback) {
      var keep_mqpe2v$result;
      var a = transform.a;
      var b = transform.b;
      var c = transform.c;
      var d = transform.d;
      var tx = transform.tx;
      var ty = transform.ty;
      try {
        transform.scale_lu1900$(this.scaleX, this.scaleY);
        keep_mqpe2v$result = callback();
      }
      finally {
        transform.a = a;
        transform.b = b;
        transform.c = c;
        transform.d = d;
        transform.tx = tx;
        transform.ty = ty;
      }
      return keep_mqpe2v$result;
    };
  });
  Context2d$ScaledRenderer.prototype.adjustState_0 = wrapFunction(function () {
    return function (state, callback) {
      var transform = state.transform;
      var keep_mqpe2v$result;
      var a = transform.a;
      var b = transform.b;
      var c = transform.c;
      var d = transform.d;
      var tx = transform.tx;
      var ty = transform.ty;
      try {
        transform.scale_lu1900$(this.scaleX, this.scaleY);
        keep_mqpe2v$result = callback();
      }
      finally {
        transform.a = a;
        transform.b = b;
        transform.c = c;
        transform.d = d;
        transform.tx = tx;
        transform.ty = ty;
      }
      return keep_mqpe2v$result;
    };
  });
  Context2d$ScaledRenderer.prototype.render_w64o9o$ = function (state, fill) {
    var transform = state.transform;
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      this.parent.render_w64o9o$(state, fill);
    }
    finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
  };
  Context2d$ScaledRenderer.prototype.renderText_2jdvt1$ = function (state, font, text, x, y, fill) {
    var transform = state.transform;
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      this.parent.renderText_2jdvt1$(state, font, text, x, y, fill);
    }
    finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
  };
  Context2d$ScaledRenderer.prototype.getBounds_qlucl1$ = function (font, text, out) {
    this.parent.getBounds_qlucl1$(font, text, out);
  };
  Context2d$ScaledRenderer.prototype.drawImage_4amb17$$default = function (image, x, y, width, height, transform) {
    var a = transform.a;
    var b = transform.b;
    var c = transform.c;
    var d = transform.d;
    var tx = transform.tx;
    var ty = transform.ty;
    try {
      transform.scale_lu1900$(this.scaleX, this.scaleY);
      this.parent.drawImage_4amb17$(image, x, y, width, height, transform);
    }
    finally {
      transform.a = a;
      transform.b = b;
      transform.c = c;
      transform.d = d;
      transform.tx = tx;
      transform.ty = ty;
    }
  };
  Context2d$ScaledRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaledRenderer',
    interfaces: [Context2d$Renderer]
  };
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
    kind: Kind_CLASS,
    interfaces: [Context2d$Renderer]
  };
  Context2d$Renderer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
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
    var tmp$ = void 0;
    var $receiver = new GraphicsPath();
    $receiver.rect_6y0v78$(x, y, width, height);
    var state = new Context2d$State(transform, tmp$, $receiver, void 0, void 0, void 0, void 0, void 0, void 0, new Context2d$BitmapPaint(image, (new Matrix2d()).scale_lu1900$(width / image.width, height / image.height).translate_lu1900$(numberToDouble(x), numberToDouble(y))));
    this.render_w64o9o$(state, true);
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
  Context2d$Renderer.prototype.dispose = function () {
  };
  Context2d$Renderer.$metadata$ = {
    kind: Kind_CLASS,
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
    Context2d$VerticalAlign$MIDDLE_instance = new Context2d$VerticalAlign('MIDDLE', 1, 0.5);
    Context2d$VerticalAlign$BASELINE_instance = new Context2d$VerticalAlign('BASELINE', 2, 1.0);
    Context2d$VerticalAlign$BOTTOM_instance = new Context2d$VerticalAlign('BOTTOM', 3, 1.0);
  }
  var Context2d$VerticalAlign$TOP_instance;
  function Context2d$VerticalAlign$TOP_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$TOP_instance;
  }
  var Context2d$VerticalAlign$MIDDLE_instance;
  function Context2d$VerticalAlign$MIDDLE_getInstance() {
    Context2d$VerticalAlign_initFields();
    return Context2d$VerticalAlign$MIDDLE_instance;
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
    if (equals(this, Context2d$VerticalAlign$BASELINE_getInstance()))
      return baseline;
    else
      return -height * this.ratio;
  };
  Context2d$VerticalAlign.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VerticalAlign',
    interfaces: [Enum]
  };
  function Context2d$VerticalAlign$values() {
    return [Context2d$VerticalAlign$TOP_getInstance(), Context2d$VerticalAlign$MIDDLE_getInstance(), Context2d$VerticalAlign$BASELINE_getInstance(), Context2d$VerticalAlign$BOTTOM_getInstance()];
  }
  Context2d$VerticalAlign.values = Context2d$VerticalAlign$values;
  function Context2d$VerticalAlign$valueOf(name) {
    switch (name) {
      case 'TOP':
        return Context2d$VerticalAlign$TOP_getInstance();
      case 'MIDDLE':
        return Context2d$VerticalAlign$MIDDLE_getInstance();
      case 'BASELINE':
        return Context2d$VerticalAlign$BASELINE_getInstance();
      case 'BOTTOM':
        return Context2d$VerticalAlign$BOTTOM_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.VerticalAlign.' + name);
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.HorizontalAlign.' + name);
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.ScaleMode.' + name);
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
    kind: Kind_CLASS,
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
      return this.lineScaleMode_uvt0g7$_0.redirect().get();
    },
    set: function (lineScaleMode) {
      this.lineScaleMode_uvt0g7$_0.redirect().set(lineScaleMode);
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineWidth', {
    get: function () {
      return this.lineWidth_eizzma$_0.redirect().get();
    },
    set: function (lineWidth) {
      this.lineWidth_eizzma$_0.redirect().set(lineWidth);
    }
  });
  Object.defineProperty(Context2d.prototype, 'lineCap', {
    get: function () {
      return this.lineCap_3v9p9a$_0.redirect().get();
    },
    set: function (lineCap) {
      this.lineCap_3v9p9a$_0.redirect().set(lineCap);
    }
  });
  Object.defineProperty(Context2d.prototype, 'strokeStyle', {
    get: function () {
      return this.strokeStyle_b8jfmh$_0.redirect().get();
    },
    set: function (strokeStyle) {
      this.strokeStyle_b8jfmh$_0.redirect().set(strokeStyle);
    }
  });
  Object.defineProperty(Context2d.prototype, 'fillStyle', {
    get: function () {
      return this.fillStyle_mocpqm$_0.redirect().get();
    },
    set: function (fillStyle) {
      this.fillStyle_mocpqm$_0.redirect().set(fillStyle);
    }
  });
  Object.defineProperty(Context2d.prototype, 'font', {
    get: function () {
      return this.font_hw4l97$_0.redirect().get();
    },
    set: function (font) {
      this.font_hw4l97$_0.redirect().set(font);
    }
  });
  Object.defineProperty(Context2d.prototype, 'verticalAlign', {
    get: function () {
      return this.verticalAlign_9mcoep$_0.redirect().get();
    },
    set: function (verticalAlign) {
      this.verticalAlign_9mcoep$_0.redirect().set(verticalAlign);
    }
  });
  Object.defineProperty(Context2d.prototype, 'horizontalAlign', {
    get: function () {
      return this.horizontalAlign_o0d4qn$_0.redirect().get();
    },
    set: function (horizontalAlign) {
      this.horizontalAlign_o0d4qn$_0.redirect().set(horizontalAlign);
    }
  });
  Object.defineProperty(Context2d.prototype, 'globalAlpha', {
    get: function () {
      return this.globalAlpha_l2yrp7$_0.redirect().get();
    },
    set: function (globalAlpha) {
      this.globalAlpha_l2yrp7$_0.redirect().set(globalAlpha);
    }
  });
  Context2d.prototype.fillStyle_mb1y7v$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.fillStyle_mb1y7v$', function (paint, callback) {
    var oldStyle = this.fillStyle;
    this.fillStyle = paint;
    try {
      callback();
    }
    finally {
      this.fillStyle = oldStyle;
    }
  });
  Context2d.prototype.strokeStyle_mb1y7v$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.strokeStyle_mb1y7v$', function (paint, callback) {
    var oldStyle = this.strokeStyle;
    this.strokeStyle = paint;
    try {
      callback();
    }
    finally {
      this.strokeStyle = oldStyle;
    }
  });
  Context2d.prototype.font_yrt615$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.font_yrt615$', function (font, halign, valign, callback) {
    if (halign === void 0)
      halign = null;
    if (valign === void 0)
      valign = null;
    var oldFont = this.font;
    var oldHalign = this.horizontalAlign;
    var oldValign = this.verticalAlign;
    try {
      if (font != null)
        this.font = font;
      if (halign != null)
        this.horizontalAlign = halign;
      if (valign != null)
        this.verticalAlign = valign;
      callback();
    }
    finally {
      this.font = oldFont;
      this.horizontalAlign = oldHalign;
      this.verticalAlign = oldValign;
    }
  });
  Context2d.prototype.fillStyle_2rievy$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.fillStyle_2rievy$', function (color, callback) {
    var paint = this.createColor_md34sx$(color);
    var oldStyle = this.fillStyle;
    this.fillStyle = paint;
    try {
      callback();
    }
    finally {
      this.fillStyle = oldStyle;
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
  Context2d.prototype.scale_z8e4lc$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.scale_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (sx, sy) {
      if (sy === void 0)
        sy = sx;
      return this.scale_lu1900$(numberToDouble(sx), numberToDouble(sy));
    };
  }));
  Context2d.prototype.translate_z8e4lc$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.translate_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (tx, ty) {
      return this.translate_lu1900$(numberToDouble(tx), numberToDouble(ty));
    };
  }));
  Context2d.prototype.rotate_3p81yu$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.rotate_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (angle) {
      return this.rotate_14dthe$(numberToDouble(angle));
    };
  }));
  Context2d.prototype.rotateDeg_3p81yu$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.rotateDeg_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (degs) {
      return this.rotateDeg_14dthe$(numberToDouble(degs));
    };
  }));
  Context2d.prototype.scale_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    return this.state.transform.prescale_lu1900$(sx, sy);
  };
  Context2d.prototype.rotate_14dthe$ = function (angle) {
    return this.state.transform.prerotate_14dthe$(angle);
  };
  Context2d.prototype.rotateDeg_14dthe$ = function (degs) {
    return this.state.transform.prerotate_14dthe$(Angle.Companion.degreesToRadians_14dthe$(degs));
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
  Context2d.prototype.moveTo_z8e4lc$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.moveTo_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y) {
      this.moveTo_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  Context2d.prototype.lineTo_z8e4lc$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.lineTo_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y) {
      this.lineTo_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  Context2d.prototype.quadraticCurveTo_1ugm5o$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.quadraticCurveTo_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (cx, cy, ax, ay) {
      this.quadraticCurveTo_6y0v78$(numberToDouble(cx), numberToDouble(cy), numberToDouble(ax), numberToDouble(ay));
    };
  }));
  Context2d.prototype.bezierCurveTo_9wz194$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.bezierCurveTo_9wz194$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (cx1, cy1, cx2, cy2, ax, ay) {
      this.bezierCurveTo_15yvbs$(numberToDouble(cx1), numberToDouble(cy1), numberToDouble(cx2), numberToDouble(cy2), numberToDouble(ax), numberToDouble(ay));
    };
  }));
  Context2d.prototype.arcTo_8f6bxe$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.arcTo_8f6bxe$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x1, y1, x2, y2, radius) {
      this.arcTo_1lq62i$(numberToDouble(x1), numberToDouble(y1), numberToDouble(x2), numberToDouble(y2), numberToDouble(radius));
    };
  }));
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
  Context2d.prototype.rect_1ugm5o$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.rect_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      this.rect_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  Context2d.prototype.strokeRect_1ugm5o$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.strokeRect_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      this.strokeRect_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  Context2d.prototype.fillRect_1ugm5o$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.fillRect_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      this.fillRect_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  Context2d.prototype.fillRoundRect_9wz194$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.fillRoundRect_9wz194$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height, rx, ry) {
      if (ry === void 0)
        ry = rx;
      this.beginPath();
      this.roundRect_15yvbs$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height), numberToDouble(rx), numberToDouble(ry));
      this.fill();
    };
  }));
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
  Context2d.prototype.rMoveTo_lu1900$ = function (x, y) {
    this.state.path.rMoveTo_lu1900$(x, y);
  };
  Context2d.prototype.moveTo_lu1900$ = function (x, y) {
    this.state.path.moveTo_lu1900$(x, y);
  };
  Context2d.prototype.moveToH_14dthe$ = function (x) {
    this.state.path.moveToH_14dthe$(x);
  };
  Context2d.prototype.moveToV_14dthe$ = function (y) {
    this.state.path.moveToV_14dthe$(y);
  };
  Context2d.prototype.rMoveToH_14dthe$ = function (x) {
    this.state.path.rMoveToH_14dthe$(x);
  };
  Context2d.prototype.rMoveToV_14dthe$ = function (y) {
    this.state.path.rMoveToV_14dthe$(y);
  };
  Context2d.prototype.lineToH_14dthe$ = function (x) {
    this.state.path.lineToH_14dthe$(x);
  };
  Context2d.prototype.lineToV_14dthe$ = function (y) {
    this.state.path.lineToV_14dthe$(y);
  };
  Context2d.prototype.rLineToH_14dthe$ = function (x) {
    this.state.path.rLineToH_14dthe$(x);
  };
  Context2d.prototype.rLineToV_14dthe$ = function (y) {
    this.state.path.rLineToV_14dthe$(y);
  };
  Context2d.prototype.lineTo_lu1900$ = function (x, y) {
    this.state.path.lineTo_lu1900$(x, y);
  };
  Context2d.prototype.rLineTo_lu1900$ = function (x, y) {
    this.state.path.rLineTo_lu1900$(x, y);
  };
  Context2d.prototype.quadraticCurveTo_6y0v78$ = function (cx, cy, ax, ay) {
    this.state.path.quadTo_6y0v78$(cx, cy, ax, ay);
  };
  Context2d.prototype.rQuadraticCurveTo_6y0v78$ = function (cx, cy, ax, ay) {
    this.state.path.rQuadTo_6y0v78$(cx, cy, ax, ay);
  };
  Context2d.prototype.bezierCurveTo_15yvbs$ = function (cx1, cy1, cx2, cy2, x, y) {
    this.state.path.cubicTo_15yvbs$(cx1, cy1, cx2, cy2, x, y);
  };
  Context2d.prototype.rBezierCurveTo_15yvbs$ = function (cx1, cy1, cx2, cy2, x, y) {
    this.state.path.rCubicTo_15yvbs$(cx1, cy1, cx2, cy2, x, y);
  };
  Context2d.prototype.rect_6y0v78$ = function (x, y, width, height) {
    this.state.path.rect_6y0v78$(x, y, width, height);
  };
  Context2d.prototype.rectHole_1ugm5o$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.rectHole_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      this.state.path.rectHole_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
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
  Context2d.prototype.getBounds_2da8yn$ = function (out) {
    if (out === void 0)
      out = new Rectangle();
    return this.state.path.getBounds_iqjpvb$(out);
  };
  Context2d.prototype.closePath = function () {
    this.state.path.close();
  };
  Context2d.prototype.stroke = function () {
    if (!equals(this.state.strokeStyle, Context2d$None_getInstance()))
      this.renderer.render_w64o9o$(this.state, false);
  };
  Context2d.prototype.fill = function () {
    if (!equals(this.state.fillStyle, Context2d$None_getInstance()))
      this.renderer.render_w64o9o$(this.state, true);
  };
  Context2d.prototype.fill_i8h3xk$ = function (paint) {
    var oldStyle = this.fillStyle;
    this.fillStyle = paint;
    try {
      this.fill();
    }
    finally {
      this.fillStyle = oldStyle;
    }
  };
  Context2d.prototype.stroke_i8h3xk$ = function (paint) {
    var oldStyle = this.strokeStyle;
    this.strokeStyle = paint;
    try {
      this.stroke();
    }
    finally {
      this.strokeStyle = oldStyle;
    }
  };
  Context2d.prototype.stroke_mb1y7v$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.stroke_mb1y7v$', function (paint, callback) {
    callback();
    this.stroke_i8h3xk$(paint);
  });
  Context2d.prototype.stroke_2rievy$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.stroke_2rievy$', wrapFunction(function () {
    var Context2d$Context2d$Color_init = _.com.soywiz.korim.vector.Context2d.Color;
    return function (color, callback) {
      callback();
      this.stroke_i8h3xk$(new Context2d$Context2d$Color_init(color));
    };
  }));
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
    switch (rasterizerMethod.name) {
      case 'NONE':
        shape.draw_vuz2tk$(this);
        break;
      case 'X1':
      case 'X2':
      case 'X4':
        var scale = rasterizerMethod.scale;
        var x = this.renderer.width * scale;
        var tmp$_0 = numberToInt(Math_0.ceil(x));
        var x_0 = this.renderer.height * scale;
        var newBi = NativeImage_0(tmp$_0, numberToInt(Math_0.ceil(x_0)));
        var bi = newBi.getContext2d_6taknv$(false);
        bi.scale_lu1900$(scale, scale);
        bi.transform_yx07kl$(this.state.transform);
        bi.draw_ywv3s4$(shape);
        switch (rasterizerMethod.name) {
          case 'X1':
            tmp$ = newBi;
            break;
          case 'X2':
            tmp$ = mipmap(newBi, 1);
            break;
          case 'X4':
            tmp$ = mipmap(newBi, 2);
            break;
          default:tmp$ = newBi;
            break;
        }

        var renderBi = tmp$;
        var t = this.state.transform;
        var a = t.a;
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
          t.setTo_15yvbs$(a, b, c, d, tx, ty);
        }

        break;
    }
  };
  Context2d.prototype.createLinearGradient_6y0v78$ = function (x0, y0, x1, y1) {
    return new Context2d$Gradient(Context2d$Gradient$Kind$LINEAR_getInstance(), x0, y0, 0.0, x1, y1, 0.0);
  };
  Context2d.prototype.createRadialGradient_15yvbs$ = function (x0, y0, r0, x1, y1, r1) {
    return new Context2d$Gradient(Context2d$Gradient$Kind$RADIAL_getInstance(), x0, y0, r0, x1, y1, r1);
  };
  Context2d.prototype.createColor_md34sx$ = function (color) {
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
  Context2d.prototype.fillText_2w64eq$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.fillText_2w64eq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (text, x, y) {
      this.renderText_a7koit$(text, numberToDouble(x), numberToDouble(y), true);
    };
  }));
  Context2d.prototype.strokeText_2w64eq$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.strokeText_2w64eq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (text, x, y) {
      this.renderText_a7koit$(text, numberToDouble(x), numberToDouble(y), false);
    };
  }));
  Context2d.prototype.fillText_j0r20$ = defineInlineFunction('korim-js.com.soywiz.korim.vector.Context2d.fillText_j0r20$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Unit = Kotlin.kotlin.Unit;
    function Context2d$fillText$lambda$lambda(closure$text, closure$x, closure$y, this$Context2d) {
      return function () {
        this$Context2d.renderText_a7koit$(closure$text, numberToDouble(closure$x), numberToDouble(closure$y), true);
        return Unit;
      };
    }
    return function (text, x, y, font, halign, valign, color) {
      if (font === void 0)
        font = null;
      if (halign === void 0)
        halign = null;
      if (valign === void 0)
        valign = null;
      if (color === void 0)
        color = null;
      var oldFont = this.font;
      var oldHalign = this.horizontalAlign;
      var oldValign = this.verticalAlign;
      try {
        if (font != null)
          this.font = font;
        if (halign != null)
          this.horizontalAlign = halign;
        if (valign != null)
          this.verticalAlign = valign;
        var tmp$, tmp$_0;
        tmp$_0 = (tmp$ = color != null ? this.createColor_md34sx$(color) : null) != null ? tmp$ : this.fillStyle;
        var oldStyle = this.fillStyle;
        this.fillStyle = tmp$_0;
        try {
          Context2d$fillText$lambda$lambda(text, x, y, this)();
        }
        finally {
          this.fillStyle = oldStyle;
        }
      }
      finally {
        this.font = oldFont;
        this.horizontalAlign = oldHalign;
        this.verticalAlign = oldValign;
      }
    };
  }));
  Context2d.prototype.renderText_a7koit$ = function (text, x, y, fill) {
    this.renderer.renderText_2jdvt1$(this.state, this.font, text, x, y, fill);
  };
  Context2d.prototype.drawImage_dpo8os$ = function (image, x, y, width, height) {
    if (width === void 0)
      width = image.width;
    if (height === void 0)
      height = image.height;
    this.renderer.drawImage_4amb17$(image, x, y, width, height, this.state.transform);
  };
  function Context2d$Paint() {
  }
  Context2d$Paint.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Paint',
    interfaces: []
  };
  function Context2d$None() {
    Context2d$None_instance = this;
  }
  Context2d$None.$metadata$ = {
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
    simpleName: 'Color',
    interfaces: [Context2d$Paint]
  };
  Context2d$Color.prototype.component1 = function () {
    return this.color;
  };
  Context2d$Color.prototype.copy_md34sx$ = function (color) {
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
    kind: Kind_INTERFACE,
    simpleName: 'TransformedPaint',
    interfaces: [Context2d$Paint]
  };
  function Context2d$Gradient(kind, x0, y0, r0, x1, y1, r1, stops, colors, cycle, transform, interpolationMethod, units) {
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
    if (units === void 0)
      units = Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance();
    this.kind = kind;
    this.x0 = x0;
    this.y0 = y0;
    this.r0 = r0;
    this.x1 = x1;
    this.y1 = y1;
    this.r1 = r1;
    this.stops = stops;
    this.colors = colors;
    this.cycle = cycle;
    this.transform_llmwna$_0 = transform;
    this.interpolationMethod = interpolationMethod;
    this.units = units;
    this.numberOfStops = this.stops.size;
  }
  Object.defineProperty(Context2d$Gradient.prototype, 'transform', {
    get: function () {
      return this.transform_llmwna$_0;
    }
  });
  function Context2d$Gradient$Kind(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$Gradient$Kind_initFields() {
    Context2d$Gradient$Kind_initFields = function () {
    };
    Context2d$Gradient$Kind$LINEAR_instance = new Context2d$Gradient$Kind('LINEAR', 0);
    Context2d$Gradient$Kind$RADIAL_instance = new Context2d$Gradient$Kind('RADIAL', 1);
  }
  var Context2d$Gradient$Kind$LINEAR_instance;
  function Context2d$Gradient$Kind$LINEAR_getInstance() {
    Context2d$Gradient$Kind_initFields();
    return Context2d$Gradient$Kind$LINEAR_instance;
  }
  var Context2d$Gradient$Kind$RADIAL_instance;
  function Context2d$Gradient$Kind$RADIAL_getInstance() {
    Context2d$Gradient$Kind_initFields();
    return Context2d$Gradient$Kind$RADIAL_instance;
  }
  Context2d$Gradient$Kind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function Context2d$Gradient$Kind$values() {
    return [Context2d$Gradient$Kind$LINEAR_getInstance(), Context2d$Gradient$Kind$RADIAL_getInstance()];
  }
  Context2d$Gradient$Kind.values = Context2d$Gradient$Kind$values;
  function Context2d$Gradient$Kind$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return Context2d$Gradient$Kind$LINEAR_getInstance();
      case 'RADIAL':
        return Context2d$Gradient$Kind$RADIAL_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.Gradient.Kind.' + name);
    }
  }
  Context2d$Gradient$Kind.valueOf_61zpoe$ = Context2d$Gradient$Kind$valueOf;
  function Context2d$Gradient$Units(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Context2d$Gradient$Units_initFields() {
    Context2d$Gradient$Units_initFields = function () {
    };
    Context2d$Gradient$Units$USER_SPACE_ON_USE_instance = new Context2d$Gradient$Units('USER_SPACE_ON_USE', 0);
    Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_instance = new Context2d$Gradient$Units('OBJECT_BOUNDING_BOX', 1);
  }
  var Context2d$Gradient$Units$USER_SPACE_ON_USE_instance;
  function Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance() {
    Context2d$Gradient$Units_initFields();
    return Context2d$Gradient$Units$USER_SPACE_ON_USE_instance;
  }
  var Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_instance;
  function Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance() {
    Context2d$Gradient$Units_initFields();
    return Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_instance;
  }
  Context2d$Gradient$Units.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Units',
    interfaces: [Enum]
  };
  function Context2d$Gradient$Units$values() {
    return [Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance(), Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance()];
  }
  Context2d$Gradient$Units.values = Context2d$Gradient$Units$values;
  function Context2d$Gradient$Units$valueOf(name) {
    switch (name) {
      case 'USER_SPACE_ON_USE':
        return Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance();
      case 'OBJECT_BOUNDING_BOX':
        return Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.Gradient.Units.' + name);
    }
  }
  Context2d$Gradient$Units.valueOf_61zpoe$ = Context2d$Gradient$Units$valueOf;
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korim.vector.Context2d.Gradient.InterpolationMethod.' + name);
    }
  }
  Context2d$Gradient$InterpolationMethod.valueOf_61zpoe$ = Context2d$Gradient$InterpolationMethod$valueOf;
  Context2d$Gradient.prototype.addColorStop_12fank$ = function (stop, color) {
    this.stops.plusAssign_14dthe$(stop);
    this.colors.plusAssign_za3lpa$(color);
    return this;
  };
  Context2d$Gradient.prototype.applyMatrix_yx07kl$ = function (m) {
    return new Context2d$Gradient(this.kind, m.transformX_lu1900$(this.x0, this.y0), m.transformY_lu1900$(this.x0, this.y0), this.r0, m.transformX_lu1900$(this.x1, this.y1), m.transformY_lu1900$(this.x1, this.y1), this.r1, DoubleArrayList_init(this.stops), IntArrayList_init(this.colors), this.cycle, new Matrix2d(), this.interpolationMethod, this.units);
  };
  Context2d$Gradient.prototype.toString = function () {
    switch (this.kind.name) {
      case 'LINEAR':
        return 'LinearGradient(' + this.x0 + ', ' + this.y0 + ', ' + this.x1 + ', ' + this.y1 + ', ' + this.stops + ', ' + this.colors + ')';
      case 'RADIAL':
        return 'RadialGradient(' + this.x0 + ', ' + this.y0 + ', ' + this.r0 + ', ' + this.x1 + ', ' + this.y1 + ', ' + this.r1 + ', ' + this.stops + ', ' + this.colors + ')';
      default:return Kotlin.noWhenBranchMatched();
    }
  };
  Context2d$Gradient.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Gradient',
    interfaces: [Context2d$TransformedPaint]
  };
  Context2d$Gradient.prototype.component1 = function () {
    return this.kind;
  };
  Context2d$Gradient.prototype.component2 = function () {
    return this.x0;
  };
  Context2d$Gradient.prototype.component3 = function () {
    return this.y0;
  };
  Context2d$Gradient.prototype.component4 = function () {
    return this.r0;
  };
  Context2d$Gradient.prototype.component5 = function () {
    return this.x1;
  };
  Context2d$Gradient.prototype.component6 = function () {
    return this.y1;
  };
  Context2d$Gradient.prototype.component7 = function () {
    return this.r1;
  };
  Context2d$Gradient.prototype.component8 = function () {
    return this.stops;
  };
  Context2d$Gradient.prototype.component9 = function () {
    return this.colors;
  };
  Context2d$Gradient.prototype.component10 = function () {
    return this.cycle;
  };
  Context2d$Gradient.prototype.component11 = function () {
    return this.transform;
  };
  Context2d$Gradient.prototype.component12 = function () {
    return this.interpolationMethod;
  };
  Context2d$Gradient.prototype.component13 = function () {
    return this.units;
  };
  Context2d$Gradient.prototype.copy_9l7zku$ = function (kind, x0, y0, r0, x1, y1, r1, stops, colors, cycle, transform, interpolationMethod, units) {
    return new Context2d$Gradient(kind === void 0 ? this.kind : kind, x0 === void 0 ? this.x0 : x0, y0 === void 0 ? this.y0 : y0, r0 === void 0 ? this.r0 : r0, x1 === void 0 ? this.x1 : x1, y1 === void 0 ? this.y1 : y1, r1 === void 0 ? this.r1 : r1, stops === void 0 ? this.stops : stops, colors === void 0 ? this.colors : colors, cycle === void 0 ? this.cycle : cycle, transform === void 0 ? this.transform : transform, interpolationMethod === void 0 ? this.interpolationMethod : interpolationMethod, units === void 0 ? this.units : units);
  };
  Context2d$Gradient.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.x0) | 0;
    result = result * 31 + Kotlin.hashCode(this.y0) | 0;
    result = result * 31 + Kotlin.hashCode(this.r0) | 0;
    result = result * 31 + Kotlin.hashCode(this.x1) | 0;
    result = result * 31 + Kotlin.hashCode(this.y1) | 0;
    result = result * 31 + Kotlin.hashCode(this.r1) | 0;
    result = result * 31 + Kotlin.hashCode(this.stops) | 0;
    result = result * 31 + Kotlin.hashCode(this.colors) | 0;
    result = result * 31 + Kotlin.hashCode(this.cycle) | 0;
    result = result * 31 + Kotlin.hashCode(this.transform) | 0;
    result = result * 31 + Kotlin.hashCode(this.interpolationMethod) | 0;
    result = result * 31 + Kotlin.hashCode(this.units) | 0;
    return result;
  };
  Context2d$Gradient.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.x0, other.x0) && Kotlin.equals(this.y0, other.y0) && Kotlin.equals(this.r0, other.r0) && Kotlin.equals(this.x1, other.x1) && Kotlin.equals(this.y1, other.y1) && Kotlin.equals(this.r1, other.r1) && Kotlin.equals(this.stops, other.stops) && Kotlin.equals(this.colors, other.colors) && Kotlin.equals(this.cycle, other.cycle) && Kotlin.equals(this.transform, other.transform) && Kotlin.equals(this.interpolationMethod, other.interpolationMethod) && Kotlin.equals(this.units, other.units)))));
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
    kind: Kind_CLASS,
    simpleName: 'BitmapPaint',
    interfaces: [Context2d$TransformedPaint]
  };
  function Context2d$Drawable() {
  }
  Context2d$Drawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Drawable',
    interfaces: []
  };
  function Context2d$BoundsDrawable() {
  }
  Context2d$BoundsDrawable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BoundsDrawable',
    interfaces: [Context2d$Drawable]
  };
  function Context2d$SizedDrawable() {
  }
  Context2d$SizedDrawable.$metadata$ = {
    kind: Kind_INTERFACE,
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
    kind: Kind_CLASS,
    simpleName: 'FuncDrawable',
    interfaces: [Context2d$Drawable]
  };
  function Context2d$lineScaleMode$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('lineScaleMode', 0, function ($receiver) {
        return $receiver.lineScaleMode;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineScaleMode = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$lineWidth$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('lineWidth', 0, function ($receiver) {
        return $receiver.lineWidth;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineWidth = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$lineCap$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('lineCap', 0, function ($receiver) {
        return $receiver.lineCap;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.lineCap = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$strokeStyle$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('strokeStyle', 0, function ($receiver) {
        return $receiver.strokeStyle;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.strokeStyle = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$fillStyle$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('fillStyle', 0, function ($receiver) {
        return $receiver.fillStyle;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.fillStyle = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$font$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('font', 0, function ($receiver) {
        return $receiver.font;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.font = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$verticalAlign$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('verticalAlign', 0, function ($receiver) {
        return $receiver.verticalAlign;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.verticalAlign = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$horizontalAlign$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('horizontalAlign', 0, function ($receiver) {
        return $receiver.horizontalAlign;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.horizontalAlign = value;
      }.bind(null, this$Context2d.state));
    };
  }
  function Context2d$globalAlpha$lambda(this$Context2d) {
    return function () {
      return getPropertyCallableRef('globalAlpha', 0, function ($receiver) {
        return $receiver.globalAlpha;
      }.bind(null, this$Context2d.state), function ($receiver, value) {
        $receiver.globalAlpha = value;
      }.bind(null, this$Context2d.state));
    };
  }
  Context2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Context2d',
    interfaces: [Disposable]
  };
  function renderTo($receiver, ctx) {
    ctx.draw_ywv3s4$($receiver);
  }
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
    kind: Kind_CLASS,
    interfaces: [Context2d$SizedDrawable]
  };
  function filled($receiver, paint) {
    return new filled$ObjectLiteral(paint, $receiver);
  }
  function scaled$ObjectLiteral(closure$sx, closure$sy, this$scaled) {
    this.closure$sx = closure$sx;
    this.closure$sy = closure$sy;
    this.this$scaled = this$scaled;
    this.$delegate_7pgslg$_0 = this$scaled;
    var x = this$scaled.width * numberToDouble(closure$sx);
    this.width_mkevfi$_0 = numberToInt(Math_0.abs(x));
    var x_0 = this$scaled.height * numberToDouble(closure$sy);
    this.height_jmlctz$_0 = numberToInt(Math_0.abs(x_0));
  }
  Object.defineProperty(scaled$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.width_mkevfi$_0;
    }
  });
  Object.defineProperty(scaled$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.height_jmlctz$_0;
    }
  });
  scaled$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.scale_lu1900$(numberToDouble(this.closure$sx), numberToDouble(this.closure$sy));
    this.this$scaled.draw_vuz2tk$(c);
  };
  scaled$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Context2d$SizedDrawable]
  };
  function scaled($receiver, sx, sy) {
    if (sx === void 0)
      sx = 1.0;
    if (sy === void 0)
      sy = sx;
    return new scaled$ObjectLiteral(sx, sy, $receiver);
  }
  function translated$ObjectLiteral(closure$tx, closure$ty, this$translated) {
    this.closure$tx = closure$tx;
    this.closure$ty = closure$ty;
    this.this$translated = this$translated;
    this.$delegate_rdveew$_0 = this$translated;
  }
  translated$ObjectLiteral.prototype.draw_vuz2tk$ = function (c) {
    c.translate_lu1900$(numberToDouble(this.closure$tx), numberToDouble(this.closure$ty));
    this.this$translated.draw_vuz2tk$(c);
  };
  Object.defineProperty(translated$ObjectLiteral.prototype, 'height', {
    get: function () {
      return this.$delegate_rdveew$_0.height;
    }
  });
  Object.defineProperty(translated$ObjectLiteral.prototype, 'width', {
    get: function () {
      return this.$delegate_rdveew$_0.width;
    }
  });
  translated$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [Context2d$SizedDrawable]
  };
  function translated($receiver, tx, ty) {
    if (tx === void 0)
      tx = 0.0;
    if (ty === void 0)
      ty = tx;
    return new translated$ObjectLiteral(tx, ty, $receiver);
  }
  function render_0($receiver) {
    var image = NativeImage_0($receiver.width, $receiver.height);
    var ctx = image.getContext2d_6taknv$();
    $receiver.draw_vuz2tk$(ctx);
    return image;
  }
  function renderNoNative($receiver) {
    var image = new Bitmap32($receiver.width, $receiver.height);
    var ctx = image.getContext2d_6taknv$();
    $receiver.draw_vuz2tk$(ctx);
    return image;
  }
  function renderToImage($receiver, width, height) {
    var image = NativeImage_0(width, height);
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
      return numberToInt(this.getBounds_iqjpvb$().width);
    }
  });
  Object.defineProperty(GraphicsPath.prototype, 'height', {
    get: function () {
      return numberToInt(this.getBounds_iqjpvb$().height);
    }
  });
  GraphicsPath.prototype.draw_vuz2tk$ = function (c) {
    c.state.path.write_3wv7u0$(this);
  };
  GraphicsPath.prototype.clone = function () {
    return new GraphicsPath(IntArrayList_init(this.commands), DoubleArrayList_init(this.data), this.winding);
  };
  GraphicsPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GraphicsPath',
    interfaces: [Context2d$SizedDrawable, VectorPath]
  };
  function SvgBuilder(bounds, scale) {
    this.bounds = bounds;
    this.scale = scale;
    this.defs = ArrayList_init_0();
    this.nodes = ArrayList_init_0();
  }
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  SvgBuilder.prototype.toXml = function () {
    return Xml.Companion.Tag_imnfz6$('svg', linkedMapOf([to('width', get_niceStr(this.bounds.width * this.scale) + 'px'), to('height', get_niceStr(this.bounds.height * this.scale) + 'px'), to('viewBox', '0 0 ' + get_niceStr(this.bounds.width * this.scale) + ' ' + get_niceStr(this.bounds.height * this.scale)), to('xmlns', 'http://www.w3.org/2000/svg'), to('xmlns:xlink', 'http://www.w3.org/1999/xlink')]), listOf([Xml.Companion.Tag_imnfz6$('defs', emptyMap(), this.defs), Xml.Companion.Tag_imnfz6$('g', mapOf_0(to('transform', toSvg((new Matrix2d()).translate_lu1900$(-this.bounds.x, -this.bounds.y).scale_lu1900$(this.scale, this.scale)))), this.nodes)]));
  };
  SvgBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgBuilder',
    interfaces: []
  };
  function toSvg($receiver) {
    var block$result;
    block$break: do {
      switch ($receiver.getType().name) {
        case 'IDENTITY':
          block$result = 'translate()';
          break block$break;
        case 'TRANSLATE':
          block$result = 'translate(' + get_niceStr($receiver.tx) + ', ' + get_niceStr($receiver.ty) + ')';
          break block$break;
        case 'SCALE':
          block$result = 'scale(' + get_niceStr($receiver.a) + ', ' + get_niceStr($receiver.d) + ')';
          break block$break;
        case 'SCALE_TRANSLATE':
          block$result = 'translate(' + get_niceStr($receiver.tx) + ', ' + get_niceStr($receiver.ty) + ') scale(' + get_niceStr($receiver.a) + ', ' + get_niceStr($receiver.d) + ')';
          break block$break;
        default:block$result = 'matrix(' + get_niceStr($receiver.a) + ', ' + get_niceStr($receiver.b) + ', ' + get_niceStr($receiver.c) + ', ' + get_niceStr($receiver.d) + ', ' + get_niceStr($receiver.tx) + ', ' + get_niceStr($receiver.ty) + ')';
          break block$break;
      }
    }
     while (false);
    return block$result;
  }
  function toSvgPathString$fixX(closure$decimalPlaces) {
    return function ($receiver) {
      return toString_2($receiver, closure$decimalPlaces, true);
    };
  }
  function toSvgPathString$fixY(closure$decimalPlaces) {
    return function ($receiver) {
      return toString_2($receiver, closure$decimalPlaces, true);
    };
  }
  function toSvgPathString($receiver, separator, decimalPlaces) {
    if (separator === void 0)
      separator = ' ';
    if (decimalPlaces === void 0)
      decimalPlaces = 1;
    var parts = ArrayList_init_0();
    var fixX = toSvgPathString$fixX(decimalPlaces);
    var fixY = toSvgPathString$fixY(decimalPlaces);
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var n = 0;
    tmp$ = $receiver.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      switch (cmd) {
        case 1:
          var x = $receiver.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          var y = $receiver.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
          var element = 'M' + fixX(x) + ' ' + fixY(y);
          parts.add_11rb$(element);
          break;
        case 2:
          var x_0 = $receiver.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = $receiver.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
          var element_0 = 'L' + fixX(x_0) + ' ' + fixY(y_0);
          parts.add_11rb$(element_0);
          break;
        case 3:
          var x1 = $receiver.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = $receiver.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = $receiver.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = $receiver.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
          var element_1 = 'Q' + fixX(x1) + ' ' + fixY(y1) + ', ' + fixX(x2) + ' ' + fixY(y2);
          parts.add_11rb$(element_1);
          break;
        case 4:
          var x1_0 = $receiver.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = $receiver.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = $receiver.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = $receiver.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = $receiver.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = $receiver.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
          var element_2 = 'C' + fixX(x1_0) + ' ' + fixY(y1_0) + ', ' + fixX(x2_0) + ' ' + fixY(y2_0) + ', ' + fixX(x3) + ' ' + fixY(y3);
          parts.add_11rb$(element_2);
          break;
        case 5:
          parts.add_11rb$('Z');
          break;
      }
    }
    return joinToString(parts, '');
  }
  function Shape() {
  }
  Shape.prototype.buildSvg_b7xfbk$ = function (svg) {
  };
  Shape.$metadata$ = {
    kind: Kind_INTERFACE,
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
  StyledShape.prototype.buildSvg_b7xfbk$ = function (svg) {
    var tmp$ = svg.nodes;
    var element = Xml.Companion.Tag_imnfz6$('path', plus_2(mapOf_0(to('d', toSvgPathString(this.path))), this.getSvgXmlAttributes_b7xfbk$(svg)), emptyList());
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
      c.transform_yx07kl$(this.transform);
      c.beginPath();
      this.path.draw_vuz2tk$(c);
      if (this.clip != null) {
        ensureNotNull(this.clip).draw_vuz2tk$(c);
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
    kind: Kind_INTERFACE,
    simpleName: 'StyledShape',
    interfaces: [Shape]
  };
  function colorToSvg(color) {
    var r = color.r;
    var g = color.g;
    var b = color.b;
    var af = color.af;
    return 'rgba(' + r + ',' + g + ',' + b + ',' + af + ')';
  }
  function toSvg_1($receiver, svg) {
    var id = svg.defs.size;
    if (Kotlin.isType($receiver, Context2d$Gradient)) {
      var $receiver_0 = until(0, $receiver.numberOfStops);
      var destination = ArrayList_init_1(collectionSizeOrDefault($receiver_0, 10));
      var tmp$;
      tmp$ = $receiver_0.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var ratio = $receiver.stops.get_za3lpa$(item);
        var color = new RGBA($receiver.colors.get_za3lpa$(item));
        tmp$_0.call(destination, Xml.Companion.Tag_imnfz6$('stop', mapOf([to('offset', (ratio * 100).toString() + '%'), to('stop-color', colorToSvg(color))]), emptyList()));
      }
      var stops = destination;
      if (Kotlin.isType($receiver, Context2d$Gradient)) {
        switch ($receiver.kind.name) {
          case 'LINEAR':
            var $receiver_1 = svg.defs;
            var element = Xml.Companion.Tag_imnfz6$('linearGradient', mapOf([to('id', 'def' + id), to('x1', $receiver.x0.toString()), to('y1', $receiver.y0.toString()), to('x2', $receiver.x1.toString()), to('y2', $receiver.y1.toString()), to('gradientTransform', toSvg($receiver.transform))]), stops);
            $receiver_1.add_11rb$(element);
            break;
          case 'RADIAL':
            var $receiver_2 = svg.defs;
            var element_0 = Xml.Companion.Tag_imnfz6$('radialGradient', mapOf([to('id', 'def' + id), to('cx', $receiver.x0.toString()), to('cy', $receiver.y0.toString()), to('fx', $receiver.x1.toString()), to('fy', $receiver.y1.toString()), to('r', $receiver.r1.toString()), to('gradientTransform', toSvg($receiver.transform))]), stops);
            $receiver_2.add_11rb$(element_0);
            break;
        }
      }
      return 'url(#def' + id + ')';
    }
     else if (Kotlin.isType($receiver, Context2d$BitmapPaint)) {
      var tmp$_1 = svg.defs;
      var element_1 = Xml.Companion.Tag_imnfz6$('pattern', mapOf([to('id', 'def' + id), to('patternUnits', 'userSpaceOnUse'), to('width', $receiver.bitmap.width.toString()), to('height', $receiver.bitmap.height.toString()), to('patternTransform', toSvg($receiver.transform))]), listOf_0(Xml.Companion.Tag_imnfz6$('image', mapOf([to('xlink:href', toUri($receiver.bitmap)), to('width', $receiver.bitmap.width.toString()), to('height', $receiver.bitmap.height.toString())]), emptyList())));
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
    return plus_2(StyledShape.prototype.getSvgXmlAttributes_b7xfbk$.call(this, svg), mapOf_0(to('fill', toSvg_1(this.paint, svg))));
  };
  FillShape.prototype.containsPoint_lu1900$ = function (x, y) {
    var tx = this.transform.transformX_lu1900$(x, y);
    var ty = this.transform.transformY_lu1900$(x, y);
    if (this.clip != null)
      return this.clip.containsPoint_lu1900$(tx, ty);
    return this.path.containsPoint_lu1900$(tx, ty);
  };
  FillShape.$metadata$ = {
    kind: Kind_CLASS,
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
  PolylineShape.prototype.containsPoint_lu1900$ = function (x, y) {
    var tx = this.transform.transformX_lu1900$(x, y);
    var ty = this.transform.transformY_lu1900$(x, y);
    if (this.clip != null)
      return this.clip.containsPoint_lu1900$(tx, ty);
    return this.path.containsPoint_lu1900$(tx, ty);
  };
  PolylineShape.prototype.getSvgXmlAttributes_b7xfbk$ = function (svg) {
    return plus_2(StyledShape.prototype.getSvgXmlAttributes_b7xfbk$.call(this, svg), mapOf([to('stroke-width', this.thickness.toString()), to('stroke', toSvg_1(this.paint, svg))]));
  };
  PolylineShape.$metadata$ = {
    kind: Kind_CLASS,
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
  CompoundShape.prototype.containsPoint_lu1900$ = function (x, y) {
    var $receiver = this.components;
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
        if (element.containsPoint_lu1900$(x, y)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  CompoundShape.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CompoundShape',
    interfaces: [Shape]
  };
  function Chart() {
  }
  Chart.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Chart',
    interfaces: [Context2d$Drawable]
  };
  function ChartBars(list) {
    ChartBars$Companion_getInstance();
    Chart.call(this);
    this.list = list;
    var tmp$;
    var $receiver = this.list;
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(item.localMaxValue);
    }
    this.maxValue = (tmp$ = max_0(destination)) != null ? tmp$ : 0.0;
    var x = this.maxValue;
    var x_0 = Math_0.log10(x);
    var x_1 = Math_0.floor(x_0);
    this.chartStep = Math_0.pow(10.0, x_1) / 2.0;
    var x_2 = this.maxValue / this.chartStep;
    this.rMaxValue = Math_0.ceil(x_2) * this.chartStep;
    this.colors = listOf([Colors_getInstance().get_61zpoe$('#5485ec'), Colors_getInstance().GREEN, Colors_getInstance().BLUE, Colors_getInstance().AZURE, Colors_getInstance().CHARTREUSE, Colors_getInstance().CADETBLUE]);
    this.count = 0;
  }
  function ChartBars$Companion() {
    ChartBars$Companion_instance = this;
  }
  ChartBars$Companion.prototype.invoke_jnqutm$ = function (items) {
    var destination = ArrayList_init_1(items.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      destination.add_11rb$(new ChartBars$DataPoint(item.first, listOf_0(numberToDouble(item.second))));
    }
    return new ChartBars(destination);
  };
  ChartBars$Companion.prototype.fromPoints_s2nmi9$ = function (items) {
    var destination = ArrayList_init_1(items.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1 = item.first;
      var $receiver = item.second;
      var destination_0 = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
      var tmp$_2;
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var item_0 = tmp$_2.next();
        destination_0.add_11rb$(numberToDouble(item_0));
      }
      tmp$_0.call(destination, new ChartBars$DataPoint(tmp$_1, destination_0));
    }
    return new ChartBars(destination);
  };
  ChartBars$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ChartBars$Companion_instance = null;
  function ChartBars$Companion_getInstance() {
    if (ChartBars$Companion_instance === null) {
      new ChartBars$Companion();
    }
    return ChartBars$Companion_instance;
  }
  function ChartBars$DataPoint(name, values) {
    this.name = name;
    this.values = values;
    var tmp$;
    this.localMaxValue = (tmp$ = max_0(this.values)) != null ? tmp$ : 0.0;
  }
  ChartBars$DataPoint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataPoint',
    interfaces: []
  };
  ChartBars$DataPoint.prototype.component1 = function () {
    return this.name;
  };
  ChartBars$DataPoint.prototype.component2 = function () {
    return this.values;
  };
  ChartBars$DataPoint.prototype.copy_bijrlx$ = function (name, values) {
    return new ChartBars$DataPoint(name === void 0 ? this.name : name, values === void 0 ? this.values : values);
  };
  ChartBars$DataPoint.prototype.toString = function () {
    return 'DataPoint(name=' + Kotlin.toString(this.name) + (', values=' + Kotlin.toString(this.values)) + ')';
  };
  ChartBars$DataPoint.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  ChartBars$DataPoint.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.values, other.values)))));
  };
  ChartBars.prototype.draw_vuz2tk$ = function (c) {
    this.renderChart_6rdc61$(c);
  };
  ChartBars.prototype.renderLine_u3c0x1$_0 = function ($receiver, x0, y0, x1, y1, color, width) {
    if (width === void 0)
      width = 1.2;
    $receiver.lineWidth = numberToDouble(width);
    $receiver.beginPath();
    $receiver.moveTo_lu1900$(numberToDouble(x0), numberToDouble(y0));
    $receiver.lineTo_lu1900$(numberToDouble(x1), numberToDouble(y1));
    $receiver.stroke_i8h3xk$($receiver.createColor_md34sx$(color));
  };
  ChartBars.prototype.renderRefLine_ybbk51$_0 = function ($receiver, rect, y, value, important) {
    var x = rect.left;
    this.renderLine_u3c0x1$_0($receiver, x, y, rect.right, y, important ? Colors_getInstance().BLACK : Colors_getInstance().DARKGREY);
    var x_0 = x - 2;
    var halign = Context2d$HorizontalAlign$RIGHT_getInstance();
    var valign = Context2d$VerticalAlign$BOTTOM_getInstance();
    var color = Colors_getInstance().DARKGREY;
    var oldFont = $receiver.font;
    var oldHalign = $receiver.horizontalAlign;
    var oldValign = $receiver.verticalAlign;
    try {
      if (null != null)
        $receiver.font = null;
      if (halign != null)
        $receiver.horizontalAlign = halign;
      if (valign != null)
        $receiver.verticalAlign = valign;
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = color != null ? $receiver.createColor_md34sx$(color) : null) != null ? tmp$ : $receiver.fillStyle;
      var oldStyle = $receiver.fillStyle;
      $receiver.fillStyle = tmp$_0;
      try {
        $receiver.renderText_a7koit$(value, numberToDouble(x_0), numberToDouble(y), true);
      }
      finally {
        $receiver.fillStyle = oldStyle;
      }
    }
    finally {
      $receiver.font = oldFont;
      $receiver.horizontalAlign = oldHalign;
      $receiver.verticalAlign = oldValign;
    }
  };
  ChartBars.prototype.get_ratio_syzv5q$ = function ($receiver) {
    return first_0($receiver.values) / this.maxValue;
  };
  ChartBars.prototype.get_rRatio_syzv5q$ = function ($receiver) {
    return first_0($receiver.values) / this.rMaxValue;
  };
  ChartBars.prototype.renderReferenceLines_uzxjb5$_0 = function ($receiver, rect) {
    for (var n = 0; n < 5; n++) {
      var ratio = n / 4;
      this.renderRefLine_ybbk51$_0($receiver, rect, rect.bottom - 1 - (rect.height - 1) * ratio, removeSuffix((ratio * this.rMaxValue).toString(), '.0'), n === 0);
    }
  };
  function ChartBars$Fit(name, ordinal, angle) {
    Enum.call(this);
    this.angle = angle;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ChartBars$Fit_initFields() {
    ChartBars$Fit_initFields = function () {
    };
    ChartBars$Fit$FULL_instance = new ChartBars$Fit('FULL', 0, 0.0);
    ChartBars$Fit$DEG45_instance = new ChartBars$Fit('DEG45', 1, -45.0);
    ChartBars$Fit$DEG90_instance = new ChartBars$Fit('DEG90', 2, -90.0);
  }
  var ChartBars$Fit$FULL_instance;
  function ChartBars$Fit$FULL_getInstance() {
    ChartBars$Fit_initFields();
    return ChartBars$Fit$FULL_instance;
  }
  var ChartBars$Fit$DEG45_instance;
  function ChartBars$Fit$DEG45_getInstance() {
    ChartBars$Fit_initFields();
    return ChartBars$Fit$DEG45_instance;
  }
  var ChartBars$Fit$DEG90_instance;
  function ChartBars$Fit$DEG90_getInstance() {
    ChartBars$Fit_initFields();
    return ChartBars$Fit$DEG90_instance;
  }
  ChartBars$Fit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Fit',
    interfaces: [Enum]
  };
  function ChartBars$Fit$values() {
    return [ChartBars$Fit$FULL_getInstance(), ChartBars$Fit$DEG45_getInstance(), ChartBars$Fit$DEG90_getInstance()];
  }
  ChartBars$Fit.values = ChartBars$Fit$values;
  function ChartBars$Fit$valueOf(name) {
    switch (name) {
      case 'FULL':
        return ChartBars$Fit$FULL_getInstance();
      case 'DEG45':
        return ChartBars$Fit$DEG45_getInstance();
      case 'DEG90':
        return ChartBars$Fit$DEG90_getInstance();
      default:throwISE('No enum constant com.soywiz.korim.vector.chart.ChartBars.Fit.' + name);
    }
  }
  ChartBars$Fit.valueOf_61zpoe$ = ChartBars$Fit$valueOf;
  ChartBars.prototype.renderBars_fdk1js$ = function ($receiver, rect) {
    var tmp$, tmp$_0;
    var barWidth = rect.width / (this.list.size * 1.5 + 0.5);
    var barLeft = barWidth * 0.5;
    var barSpace = barWidth * 1.5;
    this.renderReferenceLines_uzxjb5$_0($receiver, rect);
    var $receiver_0 = this.list;
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_1;
    tmp$_1 = $receiver_0.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      var tmp$_2 = destination.add_11rb$;
      var transform$result;
      var bounds = $receiver.getTextBounds_jznmvy$(item.name);
      if (bounds.bounds.width > barWidth * 2.0) {
        transform$result = ChartBars$Fit$DEG90_getInstance();
      }
       else if (bounds.bounds.width > barWidth) {
        transform$result = ChartBars$Fit$DEG45_getInstance();
      }
       else {
        transform$result = ChartBars$Fit$FULL_getInstance();
      }
      tmp$_2.call(destination, transform$result);
    }
    var fit = (tmp$ = max_1(destination)) != null ? tmp$ : ChartBars$Fit$FULL_getInstance();
    tmp$_0 = this.list.size;
    for (var n = 0; n < tmp$_0; n++) {
      var item_0 = this.list.get_za3lpa$(n);
      var rx = rect.left + barLeft + barSpace * n;
      var paint = $receiver.createColor_md34sx$(this.colors.get_za3lpa$(0));
      var oldStyle = $receiver.fillStyle;
      $receiver.fillStyle = paint;
      try {
        $receiver.fillRect_6y0v78$(rx, rect.bottom - 1, barWidth, -rect.height * this.get_rRatio_syzv5q$(item_0));
      }
      finally {
        $receiver.fillStyle = oldStyle;
      }
      $receiver.save();
      try {
        $receiver.translate_lu1900$(rx + barWidth * 0.5, rect.bottom + 4);
        $receiver.rotateDeg_14dthe$(fit.angle);
        var text = item_0.name;
        var halign = fit === ChartBars$Fit$FULL_getInstance() ? Context2d$HorizontalAlign$CENTER_getInstance() : Context2d$HorizontalAlign$RIGHT_getInstance();
        var valign = Context2d$VerticalAlign$MIDDLE_getInstance();
        var color = Colors_getInstance().DARKSLATEGRAY;
        var oldFont = $receiver.font;
        var oldHalign = $receiver.horizontalAlign;
        var oldValign = $receiver.verticalAlign;
        try {
          if (null != null)
            $receiver.font = null;
          if (halign != null)
            $receiver.horizontalAlign = halign;
          if (valign != null)
            $receiver.verticalAlign = valign;
          var tmp$_3, tmp$_4;
          tmp$_4 = (tmp$_3 = color != null ? $receiver.createColor_md34sx$(color) : null) != null ? tmp$_3 : $receiver.fillStyle;
          var oldStyle_0 = $receiver.fillStyle;
          $receiver.fillStyle = tmp$_4;
          try {
            $receiver.renderText_a7koit$(text, numberToDouble(0), numberToDouble(0), true);
          }
          finally {
            $receiver.fillStyle = oldStyle_0;
          }
        }
        finally {
          $receiver.font = oldFont;
          $receiver.horizontalAlign = oldHalign;
          $receiver.verticalAlign = oldValign;
        }
      }
      finally {
        $receiver.restore();
      }
    }
  };
  ChartBars.prototype.renderChart_6rdc61$ = function ($receiver) {
    var b = $receiver.width * 0.1;
    var hpadding = Math_0.min(64.0, b);
    var b_0 = $receiver.height * 0.1;
    var vpadding = Math_0.min(64.0, b_0);
    this.renderBars_fdk1js$($receiver, Rectangle.Companion.fromBounds_6y0v78$(hpadding, vpadding, $receiver.width - hpadding, $receiver.height - vpadding));
  };
  ChartBars.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ChartBars',
    interfaces: [Chart]
  };
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function SVG_0(root) {
    SVG$Companion_getInstance();
    this.root = root;
    this.logger = Logger.Companion.invoke_61zpoe$('SVG');
    this.x = this.root.int_bm4lxs$('x', 0);
    this.y = this.root.int_bm4lxs$('y', 0);
    this.dwidth = this.root.double_io5o9c$('width', 128.0);
    this.dheight = this.root.double_io5o9c$('height', 128.0);
    var tmp$;
    this.viewBox = (tmp$ = this.root.getString_61zpoe$('viewBox')) != null ? tmp$ : '0 0 ' + this.dwidth + ' ' + this.dheight;
    var $receiver = split_0(this.viewBox, Kotlin.charArrayOf(32));
    var destination = ArrayList_init_1(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      var tmp$_1 = destination.add_11rb$;
      var throwCCE = Kotlin.throwCCE;
      var trim = Kotlin.kotlin.text.trim_gw00vp$;
      var tmp$_2;
      var tmp$_3;
      tmp$_1.call(destination, (tmp$_2 = toDoubleOrNull(trim(Kotlin.isCharSequence(tmp$_3 = item) ? tmp$_3 : throwCCE()).toString())) != null ? tmp$_2 : 0.0);
    }
    this.viewBoxNumbers = destination;
    var $receiver_0 = this.viewBoxNumbers;
    var $receiver_1 = this.viewBoxNumbers;
    var $receiver_2 = this.viewBoxNumbers;
    var $receiver_3 = this.viewBoxNumbers;
    this.viewBoxRectangle = new Rectangle(0 >= 0 && 0 <= get_lastIndex($receiver_0) ? $receiver_0.get_za3lpa$(0) : 0.0, 1 >= 0 && 1 <= get_lastIndex($receiver_1) ? $receiver_1.get_za3lpa$(1) : 0.0, 2 >= 0 && 2 <= get_lastIndex($receiver_2) ? $receiver_2.get_za3lpa$(2) : this.dwidth, 3 >= 0 && 3 <= get_lastIndex($receiver_3) ? $receiver_3.get_za3lpa$(3) : this.dheight);
    this.defs = HashMap_init();
    this.parseDefs();
  }
  Object.defineProperty(SVG_0.prototype, 'width', {
    get: function () {
      return numberToInt(this.viewBoxRectangle.width);
    }
  });
  Object.defineProperty(SVG_0.prototype, 'height', {
    get: function () {
      return numberToInt(this.viewBoxRectangle.height);
    }
  });
  function SVG$Style() {
    this.props = HashMap_init();
  }
  SVG$Style.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korim.vector.format.SVG.GradientUnits.' + name);
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
    var out = ArrayList_init_0();
    tmp$ = xml.children_61zpoe$('stop').iterator();
    while (tmp$.hasNext()) {
      var stop = tmp$.next();
      var offset = this.parsePercent_61zpoe$(stop.str_puj7f4$('offset'));
      var colorStop = Colors$Default_getInstance().get_61zpoe$(stop.str_puj7f4$('stop-color'));
      var alphaStop = stop.double_io5o9c$('stop-opacity', 1.0);
      var element = new Pair(offset, RGBA$Companion_getInstance().packRGB_A_vux9f0$(colorStop.rgb, numberToInt(alphaStop * 255)));
      out.add_11rb$(element);
    }
    return out;
  };
  SVG_0.prototype.parseDef_473e7m$ = function (def) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var type = def.nameLC;
    switch (type) {
      case 'lineargradient':
      case 'radialgradient':
        var id = def.str_puj7f4$('id').toLowerCase();
        var x0 = def.double_io5o9c$('x1', 0.0);
        var y0 = def.double_io5o9c$('y1', 0.0);
        var x1 = def.double_io5o9c$('x2', 1.0);
        var y1 = def.double_io5o9c$('y2', 1.0);
        var stops = this.parseStops_473e7m$(def);
        var href = def.strNull_61zpoe$('xlink:href');
        if (equals(type, 'lineargradient')) {
          tmp$ = new Context2d$Gradient(Context2d$Gradient$Kind$LINEAR_getInstance(), x0, y0, 0.0, x1, y1, 0.0);
        }
         else {
          var r0 = def.double_io5o9c$('r0', 0.0);
          var r1 = def.double_io5o9c$('r1', 0.0);
          tmp$ = new Context2d$Gradient(Context2d$Gradient$Kind$RADIAL_getInstance(), x0, y0, r0, x1, y1, r1);
        }

        var g = tmp$;
        if ((tmp$_0 = def.strNull_61zpoe$('xlink:href')) != null) {
          var tmp$_3;
          var id_0 = trim(tmp$_0, Kotlin.charArrayOf(35));
          var original = (tmp$_3 = this.defs.get_11rb$(id_0)) == null || Kotlin.isType(tmp$_3, Context2d$Gradient) ? tmp$_3 : null;
          if (original != null) {
            g.stops.add_avch8c$(original.stops);
            g.colors.add_38vc8i$(original.colors);
          }
        }

        tmp$_1 = stops.iterator();
        while (tmp$_1.hasNext()) {
          var tmp$_4 = tmp$_1.next();
          var offset = tmp$_4.component1()
          , color = tmp$_4.component2();
          g.addColorStop_12fank$(offset, color);
        }

        if ((tmp$_2 = def.getString_61zpoe$('gradientTransform')) != null) {
          g.transform.premultiply_7f5bc6$(this.parseTransform_61zpoe$(tmp$_2));
        }

        this.defs.put_xwzc9p$(id, g);
        break;
      case 'style':
        break;
      case '_text_':
        break;
      default:println("Unhandled def: '" + type + "'");
        break;
    }
  };
  SVG_0.prototype.parseDefs = function () {
    var tmp$;
    var $receiver = get_allChildren(this.root.get_61zpoe$('defs'));
    var destination = ArrayList_init_0();
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var element = tmp$_0.next();
      if (!get_isComment(element))
        destination.add_11rb$(element);
    }
    tmp$ = destination.iterator();
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
      if (equals(str, 'none'))
        tmp$ = c.none;
      else
        tmp$ = c.createColor_md34sx$(Colors$Default_getInstance().get_61zpoe$(str));
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
    return function (closure$filter, this$StrReader) {
      return function () {
        var $this = this$StrReader;
        var filter = closure$filter;
        while ($this.hasMore && filter($this.peekChar()))
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
          tmp$ = !get_isNumeric(unboxChar($this.peekChar()));
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
          tmp$_1 = get_isNumeric(unboxChar($this_0.peekChar()));
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
          tmp$_2 = !get_isNumeric(unboxChar($this_1.peekChar()));
        }
        if (!tmp$_2)
          break;
        $this_1.readChar();
      }
      return out;
    };
  }
  var Logger$Level = $module$klogger_js.com.soywiz.klogger.Logger.Level;
  function SVG$drawElement$lambda$dumpTokens(closure$tokens, this$SVG, this$) {
    return function () {
      var closure$tokens_0 = closure$tokens;
      var this$SVG_0 = this$SVG;
      var n = 0;
      for (var tmp$ = closure$tokens_0.iterator(); tmp$.hasNext(); ++n) {
        var token = tmp$.next();
        var $this = this$SVG_0.logger;
        var level = Logger$Level.WARN;
        if ($this.isEnabled_fs4ikx$(level)) {
          $this.actualLog_pwm3k3$(level, '- ' + n + ': ' + token);
        }
      }
    };
  }
  function SVG$drawElement$lambda$isNextNumber(closure$tl) {
    return function () {
      return closure$tl.hasMore ? Kotlin.isType(closure$tl.peek(), SVG$PathTokenNumber) : false;
    };
  }
  function SVG$drawElement$lambda$readNumber(closure$tl, this$SVG, closure$dumpTokens) {
    return function () {
      while (closure$tl.hasMore) {
        var token = closure$tl.read();
        if (Kotlin.isType(token, SVG$PathTokenNumber))
          return token.value;
        var $this = this$SVG.logger;
        var level = Logger$Level.WARN;
        if ($this.isEnabled_fs4ikx$(level)) {
          $this.actualLog_pwm3k3$(level, 'Invalid path (expected number but found ' + token + ') at ' + (closure$tl.position - 1 | 0));
        }
        closure$dumpTokens();
      }
      return 0.0;
    };
  }
  function SVG$drawElement$lambda$readNextTokenCmd(closure$tl, this$SVG, closure$dumpTokens) {
    return function () {
      while (closure$tl.hasMore) {
        var token = closure$tl.read();
        if (Kotlin.isType(token, SVG$PathTokenCmd))
          return unboxChar(token.id);
        var $this = this$SVG.logger;
        var level = Logger$Level.WARN;
        if ($this.isEnabled_fs4ikx$(level)) {
          $this.actualLog_pwm3k3$(level, 'Invalid path (expected command but found ' + token + ') at ' + (closure$tl.position - 1 | 0));
        }
        closure$dumpTokens();
      }
      return null;
    };
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
      switch (nodeName) {
        case '_text_':
          break;
        case 'svg':
          this.drawChildren_97uusy$(xml, c);
          break;
        case 'lineargradient':
        case 'radialgradient':
          this.parseDef_473e7m$(xml);
          break;
        case 'rect':
          var x = xml.double_io5o9c$('x');
          var y = xml.double_io5o9c$('y');
          var width = xml.double_io5o9c$('width');
          var height = xml.double_io5o9c$('height');
          var rx = xml.double_io5o9c$('rx');
          var ry = xml.double_io5o9c$('ry');
          bounds.setTo_6y0v78$(x, y, width, height);
          c.roundRect_15yvbs$(x, y, width, height, rx, ry);
          break;
        case 'circle':
          var cx = xml.double_io5o9c$('cx');
          var cy = xml.double_io5o9c$('cy');
          var radius = xml.double_io5o9c$('r');
          c.circle_yvo9jy$(cx, cy, radius);
          bounds.setBounds_6y0v78$(cx - radius, cy - radius, cx + radius, cy + radius);
          break;
        case 'polyline':
        case 'polygon':
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

          if (equals(nodeName, 'polygon'))
            path.close();
          path.getBounds_iqjpvb$(bounds);
          c.path_lcui0n$(path);
          break;
        case 'line':
          c.beginPath();
          var x1 = xml.double_io5o9c$('x1');
          var y1 = xml.double_io5o9c$('y1');
          var x2 = xml.double_io5o9c$('x2');
          var y2 = xml.double_io5o9c$('y2');
          c.moveTo_lu1900$(x1, y1);
          c.lineTo_lu1900$(x2, y2);
          bounds.setBounds_6y0v78$(x1, y1, x2, y2);
          break;
        case 'g':
          break;
        case 'text':
          var text = xml.text;
          var x_1 = xml.double_io5o9c$('x') + xml.double_io5o9c$('dx');
          var y_1 = xml.double_io5o9c$('y') + xml.double_io5o9c$('dy');
          c.renderText_a7koit$(text, numberToDouble(x_1), numberToDouble(y_1), true);
          break;
        case 'path':
          var d = xml.str_puj7f4$('d');
          var tokens = SVG$Companion_getInstance().tokenizePath_61zpoe$(d);
          var tl = new ListReader(tokens);
          var dumpTokens = SVG$drawElement$lambda$dumpTokens(tokens, this, c);
          var isNextNumber = SVG$drawElement$lambda$isNextNumber(tl);
          var readNumber = SVG$drawElement$lambda$readNumber(tl, this, dumpTokens);
          var readNextTokenCmd = SVG$drawElement$lambda$readNextTokenCmd(tl, this, dumpTokens);
          c.beginPath();
          while (tl.hasMore) {
            tmp$ = readNextTokenCmd();
            if (tmp$ == null) {
              break;
            }
            var cmd = tmp$;
            switch (cmd) {
              case 77:
                c.moveTo_lu1900$(readNumber(), readNumber());
                while (isNextNumber())
                  c.lineTo_lu1900$(readNumber(), readNumber());
                break;
              case 109:
                c.rMoveTo_lu1900$(readNumber(), readNumber());
                while (isNextNumber())
                  c.rLineTo_lu1900$(readNumber(), readNumber());
                break;
              case 76:
                while (isNextNumber())
                  c.lineTo_lu1900$(readNumber(), readNumber());
                break;
              case 108:
                while (isNextNumber())
                  c.rLineTo_lu1900$(readNumber(), readNumber());
                break;
              case 72:
                while (isNextNumber())
                  c.lineToH_14dthe$(readNumber());
                break;
              case 104:
                while (isNextNumber())
                  c.rLineToH_14dthe$(readNumber());
                break;
              case 86:
                while (isNextNumber())
                  c.lineToV_14dthe$(readNumber());
                break;
              case 118:
                while (isNextNumber())
                  c.rLineToV_14dthe$(readNumber());
                break;
              case 81:
                while (isNextNumber())
                  c.quadraticCurveTo_6y0v78$(readNumber(), readNumber(), readNumber(), readNumber());
                break;
              case 113:
                while (isNextNumber())
                  c.rQuadraticCurveTo_6y0v78$(readNumber(), readNumber(), readNumber(), readNumber());
                break;
              case 67:
                while (isNextNumber())
                  c.bezierCurveTo_15yvbs$(readNumber(), readNumber(), readNumber(), readNumber(), readNumber(), readNumber());
                break;
              case 99:
                while (isNextNumber())
                  c.rBezierCurveTo_15yvbs$(readNumber(), readNumber(), readNumber(), readNumber(), readNumber(), readNumber());
                break;
              case 90:
                c.closePath();
                break;
              case 122:
                c.closePath();
                break;
              default:throw new NotImplementedError_init('An operation is not implemented: ' + ("Unsupported command '" + String.fromCharCode(cmd) + "' : Parsed: '" + toSvgPathString(c.state.path) + "', Original: '" + d + "'"));
            }
          }

          var $this = this.logger;
          var level = Logger$Level.TRACE;
          if ($this.isEnabled_fs4ikx$(level)) {
            $this.actualLog_pwm3k3$(level, "Parsed SVG Path: '" + toSvgPathString(c.state.path) + "'");
          }

          var $this_0 = this.logger;
          var level_0 = Logger$Level.TRACE;
          if ($this_0.isEnabled_fs4ikx$(level_0)) {
            $this_0.actualLog_pwm3k3$(level_0, "Original SVG Path: '" + d + "'");
          }

          var $this_1 = this.logger;
          var level_1 = Logger$Level.TRACE;
          if ($this_1.isEnabled_fs4ikx$(level_1)) {
            $this_1.actualLog_pwm3k3$(level_1, 'Points: ' + c.state.path.getPoints());
          }

          c.getBounds_2da8yn$(bounds);
          break;
      }
      if (xml.hasAttribute_61zpoe$('stroke-width')) {
        c.lineWidth = xml.double_io5o9c$('stroke-width', 1.0);
      }
      if (xml.hasAttribute_61zpoe$('stroke')) {
        c.strokeStyle = this.parseFillStroke_vgfctv$(c, xml.str_puj7f4$('stroke'), bounds);
      }
      if (xml.hasAttribute_61zpoe$('fill'))
        this.applyFill_vgfctv$(c, xml.str_puj7f4$('fill'), bounds);
      if (xml.hasAttribute_61zpoe$('font-size')) {
        c.font = c.font.copy_io5o9c$(void 0, xml.double_io5o9c$('font-size'));
      }
      if (xml.hasAttribute_61zpoe$('font-family')) {
        c.font = c.font.copy_io5o9c$(xml.str_puj7f4$('font-family'));
      }
      if (xml.hasAttribute_61zpoe$('style')) {
        this.applyStyle_0(c, SVG$SvgStyle$Companion_getInstance().parse_61zpoe$(xml.str_puj7f4$('style')), bounds);
      }
      if (xml.hasAttribute_61zpoe$('transform')) {
        this.applyTransform_0(c.state, this.parseTransform_61zpoe$(xml.str_puj7f4$('transform')));
      }
      if (xml.hasAttribute_61zpoe$('text-anchor')) {
        switch (xml.str_puj7f4$('text-anchor').toLowerCase()) {
          case 'left':
            tmp$_0 = Context2d$HorizontalAlign$LEFT_getInstance();
            break;
          case 'center':
          case 'middle':
            tmp$_0 = Context2d$HorizontalAlign$CENTER_getInstance();
            break;
          case 'right':
            tmp$_0 = Context2d$HorizontalAlign$RIGHT_getInstance();
            break;
          default:tmp$_0 = c.horizontalAlign;
            break;
        }
        c.horizontalAlign = tmp$_0;
      }
      if (xml.hasAttribute_61zpoe$('fill-opacity')) {
        c.globalAlpha = xml.double_io5o9c$('fill-opacity', 1.0);
      }
      if (equals(nodeName, 'g'))
        this.drawChildren_97uusy$(xml, c);
      c.fillStroke();
    }
    finally {
      c.restore();
    }
    return c;
  };
  SVG_0.prototype.applyFill_vgfctv$ = function (c, str, bounds) {
    c.fillStyle = this.parseFillStroke_vgfctv$(c, str, bounds);
  };
  SVG_0.prototype.applyTransform_0 = function (state, transform) {
    state.transform.premultiply_7f5bc6$(transform);
  };
  SVG_0.prototype.applyStyle_0 = function (c, style, bounds) {
    var tmp$;
    tmp$ = style.styles.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.key;
      var v = tmp$_0.value;
      if (equals(k, 'fill'))
        this.applyFill_vgfctv$(c, v, bounds);
      else {
        var $this = this.logger;
        var level = Logger$Level.WARN;
        if ($this.isEnabled_fs4ikx$(level)) {
          $this.actualLog_pwm3k3$(level, 'Unsupported style ' + k + ' in css');
        }
      }
    }
  };
  function SVG$parseTransform$double(closure$doubleArgs) {
    return function (index) {
      var $receiver = closure$doubleArgs;
      return index >= 0 && index <= get_lastIndex($receiver) ? $receiver.get_za3lpa$(index) : 0.0;
    };
  }
  SVG_0.prototype.parseTransform_61zpoe$ = function (str) {
    var tokens = SVG$SvgStyle$Companion_getInstance().tokenize_61zpoe$(str);
    var tr = new ListReader(tokens);
    var out = new Matrix2d();
    while (tr.hasMore) {
      var id = tr.read().toLowerCase();
      var args = ArrayList_init_0();
      if (equals(tr.peek(), '(')) {
        tr.read();
        while (true) {
          if (equals(tr.peek(), ')')) {
            tr.read();
            break;
          }
          if (equals(tr.peek(), ',')) {
            tr.read();
            continue;
          }
          var element = tr.read();
          args.add_11rb$(element);
        }
      }
      var destination = ArrayList_init_1(collectionSizeOrDefault(args, 10));
      var tmp$;
      tmp$ = args.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0;
        destination.add_11rb$((tmp$_0 = toDoubleOrNull(item)) != null ? tmp$_0 : 0.0);
      }
      var doubleArgs = destination;
      var double = SVG$parseTransform$double(doubleArgs);
      switch (id) {
        case 'translate':
          out.pretranslate_lu1900$(double(0), double(1));
          break;
        case 'scale':
          out.prescale_lu1900$(double(0), double(1));
          break;
        case 'matrix':
          out.premultiply_15yvbs$(double(0), double(1), double(2), double(3), double(4), double(5));
          break;
        default:invalidOp('Unsupported transform ' + id + ' : ' + args + ' : ' + doubleArgs + ' (' + str + ')');
          break;
      }
    }
    return out;
  };
  function SVG$Companion() {
    SVG$Companion_instance = this;
  }
  function SVG$Companion$tokenizePath$skipSeparators($receiver) {
    while (true) {
      var tmp$ = $receiver.hasMore;
      if (tmp$) {
        var it = $receiver.peekChar();
        tmp$ = unboxChar(it) === 44 || unboxChar(it) === 32 || unboxChar(it) === 9 || unboxChar(it) === 10 || unboxChar(it) === 13;
      }
      if (!tmp$)
        break;
      $receiver.readChar();
    }
  }
  function SVG$Companion$tokenizePath$readNumber(closure$skipSeparators) {
    return function ($receiver) {
      var tmp$;
      closure$skipSeparators($receiver);
      var first = {v: true};
      var tmp$_0;
      var start = $receiver.pos;
      while (true) {
        var tmp$_1 = $receiver.hasMore;
        if (tmp$_1) {
          var it = $receiver.peekChar();
          var filter$result;
          if (first.v) {
            first.v = false;
            filter$result = isDigit(unboxChar(it)) || unboxChar(it) === 45 || unboxChar(it) === 43;
          }
           else {
            filter$result = isDigit(unboxChar(it)) || unboxChar(it) === 46;
          }
          tmp$_1 = filter$result;
        }
        if (!tmp$_1)
          break;
        $receiver.readChar();
      }
      var end = $receiver.pos;
      var str = (tmp$_0 = end > start ? $receiver.slice_vux9f0$(start, end) : null) != null ? tmp$_0 : '';
      if (str.length === 0)
        tmp$ = 0.0;
      else
        try {
          tmp$ = toDouble(str);
        }
         catch (e) {
          if (Kotlin.isType(e, Throwable)) {
            printStackTrace(e);
            tmp$ = 0.0;
          }
           else
            throw e;
        }
      return tmp$;
    };
  }
  SVG$Companion.prototype.tokenizePath_61zpoe$ = function (str) {
    var sr = new StrReader(str);
    var skipSeparators = SVG$Companion$tokenizePath$skipSeparators;
    var readNumber = SVG$Companion$tokenizePath$readNumber(skipSeparators);
    var out = ArrayList_init_0();
    while (sr.hasMore) {
      skipSeparators(sr);
      var c = unboxChar(sr.peekChar());
      var tmp$;
      if ((new CharRange(48, 57)).contains_mef7kx$(c) || c === 45 || c === 43) {
        tmp$ = new SVG$PathTokenNumber(readNumber(sr));
      }
       else {
        tmp$ = new SVG$PathTokenCmd(unboxChar(sr.readChar()));
      }
      var element = tmp$;
      out.add_11rb$(element);
    }
    return out;
  };
  SVG$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SVG$Companion_instance = null;
  function SVG$Companion_getInstance() {
    if (SVG$Companion_instance === null) {
      new SVG$Companion();
    }
    return SVG$Companion_instance;
  }
  function SVG$PathToken() {
  }
  SVG$PathToken.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'PathToken',
    interfaces: []
  };
  function SVG$PathTokenNumber(value) {
    this.value = value;
  }
  SVG$PathTokenNumber.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathTokenNumber',
    interfaces: [SVG$PathToken]
  };
  SVG$PathTokenNumber.prototype.component1 = function () {
    return this.value;
  };
  SVG$PathTokenNumber.prototype.copy_14dthe$ = function (value) {
    return new SVG$PathTokenNumber(value === void 0 ? this.value : value);
  };
  SVG$PathTokenNumber.prototype.toString = function () {
    return 'PathTokenNumber(value=' + Kotlin.toString(this.value) + ')';
  };
  SVG$PathTokenNumber.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  SVG$PathTokenNumber.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.value, other.value))));
  };
  function SVG$PathTokenCmd(id) {
    this.id = toBoxedChar(id);
  }
  SVG$PathTokenCmd.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathTokenCmd',
    interfaces: [SVG$PathToken]
  };
  SVG$PathTokenCmd.prototype.component1 = function () {
    return this.id;
  };
  SVG$PathTokenCmd.prototype.copy_s8itvh$ = function (id) {
    return new SVG$PathTokenCmd(id === void 0 ? this.id : id);
  };
  SVG$PathTokenCmd.prototype.toString = function () {
    return 'PathTokenCmd(id=' + Kotlin.toString(this.id) + ')';
  };
  SVG$PathTokenCmd.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.id) | 0;
    return result;
  };
  SVG$PathTokenCmd.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.id, other.id))));
  };
  function SVG$SvgStyle(styles) {
    SVG$SvgStyle$Companion_getInstance();
    if (styles === void 0) {
      styles = HashMap_init();
    }
    this.styles = styles;
  }
  function SVG$SvgStyle$Companion() {
    SVG$SvgStyle$Companion_instance = this;
    this.logger = Logger.Companion.invoke_61zpoe$('SVG');
  }
  SVG$SvgStyle$Companion.prototype.tokenize_61zpoe$ = function (str) {
    var sr = new StrReader(str);
    var out = ArrayList_init_0();
    while (sr.hasMore) {
      while (true) {
        sr.skipSpaces();
        var tmp$;
        var start = sr.pos;
        while (true) {
          var tmp$_0 = sr.hasMore;
          if (tmp$_0) {
            var it = sr.peekChar();
            tmp$_0 = isLetterOrUnderscore(unboxChar(it)) || get_isNumeric(unboxChar(it)) || unboxChar(it) === 45 || unboxChar(it) === 35;
          }
          if (!tmp$_0)
            break;
          sr.readChar();
        }
        var end = sr.pos;
        var id = (tmp$ = end > start ? sr.slice_vux9f0$(start, end) : null) != null ? tmp$ : '';
        if (id.length > 0) {
          out.add_11rb$(id);
        }
         else {
          break;
        }
      }
      if (sr.eof)
        break;
      sr.skipSpaces();
      var symbol = unboxChar(sr.read());
      var element = String.fromCharCode(symbol);
      out.add_11rb$(element);
    }
    return out;
  };
  SVG$SvgStyle$Companion.prototype.readId_mr88w2$ = function ($receiver) {
    return $receiver.read();
  };
  SVG$SvgStyle$Companion.prototype.readColon_mr88w2$ = function ($receiver) {
    return expect($receiver, ':');
  };
  SVG$SvgStyle$Companion.prototype.readExpression_mr88w2$ = function ($receiver) {
    return $receiver.read();
  };
  SVG$SvgStyle$Companion.prototype.parse_61zpoe$ = function (str) {
    var tokens = this.tokenize_61zpoe$(str);
    var tr = new ListReader(tokens);
    var style = new SVG$SvgStyle();
    while (tr.hasMore) {
      var id = this.readId_mr88w2$(tr);
      if (tr.eof) {
        var $this = this.logger;
        var level = Logger$Level.ERROR;
        if ($this.isEnabled_fs4ikx$(level)) {
          $this.actualLog_pwm3k3$(level, "EOF. Parsing (ID='" + id + "'): '" + str + "', " + tokens);
        }
        break;
      }
      this.readColon_mr88w2$(tr);
      var rexpr = ArrayList_init_0();
      while (tr.hasMore && !equals(tr.peek(), ';')) {
        var element = this.readExpression_mr88w2$(tr);
        rexpr.add_11rb$(element);
      }
      var tmp$ = style.styles;
      var key = id.toLowerCase();
      var value = joinToString(rexpr, '');
      tmp$.put_xwzc9p$(key, value);
      if (tr.hasMore)
        expect(tr, ';');
    }
    return style;
  };
  SVG$SvgStyle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SVG$SvgStyle$Companion_instance = null;
  function SVG$SvgStyle$Companion_getInstance() {
    if (SVG$SvgStyle$Companion_instance === null) {
      new SVG$SvgStyle$Companion();
    }
    return SVG$SvgStyle$Companion_instance;
  }
  SVG$SvgStyle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SvgStyle',
    interfaces: []
  };
  SVG$SvgStyle.prototype.component1 = function () {
    return this.styles;
  };
  SVG$SvgStyle.prototype.copy_gtra9a$ = function (styles) {
    return new SVG$SvgStyle(styles === void 0 ? this.styles : styles);
  };
  SVG$SvgStyle.prototype.toString = function () {
    return 'SvgStyle(styles=' + Kotlin.toString(this.styles) + ')';
  };
  SVG$SvgStyle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.styles) | 0;
    return result;
  };
  SVG$SvgStyle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.styles, other.styles))));
  };
  SVG_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SVG',
    interfaces: [Context2d$SizedDrawable]
  };
  function SVG_init(str, $this) {
    $this = $this || Object.create(SVG_0.prototype);
    SVG_0.call($this, Xml_0(str));
    return $this;
  }
  function HtmlCanvas() {
    HtmlCanvas_instance = this;
  }
  HtmlCanvas.prototype.createCanvas_vux9f0$ = function (width, height) {
    if (util.OS.isNodejs) {
      return new (require('canvas'))(width, height);
    }
     else {
      var out = document.createElement('canvas');
      out.width = width;
      out.height = height;
      return out;
    }
  };
  HtmlCanvas.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlCanvas',
    interfaces: []
  };
  var HtmlCanvas_instance = null;
  function HtmlCanvas_getInstance() {
    if (HtmlCanvas_instance === null) {
      new HtmlCanvas();
    }
    return HtmlCanvas_instance;
  }
  function HtmlImage() {
    HtmlImage_instance = this;
  }
  HtmlImage.prototype.createHtmlCanvas_vux9f0$ = function (width, height) {
    var canvas = HtmlCanvas_getInstance().createCanvas_vux9f0$(width, height);
    canvas.width = width;
    canvas.height = height;
    return canvas;
  };
  HtmlImage.prototype.renderToHtmlCanvas_k31e0$ = function (bmpData, bmpWidth, bmpHeight, canvas) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var pixelCount = bmpData.size;
    var ctx = canvas.getContext('2d');
    var idata = ctx.createImageData(bmpWidth, bmpHeight);
    var idataData = idata.data;
    var m = 0;
    for (var n = 0; n < pixelCount; n++) {
      var c = bmpData.get_za3lpa$(n);
      idataData[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = c.r;
      idataData[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = c.g;
      idataData[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] = c.b;
      idataData[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] = c.a;
    }
    ctx.putImageData(idata, 0.0, 0.0);
    return canvas;
  };
  HtmlImage.prototype.renderToHtmlCanvas_4jes5x$ = function (bmp, canvas) {
    var tmp$;
    if (bmp.premult) {
      tmp$ = RGBA$Companion_getInstance().depremultiplyFast_melyw8$(new RgbaArray(bmp.data.array.slice()));
    }
     else {
      tmp$ = bmp.data;
    }
    var data = tmp$;
    return this.renderToHtmlCanvas_k31e0$(data, bmp.width, bmp.height, canvas);
  };
  HtmlImage.prototype.renderHtmlCanvasIntoBitmap_il3c60$ = function (canvas, out) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var width = canvas.width;
    var height = canvas.height;
    var len = Kotlin.imul(width, height);
    var ctx = canvas.getContext('2d');
    var data = ctx.getImageData(0.0, 0.0, width, height);
    var ddata = data.data;
    var m = 0;
    for (var n = 0; n < len; n++) {
      var r = ddata[tmp$ = m, m = tmp$ + 1 | 0, tmp$] & 255;
      var g = ddata[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] & 255;
      var b = ddata[tmp$_1 = m, m = tmp$_1 + 1 | 0, tmp$_1] & 255;
      var a = ddata[tmp$_2 = m, m = tmp$_2 + 1 | 0, tmp$_2] & 255;
      out.set_vlvk8p$(n, RGBA$Companion_getInstance().invoke_tjonv8$(r, g, b, a));
    }
  };
  HtmlImage.prototype.renderHtmlCanvasIntoBitmap_co8odx$ = function (canvas, bmp) {
    this.renderHtmlCanvasIntoBitmap_il3c60$(canvas, bmp.data);
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
    kind: Kind_OBJECT,
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
    if (Kotlin.isType($receiver, HtmlNativeImage))
      return $receiver;
    else
      return HtmlNativeImage_init_0(HtmlImage_getInstance().bitmapToHtmlCanvas_59u9qz$($receiver.toBMP32()));
  }
  var nativeImageFormatProvider;
  function HtmlNativeImage(texSource, width, height) {
    NativeImage.call(this, width, height, texSource, false);
    this.texSource = texSource;
    this.name_pab2p7$_0 = 'HtmlNativeImage';
    this.lazyCanvasElement_5st6v8$_0 = lazy(HtmlNativeImage$lazyCanvasElement$lambda(this));
  }
  Object.defineProperty(HtmlNativeImage.prototype, 'name', {
    get: function () {
      return this.name_pab2p7$_0;
    }
  });
  Object.defineProperty(HtmlNativeImage.prototype, 'element', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this.texSource, HTMLElement) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(HtmlNativeImage.prototype, 'lazyCanvasElement', {
    get: function () {
      return this.lazyCanvasElement_5st6v8$_0.value;
    }
  });
  HtmlNativeImage.prototype.toNonNativeBmp = function () {
    var data = RgbaArray$Companion_getInstance().invoke_za3lpa$(Kotlin.imul(this.width, this.height));
    HtmlImage_getInstance().renderHtmlCanvasIntoBitmap_il3c60$(this.lazyCanvasElement, data);
    return new Bitmap32(this.width, this.height, data);
  };
  HtmlNativeImage.prototype.getContext2d_6taknv$$default = function (antialiasing) {
    return new Context2d(new CanvasContext2dRenderer(this.lazyCanvasElement));
  };
  function HtmlNativeImage$lazyCanvasElement$lambda(this$HtmlNativeImage) {
    return function () {
      var tmp$;
      tmp$ = this$HtmlNativeImage.texSource;
      if (Kotlin.isType(tmp$, HTMLCanvasElement))
        return this$HtmlNativeImage.texSource;
      else if (Kotlin.isType(tmp$, HTMLImageElement))
        return BrowserImage_getInstance().imageToCanvas_38alav$(this$HtmlNativeImage.texSource);
      else {
        throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported image type ' + this$HtmlNativeImage.texSource));
      }
    };
  }
  HtmlNativeImage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlNativeImage',
    interfaces: [NativeImage]
  };
  function HtmlNativeImage_init(img, $this) {
    $this = $this || Object.create(HtmlNativeImage.prototype);
    HtmlNativeImage.call($this, img, img.width, img.height);
    return $this;
  }
  function HtmlNativeImage_init_0(canvas, $this) {
    $this = $this || Object.create(HtmlNativeImage.prototype);
    HtmlNativeImage.call($this, canvas, canvas.width, canvas.height);
    return $this;
  }
  function HtmlNativeImageFormatProvider() {
    HtmlNativeImageFormatProvider_instance = this;
    NativeImageFormatProvider.call(this);
  }
  HtmlNativeImageFormatProvider.prototype.decode_fqrh44$ = function (data_0, continuation_0, suspended) {
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
            this.result_0 = BrowserImage_getInstance().decodeToCanvas_fqrh44$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return HtmlNativeImage_init_0(this.result_0);
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
  HtmlNativeImageFormatProvider.prototype.decode_o2v52r$ = function (vfs_0, path_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_o2v52r$_0(this, vfs_0, path_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_o2v52r$_0($this, vfs_0, path_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
  }
  Coroutine$decode_o2v52r$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_o2v52r$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_o2v52r$_0.prototype.constructor = Coroutine$decode_o2v52r$_0;
  Coroutine$decode_o2v52r$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$vfs, LocalVfs)) {
              this.state_0 = 6;
              this.result_0 = BrowserImage_getInstance().loadImage_61zpoe$(this.local$path, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              if (Kotlin.isType(this.local$vfs, UrlVfs)) {
                var jsUrl = this.local$vfs.getFullUrl_61zpoe$(this.local$path);
                this.state_0 = 4;
                this.result_0 = BrowserImage_getInstance().loadImage_61zpoe$(jsUrl, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
               else {
                this.local$tmp$ = BrowserImage_getInstance();
                this.state_0 = 2;
                this.result_0 = this.local$vfs.get_61zpoe$(this.local$path).readAll(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.decodeToCanvas_fqrh44$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_0 = HtmlNativeImage_init_0(this.result_0);
            this.state_0 = 5;
            continue;
          case 4:
            this.local$tmp$_0 = HtmlNativeImage_init(this.result_0);
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 7;
            continue;
          case 6:
            this.local$tmp$_0 = HtmlNativeImage_init(this.result_0);
            this.state_0 = 7;
            continue;
          case 7:
            return this.local$tmp$_0;
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
  HtmlNativeImageFormatProvider.prototype.create_vux9f0$ = function (width, height) {
    return HtmlNativeImage_init_0(HtmlCanvas_getInstance().createCanvas_vux9f0$(width, height));
  };
  HtmlNativeImageFormatProvider.prototype.copy_uler2c$ = function (bmp) {
    return HtmlNativeImage_init_0(HtmlImage_getInstance().bitmapToHtmlCanvas_59u9qz$(bmp.toBMP32()));
  };
  HtmlNativeImageFormatProvider.prototype.display_uwsoz2$ = function (bitmap, kind, continuation) {
    var tmp$, tmp$_0;
    if (kind === 1) {
      var img = document.createElement('img');
      img.setAttribute('src', 'data:image/png;base64,' + toBase64(PNG_getInstance().encode_hnx2ev$(bitmap)));
      (tmp$ = document.body) != null ? tmp$.appendChild(img) : null;
    }
     else {
      var img_0 = toHtmlNative(bitmap);
      (tmp$_0 = document.body) != null ? tmp$_0.appendChild(img_0.element) : null;
    }
  };
  HtmlNativeImageFormatProvider.prototype.mipmap_uwsoz2$ = function (bmp, levels) {
    var out = ensureNative(bmp);
    for (var n = 0; n < levels; n++)
      out = this.mipmap_uler2c$(out);
    return out;
  };
  HtmlNativeImageFormatProvider.prototype.mipmap_uler2c$ = function (bmp) {
    var x = bmp.width * 0.5;
    var tmp$ = numberToInt(Math_0.ceil(x));
    var x_0 = bmp.height * 0.5;
    var out = NativeImage_0(tmp$, numberToInt(Math_0.ceil(x_0)));
    out.getContext2d_6taknv$(true).renderer.drawImage_4amb17$(bmp, 0, 0, out.width, out.height);
    return out;
  };
  HtmlNativeImageFormatProvider.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlNativeImageFormatProvider',
    interfaces: [NativeImageFormatProvider]
  };
  var HtmlNativeImageFormatProvider_instance = null;
  function HtmlNativeImageFormatProvider_getInstance() {
    if (HtmlNativeImageFormatProvider_instance === null) {
      new HtmlNativeImageFormatProvider();
    }
    return HtmlNativeImageFormatProvider_instance;
  }
  function BrowserImage() {
    BrowserImage_instance = this;
  }
  BrowserImage.prototype.decodeToCanvas_fqrh44$ = function (bytes_0, continuation_0, suspended) {
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
            var type = 'image/png';
            var o = {};
            o['type'] = type;
            var blob = new Blob([this.local$bytes], o);
            this.local$blobURL = URL.createObjectURL(blob);
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.$this.loadCanvas_61zpoe$(this.local$blobURL, this);
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
            URL.revokeObjectURL(this.local$blobURL);
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
  BrowserImage.prototype.imageToCanvas_38alav$ = function (img) {
    var canvas = HtmlCanvas_getInstance().createCanvas_vux9f0$(img.width, img.height);
    var ctx = canvas.getContext('2d');
    ctx.drawImage(img, 0.0, 0.0);
    return canvas;
  };
  var SuccessOrFailure = Kotlin.kotlin.SuccessOrFailure;
  function BrowserImage$loadImage$lambda$lambda(closure$c) {
    return function (v) {
      closure$c.resumeWith_i5d895$(new SuccessOrFailure(v));
      return Unit;
    };
  }
  var SuccessOrFailure$SuccessOrFailure$Failure_init = Kotlin.kotlin.SuccessOrFailure.Failure;
  function BrowserImage$loadImage$lambda$lambda_0(closure$c) {
    return function (v) {
      closure$c.resumeWith_i5d895$(new SuccessOrFailure(new SuccessOrFailure$SuccessOrFailure$Failure_init(v)));
      return Unit;
    };
  }
  function BrowserImage$loadImage$lambda$lambda_1(closure$c, closure$img) {
    return function (it) {
      var $receiver = closure$c;
      var value = closure$img;
      $receiver.resumeWith_i5d895$(new SuccessOrFailure(value));
      return Unit;
    };
  }
  function BrowserImage$loadImage$lambda$lambda_2(closure$c, closure$jsUrl) {
    return function (f, f_0, f_1, f_2, f_3) {
      var $receiver = closure$c;
      var exception = RuntimeException_init('error loading image ' + closure$jsUrl);
      $receiver.resumeWith_i5d895$(new SuccessOrFailure(new SuccessOrFailure$SuccessOrFailure$Failure_init(exception)));
      return Unit;
    };
  }
  function BrowserImage$loadImage$lambda(closure$jsUrl) {
    return function (c) {
      if (util.OS.isNodejs) {
        require('canvas').loadImage(closure$jsUrl).then(BrowserImage$loadImage$lambda$lambda(c), BrowserImage$loadImage$lambda$lambda_0(c));
      }
       else {
        var img = document.createElement('img');
        img.onload = BrowserImage$loadImage$lambda$lambda_1(c, img);
        img.onerror = BrowserImage$loadImage$lambda$lambda_2(c, closure$jsUrl);
        img.src = closure$jsUrl;
      }
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
  BrowserImage.prototype.loadImage_61zpoe$ = function (jsUrl_0, continuation_0, suspended) {
    var instance = new Coroutine$loadImage_61zpoe$(this, jsUrl_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$loadImage_61zpoe$($this, jsUrl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$jsUrl = jsUrl_0;
  }
  Coroutine$loadImage_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadImage_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadImage_61zpoe$.prototype.constructor = Coroutine$loadImage_61zpoe$;
  Coroutine$loadImage_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda(false, BrowserImage$loadImage$lambda(this.local$jsUrl))(this);
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
  BrowserImage.prototype.loadCanvas_61zpoe$ = function (jsUrl_0, continuation_0, suspended) {
    var instance = new Coroutine$loadCanvas_61zpoe$(this, jsUrl_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$loadCanvas_61zpoe$($this, jsUrl_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$jsUrl = jsUrl_0;
  }
  Coroutine$loadCanvas_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadCanvas_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadCanvas_61zpoe$.prototype.constructor = Coroutine$loadCanvas_61zpoe$;
  Coroutine$loadCanvas_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.loadImage_61zpoe$(this.local$jsUrl, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.imageToCanvas_38alav$(this.result_0);
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
  BrowserImage.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BrowserImage',
    interfaces: []
  };
  var BrowserImage_instance = null;
  function BrowserImage_getInstance() {
    if (BrowserImage_instance === null) {
      new BrowserImage();
    }
    return BrowserImage_instance;
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
      tmp$_1 = $receiver.color.htmlStringSimple;
    else if (Kotlin.isType($receiver, Context2d$Gradient)) {
      switch ($receiver.kind.name) {
        case 'LINEAR':
          var grad = this.ctx.createLinearGradient($receiver.x0, $receiver.y0, $receiver.x1, $receiver.y1);
          tmp$ = $receiver.stops.size;
          for (var n = 0; n < tmp$; n++) {
            var stop = $receiver.stops.get_za3lpa$(n);
            var color = $receiver.colors.get_za3lpa$(n);
            grad.addColorStop(stop, Colors_getInstance().toHtmlStringSimple_za3lpa$(color));
          }

          tmp$_1 = grad;
          break;
        case 'RADIAL':
          var grad_0 = this.ctx.createRadialGradient($receiver.x0, $receiver.y0, $receiver.r0, $receiver.x1, $receiver.y1, $receiver.r1);
          tmp$_0 = $receiver.stops.size;
          for (var n_0 = 0; n_0 < tmp$_0; n_0++) {
            var stop_0 = $receiver.stops.get_za3lpa$(n_0);
            var color_0 = $receiver.colors.get_za3lpa$(n_0);
            grad_0.addColorStop(stop_0, Colors_getInstance().toHtmlStringSimple_za3lpa$(color_0));
          }

          tmp$_1 = grad_0;
          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
    }
     else if (Kotlin.isType($receiver, Context2d$BitmapPaint))
      tmp$_1 = this.ctx.createPattern(toHtmlNative($receiver.bitmap).texSource, $receiver.repeat ? 'repeat' : 'no-repeat');
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.ctx.globalAlpha = state.globalAlpha;
    this.setFont_0(state.font);
    var t = state.transform;
    this.ctx.setTransform(t.a, t.b, t.c, t.d, t.tx, t.ty);
    if (fill) {
      this.ctx.fillStyle = this.toJsStr_2y61xz$(state.fillStyle);
    }
     else {
      this.ctx.lineWidth = state.lineWidth;
      tmp$_0 = this.ctx;
      switch (state.lineJoin.name) {
        case 'BEVEL':
          tmp$ = 'bevel';
          break;
        case 'MITER':
          tmp$ = 'miter';
          break;
        case 'ROUND':
          tmp$ = 'round';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_0.lineJoin = tmp$;
      tmp$_2 = this.ctx;
      switch (state.lineCap.name) {
        case 'BUTT':
          tmp$_1 = 'butt';
          break;
        case 'ROUND':
          tmp$_1 = 'round';
          break;
        case 'SQUARE':
          tmp$_1 = 'square';
          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_2.lineCap = tmp$_1;
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
      this.ctx.drawImage((Kotlin.isType(tmp$ = ensureNative(image), HtmlNativeImage) ? tmp$ : throwCCE()).texSource, x, y, width, height);
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
        switch (cmd) {
          case 1:
            var x = $this.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
            var y = $this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
            this.ctx.moveTo(x, y);
            break;
          case 2:
            var x_0 = $this.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
            var y_0 = $this.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
            this.ctx.lineTo(x_0, y_0);
            break;
          case 3:
            var x1 = $this.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
            var y1 = $this.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
            var x2 = $this.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
            var y2 = $this.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
            this.ctx.quadraticCurveTo(x1, y1, x2, y2);
            break;
          case 4:
            var x1_0 = $this.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
            var y1_0 = $this.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
            var x2_0 = $this.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
            var y2_0 = $this.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
            var x3 = $this.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
            var y3 = $this.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
            this.ctx.bezierCurveTo(x1_0, y1_0, x2_0, y2_0, x3, y3);
            break;
          case 5:
            this.ctx.closePath();
            break;
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
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      this.setState_0(state, fill);
      tmp$_0 = this.ctx;
      switch (state.verticalAlign.name) {
        case 'TOP':
          tmp$ = 'top';
          break;
        case 'MIDDLE':
          tmp$ = 'middle';
          break;
        case 'BASELINE':
          tmp$ = 'alphabetic';
          break;
        case 'BOTTOM':
          tmp$ = 'bottom';
          break;
        default:tmp$ = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_0.textBaseline = tmp$;
      tmp$_2 = this.ctx;
      switch (state.horizontalAlign.name) {
        case 'LEFT':
          tmp$_1 = 'left';
          break;
        case 'CENTER':
          tmp$_1 = 'center';
          break;
        case 'RIGHT':
          tmp$_1 = 'right';
          break;
        default:tmp$_1 = Kotlin.noWhenBranchMatched();
          break;
      }
      tmp$_2.textAlign = tmp$_1;
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
      var width = numberToInt(metrics.width);
      out.bounds.setTo_6y0v78$(0, 0, width + 2, font.size);
    }
    finally {
      this.ctx.restore();
    }
  };
  CanvasContext2dRenderer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CanvasContext2dRenderer',
    interfaces: [Context2d$Renderer]
  };
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korim = package$soywiz.korim || (package$soywiz.korim = {});
  Object.defineProperty(package$korim, 'Korim', {
    get: Korim_getInstance
  });
  Object.defineProperty(package$korim, 'KORIM_VERSION_8be2vx$', {
    get: function () {
      return KORIM_VERSION;
    }
  });
  var package$bitmap = package$korim.bitmap || (package$korim.bitmap = {});
  package$bitmap.Atlas = Atlas;
  $$importsForInline$$['korma-js'] = $module$korma_js;
  $$importsForInline$$['korim-js'] = _;
  package$bitmap.Bitmap = Bitmap;
  package$bitmap.createWithThisFormatTyped_cq1euf$ = createWithThisFormatTyped;
  package$bitmap.extract_or9s9z$ = extract;
  package$bitmap.Bitmap1 = Bitmap1;
  package$bitmap.Bitmap16 = Bitmap16;
  package$bitmap.Bitmap2 = Bitmap2;
  Object.defineProperty(Bitmap32, 'Companion', {
    get: Bitmap32$Companion_getInstance
  });
  package$bitmap.Bitmap32_init_l6bm7e$ = Bitmap32_init;
  package$bitmap.Bitmap32_init_ci55m7$ = Bitmap32_init_0;
  package$bitmap.Bitmap32_init_g4fuo$ = Bitmap32_init_1;
  package$bitmap.Bitmap32 = Bitmap32;
  package$bitmap.Bitmap4 = Bitmap4;
  $$importsForInline$$['kmem-js'] = $module$kmem_js;
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
  Object.defineProperty(BitmapChannel, 'Companion', {
    get: BitmapChannel$Companion_getInstance
  });
  package$bitmap.BitmapChannel = BitmapChannel;
  package$bitmap.get_Y_tqizvu$ = get_Y;
  package$bitmap.get_Cb_tqizvu$ = get_Cb;
  package$bitmap.get_Cr_tqizvu$ = get_Cr;
  package$bitmap.get_A_tqizvu$ = get_A;
  package$bitmap.toStringYCbCr_4f4qi0$ = toStringYCbCr;
  package$bitmap.matchContentsDistinctCount_1cy7pt$ = matchContentsDistinctCount;
  package$bitmap.matchContents_1cy7pt$ = matchContents;
  package$bitmap.setAlpha_1dwlii$ = setAlpha;
  package$bitmap.putWithBorder_cxfkob$ = putWithBorder;
  package$bitmap.BitmapIndexed = BitmapIndexed;
  package$bitmap.BmpSlice = BmpSlice;
  package$bitmap.BitmapSlice = BitmapSlice;
  package$bitmap.BitmapSliceCompat_qpf1ss$ = BitmapSliceCompat;
  package$bitmap.slice_umqjjl$ = slice;
  package$bitmap.sliceWithBounds_or9s9z$ = sliceWithBounds;
  package$bitmap.sliceWithSize_or9s9z$ = sliceWithSize_1;
  Object.defineProperty(package$bitmap, 'Bitmaps', {
    get: Bitmaps_getInstance
  });
  package$bitmap.NativeImage = NativeImage;
  package$bitmap.mipmap_lzupcl$ = mipmap;
  package$bitmap.toUri_p18lal$ = toUri;
  package$bitmap.NativeImage_vux9f0$ = NativeImage_0;
  package$bitmap.NativeImage_oiyklk$ = NativeImage_1;
  package$bitmap.NativeImage_7vwhb5$ = NativeImage_2;
  package$bitmap.ensureNative_p18lal$ = ensureNative;
  package$bitmap.raster_kiw58k$ = raster;
  NinePatchInfo.AxisSegment = NinePatchInfo$AxisSegment;
  NinePatchInfo.AxisInfo = NinePatchInfo$AxisInfo;
  NinePatchInfo.Segment = NinePatchInfo$Segment;
  package$bitmap.NinePatchInfo_init_mbbjvw$ = NinePatchInfo_init;
  package$bitmap.NinePatchInfo = NinePatchInfo;
  $$importsForInline$$['kds-js'] = $module$kds_js;
  $$importsForInline$$['korio-js'] = $module$korio_js;
  package$bitmap.NinePatchBitmap32 = NinePatchBitmap32;
  package$bitmap.asNinePatch_p18lal$ = asNinePatch;
  package$bitmap.readNinePatch_2axf5n$ = readNinePatch;
  Object.defineProperty(package$bitmap, 'PSNR', {
    get: PSNR_getInstance
  });
  package$bitmap.psnrDiffTo_uz8x2p$ = psnrDiffTo;
  package$bitmap.computePsnr_so1h92$ = computePsnr;
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
  package$color.RGBA = RGBA;
  package$color.ColorFormat = ColorFormat;
  package$color.ColorFormat16 = ColorFormat16;
  package$color.ColorFormat24 = ColorFormat24;
  package$color.ColorFormat32 = ColorFormat32;
  Object.defineProperty(ColorTransform, 'Companion', {
    get: ColorTransform$Companion_getInstance
  });
  package$color.ColorTransform = ColorTransform;
  package$color.ColorTransform_6tck58$ = ColorTransform_0;
  Object.defineProperty(Colors.prototype, 'Default', {
    get: Colors$Default_getInstance
  });
  Object.defineProperty(package$color, 'Colors', {
    get: Colors_getInstance
  });
  package$color.PaletteColorFormat = PaletteColorFormat;
  Object.defineProperty(RGB, 'Companion', {
    get: RGB$Companion_getInstance
  });
  package$color.RGB = RGB;
  Object.defineProperty(package$color, 'BGR', {
    get: BGR_getInstance
  });
  Object.defineProperty(RGBA, 'Companion', {
    get: RGBA$Companion_getInstance
  });
  Object.defineProperty(RgbaArray, 'Companion', {
    get: RgbaArray$Companion_getInstance
  });
  package$color.RgbaArray = RgbaArray;
  package$color.toRgbaArray_6eadht$ = toRgbaArray;
  package$color.arraycopy_m3qhle$ = arraycopy_2;
  package$color.getR_bx7wdr$ = getR;
  package$color.getG_bx7wdr$ = getG;
  package$color.getB_bx7wdr$ = getB;
  package$color.getA_bx7wdr$ = getA;
  package$color.toHexString_bx7wdr$ = toHexString;
  package$color.toHtmlColor_bx7wdr$ = toHtmlColor;
  package$color.depremultiplyFaster_bx7wdr$ = depremultiplyFaster;
  package$color.depremultiplyFastest_bx7wdr$ = depremultiplyFastest;
  package$color.toRgbaArray_c0u5ea$ = toRgbaArray_0;
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
  Object.defineProperty(package$color, 'YCbCr', {
    get: YCbCr_getInstance
  });
  Object.defineProperty(package$color, 'YUVA', {
    get: YUVA_getInstance
  });
  var package$font = package$korim.font || (package$korim.font = {});
  package$font.drawText_khk0ju$ = drawText;
  BitmapFont.Glyph = BitmapFont$Glyph;
  BitmapFont.GlyphInfo = BitmapFont$GlyphInfo;
  package$font.BitmapFont = BitmapFont;
  $$importsForInline$$['klock-js'] = $module$klock_js;
  Object.defineProperty(package$font, 'BitmapFontGenerator', {
    get: BitmapFontGenerator_getInstance
  });
  TtfFont.Table = TtfFont$Table;
  Object.defineProperty(TtfFont$NameIds, 'COPYRIGHT', {
    get: TtfFont$NameIds$COPYRIGHT_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FONT_FAMILY_NAME', {
    get: TtfFont$NameIds$FONT_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FONT_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$FONT_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'UNIQUE_FONT_ID', {
    get: TtfFont$NameIds$UNIQUE_FONT_ID_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'FULL_FONT_NAME', {
    get: TtfFont$NameIds$FULL_FONT_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'VERSION_STRING', {
    get: TtfFont$NameIds$VERSION_STRING_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'POSTSCRIPT_NAME', {
    get: TtfFont$NameIds$POSTSCRIPT_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TRADEMARK', {
    get: TtfFont$NameIds$TRADEMARK_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'MANUFACTURER', {
    get: TtfFont$NameIds$MANUFACTURER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DESIGNER', {
    get: TtfFont$NameIds$DESIGNER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DESCRIPTION', {
    get: TtfFont$NameIds$DESCRIPTION_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'URL_VENDOR', {
    get: TtfFont$NameIds$URL_VENDOR_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'URL_DESIGNER', {
    get: TtfFont$NameIds$URL_DESIGNER_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LICENSE_DESCRIPTION', {
    get: TtfFont$NameIds$LICENSE_DESCRIPTION_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LICENSE_URL', {
    get: TtfFont$NameIds$LICENSE_URL_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'RESERVED_15', {
    get: TtfFont$NameIds$RESERVED_15_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TYPO_FAMILY_NAME', {
    get: TtfFont$NameIds$TYPO_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'TYPO_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$TYPO_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'COMPATIBLE_FULL', {
    get: TtfFont$NameIds$COMPATIBLE_FULL_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'SAMPLE_TEXT', {
    get: TtfFont$NameIds$SAMPLE_TEXT_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'POSTSCRIPT_CID', {
    get: TtfFont$NameIds$POSTSCRIPT_CID_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'WWS_FAMILY_NAME', {
    get: TtfFont$NameIds$WWS_FAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'WWS_SUBFAMILY_NAME', {
    get: TtfFont$NameIds$WWS_SUBFAMILY_NAME_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'LIGHT_BACKGROUND_PALETTE', {
    get: TtfFont$NameIds$LIGHT_BACKGROUND_PALETTE_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'DARK_BACKGROUND_PALETTE', {
    get: TtfFont$NameIds$DARK_BACKGROUND_PALETTE_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'VARIATIONS_POSTSCRIPT_NAME_PREFIX', {
    get: TtfFont$NameIds$VARIATIONS_POSTSCRIPT_NAME_PREFIX_getInstance
  });
  Object.defineProperty(TtfFont$NameIds, 'Companion', {
    get: TtfFont$NameIds$Companion_getInstance
  });
  TtfFont.NameIds = TtfFont$NameIds;
  TtfFont.Fixed = TtfFont$Fixed;
  TtfFont.HorMetric = TtfFont$HorMetric;
  Object.defineProperty(TtfFont, 'Companion', {
    get: TtfFont$Companion_getInstance
  });
  TtfFont.IGlyph = TtfFont$IGlyph;
  TtfFont.Contour = TtfFont$Contour;
  Object.defineProperty(TtfFont$Origin, 'TOP', {
    get: TtfFont$Origin$TOP_getInstance
  });
  Object.defineProperty(TtfFont$Origin, 'BASELINE', {
    get: TtfFont$Origin$BASELINE_getInstance
  });
  TtfFont.Origin = TtfFont$Origin;
  TtfFont.GlyphReference = TtfFont$GlyphReference;
  TtfFont.CompositeGlyph = TtfFont$CompositeGlyph;
  TtfFont.Glyph = TtfFont$Glyph;
  var package$ttf = package$font.ttf || (package$font.ttf = {});
  package$ttf.TtfFont = TtfFont;
  package$ttf.fillText_3ytem2$ = fillText;
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
  package$format.plus_nbm7p8$ = plus_3;
  package$format.plus_fwhekv$ = plus_4;
  package$format.writeTo_d2mj5k$ = writeTo;
  Object.defineProperty(package$format, 'defaultImageFormats', {
    get: get_defaultImageFormats
  });
  package$format.ImageFrame = ImageFrame;
  package$format.get_area_mj13kf$ = get_area;
  package$format.ImageInfo = ImageInfo;
  Object.defineProperty(package$format, 'JPEG', {
    get: JPEG_getInstance
  });
  JPEGDecoder.Jfif = JPEGDecoder$Jfif;
  JPEGDecoder.Adobe = JPEGDecoder$Adobe;
  JPEGDecoder.HuffmanNode = JPEGDecoder$HuffmanNode;
  JPEGDecoder.FrameComponent = JPEGDecoder$FrameComponent;
  JPEGDecoder.Frame = JPEGDecoder$Frame;
  JPEGDecoder.Component = JPEGDecoder$Component;
  JPEGDecoder.ImageInfo = JPEGDecoder$ImageInfo;
  JPEGDecoder.ImageData = JPEGDecoder$ImageData;
  Object.defineProperty(JPEGDecoder, 'Companion', {
    get: JPEGDecoder$Companion_getInstance
  });
  package$format.JPEGDecoder = JPEGDecoder;
  Object.defineProperty(JPEGEncoder, 'Companion', {
    get: JPEGEncoder$Companion_getInstance
  });
  package$format.JPEGEncoder = JPEGEncoder;
  package$format.decode_97bjr4$ = decode;
  package$format.decode_cv04aa$ = decode_0;
  package$format.decode_rk4kpr$ = decode_1;
  Object.defineProperty(package$format, 'nativeImageFormatProviders', {
    get: get_nativeImageFormatProviders
  });
  package$format.displayImage_uwsoz2$ = displayImage;
  package$format.decodeImageBytes_fqrh44$ = decodeImageBytes;
  package$format.decodeImageFile_3ekr7n$ = decodeImageFile;
  package$format.readNativeImage_yirdke$ = readNativeImage;
  package$format.readImageData_vi5npc$ = readImageData;
  package$format.readNativeImage_yjldv$ = readNativeImage_0;
  package$format.readImageData_8dzss$ = readImageData_0;
  package$format.readImageDataProps_ie8jgv$ = readImageDataProps;
  package$format.readBitmapListNoNative_a0awwm$ = readBitmapListNoNative;
  package$format.readBitmapInfo_vi5npc$ = readBitmapInfo;
  package$format.readImageData_2axf5n$ = readImageData_1;
  package$format.readBitmapListNoNative_2axf5n$ = readBitmapListNoNative_0;
  package$format.readBitmap_alhih0$ = readBitmap;
  package$format.readBitmap_ie8jgv$ = readBitmap_0;
  package$format.readBitmapInfo_2axf5n$ = readBitmapInfo_0;
  package$format.readBitmapOptimized_2axf5n$ = readBitmapOptimized;
  package$format.readBitmap_vi5npc$ = readBitmap_1;
  package$format.readBitmapSlice_2axf5n$ = readBitmapSlice;
  Object.defineProperty(package$format, 'nativeImageLoadingEnabled', {
    get: function () {
      return nativeImageLoadingEnabled;
    },
    set: function (value) {
      nativeImageLoadingEnabled = value;
    }
  });
  package$format.disableNativeImageLoading_o14v8n$ = disableNativeImageLoading;
  package$format.readBitmapNoNative_vi5npc$ = readBitmapNoNative;
  package$format.readBitmapNoNative_2axf5n$ = readBitmapNoNative_0;
  package$format.writeBitmap_d6890c$ = writeBitmap;
  package$format.NativeImageFormatProvider = NativeImageFormatProvider;
  package$format.showImageAndWaitExt_p18lal$ = showImageAndWaitExt;
  package$format.showImagesAndWaitExt_qlwqpb$ = showImagesAndWaitExt;
  package$format.showImageAndWait_uwsoz2$ = showImageAndWait;
  package$format.showImageAndWait_7fmkw5$ = showImageAndWait_0;
  package$format.showImagesAndWait_eltpmo$ = showImagesAndWait;
  PNG.prototype.InterlacedPass = PNG$InterlacedPass;
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
  PNG.prototype.DecodingContext = PNG$DecodingContext;
  Object.defineProperty(package$format, 'PNG', {
    get: PNG_getInstance
  });
  PSD.prototype.PsdImageInfo = PSD$PsdImageInfo;
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
  TGA.prototype.Info = TGA$Info;
  Object.defineProperty(package$format, 'TGA', {
    get: TGA_getInstance
  });
  var package$geom = package$korim.geom || (package$korim.geom = {});
  package$geom.render_m8xwlz$ = render;
  Bitmap32Context2d.Edge = Bitmap32Context2d$Edge;
  Bitmap32Context2d.Filler = Bitmap32Context2d$Filler;
  Bitmap32Context2d.NoneFiller = Bitmap32Context2d$NoneFiller;
  Bitmap32Context2d.ColorFiller = Bitmap32Context2d$ColorFiller;
  Bitmap32Context2d.BitmapFiller = Bitmap32Context2d$BitmapFiller;
  Bitmap32Context2d.GradientFiller = Bitmap32Context2d$GradientFiller;
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
  Context2d.ScaledRenderer = Context2d$ScaledRenderer;
  Object.defineProperty(Context2d$Renderer, 'Companion', {
    get: Context2d$Renderer$Companion_getInstance
  });
  Context2d.Renderer = Context2d$Renderer;
  Object.defineProperty(Context2d$VerticalAlign, 'TOP', {
    get: Context2d$VerticalAlign$TOP_getInstance
  });
  Object.defineProperty(Context2d$VerticalAlign, 'MIDDLE', {
    get: Context2d$VerticalAlign$MIDDLE_getInstance
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
  Object.defineProperty(Context2d$Gradient$Kind, 'LINEAR', {
    get: Context2d$Gradient$Kind$LINEAR_getInstance
  });
  Object.defineProperty(Context2d$Gradient$Kind, 'RADIAL', {
    get: Context2d$Gradient$Kind$RADIAL_getInstance
  });
  Context2d$Gradient.Kind = Context2d$Gradient$Kind;
  Object.defineProperty(Context2d$Gradient$Units, 'USER_SPACE_ON_USE', {
    get: Context2d$Gradient$Units$USER_SPACE_ON_USE_getInstance
  });
  Object.defineProperty(Context2d$Gradient$Units, 'OBJECT_BOUNDING_BOX', {
    get: Context2d$Gradient$Units$OBJECT_BOUNDING_BOX_getInstance
  });
  Context2d$Gradient.Units = Context2d$Gradient$Units;
  Object.defineProperty(Context2d$Gradient$InterpolationMethod, 'LINEAR', {
    get: Context2d$Gradient$InterpolationMethod$LINEAR_getInstance
  });
  Object.defineProperty(Context2d$Gradient$InterpolationMethod, 'NORMAL', {
    get: Context2d$Gradient$InterpolationMethod$NORMAL_getInstance
  });
  Context2d$Gradient.InterpolationMethod = Context2d$Gradient$InterpolationMethod;
  Context2d.Gradient = Context2d$Gradient;
  Context2d.BitmapPaint = Context2d$BitmapPaint;
  Context2d.Drawable = Context2d$Drawable;
  Context2d.BoundsDrawable = Context2d$BoundsDrawable;
  Context2d.SizedDrawable = Context2d$SizedDrawable;
  Context2d.FuncDrawable = Context2d$FuncDrawable;
  package$vector.Context2d = Context2d;
  package$vector.renderTo_wvu93x$ = renderTo;
  package$vector.filled_8a6l4s$ = filled;
  package$vector.scaled_74j9n8$ = scaled;
  package$vector.translated_74j9n8$ = translated;
  package$vector.render_hd3tpo$ = render_0;
  package$vector.renderNoNative_hd3tpo$ = renderNoNative;
  package$vector.renderToImage_eb0g75$ = renderToImage;
  package$vector.GraphicsPath = GraphicsPath;
  package$vector.SvgBuilder = SvgBuilder;
  package$vector.toSvgPathString_2918ih$ = toSvgPathString;
  package$vector.Shape = Shape;
  package$vector.getBounds_infsew$ = getBounds;
  package$vector.toSvg_wxx4ll$ = toSvg_0;
  package$vector.StyledShape = StyledShape;
  package$vector.toSvg_mjfkvb$ = toSvg_1;
  package$vector.FillShape = FillShape;
  package$vector.PolylineShape = PolylineShape;
  package$vector.CompoundShape = CompoundShape;
  var package$chart = package$vector.chart || (package$vector.chart = {});
  package$chart.Chart = Chart;
  Object.defineProperty(ChartBars, 'Companion', {
    get: ChartBars$Companion_getInstance
  });
  ChartBars.DataPoint = ChartBars$DataPoint;
  Object.defineProperty(ChartBars$Fit, 'FULL', {
    get: ChartBars$Fit$FULL_getInstance
  });
  Object.defineProperty(ChartBars$Fit, 'DEG45', {
    get: ChartBars$Fit$DEG45_getInstance
  });
  Object.defineProperty(ChartBars$Fit, 'DEG90', {
    get: ChartBars$Fit$DEG90_getInstance
  });
  ChartBars.Fit = ChartBars$Fit;
  package$chart.ChartBars = ChartBars;
  SVG_0.Style = SVG$Style;
  Object.defineProperty(SVG$GradientUnits, 'USER_SPACE_ON_USER', {
    get: SVG$GradientUnits$USER_SPACE_ON_USER_getInstance
  });
  Object.defineProperty(SVG$GradientUnits, 'OBJECT_BOUNDING_BOX', {
    get: SVG$GradientUnits$OBJECT_BOUNDING_BOX_getInstance
  });
  SVG_0.GradientUnits = SVG$GradientUnits;
  $$importsForInline$$['klogger-js'] = $module$klogger_js;
  Object.defineProperty(SVG_0, 'Companion', {
    get: SVG$Companion_getInstance
  });
  SVG_0.PathToken = SVG$PathToken;
  SVG_0.PathTokenNumber = SVG$PathTokenNumber;
  SVG_0.PathTokenCmd = SVG$PathTokenCmd;
  Object.defineProperty(SVG$SvgStyle, 'Companion', {
    get: SVG$SvgStyle$Companion_getInstance
  });
  SVG_0.SvgStyle = SVG$SvgStyle;
  var package$format_0 = package$vector.format || (package$vector.format = {});
  package$format_0.SVG_init_61zpoe$ = SVG_init;
  package$format_0.SVG = SVG_0;
  Object.defineProperty(package$format, 'HtmlCanvas', {
    get: HtmlCanvas_getInstance
  });
  Object.defineProperty(package$format, 'HtmlImage', {
    get: HtmlImage_getInstance
  });
  package$format.toHtmlNative_p18lal$ = toHtmlNative;
  Object.defineProperty(package$format, 'nativeImageFormatProvider', {
    get: function () {
      return nativeImageFormatProvider;
    }
  });
  package$format.HtmlNativeImage_init_38alav$ = HtmlNativeImage_init;
  package$format.HtmlNativeImage_init_ap7jt0$ = HtmlNativeImage_init_0;
  package$format.HtmlNativeImage = HtmlNativeImage;
  Object.defineProperty(package$format, 'HtmlNativeImageFormatProvider', {
    get: HtmlNativeImageFormatProvider_getInstance
  });
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  Object.defineProperty(package$format, 'BrowserImage', {
    get: BrowserImage_getInstance
  });
  package$format.CanvasContext2dRenderer = CanvasContext2dRenderer;
  FillShape.prototype.addBounds_w97n1m$ = StyledShape.prototype.addBounds_w97n1m$;
  FillShape.prototype.buildSvg_b7xfbk$ = StyledShape.prototype.buildSvg_b7xfbk$;
  FillShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  PolylineShape.prototype.addBounds_w97n1m$ = StyledShape.prototype.addBounds_w97n1m$;
  PolylineShape.prototype.buildSvg_b7xfbk$ = StyledShape.prototype.buildSvg_b7xfbk$;
  PolylineShape.prototype.draw_vuz2tk$ = StyledShape.prototype.draw_vuz2tk$;
  KORIM_VERSION = '0.21.0';
  defaultImageFormats = atomicLazy(defaultImageFormats$lambda);
  nativeImageFormatProviders = atomicLazy(nativeImageFormatProviders$lambda);
  nativeImageLoadingEnabled = true;
  StandardImageFormats = listOf([JPEG_getInstance(), PNG_getInstance(), TGA_getInstance(), PSD_getInstance()]);
  nativeImageFormatProvider = HtmlNativeImageFormatProvider_getInstance();
  Kotlin.defineModule('korim-js', _);
  return _;
}));

//# sourceMappingURL=korim-js.js.map
