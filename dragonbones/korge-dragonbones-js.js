(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kds-js', 'korma-js', 'kmem-js', 'korio-js', 'klock-js', 'korim-js', 'korge-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kds-js'), require('korma-js'), require('kmem-js'), require('korio-js'), require('klock-js'), require('korim-js'), require('korge-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korge-dragonbones-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korge-dragonbones-js'.");
    }
    if (typeof this['kds-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-dragonbones-js'. Its dependency 'kds-js' was not found. Please, check whether 'kds-js' is loaded prior to 'korge-dragonbones-js'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-dragonbones-js'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'korge-dragonbones-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-dragonbones-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'korge-dragonbones-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-dragonbones-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korge-dragonbones-js'.");
    }
    if (typeof this['klock-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-dragonbones-js'. Its dependency 'klock-js' was not found. Please, check whether 'klock-js' is loaded prior to 'korge-dragonbones-js'.");
    }
    if (typeof this['korim-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-dragonbones-js'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'korge-dragonbones-js'.");
    }
    if (typeof this['korge-js'] === 'undefined') {
      throw new Error("Error loading module 'korge-dragonbones-js'. Its dependency 'korge-js' was not found. Please, check whether 'korge-js' is loaded prior to 'korge-dragonbones-js'.");
    }
    root['korge-dragonbones-js'] = factory(typeof this['korge-dragonbones-js'] === 'undefined' ? {} : this['korge-dragonbones-js'], kotlin, this['kds-js'], this['korma-js'], this['kmem-js'], this['korio-js'], this['klock-js'], this['korim-js'], this['korge-js']);
  }
}(this, function (_, Kotlin, $module$kds_js, $module$korma_js, $module$kmem_js, $module$korio_js, $module$klock_js, $module$korim_js, $module$korge_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Unit = Kotlin.kotlin.Unit;
  var equals = Kotlin.equals;
  var ensureNotNull = Kotlin.ensureNotNull;
  var splice = $module$kds_js.com.soywiz.kds.splice_b7gcku$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwCCE = Kotlin.throwCCE;
  var IntArrayList = $module$kds_js.com.soywiz.kds.IntArrayList;
  var numberToInt = Kotlin.numberToInt;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var math = Kotlin.kotlin.math;
  var get_raw = $module$korio_js.com.soywiz.korio.ds.get_raw_1qrwyz$;
  var asDouble = $module$korio_js.com.soywiz.korio.ds.asDouble_n7sg4a$;
  var DoubleArrayList = $module$kds_js.com.soywiz.kds.DoubleArrayList;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var get_raw_0 = $module$korio_js.com.soywiz.korio.ds.get_raw_948t6k$;
  var asInt = $module$korio_js.com.soywiz.korio.ds.asInt_n7sg4a$;
  var klock = $module$klock_js.com.soywiz.klock;
  var NumberRawArray = $module$korio_js.com.soywiz.korio.ds.NumberRawArray;
  var getCallableRef = Kotlin.getCallableRef;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var throwUPAE = Kotlin.throwUPAE;
  var DoubleArrayList_init = $module$kds_js.com.soywiz.kds.DoubleArrayList_init_yqxtqz$;
  var indexOf = Kotlin.kotlin.collections.indexOf_bv23uc$;
  var ArrayList = Kotlin.kotlin.collections.ArrayList;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var first = Kotlin.kotlin.collections.first_us0mfu$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var indexOf_0 = Kotlin.kotlin.collections.indexOf_mjy6jw$;
  var toString = Kotlin.toString;
  var isNaN_0 = Kotlin.kotlin.isNaN_yrwdxr$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var toChar = Kotlin.toChar;
  var sliceInt16Buffer = $module$kmem_js.com.soywiz.kmem.sliceInt16Buffer_3gn6rj$;
  var sliceFloat32Buffer = $module$kmem_js.com.soywiz.kmem.sliceFloat32Buffer_3gn6rj$;
  var sliceUint16Buffer = $module$kmem_js.com.soywiz.kmem.sliceUint16Buffer_3gn6rj$;
  var NewUint8Buffer = $module$kmem_js.com.soywiz.kmem.NewUint8Buffer_qmgm5g$;
  var NewInt32Buffer = $module$kmem_js.com.soywiz.kmem.NewInt32Buffer_qmgm5g$;
  var json = $module$korio_js.com.soywiz.korio.serialization.json;
  var lang = $module$korio_js.com.soywiz.korio.lang;
  var Map = Kotlin.kotlin.collections.Map;
  var List = Kotlin.kotlin.collections.List;
  var numberToDouble = Kotlin.numberToDouble;
  var toDoubleArray = Kotlin.kotlin.collections.toDoubleArray_tcduak$;
  var IntArrayList_init = $module$kds_js.com.soywiz.kds.IntArrayList_init_pmhfmb$;
  var toIntArray = Kotlin.kotlin.collections.toIntArray_fx3nzu$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var indexOf_1 = Kotlin.kotlin.collections.indexOf_taaqy$;
  var sliceInt16BufferByteOffset = $module$kmem_js.com.soywiz.kmem.sliceInt16BufferByteOffset_3gn6rj$;
  var sliceFloat32BufferByteOffset = $module$kmem_js.com.soywiz.kmem.sliceFloat32BufferByteOffset_3gn6rj$;
  var sliceUint16BufferByteOffset = $module$kmem_js.com.soywiz.kmem.sliceUint16BufferByteOffset_3gn6rj$;
  var toShort = Kotlin.toShort;
  var joinToString = Kotlin.kotlin.collections.joinToString_cgipc5$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var AssertionError_init = Kotlin.kotlin.AssertionError_init_pdl1vj$;
  var bitmap = $module$korim_js.com.soywiz.korim.bitmap;
  var Image = $module$korge_js.com.soywiz.korge.view.Image;
  var Graphics = $module$korge_js.com.soywiz.korge.view.Graphics;
  var color = $module$korim_js.com.soywiz.korim.color;
  var Matrix2d = $module$korma_js.com.soywiz.korma.Matrix2d;
  var Bitmap = $module$korim_js.com.soywiz.korim.bitmap.Bitmap;
  var Mesh$DrawModes = $module$korge_js.com.soywiz.korge.view.Mesh.DrawModes;
  var Mesh = $module$korge_js.com.soywiz.korge.view.Mesh;
  var View = $module$korge_js.com.soywiz.korge.view.View;
  var Container = $module$korge_js.com.soywiz.korge.view.Container;
  var BlendMode = $module$korge_js.com.soywiz.korge.view.BlendMode;
  var RGBA = $module$korim_js.com.soywiz.korim.color.RGBA;
  var Uint16Buffer = $module$kmem_js.com.soywiz.kmem.Uint16Buffer;
  var Rectangle = $module$korma_js.com.soywiz.korma.geom.Rectangle;
  var BitmapSliceCompat = $module$korim_js.com.soywiz.korim.bitmap.BitmapSliceCompat_qpf1ss$;
  Animation.prototype = Object.create(BaseObject.prototype);
  Animation.prototype.constructor = Animation;
  AnimationState.prototype = Object.create(BaseObject.prototype);
  AnimationState.prototype.constructor = AnimationState;
  BlendState.prototype = Object.create(BaseObject.prototype);
  BlendState.prototype.constructor = BlendState;
  TimelineState.prototype = Object.create(BaseObject.prototype);
  TimelineState.prototype.constructor = TimelineState;
  TweenTimelineState.prototype = Object.create(TimelineState.prototype);
  TweenTimelineState.prototype.constructor = TweenTimelineState;
  SingleValueTimelineState.prototype = Object.create(TweenTimelineState.prototype);
  SingleValueTimelineState.prototype.constructor = SingleValueTimelineState;
  DoubleValueTimelineState.prototype = Object.create(TweenTimelineState.prototype);
  DoubleValueTimelineState.prototype.constructor = DoubleValueTimelineState;
  MutilpleValueTimelineState.prototype = Object.create(TweenTimelineState.prototype);
  MutilpleValueTimelineState.prototype.constructor = MutilpleValueTimelineState;
  ActionTimelineState.prototype = Object.create(TimelineState.prototype);
  ActionTimelineState.prototype.constructor = ActionTimelineState;
  ZOrderTimelineState.prototype = Object.create(TimelineState.prototype);
  ZOrderTimelineState.prototype.constructor = ZOrderTimelineState;
  BoneAllTimelineState.prototype = Object.create(MutilpleValueTimelineState.prototype);
  BoneAllTimelineState.prototype.constructor = BoneAllTimelineState;
  BoneTranslateTimelineState.prototype = Object.create(DoubleValueTimelineState.prototype);
  BoneTranslateTimelineState.prototype.constructor = BoneTranslateTimelineState;
  BoneRotateTimelineState.prototype = Object.create(DoubleValueTimelineState.prototype);
  BoneRotateTimelineState.prototype.constructor = BoneRotateTimelineState;
  BoneScaleTimelineState.prototype = Object.create(DoubleValueTimelineState.prototype);
  BoneScaleTimelineState.prototype.constructor = BoneScaleTimelineState;
  SurfaceTimelineState.prototype = Object.create(MutilpleValueTimelineState.prototype);
  SurfaceTimelineState.prototype.constructor = SurfaceTimelineState;
  AlphaTimelineState.prototype = Object.create(SingleValueTimelineState.prototype);
  AlphaTimelineState.prototype.constructor = AlphaTimelineState;
  SlotDisplayTimelineState.prototype = Object.create(TimelineState.prototype);
  SlotDisplayTimelineState.prototype.constructor = SlotDisplayTimelineState;
  SlotColorTimelineState.prototype = Object.create(TweenTimelineState.prototype);
  SlotColorTimelineState.prototype.constructor = SlotColorTimelineState;
  SlotZIndexTimelineState.prototype = Object.create(SingleValueTimelineState.prototype);
  SlotZIndexTimelineState.prototype.constructor = SlotZIndexTimelineState;
  DeformTimelineState.prototype = Object.create(MutilpleValueTimelineState.prototype);
  DeformTimelineState.prototype.constructor = DeformTimelineState;
  IKConstraintTimelineState.prototype = Object.create(DoubleValueTimelineState.prototype);
  IKConstraintTimelineState.prototype.constructor = IKConstraintTimelineState;
  AnimationProgressTimelineState.prototype = Object.create(SingleValueTimelineState.prototype);
  AnimationProgressTimelineState.prototype.constructor = AnimationProgressTimelineState;
  AnimationWeightTimelineState.prototype = Object.create(SingleValueTimelineState.prototype);
  AnimationWeightTimelineState.prototype.constructor = AnimationWeightTimelineState;
  AnimationParametersTimelineState.prototype = Object.create(DoubleValueTimelineState.prototype);
  AnimationParametersTimelineState.prototype.constructor = AnimationParametersTimelineState;
  Armature.prototype = Object.create(BaseObject.prototype);
  Armature.prototype.constructor = Armature;
  TransformObject.prototype = Object.create(BaseObject.prototype);
  TransformObject.prototype.constructor = TransformObject;
  Bone.prototype = Object.create(TransformObject.prototype);
  Bone.prototype.constructor = Bone;
  Constraint.prototype = Object.create(BaseObject.prototype);
  Constraint.prototype.constructor = Constraint;
  IKConstraint.prototype = Object.create(Constraint.prototype);
  IKConstraint.prototype.constructor = IKConstraint;
  PathConstraint.prototype = Object.create(Constraint.prototype);
  PathConstraint.prototype.constructor = PathConstraint;
  DisplayFrame.prototype = Object.create(BaseObject.prototype);
  DisplayFrame.prototype.constructor = DisplayFrame;
  Slot.prototype = Object.create(TransformObject.prototype);
  Slot.prototype.constructor = Slot;
  Surface.prototype = Object.create(Bone.prototype);
  Surface.prototype.constructor = Surface;
  BinaryOffset.prototype = Object.create(Enum.prototype);
  BinaryOffset.prototype.constructor = BinaryOffset;
  ArmatureType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  ArmatureType$Companion.prototype.constructor = ArmatureType$Companion;
  ArmatureType.prototype = Object.create(Enum.prototype);
  ArmatureType.prototype.constructor = ArmatureType;
  BoneType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  BoneType$Companion.prototype.constructor = BoneType$Companion;
  BoneType.prototype = Object.create(Enum.prototype);
  BoneType.prototype.constructor = BoneType;
  DisplayType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  DisplayType$Companion.prototype.constructor = DisplayType$Companion;
  DisplayType.prototype = Object.create(Enum.prototype);
  DisplayType.prototype.constructor = DisplayType;
  BoundingBoxType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  BoundingBoxType$Companion.prototype.constructor = BoundingBoxType$Companion;
  BoundingBoxType.prototype = Object.create(Enum.prototype);
  BoundingBoxType.prototype.constructor = BoundingBoxType;
  ActionType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  ActionType$Companion.prototype.constructor = ActionType$Companion;
  ActionType.prototype = Object.create(Enum.prototype);
  ActionType.prototype.constructor = ActionType;
  BlendMode$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  BlendMode$Companion.prototype.constructor = BlendMode$Companion;
  BlendMode_0.prototype = Object.create(Enum.prototype);
  BlendMode_0.prototype.constructor = BlendMode_0;
  TweenType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  TweenType$Companion.prototype.constructor = TweenType$Companion;
  TweenType.prototype = Object.create(Enum.prototype);
  TweenType.prototype.constructor = TweenType;
  TimelineType$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  TimelineType$Companion.prototype.constructor = TimelineType$Companion;
  TimelineType.prototype = Object.create(Enum.prototype);
  TimelineType.prototype.constructor = TimelineType;
  OffsetMode.prototype = Object.create(Enum.prototype);
  OffsetMode.prototype.constructor = OffsetMode;
  AnimationFadeOutMode$Companion.prototype = Object.create(IntEnumCompanion.prototype);
  AnimationFadeOutMode$Companion.prototype.constructor = AnimationFadeOutMode$Companion;
  AnimationFadeOutMode.prototype = Object.create(Enum.prototype);
  AnimationFadeOutMode.prototype.constructor = AnimationFadeOutMode;
  AnimationBlendType.prototype = Object.create(Enum.prototype);
  AnimationBlendType.prototype.constructor = AnimationBlendType;
  AnimationBlendMode.prototype = Object.create(Enum.prototype);
  AnimationBlendMode.prototype.constructor = AnimationBlendMode;
  ConstraintType.prototype = Object.create(Enum.prototype);
  ConstraintType.prototype.constructor = ConstraintType;
  PositionMode.prototype = Object.create(Enum.prototype);
  PositionMode.prototype.constructor = PositionMode;
  SpacingMode.prototype = Object.create(Enum.prototype);
  SpacingMode.prototype.constructor = SpacingMode;
  RotateMode.prototype = Object.create(Enum.prototype);
  RotateMode.prototype.constructor = RotateMode;
  EventObject.prototype = Object.create(BaseObject.prototype);
  EventObject.prototype.constructor = EventObject;
  AnimationConfig.prototype = Object.create(BaseObject.prototype);
  AnimationConfig.prototype.constructor = AnimationConfig;
  AnimationData.prototype = Object.create(BaseObject.prototype);
  AnimationData.prototype.constructor = AnimationData;
  TimelineData.prototype = Object.create(BaseObject.prototype);
  TimelineData.prototype.constructor = TimelineData;
  AnimationTimelineData.prototype = Object.create(TimelineData.prototype);
  AnimationTimelineData.prototype.constructor = AnimationTimelineData;
  ArmatureData.prototype = Object.create(BaseObject.prototype);
  ArmatureData.prototype.constructor = ArmatureData;
  BoneData.prototype = Object.create(BaseObject.prototype);
  BoneData.prototype.constructor = BoneData;
  SurfaceData.prototype = Object.create(BoneData.prototype);
  SurfaceData.prototype.constructor = SurfaceData;
  SlotData.prototype = Object.create(BaseObject.prototype);
  SlotData.prototype.constructor = SlotData;
  BoundingBoxData.prototype = Object.create(BaseObject.prototype);
  BoundingBoxData.prototype.constructor = BoundingBoxData;
  RectangleBoundingBoxData.prototype = Object.create(BoundingBoxData.prototype);
  RectangleBoundingBoxData.prototype.constructor = RectangleBoundingBoxData;
  EllipseBoundingBoxData.prototype = Object.create(BoundingBoxData.prototype);
  EllipseBoundingBoxData.prototype.constructor = EllipseBoundingBoxData;
  PolygonBoundingBoxData.prototype = Object.create(BoundingBoxData.prototype);
  PolygonBoundingBoxData.prototype.constructor = PolygonBoundingBoxData;
  CanvasData.prototype = Object.create(BaseObject.prototype);
  CanvasData.prototype.constructor = CanvasData;
  ConstraintData.prototype = Object.create(BaseObject.prototype);
  ConstraintData.prototype.constructor = ConstraintData;
  IKConstraintData.prototype = Object.create(ConstraintData.prototype);
  IKConstraintData.prototype.constructor = IKConstraintData;
  PathConstraintData.prototype = Object.create(ConstraintData.prototype);
  PathConstraintData.prototype.constructor = PathConstraintData;
  DisplayData.prototype = Object.create(BaseObject.prototype);
  DisplayData.prototype.constructor = DisplayData;
  ImageDisplayData.prototype = Object.create(DisplayData.prototype);
  ImageDisplayData.prototype.constructor = ImageDisplayData;
  ArmatureDisplayData.prototype = Object.create(DisplayData.prototype);
  ArmatureDisplayData.prototype.constructor = ArmatureDisplayData;
  MeshDisplayData.prototype = Object.create(DisplayData.prototype);
  MeshDisplayData.prototype.constructor = MeshDisplayData;
  BoundingBoxDisplayData.prototype = Object.create(DisplayData.prototype);
  BoundingBoxDisplayData.prototype.constructor = BoundingBoxDisplayData;
  PathDisplayData.prototype = Object.create(DisplayData.prototype);
  PathDisplayData.prototype.constructor = PathDisplayData;
  WeightData.prototype = Object.create(BaseObject.prototype);
  WeightData.prototype.constructor = WeightData;
  DragonBonesData.prototype = Object.create(BaseObject.prototype);
  DragonBonesData.prototype.constructor = DragonBonesData;
  SkinData.prototype = Object.create(BaseObject.prototype);
  SkinData.prototype.constructor = SkinData;
  TextureAtlasData.prototype = Object.create(BaseObject.prototype);
  TextureAtlasData.prototype.constructor = TextureAtlasData;
  TextureData.prototype = Object.create(BaseObject.prototype);
  TextureData.prototype.constructor = TextureData;
  UserData.prototype = Object.create(BaseObject.prototype);
  UserData.prototype.constructor = UserData;
  ActionData.prototype = Object.create(BaseObject.prototype);
  ActionData.prototype.constructor = ActionData;
  ObjectDataParser.prototype = Object.create(DataParser.prototype);
  ObjectDataParser.prototype.constructor = ObjectDataParser;
  BinaryDataParser.prototype = Object.create(ObjectDataParser.prototype);
  BinaryDataParser.prototype.constructor = BinaryDataParser;
  FrameValueType.prototype = Object.create(Enum.prototype);
  FrameValueType.prototype.constructor = FrameValueType;
  KorgeDbArmatureDisplay.prototype = Object.create(Image.prototype);
  KorgeDbArmatureDisplay.prototype.constructor = KorgeDbArmatureDisplay;
  KorgeDbFactory.prototype = Object.create(BaseFactory.prototype);
  KorgeDbFactory.prototype.constructor = KorgeDbFactory;
  KorgeDbFactory$Companion.prototype = Object.create(KorgeDbFactory.prototype);
  KorgeDbFactory$Companion.prototype.constructor = KorgeDbFactory$Companion;
  KorgeDbSlot.prototype = Object.create(Slot.prototype);
  KorgeDbSlot.prototype.constructor = KorgeDbSlot;
  KorgeDbTextureAtlasData.prototype = Object.create(TextureAtlasData.prototype);
  KorgeDbTextureAtlasData.prototype.constructor = KorgeDbTextureAtlasData;
  KorgeDbTextureData.prototype = Object.create(TextureData.prototype);
  KorgeDbTextureData.prototype.constructor = KorgeDbTextureData;
  function Animation() {
    BaseObject.call(this);
    this.timeScale = 1.0;
    this._animationDirty_0 = false;
    this._inheritTimeScale_0 = 1.0;
    this._animationNames_0 = ArrayList_init();
    this._animationStates_0 = ArrayList_init();
    this._animations_0 = LinkedHashMap_init();
    this._blendStates_0 = LinkedHashMap_init();
    this._armature_0 = null;
    this._animationConfig_0 = null;
    this._lastAnimationState_0 = null;
  }
  Animation.prototype.toString = function () {
    return '[class dragonBones.Animation]';
  };
  Animation.prototype._onClear = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    tmp$ = this._animationStates_0.iterator();
    while (tmp$.hasNext()) {
      var animationState = tmp$.next();
      animationState.returnToPool();
    }
    this._animations_0.clear();
    tmp$_0 = this._blendStates_0.values.iterator();
    while (tmp$_0.hasNext()) {
      var blendStates = tmp$_0.next();
      tmp$_1 = blendStates.keys.iterator();
      while (tmp$_1.hasNext()) {
        var kB = tmp$_1.next();
        (tmp$_2 = blendStates.get_11rb$(kB)) != null ? (tmp$_2.returnToPool(), Unit) : null;
      }
    }
    this._blendStates_0.clear();
    (tmp$_3 = this._animationConfig_0) != null ? (tmp$_3.returnToPool(), Unit) : null;
    this.timeScale = 1.0;
    this._animationDirty_0 = false;
    this._inheritTimeScale_0 = 1.0;
    this._animationNames_0.clear();
    this._animationStates_0.clear();
    this._armature_0 = null;
    this._animationConfig_0 = null;
    this._lastAnimationState_0 = null;
  };
  Animation.prototype._fadeOut_0 = function (animationConfig) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    switch (animationConfig.fadeOutMode.name) {
      case 'SameLayer':
        tmp$ = this._animationStates_0.iterator();
        while (tmp$.hasNext()) {
          var animationState = tmp$.next();
          if (animationState._parent != null) {
            continue;
          }
          if (animationState.layer === animationConfig.layer) {
            animationState.fadeOut_8555vt$(animationConfig.fadeOutTime, animationConfig.pauseFadeOut);
          }
        }

        break;
      case 'SameGroup':
        tmp$_0 = this._animationStates_0.iterator();
        while (tmp$_0.hasNext()) {
          var animationState_0 = tmp$_0.next();
          if (animationState_0._parent != null) {
            continue;
          }
          if (equals(animationState_0.group, animationConfig.group)) {
            animationState_0.fadeOut_8555vt$(animationConfig.fadeOutTime, animationConfig.pauseFadeOut);
          }
        }

        break;
      case 'SameLayerAndGroup':
        tmp$_1 = this._animationStates_0.iterator();
        while (tmp$_1.hasNext()) {
          var animationState_1 = tmp$_1.next();
          if (animationState_1._parent != null) {
            continue;
          }
          if (animationState_1.layer === animationConfig.layer && equals(animationState_1.group, animationConfig.group)) {
            animationState_1.fadeOut_8555vt$(animationConfig.fadeOutTime, animationConfig.pauseFadeOut);
          }
        }

        break;
      case 'All':
        tmp$_2 = this._animationStates_0.iterator();
        while (tmp$_2.hasNext()) {
          var animationState_2 = tmp$_2.next();
          if (animationState_2._parent != null) {
            continue;
          }
          animationState_2.fadeOut_8555vt$(animationConfig.fadeOutTime, animationConfig.pauseFadeOut);
        }

        break;
      case 'Single':
        break;
      default:break;
    }
  };
  var getKClass = Kotlin.getKClass;
  Animation.prototype.init_9a3g6p$ = function (armature) {
    if (this._armature_0 != null) {
      return;
    }
    this._armature_0 = armature;
    this._animationConfig_0 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(AnimationConfig));
  };
  Animation.prototype.advanceTime_14dthe$ = function (passedTime) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var passedTime_0 = passedTime;
    if (passedTime_0 < 0.0) {
      passedTime_0 = -passedTime_0;
    }
    if (ensureNotNull(this._armature_0).inheritAnimation && ((tmp$ = this._armature_0) != null ? tmp$._parent : null) != null) {
      this._inheritTimeScale_0 = ensureNotNull(ensureNotNull(ensureNotNull(this._armature_0)._parent)._armature).animation._inheritTimeScale_0 * this.timeScale;
    }
     else {
      this._inheritTimeScale_0 = this.timeScale;
    }
    if (this._inheritTimeScale_0 !== 1.0) {
      passedTime_0 *= this._inheritTimeScale_0;
    }
    tmp$_0 = this._blendStates_0.values.iterator();
    while (tmp$_0.hasNext()) {
      var blendStates = tmp$_0.next();
      tmp$_1 = blendStates.values.iterator();
      while (tmp$_1.hasNext()) {
        var state = tmp$_1.next();
        state.reset();
      }
    }
    var animationStateCount = get_length_1(this._animationStates_0);
    if (animationStateCount === 1) {
      var animationState = this._animationStates_0.get_za3lpa$(0);
      if (animationState._fadeState > 0 && animationState._subFadeState > 0) {
        animationState.returnToPool();
        set_length_1(this._animationStates_0, 0);
        this._lastAnimationState_0 = null;
      }
       else {
        var animationData = animationState.animationData;
        var cacheFrameRate = animationData.cacheFrameRate;
        if (this._animationDirty_0 && cacheFrameRate > 0.0) {
          this._animationDirty_0 = false;
          tmp$_2 = ensureNotNull(this._armature_0).getBones().iterator();
          while (tmp$_2.hasNext()) {
            var bone = tmp$_2.next();
            bone._cachedFrameIndices = animationData.getBoneCachedFrameIndices_61zpoe$(bone.name);
          }
          tmp$_3 = ensureNotNull(this._armature_0).getSlots().iterator();
          while (tmp$_3.hasNext()) {
            var slot = tmp$_3.next();
            if (slot.displayFrameCount > 0) {
              var rawDisplayData = slot.getDisplayFrameAt_za3lpa$(0).rawDisplayData;
              if (rawDisplayData != null && equals(rawDisplayData.parent, ensureNotNull(this._armature_0).armatureData.defaultSkin)) {
                slot._cachedFrameIndices = animationData.getSlotCachedFrameIndices_61zpoe$(slot.name);
                continue;
              }
            }
            slot._cachedFrameIndices = null;
          }
        }
        animationState.advanceTime_lu1900$(passedTime_0, cacheFrameRate);
      }
    }
     else if (animationStateCount > 1) {
      var r = 0;
      for (var i = 0; i < animationStateCount; i++) {
        var animationState_0 = this._animationStates_0.get_za3lpa$(i);
        if (animationState_0._fadeState > 0 && animationState_0._subFadeState > 0) {
          r = r + 1 | 0;
          animationState_0.returnToPool();
          this._animationDirty_0 = true;
          if (equals(this._lastAnimationState_0, animationState_0)) {
            this._lastAnimationState_0 = null;
          }
        }
         else {
          if (r > 0) {
            this._animationStates_0.set_wxm5ur$(i - r | 0, animationState_0);
          }
          animationState_0.advanceTime_lu1900$(passedTime_0, 0.0);
        }
        if (i === (animationStateCount - 1 | 0) && r > 0) {
          tmp$_4 = this._animationStates_0;
          set_length_1(tmp$_4, get_length_1(tmp$_4) - r | 0);
          if (this._lastAnimationState_0 == null && get_length_1(this._animationStates_0) > 0) {
            this._lastAnimationState_0 = this._animationStates_0.get_za3lpa$(get_length_1(this._animationStates_0) - 1 | 0);
          }
        }
      }
      (tmp$_5 = this._armature_0) != null ? (tmp$_5._cacheFrameIndex = -1) : null;
    }
     else {
      (tmp$_6 = this._armature_0) != null ? (tmp$_6._cacheFrameIndex = -1) : null;
    }
  };
  Animation.prototype.reset = function () {
    var tmp$, tmp$_0;
    tmp$ = this._animationStates_0.iterator();
    while (tmp$.hasNext()) {
      var animationState = tmp$.next();
      animationState.returnToPool();
    }
    this._animationDirty_0 = false;
    (tmp$_0 = this._animationConfig_0) != null ? (tmp$_0.clear(), Unit) : null;
    this._animationStates_0.clear();
    this._lastAnimationState_0 = null;
  };
  Animation.prototype.stop_pdl1vj$ = function (animationName) {
    if (animationName === void 0)
      animationName = null;
    var tmp$;
    if (animationName != null) {
      var animationState = this.getState_bm4lxs$(animationName);
      if (animationState != null) {
        animationState.stop();
      }
    }
     else {
      tmp$ = this._animationStates_0.iterator();
      while (tmp$.hasNext()) {
        var animationState_0 = tmp$.next();
        animationState_0.stop();
      }
    }
  };
  Animation.prototype.playConfig_1e5lcy$ = function (animationConfig) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var animationName = animationConfig.animation;
    var $receiver = this._animations_0;
    var tmp$_9;
    if (!(Kotlin.isType(tmp$_9 = $receiver, Map) ? tmp$_9 : throwCCE()).containsKey_11rb$(animationName)) {
      console_getInstance().warn_vqirvp$(['Non-existent animation.\n', 'DragonBones name: ' + ((tmp$_1 = (tmp$_0 = (tmp$ = this._armature_0) != null ? tmp$.armatureData : null) != null ? tmp$_0.parent : null) != null ? tmp$_1.name : null), 'Armature name: ' + ((tmp$_2 = this._armature_0) != null ? tmp$_2.name : null), 'Animation name: ' + animationName]);
      return null;
    }
    var animationData = ensureNotNull(this._animations_0.get_11rb$(animationName));
    if (animationConfig.fadeOutMode === AnimationFadeOutMode$Single_getInstance()) {
      tmp$_3 = this._animationStates_0.iterator();
      while (tmp$_3.hasNext()) {
        var animationState = tmp$_3.next();
        if (animationState._fadeState < 1 && animationState.layer === animationConfig.layer && equals(animationState.animationData, animationData)) {
          return animationState;
        }
      }
    }
    if (this._animationStates_0.size === 0) {
      animationConfig.fadeInTime = 0.0;
    }
     else if (animationConfig.fadeInTime < 0.0) {
      animationConfig.fadeInTime = animationData.fadeInTime;
    }
    if (animationConfig.fadeOutTime < 0.0) {
      animationConfig.fadeOutTime = animationConfig.fadeInTime;
    }
    if (animationConfig.timeScale <= -100.0) {
      animationConfig.timeScale = 1.0 / animationData.scale;
    }
    if (animationData.frameCount > 0) {
      if (animationConfig.position < 0.0) {
        animationConfig.position = animationConfig.position % animationData.duration;
        animationConfig.position = animationData.duration - animationConfig.position;
      }
       else if (animationConfig.position === animationData.duration) {
        animationConfig.position = animationConfig.position - 1.0E-6;
      }
       else if (animationConfig.position > animationData.duration) {
        animationConfig.position = animationConfig.position % animationData.duration;
      }
      if (animationConfig.duration > 0.0 && animationConfig.position + animationConfig.duration > animationData.duration) {
        animationConfig.duration = animationData.duration - animationConfig.position;
      }
      if (animationConfig.playTimes < 0) {
        animationConfig.playTimes = animationData.playTimes;
      }
    }
     else {
      animationConfig.playTimes = 1;
      animationConfig.position = 0.0;
      if (animationConfig.duration > 0.0) {
        animationConfig.duration = 0.0;
      }
    }
    if (animationConfig.duration === 0.0) {
      animationConfig.duration = -1.0;
    }
    this._fadeOut_0(animationConfig);
    var animationState_0 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(AnimationState));
    animationState_0.init_wjllgj$(ensureNotNull(this._armature_0), animationData, animationConfig);
    this._animationDirty_0 = true;
    (tmp$_4 = this._armature_0) != null ? (tmp$_4._cacheFrameIndex = -1) : null;
    if (this._animationStates_0.size > 0) {
      var added = false;
      var l = this._animationStates_0.size;
      tmp$_5 = this._animationStates_0.size;
      for (var i = 0; i < tmp$_5; i++) {
        if (animationState_0.layer > this._animationStates_0.get_za3lpa$(i).layer) {
          added = true;
          splice(this._animationStates_0, i, 0, [animationState_0]);
          break;
        }
         else if (i !== (l - 1 | 0) && animationState_0.layer > this._animationStates_0.get_za3lpa$(i + 1 | 0).layer) {
          added = true;
          splice(this._animationStates_0, i + 1 | 0, 0, [animationState_0]);
          break;
        }
      }
      if (!added) {
        this._animationStates_0.add_11rb$(animationState_0);
      }
    }
     else {
      this._animationStates_0.add_11rb$(animationState_0);
    }
    tmp$_6 = ensureNotNull(this._armature_0).getSlots().iterator();
    while (tmp$_6.hasNext()) {
      var slot = tmp$_6.next();
      var childArmature = slot.childArmature;
      if (childArmature != null && childArmature.inheritAnimation && childArmature.animation.hasAnimation_61zpoe$(animationName) && childArmature.animation.getState_bm4lxs$(animationName) == null) {
        childArmature.animation.fadeIn_qtlk36$(animationName);
      }
    }
    tmp$_7 = animationData.animationTimelines.keys.iterator();
    while (tmp$_7.hasNext()) {
      var k = tmp$_7.next();
      tmp$_8 = this.fadeIn_qtlk36$(k, 0.0, 1, animationState_0.layer, '', AnimationFadeOutMode$Single_getInstance());
      if (tmp$_8 == null) {
        continue;
      }
      var childAnimationState = tmp$_8;
      var timelines = animationData.animationTimelines.get_11rb$(k);
      childAnimationState.actionEnabled = false;
      childAnimationState.resetToPose = false;
      childAnimationState.stop();
      animationState_0.addState_uxc1bv$(childAnimationState, timelines);
      var index = this._animationStates_0.indexOf_11rb$(animationState_0);
      var childIndex = this._animationStates_0.indexOf_11rb$(childAnimationState);
      if (childIndex < index) {
        splice(this._animationStates_0, index, 1, []);
        splice(this._animationStates_0, childIndex, 0, [animationState_0]);
      }
    }
    this._lastAnimationState_0 = animationState_0;
    return animationState_0;
  };
  Animation.prototype.play_9d67ql$ = function (animationName, playTimes) {
    if (animationName === void 0)
      animationName = null;
    if (playTimes === void 0)
      playTimes = -1;
    var tmp$, tmp$_0, tmp$_1;
    var _animationConfig1 = ensureNotNull(this._animationConfig_0);
    _animationConfig1.clear();
    _animationConfig1.resetToPose = true;
    _animationConfig1.playTimes = playTimes;
    _animationConfig1.fadeInTime = 0.0;
    _animationConfig1.animation = animationName != null ? animationName : '';
    var tmp$_2 = animationName != null;
    if (tmp$_2) {
      tmp$_2 = animationName.length > 0;
    }
    if (tmp$_2) {
      this.playConfig_1e5lcy$(_animationConfig1);
    }
     else if (this._lastAnimationState_0 == null) {
      var defaultAnimation = (tmp$_0 = (tmp$ = this._armature_0) != null ? tmp$.armatureData : null) != null ? tmp$_0.defaultAnimation : null;
      if (defaultAnimation != null) {
        _animationConfig1.animation = defaultAnimation.name;
        this.playConfig_1e5lcy$(_animationConfig1);
      }
    }
     else if (!ensureNotNull(this._lastAnimationState_0).isPlaying && !ensureNotNull(this._lastAnimationState_0).isCompleted) {
      (tmp$_1 = this._lastAnimationState_0) != null ? (tmp$_1.play(), Unit) : null;
    }
     else {
      _animationConfig1.animation = ensureNotNull(this._lastAnimationState_0).name;
      this.playConfig_1e5lcy$(_animationConfig1);
    }
    return this._lastAnimationState_0;
  };
  Animation.prototype.fadeIn_qtlk36$ = function (animationName, fadeInTime, playTimes, layer, group, fadeOutMode) {
    if (fadeInTime === void 0)
      fadeInTime = -1.0;
    if (playTimes === void 0)
      playTimes = -1;
    if (layer === void 0)
      layer = 0;
    if (group === void 0)
      group = null;
    if (fadeOutMode === void 0)
      fadeOutMode = AnimationFadeOutMode$SameLayerAndGroup_getInstance();
    var _animationConfig1 = ensureNotNull(this._animationConfig_0);
    _animationConfig1.clear();
    _animationConfig1.fadeOutMode = fadeOutMode;
    _animationConfig1.playTimes = playTimes;
    _animationConfig1.layer = layer;
    _animationConfig1.fadeInTime = fadeInTime;
    _animationConfig1.animation = animationName;
    _animationConfig1.group = group != null ? group : '';
    return this.playConfig_1e5lcy$(_animationConfig1);
  };
  Animation.prototype.gotoAndPlayByTime_euqqgu$ = function (animationName, time, playTimes) {
    if (time === void 0)
      time = 0.0;
    if (playTimes === void 0)
      playTimes = -1;
    var _animationConfig1 = ensureNotNull(this._animationConfig_0);
    _animationConfig1.clear();
    _animationConfig1.resetToPose = true;
    _animationConfig1.playTimes = playTimes;
    _animationConfig1.position = time;
    _animationConfig1.fadeInTime = 0.0;
    _animationConfig1.animation = animationName;
    return this.playConfig_1e5lcy$(_animationConfig1);
  };
  Animation.prototype.gotoAndPlayByFrame_3m52m6$ = function (animationName, frame, playTimes) {
    if (frame === void 0)
      frame = 0;
    if (playTimes === void 0)
      playTimes = -1;
    var _animationConfig1 = ensureNotNull(this._animationConfig_0);
    _animationConfig1.clear();
    _animationConfig1.resetToPose = true;
    _animationConfig1.playTimes = playTimes;
    _animationConfig1.fadeInTime = 0.0;
    _animationConfig1.animation = animationName;
    var $receiver = this._animations_0;
    var tmp$;
    var animationData = (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(animationName) ? this._animations_0.get_11rb$(animationName) : null;
    if (animationData != null) {
      _animationConfig1.position = animationData.frameCount > 0 ? animationData.duration * frame / animationData.frameCount : 0.0;
    }
    return this.playConfig_1e5lcy$(ensureNotNull(_animationConfig1));
  };
  Animation.prototype.gotoAndPlayByProgress_euqqgu$ = function (animationName, progress, playTimes) {
    if (progress === void 0)
      progress = 0.0;
    if (playTimes === void 0)
      playTimes = -1;
    var _animationConfig1 = ensureNotNull(this._animationConfig_0);
    _animationConfig1.clear();
    _animationConfig1.resetToPose = true;
    _animationConfig1.playTimes = playTimes;
    _animationConfig1.fadeInTime = 0.0;
    _animationConfig1.animation = animationName;
    var $receiver = this._animations_0;
    var tmp$;
    var animationData = (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(animationName) ? this._animations_0.get_11rb$(animationName) : null;
    if (animationData != null) {
      _animationConfig1.position = animationData.duration * (progress > 0.0 ? progress : 0.0);
    }
    return this.playConfig_1e5lcy$(ensureNotNull(_animationConfig1));
  };
  Animation.prototype.gotoAndStopByTime_io5o9c$ = function (animationName, time) {
    if (time === void 0)
      time = 0.0;
    var animationState = this.gotoAndPlayByTime_euqqgu$(animationName, time, 1);
    if (animationState != null) {
      animationState.stop();
    }
    return animationState;
  };
  Animation.prototype.gotoAndStopByFrame_bm4lxs$ = function (animationName, frame) {
    if (frame === void 0)
      frame = 0;
    var animationState = this.gotoAndPlayByFrame_3m52m6$(animationName, frame, 1);
    if (animationState != null) {
      animationState.stop();
    }
    return animationState;
  };
  Animation.prototype.gotoAndStopByProgress_io5o9c$ = function (animationName, progress) {
    if (progress === void 0)
      progress = 0.0;
    var animationState = this.gotoAndPlayByProgress_euqqgu$(animationName, progress, 1);
    animationState != null ? (animationState.stop(), Unit) : null;
    return animationState;
  };
  Animation.prototype.getBlendState_5m6c58$ = function (type, name, target) {
    var $receiver = this._blendStates_0;
    var tmp$;
    if (!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(type)) {
      var $receiver_0 = this._blendStates_0;
      var value = LinkedHashMap_init();
      $receiver_0.put_xwzc9p$(type, value);
    }
    var blendStates = ensureNotNull(this._blendStates_0.get_11rb$(type));
    var tmp$_0;
    if (!(Kotlin.isType(tmp$_0 = blendStates, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(name)) {
      var res = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(BlendState));
      var blendState = res;
      blendStates.put_xwzc9p$(name, res);
      blendState.target = target;
    }
    return ensureNotNull(blendStates.get_11rb$(name));
  };
  Animation.prototype.getState_bm4lxs$ = function (animationName, layer) {
    if (layer === void 0)
      layer = -1;
    for (var i = this._animationStates_0.size - 1 | 0; i >= 0; i--) {
      var animationState = this._animationStates_0.get_za3lpa$(i);
      if (equals(animationState.name, animationName) && (layer < 0 || animationState.layer === layer)) {
        return animationState;
      }
    }
    return null;
  };
  Animation.prototype.hasAnimation_61zpoe$ = function (animationName) {
    var $receiver = this._animations_0;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(animationName);
  };
  Animation.prototype.getStates = function () {
    return this._animationStates_0;
  };
  Object.defineProperty(Animation.prototype, 'isPlaying', {
    get: function () {
      var tmp$;
      tmp$ = this._animationStates_0.iterator();
      while (tmp$.hasNext()) {
        var animationState = tmp$.next();
        if (animationState.isPlaying) {
          return true;
        }
      }
      return false;
    }
  });
  Object.defineProperty(Animation.prototype, 'isCompleted', {
    get: function () {
      var tmp$;
      tmp$ = this._animationStates_0.iterator();
      while (tmp$.hasNext()) {
        var animationState = tmp$.next();
        if (!animationState.isCompleted) {
          return false;
        }
      }
      return get_length_1(this._animationStates_0) > 0;
    }
  });
  Object.defineProperty(Animation.prototype, 'lastAnimationName', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this._lastAnimationState_0) != null ? tmp$.name : null) != null ? tmp$_0 : '';
    }
  });
  Object.defineProperty(Animation.prototype, 'animationNames', {
    get: function () {
      return this._animationNames_0;
    }
  });
  Object.defineProperty(Animation.prototype, 'animations', {
    get: function () {
      return this._animations_0;
    },
    set: function (value) {
      var tmp$;
      if (equals(this._animations_0, value)) {
        return;
      }
      set_length_1(this._animationNames_0, 0);
      this._animations_0.clear();
      tmp$ = value.keys.iterator();
      while (tmp$.hasNext()) {
        var k = tmp$.next();
        push(this._animationNames_0, k);
        var $receiver = this._animations_0;
        var value_0 = ensureNotNull(value.get_11rb$(k));
        $receiver.put_xwzc9p$(k, value_0);
      }
    }
  });
  Object.defineProperty(Animation.prototype, 'animationConfig', {
    get: function () {
      var tmp$;
      (tmp$ = this._animationConfig_0) != null ? (tmp$.clear(), Unit) : null;
      return ensureNotNull(this._animationConfig_0);
    }
  });
  Object.defineProperty(Animation.prototype, 'lastAnimationState', {
    get: function () {
      return ensureNotNull(this._lastAnimationState_0);
    }
  });
  Animation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Animation',
    interfaces: [BaseObject]
  };
  function AnimationState() {
    BaseObject.call(this);
    this.actionEnabled = false;
    this.additive = false;
    this.displayControl = false;
    this.resetToPose = false;
    this.blendType = AnimationBlendType$None_getInstance();
    this.playTimes = 1;
    this.layer = 0;
    this.timeScale = 1.0;
    this.parameterX = 0.0;
    this.parameterY = 0.0;
    this.positionX = 0.0;
    this.positionY = 0.0;
    this.autoFadeOutTime = 0.0;
    this.fadeTotalTime = 0.0;
    this.name = '';
    this.group = '';
    this._timelineDirty_0 = 2;
    this._playheadState = 0;
    this._fadeState = -1;
    this._subFadeState = -1;
    this._position = 0.0;
    this._duration = 0.0;
    this._weight_0 = 1.0;
    this._fadeTime_0 = 0.0;
    this._time_0 = 0.0;
    this._fadeProgress = 0.0;
    this._weightResult = 0.0;
    this._boneMask_0 = ArrayList_init();
    this._boneTimelines_0 = ArrayList_init();
    this._boneBlendTimelines_0 = ArrayList_init();
    this._slotTimelines_0 = ArrayList_init();
    this._slotBlendTimelines_0 = ArrayList_init();
    this._constraintTimelines_0 = ArrayList_init();
    this._animationTimelines_0 = ArrayList_init();
    this._poseTimelines_0 = ArrayList_init();
    this._animationData_0 = null;
    this._armature_0 = null;
    this._actionTimeline = null;
    this._zOrderTimeline_0 = null;
    this._activeChildA_0 = null;
    this._activeChildB_0 = null;
    this._parent = null;
  }
  AnimationState.prototype.toString = function () {
    return '[class dragonBones.AnimationState]';
  };
  AnimationState.prototype._onClear = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    tmp$ = this._boneTimelines_0.iterator();
    while (tmp$.hasNext()) {
      var timeline = tmp$.next();
      timeline.returnToPool();
    }
    tmp$_0 = this._boneBlendTimelines_0.iterator();
    while (tmp$_0.hasNext()) {
      var timeline_0 = tmp$_0.next();
      timeline_0.returnToPool();
    }
    tmp$_1 = this._slotTimelines_0.iterator();
    while (tmp$_1.hasNext()) {
      var timeline_1 = tmp$_1.next();
      timeline_1.returnToPool();
    }
    tmp$_2 = this._slotBlendTimelines_0.iterator();
    while (tmp$_2.hasNext()) {
      var timeline_2 = tmp$_2.next();
      timeline_2.returnToPool();
    }
    tmp$_3 = this._constraintTimelines_0.iterator();
    while (tmp$_3.hasNext()) {
      var timeline_3 = tmp$_3.next();
      timeline_3.returnToPool();
    }
    tmp$_4 = this._animationTimelines_0.iterator();
    while (tmp$_4.hasNext()) {
      var timeline_4 = tmp$_4.next();
      var animationState = Kotlin.isType(tmp$_5 = timeline_4.target, AnimationState) ? tmp$_5 : throwCCE();
      if (equals(animationState._parent, this)) {
        animationState._fadeState = 1;
        animationState._subFadeState = 1;
        animationState._parent = null;
      }
      timeline_4.returnToPool();
    }
    (tmp$_6 = this._actionTimeline) != null ? (tmp$_6.returnToPool(), Unit) : null;
    (tmp$_7 = this._zOrderTimeline_0) != null ? (tmp$_7.returnToPool(), Unit) : null;
    this.actionEnabled = false;
    this.additive = false;
    this.displayControl = false;
    this.resetToPose = false;
    this.blendType = AnimationBlendType$None_getInstance();
    this.playTimes = 1;
    this.layer = 0;
    this.timeScale = 1.0;
    this._weight_0 = 1.0;
    this.parameterX = 0.0;
    this.parameterY = 0.0;
    this.positionX = 0.0;
    this.positionY = 0.0;
    this.autoFadeOutTime = 0.0;
    this.fadeTotalTime = 0.0;
    this.name = '';
    this.group = '';
    this._timelineDirty_0 = 2;
    this._playheadState = 0;
    this._fadeState = -1;
    this._subFadeState = -1;
    this._position = 0.0;
    this._duration = 0.0;
    this._fadeTime_0 = 0.0;
    this._time_0 = 0.0;
    this._fadeProgress = 0.0;
    this._weightResult = 0.0;
    this._boneMask_0.clear();
    this._boneTimelines_0.clear();
    this._boneBlendTimelines_0.clear();
    this._slotTimelines_0.clear();
    this._slotBlendTimelines_0.clear();
    this._constraintTimelines_0.clear();
    this._animationTimelines_0.clear();
    this._poseTimelines_0.clear();
    this._animationData_0 = null;
    this._armature_0 = null;
    this._actionTimeline = null;
    this._zOrderTimeline_0 = null;
    this._activeChildA_0 = null;
    this._activeChildB_0 = null;
    this._parent = null;
  };
  AnimationState.prototype._updateTimelines_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    tmp$ = ensureNotNull(this._armature_0)._constraints.iterator();
    while (tmp$.hasNext()) {
      var constraint = tmp$.next();
      var timelineDatas = (tmp$_0 = this._animationData_0) != null ? tmp$_0.getConstraintTimelines_61zpoe$(constraint.name) : null;
      if (timelineDatas != null) {
        tmp$_1 = timelineDatas.iterator();
        while (tmp$_1.hasNext()) {
          var timelineData = tmp$_1.next();
          if (equals(timelineData.type, TimelineType$IKConstraint_getInstance())) {
            var timeline = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(IKConstraintTimelineState));
            timeline.target = constraint;
            timeline.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
            push(this._constraintTimelines_0, timeline);
          }
        }
      }
       else if (this.resetToPose) {
        var timeline_0 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(IKConstraintTimelineState));
        timeline_0.target = constraint;
        timeline_0.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
        push(this._constraintTimelines_0, timeline_0);
        push(this._poseTimelines_0, timeline_0);
      }
    }
  };
  AnimationState.prototype._updateBoneAndSlotTimelines_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    var boneTimelines = LinkedHashMap_init();
    tmp$ = this._boneTimelines_0.iterator();
    while (tmp$.hasNext()) {
      var timeline = tmp$.next();
      var timelineName = (Kotlin.isType(tmp$_1 = (Kotlin.isType(tmp$_0 = timeline.target, BlendState) ? tmp$_0 : throwCCE()).target, Bone) ? tmp$_1 : throwCCE()).name;
      var tmp$_13;
      if (!(Kotlin.isType(tmp$_13 = boneTimelines, Map) ? tmp$_13 : throwCCE()).containsKey_11rb$(timelineName)) {
        var value = ArrayList_init();
        boneTimelines.put_xwzc9p$(timelineName, value);
      }
      (tmp$_2 = boneTimelines.get_11rb$(timelineName)) != null ? (push(tmp$_2, timeline), Unit) : null;
    }
    tmp$_3 = this._boneBlendTimelines_0.iterator();
    while (tmp$_3.hasNext()) {
      var timeline_0 = tmp$_3.next();
      var timelineName_0 = (Kotlin.isType(tmp$_5 = (Kotlin.isType(tmp$_4 = timeline_0.target, BlendState) ? tmp$_4 : throwCCE()).target, Bone) ? tmp$_5 : throwCCE()).name;
      var tmp$_14;
      if (!(Kotlin.isType(tmp$_14 = boneTimelines, Map) ? tmp$_14 : throwCCE()).containsKey_11rb$(timelineName_0)) {
        var value_0 = ArrayList_init();
        boneTimelines.put_xwzc9p$(timelineName_0, value_0);
      }
      (tmp$_6 = boneTimelines.get_11rb$(timelineName_0)) != null ? (push(tmp$_6, timeline_0), Unit) : null;
    }
    tmp$_7 = ensureNotNull(this._armature_0).getBones().iterator();
    while (tmp$_7.hasNext()) {
      var bone = tmp$_7.next();
      var timelineName_1 = bone.name;
      if (!this.containsBoneMask_61zpoe$(timelineName_1)) {
        continue;
      }
      var tmp$_15;
      if ((Kotlin.isType(tmp$_15 = boneTimelines, Map) ? tmp$_15 : throwCCE()).containsKey_11rb$(timelineName_1)) {
        boneTimelines.remove_11rb$(timelineName_1);
      }
       else {
        var timelineDatas = (tmp$_8 = this._animationData_0) != null ? tmp$_8.getBoneTimelines_61zpoe$(timelineName_1) : null;
        var blendState = ensureNotNull(this._armature_0).animation.getBlendState_5m6c58$(BlendState$Companion_getInstance().BONE_TRANSFORM, bone.name, bone);
        if (timelineDatas != null) {
          tmp$_9 = timelineDatas.iterator();
          while (tmp$_9.hasNext()) {
            var timelineData = tmp$_9.next();
            switch (timelineData.type.name) {
              case 'BoneAll':
                var timeline_1 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(BoneAllTimelineState));
                timeline_1.target = blendState;
                timeline_1.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                push(this._boneTimelines_0, timeline_1);
                break;
              case 'BoneTranslate':
                var timeline_2 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(BoneTranslateTimelineState));
                timeline_2.target = blendState;
                timeline_2.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                push(this._boneTimelines_0, timeline_2);
                break;
              case 'BoneRotate':
                var timeline_3 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(BoneRotateTimelineState));
                timeline_3.target = blendState;
                timeline_3.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                push(this._boneTimelines_0, timeline_3);
                break;
              case 'BoneScale':
                var timeline_4 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(BoneScaleTimelineState));
                timeline_4.target = blendState;
                timeline_4.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                push(this._boneTimelines_0, timeline_4);
                break;
              case 'BoneAlpha':
                var timeline_5 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(AlphaTimelineState));
                timeline_5.target = ensureNotNull(this._armature_0).animation.getBlendState_5m6c58$(BlendState$Companion_getInstance().BONE_ALPHA, bone.name, bone);
                timeline_5.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                push(this._boneBlendTimelines_0, timeline_5);
                break;
              case 'Surface':
                var timeline_6 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(SurfaceTimelineState));
                timeline_6.target = ensureNotNull(this._armature_0).animation.getBlendState_5m6c58$(BlendState$Companion_getInstance().SURFACE, bone.name, bone);
                timeline_6.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
                push(this._boneBlendTimelines_0, timeline_6);
                break;
              default:break;
            }
          }
        }
         else if (this.resetToPose) {
          if (equals((tmp$_10 = bone._boneData) != null ? tmp$_10.type : null, BoneType$Bone_getInstance())) {
            var timeline_7 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(BoneAllTimelineState));
            timeline_7.target = blendState;
            timeline_7.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
            push(this._boneTimelines_0, timeline_7);
            push(this._poseTimelines_0, timeline_7);
          }
           else {
            var timeline_8 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(SurfaceTimelineState));
            timeline_8.target = ensureNotNull(this._armature_0).animation.getBlendState_5m6c58$(BlendState$Companion_getInstance().SURFACE, bone.name, bone);
            timeline_8.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
            push(this._boneBlendTimelines_0, timeline_8);
            push(this._poseTimelines_0, timeline_8);
          }
        }
      }
    }
    tmp$_11 = boneTimelines.keys.iterator();
    while (tmp$_11.hasNext()) {
      var k = tmp$_11.next();
      tmp$_12 = ensureNotNull(boneTimelines.get_11rb$(k)).iterator();
      while (tmp$_12.hasNext()) {
        var timeline_9 = tmp$_12.next();
        var index = this._boneTimelines_0.indexOf_11rb$(timeline_9);
        if (index >= 0) {
          splice(this._boneTimelines_0, index, 1, []);
          timeline_9.returnToPool();
        }
        index = this._boneBlendTimelines_0.indexOf_11rb$(timeline_9);
        if (index >= 0) {
          splice(this._boneBlendTimelines_0, index, 1, []);
          timeline_9.returnToPool();
        }
      }
    }
    var tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28;
    var slotTimelines = LinkedHashMap_init();
    var ffdFlags = new IntArrayList();
    tmp$_16 = this._slotTimelines_0.iterator();
    while (tmp$_16.hasNext()) {
      var timeline_10 = tmp$_16.next();
      var timelineName_2 = (Kotlin.isType(tmp$_17 = timeline_10.target, Slot) ? tmp$_17 : throwCCE()).name;
      var tmp$_29;
      if (!(Kotlin.isType(tmp$_29 = slotTimelines, Map) ? tmp$_29 : throwCCE()).containsKey_11rb$(timelineName_2)) {
        var value_1 = ArrayList_init();
        slotTimelines.put_xwzc9p$(timelineName_2, value_1);
      }
      (tmp$_18 = slotTimelines.get_11rb$(timelineName_2)) != null ? (push(tmp$_18, timeline_10), Unit) : null;
    }
    tmp$_19 = this._slotBlendTimelines_0.iterator();
    while (tmp$_19.hasNext()) {
      var timeline_11 = tmp$_19.next();
      var timelineName_3 = (Kotlin.isType(tmp$_21 = (Kotlin.isType(tmp$_20 = timeline_11.target, BlendState) ? tmp$_20 : throwCCE()).target, Slot) ? tmp$_21 : throwCCE()).name;
      var tmp$_30;
      if (!(Kotlin.isType(tmp$_30 = slotTimelines, Map) ? tmp$_30 : throwCCE()).containsKey_11rb$(timelineName_3)) {
        var value_2 = ArrayList_init();
        slotTimelines.put_xwzc9p$(timelineName_3, value_2);
      }
      (tmp$_22 = slotTimelines.get_11rb$(timelineName_3)) != null ? (push(tmp$_22, timeline_11), Unit) : null;
    }
    tmp$_23 = ensureNotNull(this._armature_0).getSlots().iterator();
    while (tmp$_23.hasNext()) {
      var slot = tmp$_23.next();
      var boneName = slot.parent.name;
      if (!this.containsBoneMask_61zpoe$(boneName)) {
        continue;
      }
      var timelineName_4 = slot.name;
      var tmp$_31;
      if ((Kotlin.isType(tmp$_31 = slotTimelines, Map) ? tmp$_31 : throwCCE()).containsKey_11rb$(timelineName_4)) {
        slotTimelines.remove_11rb$(timelineName_4);
      }
       else {
        var displayIndexFlag = false;
        var colorFlag = false;
        set_length(ffdFlags, 0);
        var timelineDatas_0 = (tmp$_24 = this._animationData_0) != null ? tmp$_24.getSlotTimelines_61zpoe$(timelineName_4) : null;
        if (timelineDatas_0 != null) {
          tmp$_25 = timelineDatas_0.iterator();
          while (tmp$_25.hasNext()) {
            var timelineData_0 = tmp$_25.next();
            switch (timelineData_0.type.name) {
              case 'SlotDisplay':
                var timeline_12 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(SlotDisplayTimelineState));
                timeline_12.target = slot;
                timeline_12.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData_0);
                push(this._slotTimelines_0, timeline_12);
                displayIndexFlag = true;
                break;
              case 'SlotZIndex':
                var timeline_13 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(SlotZIndexTimelineState));
                timeline_13.target = ensureNotNull(this._armature_0).animation.getBlendState_5m6c58$(BlendState$Companion_getInstance().SLOT_Z_INDEX, slot.name, slot);
                timeline_13.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData_0);
                push(this._slotBlendTimelines_0, timeline_13);
                break;
              case 'SlotColor':
                var timeline_14 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(SlotColorTimelineState));
                timeline_14.target = slot;
                timeline_14.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData_0);
                push(this._slotTimelines_0, timeline_14);
                colorFlag = true;
                break;
              case 'SlotDeform':
                var timeline_15 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(DeformTimelineState));
                timeline_15.target = ensureNotNull(this._armature_0).animation.getBlendState_5m6c58$(BlendState$Companion_getInstance().SLOT_DEFORM, slot.name, slot);
                timeline_15.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData_0);
                if (timeline_15.target != null) {
                  push(this._slotBlendTimelines_0, timeline_15);
                  push_1(ffdFlags, timeline_15.geometryOffset);
                }
                 else {
                  timeline_15.returnToPool();
                }

                break;
              case 'SlotAlpha':
                var timeline_16 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(AlphaTimelineState));
                timeline_16.target = ensureNotNull(this._armature_0).animation.getBlendState_5m6c58$(BlendState$Companion_getInstance().SLOT_ALPHA, slot.name, slot);
                timeline_16.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData_0);
                push(this._slotBlendTimelines_0, timeline_16);
                break;
              default:break;
            }
          }
        }
        if (this.resetToPose) {
          if (!displayIndexFlag) {
            var timeline_17 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(SlotDisplayTimelineState));
            timeline_17.target = slot;
            timeline_17.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
            push(this._slotTimelines_0, timeline_17);
            push(this._poseTimelines_0, timeline_17);
          }
          if (!colorFlag) {
            var timeline_18 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(SlotColorTimelineState));
            timeline_18.target = slot;
            timeline_18.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
            push(this._slotTimelines_0, timeline_18);
            push(this._poseTimelines_0, timeline_18);
          }
          tmp$_26 = slot.displayFrameCount;
          for (var i = 0; i < tmp$_26; i++) {
            var displayFrame = slot.getDisplayFrameAt_za3lpa$(i);
            if (displayFrame.deformVertices.isEmpty()) {
              continue;
            }
            var geometryData = displayFrame.getGeometryData();
            if (geometryData != null && ffdFlags.indexOf_qt1dr2$(geometryData.offset) < 0) {
              var timeline_19 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(DeformTimelineState));
              timeline_19.geometryOffset = geometryData.offset;
              timeline_19.displayFrame = displayFrame;
              timeline_19.target = ensureNotNull(this._armature_0).animation.getBlendState_5m6c58$(BlendState$Companion_getInstance().SLOT_DEFORM, slot.name, slot);
              timeline_19.init_b5te3t$(ensureNotNull(this._armature_0), this, null);
              push(this._slotBlendTimelines_0, timeline_19);
              push(this._poseTimelines_0, timeline_19);
            }
          }
        }
      }
    }
    tmp$_27 = slotTimelines.values.iterator();
    while (tmp$_27.hasNext()) {
      var slotTimelines2 = tmp$_27.next();
      tmp$_28 = slotTimelines2.iterator();
      while (tmp$_28.hasNext()) {
        var timeline_20 = tmp$_28.next();
        var index_0 = this._slotTimelines_0.indexOf_11rb$(timeline_20);
        if (index_0 >= 0) {
          splice(this._slotTimelines_0, index_0, 1, []);
          timeline_20.returnToPool();
        }
        index_0 = this._slotBlendTimelines_0.indexOf_11rb$(timeline_20);
        if (index_0 >= 0) {
          splice(this._slotBlendTimelines_0, index_0, 1, []);
          timeline_20.returnToPool();
        }
      }
    }
  };
  AnimationState.prototype._advanceFadeTime_0 = function (passedTime) {
    var passedTime_0 = passedTime;
    var isFadeOut = this._fadeState > 0;
    if (this._subFadeState < 0) {
      this._subFadeState = 0;
      var eventActive = this._parent == null && this.actionEnabled;
      if (eventActive) {
        var eventType = isFadeOut ? EventObject$Companion_getInstance().FADE_OUT : EventObject$Companion_getInstance().FADE_IN;
        if (ensureNotNull(this._armature_0).eventDispatcher.hasDBEventListener_61zpoe$(eventType)) {
          var eventObject = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(EventObject));
          eventObject.type = eventType;
          eventObject.armature = ensureNotNull(this._armature_0);
          eventObject.animationState = this;
          ensureNotNull(ensureNotNull(this._armature_0).eventDispatcher).queueEvent_vah34q$(eventObject);
        }
      }
    }
    if (passedTime_0 < 0.0) {
      passedTime_0 = -passedTime_0;
    }
    this._fadeTime_0 = this._fadeTime_0 + passedTime_0;
    if (this._fadeTime_0 >= this.fadeTotalTime) {
      this._subFadeState = 1;
      this._fadeProgress = isFadeOut ? 0.0 : 1.0;
    }
     else if (this._fadeTime_0 > 0.0) {
      this._fadeProgress = isFadeOut ? 1.0 - this._fadeTime_0 / this.fadeTotalTime : this._fadeTime_0 / this.fadeTotalTime;
    }
     else {
      this._fadeProgress = isFadeOut ? 1.0 : 0.0;
    }
    if (this._subFadeState > 0) {
      if (!isFadeOut) {
        this._playheadState = this._playheadState | 1;
        this._fadeState = 0;
      }
      var eventActive_0 = this._parent == null && this.actionEnabled;
      if (eventActive_0) {
        var eventType_0 = isFadeOut ? EventObject$Companion_getInstance().FADE_OUT_COMPLETE : EventObject$Companion_getInstance().FADE_IN_COMPLETE;
        if (ensureNotNull(this._armature_0).eventDispatcher.hasDBEventListener_61zpoe$(eventType_0)) {
          var eventObject_0 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(EventObject));
          eventObject_0.type = eventType_0;
          eventObject_0.armature = ensureNotNull(this._armature_0);
          eventObject_0.animationState = this;
          ensureNotNull(ensureNotNull(this._armature_0).eventDispatcher).queueEvent_vah34q$(eventObject_0);
        }
      }
    }
  };
  AnimationState.prototype.init_wjllgj$ = function (armature, animationData, animationConfig) {
    var tmp$;
    if (this._armature_0 != null) {
      return;
    }
    this._armature_0 = armature;
    this._animationData_0 = animationData;
    this.resetToPose = animationConfig.resetToPose;
    this.additive = animationConfig.additive;
    this.displayControl = animationConfig.displayControl;
    this.actionEnabled = animationConfig.actionEnabled;
    this.blendType = animationData.blendType;
    this.layer = animationConfig.layer;
    this.playTimes = animationConfig.playTimes;
    this.timeScale = animationConfig.timeScale;
    this.fadeTotalTime = animationConfig.fadeInTime;
    this.autoFadeOutTime = animationConfig.autoFadeOutTime;
    this.name = animationConfig.name.length > 0 ? animationConfig.name : animationConfig.animation;
    this.group = animationConfig.group;
    this._weight_0 = animationConfig.weight;
    if (animationConfig.pauseFadeIn) {
      this._playheadState = 2;
    }
     else {
      this._playheadState = 3;
    }
    if (animationConfig.duration < 0.0) {
      this._position = 0.0;
      this._duration = ensureNotNull(this._animationData_0).duration;
      if (animationConfig.position !== 0.0) {
        if (this.timeScale >= 0.0) {
          this._time_0 = animationConfig.position;
        }
         else {
          this._time_0 = animationConfig.position - this._duration;
        }
      }
       else {
        this._time_0 = 0.0;
      }
    }
     else {
      this._position = animationConfig.position;
      this._duration = animationConfig.duration;
      this._time_0 = 0.0;
    }
    if (this.timeScale < 0.0 && this._time_0 === 0.0) {
      this._time_0 = -1.0E-6;
    }
    if (this.fadeTotalTime <= 0.0) {
      this._fadeProgress = 0.999999;
    }
    if (get_length_1(animationConfig.boneMask) > 0) {
      set_lengthSet_1(this._boneMask_0, get_length_1(animationConfig.boneMask));
      tmp$ = get_length_1(this._boneMask_0);
      for (var i = 0; i < tmp$; i++) {
        this._boneMask_0.set_wxm5ur$(i, animationConfig.boneMask.get_za3lpa$(i));
      }
    }
    this._actionTimeline = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(ActionTimelineState));
    ensureNotNull(this._actionTimeline).init_b5te3t$(ensureNotNull(this._armature_0), this, ensureNotNull(this._animationData_0).actionTimeline);
    ensureNotNull(this._actionTimeline)._currentTime = this._time_0;
    if (ensureNotNull(this._actionTimeline)._currentTime < 0.0) {
      ensureNotNull(this._actionTimeline)._currentTime = this._duration - ensureNotNull(this._actionTimeline)._currentTime;
    }
    if (ensureNotNull(this._animationData_0).zOrderTimeline != null) {
      this._zOrderTimeline_0 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(ZOrderTimelineState));
      ensureNotNull(this._zOrderTimeline_0).init_b5te3t$(ensureNotNull(this._armature_0), this, ensureNotNull(this._animationData_0).zOrderTimeline);
    }
  };
  var Math_0 = Math;
  AnimationState.prototype.advanceTime_lu1900$ = function (passedTime, cacheFrameRate) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15;
    var passedTime_0 = passedTime;
    if (this._fadeState !== 0 || this._subFadeState !== 0) {
      this._advanceFadeTime_0(passedTime_0);
    }
    if (this._playheadState === 3) {
      if (this.timeScale !== 1.0) {
        passedTime_0 *= this.timeScale;
      }
      this._time_0 = this._time_0 + passedTime_0;
    }
    if (this._timelineDirty_0 !== 0) {
      if (this._timelineDirty_0 === 2) {
        this._updateTimelines_0();
      }
      this._timelineDirty_0 = 0;
      this._updateBoneAndSlotTimelines_0();
    }
    var isBlendDirty = this._fadeState !== 0 || this._subFadeState === 0;
    var isCacheEnabled = this._fadeState === 0 && cacheFrameRate > 0.0;
    var isUpdateTimeline = true;
    var isUpdateBoneTimeline = true;
    var time = this._time_0;
    this._weightResult = this._weight_0 * this._fadeProgress;
    if (this._parent != null) {
      this._weightResult = this._weightResult * ensureNotNull(this._parent)._weightResult;
    }
    if (ensureNotNull(this._actionTimeline).playState <= 0) {
      (tmp$ = this._actionTimeline) != null ? (tmp$.update_14dthe$(time), Unit) : null;
    }
    if (this._weight_0 === 0.0) {
      return;
    }
    if (isCacheEnabled) {
      var internval = cacheFrameRate * 2.0;
      var tmp$_16 = ensureNotNull(this._actionTimeline);
      var x = ensureNotNull(this._actionTimeline)._currentTime * internval;
      tmp$_16._currentTime = Math_0.floor(x) / internval;
    }
    if (this._zOrderTimeline_0 != null && ensureNotNull(this._zOrderTimeline_0).playState <= 0) {
      (tmp$_0 = this._zOrderTimeline_0) != null ? (tmp$_0.update_14dthe$(time), Unit) : null;
    }
    if (isCacheEnabled) {
      var x_0 = ensureNotNull(this._actionTimeline)._currentTime * cacheFrameRate;
      var cacheFrameIndex = numberToInt(Math_0.floor(x_0));
      if (((tmp$_1 = this._armature_0) != null ? tmp$_1._cacheFrameIndex : null) === cacheFrameIndex) {
        isUpdateTimeline = false;
        isUpdateBoneTimeline = false;
      }
       else {
        (tmp$_2 = this._armature_0) != null ? (tmp$_2._cacheFrameIndex = cacheFrameIndex) : null;
        if (ensureNotNull(this._animationData_0).cachedFrames.get_za3lpa$(cacheFrameIndex)) {
          isUpdateBoneTimeline = false;
        }
         else {
          ensureNotNull(this._animationData_0).cachedFrames.set_wxm5ur$(cacheFrameIndex, true);
        }
      }
    }
    if (isUpdateTimeline) {
      var isBlend = false;
      var prevTarget = null;
      if (isUpdateBoneTimeline) {
        tmp$_3 = get_length_1(this._boneTimelines_0);
        for (var i = 0; i < tmp$_3; i++) {
          var timeline = this._boneTimelines_0.get_za3lpa$(i);
          if (timeline.playState <= 0) {
            timeline.update_14dthe$(time);
          }
          if (!equals(timeline.target, prevTarget)) {
            var blendState = Kotlin.isType(tmp$_4 = timeline.target, BlendState) ? tmp$_4 : throwCCE();
            isBlend = blendState.update_ojq8y2$(this);
            prevTarget = blendState;
            if (blendState.dirty === 1) {
              var pose = (Kotlin.isType(tmp$_5 = blendState.target, Bone) ? tmp$_5 : throwCCE()).animationPose;
              pose.x = 0.0;
              pose.y = 0.0;
              pose.rotation = 0.0;
              pose.skew = 0.0;
              pose.scaleX = 1.0;
              pose.scaleY = 1.0;
            }
          }
          if (isBlend) {
            timeline.blend_6taknv$(isBlendDirty);
          }
        }
      }
      tmp$_6 = get_length_1(this._boneBlendTimelines_0);
      for (var i_0 = 0; i_0 < tmp$_6; i_0++) {
        var timeline_0 = this._boneBlendTimelines_0.get_za3lpa$(i_0);
        if (timeline_0.playState <= 0) {
          timeline_0.update_14dthe$(time);
        }
        if ((Kotlin.isType(tmp$_7 = timeline_0.target, BlendState) ? tmp$_7 : throwCCE()).update_ojq8y2$(this)) {
          timeline_0.blend_6taknv$(isBlendDirty);
        }
      }
      if (this.displayControl) {
        tmp$_8 = get_length_1(this._slotTimelines_0);
        for (var i_1 = 0; i_1 < tmp$_8; i_1++) {
          var timeline_1 = this._slotTimelines_0.get_za3lpa$(i_1);
          if (timeline_1.playState <= 0) {
            var slot = Kotlin.isType(tmp$_9 = timeline_1.target, Slot) ? tmp$_9 : throwCCE();
            var displayController = slot.displayController;
            if (displayController == null || equals(displayController, this.name) || equals(displayController, this.group)) {
              timeline_1.update_14dthe$(time);
            }
          }
        }
      }
      tmp$_10 = get_length_1(this._slotBlendTimelines_0);
      for (var i_2 = 0; i_2 < tmp$_10; i_2++) {
        var timeline_2 = this._slotBlendTimelines_0.get_za3lpa$(i_2);
        if (timeline_2.playState <= 0) {
          var blendState_0 = Kotlin.isType(tmp$_11 = timeline_2.target, BlendState) ? tmp$_11 : throwCCE();
          timeline_2.update_14dthe$(time);
          if (blendState_0.update_ojq8y2$(this)) {
            timeline_2.blend_6taknv$(isBlendDirty);
          }
        }
      }
      tmp$_12 = get_length_1(this._constraintTimelines_0);
      for (var i_3 = 0; i_3 < tmp$_12; i_3++) {
        var timeline_3 = this._constraintTimelines_0.get_za3lpa$(i_3);
        if (timeline_3.playState <= 0) {
          timeline_3.update_14dthe$(time);
        }
      }
      if (get_lengthSet_1(this._animationTimelines_0) > 0) {
        var dL = 100.0;
        var dR = 100.0;
        var leftState = null;
        var rightState = null;
        tmp$_13 = get_length_1(this._animationTimelines_0);
        for (var i_4 = 0; i_4 < tmp$_13; i_4++) {
          var timeline_4 = this._animationTimelines_0.get_za3lpa$(i_4);
          if (timeline_4.playState <= 0) {
            timeline_4.update_14dthe$(time);
          }
          if (this.blendType === AnimationBlendType$E1D_getInstance()) {
            var animationState = Kotlin.isType(tmp$_14 = timeline_4.target, AnimationState) ? tmp$_14 : throwCCE();
            var d = this.parameterX - animationState.positionX;
            if (d >= 0.0) {
              if (d < dL) {
                dL = d;
                leftState = animationState;
              }
            }
             else {
              if (-d < dR) {
                dR = -d;
                rightState = animationState;
              }
            }
          }
        }
        if (leftState != null) {
          if (!equals(this._activeChildA_0, leftState)) {
            if (this._activeChildA_0 != null) {
              ensureNotNull(this._activeChildA_0).weight = 0.0;
            }
            this._activeChildA_0 = leftState;
            ensureNotNull(this._activeChildA_0).activeTimeline();
          }
          if (!equals(this._activeChildB_0, rightState)) {
            if (this._activeChildB_0 != null) {
              ensureNotNull(this._activeChildB_0).weight = 0.0;
            }
            this._activeChildB_0 = rightState;
          }
          leftState.weight = dR / (dL + dR);
          if (rightState != null) {
            rightState.weight = 1.0 - leftState.weight;
          }
        }
      }
    }
    if (this._fadeState === 0) {
      if (this._subFadeState > 0) {
        this._subFadeState = 0;
        if (get_lengthSet_1(this._poseTimelines_0) > 0) {
          tmp$_15 = this._poseTimelines_0.iterator();
          while (tmp$_15.hasNext()) {
            var timeline_5 = tmp$_15.next();
            var index = this._boneTimelines_0.indexOf_11rb$(timeline_5);
            if (index >= 0) {
              splice(this._boneTimelines_0, index, 1, []);
              timeline_5.returnToPool();
              continue;
            }
            index = this._boneBlendTimelines_0.indexOf_11rb$(timeline_5);
            if (index >= 0) {
              splice(this._boneBlendTimelines_0, index, 1, []);
              timeline_5.returnToPool();
              continue;
            }
            index = this._slotTimelines_0.indexOf_11rb$(timeline_5);
            if (index >= 0) {
              splice(this._slotTimelines_0, index, 1, []);
              timeline_5.returnToPool();
              continue;
            }
            index = this._slotBlendTimelines_0.indexOf_11rb$(timeline_5);
            if (index >= 0) {
              splice(this._slotBlendTimelines_0, index, 1, []);
              timeline_5.returnToPool();
              continue;
            }
            index = this._constraintTimelines_0.indexOf_11rb$(timeline_5);
            if (index >= 0) {
              splice(this._constraintTimelines_0, index, 1, []);
              timeline_5.returnToPool();
              continue;
            }
          }
          set_lengthSet_1(this._poseTimelines_0, 0);
        }
      }
      if (ensureNotNull(this._actionTimeline).playState > 0) {
        if (this.autoFadeOutTime >= 0.0) {
          this.fadeOut_8555vt$(this.autoFadeOutTime);
        }
      }
    }
  };
  AnimationState.prototype.play = function () {
    this._playheadState = 3;
  };
  AnimationState.prototype.stop = function () {
    this._playheadState = this._playheadState & 1;
  };
  AnimationState.prototype.fadeOut_8555vt$ = function (fadeOutTime, pausePlayhead) {
    if (pausePlayhead === void 0)
      pausePlayhead = true;
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var fadeOutTime_0 = fadeOutTime;
    if (fadeOutTime_0 < 0.0) {
      fadeOutTime_0 = 0.0;
    }
    if (pausePlayhead) {
      this._playheadState = this._playheadState & 2;
    }
    if (this._fadeState > 0) {
      if (fadeOutTime_0 > this.fadeTotalTime - this._fadeTime_0) {
        return;
      }
    }
     else {
      this._fadeState = 1;
      this._subFadeState = -1;
      if (fadeOutTime_0 <= 0.0 || this._fadeProgress <= 0.0) {
        this._fadeProgress = 1.0E-6;
      }
      tmp$ = this._boneTimelines_0.iterator();
      while (tmp$.hasNext()) {
        var timeline = tmp$.next();
        timeline.fadeOut();
      }
      tmp$_0 = this._boneBlendTimelines_0.iterator();
      while (tmp$_0.hasNext()) {
        var timeline_0 = tmp$_0.next();
        timeline_0.fadeOut();
      }
      tmp$_1 = this._slotTimelines_0.iterator();
      while (tmp$_1.hasNext()) {
        var timeline_1 = tmp$_1.next();
        timeline_1.fadeOut();
      }
      tmp$_2 = this._slotBlendTimelines_0.iterator();
      while (tmp$_2.hasNext()) {
        var timeline_2 = tmp$_2.next();
        timeline_2.fadeOut();
      }
      tmp$_3 = this._constraintTimelines_0.iterator();
      while (tmp$_3.hasNext()) {
        var timeline_3 = tmp$_3.next();
        timeline_3.fadeOut();
      }
      tmp$_4 = this._animationTimelines_0.iterator();
      while (tmp$_4.hasNext()) {
        var timeline_4 = tmp$_4.next();
        timeline_4.fadeOut();
        var animaitonState = Kotlin.isType(tmp$_5 = timeline_4.target, AnimationState) ? tmp$_5 : throwCCE();
        animaitonState.fadeOut_8555vt$(999999.0, true);
      }
    }
    this.displayControl = false;
    this.fadeTotalTime = this._fadeProgress > 1.0E-6 ? fadeOutTime_0 / this._fadeProgress : 0.0;
    this._fadeTime_0 = this.fadeTotalTime * (1.0 - this._fadeProgress);
  };
  AnimationState.prototype.containsBoneMask_61zpoe$ = function (boneName) {
    return get_lengthSet_1(this._boneMask_0) === 0 || this._boneMask_0.indexOf_11rb$(boneName) >= 0;
  };
  AnimationState.prototype.addBoneMask_ivxn3r$ = function (boneName, recursive) {
    if (recursive === void 0)
      recursive = true;
    var tmp$, tmp$_0, tmp$_1;
    tmp$_0 = (tmp$ = this._armature_0) != null ? tmp$.getBone_pdl1vj$(boneName) : null;
    if (tmp$_0 == null) {
      return;
    }
    var currentBone = tmp$_0;
    if (this._boneMask_0.indexOf_11rb$(boneName) < 0) {
      push(this._boneMask_0, boneName);
    }
    if (recursive) {
      tmp$_1 = ensureNotNull(this._armature_0).getBones().iterator();
      while (tmp$_1.hasNext()) {
        var bone = tmp$_1.next();
        if (this._boneMask_0.indexOf_11rb$(bone.name) < 0 && currentBone.contains_vcc4uy$(bone)) {
          push(this._boneMask_0, bone.name);
        }
      }
    }
    this._timelineDirty_0 = 1;
  };
  AnimationState.prototype.removeBoneMask_ivxn3r$ = function (boneName, recursive) {
    if (recursive === void 0)
      recursive = true;
    var tmp$, tmp$_0, tmp$_1;
    var index = this._boneMask_0.indexOf_11rb$(boneName);
    if (index >= 0) {
      splice(this._boneMask_0, index, 1, []);
    }
    if (recursive) {
      var currentBone = (tmp$ = this._armature_0) != null ? tmp$.getBone_pdl1vj$(boneName) : null;
      if (currentBone != null) {
        var bones = ensureNotNull(this._armature_0).getBones();
        if (get_lengthSet_1(this._boneMask_0) > 0) {
          tmp$_0 = bones.iterator();
          while (tmp$_0.hasNext()) {
            var bone = tmp$_0.next();
            var index_0 = this._boneMask_0.indexOf_11rb$(bone.name);
            if (index_0 >= 0 && currentBone.contains_vcc4uy$(bone)) {
              splice(this._boneMask_0, index_0, 1, []);
            }
          }
        }
         else {
          tmp$_1 = bones.iterator();
          while (tmp$_1.hasNext()) {
            var bone_0 = tmp$_1.next();
            if (equals(bone_0, currentBone)) {
              continue;
            }
            if (!currentBone.contains_vcc4uy$(bone_0)) {
              push(this._boneMask_0, bone_0.name);
            }
          }
        }
      }
    }
    this._timelineDirty_0 = 1;
  };
  AnimationState.prototype.removeAllBoneMask = function () {
    set_lengthSet_1(this._boneMask_0, 0);
    this._timelineDirty_0 = 1;
  };
  AnimationState.prototype.addState_uxc1bv$ = function (animationState, timelineDatas) {
    if (timelineDatas === void 0)
      timelineDatas = null;
    var tmp$, tmp$_0;
    if (timelineDatas != null) {
      tmp$ = timelineDatas.iterator();
      while (tmp$.hasNext()) {
        var timelineData = tmp$.next();
        switch (timelineData.type.name) {
          case 'AnimationProgress':
            var timeline = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(AnimationProgressTimelineState));
            timeline.target = animationState;
            timeline.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
            push(this._animationTimelines_0, timeline);
            if (this.blendType !== AnimationBlendType$None_getInstance()) {
              var animaitonTimelineData = Kotlin.isType(tmp$_0 = timelineData, AnimationTimelineData) ? tmp$_0 : throwCCE();
              animationState.positionX = animaitonTimelineData.x;
              animationState.positionY = animaitonTimelineData.y;
              animationState.weight = 0.0;
            }

            animationState._parent = this;
            this.resetToPose = false;
            break;
          case 'AnimationWeight':
            var timeline_0 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(AnimationWeightTimelineState));
            timeline_0.target = animationState;
            timeline_0.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
            push(this._animationTimelines_0, timeline_0);
            break;
          case 'AnimationParameter':
            var timeline_1 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(AnimationParametersTimelineState));
            timeline_1.target = animationState;
            timeline_1.init_b5te3t$(ensureNotNull(this._armature_0), this, timelineData);
            push(this._animationTimelines_0, timeline_1);
            break;
          default:break;
        }
      }
    }
    if (animationState._parent == null) {
      animationState._parent = this;
    }
  };
  AnimationState.prototype.activeTimeline = function () {
    var tmp$;
    tmp$ = this._slotTimelines_0.iterator();
    while (tmp$.hasNext()) {
      var timeline = tmp$.next();
      timeline.dirty = true;
      timeline._currentTime = -1.0;
    }
  };
  Object.defineProperty(AnimationState.prototype, 'isFadeIn', {
    get: function () {
      return this._fadeState < 0;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'isFadeOut', {
    get: function () {
      return this._fadeState > 0;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'isFadeComplete', {
    get: function () {
      return this._fadeState === 0;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'isPlaying', {
    get: function () {
      return (this._playheadState & 2) !== 0 && ensureNotNull(this._actionTimeline).playState <= 0;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'isCompleted', {
    get: function () {
      return ensureNotNull(this._actionTimeline).playState > 0;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'currentPlayTimes', {
    get: function () {
      return ensureNotNull(this._actionTimeline).currentPlayTimes;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'totalTime', {
    get: function () {
      return this._duration;
    }
  });
  Object.defineProperty(AnimationState.prototype, 'currentTime', {
    get: function () {
      return ensureNotNull(this._actionTimeline)._currentTime;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      var value_0 = value;
      var currentPlayTimes = ensureNotNull(this._actionTimeline).currentPlayTimes - (ensureNotNull(this._actionTimeline).playState > 0 ? 1 : 0) | 0;
      if (value_0 < 0 || this._duration < value_0) {
        value_0 = value_0 % this._duration + currentPlayTimes * this._duration;
        if (value_0 < 0) {
          value_0 += this._duration;
        }
      }
      if (this.playTimes > 0 && currentPlayTimes === (this.playTimes - 1 | 0) && value_0 === this._duration && this._parent == null) {
        value_0 = this._duration - 1.0E-6;
      }
      if (this._time_0 === value_0) {
        return;
      }
      this._time_0 = value_0;
      ensureNotNull(this._actionTimeline).setCurrentTime_14dthe$(this._time_0);
      (tmp$ = this._zOrderTimeline_0) != null ? (tmp$.playState = -1) : null;
      tmp$_0 = this._boneTimelines_0.iterator();
      while (tmp$_0.hasNext()) {
        var timeline = tmp$_0.next();
        timeline.playState = -1;
      }
      tmp$_1 = this._slotTimelines_0.iterator();
      while (tmp$_1.hasNext()) {
        var timeline_0 = tmp$_1.next();
        timeline_0.playState = -1;
      }
    }
  });
  Object.defineProperty(AnimationState.prototype, 'weight', {
    get: function () {
      return this._weight_0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      if (this._weight_0 === value)
        return;
      this._weight_0 = value;
      tmp$ = this._boneTimelines_0.iterator();
      while (tmp$.hasNext()) {
        var timeline = tmp$.next();
        timeline.dirty = true;
      }
      tmp$_0 = this._boneBlendTimelines_0.iterator();
      while (tmp$_0.hasNext()) {
        var timeline_0 = tmp$_0.next();
        timeline_0.dirty = true;
      }
      tmp$_1 = this._slotBlendTimelines_0.iterator();
      while (tmp$_1.hasNext()) {
        var timeline_1 = tmp$_1.next();
        timeline_1.dirty = true;
      }
    }
  });
  Object.defineProperty(AnimationState.prototype, 'animationData', {
    get: function () {
      return ensureNotNull(this._animationData_0);
    }
  });
  AnimationState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationState',
    interfaces: [BaseObject]
  };
  function BlendState() {
    BlendState$Companion_getInstance();
    BaseObject.call(this);
    this.dirty = 0;
    this.layer = 0;
    this.leftWeight = 0.0;
    this.layerWeight = 0.0;
    this.blendWeight = 0.0;
    this.target = null;
  }
  function BlendState$Companion() {
    BlendState$Companion_instance = this;
    this.BONE_TRANSFORM = 'boneTransform';
    this.BONE_ALPHA = 'boneAlpha';
    this.SURFACE = 'surface';
    this.SLOT_DEFORM = 'slotDeform';
    this.SLOT_ALPHA = 'slotAlpha';
    this.SLOT_Z_INDEX = 'slotZIndex';
  }
  BlendState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BlendState$Companion_instance = null;
  function BlendState$Companion_getInstance() {
    if (BlendState$Companion_instance === null) {
      new BlendState$Companion();
    }
    return BlendState$Companion_instance;
  }
  BlendState.prototype.toString = function () {
    return '[class dragonBones.BlendState]';
  };
  BlendState.prototype._onClear = function () {
    this.reset();
    this.target = null;
  };
  BlendState.prototype.reset = function () {
    this.dirty = 0;
    this.layer = 0;
    this.leftWeight = 0.0;
    this.layerWeight = 0.0;
    this.blendWeight = 0.0;
  };
  BlendState.prototype.update_ojq8y2$ = function (animationState) {
    var animationLayer = animationState.layer;
    var animationWeight = animationState._weightResult;
    if (this.dirty > 0) {
      if (this.leftWeight > 0.0) {
        if (this.layer !== animationLayer) {
          if (this.layerWeight >= this.leftWeight) {
            this.dirty = this.dirty + 1 | 0;
            this.layer = animationLayer;
            this.leftWeight = 0.0;
            this.blendWeight = 0.0;
            return false;
          }
          this.layer = animationLayer;
          this.leftWeight = this.leftWeight - this.layerWeight;
          this.layerWeight = 0.0;
        }
        animationWeight *= this.leftWeight;
        this.dirty = this.dirty + 1 | 0;
        this.blendWeight = animationWeight;
        this.layerWeight = this.layerWeight + this.blendWeight;
        return true;
      }
      return false;
    }
    this.dirty = this.dirty + 1 | 0;
    this.layer = animationLayer;
    this.leftWeight = 1.0;
    this.blendWeight = animationWeight;
    this.layerWeight = animationWeight;
    return true;
  };
  BlendState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendState',
    interfaces: [BaseObject]
  };
  function TimelineState() {
    BaseObject.call(this);
    this.dirty = false;
    this.playState = -1;
    this.currentPlayTimes = -1;
    this._currentTime = -1.0;
    this.target = null;
    this._isTween = false;
    this._valueOffset = 0;
    this._frameValueOffset = 0;
    this._frameOffset = 0;
    this._frameRate = 0;
    this._frameCount = 0;
    this._frameIndex = -1;
    this._frameRateR = 0.0;
    this._position = 0.0;
    this._duration = 0.0;
    this._timeScale = 1.0;
    this._timeOffset = 0.0;
    this._animationData = null;
    this._timelineData = null;
    this._armature = null;
    this._animationState = null;
    this._actionTimeline = null;
    this._timelineArray = null;
    this._frameArray = null;
    this._valueArray = null;
    this._frameIndices = null;
  }
  TimelineState.prototype._onClear = function () {
    this.dirty = false;
    this.playState = -1;
    this.currentPlayTimes = -1;
    this._currentTime = -1.0;
    this.target = null;
    this._isTween = false;
    this._valueOffset = 0;
    this._frameValueOffset = 0;
    this._frameOffset = 0;
    this._frameRate = 0;
    this._frameCount = 0;
    this._frameIndex = -1;
    this._frameRateR = 0.0;
    this._position = 0.0;
    this._duration = 0.0;
    this._timeScale = 1.0;
    this._timeOffset = 0.0;
    this._animationData = null;
    this._timelineData = null;
    this._armature = null;
    this._animationState = null;
    this._actionTimeline = null;
    this._frameArray = null;
    this._valueArray = null;
    this._timelineArray = null;
    this._frameIndices = null;
  };
  TimelineState.prototype._setCurrentTime_14dthe$ = function (passedTime) {
    var passedTime_0 = passedTime;
    var prevState = this.playState;
    var prevPlayTimes = this.currentPlayTimes;
    var prevTime = this._currentTime;
    if (this._actionTimeline != null && this._frameCount <= 1) {
      this.playState = ensureNotNull(this._actionTimeline).playState >= 0 ? 1 : -1;
      this.currentPlayTimes = 1;
      this._currentTime = ensureNotNull(this._actionTimeline)._currentTime;
    }
     else if (this._actionTimeline == null || this._timeScale !== 1.0 || this._timeOffset !== 0.0) {
      var playTimes = ensureNotNull(this._animationState).playTimes;
      var totalTime = playTimes * this._duration;
      passedTime_0 *= this._timeScale;
      if (this._timeOffset !== 0.0) {
        passedTime_0 += this._timeOffset * ensureNotNull(this._animationData).duration;
      }
      if (playTimes > 0 && (passedTime_0 >= totalTime || passedTime_0 <= -totalTime)) {
        if (this.playState <= 0 && ensureNotNull(this._animationState)._playheadState === 3) {
          this.playState = 1;
        }
        this.currentPlayTimes = playTimes;
        if (passedTime_0 < 0.0) {
          this._currentTime = 0.0;
        }
         else {
          this._currentTime = this.playState === 1 ? this._duration + 1.0E-6 : this._duration;
        }
      }
       else {
        if (this.playState !== 0 && ensureNotNull(this._animationState)._playheadState === 3) {
          this.playState = 0;
        }
        if (passedTime_0 < 0.0) {
          passedTime_0 = -passedTime_0;
          var x = passedTime_0 / this._duration;
          this.currentPlayTimes = numberToInt(Math_0.floor(x));
          this._currentTime = this._duration - passedTime_0 % this._duration;
        }
         else {
          var x_0 = passedTime_0 / this._duration;
          this.currentPlayTimes = numberToInt(Math_0.floor(x_0));
          this._currentTime = passedTime_0 % this._duration;
        }
      }
      this._currentTime = this._currentTime + this._position;
    }
     else {
      this.playState = ensureNotNull(this._actionTimeline).playState;
      this.currentPlayTimes = ensureNotNull(this._actionTimeline).currentPlayTimes;
      this._currentTime = ensureNotNull(this._actionTimeline)._currentTime;
    }
    if (this.currentPlayTimes === prevPlayTimes && this._currentTime === prevTime) {
      return false;
    }
    if (prevState < 0 && this.playState !== prevState || (this.playState <= 0 && this.currentPlayTimes !== prevPlayTimes)) {
      this._frameIndex = -1;
    }
    return true;
  };
  TimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    this._armature = armature;
    this._animationState = animationState;
    this._timelineData = timelineData;
    this._actionTimeline = ensureNotNull(this._animationState)._actionTimeline;
    if (equals(this, this._actionTimeline)) {
      this._actionTimeline = null;
    }
    this._animationData = ensureNotNull(this._animationState).animationData;
    this._frameRate = ensureNotNull(ensureNotNull(this._animationData).parent).frameRate;
    this._frameRateR = 1.0 / this._frameRate;
    this._position = ensureNotNull(this._animationState)._position;
    this._duration = ensureNotNull(this._animationState)._duration;
    var _timelineData = this._timelineData;
    if (_timelineData != null) {
      var dragonBonesData = ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent);
      this._frameArray = dragonBonesData.frameArray;
      this._timelineArray = dragonBonesData.timelineArray;
      this._frameIndices = dragonBonesData.frameIndices;
      this._frameCount = ensureNotNull(this._timelineArray).get_za3lpa$(_timelineData.offset + BinaryOffset$TimelineKeyFrameCount_getInstance().index | 0);
      this._frameValueOffset = ensureNotNull(this._timelineArray).get_za3lpa$(_timelineData.offset + BinaryOffset$TimelineFrameValueOffset_getInstance().index | 0);
      this._timeScale = 100.0 / ensureNotNull(this._timelineArray).get_za3lpa$(_timelineData.offset + BinaryOffset$TimelineScale_getInstance().index | 0);
      this._timeOffset = ensureNotNull(this._timelineArray).get_za3lpa$(_timelineData.offset + BinaryOffset$TimelineOffset_getInstance().index | 0) * 0.01;
    }
  };
  TimelineState.prototype.fadeOut = function () {
    this.dirty = false;
  };
  TimelineState.prototype.update_14dthe$ = function (passedTime) {
    var tmp$, tmp$_0;
    if (this._setCurrentTime_14dthe$(passedTime)) {
      if (this._frameCount > 1) {
        var x = this._currentTime * this._frameRate;
        var timelineFrameIndex = numberToInt(Math_0.floor(x));
        var frameIndex = ensureNotNull(this._frameIndices).get_za3lpa$((Kotlin.isType(tmp$ = this._timelineData, TimelineData) ? tmp$ : throwCCE()).frameIndicesOffset + timelineFrameIndex | 0);
        if (this._frameIndex !== frameIndex) {
          this._frameIndex = frameIndex;
          this._frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$((Kotlin.isType(tmp$_0 = this._timelineData, TimelineData) ? tmp$_0 : throwCCE()).offset + BinaryOffset$TimelineFrameOffset_getInstance().index + this._frameIndex | 0) | 0;
          this._onArriveAtFrame();
        }
      }
       else if (this._frameIndex < 0) {
        this._frameIndex = 0;
        if (this._timelineData != null) {
          this._frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(ensureNotNull(this._timelineData).offset + BinaryOffset$TimelineFrameOffset_getInstance().index | 0) | 0;
        }
        this._onArriveAtFrame();
      }
      if (this._isTween || this.dirty) {
        this._onUpdateFrame();
      }
    }
  };
  TimelineState.prototype.blend_6taknv$ = function (_isDirty) {
  };
  TimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimelineState',
    interfaces: [BaseObject]
  };
  function TweenTimelineState() {
    TweenTimelineState$Companion_getInstance();
    TimelineState.call(this);
    this._tweenType = TweenType$None_getInstance();
    this._curveCount = 0;
    this._framePosition = 0.0;
    this._frameDurationR = 0.0;
    this._tweenEasing = 0.0;
    this._tweenProgress = 0.0;
    this._valueScale = 1.0;
  }
  function TweenTimelineState$Companion() {
    TweenTimelineState$Companion_instance = this;
  }
  TweenTimelineState$Companion.prototype._getEasingValue_0 = function (tweenType, progress, easing) {
    var value = progress;
    switch (tweenType.name) {
      case 'QuadIn':
        var $receiver = numberToDouble(progress);
        var x = numberToDouble(2.0);
        value = Math_0.pow($receiver, x);
        break;
      case 'QuadOut':
        var $receiver_0 = numberToDouble(1.0 - progress);
        var x_0 = numberToDouble(2.0);
        value = 1.0 - Math_0.pow($receiver_0, x_0);
        break;
      case 'QuadInOut':
        var x_1 = progress * math.PI;
        value = 0.5 * (1.0 - Math_0.cos(x_1));
        break;
      default:break;
    }
    return (value - progress) * easing + progress;
  };
  TweenTimelineState$Companion.prototype._getEasingCurveValue_0 = function (progress, samples, count, offset) {
    if (progress <= 0.0) {
      return 0.0;
    }
     else if (progress >= 1.0) {
      return 1.0;
    }
    var isOmited = count > 0;
    var segmentCount = count + 1 | 0;
    var x = progress * segmentCount;
    var valueIndex = numberToInt(Math_0.floor(x));
    var fromValue;
    var toValue;
    if (isOmited) {
      fromValue = valueIndex === 0 ? 0.0 : samples.get_za3lpa$(offset + valueIndex - 1 | 0);
      toValue = valueIndex === (segmentCount - 1 | 0) ? 10000.0 : samples.get_za3lpa$(offset + valueIndex | 0);
    }
     else {
      fromValue = samples.get_za3lpa$(offset + valueIndex - 1 | 0);
      toValue = samples.get_za3lpa$(offset + valueIndex | 0);
    }
    return (fromValue + (toValue - fromValue) * (progress * segmentCount - valueIndex)) * 1.0E-4;
  };
  TweenTimelineState$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TweenTimelineState$Companion_instance = null;
  function TweenTimelineState$Companion_getInstance() {
    if (TweenTimelineState$Companion_instance === null) {
      new TweenTimelineState$Companion();
    }
    return TweenTimelineState$Companion_instance;
  }
  TweenTimelineState.prototype._onClear = function () {
    TimelineState.prototype._onClear.call(this);
    this._tweenType = TweenType$None_getInstance();
    this._curveCount = 0;
    this._framePosition = 0.0;
    this._frameDurationR = 0.0;
    this._tweenEasing = 0.0;
    this._tweenProgress = 0.0;
    this._valueScale = 1.0;
  };
  TweenTimelineState.prototype._onArriveAtFrame = function () {
    var tmp$;
    if (this._frameCount > 1 && (this._frameIndex !== (this._frameCount - 1 | 0) || ensureNotNull(this._animationState).playTimes === 0 || ensureNotNull(this._animationState).currentPlayTimes < (ensureNotNull(this._animationState).playTimes - 1 | 0))) {
      this._tweenType = TweenType$Companion_getInstance().get_za3lpa$(ensureNotNull(this._frameArray)[this._frameOffset + BinaryOffset$FrameTweenType_getInstance().index | 0]);
      this._isTween = this._tweenType !== TweenType$None_getInstance();
      if (this._isTween) {
        if (this._tweenType === TweenType$Curve_getInstance()) {
          this._curveCount = ensureNotNull(this._frameArray)[this._frameOffset + BinaryOffset$FrameTweenEasingOrCurveSampleCount_getInstance().index | 0];
        }
         else if (this._tweenType !== TweenType$None_getInstance() && this._tweenType !== TweenType$Line_getInstance()) {
          this._tweenEasing = ensureNotNull(this._frameArray)[this._frameOffset + BinaryOffset$FrameTweenEasingOrCurveSampleCount_getInstance().index | 0] * 0.01;
        }
      }
       else {
        this.dirty = true;
      }
      this._framePosition = ensureNotNull(this._frameArray)[this._frameOffset] * this._frameRateR;
      if (this._frameIndex === (this._frameCount - 1 | 0)) {
        this._frameDurationR = 1.0 / (ensureNotNull(this._animationData).duration - this._framePosition);
      }
       else {
        var nextFrameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$((Kotlin.isType(tmp$ = this._timelineData, TimelineData) ? tmp$ : throwCCE()).offset + BinaryOffset$TimelineFrameOffset_getInstance().index + this._frameIndex + 1 | 0) | 0;
        var frameDuration = ensureNotNull(this._frameArray)[nextFrameOffset] * this._frameRateR - this._framePosition;
        if (frameDuration > 0) {
          this._frameDurationR = 1.0 / frameDuration;
        }
         else {
          this._frameDurationR = 0.0;
        }
      }
    }
     else {
      this.dirty = true;
      this._isTween = false;
    }
  };
  TweenTimelineState.prototype._onUpdateFrame = function () {
    if (this._isTween) {
      this.dirty = true;
      this._tweenProgress = (this._currentTime - this._framePosition) * this._frameDurationR;
      if (this._tweenType === TweenType$Curve_getInstance()) {
        this._tweenProgress = TweenTimelineState$Companion_getInstance()._getEasingCurveValue_0(this._tweenProgress, asDouble(get_raw(ensureNotNull(this._frameArray))), this._curveCount, this._frameOffset + BinaryOffset$FrameCurveSamples_getInstance().index | 0);
      }
       else if (this._tweenType !== TweenType$Line_getInstance()) {
        this._tweenProgress = TweenTimelineState$Companion_getInstance()._getEasingValue_0(this._tweenType, this._tweenProgress, this._tweenEasing);
      }
    }
  };
  TweenTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TweenTimelineState',
    interfaces: [TimelineState]
  };
  function SingleValueTimelineState() {
    TweenTimelineState.call(this);
    this._current = 0.0;
    this._difference = 0.0;
    this._result = 0.0;
  }
  SingleValueTimelineState.prototype._onClear = function () {
    TweenTimelineState.prototype._onClear.call(this);
    this._current = 0.0;
    this._difference = 0.0;
    this._result = 0.0;
  };
  SingleValueTimelineState.prototype._onArriveAtFrame = function () {
    TweenTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData != null) {
      var valueScale = this._valueScale;
      var valueArray = ensureNotNull(this._valueArray);
      var valueOffset = this._valueOffset + this._frameValueOffset + this._frameIndex | 0;
      if (this._isTween) {
        var nextValueOffset = this._frameIndex === (this._frameCount - 1 | 0) ? this._valueOffset + this._frameValueOffset | 0 : valueOffset + 1 | 0;
        if (valueScale === 1.0) {
          this._current = valueArray.getDouble_za3lpa$(valueOffset);
          this._difference = valueArray.getDouble_za3lpa$(nextValueOffset) - this._current;
        }
         else {
          this._current = valueArray.getDouble_za3lpa$(valueOffset) * valueScale;
          this._difference = valueArray.getDouble_za3lpa$(nextValueOffset) * valueScale - this._current;
        }
      }
       else {
        this._result = valueArray.getDouble_za3lpa$(valueOffset) * valueScale;
      }
    }
     else {
      this._result = 0.0;
    }
  };
  SingleValueTimelineState.prototype._onUpdateFrame = function () {
    TweenTimelineState.prototype._onUpdateFrame.call(this);
    if (this._isTween) {
      this._result = this._current + this._difference * this._tweenProgress;
    }
  };
  SingleValueTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SingleValueTimelineState',
    interfaces: [TweenTimelineState]
  };
  function DoubleValueTimelineState() {
    TweenTimelineState.call(this);
    this._currentA = 0.0;
    this._currentB = 0.0;
    this._differenceA = 0.0;
    this._differenceB = 0.0;
    this._resultA = 0.0;
    this._resultB = 0.0;
  }
  DoubleValueTimelineState.prototype._onClear = function () {
    TweenTimelineState.prototype._onClear.call(this);
    this._currentA = 0.0;
    this._currentB = 0.0;
    this._differenceA = 0.0;
    this._differenceB = 0.0;
    this._resultA = 0.0;
    this._resultB = 0.0;
  };
  DoubleValueTimelineState.prototype._onArriveAtFrame = function () {
    TweenTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData != null) {
      var valueScale = this._valueScale;
      var valueArray = ensureNotNull(this._valueArray);
      var valueOffset = this._valueOffset + this._frameValueOffset + (this._frameIndex * 2 | 0) | 0;
      if (this._isTween) {
        var nextValueOffset = this._frameIndex === (this._frameCount - 1 | 0) ? this._valueOffset + this._frameValueOffset | 0 : valueOffset + 2 | 0;
        if (valueScale === 1.0) {
          this._currentA = valueArray.getDouble_za3lpa$(valueOffset);
          this._currentB = valueArray.getDouble_za3lpa$(valueOffset + 1 | 0);
          this._differenceA = valueArray.getDouble_za3lpa$(nextValueOffset) - this._currentA;
          this._differenceB = valueArray.getDouble_za3lpa$(nextValueOffset + 1 | 0) - this._currentB;
        }
         else {
          this._currentA = valueArray.getDouble_za3lpa$(valueOffset) * valueScale;
          this._currentB = valueArray.getDouble_za3lpa$(valueOffset + 1 | 0) * valueScale;
          this._differenceA = valueArray.getDouble_za3lpa$(nextValueOffset) * valueScale - this._currentA;
          this._differenceB = valueArray.getDouble_za3lpa$(nextValueOffset + 1 | 0) * valueScale - this._currentB;
        }
      }
       else {
        this._resultA = valueArray.getDouble_za3lpa$(valueOffset) * valueScale;
        this._resultB = valueArray.getDouble_za3lpa$(valueOffset + 1 | 0) * valueScale;
      }
    }
     else {
      this._resultA = 0.0;
      this._resultB = 0.0;
    }
  };
  DoubleValueTimelineState.prototype._onUpdateFrame = function () {
    TweenTimelineState.prototype._onUpdateFrame.call(this);
    if (this._isTween) {
      this._resultA = this._currentA + this._differenceA * this._tweenProgress;
      this._resultB = this._currentB + this._differenceB * this._tweenProgress;
    }
  };
  DoubleValueTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleValueTimelineState',
    interfaces: [TweenTimelineState]
  };
  function MutilpleValueTimelineState() {
    TweenTimelineState.call(this);
    this._valueCount = 0;
    this._rd = new DoubleArrayList();
  }
  MutilpleValueTimelineState.prototype._onClear = function () {
    TweenTimelineState.prototype._onClear.call(this);
    this._valueCount = 0;
    this._rd.clear();
  };
  MutilpleValueTimelineState.prototype._onArriveAtFrame = function () {
    TweenTimelineState.prototype._onArriveAtFrame.call(this);
    var valueCount = this._valueCount;
    var rd = this._rd;
    if (this._timelineData != null) {
      var valueScale = this._valueScale;
      var valueArray = ensureNotNull(this._valueArray);
      var valueOffset = this._valueOffset + this._frameValueOffset + Kotlin.imul(this._frameIndex, valueCount) | 0;
      if (this._isTween) {
        var nextValueOffset = this._frameIndex === (this._frameCount - 1 | 0) ? this._valueOffset + this._frameValueOffset | 0 : valueOffset + valueCount | 0;
        if (valueScale === 1.0) {
          for (var i = 0; i < valueCount; i++) {
            rd.set_5wr77w$(valueCount + i | 0, valueArray.getDouble_za3lpa$(nextValueOffset + i | 0) - valueArray.getDouble_za3lpa$(valueOffset + i | 0));
          }
        }
         else {
          for (var i_0 = 0; i_0 < valueCount; i_0++) {
            rd.set_5wr77w$(valueCount + i_0 | 0, (valueArray.getDouble_za3lpa$(nextValueOffset + i_0 | 0) - valueArray.getDouble_za3lpa$(valueOffset + i_0 | 0)) * valueScale);
          }
        }
      }
       else if (valueScale === 1.0) {
        for (var i_1 = 0; i_1 < valueCount; i_1++) {
          rd.set_5wr77w$(i_1, valueArray.getDouble_za3lpa$(valueOffset + i_1 | 0));
        }
      }
       else {
        for (var i_2 = 0; i_2 < valueCount; i_2++) {
          rd.set_5wr77w$(i_2, valueArray.getDouble_za3lpa$(valueOffset + i_2 | 0) * valueScale);
        }
      }
    }
     else {
      for (var i_3 = 0; i_3 < valueCount; i_3++) {
        rd.set_5wr77w$(i_3, 0.0);
      }
    }
  };
  MutilpleValueTimelineState.prototype._onUpdateFrame = function () {
    TweenTimelineState.prototype._onUpdateFrame.call(this);
    if (this._isTween) {
      var valueCount = this._valueCount;
      var valueScale = this._valueScale;
      var tweenProgress = this._tweenProgress;
      var valueArray = ensureNotNull(this._valueArray);
      var rd = this._rd;
      var valueOffset = this._valueOffset + this._frameValueOffset + Kotlin.imul(this._frameIndex, valueCount) | 0;
      if (valueScale === 1.0) {
        for (var i = 0; i < valueCount; i++) {
          rd.set_5wr77w$(i, valueArray.getDouble_za3lpa$(valueOffset + i | 0) + rd.get_za3lpa$(valueCount + i | 0) * tweenProgress);
        }
      }
       else {
        for (var i_0 = 0; i_0 < valueCount; i_0++) {
          rd.set_5wr77w$(i_0, valueArray.getDouble_za3lpa$(valueOffset + i_0 | 0) * valueScale + rd.get_za3lpa$(valueCount + i_0 | 0) * tweenProgress);
        }
      }
    }
  };
  MutilpleValueTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MutilpleValueTimelineState',
    interfaces: [TweenTimelineState]
  };
  function IAnimatable() {
  }
  IAnimatable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IAnimatable',
    interfaces: []
  };
  function ActionTimelineState() {
    TimelineState.call(this);
  }
  ActionTimelineState.prototype.toString = function () {
    return '[class dragonBones.ActionTimelineState]';
  };
  ActionTimelineState.prototype._onCrossFrame_0 = function (frameIndex) {
    var tmp$, tmp$_0, tmp$_1;
    var eventDispatcher = ensureNotNull(this._armature).eventDispatcher;
    if (ensureNotNull(this._animationState).actionEnabled) {
      var frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$((Kotlin.isType(tmp$ = this._timelineData, TimelineData) ? tmp$ : throwCCE()).offset + BinaryOffset$TimelineFrameOffset_getInstance().index + frameIndex | 0) | 0;
      var actionCount = ensureNotNull(this._frameArray)[frameOffset + 1 | 0];
      var actions = ensureNotNull(ensureNotNull(this._animationData).parent).actions;
      for (var i = 0; i < actionCount; i++) {
        var actionIndex = ensureNotNull(this._frameArray)[frameOffset + 2 + i | 0];
        var action = actions.get_za3lpa$(actionIndex);
        if (action.type === ActionType$Play_getInstance()) {
          var eventObject = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(EventObject));
          eventObject.time = ensureNotNull(this._frameArray)[frameOffset] / this._frameRate;
          eventObject.animationState = ensureNotNull(this._animationState);
          EventObject$Companion_getInstance().actionDataToInstance_knn78h$(action, eventObject, ensureNotNull(this._armature));
          ensureNotNull(this._armature)._bufferAction_8f84tb$(eventObject, true);
        }
         else {
          var eventType = action.type === ActionType$Frame_getInstance() ? EventObject$Companion_getInstance().FRAME_EVENT : EventObject$Companion_getInstance().SOUND_EVENT;
          if (action.type === ActionType$Sound_getInstance() || eventDispatcher.hasDBEventListener_61zpoe$(eventType)) {
            var eventObject_0 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(EventObject));
            eventObject_0.time = ensureNotNull(this._frameArray)[frameOffset] / this._frameRate;
            eventObject_0.animationState = ensureNotNull(this._animationState);
            EventObject$Companion_getInstance().actionDataToInstance_knn78h$(action, eventObject_0, ensureNotNull(this._armature));
            (tmp$_1 = (tmp$_0 = this._armature) != null ? tmp$_0.eventDispatcher : null) != null ? (tmp$_1.queueEvent_vah34q$(eventObject_0), Unit) : null;
          }
        }
      }
    }
  };
  ActionTimelineState.prototype._onArriveAtFrame = function () {
  };
  ActionTimelineState.prototype._onUpdateFrame = function () {
  };
  ActionTimelineState.prototype.update_14dthe$ = function (passedTime) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14;
    var prevState = this.playState;
    var prevPlayTimes = this.currentPlayTimes;
    var prevTime = this._currentTime;
    if (this._setCurrentTime_14dthe$(passedTime)) {
      var eventActive = ((tmp$ = this._animationState) != null ? tmp$._parent : null) == null && ensureNotNull(this._animationState).actionEnabled;
      var eventDispatcher = (tmp$_0 = this._armature) != null ? tmp$_0.eventDispatcher : null;
      if (prevState < 0) {
        if (this.playState !== prevState) {
          if (ensureNotNull(this._animationState).displayControl && ensureNotNull(this._animationState).resetToPose) {
            (tmp$_1 = this._armature) != null ? (tmp$_1._sortZOrder_o1500o$(null, 0), Unit) : null;
          }
          prevPlayTimes = this.currentPlayTimes;
          if (eventActive && ensureNotNull(eventDispatcher).hasDBEventListener_61zpoe$(EventObject$Companion_getInstance().START)) {
            var eventObject = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(EventObject));
            eventObject.type = EventObject$Companion_getInstance().START;
            eventObject.armature = ensureNotNull(this._armature);
            eventObject.animationState = ensureNotNull(this._animationState);
            (tmp$_3 = (tmp$_2 = this._armature) != null ? tmp$_2.eventDispatcher : null) != null ? (tmp$_3.queueEvent_vah34q$(eventObject), Unit) : null;
          }
        }
         else {
          return;
        }
      }
      var isReverse = ensureNotNull(this._animationState).timeScale < 0.0;
      var loopCompleteEvent = null;
      var completeEvent = null;
      if (eventActive && this.currentPlayTimes !== prevPlayTimes) {
        if (ensureNotNull(eventDispatcher).hasDBEventListener_61zpoe$(EventObject$Companion_getInstance().LOOP_COMPLETE)) {
          loopCompleteEvent = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(EventObject));
          loopCompleteEvent.type = EventObject$Companion_getInstance().LOOP_COMPLETE;
          loopCompleteEvent.armature = ensureNotNull(this._armature);
          loopCompleteEvent.animationState = ensureNotNull(this._animationState);
        }
        if (this.playState > 0) {
          if (eventDispatcher.hasDBEventListener_61zpoe$(EventObject$Companion_getInstance().COMPLETE)) {
            completeEvent = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(EventObject));
            completeEvent.type = EventObject$Companion_getInstance().COMPLETE;
            completeEvent.armature = ensureNotNull(this._armature);
            completeEvent.animationState = ensureNotNull(this._animationState);
          }
        }
      }
      if (this._frameCount > 1) {
        var timelineData = Kotlin.isType(tmp$_4 = this._timelineData, TimelineData) ? tmp$_4 : throwCCE();
        var x = this._currentTime * this._frameRate;
        var timelineFrameIndex = numberToInt(Math_0.floor(x));
        var frameIndex = ensureNotNull(this._frameIndices).get_za3lpa$(timelineData.frameIndicesOffset + timelineFrameIndex | 0);
        if (this._frameIndex !== frameIndex) {
          var crossedFrameIndex = this._frameIndex;
          this._frameIndex = frameIndex;
          if (this._timelineArray != null) {
            this._frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(timelineData.offset + BinaryOffset$TimelineFrameOffset_getInstance().index + this._frameIndex | 0) | 0;
            if (isReverse) {
              if (crossedFrameIndex < 0) {
                var x_0 = prevTime * this._frameRate;
                var prevFrameIndex = numberToInt(Math_0.floor(x_0));
                crossedFrameIndex = ensureNotNull(this._frameIndices).getInt_za3lpa$(timelineData.frameIndicesOffset + prevFrameIndex | 0);
                if (this.currentPlayTimes === prevPlayTimes) {
                  if (crossedFrameIndex === frameIndex) {
                    crossedFrameIndex = -1;
                  }
                }
              }
              while (crossedFrameIndex >= 0) {
                var frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(timelineData.offset + BinaryOffset$TimelineFrameOffset_getInstance().index + crossedFrameIndex | 0) | 0;
                var framePosition = ensureNotNull(this._frameArray)[frameOffset] / this._frameRate | 0;
                if (this._position <= framePosition && framePosition <= this._position + this._duration) {
                  this._onCrossFrame_0(crossedFrameIndex);
                }
                if (loopCompleteEvent != null && crossedFrameIndex === 0) {
                  (tmp$_6 = (tmp$_5 = this._armature) != null ? tmp$_5.eventDispatcher : null) != null ? (tmp$_6.queueEvent_vah34q$(loopCompleteEvent), Unit) : null;
                  loopCompleteEvent = null;
                }
                if (crossedFrameIndex > 0) {
                  crossedFrameIndex = crossedFrameIndex - 1 | 0;
                }
                 else {
                  crossedFrameIndex = this._frameCount - 1 | 0;
                }
                if (crossedFrameIndex === frameIndex) {
                  break;
                }
              }
            }
             else {
              if (crossedFrameIndex < 0) {
                var x_1 = prevTime * this._frameRate;
                var prevFrameIndex_0 = numberToInt(Math_0.floor(x_1));
                crossedFrameIndex = ensureNotNull(this._frameIndices).getInt_za3lpa$(timelineData.frameIndicesOffset + prevFrameIndex_0 | 0);
                var frameOffset_0 = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(timelineData.offset + BinaryOffset$TimelineFrameOffset_getInstance().index + crossedFrameIndex | 0) | 0;
                var framePosition_0 = ensureNotNull(this._frameArray)[frameOffset_0] / this._frameRate;
                if (this.currentPlayTimes === prevPlayTimes) {
                  if (prevTime <= framePosition_0) {
                    if (crossedFrameIndex > 0) {
                      crossedFrameIndex = crossedFrameIndex - 1 | 0;
                    }
                     else {
                      crossedFrameIndex = this._frameCount - 1 | 0;
                    }
                  }
                   else if (crossedFrameIndex === frameIndex) {
                    crossedFrameIndex = -1;
                  }
                }
              }
              while (crossedFrameIndex >= 0) {
                if (crossedFrameIndex < (this._frameCount - 1 | 0)) {
                  crossedFrameIndex = crossedFrameIndex + 1 | 0;
                }
                 else {
                  crossedFrameIndex = 0;
                }
                var frameOffset_1 = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(timelineData.offset + BinaryOffset$TimelineFrameOffset_getInstance().index + crossedFrameIndex | 0) | 0;
                var framePosition_1 = ensureNotNull(this._frameArray)[frameOffset_1] / this._frameRate;
                if (this._position <= framePosition_1 && framePosition_1 <= this._position + this._duration) {
                  this._onCrossFrame_0(crossedFrameIndex);
                }
                if (loopCompleteEvent != null && crossedFrameIndex === 0) {
                  (tmp$_8 = (tmp$_7 = this._armature) != null ? tmp$_7.eventDispatcher : null) != null ? (tmp$_8.queueEvent_vah34q$(loopCompleteEvent), Unit) : null;
                  loopCompleteEvent = null;
                }
                if (crossedFrameIndex === frameIndex) {
                  break;
                }
              }
            }
          }
        }
      }
       else if (this._frameIndex < 0) {
        this._frameIndex = 0;
        if (this._timelineData != null) {
          this._frameOffset = ensureNotNull(this._animationData).frameOffset + ensureNotNull(this._timelineArray).get_za3lpa$(ensureNotNull(this._timelineData).offset + BinaryOffset$TimelineFrameOffset_getInstance().index | 0) | 0;
          var framePosition_2 = ensureNotNull(this._frameArray)[this._frameOffset] / this._frameRate;
          if (this.currentPlayTimes === prevPlayTimes) {
            if (prevTime <= framePosition_2) {
              this._onCrossFrame_0(this._frameIndex);
            }
          }
           else if (this._position <= framePosition_2) {
            if (!isReverse && loopCompleteEvent != null) {
              (tmp$_10 = (tmp$_9 = this._armature) != null ? tmp$_9.eventDispatcher : null) != null ? (tmp$_10.queueEvent_vah34q$(loopCompleteEvent), Unit) : null;
              loopCompleteEvent = null;
            }
            this._onCrossFrame_0(this._frameIndex);
          }
        }
      }
      if (loopCompleteEvent != null) {
        (tmp$_12 = (tmp$_11 = this._armature) != null ? tmp$_11.eventDispatcher : null) != null ? (tmp$_12.queueEvent_vah34q$(loopCompleteEvent), Unit) : null;
      }
      if (completeEvent != null) {
        (tmp$_14 = (tmp$_13 = this._armature) != null ? tmp$_13.eventDispatcher : null) != null ? (tmp$_14.queueEvent_vah34q$(completeEvent), Unit) : null;
      }
    }
  };
  ActionTimelineState.prototype.setCurrentTime_14dthe$ = function (value) {
    this._setCurrentTime_14dthe$(value);
    this._frameIndex = -1;
  };
  ActionTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionTimelineState',
    interfaces: [TimelineState]
  };
  function ZOrderTimelineState() {
    TimelineState.call(this);
  }
  ZOrderTimelineState.prototype.toString = function () {
    return '[class dragonBones.ZOrderTimelineState]';
  };
  ZOrderTimelineState.prototype._onArriveAtFrame = function () {
    var tmp$, tmp$_0;
    if (this.playState >= 0) {
      var count = ensureNotNull(this._frameArray)[this._frameOffset + 1 | 0];
      if (count > 0) {
        (tmp$ = this._armature) != null ? (tmp$._sortZOrder_o1500o$(get_raw(ensureNotNull(this._frameArray)), this._frameOffset + 2 | 0), Unit) : null;
      }
       else {
        (tmp$_0 = this._armature) != null ? (tmp$_0._sortZOrder_o1500o$(null, 0), Unit) : null;
      }
    }
  };
  ZOrderTimelineState.prototype._onUpdateFrame = function () {
  };
  ZOrderTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ZOrderTimelineState',
    interfaces: [TimelineState]
  };
  function BoneAllTimelineState() {
    MutilpleValueTimelineState.call(this);
  }
  BoneAllTimelineState.prototype.toString = function () {
    return '[class dragonBones.BoneAllTimelineState]';
  };
  BoneAllTimelineState.prototype._onArriveAtFrame = function () {
    MutilpleValueTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._isTween && this._frameIndex === (this._frameCount - 1 | 0)) {
      this._rd.set_5wr77w$(2, Transform$Companion_getInstance().normalizeRadian_14dthe$(this._rd.get_za3lpa$(2)));
      this._rd.set_5wr77w$(3, Transform$Companion_getInstance().normalizeRadian_14dthe$(this._rd.get_za3lpa$(3)));
    }
    if (this._timelineData == null) {
      this._rd.set_5wr77w$(4, 1.0);
      this._rd.set_5wr77w$(5, 1.0);
    }
  };
  BoneAllTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    var tmp$, tmp$_0, tmp$_1;
    MutilpleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
    this._valueCount = 6;
    this._valueArray = get_raw_0(ensureNotNull((tmp$_1 = (tmp$_0 = (tmp$ = this._animationData) != null ? tmp$.parent : null) != null ? tmp$_0.parent : null) != null ? tmp$_1.frameFloatArray : null));
  };
  BoneAllTimelineState.prototype.fadeOut = function () {
    this.dirty = false;
    this._rd.set_5wr77w$(2, Transform$Companion_getInstance().normalizeRadian_14dthe$(this._rd.get_za3lpa$(2)));
    this._rd.set_5wr77w$(3, Transform$Companion_getInstance().normalizeRadian_14dthe$(this._rd.get_za3lpa$(3)));
  };
  BoneAllTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$, tmp$_0;
    var valueScale = ensureNotNull(this._armature).armatureData.scale;
    var rd = this._rd;
    var blendState = Kotlin.isType(tmp$ = this.target, BlendState) ? tmp$ : throwCCE();
    var bone = Kotlin.isType(tmp$_0 = blendState.target, Bone) ? tmp$_0 : throwCCE();
    var blendWeight = blendState.blendWeight;
    var result = bone.animationPose;
    if (blendState.dirty > 1) {
      result.x = result.x + rd.get_za3lpa$(0) * blendWeight * valueScale;
      result.y = result.y + rd.get_za3lpa$(1) * blendWeight * valueScale;
      result.rotation = result.rotation + rd.get_za3lpa$(2) * blendWeight;
      result.skew = result.skew + rd.get_za3lpa$(3) * blendWeight;
      result.scaleX = result.scaleX + (rd.get_za3lpa$(4) - 1.0) * blendWeight;
      result.scaleY = result.scaleY + (rd.get_za3lpa$(5) - 1.0) * blendWeight;
    }
     else {
      result.x = rd.get_za3lpa$(0) * blendWeight * valueScale;
      result.y = rd.get_za3lpa$(1) * blendWeight * valueScale;
      result.rotation = rd.get_za3lpa$(2) * blendWeight;
      result.skew = rd.get_za3lpa$(3) * blendWeight;
      result.scaleX = (rd.get_za3lpa$(4) - 1.0) * blendWeight + 1.0;
      result.scaleY = (rd.get_za3lpa$(5) - 1.0) * blendWeight + 1.0;
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      bone._transformDirty = true;
    }
  };
  BoneAllTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoneAllTimelineState',
    interfaces: [MutilpleValueTimelineState]
  };
  function BoneTranslateTimelineState() {
    DoubleValueTimelineState.call(this);
  }
  BoneTranslateTimelineState.prototype.toString = function () {
    return '[class dragonBones.BoneTranslateTimelineState]';
  };
  BoneTranslateTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    DoubleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
    this._valueScale = ensureNotNull(this._armature).armatureData.scale;
    this._valueArray = get_raw_0(ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameFloatArray));
  };
  BoneTranslateTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$, tmp$_0;
    var blendState = Kotlin.isType(tmp$ = this.target, BlendState) ? tmp$ : throwCCE();
    var bone = Kotlin.isType(tmp$_0 = blendState.target, Bone) ? tmp$_0 : throwCCE();
    var blendWeight = blendState.blendWeight;
    var result = bone.animationPose;
    if (blendState.dirty > 1) {
      result.x = result.x + this._resultA * blendWeight;
      result.y = result.y + this._resultB * blendWeight;
    }
     else if (blendWeight !== 1.0) {
      result.x = this._resultA * blendWeight;
      result.y = this._resultB * blendWeight;
    }
     else {
      result.x = this._resultA;
      result.y = this._resultB;
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      bone._transformDirty = true;
    }
  };
  BoneTranslateTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoneTranslateTimelineState',
    interfaces: [DoubleValueTimelineState]
  };
  function BoneRotateTimelineState() {
    DoubleValueTimelineState.call(this);
  }
  BoneRotateTimelineState.prototype.toString = function () {
    return '[class dragonBones.BoneRotateTimelineState]';
  };
  BoneRotateTimelineState.prototype._onArriveAtFrame = function () {
    DoubleValueTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._isTween && this._frameIndex === (this._frameCount - 1 | 0)) {
      this._differenceA = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._differenceA);
      this._differenceB = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._differenceB);
    }
  };
  BoneRotateTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    DoubleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
    this._valueArray = get_raw_0(ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameFloatArray));
  };
  BoneRotateTimelineState.prototype.fadeOut = function () {
    this.dirty = false;
    this._resultA = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._resultA);
    this._resultB = Transform$Companion_getInstance().normalizeRadian_14dthe$(this._resultB);
  };
  BoneRotateTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$, tmp$_0;
    var blendState = Kotlin.isType(tmp$ = this.target, BlendState) ? tmp$ : throwCCE();
    var bone = Kotlin.isType(tmp$_0 = blendState.target, Bone) ? tmp$_0 : throwCCE();
    var blendWeight = blendState.blendWeight;
    var result = bone.animationPose;
    if (blendState.dirty > 1) {
      result.rotation = result.rotation + this._resultA * blendWeight;
      result.skew = result.skew + this._resultB * blendWeight;
    }
     else if (blendWeight !== 1.0) {
      result.rotation = this._resultA * blendWeight;
      result.skew = this._resultB * blendWeight;
    }
     else {
      result.rotation = this._resultA;
      result.skew = this._resultB;
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      bone._transformDirty = true;
    }
  };
  BoneRotateTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoneRotateTimelineState',
    interfaces: [DoubleValueTimelineState]
  };
  function BoneScaleTimelineState() {
    DoubleValueTimelineState.call(this);
  }
  BoneScaleTimelineState.prototype.toString = function () {
    return '[class dragonBones.BoneScaleTimelineState]';
  };
  BoneScaleTimelineState.prototype._onArriveAtFrame = function () {
    DoubleValueTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData == null) {
      this._resultA = 1.0;
      this._resultB = 1.0;
    }
  };
  BoneScaleTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    DoubleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
    this._valueArray = get_raw_0(ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameFloatArray));
  };
  BoneScaleTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$, tmp$_0;
    var blendState = Kotlin.isType(tmp$ = this.target, BlendState) ? tmp$ : throwCCE();
    var bone = Kotlin.isType(tmp$_0 = blendState.target, Bone) ? tmp$_0 : throwCCE();
    var blendWeight = blendState.blendWeight;
    var result = bone.animationPose;
    if (blendState.dirty > 1) {
      result.scaleX = result.scaleX + (this._resultA - 1.0) * blendWeight;
      result.scaleY = result.scaleY + (this._resultB - 1.0) * blendWeight;
    }
     else if (blendWeight !== 1.0) {
      result.scaleX = (this._resultA - 1.0) * blendWeight + 1.0;
      result.scaleY = (this._resultB - 1.0) * blendWeight + 1.0;
    }
     else {
      result.scaleX = this._resultA;
      result.scaleY = this._resultB;
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      bone._transformDirty = true;
    }
  };
  BoneScaleTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoneScaleTimelineState',
    interfaces: [DoubleValueTimelineState]
  };
  function SurfaceTimelineState() {
    MutilpleValueTimelineState.call(this);
    this._deformCount_0 = 0;
    this._deformOffset_0 = 0;
    this._sameValueOffset_0 = 0;
  }
  SurfaceTimelineState.prototype.toString = function () {
    return '[class dragonBones.SurfaceTimelineState]';
  };
  SurfaceTimelineState.prototype._onClear = function () {
    MutilpleValueTimelineState.prototype._onClear.call(this);
    this._deformCount_0 = 0;
    this._deformOffset_0 = 0;
    this._sameValueOffset_0 = 0;
  };
  SurfaceTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    var tmp$, tmp$_0;
    MutilpleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    if (this._timelineData != null) {
      var dragonBonesData = ensureNotNull(ensureNotNull(this._animationData).parent).parent;
      var frameIntArray = ensureNotNull(ensureNotNull(dragonBonesData).frameIntArray);
      var frameIntOffset = ensureNotNull(this._animationData).frameIntOffset + ensureNotNull(this._timelineArray).get_za3lpa$(ensureNotNull(this._timelineData).offset + BinaryOffset$TimelineFrameValueCount_getInstance().index | 0) | 0;
      this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
      this._valueCount = frameIntArray[frameIntOffset + BinaryOffset$DeformValueCount_getInstance().index | 0];
      this._deformCount_0 = frameIntArray[frameIntOffset + BinaryOffset$DeformCount_getInstance().index | 0];
      this._deformOffset_0 = frameIntArray[frameIntOffset + BinaryOffset$DeformValueOffset_getInstance().index | 0];
      this._sameValueOffset_0 = frameIntArray[frameIntOffset + BinaryOffset$DeformFloatOffset_getInstance().index | 0] + ensureNotNull(this._animationData).frameFloatOffset;
      this._valueScale = ensureNotNull(this._armature).armatureData.scale;
      this._valueArray = get_raw_0(ensureNotNull(dragonBonesData.frameFloatArray));
      set_length_0(this._rd, this._valueCount * 2 | 0);
    }
     else {
      this._deformCount_0 = get_length_0((Kotlin.isType(tmp$_0 = (Kotlin.isType(tmp$ = this.target, BlendState) ? tmp$ : throwCCE()).target, Surface) ? tmp$_0 : throwCCE())._deformVertices);
    }
  };
  SurfaceTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var blendState = Kotlin.isType(tmp$ = this.target, BlendState) ? tmp$ : throwCCE();
    var surface = Kotlin.isType(tmp$_0 = blendState.target, Surface) ? tmp$_0 : throwCCE();
    var blendWeight = blendState.blendWeight;
    var result = surface._deformVertices;
    var valueArray = this._valueArray;
    if (valueArray != null) {
      var valueCount = this._valueCount;
      var deformOffset = this._deformOffset_0;
      var sameValueOffset = this._sameValueOffset_0;
      var rd = this._rd;
      tmp$_1 = this._deformCount_0;
      for (var i = 0; i < tmp$_1; i++) {
        var value;
        if (i < deformOffset) {
          tmp$_2 = valueArray.getDouble_za3lpa$(sameValueOffset + i | 0);
        }
         else if (i < (deformOffset + valueCount | 0)) {
          tmp$_2 = rd.get_za3lpa$(i - deformOffset | 0);
        }
         else {
          tmp$_2 = valueArray.getDouble_za3lpa$(sameValueOffset + i - valueCount | 0);
        }
        value = tmp$_2;
        if (blendState.dirty > 1) {
          result.set_5wr77w$(i, result.get_za3lpa$(i) + value * blendWeight);
        }
         else {
          result.set_5wr77w$(i, value * blendWeight);
        }
      }
    }
     else if (blendState.dirty === 1) {
      tmp$_3 = this._deformCount_0;
      for (var i_0 = 0; i_0 < tmp$_3; i_0++) {
        result.set_5wr77w$(i_0, 0.0);
      }
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      surface._transformDirty = true;
    }
  };
  SurfaceTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SurfaceTimelineState',
    interfaces: [MutilpleValueTimelineState]
  };
  function AlphaTimelineState() {
    SingleValueTimelineState.call(this);
  }
  AlphaTimelineState.prototype.toString = function () {
    return '[class dragonBones.AlphaTimelineState]';
  };
  AlphaTimelineState.prototype._onArriveAtFrame = function () {
    SingleValueTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData == null) {
      this._result = 1.0;
    }
  };
  AlphaTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    SingleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueScale = 0.01;
    this._valueArray = get_raw(ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray));
  };
  AlphaTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$, tmp$_0, tmp$_1;
    var blendState = Kotlin.isType(tmp$ = this.target, BlendState) ? tmp$ : throwCCE();
    var alphaTarget = Kotlin.isType(tmp$_0 = blendState.target, TransformObject) ? tmp$_0 : throwCCE();
    var blendWeight = blendState.blendWeight;
    if (blendState.dirty > 1) {
      alphaTarget._alpha = alphaTarget._alpha + this._result * blendWeight;
      if (alphaTarget._alpha > 1.0) {
        alphaTarget._alpha = 1.0;
      }
    }
     else {
      alphaTarget._alpha = this._result * blendWeight;
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      (tmp$_1 = this._armature) != null ? (tmp$_1._alphaDirty = true) : null;
    }
  };
  AlphaTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AlphaTimelineState',
    interfaces: [SingleValueTimelineState]
  };
  function SlotDisplayTimelineState() {
    TimelineState.call(this);
  }
  SlotDisplayTimelineState.prototype.toString = function () {
    return '[class dragonBones.SlotDisplayTimelineState]';
  };
  SlotDisplayTimelineState.prototype._onArriveAtFrame = function () {
    var tmp$;
    if (this.playState >= 0) {
      var slot = Kotlin.isType(tmp$ = this.target, Slot) ? tmp$ : throwCCE();
      var displayIndex = this._timelineData != null ? ensureNotNull(this._frameArray)[this._frameOffset + 1 | 0] : ensureNotNull(slot._slotData).displayIndex;
      if (slot.displayIndex !== displayIndex) {
        slot._setDisplayIndex_fzusl$(displayIndex, true);
      }
    }
  };
  SlotDisplayTimelineState.prototype._onUpdateFrame = function () {
  };
  SlotDisplayTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotDisplayTimelineState',
    interfaces: [TimelineState]
  };
  function SlotColorTimelineState() {
    TweenTimelineState.call(this);
    this._current_0 = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0]);
    this._difference_0 = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0]);
    this._result_0 = new Float64Array([0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0]);
  }
  SlotColorTimelineState.prototype.toString = function () {
    return '[class dragonBones.SlotColorTimelineState]';
  };
  SlotColorTimelineState.prototype._onArriveAtFrame = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24;
    TweenTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData != null) {
      var dragonBonesData = ensureNotNull(ensureNotNull(this._animationData).parent).parent;
      var colorArray = asInt(get_raw(ensureNotNull(ensureNotNull(dragonBonesData).colorArray)));
      var frameIntArray = asInt(get_raw(ensureNotNull(dragonBonesData.frameIntArray)));
      var valueOffset = ensureNotNull(this._animationData).frameIntOffset + this._frameValueOffset + this._frameIndex | 0;
      var colorOffset = frameIntArray.get_za3lpa$(valueOffset);
      if (colorOffset < 0) {
        colorOffset = colorOffset + 65536 | 0;
      }
      if (this._isTween) {
        this._current_0[0] = colorArray.get_za3lpa$((tmp$ = colorOffset, colorOffset = tmp$ + 1 | 0, tmp$));
        this._current_0[1] = colorArray.get_za3lpa$((tmp$_0 = colorOffset, colorOffset = tmp$_0 + 1 | 0, tmp$_0));
        this._current_0[2] = colorArray.get_za3lpa$((tmp$_1 = colorOffset, colorOffset = tmp$_1 + 1 | 0, tmp$_1));
        this._current_0[3] = colorArray.get_za3lpa$((tmp$_2 = colorOffset, colorOffset = tmp$_2 + 1 | 0, tmp$_2));
        this._current_0[4] = colorArray.get_za3lpa$((tmp$_3 = colorOffset, colorOffset = tmp$_3 + 1 | 0, tmp$_3));
        this._current_0[5] = colorArray.get_za3lpa$((tmp$_4 = colorOffset, colorOffset = tmp$_4 + 1 | 0, tmp$_4));
        this._current_0[6] = colorArray.get_za3lpa$((tmp$_5 = colorOffset, colorOffset = tmp$_5 + 1 | 0, tmp$_5));
        this._current_0[7] = colorArray.get_za3lpa$((tmp$_6 = colorOffset, colorOffset = tmp$_6 + 1 | 0, tmp$_6));
        if (this._frameIndex === (this._frameCount - 1 | 0)) {
          tmp$_7 = frameIntArray.get_za3lpa$(ensureNotNull(this._animationData).frameIntOffset + this._frameValueOffset | 0);
        }
         else {
          tmp$_7 = frameIntArray.get_za3lpa$(valueOffset + 1 | 0);
        }
        colorOffset = tmp$_7;
        if (colorOffset < 0) {
          colorOffset = colorOffset + 65536 | 0;
        }
        this._difference_0[0] = colorArray.get_za3lpa$((tmp$_8 = colorOffset, colorOffset = tmp$_8 + 1 | 0, tmp$_8)) - this._current_0[0] | 0;
        this._difference_0[1] = colorArray.get_za3lpa$((tmp$_9 = colorOffset, colorOffset = tmp$_9 + 1 | 0, tmp$_9)) - this._current_0[1] | 0;
        this._difference_0[2] = colorArray.get_za3lpa$((tmp$_10 = colorOffset, colorOffset = tmp$_10 + 1 | 0, tmp$_10)) - this._current_0[2] | 0;
        this._difference_0[3] = colorArray.get_za3lpa$((tmp$_11 = colorOffset, colorOffset = tmp$_11 + 1 | 0, tmp$_11)) - this._current_0[3] | 0;
        this._difference_0[4] = colorArray.get_za3lpa$((tmp$_12 = colorOffset, colorOffset = tmp$_12 + 1 | 0, tmp$_12)) - this._current_0[4] | 0;
        this._difference_0[5] = colorArray.get_za3lpa$((tmp$_13 = colorOffset, colorOffset = tmp$_13 + 1 | 0, tmp$_13)) - this._current_0[5] | 0;
        this._difference_0[6] = colorArray.get_za3lpa$((tmp$_14 = colorOffset, colorOffset = tmp$_14 + 1 | 0, tmp$_14)) - this._current_0[6] | 0;
        this._difference_0[7] = colorArray.get_za3lpa$((tmp$_15 = colorOffset, colorOffset = tmp$_15 + 1 | 0, tmp$_15)) - this._current_0[7] | 0;
      }
       else {
        this._result_0[0] = colorArray.get_za3lpa$((tmp$_16 = colorOffset, colorOffset = tmp$_16 + 1 | 0, tmp$_16)) * 0.01;
        this._result_0[1] = colorArray.get_za3lpa$((tmp$_17 = colorOffset, colorOffset = tmp$_17 + 1 | 0, tmp$_17)) * 0.01;
        this._result_0[2] = colorArray.get_za3lpa$((tmp$_18 = colorOffset, colorOffset = tmp$_18 + 1 | 0, tmp$_18)) * 0.01;
        this._result_0[3] = colorArray.get_za3lpa$((tmp$_19 = colorOffset, colorOffset = tmp$_19 + 1 | 0, tmp$_19)) * 0.01;
        this._result_0[4] = colorArray.get_za3lpa$((tmp$_20 = colorOffset, colorOffset = tmp$_20 + 1 | 0, tmp$_20));
        this._result_0[5] = colorArray.get_za3lpa$((tmp$_21 = colorOffset, colorOffset = tmp$_21 + 1 | 0, tmp$_21));
        this._result_0[6] = colorArray.get_za3lpa$((tmp$_22 = colorOffset, colorOffset = tmp$_22 + 1 | 0, tmp$_22));
        this._result_0[7] = colorArray.get_za3lpa$((tmp$_23 = colorOffset, colorOffset = tmp$_23 + 1 | 0, tmp$_23));
      }
    }
     else {
      var slot = Kotlin.isType(tmp$_24 = this.target, Slot) ? tmp$_24 : throwCCE();
      var color = ensureNotNull(slot.slotData.color);
      this._result_0[0] = color.alphaMultiplier;
      this._result_0[1] = color.redMultiplier;
      this._result_0[2] = color.greenMultiplier;
      this._result_0[3] = color.blueMultiplier;
      this._result_0[4] = color.alphaOffset;
      this._result_0[5] = color.redOffset;
      this._result_0[6] = color.greenOffset;
      this._result_0[7] = color.blueOffset;
    }
  };
  SlotColorTimelineState.prototype._onUpdateFrame = function () {
    TweenTimelineState.prototype._onUpdateFrame.call(this);
    if (this._isTween) {
      this._result_0[0] = (this._current_0[0] + this._difference_0[0] * this._tweenProgress) * 0.01;
      this._result_0[1] = (this._current_0[1] + this._difference_0[1] * this._tweenProgress) * 0.01;
      this._result_0[2] = (this._current_0[2] + this._difference_0[2] * this._tweenProgress) * 0.01;
      this._result_0[3] = (this._current_0[3] + this._difference_0[3] * this._tweenProgress) * 0.01;
      this._result_0[4] = this._current_0[4] + this._difference_0[4] * this._tweenProgress;
      this._result_0[5] = this._current_0[5] + this._difference_0[5] * this._tweenProgress;
      this._result_0[6] = this._current_0[6] + this._difference_0[6] * this._tweenProgress;
      this._result_0[7] = this._current_0[7] + this._difference_0[7] * this._tweenProgress;
    }
  };
  SlotColorTimelineState.prototype.fadeOut = function () {
    this._isTween = false;
  };
  SlotColorTimelineState.prototype.update_14dthe$ = function (passedTime) {
    var tmp$;
    TweenTimelineState.prototype.update_14dthe$.call(this, passedTime);
    if (this._isTween || this.dirty) {
      var slot = Kotlin.isType(tmp$ = this.target, Slot) ? tmp$ : throwCCE();
      var result = slot._colorTransform;
      if (ensureNotNull(this._animationState)._fadeState !== 0 || ensureNotNull(this._animationState)._subFadeState !== 0) {
        if (result.alphaMultiplier !== this._result_0[0] || result.redMultiplier !== this._result_0[1] || result.greenMultiplier !== this._result_0[2] || result.blueMultiplier !== this._result_0[3] || result.alphaOffset !== numberToInt(this._result_0[4]) || result.redOffset !== numberToInt(this._result_0[5]) || result.greenOffset !== numberToInt(this._result_0[6]) || result.blueOffset !== numberToInt(this._result_0[7])) {
          var $receiver = numberToDouble(ensureNotNull(this._animationState)._fadeProgress);
          var x = numberToDouble(4.0);
          var fadeProgress = Math_0.pow($receiver, x);
          result.alphaMultiplier = result.alphaMultiplier + (this._result_0[0] - result.alphaMultiplier) * fadeProgress;
          result.redMultiplier = result.redMultiplier + (this._result_0[1] - result.redMultiplier) * fadeProgress;
          result.greenMultiplier = result.greenMultiplier + (this._result_0[2] - result.greenMultiplier) * fadeProgress;
          result.blueMultiplier = result.blueMultiplier + (this._result_0[3] - result.blueMultiplier) * fadeProgress;
          result.alphaOffset = result.alphaOffset + numberToInt((this._result_0[4] - result.alphaOffset) * fadeProgress) | 0;
          result.redOffset = result.redOffset + numberToInt((this._result_0[5] - result.redOffset) * fadeProgress) | 0;
          result.greenOffset = result.greenOffset + numberToInt((this._result_0[6] - result.greenOffset) * fadeProgress) | 0;
          result.blueOffset = result.blueOffset + numberToInt((this._result_0[7] - result.blueOffset) * fadeProgress) | 0;
          slot._colorDirty = true;
        }
      }
       else if (this.dirty) {
        this.dirty = false;
        if (result.alphaMultiplier !== this._result_0[0] || result.redMultiplier !== this._result_0[1] || result.greenMultiplier !== this._result_0[2] || result.blueMultiplier !== this._result_0[3] || result.alphaOffset !== numberToInt(this._result_0[4]) || result.redOffset !== numberToInt(this._result_0[5]) || result.greenOffset !== numberToInt(this._result_0[6]) || result.blueOffset !== numberToInt(this._result_0[7])) {
          result.alphaMultiplier = this._result_0[0];
          result.redMultiplier = this._result_0[1];
          result.greenMultiplier = this._result_0[2];
          result.blueMultiplier = this._result_0[3];
          result.alphaOffset = numberToInt(this._result_0[4]);
          result.redOffset = numberToInt(this._result_0[5]);
          result.greenOffset = numberToInt(this._result_0[6]);
          result.blueOffset = numberToInt(this._result_0[7]);
          slot._colorDirty = true;
        }
      }
    }
  };
  SlotColorTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotColorTimelineState',
    interfaces: [TweenTimelineState]
  };
  function SlotZIndexTimelineState() {
    SingleValueTimelineState.call(this);
  }
  SlotZIndexTimelineState.prototype.toString = function () {
    return '[class dragonBones.SlotZIndexTimelineState]';
  };
  SlotZIndexTimelineState.prototype._onArriveAtFrame = function () {
    var tmp$, tmp$_0;
    SingleValueTimelineState.prototype._onArriveAtFrame.call(this);
    if (this._timelineData == null) {
      var blendState = Kotlin.isType(tmp$ = this.target, BlendState) ? tmp$ : throwCCE();
      var slot = Kotlin.isType(tmp$_0 = blendState.target, Slot) ? tmp$_0 : throwCCE();
      this._result = slot.slotData.zIndex;
    }
  };
  SlotZIndexTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    SingleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueArray = get_raw(ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray));
  };
  SlotZIndexTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$, tmp$_0, tmp$_1;
    var blendState = Kotlin.isType(tmp$ = this.target, BlendState) ? tmp$ : throwCCE();
    var slot = Kotlin.isType(tmp$_0 = blendState.target, Slot) ? tmp$_0 : throwCCE();
    var blendWeight = blendState.blendWeight;
    if (blendState.dirty > 1) {
      slot._zIndex = slot._zIndex + numberToInt(this._result * blendWeight) | 0;
    }
     else {
      slot._zIndex = numberToInt(this._result * blendWeight);
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      (tmp$_1 = this._armature) != null ? (tmp$_1._zIndexDirty = true) : null;
    }
  };
  SlotZIndexTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotZIndexTimelineState',
    interfaces: [SingleValueTimelineState]
  };
  function DeformTimelineState() {
    MutilpleValueTimelineState.call(this);
    this.geometryOffset = 0;
    this.displayFrame = null;
    this._deformCount_0 = 0;
    this._deformOffset_0 = 0;
    this._sameValueOffset_0 = 0;
  }
  DeformTimelineState.prototype.toString = function () {
    return '[class dragonBones.DeformTimelineState]';
  };
  DeformTimelineState.prototype._onClear = function () {
    MutilpleValueTimelineState.prototype._onClear.call(this);
    this.geometryOffset = 0;
    this.displayFrame = null;
    this._deformCount_0 = 0;
    this._deformOffset_0 = 0;
    this._sameValueOffset_0 = 0;
  };
  DeformTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    MutilpleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    if (this._timelineData != null) {
      var frameIntOffset = ensureNotNull(this._animationData).frameIntOffset + ensureNotNull(this._timelineArray).get_za3lpa$(ensureNotNull(this._timelineData).offset + BinaryOffset$TimelineFrameValueCount_getInstance().index | 0) | 0;
      var dragonBonesData = (tmp$_0 = (tmp$ = this._animationData) != null ? tmp$.parent : null) != null ? tmp$_0.parent : null;
      var frameIntArray = ensureNotNull(dragonBonesData).frameIntArray;
      var slot = Kotlin.isType(tmp$_2 = (Kotlin.isType(tmp$_1 = this.target, BlendState) ? tmp$_1 : throwCCE()).target, Slot) ? tmp$_2 : throwCCE();
      this.geometryOffset = ensureNotNull(frameIntArray)[frameIntOffset + BinaryOffset$DeformVertexOffset_getInstance().index | 0];
      if (this.geometryOffset < 0) {
        this.geometryOffset = this.geometryOffset + 65536 | 0;
      }
      tmp$_3 = slot.displayFrameCount;
      for (var i = 0; i < tmp$_3; i++) {
        var displayFrame = slot.getDisplayFrameAt_za3lpa$(i);
        tmp$_4 = displayFrame.getGeometryData();
        if (tmp$_4 == null) {
          continue;
        }
        var geometryData = tmp$_4;
        if (geometryData.offset === this.geometryOffset) {
          this.displayFrame = displayFrame;
          (tmp$_5 = this.displayFrame) != null ? (tmp$_5.updateDeformVertices(), Unit) : null;
          break;
        }
      }
      if (this.displayFrame == null) {
        this.returnToPool();
        return;
      }
      this._valueOffset = ensureNotNull(this._animationData).frameFloatOffset;
      this._valueCount = frameIntArray[frameIntOffset + BinaryOffset$DeformValueCount_getInstance().index | 0];
      this._deformCount_0 = frameIntArray[frameIntOffset + BinaryOffset$DeformCount_getInstance().index | 0];
      this._deformOffset_0 = frameIntArray[frameIntOffset + BinaryOffset$DeformValueOffset_getInstance().index | 0];
      this._sameValueOffset_0 = frameIntArray[frameIntOffset + BinaryOffset$DeformFloatOffset_getInstance().index | 0] + ensureNotNull(this._animationData).frameFloatOffset;
      this._valueScale = ensureNotNull(this._armature).armatureData.scale;
      this._valueArray = get_raw_0(ensureNotNull(dragonBonesData.frameFloatArray));
      this._rd.size = this._valueCount * 2 | 0;
    }
     else {
      this._deformCount_0 = ensureNotNull(this.displayFrame).deformVertices.size;
    }
  };
  DeformTimelineState.prototype.blend_6taknv$ = function (_isDirty) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var blendState = Kotlin.isType(tmp$ = this.target, BlendState) ? tmp$ : throwCCE();
    var slot = Kotlin.isType(tmp$_0 = blendState.target, Slot) ? tmp$_0 : throwCCE();
    var blendWeight = blendState.blendWeight;
    var result = ensureNotNull(this.displayFrame).deformVertices;
    var valueArray = this._valueArray;
    if (valueArray != null) {
      var valueCount = this._valueCount;
      var deformOffset = this._deformOffset_0;
      var sameValueOffset = this._sameValueOffset_0;
      var rd = this._rd;
      tmp$_1 = this._deformCount_0;
      for (var i = 0; i < tmp$_1; i++) {
        var value;
        if (i < deformOffset)
          tmp$_2 = valueArray.getDouble_za3lpa$(sameValueOffset + i | 0);
        else if (i < (deformOffset + valueCount | 0))
          tmp$_2 = rd.get_za3lpa$(i - deformOffset | 0);
        else
          tmp$_2 = valueArray.getDouble_za3lpa$(sameValueOffset + i - valueCount | 0);
        value = tmp$_2;
        if (blendState.dirty > 1) {
          result.set_5wr77w$(i, result.get_za3lpa$(i) + value * blendWeight);
        }
         else {
          result.set_5wr77w$(i, value * blendWeight);
        }
      }
    }
     else if (blendState.dirty === 1) {
      tmp$_3 = this._deformCount_0;
      for (var i_0 = 0; i_0 < tmp$_3; i_0++) {
        result.set_5wr77w$(i_0, 0.0);
      }
    }
    if (_isDirty || this.dirty) {
      this.dirty = false;
      if (equals(slot._geometryData, ensureNotNull(this.displayFrame).getGeometryData())) {
        slot._verticesDirty = true;
      }
    }
  };
  DeformTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DeformTimelineState',
    interfaces: [MutilpleValueTimelineState]
  };
  function IKConstraintTimelineState() {
    DoubleValueTimelineState.call(this);
  }
  IKConstraintTimelineState.prototype.toString = function () {
    return '[class dragonBones.IKConstraintTimelineState]';
  };
  IKConstraintTimelineState.prototype._onUpdateFrame = function () {
    var tmp$, tmp$_0;
    DoubleValueTimelineState.prototype._onUpdateFrame.call(this);
    var ikConstraint = Kotlin.isType(tmp$ = this.target, IKConstraint) ? tmp$ : throwCCE();
    if (this._timelineData != null) {
      ikConstraint._bendPositive = this._currentA > 0.0;
      ikConstraint._weight = this._currentB;
    }
     else {
      var ikConstraintData = Kotlin.isType(tmp$_0 = ikConstraint._constraintData, IKConstraintData) ? tmp$_0 : throwCCE();
      ikConstraint._bendPositive = ikConstraintData.bendPositive;
      ikConstraint._weight = ikConstraintData.weight;
    }
    ikConstraint.invalidUpdate();
    this.dirty = false;
  };
  IKConstraintTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    DoubleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueScale = 0.01;
    this._valueArray = get_raw(ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray));
  };
  IKConstraintTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IKConstraintTimelineState',
    interfaces: [DoubleValueTimelineState]
  };
  function AnimationProgressTimelineState() {
    SingleValueTimelineState.call(this);
  }
  AnimationProgressTimelineState.prototype.toString = function () {
    return '[class dragonBones.AnimationProgressTimelineState]';
  };
  AnimationProgressTimelineState.prototype._onUpdateFrame = function () {
    var tmp$;
    SingleValueTimelineState.prototype._onUpdateFrame.call(this);
    var animationState = Kotlin.isType(tmp$ = this.target, AnimationState) ? tmp$ : throwCCE();
    if (animationState._parent != null) {
      animationState.currentTime = this._result * animationState.totalTime;
    }
    this.dirty = false;
  };
  AnimationProgressTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    SingleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueScale = 1.0E-4;
    this._valueArray = get_raw(ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray));
  };
  AnimationProgressTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationProgressTimelineState',
    interfaces: [SingleValueTimelineState]
  };
  function AnimationWeightTimelineState() {
    SingleValueTimelineState.call(this);
  }
  AnimationWeightTimelineState.prototype.toString = function () {
    return '[class dragonBones.AnimationWeightTimelineState]';
  };
  AnimationWeightTimelineState.prototype._onUpdateFrame = function () {
    var tmp$;
    SingleValueTimelineState.prototype._onUpdateFrame.call(this);
    var animationState = Kotlin.isType(tmp$ = this.target, AnimationState) ? tmp$ : throwCCE();
    if (animationState._parent != null) {
      animationState.weight = this._result;
    }
    this.dirty = false;
  };
  AnimationWeightTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    SingleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueScale = 1.0E-4;
    this._valueArray = get_raw(ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray));
  };
  AnimationWeightTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationWeightTimelineState',
    interfaces: [SingleValueTimelineState]
  };
  function AnimationParametersTimelineState() {
    DoubleValueTimelineState.call(this);
  }
  AnimationParametersTimelineState.prototype.toString = function () {
    return '[class dragonBones.AnimationParametersTimelineState]';
  };
  AnimationParametersTimelineState.prototype._onUpdateFrame = function () {
    var tmp$;
    DoubleValueTimelineState.prototype._onUpdateFrame.call(this);
    var animationState = Kotlin.isType(tmp$ = this.target, AnimationState) ? tmp$ : throwCCE();
    if (animationState._parent != null) {
      animationState.parameterX = this._resultA;
      animationState.parameterY = this._resultB;
    }
    this.dirty = false;
  };
  AnimationParametersTimelineState.prototype.init_b5te3t$ = function (armature, animationState, timelineData) {
    DoubleValueTimelineState.prototype.init_b5te3t$.call(this, armature, animationState, timelineData);
    this._valueOffset = ensureNotNull(this._animationData).frameIntOffset;
    this._valueScale = 1.0E-4;
    this._valueArray = get_raw(ensureNotNull(ensureNotNull(ensureNotNull(ensureNotNull(this._animationData).parent).parent).frameIntArray));
  };
  AnimationParametersTimelineState.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationParametersTimelineState',
    interfaces: [DoubleValueTimelineState]
  };
  function WorldClock() {
    this.time = 0.0;
    this.timeScale = 1.0;
    this._systemTime_0 = 0.0;
    this._animatebles_0 = ArrayList_init();
    this._clock_0 = null;
  }
  WorldClock.prototype.advanceTime_14dthe$ = function (passedTime) {
    var tmp$, tmp$_0, tmp$_1;
    var passedTime_0 = passedTime;
    if (passedTime_0 !== passedTime_0) {
      passedTime_0 = 0.0;
    }
    var currentTime = klock.Klock.currentTimeMillisDouble() * 0.001;
    if (passedTime_0 < 0.0) {
      passedTime_0 = currentTime - this._systemTime_0;
    }
    this._systemTime_0 = currentTime;
    if (this.timeScale !== 1.0) {
      passedTime_0 *= this.timeScale;
    }
    if (passedTime_0 === 0.0) {
      return;
    }
    if (passedTime_0 < 0.0) {
      this.time = this.time - passedTime_0;
    }
     else {
      this.time = this.time + passedTime_0;
    }
    var r = 0;
    tmp$ = this._animatebles_0.size;
    for (var i = 0; i < tmp$; i++) {
      var animatable = this._animatebles_0.get_za3lpa$(i);
      if (animatable != null) {
        if (r > 0) {
          this._animatebles_0.set_wxm5ur$(i - r | 0, animatable);
          this._animatebles_0.set_wxm5ur$(i, null);
        }
        animatable.advanceTime_14dthe$(passedTime_0);
      }
       else {
        r = r + 1 | 0;
      }
    }
    if (r > 0) {
      tmp$_0 = this._animatebles_0.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        var animateble = this._animatebles_0.get_za3lpa$(i_0);
        if (animateble != null) {
          this._animatebles_0.set_wxm5ur$(i_0 - r | 0, animateble);
        }
         else {
          r = r + 1 | 0;
        }
      }
      tmp$_1 = this._animatebles_0;
      set_lengthSet_1(tmp$_1, get_lengthSet_1(tmp$_1) - r | 0);
    }
  };
  WorldClock.prototype.contains_tgyvsu$ = function (value) {
    if (equals(value, this)) {
      return false;
    }
    var ancestor = value;
    while (!equals(ancestor, this) && ancestor != null) {
      ancestor = ancestor.clock;
    }
    return equals(ancestor, this);
  };
  WorldClock.prototype.add_tgyvsu$ = function (value) {
    if (this._animatebles_0.indexOf_11rb$(value) < 0) {
      this._animatebles_0.add_11rb$(value);
      value.clock = this;
    }
  };
  WorldClock.prototype.remove_tgyvsu$ = function (value) {
    var index = this._animatebles_0.indexOf_11rb$(value);
    if (index >= 0) {
      this._animatebles_0.set_wxm5ur$(index, null);
      value.clock = null;
    }
  };
  WorldClock.prototype.clear = function () {
    var tmp$;
    tmp$ = this._animatebles_0.iterator();
    while (tmp$.hasNext()) {
      var animatable = tmp$.next();
      if (animatable != null) {
        animatable.clock = null;
      }
    }
  };
  Object.defineProperty(WorldClock.prototype, 'clock', {
    get: function () {
      return this._clock_0;
    },
    set: function (value) {
      var tmp$, tmp$_0;
      if (equals(this._clock_0, value)) {
        return;
      }
      (tmp$ = this._clock_0) != null ? (tmp$.remove_tgyvsu$(this), Unit) : null;
      this._clock_0 = value;
      (tmp$_0 = this._clock_0) != null ? (tmp$_0.add_tgyvsu$(this), Unit) : null;
    }
  });
  WorldClock.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WorldClock',
    interfaces: [IAnimatable]
  };
  function WorldClock_init(time, $this) {
    if (time === void 0)
      time = 0.0;
    $this = $this || Object.create(WorldClock.prototype);
    WorldClock.call($this);
    $this.time = time;
    $this._systemTime_0 = klock.Klock.currentTimeMillisDouble() * 0.001;
    return $this;
  }
  function Armature() {
    Armature$Companion_getInstance();
    BaseObject.call(this);
    this.inheritAnimation = true;
    this.userData = null;
    this._lockUpdate = false;
    this._slotsDirty_0 = true;
    this._zOrderDirty_0 = false;
    this._zIndexDirty = false;
    this._alphaDirty = true;
    this._flipX_0 = false;
    this._flipY_0 = false;
    this._cacheFrameIndex = -1;
    this._alpha_0 = 1.0;
    this._globalAlpha = 1.0;
    this._bones_0 = ArrayList_init();
    this._slots_0 = ArrayList_init();
    this._constraints = ArrayList_init();
    this._actions_0 = ArrayList_init();
    this._armatureData = null;
    this._animation_0 = null;
    this._proxy_0 = null;
    this._display_0 = null;
    this._replaceTextureAtlasData = null;
    this._replacedTexture_0 = null;
    this._dragonBones = null;
    this._clock_0 = null;
    this._parent = null;
  }
  Armature.prototype.toString = function () {
    return '[class dragonBones.Armature]';
  };
  function Armature$Companion() {
    Armature$Companion_instance = this;
  }
  Armature$Companion.prototype._onSortSlots_oqrh8c$ = function (a, b) {
    return ((a._zIndex * 1000 | 0) + a._zOrder | 0) > ((b._zIndex * 1000 | 0) + b._zOrder | 0) ? 1 : -1;
  };
  Armature$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Armature$Companion_instance = null;
  function Armature$Companion_getInstance() {
    if (Armature$Companion_instance === null) {
      new Armature$Companion();
    }
    return Armature$Companion_instance;
  }
  Armature.prototype._onClear = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    (tmp$ = this._clock_0) != null ? (tmp$.remove_tgyvsu$(this), Unit) : null;
    tmp$_0 = this._bones_0.iterator();
    while (tmp$_0.hasNext()) {
      var bone = tmp$_0.next();
      bone.returnToPool();
    }
    tmp$_1 = this._slots_0.iterator();
    while (tmp$_1.hasNext()) {
      var slot = tmp$_1.next();
      slot.returnToPool();
    }
    tmp$_2 = this._constraints.iterator();
    while (tmp$_2.hasNext()) {
      var constraint = tmp$_2.next();
      constraint.returnToPool();
    }
    tmp$_3 = this._actions_0.iterator();
    while (tmp$_3.hasNext()) {
      var action = tmp$_3.next();
      action.returnToPool();
    }
    (tmp$_4 = this._animation_0) != null ? (tmp$_4.returnToPool(), Unit) : null;
    (tmp$_5 = this._proxy_0) != null ? (tmp$_5.dbClear(), Unit) : null;
    (tmp$_6 = this._replaceTextureAtlasData) != null ? (tmp$_6.returnToPool(), Unit) : null;
    this.inheritAnimation = true;
    this.userData = null;
    this._lockUpdate = false;
    this._slotsDirty_0 = true;
    this._zOrderDirty_0 = false;
    this._zIndexDirty = false;
    this._alphaDirty = true;
    this._flipX_0 = false;
    this._flipY_0 = false;
    this._cacheFrameIndex = -1;
    this._alpha_0 = 1.0;
    this._globalAlpha = 1.0;
    set_lengthSet_1(this._bones_0, 0);
    set_lengthSet_1(this._slots_0, 0);
    set_lengthSet_1(this._constraints, 0);
    set_lengthSet_1(this._actions_0, 0);
    this._armatureData = null;
    this._animation_0 = null;
    this._proxy_0 = null;
    this._display_0 = null;
    this._replaceTextureAtlasData = null;
    this._replacedTexture_0 = null;
    this._dragonBones = null;
    this._clock_0 = null;
    this._parent = null;
  };
  Armature.prototype._sortZOrder_o1500o$ = function (slotIndices, offset) {
    var tmp$;
    var slotDatas = ensureNotNull(this._armatureData).sortedSlots;
    var isOriginal = slotIndices == null;
    if (this._zOrderDirty_0 || !isOriginal) {
      var l = get_lengthSet_1(slotDatas);
      for (var i = 0; i < l; i++) {
        var slotIndex = isOriginal ? i : (Kotlin.isType(tmp$ = slotIndices, NumberRawArray) ? tmp$ : throwCCE()).getInt_za3lpa$(offset + i | 0);
        if (slotIndex < 0 || slotIndex >= l) {
          continue;
        }
        var slotData = slotDatas.get_za3lpa$(slotIndex);
        var slot = this.getSlot_pdl1vj$(slotData.name);
        if (slot != null) {
          slot._setZOrder_za3lpa$(i);
        }
      }
      this._slotsDirty_0 = true;
      this._zOrderDirty_0 = !isOriginal;
    }
  };
  Armature.prototype._addBone_vcc4uy$ = function (value) {
    if (this._bones_0.indexOf_11rb$(value) < 0) {
      this._bones_0.add_11rb$(value);
    }
  };
  Armature.prototype._addSlot_vcmxg4$ = function (value) {
    if (this._slots_0.indexOf_11rb$(value) < 0) {
      this._slots_0.add_11rb$(value);
    }
  };
  Armature.prototype._addConstraint_ineuod$ = function (value) {
    if (this._constraints.indexOf_11rb$(value) < 0) {
      this._constraints.add_11rb$(value);
    }
  };
  Armature.prototype._bufferAction_8f84tb$ = function (action, append) {
    if (this._actions_0.indexOf_11rb$(action) < 0) {
      if (append) {
        push(this._actions_0, action);
      }
       else {
        unshift(this._actions_0, action);
      }
    }
  };
  Armature.prototype.dispose = function () {
    if (this._armatureData != null) {
      this._lockUpdate = true;
      this.returnToPool();
    }
  };
  Armature.prototype.init_ns4wie$ = function (armatureData, proxy, display, dragonBones) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this._armatureData != null) {
      return;
    }
    this._armatureData = armatureData;
    this._animation_0 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(Animation));
    this._proxy_0 = proxy;
    this._display_0 = display;
    this._dragonBones = dragonBones;
    (tmp$ = this._proxy_0) != null ? (tmp$.dbInit_9a3g6p$(this), Unit) : null;
    (tmp$_0 = this._animation_0) != null ? (tmp$_0.init_9a3g6p$(this), Unit) : null;
    (tmp$_2 = this._animation_0) != null ? (tmp$_2.animations = ensureNotNull((tmp$_1 = this._armatureData) != null ? tmp$_1.animations : null)) : null;
  };
  Armature.prototype.advanceTime_14dthe$ = function (passedTime) {
    var tmp$, tmp$_0;
    this._advanceTime_0(passedTime);
    tmp$ = this._slots_0.iterator();
    while (tmp$.hasNext()) {
      var slot = tmp$.next();
      (tmp$_0 = slot.childArmature) != null ? (tmp$_0.advanceTime_14dthe$(passedTime), Unit) : null;
    }
  };
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  Armature.prototype._advanceTime_0 = function (passedTime) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    if (this._lockUpdate) {
      return;
    }
    this._lockUpdate = true;
    if (this._armatureData == null) {
      console_getInstance().warn_vqirvp$(['The armature has been disposed.']);
      return;
    }
     else if (((tmp$ = this._armatureData) != null ? tmp$.parent : null) == null) {
      console_getInstance().warn_vqirvp$(['The armature data has been disposed.\nPlease make sure dispose armature before call factory.clear().']);
      return;
    }
    var prevCacheFrameIndex = this._cacheFrameIndex;
    (tmp$_0 = this._animation_0) != null ? (tmp$_0.advanceTime_14dthe$(passedTime), Unit) : null;
    if (this._slotsDirty_0 || this._zIndexDirty) {
      sortWith(this._slots_0, new Comparator$ObjectLiteral(getCallableRef('_onSortSlots', function ($receiver, a, b) {
        return $receiver._onSortSlots_oqrh8c$(a, b);
      }.bind(null, Armature$Companion_getInstance()))));
      if (this._zIndexDirty) {
        tmp$_1 = get_lengthSet_1(this._slots_0);
        for (var i = 0; i < tmp$_1; i++) {
          this._slots_0.get_za3lpa$(i)._setZOrder_za3lpa$(i);
        }
      }
      this._slotsDirty_0 = false;
      this._zIndexDirty = false;
    }
    if (this._alphaDirty) {
      this._alphaDirty = false;
      this._globalAlpha = this._alpha_0 * ((tmp$_3 = (tmp$_2 = this._parent) != null ? tmp$_2._globalAlpha : null) != null ? tmp$_3 : 1.0);
      tmp$_4 = this._bones_0.iterator();
      while (tmp$_4.hasNext()) {
        var bone = tmp$_4.next();
        bone._updateAlpha();
      }
      tmp$_5 = this._slots_0.iterator();
      while (tmp$_5.hasNext()) {
        var slot = tmp$_5.next();
        slot._updateAlpha();
      }
    }
    if (this._cacheFrameIndex < 0 || this._cacheFrameIndex !== prevCacheFrameIndex) {
      tmp$_6 = get_length_1(this._bones_0);
      for (var i_0 = 0; i_0 < tmp$_6; i_0++) {
        this._bones_0.get_za3lpa$(i_0).update_za3lpa$(this._cacheFrameIndex);
      }
      tmp$_7 = get_length_1(this._slots_0);
      for (var i_1 = 0; i_1 < tmp$_7; i_1++) {
        this._slots_0.get_za3lpa$(i_1).update_za3lpa$(this._cacheFrameIndex);
      }
    }
    if (get_lengthSet_1(this._actions_0) > 0) {
      tmp$_8 = this._actions_0.iterator();
      while (tmp$_8.hasNext()) {
        var action = tmp$_8.next();
        var actionData = action.actionData;
        if (actionData != null) {
          if (actionData.type === ActionType$Play_getInstance()) {
            if (action.slot != null) {
              var childArmature = (tmp$_9 = action.slot) != null ? tmp$_9.childArmature : null;
              if (childArmature != null) {
                childArmature.animation.fadeIn_qtlk36$(actionData.name);
              }
            }
             else if (action.bone != null) {
              tmp$_10 = this.getSlots().iterator();
              while (tmp$_10.hasNext()) {
                var slot_0 = tmp$_10.next();
                if (equals(slot_0.parent, action.bone)) {
                  var childArmature_0 = slot_0.childArmature;
                  if (childArmature_0 != null) {
                    childArmature_0.animation.fadeIn_qtlk36$(actionData.name);
                  }
                }
              }
            }
             else {
              (tmp$_11 = this._animation_0) != null ? tmp$_11.fadeIn_qtlk36$(actionData.name) : null;
            }
          }
        }
        action.returnToPool();
      }
      set_lengthSet_1(this._actions_0, 0);
    }
    this._lockUpdate = false;
    (tmp$_12 = this._proxy_0) != null ? (tmp$_12.dbUpdate(), Unit) : null;
  };
  Armature.prototype.invalidUpdate_4mavae$ = function (boneName, updateSlot) {
    if (boneName === void 0)
      boneName = null;
    if (updateSlot === void 0)
      updateSlot = false;
    var tmp$, tmp$_0, tmp$_1;
    if (boneName != null && boneName.length > 0) {
      var bone = this.getBone_pdl1vj$(boneName);
      if (bone != null) {
        bone.invalidUpdate();
        if (updateSlot) {
          tmp$ = this._slots_0.iterator();
          while (tmp$.hasNext()) {
            var slot = tmp$.next();
            if (equals(slot.parent, bone)) {
              slot.invalidUpdate();
            }
          }
        }
      }
    }
     else {
      tmp$_0 = this._bones_0.iterator();
      while (tmp$_0.hasNext()) {
        var bone_0 = tmp$_0.next();
        bone_0.invalidUpdate();
      }
      if (updateSlot) {
        tmp$_1 = this._slots_0.iterator();
        while (tmp$_1.hasNext()) {
          var slot_0 = tmp$_1.next();
          slot_0.invalidUpdate();
        }
      }
    }
  };
  Armature.prototype.containsPoint_lu1900$ = function (x, y) {
    var tmp$;
    tmp$ = this._slots_0.iterator();
    while (tmp$.hasNext()) {
      var slot = tmp$.next();
      if (slot.containsPoint_lu1900$(x, y)) {
        return slot;
      }
    }
    return null;
  };
  Armature.prototype.intersectsSegment_e4ky6u$ = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    var tmp$;
    var isV = xA === xB;
    var dMin = 0.0;
    var dMax = 0.0;
    var intXA = 0.0;
    var intYA = 0.0;
    var intXB = 0.0;
    var intYB = 0.0;
    var intAN = 0.0;
    var intBN = 0.0;
    var intSlotA = null;
    var intSlotB = null;
    tmp$ = this._slots_0.iterator();
    while (tmp$.hasNext()) {
      var slot = tmp$.next();
      var intersectionCount = slot.intersectsSegment_e4ky6u$(xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians);
      if (intersectionCount > 0) {
        if (intersectionPointA != null || intersectionPointB != null) {
          if (intersectionPointA != null) {
            var d = isV ? intersectionPointA.y - yA : intersectionPointA.x - xA;
            if (d < 0.0) {
              d = -d;
            }
            if (intSlotA == null || d < dMin) {
              dMin = d;
              intXA = intersectionPointA.x;
              intYA = intersectionPointA.y;
              intSlotA = slot;
              if (normalRadians != null) {
                intAN = normalRadians.x;
              }
            }
          }
          if (intersectionPointB != null) {
            var d_0 = intersectionPointB.x - xA;
            if (d_0 < 0.0) {
              d_0 = -d_0;
            }
            if (intSlotB == null || d_0 > dMax) {
              dMax = d_0;
              intXB = intersectionPointB.x;
              intYB = intersectionPointB.y;
              intSlotB = slot;
              if (normalRadians != null) {
                intBN = normalRadians.y;
              }
            }
          }
        }
         else {
          intSlotA = slot;
          break;
        }
      }
    }
    if (intSlotA != null && intersectionPointA != null) {
      intersectionPointA.x = intXA;
      intersectionPointA.y = intYA;
      if (normalRadians != null) {
        normalRadians.x = intAN;
      }
    }
    if (intSlotB != null && intersectionPointB != null) {
      intersectionPointB.x = intXB;
      intersectionPointB.y = intYB;
      if (normalRadians != null) {
        normalRadians.y = intBN;
      }
    }
    return intSlotA;
  };
  Armature.prototype.getBone_pdl1vj$ = function (name) {
    var tmp$;
    tmp$ = this._bones_0.iterator();
    while (tmp$.hasNext()) {
      var bone = tmp$.next();
      if (equals(bone.name, name)) {
        return bone;
      }
    }
    return null;
  };
  Armature.prototype.getBoneByDisplay_za3rmp$ = function (display) {
    var slot = this.getSlotByDisplay_s8jyv4$(display);
    return slot != null ? slot.parent : null;
  };
  Armature.prototype.getSlot_pdl1vj$ = function (name) {
    var tmp$;
    tmp$ = this._slots_0.iterator();
    while (tmp$.hasNext()) {
      var slot = tmp$.next();
      if (equals(slot.name, name)) {
        return slot;
      }
    }
    return null;
  };
  Armature.prototype.getSlotByDisplay_s8jyv4$ = function (display) {
    var tmp$;
    if (display != null) {
      tmp$ = this._slots_0.iterator();
      while (tmp$.hasNext()) {
        var slot = tmp$.next();
        if (equals(slot.display, display)) {
          return slot;
        }
      }
    }
    return null;
  };
  Armature.prototype.getBones = function () {
    return this._bones_0;
  };
  Armature.prototype.getSlots = function () {
    return this._slots_0;
  };
  Object.defineProperty(Armature.prototype, 'flipX', {
    get: function () {
      return this._flipX_0;
    },
    set: function (value) {
      if (this._flipX_0 === value) {
        return;
      }
      this._flipX_0 = value;
      this.invalidUpdate_4mavae$();
    }
  });
  Object.defineProperty(Armature.prototype, 'flipY', {
    get: function () {
      return this._flipY_0;
    },
    set: function (value) {
      if (this._flipY_0 === value) {
        return;
      }
      this._flipY_0 = value;
      this.invalidUpdate_4mavae$();
    }
  });
  Object.defineProperty(Armature.prototype, 'cacheFrameRate', {
    get: function () {
      return ensureNotNull(this._armatureData).cacheFrameRate;
    },
    set: function (value) {
      var tmp$;
      if (ensureNotNull(this._armatureData).cacheFrameRate !== value) {
        ensureNotNull(this._armatureData).cacheFrames_za3lpa$(value);
        tmp$ = this._slots_0.iterator();
        while (tmp$.hasNext()) {
          var slot = tmp$.next();
          var childArmature = slot.childArmature;
          if (childArmature != null) {
            childArmature.cacheFrameRate = value;
          }
        }
      }
    }
  });
  Object.defineProperty(Armature.prototype, 'name', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this._armatureData) != null ? tmp$.name : null) != null ? tmp$_0 : '';
    }
  });
  Object.defineProperty(Armature.prototype, 'armatureData', {
    get: function () {
      return ensureNotNull(this._armatureData);
    }
  });
  Object.defineProperty(Armature.prototype, 'animation', {
    get: function () {
      return ensureNotNull(this._animation_0);
    }
  });
  Object.defineProperty(Armature.prototype, 'proxy', {
    get: function () {
      return ensureNotNull(this._proxy_0);
    }
  });
  Object.defineProperty(Armature.prototype, 'eventDispatcher', {
    get: function () {
      return ensureNotNull(this._proxy_0);
    }
  });
  Object.defineProperty(Armature.prototype, 'display', {
    get: function () {
      return ensureNotNull(this._display_0);
    }
  });
  Object.defineProperty(Armature.prototype, 'replacedTexture', {
    get: function () {
      return this._replacedTexture_0;
    },
    set: function (value) {
      var tmp$, tmp$_0;
      if (!equals(this._replacedTexture_0, value)) {
        (tmp$ = this._replaceTextureAtlasData) != null ? (tmp$.returnToPool(), Unit) : null;
        this._replaceTextureAtlasData = null;
        this._replacedTexture_0 = value;
        tmp$_0 = this._slots_0.iterator();
        while (tmp$_0.hasNext()) {
          var slot = tmp$_0.next();
          slot.invalidUpdate();
          slot.update_za3lpa$(-1);
        }
      }
    }
  });
  Object.defineProperty(Armature.prototype, 'clock', {
    get: function () {
      return this._clock_0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1;
      if (equals(this._clock_0, value)) {
        return;
      }
      (tmp$ = this._clock_0) != null ? (tmp$.remove_tgyvsu$(this), Unit) : null;
      this._clock_0 = value;
      (tmp$_0 = this._clock_0) != null ? (tmp$_0.add_tgyvsu$(this), Unit) : null;
      tmp$_1 = this._slots_0.iterator();
      while (tmp$_1.hasNext()) {
        var slot = tmp$_1.next();
        var childArmature = slot.childArmature;
        if (childArmature != null) {
          childArmature.clock = this._clock_0;
        }
      }
    }
  });
  Armature.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Armature',
    interfaces: [IAnimatable, BaseObject]
  };
  function Bone() {
    TransformObject.call(this);
    this.offsetMode = OffsetMode$Additive_getInstance();
    this.animationPose = new Transform();
    this._transformDirty = false;
    this._childrenTransformDirty = false;
    this._localDirty = true;
    this._hasConstraint = false;
    this._visible = true;
    this._cachedFrameIndex = -1;
    this._boneData = null;
    this._parent = null;
    this._cachedFrameIndices = null;
  }
  Bone.prototype.toString = function () {
    return '[class dragonBones.Bone]';
  };
  Bone.prototype._onClear = function () {
    TransformObject.prototype._onClear.call(this);
    this.offsetMode = OffsetMode$Additive_getInstance();
    this.animationPose.identity();
    this._transformDirty = false;
    this._childrenTransformDirty = false;
    this._localDirty = true;
    this._hasConstraint = false;
    this._visible = true;
    this._cachedFrameIndex = -1;
    this._boneData = null;
    this._parent = null;
    this._cachedFrameIndices = null;
  };
  Bone.prototype._updateGlobalTransformMatrix_6taknv$ = function (isCache) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var boneData = this._boneData;
    var global = this.global;
    var globalTransformMatrix = this.globalTransformMatrix;
    var origin = this.origin;
    var offset = this.offset;
    var animationPose = this.animationPose;
    var parent = (tmp$ = this._parent) == null || Kotlin.isType(tmp$, Bone) ? tmp$ : null;
    var flipX = ensureNotNull(this._armature).flipX;
    var flipY = ensureNotNull(this._armature).flipY === DragonBones$Companion_getInstance().yDown;
    var inherit = parent != null;
    var rotation = 0.0;
    if (this.offsetMode === OffsetMode$Additive_getInstance()) {
      if (origin != null) {
        global.x = origin.x + offset.x + animationPose.x;
        global.scaleX = origin.scaleX * offset.scaleX * animationPose.scaleX;
        global.scaleY = origin.scaleY * offset.scaleY * animationPose.scaleY;
        if (DragonBones$Companion_getInstance().yDown) {
          global.y = origin.y + offset.y + animationPose.y;
          global.skew = origin.skew + offset.skew + animationPose.skew;
          global.rotation = origin.rotation + offset.rotation + animationPose.rotation;
        }
         else {
          global.y = origin.y - offset.y + animationPose.y;
          global.skew = origin.skew - offset.skew + animationPose.skew;
          global.rotation = origin.rotation - offset.rotation + animationPose.rotation;
        }
      }
       else {
        global.copyFrom_scgbvr$(offset);
        if (!DragonBones$Companion_getInstance().yDown) {
          global.y = -global.y;
          global.skew = -global.skew;
          global.rotation = -global.rotation;
        }
        global.add_scgbvr$(animationPose);
      }
    }
     else if (this.offsetMode === OffsetMode$None_getInstance()) {
      if (origin != null) {
        global.copyFrom_scgbvr$(origin).add_scgbvr$(animationPose);
      }
       else {
        global.copyFrom_scgbvr$(animationPose);
      }
    }
     else {
      inherit = false;
      global.copyFrom_scgbvr$(offset);
      if (!DragonBones$Companion_getInstance().yDown) {
        global.y = -global.y;
        global.skew = -global.skew;
        global.rotation = -global.rotation;
      }
    }
    if (inherit) {
      var parent_0 = ensureNotNull(parent);
      var isSurface = ensureNotNull(parent_0._boneData).type === BoneType$Surface_getInstance();
      var surfaceBone = isSurface ? (Kotlin.isType(tmp$_0 = parent_0, Surface) ? tmp$_0 : throwCCE())._bone : null;
      var parentMatrix = isSurface ? (Kotlin.isType(tmp$_1 = parent_0, Surface) ? tmp$_1 : throwCCE())._getGlobalTransformMatrix_lu1900$(global.x, global.y) : parent_0.globalTransformMatrix;
      if (ensureNotNull(boneData).inheritScale && (!isSurface || surfaceBone != null)) {
        if (isSurface) {
          if (ensureNotNull(boneData).inheritRotation) {
            global.rotation = global.rotation + parent_0.global.rotation;
          }
          (Kotlin.isType(tmp$_2 = surfaceBone, Bone) ? tmp$_2 : throwCCE()).updateGlobalTransform();
          global.scaleX = global.scaleX * surfaceBone.global.scaleX;
          global.scaleY = global.scaleY * surfaceBone.global.scaleY;
          parentMatrix.transformPoint_hd5a0h$(global.x, global.y, global);
          global.toMatrix_dyon7w$(globalTransformMatrix);
          if (boneData.inheritTranslation) {
            global.x = globalTransformMatrix.tx;
            global.y = globalTransformMatrix.ty;
          }
           else {
            globalTransformMatrix.tx = global.x;
            globalTransformMatrix.ty = global.y;
          }
        }
         else {
          if (!boneData.inheritRotation) {
            parent_0.updateGlobalTransform();
            if (flipX && flipY) {
              rotation = global.rotation - (parent_0.global.rotation + math.PI);
            }
             else if (flipX) {
              rotation = global.rotation + parent_0.global.rotation + math.PI;
            }
             else if (flipY) {
              rotation = global.rotation + parent_0.global.rotation;
            }
             else {
              rotation = global.rotation - parent_0.global.rotation;
            }
            global.rotation = rotation;
          }
          global.toMatrix_dyon7w$(globalTransformMatrix);
          globalTransformMatrix.concat_dyon7w$(parentMatrix);
          if (boneData.inheritTranslation) {
            global.x = globalTransformMatrix.tx;
            global.y = globalTransformMatrix.ty;
          }
           else {
            globalTransformMatrix.tx = global.x;
            globalTransformMatrix.ty = global.y;
          }
          if (isCache) {
            global.fromMatrix_dyon7w$(globalTransformMatrix);
          }
           else {
            this._globalDirty = true;
          }
        }
      }
       else {
        if (boneData.inheritTranslation) {
          var x = global.x;
          var y = global.y;
          global.x = parentMatrix.a * x + parentMatrix.c * y + parentMatrix.tx;
          global.y = parentMatrix.b * x + parentMatrix.d * y + parentMatrix.ty;
        }
         else {
          if (flipX) {
            global.x = -global.x;
          }
          if (flipY) {
            global.y = -global.y;
          }
        }
        if (boneData.inheritRotation) {
          parent_0.updateGlobalTransform();
          if (parent_0.global.scaleX < 0.0) {
            rotation = global.rotation + parent_0.global.rotation + math.PI;
          }
           else {
            rotation = global.rotation + parent_0.global.rotation;
          }
          if (parentMatrix.a * parentMatrix.d - parentMatrix.b * parentMatrix.c < 0.0) {
            rotation -= global.rotation * 2.0;
            if (flipX !== flipY || boneData.inheritReflection) {
              global.skew = global.skew + math.PI;
            }
            if (!DragonBones$Companion_getInstance().yDown) {
              global.skew = -global.skew;
            }
          }
          global.rotation = rotation;
        }
         else if (flipX || flipY) {
          if (flipX && flipY) {
            rotation = global.rotation + math.PI;
          }
           else {
            if (flipX) {
              rotation = math.PI - global.rotation;
            }
             else {
              rotation = -global.rotation;
            }
            global.skew = global.skew + math.PI;
          }
          global.rotation = rotation;
        }
        global.toMatrix_dyon7w$(globalTransformMatrix);
      }
    }
     else {
      if (flipX || flipY) {
        if (flipX) {
          global.x = -global.x;
        }
        if (flipY) {
          global.y = -global.y;
        }
        if (flipX && flipY) {
          rotation = global.rotation + math.PI;
        }
         else {
          if (flipX) {
            rotation = math.PI - global.rotation;
          }
           else {
            rotation = -global.rotation;
          }
          global.skew = global.skew + math.PI;
        }
        global.rotation = rotation;
      }
      global.toMatrix_dyon7w$(globalTransformMatrix);
    }
  };
  Bone.prototype._updateAlpha = function () {
    if (this._parent != null) {
      this._globalAlpha = this._alpha * ensureNotNull(this._parent)._globalAlpha;
    }
     else {
      this._globalAlpha = this._alpha * ensureNotNull(this._armature)._globalAlpha;
    }
  };
  Bone.prototype.init_7qxzn9$ = function (boneData, armatureValue) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (this._boneData != null) {
      return;
    }
    this._boneData = boneData;
    this._armature = armatureValue;
    this._alpha = ensureNotNull(this._boneData).alpha;
    if (((tmp$ = this._boneData) != null ? tmp$.parent : null) != null) {
      tmp$_3 = this._armature;
      tmp$_2 = (tmp$_1 = (tmp$_0 = this._boneData) != null ? tmp$_0.parent : null) != null ? tmp$_1.name : null;
      this._parent = tmp$_3 != null ? tmp$_3.getBone_pdl1vj$(tmp$_2) : null;
    }
    (tmp$_4 = this._armature) != null ? (tmp$_4._addBone_vcc4uy$(this), Unit) : null;
    this.origin = (tmp$_5 = this._boneData) != null ? tmp$_5.transform : null;
  };
  Bone.prototype.update_za3lpa$ = function (cacheFrameIndex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var cacheFrameIndex_0 = cacheFrameIndex;
    if (cacheFrameIndex_0 >= 0 && this._cachedFrameIndices != null) {
      var cachedFrameIndex = ensureNotNull(this._cachedFrameIndices).get_za3lpa$(cacheFrameIndex_0);
      if (cachedFrameIndex >= 0 && this._cachedFrameIndex === cachedFrameIndex) {
        this._transformDirty = false;
      }
       else if (cachedFrameIndex >= 0) {
        this._transformDirty = true;
        this._cachedFrameIndex = cachedFrameIndex;
      }
       else {
        if (this._hasConstraint) {
          tmp$ = ensureNotNull(this._armature)._constraints.iterator();
          while (tmp$.hasNext()) {
            var constraint = tmp$.next();
            if (equals(constraint._root, this)) {
              constraint.update();
            }
          }
        }
        if (this._transformDirty || (this._parent != null && ensureNotNull(this._parent)._childrenTransformDirty)) {
          this._transformDirty = true;
          this._cachedFrameIndex = -1;
        }
         else if (this._cachedFrameIndex >= 0) {
          this._transformDirty = false;
          ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, this._cachedFrameIndex);
        }
         else {
          this._transformDirty = true;
          this._cachedFrameIndex = -1;
        }
      }
    }
     else {
      if (this._hasConstraint) {
        tmp$_0 = ensureNotNull(this._armature)._constraints.iterator();
        while (tmp$_0.hasNext()) {
          var constraint_0 = tmp$_0.next();
          if (equals(constraint_0._root, this)) {
            constraint_0.update();
          }
        }
      }
      if (this._transformDirty || (this._parent != null && ensureNotNull(this._parent)._childrenTransformDirty)) {
        cacheFrameIndex_0 = -1;
        this._transformDirty = true;
        this._cachedFrameIndex = -1;
      }
    }
    if (this._transformDirty) {
      this._transformDirty = false;
      this._childrenTransformDirty = true;
      if (this._cachedFrameIndex < 0) {
        var isCache = cacheFrameIndex_0 >= 0;
        if (this._localDirty) {
          this._updateGlobalTransformMatrix_6taknv$(isCache);
        }
        if (isCache && this._cachedFrameIndices != null) {
          var res = ensureNotNull(ensureNotNull(this._armature)._armatureData).setCacheFrame_eeuvpt$(this.globalTransformMatrix, this.global);
          this._cachedFrameIndex = res;
          ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, res);
        }
      }
       else {
        (tmp$_2 = (tmp$_1 = this._armature) != null ? tmp$_1._armatureData : null) != null ? (tmp$_2.getCacheFrame_bqh3xf$(this.globalTransformMatrix, this.global, this._cachedFrameIndex), Unit) : null;
      }
    }
     else if (this._childrenTransformDirty) {
      this._childrenTransformDirty = false;
    }
    this._localDirty = true;
  };
  Bone.prototype.updateByConstraint = function () {
    if (this._localDirty) {
      this._localDirty = false;
      if (this._transformDirty || (this._parent != null && ensureNotNull(this._parent)._childrenTransformDirty)) {
        this._updateGlobalTransformMatrix_6taknv$(true);
      }
      this._transformDirty = true;
    }
  };
  Bone.prototype.invalidUpdate = function () {
    this._transformDirty = true;
  };
  Bone.prototype.contains_vcc4uy$ = function (value) {
    if (equals(value, this)) {
      return false;
    }
    var ancestor = value;
    while (!equals(ancestor, this) && ancestor != null) {
      ancestor = ancestor.parent;
    }
    return equals(ancestor, this);
  };
  Object.defineProperty(Bone.prototype, 'boneData', {
    get: function () {
      return ensureNotNull(this._boneData);
    }
  });
  Object.defineProperty(Bone.prototype, 'visible', {
    get: function () {
      return this._visible;
    },
    set: function (value) {
      var tmp$;
      if (this._visible === value) {
        return;
      }
      this._visible = value;
      tmp$ = ensureNotNull(this._armature).getSlots().iterator();
      while (tmp$.hasNext()) {
        var slot = tmp$.next();
        if (equals(slot.parent, this)) {
          slot._updateVisible();
        }
      }
    }
  });
  Object.defineProperty(Bone.prototype, 'name', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this._boneData) != null ? tmp$.name : null) != null ? tmp$_0 : '';
    }
  });
  Object.defineProperty(Bone.prototype, 'parent', {
    get: function () {
      return this._parent;
    }
  });
  Bone.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Bone',
    interfaces: [TransformObject]
  };
  function Constraint() {
    BaseObject.call(this);
    this._constraintData = null;
    this._armature_9bx2pv$_0 = this._armature_9bx2pv$_0;
    this._target_e1oqg5$_0 = this._target_e1oqg5$_0;
    this._root_uvx9ro$_0 = this._root_uvx9ro$_0;
    this._bone = null;
  }
  Object.defineProperty(Constraint.prototype, '_armature', {
    get: function () {
      if (this._armature_9bx2pv$_0 == null)
        return throwUPAE('_armature');
      return this._armature_9bx2pv$_0;
    },
    set: function (_armature) {
      this._armature_9bx2pv$_0 = _armature;
    }
  });
  Object.defineProperty(Constraint.prototype, '_target', {
    get: function () {
      if (this._target_e1oqg5$_0 == null)
        return throwUPAE('_target');
      return this._target_e1oqg5$_0;
    },
    set: function (_target) {
      this._target_e1oqg5$_0 = _target;
    }
  });
  Object.defineProperty(Constraint.prototype, '_root', {
    get: function () {
      if (this._root_uvx9ro$_0 == null)
        return throwUPAE('_root');
      return this._root_uvx9ro$_0;
    },
    set: function (_root) {
      this._root_uvx9ro$_0 = _root;
    }
  });
  Constraint.prototype._onClear = function () {
    this._bone = null;
  };
  Object.defineProperty(Constraint.prototype, 'name', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this._constraintData) != null ? tmp$.name : null) != null ? tmp$_0 : '';
    }
  });
  Constraint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Constraint',
    interfaces: [BaseObject]
  };
  function IKConstraint() {
    Constraint.call(this);
    this._scaleEnabled_0 = false;
    this._bendPositive = false;
    this._weight = 1.0;
  }
  IKConstraint.prototype.toString = function () {
    return '[class dragonBones.IKConstraint]';
  };
  IKConstraint.prototype._onClear = function () {
    Constraint.prototype._onClear.call(this);
    this._scaleEnabled_0 = false;
    this._bendPositive = false;
    this._weight = 1.0;
  };
  IKConstraint.prototype._computeA_0 = function () {
    var ikGlobal = this._target.global;
    var global = this._root.global;
    var globalTransformMatrix = this._root.globalTransformMatrix;
    var y = ikGlobal.y - global.y;
    var x = ikGlobal.x - global.x;
    var radian = Math_0.atan2(y, x);
    if (global.scaleX < 0.0) {
      radian += math.PI;
    }
    global.rotation = global.rotation + Transform$Companion_getInstance().normalizeRadian_14dthe$(radian - global.rotation) * this._weight;
    global.toMatrix_dyon7w$(globalTransformMatrix);
  };
  IKConstraint.prototype._computeB_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    var boneLength = ensureNotNull((Kotlin.isType(tmp$ = this._bone, Bone) ? tmp$ : throwCCE())._boneData).length;
    var parent = this._root;
    var ikGlobal = this._target.global;
    var parentGlobal = parent.global;
    var global = (Kotlin.isType(tmp$_0 = this._bone, Bone) ? tmp$_0 : throwCCE()).global;
    var globalTransformMatrix = (Kotlin.isType(tmp$_1 = this._bone, Bone) ? tmp$_1 : throwCCE()).globalTransformMatrix;
    var x = globalTransformMatrix.a * boneLength;
    var y = globalTransformMatrix.b * boneLength;
    var lLL = x * x + y * y;
    var lL = Math_0.sqrt(lLL);
    var dX = global.x - parentGlobal.x;
    var dY = global.y - parentGlobal.y;
    var lPP = dX * dX + dY * dY;
    var lP = Math_0.sqrt(lPP);
    var rawRadian = global.rotation;
    var rawParentRadian = parentGlobal.rotation;
    var y_0 = dY;
    var x_0 = dX;
    var rawRadianA = Math_0.atan2(y_0, x_0);
    dX = ikGlobal.x - parentGlobal.x;
    dY = ikGlobal.y - parentGlobal.y;
    var lTT = dX * dX + dY * dY;
    var lT = Math_0.sqrt(lTT);
    var radianA;
    if (lL + lP <= lT || lT + lL <= lP || lT + lP <= lL) {
      var y_1 = ikGlobal.y - parentGlobal.y;
      var x_1 = ikGlobal.x - parentGlobal.x;
      radianA = Math_0.atan2(y_1, x_1);
      if (lL + lP > lT)
        if (lP < lL) {
          radianA += math.PI;
        }
    }
     else {
      var h = (lPP - lLL + lTT) / (2.0 * lTT);
      var x_2 = lPP - h * h * lTT;
      var r = Math_0.sqrt(x_2) / lT;
      var hX = parentGlobal.x + dX * h;
      var hY = parentGlobal.y + dY * h;
      var rX = -dY * r;
      var rY = dX * r;
      var isPPR = false;
      var parentParent = parent.parent;
      if (parentParent != null) {
        var parentParentMatrix = parentParent.globalTransformMatrix;
        isPPR = parentParentMatrix.a * parentParentMatrix.d - parentParentMatrix.b * parentParentMatrix.c < 0.0;
      }
      if (isPPR !== this._bendPositive) {
        global.x = hX - rX;
        global.y = hY - rY;
      }
       else {
        global.x = hX + rX;
        global.y = hY + rY;
      }
      var y_2 = global.y - parentGlobal.y;
      var x_3 = global.x - parentGlobal.x;
      radianA = Math_0.atan2(y_2, x_3);
    }
    var dR = Transform$Companion_getInstance().normalizeRadian_14dthe$(radianA - rawRadianA);
    parentGlobal.rotation = rawParentRadian + dR * this._weight;
    parentGlobal.toMatrix_dyon7w$(parent.globalTransformMatrix);
    var currentRadianA = rawRadianA + dR * this._weight;
    global.x = parentGlobal.x + Math_0.cos(currentRadianA) * lP;
    global.y = parentGlobal.y + Math_0.sin(currentRadianA) * lP;
    var y_3 = ikGlobal.y - global.y;
    var x_4 = ikGlobal.x - global.x;
    var radianB = Math_0.atan2(y_3, x_4);
    if (global.scaleX < 0.0) {
      radianB += math.PI;
    }
    global.rotation = parentGlobal.rotation + rawRadian - rawParentRadian + Transform$Companion_getInstance().normalizeRadian_14dthe$(radianB - dR - rawRadian) * this._weight;
    global.toMatrix_dyon7w$(globalTransformMatrix);
  };
  IKConstraint.prototype.init_jwnilu$ = function (constraintData, armature) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    if (this._constraintData != null) {
      return;
    }
    this._constraintData = constraintData;
    this._armature = armature;
    this._target = ensureNotNull(this._armature.getBone_pdl1vj$((tmp$_0 = (tmp$ = this._constraintData) != null ? tmp$.target : null) != null ? tmp$_0.name : null));
    this._root = ensureNotNull(this._armature.getBone_pdl1vj$((tmp$_2 = (tmp$_1 = this._constraintData) != null ? tmp$_1.root : null) != null ? tmp$_2.name : null));
    this._bone = this._armature.getBone_pdl1vj$((tmp$_4 = (tmp$_3 = this._constraintData) != null ? tmp$_3.bone : null) != null ? tmp$_4.name : null);
    var tmp$_5;
    var ikConstraintData = Kotlin.isType(tmp$_5 = this._constraintData, IKConstraintData) ? tmp$_5 : throwCCE();
    this._scaleEnabled_0 = ikConstraintData.scaleEnabled;
    this._bendPositive = ikConstraintData.bendPositive;
    this._weight = ikConstraintData.weight;
    this._root._hasConstraint = true;
  };
  IKConstraint.prototype.update = function () {
    var tmp$;
    this._root.updateByConstraint();
    if (this._bone != null) {
      (tmp$ = this._bone) != null ? (tmp$.updateByConstraint(), Unit) : null;
      this._computeB_0();
    }
     else {
      this._computeA_0();
    }
  };
  IKConstraint.prototype.invalidUpdate = function () {
    var tmp$;
    this._root.invalidUpdate();
    (tmp$ = this._bone) != null ? (tmp$.invalidUpdate(), Unit) : null;
  };
  IKConstraint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IKConstraint',
    interfaces: [Constraint]
  };
  function PathConstraint() {
    Constraint.call(this);
    this.dirty = false;
    this.pathOffset = 0;
    this.position = 0.0;
    this.spacing = 0.0;
    this.rotateOffset = 0.0;
    this.rotateMix = 1.0;
    this.translateMix = 1.0;
    this._pathSlot_0 = null;
    this._bones_0 = ArrayList_init();
    this._spaces_0 = new DoubleArrayList();
    this._positions_0 = new DoubleArrayList();
    this._curves_0 = new DoubleArrayList();
    this._boneLengths_0 = new DoubleArrayList();
    this._pathGlobalVertices_0 = new DoubleArrayList();
    this._segments_0 = DoubleArrayList_init(new Float64Array([10.0]));
  }
  PathConstraint.prototype.toString = function () {
    return '[class dragonBones.PathConstraint]';
  };
  PathConstraint.prototype._onClear = function () {
    Constraint.prototype._onClear.call(this);
    this.dirty = false;
    this.pathOffset = 0;
    this.position = 0.0;
    this.spacing = 0.0;
    this.rotateOffset = 0.0;
    this.rotateMix = 1.0;
    this.translateMix = 1.0;
    this._pathSlot_0 = null;
    this._bones_0.clear();
    this._spaces_0.clear();
    this._positions_0.clear();
    this._curves_0.clear();
    this._boneLengths_0.clear();
    this._pathGlobalVertices_0.clear();
  };
  PathConstraint.prototype._updatePathVertices_0 = function (verticesData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    var armature = this._armature;
    var dragonBonesData = ensureNotNull(armature.armatureData.parent);
    var scale = armature.armatureData.scale;
    var intArray = ensureNotNull(dragonBonesData.intArray);
    var floatArray = ensureNotNull(dragonBonesData.floatArray);
    var pathOffset = verticesData.offset;
    var pathVertexCount = intArray[pathOffset + BinaryOffset$GeometryVertexCount_getInstance().index | 0];
    var pathVertexOffset = intArray[pathOffset + BinaryOffset$GeometryFloatOffset_getInstance().index | 0];
    set_lengthSet_0(this._pathGlobalVertices_0, pathVertexCount * 2);
    var weightData = verticesData.weight;
    if (weightData == null) {
      var parentBone = ensureNotNull(this._pathSlot_0).parent;
      parentBone.updateByConstraint();
      var matrix = parentBone.globalTransformMatrix;
      var iV = pathVertexOffset;
      for (var i = 0; i < pathVertexCount; i += 2) {
        var vx = floatArray[tmp$ = iV, iV = tmp$ + 1 | 0, tmp$] * scale;
        var vy = floatArray[tmp$_0 = iV, iV = tmp$_0 + 1 | 0, tmp$_0] * scale;
        var x = matrix.a * vx + matrix.c * vy + matrix.tx;
        var y = matrix.b * vx + matrix.d * vy + matrix.ty;
        this._pathGlobalVertices_0.set_5wr77w$(i, x);
        this._pathGlobalVertices_0.set_5wr77w$(i + 1 | 0, y);
      }
      return;
    }
    var bones = ensureNotNull(this._pathSlot_0)._geometryBones;
    var weightBoneCount = weightData.bones.size;
    var weightOffset = weightData.offset;
    var floatOffset = intArray[weightOffset + BinaryOffset$WeigthFloatOffset_getInstance().index | 0];
    var iV_0 = floatOffset;
    var iB = weightOffset + BinaryOffset$WeigthBoneIndices_getInstance().index + weightBoneCount | 0;
    var iW = 0;
    for (var i_0 = 0; i_0 < pathVertexCount; i_0++) {
      var vertexBoneCount = intArray[tmp$_1 = iB, iB = tmp$_1 + 1 | 0, tmp$_1];
      var xG = 0.0;
      var yG = 0.0;
      for (var ii = 0; ii < vertexBoneCount; ii++) {
        var boneIndex = intArray[tmp$_2 = iB, iB = tmp$_2 + 1 | 0, tmp$_2];
        tmp$_3 = bones.get_za3lpa$(boneIndex);
        if (tmp$_3 == null) {
          continue;
        }
        var bone = tmp$_3;
        bone.updateByConstraint();
        var matrix_0 = bone.globalTransformMatrix;
        var weight = floatArray[tmp$_4 = iV_0, iV_0 = tmp$_4 + 1 | 0, tmp$_4];
        var vx_0 = floatArray[tmp$_5 = iV_0, iV_0 = tmp$_5 + 1 | 0, tmp$_5] * scale;
        var vy_0 = floatArray[tmp$_6 = iV_0, iV_0 = tmp$_6 + 1 | 0, tmp$_6] * scale;
        xG += (matrix_0.a * vx_0 + matrix_0.c * vy_0 + matrix_0.tx) * weight;
        yG += (matrix_0.b * vx_0 + matrix_0.d * vy_0 + matrix_0.ty) * weight;
      }
      this._pathGlobalVertices_0.set_5wr77w$((tmp$_7 = iW, iW = tmp$_7 + 1 | 0, tmp$_7), xG);
      this._pathGlobalVertices_0.set_5wr77w$((tmp$_8 = iW, iW = tmp$_8 + 1 | 0, tmp$_8), yG);
    }
  };
  PathConstraint.prototype._computeVertices_0 = function (start, count, offset, out) {
    var tmp$, tmp$_0;
    var iW = start;
    for (var i = offset; i < count; i += 2) {
      out.set_5wr77w$(i, this._pathGlobalVertices_0.get_za3lpa$((tmp$ = iW, iW = tmp$ + 1 | 0, tmp$)));
      out.set_5wr77w$(i + 1 | 0, this._pathGlobalVertices_0.get_za3lpa$((tmp$_0 = iW, iW = tmp$_0 + 1 | 0, tmp$_0)));
    }
  };
  PathConstraint.prototype._computeBezierCurve_0 = function (pathDisplayDta, spaceCount, tangents, percentPosition, percentSpacing) {
    var tmp$;
    var armature = this._armature;
    var intArray = ensureNotNull(ensureNotNull(armature.armatureData.parent).intArray);
    var vertexCount = intArray[pathDisplayDta.geometry.offset + BinaryOffset$GeometryVertexCount_getInstance().index | 0];
    var positions = this._positions_0;
    var spaces = this._spaces_0;
    var isClosed = pathDisplayDta.closed;
    var curveVertices = new DoubleArrayList();
    var verticesLength = vertexCount * 2 | 0;
    var curveCount = verticesLength / 6 | 0;
    var preCurve = -1;
    var position = this.position;
    set_lengthSet_0(positions, (spaceCount * 3 | 0) + 2 | 0);
    var pathLength;
    if (!pathDisplayDta.constantSpeed) {
      var lenghts = pathDisplayDta.curveLengths;
      curveCount = curveCount - (isClosed ? 1 : 2) | 0;
      pathLength = lenghts.get_za3lpa$(curveCount);
      if (percentPosition) {
        position *= pathLength;
      }
      if (percentSpacing) {
        for (var i = 0; i < spaceCount; i++) {
          spaces.set_5wr77w$(i, spaces.get_za3lpa$(i) * pathLength);
        }
      }
      set_lengthSet_0(curveVertices, 8);
      var curve = 0;
      for (var i_0 = 0; i_0 < spaceCount; i_0++) {
        var o = i_0 * 3 | 0;
        var space = spaces.get_za3lpa$(i_0);
        position += space;
        if (isClosed) {
          position %= pathLength;
          if (position < 0) {
            position += pathLength;
          }
          curve = 0;
        }
         else if (position < 0) {
          continue;
        }
         else if (position > pathLength) {
          continue;
        }
        var percent;
        while (true) {
          var len = lenghts.get_za3lpa$(curve);
          if (position > len) {
            curve = curve + 1 | 0;
            continue;
          }
          if (curve === 0) {
            percent = position / len;
          }
           else {
            var preLen = lenghts.get_za3lpa$(curve - 1 | 0);
            percent = (position - preLen) / (len - preLen);
          }
          break;
        }
        if (curve !== preCurve) {
          preCurve = curve;
          if (isClosed && curve === curveCount) {
            this._computeVertices_0(verticesLength - 4 | 0, 4, 0, curveVertices);
            this._computeVertices_0(0, 4, 4, curveVertices);
          }
           else {
            this._computeVertices_0((curve * 6 | 0) + 2 | 0, 8, 0, curveVertices);
          }
        }
        this.addCurvePosition_0(percent, curveVertices.get_za3lpa$(0), curveVertices.get_za3lpa$(1), curveVertices.get_za3lpa$(2), curveVertices.get_za3lpa$(3), curveVertices.get_za3lpa$(4), curveVertices.get_za3lpa$(5), curveVertices.get_za3lpa$(6), curveVertices.get_za3lpa$(7), positions, o, tangents);
      }
      return;
    }
    if (isClosed) {
      verticesLength = verticesLength + 2 | 0;
      set_lengthSet_0(curveVertices, vertexCount);
      this._computeVertices_0(2, verticesLength - 4 | 0, 0, curveVertices);
      this._computeVertices_0(0, 2, verticesLength - 4 | 0, curveVertices);
      curveVertices.set_5wr77w$(verticesLength - 2 | 0, curveVertices.get_za3lpa$(0));
      curveVertices.set_5wr77w$(verticesLength - 1 | 0, curveVertices.get_za3lpa$(1));
    }
     else {
      curveCount = curveCount - 1 | 0;
      verticesLength = verticesLength - 4 | 0;
      set_lengthSet_0(curveVertices, verticesLength);
      this._computeVertices_0(2, verticesLength, 0, curveVertices);
    }
    var curves = new DoubleArrayList(curveCount);
    pathLength = 0.0;
    var x1 = curveVertices.get_za3lpa$(0);
    var y1 = curveVertices.get_za3lpa$(1);
    var cx1 = 0.0;
    var cy1 = 0.0;
    var cx2 = 0.0;
    var cy2 = 0.0;
    var x2 = 0.0;
    var y2 = 0.0;
    var tmpx;
    var tmpy;
    var dddfx;
    var dddfy;
    var ddfx;
    var ddfy;
    var dfx;
    var dfy;
    tmp$ = curveCount;
    for (var i_1 = 0; i_1 < tmp$; i_1++) {
      var w = 2 + (i_1 * 6 | 0) | 0;
      cx1 = curveVertices.get_za3lpa$(w);
      cy1 = curveVertices.get_za3lpa$(w + 1 | 0);
      cx2 = curveVertices.get_za3lpa$(w + 2 | 0);
      cy2 = curveVertices.get_za3lpa$(w + 3 | 0);
      x2 = curveVertices.get_za3lpa$(w + 4 | 0);
      y2 = curveVertices.get_za3lpa$(w + 5 | 0);
      tmpx = (x1 - cx1 * 2 + cx2) * 0.1875;
      tmpy = (y1 - cy1 * 2 + cy2) * 0.1875;
      dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.09375;
      dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.09375;
      ddfx = tmpx * 2 + dddfx;
      ddfy = tmpy * 2 + dddfy;
      dfx = (cx1 - x1) * 0.75 + tmpx + dddfx * 0.16666667;
      dfy = (cy1 - y1) * 0.75 + tmpy + dddfy * 0.16666667;
      var x = dfx * dfx + dfy * dfy;
      pathLength += Math_0.sqrt(x);
      dfx += ddfx;
      dfy += ddfy;
      ddfx += dddfx;
      ddfy += dddfy;
      var x_0 = dfx * dfx + dfy * dfy;
      pathLength += Math_0.sqrt(x_0);
      dfx += ddfx;
      dfy += ddfy;
      var x_1 = dfx * dfx + dfy * dfy;
      pathLength += Math_0.sqrt(x_1);
      dfx += ddfx + dddfx;
      dfy += ddfy + dddfy;
      var x_2 = dfx * dfx + dfy * dfy;
      pathLength += Math_0.sqrt(x_2);
      curves.set_5wr77w$(i_1, pathLength);
      x1 = x2;
      y1 = y2;
    }
    if (percentPosition) {
      position *= pathLength;
    }
    if (percentSpacing) {
      for (var i_2 = 0; i_2 < spaceCount; i_2++) {
        spaces.set_5wr77w$(i_2, spaces.get_za3lpa$(i_2) * pathLength);
      }
    }
    var segments = this._segments_0;
    var curveLength = 0.0;
    var curve_0 = 0;
    var segment = 0;
    for (var i_3 = 0; i_3 < spaceCount; i_3++) {
      var o_0 = i_3 * 3 | 0;
      var space_0 = spaces.get_za3lpa$(i_3);
      position += space_0;
      var p = position;
      if (isClosed) {
        p %= pathLength;
        if (p < 0)
          p += pathLength;
        curve_0 = 0;
      }
       else if (p < 0) {
        continue;
      }
       else if (p > pathLength) {
        continue;
      }
      while (true) {
        var length = curves.get_za3lpa$(curve_0);
        if (p > length) {
          curve_0 = curve_0 + 1 | 0;
          continue;
        }
        if (curve_0 === 0)
          p /= length;
        else {
          var prev = curves.get_za3lpa$(curve_0 - 1 | 0);
          p = (p - prev) / (length - prev);
        }
        break;
      }
      if (curve_0 !== preCurve) {
        preCurve = curve_0;
        var ii = curve_0 * 6 | 0;
        x1 = curveVertices.get_za3lpa$(ii);
        y1 = curveVertices.get_za3lpa$(ii + 1 | 0);
        cx1 = curveVertices.get_za3lpa$(ii + 2 | 0);
        cy1 = curveVertices.get_za3lpa$(ii + 3 | 0);
        cx2 = curveVertices.get_za3lpa$(ii + 4 | 0);
        cy2 = curveVertices.get_za3lpa$(ii + 5 | 0);
        x2 = curveVertices.get_za3lpa$(ii + 6 | 0);
        y2 = curveVertices.get_za3lpa$(ii + 7 | 0);
        tmpx = (x1 - cx1 * 2 + cx2) * 0.03;
        tmpy = (y1 - cy1 * 2 + cy2) * 0.03;
        dddfx = ((cx1 - cx2) * 3 - x1 + x2) * 0.006;
        dddfy = ((cy1 - cy2) * 3 - y1 + y2) * 0.006;
        ddfx = tmpx * 2 + dddfx;
        ddfy = tmpy * 2 + dddfy;
        dfx = (cx1 - x1) * 0.3 + tmpx + dddfx * 0.16666667;
        dfy = (cy1 - y1) * 0.3 + tmpy + dddfy * 0.16666667;
        var x_3 = dfx * dfx + dfy * dfy;
        curveLength = Math_0.sqrt(x_3);
        segments.set_5wr77w$(0, curveLength);
        for (var ii_0 = 1; ii_0 < 8; ii_0++) {
          dfx += ddfx;
          dfy += ddfy;
          ddfx += dddfx;
          ddfy += dddfy;
          var x_4 = dfx * dfx + dfy * dfy;
          curveLength += Math_0.sqrt(x_4);
          segments.set_5wr77w$(ii_0, curveLength);
        }
        dfx += ddfx;
        dfy += ddfy;
        var x_5 = dfx * dfx + dfy * dfy;
        curveLength += Math_0.sqrt(x_5);
        segments.set_5wr77w$(8, curveLength);
        dfx += ddfx + dddfx;
        dfy += ddfy + dddfy;
        var x_6 = dfx * dfx + dfy * dfy;
        curveLength += Math_0.sqrt(x_6);
        segments.set_5wr77w$(9, curveLength);
        segment = 0;
      }
      p *= curveLength;
      while (true) {
        var length_0 = segments.get_za3lpa$(segment);
        if (p > length_0) {
          segment = segment + 1 | 0;
          continue;
        }
        if (segment === 0)
          p /= length_0;
        else {
          var prev_0 = segments.get_za3lpa$(segment - 1 | 0);
          p = segment + (p - prev_0) / (length_0 - prev_0);
        }
        break;
      }
      this.addCurvePosition_0(p * 0.1, x1, y1, cx1, cy1, cx2, cy2, x2, y2, positions, o_0, tangents);
    }
  };
  PathConstraint.prototype.addCurvePosition_0 = function (t, x1, y1, cx1, cy1, cx2, cy2, x2, y2, out, offset, tangents) {
    if (t === 0.0) {
      out.set_5wr77w$(offset, x1);
      out.set_5wr77w$(offset + 1 | 0, y1);
      out.set_5wr77w$(offset + 2 | 0, 0.0);
      return;
    }
    if (t === 1.0) {
      out.set_5wr77w$(offset, x2);
      out.set_5wr77w$(offset + 1 | 0, y2);
      out.set_5wr77w$(offset + 2 | 0, 0.0);
      return;
    }
    var mt = 1 - t;
    var mt2 = mt * mt;
    var t2 = t * t;
    var a = mt2 * mt;
    var b = mt2 * t * 3;
    var c = mt * t2 * 3;
    var d = t * t2;
    var x = a * x1 + b * cx1 + c * cx2 + d * x2;
    var y = a * y1 + b * cy1 + c * cy2 + d * y2;
    out.set_5wr77w$(offset, x);
    out.set_5wr77w$(offset + 1 | 0, y);
    if (tangents) {
      var tmp$ = offset + 2 | 0;
      var y_0 = y - (a * y1 + b * cy1 + c * cy2);
      var x_0 = x - (a * x1 + b * cx1 + c * cx2);
      out.set_5wr77w$(tmp$, Math_0.atan2(y_0, x_0));
    }
     else {
      out.set_5wr77w$(offset + 2 | 0, 0.0);
    }
  };
  PathConstraint.prototype.init_jwnilu$ = function (constraintData, armature) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    this._constraintData = constraintData;
    this._armature = armature;
    var data = Kotlin.isType(tmp$ = constraintData, PathConstraintData) ? tmp$ : throwCCE();
    this.pathOffset = ensureNotNull(data.pathDisplayData).geometry.offset;
    this.position = data.position;
    this.spacing = data.spacing;
    this.rotateOffset = data.rotateOffset;
    this.rotateMix = data.rotateMix;
    this.translateMix = data.translateMix;
    this._root = Kotlin.isType(tmp$_1 = this._armature.getBone_pdl1vj$((tmp$_0 = data.root) != null ? tmp$_0.name : null), Bone) ? tmp$_1 : throwCCE();
    this._target = Kotlin.isType(tmp$_3 = this._armature.getBone_pdl1vj$((tmp$_2 = data.target) != null ? tmp$_2.name : null), Bone) ? tmp$_3 : throwCCE();
    this._pathSlot_0 = Kotlin.isType(tmp$_5 = this._armature.getSlot_pdl1vj$((tmp$_4 = data.pathSlot) != null ? tmp$_4.name : null), Slot) ? tmp$_5 : throwCCE();
    tmp$_6 = get_length_1(data.bones);
    for (var i = 0; i < tmp$_6; i++) {
      var bone = this._armature.getBone_pdl1vj$(data.bones.get_za3lpa$(i).name);
      if (bone != null) {
        push(this._bones_0, bone);
      }
    }
    if (data.rotateMode === RotateMode$ChainScale_getInstance()) {
      set_lengthSet_0(this._boneLengths_0, get_length_1(this._bones_0));
    }
    this._root._hasConstraint = true;
  };
  PathConstraint.prototype.update = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var pathSlot = this._pathSlot_0;
    if ((pathSlot != null ? pathSlot._geometryData : null) == null || ((tmp$ = pathSlot._geometryData) != null ? tmp$.offset : null) !== this.pathOffset) {
      return;
    }
    var constraintData = Kotlin.isType(tmp$_0 = this._constraintData, PathConstraintData) ? tmp$_0 : throwCCE();
    var isPathVerticeDirty = false;
    if (this._root._childrenTransformDirty) {
      this._updatePathVertices_0(ensureNotNull(pathSlot._geometryData));
      isPathVerticeDirty = true;
    }
     else if (pathSlot._verticesDirty || pathSlot._isBonesUpdate()) {
      this._updatePathVertices_0(ensureNotNull(pathSlot._geometryData));
      pathSlot._verticesDirty = false;
      isPathVerticeDirty = true;
    }
    if (!isPathVerticeDirty && !this.dirty) {
      return;
    }
    var positionMode = constraintData.positionMode;
    var spacingMode = constraintData.spacingMode;
    var rotateMode = constraintData.rotateMode;
    var bones = this._bones_0;
    var isLengthMode = spacingMode === SpacingMode$Length_getInstance();
    var isChainScaleMode = rotateMode === RotateMode$ChainScale_getInstance();
    var isTangentMode = rotateMode === RotateMode$Tangent_getInstance();
    var boneCount = get_length_1(bones);
    var spacesCount = isTangentMode ? boneCount : boneCount + 1 | 0;
    var spacing = this.spacing;
    var spaces = this._spaces_0;
    set_lengthSet_0(spaces, spacesCount);
    if (isChainScaleMode || isLengthMode) {
      spaces.set_5wr77w$(0, 0.0);
      tmp$_1 = spacesCount - 1 | 0;
      for (var i = 0; i < tmp$_1; i++) {
        var bone = bones.get_za3lpa$(i);
        bone.updateByConstraint();
        var boneLength = numberToInt(ensureNotNull(bone._boneData).length);
        var matrix = bone.globalTransformMatrix;
        var x = boneLength * matrix.a;
        var y = boneLength * matrix.b;
        var x_0 = x * x + y * y;
        var len = Math_0.sqrt(x_0);
        if (isChainScaleMode) {
          this._boneLengths_0.set_5wr77w$(i, len);
        }
        spaces.set_5wr77w$(i + 1 | 0, (boneLength + spacing) * len / boneLength);
      }
    }
     else {
      for (var i_0 = 0; i_0 < spacesCount; i_0++) {
        spaces.set_5wr77w$(i_0, spacing);
      }
    }
    this._computeBezierCurve_0(Kotlin.isType(tmp$_3 = (Kotlin.isType(tmp$_2 = pathSlot._displayFrame, DisplayFrame) ? tmp$_2 : throwCCE()).rawDisplayData, PathDisplayData) ? tmp$_3 : throwCCE(), spacesCount, isTangentMode, positionMode === PositionMode$Percent_getInstance(), spacingMode === SpacingMode$Percent_getInstance());
    var positions = this._positions_0;
    var rotateOffset = this.rotateOffset;
    var boneX = positions.get_za3lpa$(0);
    var boneY = positions.get_za3lpa$(1);
    var tip;
    if (rotateOffset === 0.0) {
      tip = rotateMode === RotateMode$Chain_getInstance();
    }
     else {
      tip = false;
      var bone_0 = pathSlot._parent_8be2vx$;
      if (bone_0 != null) {
        var matrix_0 = bone_0.globalTransformMatrix;
        rotateOffset *= matrix_0.a * matrix_0.d - matrix_0.b * matrix_0.c > 0 ? Transform$Companion_getInstance().DEG_RAD : -Transform$Companion_getInstance().DEG_RAD;
      }
    }
    var rotateMix = this.rotateMix;
    var translateMix = this.translateMix;
    for (var i_1 = 0; i_1 < boneCount; i_1++) {
      var p = i_1 * 3 | 0;
      var bone_1 = bones.get_za3lpa$(i_1);
      bone_1.updateByConstraint();
      var matrix_1 = bone_1.globalTransformMatrix;
      matrix_1.tx = matrix_1.tx + (boneX - matrix_1.tx) * translateMix;
      matrix_1.ty = matrix_1.ty + (boneY - matrix_1.ty) * translateMix;
      var x_1 = positions.get_za3lpa$(p);
      var y_0 = positions.get_za3lpa$(p + 1 | 0);
      var dx = x_1 - boneX;
      var dy = y_0 - boneY;
      if (isChainScaleMode) {
        var lenght = this._boneLengths_0.get_za3lpa$(i_1);
        var x_2 = dx * dx + dy * dy;
        var s = (Math_0.sqrt(x_2) / lenght - 1) * rotateMix + 1;
        matrix_1.a = matrix_1.a * s;
        matrix_1.b = matrix_1.b * s;
      }
      boneX = x_1;
      boneY = y_0;
      if (rotateMix > 0) {
        var a = matrix_1.a;
        var b = matrix_1.b;
        var c = matrix_1.c;
        var d = matrix_1.d;
        var r;
        var cos;
        var sin;
        if (isTangentMode) {
          tmp$_4 = positions.get_za3lpa$(p - 1 | 0);
        }
         else {
          tmp$_4 = Math_0.atan2(dy, dx);
        }
        r = tmp$_4;
        r -= Math_0.atan2(b, a);
        if (tip) {
          cos = Math_0.cos(r);
          sin = Math_0.sin(r);
          var length = ensureNotNull(bone_1._boneData).length;
          boneX += (length * (cos * a - sin * b) - dx) * rotateMix;
          boneY += (length * (sin * a + cos * b) - dy) * rotateMix;
        }
         else {
          r += rotateOffset;
        }
        if (r > Transform$Companion_getInstance().PI) {
          r -= Transform$Companion_getInstance().PI_D;
        }
         else if (r < -Transform$Companion_getInstance().PI) {
          r += Transform$Companion_getInstance().PI_D;
        }
        r *= rotateMix;
        cos = Math_0.cos(r);
        sin = Math_0.sin(r);
        matrix_1.a = cos * a - sin * b;
        matrix_1.b = sin * a + cos * b;
        matrix_1.c = cos * c - sin * d;
        matrix_1.d = sin * c + cos * d;
      }
      bone_1.global.fromMatrix_dyon7w$(matrix_1);
    }
    this.dirty = false;
  };
  PathConstraint.prototype.invalidUpdate = function () {
  };
  PathConstraint.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathConstraint',
    interfaces: [Constraint]
  };
  function IArmatureProxy() {
  }
  IArmatureProxy.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IArmatureProxy',
    interfaces: [IEventDispatcher]
  };
  function DisplayFrame() {
    BaseObject.call(this);
    this.rawDisplayData = null;
    this.displayData = null;
    this._textureData = null;
    this.display = null;
    this.deformVertices = new DoubleArrayList();
  }
  DisplayFrame.prototype.toString = function () {
    return '[class dragonBones.DisplayFrame]';
  };
  DisplayFrame.prototype._onClear = function () {
    this.rawDisplayData = null;
    this.displayData = null;
    this._textureData = null;
    this.display = null;
    set_length_0(this.deformVertices, 0);
  };
  DisplayFrame.prototype.updateDeformVertices = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.rawDisplayData == null || get_length_0(this.deformVertices) !== 0) {
      return;
    }
    var rawGeometryData;
    if (equals((tmp$ = this.rawDisplayData) != null ? tmp$.type : null, DisplayType$Mesh_getInstance())) {
      rawGeometryData = (Kotlin.isType(tmp$_0 = this.rawDisplayData, MeshDisplayData) ? tmp$_0 : throwCCE()).geometry;
    }
     else if (equals((tmp$_1 = this.rawDisplayData) != null ? tmp$_1.type : null, DisplayType$Path_getInstance())) {
      rawGeometryData = (Kotlin.isType(tmp$_2 = this.rawDisplayData, PathDisplayData) ? tmp$_2 : throwCCE()).geometry;
    }
     else {
      return;
    }
    var vertexCount = 0;
    if (rawGeometryData.weight != null) {
      vertexCount = ensureNotNull(rawGeometryData.weight).count * 2 | 0;
    }
     else {
      vertexCount = ensureNotNull(ensureNotNull(rawGeometryData.data).intArray)[rawGeometryData.offset + BinaryOffset$GeometryVertexCount_getInstance().index | 0] * 2;
    }
    set_length_0(this.deformVertices, vertexCount);
    tmp$_3 = get_length_0(this.deformVertices);
    for (var i = 0; i < tmp$_3; i++) {
      this.deformVertices.set_5wr77w$(i, 0.0);
    }
  };
  DisplayFrame.prototype.getGeometryData = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if (this.displayData != null) {
      if (equals((tmp$ = this.displayData) != null ? tmp$.type : null, DisplayType$Mesh_getInstance())) {
        return (Kotlin.isType(tmp$_0 = this.displayData, MeshDisplayData) ? tmp$_0 : throwCCE()).geometry;
      }
      if (equals((tmp$_1 = this.displayData) != null ? tmp$_1.type : null, DisplayType$Path_getInstance())) {
        return (Kotlin.isType(tmp$_2 = this.displayData, PathDisplayData) ? tmp$_2 : throwCCE()).geometry;
      }
    }
    if (this.rawDisplayData != null) {
      if (equals((tmp$_3 = this.rawDisplayData) != null ? tmp$_3.type : null, DisplayType$Mesh_getInstance())) {
        return (Kotlin.isType(tmp$_4 = this.rawDisplayData, MeshDisplayData) ? tmp$_4 : throwCCE()).geometry;
      }
      if (equals((tmp$_5 = this.rawDisplayData) != null ? tmp$_5.type : null, DisplayType$Path_getInstance())) {
        return (Kotlin.isType(tmp$_6 = this.rawDisplayData, PathDisplayData) ? tmp$_6 : throwCCE()).geometry;
      }
    }
    return null;
  };
  DisplayFrame.prototype.getBoundingBox = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this.displayData != null && equals((tmp$ = this.displayData) != null ? tmp$.type : null, DisplayType$BoundingBox_getInstance())) {
      return (Kotlin.isType(tmp$_0 = this.displayData, BoundingBoxDisplayData) ? tmp$_0 : throwCCE()).boundingBox;
    }
    if (this.rawDisplayData != null && equals((tmp$_1 = this.rawDisplayData) != null ? tmp$_1.type : null, DisplayType$BoundingBox_getInstance())) {
      return (Kotlin.isType(tmp$_2 = this.rawDisplayData, BoundingBoxDisplayData) ? tmp$_2 : throwCCE()).boundingBox;
    }
    return null;
  };
  DisplayFrame.prototype.getTextureData = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    if (this.displayData != null) {
      if (equals((tmp$ = this.displayData) != null ? tmp$.type : null, DisplayType$Image_getInstance())) {
        return (Kotlin.isType(tmp$_0 = this.displayData, ImageDisplayData) ? tmp$_0 : throwCCE()).texture;
      }
      if (equals((tmp$_1 = this.displayData) != null ? tmp$_1.type : null, DisplayType$Mesh_getInstance())) {
        return (Kotlin.isType(tmp$_2 = this.displayData, MeshDisplayData) ? tmp$_2 : throwCCE()).texture;
      }
    }
    if (this._textureData != null) {
      return this._textureData;
    }
    if (this.rawDisplayData != null) {
      if (equals((tmp$_3 = this.rawDisplayData) != null ? tmp$_3.type : null, DisplayType$Image_getInstance())) {
        return (Kotlin.isType(tmp$_4 = this.rawDisplayData, ImageDisplayData) ? tmp$_4 : throwCCE()).texture;
      }
      if (equals((tmp$_5 = this.rawDisplayData) != null ? tmp$_5.type : null, DisplayType$Mesh_getInstance())) {
        return (Kotlin.isType(tmp$_6 = this.rawDisplayData, MeshDisplayData) ? tmp$_6 : throwCCE()).texture;
      }
    }
    return null;
  };
  DisplayFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisplayFrame',
    interfaces: [BaseObject]
  };
  function Slot() {
    Slot$Companion_getInstance();
    TransformObject.call(this);
    this.displayController = null;
    this._displayDataDirty = false;
    this._displayDirty = false;
    this._geometryDirty = false;
    this._textureDirty = false;
    this._visibleDirty = false;
    this._blendModeDirty = false;
    this._zOrderDirty = false;
    this._colorDirty = false;
    this._verticesDirty = false;
    this._transformDirty = false;
    this._visible = true;
    this._blendMode = BlendMode$Normal_getInstance();
    this._displayIndex = -1;
    this._animationDisplayIndex = -1;
    this._cachedFrameIndex = -1;
    this._zOrder = 0;
    this._zIndex = 0;
    this._pivotX = 0.0;
    this._pivotY = 0.0;
    this._localMatrix = Matrix_init();
    this._colorTransform = new ColorTransform();
    this._displayFrames = ArrayList_init();
    this._geometryBones = ArrayList_init();
    this._slotData = null;
    this._displayFrame = null;
    this._geometryData = null;
    this._boundingBoxData = null;
    this._textureData = null;
    this._rawDisplay = null;
    this._meshDisplay = null;
    this._display = null;
    this._childArmature = null;
    this._parent_8be2vx$ = null;
    this._cachedFrameIndices = null;
  }
  function Slot$Companion() {
    Slot$Companion_instance = this;
    this._helpMatrix_8be2vx$ = TransformObject$Companion_getInstance()._helpMatrix_8be2vx$;
    this._helpTransform_8be2vx$ = TransformObject$Companion_getInstance()._helpTransform_8be2vx$;
    this._helpPoint_8be2vx$ = TransformObject$Companion_getInstance()._helpPoint_8be2vx$;
  }
  Slot$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Slot$Companion_instance = null;
  function Slot$Companion_getInstance() {
    if (Slot$Companion_instance === null) {
      new Slot$Companion();
    }
    return Slot$Companion_instance;
  }
  Slot.prototype._onClear = function () {
    var tmp$, tmp$_0;
    TransformObject.prototype._onClear.call(this);
    var disposeDisplayList = ArrayList_init();
    tmp$ = this._displayFrames.iterator();
    while (tmp$.hasNext()) {
      var dispayFrame = tmp$.next();
      var display = dispayFrame.display;
      if (!equals(display, this._rawDisplay) && !equals(display, this._meshDisplay) && indexOf(disposeDisplayList, display) < 0) {
        push(disposeDisplayList, ensureNotNull(display));
      }
      dispayFrame.returnToPool();
    }
    tmp$_0 = disposeDisplayList.iterator();
    while (tmp$_0.hasNext()) {
      var eachDisplay = tmp$_0.next();
      if (Kotlin.isType(eachDisplay, Armature)) {
        eachDisplay.dispose();
      }
       else {
        this._disposeDisplay_j44yyw$(eachDisplay, true);
      }
    }
    if (this._meshDisplay != null && !equals(this._meshDisplay, this._rawDisplay)) {
      this._disposeDisplay_j44yyw$(ensureNotNull(this._meshDisplay), false);
    }
    if (this._rawDisplay != null) {
      this._disposeDisplay_j44yyw$(ensureNotNull(this._rawDisplay), false);
    }
    this.displayController = null;
    this._displayDataDirty = false;
    this._displayDirty = false;
    this._geometryDirty = false;
    this._textureDirty = false;
    this._visibleDirty = false;
    this._blendModeDirty = false;
    this._zOrderDirty = false;
    this._colorDirty = false;
    this._verticesDirty = false;
    this._transformDirty = false;
    this._visible = true;
    this._blendMode = BlendMode$Normal_getInstance();
    this._displayIndex = -1;
    this._animationDisplayIndex = -1;
    this._zOrder = 0;
    this._zIndex = 0;
    this._cachedFrameIndex = -1;
    this._pivotX = 0.0;
    this._pivotY = 0.0;
    this._localMatrix.identity();
    this._colorTransform.identity();
    this._displayFrames.clear();
    this._geometryBones.clear();
    this._slotData = null;
    this._displayFrame = null;
    this._geometryData = null;
    this._boundingBoxData = null;
    this._textureData = null;
    this._rawDisplay = null;
    this._meshDisplay = null;
    this._display = null;
    this._childArmature = null;
    this._parent_8be2vx$ = null;
    this._cachedFrameIndices = null;
  };
  Slot.prototype._hasDisplay_s8jyv4$ = function (display) {
    var tmp$;
    tmp$ = this._displayFrames.iterator();
    while (tmp$.hasNext()) {
      var displayFrame = tmp$.next();
      if (equals(displayFrame.display, display)) {
        return true;
      }
    }
    return false;
  };
  Slot.prototype._isBonesUpdate = function () {
    var tmp$;
    tmp$ = this._geometryBones.iterator();
    while (tmp$.hasNext()) {
      var bone = tmp$.next();
      if (bone != null && bone._childrenTransformDirty) {
        return true;
      }
    }
    return false;
  };
  Slot.prototype._updateAlpha = function () {
    var globalAlpha = this._alpha * ensureNotNull(this._parent_8be2vx$)._globalAlpha;
    if (this._globalAlpha !== globalAlpha) {
      this._globalAlpha = globalAlpha;
      this._colorDirty = true;
    }
  };
  Slot.prototype._updateDisplayData = function () {
    var tmp$, tmp$_0;
    var prevDisplayFrame = this._displayFrame;
    var prevGeometryData = this._geometryData;
    var prevTextureData = this._textureData;
    var rawDisplayData = null;
    var displayData = null;
    this._displayFrame = null;
    this._geometryData = null;
    this._boundingBoxData = null;
    this._textureData = null;
    if (this._displayIndex >= 0 && this._displayIndex < get_lengthSet_1(this._displayFrames)) {
      this._displayFrame = this._displayFrames.get_za3lpa$(this._displayIndex);
      rawDisplayData = ensureNotNull(this._displayFrame).rawDisplayData;
      displayData = ensureNotNull(this._displayFrame).displayData;
      this._geometryData = ensureNotNull(this._displayFrame).getGeometryData();
      this._boundingBoxData = ensureNotNull(this._displayFrame).getBoundingBox();
      this._textureData = ensureNotNull(this._displayFrame).getTextureData();
    }
    var _textureData = this._textureData;
    if (!equals(this._displayFrame, prevDisplayFrame) || !equals(this._geometryData, prevGeometryData) || !equals(_textureData, prevTextureData)) {
      if (this._geometryData == null && _textureData != null) {
        var imageDisplayData = Kotlin.isType(tmp$ = displayData != null && displayData.type === DisplayType$Image_getInstance() ? displayData : rawDisplayData, ImageDisplayData) ? tmp$ : throwCCE();
        var scale = ensureNotNull(_textureData.parent).scale * ensureNotNull(ensureNotNull(this._armature)._armatureData).scale;
        var frame = _textureData.frame;
        this._pivotX = imageDisplayData.pivot.x;
        this._pivotY = imageDisplayData.pivot.y;
        var rect = frame != null ? frame : _textureData.region;
        var width = rect.width;
        var height = rect.height;
        if (_textureData.rotated && frame == null) {
          width = rect.height;
          height = rect.width;
        }
        this._pivotX = this._pivotX * (width * scale);
        this._pivotY = this._pivotY * (height * scale);
        if (frame != null) {
          this._pivotX = this._pivotX + frame.x * scale;
          this._pivotY = this._pivotY + frame.y * scale;
        }
        if (rawDisplayData != null && !equals(imageDisplayData, rawDisplayData)) {
          rawDisplayData.transform.toMatrix_dyon7w$(Slot$Companion_getInstance()._helpMatrix_8be2vx$);
          Slot$Companion_getInstance()._helpMatrix_8be2vx$.invert();
          Slot$Companion_getInstance()._helpMatrix_8be2vx$.transformPoint_hd5a0h$(0.0, 0.0, Slot$Companion_getInstance()._helpPoint_8be2vx$);
          this._pivotX = this._pivotX - Slot$Companion_getInstance()._helpPoint_8be2vx$.x;
          this._pivotY = this._pivotY - Slot$Companion_getInstance()._helpPoint_8be2vx$.y;
          imageDisplayData.transform.toMatrix_dyon7w$(Slot$Companion_getInstance()._helpMatrix_8be2vx$);
          Slot$Companion_getInstance()._helpMatrix_8be2vx$.invert();
          Slot$Companion_getInstance()._helpMatrix_8be2vx$.transformPoint_hd5a0h$(0.0, 0.0, Slot$Companion_getInstance()._helpPoint_8be2vx$);
          this._pivotX = this._pivotX + Slot$Companion_getInstance()._helpPoint_8be2vx$.x;
          this._pivotY = this._pivotY + Slot$Companion_getInstance()._helpPoint_8be2vx$.y;
        }
        if (!DragonBones$Companion_getInstance().yDown) {
          this._pivotY = (_textureData.rotated ? _textureData.region.width : _textureData.region.height) * scale - this._pivotY;
        }
      }
       else {
        this._pivotX = 0.0;
        this._pivotY = 0.0;
      }
      if (rawDisplayData != null) {
        this.origin = rawDisplayData.transform;
      }
       else if (displayData != null) {
        this.origin = displayData.transform;
      }
       else {
        this.origin = null;
      }
      if (this.origin != null) {
        this.global.copyFrom_scgbvr$(ensureNotNull(this.origin)).add_scgbvr$(this.offset).toMatrix_dyon7w$(this._localMatrix);
      }
       else {
        this.global.copyFrom_scgbvr$(this.offset).toMatrix_dyon7w$(this._localMatrix);
      }
      if (!equals(this._geometryData, prevGeometryData)) {
        this._geometryDirty = true;
        this._verticesDirty = true;
        if (this._geometryData != null) {
          this._geometryBones.clear();
          var gd = ensureNotNull(this._geometryData).weight;
          if (gd != null) {
            tmp$_0 = get_lengthSet_1(gd.bones);
            for (var i = 0; i < tmp$_0; i++) {
              var bone = ensureNotNull(this._armature).getBone_pdl1vj$(gd.bones.get_za3lpa$(i).name);
              push(this._geometryBones, bone);
            }
          }
        }
         else {
          set_lengthSet_1(this._geometryBones, 0);
          this._geometryData = null;
        }
      }
      this._textureDirty = !equals(_textureData, prevTextureData);
      this._transformDirty = true;
    }
  };
  Slot.prototype._updateDisplay = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var prevDisplay = (tmp$ = this._display) != null ? tmp$ : this._rawDisplay;
    var prevChildArmature = this._childArmature;
    var _displayFrame1 = this._displayFrame;
    if (_displayFrame1 != null) {
      this._display = _displayFrame1.display;
      if (this._display != null && Kotlin.isType(this._display, Armature)) {
        this._childArmature = Kotlin.isType(tmp$_0 = this._display, Armature) ? tmp$_0 : throwCCE();
        this._display = (tmp$_1 = this._childArmature) != null ? tmp$_1.display : null;
      }
       else {
        this._childArmature = null;
      }
    }
     else {
      this._display = null;
      this._childArmature = null;
    }
    var currentDisplay = (tmp$_2 = this._display) != null ? tmp$_2 : this._rawDisplay;
    if (!equals(currentDisplay, prevDisplay)) {
      this._textureDirty = true;
      this._visibleDirty = true;
      this._blendModeDirty = true;
      this._colorDirty = true;
      this._transformDirty = true;
      this._onUpdateDisplay();
      this._replaceDisplay_za3rmp$(ensureNotNull(prevDisplay));
    }
    var _childArmature = this._childArmature;
    if (!equals(_childArmature, prevChildArmature)) {
      if (prevChildArmature != null) {
        prevChildArmature._parent = null;
        prevChildArmature.clock = null;
        if (prevChildArmature.inheritAnimation) {
          prevChildArmature.animation.reset();
        }
      }
      if (_childArmature != null) {
        _childArmature._parent = this;
        _childArmature.clock = ensureNotNull(this._armature).clock;
        if (_childArmature.inheritAnimation) {
          if (_childArmature.cacheFrameRate === 0) {
            var cacheFrameRate = ensureNotNull(this._armature).cacheFrameRate;
            if (cacheFrameRate !== 0) {
              _childArmature.cacheFrameRate = cacheFrameRate;
            }
          }
          if (_displayFrame1 != null) {
            var actions = null;
            var displayData = (tmp$_3 = ensureNotNull(this._displayFrame).displayData) != null ? tmp$_3 : ensureNotNull(this._displayFrame).rawDisplayData;
            if (displayData != null && displayData.type === DisplayType$Armature_getInstance()) {
              actions = (Kotlin.isType(tmp$_4 = displayData, ArmatureDisplayData) ? tmp$_4 : throwCCE()).actions;
            }
            if (actions != null && get_lengthSet_1(actions) > 0) {
              tmp$_5 = actions.iterator();
              while (tmp$_5.hasNext()) {
                var action = tmp$_5.next();
                var eventObject = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(EventObject));
                EventObject$Companion_getInstance().actionDataToInstance_knn78h$(action, eventObject, ensureNotNull(this._armature));
                eventObject.slot = this;
                ensureNotNull(this._armature)._bufferAction_8f84tb$(eventObject, false);
              }
            }
             else {
              _childArmature.animation.play_9d67ql$();
            }
          }
        }
      }
    }
  };
  Slot.prototype._updateGlobalTransformMatrix_6taknv$ = function (isCache) {
    var tmp$;
    var parentMatrix = ensureNotNull(ensureNotNull(this._parent_8be2vx$)._boneData).type === BoneType$Bone_getInstance() ? ensureNotNull(this._parent_8be2vx$).globalTransformMatrix : (Kotlin.isType(tmp$ = this._parent_8be2vx$, Surface) ? tmp$ : throwCCE())._getGlobalTransformMatrix_lu1900$(this.global.x, this.global.y);
    this.globalTransformMatrix.copyFrom_dyon7w$(this._localMatrix);
    this.globalTransformMatrix.concat_dyon7w$(parentMatrix);
    if (isCache) {
      this.global.fromMatrix_dyon7w$(this.globalTransformMatrix);
    }
     else {
      this._globalDirty = true;
    }
  };
  Slot.prototype._setDisplayIndex_fzusl$ = function (value, isAnimation) {
    if (isAnimation === void 0)
      isAnimation = false;
    if (isAnimation) {
      if (this._animationDisplayIndex === value) {
        return;
      }
      this._animationDisplayIndex = value;
    }
    if (this._displayIndex === value) {
      return;
    }
    this._displayIndex = value < get_lengthSet_1(this._displayFrames) ? value : get_lengthSet_1(this._displayFrames) - 1 | 0;
    this._displayDataDirty = true;
    this._displayDirty = this._displayIndex < 0 || !equals(this._display, this._displayFrames.get_za3lpa$(this._displayIndex).display);
  };
  Slot.prototype._setZOrder_za3lpa$ = function (value) {
    this._zOrder = value;
    this._zOrderDirty = true;
    return this._zOrderDirty;
  };
  Slot.prototype._setColor_rr69z0$ = function (value) {
    this._colorTransform.copyFrom_rr69z0$(value);
    this._colorDirty = true;
    return true;
  };
  Slot.prototype.init_vpgcwf$ = function (slotData, armatureValue, rawDisplay, meshDisplay) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this._slotData != null) {
      return;
    }
    this._slotData = slotData;
    this._colorDirty = true;
    this._blendModeDirty = true;
    this._blendMode = slotData.blendMode;
    this._zOrder = slotData.zOrder;
    this._zIndex = slotData.zIndex;
    this._alpha = slotData.alpha;
    this._colorTransform.copyFrom_rr69z0$(ensureNotNull(slotData.color));
    this._rawDisplay = rawDisplay;
    this._meshDisplay = meshDisplay;
    this._armature = armatureValue;
    tmp$_1 = this._armature;
    tmp$_0 = (tmp$ = slotData.parent) != null ? tmp$.name : null;
    var slotParent = tmp$_1 != null ? tmp$_1.getBone_pdl1vj$(tmp$_0) : null;
    if (slotParent != null) {
      this._parent_8be2vx$ = slotParent;
    }
    (tmp$_2 = this._armature) != null ? (tmp$_2._addSlot_vcmxg4$(this), Unit) : null;
    this._initDisplay_j44yyw$(ensureNotNull(this._rawDisplay), false);
    if (!equals(this._rawDisplay, this._meshDisplay)) {
      this._initDisplay_j44yyw$(ensureNotNull(this._meshDisplay), false);
    }
    this._onUpdateDisplay();
    this._addDisplay();
  };
  Slot.prototype.update_za3lpa$ = function (cacheFrameIndex) {
    var tmp$, tmp$_0, tmp$_1;
    var cacheFrameIndex_0 = cacheFrameIndex;
    if (this._displayDataDirty) {
      this._updateDisplayData();
      this._displayDataDirty = false;
    }
    if (this._displayDirty) {
      this._updateDisplay();
      this._displayDirty = false;
    }
    if (this._geometryDirty || this._textureDirty) {
      if (this._display == null || equals(this._display, this._rawDisplay) || equals(this._display, this._meshDisplay)) {
        this._updateFrame();
      }
      this._geometryDirty = false;
      this._textureDirty = false;
    }
    if (this._display == null) {
      return;
    }
    if (this._visibleDirty) {
      this._updateVisible();
      this._visibleDirty = false;
    }
    if (this._blendModeDirty) {
      this._updateBlendMode();
      this._blendModeDirty = false;
    }
    if (this._colorDirty) {
      this._updateColor();
      this._colorDirty = false;
    }
    if (this._zOrderDirty) {
      this._updateZOrder();
      this._zOrderDirty = false;
    }
    if (this._geometryData != null && equals(this._display, this._meshDisplay)) {
      var isSkinned = ensureNotNull(this._geometryData).weight != null;
      var isSurface = !equals((tmp$ = ensureNotNull(this._parent_8be2vx$)._boneData) != null ? tmp$.type : null, BoneType$Bone_getInstance());
      if (this._verticesDirty || (isSkinned && this._isBonesUpdate()) || (isSurface && ensureNotNull(this._parent_8be2vx$)._childrenTransformDirty)) {
        this._verticesDirty = false;
        this._updateMesh();
      }
      if (isSkinned || isSurface) {
        return;
      }
    }
    if (cacheFrameIndex_0 >= 0 && this._cachedFrameIndices != null) {
      var cachedFrameIndex = ensureNotNull(this._cachedFrameIndices).get_za3lpa$(cacheFrameIndex_0);
      if (cachedFrameIndex >= 0 && this._cachedFrameIndex === cachedFrameIndex) {
        this._transformDirty = false;
      }
       else if (cachedFrameIndex >= 0) {
        this._transformDirty = true;
        this._cachedFrameIndex = cachedFrameIndex;
      }
       else if (this._transformDirty || ensureNotNull(this._parent_8be2vx$)._childrenTransformDirty) {
        this._transformDirty = true;
        this._cachedFrameIndex = -1;
      }
       else if (this._cachedFrameIndex >= 0) {
        this._transformDirty = false;
        ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, this._cachedFrameIndex);
      }
       else {
        this._transformDirty = true;
        this._cachedFrameIndex = -1;
      }
    }
     else if (this._transformDirty || ensureNotNull(this._parent_8be2vx$)._childrenTransformDirty) {
      cacheFrameIndex_0 = -1;
      this._transformDirty = true;
      this._cachedFrameIndex = -1;
    }
    if (this._transformDirty) {
      if (this._cachedFrameIndex < 0) {
        var isCache = cacheFrameIndex_0 >= 0;
        this._updateGlobalTransformMatrix_6taknv$(isCache);
        if (isCache && this._cachedFrameIndices != null) {
          var res = ensureNotNull(ensureNotNull(this._armature)._armatureData).setCacheFrame_eeuvpt$(this.globalTransformMatrix, this.global);
          this._cachedFrameIndex = res;
          ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, res);
        }
      }
       else {
        (tmp$_1 = (tmp$_0 = this._armature) != null ? tmp$_0._armatureData : null) != null ? (tmp$_1.getCacheFrame_bqh3xf$(this.globalTransformMatrix, this.global, this._cachedFrameIndex), Unit) : null;
      }
      this._updateTransform();
      this._transformDirty = false;
    }
  };
  Slot.prototype.invalidUpdate = function () {
    this._displayDataDirty = true;
    this._displayDirty = true;
    this._transformDirty = true;
  };
  Slot.prototype.updateTransformAndMatrix = function () {
    if (this._transformDirty) {
      this._updateGlobalTransformMatrix_6taknv$(false);
      this._transformDirty = false;
    }
  };
  Slot.prototype.replaceRawDisplayData_4o5vqv$ = function (displayData, index) {
    if (index === void 0)
      index = -1;
    var tmp$, tmp$_0, tmp$_1;
    var index_0 = index;
    if (index_0 < 0) {
      index_0 = this._displayIndex < 0 ? 0 : this._displayIndex;
    }
     else if (index_0 >= get_lengthSet_1(this._displayFrames)) {
      return;
    }
    var displayFrame = this._displayFrames.get_za3lpa$(index_0);
    if (!equals(displayFrame.rawDisplayData, displayData)) {
      set_length_0(displayFrame.deformVertices, 0);
      displayFrame.rawDisplayData = displayData;
      if (displayFrame.rawDisplayData == null) {
        var defaultSkin = (tmp$_0 = (tmp$ = this._armature) != null ? tmp$._armatureData : null) != null ? tmp$_0.defaultSkin : null;
        if (defaultSkin != null) {
          var defaultRawDisplayDatas = defaultSkin.getDisplays_pdl1vj$((tmp$_1 = this._slotData) != null ? tmp$_1.name : null);
          if (defaultRawDisplayDatas != null && index_0 < get_lengthSet_1(defaultRawDisplayDatas)) {
            displayFrame.rawDisplayData = defaultRawDisplayDatas.get_za3lpa$(index_0);
          }
        }
      }
      if (index_0 === this._displayIndex) {
        this._displayDataDirty = true;
      }
    }
  };
  Slot.prototype.replaceDisplayData_4o5vqv$ = function (displayData, index) {
    if (index === void 0)
      index = -1;
    var index_0 = index;
    if (index_0 < 0) {
      index_0 = this._displayIndex < 0 ? 0 : this._displayIndex;
    }
     else if (index_0 >= get_lengthSet_1(this._displayFrames)) {
      return;
    }
    var displayFrame = this._displayFrames.get_za3lpa$(index_0);
    if (!equals(displayFrame.displayData, displayData) && !equals(displayFrame.rawDisplayData, displayData)) {
      displayFrame.displayData = displayData;
      if (index_0 === this._displayIndex) {
        this._displayDataDirty = true;
      }
    }
  };
  Slot.prototype.replaceTextureData_vue3bk$ = function (textureData, index) {
    if (index === void 0)
      index = -1;
    var index_0 = index;
    if (index_0 < 0) {
      index_0 = this._displayIndex < 0 ? 0 : this._displayIndex;
    }
     else if (index_0 >= get_lengthSet_1(this._displayFrames)) {
      return;
    }
    var displayFrame = this._displayFrames.get_za3lpa$(index_0);
    if (!equals(displayFrame._textureData, textureData)) {
      displayFrame._textureData = textureData;
      if (index_0 === this._displayIndex) {
        this._displayDataDirty = true;
      }
    }
  };
  Slot.prototype.replaceDisplay_cypnoy$ = function (value, index) {
    if (index === void 0)
      index = -1;
    var index_0 = index;
    if (index_0 < 0) {
      index_0 = this._displayIndex < 0 ? 0 : this._displayIndex;
    }
     else if (index_0 >= get_lengthSet_1(this._displayFrames)) {
      return;
    }
    var displayFrame = this._displayFrames.get_za3lpa$(index_0);
    if (!equals(displayFrame.display, value)) {
      var prevDisplay = displayFrame.display;
      displayFrame.display = value;
      if (prevDisplay != null && !equals(prevDisplay, this._rawDisplay) && !equals(prevDisplay, this._meshDisplay) && !this._hasDisplay_s8jyv4$(prevDisplay)) {
        if (!Kotlin.isType(prevDisplay, Armature)) {
          this._disposeDisplay_j44yyw$(prevDisplay, true);
        }
      }
      if (value != null && !equals(value, this._rawDisplay) && !equals(value, this._meshDisplay) && !this._hasDisplay_s8jyv4$(prevDisplay) && !Kotlin.isType(value, Armature)) {
        this._initDisplay_j44yyw$(value, true);
      }
      if (index_0 === this._displayIndex) {
        this._displayDirty = true;
      }
    }
  };
  Slot.prototype.containsPoint_lu1900$ = function (x, y) {
    if (this._boundingBoxData == null) {
      return false;
    }
    this.updateTransformAndMatrix();
    Slot$Companion_getInstance()._helpMatrix_8be2vx$.copyFrom_dyon7w$(this.globalTransformMatrix);
    Slot$Companion_getInstance()._helpMatrix_8be2vx$.invert();
    Slot$Companion_getInstance()._helpMatrix_8be2vx$.transformPoint_hd5a0h$(x, y, Slot$Companion_getInstance()._helpPoint_8be2vx$);
    return ensureNotNull(this._boundingBoxData).containsPoint_lu1900$(Slot$Companion_getInstance()._helpPoint_8be2vx$.x, Slot$Companion_getInstance()._helpPoint_8be2vx$.y);
  };
  Slot.prototype.intersectsSegment_e4ky6u$ = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    if (this._boundingBoxData == null) {
      return 0;
    }
    this.updateTransformAndMatrix();
    Slot$Companion_getInstance()._helpMatrix_8be2vx$.copyFrom_dyon7w$(this.globalTransformMatrix);
    Slot$Companion_getInstance()._helpMatrix_8be2vx$.invert();
    Slot$Companion_getInstance()._helpMatrix_8be2vx$.transformPoint_hd5a0h$(xA, yA, Slot$Companion_getInstance()._helpPoint_8be2vx$);
    var xA_0 = Slot$Companion_getInstance()._helpPoint_8be2vx$.x;
    var yA_0 = Slot$Companion_getInstance()._helpPoint_8be2vx$.y;
    Slot$Companion_getInstance()._helpMatrix_8be2vx$.transformPoint_hd5a0h$(xB, yB, Slot$Companion_getInstance()._helpPoint_8be2vx$);
    var xB_0 = Slot$Companion_getInstance()._helpPoint_8be2vx$.x;
    var yB_0 = Slot$Companion_getInstance()._helpPoint_8be2vx$.y;
    var intersectionCount = ensureNotNull(this._boundingBoxData).intersectsSegment_e4ky6u$(xA_0, yA_0, xB_0, yB_0, intersectionPointA, intersectionPointB, normalRadians);
    if (intersectionCount > 0) {
      if (intersectionCount === 1 || intersectionCount === 2) {
        if (intersectionPointA != null) {
          this.globalTransformMatrix.transformPoint_hd5a0h$(intersectionPointA.x, intersectionPointA.y, intersectionPointA);
          if (intersectionPointB != null) {
            intersectionPointB.x = intersectionPointA.x;
            intersectionPointB.y = intersectionPointA.y;
          }
        }
         else if (intersectionPointB != null) {
          this.globalTransformMatrix.transformPoint_hd5a0h$(intersectionPointB.x, intersectionPointB.y, intersectionPointB);
        }
      }
       else {
        if (intersectionPointA != null) {
          this.globalTransformMatrix.transformPoint_hd5a0h$(intersectionPointA.x, intersectionPointA.y, intersectionPointA);
        }
        if (intersectionPointB != null) {
          this.globalTransformMatrix.transformPoint_hd5a0h$(intersectionPointB.x, intersectionPointB.y, intersectionPointB);
        }
      }
      if (normalRadians != null) {
        var tmp$ = this.globalTransformMatrix;
        var x = normalRadians.x;
        var tmp$_0 = Math_0.cos(x);
        var x_0 = normalRadians.x;
        tmp$.transformPoint_hd5a0h$(tmp$_0, Math_0.sin(x_0), Slot$Companion_getInstance()._helpPoint_8be2vx$, true);
        var y = Slot$Companion_getInstance()._helpPoint_8be2vx$.y;
        var x_1 = Slot$Companion_getInstance()._helpPoint_8be2vx$.x;
        normalRadians.x = Math_0.atan2(y, x_1);
        var tmp$_1 = this.globalTransformMatrix;
        var x_2 = normalRadians.y;
        var tmp$_2 = Math_0.cos(x_2);
        var x_3 = normalRadians.y;
        tmp$_1.transformPoint_hd5a0h$(tmp$_2, Math_0.sin(x_3), Slot$Companion_getInstance()._helpPoint_8be2vx$, true);
        var y_0 = Slot$Companion_getInstance()._helpPoint_8be2vx$.y;
        var x_4 = Slot$Companion_getInstance()._helpPoint_8be2vx$.x;
        normalRadians.y = Math_0.atan2(y_0, x_4);
      }
    }
    return intersectionCount;
  };
  Slot.prototype.getDisplayFrameAt_za3lpa$ = function (index) {
    return this._displayFrames.get_za3lpa$(index);
  };
  Object.defineProperty(Slot.prototype, 'visible', {
    get: function () {
      return this._visible;
    },
    set: function (value) {
      if (this._visible === value) {
        return;
      }
      this._visible = value;
      this._updateVisible();
    }
  });
  Object.defineProperty(Slot.prototype, 'displayFrameCount', {
    get: function () {
      return get_lengthSet_1(this._displayFrames);
    },
    set: function (value) {
      var prevCount = get_lengthSet_1(this._displayFrames);
      if (prevCount < value) {
        set_lengthSet_1(this._displayFrames, value);
        for (var i = prevCount; i < value; i++) {
          this._displayFrames.set_wxm5ur$(i, BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(DisplayFrame)));
        }
      }
       else if (prevCount > value) {
        var i_0 = prevCount - 1 | 0;
        while (i_0 < value) {
          this.replaceDisplay_cypnoy$(null, i_0);
          this._displayFrames.get_za3lpa$(i_0).returnToPool();
          i_0 = i_0 - 1 | 0;
        }
        set_lengthSet_1(this._displayFrames, value);
      }
    }
  });
  Object.defineProperty(Slot.prototype, 'displayIndex', {
    get: function () {
      return this._displayIndex;
    },
    set: function (value) {
      this._setDisplayIndex_fzusl$(value);
      this.update_za3lpa$(-1);
    }
  });
  Object.defineProperty(Slot.prototype, 'name', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this._slotData) != null ? tmp$.name : null) != null ? tmp$_0 : '';
    }
  });
  Object.defineProperty(Slot.prototype, 'displayList', {
    get: function () {
      var tmp$;
      var displays = ArrayList_init();
      tmp$ = this._displayFrames.iterator();
      while (tmp$.hasNext()) {
        var displayFrame = tmp$.next();
        push(displays, displayFrame.display);
      }
      return displays;
    },
    set: function (value) {
      var tmp$, tmp$_0;
      this.displayFrameCount = get_length_1(value);
      var index = 0;
      tmp$ = value.iterator();
      while (tmp$.hasNext()) {
        var eachDisplay = tmp$.next();
        this.replaceDisplay_cypnoy$(eachDisplay, (tmp$_0 = index, index = tmp$_0 + 1 | 0, tmp$_0));
      }
    }
  });
  Object.defineProperty(Slot.prototype, 'slotData', {
    get: function () {
      return ensureNotNull(this._slotData);
    }
  });
  Object.defineProperty(Slot.prototype, 'boundingBoxData', {
    get: function () {
      return this._boundingBoxData;
    }
  });
  Object.defineProperty(Slot.prototype, 'rawDisplay', {
    get: function () {
      return ensureNotNull(this._rawDisplay);
    }
  });
  Object.defineProperty(Slot.prototype, 'meshDisplay', {
    get: function () {
      return ensureNotNull(this._meshDisplay);
    }
  });
  Object.defineProperty(Slot.prototype, 'display', {
    get: function () {
      return ensureNotNull(this._display);
    },
    set: function (value) {
      if (equals(this._display, value)) {
        return;
      }
      if (get_lengthSet_1(this._displayFrames) === 0) {
        this.displayFrameCount = 1;
        this._displayIndex = 0;
      }
      this.replaceDisplay_cypnoy$(value, this._displayIndex);
    }
  });
  Object.defineProperty(Slot.prototype, 'childArmature', {
    get: function () {
      return this._childArmature;
    },
    set: function (value) {
      if (equals(this._childArmature, value)) {
        return;
      }
      this.display = ensureNotNull(value);
    }
  });
  Object.defineProperty(Slot.prototype, 'parent', {
    get: function () {
      return ensureNotNull(this._parent_8be2vx$);
    }
  });
  Slot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Slot',
    interfaces: [TransformObject]
  };
  function Surface() {
    Surface$Companion_getInstance();
    Bone.call(this);
    this._dX_0 = 0.0;
    this._dY_0 = 0.0;
    this._k_0 = 0.0;
    this._kX_0 = 0.0;
    this._kY_0 = 0.0;
    this._vertices = new DoubleArrayList();
    this._deformVertices = new DoubleArrayList();
    this._hullCache_0 = new DoubleArrayList();
    this._matrixCahce_0 = new DoubleArrayList();
    this._bone = null;
  }
  function Surface$Companion() {
    Surface$Companion_instance = this;
    this._helpMatrix_8be2vx$ = TransformObject$Companion_getInstance()._helpMatrix_8be2vx$;
    this._helpTransform_8be2vx$ = TransformObject$Companion_getInstance()._helpTransform_8be2vx$;
    this._helpPoint_8be2vx$ = TransformObject$Companion_getInstance()._helpPoint_8be2vx$;
  }
  Surface$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Surface$Companion_instance = null;
  function Surface$Companion_getInstance() {
    if (Surface$Companion_instance === null) {
      new Surface$Companion();
    }
    return Surface$Companion_instance;
  }
  Surface.prototype.toString = function () {
    return '[class dragonBones.Surface]';
  };
  Surface.prototype._onClear = function () {
    Bone.prototype._onClear.call(this);
    this._dX_0 = 0.0;
    this._dY_0 = 0.0;
    this._k_0 = 0.0;
    this._kX_0 = 0.0;
    this._kY_0 = 0.0;
    set_length_0(this._vertices, 0);
    set_length_0(this._deformVertices, 0);
    set_length_0(this._matrixCahce_0, 0);
    set_length_0(this._hullCache_0, 0);
    this._bone = null;
  };
  Surface.prototype._getAffineTransform_0 = function (x, y, lX, lY, aX, aY, bX, bY, cX, cY, transform, matrix, isDown) {
    var dabX = bX - aX;
    var dabY = bY - aY;
    var dacX = cX - aX;
    var dacY = cY - aY;
    transform.rotation = Math_0.atan2(dabY, dabX);
    transform.skew = Math_0.atan2(dacY, dacX) - math.PI * 0.5 - transform.rotation;
    if (isDown) {
      transform.rotation = transform.rotation + math.PI;
    }
    var x_0 = dabX * dabX + dabY * dabY;
    transform.scaleX = Math_0.sqrt(x_0) / lX;
    var x_1 = dacX * dacX + dacY * dacY;
    transform.scaleY = Math_0.sqrt(x_1) / lY;
    transform.toMatrix_dyon7w$(matrix);
    var rx = aX - (matrix.a * x + matrix.c * y);
    transform.x = rx;
    matrix.tx = rx;
    var ry = aY - (matrix.b * x + matrix.d * y);
    transform.y = ry;
    matrix.ty = ry;
  };
  Surface.prototype._updateVertices_0 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var data = ensureNotNull(ensureNotNull(this._armature).armatureData.parent);
    var geometry = (Kotlin.isType(tmp$ = this._boneData, SurfaceData) ? tmp$ : throwCCE()).geometry;
    var intArray = ensureNotNull(data.intArray);
    var floatArray = ensureNotNull(data.floatArray);
    var vertexCount = intArray[geometry.offset + BinaryOffset$GeometryVertexCount_getInstance().index | 0];
    var verticesOffset = intArray[geometry.offset + BinaryOffset$GeometryFloatOffset_getInstance().index | 0];
    var vertices = this._vertices;
    var animationVertices = this._deformVertices;
    if (this._parent != null) {
      if (equals((tmp$_1 = (tmp$_0 = this._parent) != null ? tmp$_0._boneData : null) != null ? tmp$_1.type : null, BoneType$Surface_getInstance())) {
        for (var i = 0; i < vertexCount; i++) {
          var iD = i * 2 | 0;
          var x = floatArray[verticesOffset + iD] + animationVertices.get_za3lpa$(iD);
          var y = floatArray[verticesOffset + iD + 1 | 0] + animationVertices.get_za3lpa$(iD + 1 | 0);
          var matrix = (Kotlin.isType(tmp$_2 = this._parent, Surface) ? tmp$_2 : throwCCE())._getGlobalTransformMatrix_lu1900$(x, y);
          vertices.set_5wr77w$(iD, matrix.a * x + matrix.c * y + matrix.tx);
          vertices.set_5wr77w$(iD + 1 | 0, matrix.b * x + matrix.d * y + matrix.ty);
        }
      }
       else {
        var parentMatrix = ensureNotNull(this._parent).globalTransformMatrix;
        for (var i_0 = 0; i_0 < vertexCount; i_0++) {
          var iD_0 = i_0 * 2 | 0;
          var x_0 = floatArray[verticesOffset + iD_0] + animationVertices.get_za3lpa$(iD_0);
          var y_0 = floatArray[verticesOffset + iD_0 + 1 | 0] + animationVertices.get_za3lpa$(iD_0 + 1 | 0);
          vertices.set_5wr77w$(iD_0, parentMatrix.a * x_0 + parentMatrix.c * y_0 + parentMatrix.tx);
          vertices.set_5wr77w$(iD_0 + 1 | 0, parentMatrix.b * x_0 + parentMatrix.d * y_0 + parentMatrix.ty);
        }
      }
    }
     else {
      for (var i_1 = 0; i_1 < vertexCount; i_1++) {
        var iD_1 = i_1 * 2 | 0;
        vertices.set_5wr77w$(iD_1, floatArray[verticesOffset + iD_1] + animationVertices.get_za3lpa$(iD_1));
        vertices.set_5wr77w$(iD_1 + 1 | 0, floatArray[verticesOffset + iD_1 + 1 | 0] + animationVertices.get_za3lpa$(iD_1 + 1 | 0));
      }
    }
  };
  Surface.prototype._updateGlobalTransformMatrix_6taknv$ = function (isCache) {
    var tmp$;
    var segmentXD = (Kotlin.isType(tmp$ = this._boneData, SurfaceData) ? tmp$ : throwCCE()).segmentX * 2 | 0;
    var lastIndex = get_length_0(this._vertices) - 2 | 0;
    var lA = 200.0;
    var raX = this._vertices.get_za3lpa$(0);
    var raY = this._vertices.get_za3lpa$(1);
    var rbX = this._vertices.get_za3lpa$(segmentXD);
    var rbY = this._vertices.get_za3lpa$(segmentXD + 1 | 0);
    var rcX = this._vertices.get_za3lpa$(lastIndex);
    var rcY = this._vertices.get_za3lpa$(lastIndex + 1 | 0);
    var rdX = this._vertices.get_za3lpa$(lastIndex - segmentXD | 0);
    var rdY = this._vertices.get_za3lpa$(lastIndex - segmentXD + 1 | 0);
    var dacX = raX + (rcX - raX) * 0.5;
    var dacY = raY + (rcY - raY) * 0.5;
    var dbdX = rbX + (rdX - rbX) * 0.5;
    var dbdY = rbY + (rdY - rbY) * 0.5;
    var aX = dacX + (dbdX - dacX) * 0.5;
    var aY = dacY + (dbdY - dacY) * 0.5;
    var bX = rbX + (rcX - rbX) * 0.5;
    var bY = rbY + (rcY - rbY) * 0.5;
    var cX = rdX + (rcX - rdX) * 0.5;
    var cY = rdY + (rcY - rdY) * 0.5;
    this._getAffineTransform_0(0.0, 0.0, lA, lA, aX, aY, bX, bY, cX, cY, this.global, this.globalTransformMatrix, false);
    this._globalDirty = false;
  };
  Surface.prototype._getGlobalTransformMatrix_lu1900$ = function (x, y) {
    var tmp$;
    var lA = 200.0;
    var lB = 1000.0;
    if (x < -lB || lB < x || y < -lB || lB < y) {
      return this.globalTransformMatrix;
    }
    var isDown;
    var surfaceData = Kotlin.isType(tmp$ = this._boneData, SurfaceData) ? tmp$ : throwCCE();
    var segmentX = surfaceData.segmentX;
    var segmentY = surfaceData.segmentY;
    var segmentXD = surfaceData.segmentX * 2 | 0;
    var dX = this._dX_0;
    var dY = this._dY_0;
    var x_0 = (x + lA) / dX;
    var indexX = numberToInt(Math_0.floor(x_0));
    var x_1 = (y + lA) / dY;
    var indexY = numberToInt(Math_0.floor(x_1));
    var matrixIndex;
    var pX = indexX * dX - lA;
    var pY = indexY * dY - lA;
    var matrices = this._matrixCahce_0;
    var helpMatrix = Surface$Companion_getInstance()._helpMatrix_8be2vx$;
    if (x < -lA) {
      if (y < -lA || y >= lA) {
        return this.globalTransformMatrix;
      }
      isDown = y > this._kX_0 * (x + lA) + pY;
      matrixIndex = (((Kotlin.imul(segmentX, segmentY) + segmentX + segmentY + segmentY + indexY | 0) * 2 | 0) + (isDown ? 1 : 0) | 0) * 7 | 0;
      if (matrices.get_za3lpa$(matrixIndex) > 0.0) {
        helpMatrix.copyFromArray_fcbbnx$(matrices.data, matrixIndex + 1 | 0);
      }
       else {
        var vertexIndex = Kotlin.imul(indexY, segmentXD + 2 | 0);
        var ddX = this._hullCache_0.get_za3lpa$(4);
        var ddY = this._hullCache_0.get_za3lpa$(5);
        var sX = this._hullCache_0.get_za3lpa$(2) - (segmentY - indexY | 0) * ddX;
        var sY = this._hullCache_0.get_za3lpa$(3) - (segmentY - indexY | 0) * ddY;
        var vertices = this._vertices;
        if (isDown) {
          this._getAffineTransform_0(-lA, pY + dY, lB - lA, dY, vertices.get_za3lpa$(vertexIndex + segmentXD + 2 | 0), vertices.get_za3lpa$(vertexIndex + segmentXD + 3 | 0), sX + ddX, sY + ddY, vertices.get_za3lpa$(vertexIndex), vertices.get_za3lpa$(vertexIndex + 1 | 0), Surface$Companion_getInstance()._helpTransform_8be2vx$, helpMatrix, true);
        }
         else {
          this._getAffineTransform_0(-lB, pY, lB - lA, dY, sX, sY, vertices.get_za3lpa$(vertexIndex), vertices.get_za3lpa$(vertexIndex + 1 | 0), sX + ddX, sY + ddY, Surface$Companion_getInstance()._helpTransform_8be2vx$, helpMatrix, false);
        }
        matrices.set_5wr77w$(matrixIndex, 1.0);
        matrices.set_5wr77w$(matrixIndex + 1 | 0, helpMatrix.a);
        matrices.set_5wr77w$(matrixIndex + 2 | 0, helpMatrix.b);
        matrices.set_5wr77w$(matrixIndex + 3 | 0, helpMatrix.c);
        matrices.set_5wr77w$(matrixIndex + 4 | 0, helpMatrix.d);
        matrices.set_5wr77w$(matrixIndex + 5 | 0, helpMatrix.tx);
        matrices.set_5wr77w$(matrixIndex + 6 | 0, helpMatrix.ty);
      }
    }
     else if (x >= lA) {
      if (y < -lA || y >= lA) {
        return this.globalTransformMatrix;
      }
      isDown = y > this._kX_0 * (x - lB) + pY;
      matrixIndex = (((Kotlin.imul(segmentX, segmentY) + segmentX + indexY | 0) * 2 | 0) + (isDown ? 1 : 0) | 0) * 7 | 0;
      if (matrices.get_za3lpa$(matrixIndex) > 0.0) {
        helpMatrix.copyFromArray_fcbbnx$(matrices.data, matrixIndex + 1 | 0);
      }
       else {
        var vertexIndex_0 = Kotlin.imul(indexY + 1 | 0, segmentXD + 2 | 0) - 2 | 0;
        var ddX_0 = this._hullCache_0.get_za3lpa$(4);
        var ddY_0 = this._hullCache_0.get_za3lpa$(5);
        var sX_0 = this._hullCache_0.get_za3lpa$(0) + indexY * ddX_0;
        var sY_0 = this._hullCache_0.get_za3lpa$(1) + indexY * ddY_0;
        var vertices_0 = this._vertices;
        if (isDown) {
          this._getAffineTransform_0(lB, pY + dY, lB - lA, dY, sX_0 + ddX_0, sY_0 + ddY_0, vertices_0.get_za3lpa$(vertexIndex_0 + segmentXD + 2 | 0), vertices_0.get_za3lpa$(vertexIndex_0 + segmentXD + 3 | 0), sX_0, sY_0, Surface$Companion_getInstance()._helpTransform_8be2vx$, helpMatrix, true);
        }
         else {
          this._getAffineTransform_0(lA, pY, lB - lA, dY, vertices_0.get_za3lpa$(vertexIndex_0), vertices_0.get_za3lpa$(vertexIndex_0 + 1 | 0), sX_0, sY_0, vertices_0.get_za3lpa$(vertexIndex_0 + segmentXD + 2 | 0), vertices_0.get_za3lpa$(vertexIndex_0 + segmentXD + 3 | 0), Surface$Companion_getInstance()._helpTransform_8be2vx$, helpMatrix, false);
        }
        matrices.set_5wr77w$(matrixIndex, 1.0);
        matrices.set_5wr77w$(matrixIndex + 1 | 0, helpMatrix.a);
        matrices.set_5wr77w$(matrixIndex + 2 | 0, helpMatrix.b);
        matrices.set_5wr77w$(matrixIndex + 3 | 0, helpMatrix.c);
        matrices.set_5wr77w$(matrixIndex + 4 | 0, helpMatrix.d);
        matrices.set_5wr77w$(matrixIndex + 5 | 0, helpMatrix.tx);
        matrices.set_5wr77w$(matrixIndex + 6 | 0, helpMatrix.ty);
      }
    }
     else if (y < -lA) {
      if (x < -lA || x >= lA) {
        return this.globalTransformMatrix;
      }
      isDown = y > this._kY_0 * (x - pX - dX) - lB;
      matrixIndex = (((Kotlin.imul(segmentX, segmentY) + indexX | 0) * 2 | 0) + (isDown ? 1 : 0) | 0) * 7 | 0;
      if (matrices.get_za3lpa$(matrixIndex) > 0.0) {
        helpMatrix.copyFromArray_fcbbnx$(matrices.data, matrixIndex + 1 | 0);
      }
       else {
        var vertexIndex_1 = indexX * 2 | 0;
        var ddX_1 = this._hullCache_0.get_za3lpa$(10);
        var ddY_1 = this._hullCache_0.get_za3lpa$(11);
        var sX_1 = this._hullCache_0.get_za3lpa$(8) + indexX * ddX_1;
        var sY_1 = this._hullCache_0.get_za3lpa$(9) + indexX * ddY_1;
        var vertices_1 = this._vertices;
        if (isDown) {
          this._getAffineTransform_0(pX + dX, -lA, dX, lB - lA, vertices_1.get_za3lpa$(vertexIndex_1 + 2 | 0), vertices_1.get_za3lpa$(vertexIndex_1 + 3 | 0), vertices_1.get_za3lpa$(vertexIndex_1), vertices_1.get_za3lpa$(vertexIndex_1 + 1 | 0), sX_1 + ddX_1, sY_1 + ddY_1, Surface$Companion_getInstance()._helpTransform_8be2vx$, helpMatrix, true);
        }
         else {
          this._getAffineTransform_0(pX, -lB, dX, lB - lA, sX_1, sY_1, sX_1 + ddX_1, sY_1 + ddY_1, vertices_1.get_za3lpa$(vertexIndex_1), vertices_1.get_za3lpa$(vertexIndex_1 + 1 | 0), Surface$Companion_getInstance()._helpTransform_8be2vx$, helpMatrix, false);
        }
        matrices.set_5wr77w$(matrixIndex, 1.0);
        matrices.set_5wr77w$(matrixIndex + 1 | 0, helpMatrix.a);
        matrices.set_5wr77w$(matrixIndex + 2 | 0, helpMatrix.b);
        matrices.set_5wr77w$(matrixIndex + 3 | 0, helpMatrix.c);
        matrices.set_5wr77w$(matrixIndex + 4 | 0, helpMatrix.d);
        matrices.set_5wr77w$(matrixIndex + 5 | 0, helpMatrix.tx);
        matrices.set_5wr77w$(matrixIndex + 6 | 0, helpMatrix.ty);
      }
    }
     else if (y >= lA) {
      if (x < -lA || x >= lA) {
        return this.globalTransformMatrix;
      }
      isDown = y > this._kY_0 * (x - pX - dX) + lA;
      matrixIndex = (((Kotlin.imul(segmentX, segmentY) + segmentX + segmentY + indexX | 0) * 2 | 0) + (isDown ? 1 : 0) | 0) * 7 | 0;
      if (matrices.get_za3lpa$(matrixIndex) > 0.0) {
        helpMatrix.copyFromArray_fcbbnx$(matrices.data, matrixIndex + 1 | 0);
      }
       else {
        var vertexIndex_2 = Kotlin.imul(segmentY, segmentXD + 2 | 0) + (indexX * 2 | 0) | 0;
        var ddX_2 = this._hullCache_0.get_za3lpa$(10);
        var ddY_2 = this._hullCache_0.get_za3lpa$(11);
        var sX_2 = this._hullCache_0.get_za3lpa$(6) - (segmentX - indexX | 0) * ddX_2;
        var sY_2 = this._hullCache_0.get_za3lpa$(7) - (segmentX - indexX | 0) * ddY_2;
        var vertices_2 = this._vertices;
        if (isDown) {
          this._getAffineTransform_0(pX + dX, lB, dX, lB - lA, sX_2 + ddX_2, sY_2 + ddY_2, sX_2, sY_2, vertices_2.get_za3lpa$(vertexIndex_2 + 2 | 0), vertices_2.get_za3lpa$(vertexIndex_2 + 3 | 0), Surface$Companion_getInstance()._helpTransform_8be2vx$, helpMatrix, true);
        }
         else {
          this._getAffineTransform_0(pX, lA, dX, lB - lA, vertices_2.get_za3lpa$(vertexIndex_2), vertices_2.get_za3lpa$(vertexIndex_2 + 1 | 0), vertices_2.get_za3lpa$(vertexIndex_2 + 2 | 0), vertices_2.get_za3lpa$(vertexIndex_2 + 3 | 0), sX_2, sY_2, Surface$Companion_getInstance()._helpTransform_8be2vx$, helpMatrix, false);
        }
        matrices.set_5wr77w$(matrixIndex, 1.0);
        matrices.set_5wr77w$(matrixIndex + 1 | 0, helpMatrix.a);
        matrices.set_5wr77w$(matrixIndex + 2 | 0, helpMatrix.b);
        matrices.set_5wr77w$(matrixIndex + 3 | 0, helpMatrix.c);
        matrices.set_5wr77w$(matrixIndex + 4 | 0, helpMatrix.d);
        matrices.set_5wr77w$(matrixIndex + 5 | 0, helpMatrix.tx);
        matrices.set_5wr77w$(matrixIndex + 6 | 0, helpMatrix.ty);
      }
    }
     else {
      isDown = y > this._k_0 * (x - pX - dX) + pY;
      matrixIndex = (((Kotlin.imul(segmentX, indexY) + indexX | 0) * 2 | 0) + (isDown ? 1 : 0) | 0) * 7 | 0;
      if (matrices.get_za3lpa$(matrixIndex) > 0.0) {
        helpMatrix.copyFromArray_fcbbnx$(matrices.data, matrixIndex + 1 | 0);
      }
       else {
        var vertexIndex_3 = (indexX * 2 | 0) + Kotlin.imul(indexY, segmentXD + 2 | 0) | 0;
        var vertices_3 = this._vertices;
        if (isDown) {
          this._getAffineTransform_0(pX + dX, pY + dY, dX, dY, vertices_3.get_za3lpa$(vertexIndex_3 + segmentXD + 4 | 0), vertices_3.get_za3lpa$(vertexIndex_3 + segmentXD + 5 | 0), vertices_3.get_za3lpa$(vertexIndex_3 + segmentXD + 2 | 0), vertices_3.get_za3lpa$(vertexIndex_3 + segmentXD + 3 | 0), vertices_3.get_za3lpa$(vertexIndex_3 + 2 | 0), vertices_3.get_za3lpa$(vertexIndex_3 + 3 | 0), Surface$Companion_getInstance()._helpTransform_8be2vx$, helpMatrix, true);
        }
         else {
          this._getAffineTransform_0(pX, pY, dX, dY, vertices_3.get_za3lpa$(vertexIndex_3), vertices_3.get_za3lpa$(vertexIndex_3 + 1 | 0), vertices_3.get_za3lpa$(vertexIndex_3 + 2 | 0), vertices_3.get_za3lpa$(vertexIndex_3 + 3 | 0), vertices_3.get_za3lpa$(vertexIndex_3 + segmentXD + 2 | 0), vertices_3.get_za3lpa$(vertexIndex_3 + segmentXD + 3 | 0), Surface$Companion_getInstance()._helpTransform_8be2vx$, helpMatrix, false);
        }
        matrices.set_5wr77w$(matrixIndex, 1.0);
        matrices.set_5wr77w$(matrixIndex + 1 | 0, helpMatrix.a);
        matrices.set_5wr77w$(matrixIndex + 2 | 0, helpMatrix.b);
        matrices.set_5wr77w$(matrixIndex + 3 | 0, helpMatrix.c);
        matrices.set_5wr77w$(matrixIndex + 4 | 0, helpMatrix.d);
        matrices.set_5wr77w$(matrixIndex + 5 | 0, helpMatrix.tx);
        matrices.set_5wr77w$(matrixIndex + 6 | 0, helpMatrix.ty);
      }
    }
    return helpMatrix;
  };
  Surface.prototype.init_7qxzn9$ = function (boneData, armatureValue) {
    if (Kotlin.isType(boneData, SurfaceData)) {
      this.init_tcb1au$(boneData, armatureValue);
    }
     else {
      Bone.prototype.init_7qxzn9$.call(this, boneData, armatureValue);
    }
  };
  Surface.prototype.init_tcb1au$ = function (surfaceData, armatureValue) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    if (this._boneData != null) {
      return;
    }
    Bone.prototype.init_7qxzn9$.call(this, surfaceData, armatureValue);
    var segmentX = surfaceData.segmentX;
    var segmentY = surfaceData.segmentY;
    var vertexCount = ensureNotNull(ensureNotNull(ensureNotNull(this._armature).armatureData.parent).intArray)[surfaceData.geometry.offset + BinaryOffset$GeometryVertexCount_getInstance().index | 0];
    var lB = 1000.0;
    var lA = 200.0;
    this._dX_0 = lA * 2.0 / segmentX;
    this._dY_0 = lA * 2.0 / segmentY;
    this._k_0 = -this._dY_0 / this._dX_0;
    this._kX_0 = -this._dY_0 / (lB - lA);
    this._kY_0 = -(lB - lA) / this._dX_0;
    set_length_0(this._vertices, vertexCount * 2);
    set_length_0(this._deformVertices, vertexCount * 2);
    set_length_0(this._matrixCahce_0, ((Kotlin.imul(segmentX, segmentY) + (segmentX * 2 | 0) + (segmentY * 2 | 0) | 0) * 2 | 0) * 7 | 0);
    set_length_0(this._hullCache_0, 10);
    tmp$ = vertexCount * 2;
    for (var i = 0; i < tmp$; i++) {
      this._deformVertices.set_5wr77w$(i, 0.0);
    }
    if (this._parent != null) {
      if (equals((tmp$_1 = (tmp$_0 = this._parent) != null ? tmp$_0.boneData : null) != null ? tmp$_1.type : null, BoneType$Bone_getInstance())) {
        this._bone = this._parent;
      }
       else {
        this._bone = (Kotlin.isType(tmp$_2 = this._parent, Surface) ? tmp$_2 : throwCCE())._bone;
      }
    }
  };
  Surface.prototype.update_za3lpa$ = function (cacheFrameIndex) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var cacheFrameIndex_0 = cacheFrameIndex;
    if (cacheFrameIndex_0 >= 0 && this._cachedFrameIndices != null) {
      var cachedFrameIndex = ensureNotNull(this._cachedFrameIndices).get_za3lpa$(cacheFrameIndex_0);
      if (cachedFrameIndex >= 0 && this._cachedFrameIndex === cachedFrameIndex) {
        this._transformDirty = false;
      }
       else if (cachedFrameIndex >= 0) {
        this._transformDirty = true;
        this._cachedFrameIndex = cachedFrameIndex;
      }
       else {
        if (this._hasConstraint) {
          tmp$ = ensureNotNull(this._armature)._constraints.iterator();
          while (tmp$.hasNext()) {
            var constraint = tmp$.next();
            if (equals(constraint._root, this)) {
              constraint.update();
            }
          }
        }
        if (this._transformDirty || (this._parent != null && ensureNotNull(this._parent)._childrenTransformDirty)) {
          this._transformDirty = true;
          this._cachedFrameIndex = -1;
        }
         else if (this._cachedFrameIndex >= 0) {
          this._transformDirty = false;
          ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, this._cachedFrameIndex);
        }
         else {
          this._transformDirty = true;
          this._cachedFrameIndex = -1;
        }
      }
    }
     else {
      if (this._hasConstraint) {
        tmp$_0 = ensureNotNull(this._armature)._constraints.iterator();
        while (tmp$_0.hasNext()) {
          var constraint_0 = tmp$_0.next();
          if (equals(constraint_0._root, this)) {
            constraint_0.update();
          }
        }
      }
      if (this._transformDirty || (this._parent != null && ensureNotNull(this._parent)._childrenTransformDirty)) {
        cacheFrameIndex_0 = -1;
        this._transformDirty = true;
        this._cachedFrameIndex = -1;
      }
    }
    if (this._transformDirty) {
      this._transformDirty = false;
      this._childrenTransformDirty = true;
      tmp$_1 = this._matrixCahce_0.size;
      for (var i = 0; i < tmp$_1; i += 7) {
        this._matrixCahce_0.set_5wr77w$(i, -1.0);
      }
      this._updateVertices_0();
      if (this._cachedFrameIndex < 0) {
        var isCache = cacheFrameIndex_0 >= 0;
        if (this._localDirty) {
          this._updateGlobalTransformMatrix_6taknv$(isCache);
        }
        if (isCache && this._cachedFrameIndices != null) {
          var res = ensureNotNull(ensureNotNull(this._armature)._armatureData).setCacheFrame_eeuvpt$(this.globalTransformMatrix, this.global);
          this._cachedFrameIndex = res;
          ensureNotNull(this._cachedFrameIndices).set_vux9f0$(cacheFrameIndex_0, res);
        }
      }
       else {
        (tmp$_3 = (tmp$_2 = this._armature) != null ? tmp$_2._armatureData : null) != null ? (tmp$_3.getCacheFrame_bqh3xf$(this.globalTransformMatrix, this.global, this._cachedFrameIndex), Unit) : null;
      }
      var lB = 1000.0;
      var lA = 200.0;
      var ddX = 2 * this.global.x;
      var ddY = 2 * this.global.y;
      var helpPoint = Surface$Companion_getInstance()._helpPoint_8be2vx$;
      this.globalTransformMatrix.transformPoint_hd5a0h$(lB, -lA, helpPoint);
      this._hullCache_0.set_5wr77w$(0, helpPoint.x);
      this._hullCache_0.set_5wr77w$(1, helpPoint.y);
      this._hullCache_0.set_5wr77w$(2, ddX - helpPoint.x);
      this._hullCache_0.set_5wr77w$(3, ddY - helpPoint.y);
      this.globalTransformMatrix.transformPoint_hd5a0h$(0.0, this._dY_0, helpPoint, true);
      this._hullCache_0.set_5wr77w$(4, helpPoint.x);
      this._hullCache_0.set_5wr77w$(5, helpPoint.y);
      this.globalTransformMatrix.transformPoint_hd5a0h$(lA, lB, helpPoint);
      this._hullCache_0.set_5wr77w$(6, helpPoint.x);
      this._hullCache_0.set_5wr77w$(7, helpPoint.y);
      this._hullCache_0.set_5wr77w$(8, ddX - helpPoint.x);
      this._hullCache_0.set_5wr77w$(9, ddY - helpPoint.y);
      this.globalTransformMatrix.transformPoint_hd5a0h$(this._dX_0, 0.0, helpPoint, true);
      this._hullCache_0.set_5wr77w$(10, helpPoint.x);
      this._hullCache_0.set_5wr77w$(11, helpPoint.y);
    }
     else if (this._childrenTransformDirty) {
      this._childrenTransformDirty = false;
    }
    this._localDirty = true;
  };
  Surface.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Surface',
    interfaces: [Bone]
  };
  function TransformObject() {
    TransformObject$Companion_getInstance();
    BaseObject.call(this);
    this.globalTransformMatrix = Matrix_init();
    this.global = new Transform();
    this.offset = new Transform();
    this.origin = null;
    this.userData = null;
    this._globalDirty = false;
    this._alpha = 1.0;
    this._globalAlpha = 1.0;
    this._armature = null;
  }
  function TransformObject$Companion() {
    TransformObject$Companion_instance = this;
    this._helpMatrix_8be2vx$ = Matrix_init();
    this._helpTransform_8be2vx$ = new Transform();
    this._helpPoint_8be2vx$ = Point_init();
  }
  TransformObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TransformObject$Companion_instance = null;
  function TransformObject$Companion_getInstance() {
    if (TransformObject$Companion_instance === null) {
      new TransformObject$Companion();
    }
    return TransformObject$Companion_instance;
  }
  TransformObject.prototype._onClear = function () {
    this.globalTransformMatrix.identity();
    this.global.identity();
    this.offset.identity();
    this.origin = null;
    this.userData = null;
    this._globalDirty = false;
    this._alpha = 1.0;
    this._globalAlpha = 1.0;
    this._armature = null;
  };
  TransformObject.prototype.updateGlobalTransform = function () {
    if (this._globalDirty) {
      this._globalDirty = false;
      this.global.fromMatrix_dyon7w$(this.globalTransformMatrix);
    }
  };
  Object.defineProperty(TransformObject.prototype, 'armature', {
    get: function () {
      return ensureNotNull(this._armature);
    }
  });
  TransformObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TransformObject',
    interfaces: [BaseObject]
  };
  function BaseObject() {
    BaseObject$Companion_getInstance();
    var tmp$;
    var tmp$_0;
    tmp$_0 = BaseObject$Companion_getInstance();
    tmp$ = tmp$_0.__hashCode_0;
    tmp$_0.__hashCode_0 = tmp$ + 1 | 0;
    this._hashCode = tmp$;
    this._isInPool_i9i7nm$_0 = false;
  }
  BaseObject.prototype.toString = function () {
    return 'BaseObject.Unknown';
  };
  function BaseObject$Companion() {
    BaseObject$Companion_instance = this;
    this.__hashCode_0 = 0;
    this._defaultMaxCount_0 = 3000;
    this._maxCountMap_0 = LinkedHashMap_init();
    this._poolsMap_0 = LinkedHashMap_init();
    this.factories_0 = LinkedHashMap_init();
    this.register_m48uzh$(getKClass(Animation), BaseObject$BaseObject$Companion_init$lambda);
    this.register_m48uzh$(getKClass(EventObject), BaseObject$BaseObject$Companion_init$lambda_0);
    this.register_m48uzh$(getKClass(DisplayFrame), BaseObject$BaseObject$Companion_init$lambda_1);
    this.register_m48uzh$(getKClass(AnimationConfig), BaseObject$BaseObject$Companion_init$lambda_2);
    this.register_m48uzh$(getKClass(BlendState), BaseObject$BaseObject$Companion_init$lambda_3);
    this.register_m48uzh$(getKClass(IKConstraintTimelineState), BaseObject$BaseObject$Companion_init$lambda_4);
    this.register_m48uzh$(getKClass(BoneAllTimelineState), BaseObject$BaseObject$Companion_init$lambda_5);
    this.register_m48uzh$(getKClass(BoneTranslateTimelineState), BaseObject$BaseObject$Companion_init$lambda_6);
    this.register_m48uzh$(getKClass(BoneRotateTimelineState), BaseObject$BaseObject$Companion_init$lambda_7);
    this.register_m48uzh$(getKClass(BoneScaleTimelineState), BaseObject$BaseObject$Companion_init$lambda_8);
    this.register_m48uzh$(getKClass(SlotDisplayTimelineState), BaseObject$BaseObject$Companion_init$lambda_9);
    this.register_m48uzh$(getKClass(SlotZIndexTimelineState), BaseObject$BaseObject$Companion_init$lambda_10);
    this.register_m48uzh$(getKClass(SlotColorTimelineState), BaseObject$BaseObject$Companion_init$lambda_11);
    this.register_m48uzh$(getKClass(DeformTimelineState), BaseObject$BaseObject$Companion_init$lambda_12);
    this.register_m48uzh$(getKClass(AlphaTimelineState), BaseObject$BaseObject$Companion_init$lambda_13);
    this.register_m48uzh$(getKClass(ZOrderTimelineState), BaseObject$BaseObject$Companion_init$lambda_14);
    this.register_m48uzh$(getKClass(SurfaceTimelineState), BaseObject$BaseObject$Companion_init$lambda_15);
    this.register_m48uzh$(getKClass(AnimationProgressTimelineState), BaseObject$BaseObject$Companion_init$lambda_16);
    this.register_m48uzh$(getKClass(AnimationWeightTimelineState), BaseObject$BaseObject$Companion_init$lambda_17);
    this.register_m48uzh$(getKClass(AnimationParametersTimelineState), BaseObject$BaseObject$Companion_init$lambda_18);
    this.register_m48uzh$(getKClass(ArmatureData), BaseObject$BaseObject$Companion_init$lambda_19);
    this.register_m48uzh$(getKClass(CanvasData), BaseObject$BaseObject$Companion_init$lambda_20);
    this.register_m48uzh$(getKClass(BoneData), BaseObject$BaseObject$Companion_init$lambda_21);
    this.register_m48uzh$(getKClass(SurfaceData), BaseObject$BaseObject$Companion_init$lambda_22);
    this.register_m48uzh$(getKClass(Surface), BaseObject$BaseObject$Companion_init$lambda_23);
    this.register_m48uzh$(getKClass(Bone), BaseObject$BaseObject$Companion_init$lambda_24);
    this.register_m48uzh$(getKClass(IKConstraint), BaseObject$BaseObject$Companion_init$lambda_25);
    this.register_m48uzh$(getKClass(PathConstraint), BaseObject$BaseObject$Companion_init$lambda_26);
    this.register_m48uzh$(getKClass(IKConstraintData), BaseObject$BaseObject$Companion_init$lambda_27);
    this.register_m48uzh$(getKClass(PathConstraintData), BaseObject$BaseObject$Companion_init$lambda_28);
    this.register_m48uzh$(getKClass(SlotData), BaseObject$BaseObject$Companion_init$lambda_29);
    this.register_m48uzh$(getKClass(SkinData), BaseObject$BaseObject$Companion_init$lambda_30);
    this.register_m48uzh$(getKClass(ImageDisplayData), BaseObject$BaseObject$Companion_init$lambda_31);
    this.register_m48uzh$(getKClass(ArmatureDisplayData), BaseObject$BaseObject$Companion_init$lambda_32);
    this.register_m48uzh$(getKClass(MeshDisplayData), BaseObject$BaseObject$Companion_init$lambda_33);
    this.register_m48uzh$(getKClass(BoundingBoxDisplayData), BaseObject$BaseObject$Companion_init$lambda_34);
    this.register_m48uzh$(getKClass(PathDisplayData), BaseObject$BaseObject$Companion_init$lambda_35);
    this.register_m48uzh$(getKClass(RectangleBoundingBoxData), BaseObject$BaseObject$Companion_init$lambda_36);
    this.register_m48uzh$(getKClass(EllipseBoundingBoxData), BaseObject$BaseObject$Companion_init$lambda_37);
    this.register_m48uzh$(getKClass(PolygonBoundingBoxData), BaseObject$BaseObject$Companion_init$lambda_38);
    this.register_m48uzh$(getKClass(AnimationData), BaseObject$BaseObject$Companion_init$lambda_39);
    this.register_m48uzh$(getKClass(AnimationTimelineData), BaseObject$BaseObject$Companion_init$lambda_40);
    this.register_m48uzh$(getKClass(TimelineData), BaseObject$BaseObject$Companion_init$lambda_41);
    this.register_m48uzh$(getKClass(ActionData), BaseObject$BaseObject$Companion_init$lambda_42);
    this.register_m48uzh$(getKClass(UserData), BaseObject$BaseObject$Companion_init$lambda_43);
    this.register_m48uzh$(getKClass(WeightData), BaseObject$BaseObject$Companion_init$lambda_44);
    this.register_m48uzh$(getKClass(DragonBonesData), BaseObject$BaseObject$Companion_init$lambda_45);
    this.register_m48uzh$(getKClass(Armature), BaseObject$BaseObject$Companion_init$lambda_46);
    this.register_m48uzh$(getKClass(AnimationState), BaseObject$BaseObject$Companion_init$lambda_47);
    this.register_m48uzh$(getKClass(ActionTimelineState), BaseObject$BaseObject$Companion_init$lambda_48);
  }
  BaseObject$Companion.prototype._returnObject_0 = function (obj) {
    var tmp$, tmp$_0;
    var classType = Kotlin.getKClassFromExpression(obj);
    var maxCount = (tmp$ = BaseObject$Companion_getInstance()._maxCountMap_0.get_11rb$(classType)) != null ? tmp$ : BaseObject$Companion_getInstance()._defaultMaxCount_0;
    var pool = BaseObject$Companion_getInstance().getPool_8qpbta$(classType);
    if (get_length_1(pool) < maxCount) {
      if (!obj._isInPool_i9i7nm$_0) {
        obj._isInPool_i9i7nm$_0 = true;
        (Kotlin.isType(tmp$_0 = pool, ArrayList) ? tmp$_0 : throwCCE()).add_11rb$(obj);
      }
       else {
        console_getInstance().warn_vqirvp$(['The object is already in the pool.']);
      }
    }
  };
  BaseObject$Companion.prototype.getPool_8qpbta$ = function (clazz) {
    var tmp$;
    var $receiver = this._poolsMap_0;
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
  BaseObject$Companion.prototype.setMaxCount_jpcoga$ = function (clazz, maxCount) {
    this._maxCountMap_0.put_xwzc9p$(clazz, maxCount);
    var pool = this.getPool_8qpbta$(clazz);
    set_lengthSet_1(pool, maxCount);
  };
  BaseObject$Companion.prototype.clearPool_6h6m5r$ = function (clazz) {
    this.getPool_8qpbta$(clazz).clear();
  };
  BaseObject$Companion.prototype.borrowObject_6h6m5r$ = function (clazz) {
    var pool = this.getPool_8qpbta$(clazz);
    var obj = !pool.isEmpty() ? pool.removeAt_za3lpa$(pool.size - 1 | 0) : this.createInstance_0(clazz);
    obj._onClear();
    obj._isInPool_i9i7nm$_0 = false;
    return obj;
  };
  BaseObject$Companion.prototype.borrowObject_f2icqg$ = defineInlineFunction('korge-dragonbones-js.com.dragonbones.core.BaseObject.Companion.borrowObject_f2icqg$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT) {
      return this.borrowObject_6h6m5r$(getKClass(T_0));
    };
  }));
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  BaseObject$Companion.prototype.createInstance_0 = function (clazz) {
    var tmp$, tmp$_0;
    var tmp$_1;
    if ((tmp$ = this.factories_0.get_11rb$(clazz)) != null)
      tmp$_1 = tmp$;
    else {
      throw new NotImplementedError_init('An operation is not implemented: ' + ('Missing createInstance ' + clazz));
    }
    var factory = tmp$_1;
    return Kotlin.isType(tmp$_0 = factory(), BaseObject) ? tmp$_0 : throwCCE();
  };
  BaseObject$Companion.prototype.register_m48uzh$ = function (clazz, factory) {
    this.factories_0.put_xwzc9p$(clazz, factory);
  };
  BaseObject$Companion.prototype.register_uo4xay$ = defineInlineFunction('korge-dragonbones-js.com.dragonbones.core.BaseObject.Companion.register_uo4xay$', wrapFunction(function () {
    var getKClass = Kotlin.getKClass;
    return function (T_0, isT, factory) {
      this.register_m48uzh$(getKClass(T_0), factory);
    };
  }));
  function BaseObject$BaseObject$Companion_init$lambda() {
    return new Animation();
  }
  function BaseObject$BaseObject$Companion_init$lambda_0() {
    return new EventObject();
  }
  function BaseObject$BaseObject$Companion_init$lambda_1() {
    return new DisplayFrame();
  }
  function BaseObject$BaseObject$Companion_init$lambda_2() {
    return new AnimationConfig();
  }
  function BaseObject$BaseObject$Companion_init$lambda_3() {
    return new BlendState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_4() {
    return new IKConstraintTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_5() {
    return new BoneAllTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_6() {
    return new BoneTranslateTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_7() {
    return new BoneRotateTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_8() {
    return new BoneScaleTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_9() {
    return new SlotDisplayTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_10() {
    return new SlotZIndexTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_11() {
    return new SlotColorTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_12() {
    return new DeformTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_13() {
    return new AlphaTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_14() {
    return new ZOrderTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_15() {
    return new SurfaceTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_16() {
    return new AnimationProgressTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_17() {
    return new AnimationWeightTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_18() {
    return new AnimationParametersTimelineState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_19() {
    return new ArmatureData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_20() {
    return new CanvasData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_21() {
    return new BoneData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_22() {
    return new SurfaceData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_23() {
    return new Surface();
  }
  function BaseObject$BaseObject$Companion_init$lambda_24() {
    return new Bone();
  }
  function BaseObject$BaseObject$Companion_init$lambda_25() {
    return new IKConstraint();
  }
  function BaseObject$BaseObject$Companion_init$lambda_26() {
    return new PathConstraint();
  }
  function BaseObject$BaseObject$Companion_init$lambda_27() {
    return new IKConstraintData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_28() {
    return new PathConstraintData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_29() {
    return new SlotData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_30() {
    return new SkinData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_31() {
    return new ImageDisplayData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_32() {
    return new ArmatureDisplayData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_33() {
    return new MeshDisplayData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_34() {
    return new BoundingBoxDisplayData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_35() {
    return new PathDisplayData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_36() {
    return new RectangleBoundingBoxData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_37() {
    return new EllipseBoundingBoxData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_38() {
    return new PolygonBoundingBoxData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_39() {
    return new AnimationData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_40() {
    return new AnimationTimelineData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_41() {
    return new TimelineData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_42() {
    return new ActionData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_43() {
    return new UserData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_44() {
    return new WeightData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_45() {
    return new DragonBonesData();
  }
  function BaseObject$BaseObject$Companion_init$lambda_46() {
    return new Armature();
  }
  function BaseObject$BaseObject$Companion_init$lambda_47() {
    return new AnimationState();
  }
  function BaseObject$BaseObject$Companion_init$lambda_48() {
    return new ActionTimelineState();
  }
  BaseObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BaseObject$Companion_instance = null;
  function BaseObject$Companion_getInstance() {
    if (BaseObject$Companion_instance === null) {
      new BaseObject$Companion();
    }
    return BaseObject$Companion_instance;
  }
  BaseObject.prototype.returnToPool = function () {
    this._onClear();
    BaseObject$Companion_getInstance()._returnObject_0(this);
  };
  BaseObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseObject',
    interfaces: []
  };
  function IntEnum() {
  }
  IntEnum.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IntEnum',
    interfaces: []
  };
  var mapCapacity = Kotlin.kotlin.collections.mapCapacity_za3lpa$;
  var coerceAtLeast = Kotlin.kotlin.ranges.coerceAtLeast_dqglrj$;
  var LinkedHashMap_init_0 = Kotlin.kotlin.collections.LinkedHashMap_init_bwtc7$;
  function IntEnumCompanion(rawValues) {
    this.rawValues_9lc836$_0 = rawValues;
    var $receiver = this.rawValues_9lc836$_0;
    var capacity = coerceAtLeast(mapCapacity($receiver.length), 16);
    var destination = LinkedHashMap_init_0(capacity);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var element = $receiver[tmp$];
      destination.put_xwzc9p$(element.id, element);
    }
    this.values_gew8cq$_0 = destination;
  }
  IntEnumCompanion.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.values_gew8cq$_0.get_11rb$(index)) != null ? tmp$ : first(this.rawValues_9lc836$_0);
  };
  IntEnumCompanion.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntEnumCompanion',
    interfaces: []
  };
  function BinaryOffset(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BinaryOffset_initFields() {
    BinaryOffset_initFields = function () {
    };
    BinaryOffset$WeigthBoneCount_instance = new BinaryOffset('WeigthBoneCount', 0, 0);
    BinaryOffset$WeigthFloatOffset_instance = new BinaryOffset('WeigthFloatOffset', 1, 1);
    BinaryOffset$WeigthBoneIndices_instance = new BinaryOffset('WeigthBoneIndices', 2, 2);
    BinaryOffset$GeometryVertexCount_instance = new BinaryOffset('GeometryVertexCount', 3, 0);
    BinaryOffset$GeometryTriangleCount_instance = new BinaryOffset('GeometryTriangleCount', 4, 1);
    BinaryOffset$GeometryFloatOffset_instance = new BinaryOffset('GeometryFloatOffset', 5, 2);
    BinaryOffset$GeometryWeightOffset_instance = new BinaryOffset('GeometryWeightOffset', 6, 3);
    BinaryOffset$GeometryVertexIndices_instance = new BinaryOffset('GeometryVertexIndices', 7, 4);
    BinaryOffset$TimelineScale_instance = new BinaryOffset('TimelineScale', 8, 0);
    BinaryOffset$TimelineOffset_instance = new BinaryOffset('TimelineOffset', 9, 1);
    BinaryOffset$TimelineKeyFrameCount_instance = new BinaryOffset('TimelineKeyFrameCount', 10, 2);
    BinaryOffset$TimelineFrameValueCount_instance = new BinaryOffset('TimelineFrameValueCount', 11, 3);
    BinaryOffset$TimelineFrameValueOffset_instance = new BinaryOffset('TimelineFrameValueOffset', 12, 4);
    BinaryOffset$TimelineFrameOffset_instance = new BinaryOffset('TimelineFrameOffset', 13, 5);
    BinaryOffset$FramePosition_instance = new BinaryOffset('FramePosition', 14, 0);
    BinaryOffset$FrameTweenType_instance = new BinaryOffset('FrameTweenType', 15, 1);
    BinaryOffset$FrameTweenEasingOrCurveSampleCount_instance = new BinaryOffset('FrameTweenEasingOrCurveSampleCount', 16, 2);
    BinaryOffset$FrameCurveSamples_instance = new BinaryOffset('FrameCurveSamples', 17, 3);
    BinaryOffset$DeformVertexOffset_instance = new BinaryOffset('DeformVertexOffset', 18, 0);
    BinaryOffset$DeformCount_instance = new BinaryOffset('DeformCount', 19, 1);
    BinaryOffset$DeformValueCount_instance = new BinaryOffset('DeformValueCount', 20, 2);
    BinaryOffset$DeformValueOffset_instance = new BinaryOffset('DeformValueOffset', 21, 3);
    BinaryOffset$DeformFloatOffset_instance = new BinaryOffset('DeformFloatOffset', 22, 4);
  }
  var BinaryOffset$WeigthBoneCount_instance;
  function BinaryOffset$WeigthBoneCount_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$WeigthBoneCount_instance;
  }
  var BinaryOffset$WeigthFloatOffset_instance;
  function BinaryOffset$WeigthFloatOffset_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$WeigthFloatOffset_instance;
  }
  var BinaryOffset$WeigthBoneIndices_instance;
  function BinaryOffset$WeigthBoneIndices_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$WeigthBoneIndices_instance;
  }
  var BinaryOffset$GeometryVertexCount_instance;
  function BinaryOffset$GeometryVertexCount_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$GeometryVertexCount_instance;
  }
  var BinaryOffset$GeometryTriangleCount_instance;
  function BinaryOffset$GeometryTriangleCount_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$GeometryTriangleCount_instance;
  }
  var BinaryOffset$GeometryFloatOffset_instance;
  function BinaryOffset$GeometryFloatOffset_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$GeometryFloatOffset_instance;
  }
  var BinaryOffset$GeometryWeightOffset_instance;
  function BinaryOffset$GeometryWeightOffset_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$GeometryWeightOffset_instance;
  }
  var BinaryOffset$GeometryVertexIndices_instance;
  function BinaryOffset$GeometryVertexIndices_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$GeometryVertexIndices_instance;
  }
  var BinaryOffset$TimelineScale_instance;
  function BinaryOffset$TimelineScale_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$TimelineScale_instance;
  }
  var BinaryOffset$TimelineOffset_instance;
  function BinaryOffset$TimelineOffset_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$TimelineOffset_instance;
  }
  var BinaryOffset$TimelineKeyFrameCount_instance;
  function BinaryOffset$TimelineKeyFrameCount_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$TimelineKeyFrameCount_instance;
  }
  var BinaryOffset$TimelineFrameValueCount_instance;
  function BinaryOffset$TimelineFrameValueCount_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$TimelineFrameValueCount_instance;
  }
  var BinaryOffset$TimelineFrameValueOffset_instance;
  function BinaryOffset$TimelineFrameValueOffset_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$TimelineFrameValueOffset_instance;
  }
  var BinaryOffset$TimelineFrameOffset_instance;
  function BinaryOffset$TimelineFrameOffset_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$TimelineFrameOffset_instance;
  }
  var BinaryOffset$FramePosition_instance;
  function BinaryOffset$FramePosition_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$FramePosition_instance;
  }
  var BinaryOffset$FrameTweenType_instance;
  function BinaryOffset$FrameTweenType_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$FrameTweenType_instance;
  }
  var BinaryOffset$FrameTweenEasingOrCurveSampleCount_instance;
  function BinaryOffset$FrameTweenEasingOrCurveSampleCount_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$FrameTweenEasingOrCurveSampleCount_instance;
  }
  var BinaryOffset$FrameCurveSamples_instance;
  function BinaryOffset$FrameCurveSamples_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$FrameCurveSamples_instance;
  }
  var BinaryOffset$DeformVertexOffset_instance;
  function BinaryOffset$DeformVertexOffset_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$DeformVertexOffset_instance;
  }
  var BinaryOffset$DeformCount_instance;
  function BinaryOffset$DeformCount_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$DeformCount_instance;
  }
  var BinaryOffset$DeformValueCount_instance;
  function BinaryOffset$DeformValueCount_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$DeformValueCount_instance;
  }
  var BinaryOffset$DeformValueOffset_instance;
  function BinaryOffset$DeformValueOffset_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$DeformValueOffset_instance;
  }
  var BinaryOffset$DeformFloatOffset_instance;
  function BinaryOffset$DeformFloatOffset_getInstance() {
    BinaryOffset_initFields();
    return BinaryOffset$DeformFloatOffset_instance;
  }
  BinaryOffset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinaryOffset',
    interfaces: [Enum]
  };
  function BinaryOffset$values() {
    return [BinaryOffset$WeigthBoneCount_getInstance(), BinaryOffset$WeigthFloatOffset_getInstance(), BinaryOffset$WeigthBoneIndices_getInstance(), BinaryOffset$GeometryVertexCount_getInstance(), BinaryOffset$GeometryTriangleCount_getInstance(), BinaryOffset$GeometryFloatOffset_getInstance(), BinaryOffset$GeometryWeightOffset_getInstance(), BinaryOffset$GeometryVertexIndices_getInstance(), BinaryOffset$TimelineScale_getInstance(), BinaryOffset$TimelineOffset_getInstance(), BinaryOffset$TimelineKeyFrameCount_getInstance(), BinaryOffset$TimelineFrameValueCount_getInstance(), BinaryOffset$TimelineFrameValueOffset_getInstance(), BinaryOffset$TimelineFrameOffset_getInstance(), BinaryOffset$FramePosition_getInstance(), BinaryOffset$FrameTweenType_getInstance(), BinaryOffset$FrameTweenEasingOrCurveSampleCount_getInstance(), BinaryOffset$FrameCurveSamples_getInstance(), BinaryOffset$DeformVertexOffset_getInstance(), BinaryOffset$DeformCount_getInstance(), BinaryOffset$DeformValueCount_getInstance(), BinaryOffset$DeformValueOffset_getInstance(), BinaryOffset$DeformFloatOffset_getInstance()];
  }
  BinaryOffset.values = BinaryOffset$values;
  function BinaryOffset$valueOf(name) {
    switch (name) {
      case 'WeigthBoneCount':
        return BinaryOffset$WeigthBoneCount_getInstance();
      case 'WeigthFloatOffset':
        return BinaryOffset$WeigthFloatOffset_getInstance();
      case 'WeigthBoneIndices':
        return BinaryOffset$WeigthBoneIndices_getInstance();
      case 'GeometryVertexCount':
        return BinaryOffset$GeometryVertexCount_getInstance();
      case 'GeometryTriangleCount':
        return BinaryOffset$GeometryTriangleCount_getInstance();
      case 'GeometryFloatOffset':
        return BinaryOffset$GeometryFloatOffset_getInstance();
      case 'GeometryWeightOffset':
        return BinaryOffset$GeometryWeightOffset_getInstance();
      case 'GeometryVertexIndices':
        return BinaryOffset$GeometryVertexIndices_getInstance();
      case 'TimelineScale':
        return BinaryOffset$TimelineScale_getInstance();
      case 'TimelineOffset':
        return BinaryOffset$TimelineOffset_getInstance();
      case 'TimelineKeyFrameCount':
        return BinaryOffset$TimelineKeyFrameCount_getInstance();
      case 'TimelineFrameValueCount':
        return BinaryOffset$TimelineFrameValueCount_getInstance();
      case 'TimelineFrameValueOffset':
        return BinaryOffset$TimelineFrameValueOffset_getInstance();
      case 'TimelineFrameOffset':
        return BinaryOffset$TimelineFrameOffset_getInstance();
      case 'FramePosition':
        return BinaryOffset$FramePosition_getInstance();
      case 'FrameTweenType':
        return BinaryOffset$FrameTweenType_getInstance();
      case 'FrameTweenEasingOrCurveSampleCount':
        return BinaryOffset$FrameTweenEasingOrCurveSampleCount_getInstance();
      case 'FrameCurveSamples':
        return BinaryOffset$FrameCurveSamples_getInstance();
      case 'DeformVertexOffset':
        return BinaryOffset$DeformVertexOffset_getInstance();
      case 'DeformCount':
        return BinaryOffset$DeformCount_getInstance();
      case 'DeformValueCount':
        return BinaryOffset$DeformValueCount_getInstance();
      case 'DeformValueOffset':
        return BinaryOffset$DeformValueOffset_getInstance();
      case 'DeformFloatOffset':
        return BinaryOffset$DeformFloatOffset_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.BinaryOffset.' + name);
    }
  }
  BinaryOffset.valueOf_61zpoe$ = BinaryOffset$valueOf;
  function ArmatureType(name, ordinal, id) {
    Enum.call(this);
    this.id_5e5mxg$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ArmatureType_initFields() {
    ArmatureType_initFields = function () {
    };
    ArmatureType$Armature_instance = new ArmatureType('Armature', 0, 0);
    ArmatureType$MovieClip_instance = new ArmatureType('MovieClip', 1, 1);
    ArmatureType$Stage_instance = new ArmatureType('Stage', 2, 2);
    ArmatureType$Companion_getInstance();
  }
  Object.defineProperty(ArmatureType.prototype, 'id', {
    get: function () {
      return this.id_5e5mxg$_0;
    }
  });
  var ArmatureType$Armature_instance;
  function ArmatureType$Armature_getInstance() {
    ArmatureType_initFields();
    return ArmatureType$Armature_instance;
  }
  var ArmatureType$MovieClip_instance;
  function ArmatureType$MovieClip_getInstance() {
    ArmatureType_initFields();
    return ArmatureType$MovieClip_instance;
  }
  var ArmatureType$Stage_instance;
  function ArmatureType$Stage_getInstance() {
    ArmatureType_initFields();
    return ArmatureType$Stage_instance;
  }
  function ArmatureType$Companion() {
    ArmatureType$Companion_instance = this;
    IntEnumCompanion.call(this, ArmatureType$values());
  }
  ArmatureType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var ArmatureType$Companion_instance = null;
  function ArmatureType$Companion_getInstance() {
    ArmatureType_initFields();
    if (ArmatureType$Companion_instance === null) {
      new ArmatureType$Companion();
    }
    return ArmatureType$Companion_instance;
  }
  ArmatureType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArmatureType',
    interfaces: [IntEnum, Enum]
  };
  function ArmatureType$values() {
    return [ArmatureType$Armature_getInstance(), ArmatureType$MovieClip_getInstance(), ArmatureType$Stage_getInstance()];
  }
  ArmatureType.values = ArmatureType$values;
  function ArmatureType$valueOf(name) {
    switch (name) {
      case 'Armature':
        return ArmatureType$Armature_getInstance();
      case 'MovieClip':
        return ArmatureType$MovieClip_getInstance();
      case 'Stage':
        return ArmatureType$Stage_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.ArmatureType.' + name);
    }
  }
  ArmatureType.valueOf_61zpoe$ = ArmatureType$valueOf;
  function BoneType(name, ordinal, id) {
    Enum.call(this);
    this.id_iqjf6n$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BoneType_initFields() {
    BoneType_initFields = function () {
    };
    BoneType$Bone_instance = new BoneType('Bone', 0, 0);
    BoneType$Surface_instance = new BoneType('Surface', 1, 1);
    BoneType$Companion_getInstance();
  }
  Object.defineProperty(BoneType.prototype, 'id', {
    get: function () {
      return this.id_iqjf6n$_0;
    }
  });
  var BoneType$Bone_instance;
  function BoneType$Bone_getInstance() {
    BoneType_initFields();
    return BoneType$Bone_instance;
  }
  var BoneType$Surface_instance;
  function BoneType$Surface_getInstance() {
    BoneType_initFields();
    return BoneType$Surface_instance;
  }
  function BoneType$Companion() {
    BoneType$Companion_instance = this;
    IntEnumCompanion.call(this, BoneType$values());
  }
  BoneType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var BoneType$Companion_instance = null;
  function BoneType$Companion_getInstance() {
    BoneType_initFields();
    if (BoneType$Companion_instance === null) {
      new BoneType$Companion();
    }
    return BoneType$Companion_instance;
  }
  BoneType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoneType',
    interfaces: [IntEnum, Enum]
  };
  function BoneType$values() {
    return [BoneType$Bone_getInstance(), BoneType$Surface_getInstance()];
  }
  BoneType.values = BoneType$values;
  function BoneType$valueOf(name) {
    switch (name) {
      case 'Bone':
        return BoneType$Bone_getInstance();
      case 'Surface':
        return BoneType$Surface_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.BoneType.' + name);
    }
  }
  BoneType.valueOf_61zpoe$ = BoneType$valueOf;
  function DisplayType(name, ordinal, id) {
    Enum.call(this);
    this.id_9hiibn$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DisplayType_initFields() {
    DisplayType_initFields = function () {
    };
    DisplayType$None_instance = new DisplayType('None', 0, -1);
    DisplayType$Image_instance = new DisplayType('Image', 1, 0);
    DisplayType$Armature_instance = new DisplayType('Armature', 2, 1);
    DisplayType$Mesh_instance = new DisplayType('Mesh', 3, 2);
    DisplayType$BoundingBox_instance = new DisplayType('BoundingBox', 4, 3);
    DisplayType$Path_instance = new DisplayType('Path', 5, 4);
    DisplayType$Companion_getInstance();
  }
  Object.defineProperty(DisplayType.prototype, 'id', {
    get: function () {
      return this.id_9hiibn$_0;
    }
  });
  var DisplayType$None_instance;
  function DisplayType$None_getInstance() {
    DisplayType_initFields();
    return DisplayType$None_instance;
  }
  var DisplayType$Image_instance;
  function DisplayType$Image_getInstance() {
    DisplayType_initFields();
    return DisplayType$Image_instance;
  }
  var DisplayType$Armature_instance;
  function DisplayType$Armature_getInstance() {
    DisplayType_initFields();
    return DisplayType$Armature_instance;
  }
  var DisplayType$Mesh_instance;
  function DisplayType$Mesh_getInstance() {
    DisplayType_initFields();
    return DisplayType$Mesh_instance;
  }
  var DisplayType$BoundingBox_instance;
  function DisplayType$BoundingBox_getInstance() {
    DisplayType_initFields();
    return DisplayType$BoundingBox_instance;
  }
  var DisplayType$Path_instance;
  function DisplayType$Path_getInstance() {
    DisplayType_initFields();
    return DisplayType$Path_instance;
  }
  function DisplayType$Companion() {
    DisplayType$Companion_instance = this;
    IntEnumCompanion.call(this, DisplayType$values());
  }
  DisplayType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var DisplayType$Companion_instance = null;
  function DisplayType$Companion_getInstance() {
    DisplayType_initFields();
    if (DisplayType$Companion_instance === null) {
      new DisplayType$Companion();
    }
    return DisplayType$Companion_instance;
  }
  DisplayType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisplayType',
    interfaces: [IntEnum, Enum]
  };
  function DisplayType$values() {
    return [DisplayType$None_getInstance(), DisplayType$Image_getInstance(), DisplayType$Armature_getInstance(), DisplayType$Mesh_getInstance(), DisplayType$BoundingBox_getInstance(), DisplayType$Path_getInstance()];
  }
  DisplayType.values = DisplayType$values;
  function DisplayType$valueOf(name) {
    switch (name) {
      case 'None':
        return DisplayType$None_getInstance();
      case 'Image':
        return DisplayType$Image_getInstance();
      case 'Armature':
        return DisplayType$Armature_getInstance();
      case 'Mesh':
        return DisplayType$Mesh_getInstance();
      case 'BoundingBox':
        return DisplayType$BoundingBox_getInstance();
      case 'Path':
        return DisplayType$Path_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.DisplayType.' + name);
    }
  }
  DisplayType.valueOf_61zpoe$ = DisplayType$valueOf;
  function BoundingBoxType(name, ordinal, id) {
    Enum.call(this);
    this.id_axyrum$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BoundingBoxType_initFields() {
    BoundingBoxType_initFields = function () {
    };
    BoundingBoxType$None_instance = new BoundingBoxType('None', 0, -1);
    BoundingBoxType$Rectangle_instance = new BoundingBoxType('Rectangle', 1, 0);
    BoundingBoxType$Ellipse_instance = new BoundingBoxType('Ellipse', 2, 1);
    BoundingBoxType$Polygon_instance = new BoundingBoxType('Polygon', 3, 2);
    BoundingBoxType$Companion_getInstance();
  }
  Object.defineProperty(BoundingBoxType.prototype, 'id', {
    get: function () {
      return this.id_axyrum$_0;
    }
  });
  var BoundingBoxType$None_instance;
  function BoundingBoxType$None_getInstance() {
    BoundingBoxType_initFields();
    return BoundingBoxType$None_instance;
  }
  var BoundingBoxType$Rectangle_instance;
  function BoundingBoxType$Rectangle_getInstance() {
    BoundingBoxType_initFields();
    return BoundingBoxType$Rectangle_instance;
  }
  var BoundingBoxType$Ellipse_instance;
  function BoundingBoxType$Ellipse_getInstance() {
    BoundingBoxType_initFields();
    return BoundingBoxType$Ellipse_instance;
  }
  var BoundingBoxType$Polygon_instance;
  function BoundingBoxType$Polygon_getInstance() {
    BoundingBoxType_initFields();
    return BoundingBoxType$Polygon_instance;
  }
  function BoundingBoxType$Companion() {
    BoundingBoxType$Companion_instance = this;
    IntEnumCompanion.call(this, BoundingBoxType$values());
  }
  BoundingBoxType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var BoundingBoxType$Companion_instance = null;
  function BoundingBoxType$Companion_getInstance() {
    BoundingBoxType_initFields();
    if (BoundingBoxType$Companion_instance === null) {
      new BoundingBoxType$Companion();
    }
    return BoundingBoxType$Companion_instance;
  }
  BoundingBoxType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoundingBoxType',
    interfaces: [IntEnum, Enum]
  };
  function BoundingBoxType$values() {
    return [BoundingBoxType$None_getInstance(), BoundingBoxType$Rectangle_getInstance(), BoundingBoxType$Ellipse_getInstance(), BoundingBoxType$Polygon_getInstance()];
  }
  BoundingBoxType.values = BoundingBoxType$values;
  function BoundingBoxType$valueOf(name) {
    switch (name) {
      case 'None':
        return BoundingBoxType$None_getInstance();
      case 'Rectangle':
        return BoundingBoxType$Rectangle_getInstance();
      case 'Ellipse':
        return BoundingBoxType$Ellipse_getInstance();
      case 'Polygon':
        return BoundingBoxType$Polygon_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.BoundingBoxType.' + name);
    }
  }
  BoundingBoxType.valueOf_61zpoe$ = BoundingBoxType$valueOf;
  function ActionType(name, ordinal, id) {
    Enum.call(this);
    this.id_w098tr$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ActionType_initFields() {
    ActionType_initFields = function () {
    };
    ActionType$Play_instance = new ActionType('Play', 0, 0);
    ActionType$Frame_instance = new ActionType('Frame', 1, 10);
    ActionType$Sound_instance = new ActionType('Sound', 2, 11);
    ActionType$Companion_getInstance();
  }
  Object.defineProperty(ActionType.prototype, 'id', {
    get: function () {
      return this.id_w098tr$_0;
    }
  });
  var ActionType$Play_instance;
  function ActionType$Play_getInstance() {
    ActionType_initFields();
    return ActionType$Play_instance;
  }
  var ActionType$Frame_instance;
  function ActionType$Frame_getInstance() {
    ActionType_initFields();
    return ActionType$Frame_instance;
  }
  var ActionType$Sound_instance;
  function ActionType$Sound_getInstance() {
    ActionType_initFields();
    return ActionType$Sound_instance;
  }
  function ActionType$Companion() {
    ActionType$Companion_instance = this;
    IntEnumCompanion.call(this, ActionType$values());
  }
  ActionType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var ActionType$Companion_instance = null;
  function ActionType$Companion_getInstance() {
    ActionType_initFields();
    if (ActionType$Companion_instance === null) {
      new ActionType$Companion();
    }
    return ActionType$Companion_instance;
  }
  ActionType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionType',
    interfaces: [IntEnum, Enum]
  };
  function ActionType$values() {
    return [ActionType$Play_getInstance(), ActionType$Frame_getInstance(), ActionType$Sound_getInstance()];
  }
  ActionType.values = ActionType$values;
  function ActionType$valueOf(name) {
    switch (name) {
      case 'Play':
        return ActionType$Play_getInstance();
      case 'Frame':
        return ActionType$Frame_getInstance();
      case 'Sound':
        return ActionType$Sound_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.ActionType.' + name);
    }
  }
  ActionType.valueOf_61zpoe$ = ActionType$valueOf;
  function BlendMode_0(name, ordinal, id) {
    Enum.call(this);
    this.id_or4t6z$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function BlendMode_initFields() {
    BlendMode_initFields = function () {
    };
    BlendMode$Normal_instance = new BlendMode_0('Normal', 0, 0);
    BlendMode$Add_instance = new BlendMode_0('Add', 1, 1);
    BlendMode$Alpha_instance = new BlendMode_0('Alpha', 2, 2);
    BlendMode$Darken_instance = new BlendMode_0('Darken', 3, 3);
    BlendMode$Difference_instance = new BlendMode_0('Difference', 4, 4);
    BlendMode$Erase_instance = new BlendMode_0('Erase', 5, 5);
    BlendMode$HardLight_instance = new BlendMode_0('HardLight', 6, 6);
    BlendMode$Invert_instance = new BlendMode_0('Invert', 7, 7);
    BlendMode$Layer_instance = new BlendMode_0('Layer', 8, 8);
    BlendMode$Lighten_instance = new BlendMode_0('Lighten', 9, 9);
    BlendMode$Multiply_instance = new BlendMode_0('Multiply', 10, 10);
    BlendMode$Overlay_instance = new BlendMode_0('Overlay', 11, 11);
    BlendMode$Screen_instance = new BlendMode_0('Screen', 12, 12);
    BlendMode$Subtract_instance = new BlendMode_0('Subtract', 13, 13);
    BlendMode$Companion_getInstance();
  }
  Object.defineProperty(BlendMode_0.prototype, 'id', {
    get: function () {
      return this.id_or4t6z$_0;
    }
  });
  var BlendMode$Normal_instance;
  function BlendMode$Normal_getInstance() {
    BlendMode_initFields();
    return BlendMode$Normal_instance;
  }
  var BlendMode$Add_instance;
  function BlendMode$Add_getInstance() {
    BlendMode_initFields();
    return BlendMode$Add_instance;
  }
  var BlendMode$Alpha_instance;
  function BlendMode$Alpha_getInstance() {
    BlendMode_initFields();
    return BlendMode$Alpha_instance;
  }
  var BlendMode$Darken_instance;
  function BlendMode$Darken_getInstance() {
    BlendMode_initFields();
    return BlendMode$Darken_instance;
  }
  var BlendMode$Difference_instance;
  function BlendMode$Difference_getInstance() {
    BlendMode_initFields();
    return BlendMode$Difference_instance;
  }
  var BlendMode$Erase_instance;
  function BlendMode$Erase_getInstance() {
    BlendMode_initFields();
    return BlendMode$Erase_instance;
  }
  var BlendMode$HardLight_instance;
  function BlendMode$HardLight_getInstance() {
    BlendMode_initFields();
    return BlendMode$HardLight_instance;
  }
  var BlendMode$Invert_instance;
  function BlendMode$Invert_getInstance() {
    BlendMode_initFields();
    return BlendMode$Invert_instance;
  }
  var BlendMode$Layer_instance;
  function BlendMode$Layer_getInstance() {
    BlendMode_initFields();
    return BlendMode$Layer_instance;
  }
  var BlendMode$Lighten_instance;
  function BlendMode$Lighten_getInstance() {
    BlendMode_initFields();
    return BlendMode$Lighten_instance;
  }
  var BlendMode$Multiply_instance;
  function BlendMode$Multiply_getInstance() {
    BlendMode_initFields();
    return BlendMode$Multiply_instance;
  }
  var BlendMode$Overlay_instance;
  function BlendMode$Overlay_getInstance() {
    BlendMode_initFields();
    return BlendMode$Overlay_instance;
  }
  var BlendMode$Screen_instance;
  function BlendMode$Screen_getInstance() {
    BlendMode_initFields();
    return BlendMode$Screen_instance;
  }
  var BlendMode$Subtract_instance;
  function BlendMode$Subtract_getInstance() {
    BlendMode_initFields();
    return BlendMode$Subtract_instance;
  }
  function BlendMode$Companion() {
    BlendMode$Companion_instance = this;
    IntEnumCompanion.call(this, BlendMode$values());
  }
  BlendMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var BlendMode$Companion_instance = null;
  function BlendMode$Companion_getInstance() {
    BlendMode_initFields();
    if (BlendMode$Companion_instance === null) {
      new BlendMode$Companion();
    }
    return BlendMode$Companion_instance;
  }
  BlendMode_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BlendMode',
    interfaces: [IntEnum, Enum]
  };
  function BlendMode$values() {
    return [BlendMode$Normal_getInstance(), BlendMode$Add_getInstance(), BlendMode$Alpha_getInstance(), BlendMode$Darken_getInstance(), BlendMode$Difference_getInstance(), BlendMode$Erase_getInstance(), BlendMode$HardLight_getInstance(), BlendMode$Invert_getInstance(), BlendMode$Layer_getInstance(), BlendMode$Lighten_getInstance(), BlendMode$Multiply_getInstance(), BlendMode$Overlay_getInstance(), BlendMode$Screen_getInstance(), BlendMode$Subtract_getInstance()];
  }
  BlendMode_0.values = BlendMode$values;
  function BlendMode$valueOf(name) {
    switch (name) {
      case 'Normal':
        return BlendMode$Normal_getInstance();
      case 'Add':
        return BlendMode$Add_getInstance();
      case 'Alpha':
        return BlendMode$Alpha_getInstance();
      case 'Darken':
        return BlendMode$Darken_getInstance();
      case 'Difference':
        return BlendMode$Difference_getInstance();
      case 'Erase':
        return BlendMode$Erase_getInstance();
      case 'HardLight':
        return BlendMode$HardLight_getInstance();
      case 'Invert':
        return BlendMode$Invert_getInstance();
      case 'Layer':
        return BlendMode$Layer_getInstance();
      case 'Lighten':
        return BlendMode$Lighten_getInstance();
      case 'Multiply':
        return BlendMode$Multiply_getInstance();
      case 'Overlay':
        return BlendMode$Overlay_getInstance();
      case 'Screen':
        return BlendMode$Screen_getInstance();
      case 'Subtract':
        return BlendMode$Subtract_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.BlendMode.' + name);
    }
  }
  BlendMode_0.valueOf_61zpoe$ = BlendMode$valueOf;
  function TweenType(name, ordinal, id) {
    Enum.call(this);
    this.id_42bpui$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TweenType_initFields() {
    TweenType_initFields = function () {
    };
    TweenType$None_instance = new TweenType('None', 0, 0);
    TweenType$Line_instance = new TweenType('Line', 1, 1);
    TweenType$Curve_instance = new TweenType('Curve', 2, 2);
    TweenType$QuadIn_instance = new TweenType('QuadIn', 3, 3);
    TweenType$QuadOut_instance = new TweenType('QuadOut', 4, 4);
    TweenType$QuadInOut_instance = new TweenType('QuadInOut', 5, 5);
    TweenType$Companion_getInstance();
  }
  Object.defineProperty(TweenType.prototype, 'id', {
    get: function () {
      return this.id_42bpui$_0;
    }
  });
  var TweenType$None_instance;
  function TweenType$None_getInstance() {
    TweenType_initFields();
    return TweenType$None_instance;
  }
  var TweenType$Line_instance;
  function TweenType$Line_getInstance() {
    TweenType_initFields();
    return TweenType$Line_instance;
  }
  var TweenType$Curve_instance;
  function TweenType$Curve_getInstance() {
    TweenType_initFields();
    return TweenType$Curve_instance;
  }
  var TweenType$QuadIn_instance;
  function TweenType$QuadIn_getInstance() {
    TweenType_initFields();
    return TweenType$QuadIn_instance;
  }
  var TweenType$QuadOut_instance;
  function TweenType$QuadOut_getInstance() {
    TweenType_initFields();
    return TweenType$QuadOut_instance;
  }
  var TweenType$QuadInOut_instance;
  function TweenType$QuadInOut_getInstance() {
    TweenType_initFields();
    return TweenType$QuadInOut_instance;
  }
  function TweenType$Companion() {
    TweenType$Companion_instance = this;
    IntEnumCompanion.call(this, TweenType$values());
  }
  TweenType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var TweenType$Companion_instance = null;
  function TweenType$Companion_getInstance() {
    TweenType_initFields();
    if (TweenType$Companion_instance === null) {
      new TweenType$Companion();
    }
    return TweenType$Companion_instance;
  }
  TweenType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TweenType',
    interfaces: [IntEnum, Enum]
  };
  function TweenType$values() {
    return [TweenType$None_getInstance(), TweenType$Line_getInstance(), TweenType$Curve_getInstance(), TweenType$QuadIn_getInstance(), TweenType$QuadOut_getInstance(), TweenType$QuadInOut_getInstance()];
  }
  TweenType.values = TweenType$values;
  function TweenType$valueOf(name) {
    switch (name) {
      case 'None':
        return TweenType$None_getInstance();
      case 'Line':
        return TweenType$Line_getInstance();
      case 'Curve':
        return TweenType$Curve_getInstance();
      case 'QuadIn':
        return TweenType$QuadIn_getInstance();
      case 'QuadOut':
        return TweenType$QuadOut_getInstance();
      case 'QuadInOut':
        return TweenType$QuadInOut_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.TweenType.' + name);
    }
  }
  TweenType.valueOf_61zpoe$ = TweenType$valueOf;
  function TimelineType(name, ordinal, id) {
    Enum.call(this);
    this.id_oqrtwc$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function TimelineType_initFields() {
    TimelineType_initFields = function () {
    };
    TimelineType$Action_instance = new TimelineType('Action', 0, 0);
    TimelineType$ZOrder_instance = new TimelineType('ZOrder', 1, 1);
    TimelineType$BoneAll_instance = new TimelineType('BoneAll', 2, 10);
    TimelineType$BoneTranslate_instance = new TimelineType('BoneTranslate', 3, 11);
    TimelineType$BoneRotate_instance = new TimelineType('BoneRotate', 4, 12);
    TimelineType$BoneScale_instance = new TimelineType('BoneScale', 5, 13);
    TimelineType$Surface_instance = new TimelineType('Surface', 6, 50);
    TimelineType$BoneAlpha_instance = new TimelineType('BoneAlpha', 7, 60);
    TimelineType$SlotDisplay_instance = new TimelineType('SlotDisplay', 8, 20);
    TimelineType$SlotColor_instance = new TimelineType('SlotColor', 9, 21);
    TimelineType$SlotDeform_instance = new TimelineType('SlotDeform', 10, 22);
    TimelineType$SlotZIndex_instance = new TimelineType('SlotZIndex', 11, 23);
    TimelineType$SlotAlpha_instance = new TimelineType('SlotAlpha', 12, 24);
    TimelineType$IKConstraint_instance = new TimelineType('IKConstraint', 13, 30);
    TimelineType$AnimationProgress_instance = new TimelineType('AnimationProgress', 14, 40);
    TimelineType$AnimationWeight_instance = new TimelineType('AnimationWeight', 15, 41);
    TimelineType$AnimationParameter_instance = new TimelineType('AnimationParameter', 16, 42);
    TimelineType$Companion_getInstance();
  }
  Object.defineProperty(TimelineType.prototype, 'id', {
    get: function () {
      return this.id_oqrtwc$_0;
    }
  });
  var TimelineType$Action_instance;
  function TimelineType$Action_getInstance() {
    TimelineType_initFields();
    return TimelineType$Action_instance;
  }
  var TimelineType$ZOrder_instance;
  function TimelineType$ZOrder_getInstance() {
    TimelineType_initFields();
    return TimelineType$ZOrder_instance;
  }
  var TimelineType$BoneAll_instance;
  function TimelineType$BoneAll_getInstance() {
    TimelineType_initFields();
    return TimelineType$BoneAll_instance;
  }
  var TimelineType$BoneTranslate_instance;
  function TimelineType$BoneTranslate_getInstance() {
    TimelineType_initFields();
    return TimelineType$BoneTranslate_instance;
  }
  var TimelineType$BoneRotate_instance;
  function TimelineType$BoneRotate_getInstance() {
    TimelineType_initFields();
    return TimelineType$BoneRotate_instance;
  }
  var TimelineType$BoneScale_instance;
  function TimelineType$BoneScale_getInstance() {
    TimelineType_initFields();
    return TimelineType$BoneScale_instance;
  }
  var TimelineType$Surface_instance;
  function TimelineType$Surface_getInstance() {
    TimelineType_initFields();
    return TimelineType$Surface_instance;
  }
  var TimelineType$BoneAlpha_instance;
  function TimelineType$BoneAlpha_getInstance() {
    TimelineType_initFields();
    return TimelineType$BoneAlpha_instance;
  }
  var TimelineType$SlotDisplay_instance;
  function TimelineType$SlotDisplay_getInstance() {
    TimelineType_initFields();
    return TimelineType$SlotDisplay_instance;
  }
  var TimelineType$SlotColor_instance;
  function TimelineType$SlotColor_getInstance() {
    TimelineType_initFields();
    return TimelineType$SlotColor_instance;
  }
  var TimelineType$SlotDeform_instance;
  function TimelineType$SlotDeform_getInstance() {
    TimelineType_initFields();
    return TimelineType$SlotDeform_instance;
  }
  var TimelineType$SlotZIndex_instance;
  function TimelineType$SlotZIndex_getInstance() {
    TimelineType_initFields();
    return TimelineType$SlotZIndex_instance;
  }
  var TimelineType$SlotAlpha_instance;
  function TimelineType$SlotAlpha_getInstance() {
    TimelineType_initFields();
    return TimelineType$SlotAlpha_instance;
  }
  var TimelineType$IKConstraint_instance;
  function TimelineType$IKConstraint_getInstance() {
    TimelineType_initFields();
    return TimelineType$IKConstraint_instance;
  }
  var TimelineType$AnimationProgress_instance;
  function TimelineType$AnimationProgress_getInstance() {
    TimelineType_initFields();
    return TimelineType$AnimationProgress_instance;
  }
  var TimelineType$AnimationWeight_instance;
  function TimelineType$AnimationWeight_getInstance() {
    TimelineType_initFields();
    return TimelineType$AnimationWeight_instance;
  }
  var TimelineType$AnimationParameter_instance;
  function TimelineType$AnimationParameter_getInstance() {
    TimelineType_initFields();
    return TimelineType$AnimationParameter_instance;
  }
  function TimelineType$Companion() {
    TimelineType$Companion_instance = this;
    IntEnumCompanion.call(this, TimelineType$values());
  }
  TimelineType$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var TimelineType$Companion_instance = null;
  function TimelineType$Companion_getInstance() {
    TimelineType_initFields();
    if (TimelineType$Companion_instance === null) {
      new TimelineType$Companion();
    }
    return TimelineType$Companion_instance;
  }
  TimelineType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimelineType',
    interfaces: [IntEnum, Enum]
  };
  function TimelineType$values() {
    return [TimelineType$Action_getInstance(), TimelineType$ZOrder_getInstance(), TimelineType$BoneAll_getInstance(), TimelineType$BoneTranslate_getInstance(), TimelineType$BoneRotate_getInstance(), TimelineType$BoneScale_getInstance(), TimelineType$Surface_getInstance(), TimelineType$BoneAlpha_getInstance(), TimelineType$SlotDisplay_getInstance(), TimelineType$SlotColor_getInstance(), TimelineType$SlotDeform_getInstance(), TimelineType$SlotZIndex_getInstance(), TimelineType$SlotAlpha_getInstance(), TimelineType$IKConstraint_getInstance(), TimelineType$AnimationProgress_getInstance(), TimelineType$AnimationWeight_getInstance(), TimelineType$AnimationParameter_getInstance()];
  }
  TimelineType.values = TimelineType$values;
  function TimelineType$valueOf(name) {
    switch (name) {
      case 'Action':
        return TimelineType$Action_getInstance();
      case 'ZOrder':
        return TimelineType$ZOrder_getInstance();
      case 'BoneAll':
        return TimelineType$BoneAll_getInstance();
      case 'BoneTranslate':
        return TimelineType$BoneTranslate_getInstance();
      case 'BoneRotate':
        return TimelineType$BoneRotate_getInstance();
      case 'BoneScale':
        return TimelineType$BoneScale_getInstance();
      case 'Surface':
        return TimelineType$Surface_getInstance();
      case 'BoneAlpha':
        return TimelineType$BoneAlpha_getInstance();
      case 'SlotDisplay':
        return TimelineType$SlotDisplay_getInstance();
      case 'SlotColor':
        return TimelineType$SlotColor_getInstance();
      case 'SlotDeform':
        return TimelineType$SlotDeform_getInstance();
      case 'SlotZIndex':
        return TimelineType$SlotZIndex_getInstance();
      case 'SlotAlpha':
        return TimelineType$SlotAlpha_getInstance();
      case 'IKConstraint':
        return TimelineType$IKConstraint_getInstance();
      case 'AnimationProgress':
        return TimelineType$AnimationProgress_getInstance();
      case 'AnimationWeight':
        return TimelineType$AnimationWeight_getInstance();
      case 'AnimationParameter':
        return TimelineType$AnimationParameter_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.TimelineType.' + name);
    }
  }
  TimelineType.valueOf_61zpoe$ = TimelineType$valueOf;
  function OffsetMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function OffsetMode_initFields() {
    OffsetMode_initFields = function () {
    };
    OffsetMode$None_instance = new OffsetMode('None', 0);
    OffsetMode$Additive_instance = new OffsetMode('Additive', 1);
    OffsetMode$Override_instance = new OffsetMode('Override', 2);
  }
  var OffsetMode$None_instance;
  function OffsetMode$None_getInstance() {
    OffsetMode_initFields();
    return OffsetMode$None_instance;
  }
  var OffsetMode$Additive_instance;
  function OffsetMode$Additive_getInstance() {
    OffsetMode_initFields();
    return OffsetMode$Additive_instance;
  }
  var OffsetMode$Override_instance;
  function OffsetMode$Override_getInstance() {
    OffsetMode_initFields();
    return OffsetMode$Override_instance;
  }
  OffsetMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OffsetMode',
    interfaces: [Enum]
  };
  function OffsetMode$values() {
    return [OffsetMode$None_getInstance(), OffsetMode$Additive_getInstance(), OffsetMode$Override_getInstance()];
  }
  OffsetMode.values = OffsetMode$values;
  function OffsetMode$valueOf(name) {
    switch (name) {
      case 'None':
        return OffsetMode$None_getInstance();
      case 'Additive':
        return OffsetMode$Additive_getInstance();
      case 'Override':
        return OffsetMode$Override_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.OffsetMode.' + name);
    }
  }
  OffsetMode.valueOf_61zpoe$ = OffsetMode$valueOf;
  function AnimationFadeOutMode(name, ordinal, id) {
    Enum.call(this);
    this.id_iau1n6$_0 = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AnimationFadeOutMode_initFields() {
    AnimationFadeOutMode_initFields = function () {
    };
    AnimationFadeOutMode$SameLayer_instance = new AnimationFadeOutMode('SameLayer', 0, 1);
    AnimationFadeOutMode$SameGroup_instance = new AnimationFadeOutMode('SameGroup', 1, 2);
    AnimationFadeOutMode$SameLayerAndGroup_instance = new AnimationFadeOutMode('SameLayerAndGroup', 2, 3);
    AnimationFadeOutMode$All_instance = new AnimationFadeOutMode('All', 3, 4);
    AnimationFadeOutMode$Single_instance = new AnimationFadeOutMode('Single', 4, 5);
    AnimationFadeOutMode$Companion_getInstance();
  }
  Object.defineProperty(AnimationFadeOutMode.prototype, 'id', {
    get: function () {
      return this.id_iau1n6$_0;
    }
  });
  var AnimationFadeOutMode$SameLayer_instance;
  function AnimationFadeOutMode$SameLayer_getInstance() {
    AnimationFadeOutMode_initFields();
    return AnimationFadeOutMode$SameLayer_instance;
  }
  var AnimationFadeOutMode$SameGroup_instance;
  function AnimationFadeOutMode$SameGroup_getInstance() {
    AnimationFadeOutMode_initFields();
    return AnimationFadeOutMode$SameGroup_instance;
  }
  var AnimationFadeOutMode$SameLayerAndGroup_instance;
  function AnimationFadeOutMode$SameLayerAndGroup_getInstance() {
    AnimationFadeOutMode_initFields();
    return AnimationFadeOutMode$SameLayerAndGroup_instance;
  }
  var AnimationFadeOutMode$All_instance;
  function AnimationFadeOutMode$All_getInstance() {
    AnimationFadeOutMode_initFields();
    return AnimationFadeOutMode$All_instance;
  }
  var AnimationFadeOutMode$Single_instance;
  function AnimationFadeOutMode$Single_getInstance() {
    AnimationFadeOutMode_initFields();
    return AnimationFadeOutMode$Single_instance;
  }
  function AnimationFadeOutMode$Companion() {
    AnimationFadeOutMode$Companion_instance = this;
    IntEnumCompanion.call(this, AnimationFadeOutMode$values());
  }
  AnimationFadeOutMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [IntEnumCompanion]
  };
  var AnimationFadeOutMode$Companion_instance = null;
  function AnimationFadeOutMode$Companion_getInstance() {
    AnimationFadeOutMode_initFields();
    if (AnimationFadeOutMode$Companion_instance === null) {
      new AnimationFadeOutMode$Companion();
    }
    return AnimationFadeOutMode$Companion_instance;
  }
  AnimationFadeOutMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationFadeOutMode',
    interfaces: [IntEnum, Enum]
  };
  function AnimationFadeOutMode$values() {
    return [AnimationFadeOutMode$SameLayer_getInstance(), AnimationFadeOutMode$SameGroup_getInstance(), AnimationFadeOutMode$SameLayerAndGroup_getInstance(), AnimationFadeOutMode$All_getInstance(), AnimationFadeOutMode$Single_getInstance()];
  }
  AnimationFadeOutMode.values = AnimationFadeOutMode$values;
  function AnimationFadeOutMode$valueOf(name) {
    switch (name) {
      case 'SameLayer':
        return AnimationFadeOutMode$SameLayer_getInstance();
      case 'SameGroup':
        return AnimationFadeOutMode$SameGroup_getInstance();
      case 'SameLayerAndGroup':
        return AnimationFadeOutMode$SameLayerAndGroup_getInstance();
      case 'All':
        return AnimationFadeOutMode$All_getInstance();
      case 'Single':
        return AnimationFadeOutMode$Single_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.AnimationFadeOutMode.' + name);
    }
  }
  AnimationFadeOutMode.valueOf_61zpoe$ = AnimationFadeOutMode$valueOf;
  function AnimationBlendType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AnimationBlendType_initFields() {
    AnimationBlendType_initFields = function () {
    };
    AnimationBlendType$None_instance = new AnimationBlendType('None', 0);
    AnimationBlendType$E1D_instance = new AnimationBlendType('E1D', 1);
  }
  var AnimationBlendType$None_instance;
  function AnimationBlendType$None_getInstance() {
    AnimationBlendType_initFields();
    return AnimationBlendType$None_instance;
  }
  var AnimationBlendType$E1D_instance;
  function AnimationBlendType$E1D_getInstance() {
    AnimationBlendType_initFields();
    return AnimationBlendType$E1D_instance;
  }
  AnimationBlendType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationBlendType',
    interfaces: [Enum]
  };
  function AnimationBlendType$values() {
    return [AnimationBlendType$None_getInstance(), AnimationBlendType$E1D_getInstance()];
  }
  AnimationBlendType.values = AnimationBlendType$values;
  function AnimationBlendType$valueOf(name) {
    switch (name) {
      case 'None':
        return AnimationBlendType$None_getInstance();
      case 'E1D':
        return AnimationBlendType$E1D_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.AnimationBlendType.' + name);
    }
  }
  AnimationBlendType.valueOf_61zpoe$ = AnimationBlendType$valueOf;
  function AnimationBlendMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function AnimationBlendMode_initFields() {
    AnimationBlendMode_initFields = function () {
    };
    AnimationBlendMode$Additive_instance = new AnimationBlendMode('Additive', 0);
    AnimationBlendMode$Override_instance = new AnimationBlendMode('Override', 1);
  }
  var AnimationBlendMode$Additive_instance;
  function AnimationBlendMode$Additive_getInstance() {
    AnimationBlendMode_initFields();
    return AnimationBlendMode$Additive_instance;
  }
  var AnimationBlendMode$Override_instance;
  function AnimationBlendMode$Override_getInstance() {
    AnimationBlendMode_initFields();
    return AnimationBlendMode$Override_instance;
  }
  AnimationBlendMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationBlendMode',
    interfaces: [Enum]
  };
  function AnimationBlendMode$values() {
    return [AnimationBlendMode$Additive_getInstance(), AnimationBlendMode$Override_getInstance()];
  }
  AnimationBlendMode.values = AnimationBlendMode$values;
  function AnimationBlendMode$valueOf(name) {
    switch (name) {
      case 'Additive':
        return AnimationBlendMode$Additive_getInstance();
      case 'Override':
        return AnimationBlendMode$Override_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.AnimationBlendMode.' + name);
    }
  }
  AnimationBlendMode.valueOf_61zpoe$ = AnimationBlendMode$valueOf;
  function ConstraintType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function ConstraintType_initFields() {
    ConstraintType_initFields = function () {
    };
    ConstraintType$IK_instance = new ConstraintType('IK', 0);
    ConstraintType$Path_instance = new ConstraintType('Path', 1);
  }
  var ConstraintType$IK_instance;
  function ConstraintType$IK_getInstance() {
    ConstraintType_initFields();
    return ConstraintType$IK_instance;
  }
  var ConstraintType$Path_instance;
  function ConstraintType$Path_getInstance() {
    ConstraintType_initFields();
    return ConstraintType$Path_instance;
  }
  ConstraintType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstraintType',
    interfaces: [Enum]
  };
  function ConstraintType$values() {
    return [ConstraintType$IK_getInstance(), ConstraintType$Path_getInstance()];
  }
  ConstraintType.values = ConstraintType$values;
  function ConstraintType$valueOf(name) {
    switch (name) {
      case 'IK':
        return ConstraintType$IK_getInstance();
      case 'Path':
        return ConstraintType$Path_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.ConstraintType.' + name);
    }
  }
  ConstraintType.valueOf_61zpoe$ = ConstraintType$valueOf;
  function PositionMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PositionMode_initFields() {
    PositionMode_initFields = function () {
    };
    PositionMode$Fixed_instance = new PositionMode('Fixed', 0);
    PositionMode$Percent_instance = new PositionMode('Percent', 1);
  }
  var PositionMode$Fixed_instance;
  function PositionMode$Fixed_getInstance() {
    PositionMode_initFields();
    return PositionMode$Fixed_instance;
  }
  var PositionMode$Percent_instance;
  function PositionMode$Percent_getInstance() {
    PositionMode_initFields();
    return PositionMode$Percent_instance;
  }
  PositionMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PositionMode',
    interfaces: [Enum]
  };
  function PositionMode$values() {
    return [PositionMode$Fixed_getInstance(), PositionMode$Percent_getInstance()];
  }
  PositionMode.values = PositionMode$values;
  function PositionMode$valueOf(name) {
    switch (name) {
      case 'Fixed':
        return PositionMode$Fixed_getInstance();
      case 'Percent':
        return PositionMode$Percent_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.PositionMode.' + name);
    }
  }
  PositionMode.valueOf_61zpoe$ = PositionMode$valueOf;
  function SpacingMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function SpacingMode_initFields() {
    SpacingMode_initFields = function () {
    };
    SpacingMode$Length_instance = new SpacingMode('Length', 0);
    SpacingMode$Fixed_instance = new SpacingMode('Fixed', 1);
    SpacingMode$Percent_instance = new SpacingMode('Percent', 2);
  }
  var SpacingMode$Length_instance;
  function SpacingMode$Length_getInstance() {
    SpacingMode_initFields();
    return SpacingMode$Length_instance;
  }
  var SpacingMode$Fixed_instance;
  function SpacingMode$Fixed_getInstance() {
    SpacingMode_initFields();
    return SpacingMode$Fixed_instance;
  }
  var SpacingMode$Percent_instance;
  function SpacingMode$Percent_getInstance() {
    SpacingMode_initFields();
    return SpacingMode$Percent_instance;
  }
  SpacingMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpacingMode',
    interfaces: [Enum]
  };
  function SpacingMode$values() {
    return [SpacingMode$Length_getInstance(), SpacingMode$Fixed_getInstance(), SpacingMode$Percent_getInstance()];
  }
  SpacingMode.values = SpacingMode$values;
  function SpacingMode$valueOf(name) {
    switch (name) {
      case 'Length':
        return SpacingMode$Length_getInstance();
      case 'Fixed':
        return SpacingMode$Fixed_getInstance();
      case 'Percent':
        return SpacingMode$Percent_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.SpacingMode.' + name);
    }
  }
  SpacingMode.valueOf_61zpoe$ = SpacingMode$valueOf;
  function RotateMode(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function RotateMode_initFields() {
    RotateMode_initFields = function () {
    };
    RotateMode$Tangent_instance = new RotateMode('Tangent', 0);
    RotateMode$Chain_instance = new RotateMode('Chain', 1);
    RotateMode$ChainScale_instance = new RotateMode('ChainScale', 2);
  }
  var RotateMode$Tangent_instance;
  function RotateMode$Tangent_getInstance() {
    RotateMode_initFields();
    return RotateMode$Tangent_instance;
  }
  var RotateMode$Chain_instance;
  function RotateMode$Chain_getInstance() {
    RotateMode_initFields();
    return RotateMode$Chain_instance;
  }
  var RotateMode$ChainScale_instance;
  function RotateMode$ChainScale_getInstance() {
    RotateMode_initFields();
    return RotateMode$ChainScale_instance;
  }
  RotateMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RotateMode',
    interfaces: [Enum]
  };
  function RotateMode$values() {
    return [RotateMode$Tangent_getInstance(), RotateMode$Chain_getInstance(), RotateMode$ChainScale_getInstance()];
  }
  RotateMode.values = RotateMode$values;
  function RotateMode$valueOf(name) {
    switch (name) {
      case 'Tangent':
        return RotateMode$Tangent_getInstance();
      case 'Chain':
        return RotateMode$Chain_getInstance();
      case 'ChainScale':
        return RotateMode$ChainScale_getInstance();
      default:throwISE('No enum constant com.dragonbones.core.RotateMode.' + name);
    }
  }
  RotateMode.valueOf_61zpoe$ = RotateMode$valueOf;
  function DragonBones(eventManager) {
    DragonBones$Companion_getInstance();
    this._clock_0 = WorldClock_init();
    this._eventManager_0 = eventManager;
  }
  function DragonBones$Companion() {
    DragonBones$Companion_instance = this;
    this.VERSION = '5.7.000';
    this.yDown = true;
    this.debug = false;
    this.debugDraw = false;
  }
  DragonBones$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DragonBones$Companion_instance = null;
  function DragonBones$Companion_getInstance() {
    if (DragonBones$Companion_instance === null) {
      new DragonBones$Companion();
    }
    return DragonBones$Companion_instance;
  }
  Object.defineProperty(DragonBones.prototype, 'clock', {
    get: function () {
      return this._clock_0;
    }
  });
  Object.defineProperty(DragonBones.prototype, 'eventManager', {
    get: function () {
      return this._eventManager_0;
    }
  });
  DragonBones.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DragonBones',
    interfaces: []
  };
  function EventObject() {
    EventObject$Companion_getInstance();
    BaseObject.call(this);
    this.time = 0.0;
    this.type = '';
    this.name = '';
    this.armature_hj6x21$_0 = this.armature_hj6x21$_0;
    this.bone = null;
    this.slot = null;
    this.animationState_taxp5n$_0 = this.animationState_taxp5n$_0;
    this.actionData = null;
    this.data = null;
  }
  function EventObject$Companion() {
    EventObject$Companion_instance = this;
    this.START = 'start';
    this.LOOP_COMPLETE = 'loopComplete';
    this.COMPLETE = 'complete';
    this.FADE_IN = 'fadeIn';
    this.FADE_IN_COMPLETE = 'fadeInComplete';
    this.FADE_OUT = 'fadeOut';
    this.FADE_OUT_COMPLETE = 'fadeOutComplete';
    this.FRAME_EVENT = 'frameEvent';
    this.SOUND_EVENT = 'soundEvent';
  }
  EventObject$Companion.prototype.actionDataToInstance_knn78h$ = function (data, instance, armature) {
    var tmp$, tmp$_0;
    if (data.type === ActionType$Play_getInstance()) {
      instance.type = EventObject$Companion_getInstance().FRAME_EVENT;
    }
     else {
      instance.type = data.type === ActionType$Frame_getInstance() ? EventObject$Companion_getInstance().FRAME_EVENT : EventObject$Companion_getInstance().SOUND_EVENT;
    }
    instance.name = data.name;
    instance.armature = armature;
    instance.actionData = data;
    instance.data = data.data;
    if (data.bone != null) {
      instance.bone = armature.getBone_pdl1vj$((tmp$ = data.bone) != null ? tmp$.name : null);
    }
    if (data.slot != null) {
      instance.slot = armature.getSlot_pdl1vj$((tmp$_0 = data.slot) != null ? tmp$_0.name : null);
    }
  };
  EventObject$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EventObject$Companion_instance = null;
  function EventObject$Companion_getInstance() {
    if (EventObject$Companion_instance === null) {
      new EventObject$Companion();
    }
    return EventObject$Companion_instance;
  }
  EventObject.prototype.toString = function () {
    return '[class dragonBones.EventObject]';
  };
  Object.defineProperty(EventObject.prototype, 'armature', {
    get: function () {
      if (this.armature_hj6x21$_0 == null)
        return throwUPAE('armature');
      return this.armature_hj6x21$_0;
    },
    set: function (armature) {
      this.armature_hj6x21$_0 = armature;
    }
  });
  Object.defineProperty(EventObject.prototype, 'animationState', {
    get: function () {
      if (this.animationState_taxp5n$_0 == null)
        return throwUPAE('animationState');
      return this.animationState_taxp5n$_0;
    },
    set: function (animationState) {
      this.animationState_taxp5n$_0 = animationState;
    }
  });
  EventObject.prototype._onClear = function () {
    this.time = 0.0;
    this.type = '';
    this.name = '';
    this.bone = null;
    this.slot = null;
    this.actionData = null;
    this.data = null;
  };
  EventObject.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EventObject',
    interfaces: [BaseObject]
  };
  function IEventDispatcher() {
  }
  IEventDispatcher.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IEventDispatcher',
    interfaces: []
  };
  function BaseFactory() {
    BaseFactory$Companion_getInstance();
    this.autoSearch = false;
    this._dragonBonesDataMap = LinkedHashMap_init();
    this._textureAtlasDataMap = LinkedHashMap_init();
    this._dragonBones_uxvdzv$_0 = this._dragonBones_uxvdzv$_0;
    this._dataParser_1eho52$_0 = this._dataParser_1eho52$_0;
  }
  function BaseFactory$Companion() {
    BaseFactory$Companion_instance = this;
    this._objectParser_0 = new ObjectDataParser();
    this._binaryParser_0 = new BinaryDataParser();
  }
  BaseFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BaseFactory$Companion_instance = null;
  function BaseFactory$Companion_getInstance() {
    if (BaseFactory$Companion_instance === null) {
      new BaseFactory$Companion();
    }
    return BaseFactory$Companion_instance;
  }
  Object.defineProperty(BaseFactory.prototype, '_dragonBones', {
    get: function () {
      if (this._dragonBones_uxvdzv$_0 == null)
        return throwUPAE('_dragonBones');
      return this._dragonBones_uxvdzv$_0;
    },
    set: function (_dragonBones) {
      this._dragonBones_uxvdzv$_0 = _dragonBones;
    }
  });
  Object.defineProperty(BaseFactory.prototype, '_dataParser', {
    get: function () {
      if (this._dataParser_1eho52$_0 == null)
        return throwUPAE('_dataParser');
      return this._dataParser_1eho52$_0;
    },
    set: function (_dataParser) {
      this._dataParser_1eho52$_0 = _dataParser;
    }
  });
  BaseFactory.prototype._isSupportMesh = function () {
    return true;
  };
  BaseFactory.prototype._getTextureData_puj7f4$ = function (textureAtlasName, textureName) {
    var tmp$, tmp$_0, tmp$_1;
    var $receiver = this._textureAtlasDataMap;
    var tmp$_2;
    if ((Kotlin.isType(tmp$_2 = $receiver, Map) ? tmp$_2 : throwCCE()).containsKey_11rb$(textureAtlasName)) {
      tmp$ = ensureNotNull(this._textureAtlasDataMap.get_11rb$(textureAtlasName)).iterator();
      while (tmp$.hasNext()) {
        var textureAtlasData = tmp$.next();
        var textureData = textureAtlasData.getTexture_61zpoe$(textureName);
        if (textureData != null) {
          return textureData;
        }
      }
    }
    if (this.autoSearch) {
      tmp$_0 = this._textureAtlasDataMap.keys.iterator();
      while (tmp$_0.hasNext()) {
        var k = tmp$_0.next();
        tmp$_1 = ensureNotNull(this._textureAtlasDataMap.get_11rb$(k)).iterator();
        while (tmp$_1.hasNext()) {
          var textureAtlasData_0 = tmp$_1.next();
          if (textureAtlasData_0.autoSearch) {
            var textureData_0 = textureAtlasData_0.getTexture_61zpoe$(textureName);
            if (textureData_0 != null) {
              return textureData_0;
            }
          }
        }
      }
    }
    return null;
  };
  BaseFactory.prototype._fillBuildArmaturePackage_5qd096$ = function (dataPackage, dragonBonesName, armatureName, skinName, textureAtlasName) {
    var tmp$, tmp$_0;
    var dragonBonesName_0 = dragonBonesName;
    var dragonBonesData = null;
    var armatureData = null;
    if (dragonBonesName_0.length > 0) {
      var $receiver = this._dragonBonesDataMap;
      var key = dragonBonesName_0;
      var tmp$_1;
      if ((Kotlin.isType(tmp$_1 = $receiver, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(key)) {
        dragonBonesData = this._dragonBonesDataMap.get_11rb$(dragonBonesName_0);
        armatureData = dragonBonesData != null ? dragonBonesData.getArmature_61zpoe$(armatureName) : null;
      }
    }
    if (armatureData == null && (dragonBonesName_0.length === 0 || this.autoSearch)) {
      tmp$ = this._dragonBonesDataMap.keys.iterator();
      while (tmp$.hasNext()) {
        var k = tmp$.next();
        dragonBonesData = this._dragonBonesDataMap.get_11rb$(k);
        if (dragonBonesName_0.length === 0 || ensureNotNull(dragonBonesData).autoSearch) {
          armatureData = dragonBonesData != null ? dragonBonesData.getArmature_61zpoe$(armatureName) : null;
          if (armatureData != null) {
            dragonBonesName_0 = k;
            break;
          }
        }
      }
    }
    if (armatureData != null) {
      dataPackage.dataName = dragonBonesName_0;
      dataPackage.textureAtlasName = textureAtlasName;
      dataPackage.data = dragonBonesData;
      dataPackage.armature = armatureData;
      dataPackage.skin = null;
      if (skinName.length > 0) {
        dataPackage.skin = armatureData.getSkin_61zpoe$(skinName);
        if (dataPackage.skin == null && this.autoSearch) {
          tmp$_0 = this._dragonBonesDataMap.keys.iterator();
          while (tmp$_0.hasNext()) {
            var k_0 = tmp$_0.next();
            var skinDragonBonesData = ensureNotNull(ensureNotNull(this._dragonBonesDataMap).get_11rb$(k_0));
            var skinArmatureData = skinDragonBonesData != null ? skinDragonBonesData.getArmature_61zpoe$(skinName) : null;
            if (skinArmatureData != null) {
              dataPackage.skin = skinArmatureData.defaultSkin;
              break;
            }
          }
        }
      }
      if (dataPackage.skin == null) {
        dataPackage.skin = armatureData.defaultSkin;
      }
      return true;
    }
    return false;
  };
  BaseFactory.prototype._buildBones_u8bst7$ = function (dataPackage, armature) {
    var tmp$;
    tmp$ = ensureNotNull(dataPackage.armature).sortedBones.iterator();
    while (tmp$.hasNext()) {
      var boneData = tmp$.next();
      var bone = boneData.type === BoneType$Bone_getInstance() ? BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(Bone)) : BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(Surface));
      bone.init_7qxzn9$(boneData, armature);
    }
  };
  BaseFactory.prototype._buildSlots_u8bst7$ = function (dataPackage, armature) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var currentSkin = dataPackage.skin;
    var defaultSkin = (tmp$ = dataPackage.armature) != null ? tmp$.defaultSkin : null;
    if (currentSkin == null || defaultSkin == null) {
      return;
    }
    var skinSlots = LinkedHashMap_init();
    tmp$_0 = defaultSkin.displays.keys.iterator();
    while (tmp$_0.hasNext()) {
      var k = tmp$_0.next();
      var displays = defaultSkin.getDisplays_pdl1vj$(k);
      var value = ensureNotNull(displays);
      skinSlots.put_xwzc9p$(k, value);
    }
    if (!equals(currentSkin, defaultSkin)) {
      tmp$_1 = currentSkin.displays.keys.iterator();
      while (tmp$_1.hasNext()) {
        var k_0 = tmp$_1.next();
        var displays_0 = currentSkin.getDisplays_pdl1vj$(k_0);
        var value_0 = ensureNotNull(displays_0);
        skinSlots.put_xwzc9p$(k_0, value_0);
      }
    }
    tmp$_2 = ensureNotNull(ensureNotNull(dataPackage).armature).sortedSlots.iterator();
    while (tmp$_2.hasNext()) {
      var slotData = tmp$_2.next();
      var displayDatas = skinSlots.get_11rb$(slotData.name);
      var slot = this._buildSlot_fs0k2h$(dataPackage, slotData, armature);
      if (displayDatas != null) {
        slot.displayFrameCount = get_length_1(displayDatas);
        tmp$_3 = slot.displayFrameCount;
        for (var i = 0; i < tmp$_3; i++) {
          var displayData = displayDatas.get_za3lpa$(i);
          slot.replaceRawDisplayData_4o5vqv$(displayData, i);
          if (displayData != null) {
            if (dataPackage.textureAtlasName.length > 0) {
              var textureData = this._getTextureData_puj7f4$(dataPackage.textureAtlasName, displayData.path);
              slot.replaceTextureData_vue3bk$(textureData, i);
            }
            var display = this._getSlotDisplay_1k2eo1$(dataPackage, displayData, slot);
            slot.replaceDisplay_cypnoy$(display, i);
          }
           else {
            slot.replaceDisplay_cypnoy$(null);
          }
        }
      }
      slot._setDisplayIndex_fzusl$(slotData.displayIndex, true);
    }
  };
  BaseFactory.prototype._buildConstraints_u8bst7$ = function (dataPackage, armature) {
    var tmp$;
    var constraints = ensureNotNull(dataPackage.armature).constraints;
    tmp$ = constraints.keys.iterator();
    while (tmp$.hasNext()) {
      var k = tmp$.next();
      var constraintData = constraints.get_11rb$(k);
      switch (ensureNotNull(constraintData).type.name) {
        case 'IK':
          var ikConstraint = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(IKConstraint));
          ikConstraint.init_jwnilu$(constraintData, armature);
          armature._addConstraint_ineuod$(ikConstraint);
          break;
        case 'Path':
          var pathConstraint = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(PathConstraint));
          pathConstraint.init_jwnilu$(constraintData, armature);
          armature._addConstraint_ineuod$(pathConstraint);
          break;
        default:var constraint = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(IKConstraint));
          constraint.init_jwnilu$(constraintData, armature);
          armature._addConstraint_ineuod$(constraint);
          break;
      }
    }
  };
  BaseFactory.prototype._buildChildArmature_78x8c8$ = function (dataPackage, _slot, displayData) {
    return this.buildArmature_w74nik$(displayData.path, ensureNotNull(dataPackage).dataName, '', ensureNotNull(dataPackage).textureAtlasName);
  };
  BaseFactory.prototype._getSlotDisplay_1k2eo1$ = function (dataPackage, displayData, slot) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var dataName = (tmp$ = dataPackage != null ? dataPackage.dataName : null) != null ? tmp$ : ensureNotNull(ensureNotNull(displayData.parent.parent).parent).name;
    var display = null;
    switch (displayData.type.name) {
      case 'Image':
        var imageDisplayData = Kotlin.isType(tmp$_0 = displayData, ImageDisplayData) ? tmp$_0 : throwCCE();
        if (imageDisplayData.texture == null) {
          imageDisplayData.texture = this._getTextureData_puj7f4$(dataName, displayData.path);
        }

        display = slot.rawDisplay;
        break;
      case 'Mesh':
        var meshDisplayData = Kotlin.isType(tmp$_1 = displayData, MeshDisplayData) ? tmp$_1 : throwCCE();
        if (meshDisplayData.texture == null) {
          meshDisplayData.texture = this._getTextureData_puj7f4$(dataName, meshDisplayData.path);
        }

        if (this._isSupportMesh()) {
          display = slot.meshDisplay;
        }
         else {
          display = slot.rawDisplay;
        }

        break;
      case 'Armature':
        var armatureDisplayData = Kotlin.isType(tmp$_2 = displayData, ArmatureDisplayData) ? tmp$_2 : throwCCE();
        var childArmature = this._buildChildArmature_78x8c8$(dataPackage, slot, armatureDisplayData);
        if (childArmature != null) {
          childArmature.inheritAnimation = armatureDisplayData.inheritAnimation;
          if (!childArmature.inheritAnimation) {
            var actions = get_length_1(armatureDisplayData.actions) > 0 ? armatureDisplayData.actions : childArmature.armatureData.defaultActions;
            if (get_length_1(actions) > 0) {
              tmp$_3 = actions.iterator();
              while (tmp$_3.hasNext()) {
                var action = tmp$_3.next();
                var eventObject = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(EventObject));
                EventObject$Companion_getInstance().actionDataToInstance_knn78h$(action, eventObject, slot.armature);
                eventObject.slot = slot;
                slot.armature._bufferAction_8f84tb$(eventObject, false);
              }
            }
             else {
              childArmature.animation.play_9d67ql$();
            }
          }
          armatureDisplayData.armature = childArmature.armatureData;
        }

        display = childArmature;
        break;
      case 'BoundingBox':
        break;
      default:break;
    }
    return ensureNotNull(display);
  };
  BaseFactory.prototype.parseDragonBonesData_md6wsg$ = function (rawData, name, scale) {
    if (name === void 0)
      name = null;
    if (scale === void 0)
      scale = 1.0;
    var dataParser = Kotlin.isType(rawData, ArrayBuffer) ? BaseFactory$Companion_getInstance()._binaryParser_0 : this._dataParser;
    var dragonBonesData = dataParser.parseDragonBonesData_p20sj2$(rawData, scale);
    while (true) {
      var textureAtlasData = this._buildTextureAtlasData_dju0lx$(null, null);
      if (dataParser.parseTextureAtlasData_fec78$(null, textureAtlasData, scale)) {
        this.addTextureAtlasData_xtit01$(textureAtlasData, name);
      }
       else {
        textureAtlasData.returnToPool();
        break;
      }
    }
    if (dragonBonesData != null) {
      this.addDragonBonesData_y2pl9x$(dragonBonesData, name);
    }
    return dragonBonesData;
  };
  BaseFactory.prototype.parseDragonBonesDataJson_4aqnz$ = function (json, name, scale) {
    if (name === void 0)
      name = null;
    if (scale === void 0)
      scale = 1.0;
    return this.parseDragonBonesData_md6wsg$(json, name, scale);
  };
  BaseFactory.prototype.parseTextureAtlasData_go2jhv$ = function (rawData, textureAtlas, name, scale) {
    if (name === void 0)
      name = null;
    if (scale === void 0)
      scale = 1.0;
    var textureAtlasData = this._buildTextureAtlasData_dju0lx$(null, null);
    this._dataParser.parseTextureAtlasData_fec78$(rawData, textureAtlasData, scale);
    this._buildTextureAtlasData_dju0lx$(textureAtlasData, textureAtlas);
    this.addTextureAtlasData_xtit01$(textureAtlasData, name);
    return textureAtlasData;
  };
  BaseFactory.prototype.updateTextureAtlases_3r0dep$ = function (textureAtlases, name) {
    var tmp$;
    var textureAtlasDatas = this.getTextureAtlasData_61zpoe$(name);
    if (textureAtlasDatas != null) {
      tmp$ = textureAtlasDatas.size;
      for (var i = 0; i < tmp$; i++) {
        if (i < textureAtlases.length) {
          this._buildTextureAtlasData_dju0lx$(textureAtlasDatas.get_za3lpa$(i), textureAtlases[i]);
        }
      }
    }
  };
  BaseFactory.prototype.getDragonBonesData_61zpoe$ = function (name) {
    return this._dragonBonesDataMap.get_11rb$(name);
  };
  BaseFactory.prototype.addDragonBonesData_y2pl9x$ = function (data, name) {
    if (name === void 0)
      name = null;
    var name_0 = name != null ? name : data.name;
    var $receiver = this._dragonBonesDataMap;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(name_0)) {
      if (equals(this._dragonBonesDataMap.get_11rb$(name_0), data))
        return;
      console_getInstance().warn_vqirvp$(['Can not add same name data: ' + name_0]);
      return;
    }
    this._dragonBonesDataMap.put_xwzc9p$(name_0, data);
  };
  BaseFactory.prototype.removeDragonBonesData_ivxn3r$ = function (name, disposeData) {
    if (disposeData === void 0)
      disposeData = true;
    var tmp$;
    var $receiver = this._dragonBonesDataMap;
    var tmp$_0;
    if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(name)) {
      if (disposeData) {
        (tmp$ = this._dragonBonesDataMap.get_11rb$(name)) != null ? (tmp$.returnToPool(), Unit) : null;
      }
      this._dragonBonesDataMap.remove_11rb$(name);
    }
  };
  BaseFactory.prototype.getTextureAtlasData_61zpoe$ = function (name) {
    return ensureNotNull(this._textureAtlasDataMap.get_11rb$(name));
  };
  BaseFactory.prototype.addTextureAtlasData_xtit01$ = function (data, name) {
    if (name === void 0)
      name = null;
    var name_0 = name != null ? name : data.name;
    var $receiver = this._textureAtlasDataMap;
    var tmp$;
    var value = $receiver.get_11rb$(name_0);
    if (value == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(name_0, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    var textureAtlasList = tmp$;
    if (textureAtlasList.indexOf_11rb$(data) < 0) {
      push(textureAtlasList, data);
    }
  };
  BaseFactory.prototype.removeTextureAtlasData_ivxn3r$ = function (name, disposeData) {
    if (disposeData === void 0)
      disposeData = true;
    var tmp$;
    var $receiver = this._textureAtlasDataMap;
    var tmp$_0;
    if ((Kotlin.isType(tmp$_0 = $receiver, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(name)) {
      var textureAtlasDataList = ensureNotNull(this._textureAtlasDataMap.get_11rb$(name));
      if (disposeData) {
        tmp$ = textureAtlasDataList.iterator();
        while (tmp$.hasNext()) {
          var textureAtlasData = tmp$.next();
          textureAtlasData.returnToPool();
        }
      }
      this._textureAtlasDataMap.remove_11rb$(name);
    }
  };
  BaseFactory.prototype.getArmatureData_puj7f4$ = function (name, dragonBonesName) {
    if (dragonBonesName === void 0)
      dragonBonesName = '';
    var dataPackage = new BuildArmaturePackage();
    if (!this._fillBuildArmaturePackage_5qd096$(dataPackage, dragonBonesName, name, '', '')) {
      return null;
    }
    return dataPackage.armature;
  };
  BaseFactory.prototype.clear_6taknv$ = function (disposeData) {
    if (disposeData === void 0)
      disposeData = true;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$ = this._dragonBonesDataMap.keys.iterator();
    while (tmp$.hasNext()) {
      var k = tmp$.next();
      if (disposeData) {
        (tmp$_0 = this._dragonBonesDataMap.get_11rb$(k)) != null ? (tmp$_0.returnToPool(), Unit) : null;
      }
    }
    this._dragonBonesDataMap.clear();
    tmp$_1 = this._textureAtlasDataMap.keys.iterator();
    while (tmp$_1.hasNext()) {
      var k_0 = tmp$_1.next();
      if (disposeData) {
        var textureAtlasDataList = ensureNotNull(ensureNotNull(this._textureAtlasDataMap).get_11rb$(k_0));
        tmp$_2 = textureAtlasDataList.iterator();
        while (tmp$_2.hasNext()) {
          var textureAtlasData = tmp$_2.next();
          textureAtlasData.returnToPool();
        }
      }
    }
    this._textureAtlasDataMap.clear();
  };
  BaseFactory.prototype.buildArmature_w74nik$ = function (armatureName, dragonBonesName, skinName, textureAtlasName) {
    if (dragonBonesName === void 0)
      dragonBonesName = '';
    if (skinName === void 0)
      skinName = '';
    if (textureAtlasName === void 0)
      textureAtlasName = '';
    var dataPackage = new BuildArmaturePackage();
    if (!this._fillBuildArmaturePackage_5qd096$(dataPackage, dragonBonesName, armatureName, skinName, textureAtlasName)) {
      console_getInstance().warn_vqirvp$(['No armature data: ' + armatureName + ', ' + dragonBonesName]);
      return null;
    }
    var armature = this._buildArmature_mgwu66$(dataPackage);
    this._buildBones_u8bst7$(dataPackage, armature);
    this._buildSlots_u8bst7$(dataPackage, armature);
    this._buildConstraints_u8bst7$(dataPackage, armature);
    armature.invalidUpdate_4mavae$(null, true);
    armature.advanceTime_14dthe$(0.0);
    return armature;
  };
  BaseFactory.prototype.replaceDisplay_fp2gwv$ = function (slot, displayData, displayIndex) {
    if (displayIndex === void 0)
      displayIndex = -1;
    var displayIndex_0 = displayIndex;
    if (displayIndex_0 < 0) {
      displayIndex_0 = ensureNotNull(slot).displayIndex;
    }
    if (displayIndex_0 < 0) {
      displayIndex_0 = 0;
    }
    slot.replaceDisplayData_4o5vqv$(displayData, displayIndex_0);
    if (displayData != null) {
      var display = this._getSlotDisplay_1k2eo1$(null, displayData, slot);
      if (displayData.type === DisplayType$Image_getInstance()) {
        var rawDisplayData = slot.getDisplayFrameAt_za3lpa$(displayIndex_0).rawDisplayData;
        if (rawDisplayData != null && rawDisplayData.type === DisplayType$Mesh_getInstance()) {
          display = slot.meshDisplay;
        }
      }
      slot.replaceDisplay_cypnoy$(display, displayIndex_0);
    }
     else {
      slot.replaceDisplay_cypnoy$(null, displayIndex_0);
    }
  };
  BaseFactory.prototype.replaceSlotDisplay_k2nawi$ = function (dragonBonesName, armatureName, slotName, displayName, slot, displayIndex) {
    if (displayIndex === void 0)
      displayIndex = -1;
    var armatureData = this.getArmatureData_puj7f4$(armatureName, dragonBonesName);
    if (armatureData == null || armatureData.defaultSkin == null) {
      return false;
    }
    var displayData = ensureNotNull(ensureNotNull(armatureData).defaultSkin).getDisplay_puj7f4$(slotName, displayName);
    this.replaceDisplay_fp2gwv$(slot, displayData, displayIndex);
    return true;
  };
  BaseFactory.prototype.replaceSlotDisplayList_51qq0j$ = function (dragonBonesName, armatureName, slotName, slot) {
    var tmp$;
    var armatureData = this.getArmatureData_puj7f4$(armatureName, dragonBonesName != null ? dragonBonesName : '');
    if ((armatureData != null ? armatureData.defaultSkin : null) == null) {
      return false;
    }
    var displayDatas = ensureNotNull(ensureNotNull(armatureData).defaultSkin).getDisplays_pdl1vj$(slotName);
    if (displayDatas != null) {
      return false;
    }
    slot.displayFrameCount = ensureNotNull(displayDatas).size;
    tmp$ = slot.displayFrameCount;
    for (var i = 0; i < tmp$; i++) {
      var displayData = ensureNotNull(ensureNotNull(displayDatas).get_za3lpa$(i));
      this.replaceDisplay_fp2gwv$(slot, displayData, i);
    }
    return true;
  };
  BaseFactory.prototype.replaceSkin_s4r90c$ = function (armature, skin, isOverride, exclude) {
    if (isOverride === void 0)
      isOverride = false;
    if (exclude === void 0)
      exclude = null;
    var tmp$, tmp$_0;
    var success = false;
    var defaultSkin = ensureNotNull(skin.parent).defaultSkin;
    tmp$ = armature.getSlots().iterator();
    while (tmp$.hasNext()) {
      var slot = tmp$.next();
      if (exclude != null && indexOf_0(exclude, slot.name) >= 0) {
        continue;
      }
      var displayDatas = skin.getDisplays_pdl1vj$(slot.name);
      if (displayDatas == null) {
        if (defaultSkin != null && !equals(skin, defaultSkin)) {
          displayDatas = defaultSkin.getDisplays_pdl1vj$(slot.name);
        }
        if (displayDatas == null) {
          if (isOverride) {
            slot.displayFrameCount = 0;
          }
          continue;
        }
      }
      slot.displayFrameCount = get_lengthSet_1(displayDatas);
      tmp$_0 = slot.displayFrameCount;
      for (var i = 0; i < tmp$_0; i++) {
        var displayData = displayDatas.get_za3lpa$(i);
        slot.replaceRawDisplayData_4o5vqv$(displayData, i);
        if (displayData != null) {
          slot.replaceDisplay_cypnoy$(this._getSlotDisplay_1k2eo1$(null, displayData, slot), i);
        }
         else {
          slot.replaceDisplay_cypnoy$(null, i);
        }
      }
      success = true;
    }
    return success;
  };
  BaseFactory.prototype.replaceAnimation_44zfr7$ = function (armature, armatureData, isOverride) {
    if (isOverride === void 0)
      isOverride = true;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var skinData = armatureData.defaultSkin;
    if (skinData == null) {
      return false;
    }
    if (isOverride) {
      armature.animation.animations = armatureData.animations;
    }
     else {
      var rawAnimations = armature.animation.animations;
      var animations = LinkedHashMap_init();
      tmp$ = rawAnimations.keys.iterator();
      while (tmp$.hasNext()) {
        var k = tmp$.next();
        var value = ensureNotNull(rawAnimations.get_11rb$(k));
        animations.put_xwzc9p$(k, value);
      }
      tmp$_0 = armatureData.animations.keys.iterator();
      while (tmp$_0.hasNext()) {
        var k_0 = tmp$_0.next();
        var value_0 = ensureNotNull(armatureData.animations.get_11rb$(k_0));
        animations.put_xwzc9p$(k_0, value_0);
      }
      armature.animation.animations = animations;
    }
    tmp$_1 = armature.getSlots().iterator();
    while (tmp$_1.hasNext()) {
      var slot = tmp$_1.next();
      var index = 0;
      tmp$_2 = slot.displayList.iterator();
      while (tmp$_2.hasNext()) {
        var display = tmp$_2.next();
        if (Kotlin.isType(display, Armature)) {
          var displayDatas = skinData.getDisplays_pdl1vj$(slot.name);
          if (displayDatas != null && index < get_lengthSet_1(displayDatas)) {
            var displayData = displayDatas.get_za3lpa$(index);
            if (displayData != null && displayData.type === DisplayType$Armature_getInstance()) {
              var childArmatureData = this.getArmatureData_puj7f4$(displayData.path, ensureNotNull(ensureNotNull(displayData.parent.parent).parent).name);
              if (childArmatureData != null) {
                this.replaceAnimation_44zfr7$(display, childArmatureData, isOverride);
              }
            }
          }
        }
        index = index + 1 | 0;
      }
    }
    return true;
  };
  BaseFactory.prototype.getAllDragonBonesData = function () {
    return this._dragonBonesDataMap;
  };
  BaseFactory.prototype.getAllTextureAtlasData = function () {
    return this._textureAtlasDataMap;
  };
  Object.defineProperty(BaseFactory.prototype, 'clock', {
    get: function () {
      return this._dragonBones.clock;
    }
  });
  Object.defineProperty(BaseFactory.prototype, 'dragonBones', {
    get: function () {
      return this._dragonBones;
    }
  });
  BaseFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseFactory',
    interfaces: []
  };
  function BaseFactory_init(dataParser, $this) {
    if (dataParser === void 0)
      dataParser = null;
    $this = $this || Object.create(BaseFactory.prototype);
    BaseFactory.call($this);
    $this._dataParser = dataParser != null ? dataParser : BaseFactory$Companion_getInstance()._objectParser_0;
    return $this;
  }
  function BuildArmaturePackage() {
    this.dataName = '';
    this.textureAtlasName = '';
    this.data = null;
    this.armature = null;
    this.skin = null;
  }
  BuildArmaturePackage.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BuildArmaturePackage',
    interfaces: []
  };
  function ColorTransform(alphaMultiplier, redMultiplier, greenMultiplier, blueMultiplier, alphaOffset, redOffset, greenOffset, blueOffset) {
    if (alphaMultiplier === void 0)
      alphaMultiplier = 1.0;
    if (redMultiplier === void 0)
      redMultiplier = 1.0;
    if (greenMultiplier === void 0)
      greenMultiplier = 1.0;
    if (blueMultiplier === void 0)
      blueMultiplier = 1.0;
    if (alphaOffset === void 0)
      alphaOffset = 0;
    if (redOffset === void 0)
      redOffset = 0;
    if (greenOffset === void 0)
      greenOffset = 0;
    if (blueOffset === void 0)
      blueOffset = 0;
    this.alphaMultiplier = alphaMultiplier;
    this.redMultiplier = redMultiplier;
    this.greenMultiplier = greenMultiplier;
    this.blueMultiplier = blueMultiplier;
    this.alphaOffset = alphaOffset;
    this.redOffset = redOffset;
    this.greenOffset = greenOffset;
    this.blueOffset = blueOffset;
  }
  ColorTransform.prototype.copyFrom_rr69z0$ = function (value) {
    this.alphaMultiplier = value.alphaMultiplier;
    this.redMultiplier = value.redMultiplier;
    this.greenMultiplier = value.greenMultiplier;
    this.blueMultiplier = value.blueMultiplier;
    this.alphaOffset = value.alphaOffset;
    this.redOffset = value.redOffset;
    this.greenOffset = value.greenOffset;
    this.blueOffset = value.blueOffset;
  };
  ColorTransform.prototype.identity = function () {
    this.alphaMultiplier = 1.0;
    this.redMultiplier = 1.0;
    this.greenMultiplier = 1.0;
    this.blueMultiplier = 1.0;
    this.alphaOffset = 0;
    this.redOffset = 0;
    this.greenOffset = 0;
    this.blueOffset = 0;
  };
  ColorTransform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ColorTransform',
    interfaces: []
  };
  function Matrix() {
    this.a = 0;
    this.b = 0;
    this.c = 0;
    this.d = 0;
    this.tx = 0;
    this.ty = 0;
  }
  Matrix.prototype.toString = function () {
    return '[object dragonBones.Matrix] a:' + toString(this.a) + ' b:' + toString(this.b) + ' c:' + toString(this.c) + ' d:' + toString(this.d) + ' tx:' + toString(this.tx) + ' ty:' + toString(this.ty);
  };
  Matrix.prototype.copyFrom_dyon7w$ = function (value) {
    this.a = value.a;
    this.b = value.b;
    this.c = value.c;
    this.d = value.d;
    this.tx = value.tx;
    this.ty = value.ty;
    return this;
  };
  Matrix.prototype.copyFromArray_fcbbnx$ = function (value, offset) {
    if (offset === void 0)
      offset = 0;
    this.a = value[offset];
    this.b = value[offset + 1 | 0];
    this.c = value[offset + 2 | 0];
    this.d = value[offset + 3 | 0];
    this.tx = value[offset + 4 | 0];
    this.ty = value[offset + 5 | 0];
    return this;
  };
  Matrix.prototype.copyFromArray_5qgd2m$ = function (value, offset) {
    if (offset === void 0)
      offset = 0;
    return this.copyFromArray_fcbbnx$(value.data, offset);
  };
  Matrix.prototype.identity = function () {
    this.a = 1.0;
    this.b = 0.0;
    this.d = 1.0;
    this.c = 0.0;
    this.tx = 0.0;
    this.ty = 0.0;
    return this;
  };
  Matrix.prototype.concat_dyon7w$ = function (value) {
    var aA = this.a * value.a;
    var bA = 0.0;
    var cA = 0.0;
    var dA = this.d * value.d;
    var txA = this.tx * value.a + value.tx;
    var tyA = this.ty * value.d + value.ty;
    if (this.b !== 0.0 || this.c !== 0.0) {
      aA += this.b * value.c;
      bA += this.b * value.d;
      cA += this.c * value.a;
      dA += this.c * value.b;
    }
    if (value.b !== 0.0 || value.c !== 0.0) {
      bA += this.a * value.b;
      cA += this.d * value.c;
      txA += this.ty * value.c;
      tyA += this.tx * value.b;
    }
    this.a = aA;
    this.b = bA;
    this.c = cA;
    this.d = dA;
    this.tx = txA;
    this.ty = tyA;
    return this;
  };
  Matrix.prototype.invert = function () {
    var aA = this.a;
    var bA = this.b;
    var cA = this.c;
    var dA = this.d;
    var txA = this.tx;
    var tyA = this.ty;
    if (bA === 0.0 && cA === 0.0) {
      this.b = 0.0;
      this.c = 0.0;
      if (aA === 0.0 || dA === 0.0) {
        this.a = 0.0;
        this.b = 0.0;
        this.tx = 0.0;
        this.ty = 0.0;
      }
       else {
        aA = 1.0 / aA;
        dA = 1.0 / dA;
        this.a = aA;
        this.d = dA;
        this.tx = -aA * txA;
        this.ty = -dA * tyA;
      }
      return this;
    }
    var determinant = aA * dA - bA * cA;
    if (determinant === 0.0) {
      this.a = 1.0;
      this.b = 0.0;
      this.c = 0.0;
      this.d = 1.0;
      this.tx = 0.0;
      this.ty = 0.0;
      return this;
    }
    determinant = 1.0 / determinant;
    var k = dA * determinant;
    this.a = k;
    bA = -bA * determinant;
    this.b = bA;
    cA = -cA * determinant;
    this.c = cA;
    dA = aA * determinant;
    this.d = dA;
    this.tx = -(k * txA + cA * tyA);
    this.ty = -(bA * txA + dA * tyA);
    return this;
  };
  Matrix.prototype.transformPoint_hd5a0h$ = function (x, y, result, delta) {
    if (delta === void 0)
      delta = false;
    result.x = this.a * x + this.c * y;
    result.y = this.b * x + this.d * y;
    if (!delta) {
      result.x = result.x + this.tx;
      result.y = result.y + this.ty;
    }
  };
  Matrix.prototype.transformX_lu1900$ = function (x, y) {
    return this.a * x + this.c * y + this.tx;
  };
  Matrix.prototype.transformY_lu1900$ = function (x, y) {
    return this.b * x + this.d * y + this.ty;
  };
  Matrix.prototype.transformRectangle_z8gjdh$ = function (rectangle, delta) {
    if (delta === void 0)
      delta = false;
    var a = this.a;
    var b = this.b;
    var c = this.c;
    var d = this.d;
    var tx = delta ? 0.0 : this.tx;
    var ty = delta ? 0.0 : this.ty;
    var x = rectangle.x;
    var y = rectangle.y;
    var xMax = x + rectangle.width;
    var yMax = y + rectangle.height;
    var x0 = a * x + c * y + tx;
    var y0 = b * x + d * y + ty;
    var x1 = a * xMax + c * y + tx;
    var y1 = b * xMax + d * y + ty;
    var x2 = a * xMax + c * yMax + tx;
    var y2 = b * xMax + d * yMax + ty;
    var x3 = a * x + c * yMax + tx;
    var y3 = b * x + d * yMax + ty;
    var tmp = 0.0;
    if (x0 > x1) {
      tmp = x0;
      x0 = x1;
      x1 = tmp;
    }
    if (x2 > x3) {
      tmp = x2;
      x2 = x3;
      x3 = tmp;
    }
    var x_0 = x0 < x2 ? x0 : x2;
    rectangle.x = Math_0.floor(x_0);
    var x_1 = (x1 > x3 ? x1 : x3) - rectangle.x;
    rectangle.width = Math_0.ceil(x_1);
    if (y0 > y1) {
      tmp = y0;
      y0 = y1;
      y1 = tmp;
    }
    if (y2 > y3) {
      tmp = y2;
      y2 = y3;
      y3 = tmp;
    }
    var x_2 = y0 < y2 ? y0 : y2;
    rectangle.y = Math_0.floor(x_2);
    var x_3 = (y1 > y3 ? y1 : y3) - rectangle.y;
    rectangle.height = Math_0.ceil(x_3);
  };
  Matrix.prototype.toMatrix2d_yx07kl$ = function (m) {
    m.a = this.a;
    m.b = this.b;
    m.c = this.c;
    m.d = this.d;
    m.tx = this.tx;
    m.ty = this.ty;
  };
  Matrix.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix',
    interfaces: []
  };
  function Matrix_init(a, b, c, d, tx, ty, $this) {
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
    $this = $this || Object.create(Matrix.prototype);
    Matrix.call($this);
    $this.a = a;
    $this.b = b;
    $this.c = c;
    $this.d = d;
    $this.tx = tx;
    $this.ty = ty;
    return $this;
  }
  function Point() {
    this.x_8iuac3$_0 = 0;
    this.y_8iuacy$_0 = 0;
  }
  Object.defineProperty(Point.prototype, 'x', {
    get: function () {
      return this.x_8iuac3$_0;
    },
    set: function (x) {
      this.x_8iuac3$_0 = x;
    }
  });
  Object.defineProperty(Point.prototype, 'y', {
    get: function () {
      return this.y_8iuacy$_0;
    },
    set: function (y) {
      this.y_8iuacy$_0 = y;
    }
  });
  Point.prototype.copyFrom_u6ntkz$ = function (value) {
    this.x = value.x;
    this.y = value.y;
  };
  Point.prototype.clear = function () {
    this.x = 0.0;
    this.y = 0.0;
  };
  Point.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Point',
    interfaces: [XY]
  };
  function Point_init(x, y, $this) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    $this = $this || Object.create(Point.prototype);
    Point.call($this);
    $this.x = x;
    $this.y = y;
    return $this;
  }
  function Rectangle_0(x, y, width, height) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (width === void 0)
      width = 0.0;
    if (height === void 0)
      height = 0.0;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  Rectangle_0.prototype.copyFrom_r7la90$ = function (value) {
    this.x = value.x;
    this.y = value.y;
    this.width = value.width;
    this.height = value.height;
  };
  Rectangle_0.prototype.clear = function () {
    this.x = 0.0;
    this.y = 0.0;
    this.width = 0.0;
    this.height = 0.0;
  };
  Rectangle_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rectangle',
    interfaces: []
  };
  function Transform(x, y, skew, rotation, scaleX, scaleY) {
    Transform$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (skew === void 0)
      skew = 0.0;
    if (rotation === void 0)
      rotation = 0.0;
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = 1.0;
    this.x_wqkqgn$_0 = x;
    this.y_wqkqhi$_0 = y;
    this.skew = skew;
    this.rotation = rotation;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
  }
  Object.defineProperty(Transform.prototype, 'x', {
    get: function () {
      return this.x_wqkqgn$_0;
    },
    set: function (x) {
      this.x_wqkqgn$_0 = x;
    }
  });
  Object.defineProperty(Transform.prototype, 'y', {
    get: function () {
      return this.y_wqkqhi$_0;
    },
    set: function (y) {
      this.y_wqkqhi$_0 = y;
    }
  });
  function Transform$Companion() {
    Transform$Companion_instance = this;
    this.PI = math.PI;
    this.PI_D = this.PI * 2.0;
    this.PI_H = this.PI / 2.0;
    this.PI_Q = this.PI / 4.0;
    this.RAD_DEG = 180.0 / this.PI;
    this.DEG_RAD = this.PI / 180.0;
  }
  Transform$Companion.prototype.normalizeRadian_14dthe$ = function (value) {
    var value_0 = (value + this.PI) % (this.PI * 2.0);
    value_0 += value_0 > 0.0 ? -this.PI : this.PI;
    return value_0;
  };
  Transform$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Transform$Companion_instance = null;
  function Transform$Companion_getInstance() {
    if (Transform$Companion_instance === null) {
      new Transform$Companion();
    }
    return Transform$Companion_instance;
  }
  Transform.prototype.toString = function () {
    return '[object dragonBones.Transform] x:' + toString(this.x) + ' y:' + toString(this.y) + ' skewX:' + toString(this.skew * 180.0 / Transform$Companion_getInstance().PI) + ' skewY:' + toString(this.rotation * 180.0 / Transform$Companion_getInstance().PI) + ' scaleX:' + toString(this.scaleX) + ' scaleY:' + toString(this.scaleY);
  };
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  Transform.prototype.setTo_15yvbs$ = function (x, y, skew, rotation, scaleX, scaleY) {
    this.x = x;
    this.y = y;
    this.skew = skew;
    this.rotation = rotation;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    if (isNaN_0(x) || isNaN_0(y) || isNaN_0(skew) || isNaN_0(rotation) || isNaN_0(scaleX) || isNaN_0(scaleY)) {
      throw IllegalStateException_init('WARNING! NaN detected in Transform'.toString());
    }
    return this;
  };
  Transform.prototype.copyFrom_scgbvr$ = function (value) {
    this.setTo_15yvbs$(value.x, value.y, value.skew, value.rotation, value.scaleX, value.scaleY);
    return value;
  };
  Transform.prototype.identity = function () {
    return this.setTo_15yvbs$(0.0, 0.0, 0.0, 0.0, 1.0, 1.0);
  };
  Transform.prototype.add_scgbvr$ = function (value) {
    return this.setTo_15yvbs$(this.x + value.x, this.y + value.y, this.skew + value.skew, this.rotation + value.rotation, this.scaleX * value.scaleX, this.scaleY * value.scaleY);
  };
  Transform.prototype.minus_scgbvr$ = function (value) {
    return this.setTo_15yvbs$(this.x - value.x, this.y - value.y, this.skew - value.skew, this.rotation - value.rotation, this.scaleX / value.scaleX, this.scaleY / value.scaleY);
  };
  Transform.prototype.fromMatrix_dyon7w$ = function (matrix) {
    var backupScaleX = this.scaleX;
    var backupScaleY = this.scaleY;
    var PI_Q = Transform$Companion_getInstance().PI_Q;
    this.x = matrix.tx;
    this.y = matrix.ty;
    var x = matrix.b / matrix.a;
    this.rotation = Math_0.atan(x);
    var x_0 = -matrix.c / matrix.d;
    var skewX = Math_0.atan(x_0);
    var tmp$;
    if (this.rotation > -PI_Q && this.rotation < PI_Q) {
      var tmp$_0 = matrix.a;
      var x_1 = this.rotation;
      tmp$ = tmp$_0 / Math_0.cos(x_1);
    }
     else {
      var tmp$_1 = matrix.b;
      var x_2 = this.rotation;
      tmp$ = tmp$_1 / Math_0.sin(x_2);
    }
    this.scaleX = tmp$;
    this.scaleY = skewX > -PI_Q && skewX < PI_Q ? matrix.d / Math_0.cos(skewX) : -matrix.c / Math_0.sin(skewX);
    if (backupScaleX >= 0.0 && this.scaleX < 0.0) {
      this.scaleX = -this.scaleX;
      this.rotation = this.rotation - Transform$Companion_getInstance().PI;
    }
    if (backupScaleY >= 0.0 && this.scaleY < 0.0) {
      this.scaleY = -this.scaleY;
      skewX -= Transform$Companion_getInstance().PI;
    }
    this.skew = skewX - this.rotation;
    return this;
  };
  Transform.prototype.toMatrix_dyon7w$ = function (matrix) {
    if (this.rotation === 0.0) {
      matrix.a = 1.0;
      matrix.b = 0.0;
    }
     else {
      var x = this.rotation;
      matrix.a = Math_0.cos(x);
      var x_0 = this.rotation;
      matrix.b = Math_0.sin(x_0);
    }
    if (this.skew === 0.0) {
      matrix.c = -matrix.b;
      matrix.d = matrix.a;
    }
     else {
      var x_1 = this.skew + this.rotation;
      matrix.c = -Math_0.sin(x_1);
      var x_2 = this.skew + this.rotation;
      matrix.d = Math_0.cos(x_2);
    }
    if (this.scaleX !== 1.0) {
      matrix.a = matrix.a * this.scaleX;
      matrix.b = matrix.b * this.scaleX;
    }
    if (this.scaleY !== 1.0) {
      matrix.c = matrix.c * this.scaleY;
      matrix.d = matrix.d * this.scaleY;
    }
    matrix.tx = this.x;
    matrix.ty = this.y;
    return this;
  };
  Transform.prototype.toMatrix2d_yx07kl$ = function (matrix) {
    if (this.rotation === 0.0) {
      matrix.a = 1.0;
      matrix.b = 0.0;
    }
     else {
      var x = this.rotation;
      matrix.a = Math_0.cos(x);
      var x_0 = this.rotation;
      matrix.b = Math_0.sin(x_0);
    }
    if (this.skew === 0.0) {
      matrix.c = -matrix.b;
      matrix.d = matrix.a;
    }
     else {
      var x_1 = this.skew + this.rotation;
      matrix.c = -Math_0.sin(x_1);
      var x_2 = this.skew + this.rotation;
      matrix.d = Math_0.cos(x_2);
    }
    if (this.scaleX !== 1.0) {
      matrix.a = matrix.a * this.scaleX;
      matrix.b = matrix.b * this.scaleX;
    }
    if (this.scaleY !== 1.0) {
      matrix.c = matrix.c * this.scaleY;
      matrix.d = matrix.d * this.scaleY;
    }
    matrix.tx = this.x;
    matrix.ty = this.y;
    return this;
  };
  Transform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transform',
    interfaces: [XY]
  };
  function XY() {
  }
  XY.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'XY',
    interfaces: []
  };
  function AnimationConfig() {
    BaseObject.call(this);
    this.pauseFadeOut = true;
    this.fadeOutMode = AnimationFadeOutMode$All_getInstance();
    this.fadeOutTweenType = TweenType$Line_getInstance();
    this.fadeOutTime = -1.0;
    this.pauseFadeIn = true;
    this.actionEnabled = true;
    this.additive = false;
    this.displayControl = true;
    this.resetToPose = true;
    this.fadeInTweenType = TweenType$Line_getInstance();
    this.playTimes = -1;
    this.layer = 0;
    this.position = 0.0;
    this.duration = -1.0;
    this.timeScale = -100.0;
    this.weight = 1.0;
    this.fadeInTime = -1.0;
    this.autoFadeOutTime = -1.0;
    this.name = '';
    this.animation = '';
    this.group = '';
    this.boneMask = ArrayList_init();
  }
  AnimationConfig.prototype.toString = function () {
    return '[class dragonBones.AnimationConfig]';
  };
  AnimationConfig.prototype._onClear = function () {
    this.pauseFadeOut = true;
    this.fadeOutMode = AnimationFadeOutMode$All_getInstance();
    this.fadeOutTweenType = TweenType$Line_getInstance();
    this.fadeOutTime = -1.0;
    this.actionEnabled = true;
    this.additive = false;
    this.displayControl = true;
    this.pauseFadeIn = true;
    this.resetToPose = true;
    this.fadeInTweenType = TweenType$Line_getInstance();
    this.playTimes = -1;
    this.layer = 0;
    this.position = 0.0;
    this.duration = -1.0;
    this.timeScale = -100.0;
    this.weight = 1.0;
    this.fadeInTime = -1.0;
    this.autoFadeOutTime = -1.0;
    this.name = '';
    this.animation = '';
    this.group = '';
    this.boneMask.clear();
  };
  AnimationConfig.prototype.clear = function () {
    this._onClear();
  };
  AnimationConfig.prototype.copyFrom_1e5lcy$ = function (value) {
    var tmp$;
    this.pauseFadeOut = value.pauseFadeOut;
    this.fadeOutMode = value.fadeOutMode;
    this.autoFadeOutTime = value.autoFadeOutTime;
    this.fadeOutTweenType = value.fadeOutTweenType;
    this.actionEnabled = value.actionEnabled;
    this.additive = value.additive;
    this.displayControl = value.displayControl;
    this.pauseFadeIn = value.pauseFadeIn;
    this.resetToPose = value.resetToPose;
    this.playTimes = value.playTimes;
    this.layer = value.layer;
    this.position = value.position;
    this.duration = value.duration;
    this.timeScale = value.timeScale;
    this.fadeInTime = value.fadeInTime;
    this.fadeOutTime = value.fadeOutTime;
    this.fadeInTweenType = value.fadeInTweenType;
    this.weight = value.weight;
    this.name = value.name;
    this.animation = value.animation;
    this.group = value.group;
    set_lengthSet_1(this.boneMask, value.boneMask.size);
    tmp$ = this.boneMask.size;
    for (var i = 0; i < tmp$; i++) {
      this.boneMask.set_wxm5ur$(i, value.boneMask.get_za3lpa$(i));
    }
  };
  AnimationConfig.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationConfig',
    interfaces: [BaseObject]
  };
  function AnimationData() {
    BaseObject.call(this);
    this.frameIntOffset = 0;
    this.frameFloatOffset = 0;
    this.frameOffset = 0;
    this.blendType = AnimationBlendType$None_getInstance();
    this.frameCount = 0;
    this.playTimes = 0;
    this.duration = 0.0;
    this.scale = 1.0;
    this.fadeInTime = 0.0;
    this.cacheFrameRate = 0.0;
    this.name = '';
    this.cachedFrames = ArrayList_init();
    this.boneTimelines = LinkedHashMap_init();
    this.slotTimelines = LinkedHashMap_init();
    this.constraintTimelines = LinkedHashMap_init();
    this.animationTimelines = LinkedHashMap_init();
    this.boneCachedFrameIndices = LinkedHashMap_init();
    this.slotCachedFrameIndices = LinkedHashMap_init();
    this.actionTimeline = null;
    this.zOrderTimeline = null;
    this.parent = null;
  }
  AnimationData.prototype.toString = function () {
    return '[class dragonBones.AnimationData]';
  };
  AnimationData.prototype._onClear = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8;
    tmp$ = this.boneTimelines.values.iterator();
    while (tmp$.hasNext()) {
      var tl = tmp$.next();
      tmp$_0 = tl.iterator();
      while (tmp$_0.hasNext()) {
        var timeline = tmp$_0.next();
        timeline.returnToPool();
      }
    }
    this.boneTimelines.clear();
    tmp$_1 = this.slotTimelines.values.iterator();
    while (tmp$_1.hasNext()) {
      var tl_0 = tmp$_1.next();
      tmp$_2 = tl_0.iterator();
      while (tmp$_2.hasNext()) {
        var timeline_0 = tmp$_2.next();
        timeline_0.returnToPool();
      }
    }
    this.slotTimelines.clear();
    tmp$_3 = this.constraintTimelines.values.iterator();
    while (tmp$_3.hasNext()) {
      var tl_1 = tmp$_3.next();
      tmp$_4 = tl_1.iterator();
      while (tmp$_4.hasNext()) {
        var timeline_1 = tmp$_4.next();
        timeline_1.returnToPool();
      }
    }
    this.constraintTimelines.clear();
    tmp$_5 = this.animationTimelines.values.iterator();
    while (tmp$_5.hasNext()) {
      var tl_2 = tmp$_5.next();
      tmp$_6 = tl_2.iterator();
      while (tmp$_6.hasNext()) {
        var timeline_2 = tmp$_6.next();
        timeline_2.returnToPool();
      }
    }
    this.animationTimelines.clear();
    this.boneCachedFrameIndices.clear();
    this.slotCachedFrameIndices.clear();
    (tmp$_7 = this.actionTimeline) != null ? (tmp$_7.returnToPool(), Unit) : null;
    (tmp$_8 = this.zOrderTimeline) != null ? (tmp$_8.returnToPool(), Unit) : null;
    this.frameIntOffset = 0;
    this.frameFloatOffset = 0;
    this.frameOffset = 0;
    this.blendType = AnimationBlendType$None_getInstance();
    this.frameCount = 0;
    this.playTimes = 0;
    this.duration = 0.0;
    this.scale = 1.0;
    this.fadeInTime = 0.0;
    this.cacheFrameRate = 0.0;
    this.name = '';
    set_length_1(this.cachedFrames, 0);
    this.actionTimeline = null;
    this.zOrderTimeline = null;
    this.parent = null;
  };
  AnimationData.prototype.cacheFrames_za3lpa$ = function (frameRate) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (this.cacheFrameRate > 0.0) {
      return;
    }
    var x = frameRate * this.scale;
    var a = Math_0.ceil(x);
    this.cacheFrameRate = Math_0.max(a, 1.0);
    var x_0 = this.cacheFrameRate * this.duration;
    var cacheFrameCount = numberToInt(Math_0.ceil(x_0)) + 1 | 0;
    set_length_1(this.cachedFrames, cacheFrameCount);
    tmp$ = get_length_1(this.cachedFrames);
    for (var i = 0; i < tmp$; i++) {
      this.cachedFrames.set_wxm5ur$(i, false);
    }
    tmp$_0 = ensureNotNull(this.parent).sortedBones.iterator();
    while (tmp$_0.hasNext()) {
      var bone = tmp$_0.next();
      var indices = new IntArrayList(cacheFrameCount);
      tmp$_1 = get_length(indices);
      for (var i_0 = 0; i_0 < tmp$_1; i_0++) {
        indices.set_vux9f0$(i_0, -1);
      }
      var $receiver = this.boneCachedFrameIndices;
      var key = bone.name;
      $receiver.put_xwzc9p$(key, indices);
    }
    tmp$_2 = ensureNotNull(this.parent).sortedSlots.iterator();
    while (tmp$_2.hasNext()) {
      var slot = tmp$_2.next();
      var indices_0 = new IntArrayList(cacheFrameCount);
      tmp$_3 = get_length(indices_0);
      for (var i_1 = 0; i_1 < tmp$_3; i_1++) {
        indices_0.set_vux9f0$(i_1, -1);
      }
      var $receiver_0 = this.slotCachedFrameIndices;
      var key_0 = slot.name;
      $receiver_0.put_xwzc9p$(key_0, indices_0);
    }
  };
  AnimationData.prototype.addBoneTimeline_h179rx$ = function (timelineName, timeline) {
    var $receiver = this.boneTimelines;
    var tmp$;
    var value = $receiver.get_11rb$(timelineName);
    if (value == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(timelineName, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    var timelines = tmp$;
    if (timelines.indexOf_11rb$(timeline) < 0) {
      push(timelines, timeline);
    }
  };
  AnimationData.prototype.addSlotTimeline_h179rx$ = function (timelineName, timeline) {
    var $receiver = this.slotTimelines;
    var tmp$;
    var value = $receiver.get_11rb$(timelineName);
    if (value == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(timelineName, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    var timelines = tmp$;
    if (timelines.indexOf_11rb$(timeline) < 0) {
      push(timelines, timeline);
    }
  };
  AnimationData.prototype.addConstraintTimeline_h179rx$ = function (timelineName, timeline) {
    var $receiver = this.constraintTimelines;
    var tmp$;
    var value = $receiver.get_11rb$(timelineName);
    if (value == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(timelineName, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    var timelines = tmp$;
    if (timelines.indexOf_11rb$(timeline) < 0) {
      push(timelines, timeline);
    }
  };
  AnimationData.prototype.addAnimationTimeline_h179rx$ = function (timelineName, timeline) {
    var $receiver = this.animationTimelines;
    var tmp$;
    var value = $receiver.get_11rb$(timelineName);
    if (value == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(timelineName, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    var timelines = tmp$;
    if (timelines.indexOf_11rb$(timeline) < 0) {
      push(timelines, timeline);
    }
  };
  AnimationData.prototype.getBoneTimelines_61zpoe$ = function (timelineName) {
    return this.boneTimelines.get_11rb$(timelineName);
  };
  AnimationData.prototype.getSlotTimelines_61zpoe$ = function (timelineName) {
    return this.slotTimelines.get_11rb$(timelineName);
  };
  AnimationData.prototype.getConstraintTimelines_61zpoe$ = function (timelineName) {
    return this.constraintTimelines.get_11rb$(timelineName);
  };
  AnimationData.prototype.getAnimationTimelines_61zpoe$ = function (timelineName) {
    return this.animationTimelines.get_11rb$(timelineName);
  };
  AnimationData.prototype.getBoneCachedFrameIndices_61zpoe$ = function (boneName) {
    return this.boneCachedFrameIndices.get_11rb$(boneName);
  };
  AnimationData.prototype.getSlotCachedFrameIndices_61zpoe$ = function (slotName) {
    return this.slotCachedFrameIndices.get_11rb$(slotName);
  };
  AnimationData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationData',
    interfaces: [BaseObject]
  };
  function TimelineData() {
    BaseObject.call(this);
    this.type = TimelineType$BoneAll_getInstance();
    this.offset = 0;
    this.frameIndicesOffset = -1;
  }
  TimelineData.prototype.toString = function () {
    return '[class dragonBones.TimelineData]';
  };
  TimelineData.prototype._onClear = function () {
    this.type = TimelineType$BoneAll_getInstance();
    this.offset = 0;
    this.frameIndicesOffset = -1;
  };
  TimelineData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimelineData',
    interfaces: [BaseObject]
  };
  function AnimationTimelineData() {
    TimelineData.call(this);
    this.x = 0.0;
    this.y = 0.0;
  }
  AnimationTimelineData.prototype.toString = function () {
    return '[class dragonBones.AnimationTimelineData]';
  };
  AnimationTimelineData.prototype._onClear = function () {
    TimelineData.prototype._onClear.call(this);
    this.x = 0.0;
    this.y = 0.0;
  };
  AnimationTimelineData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AnimationTimelineData',
    interfaces: [TimelineData]
  };
  function ArmatureData() {
    BaseObject.call(this);
    this.type = ArmatureType$Armature_getInstance();
    this.frameRate = 0;
    this.cacheFrameRate = 0;
    this.scale = 1.0;
    this.name = '';
    this.aabb = new Rectangle_0();
    this.animationNames = ArrayList_init();
    this.sortedBones = ArrayList_init();
    this.sortedSlots = ArrayList_init();
    this.defaultActions = ArrayList_init();
    this.actions = ArrayList_init();
    this.bones = LinkedHashMap_init();
    this.slots = LinkedHashMap_init();
    this.constraints = LinkedHashMap_init();
    this.skins = LinkedHashMap_init();
    this.animations = LinkedHashMap_init();
    this.defaultSkin = null;
    this.defaultAnimation = null;
    this.canvas = null;
    this.userData = null;
    this.parent = null;
  }
  ArmatureData.prototype.toString = function () {
    return '[class dragonBones.ArmatureData]';
  };
  ArmatureData.prototype._onClear = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    tmp$ = this.defaultActions.iterator();
    while (tmp$.hasNext()) {
      var action = tmp$.next();
      action.returnToPool();
    }
    tmp$_0 = this.actions.iterator();
    while (tmp$_0.hasNext()) {
      var action_0 = tmp$_0.next();
      action_0.returnToPool();
    }
    tmp$_1 = this.bones.values.iterator();
    while (tmp$_1.hasNext()) {
      var v = tmp$_1.next();
      v.returnToPool();
    }
    this.bones.clear();
    tmp$_2 = this.slots.values.iterator();
    while (tmp$_2.hasNext()) {
      var v_0 = tmp$_2.next();
      v_0.returnToPool();
    }
    this.slots.clear();
    tmp$_3 = this.constraints.values.iterator();
    while (tmp$_3.hasNext()) {
      var v_1 = tmp$_3.next();
      v_1.returnToPool();
    }
    this.constraints.clear();
    tmp$_4 = this.skins.values.iterator();
    while (tmp$_4.hasNext()) {
      var v_2 = tmp$_4.next();
      v_2.returnToPool();
    }
    this.skins.clear();
    tmp$_5 = this.animations.values.iterator();
    while (tmp$_5.hasNext()) {
      var v_3 = tmp$_5.next();
      v_3.returnToPool();
    }
    this.animations.clear();
    (tmp$_6 = this.canvas) != null ? (tmp$_6.returnToPool(), Unit) : null;
    (tmp$_7 = this.userData) != null ? (tmp$_7.returnToPool(), Unit) : null;
    this.type = ArmatureType$Armature_getInstance();
    this.frameRate = 0;
    this.cacheFrameRate = 0;
    this.scale = 1.0;
    this.name = '';
    this.aabb.clear();
    this.animationNames.clear();
    this.sortedBones.clear();
    this.sortedSlots.clear();
    this.defaultActions.clear();
    this.actions.clear();
    this.defaultSkin = null;
    this.defaultAnimation = null;
    this.canvas = null;
    this.userData = null;
    this.parent = null;
  };
  ArmatureData.prototype.sortBones = function () {
    var tmp$, tmp$_0;
    var total = this.sortedBones.size;
    if (total <= 0) {
      return;
    }
    var sortHelper = toList(this.sortedBones);
    var index = 0;
    var count = 0;
    set_lengthSet_1(this.sortedBones, 0);
    while (count < total) {
      var bone = sortHelper.get_za3lpa$((tmp$ = index, index = tmp$ + 1 | 0, tmp$));
      if (index >= total) {
        index = 0;
      }
      if (this.sortedBones.indexOf_11rb$(bone) >= 0) {
        continue;
      }
      var flag = false;
      tmp$_0 = this.constraints.values.iterator();
      while (tmp$_0.hasNext()) {
        var constraint = tmp$_0.next();
        if (equals(constraint.root, bone) && indexOf(this.sortedBones, constraint.target) < 0) {
          flag = true;
          break;
        }
      }
      if (flag) {
        continue;
      }
      if (bone.parent != null && this.sortedBones.indexOf_11rb$(ensureNotNull(bone.parent)) < 0) {
        continue;
      }
      this.sortedBones.add_11rb$(bone);
      count = count + 1 | 0;
    }
  };
  ArmatureData.prototype.cacheFrames_za3lpa$ = function (frameRate) {
    var tmp$;
    if (this.cacheFrameRate > 0) {
      return;
    }
    this.cacheFrameRate = frameRate;
    tmp$ = this.animations.keys.iterator();
    while (tmp$.hasNext()) {
      var k = tmp$.next();
      ensureNotNull(this.animations.get_11rb$(k)).cacheFrames_za3lpa$(this.cacheFrameRate);
    }
  };
  ArmatureData.prototype.setCacheFrame_eeuvpt$ = function (globalTransformMatrix, transform) {
    var dataArray = ensureNotNull(this.parent).cachedFrames;
    var arrayOffset = dataArray.size;
    set_lengthSet_0(dataArray, get_lengthSet_0(dataArray) + 10 | 0);
    dataArray.set_5wr77w$(arrayOffset, globalTransformMatrix.a);
    dataArray.set_5wr77w$(arrayOffset + 1 | 0, globalTransformMatrix.b);
    dataArray.set_5wr77w$(arrayOffset + 2 | 0, globalTransformMatrix.c);
    dataArray.set_5wr77w$(arrayOffset + 3 | 0, globalTransformMatrix.d);
    dataArray.set_5wr77w$(arrayOffset + 4 | 0, globalTransformMatrix.tx);
    dataArray.set_5wr77w$(arrayOffset + 5 | 0, globalTransformMatrix.ty);
    dataArray.set_5wr77w$(arrayOffset + 6 | 0, transform.rotation);
    dataArray.set_5wr77w$(arrayOffset + 7 | 0, transform.skew);
    dataArray.set_5wr77w$(arrayOffset + 8 | 0, transform.scaleX);
    dataArray.set_5wr77w$(arrayOffset + 9 | 0, transform.scaleY);
    return arrayOffset;
  };
  ArmatureData.prototype.getCacheFrame_bqh3xf$ = function (globalTransformMatrix, transform, arrayOffset) {
    var dataArray = ensureNotNull(this.parent).cachedFrames;
    globalTransformMatrix.a = dataArray.get_za3lpa$(arrayOffset);
    globalTransformMatrix.b = dataArray.get_za3lpa$(arrayOffset + 1 | 0);
    globalTransformMatrix.c = dataArray.get_za3lpa$(arrayOffset + 2 | 0);
    globalTransformMatrix.d = dataArray.get_za3lpa$(arrayOffset + 3 | 0);
    globalTransformMatrix.tx = dataArray.get_za3lpa$(arrayOffset + 4 | 0);
    globalTransformMatrix.ty = dataArray.get_za3lpa$(arrayOffset + 5 | 0);
    transform.rotation = dataArray.get_za3lpa$(arrayOffset + 6 | 0);
    transform.skew = dataArray.get_za3lpa$(arrayOffset + 7 | 0);
    transform.scaleX = dataArray.get_za3lpa$(arrayOffset + 8 | 0);
    transform.scaleY = dataArray.get_za3lpa$(arrayOffset + 9 | 0);
    transform.x = globalTransformMatrix.tx;
    transform.y = globalTransformMatrix.ty;
  };
  ArmatureData.prototype.addBone_ejz9f2$ = function (value) {
    var $receiver = this.bones;
    var key = value.name;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      console_getInstance().warn_vqirvp$(['Same bone: ' + value.name]);
      return;
    }
    var $receiver_0 = this.bones;
    var key_0 = value.name;
    $receiver_0.put_xwzc9p$(key_0, value);
    push(this.sortedBones, value);
  };
  ArmatureData.prototype.addSlot_5x25e4$ = function (value) {
    var $receiver = this.slots;
    var key = value.name;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      console_getInstance().warn_vqirvp$(['Same slot: ' + value.name]);
      return;
    }
    var $receiver_0 = this.slots;
    var key_0 = value.name;
    $receiver_0.put_xwzc9p$(key_0, value);
    push(this.sortedSlots, value);
  };
  ArmatureData.prototype.addConstraint_9jmsph$ = function (value) {
    var $receiver = this.constraints;
    var key = value.name;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      console_getInstance().warn_vqirvp$(['Same constraint: ' + value.name]);
      return;
    }
    var $receiver_0 = this.constraints;
    var key_0 = value.name;
    $receiver_0.put_xwzc9p$(key_0, value);
  };
  ArmatureData.prototype.addSkin_bowmr9$ = function (value) {
    var $receiver = this.skins;
    var key = value.name;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      console_getInstance().warn_vqirvp$(['Same skin: ' + value.name]);
      return;
    }
    value.parent = this;
    var $receiver_0 = this.skins;
    var key_0 = value.name;
    $receiver_0.put_xwzc9p$(key_0, value);
    if (this.defaultSkin == null) {
      this.defaultSkin = value;
    }
    if (equals(value.name, 'default')) {
      this.defaultSkin = value;
    }
  };
  ArmatureData.prototype.addAnimation_w03ody$ = function (value) {
    var $receiver = this.animations;
    var key = value.name;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      console_getInstance().warn_vqirvp$(['Same animation: ' + value.name]);
      return;
    }
    value.parent = this;
    var $receiver_0 = this.animations;
    var key_0 = value.name;
    $receiver_0.put_xwzc9p$(key_0, value);
    push(this.animationNames, value.name);
    if (this.defaultAnimation == null) {
      this.defaultAnimation = value;
    }
  };
  ArmatureData.prototype.addAction_uup9kz$ = function (value, isDefault) {
    if (isDefault) {
      push(this.defaultActions, value);
    }
     else {
      push(this.actions, value);
    }
  };
  ArmatureData.prototype.getBone_pdl1vj$ = function (boneName) {
    var $receiver = this.bones;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).get_11rb$(boneName);
  };
  ArmatureData.prototype.getSlot_pdl1vj$ = function (slotName) {
    var $receiver = this.slots;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).get_11rb$(slotName);
  };
  ArmatureData.prototype.getConstraint_61zpoe$ = function (constraintName) {
    return this.constraints.get_11rb$(constraintName);
  };
  ArmatureData.prototype.getSkin_61zpoe$ = function (skinName) {
    return this.skins.get_11rb$(skinName);
  };
  ArmatureData.prototype.getMesh_6hosri$ = function (skinName, slotName, meshName) {
    var tmp$, tmp$_0;
    tmp$ = this.getSkin_61zpoe$(skinName);
    if (tmp$ == null) {
      return null;
    }
    var skin = tmp$;
    return (tmp$_0 = skin.getDisplay_puj7f4$(slotName, meshName)) == null || Kotlin.isType(tmp$_0, MeshDisplayData) ? tmp$_0 : throwCCE();
  };
  ArmatureData.prototype.getAnimation_61zpoe$ = function (animationName) {
    var $receiver = this.animations;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(animationName) ? this.animations.get_11rb$(animationName) : null;
  };
  ArmatureData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArmatureData',
    interfaces: [BaseObject]
  };
  function BoneData() {
    BaseObject.call(this);
    this.inheritTranslation = false;
    this.inheritRotation = false;
    this.inheritScale = false;
    this.inheritReflection = false;
    this.type = BoneType$Bone_getInstance();
    this.length = 0.0;
    this.alpha = 1.0;
    this.name = '';
    this.transform = new Transform();
    this.userData = null;
    this.parent = null;
  }
  BoneData.prototype.toString = function () {
    return '[class dragonBones.BoneData]';
  };
  BoneData.prototype._onClear = function () {
    var tmp$;
    (tmp$ = this.userData) != null ? (tmp$.returnToPool(), Unit) : null;
    this.inheritTranslation = false;
    this.inheritRotation = false;
    this.inheritScale = false;
    this.inheritReflection = false;
    this.type = BoneType$Bone_getInstance();
    this.length = 0.0;
    this.alpha = 1.0;
    this.name = '';
    this.transform.identity();
    this.userData = null;
    this.parent = null;
  };
  BoneData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoneData',
    interfaces: [BaseObject]
  };
  function SurfaceData() {
    BoneData.call(this);
    this.segmentX = 0;
    this.segmentY = 0;
    this.geometry = new GeometryData();
  }
  SurfaceData.prototype.toString = function () {
    return '[class dragonBones.SurfaceData]';
  };
  SurfaceData.prototype._onClear = function () {
    BoneData.prototype._onClear.call(this);
    this.type = BoneType$Surface_getInstance();
    this.segmentX = 0;
    this.segmentY = 0;
    this.geometry.clear();
  };
  SurfaceData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SurfaceData',
    interfaces: [BoneData]
  };
  function SlotData() {
    SlotData$Companion_getInstance();
    BaseObject.call(this);
    this.blendMode = BlendMode$Normal_getInstance();
    this.displayIndex = 0;
    this.zOrder = 0;
    this.zIndex = 0;
    this.alpha = 1.0;
    this.name = '';
    this.color = null;
    this.userData = null;
    this.parent = null;
  }
  function SlotData$Companion() {
    SlotData$Companion_instance = this;
    this.DEFAULT_COLOR = new ColorTransform();
  }
  SlotData$Companion.prototype.createColor = function () {
    return new ColorTransform();
  };
  SlotData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SlotData$Companion_instance = null;
  function SlotData$Companion_getInstance() {
    if (SlotData$Companion_instance === null) {
      new SlotData$Companion();
    }
    return SlotData$Companion_instance;
  }
  SlotData.prototype.toString = function () {
    return '[class dragonBones.SlotData]';
  };
  SlotData.prototype._onClear = function () {
    var tmp$;
    (tmp$ = this.userData) != null ? (tmp$.returnToPool(), Unit) : null;
    this.blendMode = BlendMode$Normal_getInstance();
    this.displayIndex = 0;
    this.zOrder = 0;
    this.zIndex = 0;
    this.alpha = 1.0;
    this.name = '';
    this.color = null;
    this.userData = null;
    this.parent = null;
  };
  SlotData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SlotData',
    interfaces: [BaseObject]
  };
  function BoundingBoxData() {
    BaseObject.call(this);
    this.type = BoundingBoxType$None_getInstance();
    this.color = 0;
    this.width = 0.0;
    this.height = 0.0;
  }
  BoundingBoxData.prototype._onClear = function () {
    this.color = 0;
    this.width = 0.0;
    this.height = 0.0;
  };
  BoundingBoxData.prototype.intersectsSegment_e4ky6u$ = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians, callback$default) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    return callback$default ? callback$default(xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) : this.intersectsSegment_e4ky6u$$default(xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians);
  };
  BoundingBoxData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoundingBoxData',
    interfaces: [BaseObject]
  };
  function OutCode() {
    OutCode_instance = this;
    this.InSide = 0;
    this.Left = 1;
    this.Right = 2;
    this.Top = 4;
    this.Bottom = 8;
  }
  OutCode.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'OutCode',
    interfaces: []
  };
  var OutCode_instance = null;
  function OutCode_getInstance() {
    if (OutCode_instance === null) {
      new OutCode();
    }
    return OutCode_instance;
  }
  function RectangleBoundingBoxData() {
    RectangleBoundingBoxData$Companion_getInstance();
    BoundingBoxData.call(this);
  }
  RectangleBoundingBoxData.prototype.toString = function () {
    return '[class dragonBones.RectangleBoundingBoxData]';
  };
  function RectangleBoundingBoxData$Companion() {
    RectangleBoundingBoxData$Companion_instance = this;
  }
  RectangleBoundingBoxData$Companion.prototype._computeOutCode_0 = function (x, y, xMin, yMin, xMax, yMax) {
    var code = 0;
    if (x < xMin) {
      code = code | 1;
    }
     else if (x > xMax) {
      code = code | 2;
    }
    if (y < yMin) {
      code = code | 4;
    }
     else if (y > yMax) {
      code = code | 8;
    }
    return code;
  };
  RectangleBoundingBoxData$Companion.prototype.rectangleIntersectsSegment_gqu942$ = function (xA, yA, xB, yB, xMin, yMin, xMax, yMax, intersectionPointA, intersectionPointB, normalRadians) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    var xA_0 = xA;
    var yA_0 = yA;
    var xB_0 = xB;
    var yB_0 = yB;
    var inSideA = xA_0 > xMin && xA_0 < xMax && yA_0 > yMin && yA_0 < yMax;
    var inSideB = xB_0 > xMin && xB_0 < xMax && yB_0 > yMin && yB_0 < yMax;
    if (inSideA && inSideB) {
      return -1;
    }
    var intersectionCount = 0;
    var outcode0 = RectangleBoundingBoxData$Companion_getInstance()._computeOutCode_0(xA_0, yA_0, xMin, yMin, xMax, yMax);
    var outcode1 = RectangleBoundingBoxData$Companion_getInstance()._computeOutCode_0(xB_0, yB_0, xMin, yMin, xMax, yMax);
    while (true) {
      if ((outcode0 | outcode1) === 0) {
        intersectionCount = 2;
        break;
      }
       else if ((outcode0 & outcode1) !== 0) {
        break;
      }
      var x = 0.0;
      var y = 0.0;
      var normalRadian = 0.0;
      var outcodeOut = outcode0 !== 0 ? outcode0 : outcode1;
      if ((outcodeOut & 4) !== 0) {
        x = xA_0 + (xB_0 - xA_0) * (yMin - yA_0) / (yB_0 - yA_0);
        y = yMin;
        if (normalRadians != null) {
          normalRadian = -math.PI * 0.5;
        }
      }
       else if ((outcodeOut & 8) !== 0) {
        x = xA_0 + (xB_0 - xA_0) * (yMax - yA_0) / (yB_0 - yA_0);
        y = yMax;
        if (normalRadians != null) {
          normalRadian = math.PI * 0.5;
        }
      }
       else if ((outcodeOut & 2) !== 0) {
        y = yA_0 + (yB_0 - yA_0) * (xMax - xA_0) / (xB_0 - xA_0);
        x = xMax;
        if (normalRadians != null) {
          normalRadian = 0.0;
        }
      }
       else if ((outcodeOut & 1) !== 0) {
        y = yA_0 + (yB_0 - yA_0) * (xMin - xA_0) / (xB_0 - xA_0);
        x = xMin;
        if (normalRadians != null) {
          normalRadian = math.PI;
        }
      }
      if (outcodeOut === outcode0) {
        xA_0 = x;
        yA_0 = y;
        outcode0 = RectangleBoundingBoxData$Companion_getInstance()._computeOutCode_0(xA_0, yA_0, xMin, yMin, xMax, yMax);
        if (normalRadians != null) {
          normalRadians.x = normalRadian;
        }
      }
       else {
        xB_0 = x;
        yB_0 = y;
        outcode1 = RectangleBoundingBoxData$Companion_getInstance()._computeOutCode_0(xB_0, yB_0, xMin, yMin, xMax, yMax);
        if (normalRadians != null) {
          normalRadians.y = normalRadian;
        }
      }
    }
    if (intersectionCount !== 0) {
      if (inSideA) {
        intersectionCount = 2;
        if (intersectionPointA != null) {
          intersectionPointA.x = xB_0;
          intersectionPointA.y = yB_0;
        }
        if (intersectionPointB != null) {
          intersectionPointB.x = xB_0;
          intersectionPointB.y = xB_0;
        }
        if (normalRadians != null) {
          normalRadians.x = normalRadians.y + math.PI;
        }
      }
       else if (inSideB) {
        intersectionCount = 1;
        if (intersectionPointA != null) {
          intersectionPointA.x = xA_0;
          intersectionPointA.y = yA_0;
        }
        if (intersectionPointB != null) {
          intersectionPointB.x = xA_0;
          intersectionPointB.y = yA_0;
        }
        if (normalRadians != null) {
          normalRadians.y = normalRadians.x + math.PI;
        }
      }
       else {
        intersectionCount = 3;
        if (intersectionPointA != null) {
          intersectionPointA.x = xA_0;
          intersectionPointA.y = yA_0;
        }
        if (intersectionPointB != null) {
          intersectionPointB.x = xB_0;
          intersectionPointB.y = yB_0;
        }
      }
    }
    return intersectionCount;
  };
  RectangleBoundingBoxData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RectangleBoundingBoxData$Companion_instance = null;
  function RectangleBoundingBoxData$Companion_getInstance() {
    if (RectangleBoundingBoxData$Companion_instance === null) {
      new RectangleBoundingBoxData$Companion();
    }
    return RectangleBoundingBoxData$Companion_instance;
  }
  RectangleBoundingBoxData.prototype._onClear = function () {
    BoundingBoxData.prototype._onClear.call(this);
    this.type = BoundingBoxType$Rectangle_getInstance();
  };
  RectangleBoundingBoxData.prototype.containsPoint_lu1900$ = function (pX, pY) {
    var widthH = this.width * 0.5;
    if (pX >= -widthH && pX <= widthH) {
      var heightH = this.height * 0.5;
      if (pY >= -heightH && pY <= heightH) {
        return true;
      }
    }
    return false;
  };
  RectangleBoundingBoxData.prototype.intersectsSegment_e4ky6u$$default = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) {
    var widthH = this.width * 0.5;
    var heightH = this.height * 0.5;
    var intersectionCount = RectangleBoundingBoxData$Companion_getInstance().rectangleIntersectsSegment_gqu942$(xA, yA, xB, yB, -widthH, -heightH, widthH, heightH, intersectionPointA, intersectionPointB, normalRadians);
    return intersectionCount;
  };
  RectangleBoundingBoxData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RectangleBoundingBoxData',
    interfaces: [BoundingBoxData]
  };
  function EllipseBoundingBoxData() {
    EllipseBoundingBoxData$Companion_getInstance();
    BoundingBoxData.call(this);
  }
  EllipseBoundingBoxData.prototype.toString = function () {
    return '[class dragonBones.EllipseData]';
  };
  function EllipseBoundingBoxData$Companion() {
    EllipseBoundingBoxData$Companion_instance = this;
  }
  EllipseBoundingBoxData$Companion.prototype.ellipseIntersectsSegment_gqu942$ = function (xA, yA, xB, yB, xC, yC, widthH, heightH, intersectionPointA, intersectionPointB, normalRadians) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    var xA_0 = xA;
    var xB_0 = xB;
    var yA_0 = yA;
    var yB_0 = yB;
    var d = widthH / heightH;
    var dd = d * d;
    yA_0 *= d;
    yB_0 *= d;
    var dX = xB_0 - xA_0;
    var dY = yB_0 - yA_0;
    var x = dX * dX + dY * dY;
    var lAB = Math_0.sqrt(x);
    var xD = dX / lAB;
    var yD = dY / lAB;
    var a = (xC - xA_0) * xD + (yC - yA_0) * yD;
    var aa = a * a;
    var ee = xA_0 * xA_0 + yA_0 * yA_0;
    var rr = widthH * widthH;
    var dR = rr - ee + aa;
    var intersectionCount = 0;
    if (dR >= 0.0) {
      var dT = Math_0.sqrt(dR);
      var sA = a - dT;
      var sB = a + dT;
      var inSideA = sA < 0.0 ? -1 : sA <= lAB ? 0 : 1;
      var inSideB = sB < 0.0 ? -1 : sB <= lAB ? 0 : 1;
      var sideAB = Kotlin.imul(inSideA, inSideB);
      if (sideAB < 0) {
        return -1;
      }
       else if (sideAB === 0) {
        if (inSideA === -1) {
          intersectionCount = 2;
          xB_0 = xA_0 + sB * xD;
          yB_0 = (yA_0 + sB * yD) / d;
          if (intersectionPointA != null) {
            intersectionPointA.x = xB_0;
            intersectionPointA.y = yB_0;
          }
          if (intersectionPointB != null) {
            intersectionPointB.x = xB_0;
            intersectionPointB.y = yB_0;
          }
          if (normalRadians != null) {
            var y = yB_0 / rr * dd;
            var x_0 = xB_0 / rr;
            normalRadians.x = Math_0.atan2(y, x_0);
            normalRadians.y = normalRadians.x + math.PI;
          }
        }
         else if (inSideB === 1) {
          intersectionCount = 1;
          xA_0 = xA_0 + sA * xD;
          yA_0 = (yA_0 + sA * yD) / d;
          if (intersectionPointA != null) {
            intersectionPointA.x = xA_0;
            intersectionPointA.y = yA_0;
          }
          if (intersectionPointB != null) {
            intersectionPointB.x = xA_0;
            intersectionPointB.y = yA_0;
          }
          if (normalRadians != null) {
            var y_0 = yA_0 / rr * dd;
            var x_1 = xA_0 / rr;
            normalRadians.x = Math_0.atan2(y_0, x_1);
            normalRadians.y = normalRadians.x + math.PI;
          }
        }
         else {
          intersectionCount = 3;
          if (intersectionPointA != null) {
            intersectionPointA.x = xA_0 + sA * xD;
            intersectionPointA.y = (yA_0 + sA * yD) / d;
            if (normalRadians != null) {
              var y_1 = intersectionPointA.y / rr * dd;
              var x_2 = intersectionPointA.x / rr;
              normalRadians.x = Math_0.atan2(y_1, x_2);
            }
          }
          if (intersectionPointB != null) {
            intersectionPointB.x = xA_0 + sB * xD;
            intersectionPointB.y = (yA_0 + sB * yD) / d;
            if (normalRadians != null) {
              var y_2 = intersectionPointB.y / rr * dd;
              var x_3 = intersectionPointB.x / rr;
              normalRadians.y = Math_0.atan2(y_2, x_3);
            }
          }
        }
      }
    }
    return intersectionCount;
  };
  EllipseBoundingBoxData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var EllipseBoundingBoxData$Companion_instance = null;
  function EllipseBoundingBoxData$Companion_getInstance() {
    if (EllipseBoundingBoxData$Companion_instance === null) {
      new EllipseBoundingBoxData$Companion();
    }
    return EllipseBoundingBoxData$Companion_instance;
  }
  EllipseBoundingBoxData.prototype._onClear = function () {
    BoundingBoxData.prototype._onClear.call(this);
    this.type = BoundingBoxType$Ellipse_getInstance();
  };
  EllipseBoundingBoxData.prototype.containsPoint_lu1900$ = function (pX, pY) {
    var pY_0 = pY;
    var widthH = this.width * 0.5;
    if (pX >= -widthH && pX <= widthH) {
      var heightH = this.height * 0.5;
      if (pY_0 >= -heightH && pY_0 <= heightH) {
        pY_0 *= widthH / heightH;
        var x = pX * pX + pY_0 * pY_0;
        return Math_0.sqrt(x) <= widthH;
      }
    }
    return false;
  };
  EllipseBoundingBoxData.prototype.intersectsSegment_e4ky6u$$default = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) {
    var intersectionCount = EllipseBoundingBoxData$Companion_getInstance().ellipseIntersectsSegment_gqu942$(xA, yA, xB, yB, 0.0, 0.0, this.width * 0.5, this.height * 0.5, intersectionPointA, intersectionPointB, normalRadians);
    return intersectionCount;
  };
  EllipseBoundingBoxData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EllipseBoundingBoxData',
    interfaces: [BoundingBoxData]
  };
  function PolygonBoundingBoxData() {
    BoundingBoxData.call(this);
    this.x = 0.0;
    this.y = 0.0;
    this.vertices = new DoubleArrayList();
  }
  PolygonBoundingBoxData.prototype.toString = function () {
    return '[class dragonBones.PolygonBoundingBoxData]';
  };
  PolygonBoundingBoxData.prototype.polygonIntersectsSegment_qvql0q$ = function (xA, yA, xB, yB, vertices, intersectionPointA, intersectionPointB, normalRadians) {
    if (intersectionPointA === void 0)
      intersectionPointA = null;
    if (intersectionPointB === void 0)
      intersectionPointB = null;
    if (normalRadians === void 0)
      normalRadians = null;
    var xA_0 = xA;
    var yA_0 = yA;
    if (xA_0 === xB)
      xA_0 = xB + 1.0E-6;
    if (yA_0 === yB)
      yA_0 = yB + 1.0E-6;
    var count = get_length_0(vertices);
    var dXAB = xA_0 - xB;
    var dYAB = yA_0 - yB;
    var llAB = xA_0 * yB - yA_0 * xB;
    var intersectionCount = 0;
    var xC = vertices.get_za3lpa$(count - 2 | 0);
    var yC = vertices.get_za3lpa$(count - 1 | 0);
    var dMin = 0.0;
    var dMax = 0.0;
    var xMin = 0.0;
    var yMin = 0.0;
    var xMax = 0.0;
    var yMax = 0.0;
    for (var i = 0; i < count; i += 2) {
      var xD = vertices.get_za3lpa$(i);
      var yD = vertices.get_za3lpa$(i + 1 | 0);
      if (xC === xD) {
        xC = xD + 1.0E-4;
      }
      if (yC === yD) {
        yC = yD + 1.0E-4;
      }
      var dXCD = xC - xD;
      var dYCD = yC - yD;
      var llCD = xC * yD - yC * xD;
      var ll = dXAB * dYCD - dYAB * dXCD;
      var x = (llAB * dXCD - dXAB * llCD) / ll;
      if ((x >= xC && x <= xD || (x >= xD && x <= xC)) && (dXAB === 0.0 || (x >= xA_0 && x <= xB) || (x >= xB && x <= xA_0))) {
        var y = (llAB * dYCD - dYAB * llCD) / ll;
        if ((y >= yC && y <= yD || (y >= yD && y <= yC)) && (dYAB === 0.0 || (y >= yA_0 && y <= yB) || (y >= yB && y <= yA_0))) {
          if (intersectionPointB != null) {
            var d = x - xA_0;
            if (d < 0.0) {
              d = -d;
            }
            if (intersectionCount === 0) {
              dMin = d;
              dMax = d;
              xMin = x;
              yMin = y;
              xMax = x;
              yMax = y;
              if (normalRadians != null) {
                var y_0 = yD - yC;
                var x_0 = xD - xC;
                normalRadians.x = Math_0.atan2(y_0, x_0) - math.PI * 0.5;
                normalRadians.y = normalRadians.x;
              }
            }
             else {
              if (d < dMin) {
                dMin = d;
                xMin = x;
                yMin = y;
                if (normalRadians != null) {
                  var y_1 = yD - yC;
                  var x_1 = xD - xC;
                  normalRadians.x = Math_0.atan2(y_1, x_1) - math.PI * 0.5;
                }
              }
              if (d > dMax) {
                dMax = d;
                xMax = x;
                yMax = y;
                if (normalRadians != null) {
                  var y_2 = yD - yC;
                  var x_2 = xD - xC;
                  normalRadians.y = Math_0.atan2(y_2, x_2) - math.PI * 0.5;
                }
              }
            }
            intersectionCount = intersectionCount + 1 | 0;
          }
           else {
            xMin = x;
            yMin = y;
            xMax = x;
            yMax = y;
            intersectionCount = intersectionCount + 1 | 0;
            if (normalRadians != null) {
              var y_3 = yD - yC;
              var x_3 = xD - xC;
              normalRadians.x = Math_0.atan2(y_3, x_3) - math.PI * 0.5;
              normalRadians.y = normalRadians.x;
            }
            break;
          }
        }
      }
      xC = xD;
      yC = yD;
    }
    if (intersectionCount === 1) {
      if (intersectionPointA != null) {
        intersectionPointA.x = xMin;
        intersectionPointA.y = yMin;
      }
      if (intersectionPointB != null) {
        intersectionPointB.x = xMin;
        intersectionPointB.y = yMin;
      }
      if (normalRadians != null) {
        normalRadians.y = normalRadians.x + math.PI;
      }
    }
     else if (intersectionCount > 1) {
      intersectionCount = intersectionCount + 1 | 0;
      if (intersectionPointA != null) {
        intersectionPointA.x = xMin;
        intersectionPointA.y = yMin;
      }
      if (intersectionPointB != null) {
        intersectionPointB.x = xMax;
        intersectionPointB.y = yMax;
      }
    }
    return intersectionCount;
  };
  PolygonBoundingBoxData.prototype._onClear = function () {
    BoundingBoxData.prototype._onClear.call(this);
    this.type = BoundingBoxType$Polygon_getInstance();
    this.x = 0.0;
    this.y = 0.0;
    set_lengthSet_0(this.vertices, 0);
  };
  PolygonBoundingBoxData.prototype.containsPoint_lu1900$ = function (pX, pY) {
    var tmp$;
    var isInSide = false;
    if (pX >= this.x && pX <= this.width && pY >= this.y && pY <= this.height) {
      var iP = get_length_0(this.vertices) - 2 | 0;
      tmp$ = get_length_0(this.vertices);
      for (var i = 0; i < tmp$; i += 2) {
        var yA = this.vertices.get_za3lpa$(iP + 1 | 0);
        var yB = this.vertices.get_za3lpa$(i + 1 | 0);
        if (yB < pY && yA >= pY || (yA < pY && yB >= pY)) {
          var xA = this.vertices.get_za3lpa$(iP);
          var xB = this.vertices.get_za3lpa$(i);
          if ((pY - yB) * (xA - xB) / (yA - yB) + xB < pX) {
            isInSide = !isInSide;
          }
        }
        iP = i;
      }
    }
    return isInSide;
  };
  PolygonBoundingBoxData.prototype.intersectsSegment_e4ky6u$$default = function (xA, yA, xB, yB, intersectionPointA, intersectionPointB, normalRadians) {
    var intersectionCount = 0;
    if (RectangleBoundingBoxData$Companion_getInstance().rectangleIntersectsSegment_gqu942$(xA, yA, xB, yB, this.x, this.y, this.x + this.width, this.y + this.height, null, null, null) !== 0) {
      intersectionCount = this.polygonIntersectsSegment_qvql0q$(xA, yA, xB, yB, this.vertices, intersectionPointA, intersectionPointB, normalRadians);
    }
    return intersectionCount;
  };
  PolygonBoundingBoxData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolygonBoundingBoxData',
    interfaces: [BoundingBoxData]
  };
  function CanvasData() {
    BaseObject.call(this);
    this.hasBackground = false;
    this.color = 0;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  }
  CanvasData.prototype.toString = function () {
    return '[class dragonBones.CanvasData]';
  };
  CanvasData.prototype._onClear = function () {
    this.hasBackground = false;
    this.color = 0;
    this.x = 0;
    this.y = 0;
    this.width = 0;
    this.height = 0;
  };
  CanvasData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CanvasData',
    interfaces: [BaseObject]
  };
  function ConstraintData() {
    BaseObject.call(this);
    this.order = 0;
    this.name = '';
    this.type = ConstraintType$IK_getInstance();
    this.target = null;
    this.root = null;
    this.bone = null;
  }
  ConstraintData.prototype._onClear = function () {
    this.order = 0;
    this.name = '';
    this.type = ConstraintType$IK_getInstance();
    this.target = null;
    this.root = null;
    this.bone = null;
  };
  ConstraintData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ConstraintData',
    interfaces: [BaseObject]
  };
  function IKConstraintData() {
    ConstraintData.call(this);
    this.scaleEnabled = false;
    this.bendPositive = false;
    this.weight = 1.0;
  }
  IKConstraintData.prototype.toString = function () {
    return '[class dragonBones.IKConstraintData]';
  };
  IKConstraintData.prototype._onClear = function () {
    ConstraintData.prototype._onClear.call(this);
    this.scaleEnabled = false;
    this.bendPositive = false;
    this.weight = 1.0;
  };
  IKConstraintData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IKConstraintData',
    interfaces: [ConstraintData]
  };
  function PathConstraintData() {
    ConstraintData.call(this);
    this.pathSlot = null;
    this.pathDisplayData = null;
    this.bones = ArrayList_init();
    this.positionMode = PositionMode$Fixed_getInstance();
    this.spacingMode = SpacingMode$Fixed_getInstance();
    this.rotateMode = RotateMode$Chain_getInstance();
    this.position = 0.0;
    this.spacing = 0.0;
    this.rotateOffset = 0.0;
    this.rotateMix = 0.0;
    this.translateMix = 0.0;
  }
  PathConstraintData.prototype.toString = function () {
    return '[class dragonBones.PathConstraintData]';
  };
  PathConstraintData.prototype._onClear = function () {
    ConstraintData.prototype._onClear.call(this);
    this.pathSlot = null;
    this.pathDisplayData = null;
    set_lengthSet_1(this.bones, 0);
    this.positionMode = PositionMode$Fixed_getInstance();
    this.spacingMode = SpacingMode$Fixed_getInstance();
    this.rotateMode = RotateMode$Chain_getInstance();
    this.position = 0.0;
    this.spacing = 0.0;
    this.rotateOffset = 0.0;
    this.rotateMix = 0.0;
    this.translateMix = 0.0;
  };
  PathConstraintData.prototype.AddBone_ejz9f2$ = function (value) {
    push(this.bones, value);
  };
  PathConstraintData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathConstraintData',
    interfaces: [ConstraintData]
  };
  function GeometryData() {
    this.isShared = false;
    this.inheritDeform = false;
    this.offset = 0;
    this.data = null;
    this.weight = null;
  }
  GeometryData.prototype.clear = function () {
    var tmp$;
    if (!this.isShared && this.weight != null) {
      (tmp$ = this.weight) != null ? (tmp$.returnToPool(), Unit) : null;
    }
    this.isShared = false;
    this.inheritDeform = false;
    this.offset = 0;
    this.data = null;
    this.weight = null;
  };
  GeometryData.prototype.shareFrom_xkji8$ = function (value) {
    this.isShared = true;
    this.offset = value.offset;
    this.weight = value.weight;
  };
  Object.defineProperty(GeometryData.prototype, 'vertexCount', {
    get: function () {
      var intArray = ensureNotNull(this.data).intArray;
      return ensureNotNull(intArray)[this.offset + BinaryOffset$GeometryVertexCount_getInstance().index | 0];
    }
  });
  Object.defineProperty(GeometryData.prototype, 'triangleCount', {
    get: function () {
      var intArray = ensureNotNull(this.data).intArray;
      return ensureNotNull(intArray)[this.offset + BinaryOffset$GeometryTriangleCount_getInstance().index | 0];
    }
  });
  GeometryData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'GeometryData',
    interfaces: []
  };
  function DisplayData() {
    BaseObject.call(this);
    this.type = DisplayType$None_getInstance();
    this.name = '';
    this.path = '';
    this.transform = new Transform();
    this.parent_f23t2i$_0 = this.parent_f23t2i$_0;
  }
  Object.defineProperty(DisplayData.prototype, 'parent', {
    get: function () {
      if (this.parent_f23t2i$_0 == null)
        return throwUPAE('parent');
      return this.parent_f23t2i$_0;
    },
    set: function (parent) {
      this.parent_f23t2i$_0 = parent;
    }
  });
  DisplayData.prototype._onClear = function () {
    this.name = '';
    this.path = '';
    this.transform.identity();
  };
  DisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DisplayData',
    interfaces: [BaseObject]
  };
  function ImageDisplayData() {
    DisplayData.call(this);
    this.pivot = Point_init();
    this.texture = null;
  }
  ImageDisplayData.prototype.toString = function () {
    return '[class dragonBones.ImageDisplayData]';
  };
  ImageDisplayData.prototype._onClear = function () {
    DisplayData.prototype._onClear.call(this);
    this.type = DisplayType$Image_getInstance();
    this.pivot.clear();
    this.texture = null;
  };
  ImageDisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ImageDisplayData',
    interfaces: [DisplayData]
  };
  function ArmatureDisplayData() {
    DisplayData.call(this);
    this.inheritAnimation = false;
    this.actions = ArrayList_init();
    this.armature = null;
  }
  ArmatureDisplayData.prototype.toString = function () {
    return '[class dragonBones.ArmatureDisplayData]';
  };
  ArmatureDisplayData.prototype._onClear = function () {
    var tmp$;
    DisplayData.prototype._onClear.call(this);
    tmp$ = this.actions.iterator();
    while (tmp$.hasNext()) {
      var action = tmp$.next();
      action.returnToPool();
    }
    this.type = DisplayType$Armature_getInstance();
    this.inheritAnimation = false;
    set_length_1(this.actions, 0);
    this.armature = null;
  };
  ArmatureDisplayData.prototype.addAction_je7dvg$ = function (value) {
    push(this.actions, value);
  };
  ArmatureDisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ArmatureDisplayData',
    interfaces: [DisplayData]
  };
  function MeshDisplayData() {
    DisplayData.call(this);
    this.geometry = new GeometryData();
    this.texture = null;
  }
  MeshDisplayData.prototype.toString = function () {
    return '[class dragonBones.MeshDisplayData]';
  };
  MeshDisplayData.prototype._onClear = function () {
    DisplayData.prototype._onClear.call(this);
    this.type = DisplayType$Mesh_getInstance();
    this.geometry.clear();
    this.texture = null;
  };
  MeshDisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MeshDisplayData',
    interfaces: [DisplayData]
  };
  function BoundingBoxDisplayData() {
    DisplayData.call(this);
    this.boundingBox = null;
  }
  BoundingBoxDisplayData.prototype.toString = function () {
    return '[class dragonBones.BoundingBoxDisplayData]';
  };
  BoundingBoxDisplayData.prototype._onClear = function () {
    var tmp$;
    DisplayData.prototype._onClear.call(this);
    if (this.boundingBox != null) {
      (tmp$ = this.boundingBox) != null ? (tmp$.returnToPool(), Unit) : null;
    }
    this.type = DisplayType$BoundingBox_getInstance();
    this.boundingBox = null;
  };
  BoundingBoxDisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoundingBoxDisplayData',
    interfaces: [DisplayData]
  };
  function PathDisplayData() {
    DisplayData.call(this);
    this.closed = false;
    this.constantSpeed = false;
    this.geometry = new GeometryData();
    this.curveLengths = new DoubleArrayList();
  }
  PathDisplayData.prototype.toString = function () {
    return '[class dragonBones.PathDisplayData]';
  };
  PathDisplayData.prototype._onClear = function () {
    DisplayData.prototype._onClear.call(this);
    this.type = DisplayType$Path_getInstance();
    this.closed = false;
    this.constantSpeed = false;
    this.geometry.clear();
    set_lengthSet_0(this.curveLengths, 0);
  };
  PathDisplayData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathDisplayData',
    interfaces: [DisplayData]
  };
  function WeightData() {
    BaseObject.call(this);
    this.count = 0;
    this.offset = 0;
    this.bones = ArrayList_init();
  }
  WeightData.prototype.toString = function () {
    return '[class dragonBones.WeightData]';
  };
  WeightData.prototype._onClear = function () {
    this.count = 0;
    this.offset = 0;
    set_lengthSet_1(this.bones, 0);
  };
  WeightData.prototype.addBone_ejz9f2$ = function (value) {
    push(this.bones, value);
  };
  WeightData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeightData',
    interfaces: [BaseObject]
  };
  function DragonBonesData() {
    BaseObject.call(this);
    this.autoSearch = false;
    this.frameRate = 0;
    this.version = '';
    this.name = '';
    this.stage = null;
    this.frameIndices = new IntArrayList();
    this.cachedFrames = new DoubleArrayList();
    this.armatureNames = ArrayList_init();
    this.armatures = LinkedHashMap_init();
    this.binary = null;
    this.intArray = null;
    this.floatArray = null;
    this.frameIntArray = null;
    this.frameFloatArray = null;
    this.frameArray = null;
    this.timelineArray = null;
    this.colorArray = null;
    this.userData = null;
  }
  DragonBonesData.prototype.toString = function () {
    return '[class dragonBones.DragonBonesData]';
  };
  DragonBonesData.prototype._onClear = function () {
    var tmp$, tmp$_0;
    tmp$ = this.armatures.values.iterator();
    while (tmp$.hasNext()) {
      var a = tmp$.next();
      a.returnToPool();
    }
    this.armatures.clear();
    (tmp$_0 = this.userData) != null ? (tmp$_0.returnToPool(), Unit) : null;
    this.autoSearch = false;
    this.frameRate = 0;
    this.version = '';
    this.name = '';
    this.stage = null;
    this.frameIndices.clear();
    this.cachedFrames.clear();
    this.armatureNames.clear();
    this.binary = null;
    this.intArray = null;
    this.floatArray = null;
    this.frameIntArray = null;
    this.frameFloatArray = null;
    this.frameArray = null;
    this.timelineArray = null;
    this.colorArray = null;
    this.userData = null;
  };
  DragonBonesData.prototype.addArmature_ecf29l$ = function (value) {
    var $receiver = this.armatures;
    var key = value.name;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      console_getInstance().warn_vqirvp$(['Same armature: ' + value.name]);
      return;
    }
    value.parent = this;
    var $receiver_0 = this.armatures;
    var key_0 = value.name;
    $receiver_0.put_xwzc9p$(key_0, value);
    this.armatureNames.add_11rb$(value.name);
  };
  DragonBonesData.prototype.getArmature_61zpoe$ = function (armatureName) {
    var $receiver = this.armatures;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(armatureName) ? this.armatures.get_11rb$(armatureName) : null;
  };
  DragonBonesData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DragonBonesData',
    interfaces: [BaseObject]
  };
  function SkinData() {
    BaseObject.call(this);
    this.name = '';
    this.displays = LinkedHashMap_init();
    this.parent = null;
  }
  SkinData.prototype.toString = function () {
    return '[class dragonBones.SkinData]';
  };
  SkinData.prototype._onClear = function () {
    var tmp$, tmp$_0;
    tmp$ = this.displays.values.iterator();
    while (tmp$.hasNext()) {
      var slotDisplays = tmp$.next();
      tmp$_0 = slotDisplays.iterator();
      while (tmp$_0.hasNext()) {
        var display = tmp$_0.next();
        if (display != null) {
          display.returnToPool();
        }
      }
    }
    this.displays.clear();
    this.name = '';
  };
  SkinData.prototype.addDisplay_j2ttk5$ = function (slotName, value) {
    var $receiver = this.displays;
    var tmp$;
    if (!(Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(slotName)) {
      var tmp$_0 = this.displays;
      var value_0 = ArrayList_init();
      tmp$_0.put_xwzc9p$(slotName, value_0);
    }
    if (value != null) {
      value.parent = this;
    }
    var slotDisplays = this.displays.get_11rb$(slotName);
    slotDisplays != null ? slotDisplays.add_11rb$(value) : null;
  };
  SkinData.prototype.getDisplay_puj7f4$ = function (slotName, displayName) {
    var tmp$;
    var slotDisplays = this.getDisplays_pdl1vj$(slotName);
    if (slotDisplays != null) {
      tmp$ = slotDisplays.iterator();
      while (tmp$.hasNext()) {
        var display = tmp$.next();
        if (display != null && equals(display.name, displayName)) {
          return display;
        }
      }
    }
    return null;
  };
  SkinData.prototype.getDisplays_pdl1vj$ = function (slotName) {
    var $receiver = this.displays;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).get_11rb$(slotName);
  };
  SkinData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SkinData',
    interfaces: [BaseObject]
  };
  function TextureAtlasData() {
    BaseObject.call(this);
    this.autoSearch = false;
    this.width = 0;
    this.height = 0;
    this.scale = 1.0;
    this.name = '';
    this.imagePath = '';
    this.textures = LinkedHashMap_init();
  }
  TextureAtlasData.prototype._onClear = function () {
    var tmp$;
    tmp$ = this.textures.values.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      v.returnToPool();
    }
    this.textures.clear();
    this.autoSearch = false;
    this.width = 0;
    this.height = 0;
    this.scale = 1.0;
    this.name = '';
    this.imagePath = '';
  };
  TextureAtlasData.prototype.copyFrom_igjpxe$ = function (value) {
    var tmp$, tmp$_0;
    this.autoSearch = value.autoSearch;
    this.scale = value.scale;
    this.width = value.width;
    this.height = value.height;
    this.name = value.name;
    this.imagePath = value.imagePath;
    tmp$ = this.textures.values.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      v.returnToPool();
    }
    this.textures.clear();
    tmp$_0 = value.textures.keys.iterator();
    while (tmp$_0.hasNext()) {
      var k = tmp$_0.next();
      var texture = this.createTexture();
      texture.copyFrom_w2prfj$(ensureNotNull(value.textures.get_11rb$(k)));
      this.textures.put_xwzc9p$(k, texture);
    }
  };
  TextureAtlasData.prototype.addTexture_w2prfj$ = function (value) {
    var $receiver = this.textures;
    var key = value.name;
    var tmp$;
    if ((Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(key)) {
      console_getInstance().warn_vqirvp$(['Same texture: ' + value.name]);
      return;
    }
    value.parent = this;
    var $receiver_0 = this.textures;
    var key_0 = value.name;
    $receiver_0.put_xwzc9p$(key_0, value);
  };
  TextureAtlasData.prototype.getTexture_61zpoe$ = function (textureName) {
    var $receiver = this.textures;
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).containsKey_11rb$(textureName) ? this.textures.get_11rb$(textureName) : null;
  };
  TextureAtlasData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureAtlasData',
    interfaces: [BaseObject]
  };
  function TextureData() {
    TextureData$Companion_getInstance();
    BaseObject.call(this);
    this.rotated = false;
    this.name = '';
    this.region = new Rectangle_0();
    this.parent = null;
    this.frame = null;
  }
  function TextureData$Companion() {
    TextureData$Companion_instance = this;
  }
  TextureData$Companion.prototype.createRectangle = function () {
    return new Rectangle_0();
  };
  TextureData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TextureData$Companion_instance = null;
  function TextureData$Companion_getInstance() {
    if (TextureData$Companion_instance === null) {
      new TextureData$Companion();
    }
    return TextureData$Companion_instance;
  }
  TextureData.prototype._onClear = function () {
    this.rotated = false;
    this.name = '';
    this.region.clear();
    this.parent = null;
    this.frame = null;
  };
  TextureData.prototype.copyFrom_w2prfj$ = function (value) {
    this.rotated = value.rotated;
    this.name = value.name;
    this.region.copyFrom_r7la90$(value.region);
    this.parent = value.parent;
    if (this.frame == null && value.frame != null) {
      this.frame = TextureData$Companion_getInstance().createRectangle();
    }
     else if (this.frame != null && value.frame == null) {
      this.frame = null;
    }
    if (this.frame != null && value.frame != null) {
      ensureNotNull(this.frame).copyFrom_r7la90$(ensureNotNull(value.frame));
    }
  };
  TextureData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TextureData',
    interfaces: [BaseObject]
  };
  function UserData() {
    BaseObject.call(this);
    this.ints = new IntArrayList();
    this.floats = new DoubleArrayList();
    this.strings = ArrayList_init();
  }
  UserData.prototype.toString = function () {
    return '[class dragonBones.UserData]';
  };
  UserData.prototype._onClear = function () {
    this.ints.clear();
    this.floats.clear();
    this.strings.clear();
  };
  UserData.prototype.addInt_za3lpa$ = function (value) {
    push_1(this.ints, value);
  };
  UserData.prototype.addFloat_14dthe$ = function (value) {
    push_0(this.floats, value);
  };
  UserData.prototype.addString_61zpoe$ = function (value) {
    push(this.strings, value);
  };
  UserData.prototype.getInt_za3lpa$ = function (index) {
    if (index === void 0)
      index = 0;
    return index >= 0 && index < get_length(this.ints) ? this.ints.get_za3lpa$(index) : 0;
  };
  UserData.prototype.getFloat_za3lpa$ = function (index) {
    if (index === void 0)
      index = 0;
    return index >= 0 && index < get_length_0(this.floats) ? this.floats.get_za3lpa$(index) : 0.0;
  };
  UserData.prototype.getString_za3lpa$ = function (index) {
    if (index === void 0)
      index = 0;
    return index >= 0 && index < get_length_1(this.strings) ? this.strings.get_za3lpa$(index) : '';
  };
  UserData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UserData',
    interfaces: [BaseObject]
  };
  function ActionData() {
    BaseObject.call(this);
    this.type = ActionType$Play_getInstance();
    this.name = '';
    this.bone = null;
    this.slot = null;
    this.data = null;
  }
  ActionData.prototype.toString = function () {
    return '[class dragonBones.ActionData]';
  };
  ActionData.prototype._onClear = function () {
    var tmp$;
    (tmp$ = this.data) != null ? (tmp$.returnToPool(), Unit) : null;
    this.type = ActionType$Play_getInstance();
    this.name = '';
    this.bone = null;
    this.slot = null;
    this.data = null;
  };
  ActionData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionData',
    interfaces: [BaseObject]
  };
  function BinaryDataParser() {
    BinaryDataParser$Companion_getInstance();
    ObjectDataParser.call(this);
    this._binaryOffset_0 = 0;
    this._binary_44amlu$_0 = this._binary_44amlu$_0;
    this._intArrayBuffer_gfey05$_0 = this._intArrayBuffer_gfey05$_0;
    this._frameArrayBuffer_aat8gt$_0 = this._frameArrayBuffer_aat8gt$_0;
    this._timelineArrayBuffer_eolwvh$_0 = this._timelineArrayBuffer_eolwvh$_0;
  }
  Object.defineProperty(BinaryDataParser.prototype, '_binary_0', {
    get: function () {
      if (this._binary_44amlu$_0 == null)
        return throwUPAE('_binary');
      return this._binary_44amlu$_0;
    },
    set: function (_binary) {
      this._binary_44amlu$_0 = _binary;
    }
  });
  Object.defineProperty(BinaryDataParser.prototype, '_intArrayBuffer_0', {
    get: function () {
      if (this._intArrayBuffer_gfey05$_0 == null)
        return throwUPAE('_intArrayBuffer');
      return this._intArrayBuffer_gfey05$_0;
    },
    set: function (_intArrayBuffer) {
      this._intArrayBuffer_gfey05$_0 = _intArrayBuffer;
    }
  });
  Object.defineProperty(BinaryDataParser.prototype, '_frameArrayBuffer_0', {
    get: function () {
      if (this._frameArrayBuffer_aat8gt$_0 == null)
        return throwUPAE('_frameArrayBuffer');
      return this._frameArrayBuffer_aat8gt$_0;
    },
    set: function (_frameArrayBuffer) {
      this._frameArrayBuffer_aat8gt$_0 = _frameArrayBuffer;
    }
  });
  Object.defineProperty(BinaryDataParser.prototype, '_timelineArrayBuffer_0', {
    get: function () {
      if (this._timelineArrayBuffer_eolwvh$_0 == null)
        return throwUPAE('_timelineArrayBuffer');
      return this._timelineArrayBuffer_eolwvh$_0;
    },
    set: function (_timelineArrayBuffer) {
      this._timelineArrayBuffer_eolwvh$_0 = _timelineArrayBuffer;
    }
  });
  BinaryDataParser.prototype._inRange_0 = function (a, min, max) {
    return min <= a && a <= max;
  };
  BinaryDataParser.prototype._decodeUTF8_0 = function (data) {
    var tmp$;
    var EOF_byte = -1;
    var EOF_code_point = -1;
    var FATAL_POINT = 65533;
    var pos = 0;
    var result = '';
    var code_point;
    var utf8_code_point = 0;
    var utf8_bytes_needed = 0;
    var utf8_bytes_seen = 0;
    var utf8_lower_boundary = 0;
    while (data.size > pos) {
      var _byte = data.get_za3lpa$((tmp$ = pos, pos = tmp$ + 1 | 0, tmp$));
      if (_byte === EOF_byte) {
        if (utf8_bytes_needed !== 0) {
          code_point = FATAL_POINT;
        }
         else {
          code_point = EOF_code_point;
        }
      }
       else {
        if (utf8_bytes_needed === 0) {
          if (this._inRange_0(_byte, 0, 127)) {
            code_point = _byte;
          }
           else {
            if (this._inRange_0(_byte, 194, 223)) {
              utf8_bytes_needed = 1;
              utf8_lower_boundary = 128;
              utf8_code_point = _byte - 192 | 0;
            }
             else if (this._inRange_0(_byte, 224, 239)) {
              utf8_bytes_needed = 2;
              utf8_lower_boundary = 2048;
              utf8_code_point = _byte - 224 | 0;
            }
             else if (this._inRange_0(_byte, 240, 244)) {
              utf8_bytes_needed = 3;
              utf8_lower_boundary = 65536;
              utf8_code_point = _byte - 240 | 0;
            }
            var tmp$_0 = utf8_code_point;
            var b = utf8_bytes_needed;
            var $receiver = numberToDouble(64.0);
            var x = numberToDouble(b);
            utf8_code_point = numberToInt(tmp$_0 * Math_0.pow($receiver, x));
            code_point = null;
          }
        }
         else if (!this._inRange_0(_byte, 128, 191)) {
          utf8_code_point = 0;
          utf8_bytes_needed = 0;
          utf8_bytes_seen = 0;
          utf8_lower_boundary = 0;
          pos = pos - 1 | 0;
          code_point = _byte;
        }
         else {
          utf8_bytes_seen = utf8_bytes_seen + 1 | 0;
          var tmp$_1 = utf8_code_point;
          var tmp$_2 = _byte - 128 | 0;
          var b_0 = utf8_bytes_needed - utf8_bytes_seen | 0;
          var $receiver_0 = numberToDouble(64.0);
          var x_0 = numberToDouble(b_0);
          utf8_code_point = tmp$_1 + numberToInt(tmp$_2 * Math_0.pow($receiver_0, x_0)) | 0;
          if (utf8_bytes_seen !== utf8_bytes_needed) {
            code_point = null;
          }
           else {
            var cp = utf8_code_point;
            var lower_boundary = utf8_lower_boundary;
            utf8_code_point = 0;
            utf8_bytes_needed = 0;
            utf8_bytes_seen = 0;
            utf8_lower_boundary = 0;
            if (this._inRange_0(cp, lower_boundary, 1114111) && !this._inRange_0(cp, 55296, 57343)) {
              code_point = cp;
            }
             else {
              code_point = _byte;
            }
          }
        }
      }
      if (code_point != null && code_point !== EOF_code_point) {
        if (code_point <= 65535) {
          if (code_point > 0)
            result += String.fromCharCode(toChar(code_point));
        }
         else {
          code_point = code_point - 65536 | 0;
          result += String.fromCharCode(toChar(55296 + (code_point >> 10 & 1023) | 0));
          result += String.fromCharCode(toChar(56320 + (code_point & 1023) | 0));
        }
      }
    }
    return result;
  };
  BinaryDataParser.prototype._parseBinaryTimeline_0 = function (type, offset, timelineData) {
    if (timelineData === void 0)
      timelineData = null;
    var timeline = timelineData != null ? timelineData : BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(TimelineData));
    timeline.type = type;
    timeline.offset = offset;
    this._timeline = timeline;
    var keyFrameCount = this._timelineArrayBuffer_0.get_za3lpa$(timeline.offset + BinaryOffset$TimelineKeyFrameCount_getInstance().index | 0);
    if (keyFrameCount === 1) {
      timeline.frameIndicesOffset = -1;
    }
     else {
      var frameIndicesOffset = 0;
      var totalFrameCount = ensureNotNull(this._animation).frameCount + 1 | 0;
      var frameIndices = ensureNotNull(this._data).frameIndices;
      frameIndicesOffset = get_length(frameIndices);
      set_length(frameIndices, get_length(frameIndices) + totalFrameCount | 0);
      timeline.frameIndicesOffset = frameIndicesOffset;
      var iK = 0;
      var frameStart = 0;
      var frameCount = 0;
      for (var i = 0; i < totalFrameCount; i++) {
        if ((frameStart + frameCount | 0) <= i && iK < keyFrameCount) {
          frameStart = this._frameArrayBuffer_0[ensureNotNull(this._animation).frameOffset + this._timelineArrayBuffer_0.get_za3lpa$(timeline.offset + BinaryOffset$TimelineFrameOffset_getInstance().index + iK | 0) | 0];
          if (iK === (keyFrameCount - 1 | 0)) {
            frameCount = ensureNotNull(this._animation).frameCount - frameStart | 0;
          }
           else {
            frameCount = this._frameArrayBuffer_0[ensureNotNull(this._animation).frameOffset + this._timelineArrayBuffer_0.get_za3lpa$(timeline.offset + BinaryOffset$TimelineFrameOffset_getInstance().index + iK + 1 | 0) | 0] - frameStart;
          }
          iK = iK + 1 | 0;
        }
        frameIndices.set_vux9f0$(frameIndicesOffset + i | 0, iK - 1 | 0);
      }
    }
    this._timeline = null;
    return timeline;
  };
  BinaryDataParser.prototype._parseAnimation_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25;
    var animation = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(AnimationData));
    animation.blendType = DataParser$Companion_getInstance()._getAnimationBlendType_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().BLEND_TYPE, ''));
    animation.frameCount = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().DURATION, 0);
    animation.playTimes = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().PLAY_TIMES, 1);
    animation.duration = animation.frameCount / ensureNotNull(this._armature).frameRate;
    animation.fadeInTime = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().FADE_IN_TIME, 0.0);
    animation.scale = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE, 1.0);
    animation.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, DataParser$Companion_getInstance().DEFAULT_NAME);
    if (animation.name.length === 0) {
      animation.name = DataParser$Companion_getInstance().DEFAULT_NAME;
    }
    var offsets = Kotlin.isType(tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().OFFSET), IntArrayList) ? tmp$ : throwCCE();
    animation.frameIntOffset = offsets.get_za3lpa$(0);
    animation.frameFloatOffset = offsets.get_za3lpa$(1);
    animation.frameOffset = offsets.get_za3lpa$(2);
    this._animation = animation;
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTION)) {
      animation.actionTimeline = this._parseBinaryTimeline_0(TimelineType$Action_getInstance(), typeof (tmp$_0 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTION)) === 'number' ? tmp$_0 : throwCCE());
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().Z_ORDER)) {
      animation.zOrderTimeline = this._parseBinaryTimeline_0(TimelineType$ZOrder_getInstance(), typeof (tmp$_1 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().Z_ORDER)) === 'number' ? tmp$_1 : throwCCE());
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE)) {
      var rawTimeliness = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE);
      tmp$_2 = ObjectDataParser$Companion_getInstance().get_keys_ntq51o$(rawTimeliness).iterator();
      while (tmp$_2.hasNext()) {
        var k = tmp$_2.next();
        var rawTimelines = Kotlin.isType(tmp$_3 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawTimeliness, k), IntArrayList) ? tmp$_3 : throwCCE();
        tmp$_5 = (tmp$_4 = this._armature) != null ? tmp$_4.getBone_pdl1vj$(k) : null;
        if (tmp$_5 == null) {
          continue;
        }
        var bone = tmp$_5;
        tmp$_6 = rawTimelines.size;
        for (var i = 0; i < tmp$_6; i += 2) {
          var timelineType = TimelineType$Companion_getInstance().get_za3lpa$(rawTimelines.get_za3lpa$(i));
          var timelineOffset = rawTimelines.get_za3lpa$(i + 1 | 0);
          var timeline = this._parseBinaryTimeline_0(timelineType, timelineOffset);
          (tmp$_7 = this._animation) != null ? (tmp$_7.addBoneTimeline_h179rx$(bone.name, timeline), Unit) : null;
        }
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT)) {
      var rawTimeliness_0 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT);
      tmp$_8 = ObjectDataParser$Companion_getInstance().get_keys_ntq51o$(rawTimeliness_0).iterator();
      while (tmp$_8.hasNext()) {
        var k_0 = tmp$_8.next();
        var rawTimelines_0 = Kotlin.isType(tmp$_9 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawTimeliness_0, k_0), IntArrayList) ? tmp$_9 : throwCCE();
        tmp$_11 = (tmp$_10 = this._armature) != null ? tmp$_10.getSlot_pdl1vj$(k_0) : null;
        if (tmp$_11 == null) {
          continue;
        }
        var slot = tmp$_11;
        tmp$_12 = rawTimelines_0.size;
        for (var i_0 = 0; i_0 < tmp$_12; i_0 += 2) {
          var timelineType_0 = TimelineType$Companion_getInstance().get_za3lpa$(rawTimelines_0.get_za3lpa$(i_0));
          var timelineOffset_0 = rawTimelines_0.get_za3lpa$(i_0 + 1 | 0);
          var timeline_0 = this._parseBinaryTimeline_0(timelineType_0, timelineOffset_0);
          (tmp$_13 = this._animation) != null ? (tmp$_13.addSlotTimeline_h179rx$(slot.name, timeline_0), Unit) : null;
        }
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().CONSTRAINT)) {
      var rawTimeliness_1 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().CONSTRAINT);
      tmp$_14 = ObjectDataParser$Companion_getInstance().get_keys_ntq51o$(rawTimeliness_1).iterator();
      while (tmp$_14.hasNext()) {
        var k_1 = tmp$_14.next();
        var rawTimelines_1 = Kotlin.isType(tmp$_15 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawTimeliness_1, k_1), IntArrayList) ? tmp$_15 : throwCCE();
        tmp$_17 = (tmp$_16 = this._armature) != null ? tmp$_16.getConstraint_61zpoe$(k_1) : null;
        if (tmp$_17 == null) {
          continue;
        }
        var constraint = tmp$_17;
        tmp$_18 = rawTimelines_1.size;
        for (var i_1 = 0; i_1 < tmp$_18; i_1 += 2) {
          var timelineType_1 = TimelineType$Companion_getInstance().get_za3lpa$(rawTimelines_1.get_za3lpa$(i_1));
          var timelineOffset_1 = rawTimelines_1.get_za3lpa$(i_1 + 1 | 0);
          var timeline_1 = this._parseBinaryTimeline_0(timelineType_1, timelineOffset_1);
          (tmp$_19 = this._animation) != null ? (tmp$_19.addConstraintTimeline_h179rx$(constraint.name, timeline_1), Unit) : null;
        }
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TIMELINE)) {
      var rawTimelines_2 = Kotlin.isType(tmp$_20 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TIMELINE), ArrayList) ? tmp$_20 : throwCCE();
      tmp$_21 = rawTimelines_2.iterator();
      while (tmp$_21.hasNext()) {
        var rawTimeline = tmp$_21.next();
        var timelineOffset_2 = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawTimeline, DataParser$Companion_getInstance().OFFSET, 0);
        if (timelineOffset_2 >= 0) {
          var timelineType_2 = TimelineType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawTimeline, DataParser$Companion_getInstance().TYPE, TimelineType$Action_getInstance().id));
          var timelineName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline, DataParser$Companion_getInstance().NAME, '');
          var timeline_2 = null;
          if (timelineType_2 === TimelineType$AnimationProgress_getInstance() && animation.blendType !== AnimationBlendType$None_getInstance()) {
            timeline_2 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(AnimationTimelineData));
            var animaitonTimeline = timeline_2;
            animaitonTimeline.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTimeline, DataParser$Companion_getInstance().X, 0.0);
            animaitonTimeline.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTimeline, DataParser$Companion_getInstance().Y, 0.0);
          }
          timeline_2 = this._parseBinaryTimeline_0(timelineType_2, timelineOffset_2, timeline_2);
          switch (timelineType_2.name) {
            case 'Action':
              break;
            case 'ZOrder':
              break;
            case 'BoneTranslate':
            case 'BoneRotate':
            case 'BoneScale':
            case 'Surface':
            case 'BoneAlpha':
              (tmp$_22 = this._animation) != null ? (tmp$_22.addBoneTimeline_h179rx$(timelineName, timeline_2), Unit) : null;
              break;
            case 'SlotDisplay':
            case 'SlotColor':
            case 'SlotDeform':
            case 'SlotZIndex':
            case 'SlotAlpha':
              (tmp$_23 = this._animation) != null ? (tmp$_23.addSlotTimeline_h179rx$(timelineName, timeline_2), Unit) : null;
              break;
            case 'IKConstraint':
              (tmp$_24 = this._animation) != null ? (tmp$_24.addConstraintTimeline_h179rx$(timelineName, timeline_2), Unit) : null;
              break;
            case 'AnimationProgress':
            case 'AnimationWeight':
            case 'AnimationParameter':
              (tmp$_25 = this._animation) != null ? (tmp$_25.addAnimationTimeline_h179rx$(timelineName, timeline_2), Unit) : null;
              break;
          }
        }
      }
    }
    this._animation = null;
    return animation;
  };
  BinaryDataParser.prototype._parseGeometry_9lxtbg$ = function (rawData, geometry) {
    var tmp$, tmp$_0;
    geometry.offset = typeof (tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().OFFSET)) === 'number' ? tmp$ : throwCCE();
    geometry.data = this._data;
    var weightOffset = this._intArrayBuffer_0[geometry.offset + BinaryOffset$GeometryWeightOffset_getInstance().index | 0];
    if (weightOffset >= 0) {
      var weight = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(WeightData));
      var vertexCount = this._intArrayBuffer_0[geometry.offset + BinaryOffset$GeometryVertexCount_getInstance().index | 0];
      var boneCount = this._intArrayBuffer_0[weightOffset + BinaryOffset$WeigthBoneCount_getInstance().index | 0];
      weight.offset = weightOffset;
      for (var i = 0; i < boneCount; i++) {
        var boneIndex = this._intArrayBuffer_0[weightOffset + BinaryOffset$WeigthBoneIndices_getInstance().index + i | 0];
        weight.addBone_ejz9f2$(this._rawBones.get_za3lpa$(boneIndex));
      }
      var boneIndicesOffset = (weightOffset + BinaryOffset$WeigthBoneIndices_getInstance().index | 0) + boneCount;
      var weightCount = 0;
      for (var i_0 = 0; i_0 < vertexCount; i_0++) {
        var vertexBoneCount = this._intArrayBuffer_0[tmp$_0 = boneIndicesOffset, boneIndicesOffset = tmp$_0 + 1 | 0, tmp$_0];
        weightCount = weightCount + vertexBoneCount;
        boneIndicesOffset = boneIndicesOffset + vertexBoneCount;
      }
      weight.count = weightCount;
      geometry.weight = weight;
    }
  };
  BinaryDataParser.prototype._parseArray_s8jyv4$ = function (rawData) {
    var tmp$;
    var offsets = Kotlin.isType(tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().OFFSET), IntArrayList) ? tmp$ : throwCCE();
    var l1 = offsets.get_za3lpa$(1);
    var l2 = offsets.get_za3lpa$(3);
    var l3 = offsets.get_za3lpa$(5);
    var l4 = offsets.get_za3lpa$(7);
    var l5 = offsets.get_za3lpa$(9);
    var l6 = offsets.get_za3lpa$(11);
    var l7 = offsets.size > 12 ? offsets.get_za3lpa$(13) : 0;
    var binary = this._binary_0;
    var intArray = sliceInt16Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(0) | 0, l1 / 2 | 0);
    var floatArray = sliceFloat32Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(2) | 0, l2 / 4 | 0);
    var frameIntArray = sliceInt16Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(4) | 0, l3 / 2 | 0);
    var frameFloatArray = sliceFloat32Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(6) | 0, l4 / 4 | 0);
    var frameArray = sliceInt16Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(8) | 0, l5 / 2 | 0);
    var timelineArray = sliceUint16Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(10) | 0, l6 / 2 | 0);
    var colorArray = l7 > 0 ? sliceInt16Buffer(binary, this._binaryOffset_0 + offsets.get_za3lpa$(12) | 0, l7 / 2 | 0) : intArray;
    ensureNotNull(this._data).binary = this._binary_0;
    ensureNotNull(this._data).intArray = intArray;
    this._intArrayBuffer_0 = intArray;
    ensureNotNull(this._data).floatArray = floatArray;
    ensureNotNull(this._data).frameIntArray = frameIntArray;
    ensureNotNull(this._data).frameFloatArray = frameFloatArray;
    ensureNotNull(this._data).frameArray = frameArray;
    this._frameArrayBuffer_0 = frameArray;
    ensureNotNull(this._data).timelineArray = timelineArray;
    this._timelineArrayBuffer_0 = timelineArray;
    ensureNotNull(this._data).colorArray = colorArray;
  };
  BinaryDataParser.prototype.parseDragonBonesData_p20sj2$$default = function (rawData, scale) {
    var tmp$;
    var tag = NewUint8Buffer(Kotlin.isType(tmp$ = rawData, ArrayBuffer) ? tmp$ : throwCCE(), 0, 8);
    if (tag.get_za3lpa$(0) !== 68 || tag.get_za3lpa$(1) !== 66 || tag.get_za3lpa$(2) !== 68 || tag.get_za3lpa$(3) !== 84) {
      console_getInstance().assert_8kj6y5$(false, 'Nonsupport data.');
      return null;
    }
    var headerLength = NewInt32Buffer(rawData, 8, 1)[0];
    var headerBytes = NewUint8Buffer(rawData, 12, headerLength);
    var headerString = this._decodeUTF8_0(headerBytes);
    var header = json.Json.parse_61zpoe$(headerString);
    this._binaryOffset_0 = 12 + headerLength | 0;
    this._binary_0 = rawData;
    return this.parseDragonBonesData_p20sj2$(header, scale, ObjectDataParser.prototype.parseDragonBonesData_p20sj2$$default.bind(this));
  };
  function BinaryDataParser$Companion() {
    BinaryDataParser$Companion_instance = this;
    this._binaryDataParserInstance_0 = null;
  }
  BinaryDataParser$Companion.prototype.getInstance = function () {
    if (BinaryDataParser$Companion_getInstance()._binaryDataParserInstance_0 == null) {
      BinaryDataParser$Companion_getInstance()._binaryDataParserInstance_0 = new BinaryDataParser();
    }
    return ensureNotNull(BinaryDataParser$Companion_getInstance()._binaryDataParserInstance_0);
  };
  BinaryDataParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BinaryDataParser$Companion_instance = null;
  function BinaryDataParser$Companion_getInstance() {
    if (BinaryDataParser$Companion_instance === null) {
      new BinaryDataParser$Companion();
    }
    return BinaryDataParser$Companion_instance;
  }
  BinaryDataParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinaryDataParser',
    interfaces: [ObjectDataParser]
  };
  function DataParser() {
    DataParser$Companion_getInstance();
  }
  function DataParser$Companion() {
    DataParser$Companion_instance = this;
    this.DATA_VERSION_2_3 = '2.3';
    this.DATA_VERSION_3_0 = '3.0';
    this.DATA_VERSION_4_0 = '4.0';
    this.DATA_VERSION_4_5 = '4.5';
    this.DATA_VERSION_5_0 = '5.0';
    this.DATA_VERSION_5_5 = '5.5';
    this.DATA_VERSION_5_6 = '5.6';
    this.DATA_VERSION = DataParser$Companion_getInstance().DATA_VERSION_5_6;
    this.DATA_VERSIONS = [DataParser$Companion_getInstance().DATA_VERSION_4_0, DataParser$Companion_getInstance().DATA_VERSION_4_5, DataParser$Companion_getInstance().DATA_VERSION_5_0, DataParser$Companion_getInstance().DATA_VERSION_5_5, DataParser$Companion_getInstance().DATA_VERSION_5_6];
    this.TEXTURE_ATLAS = 'textureAtlas';
    this.SUB_TEXTURE = 'SubTexture';
    this.FORMAT = 'format';
    this.IMAGE_PATH = 'imagePath';
    this.WIDTH = 'width';
    this.HEIGHT = 'height';
    this.ROTATED = 'rotated';
    this.FRAME_X = 'frameX';
    this.FRAME_Y = 'frameY';
    this.FRAME_WIDTH = 'frameWidth';
    this.FRAME_HEIGHT = 'frameHeight';
    this.DRADON_BONES = 'dragonBones';
    this.USER_DATA = 'userData';
    this.ARMATURE = 'armature';
    this.CANVAS = 'canvas';
    this.BONE = 'bone';
    this.SURFACE = 'surface';
    this.SLOT = 'slot';
    this.CONSTRAINT = 'constraint';
    this.SKIN = 'skin';
    this.DISPLAY = 'display';
    this.FRAME = 'frame';
    this.IK = 'ik';
    this.PATH_CONSTRAINT = 'path';
    this.ANIMATION = 'animation';
    this.TIMELINE = 'timeline';
    this.FFD = 'ffd';
    this.TRANSLATE_FRAME = 'translateFrame';
    this.ROTATE_FRAME = 'rotateFrame';
    this.SCALE_FRAME = 'scaleFrame';
    this.DISPLAY_FRAME = 'displayFrame';
    this.COLOR_FRAME = 'colorFrame';
    this.DEFAULT_ACTIONS = 'defaultActions';
    this.ACTIONS = 'actions';
    this.EVENTS = 'events';
    this.INTS = 'ints';
    this.FLOATS = 'floats';
    this.STRINGS = 'strings';
    this.TRANSFORM = 'transform';
    this.PIVOT = 'pivot';
    this.AABB = 'aabb';
    this.COLOR = 'color';
    this.VERSION = 'version';
    this.COMPATIBLE_VERSION = 'compatibleVersion';
    this.FRAME_RATE = 'frameRate';
    this.TYPE = 'type';
    this.SUB_TYPE = 'subType';
    this.NAME = 'name';
    this.PARENT = 'parent';
    this.TARGET = 'target';
    this.STAGE = 'stage';
    this.SHARE = 'share';
    this.PATH = 'path';
    this.LENGTH = 'length';
    this.DISPLAY_INDEX = 'displayIndex';
    this.Z_ORDER = 'zOrder';
    this.Z_INDEX = 'zIndex';
    this.BLEND_MODE = 'blendMode';
    this.INHERIT_TRANSLATION = 'inheritTranslation';
    this.INHERIT_ROTATION = 'inheritRotation';
    this.INHERIT_SCALE = 'inheritScale';
    this.INHERIT_REFLECTION = 'inheritReflection';
    this.INHERIT_ANIMATION = 'inheritAnimation';
    this.INHERIT_DEFORM = 'inheritDeform';
    this.SEGMENT_X = 'segmentX';
    this.SEGMENT_Y = 'segmentY';
    this.BEND_POSITIVE = 'bendPositive';
    this.CHAIN = 'chain';
    this.WEIGHT = 'weight';
    this.BLEND_TYPE = 'blendType';
    this.FADE_IN_TIME = 'fadeInTime';
    this.PLAY_TIMES = 'playTimes';
    this.SCALE = 'scale';
    this.OFFSET = 'offset';
    this.POSITION = 'position';
    this.DURATION = 'duration';
    this.TWEEN_EASING = 'tweenEasing';
    this.TWEEN_ROTATE = 'tweenRotate';
    this.TWEEN_SCALE = 'tweenScale';
    this.CLOCK_WISE = 'clockwise';
    this.CURVE = 'curve';
    this.SOUND = 'sound';
    this.EVENT = 'event';
    this.ACTION = 'action';
    this.X = 'x';
    this.Y = 'y';
    this.SKEW_X = 'skX';
    this.SKEW_Y = 'skY';
    this.SCALE_X = 'scX';
    this.SCALE_Y = 'scY';
    this.VALUE = 'value';
    this.ROTATE = 'rotate';
    this.SKEW = 'skew';
    this.ALPHA = 'alpha';
    this.ALPHA_OFFSET = 'aO';
    this.RED_OFFSET = 'rO';
    this.GREEN_OFFSET = 'gO';
    this.BLUE_OFFSET = 'bO';
    this.ALPHA_MULTIPLIER = 'aM';
    this.RED_MULTIPLIER = 'rM';
    this.GREEN_MULTIPLIER = 'gM';
    this.BLUE_MULTIPLIER = 'bM';
    this.UVS = 'uvs';
    this.VERTICES = 'vertices';
    this.TRIANGLES = 'triangles';
    this.WEIGHTS = 'weights';
    this.SLOT_POSE = 'slotPose';
    this.BONE_POSE = 'bonePose';
    this.BONES = 'bones';
    this.POSITION_MODE = 'positionMode';
    this.SPACING_MODE = 'spacingMode';
    this.ROTATE_MODE = 'rotateMode';
    this.SPACING = 'spacing';
    this.ROTATE_OFFSET = 'rotateOffset';
    this.ROTATE_MIX = 'rotateMix';
    this.TRANSLATE_MIX = 'translateMix';
    this.TARGET_DISPLAY = 'targetDisplay';
    this.CLOSED = 'closed';
    this.CONSTANT_SPEED = 'constantSpeed';
    this.VERTEX_COUNT = 'vertexCount';
    this.LENGTHS = 'lengths';
    this.GOTO_AND_PLAY = 'gotoAndPlay';
    this.DEFAULT_NAME = 'default';
  }
  DataParser$Companion.prototype._getArmatureType_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = ArmatureType$Armature_getInstance();
    else
      switch (tmp$) {
        case 'stage':
          tmp$_0 = ArmatureType$Stage_getInstance();
          break;
        case 'armature':
          tmp$_0 = ArmatureType$Armature_getInstance();
          break;
        case 'movieclip':
          tmp$_0 = ArmatureType$MovieClip_getInstance();
          break;
        default:tmp$_0 = ArmatureType$Armature_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getBoneType_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = BoneType$Bone_getInstance();
    else
      switch (tmp$) {
        case 'bone':
          tmp$_0 = BoneType$Bone_getInstance();
          break;
        case 'surface':
          tmp$_0 = BoneType$Surface_getInstance();
          break;
        default:tmp$_0 = BoneType$Bone_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getPositionMode_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = PositionMode$Percent_getInstance();
    else
      switch (tmp$) {
        case 'percent':
          tmp$_0 = PositionMode$Percent_getInstance();
          break;
        case 'fixed':
          tmp$_0 = PositionMode$Fixed_getInstance();
          break;
        default:tmp$_0 = PositionMode$Percent_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getSpacingMode_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = SpacingMode$Length_getInstance();
    else
      switch (tmp$) {
        case 'length':
          tmp$_0 = SpacingMode$Length_getInstance();
          break;
        case 'percent':
          tmp$_0 = SpacingMode$Percent_getInstance();
          break;
        case 'fixed':
          tmp$_0 = SpacingMode$Fixed_getInstance();
          break;
        default:tmp$_0 = SpacingMode$Length_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getRotateMode_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = RotateMode$Tangent_getInstance();
    else
      switch (tmp$) {
        case 'tangent':
          tmp$_0 = RotateMode$Tangent_getInstance();
          break;
        case 'chain':
          tmp$_0 = RotateMode$Chain_getInstance();
          break;
        case 'chainscale':
          tmp$_0 = RotateMode$ChainScale_getInstance();
          break;
        default:tmp$_0 = RotateMode$Tangent_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getDisplayType_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = DisplayType$Image_getInstance();
    else
      switch (tmp$) {
        case 'image':
          tmp$_0 = DisplayType$Image_getInstance();
          break;
        case 'mesh':
          tmp$_0 = DisplayType$Mesh_getInstance();
          break;
        case 'armature':
          tmp$_0 = DisplayType$Armature_getInstance();
          break;
        case 'boundingbox':
          tmp$_0 = DisplayType$BoundingBox_getInstance();
          break;
        case 'path':
          tmp$_0 = DisplayType$Path_getInstance();
          break;
        default:tmp$_0 = DisplayType$Image_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getBoundingBoxType_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = BoundingBoxType$Rectangle_getInstance();
    else
      switch (tmp$) {
        case 'rectangle':
          tmp$_0 = BoundingBoxType$Rectangle_getInstance();
          break;
        case 'ellipse':
          tmp$_0 = BoundingBoxType$Ellipse_getInstance();
          break;
        case 'polygon':
          tmp$_0 = BoundingBoxType$Polygon_getInstance();
          break;
        default:tmp$_0 = BoundingBoxType$Rectangle_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getBlendMode_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = BlendMode$Normal_getInstance();
    else
      switch (tmp$) {
        case 'normal':
          tmp$_0 = BlendMode$Normal_getInstance();
          break;
        case 'add':
          tmp$_0 = BlendMode$Add_getInstance();
          break;
        case 'alpha':
          tmp$_0 = BlendMode$Alpha_getInstance();
          break;
        case 'darken':
          tmp$_0 = BlendMode$Darken_getInstance();
          break;
        case 'difference':
          tmp$_0 = BlendMode$Difference_getInstance();
          break;
        case 'erase':
          tmp$_0 = BlendMode$Erase_getInstance();
          break;
        case 'hardlight':
          tmp$_0 = BlendMode$HardLight_getInstance();
          break;
        case 'invert':
          tmp$_0 = BlendMode$Invert_getInstance();
          break;
        case 'layer':
          tmp$_0 = BlendMode$Layer_getInstance();
          break;
        case 'lighten':
          tmp$_0 = BlendMode$Lighten_getInstance();
          break;
        case 'multiply':
          tmp$_0 = BlendMode$Multiply_getInstance();
          break;
        case 'overlay':
          tmp$_0 = BlendMode$Overlay_getInstance();
          break;
        case 'screen':
          tmp$_0 = BlendMode$Screen_getInstance();
          break;
        case 'subtract':
          tmp$_0 = BlendMode$Subtract_getInstance();
          break;
        default:tmp$_0 = BlendMode$Normal_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getAnimationBlendType_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = AnimationBlendType$None_getInstance();
    else
      switch (tmp$) {
        case 'none':
          tmp$_0 = AnimationBlendType$None_getInstance();
          break;
        case '1d':
          tmp$_0 = AnimationBlendType$E1D_getInstance();
          break;
        default:tmp$_0 = AnimationBlendType$None_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype._getActionType_pdl1vj$ = function (value) {
    var tmp$, tmp$_0;
    tmp$ = value != null ? value.toLowerCase() : null;
    if (tmp$ == null)
      tmp$_0 = ActionType$Play_getInstance();
    else
      switch (tmp$) {
        case 'play':
          tmp$_0 = ActionType$Play_getInstance();
          break;
        case 'frame':
          tmp$_0 = ActionType$Frame_getInstance();
          break;
        case 'sound':
          tmp$_0 = ActionType$Sound_getInstance();
          break;
        default:tmp$_0 = ActionType$Play_getInstance();
          break;
      }
    return tmp$_0;
  };
  DataParser$Companion.prototype.parseDragonBonesDataJson_io5o9c$ = function (data, scale) {
    if (scale === void 0)
      scale = 1.0;
    return (new ObjectDataParser()).parseDragonBonesData_p20sj2$(json.Json.parse_61zpoe$(data), scale);
  };
  DataParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DataParser$Companion_instance = null;
  function DataParser$Companion_getInstance() {
    if (DataParser$Companion_instance === null) {
      new DataParser$Companion();
    }
    return DataParser$Companion_instance;
  }
  DataParser.prototype.parseDragonBonesData_p20sj2$ = function (rawData, scale, callback$default) {
    if (scale === void 0)
      scale = 1.0;
    return callback$default ? callback$default(rawData, scale) : this.parseDragonBonesData_p20sj2$$default(rawData, scale);
  };
  DataParser.prototype.parseTextureAtlasData_fec78$ = function (rawData, textureAtlasData, scale, callback$default) {
    if (scale === void 0)
      scale = 1.0;
    return callback$default ? callback$default(rawData, textureAtlasData, scale) : this.parseTextureAtlasData_fec78$$default(rawData, textureAtlasData, scale);
  };
  DataParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DataParser',
    interfaces: []
  };
  function FrameValueType(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function FrameValueType_initFields() {
    FrameValueType_initFields = function () {
    };
    FrameValueType$STEP_instance = new FrameValueType('STEP', 0, 0);
    FrameValueType$INT_instance = new FrameValueType('INT', 1, 1);
    FrameValueType$FLOAT_instance = new FrameValueType('FLOAT', 2, 2);
  }
  var FrameValueType$STEP_instance;
  function FrameValueType$STEP_getInstance() {
    FrameValueType_initFields();
    return FrameValueType$STEP_instance;
  }
  var FrameValueType$INT_instance;
  function FrameValueType$INT_getInstance() {
    FrameValueType_initFields();
    return FrameValueType$INT_instance;
  }
  var FrameValueType$FLOAT_instance;
  function FrameValueType$FLOAT_getInstance() {
    FrameValueType_initFields();
    return FrameValueType$FLOAT_instance;
  }
  FrameValueType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FrameValueType',
    interfaces: [Enum]
  };
  function FrameValueType$values() {
    return [FrameValueType$STEP_getInstance(), FrameValueType$INT_getInstance(), FrameValueType$FLOAT_getInstance()];
  }
  FrameValueType.values = FrameValueType$values;
  function FrameValueType$valueOf(name) {
    switch (name) {
      case 'STEP':
        return FrameValueType$STEP_getInstance();
      case 'INT':
        return FrameValueType$INT_getInstance();
      case 'FLOAT':
        return FrameValueType$FLOAT_getInstance();
      default:throwISE('No enum constant com.dragonbones.parser.FrameValueType.' + name);
    }
  }
  FrameValueType.valueOf_61zpoe$ = FrameValueType$valueOf;
  function ObjectDataParser() {
    ObjectDataParser$Companion_getInstance();
    DataParser.call(this);
    this._rawTextureAtlasIndex = 0;
    this._rawBones = ArrayList_init();
    this._data = null;
    this._armature = null;
    this._bone = null;
    this._geometry = null;
    this._slot = null;
    this._skin = null;
    this._mesh = null;
    this._animation = null;
    this._timeline = null;
    this._rawTextureAtlases = null;
    this._frameValueType_ucgpqr$_0 = FrameValueType$STEP_getInstance();
    this._defaultColorOffset_1uxjcs$_0 = -1;
    this._prevClockwise_hkgu6c$_0 = 0.0;
    this._prevRotation_6xu96o$_0 = 0.0;
    this._frameDefaultValue_3xk5qe$_0 = 0.0;
    this._frameValueScale_giiyd9$_0 = 1.0;
    this._helpMatrixA_y87r8k$_0 = Matrix_init();
    this._helpMatrixB_y87r9f$_0 = Matrix_init();
    this._helpTransform_9prt94$_0 = new Transform();
    this._helpColorTransform_ymc72f$_0 = new ColorTransform();
    this._helpPoint_jjup10$_0 = Point_init();
    this._helpArray_chz897$_0 = new DoubleArrayList();
    this._intArray_9mqhtz$_0 = new IntArrayList();
    this._floatArray_brc40c$_0 = new DoubleArrayList();
    this._frameIntArray_4wyde4$_0 = new IntArrayList();
    this._frameFloatArray_204v09$_0 = new DoubleArrayList();
    this._frameArray_fpzfut$_0 = new DoubleArrayList();
    this._timelineArray_a4oiyd$_0 = new DoubleArrayList();
    this._colorArray_y9qg6z$_0 = new IntArrayList();
    this._cacheRawMeshes_xt63f4$_0 = ArrayList_init();
    this._cacheMeshes_kkxcli$_0 = ArrayList_init();
    this._actionFrames_eyxsnf$_0 = ArrayList_init();
    this._weightSlotPose_ms86fe$_0 = LinkedHashMap_init();
    this._weightBonePoses_3ak4ir$_0 = LinkedHashMap_init();
    this._cacheBones_romzic$_0 = LinkedHashMap_init();
    this._slotChildActions_t29hla$_0 = LinkedHashMap_init();
  }
  function ObjectDataParser$Companion() {
    ObjectDataParser$Companion_instance = this;
    this._objectDataParserInstance_0 = new ObjectDataParser();
  }
  ObjectDataParser$Companion.prototype.get_s5ds1e$ = function ($receiver, key) {
    return lang.Dynamic.get_oaftn8$($receiver, key);
  };
  ObjectDataParser$Companion.prototype.contains_s5ds1e$ = function ($receiver, key) {
    return this.get_s5ds1e$($receiver, key) != null;
  };
  ObjectDataParser$Companion.prototype.get_keys_ntq51o$ = function ($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).keys;
  };
  ObjectDataParser$Companion.prototype.get_values_ntq51o$ = function ($receiver) {
    var tmp$;
    return (Kotlin.isType(tmp$ = $receiver, Map) ? tmp$ : throwCCE()).values;
  };
  ObjectDataParser$Companion.prototype.get_list_ntq51o$ = function ($receiver) {
    return lang.Dynamic.toList_s8jyv4$($receiver);
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  ObjectDataParser$Companion.prototype.get_doubleArray_ntq51o$ = function ($receiver) {
    if (Kotlin.isDoubleArray($receiver))
      return $receiver;
    if (Kotlin.isType($receiver, DoubleArrayList))
      return $receiver.toDoubleArray();
    if (Kotlin.isType($receiver, List)) {
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0;
        destination.add_11rb$(numberToDouble(Kotlin.isNumber(tmp$_0 = item) ? tmp$_0 : throwCCE()));
      }
      return toDoubleArray(destination);
    }
    throw IllegalStateException_init(("Can't cast '" + toString($receiver) + "' to doubleArray").toString());
  };
  ObjectDataParser$Companion.prototype.get_doubleArrayList_ntq51o$ = function ($receiver) {
    if (Kotlin.isDoubleArray($receiver))
      return DoubleArrayList_init($receiver.slice());
    if (Kotlin.isType($receiver, DoubleArrayList))
      return $receiver;
    if (Kotlin.isType($receiver, List)) {
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0;
        destination.add_11rb$(numberToDouble(Kotlin.isNumber(tmp$_0 = item) ? tmp$_0 : throwCCE()));
      }
      return DoubleArrayList_init(toDoubleArray(destination).slice());
    }
    throw IllegalStateException_init(("Can't cast '" + toString($receiver) + "' to doubleArrayList").toString());
  };
  ObjectDataParser$Companion.prototype.get_intArrayList_ntq51o$ = function ($receiver) {
    if (Kotlin.isIntArray($receiver))
      return IntArrayList_init($receiver.slice());
    if (Kotlin.isType($receiver, IntArrayList))
      return $receiver;
    if (Kotlin.isType($receiver, List)) {
      var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0;
        destination.add_11rb$(numberToInt(Kotlin.isNumber(tmp$_0 = item) ? tmp$_0 : throwCCE()));
      }
      return IntArrayList_init(toIntArray(destination).slice());
    }
    throw IllegalStateException_init(("Can't '" + toString($receiver) + "' cast to intArrayList").toString());
  };
  ObjectDataParser$Companion.prototype._getBoolean_bttdmd$ = function (rawData, key, defaultValue) {
    var tmp$;
    var value = this.get_s5ds1e$(rawData, key);
    if (value == null)
      tmp$ = defaultValue;
    else if (typeof value === 'boolean')
      tmp$ = value;
    else if (Kotlin.isNumber(value))
      tmp$ = numberToDouble(value) !== 0.0;
    else if (typeof value === 'string') {
      switch (value) {
        case '0':
        case 'NaN':
        case '':
        case 'false':
        case 'null':
        case 'undefined':
          tmp$ = false;
          break;
        default:tmp$ = true;
          break;
      }
    }
     else
      tmp$ = defaultValue;
    return tmp$;
  };
  ObjectDataParser$Companion.prototype._getNumber_5jja3g$ = function (rawData, key, defaultValue) {
    var tmp$, tmp$_0;
    var value = (tmp$ = this.get_s5ds1e$(rawData, key)) == null || Kotlin.isNumber(tmp$) ? tmp$ : null;
    if (value != null && !equals(value, kotlin_js_internal_DoubleCompanionObject.NaN)) {
      tmp$_0 = numberToDouble(value);
    }
     else {
      tmp$_0 = defaultValue;
    }
    return tmp$_0;
  };
  ObjectDataParser$Companion.prototype._getInt_n87918$ = function (rawData, key, defaultValue) {
    var tmp$, tmp$_0;
    var value = (tmp$ = this.get_s5ds1e$(rawData, key)) == null || Kotlin.isNumber(tmp$) ? tmp$ : null;
    if (value != null && !equals(value, kotlin_js_internal_DoubleCompanionObject.NaN)) {
      tmp$_0 = numberToInt(value);
    }
     else {
      tmp$_0 = defaultValue;
    }
    return tmp$_0;
  };
  ObjectDataParser$Companion.prototype._getString_1mu92c$ = function (rawData, key, defaultValue) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = this.get_s5ds1e$(rawData, key)) != null ? tmp$.toString() : null) != null ? tmp$_0 : defaultValue;
  };
  ObjectDataParser$Companion.prototype.getInstance = function () {
    return ObjectDataParser$Companion_getInstance()._objectDataParserInstance_0;
  };
  ObjectDataParser$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ObjectDataParser$Companion_instance = null;
  function ObjectDataParser$Companion_getInstance() {
    if (ObjectDataParser$Companion_instance === null) {
      new ObjectDataParser$Companion();
    }
    return ObjectDataParser$Companion_instance;
  }
  ObjectDataParser.prototype._getCurvePoint_vusyvb$_0 = function (x1, y1, x2, y2, x3, y3, x4, y4, t, result) {
    var l_t = 1.0 - t;
    var powA = l_t * l_t;
    var powB = t * t;
    var kA = l_t * powA;
    var kB = 3.0 * t * powA;
    var kC = 3.0 * l_t * powB;
    var kD = t * powB;
    result.x = kA * x1 + kB * x2 + kC * x3 + kD * x4;
    result.y = kA * y1 + kB * y2 + kC * y3 + kD * y4;
  };
  ObjectDataParser.prototype._samplingEasingCurve_bwr4ee$_0 = function (curve, samples) {
    var tmp$, tmp$_0;
    var curveCount = curve.size;
    if (curveCount % 3 === 1) {
      var stepIndex = -2;
      var l = samples.size;
      tmp$ = samples.size;
      for (var i = 0; i < tmp$; i++) {
        var t = (i + 1 | 0) / (l + 1);
        while (((stepIndex + 6 | 0) < curveCount ? curve.get_za3lpa$(stepIndex + 6 | 0) : 1.0) < t) {
          stepIndex = stepIndex + 6 | 0;
        }
        var isInCurve = stepIndex >= 0 && (stepIndex + 6 | 0) < curveCount;
        var x1 = isInCurve ? curve.get_za3lpa$(stepIndex) : 0.0;
        var y1 = isInCurve ? curve.get_za3lpa$(stepIndex + 1 | 0) : 0.0;
        var x2 = curve.get_za3lpa$(stepIndex + 2 | 0);
        var y2 = curve.get_za3lpa$(stepIndex + 3 | 0);
        var x3 = curve.get_za3lpa$(stepIndex + 4 | 0);
        var y3 = curve.get_za3lpa$(stepIndex + 5 | 0);
        var x4 = isInCurve ? curve.get_za3lpa$(stepIndex + 6 | 0) : 1.0;
        var y4 = isInCurve ? curve.get_za3lpa$(stepIndex + 7 | 0) : 1.0;
        var lower = 0.0;
        var higher = 1.0;
        while (higher - lower > 1.0E-4) {
          var percentage = (higher + lower) * 0.5;
          this._getCurvePoint_vusyvb$_0(x1, y1, x2, y2, x3, y3, x4, y4, percentage, this._helpPoint_jjup10$_0);
          if (t - this._helpPoint_jjup10$_0.x > 0.0) {
            lower = percentage;
          }
           else {
            higher = percentage;
          }
        }
        samples.set_5wr77w$(i, this._helpPoint_jjup10$_0.y);
      }
      return true;
    }
     else {
      var stepIndex_0 = 0;
      var l_0 = samples.size;
      tmp$_0 = samples.size;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        var t_0 = (i_0 + 1 | 0) / (l_0 + 1 | 0) | 0;
        while (curve.get_za3lpa$(stepIndex_0 + 6 | 0) < t_0) {
          stepIndex_0 = stepIndex_0 + 6 | 0;
        }
        var x1_0 = curve.get_za3lpa$(stepIndex_0);
        var y1_0 = curve.get_za3lpa$(stepIndex_0 + 1 | 0);
        var x2_0 = curve.get_za3lpa$(stepIndex_0 + 2 | 0);
        var y2_0 = curve.get_za3lpa$(stepIndex_0 + 3 | 0);
        var x3_0 = curve.get_za3lpa$(stepIndex_0 + 4 | 0);
        var y3_0 = curve.get_za3lpa$(stepIndex_0 + 5 | 0);
        var x4_0 = curve.get_za3lpa$(stepIndex_0 + 6 | 0);
        var y4_0 = curve.get_za3lpa$(stepIndex_0 + 7 | 0);
        var lower_0 = 0.0;
        var higher_0 = 1.0;
        while (higher_0 - lower_0 > 1.0E-4) {
          var percentage_0 = (higher_0 + lower_0) * 0.5;
          this._getCurvePoint_vusyvb$_0(x1_0, y1_0, x2_0, y2_0, x3_0, y3_0, x4_0, y4_0, percentage_0, this._helpPoint_jjup10$_0);
          if (t_0 - this._helpPoint_jjup10$_0.x > 0.0) {
            lower_0 = percentage_0;
          }
           else {
            higher_0 = percentage_0;
          }
        }
        samples.set_5wr77w$(i_0, this._helpPoint_jjup10$_0.y);
      }
      return false;
    }
  };
  ObjectDataParser.prototype._parseActionDataInFrame_2hm7da$_0 = function (rawData, frameStart, bone, slot) {
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().EVENT)) {
      this._mergeActionFrame_xa41qc$_0(ensureNotNull(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().EVENT)), frameStart, ActionType$Frame_getInstance(), bone, slot);
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SOUND)) {
      this._mergeActionFrame_xa41qc$_0(ensureNotNull(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().SOUND)), frameStart, ActionType$Sound_getInstance(), bone, slot);
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTION)) {
      this._mergeActionFrame_xa41qc$_0(ensureNotNull(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTION)), frameStart, ActionType$Play_getInstance(), bone, slot);
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().EVENTS)) {
      this._mergeActionFrame_xa41qc$_0(ensureNotNull(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().EVENTS)), frameStart, ActionType$Frame_getInstance(), bone, slot);
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS)) {
      this._mergeActionFrame_xa41qc$_0(ensureNotNull(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS)), frameStart, ActionType$Play_getInstance(), bone, slot);
    }
  };
  ObjectDataParser.prototype._mergeActionFrame_xa41qc$_0 = function (rawData, frameStart, type, bone, slot) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var actionOffset = ensureNotNull(this._armature).actions.size;
    var actions = this._parseActionData_vpjj18$(rawData, type, bone, slot);
    var frameIndex = 0;
    var frame = null;
    tmp$ = actions.iterator();
    while (tmp$.hasNext()) {
      var action = tmp$.next();
      (tmp$_0 = this._armature) != null ? (tmp$_0.addAction_uup9kz$(action, false), Unit) : null;
    }
    if (this._actionFrames_eyxsnf$_0.size === 0) {
      frame = new ActionFrame();
      frame.frameStart = 0;
      push(this._actionFrames_eyxsnf$_0, frame);
      frame = null;
    }
    tmp$_1 = this._actionFrames_eyxsnf$_0.iterator();
    while (tmp$_1.hasNext()) {
      var eachFrame = tmp$_1.next();
      if (eachFrame.frameStart === frameStart) {
        frame = eachFrame;
        break;
      }
       else if (eachFrame.frameStart > frameStart) {
        break;
      }
      frameIndex = frameIndex + 1 | 0;
    }
    if (frame == null) {
      frame = new ActionFrame();
      frame.frameStart = frameStart;
      splice(this._actionFrames_eyxsnf$_0, frameIndex, 0, [frame]);
    }
    tmp$_2 = actions.size;
    for (var i = 0; i < tmp$_2; i++) {
      push_1(frame.actions, actionOffset + i | 0);
    }
  };
  ObjectDataParser.prototype._parseArmature_p20sj2$ = function (rawData, scale) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17;
    var armature = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(ArmatureData));
    armature.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    armature.frameRate = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().FRAME_RATE, ensureNotNull(this._data).frameRate);
    armature.scale = scale;
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) && typeof ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) === 'string') {
      armature.type = DataParser$Companion_getInstance()._getArmatureType_pdl1vj$((tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE)) != null ? tmp$.toString() : null);
    }
     else {
      armature.type = ArmatureType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().TYPE, ArmatureType$Armature_getInstance().id));
    }
    if (armature.frameRate === 0) {
      armature.frameRate = 24;
    }
    this._armature = armature;
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().CANVAS)) {
      var rawCanvas = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().CANVAS);
      var canvas = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(CanvasData));
      canvas.hasBackground = ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawCanvas, DataParser$Companion_getInstance().COLOR);
      canvas.color = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawCanvas, DataParser$Companion_getInstance().COLOR, 0);
      canvas.x = numberToInt(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawCanvas, DataParser$Companion_getInstance().X, 0) * armature.scale);
      canvas.y = numberToInt(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawCanvas, DataParser$Companion_getInstance().Y, 0) * armature.scale);
      canvas.width = numberToInt(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawCanvas, DataParser$Companion_getInstance().WIDTH, 0) * armature.scale);
      canvas.height = numberToInt(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawCanvas, DataParser$Companion_getInstance().HEIGHT, 0) * armature.scale);
      armature.canvas = canvas;
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().AABB)) {
      var rawAABB = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().AABB);
      armature.aabb.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawAABB, DataParser$Companion_getInstance().X, 0.0) * armature.scale;
      armature.aabb.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawAABB, DataParser$Companion_getInstance().Y, 0.0) * armature.scale;
      armature.aabb.width = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawAABB, DataParser$Companion_getInstance().WIDTH, 0.0) * armature.scale;
      armature.aabb.height = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawAABB, DataParser$Companion_getInstance().HEIGHT, 0.0) * armature.scale;
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE)) {
      var rawBones = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE);
      tmp$_1 = (Kotlin.isType(tmp$_0 = rawBones, List) ? tmp$_0 : throwCCE()).iterator();
      while (tmp$_1.hasNext()) {
        var rawBone = tmp$_1.next();
        var parentName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawBone, DataParser$Companion_getInstance().PARENT, '');
        var bone = this._parseBone_s8jyv4$(rawBone);
        if (parentName.length > 0) {
          var parent = armature.getBone_pdl1vj$(parentName);
          if (parent != null) {
            bone.parent = parent;
          }
           else {
            if (!ObjectDataParser$Companion_getInstance().contains_s5ds1e$(this._cacheBones_romzic$_0, parentName)) {
              var tmp$_18 = this._cacheBones_romzic$_0;
              var value = ArrayList_init();
              tmp$_18.put_xwzc9p$(parentName, value);
            }
            (tmp$_2 = this._cacheBones_romzic$_0.get_11rb$(parentName)) != null ? (push(tmp$_2, bone), Unit) : null;
          }
        }
        if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(this._cacheBones_romzic$_0, bone.name)) {
          tmp$_3 = ensureNotNull(this._cacheBones_romzic$_0.get_11rb$(bone.name)).iterator();
          while (tmp$_3.hasNext()) {
            var child = tmp$_3.next();
            child.parent = bone;
          }
          this._cacheBones_romzic$_0.remove_11rb$(bone.name);
        }
        armature.addBone_ejz9f2$(bone);
        push(this._rawBones, bone);
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().IK)) {
      var rawIKS = Kotlin.isType(tmp$_4 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().IK), List) ? tmp$_4 : throwCCE();
      tmp$_5 = rawIKS.iterator();
      while (tmp$_5.hasNext()) {
        var rawIK = tmp$_5.next();
        var constraint = this._parseIKConstraint_s8jyv4$(rawIK);
        if (constraint != null) {
          armature.addConstraint_9jmsph$(constraint);
        }
      }
    }
    armature.sortBones();
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT)) {
      var zOrder = 0;
      var rawSlots = Kotlin.isType(tmp$_6 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT), List) ? tmp$_6 : throwCCE();
      tmp$_7 = rawSlots.iterator();
      while (tmp$_7.hasNext()) {
        var rawSlot = tmp$_7.next();
        armature.addSlot_5x25e4$(this._parseSlot_cypnoy$(rawSlot, (tmp$_8 = zOrder, zOrder = tmp$_8 + 1 | 0, tmp$_8)));
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SKIN)) {
      var rawSkins = Kotlin.isType(tmp$_9 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().SKIN), List) ? tmp$_9 : throwCCE();
      tmp$_10 = rawSkins.iterator();
      while (tmp$_10.hasNext()) {
        var rawSkin = tmp$_10.next();
        armature.addSkin_bowmr9$(this._parseSkin_s8jyv4$(rawSkin));
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().PATH_CONSTRAINT)) {
      var rawPaths = Kotlin.isType(tmp$_11 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().PATH_CONSTRAINT), List) ? tmp$_11 : throwCCE();
      tmp$_12 = rawPaths.iterator();
      while (tmp$_12.hasNext()) {
        var rawPath = tmp$_12.next();
        var constraint_0 = this._parsePathConstraint_s8jyv4$(rawPath);
        if (constraint_0 != null) {
          armature.addConstraint_9jmsph$(constraint_0);
        }
      }
    }
    tmp$_13 = get_length_1(this._cacheRawMeshes_xt63f4$_0);
    for (var i = 0; i < tmp$_13; i++) {
      var rawData_0 = this._cacheRawMeshes_xt63f4$_0.get_za3lpa$(i);
      var shareName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData_0, DataParser$Companion_getInstance().SHARE, '');
      if (shareName.length === 0) {
        continue;
      }
      var skinName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData_0, DataParser$Companion_getInstance().SKIN, DataParser$Companion_getInstance().DEFAULT_NAME);
      if (skinName.length === 0) {
        skinName = DataParser$Companion_getInstance().DEFAULT_NAME;
      }
      var shareMesh = armature.getMesh_6hosri$(skinName, '', shareName);
      if (shareMesh == null) {
        continue;
      }
      var mesh = this._cacheMeshes_kkxcli$_0.get_za3lpa$(i);
      mesh.geometry.shareFrom_xkji8$(shareMesh.geometry);
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().ANIMATION)) {
      var rawAnimations = Kotlin.isType(tmp$_14 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().ANIMATION), List) ? tmp$_14 : throwCCE();
      tmp$_15 = rawAnimations.iterator();
      while (tmp$_15.hasNext()) {
        var rawAnimation = tmp$_15.next();
        var animation = this._parseAnimation_s8jyv4$(rawAnimation);
        armature.addAnimation_w03ody$(animation);
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().DEFAULT_ACTIONS)) {
      var actions = this._parseActionData_vpjj18$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().DEFAULT_ACTIONS), ActionType$Play_getInstance(), null, null);
      tmp$_16 = actions.iterator();
      while (tmp$_16.hasNext()) {
        var action = tmp$_16.next();
        armature.addAction_uup9kz$(action, true);
        if (action.type === ActionType$Play_getInstance()) {
          var animation_0 = armature.getAnimation_61zpoe$(action.name);
          if (animation_0 != null) {
            armature.defaultAnimation = animation_0;
          }
        }
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS)) {
      var actions_0 = this._parseActionData_vpjj18$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS), ActionType$Play_getInstance(), null, null);
      tmp$_17 = actions_0.iterator();
      while (tmp$_17.hasNext()) {
        var action_0 = tmp$_17.next();
        armature.addAction_uup9kz$(action_0, false);
      }
    }
    set_lengthSet_1(this._rawBones, 0);
    set_length_1(this._cacheRawMeshes_xt63f4$_0, 0);
    set_length_1(this._cacheMeshes_kkxcli$_0, 0);
    this._armature = null;
    this._weightSlotPose_ms86fe$_0.clear();
    this._weightBonePoses_3ak4ir$_0.clear();
    this._cacheBones_romzic$_0.clear();
    this._slotChildActions_t29hla$_0.clear();
    return armature;
  };
  ObjectDataParser.prototype._parseBone_s8jyv4$ = function (rawData) {
    var tmp$;
    var type;
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) && typeof ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) === 'string') {
      type = DataParser$Companion_getInstance()._getBoneType_pdl1vj$((tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE)) != null ? tmp$.toString() : null);
    }
     else {
      type = BoneType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().TYPE, BoneType$Bone_getInstance().id));
    }
    if (type === BoneType$Bone_getInstance()) {
      var scale = ensureNotNull(this._armature).scale;
      var bone = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(BoneData));
      bone.inheritTranslation = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().INHERIT_TRANSLATION, true);
      bone.inheritRotation = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().INHERIT_ROTATION, true);
      bone.inheritScale = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().INHERIT_SCALE, true);
      bone.inheritReflection = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().INHERIT_REFLECTION, true);
      bone.length = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().LENGTH, 0.0) * scale;
      bone.alpha = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ALPHA, 1.0);
      bone.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
      if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM)) {
        this._parseTransform_hr8bzd$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM), bone.transform, scale);
      }
      return bone;
    }
    var surface = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(SurfaceData));
    surface.alpha = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ALPHA, 1.0);
    surface.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    surface.segmentX = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().SEGMENT_X, 0);
    surface.segmentY = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().SEGMENT_Y, 0);
    this._parseGeometry_9lxtbg$(rawData, surface.geometry);
    return surface;
  };
  ObjectDataParser.prototype._parseIKConstraint_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$_0 = (tmp$ = this._armature) != null ? tmp$.getBone_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().BONE, '')) : null;
    if (tmp$_0 == null) {
      return null;
    }
    var bone = tmp$_0;
    tmp$_2 = (tmp$_1 = this._armature) != null ? tmp$_1.getBone_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().TARGET, '')) : null;
    if (tmp$_2 == null) {
      return null;
    }
    var target = tmp$_2;
    var chain = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().CHAIN, 0);
    var constraint = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(IKConstraintData));
    constraint.scaleEnabled = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().SCALE, false);
    constraint.bendPositive = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().BEND_POSITIVE, true);
    constraint.weight = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().WEIGHT, 1.0);
    constraint.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    constraint.type = ConstraintType$IK_getInstance();
    constraint.target = target;
    if (chain > 0 && bone.parent != null) {
      constraint.root = bone.parent;
      constraint.bone = bone;
    }
     else {
      constraint.root = bone;
      constraint.bone = null;
    }
    return constraint;
  };
  ObjectDataParser.prototype._parsePathConstraint_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    tmp$_0 = (tmp$ = this._armature) != null ? tmp$.getSlot_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().TARGET, '')) : null;
    if (tmp$_0 == null) {
      return null;
    }
    var target = tmp$_0;
    tmp$_2 = (tmp$_1 = this._armature) != null ? tmp$_1.defaultSkin : null;
    if (tmp$_2 == null) {
      return null;
    }
    var defaultSkin = tmp$_2;
    var targetDisplay = defaultSkin.getDisplay_puj7f4$(target.name, ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().TARGET_DISPLAY, target.name));
    if (targetDisplay == null || !Kotlin.isType(targetDisplay, PathDisplayData)) {
      return null;
    }
    var bones = (tmp$_3 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().BONES)) == null || Kotlin.isType(tmp$_3, List) ? tmp$_3 : null;
    if (bones == null || bones.isEmpty()) {
      return null;
    }
    var constraint = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(PathConstraintData));
    constraint.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    constraint.type = ConstraintType$Path_getInstance();
    constraint.pathSlot = target;
    constraint.pathDisplayData = targetDisplay;
    constraint.target = target.parent;
    constraint.positionMode = DataParser$Companion_getInstance()._getPositionMode_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().POSITION_MODE, ''));
    constraint.spacingMode = DataParser$Companion_getInstance()._getSpacingMode_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().SPACING_MODE, ''));
    constraint.rotateMode = DataParser$Companion_getInstance()._getRotateMode_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().ROTATE_MODE, ''));
    constraint.position = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().POSITION, 0.0);
    constraint.spacing = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SPACING, 0.0);
    constraint.rotateOffset = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ROTATE_OFFSET, 0.0);
    constraint.rotateMix = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ROTATE_MIX, 1.0);
    constraint.translateMix = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().TRANSLATE_MIX, 1.0);
    tmp$_4 = bones.iterator();
    while (tmp$_4.hasNext()) {
      var boneName = tmp$_4.next();
      var bone = (tmp$_5 = this._armature) != null ? tmp$_5.getBone_pdl1vj$(boneName) : null;
      if (bone != null) {
        constraint.AddBone_ejz9f2$(bone);
        if (constraint.root == null) {
          constraint.root = bone;
        }
      }
    }
    return constraint;
  };
  ObjectDataParser.prototype._parseSlot_cypnoy$ = function (rawData, zOrder) {
    var tmp$, tmp$_0, tmp$_1;
    var slot = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(SlotData));
    slot.displayIndex = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().DISPLAY_INDEX, 0);
    slot.zOrder = zOrder;
    slot.zIndex = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().Z_INDEX, 0);
    slot.alpha = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ALPHA, 1.0);
    slot.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    slot.parent = (tmp$ = this._armature) != null ? tmp$.getBone_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().PARENT, '')) : null;
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().BLEND_MODE) && typeof ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().BLEND_MODE) === 'string') {
      slot.blendMode = DataParser$Companion_getInstance()._getBlendMode_pdl1vj$((tmp$_0 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().BLEND_MODE)) != null ? tmp$_0.toString() : null);
    }
     else {
      slot.blendMode = BlendMode$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().BLEND_MODE, BlendMode$Normal_getInstance().id));
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().COLOR)) {
      slot.color = SlotData$Companion_getInstance().createColor();
      this._parseColorTransform_lkycw$(Kotlin.isType(tmp$_1 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().COLOR), Map) ? tmp$_1 : throwCCE(), ensureNotNull(slot.color));
    }
     else {
      slot.color = SlotData$Companion_getInstance().DEFAULT_COLOR;
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS)) {
      var $receiver = this._slotChildActions_t29hla$_0;
      var key = slot.name;
      var value = this._parseActionData_vpjj18$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS), ActionType$Play_getInstance(), null, null);
      $receiver.put_xwzc9p$(key, value);
    }
    return slot;
  };
  ObjectDataParser.prototype._parseSkin_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1;
    var skin = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(SkinData));
    skin.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, DataParser$Companion_getInstance().DEFAULT_NAME);
    if (skin.name.length === 0) {
      skin.name = DataParser$Companion_getInstance().DEFAULT_NAME;
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT)) {
      var rawSlots = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT);
      this._skin = skin;
      tmp$ = ObjectDataParser$Companion_getInstance().get_list_ntq51o$(rawSlots).iterator();
      while (tmp$.hasNext()) {
        var rawSlot = tmp$.next();
        var slotName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawSlot, DataParser$Companion_getInstance().NAME, '');
        var slot = (tmp$_0 = this._armature) != null ? tmp$_0.getSlot_pdl1vj$(slotName) : null;
        if (slot != null) {
          this._slot = slot;
          if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawSlot, DataParser$Companion_getInstance().DISPLAY)) {
            var rawDisplays = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawSlot, DataParser$Companion_getInstance().DISPLAY);
            tmp$_1 = ObjectDataParser$Companion_getInstance().get_list_ntq51o$(rawDisplays).iterator();
            while (tmp$_1.hasNext()) {
              var rawDisplay = tmp$_1.next();
              if (rawDisplay != null) {
                skin.addDisplay_j2ttk5$(slotName, this._parseDisplay_s8jyv4$(rawDisplay));
              }
               else {
                skin.addDisplay_j2ttk5$(slotName, null);
              }
            }
          }
          this._slot = null;
        }
      }
      this._skin = null;
    }
    return skin;
  };
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  ObjectDataParser.prototype._parseDisplay_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10;
    var name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    var path = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().PATH, '');
    var type = DisplayType$Image_getInstance();
    var display = null;
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) && typeof ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE) === 'string') {
      type = DataParser$Companion_getInstance()._getDisplayType_pdl1vj$((tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TYPE)) != null ? tmp$.toString() : null);
    }
     else {
      type = DisplayType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().TYPE, type.id));
    }
    switch (type.name) {
      case 'Image':
        display = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(ImageDisplayData));
        var imageDisplay = display;
        imageDisplay.name = name;
        imageDisplay.path = path.length > 0 ? path : name;
        this._parsePivot_lhqbvl$(rawData, imageDisplay);
        break;
      case 'Armature':
        display = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(ArmatureDisplayData));
        var armatureDisplay = display;
        armatureDisplay.name = name;
        armatureDisplay.path = path.length > 0 ? path : name;
        armatureDisplay.inheritAnimation = true;
        if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS)) {
          var actions = this._parseActionData_vpjj18$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().ACTIONS), ActionType$Play_getInstance(), null, null);
          tmp$_0 = actions.iterator();
          while (tmp$_0.hasNext()) {
            var action = tmp$_0.next();
            armatureDisplay.addAction_je7dvg$(action);
          }
        }
         else {
          tmp$_2 = this._slotChildActions_t29hla$_0;
          var key = (tmp$_1 = this._slot) != null ? tmp$_1.name : null;
          var tmp$_11;
          if ((Kotlin.isType(tmp$_11 = tmp$_2, Map) ? tmp$_11 : throwCCE()).containsKey_11rb$(key)) {
            tmp$_5 = this._skin;
            tmp$_4 = (tmp$_3 = this._slot) != null ? tmp$_3.name : null;
            var displays = tmp$_5 != null ? tmp$_5.getDisplays_pdl1vj$(tmp$_4) : null;
            if (displays == null ? ensureNotNull(this._slot).displayIndex === 0 : ensureNotNull(this._slot).displayIndex === get_length_1(displays)) {
              tmp$_7 = this._slotChildActions_t29hla$_0;
              var key_0 = (tmp$_6 = this._slot) != null ? tmp$_6.name : null;
              var tmp$_12;
              tmp$_8 = ensureNotNull((Kotlin.isType(tmp$_12 = tmp$_7, Map) ? tmp$_12 : throwCCE()).get_11rb$(key_0)).iterator();
              while (tmp$_8.hasNext()) {
                var action_0 = tmp$_8.next();
                armatureDisplay.addAction_je7dvg$(action_0);
              }
              tmp$_10 = this._slotChildActions_t29hla$_0;
              var key_1 = (tmp$_9 = this._slot) != null ? tmp$_9.name : null;
              var tmp$_13;
              (Kotlin.isType(tmp$_13 = tmp$_10, MutableMap) ? tmp$_13 : throwCCE()).remove_11rb$(key_1);
            }
          }
        }

        break;
      case 'Mesh':
        var meshDisplay = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(MeshDisplayData));
        display = meshDisplay;
        meshDisplay.geometry.inheritDeform = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().INHERIT_DEFORM, true);
        meshDisplay.name = name;
        meshDisplay.path = path.length > 0 ? path : name;
        if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SHARE)) {
          meshDisplay.geometry.data = this._data;
          push(this._cacheRawMeshes_xt63f4$_0, ensureNotNull(rawData));
          push(this._cacheMeshes_kkxcli$_0, meshDisplay);
        }
         else {
          this._parseMesh_x19l9r$(rawData, meshDisplay);
        }

        break;
      case 'BoundingBox':
        var boundingBox = this._parseBoundingBox_s8jyv4$(rawData);
        if (boundingBox != null) {
          var boundingBoxDisplay = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(BoundingBoxDisplayData));
          display = boundingBoxDisplay;
          boundingBoxDisplay.name = name;
          boundingBoxDisplay.path = path.length > 0 ? path : name;
          boundingBoxDisplay.boundingBox = boundingBox;
        }

        break;
      case 'Path':
        var rawCurveLengths = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().LENGTHS));
        var pathDisplay = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(PathDisplayData));
        display = pathDisplay;
        pathDisplay.closed = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().CLOSED, false);
        pathDisplay.constantSpeed = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().CONSTANT_SPEED, false);
        pathDisplay.name = name;
        pathDisplay.path = path.length > 0 ? path : name;
        set_length_0(pathDisplay.curveLengths, rawCurveLengths.length);
        for (var i = 0; i < rawCurveLengths.length; i++) {
          pathDisplay.curveLengths.set_5wr77w$(i, rawCurveLengths[i]);
        }

        this._parsePath_5mzgi1$(rawData, pathDisplay);
        break;
      default:break;
    }
    if (display != null && ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM)) {
      this._parseTransform_hr8bzd$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM), display.transform, ensureNotNull(this._armature).scale);
    }
    return display;
  };
  ObjectDataParser.prototype._parsePath_5mzgi1$ = function (rawData, display) {
    this._parseGeometry_9lxtbg$(rawData, display.geometry);
  };
  ObjectDataParser.prototype._parsePivot_lhqbvl$ = function (rawData, display) {
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().PIVOT)) {
      var rawPivot = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().PIVOT);
      display.pivot.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawPivot, DataParser$Companion_getInstance().X, 0.0);
      display.pivot.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawPivot, DataParser$Companion_getInstance().Y, 0.0);
    }
     else {
      display.pivot.x = 0.5;
      display.pivot.y = 0.5;
    }
  };
  ObjectDataParser.prototype._parseMesh_x19l9r$ = function (rawData, mesh) {
    var tmp$, tmp$_0;
    this._parseGeometry_9lxtbg$(rawData, mesh.geometry);
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().WEIGHTS)) {
      var rawSlotPose = ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT_POSE));
      var rawBonePoses = ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE_POSE));
      var meshName = '' + ((tmp$ = this._skin) != null ? tmp$.name : null) + '_' + ((tmp$_0 = this._slot) != null ? tmp$_0.name : null) + '_' + mesh.name;
      this._weightSlotPose_ms86fe$_0.put_xwzc9p$(meshName, rawSlotPose);
      this._weightBonePoses_3ak4ir$_0.put_xwzc9p$(meshName, rawBonePoses);
    }
  };
  ObjectDataParser.prototype._parseBoundingBox_s8jyv4$ = function (rawData) {
    var tmp$;
    var boundingBox = null;
    var type = BoundingBoxType$Rectangle_getInstance();
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SUB_TYPE) && typeof ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().SUB_TYPE) === 'string') {
      type = DataParser$Companion_getInstance()._getBoundingBoxType_pdl1vj$((tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().SUB_TYPE)) != null ? tmp$.toString() : null);
    }
     else {
      type = BoundingBoxType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().SUB_TYPE, type.id));
    }
    switch (type.name) {
      case 'Rectangle':
        boundingBox = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(RectangleBoundingBoxData));
        break;
      case 'Ellipse':
        boundingBox = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(EllipseBoundingBoxData));
        break;
      case 'Polygon':
        boundingBox = this._parsePolygonBoundingBox_s8jyv4$(rawData);
        break;
      default:break;
    }
    if (boundingBox != null) {
      boundingBox.color = numberToInt(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().COLOR, 0));
      if (boundingBox.type === BoundingBoxType$Rectangle_getInstance() || boundingBox.type === BoundingBoxType$Ellipse_getInstance()) {
        boundingBox.width = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().WIDTH, 0.0);
        boundingBox.height = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().HEIGHT, 0.0);
      }
    }
    return boundingBox;
  };
  ObjectDataParser.prototype._parsePolygonBoundingBox_s8jyv4$ = function (rawData) {
    var polygonBoundingBox = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(PolygonBoundingBoxData));
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES)) {
      var scale = ensureNotNull(this._armature).scale;
      var rawVertices = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES));
      var vertices = polygonBoundingBox.vertices;
      set_length_0(vertices, rawVertices.length);
      for (var i = 0; i < rawVertices.length; i += 2) {
        var x = rawVertices[i] * scale;
        var y = rawVertices[i + 1 | 0] * scale;
        vertices.set_5wr77w$(i, x);
        vertices.set_5wr77w$(i + 1 | 0, y);
        if (i === 0) {
          polygonBoundingBox.x = x;
          polygonBoundingBox.y = y;
          polygonBoundingBox.width = x;
          polygonBoundingBox.height = y;
        }
         else {
          if (x < polygonBoundingBox.x) {
            polygonBoundingBox.x = x;
          }
           else if (x > polygonBoundingBox.width) {
            polygonBoundingBox.width = x;
          }
          if (y < polygonBoundingBox.y) {
            polygonBoundingBox.y = y;
          }
           else if (y > polygonBoundingBox.height) {
            polygonBoundingBox.height = y;
          }
        }
      }
      polygonBoundingBox.width = polygonBoundingBox.width - polygonBoundingBox.x;
      polygonBoundingBox.height = polygonBoundingBox.height - polygonBoundingBox.y;
    }
     else {
      console_getInstance().warn_vqirvp$(['Data error.\n Please reexport DragonBones Data to fixed the bug.']);
    }
    return polygonBoundingBox;
  };
  ObjectDataParser.prototype._parseAnimation_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25;
    var animation = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(AnimationData));
    animation.blendType = DataParser$Companion_getInstance()._getAnimationBlendType_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().BLEND_TYPE, ''));
    animation.frameCount = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().DURATION, 0);
    animation.playTimes = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().PLAY_TIMES, 1);
    animation.duration = animation.frameCount / ensureNotNull(this._armature).frameRate;
    animation.fadeInTime = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().FADE_IN_TIME, 0.0);
    animation.scale = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE, 1.0);
    animation.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, DataParser$Companion_getInstance().DEFAULT_NAME);
    if (animation.name.length === 0) {
      animation.name = DataParser$Companion_getInstance().DEFAULT_NAME;
    }
    animation.frameIntOffset = get_length(this._frameIntArray_4wyde4$_0);
    animation.frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    animation.frameOffset = get_length_0(this._frameArray_fpzfut$_0);
    this._animation = animation;
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().FRAME)) {
      var rawFrames = Kotlin.isType(tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().FRAME), List) ? tmp$ : throwCCE();
      var keyFrameCount = rawFrames.size;
      if (keyFrameCount > 0) {
        var frameStart = 0;
        for (var i = 0; i < keyFrameCount; i++) {
          var rawFrame = rawFrames.get_za3lpa$(i);
          this._parseActionDataInFrame_2hm7da$_0(rawFrame, frameStart, null, null);
          frameStart = frameStart + ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawFrame, DataParser$Companion_getInstance().DURATION, 1) | 0;
        }
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().Z_ORDER)) {
      ensureNotNull(this._animation).zOrderTimeline = this._parseTimeline_xmmrf7$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().Z_ORDER), null, DataParser$Companion_getInstance().FRAME, TimelineType$ZOrder_getInstance(), FrameValueType$STEP_getInstance(), 0, getCallableRef('_parseZOrderFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseZOrderFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE)) {
      var rawTimelines = Kotlin.isType(tmp$_0 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE), List) ? tmp$_0 : throwCCE();
      tmp$_1 = rawTimelines.iterator();
      while (tmp$_1.hasNext()) {
        var rawTimeline = tmp$_1.next();
        this._parseBoneTimeline_s8jyv4$(rawTimeline);
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT)) {
      var rawTimelines_0 = Kotlin.isType(tmp$_2 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT), List) ? tmp$_2 : throwCCE();
      tmp$_3 = rawTimelines_0.iterator();
      while (tmp$_3.hasNext()) {
        var rawTimeline_0 = tmp$_3.next();
        this._parseSlotTimeline_s8jyv4$(rawTimeline_0);
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().FFD)) {
      var rawTimelines_1 = Kotlin.isType(tmp$_4 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().FFD), List) ? tmp$_4 : throwCCE();
      tmp$_5 = rawTimelines_1.iterator();
      while (tmp$_5.hasNext()) {
        var rawTimeline_1 = tmp$_5.next();
        var skinName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline_1, DataParser$Companion_getInstance().SKIN, DataParser$Companion_getInstance().DEFAULT_NAME);
        var slotName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline_1, DataParser$Companion_getInstance().SLOT, '');
        var displayName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline_1, DataParser$Companion_getInstance().NAME, '');
        if (skinName.length === 0) {
          skinName = DataParser$Companion_getInstance().DEFAULT_NAME;
        }
        this._slot = (tmp$_6 = this._armature) != null ? tmp$_6.getSlot_pdl1vj$(slotName) : null;
        this._mesh = (tmp$_7 = this._armature) != null ? tmp$_7.getMesh_6hosri$(skinName, slotName, displayName) : null;
        if (this._slot == null || this._mesh == null) {
          continue;
        }
        var timeline = this._parseTimeline_xmmrf7$(rawTimeline_1, null, DataParser$Companion_getInstance().FRAME, TimelineType$SlotDeform_getInstance(), FrameValueType$FLOAT_getInstance(), 0, getCallableRef('_parseSlotDeformFrame', function ($receiver, rawData, frameStart, frameCount) {
          return $receiver._parseSlotDeformFrame_nxjb40$(rawData, frameStart, frameCount);
        }.bind(null, this)));
        if (timeline != null) {
          (tmp$_8 = this._animation) != null ? (tmp$_8.addSlotTimeline_h179rx$(slotName, timeline), Unit) : null;
        }
        this._slot = null;
        this._mesh = null;
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().IK)) {
      var rawTimelines_2 = Kotlin.isType(tmp$_9 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().IK), List) ? tmp$_9 : throwCCE();
      tmp$_10 = rawTimelines_2.iterator();
      while (tmp$_10.hasNext()) {
        var rawTimeline_2 = tmp$_10.next();
        var constraintName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline_2, DataParser$Companion_getInstance().NAME, '');
        tmp$_11 = ensureNotNull(this._armature).getConstraint_61zpoe$(constraintName);
        if (tmp$_11 == null) {
          continue;
        }
        var constraint = tmp$_11;
        var timeline_0 = this._parseTimeline_xmmrf7$(rawTimeline_2, null, DataParser$Companion_getInstance().FRAME, TimelineType$IKConstraint_getInstance(), FrameValueType$INT_getInstance(), 2, getCallableRef('_parseIKConstraintFrame', function ($receiver, rawData, frameStart, frameCount) {
          return $receiver._parseIKConstraintFrame_nxjb40$(rawData, frameStart, frameCount);
        }.bind(null, this)));
        if (timeline_0 != null) {
          (tmp$_12 = this._animation) != null ? (tmp$_12.addConstraintTimeline_h179rx$(constraintName, timeline_0), Unit) : null;
        }
      }
    }
    if (get_length_1(this._actionFrames_eyxsnf$_0) > 0) {
      ensureNotNull(this._animation).actionTimeline = this._parseTimeline_xmmrf7$(null, (tmp$_13 = this._actionFrames_eyxsnf$_0) == null || Kotlin.isType(tmp$_13, ArrayList) ? tmp$_13 : throwCCE(), '', TimelineType$Action_getInstance(), FrameValueType$STEP_getInstance(), 0, getCallableRef('_parseActionFrameRaw', function ($receiver, frame, frameStart, frameCount) {
        return $receiver._parseActionFrameRaw_nxjb40$(frame, frameStart, frameCount);
      }.bind(null, this)));
      set_length_1(this._actionFrames_eyxsnf$_0, 0);
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TIMELINE)) {
      var rawTimelines_3 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TIMELINE);
      tmp$_14 = ObjectDataParser$Companion_getInstance().get_list_ntq51o$(rawTimelines_3).iterator();
      loop: while (tmp$_14.hasNext()) {
        var rawTimeline_3 = tmp$_14.next();
        var timelineType = TimelineType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawTimeline_3, DataParser$Companion_getInstance().TYPE, TimelineType$Action_getInstance().id));
        var timelineName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTimeline_3, DataParser$Companion_getInstance().NAME, '');
        var timeline_1 = null;
        switch (timelineType.name) {
          case 'Action':
            break;
          case 'SlotDisplay':
          case 'SlotZIndex':
          case 'BoneAlpha':
          case 'SlotAlpha':
          case 'AnimationProgress':
          case 'AnimationWeight':
            if (timelineType === TimelineType$SlotDisplay_getInstance()) {
              this._frameValueType_ucgpqr$_0 = FrameValueType$STEP_getInstance();
              this._frameValueScale_giiyd9$_0 = 1.0;
            }
             else {
              this._frameValueType_ucgpqr$_0 = FrameValueType$INT_getInstance();
              if (timelineType === TimelineType$SlotZIndex_getInstance()) {
                this._frameValueScale_giiyd9$_0 = 1.0;
              }
               else if (timelineType === TimelineType$AnimationProgress_getInstance() || timelineType === TimelineType$AnimationWeight_getInstance()) {
                this._frameValueScale_giiyd9$_0 = 10000.0;
              }
               else {
                this._frameValueScale_giiyd9$_0 = 100.0;
              }
            }

            if (timelineType === TimelineType$BoneAlpha_getInstance() || timelineType === TimelineType$SlotAlpha_getInstance() || timelineType === TimelineType$AnimationWeight_getInstance()) {
              this._frameDefaultValue_3xk5qe$_0 = 1.0;
            }
             else {
              this._frameDefaultValue_3xk5qe$_0 = 0.0;
            }

            if (timelineType === TimelineType$AnimationProgress_getInstance() && animation.blendType !== AnimationBlendType$None_getInstance()) {
              timeline_1 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(AnimationTimelineData));
              var animaitonTimeline = timeline_1;
              animaitonTimeline.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTimeline_3, DataParser$Companion_getInstance().X, 0.0);
              animaitonTimeline.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTimeline_3, DataParser$Companion_getInstance().Y, 0.0);
            }

            timeline_1 = this._parseTimeline_xmmrf7$(rawTimeline_3, null, DataParser$Companion_getInstance().FRAME, timelineType, this._frameValueType_ucgpqr$_0, 1, getCallableRef('_parseSingleValueFrame', function ($receiver, rawData, frameStart, frameCount) {
              return $receiver._parseSingleValueFrame_nxjb40$(rawData, frameStart, frameCount);
            }.bind(null, this)), timeline_1);
            break;
          case 'BoneTranslate':
          case 'BoneRotate':
          case 'BoneScale':
          case 'IKConstraint':
          case 'AnimationParameter':
            if (timelineType === TimelineType$IKConstraint_getInstance() || timelineType === TimelineType$AnimationParameter_getInstance()) {
              this._frameValueType_ucgpqr$_0 = FrameValueType$INT_getInstance();
              if (timelineType === TimelineType$AnimationParameter_getInstance()) {
                this._frameValueScale_giiyd9$_0 = 10000.0;
              }
               else {
                this._frameValueScale_giiyd9$_0 = 100.0;
              }
            }
             else {
              if (timelineType === TimelineType$BoneRotate_getInstance()) {
                this._frameValueScale_giiyd9$_0 = Transform$Companion_getInstance().DEG_RAD;
              }
               else {
                this._frameValueScale_giiyd9$_0 = 1.0;
              }
              this._frameValueType_ucgpqr$_0 = FrameValueType$FLOAT_getInstance();
            }

            if (timelineType === TimelineType$BoneScale_getInstance() || timelineType === TimelineType$IKConstraint_getInstance()) {
              this._frameDefaultValue_3xk5qe$_0 = 1.0;
            }
             else {
              this._frameDefaultValue_3xk5qe$_0 = 0.0;
            }

            timeline_1 = this._parseTimeline_xmmrf7$(rawTimeline_3, null, DataParser$Companion_getInstance().FRAME, timelineType, this._frameValueType_ucgpqr$_0, 2, getCallableRef('_parseDoubleValueFrame', function ($receiver, rawData, frameStart, frameCount) {
              return $receiver._parseDoubleValueFrame_nxjb40$(rawData, frameStart, frameCount);
            }.bind(null, this)));
            break;
          case 'ZOrder':
            break;
          case 'Surface':
            tmp$_17 = (tmp$_16 = (tmp$_15 = this._armature) != null ? tmp$_15.getBone_pdl1vj$(timelineName) : null) == null || Kotlin.isType(tmp$_16, SurfaceData) ? tmp$_16 : null;
            if (tmp$_17 == null) {
              continue loop;
            }

            var surface = tmp$_17;
            this._geometry = surface.geometry;
            timeline_1 = this._parseTimeline_xmmrf7$(rawTimeline_3, null, DataParser$Companion_getInstance().FRAME, timelineType, FrameValueType$FLOAT_getInstance(), 0, getCallableRef('_parseDeformFrame', function ($receiver, rawData, frameStart, frameCount) {
              return $receiver._parseDeformFrame_nxjb40$(rawData, frameStart, frameCount);
            }.bind(null, this)));
            this._geometry = null;
            break;
          case 'SlotDeform':
            this._geometry = null;
            tmp$_18 = ensureNotNull(this._armature).skins.keys.iterator();
            while (tmp$_18.hasNext()) {
              var skinName_0 = tmp$_18.next();
              var skin = ensureNotNull(this._armature).skins.get_11rb$(skinName_0);
              tmp$_19 = ensureNotNull(skin).displays.keys.iterator();
              while (tmp$_19.hasNext()) {
                var slontName = tmp$_19.next();
                var displays = ensureNotNull(skin.displays.get_11rb$(slontName));
                tmp$_20 = displays.iterator();
                while (tmp$_20.hasNext()) {
                  var display = tmp$_20.next();
                  if (display != null && equals(display.name, timelineName)) {
                    this._geometry = (Kotlin.isType(tmp$_21 = display, MeshDisplayData) ? tmp$_21 : throwCCE()).geometry;
                    break;
                  }
                }
              }
            }

            if (this._geometry == null) {
              continue loop;
            }

            timeline_1 = this._parseTimeline_xmmrf7$(rawTimeline_3, null, DataParser$Companion_getInstance().FRAME, timelineType, FrameValueType$FLOAT_getInstance(), 0, getCallableRef('_parseDeformFrame', function ($receiver, rawData, frameStart, frameCount) {
              return $receiver._parseDeformFrame_nxjb40$(rawData, frameStart, frameCount);
            }.bind(null, this)));
            this._geometry = null;
            break;
          case 'SlotColor':
            timeline_1 = this._parseTimeline_xmmrf7$(rawTimeline_3, null, DataParser$Companion_getInstance().FRAME, timelineType, FrameValueType$INT_getInstance(), 1, getCallableRef('_parseSlotColorFrame', function ($receiver, rawData, frameStart, frameCount) {
              return $receiver._parseSlotColorFrame_nxjb40$(rawData, frameStart, frameCount);
            }.bind(null, this)));
            break;
          default:break;
        }
        if (timeline_1 != null) {
          switch (timelineType.name) {
            case 'Action':
              break;
            case 'ZOrder':
              break;
            case 'BoneTranslate':
            case 'BoneRotate':
            case 'BoneScale':
            case 'Surface':
            case 'BoneAlpha':
              (tmp$_22 = this._animation) != null ? (tmp$_22.addBoneTimeline_h179rx$(timelineName, timeline_1), Unit) : null;
              break;
            case 'SlotDisplay':
            case 'SlotColor':
            case 'SlotDeform':
            case 'SlotZIndex':
            case 'SlotAlpha':
              (tmp$_23 = this._animation) != null ? (tmp$_23.addSlotTimeline_h179rx$(timelineName, timeline_1), Unit) : null;
              break;
            case 'IKConstraint':
              (tmp$_24 = this._animation) != null ? (tmp$_24.addConstraintTimeline_h179rx$(timelineName, timeline_1), Unit) : null;
              break;
            case 'AnimationProgress':
            case 'AnimationWeight':
            case 'AnimationParameter':
              (tmp$_25 = this._animation) != null ? (tmp$_25.addAnimationTimeline_h179rx$(timelineName, timeline_1), Unit) : null;
              break;
            default:break;
          }
        }
      }
    }
    this._animation = null;
    return animation;
  };
  ObjectDataParser.prototype._parseTimeline_xmmrf7$ = function (rawData, rawFrames, framesKey, timelineType, frameValueType, frameValueCount, frameParser, timeline) {
    if (timeline === void 0)
      timeline = null;
    var tmp$, tmp$_0;
    var timeline_0 = timeline;
    var frameParser_0 = frameParser;
    var rawFrames_0 = rawFrames;
    var tmp$_1 = rawData != null;
    if (tmp$_1) {
      tmp$_1 = framesKey.length > 0;
    }
    if (tmp$_1 && ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, framesKey)) {
      rawFrames_0 = (tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, framesKey)) == null || Kotlin.isType(tmp$, ArrayList) ? tmp$ : throwCCE();
    }
    if (rawFrames_0 == null) {
      return null;
    }
    var keyFrameCount = get_length_1(rawFrames_0);
    if (keyFrameCount === 0) {
      return null;
    }
    var frameIntArrayLength = get_length(this._frameIntArray_4wyde4$_0);
    var frameFloatArrayLength = get_length_0(this._frameFloatArray_204v09$_0);
    var timelineOffset = get_length_0(this._timelineArray_a4oiyd$_0);
    if (timeline_0 == null) {
      timeline_0 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(TimelineData));
    }
    timeline_0.type = timelineType;
    timeline_0.offset = timelineOffset;
    this._frameValueType_ucgpqr$_0 = frameValueType;
    this._timeline = timeline_0;
    tmp$_0 = this._timelineArray_a4oiyd$_0;
    set_length_0(tmp$_0, get_length_0(tmp$_0) + (5 + keyFrameCount) | 0);
    if (rawData != null) {
      this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + BinaryOffset$TimelineScale_getInstance().index | 0, round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE, 1.0) * 100));
      this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + BinaryOffset$TimelineOffset_getInstance().index | 0, round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().OFFSET, 0.0) * 100));
    }
     else {
      this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + BinaryOffset$TimelineScale_getInstance().index | 0, 100.0);
      this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + BinaryOffset$TimelineOffset_getInstance().index | 0, 0.0);
    }
    this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + BinaryOffset$TimelineKeyFrameCount_getInstance().index | 0, keyFrameCount);
    this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + BinaryOffset$TimelineFrameValueCount_getInstance().index | 0, frameValueCount);
    switch (this._frameValueType_ucgpqr$_0.name) {
      case 'STEP':
        this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + BinaryOffset$TimelineFrameValueOffset_getInstance().index | 0, 0.0);
        break;
      case 'INT':
        this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + BinaryOffset$TimelineFrameValueOffset_getInstance().index | 0, frameIntArrayLength - ensureNotNull(this._animation).frameIntOffset | 0);
        break;
      case 'FLOAT':
        this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + BinaryOffset$TimelineFrameValueOffset_getInstance().index | 0, frameFloatArrayLength - ensureNotNull(this._animation).frameFloatOffset | 0);
        break;
    }
    if (keyFrameCount === 1) {
      timeline_0.frameIndicesOffset = -1;
      this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + BinaryOffset$TimelineFrameOffset_getInstance().index + 0 | 0, frameParser_0(rawFrames_0.get_za3lpa$(0), 0, 0) - ensureNotNull(this._animation).frameOffset | 0);
    }
     else {
      var totalFrameCount = ensureNotNull(this._animation).frameCount + 1 | 0;
      var frameIndices = ensureNotNull(this._data).frameIndices;
      var frameIndicesOffset = get_length(frameIndices);
      set_length(frameIndices, get_length(frameIndices) + totalFrameCount | 0);
      timeline_0.frameIndicesOffset = frameIndicesOffset;
      var iK = 0;
      var frameStart = 0;
      var frameCount = 0;
      for (var i = 0; i < totalFrameCount; i++) {
        if ((frameStart + frameCount | 0) <= i && iK < keyFrameCount) {
          var rawFrame = rawFrames_0.get_za3lpa$(iK);
          frameStart = i;
          if (iK === (keyFrameCount - 1 | 0)) {
            frameCount = ensureNotNull(this._animation).frameCount - frameStart | 0;
          }
           else {
            if (Kotlin.isType(rawFrame, ActionFrame)) {
              frameCount = this._actionFrames_eyxsnf$_0.get_za3lpa$(iK + 1 | 0).frameStart - frameStart | 0;
            }
             else {
              frameCount = numberToInt(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawFrame, DataParser$Companion_getInstance().DURATION, 1.0));
            }
          }
          this._timelineArray_a4oiyd$_0.set_5wr77w$(timelineOffset + BinaryOffset$TimelineFrameOffset_getInstance().index + iK | 0, frameParser_0(rawFrame, frameStart, frameCount) - ensureNotNull(this._animation).frameOffset | 0);
          iK = iK + 1 | 0;
        }
        frameIndices.set_vux9f0$(frameIndicesOffset + i | 0, iK - 1 | 0);
      }
    }
    this._timeline = null;
    return timeline_0;
  };
  ObjectDataParser.prototype._parseBoneTimeline_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    tmp$_0 = (tmp$ = this._armature) != null ? tmp$.getBone_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '')) : null;
    if (tmp$_0 == null) {
      return;
    }
    var bone = tmp$_0;
    this._bone = bone;
    tmp$_3 = this._armature;
    tmp$_2 = (tmp$_1 = this._bone) != null ? tmp$_1.name : null;
    this._slot = tmp$_3 != null ? tmp$_3.getSlot_pdl1vj$(tmp$_2) : null;
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSLATE_FRAME)) {
      this._frameDefaultValue_3xk5qe$_0 = 0.0;
      this._frameValueScale_giiyd9$_0 = 1.0;
      var timeline = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().TRANSLATE_FRAME, TimelineType$BoneTranslate_getInstance(), FrameValueType$FLOAT_getInstance(), 2, getCallableRef('_parseDoubleValueFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseDoubleValueFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
      if (timeline != null) {
        (tmp$_4 = this._animation) != null ? (tmp$_4.addBoneTimeline_h179rx$(bone.name, timeline), Unit) : null;
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().ROTATE_FRAME)) {
      this._frameDefaultValue_3xk5qe$_0 = 0.0;
      this._frameValueScale_giiyd9$_0 = 1.0;
      var timeline_0 = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().ROTATE_FRAME, TimelineType$BoneRotate_getInstance(), FrameValueType$FLOAT_getInstance(), 2, getCallableRef('_parseBoneRotateFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseBoneRotateFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
      if (timeline_0 != null) {
        (tmp$_5 = this._animation) != null ? (tmp$_5.addBoneTimeline_h179rx$(bone.name, timeline_0), Unit) : null;
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SCALE_FRAME)) {
      this._frameDefaultValue_3xk5qe$_0 = 1.0;
      this._frameValueScale_giiyd9$_0 = 1.0;
      var timeline_1 = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().SCALE_FRAME, TimelineType$BoneScale_getInstance(), FrameValueType$FLOAT_getInstance(), 2, getCallableRef('_parseBoneScaleFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseBoneScaleFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
      if (timeline_1 != null) {
        (tmp$_6 = this._animation) != null ? (tmp$_6.addBoneTimeline_h179rx$(bone.name, timeline_1), Unit) : null;
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().FRAME)) {
      var timeline_2 = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().FRAME, TimelineType$BoneAll_getInstance(), FrameValueType$FLOAT_getInstance(), 6, getCallableRef('_parseBoneAllFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseBoneAllFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
      if (timeline_2 != null) {
        (tmp$_7 = this._animation) != null ? (tmp$_7.addBoneTimeline_h179rx$(bone.name, timeline_2), Unit) : null;
      }
    }
    this._bone = null;
    this._slot = null;
  };
  ObjectDataParser.prototype._parseSlotTimeline_s8jyv4$ = function (rawData) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    tmp$_0 = (tmp$ = this._armature) != null ? tmp$.getSlot_pdl1vj$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '')) : null;
    if (tmp$_0 == null) {
      return;
    }
    var slot = tmp$_0;
    var displayTimeline;
    var colorTimeline;
    this._slot = slot;
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().DISPLAY_FRAME)) {
      displayTimeline = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().DISPLAY_FRAME, TimelineType$SlotDisplay_getInstance(), FrameValueType$STEP_getInstance(), 0, getCallableRef('_parseSlotDisplayFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseSlotDisplayFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
    }
     else {
      displayTimeline = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().FRAME, TimelineType$SlotDisplay_getInstance(), FrameValueType$STEP_getInstance(), 0, getCallableRef('_parseSlotDisplayFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseSlotDisplayFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().COLOR_FRAME)) {
      colorTimeline = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().COLOR_FRAME, TimelineType$SlotColor_getInstance(), FrameValueType$INT_getInstance(), 1, getCallableRef('_parseSlotColorFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseSlotColorFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
    }
     else {
      colorTimeline = this._parseTimeline_xmmrf7$(rawData, null, DataParser$Companion_getInstance().FRAME, TimelineType$SlotColor_getInstance(), FrameValueType$INT_getInstance(), 1, getCallableRef('_parseSlotColorFrame', function ($receiver, rawData, frameStart, frameCount) {
        return $receiver._parseSlotColorFrame_nxjb40$(rawData, frameStart, frameCount);
      }.bind(null, this)));
    }
    if (displayTimeline != null) {
      (tmp$_1 = this._animation) != null ? (tmp$_1.addSlotTimeline_h179rx$(slot.name, displayTimeline), Unit) : null;
    }
    if (colorTimeline != null) {
      (tmp$_2 = this._animation) != null ? (tmp$_2.addSlotTimeline_h179rx$(slot.name, colorTimeline), Unit) : null;
    }
    this._slot = null;
  };
  ObjectDataParser.prototype._parseFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$;
    var frameOffset = get_length_0(this._frameArray_fpzfut$_0);
    tmp$ = this._frameArray_fpzfut$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 1 | 0);
    this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FramePosition_getInstance().index | 0, frameStart);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseTweenFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var frameOffset = this._parseFrame_nxjb40$(rawData, frameStart, frameCount);
    if (frameCount > 0) {
      if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().CURVE)) {
        var sampleCount = frameCount + 1 | 0;
        set_length_0(this._helpArray_chz897$_0, sampleCount);
        var isOmited = this._samplingEasingCurve_bwr4ee$_0(ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().CURVE)), this._helpArray_chz897$_0);
        tmp$ = this._frameArray_fpzfut$_0;
        set_length_0(tmp$, get_length_0(tmp$) + (2 + get_length_0(this._helpArray_chz897$_0)) | 0);
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameTweenType_getInstance().index | 0, TweenType$Curve_getInstance().id);
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameTweenEasingOrCurveSampleCount_getInstance().index | 0, isOmited ? sampleCount : -sampleCount | 0);
        for (var i = 0; i < sampleCount; i++) {
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameCurveSamples_getInstance().index + i | 0, round(this._helpArray_chz897$_0.get_za3lpa$(i) * 10000.0));
        }
      }
       else {
        var noTween = -2.0;
        var tweenEasing = noTween;
        if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TWEEN_EASING)) {
          tweenEasing = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().TWEEN_EASING, noTween);
        }
        if (tweenEasing === noTween) {
          tmp$_0 = this._frameArray_fpzfut$_0;
          set_length_0(tmp$_0, get_length_0(tmp$_0) + 1 | 0);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameTweenType_getInstance().index | 0, TweenType$None_getInstance().id);
        }
         else if (tweenEasing === 0.0) {
          tmp$_1 = this._frameArray_fpzfut$_0;
          set_length_0(tmp$_1, get_length_0(tmp$_1) + 1 | 0);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameTweenType_getInstance().index | 0, TweenType$Line_getInstance().id);
        }
         else if (tweenEasing < 0.0) {
          tmp$_2 = this._frameArray_fpzfut$_0;
          set_length_0(tmp$_2, get_length_0(tmp$_2) + 2 | 0);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameTweenType_getInstance().index | 0, TweenType$QuadIn_getInstance().id);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameTweenEasingOrCurveSampleCount_getInstance().index | 0, round(-tweenEasing * 100.0));
        }
         else if (tweenEasing <= 1.0) {
          tmp$_3 = this._frameArray_fpzfut$_0;
          set_length_0(tmp$_3, get_length_0(tmp$_3) + 2 | 0);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameTweenType_getInstance().index | 0, TweenType$QuadOut_getInstance().id);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameTweenEasingOrCurveSampleCount_getInstance().index | 0, round(tweenEasing * 100.0));
        }
         else {
          tmp$_4 = this._frameArray_fpzfut$_0;
          set_length_0(tmp$_4, get_length_0(tmp$_4) + 2 | 0);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameTweenType_getInstance().index | 0, TweenType$QuadInOut_getInstance().id);
          this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameTweenEasingOrCurveSampleCount_getInstance().index | 0, round(tweenEasing * 100.0 - 100.0));
        }
      }
    }
     else {
      tmp$_5 = this._frameArray_fpzfut$_0;
      set_length_0(tmp$_5, get_length_0(tmp$_5) + 1 | 0);
      this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FrameTweenType_getInstance().index | 0, TweenType$None_getInstance().id);
    }
    return frameOffset;
  };
  ObjectDataParser.prototype._parseSingleValueFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var frameOffset = 0;
    switch (this._frameValueType_ucgpqr$_0.name) {
      case 'STEP':
        frameOffset = this._parseFrame_nxjb40$(rawData, frameStart, frameCount);
        tmp$ = this._frameArray_fpzfut$_0;
        set_length_0(tmp$, get_length_0(tmp$) + 1 | 0);
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().VALUE, this._frameDefaultValue_3xk5qe$_0));
        break;
      case 'INT':
        frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
        var frameValueOffset = get_length(this._frameIntArray_4wyde4$_0);
        tmp$_0 = this._frameIntArray_4wyde4$_0;
        set_length(tmp$_0, get_length(tmp$_0) + 1 | 0);
        this._frameIntArray_4wyde4$_0.set_vux9f0$(frameValueOffset, numberToInt(round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().VALUE, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0)));
        break;
      case 'FLOAT':
        frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
        var frameValueOffset_0 = get_length_0(this._frameFloatArray_204v09$_0);
        tmp$_1 = this._frameFloatArray_204v09$_0;
        set_length_0(tmp$_1, get_length_0(tmp$_1) + 1 | 0);
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameValueOffset_0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().VALUE, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0);
        break;
    }
    return frameOffset;
  };
  ObjectDataParser.prototype._parseDoubleValueFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var frameOffset = 0;
    switch (this._frameValueType_ucgpqr$_0.name) {
      case 'STEP':
        frameOffset = this._parseFrame_nxjb40$(rawData, frameStart, frameCount);
        tmp$ = this._frameArray_fpzfut$_0;
        set_length_0(tmp$, get_length_0(tmp$) + 2 | 0);
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, this._frameDefaultValue_3xk5qe$_0));
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 2 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, this._frameDefaultValue_3xk5qe$_0));
        break;
      case 'INT':
        frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
        var frameValueOffset = get_length(this._frameIntArray_4wyde4$_0);
        tmp$_0 = this._frameIntArray_4wyde4$_0;
        set_length(tmp$_0, get_length(tmp$_0) + 2 | 0);
        this._frameIntArray_4wyde4$_0.set_vux9f0$(frameValueOffset, numberToInt(round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0)));
        this._frameIntArray_4wyde4$_0.set_vux9f0$(frameValueOffset + 1 | 0, numberToInt(round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0)));
        break;
      case 'FLOAT':
        frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
        var frameValueOffset_0 = get_length_0(this._frameFloatArray_204v09$_0);
        tmp$_1 = this._frameFloatArray_204v09$_0;
        set_length_0(tmp$_1, get_length_0(tmp$_1) + 2 | 0);
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameValueOffset_0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0);
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameValueOffset_0 + 1 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, this._frameDefaultValue_3xk5qe$_0) * this._frameValueScale_giiyd9$_0);
        break;
    }
    return frameOffset;
  };
  ObjectDataParser.prototype._parseActionFrameRaw_nxjb40$ = function (frame, frameStart, frameCount) {
    var tmp$;
    return this._parseActionFrame_e3a4yv$(Kotlin.isType(tmp$ = frame, ActionFrame) ? tmp$ : throwCCE(), frameStart, frameCount);
  };
  ObjectDataParser.prototype._parseActionFrame_e3a4yv$ = function (frame, frameStart, frameCount) {
    var tmp$;
    var frameOffset = get_length_0(this._frameArray_fpzfut$_0);
    var actionCount = get_length(frame.actions);
    tmp$ = this._frameArray_fpzfut$_0;
    set_length_0(tmp$, get_length_0(tmp$) + (2 + actionCount) | 0);
    this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FramePosition_getInstance().index | 0, frameStart);
    this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FramePosition_getInstance().index + 1 | 0, actionCount);
    for (var i = 0; i < actionCount; i++) {
      this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + BinaryOffset$FramePosition_getInstance().index + 2 + i | 0, frame.actions.get_za3lpa$(i));
    }
    return frameOffset;
  };
  ObjectDataParser.prototype._parseZOrderFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var rawData_0 = Kotlin.isType(tmp$ = rawData, Map) ? tmp$ : throwCCE();
    var frameOffset = this._parseFrame_nxjb40$(rawData_0, frameStart, frameCount);
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData_0, DataParser$Companion_getInstance().Z_ORDER)) {
      var rawZOrder = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(rawData_0.get_11rb$(DataParser$Companion_getInstance().Z_ORDER));
      if (rawZOrder.length > 0) {
        var slotCount = get_length_1(ensureNotNull(this._armature).sortedSlots);
        var unchanged = new Int32Array(slotCount - (rawZOrder.length / 2 | 0) | 0);
        var zOrders = new Int32Array(slotCount);
        for (var i = 0; i < unchanged.length; i++) {
          unchanged[i] = 0;
        }
        for (var i_0 = 0; i_0 < slotCount; i_0++) {
          zOrders[i_0] = -1;
        }
        var originalIndex = 0;
        var unchangedIndex = 0;
        for (var i_1 = 0; i_1 < rawZOrder.length; i_1 += 2) {
          var slotIndex = numberToInt(rawZOrder[i_1]);
          var zOrderOffset = numberToInt(rawZOrder[i_1 + 1 | 0]);
          while (originalIndex !== slotIndex) {
            unchanged[tmp$_1 = unchangedIndex, unchangedIndex = tmp$_1 + 1 | 0, tmp$_1] = (tmp$_0 = originalIndex, originalIndex = tmp$_0 + 1 | 0, tmp$_0);
          }
          var index = originalIndex + zOrderOffset | 0;
          zOrders[index] = (tmp$_2 = originalIndex, originalIndex = tmp$_2 + 1 | 0, tmp$_2);
        }
        while (originalIndex < slotCount) {
          unchanged[tmp$_4 = unchangedIndex, unchangedIndex = tmp$_4 + 1 | 0, tmp$_4] = (tmp$_3 = originalIndex, originalIndex = tmp$_3 + 1 | 0, tmp$_3);
        }
        tmp$_5 = this._frameArray_fpzfut$_0;
        set_length_0(tmp$_5, get_length_0(tmp$_5) + (1 + slotCount) | 0);
        this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, slotCount);
        var i_2 = slotCount;
        while ((tmp$_6 = i_2, i_2 = tmp$_6 - 1 | 0, tmp$_6) > 0) {
          if (zOrders[i_2] === -1) {
            this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 2 + i_2 | 0, unchanged[unchangedIndex = unchangedIndex - 1 | 0, unchangedIndex]);
          }
           else {
            this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 2 + i_2 | 0, zOrders[i_2]);
          }
        }
        return frameOffset;
      }
    }
    tmp$_7 = this._frameArray_fpzfut$_0;
    set_length_0(tmp$_7, get_length_0(tmp$_7) + 1 | 0);
    this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, 0.0);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseBoneAllFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    this._helpTransform_9prt94$_0.identity();
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM)) {
      this._parseTransform_hr8bzd$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TRANSFORM), this._helpTransform_9prt94$_0, 1.0);
    }
    var rotation = this._helpTransform_9prt94$_0.rotation;
    if (frameStart !== 0) {
      if (this._prevClockwise_hkgu6c$_0 === 0.0) {
        rotation = this._prevRotation_6xu96o$_0 + Transform$Companion_getInstance().normalizeRadian_14dthe$(rotation - this._prevRotation_6xu96o$_0);
      }
       else {
        if (this._prevClockwise_hkgu6c$_0 > 0 ? rotation >= this._prevRotation_6xu96o$_0 : rotation <= this._prevRotation_6xu96o$_0) {
          this._prevClockwise_hkgu6c$_0 = this._prevClockwise_hkgu6c$_0 > 0 ? this._prevClockwise_hkgu6c$_0 - 1 : this._prevClockwise_hkgu6c$_0 + 1;
        }
        rotation = this._prevRotation_6xu96o$_0 + rotation - this._prevRotation_6xu96o$_0 + Transform$Companion_getInstance().PI_D * this._prevClockwise_hkgu6c$_0;
      }
    }
    this._prevClockwise_hkgu6c$_0 = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().TWEEN_ROTATE, 0.0);
    this._prevRotation_6xu96o$_0 = rotation;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    tmp$ = this._frameFloatArray_204v09$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 6 | 0);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_0 = frameFloatOffset, frameFloatOffset = tmp$_0 + 1 | 0, tmp$_0), this._helpTransform_9prt94$_0.x);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_1 = frameFloatOffset, frameFloatOffset = tmp$_1 + 1 | 0, tmp$_1), this._helpTransform_9prt94$_0.y);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_2 = frameFloatOffset, frameFloatOffset = tmp$_2 + 1 | 0, tmp$_2), rotation);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_3 = frameFloatOffset, frameFloatOffset = tmp$_3 + 1 | 0, tmp$_3), this._helpTransform_9prt94$_0.skew);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_4 = frameFloatOffset, frameFloatOffset = tmp$_4 + 1 | 0, tmp$_4), this._helpTransform_9prt94$_0.scaleX);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_5 = frameFloatOffset, frameFloatOffset = tmp$_5 + 1 | 0, tmp$_5), this._helpTransform_9prt94$_0.scaleY);
    this._parseActionDataInFrame_2hm7da$_0(rawData, frameStart, this._bone, this._slot);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseBoneTranslateFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    tmp$ = this._frameFloatArray_204v09$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 2 | 0);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_0 = frameFloatOffset, frameFloatOffset = tmp$_0 + 1 | 0, tmp$_0), ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, 0.0));
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_1 = frameFloatOffset, frameFloatOffset = tmp$_1 + 1 | 0, tmp$_1), ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, 0.0));
    return frameOffset;
  };
  ObjectDataParser.prototype._parseBoneRotateFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var rotation = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ROTATE, 0.0) * Transform$Companion_getInstance().DEG_RAD;
    if (frameStart !== 0) {
      if (this._prevClockwise_hkgu6c$_0 === 0.0) {
        rotation = this._prevRotation_6xu96o$_0 + Transform$Companion_getInstance().normalizeRadian_14dthe$(rotation - this._prevRotation_6xu96o$_0);
      }
       else {
        if (this._prevClockwise_hkgu6c$_0 > 0 ? rotation >= this._prevRotation_6xu96o$_0 : rotation <= this._prevRotation_6xu96o$_0) {
          this._prevClockwise_hkgu6c$_0 = this._prevClockwise_hkgu6c$_0 > 0 ? this._prevClockwise_hkgu6c$_0 - 1 : this._prevClockwise_hkgu6c$_0 + 1;
        }
        rotation = this._prevRotation_6xu96o$_0 + rotation - this._prevRotation_6xu96o$_0 + Transform$Companion_getInstance().PI_D * this._prevClockwise_hkgu6c$_0;
      }
    }
    this._prevClockwise_hkgu6c$_0 = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().CLOCK_WISE, 0.0);
    this._prevRotation_6xu96o$_0 = rotation;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    tmp$ = this._frameFloatArray_204v09$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 2 | 0);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_0 = frameFloatOffset, frameFloatOffset = tmp$_0 + 1 | 0, tmp$_0), rotation);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_1 = frameFloatOffset, frameFloatOffset = tmp$_1 + 1 | 0, tmp$_1), ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SKEW, 0.0) * Transform$Companion_getInstance().DEG_RAD);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseBoneScaleFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    tmp$ = this._frameFloatArray_204v09$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 2 | 0);
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_0 = frameFloatOffset, frameFloatOffset = tmp$_0 + 1 | 0, tmp$_0), ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, 1.0));
    this._frameFloatArray_204v09$_0.set_5wr77w$((tmp$_1 = frameFloatOffset, frameFloatOffset = tmp$_1 + 1 | 0, tmp$_1), ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, 1.0));
    return frameOffset;
  };
  ObjectDataParser.prototype._parseSlotDisplayFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0;
    var frameOffset = this._parseFrame_nxjb40$(rawData, frameStart, frameCount);
    tmp$ = this._frameArray_fpzfut$_0;
    set_length_0(tmp$, get_length_0(tmp$) + 1 | 0);
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().VALUE)) {
      this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().VALUE, 0.0));
    }
     else {
      this._frameArray_fpzfut$_0.set_5wr77w$(frameOffset + 1 | 0, ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().DISPLAY_INDEX, 0.0));
    }
    this._parseActionDataInFrame_2hm7da$_0(rawData, frameStart, (tmp$_0 = this._slot) != null ? tmp$_0.parent : null, this._slot);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseSlotColorFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var colorOffset = -1;
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().VALUE) || ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().COLOR)) {
      var rawColor = (tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().VALUE)) != null ? tmp$ : ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().COLOR);
      tmp$_0 = ObjectDataParser$Companion_getInstance().get_keys_ntq51o$(rawColor).iterator();
      while (tmp$_0.hasNext()) {
        var k = tmp$_0.next();
        this._parseColorTransform_lkycw$(rawColor, this._helpColorTransform_ymc72f$_0);
        colorOffset = get_length(this._colorArray_y9qg6z$_0);
        tmp$_1 = this._colorArray_y9qg6z$_0;
        set_length(tmp$_1, get_length(tmp$_1) + 8 | 0);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_2 = colorOffset, colorOffset = tmp$_2 + 1 | 0, tmp$_2), numberToInt(round(this._helpColorTransform_ymc72f$_0.alphaMultiplier * 100)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_3 = colorOffset, colorOffset = tmp$_3 + 1 | 0, tmp$_3), numberToInt(round(this._helpColorTransform_ymc72f$_0.redMultiplier * 100)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_4 = colorOffset, colorOffset = tmp$_4 + 1 | 0, tmp$_4), numberToInt(round(this._helpColorTransform_ymc72f$_0.greenMultiplier * 100)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_5 = colorOffset, colorOffset = tmp$_5 + 1 | 0, tmp$_5), numberToInt(round(this._helpColorTransform_ymc72f$_0.blueMultiplier * 100)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_6 = colorOffset, colorOffset = tmp$_6 + 1 | 0, tmp$_6), numberToInt(round(this._helpColorTransform_ymc72f$_0.alphaOffset)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_7 = colorOffset, colorOffset = tmp$_7 + 1 | 0, tmp$_7), numberToInt(round(this._helpColorTransform_ymc72f$_0.redOffset)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_8 = colorOffset, colorOffset = tmp$_8 + 1 | 0, tmp$_8), numberToInt(round(this._helpColorTransform_ymc72f$_0.greenOffset)));
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_9 = colorOffset, colorOffset = tmp$_9 + 1 | 0, tmp$_9), numberToInt(round(this._helpColorTransform_ymc72f$_0.blueOffset)));
        colorOffset = colorOffset - 8 | 0;
        break;
      }
    }
    if (colorOffset < 0) {
      if (this._defaultColorOffset_1uxjcs$_0 < 0) {
        colorOffset = get_length(this._colorArray_y9qg6z$_0);
        this._defaultColorOffset_1uxjcs$_0 = colorOffset;
        tmp$_10 = this._colorArray_y9qg6z$_0;
        set_length(tmp$_10, get_length(tmp$_10) + 8 | 0);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_11 = colorOffset, colorOffset = tmp$_11 + 1 | 0, tmp$_11), 100);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_12 = colorOffset, colorOffset = tmp$_12 + 1 | 0, tmp$_12), 100);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_13 = colorOffset, colorOffset = tmp$_13 + 1 | 0, tmp$_13), 100);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_14 = colorOffset, colorOffset = tmp$_14 + 1 | 0, tmp$_14), 100);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_15 = colorOffset, colorOffset = tmp$_15 + 1 | 0, tmp$_15), 0);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_16 = colorOffset, colorOffset = tmp$_16 + 1 | 0, tmp$_16), 0);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_17 = colorOffset, colorOffset = tmp$_17 + 1 | 0, tmp$_17), 0);
        this._colorArray_y9qg6z$_0.set_vux9f0$((tmp$_18 = colorOffset, colorOffset = tmp$_18 + 1 | 0, tmp$_18), 0);
      }
      colorOffset = this._defaultColorOffset_1uxjcs$_0;
    }
    var frameIntOffset = get_length(this._frameIntArray_4wyde4$_0);
    tmp$_19 = this._frameIntArray_4wyde4$_0;
    set_length(tmp$_19, get_length(tmp$_19) + 1 | 0);
    this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset, colorOffset);
    return frameOffset;
  };
  ObjectDataParser.prototype._parseSlotDeformFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var rawVertices = (tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES)) != null ? ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(tmp$) : null;
    var offset = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().OFFSET, 0);
    var vertexCount = this._intArray_9mqhtz$_0.get_za3lpa$(ensureNotNull(this._mesh).geometry.offset + BinaryOffset$GeometryVertexCount_getInstance().index | 0);
    var meshName = '' + ((tmp$_1 = (tmp$_0 = this._mesh) != null ? tmp$_0.parent : null) != null ? tmp$_1.name : null) + '_' + ((tmp$_2 = this._slot) != null ? tmp$_2.name : null) + '_' + ((tmp$_3 = this._mesh) != null ? tmp$_3.name : null);
    var weight = ensureNotNull((tmp$_4 = this._mesh) != null ? tmp$_4.geometry : null).weight;
    var x;
    var y;
    var iB = 0;
    var iV = 0;
    if (weight != null) {
      var rawSlotPose = this._weightSlotPose_ms86fe$_0.get_11rb$(meshName);
      this._helpMatrixA_y87r8k$_0.copyFromArray_fcbbnx$(ensureNotNull(rawSlotPose).data, 0);
      tmp$_5 = this._frameFloatArray_204v09$_0;
      set_length_0(tmp$_5, get_length_0(tmp$_5) + (weight.count * 2 | 0) | 0);
      iB = weight.offset + BinaryOffset$WeigthBoneIndices_getInstance().index + get_length_1(weight.bones) | 0;
    }
     else {
      tmp$_6 = this._frameFloatArray_204v09$_0;
      set_length_0(tmp$_6, get_length_0(tmp$_6) + (vertexCount * 2 | 0) | 0);
    }
    tmp$_7 = vertexCount * 2 | 0;
    for (var i = 0; i < tmp$_7; i += 2) {
      if (rawVertices == null) {
        x = 0.0;
        y = 0.0;
      }
       else {
        if (i < offset || (i - offset | 0) >= rawVertices.length) {
          x = 0.0;
        }
         else {
          x = rawVertices[i - offset | 0];
        }
        if ((i + 1 | 0) < offset || (i + 1 - offset | 0) >= rawVertices.length) {
          y = 0.0;
        }
         else {
          y = rawVertices[i + 1 - offset | 0];
        }
      }
      if (weight != null) {
        var rawBonePoses = ensureNotNull(this._weightBonePoses_3ak4ir$_0.get_11rb$(meshName));
        var vertexBoneCount = this._intArray_9mqhtz$_0.get_za3lpa$((tmp$_8 = iB, iB = tmp$_8 + 1 | 0, tmp$_8));
        this._helpMatrixA_y87r8k$_0.transformPoint_hd5a0h$(x, y, this._helpPoint_jjup10$_0, true);
        x = this._helpPoint_jjup10$_0.x;
        y = this._helpPoint_jjup10$_0.y;
        for (var j = 0; j < vertexBoneCount; j++) {
          var boneIndex = this._intArray_9mqhtz$_0.get_za3lpa$((tmp$_9 = iB, iB = tmp$_9 + 1 | 0, tmp$_9));
          this._helpMatrixB_y87r9f$_0.copyFromArray_5qgd2m$(rawBonePoses, (boneIndex * 7 | 0) + 1 | 0);
          this._helpMatrixB_y87r9f$_0.invert();
          this._helpMatrixB_y87r9f$_0.transformPoint_hd5a0h$(x, y, this._helpPoint_jjup10$_0, true);
          this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + (tmp$_10 = iV, iV = tmp$_10 + 1 | 0, tmp$_10) | 0, this._helpPoint_jjup10$_0.x);
          this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + (tmp$_11 = iV, iV = tmp$_11 + 1 | 0, tmp$_11) | 0, this._helpPoint_jjup10$_0.y);
        }
      }
       else {
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + i | 0, x);
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + i + 1 | 0, y);
      }
    }
    if (frameStart === 0) {
      var frameIntOffset = get_length(this._frameIntArray_4wyde4$_0);
      tmp$_12 = this._frameIntArray_4wyde4$_0;
      set_length(tmp$_12, get_length(tmp$_12) + 5 | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + BinaryOffset$DeformVertexOffset_getInstance().index | 0, ensureNotNull(this._mesh).geometry.offset);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + BinaryOffset$DeformCount_getInstance().index | 0, get_length_0(this._frameFloatArray_204v09$_0) - frameFloatOffset | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + BinaryOffset$DeformValueCount_getInstance().index | 0, get_length_0(this._frameFloatArray_204v09$_0) - frameFloatOffset | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + BinaryOffset$DeformValueOffset_getInstance().index | 0, 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + BinaryOffset$DeformFloatOffset_getInstance().index | 0, frameFloatOffset - ensureNotNull(this._animation).frameFloatOffset | 0);
      this._timelineArray_a4oiyd$_0.set_5wr77w$(ensureNotNull(this._timeline).offset + BinaryOffset$TimelineFrameValueCount_getInstance().index | 0, frameIntOffset - ensureNotNull(this._animation).frameIntOffset | 0);
    }
    return frameOffset;
  };
  ObjectDataParser.prototype._parseIKConstraintFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1;
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var frameIntOffset = get_length(this._frameIntArray_4wyde4$_0);
    tmp$ = this._frameIntArray_4wyde4$_0;
    set_length(tmp$, get_length(tmp$) + 2 | 0);
    this._frameIntArray_4wyde4$_0.set_vux9f0$((tmp$_0 = frameIntOffset, frameIntOffset = tmp$_0 + 1 | 0, tmp$_0), ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawData, DataParser$Companion_getInstance().BEND_POSITIVE, true) ? 1 : 0);
    this._frameIntArray_4wyde4$_0.set_vux9f0$((tmp$_1 = frameIntOffset, frameIntOffset = tmp$_1 + 1 | 0, tmp$_1), numberToInt(round(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().WEIGHT, 1.0) * 100.0)));
    return frameOffset;
  };
  ObjectDataParser.prototype._parseActionData_vpjj18$ = function (rawData, type, bone, slot) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var actions = ArrayList_init();
    if (typeof rawData === 'string') {
      var action = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(ActionData));
      action.type = type;
      action.name = rawData;
      action.bone = bone;
      action.slot = slot;
      push(actions, action);
    }
     else if (Kotlin.isType(rawData, List)) {
      tmp$_0 = (Kotlin.isType(tmp$ = rawData, List) ? tmp$ : throwCCE()).iterator();
      while (tmp$_0.hasNext()) {
        var rawAction = tmp$_0.next();
        var action_0 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(ActionData));
        if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawAction, DataParser$Companion_getInstance().GOTO_AND_PLAY)) {
          action_0.type = ActionType$Play_getInstance();
          action_0.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawAction, DataParser$Companion_getInstance().GOTO_AND_PLAY, '');
        }
         else {
          if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawAction, DataParser$Companion_getInstance().TYPE) && typeof rawAction.get_11rb$(DataParser$Companion_getInstance().TYPE) === 'string') {
            action_0.type = DataParser$Companion_getInstance()._getActionType_pdl1vj$((tmp$_1 = rawAction.get_11rb$(DataParser$Companion_getInstance().TYPE)) != null ? tmp$_1.toString() : null);
          }
           else {
            action_0.type = ActionType$Companion_getInstance().get_za3lpa$(ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawAction, DataParser$Companion_getInstance().TYPE, type.id));
          }
          action_0.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawAction, DataParser$Companion_getInstance().NAME, '');
        }
        if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawAction, DataParser$Companion_getInstance().BONE)) {
          var boneName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawAction, DataParser$Companion_getInstance().BONE, '');
          action_0.bone = (tmp$_2 = this._armature) != null ? tmp$_2.getBone_pdl1vj$(boneName) : null;
        }
         else {
          action_0.bone = bone;
        }
        if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawAction, DataParser$Companion_getInstance().SLOT)) {
          var slotName = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawAction, DataParser$Companion_getInstance().SLOT, '');
          action_0.slot = (tmp$_3 = this._armature) != null ? tmp$_3.getSlot_pdl1vj$(slotName) : null;
        }
         else {
          action_0.slot = slot;
        }
        var userData = null;
        if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawAction, DataParser$Companion_getInstance().INTS)) {
          if (userData == null) {
            userData = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(UserData));
          }
          var rawInts = ObjectDataParser$Companion_getInstance().get_intArrayList_ntq51o$(rawAction.get_11rb$(DataParser$Companion_getInstance().INTS));
          tmp$_4 = rawInts.iterator();
          while (tmp$_4.hasNext()) {
            var rawValue = tmp$_4.next();
            userData.addInt_za3lpa$(rawValue);
          }
        }
        if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawAction, DataParser$Companion_getInstance().FLOATS)) {
          if (userData == null) {
            userData = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(UserData));
          }
          var rawFloats = ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(rawAction.get_11rb$(DataParser$Companion_getInstance().FLOATS));
          tmp$_5 = rawFloats.iterator();
          while (tmp$_5.hasNext()) {
            var rawValue_0 = tmp$_5.next();
            userData.addFloat_14dthe$(rawValue_0);
          }
        }
        if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawAction, DataParser$Companion_getInstance().STRINGS)) {
          if (userData == null) {
            userData = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(UserData));
          }
          var rawStrings = Kotlin.isType(tmp$_6 = rawAction.get_11rb$(DataParser$Companion_getInstance().STRINGS), ArrayList) ? tmp$_6 : throwCCE();
          tmp$_7 = rawStrings.iterator();
          while (tmp$_7.hasNext()) {
            var rawValue_1 = tmp$_7.next();
            userData.addString_61zpoe$(rawValue_1);
          }
        }
        action_0.data = userData;
        push(actions, action_0);
      }
    }
    return actions;
  };
  ObjectDataParser.prototype._parseDeformFrame_nxjb40$ = function (rawData, frameStart, frameCount) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    var frameFloatOffset = get_length_0(this._frameFloatArray_204v09$_0);
    var frameOffset = this._parseTweenFrame_nxjb40$(rawData, frameStart, frameCount);
    var rawVertices = ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES) ? (tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES)) != null ? ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(tmp$) : null : (tmp$_0 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().VALUE)) != null ? ObjectDataParser$Companion_getInstance().get_doubleArrayList_ntq51o$(tmp$_0) : null;
    var offset = numberToInt(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().OFFSET, 0.0));
    var vertexCount = this._intArray_9mqhtz$_0.get_za3lpa$(ensureNotNull(this._geometry).offset + BinaryOffset$GeometryVertexCount_getInstance().index | 0);
    var weight = ensureNotNull(this._geometry).weight;
    var x;
    var y;
    if (weight == null) {
      tmp$_1 = this._frameFloatArray_204v09$_0;
      set_length_0(tmp$_1, get_length_0(tmp$_1) + (vertexCount * 2 | 0) | 0);
      tmp$_2 = vertexCount * 2 | 0;
      for (var i = 0; i < tmp$_2; i += 2) {
        if (rawVertices != null) {
          if (i < offset || (i - offset | 0) >= get_length_0(rawVertices)) {
            x = 0.0;
          }
           else {
            x = rawVertices.get_za3lpa$(i - offset | 0);
          }
          if ((i + 1 | 0) < offset || (i + 1 - offset | 0) >= get_length_0(rawVertices)) {
            y = 0.0;
          }
           else {
            y = rawVertices.get_za3lpa$(i + 1 - offset | 0);
          }
        }
         else {
          x = 0.0;
          y = 0.0;
        }
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + i | 0, x);
        this._frameFloatArray_204v09$_0.set_5wr77w$(frameFloatOffset + i + 1 | 0, y);
      }
    }
    if (frameStart === 0) {
      var frameIntOffset = get_length(this._frameIntArray_4wyde4$_0);
      tmp$_3 = this._frameIntArray_4wyde4$_0;
      set_length(tmp$_3, get_length(tmp$_3) + 5 | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + BinaryOffset$DeformVertexOffset_getInstance().index | 0, ensureNotNull(this._geometry).offset);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + BinaryOffset$DeformCount_getInstance().index | 0, get_length_0(this._frameFloatArray_204v09$_0) - frameFloatOffset | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + BinaryOffset$DeformValueCount_getInstance().index | 0, get_length_0(this._frameFloatArray_204v09$_0) - frameFloatOffset | 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + BinaryOffset$DeformValueOffset_getInstance().index | 0, 0);
      this._frameIntArray_4wyde4$_0.set_vux9f0$(frameIntOffset + BinaryOffset$DeformFloatOffset_getInstance().index | 0, frameFloatOffset - ensureNotNull(this._animation).frameFloatOffset | 0);
      this._timelineArray_a4oiyd$_0.set_5wr77w$(ensureNotNull(this._timeline).offset + BinaryOffset$TimelineFrameValueCount_getInstance().index | 0, frameIntOffset - ensureNotNull(this._animation).frameIntOffset | 0);
    }
    return frameOffset;
  };
  ObjectDataParser.prototype._parseTransform_hr8bzd$ = function (rawData, transform, scale) {
    transform.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().X, 0.0) * scale;
    transform.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().Y, 0.0) * scale;
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().ROTATE) || ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SKEW)) {
      transform.rotation = Transform$Companion_getInstance().normalizeRadian_14dthe$(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ROTATE, 0.0) * Transform$Companion_getInstance().DEG_RAD);
      transform.skew = Transform$Companion_getInstance().normalizeRadian_14dthe$(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SKEW, 0.0) * Transform$Companion_getInstance().DEG_RAD);
    }
     else if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SKEW_X) || ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SKEW_Y)) {
      transform.rotation = Transform$Companion_getInstance().normalizeRadian_14dthe$(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SKEW_Y, 0.0) * Transform$Companion_getInstance().DEG_RAD);
      transform.skew = Transform$Companion_getInstance().normalizeRadian_14dthe$(ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SKEW_X, 0.0) * Transform$Companion_getInstance().DEG_RAD) - transform.rotation;
    }
    transform.scaleX = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE_X, 1.0);
    transform.scaleY = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE_Y, 1.0);
  };
  ObjectDataParser.prototype._parseColorTransform_lkycw$ = function (rawData, color) {
    color.alphaMultiplier = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().ALPHA_MULTIPLIER, 100.0) * 0.01;
    color.redMultiplier = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().RED_MULTIPLIER, 100.0) * 0.01;
    color.greenMultiplier = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().GREEN_MULTIPLIER, 100.0) * 0.01;
    color.blueMultiplier = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().BLUE_MULTIPLIER, 100.0) * 0.01;
    color.alphaOffset = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().ALPHA_OFFSET, 0);
    color.redOffset = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().RED_OFFSET, 0);
    color.greenOffset = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().GREEN_OFFSET, 0);
    color.blueOffset = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().BLUE_OFFSET, 0);
  };
  ObjectDataParser.prototype._parseGeometry_9lxtbg$ = function (rawData, geometry) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29;
    var rawVertices = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().VERTICES));
    var vertexCount = rawVertices.length / 2 | 0;
    var triangleCount = 0;
    var geometryOffset = get_length(this._intArray_9mqhtz$_0);
    var verticesOffset = get_length_0(this._floatArray_brc40c$_0);
    geometry.offset = geometryOffset;
    geometry.data = this._data;
    tmp$ = this._intArray_9mqhtz$_0;
    set_length(tmp$, get_length(tmp$) + 4 | 0);
    this._intArray_9mqhtz$_0.set_vux9f0$(geometryOffset + BinaryOffset$GeometryVertexCount_getInstance().index | 0, vertexCount);
    this._intArray_9mqhtz$_0.set_vux9f0$(geometryOffset + BinaryOffset$GeometryFloatOffset_getInstance().index | 0, verticesOffset);
    this._intArray_9mqhtz$_0.set_vux9f0$(geometryOffset + BinaryOffset$GeometryWeightOffset_getInstance().index | 0, -1);
    tmp$_0 = this._floatArray_brc40c$_0;
    set_length_0(tmp$_0, get_length_0(tmp$_0) + (vertexCount * 2 | 0) | 0);
    tmp$_1 = vertexCount * 2 | 0;
    for (var i = 0; i < tmp$_1; i++) {
      this._floatArray_brc40c$_0.set_5wr77w$(verticesOffset + i | 0, rawVertices[i]);
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TRIANGLES)) {
      var rawTriangles = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TRIANGLES));
      triangleCount = rawTriangles.length / 3 | 0;
      tmp$_2 = this._intArray_9mqhtz$_0;
      set_length(tmp$_2, get_length(tmp$_2) + (triangleCount * 3 | 0) | 0);
      tmp$_3 = triangleCount * 3 | 0;
      for (var i_0 = 0; i_0 < tmp$_3; i_0++) {
        this._intArray_9mqhtz$_0.set_vux9f0$(geometryOffset + BinaryOffset$GeometryVertexIndices_getInstance().index + i_0 | 0, numberToInt(rawTriangles[i_0]));
      }
    }
    this._intArray_9mqhtz$_0.set_vux9f0$(geometryOffset + BinaryOffset$GeometryTriangleCount_getInstance().index | 0, triangleCount);
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().UVS)) {
      var rawUVs = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().UVS));
      var uvOffset = verticesOffset + (vertexCount * 2 | 0) | 0;
      tmp$_4 = this._floatArray_brc40c$_0;
      set_length_0(tmp$_4, get_length_0(tmp$_4) + (vertexCount * 2 | 0) | 0);
      tmp$_5 = vertexCount * 2 | 0;
      for (var i_1 = 0; i_1 < tmp$_5; i_1++) {
        this._floatArray_brc40c$_0.set_5wr77w$(uvOffset + i_1 | 0, rawUVs[i_1]);
      }
    }
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().WEIGHTS)) {
      var rawWeights = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().WEIGHTS));
      var weightCount = (rawWeights.length - vertexCount | 0) / 2 | 0;
      var weightOffset = get_length(this._intArray_9mqhtz$_0);
      var floatOffset = get_length_0(this._floatArray_brc40c$_0);
      var weightBoneCount = 0;
      var sortedBones = (tmp$_6 = this._armature) != null ? tmp$_6.sortedBones : null;
      var weight = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(WeightData));
      weight.count = weightCount;
      weight.offset = weightOffset;
      tmp$_7 = this._intArray_9mqhtz$_0;
      set_length(tmp$_7, get_length(tmp$_7) + (2 + weightBoneCount + vertexCount + weightCount) | 0);
      this._intArray_9mqhtz$_0.set_vux9f0$(weightOffset + BinaryOffset$WeigthFloatOffset_getInstance().index | 0, floatOffset);
      if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE_POSE)) {
        var rawSlotPose = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().SLOT_POSE));
        var rawBonePoses = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().BONE_POSE));
        var weightBoneIndices = new IntArrayList();
        weightBoneCount = rawBonePoses.length / 7 | 0;
        set_length(weightBoneIndices, weightBoneCount);
        tmp$_8 = weightBoneCount;
        for (var i_2 = 0; i_2 < tmp$_8; i_2++) {
          var rawBoneIndex = numberToInt(rawBonePoses[i_2 * 7 | 0]);
          var bone = this._rawBones.get_za3lpa$(rawBoneIndex);
          weight.addBone_ejz9f2$(bone);
          weightBoneIndices.set_vux9f0$(i_2, rawBoneIndex);
          this._intArray_9mqhtz$_0.set_vux9f0$(weightOffset + BinaryOffset$WeigthBoneIndices_getInstance().index + i_2 | 0, ensureNotNull(sortedBones).indexOf_11rb$(bone));
        }
        tmp$_9 = this._floatArray_brc40c$_0;
        set_length_0(tmp$_9, get_length_0(tmp$_9) + (weightCount * 3 | 0) | 0);
        this._helpMatrixA_y87r8k$_0.copyFromArray_fcbbnx$(rawSlotPose, 0);
        var iW = 0;
        var iB = weightOffset + BinaryOffset$WeigthBoneIndices_getInstance().index + weightBoneCount | 0;
        var iV = floatOffset;
        for (var i_3 = 0; i_3 < vertexCount; i_3++) {
          var iD = i_3 * 2 | 0;
          var vertexBoneCount = numberToInt(rawWeights[tmp$_10 = iW, iW = tmp$_10 + 1 | 0, tmp$_10]);
          this._intArray_9mqhtz$_0.set_vux9f0$((tmp$_11 = iB, iB = tmp$_11 + 1 | 0, tmp$_11), vertexBoneCount);
          var x = this._floatArray_brc40c$_0.get_za3lpa$(verticesOffset + iD | 0);
          var y = this._floatArray_brc40c$_0.get_za3lpa$(verticesOffset + iD + 1 | 0);
          this._helpMatrixA_y87r8k$_0.transformPoint_hd5a0h$(x, y, this._helpPoint_jjup10$_0);
          x = this._helpPoint_jjup10$_0.x;
          y = this._helpPoint_jjup10$_0.y;
          for (var j = 0; j < vertexBoneCount; j++) {
            var rawBoneIndex_0 = numberToInt(rawWeights[tmp$_12 = iW, iW = tmp$_12 + 1 | 0, tmp$_12]);
            var boneIndex = weightBoneIndices.indexOf_qt1dr2$(rawBoneIndex_0);
            this._helpMatrixB_y87r9f$_0.copyFromArray_fcbbnx$(rawBonePoses, (boneIndex * 7 | 0) + 1 | 0);
            this._helpMatrixB_y87r9f$_0.invert();
            this._helpMatrixB_y87r9f$_0.transformPoint_hd5a0h$(x, y, this._helpPoint_jjup10$_0);
            this._intArray_9mqhtz$_0.set_vux9f0$((tmp$_13 = iB, iB = tmp$_13 + 1 | 0, tmp$_13), boneIndex);
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_15 = iV, iV = tmp$_15 + 1 | 0, tmp$_15), rawWeights[tmp$_14 = iW, iW = tmp$_14 + 1 | 0, tmp$_14]);
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_16 = iV, iV = tmp$_16 + 1 | 0, tmp$_16), this._helpPoint_jjup10$_0.x);
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_17 = iV, iV = tmp$_17 + 1 | 0, tmp$_17), this._helpPoint_jjup10$_0.y);
          }
        }
      }
       else {
        var rawBones = ObjectDataParser$Companion_getInstance().get_doubleArray_ntq51o$(ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().BONES));
        weightBoneCount = rawBones.length;
        tmp$_18 = weightBoneCount;
        for (var i_4 = 0; i_4 < tmp$_18; i_4++) {
          var rawBoneIndex_1 = numberToInt(rawBones[i_4]);
          var bone_0 = this._rawBones.get_za3lpa$(rawBoneIndex_1);
          weight.addBone_ejz9f2$(bone_0);
          this._intArray_9mqhtz$_0.set_vux9f0$(weightOffset + BinaryOffset$WeigthBoneIndices_getInstance().index + i_4 | 0, ensureNotNull(sortedBones).indexOf_11rb$(bone_0));
        }
        tmp$_19 = this._floatArray_brc40c$_0;
        set_length_0(tmp$_19, get_length_0(tmp$_19) + (weightCount * 3 | 0) | 0);
        var iW_0 = 0;
        var iV_0 = 0;
        var iB_0 = weightOffset + BinaryOffset$WeigthBoneIndices_getInstance().index + weightBoneCount | 0;
        var iF = floatOffset;
        for (var i_5 = 0; i_5 < weightCount; i_5++) {
          var vertexBoneCount_0 = numberToInt(rawWeights[tmp$_20 = iW_0, iW_0 = tmp$_20 + 1 | 0, tmp$_20]);
          this._intArray_9mqhtz$_0.set_vux9f0$((tmp$_21 = iB_0, iB_0 = tmp$_21 + 1 | 0, tmp$_21), vertexBoneCount_0);
          for (var j_0 = 0; j_0 < vertexBoneCount_0; j_0++) {
            var boneIndex_0 = rawWeights[tmp$_22 = iW_0, iW_0 = tmp$_22 + 1 | 0, tmp$_22];
            var boneWeight = rawWeights[tmp$_23 = iW_0, iW_0 = tmp$_23 + 1 | 0, tmp$_23];
            var x_0 = rawVertices[tmp$_24 = iV_0, iV_0 = tmp$_24 + 1 | 0, tmp$_24];
            var y_0 = rawVertices[tmp$_25 = iV_0, iV_0 = tmp$_25 + 1 | 0, tmp$_25];
            this._intArray_9mqhtz$_0.set_vux9f0$((tmp$_26 = iB_0, iB_0 = tmp$_26 + 1 | 0, tmp$_26), indexOf_1(rawBones, boneIndex_0));
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_27 = iF, iF = tmp$_27 + 1 | 0, tmp$_27), boneWeight);
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_28 = iF, iF = tmp$_28 + 1 | 0, tmp$_28), x_0);
            this._floatArray_brc40c$_0.set_5wr77w$((tmp$_29 = iF, iF = tmp$_29 + 1 | 0, tmp$_29), y_0);
          }
        }
      }
      geometry.weight = weight;
    }
  };
  ObjectDataParser.prototype._parseArray_s8jyv4$ = function (rawData) {
    set_length(this._intArray_9mqhtz$_0, 0);
    set_length_0(this._floatArray_brc40c$_0, 0);
    set_length(this._frameIntArray_4wyde4$_0, 0);
    set_length_0(this._frameFloatArray_204v09$_0, 0);
    set_length_0(this._frameArray_fpzfut$_0, 0);
    set_length_0(this._timelineArray_a4oiyd$_0, 0);
    set_length(this._colorArray_y9qg6z$_0, 0);
  };
  var ArrayBuffer_init = ArrayBuffer;
  ObjectDataParser.prototype._modifyArray = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    if (get_length(this._intArray_9mqhtz$_0) % 2 !== 0) {
      push_1(this._intArray_9mqhtz$_0, 0);
    }
    if (get_length(this._frameIntArray_4wyde4$_0) % 2 !== 0) {
      push_1(this._frameIntArray_4wyde4$_0, 0);
    }
    if (get_length_0(this._frameArray_fpzfut$_0) % 2 !== 0) {
      push_0(this._frameArray_fpzfut$_0, 0.0);
    }
    if (get_length_0(this._timelineArray_a4oiyd$_0) % 2 !== 0) {
      push_0(this._timelineArray_a4oiyd$_0, 0.0);
    }
    if (get_length_0(this._timelineArray_a4oiyd$_0) % 2 !== 0) {
      push_1(this._colorArray_y9qg6z$_0, 0);
    }
    var l1 = get_length(this._intArray_9mqhtz$_0) * 2 | 0;
    var l2 = get_length_0(this._floatArray_brc40c$_0) * 4 | 0;
    var l3 = get_length(this._frameIntArray_4wyde4$_0) * 2 | 0;
    var l4 = get_length_0(this._frameFloatArray_204v09$_0) * 4 | 0;
    var l5 = get_length_0(this._frameArray_fpzfut$_0) * 2 | 0;
    var l6 = get_length_0(this._timelineArray_a4oiyd$_0) * 2 | 0;
    var l7 = get_length(this._colorArray_y9qg6z$_0) * 2 | 0;
    var lTotal = l1 + l2 + l3 + l4 + l5 + l6 + l7 | 0;
    var binary = new ArrayBuffer_init(lTotal + 15 & -16);
    var intArray = sliceInt16BufferByteOffset(binary, 0, get_length(this._intArray_9mqhtz$_0));
    var floatArray = sliceFloat32BufferByteOffset(binary, l1, get_length_0(this._floatArray_brc40c$_0));
    var frameIntArray = sliceInt16BufferByteOffset(binary, l1 + l2 | 0, get_length(this._frameIntArray_4wyde4$_0));
    var frameFloatArray = sliceFloat32BufferByteOffset(binary, l1 + l2 + l3 | 0, get_length_0(this._frameFloatArray_204v09$_0));
    var frameArray = sliceInt16BufferByteOffset(binary, l1 + l2 + l3 + l4 | 0, get_length_0(this._frameArray_fpzfut$_0));
    var timelineArray = sliceUint16BufferByteOffset(binary, l1 + l2 + l3 + l4 + l5 | 0, get_length_0(this._timelineArray_a4oiyd$_0));
    var colorArray = sliceInt16BufferByteOffset(binary, l1 + l2 + l3 + l4 + l5 + l6 | 0, get_length(this._colorArray_y9qg6z$_0));
    tmp$ = get_length(this._intArray_9mqhtz$_0);
    for (var i = 0; i < tmp$; i++) {
      intArray[i] = toShort(this._intArray_9mqhtz$_0.get_za3lpa$(i));
    }
    tmp$_0 = get_length_0(this._floatArray_brc40c$_0);
    for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
      floatArray[i_0] = this._floatArray_brc40c$_0.get_za3lpa$(i_0);
    }
    tmp$_1 = get_length(this._frameIntArray_4wyde4$_0);
    for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
      frameIntArray[i_1] = toShort(this._frameIntArray_4wyde4$_0.get_za3lpa$(i_1));
    }
    tmp$_2 = get_length_0(this._frameFloatArray_204v09$_0);
    for (var i_2 = 0; i_2 < tmp$_2; i_2++) {
      frameFloatArray[i_2] = this._frameFloatArray_204v09$_0.get_za3lpa$(i_2);
    }
    tmp$_3 = get_length_0(this._frameArray_fpzfut$_0);
    for (var i_3 = 0; i_3 < tmp$_3; i_3++) {
      frameArray[i_3] = toShort(numberToInt(this._frameArray_fpzfut$_0.get_za3lpa$(i_3)));
    }
    tmp$_4 = get_length_0(this._timelineArray_a4oiyd$_0);
    for (var i_4 = 0; i_4 < tmp$_4; i_4++) {
      timelineArray.set_vux9f0$(i_4, numberToInt(this._timelineArray_a4oiyd$_0.get_za3lpa$(i_4)));
    }
    tmp$_5 = get_length(this._colorArray_y9qg6z$_0);
    for (var i_5 = 0; i_5 < tmp$_5; i_5++) {
      colorArray[i_5] = toShort(this._colorArray_y9qg6z$_0.get_za3lpa$(i_5));
    }
    (tmp$_6 = this._data) != null ? (tmp$_6.binary = binary) : null;
    (tmp$_7 = this._data) != null ? (tmp$_7.intArray = intArray) : null;
    (tmp$_8 = this._data) != null ? (tmp$_8.floatArray = floatArray) : null;
    (tmp$_9 = this._data) != null ? (tmp$_9.frameIntArray = frameIntArray) : null;
    (tmp$_10 = this._data) != null ? (tmp$_10.frameFloatArray = frameFloatArray) : null;
    (tmp$_11 = this._data) != null ? (tmp$_11.frameArray = frameArray) : null;
    (tmp$_12 = this._data) != null ? (tmp$_12.timelineArray = timelineArray) : null;
    (tmp$_13 = this._data) != null ? (tmp$_13.colorArray = colorArray) : null;
    this._defaultColorOffset_1uxjcs$_0 = -1;
  };
  ObjectDataParser.prototype.parseDragonBonesData_p20sj2$$default = function (rawData, scale) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var version = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().VERSION, '');
    var compatibleVersion = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().COMPATIBLE_VERSION, '');
    if (indexOf_0(DataParser$Companion_getInstance().DATA_VERSIONS, version) >= 0 || indexOf_0(DataParser$Companion_getInstance().DATA_VERSIONS, compatibleVersion) >= 0) {
      var data = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(DragonBonesData));
      data.version = version;
      data.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
      data.frameRate = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().FRAME_RATE, 24);
      if (data.frameRate === 0) {
        data.frameRate = 24;
      }
      if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().ARMATURE)) {
        this._data = data;
        this._parseArray_s8jyv4$(rawData);
        var rawArmatures = Kotlin.isType(tmp$ = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().ARMATURE), List) ? tmp$ : throwCCE();
        tmp$_0 = rawArmatures.iterator();
        while (tmp$_0.hasNext()) {
          var rawArmature = tmp$_0.next();
          data.addArmature_ecf29l$(this._parseArmature_p20sj2$(rawArmature, scale));
        }
        if (((tmp$_1 = this._data) != null ? tmp$_1.binary : null) == null) {
          this._modifyArray();
        }
        if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().STAGE)) {
          data.stage = data.getArmature_61zpoe$(ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().STAGE, ''));
        }
         else if (get_length_1(data.armatureNames) > 0) {
          data.stage = data.getArmature_61zpoe$(data.armatureNames.get_za3lpa$(0));
        }
        this._data = null;
      }
      if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().TEXTURE_ATLAS)) {
        this._rawTextureAtlases = (tmp$_2 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().TEXTURE_ATLAS)) == null || Kotlin.isType(tmp$_2, ArrayList) ? tmp$_2 : throwCCE();
      }
      return data;
    }
     else {
      console_getInstance().assert_8kj6y5$(false, 'Nonsupport data version: ' + version + '\n' + 'Please convert DragonBones data to support version.\n' + 'Read more: https://github.com/DragonBones/Tools/');
    }
    return null;
  };
  ObjectDataParser.prototype.parseTextureAtlasData_fec78$$default = function (rawData, textureAtlasData, scale) {
    var tmp$, tmp$_0, tmp$_1;
    if (rawData == null) {
      if (this._rawTextureAtlases == null || get_length_1(ensureNotNull(this._rawTextureAtlases)) === 0) {
        return false;
      }
      var rawTextureAtlas = ensureNotNull(this._rawTextureAtlases).get_za3lpa$((tmp$ = this._rawTextureAtlasIndex, this._rawTextureAtlasIndex = tmp$ + 1 | 0, tmp$));
      this.parseTextureAtlasData_fec78$(rawTextureAtlas, textureAtlasData, scale);
      if (this._rawTextureAtlasIndex >= get_length_1(ensureNotNull(this._rawTextureAtlases))) {
        this._rawTextureAtlasIndex = 0;
        this._rawTextureAtlases = null;
      }
      return true;
    }
    textureAtlasData.width = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().WIDTH, 0);
    textureAtlasData.height = ObjectDataParser$Companion_getInstance()._getInt_n87918$(rawData, DataParser$Companion_getInstance().HEIGHT, 0);
    textureAtlasData.scale = scale === 1.0 ? 1.0 / ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawData, DataParser$Companion_getInstance().SCALE, 1.0) : scale;
    textureAtlasData.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().NAME, '');
    textureAtlasData.imagePath = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawData, DataParser$Companion_getInstance().IMAGE_PATH, '');
    if (ObjectDataParser$Companion_getInstance().contains_s5ds1e$(rawData, DataParser$Companion_getInstance().SUB_TEXTURE)) {
      var rawTextures = Kotlin.isType(tmp$_0 = ObjectDataParser$Companion_getInstance().get_s5ds1e$(rawData, DataParser$Companion_getInstance().SUB_TEXTURE), ArrayList) ? tmp$_0 : throwCCE();
      tmp$_1 = get_length_1(rawTextures);
      for (var i = 0; i < tmp$_1; i++) {
        var rawTexture = rawTextures.get_za3lpa$(i);
        var frameWidth = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().FRAME_WIDTH, -1.0);
        var frameHeight = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().FRAME_HEIGHT, -1.0);
        var textureData = textureAtlasData.createTexture();
        textureData.rotated = ObjectDataParser$Companion_getInstance()._getBoolean_bttdmd$(rawTexture, DataParser$Companion_getInstance().ROTATED, false);
        textureData.name = ObjectDataParser$Companion_getInstance()._getString_1mu92c$(rawTexture, DataParser$Companion_getInstance().NAME, '');
        textureData.region.x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().X, 0.0);
        textureData.region.y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().Y, 0.0);
        textureData.region.width = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().WIDTH, 0.0);
        textureData.region.height = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().HEIGHT, 0.0);
        if (frameWidth > 0.0 && frameHeight > 0.0) {
          textureData.frame = TextureData$Companion_getInstance().createRectangle();
          ensureNotNull(textureData.frame).x = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().FRAME_X, 0.0);
          ensureNotNull(textureData.frame).y = ObjectDataParser$Companion_getInstance()._getNumber_5jja3g$(rawTexture, DataParser$Companion_getInstance().FRAME_Y, 0.0);
          ensureNotNull(textureData.frame).width = frameWidth;
          ensureNotNull(textureData.frame).height = frameHeight;
        }
        textureAtlasData.addTexture_w2prfj$(textureData);
      }
    }
    return true;
  };
  ObjectDataParser.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ObjectDataParser',
    interfaces: [DataParser]
  };
  function ActionFrame() {
    this.frameStart = 0;
    this.actions = new IntArrayList();
  }
  ActionFrame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ActionFrame',
    interfaces: []
  };
  function get_lengthSet($receiver) {
    return $receiver.size;
  }
  function set_lengthSet($receiver, value) {
    $receiver.size = value;
  }
  function get_lengthSet_0($receiver) {
    return $receiver.size;
  }
  function set_lengthSet_0($receiver, value) {
    $receiver.size = value;
  }
  function get_length($receiver) {
    return $receiver.size;
  }
  function set_length($receiver, value) {
    $receiver.size = value;
  }
  function get_length_0($receiver) {
    return $receiver.size;
  }
  function set_length_0($receiver, value) {
    $receiver.size = value;
  }
  function get_lengthSet_1($receiver) {
    return $receiver.size;
  }
  function set_lengthSet_1($receiver, value) {
    var tmp$;
    if (value === 0)
      $receiver.clear();
    else {
      while ($receiver.size > value)
        $receiver.removeAt_za3lpa$($receiver.size - 1 | 0);
      while ($receiver.size < value)
        (Kotlin.isType(tmp$ = $receiver, ArrayList) ? tmp$ : throwCCE()).add_11rb$(null);
    }
  }
  function get_length_1($receiver) {
    return $receiver.size;
  }
  function set_length_1($receiver, value) {
    set_lengthSet_1($receiver, value);
  }
  function push($receiver, value) {
    $receiver.add_11rb$(value);
  }
  function unshift($receiver, value) {
    $receiver.add_wxm5ur$(0, value);
  }
  function push_0($receiver, value) {
    $receiver.add_14dthe$(value);
  }
  function push_1($receiver, value) {
    $receiver.add_za3lpa$(value);
  }
  function splice2($receiver, removeOffset, removeCount, itemsToAdd) {
    for (var n = 0; n < removeCount; n++)
      $receiver.removeAt_za3lpa$(removeOffset);
    for (var n_0 = 0; n_0 < itemsToAdd.length; n_0++) {
      $receiver.add_wxm5ur$(removeOffset + n_0 | 0, itemsToAdd[n_0]);
    }
  }
  function console() {
    console_instance = this;
  }
  console.prototype.warn_vqirvp$ = function (msg) {
    println(joinToString(msg, '\n'));
  };
  console.prototype.error_vqirvp$ = function (msg) {
    println(joinToString(msg, '\n'));
  };
  console.prototype.assert_8kj6y5$ = function (cond, msg) {
    if (cond)
      throw AssertionError_init(msg);
  };
  console.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'console',
    interfaces: []
  };
  var console_instance = null;
  function console_getInstance() {
    if (console_instance === null) {
      new console();
    }
    return console_instance;
  }
  function KorgeDbArmatureDisplay() {
    Image.call(this, bitmap.Bitmaps.transparent);
    this._events_0 = ArrayList_init();
    this._eventsReturnQueue_0 = ArrayList_init();
    this.debugDraw = false;
    this._debugDraw_0 = false;
    this._armature_0 = null;
    this._debugDrawer_0 = null;
    this.addUpdatable_b4k9x1$(KorgeDbArmatureDisplay_init$lambda(this));
    this.eventListeners_0 = LinkedHashMap_init();
  }
  KorgeDbArmatureDisplay.prototype.dbInit_9a3g6p$ = function (armature) {
    this._armature_0 = armature;
  };
  KorgeDbArmatureDisplay.prototype.dbClear = function () {
    this._armature_0 = null;
    this._debugDrawer_0 = null;
  };
  KorgeDbArmatureDisplay.prototype.dbUpdate = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12;
    tmp$ = this._armature_0;
    if (tmp$ == null) {
      return;
    }
    var armature = tmp$;
    var drawed = DragonBones$Companion_getInstance().debugDraw || this.debugDraw;
    if (drawed || this._debugDraw_0) {
      this._debugDraw_0 = drawed;
      if (this._debugDraw_0) {
        if (this._debugDrawer_0 === null) {
          this._debugDrawer_0 = new Image(bitmap.Bitmaps.transparent);
          var boneDrawer = new Graphics();
          (tmp$_0 = this._debugDrawer_0) != null ? (tmp$_0.addChild_l5rad2$(boneDrawer), Unit) : null;
        }
        this.addChild_l5rad2$(ensureNotNull(this._debugDrawer_0));
        var boneDrawer_0 = Kotlin.isType(tmp$_2 = (tmp$_1 = this._debugDrawer_0) != null ? tmp$_1.getChildAt_za3lpa$(0) : null, Graphics) ? tmp$_2 : throwCCE();
        boneDrawer_0.clear();
        var bones = armature.getBones();
        tmp$_3 = get_length_1(bones);
        for (var i = 0; i < tmp$_3; i++) {
          var bone = bones.get_za3lpa$(i);
          var boneLength = bone.boneData.length;
          var startX = bone.globalTransformMatrix.tx;
          var startY = bone.globalTransformMatrix.ty;
          var endX = startX + bone.globalTransformMatrix.a * boneLength;
          var endY = startY + bone.globalTransformMatrix.b * boneLength;
          boneDrawer_0.lineStyle_881qbv$(2.0, color.Colors.PURPLE, 0.7);
          boneDrawer_0.moveTo_lu1900$(startX, startY);
          boneDrawer_0.lineTo_lu1900$(endX, endY);
          boneDrawer_0.lineStyle_881qbv$(0.0, color.Colors.BLACK, 0.0);
          boneDrawer_0.beginFill_kzd6w3$(color.Colors.PURPLE, 0.7);
          boneDrawer_0.drawCircle_yvo9jy$(startX, startY, 3.0);
          boneDrawer_0.endFill();
        }
        var slots = armature.getSlots();
        tmp$_4 = get_length_1(slots);
        for (var i_0 = 0; i_0 < tmp$_4; i_0++) {
          var slot = slots.get_za3lpa$(i_0);
          var boundingBoxData = slot.boundingBoxData;
          if (boundingBoxData != null) {
            var child = (tmp$_6 = (tmp$_5 = this._debugDrawer_0) != null ? tmp$_5.getChildByName_61zpoe$(slot.name) : null) == null || Kotlin.isType(tmp$_6, Graphics) ? tmp$_6 : null;
            if (child == null) {
              child = new Graphics();
              child.name = slot.name;
              (tmp$_7 = this._debugDrawer_0) != null ? (tmp$_7.addChild_l5rad2$(child), Unit) : null;
            }
            child.clear();
            child.lineStyle_881qbv$(2.0, color.Colors.RED, 0.7);
            switch (boundingBoxData.type.name) {
              case 'Rectangle':
                child.drawRect_6y0v78$(-boundingBoxData.width * 0.5, -boundingBoxData.height * 0.5, boundingBoxData.width, boundingBoxData.height);
                break;
              case 'Ellipse':
                child.drawEllipse_6y0v78$(-boundingBoxData.width * 0.5, -boundingBoxData.height * 0.5, boundingBoxData.width, boundingBoxData.height);
                break;
              case 'Polygon':
                var vertices = (Kotlin.isType(tmp$_8 = boundingBoxData, PolygonBoundingBoxData) ? tmp$_8 : throwCCE()).vertices;
                tmp$_9 = get_length_0(vertices);
                for (var i_1 = 0; i_1 < tmp$_9; i_1 += 2) {
                  var x = vertices.get_za3lpa$(i_1);
                  var y = vertices.get_za3lpa$(i_1 + 1 | 0);
                  if (i_1 === 0) {
                    child.moveTo_lu1900$(x, y);
                  }
                   else {
                    child.lineTo_lu1900$(x, y);
                  }
                }

                child.lineTo_lu1900$(vertices.get_za3lpa$(0), vertices.get_za3lpa$(1));
                break;
              default:break;
            }
            child.endFill();
            slot.updateTransformAndMatrix();
            slot.updateGlobalTransform();
            var transform = slot.global;
            var m = new Matrix2d();
            slot.globalTransformMatrix.toMatrix2d_yx07kl$(m);
            child.setMatrix_yx07kl$(m);
          }
           else {
            var child_0 = (tmp$_10 = this._debugDrawer_0) != null ? tmp$_10.getChildByName_61zpoe$(slot.name) : null;
            if (child_0 != null) {
              (tmp$_11 = this._debugDrawer_0) != null ? (tmp$_11.removeChild_gohfih$(child_0), Unit) : null;
            }
          }
        }
      }
       else if (this._debugDrawer_0 !== null && ((tmp$_12 = this._debugDrawer_0) != null ? tmp$_12.parent : null) === this) {
        this.removeChild_gohfih$(this._debugDrawer_0);
      }
    }
  };
  KorgeDbArmatureDisplay.prototype.dispose_6taknv$ = function (disposeProxy) {
    var tmp$;
    if (this._armature_0 != null) {
      (tmp$ = this._armature_0) != null ? (tmp$.dispose(), Unit) : null;
      this._armature_0 = null;
    }
  };
  KorgeDbArmatureDisplay.prototype.destroy = function () {
  };
  KorgeDbArmatureDisplay.prototype.dispatchDBEvent_tiu54o$ = function (type, eventObject) {
    var tmp$;
    var listeners = this.eventListeners_0.get_11rb$(type);
    if (listeners != null) {
      tmp$ = listeners.iterator();
      while (tmp$.hasNext()) {
        var listener = tmp$.next();
        listener(eventObject);
      }
    }
  };
  KorgeDbArmatureDisplay.prototype.hasDBEventListener_61zpoe$ = function (type) {
    return this.eventListeners_0.containsKey_11rb$(type);
  };
  KorgeDbArmatureDisplay.prototype.addDBEventListener_x4mc7b$ = function (type, listener) {
    var $receiver = this.eventListeners_0;
    var tmp$;
    var value = $receiver.get_11rb$(type);
    if (value == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(type, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    tmp$.add_11rb$(listener);
  };
  KorgeDbArmatureDisplay.prototype.removeDBEventListener_x4mc7b$ = function (type, listener) {
    var tmp$;
    (tmp$ = this.eventListeners_0.get_11rb$(type)) != null ? tmp$.remove_11rb$(listener) : null;
  };
  KorgeDbArmatureDisplay.prototype.queueEvent_vah34q$ = function (value) {
    if (!this._events_0.contains_11rb$(value)) {
      this._events_0.add_11rb$(value);
    }
  };
  KorgeDbArmatureDisplay.prototype.queueReturnEvent_0 = function (obj) {
    if (obj != null && !this._eventsReturnQueue_0.contains_11rb$(obj))
      this._eventsReturnQueue_0.add_11rb$(obj);
  };
  KorgeDbArmatureDisplay.prototype.dispatchQueuedEvents_0 = function () {
    var tmp$;
    if (this._events_0.size <= 0)
      return;
    tmp$ = this._events_0.size;
    for (var i = 0; i < tmp$; i++) {
      var eventObject = this._events_0.get_za3lpa$(i);
      var armature = eventObject.armature;
      if (armature._armatureData != null) {
        armature.eventDispatcher.dispatchDBEvent_tiu54o$(eventObject.type, eventObject);
        if (equals(eventObject.type, EventObject$Companion_getInstance().SOUND_EVENT)) {
          this.dispatchDBEvent_tiu54o$(eventObject.type, eventObject);
        }
      }
      this.queueReturnEvent_0(eventObject);
    }
    this._events_0.clear();
  };
  KorgeDbArmatureDisplay.prototype.returnEvents_0 = function () {
    var tmp$;
    if (this._eventsReturnQueue_0.size <= 0)
      return;
    tmp$ = this._eventsReturnQueue_0.iterator();
    while (tmp$.hasNext()) {
      var obj = tmp$.next();
      obj.returnToPool();
    }
    this._eventsReturnQueue_0.clear();
  };
  KorgeDbArmatureDisplay.prototype.on_x4mc7b$ = function (type, listener) {
    this.addDBEventListener_x4mc7b$(type, listener);
  };
  Object.defineProperty(KorgeDbArmatureDisplay.prototype, 'armature', {
    get: function () {
      return ensureNotNull(this._armature_0);
    }
  });
  Object.defineProperty(KorgeDbArmatureDisplay.prototype, 'animation', {
    get: function () {
      return ensureNotNull(this._armature_0).animation;
    }
  });
  function KorgeDbArmatureDisplay_init$lambda(this$KorgeDbArmatureDisplay) {
    return function (it) {
      var tmp$;
      this$KorgeDbArmatureDisplay.returnEvents_0();
      (tmp$ = this$KorgeDbArmatureDisplay._armature_0) != null ? (tmp$.advanceTime_14dthe$(it / 1000.0), Unit) : null;
      this$KorgeDbArmatureDisplay.dispatchQueuedEvents_0();
      return Unit;
    };
  }
  KorgeDbArmatureDisplay.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeDbArmatureDisplay',
    interfaces: [IArmatureProxy, Image]
  };
  function KorgeDbFactory(dataParser) {
    KorgeDbFactory$Companion_getInstance();
    if (dataParser === void 0)
      dataParser = null;
    BaseFactory_init(dataParser, this);
    this.eventManager = new KorgeDbArmatureDisplay();
    this._dragonBonesInstance_2jnee4$_0 = new DragonBones(this.eventManager);
    this._dragonBones = this._dragonBonesInstance_2jnee4$_0;
    println('@TODO: Dragonbones.ticker.shared.add(DragonbonesFactory._clockHandler, DragonbonesFactory)');
  }
  function KorgeDbFactory$Companion() {
    KorgeDbFactory$Companion_instance = this;
    KorgeDbFactory.call(this);
    this.factory = this;
    BaseObject$Companion_getInstance().register_m48uzh$(getKClass(KorgeDbSlot), KorgeDbFactory$KorgeDbFactory$Companion_init$lambda);
    BaseObject$Companion_getInstance().register_m48uzh$(getKClass(KorgeDbTextureAtlasData), KorgeDbFactory$KorgeDbFactory$Companion_init$lambda_0);
  }
  function KorgeDbFactory$KorgeDbFactory$Companion_init$lambda() {
    return new KorgeDbSlot();
  }
  function KorgeDbFactory$KorgeDbFactory$Companion_init$lambda_0() {
    return new KorgeDbTextureAtlasData();
  }
  KorgeDbFactory$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: [KorgeDbFactory]
  };
  var KorgeDbFactory$Companion_instance = null;
  function KorgeDbFactory$Companion_getInstance() {
    if (KorgeDbFactory$Companion_instance === null) {
      new KorgeDbFactory$Companion();
    }
    return KorgeDbFactory$Companion_instance;
  }
  KorgeDbFactory.prototype._buildTextureAtlasData_dju0lx$ = function (textureAtlasData, textureAtlas) {
    var tmp$, tmp$_0;
    var textureAtlasData_0 = (tmp$ = textureAtlasData) == null || Kotlin.isType(tmp$, KorgeDbTextureAtlasData) ? tmp$ : null;
    var textureAtlas_0 = (tmp$_0 = textureAtlas) == null || Kotlin.isType(tmp$_0, Bitmap) ? tmp$_0 : null;
    if (textureAtlasData_0 != null) {
      textureAtlasData_0.renderTexture = textureAtlas_0;
    }
     else {
      textureAtlasData_0 = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(KorgeDbTextureAtlasData));
    }
    return textureAtlasData_0;
  };
  KorgeDbFactory.prototype._buildArmature_mgwu66$ = function (dataPackage) {
    var armature = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(Armature));
    var armatureDisplay = new KorgeDbArmatureDisplay();
    armature.init_ns4wie$(ensureNotNull(dataPackage.armature), armatureDisplay, armatureDisplay, this._dragonBones);
    return armature;
  };
  KorgeDbFactory.prototype._buildSlot_fs0k2h$ = function (dataPackage, slotData, armature) {
    var slot = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(KorgeDbSlot));
    slot.init_vpgcwf$(slotData, armature, new Image(bitmap.Bitmaps.transparent), new Mesh(void 0, void 0, void 0, void 0, Mesh$DrawModes.Triangles));
    return slot;
  };
  KorgeDbFactory.prototype.buildArmatureDisplay_w74nik$ = function (armatureName, dragonBonesName, skinName, textureAtlasName) {
    if (dragonBonesName === void 0)
      dragonBonesName = '';
    if (skinName === void 0)
      skinName = '';
    if (textureAtlasName === void 0)
      textureAtlasName = '';
    var tmp$;
    var armature = this.buildArmature_w74nik$(armatureName, dragonBonesName, skinName, textureAtlasName);
    if (armature !== null) {
      this._dragonBones.clock.add_tgyvsu$(armature);
      return Kotlin.isType(tmp$ = armature.display, KorgeDbArmatureDisplay) ? tmp$ : throwCCE();
    }
    return null;
  };
  KorgeDbFactory.prototype.getTextureDisplay_jyasbz$ = function (textureName, textureAtlasName) {
    if (textureAtlasName === void 0)
      textureAtlasName = null;
    var tmp$;
    var textureData = (tmp$ = this._getTextureData_puj7f4$(textureAtlasName !== null ? textureAtlasName : '', textureName)) == null || Kotlin.isType(tmp$, KorgeDbTextureData) ? tmp$ : null;
    if (textureData != null && textureData.renderTexture !== null) {
      return new Image(ensureNotNull(textureData.renderTexture));
    }
    return null;
  };
  Object.defineProperty(KorgeDbFactory.prototype, 'soundEventManager', {
    get: function () {
      var tmp$;
      return Kotlin.isType(tmp$ = this._dragonBones.eventManager, KorgeDbArmatureDisplay) ? tmp$ : throwCCE();
    }
  });
  KorgeDbFactory.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeDbFactory',
    interfaces: [BaseFactory]
  };
  function KorgeDbSlot() {
    KorgeDbSlot$Companion_getInstance();
    Slot.call(this);
    this._textureScale_0 = 1.0;
    this._renderDisplay_0 = null;
    this.m_0 = new Matrix2d();
  }
  function KorgeDbSlot$Companion() {
    KorgeDbSlot$Companion_instance = this;
    BaseObject$Companion_getInstance().register_m48uzh$(getKClass(KorgeDbTextureAtlasData), KorgeDbSlot$KorgeDbSlot$Companion_init$lambda);
  }
  function KorgeDbSlot$KorgeDbSlot$Companion_init$lambda() {
    return new KorgeDbTextureAtlasData();
  }
  KorgeDbSlot$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KorgeDbSlot$Companion_instance = null;
  function KorgeDbSlot$Companion_getInstance() {
    if (KorgeDbSlot$Companion_instance === null) {
      new KorgeDbSlot$Companion();
    }
    return KorgeDbSlot$Companion_instance;
  }
  KorgeDbSlot.prototype.toString = function () {
    return '[class DragonbonesSlot]';
  };
  KorgeDbSlot.prototype._onClear = function () {
    Slot.prototype._onClear.call(this);
    this._textureScale_0 = 1.0;
    this._renderDisplay_0 = null;
  };
  KorgeDbSlot.prototype._initDisplay_j44yyw$ = function (value, isRetain) {
  };
  KorgeDbSlot.prototype._disposeDisplay_j44yyw$ = function (value, isRelease) {
  };
  KorgeDbSlot.prototype._onUpdateDisplay = function () {
    var tmp$;
    this._renderDisplay_0 = Kotlin.isType(tmp$ = this._display != null ? this._display : this._rawDisplay, View) ? tmp$ : throwCCE();
  };
  KorgeDbSlot.prototype._addDisplay = function () {
    var tmp$, tmp$_0;
    var container = Kotlin.isType(tmp$_0 = (tmp$ = this._armature) != null ? tmp$.display : null, KorgeDbArmatureDisplay) ? tmp$_0 : throwCCE();
    container.addChild_l5rad2$(ensureNotNull(this._renderDisplay_0));
  };
  KorgeDbSlot.prototype._replaceDisplay_za3rmp$ = function (value) {
    var tmp$, tmp$_0, tmp$_1;
    var container = Kotlin.isType(tmp$_0 = (tmp$ = this._armature) != null ? tmp$.display : null, KorgeDbArmatureDisplay) ? tmp$_0 : throwCCE();
    var prevDisplay = Kotlin.isType(tmp$_1 = value, View) ? tmp$_1 : throwCCE();
    container.addChild_l5rad2$(ensureNotNull(this._renderDisplay_0));
    container.swapChildren_1kpf2s$(ensureNotNull(this._renderDisplay_0), prevDisplay);
    container.removeChild_gohfih$(prevDisplay);
    this._textureScale_0 = 1.0;
  };
  KorgeDbSlot.prototype._removeDisplay = function () {
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this._renderDisplay_0) != null ? tmp$.parent : null) != null ? (tmp$_0.removeChild_gohfih$(this._renderDisplay_0), Unit) : null;
  };
  KorgeDbSlot.prototype._updateZOrder = function () {
    var tmp$, tmp$_0;
    var container = Kotlin.isType(tmp$_0 = (tmp$ = this._armature) != null ? tmp$.display : null, KorgeDbArmatureDisplay) ? tmp$_0 : throwCCE();
    var index = container.getChildIndex_l5rad2$(ensureNotNull(this._renderDisplay_0));
    if (index === this._zOrder) {
      return;
    }
    container.addChildAt_pwlnko$(ensureNotNull(this._renderDisplay_0), this._zOrder);
  };
  KorgeDbSlot.prototype._updateVisible = function () {
    var tmp$;
    (tmp$ = this._renderDisplay_0) != null ? (tmp$.visible = (ensureNotNull(this._parent_8be2vx$).visible && this._visible)) : null;
  };
  KorgeDbSlot.prototype._updateBlendMode = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    if (Kotlin.isType(this._renderDisplay_0, Container)) {
      switch (this._blendMode.name) {
        case 'Normal':
          (tmp$ = this._renderDisplay_0) != null ? (tmp$.blendMode = BlendMode.INHERIT) : null;
          break;
        case 'Add':
          (tmp$_0 = this._renderDisplay_0) != null ? (tmp$_0.blendMode = BlendMode.ADD) : null;
          break;
        case 'Darken':
          (tmp$_1 = this._renderDisplay_0) != null ? (tmp$_1.blendMode = BlendMode.DARKEN) : null;
          break;
        case 'Difference':
          (tmp$_2 = this._renderDisplay_0) != null ? (tmp$_2.blendMode = BlendMode.DIFFERENCE) : null;
          break;
        case 'HardLight':
          (tmp$_3 = this._renderDisplay_0) != null ? (tmp$_3.blendMode = BlendMode.HARDLIGHT) : null;
          break;
        case 'Lighten':
          (tmp$_4 = this._renderDisplay_0) != null ? (tmp$_4.blendMode = BlendMode.LIGHTEN) : null;
          break;
        case 'Multiply':
          (tmp$_5 = this._renderDisplay_0) != null ? (tmp$_5.blendMode = BlendMode.MULTIPLY) : null;
          break;
        case 'Overlay':
          (tmp$_6 = this._renderDisplay_0) != null ? (tmp$_6.blendMode = BlendMode.Companion.OVERLAY) : null;
          break;
        case 'Screen':
          (tmp$_7 = this._renderDisplay_0) != null ? (tmp$_7.blendMode = BlendMode.SCREEN) : null;
          break;
        default:break;
      }
    }
  };
  KorgeDbSlot.prototype._updateColor = function () {
    var tmp$, tmp$_0;
    var alpha = this._colorTransform.alphaMultiplier * this._globalAlpha;
    if (Kotlin.isType(this._renderDisplay_0, Image) || Kotlin.isType(this._renderDisplay_0, Mesh)) {
      var color = (numberToInt(round(this._colorTransform.redMultiplier * 255)) << 16) + (numberToInt(round(this._colorTransform.greenMultiplier * 255)) << 8) + numberToInt(round(this._colorTransform.blueMultiplier * 255)) | 0;
      (tmp$ = this._renderDisplay_0) != null ? (tmp$.tint = RGBA.Companion.invoke_vux9f0$(color, numberToInt(alpha * 255.0))) : null;
    }
     else {
      (tmp$_0 = this._renderDisplay_0) != null ? (tmp$_0.alpha = alpha) : null;
    }
  };
  KorgeDbSlot.prototype._updateFrame = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18;
    var currentTextureData = (tmp$ = this._textureData) == null || Kotlin.isType(tmp$, KorgeDbTextureData) ? tmp$ : throwCCE();
    if (this._displayIndex >= 0 && this._display !== null && currentTextureData !== null) {
      var currentTextureAtlasData = Kotlin.isType(tmp$_0 = currentTextureData.parent, KorgeDbTextureAtlasData) ? tmp$_0 : throwCCE();
      if (((tmp$_1 = this._armature) != null ? tmp$_1.replacedTexture : null) != null) {
        if (((tmp$_2 = this._armature) != null ? tmp$_2._replaceTextureAtlasData : null) === null) {
          currentTextureAtlasData = BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(KorgeDbTextureAtlasData));
          currentTextureAtlasData.copyFrom_igjpxe$(Kotlin.isType(tmp$_3 = currentTextureData.parent, KorgeDbTextureAtlasData) ? tmp$_3 : throwCCE());
          currentTextureAtlasData.renderTexture = (tmp$_5 = (tmp$_4 = this._armature) != null ? tmp$_4.replacedTexture : null) == null || Kotlin.isType(tmp$_5, Bitmap) ? tmp$_5 : null;
          (tmp$_6 = this._armature) != null ? (tmp$_6._replaceTextureAtlasData = currentTextureAtlasData) : null;
        }
         else {
          currentTextureAtlasData = Kotlin.isType(tmp$_8 = (tmp$_7 = this._armature) != null ? tmp$_7._replaceTextureAtlasData : null, KorgeDbTextureAtlasData) ? tmp$_8 : throwCCE();
        }
        currentTextureData = Kotlin.isType(tmp$_9 = currentTextureAtlasData.getTexture_61zpoe$(currentTextureData.name), KorgeDbTextureData) ? tmp$_9 : throwCCE();
      }
      var renderTexture = currentTextureData.renderTexture;
      if (renderTexture !== null) {
        if (this._geometryData !== null) {
          var data = ensureNotNull(ensureNotNull(this._geometryData).data);
          var intArray = ensureNotNull(data.intArray);
          var floatArray = ensureNotNull(data.floatArray);
          var vertexCount = intArray[ensureNotNull(this._geometryData).offset + BinaryOffset$GeometryVertexCount_getInstance().index | 0];
          var triangleCount = intArray[ensureNotNull(this._geometryData).offset + BinaryOffset$GeometryTriangleCount_getInstance().index | 0];
          var vertexOffset = intArray[ensureNotNull(this._geometryData).offset + BinaryOffset$GeometryFloatOffset_getInstance().index | 0];
          if (vertexOffset < 0) {
            vertexOffset = vertexOffset + 65536 | 0;
          }
          var uvOffset = vertexOffset + (vertexCount * 2 | 0) | 0;
          var scale = ensureNotNull(ensureNotNull(this._armature)._armatureData).scale;
          var meshDisplay = Kotlin.isType(tmp$_10 = this._renderDisplay_0, Mesh) ? tmp$_10 : throwCCE();
          var textureAtlasWidth = currentTextureAtlasData.width > 0.0 ? currentTextureAtlasData.width : renderTexture.bmp.width;
          var textureAtlasHeight = currentTextureAtlasData.height > 0.0 ? currentTextureAtlasData.height : renderTexture.bmp.height;
          var region = currentTextureData.region;
          meshDisplay.vertices = sliceFloat32Buffer(new ArrayBuffer_init(((vertexCount * 2 | 0) * 4 | 0) + 15 & -16));
          meshDisplay.uvs = sliceFloat32Buffer(new ArrayBuffer_init(((vertexCount * 2 | 0) * 4 | 0) + 15 & -16));
          meshDisplay.indices = new Uint16Buffer(sliceInt16Buffer(new ArrayBuffer_init(((triangleCount * 3 | 0) * 2 | 0) + 15 & -16)));
          tmp$_11 = vertexCount * 2 | 0;
          for (var i = 0; i < tmp$_11; i++) {
            meshDisplay.vertices[i] = floatArray[vertexOffset + i | 0] * scale;
          }
          tmp$_12 = triangleCount * 3 | 0;
          for (var i_0 = 0; i_0 < tmp$_12; i_0++) {
            meshDisplay.indices.set_vux9f0$(i_0, intArray[ensureNotNull(this._geometryData).offset + BinaryOffset$GeometryVertexIndices_getInstance().index + i_0 | 0]);
          }
          tmp$_13 = vertexCount * 2 | 0;
          for (var i_1 = 0; i_1 < tmp$_13; i_1 += 2) {
            var u = floatArray[uvOffset + i_1 | 0];
            var v = floatArray[uvOffset + i_1 + 1 | 0];
            if (currentTextureData.rotated) {
              meshDisplay.uvs[i_1] = (region.x + (1.0 - v) * region.width) / textureAtlasWidth;
              meshDisplay.uvs[i_1 + 1 | 0] = (region.y + u * region.height) / textureAtlasHeight;
            }
             else {
              meshDisplay.uvs[i_1] = (region.x + u * region.width) / textureAtlasWidth;
              meshDisplay.uvs[i_1 + 1 | 0] = (region.y + v * region.height) / textureAtlasHeight;
            }
          }
          this._textureScale_0 = 1.0;
          meshDisplay.texture = renderTexture;
          meshDisplay.dirty = meshDisplay.dirty + 1 | 0;
          meshDisplay.indexDirty = meshDisplay.indexDirty + 1 | 0;
          meshDisplay.name = this.name;
          var isSkinned = ensureNotNull(this._geometryData).weight !== null;
          var isSurface = !equals((tmp$_15 = (tmp$_14 = this._parent_8be2vx$) != null ? tmp$_14._boneData : null) != null ? tmp$_15.type : null, BoneType$Bone_getInstance());
          if (isSkinned || isSurface) {
            this._identityTransform();
          }
        }
         else {
          this._textureScale_0 = ensureNotNull(currentTextureData.parent).scale * ensureNotNull(ensureNotNull(this._armature)._armatureData).scale;
          var normalDisplay = Kotlin.isType(tmp$_16 = this._renderDisplay_0, Image) ? tmp$_16 : throwCCE();
          normalDisplay.texture = renderTexture;
          normalDisplay.name = this.name;
        }
        this._visibleDirty = true;
        return;
      }
    }
    if (this._geometryData !== null) {
      var meshDisplay_0 = Kotlin.isType(tmp$_17 = this._renderDisplay_0, Mesh) ? tmp$_17 : throwCCE();
      meshDisplay_0.texture = null;
      meshDisplay_0.x = 0.0;
      meshDisplay_0.y = 0.0;
      meshDisplay_0.visible = false;
    }
     else {
      var normalDisplay_0 = Kotlin.isType(tmp$_18 = this._renderDisplay_0, Image) ? tmp$_18 : throwCCE();
      normalDisplay_0.bitmap = bitmap.Bitmaps.transparent;
      normalDisplay_0.x = 0.0;
      normalDisplay_0.y = 0.0;
      normalDisplay_0.visible = false;
    }
  };
  KorgeDbSlot.prototype._updateMesh = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15;
    var scale = ensureNotNull(ensureNotNull(this._armature)._armatureData).scale;
    var deformVertices = (Kotlin.isType(tmp$ = this._displayFrame, DisplayFrame) ? tmp$ : throwCCE()).deformVertices;
    var bones = this._geometryBones;
    var geometryData = Kotlin.isType(tmp$_0 = this._geometryData, GeometryData) ? tmp$_0 : throwCCE();
    var weightData = geometryData.weight;
    var hasDeform = get_length_0(deformVertices) > 0 && geometryData.inheritDeform;
    var meshDisplay = Kotlin.isType(tmp$_1 = this._renderDisplay_0, Mesh) ? tmp$_1 : throwCCE();
    if (weightData !== null) {
      var data = ensureNotNull(geometryData.data);
      var intArray = ensureNotNull(data.intArray);
      var floatArray = ensureNotNull(data.floatArray);
      var vertexCount = intArray[geometryData.offset + BinaryOffset$GeometryVertexCount_getInstance().index | 0];
      var weightFloatOffset = intArray[weightData.offset + BinaryOffset$WeigthFloatOffset_getInstance().index | 0];
      if (weightFloatOffset < 0) {
        weightFloatOffset = weightFloatOffset + 65536 | 0;
      }
      var iD = 0;
      var iB = weightData.offset + BinaryOffset$WeigthBoneIndices_getInstance().index + get_length_1(bones) | 0;
      var iV = weightFloatOffset;
      var iF = 0;
      for (var i = 0; i < vertexCount; i++) {
        if (iD >= meshDisplay.vertices.length)
          break;
        var boneCount = intArray[tmp$_2 = iB, iB = tmp$_2 + 1 | 0, tmp$_2];
        var xG = 0.0;
        var yG = 0.0;
        for (var j = 0; j < boneCount; j++) {
          var boneIndex = intArray[tmp$_3 = iB, iB = tmp$_3 + 1 | 0, tmp$_3];
          tmp$_4 = bones.get_za3lpa$(boneIndex);
          if (tmp$_4 == null) {
            continue;
          }
          var bone = tmp$_4;
          var matrix = bone.globalTransformMatrix;
          var weight = floatArray[tmp$_5 = iV, iV = tmp$_5 + 1 | 0, tmp$_5];
          var xL = floatArray[tmp$_6 = iV, iV = tmp$_6 + 1 | 0, tmp$_6] * scale;
          var yL = floatArray[tmp$_7 = iV, iV = tmp$_7 + 1 | 0, tmp$_7] * scale;
          if (hasDeform) {
            xL = xL + deformVertices.get_za3lpa$((tmp$_8 = iF, iF = tmp$_8 + 1 | 0, tmp$_8));
            yL = yL + deformVertices.get_za3lpa$((tmp$_9 = iF, iF = tmp$_9 + 1 | 0, tmp$_9));
          }
          xG += matrix.transformX_lu1900$(xL, yL) * weight;
          yG += matrix.transformY_lu1900$(xL, yL) * weight;
        }
        meshDisplay.vertices[tmp$_10 = iD, iD = tmp$_10 + 1 | 0, tmp$_10] = xG;
        meshDisplay.vertices[tmp$_11 = iD, iD = tmp$_11 + 1 | 0, tmp$_11] = yG;
      }
    }
     else {
      var isSurface = ((tmp$_13 = (tmp$_12 = this._parent_8be2vx$) != null ? tmp$_12._boneData : null) != null ? tmp$_13.type : null) !== BoneType$Bone_getInstance();
      var data_0 = ensureNotNull(geometryData.data);
      var intArray_0 = ensureNotNull(data_0.intArray);
      var floatArray_0 = ensureNotNull(data_0.floatArray);
      var vertexCount_0 = intArray_0[geometryData.offset + BinaryOffset$GeometryVertexCount_getInstance().index | 0];
      var vertexOffset = intArray_0[geometryData.offset + BinaryOffset$GeometryFloatOffset_getInstance().index | 0];
      if (vertexOffset < 0) {
        vertexOffset = vertexOffset + 65536 | 0;
      }
      tmp$_14 = vertexCount_0 * 2 | 0;
      for (var i_0 = 0; i_0 < tmp$_14; i_0 += 2) {
        if ((i_0 + 1 | 0) >= meshDisplay.vertices.length)
          break;
        var x = floatArray_0[vertexOffset + i_0 + 0 | 0] * scale;
        var y = floatArray_0[vertexOffset + i_0 + 1 | 0] * scale;
        if (hasDeform) {
          x += deformVertices.get_za3lpa$(i_0 + 0 | 0);
          y += deformVertices.get_za3lpa$(i_0 + 1 | 0);
        }
        if (isSurface) {
          var matrix_0 = (Kotlin.isType(tmp$_15 = this._parent_8be2vx$, Surface) ? tmp$_15 : throwCCE())._getGlobalTransformMatrix_lu1900$(x, y);
          meshDisplay.vertices[i_0 + 0 | 0] = matrix_0.transformX_lu1900$(x, y);
          meshDisplay.vertices[i_0 + 1 | 0] = matrix_0.transformY_lu1900$(x, y);
        }
         else {
          meshDisplay.vertices[i_0 + 0 | 0] = x;
          meshDisplay.vertices[i_0 + 1 | 0] = y;
        }
      }
    }
  };
  KorgeDbSlot.prototype._updateTransform = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    this.updateGlobalTransform();
    var transform = this.global;
    if (this._renderDisplay_0 === this._rawDisplay || this._renderDisplay_0 === this._meshDisplay) {
      var x = transform.x - (this.globalTransformMatrix.a * this._pivotX + this.globalTransformMatrix.c * this._pivotY);
      var y = transform.y - (this.globalTransformMatrix.b * this._pivotX + this.globalTransformMatrix.d * this._pivotY);
      var tmp$_7;
      if ((tmp$ = this._renderDisplay_0) != null) {
        tmp$.x = numberToDouble(x);
        tmp$.y = numberToDouble(y);
        tmp$_7 = tmp$;
      }
       else
        tmp$_7 = null;
      var tmp$_8;
      if ((tmp$_0 = tmp$_7) != null) {
        var sx = transform.scaleX * this._textureScale_0;
        var sy = transform.scaleY * this._textureScale_0;
        tmp$_0.scaleX = numberToDouble(sx);
        tmp$_0.scaleY = numberToDouble(sy);
        tmp$_8 = tmp$_0;
      }
       else
        tmp$_8 = null;
      var tmp$_9;
      if ((tmp$_1 = tmp$_8) != null) {
        tmp$_1.rotation = numberToDouble(transform.rotation);
        tmp$_9 = tmp$_1;
      }
       else
        tmp$_9 = null;
      if ((tmp$_2 = tmp$_9) != null) {
        tmp$_2.skewX = numberToDouble(-transform.skew);
        tmp$_2.skewY = numberToDouble(0.0);
      }
    }
     else {
      var tmp$_10;
      if ((tmp$_3 = this._renderDisplay_0) != null) {
        var x_0 = transform.x;
        var y_0 = transform.y;
        tmp$_3.x = numberToDouble(x_0);
        tmp$_3.y = numberToDouble(y_0);
        tmp$_10 = tmp$_3;
      }
       else
        tmp$_10 = null;
      var tmp$_11;
      if ((tmp$_4 = tmp$_10) != null) {
        var sx_0 = transform.scaleX;
        var sy_0 = transform.scaleY;
        tmp$_4.scaleX = numberToDouble(sx_0);
        tmp$_4.scaleY = numberToDouble(sy_0);
        tmp$_11 = tmp$_4;
      }
       else
        tmp$_11 = null;
      var tmp$_12;
      if ((tmp$_5 = tmp$_11) != null) {
        tmp$_5.rotation = numberToDouble(transform.rotation);
        tmp$_12 = tmp$_5;
      }
       else
        tmp$_12 = null;
      if ((tmp$_6 = tmp$_12) != null) {
        tmp$_6.skewX = numberToDouble(-transform.skew);
        tmp$_6.skewY = numberToDouble(0.0);
      }
    }
  };
  KorgeDbSlot.prototype._identityTransform = function () {
    var tmp$;
    this.m_0.setToIdentity();
    (tmp$ = this._renderDisplay_0) != null ? (tmp$.setMatrix_yx07kl$(this.m_0), Unit) : null;
  };
  KorgeDbSlot.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeDbSlot',
    interfaces: [Slot]
  };
  function KorgeDbTextureAtlasData() {
    KorgeDbTextureAtlasData$Companion_getInstance();
    TextureAtlasData.call(this);
    this._renderTexture_0 = null;
  }
  function KorgeDbTextureAtlasData$Companion() {
    KorgeDbTextureAtlasData$Companion_instance = this;
    BaseObject$Companion_getInstance().register_m48uzh$(getKClass(TextureData), KorgeDbTextureAtlasData$KorgeDbTextureAtlasData$Companion_init$lambda);
  }
  function KorgeDbTextureAtlasData$KorgeDbTextureAtlasData$Companion_init$lambda() {
    return new KorgeDbTextureData();
  }
  KorgeDbTextureAtlasData$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KorgeDbTextureAtlasData$Companion_instance = null;
  function KorgeDbTextureAtlasData$Companion_getInstance() {
    if (KorgeDbTextureAtlasData$Companion_instance === null) {
      new KorgeDbTextureAtlasData$Companion();
    }
    return KorgeDbTextureAtlasData$Companion_instance;
  }
  KorgeDbTextureAtlasData.prototype.toString = function () {
    return '[class DragonbonesTextureAtlasData]';
  };
  KorgeDbTextureAtlasData.prototype._onClear = function () {
    TextureAtlasData.prototype._onClear.call(this);
    this._renderTexture_0 = null;
  };
  KorgeDbTextureAtlasData.prototype.createTexture = function () {
    return BaseObject$Companion_getInstance().borrowObject_6h6m5r$(getKClass(TextureData));
  };
  Object.defineProperty(KorgeDbTextureAtlasData.prototype, 'renderTexture', {
    get: function () {
      return this._renderTexture_0;
    },
    set: function (value) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      if (equals(this._renderTexture_0, value)) {
        return;
      }
      this._renderTexture_0 = value;
      if (this._renderTexture_0 !== null) {
        tmp$ = this.textures.keys.iterator();
        while (tmp$.hasNext()) {
          var k = tmp$.next();
          var textureData = Kotlin.isType(tmp$_0 = this.textures.get_11rb$(k), KorgeDbTextureData) ? tmp$_0 : throwCCE();
          var tmp$_3 = ensureNotNull(this._renderTexture_0);
          var tmp$_4 = new Rectangle(textureData.region.x, textureData.region.y, textureData.region.width, textureData.region.height);
          var tmp$_5 = new Rectangle(textureData.region.x, textureData.region.y, textureData.region.width, textureData.region.height);
          var width = textureData.region.width;
          var height = textureData.region.height;
          textureData.renderTexture = BitmapSliceCompat(tmp$_3, tmp$_4, tmp$_5, new Rectangle(numberToDouble(0), numberToDouble(0), numberToDouble(width), numberToDouble(height)), textureData.rotated, k);
        }
      }
       else {
        tmp$_1 = this.textures.keys.iterator();
        while (tmp$_1.hasNext()) {
          var k_0 = tmp$_1.next();
          var textureData_0 = Kotlin.isType(tmp$_2 = this.textures.get_11rb$(k_0), KorgeDbTextureData) ? tmp$_2 : throwCCE();
          textureData_0.renderTexture = null;
        }
      }
    }
  });
  KorgeDbTextureAtlasData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeDbTextureAtlasData',
    interfaces: [TextureAtlasData]
  };
  function KorgeDbTextureData() {
    TextureData.call(this);
    this.renderTexture = null;
  }
  KorgeDbTextureData.prototype.toString = function () {
    return '[class DragonbonesTextureData]';
  };
  KorgeDbTextureData.prototype._onClear = function () {
    TextureData.prototype._onClear.call(this);
    this.renderTexture = null;
  };
  KorgeDbTextureData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KorgeDbTextureData',
    interfaces: [TextureData]
  };
  $$importsForInline$$['korge-dragonbones-js'] = _;
  var package$com = _.com || (_.com = {});
  var package$dragonbones = package$com.dragonbones || (package$com.dragonbones = {});
  var package$animation = package$dragonbones.animation || (package$dragonbones.animation = {});
  package$animation.Animation = Animation;
  package$animation.AnimationState = AnimationState;
  Object.defineProperty(BlendState, 'Companion', {
    get: BlendState$Companion_getInstance
  });
  package$animation.BlendState = BlendState;
  package$animation.TimelineState = TimelineState;
  $$importsForInline$$['korma-js'] = $module$korma_js;
  Object.defineProperty(TweenTimelineState, 'Companion', {
    get: TweenTimelineState$Companion_getInstance
  });
  $$importsForInline$$['kmem-js'] = $module$kmem_js;
  package$animation.TweenTimelineState = TweenTimelineState;
  package$animation.SingleValueTimelineState = SingleValueTimelineState;
  package$animation.DoubleValueTimelineState = DoubleValueTimelineState;
  package$animation.MutilpleValueTimelineState = MutilpleValueTimelineState;
  package$animation.IAnimatable = IAnimatable;
  package$animation.ActionTimelineState = ActionTimelineState;
  package$animation.ZOrderTimelineState = ZOrderTimelineState;
  package$animation.BoneAllTimelineState = BoneAllTimelineState;
  package$animation.BoneTranslateTimelineState = BoneTranslateTimelineState;
  package$animation.BoneRotateTimelineState = BoneRotateTimelineState;
  package$animation.BoneScaleTimelineState = BoneScaleTimelineState;
  package$animation.SurfaceTimelineState = SurfaceTimelineState;
  package$animation.AlphaTimelineState = AlphaTimelineState;
  package$animation.SlotDisplayTimelineState = SlotDisplayTimelineState;
  package$animation.SlotColorTimelineState = SlotColorTimelineState;
  package$animation.SlotZIndexTimelineState = SlotZIndexTimelineState;
  package$animation.DeformTimelineState = DeformTimelineState;
  package$animation.IKConstraintTimelineState = IKConstraintTimelineState;
  package$animation.AnimationProgressTimelineState = AnimationProgressTimelineState;
  package$animation.AnimationWeightTimelineState = AnimationWeightTimelineState;
  package$animation.AnimationParametersTimelineState = AnimationParametersTimelineState;
  package$animation.WorldClock_init_14dthe$ = WorldClock_init;
  package$animation.WorldClock = WorldClock;
  Object.defineProperty(Armature, 'Companion', {
    get: Armature$Companion_getInstance
  });
  var package$armature = package$dragonbones.armature || (package$dragonbones.armature = {});
  package$armature.Armature = Armature;
  package$armature.Bone = Bone;
  package$armature.Constraint = Constraint;
  package$armature.IKConstraint = IKConstraint;
  package$armature.PathConstraint = PathConstraint;
  package$armature.IArmatureProxy = IArmatureProxy;
  package$armature.DisplayFrame = DisplayFrame;
  Object.defineProperty(Slot, 'Companion', {
    get: Slot$Companion_getInstance
  });
  package$armature.Slot = Slot;
  Object.defineProperty(Surface, 'Companion', {
    get: Surface$Companion_getInstance
  });
  package$armature.Surface = Surface;
  Object.defineProperty(TransformObject, 'Companion', {
    get: TransformObject$Companion_getInstance
  });
  package$armature.TransformObject = TransformObject;
  Object.defineProperty(BaseObject, 'Companion', {
    get: BaseObject$Companion_getInstance
  });
  var package$core = package$dragonbones.core || (package$dragonbones.core = {});
  package$core.BaseObject = BaseObject;
  package$core.IntEnum = IntEnum;
  package$core.IntEnumCompanion = IntEnumCompanion;
  Object.defineProperty(BinaryOffset, 'WeigthBoneCount', {
    get: BinaryOffset$WeigthBoneCount_getInstance
  });
  Object.defineProperty(BinaryOffset, 'WeigthFloatOffset', {
    get: BinaryOffset$WeigthFloatOffset_getInstance
  });
  Object.defineProperty(BinaryOffset, 'WeigthBoneIndices', {
    get: BinaryOffset$WeigthBoneIndices_getInstance
  });
  Object.defineProperty(BinaryOffset, 'GeometryVertexCount', {
    get: BinaryOffset$GeometryVertexCount_getInstance
  });
  Object.defineProperty(BinaryOffset, 'GeometryTriangleCount', {
    get: BinaryOffset$GeometryTriangleCount_getInstance
  });
  Object.defineProperty(BinaryOffset, 'GeometryFloatOffset', {
    get: BinaryOffset$GeometryFloatOffset_getInstance
  });
  Object.defineProperty(BinaryOffset, 'GeometryWeightOffset', {
    get: BinaryOffset$GeometryWeightOffset_getInstance
  });
  Object.defineProperty(BinaryOffset, 'GeometryVertexIndices', {
    get: BinaryOffset$GeometryVertexIndices_getInstance
  });
  Object.defineProperty(BinaryOffset, 'TimelineScale', {
    get: BinaryOffset$TimelineScale_getInstance
  });
  Object.defineProperty(BinaryOffset, 'TimelineOffset', {
    get: BinaryOffset$TimelineOffset_getInstance
  });
  Object.defineProperty(BinaryOffset, 'TimelineKeyFrameCount', {
    get: BinaryOffset$TimelineKeyFrameCount_getInstance
  });
  Object.defineProperty(BinaryOffset, 'TimelineFrameValueCount', {
    get: BinaryOffset$TimelineFrameValueCount_getInstance
  });
  Object.defineProperty(BinaryOffset, 'TimelineFrameValueOffset', {
    get: BinaryOffset$TimelineFrameValueOffset_getInstance
  });
  Object.defineProperty(BinaryOffset, 'TimelineFrameOffset', {
    get: BinaryOffset$TimelineFrameOffset_getInstance
  });
  Object.defineProperty(BinaryOffset, 'FramePosition', {
    get: BinaryOffset$FramePosition_getInstance
  });
  Object.defineProperty(BinaryOffset, 'FrameTweenType', {
    get: BinaryOffset$FrameTweenType_getInstance
  });
  Object.defineProperty(BinaryOffset, 'FrameTweenEasingOrCurveSampleCount', {
    get: BinaryOffset$FrameTweenEasingOrCurveSampleCount_getInstance
  });
  Object.defineProperty(BinaryOffset, 'FrameCurveSamples', {
    get: BinaryOffset$FrameCurveSamples_getInstance
  });
  Object.defineProperty(BinaryOffset, 'DeformVertexOffset', {
    get: BinaryOffset$DeformVertexOffset_getInstance
  });
  Object.defineProperty(BinaryOffset, 'DeformCount', {
    get: BinaryOffset$DeformCount_getInstance
  });
  Object.defineProperty(BinaryOffset, 'DeformValueCount', {
    get: BinaryOffset$DeformValueCount_getInstance
  });
  Object.defineProperty(BinaryOffset, 'DeformValueOffset', {
    get: BinaryOffset$DeformValueOffset_getInstance
  });
  Object.defineProperty(BinaryOffset, 'DeformFloatOffset', {
    get: BinaryOffset$DeformFloatOffset_getInstance
  });
  package$core.BinaryOffset = BinaryOffset;
  Object.defineProperty(ArmatureType, 'Armature', {
    get: ArmatureType$Armature_getInstance
  });
  Object.defineProperty(ArmatureType, 'MovieClip', {
    get: ArmatureType$MovieClip_getInstance
  });
  Object.defineProperty(ArmatureType, 'Stage', {
    get: ArmatureType$Stage_getInstance
  });
  Object.defineProperty(ArmatureType, 'Companion', {
    get: ArmatureType$Companion_getInstance
  });
  package$core.ArmatureType = ArmatureType;
  Object.defineProperty(BoneType, 'Bone', {
    get: BoneType$Bone_getInstance
  });
  Object.defineProperty(BoneType, 'Surface', {
    get: BoneType$Surface_getInstance
  });
  Object.defineProperty(BoneType, 'Companion', {
    get: BoneType$Companion_getInstance
  });
  package$core.BoneType = BoneType;
  Object.defineProperty(DisplayType, 'None', {
    get: DisplayType$None_getInstance
  });
  Object.defineProperty(DisplayType, 'Image', {
    get: DisplayType$Image_getInstance
  });
  Object.defineProperty(DisplayType, 'Armature', {
    get: DisplayType$Armature_getInstance
  });
  Object.defineProperty(DisplayType, 'Mesh', {
    get: DisplayType$Mesh_getInstance
  });
  Object.defineProperty(DisplayType, 'BoundingBox', {
    get: DisplayType$BoundingBox_getInstance
  });
  Object.defineProperty(DisplayType, 'Path', {
    get: DisplayType$Path_getInstance
  });
  Object.defineProperty(DisplayType, 'Companion', {
    get: DisplayType$Companion_getInstance
  });
  package$core.DisplayType = DisplayType;
  Object.defineProperty(BoundingBoxType, 'None', {
    get: BoundingBoxType$None_getInstance
  });
  Object.defineProperty(BoundingBoxType, 'Rectangle', {
    get: BoundingBoxType$Rectangle_getInstance
  });
  Object.defineProperty(BoundingBoxType, 'Ellipse', {
    get: BoundingBoxType$Ellipse_getInstance
  });
  Object.defineProperty(BoundingBoxType, 'Polygon', {
    get: BoundingBoxType$Polygon_getInstance
  });
  Object.defineProperty(BoundingBoxType, 'Companion', {
    get: BoundingBoxType$Companion_getInstance
  });
  package$core.BoundingBoxType = BoundingBoxType;
  Object.defineProperty(ActionType, 'Play', {
    get: ActionType$Play_getInstance
  });
  Object.defineProperty(ActionType, 'Frame', {
    get: ActionType$Frame_getInstance
  });
  Object.defineProperty(ActionType, 'Sound', {
    get: ActionType$Sound_getInstance
  });
  Object.defineProperty(ActionType, 'Companion', {
    get: ActionType$Companion_getInstance
  });
  package$core.ActionType = ActionType;
  Object.defineProperty(BlendMode_0, 'Normal', {
    get: BlendMode$Normal_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Add', {
    get: BlendMode$Add_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Alpha', {
    get: BlendMode$Alpha_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Darken', {
    get: BlendMode$Darken_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Difference', {
    get: BlendMode$Difference_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Erase', {
    get: BlendMode$Erase_getInstance
  });
  Object.defineProperty(BlendMode_0, 'HardLight', {
    get: BlendMode$HardLight_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Invert', {
    get: BlendMode$Invert_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Layer', {
    get: BlendMode$Layer_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Lighten', {
    get: BlendMode$Lighten_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Multiply', {
    get: BlendMode$Multiply_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Overlay', {
    get: BlendMode$Overlay_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Screen', {
    get: BlendMode$Screen_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Subtract', {
    get: BlendMode$Subtract_getInstance
  });
  Object.defineProperty(BlendMode_0, 'Companion', {
    get: BlendMode$Companion_getInstance
  });
  package$core.BlendMode = BlendMode_0;
  Object.defineProperty(TweenType, 'None', {
    get: TweenType$None_getInstance
  });
  Object.defineProperty(TweenType, 'Line', {
    get: TweenType$Line_getInstance
  });
  Object.defineProperty(TweenType, 'Curve', {
    get: TweenType$Curve_getInstance
  });
  Object.defineProperty(TweenType, 'QuadIn', {
    get: TweenType$QuadIn_getInstance
  });
  Object.defineProperty(TweenType, 'QuadOut', {
    get: TweenType$QuadOut_getInstance
  });
  Object.defineProperty(TweenType, 'QuadInOut', {
    get: TweenType$QuadInOut_getInstance
  });
  Object.defineProperty(TweenType, 'Companion', {
    get: TweenType$Companion_getInstance
  });
  package$core.TweenType = TweenType;
  Object.defineProperty(TimelineType, 'Action', {
    get: TimelineType$Action_getInstance
  });
  Object.defineProperty(TimelineType, 'ZOrder', {
    get: TimelineType$ZOrder_getInstance
  });
  Object.defineProperty(TimelineType, 'BoneAll', {
    get: TimelineType$BoneAll_getInstance
  });
  Object.defineProperty(TimelineType, 'BoneTranslate', {
    get: TimelineType$BoneTranslate_getInstance
  });
  Object.defineProperty(TimelineType, 'BoneRotate', {
    get: TimelineType$BoneRotate_getInstance
  });
  Object.defineProperty(TimelineType, 'BoneScale', {
    get: TimelineType$BoneScale_getInstance
  });
  Object.defineProperty(TimelineType, 'Surface', {
    get: TimelineType$Surface_getInstance
  });
  Object.defineProperty(TimelineType, 'BoneAlpha', {
    get: TimelineType$BoneAlpha_getInstance
  });
  Object.defineProperty(TimelineType, 'SlotDisplay', {
    get: TimelineType$SlotDisplay_getInstance
  });
  Object.defineProperty(TimelineType, 'SlotColor', {
    get: TimelineType$SlotColor_getInstance
  });
  Object.defineProperty(TimelineType, 'SlotDeform', {
    get: TimelineType$SlotDeform_getInstance
  });
  Object.defineProperty(TimelineType, 'SlotZIndex', {
    get: TimelineType$SlotZIndex_getInstance
  });
  Object.defineProperty(TimelineType, 'SlotAlpha', {
    get: TimelineType$SlotAlpha_getInstance
  });
  Object.defineProperty(TimelineType, 'IKConstraint', {
    get: TimelineType$IKConstraint_getInstance
  });
  Object.defineProperty(TimelineType, 'AnimationProgress', {
    get: TimelineType$AnimationProgress_getInstance
  });
  Object.defineProperty(TimelineType, 'AnimationWeight', {
    get: TimelineType$AnimationWeight_getInstance
  });
  Object.defineProperty(TimelineType, 'AnimationParameter', {
    get: TimelineType$AnimationParameter_getInstance
  });
  Object.defineProperty(TimelineType, 'Companion', {
    get: TimelineType$Companion_getInstance
  });
  package$core.TimelineType = TimelineType;
  Object.defineProperty(OffsetMode, 'None', {
    get: OffsetMode$None_getInstance
  });
  Object.defineProperty(OffsetMode, 'Additive', {
    get: OffsetMode$Additive_getInstance
  });
  Object.defineProperty(OffsetMode, 'Override', {
    get: OffsetMode$Override_getInstance
  });
  package$core.OffsetMode = OffsetMode;
  Object.defineProperty(AnimationFadeOutMode, 'SameLayer', {
    get: AnimationFadeOutMode$SameLayer_getInstance
  });
  Object.defineProperty(AnimationFadeOutMode, 'SameGroup', {
    get: AnimationFadeOutMode$SameGroup_getInstance
  });
  Object.defineProperty(AnimationFadeOutMode, 'SameLayerAndGroup', {
    get: AnimationFadeOutMode$SameLayerAndGroup_getInstance
  });
  Object.defineProperty(AnimationFadeOutMode, 'All', {
    get: AnimationFadeOutMode$All_getInstance
  });
  Object.defineProperty(AnimationFadeOutMode, 'Single', {
    get: AnimationFadeOutMode$Single_getInstance
  });
  Object.defineProperty(AnimationFadeOutMode, 'Companion', {
    get: AnimationFadeOutMode$Companion_getInstance
  });
  package$core.AnimationFadeOutMode = AnimationFadeOutMode;
  Object.defineProperty(AnimationBlendType, 'None', {
    get: AnimationBlendType$None_getInstance
  });
  Object.defineProperty(AnimationBlendType, 'E1D', {
    get: AnimationBlendType$E1D_getInstance
  });
  package$core.AnimationBlendType = AnimationBlendType;
  Object.defineProperty(AnimationBlendMode, 'Additive', {
    get: AnimationBlendMode$Additive_getInstance
  });
  Object.defineProperty(AnimationBlendMode, 'Override', {
    get: AnimationBlendMode$Override_getInstance
  });
  package$core.AnimationBlendMode = AnimationBlendMode;
  Object.defineProperty(ConstraintType, 'IK', {
    get: ConstraintType$IK_getInstance
  });
  Object.defineProperty(ConstraintType, 'Path', {
    get: ConstraintType$Path_getInstance
  });
  package$core.ConstraintType = ConstraintType;
  Object.defineProperty(PositionMode, 'Fixed', {
    get: PositionMode$Fixed_getInstance
  });
  Object.defineProperty(PositionMode, 'Percent', {
    get: PositionMode$Percent_getInstance
  });
  package$core.PositionMode = PositionMode;
  Object.defineProperty(SpacingMode, 'Length', {
    get: SpacingMode$Length_getInstance
  });
  Object.defineProperty(SpacingMode, 'Fixed', {
    get: SpacingMode$Fixed_getInstance
  });
  Object.defineProperty(SpacingMode, 'Percent', {
    get: SpacingMode$Percent_getInstance
  });
  package$core.SpacingMode = SpacingMode;
  Object.defineProperty(RotateMode, 'Tangent', {
    get: RotateMode$Tangent_getInstance
  });
  Object.defineProperty(RotateMode, 'Chain', {
    get: RotateMode$Chain_getInstance
  });
  Object.defineProperty(RotateMode, 'ChainScale', {
    get: RotateMode$ChainScale_getInstance
  });
  package$core.RotateMode = RotateMode;
  Object.defineProperty(DragonBones, 'Companion', {
    get: DragonBones$Companion_getInstance
  });
  package$core.DragonBones = DragonBones;
  Object.defineProperty(EventObject, 'Companion', {
    get: EventObject$Companion_getInstance
  });
  var package$event = package$dragonbones.event || (package$dragonbones.event = {});
  package$event.EventObject = EventObject;
  package$event.IEventDispatcher = IEventDispatcher;
  Object.defineProperty(BaseFactory, 'Companion', {
    get: BaseFactory$Companion_getInstance
  });
  var package$factory = package$dragonbones.factory || (package$dragonbones.factory = {});
  package$factory.BaseFactory_init_8fpgze$ = BaseFactory_init;
  package$factory.BaseFactory = BaseFactory;
  package$factory.BuildArmaturePackage = BuildArmaturePackage;
  var package$geom = package$dragonbones.geom || (package$dragonbones.geom = {});
  package$geom.ColorTransform = ColorTransform;
  package$geom.Matrix_init_15yvbs$ = Matrix_init;
  package$geom.Matrix = Matrix;
  package$geom.Point_init_lu1900$ = Point_init;
  package$geom.Point = Point;
  package$geom.Rectangle = Rectangle_0;
  Object.defineProperty(Transform, 'Companion', {
    get: Transform$Companion_getInstance
  });
  package$geom.Transform = Transform;
  package$geom.XY = XY;
  var package$model = package$dragonbones.model || (package$dragonbones.model = {});
  package$model.AnimationConfig = AnimationConfig;
  package$model.AnimationData = AnimationData;
  package$model.TimelineData = TimelineData;
  package$model.AnimationTimelineData = AnimationTimelineData;
  package$model.ArmatureData = ArmatureData;
  package$model.BoneData = BoneData;
  package$model.SurfaceData = SurfaceData;
  Object.defineProperty(SlotData, 'Companion', {
    get: SlotData$Companion_getInstance
  });
  package$model.SlotData = SlotData;
  package$model.BoundingBoxData = BoundingBoxData;
  Object.defineProperty(package$model, 'OutCode', {
    get: OutCode_getInstance
  });
  Object.defineProperty(RectangleBoundingBoxData, 'Companion', {
    get: RectangleBoundingBoxData$Companion_getInstance
  });
  package$model.RectangleBoundingBoxData = RectangleBoundingBoxData;
  Object.defineProperty(EllipseBoundingBoxData, 'Companion', {
    get: EllipseBoundingBoxData$Companion_getInstance
  });
  package$model.EllipseBoundingBoxData = EllipseBoundingBoxData;
  package$model.PolygonBoundingBoxData = PolygonBoundingBoxData;
  package$model.CanvasData = CanvasData;
  package$model.ConstraintData = ConstraintData;
  package$model.IKConstraintData = IKConstraintData;
  package$model.PathConstraintData = PathConstraintData;
  package$model.GeometryData = GeometryData;
  package$model.DisplayData = DisplayData;
  package$model.ImageDisplayData = ImageDisplayData;
  package$model.ArmatureDisplayData = ArmatureDisplayData;
  package$model.MeshDisplayData = MeshDisplayData;
  package$model.BoundingBoxDisplayData = BoundingBoxDisplayData;
  package$model.PathDisplayData = PathDisplayData;
  package$model.WeightData = WeightData;
  package$model.DragonBonesData = DragonBonesData;
  package$model.SkinData = SkinData;
  package$model.TextureAtlasData = TextureAtlasData;
  Object.defineProperty(TextureData, 'Companion', {
    get: TextureData$Companion_getInstance
  });
  package$model.TextureData = TextureData;
  package$model.UserData = UserData;
  package$model.ActionData = ActionData;
  Object.defineProperty(BinaryDataParser, 'Companion', {
    get: BinaryDataParser$Companion_getInstance
  });
  var package$parser = package$dragonbones.parser || (package$dragonbones.parser = {});
  package$parser.BinaryDataParser = BinaryDataParser;
  Object.defineProperty(DataParser, 'Companion', {
    get: DataParser$Companion_getInstance
  });
  package$parser.DataParser = DataParser;
  Object.defineProperty(FrameValueType, 'STEP', {
    get: FrameValueType$STEP_getInstance
  });
  Object.defineProperty(FrameValueType, 'INT', {
    get: FrameValueType$INT_getInstance
  });
  Object.defineProperty(FrameValueType, 'FLOAT', {
    get: FrameValueType$FLOAT_getInstance
  });
  package$parser.FrameValueType = FrameValueType;
  Object.defineProperty(ObjectDataParser, 'Companion', {
    get: ObjectDataParser$Companion_getInstance
  });
  package$parser.ObjectDataParser = ObjectDataParser;
  package$parser.ActionFrame = ActionFrame;
  var package$util = package$dragonbones.util || (package$dragonbones.util = {});
  package$util.get_lengthSet_tlvhdp$ = get_lengthSet;
  package$util.set_lengthSet_s1glwf$ = set_lengthSet;
  package$util.get_lengthSet_i5tfnx$ = get_lengthSet_0;
  package$util.set_lengthSet_nux0q3$ = set_lengthSet_0;
  package$util.get_length_tlvhdp$ = get_length;
  package$util.set_length_s1glwf$ = set_length;
  package$util.get_length_i5tfnx$ = get_length_0;
  package$util.set_length_nux0q3$ = set_length_0;
  package$util.get_lengthSet_m7d0ac$ = get_lengthSet_1;
  package$util.set_lengthSet_7k4s42$ = set_lengthSet_1;
  package$util.get_length_m7d0ac$ = get_length_1;
  package$util.set_length_7k4s42$ = set_length_1;
  package$util.push_fx3o58$ = push;
  package$util.unshift_fx3o58$ = unshift;
  package$util.push_q2gx63$ = push_0;
  package$util.push_s1glwf$ = push_1;
  package$util.splice2_b7gcku$ = splice2;
  Object.defineProperty(package$util, 'console', {
    get: console_getInstance
  });
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korge = package$soywiz.korge || (package$soywiz.korge = {});
  var package$dragonbones_0 = package$korge.dragonbones || (package$korge.dragonbones = {});
  package$dragonbones_0.KorgeDbArmatureDisplay = KorgeDbArmatureDisplay;
  Object.defineProperty(KorgeDbFactory, 'Companion', {
    get: KorgeDbFactory$Companion_getInstance
  });
  package$dragonbones_0.KorgeDbFactory = KorgeDbFactory;
  Object.defineProperty(KorgeDbSlot, 'Companion', {
    get: KorgeDbSlot$Companion_getInstance
  });
  $$importsForInline$$['korge-js'] = $module$korge_js;
  package$dragonbones_0.KorgeDbSlot = KorgeDbSlot;
  Object.defineProperty(KorgeDbTextureAtlasData, 'Companion', {
    get: KorgeDbTextureAtlasData$Companion_getInstance
  });
  package$dragonbones_0.KorgeDbTextureAtlasData = KorgeDbTextureAtlasData;
  package$dragonbones_0.KorgeDbTextureData = KorgeDbTextureData;
  Kotlin.defineModule('korge-dragonbones-js', _);
  return _;
}));

//# sourceMappingURL=korge-dragonbones-js.js.map
