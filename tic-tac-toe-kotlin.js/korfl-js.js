if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'korfl-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korfl-js'.");
}
if (typeof this['korio-js'] === 'undefined') {
  throw new Error("Error loading module 'korfl-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korfl-js'.");
}
if (typeof this['korma-js'] === 'undefined') {
  throw new Error("Error loading module 'korfl-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korfl-js'.");
}
if (typeof this['korim-js'] === 'undefined') {
  throw new Error("Error loading module 'korfl-js'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'korfl-js'.");
}
this['korfl-js'] = function (_, Kotlin, $module$korio_js, $module$korma_js, $module$korim_js) {
  'use strict';
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var Unit = Kotlin.kotlin.Unit;
  var toString = $module$korio_js.com.soywiz.korio.util.toString_dqglrj$;
  var Error_0 = Kotlin.kotlin.Error;
  var String_fromIntArray = $module$korio_js.com.soywiz.korio.lang.String_fromIntArray_nd5v6f$;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var repeat = Kotlin.kotlin.text.repeat_94bcnn$;
  var Extra = $module$korio_js.com.soywiz.korio.util.Extra;
  var Extra$Mixin = $module$korio_js.com.soywiz.korio.util.Extra.Mixin;
  var substr = $module$korio_js.com.soywiz.korio.util.substr_qgyqat$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Float16 = $module$korio_js.com.soywiz.korio.lang.Float16;
  var readStringz = $module$korio_js.com.soywiz.korio.stream.readStringz_4zsegu$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_mqih57$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Enum = Kotlin.kotlin.Enum;
  var indexOf = Kotlin.kotlin.text.indexOf_l5u8uk$;
  var format = $module$korio_js.com.soywiz.korio.lang.format_e33kwl$;
  var Matrix2d = $module$korma_js.com.soywiz.korma.Matrix2d;
  var Vector2 = $module$korma_js.com.soywiz.korma.Vector2;
  var math = Kotlin.kotlin.math;
  var Rectangle = $module$korma_js.com.soywiz.korma.geom.Rectangle;
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  var IntCompanionObject = Kotlin.kotlin.js.internal.IntCompanionObject;
  var Vector2_init = $module$korma_js.com.soywiz.korma.Vector2_init_vux9f0$;
  var Context2d$ScaleMode = $module$korim_js.com.soywiz.korim.vector.Context2d.ScaleMode;
  var sort = Kotlin.kotlin.collections.sort_4wi501$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var arrayListOf = Kotlin.kotlin.collections.arrayListOf_i5x0yv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var BoundsBuilder = $module$korma_js.com.soywiz.korma.geom.BoundsBuilder;
  var readBytes = $module$korio_js.com.soywiz.korio.stream.readBytes_xpzb7k$;
  var nextAlignedTo = $module$korio_js.com.soywiz.korio.util.nextAlignedTo_dqglrj$;
  var openSync = $module$korio_js.com.soywiz.korio.stream.openSync_m1iwyb$;
  var UTCDate = $module$korio_js.com.soywiz.korio.time.UTCDate;
  var slice = Kotlin.kotlin.collections.slice_6bjbi1$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var readU8 = $module$korio_js.com.soywiz.korio.stream.readU8_p2awyq$;
  var readS16_le = $module$korio_js.com.soywiz.korio.stream.readS16_le_p2awyq$;
  var readS16_be = $module$korio_js.com.soywiz.korio.stream.readS16_be_p2awyq$;
  var readS32_le = $module$korio_js.com.soywiz.korio.stream.readS32_le_p2awyq$;
  var readS32_be = $module$korio_js.com.soywiz.korio.stream.readS32_be_p2awyq$;
  var readS64_le = $module$korio_js.com.soywiz.korio.stream.readS64_le_p2awyq$;
  var readS64_be = $module$korio_js.com.soywiz.korio.stream.readS64_be_p2awyq$;
  var reinterpretAsFloat = $module$korio_js.com.soywiz.korio.math.reinterpretAsFloat_s8ev3n$;
  var reinterpretAsDouble = $module$korio_js.com.soywiz.korio.math.reinterpretAsDouble_mts6qi$;
  var lang = $module$korio_js.com.soywiz.korio.lang;
  var toString_0 = $module$korio_js.com.soywiz.korio.lang.toString_5kit73$;
  var write8 = $module$korio_js.com.soywiz.korio.stream.write8_n5df9z$;
  var write16_le = $module$korio_js.com.soywiz.korio.stream.write16_le_n5df9z$;
  var write16_be = $module$korio_js.com.soywiz.korio.stream.write16_be_n5df9z$;
  var write32_le = $module$korio_js.com.soywiz.korio.stream.write32_le_n5df9z$;
  var write32_be = $module$korio_js.com.soywiz.korio.stream.write32_be_n5df9z$;
  var write64_le = $module$korio_js.com.soywiz.korio.stream.write64_le_7bhjh0$;
  var write64_be = $module$korio_js.com.soywiz.korio.stream.write64_be_7bhjh0$;
  var reinterpretAsInt = $module$korio_js.com.soywiz.korio.math.reinterpretAsInt_81szk$;
  var reinterpretAsLong = $module$korio_js.com.soywiz.korio.math.reinterpretAsLong_yrwdxr$;
  var writeBytes = $module$korio_js.com.soywiz.korio.stream.writeBytes_o1e1if$;
  var compression = $module$korio_js.com.soywiz.korio.compression;
  var executeInWorker = $module$korio_js.com.soywiz.korio.async.executeInWorker_lnyleu$;
  var MemorySyncStreamBase_init = $module$korio_js.com.soywiz.korio.stream.MemorySyncStreamBase_init_za3lpa$;
  var SyncStream = $module$korio_js.com.soywiz.korio.stream.SyncStream;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var readU16_le = $module$korio_js.com.soywiz.korio.stream.readU16_le_p2awyq$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var get_eof = $module$korio_js.com.soywiz.korio.stream.get_eof_ucmi9i$;
  var mapWhile = $module$korio_js.com.soywiz.korio.util.mapWhile_sj71nh$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var listOf_0 = Kotlin.kotlin.collections.listOf_mh5how$;
  var plus = Kotlin.kotlin.collections.plus_mydzjv$;
  var readF64_le = $module$korio_js.com.soywiz.korio.stream.readF64_le_p2awyq$;
  var readStringz_0 = $module$korio_js.com.soywiz.korio.stream.readStringz_6ey4ts$;
  var readS8 = $module$korio_js.com.soywiz.korio.stream.readS8_p2awyq$;
  var readS24_le = $module$korio_js.com.soywiz.korio.stream.readS24_le_p2awyq$;
  var toLongArray = Kotlin.kotlin.collections.toLongArray_558emf$;
  var readU16_be = $module$korio_js.com.soywiz.korio.stream.readU16_be_p2awyq$;
  var readString = $module$korio_js.com.soywiz.korio.stream.readString_6ey4ts$;
  var readF64_be = $module$korio_js.com.soywiz.korio.stream.readF64_be_p2awyq$;
  var Xml = $module$korio_js.com.soywiz.korio.serialization.xml.Xml_61zpoe$;
  SWF.prototype = Object.create(SWFTimelineContainer.prototype);
  SWF.prototype.constructor = SWF;
  BitArray.prototype = Object.create(FlashByteArray.prototype);
  BitArray.prototype.constructor = BitArray;
  SWFData.prototype = Object.create(BitArray.prototype);
  SWFData.prototype.constructor = SWFData;
  ActionUnknown.prototype = Object.create(Action.prototype);
  ActionUnknown.prototype.constructor = ActionUnknown;
  ActionGetURL.prototype = Object.create(Action.prototype);
  ActionGetURL.prototype.constructor = ActionGetURL;
  ActionGotoFrame.prototype = Object.create(Action.prototype);
  ActionGotoFrame.prototype.constructor = ActionGotoFrame;
  ActionGotoLabel.prototype = Object.create(Action.prototype);
  ActionGotoLabel.prototype.constructor = ActionGotoLabel;
  ActionNextFrame.prototype = Object.create(Action.prototype);
  ActionNextFrame.prototype.constructor = ActionNextFrame;
  ActionPlay.prototype = Object.create(Action.prototype);
  ActionPlay.prototype.constructor = ActionPlay;
  ActionPreviousFrame.prototype = Object.create(Action.prototype);
  ActionPreviousFrame.prototype.constructor = ActionPreviousFrame;
  ActionSetTarget.prototype = Object.create(Action.prototype);
  ActionSetTarget.prototype.constructor = ActionSetTarget;
  ActionStop.prototype = Object.create(Action.prototype);
  ActionStop.prototype.constructor = ActionStop;
  ActionStopSounds.prototype = Object.create(Action.prototype);
  ActionStopSounds.prototype.constructor = ActionStopSounds;
  ActionToggleQuality.prototype = Object.create(Action.prototype);
  ActionToggleQuality.prototype.constructor = ActionToggleQuality;
  ActionWaitForFrame.prototype = Object.create(Action.prototype);
  ActionWaitForFrame.prototype.constructor = ActionWaitForFrame;
  ActionAdd.prototype = Object.create(Action.prototype);
  ActionAdd.prototype.constructor = ActionAdd;
  ActionAnd.prototype = Object.create(Action.prototype);
  ActionAnd.prototype.constructor = ActionAnd;
  ActionAsciiToChar.prototype = Object.create(Action.prototype);
  ActionAsciiToChar.prototype.constructor = ActionAsciiToChar;
  ActionCall.prototype = Object.create(Action.prototype);
  ActionCall.prototype.constructor = ActionCall;
  ActionCharToAscii.prototype = Object.create(Action.prototype);
  ActionCharToAscii.prototype.constructor = ActionCharToAscii;
  ActionCloneSprite.prototype = Object.create(Action.prototype);
  ActionCloneSprite.prototype.constructor = ActionCloneSprite;
  ActionDivide.prototype = Object.create(Action.prototype);
  ActionDivide.prototype.constructor = ActionDivide;
  ActionEndDrag.prototype = Object.create(Action.prototype);
  ActionEndDrag.prototype.constructor = ActionEndDrag;
  ActionEquals.prototype = Object.create(Action.prototype);
  ActionEquals.prototype.constructor = ActionEquals;
  ActionGetProperty.prototype = Object.create(Action.prototype);
  ActionGetProperty.prototype.constructor = ActionGetProperty;
  ActionGetTime.prototype = Object.create(Action.prototype);
  ActionGetTime.prototype.constructor = ActionGetTime;
  ActionGetURL2.prototype = Object.create(Action.prototype);
  ActionGetURL2.prototype.constructor = ActionGetURL2;
  ActionGetVariable.prototype = Object.create(Action.prototype);
  ActionGetVariable.prototype.constructor = ActionGetVariable;
  ActionGotoFrame2.prototype = Object.create(Action.prototype);
  ActionGotoFrame2.prototype.constructor = ActionGotoFrame2;
  ActionIf.prototype = Object.create(Action.prototype);
  ActionIf.prototype.constructor = ActionIf;
  ActionJump.prototype = Object.create(Action.prototype);
  ActionJump.prototype.constructor = ActionJump;
  ActionLess.prototype = Object.create(Action.prototype);
  ActionLess.prototype.constructor = ActionLess;
  ActionMBAsciiToChar.prototype = Object.create(Action.prototype);
  ActionMBAsciiToChar.prototype.constructor = ActionMBAsciiToChar;
  ActionMBCharToAscii.prototype = Object.create(Action.prototype);
  ActionMBCharToAscii.prototype.constructor = ActionMBCharToAscii;
  ActionMBStringExtract.prototype = Object.create(Action.prototype);
  ActionMBStringExtract.prototype.constructor = ActionMBStringExtract;
  ActionMBStringLength.prototype = Object.create(Action.prototype);
  ActionMBStringLength.prototype.constructor = ActionMBStringLength;
  ActionMultiply.prototype = Object.create(Action.prototype);
  ActionMultiply.prototype.constructor = ActionMultiply;
  ActionNot.prototype = Object.create(Action.prototype);
  ActionNot.prototype.constructor = ActionNot;
  ActionOr.prototype = Object.create(Action.prototype);
  ActionOr.prototype.constructor = ActionOr;
  ActionPop.prototype = Object.create(Action.prototype);
  ActionPop.prototype.constructor = ActionPop;
  ActionPush.prototype = Object.create(Action.prototype);
  ActionPush.prototype.constructor = ActionPush;
  ActionRandomNumber.prototype = Object.create(Action.prototype);
  ActionRandomNumber.prototype.constructor = ActionRandomNumber;
  ActionRemoveSprite.prototype = Object.create(Action.prototype);
  ActionRemoveSprite.prototype.constructor = ActionRemoveSprite;
  ActionSetProperty.prototype = Object.create(Action.prototype);
  ActionSetProperty.prototype.constructor = ActionSetProperty;
  ActionSetTarget2.prototype = Object.create(Action.prototype);
  ActionSetTarget2.prototype.constructor = ActionSetTarget2;
  ActionSetVariable.prototype = Object.create(Action.prototype);
  ActionSetVariable.prototype.constructor = ActionSetVariable;
  ActionStartDrag.prototype = Object.create(Action.prototype);
  ActionStartDrag.prototype.constructor = ActionStartDrag;
  ActionStringAdd.prototype = Object.create(Action.prototype);
  ActionStringAdd.prototype.constructor = ActionStringAdd;
  ActionStringEquals.prototype = Object.create(Action.prototype);
  ActionStringEquals.prototype.constructor = ActionStringEquals;
  ActionStringExtract.prototype = Object.create(Action.prototype);
  ActionStringExtract.prototype.constructor = ActionStringExtract;
  ActionStringLength.prototype = Object.create(Action.prototype);
  ActionStringLength.prototype.constructor = ActionStringLength;
  ActionStringLess.prototype = Object.create(Action.prototype);
  ActionStringLess.prototype.constructor = ActionStringLess;
  ActionSubtract.prototype = Object.create(Action.prototype);
  ActionSubtract.prototype.constructor = ActionSubtract;
  ActionToInteger.prototype = Object.create(Action.prototype);
  ActionToInteger.prototype.constructor = ActionToInteger;
  ActionTrace.prototype = Object.create(Action.prototype);
  ActionTrace.prototype.constructor = ActionTrace;
  ActionWaitForFrame2.prototype = Object.create(Action.prototype);
  ActionWaitForFrame2.prototype.constructor = ActionWaitForFrame2;
  ActionAdd2.prototype = Object.create(Action.prototype);
  ActionAdd2.prototype.constructor = ActionAdd2;
  ActionBitAnd.prototype = Object.create(Action.prototype);
  ActionBitAnd.prototype.constructor = ActionBitAnd;
  ActionBitLShift.prototype = Object.create(Action.prototype);
  ActionBitLShift.prototype.constructor = ActionBitLShift;
  ActionBitOr.prototype = Object.create(Action.prototype);
  ActionBitOr.prototype.constructor = ActionBitOr;
  ActionBitRShift.prototype = Object.create(Action.prototype);
  ActionBitRShift.prototype.constructor = ActionBitRShift;
  ActionBitURShift.prototype = Object.create(Action.prototype);
  ActionBitURShift.prototype.constructor = ActionBitURShift;
  ActionBitXor.prototype = Object.create(Action.prototype);
  ActionBitXor.prototype.constructor = ActionBitXor;
  ActionCallFunction.prototype = Object.create(Action.prototype);
  ActionCallFunction.prototype.constructor = ActionCallFunction;
  ActionCallMethod.prototype = Object.create(Action.prototype);
  ActionCallMethod.prototype.constructor = ActionCallMethod;
  ActionConstantPool.prototype = Object.create(Action.prototype);
  ActionConstantPool.prototype.constructor = ActionConstantPool;
  ActionDecrement.prototype = Object.create(Action.prototype);
  ActionDecrement.prototype.constructor = ActionDecrement;
  ActionDefineFunction.prototype = Object.create(Action.prototype);
  ActionDefineFunction.prototype.constructor = ActionDefineFunction;
  ActionDefineLocal.prototype = Object.create(Action.prototype);
  ActionDefineLocal.prototype.constructor = ActionDefineLocal;
  ActionDefineLocal2.prototype = Object.create(Action.prototype);
  ActionDefineLocal2.prototype.constructor = ActionDefineLocal2;
  ActionDelete.prototype = Object.create(Action.prototype);
  ActionDelete.prototype.constructor = ActionDelete;
  ActionDelete2.prototype = Object.create(Action.prototype);
  ActionDelete2.prototype.constructor = ActionDelete2;
  ActionEnumerate.prototype = Object.create(Action.prototype);
  ActionEnumerate.prototype.constructor = ActionEnumerate;
  ActionEquals2.prototype = Object.create(Action.prototype);
  ActionEquals2.prototype.constructor = ActionEquals2;
  ActionGetMember.prototype = Object.create(Action.prototype);
  ActionGetMember.prototype.constructor = ActionGetMember;
  ActionIncrement.prototype = Object.create(Action.prototype);
  ActionIncrement.prototype.constructor = ActionIncrement;
  ActionInitArray.prototype = Object.create(Action.prototype);
  ActionInitArray.prototype.constructor = ActionInitArray;
  ActionInitObject.prototype = Object.create(Action.prototype);
  ActionInitObject.prototype.constructor = ActionInitObject;
  ActionLess2.prototype = Object.create(Action.prototype);
  ActionLess2.prototype.constructor = ActionLess2;
  ActionModulo.prototype = Object.create(Action.prototype);
  ActionModulo.prototype.constructor = ActionModulo;
  ActionNewMethod.prototype = Object.create(Action.prototype);
  ActionNewMethod.prototype.constructor = ActionNewMethod;
  ActionNewObject.prototype = Object.create(Action.prototype);
  ActionNewObject.prototype.constructor = ActionNewObject;
  ActionPushDuplicate.prototype = Object.create(Action.prototype);
  ActionPushDuplicate.prototype.constructor = ActionPushDuplicate;
  ActionReturn.prototype = Object.create(Action.prototype);
  ActionReturn.prototype.constructor = ActionReturn;
  ActionSetMember.prototype = Object.create(Action.prototype);
  ActionSetMember.prototype.constructor = ActionSetMember;
  ActionStackSwap.prototype = Object.create(Action.prototype);
  ActionStackSwap.prototype.constructor = ActionStackSwap;
  ActionStoreRegister.prototype = Object.create(Action.prototype);
  ActionStoreRegister.prototype.constructor = ActionStoreRegister;
  ActionTargetPath.prototype = Object.create(Action.prototype);
  ActionTargetPath.prototype.constructor = ActionTargetPath;
  ActionToNumber.prototype = Object.create(Action.prototype);
  ActionToNumber.prototype.constructor = ActionToNumber;
  ActionToString.prototype = Object.create(Action.prototype);
  ActionToString.prototype.constructor = ActionToString;
  ActionTypeOf.prototype = Object.create(Action.prototype);
  ActionTypeOf.prototype.constructor = ActionTypeOf;
  ActionWith.prototype = Object.create(Action.prototype);
  ActionWith.prototype.constructor = ActionWith;
  ActionEnumerate2.prototype = Object.create(Action.prototype);
  ActionEnumerate2.prototype.constructor = ActionEnumerate2;
  ActionGreater.prototype = Object.create(Action.prototype);
  ActionGreater.prototype.constructor = ActionGreater;
  ActionInstanceOf.prototype = Object.create(Action.prototype);
  ActionInstanceOf.prototype.constructor = ActionInstanceOf;
  ActionStrictEquals.prototype = Object.create(Action.prototype);
  ActionStrictEquals.prototype.constructor = ActionStrictEquals;
  ActionStringGreater.prototype = Object.create(Action.prototype);
  ActionStringGreater.prototype.constructor = ActionStringGreater;
  ActionCastOp.prototype = Object.create(Action.prototype);
  ActionCastOp.prototype.constructor = ActionCastOp;
  ActionDefineFunction2.prototype = Object.create(Action.prototype);
  ActionDefineFunction2.prototype.constructor = ActionDefineFunction2;
  ActionExtends.prototype = Object.create(Action.prototype);
  ActionExtends.prototype.constructor = ActionExtends;
  ActionImplementsOp.prototype = Object.create(Action.prototype);
  ActionImplementsOp.prototype.constructor = ActionImplementsOp;
  ActionThrow.prototype = Object.create(Action.prototype);
  ActionThrow.prototype.constructor = ActionThrow;
  ActionTry.prototype = Object.create(Action.prototype);
  ActionTry.prototype.constructor = ActionTry;
  BitmapFormat.prototype = Object.create(Enum.prototype);
  BitmapFormat.prototype.constructor = BitmapFormat;
  GradientInterpolationMode.prototype = Object.create(Enum.prototype);
  GradientInterpolationMode.prototype.constructor = GradientInterpolationMode;
  GradientSpreadMode.prototype = Object.create(Enum.prototype);
  GradientSpreadMode.prototype.constructor = GradientSpreadMode;
  ScaleMode.prototype = Object.create(Enum.prototype);
  ScaleMode.prototype.constructor = ScaleMode;
  LineCapsStyle.prototype = Object.create(Enum.prototype);
  LineCapsStyle.prototype.constructor = LineCapsStyle;
  SWFColorTransformWithAlpha.prototype = Object.create(SWFColorTransform.prototype);
  SWFColorTransformWithAlpha.prototype.constructor = SWFColorTransformWithAlpha;
  SWFFocalGradient.prototype = Object.create(SWFGradient.prototype);
  SWFFocalGradient.prototype.constructor = SWFFocalGradient;
  SWFLineStyle2.prototype = Object.create(SWFLineStyle.prototype);
  SWFLineStyle2.prototype.constructor = SWFLineStyle2;
  SWFMorphFocalGradient.prototype = Object.create(SWFMorphGradient.prototype);
  SWFMorphFocalGradient.prototype.constructor = SWFMorphFocalGradient;
  SWFMorphLineStyle2.prototype = Object.create(SWFMorphLineStyle.prototype);
  SWFMorphLineStyle2.prototype.constructor = SWFMorphLineStyle2;
  SWFShapeRecordCurvedEdge.prototype = Object.create(SWFShapeRecord.prototype);
  SWFShapeRecordCurvedEdge.prototype.constructor = SWFShapeRecordCurvedEdge;
  SWFShapeRecordEnd.prototype = Object.create(SWFShapeRecord.prototype);
  SWFShapeRecordEnd.prototype.constructor = SWFShapeRecordEnd;
  SWFShapeRecordStraightEdge.prototype = Object.create(SWFShapeRecord.prototype);
  SWFShapeRecordStraightEdge.prototype.constructor = SWFShapeRecordStraightEdge;
  SWFShapeRecordStyleChange.prototype = Object.create(SWFShapeRecord.prototype);
  SWFShapeRecordStyleChange.prototype.constructor = SWFShapeRecordStyleChange;
  SWFShapeWithStyle.prototype = Object.create(SWFShape.prototype);
  SWFShapeWithStyle.prototype.constructor = SWFShapeWithStyle;
  GradientType.prototype = Object.create(Enum.prototype);
  GradientType.prototype.constructor = GradientType;
  CurvedEdge.prototype = Object.create(StraightEdge.prototype);
  CurvedEdge.prototype.constructor = CurvedEdge;
  FilterType.prototype = Object.create(Enum.prototype);
  FilterType.prototype.constructor = FilterType;
  FilterBevel.prototype = Object.create(Filter.prototype);
  FilterBevel.prototype.constructor = FilterBevel;
  FilterBlur.prototype = Object.create(Filter.prototype);
  FilterBlur.prototype.constructor = FilterBlur;
  FilterColorMatrix.prototype = Object.create(Filter.prototype);
  FilterColorMatrix.prototype.constructor = FilterColorMatrix;
  FilterConvolution.prototype = Object.create(Filter.prototype);
  FilterConvolution.prototype.constructor = FilterConvolution;
  FilterDropShadow.prototype = Object.create(Filter.prototype);
  FilterDropShadow.prototype.constructor = FilterDropShadow;
  FilterGlow.prototype = Object.create(Filter.prototype);
  FilterGlow.prototype.constructor = FilterGlow;
  FilterGradientGlow.prototype = Object.create(Filter.prototype);
  FilterGradientGlow.prototype.constructor = FilterGradientGlow;
  FilterGradientBevel.prototype = Object.create(FilterGradientGlow.prototype);
  FilterGradientBevel.prototype.constructor = FilterGradientBevel;
  LoggerShapeExporter.prototype = Object.create(ShapeExporter.prototype);
  LoggerShapeExporter.prototype.constructor = LoggerShapeExporter;
  ShapeExporterBoundsBuilder.prototype = Object.create(ShapeExporter.prototype);
  ShapeExporterBoundsBuilder.prototype.constructor = ShapeExporterBoundsBuilder;
  TagCSMTextSettings.prototype = Object.create(_BaseTag.prototype);
  TagCSMTextSettings.prototype.constructor = TagCSMTextSettings;
  TagDebugID.prototype = Object.create(_BaseTag.prototype);
  TagDebugID.prototype.constructor = TagDebugID;
  TagDefineBinaryData.prototype = Object.create(_BaseTag.prototype);
  TagDefineBinaryData.prototype.constructor = TagDefineBinaryData;
  TagDefineBits.prototype = Object.create(_BaseTag.prototype);
  TagDefineBits.prototype.constructor = TagDefineBits;
  TagDefineBitsJPEG2.prototype = Object.create(TagDefineBits.prototype);
  TagDefineBitsJPEG2.prototype.constructor = TagDefineBitsJPEG2;
  TagDefineBitsJPEG3.prototype = Object.create(TagDefineBitsJPEG2.prototype);
  TagDefineBitsJPEG3.prototype.constructor = TagDefineBitsJPEG3;
  TagDefineBitsJPEG4.prototype = Object.create(TagDefineBitsJPEG3.prototype);
  TagDefineBitsJPEG4.prototype.constructor = TagDefineBitsJPEG4;
  TagDefineBitsLossless.prototype = Object.create(_BaseTag.prototype);
  TagDefineBitsLossless.prototype.constructor = TagDefineBitsLossless;
  TagDefineBitsLossless2.prototype = Object.create(TagDefineBitsLossless.prototype);
  TagDefineBitsLossless2.prototype.constructor = TagDefineBitsLossless2;
  TagDefineButton.prototype = Object.create(_BaseTag.prototype);
  TagDefineButton.prototype.constructor = TagDefineButton;
  TagDefineButton2.prototype = Object.create(_BaseTag.prototype);
  TagDefineButton2.prototype.constructor = TagDefineButton2;
  TagDefineButtonCxform.prototype = Object.create(_BaseTag.prototype);
  TagDefineButtonCxform.prototype.constructor = TagDefineButtonCxform;
  TagDefineButtonSound.prototype = Object.create(_BaseTag.prototype);
  TagDefineButtonSound.prototype.constructor = TagDefineButtonSound;
  TagDefineEditText.prototype = Object.create(_BaseTag.prototype);
  TagDefineEditText.prototype.constructor = TagDefineEditText;
  TagDefineFont.prototype = Object.create(_BaseTag.prototype);
  TagDefineFont.prototype.constructor = TagDefineFont;
  TagDefineFont2.prototype = Object.create(TagDefineFont.prototype);
  TagDefineFont2.prototype.constructor = TagDefineFont2;
  TagDefineFont3.prototype = Object.create(TagDefineFont2.prototype);
  TagDefineFont3.prototype.constructor = TagDefineFont3;
  TagDefineFont4.prototype = Object.create(_BaseTag.prototype);
  TagDefineFont4.prototype.constructor = TagDefineFont4;
  TagDefineFontAlignZones.prototype = Object.create(_BaseTag.prototype);
  TagDefineFontAlignZones.prototype.constructor = TagDefineFontAlignZones;
  TagDefineFontInfo.prototype = Object.create(_BaseTag.prototype);
  TagDefineFontInfo.prototype.constructor = TagDefineFontInfo;
  TagDefineFontInfo2.prototype = Object.create(TagDefineFontInfo.prototype);
  TagDefineFontInfo2.prototype.constructor = TagDefineFontInfo2;
  TagDefineFontName.prototype = Object.create(_BaseTag.prototype);
  TagDefineFontName.prototype.constructor = TagDefineFontName;
  TagDefineMorphShape.prototype = Object.create(_BaseTag.prototype);
  TagDefineMorphShape.prototype.constructor = TagDefineMorphShape;
  TagDefineMorphShape2.prototype = Object.create(TagDefineMorphShape.prototype);
  TagDefineMorphShape2.prototype.constructor = TagDefineMorphShape2;
  TagDefineScalingGrid.prototype = Object.create(_BaseTag.prototype);
  TagDefineScalingGrid.prototype.constructor = TagDefineScalingGrid;
  TagDefineSceneAndFrameLabelData.prototype = Object.create(_BaseTag.prototype);
  TagDefineSceneAndFrameLabelData.prototype.constructor = TagDefineSceneAndFrameLabelData;
  TagDefineShape.prototype = Object.create(_BaseTag.prototype);
  TagDefineShape.prototype.constructor = TagDefineShape;
  TagDefineShape2.prototype = Object.create(TagDefineShape.prototype);
  TagDefineShape2.prototype.constructor = TagDefineShape2;
  TagDefineShape3.prototype = Object.create(TagDefineShape2.prototype);
  TagDefineShape3.prototype.constructor = TagDefineShape3;
  TagDefineShape4.prototype = Object.create(TagDefineShape3.prototype);
  TagDefineShape4.prototype.constructor = TagDefineShape4;
  TagDefineSound.prototype = Object.create(_BaseTag.prototype);
  TagDefineSound.prototype.constructor = TagDefineSound;
  TagDefineSprite.prototype = Object.create(SWFTimelineContainer.prototype);
  TagDefineSprite.prototype.constructor = TagDefineSprite;
  TagDefineText.prototype = Object.create(_BaseTag.prototype);
  TagDefineText.prototype.constructor = TagDefineText;
  TagDefineText2.prototype = Object.create(TagDefineText.prototype);
  TagDefineText2.prototype.constructor = TagDefineText2;
  TagDefineVideoStream.prototype = Object.create(_BaseTag.prototype);
  TagDefineVideoStream.prototype.constructor = TagDefineVideoStream;
  TagDoABC.prototype = Object.create(_BaseTag.prototype);
  TagDoABC.prototype.constructor = TagDoABC;
  TagDoABCDeprecated.prototype = Object.create(_BaseTag.prototype);
  TagDoABCDeprecated.prototype.constructor = TagDoABCDeprecated;
  TagDoAction.prototype = Object.create(_BaseTag.prototype);
  TagDoAction.prototype.constructor = TagDoAction;
  TagDoInitAction.prototype = Object.create(TagDoAction.prototype);
  TagDoInitAction.prototype.constructor = TagDoInitAction;
  TagEnableDebugger.prototype = Object.create(_BaseTag.prototype);
  TagEnableDebugger.prototype.constructor = TagEnableDebugger;
  TagEnableDebugger2.prototype = Object.create(TagEnableDebugger.prototype);
  TagEnableDebugger2.prototype.constructor = TagEnableDebugger2;
  TagEnableTelemetry.prototype = Object.create(_BaseTag.prototype);
  TagEnableTelemetry.prototype.constructor = TagEnableTelemetry;
  TagEnd.prototype = Object.create(_BaseTag.prototype);
  TagEnd.prototype.constructor = TagEnd;
  TagExportAssets.prototype = Object.create(_BaseTag.prototype);
  TagExportAssets.prototype.constructor = TagExportAssets;
  TagFileAttributes.prototype = Object.create(_BaseTag.prototype);
  TagFileAttributes.prototype.constructor = TagFileAttributes;
  TagFrameLabel.prototype = Object.create(_BaseTag.prototype);
  TagFrameLabel.prototype.constructor = TagFrameLabel;
  TagImportAssets.prototype = Object.create(_BaseTag.prototype);
  TagImportAssets.prototype.constructor = TagImportAssets;
  TagImportAssets2.prototype = Object.create(TagImportAssets.prototype);
  TagImportAssets2.prototype.constructor = TagImportAssets2;
  TagJPEGTables.prototype = Object.create(_BaseTag.prototype);
  TagJPEGTables.prototype.constructor = TagJPEGTables;
  TagMetadata.prototype = Object.create(_BaseTag.prototype);
  TagMetadata.prototype.constructor = TagMetadata;
  TagNameCharacter.prototype = Object.create(_BaseTag.prototype);
  TagNameCharacter.prototype.constructor = TagNameCharacter;
  TagPlaceObject.prototype = Object.create(_BaseTag.prototype);
  TagPlaceObject.prototype.constructor = TagPlaceObject;
  TagPlaceObject2.prototype = Object.create(TagPlaceObject.prototype);
  TagPlaceObject2.prototype.constructor = TagPlaceObject2;
  TagPlaceObject3.prototype = Object.create(TagPlaceObject2.prototype);
  TagPlaceObject3.prototype.constructor = TagPlaceObject3;
  TagPlaceObject4.prototype = Object.create(TagPlaceObject3.prototype);
  TagPlaceObject4.prototype.constructor = TagPlaceObject4;
  TagProductInfo.prototype = Object.create(_BaseTag.prototype);
  TagProductInfo.prototype.constructor = TagProductInfo;
  TagPathsArePostScript.prototype = Object.create(_BaseTag.prototype);
  TagPathsArePostScript.prototype.constructor = TagPathsArePostScript;
  TagProtect.prototype = Object.create(_BaseTag.prototype);
  TagProtect.prototype.constructor = TagProtect;
  TagRemoveObject.prototype = Object.create(_BaseTag.prototype);
  TagRemoveObject.prototype.constructor = TagRemoveObject;
  TagRemoveObject2.prototype = Object.create(TagRemoveObject.prototype);
  TagRemoveObject2.prototype.constructor = TagRemoveObject2;
  TagScriptLimits.prototype = Object.create(_BaseTag.prototype);
  TagScriptLimits.prototype.constructor = TagScriptLimits;
  TagSetBackgroundColor.prototype = Object.create(_BaseTag.prototype);
  TagSetBackgroundColor.prototype.constructor = TagSetBackgroundColor;
  TagSetTabIndex.prototype = Object.create(_BaseTag.prototype);
  TagSetTabIndex.prototype.constructor = TagSetTabIndex;
  TagShowFrame.prototype = Object.create(_BaseTag.prototype);
  TagShowFrame.prototype.constructor = TagShowFrame;
  TagSoundStreamBlock.prototype = Object.create(_BaseTag.prototype);
  TagSoundStreamBlock.prototype.constructor = TagSoundStreamBlock;
  TagSoundStreamHead.prototype = Object.create(_BaseTag.prototype);
  TagSoundStreamHead.prototype.constructor = TagSoundStreamHead;
  TagSoundStreamHead2.prototype = Object.create(TagSoundStreamHead.prototype);
  TagSoundStreamHead2.prototype.constructor = TagSoundStreamHead2;
  TagStartSound.prototype = Object.create(_BaseTag.prototype);
  TagStartSound.prototype.constructor = TagStartSound;
  TagStartSound2.prototype = Object.create(_BaseTag.prototype);
  TagStartSound2.prototype.constructor = TagStartSound2;
  TagSymbolClass.prototype = Object.create(_BaseTag.prototype);
  TagSymbolClass.prototype.constructor = TagSymbolClass;
  TagUnknown.prototype = Object.create(_BaseTag.prototype);
  TagUnknown.prototype.constructor = TagUnknown;
  TagVideoFrame.prototype = Object.create(_BaseTag.prototype);
  TagVideoFrame.prototype.constructor = TagVideoFrame;
  TagSWFEncryptActions.prototype = Object.create(TagUnknown.prototype);
  TagSWFEncryptActions.prototype.constructor = TagSWFEncryptActions;
  TagSWFEncryptSignature.prototype = Object.create(TagUnknown.prototype);
  TagSWFEncryptSignature.prototype.constructor = TagSWFEncryptSignature;
  Endian.prototype = Object.create(Enum.prototype);
  Endian.prototype.constructor = Endian;
  AbcOpcode$Kind.prototype = Object.create(Enum.prototype);
  AbcOpcode$Kind.prototype.constructor = AbcOpcode$Kind;
  AbcOpcode.prototype = Object.create(Enum.prototype);
  AbcOpcode.prototype.constructor = AbcOpcode;
  function SWF() {
    SWF$Companion_getInstance();
    SWFTimelineContainer.call(this);
    this.$delegate_t58wwd$_0 = new Extra$Mixin();
    this.bytes = new SWFData();
    this.signature = null;
    this.version = 0;
    this.fileLength = 0;
    this.fileLengthCompressed = 0;
    this.frameSize = new SWFRectangle();
    this.frameRate = 0.0;
    this.frameCount = 0;
    this.compressed = false;
    this.compressionMethod = SWF$Companion_getInstance().COMPRESSION_METHOD_ZLIB;
    this.version = 10;
    this.fileLength = 0;
    this.fileLengthCompressed = 0;
    this.frameSize = new SWFRectangle();
    this.frameRate = 50.0;
    this.frameCount = 1;
    this.compressed = true;
    this.compressionMethod = SWF$Companion_getInstance().COMPRESSION_METHOD_ZLIB;
  }
  function SWF$Companion() {
    SWF$Companion_instance = this;
    this.COMPRESSION_METHOD_ZLIB = 'zlib';
    this.COMPRESSION_METHOD_LZMA = 'lzma';
    this.TOSTRING_FLAG_TIMELINE_STRUCTURE = 1;
    this.TOSTRING_FLAG_AVM1_BYTECODE = 2;
    this.FILE_LENGTH_POS_0 = 4;
    this.COMPRESSION_START_POS_0 = 8;
  }
  SWF$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SWF$Companion_instance = null;
  function SWF$Companion_getInstance() {
    if (SWF$Companion_instance === null) {
      new SWF$Companion();
    }
    return SWF$Companion_instance;
  }
  SWF.prototype.loadBytes_fqrh44$ = function (bytes_0, continuation_0, suspended) {
    var instance = new Coroutine$loadBytes_fqrh44$(this, bytes_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$loadBytes_fqrh44$($this, bytes_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$closure$continuation = void 0;
    this.local$ba = void 0;
    this.local$bytes = bytes_0;
  }
  Coroutine$loadBytes_fqrh44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadBytes_fqrh44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadBytes_fqrh44$.prototype.constructor = Coroutine$loadBytes_fqrh44$;
  Coroutine$loadBytes_fqrh44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$closure$continuation = this;
            this.local$ba = toFlash(this.local$bytes);
            this.$this.bytes.length = 0;
            this.local$ba.position = 0;
            this.local$ba.readBytes_x0lvl9$(this.$this.bytes);
            this.state_0 = 2;
            this.result_0 = this.$this.parse_84a5z1$(this.$this.bytes, this.local$closure$continuation);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this;
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
  SWF.prototype.parse_84a5z1$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_84a5z1$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parse_84a5z1$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$parse_84a5z1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_84a5z1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_84a5z1$.prototype.constructor = Coroutine$parse_84a5z1$;
  Coroutine$parse_84a5z1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.bytes = this.local$data;
            this.state_0 = 2;
            this.result_0 = this.$this.parseHeader(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.parseTags_rlw2mn$(this.local$data, this.$this.version, this);
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
  SWF.prototype.parseHeader = function (continuation_0, suspended) {
    var instance = new Coroutine$parseHeader(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parseHeader($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$signatureByte = void 0;
  }
  Coroutine$parseHeader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parseHeader.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parseHeader.prototype.constructor = Coroutine$parseHeader;
  Coroutine$parseHeader.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.signature = '';
            this.$this.compressed = false;
            this.$this.compressionMethod = SWF$Companion_getInstance().COMPRESSION_METHOD_ZLIB;
            this.$this.bytes.position = 0;
            this.local$signatureByte = this.$this.bytes.readUI8();
            this.local$tmp$ = Kotlin.toChar(this.local$signatureByte);
            if (this.local$tmp$ === 67) {
              this.$this.compressed = true;
              this.$this.compressionMethod = SWF$Companion_getInstance().COMPRESSION_METHOD_ZLIB;
            }
             else if (this.local$tmp$ === 90) {
              this.$this.compressed = true;
              this.$this.compressionMethod = SWF$Companion_getInstance().COMPRESSION_METHOD_LZMA;
            }
             else if (this.local$tmp$ === 70)
              this.$this.compressed = false;
            else
              throw new Error_0('Not a SWF. First signature byte is 0x' + toString(this.local$signatureByte, 16) + ' (expected: 0x43 or 0x5A or 0x46)');
            this.$this.signature = this.$this.signature + String_fromIntArray(new Int32Array([Kotlin.toChar(this.local$signatureByte) | 0]));
            this.local$signatureByte = this.$this.bytes.readUI8();
            if (this.local$signatureByte !== 87)
              throw new Error_0('Not a SWF. Second signature byte is 0x' + toString(this.local$signatureByte, 16) + ' (expected: 0x57)');
            this.$this.signature = this.$this.signature + String_fromIntArray(new Int32Array([Kotlin.toChar(this.local$signatureByte) | 0]));
            this.local$signatureByte = this.$this.bytes.readUI8();
            if (this.local$signatureByte !== 83)
              throw new Error_0('Not a SWF. Third signature byte is 0x' + toString(this.local$signatureByte, 16) + ' (expected: 0x53)');
            this.$this.signature = this.$this.signature + String_fromIntArray(new Int32Array([Kotlin.toChar(this.local$signatureByte) | 0]));
            this.$this.version = this.$this.bytes.readUI8();
            this.$this.fileLength = this.$this.bytes.readUI32();
            this.$this.fileLengthCompressed = this.$this.bytes.length;
            if (this.$this.fileLength >= (this.$this.fileLengthCompressed * 4 | 0))
              invalidOp('something went wrong! fileLength >= fileLengthCompressed * 4 : ' + this.$this.fileLength + ' >= ' + this.$this.fileLengthCompressed + ' * 4');
            if (this.$this.compressed) {
              this.state_0 = 2;
              this.result_0 = this.$this.bytes.swfUncompress_bm4lxs$(this.$this.compressionMethod, this.$this.fileLength, this);
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
            this.state_0 = 3;
            continue;
          case 3:
            this.$this.frameSize = this.$this.bytes.readRECT();
            this.$this.frameRate = this.$this.bytes.readFIXED8();
            this.$this.frameCount = this.$this.bytes.readUI16();
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
  SWF.prototype.toString_vux9f0$$default = function (indent, flags) {
    var indent0 = repeat(' ', indent);
    var indent2 = repeat(' ', indent + 2 | 0);
    var indent4 = repeat(' ', indent + 4 | 0);
    var s = indent0 + '[SWF]\n' + indent2 + 'Header:\n' + indent4 + 'Version: ' + Kotlin.toString(this.version) + '\n' + indent4 + 'Compression: ';
    if (this.compressed) {
      if (Kotlin.equals(this.compressionMethod, SWF$Companion_getInstance().COMPRESSION_METHOD_ZLIB)) {
        s += 'ZLIB';
      }
       else if (Kotlin.equals(this.compressionMethod, SWF$Companion_getInstance().COMPRESSION_METHOD_LZMA)) {
        s += 'LZMA';
      }
       else {
        s += 'Unknown';
      }
    }
     else {
      s += 'None';
    }
    return s + '\n' + indent4 + 'FileLength: ' + Kotlin.toString(this.fileLength) + '\n' + indent4 + 'FileLengthCompressed: ' + Kotlin.toString(this.fileLengthCompressed) + '\n' + indent4 + 'FrameSize: ' + this.frameSize.toStringSize() + '\n' + indent4 + 'FrameRate: ' + Kotlin.toString(this.frameRate) + '\n' + indent4 + 'FrameCount: ' + Kotlin.toString(this.frameCount) + this.toString_vux9f0$(indent, 0, SWFTimelineContainer.prototype.toString_vux9f0$$default.bind(this));
  };
  Object.defineProperty(SWF.prototype, 'extra', {
    get: function () {
      return this.$delegate_t58wwd$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_t58wwd$_0.extra = tmp$;
    }
  });
  SWF.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWF',
    interfaces: [Extra, SWFTimelineContainer]
  };
  function SWFData() {
    SWFData$Companion_getInstance();
    BitArray.call(this);
    this.endian = Endian$LITTLE_ENDIAN_getInstance();
  }
  function SWFData$Companion() {
    SWFData$Companion_instance = this;
  }
  var Math_0 = Math;
  SWFData$Companion.prototype.dump_5zge5p$ = function (ba, length, offset) {
    if (offset === void 0)
      offset = 0;
    var posOrig = ba.position;
    var a = posOrig + offset | 0;
    var a_0 = Math_0.max(a, 0);
    var b = ba.length - length | 0;
    var pos = Math_0.min(a_0, b);
    ba.position = pos;
    var str = '[Dump] total length: ' + Kotlin.toString(ba.length) + ', original position: ' + Kotlin.toString(posOrig);
    for (var i = 0; i < length; i++) {
      var b_0 = toString(ba.readUnsignedByte(), 16);
      if (b_0.length === 1) {
        b_0 = '0' + b_0;
      }
      if (i % 16 === 0) {
        var addr = toString(pos + i | 0, 16);
        addr = substr('00000000', 0, 8 - addr.length | 0) + addr;
        str += '\r' + addr + ': ';
      }
      b_0 += ' ';
      str += b_0;
    }
    ba.position = posOrig;
    println(str);
  };
  SWFData$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SWFData$Companion_instance = null;
  function SWFData$Companion_getInstance() {
    if (SWFData$Companion_instance === null) {
      new SWFData$Companion();
    }
    return SWFData$Companion_instance;
  }
  SWFData.prototype.readSI8 = function () {
    return this.resetBitsPending().readByte();
  };
  SWFData.prototype.writeSI8_za3lpa$ = function (value) {
    this.resetBitsPending().writeByte_za3lpa$(value);
  };
  SWFData.prototype.readSI16 = function () {
    return this.resetBitsPending().readShort();
  };
  SWFData.prototype.writeSI16_za3lpa$ = function (value) {
    this.resetBitsPending().writeShort_za3lpa$(value);
  };
  SWFData.prototype.readSI32 = function () {
    return this.resetBitsPending().readInt();
  };
  SWFData.prototype.writeSI32_za3lpa$ = function (value) {
    this.resetBitsPending().writeInt_za3lpa$(value);
  };
  SWFData.prototype.readUI8 = function () {
    return this.resetBitsPending().readUnsignedByte();
  };
  SWFData.prototype.writeUI8_za3lpa$ = function (value) {
    this.resetBitsPending().writeByte_za3lpa$(value);
  };
  SWFData.prototype.writeUI8_6taknv$ = function (value) {
    this.writeUI8_za3lpa$(value ? 1 : 0);
  };
  SWFData.prototype.readUI16 = function () {
    return this.resetBitsPending().readUnsignedShort();
  };
  SWFData.prototype.writeUI16_za3lpa$ = function (value) {
    this.resetBitsPending().writeShort_za3lpa$(value);
  };
  SWFData.prototype.readUI24 = function () {
    this.resetBitsPending();
    var loWord = this.readUnsignedShort();
    var hiByte = this.readUnsignedByte();
    return hiByte << 16 | loWord;
  };
  SWFData.prototype.writeUI24_za3lpa$ = function (value) {
    this.resetBitsPending();
    this.writeShort_za3lpa$(value & 65535);
    this.writeByte_za3lpa$(value >>> 16);
  };
  SWFData.prototype.readUI32 = function () {
    return this.resetBitsPending().readUnsignedInt();
  };
  SWFData.prototype.writeUI32_za3lpa$ = function (value) {
    this.resetBitsPending().writeUnsignedInt_za3lpa$(value);
  };
  SWFData.prototype.readFIXED = function () {
    return this.resetBitsPending().readInt() / 65536;
  };
  SWFData.prototype.writeFIXED_14dthe$ = function (value) {
    this.resetBitsPending().writeInt_za3lpa$(value * 65536 | 0);
  };
  SWFData.prototype.readFIXED8 = function () {
    return this.resetBitsPending().readShort() / 256.0;
  };
  SWFData.prototype.writeFIXED8_14dthe$ = function (value) {
    this.resetBitsPending().writeShort_za3lpa$(value * 256 | 0);
  };
  SWFData.prototype.readFLOAT = function () {
    return this.resetBitsPending().readFloat();
  };
  SWFData.prototype.writeFLOAT_14dthe$ = function (value) {
    this.resetBitsPending().writeFloat_14dthe$(value);
  };
  SWFData.prototype.readDOUBLE = function () {
    return this.resetBitsPending().readDouble();
  };
  SWFData.prototype.writeDOUBLE_14dthe$ = function (value) {
    this.resetBitsPending().writeDouble_14dthe$(value);
  };
  SWFData.prototype.readFLOAT16 = function () {
    return Float16.Companion.intBitsToDouble_za3lpa$(this.resetBitsPending().readUnsignedShort());
  };
  SWFData.prototype.writeFLOAT16_14dthe$ = function (value) {
    this.resetBitsPending().writeShort_za3lpa$(Float16.Companion.doubleToIntBits_14dthe$(value));
  };
  SWFData.prototype.readEncodedU32 = function () {
    this.resetBitsPending();
    var result = this.readUnsignedByte();
    if ((result & 128) !== 0) {
      result = result & 127 | this.readUnsignedByte() << 7;
      if ((result & 16384) !== 0) {
        result = result & 16383 | this.readUnsignedByte() << 14;
        if ((result & 2097152) !== 0) {
          result = result & 2097151 | this.readUnsignedByte() << 21;
          if ((result & 268435456) !== 0) {
            result = result & 268435455 | this.readUnsignedByte() << 28;
          }
        }
      }
    }
    return result;
  };
  SWFData.prototype.writeEncodedU32_za3lpa$ = function (_value) {
    var value = _value;
    while (true) {
      var v = value & 127;
      value = value >>> 7;
      if (value === 0) {
        this.writeUI8_za3lpa$(v);
        break;
      }
      this.writeUI8_za3lpa$(v | 128);
    }
  };
  SWFData.prototype.readUB_za3lpa$ = function (bits) {
    return this.readBits_vux9f0$(bits);
  };
  SWFData.prototype.writeUB_vux9f0$ = function (bits, value) {
    this.writeBits_vux9f0$(bits, value);
  };
  SWFData.prototype.writeUB_fzusl$ = function (bits, value) {
    this.writeUB_vux9f0$(bits, value ? 1 : 0);
  };
  SWFData.prototype.readSB_za3lpa$ = function (bits) {
    var shift = 32 - bits | 0;
    return this.readBits_vux9f0$(bits) << shift >> shift;
  };
  SWFData.prototype.writeSB_vux9f0$ = function (bits, value) {
    this.writeBits_vux9f0$(bits, value);
  };
  SWFData.prototype.readFB_za3lpa$ = function (bits) {
    return this.readSB_za3lpa$(bits) / 65536;
  };
  SWFData.prototype.writeFB_5wr77w$ = function (bits, value) {
    this.writeSB_vux9f0$(bits, value * 65536 | 0);
  };
  SWFData.prototype.readString = function () {
    this.resetBitsPending();
    return readStringz(this.data);
  };
  SWFData.prototype.writeString_pdl1vj$ = function (value) {
    var tmp$ = value != null;
    if (tmp$) {
      tmp$ = value.length > 0;
    }
    if (tmp$)
      this.writeUTFBytes_3m52m6$(value);
    this.writeByte_za3lpa$(0);
  };
  SWFData.prototype.readLANGCODE = function () {
    this.resetBitsPending();
    return this.readUnsignedByte();
  };
  SWFData.prototype.writeLANGCODE_za3lpa$ = function (value) {
    this.resetBitsPending();
    this.writeByte_za3lpa$(value);
  };
  SWFData.prototype.readRGB = function () {
    this.resetBitsPending();
    var r = this.readUnsignedByte();
    var g = this.readUnsignedByte();
    var b = this.readUnsignedByte();
    return (new Kotlin.Long(-16777216, 0)).toInt() | r << 16 | g << 8 | b;
  };
  SWFData.prototype.writeRGB_za3lpa$ = function (value) {
    this.resetBitsPending();
    this.writeByte_za3lpa$(value >>> 16 & 255);
    this.writeByte_za3lpa$(value >>> 8 & 255);
    this.writeByte_za3lpa$(value >>> 0 & 255);
  };
  SWFData.prototype.readRGBA = function () {
    this.resetBitsPending();
    var rgb = this.readRGB() & 16777215;
    var a = this.readUnsignedByte();
    return a << 24 | rgb;
  };
  SWFData.prototype.writeRGBA_za3lpa$ = function (value) {
    this.resetBitsPending();
    this.writeRGB_za3lpa$(value);
    this.writeByte_za3lpa$(value >>> 24 & 255);
  };
  SWFData.prototype.readARGB = function () {
    this.resetBitsPending();
    var a = this.readUnsignedByte();
    var rgb = this.readRGB() & 16777215;
    return a << 24 | rgb;
  };
  SWFData.prototype.writeARGB_za3lpa$ = function (value) {
    this.resetBitsPending();
    this.writeByte_za3lpa$(value >>> 24 & 255);
    this.writeRGB_za3lpa$(value);
  };
  SWFData.prototype.readRECT = function () {
    var $receiver = new SWFRectangle();
    $receiver.parse_84a5z1$(this);
    return $receiver;
  };
  SWFData.prototype.readMATRIX = function () {
    var $receiver = new SWFMatrix();
    $receiver.parse_84a5z1$(this);
    return $receiver;
  };
  SWFData.prototype.readCXFORM = function () {
    var $receiver = new SWFColorTransform();
    $receiver.parse_84a5z1$(this);
    return $receiver;
  };
  SWFData.prototype.readCXFORMWITHALPHA = function () {
    var $receiver = new SWFColorTransformWithAlpha();
    $receiver.parse_84a5z1$(this);
    return $receiver;
  };
  SWFData.prototype.readSHAPE_14dthe$ = function (unitDivisor) {
    if (unitDivisor === void 0)
      unitDivisor = 20.0;
    var $receiver = new SWFShape(unitDivisor);
    $receiver.parse_rlw2mn$(this);
    return $receiver;
  };
  SWFData.prototype.readSHAPEWITHSTYLE_5wr77w$ = function (level, unitDivisor) {
    if (level === void 0)
      level = 1;
    if (unitDivisor === void 0)
      unitDivisor = 20.0;
    var $receiver = new SWFShapeWithStyle(unitDivisor);
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readSTRAIGHTEDGERECORD_za3lpa$ = function (numBits) {
    var $receiver = new SWFShapeRecordStraightEdge(numBits);
    $receiver.parse_rlw2mn$(this);
    return $receiver;
  };
  SWFData.prototype.readCURVEDEDGERECORD_za3lpa$ = function (numBits) {
    var $receiver = new SWFShapeRecordCurvedEdge(numBits);
    $receiver.parse_rlw2mn$(this);
    return $receiver;
  };
  SWFData.prototype.readSTYLECHANGERECORD_tjonv8$ = function (states, fillBits, lineBits, level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFShapeRecordStyleChange(states, fillBits, lineBits);
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readFILLSTYLE_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFFillStyle();
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readLINESTYLE_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFLineStyle();
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readLINESTYLE2_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFLineStyle2();
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readBUTTONRECORD_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    if (this.readUI8() === 0) {
      return null;
    }
     else {
      this.position = this.position - 1 | 0;
      var $receiver = new SWFButtonRecord();
      $receiver.parse_rlw2mn$(this, level);
      return $receiver;
    }
  };
  SWFData.prototype.readBUTTONCONDACTION = function () {
    var $receiver = new SWFButtonCondAction();
    $receiver.parse_84a5z1$(this);
    return $receiver;
  };
  SWFData.prototype.readFILTER = function () {
    var filterId = this.readUI8();
    var filter = SWFFilterFactory_getInstance().create_za3lpa$(filterId);
    filter.parse_84a5z1$(this);
    return filter;
  };
  SWFData.prototype.readTEXTRECORD_xkn1wm$ = function (glyphBits, advanceBits, previousRecord, level) {
    if (previousRecord === void 0)
      previousRecord = null;
    if (level === void 0)
      level = 1;
    if (this.readUI8() === 0) {
      return null;
    }
     else {
      this.position = this.position - 1 | 0;
      var $receiver = new SWFTextRecord();
      $receiver.parse_apbl93$(this, glyphBits, advanceBits, previousRecord, level);
      return $receiver;
    }
  };
  SWFData.prototype.readGLYPHENTRY_vux9f0$ = function (glyphBits, advanceBits) {
    var $receiver = new SWFGlyphEntry();
    $receiver.parse_r43rur$(this, glyphBits, advanceBits);
    return $receiver;
  };
  SWFData.prototype.readZONERECORD = function () {
    return SWFZoneRecord_init(this);
  };
  SWFData.prototype.readZONEDATA = function () {
    return SWFZoneData_init(this);
  };
  SWFData.prototype.readKERNINGRECORD_6taknv$ = function (wideCodes) {
    var $receiver = new SWFKerningRecord();
    $receiver.parse_c3ed4a$(this, wideCodes);
    return $receiver;
  };
  SWFData.prototype.readGRADIENT_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFGradient();
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readFOCALGRADIENT_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFFocalGradient();
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readGRADIENTRECORD_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFGradientRecord();
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHFILLSTYLE_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFMorphFillStyle();
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHLINESTYLE_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFMorphLineStyle();
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHLINESTYLE2_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFMorphLineStyle2();
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHGRADIENT_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFMorphGradient();
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHFOCALGRADIENT_za3lpa$ = function (level) {
    if (level === void 0)
      level = 1;
    var $receiver = new SWFMorphFocalGradient();
    $receiver.parse_rlw2mn$(this, level);
    return $receiver;
  };
  SWFData.prototype.readMORPHGRADIENTRECORD = function () {
    var $receiver = new SWFMorphGradientRecord();
    $receiver.parse_84a5z1$(this);
    return $receiver;
  };
  SWFData.prototype.readACTIONRECORD = function () {
    var pos = this.position;
    var action = null;
    var actionCode = this.readUI8();
    if (actionCode !== 0) {
      var actionLength = actionCode >= 128 ? this.readUI16() : 0;
      action = SWFActionFactory_getInstance().create_qt1dr2$(actionCode, actionLength, pos);
      action.parse_84a5z1$(this);
    }
    return action;
  };
  SWFData.prototype.readACTIONVALUE = function () {
    var $receiver = new SWFActionValue();
    $receiver.parse_84a5z1$(this);
    return $receiver;
  };
  SWFData.prototype.readREGISTERPARAM = function () {
    var $receiver = new SWFRegisterParam();
    $receiver.parse_84a5z1$(this);
    return $receiver;
  };
  SWFData.prototype.readSYMBOL = function () {
    return SWFSymbol_init(this);
  };
  SWFData.prototype.readSOUNDINFO = function () {
    var $receiver = new SWFSoundInfo();
    $receiver.parse_84a5z1$(this);
    return $receiver;
  };
  SWFData.prototype.readSOUNDENVELOPE = function () {
    return SWFSoundEnvelope_init(this);
  };
  SWFData.prototype.readCLIPACTIONS_za3lpa$ = function (version) {
    var $receiver = new SWFClipActions();
    $receiver.parse_rlw2mn$(this, version);
    return $receiver;
  };
  SWFData.prototype.readCLIPACTIONRECORD_za3lpa$ = function (version) {
    var pos = this.position;
    var flags = version >= 6 ? this.readUI32() : this.readUI16();
    if (flags === 0) {
      return null;
    }
     else {
      this.position = pos;
      var $receiver = new SWFClipActionRecord();
      $receiver.parse_rlw2mn$(this, version);
      return $receiver;
    }
  };
  SWFData.prototype.readCLIPEVENTFLAGS_za3lpa$ = function (version) {
    var $receiver = new SWFClipEventFlags();
    $receiver.parse_rlw2mn$(this, version);
    return $receiver;
  };
  SWFData.prototype.readTagHeader = function () {
    var pos = this.position;
    var tagTypeAndLength = this.readUI16();
    var tagLength = tagTypeAndLength & 63;
    if (tagLength === 63) {
      tagLength = this.readSI32();
    }
    return new SWFRecordHeader(tagTypeAndLength >>> 6, tagLength, this.position - pos | 0);
  };
  SWFData.prototype.swfUncompress_bm4lxs$ = function (compressionMethod_0, uncompressedLength_0, continuation_0, suspended) {
    var instance = new Coroutine$swfUncompress_bm4lxs$(this, compressionMethod_0, uncompressedLength_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$swfUncompress_bm4lxs$($this, compressionMethod_0, uncompressedLength_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$pos = void 0;
    this.local$ba = void 0;
    this.local$i = void 0;
    this.local$compressionMethod = compressionMethod_0;
    this.local$uncompressedLength = uncompressedLength_0;
  }
  Coroutine$swfUncompress_bm4lxs$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$swfUncompress_bm4lxs$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$swfUncompress_bm4lxs$.prototype.constructor = Coroutine$swfUncompress_bm4lxs$;
  Coroutine$swfUncompress_bm4lxs$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$uncompressedLength === void 0)
              this.local$uncompressedLength = 0;
            this.local$pos = this.$this.position;
            this.local$ba = new FlashByteArray();
            if (Kotlin.equals(this.local$compressionMethod, SWF$Companion_getInstance().COMPRESSION_METHOD_ZLIB)) {
              this.$this.readBytes_x0lvl9$(this.local$ba);
              this.local$ba.position = 0;
              this.state_0 = 4;
              this.result_0 = this.local$ba.uncompressInWorker_61zpoe$(void 0, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              if (Kotlin.equals(this.local$compressionMethod, SWF$Companion_getInstance().COMPRESSION_METHOD_LZMA)) {
                for (this.local$i = 0; this.local$i < 5; this.local$i++)
                  this.local$ba.writeByte_za3lpa$(this.$this.get_za3lpa$(this.local$i + 12 | 0));
                this.local$ba.endian = Endian$LITTLE_ENDIAN_getInstance();
                this.local$ba.writeUnsignedInt_za3lpa$(this.local$uncompressedLength - 8 | 0);
                this.local$ba.writeUnsignedInt_za3lpa$(0);
                this.$this.position = 17;
                this.local$ba.position = 13;
                this.local$ba.writeBytes_fqrh44$(this.$this.readBytes_za3lpa$(this.$this.bytesAvailable));
                this.local$ba.position = 13;
                this.local$ba.position = 0;
                this.state_0 = 2;
                this.result_0 = this.local$ba.uncompressInWorker_61zpoe$(this.local$compressionMethod, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                break;
              }
               else {
                throw new Error_0('Unknown compression method: ' + this.local$compressionMethod);
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            continue;
          case 3:
            this.state_0 = 5;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            this.$this.length = this.local$pos;
            this.$this.position = this.local$pos;
            this.$this.writeBytes_5zge5p$(this.local$ba);
            this.$this.position = this.local$pos;
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
  SWFData.prototype.readRawTag = function () {
    var $receiver = new SWFRawTag();
    $receiver.parse_84a5z1$(this);
    return $receiver;
  };
  SWFData.prototype.skipBytes_za3lpa$ = function (length) {
    this.position = this.position + length | 0;
  };
  SWFData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFData',
    interfaces: [BitArray]
  };
  function SWFTimelineContainer() {
    SWFTimelineContainer$Companion_getInstance();
    this.tags = ArrayList_init();
    this.tagsRaw = ArrayList_init();
    this.dictionary = HashMap_init();
    this.scenes = ArrayList_init();
    this.frames = ArrayList_init();
    this.layers = ArrayList_init();
    this.soundStream = null;
    this.currentFrame_boj2zf$_0 = this.currentFrame_boj2zf$_0;
    this.frameLabels = HashMap_init();
    this.hasSoundStream = false;
    this.eof = false;
    this._tmpData = null;
    this._tmpVersion = 0;
    this._tmpTagIterator = 0;
    this.tagFactory = new SWFTagFactory();
    this.rootTimelineContainer_8be2vx$ = this;
    this.backgroundColor = 16777215;
    this.jpegTablesTag = null;
  }
  function SWFTimelineContainer$Companion() {
    SWFTimelineContainer$Companion_instance = this;
    this.EXTRACT_SOUND_STREAM = true;
  }
  SWFTimelineContainer$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SWFTimelineContainer$Companion_instance = null;
  function SWFTimelineContainer$Companion_getInstance() {
    if (SWFTimelineContainer$Companion_instance === null) {
      new SWFTimelineContainer$Companion();
    }
    return SWFTimelineContainer$Companion_instance;
  }
  Object.defineProperty(SWFTimelineContainer.prototype, 'currentFrame', {
    get: function () {
      if (this.currentFrame_boj2zf$_0 == null)
        return Kotlin.throwUPAE('currentFrame');
      return this.currentFrame_boj2zf$_0;
    },
    set: function (currentFrame) {
      this.currentFrame_boj2zf$_0 = currentFrame;
    }
  });
  SWFTimelineContainer.prototype.getCharacter_za3lpa$ = function (characterId) {
    var tmp$, tmp$_0;
    var tagIndex = (tmp$ = this.rootTimelineContainer_8be2vx$.dictionary.get_11rb$(characterId)) != null ? tmp$ : 0;
    if (tagIndex >= 0 && tagIndex < this.rootTimelineContainer_8be2vx$.tags.size) {
      return Kotlin.isType(tmp$_0 = this.rootTimelineContainer_8be2vx$.tags.get_za3lpa$(tagIndex), IDefinitionTag) ? tmp$_0 : Kotlin.throwCCE();
    }
    return null;
  };
  SWFTimelineContainer.prototype.parseTags_rlw2mn$ = function (data_0, version_0, continuation_0, suspended) {
    var instance = new Coroutine$parseTags_rlw2mn$(this, data_0, version_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parseTags_rlw2mn$($this, data_0, version_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tag = void 0;
    this.local$data = data_0;
    this.local$version = version_0;
  }
  Coroutine$parseTags_rlw2mn$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parseTags_rlw2mn$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parseTags_rlw2mn$.prototype.constructor = Coroutine$parseTags_rlw2mn$;
  Coroutine$parseTags_rlw2mn$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.parseTagsInit_rlw2mn$(this.local$data, this.local$version);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$data.bytesAvailable <= 0) {
              this.state_0 = 6;
              continue;
            }

            this.$this.dispatchProgress_62cu2$_0(((this.local$tmp$ = this.$this._tmpData) != null ? this.local$tmp$ : Kotlin.throwNPE()).position, ((this.local$tmp$_0 = this.$this._tmpData) != null ? this.local$tmp$_0 : Kotlin.throwNPE()).length);
            this.state_0 = 3;
            this.result_0 = this.$this.parseTag_c3ed4a$((this.local$tmp$_1 = this.$this._tmpData) != null ? this.local$tmp$_1 : Kotlin.throwNPE(), true, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$tmp$_2 = this.result_0;
            if (this.local$tmp$_2 == null) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.local$tag = this.local$tmp$_2;
            if (this.local$tag.type === TagEnd$Companion_getInstance().TYPE) {
              this.state_0 = 6;
              continue;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 5:
            this.state_0 = 2;
            continue;
          case 6:
            this.$this.parseTagsFinalize();
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
  SWFTimelineContainer.prototype.dispatchProgress_62cu2$_0 = function (position, length) {
  };
  SWFTimelineContainer.prototype.dispatchWarning_5r4yt$_0 = function (msg) {
  };
  SWFTimelineContainer.prototype.parseTagsInit_rlw2mn$ = function (data, version) {
    this.tags.clear();
    this.frames.clear();
    this.layers.clear();
    this.dictionary = HashMap_init();
    this.currentFrame = new Frame();
    this.frameLabels = HashMap_init();
    this.hasSoundStream = false;
    this._tmpData = data;
    this._tmpVersion = version;
  };
  SWFTimelineContainer.prototype.parseTag_c3ed4a$ = function (data_0, async_0, continuation_0, suspended) {
    var instance = new Coroutine$parseTag_c3ed4a$(this, data_0, async_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parseTag_c3ed4a$($this, data_0, async_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$pos = void 0;
    this.local$tagRaw = void 0;
    this.local$tagHeader = void 0;
    this.local$tag = void 0;
    this.local$timelineContainer = void 0;
    this.local$index = void 0;
    this.local$excessBytes = void 0;
    this.local$data = data_0;
    this.local$async = async_0;
    this.local$e = void 0;
  }
  Coroutine$parseTag_c3ed4a$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parseTag_c3ed4a$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parseTag_c3ed4a$.prototype.constructor = Coroutine$parseTag_c3ed4a$;
  Coroutine$parseTag_c3ed4a$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$async === void 0)
              this.local$async = false;
            this.local$pos = this.local$data.position;
            this.$this.eof = this.local$pos >= this.local$data.length;
            if (this.$this.eof) {
              println('WARNING: end of file encountered, no end tag.');
              return null;
            }
             else {
              this.state_0 = 1;
              continue;
            }

          case 1:
            this.local$tagRaw = this.local$data.readRawTag();
            this.local$tagHeader = this.local$tagRaw.header;
            this.local$tag = this.$this.tagFactory.create_za3lpa$(this.local$tagHeader.type);
            this.exceptionState_0 = 3;
            if (Kotlin.isType(this.local$tag, SWFTimelineContainer)) {
              this.local$timelineContainer = this.local$tag;
              this.local$timelineContainer.tagFactory = this.$this.tagFactory;
              this.local$timelineContainer.rootTimelineContainer_8be2vx$ = this.$this;
            }

            this.state_0 = 2;
            this.result_0 = this.local$tag.parse_roywkq$(this.local$data, this.local$tagHeader.contentLength, this.$this._tmpVersion, this.local$async, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 2:
            this.exceptionState_0 = 5;
            this.state_0 = 4;
            continue;
          case 3:
            this.exceptionState_0 = 5;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, Error_0)) {
              println('WARNING: parse error: ' + this.local$e.message + ', Tag: ' + this.local$tag.name + ', Index: ' + Kotlin.toString(this.$this.tags.size));
              throw this.local$e;
            }
             else
              throw this.local$e;
          case 4:
            this.$this.tags.add_11rb$(this.local$tag);
            this.$this.tagsRaw.add_11rb$(this.local$tagRaw);
            this.$this.processTag_9ma17b$(this.local$tag);
            if (this.local$data.position !== (this.local$pos + this.local$tagHeader.tagLength | 0)) {
              this.local$index = this.$this.tags.size - 1 | 0;
              this.local$excessBytes = this.local$data.position - (this.local$pos + this.local$tagHeader.tagLength) | 0;
              if (Kotlin.equals(this.$this.rootTimelineContainer_8be2vx$, this.$this)) {
                println('WARNING: excess bytes: ' + Kotlin.toString(this.local$excessBytes) + ', ' + 'Tag: ' + this.local$tag.name + ', ' + 'Index: ' + Kotlin.toString(this.local$index));
              }
               else {
                println('WARNING: excess bytes: ' + Kotlin.toString(this.local$excessBytes) + ', ' + 'Tag: ' + this.local$tag.name + ', ' + 'Index: ' + Kotlin.toString(this.local$index) + ', ' + 'IndexRoot: ' + Kotlin.toString(this.$this.rootTimelineContainer_8be2vx$.tags.size));
              }
              this.local$data.position = this.local$pos + this.local$tagHeader.tagLength | 0;
            }

            return this.local$tag;
          case 5:
            throw this.exception_0;
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
  SWFTimelineContainer.prototype.parseTagsFinalize = function () {
    var soundStream = this.soundStream;
    if (soundStream != null && soundStream.data.length === 0)
      this.soundStream = null;
  };
  SWFTimelineContainer.prototype.processTag_9ma17b$ = function (tag) {
    var tmp$, tmp$_0, tmp$_1;
    var currentTagIndex = this.tags.size - 1 | 0;
    if (Kotlin.isType(tag, IDefinitionTag)) {
      this.processDefinitionTag_cb3s3a$(tag, currentTagIndex);
      return;
    }
     else if (Kotlin.isType(tag, IDisplayListTag)) {
      this.processDisplayListTag_qqrp8x$(tag, currentTagIndex);
      return;
    }
    tmp$ = tag.type;
    if (tmp$ === TagFrameLabel$Companion_getInstance().TYPE || tmp$ === TagDefineSceneAndFrameLabelData$Companion_getInstance().TYPE)
      this.processFrameLabelTag_665gfd$(tag, currentTagIndex);
    else if (tmp$ === TagSoundStreamHead$Companion_getInstance().TYPE || tmp$ === TagSoundStreamHead2$Companion_getInstance().TYPE || tmp$ === TagSoundStreamBlock$Companion_getInstance().TYPE) {
      if (SWFTimelineContainer$Companion_getInstance().EXTRACT_SOUND_STREAM)
        this.processSoundStreamTag_665gfd$(tag, currentTagIndex);
    }
     else if (tmp$ === TagSetBackgroundColor$Companion_getInstance().TYPE) {
      this.processBackgroundColorTag_rrvum1$(Kotlin.isType(tmp$_0 = tag, TagSetBackgroundColor) ? tmp$_0 : Kotlin.throwCCE(), currentTagIndex);
    }
     else if (tmp$ === TagJPEGTables$Companion_getInstance().TYPE) {
      this.processJPEGTablesTag_3ihyz1$(Kotlin.isType(tmp$_1 = tag, TagJPEGTables) ? tmp$_1 : Kotlin.throwCCE(), currentTagIndex);
    }
  };
  SWFTimelineContainer.prototype.processDefinitionTag_cb3s3a$ = function (tag, currentTagIndex) {
    if (tag.characterId > 0) {
      var $receiver = this.dictionary;
      var key = tag.characterId;
      $receiver.put_xwzc9p$(key, currentTagIndex);
      this.currentFrame.characters.add_11rb$(tag.characterId);
    }
  };
  var Map = Kotlin.kotlin.collections.Map;
  SWFTimelineContainer.prototype.processDisplayListTag_qqrp8x$ = function (tag, currentTagIndex) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = tag.type;
    if (tmp$ === TagShowFrame$Companion_getInstance().TYPE) {
      this.currentFrame.tagIndexEnd = currentTagIndex;
      var tmp$_2 = this.currentFrame.label == null;
      if (tmp$_2) {
        var $receiver = this.frameLabels;
        var key = this.currentFrame.frameNumber;
        var tmp$_3;
        tmp$_2 = (Kotlin.isType(tmp$_3 = $receiver, Map) ? tmp$_3 : Kotlin.throwCCE()).containsKey_11rb$(key);
      }
      if (tmp$_2) {
        this.currentFrame.label = this.frameLabels.get_11rb$(this.currentFrame.frameNumber);
      }
      this.frames.add_11rb$(this.currentFrame);
      this.currentFrame = this.currentFrame.clone();
      this.currentFrame.frameNumber = this.frames.size;
      this.currentFrame.tagIndexStart = currentTagIndex + 1 | 0;
    }
     else if (tmp$ === TagPlaceObject$Companion_getInstance().TYPE || tmp$ === TagPlaceObject2$Companion_getInstance().TYPE || tmp$ === TagPlaceObject3$Companion_getInstance().TYPE) {
      this.currentFrame.placeObject_mfr5a0$(currentTagIndex, Kotlin.isType(tmp$_0 = tag, TagPlaceObject) ? tmp$_0 : Kotlin.throwCCE());
    }
     else if (tmp$ === TagRemoveObject$Companion_getInstance().TYPE || tmp$ === TagRemoveObject2$Companion_getInstance().TYPE) {
      this.currentFrame.removeObject_w6kipj$(Kotlin.isType(tmp$_1 = tag, TagRemoveObject) ? tmp$_1 : Kotlin.throwCCE());
    }
  };
  SWFTimelineContainer.prototype.processFrameLabelTag_665gfd$ = function (tag, currentTagIndex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = tag.type;
    if (tmp$ === TagDefineSceneAndFrameLabelData$Companion_getInstance().TYPE) {
      var tagSceneAndFrameLabelData = Kotlin.isType(tmp$_0 = tag, TagDefineSceneAndFrameLabelData) ? tmp$_0 : Kotlin.throwCCE();
      tmp$_1 = tagSceneAndFrameLabelData.frameLabels.size;
      for (var i = 0; i < tmp$_1; i++) {
        var frameLabel = tagSceneAndFrameLabelData.frameLabels.get_za3lpa$(i);
        var $receiver = this.frameLabels;
        var key = frameLabel.frameNumber;
        var value = frameLabel.name;
        $receiver.put_xwzc9p$(key, value);
      }
      tmp$_2 = tagSceneAndFrameLabelData.scenes.size;
      for (var i_0 = 0; i_0 < tmp$_2; i_0++) {
        var scene = tagSceneAndFrameLabelData.scenes.get_za3lpa$(i_0);
        this.scenes.add_11rb$(new Scene(scene.offset, scene.name));
      }
    }
     else if (tmp$ === TagFrameLabel$Companion_getInstance().TYPE) {
      var tagFrameLabel = Kotlin.isType(tmp$_3 = tag, TagFrameLabel) ? tmp$_3 : Kotlin.throwCCE();
      this.currentFrame.label = tagFrameLabel.frameName;
    }
  };
  SWFTimelineContainer.prototype.processSoundStreamTag_665gfd$ = function (tag, currentTagIndex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    tmp$ = tag.type;
    if (tmp$ === TagSoundStreamHead$Companion_getInstance().TYPE || tmp$ === TagSoundStreamHead2$Companion_getInstance().TYPE) {
      var tagSoundStreamHead = Kotlin.isType(tmp$_0 = tag, TagSoundStreamHead) ? tmp$_0 : Kotlin.throwCCE();
      this.soundStream = new SoundStream();
      var soundStream = (tmp$_1 = this.soundStream) != null ? tmp$_1 : Kotlin.throwNPE();
      soundStream.compression = tagSoundStreamHead.streamSoundCompression;
      soundStream.rate = tagSoundStreamHead.streamSoundRate;
      soundStream.size = tagSoundStreamHead.streamSoundSize;
      soundStream.type = tagSoundStreamHead.streamSoundType;
      soundStream.numFrames = 0;
      soundStream.numSamples = 0;
    }
     else if (tmp$ === TagSoundStreamBlock$Companion_getInstance().TYPE)
      if (this.soundStream != null) {
        var soundStream_0 = (tmp$_2 = this.soundStream) != null ? tmp$_2 : Kotlin.throwNPE();
        if (!this.hasSoundStream) {
          this.hasSoundStream = true;
          soundStream_0.startFrame = this.currentFrame.frameNumber;
        }
        var tagSoundStreamBlock = Kotlin.isType(tmp$_3 = tag, TagSoundStreamBlock) ? tmp$_3 : Kotlin.throwCCE();
        var soundData = tagSoundStreamBlock.soundData;
        soundData.endian = Endian$LITTLE_ENDIAN_getInstance();
        soundData.position = 0;
        tmp$_4 = soundStream_0.compression;
        if (tmp$_4 !== SoundCompression_getInstance().ADPCM)
          if (tmp$_4 === SoundCompression_getInstance().MP3) {
            var numSamples = soundData.readUnsignedShort();
            var seekSamples = soundData.readShort();
            if (numSamples > 0) {
              soundStream_0.numSamples = soundStream_0.numSamples + numSamples | 0;
              soundStream_0.data.writeBytes_5zge5p$(soundData, 4);
            }
          }
        soundStream_0.numFrames = soundStream_0.numFrames + 1 | 0;
      }
  };
  SWFTimelineContainer.prototype.processBackgroundColorTag_rrvum1$ = function (tag, currentTagIndex) {
    this.backgroundColor = tag.color;
  };
  SWFTimelineContainer.prototype.processJPEGTablesTag_3ihyz1$ = function (tag, currentTagIndex) {
    this.jpegTablesTag = tag;
  };
  SWFTimelineContainer.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var str = '';
    if (this.tags.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Tags:';
      tmp$ = this.tags.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + this.tags.get_za3lpa$(i).toString_vux9f0$(indent + 4 | 0);
      }
    }
    if ((flags & SWF$Companion_getInstance().TOSTRING_FLAG_TIMELINE_STRUCTURE) !== 0) {
      if (this.scenes.size > 0) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'Scenes:';
        tmp$_0 = this.scenes.size;
        for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
          str += '\n' + this.scenes.get_za3lpa$(i_0).toString_za3lpa$(indent + 4 | 0);
        }
      }
      if (this.frames.size > 0) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'Frames:';
        tmp$_1 = this.frames.size;
        for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
          str += '\n' + this.frames.get_za3lpa$(i_1).toString_za3lpa$(indent + 4 | 0);
        }
      }
      if (this.layers.size > 0) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'Layers:';
        tmp$_2 = this.layers.size;
        for (var i_2 = 0; i_2 < tmp$_2; i_2++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i_2) + '] ' + this.layers.get_za3lpa$(i_2).toString_za3lpa$(indent + 4 | 0);
        }
      }
    }
    return str;
  };
  SWFTimelineContainer.prototype.toString_vux9f0$ = function (indent, flags, callback$default) {
    if (indent === void 0)
      indent = 0;
    if (flags === void 0)
      flags = 0;
    return callback$default ? callback$default(indent, flags) : this.toString_vux9f0$$default(indent, flags);
  };
  SWFTimelineContainer.prototype.toString = function () {
    return this.toString_vux9f0$(0, 0);
  };
  SWFTimelineContainer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFTimelineContainer',
    interfaces: []
  };
  function Action(code, length, pos) {
    Action$Companion_getInstance();
    this.code_8f2f97$_0 = code;
    this.length_luob6m$_0 = length;
    this.pos_kwe7ko$_0 = pos;
    this.lbl_kwbdti$_0 = null;
  }
  Object.defineProperty(Action.prototype, 'code', {
    get: function () {
      return this.code_8f2f97$_0;
    }
  });
  Object.defineProperty(Action.prototype, 'length', {
    get: function () {
      return this.length_luob6m$_0;
    },
    set: function (length) {
      this.length_luob6m$_0 = length;
    }
  });
  Object.defineProperty(Action.prototype, 'pos', {
    get: function () {
      return this.pos_kwe7ko$_0;
    }
  });
  Object.defineProperty(Action.prototype, 'lbl', {
    get: function () {
      return this.lbl_kwbdti$_0;
    },
    set: function (lbl) {
      this.lbl_kwbdti$_0 = lbl;
    }
  });
  Object.defineProperty(Action.prototype, 'lengthWithHeader', {
    get: function () {
      return this.length + (this.code >= 128 ? 3 : 1) | 0;
    }
  });
  Action.prototype.parse_84a5z1$ = function (data) {
  };
  Action.prototype.write_yjanqp$ = function (data, body) {
    if (body === void 0)
      body = null;
    data.writeUI8_za3lpa$(this.code);
    if (this.code >= 128) {
      if (body != null && body.length > 0) {
        this.length = body.length;
        data.writeUI16_za3lpa$(this.length);
        data.writeBytes_5zge5p$(body);
      }
       else {
        this.length = 0;
        throw new Error_0('Action body null or empty.');
      }
    }
     else {
      this.length = 0;
    }
  };
  Action.prototype.toString_za3lpa$$default = function (indent) {
    return '[Action] Code: ' + toString(this.code, 16) + ', Length: ' + this.length;
  };
  Action.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'unknown (0x' + toString(this.code, 16) + ')';
  };
  Action.prototype.toBytecodeLabel_za3lpa$ = function (indent) {
    return this.lbl != null ? Kotlin.toString(this.lbl) + ':' + '\n' + repeat(' ', indent + 2 | 0) : repeat(' ', 2);
  };
  function Action$Companion() {
    Action$Companion_instance = this;
  }
  Action$Companion.prototype.resolveOffsets_3xckz2$ = function (actions) {
    var labelNr = 1;
    var labelCount = 0;
    var action;
    var n = actions.size;
    for (var i = 0; i < n; i++) {
      action = actions.get_za3lpa$(i);
      if (Kotlin.isType(action, IActionBranch)) {
        var j = 0;
        var found = false;
        var actionBranch = action;
        var targetPos = actionBranch.pos + actionBranch.lengthWithHeader + actionBranch.branchOffset | 0;
        if (targetPos <= actionBranch.pos) {
          for (var _j = 0; _j <= i; _j++) {
            j = i - _j | 0;
            if (targetPos === actions.get_za3lpa$(j).pos) {
              labelCount = labelCount + 1 | 0;
              found = true;
              break;
            }
          }
        }
         else {
          for (var _j_0 = i + 1 | 0; _j_0 < n; _j_0++) {
            j = _j_0;
            if (targetPos === actions.get_za3lpa$(j).pos) {
              labelCount = labelCount + 1 | 0;
              found = true;
              break;
            }
          }
          if (!found) {
            action = actions.get_za3lpa$(j - 1 | 0);
            if (targetPos === (action.pos + action.lengthWithHeader | 0)) {
              j = -1;
              found = true;
            }
          }
        }
        if (found) {
          actionBranch.branchIndex = j;
          if (j >= 0) {
            action = actions.get_za3lpa$(j);
            action.lbl = 'L';
          }
        }
         else {
          actionBranch.branchIndex = -2;
        }
      }
    }
    for (var i_0 = 0; i_0 < n; i_0++) {
      action = actions.get_za3lpa$(i_0);
      if (action.lbl != null) {
        var tmp$;
        action.lbl = action.lbl + Kotlin.toString((tmp$ = labelNr, labelNr = tmp$ + 1 | 0, tmp$));
      }
    }
    return labelCount;
  };
  Action$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Action$Companion_instance = null;
  function Action$Companion_getInstance() {
    if (Action$Companion_instance === null) {
      new Action$Companion();
    }
    return Action$Companion_instance;
  }
  Action.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Action',
    interfaces: [IAction]
  };
  function ActionExecutionContext(actions, cpool, labelCount) {
    this.actions = actions;
    this.cpool = cpool;
    this.labelCount = labelCount;
    var tmp$;
    var $receiver = this.actions;
    var firstOrNull$result;
    firstOrNull$break: do {
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        if (Kotlin.isType(element, IActionBranch) && element.branchIndex === -1) {
          firstOrNull$result = element;
          break firstOrNull$break;
        }
      }
      firstOrNull$result = null;
    }
     while (false);
    if (firstOrNull$result != null) {
      tmp$ = 'L' + Kotlin.toString(this.labelCount + 1 | 0);
    }
     else {
      tmp$ = null;
    }
    this.endLabel = tmp$;
  }
  ActionExecutionContext.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionExecutionContext',
    interfaces: []
  };
  function ActionUnknown(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionUnknown.prototype.parse_84a5z1$ = function (data) {
    if (this.length > 0)
      data.skipBytes_za3lpa$(this.length);
  };
  ActionUnknown.prototype.toString_za3lpa$$default = function (indent) {
    return '[????] Code: ' + toString(this.code, 16) + ', Length: ' + Kotlin.toString(this.length);
  };
  ActionUnknown.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionUnknown',
    interfaces: [Action, IAction]
  };
  function IAction() {
  }
  IAction.prototype.toString_za3lpa$ = function (indent, callback$default) {
    if (indent === void 0)
      indent = 0;
    return callback$default ? callback$default(indent) : this.toString_za3lpa$$default(indent);
  };
  IAction.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IAction',
    interfaces: []
  };
  function IActionBranch() {
  }
  IActionBranch.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IActionBranch',
    interfaces: [IAction]
  };
  function ActionGetURL(code, length, pos) {
    Action.call(this, code, length, pos);
    this.urlString = null;
    this.targetString = null;
  }
  ActionGetURL.prototype.parse_84a5z1$ = function (data) {
    this.urlString = data.readString();
    this.targetString = data.readString();
  };
  ActionGetURL.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetURL] URL: ' + Kotlin.toString(this.urlString) + ', Target: ' + Kotlin.toString(this.targetString);
  };
  ActionGetURL.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getURL ' + '"' + Kotlin.toString(this.urlString) + '"' + ', ' + '"' + Kotlin.toString(this.targetString) + '"';
  };
  ActionGetURL.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionGetURL',
    interfaces: [Action, IAction]
  };
  function ActionGotoFrame(code, length, pos) {
    Action.call(this, code, length, pos);
    this.frame = 0;
  }
  ActionGotoFrame.prototype.parse_84a5z1$ = function (data) {
    this.frame = data.readUI16();
  };
  ActionGotoFrame.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGotoFrame] Frame: ' + Kotlin.toString(this.frame);
  };
  ActionGotoFrame.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'gotoFrame ' + Kotlin.toString(this.frame);
  };
  ActionGotoFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionGotoFrame',
    interfaces: [Action, IAction]
  };
  function ActionGotoLabel(code, length, pos) {
    Action.call(this, code, length, pos);
    this.label = null;
  }
  ActionGotoLabel.prototype.parse_84a5z1$ = function (data) {
    this.label = data.readString();
  };
  ActionGotoLabel.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGotoLabel] Label: ' + Kotlin.toString(this.label);
  };
  ActionGotoLabel.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'gotoLabel ' + '"' + Kotlin.toString(this.label) + '"';
  };
  ActionGotoLabel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionGotoLabel',
    interfaces: [Action, IAction]
  };
  function ActionNextFrame(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionNextFrame.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionNextFrame]';
  };
  ActionNextFrame.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'nextFrame';
  };
  ActionNextFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionNextFrame',
    interfaces: [Action]
  };
  function ActionPlay(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionPlay.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionPlay]';
  };
  ActionPlay.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'play';
  };
  ActionPlay.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionPlay',
    interfaces: [Action, IAction]
  };
  function ActionPreviousFrame(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionPreviousFrame.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionPreviousFrame]';
  };
  ActionPreviousFrame.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'previousFrame';
  };
  ActionPreviousFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionPreviousFrame',
    interfaces: [Action]
  };
  function ActionSetTarget(code, length, pos) {
    Action.call(this, code, length, pos);
    this.targetName = null;
  }
  ActionSetTarget.prototype.parse_84a5z1$ = function (data) {
    this.targetName = data.readString();
  };
  ActionSetTarget.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSetTarget] TargetName: ' + Kotlin.toString(this.targetName);
  };
  ActionSetTarget.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'setTarget ' + '"' + Kotlin.toString(this.targetName) + '"';
  };
  ActionSetTarget.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionSetTarget',
    interfaces: [Action, IAction]
  };
  function ActionStop(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStop.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStop]';
  };
  ActionStop.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stop';
  };
  ActionStop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStop',
    interfaces: [Action, IAction]
  };
  function ActionStopSounds(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStopSounds.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStopSounds]';
  };
  ActionStopSounds.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stopSounds';
  };
  ActionStopSounds.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStopSounds',
    interfaces: [Action, IAction]
  };
  function ActionToggleQuality(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionToggleQuality.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionToggleQuality]';
  };
  ActionToggleQuality.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'toggleQuality';
  };
  ActionToggleQuality.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionToggleQuality',
    interfaces: [Action, IAction]
  };
  function ActionWaitForFrame(code, length, pos) {
    Action.call(this, code, length, pos);
    this.frame = 0;
    this.skipCount = 0;
  }
  ActionWaitForFrame.prototype.parse_84a5z1$ = function (data) {
    this.frame = data.readUI16();
    this.skipCount = data.readUI8();
  };
  ActionWaitForFrame.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionWaitForFrame] Frame: ' + this.frame + ', SkipCount: ' + this.skipCount;
  };
  ActionWaitForFrame.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'waitForFrame ' + Kotlin.toString(this.frame) + (this.skipCount > 0 ? ', ' + Kotlin.toString(this.skipCount) : '');
  };
  ActionWaitForFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionWaitForFrame',
    interfaces: [Action, IAction]
  };
  function ActionAdd(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionAdd.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionAdd]';
  };
  ActionAdd.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'add';
  };
  ActionAdd.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionAdd',
    interfaces: [Action, IAction]
  };
  function ActionAnd(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionAnd.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionAnd]';
  };
  ActionAnd.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'and';
  };
  ActionAnd.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionAnd',
    interfaces: [Action, IAction]
  };
  function ActionAsciiToChar(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionAsciiToChar.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionAsciiToChar]';
  };
  ActionAsciiToChar.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'asciiToChar';
  };
  ActionAsciiToChar.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionAsciiToChar',
    interfaces: [Action, IAction]
  };
  function ActionCall(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCall.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCall]';
  };
  ActionCall.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'call';
  };
  ActionCall.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionCall',
    interfaces: [Action, IAction]
  };
  function ActionCharToAscii(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCharToAscii.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCharToAscii]';
  };
  ActionCharToAscii.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'charToAscii';
  };
  ActionCharToAscii.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionCharToAscii',
    interfaces: [Action, IAction]
  };
  function ActionCloneSprite(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCloneSprite.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCloneSprite]';
  };
  ActionCloneSprite.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'cloneSprite';
  };
  ActionCloneSprite.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionCloneSprite',
    interfaces: [Action, IAction]
  };
  function ActionDivide(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDivide.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDivide]';
  };
  ActionDivide.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'divide';
  };
  ActionDivide.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionDivide',
    interfaces: [Action, IAction]
  };
  function ActionEndDrag(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionEndDrag.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionEndDrag]';
  };
  ActionEndDrag.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'endDrag';
  };
  ActionEndDrag.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionEndDrag',
    interfaces: [Action, IAction]
  };
  function ActionEquals(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionEquals.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionEquals]';
  };
  ActionEquals.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'equals';
  };
  ActionEquals.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionEquals',
    interfaces: [Action, IAction]
  };
  function ActionGetProperty(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionGetProperty.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetProperty]';
  };
  ActionGetProperty.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getProperty';
  };
  ActionGetProperty.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionGetProperty',
    interfaces: [Action, IAction]
  };
  function ActionGetTime(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionGetTime.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetTime]';
  };
  ActionGetTime.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getTime';
  };
  ActionGetTime.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionGetTime',
    interfaces: [Action, IAction]
  };
  function ActionGetURL2(code, length, pos) {
    Action.call(this, code, length, pos);
    this.sendVarsMethod = 0;
    this.reserved = 0;
    this.loadTargetFlag = false;
    this.loadVariablesFlag = false;
  }
  ActionGetURL2.prototype.parse_84a5z1$ = function (data) {
    this.sendVarsMethod = data.readUB_za3lpa$(2);
    this.reserved = data.readUB_za3lpa$(4);
    this.loadTargetFlag = data.readUB_za3lpa$(1) === 1;
    this.loadVariablesFlag = data.readUB_za3lpa$(1) === 1;
  };
  ActionGetURL2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetURL2] ' + 'SendVarsMethod: ' + Kotlin.toString(this.sendVarsMethod) + ' (' + this.sendVarsMethodToString() + '), ' + 'Reserved: ' + Kotlin.toString(this.reserved) + ', ' + 'LoadTargetFlag: ' + Kotlin.toString(this.loadTargetFlag) + ', ' + 'LoadVariablesFlag: ' + Kotlin.toString(this.loadVariablesFlag);
  };
  ActionGetURL2.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getUrl2 (method: ' + this.sendVarsMethodToString() + ', target: ' + (!this.loadTargetFlag ? 'window' : 'sprite') + ', variables: ' + (!this.loadVariablesFlag ? 'no' : 'yes') + ')';
  };
  ActionGetURL2.prototype.sendVarsMethodToString = function () {
    var tmp$;
    if (this.sendVarsMethod === 0) {
      tmp$ = 'None';
    }
     else if (this.sendVarsMethod === 1) {
      tmp$ = 'GET';
    }
     else if (this.sendVarsMethod === 2) {
      tmp$ = 'POST';
    }
     else {
      throw new Error_0('sendVarsMethod is only defined for values of 0, 1, and 2.');
    }
    return tmp$;
  };
  ActionGetURL2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionGetURL2',
    interfaces: [Action, IAction]
  };
  function ActionGetVariable(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionGetVariable.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetVariable]';
  };
  ActionGetVariable.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getVariable';
  };
  ActionGetVariable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionGetVariable',
    interfaces: [Action, IAction]
  };
  function ActionGotoFrame2(code, length, pos) {
    Action.call(this, code, length, pos);
    this.sceneBiasFlag = false;
    this.playFlag = false;
    this.sceneBias = 0;
  }
  ActionGotoFrame2.prototype.parse_84a5z1$ = function (data) {
    var flags = data.readUI8();
    this.sceneBiasFlag = (flags & 2) !== 0;
    this.playFlag = (flags & 1) !== 0;
    if (this.sceneBiasFlag) {
      this.sceneBias = data.readUI16();
    }
  };
  ActionGotoFrame2.prototype.toString_za3lpa$$default = function (indent) {
    var str = '[ActionGotoFrame2] PlayFlag: ' + this.playFlag + ', SceneBiasFlag: ' + this.sceneBiasFlag;
    if (this.sceneBiasFlag)
      str += ', ' + Kotlin.toString(this.sceneBias);
    return str;
  };
  ActionGotoFrame2.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'gotoFrame2 (' + (!this.playFlag ? 'gotoAndStop' : 'gotoAndPlay') + (this.sceneBiasFlag ? ', sceneBias: ' + Kotlin.toString(this.sceneBias) : '') + ')';
  };
  ActionGotoFrame2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionGotoFrame2',
    interfaces: [Action, IAction]
  };
  function ActionIf(code, length, pos) {
    Action.call(this, code, length, pos);
    this.branchOffset_m8sq7k$_0 = 0;
    this.branchIndex_o23pkv$_0 = -2;
  }
  Object.defineProperty(ActionIf.prototype, 'branchOffset', {
    get: function () {
      return this.branchOffset_m8sq7k$_0;
    },
    set: function (branchOffset) {
      this.branchOffset_m8sq7k$_0 = branchOffset;
    }
  });
  Object.defineProperty(ActionIf.prototype, 'branchIndex', {
    get: function () {
      return this.branchIndex_o23pkv$_0;
    },
    set: function (branchIndex) {
      this.branchIndex_o23pkv$_0 = branchIndex;
    }
  });
  ActionIf.prototype.parse_84a5z1$ = function (data) {
    this.branchOffset = data.readSI16();
  };
  ActionIf.prototype.toString_za3lpa$$default = function (indent) {
    var bi = ' [';
    if (this.branchIndex >= 0) {
      bi += this.branchIndex.toString();
    }
     else if (this.branchIndex === -1) {
      bi += 'EOB';
    }
     else {
      bi += '???';
    }
    bi += ']';
    return '[ActionIf] BranchOffset: ' + Kotlin.toString(this.branchOffset) + bi;
  };
  ActionIf.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    var tmp$;
    var ls = '';
    if (this.branchIndex >= 0) {
      ls += (tmp$ = context.actions.get_za3lpa$(this.branchIndex)) != null ? tmp$.lbl : null;
    }
     else if (this.branchIndex === -1) {
      ls += 'L' + Kotlin.toString(context.labelCount + 1 | 0);
    }
     else {
      ls += 'ILLEGAL BRANCH';
    }
    return this.toBytecodeLabel_za3lpa$(indent) + 'if ' + ls;
  };
  ActionIf.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionIf',
    interfaces: [IActionBranch, Action]
  };
  function ActionJump(code, length, pos) {
    Action.call(this, code, length, pos);
    this.branchOffset_a3z0yp$_0 = 0;
    this.branchIndex_dn8lhq$_0 = -2;
  }
  Object.defineProperty(ActionJump.prototype, 'branchOffset', {
    get: function () {
      return this.branchOffset_a3z0yp$_0;
    },
    set: function (branchOffset) {
      this.branchOffset_a3z0yp$_0 = branchOffset;
    }
  });
  Object.defineProperty(ActionJump.prototype, 'branchIndex', {
    get: function () {
      return this.branchIndex_dn8lhq$_0;
    },
    set: function (branchIndex) {
      this.branchIndex_dn8lhq$_0 = branchIndex;
    }
  });
  ActionJump.prototype.parse_84a5z1$ = function (data) {
    this.branchOffset = data.readSI16();
  };
  ActionJump.prototype.toString_za3lpa$$default = function (indent) {
    var bi = ' [';
    if (this.branchIndex >= 0) {
      bi += this.branchIndex.toString();
    }
     else if (this.branchIndex === -1) {
      bi += 'EOB';
    }
     else {
      bi += '???';
    }
    bi += ']';
    return '[ActionJump] BranchOffset: ' + Kotlin.toString(this.branchOffset) + bi;
  };
  ActionJump.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    var tmp$;
    var ls = '';
    if (this.branchIndex >= 0) {
      ls += (tmp$ = context.actions.get_za3lpa$(this.branchIndex)) != null ? tmp$.lbl : null;
    }
     else if (this.branchIndex === -1) {
      ls += 'L' + Kotlin.toString(context.labelCount + 1 | 0);
    }
     else {
      ls += 'ILLEGAL BRANCH';
    }
    return this.toBytecodeLabel_za3lpa$(indent) + 'jump ' + ls;
  };
  ActionJump.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionJump',
    interfaces: [IActionBranch, Action]
  };
  function ActionLess(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionLess.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionLess]';
  };
  ActionLess.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'less';
  };
  ActionLess.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionLess',
    interfaces: [Action, IAction]
  };
  function ActionMBAsciiToChar(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionMBAsciiToChar.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionMBAsciiToChar]';
  };
  ActionMBAsciiToChar.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'mbAsciiToChar';
  };
  ActionMBAsciiToChar.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionMBAsciiToChar',
    interfaces: [Action, IAction]
  };
  function ActionMBCharToAscii(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionMBCharToAscii.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionMBCharToAscii]';
  };
  ActionMBCharToAscii.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'mbCharToAscii';
  };
  ActionMBCharToAscii.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionMBCharToAscii',
    interfaces: [Action, IAction]
  };
  function ActionMBStringExtract(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionMBStringExtract.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionMBStringExtract]';
  };
  ActionMBStringExtract.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'mbStringExtract';
  };
  ActionMBStringExtract.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionMBStringExtract',
    interfaces: [Action, IAction]
  };
  function ActionMBStringLength(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionMBStringLength.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionMBStringLength]';
  };
  ActionMBStringLength.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'mbStringLength';
  };
  ActionMBStringLength.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionMBStringLength',
    interfaces: [Action, IAction]
  };
  function ActionMultiply(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionMultiply.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionMultiply]';
  };
  ActionMultiply.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'multiply';
  };
  ActionMultiply.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionMultiply',
    interfaces: [Action, IAction]
  };
  function ActionNot(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionNot.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionNot]';
  };
  ActionNot.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'not';
  };
  ActionNot.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionNot',
    interfaces: [Action, IAction]
  };
  function ActionOr(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionOr.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionOr]';
  };
  ActionOr.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'or';
  };
  ActionOr.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionOr',
    interfaces: [Action, IAction]
  };
  function ActionPop(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionPop.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionPop]';
  };
  ActionPop.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'pop';
  };
  ActionPop.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionPop',
    interfaces: [Action, IAction]
  };
  function ActionPush(code, length, pos) {
    Action.call(this, code, length, pos);
    this.values = ArrayList_init();
  }
  ActionPush.prototype.parse_84a5z1$ = function (data) {
    var endPosition = data.position + this.length | 0;
    while (data.position !== endPosition) {
      this.values.add_11rb$(data.readACTIONVALUE());
    }
  };
  ActionPush.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionPush] ' + joinToString(this.values, ', ');
  };
  ActionPush.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    var tmp$;
    var str = this.toBytecodeLabel_za3lpa$(indent);
    tmp$ = this.values.size;
    for (var i = 0; i < tmp$; i++) {
      if (i > 0)
        str += '\n' + repeat(' ', indent + 2 | 0);
      str += 'push ' + this.values.get_za3lpa$(i).toBytecodeString_mhpeer$(context.cpool);
    }
    return str;
  };
  ActionPush.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionPush',
    interfaces: [Action, IAction]
  };
  function ActionRandomNumber(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionRandomNumber.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionRandomNumber]';
  };
  ActionRandomNumber.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'randomNumber';
  };
  ActionRandomNumber.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionRandomNumber',
    interfaces: [Action, IAction]
  };
  function ActionRemoveSprite(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionRemoveSprite.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionRemoveSprite]';
  };
  ActionRemoveSprite.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'removeSprite';
  };
  ActionRemoveSprite.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionRemoveSprite',
    interfaces: [Action, IAction]
  };
  function ActionSetProperty(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionSetProperty.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSetProperty]';
  };
  ActionSetProperty.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'setProperty';
  };
  ActionSetProperty.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionSetProperty',
    interfaces: [Action, IAction]
  };
  function ActionSetTarget2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionSetTarget2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSetTarget2]';
  };
  ActionSetTarget2.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'setTarget2';
  };
  ActionSetTarget2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionSetTarget2',
    interfaces: [Action, IAction]
  };
  function ActionSetVariable(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionSetVariable.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSetVariable]';
  };
  ActionSetVariable.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'setVariable';
  };
  ActionSetVariable.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionSetVariable',
    interfaces: [Action, IAction]
  };
  function ActionStartDrag(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStartDrag.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStartDrag]';
  };
  ActionStartDrag.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'startDrag';
  };
  ActionStartDrag.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStartDrag',
    interfaces: [Action, IAction]
  };
  function ActionStringAdd(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringAdd.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringAdd]';
  };
  ActionStringAdd.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringAdd';
  };
  ActionStringAdd.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStringAdd',
    interfaces: [Action, IAction]
  };
  function ActionStringEquals(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringEquals.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringEquals]';
  };
  ActionStringEquals.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringEquals';
  };
  ActionStringEquals.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStringEquals',
    interfaces: [Action, IAction]
  };
  function ActionStringExtract(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringExtract.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringExtract]';
  };
  ActionStringExtract.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringExtract';
  };
  ActionStringExtract.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStringExtract',
    interfaces: [Action, IAction]
  };
  function ActionStringLength(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringLength.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringLength]';
  };
  ActionStringLength.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringLength';
  };
  ActionStringLength.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStringLength',
    interfaces: [Action, IAction]
  };
  function ActionStringLess(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringLess.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringLess]';
  };
  ActionStringLess.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringLess';
  };
  ActionStringLess.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStringLess',
    interfaces: [Action, IAction]
  };
  function ActionSubtract(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionSubtract.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSubtract]';
  };
  ActionSubtract.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'subtract';
  };
  ActionSubtract.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionSubtract',
    interfaces: [Action, IAction]
  };
  function ActionToInteger(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionToInteger.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionToInteger]';
  };
  ActionToInteger.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'toInteger';
  };
  ActionToInteger.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionToInteger',
    interfaces: [Action, IAction]
  };
  function ActionTrace(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionTrace.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionTrace]';
  };
  ActionTrace.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'trace';
  };
  ActionTrace.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionTrace',
    interfaces: [Action, IAction]
  };
  function ActionWaitForFrame2(code, length, pos) {
    Action.call(this, code, length, pos);
    this.skipCount = 0;
  }
  ActionWaitForFrame2.prototype.parse_84a5z1$ = function (data) {
    this.skipCount = data.readUI8();
  };
  ActionWaitForFrame2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionWaitForFrame2] SkipCount: ' + Kotlin.toString(this.skipCount);
  };
  ActionWaitForFrame2.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'waitForFrame2 (' + Kotlin.toString(this.skipCount) + ')';
  };
  ActionWaitForFrame2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionWaitForFrame2',
    interfaces: [Action, IAction]
  };
  function ActionAdd2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionAdd2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionAdd2]';
  };
  ActionAdd2.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'add2';
  };
  ActionAdd2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionAdd2',
    interfaces: [Action, IAction]
  };
  function ActionBitAnd(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitAnd.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitAnd]';
  };
  ActionBitAnd.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitAnd';
  };
  ActionBitAnd.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionBitAnd',
    interfaces: [Action, IAction]
  };
  function ActionBitLShift(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitLShift.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitLShift]';
  };
  ActionBitLShift.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitLShift';
  };
  ActionBitLShift.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionBitLShift',
    interfaces: [Action, IAction]
  };
  function ActionBitOr(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitOr.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitOr]';
  };
  ActionBitOr.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitOr';
  };
  ActionBitOr.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionBitOr',
    interfaces: [Action, IAction]
  };
  function ActionBitRShift(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitRShift.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitRShift]';
  };
  ActionBitRShift.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitRShift';
  };
  ActionBitRShift.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionBitRShift',
    interfaces: [Action, IAction]
  };
  function ActionBitURShift(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitURShift.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitURShift]';
  };
  ActionBitURShift.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitURShift';
  };
  ActionBitURShift.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionBitURShift',
    interfaces: [Action, IAction]
  };
  function ActionBitXor(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionBitXor.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionBitXor]';
  };
  ActionBitXor.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'bitXor';
  };
  ActionBitXor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionBitXor',
    interfaces: [Action, IAction]
  };
  function ActionCallFunction(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCallFunction.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCallFunction]';
  };
  ActionCallFunction.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'callFunction';
  };
  ActionCallFunction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionCallFunction',
    interfaces: [Action, IAction]
  };
  function ActionCallMethod(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCallMethod.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCallMethod]';
  };
  ActionCallMethod.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'callMethod';
  };
  ActionCallMethod.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionCallMethod',
    interfaces: [Action, IAction]
  };
  function ActionConstantPool(code, length, pos) {
    Action.call(this, code, length, pos);
    this.constants = ArrayList_init();
  }
  ActionConstantPool.prototype.parse_84a5z1$ = function (data) {
    var count = data.readUI16();
    for (var i = 0; i < count; i++) {
      this.constants.add_11rb$(data.readString());
    }
  };
  ActionConstantPool.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$;
    var str = '[ActionConstantPool] Values: ' + Kotlin.toString(this.constants.size);
    tmp$ = this.constants.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 4 | 0) + Kotlin.toString(i) + ': ' + this.constants.get_za3lpa$(i);
    }
    return str;
  };
  ActionConstantPool.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    var tmp$;
    var str = this.toBytecodeLabel_za3lpa$(indent) + 'constantPool';
    context.cpool.clear();
    tmp$ = this.constants.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 4 | 0) + Kotlin.toString(i) + ': ' + this.constants.get_za3lpa$(i);
      context.cpool.add_11rb$(this.constants.get_za3lpa$(i));
    }
    return str;
  };
  ActionConstantPool.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionConstantPool',
    interfaces: [Action, IAction]
  };
  function ActionDecrement(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDecrement.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDecrement]';
  };
  ActionDecrement.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'decrement';
  };
  ActionDecrement.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionDecrement',
    interfaces: [Action, IAction]
  };
  function ActionDefineFunction(code, length, pos) {
    Action.call(this, code, length, pos);
    this.functionName = null;
    this.functionParams = ArrayList_init();
    this.functionBody = ArrayList_init();
    this.labelCount = 0;
  }
  ActionDefineFunction.prototype.parse_84a5z1$ = function (data) {
    var tmp$;
    this.functionName = data.readString();
    var count = data.readUI16();
    for (var i = 0; i < count; i++) {
      this.functionParams.add_11rb$(data.readString());
    }
    var codeSize = data.readUI16();
    var bodyEndPosition = data.position + codeSize | 0;
    while (data.position < bodyEndPosition) {
      this.functionBody.add_11rb$((tmp$ = data.readACTIONRECORD()) != null ? tmp$ : Kotlin.throwNPE());
    }
    this.labelCount = Action$Companion_getInstance().resolveOffsets_3xckz2$(this.functionBody);
  };
  ActionDefineFunction.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$, tmp$_0;
    var tmp$_1 = this.functionName == null;
    if (!tmp$_1) {
      tmp$_1 = ((tmp$ = this.functionName) != null ? tmp$ : Kotlin.throwNPE()).length === 0;
    }
    var str = '[ActionDefineFunction] ' + (tmp$_1 ? '<anonymous>' : this.functionName) + '(' + joinToString(this.functionParams, ', ') + ')';
    tmp$_0 = this.functionBody.size;
    for (var i = 0; i < tmp$_0; i++)
      str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.functionBody.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
    return str;
  };
  ActionDefineFunction.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_0 = this.toBytecodeLabel_za3lpa$(indent) + 'defineFunction ';
    var tmp$_2 = this.functionName == null;
    if (!tmp$_2) {
      tmp$_2 = ((tmp$ = this.functionName) != null ? tmp$ : Kotlin.throwNPE()).length === 0;
    }
    var str = tmp$_0 + (tmp$_2 ? '' : this.functionName) + '(' + joinToString(this.functionParams, ', ') + ') {';
    var ctx = new ActionExecutionContext(this.functionBody, ArrayList_init_0(context.cpool), this.labelCount);
    tmp$_1 = this.functionBody.size;
    for (var i = 0; i < tmp$_1; i++) {
      str += '\n' + repeat(' ', indent + 4 | 0) + this.functionBody.get_za3lpa$(i).toBytecode_3zq4qf$(indent + 4 | 0, ctx);
    }
    if (ctx.endLabel != null) {
      str += '\n' + repeat(' ', indent + 4 | 0) + ctx.endLabel + ':';
    }
    str += '\n' + repeat(' ', indent + 2 | 0) + '}';
    return str;
  };
  ActionDefineFunction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionDefineFunction',
    interfaces: [Action, IAction]
  };
  function ActionDefineLocal(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDefineLocal.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDefineLocal]';
  };
  ActionDefineLocal.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'defineLocal';
  };
  ActionDefineLocal.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionDefineLocal',
    interfaces: [Action, IAction]
  };
  function ActionDefineLocal2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDefineLocal2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDefineLocal2]';
  };
  ActionDefineLocal2.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'defineLocal2';
  };
  ActionDefineLocal2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionDefineLocal2',
    interfaces: [Action, IAction]
  };
  function ActionDelete(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDelete.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDelete]';
  };
  ActionDelete.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'delete';
  };
  ActionDelete.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionDelete',
    interfaces: [Action, IAction]
  };
  function ActionDelete2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionDelete2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionDelete2]';
  };
  ActionDelete2.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'delete2';
  };
  ActionDelete2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionDelete2',
    interfaces: [Action, IAction]
  };
  function ActionEnumerate(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionEnumerate.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionEnumerate]';
  };
  ActionEnumerate.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'enumerate';
  };
  ActionEnumerate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionEnumerate',
    interfaces: [Action, IAction]
  };
  function ActionEquals2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionEquals2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionEquals2]';
  };
  ActionEquals2.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'equals2';
  };
  ActionEquals2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionEquals2',
    interfaces: [Action, IAction]
  };
  function ActionGetMember(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionGetMember.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGetMember]';
  };
  ActionGetMember.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'getMember';
  };
  ActionGetMember.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionGetMember',
    interfaces: [Action, IAction]
  };
  function ActionIncrement(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionIncrement.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionIncrement]';
  };
  ActionIncrement.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'increment';
  };
  ActionIncrement.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionIncrement',
    interfaces: [Action, IAction]
  };
  function ActionInitArray(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionInitArray.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionInitArray]';
  };
  ActionInitArray.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'initArray';
  };
  ActionInitArray.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionInitArray',
    interfaces: [Action, IAction]
  };
  function ActionInitObject(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionInitObject.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionInitObject]';
  };
  ActionInitObject.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'initObject';
  };
  ActionInitObject.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionInitObject',
    interfaces: [Action, IAction]
  };
  function ActionLess2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionLess2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionLess2]';
  };
  ActionLess2.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'less2';
  };
  ActionLess2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionLess2',
    interfaces: [Action, IAction]
  };
  function ActionModulo(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionModulo.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionModulo]';
  };
  ActionModulo.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'modulo';
  };
  ActionModulo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionModulo',
    interfaces: [Action, IAction]
  };
  function ActionNewMethod(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionNewMethod.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionNewMethod]';
  };
  ActionNewMethod.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'newMethod';
  };
  ActionNewMethod.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionNewMethod',
    interfaces: [Action, IAction]
  };
  function ActionNewObject(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionNewObject.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionNewObject]';
  };
  ActionNewObject.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'newObject';
  };
  ActionNewObject.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionNewObject',
    interfaces: [Action, IAction]
  };
  function ActionPushDuplicate(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionPushDuplicate.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionPushDuplicate]';
  };
  ActionPushDuplicate.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'pushDuplicate';
  };
  ActionPushDuplicate.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionPushDuplicate',
    interfaces: [Action, IAction]
  };
  function ActionReturn(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionReturn.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionReturn]';
  };
  ActionReturn.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'return';
  };
  ActionReturn.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionReturn',
    interfaces: [Action, IAction]
  };
  function ActionSetMember(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionSetMember.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionSetMember]';
  };
  ActionSetMember.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'setMember';
  };
  ActionSetMember.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionSetMember',
    interfaces: [Action, IAction]
  };
  function ActionStackSwap(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStackSwap.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStackSwap]';
  };
  ActionStackSwap.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stackSwap';
  };
  ActionStackSwap.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStackSwap',
    interfaces: [Action, IAction]
  };
  function ActionStoreRegister(code, length, pos) {
    Action.call(this, code, length, pos);
    this.registerNumber = 0;
  }
  ActionStoreRegister.prototype.parse_84a5z1$ = function (data) {
    this.registerNumber = data.readUI8();
  };
  ActionStoreRegister.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStoreRegister] RegisterNumber: ' + Kotlin.toString(this.registerNumber);
  };
  ActionStoreRegister.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'store $' + Kotlin.toString(this.registerNumber);
  };
  ActionStoreRegister.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStoreRegister',
    interfaces: [Action, IAction]
  };
  function ActionTargetPath(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionTargetPath.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionTargetPath]';
  };
  ActionTargetPath.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'targetPath';
  };
  ActionTargetPath.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionTargetPath',
    interfaces: [Action, IAction]
  };
  function ActionToNumber(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionToNumber.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionToNumber]';
  };
  ActionToNumber.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'toNumber';
  };
  ActionToNumber.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionToNumber',
    interfaces: [Action, IAction]
  };
  function ActionToString(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionToString.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionToString]';
  };
  ActionToString.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'toString';
  };
  ActionToString.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionToString',
    interfaces: [Action, IAction]
  };
  function ActionTypeOf(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionTypeOf.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionTypeOf]';
  };
  ActionTypeOf.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'typeOf';
  };
  ActionTypeOf.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionTypeOf',
    interfaces: [Action, IAction]
  };
  function ActionWith(code, length, pos) {
    Action.call(this, code, length, pos);
    this.withBody = ArrayList_init();
    this.labelCount = 0;
  }
  ActionWith.prototype.parse_84a5z1$ = function (data) {
    var tmp$;
    var codeSize = data.readUI16();
    var bodyEndPosition = data.position + codeSize | 0;
    while (data.position < bodyEndPosition) {
      this.withBody.add_11rb$((tmp$ = data.readACTIONRECORD()) != null ? tmp$ : Kotlin.throwNPE());
    }
    this.labelCount = Action$Companion_getInstance().resolveOffsets_3xckz2$(this.withBody);
  };
  ActionWith.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$;
    var str = '[ActionWith]';
    tmp$ = this.withBody.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.withBody.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
    }
    return str;
  };
  ActionWith.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    var tmp$;
    var str = this.toBytecodeLabel_za3lpa$(indent) + 'with {';
    var ctx = new ActionExecutionContext(this.withBody, ArrayList_init_0(context.cpool), this.labelCount);
    tmp$ = this.withBody.size;
    for (var i = 0; i < tmp$; i++)
      str += '\n' + repeat(' ', indent + 4 | 0) + this.withBody.get_za3lpa$(i).toBytecode_3zq4qf$(indent + 4 | 0, ctx);
    if (ctx.endLabel != null)
      str += '\n' + repeat(' ', indent + 4 | 0) + ctx.endLabel + ':';
    str += '\n' + repeat(' ', indent + 2 | 0) + '}';
    return str;
  };
  ActionWith.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionWith',
    interfaces: [Action, IAction]
  };
  function ActionEnumerate2(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionEnumerate2.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionEnumerate2]';
  };
  ActionEnumerate2.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'enumerate2';
  };
  ActionEnumerate2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionEnumerate2',
    interfaces: [Action]
  };
  function ActionGreater(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionGreater.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionGreater]';
  };
  ActionGreater.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'greater';
  };
  ActionGreater.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionGreater',
    interfaces: [Action, IAction]
  };
  function ActionInstanceOf(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionInstanceOf.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionInstanceOf]';
  };
  ActionInstanceOf.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'instanceOf';
  };
  ActionInstanceOf.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionInstanceOf',
    interfaces: [Action, IAction]
  };
  function ActionStrictEquals(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStrictEquals.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStrictEquals]';
  };
  ActionStrictEquals.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'strictEquals';
  };
  ActionStrictEquals.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStrictEquals',
    interfaces: [Action, IAction]
  };
  function ActionStringGreater(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionStringGreater.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionStringGreater]';
  };
  ActionStringGreater.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'stringGreater';
  };
  ActionStringGreater.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionStringGreater',
    interfaces: [Action, IAction]
  };
  function ActionCastOp(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionCastOp.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionCastOp]';
  };
  ActionCastOp.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'castOp';
  };
  ActionCastOp.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionCastOp',
    interfaces: [Action, IAction]
  };
  function ActionDefineFunction2(code, length, pos) {
    Action.call(this, code, length, pos);
    this.functionName = null;
    this.functionParams = ArrayList_init();
    this.functionBody = ArrayList_init();
    this.labelCount_0 = 0;
    this.registerCount = 0;
    this.preloadParent = false;
    this.preloadRoot = false;
    this.preloadSuper = false;
    this.preloadArguments = false;
    this.preloadThis = false;
    this.preloadGlobal = false;
    this.suppressSuper = false;
    this.suppressArguments = false;
    this.suppressThis = false;
  }
  ActionDefineFunction2.prototype.parse_84a5z1$ = function (data) {
    var tmp$;
    this.functionName = data.readString();
    var numParams = data.readUI16();
    this.registerCount = data.readUI8();
    var flags1 = data.readUI8();
    this.preloadParent = (flags1 & 128) !== 0;
    this.preloadRoot = (flags1 & 64) !== 0;
    this.suppressSuper = (flags1 & 32) !== 0;
    this.preloadSuper = (flags1 & 16) !== 0;
    this.suppressArguments = (flags1 & 8) !== 0;
    this.preloadArguments = (flags1 & 4) !== 0;
    this.suppressThis = (flags1 & 2) !== 0;
    this.preloadThis = (flags1 & 1) !== 0;
    var flags2 = data.readUI8();
    this.preloadGlobal = (flags2 & 1) !== 0;
    for (var i = 0; i < numParams; i++)
      this.functionParams.add_11rb$(data.readREGISTERPARAM());
    var codeSize = data.readUI16();
    var bodyEndPosition = data.position + codeSize | 0;
    while (data.position < bodyEndPosition) {
      this.functionBody.add_11rb$((tmp$ = data.readACTIONRECORD()) != null ? tmp$ : Kotlin.throwNPE());
    }
    this.labelCount_0 = Action$Companion_getInstance().resolveOffsets_3xckz2$(this.functionBody);
  };
  ActionDefineFunction2.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$, tmp$_0;
    var tmp$_1 = this.functionName == null;
    if (!tmp$_1) {
      tmp$_1 = ((tmp$ = this.functionName) != null ? tmp$ : Kotlin.throwNPE()).length === 0;
    }
    var str = '[ActionDefineFunction2] ' + (tmp$_1 ? '<anonymous>' : this.functionName) + '(' + joinToString(this.functionParams, ', ') + '), ';
    var a = ArrayList_init();
    if (this.preloadParent)
      a.add_11rb$('preloadParent');
    if (this.preloadRoot)
      a.add_11rb$('preloadRoot');
    if (this.preloadSuper)
      a.add_11rb$('preloadSuper');
    if (this.preloadArguments)
      a.add_11rb$('preloadArguments');
    if (this.preloadThis)
      a.add_11rb$('preloadThis');
    if (this.preloadGlobal)
      a.add_11rb$('preloadGlobal');
    if (this.suppressSuper)
      a.add_11rb$('suppressSuper');
    if (this.suppressArguments)
      a.add_11rb$('suppressArguments');
    if (this.suppressThis)
      a.add_11rb$('suppressThis');
    if (a.size === 0)
      a.add_11rb$('none');
    str += 'Flags: ' + joinToString(a, ',');
    tmp$_0 = this.functionBody.size;
    for (var i = 0; i < tmp$_0; i++) {
      str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.functionBody.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
    }
    return str;
  };
  ActionDefineFunction2.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_0 = this.toBytecodeLabel_za3lpa$(indent) + 'defineFunction2 ';
    var tmp$_2 = this.functionName == null;
    if (!tmp$_2) {
      tmp$_2 = ((tmp$ = this.functionName) != null ? tmp$ : Kotlin.throwNPE()).length === 0;
    }
    var str = tmp$_0 + (tmp$_2 ? '' : this.functionName) + '(' + joinToString(this.functionParams, ', ') + ') {';
    var preload = ArrayList_init();
    var suppress = ArrayList_init();
    if (this.preloadParent)
      preload.add_11rb$('parent');
    if (this.preloadRoot)
      preload.add_11rb$('root');
    if (this.preloadSuper)
      preload.add_11rb$('super');
    if (this.preloadArguments)
      preload.add_11rb$('arguments');
    if (this.preloadThis)
      preload.add_11rb$('this');
    if (this.preloadGlobal)
      preload.add_11rb$('global');
    if (this.suppressSuper)
      suppress.add_11rb$('super');
    if (this.suppressArguments)
      suppress.add_11rb$('arguments');
    if (this.suppressThis)
      suppress.add_11rb$('this');
    if (preload.size > 0)
      str += '\n' + repeat(' ', indent + 4 | 0) + '// preload: ' + joinToString(preload, ', ');
    if (suppress.size > 0) {
      str += '\n' + repeat(' ', indent + 4 | 0) + '// suppress: ' + joinToString(suppress, ', ');
    }
    var ctx = new ActionExecutionContext(this.functionBody, ArrayList_init_0(context.cpool), this.labelCount_0);
    tmp$_1 = this.functionBody.size;
    for (var i = 0; i < tmp$_1; i++)
      str += '\n' + repeat(' ', indent + 4 | 0) + this.functionBody.get_za3lpa$(i).toBytecode_3zq4qf$(indent + 4 | 0, ctx);
    if (ctx.endLabel != null)
      str += '\n' + repeat(' ', indent + 4 | 0) + ctx.endLabel + ':';
    str += '\n' + repeat(' ', indent + 2 | 0) + '}';
    return str;
  };
  ActionDefineFunction2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionDefineFunction2',
    interfaces: [Action, IAction]
  };
  function ActionExtends(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionExtends.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionExtends]';
  };
  ActionExtends.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'extends';
  };
  ActionExtends.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionExtends',
    interfaces: [Action, IAction]
  };
  function ActionImplementsOp(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionImplementsOp.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionImplementsOp]';
  };
  ActionImplementsOp.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'implementsOp';
  };
  ActionImplementsOp.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionImplementsOp',
    interfaces: [Action, IAction]
  };
  function ActionThrow(code, length, pos) {
    Action.call(this, code, length, pos);
  }
  ActionThrow.prototype.toString_za3lpa$$default = function (indent) {
    return '[ActionThrow]';
  };
  ActionThrow.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    return this.toBytecodeLabel_za3lpa$(indent) + 'throw';
  };
  ActionThrow.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionThrow',
    interfaces: [Action, IAction]
  };
  function ActionTry(code, length, pos) {
    Action.call(this, code, length, pos);
    this.catchInRegisterFlag = false;
    this.finallyBlockFlag = false;
    this.catchBlockFlag = false;
    this.catchName = null;
    this.catchRegister = 0;
    this.tryBody = ArrayList_init();
    this.catchBody = ArrayList_init();
    this.finallyBody = ArrayList_init();
    this.labelCountTry = 0;
    this.labelCountCatch = 0;
    this.labelCountFinally = 0;
  }
  ActionTry.prototype.parse_84a5z1$ = function (data) {
    var tmp$, tmp$_0, tmp$_1;
    var flags = data.readUI8();
    this.catchInRegisterFlag = (flags & 4) !== 0;
    this.finallyBlockFlag = (flags & 2) !== 0;
    this.catchBlockFlag = (flags & 1) !== 0;
    var trySize = data.readUI16();
    var catchSize = data.readUI16();
    var finallySize = data.readUI16();
    if (this.catchInRegisterFlag) {
      this.catchRegister = data.readUI8();
    }
     else {
      this.catchName = data.readString();
    }
    var tryEndPosition = data.position + trySize | 0;
    while (data.position < tryEndPosition) {
      this.tryBody.add_11rb$((tmp$ = data.readACTIONRECORD()) != null ? tmp$ : Kotlin.throwNPE());
    }
    var catchEndPosition = data.position + catchSize | 0;
    while (data.position < catchEndPosition) {
      this.catchBody.add_11rb$((tmp$_0 = data.readACTIONRECORD()) != null ? tmp$_0 : Kotlin.throwNPE());
    }
    var finallyEndPosition = data.position + finallySize | 0;
    while (data.position < finallyEndPosition) {
      this.finallyBody.add_11rb$((tmp$_1 = data.readACTIONRECORD()) != null ? tmp$_1 : Kotlin.throwNPE());
    }
    this.labelCountTry = Action$Companion_getInstance().resolveOffsets_3xckz2$(this.tryBody);
    this.labelCountCatch = Action$Companion_getInstance().resolveOffsets_3xckz2$(this.catchBody);
    this.labelCountFinally = Action$Companion_getInstance().resolveOffsets_3xckz2$(this.finallyBody);
  };
  ActionTry.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$, tmp$_0, tmp$_1;
    var str = '[ActionTry] ';
    str += this.catchInRegisterFlag ? 'Register: ' + Kotlin.toString(this.catchRegister) : 'Name: ' + this.catchName;
    if (this.tryBody.size !== 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Try:';
      tmp$ = this.tryBody.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.tryBody.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }
    if (this.catchBody.size !== 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Catch:';
      tmp$_0 = this.catchBody.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i_0) + '] ' + this.catchBody.get_za3lpa$(i_0).toString_za3lpa$(indent + 4 | 0);
      }
    }
    if (this.finallyBody.size !== 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Finally:';
      tmp$_1 = this.finallyBody.size;
      for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i_1) + '] ' + this.finallyBody.get_za3lpa$(i_1).toString_za3lpa$(indent + 4 | 0);
      }
    }
    return str;
  };
  ActionTry.prototype.toBytecode_3zq4qf$ = function (indent, context) {
    var tmp$, tmp$_0, tmp$_1;
    var str = this.lbl != null ? this.lbl + ':\n' : '';
    var lf = '';
    if (this.tryBody.size !== 0) {
      str += lf + repeat(' ', indent + 2 | 0) + 'try {';
      var contextTry = new ActionExecutionContext(this.tryBody, ArrayList_init_0(context.cpool), this.labelCountTry);
      tmp$ = this.tryBody.size;
      for (var i = 0; i < tmp$; i++)
        str += '\n' + repeat(' ', indent + 4 | 0) + this.tryBody.get_za3lpa$(i).toBytecode_3zq4qf$(indent + 4 | 0, contextTry);
      if (contextTry.endLabel != null)
        str += '\n' + repeat(' ', indent + 4 | 0) + contextTry.endLabel + ':';
      str += '\n' + repeat(' ', indent + 2 | 0) + '}';
      lf = '\n';
    }
    if (this.catchBody.size !== 0) {
      str += lf + repeat(' ', indent + 2 | 0) + 'catch(' + (this.catchInRegisterFlag ? '$' + Kotlin.toString(this.catchRegister) : this.catchName) + ') {';
      var contextCatch = new ActionExecutionContext(this.catchBody, ArrayList_init_0(context.cpool), this.labelCountCatch);
      tmp$_0 = this.catchBody.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++)
        str += '\n' + repeat(' ', indent + 4 | 0) + this.catchBody.get_za3lpa$(i_0).toBytecode_3zq4qf$(indent + 4 | 0, contextCatch);
      if (contextCatch.endLabel != null)
        str += '\n' + repeat(' ', indent + 4 | 0) + contextCatch.endLabel + ':';
      str += '\n' + repeat(' ', indent + 2 | 0) + '}';
      lf = '\n';
    }
    if (this.finallyBody.size !== 0) {
      str += lf + repeat(' ', indent + 2 | 0) + 'finally {';
      var contextFinally = new ActionExecutionContext(this.finallyBody, ArrayList_init_0(context.cpool), this.labelCountFinally);
      tmp$_1 = this.finallyBody.size;
      for (var i_1 = 0; i_1 < tmp$_1; i_1++)
        str += '\n' + repeat(' ', indent + 4 | 0) + this.finallyBody.get_za3lpa$(i_1).toBytecode_3zq4qf$(indent + 4 | 0, contextFinally);
      if (contextFinally.endLabel != null)
        str += '\n' + repeat(' ', indent + 4 | 0) + contextFinally.endLabel + ':';
      str += '\n' + repeat(' ', indent + 2 | 0) + '}';
    }
    return str;
  };
  ActionTry.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ActionTry',
    interfaces: [Action, IAction]
  };
  function ActionValueType() {
    ActionValueType_instance = this;
    this.STRING = 0;
    this.FLOAT = 1;
    this.NULL = 2;
    this.UNDEFINED = 3;
    this.REGISTER = 4;
    this.BOOLEAN = 5;
    this.DOUBLE = 6;
    this.INTEGER = 7;
    this.CONSTANT_8 = 8;
    this.CONSTANT_16 = 9;
  }
  ActionValueType.prototype.toString_za3lpa$ = function (bitmapFormat) {
    if (bitmapFormat === this.STRING)
      return 'string';
    else if (bitmapFormat === this.FLOAT)
      return 'float';
    else if (bitmapFormat === this.NULL)
      return 'null';
    else if (bitmapFormat === this.UNDEFINED)
      return 'undefined';
    else if (bitmapFormat === this.REGISTER)
      return 'register';
    else if (bitmapFormat === this.BOOLEAN)
      return 'boolean';
    else if (bitmapFormat === this.DOUBLE)
      return 'double';
    else if (bitmapFormat === this.INTEGER)
      return 'integer';
    else if (bitmapFormat === this.CONSTANT_8)
      return 'constant8';
    else if (bitmapFormat === this.CONSTANT_16)
      return 'constant16';
    else
      return 'unknown';
  };
  ActionValueType.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ActionValueType',
    interfaces: []
  };
  var ActionValueType_instance = null;
  function ActionValueType_getInstance() {
    if (ActionValueType_instance === null) {
      new ActionValueType();
    }
    return ActionValueType_instance;
  }
  function BitmapFormat(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BitmapFormat_initFields() {
    BitmapFormat_initFields = function () {
    };
    BitmapFormat$BIT_8_instance = new BitmapFormat('BIT_8', 0, 3);
    BitmapFormat$BIT_15_instance = new BitmapFormat('BIT_15', 1, 4);
    BitmapFormat$BIT_24_32_instance = new BitmapFormat('BIT_24_32', 2, 5);
    BitmapFormat$UNKNOWN_instance = new BitmapFormat('UNKNOWN', 3, -1);
    BitmapFormat$Companion_getInstance();
  }
  var BitmapFormat$BIT_8_instance;
  function BitmapFormat$BIT_8_getInstance() {
    BitmapFormat_initFields();
    return BitmapFormat$BIT_8_instance;
  }
  var BitmapFormat$BIT_15_instance;
  function BitmapFormat$BIT_15_getInstance() {
    BitmapFormat_initFields();
    return BitmapFormat$BIT_15_instance;
  }
  var BitmapFormat$BIT_24_32_instance;
  function BitmapFormat$BIT_24_32_getInstance() {
    BitmapFormat_initFields();
    return BitmapFormat$BIT_24_32_instance;
  }
  var BitmapFormat$UNKNOWN_instance;
  function BitmapFormat$UNKNOWN_getInstance() {
    BitmapFormat_initFields();
    return BitmapFormat$UNKNOWN_instance;
  }
  function BitmapFormat$Companion() {
    BitmapFormat$Companion_instance = this;
    var $receiver = BitmapFormat$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  BitmapFormat$Companion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : BitmapFormat$UNKNOWN_getInstance();
  };
  BitmapFormat$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BitmapFormat$Companion_instance = null;
  function BitmapFormat$Companion_getInstance() {
    BitmapFormat_initFields();
    if (BitmapFormat$Companion_instance === null) {
      new BitmapFormat$Companion();
    }
    return BitmapFormat$Companion_instance;
  }
  BitmapFormat.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BitmapFormat',
    interfaces: [Enum]
  };
  function BitmapFormat$values() {
    return [BitmapFormat$BIT_8_getInstance(), BitmapFormat$BIT_15_getInstance(), BitmapFormat$BIT_24_32_getInstance(), BitmapFormat$UNKNOWN_getInstance()];
  }
  BitmapFormat.values = BitmapFormat$values;
  function BitmapFormat$valueOf(name) {
    switch (name) {
      case 'BIT_8':
        return BitmapFormat$BIT_8_getInstance();
      case 'BIT_15':
        return BitmapFormat$BIT_15_getInstance();
      case 'BIT_24_32':
        return BitmapFormat$BIT_24_32_getInstance();
      case 'UNKNOWN':
        return BitmapFormat$UNKNOWN_getInstance();
      default:Kotlin.throwISE('No enum constant com.codeazur.as3swf.data.consts.BitmapFormat.' + name);
    }
  }
  BitmapFormat.valueOf_61zpoe$ = BitmapFormat$valueOf;
  function BitmapType() {
    BitmapType_instance = this;
    this.JPEG = 1;
    this.GIF89A = 2;
    this.PNG = 3;
  }
  BitmapType.prototype.toString_za3lpa$ = function (bitmapFormat) {
    if (bitmapFormat === this.JPEG)
      return 'JPEG';
    else if (bitmapFormat === this.GIF89A)
      return 'GIF89a';
    else if (bitmapFormat === this.PNG)
      return 'PNG';
    else
      return 'unknown';
  };
  BitmapType.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BitmapType',
    interfaces: []
  };
  var BitmapType_instance = null;
  function BitmapType_getInstance() {
    if (BitmapType_instance === null) {
      new BitmapType();
    }
    return BitmapType_instance;
  }
  function BlendMode() {
    BlendMode_instance = this;
    this.NORMAL_0 = 0;
    this.NORMAL_1 = 1;
    this.LAYER = 2;
    this.MULTIPLY = 3;
    this.SCREEN = 4;
    this.LIGHTEN = 5;
    this.DARKEN = 6;
    this.DIFFERENCE = 7;
    this.ADD = 8;
    this.SUBTRACT = 9;
    this.INVERT = 10;
    this.ALPHA = 11;
    this.ERASE = 12;
    this.OVERLAY = 13;
    this.HARDLIGHT = 14;
  }
  BlendMode.prototype.toString_za3lpa$ = function (blendMode) {
    if (blendMode === this.NORMAL_0 || blendMode === this.NORMAL_1)
      return 'normal';
    else if (blendMode === this.LAYER)
      return 'layer';
    else if (blendMode === this.MULTIPLY)
      return 'multiply';
    else if (blendMode === this.SCREEN)
      return 'screen';
    else if (blendMode === this.LIGHTEN)
      return 'lighten';
    else if (blendMode === this.DARKEN)
      return 'darken';
    else if (blendMode === this.DIFFERENCE)
      return 'difference';
    else if (blendMode === this.ADD)
      return 'add';
    else if (blendMode === this.SUBTRACT)
      return 'subtract';
    else if (blendMode === this.INVERT)
      return 'invert';
    else if (blendMode === this.ALPHA)
      return 'alpha';
    else if (blendMode === this.ERASE)
      return 'erase';
    else if (blendMode === this.OVERLAY)
      return 'overlay';
    else if (blendMode === this.HARDLIGHT)
      return 'hardlight';
    else
      return 'unknown';
  };
  BlendMode.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'BlendMode',
    interfaces: []
  };
  var BlendMode_instance = null;
  function BlendMode_getInstance() {
    if (BlendMode_instance === null) {
      new BlendMode();
    }
    return BlendMode_instance;
  }
  function CSMTableHint() {
    CSMTableHint_instance = this;
    this.THIN = 0;
    this.MEDIUM = 1;
    this.THICK = 2;
  }
  CSMTableHint.prototype.toString_za3lpa$ = function (csmTableHint) {
    if (csmTableHint === this.THIN)
      return 'thin';
    else if (csmTableHint === this.MEDIUM)
      return 'medium';
    else if (csmTableHint === this.THICK)
      return 'thick';
    else
      return 'unknown';
  };
  CSMTableHint.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'CSMTableHint',
    interfaces: []
  };
  var CSMTableHint_instance = null;
  function CSMTableHint_getInstance() {
    if (CSMTableHint_instance === null) {
      new CSMTableHint();
    }
    return CSMTableHint_instance;
  }
  function GradientInterpolationMode(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GradientInterpolationMode_initFields() {
    GradientInterpolationMode_initFields = function () {
    };
    GradientInterpolationMode$NORMAL_instance = new GradientInterpolationMode('NORMAL', 0, 0);
    GradientInterpolationMode$LINEAR_instance = new GradientInterpolationMode('LINEAR', 1, 1);
    GradientInterpolationMode$Companion_getInstance();
  }
  var GradientInterpolationMode$NORMAL_instance;
  function GradientInterpolationMode$NORMAL_getInstance() {
    GradientInterpolationMode_initFields();
    return GradientInterpolationMode$NORMAL_instance;
  }
  var GradientInterpolationMode$LINEAR_instance;
  function GradientInterpolationMode$LINEAR_getInstance() {
    GradientInterpolationMode_initFields();
    return GradientInterpolationMode$LINEAR_instance;
  }
  function GradientInterpolationMode$Companion() {
    GradientInterpolationMode$Companion_instance = this;
    var $receiver = GradientInterpolationMode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  GradientInterpolationMode$Companion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : GradientInterpolationMode$NORMAL_getInstance();
  };
  GradientInterpolationMode$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GradientInterpolationMode$Companion_instance = null;
  function GradientInterpolationMode$Companion_getInstance() {
    GradientInterpolationMode_initFields();
    if (GradientInterpolationMode$Companion_instance === null) {
      new GradientInterpolationMode$Companion();
    }
    return GradientInterpolationMode$Companion_instance;
  }
  GradientInterpolationMode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GradientInterpolationMode',
    interfaces: [Enum]
  };
  function GradientInterpolationMode$values() {
    return [GradientInterpolationMode$NORMAL_getInstance(), GradientInterpolationMode$LINEAR_getInstance()];
  }
  GradientInterpolationMode.values = GradientInterpolationMode$values;
  function GradientInterpolationMode$valueOf(name) {
    switch (name) {
      case 'NORMAL':
        return GradientInterpolationMode$NORMAL_getInstance();
      case 'LINEAR':
        return GradientInterpolationMode$LINEAR_getInstance();
      default:Kotlin.throwISE('No enum constant com.codeazur.as3swf.data.consts.GradientInterpolationMode.' + name);
    }
  }
  GradientInterpolationMode.valueOf_61zpoe$ = GradientInterpolationMode$valueOf;
  function GradientSpreadMode(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GradientSpreadMode_initFields() {
    GradientSpreadMode_initFields = function () {
    };
    GradientSpreadMode$PAD_instance = new GradientSpreadMode('PAD', 0, 0);
    GradientSpreadMode$REFLECT_instance = new GradientSpreadMode('REFLECT', 1, 1);
    GradientSpreadMode$REPEAT_instance = new GradientSpreadMode('REPEAT', 2, 2);
    GradientSpreadMode$Companion_getInstance();
  }
  var GradientSpreadMode$PAD_instance;
  function GradientSpreadMode$PAD_getInstance() {
    GradientSpreadMode_initFields();
    return GradientSpreadMode$PAD_instance;
  }
  var GradientSpreadMode$REFLECT_instance;
  function GradientSpreadMode$REFLECT_getInstance() {
    GradientSpreadMode_initFields();
    return GradientSpreadMode$REFLECT_instance;
  }
  var GradientSpreadMode$REPEAT_instance;
  function GradientSpreadMode$REPEAT_getInstance() {
    GradientSpreadMode_initFields();
    return GradientSpreadMode$REPEAT_instance;
  }
  function GradientSpreadMode$Companion() {
    GradientSpreadMode$Companion_instance = this;
    var $receiver = GradientSpreadMode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  GradientSpreadMode$Companion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : GradientSpreadMode$PAD_getInstance();
  };
  GradientSpreadMode$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GradientSpreadMode$Companion_instance = null;
  function GradientSpreadMode$Companion_getInstance() {
    GradientSpreadMode_initFields();
    if (GradientSpreadMode$Companion_instance === null) {
      new GradientSpreadMode$Companion();
    }
    return GradientSpreadMode$Companion_instance;
  }
  GradientSpreadMode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GradientSpreadMode',
    interfaces: [Enum]
  };
  function GradientSpreadMode$values() {
    return [GradientSpreadMode$PAD_getInstance(), GradientSpreadMode$REFLECT_getInstance(), GradientSpreadMode$REPEAT_getInstance()];
  }
  GradientSpreadMode.values = GradientSpreadMode$values;
  function GradientSpreadMode$valueOf(name) {
    switch (name) {
      case 'PAD':
        return GradientSpreadMode$PAD_getInstance();
      case 'REFLECT':
        return GradientSpreadMode$REFLECT_getInstance();
      case 'REPEAT':
        return GradientSpreadMode$REPEAT_getInstance();
      default:Kotlin.throwISE('No enum constant com.codeazur.as3swf.data.consts.GradientSpreadMode.' + name);
    }
  }
  GradientSpreadMode.valueOf_61zpoe$ = GradientSpreadMode$valueOf;
  function ScaleMode(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ScaleMode_initFields() {
    ScaleMode_initFields = function () {
    };
    ScaleMode$NONE_instance = new ScaleMode('NONE', 0, 0);
    ScaleMode$HORIZONTAL_instance = new ScaleMode('HORIZONTAL', 1, 1);
    ScaleMode$VERTICAL_instance = new ScaleMode('VERTICAL', 2, 2);
    ScaleMode$NORMAL_instance = new ScaleMode('NORMAL', 3, 3);
    ScaleMode$Companion_getInstance();
  }
  var ScaleMode$NONE_instance;
  function ScaleMode$NONE_getInstance() {
    ScaleMode_initFields();
    return ScaleMode$NONE_instance;
  }
  var ScaleMode$HORIZONTAL_instance;
  function ScaleMode$HORIZONTAL_getInstance() {
    ScaleMode_initFields();
    return ScaleMode$HORIZONTAL_instance;
  }
  var ScaleMode$VERTICAL_instance;
  function ScaleMode$VERTICAL_getInstance() {
    ScaleMode_initFields();
    return ScaleMode$VERTICAL_instance;
  }
  var ScaleMode$NORMAL_instance;
  function ScaleMode$NORMAL_getInstance() {
    ScaleMode_initFields();
    return ScaleMode$NORMAL_instance;
  }
  function ScaleMode$Companion() {
    ScaleMode$Companion_instance = this;
    var $receiver = ScaleMode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  ScaleMode$Companion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : ScaleMode$NORMAL_getInstance();
  };
  ScaleMode$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScaleMode$Companion_instance = null;
  function ScaleMode$Companion_getInstance() {
    ScaleMode_initFields();
    if (ScaleMode$Companion_instance === null) {
      new ScaleMode$Companion();
    }
    return ScaleMode$Companion_instance;
  }
  ScaleMode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ScaleMode',
    interfaces: [Enum]
  };
  function ScaleMode$values() {
    return [ScaleMode$NONE_getInstance(), ScaleMode$HORIZONTAL_getInstance(), ScaleMode$VERTICAL_getInstance(), ScaleMode$NORMAL_getInstance()];
  }
  ScaleMode.values = ScaleMode$values;
  function ScaleMode$valueOf(name) {
    switch (name) {
      case 'NONE':
        return ScaleMode$NONE_getInstance();
      case 'HORIZONTAL':
        return ScaleMode$HORIZONTAL_getInstance();
      case 'VERTICAL':
        return ScaleMode$VERTICAL_getInstance();
      case 'NORMAL':
        return ScaleMode$NORMAL_getInstance();
      default:Kotlin.throwISE('No enum constant com.codeazur.as3swf.data.consts.ScaleMode.' + name);
    }
  }
  ScaleMode.valueOf_61zpoe$ = ScaleMode$valueOf;
  function LineCapsStyle(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function LineCapsStyle_initFields() {
    LineCapsStyle_initFields = function () {
    };
    LineCapsStyle$ROUND_instance = new LineCapsStyle('ROUND', 0, 0);
    LineCapsStyle$NO_instance = new LineCapsStyle('NO', 1, 1);
    LineCapsStyle$SQUARE_instance = new LineCapsStyle('SQUARE', 2, 2);
    LineCapsStyle$Companion_getInstance();
  }
  var LineCapsStyle$ROUND_instance;
  function LineCapsStyle$ROUND_getInstance() {
    LineCapsStyle_initFields();
    return LineCapsStyle$ROUND_instance;
  }
  var LineCapsStyle$NO_instance;
  function LineCapsStyle$NO_getInstance() {
    LineCapsStyle_initFields();
    return LineCapsStyle$NO_instance;
  }
  var LineCapsStyle$SQUARE_instance;
  function LineCapsStyle$SQUARE_getInstance() {
    LineCapsStyle_initFields();
    return LineCapsStyle$SQUARE_instance;
  }
  function LineCapsStyle$Companion() {
    LineCapsStyle$Companion_instance = this;
    var $receiver = LineCapsStyle$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  LineCapsStyle$Companion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.BY_ID.get_11rb$(index)) != null ? tmp$ : LineCapsStyle$ROUND_getInstance();
  };
  LineCapsStyle$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LineCapsStyle$Companion_instance = null;
  function LineCapsStyle$Companion_getInstance() {
    LineCapsStyle_initFields();
    if (LineCapsStyle$Companion_instance === null) {
      new LineCapsStyle$Companion();
    }
    return LineCapsStyle$Companion_instance;
  }
  LineCapsStyle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LineCapsStyle',
    interfaces: [Enum]
  };
  function LineCapsStyle$values() {
    return [LineCapsStyle$ROUND_getInstance(), LineCapsStyle$NO_getInstance(), LineCapsStyle$SQUARE_getInstance()];
  }
  LineCapsStyle.values = LineCapsStyle$values;
  function LineCapsStyle$valueOf(name) {
    switch (name) {
      case 'ROUND':
        return LineCapsStyle$ROUND_getInstance();
      case 'NO':
        return LineCapsStyle$NO_getInstance();
      case 'SQUARE':
        return LineCapsStyle$SQUARE_getInstance();
      default:Kotlin.throwISE('No enum constant com.codeazur.as3swf.data.consts.LineCapsStyle.' + name);
    }
  }
  LineCapsStyle.valueOf_61zpoe$ = LineCapsStyle$valueOf;
  function LineJointStyle() {
    LineJointStyle_instance = this;
    this.ROUND = 0;
    this.BEVEL = 1;
    this.MITER = 2;
  }
  LineJointStyle.prototype.toString_za3lpa$ = function (lineJointStyle) {
    if (lineJointStyle === this.ROUND)
      return 'round';
    else if (lineJointStyle === this.BEVEL)
      return 'bevel';
    else if (lineJointStyle === this.MITER)
      return 'miter';
    else
      return 'null';
  };
  LineJointStyle.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'LineJointStyle',
    interfaces: []
  };
  var LineJointStyle_instance = null;
  function LineJointStyle_getInstance() {
    if (LineJointStyle_instance === null) {
      new LineJointStyle();
    }
    return LineJointStyle_instance;
  }
  function SoundCompression() {
    SoundCompression_instance = this;
    this.UNCOMPRESSED_NATIVE_ENDIAN = 0;
    this.ADPCM = 1;
    this.MP3 = 2;
    this.UNCOMPRESSED_LITTLE_ENDIAN = 3;
    this.NELLYMOSER_16_KHZ = 4;
    this.NELLYMOSER_8_KHZ = 5;
    this.NELLYMOSER = 6;
    this.SPEEX = 11;
  }
  SoundCompression.prototype.toString_za3lpa$ = function (soundCompression) {
    var tmp$;
    if (soundCompression === this.UNCOMPRESSED_NATIVE_ENDIAN)
      tmp$ = 'Uncompressed Native Endian';
    else if (soundCompression === this.ADPCM)
      tmp$ = 'ADPCM';
    else if (soundCompression === this.MP3)
      tmp$ = 'MP3';
    else if (soundCompression === this.UNCOMPRESSED_LITTLE_ENDIAN)
      tmp$ = 'Uncompressed Little Endian';
    else if (soundCompression === this.NELLYMOSER_16_KHZ)
      tmp$ = 'Nellymoser 16kHz';
    else if (soundCompression === this.NELLYMOSER_8_KHZ)
      tmp$ = 'Nellymoser 8kHz';
    else if (soundCompression === this.NELLYMOSER)
      tmp$ = 'Nellymoser';
    else if (soundCompression === this.SPEEX)
      tmp$ = 'Speex';
    else
      return 'unknown';
    return tmp$;
  };
  SoundCompression.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SoundCompression',
    interfaces: []
  };
  var SoundCompression_instance = null;
  function SoundCompression_getInstance() {
    if (SoundCompression_instance === null) {
      new SoundCompression();
    }
    return SoundCompression_instance;
  }
  function SoundRate() {
    SoundRate_instance = this;
    this.KHZ_5 = 0;
    this.KHZ_11 = 1;
    this.KHZ_22 = 2;
    this.KHZ_44 = 3;
  }
  SoundRate.prototype.toString_za3lpa$ = function (soundRate) {
    var tmp$;
    if (soundRate === this.KHZ_5)
      tmp$ = '5.5kHz';
    else if (soundRate === this.KHZ_11)
      tmp$ = '11kHz';
    else if (soundRate === this.KHZ_22)
      tmp$ = '22kHz';
    else if (soundRate === this.KHZ_44)
      tmp$ = '44kHz';
    else
      tmp$ = 'unknown';
    return tmp$;
  };
  SoundRate.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SoundRate',
    interfaces: []
  };
  var SoundRate_instance = null;
  function SoundRate_getInstance() {
    if (SoundRate_instance === null) {
      new SoundRate();
    }
    return SoundRate_instance;
  }
  function SoundSize() {
    SoundSize_instance = this;
    this.BIT_8 = 0;
    this.BIT_16 = 1;
  }
  SoundSize.prototype.toString_za3lpa$ = function (soundSize) {
    var tmp$;
    if (soundSize === this.BIT_8)
      tmp$ = '8bit';
    else if (soundSize === this.BIT_16)
      tmp$ = '16bit';
    else
      tmp$ = 'unknown';
    return tmp$;
  };
  SoundSize.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SoundSize',
    interfaces: []
  };
  var SoundSize_instance = null;
  function SoundSize_getInstance() {
    if (SoundSize_instance === null) {
      new SoundSize();
    }
    return SoundSize_instance;
  }
  function SoundType() {
    SoundType_instance = this;
    this.MONO = 0;
    this.STEREO = 1;
  }
  SoundType.prototype.toString_za3lpa$ = function (soundType) {
    var tmp$;
    if (soundType === this.MONO)
      tmp$ = 'mono';
    else if (soundType === this.STEREO)
      tmp$ = 'stereo';
    else
      tmp$ = 'unknown';
    return tmp$;
  };
  SoundType.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SoundType',
    interfaces: []
  };
  var SoundType_instance = null;
  function SoundType_getInstance() {
    if (SoundType_instance === null) {
      new SoundType();
    }
    return SoundType_instance;
  }
  function VideoCodecID() {
    VideoCodecID_instance = this;
    this.H263 = 2;
    this.SCREEN = 3;
    this.VP6 = 4;
    this.VP6ALPHA = 5;
    this.SCREENV2 = 6;
  }
  VideoCodecID.prototype.toString_za3lpa$ = function (codecId) {
    var tmp$;
    if (codecId === this.H263)
      tmp$ = 'H.263';
    else if (codecId === this.SCREEN)
      tmp$ = 'Screen Video';
    else if (codecId === this.VP6)
      tmp$ = 'VP6';
    else if (codecId === this.VP6ALPHA)
      tmp$ = 'VP6 With Alpha';
    else if (codecId === this.SCREENV2)
      tmp$ = 'Screen Video V2';
    else
      tmp$ = 'unknown';
    return tmp$;
  };
  VideoCodecID.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'VideoCodecID',
    interfaces: []
  };
  var VideoCodecID_instance = null;
  function VideoCodecID_getInstance() {
    if (VideoCodecID_instance === null) {
      new VideoCodecID();
    }
    return VideoCodecID_instance;
  }
  function VideoDeblockingType() {
    VideoDeblockingType_instance = this;
    this.VIDEOPACKET = 0;
    this.OFF = 1;
    this.LEVEL1 = 2;
    this.LEVEL2 = 3;
    this.LEVEL3 = 4;
    this.LEVEL4 = 5;
  }
  VideoDeblockingType.prototype.toString_za3lpa$ = function (deblockingType) {
    var tmp$;
    if (deblockingType === this.VIDEOPACKET)
      tmp$ = 'videopacket';
    else if (deblockingType === this.OFF)
      tmp$ = 'off';
    else if (deblockingType === this.LEVEL1)
      tmp$ = 'level 1';
    else if (deblockingType === this.LEVEL2)
      tmp$ = 'level 2';
    else if (deblockingType === this.LEVEL3)
      tmp$ = 'level 3';
    else if (deblockingType === this.LEVEL4)
      tmp$ = 'level 4';
    else
      tmp$ = 'unknown';
    return tmp$;
  };
  VideoDeblockingType.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'VideoDeblockingType',
    interfaces: []
  };
  var VideoDeblockingType_instance = null;
  function VideoDeblockingType_getInstance() {
    if (VideoDeblockingType_instance === null) {
      new VideoDeblockingType();
    }
    return VideoDeblockingType_instance;
  }
  function SWFActionValue() {
    SWFActionValue$Companion_getInstance();
    this.type = 0;
    this.string = null;
    this.number = 0.0;
    this.register = 0;
    this.boolean = false;
    this.integer = 0;
    this.constant = 0;
  }
  function SWFActionValue$Companion() {
    SWFActionValue$Companion_instance = this;
    this.ba_0 = SWFActionValue$Companion_getInstance().initTmpBuffer_0();
  }
  SWFActionValue$Companion.prototype.initTmpBuffer_0 = function () {
    var baTmp = new FlashByteArray();
    baTmp.endian = Endian$LITTLE_ENDIAN_getInstance();
    baTmp.length = 8;
    return baTmp;
  };
  SWFActionValue$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SWFActionValue$Companion_instance = null;
  function SWFActionValue$Companion_getInstance() {
    if (SWFActionValue$Companion_instance === null) {
      new SWFActionValue$Companion();
    }
    return SWFActionValue$Companion_instance;
  }
  SWFActionValue.prototype.parse_84a5z1$ = function (data) {
    var tmp$;
    this.type = data.readUI8();
    tmp$ = this.type;
    if (tmp$ === ActionValueType_getInstance().STRING)
      this.string = data.readString();
    else if (tmp$ === ActionValueType_getInstance().FLOAT)
      this.number = data.readFLOAT();
    else if (tmp$ !== ActionValueType_getInstance().NULL)
      if (tmp$ !== ActionValueType_getInstance().UNDEFINED)
        if (tmp$ === ActionValueType_getInstance().REGISTER)
          this.register = data.readUI8();
        else if (tmp$ === ActionValueType_getInstance().BOOLEAN)
          this.boolean = data.readUI8() !== 0;
        else if (tmp$ === ActionValueType_getInstance().DOUBLE) {
          SWFActionValue$Companion_getInstance().ba_0.position = 0;
          SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(4, data.readUI8());
          SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(5, data.readUI8());
          SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(6, data.readUI8());
          SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(7, data.readUI8());
          SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(0, data.readUI8());
          SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(1, data.readUI8());
          SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(2, data.readUI8());
          SWFActionValue$Companion_getInstance().ba_0.set_vux9f0$(3, data.readUI8());
          this.number = SWFActionValue$Companion_getInstance().ba_0.readDouble();
        }
         else if (tmp$ === ActionValueType_getInstance().INTEGER)
          this.integer = data.readUI32();
        else if (tmp$ === ActionValueType_getInstance().CONSTANT_8)
          this.constant = data.readUI8();
        else if (tmp$ === ActionValueType_getInstance().CONSTANT_16)
          this.constant = data.readUI16();
        else
          throw new Error_0('Unknown ActionValueType: ' + Kotlin.toString(this.type));
  };
  SWFActionValue.prototype.toString = function () {
    var tmp$, tmp$_0;
    tmp$ = this.type;
    if (tmp$ === ActionValueType_getInstance().STRING)
      tmp$_0 = Kotlin.toString(this.string) + ' (string)';
    else if (tmp$ === ActionValueType_getInstance().FLOAT)
      tmp$_0 = this.number.toString() + ' (float)';
    else if (tmp$ === ActionValueType_getInstance().NULL)
      tmp$_0 = 'null';
    else if (tmp$ === ActionValueType_getInstance().UNDEFINED)
      tmp$_0 = 'undefined';
    else if (tmp$ === ActionValueType_getInstance().REGISTER)
      tmp$_0 = this.register.toString() + ' (register)';
    else if (tmp$ === ActionValueType_getInstance().BOOLEAN)
      tmp$_0 = this.boolean + ' (boolean)';
    else if (tmp$ === ActionValueType_getInstance().DOUBLE)
      tmp$_0 = this.number.toString() + ' (double)';
    else if (tmp$ === ActionValueType_getInstance().INTEGER)
      tmp$_0 = this.integer.toString() + ' (integer)';
    else if (tmp$ === ActionValueType_getInstance().CONSTANT_8)
      tmp$_0 = this.constant.toString() + ' (constant8)';
    else if (tmp$ === ActionValueType_getInstance().CONSTANT_16)
      tmp$_0 = this.constant.toString() + ' (constant16)';
    else
      tmp$_0 = 'unknown';
    return tmp$_0;
  };
  SWFActionValue.prototype.toBytecodeString_mhpeer$ = function (cpool) {
    var tmp$, tmp$_0;
    tmp$ = this.type;
    if (tmp$ === ActionValueType_getInstance().STRING)
      tmp$_0 = '"' + this.string + '"';
    else if (tmp$ === ActionValueType_getInstance().FLOAT || tmp$ === ActionValueType_getInstance().DOUBLE) {
      var str = this.number.toString();
      if (indexOf(str, '.') === -1) {
        tmp$_0 = str + '.0';
      }
       else {
        tmp$_0 = str;
      }
    }
     else if (tmp$ === ActionValueType_getInstance().NULL)
      tmp$_0 = 'null';
    else if (tmp$ === ActionValueType_getInstance().UNDEFINED)
      tmp$_0 = 'undefined';
    else if (tmp$ === ActionValueType_getInstance().REGISTER)
      tmp$_0 = '$' + Kotlin.toString(this.register);
    else if (tmp$ === ActionValueType_getInstance().BOOLEAN)
      tmp$_0 = this.boolean.toString();
    else if (tmp$ === ActionValueType_getInstance().INTEGER)
      tmp$_0 = this.integer.toString();
    else if (tmp$ === ActionValueType_getInstance().CONSTANT_8 || tmp$ === ActionValueType_getInstance().CONSTANT_16)
      tmp$_0 = '"' + cpool.get_za3lpa$(this.constant) + '"';
    else
      tmp$_0 = 'UNKNOWN';
    return tmp$_0;
  };
  SWFActionValue.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFActionValue',
    interfaces: []
  };
  function SWFButtonCondAction() {
    this.condActionSize = 0;
    this.condIdleToOverDown = false;
    this.condOutDownToIdle = false;
    this.condOutDownToOverDown = false;
    this.condOverDownToOutDown = false;
    this.condOverDownToOverUp = false;
    this.condOverUpToOverDown = false;
    this.condOverUpToIdle = false;
    this.condIdleToOverUp = false;
    this.condOverDownToIdle = false;
    this.condKeyPress = 0;
    this.actions_0 = ArrayList_init();
    this.labelCount_0 = 0;
  }
  SWFButtonCondAction.prototype.parse_84a5z1$ = function (data) {
    var flags = data.readUI8() << 8 | data.readUI8();
    this.condIdleToOverDown = (flags & 32768) !== 0;
    this.condOutDownToIdle = (flags & 16384) !== 0;
    this.condOutDownToOverDown = (flags & 8192) !== 0;
    this.condOverDownToOutDown = (flags & 4096) !== 0;
    this.condOverDownToOverUp = (flags & 2048) !== 0;
    this.condOverUpToOverDown = (flags & 1024) !== 0;
    this.condOverUpToIdle = (flags & 512) !== 0;
    this.condIdleToOverUp = (flags & 256) !== 0;
    this.condOverDownToIdle = (flags & 1) !== 0;
    this.condKeyPress = (flags & 255) >>> 1;
    var action;
    while (true) {
      action = data.readACTIONRECORD();
      if (action == null)
        break;
      this.actions_0.add_11rb$(action);
    }
    this.labelCount_0 = Action$Companion_getInstance().resolveOffsets_3xckz2$(this.actions_0);
  };
  SWFButtonCondAction.prototype.toString_vux9f0$ = function (indent, flags) {
    if (indent === void 0)
      indent = 0;
    if (flags === void 0)
      flags = 0;
    var tmp$, tmp$_0;
    var a = ArrayList_init();
    if (this.condIdleToOverDown)
      a.add_11rb$('idleToOverDown');
    if (this.condOutDownToIdle)
      a.add_11rb$('outDownToIdle');
    if (this.condOutDownToOverDown)
      a.add_11rb$('outDownToOverDown');
    if (this.condOverDownToOutDown)
      a.add_11rb$('overDownToOutDown');
    if (this.condOverDownToOverUp)
      a.add_11rb$('overDownToOverUp');
    if (this.condOverUpToOverDown)
      a.add_11rb$('overUpToOverDown');
    if (this.condOverUpToIdle)
      a.add_11rb$('overUpToIdle');
    if (this.condIdleToOverUp)
      a.add_11rb$('idleToOverUp');
    if (this.condOverDownToIdle)
      a.add_11rb$('overDownToIdle');
    var str = 'CondActionRecord (' + joinToString(a, ', ') + ')';
    if (this.condKeyPress > 0)
      str += ', KeyPress: ' + Kotlin.toString(this.condKeyPress);
    if ((flags & SWF$Companion_getInstance().TOSTRING_FLAG_AVM1_BYTECODE) === 0) {
      tmp$ = this.actions_0.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + Kotlin.toString(i) + '] ' + this.actions_0.get_za3lpa$(i).toString_za3lpa$(indent + 2 | 0);
      }
    }
     else {
      var context = new ActionExecutionContext(this.actions_0, ArrayList_init(), this.labelCount_0);
      tmp$_0 = this.actions_0.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + this.actions_0.get_za3lpa$(i_0).toBytecode_3zq4qf$(indent + 4 | 0, context);
      }
      if (context.endLabel != null) {
        str += '\n' + repeat(' ', indent + 4 | 0) + context.endLabel + ':';
      }
    }
    return str;
  };
  SWFButtonCondAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFButtonCondAction',
    interfaces: []
  };
  function SWFButtonRecord() {
    this.hasBlendMode = false;
    this.hasFilterList = false;
    this.stateHitTest = false;
    this.stateDown = false;
    this.stateOver = false;
    this.stateUp = false;
    this.characterId = 0;
    this.placeDepth = 0;
    this.placeMatrix = null;
    this.colorTransform = null;
    this.blendMode = 0;
    this.filterList_0 = ArrayList_init();
  }
  SWFButtonRecord.prototype.parse_rlw2mn$ = function (data, level) {
    if (level === void 0)
      level = 1;
    var flags = data.readUI8();
    this.stateHitTest = (flags & 8) !== 0;
    this.stateDown = (flags & 4) !== 0;
    this.stateOver = (flags & 2) !== 0;
    this.stateUp = (flags & 1) !== 0;
    this.characterId = data.readUI16();
    this.placeDepth = data.readUI16();
    this.placeMatrix = data.readMATRIX();
    if (level >= 2) {
      this.colorTransform = data.readCXFORMWITHALPHA();
      this.hasFilterList = (flags & 16) !== 0;
      if (this.hasFilterList) {
        var numberOfFilters = data.readUI8();
        for (var i = 0; i < numberOfFilters; i++) {
          this.filterList_0.add_11rb$(data.readFILTER());
        }
      }
      this.hasBlendMode = (flags & 32) !== 0;
      if (this.hasBlendMode) {
        this.blendMode = data.readUI8();
      }
    }
  };
  SWFButtonRecord.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    var tmp$, tmp$_0, tmp$_1;
    var str = 'Depth: ' + this.placeDepth + ', CharacterID: ' + this.characterId + ', States: ';
    var states = ArrayList_init();
    if (this.stateUp)
      states.add_11rb$('up');
    if (this.stateOver)
      states.add_11rb$('over');
    if (this.stateDown)
      states.add_11rb$('down');
    if (this.stateHitTest)
      states.add_11rb$('hit');
    str += joinToString(states, ',');
    if (this.hasBlendMode)
      str += ', BlendMode: ' + BlendMode_getInstance().toString_za3lpa$(this.blendMode);
    if (this.placeMatrix != null && !((tmp$ = this.placeMatrix) != null ? tmp$ : Kotlin.throwNPE()).isIdentity())
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Matrix: ' + Kotlin.toString(this.placeMatrix);
    if (this.colorTransform != null && !((tmp$_0 = this.colorTransform) != null ? tmp$_0 : Kotlin.throwNPE()).isIdentity())
      str += '\n' + repeat(' ', indent + 2 | 0) + 'ColorTransform: ' + Kotlin.toString(this.colorTransform);
    if (this.hasFilterList) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Filters:';
      tmp$_1 = this.filterList_0.size;
      for (var i = 0; i < tmp$_1; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.filterList_0.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }
    return str;
  };
  SWFButtonRecord.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFButtonRecord',
    interfaces: []
  };
  function SWFClipActionRecord() {
    this.eventFlags_k69fi5$_0 = this.eventFlags_k69fi5$_0;
    this.keyCode = 0;
    this.actions = ArrayList_init();
    this.labelCount = 0;
  }
  Object.defineProperty(SWFClipActionRecord.prototype, 'eventFlags', {
    get: function () {
      if (this.eventFlags_k69fi5$_0 == null)
        return Kotlin.throwUPAE('eventFlags');
      return this.eventFlags_k69fi5$_0;
    },
    set: function (eventFlags) {
      this.eventFlags_k69fi5$_0 = eventFlags;
    }
  });
  SWFClipActionRecord.prototype.parse_rlw2mn$ = function (data, version) {
    var tmp$, tmp$_0;
    this.eventFlags = data.readCLIPEVENTFLAGS_za3lpa$(version);
    data.readUI32();
    if (this.eventFlags.keyPressEvent) {
      this.keyCode = data.readUI8();
    }
    while (true) {
      tmp$_0 = this.actions;
      tmp$ = data.readACTIONRECORD();
      if (tmp$ == null) {
        break;
      }
      tmp$_0.add_11rb$(tmp$);
    }
    this.labelCount = Action$Companion_getInstance().resolveOffsets_3xckz2$(this.actions);
  };
  SWFClipActionRecord.prototype.toString_vux9f0$ = function (indent, flags) {
    if (indent === void 0)
      indent = 0;
    if (flags === void 0)
      flags = 0;
    var tmp$, tmp$_0;
    var str = 'ClipActionRecord (' + this.eventFlags.toString() + ')';
    if (this.keyCode > 0) {
      str += ', KeyCode: ' + Kotlin.toString(this.keyCode);
    }
    if ((flags & SWF$Companion_getInstance().TOSTRING_FLAG_AVM1_BYTECODE) === 0) {
      tmp$ = this.actions.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + Kotlin.toString(i) + '] ' + this.actions.get_za3lpa$(i).toString_za3lpa$(indent + 2 | 0);
      }
    }
     else {
      var context = new ActionExecutionContext(this.actions, ArrayList_init(), this.labelCount);
      tmp$_0 = this.actions.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + this.actions.get_za3lpa$(i_0).toBytecode_3zq4qf$(indent + 4 | 0, context);
      }
      if (context.endLabel != null) {
        str += '\n' + repeat(' ', indent + 4 | 0) + context.endLabel + ':';
      }
    }
    return str;
  };
  SWFClipActionRecord.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFClipActionRecord',
    interfaces: []
  };
  function SWFClipActions() {
    this.eventFlags_yhbclb$_0 = this.eventFlags_yhbclb$_0;
    this.records_0 = ArrayList_init();
  }
  Object.defineProperty(SWFClipActions.prototype, 'eventFlags', {
    get: function () {
      if (this.eventFlags_yhbclb$_0 == null)
        return Kotlin.throwUPAE('eventFlags');
      return this.eventFlags_yhbclb$_0;
    },
    set: function (eventFlags) {
      this.eventFlags_yhbclb$_0 = eventFlags;
    }
  });
  SWFClipActions.prototype.parse_rlw2mn$ = function (data, version) {
    var tmp$, tmp$_0;
    data.readUI16();
    this.eventFlags = data.readCLIPEVENTFLAGS_za3lpa$(version);
    while (true) {
      tmp$_0 = this.records_0;
      tmp$ = data.readCLIPACTIONRECORD_za3lpa$(version);
      if (tmp$ == null) {
        break;
      }
      tmp$_0.add_11rb$(tmp$);
    }
  };
  SWFClipActions.prototype.toString_vux9f0$ = function (indent, flags) {
    if (indent === void 0)
      indent = 0;
    if (flags === void 0)
      flags = 0;
    var tmp$;
    var str = 'ClipActions (' + this.eventFlags.toString() + '):';
    tmp$ = this.records_0.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 2 | 0) + '[' + Kotlin.toString(i) + '] ' + this.records_0.get_za3lpa$(i).toString_vux9f0$(indent + 2 | 0, flags);
    }
    return str;
  };
  SWFClipActions.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFClipActions',
    interfaces: []
  };
  function SWFClipEventFlags() {
    this.keyUpEvent = false;
    this.keyDownEvent = false;
    this.mouseUpEvent = false;
    this.mouseDownEvent = false;
    this.mouseMoveEvent = false;
    this.unloadEvent = false;
    this.enterFrameEvent = false;
    this.loadEvent = false;
    this.dragOverEvent = false;
    this.rollOutEvent = false;
    this.rollOverEvent = false;
    this.releaseOutsideEvent = false;
    this.releaseEvent = false;
    this.pressEvent = false;
    this.initializeEvent = false;
    this.dataEvent = false;
    this.constructEvent = false;
    this.keyPressEvent = false;
    this.dragOutEvent = false;
  }
  SWFClipEventFlags.prototype.parse_rlw2mn$ = function (data, version) {
    var flags1 = data.readUI8();
    this.keyUpEvent = (flags1 & 128) !== 0;
    this.keyDownEvent = (flags1 & 64) !== 0;
    this.mouseUpEvent = (flags1 & 32) !== 0;
    this.mouseDownEvent = (flags1 & 16) !== 0;
    this.mouseMoveEvent = (flags1 & 8) !== 0;
    this.unloadEvent = (flags1 & 4) !== 0;
    this.enterFrameEvent = (flags1 & 2) !== 0;
    this.loadEvent = (flags1 & 1) !== 0;
    var flags2 = data.readUI8();
    this.dragOverEvent = (flags2 & 128) !== 0;
    this.rollOutEvent = (flags2 & 64) !== 0;
    this.rollOverEvent = (flags2 & 32) !== 0;
    this.releaseOutsideEvent = (flags2 & 16) !== 0;
    this.releaseEvent = (flags2 & 8) !== 0;
    this.pressEvent = (flags2 & 4) !== 0;
    this.initializeEvent = (flags2 & 2) !== 0;
    this.dataEvent = (flags2 & 1) !== 0;
    if (version >= 6) {
      var flags3 = data.readUI8();
      this.constructEvent = (flags3 & 4) !== 0;
      this.keyPressEvent = (flags3 & 2) !== 0;
      this.dragOutEvent = (flags3 & 1) !== 0;
      data.readUI8();
    }
  };
  SWFClipEventFlags.prototype.toString = function () {
    var a = ArrayList_init();
    if (this.keyUpEvent)
      a.add_11rb$('keyup');
    if (this.keyDownEvent)
      a.add_11rb$('keydown');
    if (this.mouseUpEvent)
      a.add_11rb$('mouseup');
    if (this.mouseDownEvent)
      a.add_11rb$('mousedown');
    if (this.mouseMoveEvent)
      a.add_11rb$('mousemove');
    if (this.unloadEvent)
      a.add_11rb$('unload');
    if (this.enterFrameEvent)
      a.add_11rb$('enterframe');
    if (this.loadEvent)
      a.add_11rb$('load');
    if (this.dragOverEvent)
      a.add_11rb$('dragover');
    if (this.rollOutEvent)
      a.add_11rb$('rollout');
    if (this.rollOverEvent)
      a.add_11rb$('rollover');
    if (this.releaseOutsideEvent)
      a.add_11rb$('releaseoutside');
    if (this.releaseEvent)
      a.add_11rb$('release');
    if (this.pressEvent)
      a.add_11rb$('press');
    if (this.initializeEvent)
      a.add_11rb$('initialize');
    if (this.dataEvent)
      a.add_11rb$('data');
    if (this.constructEvent)
      a.add_11rb$('construct');
    if (this.keyPressEvent)
      a.add_11rb$('keypress');
    if (this.dragOutEvent)
      a.add_11rb$('dragout');
    return joinToString(a, ',');
  };
  SWFClipEventFlags.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFClipEventFlags',
    interfaces: []
  };
  function SWFColorTransform() {
    this._rMult = 256;
    this._gMult = 256;
    this._bMult = 256;
    this._aMult = 256;
    this._rAdd = 0;
    this._gAdd = 0;
    this._bAdd = 0;
    this._aAdd = 0;
    this.hasMultTerms = false;
    this.hasAddTerms = false;
  }
  Object.defineProperty(SWFColorTransform.prototype, 'rMult', {
    get: function () {
      return this._rMult / 256;
    },
    set: function (value) {
      this._rMult = this.clamp_za3lpa$(value * 256 | 0);
      this.updateHasMultTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'gMult', {
    get: function () {
      return this._gMult / 256;
    },
    set: function (value) {
      this._gMult = this.clamp_za3lpa$(value * 256 | 0);
      this.updateHasMultTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'bMult', {
    get: function () {
      return this._bMult / 256;
    },
    set: function (value) {
      this._bMult = this.clamp_za3lpa$(value * 256 | 0);
      this.updateHasMultTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'aMult', {
    get: function () {
      return this._aMult / 256;
    },
    set: function (value) {
      this._aMult = this.clamp_za3lpa$(value * 256 | 0);
      this.updateHasMultTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'rAdd', {
    get: function () {
      return this._rAdd;
    },
    set: function (value) {
      this._rAdd = this.clamp_za3lpa$(value);
      this.updateHasAddTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'gAdd', {
    get: function () {
      return this._gAdd;
    },
    set: function (value) {
      this._gAdd = this.clamp_za3lpa$(value);
      this.updateHasAddTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'bAdd', {
    get: function () {
      return this._bAdd;
    },
    set: function (value) {
      this._bAdd = this.clamp_za3lpa$(value);
      this.updateHasAddTerms();
    }
  });
  Object.defineProperty(SWFColorTransform.prototype, 'aAdd', {
    get: function () {
      return this._aAdd;
    },
    set: function (value) {
      this._aAdd = this.clamp_za3lpa$(value);
      this.updateHasAddTerms();
    }
  });
  SWFColorTransform.prototype.parse_84a5z1$ = function (data) {
    data.resetBitsPending();
    this.hasAddTerms = data.readUB_za3lpa$(1) === 1;
    this.hasMultTerms = data.readUB_za3lpa$(1) === 1;
    var bits = data.readUB_za3lpa$(4);
    if (this.hasMultTerms) {
      this._rMult = data.readSB_za3lpa$(bits);
      this._gMult = data.readSB_za3lpa$(bits);
      this._bMult = data.readSB_za3lpa$(bits);
    }
     else {
      this._rMult = 256;
      this._gMult = 256;
      this._bMult = 256;
    }
    if (this.hasAddTerms) {
      this._rAdd = data.readSB_za3lpa$(bits);
      this._gAdd = data.readSB_za3lpa$(bits);
      this._bAdd = data.readSB_za3lpa$(bits);
    }
     else {
      this._rAdd = 0;
      this._gAdd = 0;
      this._bAdd = 0;
    }
  };
  SWFColorTransform.prototype.updateHasMultTerms = function () {
    this.hasMultTerms = this._rMult !== 256 || this._gMult !== 256 || this._bMult !== 256;
  };
  SWFColorTransform.prototype.updateHasAddTerms = function () {
    this.hasAddTerms = this._rAdd !== 0 || this._gAdd !== 0 || this._bAdd !== 0;
  };
  SWFColorTransform.prototype.clamp_za3lpa$ = function (value) {
    var a = Math_0.max(value, -32768);
    return Math_0.min(a, 32767);
  };
  SWFColorTransform.prototype.isIdentity = function () {
    return !this.hasMultTerms && !this.hasAddTerms;
  };
  SWFColorTransform.prototype.toString = function () {
    return '(' + this.rMult + ',' + this.gMult + ',' + this.bMult + ',' + this.rAdd + ',' + this.gAdd + ',' + this.bAdd + ')';
  };
  SWFColorTransform.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFColorTransform',
    interfaces: []
  };
  function SWFColorTransformWithAlpha() {
    SWFColorTransform.call(this);
  }
  SWFColorTransformWithAlpha.prototype.parse_84a5z1$ = function (data) {
    data.resetBitsPending();
    this.hasAddTerms = data.readUB_za3lpa$(1) === 1;
    this.hasMultTerms = data.readUB_za3lpa$(1) === 1;
    var bits = data.readUB_za3lpa$(4);
    if (this.hasMultTerms) {
      this._rMult = data.readSB_za3lpa$(bits);
      this._gMult = data.readSB_za3lpa$(bits);
      this._bMult = data.readSB_za3lpa$(bits);
      this._aMult = data.readSB_za3lpa$(bits);
    }
     else {
      this._rMult = 256;
      this._gMult = 256;
      this._bMult = 256;
      this._aMult = 256;
    }
    if (this.hasAddTerms) {
      this._rAdd = data.readSB_za3lpa$(bits);
      this._gAdd = data.readSB_za3lpa$(bits);
      this._bAdd = data.readSB_za3lpa$(bits);
      this._aAdd = data.readSB_za3lpa$(bits);
    }
     else {
      this._rAdd = 0;
      this._gAdd = 0;
      this._bAdd = 0;
      this._aAdd = 0;
    }
  };
  SWFColorTransformWithAlpha.prototype.updateHasMultTerms = function () {
    this.hasMultTerms = this._rMult !== 256 || this._gMult !== 256 || this._bMult !== 256 || this._aMult !== 256;
  };
  SWFColorTransformWithAlpha.prototype.updateHasAddTerms = function () {
    this.hasAddTerms = this._rAdd !== 0 || this._gAdd !== 0 || this._bAdd !== 0 || this._aAdd !== 0;
  };
  SWFColorTransformWithAlpha.prototype.toString = function () {
    return '(' + this.rMult + ',' + this.gMult + ',' + this.bMult + ',' + this.aMult + ',' + this.rAdd + ',' + this.gAdd + ',' + this.bAdd + ',' + this.aAdd + ')';
  };
  SWFColorTransformWithAlpha.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFColorTransformWithAlpha',
    interfaces: [SWFColorTransform]
  };
  function SWFFillStyle() {
    this.type = 0;
    this.rgb = 0;
    this.gradient = null;
    this.gradientMatrix = null;
    this.bitmapId = 0;
    this.bitmapMatrix = null;
    this._level_0 = 0;
  }
  SWFFillStyle.prototype.parse_rlw2mn$ = function (data, level) {
    if (level === void 0)
      level = 1;
    var tmp$;
    this._level_0 = level;
    this.type = data.readUI8();
    tmp$ = this.type;
    if (tmp$ === 0)
      this.rgb = level <= 2 ? data.readRGB() : data.readRGBA();
    else if (tmp$ === 16 || tmp$ === 18 || tmp$ === 19) {
      this.gradientMatrix = data.readMATRIX();
      this.gradient = this.type === 19 ? data.readFOCALGRADIENT_za3lpa$(level) : data.readGRADIENT_za3lpa$(level);
    }
     else if (tmp$ === 64 || tmp$ === 65 || tmp$ === 66 || tmp$ === 67) {
      this.bitmapId = data.readUI16();
      this.bitmapMatrix = data.readMATRIX();
    }
     else
      throw new Error_0('Unknown fill style type: 0x' + toString(this.type, 16));
  };
  SWFFillStyle.prototype.toString = function () {
    var tmp$, tmp$_0;
    var str = '[SWFFillStyle] Type: ' + format('%02x', [this.type]);
    tmp$ = this.type;
    if (tmp$ === 0)
      str += ' (solid), Color: ' + (this._level_0 <= 2 ? ColorUtils_getInstance().rgbToString_za3lpa$(this.rgb) : ColorUtils_getInstance().rgbaToString_za3lpa$(this.rgb));
    else if (tmp$ === 16)
      str += ' (linear gradient), Gradient: ' + Kotlin.toString(this.gradient) + ', Matrix: ' + Kotlin.toString(this.gradientMatrix);
    else if (tmp$ === 18)
      str += ' (radial gradient), Gradient: ' + Kotlin.toString(this.gradient) + ', Matrix: ' + Kotlin.toString(this.gradientMatrix);
    else if (tmp$ === 19)
      str += ' (focal radial gradient), Gradient: ' + Kotlin.toString(this.gradient) + ', Matrix: ' + Kotlin.toString(this.gradientMatrix) + ', FocalPoint: ' + Kotlin.toString((tmp$_0 = this.gradient) != null ? tmp$_0.focalPoint : null);
    else if (tmp$ === 64)
      str += ' (repeating bitmap), BitmapID: ' + this.bitmapId;
    else if (tmp$ === 65)
      str += ' (clipped bitmap), BitmapID: ' + this.bitmapId;
    else if (tmp$ === 66)
      str += ' (non-smoothed repeating bitmap), BitmapID: ' + this.bitmapId;
    else if (tmp$ === 67)
      str += ' (non-smoothed clipped bitmap), BitmapID: ' + this.bitmapId;
    return str;
  };
  SWFFillStyle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFFillStyle',
    interfaces: []
  };
  function SWFFocalGradient() {
    SWFGradient.call(this);
  }
  SWFFocalGradient.prototype.parse_rlw2mn$ = function (data, level) {
    SWFGradient.prototype.parse_rlw2mn$.call(this, data, level);
    this.focalPoint = data.readFIXED8();
  };
  SWFFocalGradient.prototype.toString = function () {
    return '(' + joinToString(this.records, ',') + ')';
  };
  SWFFocalGradient.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFFocalGradient',
    interfaces: [SWFGradient]
  };
  function SWFFrameLabel(frameNumber, name) {
    this.frameNumber = frameNumber;
    this.name = name;
  }
  SWFFrameLabel.prototype.toString = function () {
    return 'Frame: ' + this.frameNumber + ', Name: ' + this.name;
  };
  SWFFrameLabel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFFrameLabel',
    interfaces: []
  };
  function SWFGlyphEntry() {
    this.index = 0;
    this.advance = 0;
  }
  SWFGlyphEntry.prototype.parse_r43rur$ = function (data, glyphBits, advanceBits) {
    this.index = data.readUB_za3lpa$(glyphBits);
    this.advance = data.readSB_za3lpa$(advanceBits);
  };
  SWFGlyphEntry.prototype.toString = function () {
    return '[SWFGlyphEntry] Index: ' + this.index.toString() + ', Advance: ' + this.advance.toString();
  };
  SWFGlyphEntry.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFGlyphEntry',
    interfaces: []
  };
  function SWFGradient() {
    this.spreadMode = GradientSpreadMode$PAD_getInstance();
    this.interpolationMode = GradientInterpolationMode$NORMAL_getInstance();
    this.focalPoint = 0.0;
    this.records = ArrayList_init();
  }
  SWFGradient.prototype.parse_rlw2mn$ = function (data, level) {
    data.resetBitsPending();
    this.spreadMode = GradientSpreadMode$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    this.interpolationMode = GradientInterpolationMode$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    var numGradients = data.readUB_za3lpa$(4);
    for (var i = 0; i < numGradients; i++)
      this.records.add_11rb$(data.readGRADIENTRECORD_za3lpa$(level));
  };
  SWFGradient.prototype.toString = function () {
    return '(' + joinToString(this.records, ',') + '), SpreadMode: ' + this.spreadMode + ', InterpolationMode: ' + this.interpolationMode;
  };
  SWFGradient.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFGradient',
    interfaces: []
  };
  function SWFGradientRecord() {
    this.ratio = 0;
    this.color = 0;
    this._level_0 = 0;
  }
  SWFGradientRecord.prototype.parse_rlw2mn$ = function (data, level) {
    this._level_0 = level;
    this.ratio = data.readUI8();
    this.color = level <= 2 ? data.readRGB() : data.readRGBA();
  };
  SWFGradientRecord.prototype.toString = function () {
    return '[' + Kotlin.toString(this.ratio) + ',' + (this._level_0 <= 2 ? ColorUtils_getInstance().rgbToString_za3lpa$(this.color) : ColorUtils_getInstance().rgbaToString_za3lpa$(this.color)) + ']';
  };
  SWFGradientRecord.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFGradientRecord',
    interfaces: []
  };
  function SWFKerningRecord() {
    this.code1 = 0;
    this.code2 = 0;
    this.adjustment = 0;
  }
  SWFKerningRecord.prototype.parse_c3ed4a$ = function (data, wideCodes) {
    this.code1 = wideCodes ? data.readUI16() : data.readUI8();
    this.code2 = wideCodes ? data.readUI16() : data.readUI8();
    this.adjustment = data.readSI16();
  };
  SWFKerningRecord.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    return 'Code1: ' + this.code1 + ', Code2: ' + this.code2 + ', Adjustment: ' + this.adjustment;
  };
  SWFKerningRecord.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFKerningRecord',
    interfaces: []
  };
  function SWFLineStyle() {
    this.width = 0;
    this.color = 0;
    this._level = 0;
    this.startCapsStyle = LineCapsStyle$ROUND_getInstance();
    this.endCapsStyle = LineCapsStyle$ROUND_getInstance();
    this.jointStyle = LineJointStyle_getInstance().ROUND;
    this.hasFillFlag = false;
    this.noHScaleFlag = false;
    this.noVScaleFlag = false;
    this.pixelHintingFlag = false;
    this.noClose = false;
    this.miterLimitFactor = 3.0;
    this.fillType = null;
  }
  SWFLineStyle.prototype.parse_rlw2mn$$default = function (data, level) {
    this._level = level;
    this.width = data.readUI16();
    this.color = level <= 2 ? data.readRGB() : data.readRGBA();
  };
  SWFLineStyle.prototype.parse_rlw2mn$ = function (data, level, callback$default) {
    if (level === void 0)
      level = 1;
    callback$default ? callback$default(data, level) : this.parse_rlw2mn$$default(data, level);
  };
  SWFLineStyle.prototype.toString = function () {
    return '[SWFLineStyle] Width: ' + Kotlin.toString(this.width) + ' Color: ' + (this._level <= 2 ? ColorUtils_getInstance().rgbToString_za3lpa$(this.color) : ColorUtils_getInstance().rgbaToString_za3lpa$(this.color));
  };
  SWFLineStyle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFLineStyle',
    interfaces: []
  };
  function SWFLineStyle2() {
    SWFLineStyle.call(this);
  }
  SWFLineStyle2.prototype.parse_rlw2mn$$default = function (data, level) {
    this.width = data.readUI16();
    this.startCapsStyle = LineCapsStyle$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    this.jointStyle = data.readUB_za3lpa$(2);
    this.hasFillFlag = data.readUB_za3lpa$(1) === 1;
    this.noHScaleFlag = data.readUB_za3lpa$(1) === 1;
    this.noVScaleFlag = data.readUB_za3lpa$(1) === 1;
    this.pixelHintingFlag = data.readUB_za3lpa$(1) === 1;
    data.readUB_za3lpa$(5);
    this.noClose = data.readUB_za3lpa$(1) === 1;
    this.endCapsStyle = LineCapsStyle$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    if (this.jointStyle === LineJointStyle_getInstance().MITER)
      this.miterLimitFactor = data.readFIXED8();
    if (this.hasFillFlag) {
      this.fillType = data.readFILLSTYLE_za3lpa$(level);
    }
     else {
      this.color = data.readRGBA();
    }
  };
  SWFLineStyle2.prototype.toString = function () {
    var str = '[SWFLineStyle2] Width: ' + Kotlin.toString(this.width) + ', ' + 'StartCaps: ' + Kotlin.toString(this.startCapsStyle) + ', ' + 'EndCaps: ' + Kotlin.toString(this.endCapsStyle) + ', ' + 'Joint: ' + LineJointStyle_getInstance().toString_za3lpa$(this.jointStyle) + ', ';
    if (this.noClose)
      str += 'NoClose, ';
    if (this.noHScaleFlag)
      str += 'NoHScale, ';
    if (this.noVScaleFlag)
      str += 'NoVScale, ';
    if (this.pixelHintingFlag)
      str += 'PixelHinting, ';
    if (this.hasFillFlag) {
      str += 'Fill: ' + Kotlin.toString(this.fillType);
    }
     else {
      str += 'Color: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.color);
    }
    return str;
  };
  SWFLineStyle2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFLineStyle2',
    interfaces: [SWFLineStyle]
  };
  function SWFMatrix() {
    this.scaleX = 1.0;
    this.scaleY = 1.0;
    this.rotateSkew0 = 0.0;
    this.rotateSkew1 = 0.0;
    this.translateX = 0;
    this.translateY = 0;
    this.xscale = 0.0;
    this.yscale = 0.0;
    this.rotation = 0.0;
  }
  Object.defineProperty(SWFMatrix.prototype, 'matrix', {
    get: function () {
      return new Matrix2d(this.scaleX, this.rotateSkew0, this.rotateSkew1, this.scaleY, this.translateX / 20.0, this.translateY / 20.0);
    }
  });
  SWFMatrix.prototype.parse_84a5z1$ = function (data) {
    data.resetBitsPending();
    this.scaleX = 1.0;
    this.scaleY = 1.0;
    if (data.readUB_za3lpa$(1) === 1) {
      var scaleBits = data.readUB_za3lpa$(5);
      this.scaleX = data.readFB_za3lpa$(scaleBits);
      this.scaleY = data.readFB_za3lpa$(scaleBits);
    }
    this.rotateSkew0 = 0.0;
    this.rotateSkew1 = 0.0;
    if (data.readUB_za3lpa$(1) === 1) {
      var rotateBits = data.readUB_za3lpa$(5);
      this.rotateSkew0 = data.readFB_za3lpa$(rotateBits);
      this.rotateSkew1 = data.readFB_za3lpa$(rotateBits);
    }
    var translateBits = data.readUB_za3lpa$(5);
    this.translateX = data.readSB_za3lpa$(translateBits);
    this.translateY = data.readSB_za3lpa$(translateBits);
    var px = this.matrix.deltaTransformPoint_r62tv1$(new Vector2(0.0, 1.0));
    var tmp$ = 180 / math.PI;
    var y = px.y;
    var x = px.x;
    this.rotation = tmp$ * Math_0.atan2(y, x) - 90;
    if (this.rotation < 0)
      this.rotation += 360;
    var a = this.scaleX * this.scaleX + this.rotateSkew0 * this.rotateSkew0;
    this.xscale = Math_0.sqrt(a);
    var a_0 = this.rotateSkew1 * this.rotateSkew1 + this.scaleY * this.scaleY;
    this.yscale = Math_0.sqrt(a_0);
  };
  SWFMatrix.prototype.isIdentity = function () {
    return this.scaleX === 1.0 && this.scaleY === 1.0 && this.rotateSkew0 === 0.0 && this.rotateSkew1 === 0.0 && this.translateX === 0 && this.translateY === 0;
  };
  SWFMatrix.prototype.toString = function () {
    return '(' + this.scaleX + ',' + this.rotateSkew0 + ',' + this.rotateSkew1 + ',' + this.scaleY + ',' + this.translateX + ',' + this.translateY + ')';
  };
  SWFMatrix.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFMatrix',
    interfaces: []
  };
  function SWFMorphFillStyle() {
    this.type = 0;
    this.startColor = 0;
    this.endColor = 0;
    this.startGradientMatrix_bmq91a$_0 = this.startGradientMatrix_bmq91a$_0;
    this.endGradientMatrix_o97tnt$_0 = this.endGradientMatrix_o97tnt$_0;
    this.gradient = null;
    this.bitmapId = 0;
    this.startBitmapMatrix_oewi03$_0 = this.startBitmapMatrix_oewi03$_0;
    this.endBitmapMatrix_de4kqe$_0 = this.endBitmapMatrix_de4kqe$_0;
  }
  Object.defineProperty(SWFMorphFillStyle.prototype, 'startGradientMatrix', {
    get: function () {
      if (this.startGradientMatrix_bmq91a$_0 == null)
        return Kotlin.throwUPAE('startGradientMatrix');
      return this.startGradientMatrix_bmq91a$_0;
    },
    set: function (startGradientMatrix) {
      this.startGradientMatrix_bmq91a$_0 = startGradientMatrix;
    }
  });
  Object.defineProperty(SWFMorphFillStyle.prototype, 'endGradientMatrix', {
    get: function () {
      if (this.endGradientMatrix_o97tnt$_0 == null)
        return Kotlin.throwUPAE('endGradientMatrix');
      return this.endGradientMatrix_o97tnt$_0;
    },
    set: function (endGradientMatrix) {
      this.endGradientMatrix_o97tnt$_0 = endGradientMatrix;
    }
  });
  Object.defineProperty(SWFMorphFillStyle.prototype, 'startBitmapMatrix', {
    get: function () {
      if (this.startBitmapMatrix_oewi03$_0 == null)
        return Kotlin.throwUPAE('startBitmapMatrix');
      return this.startBitmapMatrix_oewi03$_0;
    },
    set: function (startBitmapMatrix) {
      this.startBitmapMatrix_oewi03$_0 = startBitmapMatrix;
    }
  });
  Object.defineProperty(SWFMorphFillStyle.prototype, 'endBitmapMatrix', {
    get: function () {
      if (this.endBitmapMatrix_de4kqe$_0 == null)
        return Kotlin.throwUPAE('endBitmapMatrix');
      return this.endBitmapMatrix_de4kqe$_0;
    },
    set: function (endBitmapMatrix) {
      this.endBitmapMatrix_de4kqe$_0 = endBitmapMatrix;
    }
  });
  SWFMorphFillStyle.prototype.parse_rlw2mn$ = function (data, level) {
    if (level === void 0)
      level = 1;
    var tmp$;
    this.type = data.readUI8();
    tmp$ = this.type;
    if (tmp$ === 0) {
      this.startColor = data.readRGBA();
      this.endColor = data.readRGBA();
    }
     else if (tmp$ === 16 || tmp$ === 18 || tmp$ === 19) {
      this.startGradientMatrix = data.readMATRIX();
      this.endGradientMatrix = data.readMATRIX();
      this.gradient = this.type === 19 ? data.readMORPHFOCALGRADIENT_za3lpa$(level) : data.readMORPHGRADIENT_za3lpa$(level);
    }
     else if (tmp$ === 64 || tmp$ === 65 || tmp$ === 66 || tmp$ === 67) {
      this.bitmapId = data.readUI16();
      this.startBitmapMatrix = data.readMATRIX();
      this.endBitmapMatrix = data.readMATRIX();
    }
     else {
      throw new Error_0('Unknown fill style type: 0x' + toString(this.type, 16));
    }
  };
  SWFMorphFillStyle.prototype.getMorphedFillStyle_14dthe$ = function (ratio) {
    var tmp$, tmp$_0;
    var fillStyle = new SWFFillStyle();
    fillStyle.type = this.type;
    tmp$ = this.type;
    if (tmp$ === 0)
      fillStyle.rgb = ColorUtils_getInstance().interpolate_224j3y$(this.startColor, this.endColor, ratio);
    else if (tmp$ === 16 || tmp$ === 18) {
      fillStyle.gradientMatrix = MatrixUtils_getInstance().interpolate_m2j8zi$(this.startGradientMatrix, this.endGradientMatrix, ratio);
      fillStyle.gradient = ((tmp$_0 = this.gradient) != null ? tmp$_0 : Kotlin.throwNPE()).getMorphedGradient_14dthe$(ratio);
    }
     else if (tmp$ === 64 || tmp$ === 65 || tmp$ === 66 || tmp$ === 67) {
      fillStyle.bitmapId = this.bitmapId;
      fillStyle.bitmapMatrix = MatrixUtils_getInstance().interpolate_m2j8zi$(this.startBitmapMatrix, this.endBitmapMatrix, ratio);
    }
    return fillStyle;
  };
  SWFMorphFillStyle.prototype.toString = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_1 = '[SWFMorphFillStyle] Type: ' + toString(this.type, 16);
    tmp$ = this.type;
    if (tmp$ === 0)
      tmp$_0 = ' (solid), StartColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.startColor) + ', EndColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.endColor);
    else if (tmp$ === 16)
      tmp$_0 = ' (linear gradient), Gradient: ' + Kotlin.toString(this.gradient);
    else if (tmp$ === 18)
      tmp$_0 = ' (radial gradient), Gradient: ' + Kotlin.toString(this.gradient);
    else if (tmp$ === 19)
      tmp$_0 = ' (focal radial gradient), Gradient: ' + Kotlin.toString(this.gradient);
    else if (tmp$ === 64)
      tmp$_0 = ' (repeating bitmap), BitmapID: ' + Kotlin.toString(this.bitmapId);
    else if (tmp$ === 65)
      tmp$_0 = ' (clipped bitmap), BitmapID: ' + Kotlin.toString(this.bitmapId);
    else if (tmp$ === 66)
      tmp$_0 = ' (non-smoothed repeating bitmap), BitmapID: ' + Kotlin.toString(this.bitmapId);
    else if (tmp$ === 67)
      tmp$_0 = ' (non-smoothed clipped bitmap), BitmapID: ' + Kotlin.toString(this.bitmapId);
    else
      tmp$_0 = '';
    return tmp$_1 + tmp$_0;
  };
  SWFMorphFillStyle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFMorphFillStyle',
    interfaces: []
  };
  function SWFMorphFocalGradient() {
    SWFMorphGradient.call(this);
  }
  SWFMorphFocalGradient.prototype.parse_rlw2mn$ = function (data, level) {
    SWFMorphGradient.prototype.parse_rlw2mn$.call(this, data, level);
    this.startFocalPoint = data.readFIXED8();
    this.endFocalPoint = data.readFIXED8();
  };
  SWFMorphFocalGradient.prototype.getMorphedGradient_14dthe$$default = function (ratio) {
    var tmp$;
    var gradient = new SWFGradient();
    tmp$ = this.records.size;
    for (var i = 0; i < tmp$; i++) {
      gradient.records.add_11rb$(this.records.get_za3lpa$(i).getMorphedGradientRecord_14dthe$(ratio));
    }
    return gradient;
  };
  SWFMorphFocalGradient.prototype.toString = function () {
    return 'FocalPoint: ' + Kotlin.toString(this.startFocalPoint) + ',' + Kotlin.toString(this.endFocalPoint) + ' (' + joinToString(this.records, ',') + ')';
  };
  SWFMorphFocalGradient.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFMorphFocalGradient',
    interfaces: [SWFMorphGradient]
  };
  function SWFMorphGradient() {
    this.spreadMode = 0;
    this.interpolationMode = 0;
    this.startFocalPoint = 0.0;
    this.endFocalPoint = 0.0;
    this.records = ArrayList_init();
  }
  SWFMorphGradient.prototype.parse_rlw2mn$ = function (data, level) {
    data.resetBitsPending();
    this.spreadMode = data.readUB_za3lpa$(2);
    this.interpolationMode = data.readUB_za3lpa$(2);
    var numGradients = data.readUB_za3lpa$(4);
    for (var i = 0; i < numGradients; i++) {
      this.records.add_11rb$(data.readMORPHGRADIENTRECORD());
    }
  };
  SWFMorphGradient.prototype.getMorphedGradient_14dthe$$default = function (ratio) {
    var tmp$;
    var gradient = new SWFGradient();
    tmp$ = this.records.size;
    for (var i = 0; i < tmp$; i++) {
      gradient.records.add_11rb$(this.records.get_za3lpa$(i).getMorphedGradientRecord_14dthe$(ratio));
    }
    return gradient;
  };
  SWFMorphGradient.prototype.getMorphedGradient_14dthe$ = function (ratio, callback$default) {
    if (ratio === void 0)
      ratio = 0.0;
    return callback$default ? callback$default(ratio) : this.getMorphedGradient_14dthe$$default(ratio);
  };
  SWFMorphGradient.prototype.toString = function () {
    return '(' + joinToString(this.records, ',') + '), spread:' + Kotlin.toString(this.spreadMode) + ', interpolation:' + Kotlin.toString(this.interpolationMode);
  };
  SWFMorphGradient.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFMorphGradient',
    interfaces: []
  };
  function SWFMorphGradientRecord() {
    this.startRatio = 0;
    this.startColor = 0;
    this.endRatio = 0;
    this.endColor = 0;
  }
  SWFMorphGradientRecord.prototype.parse_84a5z1$ = function (data) {
    this.startRatio = data.readUI8();
    this.startColor = data.readRGBA();
    this.endRatio = data.readUI8();
    this.endColor = data.readRGBA();
  };
  SWFMorphGradientRecord.prototype.getMorphedGradientRecord_14dthe$ = function (ratio) {
    if (ratio === void 0)
      ratio = 0.0;
    var gradientRecord = new SWFGradientRecord();
    gradientRecord.color = ColorUtils_getInstance().interpolate_224j3y$(this.startColor, this.endColor, ratio);
    gradientRecord.ratio = this.startRatio + (this.endRatio - this.startRatio | 0) * ratio | 0;
    return gradientRecord;
  };
  SWFMorphGradientRecord.prototype.toString = function () {
    return '[' + this.startRatio + ',' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.startColor) + ',' + this.endRatio + ',' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.endColor) + ']';
  };
  SWFMorphGradientRecord.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFMorphGradientRecord',
    interfaces: []
  };
  function SWFMorphLineStyle() {
    this.startWidth = 0;
    this.endWidth = 0;
    this.startColor = 0;
    this.endColor = 0;
    this.startCapsStyle = LineCapsStyle$ROUND_getInstance();
    this.endCapsStyle = LineCapsStyle$ROUND_getInstance();
    this.jointStyle = LineJointStyle_getInstance().ROUND;
    this.hasFillFlag = false;
    this.noHScaleFlag = false;
    this.noVScaleFlag = false;
    this.pixelHintingFlag = false;
    this.noClose = false;
    this.miterLimitFactor = 3.0;
    this.fillType = null;
  }
  SWFMorphLineStyle.prototype.parse_rlw2mn$$default = function (data, level) {
    this.startWidth = data.readUI16();
    this.endWidth = data.readUI16();
    this.startColor = data.readRGBA();
    this.endColor = data.readRGBA();
  };
  SWFMorphLineStyle.prototype.parse_rlw2mn$ = function (data, level, callback$default) {
    if (level === void 0)
      level = 1;
    callback$default ? callback$default(data, level) : this.parse_rlw2mn$$default(data, level);
  };
  SWFMorphLineStyle.prototype.getMorphedLineStyle_14dthe$ = function (ratio) {
    if (ratio === void 0)
      ratio = 0.0;
    var tmp$;
    var lineStyle = new SWFLineStyle();
    if (this.hasFillFlag) {
      lineStyle.fillType = ((tmp$ = this.fillType) != null ? tmp$ : Kotlin.throwNPE()).getMorphedFillStyle_14dthe$(ratio);
    }
     else {
      lineStyle.color = ColorUtils_getInstance().interpolate_224j3y$(this.startColor, this.endColor, ratio);
      lineStyle.width = this.startWidth + (this.endWidth - this.startWidth | 0) * ratio | 0;
    }
    lineStyle.startCapsStyle = this.startCapsStyle;
    lineStyle.endCapsStyle = this.endCapsStyle;
    lineStyle.jointStyle = this.jointStyle;
    lineStyle.hasFillFlag = this.hasFillFlag;
    lineStyle.noHScaleFlag = this.noHScaleFlag;
    lineStyle.noVScaleFlag = this.noVScaleFlag;
    lineStyle.pixelHintingFlag = this.pixelHintingFlag;
    lineStyle.noClose = this.noClose;
    lineStyle.miterLimitFactor = this.miterLimitFactor;
    return lineStyle;
  };
  SWFMorphLineStyle.prototype.toString = function () {
    return '[SWFMorphLineStyle] StartWidth: ' + this.startWidth + ', EndWidth: ' + this.endWidth + ', StartColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.startColor) + ', EndColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.endColor);
  };
  SWFMorphLineStyle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFMorphLineStyle',
    interfaces: []
  };
  function SWFMorphLineStyle2() {
    SWFMorphLineStyle.call(this);
  }
  SWFMorphLineStyle2.prototype.parse_rlw2mn$$default = function (data, level) {
    this.startWidth = data.readUI16();
    this.endWidth = data.readUI16();
    this.startCapsStyle = LineCapsStyle$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    this.jointStyle = data.readUB_za3lpa$(2);
    this.hasFillFlag = data.readUB_za3lpa$(1) === 1;
    this.noHScaleFlag = data.readUB_za3lpa$(1) === 1;
    this.noVScaleFlag = data.readUB_za3lpa$(1) === 1;
    this.pixelHintingFlag = data.readUB_za3lpa$(1) === 1;
    var reserved = data.readUB_za3lpa$(5);
    this.noClose = data.readUB_za3lpa$(1) === 1;
    this.endCapsStyle = LineCapsStyle$Companion_getInstance().get_za3lpa$(data.readUB_za3lpa$(2));
    if (this.jointStyle === LineJointStyle_getInstance().MITER)
      this.miterLimitFactor = data.readFIXED8();
    if (this.hasFillFlag) {
      this.fillType = data.readMORPHFILLSTYLE_za3lpa$(level);
    }
     else {
      this.startColor = data.readRGBA();
      this.endColor = data.readRGBA();
    }
  };
  SWFMorphLineStyle2.prototype.toString = function () {
    var str = '[SWFMorphLineStyle2] ' + 'StartWidth: ' + Kotlin.toString(this.startWidth) + ', ' + 'EndWidth: ' + Kotlin.toString(this.endWidth) + ', ' + 'StartCaps: ' + Kotlin.toString(this.startCapsStyle) + ', ' + 'EndCaps: ' + Kotlin.toString(this.endCapsStyle) + ', ' + 'Joint: ' + Kotlin.toString(this.jointStyle);
    if (this.hasFillFlag) {
      str += ', Fill: ' + Kotlin.toString(this.fillType);
    }
     else {
      str += ', StartColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.startColor);
      str += ', EndColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.endColor);
    }
    return str;
  };
  SWFMorphLineStyle2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFMorphLineStyle2',
    interfaces: [SWFMorphLineStyle]
  };
  function SWFRawTag() {
    this.header_s558zi$_0 = this.header_s558zi$_0;
    this.bytes_9u6mce$_0 = this.bytes_9u6mce$_0;
  }
  Object.defineProperty(SWFRawTag.prototype, 'header', {
    get: function () {
      if (this.header_s558zi$_0 == null)
        return Kotlin.throwUPAE('header');
      return this.header_s558zi$_0;
    },
    set: function (header) {
      this.header_s558zi$_0 = header;
    }
  });
  Object.defineProperty(SWFRawTag.prototype, 'bytes', {
    get: function () {
      if (this.bytes_9u6mce$_0 == null)
        return Kotlin.throwUPAE('bytes');
      return this.bytes_9u6mce$_0;
    },
    set: function (bytes) {
      this.bytes_9u6mce$_0 = bytes;
    }
  });
  SWFRawTag.prototype.parse_84a5z1$ = function (data) {
    var pos = data.position;
    this.header = data.readTagHeader();
    this.bytes = new SWFData();
    var posContent = data.position;
    data.position = pos;
    this.bytes.writeBytes_fqrh44$(data.readBytes_za3lpa$(this.header.tagLength));
    data.position = posContent;
  };
  SWFRawTag.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFRawTag',
    interfaces: []
  };
  function SWFRecordHeader(type, contentLength, headerLength) {
    this.type = type;
    this.contentLength = contentLength;
    this.headerLength = headerLength;
  }
  Object.defineProperty(SWFRecordHeader.prototype, 'tagLength', {
    get: function () {
      return this.headerLength + this.contentLength | 0;
    }
  });
  SWFRecordHeader.prototype.toString = function () {
    return '[SWFRecordHeader] type: ' + this.type + ', headerLength: ' + this.headerLength + ', contentlength: ' + this.contentLength;
  };
  SWFRecordHeader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFRecordHeader',
    interfaces: []
  };
  function SWFRectangle(xmin, xmax, ymin, ymax) {
    if (xmin === void 0)
      xmin = 0;
    if (xmax === void 0)
      xmax = 11000;
    if (ymin === void 0)
      ymin = 0;
    if (ymax === void 0)
      ymax = 8000;
    this.xmin = xmin;
    this.xmax = xmax;
    this.ymin = ymin;
    this.ymax = ymax;
    this._rectangle_0 = new Rectangle();
  }
  SWFRectangle.prototype.parse_84a5z1$ = function (data) {
    data.resetBitsPending();
    var bits = data.readUB_za3lpa$(5);
    this.xmin = data.readSB_za3lpa$(bits);
    this.xmax = data.readSB_za3lpa$(bits);
    this.ymin = data.readSB_za3lpa$(bits);
    this.ymax = data.readSB_za3lpa$(bits);
  };
  Object.defineProperty(SWFRectangle.prototype, 'rect', {
    get: function () {
      this._rectangle_0.left = NumberUtils_getInstance().roundPixels20_14dthe$(this.xmin / 20);
      this._rectangle_0.right = NumberUtils_getInstance().roundPixels20_14dthe$(this.xmax / 20);
      this._rectangle_0.top = NumberUtils_getInstance().roundPixels20_14dthe$(this.ymin / 20);
      this._rectangle_0.bottom = NumberUtils_getInstance().roundPixels20_14dthe$(this.ymax / 20);
      return this._rectangle_0;
    }
  });
  SWFRectangle.prototype.toString = function () {
    return '(' + this.xmin + ',' + this.xmax + ',' + this.ymin + ',' + this.ymax + ')';
  };
  SWFRectangle.prototype.toStringSize = function () {
    return '(' + Kotlin.toString((this.xmax - this.xmin | 0) / 20) + ',' + Kotlin.toString((this.ymax - this.ymin | 0) / 20) + ')';
  };
  SWFRectangle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFRectangle',
    interfaces: []
  };
  function SWFRegisterParam() {
    this.register = 0;
    this.name = null;
  }
  SWFRegisterParam.prototype.parse_84a5z1$ = function (data) {
    this.register = data.readUI8();
    this.name = data.readString();
  };
  SWFRegisterParam.prototype.toString = function () {
    return '$' + this.register + ':' + Kotlin.toString(this.name);
  };
  SWFRegisterParam.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFRegisterParam',
    interfaces: []
  };
  function SWFScene(offset, name) {
    this.offset = offset;
    this.name = name;
  }
  SWFScene.prototype.toString = function () {
    return 'Frame: ' + this.offset + ', Name: ' + this.name;
  };
  SWFScene.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFScene',
    interfaces: []
  };
  function SWFShape(unitDivisor) {
    if (unitDivisor === void 0)
      unitDivisor = 20.0;
    this.unitDivisor = unitDivisor;
    this.records = ArrayList_init();
    this.fillStyles = ArrayList_init();
    this.lineStyles = ArrayList_init();
    this.referencePoint = Vector2_init(0, 0);
    this.fillEdgeMaps = ArrayList_init();
    this.lineEdgeMaps = ArrayList_init();
    this.currentFillEdgeMap = HashMap_init();
    this.currentLineEdgeMap = HashMap_init();
    this.numGroups = 0;
    this.coordMap = HashMap_init();
    this.edgeMapsCreated = false;
  }
  SWFShape.prototype.parse_rlw2mn$$default = function (data, level) {
    data.resetBitsPending();
    var numFillBits = data.readUB_za3lpa$(4);
    var numLineBits = data.readUB_za3lpa$(4);
    this.readShapeRecords_hmgbw1$(data, numFillBits, numLineBits, level);
    this.determineReferencePoint();
  };
  SWFShape.prototype.parse_rlw2mn$ = function (data, level, callback$default) {
    if (level === void 0)
      level = 1;
    callback$default ? callback$default(data, level) : this.parse_rlw2mn$$default(data, level);
  };
  SWFShape.prototype.readShapeRecords_hmgbw1$ = function (data, _fillBits, _lineBits, level) {
    if (level === void 0)
      level = 1;
    var fillBits = _fillBits;
    var lineBits = _lineBits;
    var shapeRecord = null;
    while (!Kotlin.isType(shapeRecord, SWFShapeRecordEnd)) {
      var edgeRecord = data.readUB_za3lpa$(1) === 1;
      if (edgeRecord) {
        var straightFlag = data.readUB_za3lpa$(1) === 1;
        var numBits = data.readUB_za3lpa$(4) + 2 | 0;
        if (straightFlag) {
          shapeRecord = data.readSTRAIGHTEDGERECORD_za3lpa$(numBits);
        }
         else {
          shapeRecord = data.readCURVEDEDGERECORD_za3lpa$(numBits);
        }
      }
       else {
        var states = data.readUB_za3lpa$(5);
        if (states === 0) {
          shapeRecord = SWFShapeRecordEnd_getInstance();
        }
         else {
          var styleChangeRecord = data.readSTYLECHANGERECORD_tjonv8$(states, fillBits, lineBits, level);
          if (styleChangeRecord.stateNewStyles) {
            fillBits = styleChangeRecord.numFillBits;
            lineBits = styleChangeRecord.numLineBits;
          }
          shapeRecord = styleChangeRecord;
        }
      }
      this.records.add_11rb$(shapeRecord);
    }
  };
  SWFShape.prototype.determineReferencePoint = function () {
    var tmp$;
    var styleChangeRecord = (tmp$ = this.records.get_za3lpa$(0)) == null || Kotlin.isType(tmp$, SWFShapeRecordStyleChange) ? tmp$ : null;
    if (styleChangeRecord != null && styleChangeRecord.stateMoveTo) {
      this.referencePoint.x = NumberUtils_getInstance().roundPixels400_14dthe$(styleChangeRecord.moveDeltaX / this.unitDivisor);
      this.referencePoint.y = NumberUtils_getInstance().roundPixels400_14dthe$(styleChangeRecord.moveDeltaY / this.unitDivisor);
    }
  };
  SWFShape.prototype.export_dsznx3$ = function (_handler) {
    var tmp$;
    var handler = _handler;
    this.edgeMapsCreated = false;
    this.createEdgeMaps();
    handler.beginShape();
    tmp$ = this.numGroups;
    for (var i = 0; i < tmp$; i++) {
      this.exportFillPath_pu2qf$(handler, i);
      this.exportLinePath_pu2qf$(handler, i);
    }
    handler.endShape();
  };
  SWFShape.prototype.createEdgeMaps = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (!this.edgeMapsCreated) {
      var xPos = 0.0;
      var yPos = 0.0;
      var from;
      var to;
      var control;
      var fillStyleIdxOffset = 0;
      var lineStyleIdxOffset = 0;
      var currentFillStyleIdx0 = 0;
      var currentFillStyleIdx1 = 0;
      var currentLineStyleIdx = 0;
      var subPath = ArrayList_init();
      this.numGroups = 0;
      this.fillEdgeMaps = ArrayList_init();
      this.lineEdgeMaps = ArrayList_init();
      this.currentFillEdgeMap = HashMap_init();
      this.currentLineEdgeMap = HashMap_init();
      tmp$ = this.records.size;
      for (var i = 0; i < tmp$; i++) {
        var shapeRecord = this.records.get_za3lpa$(i);
        tmp$_0 = shapeRecord.type;
        if (tmp$_0 === SWFShapeRecord$Companion_getInstance().TYPE_STYLECHANGE) {
          var styleChangeRecord = Kotlin.isType(tmp$_1 = shapeRecord, SWFShapeRecordStyleChange) ? tmp$_1 : Kotlin.throwCCE();
          if (styleChangeRecord.stateLineStyle || styleChangeRecord.stateFillStyle0 || styleChangeRecord.stateFillStyle1) {
            this.processSubPath_s7quem$(subPath, currentLineStyleIdx, currentFillStyleIdx0, currentFillStyleIdx1);
            subPath = ArrayList_init();
          }
          if (styleChangeRecord.stateNewStyles) {
            fillStyleIdxOffset = this.fillStyles.size;
            lineStyleIdxOffset = this.lineStyles.size;
            this.fillStyles.addAll_brywnq$(styleChangeRecord.fillStyles);
            this.lineStyles.addAll_brywnq$(styleChangeRecord.lineStyles);
          }
          if (styleChangeRecord.stateLineStyle && styleChangeRecord.lineStyle === 0 && styleChangeRecord.stateFillStyle0 && styleChangeRecord.fillStyle0 === 0 && styleChangeRecord.stateFillStyle1 && styleChangeRecord.fillStyle1 === 0) {
            this.cleanEdgeMap_soe4k4$(this.currentFillEdgeMap);
            this.cleanEdgeMap_soe4k4$(this.currentLineEdgeMap);
            this.fillEdgeMaps.add_11rb$(this.currentFillEdgeMap);
            this.lineEdgeMaps.add_11rb$(this.currentLineEdgeMap);
            this.currentFillEdgeMap = HashMap_init();
            this.currentLineEdgeMap = HashMap_init();
            currentLineStyleIdx = 0;
            currentFillStyleIdx0 = 0;
            currentFillStyleIdx1 = 0;
            this.numGroups = this.numGroups + 1 | 0;
          }
           else {
            if (styleChangeRecord.stateLineStyle) {
              currentLineStyleIdx = styleChangeRecord.lineStyle;
              if (currentLineStyleIdx > 0)
                currentLineStyleIdx = currentLineStyleIdx + lineStyleIdxOffset | 0;
            }
            if (styleChangeRecord.stateFillStyle0) {
              currentFillStyleIdx0 = styleChangeRecord.fillStyle0;
              if (currentFillStyleIdx0 > 0)
                currentFillStyleIdx0 = currentFillStyleIdx0 + fillStyleIdxOffset | 0;
            }
            if (styleChangeRecord.stateFillStyle1) {
              currentFillStyleIdx1 = styleChangeRecord.fillStyle1;
              if (currentFillStyleIdx1 > 0)
                currentFillStyleIdx1 = currentFillStyleIdx1 + fillStyleIdxOffset | 0;
            }
          }
          if (styleChangeRecord.stateMoveTo) {
            xPos = styleChangeRecord.moveDeltaX / this.unitDivisor;
            yPos = styleChangeRecord.moveDeltaY / this.unitDivisor;
          }
        }
         else if (tmp$_0 === SWFShapeRecord$Companion_getInstance().TYPE_STRAIGHTEDGE) {
          var straightEdgeRecord = Kotlin.isType(tmp$_2 = shapeRecord, SWFShapeRecordStraightEdge) ? tmp$_2 : Kotlin.throwCCE();
          from = new Vector2(NumberUtils_getInstance().roundPixels400_14dthe$(xPos), NumberUtils_getInstance().roundPixels400_14dthe$(yPos));
          if (straightEdgeRecord.generalLineFlag) {
            xPos += straightEdgeRecord.deltaX / this.unitDivisor;
            yPos += straightEdgeRecord.deltaY / this.unitDivisor;
          }
           else {
            if (straightEdgeRecord.vertLineFlag) {
              yPos += straightEdgeRecord.deltaY / this.unitDivisor;
            }
             else {
              xPos += straightEdgeRecord.deltaX / this.unitDivisor;
            }
          }
          to = new Vector2(NumberUtils_getInstance().roundPixels400_14dthe$(xPos), NumberUtils_getInstance().roundPixels400_14dthe$(yPos));
          subPath.add_11rb$(new StraightEdge(from, to, currentLineStyleIdx, currentFillStyleIdx1));
        }
         else if (tmp$_0 === SWFShapeRecord$Companion_getInstance().TYPE_CURVEDEDGE) {
          var curvedEdgeRecord = Kotlin.isType(tmp$_3 = shapeRecord, SWFShapeRecordCurvedEdge) ? tmp$_3 : Kotlin.throwCCE();
          from = new Vector2(NumberUtils_getInstance().roundPixels400_14dthe$(xPos), NumberUtils_getInstance().roundPixels400_14dthe$(yPos));
          var xPosControl = xPos + curvedEdgeRecord.controlDeltaX / this.unitDivisor;
          var yPosControl = yPos + curvedEdgeRecord.controlDeltaY / this.unitDivisor;
          xPos = xPosControl + curvedEdgeRecord.anchorDeltaX / this.unitDivisor;
          yPos = yPosControl + curvedEdgeRecord.anchorDeltaY / this.unitDivisor;
          control = new Vector2(xPosControl, yPosControl);
          to = new Vector2(NumberUtils_getInstance().roundPixels400_14dthe$(xPos), NumberUtils_getInstance().roundPixels400_14dthe$(yPos));
          subPath.add_11rb$(new CurvedEdge(from, control, to, currentLineStyleIdx, currentFillStyleIdx1));
        }
         else if (tmp$_0 === SWFShapeRecord$Companion_getInstance().TYPE_END) {
          this.processSubPath_s7quem$(subPath, currentLineStyleIdx, currentFillStyleIdx0, currentFillStyleIdx1);
          this.cleanEdgeMap_soe4k4$(this.currentFillEdgeMap);
          this.cleanEdgeMap_soe4k4$(this.currentLineEdgeMap);
          this.fillEdgeMaps.add_11rb$(this.currentFillEdgeMap);
          this.lineEdgeMaps.add_11rb$(this.currentLineEdgeMap);
          this.numGroups = this.numGroups + 1 | 0;
        }
      }
      this.edgeMapsCreated = true;
    }
  };
  SWFShape.prototype.processSubPath_s7quem$ = function (subPath, lineStyleIdx, fillStyleIdx0, fillStyleIdx1) {
    var tmp$;
    if (fillStyleIdx0 !== 0) {
      var path = this.currentFillEdgeMap.get_11rb$(fillStyleIdx0);
      if (path == null) {
        path = ArrayList_init();
        var $receiver = this.currentFillEdgeMap;
        var value = path;
        $receiver.put_xwzc9p$(fillStyleIdx0, value);
      }
      tmp$ = subPath.size;
      for (var _j = 0; _j < tmp$; _j++) {
        var j = subPath.size - 1 - _j | 0;
        path.add_11rb$(subPath.get_za3lpa$(j).reverseWithNewFillStyle_za3lpa$(fillStyleIdx0));
      }
    }
    if (fillStyleIdx1 !== 0) {
      var path_0 = this.currentFillEdgeMap.get_11rb$(fillStyleIdx1);
      if (path_0 == null) {
        path_0 = ArrayList_init();
        var $receiver_0 = this.currentFillEdgeMap;
        var value_0 = path_0;
        $receiver_0.put_xwzc9p$(fillStyleIdx1, value_0);
      }
      path_0.addAll_brywnq$(subPath);
    }
    if (lineStyleIdx !== 0) {
      var path_1 = this.currentLineEdgeMap.get_11rb$(lineStyleIdx);
      if (path_1 == null) {
        path_1 = ArrayList_init();
        var $receiver_1 = this.currentLineEdgeMap;
        var value_1 = path_1;
        $receiver_1.put_xwzc9p$(lineStyleIdx, value_1);
      }
      path_1.addAll_brywnq$(subPath);
    }
  };
  SWFShape.prototype.exportFillPath_pu2qf$ = function (handler, groupIndex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var path = this.createPathFromEdgeMap_soe4k4$(this.fillEdgeMaps.get_za3lpa$(groupIndex));
    var pos = Vector2_init(IntCompanionObject.MAX_VALUE, IntCompanionObject.MAX_VALUE);
    var fillStyleIdx = IntCompanionObject.MAX_VALUE;
    if (path.size > 0) {
      handler.beginFills();
      tmp$ = path.size;
      for (var i = 0; i < tmp$; i++) {
        var e_0 = path.get_za3lpa$(i);
        if (fillStyleIdx !== e_0.fillStyleIdx) {
          if (fillStyleIdx !== IntCompanionObject.MAX_VALUE)
            handler.endFill();
          fillStyleIdx = e_0.fillStyleIdx;
          pos = Vector2_init(IntCompanionObject.MAX_VALUE, IntCompanionObject.MAX_VALUE);
          try {
            var matrix;
            var fillStyle = this.fillStyles.get_za3lpa$(fillStyleIdx - 1 | 0);
            tmp$_0 = fillStyle.type;
            if (tmp$_0 === 0)
              handler.beginFill_5wr77w$(ColorUtils_getInstance().rgb_za3lpa$(fillStyle.rgb), ColorUtils_getInstance().alpha_za3lpa$(fillStyle.rgb));
            else if (tmp$_0 === 16 || tmp$_0 === 18 || tmp$_0 === 19) {
              var colors = ArrayList_init();
              var alphas = ArrayList_init();
              var ratios = ArrayList_init();
              matrix = ((tmp$_1 = fillStyle.gradientMatrix) != null ? tmp$_1 : Kotlin.throwNPE()).matrix.clone();
              tmp$_3 = ((tmp$_2 = fillStyle.gradient) != null ? tmp$_2 : Kotlin.throwNPE()).records.size;
              for (var gri = 0; gri < tmp$_3; gri++) {
                var gradientRecord = ((tmp$_4 = fillStyle.gradient) != null ? tmp$_4 : Kotlin.throwNPE()).records.get_za3lpa$(gri);
                colors.add_11rb$(ColorUtils_getInstance().rgb_za3lpa$(gradientRecord.color));
                alphas.add_11rb$(ColorUtils_getInstance().alpha_za3lpa$(gradientRecord.color));
                ratios.add_11rb$(gradientRecord.ratio);
              }
              handler.beginGradientFill_gkeasy$(fillStyle.type === 16 ? GradientType$LINEAR_getInstance() : GradientType$RADIAL_getInstance(), colors, alphas, ratios, matrix, ((tmp$_5 = fillStyle.gradient) != null ? tmp$_5 : Kotlin.throwNPE()).spreadMode, ((tmp$_6 = fillStyle.gradient) != null ? tmp$_6 : Kotlin.throwNPE()).interpolationMode, ((tmp$_7 = fillStyle.gradient) != null ? tmp$_7 : Kotlin.throwNPE()).focalPoint);
            }
             else if (tmp$_0 === 64 || tmp$_0 === 65 || tmp$_0 === 66 || tmp$_0 === 67) {
              var m = (tmp$_8 = fillStyle.bitmapMatrix) != null ? tmp$_8 : Kotlin.throwNPE();
              matrix = new Matrix2d();
              matrix.createBox_1lq62i$(m.xscale / 20, m.yscale / 20, m.rotation, m.translateX / 20.0, m.translateY / 20.0);
              handler.beginBitmapFill_24bixh$(fillStyle.bitmapId, matrix, fillStyle.type === 64 || fillStyle.type === 66, fillStyle.type === 64 || fillStyle.type === 65);
            }
          }
           catch (e) {
            if (Kotlin.isType(e, Error_0)) {
              handler.beginFill_5wr77w$(0);
            }
             else
              throw e;
          }
        }
        if (!(pos != null ? pos.equals(e_0.from) : null))
          handler.moveTo_lu1900$(e_0.from.x, e_0.from.y);
        if (Kotlin.isType(e_0, CurvedEdge)) {
          var c = e_0;
          handler.curveTo_6y0v78$(c.control.x, c.control.y, c.to.x, c.to.y);
        }
         else {
          handler.lineTo_lu1900$(e_0.to.x, e_0.to.y);
        }
        pos = e_0.to;
      }
      if (fillStyleIdx !== IntCompanionObject.MAX_VALUE) {
        handler.endFill();
      }
      handler.endFills();
    }
  };
  SWFShape.prototype.exportLinePath_pu2qf$ = function (handler, groupIndex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    var path = this.createPathFromEdgeMap_soe4k4$(this.lineEdgeMaps.get_za3lpa$(groupIndex));
    var pos = Vector2_init(IntCompanionObject.MAX_VALUE, IntCompanionObject.MAX_VALUE);
    var lineStyleIdx = IntCompanionObject.MAX_VALUE;
    if (path.size > 0) {
      handler.beginLines();
      var basePoint = null;
      tmp$ = path.size;
      for (var i = 0; i < tmp$; i++) {
        var e_0 = path.get_za3lpa$(i);
        if (lineStyleIdx !== e_0.lineStyleIdx) {
          lineStyleIdx = e_0.lineStyleIdx;
          pos = Vector2_init(IntCompanionObject.MAX_VALUE, IntCompanionObject.MAX_VALUE);
          try {
            tmp$_0 = this.lineStyles.get_za3lpa$(lineStyleIdx - 1 | 0);
          }
           catch (e) {
            if (Kotlin.isType(e, Error_0)) {
              tmp$_0 = null;
            }
             else
              throw e;
          }
          var lineStyle = tmp$_0;
          if (lineStyle != null) {
            if (lineStyle.noHScaleFlag && lineStyle.noVScaleFlag)
              tmp$_1 = Context2d$ScaleMode.NONE;
            else if (lineStyle.noHScaleFlag)
              tmp$_1 = Context2d$ScaleMode.HORIZONTAL;
            else if (lineStyle.noVScaleFlag)
              tmp$_1 = Context2d$ScaleMode.VERTICAL;
            else
              tmp$_1 = Context2d$ScaleMode.NORMAL;
            var scaleMode = tmp$_1;
            handler.lineStyle_lp30oh$(lineStyle.width / 20, ColorUtils_getInstance().rgb_za3lpa$(lineStyle.color), ColorUtils_getInstance().alpha_za3lpa$(lineStyle.color), lineStyle.pixelHintingFlag, scaleMode, lineStyle.startCapsStyle, lineStyle.endCapsStyle, LineJointStyle_getInstance().toString_za3lpa$(lineStyle.jointStyle), lineStyle.miterLimitFactor);
            if (lineStyle.hasFillFlag) {
              var fillStyle = (tmp$_2 = lineStyle.fillType) != null ? tmp$_2 : Kotlin.throwNPE();
              tmp$_3 = fillStyle.type;
              if (tmp$_3 === 16 || tmp$_3 === 18 || tmp$_3 === 19) {
                var colors = ArrayList_init();
                var alphas = ArrayList_init();
                var ratios = ArrayList_init();
                var gradientRecord;
                var matrix = ((tmp$_4 = fillStyle.gradientMatrix) != null ? tmp$_4 : Kotlin.throwNPE()).matrix.clone();
                tmp$_6 = ((tmp$_5 = fillStyle.gradient) != null ? tmp$_5 : Kotlin.throwNPE()).records.size;
                for (var gri = 0; gri < tmp$_6; gri++) {
                  gradientRecord = ((tmp$_7 = fillStyle.gradient) != null ? tmp$_7 : Kotlin.throwNPE()).records.get_za3lpa$(gri);
                  colors.add_11rb$(ColorUtils_getInstance().rgb_za3lpa$(gradientRecord.color));
                  alphas.add_11rb$(ColorUtils_getInstance().alpha_za3lpa$(gradientRecord.color));
                  ratios.add_11rb$(gradientRecord.ratio);
                }
                handler.lineGradientStyle_gkeasy$(fillStyle.type === 16 ? GradientType$LINEAR_getInstance() : GradientType$RADIAL_getInstance(), colors, alphas, ratios, matrix, ((tmp$_8 = fillStyle.gradient) != null ? tmp$_8 : Kotlin.throwNPE()).spreadMode, ((tmp$_9 = fillStyle.gradient) != null ? tmp$_9 : Kotlin.throwNPE()).interpolationMode, ((tmp$_10 = fillStyle.gradient) != null ? tmp$_10 : Kotlin.throwNPE()).focalPoint);
              }
            }
          }
           else {
            handler.lineStyle_lp30oh$(0.0);
          }
        }
        if (!((tmp$_11 = e_0.from) != null ? tmp$_11.equals(pos) : null)) {
          basePoint = e_0.from;
          handler.moveTo_lu1900$(e_0.from.x, e_0.from.y);
        }
        if (Kotlin.isType(e_0, CurvedEdge)) {
          handler.curveTo_6y0v78$(e_0.control.x, e_0.control.y, e_0.to.x, e_0.to.y);
        }
         else {
          handler.lineTo_lu1900$(e_0.to.x, e_0.to.y);
        }
        if (Kotlin.equals(e_0.to, basePoint)) {
          handler.closePath();
        }
        pos = e_0.to;
      }
      handler.endLines();
    }
  };
  SWFShape.prototype.createPathFromEdgeMap_soe4k4$ = function (edgeMap) {
    var tmp$, tmp$_0, tmp$_1;
    var newPath = ArrayList_init();
    var styleIdxArray = ArrayList_init();
    tmp$ = edgeMap.keys.iterator();
    while (tmp$.hasNext()) {
      var styleIdx = tmp$.next();
      styleIdxArray.add_11rb$(styleIdx);
    }
    sort(styleIdxArray);
    tmp$_0 = styleIdxArray.size;
    for (var i = 0; i < tmp$_0; i++) {
      newPath.addAll_brywnq$(Kotlin.isType(tmp$_1 = edgeMap.get_11rb$(styleIdxArray.get_za3lpa$(i)), ArrayList) ? tmp$_1 : Kotlin.throwCCE());
    }
    return newPath;
  };
  SWFShape.prototype.cleanEdgeMap_soe4k4$ = function (edgeMap) {
    var tmp$, tmp$_0;
    tmp$ = edgeMap.keys.iterator();
    while (tmp$.hasNext()) {
      var styleIdx = tmp$.next();
      var subPath = edgeMap.get_11rb$(styleIdx);
      if (subPath != null && subPath.size > 0) {
        var prevEdge = null;
        var tmpPath = ArrayList_init();
        this.createCoordMap_3db8sc$(subPath);
        while (subPath.size > 0) {
          var idx = 0;
          while (idx < subPath.size) {
            if (prevEdge == null || ((tmp$_0 = prevEdge.to) != null ? tmp$_0.equals(subPath.get_za3lpa$(idx).from) : null)) {
              var edge = subPath.removeAt_za3lpa$(idx);
              tmpPath.add_11rb$(edge);
              this.removeEdgeFromCoordMap_hvh49j$(edge);
              prevEdge = edge;
            }
             else {
              var edge_0 = this.findNextEdgeInCoordMap_hvh49j$(prevEdge);
              if (edge_0 != null) {
                idx = subPath.indexOf_11rb$(edge_0);
              }
               else {
                idx = 0;
                prevEdge = null;
              }
            }
          }
        }
        edgeMap.put_xwzc9p$(styleIdx, tmpPath);
      }
    }
  };
  SWFShape.prototype.createCoordMap_3db8sc$ = function (path) {
    var tmp$;
    this.coordMap = HashMap_init();
    tmp$ = path.size;
    for (var i = 0; i < tmp$; i++) {
      var from = path.get_za3lpa$(i).from;
      var key = from.x.toString() + '_' + from.y;
      var coordMapArray = this.coordMap.get_11rb$(key);
      if (coordMapArray == null) {
        var $receiver = this.coordMap;
        var value = arrayListOf([path.get_za3lpa$(i)]);
        $receiver.put_xwzc9p$(key, value);
      }
       else {
        coordMapArray.add_11rb$(path.get_za3lpa$(i));
      }
    }
  };
  SWFShape.prototype.removeEdgeFromCoordMap_hvh49j$ = function (edge) {
    var key = '' + Kotlin.toString(edge.from.x) + '_' + Kotlin.toString(edge.from.y);
    var coordMapArray = this.coordMap.get_11rb$(key);
    if (coordMapArray != null) {
      if (coordMapArray.size === 1) {
        this.coordMap.remove_11rb$(key);
      }
       else {
        var i = coordMapArray.indexOf_11rb$(edge);
        if (i > -1)
          coordMapArray.removeAt_za3lpa$(i);
      }
    }
  };
  SWFShape.prototype.findNextEdgeInCoordMap_hvh49j$ = function (edge) {
    var coordMapArray = this.coordMap.get_11rb$(edge.to.x.toString() + '_' + edge.to.y);
    var tmp$ = coordMapArray != null;
    if (tmp$) {
      tmp$ = !coordMapArray.isEmpty();
    }
    return tmp$ ? coordMapArray.get_za3lpa$(0) : null;
  };
  SWFShape.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$;
    var str = '\n' + repeat(' ', indent) + 'ShapeRecords:';
    tmp$ = this.records.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 2 | 0) + '[' + Kotlin.toString(i) + '] ' + this.records.get_za3lpa$(i).toString();
    }
    return str;
  };
  SWFShape.prototype.toString_za3lpa$ = function (indent, callback$default) {
    if (indent === void 0)
      indent = 0;
    return callback$default ? callback$default(indent) : this.toString_za3lpa$$default(indent);
  };
  SWFShape.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFShape',
    interfaces: []
  };
  function SWFShapeRecord() {
    SWFShapeRecord$Companion_getInstance();
    this.type_z8ca6h$_0 = SWFShapeRecord$Companion_getInstance().TYPE_UNKNOWN;
  }
  function SWFShapeRecord$Companion() {
    SWFShapeRecord$Companion_instance = this;
    this.TYPE_UNKNOWN = 0;
    this.TYPE_END = 1;
    this.TYPE_STYLECHANGE = 2;
    this.TYPE_STRAIGHTEDGE = 3;
    this.TYPE_CURVEDEDGE = 4;
  }
  SWFShapeRecord$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SWFShapeRecord$Companion_instance = null;
  function SWFShapeRecord$Companion_getInstance() {
    if (SWFShapeRecord$Companion_instance === null) {
      new SWFShapeRecord$Companion();
    }
    return SWFShapeRecord$Companion_instance;
  }
  Object.defineProperty(SWFShapeRecord.prototype, 'type', {
    get: function () {
      return this.type_z8ca6h$_0;
    }
  });
  Object.defineProperty(SWFShapeRecord.prototype, 'isEdgeRecord', {
    get: function () {
      return this.type === SWFShapeRecord$Companion_getInstance().TYPE_STRAIGHTEDGE || this.type === SWFShapeRecord$Companion_getInstance().TYPE_CURVEDEDGE;
    }
  });
  SWFShapeRecord.prototype.parse_rlw2mn$$default = function (data, level) {
  };
  SWFShapeRecord.prototype.parse_rlw2mn$ = function (data, level, callback$default) {
    if (level === void 0)
      level = 1;
    callback$default ? callback$default(data, level) : this.parse_rlw2mn$$default(data, level);
  };
  SWFShapeRecord.prototype.toString = function () {
    return '[SWFShapeRecord]';
  };
  SWFShapeRecord.prototype.clone = function () {
    return new SWFShapeRecord();
  };
  SWFShapeRecord.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFShapeRecord',
    interfaces: []
  };
  function SWFShapeRecordCurvedEdge(numBits, controlDeltaX, controlDeltaY, anchorDeltaX, anchorDeltaY) {
    if (numBits === void 0)
      numBits = 0;
    if (controlDeltaX === void 0)
      controlDeltaX = 0;
    if (controlDeltaY === void 0)
      controlDeltaY = 0;
    if (anchorDeltaX === void 0)
      anchorDeltaX = 0;
    if (anchorDeltaY === void 0)
      anchorDeltaY = 0;
    SWFShapeRecord.call(this);
    this.numBits = numBits;
    this.controlDeltaX = controlDeltaX;
    this.controlDeltaY = controlDeltaY;
    this.anchorDeltaX = anchorDeltaX;
    this.anchorDeltaY = anchorDeltaY;
    this.type_w0dnqv$_0 = SWFShapeRecord$Companion_getInstance().TYPE_CURVEDEDGE;
  }
  SWFShapeRecordCurvedEdge.prototype.parse_rlw2mn$$default = function (data, level) {
    this.controlDeltaX = data.readSB_za3lpa$(this.numBits);
    this.controlDeltaY = data.readSB_za3lpa$(this.numBits);
    this.anchorDeltaX = data.readSB_za3lpa$(this.numBits);
    this.anchorDeltaY = data.readSB_za3lpa$(this.numBits);
  };
  Object.defineProperty(SWFShapeRecordCurvedEdge.prototype, 'type', {
    get: function () {
      return this.type_w0dnqv$_0;
    }
  });
  SWFShapeRecordCurvedEdge.prototype.toString = function () {
    return '[SWFShapeRecordCurvedEdge] ControlDelta: ' + this.controlDeltaX + ',' + this.controlDeltaY + ', AnchorDelta: ' + this.anchorDeltaX + ',' + this.anchorDeltaY;
  };
  SWFShapeRecordCurvedEdge.prototype.clone = function () {
    return this.copy_4qozqa$();
  };
  SWFShapeRecordCurvedEdge.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFShapeRecordCurvedEdge',
    interfaces: [SWFShapeRecord]
  };
  SWFShapeRecordCurvedEdge.prototype.component1 = function () {
    return this.numBits;
  };
  SWFShapeRecordCurvedEdge.prototype.component2 = function () {
    return this.controlDeltaX;
  };
  SWFShapeRecordCurvedEdge.prototype.component3 = function () {
    return this.controlDeltaY;
  };
  SWFShapeRecordCurvedEdge.prototype.component4 = function () {
    return this.anchorDeltaX;
  };
  SWFShapeRecordCurvedEdge.prototype.component5 = function () {
    return this.anchorDeltaY;
  };
  SWFShapeRecordCurvedEdge.prototype.copy_4qozqa$ = function (numBits, controlDeltaX, controlDeltaY, anchorDeltaX, anchorDeltaY) {
    return new SWFShapeRecordCurvedEdge(numBits === void 0 ? this.numBits : numBits, controlDeltaX === void 0 ? this.controlDeltaX : controlDeltaX, controlDeltaY === void 0 ? this.controlDeltaY : controlDeltaY, anchorDeltaX === void 0 ? this.anchorDeltaX : anchorDeltaX, anchorDeltaY === void 0 ? this.anchorDeltaY : anchorDeltaY);
  };
  SWFShapeRecordCurvedEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.numBits) | 0;
    result = result * 31 + Kotlin.hashCode(this.controlDeltaX) | 0;
    result = result * 31 + Kotlin.hashCode(this.controlDeltaY) | 0;
    result = result * 31 + Kotlin.hashCode(this.anchorDeltaX) | 0;
    result = result * 31 + Kotlin.hashCode(this.anchorDeltaY) | 0;
    return result;
  };
  SWFShapeRecordCurvedEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.numBits, other.numBits) && Kotlin.equals(this.controlDeltaX, other.controlDeltaX) && Kotlin.equals(this.controlDeltaY, other.controlDeltaY) && Kotlin.equals(this.anchorDeltaX, other.anchorDeltaX) && Kotlin.equals(this.anchorDeltaY, other.anchorDeltaY)))));
  };
  function SWFShapeRecordEnd() {
    SWFShapeRecordEnd_instance = this;
    SWFShapeRecord.call(this);
    this.type_r1b7ug$_0 = SWFShapeRecord$Companion_getInstance().TYPE_END;
  }
  Object.defineProperty(SWFShapeRecordEnd.prototype, 'type', {
    get: function () {
      return this.type_r1b7ug$_0;
    }
  });
  SWFShapeRecordEnd.prototype.toString = function () {
    return '[SWFShapeRecordEnd]';
  };
  SWFShapeRecordEnd.prototype.clone = function () {
    return this;
  };
  SWFShapeRecordEnd.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SWFShapeRecordEnd',
    interfaces: [SWFShapeRecord]
  };
  var SWFShapeRecordEnd_instance = null;
  function SWFShapeRecordEnd_getInstance() {
    if (SWFShapeRecordEnd_instance === null) {
      new SWFShapeRecordEnd();
    }
    return SWFShapeRecordEnd_instance;
  }
  function SWFShapeRecordStraightEdge(numBits, generalLineFlag, vertLineFlag, deltaY, deltaX) {
    if (numBits === void 0)
      numBits = 0;
    if (generalLineFlag === void 0)
      generalLineFlag = false;
    if (vertLineFlag === void 0)
      vertLineFlag = false;
    if (deltaY === void 0)
      deltaY = 0;
    if (deltaX === void 0)
      deltaX = 0;
    SWFShapeRecord.call(this);
    this.numBits = numBits;
    this.generalLineFlag = generalLineFlag;
    this.vertLineFlag = vertLineFlag;
    this.deltaY = deltaY;
    this.deltaX = deltaX;
    this.type_kqv1hu$_0 = SWFShapeRecord$Companion_getInstance().TYPE_STRAIGHTEDGE;
  }
  SWFShapeRecordStraightEdge.prototype.parse_rlw2mn$$default = function (data, level) {
    this.generalLineFlag = data.readUB_za3lpa$(1) === 1;
    this.vertLineFlag = !this.generalLineFlag ? data.readUB_za3lpa$(1) === 1 : false;
    this.deltaX = this.generalLineFlag || !this.vertLineFlag ? data.readSB_za3lpa$(this.numBits) : 0;
    this.deltaY = this.generalLineFlag || this.vertLineFlag ? data.readSB_za3lpa$(this.numBits) : 0;
  };
  Object.defineProperty(SWFShapeRecordStraightEdge.prototype, 'type', {
    get: function () {
      return this.type_kqv1hu$_0;
    }
  });
  SWFShapeRecordStraightEdge.prototype.toString = function () {
    var str = '[SWFShapeRecordStraightEdge] ';
    if (this.generalLineFlag) {
      str += 'General: ' + this.deltaX + ',' + this.deltaY;
    }
     else {
      if (this.vertLineFlag) {
        str += 'Vertical: ' + Kotlin.toString(this.deltaY);
      }
       else {
        str += 'Horizontal: ' + Kotlin.toString(this.deltaX);
      }
    }
    return str;
  };
  SWFShapeRecordStraightEdge.prototype.clone = function () {
    return this.copy_86ktky$();
  };
  SWFShapeRecordStraightEdge.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFShapeRecordStraightEdge',
    interfaces: [SWFShapeRecord]
  };
  SWFShapeRecordStraightEdge.prototype.component1 = function () {
    return this.numBits;
  };
  SWFShapeRecordStraightEdge.prototype.component2 = function () {
    return this.generalLineFlag;
  };
  SWFShapeRecordStraightEdge.prototype.component3 = function () {
    return this.vertLineFlag;
  };
  SWFShapeRecordStraightEdge.prototype.component4 = function () {
    return this.deltaY;
  };
  SWFShapeRecordStraightEdge.prototype.component5 = function () {
    return this.deltaX;
  };
  SWFShapeRecordStraightEdge.prototype.copy_86ktky$ = function (numBits, generalLineFlag, vertLineFlag, deltaY, deltaX) {
    return new SWFShapeRecordStraightEdge(numBits === void 0 ? this.numBits : numBits, generalLineFlag === void 0 ? this.generalLineFlag : generalLineFlag, vertLineFlag === void 0 ? this.vertLineFlag : vertLineFlag, deltaY === void 0 ? this.deltaY : deltaY, deltaX === void 0 ? this.deltaX : deltaX);
  };
  SWFShapeRecordStraightEdge.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.numBits) | 0;
    result = result * 31 + Kotlin.hashCode(this.generalLineFlag) | 0;
    result = result * 31 + Kotlin.hashCode(this.vertLineFlag) | 0;
    result = result * 31 + Kotlin.hashCode(this.deltaY) | 0;
    result = result * 31 + Kotlin.hashCode(this.deltaX) | 0;
    return result;
  };
  SWFShapeRecordStraightEdge.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.numBits, other.numBits) && Kotlin.equals(this.generalLineFlag, other.generalLineFlag) && Kotlin.equals(this.vertLineFlag, other.vertLineFlag) && Kotlin.equals(this.deltaY, other.deltaY) && Kotlin.equals(this.deltaX, other.deltaX)))));
  };
  function SWFShapeRecordStyleChange(states, numFillBits, numLineBits, moveDeltaX, moveDeltaY, fillStyle0, fillStyle1, lineStyle, fillStyles, lineStyles) {
    if (states === void 0)
      states = 0;
    if (numFillBits === void 0)
      numFillBits = 0;
    if (numLineBits === void 0)
      numLineBits = 0;
    if (moveDeltaX === void 0)
      moveDeltaX = 0;
    if (moveDeltaY === void 0)
      moveDeltaY = 0;
    if (fillStyle0 === void 0)
      fillStyle0 = 0;
    if (fillStyle1 === void 0)
      fillStyle1 = 0;
    if (lineStyle === void 0)
      lineStyle = 0;
    if (fillStyles === void 0)
      fillStyles = ArrayList_init();
    if (lineStyles === void 0)
      lineStyles = ArrayList_init();
    SWFShapeRecord.call(this);
    this.states = states;
    this.numFillBits = numFillBits;
    this.numLineBits = numLineBits;
    this.moveDeltaX = moveDeltaX;
    this.moveDeltaY = moveDeltaY;
    this.fillStyle0 = fillStyle0;
    this.fillStyle1 = fillStyle1;
    this.lineStyle = lineStyle;
    this.fillStyles = fillStyles;
    this.lineStyles = lineStyles;
    this.type_6ceay6$_0 = SWFShapeRecord$Companion_getInstance().TYPE_STYLECHANGE;
  }
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'stateNewStyles', {
    get: function () {
      return (this.states & 16) !== 0;
    }
  });
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'stateLineStyle', {
    get: function () {
      return (this.states & 8) !== 0;
    }
  });
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'stateFillStyle1', {
    get: function () {
      return (this.states & 4) !== 0;
    }
  });
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'stateFillStyle0', {
    get: function () {
      return (this.states & 2) !== 0;
    }
  });
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'stateMoveTo', {
    get: function () {
      return (this.states & 1) !== 0;
    }
  });
  Object.defineProperty(SWFShapeRecordStyleChange.prototype, 'type', {
    get: function () {
      return this.type_6ceay6$_0;
    }
  });
  SWFShapeRecordStyleChange.prototype.parse_rlw2mn$$default = function (data, level) {
    if (this.stateMoveTo) {
      var moveBits = data.readUB_za3lpa$(5);
      this.moveDeltaX = data.readSB_za3lpa$(moveBits);
      this.moveDeltaY = data.readSB_za3lpa$(moveBits);
    }
    this.fillStyle0 = this.stateFillStyle0 ? data.readUB_za3lpa$(this.numFillBits) : 0;
    this.fillStyle1 = this.stateFillStyle1 ? data.readUB_za3lpa$(this.numFillBits) : 0;
    this.lineStyle = this.stateLineStyle ? data.readUB_za3lpa$(this.numLineBits) : 0;
    if (this.stateNewStyles) {
      data.resetBitsPending();
      var fillStylesLen = this.readStyleArrayLength_0(data, level);
      for (var i = 0; i < fillStylesLen; i++) {
        this.fillStyles.add_11rb$(data.readFILLSTYLE_za3lpa$(level));
      }
      var lineStylesLen = this.readStyleArrayLength_0(data, level);
      for (var i_0 = 0; i_0 < lineStylesLen; i_0++) {
        this.lineStyles.add_11rb$(level <= 3 ? data.readLINESTYLE_za3lpa$(level) : data.readLINESTYLE2_za3lpa$(level));
      }
      data.resetBitsPending();
      this.numFillBits = data.readUB_za3lpa$(4);
      this.numLineBits = data.readUB_za3lpa$(4);
    }
  };
  SWFShapeRecordStyleChange.prototype.readStyleArrayLength_0 = function (data, level) {
    if (level === void 0)
      level = 1;
    var len = data.readUI8();
    if (level >= 2 && len === 255) {
      len = data.readUI16();
    }
    return len;
  };
  SWFShapeRecordStyleChange.prototype.toString = function () {
    var tmp$, tmp$_0;
    var indent = 0;
    var str = '[SWFShapeRecordStyleChange] ';
    var cmds = ArrayList_init();
    if (this.stateMoveTo)
      cmds.add_11rb$('MoveTo: ' + this.moveDeltaX + ',' + this.moveDeltaY);
    if (this.stateFillStyle0)
      cmds.add_11rb$('FillStyle0: ' + this.fillStyle0);
    if (this.stateFillStyle1)
      cmds.add_11rb$('FillStyle1: ' + this.fillStyle1);
    if (this.stateLineStyle)
      cmds.add_11rb$('LineStyle: ' + this.lineStyle);
    if (cmds.size > 0)
      str += joinToString(cmds, ', ');
    if (this.stateNewStyles) {
      if (this.fillStyles.size > 0) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'New FillStyles:';
        tmp$ = this.fillStyles.size;
        for (var i = 0; i < tmp$; i++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i + 1 | 0) + '] ' + this.fillStyles.get_za3lpa$(i).toString();
        }
      }
      if (this.lineStyles.size > 0) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'New LineStyles:';
        tmp$_0 = this.lineStyles.size;
        for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i_0 + 1 | 0) + '] ' + this.lineStyles.get_za3lpa$(i_0).toString();
        }
      }
    }
    return str;
  };
  SWFShapeRecordStyleChange.prototype.clone = function () {
    return this.copy_cyo3xn$();
  };
  SWFShapeRecordStyleChange.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFShapeRecordStyleChange',
    interfaces: [SWFShapeRecord]
  };
  SWFShapeRecordStyleChange.prototype.component1 = function () {
    return this.states;
  };
  SWFShapeRecordStyleChange.prototype.component2 = function () {
    return this.numFillBits;
  };
  SWFShapeRecordStyleChange.prototype.component3 = function () {
    return this.numLineBits;
  };
  SWFShapeRecordStyleChange.prototype.component4 = function () {
    return this.moveDeltaX;
  };
  SWFShapeRecordStyleChange.prototype.component5 = function () {
    return this.moveDeltaY;
  };
  SWFShapeRecordStyleChange.prototype.component6 = function () {
    return this.fillStyle0;
  };
  SWFShapeRecordStyleChange.prototype.component7 = function () {
    return this.fillStyle1;
  };
  SWFShapeRecordStyleChange.prototype.component8 = function () {
    return this.lineStyle;
  };
  SWFShapeRecordStyleChange.prototype.component9 = function () {
    return this.fillStyles;
  };
  SWFShapeRecordStyleChange.prototype.component10 = function () {
    return this.lineStyles;
  };
  SWFShapeRecordStyleChange.prototype.copy_cyo3xn$ = function (states, numFillBits, numLineBits, moveDeltaX, moveDeltaY, fillStyle0, fillStyle1, lineStyle, fillStyles, lineStyles) {
    return new SWFShapeRecordStyleChange(states === void 0 ? this.states : states, numFillBits === void 0 ? this.numFillBits : numFillBits, numLineBits === void 0 ? this.numLineBits : numLineBits, moveDeltaX === void 0 ? this.moveDeltaX : moveDeltaX, moveDeltaY === void 0 ? this.moveDeltaY : moveDeltaY, fillStyle0 === void 0 ? this.fillStyle0 : fillStyle0, fillStyle1 === void 0 ? this.fillStyle1 : fillStyle1, lineStyle === void 0 ? this.lineStyle : lineStyle, fillStyles === void 0 ? this.fillStyles : fillStyles, lineStyles === void 0 ? this.lineStyles : lineStyles);
  };
  SWFShapeRecordStyleChange.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.states) | 0;
    result = result * 31 + Kotlin.hashCode(this.numFillBits) | 0;
    result = result * 31 + Kotlin.hashCode(this.numLineBits) | 0;
    result = result * 31 + Kotlin.hashCode(this.moveDeltaX) | 0;
    result = result * 31 + Kotlin.hashCode(this.moveDeltaY) | 0;
    result = result * 31 + Kotlin.hashCode(this.fillStyle0) | 0;
    result = result * 31 + Kotlin.hashCode(this.fillStyle1) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineStyle) | 0;
    result = result * 31 + Kotlin.hashCode(this.fillStyles) | 0;
    result = result * 31 + Kotlin.hashCode(this.lineStyles) | 0;
    return result;
  };
  SWFShapeRecordStyleChange.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.states, other.states) && Kotlin.equals(this.numFillBits, other.numFillBits) && Kotlin.equals(this.numLineBits, other.numLineBits) && Kotlin.equals(this.moveDeltaX, other.moveDeltaX) && Kotlin.equals(this.moveDeltaY, other.moveDeltaY) && Kotlin.equals(this.fillStyle0, other.fillStyle0) && Kotlin.equals(this.fillStyle1, other.fillStyle1) && Kotlin.equals(this.lineStyle, other.lineStyle) && Kotlin.equals(this.fillStyles, other.fillStyles) && Kotlin.equals(this.lineStyles, other.lineStyles)))));
  };
  function SWFShapeWithStyle(unitDivisor) {
    if (unitDivisor === void 0)
      unitDivisor = 20.0;
    SWFShape.call(this, unitDivisor);
    this.initialFillStyles = ArrayList_init();
    this.initialLineStyles = ArrayList_init();
  }
  SWFShapeWithStyle.prototype.parse_rlw2mn$$default = function (data, level) {
    var tmp$, tmp$_0;
    data.resetBitsPending();
    tmp$ = this.readStyleArrayLength_0(data, level);
    for (var i = 0; i < tmp$; i++)
      this.initialFillStyles.add_11rb$(data.readFILLSTYLE_za3lpa$(level));
    tmp$_0 = this.readStyleArrayLength_0(data, level);
    for (var i_0 = 0; i_0 < tmp$_0; i_0++)
      this.initialLineStyles.add_11rb$(level <= 3 ? data.readLINESTYLE_za3lpa$(level) : data.readLINESTYLE2_za3lpa$(level));
    data.resetBitsPending();
    var numFillBits = data.readUB_za3lpa$(4);
    var numLineBits = data.readUB_za3lpa$(4);
    this.readShapeRecords_hmgbw1$(data, numFillBits, numLineBits, level);
  };
  SWFShapeWithStyle.prototype.export_dsznx3$ = function (_handler) {
    this.fillStyles = ArrayList_init_0(this.initialFillStyles);
    this.lineStyles = ArrayList_init_0(this.initialLineStyles);
    SWFShape.prototype.export_dsznx3$.call(this, _handler);
  };
  SWFShapeWithStyle.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$, tmp$_0;
    var str = '';
    if (this.initialFillStyles.size > 0) {
      str += '\n' + repeat(' ', indent) + 'FillStyles:';
      tmp$ = this.initialFillStyles.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + Kotlin.toString(i + 1 | 0) + '] ' + this.initialFillStyles.get_za3lpa$(i).toString();
      }
    }
    if (this.initialLineStyles.size > 0) {
      str += '\n' + repeat(' ', indent) + 'LineStyles:';
      tmp$_0 = this.initialLineStyles.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + Kotlin.toString(i_0 + 1 | 0) + '] ' + this.initialLineStyles.get_za3lpa$(i_0).toString();
      }
    }
    return str + this.toString_za3lpa$(indent, SWFShape.prototype.toString_za3lpa$$default.bind(this));
  };
  SWFShapeWithStyle.prototype.readStyleArrayLength_0 = function (data, level) {
    if (level === void 0)
      level = 1;
    var len = data.readUI8();
    if (level >= 2 && len === 255)
      len = data.readUI16();
    return len;
  };
  SWFShapeWithStyle.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFShapeWithStyle',
    interfaces: [SWFShape]
  };
  function SWFSoundEnvelope(pos44, leftLevel, rightLevel) {
    if (pos44 === void 0)
      pos44 = 0;
    if (leftLevel === void 0)
      leftLevel = 0;
    if (rightLevel === void 0)
      rightLevel = 0;
    this.pos44 = pos44;
    this.leftLevel = leftLevel;
    this.rightLevel = rightLevel;
  }
  SWFSoundEnvelope.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFSoundEnvelope',
    interfaces: []
  };
  function SWFSoundEnvelope_init(data, $this) {
    $this = $this || Object.create(SWFSoundEnvelope.prototype);
    SWFSoundEnvelope.call($this, data.readUI32(), data.readUI16(), data.readUI16());
    return $this;
  }
  SWFSoundEnvelope.prototype.component1 = function () {
    return this.pos44;
  };
  SWFSoundEnvelope.prototype.component2 = function () {
    return this.leftLevel;
  };
  SWFSoundEnvelope.prototype.component3 = function () {
    return this.rightLevel;
  };
  SWFSoundEnvelope.prototype.copy_qt1dr2$ = function (pos44, leftLevel, rightLevel) {
    return new SWFSoundEnvelope(pos44 === void 0 ? this.pos44 : pos44, leftLevel === void 0 ? this.leftLevel : leftLevel, rightLevel === void 0 ? this.rightLevel : rightLevel);
  };
  SWFSoundEnvelope.prototype.toString = function () {
    return 'SWFSoundEnvelope(pos44=' + Kotlin.toString(this.pos44) + (', leftLevel=' + Kotlin.toString(this.leftLevel)) + (', rightLevel=' + Kotlin.toString(this.rightLevel)) + ')';
  };
  SWFSoundEnvelope.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.pos44) | 0;
    result = result * 31 + Kotlin.hashCode(this.leftLevel) | 0;
    result = result * 31 + Kotlin.hashCode(this.rightLevel) | 0;
    return result;
  };
  SWFSoundEnvelope.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.pos44, other.pos44) && Kotlin.equals(this.leftLevel, other.leftLevel) && Kotlin.equals(this.rightLevel, other.rightLevel)))));
  };
  function SWFSoundInfo() {
    this.syncStop = false;
    this.syncNoMultiple = false;
    this.hasEnvelope = false;
    this.hasLoops = false;
    this.hasOutPoint = false;
    this.hasInPoint = false;
    this.outPoint = 0;
    this.inPoint = 0;
    this.loopCount = 0;
    this.envelopeRecords = ArrayList_init();
  }
  SWFSoundInfo.prototype.parse_84a5z1$ = function (data) {
    var flags = data.readUI8();
    this.syncStop = (flags & 32) !== 0;
    this.syncNoMultiple = (flags & 16) !== 0;
    this.hasEnvelope = (flags & 8) !== 0;
    this.hasLoops = (flags & 4) !== 0;
    this.hasOutPoint = (flags & 2) !== 0;
    this.hasInPoint = (flags & 1) !== 0;
    if (this.hasInPoint)
      this.inPoint = data.readUI32();
    if (this.hasOutPoint)
      this.outPoint = data.readUI32();
    if (this.hasLoops)
      this.loopCount = data.readUI16();
    if (this.hasEnvelope) {
      var envPoints = data.readUI8();
      for (var i = 0; i < envPoints; i++)
        this.envelopeRecords.add_11rb$(data.readSOUNDENVELOPE());
    }
  };
  SWFSoundInfo.prototype.toString = function () {
    return '[SWFSoundInfo]';
  };
  SWFSoundInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFSoundInfo',
    interfaces: []
  };
  function SWFSymbol(tagId, name) {
    if (tagId === void 0)
      tagId = 0;
    if (name === void 0)
      name = null;
    this.tagId = tagId;
    this.name = name;
  }
  SWFSymbol.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFSymbol',
    interfaces: []
  };
  function SWFSymbol_init(data, $this) {
    $this = $this || Object.create(SWFSymbol.prototype);
    SWFSymbol.call($this, data.readUI16(), data.readString());
    return $this;
  }
  SWFSymbol.prototype.component1 = function () {
    return this.tagId;
  };
  SWFSymbol.prototype.component2 = function () {
    return this.name;
  };
  SWFSymbol.prototype.copy_vqvrqt$ = function (tagId, name) {
    return new SWFSymbol(tagId === void 0 ? this.tagId : tagId, name === void 0 ? this.name : name);
  };
  SWFSymbol.prototype.toString = function () {
    return 'SWFSymbol(tagId=' + Kotlin.toString(this.tagId) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  SWFSymbol.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.tagId) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  SWFSymbol.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.tagId, other.tagId) && Kotlin.equals(this.name, other.name)))));
  };
  function SWFTextRecord() {
    this.type = 0;
    this.hasFont = false;
    this.hasColor = false;
    this.hasXOffset = false;
    this.hasYOffset = false;
    this.fontId = 0;
    this.textColor = 0;
    this.textHeight = 0;
    this.xOffset = 0;
    this.yOffset = 0;
    this.glyphEntries = ArrayList_init();
    this._level_0 = 0;
  }
  SWFTextRecord.prototype.parse_apbl93$ = function (data, glyphBits, advanceBits, previousRecord, level) {
    if (previousRecord === void 0)
      previousRecord = null;
    if (level === void 0)
      level = 1;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this._level_0 = level;
    var styles = data.readUI8();
    this.type = styles >>> 7;
    this.hasFont = (styles & 8) !== 0;
    this.hasColor = (styles & 4) !== 0;
    this.hasYOffset = (styles & 2) !== 0;
    this.hasXOffset = (styles & 1) !== 0;
    this.fontId = this.hasFont ? data.readUI16() : (tmp$ = previousRecord != null ? previousRecord.fontId : null) != null ? tmp$ : this.fontId;
    this.textColor = this.hasColor ? level < 2 ? data.readRGB() : data.readRGBA() : (tmp$_0 = previousRecord != null ? previousRecord.textColor : null) != null ? tmp$_0 : this.textColor;
    this.xOffset = this.hasXOffset ? data.readSI16() : (tmp$_1 = previousRecord != null ? previousRecord.xOffset : null) != null ? tmp$_1 : this.xOffset;
    this.yOffset = this.hasYOffset ? data.readSI16() : (tmp$_2 = previousRecord != null ? previousRecord.yOffset : null) != null ? tmp$_2 : this.yOffset;
    this.textHeight = this.hasFont ? data.readUI16() : (tmp$_3 = previousRecord != null ? previousRecord.textHeight : null) != null ? tmp$_3 : this.textHeight;
    tmp$_4 = data.readUI8();
    for (var i = 0; i < tmp$_4; i++)
      this.glyphEntries.add_11rb$(data.readGLYPHENTRY_vux9f0$(glyphBits, advanceBits));
  };
  SWFTextRecord.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    var tmp$;
    var params = arrayListOf(['Glyphs: ' + this.glyphEntries.size.toString()]);
    if (this.hasFont)
      params.add_11rb$('FontID: ' + Kotlin.toString(this.fontId));
    params.add_11rb$('Height: ' + Kotlin.toString(this.textHeight));
    if (this.hasColor)
      params.add_11rb$('Color: ' + (this._level_0 <= 2 ? ColorUtils_getInstance().rgbToString_za3lpa$(this.textColor) : ColorUtils_getInstance().rgbaToString_za3lpa$(this.textColor)));
    if (this.hasXOffset)
      params.add_11rb$('XOffset: ' + Kotlin.toString(this.xOffset));
    if (this.hasYOffset)
      params.add_11rb$('YOffset: ' + Kotlin.toString(this.yOffset));
    var str = joinToString(params, ', ');
    tmp$ = this.glyphEntries.size;
    for (var i = 0; i < tmp$; i++)
      str += '\n' + repeat(' ', indent + 2 | 0) + '[' + Kotlin.toString(i) + '] ' + this.glyphEntries.get_za3lpa$(i).toString();
    return str;
  };
  SWFTextRecord.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFTextRecord',
    interfaces: []
  };
  function SWFZoneData(alignmentCoordinate, range) {
    this.alignmentCoordinate = alignmentCoordinate;
    this.range = range;
  }
  SWFZoneData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFZoneData',
    interfaces: []
  };
  function SWFZoneData_init(data, $this) {
    $this = $this || Object.create(SWFZoneData.prototype);
    SWFZoneData.call($this, data.readFLOAT16(), data.readFLOAT16());
    return $this;
  }
  SWFZoneData.prototype.component1 = function () {
    return this.alignmentCoordinate;
  };
  SWFZoneData.prototype.component2 = function () {
    return this.range;
  };
  SWFZoneData.prototype.copy_lu1900$ = function (alignmentCoordinate, range) {
    return new SWFZoneData(alignmentCoordinate === void 0 ? this.alignmentCoordinate : alignmentCoordinate, range === void 0 ? this.range : range);
  };
  SWFZoneData.prototype.toString = function () {
    return 'SWFZoneData(alignmentCoordinate=' + Kotlin.toString(this.alignmentCoordinate) + (', range=' + Kotlin.toString(this.range)) + ')';
  };
  SWFZoneData.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.alignmentCoordinate) | 0;
    result = result * 31 + Kotlin.hashCode(this.range) | 0;
    return result;
  };
  SWFZoneData.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.alignmentCoordinate, other.alignmentCoordinate) && Kotlin.equals(this.range, other.range)))));
  };
  function SWFZoneRecord(zoneData, mask) {
    this.zoneData = zoneData;
    this.mask = mask;
  }
  Object.defineProperty(SWFZoneRecord.prototype, 'maskX', {
    get: function () {
      return (this.mask & 1) !== 0;
    }
  });
  Object.defineProperty(SWFZoneRecord.prototype, 'maskY', {
    get: function () {
      return (this.mask & 2) !== 0;
    }
  });
  SWFZoneRecord.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFZoneRecord',
    interfaces: []
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function SWFZoneRecord_init(data, $this) {
    $this = $this || Object.create(SWFZoneRecord.prototype);
    var $receiver = until(0, data.readUI8());
    data;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(data.readZONEDATA());
    }
    SWFZoneRecord.call($this, destination, data.readUI8());
    return $this;
  }
  function GradientType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function GradientType_initFields() {
    GradientType_initFields = function () {
    };
    GradientType$LINEAR_instance = new GradientType('LINEAR', 0);
    GradientType$RADIAL_instance = new GradientType('RADIAL', 1);
  }
  var GradientType$LINEAR_instance;
  function GradientType$LINEAR_getInstance() {
    GradientType_initFields();
    return GradientType$LINEAR_instance;
  }
  var GradientType$RADIAL_instance;
  function GradientType$RADIAL_getInstance() {
    GradientType_initFields();
    return GradientType$RADIAL_instance;
  }
  GradientType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GradientType',
    interfaces: [Enum]
  };
  function GradientType$values() {
    return [GradientType$LINEAR_getInstance(), GradientType$RADIAL_getInstance()];
  }
  GradientType.values = GradientType$values;
  function GradientType$valueOf(name) {
    switch (name) {
      case 'LINEAR':
        return GradientType$LINEAR_getInstance();
      case 'RADIAL':
        return GradientType$RADIAL_getInstance();
      default:Kotlin.throwISE('No enum constant com.codeazur.as3swf.data.GradientType.' + name);
    }
  }
  GradientType.valueOf_61zpoe$ = GradientType$valueOf;
  function CurvedEdge(aFrom, control, aTo, aLineStyleIdx, aFillStyleIdx) {
    if (aLineStyleIdx === void 0)
      aLineStyleIdx = 0;
    if (aFillStyleIdx === void 0)
      aFillStyleIdx = 0;
    StraightEdge.call(this, aFrom, aTo, aLineStyleIdx, aFillStyleIdx);
    this.control = control;
  }
  CurvedEdge.prototype.reverseWithNewFillStyle_za3lpa$ = function (newFillStyleIdx) {
    return new CurvedEdge(this.to, this.control, this.from, this.lineStyleIdx, newFillStyleIdx);
  };
  CurvedEdge.prototype.toString = function () {
    return 'stroke:' + this.lineStyleIdx + ', fill:' + this.fillStyleIdx + ', start:' + this.from + ', control:' + this.control + ', end:' + this.to;
  };
  CurvedEdge.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'CurvedEdge',
    interfaces: [StraightEdge, IEdge]
  };
  function StraightEdge(from, to, lineStyleIdx, fillStyleIdx) {
    if (lineStyleIdx === void 0)
      lineStyleIdx = 0;
    if (fillStyleIdx === void 0)
      fillStyleIdx = 0;
    this.from_h0f8fs$_0 = from;
    this.to_wrehih$_0 = to;
    this.lineStyleIdx_am547m$_0 = lineStyleIdx;
    this.fillStyleIdx_5duz1f$_0 = fillStyleIdx;
  }
  Object.defineProperty(StraightEdge.prototype, 'from', {
    get: function () {
      return this.from_h0f8fs$_0;
    },
    set: function (from) {
      this.from_h0f8fs$_0 = from;
    }
  });
  Object.defineProperty(StraightEdge.prototype, 'to', {
    get: function () {
      return this.to_wrehih$_0;
    },
    set: function (to) {
      this.to_wrehih$_0 = to;
    }
  });
  Object.defineProperty(StraightEdge.prototype, 'lineStyleIdx', {
    get: function () {
      return this.lineStyleIdx_am547m$_0;
    },
    set: function (lineStyleIdx) {
      this.lineStyleIdx_am547m$_0 = lineStyleIdx;
    }
  });
  Object.defineProperty(StraightEdge.prototype, 'fillStyleIdx', {
    get: function () {
      return this.fillStyleIdx_5duz1f$_0;
    },
    set: function (fillStyleIdx) {
      this.fillStyleIdx_5duz1f$_0 = fillStyleIdx;
    }
  });
  StraightEdge.prototype.reverseWithNewFillStyle_za3lpa$ = function (newFillStyleIdx) {
    return new StraightEdge(this.to, this.from, this.lineStyleIdx, newFillStyleIdx);
  };
  StraightEdge.prototype.toString = function () {
    return 'stroke:' + this.lineStyleIdx + ', fill:' + this.fillStyleIdx + ', start:' + this.from + ', end:' + this.to;
  };
  StraightEdge.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'StraightEdge',
    interfaces: [IEdge]
  };
  function IEdge() {
  }
  IEdge.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IEdge',
    interfaces: []
  };
  function MPEGFrame(data) {
    MPEGFrame$Companion_getInstance();
    if (data === void 0)
      data = new FlashByteArray();
    this.data = data;
    this.version = 0;
    this.layer = 0;
    this.bitrate = 0;
    this.samplingrate = 0;
    this.padding = false;
    this.channelMode = 0;
    this.channelModeExt = 0;
    this.copyright = false;
    this.original = false;
    this.emphasis = 0;
    this._header = new FlashByteArray();
    this._crc = null;
    this.hasCRC = false;
    this.samples = 1152;
    this._header.writeByte_za3lpa$(0);
    this._header.writeByte_za3lpa$(0);
    this._header.writeByte_za3lpa$(0);
    this._header.writeByte_za3lpa$(0);
    this._crc = new FlashByteArray();
    this._crc.writeByte_za3lpa$(0);
    this._crc.writeByte_za3lpa$(0);
  }
  function MPEGFrame$Companion() {
    MPEGFrame$Companion_instance = this;
    this.MPEG_VERSION_1_0 = 0;
    this.MPEG_VERSION_2_0 = 1;
    this.MPEG_VERSION_2_5 = 2;
    this.MPEG_LAYER_I = 0;
    this.MPEG_LAYER_II = 1;
    this.MPEG_LAYER_III = 2;
    this.CHANNEL_MODE_STEREO = 0;
    this.CHANNEL_MODE_JOINT_STEREO = 1;
    this.CHANNEL_MODE_DUAL = 2;
    this.CHANNEL_MODE_MONO = 3;
    this.mpegBitrates_0 = listOf([listOf([listOf([0, 32, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448, -1]), listOf([0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384, -1]), listOf([0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1])]), listOf([listOf([0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256, -1]), listOf([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1]), listOf([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1])])]);
    this.mpegSamplingRates_0 = listOf([listOf([44100, 48000, 32000]), listOf([22050, 24000, 16000]), listOf([11025, 12000, 8000])]);
  }
  MPEGFrame$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MPEGFrame$Companion_instance = null;
  function MPEGFrame$Companion_getInstance() {
    if (MPEGFrame$Companion_instance === null) {
      new MPEGFrame$Companion();
    }
    return MPEGFrame$Companion_instance;
  }
  Object.defineProperty(MPEGFrame.prototype, 'crc', {
    get: function () {
      this._crc.position = 0;
      return this._crc.readUnsignedShort();
    }
  });
  Object.defineProperty(MPEGFrame.prototype, 'size', {
    get: function () {
      var ret;
      if (this.layer === MPEGFrame$Companion_getInstance().MPEG_LAYER_I) {
        var a = 12000.0 * this.bitrate / this.samplingrate;
        ret = Math_0.floor(a) | 0;
        if (this.padding) {
          ret = ret + 1 | 0;
        }
        ret = ret << 2;
      }
       else {
        var a_0 = (this.version === MPEGFrame$Companion_getInstance().MPEG_VERSION_1_0 ? 144000.0 : 72000.0) * this.bitrate / this.samplingrate;
        ret = Math_0.floor(a_0) | 0;
        if (this.padding) {
          ret = ret + 1 | 0;
        }
      }
      return ret - 4 - (this.hasCRC ? 2 : 0) | 0;
    }
  });
  MPEGFrame.prototype.setHeaderByteAt_vux9f0$ = function (index, value) {
    if (index === 0) {
      if (value !== 255)
        throw new Error_0('Not a MPEG header.');
    }
     else if (index === 1) {
      if ((value & 224) !== 224)
        throw new Error_0('Not a MPEG header.');
      var mpegVersionBits = (value & 24) >>> 3;
      if (mpegVersionBits === 3)
        this.version = MPEGFrame$Companion_getInstance().MPEG_VERSION_1_0;
      else if (mpegVersionBits === 2)
        this.version = MPEGFrame$Companion_getInstance().MPEG_VERSION_2_0;
      else
        throw new Error_0('Unsupported MPEG version.');
      var mpegLayerBits = (value & 6) >>> 1;
      if (mpegLayerBits === 1)
        this.layer = MPEGFrame$Companion_getInstance().MPEG_LAYER_III;
      else
        throw new Error_0('Unsupported MPEG layer.');
      this.hasCRC = (value & 1) === 0;
    }
     else if (index === 2) {
      var bitrateIndex = (value & 240) >>> 4;
      if (bitrateIndex === 0 || bitrateIndex === 15) {
        throw new Error_0('Unsupported bitrate index.');
      }
      this.bitrate = MPEGFrame$Companion_getInstance().mpegBitrates_0.get_za3lpa$(this.version).get_za3lpa$(this.layer).get_za3lpa$(bitrateIndex);
      var samplingrateIndex = (value & 12) >>> 2;
      if (samplingrateIndex === 3) {
        throw new Error_0('Unsupported samplingrate index.');
      }
      this.samplingrate = MPEGFrame$Companion_getInstance().mpegSamplingRates_0.get_za3lpa$(this.version).get_za3lpa$(samplingrateIndex);
      this.padding = (value & 2) === 2;
    }
     else if (index === 3) {
      this.channelMode = (value & 192) >>> 6;
      this.channelModeExt = (value & 48) >>> 4;
      this.copyright = (value & 8) === 8;
      this.original = (value & 4) === 4;
      this.emphasis = value & 2;
    }
     else
      throw new Error_0('Index out of bounds.');
    this._header.set_vux9f0$(index, value);
  };
  MPEGFrame.prototype.setCRCByteAt_vux9f0$ = function (index, value) {
    if (index > 1) {
      throw new Error_0('Index out of bounds.');
    }
    this._crc.set_vux9f0$(index, value);
  };
  MPEGFrame.prototype.getFrame = function () {
    var ba = new FlashByteArray();
    ba.writeBytes_5zge5p$(this._header, 0, 4);
    if (this.hasCRC) {
      ba.writeBytes_5zge5p$(this._crc, 0, 2);
    }
    ba.writeBytes_5zge5p$(this.data);
    return ba;
  };
  MPEGFrame.prototype.toString = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var str = 'MPEG ';
    tmp$_1 = str;
    tmp$ = this.version;
    if (tmp$ === MPEGFrame$Companion_getInstance().MPEG_VERSION_1_0)
      tmp$_0 = '1.0 ';
    else if (tmp$ === MPEGFrame$Companion_getInstance().MPEG_VERSION_2_0)
      tmp$_0 = '2.0 ';
    else if (tmp$ === MPEGFrame$Companion_getInstance().MPEG_VERSION_2_5)
      tmp$_0 = '2.5 ';
    else
      tmp$_0 = '?.? ';
    str = tmp$_1 + tmp$_0;
    tmp$_4 = str;
    tmp$_2 = this.layer;
    if (tmp$_2 === MPEGFrame$Companion_getInstance().MPEG_LAYER_I)
      tmp$_3 = 'Layer I';
    else if (tmp$_2 === MPEGFrame$Companion_getInstance().MPEG_LAYER_II)
      tmp$_3 = 'Layer II';
    else if (tmp$_2 === MPEGFrame$Companion_getInstance().MPEG_LAYER_III)
      tmp$_3 = 'Layer III';
    else
      tmp$_3 = 'Layer ?';
    str = tmp$_4 + tmp$_3;
    tmp$_5 = this.channelMode;
    if (tmp$_5 === 0)
      tmp$_6 = 'Stereo';
    else if (tmp$_5 === 1)
      tmp$_6 = 'Joint stereo';
    else if (tmp$_5 === 2)
      tmp$_6 = 'Dual channel';
    else if (tmp$_5 === 3)
      tmp$_6 = 'Mono';
    else
      tmp$_6 = 'unknown';
    var channel = tmp$_6;
    return str + ', ' + this.bitrate + ' kbit/s, ' + this.samplingrate + ' Hz, ' + channel + ', ' + this.size + ' bytes';
  };
  MPEGFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MPEGFrame',
    interfaces: []
  };
  function IFilter() {
  }
  IFilter.prototype.toString_za3lpa$ = function (indent, callback$default) {
    if (indent === void 0)
      indent = 0;
    return callback$default ? callback$default(indent) : this.toString_za3lpa$$default(indent);
  };
  IFilter.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IFilter',
    interfaces: []
  };
  function Filter(id) {
    this.id_x5c8fj$_0 = id;
  }
  Object.defineProperty(Filter.prototype, 'id', {
    get: function () {
      return this.id_x5c8fj$_0;
    }
  });
  Filter.prototype.parse_84a5z1$ = function (data) {
    throw new Error_0('Implement in subclasses!');
  };
  Filter.prototype.toString_za3lpa$$default = function (indent) {
    return '[Filter]';
  };
  Filter.prototype.toString = function () {
    return this.toString_za3lpa$(0);
  };
  Filter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Filter',
    interfaces: [IFilter]
  };
  function FilterType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FilterType_initFields() {
    FilterType_initFields = function () {
    };
    FilterType$FULL_instance = new FilterType('FULL', 0);
    FilterType$INNER_instance = new FilterType('INNER', 1);
    FilterType$OUTER_instance = new FilterType('OUTER', 2);
  }
  var FilterType$FULL_instance;
  function FilterType$FULL_getInstance() {
    FilterType_initFields();
    return FilterType$FULL_instance;
  }
  var FilterType$INNER_instance;
  function FilterType$INNER_getInstance() {
    FilterType_initFields();
    return FilterType$INNER_instance;
  }
  var FilterType$OUTER_instance;
  function FilterType$OUTER_getInstance() {
    FilterType_initFields();
    return FilterType$OUTER_instance;
  }
  FilterType.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilterType',
    interfaces: [Enum]
  };
  function FilterType$values() {
    return [FilterType$FULL_getInstance(), FilterType$INNER_getInstance(), FilterType$OUTER_getInstance()];
  }
  FilterType.values = FilterType$values;
  function FilterType$valueOf(name) {
    switch (name) {
      case 'FULL':
        return FilterType$FULL_getInstance();
      case 'INNER':
        return FilterType$INNER_getInstance();
      case 'OUTER':
        return FilterType$OUTER_getInstance();
      default:Kotlin.throwISE('No enum constant com.codeazur.as3swf.data.filters.FilterType.' + name);
    }
  }
  FilterType.valueOf_61zpoe$ = FilterType$valueOf;
  function FilterBevel(id) {
    Filter.call(this, id);
    this.shadowColor = 0;
    this.highlightColor = 0;
    this.blurX = 0.0;
    this.blurY = 0.0;
    this.angle = 0.0;
    this.distance = 0.0;
    this.strength = 0.0;
    this.innerShadow = false;
    this.knockout = false;
    this.compositeSource = false;
    this.onTop = false;
    this.passes = 0;
  }
  Object.defineProperty(FilterBevel.prototype, 'filterType', {
    get: function () {
      return this.onTop ? FilterType$FULL_getInstance() : this.innerShadow ? FilterType$INNER_getInstance() : FilterType$OUTER_getInstance();
    }
  });
  Object.defineProperty(FilterBevel.prototype, 'angleDegrees', {
    get: function () {
      return this.angle * 180 / math.PI;
    }
  });
  FilterBevel.prototype.parse_84a5z1$ = function (data) {
    this.shadowColor = data.readRGBA();
    this.highlightColor = data.readRGBA();
    this.blurX = data.readFIXED();
    this.blurY = data.readFIXED();
    this.angle = data.readFIXED();
    this.distance = data.readFIXED();
    this.strength = data.readFIXED8();
    var flags = data.readUI8();
    this.innerShadow = (flags & 128) !== 0;
    this.knockout = (flags & 64) !== 0;
    this.compositeSource = (flags & 32) !== 0;
    this.onTop = (flags & 16) !== 0;
    this.passes = flags & 15;
  };
  FilterBevel.prototype.toString_za3lpa$$default = function (indent) {
    var str = '[BevelFilter] ' + 'ShadowColor: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.shadowColor) + ', ' + 'HighlightColor: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.highlightColor) + ', ' + 'BlurX: ' + Kotlin.toString(this.blurX) + ', ' + 'BlurY: ' + Kotlin.toString(this.blurY) + ', ' + 'Angle: ' + Kotlin.toString(this.angle) + ', ' + 'Distance: ' + Kotlin.toString(this.distance) + ', ' + 'Strength: ' + Kotlin.toString(this.strength) + ', ' + 'Passes: ' + Kotlin.toString(this.passes);
    var flags = ArrayList_init();
    if (this.innerShadow)
      flags.add_11rb$('InnerShadow');
    if (this.knockout)
      flags.add_11rb$('Knockout');
    if (this.compositeSource)
      flags.add_11rb$('CompositeSource');
    if (this.onTop)
      flags.add_11rb$('OnTop');
    if (flags.size > 0)
      str += ', Flags: ' + joinToString(flags, ', ');
    return str;
  };
  FilterBevel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilterBevel',
    interfaces: [Filter]
  };
  function FilterBlur(id) {
    Filter.call(this, id);
    this.blurX = 0.0;
    this.blurY = 0.0;
    this.passes = 0;
  }
  FilterBlur.prototype.parse_84a5z1$ = function (data) {
    this.blurX = data.readFIXED();
    this.blurY = data.readFIXED();
    this.passes = data.readUI8() >>> 3;
  };
  FilterBlur.prototype.toString_za3lpa$$default = function (indent) {
    return '[BlurFilter] BlurX: ' + this.blurX + ', BlurY: ' + this.blurY + ', Passes: ' + this.passes;
  };
  FilterBlur.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilterBlur',
    interfaces: [Filter]
  };
  function FilterColorMatrix(id) {
    Filter.call(this, id);
    this.colorMatrix = ArrayList_init();
  }
  FilterColorMatrix.prototype.parse_84a5z1$ = function (data) {
    for (var i = 0; i < 20; i++) {
      this.colorMatrix.add_11rb$(data.readFLOAT());
    }
  };
  FilterColorMatrix.prototype.toString_za3lpa$$default = function (indent) {
    var si = repeat(' ', indent + 2 | 0);
    return '[ColorMatrixFilter]' + '\n' + si + '[R] ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(0)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(1)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(2)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(3)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(4)) + '\n' + si + '[G] ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(5)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(6)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(7)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(8)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(9)) + '\n' + si + '[B] ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(10)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(11)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(12)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(13)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(14)) + '\n' + si + '[A] ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(15)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(16)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(17)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(18)) + ', ' + Kotlin.toString(this.colorMatrix.get_za3lpa$(19));
  };
  FilterColorMatrix.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilterColorMatrix',
    interfaces: [Filter]
  };
  function FilterConvolution(id) {
    Filter.call(this, id);
    this.matrixX = 0;
    this.matrixY = 0;
    this.divisor = 0.0;
    this.bias = 0.0;
    this.defaultColor = 0;
    this.clamp = false;
    this.preserveAlpha = false;
    this.matrix = ArrayList_init();
  }
  FilterConvolution.prototype.parse_84a5z1$ = function (data) {
    this.matrixX = data.readUI8();
    this.matrixY = data.readUI8();
    this.divisor = data.readFLOAT();
    this.bias = data.readFLOAT();
    var len = Kotlin.imul(this.matrixX, this.matrixY);
    for (var i = 0; i < len; i++) {
      this.matrix.add_11rb$(data.readFLOAT());
    }
    this.defaultColor = data.readRGBA();
    var flags = data.readUI8();
    this.clamp = (flags & 2) !== 0;
    this.preserveAlpha = (flags & 1) !== 0;
  };
  FilterConvolution.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$, tmp$_0;
    var str = '[ConvolutionFilter] ' + 'DefaultColor: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.defaultColor) + ', ' + 'Divisor: ' + Kotlin.toString(this.divisor) + ', ' + 'Bias: ' + Kotlin.toString(this.bias);
    var flags = ArrayList_init();
    if (this.clamp)
      flags.add_11rb$('Clamp');
    if (this.preserveAlpha)
      flags.add_11rb$('PreserveAlpha');
    if (flags.size > 0)
      str += ', Flags: ' + joinToString(flags, ', ');
    if (this.matrix.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Matrix:';
      tmp$ = this.matrixY;
      for (var y = 0; y < tmp$; y++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(y) + ']';
        tmp$_0 = this.matrixX;
        for (var x = 0; x < tmp$_0; x++) {
          str += (x > 0 ? ', ' : ' ') + Kotlin.toString(this.matrix.get_za3lpa$(Kotlin.imul(this.matrixX, y) + x | 0));
        }
      }
    }
    return str;
  };
  FilterConvolution.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilterConvolution',
    interfaces: [Filter, IFilter]
  };
  function FilterDropShadow(id) {
    Filter.call(this, id);
    this.dropShadowColor = 0;
    this.blurX = 0.0;
    this.blurY = 0.0;
    this.angle = 0.0;
    this.distance = 0.0;
    this.strength = 0.0;
    this.innerShadow = false;
    this.knockout = false;
    this.compositeSource = false;
    this.passes = 0;
  }
  FilterDropShadow.prototype.parse_84a5z1$ = function (data) {
    this.dropShadowColor = data.readRGBA();
    this.blurX = data.readFIXED();
    this.blurY = data.readFIXED();
    this.angle = data.readFIXED();
    this.distance = data.readFIXED();
    this.strength = data.readFIXED8();
    var flags = data.readUI8();
    this.innerShadow = (flags & 128) !== 0;
    this.knockout = (flags & 64) !== 0;
    this.compositeSource = (flags & 32) !== 0;
    this.passes = flags & 31;
  };
  FilterDropShadow.prototype.toString_za3lpa$$default = function (indent) {
    var str = '[DropShadowFilter] ' + 'DropShadowColor: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.dropShadowColor) + ', ' + 'BlurX: ' + Kotlin.toString(this.blurX) + ', ' + 'BlurY: ' + Kotlin.toString(this.blurY) + ', ' + 'Angle: ' + Kotlin.toString(this.angle) + ', ' + 'Distance: ' + Kotlin.toString(this.distance) + ', ' + 'Strength: ' + Kotlin.toString(this.strength) + ', ' + 'Passes: ' + Kotlin.toString(this.passes);
    var flags = ArrayList_init();
    if (this.innerShadow)
      flags.add_11rb$('InnerShadow');
    if (this.knockout)
      flags.add_11rb$('Knockout');
    if (this.compositeSource)
      flags.add_11rb$('CompositeSource');
    if (flags.size > 0)
      str += ', Flags: ' + joinToString(flags, ', ');
    return str;
  };
  FilterDropShadow.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilterDropShadow',
    interfaces: [Filter, IFilter]
  };
  function FilterGlow(id) {
    Filter.call(this, id);
    this.glowColor = 0;
    this.blurX = 0.0;
    this.blurY = 0.0;
    this.strength = 0.0;
    this.innerGlow = false;
    this.knockout = false;
    this.compositeSource = false;
    this.passes = 0;
  }
  FilterGlow.prototype.parse_84a5z1$ = function (data) {
    this.glowColor = data.readRGBA();
    this.blurX = data.readFIXED();
    this.blurY = data.readFIXED();
    this.strength = data.readFIXED8();
    var flags = data.readUI8();
    this.innerGlow = (flags & 128) !== 0;
    this.knockout = (flags & 64) !== 0;
    this.compositeSource = (flags & 32) !== 0;
    this.passes = flags & 31;
  };
  FilterGlow.prototype.toString_za3lpa$$default = function (indent) {
    var str = '[GlowFilter] ' + 'GlowColor: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.glowColor) + ', ' + 'BlurX: ' + Kotlin.toString(this.blurX) + ', ' + 'BlurY: ' + Kotlin.toString(this.blurY) + ', ' + 'Strength: ' + Kotlin.toString(this.strength) + ', ' + 'Passes: ' + Kotlin.toString(this.passes);
    var flags = ArrayList_init();
    if (this.innerGlow)
      flags.add_11rb$('InnerGlow');
    if (this.knockout)
      flags.add_11rb$('Knockout');
    if (this.compositeSource)
      flags.add_11rb$('CompositeSource');
    if (flags.size > 0)
      str += ', Flags: ' + joinToString(flags, ', ');
    return str;
  };
  FilterGlow.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilterGlow',
    interfaces: [Filter, IFilter]
  };
  function FilterGradientBevel(id) {
    FilterGradientGlow.call(this, id);
    this.filterName_fwa52l$_0 = 'GradientBevelFilter';
  }
  Object.defineProperty(FilterGradientBevel.prototype, 'filterName', {
    get: function () {
      return this.filterName_fwa52l$_0;
    }
  });
  FilterGradientBevel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilterGradientBevel',
    interfaces: [FilterGradientGlow, IFilter]
  };
  function FilterGradientGlow(id) {
    Filter.call(this, id);
    this.numColors = 0;
    this.blurX = 0.0;
    this.blurY = 0.0;
    this.angle = 0.0;
    this.distance = 0.0;
    this.strength = 0.0;
    this.innerShadow = false;
    this.knockout = false;
    this.compositeSource = false;
    this.onTop = false;
    this.passes = 0;
    this.gradientColors = ArrayList_init();
    this.gradientRatios = ArrayList_init();
    this.filterName_adx0sa$_0 = 'GradientGlowFilter';
  }
  FilterGradientGlow.prototype.parse_84a5z1$ = function (data) {
    var tmp$, tmp$_0;
    this.numColors = data.readUI8();
    tmp$ = this.numColors;
    for (var i = 0; i < tmp$; i++) {
      this.gradientColors.add_11rb$(data.readRGBA());
    }
    tmp$_0 = this.numColors;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      this.gradientRatios.add_11rb$(data.readUI8());
    }
    this.blurX = data.readFIXED();
    this.blurY = data.readFIXED();
    this.angle = data.readFIXED();
    this.distance = data.readFIXED();
    this.strength = data.readFIXED8();
    var flags = data.readUI8();
    this.innerShadow = (flags & 128) !== 0;
    this.knockout = (flags & 64) !== 0;
    this.compositeSource = (flags & 32) !== 0;
    this.onTop = (flags & 16) !== 0;
    this.passes = flags & 15;
  };
  FilterGradientGlow.prototype.toString_za3lpa$$default = function (indent) {
    var tmp$, tmp$_0;
    var str = '[' + this.filterName + '] BlurX: ' + this.blurX + ', BlurY: ' + this.blurY + ', Angle: ' + this.angle + ', Distance: ' + this.distance + ', Strength: ' + this.strength + ', Passes: ' + this.passes;
    var flags = ArrayList_init();
    if (this.innerShadow)
      flags.add_11rb$('InnerShadow');
    if (this.knockout)
      flags.add_11rb$('Knockout');
    if (this.compositeSource)
      flags.add_11rb$('CompositeSource');
    if (this.onTop)
      flags.add_11rb$('OnTop');
    if (flags.size > 0)
      str += ', Flags: ' + joinToString(flags, ', ');
    if (this.gradientColors.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'GradientColors:';
      tmp$ = this.gradientColors.size;
      for (var i = 0; i < tmp$; i++) {
        str += (i > 0 ? ', ' : ' ') + ColorUtils_getInstance().rgbToString_za3lpa$(this.gradientColors.get_za3lpa$(i));
      }
    }
    if (this.gradientRatios.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'GradientRatios:';
      tmp$_0 = this.gradientRatios.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += (i_0 > 0 ? ', ' : ' ') + Kotlin.toString(this.gradientRatios.get_za3lpa$(i_0));
      }
    }
    return str;
  };
  Object.defineProperty(FilterGradientGlow.prototype, 'filterName', {
    get: function () {
      return this.filterName_adx0sa$_0;
    }
  });
  FilterGradientGlow.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FilterGradientGlow',
    interfaces: [Filter, IFilter]
  };
  function ShapeExporter() {
  }
  ShapeExporter.prototype.beginShape = function () {
  };
  ShapeExporter.prototype.endShape = function () {
  };
  ShapeExporter.prototype.beginFills = function () {
  };
  ShapeExporter.prototype.beginFill_5wr77w$$default = function (color, alpha) {
  };
  ShapeExporter.prototype.beginFill_5wr77w$ = function (color, alpha, callback$default) {
    if (alpha === void 0)
      alpha = 1.0;
    callback$default ? callback$default(color, alpha) : this.beginFill_5wr77w$$default(color, alpha);
  };
  ShapeExporter.prototype.beginGradientFill_gkeasy$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
  };
  ShapeExporter.prototype.beginGradientFill_gkeasy$ = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio, callback$default) {
    if (matrix === void 0)
      matrix = new Matrix2d();
    if (spreadMethod === void 0)
      spreadMethod = GradientSpreadMode$PAD_getInstance();
    if (interpolationMethod === void 0)
      interpolationMethod = GradientInterpolationMode$NORMAL_getInstance();
    if (focalPointRatio === void 0)
      focalPointRatio = 0.0;
    callback$default ? callback$default(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) : this.beginGradientFill_gkeasy$$default(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  ShapeExporter.prototype.beginBitmapFill_24bixh$$default = function (bitmapId, matrix, repeat, smooth) {
  };
  ShapeExporter.prototype.beginBitmapFill_24bixh$ = function (bitmapId, matrix, repeat, smooth, callback$default) {
    if (matrix === void 0)
      matrix = new Matrix2d();
    if (repeat === void 0)
      repeat = true;
    if (smooth === void 0)
      smooth = false;
    callback$default ? callback$default(bitmapId, matrix, repeat, smooth) : this.beginBitmapFill_24bixh$$default(bitmapId, matrix, repeat, smooth);
  };
  ShapeExporter.prototype.endFill = function () {
  };
  ShapeExporter.prototype.endFills = function () {
  };
  ShapeExporter.prototype.beginLines = function () {
  };
  ShapeExporter.prototype.lineStyle_lp30oh$$default = function (thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
  };
  ShapeExporter.prototype.lineStyle_lp30oh$ = function (thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit, callback$default) {
    if (thickness === void 0)
      thickness = DoubleCompanionObject.NaN;
    if (color === void 0)
      color = 0;
    if (alpha === void 0)
      alpha = 1.0;
    if (pixelHinting === void 0)
      pixelHinting = false;
    if (scaleMode === void 0)
      scaleMode = Context2d$ScaleMode.NORMAL;
    if (startCaps === void 0)
      startCaps = LineCapsStyle$ROUND_getInstance();
    if (endCaps === void 0)
      endCaps = LineCapsStyle$ROUND_getInstance();
    if (joints === void 0)
      joints = null;
    if (miterLimit === void 0)
      miterLimit = 3.0;
    callback$default ? callback$default(thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) : this.lineStyle_lp30oh$$default(thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit);
  };
  ShapeExporter.prototype.lineGradientStyle_gkeasy$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
  };
  ShapeExporter.prototype.lineGradientStyle_gkeasy$ = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio, callback$default) {
    if (matrix === void 0)
      matrix = new Matrix2d();
    if (spreadMethod === void 0)
      spreadMethod = GradientSpreadMode$PAD_getInstance();
    if (interpolationMethod === void 0)
      interpolationMethod = GradientInterpolationMode$NORMAL_getInstance();
    if (focalPointRatio === void 0)
      focalPointRatio = 0.0;
    callback$default ? callback$default(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) : this.lineGradientStyle_gkeasy$$default(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  ShapeExporter.prototype.endLines = function () {
  };
  ShapeExporter.prototype.moveTo_lu1900$ = function (x, y) {
  };
  ShapeExporter.prototype.lineTo_lu1900$ = function (x, y) {
  };
  ShapeExporter.prototype.curveTo_6y0v78$ = function (controlX, controlY, anchorX, anchorY) {
  };
  ShapeExporter.prototype.closePath = function () {
  };
  ShapeExporter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ShapeExporter',
    interfaces: []
  };
  function LoggerShapeExporter(parent, logger) {
    if (logger === void 0)
      logger = Kotlin.getCallableRef('println', function (message) {
        return println(message), Unit;
      });
    ShapeExporter.call(this);
    this.parent = parent;
    this.logger = logger;
  }
  LoggerShapeExporter.prototype.log_61zpoe$ = function (msg) {
    this.logger(msg);
    return this;
  };
  LoggerShapeExporter.prototype.beginShape = function () {
    this.log_61zpoe$('beginShape()').parent.beginShape();
  };
  LoggerShapeExporter.prototype.endShape = function () {
    this.log_61zpoe$('endShape()').parent.endShape();
  };
  LoggerShapeExporter.prototype.beginFills = function () {
    this.log_61zpoe$('beginFills()').parent.beginFills();
  };
  LoggerShapeExporter.prototype.endFills = function () {
    this.log_61zpoe$('endFills()').parent.endFills();
  };
  LoggerShapeExporter.prototype.beginLines = function () {
    this.log_61zpoe$('beginLines()').parent.beginLines();
  };
  LoggerShapeExporter.prototype.endLines = function () {
    this.log_61zpoe$('endLines()').parent.endLines();
  };
  LoggerShapeExporter.prototype.closePath = function () {
    this.log_61zpoe$('closePath()').parent.closePath();
  };
  LoggerShapeExporter.prototype.beginFill_5wr77w$$default = function (color, alpha) {
    this.log_61zpoe$('beginFill(' + format('%06X', [color]) + ', ' + alpha + ')').parent.beginFill_5wr77w$(color, alpha);
  };
  LoggerShapeExporter.prototype.beginGradientFill_gkeasy$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
    this.log_61zpoe$('beginGradientFill(' + type + ', ' + colors + ', ' + alphas + ', ' + ratios + ', ' + matrix + ', ' + spreadMethod + ', ' + interpolationMethod + ', ' + focalPointRatio + ')').parent.beginGradientFill_gkeasy$(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  LoggerShapeExporter.prototype.beginBitmapFill_24bixh$$default = function (bitmapId, matrix, repeat, smooth) {
    this.log_61zpoe$('beginBitmapFill(' + bitmapId + ', ' + matrix + ', ' + repeat + ', ' + smooth + ')').parent.beginBitmapFill_24bixh$(bitmapId, matrix, repeat, smooth);
  };
  LoggerShapeExporter.prototype.endFill = function () {
    this.log_61zpoe$('endFill()').parent.endFill();
  };
  LoggerShapeExporter.prototype.lineStyle_lp30oh$$default = function (thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
    this.log_61zpoe$('lineStyle(' + thickness + ', ' + color + ', ' + alpha + ', ' + pixelHinting + ', ' + scaleMode + ', ' + startCaps + ', ' + endCaps + ', ' + Kotlin.toString(joints) + ', ' + miterLimit + ')').parent.lineStyle_lp30oh$(thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit);
  };
  LoggerShapeExporter.prototype.lineGradientStyle_gkeasy$$default = function (type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio) {
    this.log_61zpoe$('lineGradientStyle(' + type + ', ' + colors + ', ' + alphas + ', ' + ratios + ', ' + matrix + ', ' + spreadMethod + ', ' + interpolationMethod + ', ' + focalPointRatio + ')').parent.lineGradientStyle_gkeasy$(type, colors, alphas, ratios, matrix, spreadMethod, interpolationMethod, focalPointRatio);
  };
  LoggerShapeExporter.prototype.moveTo_lu1900$ = function (x, y) {
    this.log_61zpoe$('moveTo(' + x + ', ' + y + ')').parent.moveTo_lu1900$(x, y);
  };
  LoggerShapeExporter.prototype.lineTo_lu1900$ = function (x, y) {
    this.log_61zpoe$('lineTo(' + x + ', ' + y + ')').parent.lineTo_lu1900$(x, y);
  };
  LoggerShapeExporter.prototype.curveTo_6y0v78$ = function (controlX, controlY, anchorX, anchorY) {
    this.log_61zpoe$('curveTo(' + controlX + ', ' + controlY + ', ' + anchorX + ', ' + anchorY + ')').parent.curveTo_6y0v78$(controlX, controlY, anchorX, anchorY);
  };
  LoggerShapeExporter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LoggerShapeExporter',
    interfaces: [ShapeExporter]
  };
  function ShapeExporterBoundsBuilder() {
    ShapeExporter.call(this);
    this.bb = new BoundsBuilder();
    this.lineWidth = 1.0;
    this.lastX = 0.0;
    this.lastY = 0.0;
    this.tempRect_0 = new Rectangle();
  }
  ShapeExporterBoundsBuilder.prototype.lineStyle_lp30oh$$default = function (thickness, color, alpha, pixelHinting, scaleMode, startCaps, endCaps, joints, miterLimit) {
    this.lineWidth = thickness;
  };
  ShapeExporterBoundsBuilder.prototype.beginFills = function () {
    this.lineWidth = 0.0;
  };
  ShapeExporterBoundsBuilder.prototype.beginLines = function () {
    this.lineWidth = 1.0;
  };
  ShapeExporterBoundsBuilder.prototype.addPoint_0 = function (x, y) {
    this.bb.add_lu1900$(x - this.lineWidth, y - this.lineWidth);
    this.bb.add_lu1900$(x + this.lineWidth, y + this.lineWidth);
  };
  ShapeExporterBoundsBuilder.prototype.addRect_0 = function (rect) {
    this.addPoint_0(rect.left, rect.top);
    this.addPoint_0(rect.right, rect.bottom);
  };
  ShapeExporterBoundsBuilder.prototype.moveTo_lu1900$ = function (x, y) {
    this.addPoint_0(x, y);
    this.lastX = x;
    this.lastY = y;
  };
  ShapeExporterBoundsBuilder.prototype.lineTo_lu1900$ = function (x, y) {
    this.addPoint_0(x, y);
    this.lastX = x;
    this.lastY = y;
  };
  ShapeExporterBoundsBuilder.prototype.curveTo_6y0v78$ = function (controlX, controlY, anchorX, anchorY) {
    this.addPoint_0(controlX, controlY);
    this.addPoint_0(anchorX, anchorY);
    this.lastX = anchorX;
    this.lastY = anchorY;
  };
  ShapeExporterBoundsBuilder.prototype.closePath = function () {
  };
  ShapeExporterBoundsBuilder.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ShapeExporterBoundsBuilder',
    interfaces: [ShapeExporter]
  };
  function ISWFTagFactory() {
  }
  ISWFTagFactory.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ISWFTagFactory',
    interfaces: []
  };
  function SWFActionFactory() {
    SWFActionFactory_instance = this;
  }
  SWFActionFactory.prototype.create_qt1dr2$ = function (code, length, pos) {
    if (code === 4)
      return new ActionNextFrame(code, length, pos);
    else if (code === 5)
      return new ActionPreviousFrame(code, length, pos);
    else if (code === 6)
      return new ActionPlay(code, length, pos);
    else if (code === 7)
      return new ActionStop(code, length, pos);
    else if (code === 8)
      return new ActionToggleQuality(code, length, pos);
    else if (code === 9)
      return new ActionStopSounds(code, length, pos);
    else if (code === 10)
      return new ActionAdd(code, length, pos);
    else if (code === 11)
      return new ActionSubtract(code, length, pos);
    else if (code === 12)
      return new ActionMultiply(code, length, pos);
    else if (code === 13)
      return new ActionDivide(code, length, pos);
    else if (code === 14)
      return new ActionEquals(code, length, pos);
    else if (code === 15)
      return new ActionLess(code, length, pos);
    else if (code === 16)
      return new ActionAnd(code, length, pos);
    else if (code === 17)
      return new ActionOr(code, length, pos);
    else if (code === 18)
      return new ActionNot(code, length, pos);
    else if (code === 19)
      return new ActionStringEquals(code, length, pos);
    else if (code === 20)
      return new ActionStringLength(code, length, pos);
    else if (code === 21)
      return new ActionStringExtract(code, length, pos);
    else if (code === 23)
      return new ActionPop(code, length, pos);
    else if (code === 24)
      return new ActionToInteger(code, length, pos);
    else if (code === 28)
      return new ActionGetVariable(code, length, pos);
    else if (code === 29)
      return new ActionSetVariable(code, length, pos);
    else if (code === 32)
      return new ActionSetTarget2(code, length, pos);
    else if (code === 33)
      return new ActionStringAdd(code, length, pos);
    else if (code === 34)
      return new ActionGetProperty(code, length, pos);
    else if (code === 35)
      return new ActionSetProperty(code, length, pos);
    else if (code === 36)
      return new ActionCloneSprite(code, length, pos);
    else if (code === 37)
      return new ActionRemoveSprite(code, length, pos);
    else if (code === 38)
      return new ActionTrace(code, length, pos);
    else if (code === 39)
      return new ActionStartDrag(code, length, pos);
    else if (code === 40)
      return new ActionEndDrag(code, length, pos);
    else if (code === 41)
      return new ActionStringLess(code, length, pos);
    else if (code === 42)
      return new ActionThrow(code, length, pos);
    else if (code === 43)
      return new ActionCastOp(code, length, pos);
    else if (code === 44)
      return new ActionImplementsOp(code, length, pos);
    else if (code === 48)
      return new ActionRandomNumber(code, length, pos);
    else if (code === 49)
      return new ActionMBStringLength(code, length, pos);
    else if (code === 50)
      return new ActionCharToAscii(code, length, pos);
    else if (code === 51)
      return new ActionAsciiToChar(code, length, pos);
    else if (code === 52)
      return new ActionGetTime(code, length, pos);
    else if (code === 53)
      return new ActionMBStringExtract(code, length, pos);
    else if (code === 54)
      return new ActionMBCharToAscii(code, length, pos);
    else if (code === 55)
      return new ActionMBAsciiToChar(code, length, pos);
    else if (code === 58)
      return new ActionDelete(code, length, pos);
    else if (code === 59)
      return new ActionDelete2(code, length, pos);
    else if (code === 60)
      return new ActionDefineLocal(code, length, pos);
    else if (code === 61)
      return new ActionCallFunction(code, length, pos);
    else if (code === 62)
      return new ActionReturn(code, length, pos);
    else if (code === 63)
      return new ActionModulo(code, length, pos);
    else if (code === 64)
      return new ActionNewObject(code, length, pos);
    else if (code === 65)
      return new ActionDefineLocal2(code, length, pos);
    else if (code === 66)
      return new ActionInitArray(code, length, pos);
    else if (code === 67)
      return new ActionInitObject(code, length, pos);
    else if (code === 68)
      return new ActionTypeOf(code, length, pos);
    else if (code === 69)
      return new ActionTargetPath(code, length, pos);
    else if (code === 70)
      return new ActionEnumerate(code, length, pos);
    else if (code === 71)
      return new ActionAdd2(code, length, pos);
    else if (code === 72)
      return new ActionLess2(code, length, pos);
    else if (code === 73)
      return new ActionEquals2(code, length, pos);
    else if (code === 74)
      return new ActionToNumber(code, length, pos);
    else if (code === 75)
      return new ActionToString(code, length, pos);
    else if (code === 76)
      return new ActionPushDuplicate(code, length, pos);
    else if (code === 77)
      return new ActionStackSwap(code, length, pos);
    else if (code === 78)
      return new ActionGetMember(code, length, pos);
    else if (code === 79)
      return new ActionSetMember(code, length, pos);
    else if (code === 80)
      return new ActionIncrement(code, length, pos);
    else if (code === 81)
      return new ActionDecrement(code, length, pos);
    else if (code === 82)
      return new ActionCallMethod(code, length, pos);
    else if (code === 83)
      return new ActionNewMethod(code, length, pos);
    else if (code === 84)
      return new ActionInstanceOf(code, length, pos);
    else if (code === 85)
      return new ActionEnumerate2(code, length, pos);
    else if (code === 96)
      return new ActionBitAnd(code, length, pos);
    else if (code === 97)
      return new ActionBitOr(code, length, pos);
    else if (code === 98)
      return new ActionBitXor(code, length, pos);
    else if (code === 99)
      return new ActionBitLShift(code, length, pos);
    else if (code === 100)
      return new ActionBitRShift(code, length, pos);
    else if (code === 101)
      return new ActionBitURShift(code, length, pos);
    else if (code === 102)
      return new ActionStrictEquals(code, length, pos);
    else if (code === 103)
      return new ActionGreater(code, length, pos);
    else if (code === 104)
      return new ActionStringGreater(code, length, pos);
    else if (code === 105)
      return new ActionExtends(code, length, pos);
    else if (code === 129)
      return new ActionGotoFrame(code, length, pos);
    else if (code === 131)
      return new ActionGetURL(code, length, pos);
    else if (code === 135)
      return new ActionStoreRegister(code, length, pos);
    else if (code === 136)
      return new ActionConstantPool(code, length, pos);
    else if (code === 138)
      return new ActionWaitForFrame(code, length, pos);
    else if (code === 139)
      return new ActionSetTarget(code, length, pos);
    else if (code === 140)
      return new ActionGotoLabel(code, length, pos);
    else if (code === 141)
      return new ActionWaitForFrame2(code, length, pos);
    else if (code === 142)
      return new ActionDefineFunction2(code, length, pos);
    else if (code === 143)
      return new ActionTry(code, length, pos);
    else if (code === 148)
      return new ActionWith(code, length, pos);
    else if (code === 150)
      return new ActionPush(code, length, pos);
    else if (code === 153)
      return new ActionJump(code, length, pos);
    else if (code === 154)
      return new ActionGetURL2(code, length, pos);
    else if (code === 155)
      return new ActionDefineFunction(code, length, pos);
    else if (code === 157)
      return new ActionIf(code, length, pos);
    else if (code === 158)
      return new ActionCall(code, length, pos);
    else if (code === 159)
      return new ActionGotoFrame2(code, length, pos);
    else
      return new ActionUnknown(code, length, pos);
  };
  SWFActionFactory.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SWFActionFactory',
    interfaces: []
  };
  var SWFActionFactory_instance = null;
  function SWFActionFactory_getInstance() {
    if (SWFActionFactory_instance === null) {
      new SWFActionFactory();
    }
    return SWFActionFactory_instance;
  }
  function SWFFilterFactory() {
    SWFFilterFactory_instance = this;
  }
  SWFFilterFactory.prototype.create_za3lpa$ = function (id) {
    if (id === 0)
      return new FilterDropShadow(id);
    else if (id === 1)
      return new FilterBlur(id);
    else if (id === 2)
      return new FilterGlow(id);
    else if (id === 3)
      return new FilterBevel(id);
    else if (id === 4)
      return new FilterGradientGlow(id);
    else if (id === 5)
      return new FilterConvolution(id);
    else if (id === 6)
      return new FilterColorMatrix(id);
    else if (id === 7)
      return new FilterGradientBevel(id);
    else
      throw new Error_0('Unknown filter ID: ' + Kotlin.toString(id));
  };
  SWFFilterFactory.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'SWFFilterFactory',
    interfaces: []
  };
  var SWFFilterFactory_instance = null;
  function SWFFilterFactory_getInstance() {
    if (SWFFilterFactory_instance === null) {
      new SWFFilterFactory();
    }
    return SWFFilterFactory_instance;
  }
  function SWFTagFactory() {
  }
  SWFTagFactory.prototype.create_za3lpa$ = function (type) {
    if (type === 0)
      return new TagEnd();
    else if (type === 1)
      return new TagShowFrame();
    else if (type === 2)
      return new TagDefineShape();
    else if (type === 4)
      return new TagPlaceObject();
    else if (type === 5)
      return new TagRemoveObject();
    else if (type === 6)
      return new TagDefineBits();
    else if (type === 7)
      return new TagDefineButton();
    else if (type === 8)
      return new TagJPEGTables();
    else if (type === 9)
      return new TagSetBackgroundColor();
    else if (type === 10)
      return new TagDefineFont();
    else if (type === 11)
      return new TagDefineText();
    else if (type === 12)
      return new TagDoAction();
    else if (type === 13)
      return new TagDefineFontInfo();
    else if (type === 14)
      return new TagDefineSound();
    else if (type === 15)
      return new TagStartSound();
    else if (type === 17)
      return new TagDefineButtonSound();
    else if (type === 18)
      return new TagSoundStreamHead();
    else if (type === 19)
      return new TagSoundStreamBlock();
    else if (type === 20)
      return new TagDefineBitsLossless();
    else if (type === 21)
      return new TagDefineBitsJPEG2();
    else if (type === 22)
      return new TagDefineShape2();
    else if (type === 23)
      return new TagDefineButtonCxform();
    else if (type === 24)
      return new TagProtect();
    else if (type === 25)
      return new TagPathsArePostScript();
    else if (type === 26)
      return new TagPlaceObject2();
    else if (type === 28)
      return new TagRemoveObject2();
    else if (type === 32)
      return new TagDefineShape3();
    else if (type === 33)
      return new TagDefineText2();
    else if (type === 34)
      return new TagDefineButton2();
    else if (type === 35)
      return new TagDefineBitsJPEG3();
    else if (type === 36)
      return new TagDefineBitsLossless2();
    else if (type === 37)
      return new TagDefineEditText();
    else if (type === 39)
      return new TagDefineSprite();
    else if (type === 40)
      return new TagNameCharacter();
    else if (type === 41)
      return new TagProductInfo();
    else if (type === 43)
      return new TagFrameLabel();
    else if (type === 45)
      return new TagSoundStreamHead2();
    else if (type === 46)
      return new TagDefineMorphShape();
    else if (type === 48)
      return new TagDefineFont2();
    else if (type === 56)
      return new TagExportAssets();
    else if (type === 57)
      return new TagImportAssets();
    else if (type === 58)
      return new TagEnableDebugger();
    else if (type === 59)
      return new TagDoInitAction();
    else if (type === 60)
      return new TagDefineVideoStream();
    else if (type === 61)
      return new TagVideoFrame();
    else if (type === 62)
      return new TagDefineFontInfo2();
    else if (type === 63)
      return new TagDebugID();
    else if (type === 64)
      return new TagEnableDebugger2();
    else if (type === 65)
      return new TagScriptLimits();
    else if (type === 66)
      return new TagSetTabIndex();
    else if (type === 69)
      return new TagFileAttributes();
    else if (type === 70)
      return new TagPlaceObject3();
    else if (type === 71)
      return new TagImportAssets2();
    else if (type === 72)
      return new TagDoABCDeprecated();
    else if (type === 73)
      return new TagDefineFontAlignZones();
    else if (type === 74)
      return new TagCSMTextSettings();
    else if (type === 75)
      return new TagDefineFont3();
    else if (type === 76)
      return new TagSymbolClass();
    else if (type === 77)
      return new TagMetadata();
    else if (type === 78)
      return new TagDefineScalingGrid();
    else if (type === 82)
      return new TagDoABC();
    else if (type === 83)
      return new TagDefineShape4();
    else if (type === 84)
      return new TagDefineMorphShape2();
    else if (type === 86)
      return new TagDefineSceneAndFrameLabelData();
    else if (type === 87)
      return new TagDefineBinaryData();
    else if (type === 88)
      return new TagDefineFontName();
    else if (type === 89)
      return new TagStartSound2();
    else if (type === 90)
      return new TagDefineBitsJPEG4();
    else if (type === 91)
      return new TagDefineFont4();
    else if (type === 93)
      return new TagEnableTelemetry();
    else if (type === 94)
      return new TagPlaceObject4();
    else if (type === 253)
      return new TagSWFEncryptActions();
    else if (type === 255)
      return new TagSWFEncryptSignature();
    else
      return new TagUnknown(type);
  };
  SWFTagFactory.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SWFTagFactory',
    interfaces: [ISWFTagFactory]
  };
  function ITag() {
  }
  ITag.prototype.parse_roywkq$ = function (data, length, version, async, continuation, callback$default) {
    if (async === void 0)
      async = false;
    return callback$default ? callback$default(data, length, version, async, continuation) : this.parse_roywkq$$default(data, length, version, async, continuation);
  };
  ITag.prototype.toString_vux9f0$ = function (indent, flags, callback$default) {
    if (indent === void 0)
      indent = 0;
    if (flags === void 0)
      flags = 0;
    return callback$default ? callback$default(indent, flags) : this.toString_vux9f0$$default(indent, flags);
  };
  ITag.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ITag',
    interfaces: []
  };
  function _BaseTag() {
  }
  _BaseTag.prototype.toString = function () {
    return this.toString_vux9f0$(0, 0);
  };
  _BaseTag.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: '_BaseTag',
    interfaces: [ITag]
  };
  function IDefinitionTag() {
  }
  IDefinitionTag.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IDefinitionTag',
    interfaces: [ITag]
  };
  function IDisplayListTag() {
  }
  IDisplayListTag.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IDisplayListTag',
    interfaces: [ITag]
  };
  function Tag() {
    Tag$Companion_getInstance();
  }
  function Tag$Companion() {
    Tag$Companion_instance = this;
  }
  Tag$Companion.prototype.toStringCommon_jl0c9m$ = function (type, name, indent) {
    if (indent === void 0)
      indent = 0;
    return repeat(' ', indent) + '[' + format('%02d', [type]) + ':' + name + '] ';
  };
  Tag$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Tag$Companion_instance = null;
  function Tag$Companion_getInstance() {
    if (Tag$Companion_instance === null) {
      new Tag$Companion();
    }
    return Tag$Companion_instance;
  }
  Tag.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Tag',
    interfaces: []
  };
  function TagCSMTextSettings() {
    TagCSMTextSettings$Companion_getInstance();
    _BaseTag.call(this);
    this.textId = 0;
    this.useFlashType = 0;
    this.gridFit = 0;
    this.thickness = 0.0;
    this.sharpness = 0.0;
    this.type_6cvo6t$_0 = TagCSMTextSettings$Companion_getInstance().TYPE;
    this.name_6gltnq$_0 = 'CSMTextSettings';
    this.version_dfceev$_0 = 8;
    this.level_bwtc7f$_0 = 1;
  }
  function TagCSMTextSettings$Companion() {
    TagCSMTextSettings$Companion_instance = this;
    this.TYPE = 74;
  }
  TagCSMTextSettings$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagCSMTextSettings$Companion_instance = null;
  function TagCSMTextSettings$Companion_getInstance() {
    if (TagCSMTextSettings$Companion_instance === null) {
      new TagCSMTextSettings$Companion();
    }
    return TagCSMTextSettings$Companion_instance;
  }
  TagCSMTextSettings.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.textId = data.readUI16();
    this.useFlashType = data.readUB_za3lpa$(2);
    this.gridFit = data.readUB_za3lpa$(3);
    data.readUB_za3lpa$(3);
    this.thickness = data.readFIXED();
    this.sharpness = data.readFIXED();
    data.readUI8();
  };
  Object.defineProperty(TagCSMTextSettings.prototype, 'type', {
    get: function () {
      return this.type_6cvo6t$_0;
    }
  });
  Object.defineProperty(TagCSMTextSettings.prototype, 'name', {
    get: function () {
      return this.name_6gltnq$_0;
    }
  });
  Object.defineProperty(TagCSMTextSettings.prototype, 'version', {
    get: function () {
      return this.version_dfceev$_0;
    }
  });
  Object.defineProperty(TagCSMTextSettings.prototype, 'level', {
    get: function () {
      return this.level_bwtc7f$_0;
    }
  });
  TagCSMTextSettings.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'TextID: ' + Kotlin.toString(this.textId) + ', ' + 'UseFlashType: ' + Kotlin.toString(this.useFlashType) + ', ' + 'GridFit: ' + Kotlin.toString(this.gridFit) + ', ' + 'Thickness: ' + Kotlin.toString(this.thickness) + ', ' + 'Sharpness: ' + Kotlin.toString(this.sharpness);
  };
  TagCSMTextSettings.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagCSMTextSettings',
    interfaces: [_BaseTag]
  };
  function TagDebugID() {
    TagDebugID$Companion_getInstance();
    _BaseTag.call(this);
    this.uuid_0 = new Int8Array(0);
    this.type_nyatec$_0 = TagDebugID$Companion_getInstance().TYPE;
    this.name_o20yv9$_0 = 'DebugID';
    this.version_mq6e8a$_0 = 6;
    this.level_ypoaiy$_0 = 1;
  }
  function TagDebugID$Companion() {
    TagDebugID$Companion_instance = this;
    this.TYPE = 63;
  }
  TagDebugID$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDebugID$Companion_instance = null;
  function TagDebugID$Companion_getInstance() {
    if (TagDebugID$Companion_instance === null) {
      new TagDebugID$Companion();
    }
    return TagDebugID$Companion_instance;
  }
  TagDebugID.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    if (length > 0)
      this.uuid_0 = readBytes(data.data, length);
  };
  Object.defineProperty(TagDebugID.prototype, 'type', {
    get: function () {
      return this.type_nyatec$_0;
    }
  });
  Object.defineProperty(TagDebugID.prototype, 'name', {
    get: function () {
      return this.name_o20yv9$_0;
    }
  });
  Object.defineProperty(TagDebugID.prototype, 'version', {
    get: function () {
      return this.version_mq6e8a$_0;
    }
  });
  Object.defineProperty(TagDebugID.prototype, 'level', {
    get: function () {
      return this.level_ypoaiy$_0;
    }
  });
  TagDebugID.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'UUID: ';
    if (this.uuid_0.length === 16) {
      str += format('%02x%02x%02x%02x-', [this.uuid_0[0], this.uuid_0[1], this.uuid_0[2], this.uuid_0[3]]);
      str += format('%02x%02x-', [this.uuid_0[4], this.uuid_0[5]]);
      str += format('%02x%02x-', [this.uuid_0[6], this.uuid_0[7]]);
      str += format('%02x%02x-', [this.uuid_0[8], this.uuid_0[9]]);
      str += format('%02x%02x%02x%02x%02x%02x', [this.uuid_0[10], this.uuid_0[11], this.uuid_0[12], this.uuid_0[13], this.uuid_0[14], this.uuid_0[15]]);
    }
     else {
      str += '(invalid length: ' + Kotlin.toString(this.uuid_0.length) + ')';
    }
    return str;
  };
  TagDebugID.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDebugID',
    interfaces: [_BaseTag]
  };
  function TagDefineBinaryData() {
    TagDefineBinaryData$Companion_getInstance();
    _BaseTag.call(this);
    this.characterId_oajc22$_0 = 0;
    this.binaryData = new Int8Array(0);
    this.type_8vg03w$_0 = TagDefineBinaryData$Companion_getInstance().TYPE;
    this.name_8rpumz$_0 = 'DefineBinaryData';
    this.version_ll5e3a$_0 = 9;
    this.level_d4x4eu$_0 = 1;
  }
  function TagDefineBinaryData$Companion() {
    TagDefineBinaryData$Companion_instance = this;
    this.TYPE = 87;
  }
  TagDefineBinaryData$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBinaryData$Companion_instance = null;
  function TagDefineBinaryData$Companion_getInstance() {
    if (TagDefineBinaryData$Companion_instance === null) {
      new TagDefineBinaryData$Companion();
    }
    return TagDefineBinaryData$Companion_instance;
  }
  Object.defineProperty(TagDefineBinaryData.prototype, 'characterId', {
    get: function () {
      return this.characterId_oajc22$_0;
    },
    set: function (characterId) {
      this.characterId_oajc22$_0 = characterId;
    }
  });
  TagDefineBinaryData.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    data.readUI32();
    if (length > 6)
      this.binaryData = data.readBytes_za3lpa$(length - 6 | 0);
  };
  Object.defineProperty(TagDefineBinaryData.prototype, 'type', {
    get: function () {
      return this.type_8vg03w$_0;
    }
  });
  Object.defineProperty(TagDefineBinaryData.prototype, 'name', {
    get: function () {
      return this.name_8rpumz$_0;
    }
  });
  Object.defineProperty(TagDefineBinaryData.prototype, 'version', {
    get: function () {
      return this.version_ll5e3a$_0;
    }
  });
  Object.defineProperty(TagDefineBinaryData.prototype, 'level', {
    get: function () {
      return this.level_d4x4eu$_0;
    }
  });
  TagDefineBinaryData.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'Length: ' + Kotlin.toString(this.binaryData.length);
  };
  TagDefineBinaryData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineBinaryData',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineBits() {
    TagDefineBits$Companion_getInstance();
    _BaseTag.call(this);
    this.bitmapType = BitmapType_getInstance().JPEG;
    this.characterId_ug7i35$_0 = 0;
    this.bitmapData = new FlashByteArray();
    this.type_tieo93$_0 = TagDefineBits$Companion_getInstance().TYPE;
    this.name_teois6$_0 = 'DefineBits';
    this.version_n4id7$_0 = 1;
    this.level_cn2tpt$_0 = 1;
  }
  function TagDefineBits$Companion() {
    TagDefineBits$Companion_instance = this;
    this.TYPE = 6;
  }
  TagDefineBits$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBits$Companion_instance = null;
  function TagDefineBits$Companion_getInstance() {
    if (TagDefineBits$Companion_instance === null) {
      new TagDefineBits$Companion();
    }
    return TagDefineBits$Companion_instance;
  }
  Object.defineProperty(TagDefineBits.prototype, 'characterId', {
    get: function () {
      return this.characterId_ug7i35$_0;
    },
    set: function (characterId) {
      this.characterId_ug7i35$_0 = characterId;
    }
  });
  TagDefineBits.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    if (length > 2)
      this.bitmapData = FlashByteArray_init(data.readBytes_za3lpa$(length - 2 | 0));
  };
  Object.defineProperty(TagDefineBits.prototype, 'type', {
    get: function () {
      return this.type_tieo93$_0;
    }
  });
  Object.defineProperty(TagDefineBits.prototype, 'name', {
    get: function () {
      return this.name_teois6$_0;
    }
  });
  Object.defineProperty(TagDefineBits.prototype, 'version', {
    get: function () {
      return this.version_n4id7$_0;
    }
  });
  Object.defineProperty(TagDefineBits.prototype, 'level', {
    get: function () {
      return this.level_cn2tpt$_0;
    }
  });
  TagDefineBits.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'BitmapLength: ' + Kotlin.toString(this.bitmapData.length);
  };
  TagDefineBits.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineBits',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineBitsJPEG2() {
    TagDefineBitsJPEG2$Companion_getInstance();
    TagDefineBits.call(this);
    this.type_6g9x6h$_0 = TagDefineBitsJPEG2$Companion_getInstance().TYPE;
    this.name_6k02ne$_0 = 'DefineBitsJPEG2';
    this.version_qibjph$_0 = this.bitmapType === BitmapType_getInstance().JPEG ? 2 : 8;
    this.level_8zjlhr$_0 = 2;
  }
  function TagDefineBitsJPEG2$Companion() {
    TagDefineBitsJPEG2$Companion_instance = this;
    this.TYPE = 21;
  }
  TagDefineBitsJPEG2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBitsJPEG2$Companion_instance = null;
  function TagDefineBitsJPEG2$Companion_getInstance() {
    if (TagDefineBitsJPEG2$Companion_instance === null) {
      new TagDefineBitsJPEG2$Companion();
    }
    return TagDefineBitsJPEG2$Companion_instance;
  }
  TagDefineBitsJPEG2.prototype.parse_roywkq$$default = function (data_0, length_0, version_0, async_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_roywkq$$default(this, data_0, length_0, version_0, async_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parse_roywkq$$default($this, data_0, length_0, version_0, async_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$length = length_0;
    this.local$version = version_0;
    this.local$async = async_0;
  }
  Coroutine$parse_roywkq$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_roywkq$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_roywkq$$default.prototype.constructor = Coroutine$parse_roywkq$$default;
  Coroutine$parse_roywkq$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.parse_roywkq$(this.local$data, this.local$length, this.local$version, this.local$async, this, TagDefineBits.prototype.parse_roywkq$$default.bind(this.$this));
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.bitmapData.get_za3lpa$(0) === 255 && (this.$this.bitmapData.get_za3lpa$(1) === 216 || this.$this.bitmapData.get_za3lpa$(1) === 217)) {
              this.$this.bitmapType = BitmapType_getInstance().JPEG;
            }
             else if (this.$this.bitmapData.get_za3lpa$(0) === 137 && this.$this.bitmapData.get_za3lpa$(1) === 80 && this.$this.bitmapData.get_za3lpa$(2) === 78 && this.$this.bitmapData.get_za3lpa$(3) === 71 && this.$this.bitmapData.get_za3lpa$(4) === 13 && this.$this.bitmapData.get_za3lpa$(5) === 10 && this.$this.bitmapData.get_za3lpa$(6) === 26 && this.$this.bitmapData.get_za3lpa$(7) === 10) {
              this.$this.bitmapType = BitmapType_getInstance().PNG;
            }
             else if (this.$this.bitmapData.get_za3lpa$(0) === 71 && this.$this.bitmapData.get_za3lpa$(1) === 73 && this.$this.bitmapData.get_za3lpa$(2) === 70 && this.$this.bitmapData.get_za3lpa$(3) === 56 && this.$this.bitmapData.get_za3lpa$(4) === 57 && this.$this.bitmapData.get_za3lpa$(5) === 97) {
              this.$this.bitmapType = BitmapType_getInstance().GIF89A;
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
  Object.defineProperty(TagDefineBitsJPEG2.prototype, 'type', {
    get: function () {
      return this.type_6g9x6h$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG2.prototype, 'name', {
    get: function () {
      return this.name_6k02ne$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG2.prototype, 'version', {
    get: function () {
      return this.version_qibjph$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG2.prototype, 'level', {
    get: function () {
      return this.level_8zjlhr$_0;
    }
  });
  TagDefineBitsJPEG2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'Type: ' + BitmapType_getInstance().toString_za3lpa$(this.bitmapType) + ', ' + 'BitmapLength: ' + Kotlin.toString(this.bitmapData.length);
    return str;
  };
  TagDefineBitsJPEG2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineBitsJPEG2',
    interfaces: [TagDefineBits, IDefinitionTag]
  };
  function TagDefineBitsJPEG3() {
    TagDefineBitsJPEG3$Companion_getInstance();
    TagDefineBitsJPEG2.call(this);
    this.bitmapAlphaData = new FlashByteArray();
    this.type_884d1k$_0 = TagDefineBitsJPEG3$Companion_getInstance().TYPE;
    this.name_84e7kn$_0 = 'DefineBitsJPEG3';
    this.version_trbihy$_0 = this.bitmapType === BitmapType_getInstance().JPEG ? 3 : 8;
    this.level_x7xzf6$_0 = 3;
  }
  function TagDefineBitsJPEG3$Companion() {
    TagDefineBitsJPEG3$Companion_instance = this;
    this.TYPE = 35;
  }
  TagDefineBitsJPEG3$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBitsJPEG3$Companion_instance = null;
  function TagDefineBitsJPEG3$Companion_getInstance() {
    if (TagDefineBitsJPEG3$Companion_instance === null) {
      new TagDefineBitsJPEG3$Companion();
    }
    return TagDefineBitsJPEG3$Companion_instance;
  }
  TagDefineBitsJPEG3.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var alphaDataOffset = data.readUI32();
    this.bitmapData = toFlash(data.readBytes_za3lpa$(alphaDataOffset));
    if (this.bitmapData.get_za3lpa$(0) === 255 && (this.bitmapData.get_za3lpa$(1) === 216 || this.bitmapData.get_za3lpa$(1) === 217)) {
      this.bitmapType = BitmapType_getInstance().JPEG;
    }
     else if (this.bitmapData.get_za3lpa$(0) === 137 && this.bitmapData.get_za3lpa$(1) === 80 && this.bitmapData.get_za3lpa$(2) === 78 && this.bitmapData.get_za3lpa$(3) === 71 && this.bitmapData.get_za3lpa$(4) === 13 && this.bitmapData.get_za3lpa$(5) === 10 && this.bitmapData.get_za3lpa$(6) === 26 && this.bitmapData.get_za3lpa$(7) === 10) {
      this.bitmapType = BitmapType_getInstance().PNG;
    }
     else if (this.bitmapData.get_za3lpa$(0) === 71 && this.bitmapData.get_za3lpa$(1) === 73 && this.bitmapData.get_za3lpa$(2) === 70 && this.bitmapData.get_za3lpa$(3) === 56 && this.bitmapData.get_za3lpa$(4) === 57 && this.bitmapData.get_za3lpa$(5) === 97) {
      this.bitmapType = BitmapType_getInstance().GIF89A;
    }
    var alphaDataSize = length - alphaDataOffset - 6 | 0;
    if (alphaDataSize > 0) {
      this.bitmapAlphaData = toFlash(data.readBytes_za3lpa$(alphaDataSize));
    }
  };
  Object.defineProperty(TagDefineBitsJPEG3.prototype, 'type', {
    get: function () {
      return this.type_884d1k$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG3.prototype, 'name', {
    get: function () {
      return this.name_84e7kn$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG3.prototype, 'version', {
    get: function () {
      return this.version_trbihy$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG3.prototype, 'level', {
    get: function () {
      return this.level_x7xzf6$_0;
    }
  });
  TagDefineBitsJPEG3.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'Type: ' + BitmapType_getInstance().toString_za3lpa$(this.bitmapType) + ', ' + 'HasAlphaData: ' + Kotlin.toString(this.bitmapAlphaData.length > 0) + ', ' + (this.bitmapAlphaData.length > 0 ? 'BitmapAlphaLength: ' + Kotlin.toString(this.bitmapAlphaData.length) + ', ' : '') + 'BitmapLength: ' + Kotlin.toString(this.bitmapData.length);
    return str;
  };
  TagDefineBitsJPEG3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineBitsJPEG3',
    interfaces: [TagDefineBitsJPEG2, IDefinitionTag]
  };
  function TagDefineBitsJPEG4() {
    TagDefineBitsJPEG4$Companion_getInstance();
    TagDefineBitsJPEG3.call(this);
    this.deblockParam = 0.0;
    this.type_mwin9l$_0 = TagDefineBitsJPEG4$Companion_getInstance().TYPE;
    this.name_msshso$_0 = 'DefineBitsJPEG4';
    this.version_x0bhaf$_0 = 10;
    this.level_4ebicz$_0 = 4;
  }
  function TagDefineBitsJPEG4$Companion() {
    TagDefineBitsJPEG4$Companion_instance = this;
    this.TYPE = 90;
  }
  TagDefineBitsJPEG4$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBitsJPEG4$Companion_instance = null;
  function TagDefineBitsJPEG4$Companion_getInstance() {
    if (TagDefineBitsJPEG4$Companion_instance === null) {
      new TagDefineBitsJPEG4$Companion();
    }
    return TagDefineBitsJPEG4$Companion_instance;
  }
  TagDefineBitsJPEG4.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var alphaDataOffset = data.readUI32();
    this.deblockParam = data.readFIXED8();
    this.bitmapData = toFlash(data.readBytes_za3lpa$(alphaDataOffset));
    if (this.bitmapData.get_za3lpa$(0) === 255 && (this.bitmapData.get_za3lpa$(1) === 216 || this.bitmapData.get_za3lpa$(1) === 217)) {
      this.bitmapType = BitmapType_getInstance().JPEG;
    }
     else if (this.bitmapData.get_za3lpa$(0) === 137 && this.bitmapData.get_za3lpa$(1) === 80 && this.bitmapData.get_za3lpa$(2) === 78 && this.bitmapData.get_za3lpa$(3) === 71 && this.bitmapData.get_za3lpa$(4) === 13 && this.bitmapData.get_za3lpa$(5) === 10 && this.bitmapData.get_za3lpa$(6) === 26 && this.bitmapData.get_za3lpa$(7) === 10) {
      this.bitmapType = BitmapType_getInstance().PNG;
    }
     else if (this.bitmapData.get_za3lpa$(0) === 71 && this.bitmapData.get_za3lpa$(1) === 73 && this.bitmapData.get_za3lpa$(2) === 70 && this.bitmapData.get_za3lpa$(3) === 56 && this.bitmapData.get_za3lpa$(4) === 57 && this.bitmapData.get_za3lpa$(5) === 97) {
      this.bitmapType = BitmapType_getInstance().GIF89A;
    }
    var alphaDataSize = length - alphaDataOffset - 6 | 0;
    if (alphaDataSize > 0) {
      this.bitmapAlphaData = toFlash(data.readBytes_za3lpa$(alphaDataSize));
    }
  };
  Object.defineProperty(TagDefineBitsJPEG4.prototype, 'type', {
    get: function () {
      return this.type_mwin9l$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG4.prototype, 'name', {
    get: function () {
      return this.name_msshso$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG4.prototype, 'version', {
    get: function () {
      return this.version_x0bhaf$_0;
    }
  });
  Object.defineProperty(TagDefineBitsJPEG4.prototype, 'level', {
    get: function () {
      return this.level_4ebicz$_0;
    }
  });
  TagDefineBitsJPEG4.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'Type: ' + BitmapType_getInstance().toString_za3lpa$(this.bitmapType) + ', ' + 'DeblockParam: ' + Kotlin.toString(this.deblockParam) + ', ' + 'HasAlphaData: ' + Kotlin.toString(this.bitmapAlphaData.length > 0) + ', ' + (this.bitmapAlphaData.length > 0 ? 'BitmapAlphaLength: ' + Kotlin.toString(this.bitmapAlphaData.length) + ', ' : '') + 'BitmapLength: ' + Kotlin.toString(this.bitmapData.length);
    return str;
  };
  TagDefineBitsJPEG4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineBitsJPEG4',
    interfaces: [TagDefineBitsJPEG3, IDefinitionTag]
  };
  function TagDefineBitsLossless() {
    TagDefineBitsLossless$Companion_getInstance();
    _BaseTag.call(this);
    this.hasAlpha_wjj0s9$_0 = false;
    this.bitmapFormat = BitmapFormat$UNKNOWN_getInstance();
    this.bitmapWidth = 0;
    this.bitmapHeight = 0;
    this.bitmapColorTableSizeM1 = 0;
    this.characterId_omxa99$_0 = 0;
    this.zlibBitmapData = new FlashByteArray();
    this.type_neruql$_0 = TagDefineBitsLossless$Companion_getInstance().TYPE;
    this.name_nii07i$_0 = 'DefineBitsLossless';
    this.version_c6h15r$_0 = 2;
    this.level_ji3wzx$_0 = 1;
  }
  function TagDefineBitsLossless$Companion() {
    TagDefineBitsLossless$Companion_instance = this;
    this.TYPE = 20;
  }
  TagDefineBitsLossless$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBitsLossless$Companion_instance = null;
  function TagDefineBitsLossless$Companion_getInstance() {
    if (TagDefineBitsLossless$Companion_instance === null) {
      new TagDefineBitsLossless$Companion();
    }
    return TagDefineBitsLossless$Companion_instance;
  }
  Object.defineProperty(TagDefineBitsLossless.prototype, 'hasAlpha', {
    get: function () {
      return this.hasAlpha_wjj0s9$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'bitmapColorTableSize', {
    get: function () {
      return this.bitmapColorTableSizeM1 + 1 | 0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'bytesPerPixel', {
    get: function () {
      var tmp$;
      tmp$ = this.bitmapFormat;
      if (Kotlin.equals(tmp$, BitmapFormat$BIT_8_getInstance()))
        return 1;
      else if (Kotlin.equals(tmp$, BitmapFormat$BIT_15_getInstance()))
        return 2;
      else if (Kotlin.equals(tmp$, BitmapFormat$BIT_24_32_getInstance()))
        return 4;
      else if (Kotlin.equals(tmp$, BitmapFormat$UNKNOWN_getInstance()))
        return 1;
      else
        return Kotlin.noWhenBranchMatched();
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'alignment', {
    get: function () {
      var tmp$;
      tmp$ = this.bitmapFormat;
      if (Kotlin.equals(tmp$, BitmapFormat$BIT_8_getInstance()))
        return 4;
      else if (Kotlin.equals(tmp$, BitmapFormat$BIT_15_getInstance()))
        return 2;
      else if (Kotlin.equals(tmp$, BitmapFormat$BIT_24_32_getInstance()))
        return 1;
      else if (Kotlin.equals(tmp$, BitmapFormat$UNKNOWN_getInstance()))
        return 1;
      else
        return Kotlin.noWhenBranchMatched();
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'actualWidth', {
    get: function () {
      return nextAlignedTo(this.bitmapWidth, this.alignment);
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'actualHeight', {
    get: function () {
      return nextAlignedTo(this.bitmapHeight, this.alignment);
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'characterId', {
    get: function () {
      return this.characterId_omxa99$_0;
    },
    set: function (characterId) {
      this.characterId_omxa99$_0 = characterId;
    }
  });
  TagDefineBitsLossless.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var rawFormat = data.readUI8();
    this.bitmapFormat = BitmapFormat$Companion_getInstance().get_za3lpa$(rawFormat);
    this.bitmapWidth = data.readUI16();
    this.bitmapHeight = data.readUI16();
    if (this.bitmapFormat === BitmapFormat$BIT_8_getInstance())
      this.bitmapColorTableSizeM1 = data.readUI8();
    this.zlibBitmapData = toFlash(data.readBytes_za3lpa$(length - (this.bitmapFormat === BitmapFormat$BIT_8_getInstance() ? 8 : 7) | 0));
  };
  Object.defineProperty(TagDefineBitsLossless.prototype, 'type', {
    get: function () {
      return this.type_neruql$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'name', {
    get: function () {
      return this.name_nii07i$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'version', {
    get: function () {
      return this.version_c6h15r$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless.prototype, 'level', {
    get: function () {
      return this.level_ji3wzx$_0;
    }
  });
  TagDefineBitsLossless.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + this.characterId + ', Format: ' + this.bitmapFormat + ', Size: (' + this.bitmapWidth + ',' + this.bitmapHeight + ')';
  };
  TagDefineBitsLossless.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineBitsLossless',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineBitsLossless2() {
    TagDefineBitsLossless2$Companion_getInstance();
    TagDefineBitsLossless.call(this);
    this.hasAlpha_1lyuc7$_0 = true;
    this.type_a2zpar$_0 = TagDefineBitsLossless2$Companion_getInstance().TYPE;
    this.name_9z9jtu$_0 = 'DefineBitsLossless2';
    this.version_pkzklt$_0 = 3;
    this.level_od1khv$_0 = 2;
  }
  function TagDefineBitsLossless2$Companion() {
    TagDefineBitsLossless2$Companion_instance = this;
    this.TYPE = 36;
  }
  TagDefineBitsLossless2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineBitsLossless2$Companion_instance = null;
  function TagDefineBitsLossless2$Companion_getInstance() {
    if (TagDefineBitsLossless2$Companion_instance === null) {
      new TagDefineBitsLossless2$Companion();
    }
    return TagDefineBitsLossless2$Companion_instance;
  }
  Object.defineProperty(TagDefineBitsLossless2.prototype, 'hasAlpha', {
    get: function () {
      return this.hasAlpha_1lyuc7$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless2.prototype, 'type', {
    get: function () {
      return this.type_a2zpar$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless2.prototype, 'name', {
    get: function () {
      return this.name_9z9jtu$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless2.prototype, 'version', {
    get: function () {
      return this.version_pkzklt$_0;
    }
  });
  Object.defineProperty(TagDefineBitsLossless2.prototype, 'level', {
    get: function () {
      return this.level_od1khv$_0;
    }
  });
  TagDefineBitsLossless2.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + this.characterId + ', Format: ' + this.bitmapFormat + ', Size: (' + this.bitmapWidth + ',' + this.bitmapHeight + ')';
  };
  TagDefineBitsLossless2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineBitsLossless2',
    interfaces: [TagDefineBitsLossless, IDefinitionTag]
  };
  function TagDefineButton() {
    TagDefineButton$Companion_getInstance();
    _BaseTag.call(this);
    this.characterId_uvxebn$_0 = 0;
    this.characters_0 = ArrayList_init();
    this.actions_0 = ArrayList_init();
    this.frames_0 = HashMap_init();
    this.labelCount_0 = 0;
    this.type_wxm65v$_0 = TagDefineButton$Companion_getInstance().TYPE;
    this.name_wtw0oy$_0 = 'DefineButton';
    this.version_tjw7bj$_0 = 1;
    this.level_mf9jj7$_0 = 1;
  }
  function TagDefineButton$Companion() {
    TagDefineButton$Companion_instance = this;
    this.TYPE = 7;
    this.STATE_UP = 'up';
    this.STATE_OVER = 'over';
    this.STATE_DOWN = 'down';
    this.STATE_HIT = 'hit';
  }
  TagDefineButton$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineButton$Companion_instance = null;
  function TagDefineButton$Companion_getInstance() {
    if (TagDefineButton$Companion_instance === null) {
      new TagDefineButton$Companion();
    }
    return TagDefineButton$Companion_instance;
  }
  Object.defineProperty(TagDefineButton.prototype, 'characterId', {
    get: function () {
      return this.characterId_uvxebn$_0;
    },
    set: function (characterId) {
      this.characterId_uvxebn$_0 = characterId;
    }
  });
  TagDefineButton.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var record;
    while (true) {
      record = data.readBUTTONRECORD_za3lpa$();
      if (record == null)
        break;
      this.characters_0.add_11rb$(record);
    }
    var action;
    while (true) {
      action = data.readACTIONRECORD();
      if (action == null)
        break;
      this.actions_0.add_11rb$(action);
    }
    this.labelCount_0 = Action$Companion_getInstance().resolveOffsets_3xckz2$(this.actions_0);
    this.processRecords_0();
  };
  TagDefineButton.prototype.getRecordsByState_61zpoe$ = function (state) {
    var tmp$;
    return Kotlin.isType(tmp$ = this.frames_0.get_11rb$(state), ArrayList) ? tmp$ : Kotlin.throwCCE();
  };
  Object.defineProperty(TagDefineButton.prototype, 'type', {
    get: function () {
      return this.type_wxm65v$_0;
    }
  });
  Object.defineProperty(TagDefineButton.prototype, 'name', {
    get: function () {
      return this.name_wtw0oy$_0;
    }
  });
  Object.defineProperty(TagDefineButton.prototype, 'version', {
    get: function () {
      return this.version_tjw7bj$_0;
    }
  });
  Object.defineProperty(TagDefineButton.prototype, 'level', {
    get: function () {
      return this.level_mf9jj7$_0;
    }
  });
  function TagDefineButton$processRecords$lambda(it) {
    return it.placeDepth;
  }
  function TagDefineButton$processRecords$lambda_0(it) {
    return it.placeDepth;
  }
  function TagDefineButton$processRecords$lambda_1(it) {
    return it.placeDepth;
  }
  function TagDefineButton$processRecords$lambda_2(it) {
    return it.placeDepth;
  }
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  var wrapFunction = Kotlin.wrapFunction;
  var compareBy$lambda = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
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
  var compareBy$lambda_0 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kotlin.Kind.CLASS, interfaces: [Comparator]};
  var compareBy$lambda_1 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_1(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_1.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_1.$metadata$ = {kind: Kotlin.Kind.CLASS, interfaces: [Comparator]};
  var compareBy$lambda_2 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_2(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_2.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_2.$metadata$ = {kind: Kotlin.Kind.CLASS, interfaces: [Comparator]};
  TagDefineButton.prototype.processRecords_0 = function () {
    var tmp$;
    var upState = ArrayList_init();
    var overState = ArrayList_init();
    var downState = ArrayList_init();
    var hitState = ArrayList_init();
    tmp$ = this.characters_0.size;
    for (var i = 0; i < tmp$; i++) {
      var record = this.characters_0.get_za3lpa$(i);
      if (record.stateUp)
        upState.add_11rb$(record);
      if (record.stateOver)
        overState.add_11rb$(record);
      if (record.stateDown)
        downState.add_11rb$(record);
      if (record.stateHitTest)
        hitState.add_11rb$(record);
    }
    var tmp$_0 = this.frames_0;
    var tmp$_1 = TagDefineButton$Companion_getInstance().STATE_UP;
    var value = ArrayList_init_0(sortedWith(upState, new Comparator$ObjectLiteral(compareBy$lambda(TagDefineButton$processRecords$lambda))));
    tmp$_0.put_xwzc9p$(tmp$_1, value);
    var tmp$_2 = this.frames_0;
    var tmp$_3 = TagDefineButton$Companion_getInstance().STATE_OVER;
    var value_0 = ArrayList_init_0(sortedWith(overState, new Comparator$ObjectLiteral_0(compareBy$lambda_0(TagDefineButton$processRecords$lambda_0))));
    tmp$_2.put_xwzc9p$(tmp$_3, value_0);
    var tmp$_4 = this.frames_0;
    var tmp$_5 = TagDefineButton$Companion_getInstance().STATE_DOWN;
    var value_1 = ArrayList_init_0(sortedWith(downState, new Comparator$ObjectLiteral_1(compareBy$lambda_1(TagDefineButton$processRecords$lambda_1))));
    tmp$_4.put_xwzc9p$(tmp$_5, value_1);
    var tmp$_6 = this.frames_0;
    var tmp$_7 = TagDefineButton$Companion_getInstance().STATE_HIT;
    var value_2 = ArrayList_init_0(sortedWith(hitState, new Comparator$ObjectLiteral_2(compareBy$lambda_2(TagDefineButton$processRecords$lambda_2))));
    tmp$_6.put_xwzc9p$(tmp$_7, value_2);
  };
  TagDefineButton.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0, tmp$_1;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId);
    if (this.characters_0.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Characters:';
      tmp$ = this.characters_0.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.characters_0.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }
    if (this.actions_0.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Actions:';
      if ((flags & SWF$Companion_getInstance().TOSTRING_FLAG_AVM1_BYTECODE) === 0) {
        tmp$_0 = this.actions_0.size;
        for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i_0) + '] ' + this.actions_0.get_za3lpa$(i_0).toString_za3lpa$(indent + 4 | 0);
        }
      }
       else {
        var context = new ActionExecutionContext(this.actions_0, ArrayList_init(), this.labelCount_0);
        tmp$_1 = this.actions_0.size;
        for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + this.actions_0.get_za3lpa$(i_1).toBytecode_3zq4qf$(indent + 4 | 0, context);
        }
        if (context.endLabel != null) {
          str += '\n' + repeat(' ', indent + 6 | 0) + context.endLabel + ':';
        }
      }
    }
    return str;
  };
  TagDefineButton.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineButton',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineButton2() {
    TagDefineButton2$Companion_getInstance();
    _BaseTag.call(this);
    this.trackAsMenu = false;
    this.characterId_3q8099$_0 = 0;
    this.characters = ArrayList_init();
    this.condActions = ArrayList_init();
    this.frames = HashMap_init();
    this.type_j0qw59$_0 = TagDefineButton2$Companion_getInstance().TYPE;
    this.name_j4h1m6$_0 = 'DefineButton2';
    this.version_fracjj$_0 = 3;
    this.level_phi8kt$_0 = 2;
  }
  function TagDefineButton2$Companion() {
    TagDefineButton2$Companion_instance = this;
    this.TYPE = 34;
  }
  TagDefineButton2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineButton2$Companion_instance = null;
  function TagDefineButton2$Companion_getInstance() {
    if (TagDefineButton2$Companion_instance === null) {
      new TagDefineButton2$Companion();
    }
    return TagDefineButton2$Companion_instance;
  }
  Object.defineProperty(TagDefineButton2.prototype, 'characterId', {
    get: function () {
      return this.characterId_3q8099$_0;
    },
    set: function (characterId) {
      this.characterId_3q8099$_0 = characterId;
    }
  });
  TagDefineButton2.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.trackAsMenu = (data.readUI8() & 1) !== 0;
    var actionOffset = data.readUI16();
    var record;
    while (true) {
      record = data.readBUTTONRECORD_za3lpa$(2);
      if (record == null)
        break;
      this.characters.add_11rb$(record);
    }
    if (actionOffset !== 0) {
      var condActionSize = 0;
      do {
        condActionSize = data.readUI16();
        this.condActions.add_11rb$(data.readBUTTONCONDACTION());
      }
       while (condActionSize !== 0);
    }
    this.processRecords();
  };
  TagDefineButton2.prototype.getRecordsByState_61zpoe$ = function (state) {
    var tmp$;
    return (tmp$ = this.frames.get_11rb$(state)) != null ? tmp$ : Kotlin.throwNPE();
  };
  Object.defineProperty(TagDefineButton2.prototype, 'type', {
    get: function () {
      return this.type_j0qw59$_0;
    }
  });
  Object.defineProperty(TagDefineButton2.prototype, 'name', {
    get: function () {
      return this.name_j4h1m6$_0;
    }
  });
  Object.defineProperty(TagDefineButton2.prototype, 'version', {
    get: function () {
      return this.version_fracjj$_0;
    }
  });
  Object.defineProperty(TagDefineButton2.prototype, 'level', {
    get: function () {
      return this.level_phi8kt$_0;
    }
  });
  function TagDefineButton2$processRecords$lambda(it) {
    return it.placeDepth;
  }
  function TagDefineButton2$processRecords$lambda_0(it) {
    return it.placeDepth;
  }
  function TagDefineButton2$processRecords$lambda_1(it) {
    return it.placeDepth;
  }
  function TagDefineButton2$processRecords$lambda_2(it) {
    return it.placeDepth;
  }
  var compareBy$lambda_3 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_3(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_3.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_3.$metadata$ = {kind: Kotlin.Kind.CLASS, interfaces: [Comparator]};
  var compareBy$lambda_4 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_4(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_4.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_4.$metadata$ = {kind: Kotlin.Kind.CLASS, interfaces: [Comparator]};
  var compareBy$lambda_5 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_5(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_5.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_5.$metadata$ = {kind: Kotlin.Kind.CLASS, interfaces: [Comparator]};
  var compareBy$lambda_6 = wrapFunction(function () {
    var compareValues = Kotlin.kotlin.comparisons.compareValues_s00gnj$;
    return function (closure$selector) {
      return function (a, b) {
        var selector = closure$selector;
        return compareValues(selector(a), selector(b));
      };
    };
  });
  function Comparator$ObjectLiteral_6(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_6.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_6.$metadata$ = {kind: Kotlin.Kind.CLASS, interfaces: [Comparator]};
  TagDefineButton2.prototype.processRecords = function () {
    var tmp$;
    var upState = ArrayList_init();
    var overState = ArrayList_init();
    var downState = ArrayList_init();
    var hitState = ArrayList_init();
    tmp$ = this.characters.size;
    for (var i = 0; i < tmp$; i++) {
      var record = this.characters.get_za3lpa$(i);
      if (record.stateUp)
        upState.add_11rb$(record);
      if (record.stateOver)
        overState.add_11rb$(record);
      if (record.stateDown)
        downState.add_11rb$(record);
      if (record.stateHitTest)
        hitState.add_11rb$(record);
    }
    var tmp$_0 = this.frames;
    var tmp$_1 = TagDefineButton$Companion_getInstance().STATE_UP;
    var value = ArrayList_init_0(sortedWith(upState, new Comparator$ObjectLiteral_3(compareBy$lambda_3(TagDefineButton2$processRecords$lambda))));
    tmp$_0.put_xwzc9p$(tmp$_1, value);
    var tmp$_2 = this.frames;
    var tmp$_3 = TagDefineButton$Companion_getInstance().STATE_OVER;
    var value_0 = ArrayList_init_0(sortedWith(overState, new Comparator$ObjectLiteral_4(compareBy$lambda_4(TagDefineButton2$processRecords$lambda_0))));
    tmp$_2.put_xwzc9p$(tmp$_3, value_0);
    var tmp$_4 = this.frames;
    var tmp$_5 = TagDefineButton$Companion_getInstance().STATE_DOWN;
    var value_1 = ArrayList_init_0(sortedWith(downState, new Comparator$ObjectLiteral_5(compareBy$lambda_5(TagDefineButton2$processRecords$lambda_1))));
    tmp$_4.put_xwzc9p$(tmp$_5, value_1);
    var tmp$_6 = this.frames;
    var tmp$_7 = TagDefineButton$Companion_getInstance().STATE_HIT;
    var value_2 = ArrayList_init_0(sortedWith(hitState, new Comparator$ObjectLiteral_6(compareBy$lambda_6(TagDefineButton2$processRecords$lambda_2))));
    tmp$_6.put_xwzc9p$(tmp$_7, value_2);
  };
  TagDefineButton2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', TrackAsMenu: ' + Kotlin.toString(this.trackAsMenu);
    if (this.characters.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Characters:';
      tmp$ = this.characters.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.characters.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }
    if (this.condActions.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'CondActions:';
      tmp$_0 = this.condActions.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i_0) + '] ' + this.condActions.get_za3lpa$(i_0).toString_vux9f0$(indent + 4 | 0, flags);
      }
    }
    return str;
  };
  TagDefineButton2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineButton2',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineButtonCxform() {
    TagDefineButtonCxform$Companion_getInstance();
    _BaseTag.call(this);
    this.buttonColorTransform_yne8qd$_0 = this.buttonColorTransform_yne8qd$_0;
    this.characterId_ppfc5m$_0 = 0;
    this.type_ps13as$_0 = TagDefineButtonCxform$Companion_getInstance().TYPE;
    this.name_pvr8rp$_0 = 'DefineButtonCxform';
    this.version_6c7wtm$_0 = 2;
    this.level_lvy8eu$_0 = 1;
  }
  function TagDefineButtonCxform$Companion() {
    TagDefineButtonCxform$Companion_instance = this;
    this.TYPE = 23;
  }
  TagDefineButtonCxform$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineButtonCxform$Companion_instance = null;
  function TagDefineButtonCxform$Companion_getInstance() {
    if (TagDefineButtonCxform$Companion_instance === null) {
      new TagDefineButtonCxform$Companion();
    }
    return TagDefineButtonCxform$Companion_instance;
  }
  Object.defineProperty(TagDefineButtonCxform.prototype, 'buttonColorTransform', {
    get: function () {
      if (this.buttonColorTransform_yne8qd$_0 == null)
        return Kotlin.throwUPAE('buttonColorTransform');
      return this.buttonColorTransform_yne8qd$_0;
    },
    set: function (buttonColorTransform) {
      this.buttonColorTransform_yne8qd$_0 = buttonColorTransform;
    }
  });
  Object.defineProperty(TagDefineButtonCxform.prototype, 'characterId', {
    get: function () {
      return this.characterId_ppfc5m$_0;
    },
    set: function (characterId) {
      this.characterId_ppfc5m$_0 = characterId;
    }
  });
  TagDefineButtonCxform.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.buttonColorTransform = data.readCXFORM();
  };
  Object.defineProperty(TagDefineButtonCxform.prototype, 'type', {
    get: function () {
      return this.type_ps13as$_0;
    }
  });
  Object.defineProperty(TagDefineButtonCxform.prototype, 'name', {
    get: function () {
      return this.name_pvr8rp$_0;
    }
  });
  Object.defineProperty(TagDefineButtonCxform.prototype, 'version', {
    get: function () {
      return this.version_6c7wtm$_0;
    }
  });
  Object.defineProperty(TagDefineButtonCxform.prototype, 'level', {
    get: function () {
      return this.level_lvy8eu$_0;
    }
  });
  TagDefineButtonCxform.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'ColorTransform: ' + Kotlin.toString(this.buttonColorTransform);
    return str;
  };
  TagDefineButtonCxform.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineButtonCxform',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineButtonSound() {
    TagDefineButtonSound$Companion_getInstance();
    _BaseTag.call(this);
    this.buttonSoundChar0 = 0;
    this.buttonSoundChar1 = 0;
    this.buttonSoundChar2 = 0;
    this.buttonSoundChar3 = 0;
    this.buttonSoundInfo0_mcr59n$_0 = this.buttonSoundInfo0_mcr59n$_0;
    this.buttonSoundInfo1_mcr58s$_0 = this.buttonSoundInfo1_mcr58s$_0;
    this.buttonSoundInfo2_mcr57x$_0 = this.buttonSoundInfo2_mcr57x$_0;
    this.buttonSoundInfo3_mcr572$_0 = this.buttonSoundInfo3_mcr572$_0;
    this.characterId_ufxxm2$_0 = 0;
    this.type_cv1rr4$_0 = TagDefineButtonSound$Companion_getInstance().TYPE;
    this.name_cyrx81$_0 = 'DefineButtonSound';
    this.version_41iqn6$_0 = 2;
    this.level_ncwfna$_0 = 1;
  }
  function TagDefineButtonSound$Companion() {
    TagDefineButtonSound$Companion_instance = this;
    this.TYPE = 17;
  }
  TagDefineButtonSound$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineButtonSound$Companion_instance = null;
  function TagDefineButtonSound$Companion_getInstance() {
    if (TagDefineButtonSound$Companion_instance === null) {
      new TagDefineButtonSound$Companion();
    }
    return TagDefineButtonSound$Companion_instance;
  }
  Object.defineProperty(TagDefineButtonSound.prototype, 'buttonSoundInfo0', {
    get: function () {
      if (this.buttonSoundInfo0_mcr59n$_0 == null)
        return Kotlin.throwUPAE('buttonSoundInfo0');
      return this.buttonSoundInfo0_mcr59n$_0;
    },
    set: function (buttonSoundInfo0) {
      this.buttonSoundInfo0_mcr59n$_0 = buttonSoundInfo0;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'buttonSoundInfo1', {
    get: function () {
      if (this.buttonSoundInfo1_mcr58s$_0 == null)
        return Kotlin.throwUPAE('buttonSoundInfo1');
      return this.buttonSoundInfo1_mcr58s$_0;
    },
    set: function (buttonSoundInfo1) {
      this.buttonSoundInfo1_mcr58s$_0 = buttonSoundInfo1;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'buttonSoundInfo2', {
    get: function () {
      if (this.buttonSoundInfo2_mcr57x$_0 == null)
        return Kotlin.throwUPAE('buttonSoundInfo2');
      return this.buttonSoundInfo2_mcr57x$_0;
    },
    set: function (buttonSoundInfo2) {
      this.buttonSoundInfo2_mcr57x$_0 = buttonSoundInfo2;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'buttonSoundInfo3', {
    get: function () {
      if (this.buttonSoundInfo3_mcr572$_0 == null)
        return Kotlin.throwUPAE('buttonSoundInfo3');
      return this.buttonSoundInfo3_mcr572$_0;
    },
    set: function (buttonSoundInfo3) {
      this.buttonSoundInfo3_mcr572$_0 = buttonSoundInfo3;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'characterId', {
    get: function () {
      return this.characterId_ufxxm2$_0;
    },
    set: function (characterId) {
      this.characterId_ufxxm2$_0 = characterId;
    }
  });
  TagDefineButtonSound.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.buttonSoundChar0 = data.readUI16();
    if (this.buttonSoundChar0 !== 0)
      this.buttonSoundInfo0 = data.readSOUNDINFO();
    this.buttonSoundChar1 = data.readUI16();
    if (this.buttonSoundChar1 !== 0)
      this.buttonSoundInfo1 = data.readSOUNDINFO();
    this.buttonSoundChar2 = data.readUI16();
    if (this.buttonSoundChar2 !== 0)
      this.buttonSoundInfo2 = data.readSOUNDINFO();
    this.buttonSoundChar3 = data.readUI16();
    if (this.buttonSoundChar3 !== 0)
      this.buttonSoundInfo3 = data.readSOUNDINFO();
  };
  Object.defineProperty(TagDefineButtonSound.prototype, 'type', {
    get: function () {
      return this.type_cv1rr4$_0;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'name', {
    get: function () {
      return this.name_cyrx81$_0;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'version', {
    get: function () {
      return this.version_41iqn6$_0;
    }
  });
  Object.defineProperty(TagDefineButtonSound.prototype, 'level', {
    get: function () {
      return this.level_ncwfna$_0;
    }
  });
  TagDefineButtonSound.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ButtonID: ' + Kotlin.toString(this.characterId) + ', ' + 'ButtonSoundChars: ' + Kotlin.toString(this.buttonSoundChar0) + ',' + Kotlin.toString(this.buttonSoundChar1) + ',' + Kotlin.toString(this.buttonSoundChar2) + ',' + Kotlin.toString(this.buttonSoundChar3);
    return str;
  };
  TagDefineButtonSound.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineButtonSound',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineEditText() {
    TagDefineEditText$Companion_getInstance();
    _BaseTag.call(this);
    this.bounds_q916mb$_0 = this.bounds_q916mb$_0;
    this.variableName = null;
    this.hasText = false;
    this.wordWrap = false;
    this.multiline = false;
    this.password = false;
    this.readOnly = false;
    this.hasTextColor = false;
    this.hasMaxLength = false;
    this.hasFont = false;
    this.hasFontClass = false;
    this.autoSize = false;
    this.hasLayout = false;
    this.noSelect = false;
    this.border = false;
    this.wasStatic = false;
    this.html = false;
    this.useOutlines = false;
    this.fontId = 0;
    this.fontClass = null;
    this.fontHeight = 0;
    this.textColor = 0;
    this.maxLength = 0;
    this.align = 0;
    this.leftMargin = 0;
    this.rightMargin = 0;
    this.indent = 0;
    this.leading = 0;
    this.initialText = null;
    this.characterId_9fj79a$_0 = 0;
    this.type_scob6w$_0 = TagDefineEditText$Companion_getInstance().TYPE;
    this.name_sgegnt$_0 = 'DefineEditText';
    this.version_ua8jau$_0 = 4;
    this.level_umtz36$_0 = 1;
  }
  function TagDefineEditText$Companion() {
    TagDefineEditText$Companion_instance = this;
    this.TYPE = 37;
  }
  TagDefineEditText$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineEditText$Companion_instance = null;
  function TagDefineEditText$Companion_getInstance() {
    if (TagDefineEditText$Companion_instance === null) {
      new TagDefineEditText$Companion();
    }
    return TagDefineEditText$Companion_instance;
  }
  Object.defineProperty(TagDefineEditText.prototype, 'bounds', {
    get: function () {
      if (this.bounds_q916mb$_0 == null)
        return Kotlin.throwUPAE('bounds');
      return this.bounds_q916mb$_0;
    },
    set: function (bounds) {
      this.bounds_q916mb$_0 = bounds;
    }
  });
  Object.defineProperty(TagDefineEditText.prototype, 'characterId', {
    get: function () {
      return this.characterId_9fj79a$_0;
    },
    set: function (characterId) {
      this.characterId_9fj79a$_0 = characterId;
    }
  });
  TagDefineEditText.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.bounds = data.readRECT();
    var flags1 = data.readUI8();
    this.hasText = (flags1 & 128) !== 0;
    this.wordWrap = (flags1 & 64) !== 0;
    this.multiline = (flags1 & 32) !== 0;
    this.password = (flags1 & 16) !== 0;
    this.readOnly = (flags1 & 8) !== 0;
    this.hasTextColor = (flags1 & 4) !== 0;
    this.hasMaxLength = (flags1 & 2) !== 0;
    this.hasFont = (flags1 & 1) !== 0;
    var flags2 = data.readUI8();
    this.hasFontClass = (flags2 & 128) !== 0;
    this.autoSize = (flags2 & 64) !== 0;
    this.hasLayout = (flags2 & 32) !== 0;
    this.noSelect = (flags2 & 16) !== 0;
    this.border = (flags2 & 8) !== 0;
    this.wasStatic = (flags2 & 4) !== 0;
    this.html = (flags2 & 2) !== 0;
    this.useOutlines = (flags2 & 1) !== 0;
    if (this.hasFont)
      this.fontId = data.readUI16();
    if (this.hasFontClass)
      this.fontClass = data.readString();
    if (this.hasFont)
      this.fontHeight = data.readUI16();
    if (this.hasTextColor)
      this.textColor = data.readRGBA();
    if (this.hasMaxLength)
      this.maxLength = data.readUI16();
    if (this.hasLayout) {
      this.align = data.readUI8();
      this.leftMargin = data.readUI16();
      this.rightMargin = data.readUI16();
      this.indent = data.readUI16();
      this.leading = data.readSI16();
    }
    this.variableName = data.readString();
    if (this.hasText) {
      this.initialText = data.readString();
    }
  };
  Object.defineProperty(TagDefineEditText.prototype, 'type', {
    get: function () {
      return this.type_scob6w$_0;
    }
  });
  Object.defineProperty(TagDefineEditText.prototype, 'name', {
    get: function () {
      return this.name_sgegnt$_0;
    }
  });
  Object.defineProperty(TagDefineEditText.prototype, 'version', {
    get: function () {
      return this.version_ua8jau$_0;
    }
  });
  Object.defineProperty(TagDefineEditText.prototype, 'level', {
    get: function () {
      return this.level_umtz36$_0;
    }
  });
  TagDefineEditText.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$_0 = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ';
    var tmp$_2 = this.hasText;
    if (tmp$_2) {
      tmp$_2 = ((tmp$ = this.initialText) != null ? tmp$ : Kotlin.throwNPE()).length > 0;
    }
    var str = tmp$_0 + (tmp$_2 ? 'Text: ' + this.initialText + ', ' : '') + (((tmp$_1 = this.variableName) != null ? tmp$_1 : Kotlin.throwNPE()).length > 0 ? 'VariableName: ' + this.variableName + ', ' : '') + 'Bounds: ' + Kotlin.toString(this.bounds);
    return str;
  };
  TagDefineEditText.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineEditText',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineFont() {
    TagDefineFont$Companion_getInstance();
    _BaseTag.call(this);
    this.characterId_7h6aka$_0 = 0;
    this.glyphShapeTable = ArrayList_init();
    this.type_y1ye34$_0 = TagDefineFont$Companion_getInstance().TYPE;
    this.name_xy88m7$_0 = 'DefineFont';
    this.version_r1ff82$_0 = 1;
    this.level_dvbot6$_0 = 1;
    this.unitDivisor_ehzipc$_0 = 1.0;
  }
  function TagDefineFont$Companion() {
    TagDefineFont$Companion_instance = this;
    this.TYPE = 10;
  }
  TagDefineFont$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFont$Companion_instance = null;
  function TagDefineFont$Companion_getInstance() {
    if (TagDefineFont$Companion_instance === null) {
      new TagDefineFont$Companion();
    }
    return TagDefineFont$Companion_instance;
  }
  Object.defineProperty(TagDefineFont.prototype, 'characterId', {
    get: function () {
      return this.characterId_7h6aka$_0;
    },
    set: function (characterId) {
      this.characterId_7h6aka$_0 = characterId;
    }
  });
  TagDefineFont.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var numGlyphs = data.readUI16() >>> 1;
    data.skipBytes_za3lpa$(numGlyphs - 1 << 1);
    for (var i = 0; i < numGlyphs; i++) {
      this.glyphShapeTable.add_11rb$(data.readSHAPE_14dthe$(this.unitDivisor));
    }
  };
  TagDefineFont.prototype.export_pu2qf$ = function (handler, glyphIndex) {
    this.glyphShapeTable.get_za3lpa$(glyphIndex).export_dsznx3$(handler);
  };
  Object.defineProperty(TagDefineFont.prototype, 'type', {
    get: function () {
      return this.type_y1ye34$_0;
    }
  });
  Object.defineProperty(TagDefineFont.prototype, 'name', {
    get: function () {
      return this.name_xy88m7$_0;
    }
  });
  Object.defineProperty(TagDefineFont.prototype, 'version', {
    get: function () {
      return this.version_r1ff82$_0;
    }
  });
  Object.defineProperty(TagDefineFont.prototype, 'level', {
    get: function () {
      return this.level_dvbot6$_0;
    }
  });
  Object.defineProperty(TagDefineFont.prototype, 'unitDivisor', {
    get: function () {
      return this.unitDivisor_ehzipc$_0;
    }
  });
  TagDefineFont.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'Glyphs: ' + Kotlin.toString(this.glyphShapeTable.size);
    return str + this.toStringCommon_za3lpa$(indent);
  };
  TagDefineFont.prototype.toStringCommon_za3lpa$ = function (indent) {
    var tmp$;
    var str = '';
    tmp$ = this.glyphShapeTable.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 2 | 0) + '[' + Kotlin.toString(i) + '] GlyphShapes:';
      str += this.glyphShapeTable.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
    }
    return str;
  };
  TagDefineFont.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineFont',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineFont2() {
    TagDefineFont2$Companion_getInstance();
    TagDefineFont.call(this);
    this.hasLayout = false;
    this.shiftJIS = false;
    this.smallText = false;
    this.ansi = false;
    this.wideOffsets = false;
    this.wideCodes = false;
    this.italic = false;
    this.bold = false;
    this.languageCode = 0;
    this.fontName_b2q322$_0 = this.fontName_b2q322$_0;
    this.ascent = 0;
    this.descent = 0;
    this.leading = 0;
    this.codeTable = ArrayList_init();
    this.fontAdvanceTable = ArrayList_init();
    this.fontBoundsTable = ArrayList_init();
    this.fontKerningTable = ArrayList_init();
    this.type_fprxhi$_0 = TagDefineFont2$Companion_getInstance().TYPE;
    this.name_fm1s0l$_0 = 'DefineFont2';
    this.version_8vy7j0$_0 = 3;
    this.level_e3zjm8$_0 = 2;
  }
  function TagDefineFont2$Companion() {
    TagDefineFont2$Companion_instance = this;
    this.TYPE = 48;
  }
  TagDefineFont2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFont2$Companion_instance = null;
  function TagDefineFont2$Companion_getInstance() {
    if (TagDefineFont2$Companion_instance === null) {
      new TagDefineFont2$Companion();
    }
    return TagDefineFont2$Companion_instance;
  }
  Object.defineProperty(TagDefineFont2.prototype, 'fontName', {
    get: function () {
      if (this.fontName_b2q322$_0 == null)
        return Kotlin.throwUPAE('fontName');
      return this.fontName_b2q322$_0;
    },
    set: function (fontName) {
      this.fontName_b2q322$_0 = fontName;
    }
  });
  TagDefineFont2.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    var flags = data.readUI8();
    this.hasLayout = (flags & 128) !== 0;
    this.shiftJIS = (flags & 64) !== 0;
    this.smallText = (flags & 32) !== 0;
    this.ansi = (flags & 16) !== 0;
    this.wideOffsets = (flags & 8) !== 0;
    this.wideCodes = (flags & 4) !== 0;
    this.italic = (flags & 2) !== 0;
    this.bold = (flags & 1) !== 0;
    this.languageCode = data.readLANGCODE();
    var fontNameLen = data.readUI8();
    this.fontName = data.readUTFBytes_za3lpa$(fontNameLen);
    var numGlyphs = data.readUI16();
    if (numGlyphs > 0) {
      data.skipBytes_za3lpa$(numGlyphs << (this.wideOffsets ? 2 : 1));
      var codeTableOffset = this.wideOffsets ? data.readUI32() : data.readUI16();
      for (var i = 0; i < numGlyphs; i++) {
        this.glyphShapeTable.add_11rb$(data.readSHAPE_14dthe$());
      }
      for (var i_0 = 0; i_0 < numGlyphs; i_0++) {
        this.codeTable.add_11rb$(this.wideCodes ? data.readUI16() : data.readUI8());
      }
    }
    if (this.hasLayout) {
      this.ascent = data.readUI16();
      this.descent = data.readUI16();
      this.leading = data.readSI16();
      for (var i_1 = 0; i_1 < numGlyphs; i_1++) {
        this.fontAdvanceTable.add_11rb$(data.readSI16());
      }
      for (var i_2 = 0; i_2 < numGlyphs; i_2++) {
        this.fontBoundsTable.add_11rb$(data.readRECT());
      }
      var kerningCount = data.readUI16();
      for (var i_3 = 0; i_3 < kerningCount; i_3++) {
        this.fontKerningTable.add_11rb$(data.readKERNINGRECORD_6taknv$(this.wideCodes));
      }
    }
  };
  Object.defineProperty(TagDefineFont2.prototype, 'type', {
    get: function () {
      return this.type_fprxhi$_0;
    }
  });
  Object.defineProperty(TagDefineFont2.prototype, 'name', {
    get: function () {
      return this.name_fm1s0l$_0;
    }
  });
  Object.defineProperty(TagDefineFont2.prototype, 'version', {
    get: function () {
      return this.version_8vy7j0$_0;
    }
  });
  Object.defineProperty(TagDefineFont2.prototype, 'level', {
    get: function () {
      return this.level_e3zjm8$_0;
    }
  });
  TagDefineFont2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'FontName: ' + this.fontName + ', ' + 'Italic: ' + Kotlin.toString(this.italic) + ', ' + 'Bold: ' + Kotlin.toString(this.bold) + ', ' + 'Glyphs: ' + Kotlin.toString(this.glyphShapeTable.size);
    return str + this.toStringCommon_za3lpa$(indent);
  };
  TagDefineFont2.prototype.toStringCommon_za3lpa$ = function (indent) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var str = TagDefineFont.prototype.toStringCommon_za3lpa$.call(this, indent);
    if (this.hasLayout) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Ascent: ' + Kotlin.toString(this.ascent);
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Descent: ' + Kotlin.toString(this.descent);
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Leading: ' + Kotlin.toString(this.leading);
    }
    if (this.codeTable.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'CodeTable:';
      tmp$ = this.codeTable.size;
      for (var i = 0; i < tmp$; i++) {
        if ((i & 15) === 0) {
          str += '\n' + repeat(' ', indent + 4 | 0) + this.codeTable.get_za3lpa$(i).toString();
        }
         else {
          str += ', ' + this.codeTable.get_za3lpa$(i).toString();
        }
      }
    }
    if (this.fontAdvanceTable.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'FontAdvanceTable:';
      tmp$_0 = this.fontAdvanceTable.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        if ((i_0 & 7) === 0) {
          str += '\n' + repeat(' ', indent + 4 | 0) + this.fontAdvanceTable.get_za3lpa$(i_0).toString();
        }
         else {
          str += ', ' + this.fontAdvanceTable.get_za3lpa$(i_0).toString();
        }
      }
    }
    if (this.fontBoundsTable.size > 0) {
      var hasNonNullBounds = false;
      tmp$_1 = this.fontBoundsTable.size;
      for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
        var rect = this.fontBoundsTable.get_za3lpa$(i_1);
        if (rect.xmin !== 0 || rect.xmax !== 0 || rect.ymin !== 0 || rect.ymax !== 0) {
          hasNonNullBounds = true;
          break;
        }
      }
      if (hasNonNullBounds) {
        str += '\n' + repeat(' ', indent + 2 | 0) + 'FontBoundsTable:';
        tmp$_2 = this.fontBoundsTable.size;
        for (var i_2 = 0; i_2 < tmp$_2; i_2++) {
          str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i_2) + '] ' + this.fontBoundsTable.get_za3lpa$(i_2).toString();
        }
      }
    }
    if (this.fontKerningTable.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'KerningTable:';
      tmp$_3 = this.fontKerningTable.size;
      for (var i_3 = 0; i_3 < tmp$_3; i_3++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i_3) + '] ' + this.fontKerningTable.get_za3lpa$(i_3).toString();
      }
    }
    return str;
  };
  TagDefineFont2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineFont2',
    interfaces: [TagDefineFont, IDefinitionTag]
  };
  function TagDefineFont3() {
    TagDefineFont3$Companion_getInstance();
    TagDefineFont2.call(this);
    this.type_ue67pj$_0 = TagDefineFont3$Companion_getInstance().TYPE;
    this.name_uag28m$_0 = 'DefineFont3';
    this.version_5my8qj$_0 = 8;
    this.level_epmxfz$_0 = 2;
    this.unitDivisor_s4ofkp$_0 = 20.0;
  }
  function TagDefineFont3$Companion() {
    TagDefineFont3$Companion_instance = this;
    this.TYPE = 75;
  }
  TagDefineFont3$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFont3$Companion_instance = null;
  function TagDefineFont3$Companion_getInstance() {
    if (TagDefineFont3$Companion_instance === null) {
      new TagDefineFont3$Companion();
    }
    return TagDefineFont3$Companion_instance;
  }
  Object.defineProperty(TagDefineFont3.prototype, 'type', {
    get: function () {
      return this.type_ue67pj$_0;
    }
  });
  Object.defineProperty(TagDefineFont3.prototype, 'name', {
    get: function () {
      return this.name_uag28m$_0;
    }
  });
  Object.defineProperty(TagDefineFont3.prototype, 'version', {
    get: function () {
      return this.version_5my8qj$_0;
    }
  });
  Object.defineProperty(TagDefineFont3.prototype, 'level', {
    get: function () {
      return this.level_epmxfz$_0;
    }
  });
  Object.defineProperty(TagDefineFont3.prototype, 'unitDivisor', {
    get: function () {
      return this.unitDivisor_s4ofkp$_0;
    }
  });
  TagDefineFont3.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'FontName: ' + this.fontName + ', ' + 'Italic: ' + Kotlin.toString(this.italic) + ', ' + 'Bold: ' + Kotlin.toString(this.bold) + ', ' + 'Glyphs: ' + Kotlin.toString(this.glyphShapeTable.size);
    return str + this.toStringCommon_za3lpa$(indent);
  };
  TagDefineFont3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineFont3',
    interfaces: [TagDefineFont2, IDefinitionTag]
  };
  function TagDefineFont4() {
    TagDefineFont4$Companion_getInstance();
    _BaseTag.call(this);
    this.hasFontData = false;
    this.italic = false;
    this.bold = false;
    this.fontName_io5u0$_0 = this.fontName_io5u0$_0;
    this.characterId_27h982$_0 = 0;
    this.fontData_0 = new FlashByteArray();
    this.type_pyjk1k$_0 = TagDefineFont4$Companion_getInstance().TYPE;
    this.name_q29pih$_0 = 'DefineFont4';
    this.version_2dy9y2$_0 = 10;
    this.level_rhungy$_0 = 1;
  }
  function TagDefineFont4$Companion() {
    TagDefineFont4$Companion_instance = this;
    this.TYPE = 91;
  }
  TagDefineFont4$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFont4$Companion_instance = null;
  function TagDefineFont4$Companion_getInstance() {
    if (TagDefineFont4$Companion_instance === null) {
      new TagDefineFont4$Companion();
    }
    return TagDefineFont4$Companion_instance;
  }
  Object.defineProperty(TagDefineFont4.prototype, 'fontName', {
    get: function () {
      if (this.fontName_io5u0$_0 == null)
        return Kotlin.throwUPAE('fontName');
      return this.fontName_io5u0$_0;
    },
    set: function (fontName) {
      this.fontName_io5u0$_0 = fontName;
    }
  });
  Object.defineProperty(TagDefineFont4.prototype, 'characterId', {
    get: function () {
      return this.characterId_27h982$_0;
    },
    set: function (characterId) {
      this.characterId_27h982$_0 = characterId;
    }
  });
  TagDefineFont4.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var pos = data.position;
    this.characterId = data.readUI16();
    var flags = data.readUI8();
    this.hasFontData = (flags & 4) !== 0;
    this.italic = (flags & 2) !== 0;
    this.bold = (flags & 1) !== 0;
    this.fontName = data.readString();
    if (this.hasFontData && length > (data.position - pos | 0)) {
      this.fontData_0 = toFlash(data.readBytes_za3lpa$(length - (data.position - pos) | 0));
    }
  };
  Object.defineProperty(TagDefineFont4.prototype, 'type', {
    get: function () {
      return this.type_pyjk1k$_0;
    }
  });
  Object.defineProperty(TagDefineFont4.prototype, 'name', {
    get: function () {
      return this.name_q29pih$_0;
    }
  });
  Object.defineProperty(TagDefineFont4.prototype, 'version', {
    get: function () {
      return this.version_2dy9y2$_0;
    }
  });
  Object.defineProperty(TagDefineFont4.prototype, 'level', {
    get: function () {
      return this.level_rhungy$_0;
    }
  });
  TagDefineFont4.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'FontName: ' + this.fontName + ', ' + 'HasFontData: ' + Kotlin.toString(this.hasFontData) + ', ' + 'Italic: ' + Kotlin.toString(this.italic) + ', ' + 'Bold: ' + Kotlin.toString(this.bold);
    return str;
  };
  TagDefineFont4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineFont4',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineFontAlignZones() {
    TagDefineFontAlignZones$Companion_getInstance();
    _BaseTag.call(this);
    this.fontId = 0;
    this.csmTableHint = 0;
    this._zoneTable_0 = ArrayList_init();
    this.type_gmtagi$_0 = TagDefineFontAlignZones$Companion_getInstance().TYPE;
    this.name_gj34zl$_0 = 'DefineFontAlignZones';
    this.version_1oayi8$_0 = 8;
    this.level_ec6mis$_0 = 1;
  }
  function TagDefineFontAlignZones$Companion() {
    TagDefineFontAlignZones$Companion_instance = this;
    this.TYPE = 73;
  }
  TagDefineFontAlignZones$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFontAlignZones$Companion_instance = null;
  function TagDefineFontAlignZones$Companion_getInstance() {
    if (TagDefineFontAlignZones$Companion_instance === null) {
      new TagDefineFontAlignZones$Companion();
    }
    return TagDefineFontAlignZones$Companion_instance;
  }
  TagDefineFontAlignZones.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.fontId = data.readUI16();
    this.csmTableHint = data.readUI8() >>> 6;
    var recordsEndPos = data.position + length - 3 | 0;
    while (data.position < recordsEndPos) {
      this._zoneTable_0.add_11rb$(data.readZONERECORD());
    }
  };
  Object.defineProperty(TagDefineFontAlignZones.prototype, 'type', {
    get: function () {
      return this.type_gmtagi$_0;
    }
  });
  Object.defineProperty(TagDefineFontAlignZones.prototype, 'name', {
    get: function () {
      return this.name_gj34zl$_0;
    }
  });
  Object.defineProperty(TagDefineFontAlignZones.prototype, 'version', {
    get: function () {
      return this.version_1oayi8$_0;
    }
  });
  Object.defineProperty(TagDefineFontAlignZones.prototype, 'level', {
    get: function () {
      return this.level_ec6mis$_0;
    }
  });
  TagDefineFontAlignZones.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'FontID: ' + Kotlin.toString(this.fontId) + ', ' + 'CSMTableHint: ' + CSMTableHint_getInstance().toString_za3lpa$(this.csmTableHint) + ', ' + 'Records: ' + Kotlin.toString(this._zoneTable_0.size);
    tmp$ = this._zoneTable_0.size;
    for (var i = 0; i < tmp$; i++) {
      str += '\n' + repeat(' ', indent + 2 | 0) + '[' + Kotlin.toString(i) + '] ' + this._zoneTable_0.get_za3lpa$(i).toString();
    }
    return str;
  };
  TagDefineFontAlignZones.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineFontAlignZones',
    interfaces: [_BaseTag, ITag]
  };
  function TagDefineFontInfo() {
    TagDefineFontInfo$Companion_getInstance();
    _BaseTag.call(this);
    this.fontId = 0;
    this.fontName_r2vkf6$_0 = this.fontName_r2vkf6$_0;
    this.smallText = false;
    this.shiftJIS = false;
    this.ansi = false;
    this.italic = false;
    this.bold = false;
    this.wideCodes = false;
    this.langCode = 0;
    this._codeTable = ArrayList_init();
    this.langCodeLength = 0;
    this.type_iiadcu$_0 = TagDefineFontInfo$Companion_getInstance().TYPE;
    this.name_iek7vx$_0 = 'DefineFontInfo';
    this.version_8dd4n8$_0 = 1;
    this.level_1es2e0$_0 = 1;
  }
  function TagDefineFontInfo$Companion() {
    TagDefineFontInfo$Companion_instance = this;
    this.TYPE = 13;
  }
  TagDefineFontInfo$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFontInfo$Companion_instance = null;
  function TagDefineFontInfo$Companion_getInstance() {
    if (TagDefineFontInfo$Companion_instance === null) {
      new TagDefineFontInfo$Companion();
    }
    return TagDefineFontInfo$Companion_instance;
  }
  Object.defineProperty(TagDefineFontInfo.prototype, 'fontName', {
    get: function () {
      if (this.fontName_r2vkf6$_0 == null)
        return Kotlin.throwUPAE('fontName');
      return this.fontName_r2vkf6$_0;
    },
    set: function (fontName) {
      this.fontName_r2vkf6$_0 = fontName;
    }
  });
  TagDefineFontInfo.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.fontId = data.readUI16();
    var fontNameLen = data.readUI8();
    this.fontName = data.readUTFBytes_za3lpa$(fontNameLen);
    var flags = data.readUI8();
    this.smallText = (flags & 32) !== 0;
    this.shiftJIS = (flags & 16) !== 0;
    this.ansi = (flags & 8) !== 0;
    this.italic = (flags & 4) !== 0;
    this.bold = (flags & 2) !== 0;
    this.wideCodes = (flags & 1) !== 0;
    this.parseLangCode_84a5z1$(data);
    var numGlyphs = length - fontNameLen - this.langCodeLength - 4 | 0;
    for (var i = 0; i < numGlyphs; i++) {
      this._codeTable.add_11rb$(this.wideCodes ? data.readUI16() : data.readUI8());
    }
  };
  TagDefineFontInfo.prototype.parseLangCode_84a5z1$ = function (data) {
  };
  Object.defineProperty(TagDefineFontInfo.prototype, 'type', {
    get: function () {
      return this.type_iiadcu$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo.prototype, 'name', {
    get: function () {
      return this.name_iek7vx$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo.prototype, 'version', {
    get: function () {
      return this.version_8dd4n8$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo.prototype, 'level', {
    get: function () {
      return this.level_1es2e0$_0;
    }
  });
  TagDefineFontInfo.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'FontID: ' + Kotlin.toString(this.fontId) + ', ' + 'FontName: ' + this.fontName + ', ' + 'Italic: ' + Kotlin.toString(this.italic) + ', ' + 'Bold: ' + Kotlin.toString(this.bold) + ', ' + 'Codes: ' + Kotlin.toString(this._codeTable.size);
  };
  TagDefineFontInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineFontInfo',
    interfaces: [_BaseTag, ITag]
  };
  function TagDefineFontInfo2() {
    TagDefineFontInfo2$Companion_getInstance();
    TagDefineFontInfo.call(this);
    this.type_uzvooo$_0 = TagDefineFontInfo2$Companion_getInstance().TYPE;
    this.name_uw5j7r$_0 = 'DefineFontInfo2';
    this.version_1l4gly$_0 = 6;
    this.level_xekjpa$_0 = 2;
  }
  function TagDefineFontInfo2$Companion() {
    TagDefineFontInfo2$Companion_instance = this;
    this.TYPE = 62;
  }
  TagDefineFontInfo2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFontInfo2$Companion_instance = null;
  function TagDefineFontInfo2$Companion_getInstance() {
    if (TagDefineFontInfo2$Companion_instance === null) {
      new TagDefineFontInfo2$Companion();
    }
    return TagDefineFontInfo2$Companion_instance;
  }
  TagDefineFontInfo2.prototype.parseLangCode_84a5z1$ = function (data) {
    this.langCode = data.readUI8();
    this.langCodeLength = 1;
  };
  Object.defineProperty(TagDefineFontInfo2.prototype, 'type', {
    get: function () {
      return this.type_uzvooo$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo2.prototype, 'name', {
    get: function () {
      return this.name_uw5j7r$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo2.prototype, 'version', {
    get: function () {
      return this.version_1l4gly$_0;
    }
  });
  Object.defineProperty(TagDefineFontInfo2.prototype, 'level', {
    get: function () {
      return this.level_xekjpa$_0;
    }
  });
  TagDefineFontInfo2.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'FontID: ' + Kotlin.toString(this.fontId) + ', ' + 'FontName: ' + this.fontName + ', ' + 'Italic: ' + Kotlin.toString(this.italic) + ', ' + 'Bold: ' + Kotlin.toString(this.bold) + ', ' + 'LanguageCode: ' + Kotlin.toString(this.langCode) + ', ' + 'Codes: ' + Kotlin.toString(this._codeTable.size);
  };
  TagDefineFontInfo2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineFontInfo2',
    interfaces: [TagDefineFontInfo, ITag]
  };
  function TagDefineFontName() {
    TagDefineFontName$Companion_getInstance();
    _BaseTag.call(this);
    this.fontId = 0;
    this.fontName_m7537f$_0 = this.fontName_m7537f$_0;
    this.fontCopyright_6rc6ft$_0 = this.fontCopyright_6rc6ft$_0;
    this.type_jngz0b$_0 = TagDefineFontName$Companion_getInstance().TYPE;
    this.name_jjqtje$_0 = 'DefineFontName';
    this.version_62tkl5$_0 = 9;
    this.level_y5ncdh$_0 = 1;
  }
  function TagDefineFontName$Companion() {
    TagDefineFontName$Companion_instance = this;
    this.TYPE = 88;
  }
  TagDefineFontName$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineFontName$Companion_instance = null;
  function TagDefineFontName$Companion_getInstance() {
    if (TagDefineFontName$Companion_instance === null) {
      new TagDefineFontName$Companion();
    }
    return TagDefineFontName$Companion_instance;
  }
  Object.defineProperty(TagDefineFontName.prototype, 'fontName', {
    get: function () {
      if (this.fontName_m7537f$_0 == null)
        return Kotlin.throwUPAE('fontName');
      return this.fontName_m7537f$_0;
    },
    set: function (fontName) {
      this.fontName_m7537f$_0 = fontName;
    }
  });
  Object.defineProperty(TagDefineFontName.prototype, 'fontCopyright', {
    get: function () {
      if (this.fontCopyright_6rc6ft$_0 == null)
        return Kotlin.throwUPAE('fontCopyright');
      return this.fontCopyright_6rc6ft$_0;
    },
    set: function (fontCopyright) {
      this.fontCopyright_6rc6ft$_0 = fontCopyright;
    }
  });
  TagDefineFontName.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.fontId = data.readUI16();
    this.fontName = data.readString();
    this.fontCopyright = data.readString();
  };
  Object.defineProperty(TagDefineFontName.prototype, 'type', {
    get: function () {
      return this.type_jngz0b$_0;
    }
  });
  Object.defineProperty(TagDefineFontName.prototype, 'name', {
    get: function () {
      return this.name_jjqtje$_0;
    }
  });
  Object.defineProperty(TagDefineFontName.prototype, 'version', {
    get: function () {
      return this.version_62tkl5$_0;
    }
  });
  Object.defineProperty(TagDefineFontName.prototype, 'level', {
    get: function () {
      return this.level_y5ncdh$_0;
    }
  });
  TagDefineFontName.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'FontID: ' + Kotlin.toString(this.fontId) + ', ' + 'Name: ' + this.fontName + ', ' + 'Copyright: ' + this.fontCopyright;
  };
  TagDefineFontName.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineFontName',
    interfaces: [_BaseTag, ITag]
  };
  function TagDefineMorphShape() {
    TagDefineMorphShape$Companion_getInstance();
    _BaseTag.call(this);
    this.startBounds_22yu5l$_0 = this.startBounds_22yu5l$_0;
    this.endBounds_rh0100$_0 = this.endBounds_rh0100$_0;
    this.startEdges_lxn0v4$_0 = this.startEdges_lxn0v4$_0;
    this.endEdges_tml4rd$_0 = this.endEdges_tml4rd$_0;
    this.startEdgeBounds = new SWFRectangle();
    this.endEdgeBounds = new SWFRectangle();
    this.characterId_kq3tt0$_0 = 0;
    this.morphFillStyles = ArrayList_init();
    this.morphLineStyles = ArrayList_init();
    this.type_to9arq$_0 = TagDefineMorphShape$Companion_getInstance().TYPE;
    this.name_trzg8n$_0 = 'DefineMorphShape';
    this.version_flvju0$_0 = 3;
    this.level_ksk1w$_0 = 1;
  }
  function TagDefineMorphShape$Companion() {
    TagDefineMorphShape$Companion_instance = this;
    this.TYPE = 46;
  }
  TagDefineMorphShape$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineMorphShape$Companion_instance = null;
  function TagDefineMorphShape$Companion_getInstance() {
    if (TagDefineMorphShape$Companion_instance === null) {
      new TagDefineMorphShape$Companion();
    }
    return TagDefineMorphShape$Companion_instance;
  }
  Object.defineProperty(TagDefineMorphShape.prototype, 'startBounds', {
    get: function () {
      if (this.startBounds_22yu5l$_0 == null)
        return Kotlin.throwUPAE('startBounds');
      return this.startBounds_22yu5l$_0;
    },
    set: function (startBounds) {
      this.startBounds_22yu5l$_0 = startBounds;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'endBounds', {
    get: function () {
      if (this.endBounds_rh0100$_0 == null)
        return Kotlin.throwUPAE('endBounds');
      return this.endBounds_rh0100$_0;
    },
    set: function (endBounds) {
      this.endBounds_rh0100$_0 = endBounds;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'startEdges', {
    get: function () {
      if (this.startEdges_lxn0v4$_0 == null)
        return Kotlin.throwUPAE('startEdges');
      return this.startEdges_lxn0v4$_0;
    },
    set: function (startEdges) {
      this.startEdges_lxn0v4$_0 = startEdges;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'endEdges', {
    get: function () {
      if (this.endEdges_tml4rd$_0 == null)
        return Kotlin.throwUPAE('endEdges');
      return this.endEdges_tml4rd$_0;
    },
    set: function (endEdges) {
      this.endEdges_tml4rd$_0 = endEdges;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'characterId', {
    get: function () {
      return this.characterId_kq3tt0$_0;
    },
    set: function (characterId) {
      this.characterId_kq3tt0$_0 = characterId;
    }
  });
  TagDefineMorphShape.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var tmp$, tmp$_0;
    this.characterId = data.readUI16();
    this.startBounds = data.readRECT();
    this.endBounds = data.readRECT();
    var offset = data.readUI32();
    var fillStyleCount = data.readUI8();
    if (fillStyleCount === 255)
      fillStyleCount = data.readUI16();
    tmp$ = fillStyleCount;
    for (var i = 0; i < tmp$; i++) {
      this.morphFillStyles.add_11rb$(data.readMORPHFILLSTYLE_za3lpa$());
    }
    var lineStyleCount = data.readUI8();
    if (lineStyleCount === 255)
      lineStyleCount = data.readUI16();
    tmp$_0 = lineStyleCount;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++)
      this.morphLineStyles.add_11rb$(data.readMORPHLINESTYLE_za3lpa$());
    this.startEdges = data.readSHAPE_14dthe$();
    this.endEdges = data.readSHAPE_14dthe$();
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  TagDefineMorphShape.prototype.export_33tt3r$ = function (handler, ratio) {
    if (ratio === void 0)
      ratio = 0.0;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    var j = 0;
    var exportShape = new SWFShape();
    var numEdges = this.startEdges.records.size;
    if (this.startEdges.records.size !== this.endEdges.records.size) {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Not implemented different startEdges.records.size(' + this.startEdges.records.size + ') != endEdges.records.size(' + this.endEdges.records.size + ')'));
    }
    for (var i = 0; i < numEdges; i++) {
      var startRecord = this.startEdges.records.get_za3lpa$(i);
      if (startRecord.type === SWFShapeRecord$Companion_getInstance().TYPE_STYLECHANGE && !(Kotlin.isType(tmp$ = startRecord, SWFShapeRecordStyleChange) ? tmp$ : Kotlin.throwCCE()).stateMoveTo) {
        exportShape.records.add_11rb$(startRecord.clone());
        continue;
      }
      var endRecord = this.endEdges.records.get_za3lpa$((tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0));
      var exportRecord = null;
      if (startRecord.type === SWFShapeRecord$Companion_getInstance().TYPE_CURVEDEDGE && endRecord.type === SWFShapeRecord$Companion_getInstance().TYPE_STRAIGHTEDGE) {
        endRecord = this.convertToCurvedEdge_huytp8$(Kotlin.isType(tmp$_1 = endRecord, SWFShapeRecordStraightEdge) ? tmp$_1 : Kotlin.throwCCE());
      }
       else if (startRecord.type === SWFShapeRecord$Companion_getInstance().TYPE_STRAIGHTEDGE && endRecord.type === SWFShapeRecord$Companion_getInstance().TYPE_CURVEDEDGE) {
        startRecord = this.convertToCurvedEdge_huytp8$(Kotlin.isType(tmp$_2 = startRecord, SWFShapeRecordStraightEdge) ? tmp$_2 : Kotlin.throwCCE());
      }
      tmp$_3 = startRecord.type;
      if (tmp$_3 === SWFShapeRecord$Companion_getInstance().TYPE_STYLECHANGE) {
        var startStyleChange = Kotlin.isType(tmp$_4 = startRecord.clone(), SWFShapeRecordStyleChange) ? tmp$_4 : Kotlin.throwCCE();
        var endStyleChange = Kotlin.isType(tmp$_5 = endRecord, SWFShapeRecordStyleChange) ? tmp$_5 : Kotlin.throwCCE();
        startStyleChange.moveDeltaX = startStyleChange.moveDeltaX + ((endStyleChange.moveDeltaX - startStyleChange.moveDeltaX | 0) * ratio | 0) | 0;
        startStyleChange.moveDeltaY = startStyleChange.moveDeltaY + ((endStyleChange.moveDeltaY - startStyleChange.moveDeltaY | 0) * ratio | 0) | 0;
        exportRecord = startStyleChange;
      }
       else if (tmp$_3 === SWFShapeRecord$Companion_getInstance().TYPE_STRAIGHTEDGE) {
        var startStraightEdge = Kotlin.isType(tmp$_6 = startRecord.clone(), SWFShapeRecordStraightEdge) ? tmp$_6 : Kotlin.throwCCE();
        var endStraightEdge = Kotlin.isType(tmp$_7 = endRecord, SWFShapeRecordStraightEdge) ? tmp$_7 : Kotlin.throwCCE();
        startStraightEdge.deltaX = startStraightEdge.deltaX + ((endStraightEdge.deltaX - startStraightEdge.deltaX | 0) * ratio | 0) | 0;
        startStraightEdge.deltaY = startStraightEdge.deltaY + ((endStraightEdge.deltaY - startStraightEdge.deltaY | 0) * ratio | 0) | 0;
        if (startStraightEdge.deltaX !== 0 && startStraightEdge.deltaY !== 0) {
          startStraightEdge.generalLineFlag = true;
          startStraightEdge.vertLineFlag = false;
        }
         else {
          startStraightEdge.generalLineFlag = false;
          startStraightEdge.vertLineFlag = startStraightEdge.deltaX === 0;
        }
        exportRecord = startStraightEdge;
      }
       else if (tmp$_3 === SWFShapeRecord$Companion_getInstance().TYPE_CURVEDEDGE) {
        var startCurvedEdge = Kotlin.isType(tmp$_8 = startRecord.clone(), SWFShapeRecordCurvedEdge) ? tmp$_8 : Kotlin.throwCCE();
        var endCurvedEdge = Kotlin.isType(tmp$_9 = endRecord, SWFShapeRecordCurvedEdge) ? tmp$_9 : Kotlin.throwCCE();
        startCurvedEdge.controlDeltaX = startCurvedEdge.controlDeltaX + ((endCurvedEdge.controlDeltaX - startCurvedEdge.controlDeltaX | 0) * ratio | 0) | 0;
        startCurvedEdge.controlDeltaY = startCurvedEdge.controlDeltaY + ((endCurvedEdge.controlDeltaY - startCurvedEdge.controlDeltaY | 0) * ratio | 0) | 0;
        startCurvedEdge.anchorDeltaX = startCurvedEdge.anchorDeltaX + ((endCurvedEdge.anchorDeltaX - startCurvedEdge.anchorDeltaX | 0) * ratio | 0) | 0;
        startCurvedEdge.anchorDeltaY = startCurvedEdge.anchorDeltaY + ((endCurvedEdge.anchorDeltaY - startCurvedEdge.anchorDeltaY | 0) * ratio | 0) | 0;
        exportRecord = startCurvedEdge;
      }
       else if (tmp$_3 === SWFShapeRecord$Companion_getInstance().TYPE_END)
        exportRecord = startRecord.clone();
      exportShape.records.add_11rb$(exportRecord != null ? exportRecord : Kotlin.throwNPE());
    }
    tmp$_10 = this.morphFillStyles.size;
    for (var i_0 = 0; i_0 < tmp$_10; i_0++) {
      exportShape.fillStyles.add_11rb$(this.morphFillStyles.get_za3lpa$(i_0).getMorphedFillStyle_14dthe$(ratio));
    }
    tmp$_11 = this.morphLineStyles.size;
    for (var i_1 = 0; i_1 < tmp$_11; i_1++) {
      exportShape.lineStyles.add_11rb$(this.morphLineStyles.get_za3lpa$(i_1).getMorphedLineStyle_14dthe$(ratio));
    }
    exportShape.export_dsznx3$(handler);
  };
  TagDefineMorphShape.prototype.convertToCurvedEdge_huytp8$ = function (straightEdge) {
    var curvedEdge = new SWFShapeRecordCurvedEdge();
    curvedEdge.controlDeltaX = straightEdge.deltaX / 2 | 0;
    curvedEdge.controlDeltaY = straightEdge.deltaY / 2 | 0;
    curvedEdge.anchorDeltaX = straightEdge.deltaX;
    curvedEdge.anchorDeltaY = straightEdge.deltaY;
    return curvedEdge;
  };
  Object.defineProperty(TagDefineMorphShape.prototype, 'type', {
    get: function () {
      return this.type_to9arq$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'name', {
    get: function () {
      return this.name_trzg8n$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'version', {
    get: function () {
      return this.version_flvju0$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape.prototype, 'level', {
    get: function () {
      return this.level_ksk1w$_0;
    }
  });
  TagDefineMorphShape.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var indent2 = repeat(' ', indent + 2 | 0);
    var indent4 = repeat(' ', indent + 4 | 0);
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId);
    str += '\n' + indent2 + 'Bounds:';
    str += '\n' + indent4 + 'StartBounds: ' + this.startBounds.toString();
    str += '\n' + indent4 + 'EndBounds: ' + this.endBounds.toString();
    if (this.morphFillStyles.size > 0) {
      str += '\n' + indent2 + 'FillStyles:';
      tmp$ = this.morphFillStyles.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + indent4 + '[' + Kotlin.toString(i + 1 | 0) + '] ' + this.morphFillStyles.get_za3lpa$(i).toString();
      }
    }
    if (this.morphLineStyles.size > 0) {
      str += '\n' + indent2 + 'LineStyles:';
      tmp$_0 = this.morphLineStyles.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + indent4 + '[' + Kotlin.toString(i_0 + 1 | 0) + '] ' + this.morphLineStyles.get_za3lpa$(i_0).toString();
      }
    }
    str += this.startEdges.toString_za3lpa$(indent + 2 | 0);
    str += this.endEdges.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineMorphShape.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineMorphShape',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineMorphShape2() {
    TagDefineMorphShape2$Companion_getInstance();
    TagDefineMorphShape.call(this);
    this.usesNonScalingStrokes = false;
    this.usesScalingStrokes = false;
    this.type_t0b28s$_0 = TagDefineMorphShape2$Companion_getInstance().TYPE;
    this.name_swkwrv$_0 = 'DefineMorphShape2';
    this.version_9negau$_0 = 8;
    this.level_s86rza$_0 = 2;
  }
  function TagDefineMorphShape2$Companion() {
    TagDefineMorphShape2$Companion_instance = this;
    this.TYPE = 84;
  }
  TagDefineMorphShape2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineMorphShape2$Companion_instance = null;
  function TagDefineMorphShape2$Companion_getInstance() {
    if (TagDefineMorphShape2$Companion_instance === null) {
      new TagDefineMorphShape2$Companion();
    }
    return TagDefineMorphShape2$Companion_instance;
  }
  TagDefineMorphShape2.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var tmp$, tmp$_0;
    this.characterId = data.readUI16();
    this.startBounds = data.readRECT();
    this.endBounds = data.readRECT();
    this.startEdgeBounds = data.readRECT();
    this.endEdgeBounds = data.readRECT();
    var flags = data.readUI8();
    this.usesNonScalingStrokes = (flags & 2) !== 0;
    this.usesScalingStrokes = (flags & 1) !== 0;
    var offset = data.readUI32();
    var fillStyleCount = data.readUI8();
    if (fillStyleCount === 255) {
      fillStyleCount = data.readUI16();
    }
    tmp$ = fillStyleCount;
    for (var i = 0; i < tmp$; i++) {
      this.morphFillStyles.add_11rb$(data.readMORPHFILLSTYLE_za3lpa$());
    }
    var lineStyleCount = data.readUI8();
    if (lineStyleCount === 255) {
      lineStyleCount = data.readUI16();
    }
    tmp$_0 = lineStyleCount;
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      this.morphLineStyles.add_11rb$(data.readMORPHLINESTYLE2_za3lpa$());
    }
    this.startEdges = data.readSHAPE_14dthe$();
    this.endEdges = data.readSHAPE_14dthe$();
  };
  Object.defineProperty(TagDefineMorphShape2.prototype, 'type', {
    get: function () {
      return this.type_t0b28s$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape2.prototype, 'name', {
    get: function () {
      return this.name_swkwrv$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape2.prototype, 'version', {
    get: function () {
      return this.version_9negau$_0;
    }
  });
  Object.defineProperty(TagDefineMorphShape2.prototype, 'level', {
    get: function () {
      return this.level_s86rza$_0;
    }
  });
  TagDefineMorphShape2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var indent2 = repeat(' ', indent + 2 | 0);
    var indent4 = repeat(' ', indent + 4 | 0);
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId);
    str += '\n' + indent2 + 'Bounds:';
    str += '\n' + indent4 + 'StartBounds: ' + this.startBounds.toString();
    str += '\n' + indent4 + 'EndBounds: ' + this.endBounds.toString();
    str += '\n' + indent4 + 'StartEdgeBounds: ' + this.startEdgeBounds.toString();
    str += '\n' + indent4 + 'EndEdgeBounds: ' + this.endEdgeBounds.toString();
    if (this.morphFillStyles.size > 0) {
      str += '\n' + indent2 + 'FillStyles:';
      tmp$ = this.morphFillStyles.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + indent4 + '[' + Kotlin.toString(i + 1 | 0) + '] ' + this.morphFillStyles.get_za3lpa$(i).toString();
      }
    }
    if (this.morphLineStyles.size > 0) {
      str += '\n' + indent2 + 'LineStyles:';
      tmp$_0 = this.morphLineStyles.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + indent4 + '[' + Kotlin.toString(i_0 + 1 | 0) + '] ' + this.morphLineStyles.get_za3lpa$(i_0).toString();
      }
    }
    str += this.startEdges.toString_za3lpa$(indent + 2 | 0);
    str += this.endEdges.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineMorphShape2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineMorphShape2',
    interfaces: [TagDefineMorphShape, ITag]
  };
  function TagDefineScalingGrid() {
    TagDefineScalingGrid$Companion_getInstance();
    _BaseTag.call(this);
    this.splitter_fqm283$_0 = this.splitter_fqm283$_0;
    this.characterId_pqclwa$_0 = 0;
    this.type_lre6hc$_0 = TagDefineScalingGrid$Companion_getInstance().TYPE;
    this.name_lv4by9$_0 = 'DefineScalingGrid';
    this.version_2r0n4e$_0 = 8;
    this.level_vmnyyu$_0 = 1;
  }
  function TagDefineScalingGrid$Companion() {
    TagDefineScalingGrid$Companion_instance = this;
    this.TYPE = 78;
  }
  TagDefineScalingGrid$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineScalingGrid$Companion_instance = null;
  function TagDefineScalingGrid$Companion_getInstance() {
    if (TagDefineScalingGrid$Companion_instance === null) {
      new TagDefineScalingGrid$Companion();
    }
    return TagDefineScalingGrid$Companion_instance;
  }
  Object.defineProperty(TagDefineScalingGrid.prototype, 'splitter', {
    get: function () {
      if (this.splitter_fqm283$_0 == null)
        return Kotlin.throwUPAE('splitter');
      return this.splitter_fqm283$_0;
    },
    set: function (splitter) {
      this.splitter_fqm283$_0 = splitter;
    }
  });
  Object.defineProperty(TagDefineScalingGrid.prototype, 'characterId', {
    get: function () {
      return this.characterId_pqclwa$_0;
    },
    set: function (characterId) {
      this.characterId_pqclwa$_0 = characterId;
    }
  });
  TagDefineScalingGrid.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.splitter = data.readRECT();
  };
  Object.defineProperty(TagDefineScalingGrid.prototype, 'type', {
    get: function () {
      return this.type_lre6hc$_0;
    }
  });
  Object.defineProperty(TagDefineScalingGrid.prototype, 'name', {
    get: function () {
      return this.name_lv4by9$_0;
    }
  });
  Object.defineProperty(TagDefineScalingGrid.prototype, 'version', {
    get: function () {
      return this.version_2r0n4e$_0;
    }
  });
  Object.defineProperty(TagDefineScalingGrid.prototype, 'level', {
    get: function () {
      return this.level_vmnyyu$_0;
    }
  });
  TagDefineScalingGrid.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'CharacterID: ' + Kotlin.toString(this.characterId) + ', ' + 'Splitter: ' + Kotlin.toString(this.splitter);
  };
  TagDefineScalingGrid.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineScalingGrid',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineSceneAndFrameLabelData() {
    TagDefineSceneAndFrameLabelData$Companion_getInstance();
    _BaseTag.call(this);
    this.scenes = ArrayList_init();
    this.frameLabels = ArrayList_init();
    this.type_kp3rz1$_0 = TagDefineSceneAndFrameLabelData$Companion_getInstance().TYPE;
    this.name_kldmi4$_0 = 'DefineSceneAndFrameLabelData';
    this.version_p49btx$_0 = 9;
    this.level_1r0eh3$_0 = 1;
  }
  function TagDefineSceneAndFrameLabelData$Companion() {
    TagDefineSceneAndFrameLabelData$Companion_instance = this;
    this.TYPE = 86;
  }
  TagDefineSceneAndFrameLabelData$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineSceneAndFrameLabelData$Companion_instance = null;
  function TagDefineSceneAndFrameLabelData$Companion_getInstance() {
    if (TagDefineSceneAndFrameLabelData$Companion_instance === null) {
      new TagDefineSceneAndFrameLabelData$Companion();
    }
    return TagDefineSceneAndFrameLabelData$Companion_instance;
  }
  TagDefineSceneAndFrameLabelData.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var sceneCount = data.readEncodedU32();
    for (var i = 0; i < sceneCount; i++) {
      var sceneOffset = data.readEncodedU32();
      var sceneName = data.readString();
      this.scenes.add_11rb$(new SWFScene(sceneOffset, sceneName));
    }
    var frameLabelCount = data.readEncodedU32();
    for (var i_0 = 0; i_0 < frameLabelCount; i_0++) {
      var frameNumber = data.readEncodedU32();
      var frameLabel = data.readString();
      this.frameLabels.add_11rb$(new SWFFrameLabel(frameNumber, frameLabel));
    }
  };
  Object.defineProperty(TagDefineSceneAndFrameLabelData.prototype, 'type', {
    get: function () {
      return this.type_kp3rz1$_0;
    }
  });
  Object.defineProperty(TagDefineSceneAndFrameLabelData.prototype, 'name', {
    get: function () {
      return this.name_kldmi4$_0;
    }
  });
  Object.defineProperty(TagDefineSceneAndFrameLabelData.prototype, 'version', {
    get: function () {
      return this.version_p49btx$_0;
    }
  });
  Object.defineProperty(TagDefineSceneAndFrameLabelData.prototype, 'level', {
    get: function () {
      return this.level_1r0eh3$_0;
    }
  });
  TagDefineSceneAndFrameLabelData.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.scenes.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Scenes:';
      tmp$ = this.scenes.size;
      for (var i = 0; i < tmp$; i++)
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.scenes.get_za3lpa$(i).toString();
    }
    if (this.frameLabels.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'FrameLabels:';
      tmp$_0 = this.frameLabels.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++)
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i_0) + '] ' + this.frameLabels.get_za3lpa$(i_0).toString();
    }
    return str;
  };
  TagDefineSceneAndFrameLabelData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineSceneAndFrameLabelData',
    interfaces: [_BaseTag, ITag]
  };
  function TagDefineShape() {
    TagDefineShape$Companion_getInstance();
    _BaseTag.call(this);
    this.shapeBounds_fb44f4$_0 = this.shapeBounds_fb44f4$_0;
    this.shapes_px0ovg$_0 = this.shapes_px0ovg$_0;
    this.characterId_8fvoaa$_0 = 0;
    this.type_ypsbl0$_0 = TagDefineShape$Companion_getInstance().TYPE;
    this.name_ym2643$_0 = 'DefineShape';
    this.version_1lesn2$_0 = 1;
    this.level_6ng5le$_0 = 1;
  }
  function TagDefineShape$Companion() {
    TagDefineShape$Companion_instance = this;
    this.TYPE = 2;
  }
  TagDefineShape$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineShape$Companion_instance = null;
  function TagDefineShape$Companion_getInstance() {
    if (TagDefineShape$Companion_instance === null) {
      new TagDefineShape$Companion();
    }
    return TagDefineShape$Companion_instance;
  }
  Object.defineProperty(TagDefineShape.prototype, 'shapeBounds', {
    get: function () {
      if (this.shapeBounds_fb44f4$_0 == null)
        return Kotlin.throwUPAE('shapeBounds');
      return this.shapeBounds_fb44f4$_0;
    },
    set: function (shapeBounds) {
      this.shapeBounds_fb44f4$_0 = shapeBounds;
    }
  });
  Object.defineProperty(TagDefineShape.prototype, 'shapes', {
    get: function () {
      if (this.shapes_px0ovg$_0 == null)
        return Kotlin.throwUPAE('shapes');
      return this.shapes_px0ovg$_0;
    },
    set: function (shapes) {
      this.shapes_px0ovg$_0 = shapes;
    }
  });
  Object.defineProperty(TagDefineShape.prototype, 'characterId', {
    get: function () {
      return this.characterId_8fvoaa$_0;
    },
    set: function (characterId) {
      this.characterId_8fvoaa$_0 = characterId;
    }
  });
  TagDefineShape.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.shapeBounds = data.readRECT();
    this.shapes = data.readSHAPEWITHSTYLE_5wr77w$(this.level);
  };
  TagDefineShape.prototype.export_dsznx3$ = function (handler) {
    this.shapes.export_dsznx3$(handler);
  };
  Object.defineProperty(TagDefineShape.prototype, 'type', {
    get: function () {
      return this.type_ypsbl0$_0;
    }
  });
  Object.defineProperty(TagDefineShape.prototype, 'name', {
    get: function () {
      return this.name_ym2643$_0;
    }
  });
  Object.defineProperty(TagDefineShape.prototype, 'version', {
    get: function () {
      return this.version_1lesn2$_0;
    }
  });
  Object.defineProperty(TagDefineShape.prototype, 'level', {
    get: function () {
      return this.level_6ng5le$_0;
    }
  });
  TagDefineShape.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'Bounds: ' + Kotlin.toString(this.shapeBounds);
    str += this.shapes.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineShape.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineShape',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineShape2() {
    TagDefineShape2$Companion_getInstance();
    TagDefineShape.call(this);
    this.type_yska32$_0 = TagDefineShape2$Companion_getInstance().TYPE;
    this.name_ywafjz$_0 = 'DefineShape2';
    this.version_1fnd68$_0 = 2;
    this.level_h80uv0$_0 = 2;
  }
  function TagDefineShape2$Companion() {
    TagDefineShape2$Companion_instance = this;
    this.TYPE = 22;
  }
  TagDefineShape2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineShape2$Companion_instance = null;
  function TagDefineShape2$Companion_getInstance() {
    if (TagDefineShape2$Companion_instance === null) {
      new TagDefineShape2$Companion();
    }
    return TagDefineShape2$Companion_instance;
  }
  Object.defineProperty(TagDefineShape2.prototype, 'type', {
    get: function () {
      return this.type_yska32$_0;
    }
  });
  Object.defineProperty(TagDefineShape2.prototype, 'name', {
    get: function () {
      return this.name_ywafjz$_0;
    }
  });
  Object.defineProperty(TagDefineShape2.prototype, 'version', {
    get: function () {
      return this.version_1fnd68$_0;
    }
  });
  Object.defineProperty(TagDefineShape2.prototype, 'level', {
    get: function () {
      return this.level_h80uv0$_0;
    }
  });
  TagDefineShape2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'Bounds: ' + Kotlin.toString(this.shapeBounds);
    str += this.shapes.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineShape2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineShape2',
    interfaces: [TagDefineShape, IDefinitionTag]
  };
  function TagDefineShape3() {
    TagDefineShape3$Companion_getInstance();
    TagDefineShape2.call(this);
    this.type_k45zv1$_0 = TagDefineShape3$Companion_getInstance().TYPE;
    this.name_k7w5by$_0 = 'DefineShape3';
    this.version_1tclm9$_0 = 3;
    this.level_bllm77$_0 = 3;
  }
  function TagDefineShape3$Companion() {
    TagDefineShape3$Companion_instance = this;
    this.TYPE = 32;
  }
  TagDefineShape3$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineShape3$Companion_instance = null;
  function TagDefineShape3$Companion_getInstance() {
    if (TagDefineShape3$Companion_instance === null) {
      new TagDefineShape3$Companion();
    }
    return TagDefineShape3$Companion_instance;
  }
  Object.defineProperty(TagDefineShape3.prototype, 'type', {
    get: function () {
      return this.type_k45zv1$_0;
    }
  });
  Object.defineProperty(TagDefineShape3.prototype, 'name', {
    get: function () {
      return this.name_k7w5by$_0;
    }
  });
  Object.defineProperty(TagDefineShape3.prototype, 'version', {
    get: function () {
      return this.version_1tclm9$_0;
    }
  });
  Object.defineProperty(TagDefineShape3.prototype, 'level', {
    get: function () {
      return this.level_bllm77$_0;
    }
  });
  TagDefineShape3.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'Bounds: ' + Kotlin.toString(this.shapeBounds);
    str += this.shapes.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineShape3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineShape3',
    interfaces: [TagDefineShape2, IDefinitionTag]
  };
  function TagDefineShape4() {
    TagDefineShape4$Companion_getInstance();
    TagDefineShape3.call(this);
    this.edgeBounds_prkjz8$_0 = this.edgeBounds_prkjz8$_0;
    this.usesFillWindingRule = false;
    this.usesNonScalingStrokes = false;
    this.usesScalingStrokes = false;
    this.type_5frpn0$_0 = TagDefineShape4$Companion_getInstance().TYPE;
    this.name_5jhv3x$_0 = 'DefineShape4';
    this.version_52ckeq$_0 = 8;
    this.level_ulvypq$_0 = 4;
  }
  function TagDefineShape4$Companion() {
    TagDefineShape4$Companion_instance = this;
    this.TYPE = 83;
  }
  TagDefineShape4$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineShape4$Companion_instance = null;
  function TagDefineShape4$Companion_getInstance() {
    if (TagDefineShape4$Companion_instance === null) {
      new TagDefineShape4$Companion();
    }
    return TagDefineShape4$Companion_instance;
  }
  Object.defineProperty(TagDefineShape4.prototype, 'edgeBounds', {
    get: function () {
      if (this.edgeBounds_prkjz8$_0 == null)
        return Kotlin.throwUPAE('edgeBounds');
      return this.edgeBounds_prkjz8$_0;
    },
    set: function (edgeBounds) {
      this.edgeBounds_prkjz8$_0 = edgeBounds;
    }
  });
  TagDefineShape4.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.shapeBounds = data.readRECT();
    this.edgeBounds = data.readRECT();
    var flags = data.readUI8();
    this.usesFillWindingRule = (flags & 4) !== 0;
    this.usesNonScalingStrokes = (flags & 2) !== 0;
    this.usesScalingStrokes = (flags & 1) !== 0;
    this.shapes = data.readSHAPEWITHSTYLE_5wr77w$(this.level);
  };
  Object.defineProperty(TagDefineShape4.prototype, 'type', {
    get: function () {
      return this.type_5frpn0$_0;
    }
  });
  Object.defineProperty(TagDefineShape4.prototype, 'name', {
    get: function () {
      return this.name_5jhv3x$_0;
    }
  });
  Object.defineProperty(TagDefineShape4.prototype, 'version', {
    get: function () {
      return this.version_52ckeq$_0;
    }
  });
  Object.defineProperty(TagDefineShape4.prototype, 'level', {
    get: function () {
      return this.level_ulvypq$_0;
    }
  });
  TagDefineShape4.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ';
    if (this.usesFillWindingRule)
      str += 'UsesFillWindingRule, ';
    if (this.usesNonScalingStrokes)
      str += 'UsesNonScalingStrokes, ';
    if (this.usesScalingStrokes)
      str += 'UsesScalingStrokes, ';
    str += 'ShapeBounds: ' + this.shapeBounds + ', EdgeBounds: ' + this.edgeBounds;
    str += this.shapes.toString_za3lpa$(indent + 2 | 0);
    return str;
  };
  TagDefineShape4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineShape4',
    interfaces: [TagDefineShape3, IDefinitionTag]
  };
  function TagDefineSound() {
    TagDefineSound$Companion_getInstance();
    _BaseTag.call(this);
    this.soundFormat = 0;
    this.soundRate = 0;
    this.soundSize = 0;
    this.soundType = 0;
    this.soundSampleCount = 0;
    this.characterId_prry84$_0 = 0;
    this.soundData = new FlashByteArray();
    this.type_ix2mb2$_0 = TagDefineSound$Companion_getInstance().TYPE;
    this.name_j0srrz$_0 = 'DefineSound';
    this.version_1z9tcg$_0 = 1;
    this.level_mblrks$_0 = 1;
  }
  function TagDefineSound$Companion() {
    TagDefineSound$Companion_instance = this;
    this.TYPE = 14;
  }
  TagDefineSound$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineSound$Companion_instance = null;
  function TagDefineSound$Companion_getInstance() {
    if (TagDefineSound$Companion_instance === null) {
      new TagDefineSound$Companion();
    }
    return TagDefineSound$Companion_instance;
  }
  Object.defineProperty(TagDefineSound.prototype, 'characterId', {
    get: function () {
      return this.characterId_prry84$_0;
    },
    set: function (characterId) {
      this.characterId_prry84$_0 = characterId;
    }
  });
  TagDefineSound.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.soundFormat = data.readUB_za3lpa$(4);
    this.soundRate = data.readUB_za3lpa$(2);
    this.soundSize = data.readUB_za3lpa$(1);
    this.soundType = data.readUB_za3lpa$(1);
    this.soundSampleCount = data.readUI32();
    this.soundData = toFlash(data.readBytes_za3lpa$(length - 7 | 0));
  };
  Object.defineProperty(TagDefineSound.prototype, 'type', {
    get: function () {
      return this.type_ix2mb2$_0;
    }
  });
  Object.defineProperty(TagDefineSound.prototype, 'name', {
    get: function () {
      return this.name_j0srrz$_0;
    }
  });
  Object.defineProperty(TagDefineSound.prototype, 'version', {
    get: function () {
      return this.version_1z9tcg$_0;
    }
  });
  Object.defineProperty(TagDefineSound.prototype, 'level', {
    get: function () {
      return this.level_mblrks$_0;
    }
  });
  TagDefineSound.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'SoundID: ' + Kotlin.toString(this.characterId) + ', ' + 'Format: ' + SoundCompression_getInstance().toString_za3lpa$(this.soundFormat) + ', ' + 'Rate: ' + SoundRate_getInstance().toString_za3lpa$(this.soundRate) + ', ' + 'Size: ' + SoundSize_getInstance().toString_za3lpa$(this.soundSize) + ', ' + 'Type: ' + SoundType_getInstance().toString_za3lpa$(this.soundType) + ', ' + 'Samples: ' + Kotlin.toString(this.soundSampleCount);
    return str;
  };
  TagDefineSound.prototype.processMP3_1y8vqu$ = function (mp3) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var i = 0;
    var beginIdx = 0;
    var endIdx = mp3.length;
    var samples = 0;
    var firstFrame = true;
    var samplingrate = 0;
    var channelmode = 0;
    var frame = new MPEGFrame();
    var state = 'id3v2';
    while (i < mp3.length) {
      tmp$ = state;
      if (Kotlin.equals(tmp$, 'id3v2')) {
        if (mp3.get_za3lpa$(i) === 73 && mp3.get_za3lpa$(i + 1 | 0) === 68 && mp3.get_za3lpa$(i + 2 | 0) === 51) {
          i = i + (10 + (mp3.get_za3lpa$(i + 6 | 0) << 21 | mp3.get_za3lpa$(i + 7 | 0) << 14 | mp3.get_za3lpa$(i + 8 | 0) << 7 | mp3.get_za3lpa$(i + 9 | 0))) | 0;
        }
        beginIdx = i;
        state = 'sync';
      }
       else if (Kotlin.equals(tmp$, 'sync'))
        if (mp3.get_za3lpa$(i) === 255 && (mp3.get_za3lpa$(i + 1 | 0) & 224) === 224) {
          state = 'frame';
        }
         else if (mp3.get_za3lpa$(i) === 84 && mp3.get_za3lpa$(i + 1 | 0) === 65 && mp3.get_za3lpa$(i + 2 | 0) === 71) {
          endIdx = i;
          i = mp3.length;
        }
         else {
          i = i + 1 | 0;
        }
       else if (Kotlin.equals(tmp$, 'frame')) {
        frame.setHeaderByteAt_vux9f0$(0, mp3.get_za3lpa$((tmp$_0 = i, i = tmp$_0 + 1 | 0, tmp$_0)));
        frame.setHeaderByteAt_vux9f0$(1, mp3.get_za3lpa$((tmp$_1 = i, i = tmp$_1 + 1 | 0, tmp$_1)));
        frame.setHeaderByteAt_vux9f0$(2, mp3.get_za3lpa$((tmp$_2 = i, i = tmp$_2 + 1 | 0, tmp$_2)));
        frame.setHeaderByteAt_vux9f0$(3, mp3.get_za3lpa$((tmp$_3 = i, i = tmp$_3 + 1 | 0, tmp$_3)));
        if (frame.hasCRC) {
          frame.setCRCByteAt_vux9f0$(0, mp3.get_za3lpa$((tmp$_4 = i, i = tmp$_4 + 1 | 0, tmp$_4)));
          frame.setCRCByteAt_vux9f0$(1, mp3.get_za3lpa$((tmp$_5 = i, i = tmp$_5 + 1 | 0, tmp$_5)));
        }
        if (firstFrame) {
          firstFrame = false;
          samplingrate = frame.samplingrate;
          channelmode = frame.channelMode;
        }
        samples = samples + frame.samples | 0;
        i = i + frame.size | 0;
        state = 'sync';
      }
    }
    this.soundSampleCount = samples;
    this.soundFormat = SoundCompression_getInstance().MP3;
    this.soundSize = SoundSize_getInstance().BIT_16;
    this.soundType = channelmode === MPEGFrame$Companion_getInstance().CHANNEL_MODE_MONO ? SoundType_getInstance().MONO : SoundType_getInstance().STEREO;
    tmp$_6 = samplingrate;
    if (tmp$_6 === 44100)
      this.soundRate = SoundRate_getInstance().KHZ_44;
    else if (tmp$_6 === 22050)
      this.soundRate = SoundRate_getInstance().KHZ_22;
    else if (tmp$_6 === 11025)
      this.soundRate = SoundRate_getInstance().KHZ_11;
    else
      throw new Error_0('Unsupported sampling rate: ' + samplingrate + ' Hz');
    this.soundData.length = 0;
    this.soundData.writeShort_za3lpa$(0);
    this.soundData.writeBytes_5zge5p$(mp3, beginIdx, endIdx - beginIdx | 0);
  };
  TagDefineSound.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineSound',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineSprite() {
    TagDefineSprite$Companion_getInstance();
    SWFTimelineContainer.call(this);
    this.frameCount = 0;
    this.characterId_i4hskw$_0 = 0;
    this.type_33q0oq$_0 = TagDefineSprite$Companion_getInstance().TYPE;
    this.name_37g65n$_0 = 'DefineSprite';
    this.version_6xhbks$_0 = 3;
    this.level_t9jj68$_0 = 1;
  }
  function TagDefineSprite$Companion() {
    TagDefineSprite$Companion_instance = this;
    this.TYPE = 39;
  }
  TagDefineSprite$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineSprite$Companion_instance = null;
  function TagDefineSprite$Companion_getInstance() {
    if (TagDefineSprite$Companion_instance === null) {
      new TagDefineSprite$Companion();
    }
    return TagDefineSprite$Companion_instance;
  }
  Object.defineProperty(TagDefineSprite.prototype, 'characterId', {
    get: function () {
      return this.characterId_i4hskw$_0;
    },
    set: function (characterId) {
      this.characterId_i4hskw$_0 = characterId;
    }
  });
  TagDefineSprite.prototype.parse_roywkq$$default = function (data_0, length_0, version_0, async_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_roywkq$$default_0(this, data_0, length_0, version_0, async_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parse_roywkq$$default_0($this, data_0, length_0, version_0, async_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$length = length_0;
    this.local$version = version_0;
    this.local$async = async_0;
  }
  Coroutine$parse_roywkq$$default_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_roywkq$$default_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_roywkq$$default_0.prototype.constructor = Coroutine$parse_roywkq$$default_0;
  Coroutine$parse_roywkq$$default_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.characterId = this.local$data.readUI16();
            this.$this.frameCount = this.local$data.readUI16();
            this.state_0 = 2;
            this.result_0 = this.$this.parseTags_rlw2mn$(this.local$data, this.local$version, this);
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
  Object.defineProperty(TagDefineSprite.prototype, 'type', {
    get: function () {
      return this.type_33q0oq$_0;
    }
  });
  Object.defineProperty(TagDefineSprite.prototype, 'name', {
    get: function () {
      return this.name_37g65n$_0;
    }
  });
  Object.defineProperty(TagDefineSprite.prototype, 'version', {
    get: function () {
      return this.version_6xhbks$_0;
    }
  });
  Object.defineProperty(TagDefineSprite.prototype, 'level', {
    get: function () {
      return this.level_t9jj68$_0;
    }
  });
  TagDefineSprite.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + this.characterId + ', FrameCount: ' + this.frameCount + this.toString_vux9f0$(indent, flags, SWFTimelineContainer.prototype.toString_vux9f0$$default.bind(this));
  };
  TagDefineSprite.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineSprite',
    interfaces: [IDefinitionTag, SWFTimelineContainer]
  };
  function TagDefineText() {
    TagDefineText$Companion_getInstance();
    _BaseTag.call(this);
    this.textBounds_ho196$_0 = this.textBounds_ho196$_0;
    this.textMatrix_c9d4wq$_0 = this.textMatrix_c9d4wq$_0;
    this.characterId_c4t0o$_0 = 0;
    this.records = ArrayList_init();
    this.type_7gfdpq$_0 = TagDefineText$Companion_getInstance().TYPE;
    this.name_7cp88t$_0 = 'DefineText';
    this.version_49p9vw$_0 = 1;
    this.level_dynnd4$_0 = 1;
  }
  function TagDefineText$Companion() {
    TagDefineText$Companion_instance = this;
    this.TYPE = 11;
  }
  TagDefineText$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineText$Companion_instance = null;
  function TagDefineText$Companion_getInstance() {
    if (TagDefineText$Companion_instance === null) {
      new TagDefineText$Companion();
    }
    return TagDefineText$Companion_instance;
  }
  Object.defineProperty(TagDefineText.prototype, 'textBounds', {
    get: function () {
      if (this.textBounds_ho196$_0 == null)
        return Kotlin.throwUPAE('textBounds');
      return this.textBounds_ho196$_0;
    },
    set: function (textBounds) {
      this.textBounds_ho196$_0 = textBounds;
    }
  });
  Object.defineProperty(TagDefineText.prototype, 'textMatrix', {
    get: function () {
      if (this.textMatrix_c9d4wq$_0 == null)
        return Kotlin.throwUPAE('textMatrix');
      return this.textMatrix_c9d4wq$_0;
    },
    set: function (textMatrix) {
      this.textMatrix_c9d4wq$_0 = textMatrix;
    }
  });
  Object.defineProperty(TagDefineText.prototype, 'characterId', {
    get: function () {
      return this.characterId_c4t0o$_0;
    },
    set: function (characterId) {
      this.characterId_c4t0o$_0 = characterId;
    }
  });
  TagDefineText.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.textBounds = data.readRECT();
    this.textMatrix = data.readMATRIX();
    var glyphBits = data.readUI8();
    var advanceBits = data.readUI8();
    var record = null;
    while (true) {
      record = data.readTEXTRECORD_xkn1wm$(glyphBits, advanceBits, record, this.level);
      if (record == null)
        break;
      this.records.add_11rb$(record);
    }
  };
  Object.defineProperty(TagDefineText.prototype, 'type', {
    get: function () {
      return this.type_7gfdpq$_0;
    }
  });
  Object.defineProperty(TagDefineText.prototype, 'name', {
    get: function () {
      return this.name_7cp88t$_0;
    }
  });
  Object.defineProperty(TagDefineText.prototype, 'version', {
    get: function () {
      return this.version_49p9vw$_0;
    }
  });
  Object.defineProperty(TagDefineText.prototype, 'level', {
    get: function () {
      return this.level_dynnd4$_0;
    }
  });
  TagDefineText.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'Bounds: ' + Kotlin.toString(this.textBounds) + ', ' + 'Matrix: ' + Kotlin.toString(this.textMatrix);
    if (this.records.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'TextRecords:';
      tmp$ = this.records.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.records.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }
    return str;
  };
  TagDefineText.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineText',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDefineText2() {
    TagDefineText2$Companion_getInstance();
    TagDefineText.call(this);
    this.type_rhcsbc$_0 = TagDefineText2$Companion_getInstance().TYPE;
    this.name_rl2xs9$_0 = 'DefineText2';
    this.version_wqhcsa$_0 = 3;
    this.level_3nwpwy$_0 = 2;
  }
  function TagDefineText2$Companion() {
    TagDefineText2$Companion_instance = this;
    this.TYPE = 33;
  }
  TagDefineText2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineText2$Companion_instance = null;
  function TagDefineText2$Companion_getInstance() {
    if (TagDefineText2$Companion_instance === null) {
      new TagDefineText2$Companion();
    }
    return TagDefineText2$Companion_instance;
  }
  Object.defineProperty(TagDefineText2.prototype, 'type', {
    get: function () {
      return this.type_rhcsbc$_0;
    }
  });
  Object.defineProperty(TagDefineText2.prototype, 'name', {
    get: function () {
      return this.name_rl2xs9$_0;
    }
  });
  Object.defineProperty(TagDefineText2.prototype, 'version', {
    get: function () {
      return this.version_wqhcsa$_0;
    }
  });
  Object.defineProperty(TagDefineText2.prototype, 'level', {
    get: function () {
      return this.level_3nwpwy$_0;
    }
  });
  TagDefineText2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'Bounds: ' + Kotlin.toString(this.textBounds) + ', ' + 'Matrix: ' + Kotlin.toString(this.textMatrix);
    if (this.records.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'TextRecords:';
      tmp$ = this.records.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.records.get_za3lpa$(i).toString();
      }
    }
    return str;
  };
  TagDefineText2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineText2',
    interfaces: [TagDefineText, IDefinitionTag]
  };
  function TagDefineVideoStream() {
    TagDefineVideoStream$Companion_getInstance();
    _BaseTag.call(this);
    this.numFrames = 0;
    this.width = 0;
    this.height = 0;
    this.deblocking = 0;
    this.smoothing = false;
    this.codecId = 0;
    this.characterId_yxcr60$_0 = 0;
    this.type_iessri$_0 = TagDefineVideoStream$Companion_getInstance().TYPE;
    this.name_ib2nal$_0 = 'DefineVideoStream';
    this.version_y4nfpg$_0 = 6;
    this.level_1lcnzc$_0 = 1;
  }
  function TagDefineVideoStream$Companion() {
    TagDefineVideoStream$Companion_instance = this;
    this.TYPE = 60;
  }
  TagDefineVideoStream$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDefineVideoStream$Companion_instance = null;
  function TagDefineVideoStream$Companion_getInstance() {
    if (TagDefineVideoStream$Companion_instance === null) {
      new TagDefineVideoStream$Companion();
    }
    return TagDefineVideoStream$Companion_instance;
  }
  Object.defineProperty(TagDefineVideoStream.prototype, 'characterId', {
    get: function () {
      return this.characterId_yxcr60$_0;
    },
    set: function (characterId) {
      this.characterId_yxcr60$_0 = characterId;
    }
  });
  TagDefineVideoStream.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.numFrames = data.readUI16();
    this.width = data.readUI16();
    this.height = data.readUI16();
    data.readUB_za3lpa$(4);
    this.deblocking = data.readUB_za3lpa$(3);
    this.smoothing = data.readUB_za3lpa$(1) === 1;
    this.codecId = data.readUI8();
  };
  Object.defineProperty(TagDefineVideoStream.prototype, 'type', {
    get: function () {
      return this.type_iessri$_0;
    }
  });
  Object.defineProperty(TagDefineVideoStream.prototype, 'name', {
    get: function () {
      return this.name_ib2nal$_0;
    }
  });
  Object.defineProperty(TagDefineVideoStream.prototype, 'version', {
    get: function () {
      return this.version_y4nfpg$_0;
    }
  });
  Object.defineProperty(TagDefineVideoStream.prototype, 'level', {
    get: function () {
      return this.level_1lcnzc$_0;
    }
  });
  TagDefineVideoStream.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId) + ', ' + 'Frames: ' + Kotlin.toString(this.numFrames) + ', ' + 'Width: ' + Kotlin.toString(this.width) + ', ' + 'Height: ' + Kotlin.toString(this.height) + ', ' + 'Deblocking: ' + VideoDeblockingType_getInstance().toString_za3lpa$(this.deblocking) + ', ' + 'Smoothing: ' + Kotlin.toString(this.smoothing) + ', ' + 'Codec: ' + VideoCodecID_getInstance().toString_za3lpa$(this.codecId);
  };
  TagDefineVideoStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDefineVideoStream',
    interfaces: [IDefinitionTag, _BaseTag]
  };
  function TagDoABC() {
    TagDoABC$Companion_getInstance();
    _BaseTag.call(this);
    this.lazyInitializeFlag = false;
    this.abcName = '';
    this.bytes = new FlashByteArray();
    this._abc_0 = null;
    this.type_4k7sid$_0 = TagDoABC$Companion_getInstance().TYPE;
    this.name_4ghn1g$_0 = 'DoABC';
    this.version_a32ydv$_0 = 9;
    this.level_4qrjzz$_0 = 1;
  }
  function TagDoABC$Companion() {
    TagDoABC$Companion_instance = this;
    this.TYPE = 82;
  }
  TagDoABC$Companion.prototype.create_j828vx$ = function (abcData, aName, aLazyInitializeFlag) {
    if (abcData === void 0)
      abcData = null;
    if (aName === void 0)
      aName = '';
    if (aLazyInitializeFlag === void 0)
      aLazyInitializeFlag = true;
    var doABC = new TagDoABC();
    if (abcData != null && abcData.length > 0) {
      doABC.bytes.writeBytes_5zge5p$(abcData);
    }
    doABC.abcName = aName;
    doABC.lazyInitializeFlag = aLazyInitializeFlag;
    return doABC;
  };
  TagDoABC$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDoABC$Companion_instance = null;
  function TagDoABC$Companion_getInstance() {
    if (TagDoABC$Companion_instance === null) {
      new TagDoABC$Companion();
    }
    return TagDoABC$Companion_instance;
  }
  Object.defineProperty(TagDoABC.prototype, 'abc', {
    get: function () {
      var tmp$, tmp$_0;
      if (this._abc_0 == null) {
        this._abc_0 = new ABC();
        (tmp$ = this._abc_0) != null ? tmp$.readFile_39qel5$(openSync(this.bytes.cloneToNewByteArray())) : null;
      }
      return (tmp$_0 = this._abc_0) != null ? tmp$_0 : Kotlin.throwNPE();
    }
  });
  TagDoABC.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var pos = data.position;
    var flags = data.readUI32();
    this.lazyInitializeFlag = (flags & 1) !== 0;
    this.abcName = data.readString();
    this.bytes = toFlash(data.readBytes_za3lpa$(length - (data.position - pos) | 0));
    this._abc_0 = null;
  };
  Object.defineProperty(TagDoABC.prototype, 'type', {
    get: function () {
      return this.type_4k7sid$_0;
    }
  });
  Object.defineProperty(TagDoABC.prototype, 'name', {
    get: function () {
      return this.name_4ghn1g$_0;
    }
  });
  Object.defineProperty(TagDoABC.prototype, 'version', {
    get: function () {
      return this.version_a32ydv$_0;
    }
  });
  Object.defineProperty(TagDoABC.prototype, 'level', {
    get: function () {
      return this.level_4qrjzz$_0;
    }
  });
  TagDoABC.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Lazy: ' + Kotlin.toString(this.lazyInitializeFlag) + ', ' + (this.abcName.length > 0 ? 'Name: ' + this.abcName + ', ' : '') + 'Length: ' + Kotlin.toString(this.bytes.length);
  };
  TagDoABC.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDoABC',
    interfaces: [_BaseTag, ITag]
  };
  function TagDoABCDeprecated() {
    TagDoABCDeprecated$Companion_getInstance();
    _BaseTag.call(this);
    this.bytes_0 = new FlashByteArray();
    this.type_n4f6qw$_0 = TagDoABCDeprecated$Companion_getInstance().TYPE;
    this.name_n0p19z$_0 = 'DoABCDeprecated';
    this.version_r4zp6u$_0 = 9;
    this.level_2ep9ji$_0 = 1;
  }
  function TagDoABCDeprecated$Companion() {
    TagDoABCDeprecated$Companion_instance = this;
    this.TYPE = 72;
  }
  TagDoABCDeprecated$Companion.prototype.create_t39foy$ = function (abcData) {
    if (abcData === void 0)
      abcData = null;
    var doABC = new TagDoABCDeprecated();
    if (abcData != null && abcData.length > 0) {
      doABC.bytes_0.writeBytes_5zge5p$(abcData);
    }
    return doABC;
  };
  TagDoABCDeprecated$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDoABCDeprecated$Companion_instance = null;
  function TagDoABCDeprecated$Companion_getInstance() {
    if (TagDoABCDeprecated$Companion_instance === null) {
      new TagDoABCDeprecated$Companion();
    }
    return TagDoABCDeprecated$Companion_instance;
  }
  TagDoABCDeprecated.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var pos = data.position;
    this.bytes_0 = FlashByteArray_init(data.readBytes_za3lpa$(length - (data.position - pos) | 0));
  };
  Object.defineProperty(TagDoABCDeprecated.prototype, 'type', {
    get: function () {
      return this.type_n4f6qw$_0;
    }
  });
  Object.defineProperty(TagDoABCDeprecated.prototype, 'name', {
    get: function () {
      return this.name_n0p19z$_0;
    }
  });
  Object.defineProperty(TagDoABCDeprecated.prototype, 'version', {
    get: function () {
      return this.version_r4zp6u$_0;
    }
  });
  Object.defineProperty(TagDoABCDeprecated.prototype, 'level', {
    get: function () {
      return this.level_2ep9ji$_0;
    }
  });
  TagDoABCDeprecated.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Length: ' + Kotlin.toString(this.bytes_0.length);
  };
  TagDoABCDeprecated.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDoABCDeprecated',
    interfaces: [_BaseTag, ITag]
  };
  function TagDoAction() {
    TagDoAction$Companion_getInstance();
    _BaseTag.call(this);
    this.actions = ArrayList_init();
    this.labelCount = 0;
    this.type_w795yx$_0 = TagDoAction$Companion_getInstance().TYPE;
    this.name_wazbfu$_0 = 'DoAction';
    this.version_6elz23$_0 = 3;
    this.level_7wkd9t$_0 = 1;
  }
  function TagDoAction$Companion() {
    TagDoAction$Companion_instance = this;
    this.TYPE = 12;
  }
  TagDoAction$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDoAction$Companion_instance = null;
  function TagDoAction$Companion_getInstance() {
    if (TagDoAction$Companion_instance === null) {
      new TagDoAction$Companion();
    }
    return TagDoAction$Companion_instance;
  }
  TagDoAction.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var action;
    while (true) {
      action = data.readACTIONRECORD();
      if (action == null)
        break;
      this.actions.add_11rb$(action);
    }
    this.labelCount = Action$Companion_getInstance().resolveOffsets_3xckz2$(this.actions);
  };
  Object.defineProperty(TagDoAction.prototype, 'type', {
    get: function () {
      return this.type_w795yx$_0;
    }
  });
  Object.defineProperty(TagDoAction.prototype, 'name', {
    get: function () {
      return this.name_wazbfu$_0;
    }
  });
  Object.defineProperty(TagDoAction.prototype, 'version', {
    get: function () {
      return this.version_6elz23$_0;
    }
  });
  Object.defineProperty(TagDoAction.prototype, 'level', {
    get: function () {
      return this.level_7wkd9t$_0;
    }
  });
  TagDoAction.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Records: ' + Kotlin.toString(this.actions.size);
    if ((flags & SWF$Companion_getInstance().TOSTRING_FLAG_AVM1_BYTECODE) === 0) {
      tmp$ = this.actions.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + Kotlin.toString(i) + '] ' + this.actions.get_za3lpa$(i).toString_za3lpa$(indent + 2 | 0);
      }
    }
     else {
      var context = new ActionExecutionContext(this.actions, ArrayList_init(), this.labelCount);
      tmp$_0 = this.actions.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + this.actions.get_za3lpa$(i_0).toBytecode_3zq4qf$(indent + 2 | 0, context);
      }
      if (context.endLabel != null) {
        str += '\n' + repeat(' ', indent + 4 | 0) + context.endLabel + ':';
      }
    }
    return str;
  };
  TagDoAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDoAction',
    interfaces: [_BaseTag, ITag]
  };
  function TagDoInitAction() {
    TagDoInitAction$Companion_getInstance();
    TagDoAction.call(this);
    this.spriteId = 0;
    this.type_yrctl5$_0 = TagDoInitAction$Companion_getInstance().TYPE;
    this.name_yv2z22$_0 = 'DoInitAction';
    this.version_5yzw23$_0 = 6;
    this.level_g6lnfl$_0 = 1;
  }
  function TagDoInitAction$Companion() {
    TagDoInitAction$Companion_instance = this;
    this.TYPE = 59;
  }
  TagDoInitAction$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagDoInitAction$Companion_instance = null;
  function TagDoInitAction$Companion_getInstance() {
    if (TagDoInitAction$Companion_instance === null) {
      new TagDoInitAction$Companion();
    }
    return TagDoInitAction$Companion_instance;
  }
  TagDoInitAction.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var tmp$, tmp$_0;
    this.spriteId = data.readUI16();
    while (true) {
      tmp$_0 = this.actions;
      tmp$ = data.readACTIONRECORD();
      if (tmp$ == null) {
        break;
      }
      tmp$_0.add_11rb$(tmp$);
    }
    this.labelCount = Action$Companion_getInstance().resolveOffsets_3xckz2$(this.actions);
  };
  Object.defineProperty(TagDoInitAction.prototype, 'type', {
    get: function () {
      return this.type_yrctl5$_0;
    }
  });
  Object.defineProperty(TagDoInitAction.prototype, 'name', {
    get: function () {
      return this.name_yv2z22$_0;
    }
  });
  Object.defineProperty(TagDoInitAction.prototype, 'version', {
    get: function () {
      return this.version_5yzw23$_0;
    }
  });
  Object.defineProperty(TagDoInitAction.prototype, 'level', {
    get: function () {
      return this.level_g6lnfl$_0;
    }
  });
  TagDoInitAction.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'SpriteID: ' + Kotlin.toString(this.spriteId) + ', ' + 'Records: ' + Kotlin.toString(this.actions.size);
    if ((flags & SWF$Companion_getInstance().TOSTRING_FLAG_AVM1_BYTECODE) === 0) {
      tmp$ = this.actions.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + '[' + Kotlin.toString(i) + '] ' + this.actions.get_za3lpa$(i).toString_za3lpa$(indent + 2 | 0);
      }
    }
     else {
      var context = new ActionExecutionContext(this.actions, ArrayList_init(), this.labelCount);
      tmp$_0 = this.actions.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        str += '\n' + repeat(' ', indent + 2 | 0) + this.actions.get_za3lpa$(i_0).toBytecode_3zq4qf$(indent + 2 | 0, context);
      }
      if (context.endLabel != null) {
        str += '\n' + repeat(' ', indent + 4 | 0) + context.endLabel + ':';
      }
    }
    return str;
  };
  TagDoInitAction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagDoInitAction',
    interfaces: [TagDoAction, ITag]
  };
  function TagEnableDebugger() {
    TagEnableDebugger$Companion_getInstance();
    _BaseTag.call(this);
    this.password = new FlashByteArray();
    this.type_yezhqu$_0 = TagEnableDebugger$Companion_getInstance().TYPE;
    this.name_yipn7r$_0 = 'EnableDebugger';
    this.version_e8ufaw$_0 = 5;
    this.level_5j4gc4$_0 = 1;
  }
  function TagEnableDebugger$Companion() {
    TagEnableDebugger$Companion_instance = this;
    this.TYPE = 58;
  }
  TagEnableDebugger$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagEnableDebugger$Companion_instance = null;
  function TagEnableDebugger$Companion_getInstance() {
    if (TagEnableDebugger$Companion_instance === null) {
      new TagEnableDebugger$Companion();
    }
    return TagEnableDebugger$Companion_instance;
  }
  TagEnableDebugger.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    if (length > 0) {
      this.password = FlashByteArray_init(data.readBytes_za3lpa$(length));
    }
  };
  Object.defineProperty(TagEnableDebugger.prototype, 'type', {
    get: function () {
      return this.type_yezhqu$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger.prototype, 'name', {
    get: function () {
      return this.name_yipn7r$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger.prototype, 'version', {
    get: function () {
      return this.version_e8ufaw$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger.prototype, 'level', {
    get: function () {
      return this.level_5j4gc4$_0;
    }
  });
  TagEnableDebugger.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagEnableDebugger.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagEnableDebugger',
    interfaces: [_BaseTag, ITag]
  };
  function TagEnableDebugger2() {
    TagEnableDebugger2$Companion_getInstance();
    TagEnableDebugger.call(this);
    this.reserved_0 = 0;
    this.type_o1z5yk$_0 = TagEnableDebugger2$Companion_getInstance().TYPE;
    this.name_ny90hn$_0 = 'EnableDebugger2';
    this.version_wkkg5m$_0 = 6;
    this.level_vawl56$_0 = 2;
  }
  function TagEnableDebugger2$Companion() {
    TagEnableDebugger2$Companion_instance = this;
    this.TYPE = 64;
  }
  TagEnableDebugger2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagEnableDebugger2$Companion_instance = null;
  function TagEnableDebugger2$Companion_getInstance() {
    if (TagEnableDebugger2$Companion_instance === null) {
      new TagEnableDebugger2$Companion();
    }
    return TagEnableDebugger2$Companion_instance;
  }
  TagEnableDebugger2.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.reserved_0 = data.readUI16();
    if (length > 2) {
      this.password = toFlash(data.readBytes_za3lpa$(length - 2 | 0));
    }
  };
  Object.defineProperty(TagEnableDebugger2.prototype, 'type', {
    get: function () {
      return this.type_o1z5yk$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger2.prototype, 'name', {
    get: function () {
      return this.name_ny90hn$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger2.prototype, 'version', {
    get: function () {
      return this.version_wkkg5m$_0;
    }
  });
  Object.defineProperty(TagEnableDebugger2.prototype, 'level', {
    get: function () {
      return this.level_vawl56$_0;
    }
  });
  TagEnableDebugger2.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Password: ' + (this.password.length === 0 ? 'null' : this.password.readUTF()) + ', ' + 'Reserved: 0x' + toString(this.reserved_0, 16);
  };
  TagEnableDebugger2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagEnableDebugger2',
    interfaces: [TagEnableDebugger, ITag]
  };
  function TagEnableTelemetry() {
    TagEnableTelemetry$Companion_getInstance();
    _BaseTag.call(this);
    this.password_0 = new FlashByteArray();
    this.type_j4himk$_0 = TagEnableTelemetry$Companion_getInstance().TYPE;
    this.name_j87o3h$_0 = 'EnableTelemetry';
    this.version_oicpci$_0 = 19;
    this.level_spflha$_0 = 1;
  }
  function TagEnableTelemetry$Companion() {
    TagEnableTelemetry$Companion_instance = this;
    this.TYPE = 93;
  }
  TagEnableTelemetry$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagEnableTelemetry$Companion_instance = null;
  function TagEnableTelemetry$Companion_getInstance() {
    if (TagEnableTelemetry$Companion_instance === null) {
      new TagEnableTelemetry$Companion();
    }
    return TagEnableTelemetry$Companion_instance;
  }
  TagEnableTelemetry.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    if (length > 2) {
      data.readByte();
      data.readByte();
      this.password_0 = toFlash(data.readBytes_za3lpa$(length - 2 | 0));
    }
  };
  Object.defineProperty(TagEnableTelemetry.prototype, 'type', {
    get: function () {
      return this.type_j4himk$_0;
    }
  });
  Object.defineProperty(TagEnableTelemetry.prototype, 'name', {
    get: function () {
      return this.name_j87o3h$_0;
    }
  });
  Object.defineProperty(TagEnableTelemetry.prototype, 'version', {
    get: function () {
      return this.version_oicpci$_0;
    }
  });
  Object.defineProperty(TagEnableTelemetry.prototype, 'level', {
    get: function () {
      return this.level_spflha$_0;
    }
  });
  TagEnableTelemetry.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagEnableTelemetry.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagEnableTelemetry',
    interfaces: [_BaseTag, ITag]
  };
  function TagEnd() {
    TagEnd$Companion_getInstance();
    _BaseTag.call(this);
    this.type_oy4jqf$_0 = TagEnd$Companion_getInstance().TYPE;
    this.name_p1up7c$_0 = 'End';
    this.version_la825l$_0 = 1;
    this.level_3v2m4d$_0 = 1;
  }
  function TagEnd$Companion() {
    TagEnd$Companion_instance = this;
    this.TYPE = 0;
  }
  TagEnd$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagEnd$Companion_instance = null;
  function TagEnd$Companion_getInstance() {
    if (TagEnd$Companion_instance === null) {
      new TagEnd$Companion();
    }
    return TagEnd$Companion_instance;
  }
  TagEnd.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
  };
  Object.defineProperty(TagEnd.prototype, 'type', {
    get: function () {
      return this.type_oy4jqf$_0;
    }
  });
  Object.defineProperty(TagEnd.prototype, 'name', {
    get: function () {
      return this.name_p1up7c$_0;
    }
  });
  Object.defineProperty(TagEnd.prototype, 'version', {
    get: function () {
      return this.version_la825l$_0;
    }
  });
  Object.defineProperty(TagEnd.prototype, 'level', {
    get: function () {
      return this.level_3v2m4d$_0;
    }
  });
  TagEnd.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagEnd.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagEnd',
    interfaces: [_BaseTag, ITag]
  };
  function TagExportAssets() {
    TagExportAssets$Companion_getInstance();
    _BaseTag.call(this);
    this.symbols = ArrayList_init();
    this.type_9fvubn$_0 = TagExportAssets$Companion_getInstance().TYPE;
    this.name_9jlzsk$_0 = 'ExportAssets';
    this.version_340x8b$_0 = 5;
    this.level_cn7vzb$_0 = 1;
  }
  function TagExportAssets$Companion() {
    TagExportAssets$Companion_instance = this;
    this.TYPE = 56;
  }
  TagExportAssets$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagExportAssets$Companion_instance = null;
  function TagExportAssets$Companion_getInstance() {
    if (TagExportAssets$Companion_instance === null) {
      new TagExportAssets$Companion();
    }
    return TagExportAssets$Companion_instance;
  }
  TagExportAssets.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var numSymbols = data.readUI16();
    for (var i = 0; i < numSymbols; i++) {
      this.symbols.add_11rb$(data.readSYMBOL());
    }
  };
  Object.defineProperty(TagExportAssets.prototype, 'type', {
    get: function () {
      return this.type_9fvubn$_0;
    }
  });
  Object.defineProperty(TagExportAssets.prototype, 'name', {
    get: function () {
      return this.name_9jlzsk$_0;
    }
  });
  Object.defineProperty(TagExportAssets.prototype, 'version', {
    get: function () {
      return this.version_340x8b$_0;
    }
  });
  Object.defineProperty(TagExportAssets.prototype, 'level', {
    get: function () {
      return this.level_cn7vzb$_0;
    }
  });
  TagExportAssets.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.symbols.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Assets:';
      tmp$ = this.symbols.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.symbols.get_za3lpa$(i).toString();
      }
    }
    return str;
  };
  TagExportAssets.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagExportAssets',
    interfaces: [_BaseTag, ITag]
  };
  function TagFileAttributes() {
    TagFileAttributes$Companion_getInstance();
    _BaseTag.call(this);
    this.useDirectBlit = false;
    this.useGPU = false;
    this.hasMetadata = false;
    this.actionscript3 = true;
    this.useNetwork = false;
    this.type_7xqn53$_0 = TagFileAttributes$Companion_getInstance().TYPE;
    this.name_81gsm0$_0 = 'FileAttributes';
    this.version_hld5qv$_0 = 8;
    this.level_xz9anx$_0 = 1;
  }
  function TagFileAttributes$Companion() {
    TagFileAttributes$Companion_instance = this;
    this.TYPE = 69;
  }
  TagFileAttributes$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagFileAttributes$Companion_instance = null;
  function TagFileAttributes$Companion_getInstance() {
    if (TagFileAttributes$Companion_instance === null) {
      new TagFileAttributes$Companion();
    }
    return TagFileAttributes$Companion_instance;
  }
  TagFileAttributes.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var flags = data.readUI8();
    this.useDirectBlit = (flags & 64) !== 0;
    this.useGPU = (flags & 32) !== 0;
    this.hasMetadata = (flags & 16) !== 0;
    this.actionscript3 = (flags & 8) !== 0;
    this.useNetwork = (flags & 1) !== 0;
    data.skipBytes_za3lpa$(3);
  };
  Object.defineProperty(TagFileAttributes.prototype, 'type', {
    get: function () {
      return this.type_7xqn53$_0;
    }
  });
  Object.defineProperty(TagFileAttributes.prototype, 'name', {
    get: function () {
      return this.name_81gsm0$_0;
    }
  });
  Object.defineProperty(TagFileAttributes.prototype, 'version', {
    get: function () {
      return this.version_hld5qv$_0;
    }
  });
  Object.defineProperty(TagFileAttributes.prototype, 'level', {
    get: function () {
      return this.level_xz9anx$_0;
    }
  });
  TagFileAttributes.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'AS3: ' + Kotlin.toString(this.actionscript3) + ', ' + 'HasMetadata: ' + Kotlin.toString(this.hasMetadata) + ', ' + 'UseDirectBlit: ' + Kotlin.toString(this.useDirectBlit) + ', ' + 'UseGPU: ' + Kotlin.toString(this.useGPU) + ', ' + 'UseNetwork: ' + Kotlin.toString(this.useNetwork);
  };
  TagFileAttributes.prototype.toString = function () {
    return this.toString_vux9f0$(0, 0);
  };
  TagFileAttributes.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagFileAttributes',
    interfaces: [_BaseTag, ITag]
  };
  function TagFrameLabel() {
    TagFrameLabel$Companion_getInstance();
    _BaseTag.call(this);
    this.frameName_oxegwl$_0 = this.frameName_oxegwl$_0;
    this.namedAnchorFlag = false;
    this.type_h0fap9$_0 = TagFrameLabel$Companion_getInstance().TYPE;
    this.name_gwp58c$_0 = 'FrameLabel';
    this.version_siemp7$_0 = 3;
    this.level_q24u21$_0 = 1;
  }
  function TagFrameLabel$Companion() {
    TagFrameLabel$Companion_instance = this;
    this.TYPE = 43;
  }
  TagFrameLabel$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagFrameLabel$Companion_instance = null;
  function TagFrameLabel$Companion_getInstance() {
    if (TagFrameLabel$Companion_instance === null) {
      new TagFrameLabel$Companion();
    }
    return TagFrameLabel$Companion_instance;
  }
  Object.defineProperty(TagFrameLabel.prototype, 'frameName', {
    get: function () {
      if (this.frameName_oxegwl$_0 == null)
        return Kotlin.throwUPAE('frameName');
      return this.frameName_oxegwl$_0;
    },
    set: function (frameName) {
      this.frameName_oxegwl$_0 = frameName;
    }
  });
  TagFrameLabel.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var start = data.position;
    this.frameName = data.readString();
    if ((data.position - start | 0) < length) {
      data.readUI8();
      this.namedAnchorFlag = true;
    }
  };
  Object.defineProperty(TagFrameLabel.prototype, 'type', {
    get: function () {
      return this.type_h0fap9$_0;
    }
  });
  Object.defineProperty(TagFrameLabel.prototype, 'name', {
    get: function () {
      return this.name_gwp58c$_0;
    }
  });
  Object.defineProperty(TagFrameLabel.prototype, 'version', {
    get: function () {
      return this.version_siemp7$_0;
    }
  });
  Object.defineProperty(TagFrameLabel.prototype, 'level', {
    get: function () {
      return this.level_q24u21$_0;
    }
  });
  TagFrameLabel.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = 'Name: ' + this.frameName;
    if (this.namedAnchorFlag) {
      str += ', NamedAnchor = true';
    }
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + str;
  };
  TagFrameLabel.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagFrameLabel',
    interfaces: [_BaseTag, ITag]
  };
  function TagImportAssets() {
    TagImportAssets$Companion_getInstance();
    _BaseTag.call(this);
    this.url_qev2mb$_0 = this.url_qev2mb$_0;
    this.symbols = ArrayList_init();
    this.type_xk66um$_0 = TagImportAssets$Companion_getInstance().TYPE;
    this.name_xgg1dp$_0 = 'ImportAssets';
    this.version_e7mp4k$_0 = 5;
    this.level_t6lx4o$_0 = 1;
  }
  function TagImportAssets$Companion() {
    TagImportAssets$Companion_instance = this;
    this.TYPE = 57;
  }
  TagImportAssets$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagImportAssets$Companion_instance = null;
  function TagImportAssets$Companion_getInstance() {
    if (TagImportAssets$Companion_instance === null) {
      new TagImportAssets$Companion();
    }
    return TagImportAssets$Companion_instance;
  }
  Object.defineProperty(TagImportAssets.prototype, 'url', {
    get: function () {
      if (this.url_qev2mb$_0 == null)
        return Kotlin.throwUPAE('url');
      return this.url_qev2mb$_0;
    },
    set: function (url) {
      this.url_qev2mb$_0 = url;
    }
  });
  TagImportAssets.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.url = data.readString();
    var numSymbols = data.readUI16();
    for (var i = 0; i < numSymbols; i++) {
      this.symbols.add_11rb$(data.readSYMBOL());
    }
  };
  Object.defineProperty(TagImportAssets.prototype, 'type', {
    get: function () {
      return this.type_xk66um$_0;
    }
  });
  Object.defineProperty(TagImportAssets.prototype, 'name', {
    get: function () {
      return this.name_xgg1dp$_0;
    }
  });
  Object.defineProperty(TagImportAssets.prototype, 'version', {
    get: function () {
      return this.version_e7mp4k$_0;
    }
  });
  Object.defineProperty(TagImportAssets.prototype, 'level', {
    get: function () {
      return this.level_t6lx4o$_0;
    }
  });
  TagImportAssets.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.symbols.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Assets:';
      tmp$ = this.symbols.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.symbols.get_za3lpa$(i).toString();
      }
    }
    return str;
  };
  TagImportAssets.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagImportAssets',
    interfaces: [_BaseTag, ITag]
  };
  function TagImportAssets2() {
    TagImportAssets2$Companion_getInstance();
    TagImportAssets.call(this);
    this.type_ehp60$_0 = TagImportAssets2$Companion_getInstance().TYPE;
    this.name_arjp3$_0 = 'ImportAssets2';
    this.version_xm7zly$_0 = 8;
    this.level_8dzob2$_0 = 2;
  }
  function TagImportAssets2$Companion() {
    TagImportAssets2$Companion_instance = this;
    this.TYPE = 71;
  }
  TagImportAssets2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagImportAssets2$Companion_instance = null;
  function TagImportAssets2$Companion_getInstance() {
    if (TagImportAssets2$Companion_instance === null) {
      new TagImportAssets2$Companion();
    }
    return TagImportAssets2$Companion_instance;
  }
  TagImportAssets2.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.url = data.readString();
    data.readUI8();
    data.readUI8();
    var numSymbols = data.readUI16();
    for (var i = 0; i < numSymbols; i++) {
      this.symbols.add_11rb$(data.readSYMBOL());
    }
  };
  Object.defineProperty(TagImportAssets2.prototype, 'type', {
    get: function () {
      return this.type_ehp60$_0;
    }
  });
  Object.defineProperty(TagImportAssets2.prototype, 'name', {
    get: function () {
      return this.name_arjp3$_0;
    }
  });
  Object.defineProperty(TagImportAssets2.prototype, 'version', {
    get: function () {
      return this.version_xm7zly$_0;
    }
  });
  Object.defineProperty(TagImportAssets2.prototype, 'level', {
    get: function () {
      return this.level_8dzob2$_0;
    }
  });
  TagImportAssets2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagImportAssets2',
    interfaces: [TagImportAssets, ITag]
  };
  function TagJPEGTables() {
    TagJPEGTables$Companion_getInstance();
    _BaseTag.call(this);
    this.jpegTables = new FlashByteArray();
    this.type_r79z65$_0 = TagJPEGTables$Companion_getInstance().TYPE;
    this.name_rb04n2$_0 = 'JPEGTables';
    this.version_91ter5$_0 = 1;
    this.level_50idk3$_0 = 1;
  }
  function TagJPEGTables$Companion() {
    TagJPEGTables$Companion_instance = this;
    this.TYPE = 8;
  }
  TagJPEGTables$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagJPEGTables$Companion_instance = null;
  function TagJPEGTables$Companion_getInstance() {
    if (TagJPEGTables$Companion_instance === null) {
      new TagJPEGTables$Companion();
    }
    return TagJPEGTables$Companion_instance;
  }
  TagJPEGTables.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    if (length > 0) {
      this.jpegTables = toFlash(data.readBytes_za3lpa$(length));
    }
  };
  Object.defineProperty(TagJPEGTables.prototype, 'type', {
    get: function () {
      return this.type_r79z65$_0;
    }
  });
  Object.defineProperty(TagJPEGTables.prototype, 'name', {
    get: function () {
      return this.name_rb04n2$_0;
    }
  });
  Object.defineProperty(TagJPEGTables.prototype, 'version', {
    get: function () {
      return this.version_91ter5$_0;
    }
  });
  Object.defineProperty(TagJPEGTables.prototype, 'level', {
    get: function () {
      return this.level_50idk3$_0;
    }
  });
  TagJPEGTables.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Length: ' + Kotlin.toString(this.jpegTables.length);
  };
  TagJPEGTables.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagJPEGTables',
    interfaces: [_BaseTag, ITag]
  };
  function TagMetadata() {
    TagMetadata$Companion_getInstance();
    _BaseTag.call(this);
    this.xmlString_m5k4jn$_0 = this.xmlString_m5k4jn$_0;
    this.type_1bwj1n$_0 = TagMetadata$Companion_getInstance().TYPE;
    this.name_1fmoik$_0 = 'Metadata';
    this.version_rxhwyb$_0 = 1;
    this.level_pounpd$_0 = 1;
  }
  function TagMetadata$Companion() {
    TagMetadata$Companion_instance = this;
    this.TYPE = 77;
  }
  TagMetadata$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagMetadata$Companion_instance = null;
  function TagMetadata$Companion_getInstance() {
    if (TagMetadata$Companion_instance === null) {
      new TagMetadata$Companion();
    }
    return TagMetadata$Companion_instance;
  }
  Object.defineProperty(TagMetadata.prototype, 'xmlString', {
    get: function () {
      if (this.xmlString_m5k4jn$_0 == null)
        return Kotlin.throwUPAE('xmlString');
      return this.xmlString_m5k4jn$_0;
    },
    set: function (xmlString) {
      this.xmlString_m5k4jn$_0 = xmlString;
    }
  });
  TagMetadata.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.xmlString = data.readString();
  };
  Object.defineProperty(TagMetadata.prototype, 'type', {
    get: function () {
      return this.type_1bwj1n$_0;
    }
  });
  Object.defineProperty(TagMetadata.prototype, 'name', {
    get: function () {
      return this.name_1fmoik$_0;
    }
  });
  Object.defineProperty(TagMetadata.prototype, 'version', {
    get: function () {
      return this.version_rxhwyb$_0;
    }
  });
  Object.defineProperty(TagMetadata.prototype, 'level', {
    get: function () {
      return this.level_pounpd$_0;
    }
  });
  TagMetadata.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    str += ' ' + this.xmlString;
    return str;
  };
  TagMetadata.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagMetadata',
    interfaces: [_BaseTag, ITag]
  };
  function TagNameCharacter() {
    TagNameCharacter$Companion_getInstance();
    _BaseTag.call(this);
    this.characterId_0 = 0;
    this.binaryData_0 = new FlashByteArray();
    this.type_5vavc4$_0 = TagNameCharacter$Companion_getInstance().TYPE;
    this.name_5z10t1$_0 = 'NameCharacter';
    this.version_1ryi0q$_0 = 3;
    this.level_r1q6my$_0 = 1;
  }
  function TagNameCharacter$Companion() {
    TagNameCharacter$Companion_instance = this;
    this.TYPE = 40;
  }
  TagNameCharacter$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagNameCharacter$Companion_instance = null;
  function TagNameCharacter$Companion_getInstance() {
    if (TagNameCharacter$Companion_instance === null) {
      new TagNameCharacter$Companion();
    }
    return TagNameCharacter$Companion_instance;
  }
  TagNameCharacter.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId_0 = data.readUI16();
    if (length > 2) {
      this.binaryData_0 = toFlash(data.readBytes_za3lpa$(length - 2 | 0));
    }
  };
  Object.defineProperty(TagNameCharacter.prototype, 'type', {
    get: function () {
      return this.type_5vavc4$_0;
    }
  });
  Object.defineProperty(TagNameCharacter.prototype, 'name', {
    get: function () {
      return this.name_5z10t1$_0;
    }
  });
  Object.defineProperty(TagNameCharacter.prototype, 'version', {
    get: function () {
      return this.version_1ryi0q$_0;
    }
  });
  Object.defineProperty(TagNameCharacter.prototype, 'level', {
    get: function () {
      return this.level_r1q6my$_0;
    }
  });
  TagNameCharacter.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ID: ' + Kotlin.toString(this.characterId_0);
    if (this.binaryData_0.length > 0) {
      this.binaryData_0.position = 0;
      str += ', Name: ' + this.binaryData_0.readUTFBytes_za3lpa$(this.binaryData_0.length - 1 | 0);
      this.binaryData_0.position = 0;
    }
    return str;
  };
  TagNameCharacter.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagNameCharacter',
    interfaces: [_BaseTag, ITag]
  };
  function TagPlaceObject() {
    TagPlaceObject$Companion_getInstance();
    _BaseTag.call(this);
    this.hasClipActions = false;
    this.hasClipDepth = false;
    this.hasName = false;
    this.hasRatio = false;
    this.hasColorTransform = false;
    this.hasMatrix = false;
    this.hasCharacter = false;
    this.hasMove = false;
    this.hasOpaqueBackground = false;
    this.hasVisible = false;
    this.hasImage = false;
    this.hasClassName = false;
    this.hasCacheAsBitmap = false;
    this.hasBlendMode = false;
    this.hasFilterList = false;
    this.characterId = 0;
    this.depth = 0;
    this.matrix = null;
    this.colorTransform = null;
    this.ratio = 0;
    this.instanceName = null;
    this.clipDepth = 0;
    this.clipActions = null;
    this.className = null;
    this.blendMode = 0;
    this.bitmapCache = 0;
    this.bitmapBackgroundColor = 0;
    this.visible = 0;
    this.metaData = null;
    this.surfaceFilterList = ArrayList_init();
    this.type_89snj8$_0 = TagPlaceObject$Companion_getInstance().TYPE;
    this.name_862i2b$_0 = 'PlaceObject';
    this.version_6kctmm$_0 = 1;
    this.level_vs0y7i$_0 = 1;
  }
  function TagPlaceObject$Companion() {
    TagPlaceObject$Companion_instance = this;
    this.TYPE = 4;
  }
  TagPlaceObject$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagPlaceObject$Companion_instance = null;
  function TagPlaceObject$Companion_getInstance() {
    if (TagPlaceObject$Companion_instance === null) {
      new TagPlaceObject$Companion();
    }
    return TagPlaceObject$Companion_instance;
  }
  Object.defineProperty(TagPlaceObject.prototype, 'ratiod', {
    get: function () {
      return this.ratio / 65536.0;
    }
  });
  TagPlaceObject.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var pos = data.position;
    this.characterId = data.readUI16();
    this.depth = data.readUI16();
    this.matrix = data.readMATRIX();
    this.hasCharacter = true;
    this.hasMatrix = true;
    if ((data.position - pos | 0) < length) {
      this.colorTransform = data.readCXFORM();
      this.hasColorTransform = true;
    }
  };
  Object.defineProperty(TagPlaceObject.prototype, 'type', {
    get: function () {
      return this.type_89snj8$_0;
    }
  });
  Object.defineProperty(TagPlaceObject.prototype, 'name', {
    get: function () {
      return this.name_862i2b$_0;
    }
  });
  Object.defineProperty(TagPlaceObject.prototype, 'version', {
    get: function () {
      return this.version_6kctmm$_0;
    }
  });
  Object.defineProperty(TagPlaceObject.prototype, 'level', {
    get: function () {
      return this.level_vs0y7i$_0;
    }
  });
  TagPlaceObject.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Depth: ' + Kotlin.toString(this.depth);
    if (this.hasCharacter) {
      str += ', CharacterID: ' + Kotlin.toString(this.characterId);
    }
    if (this.hasMatrix) {
      str += ', Matrix: ' + Kotlin.toString(this.matrix);
    }
    if (this.hasColorTransform) {
      str += ', ColorTransform: ' + Kotlin.toString(this.colorTransform);
    }
    return str;
  };
  TagPlaceObject.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagPlaceObject',
    interfaces: [IDisplayListTag, _BaseTag]
  };
  function TagPlaceObject2() {
    TagPlaceObject2$Companion_getInstance();
    TagPlaceObject.call(this);
    this.type_26xbwu$_0 = TagPlaceObject2$Companion_getInstance().TYPE;
    this.name_2anhdr$_0 = 'PlaceObject2';
    this.version_dgq3u8$_0 = 3;
    this.level_10u75o$_0 = 2;
  }
  function TagPlaceObject2$Companion() {
    TagPlaceObject2$Companion_instance = this;
    this.TYPE = 26;
  }
  TagPlaceObject2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagPlaceObject2$Companion_instance = null;
  function TagPlaceObject2$Companion_getInstance() {
    if (TagPlaceObject2$Companion_instance === null) {
      new TagPlaceObject2$Companion();
    }
    return TagPlaceObject2$Companion_instance;
  }
  TagPlaceObject2.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var flags = data.readUI8();
    this.hasClipActions = (flags & 128) !== 0;
    this.hasClipDepth = (flags & 64) !== 0;
    this.hasName = (flags & 32) !== 0;
    this.hasRatio = (flags & 16) !== 0;
    this.hasColorTransform = (flags & 8) !== 0;
    this.hasMatrix = (flags & 4) !== 0;
    this.hasCharacter = (flags & 2) !== 0;
    this.hasMove = (flags & 1) !== 0;
    this.depth = data.readUI16();
    if (this.hasCharacter) {
      this.characterId = data.readUI16();
    }
    if (this.hasMatrix) {
      this.matrix = data.readMATRIX();
    }
    if (this.hasColorTransform) {
      this.colorTransform = data.readCXFORMWITHALPHA();
    }
    if (this.hasRatio) {
      this.ratio = data.readUI16();
    }
    if (this.hasName) {
      this.instanceName = data.readString();
    }
    if (this.hasClipDepth) {
      this.clipDepth = data.readUI16();
    }
    if (this.hasClipActions) {
      this.clipActions = data.readCLIPACTIONS_za3lpa$(version);
    }
  };
  Object.defineProperty(TagPlaceObject2.prototype, 'type', {
    get: function () {
      return this.type_26xbwu$_0;
    }
  });
  Object.defineProperty(TagPlaceObject2.prototype, 'name', {
    get: function () {
      return this.name_2anhdr$_0;
    }
  });
  Object.defineProperty(TagPlaceObject2.prototype, 'version', {
    get: function () {
      return this.version_dgq3u8$_0;
    }
  });
  Object.defineProperty(TagPlaceObject2.prototype, 'level', {
    get: function () {
      return this.level_10u75o$_0;
    }
  });
  TagPlaceObject2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Depth: ' + Kotlin.toString(this.depth);
    if (this.hasCharacter)
      str += ', CharacterID: ' + Kotlin.toString(this.characterId);
    if (this.hasMatrix)
      str += ', Matrix: ' + Kotlin.toString(this.matrix);
    if (this.hasColorTransform)
      str += ', ColorTransform: ' + Kotlin.toString(this.colorTransform);
    if (this.hasRatio)
      str += ', Ratio: ' + Kotlin.toString(this.ratio);
    if (this.hasName)
      str += ', Name: ' + this.instanceName;
    if (this.hasClipDepth)
      str += ', ClipDepth: ' + Kotlin.toString(this.clipDepth);
    if (this.hasClipActions && this.clipActions != null) {
      str = str + ('\n' + repeat(' ', indent + 2 | 0) + ((tmp$ = this.clipActions) != null ? tmp$ : Kotlin.throwNPE()).toString_vux9f0$(indent + 2 | 0, flags));
    }
    return str;
  };
  TagPlaceObject2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagPlaceObject2',
    interfaces: [TagPlaceObject, IDisplayListTag]
  };
  function TagPlaceObject3() {
    TagPlaceObject3$Companion_getInstance();
    TagPlaceObject2.call(this);
    this.type_chgyb7$_0 = TagPlaceObject3$Companion_getInstance().TYPE;
    this.name_cdqsua$_0 = 'PlaceObject3';
    this.version_a7q51r$_0 = 8;
    this.level_rss9wj$_0 = 3;
  }
  function TagPlaceObject3$Companion() {
    TagPlaceObject3$Companion_instance = this;
    this.TYPE = 70;
  }
  TagPlaceObject3$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagPlaceObject3$Companion_instance = null;
  function TagPlaceObject3$Companion_getInstance() {
    if (TagPlaceObject3$Companion_instance === null) {
      new TagPlaceObject3$Companion();
    }
    return TagPlaceObject3$Companion_instance;
  }
  TagPlaceObject3.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var tmp$;
    var flags1 = data.readUI8();
    this.hasClipActions = (flags1 & 128) !== 0;
    this.hasClipDepth = (flags1 & 64) !== 0;
    this.hasName = (flags1 & 32) !== 0;
    this.hasRatio = (flags1 & 16) !== 0;
    this.hasColorTransform = (flags1 & 8) !== 0;
    this.hasMatrix = (flags1 & 4) !== 0;
    this.hasCharacter = (flags1 & 2) !== 0;
    this.hasMove = (flags1 & 1) !== 0;
    var flags2 = data.readUI8();
    this.hasOpaqueBackground = (flags2 & 64) !== 0;
    this.hasVisible = (flags2 & 32) !== 0;
    this.hasImage = (flags2 & 16) !== 0;
    this.hasClassName = (flags2 & 8) !== 0;
    this.hasCacheAsBitmap = (flags2 & 4) !== 0;
    this.hasBlendMode = (flags2 & 2) !== 0;
    this.hasFilterList = (flags2 & 1) !== 0;
    this.depth = data.readUI16();
    if (this.hasClassName)
      this.className = data.readString();
    if (this.hasCharacter)
      this.characterId = data.readUI16();
    if (this.hasMatrix)
      this.matrix = data.readMATRIX();
    if (this.hasColorTransform)
      this.colorTransform = data.readCXFORMWITHALPHA();
    if (this.hasRatio)
      this.ratio = data.readUI16();
    if (this.hasName)
      this.instanceName = data.readString();
    if (this.hasClipDepth)
      this.clipDepth = data.readUI16();
    if (this.hasFilterList) {
      tmp$ = data.readUI8();
      for (var i = 0; i < tmp$; i++)
        this.surfaceFilterList.add_11rb$(data.readFILTER());
    }
    if (this.hasBlendMode)
      this.blendMode = data.readUI8();
    if (this.hasCacheAsBitmap)
      this.bitmapCache = data.readUI8();
    if (this.hasVisible)
      this.visible = data.readUI8();
    if (this.hasOpaqueBackground)
      this.bitmapBackgroundColor = data.readRGBA();
    if (this.hasClipActions)
      this.clipActions = data.readCLIPACTIONS_za3lpa$(version);
  };
  Object.defineProperty(TagPlaceObject3.prototype, 'type', {
    get: function () {
      return this.type_chgyb7$_0;
    }
  });
  Object.defineProperty(TagPlaceObject3.prototype, 'name', {
    get: function () {
      return this.name_cdqsua$_0;
    }
  });
  Object.defineProperty(TagPlaceObject3.prototype, 'version', {
    get: function () {
      return this.version_a7q51r$_0;
    }
  });
  Object.defineProperty(TagPlaceObject3.prototype, 'level', {
    get: function () {
      return this.level_rss9wj$_0;
    }
  });
  TagPlaceObject3.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$, tmp$_0;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Depth: ' + Kotlin.toString(this.depth);
    if (this.hasClassName)
      str += ', ClassName: ' + this.className;
    if (this.hasCharacter)
      str += ', CharacterID: ' + Kotlin.toString(this.characterId);
    if (this.hasMatrix)
      str += ', Matrix: ' + Kotlin.toString(this.matrix);
    if (this.hasColorTransform)
      str += ', ColorTransform: ' + Kotlin.toString(this.colorTransform);
    if (this.hasRatio)
      str += ', Ratio: ' + Kotlin.toString(this.ratio);
    if (this.hasName)
      str += ', Name: ' + this.instanceName;
    if (this.hasClipDepth)
      str += ', ClipDepth: ' + Kotlin.toString(this.clipDepth);
    if (this.hasBlendMode)
      str += ', BlendMode: ' + BlendMode_getInstance().toString_za3lpa$(this.blendMode);
    if (this.hasCacheAsBitmap)
      str += ', CacheAsBitmap: ' + Kotlin.toString(this.bitmapCache);
    if (this.hasVisible)
      str += ', Visible: ' + Kotlin.toString(this.visible);
    if (this.hasOpaqueBackground)
      str += ', BackgroundColor: ' + ColorUtils_getInstance().rgbaToString_za3lpa$(this.bitmapBackgroundColor);
    if (this.hasFilterList) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Filters:';
      tmp$ = this.surfaceFilterList.size;
      for (var i = 0; i < tmp$; i++) {
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.surfaceFilterList.get_za3lpa$(i).toString_za3lpa$(indent + 4 | 0);
      }
    }
    if (this.hasClipActions) {
      str = str + ('\n' + repeat(' ', indent + 2 | 0) + ((tmp$_0 = this.clipActions) != null ? tmp$_0 : Kotlin.throwNPE()).toString_vux9f0$(indent + 2 | 0));
    }
    return str;
  };
  TagPlaceObject3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagPlaceObject3',
    interfaces: [TagPlaceObject2, IDisplayListTag]
  };
  function TagPlaceObject4() {
    TagPlaceObject4$Companion_getInstance();
    TagPlaceObject3.call(this);
    this.type_r5v8j8$_0 = TagPlaceObject4$Companion_getInstance().TYPE;
    this.name_r2532b$_0 = 'PlaceObject4';
    this.version_6yq69a$_0 = 19;
    this.level_eepb0e$_0 = 4;
  }
  function TagPlaceObject4$Companion() {
    TagPlaceObject4$Companion_instance = this;
    this.TYPE = 94;
  }
  TagPlaceObject4$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagPlaceObject4$Companion_instance = null;
  function TagPlaceObject4$Companion_getInstance() {
    if (TagPlaceObject4$Companion_instance === null) {
      new TagPlaceObject4$Companion();
    }
    return TagPlaceObject4$Companion_instance;
  }
  TagPlaceObject4.prototype.parse_roywkq$$default = function (data_0, length_0, version_0, async_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_roywkq$$default_1(this, data_0, length_0, version_0, async_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parse_roywkq$$default_1($this, data_0, length_0, version_0, async_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$length = length_0;
    this.local$version = version_0;
    this.local$async = async_0;
  }
  Coroutine$parse_roywkq$$default_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_roywkq$$default_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_roywkq$$default_1.prototype.constructor = Coroutine$parse_roywkq$$default_1;
  Coroutine$parse_roywkq$$default_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.parse_roywkq$(this.local$data, this.local$length, this.local$version, this.local$async, this, TagPlaceObject3.prototype.parse_roywkq$$default.bind(this.$this));
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$data.bytesAvailable > 0) {
              this.$this.metaData = this.local$data.readObject();
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
  Object.defineProperty(TagPlaceObject4.prototype, 'type', {
    get: function () {
      return this.type_r5v8j8$_0;
    }
  });
  Object.defineProperty(TagPlaceObject4.prototype, 'name', {
    get: function () {
      return this.name_r2532b$_0;
    }
  });
  Object.defineProperty(TagPlaceObject4.prototype, 'version', {
    get: function () {
      return this.version_6yq69a$_0;
    }
  });
  Object.defineProperty(TagPlaceObject4.prototype, 'level', {
    get: function () {
      return this.level_eepb0e$_0;
    }
  });
  TagPlaceObject4.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = this.toString_vux9f0$(indent, 0, TagPlaceObject3.prototype.toString_vux9f0$$default.bind(this));
    if (this.metaData != null) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'MetaData: yes';
    }
    return str;
  };
  TagPlaceObject4.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagPlaceObject4',
    interfaces: [TagPlaceObject3, IDisplayListTag]
  };
  function TagProductInfo() {
    TagProductInfo$Companion_getInstance();
    _BaseTag.call(this);
    this.productId = 0;
    this.edition = 0;
    this.majorVersion = 0;
    this.minorVersion = 0;
    this.build = Kotlin.Long.ZERO;
    this.compileDate_rmsbwi$_0 = this.compileDate_rmsbwi$_0;
    this.type_5x0ut7$_0 = TagProductInfo$Companion_getInstance().TYPE;
    this.name_5tapca$_0 = 'ProductInfo';
    this.version_xs4yiv$_0 = 3;
    this.level_xqumn9$_0 = 1;
  }
  function TagProductInfo$Companion() {
    TagProductInfo$Companion_instance = this;
    this.TYPE = 41;
  }
  TagProductInfo$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagProductInfo$Companion_instance = null;
  function TagProductInfo$Companion_getInstance() {
    if (TagProductInfo$Companion_instance === null) {
      new TagProductInfo$Companion();
    }
    return TagProductInfo$Companion_instance;
  }
  Object.defineProperty(TagProductInfo.prototype, 'compileDate', {
    get: function () {
      if (this.compileDate_rmsbwi$_0 == null)
        return Kotlin.throwUPAE('compileDate');
      return this.compileDate_rmsbwi$_0;
    },
    set: function (compileDate) {
      this.compileDate_rmsbwi$_0 = compileDate;
    }
  });
  TagProductInfo.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.productId = data.readUI32();
    this.edition = data.readUI32();
    this.majorVersion = data.readUI8();
    this.minorVersion = data.readUI8();
    this.build = Kotlin.Long.fromInt(data.readUI32()).add(Kotlin.Long.fromInt(data.readUI32())).shiftLeft(32);
    var sec = Kotlin.Long.fromInt(data.readUI32()).add(Kotlin.Long.fromInt(data.readUI32())).shiftLeft(32);
    this.compileDate = new UTCDate(sec);
  };
  Object.defineProperty(TagProductInfo.prototype, 'type', {
    get: function () {
      return this.type_5x0ut7$_0;
    }
  });
  Object.defineProperty(TagProductInfo.prototype, 'name', {
    get: function () {
      return this.name_5tapca$_0;
    }
  });
  Object.defineProperty(TagProductInfo.prototype, 'version', {
    get: function () {
      return this.version_xs4yiv$_0;
    }
  });
  Object.defineProperty(TagProductInfo.prototype, 'level', {
    get: function () {
      return this.level_xqumn9$_0;
    }
  });
  TagProductInfo.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'ProductID: ' + Kotlin.toString(this.productId) + ', ' + 'Edition: ' + Kotlin.toString(this.edition) + ', ' + 'Version: ' + Kotlin.toString(this.majorVersion) + '.' + Kotlin.toString(this.minorVersion) + ' r' + Kotlin.toString(this.build) + ', ' + 'CompileDate: ' + this.compileDate.toString();
  };
  TagProductInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagProductInfo',
    interfaces: [_BaseTag, ITag]
  };
  function TagPathsArePostScript() {
    TagPathsArePostScript$Companion_getInstance();
    _BaseTag.call(this);
    this.type_wvo6zt$_0 = TagPathsArePostScript$Companion_getInstance().TYPE;
    this.name_wzecgq$_0 = 'PathsArePostScript';
    this.version_qxvej9$_0 = 2;
    this.level_sxi91d$_0 = 1;
  }
  function TagPathsArePostScript$Companion() {
    TagPathsArePostScript$Companion_instance = this;
    this.TYPE = 25;
  }
  TagPathsArePostScript$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagPathsArePostScript$Companion_instance = null;
  function TagPathsArePostScript$Companion_getInstance() {
    if (TagPathsArePostScript$Companion_instance === null) {
      new TagPathsArePostScript$Companion();
    }
    return TagPathsArePostScript$Companion_instance;
  }
  TagPathsArePostScript.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
  };
  Object.defineProperty(TagPathsArePostScript.prototype, 'type', {
    get: function () {
      return this.type_wvo6zt$_0;
    }
  });
  Object.defineProperty(TagPathsArePostScript.prototype, 'name', {
    get: function () {
      return this.name_wzecgq$_0;
    }
  });
  Object.defineProperty(TagPathsArePostScript.prototype, 'version', {
    get: function () {
      return this.version_qxvej9$_0;
    }
  });
  Object.defineProperty(TagPathsArePostScript.prototype, 'level', {
    get: function () {
      return this.level_sxi91d$_0;
    }
  });
  TagPathsArePostScript.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagPathsArePostScript.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagPathsArePostScript',
    interfaces: [_BaseTag, ITag]
  };
  function TagProtect() {
    TagProtect$Companion_getInstance();
    _BaseTag.call(this);
    this.password_0 = new FlashByteArray();
    this.type_aq7tal$_0 = TagProtect$Companion_getInstance().TYPE;
    this.name_amhnto$_0 = 'Protect';
    this.version_fnnw51$_0 = 2;
    this.level_qo31mf$_0 = 1;
  }
  function TagProtect$Companion() {
    TagProtect$Companion_instance = this;
    this.TYPE = 24;
  }
  TagProtect$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagProtect$Companion_instance = null;
  function TagProtect$Companion_getInstance() {
    if (TagProtect$Companion_instance === null) {
      new TagProtect$Companion();
    }
    return TagProtect$Companion_instance;
  }
  TagProtect.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    if (length > 0) {
      this.password_0 = toFlash(data.readBytes_za3lpa$(length));
    }
  };
  Object.defineProperty(TagProtect.prototype, 'type', {
    get: function () {
      return this.type_aq7tal$_0;
    }
  });
  Object.defineProperty(TagProtect.prototype, 'name', {
    get: function () {
      return this.name_amhnto$_0;
    }
  });
  Object.defineProperty(TagProtect.prototype, 'version', {
    get: function () {
      return this.version_fnnw51$_0;
    }
  });
  Object.defineProperty(TagProtect.prototype, 'level', {
    get: function () {
      return this.level_qo31mf$_0;
    }
  });
  TagProtect.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagProtect.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagProtect',
    interfaces: [_BaseTag, ITag]
  };
  function TagRemoveObject() {
    TagRemoveObject$Companion_getInstance();
    _BaseTag.call(this);
    this.characterId = 0;
    this.depth = 0;
    this.type_1vdidl$_0 = TagRemoveObject$Companion_getInstance().TYPE;
    this.name_1rncwo$_0 = 'RemoveObject';
    this.version_pys5zb$_0 = 1;
    this.level_h3q84z$_0 = 1;
  }
  function TagRemoveObject$Companion() {
    TagRemoveObject$Companion_instance = this;
    this.TYPE = 5;
  }
  TagRemoveObject$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagRemoveObject$Companion_instance = null;
  function TagRemoveObject$Companion_getInstance() {
    if (TagRemoveObject$Companion_instance === null) {
      new TagRemoveObject$Companion();
    }
    return TagRemoveObject$Companion_instance;
  }
  TagRemoveObject.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.characterId = data.readUI16();
    this.depth = data.readUI16();
  };
  Object.defineProperty(TagRemoveObject.prototype, 'type', {
    get: function () {
      return this.type_1vdidl$_0;
    }
  });
  Object.defineProperty(TagRemoveObject.prototype, 'name', {
    get: function () {
      return this.name_1rncwo$_0;
    }
  });
  Object.defineProperty(TagRemoveObject.prototype, 'version', {
    get: function () {
      return this.version_pys5zb$_0;
    }
  });
  Object.defineProperty(TagRemoveObject.prototype, 'level', {
    get: function () {
      return this.level_h3q84z$_0;
    }
  });
  TagRemoveObject.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'CharacterID: ' + Kotlin.toString(this.characterId) + ', ' + 'Depth: ' + Kotlin.toString(this.depth);
  };
  TagRemoveObject.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagRemoveObject',
    interfaces: [IDisplayListTag, _BaseTag]
  };
  function TagRemoveObject2() {
    TagRemoveObject2$Companion_getInstance();
    TagRemoveObject.call(this);
    this.type_chde5p$_0 = TagRemoveObject2$Companion_getInstance().TYPE;
    this.name_cdn8os$_0 = 'RemoveObject2';
    this.version_kzsdn$_0 = 3;
    this.level_rppx61$_0 = 2;
  }
  function TagRemoveObject2$Companion() {
    TagRemoveObject2$Companion_instance = this;
    this.TYPE = 28;
  }
  TagRemoveObject2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagRemoveObject2$Companion_instance = null;
  function TagRemoveObject2$Companion_getInstance() {
    if (TagRemoveObject2$Companion_instance === null) {
      new TagRemoveObject2$Companion();
    }
    return TagRemoveObject2$Companion_instance;
  }
  TagRemoveObject2.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.depth = data.readUI16();
  };
  Object.defineProperty(TagRemoveObject2.prototype, 'type', {
    get: function () {
      return this.type_chde5p$_0;
    }
  });
  Object.defineProperty(TagRemoveObject2.prototype, 'name', {
    get: function () {
      return this.name_cdn8os$_0;
    }
  });
  Object.defineProperty(TagRemoveObject2.prototype, 'version', {
    get: function () {
      return this.version_kzsdn$_0;
    }
  });
  Object.defineProperty(TagRemoveObject2.prototype, 'level', {
    get: function () {
      return this.level_rppx61$_0;
    }
  });
  TagRemoveObject2.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Depth: ' + Kotlin.toString(this.depth);
  };
  TagRemoveObject2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagRemoveObject2',
    interfaces: [TagRemoveObject, IDisplayListTag]
  };
  function TagScriptLimits() {
    TagScriptLimits$Companion_getInstance();
    _BaseTag.call(this);
    this.maxRecursionDepth = 0;
    this.scriptTimeoutSeconds = 0;
    this.type_6pdjr$_0 = TagScriptLimits$Companion_getInstance().TYPE;
    this.name_afj0o$_0 = 'ScriptLimits';
    this.version_tpiejr$_0 = 7;
    this.level_9v3nv7$_0 = 1;
  }
  function TagScriptLimits$Companion() {
    TagScriptLimits$Companion_instance = this;
    this.TYPE = 65;
  }
  TagScriptLimits$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagScriptLimits$Companion_instance = null;
  function TagScriptLimits$Companion_getInstance() {
    if (TagScriptLimits$Companion_instance === null) {
      new TagScriptLimits$Companion();
    }
    return TagScriptLimits$Companion_instance;
  }
  TagScriptLimits.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.maxRecursionDepth = data.readUI16();
    this.scriptTimeoutSeconds = data.readUI16();
  };
  Object.defineProperty(TagScriptLimits.prototype, 'type', {
    get: function () {
      return this.type_6pdjr$_0;
    }
  });
  Object.defineProperty(TagScriptLimits.prototype, 'name', {
    get: function () {
      return this.name_afj0o$_0;
    }
  });
  Object.defineProperty(TagScriptLimits.prototype, 'version', {
    get: function () {
      return this.version_tpiejr$_0;
    }
  });
  Object.defineProperty(TagScriptLimits.prototype, 'level', {
    get: function () {
      return this.level_9v3nv7$_0;
    }
  });
  TagScriptLimits.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'MaxRecursionDepth: ' + Kotlin.toString(this.maxRecursionDepth) + ', ' + 'ScriptTimeoutSeconds: ' + Kotlin.toString(this.scriptTimeoutSeconds);
  };
  TagScriptLimits.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagScriptLimits',
    interfaces: [_BaseTag, ITag]
  };
  function TagSetBackgroundColor() {
    TagSetBackgroundColor$Companion_getInstance();
    _BaseTag.call(this);
    this.color = 16777215;
    this.type_aqe0e1$_0 = TagSetBackgroundColor$Companion_getInstance().TYPE;
    this.name_amnux4$_0 = 'SetBackgroundColor';
    this.version_g1pnk9$_0 = 1;
    this.level_qiqxnn$_0 = 1;
  }
  function TagSetBackgroundColor$Companion() {
    TagSetBackgroundColor$Companion_instance = this;
    this.TYPE = 9;
  }
  TagSetBackgroundColor$Companion.prototype.create_za3lpa$ = function (aColor) {
    if (aColor === void 0)
      aColor = 16777215;
    var setBackgroundColor = new TagSetBackgroundColor();
    setBackgroundColor.color = aColor;
    return setBackgroundColor;
  };
  TagSetBackgroundColor$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSetBackgroundColor$Companion_instance = null;
  function TagSetBackgroundColor$Companion_getInstance() {
    if (TagSetBackgroundColor$Companion_instance === null) {
      new TagSetBackgroundColor$Companion();
    }
    return TagSetBackgroundColor$Companion_instance;
  }
  TagSetBackgroundColor.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.color = data.readRGB();
  };
  Object.defineProperty(TagSetBackgroundColor.prototype, 'type', {
    get: function () {
      return this.type_aqe0e1$_0;
    }
  });
  Object.defineProperty(TagSetBackgroundColor.prototype, 'name', {
    get: function () {
      return this.name_amnux4$_0;
    }
  });
  Object.defineProperty(TagSetBackgroundColor.prototype, 'version', {
    get: function () {
      return this.version_g1pnk9$_0;
    }
  });
  Object.defineProperty(TagSetBackgroundColor.prototype, 'level', {
    get: function () {
      return this.level_qiqxnn$_0;
    }
  });
  TagSetBackgroundColor.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Color: ' + ColorUtils_getInstance().rgbToString_za3lpa$(this.color);
  };
  TagSetBackgroundColor.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagSetBackgroundColor',
    interfaces: [_BaseTag, ITag]
  };
  function TagSetTabIndex() {
    TagSetTabIndex$Companion_getInstance();
    _BaseTag.call(this);
    this.depth = 0;
    this.tabIndex = 0;
    this.type_yx4pab$_0 = TagSetTabIndex$Companion_getInstance().TYPE;
    this.name_z0uur8$_0 = 'SetTabIndex';
    this.version_dhdapn$_0 = 7;
    this.level_l5ly3r$_0 = 1;
  }
  function TagSetTabIndex$Companion() {
    TagSetTabIndex$Companion_instance = this;
    this.TYPE = 66;
  }
  TagSetTabIndex$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSetTabIndex$Companion_instance = null;
  function TagSetTabIndex$Companion_getInstance() {
    if (TagSetTabIndex$Companion_instance === null) {
      new TagSetTabIndex$Companion();
    }
    return TagSetTabIndex$Companion_instance;
  }
  TagSetTabIndex.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.depth = data.readUI16();
    this.tabIndex = data.readUI16();
  };
  Object.defineProperty(TagSetTabIndex.prototype, 'type', {
    get: function () {
      return this.type_yx4pab$_0;
    }
  });
  Object.defineProperty(TagSetTabIndex.prototype, 'name', {
    get: function () {
      return this.name_z0uur8$_0;
    }
  });
  Object.defineProperty(TagSetTabIndex.prototype, 'version', {
    get: function () {
      return this.version_dhdapn$_0;
    }
  });
  Object.defineProperty(TagSetTabIndex.prototype, 'level', {
    get: function () {
      return this.level_l5ly3r$_0;
    }
  });
  TagSetTabIndex.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Depth: ' + Kotlin.toString(this.depth) + ', ' + 'TabIndex: ' + Kotlin.toString(this.tabIndex);
  };
  TagSetTabIndex.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagSetTabIndex',
    interfaces: [_BaseTag, ITag]
  };
  function TagShowFrame() {
    TagShowFrame$Companion_getInstance();
    _BaseTag.call(this);
    this.type_kiae4y$_0 = TagShowFrame$Companion_getInstance().TYPE;
    this.name_km0jlv$_0 = 'ShowFrame';
    this.version_vtz3zo$_0 = 1;
    this.level_k6oc8$_0 = 1;
  }
  function TagShowFrame$Companion() {
    TagShowFrame$Companion_instance = this;
    this.TYPE = 1;
  }
  TagShowFrame$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagShowFrame$Companion_instance = null;
  function TagShowFrame$Companion_getInstance() {
    if (TagShowFrame$Companion_instance === null) {
      new TagShowFrame$Companion();
    }
    return TagShowFrame$Companion_instance;
  }
  TagShowFrame.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
  };
  Object.defineProperty(TagShowFrame.prototype, 'type', {
    get: function () {
      return this.type_kiae4y$_0;
    }
  });
  Object.defineProperty(TagShowFrame.prototype, 'name', {
    get: function () {
      return this.name_km0jlv$_0;
    }
  });
  Object.defineProperty(TagShowFrame.prototype, 'version', {
    get: function () {
      return this.version_vtz3zo$_0;
    }
  });
  Object.defineProperty(TagShowFrame.prototype, 'level', {
    get: function () {
      return this.level_k6oc8$_0;
    }
  });
  TagShowFrame.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagShowFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagShowFrame',
    interfaces: [IDisplayListTag, _BaseTag]
  };
  function TagSoundStreamBlock() {
    TagSoundStreamBlock$Companion_getInstance();
    _BaseTag.call(this);
    this.soundData = new FlashByteArray();
    this.type_mr9pxg$_0 = TagSoundStreamBlock$Companion_getInstance().TYPE;
    this.name_mnjkgj$_0 = 'SoundStreamBlock';
    this.version_s34gwu$_0 = 1;
    this.level_8x07ta$_0 = 1;
  }
  function TagSoundStreamBlock$Companion() {
    TagSoundStreamBlock$Companion_instance = this;
    this.TYPE = 19;
  }
  TagSoundStreamBlock$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSoundStreamBlock$Companion_instance = null;
  function TagSoundStreamBlock$Companion_getInstance() {
    if (TagSoundStreamBlock$Companion_instance === null) {
      new TagSoundStreamBlock$Companion();
    }
    return TagSoundStreamBlock$Companion_instance;
  }
  TagSoundStreamBlock.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.soundData = toFlash(data.readBytes_za3lpa$(length));
  };
  Object.defineProperty(TagSoundStreamBlock.prototype, 'type', {
    get: function () {
      return this.type_mr9pxg$_0;
    }
  });
  Object.defineProperty(TagSoundStreamBlock.prototype, 'name', {
    get: function () {
      return this.name_mnjkgj$_0;
    }
  });
  Object.defineProperty(TagSoundStreamBlock.prototype, 'version', {
    get: function () {
      return this.version_s34gwu$_0;
    }
  });
  Object.defineProperty(TagSoundStreamBlock.prototype, 'level', {
    get: function () {
      return this.level_8x07ta$_0;
    }
  });
  TagSoundStreamBlock.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'Length: ' + Kotlin.toString(this.soundData.length);
  };
  TagSoundStreamBlock.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagSoundStreamBlock',
    interfaces: [_BaseTag, ITag]
  };
  function TagSoundStreamHead() {
    TagSoundStreamHead$Companion_getInstance();
    _BaseTag.call(this);
    this.playbackSoundRate = 0;
    this.playbackSoundSize = 0;
    this.playbackSoundType = 0;
    this.streamSoundCompression = 0;
    this.streamSoundRate = 0;
    this.streamSoundSize = 0;
    this.streamSoundType = 0;
    this.streamSoundSampleCount = 0;
    this.latencySeek = 0;
    this.type_m8wyxf$_0 = TagSoundStreamHead$Companion_getInstance().TYPE;
    this.name_mcn4ec$_0 = 'SoundStreamHead';
    this.version_ccfxkb$_0 = 1;
    this.level_gjhh49$_0 = 1;
  }
  function TagSoundStreamHead$Companion() {
    TagSoundStreamHead$Companion_instance = this;
    this.TYPE = 18;
  }
  TagSoundStreamHead$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSoundStreamHead$Companion_instance = null;
  function TagSoundStreamHead$Companion_getInstance() {
    if (TagSoundStreamHead$Companion_instance === null) {
      new TagSoundStreamHead$Companion();
    }
    return TagSoundStreamHead$Companion_instance;
  }
  TagSoundStreamHead.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    data.readUB_za3lpa$(4);
    this.playbackSoundRate = data.readUB_za3lpa$(2);
    this.playbackSoundSize = data.readUB_za3lpa$(1);
    this.playbackSoundType = data.readUB_za3lpa$(1);
    this.streamSoundCompression = data.readUB_za3lpa$(4);
    this.streamSoundRate = data.readUB_za3lpa$(2);
    this.streamSoundSize = data.readUB_za3lpa$(1);
    this.streamSoundType = data.readUB_za3lpa$(1);
    this.streamSoundSampleCount = data.readUI16();
    if (this.streamSoundCompression === SoundCompression_getInstance().MP3)
      this.latencySeek = data.readSI16();
  };
  Object.defineProperty(TagSoundStreamHead.prototype, 'type', {
    get: function () {
      return this.type_m8wyxf$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead.prototype, 'name', {
    get: function () {
      return this.name_mcn4ec$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead.prototype, 'version', {
    get: function () {
      return this.version_ccfxkb$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead.prototype, 'level', {
    get: function () {
      return this.level_gjhh49$_0;
    }
  });
  TagSoundStreamHead.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.streamSoundSampleCount > 0) {
      str += 'Format: ' + SoundCompression_getInstance().toString_za3lpa$(this.streamSoundCompression) + ', ' + 'Rate: ' + SoundRate_getInstance().toString_za3lpa$(this.streamSoundRate) + ', ' + 'Size: ' + SoundSize_getInstance().toString_za3lpa$(this.streamSoundSize) + ', ' + 'Type: ' + SoundType_getInstance().toString_za3lpa$(this.streamSoundType) + ', ';
    }
    str += 'Samples: ' + this.streamSoundSampleCount + ', ';
    str += 'LatencySeek: ' + Kotlin.toString(this.latencySeek);
    return str;
  };
  TagSoundStreamHead.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagSoundStreamHead',
    interfaces: [_BaseTag, ITag]
  };
  function TagSoundStreamHead2() {
    TagSoundStreamHead2$Companion_getInstance();
    TagSoundStreamHead.call(this);
    this.type_owiyk7$_0 = TagSoundStreamHead2$Companion_getInstance().TYPE;
    this.name_p09414$_0 = 'SoundStreamHead2';
    this.version_4j4vbb$_0 = 3;
    this.level_58nuh9$_0 = 2;
  }
  function TagSoundStreamHead2$Companion() {
    TagSoundStreamHead2$Companion_instance = this;
    this.TYPE = 45;
  }
  TagSoundStreamHead2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSoundStreamHead2$Companion_instance = null;
  function TagSoundStreamHead2$Companion_getInstance() {
    if (TagSoundStreamHead2$Companion_instance === null) {
      new TagSoundStreamHead2$Companion();
    }
    return TagSoundStreamHead2$Companion_instance;
  }
  Object.defineProperty(TagSoundStreamHead2.prototype, 'type', {
    get: function () {
      return this.type_owiyk7$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead2.prototype, 'name', {
    get: function () {
      return this.name_p09414$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead2.prototype, 'version', {
    get: function () {
      return this.version_4j4vbb$_0;
    }
  });
  Object.defineProperty(TagSoundStreamHead2.prototype, 'level', {
    get: function () {
      return this.level_58nuh9$_0;
    }
  });
  TagSoundStreamHead2.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.streamSoundSampleCount > 0) {
      str += 'Format: ' + SoundCompression_getInstance().toString_za3lpa$(this.streamSoundCompression) + ', ' + 'Rate: ' + SoundRate_getInstance().toString_za3lpa$(this.streamSoundRate) + ', ' + 'Size: ' + SoundSize_getInstance().toString_za3lpa$(this.streamSoundSize) + ', ' + 'Type: ' + SoundType_getInstance().toString_za3lpa$(this.streamSoundType) + ', ';
    }
    str += 'Samples: ' + Kotlin.toString(this.streamSoundSampleCount);
    return str;
  };
  TagSoundStreamHead2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagSoundStreamHead2',
    interfaces: [TagSoundStreamHead, ITag]
  };
  function TagStartSound() {
    TagStartSound$Companion_getInstance();
    _BaseTag.call(this);
    this.soundId = 0;
    this.soundInfo_o1ev3e$_0 = this.soundInfo_o1ev3e$_0;
    this.type_4b3wwd$_0 = TagStartSound$Companion_getInstance().TYPE;
    this.name_4eu2da$_0 = 'StartSound';
    this.version_pjyga9$_0 = 1;
    this.level_4els83$_0 = 1;
  }
  function TagStartSound$Companion() {
    TagStartSound$Companion_instance = this;
    this.TYPE = 15;
  }
  TagStartSound$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagStartSound$Companion_instance = null;
  function TagStartSound$Companion_getInstance() {
    if (TagStartSound$Companion_instance === null) {
      new TagStartSound$Companion();
    }
    return TagStartSound$Companion_instance;
  }
  Object.defineProperty(TagStartSound.prototype, 'soundInfo', {
    get: function () {
      if (this.soundInfo_o1ev3e$_0 == null)
        return Kotlin.throwUPAE('soundInfo');
      return this.soundInfo_o1ev3e$_0;
    },
    set: function (soundInfo) {
      this.soundInfo_o1ev3e$_0 = soundInfo;
    }
  });
  TagStartSound.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.soundId = data.readUI16();
    this.soundInfo = data.readSOUNDINFO();
  };
  Object.defineProperty(TagStartSound.prototype, 'type', {
    get: function () {
      return this.type_4b3wwd$_0;
    }
  });
  Object.defineProperty(TagStartSound.prototype, 'name', {
    get: function () {
      return this.name_4eu2da$_0;
    }
  });
  Object.defineProperty(TagStartSound.prototype, 'version', {
    get: function () {
      return this.version_pjyga9$_0;
    }
  });
  Object.defineProperty(TagStartSound.prototype, 'level', {
    get: function () {
      return this.level_4els83$_0;
    }
  });
  TagStartSound.prototype.toString_vux9f0$$default = function (indent, flags) {
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'SoundID: ' + Kotlin.toString(this.soundId) + ', ' + 'SoundInfo: ' + Kotlin.toString(this.soundInfo);
    return str;
  };
  TagStartSound.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagStartSound',
    interfaces: [_BaseTag, ITag]
  };
  function TagStartSound2() {
    TagStartSound2$Companion_getInstance();
    _BaseTag.call(this);
    this.soundClassName_o9lx2h$_0 = this.soundClassName_o9lx2h$_0;
    this.soundInfo_70tvl2$_0 = this.soundInfo_70tvl2$_0;
    this.type_xzpeir$_0 = TagStartSound2$Companion_getInstance().TYPE;
    this.name_xvz91u$_0 = 'StartSound2';
    this.version_c6lc73$_0 = 9;
    this.level_ft2bcd$_0 = 2;
  }
  function TagStartSound2$Companion() {
    TagStartSound2$Companion_instance = this;
    this.TYPE = 89;
  }
  TagStartSound2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagStartSound2$Companion_instance = null;
  function TagStartSound2$Companion_getInstance() {
    if (TagStartSound2$Companion_instance === null) {
      new TagStartSound2$Companion();
    }
    return TagStartSound2$Companion_instance;
  }
  Object.defineProperty(TagStartSound2.prototype, 'soundClassName', {
    get: function () {
      if (this.soundClassName_o9lx2h$_0 == null)
        return Kotlin.throwUPAE('soundClassName');
      return this.soundClassName_o9lx2h$_0;
    },
    set: function (soundClassName) {
      this.soundClassName_o9lx2h$_0 = soundClassName;
    }
  });
  Object.defineProperty(TagStartSound2.prototype, 'soundInfo', {
    get: function () {
      if (this.soundInfo_70tvl2$_0 == null)
        return Kotlin.throwUPAE('soundInfo');
      return this.soundInfo_70tvl2$_0;
    },
    set: function (soundInfo) {
      this.soundInfo_70tvl2$_0 = soundInfo;
    }
  });
  TagStartSound2.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.soundClassName = data.readString();
    this.soundInfo = data.readSOUNDINFO();
  };
  Object.defineProperty(TagStartSound2.prototype, 'type', {
    get: function () {
      return this.type_xzpeir$_0;
    }
  });
  Object.defineProperty(TagStartSound2.prototype, 'name', {
    get: function () {
      return this.name_xvz91u$_0;
    }
  });
  Object.defineProperty(TagStartSound2.prototype, 'version', {
    get: function () {
      return this.version_c6lc73$_0;
    }
  });
  Object.defineProperty(TagStartSound2.prototype, 'level', {
    get: function () {
      return this.level_ft2bcd$_0;
    }
  });
  TagStartSound2.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'SoundClassName: ' + this.soundClassName + ', ' + 'SoundInfo: ' + Kotlin.toString(this.soundInfo);
  };
  TagStartSound2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagStartSound2',
    interfaces: [_BaseTag, ITag]
  };
  function TagSymbolClass() {
    TagSymbolClass$Companion_getInstance();
    _BaseTag.call(this);
    this.symbols = ArrayList_init();
    this.type_8d3cua$_0 = TagSymbolClass$Companion_getInstance().TYPE;
    this.name_8gtib7$_0 = 'SymbolClass';
    this.version_88ao9o$_0 = 9;
    this.level_krb5yw$_0 = 1;
  }
  function TagSymbolClass$Companion() {
    TagSymbolClass$Companion_instance = this;
    this.TYPE = 76;
  }
  TagSymbolClass$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSymbolClass$Companion_instance = null;
  function TagSymbolClass$Companion_getInstance() {
    if (TagSymbolClass$Companion_instance === null) {
      new TagSymbolClass$Companion();
    }
    return TagSymbolClass$Companion_instance;
  }
  TagSymbolClass.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    var tmp$;
    tmp$ = data.readUI16();
    for (var i = 0; i < tmp$; i++)
      this.symbols.add_11rb$(data.readSYMBOL());
  };
  Object.defineProperty(TagSymbolClass.prototype, 'type', {
    get: function () {
      return this.type_8d3cua$_0;
    }
  });
  Object.defineProperty(TagSymbolClass.prototype, 'name', {
    get: function () {
      return this.name_8gtib7$_0;
    }
  });
  Object.defineProperty(TagSymbolClass.prototype, 'version', {
    get: function () {
      return this.version_88ao9o$_0;
    }
  });
  Object.defineProperty(TagSymbolClass.prototype, 'level', {
    get: function () {
      return this.level_krb5yw$_0;
    }
  });
  TagSymbolClass.prototype.toString_vux9f0$$default = function (indent, flags) {
    var tmp$;
    var str = Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
    if (this.symbols.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Symbols:';
      tmp$ = this.symbols.size;
      for (var i = 0; i < tmp$; i++)
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + this.symbols.get_za3lpa$(i).toString();
    }
    return str;
  };
  TagSymbolClass.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagSymbolClass',
    interfaces: [_BaseTag, ITag]
  };
  function TagUnknown(type) {
    if (type === void 0)
      type = 0;
    _BaseTag.call(this);
    this.type_lnckso$_0 = type;
    this.name_ljmfbr$_0 = '????';
    this.version_m13ioq$_0 = 0;
    this.level_rqkf1q$_0 = 1;
  }
  Object.defineProperty(TagUnknown.prototype, 'type', {
    get: function () {
      return this.type_lnckso$_0;
    }
  });
  TagUnknown.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    return data.skipBytes_za3lpa$(length);
  };
  Object.defineProperty(TagUnknown.prototype, 'name', {
    get: function () {
      return this.name_ljmfbr$_0;
    }
  });
  Object.defineProperty(TagUnknown.prototype, 'version', {
    get: function () {
      return this.version_m13ioq$_0;
    }
  });
  Object.defineProperty(TagUnknown.prototype, 'level', {
    get: function () {
      return this.level_rqkf1q$_0;
    }
  });
  TagUnknown.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent);
  };
  TagUnknown.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagUnknown',
    interfaces: [_BaseTag, ITag]
  };
  function TagVideoFrame() {
    TagVideoFrame$Companion_getInstance();
    _BaseTag.call(this);
    this.streamId = 0;
    this.frameNum = 0;
    this._videoData_0 = new FlashByteArray();
    this.type_qlfcx4$_0 = TagVideoFrame$Companion_getInstance().TYPE;
    this.name_qp5ie1$_0 = 'VideoFrame';
    this.version_uzvs96$_0 = 6;
    this.level_ntvjby$_0 = 1;
  }
  function TagVideoFrame$Companion() {
    TagVideoFrame$Companion_instance = this;
    this.TYPE = 61;
  }
  TagVideoFrame$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagVideoFrame$Companion_instance = null;
  function TagVideoFrame$Companion_getInstance() {
    if (TagVideoFrame$Companion_instance === null) {
      new TagVideoFrame$Companion();
    }
    return TagVideoFrame$Companion_instance;
  }
  TagVideoFrame.prototype.parse_roywkq$$default = function (data, length, version, async, continuation) {
    this.streamId = data.readUI16();
    this.frameNum = data.readUI16();
    this._videoData_0 = toFlash(data.readBytes_za3lpa$(length - 4 | 0));
  };
  Object.defineProperty(TagVideoFrame.prototype, 'type', {
    get: function () {
      return this.type_qlfcx4$_0;
    }
  });
  Object.defineProperty(TagVideoFrame.prototype, 'name', {
    get: function () {
      return this.name_qp5ie1$_0;
    }
  });
  Object.defineProperty(TagVideoFrame.prototype, 'version', {
    get: function () {
      return this.version_uzvs96$_0;
    }
  });
  Object.defineProperty(TagVideoFrame.prototype, 'level', {
    get: function () {
      return this.level_ntvjby$_0;
    }
  });
  TagVideoFrame.prototype.toString_vux9f0$$default = function (indent, flags) {
    return Tag$Companion_getInstance().toStringCommon_jl0c9m$(this.type, this.name, indent) + 'StreamID: ' + Kotlin.toString(this.streamId) + ', ' + 'Frame: ' + Kotlin.toString(this.frameNum);
  };
  TagVideoFrame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagVideoFrame',
    interfaces: [_BaseTag, ITag]
  };
  function TagSWFEncryptActions(type) {
    TagSWFEncryptActions$Companion_getInstance();
    if (type === void 0)
      type = 0;
    TagUnknown.call(this);
    this.type_jj2uig$_0 = TagSWFEncryptActions$Companion_getInstance().TYPE;
    this.name_jfcp1j$_0 = 'SWFEncryptActions';
  }
  function TagSWFEncryptActions$Companion() {
    TagSWFEncryptActions$Companion_instance = this;
    this.TYPE = 253;
  }
  TagSWFEncryptActions$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSWFEncryptActions$Companion_instance = null;
  function TagSWFEncryptActions$Companion_getInstance() {
    if (TagSWFEncryptActions$Companion_instance === null) {
      new TagSWFEncryptActions$Companion();
    }
    return TagSWFEncryptActions$Companion_instance;
  }
  Object.defineProperty(TagSWFEncryptActions.prototype, 'type', {
    get: function () {
      return this.type_jj2uig$_0;
    }
  });
  Object.defineProperty(TagSWFEncryptActions.prototype, 'name', {
    get: function () {
      return this.name_jfcp1j$_0;
    }
  });
  TagSWFEncryptActions.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagSWFEncryptActions',
    interfaces: [TagUnknown, ITag]
  };
  function TagSWFEncryptSignature(type) {
    TagSWFEncryptSignature$Companion_getInstance();
    if (type === void 0)
      type = 0;
    TagUnknown.call(this);
    this.type_rh1wp9$_0 = TagSWFEncryptSignature$Companion_getInstance().TYPE;
    this.name_rks266$_0 = 'SWFEncryptSignature';
  }
  function TagSWFEncryptSignature$Companion() {
    TagSWFEncryptSignature$Companion_instance = this;
    this.TYPE = 255;
  }
  TagSWFEncryptSignature$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TagSWFEncryptSignature$Companion_instance = null;
  function TagSWFEncryptSignature$Companion_getInstance() {
    if (TagSWFEncryptSignature$Companion_instance === null) {
      new TagSWFEncryptSignature$Companion();
    }
    return TagSWFEncryptSignature$Companion_instance;
  }
  Object.defineProperty(TagSWFEncryptSignature.prototype, 'type', {
    get: function () {
      return this.type_rh1wp9$_0;
    }
  });
  Object.defineProperty(TagSWFEncryptSignature.prototype, 'name', {
    get: function () {
      return this.name_rks266$_0;
    }
  });
  TagSWFEncryptSignature.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TagSWFEncryptSignature',
    interfaces: [TagUnknown, ITag]
  };
  function Frame(frameNumber, tagIndexStart) {
    if (frameNumber === void 0)
      frameNumber = 0;
    if (tagIndexStart === void 0)
      tagIndexStart = 0;
    this.frameNumber = frameNumber;
    this.tagIndexStart = tagIndexStart;
    this.tagIndexEnd = 0;
    this.label = null;
    this.objects = HashMap_init();
    this._objectsSortedByDepth = null;
    this.characters = ArrayList_init();
  }
  var addAll = Kotlin.kotlin.collections.addAll_ipc267$;
  Frame.prototype.getObjectsSortedByDepth = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var depths = ArrayList_init();
    if (this._objectsSortedByDepth == null) {
      addAll(depths, this.objects.keys);
      sort(depths);
      this._objectsSortedByDepth = ArrayList_init();
      tmp$ = depths.size;
      for (var i = 0; i < tmp$; i++) {
        ((tmp$_0 = this._objectsSortedByDepth) != null ? tmp$_0 : Kotlin.throwNPE()).add_11rb$((tmp$_1 = this.objects.get_11rb$(depths.get_za3lpa$(i))) != null ? tmp$_1 : Kotlin.throwNPE());
      }
    }
    return (tmp$_2 = this._objectsSortedByDepth) != null ? tmp$_2 : Kotlin.throwNPE();
  };
  Object.defineProperty(Frame.prototype, 'tagCount', {
    get: function () {
      return this.tagIndexEnd - this.tagIndexStart + 1 | 0;
    }
  });
  Frame.prototype.placeObject_mfr5a0$ = function (tagIndex, tag) {
    var frameObject = this.objects.get_11rb$(tag.depth);
    if (frameObject != null) {
      if (tag.characterId === 0) {
        frameObject.lastModifiedAtIndex = tagIndex;
        frameObject.isKeyframe = false;
      }
       else {
        frameObject.lastModifiedAtIndex = 0;
        frameObject.placedAtIndex = tagIndex;
        frameObject.isKeyframe = true;
        if (tag.characterId !== frameObject.characterId) {
          frameObject.characterId = tag.characterId;
        }
      }
    }
     else {
      var $receiver = this.objects;
      var key = tag.depth;
      var value = new FrameObject(tag.depth, tag.characterId, tag.className, tagIndex, 0, true);
      $receiver.put_xwzc9p$(key, value);
    }
    this._objectsSortedByDepth = null;
  };
  Frame.prototype.removeObject_w6kipj$ = function (tag) {
    this.objects.remove_11rb$(tag.depth);
    this._objectsSortedByDepth = null;
  };
  Frame.prototype.clone = function () {
    var tmp$, tmp$_0;
    var frame = new Frame();
    tmp$ = this.objects.keys.iterator();
    while (tmp$.hasNext()) {
      var depth = tmp$.next();
      var $receiver = frame.objects;
      var value = (Kotlin.isType(tmp$_0 = this.objects.get_11rb$(depth), FrameObject) ? tmp$_0 : Kotlin.throwCCE()).copy_gyap22$();
      $receiver.put_xwzc9p$(depth, value);
    }
    return frame;
  };
  Frame.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    var tmp$, tmp$_0;
    var str = repeat(' ', indent) + '[' + Kotlin.toString(this.frameNumber) + '] ' + 'Start: ' + Kotlin.toString(this.tagIndexStart) + ', ' + 'Length: ' + Kotlin.toString(this.tagCount);
    if (this.label != null && !Kotlin.equals(this.label, '')) {
      str += ', Label: ' + this.label;
    }
    if (this.characters.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Defined CharacterIDs: ' + joinToString(this.characters, ', ');
    }
    tmp$ = this.objects.keys.iterator();
    while (tmp$.hasNext()) {
      var depth = tmp$.next();
      str += (Kotlin.isType(tmp$_0 = this.objects.get_11rb$(depth), FrameObject) ? tmp$_0 : Kotlin.throwCCE()).toString_za3lpa$(indent);
    }
    return str;
  };
  Frame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Frame',
    interfaces: []
  };
  function FrameObject(depth, characterId, className, placedAtIndex, lastModifiedAtIndex, isKeyframe) {
    if (lastModifiedAtIndex === void 0)
      lastModifiedAtIndex = 0;
    if (isKeyframe === void 0)
      isKeyframe = false;
    this.depth = depth;
    this.characterId = characterId;
    this.className = className;
    this.placedAtIndex = placedAtIndex;
    this.lastModifiedAtIndex = lastModifiedAtIndex;
    this.isKeyframe = isKeyframe;
    this.layer = -1;
  }
  FrameObject.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    var str = '\n' + repeat(' ', indent + 2 | 0) + 'Depth: ' + Kotlin.toString(this.depth) + (this.layer > -1 ? ' (Layer ' + this.layer + ')' : '') + ', ' + 'CharacterId: ' + Kotlin.toString(this.characterId) + ', ';
    if (this.className != null) {
      str += 'ClassName: ' + Kotlin.toString(this.className) + ', ';
    }
    str += 'PlacedAt: ' + this.placedAtIndex;
    if (this.lastModifiedAtIndex !== 0) {
      str += ', LastModifiedAt: ' + this.lastModifiedAtIndex;
    }
    if (this.isKeyframe) {
      str += ', IsKeyframe';
    }
    return str;
  };
  FrameObject.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FrameObject',
    interfaces: []
  };
  FrameObject.prototype.component1 = function () {
    return this.depth;
  };
  FrameObject.prototype.component2 = function () {
    return this.characterId;
  };
  FrameObject.prototype.component3 = function () {
    return this.className;
  };
  FrameObject.prototype.component4 = function () {
    return this.placedAtIndex;
  };
  FrameObject.prototype.component5 = function () {
    return this.lastModifiedAtIndex;
  };
  FrameObject.prototype.component6 = function () {
    return this.isKeyframe;
  };
  FrameObject.prototype.copy_gyap22$ = function (depth, characterId, className, placedAtIndex, lastModifiedAtIndex, isKeyframe) {
    return new FrameObject(depth === void 0 ? this.depth : depth, characterId === void 0 ? this.characterId : characterId, className === void 0 ? this.className : className, placedAtIndex === void 0 ? this.placedAtIndex : placedAtIndex, lastModifiedAtIndex === void 0 ? this.lastModifiedAtIndex : lastModifiedAtIndex, isKeyframe === void 0 ? this.isKeyframe : isKeyframe);
  };
  FrameObject.prototype.toString = function () {
    return 'FrameObject(depth=' + Kotlin.toString(this.depth) + (', characterId=' + Kotlin.toString(this.characterId)) + (', className=' + Kotlin.toString(this.className)) + (', placedAtIndex=' + Kotlin.toString(this.placedAtIndex)) + (', lastModifiedAtIndex=' + Kotlin.toString(this.lastModifiedAtIndex)) + (', isKeyframe=' + Kotlin.toString(this.isKeyframe)) + ')';
  };
  FrameObject.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.depth) | 0;
    result = result * 31 + Kotlin.hashCode(this.characterId) | 0;
    result = result * 31 + Kotlin.hashCode(this.className) | 0;
    result = result * 31 + Kotlin.hashCode(this.placedAtIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.lastModifiedAtIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.isKeyframe) | 0;
    return result;
  };
  FrameObject.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.depth, other.depth) && Kotlin.equals(this.characterId, other.characterId) && Kotlin.equals(this.className, other.className) && Kotlin.equals(this.placedAtIndex, other.placedAtIndex) && Kotlin.equals(this.lastModifiedAtIndex, other.lastModifiedAtIndex) && Kotlin.equals(this.isKeyframe, other.isKeyframe)))));
  };
  function Layer(depth, frameCount) {
    this.depth = depth;
    this.frameCount = frameCount;
    this.frameStripMap = ArrayList_init();
    this.strips = ArrayList_init();
  }
  Layer.prototype.appendStrip_qt1dr2$ = function (type, start, end) {
    var tmp$, tmp$_0;
    if (type !== LayerStrip$Companion_getInstance().TYPE_EMPTY) {
      var stripIndex = this.strips.size;
      if (stripIndex === 0 && start > 0) {
        for (var i = 0; i < start; i++) {
          this.frameStripMap.set_wxm5ur$(i, stripIndex);
        }
        this.strips.set_wxm5ur$((tmp$ = stripIndex, stripIndex = tmp$ + 1 | 0, tmp$), new LayerStrip(LayerStrip$Companion_getInstance().TYPE_SPACER, 0, start - 1 | 0));
      }
       else if (stripIndex > 0) {
        var prevStrip = this.strips.get_za3lpa$(stripIndex - 1 | 0);
        if ((prevStrip.endFrameIndex + 1 | 0) < start) {
          for (var i_0 = prevStrip.endFrameIndex + 1 | 0; i_0 < start; i_0++) {
            this.frameStripMap.set_wxm5ur$(i_0, stripIndex);
          }
          this.strips.set_wxm5ur$((tmp$_0 = stripIndex, stripIndex = tmp$_0 + 1 | 0, tmp$_0), new LayerStrip(LayerStrip$Companion_getInstance().TYPE_SPACER, prevStrip.endFrameIndex + 1 | 0, start - 1 | 0));
        }
      }
      for (var i_1 = start; i_1 <= end; i_1++) {
        this.frameStripMap.set_wxm5ur$(i_1, stripIndex);
      }
      this.strips.set_wxm5ur$(stripIndex, new LayerStrip(type, start, end));
    }
  };
  var emptyList = Kotlin.kotlin.collections.emptyList_287e2$;
  Layer.prototype.getStripsForFrameRegion_vux9f0$ = function (start, end) {
    if (start >= this.frameStripMap.size || end < start) {
      return emptyList();
    }
    var startStripIndex = this.frameStripMap.get_za3lpa$(start);
    var endStripIndex = end >= this.frameStripMap.size ? this.strips.size - 1 | 0 : this.frameStripMap.get_za3lpa$(end);
    return slice(this.strips, until(startStripIndex, endStripIndex + 1 | 0));
  };
  Layer.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    var tmp$;
    var str = 'Depth: ' + this.depth + ', Frames: ' + this.frameCount;
    if (this.strips.size > 0) {
      str += '\n' + repeat(' ', indent + 2 | 0) + 'Strips:';
      tmp$ = this.strips.size;
      for (var i = 0; i < tmp$; i++) {
        var strip = this.strips.get_za3lpa$(i);
        str += '\n' + repeat(' ', indent + 4 | 0) + '[' + Kotlin.toString(i) + '] ' + strip.toString();
      }
    }
    return str;
  };
  Layer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Layer',
    interfaces: []
  };
  function LayerStrip(type, startFrameIndex, endFrameIndex) {
    LayerStrip$Companion_getInstance();
    if (type === void 0)
      type = LayerStrip$Companion_getInstance().TYPE_EMPTY;
    if (startFrameIndex === void 0)
      startFrameIndex = 0;
    if (endFrameIndex === void 0)
      endFrameIndex = 0;
    this.type = type;
    this.startFrameIndex = startFrameIndex;
    this.endFrameIndex = endFrameIndex;
  }
  function LayerStrip$Companion() {
    LayerStrip$Companion_instance = this;
    this.TYPE_EMPTY = 0;
    this.TYPE_SPACER = 1;
    this.TYPE_STATIC = 2;
    this.TYPE_MOTIONTWEEN = 3;
    this.TYPE_SHAPETWEEN = 4;
  }
  LayerStrip$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LayerStrip$Companion_instance = null;
  function LayerStrip$Companion_getInstance() {
    if (LayerStrip$Companion_instance === null) {
      new LayerStrip$Companion();
    }
    return LayerStrip$Companion_instance;
  }
  LayerStrip.prototype.toString = function () {
    var tmp$, tmp$_0, tmp$_1;
    var str;
    if (this.startFrameIndex === this.endFrameIndex) {
      str = 'Frame: ' + this.startFrameIndex;
    }
     else {
      str = 'Frames: ' + this.startFrameIndex + '-' + this.endFrameIndex;
    }
    str += ', Type: ';
    tmp$_1 = str;
    tmp$ = this.type;
    if (tmp$ === LayerStrip$Companion_getInstance().TYPE_EMPTY)
      tmp$_0 = 'EMPTY';
    else if (tmp$ === LayerStrip$Companion_getInstance().TYPE_SPACER)
      tmp$_0 = 'SPACER';
    else if (tmp$ === LayerStrip$Companion_getInstance().TYPE_STATIC)
      tmp$_0 = 'STATIC';
    else if (tmp$ === LayerStrip$Companion_getInstance().TYPE_MOTIONTWEEN)
      tmp$_0 = 'MOTIONTWEEN';
    else if (tmp$ === LayerStrip$Companion_getInstance().TYPE_SHAPETWEEN)
      tmp$_0 = 'SHAPETWEEN';
    else
      tmp$_0 = 'unknown';
    str = tmp$_1 + tmp$_0;
    return str;
  };
  LayerStrip.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LayerStrip',
    interfaces: []
  };
  function Scene(frameNumber, name) {
    this.frameNumber = frameNumber;
    this.name = name;
  }
  Scene.prototype.toString_za3lpa$ = function (indent) {
    if (indent === void 0)
      indent = 0;
    return repeat(' ', indent) + 'Name: ' + this.name + ', Frame: ' + this.frameNumber;
  };
  Scene.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Scene',
    interfaces: []
  };
  function SoundStream() {
    this.startFrame = 0;
    this.numFrames = 0;
    this.numSamples = 0;
    this.compression = 0;
    this.rate = 0;
    this.size = 0;
    this.type = 0;
    this.data_lcojir$_0 = new FlashByteArray();
  }
  Object.defineProperty(SoundStream.prototype, 'data', {
    get: function () {
      return this.data_lcojir$_0;
    },
    set: function (data) {
      this.data_lcojir$_0 = data;
    }
  });
  SoundStream.prototype.toString = function () {
    return '[SoundStream] StartFrame: ' + this.startFrame + ', Frames: ' + this.numFrames + ', Samples: ' + this.numSamples + ', Bytes: ' + this.data.length;
  };
  SoundStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'SoundStream',
    interfaces: []
  };
  function ColorUtils() {
    ColorUtils_instance = this;
  }
  ColorUtils.prototype.alpha_za3lpa$ = function (color) {
    return (color >>> 24) / 255;
  };
  ColorUtils.prototype.rgb_za3lpa$ = function (color) {
    return color & 16777215;
  };
  ColorUtils.prototype.r_za3lpa$ = function (color) {
    return (this.rgb_za3lpa$(color) >>> 16 & 255) / 255;
  };
  ColorUtils.prototype.g_za3lpa$ = function (color) {
    return (this.rgb_za3lpa$(color) >>> 8 & 255) / 255;
  };
  ColorUtils.prototype.b_za3lpa$ = function (color) {
    return (this.rgb_za3lpa$(color) >>> 0 & 255) / 255;
  };
  ColorUtils.prototype.interpolate_224j3y$ = function (color1, color2, ratio) {
    var r1 = this.r_za3lpa$(color1);
    var g1 = this.g_za3lpa$(color1);
    var b1 = this.b_za3lpa$(color1);
    var alpha1 = this.alpha_za3lpa$(color1);
    var ri = (r1 + (this.r_za3lpa$(color2) - r1) * ratio) * 255 | 0;
    var gi = (g1 + (this.g_za3lpa$(color2) - g1) * ratio) * 255 | 0;
    var bi = (b1 + (this.b_za3lpa$(color2) - b1) * ratio) * 255 | 0;
    var alphai = (alpha1 + (this.alpha_za3lpa$(color2) - alpha1) * ratio) * 255 | 0;
    return bi | gi << 8 | ri << 16 | alphai << 24;
  };
  ColorUtils.prototype.rgbToString_za3lpa$ = function (color) {
    return format('#%06x', [color & 16777215]);
  };
  ColorUtils.prototype.rgbaToString_za3lpa$ = function (color) {
    return format('#%06x(%02x)', [color & 16777215, color >>> 24]);
  };
  ColorUtils.prototype.argbToString_za3lpa$ = function (color) {
    return format('#(%02x)%06x', [color >>> 24, color & 16777215]);
  };
  ColorUtils.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'ColorUtils',
    interfaces: []
  };
  var ColorUtils_instance = null;
  function ColorUtils_getInstance() {
    if (ColorUtils_instance === null) {
      new ColorUtils();
    }
    return ColorUtils_instance;
  }
  function MatrixUtils() {
    MatrixUtils_instance = this;
  }
  MatrixUtils.prototype.interpolate_m2j8zi$ = function (matrix1, matrix2, ratio) {
    var matrix = new SWFMatrix();
    matrix.scaleX = matrix1.scaleX + (matrix2.scaleX - matrix1.scaleX) * ratio;
    matrix.scaleY = matrix1.scaleY + (matrix2.scaleY - matrix1.scaleY) * ratio;
    matrix.rotateSkew0 = matrix1.rotateSkew0 + (matrix2.rotateSkew0 - matrix1.rotateSkew0) * ratio;
    matrix.rotateSkew1 = matrix1.rotateSkew1 + (matrix2.rotateSkew1 - matrix1.rotateSkew1) * ratio;
    matrix.translateX = matrix1.translateX + (matrix2.translateX - matrix1.translateX | 0) * ratio | 0;
    matrix.translateY = matrix1.translateY + (matrix2.translateY - matrix1.translateY | 0) * ratio | 0;
    return matrix;
  };
  MatrixUtils.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'MatrixUtils',
    interfaces: []
  };
  var MatrixUtils_instance = null;
  function MatrixUtils_getInstance() {
    if (MatrixUtils_instance === null) {
      new MatrixUtils();
    }
    return MatrixUtils_instance;
  }
  function NumberUtils() {
    NumberUtils_instance = this;
  }
  NumberUtils.prototype.roundPixels20_14dthe$ = function (pixels) {
    return round(pixels * 100) / 100;
  };
  NumberUtils.prototype.roundPixels400_14dthe$ = function (pixels) {
    return round(pixels * 10000) / 10000;
  };
  NumberUtils.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'NumberUtils',
    interfaces: []
  };
  var NumberUtils_instance = null;
  function NumberUtils_getInstance() {
    if (NumberUtils_instance === null) {
      new NumberUtils();
    }
    return NumberUtils_instance;
  }
  function toFlash($receiver) {
    return FlashByteArray_init($receiver);
  }
  function FlashByteArray() {
    this.content = MemorySyncStreamBase_init();
    this.data = new SyncStream(this.content);
    this.endian = Endian$BIG_ENDIAN_getInstance();
  }
  Object.defineProperty(FlashByteArray.prototype, 'position', {
    get: function () {
      return this.data.position.toInt();
    },
    set: function (value) {
      this.data.position = Kotlin.Long.fromInt(value);
    }
  });
  Object.defineProperty(FlashByteArray.prototype, 'length', {
    get: function () {
      return this.data.length.toInt();
    },
    set: function (value) {
      this.data.length = Kotlin.Long.fromInt(value);
    }
  });
  FlashByteArray.prototype.ensureIndex_kgn8zt$_0 = function (index) {
    var tmp$ = this.content.data;
    var a = this.content.data.size;
    var b = index + 1 | 0;
    tmp$.size = Math_0.max(a, b);
    return this;
  };
  FlashByteArray.prototype.get_za3lpa$ = function (index) {
    return this.ensureIndex_kgn8zt$_0(index).content.data.data[index] & 255;
  };
  FlashByteArray.prototype.set_vux9f0$ = function (index, value) {
    this.ensureIndex_kgn8zt$_0(index).content.data.data[index] = Kotlin.toByte(value);
    return value;
  };
  Object.defineProperty(FlashByteArray.prototype, 'little', {
    get: function () {
      return this.endian === Endian$LITTLE_ENDIAN_getInstance();
    }
  });
  FlashByteArray.prototype.readByte = function () {
    return readU8(this.data);
  };
  FlashByteArray.prototype.readShort = function () {
    return this.little ? readS16_le(this.data) : readS16_be(this.data);
  };
  FlashByteArray.prototype.readInt = function () {
    return this.little ? readS32_le(this.data) : readS32_be(this.data);
  };
  FlashByteArray.prototype.readLong = function () {
    return this.little ? readS64_le(this.data) : readS64_be(this.data);
  };
  FlashByteArray.prototype.readUnsignedByte = function () {
    return this.readByte() & 255;
  };
  FlashByteArray.prototype.readUnsignedShort = function () {
    return this.readShort() & 65535;
  };
  FlashByteArray.prototype.readUnsignedInt = function () {
    return this.readInt();
  };
  FlashByteArray.prototype.readFloat = function () {
    return reinterpretAsFloat(this.readInt());
  };
  FlashByteArray.prototype.readDouble = function () {
    return reinterpretAsDouble(this.readLong());
  };
  FlashByteArray.prototype.readUTFBytes_za3lpa$ = function (len) {
    var $receiver = this.content.data.toByteArray();
    var fromIndex = this.position;
    var toIndex = this.position + len | 0;
    var dd = $receiver.slice(fromIndex, toIndex);
    var $receiver_0 = toString_0(dd, lang.Charsets.UTF_8);
    this.position = this.position + len | 0;
    return $receiver_0;
  };
  FlashByteArray.prototype.writeByte_za3lpa$ = function (i) {
    write8(this.data, i);
  };
  FlashByteArray.prototype.writeShort_za3lpa$ = function (i) {
    this.little ? write16_le(this.data, i) : write16_be(this.data, i);
  };
  FlashByteArray.prototype.writeInt_za3lpa$ = function (i) {
    this.little ? write32_le(this.data, i) : write32_be(this.data, i);
  };
  FlashByteArray.prototype.writeLong_s8cxhz$ = function (i) {
    if (this.little)
      write64_le(this.data, i);
    else
      write64_be(this.data, i);
  };
  FlashByteArray.prototype.writeUnsignedByte_za3lpa$ = function (i) {
    this.writeByte_za3lpa$(i);
  };
  FlashByteArray.prototype.writeUnsignedShort_za3lpa$ = function (i) {
    this.writeShort_za3lpa$(i);
  };
  FlashByteArray.prototype.writeUnsignedInt_za3lpa$ = function (i) {
    this.writeInt_za3lpa$(i);
  };
  FlashByteArray.prototype.writeFloat_14dthe$ = function (v) {
    this.writeInt_za3lpa$(reinterpretAsInt(v));
  };
  FlashByteArray.prototype.writeDouble_14dthe$ = function (v) {
    this.writeLong_s8cxhz$(reinterpretAsLong(v));
  };
  FlashByteArray.prototype.writeUTF_61zpoe$ = function (value) {
    throw new NotImplementedError_init();
  };
  FlashByteArray.prototype.writeUTFBytes_3m52m6$ = function (str, position, length) {
    if (position === void 0)
      position = 0;
    if (length === void 0)
      length = -1;
    throw new Error_0('');
  };
  FlashByteArray.prototype.writeBytes_fqrh44$ = function (bytes) {
    writeBytes(this.data, bytes);
  };
  FlashByteArray.prototype.writeBytes_5zge5p$ = function (bytes, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = -1;
    var len = length >= 0 ? length : bytes.length;
    bytes.position = offset;
    writeBytes(this.data, readBytes(bytes.data, len));
  };
  FlashByteArray.prototype._uncompress_tzb6pj$_0 = function (data, method) {
    if (method === void 0)
      method = 'zlib';
    if (Kotlin.equals(method, 'zlib'))
      return compression.SyncCompression.inflate_fqrh44$(data);
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported compression method ' + method));
    }
  };
  FlashByteArray.prototype._compress_ty8flc$_0 = function (data, method) {
    if (method === void 0)
      method = 'zlib';
    if (Kotlin.equals(method, 'zlib'))
      return compression.SyncCompression.deflate_ir89t6$(data, 5);
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Unsupported compression method ' + method));
    }
  };
  FlashByteArray.prototype.replaceBytes_fqrh44$ = function (content) {
    this.data.position = Kotlin.Long.ZERO;
    this.data.length = Kotlin.Long.ZERO;
    writeBytes(this.data, content);
    this.position = 0;
  };
  FlashByteArray.prototype.uncompress_61zpoe$ = function (method) {
    if (method === void 0)
      method = 'zlib';
    this.replaceBytes_fqrh44$(this._uncompress_tzb6pj$_0(this.cloneToNewByteArray(), method));
  };
  FlashByteArray.prototype.compress_61zpoe$ = function (method) {
    if (method === void 0)
      method = 'zlib';
    this.replaceBytes_fqrh44$(this._compress_ty8flc$_0(this.cloneToNewByteArray(), method));
  };
  function FlashByteArray$uncompressInWorker$lambda(this$FlashByteArray_0, closure$method_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$FlashByteArray$uncompressInWorker$lambda(this$FlashByteArray_0, closure$method_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FlashByteArray$uncompressInWorker$lambda(this$FlashByteArray_0, closure$method_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$FlashByteArray = this$FlashByteArray_0;
    this.local$closure$method = closure$method_0;
  }
  Coroutine$FlashByteArray$uncompressInWorker$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FlashByteArray$uncompressInWorker$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FlashByteArray$uncompressInWorker$lambda.prototype.constructor = Coroutine$FlashByteArray$uncompressInWorker$lambda;
  Coroutine$FlashByteArray$uncompressInWorker$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$FlashByteArray._uncompress_tzb6pj$_0(this.local$this$FlashByteArray.cloneToNewByteArray(), this.local$closure$method);
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
  FlashByteArray.prototype.uncompressInWorker_61zpoe$ = function (method_0, continuation_0, suspended) {
    var instance = new Coroutine$uncompressInWorker_61zpoe$(this, method_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$uncompressInWorker_61zpoe$($this, method_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$method = method_0;
  }
  Coroutine$uncompressInWorker_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$uncompressInWorker_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$uncompressInWorker_61zpoe$.prototype.constructor = Coroutine$uncompressInWorker_61zpoe$;
  Coroutine$uncompressInWorker_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$method === void 0)
              this.local$method = 'zlib';
            this.state_0 = 2;
            this.result_0 = executeInWorker(FlashByteArray$uncompressInWorker$lambda(this.$this, this.local$method), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.replaceBytes_fqrh44$(this.result_0);
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
  function FlashByteArray$compressInWorker$lambda(this$FlashByteArray_0, closure$method_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$FlashByteArray$compressInWorker$lambda(this$FlashByteArray_0, closure$method_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$FlashByteArray$compressInWorker$lambda(this$FlashByteArray_0, closure$method_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$FlashByteArray = this$FlashByteArray_0;
    this.local$closure$method = closure$method_0;
  }
  Coroutine$FlashByteArray$compressInWorker$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$FlashByteArray$compressInWorker$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$FlashByteArray$compressInWorker$lambda.prototype.constructor = Coroutine$FlashByteArray$compressInWorker$lambda;
  Coroutine$FlashByteArray$compressInWorker$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return this.local$this$FlashByteArray._compress_ty8flc$_0(this.local$this$FlashByteArray.cloneToNewByteArray(), this.local$closure$method);
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
  FlashByteArray.prototype.compressInWorker_61zpoe$ = function (method_0, continuation_0, suspended) {
    var instance = new Coroutine$compressInWorker_61zpoe$(this, method_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$compressInWorker_61zpoe$($this, method_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$method = method_0;
  }
  Coroutine$compressInWorker_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$compressInWorker_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$compressInWorker_61zpoe$.prototype.constructor = Coroutine$compressInWorker_61zpoe$;
  Coroutine$compressInWorker_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$method === void 0)
              this.local$method = 'zlib';
            this.state_0 = 2;
            this.result_0 = executeInWorker(FlashByteArray$compressInWorker$lambda(this.$this, this.local$method), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.replaceBytes_fqrh44$(this.result_0);
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
  FlashByteArray.prototype.readBytes_za3lpa$ = function (len) {
    return readBytes(this.data, len);
  };
  FlashByteArray.prototype.readBytes_x0lvl9$ = function (bytes) {
    this.readBytes_5zge5p$(bytes, bytes.position, this.bytesAvailable);
  };
  FlashByteArray.prototype.readBytes_5zge5p$ = function (bytes, position, length) {
    if (length === void 0)
      length = -1;
    var len = length >= 0 ? length : this.bytesAvailable;
    bytes.position = position;
    writeBytes(bytes.data, readBytes(this.data, len));
    bytes.position = position;
  };
  FlashByteArray.prototype.readUTF = function () {
    throw new NotImplementedError_init();
  };
  Object.defineProperty(FlashByteArray.prototype, 'bytesAvailable', {
    get: function () {
      return this.length - this.position | 0;
    }
  });
  FlashByteArray.prototype.resetBitsPending = function () {
    return this;
  };
  FlashByteArray.prototype.readObject = function () {
    this.resetBitsPending();
    return AMF3_getInstance().read_39qel5$(this.data);
  };
  FlashByteArray.prototype.writeObject_s8jyv4$ = function (metaData) {
    throw new NotImplementedError_init();
  };
  FlashByteArray.prototype.cloneToNewFlashByteArray = function () {
    return toFlash(this.cloneToNewByteArray());
  };
  FlashByteArray.prototype.cloneToNewByteArray = function () {
    return this.content.data.toByteArray();
  };
  FlashByteArray.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FlashByteArray',
    interfaces: []
  };
  function FlashByteArray_init(data, $this) {
    $this = $this || Object.create(FlashByteArray.prototype);
    FlashByteArray.call($this);
    writeBytes($this.data, data);
    $this.length = $this.data.length.toInt();
    return $this;
  }
  function BitArray() {
    FlashByteArray.call(this);
    this.bitsPending = 0;
  }
  BitArray.prototype.readBits_vux9f0$ = function (_bits, _bitBuffer) {
    if (_bitBuffer === void 0)
      _bitBuffer = 0;
    var bits = _bits;
    var bitBuffer = _bitBuffer;
    if (bits === 0) {
      return bitBuffer;
    }
    var partial;
    var bitsConsumed;
    if (this.bitsPending > 0) {
      var byte = this.get_za3lpa$(this.position - 1 | 0) & 255 >>> 8 - this.bitsPending;
      var a = this.bitsPending;
      var b = bits;
      bitsConsumed = Math_0.min(a, b);
      this.bitsPending = this.bitsPending - bitsConsumed | 0;
      partial = byte >>> this.bitsPending;
    }
     else {
      var b_0 = bits;
      bitsConsumed = Math_0.min(8, b_0);
      this.bitsPending = 8 - bitsConsumed | 0;
      partial = this.readUnsignedByte() >>> this.bitsPending;
    }
    bits = bits - bitsConsumed | 0;
    bitBuffer = bitBuffer << bitsConsumed | partial;
    return bits > 0 ? this.readBits_vux9f0$(bits, bitBuffer) : bitBuffer;
  };
  BitArray.prototype.writeBits_vux9f0$ = function (_bits, _value) {
    var bits = _bits;
    var value = _value;
    if (bits === 0) {
      return;
    }
    value = value & (new Kotlin.Long(-1, 0)).shiftRightUnsigned(32 - bits | 0).toInt();
    var bitsConsumed;
    if (this.bitsPending > 0) {
      if (this.bitsPending > bits) {
        this.set_vux9f0$(this.position - 1 | 0, this.get_za3lpa$(this.position - 1 | 0) | value << this.bitsPending - bits);
        bitsConsumed = bits;
        this.bitsPending = this.bitsPending - bits | 0;
      }
       else if (this.bitsPending === bits) {
        this.set_vux9f0$(this.position - 1 | 0, this.get_za3lpa$(this.position - 1 | 0) | value);
        bitsConsumed = bits;
        this.bitsPending = 0;
      }
       else {
        this.set_vux9f0$(this.position - 1 | 0, (this.get_za3lpa$(this.position - 1 | 0) | value) >>> bits - this.bitsPending);
        bitsConsumed = this.bitsPending;
        this.bitsPending = 0;
      }
    }
     else {
      var b = bits;
      bitsConsumed = Math_0.min(8, b);
      this.bitsPending = 8 - bitsConsumed | 0;
      this.writeByte_za3lpa$(value >>> bits - bitsConsumed << this.bitsPending);
    }
    bits = bits - bitsConsumed | 0;
    if (bits > 0) {
      this.writeBits_vux9f0$(bits, value);
    }
  };
  BitArray.prototype.writeSingleBit_6taknv$ = function (value) {
    this.writeBits_vux9f0$(1, value ? 1 : 0);
  };
  BitArray.prototype.resetBitsPending = function () {
    this.bitsPending = 0;
    return this;
  };
  BitArray.prototype.calculateMaxBits_95b856$ = function (signed, values) {
    return this.calculateMaxBits_x2ttsu$(signed, toIntArray(values).slice());
  };
  BitArray.prototype.calculateMaxBits_x2ttsu$ = function (signed, values) {
    var tmp$, tmp$_0;
    var b = 0;
    var vmax = IntCompanionObject.MIN_VALUE;
    if (!signed) {
      for (tmp$ = 0; tmp$ !== values.length; ++tmp$) {
        var usvalue = values[tmp$];
        b = b | usvalue;
      }
    }
     else {
      for (tmp$_0 = 0; tmp$_0 !== values.length; ++tmp$_0) {
        var svalue = values[tmp$_0];
        if (svalue >= 0) {
          b = b | svalue;
        }
         else {
          b = b | ~svalue << 1;
        }
        if (vmax < svalue) {
          vmax = svalue;
        }
      }
    }
    var bits = 0;
    if (b > 0) {
      bits = toString(b, 2).length;
      if (signed && vmax > 0 && toString(vmax, 2).length >= bits) {
        bits = bits + 1 | 0;
      }
    }
    return bits;
  };
  BitArray.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'BitArray',
    interfaces: [FlashByteArray]
  };
  function Endian(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Endian_initFields() {
    Endian_initFields = function () {
    };
    Endian$LITTLE_ENDIAN_instance = new Endian('LITTLE_ENDIAN', 0);
    Endian$BIG_ENDIAN_instance = new Endian('BIG_ENDIAN', 1);
  }
  var Endian$LITTLE_ENDIAN_instance;
  function Endian$LITTLE_ENDIAN_getInstance() {
    Endian_initFields();
    return Endian$LITTLE_ENDIAN_instance;
  }
  var Endian$BIG_ENDIAN_instance;
  function Endian$BIG_ENDIAN_getInstance() {
    Endian_initFields();
    return Endian$BIG_ENDIAN_instance;
  }
  Endian.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Endian',
    interfaces: [Enum]
  };
  function Endian$values() {
    return [Endian$LITTLE_ENDIAN_getInstance(), Endian$BIG_ENDIAN_getInstance()];
  }
  Endian.values = Endian$values;
  function Endian$valueOf(name) {
    switch (name) {
      case 'LITTLE_ENDIAN':
        return Endian$LITTLE_ENDIAN_getInstance();
      case 'BIG_ENDIAN':
        return Endian$BIG_ENDIAN_getInstance();
      default:Kotlin.throwISE('No enum constant com.codeazur.as3swf.utils.Endian.' + name);
    }
  }
  Endian.valueOf_61zpoe$ = Endian$valueOf;
  function ABC() {
    this.methodsDesc = emptyList();
    this.instancesInfo = emptyList();
    this.classesInfo = emptyList();
    this.typesInfo = emptyList();
    this.scriptsInfo = emptyList();
    this.methodsBodies = emptyList();
    this.metadatas = emptyList();
    this.cpool = new AbcConstantPool();
  }
  function ABC$Namespace(kind, name) {
    ABC$Namespace$Companion_getInstance();
    this.kind = kind;
    this.name = name;
  }
  function ABC$Namespace$Companion() {
    ABC$Namespace$Companion_instance = this;
    this.NAMESPACE = 8;
    this.PACKAGE_NAMESPACE = 22;
    this.PACKAGE_INTERNAL_NAMESPACE = 23;
    this.PROTECTED_NAMESPACE = 24;
    this.EXPLICIT_NAMESPACE = 25;
    this.STATIC_PROTECTED_NAMESPACE = 26;
    this.PRIVATE_NAMESPACE = 5;
    this.EMPTY = new ABC$Namespace(0, '');
  }
  ABC$Namespace$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ABC$Namespace$Companion_instance = null;
  function ABC$Namespace$Companion_getInstance() {
    if (ABC$Namespace$Companion_instance === null) {
      new ABC$Namespace$Companion();
    }
    return ABC$Namespace$Companion_instance;
  }
  ABC$Namespace.prototype.toString = function () {
    return this.name;
  };
  ABC$Namespace.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Namespace',
    interfaces: []
  };
  ABC$Namespace.prototype.component1 = function () {
    return this.kind;
  };
  ABC$Namespace.prototype.component2 = function () {
    return this.name;
  };
  ABC$Namespace.prototype.copy_19mbxw$ = function (kind, name) {
    return new ABC$Namespace(kind === void 0 ? this.kind : kind, name === void 0 ? this.name : name);
  };
  ABC$Namespace.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.kind) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$Namespace.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.kind, other.kind) && Kotlin.equals(this.name, other.name)))));
  };
  function ABC$AbstractMultiname() {
  }
  ABC$AbstractMultiname.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'AbstractMultiname',
    interfaces: []
  };
  function ABC$EmptyMultiname() {
    ABC$EmptyMultiname_instance = this;
    this.simpleName_4ilnhq$_0 = '';
  }
  Object.defineProperty(ABC$EmptyMultiname.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_4ilnhq$_0;
    }
  });
  ABC$EmptyMultiname.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'EmptyMultiname',
    interfaces: [ABC$AbstractMultiname]
  };
  var ABC$EmptyMultiname_instance = null;
  function ABC$EmptyMultiname_getInstance() {
    if (ABC$EmptyMultiname_instance === null) {
      new ABC$EmptyMultiname();
    }
    return ABC$EmptyMultiname_instance;
  }
  function ABC$ABCQName(namespace, name) {
    this.namespace = namespace;
    this.name = name;
    this.simpleName_n4fes1$_0 = this.name;
  }
  ABC$ABCQName.prototype.toString = function () {
    return this.namespace + '.' + this.name;
  };
  Object.defineProperty(ABC$ABCQName.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_n4fes1$_0;
    }
  });
  ABC$ABCQName.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ABCQName',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$ABCQName.prototype.component1 = function () {
    return this.namespace;
  };
  ABC$ABCQName.prototype.component2 = function () {
    return this.name;
  };
  ABC$ABCQName.prototype.copy_tvk1vp$ = function (namespace, name) {
    return new ABC$ABCQName(namespace === void 0 ? this.namespace : namespace, name === void 0 ? this.name : name);
  };
  ABC$ABCQName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namespace) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$ABCQName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.namespace, other.namespace) && Kotlin.equals(this.name, other.name)))));
  };
  function ABC$QNameA(namespace, name) {
    this.namespace = namespace;
    this.name = name;
    this.simpleName_5fkb18$_0 = this.name;
  }
  Object.defineProperty(ABC$QNameA.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_5fkb18$_0;
    }
  });
  ABC$QNameA.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'QNameA',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$QNameA.prototype.component1 = function () {
    return this.namespace;
  };
  ABC$QNameA.prototype.component2 = function () {
    return this.name;
  };
  ABC$QNameA.prototype.copy_tvk1vp$ = function (namespace, name) {
    return new ABC$QNameA(namespace === void 0 ? this.namespace : namespace, name === void 0 ? this.name : name);
  };
  ABC$QNameA.prototype.toString = function () {
    return 'QNameA(namespace=' + Kotlin.toString(this.namespace) + (', name=' + Kotlin.toString(this.name)) + ')';
  };
  ABC$QNameA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namespace) | 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$QNameA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.namespace, other.namespace) && Kotlin.equals(this.name, other.name)))));
  };
  function ABC$RTQName(name) {
    this.name = name;
    this.simpleName_yvcnep$_0 = this.name;
  }
  Object.defineProperty(ABC$RTQName.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_yvcnep$_0;
    }
  });
  ABC$RTQName.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RTQName',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$RTQName.prototype.component1 = function () {
    return this.name;
  };
  ABC$RTQName.prototype.copy_61zpoe$ = function (name) {
    return new ABC$RTQName(name === void 0 ? this.name : name);
  };
  ABC$RTQName.prototype.toString = function () {
    return 'RTQName(name=' + Kotlin.toString(this.name) + ')';
  };
  ABC$RTQName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$RTQName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function ABC$RTQNameA(name) {
    this.name = name;
    this.simpleName_n9449q$_0 = this.name;
  }
  Object.defineProperty(ABC$RTQNameA.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_n9449q$_0;
    }
  });
  ABC$RTQNameA.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'RTQNameA',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$RTQNameA.prototype.component1 = function () {
    return this.name;
  };
  ABC$RTQNameA.prototype.copy_61zpoe$ = function (name) {
    return new ABC$RTQNameA(name === void 0 ? this.name : name);
  };
  ABC$RTQNameA.prototype.toString = function () {
    return 'RTQNameA(name=' + Kotlin.toString(this.name) + ')';
  };
  ABC$RTQNameA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$RTQNameA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  function ABC$RTQNameL() {
    ABC$RTQNameL_instance = this;
    this.simpleName_u4ez13$_0 = '';
  }
  Object.defineProperty(ABC$RTQNameL.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_u4ez13$_0;
    }
  });
  ABC$RTQNameL.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RTQNameL',
    interfaces: [ABC$AbstractMultiname]
  };
  var ABC$RTQNameL_instance = null;
  function ABC$RTQNameL_getInstance() {
    if (ABC$RTQNameL_instance === null) {
      new ABC$RTQNameL();
    }
    return ABC$RTQNameL_instance;
  }
  function ABC$RTQNameLA() {
    ABC$RTQNameLA_instance = this;
    this.simpleName_2oio0a$_0 = '';
  }
  Object.defineProperty(ABC$RTQNameLA.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_2oio0a$_0;
    }
  });
  ABC$RTQNameLA.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'RTQNameLA',
    interfaces: [ABC$AbstractMultiname]
  };
  var ABC$RTQNameLA_instance = null;
  function ABC$RTQNameLA_getInstance() {
    if (ABC$RTQNameLA_instance === null) {
      new ABC$RTQNameLA();
    }
    return ABC$RTQNameLA_instance;
  }
  function ABC$Multiname(name, namespaceSet) {
    this.name = name;
    this.namespaceSet = namespaceSet;
    this.simpleName_70q59n$_0 = this.name;
  }
  Object.defineProperty(ABC$Multiname.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_70q59n$_0;
    }
  });
  ABC$Multiname.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Multiname',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$Multiname.prototype.component1 = function () {
    return this.name;
  };
  ABC$Multiname.prototype.component2 = function () {
    return this.namespaceSet;
  };
  ABC$Multiname.prototype.copy_3vh3pi$ = function (name, namespaceSet) {
    return new ABC$Multiname(name === void 0 ? this.name : name, namespaceSet === void 0 ? this.namespaceSet : namespaceSet);
  };
  ABC$Multiname.prototype.toString = function () {
    return 'Multiname(name=' + Kotlin.toString(this.name) + (', namespaceSet=' + Kotlin.toString(this.namespaceSet)) + ')';
  };
  ABC$Multiname.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.namespaceSet) | 0;
    return result;
  };
  ABC$Multiname.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.namespaceSet, other.namespaceSet)))));
  };
  function ABC$MultinameA(name, namespaceSet) {
    this.name = name;
    this.namespaceSet = namespaceSet;
    this.simpleName_c935mc$_0 = this.name;
  }
  Object.defineProperty(ABC$MultinameA.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_c935mc$_0;
    }
  });
  ABC$MultinameA.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MultinameA',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$MultinameA.prototype.component1 = function () {
    return this.name;
  };
  ABC$MultinameA.prototype.component2 = function () {
    return this.namespaceSet;
  };
  ABC$MultinameA.prototype.copy_3vh3pi$ = function (name, namespaceSet) {
    return new ABC$MultinameA(name === void 0 ? this.name : name, namespaceSet === void 0 ? this.namespaceSet : namespaceSet);
  };
  ABC$MultinameA.prototype.toString = function () {
    return 'MultinameA(name=' + Kotlin.toString(this.name) + (', namespaceSet=' + Kotlin.toString(this.namespaceSet)) + ')';
  };
  ABC$MultinameA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.namespaceSet) | 0;
    return result;
  };
  ABC$MultinameA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.namespaceSet, other.namespaceSet)))));
  };
  function ABC$MultinameL(namespaceSet) {
    this.namespaceSet = namespaceSet;
    this.simpleName_two4an$_0 = '';
  }
  Object.defineProperty(ABC$MultinameL.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_two4an$_0;
    }
  });
  ABC$MultinameL.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MultinameL',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$MultinameL.prototype.component1 = function () {
    return this.namespaceSet;
  };
  ABC$MultinameL.prototype.copy_xtc7c8$ = function (namespaceSet) {
    return new ABC$MultinameL(namespaceSet === void 0 ? this.namespaceSet : namespaceSet);
  };
  ABC$MultinameL.prototype.toString = function () {
    return 'MultinameL(namespaceSet=' + Kotlin.toString(this.namespaceSet) + ')';
  };
  ABC$MultinameL.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namespaceSet) | 0;
    return result;
  };
  ABC$MultinameL.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.namespaceSet, other.namespaceSet))));
  };
  function ABC$MultinameLA(namespaceSet) {
    this.namespaceSet = namespaceSet;
    this.simpleName_bg7rq8$_0 = '';
  }
  Object.defineProperty(ABC$MultinameLA.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_bg7rq8$_0;
    }
  });
  ABC$MultinameLA.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MultinameLA',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$MultinameLA.prototype.component1 = function () {
    return this.namespaceSet;
  };
  ABC$MultinameLA.prototype.copy_xtc7c8$ = function (namespaceSet) {
    return new ABC$MultinameLA(namespaceSet === void 0 ? this.namespaceSet : namespaceSet);
  };
  ABC$MultinameLA.prototype.toString = function () {
    return 'MultinameLA(namespaceSet=' + Kotlin.toString(this.namespaceSet) + ')';
  };
  ABC$MultinameLA.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.namespaceSet) | 0;
    return result;
  };
  ABC$MultinameLA.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.namespaceSet, other.namespaceSet))));
  };
  function ABC$TypeName(qname, parameters) {
    this.qname = qname;
    this.parameters = parameters;
    this.simpleName_ve1k6c$_0 = 'TypeName(' + this.qname + ')';
  }
  Object.defineProperty(ABC$TypeName.prototype, 'simpleName', {
    get: function () {
      return this.simpleName_ve1k6c$_0;
    }
  });
  ABC$TypeName.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TypeName',
    interfaces: [ABC$AbstractMultiname]
  };
  ABC$TypeName.prototype.component1 = function () {
    return this.qname;
  };
  ABC$TypeName.prototype.component2 = function () {
    return this.parameters;
  };
  ABC$TypeName.prototype.copy_oku237$ = function (qname, parameters) {
    return new ABC$TypeName(qname === void 0 ? this.qname : qname, parameters === void 0 ? this.parameters : parameters);
  };
  ABC$TypeName.prototype.toString = function () {
    return 'TypeName(qname=' + Kotlin.toString(this.qname) + (', parameters=' + Kotlin.toString(this.parameters)) + ')';
  };
  ABC$TypeName.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.qname) | 0;
    result = result * 31 + Kotlin.hashCode(this.parameters) | 0;
    return result;
  };
  ABC$TypeName.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.qname, other.qname) && Kotlin.equals(this.parameters, other.parameters)))));
  };
  Object.defineProperty(ABC.prototype, 'ints', {
    get: function () {
      return this.cpool.ints;
    }
  });
  Object.defineProperty(ABC.prototype, 'uints', {
    get: function () {
      return this.cpool.uints;
    }
  });
  Object.defineProperty(ABC.prototype, 'doubles', {
    get: function () {
      return this.cpool.doubles;
    }
  });
  Object.defineProperty(ABC.prototype, 'strings', {
    get: function () {
      return this.cpool.strings;
    }
  });
  Object.defineProperty(ABC.prototype, 'namespaces', {
    get: function () {
      return this.cpool.namespaces;
    }
  });
  Object.defineProperty(ABC.prototype, 'namespaceSets', {
    get: function () {
      return this.cpool.namespaceSets;
    }
  });
  Object.defineProperty(ABC.prototype, 'multinames', {
    get: function () {
      return this.cpool.multinames;
    }
  });
  function ABC$Metadata(name, values) {
    this.name = name;
    this.values = values;
  }
  ABC$Metadata.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Metadata',
    interfaces: []
  };
  ABC$Metadata.prototype.component1 = function () {
    return this.name;
  };
  ABC$Metadata.prototype.component2 = function () {
    return this.values;
  };
  ABC$Metadata.prototype.copy_mvjluj$ = function (name, values) {
    return new ABC$Metadata(name === void 0 ? this.name : name, values === void 0 ? this.values : values);
  };
  ABC$Metadata.prototype.toString = function () {
    return 'Metadata(name=' + Kotlin.toString(this.name) + (', values=' + Kotlin.toString(this.values)) + ')';
  };
  ABC$Metadata.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.values) | 0;
    return result;
  };
  ABC$Metadata.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.values, other.values)))));
  };
  ABC.prototype.readFile_39qel5$ = function (s) {
    var minor = readU16_le(s);
    var major = readU16_le(s);
    this.cpool.readConstantPool_39qel5$(s);
    var $receiver = until(0, readU30(s));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.readMethod_39qel5$(s));
    }
    this.methodsDesc = destination;
    var $receiver_0 = until(0, readU30(s));
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_0;
    tmp$_0 = $receiver_0.iterator();
    while (tmp$_0.hasNext()) {
      var item_0 = tmp$_0.next();
      var tmp$_1 = destination_0.add_11rb$;
      var name = this.strings.get_za3lpa$(readU30(s));
      var $receiver_1 = until(0, readU30(s));
      var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var item_1 = tmp$_2.next();
        destination_1.add_11rb$(to(this.strings.get_za3lpa$(readU30(s)), this.strings.get_za3lpa$(readU30(s))));
      }
      var items = destination_1;
      tmp$_1.call(destination_0, new ABC$Metadata(name, toMap(items)));
    }
    this.metadatas = destination_0;
    var typeCount = readU30(s);
    var $receiver_2 = until(0, typeCount);
    var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_3;
    tmp$_3 = $receiver_2.iterator();
    while (tmp$_3.hasNext()) {
      var item_2 = tmp$_3.next();
      destination_2.add_11rb$(this.readInstance_39qel5$(s));
    }
    this.instancesInfo = destination_2;
    var $receiver_3 = until(0, typeCount);
    var destination_3 = ArrayList_init(collectionSizeOrDefault($receiver_3, 10));
    var tmp$_4;
    tmp$_4 = $receiver_3.iterator();
    while (tmp$_4.hasNext()) {
      var item_3 = tmp$_4.next();
      destination_3.add_11rb$(this.readClass_39qel5$(s));
    }
    this.classesInfo = destination_3;
    var $receiver_4 = zip(this.instancesInfo, this.classesInfo);
    var destination_4 = ArrayList_init(collectionSizeOrDefault($receiver_4, 10));
    var tmp$_5;
    tmp$_5 = $receiver_4.iterator();
    while (tmp$_5.hasNext()) {
      var item_4 = tmp$_5.next();
      destination_4.add_11rb$(new ABC$TypeInfo(this, item_4.first, item_4.second));
    }
    this.typesInfo = destination_4;
    var $receiver_5 = until(0, readU30(s));
    var destination_5 = ArrayList_init(collectionSizeOrDefault($receiver_5, 10));
    var tmp$_6;
    tmp$_6 = $receiver_5.iterator();
    while (tmp$_6.hasNext()) {
      var item_5 = tmp$_6.next();
      destination_5.add_11rb$(new ABC$ScriptInfo(this.methodsDesc.get_za3lpa$(readU30(s)), this.readTraits_39qel5$(s)));
    }
    this.scriptsInfo = destination_5;
    var $receiver_6 = until(0, readU30(s));
    var destination_6 = ArrayList_init(collectionSizeOrDefault($receiver_6, 10));
    var tmp$_7;
    tmp$_7 = $receiver_6.iterator();
    while (tmp$_7.hasNext()) {
      var item_6 = tmp$_7.next();
      var tmp$_8 = destination_6.add_11rb$;
      var method = this.methodsDesc.get_za3lpa$(readU30(s));
      var maxStack = readU30(s);
      var localCount = readU30(s);
      var initScopeDepth = readU30(s);
      var maxScopeDepth = readU30(s);
      var opcodes = readBytes(s, readU30(s));
      var $receiver_7 = until(0, readU30(s));
      var destination_7 = ArrayList_init(collectionSizeOrDefault($receiver_7, 10));
      var tmp$_9;
      tmp$_9 = $receiver_7.iterator();
      while (tmp$_9.hasNext()) {
        var item_7 = tmp$_9.next();
        destination_7.add_11rb$(new ABC$ExceptionInfo(readU30(s), readU30(s), readU30(s), this.multinames.get_za3lpa$(readU30(s)), this.multinames.get_za3lpa$(readU30(s))));
      }
      var exceptions = destination_7;
      var traits = this.readTraits_39qel5$(s);
      tmp$_8.call(destination_6, new ABC$MethodBody(method, maxStack, localCount, initScopeDepth, maxScopeDepth, opcodes, this.cpool, exceptions, traits));
    }
    this.methodsBodies = destination_6;
    return this;
  };
  function ABC$MethodBody(method, maxStack, localCount, initScopeDepth, maxScopeDepth, opcodes, cpool, exceptions, traits) {
    this.method = method;
    this.maxStack = maxStack;
    this.localCount = localCount;
    this.initScopeDepth = initScopeDepth;
    this.maxScopeDepth = maxScopeDepth;
    this.opcodes = opcodes;
    this.cpool = cpool;
    this.exceptions = exceptions;
    this.traits = traits;
    this.ops_nj0lpx$_0 = lazy(ABC$MethodBody$ops$lambda(this));
    this.method.body = this;
  }
  Object.defineProperty(ABC$MethodBody.prototype, 'ops', {
    get: function () {
      var $receiver = this.ops_nj0lpx$_0;
      new Kotlin.PropertyMetadata('ops');
      return $receiver.value;
    }
  });
  function ABC$MethodBody$ops$lambda$lambda$lambda(this$) {
    return function () {
      return !get_eof(this$);
    };
  }
  function ABC$MethodBody$ops$lambda$lambda$lambda_0(this$MethodBody, this$) {
    return function (it) {
      return AbcOperation$Companion_getInstance().read_z48iox$(this$MethodBody.cpool, this$);
    };
  }
  function ABC$MethodBody$ops$lambda(this$MethodBody) {
    return function () {
      var $receiver = openSync(this$MethodBody.opcodes);
      return mapWhile(ABC$MethodBody$ops$lambda$lambda$lambda($receiver), ABC$MethodBody$ops$lambda$lambda$lambda_0(this$MethodBody, $receiver));
    };
  }
  ABC$MethodBody.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MethodBody',
    interfaces: []
  };
  function ABC$ExceptionInfo(from, to, target, type, variableName) {
    this.from = from;
    this.to = to;
    this.target = target;
    this.type = type;
    this.variableName = variableName;
  }
  ABC$ExceptionInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ExceptionInfo',
    interfaces: []
  };
  ABC$ExceptionInfo.prototype.component1 = function () {
    return this.from;
  };
  ABC$ExceptionInfo.prototype.component2 = function () {
    return this.to;
  };
  ABC$ExceptionInfo.prototype.component3 = function () {
    return this.target;
  };
  ABC$ExceptionInfo.prototype.component4 = function () {
    return this.type;
  };
  ABC$ExceptionInfo.prototype.component5 = function () {
    return this.variableName;
  };
  ABC$ExceptionInfo.prototype.copy_gxqsym$ = function (from, to, target, type, variableName) {
    return new ABC$ExceptionInfo(from === void 0 ? this.from : from, to === void 0 ? this.to : to, target === void 0 ? this.target : target, type === void 0 ? this.type : type, variableName === void 0 ? this.variableName : variableName);
  };
  ABC$ExceptionInfo.prototype.toString = function () {
    return 'ExceptionInfo(from=' + Kotlin.toString(this.from) + (', to=' + Kotlin.toString(this.to)) + (', target=' + Kotlin.toString(this.target)) + (', type=' + Kotlin.toString(this.type)) + (', variableName=' + Kotlin.toString(this.variableName)) + ')';
  };
  ABC$ExceptionInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.from) | 0;
    result = result * 31 + Kotlin.hashCode(this.to) | 0;
    result = result * 31 + Kotlin.hashCode(this.target) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.variableName) | 0;
    return result;
  };
  ABC$ExceptionInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.from, other.from) && Kotlin.equals(this.to, other.to) && Kotlin.equals(this.target, other.target) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.variableName, other.variableName)))));
  };
  function ABC$Trait() {
  }
  ABC$Trait.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'Trait',
    interfaces: []
  };
  function ABC$TraitSlot(name, slotIndex, type, value) {
    this.name_hfq40r$_0 = name;
    this.slotIndex = slotIndex;
    this.type = type;
    this.value = value;
  }
  Object.defineProperty(ABC$TraitSlot.prototype, 'name', {
    get: function () {
      return this.name_hfq40r$_0;
    }
  });
  ABC$TraitSlot.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TraitSlot',
    interfaces: [ABC$Trait]
  };
  ABC$TraitSlot.prototype.component1 = function () {
    return this.name;
  };
  ABC$TraitSlot.prototype.component2 = function () {
    return this.slotIndex;
  };
  ABC$TraitSlot.prototype.component3 = function () {
    return this.type;
  };
  ABC$TraitSlot.prototype.component4 = function () {
    return this.value;
  };
  ABC$TraitSlot.prototype.copy_gdmo2i$ = function (name, slotIndex, type, value) {
    return new ABC$TraitSlot(name === void 0 ? this.name : name, slotIndex === void 0 ? this.slotIndex : slotIndex, type === void 0 ? this.type : type, value === void 0 ? this.value : value);
  };
  ABC$TraitSlot.prototype.toString = function () {
    return 'TraitSlot(name=' + Kotlin.toString(this.name) + (', slotIndex=' + Kotlin.toString(this.slotIndex)) + (', type=' + Kotlin.toString(this.type)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  ABC$TraitSlot.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.slotIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  ABC$TraitSlot.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.slotIndex, other.slotIndex) && Kotlin.equals(this.type, other.type) && Kotlin.equals(this.value, other.value)))));
  };
  function ABC$TraitMethod(name, dispIndex, methodIndex) {
    this.name_q7zxdk$_0 = name;
    this.dispIndex = dispIndex;
    this.methodIndex = methodIndex;
  }
  Object.defineProperty(ABC$TraitMethod.prototype, 'name', {
    get: function () {
      return this.name_q7zxdk$_0;
    }
  });
  ABC$TraitMethod.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TraitMethod',
    interfaces: [ABC$Trait]
  };
  ABC$TraitMethod.prototype.component1 = function () {
    return this.name;
  };
  ABC$TraitMethod.prototype.component2 = function () {
    return this.dispIndex;
  };
  ABC$TraitMethod.prototype.component3 = function () {
    return this.methodIndex;
  };
  ABC$TraitMethod.prototype.copy_dqoore$ = function (name, dispIndex, methodIndex) {
    return new ABC$TraitMethod(name === void 0 ? this.name : name, dispIndex === void 0 ? this.dispIndex : dispIndex, methodIndex === void 0 ? this.methodIndex : methodIndex);
  };
  ABC$TraitMethod.prototype.toString = function () {
    return 'TraitMethod(name=' + Kotlin.toString(this.name) + (', dispIndex=' + Kotlin.toString(this.dispIndex)) + (', methodIndex=' + Kotlin.toString(this.methodIndex)) + ')';
  };
  ABC$TraitMethod.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.dispIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.methodIndex) | 0;
    return result;
  };
  ABC$TraitMethod.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.dispIndex, other.dispIndex) && Kotlin.equals(this.methodIndex, other.methodIndex)))));
  };
  function ABC$TraitClass(name, slotIndex, classIndex) {
    this.name_splhhv$_0 = name;
    this.slotIndex = slotIndex;
    this.classIndex = classIndex;
  }
  Object.defineProperty(ABC$TraitClass.prototype, 'name', {
    get: function () {
      return this.name_splhhv$_0;
    }
  });
  ABC$TraitClass.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TraitClass',
    interfaces: [ABC$Trait]
  };
  ABC$TraitClass.prototype.component1 = function () {
    return this.name;
  };
  ABC$TraitClass.prototype.component2 = function () {
    return this.slotIndex;
  };
  ABC$TraitClass.prototype.component3 = function () {
    return this.classIndex;
  };
  ABC$TraitClass.prototype.copy_dqoore$ = function (name, slotIndex, classIndex) {
    return new ABC$TraitClass(name === void 0 ? this.name : name, slotIndex === void 0 ? this.slotIndex : slotIndex, classIndex === void 0 ? this.classIndex : classIndex);
  };
  ABC$TraitClass.prototype.toString = function () {
    return 'TraitClass(name=' + Kotlin.toString(this.name) + (', slotIndex=' + Kotlin.toString(this.slotIndex)) + (', classIndex=' + Kotlin.toString(this.classIndex)) + ')';
  };
  ABC$TraitClass.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.slotIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.classIndex) | 0;
    return result;
  };
  ABC$TraitClass.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.slotIndex, other.slotIndex) && Kotlin.equals(this.classIndex, other.classIndex)))));
  };
  function ABC$TraitFunction(name, slotIndex, functionIndex) {
    this.name_u0k875$_0 = name;
    this.slotIndex = slotIndex;
    this.functionIndex = functionIndex;
  }
  Object.defineProperty(ABC$TraitFunction.prototype, 'name', {
    get: function () {
      return this.name_u0k875$_0;
    }
  });
  ABC$TraitFunction.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TraitFunction',
    interfaces: [ABC$Trait]
  };
  ABC$TraitFunction.prototype.component1 = function () {
    return this.name;
  };
  ABC$TraitFunction.prototype.component2 = function () {
    return this.slotIndex;
  };
  ABC$TraitFunction.prototype.component3 = function () {
    return this.functionIndex;
  };
  ABC$TraitFunction.prototype.copy_dqoore$ = function (name, slotIndex, functionIndex) {
    return new ABC$TraitFunction(name === void 0 ? this.name : name, slotIndex === void 0 ? this.slotIndex : slotIndex, functionIndex === void 0 ? this.functionIndex : functionIndex);
  };
  ABC$TraitFunction.prototype.toString = function () {
    return 'TraitFunction(name=' + Kotlin.toString(this.name) + (', slotIndex=' + Kotlin.toString(this.slotIndex)) + (', functionIndex=' + Kotlin.toString(this.functionIndex)) + ')';
  };
  ABC$TraitFunction.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.slotIndex) | 0;
    result = result * 31 + Kotlin.hashCode(this.functionIndex) | 0;
    return result;
  };
  ABC$TraitFunction.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.slotIndex, other.slotIndex) && Kotlin.equals(this.functionIndex, other.functionIndex)))));
  };
  function ABC$InstanceInfo(name, base, interfaces, instanceInitializer, traits) {
    this.name = name;
    this.base = base;
    this.interfaces = interfaces;
    this.instanceInitializer = instanceInitializer;
    this.traits = traits;
  }
  ABC$InstanceInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'InstanceInfo',
    interfaces: []
  };
  ABC$InstanceInfo.prototype.component1 = function () {
    return this.name;
  };
  ABC$InstanceInfo.prototype.component2 = function () {
    return this.base;
  };
  ABC$InstanceInfo.prototype.component3 = function () {
    return this.interfaces;
  };
  ABC$InstanceInfo.prototype.component4 = function () {
    return this.instanceInitializer;
  };
  ABC$InstanceInfo.prototype.component5 = function () {
    return this.traits;
  };
  ABC$InstanceInfo.prototype.copy_dymp2u$ = function (name, base, interfaces, instanceInitializer, traits) {
    return new ABC$InstanceInfo(name === void 0 ? this.name : name, base === void 0 ? this.base : base, interfaces === void 0 ? this.interfaces : interfaces, instanceInitializer === void 0 ? this.instanceInitializer : instanceInitializer, traits === void 0 ? this.traits : traits);
  };
  ABC$InstanceInfo.prototype.toString = function () {
    return 'InstanceInfo(name=' + Kotlin.toString(this.name) + (', base=' + Kotlin.toString(this.base)) + (', interfaces=' + Kotlin.toString(this.interfaces)) + (', instanceInitializer=' + Kotlin.toString(this.instanceInitializer)) + (', traits=' + Kotlin.toString(this.traits)) + ')';
  };
  ABC$InstanceInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.base) | 0;
    result = result * 31 + Kotlin.hashCode(this.interfaces) | 0;
    result = result * 31 + Kotlin.hashCode(this.instanceInitializer) | 0;
    result = result * 31 + Kotlin.hashCode(this.traits) | 0;
    return result;
  };
  ABC$InstanceInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.base, other.base) && Kotlin.equals(this.interfaces, other.interfaces) && Kotlin.equals(this.instanceInitializer, other.instanceInitializer) && Kotlin.equals(this.traits, other.traits)))));
  };
  function ABC$ClassInfo(initializer, traits) {
    this.initializer = initializer;
    this.traits = traits;
  }
  ABC$ClassInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ClassInfo',
    interfaces: []
  };
  ABC$ClassInfo.prototype.component1 = function () {
    return this.initializer;
  };
  ABC$ClassInfo.prototype.component2 = function () {
    return this.traits;
  };
  ABC$ClassInfo.prototype.copy_yk5p6f$ = function (initializer, traits) {
    return new ABC$ClassInfo(initializer === void 0 ? this.initializer : initializer, traits === void 0 ? this.traits : traits);
  };
  ABC$ClassInfo.prototype.toString = function () {
    return 'ClassInfo(initializer=' + Kotlin.toString(this.initializer) + (', traits=' + Kotlin.toString(this.traits)) + ')';
  };
  ABC$ClassInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.initializer) | 0;
    result = result * 31 + Kotlin.hashCode(this.traits) | 0;
    return result;
  };
  ABC$ClassInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.initializer, other.initializer) && Kotlin.equals(this.traits, other.traits)))));
  };
  function ABC$TypeInfo(abc, instanceInfo, classInfo) {
    this.abc = abc;
    this.instanceInfo = instanceInfo;
    this.classInfo = classInfo;
  }
  Object.defineProperty(ABC$TypeInfo.prototype, 'name', {
    get: function () {
      return this.instanceInfo.name;
    }
  });
  Object.defineProperty(ABC$TypeInfo.prototype, 'instanceTraits', {
    get: function () {
      return this.instanceInfo.traits;
    }
  });
  Object.defineProperty(ABC$TypeInfo.prototype, 'classTraits', {
    get: function () {
      return this.classInfo.traits;
    }
  });
  ABC$TypeInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'TypeInfo',
    interfaces: []
  };
  function ABC$ScriptInfo(initializer, traits) {
    this.initializer = initializer;
    this.traits = traits;
  }
  ABC$ScriptInfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ScriptInfo',
    interfaces: []
  };
  ABC$ScriptInfo.prototype.component1 = function () {
    return this.initializer;
  };
  ABC$ScriptInfo.prototype.component2 = function () {
    return this.traits;
  };
  ABC$ScriptInfo.prototype.copy_yk5p6f$ = function (initializer, traits) {
    return new ABC$ScriptInfo(initializer === void 0 ? this.initializer : initializer, traits === void 0 ? this.traits : traits);
  };
  ABC$ScriptInfo.prototype.toString = function () {
    return 'ScriptInfo(initializer=' + Kotlin.toString(this.initializer) + (', traits=' + Kotlin.toString(this.traits)) + ')';
  };
  ABC$ScriptInfo.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.initializer) | 0;
    result = result * 31 + Kotlin.hashCode(this.traits) | 0;
    return result;
  };
  ABC$ScriptInfo.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.initializer, other.initializer) && Kotlin.equals(this.traits, other.traits)))));
  };
  ABC.prototype.readClass_39qel5$ = function (s) {
    return new ABC$ClassInfo(this.methodsDesc.get_za3lpa$(readU30(s)), this.readTraits_39qel5$(s));
  };
  ABC.prototype.readInstance_39qel5$ = function (s) {
    var tmp$;
    var name = Kotlin.isType(tmp$ = this.multinames.get_za3lpa$(readU30(s)), ABC$ABCQName) ? tmp$ : Kotlin.throwCCE();
    var base = this.multinames.get_za3lpa$(readU30(s));
    var flags = readU8(s);
    var isSealed = (flags & 1) !== 0;
    var isFinal = (flags & 2) !== 0;
    var isInterface = (flags & 4) !== 0;
    if ((flags & 8) !== 0) {
      var protectedNamespace = this.namespaces.get_za3lpa$(readU30(s));
    }
    var $receiver = until(0, readU30(s));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(this.multinames.get_za3lpa$(readU30(s)));
    }
    var interfaces = destination;
    var instanceInitializerIndex = readU30(s);
    var traits = this.readTraits_39qel5$(s);
    return new ABC$InstanceInfo(name, base, interfaces, this.methodsDesc.get_za3lpa$(instanceInitializerIndex), traits);
  };
  ABC.prototype.getConstantValue_vux9f0$ = function (type, index) {
    if (type === 3)
      return this.ints.get_za3lpa$(index);
    else if (type === 4)
      return this.uints.get_za3lpa$(index);
    else if (type === 6)
      return this.doubles.get_za3lpa$(index);
    else if (type === 1)
      return this.strings.get_za3lpa$(index);
    else if (type === 11)
      return true;
    else if (type === 10)
      return false;
    else if (type === 12 || type === 0)
      return null;
    else if (type === 8 || type === 22 || type === 23 || type === 24 || type === 25 || type === 26 || type === 5)
      return this.namespaces.get_za3lpa$(index);
    else
      return invalidOp('Unknown parameter type.');
  };
  ABC.prototype.readTraits_39qel5$ = function (s) {
    var $receiver = until(0, readU30(s));
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1, tmp$_2;
      var name = this.multinames.get_za3lpa$(readU30(s));
      var kind = readU8(s);
      var info = kind >>> 4;
      var hasMetadata = (info & 4) !== 0;
      var traitKind = kind & 15;
      if (traitKind === 0 || traitKind === 6) {
        var slotIndex = readU30(s);
        var type = this.multinames.get_za3lpa$(readU30(s));
        var valueIndex = readU30(s);
        if (valueIndex !== 0) {
          var valueKind = readU8(s);
          tmp$_1 = this.getConstantValue_vux9f0$(valueKind, valueIndex);
        }
         else {
          tmp$_1 = null;
        }
        var value = tmp$_1;
        tmp$_2 = new ABC$TraitSlot(name, slotIndex, type, value);
      }
       else if (traitKind === 1 || traitKind === 2 || traitKind === 3) {
        var dispIndex = readU30(s);
        var methodIndex = readU30(s);
        var isFinal = (info & 1) !== 0;
        var isOverride = (info & 2) !== 0;
        tmp$_2 = new ABC$TraitMethod(name, dispIndex, methodIndex);
      }
       else if (traitKind === 4)
        tmp$_2 = new ABC$TraitClass(name, readU30(s), readU30(s));
      else if (traitKind === 5)
        tmp$_2 = new ABC$TraitFunction(name, readU30(s), readU30(s));
      else
        tmp$_2 = invalidOp('Unknown trait kind ' + traitKind);
      var trait = tmp$_2;
      if (hasMetadata) {
        var $receiver_0 = until(0, readU30(s));
        var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
        var tmp$_3;
        tmp$_3 = $receiver_0.iterator();
        while (tmp$_3.hasNext()) {
          var item_0 = tmp$_3.next();
          destination_0.add_11rb$(this.metadatas.get_za3lpa$(readU30(s)));
        }
        var metadatas = destination_0;
      }
      tmp$_0.call(destination, trait);
    }
    return destination;
  };
  function ABC$MethodDesc(name) {
    this.name = name;
    this.body = null;
  }
  ABC$MethodDesc.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MethodDesc',
    interfaces: []
  };
  ABC$MethodDesc.prototype.component1 = function () {
    return this.name;
  };
  ABC$MethodDesc.prototype.copy_61zpoe$ = function (name) {
    return new ABC$MethodDesc(name === void 0 ? this.name : name);
  };
  ABC$MethodDesc.prototype.toString = function () {
    return 'MethodDesc(name=' + Kotlin.toString(this.name) + ')';
  };
  ABC$MethodDesc.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    return result;
  };
  ABC$MethodDesc.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.name, other.name))));
  };
  ABC.prototype.readMethod_39qel5$ = function (s) {
    var parameterCount = readU30(s);
    var returnType = this.multinames.get_za3lpa$(readU30(s));
    var $receiver = until(0, parameterCount);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(this.multinames.get_za3lpa$(readU30(s)));
    }
    var parameters = destination;
    var name = this.strings.get_za3lpa$(readU30(s));
    var flags = readU8(s);
    var needsArguments = (flags & 1) !== 0;
    var needsActivation = (flags & 2) !== 0;
    var needsRest = (flags & 4) !== 0;
    var hasOptionalParameters = (flags & 8) !== 0;
    var setsDXNS = (flags & 64) !== 0;
    var hasParameterNames = (flags & 128) !== 0;
    if (hasOptionalParameters) {
      var optionalCount = readU8(s);
      var $receiver_0 = until(0, optionalCount);
      var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item_0 = tmp$_0.next();
        var tmp$_1 = destination_0.add_11rb$;
        var valueIndex = readU30(s);
        var optionalType = readU8(s);
        var value = this.getConstantValue_vux9f0$(optionalType, valueIndex);
        tmp$_1.call(destination_0, Unit);
      }
      var optionalValues = destination_0;
    }
    if (hasParameterNames) {
      var $receiver_1 = until(0, parameterCount);
      var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
      var tmp$_2;
      tmp$_2 = $receiver_1.iterator();
      while (tmp$_2.hasNext()) {
        var item_1 = tmp$_2.next();
        destination_1.add_11rb$(this.strings.get_za3lpa$(readU30(s)));
      }
      var parameterNames = destination_1;
    }
    return new ABC$MethodDesc(name);
  };
  ABC.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ABC',
    interfaces: []
  };
  function readU30($receiver) {
    var result = readU8($receiver);
    if ((result & 128) === 0)
      return result;
    result = result & 127 | readU8($receiver) << 7;
    if ((result & 16384) === 0)
      return result;
    result = result & 16383 | readU8($receiver) << 14;
    if ((result & 2097152) === 0)
      return result;
    result = result & 2097151 | readU8($receiver) << 21;
    if ((result & 268435456) === 0)
      return result;
    result = result & 268435455 | readU8($receiver) << 28;
    return result;
  }
  function AbcConstantPool() {
    this.ints = emptyList();
    this.uints = emptyList();
    this.doubles = emptyList();
    this.strings = emptyList();
    this.namespaces = emptyList();
    this.namespaceSets = emptyList();
    this.multinames = emptyList();
  }
  AbcConstantPool.prototype.readConstantPool_39qel5$ = function (s) {
    var intCount = readU30(s);
    var tmp$ = listOf_0(0);
    var $receiver = until(1, intCount);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_0;
    tmp$_0 = $receiver.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(readU30(s));
    }
    this.ints = plus(tmp$, destination);
    var uintCount = readU30(s);
    var tmp$_1 = listOf_0(0);
    var $receiver_0 = until(1, uintCount);
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(readU30(s));
    }
    this.uints = plus(tmp$_1, destination_0);
    var doubleCount = readU30(s);
    var tmp$_3 = listOf_0(0.0);
    var $receiver_1 = until(1, doubleCount);
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver_1, 10));
    var tmp$_4;
    tmp$_4 = $receiver_1.iterator();
    while (tmp$_4.hasNext()) {
      var item_1 = tmp$_4.next();
      destination_1.add_11rb$(readF64_le(s));
    }
    this.doubles = plus(tmp$_3, destination_1);
    var stringCount = readU30(s);
    var tmp$_5 = listOf_0('');
    var $receiver_2 = until(1, stringCount);
    var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver_2, 10));
    var tmp$_6;
    tmp$_6 = $receiver_2.iterator();
    while (tmp$_6.hasNext()) {
      var item_2 = tmp$_6.next();
      destination_2.add_11rb$(readStringz_0(s, readU30(s)));
    }
    this.strings = plus(tmp$_5, destination_2);
    var tmp$_7 = listOf_0(ABC$Namespace$Companion_getInstance().EMPTY);
    var $receiver_3 = until(1, readU30(s));
    var destination_3 = ArrayList_init(collectionSizeOrDefault($receiver_3, 10));
    var tmp$_8;
    tmp$_8 = $receiver_3.iterator();
    while (tmp$_8.hasNext()) {
      var item_3 = tmp$_8.next();
      var tmp$_9 = destination_3.add_11rb$;
      var kind = readU8(s);
      var name = this.strings.get_za3lpa$(readU30(s));
      tmp$_9.call(destination_3, new ABC$Namespace(kind, name));
    }
    this.namespaces = plus(tmp$_7, destination_3);
    var tmp$_10 = listOf_0(emptyList());
    var $receiver_4 = until(1, readU30(s));
    var destination_4 = ArrayList_init(collectionSizeOrDefault($receiver_4, 10));
    var tmp$_11;
    tmp$_11 = $receiver_4.iterator();
    while (tmp$_11.hasNext()) {
      var item_4 = tmp$_11.next();
      var tmp$_12 = destination_4.add_11rb$;
      var $receiver_5 = until(0, readU30(s));
      var destination_5 = ArrayList_init(collectionSizeOrDefault($receiver_5, 10));
      var tmp$_13;
      tmp$_13 = $receiver_5.iterator();
      while (tmp$_13.hasNext()) {
        var item_5 = tmp$_13.next();
        destination_5.add_11rb$(this.namespaces.get_za3lpa$(readU30(s)));
      }
      tmp$_12.call(destination_4, destination_5);
    }
    this.namespaceSets = plus(tmp$_10, destination_4);
    var tmp$_14 = listOf_0(ABC$EmptyMultiname_getInstance());
    var $receiver_6 = until(1, readU30(s));
    var destination_6 = ArrayList_init(collectionSizeOrDefault($receiver_6, 10));
    var tmp$_15;
    tmp$_15 = $receiver_6.iterator();
    while (tmp$_15.hasNext()) {
      var item_6 = tmp$_15.next();
      var tmp$_16 = destination_6.add_11rb$;
      var transform$result;
      var kind_0 = readU8(s);
      if (kind_0 === 7) {
        transform$result = new ABC$ABCQName(this.namespaces.get_za3lpa$(readU30(s)), this.strings.get_za3lpa$(readU30(s)));
      }
       else if (kind_0 === 13) {
        transform$result = new ABC$QNameA(this.namespaces.get_za3lpa$(readU30(s)), this.strings.get_za3lpa$(readU30(s)));
      }
       else if (kind_0 === 15) {
        transform$result = new ABC$RTQName(this.strings.get_za3lpa$(readU30(s)));
      }
       else if (kind_0 === 16) {
        transform$result = new ABC$RTQNameA(this.strings.get_za3lpa$(readU30(s)));
      }
       else if (kind_0 === 17) {
        transform$result = ABC$RTQNameL_getInstance();
      }
       else if (kind_0 === 18) {
        transform$result = ABC$RTQNameLA_getInstance();
      }
       else if (kind_0 === 9) {
        transform$result = new ABC$Multiname(this.strings.get_za3lpa$(readU30(s)), this.namespaceSets.get_za3lpa$(readU30(s)));
      }
       else if (kind_0 === 14) {
        transform$result = new ABC$MultinameA(this.strings.get_za3lpa$(readU30(s)), this.namespaceSets.get_za3lpa$(readU30(s)));
      }
       else if (kind_0 === 27) {
        transform$result = new ABC$MultinameL(this.namespaceSets.get_za3lpa$(readU30(s)));
      }
       else if (kind_0 === 28) {
        transform$result = new ABC$MultinameLA(this.namespaceSets.get_za3lpa$(readU30(s)));
      }
       else if (kind_0 === 29) {
        var tmp$_17 = readU30(s);
        var $receiver_7 = until(0, readU30(s));
        var destination_7 = ArrayList_init(collectionSizeOrDefault($receiver_7, 10));
        var tmp$_18;
        tmp$_18 = $receiver_7.iterator();
        while (tmp$_18.hasNext()) {
          var item_7 = tmp$_18.next();
          destination_7.add_11rb$(readU30(s));
        }
        transform$result = new ABC$TypeName(tmp$_17, destination_7);
      }
       else {
        transform$result = invalidOp('Unsupported ' + kind_0);
      }
      tmp$_16.call(destination_6, transform$result);
    }
    this.multinames = plus(tmp$_14, destination_6);
  };
  AbcConstantPool.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcConstantPool',
    interfaces: []
  };
  function AbcOpcode(name, ordinal, id, type) {
    Enum.call(this);
    this.id = id;
    this.type = type;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AbcOpcode_initFields() {
    AbcOpcode_initFields = function () {
    };
    AbcOpcode$Breakpoint_instance = new AbcOpcode('Breakpoint', 0, 1, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Nop_instance = new AbcOpcode('Nop', 1, 2, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Throw_instance = new AbcOpcode('Throw', 2, 3, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetSuper_instance = new AbcOpcode('GetSuper', 3, 4, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$SetSuper_instance = new AbcOpcode('SetSuper', 4, 5, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$DefaultXmlNamespace_instance = new AbcOpcode('DefaultXmlNamespace', 5, 6, AbcOpcode$Kind$StringOperation_getInstance());
    AbcOpcode$DefaultXmlNamespaceL_instance = new AbcOpcode('DefaultXmlNamespaceL', 6, 7, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Kill_instance = new AbcOpcode('Kill', 7, 8, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$Label_instance = new AbcOpcode('Label', 8, 9, AbcOpcode$Kind$LabelOperation_getInstance());
    AbcOpcode$IfNotLessThan_instance = new AbcOpcode('IfNotLessThan', 9, 12, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfNotLessEqual_instance = new AbcOpcode('IfNotLessEqual', 10, 13, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfNotGreaterThan_instance = new AbcOpcode('IfNotGreaterThan', 11, 14, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfNotGreaterEqual_instance = new AbcOpcode('IfNotGreaterEqual', 12, 15, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$Jump_instance = new AbcOpcode('Jump', 13, 16, AbcOpcode$Kind$JumpOperation_getInstance());
    AbcOpcode$IfTrue_instance = new AbcOpcode('IfTrue', 14, 17, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfFalse_instance = new AbcOpcode('IfFalse', 15, 18, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfEqual_instance = new AbcOpcode('IfEqual', 16, 19, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfNotEqual_instance = new AbcOpcode('IfNotEqual', 17, 20, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfLessThan_instance = new AbcOpcode('IfLessThan', 18, 21, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfLessEqual_instance = new AbcOpcode('IfLessEqual', 19, 22, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfGreaterThan_instance = new AbcOpcode('IfGreaterThan', 20, 23, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfGreaterEqual_instance = new AbcOpcode('IfGreaterEqual', 21, 24, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfStrictEqual_instance = new AbcOpcode('IfStrictEqual', 22, 25, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$IfStrictNotEqual_instance = new AbcOpcode('IfStrictNotEqual', 23, 26, AbcOpcode$Kind$ConditionalJumpOperation_getInstance());
    AbcOpcode$LookupSwitch_instance = new AbcOpcode('LookupSwitch', 24, 27, AbcOpcode$Kind$LookupSwitchOperation_getInstance());
    AbcOpcode$PushWith_instance = new AbcOpcode('PushWith', 25, 28, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PopScope_instance = new AbcOpcode('PopScope', 26, 29, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$NextName_instance = new AbcOpcode('NextName', 27, 30, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$HasNext_instance = new AbcOpcode('HasNext', 28, 31, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushNull_instance = new AbcOpcode('PushNull', 29, 32, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushUndefined_instance = new AbcOpcode('PushUndefined', 30, 33, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$NextValue_instance = new AbcOpcode('NextValue', 31, 35, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushByte_instance = new AbcOpcode('PushByte', 32, 36, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$PushShort_instance = new AbcOpcode('PushShort', 33, 37, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$PushTrue_instance = new AbcOpcode('PushTrue', 34, 38, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushFalse_instance = new AbcOpcode('PushFalse', 35, 39, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushNaN_instance = new AbcOpcode('PushNaN', 36, 40, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Pop_instance = new AbcOpcode('Pop', 37, 41, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Dup_instance = new AbcOpcode('Dup', 38, 42, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Swap_instance = new AbcOpcode('Swap', 39, 43, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushString_instance = new AbcOpcode('PushString', 40, 44, AbcOpcode$Kind$StringOperation_getInstance());
    AbcOpcode$PushInt_instance = new AbcOpcode('PushInt', 41, 45, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$PushUInt_instance = new AbcOpcode('PushUInt', 42, 46, AbcOpcode$Kind$UIntOperation_getInstance());
    AbcOpcode$PushDouble_instance = new AbcOpcode('PushDouble', 43, 47, AbcOpcode$Kind$NumberOperation_getInstance());
    AbcOpcode$PushScope_instance = new AbcOpcode('PushScope', 44, 48, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushNamespace_instance = new AbcOpcode('PushNamespace', 45, 49, AbcOpcode$Kind$NamespaceOperation_getInstance());
    AbcOpcode$HasNext2_instance = new AbcOpcode('HasNext2', 46, 50, AbcOpcode$Kind$IntIntOperation_getInstance());
    AbcOpcode$PushDecimal_instance = new AbcOpcode('PushDecimal', 47, 51, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$PushDNaN_instance = new AbcOpcode('PushDNaN', 48, 52, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$NewFunction_instance = new AbcOpcode('NewFunction', 49, 64, AbcOpcode$Kind$NewFunctionOperation_getInstance());
    AbcOpcode$Call_instance = new AbcOpcode('Call', 50, 65, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$Construct_instance = new AbcOpcode('Construct', 51, 66, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$CallMethod_instance = new AbcOpcode('CallMethod', 52, 67, AbcOpcode$Kind$MethodOperation_getInstance());
    AbcOpcode$CallStatic_instance = new AbcOpcode('CallStatic', 53, 68, AbcOpcode$Kind$MethodOperation_getInstance());
    AbcOpcode$CallSuper_instance = new AbcOpcode('CallSuper', 54, 69, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$CallProperty_instance = new AbcOpcode('CallProperty', 55, 70, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$ReturnVoid_instance = new AbcOpcode('ReturnVoid', 56, 71, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ReturnValue_instance = new AbcOpcode('ReturnValue', 57, 72, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConstructSuper_instance = new AbcOpcode('ConstructSuper', 58, 73, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$ConstructProp_instance = new AbcOpcode('ConstructProp', 59, 74, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$CallSuperId_instance = new AbcOpcode('CallSuperId', 60, 75, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CallPropLex_instance = new AbcOpcode('CallPropLex', 61, 76, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$CallInterface_instance = new AbcOpcode('CallInterface', 62, 77, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CallSuperVoid_instance = new AbcOpcode('CallSuperVoid', 63, 78, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$CallPropVoid_instance = new AbcOpcode('CallPropVoid', 64, 79, AbcOpcode$Kind$MultinameIntOperation_getInstance());
    AbcOpcode$ApplyType_instance = new AbcOpcode('ApplyType', 65, 83, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$NewObject_instance = new AbcOpcode('NewObject', 66, 85, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$NewArray_instance = new AbcOpcode('NewArray', 67, 86, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$NewActivation_instance = new AbcOpcode('NewActivation', 68, 87, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$NewClass_instance = new AbcOpcode('NewClass', 69, 88, AbcOpcode$Kind$NewClassOperation_getInstance());
    AbcOpcode$GetDescendants_instance = new AbcOpcode('GetDescendants', 70, 89, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$NewCatch_instance = new AbcOpcode('NewCatch', 71, 90, AbcOpcode$Kind$NewCatchOperation_getInstance());
    AbcOpcode$FindPropGlobalStrict_instance = new AbcOpcode('FindPropGlobalStrict', 72, 91, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$FindPropGlobal_instance = new AbcOpcode('FindPropGlobal', 73, 92, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$FindPropStrict_instance = new AbcOpcode('FindPropStrict', 74, 93, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$FindProperty_instance = new AbcOpcode('FindProperty', 75, 94, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$FindDef_instance = new AbcOpcode('FindDef', 76, 95, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$GetLex_instance = new AbcOpcode('GetLex', 77, 96, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$SetProperty_instance = new AbcOpcode('SetProperty', 78, 97, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$GetLocal_instance = new AbcOpcode('GetLocal', 79, 98, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$SetLocal_instance = new AbcOpcode('SetLocal', 80, 99, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$GetGlobalScope_instance = new AbcOpcode('GetGlobalScope', 81, 100, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetScopeObject_instance = new AbcOpcode('GetScopeObject', 82, 101, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$GetProperty_instance = new AbcOpcode('GetProperty', 83, 102, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$GetPropertyLate_instance = new AbcOpcode('GetPropertyLate', 84, 103, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$InitProperty_instance = new AbcOpcode('InitProperty', 85, 104, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$SetPropertyLate_instance = new AbcOpcode('SetPropertyLate', 86, 105, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$DeleteProperty_instance = new AbcOpcode('DeleteProperty', 87, 106, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$DeletePropertyLate_instance = new AbcOpcode('DeletePropertyLate', 88, 107, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetSlot_instance = new AbcOpcode('GetSlot', 89, 108, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$SetSlot_instance = new AbcOpcode('SetSlot', 90, 109, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$GetGlobalSlot_instance = new AbcOpcode('GetGlobalSlot', 91, 110, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$SetGlobalSlot_instance = new AbcOpcode('SetGlobalSlot', 92, 111, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$ConvertString_instance = new AbcOpcode('ConvertString', 93, 112, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$EscXmlElem_instance = new AbcOpcode('EscXmlElem', 94, 113, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$EscXmlAttr_instance = new AbcOpcode('EscXmlAttr', 95, 114, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConvertInt_instance = new AbcOpcode('ConvertInt', 96, 115, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConvertUInt_instance = new AbcOpcode('ConvertUInt', 97, 116, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConvertDouble_instance = new AbcOpcode('ConvertDouble', 98, 117, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConvertBoolean_instance = new AbcOpcode('ConvertBoolean', 99, 118, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ConvertObject_instance = new AbcOpcode('ConvertObject', 100, 119, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CheckFilter_instance = new AbcOpcode('CheckFilter', 101, 120, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Coerce_instance = new AbcOpcode('Coerce', 102, 128, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$CoerceBoolean_instance = new AbcOpcode('CoerceBoolean', 103, 129, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceAny_instance = new AbcOpcode('CoerceAny', 104, 130, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceInt_instance = new AbcOpcode('CoerceInt', 105, 131, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceDouble_instance = new AbcOpcode('CoerceDouble', 106, 132, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceString_instance = new AbcOpcode('CoerceString', 107, 133, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$AsType_instance = new AbcOpcode('AsType', 108, 134, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$AsTypeLate_instance = new AbcOpcode('AsTypeLate', 109, 135, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceUInt_instance = new AbcOpcode('CoerceUInt', 110, 136, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$CoerceObject_instance = new AbcOpcode('CoerceObject', 111, 137, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Negate_instance = new AbcOpcode('Negate', 112, 144, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Increment_instance = new AbcOpcode('Increment', 113, 145, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$IncLocal_instance = new AbcOpcode('IncLocal', 114, 146, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$Decrement_instance = new AbcOpcode('Decrement', 115, 147, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$DecLocal_instance = new AbcOpcode('DecLocal', 116, 148, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$TypeOf_instance = new AbcOpcode('TypeOf', 117, 149, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Not_instance = new AbcOpcode('Not', 118, 150, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$BitNot_instance = new AbcOpcode('BitNot', 119, 151, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Concat_instance = new AbcOpcode('Concat', 120, 154, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$AddDouble_instance = new AbcOpcode('AddDouble', 121, 155, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Add_instance = new AbcOpcode('Add', 122, 160, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Subtract_instance = new AbcOpcode('Subtract', 123, 161, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Multiply_instance = new AbcOpcode('Multiply', 124, 162, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Divide_instance = new AbcOpcode('Divide', 125, 163, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Modulo_instance = new AbcOpcode('Modulo', 126, 164, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ShiftLeft_instance = new AbcOpcode('ShiftLeft', 127, 165, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ShiftRight_instance = new AbcOpcode('ShiftRight', 128, 166, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$ShiftRightUnsigned_instance = new AbcOpcode('ShiftRightUnsigned', 129, 167, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$BitAnd_instance = new AbcOpcode('BitAnd', 130, 168, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$BitOr_instance = new AbcOpcode('BitOr', 131, 169, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$BitXor_instance = new AbcOpcode('BitXor', 132, 170, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Equals_instance = new AbcOpcode('Equals', 133, 171, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$StrictEquals_instance = new AbcOpcode('StrictEquals', 134, 172, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$LessThan_instance = new AbcOpcode('LessThan', 135, 173, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$LessEquals_instance = new AbcOpcode('LessEquals', 136, 174, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GreaterThan_instance = new AbcOpcode('GreaterThan', 137, 175, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GreaterEquals_instance = new AbcOpcode('GreaterEquals', 138, 176, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$InstanceOf_instance = new AbcOpcode('InstanceOf', 139, 177, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$IsType_instance = new AbcOpcode('IsType', 140, 178, AbcOpcode$Kind$MultinameOperation_getInstance());
    AbcOpcode$IsTypeLate_instance = new AbcOpcode('IsTypeLate', 141, 179, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$In_instance = new AbcOpcode('In', 142, 180, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$IncrementInt_instance = new AbcOpcode('IncrementInt', 143, 192, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$DecrementInt_instance = new AbcOpcode('DecrementInt', 144, 193, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$IncLocalInt_instance = new AbcOpcode('IncLocalInt', 145, 194, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$DecLocalInt_instance = new AbcOpcode('DecLocalInt', 146, 195, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$NegateInt_instance = new AbcOpcode('NegateInt', 147, 196, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$AddInt_instance = new AbcOpcode('AddInt', 148, 197, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SubtractInt_instance = new AbcOpcode('SubtractInt', 149, 198, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$MultiplyInt_instance = new AbcOpcode('MultiplyInt', 150, 199, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetLocal0_instance = new AbcOpcode('GetLocal0', 151, 208, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetLocal1_instance = new AbcOpcode('GetLocal1', 152, 209, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetLocal2_instance = new AbcOpcode('GetLocal2', 153, 210, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetLocal3_instance = new AbcOpcode('GetLocal3', 154, 211, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetLocal0_instance = new AbcOpcode('SetLocal0', 155, 212, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetLocal1_instance = new AbcOpcode('SetLocal1', 156, 213, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetLocal2_instance = new AbcOpcode('SetLocal2', 157, 214, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetLocal3_instance = new AbcOpcode('SetLocal3', 158, 215, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Debug_instance = new AbcOpcode('Debug', 159, 239, AbcOpcode$Kind$IntStringIntIntOperation_getInstance());
    AbcOpcode$DebugLine_instance = new AbcOpcode('DebugLine', 160, 240, AbcOpcode$Kind$IntOperation_getInstance());
    AbcOpcode$DebugFile_instance = new AbcOpcode('DebugFile', 161, 241, AbcOpcode$Kind$StringOperation_getInstance());
    AbcOpcode$BreakpointLine_instance = new AbcOpcode('BreakpointLine', 162, 242, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetByte_instance = new AbcOpcode('SetByte', 163, 58, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetShort_instance = new AbcOpcode('SetShort', 164, 59, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetInt_instance = new AbcOpcode('SetInt', 165, 60, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetFloat_instance = new AbcOpcode('SetFloat', 166, 61, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$SetDouble_instance = new AbcOpcode('SetDouble', 167, 62, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetByte_instance = new AbcOpcode('GetByte', 168, 53, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetShort_instance = new AbcOpcode('GetShort', 169, 54, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetInt_instance = new AbcOpcode('GetInt', 170, 55, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetFloat_instance = new AbcOpcode('GetFloat', 171, 56, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$GetDouble_instance = new AbcOpcode('GetDouble', 172, 57, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Sign1_instance = new AbcOpcode('Sign1', 173, 80, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Sign8_instance = new AbcOpcode('Sign8', 174, 81, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Sign16_instance = new AbcOpcode('Sign16', 175, 82, AbcOpcode$Kind$BasicOperation_getInstance());
    AbcOpcode$Companion_getInstance();
  }
  var AbcOpcode$Breakpoint_instance;
  function AbcOpcode$Breakpoint_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Breakpoint_instance;
  }
  var AbcOpcode$Nop_instance;
  function AbcOpcode$Nop_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Nop_instance;
  }
  var AbcOpcode$Throw_instance;
  function AbcOpcode$Throw_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Throw_instance;
  }
  var AbcOpcode$GetSuper_instance;
  function AbcOpcode$GetSuper_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetSuper_instance;
  }
  var AbcOpcode$SetSuper_instance;
  function AbcOpcode$SetSuper_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetSuper_instance;
  }
  var AbcOpcode$DefaultXmlNamespace_instance;
  function AbcOpcode$DefaultXmlNamespace_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DefaultXmlNamespace_instance;
  }
  var AbcOpcode$DefaultXmlNamespaceL_instance;
  function AbcOpcode$DefaultXmlNamespaceL_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DefaultXmlNamespaceL_instance;
  }
  var AbcOpcode$Kill_instance;
  function AbcOpcode$Kill_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Kill_instance;
  }
  var AbcOpcode$Label_instance;
  function AbcOpcode$Label_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Label_instance;
  }
  var AbcOpcode$IfNotLessThan_instance;
  function AbcOpcode$IfNotLessThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfNotLessThan_instance;
  }
  var AbcOpcode$IfNotLessEqual_instance;
  function AbcOpcode$IfNotLessEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfNotLessEqual_instance;
  }
  var AbcOpcode$IfNotGreaterThan_instance;
  function AbcOpcode$IfNotGreaterThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfNotGreaterThan_instance;
  }
  var AbcOpcode$IfNotGreaterEqual_instance;
  function AbcOpcode$IfNotGreaterEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfNotGreaterEqual_instance;
  }
  var AbcOpcode$Jump_instance;
  function AbcOpcode$Jump_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Jump_instance;
  }
  var AbcOpcode$IfTrue_instance;
  function AbcOpcode$IfTrue_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfTrue_instance;
  }
  var AbcOpcode$IfFalse_instance;
  function AbcOpcode$IfFalse_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfFalse_instance;
  }
  var AbcOpcode$IfEqual_instance;
  function AbcOpcode$IfEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfEqual_instance;
  }
  var AbcOpcode$IfNotEqual_instance;
  function AbcOpcode$IfNotEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfNotEqual_instance;
  }
  var AbcOpcode$IfLessThan_instance;
  function AbcOpcode$IfLessThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfLessThan_instance;
  }
  var AbcOpcode$IfLessEqual_instance;
  function AbcOpcode$IfLessEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfLessEqual_instance;
  }
  var AbcOpcode$IfGreaterThan_instance;
  function AbcOpcode$IfGreaterThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfGreaterThan_instance;
  }
  var AbcOpcode$IfGreaterEqual_instance;
  function AbcOpcode$IfGreaterEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfGreaterEqual_instance;
  }
  var AbcOpcode$IfStrictEqual_instance;
  function AbcOpcode$IfStrictEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfStrictEqual_instance;
  }
  var AbcOpcode$IfStrictNotEqual_instance;
  function AbcOpcode$IfStrictNotEqual_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IfStrictNotEqual_instance;
  }
  var AbcOpcode$LookupSwitch_instance;
  function AbcOpcode$LookupSwitch_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$LookupSwitch_instance;
  }
  var AbcOpcode$PushWith_instance;
  function AbcOpcode$PushWith_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushWith_instance;
  }
  var AbcOpcode$PopScope_instance;
  function AbcOpcode$PopScope_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PopScope_instance;
  }
  var AbcOpcode$NextName_instance;
  function AbcOpcode$NextName_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NextName_instance;
  }
  var AbcOpcode$HasNext_instance;
  function AbcOpcode$HasNext_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$HasNext_instance;
  }
  var AbcOpcode$PushNull_instance;
  function AbcOpcode$PushNull_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushNull_instance;
  }
  var AbcOpcode$PushUndefined_instance;
  function AbcOpcode$PushUndefined_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushUndefined_instance;
  }
  var AbcOpcode$NextValue_instance;
  function AbcOpcode$NextValue_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NextValue_instance;
  }
  var AbcOpcode$PushByte_instance;
  function AbcOpcode$PushByte_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushByte_instance;
  }
  var AbcOpcode$PushShort_instance;
  function AbcOpcode$PushShort_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushShort_instance;
  }
  var AbcOpcode$PushTrue_instance;
  function AbcOpcode$PushTrue_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushTrue_instance;
  }
  var AbcOpcode$PushFalse_instance;
  function AbcOpcode$PushFalse_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushFalse_instance;
  }
  var AbcOpcode$PushNaN_instance;
  function AbcOpcode$PushNaN_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushNaN_instance;
  }
  var AbcOpcode$Pop_instance;
  function AbcOpcode$Pop_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Pop_instance;
  }
  var AbcOpcode$Dup_instance;
  function AbcOpcode$Dup_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Dup_instance;
  }
  var AbcOpcode$Swap_instance;
  function AbcOpcode$Swap_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Swap_instance;
  }
  var AbcOpcode$PushString_instance;
  function AbcOpcode$PushString_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushString_instance;
  }
  var AbcOpcode$PushInt_instance;
  function AbcOpcode$PushInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushInt_instance;
  }
  var AbcOpcode$PushUInt_instance;
  function AbcOpcode$PushUInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushUInt_instance;
  }
  var AbcOpcode$PushDouble_instance;
  function AbcOpcode$PushDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushDouble_instance;
  }
  var AbcOpcode$PushScope_instance;
  function AbcOpcode$PushScope_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushScope_instance;
  }
  var AbcOpcode$PushNamespace_instance;
  function AbcOpcode$PushNamespace_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushNamespace_instance;
  }
  var AbcOpcode$HasNext2_instance;
  function AbcOpcode$HasNext2_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$HasNext2_instance;
  }
  var AbcOpcode$PushDecimal_instance;
  function AbcOpcode$PushDecimal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushDecimal_instance;
  }
  var AbcOpcode$PushDNaN_instance;
  function AbcOpcode$PushDNaN_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$PushDNaN_instance;
  }
  var AbcOpcode$NewFunction_instance;
  function AbcOpcode$NewFunction_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewFunction_instance;
  }
  var AbcOpcode$Call_instance;
  function AbcOpcode$Call_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Call_instance;
  }
  var AbcOpcode$Construct_instance;
  function AbcOpcode$Construct_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Construct_instance;
  }
  var AbcOpcode$CallMethod_instance;
  function AbcOpcode$CallMethod_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallMethod_instance;
  }
  var AbcOpcode$CallStatic_instance;
  function AbcOpcode$CallStatic_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallStatic_instance;
  }
  var AbcOpcode$CallSuper_instance;
  function AbcOpcode$CallSuper_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallSuper_instance;
  }
  var AbcOpcode$CallProperty_instance;
  function AbcOpcode$CallProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallProperty_instance;
  }
  var AbcOpcode$ReturnVoid_instance;
  function AbcOpcode$ReturnVoid_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ReturnVoid_instance;
  }
  var AbcOpcode$ReturnValue_instance;
  function AbcOpcode$ReturnValue_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ReturnValue_instance;
  }
  var AbcOpcode$ConstructSuper_instance;
  function AbcOpcode$ConstructSuper_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConstructSuper_instance;
  }
  var AbcOpcode$ConstructProp_instance;
  function AbcOpcode$ConstructProp_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConstructProp_instance;
  }
  var AbcOpcode$CallSuperId_instance;
  function AbcOpcode$CallSuperId_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallSuperId_instance;
  }
  var AbcOpcode$CallPropLex_instance;
  function AbcOpcode$CallPropLex_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallPropLex_instance;
  }
  var AbcOpcode$CallInterface_instance;
  function AbcOpcode$CallInterface_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallInterface_instance;
  }
  var AbcOpcode$CallSuperVoid_instance;
  function AbcOpcode$CallSuperVoid_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallSuperVoid_instance;
  }
  var AbcOpcode$CallPropVoid_instance;
  function AbcOpcode$CallPropVoid_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CallPropVoid_instance;
  }
  var AbcOpcode$ApplyType_instance;
  function AbcOpcode$ApplyType_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ApplyType_instance;
  }
  var AbcOpcode$NewObject_instance;
  function AbcOpcode$NewObject_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewObject_instance;
  }
  var AbcOpcode$NewArray_instance;
  function AbcOpcode$NewArray_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewArray_instance;
  }
  var AbcOpcode$NewActivation_instance;
  function AbcOpcode$NewActivation_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewActivation_instance;
  }
  var AbcOpcode$NewClass_instance;
  function AbcOpcode$NewClass_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewClass_instance;
  }
  var AbcOpcode$GetDescendants_instance;
  function AbcOpcode$GetDescendants_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetDescendants_instance;
  }
  var AbcOpcode$NewCatch_instance;
  function AbcOpcode$NewCatch_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NewCatch_instance;
  }
  var AbcOpcode$FindPropGlobalStrict_instance;
  function AbcOpcode$FindPropGlobalStrict_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$FindPropGlobalStrict_instance;
  }
  var AbcOpcode$FindPropGlobal_instance;
  function AbcOpcode$FindPropGlobal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$FindPropGlobal_instance;
  }
  var AbcOpcode$FindPropStrict_instance;
  function AbcOpcode$FindPropStrict_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$FindPropStrict_instance;
  }
  var AbcOpcode$FindProperty_instance;
  function AbcOpcode$FindProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$FindProperty_instance;
  }
  var AbcOpcode$FindDef_instance;
  function AbcOpcode$FindDef_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$FindDef_instance;
  }
  var AbcOpcode$GetLex_instance;
  function AbcOpcode$GetLex_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLex_instance;
  }
  var AbcOpcode$SetProperty_instance;
  function AbcOpcode$SetProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetProperty_instance;
  }
  var AbcOpcode$GetLocal_instance;
  function AbcOpcode$GetLocal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLocal_instance;
  }
  var AbcOpcode$SetLocal_instance;
  function AbcOpcode$SetLocal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetLocal_instance;
  }
  var AbcOpcode$GetGlobalScope_instance;
  function AbcOpcode$GetGlobalScope_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetGlobalScope_instance;
  }
  var AbcOpcode$GetScopeObject_instance;
  function AbcOpcode$GetScopeObject_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetScopeObject_instance;
  }
  var AbcOpcode$GetProperty_instance;
  function AbcOpcode$GetProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetProperty_instance;
  }
  var AbcOpcode$GetPropertyLate_instance;
  function AbcOpcode$GetPropertyLate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetPropertyLate_instance;
  }
  var AbcOpcode$InitProperty_instance;
  function AbcOpcode$InitProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$InitProperty_instance;
  }
  var AbcOpcode$SetPropertyLate_instance;
  function AbcOpcode$SetPropertyLate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetPropertyLate_instance;
  }
  var AbcOpcode$DeleteProperty_instance;
  function AbcOpcode$DeleteProperty_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DeleteProperty_instance;
  }
  var AbcOpcode$DeletePropertyLate_instance;
  function AbcOpcode$DeletePropertyLate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DeletePropertyLate_instance;
  }
  var AbcOpcode$GetSlot_instance;
  function AbcOpcode$GetSlot_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetSlot_instance;
  }
  var AbcOpcode$SetSlot_instance;
  function AbcOpcode$SetSlot_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetSlot_instance;
  }
  var AbcOpcode$GetGlobalSlot_instance;
  function AbcOpcode$GetGlobalSlot_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetGlobalSlot_instance;
  }
  var AbcOpcode$SetGlobalSlot_instance;
  function AbcOpcode$SetGlobalSlot_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetGlobalSlot_instance;
  }
  var AbcOpcode$ConvertString_instance;
  function AbcOpcode$ConvertString_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertString_instance;
  }
  var AbcOpcode$EscXmlElem_instance;
  function AbcOpcode$EscXmlElem_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$EscXmlElem_instance;
  }
  var AbcOpcode$EscXmlAttr_instance;
  function AbcOpcode$EscXmlAttr_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$EscXmlAttr_instance;
  }
  var AbcOpcode$ConvertInt_instance;
  function AbcOpcode$ConvertInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertInt_instance;
  }
  var AbcOpcode$ConvertUInt_instance;
  function AbcOpcode$ConvertUInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertUInt_instance;
  }
  var AbcOpcode$ConvertDouble_instance;
  function AbcOpcode$ConvertDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertDouble_instance;
  }
  var AbcOpcode$ConvertBoolean_instance;
  function AbcOpcode$ConvertBoolean_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertBoolean_instance;
  }
  var AbcOpcode$ConvertObject_instance;
  function AbcOpcode$ConvertObject_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ConvertObject_instance;
  }
  var AbcOpcode$CheckFilter_instance;
  function AbcOpcode$CheckFilter_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CheckFilter_instance;
  }
  var AbcOpcode$Coerce_instance;
  function AbcOpcode$Coerce_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Coerce_instance;
  }
  var AbcOpcode$CoerceBoolean_instance;
  function AbcOpcode$CoerceBoolean_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceBoolean_instance;
  }
  var AbcOpcode$CoerceAny_instance;
  function AbcOpcode$CoerceAny_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceAny_instance;
  }
  var AbcOpcode$CoerceInt_instance;
  function AbcOpcode$CoerceInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceInt_instance;
  }
  var AbcOpcode$CoerceDouble_instance;
  function AbcOpcode$CoerceDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceDouble_instance;
  }
  var AbcOpcode$CoerceString_instance;
  function AbcOpcode$CoerceString_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceString_instance;
  }
  var AbcOpcode$AsType_instance;
  function AbcOpcode$AsType_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$AsType_instance;
  }
  var AbcOpcode$AsTypeLate_instance;
  function AbcOpcode$AsTypeLate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$AsTypeLate_instance;
  }
  var AbcOpcode$CoerceUInt_instance;
  function AbcOpcode$CoerceUInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceUInt_instance;
  }
  var AbcOpcode$CoerceObject_instance;
  function AbcOpcode$CoerceObject_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$CoerceObject_instance;
  }
  var AbcOpcode$Negate_instance;
  function AbcOpcode$Negate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Negate_instance;
  }
  var AbcOpcode$Increment_instance;
  function AbcOpcode$Increment_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Increment_instance;
  }
  var AbcOpcode$IncLocal_instance;
  function AbcOpcode$IncLocal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IncLocal_instance;
  }
  var AbcOpcode$Decrement_instance;
  function AbcOpcode$Decrement_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Decrement_instance;
  }
  var AbcOpcode$DecLocal_instance;
  function AbcOpcode$DecLocal_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DecLocal_instance;
  }
  var AbcOpcode$TypeOf_instance;
  function AbcOpcode$TypeOf_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$TypeOf_instance;
  }
  var AbcOpcode$Not_instance;
  function AbcOpcode$Not_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Not_instance;
  }
  var AbcOpcode$BitNot_instance;
  function AbcOpcode$BitNot_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$BitNot_instance;
  }
  var AbcOpcode$Concat_instance;
  function AbcOpcode$Concat_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Concat_instance;
  }
  var AbcOpcode$AddDouble_instance;
  function AbcOpcode$AddDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$AddDouble_instance;
  }
  var AbcOpcode$Add_instance;
  function AbcOpcode$Add_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Add_instance;
  }
  var AbcOpcode$Subtract_instance;
  function AbcOpcode$Subtract_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Subtract_instance;
  }
  var AbcOpcode$Multiply_instance;
  function AbcOpcode$Multiply_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Multiply_instance;
  }
  var AbcOpcode$Divide_instance;
  function AbcOpcode$Divide_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Divide_instance;
  }
  var AbcOpcode$Modulo_instance;
  function AbcOpcode$Modulo_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Modulo_instance;
  }
  var AbcOpcode$ShiftLeft_instance;
  function AbcOpcode$ShiftLeft_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ShiftLeft_instance;
  }
  var AbcOpcode$ShiftRight_instance;
  function AbcOpcode$ShiftRight_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ShiftRight_instance;
  }
  var AbcOpcode$ShiftRightUnsigned_instance;
  function AbcOpcode$ShiftRightUnsigned_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$ShiftRightUnsigned_instance;
  }
  var AbcOpcode$BitAnd_instance;
  function AbcOpcode$BitAnd_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$BitAnd_instance;
  }
  var AbcOpcode$BitOr_instance;
  function AbcOpcode$BitOr_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$BitOr_instance;
  }
  var AbcOpcode$BitXor_instance;
  function AbcOpcode$BitXor_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$BitXor_instance;
  }
  var AbcOpcode$Equals_instance;
  function AbcOpcode$Equals_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Equals_instance;
  }
  var AbcOpcode$StrictEquals_instance;
  function AbcOpcode$StrictEquals_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$StrictEquals_instance;
  }
  var AbcOpcode$LessThan_instance;
  function AbcOpcode$LessThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$LessThan_instance;
  }
  var AbcOpcode$LessEquals_instance;
  function AbcOpcode$LessEquals_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$LessEquals_instance;
  }
  var AbcOpcode$GreaterThan_instance;
  function AbcOpcode$GreaterThan_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GreaterThan_instance;
  }
  var AbcOpcode$GreaterEquals_instance;
  function AbcOpcode$GreaterEquals_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GreaterEquals_instance;
  }
  var AbcOpcode$InstanceOf_instance;
  function AbcOpcode$InstanceOf_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$InstanceOf_instance;
  }
  var AbcOpcode$IsType_instance;
  function AbcOpcode$IsType_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IsType_instance;
  }
  var AbcOpcode$IsTypeLate_instance;
  function AbcOpcode$IsTypeLate_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IsTypeLate_instance;
  }
  var AbcOpcode$In_instance;
  function AbcOpcode$In_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$In_instance;
  }
  var AbcOpcode$IncrementInt_instance;
  function AbcOpcode$IncrementInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IncrementInt_instance;
  }
  var AbcOpcode$DecrementInt_instance;
  function AbcOpcode$DecrementInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DecrementInt_instance;
  }
  var AbcOpcode$IncLocalInt_instance;
  function AbcOpcode$IncLocalInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$IncLocalInt_instance;
  }
  var AbcOpcode$DecLocalInt_instance;
  function AbcOpcode$DecLocalInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DecLocalInt_instance;
  }
  var AbcOpcode$NegateInt_instance;
  function AbcOpcode$NegateInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$NegateInt_instance;
  }
  var AbcOpcode$AddInt_instance;
  function AbcOpcode$AddInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$AddInt_instance;
  }
  var AbcOpcode$SubtractInt_instance;
  function AbcOpcode$SubtractInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SubtractInt_instance;
  }
  var AbcOpcode$MultiplyInt_instance;
  function AbcOpcode$MultiplyInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$MultiplyInt_instance;
  }
  var AbcOpcode$GetLocal0_instance;
  function AbcOpcode$GetLocal0_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLocal0_instance;
  }
  var AbcOpcode$GetLocal1_instance;
  function AbcOpcode$GetLocal1_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLocal1_instance;
  }
  var AbcOpcode$GetLocal2_instance;
  function AbcOpcode$GetLocal2_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLocal2_instance;
  }
  var AbcOpcode$GetLocal3_instance;
  function AbcOpcode$GetLocal3_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetLocal3_instance;
  }
  var AbcOpcode$SetLocal0_instance;
  function AbcOpcode$SetLocal0_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetLocal0_instance;
  }
  var AbcOpcode$SetLocal1_instance;
  function AbcOpcode$SetLocal1_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetLocal1_instance;
  }
  var AbcOpcode$SetLocal2_instance;
  function AbcOpcode$SetLocal2_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetLocal2_instance;
  }
  var AbcOpcode$SetLocal3_instance;
  function AbcOpcode$SetLocal3_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetLocal3_instance;
  }
  var AbcOpcode$Debug_instance;
  function AbcOpcode$Debug_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Debug_instance;
  }
  var AbcOpcode$DebugLine_instance;
  function AbcOpcode$DebugLine_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DebugLine_instance;
  }
  var AbcOpcode$DebugFile_instance;
  function AbcOpcode$DebugFile_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$DebugFile_instance;
  }
  var AbcOpcode$BreakpointLine_instance;
  function AbcOpcode$BreakpointLine_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$BreakpointLine_instance;
  }
  var AbcOpcode$SetByte_instance;
  function AbcOpcode$SetByte_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetByte_instance;
  }
  var AbcOpcode$SetShort_instance;
  function AbcOpcode$SetShort_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetShort_instance;
  }
  var AbcOpcode$SetInt_instance;
  function AbcOpcode$SetInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetInt_instance;
  }
  var AbcOpcode$SetFloat_instance;
  function AbcOpcode$SetFloat_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetFloat_instance;
  }
  var AbcOpcode$SetDouble_instance;
  function AbcOpcode$SetDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$SetDouble_instance;
  }
  var AbcOpcode$GetByte_instance;
  function AbcOpcode$GetByte_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetByte_instance;
  }
  var AbcOpcode$GetShort_instance;
  function AbcOpcode$GetShort_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetShort_instance;
  }
  var AbcOpcode$GetInt_instance;
  function AbcOpcode$GetInt_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetInt_instance;
  }
  var AbcOpcode$GetFloat_instance;
  function AbcOpcode$GetFloat_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetFloat_instance;
  }
  var AbcOpcode$GetDouble_instance;
  function AbcOpcode$GetDouble_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$GetDouble_instance;
  }
  var AbcOpcode$Sign1_instance;
  function AbcOpcode$Sign1_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Sign1_instance;
  }
  var AbcOpcode$Sign8_instance;
  function AbcOpcode$Sign8_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Sign8_instance;
  }
  var AbcOpcode$Sign16_instance;
  function AbcOpcode$Sign16_getInstance() {
    AbcOpcode_initFields();
    return AbcOpcode$Sign16_instance;
  }
  function AbcOpcode$KindContext(op, cpool, s) {
    this.op = op;
    this.cpool = cpool;
    this.s = s;
  }
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'ints', {
    get: function () {
      return this.cpool.ints;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'uints', {
    get: function () {
      return this.cpool.uints;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'doubles', {
    get: function () {
      return this.cpool.doubles;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'strings', {
    get: function () {
      return this.cpool.strings;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'namespaces', {
    get: function () {
      return this.cpool.namespaces;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'namespaceSets', {
    get: function () {
      return this.cpool.namespaceSets;
    }
  });
  Object.defineProperty(AbcOpcode$KindContext.prototype, 'multinames', {
    get: function () {
      return this.cpool.multinames;
    }
  });
  AbcOpcode$KindContext.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'KindContext',
    interfaces: []
  };
  function AbcOpcode$Kind(name, ordinal, read) {
    if (read === void 0)
      read = AbcOpcode$AbcOpcode$Kind_init$lambda;
    Enum.call(this);
    this.read = read;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AbcOpcode$Kind_initFields() {
    AbcOpcode$Kind_initFields = function () {
    };
    AbcOpcode$Kind$BasicOperation_instance = new AbcOpcode$Kind('BasicOperation', 0, AbcOpcode$Kind$AbcOpcode$Kind$BasicOperation_init$lambda);
    AbcOpcode$Kind$LabelOperation_instance = new AbcOpcode$Kind('LabelOperation', 1, AbcOpcode$Kind$AbcOpcode$Kind$LabelOperation_init$lambda);
    AbcOpcode$Kind$IntOperation_instance = new AbcOpcode$Kind('IntOperation', 2, AbcOpcode$Kind$AbcOpcode$Kind$IntOperation_init$lambda);
    AbcOpcode$Kind$UIntOperation_instance = new AbcOpcode$Kind('UIntOperation', 3, AbcOpcode$Kind$AbcOpcode$Kind$UIntOperation_init$lambda);
    AbcOpcode$Kind$NumberOperation_instance = new AbcOpcode$Kind('NumberOperation', 4, AbcOpcode$Kind$AbcOpcode$Kind$NumberOperation_init$lambda);
    AbcOpcode$Kind$IntIntOperation_instance = new AbcOpcode$Kind('IntIntOperation', 5, AbcOpcode$Kind$AbcOpcode$Kind$IntIntOperation_init$lambda);
    AbcOpcode$Kind$IntStringIntIntOperation_instance = new AbcOpcode$Kind('IntStringIntIntOperation', 6, AbcOpcode$Kind$AbcOpcode$Kind$IntStringIntIntOperation_init$lambda);
    AbcOpcode$Kind$StringOperation_instance = new AbcOpcode$Kind('StringOperation', 7, AbcOpcode$Kind$AbcOpcode$Kind$StringOperation_init$lambda);
    AbcOpcode$Kind$MultinameOperation_instance = new AbcOpcode$Kind('MultinameOperation', 8, AbcOpcode$Kind$AbcOpcode$Kind$MultinameOperation_init$lambda);
    AbcOpcode$Kind$MultinameIntOperation_instance = new AbcOpcode$Kind('MultinameIntOperation', 9, AbcOpcode$Kind$AbcOpcode$Kind$MultinameIntOperation_init$lambda);
    AbcOpcode$Kind$ConditionalJumpOperation_instance = new AbcOpcode$Kind('ConditionalJumpOperation', 10, AbcOpcode$Kind$AbcOpcode$Kind$ConditionalJumpOperation_init$lambda);
    AbcOpcode$Kind$JumpOperation_instance = new AbcOpcode$Kind('JumpOperation', 11, AbcOpcode$Kind$AbcOpcode$Kind$JumpOperation_init$lambda);
    AbcOpcode$Kind$NewClassOperation_instance = new AbcOpcode$Kind('NewClassOperation', 12, AbcOpcode$Kind$AbcOpcode$Kind$NewClassOperation_init$lambda);
    AbcOpcode$Kind$LookupSwitchOperation_instance = new AbcOpcode$Kind('LookupSwitchOperation', 13, AbcOpcode$Kind$AbcOpcode$Kind$LookupSwitchOperation_init$lambda);
    AbcOpcode$Kind$NamespaceOperation_instance = new AbcOpcode$Kind('NamespaceOperation', 14, AbcOpcode$Kind$AbcOpcode$Kind$NamespaceOperation_init$lambda);
    AbcOpcode$Kind$NewFunctionOperation_instance = new AbcOpcode$Kind('NewFunctionOperation', 15, AbcOpcode$Kind$AbcOpcode$Kind$NewFunctionOperation_init$lambda);
    AbcOpcode$Kind$MethodOperation_instance = new AbcOpcode$Kind('MethodOperation', 16, AbcOpcode$Kind$AbcOpcode$Kind$MethodOperation_init$lambda);
    AbcOpcode$Kind$NewCatchOperation_instance = new AbcOpcode$Kind('NewCatchOperation', 17, AbcOpcode$Kind$AbcOpcode$Kind$NewCatchOperation_init$lambda);
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$BasicOperation_init$lambda($receiver) {
    return new AbcBasicOperation($receiver.op);
  }
  var AbcOpcode$Kind$BasicOperation_instance;
  function AbcOpcode$Kind$BasicOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$BasicOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$LabelOperation_init$lambda($receiver) {
    return new AbcLabelOperation($receiver.op, $receiver.s.position);
  }
  var AbcOpcode$Kind$LabelOperation_instance;
  function AbcOpcode$Kind$LabelOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$LabelOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$IntOperation_init$lambda($receiver) {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = $receiver.op;
    tmp$_0 = $receiver.op;
    if (Kotlin.equals(tmp$_0, AbcOpcode$GetScopeObject_getInstance()))
      tmp$_1 = readU8($receiver.s);
    else if (Kotlin.equals(tmp$_0, AbcOpcode$PushByte_getInstance()))
      tmp$_1 = readS8($receiver.s);
    else if (Kotlin.equals(tmp$_0, AbcOpcode$PushShort_getInstance()))
      tmp$_1 = readU30($receiver.s) << 2 >> 2;
    else
      tmp$_1 = readU30($receiver.s);
    return new AbcIntOperation(tmp$, tmp$_1);
  }
  var AbcOpcode$Kind$IntOperation_instance;
  function AbcOpcode$Kind$IntOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$IntOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$UIntOperation_init$lambda($receiver) {
    return new AbcIntOperation($receiver.op, $receiver.uints.get_za3lpa$(readU30($receiver.s)));
  }
  var AbcOpcode$Kind$UIntOperation_instance;
  function AbcOpcode$Kind$UIntOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$UIntOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$NumberOperation_init$lambda($receiver) {
    return new AbcDoubleOperation($receiver.op, $receiver.doubles.get_za3lpa$(readU30($receiver.s)));
  }
  var AbcOpcode$Kind$NumberOperation_instance;
  function AbcOpcode$Kind$NumberOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$NumberOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$IntIntOperation_init$lambda($receiver) {
    if ($receiver.op === AbcOpcode$HasNext2_getInstance()) {
      return new AbcIntIntOperation($receiver.op, readS32_le($receiver.s), readS32_le($receiver.s));
    }
     else {
      return new AbcIntIntOperation($receiver.op, readU30($receiver.s), readU30($receiver.s));
    }
  }
  var AbcOpcode$Kind$IntIntOperation_instance;
  function AbcOpcode$Kind$IntIntOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$IntIntOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$IntStringIntIntOperation_init$lambda($receiver) {
    return new AbcIntStringIntIntOperation($receiver.op, readU8($receiver.s), $receiver.strings.get_za3lpa$(readU30($receiver.s)), readU8($receiver.s), readU30($receiver.s));
  }
  var AbcOpcode$Kind$IntStringIntIntOperation_instance;
  function AbcOpcode$Kind$IntStringIntIntOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$IntStringIntIntOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$StringOperation_init$lambda($receiver) {
    return new AbcStringOperation($receiver.op, $receiver.strings.get_za3lpa$(readU30($receiver.s)));
  }
  var AbcOpcode$Kind$StringOperation_instance;
  function AbcOpcode$Kind$StringOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$StringOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$MultinameOperation_init$lambda($receiver) {
    return new AbcMultinameOperation($receiver.op, $receiver.multinames.get_za3lpa$(readU30($receiver.s)));
  }
  var AbcOpcode$Kind$MultinameOperation_instance;
  function AbcOpcode$Kind$MultinameOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$MultinameOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$MultinameIntOperation_init$lambda($receiver) {
    return new AbcMultinameIntOperation($receiver.op, $receiver.multinames.get_za3lpa$(readU30($receiver.s)), readU30($receiver.s));
  }
  var AbcOpcode$Kind$MultinameIntOperation_instance;
  function AbcOpcode$Kind$MultinameIntOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$MultinameIntOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$ConditionalJumpOperation_init$lambda($receiver) {
    return new AbcJumpOperation($receiver.op, $receiver.s.position.add(Kotlin.Long.fromInt(4)).add(Kotlin.Long.fromInt(readS24_le($receiver.s))));
  }
  var AbcOpcode$Kind$ConditionalJumpOperation_instance;
  function AbcOpcode$Kind$ConditionalJumpOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$ConditionalJumpOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$JumpOperation_init$lambda($receiver) {
    return new AbcJumpOperation($receiver.op, $receiver.s.position.add(Kotlin.Long.fromInt(4)).add(Kotlin.Long.fromInt(readS24_le($receiver.s))));
  }
  var AbcOpcode$Kind$JumpOperation_instance;
  function AbcOpcode$Kind$JumpOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$JumpOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$NewClassOperation_init$lambda($receiver) {
    return new AbcNewClassOperation($receiver.op, readU30($receiver.s));
  }
  var AbcOpcode$Kind$NewClassOperation_instance;
  function AbcOpcode$Kind$NewClassOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$NewClassOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$LookupSwitchOperation_init$lambda($receiver) {
    var defaultMarker = $receiver.s.position.add(Kotlin.Long.fromInt(readS24_le($receiver.s)));
    var $receiver_0 = until(0, readU30($receiver.s) + 1 | 0);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$($receiver.s.position.add(Kotlin.Long.fromInt(readS24_le($receiver.s))));
    }
    var markers = toLongArray(destination);
    return new AbcLookupSwitchOperation($receiver.op, defaultMarker, markers);
  }
  var AbcOpcode$Kind$LookupSwitchOperation_instance;
  function AbcOpcode$Kind$LookupSwitchOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$LookupSwitchOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$NamespaceOperation_init$lambda($receiver) {
    return new AbcNamespaceOperation($receiver.op, $receiver.namespaces.get_za3lpa$(readU30($receiver.s)));
  }
  var AbcOpcode$Kind$NamespaceOperation_instance;
  function AbcOpcode$Kind$NamespaceOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$NamespaceOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$NewFunctionOperation_init$lambda($receiver) {
    return new AbcIntOperation($receiver.op, readU30($receiver.s));
  }
  var AbcOpcode$Kind$NewFunctionOperation_instance;
  function AbcOpcode$Kind$NewFunctionOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$NewFunctionOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$MethodOperation_init$lambda($receiver) {
    return new AbcIntIntOperation($receiver.op, readU30($receiver.s), readU30($receiver.s));
  }
  var AbcOpcode$Kind$MethodOperation_instance;
  function AbcOpcode$Kind$MethodOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$MethodOperation_instance;
  }
  function AbcOpcode$Kind$AbcOpcode$Kind$NewCatchOperation_init$lambda($receiver) {
    return new AbcIntOperation($receiver.op, readU30($receiver.s));
  }
  var AbcOpcode$Kind$NewCatchOperation_instance;
  function AbcOpcode$Kind$NewCatchOperation_getInstance() {
    AbcOpcode$Kind_initFields();
    return AbcOpcode$Kind$NewCatchOperation_instance;
  }
  function AbcOpcode$AbcOpcode$Kind_init$lambda($receiver) {
    return new AbcBasicOperation($receiver.op);
  }
  AbcOpcode$Kind.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Kind',
    interfaces: [Enum]
  };
  function AbcOpcode$Kind$values() {
    return [AbcOpcode$Kind$BasicOperation_getInstance(), AbcOpcode$Kind$LabelOperation_getInstance(), AbcOpcode$Kind$IntOperation_getInstance(), AbcOpcode$Kind$UIntOperation_getInstance(), AbcOpcode$Kind$NumberOperation_getInstance(), AbcOpcode$Kind$IntIntOperation_getInstance(), AbcOpcode$Kind$IntStringIntIntOperation_getInstance(), AbcOpcode$Kind$StringOperation_getInstance(), AbcOpcode$Kind$MultinameOperation_getInstance(), AbcOpcode$Kind$MultinameIntOperation_getInstance(), AbcOpcode$Kind$ConditionalJumpOperation_getInstance(), AbcOpcode$Kind$JumpOperation_getInstance(), AbcOpcode$Kind$NewClassOperation_getInstance(), AbcOpcode$Kind$LookupSwitchOperation_getInstance(), AbcOpcode$Kind$NamespaceOperation_getInstance(), AbcOpcode$Kind$NewFunctionOperation_getInstance(), AbcOpcode$Kind$MethodOperation_getInstance(), AbcOpcode$Kind$NewCatchOperation_getInstance()];
  }
  AbcOpcode$Kind.values = AbcOpcode$Kind$values;
  function AbcOpcode$Kind$valueOf(name) {
    switch (name) {
      case 'BasicOperation':
        return AbcOpcode$Kind$BasicOperation_getInstance();
      case 'LabelOperation':
        return AbcOpcode$Kind$LabelOperation_getInstance();
      case 'IntOperation':
        return AbcOpcode$Kind$IntOperation_getInstance();
      case 'UIntOperation':
        return AbcOpcode$Kind$UIntOperation_getInstance();
      case 'NumberOperation':
        return AbcOpcode$Kind$NumberOperation_getInstance();
      case 'IntIntOperation':
        return AbcOpcode$Kind$IntIntOperation_getInstance();
      case 'IntStringIntIntOperation':
        return AbcOpcode$Kind$IntStringIntIntOperation_getInstance();
      case 'StringOperation':
        return AbcOpcode$Kind$StringOperation_getInstance();
      case 'MultinameOperation':
        return AbcOpcode$Kind$MultinameOperation_getInstance();
      case 'MultinameIntOperation':
        return AbcOpcode$Kind$MultinameIntOperation_getInstance();
      case 'ConditionalJumpOperation':
        return AbcOpcode$Kind$ConditionalJumpOperation_getInstance();
      case 'JumpOperation':
        return AbcOpcode$Kind$JumpOperation_getInstance();
      case 'NewClassOperation':
        return AbcOpcode$Kind$NewClassOperation_getInstance();
      case 'LookupSwitchOperation':
        return AbcOpcode$Kind$LookupSwitchOperation_getInstance();
      case 'NamespaceOperation':
        return AbcOpcode$Kind$NamespaceOperation_getInstance();
      case 'NewFunctionOperation':
        return AbcOpcode$Kind$NewFunctionOperation_getInstance();
      case 'MethodOperation':
        return AbcOpcode$Kind$MethodOperation_getInstance();
      case 'NewCatchOperation':
        return AbcOpcode$Kind$NewCatchOperation_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korfl.abc.AbcOpcode.Kind.' + name);
    }
  }
  AbcOpcode$Kind.valueOf_61zpoe$ = AbcOpcode$Kind$valueOf;
  function AbcOpcode$Companion() {
    AbcOpcode$Companion_instance = this;
    var $receiver = AbcOpcode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  AbcOpcode$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AbcOpcode$Companion_instance = null;
  function AbcOpcode$Companion_getInstance() {
    AbcOpcode_initFields();
    if (AbcOpcode$Companion_instance === null) {
      new AbcOpcode$Companion();
    }
    return AbcOpcode$Companion_instance;
  }
  AbcOpcode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcOpcode',
    interfaces: [Enum]
  };
  function AbcOpcode$values() {
    return [AbcOpcode$Breakpoint_getInstance(), AbcOpcode$Nop_getInstance(), AbcOpcode$Throw_getInstance(), AbcOpcode$GetSuper_getInstance(), AbcOpcode$SetSuper_getInstance(), AbcOpcode$DefaultXmlNamespace_getInstance(), AbcOpcode$DefaultXmlNamespaceL_getInstance(), AbcOpcode$Kill_getInstance(), AbcOpcode$Label_getInstance(), AbcOpcode$IfNotLessThan_getInstance(), AbcOpcode$IfNotLessEqual_getInstance(), AbcOpcode$IfNotGreaterThan_getInstance(), AbcOpcode$IfNotGreaterEqual_getInstance(), AbcOpcode$Jump_getInstance(), AbcOpcode$IfTrue_getInstance(), AbcOpcode$IfFalse_getInstance(), AbcOpcode$IfEqual_getInstance(), AbcOpcode$IfNotEqual_getInstance(), AbcOpcode$IfLessThan_getInstance(), AbcOpcode$IfLessEqual_getInstance(), AbcOpcode$IfGreaterThan_getInstance(), AbcOpcode$IfGreaterEqual_getInstance(), AbcOpcode$IfStrictEqual_getInstance(), AbcOpcode$IfStrictNotEqual_getInstance(), AbcOpcode$LookupSwitch_getInstance(), AbcOpcode$PushWith_getInstance(), AbcOpcode$PopScope_getInstance(), AbcOpcode$NextName_getInstance(), AbcOpcode$HasNext_getInstance(), AbcOpcode$PushNull_getInstance(), AbcOpcode$PushUndefined_getInstance(), AbcOpcode$NextValue_getInstance(), AbcOpcode$PushByte_getInstance(), AbcOpcode$PushShort_getInstance(), AbcOpcode$PushTrue_getInstance(), AbcOpcode$PushFalse_getInstance(), AbcOpcode$PushNaN_getInstance(), AbcOpcode$Pop_getInstance(), AbcOpcode$Dup_getInstance(), AbcOpcode$Swap_getInstance(), AbcOpcode$PushString_getInstance(), AbcOpcode$PushInt_getInstance(), AbcOpcode$PushUInt_getInstance(), AbcOpcode$PushDouble_getInstance(), AbcOpcode$PushScope_getInstance(), AbcOpcode$PushNamespace_getInstance(), AbcOpcode$HasNext2_getInstance(), AbcOpcode$PushDecimal_getInstance(), AbcOpcode$PushDNaN_getInstance(), AbcOpcode$NewFunction_getInstance(), AbcOpcode$Call_getInstance(), AbcOpcode$Construct_getInstance(), AbcOpcode$CallMethod_getInstance(), AbcOpcode$CallStatic_getInstance(), AbcOpcode$CallSuper_getInstance(), AbcOpcode$CallProperty_getInstance(), AbcOpcode$ReturnVoid_getInstance(), AbcOpcode$ReturnValue_getInstance(), AbcOpcode$ConstructSuper_getInstance(), AbcOpcode$ConstructProp_getInstance(), AbcOpcode$CallSuperId_getInstance(), AbcOpcode$CallPropLex_getInstance(), AbcOpcode$CallInterface_getInstance(), AbcOpcode$CallSuperVoid_getInstance(), AbcOpcode$CallPropVoid_getInstance(), AbcOpcode$ApplyType_getInstance(), AbcOpcode$NewObject_getInstance(), AbcOpcode$NewArray_getInstance(), AbcOpcode$NewActivation_getInstance(), AbcOpcode$NewClass_getInstance(), AbcOpcode$GetDescendants_getInstance(), AbcOpcode$NewCatch_getInstance(), AbcOpcode$FindPropGlobalStrict_getInstance(), AbcOpcode$FindPropGlobal_getInstance(), AbcOpcode$FindPropStrict_getInstance(), AbcOpcode$FindProperty_getInstance(), AbcOpcode$FindDef_getInstance(), AbcOpcode$GetLex_getInstance(), AbcOpcode$SetProperty_getInstance(), AbcOpcode$GetLocal_getInstance(), AbcOpcode$SetLocal_getInstance(), AbcOpcode$GetGlobalScope_getInstance(), AbcOpcode$GetScopeObject_getInstance(), AbcOpcode$GetProperty_getInstance(), AbcOpcode$GetPropertyLate_getInstance(), AbcOpcode$InitProperty_getInstance(), AbcOpcode$SetPropertyLate_getInstance(), AbcOpcode$DeleteProperty_getInstance(), AbcOpcode$DeletePropertyLate_getInstance(), AbcOpcode$GetSlot_getInstance(), AbcOpcode$SetSlot_getInstance(), AbcOpcode$GetGlobalSlot_getInstance(), AbcOpcode$SetGlobalSlot_getInstance(), AbcOpcode$ConvertString_getInstance(), AbcOpcode$EscXmlElem_getInstance(), AbcOpcode$EscXmlAttr_getInstance(), AbcOpcode$ConvertInt_getInstance(), AbcOpcode$ConvertUInt_getInstance(), AbcOpcode$ConvertDouble_getInstance(), AbcOpcode$ConvertBoolean_getInstance(), AbcOpcode$ConvertObject_getInstance(), AbcOpcode$CheckFilter_getInstance(), AbcOpcode$Coerce_getInstance(), AbcOpcode$CoerceBoolean_getInstance(), AbcOpcode$CoerceAny_getInstance(), AbcOpcode$CoerceInt_getInstance(), AbcOpcode$CoerceDouble_getInstance(), AbcOpcode$CoerceString_getInstance(), AbcOpcode$AsType_getInstance(), AbcOpcode$AsTypeLate_getInstance(), AbcOpcode$CoerceUInt_getInstance(), AbcOpcode$CoerceObject_getInstance(), AbcOpcode$Negate_getInstance(), AbcOpcode$Increment_getInstance(), AbcOpcode$IncLocal_getInstance(), AbcOpcode$Decrement_getInstance(), AbcOpcode$DecLocal_getInstance(), AbcOpcode$TypeOf_getInstance(), AbcOpcode$Not_getInstance(), AbcOpcode$BitNot_getInstance(), AbcOpcode$Concat_getInstance(), AbcOpcode$AddDouble_getInstance(), AbcOpcode$Add_getInstance(), AbcOpcode$Subtract_getInstance(), AbcOpcode$Multiply_getInstance(), AbcOpcode$Divide_getInstance(), AbcOpcode$Modulo_getInstance(), AbcOpcode$ShiftLeft_getInstance(), AbcOpcode$ShiftRight_getInstance(), AbcOpcode$ShiftRightUnsigned_getInstance(), AbcOpcode$BitAnd_getInstance(), AbcOpcode$BitOr_getInstance(), AbcOpcode$BitXor_getInstance(), AbcOpcode$Equals_getInstance(), AbcOpcode$StrictEquals_getInstance(), AbcOpcode$LessThan_getInstance(), AbcOpcode$LessEquals_getInstance(), AbcOpcode$GreaterThan_getInstance(), AbcOpcode$GreaterEquals_getInstance(), AbcOpcode$InstanceOf_getInstance(), AbcOpcode$IsType_getInstance(), AbcOpcode$IsTypeLate_getInstance(), AbcOpcode$In_getInstance(), AbcOpcode$IncrementInt_getInstance(), AbcOpcode$DecrementInt_getInstance(), AbcOpcode$IncLocalInt_getInstance(), AbcOpcode$DecLocalInt_getInstance(), AbcOpcode$NegateInt_getInstance(), AbcOpcode$AddInt_getInstance(), AbcOpcode$SubtractInt_getInstance(), AbcOpcode$MultiplyInt_getInstance(), AbcOpcode$GetLocal0_getInstance(), AbcOpcode$GetLocal1_getInstance(), AbcOpcode$GetLocal2_getInstance(), AbcOpcode$GetLocal3_getInstance(), AbcOpcode$SetLocal0_getInstance(), AbcOpcode$SetLocal1_getInstance(), AbcOpcode$SetLocal2_getInstance(), AbcOpcode$SetLocal3_getInstance(), AbcOpcode$Debug_getInstance(), AbcOpcode$DebugLine_getInstance(), AbcOpcode$DebugFile_getInstance(), AbcOpcode$BreakpointLine_getInstance(), AbcOpcode$SetByte_getInstance(), AbcOpcode$SetShort_getInstance(), AbcOpcode$SetInt_getInstance(), AbcOpcode$SetFloat_getInstance(), AbcOpcode$SetDouble_getInstance(), AbcOpcode$GetByte_getInstance(), AbcOpcode$GetShort_getInstance(), AbcOpcode$GetInt_getInstance(), AbcOpcode$GetFloat_getInstance(), AbcOpcode$GetDouble_getInstance(), AbcOpcode$Sign1_getInstance(), AbcOpcode$Sign8_getInstance(), AbcOpcode$Sign16_getInstance()];
  }
  AbcOpcode.values = AbcOpcode$values;
  function AbcOpcode$valueOf(name) {
    switch (name) {
      case 'Breakpoint':
        return AbcOpcode$Breakpoint_getInstance();
      case 'Nop':
        return AbcOpcode$Nop_getInstance();
      case 'Throw':
        return AbcOpcode$Throw_getInstance();
      case 'GetSuper':
        return AbcOpcode$GetSuper_getInstance();
      case 'SetSuper':
        return AbcOpcode$SetSuper_getInstance();
      case 'DefaultXmlNamespace':
        return AbcOpcode$DefaultXmlNamespace_getInstance();
      case 'DefaultXmlNamespaceL':
        return AbcOpcode$DefaultXmlNamespaceL_getInstance();
      case 'Kill':
        return AbcOpcode$Kill_getInstance();
      case 'Label':
        return AbcOpcode$Label_getInstance();
      case 'IfNotLessThan':
        return AbcOpcode$IfNotLessThan_getInstance();
      case 'IfNotLessEqual':
        return AbcOpcode$IfNotLessEqual_getInstance();
      case 'IfNotGreaterThan':
        return AbcOpcode$IfNotGreaterThan_getInstance();
      case 'IfNotGreaterEqual':
        return AbcOpcode$IfNotGreaterEqual_getInstance();
      case 'Jump':
        return AbcOpcode$Jump_getInstance();
      case 'IfTrue':
        return AbcOpcode$IfTrue_getInstance();
      case 'IfFalse':
        return AbcOpcode$IfFalse_getInstance();
      case 'IfEqual':
        return AbcOpcode$IfEqual_getInstance();
      case 'IfNotEqual':
        return AbcOpcode$IfNotEqual_getInstance();
      case 'IfLessThan':
        return AbcOpcode$IfLessThan_getInstance();
      case 'IfLessEqual':
        return AbcOpcode$IfLessEqual_getInstance();
      case 'IfGreaterThan':
        return AbcOpcode$IfGreaterThan_getInstance();
      case 'IfGreaterEqual':
        return AbcOpcode$IfGreaterEqual_getInstance();
      case 'IfStrictEqual':
        return AbcOpcode$IfStrictEqual_getInstance();
      case 'IfStrictNotEqual':
        return AbcOpcode$IfStrictNotEqual_getInstance();
      case 'LookupSwitch':
        return AbcOpcode$LookupSwitch_getInstance();
      case 'PushWith':
        return AbcOpcode$PushWith_getInstance();
      case 'PopScope':
        return AbcOpcode$PopScope_getInstance();
      case 'NextName':
        return AbcOpcode$NextName_getInstance();
      case 'HasNext':
        return AbcOpcode$HasNext_getInstance();
      case 'PushNull':
        return AbcOpcode$PushNull_getInstance();
      case 'PushUndefined':
        return AbcOpcode$PushUndefined_getInstance();
      case 'NextValue':
        return AbcOpcode$NextValue_getInstance();
      case 'PushByte':
        return AbcOpcode$PushByte_getInstance();
      case 'PushShort':
        return AbcOpcode$PushShort_getInstance();
      case 'PushTrue':
        return AbcOpcode$PushTrue_getInstance();
      case 'PushFalse':
        return AbcOpcode$PushFalse_getInstance();
      case 'PushNaN':
        return AbcOpcode$PushNaN_getInstance();
      case 'Pop':
        return AbcOpcode$Pop_getInstance();
      case 'Dup':
        return AbcOpcode$Dup_getInstance();
      case 'Swap':
        return AbcOpcode$Swap_getInstance();
      case 'PushString':
        return AbcOpcode$PushString_getInstance();
      case 'PushInt':
        return AbcOpcode$PushInt_getInstance();
      case 'PushUInt':
        return AbcOpcode$PushUInt_getInstance();
      case 'PushDouble':
        return AbcOpcode$PushDouble_getInstance();
      case 'PushScope':
        return AbcOpcode$PushScope_getInstance();
      case 'PushNamespace':
        return AbcOpcode$PushNamespace_getInstance();
      case 'HasNext2':
        return AbcOpcode$HasNext2_getInstance();
      case 'PushDecimal':
        return AbcOpcode$PushDecimal_getInstance();
      case 'PushDNaN':
        return AbcOpcode$PushDNaN_getInstance();
      case 'NewFunction':
        return AbcOpcode$NewFunction_getInstance();
      case 'Call':
        return AbcOpcode$Call_getInstance();
      case 'Construct':
        return AbcOpcode$Construct_getInstance();
      case 'CallMethod':
        return AbcOpcode$CallMethod_getInstance();
      case 'CallStatic':
        return AbcOpcode$CallStatic_getInstance();
      case 'CallSuper':
        return AbcOpcode$CallSuper_getInstance();
      case 'CallProperty':
        return AbcOpcode$CallProperty_getInstance();
      case 'ReturnVoid':
        return AbcOpcode$ReturnVoid_getInstance();
      case 'ReturnValue':
        return AbcOpcode$ReturnValue_getInstance();
      case 'ConstructSuper':
        return AbcOpcode$ConstructSuper_getInstance();
      case 'ConstructProp':
        return AbcOpcode$ConstructProp_getInstance();
      case 'CallSuperId':
        return AbcOpcode$CallSuperId_getInstance();
      case 'CallPropLex':
        return AbcOpcode$CallPropLex_getInstance();
      case 'CallInterface':
        return AbcOpcode$CallInterface_getInstance();
      case 'CallSuperVoid':
        return AbcOpcode$CallSuperVoid_getInstance();
      case 'CallPropVoid':
        return AbcOpcode$CallPropVoid_getInstance();
      case 'ApplyType':
        return AbcOpcode$ApplyType_getInstance();
      case 'NewObject':
        return AbcOpcode$NewObject_getInstance();
      case 'NewArray':
        return AbcOpcode$NewArray_getInstance();
      case 'NewActivation':
        return AbcOpcode$NewActivation_getInstance();
      case 'NewClass':
        return AbcOpcode$NewClass_getInstance();
      case 'GetDescendants':
        return AbcOpcode$GetDescendants_getInstance();
      case 'NewCatch':
        return AbcOpcode$NewCatch_getInstance();
      case 'FindPropGlobalStrict':
        return AbcOpcode$FindPropGlobalStrict_getInstance();
      case 'FindPropGlobal':
        return AbcOpcode$FindPropGlobal_getInstance();
      case 'FindPropStrict':
        return AbcOpcode$FindPropStrict_getInstance();
      case 'FindProperty':
        return AbcOpcode$FindProperty_getInstance();
      case 'FindDef':
        return AbcOpcode$FindDef_getInstance();
      case 'GetLex':
        return AbcOpcode$GetLex_getInstance();
      case 'SetProperty':
        return AbcOpcode$SetProperty_getInstance();
      case 'GetLocal':
        return AbcOpcode$GetLocal_getInstance();
      case 'SetLocal':
        return AbcOpcode$SetLocal_getInstance();
      case 'GetGlobalScope':
        return AbcOpcode$GetGlobalScope_getInstance();
      case 'GetScopeObject':
        return AbcOpcode$GetScopeObject_getInstance();
      case 'GetProperty':
        return AbcOpcode$GetProperty_getInstance();
      case 'GetPropertyLate':
        return AbcOpcode$GetPropertyLate_getInstance();
      case 'InitProperty':
        return AbcOpcode$InitProperty_getInstance();
      case 'SetPropertyLate':
        return AbcOpcode$SetPropertyLate_getInstance();
      case 'DeleteProperty':
        return AbcOpcode$DeleteProperty_getInstance();
      case 'DeletePropertyLate':
        return AbcOpcode$DeletePropertyLate_getInstance();
      case 'GetSlot':
        return AbcOpcode$GetSlot_getInstance();
      case 'SetSlot':
        return AbcOpcode$SetSlot_getInstance();
      case 'GetGlobalSlot':
        return AbcOpcode$GetGlobalSlot_getInstance();
      case 'SetGlobalSlot':
        return AbcOpcode$SetGlobalSlot_getInstance();
      case 'ConvertString':
        return AbcOpcode$ConvertString_getInstance();
      case 'EscXmlElem':
        return AbcOpcode$EscXmlElem_getInstance();
      case 'EscXmlAttr':
        return AbcOpcode$EscXmlAttr_getInstance();
      case 'ConvertInt':
        return AbcOpcode$ConvertInt_getInstance();
      case 'ConvertUInt':
        return AbcOpcode$ConvertUInt_getInstance();
      case 'ConvertDouble':
        return AbcOpcode$ConvertDouble_getInstance();
      case 'ConvertBoolean':
        return AbcOpcode$ConvertBoolean_getInstance();
      case 'ConvertObject':
        return AbcOpcode$ConvertObject_getInstance();
      case 'CheckFilter':
        return AbcOpcode$CheckFilter_getInstance();
      case 'Coerce':
        return AbcOpcode$Coerce_getInstance();
      case 'CoerceBoolean':
        return AbcOpcode$CoerceBoolean_getInstance();
      case 'CoerceAny':
        return AbcOpcode$CoerceAny_getInstance();
      case 'CoerceInt':
        return AbcOpcode$CoerceInt_getInstance();
      case 'CoerceDouble':
        return AbcOpcode$CoerceDouble_getInstance();
      case 'CoerceString':
        return AbcOpcode$CoerceString_getInstance();
      case 'AsType':
        return AbcOpcode$AsType_getInstance();
      case 'AsTypeLate':
        return AbcOpcode$AsTypeLate_getInstance();
      case 'CoerceUInt':
        return AbcOpcode$CoerceUInt_getInstance();
      case 'CoerceObject':
        return AbcOpcode$CoerceObject_getInstance();
      case 'Negate':
        return AbcOpcode$Negate_getInstance();
      case 'Increment':
        return AbcOpcode$Increment_getInstance();
      case 'IncLocal':
        return AbcOpcode$IncLocal_getInstance();
      case 'Decrement':
        return AbcOpcode$Decrement_getInstance();
      case 'DecLocal':
        return AbcOpcode$DecLocal_getInstance();
      case 'TypeOf':
        return AbcOpcode$TypeOf_getInstance();
      case 'Not':
        return AbcOpcode$Not_getInstance();
      case 'BitNot':
        return AbcOpcode$BitNot_getInstance();
      case 'Concat':
        return AbcOpcode$Concat_getInstance();
      case 'AddDouble':
        return AbcOpcode$AddDouble_getInstance();
      case 'Add':
        return AbcOpcode$Add_getInstance();
      case 'Subtract':
        return AbcOpcode$Subtract_getInstance();
      case 'Multiply':
        return AbcOpcode$Multiply_getInstance();
      case 'Divide':
        return AbcOpcode$Divide_getInstance();
      case 'Modulo':
        return AbcOpcode$Modulo_getInstance();
      case 'ShiftLeft':
        return AbcOpcode$ShiftLeft_getInstance();
      case 'ShiftRight':
        return AbcOpcode$ShiftRight_getInstance();
      case 'ShiftRightUnsigned':
        return AbcOpcode$ShiftRightUnsigned_getInstance();
      case 'BitAnd':
        return AbcOpcode$BitAnd_getInstance();
      case 'BitOr':
        return AbcOpcode$BitOr_getInstance();
      case 'BitXor':
        return AbcOpcode$BitXor_getInstance();
      case 'Equals':
        return AbcOpcode$Equals_getInstance();
      case 'StrictEquals':
        return AbcOpcode$StrictEquals_getInstance();
      case 'LessThan':
        return AbcOpcode$LessThan_getInstance();
      case 'LessEquals':
        return AbcOpcode$LessEquals_getInstance();
      case 'GreaterThan':
        return AbcOpcode$GreaterThan_getInstance();
      case 'GreaterEquals':
        return AbcOpcode$GreaterEquals_getInstance();
      case 'InstanceOf':
        return AbcOpcode$InstanceOf_getInstance();
      case 'IsType':
        return AbcOpcode$IsType_getInstance();
      case 'IsTypeLate':
        return AbcOpcode$IsTypeLate_getInstance();
      case 'In':
        return AbcOpcode$In_getInstance();
      case 'IncrementInt':
        return AbcOpcode$IncrementInt_getInstance();
      case 'DecrementInt':
        return AbcOpcode$DecrementInt_getInstance();
      case 'IncLocalInt':
        return AbcOpcode$IncLocalInt_getInstance();
      case 'DecLocalInt':
        return AbcOpcode$DecLocalInt_getInstance();
      case 'NegateInt':
        return AbcOpcode$NegateInt_getInstance();
      case 'AddInt':
        return AbcOpcode$AddInt_getInstance();
      case 'SubtractInt':
        return AbcOpcode$SubtractInt_getInstance();
      case 'MultiplyInt':
        return AbcOpcode$MultiplyInt_getInstance();
      case 'GetLocal0':
        return AbcOpcode$GetLocal0_getInstance();
      case 'GetLocal1':
        return AbcOpcode$GetLocal1_getInstance();
      case 'GetLocal2':
        return AbcOpcode$GetLocal2_getInstance();
      case 'GetLocal3':
        return AbcOpcode$GetLocal3_getInstance();
      case 'SetLocal0':
        return AbcOpcode$SetLocal0_getInstance();
      case 'SetLocal1':
        return AbcOpcode$SetLocal1_getInstance();
      case 'SetLocal2':
        return AbcOpcode$SetLocal2_getInstance();
      case 'SetLocal3':
        return AbcOpcode$SetLocal3_getInstance();
      case 'Debug':
        return AbcOpcode$Debug_getInstance();
      case 'DebugLine':
        return AbcOpcode$DebugLine_getInstance();
      case 'DebugFile':
        return AbcOpcode$DebugFile_getInstance();
      case 'BreakpointLine':
        return AbcOpcode$BreakpointLine_getInstance();
      case 'SetByte':
        return AbcOpcode$SetByte_getInstance();
      case 'SetShort':
        return AbcOpcode$SetShort_getInstance();
      case 'SetInt':
        return AbcOpcode$SetInt_getInstance();
      case 'SetFloat':
        return AbcOpcode$SetFloat_getInstance();
      case 'SetDouble':
        return AbcOpcode$SetDouble_getInstance();
      case 'GetByte':
        return AbcOpcode$GetByte_getInstance();
      case 'GetShort':
        return AbcOpcode$GetShort_getInstance();
      case 'GetInt':
        return AbcOpcode$GetInt_getInstance();
      case 'GetFloat':
        return AbcOpcode$GetFloat_getInstance();
      case 'GetDouble':
        return AbcOpcode$GetDouble_getInstance();
      case 'Sign1':
        return AbcOpcode$Sign1_getInstance();
      case 'Sign8':
        return AbcOpcode$Sign8_getInstance();
      case 'Sign16':
        return AbcOpcode$Sign16_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korfl.abc.AbcOpcode.' + name);
    }
  }
  AbcOpcode.valueOf_61zpoe$ = AbcOpcode$valueOf;
  function AbcOperation() {
    AbcOperation$Companion_getInstance();
  }
  function AbcOperation$Companion() {
    AbcOperation$Companion_instance = this;
  }
  AbcOperation$Companion.prototype.read_z48iox$ = function (cpool, s) {
    var iop = readU8(s);
    var op = AbcOpcode$Companion_getInstance().BY_ID.get_11rb$(iop);
    return (op != null ? op : Kotlin.throwNPE()).type.read(new AbcOpcode$KindContext(op, cpool, s));
  };
  AbcOperation$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AbcOperation$Companion_instance = null;
  function AbcOperation$Companion_getInstance() {
    if (AbcOperation$Companion_instance === null) {
      new AbcOperation$Companion();
    }
    return AbcOperation$Companion_instance;
  }
  AbcOperation.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'AbcOperation',
    interfaces: []
  };
  function AbcBasicOperation(opcode) {
    this.opcode_ikyg7x$_0 = opcode;
  }
  Object.defineProperty(AbcBasicOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_ikyg7x$_0;
    }
  });
  AbcBasicOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcBasicOperation',
    interfaces: [AbcOperation]
  };
  AbcBasicOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcBasicOperation.prototype.copy_i007ro$ = function (opcode) {
    return new AbcBasicOperation(opcode === void 0 ? this.opcode : opcode);
  };
  AbcBasicOperation.prototype.toString = function () {
    return 'AbcBasicOperation(opcode=' + Kotlin.toString(this.opcode) + ')';
  };
  AbcBasicOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    return result;
  };
  AbcBasicOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.opcode, other.opcode))));
  };
  function AbcLabelOperation(opcode, position) {
    this.opcode_bydaax$_0 = opcode;
    this.position = position;
  }
  Object.defineProperty(AbcLabelOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_bydaax$_0;
    }
  });
  AbcLabelOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcLabelOperation',
    interfaces: [AbcOperation]
  };
  AbcLabelOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcLabelOperation.prototype.component2 = function () {
    return this.position;
  };
  AbcLabelOperation.prototype.copy_nf4l4f$ = function (opcode, position) {
    return new AbcLabelOperation(opcode === void 0 ? this.opcode : opcode, position === void 0 ? this.position : position);
  };
  AbcLabelOperation.prototype.toString = function () {
    return 'AbcLabelOperation(opcode=' + Kotlin.toString(this.opcode) + (', position=' + Kotlin.toString(this.position)) + ')';
  };
  AbcLabelOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    return result;
  };
  AbcLabelOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.position, other.position)))));
  };
  function AbcLookupSwitchOperation(opcode, defaultMarker, markers) {
    this.opcode_vj6rap$_0 = opcode;
    this.defaultMarker = defaultMarker;
    this.markers = markers;
  }
  Object.defineProperty(AbcLookupSwitchOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_vj6rap$_0;
    }
  });
  AbcLookupSwitchOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcLookupSwitchOperation',
    interfaces: [AbcOperation]
  };
  AbcLookupSwitchOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcLookupSwitchOperation.prototype.component2 = function () {
    return this.defaultMarker;
  };
  AbcLookupSwitchOperation.prototype.component3 = function () {
    return this.markers;
  };
  AbcLookupSwitchOperation.prototype.copy_phranf$ = function (opcode, defaultMarker, markers) {
    return new AbcLookupSwitchOperation(opcode === void 0 ? this.opcode : opcode, defaultMarker === void 0 ? this.defaultMarker : defaultMarker, markers === void 0 ? this.markers : markers);
  };
  AbcLookupSwitchOperation.prototype.toString = function () {
    return 'AbcLookupSwitchOperation(opcode=' + Kotlin.toString(this.opcode) + (', defaultMarker=' + Kotlin.toString(this.defaultMarker)) + (', markers=' + Kotlin.toString(this.markers)) + ')';
  };
  AbcLookupSwitchOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.defaultMarker) | 0;
    result = result * 31 + Kotlin.hashCode(this.markers) | 0;
    return result;
  };
  AbcLookupSwitchOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.defaultMarker, other.defaultMarker) && Kotlin.equals(this.markers, other.markers)))));
  };
  function AbcIntStringIntIntOperation(opcode, int1, string, int2, int3) {
    this.opcode_ab2met$_0 = opcode;
    this.int1 = int1;
    this.string = string;
    this.int2 = int2;
    this.int3 = int3;
  }
  Object.defineProperty(AbcIntStringIntIntOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_ab2met$_0;
    }
  });
  AbcIntStringIntIntOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcIntStringIntIntOperation',
    interfaces: [AbcOperation]
  };
  AbcIntStringIntIntOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcIntStringIntIntOperation.prototype.component2 = function () {
    return this.int1;
  };
  AbcIntStringIntIntOperation.prototype.component3 = function () {
    return this.string;
  };
  AbcIntStringIntIntOperation.prototype.component4 = function () {
    return this.int2;
  };
  AbcIntStringIntIntOperation.prototype.component5 = function () {
    return this.int3;
  };
  AbcIntStringIntIntOperation.prototype.copy_flkgb0$ = function (opcode, int1, string, int2, int3) {
    return new AbcIntStringIntIntOperation(opcode === void 0 ? this.opcode : opcode, int1 === void 0 ? this.int1 : int1, string === void 0 ? this.string : string, int2 === void 0 ? this.int2 : int2, int3 === void 0 ? this.int3 : int3);
  };
  AbcIntStringIntIntOperation.prototype.toString = function () {
    return 'AbcIntStringIntIntOperation(opcode=' + Kotlin.toString(this.opcode) + (', int1=' + Kotlin.toString(this.int1)) + (', string=' + Kotlin.toString(this.string)) + (', int2=' + Kotlin.toString(this.int2)) + (', int3=' + Kotlin.toString(this.int3)) + ')';
  };
  AbcIntStringIntIntOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.int1) | 0;
    result = result * 31 + Kotlin.hashCode(this.string) | 0;
    result = result * 31 + Kotlin.hashCode(this.int2) | 0;
    result = result * 31 + Kotlin.hashCode(this.int3) | 0;
    return result;
  };
  AbcIntStringIntIntOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.int1, other.int1) && Kotlin.equals(this.string, other.string) && Kotlin.equals(this.int2, other.int2) && Kotlin.equals(this.int3, other.int3)))));
  };
  function AbcIntOperation(opcode, value) {
    this.opcode_lhi2kc$_0 = opcode;
    this.value = value;
  }
  Object.defineProperty(AbcIntOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_lhi2kc$_0;
    }
  });
  AbcIntOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcIntOperation',
    interfaces: [AbcOperation]
  };
  AbcIntOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcIntOperation.prototype.component2 = function () {
    return this.value;
  };
  AbcIntOperation.prototype.copy_9x5dmu$ = function (opcode, value) {
    return new AbcIntOperation(opcode === void 0 ? this.opcode : opcode, value === void 0 ? this.value : value);
  };
  AbcIntOperation.prototype.toString = function () {
    return 'AbcIntOperation(opcode=' + Kotlin.toString(this.opcode) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AbcIntOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AbcIntOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.value, other.value)))));
  };
  function AbcJumpOperation(opcode, position) {
    this.opcode_9el3cf$_0 = opcode;
    this.position = position;
  }
  Object.defineProperty(AbcJumpOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_9el3cf$_0;
    }
  });
  AbcJumpOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcJumpOperation',
    interfaces: [AbcOperation]
  };
  AbcJumpOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcJumpOperation.prototype.component2 = function () {
    return this.position;
  };
  AbcJumpOperation.prototype.copy_nf4l4f$ = function (opcode, position) {
    return new AbcJumpOperation(opcode === void 0 ? this.opcode : opcode, position === void 0 ? this.position : position);
  };
  AbcJumpOperation.prototype.toString = function () {
    return 'AbcJumpOperation(opcode=' + Kotlin.toString(this.opcode) + (', position=' + Kotlin.toString(this.position)) + ')';
  };
  AbcJumpOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    return result;
  };
  AbcJumpOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.position, other.position)))));
  };
  function AbcStringOperation(opcode, value) {
    this.opcode_qbycdu$_0 = opcode;
    this.value = value;
  }
  Object.defineProperty(AbcStringOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_qbycdu$_0;
    }
  });
  AbcStringOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcStringOperation',
    interfaces: [AbcOperation]
  };
  AbcStringOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcStringOperation.prototype.component2 = function () {
    return this.value;
  };
  AbcStringOperation.prototype.copy_ddej52$ = function (opcode, value) {
    return new AbcStringOperation(opcode === void 0 ? this.opcode : opcode, value === void 0 ? this.value : value);
  };
  AbcStringOperation.prototype.toString = function () {
    return 'AbcStringOperation(opcode=' + Kotlin.toString(this.opcode) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AbcStringOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AbcStringOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.value, other.value)))));
  };
  function AbcIntIntOperation(opcode, value1, value2) {
    this.opcode_kz5k1t$_0 = opcode;
    this.value1 = value1;
    this.value2 = value2;
  }
  Object.defineProperty(AbcIntIntOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_kz5k1t$_0;
    }
  });
  AbcIntIntOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcIntIntOperation',
    interfaces: [AbcOperation]
  };
  AbcIntIntOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcIntIntOperation.prototype.component2 = function () {
    return this.value1;
  };
  AbcIntIntOperation.prototype.component3 = function () {
    return this.value2;
  };
  AbcIntIntOperation.prototype.copy_uo3hpo$ = function (opcode, value1, value2) {
    return new AbcIntIntOperation(opcode === void 0 ? this.opcode : opcode, value1 === void 0 ? this.value1 : value1, value2 === void 0 ? this.value2 : value2);
  };
  AbcIntIntOperation.prototype.toString = function () {
    return 'AbcIntIntOperation(opcode=' + Kotlin.toString(this.opcode) + (', value1=' + Kotlin.toString(this.value1)) + (', value2=' + Kotlin.toString(this.value2)) + ')';
  };
  AbcIntIntOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.value1) | 0;
    result = result * 31 + Kotlin.hashCode(this.value2) | 0;
    return result;
  };
  AbcIntIntOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.value1, other.value1) && Kotlin.equals(this.value2, other.value2)))));
  };
  function AbcDoubleOperation(opcode, value) {
    this.opcode_n5tfri$_0 = opcode;
    this.value = value;
  }
  Object.defineProperty(AbcDoubleOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_n5tfri$_0;
    }
  });
  AbcDoubleOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcDoubleOperation',
    interfaces: [AbcOperation]
  };
  AbcDoubleOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcDoubleOperation.prototype.component2 = function () {
    return this.value;
  };
  AbcDoubleOperation.prototype.copy_670zza$ = function (opcode, value) {
    return new AbcDoubleOperation(opcode === void 0 ? this.opcode : opcode, value === void 0 ? this.value : value);
  };
  AbcDoubleOperation.prototype.toString = function () {
    return 'AbcDoubleOperation(opcode=' + Kotlin.toString(this.opcode) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AbcDoubleOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AbcDoubleOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.value, other.value)))));
  };
  function AbcNewClassOperation(opcode, value) {
    this.opcode_wsgjgn$_0 = opcode;
    this.value = value;
  }
  Object.defineProperty(AbcNewClassOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_wsgjgn$_0;
    }
  });
  AbcNewClassOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcNewClassOperation',
    interfaces: [AbcOperation]
  };
  AbcNewClassOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcNewClassOperation.prototype.component2 = function () {
    return this.value;
  };
  AbcNewClassOperation.prototype.copy_9x5dmu$ = function (opcode, value) {
    return new AbcNewClassOperation(opcode === void 0 ? this.opcode : opcode, value === void 0 ? this.value : value);
  };
  AbcNewClassOperation.prototype.toString = function () {
    return 'AbcNewClassOperation(opcode=' + Kotlin.toString(this.opcode) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AbcNewClassOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AbcNewClassOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.value, other.value)))));
  };
  function AbcMultinameOperation(opcode, multiname) {
    this.opcode_cqcz7r$_0 = opcode;
    this.multiname = multiname;
  }
  Object.defineProperty(AbcMultinameOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_cqcz7r$_0;
    }
  });
  AbcMultinameOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcMultinameOperation',
    interfaces: [AbcOperation]
  };
  AbcMultinameOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcMultinameOperation.prototype.component2 = function () {
    return this.multiname;
  };
  AbcMultinameOperation.prototype.copy_uk8vf2$ = function (opcode, multiname) {
    return new AbcMultinameOperation(opcode === void 0 ? this.opcode : opcode, multiname === void 0 ? this.multiname : multiname);
  };
  AbcMultinameOperation.prototype.toString = function () {
    return 'AbcMultinameOperation(opcode=' + Kotlin.toString(this.opcode) + (', multiname=' + Kotlin.toString(this.multiname)) + ')';
  };
  AbcMultinameOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.multiname) | 0;
    return result;
  };
  AbcMultinameOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.multiname, other.multiname)))));
  };
  function AbcMultinameIntOperation(opcode, multiname, value) {
    this.opcode_g6t384$_0 = opcode;
    this.multiname = multiname;
    this.value = value;
  }
  Object.defineProperty(AbcMultinameIntOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_g6t384$_0;
    }
  });
  AbcMultinameIntOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcMultinameIntOperation',
    interfaces: [AbcOperation]
  };
  AbcMultinameIntOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcMultinameIntOperation.prototype.component2 = function () {
    return this.multiname;
  };
  AbcMultinameIntOperation.prototype.component3 = function () {
    return this.value;
  };
  AbcMultinameIntOperation.prototype.copy_cxijj0$ = function (opcode, multiname, value) {
    return new AbcMultinameIntOperation(opcode === void 0 ? this.opcode : opcode, multiname === void 0 ? this.multiname : multiname, value === void 0 ? this.value : value);
  };
  AbcMultinameIntOperation.prototype.toString = function () {
    return 'AbcMultinameIntOperation(opcode=' + Kotlin.toString(this.opcode) + (', multiname=' + Kotlin.toString(this.multiname)) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  AbcMultinameIntOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.multiname) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  AbcMultinameIntOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.multiname, other.multiname) && Kotlin.equals(this.value, other.value)))));
  };
  function AbcNamespaceOperation(opcode, namespace) {
    this.opcode_d37chc$_0 = opcode;
    this.namespace = namespace;
  }
  Object.defineProperty(AbcNamespaceOperation.prototype, 'opcode', {
    get: function () {
      return this.opcode_d37chc$_0;
    }
  });
  AbcNamespaceOperation.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AbcNamespaceOperation',
    interfaces: [AbcOperation]
  };
  AbcNamespaceOperation.prototype.component1 = function () {
    return this.opcode;
  };
  AbcNamespaceOperation.prototype.component2 = function () {
    return this.namespace;
  };
  AbcNamespaceOperation.prototype.copy_l4dlor$ = function (opcode, namespace) {
    return new AbcNamespaceOperation(opcode === void 0 ? this.opcode : opcode, namespace === void 0 ? this.namespace : namespace);
  };
  AbcNamespaceOperation.prototype.toString = function () {
    return 'AbcNamespaceOperation(opcode=' + Kotlin.toString(this.opcode) + (', namespace=' + Kotlin.toString(this.namespace)) + ')';
  };
  AbcNamespaceOperation.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.opcode) | 0;
    result = result * 31 + Kotlin.hashCode(this.namespace) | 0;
    return result;
  };
  AbcNamespaceOperation.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.opcode, other.opcode) && Kotlin.equals(this.namespace, other.namespace)))));
  };
  function AMF0() {
    AMF0_instance = this;
  }
  AMF0.prototype.decode_39qel5$ = function (s) {
    return (new AMF0$Reader(s)).read();
  };
  function AMF0$Reader(i) {
    this.i = i;
  }
  AMF0$Reader.prototype.readObject = function () {
    var h = HashMap_init();
    while (true) {
      var len = readU16_be(this.i);
      var name = readString(this.i, len);
      var k = readU8(this.i);
      if (k === 9)
        break;
      var value = this.readWithCode_za3lpa$(k);
      h.put_xwzc9p$(name, value);
    }
    return h;
  };
  AMF0$Reader.prototype.readWithCode_za3lpa$ = function (id) {
    var tmp$;
    if (id === 0)
      return readF64_be(this.i);
    else if (id === 1) {
      tmp$ = readU8(this.i);
      if (tmp$ === 0)
        return false;
      else if (tmp$ === 1)
        return true;
      else
        throw new Error_0('Invalid AMF');
    }
     else if (id === 2)
      return readStringz_0(this.i, readU16_be(this.i));
    else if (id === 3)
      return this.readObject();
    else if (id === 8) {
      var size = readS32_be(this.i);
      throw new NotImplementedError_init();
    }
     else if (id === 5)
      return null;
    else if (id === 6)
      return lang.Undefined;
    else if (id === 7)
      throw new Error_0('Not supported : Reference');
    else if (id === 10) {
      var count = readS32_be(this.i);
      var $receiver = until(0, count);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(this.read());
      }
      return destination;
    }
     else if (id === 11) {
      var time_ms = readF64_be(this.i);
      var tz_min = readU16_be(this.i);
      return new UTCDate(Kotlin.Long.fromNumber(time_ms).add(Kotlin.Long.fromInt(tz_min * 60 | 0).multiply(Kotlin.Long.fromInt(1000))));
    }
     else if (id === 12)
      return readString(this.i, readS32_be(this.i));
    else
      throw new Error_0('Unknown AMF ' + Kotlin.toString(id));
  };
  AMF0$Reader.prototype.read = function () {
    return this.readWithCode_za3lpa$(readU8(this.i));
  };
  AMF0$Reader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Reader',
    interfaces: []
  };
  AMF0.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'AMF0',
    interfaces: []
  };
  var AMF0_instance = null;
  function AMF0_getInstance() {
    if (AMF0_instance === null) {
      new AMF0();
    }
    return AMF0_instance;
  }
  function AMF3() {
    AMF3_instance = this;
  }
  AMF3.prototype.read_39qel5$ = function (s) {
    var out = (new AMF3$Reader(s)).read();
    return out;
  };
  function AMF3$Reader(i) {
    this.i = i;
  }
  AMF3$Reader.prototype.readObject = function () {
    var tmp$;
    var len = this.readInt_za3lpa$();
    var dyn = (len >>> 3 & 1) === 1;
    len = len >>> 4;
    readU8(this.i);
    var h = HashMap_init();
    if (dyn) {
      while (true) {
        var s = this.readString();
        if (Kotlin.equals(s, ''))
          break;
        var value = this.read();
        h.put_xwzc9p$(s, value);
      }
    }
     else {
      var $receiver = until(0, len);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination.add_11rb$(this.readString());
      }
      var keys = destination;
      tmp$ = len;
      for (var n = 0; n < tmp$; n++) {
        var key = keys.get_za3lpa$(n);
        var value_0 = this.read();
        h.put_xwzc9p$(key, value_0);
      }
    }
    return h;
  };
  AMF3$Reader.prototype.readMap_za3lpa$ = function (len) {
    var h = HashMap_init();
    readU8(this.i);
    for (var i = 0; i < len; i++) {
      var key = this.read();
      var value = this.read();
      h.put_xwzc9p$(key, value);
    }
    return h;
  };
  AMF3$Reader.prototype.readArray_za3lpa$ = function (n) {
    var a = ArrayList_init();
    this.read();
    for (var i = 0; i < n; i++)
      a.add_11rb$(this.read());
    return a;
  };
  AMF3$Reader.prototype.readBytes_za3lpa$ = function (size) {
    return readBytes(this.i, size);
  };
  AMF3$Reader.prototype.readInt_za3lpa$ = function (preShift) {
    if (preShift === void 0)
      preShift = 0;
    var ret = 0;
    var c = readU8(this.i);
    if (c > 191)
      ret = 896;
    var n = 0;
    while ((n = n + 1 | 0, n) < 4 && c > 127) {
      ret = ret | c & 127;
      ret = ret << 7;
      c = readU8(this.i);
    }
    if (n > 3)
      ret = ret << 1;
    ret = ret | c;
    return ret >>> preShift;
  };
  AMF3$Reader.prototype.readString = function () {
    return readString(this.i, this.readInt_za3lpa$(1));
  };
  AMF3$Reader.prototype.readWithCode_za3lpa$ = function (id) {
    if (id === 0)
      return lang.Undefined;
    else if (id === 1)
      return null;
    else if (id === 2)
      return false;
    else if (id === 3)
      return true;
    else if (id === 4)
      return this.readInt_za3lpa$();
    else if (id === 5)
      return readF64_be(this.i);
    else if (id === 6)
      return this.readString();
    else if (id === 7)
      throw new Error_0('XMLDocument unsupported');
    else if (id === 8) {
      readU8(this.i);
      return new UTCDate(Kotlin.Long.fromNumber(readF64_be(this.i)));
    }
     else if (id === 9)
      return this.readArray_za3lpa$(this.readInt_za3lpa$(1));
    else if (id === 10)
      return this.readObject();
    else if (id === 11)
      return Xml(this.readString());
    else if (id === 12)
      return this.readBytes_za3lpa$(this.readInt_za3lpa$(1));
    else if (id === 13 || id === 14 || id === 15)
      return this.readArray_za3lpa$(this.readInt_za3lpa$(1));
    else if (id === 16) {
      var len = this.readInt_za3lpa$(1);
      this.readString();
      return this.readArray_za3lpa$(len);
    }
     else if (id === 17)
      return this.readMap_za3lpa$(this.readInt_za3lpa$(1));
    else
      throw new Error_0('Unknown AMF ' + Kotlin.toString(id));
  };
  AMF3$Reader.prototype.read = function () {
    return this.readWithCode_za3lpa$(readU8(this.i));
  };
  AMF3$Reader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Reader',
    interfaces: []
  };
  AMF3.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'AMF3',
    interfaces: []
  };
  var AMF3_instance = null;
  function AMF3_getInstance() {
    if (AMF3_instance === null) {
      new AMF3();
    }
    return AMF3_instance;
  }
  Object.defineProperty(SWF, 'Companion', {
    get: SWF$Companion_getInstance
  });
  var package$com = _.com || (_.com = {});
  var package$codeazur = package$com.codeazur || (package$com.codeazur = {});
  var package$as3swf = package$codeazur.as3swf || (package$codeazur.as3swf = {});
  package$as3swf.SWF = SWF;
  Object.defineProperty(SWFData, 'Companion', {
    get: SWFData$Companion_getInstance
  });
  package$as3swf.SWFData = SWFData;
  Object.defineProperty(SWFTimelineContainer, 'Companion', {
    get: SWFTimelineContainer$Companion_getInstance
  });
  package$as3swf.SWFTimelineContainer = SWFTimelineContainer;
  Object.defineProperty(Action, 'Companion', {
    get: Action$Companion_getInstance
  });
  var package$data = package$as3swf.data || (package$as3swf.data = {});
  var package$actions = package$data.actions || (package$data.actions = {});
  package$actions.Action = Action;
  package$actions.ActionExecutionContext = ActionExecutionContext;
  package$actions.ActionUnknown = ActionUnknown;
  package$actions.IAction = IAction;
  package$actions.IActionBranch = IActionBranch;
  package$actions.ActionGetURL = ActionGetURL;
  package$actions.ActionGotoFrame = ActionGotoFrame;
  package$actions.ActionGotoLabel = ActionGotoLabel;
  package$actions.ActionNextFrame = ActionNextFrame;
  package$actions.ActionPlay = ActionPlay;
  package$actions.ActionPreviousFrame = ActionPreviousFrame;
  package$actions.ActionSetTarget = ActionSetTarget;
  package$actions.ActionStop = ActionStop;
  package$actions.ActionStopSounds = ActionStopSounds;
  package$actions.ActionToggleQuality = ActionToggleQuality;
  package$actions.ActionWaitForFrame = ActionWaitForFrame;
  package$actions.ActionAdd = ActionAdd;
  package$actions.ActionAnd = ActionAnd;
  package$actions.ActionAsciiToChar = ActionAsciiToChar;
  package$actions.ActionCall = ActionCall;
  package$actions.ActionCharToAscii = ActionCharToAscii;
  package$actions.ActionCloneSprite = ActionCloneSprite;
  package$actions.ActionDivide = ActionDivide;
  package$actions.ActionEndDrag = ActionEndDrag;
  package$actions.ActionEquals = ActionEquals;
  package$actions.ActionGetProperty = ActionGetProperty;
  package$actions.ActionGetTime = ActionGetTime;
  package$actions.ActionGetURL2 = ActionGetURL2;
  package$actions.ActionGetVariable = ActionGetVariable;
  package$actions.ActionGotoFrame2 = ActionGotoFrame2;
  package$actions.ActionIf = ActionIf;
  package$actions.ActionJump = ActionJump;
  package$actions.ActionLess = ActionLess;
  package$actions.ActionMBAsciiToChar = ActionMBAsciiToChar;
  package$actions.ActionMBCharToAscii = ActionMBCharToAscii;
  package$actions.ActionMBStringExtract = ActionMBStringExtract;
  package$actions.ActionMBStringLength = ActionMBStringLength;
  package$actions.ActionMultiply = ActionMultiply;
  package$actions.ActionNot = ActionNot;
  package$actions.ActionOr = ActionOr;
  package$actions.ActionPop = ActionPop;
  package$actions.ActionPush = ActionPush;
  package$actions.ActionRandomNumber = ActionRandomNumber;
  package$actions.ActionRemoveSprite = ActionRemoveSprite;
  package$actions.ActionSetProperty = ActionSetProperty;
  package$actions.ActionSetTarget2 = ActionSetTarget2;
  package$actions.ActionSetVariable = ActionSetVariable;
  package$actions.ActionStartDrag = ActionStartDrag;
  package$actions.ActionStringAdd = ActionStringAdd;
  package$actions.ActionStringEquals = ActionStringEquals;
  package$actions.ActionStringExtract = ActionStringExtract;
  package$actions.ActionStringLength = ActionStringLength;
  package$actions.ActionStringLess = ActionStringLess;
  package$actions.ActionSubtract = ActionSubtract;
  package$actions.ActionToInteger = ActionToInteger;
  package$actions.ActionTrace = ActionTrace;
  package$actions.ActionWaitForFrame2 = ActionWaitForFrame2;
  package$actions.ActionAdd2 = ActionAdd2;
  package$actions.ActionBitAnd = ActionBitAnd;
  package$actions.ActionBitLShift = ActionBitLShift;
  package$actions.ActionBitOr = ActionBitOr;
  package$actions.ActionBitRShift = ActionBitRShift;
  package$actions.ActionBitURShift = ActionBitURShift;
  package$actions.ActionBitXor = ActionBitXor;
  package$actions.ActionCallFunction = ActionCallFunction;
  package$actions.ActionCallMethod = ActionCallMethod;
  package$actions.ActionConstantPool = ActionConstantPool;
  package$actions.ActionDecrement = ActionDecrement;
  package$actions.ActionDefineFunction = ActionDefineFunction;
  package$actions.ActionDefineLocal = ActionDefineLocal;
  package$actions.ActionDefineLocal2 = ActionDefineLocal2;
  package$actions.ActionDelete = ActionDelete;
  package$actions.ActionDelete2 = ActionDelete2;
  package$actions.ActionEnumerate = ActionEnumerate;
  package$actions.ActionEquals2 = ActionEquals2;
  package$actions.ActionGetMember = ActionGetMember;
  package$actions.ActionIncrement = ActionIncrement;
  package$actions.ActionInitArray = ActionInitArray;
  package$actions.ActionInitObject = ActionInitObject;
  package$actions.ActionLess2 = ActionLess2;
  package$actions.ActionModulo = ActionModulo;
  package$actions.ActionNewMethod = ActionNewMethod;
  package$actions.ActionNewObject = ActionNewObject;
  package$actions.ActionPushDuplicate = ActionPushDuplicate;
  package$actions.ActionReturn = ActionReturn;
  package$actions.ActionSetMember = ActionSetMember;
  package$actions.ActionStackSwap = ActionStackSwap;
  package$actions.ActionStoreRegister = ActionStoreRegister;
  package$actions.ActionTargetPath = ActionTargetPath;
  package$actions.ActionToNumber = ActionToNumber;
  package$actions.ActionToString = ActionToString;
  package$actions.ActionTypeOf = ActionTypeOf;
  package$actions.ActionWith = ActionWith;
  package$actions.ActionEnumerate2 = ActionEnumerate2;
  package$actions.ActionGreater = ActionGreater;
  package$actions.ActionInstanceOf = ActionInstanceOf;
  package$actions.ActionStrictEquals = ActionStrictEquals;
  package$actions.ActionStringGreater = ActionStringGreater;
  package$actions.ActionCastOp = ActionCastOp;
  package$actions.ActionDefineFunction2 = ActionDefineFunction2;
  package$actions.ActionExtends = ActionExtends;
  package$actions.ActionImplementsOp = ActionImplementsOp;
  package$actions.ActionThrow = ActionThrow;
  package$actions.ActionTry = ActionTry;
  var package$consts = package$data.consts || (package$data.consts = {});
  Object.defineProperty(package$consts, 'ActionValueType', {
    get: ActionValueType_getInstance
  });
  Object.defineProperty(BitmapFormat, 'BIT_8', {
    get: BitmapFormat$BIT_8_getInstance
  });
  Object.defineProperty(BitmapFormat, 'BIT_15', {
    get: BitmapFormat$BIT_15_getInstance
  });
  Object.defineProperty(BitmapFormat, 'BIT_24_32', {
    get: BitmapFormat$BIT_24_32_getInstance
  });
  Object.defineProperty(BitmapFormat, 'UNKNOWN', {
    get: BitmapFormat$UNKNOWN_getInstance
  });
  Object.defineProperty(BitmapFormat, 'Companion', {
    get: BitmapFormat$Companion_getInstance
  });
  package$consts.BitmapFormat = BitmapFormat;
  Object.defineProperty(package$consts, 'BitmapType', {
    get: BitmapType_getInstance
  });
  Object.defineProperty(package$consts, 'BlendMode', {
    get: BlendMode_getInstance
  });
  Object.defineProperty(package$consts, 'CSMTableHint', {
    get: CSMTableHint_getInstance
  });
  Object.defineProperty(GradientInterpolationMode, 'NORMAL', {
    get: GradientInterpolationMode$NORMAL_getInstance
  });
  Object.defineProperty(GradientInterpolationMode, 'LINEAR', {
    get: GradientInterpolationMode$LINEAR_getInstance
  });
  Object.defineProperty(GradientInterpolationMode, 'Companion', {
    get: GradientInterpolationMode$Companion_getInstance
  });
  package$consts.GradientInterpolationMode = GradientInterpolationMode;
  Object.defineProperty(GradientSpreadMode, 'PAD', {
    get: GradientSpreadMode$PAD_getInstance
  });
  Object.defineProperty(GradientSpreadMode, 'REFLECT', {
    get: GradientSpreadMode$REFLECT_getInstance
  });
  Object.defineProperty(GradientSpreadMode, 'REPEAT', {
    get: GradientSpreadMode$REPEAT_getInstance
  });
  Object.defineProperty(GradientSpreadMode, 'Companion', {
    get: GradientSpreadMode$Companion_getInstance
  });
  package$consts.GradientSpreadMode = GradientSpreadMode;
  Object.defineProperty(ScaleMode, 'NONE', {
    get: ScaleMode$NONE_getInstance
  });
  Object.defineProperty(ScaleMode, 'HORIZONTAL', {
    get: ScaleMode$HORIZONTAL_getInstance
  });
  Object.defineProperty(ScaleMode, 'VERTICAL', {
    get: ScaleMode$VERTICAL_getInstance
  });
  Object.defineProperty(ScaleMode, 'NORMAL', {
    get: ScaleMode$NORMAL_getInstance
  });
  Object.defineProperty(ScaleMode, 'Companion', {
    get: ScaleMode$Companion_getInstance
  });
  package$consts.ScaleMode = ScaleMode;
  Object.defineProperty(LineCapsStyle, 'ROUND', {
    get: LineCapsStyle$ROUND_getInstance
  });
  Object.defineProperty(LineCapsStyle, 'NO', {
    get: LineCapsStyle$NO_getInstance
  });
  Object.defineProperty(LineCapsStyle, 'SQUARE', {
    get: LineCapsStyle$SQUARE_getInstance
  });
  Object.defineProperty(LineCapsStyle, 'Companion', {
    get: LineCapsStyle$Companion_getInstance
  });
  package$consts.LineCapsStyle = LineCapsStyle;
  Object.defineProperty(package$consts, 'LineJointStyle', {
    get: LineJointStyle_getInstance
  });
  Object.defineProperty(package$consts, 'SoundCompression', {
    get: SoundCompression_getInstance
  });
  Object.defineProperty(package$consts, 'SoundRate', {
    get: SoundRate_getInstance
  });
  Object.defineProperty(package$consts, 'SoundSize', {
    get: SoundSize_getInstance
  });
  Object.defineProperty(package$consts, 'SoundType', {
    get: SoundType_getInstance
  });
  Object.defineProperty(package$consts, 'VideoCodecID', {
    get: VideoCodecID_getInstance
  });
  Object.defineProperty(package$consts, 'VideoDeblockingType', {
    get: VideoDeblockingType_getInstance
  });
  Object.defineProperty(SWFActionValue, 'Companion', {
    get: SWFActionValue$Companion_getInstance
  });
  package$data.SWFActionValue = SWFActionValue;
  package$data.SWFButtonCondAction = SWFButtonCondAction;
  package$data.SWFButtonRecord = SWFButtonRecord;
  package$data.SWFClipActionRecord = SWFClipActionRecord;
  package$data.SWFClipActions = SWFClipActions;
  package$data.SWFClipEventFlags = SWFClipEventFlags;
  package$data.SWFColorTransform = SWFColorTransform;
  package$data.SWFColorTransformWithAlpha = SWFColorTransformWithAlpha;
  package$data.SWFFillStyle = SWFFillStyle;
  package$data.SWFFocalGradient = SWFFocalGradient;
  package$data.SWFFrameLabel = SWFFrameLabel;
  package$data.SWFGlyphEntry = SWFGlyphEntry;
  package$data.SWFGradient = SWFGradient;
  package$data.SWFGradientRecord = SWFGradientRecord;
  package$data.SWFKerningRecord = SWFKerningRecord;
  package$data.SWFLineStyle = SWFLineStyle;
  package$data.SWFLineStyle2 = SWFLineStyle2;
  package$data.SWFMatrix = SWFMatrix;
  package$data.SWFMorphFillStyle = SWFMorphFillStyle;
  package$data.SWFMorphFocalGradient = SWFMorphFocalGradient;
  package$data.SWFMorphGradient = SWFMorphGradient;
  package$data.SWFMorphGradientRecord = SWFMorphGradientRecord;
  package$data.SWFMorphLineStyle = SWFMorphLineStyle;
  package$data.SWFMorphLineStyle2 = SWFMorphLineStyle2;
  package$data.SWFRawTag = SWFRawTag;
  package$data.SWFRecordHeader = SWFRecordHeader;
  package$data.SWFRectangle = SWFRectangle;
  package$data.SWFRegisterParam = SWFRegisterParam;
  package$data.SWFScene = SWFScene;
  package$data.SWFShape = SWFShape;
  Object.defineProperty(SWFShapeRecord, 'Companion', {
    get: SWFShapeRecord$Companion_getInstance
  });
  package$data.SWFShapeRecord = SWFShapeRecord;
  package$data.SWFShapeRecordCurvedEdge = SWFShapeRecordCurvedEdge;
  Object.defineProperty(package$data, 'SWFShapeRecordEnd', {
    get: SWFShapeRecordEnd_getInstance
  });
  package$data.SWFShapeRecordStraightEdge = SWFShapeRecordStraightEdge;
  package$data.SWFShapeRecordStyleChange = SWFShapeRecordStyleChange;
  package$data.SWFShapeWithStyle = SWFShapeWithStyle;
  package$data.SWFSoundEnvelope_init_84a5z1$ = SWFSoundEnvelope_init;
  package$data.SWFSoundEnvelope = SWFSoundEnvelope;
  package$data.SWFSoundInfo = SWFSoundInfo;
  package$data.SWFSymbol_init_84a5z1$ = SWFSymbol_init;
  package$data.SWFSymbol = SWFSymbol;
  package$data.SWFTextRecord = SWFTextRecord;
  package$data.SWFZoneData_init_84a5z1$ = SWFZoneData_init;
  package$data.SWFZoneData = SWFZoneData;
  package$data.SWFZoneRecord_init_84a5z1$ = SWFZoneRecord_init;
  package$data.SWFZoneRecord = SWFZoneRecord;
  Object.defineProperty(GradientType, 'LINEAR', {
    get: GradientType$LINEAR_getInstance
  });
  Object.defineProperty(GradientType, 'RADIAL', {
    get: GradientType$RADIAL_getInstance
  });
  package$data.GradientType = GradientType;
  var package$etc = package$data.etc || (package$data.etc = {});
  package$etc.CurvedEdge = CurvedEdge;
  package$etc.StraightEdge = StraightEdge;
  package$etc.IEdge = IEdge;
  Object.defineProperty(MPEGFrame, 'Companion', {
    get: MPEGFrame$Companion_getInstance
  });
  package$etc.MPEGFrame = MPEGFrame;
  var package$filters = package$data.filters || (package$data.filters = {});
  package$filters.IFilter = IFilter;
  package$filters.Filter = Filter;
  Object.defineProperty(FilterType, 'FULL', {
    get: FilterType$FULL_getInstance
  });
  Object.defineProperty(FilterType, 'INNER', {
    get: FilterType$INNER_getInstance
  });
  Object.defineProperty(FilterType, 'OUTER', {
    get: FilterType$OUTER_getInstance
  });
  package$filters.FilterType = FilterType;
  package$filters.FilterBevel = FilterBevel;
  package$filters.FilterBlur = FilterBlur;
  package$filters.FilterColorMatrix = FilterColorMatrix;
  package$filters.FilterConvolution = FilterConvolution;
  package$filters.FilterDropShadow = FilterDropShadow;
  package$filters.FilterGlow = FilterGlow;
  package$filters.FilterGradientBevel = FilterGradientBevel;
  package$filters.FilterGradientGlow = FilterGradientGlow;
  var package$exporters = package$as3swf.exporters || (package$as3swf.exporters = {});
  package$exporters.ShapeExporter = ShapeExporter;
  package$exporters.LoggerShapeExporter = LoggerShapeExporter;
  package$exporters.ShapeExporterBoundsBuilder = ShapeExporterBoundsBuilder;
  var package$factories = package$as3swf.factories || (package$as3swf.factories = {});
  package$factories.ISWFTagFactory = ISWFTagFactory;
  Object.defineProperty(package$factories, 'SWFActionFactory', {
    get: SWFActionFactory_getInstance
  });
  Object.defineProperty(package$factories, 'SWFFilterFactory', {
    get: SWFFilterFactory_getInstance
  });
  package$factories.SWFTagFactory = SWFTagFactory;
  var package$tags = package$as3swf.tags || (package$as3swf.tags = {});
  package$tags.ITag = ITag;
  package$tags._BaseTag = _BaseTag;
  package$tags.IDefinitionTag = IDefinitionTag;
  package$tags.IDisplayListTag = IDisplayListTag;
  Object.defineProperty(Tag, 'Companion', {
    get: Tag$Companion_getInstance
  });
  package$tags.Tag = Tag;
  Object.defineProperty(TagCSMTextSettings, 'Companion', {
    get: TagCSMTextSettings$Companion_getInstance
  });
  package$tags.TagCSMTextSettings = TagCSMTextSettings;
  Object.defineProperty(TagDebugID, 'Companion', {
    get: TagDebugID$Companion_getInstance
  });
  package$tags.TagDebugID = TagDebugID;
  Object.defineProperty(TagDefineBinaryData, 'Companion', {
    get: TagDefineBinaryData$Companion_getInstance
  });
  package$tags.TagDefineBinaryData = TagDefineBinaryData;
  Object.defineProperty(TagDefineBits, 'Companion', {
    get: TagDefineBits$Companion_getInstance
  });
  package$tags.TagDefineBits = TagDefineBits;
  Object.defineProperty(TagDefineBitsJPEG2, 'Companion', {
    get: TagDefineBitsJPEG2$Companion_getInstance
  });
  package$tags.TagDefineBitsJPEG2 = TagDefineBitsJPEG2;
  Object.defineProperty(TagDefineBitsJPEG3, 'Companion', {
    get: TagDefineBitsJPEG3$Companion_getInstance
  });
  package$tags.TagDefineBitsJPEG3 = TagDefineBitsJPEG3;
  Object.defineProperty(TagDefineBitsJPEG4, 'Companion', {
    get: TagDefineBitsJPEG4$Companion_getInstance
  });
  package$tags.TagDefineBitsJPEG4 = TagDefineBitsJPEG4;
  Object.defineProperty(TagDefineBitsLossless, 'Companion', {
    get: TagDefineBitsLossless$Companion_getInstance
  });
  package$tags.TagDefineBitsLossless = TagDefineBitsLossless;
  Object.defineProperty(TagDefineBitsLossless2, 'Companion', {
    get: TagDefineBitsLossless2$Companion_getInstance
  });
  package$tags.TagDefineBitsLossless2 = TagDefineBitsLossless2;
  Object.defineProperty(TagDefineButton, 'Companion', {
    get: TagDefineButton$Companion_getInstance
  });
  package$tags.TagDefineButton = TagDefineButton;
  Object.defineProperty(TagDefineButton2, 'Companion', {
    get: TagDefineButton2$Companion_getInstance
  });
  package$tags.TagDefineButton2 = TagDefineButton2;
  Object.defineProperty(TagDefineButtonCxform, 'Companion', {
    get: TagDefineButtonCxform$Companion_getInstance
  });
  package$tags.TagDefineButtonCxform = TagDefineButtonCxform;
  Object.defineProperty(TagDefineButtonSound, 'Companion', {
    get: TagDefineButtonSound$Companion_getInstance
  });
  package$tags.TagDefineButtonSound = TagDefineButtonSound;
  Object.defineProperty(TagDefineEditText, 'Companion', {
    get: TagDefineEditText$Companion_getInstance
  });
  package$tags.TagDefineEditText = TagDefineEditText;
  Object.defineProperty(TagDefineFont, 'Companion', {
    get: TagDefineFont$Companion_getInstance
  });
  package$tags.TagDefineFont = TagDefineFont;
  Object.defineProperty(TagDefineFont2, 'Companion', {
    get: TagDefineFont2$Companion_getInstance
  });
  package$tags.TagDefineFont2 = TagDefineFont2;
  Object.defineProperty(TagDefineFont3, 'Companion', {
    get: TagDefineFont3$Companion_getInstance
  });
  package$tags.TagDefineFont3 = TagDefineFont3;
  Object.defineProperty(TagDefineFont4, 'Companion', {
    get: TagDefineFont4$Companion_getInstance
  });
  package$tags.TagDefineFont4 = TagDefineFont4;
  Object.defineProperty(TagDefineFontAlignZones, 'Companion', {
    get: TagDefineFontAlignZones$Companion_getInstance
  });
  package$tags.TagDefineFontAlignZones = TagDefineFontAlignZones;
  Object.defineProperty(TagDefineFontInfo, 'Companion', {
    get: TagDefineFontInfo$Companion_getInstance
  });
  package$tags.TagDefineFontInfo = TagDefineFontInfo;
  Object.defineProperty(TagDefineFontInfo2, 'Companion', {
    get: TagDefineFontInfo2$Companion_getInstance
  });
  package$tags.TagDefineFontInfo2 = TagDefineFontInfo2;
  Object.defineProperty(TagDefineFontName, 'Companion', {
    get: TagDefineFontName$Companion_getInstance
  });
  package$tags.TagDefineFontName = TagDefineFontName;
  Object.defineProperty(TagDefineMorphShape, 'Companion', {
    get: TagDefineMorphShape$Companion_getInstance
  });
  package$tags.TagDefineMorphShape = TagDefineMorphShape;
  Object.defineProperty(TagDefineMorphShape2, 'Companion', {
    get: TagDefineMorphShape2$Companion_getInstance
  });
  package$tags.TagDefineMorphShape2 = TagDefineMorphShape2;
  Object.defineProperty(TagDefineScalingGrid, 'Companion', {
    get: TagDefineScalingGrid$Companion_getInstance
  });
  package$tags.TagDefineScalingGrid = TagDefineScalingGrid;
  Object.defineProperty(TagDefineSceneAndFrameLabelData, 'Companion', {
    get: TagDefineSceneAndFrameLabelData$Companion_getInstance
  });
  package$tags.TagDefineSceneAndFrameLabelData = TagDefineSceneAndFrameLabelData;
  Object.defineProperty(TagDefineShape, 'Companion', {
    get: TagDefineShape$Companion_getInstance
  });
  package$tags.TagDefineShape = TagDefineShape;
  Object.defineProperty(TagDefineShape2, 'Companion', {
    get: TagDefineShape2$Companion_getInstance
  });
  package$tags.TagDefineShape2 = TagDefineShape2;
  Object.defineProperty(TagDefineShape3, 'Companion', {
    get: TagDefineShape3$Companion_getInstance
  });
  package$tags.TagDefineShape3 = TagDefineShape3;
  Object.defineProperty(TagDefineShape4, 'Companion', {
    get: TagDefineShape4$Companion_getInstance
  });
  package$tags.TagDefineShape4 = TagDefineShape4;
  Object.defineProperty(TagDefineSound, 'Companion', {
    get: TagDefineSound$Companion_getInstance
  });
  package$tags.TagDefineSound = TagDefineSound;
  Object.defineProperty(TagDefineSprite, 'Companion', {
    get: TagDefineSprite$Companion_getInstance
  });
  package$tags.TagDefineSprite = TagDefineSprite;
  Object.defineProperty(TagDefineText, 'Companion', {
    get: TagDefineText$Companion_getInstance
  });
  package$tags.TagDefineText = TagDefineText;
  Object.defineProperty(TagDefineText2, 'Companion', {
    get: TagDefineText2$Companion_getInstance
  });
  package$tags.TagDefineText2 = TagDefineText2;
  Object.defineProperty(TagDefineVideoStream, 'Companion', {
    get: TagDefineVideoStream$Companion_getInstance
  });
  package$tags.TagDefineVideoStream = TagDefineVideoStream;
  Object.defineProperty(TagDoABC, 'Companion', {
    get: TagDoABC$Companion_getInstance
  });
  package$tags.TagDoABC = TagDoABC;
  Object.defineProperty(TagDoABCDeprecated, 'Companion', {
    get: TagDoABCDeprecated$Companion_getInstance
  });
  package$tags.TagDoABCDeprecated = TagDoABCDeprecated;
  Object.defineProperty(TagDoAction, 'Companion', {
    get: TagDoAction$Companion_getInstance
  });
  package$tags.TagDoAction = TagDoAction;
  Object.defineProperty(TagDoInitAction, 'Companion', {
    get: TagDoInitAction$Companion_getInstance
  });
  package$tags.TagDoInitAction = TagDoInitAction;
  Object.defineProperty(TagEnableDebugger, 'Companion', {
    get: TagEnableDebugger$Companion_getInstance
  });
  package$tags.TagEnableDebugger = TagEnableDebugger;
  Object.defineProperty(TagEnableDebugger2, 'Companion', {
    get: TagEnableDebugger2$Companion_getInstance
  });
  package$tags.TagEnableDebugger2 = TagEnableDebugger2;
  Object.defineProperty(TagEnableTelemetry, 'Companion', {
    get: TagEnableTelemetry$Companion_getInstance
  });
  package$tags.TagEnableTelemetry = TagEnableTelemetry;
  Object.defineProperty(TagEnd, 'Companion', {
    get: TagEnd$Companion_getInstance
  });
  package$tags.TagEnd = TagEnd;
  Object.defineProperty(TagExportAssets, 'Companion', {
    get: TagExportAssets$Companion_getInstance
  });
  package$tags.TagExportAssets = TagExportAssets;
  Object.defineProperty(TagFileAttributes, 'Companion', {
    get: TagFileAttributes$Companion_getInstance
  });
  package$tags.TagFileAttributes = TagFileAttributes;
  Object.defineProperty(TagFrameLabel, 'Companion', {
    get: TagFrameLabel$Companion_getInstance
  });
  package$tags.TagFrameLabel = TagFrameLabel;
  Object.defineProperty(TagImportAssets, 'Companion', {
    get: TagImportAssets$Companion_getInstance
  });
  package$tags.TagImportAssets = TagImportAssets;
  Object.defineProperty(TagImportAssets2, 'Companion', {
    get: TagImportAssets2$Companion_getInstance
  });
  package$tags.TagImportAssets2 = TagImportAssets2;
  Object.defineProperty(TagJPEGTables, 'Companion', {
    get: TagJPEGTables$Companion_getInstance
  });
  package$tags.TagJPEGTables = TagJPEGTables;
  Object.defineProperty(TagMetadata, 'Companion', {
    get: TagMetadata$Companion_getInstance
  });
  package$tags.TagMetadata = TagMetadata;
  Object.defineProperty(TagNameCharacter, 'Companion', {
    get: TagNameCharacter$Companion_getInstance
  });
  package$tags.TagNameCharacter = TagNameCharacter;
  Object.defineProperty(TagPlaceObject, 'Companion', {
    get: TagPlaceObject$Companion_getInstance
  });
  package$tags.TagPlaceObject = TagPlaceObject;
  Object.defineProperty(TagPlaceObject2, 'Companion', {
    get: TagPlaceObject2$Companion_getInstance
  });
  package$tags.TagPlaceObject2 = TagPlaceObject2;
  Object.defineProperty(TagPlaceObject3, 'Companion', {
    get: TagPlaceObject3$Companion_getInstance
  });
  package$tags.TagPlaceObject3 = TagPlaceObject3;
  Object.defineProperty(TagPlaceObject4, 'Companion', {
    get: TagPlaceObject4$Companion_getInstance
  });
  package$tags.TagPlaceObject4 = TagPlaceObject4;
  Object.defineProperty(TagProductInfo, 'Companion', {
    get: TagProductInfo$Companion_getInstance
  });
  package$tags.TagProductInfo = TagProductInfo;
  Object.defineProperty(TagPathsArePostScript, 'Companion', {
    get: TagPathsArePostScript$Companion_getInstance
  });
  package$tags.TagPathsArePostScript = TagPathsArePostScript;
  Object.defineProperty(TagProtect, 'Companion', {
    get: TagProtect$Companion_getInstance
  });
  package$tags.TagProtect = TagProtect;
  Object.defineProperty(TagRemoveObject, 'Companion', {
    get: TagRemoveObject$Companion_getInstance
  });
  package$tags.TagRemoveObject = TagRemoveObject;
  Object.defineProperty(TagRemoveObject2, 'Companion', {
    get: TagRemoveObject2$Companion_getInstance
  });
  package$tags.TagRemoveObject2 = TagRemoveObject2;
  Object.defineProperty(TagScriptLimits, 'Companion', {
    get: TagScriptLimits$Companion_getInstance
  });
  package$tags.TagScriptLimits = TagScriptLimits;
  Object.defineProperty(TagSetBackgroundColor, 'Companion', {
    get: TagSetBackgroundColor$Companion_getInstance
  });
  package$tags.TagSetBackgroundColor = TagSetBackgroundColor;
  Object.defineProperty(TagSetTabIndex, 'Companion', {
    get: TagSetTabIndex$Companion_getInstance
  });
  package$tags.TagSetTabIndex = TagSetTabIndex;
  Object.defineProperty(TagShowFrame, 'Companion', {
    get: TagShowFrame$Companion_getInstance
  });
  package$tags.TagShowFrame = TagShowFrame;
  Object.defineProperty(TagSoundStreamBlock, 'Companion', {
    get: TagSoundStreamBlock$Companion_getInstance
  });
  package$tags.TagSoundStreamBlock = TagSoundStreamBlock;
  Object.defineProperty(TagSoundStreamHead, 'Companion', {
    get: TagSoundStreamHead$Companion_getInstance
  });
  package$tags.TagSoundStreamHead = TagSoundStreamHead;
  Object.defineProperty(TagSoundStreamHead2, 'Companion', {
    get: TagSoundStreamHead2$Companion_getInstance
  });
  package$tags.TagSoundStreamHead2 = TagSoundStreamHead2;
  Object.defineProperty(TagStartSound, 'Companion', {
    get: TagStartSound$Companion_getInstance
  });
  package$tags.TagStartSound = TagStartSound;
  Object.defineProperty(TagStartSound2, 'Companion', {
    get: TagStartSound2$Companion_getInstance
  });
  package$tags.TagStartSound2 = TagStartSound2;
  Object.defineProperty(TagSymbolClass, 'Companion', {
    get: TagSymbolClass$Companion_getInstance
  });
  package$tags.TagSymbolClass = TagSymbolClass;
  package$tags.TagUnknown = TagUnknown;
  Object.defineProperty(TagVideoFrame, 'Companion', {
    get: TagVideoFrame$Companion_getInstance
  });
  package$tags.TagVideoFrame = TagVideoFrame;
  Object.defineProperty(TagSWFEncryptActions, 'Companion', {
    get: TagSWFEncryptActions$Companion_getInstance
  });
  package$tags.TagSWFEncryptActions = TagSWFEncryptActions;
  Object.defineProperty(TagSWFEncryptSignature, 'Companion', {
    get: TagSWFEncryptSignature$Companion_getInstance
  });
  package$tags.TagSWFEncryptSignature = TagSWFEncryptSignature;
  var package$timeline = package$as3swf.timeline || (package$as3swf.timeline = {});
  package$timeline.Frame = Frame;
  package$timeline.FrameObject = FrameObject;
  package$timeline.Layer = Layer;
  Object.defineProperty(LayerStrip, 'Companion', {
    get: LayerStrip$Companion_getInstance
  });
  package$timeline.LayerStrip = LayerStrip;
  package$timeline.Scene = Scene;
  package$timeline.SoundStream = SoundStream;
  var package$utils = package$as3swf.utils || (package$as3swf.utils = {});
  Object.defineProperty(package$utils, 'ColorUtils', {
    get: ColorUtils_getInstance
  });
  Object.defineProperty(package$utils, 'MatrixUtils', {
    get: MatrixUtils_getInstance
  });
  Object.defineProperty(package$utils, 'NumberUtils', {
    get: NumberUtils_getInstance
  });
  package$utils.toFlash_964n91$ = toFlash;
  package$utils.FlashByteArray_init_fqrh44$ = FlashByteArray_init;
  package$utils.FlashByteArray = FlashByteArray;
  package$utils.BitArray = BitArray;
  Object.defineProperty(Endian, 'LITTLE_ENDIAN', {
    get: Endian$LITTLE_ENDIAN_getInstance
  });
  Object.defineProperty(Endian, 'BIG_ENDIAN', {
    get: Endian$BIG_ENDIAN_getInstance
  });
  package$utils.Endian = Endian;
  Object.defineProperty(ABC$Namespace, 'Companion', {
    get: ABC$Namespace$Companion_getInstance
  });
  ABC.Namespace = ABC$Namespace;
  ABC.AbstractMultiname = ABC$AbstractMultiname;
  Object.defineProperty(ABC, 'EmptyMultiname', {
    get: ABC$EmptyMultiname_getInstance
  });
  ABC.ABCQName = ABC$ABCQName;
  ABC.QNameA = ABC$QNameA;
  ABC.RTQName = ABC$RTQName;
  ABC.RTQNameA = ABC$RTQNameA;
  Object.defineProperty(ABC, 'RTQNameL', {
    get: ABC$RTQNameL_getInstance
  });
  Object.defineProperty(ABC, 'RTQNameLA', {
    get: ABC$RTQNameLA_getInstance
  });
  ABC.Multiname = ABC$Multiname;
  ABC.MultinameA = ABC$MultinameA;
  ABC.MultinameL = ABC$MultinameL;
  ABC.MultinameLA = ABC$MultinameLA;
  ABC.TypeName = ABC$TypeName;
  ABC.Metadata = ABC$Metadata;
  ABC.MethodBody = ABC$MethodBody;
  ABC.ExceptionInfo = ABC$ExceptionInfo;
  ABC.Trait = ABC$Trait;
  ABC.TraitSlot = ABC$TraitSlot;
  ABC.TraitMethod = ABC$TraitMethod;
  ABC.TraitClass = ABC$TraitClass;
  ABC.TraitFunction = ABC$TraitFunction;
  ABC.InstanceInfo = ABC$InstanceInfo;
  ABC.ClassInfo = ABC$ClassInfo;
  ABC.TypeInfo = ABC$TypeInfo;
  ABC.ScriptInfo = ABC$ScriptInfo;
  ABC.MethodDesc = ABC$MethodDesc;
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korfl = package$soywiz.korfl || (package$soywiz.korfl = {});
  var package$abc = package$korfl.abc || (package$korfl.abc = {});
  package$abc.ABC = ABC;
  package$abc.readU30_ucmi9i$ = readU30;
  package$abc.AbcConstantPool = AbcConstantPool;
  Object.defineProperty(AbcOpcode, 'Breakpoint', {
    get: AbcOpcode$Breakpoint_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Nop', {
    get: AbcOpcode$Nop_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Throw', {
    get: AbcOpcode$Throw_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetSuper', {
    get: AbcOpcode$GetSuper_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetSuper', {
    get: AbcOpcode$SetSuper_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DefaultXmlNamespace', {
    get: AbcOpcode$DefaultXmlNamespace_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DefaultXmlNamespaceL', {
    get: AbcOpcode$DefaultXmlNamespaceL_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Kill', {
    get: AbcOpcode$Kill_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Label', {
    get: AbcOpcode$Label_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfNotLessThan', {
    get: AbcOpcode$IfNotLessThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfNotLessEqual', {
    get: AbcOpcode$IfNotLessEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfNotGreaterThan', {
    get: AbcOpcode$IfNotGreaterThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfNotGreaterEqual', {
    get: AbcOpcode$IfNotGreaterEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Jump', {
    get: AbcOpcode$Jump_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfTrue', {
    get: AbcOpcode$IfTrue_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfFalse', {
    get: AbcOpcode$IfFalse_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfEqual', {
    get: AbcOpcode$IfEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfNotEqual', {
    get: AbcOpcode$IfNotEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfLessThan', {
    get: AbcOpcode$IfLessThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfLessEqual', {
    get: AbcOpcode$IfLessEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfGreaterThan', {
    get: AbcOpcode$IfGreaterThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfGreaterEqual', {
    get: AbcOpcode$IfGreaterEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfStrictEqual', {
    get: AbcOpcode$IfStrictEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IfStrictNotEqual', {
    get: AbcOpcode$IfStrictNotEqual_getInstance
  });
  Object.defineProperty(AbcOpcode, 'LookupSwitch', {
    get: AbcOpcode$LookupSwitch_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushWith', {
    get: AbcOpcode$PushWith_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PopScope', {
    get: AbcOpcode$PopScope_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NextName', {
    get: AbcOpcode$NextName_getInstance
  });
  Object.defineProperty(AbcOpcode, 'HasNext', {
    get: AbcOpcode$HasNext_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushNull', {
    get: AbcOpcode$PushNull_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushUndefined', {
    get: AbcOpcode$PushUndefined_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NextValue', {
    get: AbcOpcode$NextValue_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushByte', {
    get: AbcOpcode$PushByte_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushShort', {
    get: AbcOpcode$PushShort_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushTrue', {
    get: AbcOpcode$PushTrue_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushFalse', {
    get: AbcOpcode$PushFalse_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushNaN', {
    get: AbcOpcode$PushNaN_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Pop', {
    get: AbcOpcode$Pop_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Dup', {
    get: AbcOpcode$Dup_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Swap', {
    get: AbcOpcode$Swap_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushString', {
    get: AbcOpcode$PushString_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushInt', {
    get: AbcOpcode$PushInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushUInt', {
    get: AbcOpcode$PushUInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushDouble', {
    get: AbcOpcode$PushDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushScope', {
    get: AbcOpcode$PushScope_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushNamespace', {
    get: AbcOpcode$PushNamespace_getInstance
  });
  Object.defineProperty(AbcOpcode, 'HasNext2', {
    get: AbcOpcode$HasNext2_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushDecimal', {
    get: AbcOpcode$PushDecimal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'PushDNaN', {
    get: AbcOpcode$PushDNaN_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewFunction', {
    get: AbcOpcode$NewFunction_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Call', {
    get: AbcOpcode$Call_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Construct', {
    get: AbcOpcode$Construct_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallMethod', {
    get: AbcOpcode$CallMethod_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallStatic', {
    get: AbcOpcode$CallStatic_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallSuper', {
    get: AbcOpcode$CallSuper_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallProperty', {
    get: AbcOpcode$CallProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ReturnVoid', {
    get: AbcOpcode$ReturnVoid_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ReturnValue', {
    get: AbcOpcode$ReturnValue_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConstructSuper', {
    get: AbcOpcode$ConstructSuper_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConstructProp', {
    get: AbcOpcode$ConstructProp_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallSuperId', {
    get: AbcOpcode$CallSuperId_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallPropLex', {
    get: AbcOpcode$CallPropLex_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallInterface', {
    get: AbcOpcode$CallInterface_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallSuperVoid', {
    get: AbcOpcode$CallSuperVoid_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CallPropVoid', {
    get: AbcOpcode$CallPropVoid_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ApplyType', {
    get: AbcOpcode$ApplyType_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewObject', {
    get: AbcOpcode$NewObject_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewArray', {
    get: AbcOpcode$NewArray_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewActivation', {
    get: AbcOpcode$NewActivation_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewClass', {
    get: AbcOpcode$NewClass_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetDescendants', {
    get: AbcOpcode$GetDescendants_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NewCatch', {
    get: AbcOpcode$NewCatch_getInstance
  });
  Object.defineProperty(AbcOpcode, 'FindPropGlobalStrict', {
    get: AbcOpcode$FindPropGlobalStrict_getInstance
  });
  Object.defineProperty(AbcOpcode, 'FindPropGlobal', {
    get: AbcOpcode$FindPropGlobal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'FindPropStrict', {
    get: AbcOpcode$FindPropStrict_getInstance
  });
  Object.defineProperty(AbcOpcode, 'FindProperty', {
    get: AbcOpcode$FindProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'FindDef', {
    get: AbcOpcode$FindDef_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLex', {
    get: AbcOpcode$GetLex_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetProperty', {
    get: AbcOpcode$SetProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLocal', {
    get: AbcOpcode$GetLocal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetLocal', {
    get: AbcOpcode$SetLocal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetGlobalScope', {
    get: AbcOpcode$GetGlobalScope_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetScopeObject', {
    get: AbcOpcode$GetScopeObject_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetProperty', {
    get: AbcOpcode$GetProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetPropertyLate', {
    get: AbcOpcode$GetPropertyLate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'InitProperty', {
    get: AbcOpcode$InitProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetPropertyLate', {
    get: AbcOpcode$SetPropertyLate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DeleteProperty', {
    get: AbcOpcode$DeleteProperty_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DeletePropertyLate', {
    get: AbcOpcode$DeletePropertyLate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetSlot', {
    get: AbcOpcode$GetSlot_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetSlot', {
    get: AbcOpcode$SetSlot_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetGlobalSlot', {
    get: AbcOpcode$GetGlobalSlot_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetGlobalSlot', {
    get: AbcOpcode$SetGlobalSlot_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertString', {
    get: AbcOpcode$ConvertString_getInstance
  });
  Object.defineProperty(AbcOpcode, 'EscXmlElem', {
    get: AbcOpcode$EscXmlElem_getInstance
  });
  Object.defineProperty(AbcOpcode, 'EscXmlAttr', {
    get: AbcOpcode$EscXmlAttr_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertInt', {
    get: AbcOpcode$ConvertInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertUInt', {
    get: AbcOpcode$ConvertUInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertDouble', {
    get: AbcOpcode$ConvertDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertBoolean', {
    get: AbcOpcode$ConvertBoolean_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ConvertObject', {
    get: AbcOpcode$ConvertObject_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CheckFilter', {
    get: AbcOpcode$CheckFilter_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Coerce', {
    get: AbcOpcode$Coerce_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceBoolean', {
    get: AbcOpcode$CoerceBoolean_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceAny', {
    get: AbcOpcode$CoerceAny_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceInt', {
    get: AbcOpcode$CoerceInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceDouble', {
    get: AbcOpcode$CoerceDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceString', {
    get: AbcOpcode$CoerceString_getInstance
  });
  Object.defineProperty(AbcOpcode, 'AsType', {
    get: AbcOpcode$AsType_getInstance
  });
  Object.defineProperty(AbcOpcode, 'AsTypeLate', {
    get: AbcOpcode$AsTypeLate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceUInt', {
    get: AbcOpcode$CoerceUInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'CoerceObject', {
    get: AbcOpcode$CoerceObject_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Negate', {
    get: AbcOpcode$Negate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Increment', {
    get: AbcOpcode$Increment_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IncLocal', {
    get: AbcOpcode$IncLocal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Decrement', {
    get: AbcOpcode$Decrement_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DecLocal', {
    get: AbcOpcode$DecLocal_getInstance
  });
  Object.defineProperty(AbcOpcode, 'TypeOf', {
    get: AbcOpcode$TypeOf_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Not', {
    get: AbcOpcode$Not_getInstance
  });
  Object.defineProperty(AbcOpcode, 'BitNot', {
    get: AbcOpcode$BitNot_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Concat', {
    get: AbcOpcode$Concat_getInstance
  });
  Object.defineProperty(AbcOpcode, 'AddDouble', {
    get: AbcOpcode$AddDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Add', {
    get: AbcOpcode$Add_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Subtract', {
    get: AbcOpcode$Subtract_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Multiply', {
    get: AbcOpcode$Multiply_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Divide', {
    get: AbcOpcode$Divide_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Modulo', {
    get: AbcOpcode$Modulo_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ShiftLeft', {
    get: AbcOpcode$ShiftLeft_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ShiftRight', {
    get: AbcOpcode$ShiftRight_getInstance
  });
  Object.defineProperty(AbcOpcode, 'ShiftRightUnsigned', {
    get: AbcOpcode$ShiftRightUnsigned_getInstance
  });
  Object.defineProperty(AbcOpcode, 'BitAnd', {
    get: AbcOpcode$BitAnd_getInstance
  });
  Object.defineProperty(AbcOpcode, 'BitOr', {
    get: AbcOpcode$BitOr_getInstance
  });
  Object.defineProperty(AbcOpcode, 'BitXor', {
    get: AbcOpcode$BitXor_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Equals', {
    get: AbcOpcode$Equals_getInstance
  });
  Object.defineProperty(AbcOpcode, 'StrictEquals', {
    get: AbcOpcode$StrictEquals_getInstance
  });
  Object.defineProperty(AbcOpcode, 'LessThan', {
    get: AbcOpcode$LessThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'LessEquals', {
    get: AbcOpcode$LessEquals_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GreaterThan', {
    get: AbcOpcode$GreaterThan_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GreaterEquals', {
    get: AbcOpcode$GreaterEquals_getInstance
  });
  Object.defineProperty(AbcOpcode, 'InstanceOf', {
    get: AbcOpcode$InstanceOf_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IsType', {
    get: AbcOpcode$IsType_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IsTypeLate', {
    get: AbcOpcode$IsTypeLate_getInstance
  });
  Object.defineProperty(AbcOpcode, 'In', {
    get: AbcOpcode$In_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IncrementInt', {
    get: AbcOpcode$IncrementInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DecrementInt', {
    get: AbcOpcode$DecrementInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'IncLocalInt', {
    get: AbcOpcode$IncLocalInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DecLocalInt', {
    get: AbcOpcode$DecLocalInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'NegateInt', {
    get: AbcOpcode$NegateInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'AddInt', {
    get: AbcOpcode$AddInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SubtractInt', {
    get: AbcOpcode$SubtractInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'MultiplyInt', {
    get: AbcOpcode$MultiplyInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLocal0', {
    get: AbcOpcode$GetLocal0_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLocal1', {
    get: AbcOpcode$GetLocal1_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLocal2', {
    get: AbcOpcode$GetLocal2_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetLocal3', {
    get: AbcOpcode$GetLocal3_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetLocal0', {
    get: AbcOpcode$SetLocal0_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetLocal1', {
    get: AbcOpcode$SetLocal1_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetLocal2', {
    get: AbcOpcode$SetLocal2_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetLocal3', {
    get: AbcOpcode$SetLocal3_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Debug', {
    get: AbcOpcode$Debug_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DebugLine', {
    get: AbcOpcode$DebugLine_getInstance
  });
  Object.defineProperty(AbcOpcode, 'DebugFile', {
    get: AbcOpcode$DebugFile_getInstance
  });
  Object.defineProperty(AbcOpcode, 'BreakpointLine', {
    get: AbcOpcode$BreakpointLine_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetByte', {
    get: AbcOpcode$SetByte_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetShort', {
    get: AbcOpcode$SetShort_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetInt', {
    get: AbcOpcode$SetInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetFloat', {
    get: AbcOpcode$SetFloat_getInstance
  });
  Object.defineProperty(AbcOpcode, 'SetDouble', {
    get: AbcOpcode$SetDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetByte', {
    get: AbcOpcode$GetByte_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetShort', {
    get: AbcOpcode$GetShort_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetInt', {
    get: AbcOpcode$GetInt_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetFloat', {
    get: AbcOpcode$GetFloat_getInstance
  });
  Object.defineProperty(AbcOpcode, 'GetDouble', {
    get: AbcOpcode$GetDouble_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Sign1', {
    get: AbcOpcode$Sign1_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Sign8', {
    get: AbcOpcode$Sign8_getInstance
  });
  Object.defineProperty(AbcOpcode, 'Sign16', {
    get: AbcOpcode$Sign16_getInstance
  });
  AbcOpcode.KindContext = AbcOpcode$KindContext;
  Object.defineProperty(AbcOpcode$Kind, 'BasicOperation', {
    get: AbcOpcode$Kind$BasicOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'LabelOperation', {
    get: AbcOpcode$Kind$LabelOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'IntOperation', {
    get: AbcOpcode$Kind$IntOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'UIntOperation', {
    get: AbcOpcode$Kind$UIntOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'NumberOperation', {
    get: AbcOpcode$Kind$NumberOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'IntIntOperation', {
    get: AbcOpcode$Kind$IntIntOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'IntStringIntIntOperation', {
    get: AbcOpcode$Kind$IntStringIntIntOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'StringOperation', {
    get: AbcOpcode$Kind$StringOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'MultinameOperation', {
    get: AbcOpcode$Kind$MultinameOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'MultinameIntOperation', {
    get: AbcOpcode$Kind$MultinameIntOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'ConditionalJumpOperation', {
    get: AbcOpcode$Kind$ConditionalJumpOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'JumpOperation', {
    get: AbcOpcode$Kind$JumpOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'NewClassOperation', {
    get: AbcOpcode$Kind$NewClassOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'LookupSwitchOperation', {
    get: AbcOpcode$Kind$LookupSwitchOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'NamespaceOperation', {
    get: AbcOpcode$Kind$NamespaceOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'NewFunctionOperation', {
    get: AbcOpcode$Kind$NewFunctionOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'MethodOperation', {
    get: AbcOpcode$Kind$MethodOperation_getInstance
  });
  Object.defineProperty(AbcOpcode$Kind, 'NewCatchOperation', {
    get: AbcOpcode$Kind$NewCatchOperation_getInstance
  });
  AbcOpcode.Kind = AbcOpcode$Kind;
  Object.defineProperty(AbcOpcode, 'Companion', {
    get: AbcOpcode$Companion_getInstance
  });
  package$abc.AbcOpcode = AbcOpcode;
  Object.defineProperty(AbcOperation, 'Companion', {
    get: AbcOperation$Companion_getInstance
  });
  package$abc.AbcOperation = AbcOperation;
  package$abc.AbcBasicOperation = AbcBasicOperation;
  package$abc.AbcLabelOperation = AbcLabelOperation;
  package$abc.AbcLookupSwitchOperation = AbcLookupSwitchOperation;
  package$abc.AbcIntStringIntIntOperation = AbcIntStringIntIntOperation;
  package$abc.AbcIntOperation = AbcIntOperation;
  package$abc.AbcJumpOperation = AbcJumpOperation;
  package$abc.AbcStringOperation = AbcStringOperation;
  package$abc.AbcIntIntOperation = AbcIntIntOperation;
  package$abc.AbcDoubleOperation = AbcDoubleOperation;
  package$abc.AbcNewClassOperation = AbcNewClassOperation;
  package$abc.AbcMultinameOperation = AbcMultinameOperation;
  package$abc.AbcMultinameIntOperation = AbcMultinameIntOperation;
  package$abc.AbcNamespaceOperation = AbcNamespaceOperation;
  AMF0.prototype.Reader = AMF0$Reader;
  var package$amf = package$korfl.amf || (package$korfl.amf = {});
  Object.defineProperty(package$amf, 'AMF0', {
    get: AMF0_getInstance
  });
  AMF3.prototype.Reader = AMF3$Reader;
  Object.defineProperty(package$amf, 'AMF3', {
    get: AMF3_getInstance
  });
  Action.prototype.toString_za3lpa$ = IAction.prototype.toString_za3lpa$;
  Filter.prototype.toString_za3lpa$ = IFilter.prototype.toString_za3lpa$;
  FilterGradientBevel.prototype.toString_za3lpa$$default = FilterGradientGlow.prototype.toString_za3lpa$;
  FilterGradientBevel.prototype.toString_za3lpa$ = IFilter.prototype.toString_za3lpa$;
  TagDefineFontInfo2.prototype.parse_roywkq$$default = TagDefineFontInfo.prototype.parse_roywkq$;
  TagDefineFontInfo2.prototype.parse_roywkq$ = ITag.prototype.parse_roywkq$;
  TagDefineSprite.prototype.parse_roywkq$ = ITag.prototype.parse_roywkq$;
  TagImportAssets2.prototype.toString_vux9f0$$default = TagImportAssets.prototype.toString_vux9f0$;
  TagImportAssets2.prototype.toString_vux9f0$ = ITag.prototype.toString_vux9f0$;
  TagSoundStreamHead2.prototype.parse_roywkq$$default = TagSoundStreamHead.prototype.parse_roywkq$;
  TagSoundStreamHead2.prototype.parse_roywkq$ = ITag.prototype.parse_roywkq$;
  TagSWFEncryptActions.prototype.parse_roywkq$$default = TagUnknown.prototype.parse_roywkq$;
  TagSWFEncryptActions.prototype.parse_roywkq$ = ITag.prototype.parse_roywkq$;
  TagSWFEncryptActions.prototype.toString_vux9f0$$default = TagUnknown.prototype.toString_vux9f0$;
  TagSWFEncryptActions.prototype.toString_vux9f0$ = ITag.prototype.toString_vux9f0$;
  TagSWFEncryptSignature.prototype.parse_roywkq$$default = TagUnknown.prototype.parse_roywkq$;
  TagSWFEncryptSignature.prototype.parse_roywkq$ = ITag.prototype.parse_roywkq$;
  TagSWFEncryptSignature.prototype.toString_vux9f0$$default = TagUnknown.prototype.toString_vux9f0$;
  TagSWFEncryptSignature.prototype.toString_vux9f0$ = ITag.prototype.toString_vux9f0$;
  Kotlin.defineModule('korfl-js', _);
  return _;
}(typeof this['korfl-js'] === 'undefined' ? {} : this['korfl-js'], kotlin, this['korio-js'], this['korma-js'], this['korim-js']);
