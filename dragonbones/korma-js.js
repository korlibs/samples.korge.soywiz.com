(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kds-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kds-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korma-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korma-js'.");
    }
    if (typeof this['kds-js'] === 'undefined') {
      throw new Error("Error loading module 'korma-js'. Its dependency 'kds-js' was not found. Please, check whether 'kds-js' is loaded prior to 'korma-js'.");
    }
    root['korma-js'] = factory(typeof this['korma-js'] === 'undefined' ? {} : this['korma-js'], kotlin, this['kds-js']);
  }
}(this, function (_, Kotlin, $module$kds_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Unit = Kotlin.kotlin.Unit;
  var math = Kotlin.kotlin.math;
  var toList = Kotlin.kotlin.collections.toList_rjqryz$;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var hashCode = Kotlin.hashCode;
  var IndexOutOfBoundsException = Kotlin.kotlin.IndexOutOfBoundsException;
  var numberToInt = Kotlin.numberToInt;
  var PriorityQueue_init = $module$kds_js.com.soywiz.kds.PriorityQueue_init_km2rfd$;
  var equals = Kotlin.equals;
  var reverse = Kotlin.kotlin.collections.reverse_vvxzk3$;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var min = Kotlin.kotlin.collections.min_l63kqw$;
  var max = Kotlin.kotlin.collections.max_l63kqw$;
  var IntArrayList_init = $module$kds_js.com.soywiz.kds.IntArrayList_init_38vc8i$;
  var DoubleArrayList_init = $module$kds_js.com.soywiz.kds.DoubleArrayList_init_avch8c$;
  var getCallableRef = Kotlin.getCallableRef;
  var IntArrayList = $module$kds_js.com.soywiz.kds.IntArrayList;
  var DoubleArrayList = $module$kds_js.com.soywiz.kds.DoubleArrayList;
  var min_0 = Kotlin.kotlin.collections.min_bvy38s$;
  var max_0 = Kotlin.kotlin.collections.max_bvy38s$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var toList_0 = Kotlin.kotlin.collections.toList_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var sortedByDescending2 = $module$kds_js.com.soywiz.kds.sortedByDescending2_nd8ern$;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var L1073741823 = Kotlin.Long.fromInt(1073741823);
  var L4611686018427387903 = new Kotlin.Long(-1, 1073741823);
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Exception = Kotlin.kotlin.Exception;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var toString = Kotlin.toString;
  var MutableList = Kotlin.kotlin.collections.MutableList;
  var RandomAccess = Kotlin.kotlin.collections.RandomAccess;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var addAll_0 = Kotlin.kotlin.collections.addAll_ipc267$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var first = Kotlin.kotlin.collections.first_2p1efm$;
  var Error_init = Kotlin.kotlin.Error_init_pdl1vj$;
  var Throwable = Error;
  var toList_1 = Kotlin.kotlin.collections.toList_us0mfu$;
  var distinct = Kotlin.kotlin.collections.distinct_7wnvza$;
  var Error_0 = Kotlin.kotlin.Error;
  var throwUPAE = Kotlin.throwUPAE;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  var throwCCE = Kotlin.throwCCE;
  var Any = Object;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var log = Kotlin.kotlin.math.log_lu1900$;
  var abs_0 = Kotlin.kotlin.math.abs_s8cxhz$;
  var isNaN_0 = Kotlin.kotlin.isNaN_81szk$;
  var isInfinite = Kotlin.kotlin.isInfinite_81szk$;
  var Random = Kotlin.kotlin.random.Random;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var get_indices = Kotlin.kotlin.collections.get_indices_gzk92b$;
  var sum = Kotlin.kotlin.collections.sum_plj8ka$;
  var first_0 = Kotlin.kotlin.collections.first_7wnvza$;
  Matrix2d$Type.prototype = Object.create(Enum.prototype);
  Matrix2d$Type.prototype.constructor = Matrix2d$Type;
  IVector2.prototype = Object.create(Vector2$Base.prototype);
  IVector2.prototype.constructor = IVector2;
  MVector2.prototype = Object.create(Vector2$Base.prototype);
  MVector2.prototype.constructor = MVector2;
  IVector3.prototype = Object.create(Vector3$Base.prototype);
  IVector3.prototype.constructor = IVector3;
  MVector3.prototype = Object.create(Vector3$Base.prototype);
  MVector3.prototype.constructor = MVector3;
  Orientation.prototype = Object.create(Enum.prototype);
  Orientation.prototype.constructor = Orientation;
  VectorPath$Winding.prototype = Object.create(Enum.prototype);
  VectorPath$Winding.prototype.constructor = VectorPath$Winding;
  Clipper$ClipType.prototype = Object.create(Enum.prototype);
  Clipper$ClipType.prototype.constructor = Clipper$ClipType;
  Clipper$Direction.prototype = Object.create(Enum.prototype);
  Clipper$Direction.prototype.constructor = Clipper$Direction;
  Clipper$EndType.prototype = Object.create(Enum.prototype);
  Clipper$EndType.prototype.constructor = Clipper$EndType;
  Clipper$JoinType.prototype = Object.create(Enum.prototype);
  Clipper$JoinType.prototype.constructor = Clipper$JoinType;
  Clipper$PolyFillType.prototype = Object.create(Enum.prototype);
  Clipper$PolyFillType.prototype.constructor = Clipper$PolyFillType;
  Clipper$PolyType.prototype = Object.create(Enum.prototype);
  Clipper$PolyType.prototype.constructor = Clipper$PolyType;
  DefaultClipper.prototype = Object.create(ClipperBase.prototype);
  DefaultClipper.prototype.constructor = DefaultClipper;
  Edge$Side.prototype = Object.create(Enum.prototype);
  Edge$Side.prototype.constructor = Edge$Side;
  PolyNode$NodeType.prototype = Object.create(Enum.prototype);
  PolyNode$NodeType.prototype.constructor = PolyNode$NodeType;
  PolyTree.prototype = Object.create(PolyNode.prototype);
  PolyTree.prototype.constructor = PolyTree;
  Shape2d$Empty.prototype = Object.create(Shape2d.prototype);
  Shape2d$Empty.prototype.constructor = Shape2d$Empty;
  Shape2d$Line.prototype = Object.create(Shape2d.prototype);
  Shape2d$Line.prototype.constructor = Shape2d$Line;
  Shape2d$Circle.prototype = Object.create(Shape2d.prototype);
  Shape2d$Circle.prototype.constructor = Shape2d$Circle;
  Shape2d$Rectangle.prototype = Object.create(Shape2d.prototype);
  Shape2d$Rectangle.prototype.constructor = Shape2d$Rectangle;
  Shape2d$Polygon.prototype = Object.create(Shape2d.prototype);
  Shape2d$Polygon.prototype.constructor = Shape2d$Polygon;
  Shape2d$Poyline.prototype = Object.create(Shape2d.prototype);
  Shape2d$Poyline.prototype.constructor = Shape2d$Poyline;
  Shape2d$Complex.prototype = Object.create(Shape2d.prototype);
  Shape2d$Complex.prototype.constructor = Shape2d$Complex;
  PathFindException.prototype = Object.create(Error_0.prototype);
  PathFindException.prototype.constructor = PathFindException;
  var get_0 = defineInlineFunction('korma-js.com.soywiz.korma.get_320v0r$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver, p) {
      return $receiver.get_vux9f0$(numberToInt(p.x), numberToInt(p.y));
    };
  }));
  var set = defineInlineFunction('korma-js.com.soywiz.korma.set_wfoafl$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver, p, value) {
      $receiver.set_vq7693$(numberToInt(p.x), numberToInt(p.y), value);
    };
  }));
  var tryGet = defineInlineFunction('korma-js.com.soywiz.korma.tryGet_320v0r$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver, p) {
      return $receiver.tryGet_vux9f0$(numberToInt(p.x), numberToInt(p.y));
    };
  }));
  var trySet = defineInlineFunction('korma-js.com.soywiz.korma.trySet_wfoafl$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver, p, value) {
      $receiver.trySet_vq7693$(numberToInt(p.x), numberToInt(p.y), value);
    };
  }));
  var get_1 = defineInlineFunction('korma-js.com.soywiz.korma.get_5s9zym$', function ($receiver, p) {
    return $receiver.get_vux9f0$(p.x, p.y);
  });
  var set_0 = defineInlineFunction('korma-js.com.soywiz.korma.set_obj0mw$', function ($receiver, p, value) {
    $receiver.set_vq7693$(p.x, p.y, value);
  });
  var tryGet_0 = defineInlineFunction('korma-js.com.soywiz.korma.tryGet_5s9zym$', function ($receiver, p) {
    return $receiver.tryGet_vux9f0$(p.x, p.y);
  });
  var trySet_0 = defineInlineFunction('korma-js.com.soywiz.korma.trySet_obj0mw$', function ($receiver, p, value) {
    $receiver.trySet_vq7693$(p.x, p.y, value);
  });
  function KormaStr() {
    KormaStr_instance = this;
  }
  KormaStr.prototype.get_niceStr_81szk$ = function ($receiver) {
    return Kotlin.Long.fromNumber($receiver).toNumber() === $receiver ? Kotlin.Long.fromNumber($receiver).toString() : $receiver.toString();
  };
  KormaStr.prototype.get_niceStr_yrwdxr$ = function ($receiver) {
    return Kotlin.Long.fromNumber($receiver).toNumber() === $receiver ? Kotlin.Long.fromNumber($receiver).toString() : $receiver.toString();
  };
  KormaStr.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KormaStr',
    interfaces: []
  };
  var KormaStr_instance = null;
  function KormaStr_getInstance() {
    if (KormaStr_instance === null) {
      new KormaStr();
    }
    return KormaStr_instance;
  }
  var KormaStr_0 = defineInlineFunction('korma-js.com.soywiz.korma.KormaStr_q0xw7f$', wrapFunction(function () {
    var korma = _.com.soywiz.korma;
    return function (callback) {
      return callback(korma.KormaStr);
    };
  }));
  function IMatrix2d() {
  }
  IMatrix2d.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IMatrix2d',
    interfaces: []
  };
  var IMatrix2d_0 = defineInlineFunction('korma-js.com.soywiz.korma.IMatrix2d_9wz194$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Matrix2d$Matrix2d$Immutable_init = _.com.soywiz.korma.Matrix2d.Immutable;
    return function (a, b, c, d, tx, ty) {
      return new Matrix2d$Matrix2d$Immutable_init(numberToDouble(a), numberToDouble(b), numberToDouble(c), numberToDouble(d), numberToDouble(tx), numberToDouble(ty));
    };
  }));
  function Matrix2d(a, b, c, d, tx, ty) {
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
    this.a_unncc2$_0 = a;
    this.b_unnccx$_0 = b;
    this.c_unncds$_0 = c;
    this.d_unncen$_0 = d;
    this.tx_qyncbh$_0 = tx;
    this.ty_qynccc$_0 = ty;
  }
  Object.defineProperty(Matrix2d.prototype, 'a', {
    get: function () {
      return this.a_unncc2$_0;
    },
    set: function (a) {
      this.a_unncc2$_0 = a;
    }
  });
  Object.defineProperty(Matrix2d.prototype, 'b', {
    get: function () {
      return this.b_unnccx$_0;
    },
    set: function (b) {
      this.b_unnccx$_0 = b;
    }
  });
  Object.defineProperty(Matrix2d.prototype, 'c', {
    get: function () {
      return this.c_unncds$_0;
    },
    set: function (c) {
      this.c_unncds$_0 = c;
    }
  });
  Object.defineProperty(Matrix2d.prototype, 'd', {
    get: function () {
      return this.d_unncen$_0;
    },
    set: function (d) {
      this.d_unncen$_0 = d;
    }
  });
  Object.defineProperty(Matrix2d.prototype, 'tx', {
    get: function () {
      return this.tx_qyncbh$_0;
    },
    set: function (tx) {
      this.tx_qyncbh$_0 = tx;
    }
  });
  Object.defineProperty(Matrix2d.prototype, 'ty', {
    get: function () {
      return this.ty_qynccc$_0;
    },
    set: function (ty) {
      this.ty_qynccc$_0 = ty;
    }
  });
  function Matrix2d$Type(name, ordinal, id) {
    Enum.call(this);
    this.id = id;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Matrix2d$Type_initFields() {
    Matrix2d$Type_initFields = function () {
    };
    Matrix2d$Type$IDENTITY_instance = new Matrix2d$Type('IDENTITY', 0, 1);
    Matrix2d$Type$TRANSLATE_instance = new Matrix2d$Type('TRANSLATE', 1, 2);
    Matrix2d$Type$SCALE_instance = new Matrix2d$Type('SCALE', 2, 3);
    Matrix2d$Type$SCALE_TRANSLATE_instance = new Matrix2d$Type('SCALE_TRANSLATE', 3, 4);
    Matrix2d$Type$COMPLEX_instance = new Matrix2d$Type('COMPLEX', 4, 5);
  }
  var Matrix2d$Type$IDENTITY_instance;
  function Matrix2d$Type$IDENTITY_getInstance() {
    Matrix2d$Type_initFields();
    return Matrix2d$Type$IDENTITY_instance;
  }
  var Matrix2d$Type$TRANSLATE_instance;
  function Matrix2d$Type$TRANSLATE_getInstance() {
    Matrix2d$Type_initFields();
    return Matrix2d$Type$TRANSLATE_instance;
  }
  var Matrix2d$Type$SCALE_instance;
  function Matrix2d$Type$SCALE_getInstance() {
    Matrix2d$Type_initFields();
    return Matrix2d$Type$SCALE_instance;
  }
  var Matrix2d$Type$SCALE_TRANSLATE_instance;
  function Matrix2d$Type$SCALE_TRANSLATE_getInstance() {
    Matrix2d$Type_initFields();
    return Matrix2d$Type$SCALE_TRANSLATE_instance;
  }
  var Matrix2d$Type$COMPLEX_instance;
  function Matrix2d$Type$COMPLEX_getInstance() {
    Matrix2d$Type_initFields();
    return Matrix2d$Type$COMPLEX_instance;
  }
  Matrix2d$Type.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Type',
    interfaces: [Enum]
  };
  function Matrix2d$Type$values() {
    return [Matrix2d$Type$IDENTITY_getInstance(), Matrix2d$Type$TRANSLATE_getInstance(), Matrix2d$Type$SCALE_getInstance(), Matrix2d$Type$SCALE_TRANSLATE_getInstance(), Matrix2d$Type$COMPLEX_getInstance()];
  }
  Matrix2d$Type.values = Matrix2d$Type$values;
  function Matrix2d$Type$valueOf(name) {
    switch (name) {
      case 'IDENTITY':
        return Matrix2d$Type$IDENTITY_getInstance();
      case 'TRANSLATE':
        return Matrix2d$Type$TRANSLATE_getInstance();
      case 'SCALE':
        return Matrix2d$Type$SCALE_getInstance();
      case 'SCALE_TRANSLATE':
        return Matrix2d$Type$SCALE_TRANSLATE_getInstance();
      case 'COMPLEX':
        return Matrix2d$Type$COMPLEX_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.Matrix2d.Type.' + name);
    }
  }
  Matrix2d$Type.valueOf_61zpoe$ = Matrix2d$Type$valueOf;
  Matrix2d.prototype.getType = function () {
    var tmp$;
    var hasRotation = this.b !== 0.0 || this.c !== 0.0;
    var hasScale = this.a !== 1.0 || this.b !== 1.0;
    var hasTranslation = this.tx !== 0.0 || this.ty !== 0.0;
    if (hasRotation)
      tmp$ = Matrix2d$Type$COMPLEX_getInstance();
    else if (hasScale && hasTranslation)
      tmp$ = Matrix2d$Type$SCALE_TRANSLATE_getInstance();
    else if (hasScale)
      tmp$ = Matrix2d$Type$SCALE_getInstance();
    else if (hasTranslation)
      tmp$ = Matrix2d$Type$TRANSLATE_getInstance();
    else
      tmp$ = Matrix2d$Type$IDENTITY_getInstance();
    return tmp$;
  };
  function Matrix2d$Immutable(a, b, c, d, tx, ty) {
    Matrix2d$Immutable$Companion_getInstance();
    this.a_t7ay2q$_0 = a;
    this.b_t7ay1v$_0 = b;
    this.c_t7ay10$_0 = c;
    this.d_t7ay05$_0 = d;
    this.tx_i41sy9$_0 = tx;
    this.ty_i41sz4$_0 = ty;
  }
  Object.defineProperty(Matrix2d$Immutable.prototype, 'a', {
    get: function () {
      return this.a_t7ay2q$_0;
    }
  });
  Object.defineProperty(Matrix2d$Immutable.prototype, 'b', {
    get: function () {
      return this.b_t7ay1v$_0;
    }
  });
  Object.defineProperty(Matrix2d$Immutable.prototype, 'c', {
    get: function () {
      return this.c_t7ay10$_0;
    }
  });
  Object.defineProperty(Matrix2d$Immutable.prototype, 'd', {
    get: function () {
      return this.d_t7ay05$_0;
    }
  });
  Object.defineProperty(Matrix2d$Immutable.prototype, 'tx', {
    get: function () {
      return this.tx_i41sy9$_0;
    }
  });
  Object.defineProperty(Matrix2d$Immutable.prototype, 'ty', {
    get: function () {
      return this.ty_i41sz4$_0;
    }
  });
  function Matrix2d$Immutable$Companion() {
    Matrix2d$Immutable$Companion_instance = this;
    this.IDENTITY = new Matrix2d$Immutable(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
  }
  Matrix2d$Immutable$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Matrix2d$Immutable$Companion_instance = null;
  function Matrix2d$Immutable$Companion_getInstance() {
    if (Matrix2d$Immutable$Companion_instance === null) {
      new Matrix2d$Immutable$Companion();
    }
    return Matrix2d$Immutable$Companion_instance;
  }
  Matrix2d$Immutable.prototype.toMutable = function () {
    return new Matrix2d(this.a, this.b, this.c, this.d, this.tx, this.ty);
  };
  Matrix2d$Immutable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Immutable',
    interfaces: [IMatrix2d]
  };
  Matrix2d$Immutable.prototype.component1 = function () {
    return this.a;
  };
  Matrix2d$Immutable.prototype.component2 = function () {
    return this.b;
  };
  Matrix2d$Immutable.prototype.component3 = function () {
    return this.c;
  };
  Matrix2d$Immutable.prototype.component4 = function () {
    return this.d;
  };
  Matrix2d$Immutable.prototype.component5 = function () {
    return this.tx;
  };
  Matrix2d$Immutable.prototype.component6 = function () {
    return this.ty;
  };
  Matrix2d$Immutable.prototype.copy_15yvbs$ = function (a, b, c, d, tx, ty) {
    return new Matrix2d$Immutable(a === void 0 ? this.a : a, b === void 0 ? this.b : b, c === void 0 ? this.c : c, d === void 0 ? this.d : d, tx === void 0 ? this.tx : tx, ty === void 0 ? this.ty : ty);
  };
  Matrix2d$Immutable.prototype.toString = function () {
    return 'Immutable(a=' + Kotlin.toString(this.a) + (', b=' + Kotlin.toString(this.b)) + (', c=' + Kotlin.toString(this.c)) + (', d=' + Kotlin.toString(this.d)) + (', tx=' + Kotlin.toString(this.tx)) + (', ty=' + Kotlin.toString(this.ty)) + ')';
  };
  Matrix2d$Immutable.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    result = result * 31 + Kotlin.hashCode(this.d) | 0;
    result = result * 31 + Kotlin.hashCode(this.tx) | 0;
    result = result * 31 + Kotlin.hashCode(this.ty) | 0;
    return result;
  };
  Matrix2d$Immutable.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.c, other.c) && Kotlin.equals(this.d, other.d) && Kotlin.equals(this.tx, other.tx) && Kotlin.equals(this.ty, other.ty)))));
  };
  Matrix2d.prototype.toImmutable = function () {
    return new Matrix2d$Immutable(this.a, this.b, this.c, this.d, this.tx, this.ty);
  };
  Matrix2d.prototype.setTo_15yvbs$ = function (a, b, c, d, tx, ty) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
    this.tx = tx;
    this.ty = ty;
    return this;
  };
  Matrix2d.prototype.setToInterpolated_ehu1mq$ = function (ratio, l, r) {
    return this.setTo_15yvbs$(interpolate_3(ratio, l.a, r.a), interpolate_3(ratio, l.b, r.b), interpolate_3(ratio, l.c, r.c), interpolate_3(ratio, l.d, r.d), interpolate_3(ratio, l.tx, r.tx), interpolate_3(ratio, l.ty, r.ty));
  };
  Matrix2d.prototype.copyFrom_7f5bc6$ = function (that) {
    this.setTo_15yvbs$(that.a, that.b, that.c, that.d, that.tx, that.ty);
  };
  Matrix2d.prototype.rotateDeg_14dthe$ = function (thetaDeg) {
    return this.rotate_14dthe$(Angle$Companion_getInstance().toRadians_14dthe$(thetaDeg));
  };
  var Math_0 = Math;
  Matrix2d.prototype.rotate_14dthe$ = function (theta) {
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
  Matrix2d.prototype.skew_lu1900$ = function (skewX, skewY) {
    var sinX = Math_0.sin(skewX);
    var cosX = Math_0.cos(skewX);
    var sinY = Math_0.sin(skewY);
    var cosY = Math_0.cos(skewY);
    return this.setTo_15yvbs$(this.a * cosY - this.b * sinX, this.a * sinY + this.b * cosX, this.c * cosY - this.d * sinX, this.c * sinY + this.d * cosX, this.tx * cosY - this.ty * sinX, this.tx * sinY + this.ty * cosX);
  };
  Matrix2d.prototype.scale_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    return this.setTo_15yvbs$(this.a * sx, this.b * sx, this.c * sy, this.d * sy, this.tx * sx, this.ty * sy);
  };
  Matrix2d.prototype.prescale_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    return this.setTo_15yvbs$(this.a * sx, this.b * sx, this.c * sy, this.d * sy, this.tx, this.ty);
  };
  Matrix2d.prototype.translate_lu1900$ = function (dx, dy) {
    this.tx = this.tx + dx;
    this.ty = this.ty + dy;
    return this;
  };
  Matrix2d.prototype.pretranslate_lu1900$ = function (dx, dy) {
    this.tx = this.tx + (this.a * dx + this.c * dy);
    this.ty = this.ty + (this.b * dx + this.d * dy);
    return this;
  };
  Matrix2d.prototype.translate_z8e4lc$ = defineInlineFunction('korma-js.com.soywiz.korma.Matrix2d.translate_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (dx, dy) {
      return this.translate_lu1900$(numberToDouble(dx), numberToDouble(dy));
    };
  }));
  Matrix2d.prototype.pretranslate_z8e4lc$ = defineInlineFunction('korma-js.com.soywiz.korma.Matrix2d.pretranslate_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (dx, dy) {
      return this.pretranslate_lu1900$(numberToDouble(dx), numberToDouble(dy));
    };
  }));
  Matrix2d.prototype.prerotate_14dthe$ = function (theta) {
    var m = new Matrix2d();
    m.rotate_14dthe$(theta);
    this.premultiply_7f5bc6$(m);
    return this;
  };
  Matrix2d.prototype.preskew_lu1900$ = function (skewX, skewY) {
    var m = new Matrix2d();
    m.skew_lu1900$(skewX, skewY);
    this.premultiply_7f5bc6$(m);
    return this;
  };
  Matrix2d.prototype.premultiply_7f5bc6$ = function (m) {
    return this.premultiply_15yvbs$(m.a, m.b, m.c, m.d, m.tx, m.ty);
  };
  Matrix2d.prototype.premultiply_15yvbs$ = function (la, lb, lc, ld, ltx, lty) {
    return this.setTo_15yvbs$(la * this.a + lb * this.c, la * this.b + lb * this.d, lc * this.a + ld * this.c, lc * this.b + ld * this.d, ltx * this.a + lty * this.c + this.tx, ltx * this.b + lty * this.d + this.ty);
  };
  Matrix2d.prototype.multiply_mgxgbw$ = function (l, r) {
    return this.setTo_15yvbs$(l.a * r.a + l.b * r.c, l.a * r.b + l.b * r.d, l.c * r.a + l.d * r.c, l.c * r.b + l.d * r.d, l.tx * r.a + l.ty * r.c + r.tx, l.tx * r.b + l.ty * r.d + r.ty);
  };
  Matrix2d.prototype.transform_ce8w4o$ = function (px, py, out) {
    if (out === void 0)
      out = new MVector2();
    return out.setTo_lu1900$(this.transformX_lu1900$(px, py), this.transformY_lu1900$(px, py));
  };
  Matrix2d.prototype.transform_n3axqd$ = function (p, out) {
    if (out === void 0)
      out = new MVector2();
    return out.setTo_lu1900$(this.transformX_lu1900$(p.x, p.y), this.transformY_lu1900$(p.x, p.y));
  };
  Matrix2d.prototype.transformX_lu1900$ = function (px, py) {
    return this.a * px + this.c * py + this.tx;
  };
  Matrix2d.prototype.transformY_lu1900$ = function (px, py) {
    return this.d * py + this.b * px + this.ty;
  };
  Matrix2d.prototype.transformX_z8e4lc$ = defineInlineFunction('korma-js.com.soywiz.korma.Matrix2d.transformX_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (px, py) {
      return this.transformX_lu1900$(numberToDouble(px), numberToDouble(py));
    };
  }));
  Matrix2d.prototype.transformY_z8e4lc$ = defineInlineFunction('korma-js.com.soywiz.korma.Matrix2d.transformY_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (px, py) {
      return this.transformY_lu1900$(numberToDouble(px), numberToDouble(py));
    };
  }));
  Matrix2d.prototype.transformX_r62tv1$ = defineInlineFunction('korma-js.com.soywiz.korma.Matrix2d.transformX_r62tv1$', function (p) {
    return this.transformX_lu1900$(p.x, p.y);
  });
  Matrix2d.prototype.transformY_r62tv1$ = defineInlineFunction('korma-js.com.soywiz.korma.Matrix2d.transformY_r62tv1$', function (p) {
    return this.transformY_lu1900$(p.x, p.y);
  });
  Matrix2d.prototype.transformXf_lu1900$ = function (px, py) {
    return this.a * px + this.c * py + this.tx;
  };
  Matrix2d.prototype.transformYf_lu1900$ = function (px, py) {
    return this.d * py + this.b * px + this.ty;
  };
  var numberToDouble = Kotlin.numberToDouble;
  Matrix2d.prototype.deltaTransformPoint_r62tv1$ = function (point) {
    var x = point.x * this.a + point.y * this.c;
    var y = point.x * this.b + point.y * this.d;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  };
  Matrix2d.prototype.toString = function () {
    return 'Matrix2d(a=' + this.a + ', b=' + this.b + ', c=' + this.c + ', d=' + this.d + ', tx=' + this.tx + ', ty=' + this.ty + ')';
  };
  Matrix2d.prototype.setToIdentity = function () {
    return this.setTo_15yvbs$(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
  };
  Matrix2d.prototype.setToInverse_7f5bc6$ = function (matrixToInvert) {
    if (matrixToInvert === void 0)
      matrixToInvert = this;
    var m = matrixToInvert;
    var norm = m.a * m.d - m.b * m.c;
    if (norm === 0.0) {
      this.setTo_15yvbs$(0.0, 0.0, 0.0, 0.0, -m.tx, -m.ty);
    }
     else {
      var inorm = 1.0 / norm;
      this.d = m.a * inorm;
      this.a = m.d * inorm;
      this.b = m.b * -inorm;
      this.c = m.c * -inorm;
      this.ty = -this.b * m.tx - this.d * m.ty;
      this.tx = -this.a * m.tx - this.c * m.ty;
    }
    return this;
  };
  Matrix2d.prototype.inverted_yx07kl$ = function (out) {
    if (out === void 0)
      out = new Matrix2d();
    return out.setToInverse_7f5bc6$(this);
  };
  Matrix2d.prototype.identity = function () {
    return this.setTo_15yvbs$(1.0, 0.0, 0.0, 1.0, 0.0, 0.0);
  };
  Matrix2d.prototype.setTransform_8f3r3e$ = function (x, y, scaleX, scaleY, rotation, skewX, skewY) {
    if (skewX === 0.0 && skewY === 0.0) {
      if (rotation === 0.0) {
        this.setTo_15yvbs$(scaleX, 0.0, 0.0, scaleY, x, y);
      }
       else {
        var cos = Math_0.cos(rotation);
        var sin = Math_0.sin(rotation);
        this.setTo_15yvbs$(cos * scaleX, sin * scaleY, -sin * scaleX, cos * scaleY, x, y);
      }
    }
     else {
      this.identity();
      this.scale_lu1900$(scaleX, scaleY);
      this.skew_lu1900$(skewX, skewY);
      this.rotate_14dthe$(rotation);
      this.translate_lu1900$(x, y);
    }
    return this;
  };
  Matrix2d.prototype.clone = function () {
    return new Matrix2d(this.a, this.b, this.c, this.d, this.tx, this.ty);
  };
  Matrix2d.prototype.createBox_1lq62i$ = function (scaleX, scaleY, rotation, tx, ty) {
    if (rotation === void 0)
      rotation = 0.0;
    if (tx === void 0)
      tx = 0.0;
    if (ty === void 0)
      ty = 0.0;
    var u = Math_0.cos(rotation);
    var v = Math_0.sin(rotation);
    this.a = u * scaleX;
    this.b = v * scaleY;
    this.c = -v * scaleX;
    this.d = u * scaleY;
    this.tx = tx;
    this.ty = ty;
  };
  Matrix2d.prototype.createGradientBox_1lq62i$ = function (width, height, rotation, tx, ty) {
    if (rotation === void 0)
      rotation = 0.0;
    if (tx === void 0)
      tx = 0.0;
    if (ty === void 0)
      ty = 0.0;
    this.createBox_1lq62i$(width / 1638.4, height / 1638.4, rotation, tx + width / 2, ty + height / 2);
  };
  function Matrix2d$Transform(x, y, scaleX, scaleY, skewX, skewY, rotation) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (scaleX === void 0)
      scaleX = 1.0;
    if (scaleY === void 0)
      scaleY = 1.0;
    if (skewX === void 0)
      skewX = 0.0;
    if (skewY === void 0)
      skewY = 0.0;
    if (rotation === void 0)
      rotation = 0.0;
    this.x = x;
    this.y = y;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.skewX = skewX;
    this.skewY = skewY;
    this.rotation = rotation;
  }
  Object.defineProperty(Matrix2d$Transform.prototype, 'rotationDegrees', {
    get: function () {
      return Angle$Companion_getInstance().radiansToDegrees_14dthe$(this.rotation);
    },
    set: function (value) {
      this.rotation = Angle$Companion_getInstance().degreesToRadians_14dthe$(value);
    }
  });
  Matrix2d$Transform.prototype.setMatrix_7f5bc6$ = function (matrix) {
    var PI_4 = math.PI / 4.0;
    this.x = matrix.tx;
    this.y = matrix.ty;
    var x = -matrix.c / matrix.d;
    this.skewX = Math_0.atan(x);
    var x_0 = matrix.b / matrix.a;
    this.skewY = Math_0.atan(x_0);
    if (this.skewX !== this.skewX)
      this.skewX = 0.0;
    if (this.skewY !== this.skewY)
      this.skewY = 0.0;
    var tmp$;
    if (this.skewX > -PI_4 && this.skewX < PI_4) {
      var tmp$_0 = matrix.d;
      var x_1 = this.skewX;
      tmp$ = tmp$_0 / Math_0.cos(x_1);
    }
     else {
      var tmp$_1 = -matrix.c;
      var x_2 = this.skewX;
      tmp$ = tmp$_1 / Math_0.sin(x_2);
    }
    this.scaleY = tmp$;
    var tmp$_2;
    if (this.skewY > -PI_4 && this.skewY < PI_4) {
      var tmp$_3 = matrix.a;
      var x_3 = this.skewY;
      tmp$_2 = tmp$_3 / Math_0.cos(x_3);
    }
     else {
      var tmp$_4 = matrix.b;
      var x_4 = this.skewY;
      tmp$_2 = tmp$_4 / Math_0.sin(x_4);
    }
    this.scaleX = tmp$_2;
    var x_5 = this.skewX - this.skewY;
    if (Math_0.abs(x_5) < 1.0E-4) {
      this.rotation = this.skewX;
      this.skewX = 0.0;
      this.skewY = 0.0;
    }
     else {
      this.rotation = 0.0;
    }
    return this;
  };
  Matrix2d$Transform.prototype.toMatrix_yx07kl$ = function (out) {
    if (out === void 0)
      out = new Matrix2d();
    return out.setTransform_8f3r3e$(this.x, this.y, this.scaleX, this.scaleY, this.rotation, this.skewX, this.skewY);
  };
  Matrix2d$Transform.prototype.copyFrom_i579cd$ = function (that) {
    return this.setTo_8f3r3e$(that.x, that.y, that.scaleX, that.scaleY, that.rotation, that.skewX, that.skewY);
  };
  Matrix2d$Transform.prototype.setTo_8f3r3e$ = function (x, y, scaleX, scaleY, rotation, skewX, skewY) {
    this.x = x;
    this.y = y;
    this.scaleX = scaleX;
    this.scaleY = scaleY;
    this.rotation = rotation;
    this.skewX = skewX;
    this.skewY = skewY;
    return this;
  };
  Matrix2d$Transform.prototype.clone = function () {
    return (new Matrix2d$Transform()).copyFrom_i579cd$(this);
  };
  Matrix2d$Transform.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Transform',
    interfaces: []
  };
  Matrix2d$Transform.prototype.component1 = function () {
    return this.x;
  };
  Matrix2d$Transform.prototype.component2 = function () {
    return this.y;
  };
  Matrix2d$Transform.prototype.component3 = function () {
    return this.scaleX;
  };
  Matrix2d$Transform.prototype.component4 = function () {
    return this.scaleY;
  };
  Matrix2d$Transform.prototype.component5 = function () {
    return this.skewX;
  };
  Matrix2d$Transform.prototype.component6 = function () {
    return this.skewY;
  };
  Matrix2d$Transform.prototype.component7 = function () {
    return this.rotation;
  };
  Matrix2d$Transform.prototype.copy_8f3r3e$ = function (x, y, scaleX, scaleY, skewX, skewY, rotation) {
    return new Matrix2d$Transform(x === void 0 ? this.x : x, y === void 0 ? this.y : y, scaleX === void 0 ? this.scaleX : scaleX, scaleY === void 0 ? this.scaleY : scaleY, skewX === void 0 ? this.skewX : skewX, skewY === void 0 ? this.skewY : skewY, rotation === void 0 ? this.rotation : rotation);
  };
  Matrix2d$Transform.prototype.toString = function () {
    return 'Transform(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', scaleX=' + Kotlin.toString(this.scaleX)) + (', scaleY=' + Kotlin.toString(this.scaleY)) + (', skewX=' + Kotlin.toString(this.skewX)) + (', skewY=' + Kotlin.toString(this.skewY)) + (', rotation=' + Kotlin.toString(this.rotation)) + ')';
  };
  Matrix2d$Transform.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleX) | 0;
    result = result * 31 + Kotlin.hashCode(this.scaleY) | 0;
    result = result * 31 + Kotlin.hashCode(this.skewX) | 0;
    result = result * 31 + Kotlin.hashCode(this.skewY) | 0;
    result = result * 31 + Kotlin.hashCode(this.rotation) | 0;
    return result;
  };
  Matrix2d$Transform.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.scaleX, other.scaleX) && Kotlin.equals(this.scaleY, other.scaleY) && Kotlin.equals(this.skewX, other.skewX) && Kotlin.equals(this.skewY, other.skewY) && Kotlin.equals(this.rotation, other.rotation)))));
  };
  function Matrix2d$Computed(matrix, transform) {
    this.matrix = matrix;
    this.transform = transform;
  }
  Matrix2d$Computed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Computed',
    interfaces: []
  };
  function Matrix2d$Matrix2d$Computed_init(matrix, $this) {
    $this = $this || Object.create(Matrix2d$Computed.prototype);
    Matrix2d$Computed.call($this, matrix, (new Matrix2d$Transform()).setMatrix_7f5bc6$(matrix));
    return $this;
  }
  function Matrix2d$Matrix2d$Computed_init_0(transform, $this) {
    $this = $this || Object.create(Matrix2d$Computed.prototype);
    Matrix2d$Computed.call($this, transform.toMatrix_yx07kl$(), transform);
    return $this;
  }
  Matrix2d.prototype.setToInterpolated_v05y7o$ = function (l, r, ratio) {
    return this.setTo_15yvbs$(interpolate_3(ratio, l.a, r.a), interpolate_3(ratio, l.b, r.b), interpolate_3(ratio, l.c, r.c), interpolate_3(ratio, l.d, r.d), interpolate_3(ratio, l.tx, r.tx), interpolate_3(ratio, l.ty, r.ty));
  };
  Matrix2d.prototype.interpolateWith_e37ph5$ = function (other, ratio) {
    return (new Matrix2d()).setToInterpolated_v05y7o$(this, other, ratio);
  };
  Matrix2d.prototype.keep_mqpe2v$ = defineInlineFunction('korma-js.com.soywiz.korma.Matrix2d.keep_mqpe2v$', function (callback) {
    var a = this.a;
    var b = this.b;
    var c = this.c;
    var d = this.d;
    var tx = this.tx;
    var ty = this.ty;
    try {
      return callback(this);
    }
    finally {
      this.a = a;
      this.b = b;
      this.c = c;
      this.d = d;
      this.tx = tx;
      this.ty = ty;
    }
  });
  Matrix2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Matrix2d',
    interfaces: [IMatrix2d, Interpolable, MutableInterpolable]
  };
  Matrix2d.prototype.component1 = function () {
    return this.a;
  };
  Matrix2d.prototype.component2 = function () {
    return this.b;
  };
  Matrix2d.prototype.component3 = function () {
    return this.c;
  };
  Matrix2d.prototype.component4 = function () {
    return this.d;
  };
  Matrix2d.prototype.component5 = function () {
    return this.tx;
  };
  Matrix2d.prototype.component6 = function () {
    return this.ty;
  };
  Matrix2d.prototype.copy_15yvbs$ = function (a, b, c, d, tx, ty) {
    return new Matrix2d(a === void 0 ? this.a : a, b === void 0 ? this.b : b, c === void 0 ? this.c : c, d === void 0 ? this.d : d, tx === void 0 ? this.tx : tx, ty === void 0 ? this.ty : ty);
  };
  Matrix2d.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.a) | 0;
    result = result * 31 + Kotlin.hashCode(this.b) | 0;
    result = result * 31 + Kotlin.hashCode(this.c) | 0;
    result = result * 31 + Kotlin.hashCode(this.d) | 0;
    result = result * 31 + Kotlin.hashCode(this.tx) | 0;
    result = result * 31 + Kotlin.hashCode(this.ty) | 0;
    return result;
  };
  Matrix2d.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.a, other.a) && Kotlin.equals(this.b, other.b) && Kotlin.equals(this.c, other.c) && Kotlin.equals(this.d, other.d) && Kotlin.equals(this.tx, other.tx) && Kotlin.equals(this.ty, other.ty)))));
  };
  var Matrix2d_0 = defineInlineFunction('korma-js.com.soywiz.korma.Matrix2d_9wz194$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Matrix2d_init = _.com.soywiz.korma.Matrix2d;
    return function (a, b, c, d, tx, ty) {
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
      return new Matrix2d_init(numberToDouble(a), numberToDouble(b), numberToDouble(c), numberToDouble(d), numberToDouble(tx), numberToDouble(ty));
    };
  }));
  function Matrix2d_1(m) {
    return m.copy_15yvbs$();
  }
  function transformX($receiver, px, py) {
    return $receiver.a * px + $receiver.c * py + $receiver.tx;
  }
  function transformY($receiver, px, py) {
    return $receiver.d * py + $receiver.b * px + $receiver.ty;
  }
  function Matrix3(val) {
    if (val === void 0)
      val = new Float32Array([1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0]);
    this.val = val;
  }
  Matrix3.$metadata$ = {
    kind: Kind_CLASS,
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
    kind: Kind_OBJECT,
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
    Matrix4$Companion_getInstance().TEMP_0.copyFrom_zhv01d$(this);
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
  Matrix4.prototype.setToIdentity = function () {
    this.setTo_8odxlg$(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
    return this;
  };
  Matrix4.prototype.setToMultiply_np8ur8$ = function (l, r) {
    this.multiply_0(this.data, l.data, r.data);
  };
  Matrix4.prototype.multiply_0 = function (out, a, b) {
    var a00 = a[0];
    var a01 = a[1];
    var a02 = a[2];
    var a03 = a[3];
    var a10 = a[4];
    var a11 = a[5];
    var a12 = a[6];
    var a13 = a[7];
    var a20 = a[8];
    var a21 = a[9];
    var a22 = a[10];
    var a23 = a[11];
    var a30 = a[12];
    var a31 = a[13];
    var a32 = a[14];
    var a33 = a[15];
    var b0 = b[0];
    var b1 = b[1];
    var b2 = b[2];
    var b3 = b[3];
    out[0] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[1] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[2] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[3] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[4];
    b1 = b[5];
    b2 = b[6];
    b3 = b[7];
    out[4] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[5] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[6] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[7] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[8];
    b1 = b[9];
    b2 = b[10];
    b3 = b[11];
    out[8] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[9] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[10] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[11] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    b0 = b[12];
    b1 = b[13];
    b2 = b[14];
    b3 = b[15];
    out[12] = b0 * a00 + b1 * a10 + b2 * a20 + b3 * a30;
    out[13] = b0 * a01 + b1 * a11 + b2 * a21 + b3 * a31;
    out[14] = b0 * a02 + b1 * a12 + b2 * a22 + b3 * a32;
    out[15] = b0 * a03 + b1 * a13 + b2 * a23 + b3 * a33;
    return out;
  };
  Matrix4.prototype.copyFrom_zhv01d$ = function (that) {
    for (var n = 0; n < 16; n++)
      this.data[n] = that.data[n];
    return this;
  };
  Matrix4.prototype.copyFrom_yx07kl$ = function (that) {
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
    kind: Kind_CLASS,
    simpleName: 'Matrix4',
    interfaces: []
  };
  function toMatrix4($receiver, out) {
    if (out === void 0)
      out = new Matrix4();
    return out.setTo_8odxlg$($receiver.a, $receiver.b, $receiver.tx, 0.0, $receiver.c, $receiver.d, $receiver.ty, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 0.0, 1.0);
  }
  function Vector2() {
    Vector2$Companion_getInstance();
  }
  function Vector2$Companion() {
    Vector2$Companion_instance = this;
    this.Zero = new IVector2(numberToDouble(0), numberToDouble(0));
    this.One = new IVector2(numberToDouble(1), numberToDouble(1));
    this.Up = new IVector2(numberToDouble(0), numberToDouble(1));
    this.Down = new IVector2(numberToDouble(0), numberToDouble(-1));
    this.Left = new IVector2(numberToDouble(-1), numberToDouble(0));
    this.Right = new IVector2(numberToDouble(1), numberToDouble(0));
  }
  Vector2$Companion.prototype.invoke_r62tv1$ = function (v) {
    var x = v.x;
    var y = v.y;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  };
  Vector2$Companion.prototype.invoke = defineInlineFunction('korma-js.com.soywiz.korma.Vector2.Companion.invoke', wrapFunction(function () {
    var IVector2_init = _.com.soywiz.korma.IVector2;
    return function () {
      return new IVector2_init(0.0, 0.0);
    };
  }));
  Vector2$Companion.prototype.invoke_3p81yu$ = defineInlineFunction('korma-js.com.soywiz.korma.Vector2.Companion.invoke_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var IVector2_init = _.com.soywiz.korma.IVector2;
    return function (xy) {
      return new IVector2_init(numberToDouble(xy), numberToDouble(xy));
    };
  }));
  Vector2$Companion.prototype.invoke_z8e4lc$ = defineInlineFunction('korma-js.com.soywiz.korma.Vector2.Companion.invoke_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var IVector2_init = _.com.soywiz.korma.IVector2;
    return function (x, y) {
      return new IVector2_init(numberToDouble(x), numberToDouble(y));
    };
  }));
  Vector2$Companion.prototype.middle_g6xq6k$ = function (a, b) {
    return new MVector2((a.x + b.x) * 0.5, (a.y + b.y) * 0.5);
  };
  Vector2$Companion.prototype.angle_g6xq6k$ = function (a, b) {
    var x = dot(a, b) / (get_length(a) * get_length(b));
    return Math_0.acos(x);
  };
  Vector2$Companion.prototype.angle_6y0v78$ = function (ax, ay, bx, by) {
    var x = (ax * bx + ay * by) / (Math_getInstance().hypot_lu1900$(ax, ay) * Math_getInstance().hypot_lu1900$(bx, by));
    return Math_0.acos(x);
  };
  function Vector2$Companion$sortPoints$lambda(this$Vector2$) {
    return function (l, r) {
      return this$Vector2$.cmpPoints_0(l, r);
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
  Vector2$Companion.prototype.sortPoints_4timje$ = function (points) {
    sortWith(points, new Comparator$ObjectLiteral(Vector2$Companion$sortPoints$lambda(this)));
  };
  Vector2$Companion.prototype.cmpPoints_0 = function (l, r) {
    var ret = l.y - r.y;
    if (ret === 0.0)
      ret = l.x - r.x;
    if (ret < 0)
      return -1;
    if (ret > 0)
      return 1;
    return 0;
  };
  Vector2$Companion.prototype.angle_15yvbs$ = function (x1, y1, x2, y2, x3, y3) {
    var ax = x1 - x2;
    var ay = y1 - y2;
    var al = Math_getInstance().hypot_lu1900$(ax, ay);
    var bx = x1 - x3;
    var by = y1 - y3;
    var bl = Math_getInstance().hypot_lu1900$(bx, by);
    var x = (ax * bx + ay * by) / (al * bl);
    return Math_0.acos(x);
  };
  Vector2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector2$Companion_instance = null;
  function Vector2$Companion_getInstance() {
    if (Vector2$Companion_instance === null) {
      new Vector2$Companion();
    }
    return Vector2$Companion_instance;
  }
  function Vector2$Base() {
  }
  Vector2$Base.prototype.equals = function (other) {
    return Kotlin.isType(other, Vector2) ? this.x === other.x && this.y === other.y : false;
  };
  Vector2$Base.prototype.hashCode = function () {
    return hashCode(this.x) + (hashCode(this.y) << 7) | 0;
  };
  Vector2$Base.prototype.toString = function () {
    var $receiver = package$korma.KormaStr;
    return '(' + $receiver.get_niceStr_yrwdxr$(this.x) + ', ' + $receiver.get_niceStr_yrwdxr$(this.y) + ')';
  };
  Vector2$Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base',
    interfaces: [Vector2]
  };
  Vector2.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Vector2',
    interfaces: []
  };
  function IVector2(x, y) {
    Vector2$Base.call(this);
    this.x_4b2zc8$_0 = x;
    this.y_4b2zd3$_0 = y;
  }
  Object.defineProperty(IVector2.prototype, 'x', {
    get: function () {
      return this.x_4b2zc8$_0;
    }
  });
  Object.defineProperty(IVector2.prototype, 'y', {
    get: function () {
      return this.y_4b2zd3$_0;
    }
  });
  IVector2.prototype.interpolateWith_e37ph5$ = function (other, ratio) {
    var x = interpolate_1(this.x, other.x, ratio);
    var y = interpolate_1(this.y, other.y, ratio);
    return new IVector2(numberToDouble(x), numberToDouble(y));
  };
  IVector2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IVector2',
    interfaces: [Interpolable, Vector2$Base]
  };
  function MVector2(x, y) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = x;
    Vector2$Base.call(this);
    this.x_rhvh4c$_0 = x;
    this.y_rhvh57$_0 = y;
  }
  Object.defineProperty(MVector2.prototype, 'x', {
    get: function () {
      return this.x_rhvh4c$_0;
    },
    set: function (x) {
      this.x_rhvh4c$_0 = x;
    }
  });
  Object.defineProperty(MVector2.prototype, 'y', {
    get: function () {
      return this.y_rhvh57$_0;
    },
    set: function (y) {
      this.y_rhvh57$_0 = y;
    }
  });
  MVector2.prototype.setTo_z8e4lc$ = defineInlineFunction('korma-js.com.soywiz.korma.MVector2.setTo_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y) {
      return this.setTo_lu1900$(numberToDouble(x), numberToDouble(y));
    };
  }));
  MVector2.prototype.setTo_lu1900$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  MVector2.prototype.setToZero = function () {
    return this.setTo_lu1900$(0.0, 0.0);
  };
  MVector2.prototype.neg = function () {
    return this.setTo_lu1900$(-this.x, -this.y);
  };
  MVector2.prototype.mul_14dthe$ = function (s) {
    return this.setTo_lu1900$(this.x * s, this.y * s);
  };
  MVector2.prototype.add_r62tv1$ = function (p) {
    return this.setToAdd_g6xq6k$(this, p);
  };
  MVector2.prototype.sub_r62tv1$ = function (p) {
    return this.setToSub_g6xq6k$(this, p);
  };
  MVector2.prototype.copyFrom_r62tv1$ = function (that) {
    return this.setTo_lu1900$(that.x, that.y);
  };
  MVector2.prototype.setToTransform_7jehfj$ = function (mat, p) {
    return this.setToTransform_p1yd1a$(mat, p.x, p.y);
  };
  MVector2.prototype.setToTransform_p1yd1a$ = function (mat, x, y) {
    return this.setTo_lu1900$(transformX(mat, x, y), transformY(mat, x, y));
  };
  MVector2.prototype.setToAdd_g6xq6k$ = function (a, b) {
    return this.setTo_lu1900$(a.x + b.x, a.y + b.y);
  };
  MVector2.prototype.setToSub_g6xq6k$ = function (a, b) {
    return this.setTo_lu1900$(a.x - b.x, a.y - b.y);
  };
  MVector2.prototype.setToMul_g6xq6k$ = function (a, b) {
    return this.setTo_lu1900$(a.x * b.x, a.y * b.y);
  };
  MVector2.prototype.setToMul_lpqq81$ = function (a, s) {
    return this.setTo_lu1900$(a.x * s, a.y * s);
  };
  MVector2.prototype.setToDiv_g6xq6k$ = function (a, b) {
    return this.setTo_lu1900$(a.x / b.x, a.y / b.y);
  };
  MVector2.prototype.setToDiv_lpqq81$ = function (a, s) {
    return this.setTo_lu1900$(a.x / s, a.y / s);
  };
  MVector2.prototype.plusAssign_r62tv1$ = function (that) {
    this.setTo_lu1900$(this.x + that.x, this.y + that.y);
  };
  MVector2.prototype.normalize = function () {
    var len = this.length;
    this.setTo_lu1900$(this.x / len, this.y / len);
  };
  Object.defineProperty(MVector2.prototype, 'length', {
    get: function () {
      return Math_getInstance().hypot_lu1900$(this.x, this.y);
    }
  });
  MVector2.prototype.distanceTo_lu1900$ = function (x, y) {
    return Math_getInstance().hypot_lu1900$(x - this.x, y - this.y);
  };
  MVector2.prototype.distanceTo_r62tv1$ = function (that) {
    return this.distanceTo_lu1900$(that.x, that.y);
  };
  MVector2.prototype.interpolateWith_e37ph5$ = function (other, ratio) {
    return (new MVector2()).setToInterpolated_v05y7o$(this, other, ratio);
  };
  MVector2.prototype.setToInterpolated_v05y7o$ = function (l, r, ratio) {
    return this.setTo_lu1900$(interpolate_3(ratio, l.x, r.x), interpolate_3(ratio, l.y, r.y));
  };
  MVector2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MVector2',
    interfaces: [Vector2$Base, Interpolable, MutableInterpolable]
  };
  function MVector2_init(x, y, $this) {
    $this = $this || Object.create(MVector2.prototype);
    MVector2.call($this, x, y);
    return $this;
  }
  function MVector2_init_0(x, y, $this) {
    $this = $this || Object.create(MVector2.prototype);
    MVector2.call($this, x, y);
    return $this;
  }
  function MVector2_init_1(x, y, $this) {
    $this = $this || Object.create(MVector2.prototype);
    MVector2.call($this, x.toNumber(), y.toNumber());
    return $this;
  }
  function MVector2_init_2(v, $this) {
    $this = $this || Object.create(MVector2.prototype);
    MVector2.call($this, v.x, v.y);
    return $this;
  }
  var Vec = defineInlineFunction('korma-js.com.soywiz.korma.Vec_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var IVector2_init = _.com.soywiz.korma.IVector2;
    return function (x, y) {
      return new IVector2_init(numberToDouble(x), numberToDouble(y));
    };
  }));
  function get_unit($receiver) {
    return div_0($receiver, $receiver.length);
  }
  function plus($receiver, that) {
    var x = $receiver.x + that.x;
    var y = $receiver.y + that.y;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  function minus($receiver, that) {
    var x = $receiver.x - that.x;
    var y = $receiver.y - that.y;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  function times($receiver, that) {
    var x = $receiver.x * that.x;
    var y = $receiver.y * that.y;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  function div($receiver, that) {
    var x = $receiver.x / that.x;
    var y = $receiver.y / that.y;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  function times_0($receiver, scale) {
    var x = $receiver.x * scale;
    var y = $receiver.y * scale;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  function div_0($receiver, scale) {
    var x = $receiver.x / scale;
    var y = $receiver.y / scale;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  function dot($receiver, that) {
    return $receiver.x * that.x + $receiver.y * that.y;
  }
  function distanceTo($receiver, x, y) {
    return Math_getInstance().hypot_lu1900$(x - $receiver.x, y - $receiver.y);
  }
  function distanceTo_0($receiver, that) {
    return distanceTo($receiver, that.x, that.y);
  }
  function angleToRad($receiver, other) {
    return Angle$Companion_getInstance().betweenRad_6y0v78$($receiver.x, $receiver.y, other.x, other.y);
  }
  function angleTo($receiver, other) {
    return Angle$Companion_getInstance().between_6y0v78$($receiver.x, $receiver.y, other.x, other.y);
  }
  function transformed($receiver, mat, out) {
    if (out === void 0)
      out = new MVector2();
    return out.setToTransform_7jehfj$(mat, $receiver);
  }
  function get_2($receiver, index) {
    switch (index) {
      case 0:
        return $receiver.x;
      case 1:
        return $receiver.y;
      default:throw new IndexOutOfBoundsException("Vector2 doesn't have " + index + ' component');
    }
  }
  function get_unit_0($receiver) {
    return div_0($receiver, get_length($receiver));
  }
  function get_length($receiver) {
    return Math_getInstance().hypot_lu1900$($receiver.x, $receiver.y);
  }
  function get_magnitude($receiver) {
    return Math_getInstance().hypot_lu1900$($receiver.x, $receiver.y);
  }
  function get_normalized($receiver) {
    var imag = 1.0 / get_magnitude($receiver);
    var x = $receiver.x * imag;
    var y = $receiver.y * imag;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  function get_mutable($receiver) {
    return new MVector2($receiver.x, $receiver.y);
  }
  function get_immutable($receiver) {
    var x = $receiver.x;
    var y = $receiver.y;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  function copy($receiver) {
    var x = $receiver.x;
    var y = $receiver.y;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  function Vector2Int() {
    Vector2Int$Companion_getInstance();
  }
  function Vector2Int$Companion() {
    Vector2Int$Companion_instance = this;
  }
  Vector2Int$Companion.prototype.invoke_vux9f0$ = function (x, y) {
    return new IVector2Int(x, y);
  };
  Vector2Int$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector2Int$Companion_instance = null;
  function Vector2Int$Companion_getInstance() {
    if (Vector2Int$Companion_instance === null) {
      new Vector2Int$Companion();
    }
    return Vector2Int$Companion_instance;
  }
  Vector2Int.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Vector2Int',
    interfaces: []
  };
  function IVector2Int(x, y) {
    this.x_4uct6f$_0 = x;
    this.y_4uct5k$_0 = y;
  }
  Object.defineProperty(IVector2Int.prototype, 'x', {
    get: function () {
      return this.x_4uct6f$_0;
    }
  });
  Object.defineProperty(IVector2Int.prototype, 'y', {
    get: function () {
      return this.y_4uct5k$_0;
    }
  });
  IVector2Int.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IVector2Int',
    interfaces: [Vector2Int]
  };
  IVector2Int.prototype.component1 = function () {
    return this.x;
  };
  IVector2Int.prototype.component2 = function () {
    return this.y;
  };
  IVector2Int.prototype.copy_vux9f0$ = function (x, y) {
    return new IVector2Int(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  IVector2Int.prototype.toString = function () {
    return 'IVector2Int(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  IVector2Int.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  IVector2Int.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function MVector2Int(x, y) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    this.x_wqrqo5$_0 = x;
    this.y_wqrqp0$_0 = y;
  }
  Object.defineProperty(MVector2Int.prototype, 'x', {
    get: function () {
      return this.x_wqrqo5$_0;
    },
    set: function (x) {
      this.x_wqrqo5$_0 = x;
    }
  });
  Object.defineProperty(MVector2Int.prototype, 'y', {
    get: function () {
      return this.y_wqrqp0$_0;
    },
    set: function (y) {
      this.y_wqrqp0$_0 = y;
    }
  });
  MVector2Int.prototype.setTo_vux9f0$ = function (x, y) {
    this.x = x;
    this.y = y;
    return this;
  };
  MVector2Int.prototype.setTo_9yy4fy$ = function (that) {
    return this.setTo_vux9f0$(that.x, that.y);
  };
  MVector2Int.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MVector2Int',
    interfaces: [Vector2Int]
  };
  MVector2Int.prototype.component1 = function () {
    return this.x;
  };
  MVector2Int.prototype.component2 = function () {
    return this.y;
  };
  MVector2Int.prototype.copy_vux9f0$ = function (x, y) {
    return new MVector2Int(x === void 0 ? this.x : x, y === void 0 ? this.y : y);
  };
  MVector2Int.prototype.toString = function () {
    return 'MVector2Int(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + ')';
  };
  MVector2Int.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    return result;
  };
  MVector2Int.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y)))));
  };
  function plus_0($receiver, that) {
    return Vector2Int$Companion_getInstance().invoke_vux9f0$($receiver.x + that.x | 0, $receiver.y + that.y | 0);
  }
  function minus_0($receiver, that) {
    return Vector2Int$Companion_getInstance().invoke_vux9f0$($receiver.x - that.x | 0, $receiver.y - that.y | 0);
  }
  function times_1($receiver, that) {
    return Vector2Int$Companion_getInstance().invoke_vux9f0$(Kotlin.imul($receiver.x, that.x), Kotlin.imul($receiver.y, that.y));
  }
  function div_1($receiver, that) {
    return Vector2Int$Companion_getInstance().invoke_vux9f0$($receiver.x / that.x | 0, $receiver.y / that.y | 0);
  }
  function rem($receiver, that) {
    return Vector2Int$Companion_getInstance().invoke_vux9f0$($receiver.x % that.x, $receiver.y % that.y);
  }
  function get_mutable_0($receiver) {
    return new MVector2Int($receiver.x, $receiver.y);
  }
  function get_immutable_0($receiver) {
    return Vector2Int$Companion_getInstance().invoke_vux9f0$($receiver.x, $receiver.y);
  }
  function get_int($receiver) {
    return Vector2Int$Companion_getInstance().invoke_vux9f0$(numberToInt($receiver.x), numberToInt($receiver.y));
  }
  function get_double($receiver) {
    var x = $receiver.x;
    var y = $receiver.y;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  var Array_0 = Array;
  function MVector2Area(size) {
    this.size = size;
    var array = Array_0(this.size);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new MVector2();
    }
    this.points = array;
    this.offset = 0;
  }
  MVector2Area.prototype.alloc = function () {
    var tmp$;
    return this.points[tmp$ = this.offset, this.offset = tmp$ + 1 | 0, tmp$];
  };
  MVector2Area.prototype.plus_fu3msx$ = function ($receiver, other) {
    return this.alloc().setToAdd_g6xq6k$($receiver, other);
  };
  MVector2Area.prototype.minus_fu3msx$ = function ($receiver, other) {
    return this.alloc().setToSub_g6xq6k$($receiver, other);
  };
  MVector2Area.prototype.times_fu3msx$ = function ($receiver, value) {
    return this.alloc().setToMul_g6xq6k$($receiver, value);
  };
  MVector2Area.prototype.times_t1zklw$ = defineInlineFunction('korma-js.com.soywiz.korma.MVector2Area.times_t1zklw$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, value) {
      return this.alloc().setToMul_lpqq81$($receiver, numberToDouble(value));
    };
  }));
  MVector2Area.prototype.div_fu3msx$ = function ($receiver, value) {
    return this.alloc().setToDiv_g6xq6k$($receiver, value);
  };
  MVector2Area.prototype.div_t1zklw$ = defineInlineFunction('korma-js.com.soywiz.korma.MVector2Area.div_t1zklw$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver, value) {
      return this.alloc().setToDiv_lpqq81$($receiver, numberToDouble(value));
    };
  }));
  MVector2Area.prototype.invoke_78o18g$ = defineInlineFunction('korma-js.com.soywiz.korma.MVector2Area.invoke_78o18g$', function (callback) {
    var oldOffset = this.offset;
    try {
      callback(this);
    }
    finally {
      this.offset = oldOffset;
    }
  });
  MVector2Area.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MVector2Area',
    interfaces: []
  };
  function Vector3() {
    Vector3$Companion_getInstance();
  }
  function Vector3$Companion() {
    Vector3$Companion_instance = this;
  }
  Vector3$Companion.prototype.invoke_a2j3zq$ = defineInlineFunction('korma-js.com.soywiz.korma.Vector3.Companion.invoke_a2j3zq$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var IVector3_init = _.com.soywiz.korma.IVector3;
    return function (x, y, z) {
      return new IVector3_init(numberToDouble(x), numberToDouble(y), numberToDouble(z));
    };
  }));
  Vector3$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Vector3$Companion_instance = null;
  function Vector3$Companion_getInstance() {
    if (Vector3$Companion_instance === null) {
      new Vector3$Companion();
    }
    return Vector3$Companion_instance;
  }
  function Vector3$Base() {
  }
  Vector3$Base.prototype.equals = function (other) {
    return Kotlin.isType(other, Vector3) ? this.x === other.x && this.y === other.y : false;
  };
  Vector3$Base.prototype.hashCode = function () {
    return hashCode(this.x) + (hashCode(this.y) << 3) + (hashCode(this.z) << 7) | 0;
  };
  Vector3$Base.prototype.toString = function () {
    var $receiver = package$korma.KormaStr;
    return '(' + $receiver.get_niceStr_yrwdxr$(this.x) + ', ' + $receiver.get_niceStr_yrwdxr$(this.y) + ', ' + $receiver.get_niceStr_yrwdxr$(this.z) + ')';
  };
  Vector3$Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Base',
    interfaces: [Vector3]
  };
  Vector3.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Vector3',
    interfaces: []
  };
  function IVector3(x, y, z) {
    Vector3$Base.call(this);
    this.x_4b3mbr$_0 = x;
    this.y_4b3mcm$_0 = y;
    this.z_4b3mdh$_0 = z;
  }
  Object.defineProperty(IVector3.prototype, 'x', {
    get: function () {
      return this.x_4b3mbr$_0;
    }
  });
  Object.defineProperty(IVector3.prototype, 'y', {
    get: function () {
      return this.y_4b3mcm$_0;
    }
  });
  Object.defineProperty(IVector3.prototype, 'z', {
    get: function () {
      return this.z_4b3mdh$_0;
    }
  });
  IVector3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IVector3',
    interfaces: [Vector3$Base]
  };
  function MVector3(x, y, z) {
    Vector3$Base.call(this);
    this.x_rhw43v$_0 = x;
    this.y_rhw44q$_0 = y;
    this.z_rhw45l$_0 = z;
  }
  Object.defineProperty(MVector3.prototype, 'x', {
    get: function () {
      return this.x_rhw43v$_0;
    },
    set: function (x) {
      this.x_rhw43v$_0 = x;
    }
  });
  Object.defineProperty(MVector3.prototype, 'y', {
    get: function () {
      return this.y_rhw44q$_0;
    },
    set: function (y) {
      this.y_rhw44q$_0 = y;
    }
  });
  Object.defineProperty(MVector3.prototype, 'z', {
    get: function () {
      return this.z_rhw45l$_0;
    },
    set: function (z) {
      this.z_rhw45l$_0 = z;
    }
  });
  MVector3.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MVector3',
    interfaces: [Vector3$Base]
  };
  function AStar() {
    AStar_instance = this;
  }
  function AStar$find$lambda(it) {
    return it;
  }
  AStar.prototype.find_43y20a$ = function (board, x0, y0, x1, y1, findClosest, diagonals) {
    if (findClosest === void 0)
      findClosest = false;
    if (diagonals === void 0)
      diagonals = false;
    return this.find_moroww$(board, x0, y0, x1, y1, AStar$find$lambda, findClosest, diagonals);
  };
  function AStar$find$lambda_0(closure$isBlocking) {
    return function (x, y, value) {
      return new AStar$ANode(PointInt(x, y), closure$isBlocking(value));
    };
  }
  function AStar$find$lambda_1(a, b) {
    return a.weight - b.weight | 0;
  }
  var Array2 = $module$kds_js.com.soywiz.kds.Array2;
  AStar.prototype.find_moroww$ = function (board, x0, y0, x1, y1, isBlocking, findClosest, diagonals) {
    if (findClosest === void 0)
      findClosest = false;
    if (diagonals === void 0)
      diagonals = false;
    var tmp$;
    var width = board.width;
    var height = board.height;
    var array = Array_0(Kotlin.imul(width, height));
    var tmp$_0;
    tmp$_0 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_0; i++) {
      var x = i % board.width;
      var y = i / board.width | 0;
      array[i] = AStar$find$lambda_0(isBlocking)(x, y, board.get_vux9f0$(x, y));
    }
    var aboard = new Array2(width, height, array);
    var queue = PriorityQueue_init(void 0, AStar$find$lambda_1);
    var first = aboard.get_vux9f0$(x0, y0);
    var dest = aboard.get_vux9f0$(x1, y1);
    var closest = first;
    var closestDist = Math_getInstance().distance_tjonv8$(x0, y0, x1, y1);
    if (!first.value) {
      queue.add_11rb$(first);
      first.weight = 0;
    }
    while (!queue.isEmpty()) {
      var last = queue.remove();
      var dist = Math_getInstance().distance_o87e54$(last.pos, dest.pos);
      if (dist < closestDist) {
        closestDist = dist;
        closest = last;
      }
      var nweight = last.weight + 1 | 0;
      tmp$ = last.neightborhoods_n8nme7$(aboard, diagonals).iterator();
      while (tmp$.hasNext()) {
        var n = tmp$.next();
        if (nweight < n.weight) {
          n.prev = last;
          queue.add_11rb$(n);
          n.weight = nweight;
        }
      }
    }
    var route = ArrayList_init_0();
    if (findClosest || equals(closest, dest)) {
      var current = closest;
      while (current != null) {
        var element = current.pos;
        route.add_11rb$(element);
        current = current.prev;
      }
      reverse(route);
    }
    return route;
  };
  function AStar$ANode(pos, value) {
    this.pos = pos;
    this.value = value;
    this.visited = false;
    this.weight = 999999999;
    this.prev = null;
  }
  function AStar$ANode$neightborhoods$add(this$ANode, closure$board, closure$out) {
    return function (dx, dy) {
      var x = this$ANode.pos.x + dx | 0;
      var y = this$ANode.pos.y + dy | 0;
      if (closure$board.inside_vux9f0$(x, y) && !closure$board.get_vux9f0$(x, y).value) {
        var $receiver = closure$out;
        var element = closure$board.get_vux9f0$(x, y);
        $receiver.add_11rb$(element);
      }
    };
  }
  AStar$ANode.prototype.neightborhoods_n8nme7$ = function (board, diagonals) {
    var out = ArrayList_init_0();
    var add = AStar$ANode$neightborhoods$add(this, board, out);
    add(-1, 0);
    add(1, 0);
    add(0, -1);
    add(0, 1);
    if (diagonals) {
      add(-1, -1);
      add(1, -1);
      add(-1, 1);
      add(1, 1);
    }
    return out;
  };
  AStar$ANode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ANode',
    interfaces: []
  };
  AStar.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'AStar',
    interfaces: []
  };
  var AStar_instance = null;
  function AStar_getInstance() {
    if (AStar_instance === null) {
      new AStar();
    }
    return AStar_instance;
  }
  function copyTo($receiver, srcPos, dst, dstPos, count) {
    for (var n = 0; n < count; n++)
      dst[dstPos + n | 0] = $receiver[srcPos + n | 0];
  }
  function copyTo_0($receiver, srcPos, dst, dstPos, count) {
    for (var n = 0; n < count; n++)
      dst[dstPos + n | 0] = $receiver[srcPos + n | 0];
  }
  function binarySearch($receiver, v, fromIndex, toIndex) {
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) / 2 | 0;
      var mval = $receiver[mid];
      if (mval < v) {
        low = mid + 1 | 0;
      }
       else if (mval > v) {
        high = mid - 1 | 0;
      }
       else {
        return mid;
      }
    }
    return (-low | 0) - 1 | 0;
  }
  function binarySearch_0($receiver, v, fromIndex, toIndex) {
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) / 2 | 0;
      var mval = $receiver[mid];
      if (mval < v) {
        low = mid + 1 | 0;
      }
       else if (mval > v) {
        high = mid - 1 | 0;
      }
       else {
        return mid;
      }
    }
    return (-low | 0) - 1 | 0;
  }
  function Anchor(sx, sy) {
    Anchor$Companion_getInstance();
    this.sx = sx;
    this.sy = sy;
  }
  function Anchor$Companion() {
    Anchor$Companion_instance = this;
    this.TOP_LEFT = new Anchor(0.0, 0.0);
    this.TOP_CENTER = new Anchor(0.5, 0.0);
    this.TOP_RIGHT = new Anchor(1.0, 0.0);
    this.MIDDLE_LEFT = new Anchor(0.0, 0.5);
    this.MIDDLE_CENTER = new Anchor(0.5, 0.5);
    this.MIDDLE_RIGHT = new Anchor(1.0, 0.5);
    this.BOTTOM_LEFT = new Anchor(0.0, 1.0);
    this.BOTTOM_CENTER = new Anchor(0.5, 1.0);
    this.BOTTOM_RIGHT = new Anchor(1.0, 1.0);
  }
  Anchor$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Anchor$Companion_instance = null;
  function Anchor$Companion_getInstance() {
    if (Anchor$Companion_instance === null) {
      new Anchor$Companion();
    }
    return Anchor$Companion_instance;
  }
  Anchor.prototype.interpolateWith_e37ph5$ = function (other, ratio) {
    return new Anchor(interpolate_3(ratio, this.sx, other.sx), interpolate_3(ratio, this.sy, other.sy));
  };
  Anchor.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Anchor',
    interfaces: [Interpolable]
  };
  Anchor.prototype.component1 = function () {
    return this.sx;
  };
  Anchor.prototype.component2 = function () {
    return this.sy;
  };
  Anchor.prototype.copy_lu1900$ = function (sx, sy) {
    return new Anchor(sx === void 0 ? this.sx : sx, sy === void 0 ? this.sy : sy);
  };
  Anchor.prototype.toString = function () {
    return 'Anchor(sx=' + Kotlin.toString(this.sx) + (', sy=' + Kotlin.toString(this.sy)) + ')';
  };
  Anchor.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.sx) | 0;
    result = result * 31 + Kotlin.hashCode(this.sy) | 0;
    return result;
  };
  Anchor.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.sx, other.sx) && Kotlin.equals(this.sy, other.sy)))));
  };
  function Angle(radians) {
    Angle$Companion_getInstance();
    this.radians = radians;
  }
  Object.defineProperty(Angle.prototype, 'degrees', {
    get: function () {
      return Angle$Companion_getInstance().rad2deg_14dthe$(this.radians);
    }
  });
  Object.defineProperty(Angle.prototype, 'absoluteValue', {
    get: function () {
      var tmp$ = Angle$Companion_getInstance();
      var $receiver = this.radians;
      return tmp$.fromRadians_14dthe$(Math_0.abs($receiver));
    }
  });
  Angle.prototype.shortDistanceTo_4crm0z$ = function (other) {
    return new Angle(Angle$Companion_getInstance().shortRadDistanceTo_lu1900$(this.radians, other.radians));
  };
  Angle.prototype.times_3p81yu$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.Angle.times_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Angle_init = _.com.soywiz.korma.geom.Angle;
    return function (scale) {
      return new Angle_init(this.radians * numberToDouble(scale));
    };
  }));
  Angle.prototype.div_3p81yu$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.Angle.div_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Angle_init = _.com.soywiz.korma.geom.Angle;
    return function (scale) {
      return new Angle_init(this.radians / numberToDouble(scale));
    };
  }));
  Angle.prototype.plus_4crm0z$ = function (other) {
    return new Angle(this.radians + other.radians);
  };
  Angle.prototype.minus_4crm0z$ = function (other) {
    return this.shortDistanceTo_4crm0z$(other);
  };
  Angle.prototype.toString = function () {
    return 'Angle(' + this.degrees + ')';
  };
  function Angle$Companion() {
    Angle$Companion_instance = this;
    this.PI2 = math.PI * 2;
    this.DEG2RAD = math.PI / 180.0;
    this.RAD2DEG = 180.0 / math.PI;
    this.MAX_DEGREES = 360.0;
    this.MAX_RADIANS = this.PI2;
    this.HALF_DEGREES = this.MAX_DEGREES / 2;
    this.HALF_RADIANS = this.MAX_RADIANS / 2;
  }
  Angle$Companion.prototype.fromRadians_14dthe$ = function (rad) {
    return new Angle(rad);
  };
  Angle$Companion.prototype.fromDegrees_14dthe$ = function (deg) {
    return new Angle(this.deg2rad_14dthe$(deg));
  };
  Angle$Companion.prototype.fromRadians_3p81yu$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.Angle.Companion.fromRadians_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (rad) {
      return this.fromRadians_14dthe$(numberToDouble(rad));
    };
  }));
  Angle$Companion.prototype.fromDegrees_3p81yu$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.Angle.Companion.fromDegrees_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (deg) {
      return this.fromDegrees_14dthe$(numberToDouble(deg));
    };
  }));
  Angle$Companion.prototype.cos01_14dthe$ = function (ratio) {
    var x = math.PI * 2.0 * ratio;
    return Math_0.cos(x);
  };
  Angle$Companion.prototype.sin01_14dthe$ = function (ratio) {
    var x = math.PI * 2.0 * ratio;
    return Math_0.sin(x);
  };
  Angle$Companion.prototype.deg2rad_14dthe$ = function (deg) {
    return deg * this.DEG2RAD;
  };
  Angle$Companion.prototype.rad2deg_14dthe$ = function (rad) {
    return rad * this.RAD2DEG;
  };
  Angle$Companion.prototype.degreesToRadians_14dthe$ = function (deg) {
    return deg * this.DEG2RAD;
  };
  Angle$Companion.prototype.radiansToDegrees_14dthe$ = function (rad) {
    return rad * this.RAD2DEG;
  };
  Angle$Companion.prototype.toRadians_14dthe$ = function (v) {
    return v / 180.0 * 3.141592653589793;
  };
  Angle$Companion.prototype.toDegrees_14dthe$ = function (v) {
    return v * 180.0 / 3.141592653589793;
  };
  var kds = $module$kds_js.com.soywiz.kds;
  Angle$Companion.prototype.shortRadDistanceTo_lu1900$ = function (fromRad, toRad) {
    var r0 = kds.KdsExt.umod_38ydlf$(fromRad, this.MAX_RADIANS);
    var r1 = kds.KdsExt.umod_38ydlf$(toRad, this.MAX_RADIANS);
    var diff = (r1 - r0 + this.HALF_RADIANS) % this.MAX_RADIANS - this.HALF_RADIANS;
    return diff < -this.HALF_RADIANS ? diff + this.MAX_RADIANS : diff;
  };
  Angle$Companion.prototype.betweenRad_6y0v78$ = function (x0, y0, x1, y1) {
    var y = y1 - y0;
    var x = x1 - x0;
    var angle = Math_0.atan2(y, x);
    return angle < 0 ? angle + 2 * math.PI : angle;
  };
  Angle$Companion.prototype.between_6y0v78$ = function (x0, y0, x1, y1) {
    return Angle$Companion_getInstance().fromRadians_14dthe$(this.betweenRad_6y0v78$(x0, y0, x1, y1));
  };
  Angle$Companion.prototype.betweenRad_g6xq6k$ = function (p0, p1) {
    return this.betweenRad_6y0v78$(p0.x, p0.y, p1.x, p1.y);
  };
  Angle$Companion.prototype.between_g6xq6k$ = function (p0, p1) {
    return Angle$Companion_getInstance().fromRadians_14dthe$(this.betweenRad_g6xq6k$(p0, p1));
  };
  Angle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Angle$Companion_instance = null;
  function Angle$Companion_getInstance() {
    if (Angle$Companion_instance === null) {
      new Angle$Companion();
    }
    return Angle$Companion_instance;
  }
  Angle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Angle',
    interfaces: []
  };
  function get_normalizedRadians($receiver) {
    return kds.KdsExt.umod_38ydlf$($receiver.radians, Angle$Companion_getInstance().MAX_RADIANS);
  }
  function get_normalizedDegrees($receiver) {
    return kds.KdsExt.umod_38ydlf$($receiver.degrees, Angle$Companion_getInstance().MAX_DEGREES);
  }
  function get_normalized_0($receiver) {
    return new Angle(kds.KdsExt.umod_38ydlf$($receiver.radians, Angle$Companion_getInstance().MAX_RADIANS));
  }
  var get_degrees = defineInlineFunction('korma-js.com.soywiz.korma.geom.get_degrees_rcaex3$', wrapFunction(function () {
    var Angle = _.com.soywiz.korma.geom.Angle;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return Angle.Companion.fromDegrees_14dthe$(numberToDouble($receiver));
    };
  }));
  var get_radians = defineInlineFunction('korma-js.com.soywiz.korma.geom.get_radians_rcaex3$', wrapFunction(function () {
    var Angle = _.com.soywiz.korma.geom.Angle;
    var numberToDouble = Kotlin.numberToDouble;
    return function ($receiver) {
      return Angle.Companion.fromRadians_14dthe$(numberToDouble($receiver));
    };
  }));
  function BoundsBuilder() {
    this.tempRect = new Rectangle();
    this.xmin_0 = kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    this.xmax_0 = kotlin_js_internal_DoubleCompanionObject.MIN_VALUE;
    this.ymin_0 = kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    this.ymax_0 = kotlin_js_internal_DoubleCompanionObject.MIN_VALUE;
  }
  BoundsBuilder.prototype.reset = function () {
    this.xmin_0 = kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    this.xmax_0 = kotlin_js_internal_DoubleCompanionObject.MIN_VALUE;
    this.ymin_0 = kotlin_js_internal_DoubleCompanionObject.MAX_VALUE;
    this.ymax_0 = kotlin_js_internal_DoubleCompanionObject.MIN_VALUE;
  };
  BoundsBuilder.prototype.add_lu1900$ = function (x, y) {
    this.xmin_0 = Math_getInstance().min_lu1900$(this.xmin_0, x);
    this.xmax_0 = Math_getInstance().max_lu1900$(this.xmax_0, x);
    this.ymin_0 = Math_getInstance().min_lu1900$(this.ymin_0, y);
    this.ymax_0 = Math_getInstance().max_lu1900$(this.ymax_0, y);
    return this;
  };
  BoundsBuilder.prototype.add_r62tv1$ = function (p) {
    return this.add_lu1900$(p.x, p.y);
  };
  BoundsBuilder.prototype.add_20gruy$ = function (ps) {
    var tmp$;
    tmp$ = ps.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      this.add_r62tv1$(p);
    }
    return this;
  };
  BoundsBuilder.prototype.add_2da8yn$ = function (rect) {
    if (rect.isNotEmpty) {
      this.add_lu1900$(rect.left, rect.top);
      this.add_lu1900$(rect.right, rect.bottom);
    }
    return this;
  };
  BoundsBuilder.prototype.getBounds_2da8yn$ = function (out) {
    if (out === void 0)
      out = new Rectangle();
    return out.setBounds_6y0v78$(this.xmin_0, this.ymin_0, this.xmax_0, this.ymax_0);
  };
  BoundsBuilder.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BoundsBuilder',
    interfaces: []
  };
  function Orientation(name, ordinal, value) {
    Enum.call(this);
    this.value = value;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Orientation_initFields() {
    Orientation_initFields = function () {
    };
    Orientation$CW_instance = new Orientation('CW', 0, 1);
    Orientation$CCW_instance = new Orientation('CCW', 1, -1);
    Orientation$COLLINEAR_instance = new Orientation('COLLINEAR', 2, 0);
    Orientation$Companion_getInstance();
  }
  var Orientation$CW_instance;
  function Orientation$CW_getInstance() {
    Orientation_initFields();
    return Orientation$CW_instance;
  }
  var Orientation$CCW_instance;
  function Orientation$CCW_getInstance() {
    Orientation_initFields();
    return Orientation$CCW_instance;
  }
  var Orientation$COLLINEAR_instance;
  function Orientation$COLLINEAR_getInstance() {
    Orientation_initFields();
    return Orientation$COLLINEAR_instance;
  }
  function Orientation$Companion() {
    Orientation$Companion_instance = this;
  }
  Orientation$Companion.prototype.orient2d_immp3h$ = function (pa, pb, pc) {
    var detleft = (pa.x - pc.x) * (pb.y - pc.y);
    var detright = (pa.y - pc.y) * (pb.x - pc.x);
    var val = detleft - detright;
    if (val > -Constants_getInstance().EPSILON && val < Constants_getInstance().EPSILON)
      return Orientation$COLLINEAR_getInstance();
    if (val > 0)
      return Orientation$CCW_getInstance();
    return Orientation$CW_getInstance();
  };
  Orientation$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Orientation$Companion_instance = null;
  function Orientation$Companion_getInstance() {
    Orientation_initFields();
    if (Orientation$Companion_instance === null) {
      new Orientation$Companion();
    }
    return Orientation$Companion_instance;
  }
  Orientation.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Orientation',
    interfaces: [Enum]
  };
  function Orientation$values() {
    return [Orientation$CW_getInstance(), Orientation$CCW_getInstance(), Orientation$COLLINEAR_getInstance()];
  }
  Orientation.values = Orientation$values;
  function Orientation$valueOf(name) {
    switch (name) {
      case 'CW':
        return Orientation$CW_getInstance();
      case 'CCW':
        return Orientation$CCW_getInstance();
      case 'COLLINEAR':
        return Orientation$COLLINEAR_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.Orientation.' + name);
    }
  }
  Orientation.valueOf_61zpoe$ = Orientation$valueOf;
  function getPolylineLength($receiver) {
    var tmp$;
    var out = 0.0;
    var prev = null;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var cur = tmp$.next();
      if (prev != null)
        out += distanceTo_0(prev, cur);
      prev = cur;
    }
    return out;
  }
  function IPointInt(x, y) {
    return Vector2Int$Companion_getInstance().invoke_vux9f0$(x, y);
  }
  function PointInt(x, y) {
    return Vector2Int$Companion_getInstance().invoke_vux9f0$(x, y);
  }
  function IRectangle() {
  }
  IRectangle.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IRectangle',
    interfaces: []
  };
  function Rectangle(x, y, width, height) {
    Rectangle$Companion_getInstance();
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (width === void 0)
      width = 0.0;
    if (height === void 0)
      height = 0.0;
    this.x_t9n1sf$_0 = x;
    this.y_t9n1rk$_0 = y;
    this.width_n5nb31$_0 = width;
    this.height_gg7va4$_0 = height;
  }
  Object.defineProperty(Rectangle.prototype, 'x', {
    get: function () {
      return this.x_t9n1sf$_0;
    },
    set: function (x) {
      this.x_t9n1sf$_0 = x;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'y', {
    get: function () {
      return this.y_t9n1rk$_0;
    },
    set: function (y) {
      this.y_t9n1rk$_0 = y;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'width', {
    get: function () {
      return this.width_n5nb31$_0;
    },
    set: function (width) {
      this.width_n5nb31$_0 = width;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'height', {
    get: function () {
      return this.height_gg7va4$_0;
    },
    set: function (height) {
      this.height_gg7va4$_0 = height;
    }
  });
  function Rectangle$Immutable(x, y, width, height) {
    this.x_1vekxv$_0 = x;
    this.y_1vekx0$_0 = y;
    this.width_aogcbz$_0 = width;
    this.height_wzrizs$_0 = height;
  }
  Object.defineProperty(Rectangle$Immutable.prototype, 'x', {
    get: function () {
      return this.x_1vekxv$_0;
    }
  });
  Object.defineProperty(Rectangle$Immutable.prototype, 'y', {
    get: function () {
      return this.y_1vekx0$_0;
    }
  });
  Object.defineProperty(Rectangle$Immutable.prototype, 'width', {
    get: function () {
      return this.width_aogcbz$_0;
    }
  });
  Object.defineProperty(Rectangle$Immutable.prototype, 'height', {
    get: function () {
      return this.height_wzrizs$_0;
    }
  });
  Rectangle$Immutable.prototype.toMutable = function () {
    return new Rectangle(this.x, this.y, this.width, this.height);
  };
  Rectangle$Immutable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Immutable',
    interfaces: [IRectangle]
  };
  Rectangle$Immutable.prototype.component1 = function () {
    return this.x;
  };
  Rectangle$Immutable.prototype.component2 = function () {
    return this.y;
  };
  Rectangle$Immutable.prototype.component3 = function () {
    return this.width;
  };
  Rectangle$Immutable.prototype.component4 = function () {
    return this.height;
  };
  Rectangle$Immutable.prototype.copy_6y0v78$ = function (x, y, width, height) {
    return new Rectangle$Immutable(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Rectangle$Immutable.prototype.toString = function () {
    return 'Immutable(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Rectangle$Immutable.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Rectangle$Immutable.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  Rectangle.prototype.toImmutable = function () {
    return new Rectangle$Immutable(this.x, this.y, this.width, this.height);
  };
  Object.defineProperty(Rectangle.prototype, 'isEmpty', {
    get: function () {
      return this.area === 0.0;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'isNotEmpty', {
    get: function () {
      return this.area !== 0.0;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'area', {
    get: function () {
      return this.width * this.height;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'left', {
    get: function () {
      return this.x;
    },
    set: function (value) {
      this.x = value;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'top', {
    get: function () {
      return this.y;
    },
    set: function (value) {
      this.y = value;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'right', {
    get: function () {
      return this.x + this.width;
    },
    set: function (value) {
      this.width = value - this.x;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'bottom', {
    get: function () {
      return this.y + this.height;
    },
    set: function (value) {
      this.height = value - this.y;
    }
  });
  Object.defineProperty(Rectangle.prototype, 'size', {
    get: function () {
      return new Size(this.width, this.height);
    }
  });
  Rectangle.prototype.setTo_1ugm5o$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.Rectangle.setTo_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (x, y, width, height) {
      return this.setTo_6y0v78$(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  Rectangle.prototype.setTo_6y0v78$ = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  };
  Rectangle.prototype.copyFrom_2da8yn$ = function (that) {
    return this.setTo_6y0v78$(that.x, that.y, that.width, that.height);
  };
  Rectangle.prototype.setBounds_6y0v78$ = function (left, top, right, bottom) {
    return this.setTo_6y0v78$(left, top, right - left, bottom - top);
  };
  Rectangle.prototype.setBounds_tjonv8$ = function (left, top, right, bottom) {
    var width = right - left | 0;
    var height = bottom - top | 0;
    return this.setTo_6y0v78$(numberToDouble(left), numberToDouble(top), numberToDouble(width), numberToDouble(height));
  };
  Rectangle.prototype.times_14dthe$ = function (scale) {
    return new Rectangle(this.x * scale, this.y * scale, this.width * scale, this.height * scale);
  };
  Rectangle.prototype.div_14dthe$ = function (scale) {
    return new Rectangle(this.x / scale, this.y / scale, this.width / scale, this.height / scale);
  };
  Rectangle.prototype.contains_2da8yn$ = function (that) {
    return Rectangle$Companion_getInstance().isContainedIn_z5mqcu$(that, this);
  };
  Rectangle.prototype.contains_r62tv1$ = function (that) {
    return this.contains_lu1900$(this.x, this.y);
  };
  Rectangle.prototype.contains_lu1900$ = function (x, y) {
    return x >= this.left && x < this.right && (y >= this.top && y < this.bottom);
  };
  Rectangle.prototype.intersects_2da8yn$ = function (that) {
    return this.intersectsX_2da8yn$(that) && this.intersectsY_2da8yn$(that);
  };
  Rectangle.prototype.intersectsX_2da8yn$ = function (that) {
    return that.left <= this.right && that.right >= this.left;
  };
  Rectangle.prototype.intersectsY_2da8yn$ = function (that) {
    return that.top <= this.bottom && that.bottom >= this.top;
  };
  Rectangle.prototype.setToIntersection_z5mqcu$ = function (a, b) {
    a.intersection_z5mqcu$(b, this);
    return this;
  };
  Rectangle.prototype.intersection_2da8yn$ = function (that) {
    return this.intersection_z5mqcu$(that, new Rectangle());
  };
  Rectangle.prototype.intersection_z5mqcu$ = function (that, target) {
    if (target === void 0)
      target = new Rectangle();
    return this.intersects_2da8yn$(that) ? target.setBounds_6y0v78$(Math_getInstance().max_lu1900$(this.left, that.left), Math_getInstance().max_lu1900$(this.top, that.top), Math_getInstance().min_lu1900$(this.right, that.right), Math_getInstance().min_lu1900$(this.bottom, that.bottom)) : null;
  };
  Rectangle.prototype.displaced_lu1900$ = function (dx, dy) {
    return new Rectangle(this.x + dx, this.y + dy, this.width, this.height);
  };
  Rectangle.prototype.displace_lu1900$ = function (dx, dy) {
    return this.setTo_6y0v78$(this.x + dx, this.y + dy, this.width, this.height);
  };
  Rectangle.prototype.inflate_lu1900$ = function (dx, dy) {
    this.x = this.x - dx;
    this.width = this.width + 2 * dx;
    this.y = this.y - dy;
    this.height = this.height + 2 * dy;
  };
  Rectangle.prototype.clone = function () {
    return new Rectangle(this.x, this.y, this.width, this.height);
  };
  Rectangle.prototype.setToAnchoredRectangle_7qw0rf$ = function (small, anchor, big) {
    return this.setTo_6y0v78$(anchor.sx * (big.width - small.width), anchor.sy * (big.height - small.height), small.width, small.height);
  };
  Rectangle.prototype.toString = function () {
    var $receiver = package$korma.KormaStr;
    return 'Rectangle(x=' + $receiver.get_niceStr_yrwdxr$(this.x) + ', y=' + $receiver.get_niceStr_yrwdxr$(this.y) + ', width=' + $receiver.get_niceStr_yrwdxr$(this.width) + ', height=' + $receiver.get_niceStr_yrwdxr$(this.height) + ')';
  };
  Rectangle.prototype.toStringBounds = function () {
    var $receiver = package$korma.KormaStr;
    return 'Rectangle([' + $receiver.get_niceStr_yrwdxr$(this.left) + ',' + $receiver.get_niceStr_yrwdxr$(this.top) + ']-[' + $receiver.get_niceStr_yrwdxr$(this.right) + ',' + $receiver.get_niceStr_yrwdxr$(this.bottom) + '])';
  };
  function Rectangle$Companion() {
    Rectangle$Companion_instance = this;
  }
  Rectangle$Companion.prototype.fromBounds_6y0v78$ = function (left, top, right, bottom) {
    return (new Rectangle()).setBounds_6y0v78$(left, top, right, bottom);
  };
  Rectangle$Companion.prototype.fromBounds_tjonv8$ = function (left, top, right, bottom) {
    return (new Rectangle()).setBounds_tjonv8$(left, top, right, bottom);
  };
  Rectangle$Companion.prototype.isContainedIn_z5mqcu$ = function (a, b) {
    return a.x >= b.x && a.y >= b.y && a.x + a.width <= b.x + b.width && a.y + a.height <= b.y + b.height;
  };
  Rectangle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Rectangle$Companion_instance = null;
  function Rectangle$Companion_getInstance() {
    if (Rectangle$Companion_instance === null) {
      new Rectangle$Companion();
    }
    return Rectangle$Companion_instance;
  }
  Rectangle.prototype.interpolateWith_e37ph5$ = function (other, ratio) {
    return (new Rectangle()).setToInterpolated_v05y7o$(this, other, ratio);
  };
  Rectangle.prototype.setToInterpolated_v05y7o$ = function (l, r, ratio) {
    return this.setTo_6y0v78$(interpolate_3(ratio, l.x, r.x), interpolate_3(ratio, l.y, r.y), interpolate_3(ratio, l.width, r.width), interpolate_3(ratio, l.height, r.height));
  };
  Rectangle.prototype.getAnchoredPosition_uv9eql$ = function (anchor, out) {
    if (out === void 0)
      out = new MVector2();
    return out.setTo_lu1900$(this.left + this.width * anchor.sx, this.top + this.height * anchor.sy);
  };
  Rectangle.prototype.toInt = function () {
    var x = this.x;
    var y = this.y;
    var width = this.width;
    var height = this.height;
    return RectangleInt_init(numberToInt(x), numberToInt(y), numberToInt(width), numberToInt(height));
  };
  Rectangle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rectangle',
    interfaces: [Sizeable, IRectangle, Interpolable, MutableInterpolable]
  };
  function Rectangle_init(x, y, width, height, $this) {
    $this = $this || Object.create(Rectangle.prototype);
    Rectangle.call($this, x, y, width, height);
    return $this;
  }
  Rectangle.prototype.component1 = function () {
    return this.x;
  };
  Rectangle.prototype.component2 = function () {
    return this.y;
  };
  Rectangle.prototype.component3 = function () {
    return this.width;
  };
  Rectangle.prototype.component4 = function () {
    return this.height;
  };
  Rectangle.prototype.copy_6y0v78$ = function (x, y, width, height) {
    return new Rectangle(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Rectangle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Rectangle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  var Rectangle_0 = defineInlineFunction('korma-js.com.soywiz.korma.geom.Rectangle_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Rectangle_init = _.com.soywiz.korma.geom.Rectangle;
    return function (x, y, width, height) {
      return new Rectangle_init(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  var IRectangle_0 = defineInlineFunction('korma-js.com.soywiz.korma.geom.IRectangle_1ugm5o$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Rectangle$Rectangle$Immutable_init = _.com.soywiz.korma.geom.Rectangle.Immutable;
    return function (x, y, width, height) {
      return new Rectangle$Rectangle$Immutable_init(numberToDouble(x), numberToDouble(y), numberToDouble(width), numberToDouble(height));
    };
  }));
  function bounds($receiver, target) {
    if (target === void 0)
      target = new Rectangle();
    var tmp$;
    var first = true;
    var left = 0.0;
    var right = 0.0;
    var top = 0.0;
    var bottom = 0.0;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var r = tmp$.next();
      if (first) {
        left = r.left;
        right = r.right;
        top = r.top;
        bottom = r.bottom;
        first = false;
      }
       else {
        left = Math_getInstance().min_lu1900$(left, r.left);
        right = Math_getInstance().max_lu1900$(right, r.right);
        top = Math_getInstance().min_lu1900$(top, r.top);
        bottom = Math_getInstance().max_lu1900$(bottom, r.bottom);
      }
    }
    return target.setBounds_6y0v78$(left, top, right, bottom);
  }
  function IRectangleInt() {
  }
  IRectangleInt.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'IRectangleInt',
    interfaces: []
  };
  function RectangleInt(position, size) {
    RectangleInt$Companion_getInstance();
    this.position = position;
    this.size = size;
  }
  function RectangleInt$Companion() {
    RectangleInt$Companion_instance = this;
  }
  RectangleInt$Companion.prototype.fromBounds_tjonv8$ = function (left, top, right, bottom) {
    return RectangleInt_init(left, top, right - left | 0, bottom - top | 0);
  };
  RectangleInt$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var RectangleInt$Companion_instance = null;
  function RectangleInt$Companion_getInstance() {
    if (RectangleInt$Companion_instance === null) {
      new RectangleInt$Companion();
    }
    return RectangleInt$Companion_instance;
  }
  function RectangleInt$Immutable(x, y, width, height) {
    this.x_ee4i38$_0 = x;
    this.y_ee4i2d$_0 = y;
    this.width_96lvj2$_0 = width;
    this.height_8bvxx3$_0 = height;
  }
  Object.defineProperty(RectangleInt$Immutable.prototype, 'x', {
    get: function () {
      return this.x_ee4i38$_0;
    }
  });
  Object.defineProperty(RectangleInt$Immutable.prototype, 'y', {
    get: function () {
      return this.y_ee4i2d$_0;
    }
  });
  Object.defineProperty(RectangleInt$Immutable.prototype, 'width', {
    get: function () {
      return this.width_96lvj2$_0;
    }
  });
  Object.defineProperty(RectangleInt$Immutable.prototype, 'height', {
    get: function () {
      return this.height_8bvxx3$_0;
    }
  });
  RectangleInt$Immutable.prototype.toMutable = function () {
    return RectangleInt_init(this.x, this.y, this.width, this.height);
  };
  RectangleInt$Immutable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Immutable',
    interfaces: [IRectangleInt]
  };
  RectangleInt$Immutable.prototype.component1 = function () {
    return this.x;
  };
  RectangleInt$Immutable.prototype.component2 = function () {
    return this.y;
  };
  RectangleInt$Immutable.prototype.component3 = function () {
    return this.width;
  };
  RectangleInt$Immutable.prototype.component4 = function () {
    return this.height;
  };
  RectangleInt$Immutable.prototype.copy_tjonv8$ = function (x, y, width, height) {
    return new RectangleInt$Immutable(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  RectangleInt$Immutable.prototype.toString = function () {
    return 'Immutable(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', width=' + Kotlin.toString(this.width)) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  RectangleInt$Immutable.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  RectangleInt$Immutable.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  RectangleInt.prototype.toImmutable = function () {
    return new RectangleInt$Immutable(this.x, this.y, this.width, this.height);
  };
  Object.defineProperty(RectangleInt.prototype, 'x', {
    get: function () {
      return this.position.x;
    },
    set: function (value) {
      this.position.x = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'y', {
    get: function () {
      return this.position.y;
    },
    set: function (value) {
      this.position.y = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'width', {
    get: function () {
      return this.size.width;
    },
    set: function (value) {
      this.size.width = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'height', {
    get: function () {
      return this.size.height;
    },
    set: function (value) {
      this.size.height = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'left', {
    get: function () {
      return this.x;
    },
    set: function (value) {
      this.x = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'top', {
    get: function () {
      return this.y;
    },
    set: function (value) {
      this.y = value;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'right', {
    get: function () {
      return this.x + this.width | 0;
    },
    set: function (value) {
      this.width = value - this.x | 0;
    }
  });
  Object.defineProperty(RectangleInt.prototype, 'bottom', {
    get: function () {
      return this.y + this.height | 0;
    },
    set: function (value) {
      this.height = value - this.y | 0;
    }
  });
  RectangleInt.prototype.setTo_t9mhyo$ = function (that) {
    return this.setTo_tjonv8$(that.x, that.y, that.width, that.height);
  };
  RectangleInt.prototype.setTo_tjonv8$ = function (x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    return this;
  };
  RectangleInt.prototype.setPosition_vux9f0$ = function (x, y) {
    this.position.setTo_vux9f0$(x, y);
    return this;
  };
  RectangleInt.prototype.setSize_vux9f0$ = function (width, height) {
    this.size.setTo_vux9f0$(width, height);
    this.width = width;
    this.height = height;
    return this;
  };
  RectangleInt.prototype.setBoundsTo_tjonv8$ = function (left, top, right, bottom) {
    return this.setTo_tjonv8$(left, top, right - left | 0, bottom - top | 0);
  };
  RectangleInt.prototype.anchoredIn_t311vp$ = function (container, anchor, out) {
    if (out === void 0)
      out = RectangleInt_init();
    return out.setTo_tjonv8$(numberToInt((container.width - this.width | 0) * anchor.sx), numberToInt((container.height - this.height | 0) * anchor.sy), this.width, this.height);
  };
  RectangleInt.prototype.getAnchorPosition_xjeoya$ = function (anchor, out) {
    if (out === void 0)
      out = new MVector2Int();
    return out.setTo_vux9f0$(numberToInt(this.x + this.width * anchor.sx), numberToInt(this.y + this.height * anchor.sy));
  };
  RectangleInt.prototype.contains_s0sc4i$ = function (v) {
    return v.width <= this.width && v.height <= this.height;
  };
  RectangleInt.prototype.toDouble = function () {
    return Rectangle_init(this.x, this.y, this.width, this.height);
  };
  RectangleInt.prototype.toString = function () {
    return 'IRectangle(x=' + this.x + ', y=' + this.y + ', width=' + this.width + ', height=' + this.height + ')';
  };
  RectangleInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'RectangleInt',
    interfaces: [IRectangleInt]
  };
  function RectangleInt_init(x, y, width, height, $this) {
    if (x === void 0)
      x = 0;
    if (y === void 0)
      y = 0;
    if (width === void 0)
      width = 0;
    if (height === void 0)
      height = 0;
    $this = $this || Object.create(RectangleInt.prototype);
    RectangleInt.call($this, new MVector2Int(x, y), new SizeInt(width, height));
    return $this;
  }
  RectangleInt.prototype.component1 = function () {
    return this.position;
  };
  RectangleInt.prototype.component2 = function () {
    return this.size;
  };
  RectangleInt.prototype.copy_gospkz$ = function (position, size) {
    return new RectangleInt(position === void 0 ? this.position : position, size === void 0 ? this.size : size);
  };
  RectangleInt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.position) | 0;
    result = result * 31 + Kotlin.hashCode(this.size) | 0;
    return result;
  };
  RectangleInt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.position, other.position) && Kotlin.equals(this.size, other.size)))));
  };
  function get_int_0($receiver) {
    var x = $receiver.x;
    var y = $receiver.y;
    var width = $receiver.width;
    var height = $receiver.height;
    return RectangleInt_init(numberToInt(x), numberToInt(y), numberToInt(width), numberToInt(height));
  }
  function get_double_0($receiver) {
    return Rectangle_init($receiver.x, $receiver.y, $receiver.width, $receiver.height);
  }
  function anchor($receiver, ax, ay) {
    return PointInt(numberToInt($receiver.x + $receiver.width * ax), numberToInt($receiver.y + $receiver.height * ay));
  }
  function get_center($receiver) {
    return anchor($receiver, 0.5, 0.5);
  }
  var RectangleInt_0 = defineInlineFunction('korma-js.com.soywiz.korma.geom.RectangleInt_1ugm5o$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    var RectangleInt_init = _.com.soywiz.korma.geom.RectangleInt_init_tjonv8$;
    return function (x, y, width, height) {
      return RectangleInt_init(numberToInt(x), numberToInt(y), numberToInt(width), numberToInt(height));
    };
  }));
  var IRectangleInt_0 = defineInlineFunction('korma-js.com.soywiz.korma.geom.IRectangleInt_1ugm5o$', wrapFunction(function () {
    var numberToInt = Kotlin.numberToInt;
    var RectangleInt$RectangleInt$Immutable_init = _.com.soywiz.korma.geom.RectangleInt.Immutable;
    return function (x, y, width, height) {
      return new RectangleInt$RectangleInt$Immutable_init(numberToInt(x), numberToInt(y), numberToInt(width), numberToInt(height));
    };
  }));
  function ScaleMode(f) {
    ScaleMode$Companion_getInstance();
    this.f_0 = f;
  }
  ScaleMode.prototype.invoke_n3lmo2$ = function (item, container, target) {
    if (target === void 0)
      target = new SizeInt();
    this.f_0(item, container, target);
    return target;
  };
  function ScaleMode$Companion() {
    ScaleMode$Companion_instance = this;
    this.COVER = new ScaleMode(ScaleMode$Companion$COVER$lambda);
    this.SHOW_ALL = new ScaleMode(ScaleMode$Companion$SHOW_ALL$lambda);
    this.EXACT = new ScaleMode(ScaleMode$Companion$EXACT$lambda);
    this.NO_SCALE = new ScaleMode(ScaleMode$Companion$NO_SCALE$lambda);
  }
  function ScaleMode$Companion$COVER$lambda(item, container, target) {
    var s0 = container.width / item.width;
    var s1 = container.height / item.height;
    target.setTo_s0sc4i$(item).setToScaled_lu1900$(Math_getInstance().max_lu1900$(s0, s1));
    return Unit;
  }
  function ScaleMode$Companion$SHOW_ALL$lambda(item, container, target) {
    var s0 = container.width / item.width;
    var s1 = container.height / item.height;
    target.setTo_s0sc4i$(item).setToScaled_lu1900$(Math_getInstance().min_lu1900$(s0, s1));
    return Unit;
  }
  function ScaleMode$Companion$EXACT$lambda(item, container, target) {
    target.setTo_s0sc4i$(container);
    return Unit;
  }
  function ScaleMode$Companion$NO_SCALE$lambda(item, container, target) {
    target.setTo_s0sc4i$(item);
    return Unit;
  }
  ScaleMode$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ScaleMode$Companion_instance = null;
  function ScaleMode$Companion_getInstance() {
    if (ScaleMode$Companion_instance === null) {
      new ScaleMode$Companion();
    }
    return ScaleMode$Companion_instance;
  }
  ScaleMode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ScaleMode',
    interfaces: []
  };
  function ISize() {
  }
  ISize.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'ISize',
    interfaces: []
  };
  function Size(width, height) {
    this.width_emdk4x$_0 = width;
    this.height_i6q4ye$_0 = height;
    this.size_e5pubg$_0 = this;
  }
  Object.defineProperty(Size.prototype, 'width', {
    get: function () {
      return this.width_emdk4x$_0;
    },
    set: function (width) {
      this.width_emdk4x$_0 = width;
    }
  });
  Object.defineProperty(Size.prototype, 'height', {
    get: function () {
      return this.height_i6q4ye$_0;
    },
    set: function (height) {
      this.height_i6q4ye$_0 = height;
    }
  });
  function Size$Immutable(width, height) {
    this.width_n584cj$_0 = width;
    this.height_g352gm$_0 = height;
  }
  Object.defineProperty(Size$Immutable.prototype, 'width', {
    get: function () {
      return this.width_n584cj$_0;
    }
  });
  Object.defineProperty(Size$Immutable.prototype, 'height', {
    get: function () {
      return this.height_g352gm$_0;
    }
  });
  Size$Immutable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Immutable',
    interfaces: [ISize]
  };
  Size$Immutable.prototype.component1 = function () {
    return this.width;
  };
  Size$Immutable.prototype.component2 = function () {
    return this.height;
  };
  Size$Immutable.prototype.copy_lu1900$ = function (width, height) {
    return new Size$Immutable(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Size$Immutable.prototype.toString = function () {
    return 'Immutable(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  Size$Immutable.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Size$Immutable.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  Object.defineProperty(Size.prototype, 'size', {
    get: function () {
      return this.size_e5pubg$_0;
    }
  });
  Size.prototype.setTo_lu1900$ = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  };
  Object.defineProperty(Size.prototype, 'area', {
    get: function () {
      return this.width * this.height;
    }
  });
  Object.defineProperty(Size.prototype, 'perimeter', {
    get: function () {
      return this.width * 2 + this.height * 2;
    }
  });
  Object.defineProperty(Size.prototype, 'min', {
    get: function () {
      return Math_getInstance().min_lu1900$(this.width, this.height);
    }
  });
  Object.defineProperty(Size.prototype, 'max', {
    get: function () {
      return Math_getInstance().max_lu1900$(this.width, this.height);
    }
  });
  Size.prototype.clone = function () {
    return new Size(this.width, this.height);
  };
  Size.prototype.interpolateWith_e37ph5$ = function (other, ratio) {
    return (new Size(numberToDouble(0), numberToDouble(0))).setToInterpolated_v05y7o$(this, other, ratio);
  };
  Size.prototype.setToInterpolated_v05y7o$ = function (l, r, ratio) {
    return this.setTo_lu1900$(interpolate_3(ratio, l.width, r.width), interpolate_3(ratio, l.height, r.height));
  };
  Size.prototype.toString = function () {
    var $receiver = package$korma.KormaStr;
    return 'Size(width=' + $receiver.get_niceStr_yrwdxr$(this.width) + ', height=' + $receiver.get_niceStr_yrwdxr$(this.height) + ')';
  };
  Size.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Size',
    interfaces: [ISize, Sizeable, Interpolable, MutableInterpolable]
  };
  Size.prototype.component1 = function () {
    return this.width;
  };
  Size.prototype.component2 = function () {
    return this.height;
  };
  Size.prototype.copy_lu1900$ = function (width, height) {
    return new Size(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Size.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Size.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  var Size_0 = defineInlineFunction('korma-js.com.soywiz.korma.geom.Size_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Size_init = _.com.soywiz.korma.geom.Size;
    return function (width, height) {
      return new Size_init(numberToDouble(width), numberToDouble(height));
    };
  }));
  var ISize_0 = defineInlineFunction('korma-js.com.soywiz.korma.geom.ISize_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Size$Size$Immutable_init = _.com.soywiz.korma.geom.Size.Immutable;
    return function (width, height) {
      return new Size$Size$Immutable_init(numberToDouble(width), numberToDouble(height));
    };
  }));
  function Sizeable() {
  }
  Sizeable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Sizeable',
    interfaces: []
  };
  function SizeInt(width, height) {
    if (width === void 0)
      width = 0;
    if (height === void 0)
      height = width;
    this.width = width;
    this.height = height;
  }
  SizeInt.prototype.contains_s0sc4i$ = function (v) {
    return v.width <= this.width && v.height <= this.height;
  };
  SizeInt.prototype.times_14dthe$ = function (v) {
    return new SizeInt(numberToInt(this.width * v), numberToInt(this.height * v));
  };
  SizeInt.prototype.setTo_vux9f0$ = function (width, height) {
    this.width = width;
    this.height = height;
    return this;
  };
  SizeInt.prototype.setTo_s0sc4i$ = function (that) {
    return this.setTo_vux9f0$(that.width, that.height);
  };
  SizeInt.prototype.applyScaleMode_l1tb1d$ = function (container, mode, out) {
    if (out === void 0)
      out = new SizeInt();
    return mode.invoke_n3lmo2$(this, container, out);
  };
  SizeInt.prototype.fitTo_cj9t00$ = function (container, out) {
    if (out === void 0)
      out = new SizeInt();
    return this.applyScaleMode_l1tb1d$(container, ScaleMode$Companion_getInstance().SHOW_ALL, out);
  };
  SizeInt.prototype.setToScaled_lu1900$ = function (sx, sy) {
    if (sy === void 0)
      sy = sx;
    return this.setTo_vux9f0$(numberToInt(this.width * sx), numberToInt(this.height * sy));
  };
  SizeInt.prototype.anchoredIn_t311vp$ = function (container, anchor, out) {
    if (out === void 0)
      out = RectangleInt_init();
    return out.setTo_tjonv8$(numberToInt((container.width - this.width | 0) * anchor.sx), numberToInt((container.height - this.height | 0) * anchor.sy), this.width, this.height);
  };
  SizeInt.prototype.getAnchorPosition_xjeoya$ = function (anchor, out) {
    if (out === void 0)
      out = new MVector2Int();
    return out.setTo_vux9f0$(numberToInt(this.width * anchor.sx), numberToInt(this.height * anchor.sy));
  };
  SizeInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SizeInt',
    interfaces: []
  };
  SizeInt.prototype.component1 = function () {
    return this.width;
  };
  SizeInt.prototype.component2 = function () {
    return this.height;
  };
  SizeInt.prototype.copy_vux9f0$ = function (width, height) {
    return new SizeInt(width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  SizeInt.prototype.toString = function () {
    return 'SizeInt(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + ')';
  };
  SizeInt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  SizeInt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  function bounds_0($receiver, out) {
    if (out === void 0)
      out = new Rectangle();
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_6;
    tmp$_6 = $receiver.iterator();
    while (tmp$_6.hasNext()) {
      var item = tmp$_6.next();
      destination.add_11rb$(item.x);
    }
    tmp$_0 = (tmp$ = min(destination)) != null ? tmp$ : 0.0;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_7;
    tmp$_7 = $receiver.iterator();
    while (tmp$_7.hasNext()) {
      var item_0 = tmp$_7.next();
      destination_0.add_11rb$(item_0.y);
    }
    tmp$_2 = (tmp$_1 = min(destination_0)) != null ? tmp$_1 : 0.0;
    var destination_1 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_8;
    tmp$_8 = $receiver.iterator();
    while (tmp$_8.hasNext()) {
      var item_1 = tmp$_8.next();
      destination_1.add_11rb$(item_1.x);
    }
    tmp$_4 = (tmp$_3 = max(destination_1)) != null ? tmp$_3 : 0.0;
    var destination_2 = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_9;
    tmp$_9 = $receiver.iterator();
    while (tmp$_9.hasNext()) {
      var item_2 = tmp$_9.next();
      destination_2.add_11rb$(item_2.y);
    }
    return out.setBounds_6y0v78$(tmp$_0, tmp$_2, tmp$_4, (tmp$_5 = max(destination_2)) != null ? tmp$_5 : 0.0);
  }
  function VectorPath(commands, data, winding) {
    if (commands === void 0)
      commands = new IntArrayList();
    if (data === void 0)
      data = new DoubleArrayList();
    if (winding === void 0)
      winding = VectorPath$Winding$EVEN_ODD_getInstance();
    this.commands = commands;
    this.data = data;
    this.winding = winding;
    this.lastX_sawik2$_0 = 0.0;
    this.lastY_sawij7$_0 = 0.0;
    this.p1_ilz4cd$_0 = new MVector2();
    this.p2_ilz4bi$_0 = new MVector2();
  }
  VectorPath.prototype.clone = function () {
    return new VectorPath(IntArrayList_init(this.commands), DoubleArrayList_init(this.data), this.winding);
  };
  function VectorPath$Visitor() {
  }
  VectorPath$Visitor.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Visitor',
    interfaces: []
  };
  VectorPath.prototype.visitCmds_4dsjb9$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.VectorPath.visitCmds_4dsjb9$', function (moveTo, lineTo, quadTo, cubicTo, close) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var n = 0;
    tmp$ = this.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      switch (cmd) {
        case 1:
          var x = this.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          var y = this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
          moveTo(x, y);
          break;
        case 2:
          var x_0 = this.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = this.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
          lineTo(x_0, y_0);
          break;
        case 3:
          var x1 = this.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = this.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = this.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = this.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
          quadTo(x1, y1, x2, y2);
          break;
        case 4:
          var x1_0 = this.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = this.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = this.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = this.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = this.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = this.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
          cubicTo(x1_0, y1_0, x2_0, y2_0, x3, y3);
          break;
        case 5:
          close();
          break;
      }
    }
  });
  VectorPath.prototype.visitEdges_slnxdm$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.VectorPath.visitEdges_slnxdm$', wrapFunction(function () {
    return function (line, quad, cubic, close) {
      var mx = {v: 0.0};
      var my = {v: 0.0};
      var lx = {v: 0.0};
      var ly = {v: 0.0};
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
      var n = 0;
      tmp$ = this.commands.iterator();
      while (tmp$.hasNext()) {
        var cmd = tmp$.next();
        switch (cmd) {
          case 1:
            var x = this.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
            var y = this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
            mx.v = x;
            my.v = y;
            lx.v = x;
            ly.v = y;
            break;
          case 2:
            var x_0 = this.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
            var y_0 = this.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
            line(lx.v, ly.v, x_0, y_0);
            lx.v = x_0;
            ly.v = y_0;
            break;
          case 3:
            var x1 = this.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
            var y1 = this.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
            var x2 = this.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
            var y2 = this.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
            quad(lx.v, ly.v, x1, y1, x2, y2);
            lx.v = x2;
            ly.v = y2;
            break;
          case 4:
            var x1_0 = this.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
            var y1_0 = this.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
            var x2_0 = this.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
            var y2_0 = this.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
            var x3 = this.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
            var y3 = this.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
            cubic(lx.v, ly.v, x1_0, y1_0, x2_0, y2_0, x3, y3);
            lx.v = x3;
            ly.v = y3;
            break;
          case 5:
            if (lx.v !== mx.v || ly.v !== my.v) {
              line(lx.v, ly.v, mx.v, my.v);
            }

            close();
            break;
        }
      }
    };
  }));
  VectorPath.prototype.visit_b0d9tk$ = function (visitor) {
    var moveTo = getCallableRef('moveTo', function ($receiver, x, y) {
      return $receiver.moveTo_lu1900$(x, y), Unit;
    }.bind(null, visitor));
    var lineTo = getCallableRef('lineTo', function ($receiver, x, y) {
      return $receiver.lineTo_lu1900$(x, y), Unit;
    }.bind(null, visitor));
    var quadTo = getCallableRef('quadTo', function ($receiver, cx, cy, ax, ay) {
      return $receiver.quadTo_6y0v78$(cx, cy, ax, ay), Unit;
    }.bind(null, visitor));
    var cubicTo = getCallableRef('cubicTo', function ($receiver, cx1, cy1, cx2, cy2, ax, ay) {
      return $receiver.cubicTo_15yvbs$(cx1, cy1, cx2, cy2, ax, ay), Unit;
    }.bind(null, visitor));
    var close = getCallableRef('close', function ($receiver) {
      return $receiver.close(), Unit;
    }.bind(null, visitor));
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var n = 0;
    tmp$ = this.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      switch (cmd) {
        case 1:
          var x = this.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          var y = this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
          moveTo(x, y);
          break;
        case 2:
          var x_0 = this.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = this.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
          lineTo(x_0, y_0);
          break;
        case 3:
          var x1 = this.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = this.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = this.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = this.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
          quadTo(x1, y1, x2, y2);
          break;
        case 4:
          var x1_0 = this.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = this.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = this.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = this.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = this.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = this.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
          cubicTo(x1_0, y1_0, x2_0, y2_0, x3, y3);
          break;
        case 5:
          close();
          break;
      }
    }
  };
  VectorPath.prototype.isEmpty = function () {
    return this.commands.isEmpty();
  };
  VectorPath.prototype.isNotEmpty = function () {
    return !this.commands.isEmpty();
  };
  VectorPath.prototype.clear = function () {
    this.commands.clear();
    this.data.clear();
  };
  Object.defineProperty(VectorPath.prototype, 'lastX', {
    get: function () {
      return this.lastX_sawik2$_0;
    },
    set: function (lastX) {
      this.lastX_sawik2$_0 = lastX;
    }
  });
  Object.defineProperty(VectorPath.prototype, 'lastY', {
    get: function () {
      return this.lastY_sawij7$_0;
    },
    set: function (lastY) {
      this.lastY_sawij7$_0 = lastY;
    }
  });
  VectorPath.prototype.moveTo_r62tv1$ = function (p) {
    this.moveTo_lu1900$(p.x, p.y);
  };
  VectorPath.prototype.lineTo_r62tv1$ = function (p) {
    this.lineTo_lu1900$(p.x, p.y);
  };
  VectorPath.prototype.moveTo_lu1900$ = function (x, y) {
    this.commands.plusAssign_za3lpa$(VectorPath$Command_getInstance().MOVE_TO);
    this.data.plusAssign_14dthe$(x);
    this.data.plusAssign_14dthe$(y);
    this.lastX = x;
    this.lastY = y;
  };
  VectorPath.prototype.moveTo_vux9f0$ = function (x, y) {
    this.moveTo_lu1900$(x, y);
  };
  VectorPath.prototype.moveToH_14dthe$ = function (x) {
    this.moveTo_lu1900$(x, this.lastY);
  };
  VectorPath.prototype.rMoveToH_14dthe$ = function (x) {
    this.moveTo_lu1900$(this.lastX + x, this.lastY);
  };
  VectorPath.prototype.moveToV_14dthe$ = function (y) {
    this.moveTo_lu1900$(this.lastX, y);
  };
  VectorPath.prototype.rMoveToV_14dthe$ = function (y) {
    this.moveTo_lu1900$(this.lastX, this.lastY + y);
  };
  VectorPath.prototype.lineToH_14dthe$ = function (x) {
    this.lineTo_lu1900$(x, this.lastY);
  };
  VectorPath.prototype.rLineToH_14dthe$ = function (x) {
    this.lineTo_lu1900$(this.lastX + x, this.lastY);
  };
  VectorPath.prototype.lineToV_14dthe$ = function (y) {
    this.lineTo_lu1900$(this.lastX, y);
  };
  VectorPath.prototype.rLineToV_14dthe$ = function (y) {
    this.lineTo_lu1900$(this.lastX, this.lastY + y);
  };
  VectorPath.prototype.rMoveTo_lu1900$ = function (x, y) {
    this.moveTo_lu1900$(this.lastX + x, this.lastY + y);
  };
  VectorPath.prototype.rLineTo_lu1900$ = function (x, y) {
    this.lineTo_lu1900$(this.lastX + x, this.lastY + y);
  };
  VectorPath.prototype.rQuadTo_6y0v78$ = function (cx, cy, ax, ay) {
    this.quadTo_6y0v78$(this.lastX + cx, this.lastY + cy, this.lastX + ax, this.lastY + ay);
  };
  VectorPath.prototype.rCubicTo_15yvbs$ = function (cx1, cy1, cx2, cy2, ax, ay) {
    this.cubicTo_15yvbs$(this.lastX + cx1, this.lastY + cy1, this.lastX + cx2, this.lastY + cy2, this.lastX + ax, this.lastY + ay);
  };
  VectorPath.prototype.ensureMoveTo_okp98q$_0 = function (x, y) {
    if (this.isEmpty()) {
      this.moveTo_lu1900$(x, y);
    }
  };
  VectorPath.prototype.lineTo_lu1900$ = function (x, y) {
    this.ensureMoveTo_okp98q$_0(x, y);
    this.commands.plusAssign_za3lpa$(VectorPath$Command_getInstance().LINE_TO);
    this.data.plusAssign_14dthe$(x);
    this.data.plusAssign_14dthe$(y);
    this.lastX = x;
    this.lastY = y;
  };
  VectorPath.prototype.lineTo_vux9f0$ = function (x, y) {
    this.lineTo_lu1900$(x, y);
  };
  VectorPath.prototype.quadTo_tjonv8$ = function (controlX, controlY, anchorX, anchorY) {
    this.quadTo_6y0v78$(controlX, controlY, anchorX, anchorY);
  };
  VectorPath.prototype.cubicTo_mbbjvw$ = function (cx1, cy1, cx2, cy2, ax, ay) {
    this.cubicTo_15yvbs$(cx1, cy1, cx2, cy2, ax, ay);
  };
  VectorPath.prototype.quadTo_6y0v78$ = function (controlX, controlY, anchorX, anchorY) {
    this.ensureMoveTo_okp98q$_0(controlX, controlY);
    this.commands.plusAssign_za3lpa$(VectorPath$Command_getInstance().QUAD_TO);
    this.data.plusAssign_14dthe$(controlX);
    this.data.plusAssign_14dthe$(controlY);
    this.data.plusAssign_14dthe$(anchorX);
    this.data.plusAssign_14dthe$(anchorY);
    this.lastX = anchorX;
    this.lastY = anchorY;
  };
  VectorPath.prototype.cubicTo_15yvbs$ = function (cx1, cy1, cx2, cy2, ax, ay) {
    this.ensureMoveTo_okp98q$_0(cx1, cy1);
    this.commands.plusAssign_za3lpa$(VectorPath$Command_getInstance().BEZIER_TO);
    this.data.plusAssign_14dthe$(cx1);
    this.data.plusAssign_14dthe$(cy1);
    this.data.plusAssign_14dthe$(cx2);
    this.data.plusAssign_14dthe$(cy2);
    this.data.plusAssign_14dthe$(ax);
    this.data.plusAssign_14dthe$(ay);
    this.lastX = ax;
    this.lastY = ay;
  };
  VectorPath.prototype.arcTo_1lq62i$ = function (ax, ay, cx, cy, r) {
    this.ensureMoveTo_okp98q$_0(ax, ay);
    var bx = this.lastX;
    var by = this.lastY;
    var b = new IVector2(numberToDouble(bx), numberToDouble(by));
    var a = new IVector2(numberToDouble(ax), numberToDouble(ay));
    var c = new IVector2(numberToDouble(cx), numberToDouble(cy));
    var PI_DIV_2 = math.PI / 2.0;
    var AB = minus(b, a);
    var AC = minus(c, a);
    var angle = Vector2$Companion_getInstance().angle_g6xq6k$(AB, AC) * 0.5;
    var x = PI_DIV_2 - angle;
    var x_0 = r * Math_0.sin(x) / Math_0.sin(angle);
    var A = plus(a, times_0(get_unit_0(AB), x_0));
    var B = plus(a, times_0(get_unit_0(AC), x_0));
    this.lineTo_lu1900$(A.x, A.y);
    this.quadTo_6y0v78$(a.x, a.y, B.x, B.y);
  };
  VectorPath.prototype.close = function () {
    this.commands.plusAssign_za3lpa$(VectorPath$Command_getInstance().CLOSE);
  };
  VectorPath.prototype.rect_6y0v78$ = function (x, y, width, height) {
    this.moveTo_lu1900$(x, y);
    this.lineTo_lu1900$(x + width, y);
    this.lineTo_lu1900$(x + width, y + height);
    this.lineTo_lu1900$(x, y + height);
    this.close();
  };
  VectorPath.prototype.rectHole_6y0v78$ = function (x, y, width, height) {
    this.moveTo_lu1900$(x, y);
    this.lineTo_lu1900$(x, y + height);
    this.lineTo_lu1900$(x + width, y + height);
    this.lineTo_lu1900$(x + width, y);
    this.close();
  };
  VectorPath.prototype.roundRect_15yvbs$ = function (x, y, w, h, rx, ry) {
    if (ry === void 0)
      ry = rx;
    if (rx === 0.0 && ry === 0.0) {
      this.rect_6y0v78$(x, y, w, h);
    }
     else {
      var r = w < 2 * rx ? w / 2.0 : h < 2 * rx ? h / 2.0 : rx;
      this.moveTo_lu1900$(x + r, y);
      this.arcTo_1lq62i$(x + w, y, x + w, y + h, r);
      this.arcTo_1lq62i$(x + w, y + h, x, y + h, r);
      this.arcTo_1lq62i$(x, y + h, x, y, r);
      this.arcTo_1lq62i$(x, y, x + w, y, r);
    }
  };
  VectorPath.prototype.arc_1lq62i$ = function (x, y, r, start, end) {
    var EPSILON = 1.0E-5;
    var PI_TWO = math.PI * 2;
    var PI_OVER_TWO = math.PI / 2.0;
    var startAngle = start % PI_TWO;
    var endAngle = end % PI_TWO;
    var tmp$ = Math_getInstance();
    var x_0 = endAngle - startAngle;
    var remainingAngle = tmp$.min_lu1900$(PI_TWO, Math_0.abs(x_0));
    if (remainingAngle === 0.0 && start !== end)
      remainingAngle = PI_TWO;
    var sgn = startAngle < endAngle ? 1 : -1;
    var a1 = startAngle;
    var p1 = new MVector2();
    var p2 = new MVector2();
    var p3 = new MVector2();
    var p4 = new MVector2();
    var index = 0;
    while (remainingAngle > EPSILON) {
      var a2 = a1 + sgn * Math_getInstance().min_lu1900$(remainingAngle, PI_OVER_TWO);
      var k = 0.5522847498;
      var a = (a2 - a1) / 2.0;
      var x4 = r * Math_0.cos(a);
      var y4 = r * Math_0.sin(a);
      var x1 = x4;
      var y1 = -y4;
      var f = k * Math_0.tan(a);
      var x2 = x1 + f * y4;
      var y2 = y1 + f * x4;
      var x3 = x2;
      var y3 = -y2;
      var ar = a + a1;
      var cos_ar = Math_0.cos(ar);
      var sin_ar = Math_0.sin(ar);
      var x_1 = a1;
      var tmp$_0 = x + r * Math_0.cos(x_1);
      var x_2 = a1;
      p1.setTo_lu1900$(tmp$_0, y + r * Math_0.sin(x_2));
      p2.setTo_lu1900$(x + x2 * cos_ar - y2 * sin_ar, y + x2 * sin_ar + y2 * cos_ar);
      p3.setTo_lu1900$(x + x3 * cos_ar - y3 * sin_ar, y + x3 * sin_ar + y3 * cos_ar);
      p4.setTo_lu1900$(x + r * Math_0.cos(a2), y + r * Math_0.sin(a2));
      if (index === 0)
        this.moveTo_lu1900$(p1.x, p1.y);
      this.cubicTo_15yvbs$(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
      index = index + 1 | 0;
      var x_3 = a2 - a1;
      remainingAngle -= Math_0.abs(x_3);
      a1 = a2;
    }
    if (startAngle === endAngle && index !== 0) {
      this.close();
    }
  };
  VectorPath.prototype.circle_yvo9jy$ = function (x, y, radius) {
    this.arc_1lq62i$(x, y, radius, 0.0, math.PI * 2.0);
  };
  VectorPath.prototype.ellipse_6y0v78$ = function (x, y, rw, rh) {
    var k = 0.5522848;
    var ox = rw / 2 * k;
    var oy = rh / 2 * k;
    var xe = x + rw;
    var ye = y + rh;
    var xm = x + rw / 2;
    var ym = y + rh / 2;
    this.moveTo_lu1900$(x, ym);
    this.cubicTo_15yvbs$(x, ym - oy, xm - ox, y, xm, y);
    this.cubicTo_15yvbs$(xm + ox, y, xe, ym - oy, xe, ym);
    this.cubicTo_15yvbs$(xe, ym + oy, xm + ox, ye, xm, ye);
    this.cubicTo_15yvbs$(xm - ox, ye, x, ym + oy, x, ym);
  };
  VectorPath.prototype.addBounds_w97n1m$ = function (bb) {
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var n = 0;
    tmp$ = this.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      switch (cmd) {
        case 1:
          var x = this.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          var y = this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
          bb.add_lu1900$(x, y);
          lx.v = x;
          ly.v = y;
          break;
        case 2:
          var x_0 = this.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = this.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
          bb.add_lu1900$(x_0, y_0);
          lx.v = x_0;
          ly.v = y_0;
          break;
        case 3:
          var x1 = this.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = this.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = this.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = this.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
          bb.add_2da8yn$(Bezier$Companion_getInstance().quadBounds_c5pgzv$(lx.v, ly.v, x1, y1, x2, y2, bb.tempRect));
          lx.v = x2;
          ly.v = y2;
          break;
        case 4:
          var x1_0 = this.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = this.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = this.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = this.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = this.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = this.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
          bb.add_2da8yn$(Bezier$Companion_getInstance().cubicBounds_c8cm1d$(lx.v, ly.v, x1_0, y1_0, x2_0, y2_0, x3, y3, bb.tempRect));
          lx.v = x3;
          ly.v = y3;
          break;
        case 5:
          break;
      }
    }
  };
  VectorPath.prototype.getBounds_iqjpvb$ = function (out, bb) {
    if (out === void 0)
      out = new Rectangle();
    if (bb === void 0)
      bb = new BoundsBuilder();
    bb.reset();
    this.addBounds_w97n1m$(bb);
    return bb.getBounds_2da8yn$(out);
  };
  VectorPath.prototype.getPoints = function () {
    var points = ArrayList_init_0();
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var n = 0;
    tmp$ = this.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      switch (cmd) {
        case 1:
          var x = this.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          var y = this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
          var element = new IVector2(numberToDouble(x), numberToDouble(y));
          points.add_11rb$(element);
          break;
        case 2:
          var x_0 = this.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = this.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
          var element_0 = new IVector2(numberToDouble(x_0), numberToDouble(y_0));
          points.add_11rb$(element_0);
          break;
        case 3:
          var x1 = this.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = this.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = this.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = this.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
          var element_1 = new IVector2(numberToDouble(x2), numberToDouble(y2));
          points.add_11rb$(element_1);
          break;
        case 4:
          var x1_0 = this.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = this.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = this.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = this.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = this.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = this.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
          var element_2 = new IVector2(numberToDouble(x3), numberToDouble(y3));
          points.add_11rb$(element_2);
          break;
        case 5:
          break;
      }
    }
    return points;
  };
  VectorPath.prototype.containsPoint_lu1900$ = function (x, y) {
    var testx = x;
    var testy = y;
    var intersections = {v: 0};
    var mx = {v: 0.0};
    var my = {v: 0.0};
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var n = 0;
    tmp$ = this.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      switch (cmd) {
        case 1:
          var x_0 = this.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          var y_0 = this.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
          mx.v = x_0;
          my.v = y_0;
          lx.v = x_0;
          ly.v = y_0;
          break;
        case 2:
          var x_1 = this.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
          var y_1 = this.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
          var x0 = lx.v;
          var y0 = ly.v;
          intersections.v = intersections.v + HorizontalLine_getInstance().intersectionsWithLine_15yvbs$(testx, testy, x0, y0, x_1, y_1) | 0;
          lx.v = x_1;
          ly.v = y_1;
          break;
        case 3:
          var x1 = this.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = this.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = this.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = this.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
          var x0_0 = lx.v;
          var y0_0 = ly.v;
          intersections.v = intersections.v + HorizontalLine_getInstance().interesectionsWithQuadBezier_i4knho$(testx, testy, x0_0, y0_0, x1, y1, x2, y2, this.p1_ilz4cd$_0, this.p2_ilz4bi$_0) | 0;
          lx.v = x2;
          ly.v = y2;
          break;
        case 4:
          var x1_0 = this.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = this.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = this.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = this.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = this.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = this.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
          var x0_1 = lx.v;
          var y0_1 = ly.v;
          intersections.v = intersections.v + HorizontalLine_getInstance().intersectionsWithCubicBezier_yth6uo$(testx, testy, x0_1, y0_1, x1_0, y1_0, x2_0, y2_0, x3, y3, this.p1_ilz4cd$_0, this.p2_ilz4bi$_0) | 0;
          lx.v = x3;
          ly.v = y3;
          break;
        case 5:
          if (lx.v !== mx.v || ly.v !== my.v) {
            var x0_2 = lx.v;
            var y0_2 = ly.v;
            var x1_1 = mx.v;
            var y1_1 = my.v;
            intersections.v = intersections.v + HorizontalLine_getInstance().intersectionsWithLine_15yvbs$(testx, testy, x0_2, y0_2, x1_1, y1_1) | 0;
          }

          break;
      }
    }
    return intersections.v % 2 !== 0;
  };
  VectorPath.prototype.containsPoint_vux9f0$ = function (x, y) {
    return this.containsPoint_lu1900$(x, y);
  };
  function VectorPath$Command() {
    VectorPath$Command_instance = this;
    this.MOVE_TO = 1;
    this.LINE_TO = 2;
    this.QUAD_TO = 3;
    this.BEZIER_TO = 4;
    this.CLOSE = 5;
  }
  VectorPath$Command.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Command',
    interfaces: []
  };
  var VectorPath$Command_instance = null;
  function VectorPath$Command_getInstance() {
    if (VectorPath$Command_instance === null) {
      new VectorPath$Command();
    }
    return VectorPath$Command_instance;
  }
  function VectorPath$Winding(name, ordinal, str) {
    Enum.call(this);
    this.str = str;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function VectorPath$Winding_initFields() {
    VectorPath$Winding_initFields = function () {
    };
    VectorPath$Winding$EVEN_ODD_instance = new VectorPath$Winding('EVEN_ODD', 0, 'evenOdd');
    VectorPath$Winding$NON_ZERO_instance = new VectorPath$Winding('NON_ZERO', 1, 'nonZero');
  }
  var VectorPath$Winding$EVEN_ODD_instance;
  function VectorPath$Winding$EVEN_ODD_getInstance() {
    VectorPath$Winding_initFields();
    return VectorPath$Winding$EVEN_ODD_instance;
  }
  var VectorPath$Winding$NON_ZERO_instance;
  function VectorPath$Winding$NON_ZERO_getInstance() {
    VectorPath$Winding_initFields();
    return VectorPath$Winding$NON_ZERO_instance;
  }
  VectorPath$Winding.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Winding',
    interfaces: [Enum]
  };
  function VectorPath$Winding$values() {
    return [VectorPath$Winding$EVEN_ODD_getInstance(), VectorPath$Winding$NON_ZERO_getInstance()];
  }
  VectorPath$Winding.values = VectorPath$Winding$values;
  function VectorPath$Winding$valueOf(name) {
    switch (name) {
      case 'EVEN_ODD':
        return VectorPath$Winding$EVEN_ODD_getInstance();
      case 'NON_ZERO':
        return VectorPath$Winding$NON_ZERO_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.VectorPath.Winding.' + name);
    }
  }
  VectorPath$Winding.valueOf_61zpoe$ = VectorPath$Winding$valueOf;
  VectorPath.prototype.write_3wv7u0$ = function (path) {
    this.commands.plusAssign_38vc8i$(path.commands);
    this.data.plusAssign_avch8c$(path.data);
    this.lastX = path.lastX;
    this.lastY = path.lastY;
  };
  VectorPath.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'VectorPath',
    interfaces: []
  };
  function Bezier() {
    Bezier$Companion_getInstance();
  }
  Bezier.prototype.getBounds_2da8yn$ = function (target, callback$default) {
    if (target === void 0)
      target = new Rectangle();
    return callback$default ? callback$default(target) : this.getBounds_2da8yn$$default(target);
  };
  Bezier.prototype.calc_fz2aja$ = function (t, target, callback$default) {
    if (target === void 0)
      target = new MVector2();
    return callback$default ? callback$default(t, target) : this.calc_fz2aja$$default(t, target);
  };
  function Bezier$Quad(p0, p1, p2) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
  }
  Bezier$Quad.prototype.getBounds_2da8yn$$default = function (target) {
    return Bezier$Companion_getInstance().quadBounds_c5pgzv$(this.p0.x, this.p0.y, this.p1.x, this.p1.y, this.p2.x, this.p2.y, target);
  };
  Bezier$Quad.prototype.calc_fz2aja$$default = function (t, target) {
    return Bezier$Companion_getInstance().quadCalc_urdcqm$(this.p0.x, this.p0.y, this.p1.x, this.p1.y, this.p2.x, this.p2.y, t, target);
  };
  Bezier$Quad.prototype.toCubic = function () {
    return new Bezier$Cubic(this.p0, plus(this.p0, times_0(minus(this.p1, this.p0), 2.0 / 3.0)), plus(this.p2, times_0(minus(this.p1, this.p2), 2.0 / 3.0)), this.p2);
  };
  Bezier$Quad.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Quad',
    interfaces: [Bezier]
  };
  function Bezier$Cubic(p0, p1, p2, p3) {
    this.p0 = p0;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
  }
  Bezier$Cubic.prototype.getBounds_2da8yn$$default = function (target) {
    return Bezier$Companion_getInstance().cubicBounds_c8cm1d$(this.p0.x, this.p0.y, this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p3.x, this.p3.y, target);
  };
  Bezier$Cubic.prototype.calc_fz2aja$$default = function (t, target) {
    return Bezier$Companion_getInstance().cubicCalc_xc3l2e$(this.p0.x, this.p0.y, this.p1.x, this.p1.y, this.p2.x, this.p2.y, this.p3.x, this.p3.y, t, target);
  };
  Bezier$Cubic.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Cubic',
    interfaces: [Bezier]
  };
  function Bezier$Companion() {
    Bezier$Companion_instance = this;
    this.tvalues_0 = new Float64Array(6);
    this.xvalues_0 = new Float64Array(8);
    this.yvalues_0 = new Float64Array(8);
  }
  Bezier$Companion.prototype.quadToCubic_f17vmg$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.bezier.Bezier.Companion.quadToCubic_f17vmg$', function (x0, y0, xc, yc, x1, y1, bezier) {
    return bezier(x0, y0, x0 + 0 * (xc - x0), y0 + 0 * (yc - y0), x1 + 0 * (xc - x1), y1 + 0 * (yc - y1), x1, y1);
  });
  Bezier$Companion.prototype.quadBounds_c5pgzv$ = function (x0, y0, xc, yc, x1, y1, target) {
    if (target === void 0)
      target = new Rectangle();
    return this.cubicBounds_c8cm1d$(x0, y0, x0 + 0 * (xc - x0), y0 + 0 * (yc - y0), x1 + 0 * (xc - x1), y1 + 0 * (yc - y1), x1, y1, target);
  };
  Bezier$Companion.prototype.quadCalc_aqpxk0$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.bezier.Bezier.Companion.quadCalc_aqpxk0$', function (x0, y0, xc, yc, x1, y1, t, emit) {
    var t1 = 1 - t;
    var a = t1 * t1;
    var c = t * t;
    var b = 2 * t1 * t;
    return emit(a * x0 + b * xc + c * x1, a * y0 + b * yc + c * y1);
  });
  Bezier$Companion.prototype.quadCalc_urdcqm$ = function (x0, y0, xc, yc, x1, y1, t, target) {
    if (target === void 0)
      target = new MVector2();
    var t1 = 1 - t;
    var a = t1 * t1;
    var c = t * t;
    var b = 2 * t1 * t;
    return target.setTo_lu1900$(a * x0 + b * xc + c * x1, a * y0 + b * yc + c * y1);
  };
  Bezier$Companion.prototype.cubicBounds_c8cm1d$ = function (x0, y0, x1, y1, x2, y2, x3, y3, target) {
    if (target === void 0)
      target = new Rectangle();
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6;
    var j = 0;
    var a;
    var b;
    var c;
    var b2ac;
    var sqrtb2ac;
    for (var i = 0; i < 2; i++) {
      if (i === 0) {
        b = 6 * x0 - 12 * x1 + 6 * x2;
        a = -3 * x0 + 9 * x1 - 9 * x2 + 3 * x3;
        c = 3 * x1 - 3 * x0;
      }
       else {
        b = 6 * y0 - 12 * y1 + 6 * y2;
        a = -3 * y0 + 9 * y1 - 9 * y2 + 3 * y3;
        c = 3 * y1 - 3 * y0;
      }
      var x = a;
      if (Math_0.abs(x) < 1.0E-12) {
        var x_0 = b;
        if (Math_0.abs(x_0) >= 1.0E-12) {
          var t = -c / b;
          if (0 < t && t < 1) {
            this.tvalues_0[tmp$ = j, j = tmp$ + 1 | 0, tmp$] = t;
          }
        }
      }
       else {
        b2ac = b * b - 4 * c * a;
        if (b2ac < 0)
          continue;
        sqrtb2ac = Math_0.sqrt(b2ac);
        var t1 = (-b + sqrtb2ac) / (2 * a);
        if (0 < t1 && t1 < 1) {
          this.tvalues_0[tmp$_0 = j, j = tmp$_0 + 1 | 0, tmp$_0] = t1;
        }
        var t2 = (-b - sqrtb2ac) / (2 * a);
        if (0 < t2 && t2 < 1) {
          this.tvalues_0[tmp$_1 = j, j = tmp$_1 + 1 | 0, tmp$_1] = t2;
        }
      }
    }
    while ((tmp$_2 = j, j = tmp$_2 - 1 | 0, tmp$_2) > 0) {
      var t_0 = this.tvalues_0[j];
      var mt = 1 - t_0;
      this.xvalues_0[j] = mt * mt * mt * x0 + 3 * mt * mt * t_0 * x1 + 3 * mt * t_0 * t_0 * x2 + t_0 * t_0 * t_0 * x3;
      this.yvalues_0[j] = mt * mt * mt * y0 + 3 * mt * mt * t_0 * y1 + 3 * mt * t_0 * t_0 * y2 + t_0 * t_0 * t_0 * y3;
    }
    this.xvalues_0[this.tvalues_0.length + 0 | 0] = x0;
    this.xvalues_0[this.tvalues_0.length + 1 | 0] = x3;
    this.yvalues_0[this.tvalues_0.length + 0 | 0] = y0;
    this.yvalues_0[this.tvalues_0.length + 1 | 0] = y3;
    return target.setBounds_6y0v78$((tmp$_3 = min_0(this.xvalues_0)) != null ? tmp$_3 : 0.0, (tmp$_4 = min_0(this.yvalues_0)) != null ? tmp$_4 : 0.0, (tmp$_5 = max_0(this.xvalues_0)) != null ? tmp$_5 : 0.0, (tmp$_6 = max_0(this.yvalues_0)) != null ? tmp$_6 : 0.0);
  };
  Bezier$Companion.prototype.cubicCalc_5wy1q4$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.bezier.Bezier.Companion.cubicCalc_5wy1q4$', function (x0, y0, x1, y1, x2, y2, x3, y3, t, emit) {
    var cx = 3.0 * (x1 - x0);
    var bx = 3.0 * (x2 - x1) - cx;
    var ax = x3 - x0 - cx - bx;
    var cy = 3.0 * (y1 - y0);
    var by = 3.0 * (y2 - y1) - cy;
    var ay = y3 - y0 - cy - by;
    var tSquared = t * t;
    var tCubed = tSquared * t;
    return emit(ax * tCubed + bx * tSquared + cx * t + x0, ay * tCubed + by * tSquared + cy * t + y0);
  });
  Bezier$Companion.prototype.cubicCalc_xc3l2e$ = function (x0, y0, x1, y1, x2, y2, x3, y3, t, target) {
    if (target === void 0)
      target = new MVector2();
    var cx = 3.0 * (x1 - x0);
    var bx = 3.0 * (x2 - x1) - cx;
    var ax = x3 - x0 - cx - bx;
    var cy = 3.0 * (y1 - y0);
    var by = 3.0 * (y2 - y1) - cy;
    var ay = y3 - y0 - cy - by;
    var tSquared = t * t;
    var tCubed = tSquared * t;
    return target.setTo_lu1900$(ax * tCubed + bx * tSquared + cx * t + x0, ay * tCubed + by * tSquared + cy * t + y0);
  };
  Bezier$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Bezier$Companion_instance = null;
  function Bezier$Companion_getInstance() {
    if (Bezier$Companion_instance === null) {
      new Bezier$Companion();
    }
    return Bezier$Companion_instance;
  }
  Bezier.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Bezier',
    interfaces: []
  };
  function length($receiver, steps) {
    if (steps === void 0)
      steps = 100;
    var dt = 1.0 / steps;
    var $receiver_0 = until(0, steps);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$($receiver.calc_fz2aja$(dt * item));
    }
    return getPolylineLength(destination);
  }
  function SegmentEmitter() {
    SegmentEmitter_instance = this;
  }
  SegmentEmitter.prototype.emit_d3uxxn$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.bezier.SegmentEmitter.emit_d3uxxn$', wrapFunction(function () {
    var MVector2_init = _.com.soywiz.korma.MVector2;
    return function (segments, curveGen, gen, p1, p2) {
      if (p1 === void 0)
        p1 = new MVector2_init();
      if (p2 === void 0)
        p2 = new MVector2_init();
      var dt = 1.0 / segments;
      for (var n = 0; n < segments; n++) {
        p1.copyFrom_r62tv1$(p2);
        p2.copyFrom_r62tv1$(curveGen(p2, dt * n));
        if (n > 1)
          gen(p1, p2);
      }
    };
  }));
  SegmentEmitter.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SegmentEmitter',
    interfaces: []
  };
  var SegmentEmitter_instance = null;
  function SegmentEmitter_getInstance() {
    if (SegmentEmitter_instance === null) {
      new SegmentEmitter();
    }
    return SegmentEmitter_instance;
  }
  function BinPack() {
  }
  BinPack.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BinPack',
    interfaces: []
  };
  function addBatch$lambda(it) {
    return it.second.area;
  }
  var HashMap_init = Kotlin.kotlin.collections.HashMap_init_q3lmfv$;
  function addBatch($receiver, items, getSize) {
    var tmp$;
    var its = toList_0(items);
    var out = HashMap_init();
    var destination = ArrayList_init(collectionSizeOrDefault(its, 10));
    var tmp$_0;
    tmp$_0 = its.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(to(item, getSize(item)));
    }
    var sorted = sortedByDescending2(destination, addBatch$lambda);
    tmp$ = sorted.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var i = tmp$_1.component1()
      , size = tmp$_1.component2();
      var value = $receiver.add_lu1900$(size.width, size.height);
      out.put_xwzc9p$(i, value);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(its, 10));
    var tmp$_2;
    tmp$_2 = its.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(to(item_0, out.get_11rb$(item_0)));
    }
    return destination_0;
  }
  function BinPacker(width, height, algo) {
    BinPacker$Companion_getInstance();
    if (algo === void 0)
      algo = new MaxRects(width, height);
    this.width = width;
    this.height = height;
    this.algo = algo;
    this.allocated = ArrayList_init_0();
  }
  BinPacker.prototype.add_lu1900$ = function (width, height) {
    var tmp$;
    tmp$ = this.addOrNull_lu1900$(width, height);
    if (tmp$ == null) {
      throw IllegalStateException_init("Size '" + this.width + 'x' + this.height + "' doesn't fit in '" + this.width + 'x' + this.height + "'");
    }
    return tmp$;
  };
  BinPacker.prototype.addOrNull_lu1900$ = function (width, height) {
    var tmp$;
    tmp$ = this.algo.add_lu1900$(width, height);
    if (tmp$ == null) {
      return null;
    }
    var rect = tmp$;
    this.allocated.add_11rb$(rect);
    return rect;
  };
  BinPacker.prototype.addBatch_f0fc84$ = function (items, getSize) {
    return addBatch(this.algo, items, getSize);
  };
  function BinPacker$addBatch$lambda(it) {
    return it;
  }
  BinPacker.prototype.addBatch_v79qp2$ = function (items) {
    var $receiver = addBatch(this.algo, items, BinPacker$addBatch$lambda);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(item.second);
    }
    return destination;
  };
  function BinPacker$Result(maxWidth, maxHeight, items) {
    this.maxWidth = maxWidth;
    this.maxHeight = maxHeight;
    this.items = items;
    var tmp$, tmp$_0;
    var $receiver = this.items;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
    var tmp$_1;
    tmp$_1 = $receiver.iterator();
    while (tmp$_1.hasNext()) {
      var item = tmp$_1.next();
      destination.add_11rb$(item.second.right);
    }
    var maxBy$result;
    maxBy$break: do {
      var iterator = destination.iterator();
      if (!iterator.hasNext()) {
        maxBy$result = null;
        break maxBy$break;
      }
      var maxElem = iterator.next();
      var maxValue = maxElem;
      while (iterator.hasNext()) {
        var e = iterator.next();
        var v = e;
        if (Kotlin.compareTo(maxValue, v) < 0) {
          maxElem = e;
          maxValue = v;
        }
      }
      maxBy$result = maxElem;
    }
     while (false);
    this.width = (tmp$ = maxBy$result) != null ? tmp$ : 0.0;
    var $receiver_0 = this.items;
    var destination_0 = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$_2;
    tmp$_2 = $receiver_0.iterator();
    while (tmp$_2.hasNext()) {
      var item_0 = tmp$_2.next();
      destination_0.add_11rb$(item_0.second.bottom);
    }
    var maxBy$result_0;
    maxBy$break: do {
      var iterator_0 = destination_0.iterator();
      if (!iterator_0.hasNext()) {
        maxBy$result_0 = null;
        break maxBy$break;
      }
      var maxElem_0 = iterator_0.next();
      var maxValue_0 = maxElem_0;
      while (iterator_0.hasNext()) {
        var e_0 = iterator_0.next();
        var v_0 = e_0;
        if (Kotlin.compareTo(maxValue_0, v_0) < 0) {
          maxElem_0 = e_0;
          maxValue_0 = v_0;
        }
      }
      maxBy$result_0 = maxElem_0;
    }
     while (false);
    this.height = (tmp$_0 = maxBy$result_0) != null ? tmp$_0 : 0.0;
  }
  Object.defineProperty(BinPacker$Result.prototype, 'rects', {
    get: function () {
      var $receiver = this.items;
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        destination.add_11rb$(item.second);
      }
      return destination;
    }
  });
  Object.defineProperty(BinPacker$Result.prototype, 'rectsStr', {
    get: function () {
      return this.rects.toString();
    }
  });
  BinPacker$Result.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Result',
    interfaces: []
  };
  function BinPacker$Companion() {
    BinPacker$Companion_instance = this;
  }
  BinPacker$Companion.prototype.pack_7eyens$ = function (width, height, items, getSize) {
    return (new BinPacker(width, height)).addBatch_f0fc84$(items, getSize);
  };
  BinPacker$Companion.prototype.packSeveral_6g33wa$ = defineInlineFunction('korma-js.com.soywiz.korma.geom.binpack.BinPacker.Companion.packSeveral_6g33wa$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    function BinPacker$Companion$packSeveral$lambda(it) {
      return it.size;
    }
    return function (maxWidth, maxHeight, items) {
      return this.packSeveral_7eyens$(numberToDouble(maxWidth), numberToDouble(maxHeight), items, BinPacker$Companion$packSeveral$lambda);
    };
  }));
  function BinPacker$Companion$packSeveral$lambda(closure$getSize) {
    return function (it) {
      return closure$getSize(it).area;
    };
  }
  function BinPacker$Companion$packSeveral$emit(closure$currentPairs, closure$out, closure$maxWidth, closure$maxHeight, closure$currentBinPacker) {
    return function () {
      if (closure$currentPairs.v.isEmpty())
        return;
      var $receiver = closure$out;
      var element = new BinPacker$Result(closure$maxWidth, closure$maxHeight, toList_0(closure$currentPairs.v));
      $receiver.add_11rb$(element);
      closure$currentPairs.v = ArrayList_init_0();
      closure$currentBinPacker.v = new BinPacker(closure$maxWidth, closure$maxHeight);
    };
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  BinPacker$Companion.prototype.packSeveral_7eyens$ = function (maxWidth, maxHeight, items, getSize) {
    var tmp$;
    var currentBinPacker = {v: new BinPacker(maxWidth, maxHeight)};
    var currentPairs = {v: ArrayList_init_0()};
    var sortedItems = sortedByDescending2(items, BinPacker$Companion$packSeveral$lambda(getSize));
    var any$result;
    any$break: do {
      var tmp$_0;
      if (Kotlin.isType(sortedItems, Collection) && sortedItems.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$_0 = sortedItems.iterator();
      while (tmp$_0.hasNext()) {
        var element = tmp$_0.next();
        var size = getSize(element);
        if (size.width > maxWidth || size.height > maxHeight) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    if (any$result)
      throw IllegalArgumentException_init('Item is bigger than max size');
    var out = ArrayList_init_0();
    var emit = BinPacker$Companion$packSeveral$emit(currentPairs, out, maxWidth, maxHeight, currentBinPacker);
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var done = false;
      while (!done) {
        var size_0 = getSize(item);
        var rect = currentBinPacker.v.addOrNull_lu1900$(size_0.width, size_0.height);
        if (rect != null) {
          currentPairs.v.add_11rb$(to(item, rect));
          done = true;
        }
         else {
          emit();
        }
      }
    }
    emit();
    return out;
  };
  BinPacker$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var BinPacker$Companion_instance = null;
  function BinPacker$Companion_getInstance() {
    if (BinPacker$Companion_instance === null) {
      new BinPacker$Companion();
    }
    return BinPacker$Companion_instance;
  }
  BinPacker.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BinPacker',
    interfaces: []
  };
  function MaxRects(maxWidth, maxHeight) {
    this.maxWidth_74g1ql$_0 = maxWidth;
    this.maxHeight_gmr7e4$_0 = maxHeight;
    this.freeRectangles = ArrayList_init_0();
    this.freeRectangles.add_11rb$(new Rectangle(0.0, 0.0, this.maxWidth, this.maxHeight));
  }
  Object.defineProperty(MaxRects.prototype, 'maxWidth', {
    get: function () {
      return this.maxWidth_74g1ql$_0;
    },
    set: function (maxWidth) {
      this.maxWidth_74g1ql$_0 = maxWidth;
    }
  });
  Object.defineProperty(MaxRects.prototype, 'maxHeight', {
    get: function () {
      return this.maxHeight_gmr7e4$_0;
    },
    set: function (maxHeight) {
      this.maxHeight_gmr7e4$_0 = maxHeight;
    }
  });
  MaxRects.prototype.add_lu1900$ = function (width, height) {
    return this.quickInsert_lu1900$(width, height);
  };
  MaxRects.prototype.quickInsert_lu1900$ = function (width, height) {
    if (width <= 0.0 && height <= 0.0)
      return Rectangle_init(0, 0, 0, 0);
    var newNode = this.quickFindPositionForNewNodeBestAreaFit_0(width, height);
    if (newNode.height === 0.0)
      return null;
    var numRectanglesToProcess = this.freeRectangles.size;
    var i = 0;
    while (i < numRectanglesToProcess) {
      if (this.splitFreeNode_0(this.freeRectangles.get_za3lpa$(i), newNode)) {
        this.freeRectangles.removeAt_za3lpa$(i);
        numRectanglesToProcess = numRectanglesToProcess - 1 | 0;
        i = i - 1 | 0;
      }
      i = i + 1 | 0;
    }
    this.pruneFreeList_0();
    return newNode;
  };
  MaxRects.prototype.quickFindPositionForNewNodeBestAreaFit_0 = function (width, height) {
    var tmp$;
    var score = 2147483647;
    var areaFit;
    var bestNode = new Rectangle();
    tmp$ = this.freeRectangles.iterator();
    while (tmp$.hasNext()) {
      var r = tmp$.next();
      if (r.width >= width && r.height >= height) {
        areaFit = r.width * r.height - width * height;
        if (areaFit < score) {
          bestNode.x = r.x;
          bestNode.y = r.y;
          bestNode.width = width;
          bestNode.height = height;
          score = areaFit;
        }
      }
    }
    return bestNode;
  };
  MaxRects.prototype.splitFreeNode_0 = function (freeNode, usedNode) {
    var newNode;
    if (usedNode.left >= freeNode.right || usedNode.right <= freeNode.x || usedNode.top >= freeNode.bottom || usedNode.bottom <= freeNode.top) {
      return false;
    }
    if (usedNode.x < freeNode.right && usedNode.right > freeNode.x) {
      if (usedNode.y > freeNode.y && usedNode.y < freeNode.bottom) {
        newNode = freeNode.clone();
        newNode.height = usedNode.y - newNode.y;
        this.freeRectangles.add_11rb$(newNode);
      }
      if (usedNode.bottom < freeNode.bottom) {
        newNode = freeNode.clone();
        newNode.top = usedNode.bottom;
        newNode.height = freeNode.bottom - usedNode.bottom;
        this.freeRectangles.add_11rb$(newNode);
      }
    }
    if (usedNode.y < freeNode.bottom && usedNode.bottom > freeNode.y) {
      if (usedNode.x > freeNode.x && usedNode.x < freeNode.right) {
        newNode = freeNode.clone();
        newNode.width = usedNode.x - newNode.x;
        this.freeRectangles.add_11rb$(newNode);
      }
      if (usedNode.right < freeNode.right) {
        newNode = freeNode.clone();
        newNode.x = usedNode.right;
        newNode.width = freeNode.right - usedNode.right;
        this.freeRectangles.add_11rb$(newNode);
      }
    }
    return true;
  };
  MaxRects.prototype.pruneFreeList_0 = function () {
    var len = this.freeRectangles.size;
    var i = 0;
    while (i < len) {
      var j = i + 1 | 0;
      var tmpRect = this.freeRectangles.get_za3lpa$(i);
      while (j < len) {
        var tmpRect2 = this.freeRectangles.get_za3lpa$(j);
        if (Rectangle$Companion_getInstance().isContainedIn_z5mqcu$(tmpRect, tmpRect2)) {
          this.freeRectangles.removeAt_za3lpa$(i);
          i = i - 1 | 0;
          len = len - 1 | 0;
          break;
        }
        if (Rectangle$Companion_getInstance().isContainedIn_z5mqcu$(tmpRect2, tmpRect)) {
          this.freeRectangles.removeAt_za3lpa$(j);
          len = len - 1 | 0;
          j = j - 1 | 0;
        }
        j = j + 1 | 0;
      }
      i = i + 1 | 0;
    }
  };
  MaxRects.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MaxRects',
    interfaces: [BinPack]
  };
  function Vector2_0(v) {
    return new IVector2(numberToDouble(v), numberToDouble(v));
  }
  function Vector2_1(v) {
    var x = v.x;
    var y = v.y;
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  function Clipper() {
    Clipper$Companion_getInstance();
  }
  function Clipper$ClipType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Clipper$ClipType_initFields() {
    Clipper$ClipType_initFields = function () {
    };
    Clipper$ClipType$INTERSECTION_instance = new Clipper$ClipType('INTERSECTION', 0);
    Clipper$ClipType$UNION_instance = new Clipper$ClipType('UNION', 1);
    Clipper$ClipType$DIFFERENCE_instance = new Clipper$ClipType('DIFFERENCE', 2);
    Clipper$ClipType$XOR_instance = new Clipper$ClipType('XOR', 3);
  }
  var Clipper$ClipType$INTERSECTION_instance;
  function Clipper$ClipType$INTERSECTION_getInstance() {
    Clipper$ClipType_initFields();
    return Clipper$ClipType$INTERSECTION_instance;
  }
  var Clipper$ClipType$UNION_instance;
  function Clipper$ClipType$UNION_getInstance() {
    Clipper$ClipType_initFields();
    return Clipper$ClipType$UNION_instance;
  }
  var Clipper$ClipType$DIFFERENCE_instance;
  function Clipper$ClipType$DIFFERENCE_getInstance() {
    Clipper$ClipType_initFields();
    return Clipper$ClipType$DIFFERENCE_instance;
  }
  var Clipper$ClipType$XOR_instance;
  function Clipper$ClipType$XOR_getInstance() {
    Clipper$ClipType_initFields();
    return Clipper$ClipType$XOR_instance;
  }
  Clipper$ClipType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClipType',
    interfaces: [Enum]
  };
  function Clipper$ClipType$values() {
    return [Clipper$ClipType$INTERSECTION_getInstance(), Clipper$ClipType$UNION_getInstance(), Clipper$ClipType$DIFFERENCE_getInstance(), Clipper$ClipType$XOR_getInstance()];
  }
  Clipper$ClipType.values = Clipper$ClipType$values;
  function Clipper$ClipType$valueOf(name) {
    switch (name) {
      case 'INTERSECTION':
        return Clipper$ClipType$INTERSECTION_getInstance();
      case 'UNION':
        return Clipper$ClipType$UNION_getInstance();
      case 'DIFFERENCE':
        return Clipper$ClipType$DIFFERENCE_getInstance();
      case 'XOR':
        return Clipper$ClipType$XOR_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.clipper.Clipper.ClipType.' + name);
    }
  }
  Clipper$ClipType.valueOf_61zpoe$ = Clipper$ClipType$valueOf;
  function Clipper$Direction(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Clipper$Direction_initFields() {
    Clipper$Direction_initFields = function () {
    };
    Clipper$Direction$RIGHT_TO_LEFT_instance = new Clipper$Direction('RIGHT_TO_LEFT', 0);
    Clipper$Direction$LEFT_TO_RIGHT_instance = new Clipper$Direction('LEFT_TO_RIGHT', 1);
  }
  var Clipper$Direction$RIGHT_TO_LEFT_instance;
  function Clipper$Direction$RIGHT_TO_LEFT_getInstance() {
    Clipper$Direction_initFields();
    return Clipper$Direction$RIGHT_TO_LEFT_instance;
  }
  var Clipper$Direction$LEFT_TO_RIGHT_instance;
  function Clipper$Direction$LEFT_TO_RIGHT_getInstance() {
    Clipper$Direction_initFields();
    return Clipper$Direction$LEFT_TO_RIGHT_instance;
  }
  Clipper$Direction.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Direction',
    interfaces: [Enum]
  };
  function Clipper$Direction$values() {
    return [Clipper$Direction$RIGHT_TO_LEFT_getInstance(), Clipper$Direction$LEFT_TO_RIGHT_getInstance()];
  }
  Clipper$Direction.values = Clipper$Direction$values;
  function Clipper$Direction$valueOf(name) {
    switch (name) {
      case 'RIGHT_TO_LEFT':
        return Clipper$Direction$RIGHT_TO_LEFT_getInstance();
      case 'LEFT_TO_RIGHT':
        return Clipper$Direction$LEFT_TO_RIGHT_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.clipper.Clipper.Direction.' + name);
    }
  }
  Clipper$Direction.valueOf_61zpoe$ = Clipper$Direction$valueOf;
  function Clipper$EndType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Clipper$EndType_initFields() {
    Clipper$EndType_initFields = function () {
    };
    Clipper$EndType$CLOSED_POLYGON_instance = new Clipper$EndType('CLOSED_POLYGON', 0);
    Clipper$EndType$CLOSED_LINE_instance = new Clipper$EndType('CLOSED_LINE', 1);
    Clipper$EndType$OPEN_BUTT_instance = new Clipper$EndType('OPEN_BUTT', 2);
    Clipper$EndType$OPEN_SQUARE_instance = new Clipper$EndType('OPEN_SQUARE', 3);
    Clipper$EndType$OPEN_ROUND_instance = new Clipper$EndType('OPEN_ROUND', 4);
  }
  var Clipper$EndType$CLOSED_POLYGON_instance;
  function Clipper$EndType$CLOSED_POLYGON_getInstance() {
    Clipper$EndType_initFields();
    return Clipper$EndType$CLOSED_POLYGON_instance;
  }
  var Clipper$EndType$CLOSED_LINE_instance;
  function Clipper$EndType$CLOSED_LINE_getInstance() {
    Clipper$EndType_initFields();
    return Clipper$EndType$CLOSED_LINE_instance;
  }
  var Clipper$EndType$OPEN_BUTT_instance;
  function Clipper$EndType$OPEN_BUTT_getInstance() {
    Clipper$EndType_initFields();
    return Clipper$EndType$OPEN_BUTT_instance;
  }
  var Clipper$EndType$OPEN_SQUARE_instance;
  function Clipper$EndType$OPEN_SQUARE_getInstance() {
    Clipper$EndType_initFields();
    return Clipper$EndType$OPEN_SQUARE_instance;
  }
  var Clipper$EndType$OPEN_ROUND_instance;
  function Clipper$EndType$OPEN_ROUND_getInstance() {
    Clipper$EndType_initFields();
    return Clipper$EndType$OPEN_ROUND_instance;
  }
  Clipper$EndType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EndType',
    interfaces: [Enum]
  };
  function Clipper$EndType$values() {
    return [Clipper$EndType$CLOSED_POLYGON_getInstance(), Clipper$EndType$CLOSED_LINE_getInstance(), Clipper$EndType$OPEN_BUTT_getInstance(), Clipper$EndType$OPEN_SQUARE_getInstance(), Clipper$EndType$OPEN_ROUND_getInstance()];
  }
  Clipper$EndType.values = Clipper$EndType$values;
  function Clipper$EndType$valueOf(name) {
    switch (name) {
      case 'CLOSED_POLYGON':
        return Clipper$EndType$CLOSED_POLYGON_getInstance();
      case 'CLOSED_LINE':
        return Clipper$EndType$CLOSED_LINE_getInstance();
      case 'OPEN_BUTT':
        return Clipper$EndType$OPEN_BUTT_getInstance();
      case 'OPEN_SQUARE':
        return Clipper$EndType$OPEN_SQUARE_getInstance();
      case 'OPEN_ROUND':
        return Clipper$EndType$OPEN_ROUND_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.clipper.Clipper.EndType.' + name);
    }
  }
  Clipper$EndType.valueOf_61zpoe$ = Clipper$EndType$valueOf;
  function Clipper$JoinType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Clipper$JoinType_initFields() {
    Clipper$JoinType_initFields = function () {
    };
    Clipper$JoinType$SQUARE_instance = new Clipper$JoinType('SQUARE', 0);
    Clipper$JoinType$ROUND_instance = new Clipper$JoinType('ROUND', 1);
    Clipper$JoinType$MITER_instance = new Clipper$JoinType('MITER', 2);
  }
  var Clipper$JoinType$SQUARE_instance;
  function Clipper$JoinType$SQUARE_getInstance() {
    Clipper$JoinType_initFields();
    return Clipper$JoinType$SQUARE_instance;
  }
  var Clipper$JoinType$ROUND_instance;
  function Clipper$JoinType$ROUND_getInstance() {
    Clipper$JoinType_initFields();
    return Clipper$JoinType$ROUND_instance;
  }
  var Clipper$JoinType$MITER_instance;
  function Clipper$JoinType$MITER_getInstance() {
    Clipper$JoinType_initFields();
    return Clipper$JoinType$MITER_instance;
  }
  Clipper$JoinType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'JoinType',
    interfaces: [Enum]
  };
  function Clipper$JoinType$values() {
    return [Clipper$JoinType$SQUARE_getInstance(), Clipper$JoinType$ROUND_getInstance(), Clipper$JoinType$MITER_getInstance()];
  }
  Clipper$JoinType.values = Clipper$JoinType$values;
  function Clipper$JoinType$valueOf(name) {
    switch (name) {
      case 'SQUARE':
        return Clipper$JoinType$SQUARE_getInstance();
      case 'ROUND':
        return Clipper$JoinType$ROUND_getInstance();
      case 'MITER':
        return Clipper$JoinType$MITER_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.clipper.Clipper.JoinType.' + name);
    }
  }
  Clipper$JoinType.valueOf_61zpoe$ = Clipper$JoinType$valueOf;
  function Clipper$PolyFillType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Clipper$PolyFillType_initFields() {
    Clipper$PolyFillType_initFields = function () {
    };
    Clipper$PolyFillType$EVEN_ODD_instance = new Clipper$PolyFillType('EVEN_ODD', 0);
    Clipper$PolyFillType$NON_ZERO_instance = new Clipper$PolyFillType('NON_ZERO', 1);
    Clipper$PolyFillType$POSITIVE_instance = new Clipper$PolyFillType('POSITIVE', 2);
    Clipper$PolyFillType$NEGATIVE_instance = new Clipper$PolyFillType('NEGATIVE', 3);
  }
  var Clipper$PolyFillType$EVEN_ODD_instance;
  function Clipper$PolyFillType$EVEN_ODD_getInstance() {
    Clipper$PolyFillType_initFields();
    return Clipper$PolyFillType$EVEN_ODD_instance;
  }
  var Clipper$PolyFillType$NON_ZERO_instance;
  function Clipper$PolyFillType$NON_ZERO_getInstance() {
    Clipper$PolyFillType_initFields();
    return Clipper$PolyFillType$NON_ZERO_instance;
  }
  var Clipper$PolyFillType$POSITIVE_instance;
  function Clipper$PolyFillType$POSITIVE_getInstance() {
    Clipper$PolyFillType_initFields();
    return Clipper$PolyFillType$POSITIVE_instance;
  }
  var Clipper$PolyFillType$NEGATIVE_instance;
  function Clipper$PolyFillType$NEGATIVE_getInstance() {
    Clipper$PolyFillType_initFields();
    return Clipper$PolyFillType$NEGATIVE_instance;
  }
  Clipper$PolyFillType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolyFillType',
    interfaces: [Enum]
  };
  function Clipper$PolyFillType$values() {
    return [Clipper$PolyFillType$EVEN_ODD_getInstance(), Clipper$PolyFillType$NON_ZERO_getInstance(), Clipper$PolyFillType$POSITIVE_getInstance(), Clipper$PolyFillType$NEGATIVE_getInstance()];
  }
  Clipper$PolyFillType.values = Clipper$PolyFillType$values;
  function Clipper$PolyFillType$valueOf(name) {
    switch (name) {
      case 'EVEN_ODD':
        return Clipper$PolyFillType$EVEN_ODD_getInstance();
      case 'NON_ZERO':
        return Clipper$PolyFillType$NON_ZERO_getInstance();
      case 'POSITIVE':
        return Clipper$PolyFillType$POSITIVE_getInstance();
      case 'NEGATIVE':
        return Clipper$PolyFillType$NEGATIVE_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.clipper.Clipper.PolyFillType.' + name);
    }
  }
  Clipper$PolyFillType.valueOf_61zpoe$ = Clipper$PolyFillType$valueOf;
  function Clipper$PolyType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Clipper$PolyType_initFields() {
    Clipper$PolyType_initFields = function () {
    };
    Clipper$PolyType$SUBJECT_instance = new Clipper$PolyType('SUBJECT', 0);
    Clipper$PolyType$CLIP_instance = new Clipper$PolyType('CLIP', 1);
  }
  var Clipper$PolyType$SUBJECT_instance;
  function Clipper$PolyType$SUBJECT_getInstance() {
    Clipper$PolyType_initFields();
    return Clipper$PolyType$SUBJECT_instance;
  }
  var Clipper$PolyType$CLIP_instance;
  function Clipper$PolyType$CLIP_getInstance() {
    Clipper$PolyType_initFields();
    return Clipper$PolyType$CLIP_instance;
  }
  Clipper$PolyType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolyType',
    interfaces: [Enum]
  };
  function Clipper$PolyType$values() {
    return [Clipper$PolyType$SUBJECT_getInstance(), Clipper$PolyType$CLIP_getInstance()];
  }
  Clipper$PolyType.values = Clipper$PolyType$values;
  function Clipper$PolyType$valueOf(name) {
    switch (name) {
      case 'SUBJECT':
        return Clipper$PolyType$SUBJECT_getInstance();
      case 'CLIP':
        return Clipper$PolyType$CLIP_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.clipper.Clipper.PolyType.' + name);
    }
  }
  Clipper$PolyType.valueOf_61zpoe$ = Clipper$PolyType$valueOf;
  function Clipper$Companion() {
    Clipper$Companion_instance = this;
    this.REVERSE_SOLUTION = 1;
    this.STRICTLY_SIMPLE = 2;
    this.PRESERVE_COLINEAR = 4;
  }
  Clipper$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Clipper$Companion_instance = null;
  function Clipper$Companion_getInstance() {
    if (Clipper$Companion_instance === null) {
      new Clipper$Companion();
    }
    return Clipper$Companion_instance;
  }
  Clipper.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Clipper',
    interfaces: []
  };
  function ClipperBase(isPreserveCollinear) {
    ClipperBase$Companion_getInstance();
    this.isPreserveCollinear = isPreserveCollinear;
    this.minimaList = null;
    this.currentLM = null;
    this.edges_xt60kb$_0 = null;
    this.hasOpenPaths = false;
    this.minimaList = null;
    this.currentLM = null;
    this.hasOpenPaths = false;
    this.edges_xt60kb$_0 = ArrayList_init_0();
  }
  function ClipperBase$LocalMinima($outer) {
    this.$outer = $outer;
    this.y = 0.0;
    this.leftBound = null;
    this.rightBound = null;
    this.next = null;
  }
  ClipperBase$LocalMinima.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LocalMinima',
    interfaces: []
  };
  function ClipperBase$Scanbeam() {
    this.y = 0.0;
    this.next = null;
  }
  ClipperBase$Scanbeam.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Scanbeam',
    interfaces: []
  };
  ClipperBase.prototype.addPath_lh39fr$ = function (pg, polyType, Closed) {
    var tmp$, tmp$_0, tmp$_1;
    if (!Closed && polyType === Clipper$PolyType$CLIP_getInstance())
      throw IllegalStateException_init('AddPath: Open paths must be subject.');
    var highI = pg.size - 1 | 0;
    if (Closed) {
      while (highI > 0 && equals(pg.get_za3lpa$(highI), pg.get_za3lpa$(0)))
        highI = highI - 1 | 0;
    }
    while (highI > 0 && equals(pg.get_za3lpa$(highI), pg.get_za3lpa$(highI - 1 | 0)))
      highI = highI - 1 | 0;
    if (Closed && highI < 2 || (!Closed && highI < 1))
      return false;
    var edges = ArrayList_init(highI + 1 | 0);
    tmp$ = highI;
    for (var i = 0; i <= tmp$; i++) {
      edges.add_11rb$(new Edge());
    }
    var IsFlat = true;
    edges.get_za3lpa$(1).current = MVector2_init_2(pg.get_za3lpa$(1));
    ClipperBase$Companion_getInstance().rangeTest_0(pg.get_za3lpa$(0));
    ClipperBase$Companion_getInstance().rangeTest_0(pg.get_za3lpa$(highI));
    ClipperBase$Companion_getInstance().initEdge_0(edges.get_za3lpa$(0), edges.get_za3lpa$(1), edges.get_za3lpa$(highI), pg.get_za3lpa$(0));
    ClipperBase$Companion_getInstance().initEdge_0(edges.get_za3lpa$(highI), edges.get_za3lpa$(0), edges.get_za3lpa$(highI - 1 | 0), pg.get_za3lpa$(highI));
    for (var i_0 = highI - 1 | 0; i_0 >= 1; i_0--) {
      ClipperBase$Companion_getInstance().rangeTest_0(pg.get_za3lpa$(i_0));
      ClipperBase$Companion_getInstance().initEdge_0(edges.get_za3lpa$(i_0), edges.get_za3lpa$(i_0 + 1 | 0), edges.get_za3lpa$(i_0 - 1 | 0), pg.get_za3lpa$(i_0));
    }
    var eStart = edges.get_za3lpa$(0);
    var e = eStart;
    var eLoopStop = eStart;
    while (true) {
      if (equals(e.current, ensureNotNull(e.next).current) && (Closed || !equals(e.next, eStart))) {
        if (e === e.next) {
          break;
        }
        if (e === eStart) {
          eStart = ensureNotNull(e.next);
        }
        e = ClipperBase$Companion_getInstance().removeEdge_0(e);
        eLoopStop = e;
        continue;
      }
      if (e.prev === e.next) {
        break;
      }
       else if (Closed && Points_getInstance().slopesEqual_immp3h$(ensureNotNull(e.prev).current, e.current, ensureNotNull(e.next).current) && (!this.isPreserveCollinear || !Points_getInstance().isPt2BetweenPt1AndPt3_immp3h$(ensureNotNull(e.prev).current, e.current, ensureNotNull(e.next).current))) {
        if (e === eStart) {
          eStart = ensureNotNull(e.next);
        }
        e = ClipperBase$Companion_getInstance().removeEdge_0(e);
        e = ensureNotNull(e.prev);
        eLoopStop = e;
        continue;
      }
      e = ensureNotNull(e.next);
      if (e === eLoopStop || (!Closed && e.next === eStart)) {
        break;
      }
    }
    if (!Closed && e === e.next || (Closed && e.prev === e.next)) {
      return false;
    }
    if (!Closed) {
      this.hasOpenPaths = true;
      ensureNotNull(eStart.prev).outIdx = -2;
    }
    e = eStart;
    do {
      ClipperBase$Companion_getInstance().initEdge2_0(e, polyType);
      e = ensureNotNull(e.next);
      if (IsFlat && e.current.y !== eStart.current.y) {
        IsFlat = false;
      }
    }
     while (e !== eStart);
    if (IsFlat) {
      if (Closed) {
        return false;
      }
      ensureNotNull(e.prev).outIdx = -2;
      if (ensureNotNull(e.prev).bot.x < ensureNotNull(e.prev).top.x) {
        ensureNotNull(e.prev).reverseHorizontal();
      }
      var locMin = new ClipperBase$LocalMinima(this);
      locMin.next = null;
      locMin.y = e.bot.y;
      locMin.leftBound = null;
      locMin.rightBound = e;
      ensureNotNull(locMin.rightBound).side = Edge$Side$RIGHT_getInstance();
      ensureNotNull(locMin.rightBound).windDelta = 0;
      while (ensureNotNull(e.next).outIdx !== -2) {
        e.nextInLML = e.next;
        if (e.bot.x !== ensureNotNull(e.prev).top.x) {
          e.reverseHorizontal();
        }
        e = ensureNotNull(e.next);
      }
      this.insertLocalMinima_mrxmjb$_0(locMin);
      this.edges_xt60kb$_0.add_11rb$(edges);
      return true;
    }
    this.edges_xt60kb$_0.add_11rb$(edges);
    var leftBoundIsForward;
    var EMin = null;
    if (equals(ensureNotNull(e.prev).bot, ensureNotNull(e.prev).top)) {
      e = ensureNotNull(e.next);
    }
    while (true) {
      e = e.findNextLocMin();
      if (e === EMin)
        break;
      if (EMin == null)
        EMin = e;
      var locMin_0 = new ClipperBase$LocalMinima(this);
      locMin_0.next = null;
      locMin_0.y = e.bot.y;
      if (e.deltaX < ensureNotNull(e.prev).deltaX) {
        locMin_0.leftBound = e.prev;
        locMin_0.rightBound = e;
        leftBoundIsForward = false;
      }
       else {
        locMin_0.leftBound = e;
        locMin_0.rightBound = e.prev;
        leftBoundIsForward = true;
      }
      ensureNotNull(locMin_0.leftBound).side = Edge$Side$LEFT_getInstance();
      ensureNotNull(locMin_0.rightBound).side = Edge$Side$RIGHT_getInstance();
      tmp$_1 = ensureNotNull(locMin_0.leftBound);
      if (!Closed)
        tmp$_0 = 0;
      else if (ensureNotNull(locMin_0.leftBound).next === locMin_0.rightBound)
        tmp$_0 = -1;
      else
        tmp$_0 = 1;
      tmp$_1.windDelta = tmp$_0;
      ensureNotNull(locMin_0.rightBound).windDelta = -ensureNotNull(locMin_0.leftBound).windDelta | 0;
      e = this.processBound_rr243z$_0(ensureNotNull(locMin_0.leftBound), leftBoundIsForward);
      if (e.outIdx === -2)
        e = this.processBound_rr243z$_0(e, leftBoundIsForward);
      var E2 = this.processBound_rr243z$_0(ensureNotNull(locMin_0.rightBound), !leftBoundIsForward);
      if (E2.outIdx === -2)
        E2 = this.processBound_rr243z$_0(E2, !leftBoundIsForward);
      if (ensureNotNull(locMin_0.leftBound).outIdx === -2) {
        locMin_0.leftBound = null;
      }
       else if (ensureNotNull(locMin_0.rightBound).outIdx === -2) {
        locMin_0.rightBound = null;
      }
      this.insertLocalMinima_mrxmjb$_0(locMin_0);
      if (!leftBoundIsForward)
        e = E2;
    }
    return true;
  };
  ClipperBase.prototype.addPaths_kw2pds$ = function (ppg, polyType, closed) {
    var result = false;
    for (var i = 0; i !== ppg.size; ++i) {
      if (this.addPath_lh39fr$(ppg.get_za3lpa$(i), polyType, closed))
        result = true;
    }
    return result;
  };
  ClipperBase.prototype.clear = function () {
    this.disposeLocalMinimaList_hjt0bo$_0();
    this.edges_xt60kb$_0.clear();
    this.hasOpenPaths = false;
  };
  ClipperBase.prototype.disposeLocalMinimaList_hjt0bo$_0 = function () {
    while (this.minimaList != null) {
      var tmpLm = ensureNotNull(this.minimaList).next;
      this.minimaList = null;
      this.minimaList = tmpLm;
    }
    this.currentLM = null;
  };
  ClipperBase.prototype.insertLocalMinima_mrxmjb$_0 = function (newLm) {
    if (this.minimaList == null) {
      this.minimaList = newLm;
    }
     else if (newLm.y >= ensureNotNull(this.minimaList).y) {
      newLm.next = this.minimaList;
      this.minimaList = newLm;
    }
     else {
      var tmpLm = ensureNotNull(this.minimaList);
      while (tmpLm.next != null && newLm.y < ensureNotNull(tmpLm.next).y) {
        tmpLm = ensureNotNull(tmpLm.next);
      }
      newLm.next = tmpLm.next;
      tmpLm.next = newLm;
    }
  };
  ClipperBase.prototype.popLocalMinima = function () {
    if (this.currentLM == null)
      return;
    this.currentLM = ensureNotNull(this.currentLM).next;
  };
  ClipperBase.prototype.processBound_rr243z$_0 = function (ee, LeftBoundIsForward) {
    var e = ee;
    var EStart;
    var result = e;
    var Horz;
    if (result.outIdx === -2) {
      e = result;
      if (LeftBoundIsForward) {
        while (e.top.y === ensureNotNull(e.next).bot.y)
          e = ensureNotNull(e.next);
        while (e !== result && e.deltaX === Edge$Companion_getInstance().HORIZONTAL)
          e = ensureNotNull(e.prev);
      }
       else {
        while (e.top.y === ensureNotNull(e.prev).bot.y)
          e = ensureNotNull(e.prev);
        while (e !== result && e.deltaX === Edge$Companion_getInstance().HORIZONTAL)
          e = ensureNotNull(e.next);
      }
      if (e === result) {
        result = LeftBoundIsForward ? ensureNotNull(e.next) : ensureNotNull(e.prev);
      }
       else {
        e = LeftBoundIsForward ? ensureNotNull(result.next) : ensureNotNull(result.prev);
        var locMin = new ClipperBase$LocalMinima(this);
        locMin.next = null;
        locMin.y = e.bot.y;
        locMin.leftBound = null;
        locMin.rightBound = e;
        e.windDelta = 0;
        result = this.processBound_rr243z$_0(e, LeftBoundIsForward);
        this.insertLocalMinima_mrxmjb$_0(locMin);
      }
      return result;
    }
    if (e.deltaX === Edge$Companion_getInstance().HORIZONTAL) {
      EStart = LeftBoundIsForward ? ensureNotNull(e.prev) : ensureNotNull(e.next);
      if (EStart.outIdx !== -2) {
        if (EStart.deltaX === Edge$Companion_getInstance().HORIZONTAL) {
          if (EStart.bot.x !== e.bot.x && EStart.top.x !== e.bot.x) {
            e.reverseHorizontal();
          }
        }
         else if (EStart.bot.x !== e.bot.x) {
          e.reverseHorizontal();
        }
      }
    }
    EStart = e;
    if (LeftBoundIsForward) {
      while (result.top.y === ensureNotNull(result.next).bot.y && ensureNotNull(result.next).outIdx !== -2) {
        result = ensureNotNull(result.next);
      }
      if (result.deltaX === Edge$Companion_getInstance().HORIZONTAL && ensureNotNull(result.next).outIdx !== -2) {
        Horz = result;
        while (ensureNotNull(Horz.prev).deltaX === Edge$Companion_getInstance().HORIZONTAL) {
          Horz = ensureNotNull(Horz.prev);
        }
        if (ensureNotNull(Horz.prev).top.x === ensureNotNull(result.next).top.x) {
          if (!LeftBoundIsForward) {
            result = ensureNotNull(Horz.prev);
          }
        }
         else if (ensureNotNull(Horz.prev).top.x > ensureNotNull(result.next).top.x) {
          result = ensureNotNull(Horz.prev);
        }
      }
      while (e !== result) {
        e.nextInLML = e.next;
        if (e.deltaX === Edge$Companion_getInstance().HORIZONTAL && e !== EStart && e.bot.x !== ensureNotNull(e.prev).top.x) {
          e.reverseHorizontal();
        }
        e = ensureNotNull(e.next);
      }
      if (e.deltaX === Edge$Companion_getInstance().HORIZONTAL && e !== EStart && e.bot.x !== ensureNotNull(e.prev).top.x) {
        e.reverseHorizontal();
      }
      result = ensureNotNull(result.next);
    }
     else {
      while (result.top.y === ensureNotNull(result.prev).bot.y && ensureNotNull(result.prev).outIdx !== -2)
        result = ensureNotNull(result.prev);
      if (result.deltaX === Edge$Companion_getInstance().HORIZONTAL && ensureNotNull(result.prev).outIdx !== -2) {
        Horz = result;
        while (ensureNotNull(Horz.next).deltaX === Edge$Companion_getInstance().HORIZONTAL)
          Horz = ensureNotNull(Horz.next);
        if (ensureNotNull(Horz.next).top.x === ensureNotNull(result.prev).top.x) {
          if (!LeftBoundIsForward)
            result = ensureNotNull(Horz.next);
        }
         else if (ensureNotNull(Horz.next).top.x > ensureNotNull(result.prev).top.x)
          result = ensureNotNull(Horz.next);
      }
      while (e !== result) {
        e.nextInLML = e.prev;
        if (e.deltaX === Edge$Companion_getInstance().HORIZONTAL && e !== EStart && e.bot.x !== ensureNotNull(e.next).top.x) {
          e.reverseHorizontal();
        }
        e = ensureNotNull(e.prev);
      }
      if (e.deltaX === Edge$Companion_getInstance().HORIZONTAL && e !== EStart && e.bot.x !== ensureNotNull(e.next).top.x) {
        e.reverseHorizontal();
      }
      result = ensureNotNull(result.prev);
    }
    return result;
  };
  ClipperBase.prototype.reset = function () {
    this.currentLM = this.minimaList;
    if (this.currentLM == null) {
      return;
    }
    var lm = this.minimaList;
    while (lm != null) {
      var e = lm.leftBound;
      if (e != null) {
        e.current = MVector2_init_2(e.bot);
        e.side = Edge$Side$LEFT_getInstance();
        e.outIdx = -1;
      }
      e = lm.rightBound;
      if (e != null) {
        e.current = MVector2_init_2(e.bot);
        e.side = Edge$Side$RIGHT_getInstance();
        e.outIdx = -1;
      }
      lm = lm.next;
    }
  };
  function ClipperBase$Companion() {
    ClipperBase$Companion_instance = this;
    this.LOW_RANGE_0 = L1073741823;
    this.HI_RANGE_0 = L4611686018427387903;
  }
  ClipperBase$Companion.prototype.initEdge_0 = function (e, eNext, ePrev, pt) {
    e.next = eNext;
    e.prev = ePrev;
    e.current = MVector2_init_2(pt);
    e.outIdx = -1;
  };
  ClipperBase$Companion.prototype.initEdge2_0 = function (e, polyType) {
    if (e.current.y >= ensureNotNull(e.next).current.y) {
      e.bot = MVector2_init_2(e.current);
      e.top = MVector2_init_2(ensureNotNull(e.next).current);
    }
     else {
      e.top = MVector2_init_2(e.current);
      e.bot = MVector2_init_2(ensureNotNull(e.next).current);
    }
    e.updateDeltaX();
    e.polyTyp = polyType;
  };
  ClipperBase$Companion.prototype.rangeTest_0 = function (Pt) {
    if (Pt.x > this.LOW_RANGE_0.toNumber() || Pt.y > this.LOW_RANGE_0.toNumber() || -Pt.x > this.LOW_RANGE_0.toNumber() || -Pt.y > this.LOW_RANGE_0.toNumber()) {
      if (Pt.x > this.HI_RANGE_0.toNumber() || Pt.y > this.HI_RANGE_0.toNumber() || -Pt.x > this.HI_RANGE_0.toNumber() || -Pt.y > this.HI_RANGE_0.toNumber()) {
        throw IllegalStateException_init('Coordinate outside allowed range');
      }
    }
  };
  ClipperBase$Companion.prototype.removeEdge_0 = function (e) {
    ensureNotNull(e.prev).next = e.next;
    ensureNotNull(e.next).prev = e.prev;
    var result = e.next;
    e.prev = null;
    return ensureNotNull(result);
  };
  ClipperBase$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ClipperBase$Companion_instance = null;
  function ClipperBase$Companion_getInstance() {
    if (ClipperBase$Companion_instance === null) {
      new ClipperBase$Companion();
    }
    return ClipperBase$Companion_instance;
  }
  ClipperBase.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClipperBase',
    interfaces: [Clipper]
  };
  function ClipperOffset(miterLimit, arcTolerance) {
    ClipperOffset$Companion_getInstance();
    if (miterLimit === void 0)
      miterLimit = 2.0;
    if (arcTolerance === void 0)
      arcTolerance = ClipperOffset$Companion_getInstance().DEFAULT_ARC_TOLERANCE_0;
    this.miterLimit_0 = miterLimit;
    this.arcTolerance_0 = arcTolerance;
    this.destPolys_0 = null;
    this.srcPoly_0 = null;
    this.destPoly_0 = null;
    this.normals_0 = ArrayList_init_0();
    this.delta_0 = 0.0;
    this.inA_0 = 0.0;
    this.sin_0 = 0.0;
    this.cos_0 = 0.0;
    this.miterLim_0 = 0.0;
    this.stepsPerRad_0 = 0.0;
    this.lowest_0 = new MVector2(-1.0, 0.0);
    this.polyNodes_0 = new PolyNode();
  }
  ClipperOffset.prototype.addPath_613o8z$ = function (path, joinType, endType) {
    var tmp$;
    var highI = path.size - 1 | 0;
    if (highI < 0) {
      return;
    }
    var newNode = new PolyNode();
    newNode.joinType = joinType;
    newNode.endType = endType;
    if (endType === Clipper$EndType$CLOSED_LINE_getInstance() || endType === Clipper$EndType$CLOSED_POLYGON_getInstance()) {
      while (highI > 0 && path.get_za3lpa$(0) === path.get_za3lpa$(highI)) {
        highI = highI - 1 | 0;
      }
    }
    newNode.polygon.add_11rb$(path.get_za3lpa$(0));
    var j = 0;
    var k = 0;
    tmp$ = highI;
    for (var i = 1; i <= tmp$; i++) {
      if (newNode.polygon.get_za3lpa$(j) !== path.get_za3lpa$(i)) {
        j = j + 1 | 0;
        newNode.polygon.add_11rb$(path.get_za3lpa$(i));
        if (path.get_za3lpa$(i).y > newNode.polygon.get_za3lpa$(k).y || (path.get_za3lpa$(i).y === newNode.polygon.get_za3lpa$(k).y && path.get_za3lpa$(i).x < newNode.polygon.get_za3lpa$(k).x)) {
          k = j;
        }
      }
    }
    if (endType === Clipper$EndType$CLOSED_POLYGON_getInstance() && j < 2) {
      return;
    }
    this.polyNodes_0.addChild_mux8jj$(newNode);
    if (endType !== Clipper$EndType$CLOSED_POLYGON_getInstance()) {
      return;
    }
    if (ensureNotNull(this.lowest_0).x < 0) {
      this.lowest_0 = MVector2_init_0(this.polyNodes_0.childCount - 1 | 0, k);
    }
     else {
      var ip = this.polyNodes_0.getChilds().get_za3lpa$(numberToInt(ensureNotNull(this.lowest_0).x)).polygon.get_za3lpa$(numberToInt(ensureNotNull(this.lowest_0).y));
      if (newNode.polygon.get_za3lpa$(k).y > ip.y || (newNode.polygon.get_za3lpa$(k).y === ip.y && newNode.polygon.get_za3lpa$(k).x < ip.x)) {
        this.lowest_0 = MVector2_init_0(this.polyNodes_0.childCount - 1 | 0, k);
      }
    }
  };
  ClipperOffset.prototype.addPaths_3qc6cc$ = function (paths, joinType, endType) {
    var tmp$;
    tmp$ = paths.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      this.addPath_613o8z$(p, joinType, endType);
    }
  };
  ClipperOffset.prototype.clear = function () {
    this.polyNodes_0._childs.clear();
    ensureNotNull(this.lowest_0).x = -1.0;
  };
  ClipperOffset.prototype.doMiter_0 = function (j, k, r) {
    var q = this.delta_0 / r;
    var tmp$ = ensureNotNull(this.destPoly_0);
    var x = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(j).x + (this.normals_0.get_za3lpa$(k).x + this.normals_0.get_za3lpa$(j).x) * q));
    var y = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(j).y + (this.normals_0.get_za3lpa$(k).y + this.normals_0.get_za3lpa$(j).y) * q));
    tmp$.add_11rb$(new IVector2(numberToDouble(x), numberToDouble(y)));
  };
  ClipperOffset.prototype.doOffset_0 = function (delta) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    this.destPolys_0 = Paths_init();
    this.delta_0 = delta;
    if (ClipperOffset$Companion_getInstance().nearZero_0(delta)) {
      tmp$ = this.polyNodes_0.childCount - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        var node = this.polyNodes_0.getChilds().get_za3lpa$(i);
        if (equals(node.endType, Clipper$EndType$CLOSED_POLYGON_getInstance())) {
          ensureNotNull(this.destPolys_0).add_11rb$(node.polygon);
        }
      }
      return;
    }
    if (this.miterLimit_0 > 2) {
      this.miterLim_0 = 2 / (this.miterLimit_0 * this.miterLimit_0);
    }
     else {
      this.miterLim_0 = 0.5;
    }
    var y;
    if (this.arcTolerance_0 <= 0.0) {
      y = ClipperOffset$Companion_getInstance().DEFAULT_ARC_TOLERANCE_0;
    }
     else {
      if (this.arcTolerance_0 > Math_0.abs(delta) * ClipperOffset$Companion_getInstance().DEFAULT_ARC_TOLERANCE_0) {
        y = Math_0.abs(delta) * ClipperOffset$Companion_getInstance().DEFAULT_ARC_TOLERANCE_0;
      }
       else {
        y = this.arcTolerance_0;
      }
    }
    var tmp$_5 = math.PI;
    var x = 1 - y / Math_0.abs(delta);
    var steps = tmp$_5 / Math_0.acos(x);
    var x_0 = ClipperOffset$Companion_getInstance().TWO_PI_0 / steps;
    this.sin_0 = Math_0.sin(x_0);
    var x_1 = ClipperOffset$Companion_getInstance().TWO_PI_0 / steps;
    this.cos_0 = Math_0.cos(x_1);
    this.stepsPerRad_0 = steps / ClipperOffset$Companion_getInstance().TWO_PI_0;
    if (delta < 0.0) {
      this.sin_0 = -this.sin_0;
    }
    tmp$_0 = this.polyNodes_0.childCount - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      var node_0 = this.polyNodes_0.getChilds().get_za3lpa$(i_0);
      this.srcPoly_0 = node_0.polygon;
      var len = ensureNotNull(this.srcPoly_0).size;
      if (len === 0 || (delta <= 0 && (len < 3 || !equals(node_0.endType, Clipper$EndType$CLOSED_POLYGON_getInstance())))) {
        continue;
      }
      this.destPoly_0 = Path_init();
      if (len === 1) {
        if (equals(node_0.joinType, Clipper$JoinType$ROUND_getInstance())) {
          var X = 1.0;
          var Y = 0.0;
          var j = 1;
          while (j <= steps) {
            var tmp$_6 = ensureNotNull(this.destPoly_0);
            var x_2 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(0).x + X * delta));
            var y_0 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(0).y + Y * delta));
            tmp$_6.add_11rb$(new IVector2(numberToDouble(x_2), numberToDouble(y_0)));
            var X2 = X;
            X = X * this.cos_0 - this.sin_0 * Y;
            Y = X2 * this.sin_0 + Y * this.cos_0;
            j = j + 1 | 0;
          }
        }
         else {
          var X_0 = -1.0;
          var Y_0 = -1.0;
          for (var j_0 = 0; j_0 <= 3; j_0++) {
            var tmp$_7 = ensureNotNull(this.destPoly_0);
            var x_3 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(0).x + X_0 * delta));
            var y_1 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(0).y + Y_0 * delta));
            tmp$_7.add_11rb$(new IVector2(numberToDouble(x_3), numberToDouble(y_1)));
            if (X_0 < 0) {
              X_0 = 1.0;
            }
             else if (Y_0 < 0) {
              Y_0 = 1.0;
            }
             else {
              X_0 = -1.0;
            }
          }
        }
        ensureNotNull(this.destPolys_0).add_11rb$(ensureNotNull(this.destPoly_0));
        continue;
      }
      this.normals_0.clear();
      tmp$_1 = len - 1 - 1 | 0;
      for (var j_1 = 0; j_1 <= tmp$_1; j_1++) {
        this.normals_0.add_11rb$(Points_getInstance().getUnitNormal_g6xq6k$(ensureNotNull(this.srcPoly_0).get_za3lpa$(j_1), ensureNotNull(this.srcPoly_0).get_za3lpa$(j_1 + 1 | 0)));
      }
      if (equals(node_0.endType, Clipper$EndType$CLOSED_LINE_getInstance()) || equals(node_0.endType, Clipper$EndType$CLOSED_POLYGON_getInstance())) {
        this.normals_0.add_11rb$(Points_getInstance().getUnitNormal_g6xq6k$(ensureNotNull(this.srcPoly_0).get_za3lpa$(len - 1 | 0), ensureNotNull(this.srcPoly_0).get_za3lpa$(0)));
      }
       else {
        this.normals_0.add_11rb$(Vector2_1(this.normals_0.get_za3lpa$(len - 2 | 0)));
      }
      if (equals(node_0.endType, Clipper$EndType$CLOSED_POLYGON_getInstance())) {
        var k = new Int32Array([len - 1 | 0]);
        tmp$_2 = len - 1 | 0;
        for (var j_2 = 0; j_2 <= tmp$_2; j_2++) {
          this.offsetPoint_0(j_2, k, ensureNotNull(node_0.joinType));
        }
        ensureNotNull(this.destPolys_0).add_11rb$(ensureNotNull(this.destPoly_0));
      }
       else if (equals(node_0.endType, Clipper$EndType$CLOSED_LINE_getInstance())) {
        var k_0 = new Int32Array([len - 1 | 0]);
        tmp$_3 = len - 1 | 0;
        for (var j_3 = 0; j_3 <= tmp$_3; j_3++) {
          this.offsetPoint_0(j_3, k_0, ensureNotNull(node_0.joinType));
        }
        ensureNotNull(this.destPolys_0).add_11rb$(ensureNotNull(this.destPoly_0));
        this.destPoly_0 = Path_init();
        var n = this.normals_0.get_za3lpa$(len - 1 | 0);
        for (var j_4 = len - 1 | 0; j_4 >= 1; j_4--) {
          var tmp$_8 = this.normals_0;
          var x_4 = -this.normals_0.get_za3lpa$(j_4 - 1 | 0).x;
          var y_2 = -this.normals_0.get_za3lpa$(j_4 - 1 | 0).y;
          tmp$_8.set_wxm5ur$(j_4, new IVector2(numberToDouble(x_4), numberToDouble(y_2)));
        }
        var tmp$_9 = this.normals_0;
        var x_5 = -n.x;
        var y_3 = -n.y;
        tmp$_9.set_wxm5ur$(0, new IVector2(numberToDouble(x_5), numberToDouble(y_3)));
        k_0[0] = 0;
        for (var j_5 = len - 1 | 0; j_5 >= 0; j_5--) {
          this.offsetPoint_0(j_5, k_0, ensureNotNull(node_0.joinType));
        }
        ensureNotNull(this.destPolys_0).add_11rb$(ensureNotNull(this.destPoly_0));
      }
       else {
        var k_1 = new Int32Array(1);
        tmp$_4 = len - 1 - 1 | 0;
        for (var j_6 = 1; j_6 <= tmp$_4; j_6++) {
          this.offsetPoint_0(j_6, k_1, ensureNotNull(node_0.joinType));
        }
        var pt1;
        if (equals(node_0.endType, Clipper$EndType$OPEN_BUTT_getInstance())) {
          var j_7 = len - 1 | 0;
          var x_6 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(j_7).x + this.normals_0.get_za3lpa$(j_7).x * delta));
          var y_4 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(j_7).y + this.normals_0.get_za3lpa$(j_7).y * delta));
          pt1 = new IVector2(numberToDouble(x_6), numberToDouble(y_4));
          ensureNotNull(this.destPoly_0).add_11rb$(pt1);
          var x_7 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(j_7).x - this.normals_0.get_za3lpa$(j_7).x * delta));
          var y_5 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(j_7).y - this.normals_0.get_za3lpa$(j_7).y * delta));
          pt1 = new IVector2(numberToDouble(x_7), numberToDouble(y_5));
          ensureNotNull(this.destPoly_0).add_11rb$(pt1);
        }
         else {
          var j_8 = len - 1 | 0;
          k_1[0] = len - 2 | 0;
          this.inA_0 = 0.0;
          var tmp$_10 = this.normals_0;
          var x_8 = -this.normals_0.get_za3lpa$(j_8).x;
          var y_6 = -this.normals_0.get_za3lpa$(j_8).y;
          tmp$_10.set_wxm5ur$(j_8, new IVector2(numberToDouble(x_8), numberToDouble(y_6)));
          if (equals(node_0.endType, Clipper$EndType$OPEN_SQUARE_getInstance())) {
            this.doSquare_0(j_8, k_1[0]);
          }
           else {
            this.doRound_0(j_8, k_1[0]);
          }
        }
        for (var j_9 = len - 1 | 0; j_9 >= 1; j_9--) {
          var tmp$_11 = this.normals_0;
          var x_9 = -this.normals_0.get_za3lpa$(j_9 - 1 | 0).x;
          var y_7 = -this.normals_0.get_za3lpa$(j_9 - 1 | 0).y;
          tmp$_11.set_wxm5ur$(j_9, new IVector2(numberToDouble(x_9), numberToDouble(y_7)));
        }
        var tmp$_12 = this.normals_0;
        var x_10 = -this.normals_0.get_za3lpa$(1).x;
        var y_8 = -this.normals_0.get_za3lpa$(1).y;
        tmp$_12.set_wxm5ur$(0, new IVector2(numberToDouble(x_10), numberToDouble(y_8)));
        k_1[0] = len - 1 | 0;
        for (var j_10 = k_1[0] - 1 | 0; j_10 >= 1; j_10--)
          this.offsetPoint_0(j_10, k_1, ensureNotNull(node_0.joinType));
        if (equals(node_0.endType, Clipper$EndType$OPEN_BUTT_getInstance())) {
          var x_11 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(0).x - this.normals_0.get_za3lpa$(0).x * delta));
          var y_9 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(0).y - this.normals_0.get_za3lpa$(0).y * delta));
          pt1 = new IVector2(numberToDouble(x_11), numberToDouble(y_9));
          ensureNotNull(this.destPoly_0).add_11rb$(pt1);
          var x_12 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(0).x + this.normals_0.get_za3lpa$(0).x * delta));
          var y_10 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(0).y + this.normals_0.get_za3lpa$(0).y * delta));
          pt1 = new IVector2(numberToDouble(x_12), numberToDouble(y_10));
          ensureNotNull(this.destPoly_0).add_11rb$(pt1);
        }
         else {
          k_1[0] = 1;
          this.inA_0 = 0.0;
          if (equals(node_0.endType, Clipper$EndType$OPEN_SQUARE_getInstance())) {
            this.doSquare_0(0, 1);
          }
           else {
            this.doRound_0(0, 1);
          }
        }
        ensureNotNull(this.destPolys_0).add_11rb$(ensureNotNull(this.destPoly_0));
      }
    }
  };
  ClipperOffset.prototype.doRound_0 = function (j, k) {
    var y = this.inA_0;
    var x = this.normals_0.get_za3lpa$(k).x * this.normals_0.get_za3lpa$(j).x + this.normals_0.get_za3lpa$(k).y * this.normals_0.get_za3lpa$(j).y;
    var a = Math_0.atan2(y, x);
    var steps = Math_getInstance().max_vux9f0$(numberToInt(round(this.stepsPerRad_0 * Math_0.abs(a))), 1);
    var X = this.normals_0.get_za3lpa$(k).x;
    var Y = this.normals_0.get_za3lpa$(k).y;
    var X2;
    for (var i = 0; i < steps; i++) {
      var tmp$ = ensureNotNull(this.destPoly_0);
      var x_0 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(j).x + X * this.delta_0));
      var y_0 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(j).y + Y * this.delta_0));
      tmp$.add_11rb$(new IVector2(numberToDouble(x_0), numberToDouble(y_0)));
      X2 = X;
      X = X * this.cos_0 - this.sin_0 * Y;
      Y = X2 * this.sin_0 + Y * this.cos_0;
    }
    var tmp$_0 = ensureNotNull(this.destPoly_0);
    var x_1 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(j).x + this.normals_0.get_za3lpa$(j).x * this.delta_0));
    var y_1 = numberToInt(round(ensureNotNull(this.srcPoly_0).get_za3lpa$(j).y + this.normals_0.get_za3lpa$(j).y * this.delta_0));
    tmp$_0.add_11rb$(new IVector2(numberToDouble(x_1), numberToDouble(y_1)));
  };
  ClipperOffset.prototype.doSquare_0 = function (j, k) {
    var nkx = this.normals_0.get_za3lpa$(k).x;
    var nky = this.normals_0.get_za3lpa$(k).y;
    var njx = this.normals_0.get_za3lpa$(j).x;
    var njy = this.normals_0.get_za3lpa$(j).y;
    var sjx = ensureNotNull(this.srcPoly_0).get_za3lpa$(j).x;
    var sjy = ensureNotNull(this.srcPoly_0).get_za3lpa$(j).y;
    var y = this.inA_0;
    var x = nkx * njx + nky * njy;
    var x_0 = Math_0.atan2(y, x) / 4;
    var dx = Math_0.tan(x_0);
    var tmp$ = ensureNotNull(this.destPoly_0);
    var x_1 = numberToInt(round(sjx + this.delta_0 * (nkx - nky * dx)));
    var y_0 = numberToInt(round(sjy + this.delta_0 * (nky + nkx * dx)));
    tmp$.add_11rb$(new IVector2(numberToDouble(x_1), numberToDouble(y_0)));
    var tmp$_0 = ensureNotNull(this.destPoly_0);
    var x_2 = numberToInt(round(sjx + this.delta_0 * (njx + njy * dx)));
    var y_1 = numberToInt(round(sjy + this.delta_0 * (njy - njx * dx)));
    tmp$_0.add_11rb$(new IVector2(numberToDouble(x_2), numberToDouble(y_1)));
  };
  ClipperOffset.prototype.execute_nn3i1b$ = function (solution, delta) {
    solution.clear();
    this.fixOrientations_0();
    this.doOffset_0(delta);
    var clpr = new DefaultClipper(1);
    clpr.addPaths_kw2pds$(ensureNotNull(this.destPolys_0), Clipper$PolyType$SUBJECT_getInstance(), true);
    if (delta > 0) {
      clpr.execute_h3bo99$(Clipper$ClipType$UNION_getInstance(), solution, Clipper$PolyFillType$POSITIVE_getInstance(), Clipper$PolyFillType$POSITIVE_getInstance());
    }
     else {
      var r = ensureNotNull(this.destPolys_0).bounds;
      var outer = Path_init(4);
      var x = r.left - 10;
      var y = r.bottom + 10;
      outer.add_11rb$(new IVector2(numberToDouble(x), numberToDouble(y)));
      var x_0 = r.right + 10;
      var y_0 = r.bottom + 10;
      outer.add_11rb$(new IVector2(numberToDouble(x_0), numberToDouble(y_0)));
      var x_1 = r.right + 10;
      var y_1 = r.top - 10;
      outer.add_11rb$(new IVector2(numberToDouble(x_1), numberToDouble(y_1)));
      var x_2 = r.left - 10;
      var y_2 = r.top - 10;
      outer.add_11rb$(new IVector2(numberToDouble(x_2), numberToDouble(y_2)));
      clpr.addPath_lh39fr$(outer, Clipper$PolyType$SUBJECT_getInstance(), true);
      clpr.execute_h3bo99$(Clipper$ClipType$UNION_getInstance(), solution, Clipper$PolyFillType$NEGATIVE_getInstance(), Clipper$PolyFillType$NEGATIVE_getInstance());
      if (solution.size > 0) {
        solution.removeAt_za3lpa$(0);
      }
    }
  };
  ClipperOffset.prototype.execute_t6zb6b$ = function (solution, delta) {
    var tmp$;
    solution.Clear();
    this.fixOrientations_0();
    this.doOffset_0(delta);
    var clpr = new DefaultClipper(1);
    clpr.addPaths_kw2pds$(ensureNotNull(this.destPolys_0), Clipper$PolyType$SUBJECT_getInstance(), true);
    if (delta > 0) {
      clpr.execute_8qtg6t$(Clipper$ClipType$UNION_getInstance(), solution, Clipper$PolyFillType$POSITIVE_getInstance(), Clipper$PolyFillType$POSITIVE_getInstance());
    }
     else {
      var r = ensureNotNull(this.destPolys_0).bounds;
      var outer = Path_init(4);
      var x = r.left - 10;
      var y = r.bottom + 10;
      outer.add_11rb$(new IVector2(numberToDouble(x), numberToDouble(y)));
      var x_0 = r.right + 10;
      var y_0 = r.bottom + 10;
      outer.add_11rb$(new IVector2(numberToDouble(x_0), numberToDouble(y_0)));
      var x_1 = r.right + 10;
      var y_1 = r.top - 10;
      outer.add_11rb$(new IVector2(numberToDouble(x_1), numberToDouble(y_1)));
      var x_2 = r.left - 10;
      var y_2 = r.top - 10;
      outer.add_11rb$(new IVector2(numberToDouble(x_2), numberToDouble(y_2)));
      clpr.addPath_lh39fr$(outer, Clipper$PolyType$SUBJECT_getInstance(), true);
      clpr.execute_8qtg6t$(Clipper$ClipType$UNION_getInstance(), solution, Clipper$PolyFillType$NEGATIVE_getInstance(), Clipper$PolyFillType$NEGATIVE_getInstance());
      if (solution.childCount === 1 && solution.getChilds().get_za3lpa$(0).childCount > 0) {
        var outerNode = solution.getChilds().get_za3lpa$(0);
        solution._childs.set_wxm5ur$(0, outerNode.getChilds().get_za3lpa$(0));
        solution._childs.get_za3lpa$(0).parent = solution;
        tmp$ = outerNode.childCount;
        for (var i = 1; i < tmp$; i++) {
          solution.addChild_mux8jj$(outerNode.getChilds().get_za3lpa$(i));
        }
      }
       else {
        solution.Clear();
      }
    }
  };
  ClipperOffset.prototype.fixOrientations_0 = function () {
    var tmp$, tmp$_0;
    if (ensureNotNull(this.lowest_0).x >= 0 && !this.polyNodes_0._childs.get_za3lpa$(numberToInt(ensureNotNull(this.lowest_0).x)).polygon.orientation()) {
      tmp$ = this.polyNodes_0.childCount;
      for (var i = 0; i < tmp$; i++) {
        var node = this.polyNodes_0._childs.get_za3lpa$(i);
        if (equals(node.endType, Clipper$EndType$CLOSED_POLYGON_getInstance()) || (equals(node.endType, Clipper$EndType$CLOSED_LINE_getInstance()) && node.polygon.orientation())) {
          reverse(node.polygon);
        }
      }
    }
     else {
      tmp$_0 = this.polyNodes_0.childCount;
      for (var i_0 = 0; i_0 < tmp$_0; i_0++) {
        var node_0 = this.polyNodes_0._childs.get_za3lpa$(i_0);
        if (equals(node_0.endType, Clipper$EndType$CLOSED_LINE_getInstance()) && !node_0.polygon.orientation()) {
          reverse(node_0.polygon);
        }
      }
    }
  };
  ClipperOffset.prototype.offsetPoint_0 = function (j, kV, jointype) {
    var k = kV[0];
    var nkx = this.normals_0.get_za3lpa$(k).x;
    var nky = this.normals_0.get_za3lpa$(k).y;
    var njy = this.normals_0.get_za3lpa$(j).y;
    var njx = this.normals_0.get_za3lpa$(j).x;
    var sjx = ensureNotNull(this.srcPoly_0).get_za3lpa$(j).x;
    var sjy = ensureNotNull(this.srcPoly_0).get_za3lpa$(j).y;
    this.inA_0 = nkx * njy - njx * nky;
    var x = this.inA_0 * this.delta_0;
    if (Math_0.abs(x) < 1.0) {
      var cosA = nkx * njx + njy * nky;
      if (cosA > 0) {
        var tmp$ = ensureNotNull(this.destPoly_0);
        var x_0 = numberToInt(round(sjx + nkx * this.delta_0));
        var y = numberToInt(round(sjy + nky * this.delta_0));
        tmp$.add_11rb$(new IVector2(numberToDouble(x_0), numberToDouble(y)));
        return;
      }
    }
     else if (this.inA_0 > 1.0) {
      this.inA_0 = 1.0;
    }
     else if (this.inA_0 < -1.0) {
      this.inA_0 = -1.0;
    }
    if (this.inA_0 * this.delta_0 < 0) {
      var tmp$_0 = ensureNotNull(this.destPoly_0);
      var x_1 = numberToInt(round(sjx + nkx * this.delta_0));
      var y_0 = numberToInt(round(sjy + nky * this.delta_0));
      tmp$_0.add_11rb$(new IVector2(numberToDouble(x_1), numberToDouble(y_0)));
      ensureNotNull(this.destPoly_0).add_11rb$(ensureNotNull(this.srcPoly_0).get_za3lpa$(j));
      var tmp$_1 = ensureNotNull(this.destPoly_0);
      var x_2 = numberToInt(round(sjx + njx * this.delta_0));
      var y_1 = numberToInt(round(sjy + njy * this.delta_0));
      tmp$_1.add_11rb$(new IVector2(numberToDouble(x_2), numberToDouble(y_1)));
    }
     else {
      switch (jointype.name) {
        case 'MITER':
          var r = 1.0 + njx * nkx + njy * nky;
          if (r >= this.miterLim_0) {
            this.doMiter_0(j, k, r);
          }
           else {
            this.doSquare_0(j, k);
          }

          break;
        case 'SQUARE':
          this.doSquare_0(j, k);
          break;
        case 'ROUND':
          this.doRound_0(j, k);
          break;
      }
    }
    kV[0] = j;
  };
  function ClipperOffset$Companion() {
    ClipperOffset$Companion_instance = this;
    this.TWO_PI_0 = math.PI * 2;
    this.DEFAULT_ARC_TOLERANCE_0 = 0.25;
    this.TOLERANCE_0 = 1.0E-20;
  }
  ClipperOffset$Companion.prototype.nearZero_0 = function (val) {
    return val > -this.TOLERANCE_0 && val < this.TOLERANCE_0;
  };
  ClipperOffset$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ClipperOffset$Companion_instance = null;
  function ClipperOffset$Companion_getInstance() {
    if (ClipperOffset$Companion_instance === null) {
      new ClipperOffset$Companion();
    }
    return ClipperOffset$Companion_instance;
  }
  ClipperOffset.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClipperOffset',
    interfaces: []
  };
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function DefaultClipper(InitOptions) {
    DefaultClipper$Companion_getInstance();
    if (InitOptions === void 0)
      InitOptions = 0;
    ClipperBase.call(this, (4 & InitOptions) !== 0);
    this.polyOuts_0 = null;
    this.clipType_0 = null;
    this.scanbeam_0 = null;
    this.activeEdges_0 = null;
    this.sortedEdges_0 = null;
    this.intersectList_0 = null;
    this.intersectNodeComparer_0 = null;
    this.clipFillType_0 = null;
    this.subjFillType_0 = null;
    this.joins_0 = null;
    this.ghostJoins_0 = null;
    this.usingPolyTree_0 = false;
    this.reverseSolution_0 = false;
    this.strictlySimple_0 = false;
    this.scanbeam_0 = null;
    this.activeEdges_0 = null;
    this.sortedEdges_0 = null;
    this.intersectList_0 = ArrayList_init_0();
    this.intersectNodeComparer_0 = new Comparator$ObjectLiteral_0(DefaultClipper_init$lambda);
    this.usingPolyTree_0 = false;
    this.polyOuts_0 = ArrayList_init_0();
    this.joins_0 = ArrayList_init_0();
    this.ghostJoins_0 = ArrayList_init_0();
    this.reverseSolution_0 = (1 & InitOptions) !== 0;
    this.strictlySimple_0 = (2 & InitOptions) !== 0;
  }
  function DefaultClipper$IntersectNode($outer) {
    this.$outer = $outer;
    this.edge1 = null;
    this.Edge2 = null;
    this.pt = null;
  }
  DefaultClipper$IntersectNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntersectNode',
    interfaces: []
  };
  DefaultClipper.prototype.addEdgeToSEL_0 = function (edge) {
    if (this.sortedEdges_0 == null) {
      this.sortedEdges_0 = edge;
      edge.prevInSEL = null;
      edge.nextInSEL = null;
    }
     else {
      edge.nextInSEL = this.sortedEdges_0;
      edge.prevInSEL = null;
      ensureNotNull(this.sortedEdges_0).prevInSEL = edge;
      this.sortedEdges_0 = edge;
    }
  };
  DefaultClipper.prototype.addGhostJoin_0 = function (Op, OffPt) {
    var j = new Path$Join();
    j.outPt1 = Op;
    j.offPt = Vector2_1(OffPt);
    this.ghostJoins_0.add_11rb$(j);
  };
  DefaultClipper.prototype.addJoin_0 = function (Op1, Op2, OffPt) {
    var j = new Path$Join();
    j.outPt1 = Op1;
    j.outPt2 = Op2;
    j.offPt = Vector2_1(OffPt);
    this.joins_0.add_11rb$(j);
  };
  DefaultClipper.prototype.addLocalMaxPoly_0 = function (e1, e2, pt) {
    this.addOutPt_0(e1, pt);
    if (e2.windDelta === 0) {
      this.addOutPt_0(e2, pt);
    }
    if (e1.outIdx === e2.outIdx) {
      e1.outIdx = -1;
      e2.outIdx = -1;
    }
     else if (e1.outIdx < e2.outIdx) {
      this.appendPolygon_0(e1, e2);
    }
     else {
      this.appendPolygon_0(e2, e1);
    }
  };
  DefaultClipper.prototype.addLocalMinPoly_0 = function (e1, e2, pt) {
    var result;
    var e;
    var prevE;
    if (e2.isHorizontal || e1.deltaX > e2.deltaX) {
      result = this.addOutPt_0(e1, pt);
      e2.outIdx = e1.outIdx;
      e1.side = Edge$Side$LEFT_getInstance();
      e2.side = Edge$Side$RIGHT_getInstance();
      e = e1;
      prevE = e.prevInAEL === e2 ? e2.prevInAEL : e.prevInAEL;
    }
     else {
      result = this.addOutPt_0(e2, pt);
      e1.outIdx = e2.outIdx;
      e1.side = Edge$Side$RIGHT_getInstance();
      e2.side = Edge$Side$LEFT_getInstance();
      e = e2;
      prevE = e.prevInAEL === e1 ? e1.prevInAEL : e.prevInAEL;
    }
    if (prevE != null && prevE.outIdx >= 0 && Edge$Companion_getInstance().topX_pk92ow$(prevE, pt.y) === Edge$Companion_getInstance().topX_pk92ow$(e, pt.y) && Edge$Companion_getInstance().slopesEqual_46mff8$(e, prevE) && e.windDelta !== 0 && prevE.windDelta !== 0) {
      var outPt = this.addOutPt_0(prevE, pt);
      this.addJoin_0(result, outPt, e.top);
    }
    return result;
  };
  DefaultClipper.prototype.addOutPt_0 = function (e, pt) {
    var ToFront = e.side === Edge$Side$LEFT_getInstance();
    if (e.outIdx < 0) {
      var outRec = this.createOutRec_0();
      outRec.isOpen = e.windDelta === 0;
      var newOp = new Path$OutPt();
      outRec.points = newOp;
      newOp.idx = outRec.Idx;
      newOp.pt = Vector2_1(pt);
      newOp.next = newOp;
      newOp.prev = newOp;
      if (!outRec.isOpen)
        this.setHoleState_0(e, outRec);
      e.outIdx = outRec.Idx;
      return newOp;
    }
     else {
      var outRec_0 = this.polyOuts_0.get_za3lpa$(e.outIdx);
      var op = ensureNotNull(outRec_0.points);
      if (ToFront && equals(pt, op.pt)) {
        return op;
      }
       else if (!ToFront && equals(pt, ensureNotNull(op.prev).pt)) {
        return ensureNotNull(op.prev);
      }
      var newOp_0 = new Path$OutPt();
      newOp_0.idx = outRec_0.Idx;
      newOp_0.pt = Vector2_1(pt);
      newOp_0.next = op;
      newOp_0.prev = op.prev;
      ensureNotNull(newOp_0.prev).next = newOp_0;
      op.prev = newOp_0;
      if (ToFront)
        outRec_0.points = newOp_0;
      return newOp_0;
    }
  };
  DefaultClipper.prototype.appendPolygon_0 = function (e1, e2) {
    var tmp$;
    var outRec1 = this.polyOuts_0.get_za3lpa$(e1.outIdx);
    var outRec2 = this.polyOuts_0.get_za3lpa$(e2.outIdx);
    var holeStateRec;
    if (DefaultClipper$Companion_getInstance().isParam1RightOfParam2_0(outRec1, outRec2)) {
      tmp$ = outRec2;
    }
     else if (DefaultClipper$Companion_getInstance().isParam1RightOfParam2_0(outRec2, outRec1)) {
      tmp$ = outRec1;
    }
     else {
      tmp$ = Path$OutPt$Companion_getInstance().getLowerMostRec_pii0fs$(outRec1, outRec2);
    }
    holeStateRec = tmp$;
    var p1_lft = outRec1.points;
    var p1_rt = ensureNotNull(ensureNotNull(p1_lft).prev);
    var p2_lft = outRec2.points;
    var p2_rt = ensureNotNull(ensureNotNull(p2_lft).prev);
    var side;
    if (e1.side === Edge$Side$LEFT_getInstance()) {
      if (e2.side === Edge$Side$LEFT_getInstance()) {
        p2_lft.reversePolyPtLinks();
        p2_lft.next = p1_lft;
        p1_lft.prev = p2_lft;
        p1_rt.next = p2_rt;
        p2_rt.prev = p1_rt;
        outRec1.points = p2_rt;
      }
       else {
        p2_rt.next = p1_lft;
        p1_lft.prev = p2_rt;
        p2_lft.prev = p1_rt;
        p1_rt.next = p2_lft;
        outRec1.points = p2_lft;
      }
      side = Edge$Side$LEFT_getInstance();
    }
     else {
      if (e2.side === Edge$Side$RIGHT_getInstance()) {
        p2_lft.reversePolyPtLinks();
        p1_rt.next = p2_rt;
        p2_rt.prev = p1_rt;
        p2_lft.next = p1_lft;
        p1_lft.prev = p2_lft;
      }
       else {
        p1_rt.next = p2_lft;
        p2_lft.prev = p1_rt;
        p1_lft.prev = p2_rt;
        p2_rt.next = p1_lft;
      }
      side = Edge$Side$RIGHT_getInstance();
    }
    outRec1.bottomPt = null;
    if (equals(holeStateRec, outRec2)) {
      if (outRec2.firstLeft !== outRec1)
        outRec1.firstLeft = outRec2.firstLeft;
      outRec1.isHole = outRec2.isHole;
    }
    outRec2.points = null;
    outRec2.bottomPt = null;
    outRec2.firstLeft = outRec1;
    var OKIdx = e1.outIdx;
    var ObsoleteIdx = e2.outIdx;
    e1.outIdx = -1;
    e2.outIdx = -1;
    var e = this.activeEdges_0;
    while (e != null) {
      if (e.outIdx === ObsoleteIdx) {
        e.outIdx = OKIdx;
        e.side = side;
        break;
      }
      e = e.nextInAEL;
    }
    outRec2.Idx = outRec1.Idx;
  };
  DefaultClipper.prototype.buildIntersectList_0 = function (topY) {
    if (this.activeEdges_0 == null)
      return;
    var e = this.activeEdges_0;
    this.sortedEdges_0 = e;
    while (e != null) {
      e.prevInSEL = e.prevInAEL;
      e.nextInSEL = e.nextInAEL;
      e.current.x = Edge$Companion_getInstance().topX_pk92ow$(e, topY);
      e = e.nextInAEL;
    }
    var isModified = true;
    while (isModified && this.sortedEdges_0 != null) {
      isModified = false;
      e = this.sortedEdges_0;
      while (ensureNotNull(e).nextInSEL != null) {
        var eNext = e.nextInSEL;
        var array = Array_0(1);
        var tmp$;
        tmp$ = array.length - 1 | 0;
        for (var i = 0; i <= tmp$; i++) {
          array[i] = new MVector2();
        }
        var pt = array;
        if (e.current.x > ensureNotNull(eNext).current.x) {
          this.intersectPoint_0(e, eNext, pt);
          var newNode = new DefaultClipper$IntersectNode(this);
          newNode.edge1 = e;
          newNode.Edge2 = eNext;
          newNode.pt = Vector2_1(pt[0]);
          this.intersectList_0.add_11rb$(newNode);
          this.swapPositionsInSEL_0(e, eNext);
          isModified = true;
        }
         else {
          e = eNext;
        }
      }
      if (e.prevInSEL != null) {
        ensureNotNull(e.prevInSEL).nextInSEL = null;
      }
       else {
        break;
      }
    }
    this.sortedEdges_0 = null;
  };
  DefaultClipper.prototype.buildResult_0 = function (polyg) {
    var tmp$;
    polyg.clear();
    tmp$ = this.polyOuts_0;
    for (var i = 0; i !== tmp$.size; ++i) {
      var tmp$_0;
      var outRec = this.polyOuts_0.get_za3lpa$(i);
      if (outRec.points == null)
        continue;
      var p = ensureNotNull(ensureNotNull(outRec.points).prev);
      var cnt = p.pointCount;
      if (cnt < 2)
        continue;
      var pg = Path_init(cnt);
      tmp$_0 = cnt - 1 | 0;
      for (var j = 0; j <= tmp$_0; j++) {
        pg.add_11rb$(Vector2_1(p.pt));
        p = ensureNotNull(p.prev);
      }
      polyg.add_11rb$(pg);
    }
  };
  DefaultClipper.prototype.buildResult2_0 = function (polytree) {
    var tmp$, tmp$_0;
    polytree.Clear();
    tmp$ = this.polyOuts_0;
    for (var i = 0; i !== tmp$.size; ++i) {
      var tmp$_1;
      var outRec = this.polyOuts_0.get_za3lpa$(i);
      var cnt = ensureNotNull(outRec.points).pointCount;
      if (outRec.isOpen && cnt < 2 || (!outRec.isOpen && cnt < 3)) {
        continue;
      }
      outRec.fixHoleLinkage();
      var pn = new PolyNode();
      polytree.allPolys.add_11rb$(pn);
      outRec.polyNode = pn;
      var op = ensureNotNull(ensureNotNull(outRec.points).prev);
      tmp$_1 = cnt - 1 | 0;
      for (var j = 0; j <= tmp$_1; j++) {
        pn.polygon.add_11rb$(op.pt);
        op = ensureNotNull(op.prev);
      }
    }
    tmp$_0 = this.polyOuts_0;
    for (var i_0 = 0; i_0 !== tmp$_0.size; ++i_0) {
      var outRec_0 = this.polyOuts_0.get_za3lpa$(i_0);
      if (outRec_0.polyNode == null) {
        continue;
      }
       else if (outRec_0.isOpen) {
        ensureNotNull(outRec_0.polyNode).isOpen = true;
        polytree.addChild_mux8jj$(ensureNotNull(outRec_0.polyNode));
      }
       else if (outRec_0.firstLeft != null && ensureNotNull(outRec_0.firstLeft).polyNode != null) {
        ensureNotNull(ensureNotNull(outRec_0.firstLeft).polyNode).addChild_mux8jj$(ensureNotNull(outRec_0.polyNode));
      }
       else {
        polytree.addChild_mux8jj$(ensureNotNull(outRec_0.polyNode));
      }
    }
  };
  DefaultClipper.prototype.copyAELToSEL_0 = function () {
    var e = this.activeEdges_0;
    this.sortedEdges_0 = e;
    while (e != null) {
      e.prevInSEL = e.prevInAEL;
      e.nextInSEL = e.nextInAEL;
      e = e.nextInAEL;
    }
  };
  DefaultClipper.prototype.createOutRec_0 = function () {
    var result = new Path$OutRec();
    result.Idx = -1;
    result.isHole = false;
    result.isOpen = false;
    result.firstLeft = null;
    result.points = null;
    result.bottomPt = null;
    result.polyNode = null;
    this.polyOuts_0.add_11rb$(result);
    result.Idx = this.polyOuts_0.size - 1 | 0;
    return result;
  };
  DefaultClipper.prototype.deleteFromAEL_0 = function (e) {
    var AelPrev = e.prevInAEL;
    var AelNext = e.nextInAEL;
    if (AelPrev == null && AelNext == null && e !== this.activeEdges_0) {
      return;
    }
    if (AelPrev != null) {
      AelPrev.nextInAEL = AelNext;
    }
     else {
      this.activeEdges_0 = AelNext;
    }
    if (AelNext != null) {
      AelNext.prevInAEL = AelPrev;
    }
    e.nextInAEL = null;
    e.prevInAEL = null;
  };
  DefaultClipper.prototype.deleteFromSEL_0 = function (e) {
    var SelPrev = e.prevInSEL;
    var SelNext = e.nextInSEL;
    if (SelPrev == null && SelNext == null && !equals(e, this.sortedEdges_0)) {
      return;
    }
    if (SelPrev != null) {
      SelPrev.nextInSEL = SelNext;
    }
     else {
      this.sortedEdges_0 = SelNext;
    }
    if (SelNext != null) {
      SelNext.prevInSEL = SelPrev;
    }
    e.nextInSEL = null;
    e.prevInSEL = null;
  };
  DefaultClipper.prototype.doHorzSegmentsOverlap_0 = function (seg1a, seg1b, seg2a, seg2b) {
    var _seg1a = seg1a;
    var _seg1b = seg1b;
    var _seg2a = seg2a;
    var _seg2b = seg2b;
    if (_seg1a > _seg1b) {
      var tmp = _seg1a;
      _seg1a = _seg1b;
      _seg1b = tmp;
    }
    if (_seg2a > _seg2b) {
      var tmp_0 = _seg2a;
      _seg2a = _seg2b;
      _seg2b = tmp_0;
    }
    return _seg1a < _seg2b && _seg2a < _seg1b;
  };
  DefaultClipper.prototype.doMaxima_0 = function (e) {
    var eMaxPair = e.maximaPair;
    if (eMaxPair == null) {
      if (e.outIdx >= 0) {
        this.addOutPt_0(e, e.top);
      }
      this.deleteFromAEL_0(e);
      return;
    }
    var eNext = e.nextInAEL;
    while (eNext != null && eNext !== eMaxPair) {
      var tmp = Vector2_1(e.top);
      this.intersectEdges_0(e, eNext, tmp);
      e.top = MVector2_init_2(tmp);
      this.swapPositionsInAEL_0(e, eNext);
      eNext = e.nextInAEL;
    }
    if (e.outIdx === -1 && eMaxPair.outIdx === -1) {
      this.deleteFromAEL_0(e);
      this.deleteFromAEL_0(eMaxPair);
    }
     else if (e.outIdx >= 0 && eMaxPair.outIdx >= 0) {
      if (e.outIdx >= 0) {
        this.addLocalMaxPoly_0(e, eMaxPair, e.top);
      }
      this.deleteFromAEL_0(e);
      this.deleteFromAEL_0(eMaxPair);
    }
     else if (e.windDelta === 0) {
      if (e.outIdx >= 0) {
        this.addOutPt_0(e, e.top);
        e.outIdx = -1;
      }
      this.deleteFromAEL_0(e);
      if (eMaxPair.outIdx >= 0) {
        this.addOutPt_0(eMaxPair, e.top);
        eMaxPair.outIdx = -1;
      }
      this.deleteFromAEL_0(eMaxPair);
    }
     else {
      throw IllegalStateException_init('DoMaxima error');
    }
  };
  DefaultClipper.prototype.doSimplePolygons_0 = function () {
    var tmp$;
    var i = 0;
    while (i < this.polyOuts_0.size) {
      var outrec = this.polyOuts_0.get_za3lpa$((tmp$ = i, i = tmp$ + 1 | 0, tmp$));
      var op = outrec.points;
      if (op == null || outrec.isOpen) {
        continue;
      }
      do {
        var op2 = ensureNotNull(ensureNotNull(op).next);
        while (op2 !== outrec.points) {
          if (equals(op.pt, op2.pt) && !equals(op2.next, op) && !equals(op2.prev, op)) {
            var op3 = op.prev;
            var op4 = op2.prev;
            op.prev = op4;
            ensureNotNull(op4).next = op;
            op2.prev = op3;
            ensureNotNull(op3).next = op2;
            outrec.points = op;
            var outrec2 = this.createOutRec_0();
            outrec2.points = op2;
            this.updateOutPtIdxs_0(outrec2);
            if (DefaultClipper$Companion_getInstance().poly2ContainsPoly1_0(ensureNotNull(outrec2.points), ensureNotNull(outrec.points))) {
              outrec2.isHole = !outrec.isHole;
              outrec2.firstLeft = outrec;
              if (this.usingPolyTree_0) {
                this.fixupFirstLefts2_0(outrec2, outrec);
              }
            }
             else if (DefaultClipper$Companion_getInstance().poly2ContainsPoly1_0(ensureNotNull(outrec.points), ensureNotNull(outrec2.points))) {
              outrec2.isHole = outrec.isHole;
              outrec.isHole = !outrec2.isHole;
              outrec2.firstLeft = outrec.firstLeft;
              outrec.firstLeft = outrec2;
              if (this.usingPolyTree_0) {
                this.fixupFirstLefts2_0(outrec, outrec2);
              }
            }
             else {
              outrec2.isHole = outrec.isHole;
              outrec2.firstLeft = outrec.firstLeft;
              if (this.usingPolyTree_0) {
                this.fixupFirstLefts1_0(outrec, outrec2);
              }
            }
            op2 = op;
          }
          op2 = ensureNotNull(op2.next);
        }
        op = op.next;
      }
       while (op !== outrec.points);
    }
  };
  DefaultClipper.prototype.EdgesAdjacent_0 = function (inode) {
    return ensureNotNull(inode.edge1).nextInSEL === inode.Edge2 || ensureNotNull(inode.edge1).prevInSEL === inode.Edge2;
  };
  DefaultClipper.prototype.execute_vdtgvh$ = function (clipType, solution) {
    return this.execute_h3bo99$(clipType, solution, Clipper$PolyFillType$EVEN_ODD_getInstance(), Clipper$PolyFillType$EVEN_ODD_getInstance());
  };
  DefaultClipper.prototype.execute_h3bo99$ = function (clipType, solution, subjFillType, clipFillType) {
    if (this.hasOpenPaths) {
      throw IllegalStateException_init('Error: PolyTree struct is need for open path clipping.');
    }
    solution.clear();
    this.subjFillType_0 = subjFillType;
    this.clipFillType_0 = clipFillType;
    this.clipType_0 = clipType;
    this.usingPolyTree_0 = false;
    var succeeded;
    try {
      succeeded = this.executeInternal_0();
      if (succeeded) {
        this.buildResult_0(solution);
      }
    }
    finally {
      this.polyOuts_0.clear();
    }
    return succeeded;
  };
  DefaultClipper.prototype.execute_yppead$ = function (clipType, polytree) {
    return this.execute_8qtg6t$(clipType, polytree, Clipper$PolyFillType$EVEN_ODD_getInstance(), Clipper$PolyFillType$EVEN_ODD_getInstance());
  };
  DefaultClipper.prototype.execute_8qtg6t$ = function (clipType, polytree, subjFillType, clipFillType) {
    this.subjFillType_0 = subjFillType;
    this.clipFillType_0 = clipFillType;
    this.clipType_0 = clipType;
    this.usingPolyTree_0 = true;
    var succeeded;
    try {
      succeeded = this.executeInternal_0();
      if (succeeded) {
        this.buildResult2_0(polytree);
      }
    }
    finally {
      this.polyOuts_0.clear();
    }
    return succeeded;
  };
  DefaultClipper.prototype.executeInternal_0 = function () {
    var tmp$, tmp$_0, tmp$_1;
    try {
      this.reset();
      if (this.currentLM == null) {
        return false;
      }
      var botY = this.popScanbeam_0();
      do {
        this.insertLocalMinimaIntoAEL_0(botY);
        this.ghostJoins_0.clear();
        this.processHorizontals_0(false);
        if (this.scanbeam_0 == null) {
          break;
        }
        var topY = this.popScanbeam_0();
        if (!this.processIntersections_0(topY)) {
          return false;
        }
        this.processEdgesAtTopOfScanbeam_0(topY);
        botY = topY;
      }
       while (this.scanbeam_0 != null || this.currentLM != null);
      tmp$ = this.polyOuts_0.iterator();
      while (tmp$.hasNext()) {
        var outRec = tmp$.next();
        if (outRec.points == null || outRec.isOpen)
          continue;
      }
      tmp$_0 = this.polyOuts_0.iterator();
      while (tmp$_0.hasNext()) {
        var outRec_0 = tmp$_0.next();
        if (outRec_0.points == null || outRec_0.isOpen)
          continue;
        if ((outRec_0.isHole ^ this.reverseSolution_0) === outRec_0.area() > 0) {
          ensureNotNull(outRec_0.points).reversePolyPtLinks();
        }
      }
      this.joinCommonEdges_0();
      tmp$_1 = this.polyOuts_0;
      for (var i = 0; i !== tmp$_1.size; ++i) {
        var outRec_1 = this.polyOuts_0.get_za3lpa$(i);
        if (outRec_1.points != null && !outRec_1.isOpen) {
          this.fixupOutPolygon_0(outRec_1);
        }
      }
      if (this.strictlySimple_0) {
        this.doSimplePolygons_0();
      }
      return true;
    }
    finally {
      this.joins_0.clear();
      this.ghostJoins_0.clear();
    }
  };
  DefaultClipper.prototype.fixupFirstLefts1_0 = function (OldOutRec, NewOutRec) {
    var tmp$;
    tmp$ = this.polyOuts_0;
    for (var i = 0; i !== tmp$.size; ++i) {
      var outRec = this.polyOuts_0.get_za3lpa$(i);
      if (outRec.points == null || outRec.firstLeft == null) {
        continue;
      }
      var firstLeft = ensureNotNull(outRec.firstLeft).parseFirstLeft();
      if (equals(firstLeft, OldOutRec)) {
        if (DefaultClipper$Companion_getInstance().poly2ContainsPoly1_0(ensureNotNull(outRec.points), ensureNotNull(NewOutRec.points))) {
          outRec.firstLeft = NewOutRec;
        }
      }
    }
  };
  DefaultClipper.prototype.fixupFirstLefts2_0 = function (OldOutRec, NewOutRec) {
    var tmp$;
    tmp$ = this.polyOuts_0.iterator();
    while (tmp$.hasNext()) {
      var outRec = tmp$.next();
      if (equals(outRec.firstLeft, OldOutRec)) {
        outRec.firstLeft = NewOutRec;
      }
    }
  };
  DefaultClipper.prototype.fixupIntersectionOrder_0 = function () {
    var tmp$;
    sortWith(this.intersectList_0, this.intersectNodeComparer_0);
    this.copyAELToSEL_0();
    var cnt = this.intersectList_0.size;
    tmp$ = cnt - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      if (!this.EdgesAdjacent_0(this.intersectList_0.get_za3lpa$(i))) {
        var j = i + 1 | 0;
        while (j < cnt && !this.EdgesAdjacent_0(this.intersectList_0.get_za3lpa$(j))) {
          j = j + 1 | 0;
        }
        if (j === cnt) {
          return false;
        }
        var tmp = this.intersectList_0.get_za3lpa$(i);
        this.intersectList_0.set_wxm5ur$(i, this.intersectList_0.get_za3lpa$(j));
        this.intersectList_0.set_wxm5ur$(j, tmp);
      }
      this.swapPositionsInSEL_0(ensureNotNull(this.intersectList_0.get_za3lpa$(i).edge1), ensureNotNull(this.intersectList_0.get_za3lpa$(i).Edge2));
    }
    return true;
  };
  DefaultClipper.prototype.fixupOutPolygon_0 = function (outRec) {
    var lastOK = null;
    outRec.bottomPt = null;
    var pp = ensureNotNull(outRec.points);
    while (true) {
      if (pp.prev === pp || pp.prev === pp.next) {
        outRec.points = null;
        return;
      }
      if (equals(pp.pt, ensureNotNull(pp.next).pt) || equals(pp.pt, ensureNotNull(pp.prev).pt) || (Points_getInstance().slopesEqual_immp3h$(ensureNotNull(pp.prev).pt, pp.pt, ensureNotNull(pp.next).pt) && (!this.isPreserveCollinear || !Points_getInstance().isPt2BetweenPt1AndPt3_immp3h$(ensureNotNull(pp.prev).pt, pp.pt, ensureNotNull(pp.next).pt)))) {
        lastOK = null;
        ensureNotNull(pp.prev).next = pp.next;
        ensureNotNull(pp.next).prev = pp.prev;
        pp = ensureNotNull(pp.prev);
      }
       else if (pp === lastOK) {
        break;
      }
       else {
        if (lastOK == null) {
          lastOK = pp;
        }
        pp = ensureNotNull(pp.next);
      }
    }
    outRec.points = pp;
  };
  DefaultClipper.prototype.getOutRec_0 = function (idx) {
    var outrec = this.polyOuts_0.get_za3lpa$(idx);
    while (outrec !== this.polyOuts_0.get_za3lpa$(outrec.Idx)) {
      outrec = this.polyOuts_0.get_za3lpa$(outrec.Idx);
    }
    return outrec;
  };
  DefaultClipper.prototype.insertEdgeIntoAEL_0 = function (edge, startEdge) {
    var sedge = startEdge;
    if (this.activeEdges_0 == null) {
      edge.prevInAEL = null;
      edge.nextInAEL = null;
      this.activeEdges_0 = edge;
    }
     else if (sedge == null && Edge$Companion_getInstance().doesE2InsertBeforeE1_46mff8$(ensureNotNull(this.activeEdges_0), edge)) {
      edge.prevInAEL = null;
      edge.nextInAEL = this.activeEdges_0;
      ensureNotNull(this.activeEdges_0).prevInAEL = edge;
      this.activeEdges_0 = edge;
    }
     else {
      if (sedge == null)
        sedge = this.activeEdges_0;
      while (ensureNotNull(sedge).nextInAEL != null && !Edge$Companion_getInstance().doesE2InsertBeforeE1_46mff8$(ensureNotNull(sedge.nextInAEL), edge))
        sedge = sedge.nextInAEL;
      edge.nextInAEL = sedge.nextInAEL;
      if (sedge.nextInAEL != null)
        ensureNotNull(sedge.nextInAEL).prevInAEL = edge;
      edge.prevInAEL = sedge;
      sedge.nextInAEL = edge;
    }
  };
  DefaultClipper.prototype.insertLocalMinimaIntoAEL_0 = function (botY) {
    var tmp$;
    while (this.currentLM != null && ensureNotNull(this.currentLM).y === botY) {
      var lb = ensureNotNull(this.currentLM).leftBound;
      var rb = ensureNotNull(this.currentLM).rightBound;
      this.popLocalMinima();
      var Op1 = null;
      if (lb == null) {
        this.insertEdgeIntoAEL_0(ensureNotNull(rb), null);
        this.updateWindingCount_0(rb);
        if (rb.isContributing_xil744$(ensureNotNull(this.clipFillType_0), ensureNotNull(this.subjFillType_0), ensureNotNull(this.clipType_0))) {
          Op1 = this.addOutPt_0(rb, rb.bot);
        }
      }
       else if (rb == null) {
        this.insertEdgeIntoAEL_0(lb, null);
        this.updateWindingCount_0(lb);
        if (lb.isContributing_xil744$(ensureNotNull(this.clipFillType_0), ensureNotNull(this.subjFillType_0), ensureNotNull(this.clipType_0))) {
          Op1 = this.addOutPt_0(lb, lb.bot);
        }
        this.insertScanbeam_0(lb.top.y);
      }
       else {
        this.insertEdgeIntoAEL_0(lb, null);
        this.insertEdgeIntoAEL_0(rb, lb);
        this.updateWindingCount_0(lb);
        rb.windCnt = lb.windCnt;
        rb.windCnt2 = lb.windCnt2;
        if (lb.isContributing_xil744$(ensureNotNull(this.clipFillType_0), ensureNotNull(this.subjFillType_0), ensureNotNull(this.clipType_0))) {
          Op1 = this.addLocalMinPoly_0(lb, rb, lb.bot);
        }
        this.insertScanbeam_0(lb.top.y);
      }
      if (rb != null) {
        if (rb.isHorizontal) {
          this.addEdgeToSEL_0(rb);
        }
         else {
          this.insertScanbeam_0(rb.top.y);
        }
      }
      if (lb == null || rb == null) {
        continue;
      }
      if (Op1 != null && rb.isHorizontal && this.ghostJoins_0.size > 0 && rb.windDelta !== 0) {
        tmp$ = this.ghostJoins_0;
        for (var i = 0; i !== tmp$.size; ++i) {
          var j = this.ghostJoins_0.get_za3lpa$(i);
          if (this.doHorzSegmentsOverlap_0(ensureNotNull(j.outPt1).pt.x, ensureNotNull(j.offPt).x, rb.bot.x, rb.top.x)) {
            this.addJoin_0(ensureNotNull(j.outPt1), Op1, ensureNotNull(j.offPt));
          }
        }
      }
      if (lb.outIdx >= 0 && lb.prevInAEL != null && ensureNotNull(lb.prevInAEL).current.x === lb.bot.x && ensureNotNull(lb.prevInAEL).outIdx >= 0 && Edge$Companion_getInstance().slopesEqual_46mff8$(ensureNotNull(lb.prevInAEL), lb) && lb.windDelta !== 0 && ensureNotNull(lb.prevInAEL).windDelta !== 0) {
        var Op2 = this.addOutPt_0(ensureNotNull(lb.prevInAEL), lb.bot);
        this.addJoin_0(ensureNotNull(Op1), Op2, lb.top);
      }
      if (lb.nextInAEL !== rb) {
        if (rb.outIdx >= 0 && ensureNotNull(rb.prevInAEL).outIdx >= 0 && Edge$Companion_getInstance().slopesEqual_46mff8$(ensureNotNull(rb.prevInAEL), rb) && rb.windDelta !== 0 && ensureNotNull(rb.prevInAEL).windDelta !== 0) {
          var Op2_0 = this.addOutPt_0(ensureNotNull(rb.prevInAEL), rb.bot);
          this.addJoin_0(ensureNotNull(Op1), Op2_0, rb.top);
        }
        var e = lb.nextInAEL;
        if (e != null) {
          while (e !== rb) {
            this.intersectEdges_0(rb, ensureNotNull(e), lb.current);
            e = e.nextInAEL;
          }
        }
      }
    }
  };
  DefaultClipper.prototype.insertScanbeam_0 = function (y) {
    if (this.scanbeam_0 == null) {
      this.scanbeam_0 = new ClipperBase$Scanbeam();
      ensureNotNull(this.scanbeam_0).next = null;
      ensureNotNull(this.scanbeam_0).y = y;
    }
     else if (y > ensureNotNull(this.scanbeam_0).y) {
      var newSb = new ClipperBase$Scanbeam();
      newSb.y = y;
      newSb.next = this.scanbeam_0;
      this.scanbeam_0 = newSb;
    }
     else {
      var sb2 = ensureNotNull(this.scanbeam_0);
      while (sb2.next != null && y <= ensureNotNull(sb2.next).y) {
        sb2 = ensureNotNull(sb2.next);
      }
      if (y === sb2.y) {
        return;
      }
      var newSb_0 = new ClipperBase$Scanbeam();
      newSb_0.y = y;
      newSb_0.next = sb2.next;
      sb2.next = newSb_0;
    }
  };
  DefaultClipper.prototype.intersectEdges_0 = function (e1, e2, pt) {
    var tmp$;
    var e1Contributing = e1.outIdx >= 0;
    var e2Contributing = e2.outIdx >= 0;
    this.setZ_0(pt, e1, e2);
    if (e1.windDelta === 0 || e2.windDelta === 0) {
      if (e1.windDelta === 0 && e2.windDelta === 0) {
        return;
      }
       else if (equals(e1.polyTyp, e2.polyTyp) && e1.windDelta !== e2.windDelta && equals(this.clipType_0, Clipper$ClipType$UNION_getInstance())) {
        if (e1.windDelta === 0) {
          if (e2Contributing) {
            this.addOutPt_0(e1, pt);
            if (e1Contributing) {
              e1.outIdx = -1;
            }
          }
        }
         else {
          if (e1Contributing) {
            this.addOutPt_0(e2, pt);
            if (e2Contributing) {
              e2.outIdx = -1;
            }
          }
        }
      }
       else if (!equals(e1.polyTyp, e2.polyTyp)) {
        if (e1.windDelta === 0 && abs(e2.windCnt) === 1 && (!equals(this.clipType_0, Clipper$ClipType$UNION_getInstance()) || e2.windCnt2 === 0)) {
          this.addOutPt_0(e1, pt);
          if (e1Contributing) {
            e1.outIdx = -1;
          }
        }
         else if (e2.windDelta === 0 && abs(e1.windCnt) === 1 && (!equals(this.clipType_0, Clipper$ClipType$UNION_getInstance()) || e1.windCnt2 === 0)) {
          this.addOutPt_0(e2, pt);
          if (e2Contributing) {
            e2.outIdx = -1;
          }
        }
      }
      return;
    }
    if (equals(e1.polyTyp, e2.polyTyp)) {
      if (e1.isEvenOddFillType_dta898$(ensureNotNull(this.clipFillType_0), ensureNotNull(this.subjFillType_0))) {
        var oldE1WindCnt = e1.windCnt;
        e1.windCnt = e2.windCnt;
        e2.windCnt = oldE1WindCnt;
      }
       else {
        if ((e1.windCnt + e2.windDelta | 0) === 0) {
          e1.windCnt = -e1.windCnt | 0;
        }
         else {
          e1.windCnt = e1.windCnt + e2.windDelta | 0;
        }
        if ((e2.windCnt - e1.windDelta | 0) === 0) {
          e2.windCnt = -e2.windCnt | 0;
        }
         else {
          e2.windCnt = e2.windCnt - e1.windDelta | 0;
        }
      }
    }
     else {
      if (!e2.isEvenOddFillType_dta898$(ensureNotNull(this.clipFillType_0), ensureNotNull(this.subjFillType_0))) {
        e1.windCnt2 = e1.windCnt2 + e2.windDelta | 0;
      }
       else {
        e1.windCnt2 = e1.windCnt2 === 0 ? 1 : 0;
      }
      if (!e1.isEvenOddFillType_dta898$(ensureNotNull(this.clipFillType_0), ensureNotNull(this.subjFillType_0))) {
        e2.windCnt2 = e2.windCnt2 - e1.windDelta | 0;
      }
       else {
        e2.windCnt2 = e2.windCnt2 === 0 ? 1 : 0;
      }
    }
    var e1FillType;
    var e2FillType;
    var e1FillType2;
    var e2FillType2;
    if (equals(e1.polyTyp, Clipper$PolyType$SUBJECT_getInstance())) {
      e1FillType = ensureNotNull(this.subjFillType_0);
      e1FillType2 = ensureNotNull(this.clipFillType_0);
    }
     else {
      e1FillType = ensureNotNull(this.clipFillType_0);
      e1FillType2 = ensureNotNull(this.subjFillType_0);
    }
    if (equals(e2.polyTyp, Clipper$PolyType$SUBJECT_getInstance())) {
      e2FillType = ensureNotNull(this.subjFillType_0);
      e2FillType2 = ensureNotNull(this.clipFillType_0);
    }
     else {
      e2FillType = ensureNotNull(this.clipFillType_0);
      e2FillType2 = ensureNotNull(this.subjFillType_0);
    }
    var e1Wc;
    var e2Wc;
    switch (e1FillType.name) {
      case 'POSITIVE':
        e1Wc = e1.windCnt;
        break;
      case 'NEGATIVE':
        e1Wc = -e1.windCnt | 0;
        break;
      default:e1Wc = abs(e1.windCnt);
        break;
    }
    switch (e2FillType.name) {
      case 'POSITIVE':
        e2Wc = e2.windCnt;
        break;
      case 'NEGATIVE':
        e2Wc = -e2.windCnt | 0;
        break;
      default:e2Wc = abs(e2.windCnt);
        break;
    }
    if (e1Contributing && e2Contributing) {
      if (e1Wc !== 0 && e1Wc !== 1 || (e2Wc !== 0 && e2Wc !== 1) || (!equals(e1.polyTyp, e2.polyTyp) && !equals(this.clipType_0, Clipper$ClipType$XOR_getInstance()))) {
        this.addLocalMaxPoly_0(e1, e2, pt);
      }
       else {
        this.addOutPt_0(e1, pt);
        this.addOutPt_0(e2, pt);
        Edge$Companion_getInstance().swapSides_46mff8$(e1, e2);
        Edge$Companion_getInstance().swapPolyIndexes_46mff8$(e1, e2);
      }
    }
     else if (e1Contributing) {
      if (e2Wc === 0 || e2Wc === 1) {
        this.addOutPt_0(e1, pt);
        Edge$Companion_getInstance().swapSides_46mff8$(e1, e2);
        Edge$Companion_getInstance().swapPolyIndexes_46mff8$(e1, e2);
      }
    }
     else if (e2Contributing) {
      if (e1Wc === 0 || e1Wc === 1) {
        this.addOutPt_0(e2, pt);
        Edge$Companion_getInstance().swapSides_46mff8$(e1, e2);
        Edge$Companion_getInstance().swapPolyIndexes_46mff8$(e1, e2);
      }
    }
     else if ((e1Wc === 0 || e1Wc === 1) && (e2Wc === 0 || e2Wc === 1)) {
      var e1Wc2;
      var e2Wc2;
      switch (e1FillType2.name) {
        case 'POSITIVE':
          e1Wc2 = e1.windCnt2;
          break;
        case 'NEGATIVE':
          e1Wc2 = -e1.windCnt2 | 0;
          break;
        default:e1Wc2 = abs(e1.windCnt2);
          break;
      }
      switch (e2FillType2.name) {
        case 'POSITIVE':
          e2Wc2 = e2.windCnt2;
          break;
        case 'NEGATIVE':
          e2Wc2 = -e2.windCnt2 | 0;
          break;
        default:e2Wc2 = abs(e2.windCnt2);
          break;
      }
      if (!equals(e1.polyTyp, e2.polyTyp)) {
        this.addLocalMinPoly_0(e1, e2, pt);
      }
       else if (e1Wc === 1 && e2Wc === 1) {
        tmp$ = this.clipType_0;
        if (equals(tmp$, Clipper$ClipType$INTERSECTION_getInstance())) {
          if (e1Wc2 > 0 && e2Wc2 > 0) {
            this.addLocalMinPoly_0(e1, e2, pt);
          }
        }
         else if (equals(tmp$, Clipper$ClipType$UNION_getInstance())) {
          if (e1Wc2 <= 0 && e2Wc2 <= 0) {
            this.addLocalMinPoly_0(e1, e2, pt);
          }
        }
         else if (equals(tmp$, Clipper$ClipType$DIFFERENCE_getInstance())) {
          if (equals(e1.polyTyp, Clipper$PolyType$CLIP_getInstance()) && e1Wc2 > 0 && e2Wc2 > 0 || (equals(e1.polyTyp, Clipper$PolyType$SUBJECT_getInstance()) && e1Wc2 <= 0 && e2Wc2 <= 0)) {
            this.addLocalMinPoly_0(e1, e2, pt);
          }
        }
         else if (equals(tmp$, Clipper$ClipType$XOR_getInstance()))
          this.addLocalMinPoly_0(e1, e2, pt);
      }
       else {
        Edge$Companion_getInstance().swapSides_46mff8$(e1, e2);
      }
    }
  };
  DefaultClipper.prototype.intersectPoint_0 = function (edge1, edge2, ipV) {
    ipV[0] = new MVector2();
    var ip = ipV[0];
    var b1;
    var b2;
    if (edge1.deltaX === edge2.deltaX) {
      ip.y = edge1.current.y;
      ip.x = Edge$Companion_getInstance().topX_pk92ow$(edge1, ip.y);
      return;
    }
    if (edge1.delta.x === 0.0) {
      ip.x = edge1.bot.x;
      if (edge2.isHorizontal) {
        ip.y = edge2.bot.y;
      }
       else {
        b2 = edge2.bot.y - edge2.bot.x / edge2.deltaX;
        ip.y = round(ip.x / edge2.deltaX + b2);
      }
    }
     else if (edge2.delta.x === 0.0) {
      ip.x = edge2.bot.x;
      if (edge1.isHorizontal) {
        ip.y = edge1.bot.y;
      }
       else {
        b1 = edge1.bot.y - edge1.bot.x / edge1.deltaX;
        ip.y = round(ip.x / edge1.deltaX + b1);
      }
    }
     else {
      b1 = edge1.bot.x - edge1.bot.y * edge1.deltaX;
      b2 = edge2.bot.x - edge2.bot.y * edge2.deltaX;
      var q = (b2 - b1) / (edge1.deltaX - edge2.deltaX);
      ip.y = round(q);
      var x = edge1.deltaX;
      var tmp$ = Math_0.abs(x);
      var x_0 = edge2.deltaX;
      if (tmp$ < Math_0.abs(x_0)) {
        ip.x = round(edge1.deltaX * q + b1);
      }
       else {
        ip.x = round(edge2.deltaX * q + b2);
      }
    }
    if (ip.y < edge1.top.y || ip.y < edge2.top.y) {
      if (edge1.top.y > edge2.top.y) {
        ip.y = edge1.top.y;
      }
       else {
        ip.y = edge2.top.y;
      }
      var x_1 = edge1.deltaX;
      var tmp$_0 = Math_0.abs(x_1);
      var x_2 = edge2.deltaX;
      if (tmp$_0 < Math_0.abs(x_2)) {
        ip.x = Edge$Companion_getInstance().topX_pk92ow$(edge1, ip.y);
      }
       else {
        ip.x = Edge$Companion_getInstance().topX_pk92ow$(edge2, ip.y);
      }
    }
    if (ip.y > edge1.current.y) {
      ip.y = edge1.current.y;
      var x_3 = edge1.deltaX;
      var tmp$_1 = Math_0.abs(x_3);
      var x_4 = edge2.deltaX;
      if (tmp$_1 > Math_0.abs(x_4)) {
        ip.x = Edge$Companion_getInstance().topX_pk92ow$(edge2, ip.y);
      }
       else {
        ip.x = Edge$Companion_getInstance().topX_pk92ow$(edge1, ip.y);
      }
    }
  };
  DefaultClipper.prototype.joinCommonEdges_0 = function () {
    var tmp$;
    tmp$ = this.joins_0;
    for (var i = 0; i !== tmp$.size; ++i) {
      var tmp$_0;
      var join = this.joins_0.get_za3lpa$(i);
      var outRec1 = this.getOutRec_0(ensureNotNull(join.outPt1).idx);
      var outRec2 = this.getOutRec_0(ensureNotNull(join.outPt2).idx);
      if (outRec1.points == null || outRec2.points == null) {
        continue;
      }
      var holeStateRec;
      if (outRec1 === outRec2) {
        holeStateRec = outRec1;
      }
       else if (DefaultClipper$Companion_getInstance().isParam1RightOfParam2_0(outRec1, outRec2)) {
        holeStateRec = outRec2;
      }
       else if (DefaultClipper$Companion_getInstance().isParam1RightOfParam2_0(outRec2, outRec1)) {
        holeStateRec = outRec1;
      }
       else {
        holeStateRec = Path$OutPt$Companion_getInstance().getLowerMostRec_pii0fs$(outRec1, outRec2);
      }
      if (!DefaultClipper$Companion_getInstance().joinPoints_0(join, outRec1, outRec2)) {
        continue;
      }
      if (outRec1 === outRec2) {
        outRec1.points = join.outPt1;
        outRec1.bottomPt = null;
        outRec2 = this.createOutRec_0();
        outRec2.points = join.outPt2;
        this.updateOutPtIdxs_0(outRec2);
        if (this.usingPolyTree_0) {
          tmp$_0 = this.polyOuts_0.size - 1 - 1 | 0;
          for (var j = 0; j <= tmp$_0; j++) {
            var oRec = this.polyOuts_0.get_za3lpa$(j);
            if (oRec.points == null || ensureNotNull(oRec.firstLeft).parseFirstLeft() !== outRec1 || oRec.isHole === outRec1.isHole) {
              continue;
            }
            if (DefaultClipper$Companion_getInstance().poly2ContainsPoly1_0(ensureNotNull(oRec.points), ensureNotNull(join.outPt2))) {
              oRec.firstLeft = outRec2;
            }
          }
        }
        if (DefaultClipper$Companion_getInstance().poly2ContainsPoly1_0(ensureNotNull(outRec2.points), ensureNotNull(outRec1.points))) {
          outRec2.isHole = !outRec1.isHole;
          outRec2.firstLeft = outRec1;
          if (this.usingPolyTree_0) {
            this.fixupFirstLefts2_0(outRec2, outRec1);
          }
          if ((outRec2.isHole ^ this.reverseSolution_0) === outRec2.area() > 0) {
            ensureNotNull(outRec2.points).reversePolyPtLinks();
          }
        }
         else if (DefaultClipper$Companion_getInstance().poly2ContainsPoly1_0(ensureNotNull(outRec1.points), ensureNotNull(outRec2.points))) {
          outRec2.isHole = outRec1.isHole;
          outRec1.isHole = !outRec2.isHole;
          outRec2.firstLeft = outRec1.firstLeft;
          outRec1.firstLeft = outRec2;
          if (this.usingPolyTree_0) {
            this.fixupFirstLefts2_0(outRec1, outRec2);
          }
          if ((outRec1.isHole ^ this.reverseSolution_0) === outRec1.area() > 0) {
            ensureNotNull(outRec1.points).reversePolyPtLinks();
          }
        }
         else {
          outRec2.isHole = outRec1.isHole;
          outRec2.firstLeft = outRec1.firstLeft;
          if (this.usingPolyTree_0) {
            this.fixupFirstLefts1_0(outRec1, outRec2);
          }
        }
      }
       else {
        outRec2.points = null;
        outRec2.bottomPt = null;
        outRec2.Idx = outRec1.Idx;
        outRec1.isHole = holeStateRec.isHole;
        if (holeStateRec === outRec2) {
          outRec1.firstLeft = outRec2.firstLeft;
        }
        outRec2.firstLeft = outRec1;
        if (this.usingPolyTree_0) {
          this.fixupFirstLefts2_0(outRec2, outRec1);
        }
      }
    }
  };
  DefaultClipper.prototype.popScanbeam_0 = function () {
    var y = ensureNotNull(this.scanbeam_0).y;
    this.scanbeam_0 = ensureNotNull(this.scanbeam_0).next;
    return y;
  };
  DefaultClipper.prototype.processEdgesAtTopOfScanbeam_0 = function (topY) {
    var e = this.activeEdges_0;
    while (e != null) {
      var IsMaximaEdge = e.isMaxima_14dthe$(topY);
      if (IsMaximaEdge) {
        var eMaxPair = e.maximaPair;
        IsMaximaEdge = eMaxPair == null || !eMaxPair.isHorizontal;
      }
      if (IsMaximaEdge) {
        var ePrev = e.prevInAEL;
        this.doMaxima_0(e);
        if (ePrev == null) {
          e = this.activeEdges_0;
        }
         else {
          e = ePrev.nextInAEL;
        }
      }
       else {
        if (e.isIntermediate_14dthe$(topY) && ensureNotNull(e.nextInLML).isHorizontal) {
          var t = [e];
          this.updateEdgeIntoAEL_0(t);
          e = t[0];
          if (e.outIdx >= 0) {
            this.addOutPt_0(e, e.bot);
          }
          this.addEdgeToSEL_0(e);
        }
         else {
          e.current.x = Edge$Companion_getInstance().topX_pk92ow$(e, topY);
          e.current.y = topY;
        }
        if (this.strictlySimple_0) {
          var ePrev_0 = e.prevInAEL;
          if (e.outIdx >= 0 && e.windDelta !== 0 && ePrev_0 != null && ePrev_0.outIdx >= 0 && ePrev_0.current.x === e.current.x && ePrev_0.windDelta !== 0) {
            var ip = Vector2_1(e.current);
            this.setZ_0(ip, ePrev_0, e);
            var op = this.addOutPt_0(ePrev_0, ip);
            var op2 = this.addOutPt_0(e, ip);
            this.addJoin_0(op, op2, ip);
          }
        }
        e = e.nextInAEL;
      }
    }
    this.processHorizontals_0(true);
    e = this.activeEdges_0;
    while (e != null) {
      if (e.isIntermediate_14dthe$(topY)) {
        var op_0 = null;
        if (e.outIdx >= 0) {
          op_0 = this.addOutPt_0(e, e.top);
        }
        var t_0 = [e];
        this.updateEdgeIntoAEL_0(t_0);
        e = t_0[0];
        var ePrev_1 = e.prevInAEL;
        var eNext = e.nextInAEL;
        if (ePrev_1 != null && ePrev_1.current.x === e.bot.x && ePrev_1.current.y === e.bot.y && op_0 != null && ePrev_1.outIdx >= 0 && ePrev_1.current.y > ePrev_1.top.y && Edge$Companion_getInstance().slopesEqual_46mff8$(e, ePrev_1) && e.windDelta !== 0 && ePrev_1.windDelta !== 0) {
          var op2_0 = this.addOutPt_0(ePrev_1, e.bot);
          this.addJoin_0(op_0, op2_0, e.top);
        }
         else if (eNext != null && eNext.current.x === e.bot.x && eNext.current.y === e.bot.y && op_0 != null && eNext.outIdx >= 0 && eNext.current.y > eNext.top.y && Edge$Companion_getInstance().slopesEqual_46mff8$(e, eNext) && e.windDelta !== 0 && eNext.windDelta !== 0) {
          var op2_1 = this.addOutPt_0(eNext, e.bot);
          this.addJoin_0(op_0, op2_1, e.top);
        }
      }
      e = e.nextInAEL;
    }
  };
  DefaultClipper.prototype.processHorizontal_0 = function (horizontalEdge, isTopOfScanbeam) {
    var horzEdge = horizontalEdge;
    var array = Array_0(1);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = Clipper$Direction$LEFT_TO_RIGHT_getInstance();
    }
    var dir = array;
    var horzLeft = new Float64Array(1);
    var horzRight = new Float64Array(1);
    DefaultClipper$Companion_getInstance().getHorzDirection_0(horzEdge, dir, horzLeft, horzRight);
    var eLastHorz = horzEdge;
    var eMaxPair = null;
    while (eLastHorz.nextInLML != null && ensureNotNull(eLastHorz.nextInLML).isHorizontal) {
      eLastHorz = ensureNotNull(eLastHorz.nextInLML);
    }
    if (eLastHorz.nextInLML == null) {
      eMaxPair = eLastHorz.maximaPair;
    }
    while (true) {
      var IsLastHorz = horzEdge === eLastHorz;
      var e = horzEdge.getNextInAEL_tnm50z$(dir[0]);
      while (e != null && (e.current.x !== horzEdge.top.x || horzEdge.nextInLML == null || e.deltaX >= ensureNotNull(horzEdge.nextInLML).deltaX)) {
        var eNext = e.getNextInAEL_tnm50z$(dir[0]);
        if (dir[0] === Clipper$Direction$LEFT_TO_RIGHT_getInstance() && e.current.x <= horzRight[0] || (dir[0] === Clipper$Direction$RIGHT_TO_LEFT_getInstance() && e.current.x >= horzLeft[0])) {
          if (e === eMaxPair && IsLastHorz) {
            if (horzEdge.outIdx >= 0) {
              var op1 = this.addOutPt_0(horzEdge, horzEdge.top);
              var eNextHorz = this.sortedEdges_0;
              while (eNextHorz != null) {
                if (eNextHorz.outIdx >= 0 && this.doHorzSegmentsOverlap_0(horzEdge.bot.x, horzEdge.top.x, eNextHorz.bot.x, eNextHorz.top.x)) {
                  var op2 = this.addOutPt_0(eNextHorz, eNextHorz.bot);
                  this.addJoin_0(op2, op1, eNextHorz.top);
                }
                eNextHorz = eNextHorz.nextInSEL;
              }
              this.addGhostJoin_0(op1, horzEdge.bot);
              this.addLocalMaxPoly_0(horzEdge, eMaxPair, horzEdge.top);
            }
            this.deleteFromAEL_0(horzEdge);
            this.deleteFromAEL_0(eMaxPair);
            return;
          }
           else if (dir[0] === Clipper$Direction$LEFT_TO_RIGHT_getInstance()) {
            var x = e.current.x;
            var y = horzEdge.current.y;
            var Pt = new IVector2(numberToDouble(x), numberToDouble(y));
            this.intersectEdges_0(horzEdge, e, Pt);
          }
           else {
            var x_0 = e.current.x;
            var y_0 = horzEdge.current.y;
            var Pt_0 = new IVector2(numberToDouble(x_0), numberToDouble(y_0));
            this.intersectEdges_0(e, horzEdge, Pt_0);
          }
          this.swapPositionsInAEL_0(horzEdge, e);
        }
         else if (dir[0] === Clipper$Direction$LEFT_TO_RIGHT_getInstance() && e.current.x >= horzRight[0] || (dir[0] === Clipper$Direction$RIGHT_TO_LEFT_getInstance() && e.current.x <= horzLeft[0])) {
          break;
        }
        e = eNext;
      }
      if (horzEdge.nextInLML != null && ensureNotNull(horzEdge.nextInLML).isHorizontal) {
        var t = [horzEdge];
        this.updateEdgeIntoAEL_0(t);
        horzEdge = t[0];
        if (horzEdge.outIdx >= 0) {
          this.addOutPt_0(horzEdge, horzEdge.bot);
        }
        DefaultClipper$Companion_getInstance().getHorzDirection_0(horzEdge, dir.slice(), horzLeft, horzRight);
      }
       else {
        break;
      }
    }
    if (horzEdge.nextInLML != null) {
      if (horzEdge.outIdx >= 0) {
        var op1_0 = this.addOutPt_0(horzEdge, horzEdge.top);
        if (isTopOfScanbeam) {
          this.addGhostJoin_0(op1_0, horzEdge.bot);
        }
        var t_0 = [horzEdge];
        this.updateEdgeIntoAEL_0(t_0);
        horzEdge = t_0[0];
        if (horzEdge.windDelta === 0) {
          return;
        }
        var ePrev = horzEdge.prevInAEL;
        var eNext_0 = horzEdge.nextInAEL;
        if (ePrev != null && ePrev.current.x === horzEdge.bot.x && ePrev.current.y === horzEdge.bot.y && ePrev.windDelta !== 0 && ePrev.outIdx >= 0 && ePrev.current.y > ePrev.top.y && Edge$Companion_getInstance().slopesEqual_46mff8$(horzEdge, ePrev)) {
          var op2_0 = this.addOutPt_0(ePrev, horzEdge.bot);
          this.addJoin_0(op1_0, op2_0, horzEdge.top);
        }
         else if (eNext_0 != null && eNext_0.current.x === horzEdge.bot.x && eNext_0.current.y === horzEdge.bot.y && eNext_0.windDelta !== 0 && eNext_0.outIdx >= 0 && eNext_0.current.y > eNext_0.top.y && Edge$Companion_getInstance().slopesEqual_46mff8$(horzEdge, eNext_0)) {
          var op2_1 = this.addOutPt_0(eNext_0, horzEdge.bot);
          this.addJoin_0(op1_0, op2_1, horzEdge.top);
        }
      }
       else {
        var t_1 = [horzEdge];
        this.updateEdgeIntoAEL_0(t_1);
        horzEdge = t_1[0];
      }
    }
     else {
      if (horzEdge.outIdx >= 0) {
        this.addOutPt_0(horzEdge, horzEdge.top);
      }
      this.deleteFromAEL_0(horzEdge);
    }
  };
  DefaultClipper.prototype.processHorizontals_0 = function (isTopOfScanbeam) {
    var horzEdge = this.sortedEdges_0;
    while (horzEdge != null) {
      this.deleteFromSEL_0(horzEdge);
      this.processHorizontal_0(horzEdge, isTopOfScanbeam);
      horzEdge = this.sortedEdges_0;
    }
  };
  DefaultClipper.prototype.processIntersections_0 = function (topY) {
    if (this.activeEdges_0 == null)
      return true;
    try {
      this.buildIntersectList_0(topY);
      if (this.intersectList_0.size === 0)
        return true;
      if (this.intersectList_0.size === 1 || this.fixupIntersectionOrder_0())
        this.processIntersectList_0();
      else
        return false;
    }
     catch (e) {
      if (Kotlin.isType(e, Exception)) {
        this.sortedEdges_0 = null;
        this.intersectList_0.clear();
        println(e);
        throw IllegalStateException_init('ProcessIntersections error');
      }
       else
        throw e;
    }
    this.sortedEdges_0 = null;
    return true;
  };
  DefaultClipper.prototype.processIntersectList_0 = function () {
    var tmp$;
    tmp$ = this.intersectList_0;
    for (var i = 0; i !== tmp$.size; ++i) {
      var iNode = this.intersectList_0.get_za3lpa$(i);
      this.intersectEdges_0(ensureNotNull(iNode.edge1), ensureNotNull(iNode.Edge2), ensureNotNull(iNode.pt));
      this.swapPositionsInAEL_0(ensureNotNull(iNode.edge1), ensureNotNull(iNode.Edge2));
    }
    this.intersectList_0.clear();
  };
  DefaultClipper.prototype.reset = function () {
    ClipperBase.prototype.reset.call(this);
    this.scanbeam_0 = null;
    this.activeEdges_0 = null;
    this.sortedEdges_0 = null;
    var lm = this.minimaList;
    while (lm != null) {
      this.insertScanbeam_0(lm.y);
      lm = lm.next;
    }
  };
  DefaultClipper.prototype.setHoleState_0 = function (e, outRec) {
    var isHole = false;
    var e2 = e.prevInAEL;
    while (e2 != null) {
      if (e2.outIdx >= 0 && e2.windDelta !== 0) {
        isHole = !isHole;
        if (outRec.firstLeft == null) {
          outRec.firstLeft = this.polyOuts_0.get_za3lpa$(e2.outIdx);
        }
      }
      e2 = e2.prevInAEL;
    }
    if (isHole) {
      outRec.isHole = true;
    }
  };
  DefaultClipper.prototype.setZ_0 = function (pt, e1, e2) {
  };
  DefaultClipper.prototype.swapPositionsInAEL_0 = function (edge1, edge2) {
    if (edge1.nextInAEL === edge1.prevInAEL || edge2.nextInAEL === edge2.prevInAEL) {
      return;
    }
    if (edge1.nextInAEL === edge2) {
      var next = edge2.nextInAEL;
      if (next != null) {
        next.prevInAEL = edge1;
      }
      var prev = edge1.prevInAEL;
      if (prev != null) {
        prev.nextInAEL = edge2;
      }
      edge2.prevInAEL = prev;
      edge2.nextInAEL = edge1;
      edge1.prevInAEL = edge2;
      edge1.nextInAEL = next;
    }
     else if (edge2.nextInAEL === edge1) {
      var next_0 = edge1.nextInAEL;
      if (next_0 != null) {
        next_0.prevInAEL = edge2;
      }
      var prev_0 = edge2.prevInAEL;
      if (prev_0 != null) {
        prev_0.nextInAEL = edge1;
      }
      edge1.prevInAEL = prev_0;
      edge1.nextInAEL = edge2;
      edge2.prevInAEL = edge1;
      edge2.nextInAEL = next_0;
    }
     else {
      var next_1 = edge1.nextInAEL;
      var prev_1 = edge1.prevInAEL;
      edge1.nextInAEL = edge2.nextInAEL;
      if (edge1.nextInAEL != null) {
        ensureNotNull(edge1.nextInAEL).prevInAEL = edge1;
      }
      edge1.prevInAEL = edge2.prevInAEL;
      if (edge1.prevInAEL != null) {
        ensureNotNull(edge1.prevInAEL).nextInAEL = edge1;
      }
      edge2.nextInAEL = next_1;
      if (edge2.nextInAEL != null) {
        ensureNotNull(edge2.nextInAEL).prevInAEL = edge2;
      }
      edge2.prevInAEL = prev_1;
      if (edge2.prevInAEL != null) {
        ensureNotNull(edge2.prevInAEL).nextInAEL = edge2;
      }
    }
    if (edge1.prevInAEL == null) {
      this.activeEdges_0 = edge1;
    }
     else if (edge2.prevInAEL == null) {
      this.activeEdges_0 = edge2;
    }
  };
  DefaultClipper.prototype.swapPositionsInSEL_0 = function (edge1, edge2) {
    if (edge1.nextInSEL == null && edge1.prevInSEL == null)
      return;
    if (edge2.nextInSEL == null && edge2.prevInSEL == null)
      return;
    if (edge1.nextInSEL === edge2) {
      var next = edge2.nextInSEL;
      if (next != null) {
        next.prevInSEL = edge1;
      }
      var prev = edge1.prevInSEL;
      if (prev != null) {
        prev.nextInSEL = edge2;
      }
      edge2.prevInSEL = prev;
      edge2.nextInSEL = edge1;
      edge1.prevInSEL = edge2;
      edge1.nextInSEL = next;
    }
     else if (edge2.nextInSEL === edge1) {
      var next_0 = edge1.nextInSEL;
      if (next_0 != null) {
        next_0.prevInSEL = edge2;
      }
      var prev_0 = edge2.prevInSEL;
      if (prev_0 != null) {
        prev_0.nextInSEL = edge1;
      }
      edge1.prevInSEL = prev_0;
      edge1.nextInSEL = edge2;
      edge2.prevInSEL = edge1;
      edge2.nextInSEL = next_0;
    }
     else {
      var next_1 = edge1.nextInSEL;
      var prev_1 = edge1.prevInSEL;
      edge1.nextInSEL = edge2.nextInSEL;
      if (edge1.nextInSEL != null) {
        ensureNotNull(edge1.nextInSEL).prevInSEL = edge1;
      }
      edge1.prevInSEL = edge2.prevInSEL;
      if (edge1.prevInSEL != null) {
        ensureNotNull(edge1.prevInSEL).nextInSEL = edge1;
      }
      edge2.nextInSEL = next_1;
      if (edge2.nextInSEL != null) {
        ensureNotNull(edge2.nextInSEL).prevInSEL = edge2;
      }
      edge2.prevInSEL = prev_1;
      if (edge2.prevInSEL != null) {
        ensureNotNull(edge2.prevInSEL).nextInSEL = edge2;
      }
    }
    if (edge1.prevInSEL == null) {
      this.sortedEdges_0 = edge1;
    }
     else if (edge2.prevInSEL == null) {
      this.sortedEdges_0 = edge2;
    }
  };
  DefaultClipper.prototype.updateEdgeIntoAEL_0 = function (eV) {
    var e = eV[0];
    if (e.nextInLML == null) {
      throw IllegalStateException_init('UpdateEdgeIntoAEL: invalid call');
    }
    var AelPrev = e.prevInAEL;
    var AelNext = e.nextInAEL;
    ensureNotNull(e.nextInLML).outIdx = e.outIdx;
    if (AelPrev != null) {
      AelPrev.nextInAEL = e.nextInLML;
    }
     else {
      this.activeEdges_0 = e.nextInLML;
    }
    if (AelNext != null) {
      AelNext.prevInAEL = e.nextInLML;
    }
    ensureNotNull(e.nextInLML).side = e.side;
    ensureNotNull(e.nextInLML).windDelta = e.windDelta;
    ensureNotNull(e.nextInLML).windCnt = e.windCnt;
    ensureNotNull(e.nextInLML).windCnt2 = e.windCnt2;
    e = ensureNotNull(e.nextInLML);
    eV[0] = e;
    e.current = MVector2_init_2(e.bot);
    e.prevInAEL = AelPrev;
    e.nextInAEL = AelNext;
    if (!e.isHorizontal) {
      this.insertScanbeam_0(e.top.y);
    }
  };
  DefaultClipper.prototype.updateOutPtIdxs_0 = function (outrec) {
    var op = ensureNotNull(outrec.points);
    do {
      op.idx = outrec.Idx;
      op = ensureNotNull(op.prev);
    }
     while (op !== outrec.points);
  };
  DefaultClipper.prototype.updateWindingCount_0 = function (edge) {
    var e = edge.prevInAEL;
    while (e != null && (!equals(e.polyTyp, edge.polyTyp) || e.windDelta === 0)) {
      e = e.prevInAEL;
    }
    if (e == null) {
      edge.windCnt = edge.windDelta === 0 ? 1 : edge.windDelta;
      edge.windCnt2 = 0;
      e = this.activeEdges_0;
    }
     else if (edge.windDelta === 0 && !equals(this.clipType_0, Clipper$ClipType$UNION_getInstance())) {
      edge.windCnt = 1;
      edge.windCnt2 = e.windCnt2;
      e = e.nextInAEL;
    }
     else if (edge.isEvenOddFillType_dta898$(ensureNotNull(this.clipFillType_0), ensureNotNull(this.subjFillType_0))) {
      if (edge.windDelta === 0) {
        var Inside = true;
        var e2 = e.prevInAEL;
        while (e2 != null) {
          if (equals(e2.polyTyp, e.polyTyp) && e2.windDelta !== 0) {
            Inside = !Inside;
          }
          e2 = e2.prevInAEL;
        }
        edge.windCnt = Inside ? 0 : 1;
      }
       else {
        edge.windCnt = edge.windDelta;
      }
      edge.windCnt2 = e.windCnt2;
      e = e.nextInAEL;
    }
     else {
      if (Kotlin.imul(e.windCnt, e.windDelta) < 0) {
        if (abs(e.windCnt) > 1) {
          if (Kotlin.imul(e.windDelta, edge.windDelta) < 0) {
            edge.windCnt = e.windCnt;
          }
           else {
            edge.windCnt = e.windCnt + edge.windDelta | 0;
          }
        }
         else {
          edge.windCnt = edge.windDelta === 0 ? 1 : edge.windDelta;
        }
      }
       else {
        if (edge.windDelta === 0) {
          edge.windCnt = e.windCnt < 0 ? e.windCnt - 1 | 0 : e.windCnt + 1 | 0;
        }
         else if (Kotlin.imul(e.windDelta, edge.windDelta) < 0) {
          edge.windCnt = e.windCnt;
        }
         else {
          edge.windCnt = e.windCnt + edge.windDelta | 0;
        }
      }
      edge.windCnt2 = e.windCnt2;
      e = e.nextInAEL;
    }
    if (edge.isEvenOddAltFillType_dta898$(ensureNotNull(this.clipFillType_0), ensureNotNull(this.subjFillType_0))) {
      while (e !== edge) {
        if (ensureNotNull(e).windDelta !== 0) {
          edge.windCnt2 = edge.windCnt2 === 0 ? 1 : 0;
        }
        e = e.nextInAEL;
      }
    }
     else {
      while (e !== edge) {
        edge.windCnt2 = edge.windCnt2 + ensureNotNull(e).windDelta | 0;
        e = e.nextInAEL;
      }
    }
  };
  function DefaultClipper$Companion() {
    DefaultClipper$Companion_instance = this;
  }
  DefaultClipper$Companion.prototype.getHorzDirection_0 = function (HorzEdge, Dir, Left, Right) {
    if (HorzEdge.bot.x < HorzEdge.top.x) {
      Left[0] = HorzEdge.bot.x;
      Right[0] = HorzEdge.top.x;
      Dir[0] = Clipper$Direction$LEFT_TO_RIGHT_getInstance();
    }
     else {
      Left[0] = HorzEdge.top.x;
      Right[0] = HorzEdge.bot.x;
      Dir[0] = Clipper$Direction$RIGHT_TO_LEFT_getInstance();
    }
  };
  DefaultClipper$Companion.prototype.getOverlap_0 = function (a1, a2, b1, b2, Left, Right) {
    if (a1 < a2) {
      if (b1 < b2) {
        Left[0] = Math_getInstance().max_lu1900$(a1, b1);
        Right[0] = Math_getInstance().min_lu1900$(a2, b2);
      }
       else {
        Left[0] = Math_getInstance().max_lu1900$(a1, b2);
        Right[0] = Math_getInstance().min_lu1900$(a2, b1);
      }
    }
     else {
      if (b1 < b2) {
        Left[0] = Math_getInstance().max_lu1900$(a2, b1);
        Right[0] = Math_getInstance().min_lu1900$(a1, b2);
      }
       else {
        Left[0] = Math_getInstance().max_lu1900$(a2, b2);
        Right[0] = Math_getInstance().min_lu1900$(a1, b1);
      }
    }
    return Left[0] < Right[0];
  };
  DefaultClipper$Companion.prototype.isParam1RightOfParam2_0 = function (outRec1, outRec2) {
    var outr = outRec1;
    do {
      outr = ensureNotNull(outr).firstLeft;
      if (outr === outRec2) {
        return true;
      }
    }
     while (outr != null);
    return false;
  };
  DefaultClipper$Companion.prototype.isPointInPolygon_0 = function (pt, opp) {
    var op = opp;
    var result = 0;
    var startOp = op;
    var ptx = pt.x;
    var pty = pt.y;
    var poly0x = op.pt.x;
    var poly0y = op.pt.y;
    do {
      op = ensureNotNull(op.next);
      var poly1x = op.pt.x;
      var poly1y = op.pt.y;
      if (poly1y === pty) {
        if (poly1x === ptx || (poly0y === pty && poly1x > ptx === poly0x < ptx))
          return -1;
      }
      if (poly0y < pty !== poly1y < pty) {
        if (poly0x >= ptx) {
          if (poly1x > ptx) {
            result = 1 - result | 0;
          }
           else {
            var d = (poly0x - ptx) * (poly1y - pty) - (poly1x - ptx) * (poly0y - pty);
            if (d === 0.0)
              return -1;
            if (d > 0 === poly1y > poly0y)
              result = 1 - result | 0;
          }
        }
         else {
          if (poly1x > ptx) {
            var d_0 = (poly0x - ptx) * (poly1y - pty) - (poly1x - ptx) * (poly0y - pty);
            if (d_0 === 0.0)
              return -1;
            if (d_0 > 0 === poly1y > poly0y)
              result = 1 - result | 0;
          }
        }
      }
      poly0x = poly1x;
      poly0y = poly1y;
    }
     while (startOp !== op);
    return result;
  };
  DefaultClipper$Companion.prototype.joinHorz_0 = function (op_1, op_1b, op_2, op_2b, Pt, DiscardLeft) {
    var op1 = op_1;
    var op1b = op_1b;
    var op2 = op_2;
    var op2b = op_2b;
    var Dir1 = op1.pt.x > op1b.pt.x ? Clipper$Direction$RIGHT_TO_LEFT_getInstance() : Clipper$Direction$LEFT_TO_RIGHT_getInstance();
    var Dir2 = op2.pt.x > op2b.pt.x ? Clipper$Direction$RIGHT_TO_LEFT_getInstance() : Clipper$Direction$LEFT_TO_RIGHT_getInstance();
    if (Dir1 === Dir2) {
      return false;
    }
    if (Dir1 === Clipper$Direction$LEFT_TO_RIGHT_getInstance()) {
      while (ensureNotNull(op1.next).pt.x <= Pt.x && ensureNotNull(op1.next).pt.x >= op1.pt.x && ensureNotNull(op1.next).pt.y === Pt.y)
        op1 = ensureNotNull(op1.next);
      if (DiscardLeft && op1.pt.x !== Pt.x)
        op1 = ensureNotNull(op1.next);
      op1b = op1.duplicate_6taknv$(!DiscardLeft);
      if (!equals(op1b.pt, Pt)) {
        op1 = op1b;
        op1.pt = Vector2_1(Pt);
        op1b = op1.duplicate_6taknv$(!DiscardLeft);
      }
    }
     else {
      while (ensureNotNull(op1.next).pt.x >= Pt.x && ensureNotNull(op1.next).pt.x <= op1.pt.x && ensureNotNull(op1.next).pt.y === Pt.y)
        op1 = ensureNotNull(op1.next);
      if (!DiscardLeft && op1.pt.x !== Pt.x)
        op1 = ensureNotNull(op1.next);
      op1b = op1.duplicate_6taknv$(DiscardLeft);
      if (!equals(op1b.pt, Pt)) {
        op1 = op1b;
        op1.pt = Vector2_1(Pt);
        op1b = op1.duplicate_6taknv$(DiscardLeft);
      }
    }
    if (Dir2 === Clipper$Direction$LEFT_TO_RIGHT_getInstance()) {
      while (ensureNotNull(op2.next).pt.x <= Pt.x && ensureNotNull(op2.next).pt.x >= op2.pt.x && ensureNotNull(op2.next).pt.y === Pt.y)
        op2 = ensureNotNull(op2.next);
      if (DiscardLeft && op2.pt.x !== Pt.x)
        op2 = ensureNotNull(op2.next);
      op2b = op2.duplicate_6taknv$(!DiscardLeft);
      if (!equals(op2b.pt, Pt)) {
        op2 = op2b;
        op2.pt = Vector2_1(Pt);
        op2b = op2.duplicate_6taknv$(!DiscardLeft);
      }
    }
     else {
      while (ensureNotNull(op2.next).pt.x >= Pt.x && ensureNotNull(op2.next).pt.x <= op2.pt.x && ensureNotNull(op2.next).pt.y === Pt.y)
        op2 = ensureNotNull(op2.next);
      if (!DiscardLeft && op2.pt.x !== Pt.x)
        op2 = ensureNotNull(op2.next);
      op2b = op2.duplicate_6taknv$(DiscardLeft);
      if (!equals(op2b.pt, Pt)) {
        op2 = op2b;
        op2.pt = Vector2_1(Pt);
        op2b = op2.duplicate_6taknv$(DiscardLeft);
      }
    }
    if (Dir1 === Clipper$Direction$LEFT_TO_RIGHT_getInstance() === DiscardLeft) {
      op1.prev = op2;
      op2.next = op1;
      op1b.next = op2b;
      op2b.prev = op1b;
    }
     else {
      op1.next = op2;
      op2.prev = op1;
      op1b.prev = op2b;
      op2b.next = op1b;
    }
    return true;
  };
  DefaultClipper$Companion.prototype.joinPoints_0 = function (j, outRec1, outRec2) {
    var op1 = ensureNotNull(j.outPt1);
    var op1b;
    var op2 = ensureNotNull(j.outPt2);
    var op2b;
    var isHorizontal = ensureNotNull(j.outPt1).pt.y === ensureNotNull(j.offPt).y;
    if (isHorizontal && equals(j.offPt, ensureNotNull(j.outPt1).pt) && equals(j.offPt, ensureNotNull(j.outPt2).pt)) {
      if (outRec1 !== outRec2)
        return false;
      op1b = ensureNotNull(ensureNotNull(j.outPt1).next);
      while (op1b !== op1 && equals(op1b.pt, j.offPt))
        op1b = ensureNotNull(op1b.next);
      var reverse1 = op1b.pt.y > ensureNotNull(j.offPt).y;
      op2b = ensureNotNull(ensureNotNull(j.outPt2).next);
      while (op2b !== op2 && equals(op2b.pt, j.offPt))
        op2b = ensureNotNull(op2b.next);
      var reverse2 = op2b.pt.y > ensureNotNull(j.offPt).y;
      if (reverse1 === reverse2)
        return false;
      if (reverse1) {
        op1b = op1.duplicate_6taknv$(false);
        op2b = op2.duplicate_6taknv$(true);
        op1.prev = op2;
        op2.next = op1;
        op1b.next = op2b;
        op2b.prev = op1b;
        j.outPt1 = op1;
        j.outPt2 = op1b;
        return true;
      }
       else {
        op1b = op1.duplicate_6taknv$(true);
        op2b = op2.duplicate_6taknv$(false);
        op1.next = op2;
        op2.prev = op1;
        op1b.prev = op2b;
        op2b.next = op1b;
        j.outPt1 = op1;
        j.outPt2 = op1b;
        return true;
      }
    }
     else if (isHorizontal) {
      op1b = op1;
      while (ensureNotNull(op1.prev).pt.y === op1.pt.y && op1.prev !== op1b && op1.prev !== op2)
        op1 = ensureNotNull(op1.prev);
      while (ensureNotNull(op1b.next).pt.y === op1b.pt.y && op1b.next !== op1 && op1b.next !== op2)
        op1b = ensureNotNull(op1b.next);
      if (op1b.next === op1 || op1b.next === op2)
        return false;
      op2b = op2;
      while (ensureNotNull(op2.prev).pt.y === op2.pt.y && op2.prev !== op2b && op2.prev !== op1b)
        op2 = ensureNotNull(op2.prev);
      while (ensureNotNull(op2b.next).pt.y === op2b.pt.y && op2b.next !== op2 && op2b.next !== op1)
        op2b = ensureNotNull(op2b.next);
      if (op2b.next === op2 || op2b.next === op1)
        return false;
      var LeftV = new Float64Array(1);
      var RightV = new Float64Array(1);
      if (!this.getOverlap_0(op1.pt.x, op1b.pt.x, op2.pt.x, op2b.pt.x, LeftV, RightV))
        return false;
      var Left = LeftV[0];
      var Right = RightV[0];
      var Pt;
      var DiscardLeftSide;
      if (rangeTo(Left, Right).contains_mef7kx$(op1.pt.x)) {
        Pt = Vector2_1(op1.pt);
        DiscardLeftSide = op1.pt.x > op1b.pt.x;
      }
       else if (rangeTo(Left, Right).contains_mef7kx$(op2.pt.x)) {
        Pt = Vector2_1(op2.pt);
        DiscardLeftSide = op2.pt.x > op2b.pt.x;
      }
       else if (rangeTo(Left, Right).contains_mef7kx$(op1b.pt.x)) {
        Pt = Vector2_1(op1b.pt);
        DiscardLeftSide = op1b.pt.x > op1.pt.x;
      }
       else {
        Pt = Vector2_1(op2b.pt);
        DiscardLeftSide = op2b.pt.x > op2.pt.x;
      }
      j.outPt1 = op1;
      j.outPt2 = op2;
      return this.joinHorz_0(op1, op1b, op2, op2b, Pt, DiscardLeftSide);
    }
     else {
      op1b = ensureNotNull(op1.next);
      while (equals(op1b.pt, op1.pt) && op1b !== op1)
        op1b = ensureNotNull(op1b.next);
      var Reverse1 = op1b.pt.y > op1.pt.y || !Points_getInstance().slopesEqual_immp3h$(op1.pt, op1b.pt, ensureNotNull(j.offPt));
      if (Reverse1) {
        op1b = ensureNotNull(op1.prev);
        while (equals(op1b.pt, op1.pt) && op1b !== op1)
          op1b = ensureNotNull(op1b.prev);
        if (op1b.pt.y > op1.pt.y || !Points_getInstance().slopesEqual_immp3h$(op1.pt, op1b.pt, ensureNotNull(j.offPt)))
          return false;
      }
      op2b = ensureNotNull(op2.next);
      while (equals(op2b.pt, op2.pt) && op2b !== op2)
        op2b = ensureNotNull(op2b.next);
      var Reverse2 = op2b.pt.y > op2.pt.y || !Points_getInstance().slopesEqual_immp3h$(op2.pt, op2b.pt, ensureNotNull(j.offPt));
      if (Reverse2) {
        op2b = ensureNotNull(op2.prev);
        while (equals(op2b.pt, op2.pt) && op2b !== op2)
          op2b = ensureNotNull(op2b.prev);
        if (op2b.pt.y > op2.pt.y || !Points_getInstance().slopesEqual_immp3h$(op2.pt, op2b.pt, ensureNotNull(j.offPt)))
          return false;
      }
      if (op1b === op1 || op2b === op2 || op1b === op2b || (outRec1 === outRec2 && Reverse1 === Reverse2))
        return false;
      if (Reverse1) {
        op1b = op1.duplicate_6taknv$(false);
        op2b = op2.duplicate_6taknv$(true);
        op1.prev = op2;
        op2.next = op1;
        op1b.next = op2b;
        op2b.prev = op1b;
        j.outPt1 = op1;
        j.outPt2 = op1b;
        return true;
      }
       else {
        op1b = op1.duplicate_6taknv$(true);
        op2b = op2.duplicate_6taknv$(false);
        op1.next = op2;
        op2.prev = op1;
        op1b.prev = op2b;
        op2b.next = op1b;
        j.outPt1 = op1;
        j.outPt2 = op1b;
        return true;
      }
    }
  };
  DefaultClipper$Companion.prototype.minkowski_0 = function (pattern, path, IsSum, IsClosed) {
    var tmp$, tmp$_0, tmp$_1;
    var delta = IsClosed ? 1 : 0;
    var polyCnt = pattern.size;
    var pathCnt = path.size;
    var result = Paths_init_0(pathCnt);
    if (IsSum) {
      for (var i = 0; i < pathCnt; i++) {
        var p = Path_init(polyCnt);
        tmp$ = pattern.iterator();
        while (tmp$.hasNext()) {
          var ip = tmp$.next();
          var x = path.get_za3lpa$(i).x + ip.x;
          var y = path.get_za3lpa$(i).y + ip.y;
          p.add_11rb$(new IVector2(numberToDouble(x), numberToDouble(y)));
        }
        result.add_11rb$(p);
      }
    }
     else {
      for (var i_0 = 0; i_0 < pathCnt; i_0++) {
        var p_0 = Path_init(polyCnt);
        tmp$_0 = pattern.iterator();
        while (tmp$_0.hasNext()) {
          var ip_0 = tmp$_0.next();
          var x_0 = path.get_za3lpa$(i_0).x - ip_0.x;
          var y_0 = path.get_za3lpa$(i_0).y - ip_0.y;
          p_0.add_11rb$(new IVector2(numberToDouble(x_0), numberToDouble(y_0)));
        }
        result.add_11rb$(p_0);
      }
    }
    var quads = Paths_init_0(Kotlin.imul(pathCnt + delta | 0, polyCnt + 1 | 0));
    tmp$_1 = pathCnt - 1 + delta | 0;
    for (var i_1 = 0; i_1 < tmp$_1; i_1++) {
      for (var j = 0; j < polyCnt; j++) {
        var quad = Path_init(4);
        quad.add_11rb$(result.get_za3lpa$(i_1 % pathCnt).get_za3lpa$(j % polyCnt));
        quad.add_11rb$(result.get_za3lpa$((i_1 + 1 | 0) % pathCnt).get_za3lpa$(j % polyCnt));
        quad.add_11rb$(result.get_za3lpa$((i_1 + 1 | 0) % pathCnt).get_za3lpa$((j + 1 | 0) % polyCnt));
        quad.add_11rb$(result.get_za3lpa$(i_1 % pathCnt).get_za3lpa$((j + 1 | 0) % polyCnt));
        if (!quad.orientation())
          reverse(quad);
        quads.add_11rb$(quad);
      }
    }
    return quads;
  };
  DefaultClipper$Companion.prototype.minkowskiDiff_ecnd78$ = function (poly1, poly2) {
    var paths = this.minkowski_0(poly1, poly2, false, true);
    var c = new DefaultClipper();
    c.addPaths_kw2pds$(paths, Clipper$PolyType$SUBJECT_getInstance(), true);
    c.execute_h3bo99$(Clipper$ClipType$UNION_getInstance(), paths, Clipper$PolyFillType$NON_ZERO_getInstance(), Clipper$PolyFillType$NON_ZERO_getInstance());
    return paths;
  };
  DefaultClipper$Companion.prototype.minkowskiSum_k0nfs5$ = function (pattern, path, pathIsClosed) {
    var paths = this.minkowski_0(pattern, path, true, pathIsClosed);
    var c = new DefaultClipper();
    c.addPaths_kw2pds$(paths, Clipper$PolyType$SUBJECT_getInstance(), true);
    c.execute_h3bo99$(Clipper$ClipType$UNION_getInstance(), paths, Clipper$PolyFillType$NON_ZERO_getInstance(), Clipper$PolyFillType$NON_ZERO_getInstance());
    return paths;
  };
  DefaultClipper$Companion.prototype.minkowskiSum_rq0k4g$ = function (pattern, paths, pathIsClosed) {
    var solution = Paths_init();
    var c = new DefaultClipper();
    for (var i = 0; i !== paths.size; ++i) {
      var tmp = this.minkowski_0(pattern, paths.get_za3lpa$(i), true, pathIsClosed);
      c.addPaths_kw2pds$(tmp, Clipper$PolyType$SUBJECT_getInstance(), true);
      if (pathIsClosed) {
        var path = paths.get_za3lpa$(i).translatePath_r62tv1$(pattern.get_za3lpa$(0));
        c.addPath_lh39fr$(path, Clipper$PolyType$CLIP_getInstance(), true);
      }
    }
    c.execute_h3bo99$(Clipper$ClipType$UNION_getInstance(), solution, Clipper$PolyFillType$NON_ZERO_getInstance(), Clipper$PolyFillType$NON_ZERO_getInstance());
    return solution;
  };
  DefaultClipper$Companion.prototype.poly2ContainsPoly1_0 = function (outPt1, outPt2) {
    var op = outPt1;
    do {
      var res = this.isPointInPolygon_0(op.pt, outPt2);
      if (res >= 0) {
        return res > 0;
      }
      op = ensureNotNull(op.next);
    }
     while (op !== outPt1);
    return true;
  };
  DefaultClipper$Companion.prototype.simplifyPolygon_dp09wx$ = function (poly, fillType) {
    if (fillType === void 0)
      fillType = Clipper$PolyFillType$EVEN_ODD_getInstance();
    var result = Paths_init();
    var c = new DefaultClipper(2);
    c.addPath_lh39fr$(poly, Clipper$PolyType$SUBJECT_getInstance(), true);
    c.execute_h3bo99$(Clipper$ClipType$UNION_getInstance(), result, fillType, fillType);
    return result;
  };
  DefaultClipper$Companion.prototype.simplifyPolygons_8sm3uy$ = function (polys, fillType) {
    if (fillType === void 0)
      fillType = Clipper$PolyFillType$EVEN_ODD_getInstance();
    var result = Paths_init();
    var c = new DefaultClipper(2);
    c.addPaths_kw2pds$(polys, Clipper$PolyType$SUBJECT_getInstance(), true);
    c.execute_h3bo99$(Clipper$ClipType$UNION_getInstance(), result, fillType, fillType);
    return result;
  };
  DefaultClipper$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DefaultClipper$Companion_instance = null;
  function DefaultClipper$Companion_getInstance() {
    if (DefaultClipper$Companion_instance === null) {
      new DefaultClipper$Companion();
    }
    return DefaultClipper$Companion_instance;
  }
  function DefaultClipper_init$lambda(node1, node2) {
    var i = ensureNotNull(node2.pt).y - ensureNotNull(node1.pt).y;
    if (i > 0) {
      return 1;
    }
     else if (i < 0) {
      return -1;
    }
     else {
      return 0;
    }
  }
  DefaultClipper.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultClipper',
    interfaces: [ClipperBase]
  };
  function Edge() {
    Edge$Companion_getInstance();
    this.bot_28qg7h$_0 = new MVector2();
    this.current_n68em7$_0 = new MVector2();
    this.top_28eyjf$_0 = new MVector2();
    this.delta = new MVector2();
    this.deltaX = 0.0;
    this.polyTyp = null;
    this.side = Edge$Side$LEFT_getInstance();
    this.windDelta = 0;
    this.windCnt = 0;
    this.windCnt2 = 0;
    this.outIdx = 0;
    this.next = null;
    this.prev = null;
    this.nextInLML = null;
    this.nextInAEL = null;
    this.prevInAEL = null;
    this.nextInSEL = null;
    this.prevInSEL = null;
  }
  function Edge$Side(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Edge$Side_initFields() {
    Edge$Side_initFields = function () {
    };
    Edge$Side$LEFT_instance = new Edge$Side('LEFT', 0);
    Edge$Side$RIGHT_instance = new Edge$Side('RIGHT', 1);
  }
  var Edge$Side$LEFT_instance;
  function Edge$Side$LEFT_getInstance() {
    Edge$Side_initFields();
    return Edge$Side$LEFT_instance;
  }
  var Edge$Side$RIGHT_instance;
  function Edge$Side$RIGHT_getInstance() {
    Edge$Side_initFields();
    return Edge$Side$RIGHT_instance;
  }
  Edge$Side.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Side',
    interfaces: [Enum]
  };
  function Edge$Side$values() {
    return [Edge$Side$LEFT_getInstance(), Edge$Side$RIGHT_getInstance()];
  }
  Edge$Side.values = Edge$Side$values;
  function Edge$Side$valueOf(name) {
    switch (name) {
      case 'LEFT':
        return Edge$Side$LEFT_getInstance();
      case 'RIGHT':
        return Edge$Side$RIGHT_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.clipper.Edge.Side.' + name);
    }
  }
  Edge$Side.valueOf_61zpoe$ = Edge$Side$valueOf;
  Object.defineProperty(Edge.prototype, 'bot', {
    get: function () {
      return this.bot_28qg7h$_0;
    },
    set: function (v) {
      this.bot_28qg7h$_0.copyFrom_r62tv1$(v);
    }
  });
  Object.defineProperty(Edge.prototype, 'current', {
    get: function () {
      return this.current_n68em7$_0;
    },
    set: function (v) {
      this.current_n68em7$_0.copyFrom_r62tv1$(v);
    }
  });
  Object.defineProperty(Edge.prototype, 'top', {
    get: function () {
      return this.top_28eyjf$_0;
    },
    set: function (v) {
      this.top_28eyjf$_0.copyFrom_r62tv1$(v);
    }
  });
  Edge.prototype.findNextLocMin = function () {
    var e = this;
    var e2;
    while (true) {
      while (!equals(e.bot, ensureNotNull(e.prev).bot) || equals(e.current, e.top))
        e = ensureNotNull(e.next);
      if (e.deltaX !== Edge$Companion_getInstance().HORIZONTAL && ensureNotNull(e.prev).deltaX !== Edge$Companion_getInstance().HORIZONTAL)
        break;
      while (ensureNotNull(e.prev).deltaX === Edge$Companion_getInstance().HORIZONTAL)
        e = ensureNotNull(e.prev);
      e2 = e;
      while (e.deltaX === Edge$Companion_getInstance().HORIZONTAL)
        e = ensureNotNull(e.next);
      if (e.top.y === ensureNotNull(e.prev).bot.y)
        continue;
      if (ensureNotNull(e2.prev).bot.x < e.bot.x)
        e = e2;
      break;
    }
    return e;
  };
  Object.defineProperty(Edge.prototype, 'maximaPair', {
    get: function () {
      var result = null;
      if (equals(ensureNotNull(this.next).top, this.top) && ensureNotNull(this.next).nextInLML == null) {
        result = this.next;
      }
       else if (equals(ensureNotNull(this.prev).top, this.top) && ensureNotNull(this.prev).nextInLML == null) {
        result = this.prev;
      }
      if (result != null && (result.outIdx === -2 || (result.nextInAEL === result.prevInAEL && !result.isHorizontal))) {
        return null;
      }
      return result;
    }
  });
  Edge.prototype.getNextInAEL_tnm50z$ = function (direction) {
    return direction === Clipper$Direction$LEFT_TO_RIGHT_getInstance() ? this.nextInAEL : this.prevInAEL;
  };
  Edge.prototype.isContributing_xil744$ = function (clipFillType, subjFillType, clipType) {
    var pft;
    var pft2;
    if (equals(this.polyTyp, Clipper$PolyType$SUBJECT_getInstance())) {
      pft = subjFillType;
      pft2 = clipFillType;
    }
     else {
      pft = clipFillType;
      pft2 = subjFillType;
    }
    switch (pft.name) {
      case 'EVEN_ODD':
        if (this.windDelta === 0 && this.windCnt !== 1)
          return false;
        break;
      case 'NON_ZERO':
        if (abs(this.windCnt) !== 1)
          return false;
        break;
      case 'POSITIVE':
        if (this.windCnt !== 1)
          return false;
        break;
      default:if (this.windCnt !== -1)
          return false;
        break;
    }
    switch (clipType.name) {
      case 'INTERSECTION':
        switch (pft2.name) {
          case 'EVEN_ODD':
          case 'NON_ZERO':
            return this.windCnt2 !== 0;
          case 'POSITIVE':
            return this.windCnt2 > 0;
          default:return this.windCnt2 < 0;
        }

        break;
      case 'UNION':
        switch (pft2.name) {
          case 'EVEN_ODD':
          case 'NON_ZERO':
            return this.windCnt2 === 0;
          case 'POSITIVE':
            return this.windCnt2 <= 0;
          default:return this.windCnt2 >= 0;
        }

        break;
      case 'DIFFERENCE':
        if (equals(this.polyTyp, Clipper$PolyType$SUBJECT_getInstance())) {
          switch (pft2.name) {
            case 'EVEN_ODD':
            case 'NON_ZERO':
              return this.windCnt2 === 0;
            case 'POSITIVE':
              return this.windCnt2 <= 0;
            default:return this.windCnt2 >= 0;
          }
        }
         else {
          switch (pft2.name) {
            case 'EVEN_ODD':
            case 'NON_ZERO':
              return this.windCnt2 !== 0;
            case 'POSITIVE':
              return this.windCnt2 > 0;
            default:return this.windCnt2 < 0;
          }
        }

        break;
      case 'XOR':
        if (this.windDelta === 0) {
          switch (pft2.name) {
            case 'EVEN_ODD':
            case 'NON_ZERO':
              return this.windCnt2 === 0;
            case 'POSITIVE':
              return this.windCnt2 <= 0;
            default:return this.windCnt2 >= 0;
          }
        }
         else {
          return true;
        }

        break;
      default:Kotlin.noWhenBranchMatched();
        break;
    }
  };
  Edge.prototype.isEvenOddAltFillType_dta898$ = function (clipFillType, subjFillType) {
    if (equals(this.polyTyp, Clipper$PolyType$SUBJECT_getInstance())) {
      return clipFillType === Clipper$PolyFillType$EVEN_ODD_getInstance();
    }
     else {
      return subjFillType === Clipper$PolyFillType$EVEN_ODD_getInstance();
    }
  };
  Edge.prototype.isEvenOddFillType_dta898$ = function (clipFillType, subjFillType) {
    var type = equals(this.polyTyp, Clipper$PolyType$SUBJECT_getInstance()) ? subjFillType : clipFillType;
    return type === Clipper$PolyFillType$EVEN_ODD_getInstance();
  };
  Object.defineProperty(Edge.prototype, 'isHorizontal', {
    get: function () {
      return this.delta.y === 0.0;
    }
  });
  Edge.prototype.isIntermediate_14dthe$ = function (y) {
    return this.top.y === y && this.nextInLML != null;
  };
  Edge.prototype.isMaxima_14dthe$ = function (Y) {
    return this.top.y === Y && this.nextInLML == null;
  };
  Edge.prototype.reverseHorizontal = function () {
    var temp = this.top.x;
    this.top.x = this.bot.x;
    this.bot.x = temp;
  };
  Edge.prototype.toString = function () {
    return 'TEdge [Bot=' + this.bot + ', Curr=' + this.current + ', Top=' + this.top + ', Delta=' + this.delta + ', Dx=' + this.deltaX + ', PolyTyp=' + toString(this.polyTyp) + ', Side=' + this.side + ', WindDelta=' + this.windDelta + ', WindCnt=' + this.windCnt + ', WindCnt2=' + this.windCnt2 + ', OutIdx=' + this.outIdx + ', Next=' + toString(this.next) + ', Prev=' + toString(this.prev) + ', NextInLML=' + toString(this.nextInLML) + ', NextInAEL=' + toString(this.nextInAEL) + ', PrevInAEL=' + toString(this.prevInAEL) + ', NextInSEL=' + toString(this.nextInSEL) + ', PrevInSEL=' + toString(this.prevInSEL) + ']';
  };
  Edge.prototype.updateDeltaX = function () {
    this.delta.x = this.top.x - this.bot.x;
    this.delta.y = this.top.y - this.bot.y;
    if (this.delta.y === 0.0) {
      this.deltaX = Edge$Companion_getInstance().HORIZONTAL;
    }
     else {
      this.deltaX = this.delta.x / this.delta.y;
    }
  };
  function Edge$Companion() {
    Edge$Companion_instance = this;
    this.SKIP = -2;
    this.UNASSIGNED = -1;
    this.HORIZONTAL = -3.4E38;
  }
  Edge$Companion.prototype.doesE2InsertBeforeE1_46mff8$ = function (e1, e2) {
    if (e2.current.x === e1.current.x) {
      return e2.top.y > e1.top.y ? e2.top.x < this.topX_pk92ow$(e1, e2.top.y) : e1.top.x > this.topX_pk92ow$(e2, e1.top.y);
    }
     else {
      return e2.current.x < e1.current.x;
    }
  };
  Edge$Companion.prototype.slopesEqual_46mff8$ = function (e1, e2) {
    return e1.delta.y * e2.delta.x === e1.delta.x * e2.delta.y;
  };
  Edge$Companion.prototype.swapPolyIndexes_46mff8$ = function (edge1, edge2) {
    var outIdx = edge1.outIdx;
    edge1.outIdx = edge2.outIdx;
    edge2.outIdx = outIdx;
  };
  Edge$Companion.prototype.swapSides_46mff8$ = function (edge1, edge2) {
    var side = edge1.side;
    edge1.side = edge2.side;
    edge2.side = side;
  };
  Edge$Companion.prototype.topX_pk92ow$ = function (edge, currentY) {
    if (currentY === edge.top.y)
      return edge.top.x;
    return numberToInt(edge.bot.x + round(edge.deltaX * (currentY - edge.bot.y)));
  };
  Edge$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Edge$Companion_instance = null;
  function Edge$Companion_getInstance() {
    if (Edge$Companion_instance === null) {
      new Edge$Companion();
    }
    return Edge$Companion_instance;
  }
  Edge.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Edge',
    interfaces: []
  };
  function Path(al) {
    Path$Companion_getInstance();
    this.al_0 = al;
  }
  Path.prototype.toString = function () {
    return this.al_0.toString();
  };
  function Path$Join(outPt1, outPt2, offPt) {
    if (outPt1 === void 0)
      outPt1 = null;
    if (outPt2 === void 0)
      outPt2 = null;
    if (offPt === void 0)
      offPt = null;
    this.outPt1 = outPt1;
    this.outPt2 = outPt2;
    this.offPt = offPt;
  }
  Path$Join.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Join',
    interfaces: []
  };
  Path.prototype.addPoint_lu1900$ = function (x, y) {
    return this.add_11rb$(new IVector2(numberToDouble(x), numberToDouble(y)));
  };
  function Path$OutPt() {
    Path$OutPt$Companion_getInstance();
    this.idx = 0;
    this.pt = new IVector2(numberToDouble(0), numberToDouble(0));
    this.next = null;
    this.prev = null;
  }
  Path$OutPt.prototype.duplicate_6taknv$ = function (InsertAfter) {
    var result = new Path$OutPt();
    result.pt = Vector2_1(this.pt);
    result.idx = this.idx;
    if (InsertAfter) {
      result.next = this.next;
      result.prev = this;
      ensureNotNull(this.next).prev = result;
      this.next = result;
    }
     else {
      result.prev = this.prev;
      result.next = this;
      ensureNotNull(this.prev).next = result;
      this.prev = result;
    }
    return result;
  };
  Object.defineProperty(Path$OutPt.prototype, 'bottomPt', {
    get: function () {
      var dups = null;
      var p = this.next;
      var pp = this;
      while (p !== pp) {
        ensureNotNull(p);
        if (p.pt.y > pp.pt.y) {
          pp = p;
          dups = null;
        }
         else if (p.pt.y === pp.pt.y && p.pt.x <= pp.pt.x) {
          if (p.pt.x < pp.pt.x) {
            dups = null;
            pp = p;
          }
           else {
            if (p.next !== pp && p.prev !== pp) {
              dups = p;
            }
          }
        }
        p = p.next;
      }
      if (dups != null) {
        while (dups !== p) {
          if (!Path$OutPt$Companion_getInstance().isFirstBottomPt_0(p, ensureNotNull(dups))) {
            pp = dups;
          }
          dups = dups.next;
          while (!equals(ensureNotNull(dups).pt, pp.pt)) {
            dups = dups.next;
          }
        }
      }
      return pp;
    }
  });
  Object.defineProperty(Path$OutPt.prototype, 'pointCount', {
    get: function () {
      var result = 0;
      var p = this;
      do {
        result = result + 1 | 0;
        p = ensureNotNull(p).next;
      }
       while (p !== this && p !== null);
      return result;
    }
  });
  Path$OutPt.prototype.reversePolyPtLinks = function () {
    var pp1;
    var pp2;
    pp1 = this;
    do {
      pp2 = ensureNotNull(pp1.next);
      pp1.next = pp1.prev;
      pp1.prev = pp2;
      pp1 = pp2;
    }
     while (pp1 !== this);
  };
  function Path$OutPt$Companion() {
    Path$OutPt$Companion_instance = this;
  }
  Path$OutPt$Companion.prototype.getLowerMostRec_pii0fs$ = function (outRec1, outRec2) {
    var tmp$, tmp$_0, tmp$_1;
    outRec1.bottomPt = (tmp$ = outRec1.bottomPt) != null ? tmp$ : ensureNotNull(outRec1.points).bottomPt;
    outRec2.bottomPt = (tmp$_0 = outRec2.bottomPt) != null ? tmp$_0 : ensureNotNull(outRec2.points).bottomPt;
    var bPt1 = ensureNotNull(outRec1.bottomPt);
    var bPt2 = ensureNotNull(outRec2.bottomPt);
    if (bPt1.pt.y > bPt2.pt.y)
      tmp$_1 = outRec1;
    else if (bPt1.pt.y < bPt2.pt.y)
      tmp$_1 = outRec2;
    else if (bPt1.pt.x < bPt2.pt.x)
      tmp$_1 = outRec1;
    else if (bPt1.pt.x > bPt2.pt.x)
      tmp$_1 = outRec2;
    else if (bPt1.next === bPt1)
      tmp$_1 = outRec2;
    else if (bPt2.next === bPt2)
      tmp$_1 = outRec1;
    else if (this.isFirstBottomPt_0(bPt1, bPt2))
      tmp$_1 = outRec1;
    else
      tmp$_1 = outRec2;
    return tmp$_1;
  };
  Path$OutPt$Companion.prototype.isFirstBottomPt_0 = function (btmPt1, btmPt2) {
    var p = ensureNotNull(btmPt1.prev);
    while (equals(p.pt, btmPt1.pt) && !equals(p, btmPt1))
      p = ensureNotNull(p.prev);
    var x = Points_getInstance().getDeltaX_g6xq6k$(btmPt1.pt, p.pt);
    var dx1p = Math_0.abs(x);
    p = ensureNotNull(btmPt1.next);
    while (equals(p.pt, btmPt1.pt) && !equals(p, btmPt1))
      p = ensureNotNull(p.next);
    var x_0 = Points_getInstance().getDeltaX_g6xq6k$(btmPt1.pt, p.pt);
    var dx1n = Math_0.abs(x_0);
    p = ensureNotNull(btmPt2.prev);
    while (equals(p.pt, btmPt2.pt) && !equals(p, btmPt2))
      p = ensureNotNull(p.prev);
    var x_1 = Points_getInstance().getDeltaX_g6xq6k$(btmPt2.pt, p.pt);
    var dx2p = Math_0.abs(x_1);
    p = ensureNotNull(btmPt2.next);
    while (equals(p.pt, btmPt2.pt) && equals(p, btmPt2))
      p = ensureNotNull(p.next);
    var x_2 = Points_getInstance().getDeltaX_g6xq6k$(btmPt2.pt, p.pt);
    var dx2n = Math_0.abs(x_2);
    return dx1p >= dx2p && dx1p >= dx2n || (dx1n >= dx2p && dx1n >= dx2n);
  };
  Path$OutPt$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Path$OutPt$Companion_instance = null;
  function Path$OutPt$Companion_getInstance() {
    if (Path$OutPt$Companion_instance === null) {
      new Path$OutPt$Companion();
    }
    return Path$OutPt$Companion_instance;
  }
  Path$OutPt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OutPt',
    interfaces: []
  };
  function Path$OutRec() {
    this.Idx = 0;
    this.isHole = false;
    this.isOpen = false;
    this.firstLeft = null;
    this.points = null;
    this.bottomPt = null;
    this.polyNode = null;
  }
  Path$OutRec.prototype.area = function () {
    var tmp$;
    tmp$ = this.points;
    if (tmp$ == null) {
      return 0.0;
    }
    var op = tmp$;
    var a = 0.0;
    do {
      a += (ensureNotNull(ensureNotNull(op).prev).pt.x + op.pt.x) * (ensureNotNull(op.prev).pt.y - op.pt.y);
      op = op.next;
    }
     while (op !== this.points);
    return a * 0.5;
  };
  Path$OutRec.prototype.fixHoleLinkage = function () {
    if (this.firstLeft == null || (this.isHole !== ensureNotNull(this.firstLeft).isHole && ensureNotNull(this.firstLeft).points != null))
      return;
    var orfl = this.firstLeft;
    while (orfl != null && (orfl.isHole === this.isHole || orfl.points == null))
      orfl = orfl.firstLeft;
    this.firstLeft = orfl;
  };
  Path$OutRec.prototype.parseFirstLeft = function () {
    var ret = this;
    while (ret != null && ret.points == null)
      ret = ret.firstLeft;
    return ensureNotNull(ret);
  };
  Path$OutRec.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OutRec',
    interfaces: []
  };
  Path.prototype.area = function () {
    var cnt = this.size;
    if (cnt < 3) {
      return 0.0;
    }
    var a = 0.0;
    var i = 0;
    var j = cnt - 1 | 0;
    while (i < cnt) {
      a += (this.get_za3lpa$(j).x + this.get_za3lpa$(i).x) * (this.get_za3lpa$(j).y - this.get_za3lpa$(i).y);
      j = i;
      i = i + 1 | 0;
    }
    return -a * 0.5;
  };
  Path.prototype.cleanPolygon_14dthe$ = function (distance) {
    if (distance === void 0)
      distance = 1.415;
    var tmp$, tmp$_0;
    var cnt = this.size;
    if (cnt === 0)
      return Path_init();
    var array = Array_0(cnt);
    var tmp$_1;
    tmp$_1 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_1; i++) {
      array[i] = new Path$OutPt();
    }
    var outPts = array;
    tmp$ = cnt;
    for (var i_0 = 0; i_0 < tmp$; i_0++) {
      outPts[i_0].pt = this.get_za3lpa$(i_0);
      outPts[i_0].next = outPts[(i_0 + 1 | 0) % cnt];
      ensureNotNull(outPts[i_0].next).prev = outPts[i_0];
      outPts[i_0].idx = 0;
    }
    var distSqrd = distance * distance;
    var op = outPts[0];
    while (op.idx === 0 && op.next !== op.prev) {
      if (Points_getInstance().arePointsClose_cnijz2$(op.pt, ensureNotNull(op.prev).pt, distSqrd)) {
        op = Path$Companion_getInstance().excludeOp_0(op);
        cnt = cnt - 1 | 0;
      }
       else if (Points_getInstance().arePointsClose_cnijz2$(ensureNotNull(op.prev).pt, ensureNotNull(op.next).pt, distSqrd)) {
        Path$Companion_getInstance().excludeOp_0(ensureNotNull(op.next));
        op = Path$Companion_getInstance().excludeOp_0(op);
        cnt = cnt - 2 | 0;
      }
       else if (Points_getInstance().slopesNearCollinear_mcsb4x$(ensureNotNull(op.prev).pt, op.pt, ensureNotNull(op.next).pt, distSqrd)) {
        op = Path$Companion_getInstance().excludeOp_0(op);
        cnt = cnt - 1 | 0;
      }
       else {
        op.idx = 1;
        op = ensureNotNull(op.next);
      }
    }
    if (cnt < 3)
      cnt = 0;
    var result = Path_init(cnt);
    tmp$_0 = cnt;
    for (var i_1 = 0; i_1 < tmp$_0; i_1++) {
      result.add_11rb$(op.pt);
      op = ensureNotNull(op.next);
    }
    return result;
  };
  Path.prototype.isPointInPolygon_r62tv1$ = function (pt) {
    var result = 0;
    var cnt = this.size;
    if (cnt < 3)
      return 0;
    var ip = this.get_za3lpa$(0);
    for (var i = 1; i <= cnt; i++) {
      var ipNext = i === cnt ? this.get_za3lpa$(0) : this.get_za3lpa$(i);
      if (ipNext.y === pt.y) {
        if (ipNext.x === pt.x || (ip.y === pt.y && ipNext.x > pt.x === ip.x < pt.x))
          return -1;
      }
      if (ip.y < pt.y !== ipNext.y < pt.y) {
        if (ip.x >= pt.x) {
          if (ipNext.x > pt.x) {
            result = 1 - result | 0;
          }
           else {
            var d = (ip.x - pt.x) * (ipNext.y - pt.y) - (ipNext.x - pt.x) * (ip.y - pt.y);
            if (d === 0.0) {
              return -1;
            }
             else if (d > 0 === ipNext.y > ip.y) {
              result = 1 - result | 0;
            }
          }
        }
         else {
          if (ipNext.x > pt.x) {
            var d_0 = (ip.x - pt.x) * (ipNext.y - pt.y) - (ipNext.x - pt.x) * (ip.y - pt.y);
            if (d_0 === 0.0) {
              return -1;
            }
             else if (d_0 > 0 === ipNext.y > ip.y) {
              result = 1 - result | 0;
            }
          }
        }
      }
      ip = ipNext;
    }
    return result;
  };
  Path.prototype.orientation = function () {
    return this.area() >= 0;
  };
  Path.prototype.translatePath_r62tv1$ = function (delta) {
    var tmp$;
    var outPath = Path_init(this.size);
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      var x = i.x + delta.x;
      var y = i.y + delta.y;
      outPath.add_11rb$(new IVector2(numberToDouble(x), numberToDouble(y)));
    }
    return outPath;
  };
  function Path$Companion() {
    Path$Companion_instance = this;
  }
  Path$Companion.prototype.excludeOp_0 = function (op) {
    var result = op.prev;
    ensureNotNull(result).next = op.next;
    ensureNotNull(op.next).prev = result;
    result.idx = 0;
    return result;
  };
  Path$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Path$Companion_instance = null;
  function Path$Companion_getInstance() {
    if (Path$Companion_instance === null) {
      new Path$Companion();
    }
    return Path$Companion_instance;
  }
  Object.defineProperty(Path.prototype, 'size', {
    get: function () {
      return this.al_0.size;
    }
  });
  Path.prototype.add_11rb$ = function (element) {
    return this.al_0.add_11rb$(element);
  };
  Path.prototype.add_wxm5ur$ = function (index, element) {
    return this.al_0.add_wxm5ur$(index, element);
  };
  Path.prototype.addAll_u57x28$ = function (index, elements) {
    return this.al_0.addAll_u57x28$(index, elements);
  };
  Path.prototype.addAll_brywnq$ = function (elements) {
    return this.al_0.addAll_brywnq$(elements);
  };
  Path.prototype.clear = function () {
    return this.al_0.clear();
  };
  Path.prototype.contains_11rb$ = function (element) {
    return this.al_0.contains_11rb$(element);
  };
  Path.prototype.containsAll_brywnq$ = function (elements) {
    return this.al_0.containsAll_brywnq$(elements);
  };
  Path.prototype.get_za3lpa$ = function (index) {
    return this.al_0.get_za3lpa$(index);
  };
  Path.prototype.indexOf_11rb$ = function (element) {
    return this.al_0.indexOf_11rb$(element);
  };
  Path.prototype.isEmpty = function () {
    return this.al_0.isEmpty();
  };
  Path.prototype.iterator = function () {
    return this.al_0.iterator();
  };
  Path.prototype.lastIndexOf_11rb$ = function (element) {
    return this.al_0.lastIndexOf_11rb$(element);
  };
  Path.prototype.listIterator = function () {
    return this.al_0.listIterator();
  };
  Path.prototype.listIterator_za3lpa$ = function (index) {
    return this.al_0.listIterator_za3lpa$(index);
  };
  Path.prototype.remove_11rb$ = function (element) {
    return this.al_0.remove_11rb$(element);
  };
  Path.prototype.removeAll_brywnq$ = function (elements) {
    return this.al_0.removeAll_brywnq$(elements);
  };
  Path.prototype.removeAt_za3lpa$ = function (index) {
    return this.al_0.removeAt_za3lpa$(index);
  };
  Path.prototype.retainAll_brywnq$ = function (elements) {
    return this.al_0.retainAll_brywnq$(elements);
  };
  Path.prototype.set_wxm5ur$ = function (index, element) {
    return this.al_0.set_wxm5ur$(index, element);
  };
  Path.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.al_0.subList_vux9f0$(fromIndex, toIndex);
  };
  Path.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Path',
    interfaces: [RandomAccess, MutableList]
  };
  function Path_init(initialCapacity, $this) {
    if (initialCapacity === void 0)
      initialCapacity = 0;
    $this = $this || Object.create(Path.prototype);
    Path.call($this, ArrayList_init(initialCapacity));
    return $this;
  }
  function Path_init_0(points, $this) {
    $this = $this || Object.create(Path.prototype);
    Path_init(points.length, $this);
    addAll($this, points);
    return $this;
  }
  function Path_init_1(points, $this) {
    $this = $this || Object.create(Path.prototype);
    Path_init(points.size, $this);
    $this.addAll_brywnq$(points);
    return $this;
  }
  function Path_init_2(points, $this) {
    $this = $this || Object.create(Path.prototype);
    Path_init(void 0, $this);
    addAll_0($this, points);
    return $this;
  }
  function Paths(al) {
    Paths$Companion_getInstance();
    this.al_0 = al;
  }
  Paths.prototype.toString = function () {
    return this.al_0.toString();
  };
  Object.defineProperty(Paths.prototype, 'totalVertices', {
    get: function () {
      var tmp$;
      var sum = 0;
      tmp$ = this.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        sum = sum + element.size | 0;
      }
      return sum;
    }
  });
  Paths.prototype.addPolyNode_s8lpsu$ = function (polynode, nt) {
    var tmp$;
    var match = true;
    switch (nt.name) {
      case 'OPEN':
        return;
      case 'CLOSED':
        match = !polynode.isOpen;
        break;
      default:break;
    }
    if (polynode.polygon.size > 0 && match)
      this.add_11rb$(polynode.polygon);
    tmp$ = polynode.getChilds().iterator();
    while (tmp$.hasNext()) {
      var pn = tmp$.next();
      this.addPolyNode_s8lpsu$(pn, nt);
    }
  };
  Paths.prototype.cleanPolygons_14dthe$ = function (distance) {
    if (distance === void 0)
      distance = 1.415;
    var tmp$;
    var result = Paths_init_0(this.size);
    tmp$ = this.size;
    for (var i = 0; i < tmp$; i++)
      result.add_11rb$(this.get_za3lpa$(i).cleanPolygon_14dthe$(distance));
    return result;
  };
  Object.defineProperty(Paths.prototype, 'bounds', {
    get: function () {
      var tmp$, tmp$_0;
      var bb = new BoundsBuilder();
      tmp$ = this.iterator();
      while (tmp$.hasNext()) {
        var path = tmp$.next();
        tmp$_0 = path.iterator();
        while (tmp$_0.hasNext()) {
          var p = tmp$_0.next();
          bb.add_r62tv1$(p);
        }
      }
      return bb.getBounds_2da8yn$();
    }
  });
  Paths.prototype.reversePaths = function () {
    var tmp$;
    tmp$ = this.iterator();
    while (tmp$.hasNext()) {
      var poly = tmp$.next();
      reverse(poly);
    }
  };
  function Paths$Companion() {
    Paths$Companion_instance = this;
  }
  Paths$Companion.prototype.closedPathsFromPolyTree_mv14pn$ = function (polytree) {
    var $receiver = Paths_init();
    $receiver.addPolyNode_s8lpsu$(polytree, PolyNode$NodeType$CLOSED_getInstance());
    return $receiver;
  };
  Paths$Companion.prototype.makePolyTreeToPaths_mv14pn$ = function (polytree) {
    var $receiver = Paths_init();
    $receiver.addPolyNode_s8lpsu$(polytree, PolyNode$NodeType$ANY_getInstance());
    return $receiver;
  };
  Paths$Companion.prototype.openPathsFromPolyTree_mv14pn$ = function (polytree) {
    var $receiver = polytree.getChilds();
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (element.isOpen)
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(item.polygon);
    }
    return Paths_init_2(destination_0);
  };
  Paths$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Paths$Companion_instance = null;
  function Paths$Companion_getInstance() {
    if (Paths$Companion_instance === null) {
      new Paths$Companion();
    }
    return Paths$Companion_instance;
  }
  Object.defineProperty(Paths.prototype, 'size', {
    get: function () {
      return this.al_0.size;
    }
  });
  Paths.prototype.add_11rb$ = function (element) {
    return this.al_0.add_11rb$(element);
  };
  Paths.prototype.add_wxm5ur$ = function (index, element) {
    return this.al_0.add_wxm5ur$(index, element);
  };
  Paths.prototype.addAll_u57x28$ = function (index, elements) {
    return this.al_0.addAll_u57x28$(index, elements);
  };
  Paths.prototype.addAll_brywnq$ = function (elements) {
    return this.al_0.addAll_brywnq$(elements);
  };
  Paths.prototype.clear = function () {
    return this.al_0.clear();
  };
  Paths.prototype.contains_11rb$ = function (element) {
    return this.al_0.contains_11rb$(element);
  };
  Paths.prototype.containsAll_brywnq$ = function (elements) {
    return this.al_0.containsAll_brywnq$(elements);
  };
  Paths.prototype.get_za3lpa$ = function (index) {
    return this.al_0.get_za3lpa$(index);
  };
  Paths.prototype.indexOf_11rb$ = function (element) {
    return this.al_0.indexOf_11rb$(element);
  };
  Paths.prototype.isEmpty = function () {
    return this.al_0.isEmpty();
  };
  Paths.prototype.iterator = function () {
    return this.al_0.iterator();
  };
  Paths.prototype.lastIndexOf_11rb$ = function (element) {
    return this.al_0.lastIndexOf_11rb$(element);
  };
  Paths.prototype.listIterator = function () {
    return this.al_0.listIterator();
  };
  Paths.prototype.listIterator_za3lpa$ = function (index) {
    return this.al_0.listIterator_za3lpa$(index);
  };
  Paths.prototype.remove_11rb$ = function (element) {
    return this.al_0.remove_11rb$(element);
  };
  Paths.prototype.removeAll_brywnq$ = function (elements) {
    return this.al_0.removeAll_brywnq$(elements);
  };
  Paths.prototype.removeAt_za3lpa$ = function (index) {
    return this.al_0.removeAt_za3lpa$(index);
  };
  Paths.prototype.retainAll_brywnq$ = function (elements) {
    return this.al_0.retainAll_brywnq$(elements);
  };
  Paths.prototype.set_wxm5ur$ = function (index, element) {
    return this.al_0.set_wxm5ur$(index, element);
  };
  Paths.prototype.subList_vux9f0$ = function (fromIndex, toIndex) {
    return this.al_0.subList_vux9f0$(fromIndex, toIndex);
  };
  Paths.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Paths',
    interfaces: [MutableList]
  };
  function Paths_init($this) {
    $this = $this || Object.create(Paths.prototype);
    Paths.call($this, ArrayList_init_0());
    return $this;
  }
  function Paths_init_0(initialCapacity, $this) {
    $this = $this || Object.create(Paths.prototype);
    Paths.call($this, ArrayList_init(initialCapacity));
    return $this;
  }
  function Paths_init_1(items, $this) {
    $this = $this || Object.create(Paths.prototype);
    Paths.call($this, ArrayList_init_0());
    addAll($this, items);
    return $this;
  }
  function Paths_init_2(items, $this) {
    $this = $this || Object.create(Paths.prototype);
    Paths.call($this, ArrayList_init_0());
    addAll_0($this, items);
    return $this;
  }
  function Points() {
    Points_instance = this;
  }
  Points.prototype.arePointsClose_cnijz2$ = function (pt1, pt2, distSqrd) {
    var dx = pt1.x - pt2.x;
    var dy = pt1.y - pt2.y;
    return dx * dx + dy * dy <= distSqrd;
  };
  Points.prototype.distanceFromLineSqrd_immp3h$ = function (pt, ln1, ln2) {
    var A = ln1.y - ln2.y;
    var B = ln2.x - ln1.x;
    var C = A * ln1.x + B * ln1.y;
    C = A * pt.x + B * pt.y - C;
    return C * C / (A * A + B * B);
  };
  Points.prototype.getDeltaX_g6xq6k$ = function (pt1, pt2) {
    return pt1.y === pt2.y ? Edge$Companion_getInstance().HORIZONTAL : (pt2.x - pt1.x) / (pt2.y - pt1.y);
  };
  Points.prototype.getUnitNormal_g6xq6k$ = function (pt1, pt2) {
    var dx = pt2.x - pt1.x;
    var dy = pt2.y - pt1.y;
    if (dx === 0.0 && dy === 0.0) {
      return new IVector2(numberToDouble(0.0), numberToDouble(0.0));
    }
    var tmp$ = 1 * 1.0;
    var x = dx * dx + dy * dy;
    var f = tmp$ / Math_0.sqrt(x);
    var x_0 = dy * f;
    var y = -dx * f;
    return new IVector2(numberToDouble(x_0), numberToDouble(y));
  };
  Points.prototype.isPt2BetweenPt1AndPt3_immp3h$ = function (pt1, pt2, pt3) {
    if (equals(pt1, pt3) || equals(pt1, pt2) || equals(pt3, pt2))
      return false;
    else if (pt1.x !== pt3.x)
      return pt2.x > pt1.x === pt2.x < pt3.x;
    else
      return pt2.y > pt1.y === pt2.y < pt3.y;
  };
  Points.prototype.slopesEqual_immp3h$ = function (pt1, pt2, pt3) {
    return (pt1.y - pt2.y) * (pt2.x - pt3.x) - (pt1.x - pt2.x) * (pt2.y - pt3.y) === 0.0;
  };
  Points.prototype.slopesEqual_p5mpkc$ = function (pt1, pt2, pt3, pt4) {
    return (pt1.y - pt2.y) * (pt3.x - pt4.x) - (pt1.x - pt2.x) * (pt3.y - pt4.y) === 0.0;
  };
  Points.prototype.slopesNearCollinear_mcsb4x$ = function (pt1, pt2, pt3, distSqrd) {
    var tmp$;
    var x = pt1.x - pt2.x;
    var tmp$_0 = Math_0.abs(x);
    var x_0 = pt1.y - pt2.y;
    if (tmp$_0 > Math_0.abs(x_0)) {
      if (pt1.x > pt2.x === pt1.x < pt3.x)
        tmp$ = this.distanceFromLineSqrd_immp3h$(pt1, pt2, pt3) < distSqrd;
      else if (pt2.x > pt1.x === pt2.x < pt3.x)
        tmp$ = this.distanceFromLineSqrd_immp3h$(pt2, pt1, pt3) < distSqrd;
      else
        tmp$ = this.distanceFromLineSqrd_immp3h$(pt3, pt1, pt2) < distSqrd;
    }
     else {
      if (pt1.y > pt2.y === pt1.y < pt3.y)
        tmp$ = this.distanceFromLineSqrd_immp3h$(pt1, pt2, pt3) < distSqrd;
      else if (pt2.y > pt1.y === pt2.y < pt3.y)
        tmp$ = this.distanceFromLineSqrd_immp3h$(pt2, pt1, pt3) < distSqrd;
      else
        tmp$ = this.distanceFromLineSqrd_immp3h$(pt3, pt1, pt2) < distSqrd;
    }
    return tmp$;
  };
  Points.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Points',
    interfaces: []
  };
  var Points_instance = null;
  function Points_getInstance() {
    if (Points_instance === null) {
      new Points();
    }
    return Points_instance;
  }
  function PolyNode() {
    this.parent = null;
    this.polygon = Path_init();
    this.index_g0mmev$_0 = 0;
    this.joinType = null;
    this.endType = null;
    this._childs = ArrayList_init_0();
    this.isOpen = false;
  }
  function PolyNode$NodeType(name, ordinal) {
    Enum.call(this);
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function PolyNode$NodeType_initFields() {
    PolyNode$NodeType_initFields = function () {
    };
    PolyNode$NodeType$ANY_instance = new PolyNode$NodeType('ANY', 0);
    PolyNode$NodeType$OPEN_instance = new PolyNode$NodeType('OPEN', 1);
    PolyNode$NodeType$CLOSED_instance = new PolyNode$NodeType('CLOSED', 2);
  }
  var PolyNode$NodeType$ANY_instance;
  function PolyNode$NodeType$ANY_getInstance() {
    PolyNode$NodeType_initFields();
    return PolyNode$NodeType$ANY_instance;
  }
  var PolyNode$NodeType$OPEN_instance;
  function PolyNode$NodeType$OPEN_getInstance() {
    PolyNode$NodeType_initFields();
    return PolyNode$NodeType$OPEN_instance;
  }
  var PolyNode$NodeType$CLOSED_instance;
  function PolyNode$NodeType$CLOSED_getInstance() {
    PolyNode$NodeType_initFields();
    return PolyNode$NodeType$CLOSED_instance;
  }
  PolyNode$NodeType.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NodeType',
    interfaces: [Enum]
  };
  function PolyNode$NodeType$values() {
    return [PolyNode$NodeType$ANY_getInstance(), PolyNode$NodeType$OPEN_getInstance(), PolyNode$NodeType$CLOSED_getInstance()];
  }
  PolyNode$NodeType.values = PolyNode$NodeType$values;
  function PolyNode$NodeType$valueOf(name) {
    switch (name) {
      case 'ANY':
        return PolyNode$NodeType$ANY_getInstance();
      case 'OPEN':
        return PolyNode$NodeType$OPEN_getInstance();
      case 'CLOSED':
        return PolyNode$NodeType$CLOSED_getInstance();
      default:throwISE('No enum constant com.soywiz.korma.geom.clipper.PolyNode.NodeType.' + name);
    }
  }
  PolyNode$NodeType.valueOf_61zpoe$ = PolyNode$NodeType$valueOf;
  PolyNode.prototype.addChild_mux8jj$ = function (child) {
    var cnt = this._childs.size;
    this._childs.add_11rb$(child);
    child.parent = this;
    child.index_g0mmev$_0 = cnt;
  };
  Object.defineProperty(PolyNode.prototype, 'childCount', {
    get: function () {
      return this._childs.size;
    }
  });
  PolyNode.prototype.getChilds = function () {
    return toList_0(this._childs);
  };
  Object.defineProperty(PolyNode.prototype, 'contour', {
    get: function () {
      return this.polygon;
    }
  });
  Object.defineProperty(PolyNode.prototype, 'next', {
    get: function () {
      return !this._childs.isEmpty() ? this._childs.get_za3lpa$(0) : ensureNotNull(this.nextSiblingUp_4amfzz$_0);
    }
  });
  Object.defineProperty(PolyNode.prototype, 'nextSiblingUp_4amfzz$_0', {
    get: function () {
      return this.parent == null ? null : this.index_g0mmev$_0 === (ensureNotNull(this.parent)._childs.size - 1 | 0) ? ensureNotNull(this.parent).nextSiblingUp_4amfzz$_0 : ensureNotNull(this.parent)._childs.get_za3lpa$(this.index_g0mmev$_0 + 1 | 0);
    }
  });
  Object.defineProperty(PolyNode.prototype, 'isHole', {
    get: function () {
      return this.isHoleNode_w6mqvz$_0;
    }
  });
  Object.defineProperty(PolyNode.prototype, 'isHoleNode_w6mqvz$_0', {
    get: function () {
      var result = true;
      var node = this.parent;
      while (node != null) {
        result = !result;
        node = node.parent;
      }
      return result;
    }
  });
  PolyNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolyNode',
    interfaces: []
  };
  function PolyTree() {
    PolyNode.call(this);
    this.allPolys = ArrayList_init_0();
  }
  PolyTree.prototype.Clear = function () {
    this.allPolys.clear();
    this._childs.clear();
  };
  Object.defineProperty(PolyTree.prototype, 'first', {
    get: function () {
      return !this._childs.isEmpty() ? this._childs.get_za3lpa$(0) : null;
    }
  });
  Object.defineProperty(PolyTree.prototype, 'totalSize', {
    get: function () {
      var result = this.allPolys.size;
      return result > 0 && this._childs.get_za3lpa$(0) !== this.allPolys.get_za3lpa$(0) ? result - 1 | 0 : result;
    }
  });
  PolyTree.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PolyTree',
    interfaces: [PolyNode]
  };
  function toSpatialMesh($receiver) {
    return SpatialMesh$Companion_getInstance().fromTriangles_zhzwm1$($receiver);
  }
  function pathFind($receiver) {
    return new PathFind(toSpatialMesh($receiver));
  }
  function funnel($receiver, p0, p1) {
    var pf = $receiver;
    var sm = pf.spatialMesh;
    var x = p0.x;
    var y = p0.y;
    var pointStart = new IVector2(numberToDouble(x), numberToDouble(y));
    var x_0 = p1.x;
    var y_0 = p1.y;
    var pointEnd = new IVector2(numberToDouble(x_0), numberToDouble(y_0));
    var pathNodes = pf.find_i4865u$(sm.spatialNodeFromPoint_r62tv1$(pointStart), sm.spatialNodeFromPoint_r62tv1$(pointEnd));
    var portals = PathFindChannel_getInstance().channelToPortals_xmiz5x$(pointStart, pointEnd, pathNodes);
    var $receiver_0 = portals.path;
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var x_1 = item.x;
      var y_1 = item.y;
      tmp$_0.call(destination, new IVector2(numberToDouble(x_1), numberToDouble(y_1)));
    }
    return destination;
  }
  function funnel_0($receiver, p0, p1) {
    return funnel(pathFind($receiver), p0, p1);
  }
  function pathFind_0($receiver, p0, p1) {
    return funnel(pathFind($receiver), p0, p1);
  }
  function toSpatialMesh_0($receiver) {
    return SpatialMesh$Companion_getInstance().fromTriangles_zhzwm1$(triangulate_0($receiver));
  }
  function pathFind_1($receiver) {
    return pathFind(triangulate_0($receiver));
  }
  function pathFind_2($receiver, p0, p1) {
    return funnel(pathFind(triangulate_0($receiver)), p0, p1);
  }
  function HorizontalLine() {
    HorizontalLine_instance = this;
  }
  HorizontalLine.prototype.intersectionsWithLine_15yvbs$ = function (ax, ay, bx0, by0, bx1, by1) {
    return by1 > ay !== by0 > ay && ax < (bx0 - bx1) * (ay - by1) / (by0 - by1) + bx1 ? 1 : 0;
  };
  function HorizontalLine$interesectionsWithQuadBezier$lambda(closure$bx0, closure$by0, closure$bx1, closure$by1, closure$bx2, closure$by2) {
    return function (p, t) {
      return Bezier$Companion_getInstance().quadCalc_urdcqm$(closure$bx0, closure$by0, closure$bx1, closure$by1, closure$bx2, closure$by2, t, p);
    };
  }
  function HorizontalLine$interesectionsWithQuadBezier$lambda_0(closure$count, closure$ax, closure$ay, this$HorizontalLine) {
    return function (p0, p1) {
      closure$count.v = closure$count.v + this$HorizontalLine.intersectionsWithLine_15yvbs$(closure$ax, closure$ay, p0.x, p0.y, p1.x, p1.y) | 0;
      return Unit;
    };
  }
  HorizontalLine.prototype.interesectionsWithQuadBezier_i4knho$ = function (ax, ay, bx0, by0, bx1, by1, bx2, by2, t0, t1) {
    if (t0 === void 0)
      t0 = new MVector2();
    if (t1 === void 0)
      t1 = new MVector2();
    var count = {v: 0};
    var dt = 1.0 / 4;
    for (var n = 0; n < 4; n++) {
      t0.copyFrom_r62tv1$(t1);
      t1.copyFrom_r62tv1$(HorizontalLine$interesectionsWithQuadBezier$lambda(bx0, by0, bx1, by1, bx2, by2)(t1, dt * n));
      if (n > 1)
        HorizontalLine$interesectionsWithQuadBezier$lambda_0(count, ax, ay, this)(t0, t1);
    }
    return count.v;
  };
  function HorizontalLine$intersectionsWithCubicBezier$lambda(closure$bx0, closure$by0, closure$bx1, closure$by1, closure$bx2, closure$by2, closure$bx3, closure$by3) {
    return function (p, t) {
      return Bezier$Companion_getInstance().cubicCalc_xc3l2e$(closure$bx0, closure$by0, closure$bx1, closure$by1, closure$bx2, closure$by2, closure$bx3, closure$by3, t, p);
    };
  }
  function HorizontalLine$intersectionsWithCubicBezier$lambda_0(closure$count, closure$ax, closure$ay, this$HorizontalLine) {
    return function (p0, p1) {
      closure$count.v = closure$count.v + this$HorizontalLine.intersectionsWithLine_15yvbs$(closure$ax, closure$ay, p0.x, p0.y, p1.x, p1.y) | 0;
      return Unit;
    };
  }
  HorizontalLine.prototype.intersectionsWithCubicBezier_yth6uo$ = function (ax, ay, bx0, by0, bx1, by1, bx2, by2, bx3, by3, t0, t1) {
    if (t0 === void 0)
      t0 = new MVector2();
    if (t1 === void 0)
      t1 = new MVector2();
    var count = {v: 0};
    var dt = 1.0 / 4;
    for (var n = 0; n < 4; n++) {
      t0.copyFrom_r62tv1$(t1);
      t1.copyFrom_r62tv1$(HorizontalLine$intersectionsWithCubicBezier$lambda(bx0, by0, bx1, by1, bx2, by2, bx3, by3)(t1, dt * n));
      if (n > 1)
        HorizontalLine$intersectionsWithCubicBezier$lambda_0(count, ax, ay, this)(t0, t1);
    }
    return count.v;
  };
  HorizontalLine.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HorizontalLine',
    interfaces: []
  };
  var HorizontalLine_instance = null;
  function HorizontalLine_getInstance() {
    if (HorizontalLine_instance === null) {
      new HorizontalLine();
    }
    return HorizontalLine_instance;
  }
  function Shape2d() {
  }
  Shape2d.prototype.containsPoint_lu1900$ = function (x, y) {
    return false;
  };
  function Shape2d$Empty() {
    Shape2d$Empty_instance = this;
    Shape2d.call(this);
    this.paths_n07sij$_0 = Paths_init();
    this.closed_ojj3px$_0 = false;
    this.area_5jn9v0$_0 = 0.0;
  }
  Object.defineProperty(Shape2d$Empty.prototype, 'paths', {
    get: function () {
      return this.paths_n07sij$_0;
    }
  });
  Object.defineProperty(Shape2d$Empty.prototype, 'closed', {
    get: function () {
      return this.closed_ojj3px$_0;
    }
  });
  Object.defineProperty(Shape2d$Empty.prototype, 'area', {
    get: function () {
      return this.area_5jn9v0$_0;
    }
  });
  Shape2d$Empty.prototype.containsPoint_lu1900$ = function (x, y) {
    return false;
  };
  Shape2d$Empty.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Empty',
    interfaces: [Shape2d]
  };
  var Shape2d$Empty_instance = null;
  function Shape2d$Empty_getInstance() {
    if (Shape2d$Empty_instance === null) {
      new Shape2d$Empty();
    }
    return Shape2d$Empty_instance;
  }
  function Shape2d$Line(x0, y0, x1, y1) {
    Shape2d.call(this);
    this.x0 = x0;
    this.y0 = y0;
    this.x1 = x1;
    this.y1 = y1;
    this.closed_wkx08c$_0 = false;
  }
  Object.defineProperty(Shape2d$Line.prototype, 'paths', {
    get: function () {
      var x = this.x0;
      var y = this.y0;
      var tmp$ = new IVector2(numberToDouble(x), numberToDouble(y));
      var x_0 = this.x1;
      var y_0 = this.y1;
      return Paths_init_1([Path_init_1(listOf([tmp$, new IVector2(numberToDouble(x_0), numberToDouble(y_0))]))]);
    }
  });
  Object.defineProperty(Shape2d$Line.prototype, 'closed', {
    get: function () {
      return this.closed_wkx08c$_0;
    }
  });
  Object.defineProperty(Shape2d$Line.prototype, 'area', {
    get: function () {
      return 0.0;
    }
  });
  Shape2d$Line.prototype.containsPoint_lu1900$ = function (x, y) {
    return false;
  };
  Shape2d$Line.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Line',
    interfaces: [Shape2d]
  };
  Shape2d$Line.prototype.component1 = function () {
    return this.x0;
  };
  Shape2d$Line.prototype.component2 = function () {
    return this.y0;
  };
  Shape2d$Line.prototype.component3 = function () {
    return this.x1;
  };
  Shape2d$Line.prototype.component4 = function () {
    return this.y1;
  };
  Shape2d$Line.prototype.copy_6y0v78$ = function (x0, y0, x1, y1) {
    return new Shape2d$Line(x0 === void 0 ? this.x0 : x0, y0 === void 0 ? this.y0 : y0, x1 === void 0 ? this.x1 : x1, y1 === void 0 ? this.y1 : y1);
  };
  Shape2d$Line.prototype.toString = function () {
    return 'Line(x0=' + Kotlin.toString(this.x0) + (', y0=' + Kotlin.toString(this.y0)) + (', x1=' + Kotlin.toString(this.x1)) + (', y1=' + Kotlin.toString(this.y1)) + ')';
  };
  Shape2d$Line.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x0) | 0;
    result = result * 31 + Kotlin.hashCode(this.y0) | 0;
    result = result * 31 + Kotlin.hashCode(this.x1) | 0;
    result = result * 31 + Kotlin.hashCode(this.y1) | 0;
    return result;
  };
  Shape2d$Line.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x0, other.x0) && Kotlin.equals(this.y0, other.y0) && Kotlin.equals(this.x1, other.x1) && Kotlin.equals(this.y1, other.y1)))));
  };
  function Shape2d$Circle(x, y, radius, totalPoints) {
    if (totalPoints === void 0)
      totalPoints = 32;
    Shape2d.call(this);
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.totalPoints = totalPoints;
    this.closed_waqg5k$_0 = true;
  }
  Object.defineProperty(Shape2d$Circle.prototype, 'paths', {
    get: function () {
      var $receiver = until(0, this.totalPoints);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var item = tmp$.next();
        var tmp$_0 = destination.add_11rb$;
        var x = this.x + Angle$Companion_getInstance().cos01_14dthe$(item / this.totalPoints) * this.radius;
        var y = this.y + Angle$Companion_getInstance().sin01_14dthe$(item / this.totalPoints) * this.radius;
        tmp$_0.call(destination, new IVector2(numberToDouble(x), numberToDouble(y)));
      }
      return Paths_init_1([Path_init_1(destination)]);
    }
  });
  Object.defineProperty(Shape2d$Circle.prototype, 'closed', {
    get: function () {
      return this.closed_waqg5k$_0;
    }
  });
  Object.defineProperty(Shape2d$Circle.prototype, 'area', {
    get: function () {
      return math.PI * this.radius * this.radius;
    }
  });
  Shape2d$Circle.prototype.containsPoint_lu1900$ = function (x, y) {
    return Math_getInstance().hypot_lu1900$(this.x - x, this.y - y) < this.radius;
  };
  Shape2d$Circle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Circle',
    interfaces: [Shape2d]
  };
  Shape2d$Circle.prototype.component1 = function () {
    return this.x;
  };
  Shape2d$Circle.prototype.component2 = function () {
    return this.y;
  };
  Shape2d$Circle.prototype.component3 = function () {
    return this.radius;
  };
  Shape2d$Circle.prototype.component4 = function () {
    return this.totalPoints;
  };
  Shape2d$Circle.prototype.copy_88ee24$ = function (x, y, radius, totalPoints) {
    return new Shape2d$Circle(x === void 0 ? this.x : x, y === void 0 ? this.y : y, radius === void 0 ? this.radius : radius, totalPoints === void 0 ? this.totalPoints : totalPoints);
  };
  Shape2d$Circle.prototype.toString = function () {
    return 'Circle(x=' + Kotlin.toString(this.x) + (', y=' + Kotlin.toString(this.y)) + (', radius=' + Kotlin.toString(this.radius)) + (', totalPoints=' + Kotlin.toString(this.totalPoints)) + ')';
  };
  Shape2d$Circle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.radius) | 0;
    result = result * 31 + Kotlin.hashCode(this.totalPoints) | 0;
    return result;
  };
  Shape2d$Circle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.radius, other.radius) && Kotlin.equals(this.totalPoints, other.totalPoints)))));
  };
  function Shape2d$Rectangle(x, y, width, height) {
    Shape2d.call(this);
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    var x_0 = this.x;
    var y_0 = this.y;
    var tmp$ = new IVector2(numberToDouble(x_0), numberToDouble(y_0));
    var x_1 = this.x + this.width;
    var y_1 = this.y;
    var tmp$_0 = new IVector2(numberToDouble(x_1), numberToDouble(y_1));
    var x_2 = this.x + this.width;
    var y_2 = this.y + this.height;
    var tmp$_1 = new IVector2(numberToDouble(x_2), numberToDouble(y_2));
    var x_3 = this.x;
    var y_3 = this.y + this.height;
    this.paths_s0gmm5$_0 = Paths_init_1([Path_init_1(listOf([tmp$, tmp$_0, tmp$_1, new IVector2(numberToDouble(x_3), numberToDouble(y_3))]))]);
    this.closed_be5ak7$_0 = true;
  }
  Object.defineProperty(Shape2d$Rectangle.prototype, 'left', {
    get: function () {
      return this.x;
    }
  });
  Object.defineProperty(Shape2d$Rectangle.prototype, 'top', {
    get: function () {
      return this.y;
    }
  });
  Object.defineProperty(Shape2d$Rectangle.prototype, 'right', {
    get: function () {
      return this.x + this.width;
    }
  });
  Object.defineProperty(Shape2d$Rectangle.prototype, 'bottom', {
    get: function () {
      return this.y + this.height;
    }
  });
  Object.defineProperty(Shape2d$Rectangle.prototype, 'paths', {
    get: function () {
      return this.paths_s0gmm5$_0;
    }
  });
  Object.defineProperty(Shape2d$Rectangle.prototype, 'closed', {
    get: function () {
      return this.closed_be5ak7$_0;
    }
  });
  Object.defineProperty(Shape2d$Rectangle.prototype, 'area', {
    get: function () {
      return this.width * this.height;
    }
  });
  Shape2d$Rectangle.prototype.containsPoint_lu1900$ = function (x, y) {
    return rangeTo(this.left, this.right).contains_mef7kx$(x) && rangeTo(this.top, this.bottom).contains_mef7kx$(y);
  };
  Shape2d$Rectangle.prototype.toString = function () {
    var $receiver = package$korma.KormaStr;
    return 'Rectangle(x=' + $receiver.get_niceStr_yrwdxr$(this.x) + ', y=' + $receiver.get_niceStr_yrwdxr$(this.y) + ', width=' + $receiver.get_niceStr_yrwdxr$(this.width) + ', height=' + $receiver.get_niceStr_yrwdxr$(this.height) + ')';
  };
  Shape2d$Rectangle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Rectangle',
    interfaces: [Shape2d]
  };
  function Shape2d$Shape2d$Rectangle_init(x, y, width, height, $this) {
    $this = $this || Object.create(Shape2d$Rectangle.prototype);
    Shape2d$Rectangle.call($this, x, y, width, height);
    return $this;
  }
  Shape2d$Rectangle.prototype.component1 = function () {
    return this.x;
  };
  Shape2d$Rectangle.prototype.component2 = function () {
    return this.y;
  };
  Shape2d$Rectangle.prototype.component3 = function () {
    return this.width;
  };
  Shape2d$Rectangle.prototype.component4 = function () {
    return this.height;
  };
  Shape2d$Rectangle.prototype.copy_6y0v78$ = function (x, y, width, height) {
    return new Shape2d$Rectangle(x === void 0 ? this.x : x, y === void 0 ? this.y : y, width === void 0 ? this.width : width, height === void 0 ? this.height : height);
  };
  Shape2d$Rectangle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.x) | 0;
    result = result * 31 + Kotlin.hashCode(this.y) | 0;
    result = result * 31 + Kotlin.hashCode(this.width) | 0;
    result = result * 31 + Kotlin.hashCode(this.height) | 0;
    return result;
  };
  Shape2d$Rectangle.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.x, other.x) && Kotlin.equals(this.y, other.y) && Kotlin.equals(this.width, other.width) && Kotlin.equals(this.height, other.height)))));
  };
  function Shape2d$Polygon(points) {
    Shape2d.call(this);
    this.points = points;
    this.paths_dmz4uw$_0 = Paths_init_1([Path_init_1(this.points)]);
    this.closed_o0oyo2$_0 = true;
    this.area_6nkuwv$_0 = lazy(Shape2d$Polygon$area$lambda(this));
  }
  Object.defineProperty(Shape2d$Polygon.prototype, 'paths', {
    get: function () {
      return this.paths_dmz4uw$_0;
    }
  });
  Object.defineProperty(Shape2d$Polygon.prototype, 'closed', {
    get: function () {
      return this.closed_o0oyo2$_0;
    }
  });
  Object.defineProperty(Shape2d$Polygon.prototype, 'area', {
    get: function () {
      return this.area_6nkuwv$_0.value;
    }
  });
  Shape2d$Polygon.prototype.containsPoint_lu1900$ = function (x, y) {
    return containsPoint(this.points, x, y);
  };
  function Shape2d$Polygon$area$lambda(this$Polygon) {
    return function () {
      var tmp$;
      var sum = 0.0;
      tmp$ = triangulate_0(this$Polygon).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        sum += element.area;
      }
      return sum;
    };
  }
  Shape2d$Polygon.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Polygon',
    interfaces: [Shape2d]
  };
  Shape2d$Polygon.prototype.component1 = function () {
    return this.points;
  };
  Shape2d$Polygon.prototype.copy_d0ps2m$ = function (points) {
    return new Shape2d$Polygon(points === void 0 ? this.points : points);
  };
  Shape2d$Polygon.prototype.toString = function () {
    return 'Polygon(points=' + Kotlin.toString(this.points) + ')';
  };
  Shape2d$Polygon.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.points) | 0;
    return result;
  };
  Shape2d$Polygon.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.points, other.points))));
  };
  function Shape2d$Poyline(points) {
    Shape2d.call(this);
    this.points = points;
    this.paths_ldmh4s$_0 = Paths_init_1([Path_init_1(this.points)]);
    this.closed_3yrul2$_0 = false;
  }
  Object.defineProperty(Shape2d$Poyline.prototype, 'paths', {
    get: function () {
      return this.paths_ldmh4s$_0;
    }
  });
  Object.defineProperty(Shape2d$Poyline.prototype, 'closed', {
    get: function () {
      return this.closed_3yrul2$_0;
    }
  });
  Object.defineProperty(Shape2d$Poyline.prototype, 'area', {
    get: function () {
      return 0.0;
    }
  });
  Shape2d$Poyline.prototype.containsPoint_lu1900$ = function (x, y) {
    return false;
  };
  Shape2d$Poyline.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Poyline',
    interfaces: [Shape2d]
  };
  Shape2d$Poyline.prototype.component1 = function () {
    return this.points;
  };
  Shape2d$Poyline.prototype.copy_d0ps2m$ = function (points) {
    return new Shape2d$Poyline(points === void 0 ? this.points : points);
  };
  Shape2d$Poyline.prototype.toString = function () {
    return 'Poyline(points=' + Kotlin.toString(this.points) + ')';
  };
  Shape2d$Poyline.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.points) | 0;
    return result;
  };
  Shape2d$Poyline.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.points, other.points))));
  };
  function Shape2d$Complex(items) {
    Shape2d.call(this);
    this.items = items;
    this.closed_sv7aq0$_0 = false;
    this.area_lv1j0p$_0 = lazy(Shape2d$Complex$area$lambda(this));
  }
  Object.defineProperty(Shape2d$Complex.prototype, 'paths', {
    get: function () {
      var $receiver = this.items;
      var destination = ArrayList_init_0();
      var tmp$;
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        var list = element.paths;
        addAll_0(destination, list);
      }
      return Paths_init_2(destination);
    }
  });
  Object.defineProperty(Shape2d$Complex.prototype, 'closed', {
    get: function () {
      return this.closed_sv7aq0$_0;
    }
  });
  Object.defineProperty(Shape2d$Complex.prototype, 'area', {
    get: function () {
      return this.area_lv1j0p$_0.value;
    }
  });
  Shape2d$Complex.prototype.containsPoint_lu1900$ = function (x, y) {
    return containsPoint(getAllPoints(this), x, y);
  };
  function Shape2d$Complex$area$lambda(this$Complex) {
    return function () {
      var tmp$;
      var sum = 0.0;
      tmp$ = triangulate_0(this$Complex).iterator();
      while (tmp$.hasNext()) {
        var element = tmp$.next();
        sum += element.area;
      }
      return sum;
    };
  }
  Shape2d$Complex.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Complex',
    interfaces: [Shape2d]
  };
  Shape2d$Complex.prototype.component1 = function () {
    return this.items;
  };
  Shape2d$Complex.prototype.copy_em9l51$ = function (items) {
    return new Shape2d$Complex(items === void 0 ? this.items : items);
  };
  Shape2d$Complex.prototype.toString = function () {
    return 'Complex(items=' + Kotlin.toString(this.items) + ')';
  };
  Shape2d$Complex.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.items) | 0;
    return result;
  };
  Shape2d$Complex.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.items, other.items))));
  };
  Shape2d.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Shape2d',
    interfaces: []
  };
  function toShape2d($receiver) {
    if ($receiver.size === 4) {
      for (var n = 0; n < 4; n++) {
        var tl = $receiver.get_za3lpa$((n + 0 | 0) % 4);
        var tr = $receiver.get_za3lpa$((n + 1 | 0) % 4);
        var br = $receiver.get_za3lpa$((n + 2 | 0) % 4);
        var bl = $receiver.get_za3lpa$((n + 3 | 0) % 4);
        if (tl.x === bl.x && tr.x === br.x && tl.y === tr.y && bl.y === br.y) {
          var xmin = Math_getInstance().min_lu1900$(tl.x, tr.x);
          var xmax = Math_getInstance().max_lu1900$(tl.x, tr.x);
          var ymin = Math_getInstance().min_lu1900$(tl.y, bl.y);
          var ymax = Math_getInstance().max_lu1900$(tl.y, bl.y);
          return new Shape2d$Rectangle(xmin, ymin, xmax - xmin, ymax - ymin);
        }
      }
    }
    return new Shape2d$Polygon($receiver);
  }
  function toShape2d_0($receiver) {
    var tmp$;
    switch ($receiver.size) {
      case 0:
        tmp$ = Shape2d$Empty_getInstance();
        break;
      case 1:
        tmp$ = toShape2d(first($receiver));
        break;
      default:var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
        var tmp$_0;
        tmp$_0 = $receiver.iterator();
        while (tmp$_0.hasNext()) {
          var item = tmp$_0.next();
          destination.add_11rb$(toShape2d(item));
        }

        tmp$ = new Shape2d$Complex(destination);
        break;
    }
    return tmp$;
  }
  function get_bounds($receiver) {
    return $receiver.paths.bounds;
  }
  function toShape($receiver) {
    return new Shape2d$Rectangle($receiver.x, $receiver.y, $receiver.width, $receiver.height);
  }
  function clipperOp($receiver, other, op) {
    var clipper = new DefaultClipper();
    var solution = Paths_init();
    clipper.addPaths_kw2pds$($receiver.paths, Clipper$PolyType$CLIP_getInstance(), other.closed);
    clipper.addPaths_kw2pds$(other.paths, Clipper$PolyType$SUBJECT_getInstance(), other.closed);
    clipper.execute_vdtgvh$(op, solution);
    return toShape2d_0(solution);
  }
  function collidesWith($receiver, other) {
    return !equals(clipperOp($receiver, other, Clipper$ClipType$INTERSECTION_getInstance()), Shape2d$Empty_getInstance());
  }
  function intersection($receiver, other) {
    return clipperOp($receiver, other, Clipper$ClipType$INTERSECTION_getInstance());
  }
  function union($receiver, other) {
    return clipperOp($receiver, other, Clipper$ClipType$UNION_getInstance());
  }
  function xor($receiver, other) {
    return clipperOp($receiver, other, Clipper$ClipType$XOR_getInstance());
  }
  function difference($receiver, other) {
    return clipperOp($receiver, other, Clipper$ClipType$DIFFERENCE_getInstance());
  }
  function plus_1($receiver, other) {
    return clipperOp($receiver, other, Clipper$ClipType$UNION_getInstance());
  }
  function minus_1($receiver, other) {
    return clipperOp($receiver, other, Clipper$ClipType$DIFFERENCE_getInstance());
  }
  function extend($receiver, size) {
    var clipper = new ClipperOffset();
    var solution = Paths_init();
    clipper.addPaths_3qc6cc$($receiver.paths, Clipper$JoinType$MITER_getInstance(), $receiver.closed ? Clipper$EndType$CLOSED_POLYGON_getInstance() : Clipper$EndType$OPEN_ROUND_getInstance());
    clipper.execute_nn3i1b$(solution, size);
    return toShape2d_0(solution);
  }
  function toPaths($receiver) {
    var $receiver_0 = toPaths2($receiver);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(Path_init_1(item));
    }
    return Paths_init_2(destination);
  }
  function toPaths2$flushPath(closure$path, closure$paths) {
    return function () {
      if (!closure$path.v.isEmpty()) {
        var $receiver = closure$paths;
        var element = closure$path.v;
        $receiver.add_11rb$(element);
        closure$path.v = ArrayList_init_0();
      }
    };
  }
  function toPaths2($receiver) {
    var paths = ArrayList_init_0();
    var path = {v: ArrayList_init_0()};
    var lx = {v: 0.0};
    var ly = {v: 0.0};
    var flushPath = toPaths2$flushPath(path, paths);
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    var n = 0;
    tmp$ = $receiver.commands.iterator();
    while (tmp$.hasNext()) {
      var cmd = tmp$.next();
      switch (cmd) {
        case 1:
          var x = $receiver.data.get_za3lpa$((tmp$_0 = n, n = tmp$_0 + 1 | 0, tmp$_0));
          var y = $receiver.data.get_za3lpa$((tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1));
          path.v.add_11rb$(new IVector2(numberToDouble(x), numberToDouble(y)));
          lx.v = x;
          ly.v = y;
          break;
        case 2:
          var x_0 = $receiver.data.get_za3lpa$((tmp$_2 = n, n = tmp$_2 + 1 | 0, tmp$_2));
          var y_0 = $receiver.data.get_za3lpa$((tmp$_3 = n, n = tmp$_3 + 1 | 0, tmp$_3));
          path.v.add_11rb$(new IVector2(numberToDouble(x_0), numberToDouble(y_0)));
          lx.v = x_0;
          ly.v = y_0;
          break;
        case 3:
          var x1 = $receiver.data.get_za3lpa$((tmp$_4 = n, n = tmp$_4 + 1 | 0, tmp$_4));
          var y1 = $receiver.data.get_za3lpa$((tmp$_5 = n, n = tmp$_5 + 1 | 0, tmp$_5));
          var x2 = $receiver.data.get_za3lpa$((tmp$_6 = n, n = tmp$_6 + 1 | 0, tmp$_6));
          var y2 = $receiver.data.get_za3lpa$((tmp$_7 = n, n = tmp$_7 + 1 | 0, tmp$_7));
          var steps = 20;
          var dt = 1.0 / steps;
          for (var n_0 = 1; n_0 < steps; n_0++) {
            path.v.add_11rb$(Bezier$Companion_getInstance().quadCalc_urdcqm$(lx.v, ly.v, x1, y1, x2, y2, n_0 * dt));
          }

          lx.v = x2;
          ly.v = y2;
          break;
        case 4:
          var x1_0 = $receiver.data.get_za3lpa$((tmp$_8 = n, n = tmp$_8 + 1 | 0, tmp$_8));
          var y1_0 = $receiver.data.get_za3lpa$((tmp$_9 = n, n = tmp$_9 + 1 | 0, tmp$_9));
          var x2_0 = $receiver.data.get_za3lpa$((tmp$_10 = n, n = tmp$_10 + 1 | 0, tmp$_10));
          var y2_0 = $receiver.data.get_za3lpa$((tmp$_11 = n, n = tmp$_11 + 1 | 0, tmp$_11));
          var x3 = $receiver.data.get_za3lpa$((tmp$_12 = n, n = tmp$_12 + 1 | 0, tmp$_12));
          var y3 = $receiver.data.get_za3lpa$((tmp$_13 = n, n = tmp$_13 + 1 | 0, tmp$_13));
          var steps_0 = 20;
          var dt_0 = 1.0 / steps_0;
          for (var n_1 = 1; n_1 < steps_0; n_1++) {
            path.v.add_11rb$(Bezier$Companion_getInstance().cubicCalc_xc3l2e$(lx.v, ly.v, x1_0, y1_0, x2_0, y2_0, x3, y3, n_1 * dt_0));
          }

          lx.v = x3;
          ly.v = y3;
          break;
        case 5:
          if (!path.v.isEmpty()) {
            path.v.add_11rb$(path.v.get_za3lpa$(0));
          }

          flushPath();
          break;
      }
    }
    flushPath();
    return paths;
  }
  function toShape2d_1($receiver) {
    return toShape2d_0(toPaths($receiver));
  }
  function getAllPoints($receiver) {
    var $receiver_0 = $receiver.paths;
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = element;
      addAll_0(destination, list);
    }
    return destination;
  }
  function toPolygon($receiver) {
    return Kotlin.isType($receiver, Shape2d$Polygon) ? $receiver : new Shape2d$Polygon(getAllPoints($receiver));
  }
  function triangulate($receiver) {
    var sc = SweepContext_init($receiver);
    var s = new Sweep(sc);
    s.triangulate();
    return toList_0(sc.triangles);
  }
  function triangulate_0($receiver) {
    var $receiver_0 = getAllPoints($receiver);
    var destination = ArrayList_init(collectionSizeOrDefault($receiver_0, 10));
    var tmp$;
    tmp$ = $receiver_0.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var x = item.x;
      var y = item.y;
      tmp$_0.call(destination, new IVector2(numberToDouble(x), numberToDouble(y)));
    }
    return triangulate(destination);
  }
  function containsPoint($receiver, x, y) {
    var tmp$;
    var intersections = 0;
    tmp$ = $receiver.size - 1 | 0;
    for (var n = 0; n < tmp$; n++) {
      var p1 = $receiver.get_za3lpa$(n + 0 | 0);
      var p2 = $receiver.get_za3lpa$(n + 1 | 0);
      intersections = intersections + HorizontalLine_getInstance().intersectionsWithLine_15yvbs$(x, y, p1.x, p1.y, p2.x, p2.y) | 0;
    }
    return intersections % 2 !== 0;
  }
  function Triangle(p1, p2, p3, ctx, fixOrientation, checkOrientation) {
    Triangle$Companion_getInstance();
    if (ctx === void 0)
      ctx = new EdgeContext();
    if (fixOrientation === void 0)
      fixOrientation = false;
    if (checkOrientation === void 0)
      checkOrientation = true;
    this.p1 = p1;
    this.p2 = p2;
    this.p3 = p3;
    this.ctx = ctx;
    this.fixOrientation = fixOrientation;
    this.checkOrientation = checkOrientation;
    this.points = [this.p1, this.p2, this.p3];
    this.neighbors = Kotlin.newArray(3, null);
    this.interior = false;
    var array = Array_0(3);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = false;
    }
    this.constrained_edge = array;
    var array_0 = Array_0(3);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = false;
    }
    this.delaunay_edge = array_0;
    var p2_0 = this.p2;
    var p3_0 = this.p3;
    if (this.fixOrientation) {
      if (Orientation$Companion_getInstance().orient2d_immp3h$(this.p1, p2_0, p3_0) === Orientation$CW_getInstance()) {
        var pt = p3_0;
        p3_0 = p2_0;
        p2_0 = pt;
      }
    }
    if (this.checkOrientation && Orientation$Companion_getInstance().orient2d_immp3h$(p3_0, p2_0, this.p1) !== Orientation$CW_getInstance())
      throw Error_init('Triangle must defined with Orientation.CW');
    this.points[0] = this.p1;
    this.points[1] = p2_0;
    this.points[2] = p3_0;
  }
  Triangle.prototype.containsPoint_r62tv1$ = function (point) {
    return equals(point, this.points[0]) || equals(point, this.points[1]) || equals(point, this.points[2]);
  };
  Triangle.prototype.containsEdge_mjhuvn$ = function (edge) {
    return this.containsEdgePoints_g6xq6k$(edge.p, edge.q);
  };
  Triangle.prototype.containsEdgePoints_g6xq6k$ = function (p1, p2) {
    return this.containsPoint_r62tv1$(p1) && this.containsPoint_r62tv1$(p2);
  };
  Triangle.prototype.markNeighbor_o034oy$ = function (t, p1, p2) {
    if (equals(p1, this.points[2]) && equals(p2, this.points[1]) || (equals(p1, this.points[1]) && equals(p2, this.points[2]))) {
      this.neighbors[0] = t;
      return;
    }
    if (equals(p1, this.points[0]) && equals(p2, this.points[2]) || (equals(p1, this.points[2]) && equals(p2, this.points[0]))) {
      this.neighbors[1] = t;
      return;
    }
    if (equals(p1, this.points[0]) && equals(p2, this.points[1]) || (equals(p1, this.points[1]) && equals(p2, this.points[0]))) {
      this.neighbors[2] = t;
      return;
    }
    throw Error_init('Invalid markNeighbor call (1)!');
  };
  Triangle.prototype.markNeighborTriangle_4n3hlq$ = function (that) {
    if (that.containsEdgePoints_g6xq6k$(this.points[1], this.points[2])) {
      this.neighbors[0] = that;
      that.markNeighbor_o034oy$(this, this.points[1], this.points[2]);
      return;
    }
    if (that.containsEdgePoints_g6xq6k$(this.points[0], this.points[2])) {
      this.neighbors[1] = that;
      that.markNeighbor_o034oy$(this, this.points[0], this.points[2]);
      return;
    }
    if (that.containsEdgePoints_g6xq6k$(this.points[0], this.points[1])) {
      this.neighbors[2] = that;
      that.markNeighbor_o034oy$(this, this.points[0], this.points[1]);
      return;
    }
  };
  Triangle.prototype.getPointIndexOffset_nl9x6n$ = function (p, offset) {
    if (offset === void 0)
      offset = 0;
    var no = offset;
    for (var n = 0; n < 3; n++) {
      while (no < 0)
        no = no + 3 | 0;
      while (no > 2)
        no = no - 3 | 0;
      if (equals(p, this.points[n]))
        return no;
      no = no + 1 | 0;
    }
    throw Error_init('Point2d not in triangle');
  };
  Triangle.prototype.isPointAVertex_r62tv1$ = function (p) {
    return this.containsPoint_r62tv1$(p);
  };
  Triangle.prototype.pointCW_r62tv1$ = function (p) {
    return this.points[this.getPointIndexOffset_nl9x6n$(p, -1)];
  };
  Triangle.prototype.pointCCW_r62tv1$ = function (p) {
    return this.points[this.getPointIndexOffset_nl9x6n$(p, 1)];
  };
  Triangle.prototype.neighborCW_r62tv1$ = function (p) {
    return this.neighbors[this.getPointIndexOffset_nl9x6n$(p, 1)];
  };
  Triangle.prototype.neighborCCW_r62tv1$ = function (p) {
    return this.neighbors[this.getPointIndexOffset_nl9x6n$(p, -1)];
  };
  Triangle.prototype.getConstrainedEdgeCW_r62tv1$ = function (p) {
    return this.constrained_edge[this.getPointIndexOffset_nl9x6n$(p, 1)];
  };
  Triangle.prototype.setConstrainedEdgeCW_7p6vi2$ = function (p, ce) {
    this.constrained_edge[this.getPointIndexOffset_nl9x6n$(p, 1)] = ce;
    return ce;
  };
  Triangle.prototype.getConstrainedEdgeCCW_r62tv1$ = function (p) {
    return this.constrained_edge[this.getPointIndexOffset_nl9x6n$(p, -1)];
  };
  Triangle.prototype.setConstrainedEdgeCCW_7p6vi2$ = function (p, ce) {
    this.constrained_edge[this.getPointIndexOffset_nl9x6n$(p, -1)] = ce;
    return ce;
  };
  Triangle.prototype.getDelaunayEdgeCW_r62tv1$ = function (p) {
    return this.delaunay_edge[this.getPointIndexOffset_nl9x6n$(p, 1)];
  };
  Triangle.prototype.setDelaunayEdgeCW_7p6vi2$ = function (p, e) {
    this.delaunay_edge[this.getPointIndexOffset_nl9x6n$(p, 1)] = e;
    return e;
  };
  Triangle.prototype.getDelaunayEdgeCCW_r62tv1$ = function (p) {
    return this.delaunay_edge[this.getPointIndexOffset_nl9x6n$(p, -1)];
  };
  Triangle.prototype.setDelaunayEdgeCCW_7p6vi2$ = function (p, e) {
    this.delaunay_edge[this.getPointIndexOffset_nl9x6n$(p, -1)] = e;
    return e;
  };
  Triangle.prototype.neighborAcross_r62tv1$ = function (p) {
    return this.neighbors[this.getPointIndexOffset_nl9x6n$(p, 0)];
  };
  Triangle.prototype.oppositePoint_s5033v$ = function (t, p) {
    return this.pointCW_r62tv1$(t.pointCW_r62tv1$(p));
  };
  Triangle.prototype.legalize_4r95v7$ = function (opoint, npoint) {
    if (npoint === void 0)
      npoint = null;
    if (npoint == null)
      return this.legalize_4r95v7$(this.points[0], opoint);
    if (equals(opoint, this.points[0])) {
      this.points[1] = this.points[0];
      this.points[0] = this.points[2];
      this.points[2] = npoint;
    }
     else if (equals(opoint, this.points[1])) {
      this.points[2] = this.points[1];
      this.points[1] = this.points[0];
      this.points[0] = npoint;
    }
     else if (equals(opoint, this.points[2])) {
      this.points[0] = this.points[2];
      this.points[2] = this.points[1];
      this.points[1] = npoint;
    }
     else {
      throw Error_init('Invalid js.poly2tri.Triangle.Legalize call!');
    }
  };
  Triangle.prototype.index_r62tv1$ = function (p) {
    try {
      return this.getPointIndexOffset_nl9x6n$(p, 0);
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return -1;
      }
       else
        throw e;
    }
  };
  Triangle.prototype.edgeIndex_g6xq6k$ = function (p1, p2) {
    if (equals(p1, this.points[0])) {
      if (equals(p2, this.points[1]))
        return 2;
      if (equals(p2, this.points[2]))
        return 1;
    }
     else if (equals(p1, this.points[1])) {
      if (equals(p2, this.points[2]))
        return 0;
      if (equals(p2, this.points[0]))
        return 2;
    }
     else if (equals(p1, this.points[2])) {
      if (equals(p2, this.points[0]))
        return 1;
      if (equals(p2, this.points[1]))
        return 0;
    }
    return -1;
  };
  Triangle.prototype.markConstrainedEdgeByIndex_za3lpa$ = function (index) {
    this.constrained_edge[index] = true;
  };
  Triangle.prototype.markConstrainedEdgeByEdge_mjhuvn$ = function (edge) {
    this.markConstrainedEdgeByPoints_g6xq6k$(edge.p, edge.q);
  };
  Triangle.prototype.markConstrainedEdgeByPoints_g6xq6k$ = function (p, q) {
    if (equals(q, this.points[0]) && equals(p, this.points[1]) || (equals(q, this.points[1]) && equals(p, this.points[0]))) {
      this.constrained_edge[2] = true;
    }
     else if (equals(q, this.points[0]) && equals(p, this.points[2]) || (equals(q, this.points[2]) && equals(p, this.points[0]))) {
      this.constrained_edge[1] = true;
    }
     else if (equals(q, this.points[1]) && equals(p, this.points[2]) || (equals(q, this.points[2]) && equals(p, this.points[1]))) {
      this.constrained_edge[0] = true;
    }
  };
  Triangle.prototype.isEdgeSide_g6xq6k$ = function (ep, eq) {
    var tmp$;
    var index = this.edgeIndex_g6xq6k$(ep, eq);
    if (index === -1)
      return false;
    this.markConstrainedEdgeByIndex_za3lpa$(index);
    (tmp$ = this.neighbors[index]) != null ? (tmp$.markConstrainedEdgeByPoints_g6xq6k$(ep, eq), Unit) : null;
    return true;
  };
  Triangle.prototype.clearNeigbors = function () {
    this.neighbors[0] = null;
    this.neighbors[1] = null;
    this.neighbors[2] = null;
  };
  Triangle.prototype.clearDelunayEdges = function () {
    this.delaunay_edge[0] = false;
    this.delaunay_edge[1] = false;
    this.delaunay_edge[2] = false;
  };
  Triangle.prototype.equals = function (other) {
    return Kotlin.isType(other, Triangle) && equals(this.p1, other.p1) && equals(this.p2, other.p2) && equals(this.p3, other.p3);
  };
  Triangle.prototype.pointInsideTriangle_r62tv1$ = function (pp) {
    var p1 = this.points[0];
    var p2 = this.points[1];
    var p3 = this.points[2];
    if (Triangle$Companion_getInstance()._product_0(p1, p2, p3) >= 0) {
      return Triangle$Companion_getInstance()._product_0(p1, p2, pp) >= 0 && Triangle$Companion_getInstance()._product_0(p2, p3, pp) >= 0 && Triangle$Companion_getInstance()._product_0(p3, p1, pp) >= 0;
    }
     else {
      return Triangle$Companion_getInstance()._product_0(p1, p2, pp) <= 0 && Triangle$Companion_getInstance()._product_0(p2, p3, pp) <= 0 && Triangle$Companion_getInstance()._product_0(p3, p1, pp) <= 0;
    }
  };
  Object.defineProperty(Triangle.prototype, 'area', {
    get: function () {
      var a = this.p2.x - this.p1.x;
      var b = this.p2.y - this.p1.y;
      var c = this.p3.x - this.p1.x;
      var d = this.p3.y - this.p1.y;
      var x = a * d - b * c;
      return Math_0.abs(x) / 2.0;
    }
  });
  Triangle.prototype.toString = function () {
    return 'Triangle(' + this.points[0] + ', ' + this.points[1] + ', ' + this.points[2] + ')';
  };
  function Triangle$Companion() {
    Triangle$Companion_instance = this;
    this.CW_OFFSET_0 = 1;
    this.CCW_OFFSET_0 = -1;
  }
  Triangle$Companion.prototype.getNotCommonVertexIndex_q9l14g$ = function (t1, t2) {
    var sum = 0;
    var index = -1;
    if (!t2.containsPoint_r62tv1$(t1.points[0])) {
      index = 0;
      sum = sum + 1 | 0;
    }
    if (!t2.containsPoint_r62tv1$(t1.points[1])) {
      index = 1;
      sum = sum + 1 | 0;
    }
    if (!t2.containsPoint_r62tv1$(t1.points[2])) {
      index = 2;
      sum = sum + 1 | 0;
    }
    if (sum !== 1)
      throw Error_init('Triangles are not contiguous');
    return index;
  };
  Triangle$Companion.prototype.getNotCommonVertex_q9l14g$ = function (t1, t2) {
    return t1.points[this.getNotCommonVertexIndex_q9l14g$(t1, t2)];
  };
  Triangle$Companion.prototype.getCommonEdge_q9l14g$ = function (t1, t2) {
    var tmp$, tmp$_0;
    var commonIndexes = ArrayList_init_0();
    tmp$ = t1.points;
    for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
      var point = tmp$[tmp$_0];
      if (t2.containsPoint_r62tv1$(point))
        commonIndexes.add_11rb$(point);
    }
    if (commonIndexes.size !== 2)
      throw Error_init('Triangles are not contiguous');
    return t1.ctx.createEdge_g6xq6k$(commonIndexes.get_za3lpa$(0), commonIndexes.get_za3lpa$(1));
  };
  Triangle$Companion.prototype.rotateTrianglePair_samruc$ = function (t, p, ot, op) {
    var n1 = t.neighborCCW_r62tv1$(p);
    var n2 = t.neighborCW_r62tv1$(p);
    var n3 = ot.neighborCCW_r62tv1$(op);
    var n4 = ot.neighborCW_r62tv1$(op);
    var ce1 = t.getConstrainedEdgeCCW_r62tv1$(p);
    var ce2 = t.getConstrainedEdgeCW_r62tv1$(p);
    var ce3 = ot.getConstrainedEdgeCCW_r62tv1$(op);
    var ce4 = ot.getConstrainedEdgeCW_r62tv1$(op);
    var de1 = t.getDelaunayEdgeCCW_r62tv1$(p);
    var de2 = t.getDelaunayEdgeCW_r62tv1$(p);
    var de3 = ot.getDelaunayEdgeCCW_r62tv1$(op);
    var de4 = ot.getDelaunayEdgeCW_r62tv1$(op);
    t.legalize_4r95v7$(p, op);
    ot.legalize_4r95v7$(op, p);
    ot.setDelaunayEdgeCCW_7p6vi2$(p, de1);
    t.setDelaunayEdgeCW_7p6vi2$(p, de2);
    t.setDelaunayEdgeCCW_7p6vi2$(op, de3);
    ot.setDelaunayEdgeCW_7p6vi2$(op, de4);
    ot.setConstrainedEdgeCCW_7p6vi2$(p, ce1);
    t.setConstrainedEdgeCW_7p6vi2$(p, ce2);
    t.setConstrainedEdgeCCW_7p6vi2$(op, ce3);
    ot.setConstrainedEdgeCW_7p6vi2$(op, ce4);
    t.clearNeigbors();
    ot.clearNeigbors();
    if (n1 != null)
      ot.markNeighborTriangle_4n3hlq$(n1);
    if (n2 != null)
      t.markNeighborTriangle_4n3hlq$(n2);
    if (n3 != null)
      t.markNeighborTriangle_4n3hlq$(n3);
    if (n4 != null)
      ot.markNeighborTriangle_4n3hlq$(n4);
    t.markNeighborTriangle_4n3hlq$(ot);
  };
  Triangle$Companion.prototype.getUniquePointsFromTriangles_rz78zv$ = function (triangles) {
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = triangles.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = toList_1(element.points);
      addAll_0(destination, list);
    }
    return distinct(destination);
  };
  function Triangle$Companion$traceList$getPointName(closure$pointsMap) {
    return function (point) {
      return 'p' + toString(closure$pointsMap.get_11rb$(point));
    };
  }
  Triangle$Companion.prototype.traceList_rz78zv$ = function (triangles) {
    var tmp$, tmp$_0, tmp$_1;
    var pointsList = Triangle$Companion_getInstance().getUniquePointsFromTriangles_rz78zv$(triangles);
    var pointsMap = HashMap_init();
    var points_length = 0;
    tmp$ = pointsList.iterator();
    while (tmp$.hasNext()) {
      var point = tmp$.next();
      var value = (points_length = points_length + 1 | 0, points_length);
      pointsMap.put_xwzc9p$(point, value);
    }
    var getPointName = Triangle$Companion$traceList$getPointName(pointsMap);
    println('Points:');
    tmp$_0 = pointsList.iterator();
    while (tmp$_0.hasNext()) {
      var point_0 = tmp$_0.next();
      println('  ' + getPointName(point_0) + ' = ' + toString(point_0));
    }
    println('Triangles:');
    tmp$_1 = triangles.iterator();
    while (tmp$_1.hasNext()) {
      var triangle = tmp$_1.next();
      println('  Triangle(' + getPointName(triangle.points[0]) + ', ' + getPointName(triangle.points[1]) + ', ' + getPointName(triangle.points[2]) + ')');
    }
  };
  Triangle$Companion.prototype._product_0 = function (p1, p2, p3) {
    return (p1.x - p3.x) * (p2.y - p3.y) - (p1.y - p3.y) * (p2.x - p3.x);
  };
  Triangle$Companion.prototype.insideIncircle_p5mpkc$ = function (pa, pb, pc, pd) {
    var adx = pa.x - pd.x;
    var ady = pa.y - pd.y;
    var bdx = pb.x - pd.x;
    var bdy = pb.y - pd.y;
    var adxbdy = adx * bdy;
    var bdxady = bdx * ady;
    var oabd = adxbdy - bdxady;
    if (oabd <= 0)
      return false;
    var cdx = pc.x - pd.x;
    var cdy = pc.y - pd.y;
    var cdxady = cdx * ady;
    var adxcdy = adx * cdy;
    var ocad = cdxady - adxcdy;
    if (ocad <= 0)
      return false;
    var bdxcdy = bdx * cdy;
    var cdxbdy = cdx * bdy;
    var alift = adx * adx + ady * ady;
    var blift = bdx * bdx + bdy * bdy;
    var clift = cdx * cdx + cdy * cdy;
    var det = alift * (bdxcdy - cdxbdy) + blift * ocad + clift * oabd;
    return det > 0;
  };
  Triangle$Companion.prototype.inScanArea_p5mpkc$ = function (pa, pb, pc, pd) {
    var pdx = pd.x;
    var pdy = pd.y;
    var adx = pa.x - pdx;
    var ady = pa.y - pdy;
    var bdx = pb.x - pdx;
    var bdy = pb.y - pdy;
    var adxbdy = adx * bdy;
    var bdxady = bdx * ady;
    var oabd = adxbdy - bdxady;
    if (oabd <= Constants_getInstance().EPSILON)
      return false;
    var cdx = pc.x - pdx;
    var cdy = pc.y - pdy;
    var cdxady = cdx * ady;
    var adxcdy = adx * cdy;
    var ocad = cdxady - adxcdy;
    if (ocad <= Constants_getInstance().EPSILON)
      return false;
    return true;
  };
  Triangle$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Triangle$Companion_instance = null;
  function Triangle$Companion_getInstance() {
    if (Triangle$Companion_instance === null) {
      new Triangle$Companion();
    }
    return Triangle$Companion_instance;
  }
  Triangle.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Triangle',
    interfaces: []
  };
  Triangle.prototype.component1 = function () {
    return this.p1;
  };
  Triangle.prototype.component2 = function () {
    return this.p2;
  };
  Triangle.prototype.component3 = function () {
    return this.p3;
  };
  Triangle.prototype.component4 = function () {
    return this.ctx;
  };
  Triangle.prototype.component5 = function () {
    return this.fixOrientation;
  };
  Triangle.prototype.component6 = function () {
    return this.checkOrientation;
  };
  Triangle.prototype.copy_tiop39$ = function (p1, p2, p3, ctx, fixOrientation, checkOrientation) {
    return new Triangle(p1 === void 0 ? this.p1 : p1, p2 === void 0 ? this.p2 : p2, p3 === void 0 ? this.p3 : p3, ctx === void 0 ? this.ctx : ctx, fixOrientation === void 0 ? this.fixOrientation : fixOrientation, checkOrientation === void 0 ? this.checkOrientation : checkOrientation);
  };
  Triangle.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.p1) | 0;
    result = result * 31 + Kotlin.hashCode(this.p2) | 0;
    result = result * 31 + Kotlin.hashCode(this.p3) | 0;
    result = result * 31 + Kotlin.hashCode(this.ctx) | 0;
    result = result * 31 + Kotlin.hashCode(this.fixOrientation) | 0;
    result = result * 31 + Kotlin.hashCode(this.checkOrientation) | 0;
    return result;
  };
  function FunnelPortal(left, right) {
    this.left = left;
    this.right = right;
  }
  FunnelPortal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FunnelPortal',
    interfaces: []
  };
  FunnelPortal.prototype.component1 = function () {
    return this.left;
  };
  FunnelPortal.prototype.component2 = function () {
    return this.right;
  };
  FunnelPortal.prototype.copy_g6xq6k$ = function (left, right) {
    return new FunnelPortal(left === void 0 ? this.left : left, right === void 0 ? this.right : right);
  };
  FunnelPortal.prototype.toString = function () {
    return 'FunnelPortal(left=' + Kotlin.toString(this.left) + (', right=' + Kotlin.toString(this.right)) + ')';
  };
  FunnelPortal.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    return result;
  };
  FunnelPortal.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.left, other.left) && Kotlin.equals(this.right, other.right)))));
  };
  function NewFunnel() {
    NewFunnel$Companion_getInstance();
    this.portals_0 = ArrayList_init_0();
    this.path = ArrayList_init_0();
  }
  function NewFunnel$Companion() {
    NewFunnel$Companion_instance = this;
  }
  NewFunnel$Companion.prototype.triarea2_0 = function (a, b, c) {
    var ax = b.x - a.x;
    var ay = b.y - a.y;
    var bx = c.x - a.x;
    var by = c.y - a.y;
    return bx * ay - ax * by;
  };
  NewFunnel$Companion.prototype.vdistsqr_0 = function (a, b) {
    return Math_getInstance().hypot_lu1900$(b.x - a.x, b.y - a.y);
  };
  NewFunnel$Companion.prototype.vequal_0 = function (a, b) {
    return this.vdistsqr_0(a, b) < 0.001 * 0.001;
  };
  NewFunnel$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NewFunnel$Companion_instance = null;
  function NewFunnel$Companion_getInstance() {
    if (NewFunnel$Companion_instance === null) {
      new NewFunnel$Companion();
    }
    return NewFunnel$Companion_instance;
  }
  NewFunnel.prototype.push_g6xq6k$ = function (p1, p2) {
    if (p2 === void 0)
      p2 = p1;
    this.portals_0.add_11rb$(new NewFunnel$Portal(p1, p2));
  };
  NewFunnel.prototype.stringPull = function () {
    var pts = ArrayList_init_0();
    var portalApex;
    var portalLeft;
    var portalRight;
    var apexIndex = 0;
    var leftIndex = 0;
    var rightIndex = 0;
    portalApex = this.portals_0.get_za3lpa$(0).left;
    portalLeft = this.portals_0.get_za3lpa$(0).left;
    portalRight = this.portals_0.get_za3lpa$(0).right;
    pts.add_11rb$(portalApex);
    var i = 0;
    while (i < this.portals_0.size) {
      var left = this.portals_0.get_za3lpa$(i).left;
      var right = this.portals_0.get_za3lpa$(i).right;
      i = i + 1 | 0;
      if (NewFunnel$Companion_getInstance().triarea2_0(portalApex, portalRight, right) <= 0.0) {
        if (NewFunnel$Companion_getInstance().vequal_0(portalApex, portalRight) || NewFunnel$Companion_getInstance().triarea2_0(portalApex, portalLeft, right) > 0.0) {
          portalRight = right;
          rightIndex = i;
        }
         else {
          pts.add_11rb$(portalLeft);
          portalApex = portalLeft;
          apexIndex = leftIndex;
          portalLeft = portalApex;
          portalRight = portalApex;
          leftIndex = apexIndex;
          rightIndex = apexIndex;
          i = apexIndex;
          continue;
        }
      }
      if (NewFunnel$Companion_getInstance().triarea2_0(portalApex, portalLeft, left) >= 0.0) {
        if (NewFunnel$Companion_getInstance().vequal_0(portalApex, portalLeft) || NewFunnel$Companion_getInstance().triarea2_0(portalApex, portalRight, left) < 0.0) {
          portalLeft = left;
          leftIndex = i;
        }
         else {
          pts.add_11rb$(portalRight);
          portalApex = portalRight;
          apexIndex = rightIndex;
          portalLeft = portalApex;
          portalRight = portalApex;
          leftIndex = apexIndex;
          rightIndex = apexIndex;
          i = apexIndex;
          continue;
        }
      }
    }
    if (pts.size === 0 || !NewFunnel$Companion_getInstance().vequal_0(pts.get_za3lpa$(pts.size - 1 | 0), this.portals_0.get_za3lpa$(this.portals_0.size - 1 | 0).left)) {
      pts.add_11rb$(this.portals_0.get_za3lpa$(this.portals_0.size - 1 | 0).left);
    }
    this.path = pts;
    return pts;
  };
  function NewFunnel$Portal(left, right) {
    this.left = left;
    this.right = right;
  }
  NewFunnel$Portal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Portal',
    interfaces: []
  };
  NewFunnel$Portal.prototype.component1 = function () {
    return this.left;
  };
  NewFunnel$Portal.prototype.component2 = function () {
    return this.right;
  };
  NewFunnel$Portal.prototype.copy_g6xq6k$ = function (left, right) {
    return new NewFunnel$Portal(left === void 0 ? this.left : left, right === void 0 ? this.right : right);
  };
  NewFunnel$Portal.prototype.toString = function () {
    return 'Portal(left=' + Kotlin.toString(this.left) + (', right=' + Kotlin.toString(this.right)) + ')';
  };
  NewFunnel$Portal.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.left) | 0;
    result = result * 31 + Kotlin.hashCode(this.right) | 0;
    return result;
  };
  NewFunnel$Portal.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.left, other.left) && Kotlin.equals(this.right, other.right)))));
  };
  NewFunnel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NewFunnel',
    interfaces: []
  };
  function PathFind(spatialMesh) {
    this.spatialMesh = spatialMesh;
    this.openedList_0 = PriorityQueue_init(void 0, PathFind$openedList$lambda);
    this.reset_0();
  }
  function PathFind$reset$lambda(l, r) {
    return Kotlin.primitiveCompareTo(l.F, r.F);
  }
  PathFind.prototype.reset_0 = function () {
    var tmp$;
    this.openedList_0 = PriorityQueue_init(void 0, PathFind$reset$lambda);
    tmp$ = this.spatialMesh.nodes.iterator();
    while (tmp$.hasNext()) {
      var node = tmp$.next();
      node.parent = null;
      node.G = 0;
      node.H = 0;
      node.closed = false;
    }
  };
  PathFind.prototype.find_i4865u$ = function (startNode, endNode) {
    var tmp$, tmp$_0;
    var returnList = ArrayList_init_0();
    this.reset_0();
    var currentNode = startNode;
    if (startNode !== null && endNode !== null) {
      this.addToOpenedList_0(startNode);
      while (!equals(currentNode, endNode) && this.openedListHasItems_0()) {
        currentNode = this.getAndRemoveFirstFromOpenedList_0();
        this.addNodeToClosedList_0(currentNode);
        tmp$ = this.getNodeNeighbors_0(currentNode);
        for (tmp$_0 = 0; tmp$_0 !== tmp$.length; ++tmp$_0) {
          var neighborNode = tmp$[tmp$_0];
          if (neighborNode === null)
            continue;
          if (this.inClosedList_0(neighborNode))
            continue;
          var G = currentNode.G + neighborNode.distanceToSpatialNode_gltg9c$(currentNode) | 0;
          if (!this.inOpenedList_0(neighborNode)) {
            this.addToOpenedList_0(neighborNode);
            neighborNode.G = G;
            neighborNode.H = neighborNode.distanceToSpatialNode_gltg9c$(endNode);
            neighborNode.parent = currentNode;
            this.updatedNodeOnOpenedList_0(neighborNode);
          }
           else if (G < neighborNode.G) {
            neighborNode.G = G;
            neighborNode.parent = currentNode;
            this.updatedNodeOnOpenedList_0(neighborNode);
          }
        }
      }
    }
    if (!equals(currentNode, endNode))
      throw new PathFindException("Can't find a path", 1);
    while (!equals(currentNode, startNode)) {
      returnList.add_11rb$(ensureNotNull(currentNode));
      currentNode = currentNode.parent;
    }
    if (startNode != null)
      returnList.add_11rb$(startNode);
    reverse(returnList);
    return returnList;
  };
  PathFind.prototype.addToOpenedList_0 = function (node) {
    this.openedList_0.push_11rb$(node);
  };
  PathFind.prototype.openedListHasItems_0 = function () {
    return this.openedList_0.length > 0;
  };
  PathFind.prototype.getAndRemoveFirstFromOpenedList_0 = function () {
    return this.openedList_0.removeHead();
  };
  PathFind.prototype.addNodeToClosedList_0 = function (node) {
    node.closed = true;
  };
  PathFind.prototype.inClosedList_0 = function (node) {
    return node.closed;
  };
  PathFind.prototype.getNodeNeighbors_0 = function (node) {
    return node.neighbors;
  };
  PathFind.prototype.inOpenedList_0 = function (node) {
    return this.openedList_0.contains_11rb$(node);
  };
  PathFind.prototype.updatedNodeOnOpenedList_0 = function (node) {
    this.openedList_0.updateObject_11rb$(node);
  };
  function PathFind$openedList$lambda(l, r) {
    return Kotlin.primitiveCompareTo(l.F, r.F);
  }
  PathFind.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathFind',
    interfaces: []
  };
  function PathFindChannel() {
    PathFindChannel_instance = this;
  }
  PathFindChannel.prototype.channelToPortals_xmiz5x$ = function (startPoint, endPoint, channel) {
    var tmp$;
    var portals = new NewFunnel();
    portals.push_g6xq6k$(startPoint);
    if (channel.size >= 2) {
      var firstTriangle = ensureNotNull(channel.get_za3lpa$(0).triangle);
      var secondTriangle = ensureNotNull(channel.get_za3lpa$(1).triangle);
      var lastTriangle = ensureNotNull(channel.get_za3lpa$(channel.size - 1 | 0).triangle);
      this.assert_0(firstTriangle.pointInsideTriangle_r62tv1$(startPoint));
      this.assert_0(lastTriangle.pointInsideTriangle_r62tv1$(endPoint));
      var startVertex = Triangle$Companion_getInstance().getNotCommonVertex_q9l14g$(firstTriangle, secondTriangle);
      var vertexCW0 = startVertex;
      var vertexCCW0 = startVertex;
      tmp$ = channel.size - 1 | 0;
      for (var n = 0; n < tmp$; n++) {
        var triangleCurrent = ensureNotNull(channel.get_za3lpa$(n + 0 | 0).triangle);
        var triangleNext = ensureNotNull(channel.get_za3lpa$(n + 1 | 0).triangle);
        var commonEdge = Triangle$Companion_getInstance().getCommonEdge_q9l14g$(triangleCurrent, triangleNext);
        var vertexCW1 = triangleCurrent.pointCW_r62tv1$(vertexCW0);
        var vertexCCW1 = triangleCurrent.pointCCW_r62tv1$(vertexCCW0);
        if (!commonEdge.hasPoint_r62tv1$(vertexCW0))
          vertexCW0 = vertexCW1;
        if (!commonEdge.hasPoint_r62tv1$(vertexCCW0))
          vertexCCW0 = vertexCCW1;
        portals.push_g6xq6k$(vertexCW0, vertexCCW0);
      }
    }
    portals.push_g6xq6k$(endPoint);
    portals.stringPull();
    return portals;
  };
  PathFindChannel.prototype.channelToPortals2_tfdvgj$ = function (startPoint, endPoint, channel) {
    var tmp$;
    var portals = new NewFunnel();
    var firstTriangle = ensureNotNull(channel.get_za3lpa$(0).triangle);
    var secondTriangle = ensureNotNull(channel.get_za3lpa$(1).triangle);
    var lastTriangle = ensureNotNull(channel.get_za3lpa$(channel.size - 1 | 0).triangle);
    this.assert_0(firstTriangle.pointInsideTriangle_r62tv1$(startPoint));
    this.assert_0(lastTriangle.pointInsideTriangle_r62tv1$(endPoint));
    var startVertexIndex = Triangle$Companion_getInstance().getNotCommonVertexIndex_q9l14g$(firstTriangle, secondTriangle);
    var currentVertexCW = firstTriangle.points[startVertexIndex];
    var currentVertexCCW = firstTriangle.points[startVertexIndex];
    portals.push_g6xq6k$(startPoint);
    tmp$ = channel.size;
    for (var n = 1; n < tmp$; n++) {
      var edge = Triangle$Companion_getInstance().getCommonEdge_q9l14g$(ensureNotNull(channel.get_za3lpa$(n - 1 | 0).triangle), ensureNotNull(channel.get_za3lpa$(n).triangle));
      portals.push_g6xq6k$(edge.p, edge.q);
    }
    portals.push_g6xq6k$(endPoint);
    portals.stringPull();
    return portals;
  };
  PathFindChannel.prototype.assert_0 = function (test) {
    if (!test)
      throw Error_init('Assert error');
  };
  PathFindChannel.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'PathFindChannel',
    interfaces: []
  };
  var PathFindChannel_instance = null;
  function PathFindChannel_getInstance() {
    if (PathFindChannel_instance === null) {
      new PathFindChannel();
    }
    return PathFindChannel_instance;
  }
  function PathFindException(message, index) {
    if (message === void 0)
      message = '';
    if (index === void 0)
      index = 0;
    Error_init(message, this);
    this.index = index;
    this.name = 'PathFindException';
  }
  PathFindException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PathFindException',
    interfaces: [Error_0]
  };
  function SpatialMesh() {
    SpatialMesh$Companion_getInstance();
    this.mapTriangleToSpatialNode_0 = HashMap_init();
    this.nodes = ArrayList_init_0();
  }
  SpatialMesh.prototype.spatialNodeFromPoint_r62tv1$ = function (point) {
    var tmp$;
    tmp$ = this.nodes.iterator();
    while (tmp$.hasNext()) {
      var node = tmp$.next();
      if (ensureNotNull(node.triangle).pointInsideTriangle_r62tv1$(point))
        return node;
    }
    throw Error_init('Point2d not inside triangles');
  };
  SpatialMesh.prototype.getNodeAt_r62tv1$ = function (point) {
    var tmp$;
    tmp$ = this.nodes.iterator();
    while (tmp$.hasNext()) {
      var node = tmp$.next();
      if (ensureNotNull(node.triangle).containsPoint_r62tv1$(point))
        return node;
    }
    return null;
  };
  SpatialMesh.prototype.getNodeFromTriangle_1ts1sx$ = function (triangle) {
    if (triangle === null)
      return null;
    if (!this.mapTriangleToSpatialNode_0.containsKey_11rb$(triangle)) {
      var tp = triangle.points;
      var sn = new SpatialNode(numberToInt((tp[0].x + tp[1].x + tp[2].x) / 3), numberToInt((tp[0].y + tp[1].y + tp[2].y) / 3), 0.0, triangle, 0, 0);
      this.mapTriangleToSpatialNode_0.put_xwzc9p$(triangle, sn);
      sn.neighbors = [triangle.constrained_edge[0] ? null : this.getNodeFromTriangle_1ts1sx$(triangle.neighbors[0]), triangle.constrained_edge[1] ? null : this.getNodeFromTriangle_1ts1sx$(triangle.neighbors[1]), triangle.constrained_edge[2] ? null : this.getNodeFromTriangle_1ts1sx$(triangle.neighbors[2])];
    }
    return this.mapTriangleToSpatialNode_0.get_11rb$(triangle);
  };
  function SpatialMesh$Companion() {
    SpatialMesh$Companion_instance = this;
  }
  SpatialMesh$Companion.prototype.fromTriangles_zhzwm1$ = function (triangles) {
    return SpatialMesh_init(triangles);
  };
  SpatialMesh$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SpatialMesh$Companion_instance = null;
  function SpatialMesh$Companion_getInstance() {
    if (SpatialMesh$Companion_instance === null) {
      new SpatialMesh$Companion();
    }
    return SpatialMesh$Companion_instance;
  }
  SpatialMesh.prototype.toString = function () {
    return 'SpatialMesh(' + this.nodes.toString() + ')';
  };
  SpatialMesh.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpatialMesh',
    interfaces: []
  };
  function SpatialMesh_init(triangles, $this) {
    $this = $this || Object.create(SpatialMesh.prototype);
    SpatialMesh.call($this);
    var tmp$;
    tmp$ = triangles.iterator();
    while (tmp$.hasNext()) {
      var triangle = tmp$.next();
      var node = $this.getNodeFromTriangle_1ts1sx$(triangle);
      if (node != null)
        $this.nodes.add_11rb$(node);
    }
    return $this;
  }
  function SpatialNode(x, y, z, triangle, G, H, neighbors, parent, closed) {
    if (x === void 0)
      x = 0.0;
    if (y === void 0)
      y = 0.0;
    if (z === void 0)
      z = 0.0;
    if (triangle === void 0)
      triangle = null;
    if (G === void 0)
      G = 0;
    if (H === void 0)
      H = 0;
    if (neighbors === void 0)
      neighbors = Kotlin.newArray(3, null);
    if (parent === void 0)
      parent = null;
    if (closed === void 0)
      closed = false;
    this.x = x;
    this.y = y;
    this.z = z;
    this.triangle = triangle;
    this.G = G;
    this.H = H;
    this.neighbors = neighbors;
    this.parent = parent;
    this.closed = closed;
  }
  Object.defineProperty(SpatialNode.prototype, 'F', {
    get: function () {
      return this.G + this.H | 0;
    }
  });
  SpatialNode.prototype.distanceToSpatialNode_gltg9c$ = function (that) {
    return numberToInt(Math_getInstance().hypot_lu1900$(this.x - that.x, this.y - that.y));
  };
  SpatialNode.prototype.toString = function () {
    return 'SpatialNode(' + this.x + ', ' + this.y + ')';
  };
  SpatialNode.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SpatialNode',
    interfaces: []
  };
  function AdvancingFront(head, tail) {
    this.head = head;
    this.tail = tail;
    this.search_node = this.head;
  }
  AdvancingFront.prototype.locateNode_14dthe$ = function (x) {
    var node = this.search_node;
    if (x < node.value) {
      while (node.prev != null) {
        node = ensureNotNull(node.prev);
        if (x >= node.value) {
          this.search_node = node;
          return node;
        }
      }
    }
     else {
      while (node.next != null) {
        node = ensureNotNull(node.next);
        if (x < node.value) {
          this.search_node = ensureNotNull(node.prev);
          return ensureNotNull(node.prev);
        }
      }
    }
    return null;
  };
  AdvancingFront.prototype.locatePoint_r62tv1$ = function (point) {
    var px = point.x;
    var node = this.search_node;
    var nx = ensureNotNull(node).point.x;
    if (px === nx) {
      if (!equals(point, node.point)) {
        if (equals(point, ensureNotNull(node.prev).point)) {
          node = node.prev;
        }
         else if (equals(point, ensureNotNull(node.next).point)) {
          node = node.next;
        }
         else {
          throw Error_init('Invalid AdvancingFront.locatePoint call!');
        }
      }
    }
     else if (px < nx) {
      node = node.prev;
      while (node != null && !equals(point, node.point)) {
        node = node.prev;
      }
    }
     else {
      node = node.next;
      while (node != null && !equals(point, node.point)) {
        node = node.next;
      }
    }
    if (node != null)
      this.search_node = node;
    return node;
  };
  AdvancingFront.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AdvancingFront',
    interfaces: []
  };
  function Basin() {
    this.left_node = null;
    this.bottom_node = null;
    this.right_node = null;
    this.width = 0.0;
    this.left_highest = false;
  }
  Basin.prototype.clear = function () {
    this.left_node = null;
    this.bottom_node = null;
    this.right_node = null;
    this.width = 0.0;
    this.left_highest = false;
  };
  Basin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Basin',
    interfaces: []
  };
  function Constants() {
    Constants_instance = this;
    this.kAlpha = 0.3;
    this.EPSILON = 1.0E-12;
    this.PI_2 = math.PI / 2;
    this.PI_3div4 = 3 * math.PI / 4;
  }
  Constants.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Constants',
    interfaces: []
  };
  var Constants_instance = null;
  function Constants_getInstance() {
    if (Constants_instance === null) {
      new Constants();
    }
    return Constants_instance;
  }
  function Edge_0(p1, p2, ctx) {
    Edge$Companion_getInstance_0();
    this.p1 = p1;
    this.p2 = p2;
    this.ctx = ctx;
    this.p = null;
    this.q = null;
    var swap = false;
    if (this.p1.y > this.p2.y) {
      swap = true;
    }
     else if (this.p1.y === this.p2.y) {
      if (this.p1.x === this.p2.x)
        throw Error_init('Repeat points');
      swap = this.p1.x > this.p2.x;
    }
     else {
      swap = false;
    }
    if (swap) {
      this.q = this.p1;
      this.p = this.p2;
    }
     else {
      this.p = this.p1;
      this.q = this.p2;
    }
    this.ctx.getPointEdgeList_r62tv1$(this.q).add_11rb$(this);
  }
  Edge_0.prototype.hasPoint_r62tv1$ = function (point) {
    return equals(this.p, point) || equals(this.q, point);
  };
  function Edge$Companion_0() {
    Edge$Companion_instance_0 = this;
  }
  Edge$Companion_0.prototype.getUniquePointsFromEdges_y63y5y$ = function (edges) {
    var destination = ArrayList_init_0();
    var tmp$;
    tmp$ = edges.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var list = listOf([element.p, element.q]);
      addAll_0(destination, list);
    }
    return distinct(destination);
  };
  function Edge$Companion$traceList$getPointName(closure$pointsMap) {
    return function (point) {
      return 'p' + toString(closure$pointsMap.get_11rb$(point));
    };
  }
  Edge$Companion_0.prototype.traceList_y63y5y$ = function (edges) {
    var tmp$, tmp$_0, tmp$_1;
    var pointsList = this.getUniquePointsFromEdges_y63y5y$(edges);
    var pointsMap = HashMap_init();
    var points_length = 0;
    tmp$ = pointsList.iterator();
    while (tmp$.hasNext()) {
      var point = tmp$.next();
      var value = (points_length = points_length + 1 | 0, points_length);
      pointsMap.put_xwzc9p$(point, value);
    }
    var getPointName = Edge$Companion$traceList$getPointName(pointsMap);
    println('Points:');
    tmp$_0 = pointsList.iterator();
    while (tmp$_0.hasNext()) {
      var point_0 = tmp$_0.next();
      println('  ' + getPointName(point_0) + ' = ' + toString(point_0));
    }
    println('Edges:');
    tmp$_1 = edges.iterator();
    while (tmp$_1.hasNext()) {
      var edge = tmp$_1.next();
      println('  Edge(' + getPointName(edge.p) + ', ' + getPointName(edge.q) + ')');
    }
  };
  Edge$Companion_0.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Edge$Companion_instance_0 = null;
  function Edge$Companion_getInstance_0() {
    if (Edge$Companion_instance_0 === null) {
      new Edge$Companion_0();
    }
    return Edge$Companion_instance_0;
  }
  Edge_0.prototype.toString = function () {
    return 'Edge(' + this.p + ', ' + this.q + ')';
  };
  Edge_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Edge',
    interfaces: []
  };
  function EdgeEvent() {
    this.constrained_edge = null;
    this.right = false;
  }
  EdgeEvent.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EdgeEvent',
    interfaces: []
  };
  function Node(point, triangle) {
    if (triangle === void 0)
      triangle = null;
    this.point = point;
    this.triangle = triangle;
    this.prev = null;
    this.next = null;
    this.value = this.point.x;
  }
  Object.defineProperty(Node.prototype, 'holeAngle', {
    get: function () {
      var tmp$, tmp$_0;
      tmp$ = this.prev;
      if (tmp$ == null) {
        throw IllegalStateException_init('Not enough vertices');
      }
      var prev = tmp$;
      tmp$_0 = this.next;
      if (tmp$_0 == null) {
        throw IllegalStateException_init('Not enough vertices');
      }
      var next = tmp$_0;
      var ax = next.point.x - this.point.x;
      var ay = next.point.y - this.point.y;
      var bx = prev.point.x - this.point.x;
      var by = prev.point.y - this.point.y;
      var y = ax * by - ay * bx;
      var x = ax * bx + ay * by;
      return Math_0.atan2(y, x);
    }
  });
  Object.defineProperty(Node.prototype, 'basinAngle', {
    get: function () {
      var tmp$, tmp$_0;
      tmp$_0 = (tmp$ = this.next) != null ? tmp$.next : null;
      if (tmp$_0 == null) {
        throw IllegalStateException_init('Not enough vertices');
      }
      var nextNext = tmp$_0;
      var y = this.point.y - nextNext.point.y;
      var x = this.point.x - nextNext.point.x;
      return Math_0.atan2(y, x);
    }
  });
  Node.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Node',
    interfaces: []
  };
  function EdgeContext() {
    this.pointsToEdgeLists = HashMap_init();
  }
  EdgeContext.prototype.getPointEdgeList_r62tv1$ = function (point) {
    var $receiver = this.pointsToEdgeLists;
    var tmp$;
    var value = $receiver.get_11rb$(point);
    if (value == null) {
      var answer = ArrayList_init_0();
      $receiver.put_xwzc9p$(point, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    return tmp$;
  };
  EdgeContext.prototype.createEdge_g6xq6k$ = function (p1, p2) {
    return new Edge_0(p1, p2, this);
  };
  EdgeContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EdgeContext',
    interfaces: []
  };
  function Sweep(context) {
    Sweep$Companion_getInstance();
    this.context_0 = context;
  }
  Object.defineProperty(Sweep.prototype, 'edgeContext', {
    get: function () {
      return this.context_0.edgeContext;
    }
  });
  Sweep.prototype.triangulate = function () {
    this.context_0.initTriangulation();
    this.context_0.createAdvancingFront();
    this.sweepPoints();
    this.finalizationPolygon();
  };
  Sweep.prototype.sweepPoints = function () {
    var tmp$, tmp$_0;
    tmp$ = this.context_0.points.size;
    for (var i = 1; i < tmp$; i++) {
      var point = this.context_0.points.get_za3lpa$(i);
      var node = this.pointEvent_r62tv1$(point);
      var edgeList = this.edgeContext.getPointEdgeList_r62tv1$(point);
      tmp$_0 = edgeList.size;
      for (var j = 0; j < tmp$_0; j++) {
        this.edgeEventByEdge_mxx2yn$(edgeList.get_za3lpa$(j), node);
      }
    }
  };
  Sweep.prototype.finalizationPolygon = function () {
    var next = ensureNotNull(this.context_0.front.head.next);
    var t = ensureNotNull(next.triangle);
    var p = next.point;
    while (!t.getConstrainedEdgeCW_r62tv1$(p))
      t = ensureNotNull(t.neighborCCW_r62tv1$(p));
    this.context_0.meshClean_aetm19$(t);
  };
  Sweep.prototype.pointEvent_r62tv1$ = function (point) {
    var node = ensureNotNull(this.context_0.locateNode_r62tv1$(point));
    var new_node = this.newFrontTriangle_qzygyh$(point, node);
    if (point.x <= node.point.x + Constants_getInstance().EPSILON)
      this.fill_mjntug$(node);
    this.fillAdvancingFront_mjntug$(new_node);
    return new_node;
  };
  Sweep.prototype.edgeEventByEdge_mxx2yn$ = function (edge, node) {
    var edge_event = this.context_0.edge_event;
    edge_event.constrained_edge = edge;
    edge_event.right = edge.p.x > edge.q.x;
    var triangle = ensureNotNull(node.triangle);
    if (triangle.isEdgeSide_g6xq6k$(edge.p, edge.q))
      return;
    this.fillEdgeEvent_mxx2yn$(edge, node);
    this.edgeEventByPoints_dzhhlx$(edge.p, edge.q, triangle, edge.q);
  };
  Sweep.prototype.edgeEventByPoints_dzhhlx$ = function (ep, eq, triangle, point) {
    if (triangle.isEdgeSide_g6xq6k$(ep, eq))
      return;
    var p1 = triangle.pointCCW_r62tv1$(point);
    var o1 = Orientation$Companion_getInstance().orient2d_immp3h$(eq, p1, ep);
    if (o1 === Orientation$COLLINEAR_getInstance())
      throw Error_init('Sweep.edgeEvent: Collinear not supported!');
    var p2 = triangle.pointCW_r62tv1$(point);
    var o2 = Orientation$Companion_getInstance().orient2d_immp3h$(eq, p2, ep);
    if (o2 === Orientation$COLLINEAR_getInstance())
      throw Error_init('Sweep.edgeEvent: Collinear not supported!');
    if (o1 === o2) {
      this.edgeEventByPoints_dzhhlx$(ep, eq, o1 === Orientation$CW_getInstance() ? ensureNotNull(triangle.neighborCCW_r62tv1$(point)) : ensureNotNull(triangle.neighborCW_r62tv1$(point)), point);
    }
     else {
      this.flipEdgeEvent_dzhhlx$(ep, eq, triangle, point);
    }
  };
  Sweep.prototype.newFrontTriangle_qzygyh$ = function (point, node) {
    var triangle = new Triangle(point, node.point, ensureNotNull(node.next).point, this.edgeContext);
    triangle.markNeighborTriangle_4n3hlq$(ensureNotNull(node.triangle));
    this.context_0.addToSet_4n3hlq$(triangle);
    var new_node = new Node(point);
    new_node.next = node.next;
    new_node.prev = node;
    ensureNotNull(node.next).prev = new_node;
    node.next = new_node;
    if (!this.legalize_4n3hlq$(triangle))
      this.context_0.mapTriangleToNodes_4n3hlq$(triangle);
    return new_node;
  };
  Sweep.prototype.fill_mjntug$ = function (node) {
    var triangle = new Triangle(ensureNotNull(node.prev).point, node.point, ensureNotNull(node.next).point, this.edgeContext);
    triangle.markNeighborTriangle_4n3hlq$(ensureNotNull(ensureNotNull(node.prev).triangle));
    triangle.markNeighborTriangle_4n3hlq$(ensureNotNull(node.triangle));
    this.context_0.addToSet_4n3hlq$(triangle);
    ensureNotNull(node.prev).next = node.next;
    ensureNotNull(node.next).prev = node.prev;
    if (!this.legalize_4n3hlq$(triangle)) {
      this.context_0.mapTriangleToNodes_4n3hlq$(triangle);
    }
    this.context_0.removeNode_mjntug$(node);
  };
  Sweep.prototype.fillAdvancingFront_mjntug$ = function (n) {
    var node;
    var angle;
    node = ensureNotNull(n.next);
    while (node.next != null) {
      angle = node.holeAngle;
      if (angle > Constants_getInstance().PI_2 || angle < -Constants_getInstance().PI_2)
        break;
      this.fill_mjntug$(node);
      node = ensureNotNull(node.next);
    }
    node = ensureNotNull(n.prev);
    while (node.prev != null) {
      angle = node.holeAngle;
      if (angle > Constants_getInstance().PI_2 || angle < -Constants_getInstance().PI_2)
        break;
      this.fill_mjntug$(node);
      node = ensureNotNull(node.prev);
    }
    if (n.next != null && ensureNotNull(n.next).next != null) {
      angle = n.basinAngle;
      if (angle < Constants_getInstance().PI_3div4)
        this.fillBasin_mjntug$(n);
    }
  };
  Sweep.prototype.legalize_4n3hlq$ = function (t) {
    var tmp$;
    for (var i = 0; i < 3; i++) {
      if (t.delaunay_edge[i])
        continue;
      tmp$ = t.neighbors[i];
      if (tmp$ == null) {
        continue;
      }
      var ot = tmp$;
      var p = t.points[i];
      var op = ot.oppositePoint_s5033v$(t, p);
      var oi = ot.index_r62tv1$(op);
      if (ot.constrained_edge[oi] || ot.delaunay_edge[oi]) {
        t.constrained_edge[i] = ot.constrained_edge[oi];
        continue;
      }
      if (Triangle$Companion_getInstance().insideIncircle_p5mpkc$(p, t.pointCCW_r62tv1$(p), t.pointCW_r62tv1$(p), op)) {
        t.delaunay_edge[i] = true;
        ot.delaunay_edge[oi] = true;
        Triangle$Companion_getInstance().rotateTrianglePair_samruc$(t, p, ot, op);
        var not_legalized;
        not_legalized = !this.legalize_4n3hlq$(t);
        if (not_legalized)
          this.context_0.mapTriangleToNodes_4n3hlq$(t);
        not_legalized = !this.legalize_4n3hlq$(ot);
        if (not_legalized)
          this.context_0.mapTriangleToNodes_4n3hlq$(ot);
        t.delaunay_edge[i] = false;
        ot.delaunay_edge[oi] = false;
        return true;
      }
    }
    return false;
  };
  Sweep.prototype.fillBasin_mjntug$ = function (node) {
    var context = this.context_0;
    var basin = context.basin;
    basin.left_node = Orientation$Companion_getInstance().orient2d_immp3h$(node.point, ensureNotNull(node.next).point, ensureNotNull(ensureNotNull(node.next).next).point) === Orientation$CCW_getInstance() ? ensureNotNull(node.next).next : node.next;
    basin.bottom_node = basin.left_node;
    while (ensureNotNull(basin.bottom_node).next != null && ensureNotNull(basin.bottom_node).point.y >= ensureNotNull(ensureNotNull(basin.bottom_node).next).point.y) {
      basin.bottom_node = ensureNotNull(basin.bottom_node).next;
    }
    if (equals(basin.bottom_node, basin.left_node))
      return;
    basin.right_node = basin.bottom_node;
    while (ensureNotNull(basin.right_node).next != null && ensureNotNull(basin.right_node).point.y < ensureNotNull(ensureNotNull(basin.right_node).next).point.y) {
      basin.right_node = ensureNotNull(basin.right_node).next;
    }
    if (equals(basin.right_node, basin.bottom_node))
      return;
    basin.width = ensureNotNull(basin.right_node).point.x - ensureNotNull(basin.left_node).point.x;
    basin.left_highest = ensureNotNull(basin.left_node).point.y > ensureNotNull(basin.right_node).point.y;
    this.fillBasinReq_mjntug$(ensureNotNull(basin.bottom_node));
  };
  Sweep.prototype.fillBasinReq_mjntug$ = function (node) {
    var node_0 = node;
    if (this.isShallow_mjntug$(node_0))
      return;
    this.fill_mjntug$(node_0);
    if (equals(node_0.prev, this.context_0.basin.left_node) && equals(node_0.next, this.context_0.basin.right_node)) {
      return;
    }
     else if (equals(node_0.prev, this.context_0.basin.left_node)) {
      if (Orientation$Companion_getInstance().orient2d_immp3h$(node_0.point, ensureNotNull(node_0.next).point, ensureNotNull(ensureNotNull(node_0.next).next).point) === Orientation$CW_getInstance())
        return;
      node_0 = ensureNotNull(node_0.next);
    }
     else if (equals(node_0.next, this.context_0.basin.right_node)) {
      if (Orientation$Companion_getInstance().orient2d_immp3h$(node_0.point, ensureNotNull(node_0.prev).point, ensureNotNull(ensureNotNull(node_0.prev).prev).point) === Orientation$CCW_getInstance())
        return;
      node_0 = ensureNotNull(node_0.prev);
    }
     else {
      node_0 = ensureNotNull(node_0.prev).point.y < ensureNotNull(node_0.next).point.y ? ensureNotNull(node_0.prev) : ensureNotNull(node_0.next);
    }
    this.fillBasinReq_mjntug$(node_0);
  };
  Sweep.prototype.isShallow_mjntug$ = function (node) {
    var tmp$;
    if (this.context_0.basin.left_highest) {
      tmp$ = ensureNotNull(this.context_0.basin.left_node).point.y - node.point.y;
    }
     else {
      tmp$ = ensureNotNull(this.context_0.basin.right_node).point.y - node.point.y;
    }
    var height = tmp$;
    return this.context_0.basin.width > height;
  };
  Sweep.prototype.fillEdgeEvent_mxx2yn$ = function (edge, node) {
    if (this.context_0.edge_event.right) {
      this.fillRightAboveEdgeEvent_mxx2yn$(edge, node);
    }
     else {
      this.fillLeftAboveEdgeEvent_mxx2yn$(edge, node);
    }
  };
  Sweep.prototype.fillRightAboveEdgeEvent_mxx2yn$ = function (edge, node) {
    var node_0 = node;
    while (ensureNotNull(node_0.next).point.x < edge.p.x) {
      if (Orientation$Companion_getInstance().orient2d_immp3h$(edge.q, ensureNotNull(node_0.next).point, edge.p) === Orientation$CCW_getInstance()) {
        this.fillRightBelowEdgeEvent_mxx2yn$(edge, node_0);
      }
       else {
        node_0 = ensureNotNull(node_0.next);
      }
    }
  };
  Sweep.prototype.fillRightBelowEdgeEvent_mxx2yn$ = function (edge, node) {
    if (node.point.x >= edge.p.x)
      return;
    if (Orientation$Companion_getInstance().orient2d_immp3h$(node.point, ensureNotNull(node.next).point, ensureNotNull(ensureNotNull(node.next).next).point) === Orientation$CCW_getInstance()) {
      this.fillRightConcaveEdgeEvent_mxx2yn$(edge, node);
    }
     else {
      this.fillRightConvexEdgeEvent_mxx2yn$(edge, node);
      this.fillRightBelowEdgeEvent_mxx2yn$(edge, node);
    }
  };
  Sweep.prototype.fillRightConcaveEdgeEvent_mxx2yn$ = function (edge, node) {
    this.fill_mjntug$(ensureNotNull(node.next));
    if (!equals(ensureNotNull(node.next).point, edge.p)) {
      if (Orientation$Companion_getInstance().orient2d_immp3h$(edge.q, ensureNotNull(node.next).point, edge.p) === Orientation$CCW_getInstance()) {
        if (Orientation$Companion_getInstance().orient2d_immp3h$(node.point, ensureNotNull(node.next).point, ensureNotNull(ensureNotNull(node.next).next).point) === Orientation$CCW_getInstance()) {
          this.fillRightConcaveEdgeEvent_mxx2yn$(edge, node);
        }
      }
    }
  };
  Sweep.prototype.fillRightConvexEdgeEvent_mxx2yn$ = function (edge, node) {
    if (Orientation$Companion_getInstance().orient2d_immp3h$(ensureNotNull(node.next).point, ensureNotNull(ensureNotNull(node.next).next).point, ensureNotNull(ensureNotNull(ensureNotNull(node.next).next).next).point) === Orientation$CCW_getInstance()) {
      this.fillRightConcaveEdgeEvent_mxx2yn$(edge, ensureNotNull(node.next));
    }
     else {
      if (Orientation$Companion_getInstance().orient2d_immp3h$(edge.q, ensureNotNull(ensureNotNull(node.next).next).point, edge.p) === Orientation$CCW_getInstance()) {
        this.fillRightConvexEdgeEvent_mxx2yn$(edge, ensureNotNull(node.next));
      }
    }
  };
  Sweep.prototype.fillLeftAboveEdgeEvent_mxx2yn$ = function (edge, node) {
    var node_0 = node;
    while (ensureNotNull(node_0.prev).point.x > edge.p.x) {
      if (Orientation$Companion_getInstance().orient2d_immp3h$(edge.q, ensureNotNull(node_0.prev).point, edge.p) === Orientation$CW_getInstance()) {
        this.fillLeftBelowEdgeEvent_mxx2yn$(edge, node_0);
      }
       else {
        node_0 = ensureNotNull(node_0.prev);
      }
    }
  };
  Sweep.prototype.fillLeftBelowEdgeEvent_mxx2yn$ = function (edge, node) {
    if (node.point.x > edge.p.x) {
      if (Orientation$Companion_getInstance().orient2d_immp3h$(node.point, ensureNotNull(node.prev).point, ensureNotNull(ensureNotNull(node.prev).prev).point) === Orientation$CW_getInstance()) {
        this.fillLeftConcaveEdgeEvent_mxx2yn$(edge, node);
      }
       else {
        this.fillLeftConvexEdgeEvent_mxx2yn$(edge, node);
        this.fillLeftBelowEdgeEvent_mxx2yn$(edge, node);
      }
    }
  };
  Sweep.prototype.fillLeftConvexEdgeEvent_mxx2yn$ = function (edge, node) {
    if (Orientation$Companion_getInstance().orient2d_immp3h$(ensureNotNull(node.prev).point, ensureNotNull(ensureNotNull(node.prev).prev).point, ensureNotNull(ensureNotNull(ensureNotNull(node.prev).prev).prev).point) === Orientation$CW_getInstance()) {
      this.fillLeftConcaveEdgeEvent_mxx2yn$(edge, ensureNotNull(node.prev));
    }
     else {
      if (Orientation$Companion_getInstance().orient2d_immp3h$(edge.q, ensureNotNull(ensureNotNull(node.prev).prev).point, edge.p) === Orientation$CW_getInstance()) {
        this.fillLeftConvexEdgeEvent_mxx2yn$(edge, ensureNotNull(node.prev));
      }
    }
  };
  Sweep.prototype.fillLeftConcaveEdgeEvent_mxx2yn$ = function (edge, node) {
    this.fill_mjntug$(ensureNotNull(node.prev));
    if (!equals(ensureNotNull(node.prev).point, edge.p)) {
      if (Orientation$Companion_getInstance().orient2d_immp3h$(edge.q, ensureNotNull(node.prev).point, edge.p) === Orientation$CW_getInstance()) {
        if (Orientation$Companion_getInstance().orient2d_immp3h$(node.point, ensureNotNull(node.prev).point, ensureNotNull(ensureNotNull(node.prev).prev).point) === Orientation$CW_getInstance()) {
          this.fillLeftConcaveEdgeEvent_mxx2yn$(edge, node);
        }
      }
    }
  };
  Sweep.prototype.flipEdgeEvent_dzhhlx$ = function (ep, eq, t, p) {
    var tmp$;
    var t_0 = t;
    tmp$ = t_0.neighborAcross_r62tv1$(p);
    if (tmp$ == null) {
      throw Error_init('[BUG:FIXME] FLIP failed due to missing triangle!');
    }
    var ot = tmp$;
    var op = ot.oppositePoint_s5033v$(t_0, p);
    if (Triangle$Companion_getInstance().inScanArea_p5mpkc$(p, t_0.pointCCW_r62tv1$(p), t_0.pointCW_r62tv1$(p), op)) {
      Triangle$Companion_getInstance().rotateTrianglePair_samruc$(t_0, p, ot, op);
      this.context_0.mapTriangleToNodes_4n3hlq$(t_0);
      this.context_0.mapTriangleToNodes_4n3hlq$(ot);
      if (equals(p, eq) && equals(op, ep)) {
        if (equals(eq, ensureNotNull(this.context_0.edge_event.constrained_edge).q) && equals(ep, ensureNotNull(this.context_0.edge_event.constrained_edge).p)) {
          t_0.markConstrainedEdgeByPoints_g6xq6k$(ep, eq);
          ot.markConstrainedEdgeByPoints_g6xq6k$(ep, eq);
          this.legalize_4n3hlq$(t_0);
          this.legalize_4n3hlq$(ot);
        }
      }
       else {
        var o = Orientation$Companion_getInstance().orient2d_immp3h$(eq, op, ep);
        t_0 = this.nextFlipTriangle_add64c$(o, t_0, ot, p, op);
        this.flipEdgeEvent_dzhhlx$(ep, eq, t_0, p);
      }
    }
     else {
      var newP = Sweep$Companion_getInstance().nextFlipPoint_dzhhlx$(ep, eq, ot, op);
      this.flipScanEdgeEvent_m0ko9$(ep, eq, t_0, ot, newP);
      this.edgeEventByPoints_dzhhlx$(ep, eq, t_0, p);
    }
  };
  Sweep.prototype.nextFlipTriangle_add64c$ = function (o, t, ot, p, op) {
    if (o === Orientation$CCW_getInstance()) {
      ot.delaunay_edge[ot.edgeIndex_g6xq6k$(p, op)] = true;
      this.legalize_4n3hlq$(ot);
      ot.clearDelunayEdges();
      return t;
    }
     else {
      t.delaunay_edge[t.edgeIndex_g6xq6k$(p, op)] = true;
      this.legalize_4n3hlq$(t);
      t.clearDelunayEdges();
      return ot;
    }
  };
  function Sweep$Companion() {
    Sweep$Companion_instance = this;
  }
  Sweep$Companion.prototype.nextFlipPoint_dzhhlx$ = function (ep, eq, ot, op) {
    var tmp$;
    switch (Orientation$Companion_getInstance().orient2d_immp3h$(eq, op, ep).name) {
      case 'CW':
        tmp$ = ot.pointCCW_r62tv1$(op);
        break;
      case 'CCW':
        tmp$ = ot.pointCW_r62tv1$(op);
        break;
      default:throw Error_init('[Unsupported] Sweep.NextFlipPoint: opposing point on constrained edge!');
    }
    return tmp$;
  };
  Sweep$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Sweep$Companion_instance = null;
  function Sweep$Companion_getInstance() {
    if (Sweep$Companion_instance === null) {
      new Sweep$Companion();
    }
    return Sweep$Companion_instance;
  }
  Sweep.prototype.flipScanEdgeEvent_m0ko9$ = function (ep, eq, flip_triangle, t, p) {
    var tmp$;
    tmp$ = t.neighborAcross_r62tv1$(p);
    if (tmp$ == null) {
      throw Error_init('[BUG:FIXME] FLIP failed due to missing triangle');
    }
    var ot = tmp$;
    var op = ot.oppositePoint_s5033v$(t, p);
    if (Triangle$Companion_getInstance().inScanArea_p5mpkc$(eq, flip_triangle.pointCCW_r62tv1$(eq), flip_triangle.pointCW_r62tv1$(eq), op)) {
      this.flipEdgeEvent_dzhhlx$(eq, op, ot, op);
    }
     else {
      var newP = Sweep$Companion_getInstance().nextFlipPoint_dzhhlx$(ep, eq, ot, op);
      this.flipScanEdgeEvent_m0ko9$(ep, eq, flip_triangle, ot, newP);
    }
  };
  Sweep.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Sweep',
    interfaces: []
  };
  function SweepContext() {
    this.triangles = ArrayList_init_0();
    this.points = ArrayList_init_0();
    this.edge_list = ArrayList_init_0();
    this.edgeContext = new EdgeContext();
    this.set = LinkedHashSet_init();
    this.front_6puofu$_0 = this.front_6puofu$_0;
    this.head_rosgyj$_0 = this.head_rosgyj$_0;
    this.tail_ri9bnv$_0 = this.tail_ri9bnv$_0;
    this.af_head_yxpno5$_0 = this.af_head_yxpno5$_0;
    this.af_middle_jdmqww$_0 = this.af_middle_jdmqww$_0;
    this.af_tail_z48syt$_0 = this.af_tail_z48syt$_0;
    this.basin = new Basin();
    this.edge_event = new EdgeEvent();
  }
  Object.defineProperty(SweepContext.prototype, 'front', {
    get: function () {
      if (this.front_6puofu$_0 == null)
        return throwUPAE('front');
      return this.front_6puofu$_0;
    },
    set: function (front) {
      this.front_6puofu$_0 = front;
    }
  });
  Object.defineProperty(SweepContext.prototype, 'head', {
    get: function () {
      if (this.head_rosgyj$_0 == null)
        return throwUPAE('head');
      return this.head_rosgyj$_0;
    },
    set: function (head) {
      this.head_rosgyj$_0 = head;
    }
  });
  Object.defineProperty(SweepContext.prototype, 'tail', {
    get: function () {
      if (this.tail_ri9bnv$_0 == null)
        return throwUPAE('tail');
      return this.tail_ri9bnv$_0;
    },
    set: function (tail) {
      this.tail_ri9bnv$_0 = tail;
    }
  });
  Object.defineProperty(SweepContext.prototype, 'af_head', {
    get: function () {
      if (this.af_head_yxpno5$_0 == null)
        return throwUPAE('af_head');
      return this.af_head_yxpno5$_0;
    },
    set: function (af_head) {
      this.af_head_yxpno5$_0 = af_head;
    }
  });
  Object.defineProperty(SweepContext.prototype, 'af_middle', {
    get: function () {
      if (this.af_middle_jdmqww$_0 == null)
        return throwUPAE('af_middle');
      return this.af_middle_jdmqww$_0;
    },
    set: function (af_middle) {
      this.af_middle_jdmqww$_0 = af_middle;
    }
  });
  Object.defineProperty(SweepContext.prototype, 'af_tail', {
    get: function () {
      if (this.af_tail_z48syt$_0 == null)
        return throwUPAE('af_tail');
      return this.af_tail_z48syt$_0;
    },
    set: function (af_tail) {
      this.af_tail_z48syt$_0 = af_tail;
    }
  });
  SweepContext.prototype.addPoints_0 = function (points) {
    var tmp$;
    tmp$ = points.iterator();
    while (tmp$.hasNext()) {
      var point = tmp$.next();
      this.points.add_11rb$(point);
    }
  };
  SweepContext.prototype.addPolyline_d0ps2m$ = function (polyline) {
    this.initEdges_0(polyline);
    this.addPoints_0(polyline);
  };
  SweepContext.prototype.addHole_d0ps2m$ = function (polyline) {
    this.addPolyline_d0ps2m$(polyline);
  };
  SweepContext.prototype.initEdges_0 = function (polyline) {
    var tmp$;
    tmp$ = polyline.size;
    for (var n = 0; n < tmp$; n++) {
      this.edge_list.add_11rb$(new Edge_0(polyline.get_za3lpa$(n), polyline.get_za3lpa$((n + 1 | 0) % polyline.size), this.edgeContext));
    }
  };
  SweepContext.prototype.addToSet_4n3hlq$ = function (triangle) {
    this.set.add_11rb$(triangle);
  };
  SweepContext.prototype.initTriangulation = function () {
    var tmp$;
    var xmin = this.points.get_za3lpa$(0).x;
    var xmax = this.points.get_za3lpa$(0).x;
    var ymin = this.points.get_za3lpa$(0).y;
    var ymax = this.points.get_za3lpa$(0).y;
    tmp$ = this.points.iterator();
    while (tmp$.hasNext()) {
      var p = tmp$.next();
      if (p.x > xmax)
        xmax = p.x;
      if (p.x < xmin)
        xmin = p.x;
      if (p.y > ymax)
        ymax = p.y;
      if (p.y < ymin)
        ymin = p.y;
    }
    var dx = Constants_getInstance().kAlpha * (xmax - xmin);
    var dy = Constants_getInstance().kAlpha * (ymax - ymin);
    var x = xmax + dx;
    var y = ymin - dy;
    this.head = new IVector2(numberToDouble(x), numberToDouble(y));
    var x_0 = xmin - dy;
    var y_0 = ymin - dy;
    this.tail = new IVector2(numberToDouble(x_0), numberToDouble(y_0));
    Vector2$Companion_getInstance().sortPoints_4timje$(this.points);
  };
  SweepContext.prototype.locateNode_r62tv1$ = function (point) {
    return this.front.locateNode_14dthe$(point.x);
  };
  SweepContext.prototype.createAdvancingFront = function () {
    var triangle = new Triangle(this.points.get_za3lpa$(0), this.tail, this.head, this.edgeContext);
    this.addToSet_4n3hlq$(triangle);
    var head = new Node(triangle.points[1], triangle);
    var middle = new Node(triangle.points[0], triangle);
    var tail = new Node(triangle.points[2]);
    this.front = new AdvancingFront(head, tail);
    head.next = middle;
    middle.next = tail;
    middle.prev = head;
    tail.prev = middle;
  };
  SweepContext.prototype.removeNode_mjntug$ = function (node) {
  };
  SweepContext.prototype.mapTriangleToNodes_4n3hlq$ = function (triangle) {
    for (var n = 0; n < 3; n++) {
      if (triangle.neighbors[n] == null) {
        var neighbor = this.front.locatePoint_r62tv1$(triangle.pointCW_r62tv1$(triangle.points[n]));
        if (neighbor != null)
          neighbor.triangle = triangle;
      }
    }
  };
  SweepContext.prototype.removeFromMap_4n3hlq$ = function (triangle) {
    this.set.remove_11rb$(triangle);
  };
  SweepContext.prototype.meshClean_aetm19$ = function (triangle, level) {
    if (level === void 0)
      level = 0;
    if (triangle == null || triangle.interior)
      return;
    triangle.interior = true;
    this.triangles.add_11rb$(triangle);
    for (var n = 0; n < 3; n++) {
      if (!triangle.constrained_edge[n]) {
        this.meshClean_aetm19$(triangle.neighbors[n], level + 1 | 0);
      }
    }
  };
  SweepContext.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SweepContext',
    interfaces: []
  };
  function SweepContext_init(polyline, $this) {
    $this = $this || Object.create(SweepContext.prototype);
    SweepContext.call($this);
    $this.addPolyline_d0ps2m$(polyline);
    return $this;
  }
  function Interpolable() {
  }
  Interpolable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Interpolable',
    interfaces: []
  };
  function interpolate(v0, v1, step) {
    return numberToInt(v0 * (1 - step) + v1 * step);
  }
  function interpolate_0(v0, v1, step) {
    return Kotlin.Long.fromNumber(v0.toNumber() * (1 - step) + v1.toNumber() * step);
  }
  function interpolate_1(v0, v1, step) {
    return v0 * (1 - step) + v1 * step;
  }
  function interpolateAny(min, max, ratio) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13;
    if (typeof min === 'number') {
      return (tmp$_1 = interpolate_4(ratio, typeof (tmp$ = min) === 'number' ? tmp$ : throwCCE(), typeof (tmp$_0 = max) === 'number' ? tmp$_0 : throwCCE())) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
    }
     else if (Kotlin.isType(min, Kotlin.Long)) {
      return (tmp$_4 = interpolate_5(ratio, Kotlin.isType(tmp$_2 = min, Kotlin.Long) ? tmp$_2 : throwCCE(), Kotlin.isType(tmp$_3 = max, Kotlin.Long) ? tmp$_3 : throwCCE())) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE();
    }
     else if (typeof min === 'number') {
      return (tmp$_7 = interpolate_2(ratio, typeof (tmp$_5 = min) === 'number' ? tmp$_5 : throwCCE(), typeof (tmp$_6 = max) === 'number' ? tmp$_6 : throwCCE())) == null || Kotlin.isType(tmp$_7, Any) ? tmp$_7 : throwCCE();
    }
     else if (typeof min === 'number') {
      return (tmp$_10 = interpolate_3(ratio, typeof (tmp$_8 = min) === 'number' ? tmp$_8 : throwCCE(), typeof (tmp$_9 = max) === 'number' ? tmp$_9 : throwCCE())) == null || Kotlin.isType(tmp$_10, Any) ? tmp$_10 : throwCCE();
    }
     else if (Kotlin.isType(min, Interpolable)) {
      return (tmp$_13 = (Kotlin.isType(tmp$_11 = min, Interpolable) ? tmp$_11 : throwCCE()).interpolateWith_e37ph5$(Kotlin.isType(tmp$_12 = max, Interpolable) ? tmp$_12 : throwCCE(), ratio)) == null || Kotlin.isType(tmp$_13, Any) ? tmp$_13 : throwCCE();
    }
     else
      throw IllegalArgumentException_init('Value is not interpolable');
  }
  function interpolate_2($receiver, l, r) {
    return l + (r - l) * $receiver;
  }
  function interpolate_3($receiver, l, r) {
    return l + (r - l) * $receiver;
  }
  function interpolate_4($receiver, l, r) {
    return numberToInt(l + (r - l | 0) * $receiver);
  }
  function interpolate_5($receiver, l, r) {
    return Kotlin.Long.fromNumber(l.toNumber() + r.subtract(l).toNumber() * $receiver);
  }
  function interpolate_6($receiver, l, r) {
    return l.interpolateWith_e37ph5$(r, $receiver);
  }
  function interpolate_7($receiver, l, r) {
    var tmp$;
    return l.interpolateWith_e37ph5$((tmp$ = r) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE(), $receiver);
  }
  function MutableInterpolable() {
  }
  MutableInterpolable.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'MutableInterpolable',
    interfaces: []
  };
  function Math_1() {
    Math_instance = this;
  }
  Math_1.prototype.round_14dthe$ = function (v) {
    return round(v);
  };
  Math_1.prototype.cos_14dthe$ = function (value) {
    return Math_0.cos(value);
  };
  Math_1.prototype.sin_14dthe$ = function (value) {
    return Math_0.sin(value);
  };
  Math_1.prototype.tan_14dthe$ = function (value) {
    return Math_0.tan(value);
  };
  Math_1.prototype.sqrt_14dthe$ = function (value) {
    return Math_0.sqrt(value);
  };
  Math_1.prototype.acos_14dthe$ = function (value) {
    return Math_0.acos(value);
  };
  Math_1.prototype.atan_14dthe$ = function (value) {
    return Math_0.atan(value);
  };
  Math_1.prototype.atan2_lu1900$ = function (y, x) {
    return Math_0.atan2(y, x);
  };
  Math_1.prototype.len_lu1900$ = function (a, b) {
    return Math_0.hypot(a, b);
  };
  Math_1.prototype.interpolate_224j3y$ = function (min, max, ratio) {
    return min + numberToInt((max - min | 0) * ratio) | 0;
  };
  Math_1.prototype.interpolate_qrehoo$ = function (min, max, ratio) {
    return min.add(Kotlin.Long.fromNumber(max.subtract(min).toNumber() * ratio));
  };
  Math_1.prototype.interpolate_10ukbb$ = function (min, max, ratio) {
    return min.interpolateWith_e37ph5$(max, ratio);
  };
  Math_1.prototype.interpolateAny_g28pcy$ = function (min, max, ratio) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
    if (typeof min === 'number') {
      tmp$_3 = this.interpolate_224j3y$(min, typeof (tmp$ = max) === 'number' ? tmp$ : throwCCE(), ratio);
    }
     else if (Kotlin.isType(min, Kotlin.Long)) {
      tmp$_3 = this.interpolate_qrehoo$(min, Kotlin.isType(tmp$_0 = max, Kotlin.Long) ? tmp$_0 : throwCCE(), ratio);
    }
     else if (typeof min === 'number') {
      tmp$_3 = this.interpolate_yvo9jy$(min, typeof (tmp$_1 = max) === 'number' ? tmp$_1 : throwCCE(), ratio);
    }
     else if (Kotlin.isType(min, MVector2)) {
      tmp$_3 = min.setToInterpolated_v05y7o$(min, Kotlin.isType(tmp$_2 = max, MVector2) ? tmp$_2 : throwCCE(), ratio);
    }
     else
      throw RuntimeException_init('Unsupported interpolate with ' + min);
    return tmp$_3;
  };
  Math_1.prototype.min_vux9f0$ = function (a, b) {
    return Math_0.min(a, b);
  };
  Math_1.prototype.max_vux9f0$ = function (a, b) {
    return Math_0.max(a, b);
  };
  Math_1.prototype.min_lu1900$ = function (a, b) {
    return Math_0.min(a, b);
  };
  Math_1.prototype.max_lu1900$ = function (a, b) {
    return Math_0.max(a, b);
  };
  Math_1.prototype.min_6y0v78$ = function (a, b, c, d) {
    return this.min_lu1900$(this.min_lu1900$(a, b), this.min_lu1900$(c, d));
  };
  Math_1.prototype.max_6y0v78$ = function (a, b, c, d) {
    return this.max_lu1900$(this.max_lu1900$(a, b), this.max_lu1900$(c, d));
  };
  Math_1.prototype.clamp_b9bd0d$ = function (v, min, max) {
    return v.compareTo_11rb$(min) < 0 ? min : v.compareTo_11rb$(max) > 0 ? max : v;
  };
  Math_1.prototype.clamp_qt1dr2$ = function (v, min, max) {
    return v < min ? min : v > max ? max : v;
  };
  Math_1.prototype.clamp_yvo9jy$ = function (value, min, max) {
    return value < min ? min : value > max ? max : value;
  };
  Math_1.prototype.clampSpecial_yvo9jy$ = function (value, min, max) {
    return max >= min ? this.clamp_yvo9jy$(value, min, max) : value;
  };
  Math_1.prototype.clamp_y2kzbl$ = function (value, min, max) {
    return value < min ? min : value > max ? max : value;
  };
  Math_1.prototype.clampInt_qt1dr2$ = function (value, min, max) {
    return value < min ? min : value > max ? max : value;
  };
  Math_1.prototype.clampf255_14dthe$ = function (v) {
    return v < 0.0 ? 0 : v > 1.0 ? 255 : numberToInt(v * 255);
  };
  Math_1.prototype.clampf01_14dthe$ = function (v) {
    return v < 0.0 ? 0.0 : v > 1.0 ? 1.0 : v;
  };
  Math_1.prototype.clampn255_za3lpa$ = function (v) {
    return v < -255 ? -255 : v > 255 ? 255 : v;
  };
  Math_1.prototype.clamp255_za3lpa$ = function (v) {
    return v < 0 ? 0 : v > 255 ? 255 : v;
  };
  Math_1.prototype.distance_lu1900$ = function (a, b) {
    var x = a - b;
    return Math_0.abs(x);
  };
  Math_1.prototype.distance_6y0v78$ = function (x1, y1, x2, y2) {
    return Math_getInstance().hypot_lu1900$(x1 - x2, y1 - y2);
  };
  Math_1.prototype.distance_tjonv8$ = function (x1, y1, x2, y2) {
    return Math_getInstance().hypot_lu1900$(x1 - x2 | 0, y1 - y2 | 0);
  };
  Math_1.prototype.distance_g6xq6k$ = function (a, b) {
    return this.distance_6y0v78$(a.x, a.y, b.x, b.y);
  };
  Math_1.prototype.distance_o87e54$ = function (a, b) {
    return this.distance_tjonv8$(a.x, a.y, b.x, b.y);
  };
  Math_1.prototype.smoothstep_yvo9jy$ = function (edge0, edge1, step) {
    var step2 = this.clamp_yvo9jy$((step - edge0) / (edge1 - edge0), 0.0, 1.0);
    return step2 * step2 * (3 - 2 * step2);
  };
  Math_1.prototype.interpolate_yvo9jy$ = function (v0, v1, step) {
    return v0 * (1 - step) + v1 * step;
  };
  Math_1.prototype.modUnsigned_lu1900$ = function (num, den) {
    var result = num % den;
    if (result < 0)
      result += den;
    return result;
  };
  Math_1.prototype.between_yvo9jy$ = function (value, min, max) {
    return value >= min && value <= max;
  };
  Math_1.prototype.convertRange_1lq62i$ = function (value, minSrc, maxSrc, minDst, maxDst) {
    return (value - minSrc) / (maxSrc - minSrc) * (maxDst - minDst) + minDst;
  };
  Math_1.prototype.sign_14dthe$ = function (x) {
    return x < 0 ? -1 : x > 0 ? 1 : 0;
  };
  Math_1.prototype.signNonZeroM1_14dthe$ = function (x) {
    return x <= 0 ? -1 : 1;
  };
  Math_1.prototype.signNonZeroP1_14dthe$ = function (x) {
    return x >= 0 ? 1 : -1;
  };
  Math_1.prototype.multiplyIntegerUnsigned_vux9f0$ = function (a, b) {
    return Kotlin.imul(a, b) | 0;
  };
  Math_1.prototype.multiplyIntegerSigned_vux9f0$ = function (a, b) {
    return Kotlin.imul(a, b) | 0;
  };
  Math_1.prototype.divideIntegerUnsigned_vux9f0$ = function (a, b) {
    return a / b | 0 | 0;
  };
  Math_1.prototype.divideIntegerSigned_vux9f0$ = function (a, b) {
    return a / b | 0 | 0;
  };
  Math_1.prototype.hypot_lu1900$ = function (x, y) {
    var x_0 = x * x + y * y;
    return Math_0.sqrt(x_0);
  };
  Math_1.prototype.hypotNoSqrt_lu1900$ = function (x, y) {
    return x * x + y * y;
  };
  Math_1.prototype.roundDecimalPlaces_12fank$ = function (value, places) {
    var placesFactor = Math_0.pow(10.0, places);
    return round(value * placesFactor) / placesFactor;
  };
  Math_1.prototype.isEquivalent_yvo9jy$ = function (a, b, epsilon) {
    if (epsilon === void 0)
      epsilon = 1.0E-4;
    return a - epsilon < b && a + epsilon > b;
  };
  Math_1.prototype.packUintFast_tjonv8$ = function (r, g, b, a) {
    return a << 24 | b << 16 | g << 8 | r << 0;
  };
  Math_1.prototype.pack4fUint_6y0v78$ = function (r, g, b, a) {
    return this.packUintFast_tjonv8$(this.clampf255_14dthe$(r), this.clampf255_14dthe$(g), this.clampf255_14dthe$(b), this.clampf255_14dthe$(a));
  };
  Math_1.prototype.log2_za3lpa$ = function (v) {
    return numberToInt(log(v, 2.0));
  };
  Math_1.prototype.log10_za3lpa$ = function (v) {
    return numberToInt(log(v, 10.0));
  };
  Math_1.prototype.distanceXY_6y0v78$ = function (x1, y1, x2, y2) {
    return this.hypot_lu1900$(x1 - x2, y1 - y2);
  };
  Math_1.prototype.distancePoint_g6xq6k$ = function (a, b) {
    return this.distanceXY_6y0v78$(a.x, a.y, b.x, b.y);
  };
  Math_1.prototype.abs_za3lpa$ = function (v) {
    return abs(v);
  };
  Math_1.prototype.abs_s8cxhz$ = function (v) {
    return abs_0(v);
  };
  Math_1.prototype.abs_mx4ult$ = function (v) {
    return Math_0.abs(v);
  };
  Math_1.prototype.abs_14dthe$ = function (v) {
    return Math_0.abs(v);
  };
  Math_1.prototype.handleCastInfinite_mx4ult$ = function (value) {
    return value < 0 ? -2147483648 : 2147483647;
  };
  Math_1.prototype.rintDouble_14dthe$ = function (value) {
    var twoToThe52 = Math_0.pow(2.0, 52);
    var sign = Math_0.sign(value);
    var rvalue = Math_0.abs(value);
    if (rvalue < twoToThe52)
      rvalue = twoToThe52 + rvalue - twoToThe52;
    return sign * rvalue;
  };
  Math_1.prototype.isAlmostZero_0 = function ($receiver) {
    return Math_0.abs($receiver) <= 1.0E-19;
  };
  Math_1.prototype.isNanOrInfinite_0 = function ($receiver) {
    return isNaN_0($receiver) || isInfinite($receiver);
  };
  Math_1.prototype.rint_mx4ult$ = function (value) {
    if (this.isNanOrInfinite_0(value))
      return this.handleCastInfinite_mx4ult$(value);
    return numberToInt(this.rintDouble_14dthe$(value));
  };
  Math_1.prototype.cast_mx4ult$ = function (value) {
    if (this.isNanOrInfinite_0(value))
      return this.handleCastInfinite_mx4ult$(value);
    return value < 0 ? numberToInt(Math_0.ceil(value)) : numberToInt(Math_0.floor(value));
  };
  Math_1.prototype.trunc_mx4ult$ = function (value) {
    if (this.isNanOrInfinite_0(value))
      return this.handleCastInfinite_mx4ult$(value);
    return value < 0 ? numberToInt(Math_0.ceil(value)) : numberToInt(Math_0.floor(value));
  };
  Math_1.prototype.round_mx4ult$ = function (value) {
    if (this.isNanOrInfinite_0(value))
      return this.handleCastInfinite_mx4ult$(value);
    return numberToInt(round(value));
  };
  Math_1.prototype.floor_mx4ult$ = function (value) {
    if (this.isNanOrInfinite_0(value))
      return this.handleCastInfinite_mx4ult$(value);
    return numberToInt(Math_0.floor(value));
  };
  Math_1.prototype.ceil_mx4ult$ = function (value) {
    if (this.isNanOrInfinite_0(value))
      return this.handleCastInfinite_mx4ult$(value);
    return numberToInt(Math_0.ceil(value));
  };
  Math_1.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Math',
    interfaces: []
  };
  var Math_instance = null;
  function Math_getInstance() {
    if (Math_instance === null) {
      new Math_1();
    }
    return Math_instance;
  }
  function Math2() {
    Math2_instance = this;
  }
  Math2.prototype.round_mx4ult$ = function (value) {
    return round(value);
  };
  Math2.prototype.floor_mx4ult$ = function (value) {
    return Math_0.floor(value);
  };
  Math2.prototype.ceil_mx4ult$ = function (value) {
    return Math_0.ceil(value);
  };
  Math2.prototype.round_14dthe$ = function (value) {
    return round(value);
  };
  Math2.prototype.floor_14dthe$ = function (value) {
    return Math_0.floor(value);
  };
  Math2.prototype.ceil_14dthe$ = function (value) {
    return Math_0.ceil(value);
  };
  Math2.prototype.abs_14dthe$ = function (a) {
    return a >= 0.0 ? a : -a;
  };
  Math2.prototype.abs_za3lpa$ = function (a) {
    return a >= 0 ? a : -a | 0;
  };
  Math2.prototype.min_lu1900$ = function (a, b) {
    return a < b ? a : b;
  };
  Math2.prototype.max_lu1900$ = function (a, b) {
    return a > b ? a : b;
  };
  Math2.prototype.min_vux9f0$ = function (a, b) {
    return a < b ? a : b;
  };
  Math2.prototype.max_vux9f0$ = function (a, b) {
    return a > b ? a : b;
  };
  Math2.prototype.pow_lu1900$ = function (a, b) {
    return Math_0.pow(a, b);
  };
  Math2.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Math2',
    interfaces: []
  };
  var Math2_instance = null;
  function Math2_getInstance() {
    if (Math2_instance === null) {
      new Math2();
    }
    return Math2_instance;
  }
  var pow = defineInlineFunction('korma-js.com.soywiz.korma.math.pow_z8e4lc$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var Math_0 = Math;
    return function (a, b) {
      var $receiver = numberToDouble(a);
      var x = numberToDouble(b);
      return Math_0.pow($receiver, x);
    };
  }));
  function log_0(a) {
    return log(a, math.E);
  }
  function FFT() {
    FFT_instance = this;
  }
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  FFT.prototype.run_o4ccxn$ = function (xRe, xIm, inverse) {
    if (inverse === void 0)
      inverse = false;
    throw new NotImplementedError_init();
  };
  FFT.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'FFT',
    interfaces: []
  };
  var FFT_instance = null;
  function FFT_getInstance() {
    if (FFT_instance === null) {
      new FFT();
    }
    return FFT_instance;
  }
  function MtRand(dummy) {
    MtRand$Companion_getInstance();
    this.p_0 = 624;
    this.state_0 = new Int32Array(624);
    this.maxValue_8sxzo4$_0 = -1;
  }
  function MtRand$Companion() {
    MtRand$Companion_instance = this;
    this.N_0 = 624;
    this.M_0 = 397;
  }
  MtRand$Companion.prototype.twiddle_0 = function (u, v) {
    return (u & -2147483648 | v & 2147483647) >>> 1 ^ ((v & 1) !== 0 ? -1727483681 : 0);
  };
  MtRand$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MtRand$Companion_instance = null;
  function MtRand$Companion_getInstance() {
    if (MtRand$Companion_instance === null) {
      new MtRand$Companion();
    }
    return MtRand$Companion_instance;
  }
  MtRand.prototype.seed_za3lpa$ = function (s) {
    this.state_0[0] = s;
    for (var i = 1; i < 624; i++) {
      this.state_0[i] = Math_getInstance().multiplyIntegerUnsigned_vux9f0$(1812433253, this.state_0[i - 1 | 0] ^ this.state_0[i - 1 | 0] >>> 30) + i | 0;
    }
    this.p_0 = 624;
    return this;
  };
  MtRand.prototype.genState_0 = function () {
    for (var i = 0; i < 227; i++) {
      this.state_0[i] = this.state_0[i + 397 | 0] ^ MtRand$Companion_getInstance().twiddle_0(this.state_0[i], this.state_0[i + 1 | 0]);
    }
    for (var i_0 = 227; i_0 < 623; i_0++) {
      this.state_0[i_0] = this.state_0[i_0 + 397 - 624 | 0] ^ MtRand$Companion_getInstance().twiddle_0(this.state_0[i_0], this.state_0[i_0 + 1 | 0]);
    }
    this.state_0[623] = this.state_0[396] ^ MtRand$Companion_getInstance().twiddle_0(this.state_0[623], this.state_0[0]);
    this.p_0 = 0;
  };
  MtRand.prototype.nextInt = function () {
    var tmp$;
    if (this.p_0 === 624)
      this.genState_0();
    var x = this.state_0[tmp$ = this.p_0, this.p_0 = tmp$ + 1 | 0, tmp$];
    x = x ^ x >>> 11;
    x = (x ^ x << 7) & -1658038656;
    x = (x ^ x << 15) & -272236544;
    return x ^ x >>> 18;
  };
  Object.defineProperty(MtRand.prototype, 'maxValue', {
    get: function () {
      return this.maxValue_8sxzo4$_0;
    }
  });
  MtRand.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MtRand',
    interfaces: [Rand]
  };
  function MtRand_init($this) {
    $this = $this || Object.create(MtRand.prototype);
    MtRand_init_0(Random.Companion.nextBits_za3lpa$(31), $this);
    return $this;
  }
  function MtRand_init_0(s, $this) {
    $this = $this || Object.create(MtRand.prototype);
    MtRand.call($this, false);
    $this.seed_za3lpa$(s);
    return $this;
  }
  function MtRand_init_1(s, $this) {
    $this = $this || Object.create(MtRand.prototype);
    MtRand.call($this, false);
    $this.seed_za3lpa$(s.toInt());
    return $this;
  }
  function Rand() {
    Rand$Companion_getInstance();
  }
  function Rand$Companion() {
    Rand$Companion_instance = this;
  }
  Rand$Companion.prototype.invoke = function () {
    return MtRand_init();
  };
  Rand$Companion.prototype.invoke_za3lpa$ = function (seed) {
    return MtRand_init_0(seed);
  };
  Rand$Companion.prototype.invoke_s8cxhz$ = function (seed) {
    return MtRand_init_1(seed);
  };
  Rand$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Rand$Companion_instance = null;
  function Rand$Companion_getInstance() {
    if (Rand$Companion_instance === null) {
      new Rand$Companion();
    }
    return Rand$Companion_instance;
  }
  Rand.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Rand',
    interfaces: []
  };
  function nextInt($receiver, max) {
    return ($receiver.nextInt() & 2147483647) % max;
  }
  function nextLong($receiver) {
    var low = $receiver.nextInt();
    var high = $receiver.nextInt();
    return Kotlin.Long.fromInt(high).shiftLeft(32).or(Kotlin.Long.fromInt(low).and(L4294967295));
  }
  function nextDouble($receiver) {
    var v = $receiver.nextInt() & 2147483647;
    return v / 2147483647;
  }
  function getCyclic($receiver, index) {
    return $receiver.get_za3lpa$(index % $receiver.size);
  }
  function random($receiver, random) {
    if (random === void 0)
      random = Rand$Companion_getInstance().invoke();
    if ($receiver.isEmpty())
      throw IllegalArgumentException_init('Empty list');
    return $receiver.get_za3lpa$(nextInt(random, $receiver.size));
  }
  function get_3($receiver, min, max) {
    return min + nextDouble($receiver) * (max - min);
  }
  function get_4($receiver, min, max) {
    return min + nextInt($receiver, max - min | 0) | 0;
  }
  function get_5($receiver, range) {
    return range.start + nextInt($receiver, range.endInclusive - range.start + 1 | 0) | 0;
  }
  function get_6($receiver, range) {
    return range.start.add(nextLong($receiver).modulo(range.endInclusive.subtract(range.start).add(Kotlin.Long.fromInt(1))));
  }
  function get_7($receiver, list) {
    return list.get_za3lpa$(get_5($receiver, get_indices(list)));
  }
  function get_8($receiver, rectangle) {
    var x = get_3($receiver, rectangle.left, rectangle.right);
    var y = get_3($receiver, rectangle.top, rectangle.bottom);
    return new IVector2(numberToDouble(x), numberToDouble(y));
  }
  function get_9($receiver, l, r) {
    return interpolate_6(nextInt($receiver, 65537) / 65536, l, r);
  }
  function get_10($receiver, range) {
    return interpolateAny(range.start, range.endInclusive, nextInt($receiver, 65537) / 65536);
  }
  function get_11($receiver, weighted) {
    var tmp$;
    var totalWeight = sum(weighted.values);
    var found = get_4($receiver, 0, totalWeight + 1 | 0);
    var offset = 0;
    tmp$ = weighted.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.key;
      var len = tmp$_0.value;
      if (offset <= found && found < (offset + len | 0))
        return key;
      offset = offset + len | 0;
    }
    return first_0(weighted.keys);
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korma = package$soywiz.korma || (package$soywiz.korma = {});
  package$korma.get_320v0r$ = get_0;
  package$korma.set_wfoafl$ = set;
  package$korma.tryGet_320v0r$ = tryGet;
  package$korma.trySet_wfoafl$ = trySet;
  package$korma.get_5s9zym$ = get_1;
  package$korma.set_obj0mw$ = set_0;
  package$korma.tryGet_5s9zym$ = tryGet_0;
  package$korma.trySet_obj0mw$ = trySet_0;
  Object.defineProperty(package$korma, 'KormaStr', {
    get: KormaStr_getInstance
  });
  $$importsForInline$$['korma-js'] = _;
  package$korma.KormaStr_q0xw7f$ = KormaStr_0;
  package$korma.IMatrix2d = IMatrix2d;
  package$korma.Matrix2d = Matrix2d;
  package$korma.IMatrix2d_9wz194$ = IMatrix2d_0;
  Object.defineProperty(Matrix2d$Type, 'IDENTITY', {
    get: Matrix2d$Type$IDENTITY_getInstance
  });
  Object.defineProperty(Matrix2d$Type, 'TRANSLATE', {
    get: Matrix2d$Type$TRANSLATE_getInstance
  });
  Object.defineProperty(Matrix2d$Type, 'SCALE', {
    get: Matrix2d$Type$SCALE_getInstance
  });
  Object.defineProperty(Matrix2d$Type, 'SCALE_TRANSLATE', {
    get: Matrix2d$Type$SCALE_TRANSLATE_getInstance
  });
  Object.defineProperty(Matrix2d$Type, 'COMPLEX', {
    get: Matrix2d$Type$COMPLEX_getInstance
  });
  Matrix2d.Type = Matrix2d$Type;
  Object.defineProperty(Matrix2d$Immutable, 'Companion', {
    get: Matrix2d$Immutable$Companion_getInstance
  });
  Matrix2d.Immutable = Matrix2d$Immutable;
  Matrix2d.Transform = Matrix2d$Transform;
  Matrix2d.Computed_init_yx07kl$ = Matrix2d$Matrix2d$Computed_init;
  Matrix2d.Computed_init_i579cd$ = Matrix2d$Matrix2d$Computed_init_0;
  Matrix2d.Computed = Matrix2d$Computed;
  package$korma.Matrix2d_9wz194$ = Matrix2d_0;
  package$korma.Matrix2d_yx07kl$ = Matrix2d_1;
  package$korma.transformX_ceyp3v$ = transformX;
  package$korma.transformY_ceyp3v$ = transformY;
  package$korma.Matrix3 = Matrix3;
  Object.defineProperty(Matrix4, 'Companion', {
    get: Matrix4$Companion_getInstance
  });
  package$korma.Matrix4 = Matrix4;
  package$korma.toMatrix4_7tjwd1$ = toMatrix4;
  Object.defineProperty(Vector2, 'Companion', {
    get: Vector2$Companion_getInstance
  });
  Vector2.Base = Vector2$Base;
  package$korma.Vector2 = Vector2;
  package$korma.IVector2 = IVector2;
  package$korma.MVector2_init_dleff0$ = MVector2_init;
  package$korma.MVector2_init_vux9f0$ = MVector2_init_0;
  package$korma.MVector2_init_3pjtqy$ = MVector2_init_1;
  package$korma.MVector2_init_r62tv1$ = MVector2_init_2;
  package$korma.MVector2 = MVector2;
  package$korma.Vec_z8e4lc$ = Vec;
  package$korma.get_unit_tzag2d$ = get_unit;
  package$korma.plus_fu3msx$ = plus;
  package$korma.minus_fu3msx$ = minus;
  package$korma.times_fu3msx$ = times;
  package$korma.div_fu3msx$ = div;
  package$korma.times_o8dp5o$ = times_0;
  package$korma.div_o8dp5o$ = div_0;
  package$korma.dot_fu3msx$ = dot;
  package$korma.distanceTo_qapz0y$ = distanceTo;
  package$korma.distanceTo_fu3msx$ = distanceTo_0;
  package$korma.angleToRad_fu3msx$ = angleToRad;
  package$korma.angleTo_fu3msx$ = angleTo;
  package$korma.transformed_a8te0c$ = transformed;
  package$korma.get_tbdh50$ = get_2;
  package$korma.get_unit_a4wxy6$ = get_unit_0;
  package$korma.get_length_a4wxy6$ = get_length;
  package$korma.get_magnitude_a4wxy6$ = get_magnitude;
  package$korma.get_normalized_a4wxy6$ = get_normalized;
  package$korma.get_mutable_a4wxy6$ = get_mutable;
  package$korma.get_immutable_a4wxy6$ = get_immutable;
  package$korma.copy_a4wxy6$ = copy;
  Object.defineProperty(Vector2Int, 'Companion', {
    get: Vector2Int$Companion_getInstance
  });
  package$korma.Vector2Int = Vector2Int;
  package$korma.IVector2Int = IVector2Int;
  package$korma.MVector2Int = MVector2Int;
  package$korma.plus_bl7q7p$ = plus_0;
  package$korma.minus_bl7q7p$ = minus_0;
  package$korma.times_bl7q7p$ = times_1;
  package$korma.div_bl7q7p$ = div_1;
  package$korma.rem_bl7q7p$ = rem;
  package$korma.get_mutable_oyxlsj$ = get_mutable_0;
  package$korma.get_immutable_oyxlsj$ = get_immutable_0;
  package$korma.get_int_a4wxy6$ = get_int;
  package$korma.get_double_oyxlsj$ = get_double;
  package$korma.MVector2Area = MVector2Area;
  Object.defineProperty(Vector3, 'Companion', {
    get: Vector3$Companion_getInstance
  });
  Vector3.Base = Vector3$Base;
  package$korma.Vector3 = Vector3;
  package$korma.IVector3 = IVector3;
  package$korma.MVector3 = MVector3;
  $$importsForInline$$['kds-js'] = $module$kds_js;
  var package$algo = package$korma.algo || (package$korma.algo = {});
  Object.defineProperty(package$algo, 'AStar', {
    get: AStar_getInstance
  });
  var package$buffer = package$korma.buffer || (package$korma.buffer = {});
  package$buffer.copyTo_m9cn97$ = copyTo;
  package$buffer.copyTo_jek8pb$ = copyTo_0;
  package$buffer.binarySearch_tpuxuu$ = binarySearch;
  package$buffer.binarySearch_x4f2cq$ = binarySearch_0;
  Object.defineProperty(Anchor, 'Companion', {
    get: Anchor$Companion_getInstance
  });
  var package$geom = package$korma.geom || (package$korma.geom = {});
  package$geom.Anchor = Anchor;
  Object.defineProperty(Angle, 'Companion', {
    get: Angle$Companion_getInstance
  });
  package$geom.Angle = Angle;
  package$geom.get_normalizedRadians_72g52s$ = get_normalizedRadians;
  package$geom.get_normalizedDegrees_72g52s$ = get_normalizedDegrees;
  package$geom.get_normalized_72g52s$ = get_normalized_0;
  package$geom.get_degrees_rcaex3$ = get_degrees;
  package$geom.get_radians_rcaex3$ = get_radians;
  package$geom.BoundsBuilder = BoundsBuilder;
  Object.defineProperty(Orientation, 'CW', {
    get: Orientation$CW_getInstance
  });
  Object.defineProperty(Orientation, 'CCW', {
    get: Orientation$CCW_getInstance
  });
  Object.defineProperty(Orientation, 'COLLINEAR', {
    get: Orientation$COLLINEAR_getInstance
  });
  Object.defineProperty(Orientation, 'Companion', {
    get: Orientation$Companion_getInstance
  });
  package$geom.Orientation = Orientation;
  package$geom.getPolylineLength_8mo2aj$ = getPolylineLength;
  package$geom.IPointInt_vux9f0$ = IPointInt;
  package$geom.PointInt_vux9f0$ = PointInt;
  package$geom.IRectangle = IRectangle;
  Rectangle.Immutable = Rectangle$Immutable;
  Object.defineProperty(Rectangle, 'Companion', {
    get: Rectangle$Companion_getInstance
  });
  package$geom.Rectangle_init_tjonv8$ = Rectangle_init;
  package$geom.Rectangle = Rectangle;
  package$geom.Rectangle_1ugm5o$ = Rectangle_0;
  package$geom.IRectangle_1ugm5o$ = IRectangle_0;
  package$geom.bounds_kobt9m$ = bounds;
  package$geom.IRectangleInt = IRectangleInt;
  Object.defineProperty(RectangleInt, 'Companion', {
    get: RectangleInt$Companion_getInstance
  });
  RectangleInt.Immutable = RectangleInt$Immutable;
  package$geom.RectangleInt_init_tjonv8$ = RectangleInt_init;
  package$geom.RectangleInt = RectangleInt;
  package$geom.get_int_f4ja93$ = get_int_0;
  package$geom.get_double_1odyom$ = get_double_0;
  package$geom.anchor_sg85ae$ = anchor;
  package$geom.get_center_1odyom$ = get_center;
  package$geom.RectangleInt_1ugm5o$ = RectangleInt_0;
  package$geom.IRectangleInt_1ugm5o$ = IRectangleInt_0;
  Object.defineProperty(ScaleMode, 'Companion', {
    get: ScaleMode$Companion_getInstance
  });
  package$geom.ScaleMode = ScaleMode;
  package$geom.ISize = ISize;
  Size.Immutable = Size$Immutable;
  package$geom.Size = Size;
  package$geom.Size_z8e4lc$ = Size_0;
  package$geom.ISize_z8e4lc$ = ISize_0;
  package$geom.Sizeable = Sizeable;
  package$geom.SizeInt = SizeInt;
  package$geom.bounds_hrwf8m$ = bounds_0;
  VectorPath.Visitor = VectorPath$Visitor;
  Object.defineProperty(VectorPath, 'Command', {
    get: VectorPath$Command_getInstance
  });
  Object.defineProperty(VectorPath$Winding, 'EVEN_ODD', {
    get: VectorPath$Winding$EVEN_ODD_getInstance
  });
  Object.defineProperty(VectorPath$Winding, 'NON_ZERO', {
    get: VectorPath$Winding$NON_ZERO_getInstance
  });
  VectorPath.Winding = VectorPath$Winding;
  package$geom.VectorPath = VectorPath;
  Bezier.Quad = Bezier$Quad;
  Bezier.Cubic = Bezier$Cubic;
  Object.defineProperty(Bezier, 'Companion', {
    get: Bezier$Companion_getInstance
  });
  var package$bezier = package$geom.bezier || (package$geom.bezier = {});
  package$bezier.Bezier = Bezier;
  package$bezier.length_vt5oj1$ = length;
  Object.defineProperty(package$bezier, 'SegmentEmitter', {
    get: SegmentEmitter_getInstance
  });
  var package$binpack = package$geom.binpack || (package$geom.binpack = {});
  package$binpack.BinPack = BinPack;
  package$binpack.addBatch_44f1t5$ = addBatch;
  BinPacker.Result = BinPacker$Result;
  Object.defineProperty(BinPacker, 'Companion', {
    get: BinPacker$Companion_getInstance
  });
  package$binpack.BinPacker = BinPacker;
  package$binpack.MaxRects = MaxRects;
  Object.defineProperty(Clipper$ClipType, 'INTERSECTION', {
    get: Clipper$ClipType$INTERSECTION_getInstance
  });
  Object.defineProperty(Clipper$ClipType, 'UNION', {
    get: Clipper$ClipType$UNION_getInstance
  });
  Object.defineProperty(Clipper$ClipType, 'DIFFERENCE', {
    get: Clipper$ClipType$DIFFERENCE_getInstance
  });
  Object.defineProperty(Clipper$ClipType, 'XOR', {
    get: Clipper$ClipType$XOR_getInstance
  });
  Clipper.ClipType = Clipper$ClipType;
  Object.defineProperty(Clipper$Direction, 'RIGHT_TO_LEFT', {
    get: Clipper$Direction$RIGHT_TO_LEFT_getInstance
  });
  Object.defineProperty(Clipper$Direction, 'LEFT_TO_RIGHT', {
    get: Clipper$Direction$LEFT_TO_RIGHT_getInstance
  });
  Clipper.Direction = Clipper$Direction;
  Object.defineProperty(Clipper$EndType, 'CLOSED_POLYGON', {
    get: Clipper$EndType$CLOSED_POLYGON_getInstance
  });
  Object.defineProperty(Clipper$EndType, 'CLOSED_LINE', {
    get: Clipper$EndType$CLOSED_LINE_getInstance
  });
  Object.defineProperty(Clipper$EndType, 'OPEN_BUTT', {
    get: Clipper$EndType$OPEN_BUTT_getInstance
  });
  Object.defineProperty(Clipper$EndType, 'OPEN_SQUARE', {
    get: Clipper$EndType$OPEN_SQUARE_getInstance
  });
  Object.defineProperty(Clipper$EndType, 'OPEN_ROUND', {
    get: Clipper$EndType$OPEN_ROUND_getInstance
  });
  Clipper.EndType = Clipper$EndType;
  Object.defineProperty(Clipper$JoinType, 'SQUARE', {
    get: Clipper$JoinType$SQUARE_getInstance
  });
  Object.defineProperty(Clipper$JoinType, 'ROUND', {
    get: Clipper$JoinType$ROUND_getInstance
  });
  Object.defineProperty(Clipper$JoinType, 'MITER', {
    get: Clipper$JoinType$MITER_getInstance
  });
  Clipper.JoinType = Clipper$JoinType;
  Object.defineProperty(Clipper$PolyFillType, 'EVEN_ODD', {
    get: Clipper$PolyFillType$EVEN_ODD_getInstance
  });
  Object.defineProperty(Clipper$PolyFillType, 'NON_ZERO', {
    get: Clipper$PolyFillType$NON_ZERO_getInstance
  });
  Object.defineProperty(Clipper$PolyFillType, 'POSITIVE', {
    get: Clipper$PolyFillType$POSITIVE_getInstance
  });
  Object.defineProperty(Clipper$PolyFillType, 'NEGATIVE', {
    get: Clipper$PolyFillType$NEGATIVE_getInstance
  });
  Clipper.PolyFillType = Clipper$PolyFillType;
  Object.defineProperty(Clipper$PolyType, 'SUBJECT', {
    get: Clipper$PolyType$SUBJECT_getInstance
  });
  Object.defineProperty(Clipper$PolyType, 'CLIP', {
    get: Clipper$PolyType$CLIP_getInstance
  });
  Clipper.PolyType = Clipper$PolyType;
  Object.defineProperty(Clipper, 'Companion', {
    get: Clipper$Companion_getInstance
  });
  var package$clipper = package$geom.clipper || (package$geom.clipper = {});
  package$clipper.Clipper = Clipper;
  ClipperBase.LocalMinima = ClipperBase$LocalMinima;
  ClipperBase.Scanbeam = ClipperBase$Scanbeam;
  Object.defineProperty(ClipperBase, 'Companion', {
    get: ClipperBase$Companion_getInstance
  });
  package$clipper.ClipperBase = ClipperBase;
  Object.defineProperty(ClipperOffset, 'Companion', {
    get: ClipperOffset$Companion_getInstance
  });
  package$clipper.ClipperOffset = ClipperOffset;
  Object.defineProperty(DefaultClipper, 'Companion', {
    get: DefaultClipper$Companion_getInstance
  });
  package$clipper.DefaultClipper = DefaultClipper;
  Object.defineProperty(Edge$Side, 'LEFT', {
    get: Edge$Side$LEFT_getInstance
  });
  Object.defineProperty(Edge$Side, 'RIGHT', {
    get: Edge$Side$RIGHT_getInstance
  });
  Edge.Side = Edge$Side;
  Object.defineProperty(Edge, 'Companion', {
    get: Edge$Companion_getInstance
  });
  package$clipper.Edge = Edge;
  Path.Join = Path$Join;
  Object.defineProperty(Path$OutPt, 'Companion', {
    get: Path$OutPt$Companion_getInstance
  });
  Path.OutPt = Path$OutPt;
  Path.OutRec = Path$OutRec;
  Object.defineProperty(Path, 'Companion', {
    get: Path$Companion_getInstance
  });
  package$clipper.Path_init_za3lpa$ = Path_init;
  package$clipper.Path_init_fj8cwk$ = Path_init_0;
  package$clipper.Path_init_d0ps2m$ = Path_init_1;
  package$clipper.Path_init_20gruy$ = Path_init_2;
  package$clipper.Path = Path;
  Object.defineProperty(Paths, 'Companion', {
    get: Paths$Companion_getInstance
  });
  package$clipper.Paths_init = Paths_init;
  package$clipper.Paths_init_za3lpa$ = Paths_init_0;
  package$clipper.Paths_init_f0acfx$ = Paths_init_1;
  package$clipper.Paths_init_rwdyfz$ = Paths_init_2;
  package$clipper.Paths = Paths;
  Object.defineProperty(package$clipper, 'Points', {
    get: Points_getInstance
  });
  Object.defineProperty(PolyNode$NodeType, 'ANY', {
    get: PolyNode$NodeType$ANY_getInstance
  });
  Object.defineProperty(PolyNode$NodeType, 'OPEN', {
    get: PolyNode$NodeType$OPEN_getInstance
  });
  Object.defineProperty(PolyNode$NodeType, 'CLOSED', {
    get: PolyNode$NodeType$CLOSED_getInstance
  });
  PolyNode.NodeType = PolyNode$NodeType;
  package$clipper.PolyNode = PolyNode;
  package$clipper.PolyTree = PolyTree;
  var package$shape = package$geom.shape || (package$geom.shape = {});
  package$shape.toSpatialMesh_3rvk8s$ = toSpatialMesh;
  package$shape.pathFind_3rvk8s$ = pathFind;
  package$shape.funnel_6wpa6p$ = funnel;
  package$shape.funnel_nf7g9c$ = funnel_0;
  package$shape.pathFind_nf7g9c$ = pathFind_0;
  package$shape.toSpatialMesh_ol95vd$ = toSpatialMesh_0;
  package$shape.pathFind_ol95vd$ = pathFind_1;
  package$shape.pathFind_dtl3h$ = pathFind_2;
  Object.defineProperty(package$shape, 'HorizontalLine', {
    get: HorizontalLine_getInstance
  });
  Object.defineProperty(Shape2d, 'Empty', {
    get: Shape2d$Empty_getInstance
  });
  Shape2d.Line = Shape2d$Line;
  Shape2d.Circle = Shape2d$Circle;
  Shape2d.Rectangle_init_tjonv8$ = Shape2d$Shape2d$Rectangle_init;
  Shape2d.Rectangle = Shape2d$Rectangle;
  Shape2d.Polygon = Shape2d$Polygon;
  Shape2d.Poyline = Shape2d$Poyline;
  Shape2d.Complex = Shape2d$Complex;
  package$shape.Shape2d = Shape2d;
  package$shape.toShape2d_bec407$ = toShape2d;
  package$shape.toShape2d_1t4vde$ = toShape2d_0;
  package$shape.get_bounds_ol95vd$ = get_bounds;
  package$shape.toShape_2epnw0$ = toShape;
  package$shape.clipperOp_ie2yr9$ = clipperOp;
  package$shape.collidesWith_p3ttib$ = collidesWith;
  package$shape.intersection_p3ttib$ = intersection;
  package$shape.union_p3ttib$ = union;
  package$shape.xor_p3ttib$ = xor;
  package$shape.difference_p3ttib$ = difference;
  package$shape.plus_p3ttib$ = plus_1;
  package$shape.minus_p3ttib$ = minus_1;
  package$shape.extend_9aasij$ = extend;
  package$shape.toPaths_krcd5j$ = toPaths;
  package$shape.toPaths2_krcd5j$ = toPaths2;
  package$shape.toShape2d_krcd5j$ = toShape2d_1;
  package$shape.getAllPoints_ol95vd$ = getAllPoints;
  package$shape.toPolygon_ol95vd$ = toPolygon;
  package$shape.triangulate_mkh5kf$ = triangulate;
  package$shape.triangulate_ol95vd$ = triangulate_0;
  package$shape.containsPoint_cl45lt$ = containsPoint;
  Object.defineProperty(Triangle, 'Companion', {
    get: Triangle$Companion_getInstance
  });
  var package$triangle = package$geom.triangle || (package$geom.triangle = {});
  package$triangle.Triangle = Triangle;
  package$triangle.FunnelPortal = FunnelPortal;
  Object.defineProperty(NewFunnel, 'Companion', {
    get: NewFunnel$Companion_getInstance
  });
  NewFunnel.Portal = NewFunnel$Portal;
  package$triangle.NewFunnel = NewFunnel;
  package$triangle.PathFind = PathFind;
  Object.defineProperty(package$triangle, 'PathFindChannel', {
    get: PathFindChannel_getInstance
  });
  package$triangle.PathFindException = PathFindException;
  Object.defineProperty(SpatialMesh, 'Companion', {
    get: SpatialMesh$Companion_getInstance
  });
  package$triangle.SpatialMesh_init_zhzwm1$ = SpatialMesh_init;
  package$triangle.SpatialMesh = SpatialMesh;
  package$triangle.SpatialNode = SpatialNode;
  package$triangle.AdvancingFront = AdvancingFront;
  package$triangle.Basin = Basin;
  Object.defineProperty(package$triangle, 'Constants', {
    get: Constants_getInstance
  });
  Object.defineProperty(Edge_0, 'Companion', {
    get: Edge$Companion_getInstance_0
  });
  package$triangle.Edge = Edge_0;
  package$triangle.EdgeEvent = EdgeEvent;
  package$triangle.Node = Node;
  package$triangle.EdgeContext = EdgeContext;
  Object.defineProperty(Sweep, 'Companion', {
    get: Sweep$Companion_getInstance
  });
  package$triangle.Sweep = Sweep;
  package$triangle.SweepContext_init_d0ps2m$ = SweepContext_init;
  package$triangle.SweepContext = SweepContext;
  var package$interpolation = package$korma.interpolation || (package$korma.interpolation = {});
  package$interpolation.Interpolable = Interpolable;
  package$interpolation.interpolate_224j3y$ = interpolate;
  package$interpolation.interpolate_qrehoo$ = interpolate_0;
  package$interpolation.interpolate_yvo9jy$ = interpolate_1;
  package$interpolation.interpolateAny_bb7w4c$ = interpolateAny;
  package$interpolation.interpolate_mwqh4r$ = interpolate_2;
  package$interpolation.interpolate_nig4hr$ = interpolate_3;
  package$interpolation.interpolate_i767ff$ = interpolate_4;
  package$interpolation.interpolate_9z28t1$ = interpolate_5;
  package$interpolation.interpolate_k3qle4$ = interpolate_6;
  package$interpolation.interpolate_jtloyj$ = interpolate_7;
  package$interpolation.MutableInterpolable = MutableInterpolable;
  var package$math = package$korma.math || (package$korma.math = {});
  Object.defineProperty(package$math, 'Math', {
    get: Math_getInstance
  });
  Object.defineProperty(package$math, 'Math2', {
    get: Math2_getInstance
  });
  package$math.pow_z8e4lc$ = pow;
  package$math.log_14dthe$ = log_0;
  var package$numeric = package$korma.numeric || (package$korma.numeric = {});
  var package$fft = package$numeric.fft || (package$numeric.fft = {});
  Object.defineProperty(package$fft, 'FFT', {
    get: FFT_getInstance
  });
  Object.defineProperty(MtRand, 'Companion', {
    get: MtRand$Companion_getInstance
  });
  var package$random = package$korma.random || (package$korma.random = {});
  package$random.MtRand_init = MtRand_init;
  package$random.MtRand_init_za3lpa$ = MtRand_init_0;
  package$random.MtRand_init_s8cxhz$ = MtRand_init_1;
  package$random.MtRand = MtRand;
  Object.defineProperty(Rand, 'Companion', {
    get: Rand$Companion_getInstance
  });
  package$random.Rand = Rand;
  package$random.nextInt_fqn9x9$ = nextInt;
  package$random.nextLong_eyy2ov$ = nextLong;
  package$random.nextDouble_eyy2ov$ = nextDouble;
  package$random.getCyclic_yzln2o$ = getCyclic;
  package$random.random_h4b5j0$ = random;
  package$random.get_5d739r$ = get_3;
  package$random.get_8s1w7p$ = get_4;
  package$random.get_4gj7ye$ = get_5;
  package$random.get_6oa2id$ = get_6;
  package$random.get_3xvuk4$ = get_7;
  package$random.get_6pzwm6$ = get_8;
  package$random.get_wcmksk$ = get_9;
  package$random.get_a8d947$ = get_10;
  package$random.get_q3a6wq$ = get_11;
  Bezier$Quad.prototype.getBounds_2da8yn$ = Bezier.prototype.getBounds_2da8yn$;
  Bezier$Quad.prototype.calc_fz2aja$ = Bezier.prototype.calc_fz2aja$;
  Bezier$Cubic.prototype.getBounds_2da8yn$ = Bezier.prototype.getBounds_2da8yn$;
  Bezier$Cubic.prototype.calc_fz2aja$ = Bezier.prototype.calc_fz2aja$;
  Kotlin.defineModule('korma-js', _);
  return _;
}));

//# sourceMappingURL=korma-js.js.map
