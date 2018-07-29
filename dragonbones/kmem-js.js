(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kmem-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kmem-js'.");
    }
    root['kmem-js'] = factory(typeof this['kmem-js'] === 'undefined' ? {} : this['kmem-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var toBits = Kotlin.floatToBits;
  var toBits_0 = Kotlin.doubleToBits;
  var kotlin_js_internal_DoubleCompanionObject = Kotlin.kotlin.js.internal.DoubleCompanionObject;
  var toShort = Kotlin.toShort;
  var toChar = Kotlin.toChar;
  var L4294967295 = new Kotlin.Long(-1, 0);
  var Unit = Kotlin.kotlin.Unit;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var round = Kotlin.kotlin.math.round_14dthe$;
  var isNaN_0 = Kotlin.kotlin.isNaN_81szk$;
  var isInfinite = Kotlin.kotlin.isInfinite_81szk$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var equals = Kotlin.equals;
  var L0 = Kotlin.Long.ZERO;
  var L_9223372036854775808 = Kotlin.Long.MIN_VALUE;
  var L9223372036854775807 = Kotlin.Long.MAX_VALUE;
  var numberToInt = Kotlin.numberToInt;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init_pdl1vj$;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var copyOf = Kotlin.kotlin.collections.copyOf_mrm5p$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var get_indices = Kotlin.kotlin.collections.get_indices_964n91$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var toRawBits = Kotlin.floatToRawBits;
  var throwCCE = Kotlin.throwCCE;
  var toByte = Kotlin.toByte;
  var Comparable = Kotlin.kotlin.Comparable;
  var toRawBits_0 = Kotlin.doubleToRawBits;
  var get_indices_0 = Kotlin.kotlin.collections.get_indices_355ntz$;
  var get_indices_1 = Kotlin.kotlin.collections.get_indices_i2lc79$;
  var get_indices_2 = Kotlin.kotlin.collections.get_indices_tmsbgo$;
  var get_indices_3 = Kotlin.kotlin.collections.get_indices_se6h4x$;
  var get_indices_4 = Kotlin.kotlin.collections.get_indices_rjqryz$;
  var get_indices_5 = Kotlin.kotlin.collections.get_indices_bvy38s$;
  function reinterpretAsInt($receiver) {
    return toBits($receiver);
  }
  function reinterpretAsFloat($receiver) {
    return Kotlin.floatFromBits($receiver);
  }
  function reinterpretAsLong($receiver) {
    return toBits_0($receiver);
  }
  function reinterpretAsDouble($receiver) {
    return Kotlin.doubleFromBits($receiver);
  }
  function rotateLeft($receiver, bits) {
    return $receiver << bits | $receiver >>> 32 - bits;
  }
  function rotateRight($receiver, bits) {
    return $receiver << 32 - bits | $receiver >>> bits;
  }
  function reverseBytes($receiver) {
    var v0 = $receiver >>> 0 & 255;
    var v1 = $receiver >>> 8 & 255;
    var v2 = $receiver >>> 16 & 255;
    var v3 = $receiver >>> 24 & 255;
    return v0 << 24 | v1 << 16 | v2 << 8 | v3 << 0;
  }
  function reverseBytes_0($receiver) {
    var low = $receiver >>> 0 & 255;
    var high = $receiver >>> 8 & 255;
    return toShort(high & 255 | low << 8);
  }
  function reverseBytes_1($receiver) {
    var low = ($receiver | 0) >>> 0 & 255;
    var high = ($receiver | 0) >>> 8 & 255;
    return toChar(high & 255 | low << 8);
  }
  function reverseBytes_2($receiver) {
    var v0 = Kotlin.Long.fromInt(reverseBytes($receiver.shiftRightUnsigned(0).toInt())).and(L4294967295);
    var v1 = Kotlin.Long.fromInt(reverseBytes($receiver.shiftRightUnsigned(32).toInt())).and(L4294967295);
    return v0.shiftLeft(32).or(v1.shiftLeft(0));
  }
  function reverseBits($receiver) {
    var v = $receiver;
    v = v >>> 1 & 1431655765 | (v & 1431655765) << 1;
    v = v >>> 2 & 858993459 | (v & 858993459) << 2;
    v = v >>> 4 & 252645135 | (v & 252645135) << 4;
    v = v >>> 8 & 16711935 | (v & 16711935) << 8;
    v = v >>> 16 & 65535 | (v & 65535) << 16;
    return v;
  }
  function countLeadingZeros($receiver) {
    var v = {v: $receiver};
    if (v.v === 0)
      return 32;
    var result = {v: 0};
    if ((v.v & -65536) === 0) {
      v.v = v.v << 16;
      result.v = result.v + 16 | 0;
    }
    if ((v.v & -16777216) === 0) {
      v.v = v.v << 8;
      result.v = result.v + 8 | 0;
    }
    if ((v.v & -268435456) === 0) {
      v.v = v.v << 4;
      result.v = result.v + 4 | 0;
    }
    if ((v.v & -1073741824) === 0) {
      v.v = v.v << 2;
      result.v = result.v + 2 | 0;
    }
    if ((v.v & -2147483648) === 0) {
      v.v = v.v << 1;
      result.v = result.v + 1 | 0;
    }
    return result.v;
  }
  function countTrailingZeros($receiver) {
    if ($receiver === 0)
      return 32;
    var n = $receiver;
    var c = 32;
    n = n & (-n | 0);
    if (n !== 0) {
      c = c - 1 | 0;
    }
    if ((n & 65535) !== 0)
      c = c - 16 | 0;
    if ((n & 16711935) !== 0)
      c = c - 8 | 0;
    if ((n & 252645135) !== 0)
      c = c - 4 | 0;
    if ((n & 858993459) !== 0)
      c = c - 2 | 0;
    if ((n & 1431655765) !== 0)
      c = c - 1 | 0;
    return c;
  }
  function countLeadingOnes($receiver) {
    return countLeadingZeros(~$receiver);
  }
  function countTrailingOnes($receiver) {
    return countTrailingZeros(~$receiver);
  }
  function signExtend($receiver, bits) {
    return $receiver << 32 - bits >> 32 - bits;
  }
  function signExtend8($receiver) {
    return $receiver << 24 >> 24;
  }
  function signExtend16($receiver) {
    return $receiver << 16 >> 16;
  }
  function signExtend_0($receiver, bits) {
    return $receiver.shiftLeft(64 - bits | 0).shiftRight(64 - bits | 0);
  }
  function signExtend8_0($receiver) {
    return $receiver.shiftLeft(24).shiftRight(24);
  }
  function signExtend16_0($receiver) {
    return $receiver.shiftLeft(16).shiftRight(16);
  }
  function toUnsigned($receiver) {
    return $receiver & 255;
  }
  function toUnsigned_0($receiver) {
    return Kotlin.Long.fromInt($receiver).and(L4294967295);
  }
  var mask = defineInlineFunction('kmem-js.com.soywiz.kmem.mask_s8ev3n$', function ($receiver) {
    return (1 << $receiver) - 1 | 0;
  });
  var mask_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.mask_mts6qi$', wrapFunction(function () {
    var L1 = Kotlin.Long.ONE;
    return function ($receiver) {
      return L1.shiftLeft($receiver.toInt()).subtract(L1);
    };
  }));
  function toUInt($receiver) {
    return Kotlin.Long.fromInt($receiver).and(L4294967295);
  }
  function getBits($receiver, offset, count) {
    return $receiver >>> offset & ((1 << count) - 1 | 0);
  }
  function getBit($receiver, offset) {
    return ($receiver >>> offset & 1) !== 0;
  }
  function extract($receiver, offset, count) {
    return $receiver >>> offset & ((1 << count) - 1 | 0);
  }
  function extract_0($receiver, offset) {
    return ($receiver >>> offset & 1) !== 0;
  }
  function extract8($receiver, offset) {
    return $receiver >>> offset & 255;
  }
  function extract16($receiver, offset) {
    return $receiver >>> offset & 65535;
  }
  function extractSigned($receiver, offset, count) {
    return signExtend($receiver >>> offset & ((1 << count) - 1 | 0), count);
  }
  function extract8Signed($receiver, offset) {
    return ($receiver >>> offset & 255) << 24 >> 24;
  }
  function extract16Signed($receiver, offset) {
    return ($receiver >>> offset & 65535) << 16 >> 16;
  }
  function extractScaled($receiver, offset, count, scale) {
    return Kotlin.imul(extract($receiver, offset, count), scale) / ((1 << count) - 1 | 0) | 0;
  }
  function extractScaledf01($receiver, offset, count) {
    return extract($receiver, offset, count) / ((1 << count) - 1 | 0);
  }
  function extractScaledFF($receiver, offset, count) {
    return extractScaled($receiver, offset, count, 255);
  }
  function extractScaledFFDefault($receiver, offset, count, default_0) {
    return count === 0 ? default_0 : extractScaled($receiver, offset, count, 255);
  }
  function insert($receiver, value, offset, count) {
    var mask = (1 << count) - 1 | 0;
    var clearValue = $receiver & ~(mask << offset);
    return clearValue | (value & mask) << offset;
  }
  function insert8($receiver, value, offset) {
    return insert($receiver, value, offset, 8);
  }
  function insert_0($receiver, value, offset) {
    return insert($receiver, value ? 1 : 0, offset, 1);
  }
  function insertScaled($receiver, value, offset, count, scale) {
    return insert($receiver, Kotlin.imul(value, (1 << count) - 1 | 0) / scale | 0, offset, count);
  }
  function insertScaledFF($receiver, value, offset, count) {
    return count === 0 ? $receiver : insertScaled($receiver, value, offset, count, 255);
  }
  var Math_0 = Math;
  function rint(v) {
    if (v >= Math_0.floor(v) + 0.5) {
      return Math_0.ceil(v);
    }
     else {
      return round(v);
    }
  }
  function signum(v) {
    return Math_0.sign(v);
  }
  function clamp($receiver, min, max) {
    return $receiver < min ? min : $receiver > max ? max : $receiver;
  }
  function clamp_0($receiver, min, max) {
    return $receiver.compareTo_11rb$(min) < 0 ? min : $receiver.compareTo_11rb$(max) > 0 ? max : $receiver;
  }
  function clamp_1($receiver, min, max) {
    return $receiver < min ? min : $receiver > max ? max : $receiver;
  }
  function clamp_2($receiver, min, max) {
    if ($receiver < min)
      return min;
    else if ($receiver > max)
      return max;
    else
      return $receiver;
  }
  function clamp01($receiver) {
    return clamp_1($receiver, 0.0, 1.0);
  }
  function isAlmostZero($receiver) {
    return Math_0.abs($receiver) <= 1.0E-19;
  }
  function isNanOrInfinite($receiver) {
    return isNaN_0($receiver) || isInfinite($receiver);
  }
  var ult = defineInlineFunction('kmem-js.com.soywiz.kmem.ult_dqglrj$', function ($receiver, that) {
    return ($receiver ^ -2147483648) < (that ^ -2147483648);
  });
  function ule($receiver, that) {
    return IntEx_getInstance().compareUnsigned_vux9f0$($receiver, that) <= 0;
  }
  function ugt($receiver, that) {
    return IntEx_getInstance().compareUnsigned_vux9f0$($receiver, that) > 0;
  }
  function uge($receiver, that) {
    return IntEx_getInstance().compareUnsigned_vux9f0$($receiver, that) >= 0;
  }
  function extractBool($receiver, offset) {
    return extract($receiver, offset, 1) !== 0;
  }
  function hasFlag($receiver, bits) {
    return ($receiver & bits) === bits;
  }
  function get_unsigned($receiver) {
    return Kotlin.Long.fromInt($receiver).and(L4294967295);
  }
  function BitUtils() {
    BitUtils_instance = this;
  }
  BitUtils.prototype.mask_za3lpa$ = function (value) {
    return (1 << value) - 1 | 0;
  };
  BitUtils.prototype.bitrev32_za3lpa$ = function (x) {
    return reverseBits(x);
  };
  BitUtils.prototype.rotr_vux9f0$ = function (value, offset) {
    return rotateRight(value, offset);
  };
  BitUtils.prototype.clz32_za3lpa$ = function (x) {
    return countLeadingZeros(x);
  };
  BitUtils.prototype.clo_za3lpa$ = function (x) {
    return this.clz32_za3lpa$(~x);
  };
  BitUtils.prototype.clz_za3lpa$ = function (x) {
    return this.clz32_za3lpa$(x);
  };
  BitUtils.prototype.seb_za3lpa$ = function (x) {
    return x << 24 >> 24;
  };
  BitUtils.prototype.seh_za3lpa$ = function (x) {
    return x << 16 >> 16;
  };
  BitUtils.prototype.wsbh_za3lpa$ = function (v) {
    return (v & -16711936) >>> 8 | (v & 16711935) << 8;
  };
  BitUtils.prototype.wsbw_za3lpa$ = function (v) {
    return (v & -16777216) >>> 24 | (v & 16711680) >>> 8 | (v & 65280) << 8 | (v & 255) << 24;
  };
  BitUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'BitUtils',
    interfaces: []
  };
  var BitUtils_instance = null;
  function BitUtils_getInstance() {
    if (BitUtils_instance === null) {
      new BitUtils();
    }
    return BitUtils_instance;
  }
  function compareToUnsigned($receiver, that) {
    return IntEx_getInstance().compareUnsigned_vux9f0$($receiver, that);
  }
  function LongEx() {
    LongEx_instance = this;
    this.MIN_VALUE = L_9223372036854775808;
    this.MAX_VALUE = L9223372036854775807;
  }
  LongEx.prototype.compare_3pjtqy$ = function (x, y) {
    return x.compareTo_11rb$(y) < 0 ? -1 : equals(x, y) ? 0 : 1;
  };
  LongEx.prototype.compareUnsigned_3pjtqy$ = function (x, y) {
    return this.compare_3pjtqy$(x.xor(this.MIN_VALUE), y.xor(this.MIN_VALUE));
  };
  LongEx.prototype.divideUnsigned_3pjtqy$ = function (dividend, divisor) {
    if (divisor.toNumber() < 0)
      return Kotlin.Long.fromInt(this.compareUnsigned_3pjtqy$(dividend, divisor) < 0 ? 0 : 1);
    if (dividend.toNumber() >= 0)
      return dividend.div(divisor);
    var quotient = dividend.shiftRightUnsigned(1).div(divisor).shiftLeft(1);
    var rem = dividend.subtract(quotient.multiply(divisor));
    return quotient.add(Kotlin.Long.fromInt(this.compareUnsigned_3pjtqy$(rem, divisor) >= 0 ? 1 : 0));
  };
  LongEx.prototype.remainderUnsigned_3pjtqy$ = function (dividend, divisor) {
    if (divisor.toNumber() < 0)
      return this.compareUnsigned_3pjtqy$(dividend, divisor) < 0 ? dividend : dividend.subtract(divisor);
    if (dividend.toNumber() >= 0)
      return dividend.modulo(divisor);
    var quotient = dividend.shiftRightUnsigned(1).div(divisor).shiftLeft(1);
    var rem = dividend.subtract(quotient.multiply(divisor));
    return rem.subtract(this.compareUnsigned_3pjtqy$(rem, divisor) >= 0 ? divisor : L0);
  };
  LongEx.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'LongEx',
    interfaces: []
  };
  var LongEx_instance = null;
  function LongEx_getInstance() {
    if (LongEx_instance === null) {
      new LongEx();
    }
    return LongEx_instance;
  }
  function IntEx() {
    IntEx_instance = this;
    this.MIN_VALUE_0 = -2147483648;
    this.MAX_VALUE_0 = 2147483647;
  }
  IntEx.prototype.compare_vux9f0$ = function (l, r) {
    return l < r ? -1 : l > r ? 1 : 0;
  };
  IntEx.prototype.compareUnsigned_vux9f0$ = function (l, r) {
    return this.compare_vux9f0$(l ^ this.MIN_VALUE_0, r ^ this.MIN_VALUE_0);
  };
  IntEx.prototype.divideUnsigned_vux9f0$ = function (dividend, divisor) {
    if (divisor < 0)
      return this.compareUnsigned_vux9f0$(dividend, divisor) < 0 ? 0 : 1;
    if (dividend >= 0)
      return dividend / divisor | 0;
    var quotient = ((dividend >>> 1) / divisor | 0) << 1;
    var rem = dividend - Kotlin.imul(quotient, divisor) | 0;
    return quotient + (this.compareUnsigned_vux9f0$(rem, divisor) >= 0 ? 1 : 0) | 0;
  };
  IntEx.prototype.remainderUnsigned_vux9f0$ = function (dividend, divisor) {
    if (divisor < 0)
      return this.compareUnsigned_vux9f0$(dividend, divisor) < 0 ? dividend : dividend - divisor | 0;
    if (dividend >= 0)
      return dividend % divisor;
    var quotient = ((dividend >>> 1) / divisor | 0) << 1;
    var rem = dividend - Kotlin.imul(quotient, divisor) | 0;
    return rem - (this.compareUnsigned_vux9f0$(rem, divisor) >= 0 ? divisor : 0) | 0;
  };
  IntEx.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'IntEx',
    interfaces: []
  };
  var IntEx_instance = null;
  function IntEx_getInstance() {
    if (IntEx_instance === null) {
      new IntEx();
    }
    return IntEx_instance;
  }
  function udiv($receiver, that) {
    return IntEx_getInstance().divideUnsigned_vux9f0$($receiver, that);
  }
  function urem($receiver, that) {
    return IntEx_getInstance().remainderUnsigned_vux9f0$($receiver, that);
  }
  function udiv_0($receiver, that) {
    return LongEx_getInstance().divideUnsigned_3pjtqy$($receiver, that);
  }
  function urem_0($receiver, that) {
    return LongEx_getInstance().remainderUnsigned_3pjtqy$($receiver, that);
  }
  function divCeil($receiver, that) {
    return $receiver % that !== 0 ? ($receiver / that | 0) + 1 | 0 : $receiver / that | 0;
  }
  function umod($receiver, other) {
    var tmp$;
    var remainder = $receiver % other;
    if (remainder < 0)
      tmp$ = remainder + other | 0;
    else
      tmp$ = remainder;
    return tmp$;
  }
  function umod_0($receiver, other) {
    var tmp$;
    var remainder = $receiver % other;
    if (remainder < 0)
      tmp$ = remainder + other;
    else
      tmp$ = remainder;
    return tmp$;
  }
  function ilog2(v) {
    return numberToInt(Math_0.log2(v));
  }
  function imul32_64(a, b, result) {
    if (result === void 0)
      result = new Int32Array(2);
    if (a === 0) {
      result[0] = 0;
      result[1] = 0;
      return result;
    }
    if (b === 0) {
      result[0] = 0;
      result[1] = 0;
      return result;
    }
    if (a >= -32768 && a <= 32767 && (b >= -32768 && b <= 32767)) {
      result[0] = Kotlin.imul(a, b);
      result[1] = result[0] < 0 ? -1 : 0;
      return result;
    }
    var doNegate = a < 0 ^ b < 0;
    umul32_64(abs(a), abs(b), result);
    if (doNegate) {
      result[0] = ~result[0];
      result[1] = ~result[1];
      result[0] = result[0] + 1 | 0;
      if (result[0] === 0)
        result[1] = result[1] + 1 | 0;
    }
    return result;
  }
  function umul32_64(a, b, result) {
    if (result === void 0)
      result = new Int32Array(2);
    var tmp$ = (a ^ -2147483648) < (32767 ^ -2147483648);
    if (tmp$) {
      tmp$ = (b ^ -2147483648) < (65536 ^ -2147483648);
    }
    if (tmp$) {
      result[0] = Kotlin.imul(a, b);
      result[1] = result[0] < 0 ? -1 : 0;
      return result;
    }
    var a00 = a & 65535;
    var a16 = a >>> 16;
    var b00 = b & 65535;
    var b16 = b >>> 16;
    var c00 = Kotlin.imul(a00, b00);
    var c16 = (c00 >>> 16) + Kotlin.imul(a16, b00) | 0;
    var c32 = c16 >>> 16;
    c16 = (c16 & 65535) + Kotlin.imul(a00, b16) | 0;
    c32 = c32 + (c16 >>> 16) | 0;
    var c48 = c32 >>> 16;
    c32 = (c32 & 65535) + Kotlin.imul(a16, b16) | 0;
    c48 = c48 + (c32 >>> 16) | 0;
    result[0] = (c16 & 65535) << 16 | c00 & 65535;
    result[1] = (c48 & 65535) << 16 | c32 & 65535;
    return result;
  }
  function toIntCeil($receiver) {
    return numberToInt(Math_0.ceil($receiver));
  }
  function toIntFloor($receiver) {
    return numberToInt(Math_0.floor($receiver));
  }
  function toIntRound($receiver) {
    return Kotlin.Long.fromNumber(round($receiver)).toInt();
  }
  function get_isOdd($receiver) {
    return $receiver % 2 === 1;
  }
  function get_isEven($receiver) {
    return $receiver % 2 === 0;
  }
  function convertRange($receiver, srcMin, srcMax, dstMin, dstMax) {
    var ratio = ($receiver - srcMin) / (srcMax - srcMin);
    return dstMin + (dstMax - dstMin) * ratio;
  }
  function convertRangeClamped($receiver, srcMin, srcMax, dstMin, dstMax) {
    return clamp_1(convertRange($receiver, srcMin, srcMax, dstMin, dstMax), dstMin, dstMax);
  }
  function convertRange_0($receiver, srcMin, srcMax, dstMin, dstMax) {
    var ratio = $receiver.subtract(srcMin).toNumber() / srcMax.subtract(srcMin).toNumber();
    return Kotlin.Long.fromNumber(dstMin.toNumber() + dstMax.subtract(dstMin).toNumber() * ratio);
  }
  function nextAlignedTo($receiver, align) {
    if (align === 0)
      return $receiver;
    else if ($receiver % align === 0)
      return $receiver;
    else
      return Kotlin.imul(($receiver / align | 0) + 1 | 0, align);
  }
  function nextAlignedTo_0($receiver, align) {
    if (equals(align, L0))
      return $receiver;
    else if (equals($receiver.modulo(align), L0))
      return $receiver;
    else
      return $receiver.div(align).add(Kotlin.Long.fromInt(1)).multiply(align);
  }
  function prevAlignedTo($receiver, align) {
    if (align === 0)
      return $receiver;
    else if ($receiver % align === 0)
      return $receiver;
    else
      return nextAlignedTo($receiver, align) - align | 0;
  }
  function prevAlignedTo_0($receiver, align) {
    if (equals(align, L0))
      return $receiver;
    else if (equals($receiver.modulo(align), L0))
      return $receiver;
    else
      return nextAlignedTo_0($receiver, align).subtract(align);
  }
  function isAlignedTo($receiver, alignment) {
    return $receiver % alignment === 0;
  }
  function toIntSafe($receiver) {
    if (!equals(Kotlin.Long.fromInt($receiver.toInt()), $receiver))
      throw IllegalArgumentException_init("Long doesn't fit Integer");
    return $receiver.toInt();
  }
  function toIntClamp($receiver, min, max) {
    if (min === void 0)
      min = -2147483648;
    if (max === void 0)
      max = 2147483647;
    if ($receiver.toNumber() < min)
      return min;
    if ($receiver.toNumber() > max)
      return max;
    return $receiver.toInt();
  }
  function toUintClamp($receiver, min, max) {
    if (min === void 0)
      min = 0;
    if (max === void 0)
      max = 2147483647;
    return toIntClamp($receiver, 0, 2147483647);
  }
  function and($receiver, mask) {
    return Kotlin.Long.fromInt($receiver).and(mask);
  }
  function and_0($receiver, mask) {
    return $receiver & mask;
  }
  function and_1($receiver, mask) {
    return $receiver & mask;
  }
  function or($receiver, mask) {
    return $receiver | mask;
  }
  function or_0($receiver, mask) {
    return $receiver | mask;
  }
  function or_1($receiver, mask) {
    return $receiver | mask;
  }
  function shl($receiver, that) {
    return $receiver << that;
  }
  function shl_0($receiver, that) {
    return $receiver << that;
  }
  function shr($receiver, that) {
    return $receiver >> that;
  }
  function shr_0($receiver, that) {
    return $receiver >> that;
  }
  function ushr($receiver, that) {
    return $receiver >>> that;
  }
  function ushr_0($receiver, that) {
    return $receiver >>> that;
  }
  var toInt = defineInlineFunction('kmem-js.com.soywiz.kmem.toInt_1v8dcc$', function ($receiver) {
    return $receiver ? 1 : 0;
  });
  function get_niceStr($receiver) {
    return Kotlin.Long.fromNumber($receiver).toNumber() === $receiver ? Kotlin.Long.fromNumber($receiver).toString() : $receiver.toString();
  }
  function get_niceStr_0($receiver) {
    return Kotlin.Long.fromNumber($receiver).toNumber() === $receiver ? Kotlin.Long.fromNumber($receiver).toString() : $receiver.toString();
  }
  function get_nextPowerOfTwo($receiver) {
    var v = $receiver;
    v = v - 1 | 0;
    v = v | v >> 1;
    v = v | v >> 2;
    v = v | v >> 4;
    v = v | v >> 8;
    v = v | v >> 16;
    v = v + 1 | 0;
    return v;
  }
  function get_isPowerOfTwo($receiver) {
    return get_nextPowerOfTwo($receiver) === $receiver;
  }
  function ByteArrayBuffer(data, size, allowGrow) {
    if (size === void 0)
      size = data.length;
    if (allowGrow === void 0)
      allowGrow = true;
    this.data = data;
    this.allowGrow = allowGrow;
    this._size_0 = size;
  }
  Object.defineProperty(ByteArrayBuffer.prototype, 'size', {
    get: function () {
      return this._size_0;
    },
    set: function (len) {
      this.ensure_0(len);
      this._size_0 = len;
    }
  });
  ByteArrayBuffer.prototype.ensure_0 = function (expected) {
    if (this.data.length < expected) {
      if (!this.allowGrow)
        throw RuntimeException_init('ByteArrayBuffer configured to not grow!');
      var tmp$ = this.data;
      var b = (this.data.length + 7 | 0) * 5 | 0;
      this.data = copyOf(tmp$, Math_0.max(expected, b));
    }
  };
  ByteArrayBuffer.prototype.append_mj6st8$ = function (ba, offset, len) {
    var ssize = this.size;
    this.size = this.size + len | 0;
    arraycopy_17(ba, offset, this.data, ssize, len);
  };
  ByteArrayBuffer.prototype.append_s8j3t7$ = function (v) {
    this.size = this.size + 1 | 0;
    this.data[this.size - 1 | 0] = v;
  };
  ByteArrayBuffer.prototype.clear = function () {
    this.size = 0;
  };
  ByteArrayBuffer.prototype.toByteArraySlice_s8cxhz$ = function (position) {
    if (position === void 0)
      position = L0;
    return new ByteArraySlice(this.data, position.toInt(), this.size);
  };
  ByteArrayBuffer.prototype.toByteArray = function () {
    return copyOf(this.data, this.size);
  };
  ByteArrayBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArrayBuffer',
    interfaces: []
  };
  function ByteArrayBuffer_init(initialCapacity, $this) {
    if (initialCapacity === void 0)
      initialCapacity = 4096;
    $this = $this || Object.create(ByteArrayBuffer.prototype);
    ByteArrayBuffer.call($this, new Int8Array(initialCapacity), 0);
    return $this;
  }
  function ByteArraySlice(data, position, length) {
    ByteArraySlice$Companion_getInstance();
    this.data = data;
    this.position = position;
    this.length = length;
  }
  ByteArraySlice.prototype.getPointer = function () {
    return new Pointer(this.data, this.position);
  };
  ByteArraySlice.prototype.toString = function () {
    return 'ByteArraySlice(data=' + this.data + ', position=' + this.position + ', length=' + this.length + ')';
  };
  ByteArraySlice.prototype.get_za3lpa$ = function (n) {
    return this.data[this.position + n | 0];
  };
  ByteArraySlice.prototype.set_6t1wet$ = function (n, value) {
    this.data[this.position + n | 0] = value;
  };
  function ByteArraySlice$Companion() {
    ByteArraySlice$Companion_instance = this;
  }
  ByteArraySlice$Companion.prototype.create_4p0eoe$ = function (start, end) {
    if (!equals(start.ba, end.ba))
      throw RuntimeException_init('Pointer must reference the samea array');
    return new ByteArraySlice(start.ba, start.offset, end.offset - start.offset | 0);
  };
  ByteArraySlice$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var ByteArraySlice$Companion_instance = null;
  function ByteArraySlice$Companion_getInstance() {
    if (ByteArraySlice$Companion_instance === null) {
      new ByteArraySlice$Companion();
    }
    return ByteArraySlice$Companion_instance;
  }
  ByteArraySlice.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ByteArraySlice',
    interfaces: []
  };
  function toByteArraySlice($receiver) {
    return new ByteArraySlice($receiver, 0, $receiver.length);
  }
  function contains($receiver, other) {
    return indexOf($receiver, other) >= 0;
  }
  var Collection = Kotlin.kotlin.collections.Collection;
  function indexOf($receiver, other) {
    var tmp$;
    var full = $receiver;
    tmp$ = full.length - other.length | 0;
    loop_label: for (var n = 0; n < tmp$; n++) {
      var $receiver_0 = get_indices(other);
      var all$result;
      all$break: do {
        var tmp$_0;
        if (Kotlin.isType($receiver_0, Collection) && $receiver_0.isEmpty()) {
          all$result = true;
          break all$break;
        }
        tmp$_0 = $receiver_0.iterator();
        while (tmp$_0.hasNext()) {
          var element = tmp$_0.next();
          if (!(full[n + element | 0] === other[element])) {
            all$result = false;
            break all$break;
          }
        }
        all$result = true;
      }
       while (false);
      if (all$result) {
        return n;
      }
    }
    return -1;
  }
  function Float16(bits) {
    Float16$Companion_getInstance();
    this.bits = bits;
    this.value_o735j0$_0 = lazy(Float16$value$lambda(this));
  }
  Object.defineProperty(Float16.prototype, 'value', {
    get: function () {
      return this.value_o735j0$_0.value;
    }
  });
  function Float16$Companion() {
    Float16$Companion_instance = this;
    this.FLOAT16_EXPONENT_BASE = 15;
  }
  Float16$Companion.prototype.intBitsToDouble_za3lpa$ = function (word) {
    var sign = (word & 32768) !== 0 ? -1 : 1;
    var exponent = word >>> 10 & 31;
    var significand = word & 1023;
    if (exponent === 0) {
      if (significand === 0) {
        return 0.0;
      }
       else {
        return sign * Math_0.pow(2.0, -14) * (significand / 1024 | 0);
      }
    }
    if (exponent === 31) {
      if (significand === 0) {
        return sign < 0 ? kotlin_js_internal_DoubleCompanionObject.NEGATIVE_INFINITY : kotlin_js_internal_DoubleCompanionObject.POSITIVE_INFINITY;
      }
       else {
        return kotlin_js_internal_DoubleCompanionObject.NaN;
      }
    }
    var x = exponent - 15 | 0;
    return sign * Math_0.pow(2.0, x) * (1 + (significand / 1024 | 0) | 0);
  };
  Float16$Companion.prototype.doubleToIntBits_14dthe$ = function (value) {
    var tmp$;
    var dword = reinterpretAsInt(value);
    if ((dword & 2147483647) === 0) {
      tmp$ = dword >>> 16;
    }
     else {
      var sign = dword & -2147483648;
      var exponent = dword & 2146435072;
      var significand = dword & 1048575;
      if (exponent === 0) {
        tmp$ = sign >>> 16;
      }
       else if (exponent === 2146435072) {
        tmp$ = significand === 0 ? sign >>> 16 | 31744 : 65024;
      }
       else {
        var signedExponent = (exponent >>> 20) - 1023 + 15 | 0;
        var halfSignificand;
        if (signedExponent >= 31) {
          tmp$ = significand >>> 16 | 31744;
        }
         else if (signedExponent <= 0) {
          if ((10 - signedExponent | 0) > 21) {
            halfSignificand = 0;
          }
           else {
            significand = significand | 1048576;
            var add = (significand >>> 10 - signedExponent & 1) !== 0 ? 1 : 0;
            halfSignificand = (significand >>> 11 - signedExponent) + add | 0;
          }
          tmp$ = sign >>> 16 | halfSignificand;
        }
         else {
          halfSignificand = significand >>> 10;
          var out = sign | signedExponent << 10 | halfSignificand;
          tmp$ = (significand & 512) !== 0 ? out + 1 | 0 : out;
        }
      }
    }
    return tmp$;
  };
  Float16$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Float16$Companion_instance = null;
  function Float16$Companion_getInstance() {
    if (Float16$Companion_instance === null) {
      new Float16$Companion();
    }
    return Float16$Companion_instance;
  }
  function Float16$value$lambda(this$Float16) {
    return function () {
      return Float16$Companion_getInstance().intBitsToDouble_za3lpa$(this$Float16.bits);
    };
  }
  Float16.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Float16',
    interfaces: []
  };
  function Float16_init(value, $this) {
    $this = $this || Object.create(Float16.prototype);
    Float16.call($this, Float16$Companion_getInstance().doubleToIntBits_14dthe$(value));
    return $this;
  }
  function FloatArrayFromIntArray(base) {
    this.base = base;
  }
  FloatArrayFromIntArray.prototype.get_za3lpa$ = function (i) {
    var bits = this.base[i];
    return Kotlin.floatFromBits(bits);
  };
  FloatArrayFromIntArray.prototype.set_24o109$ = function (i, v) {
    this.base[i] = toRawBits(v);
  };
  FloatArrayFromIntArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FloatArrayFromIntArray',
    interfaces: []
  };
  function asFloatArray($receiver) {
    return new FloatArrayFromIntArray($receiver);
  }
  function Kmem() {
    Kmem_instance = this;
    this.VERSION = KMEM_VERSION;
  }
  Kmem.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Kmem',
    interfaces: []
  };
  var Kmem_instance = null;
  function Kmem_getInstance() {
    if (Kmem_instance === null) {
      new Kmem();
    }
    return Kmem_instance;
  }
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  function arraycopyAny(src, srcPos, dst, dstPos, size) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    if (Kotlin.isByteArray(src)) {
      arraycopy_17(src, srcPos, Kotlin.isByteArray(tmp$ = dst) ? tmp$ : throwCCE(), dstPos, size);
    }
     else if (Kotlin.isShortArray(src)) {
      arraycopy_18(src, srcPos, Kotlin.isShortArray(tmp$_0 = dst) ? tmp$_0 : throwCCE(), dstPos, size);
    }
     else if (Kotlin.isIntArray(src)) {
      arraycopy_19(src, srcPos, Kotlin.isIntArray(tmp$_1 = dst) ? tmp$_1 : throwCCE(), dstPos, size);
    }
     else if (Kotlin.isFloatArray(src)) {
      arraycopy_20(src, srcPos, Kotlin.isFloatArray(tmp$_2 = dst) ? tmp$_2 : throwCCE(), dstPos, size);
    }
     else if (Kotlin.isDoubleArray(src)) {
      arraycopy_21(src, srcPos, Kotlin.isDoubleArray(tmp$_3 = dst) ? tmp$_3 : throwCCE(), dstPos, size);
    }
     else if (Kotlin.isLongArray(src)) {
      arraycopy_16(src, srcPos, Kotlin.isLongArray(tmp$_4 = dst) ? tmp$_4 : throwCCE(), dstPos, size);
    }
     else if (Kotlin.isType(src, ArrayBuffer)) {
      arraycopy_22(src, srcPos, Kotlin.isType(tmp$_5 = dst, ArrayBuffer) ? tmp$_5 : throwCCE(), dstPos, size);
    }
     else {
      throw IllegalStateException_init(('Not a valid array ' + src).toString());
    }
  }
  var ArrayBuffer_init = ArrayBuffer;
  function DataBufferAlloc(size) {
    return getData(new ArrayBuffer_init(size + 15 & -16));
  }
  var Int8Array_init = Int8Array;
  function sliceInt8Buffer($receiver, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 1 | 0) - offset | 0;
    }
    return new Int8Array_init($receiver, offset * 1 | 0, size);
  }
  var Int16Array_init = Int16Array;
  function sliceInt16Buffer($receiver, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 2 | 0) - offset | 0;
    }
    return new Int16Array_init($receiver, offset * 2 | 0, size);
  }
  var Int32Array_init = Int32Array;
  function sliceInt32Buffer($receiver, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 4 | 0) - offset | 0;
    }
    return new Int32Array_init($receiver, offset * 4 | 0, size);
  }
  var Float32Array_init = Float32Array;
  function sliceFloat32Buffer($receiver, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 4 | 0) - offset | 0;
    }
    return new Float32Array_init($receiver, offset * 4 | 0, size);
  }
  var Float64Array_init = Float64Array;
  function sliceFloat64Buffer($receiver, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 8 | 0) - offset | 0;
    }
    return new Float64Array_init($receiver, offset * 8 | 0, size);
  }
  function sliceUint8Buffer($receiver, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 2 | 0) - offset | 0;
    }
    return new Uint8Buffer(new Int8Array_init($receiver, offset * 1 | 0, size));
  }
  function sliceUint16Buffer($receiver, offset, size) {
    if (offset === void 0)
      offset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 2 | 0) - offset | 0;
    }
    return new Uint16Buffer(new Int16Array_init($receiver, offset * 2 | 0, size));
  }
  function sliceInt8BufferByteOffset($receiver, byteOffset, size) {
    if (byteOffset === void 0)
      byteOffset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 1 | 0) - (byteOffset / 1 | 0) | 0;
    }
    return new Int8Array_init($receiver, (byteOffset / 1 | 0) * 1 | 0, size);
  }
  function sliceInt16BufferByteOffset($receiver, byteOffset, size) {
    if (byteOffset === void 0)
      byteOffset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 2 | 0) - (byteOffset / 2 | 0) | 0;
    }
    return new Int16Array_init($receiver, (byteOffset / 2 | 0) * 2 | 0, size);
  }
  function sliceInt32BufferByteOffset($receiver, byteOffset, size) {
    if (byteOffset === void 0)
      byteOffset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 4 | 0) - (byteOffset / 4 | 0) | 0;
    }
    return new Int32Array_init($receiver, (byteOffset / 4 | 0) * 4 | 0, size);
  }
  function sliceFloat32BufferByteOffset($receiver, byteOffset, size) {
    if (byteOffset === void 0)
      byteOffset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 4 | 0) - (byteOffset / 4 | 0) | 0;
    }
    return new Float32Array_init($receiver, (byteOffset / 4 | 0) * 4 | 0, size);
  }
  function sliceFloat64BufferByteOffset($receiver, byteOffset, size) {
    if (byteOffset === void 0)
      byteOffset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 8 | 0) - (byteOffset / 8 | 0) | 0;
    }
    return new Float64Array_init($receiver, (byteOffset / 8 | 0) * 8 | 0, size);
  }
  function sliceUint8BufferByteOffset($receiver, byteOffset, size) {
    if (byteOffset === void 0)
      byteOffset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 2 | 0) - (byteOffset / 2 | 0) | 0;
    }
    return new Uint8Buffer(new Int8Array_init($receiver, (byteOffset / 2 | 0) * 1 | 0, size));
  }
  function sliceUint16BufferByteOffset($receiver, byteOffset, size) {
    if (byteOffset === void 0)
      byteOffset = 0;
    if (size === void 0) {
      size = ($receiver.byteLength / 2 | 0) - (byteOffset / 2 | 0) | 0;
    }
    return new Uint16Buffer(new Int16Array_init($receiver, (byteOffset / 2 | 0) * 2 | 0, size));
  }
  function asInt8Buffer($receiver) {
    return sliceInt8Buffer($receiver);
  }
  function asInt16Buffer($receiver) {
    return sliceInt16Buffer($receiver);
  }
  function asInt32Buffer($receiver) {
    return sliceInt32Buffer($receiver);
  }
  function asFloat32Buffer($receiver) {
    return sliceFloat32Buffer($receiver);
  }
  function asFloat64Buffer($receiver) {
    return sliceFloat64Buffer($receiver);
  }
  var Int8BufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.Int8BufferAlloc_za3lpa$', wrapFunction(function () {
    var sliceInt8Buffer = _.com.soywiz.kmem.sliceInt8Buffer_3gn6rj$;
    var ArrayBuffer_init = ArrayBuffer;
    return function (size) {
      return sliceInt8Buffer(new ArrayBuffer_init((size * 1 | 0) + 15 & -16));
    };
  }));
  function subarray($receiver, begin, end) {
    if (end === void 0) {
      end = $receiver.length;
    }
    return sliceInt8Buffer($receiver.buffer, ($receiver.byteOffset / 1 | 0) + begin | 0, end - begin | 0);
  }
  var Int16BufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.Int16BufferAlloc_za3lpa$', wrapFunction(function () {
    var sliceInt16Buffer = _.com.soywiz.kmem.sliceInt16Buffer_3gn6rj$;
    var ArrayBuffer_init = ArrayBuffer;
    return function (size) {
      return sliceInt16Buffer(new ArrayBuffer_init((size * 2 | 0) + 15 & -16));
    };
  }));
  function subarray_0($receiver, begin, end) {
    if (end === void 0) {
      end = $receiver.length;
    }
    return sliceInt16Buffer($receiver.buffer, ($receiver.byteOffset / 2 | 0) + begin | 0, end - begin | 0);
  }
  var Int32BufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.Int32BufferAlloc_za3lpa$', wrapFunction(function () {
    var sliceInt32Buffer = _.com.soywiz.kmem.sliceInt32Buffer_3gn6rj$;
    var ArrayBuffer_init = ArrayBuffer;
    return function (size) {
      return sliceInt32Buffer(new ArrayBuffer_init((size * 4 | 0) + 15 & -16));
    };
  }));
  function subarray_1($receiver, begin, end) {
    if (end === void 0) {
      end = $receiver.length;
    }
    return sliceInt32Buffer($receiver.buffer, ($receiver.byteOffset / 4 | 0) + begin | 0, end - begin | 0);
  }
  var Float32BufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.Float32BufferAlloc_za3lpa$', wrapFunction(function () {
    var sliceFloat32Buffer = _.com.soywiz.kmem.sliceFloat32Buffer_3gn6rj$;
    var ArrayBuffer_init = ArrayBuffer;
    return function (size) {
      return sliceFloat32Buffer(new ArrayBuffer_init((size * 4 | 0) + 15 & -16));
    };
  }));
  function subarray_2($receiver, begin, end) {
    if (end === void 0) {
      end = $receiver.length;
    }
    return sliceFloat32Buffer($receiver.buffer, ($receiver.byteOffset / 4 | 0) + begin | 0, end - begin | 0);
  }
  var Float64BufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.Float64BufferAlloc_za3lpa$', wrapFunction(function () {
    var sliceFloat64Buffer = _.com.soywiz.kmem.sliceFloat64Buffer_3gn6rj$;
    var ArrayBuffer_init = ArrayBuffer;
    return function (size) {
      return sliceFloat64Buffer(new ArrayBuffer_init((size * 8 | 0) + 15 & -16));
    };
  }));
  function subarray_3($receiver, begin, end) {
    if (end === void 0) {
      end = $receiver.length;
    }
    return sliceFloat64Buffer($receiver.buffer, ($receiver.byteOffset / 8 | 0) + begin | 0, end - begin | 0);
  }
  function arraycopy(src, srcPos, dst, dstPos, size) {
    arraycopy_22(src.buffer, srcPos * 1 | 0, dst.buffer, dstPos * 1 | 0, size * 1 | 0);
  }
  function arraycopy_0(src, srcPos, dst, dstPos, size) {
    arraycopy_23(src, srcPos, dst.buffer, dstPos, size);
  }
  function arraycopy_1(src, srcPos, dst, dstPos, size) {
    arraycopy_24(src.buffer, srcPos, dst, dstPos, size);
  }
  function arraycopy_2(src, srcPos, dst, dstPos, size) {
    arraycopy_22(src.buffer, srcPos * 2 | 0, dst.buffer, dstPos * 2 | 0, size * 2 | 0);
  }
  function arraycopy_3(src, srcPos, dst, dstPos, size) {
    arraycopy_25(src, srcPos, dst.buffer, dstPos, size);
  }
  function arraycopy_4(src, srcPos, dst, dstPos, size) {
    arraycopy_26(src.buffer, srcPos, dst, dstPos, size);
  }
  function arraycopy_5(src, srcPos, dst, dstPos, size) {
    arraycopy_22(src.buffer, srcPos * 4 | 0, dst.buffer, dstPos * 4 | 0, size * 4 | 0);
  }
  function arraycopy_6(src, srcPos, dst, dstPos, size) {
    arraycopy_27(src, srcPos, dst.buffer, dstPos, size);
  }
  function arraycopy_7(src, srcPos, dst, dstPos, size) {
    arraycopy_28(src.buffer, srcPos, dst, dstPos, size);
  }
  function arraycopy_8(src, srcPos, dst, dstPos, size) {
    arraycopy_22(src.buffer, srcPos * 4 | 0, dst.buffer, dstPos * 4 | 0, size * 4 | 0);
  }
  function arraycopy_9(src, srcPos, dst, dstPos, size) {
    arraycopy_29(src, srcPos, dst.buffer, dstPos, size);
  }
  function arraycopy_10(src, srcPos, dst, dstPos, size) {
    arraycopy_30(src.buffer, srcPos, dst, dstPos, size);
  }
  function arraycopy_11(src, srcPos, dst, dstPos, size) {
    arraycopy_22(src.buffer, srcPos * 8 | 0, dst.buffer, dstPos * 8 | 0, size * 8 | 0);
  }
  function arraycopy_12(src, srcPos, dst, dstPos, size) {
    arraycopy_31(src, srcPos, dst.buffer, dstPos, size);
  }
  function arraycopy_13(src, srcPos, dst, dstPos, size) {
    arraycopy_32(src.buffer, srcPos, dst, dstPos, size);
  }
  function fill($receiver, value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = $receiver.length;
    _fill($receiver, value, start, end);
  }
  function fill_0($receiver, value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = $receiver.length;
    _fill_0($receiver, value, start, end);
  }
  function fill_1($receiver, value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = $receiver.length;
    _fill_1($receiver, value, start, end);
  }
  var fill_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.fill_6mk3ue$', wrapFunction(function () {
    return function ($receiver, value, start, end) {
      if (start === void 0)
        start = 0;
      if (end === void 0)
        end = $receiver.length;
      $receiver.fill(value, start, end);
    };
  }));
  var fill_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.fill_htcctw$', wrapFunction(function () {
    return function ($receiver, value, start, end) {
      if (start === void 0)
        start = 0;
      if (end === void 0)
        end = $receiver.length;
      $receiver.fill(value, start, end);
    };
  }));
  var fill_4 = defineInlineFunction('kmem-js.com.soywiz.kmem.fill_tpuxuu$', wrapFunction(function () {
    return function ($receiver, value, start, end) {
      if (start === void 0)
        start = 0;
      if (end === void 0)
        end = $receiver.length;
      $receiver.fill(value, start, end);
    };
  }));
  var fill_5 = defineInlineFunction('kmem-js.com.soywiz.kmem.fill_nwy378$', wrapFunction(function () {
    return function ($receiver, value, start, end) {
      if (start === void 0)
        start = 0;
      if (end === void 0)
        end = $receiver.length;
      $receiver.fill(value, start, end);
    };
  }));
  var fill_6 = defineInlineFunction('kmem-js.com.soywiz.kmem.fill_x4f2cq$', wrapFunction(function () {
    return function ($receiver, value, start, end) {
      if (start === void 0)
        start = 0;
      if (end === void 0)
        end = $receiver.length;
      $receiver.fill(value, start, end);
    };
  }));
  var Float64Buffer_BYTES_PER_ELEMENT;
  var Float32Buffer_BYTES_PER_ELEMENT;
  var Int32Buffer_BYTES_PER_ELEMENT;
  var Int16Buffer_BYTES_PER_ELEMENT;
  var Int8Buffer_BYTES_PER_ELEMENT;
  var Uint8Buffer_BYTES_PER_ELEMENT;
  var Uint16Buffer_BYTES_PER_ELEMENT;
  function NewUint8Buffer(mem, offset, len) {
    return sliceUint8Buffer(mem, offset, len);
  }
  function NewUint16Buffer(mem, offset, len) {
    return sliceUint16Buffer(mem, offset, len);
  }
  function NewInt8Buffer(mem, offset, len) {
    return sliceInt8Buffer(mem, offset, len);
  }
  function NewInt16Buffer(mem, offset, len) {
    return sliceInt16Buffer(mem, offset, len);
  }
  function NewInt32Buffer(mem, offset, len) {
    return sliceInt32Buffer(mem, offset, len);
  }
  function NewFloat32Buffer(mem, offset, len) {
    return sliceFloat32Buffer(mem, offset, len);
  }
  function NewFloat64Buffer(mem, offset, len) {
    return sliceFloat64Buffer(mem, offset, len);
  }
  var KMEM_VERSION;
  function KmlNativeBuffer(mem, size) {
    KmlNativeBuffer$Companion_getInstance();
    if (size === void 0) {
      size = mem.byteLength;
    }
    this.mem = mem;
    this.size = size;
    this.data = getData(this.mem);
    this.arrayByte = asInt8Buffer(this.mem);
    this.arrayShort = asInt16Buffer(this.mem);
    this.arrayInt = asInt32Buffer(this.mem);
    this.arrayFloat = asFloat32Buffer(this.mem);
    this.arrayDouble = asFloat64Buffer(this.mem);
  }
  Object.defineProperty(KmlNativeBuffer.prototype, 'buffer', {
    get: function () {
      return this.mem;
    }
  });
  Object.defineProperty(KmlNativeBuffer.prototype, 'i8', {
    get: function () {
      return this.arrayByte;
    }
  });
  Object.defineProperty(KmlNativeBuffer.prototype, 'i16', {
    get: function () {
      return this.arrayShort;
    }
  });
  Object.defineProperty(KmlNativeBuffer.prototype, 'i32', {
    get: function () {
      return this.arrayInt;
    }
  });
  Object.defineProperty(KmlNativeBuffer.prototype, 'f32', {
    get: function () {
      return this.arrayFloat;
    }
  });
  KmlNativeBuffer.prototype.getByte_za3lpa$ = function (index) {
    return this.arrayByte[index];
  };
  KmlNativeBuffer.prototype.getShort_za3lpa$ = function (index) {
    return this.arrayShort[index];
  };
  KmlNativeBuffer.prototype.getInt_za3lpa$ = function (index) {
    return this.arrayInt[index];
  };
  KmlNativeBuffer.prototype.getFloat_za3lpa$ = function (index) {
    return this.arrayFloat[index];
  };
  KmlNativeBuffer.prototype.getDouble_za3lpa$ = function (index) {
    return this.arrayDouble[index];
  };
  KmlNativeBuffer.prototype.setByte_6t1wet$ = function (index, value) {
    this.arrayByte[index] = value;
  };
  KmlNativeBuffer.prototype.setShort_2bqt6h$ = function (index, value) {
    this.arrayShort[index] = value;
  };
  KmlNativeBuffer.prototype.setInt_vux9f0$ = function (index, value) {
    this.arrayInt[index] = value;
  };
  KmlNativeBuffer.prototype.setFloat_24o109$ = function (index, value) {
    this.arrayFloat[index] = value;
  };
  KmlNativeBuffer.prototype.setDouble_5wr77w$ = function (index, value) {
    this.arrayDouble[index] = value;
  };
  KmlNativeBuffer.prototype.dispose = function () {
  };
  function KmlNativeBuffer$Companion() {
    KmlNativeBuffer$Companion_instance = this;
  }
  KmlNativeBuffer$Companion.prototype.alloc_za3lpa$ = function (size) {
    return new KmlNativeBuffer(new ArrayBuffer_init((size + 15 & -16) + 15 & -16), size);
  };
  KmlNativeBuffer$Companion.prototype.wrap_t771ee$ = function (buffer, size) {
    if (size === void 0) {
      size = buffer.byteLength;
    }
    return new KmlNativeBuffer(buffer, size);
  };
  KmlNativeBuffer$Companion.prototype.wrap_fqrh44$ = function (array) {
    return new KmlNativeBuffer(array.buffer, array.length);
  };
  KmlNativeBuffer$Companion.prototype.invoke_za3lpa$ = function (size) {
    return new KmlNativeBuffer(new ArrayBuffer_init((size + 15 & -16) + 15 & -16), size);
  };
  KmlNativeBuffer$Companion.prototype.invoke_t771ee$ = function (buffer, size) {
    if (size === void 0) {
      size = buffer.byteLength;
    }
    return new KmlNativeBuffer(buffer, size);
  };
  KmlNativeBuffer$Companion.prototype.invoke_fqrh44$ = function (array) {
    return new KmlNativeBuffer(array.buffer, array.length);
  };
  KmlNativeBuffer$Companion.prototype.copy_dargou$ = function (src, srcPos, dst, dstPos, length) {
    arraycopy_22(src.buffer, srcPos, dst.buffer, dstPos, length);
  };
  KmlNativeBuffer$Companion.prototype.copy_dg8xez$ = function (src, srcPos, dst, dstPos, length) {
    arraycopy_24(src.buffer, srcPos, dst, dstPos, length);
  };
  KmlNativeBuffer$Companion.prototype.copy_hlxsb5$ = function (src, srcPos, dst, dstPos, length) {
    arraycopy_23(src, srcPos, dst.buffer, dstPos, length);
  };
  KmlNativeBuffer$Companion.prototype.copyAligned_jz7rt$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_26(src.buffer, srcPosAligned, dst, dstPosAligned, length);
  };
  KmlNativeBuffer$Companion.prototype.copyAligned_z599or$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_25(src, srcPosAligned, dst.buffer, dstPosAligned, length);
  };
  KmlNativeBuffer$Companion.prototype.copyAligned_fakta2$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_28(src.buffer, srcPosAligned, dst, dstPosAligned, length);
  };
  KmlNativeBuffer$Companion.prototype.copyAligned_7m7ari$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_27(src, srcPosAligned, dst.buffer, dstPosAligned, length);
  };
  KmlNativeBuffer$Companion.prototype.copyAligned_n28tdz$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_30(src.buffer, srcPosAligned, dst, dstPosAligned, length);
  };
  KmlNativeBuffer$Companion.prototype.copyAligned_q6ng7p$ = function (src, srcPosAligned, dst, dstPosAligned, length) {
    arraycopy_29(src, srcPosAligned, dst.buffer, dstPosAligned, length);
  };
  KmlNativeBuffer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var KmlNativeBuffer$Companion_instance = null;
  function KmlNativeBuffer$Companion_getInstance() {
    if (KmlNativeBuffer$Companion_instance === null) {
      new KmlNativeBuffer$Companion();
    }
    return KmlNativeBuffer$Companion_instance;
  }
  KmlNativeBuffer.prototype.get_za3lpa$ = function (index) {
    return this.i8[index] & 255;
  };
  KmlNativeBuffer.prototype.set_vux9f0$ = function (index, value) {
    this.i8[index] = toByte(value);
  };
  KmlNativeBuffer.prototype.setAlignedInt16_2bqt6h$ = function (index, value) {
    this.i16[index] = value;
  };
  KmlNativeBuffer.prototype.getAlignedInt16_za3lpa$ = function (index) {
    return this.i16[index];
  };
  KmlNativeBuffer.prototype.setAlignedInt32_vux9f0$ = function (index, value) {
    this.i32[index] = value;
  };
  KmlNativeBuffer.prototype.getAlignedInt32_za3lpa$ = function (index) {
    return this.i32[index];
  };
  KmlNativeBuffer.prototype.setAlignedFloat32_24o109$ = function (index, value) {
    this.f32[index] = value;
  };
  KmlNativeBuffer.prototype.getAlignedFloat32_za3lpa$ = function (index) {
    return this.f32[index];
  };
  KmlNativeBuffer.prototype.getUnalignedInt16_za3lpa$ = function (index) {
    return getShort(this.data, index);
  };
  KmlNativeBuffer.prototype.setUnalignedInt16_2bqt6h$ = function (index, value) {
    setShort(this.data, index, value);
  };
  KmlNativeBuffer.prototype.setUnalignedInt32_vux9f0$ = function (index, value) {
    setInt(this.data, index, value);
  };
  KmlNativeBuffer.prototype.getUnalignedInt32_za3lpa$ = function (index) {
    return getInt(this.data, index);
  };
  KmlNativeBuffer.prototype.setUnalignedFloat32_24o109$ = function (index, value) {
    setFloat(this.data, index, value);
  };
  KmlNativeBuffer.prototype.getUnalignedFloat32_za3lpa$ = function (index) {
    return getFloat(this.data, index);
  };
  KmlNativeBuffer.prototype.setArrayInt8_3fge6q$ = function (dstPos, src, srcPos, len) {
    KmlNativeBuffer$Companion_getInstance().copy_hlxsb5$(src, srcPos, this, dstPos, len);
  };
  KmlNativeBuffer.prototype.setAlignedArrayInt8_3fge6q$ = function (dstPos, src, srcPos, len) {
    KmlNativeBuffer$Companion_getInstance().copy_hlxsb5$(src, srcPos, this, dstPos, len);
  };
  KmlNativeBuffer.prototype.setAlignedArrayInt16_r43jz4$ = function (dstPos, src, srcPos, len) {
    KmlNativeBuffer$Companion_getInstance().copyAligned_z599or$(src, srcPos, this, dstPos, len);
  };
  KmlNativeBuffer.prototype.setAlignedArrayInt32_coga0j$ = function (dstPos, src, srcPos, len) {
    KmlNativeBuffer$Companion_getInstance().copyAligned_7m7ari$(src, srcPos, this, dstPos, len);
  };
  KmlNativeBuffer.prototype.setAlignedArrayFloat32_3hvitc$ = function (dstPos, src, srcPos, len) {
    KmlNativeBuffer$Companion_getInstance().copyAligned_q6ng7p$(src, srcPos, this, dstPos, len);
  };
  KmlNativeBuffer.prototype.getArrayInt8_3fge6q$ = function (srcPos, dst, dstPos, len) {
    KmlNativeBuffer$Companion_getInstance().copy_dg8xez$(this, srcPos, dst, dstPos, len);
  };
  KmlNativeBuffer.prototype.getAlignedArrayInt8_3fge6q$ = function (srcPos, dst, dstPos, len) {
    KmlNativeBuffer$Companion_getInstance().copy_dg8xez$(this, srcPos, dst, dstPos, len);
  };
  KmlNativeBuffer.prototype.getAlignedArrayInt16_r43jz4$ = function (srcPos, dst, dstPos, len) {
    KmlNativeBuffer$Companion_getInstance().copyAligned_jz7rt$(this, srcPos, dst, dstPos, len);
  };
  KmlNativeBuffer.prototype.getAlignedArrayInt32_coga0j$ = function (srcPos, dst, dstPos, len) {
    KmlNativeBuffer$Companion_getInstance().copyAligned_fakta2$(this, srcPos, dst, dstPos, len);
  };
  KmlNativeBuffer.prototype.getAlignedArrayFloat32_3hvitc$ = function (srcPos, dst, dstPos, len) {
    KmlNativeBuffer$Companion_getInstance().copyAligned_n28tdz$(this, srcPos, dst, dstPos, len);
  };
  KmlNativeBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KmlNativeBuffer',
    interfaces: []
  };
  function KmlNativeBuffer_init(size, $this) {
    $this = $this || Object.create(KmlNativeBuffer.prototype);
    KmlNativeBuffer.call($this, new ArrayBuffer_init(size + 15 & -16));
    return $this;
  }
  function Uint8Buffer(b) {
    Uint8Buffer$Companion_getInstance();
    this.b = b;
  }
  function Uint8Buffer$Companion() {
    Uint8Buffer$Companion_instance = this;
  }
  Uint8Buffer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Uint8Buffer$Companion_instance = null;
  function Uint8Buffer$Companion_getInstance() {
    if (Uint8Buffer$Companion_instance === null) {
      new Uint8Buffer$Companion();
    }
    return Uint8Buffer$Companion_instance;
  }
  Object.defineProperty(Uint8Buffer.prototype, 'size', {
    get: function () {
      return this.b.length;
    }
  });
  Uint8Buffer.prototype.get_za3lpa$ = function (index) {
    return this.b[index] & 255;
  };
  Uint8Buffer.prototype.set_vux9f0$ = function (index, value) {
    this.b[index] = toByte(value);
  };
  Uint8Buffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Uint8Buffer',
    interfaces: []
  };
  function Uint16Buffer(b) {
    Uint16Buffer$Companion_getInstance();
    this.b = b;
  }
  function Uint16Buffer$Companion() {
    Uint16Buffer$Companion_instance = this;
  }
  Uint16Buffer$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Uint16Buffer$Companion_instance = null;
  function Uint16Buffer$Companion_getInstance() {
    if (Uint16Buffer$Companion_instance === null) {
      new Uint16Buffer$Companion();
    }
    return Uint16Buffer$Companion_instance;
  }
  Object.defineProperty(Uint16Buffer.prototype, 'size', {
    get: function () {
      return this.b.length;
    }
  });
  Uint16Buffer.prototype.get_za3lpa$ = function (index) {
    return this.b[index] & 65535;
  };
  Uint16Buffer.prototype.set_vux9f0$ = function (index, value) {
    this.b[index] = toShort(value);
  };
  Uint16Buffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Uint16Buffer',
    interfaces: []
  };
  function Uint8BufferAlloc(size) {
    return new Uint8Buffer(sliceInt8Buffer(new ArrayBuffer_init((size * 1 | 0) + 15 & -16)));
  }
  function Uint16BufferAlloc(size) {
    return new Uint16Buffer(sliceInt16Buffer(new ArrayBuffer_init((size * 2 | 0) + 15 & -16)));
  }
  var kmlNativeBuffer = defineInlineFunction('kmem-js.com.soywiz.kmem.kmlNativeBuffer_poguz7$', wrapFunction(function () {
    var KmlNativeBuffer_init = _.com.soywiz.kmem.KmlNativeBuffer_init_za3lpa$;
    return function (size, callback) {
      return callback(KmlNativeBuffer_init(size));
    };
  }));
  function setFloats($receiver, offset, data, dataOffset, count) {
    for (var n = 0; n < count; n++)
      $receiver.setFloat_24o109$(offset + n | 0, data[dataOffset + n | 0]);
    return $receiver;
  }
  function Pointer(ba, offset) {
    if (offset === void 0)
      offset = 0;
    this.ba = ba;
    this.offset = offset;
  }
  Pointer.prototype.inc = function () {
    var tmp$;
    return tmp$ = this.offset, this.offset = tmp$ + 1 | 0, tmp$;
  };
  Pointer.prototype.dec = function () {
    var tmp$;
    return tmp$ = this.offset, this.offset = tmp$ - 1 | 0, tmp$;
  };
  Pointer.prototype.getU8 = function () {
    return this.ba[this.offset] & 255;
  };
  Pointer.prototype.setU8_za3lpa$ = function (v) {
    this.ba[this.offset] = toByte(v);
  };
  Pointer.prototype.readU8 = function () {
    var tmp$;
    return this.ba[tmp$ = this.offset, this.offset = tmp$ + 1 | 0, tmp$] & 255;
  };
  Pointer.prototype.writeU8_za3lpa$ = function (v) {
    var tmp$;
    this.ba[tmp$ = this.offset, this.offset = tmp$ + 1 | 0, tmp$] = toByte(v);
  };
  Pointer.prototype.plus_za3lpa$ = function (offset) {
    return new Pointer(this.ba, this.offset + offset | 0);
  };
  Pointer.prototype.minus_2s8qsv$ = function (that) {
    return this.offset - that.offset | 0;
  };
  Pointer.prototype.setAdd_6n5hb$ = function (that, add) {
    this.offset = that.offset + add | 0;
  };
  Pointer.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.offset, other.offset);
  };
  Pointer.prototype.take_za3lpa$ = function (count) {
    return new ByteArraySlice(this.ba, this.offset, count);
  };
  Pointer.prototype.toString = function () {
    return 'Pointer(' + this.ba + ', ' + this.offset + ')';
  };
  Pointer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pointer',
    interfaces: [Comparable]
  };
  function _read8($receiver, o) {
    return $receiver[o];
  }
  function _read16_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8;
  }
  function _read24_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16;
  }
  function _read32_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16 | readU8($receiver, o + 3 | 0) << 24;
  }
  function _read64_le($receiver, o) {
    var o_0 = o + 0 | 0;
    var o_1 = o + 4 | 0;
    return toUnsigned_0(readU8($receiver, o_0 + 0 | 0) << 0 | readU8($receiver, o_0 + 1 | 0) << 8 | readU8($receiver, o_0 + 2 | 0) << 16 | readU8($receiver, o_0 + 3 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 0 | 0) << 0 | readU8($receiver, o_1 + 1 | 0) << 8 | readU8($receiver, o_1 + 2 | 0) << 16 | readU8($receiver, o_1 + 3 | 0) << 24).shiftLeft(32));
  }
  function _read16_be($receiver, o) {
    return readU8($receiver, o + 1 | 0) << 0 | readU8($receiver, o + 0 | 0) << 8;
  }
  function _read24_be($receiver, o) {
    return readU8($receiver, o + 2 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 0 | 0) << 16;
  }
  function _read32_be($receiver, o) {
    return readU8($receiver, o + 3 | 0) << 0 | readU8($receiver, o + 2 | 0) << 8 | readU8($receiver, o + 1 | 0) << 16 | readU8($receiver, o + 0 | 0) << 24;
  }
  function _read64_be($receiver, o) {
    var o_0 = o + 4 | 0;
    var o_1 = o + 0 | 0;
    return toUnsigned_0(readU8($receiver, o_0 + 3 | 0) << 0 | readU8($receiver, o_0 + 2 | 0) << 8 | readU8($receiver, o_0 + 1 | 0) << 16 | readU8($receiver, o_0 + 0 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 3 | 0) << 0 | readU8($receiver, o_1 + 2 | 0) << 8 | readU8($receiver, o_1 + 1 | 0) << 16 | readU8($receiver, o_1 + 0 | 0) << 24).shiftLeft(32));
  }
  function readU8($receiver, o) {
    return $receiver[o] & 255;
  }
  function readU16_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8;
  }
  function readU24_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16;
  }
  function readU32_le($receiver, o) {
    return toUnsigned_0(readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16 | readU8($receiver, o + 3 | 0) << 24);
  }
  function readU16_be($receiver, o) {
    return readU8($receiver, o + 1 | 0) << 0 | readU8($receiver, o + 0 | 0) << 8;
  }
  function readU24_be($receiver, o) {
    return readU8($receiver, o + 2 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 0 | 0) << 16;
  }
  function readU32_be($receiver, o) {
    return toUnsigned_0(readU8($receiver, o + 3 | 0) << 0 | readU8($receiver, o + 2 | 0) << 8 | readU8($receiver, o + 1 | 0) << 16 | readU8($receiver, o + 0 | 0) << 24);
  }
  function readS8($receiver, o) {
    return $receiver[o];
  }
  function readS16_le($receiver, o) {
    return signExtend(readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8, 16);
  }
  function readS24_le($receiver, o) {
    return signExtend(readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16, 24);
  }
  function readS32_le($receiver, o) {
    return readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16 | readU8($receiver, o + 3 | 0) << 24;
  }
  function readS64_le($receiver, o) {
    var o_0 = o + 0 | 0;
    var o_1 = o + 4 | 0;
    return toUnsigned_0(readU8($receiver, o_0 + 0 | 0) << 0 | readU8($receiver, o_0 + 1 | 0) << 8 | readU8($receiver, o_0 + 2 | 0) << 16 | readU8($receiver, o_0 + 3 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 0 | 0) << 0 | readU8($receiver, o_1 + 1 | 0) << 8 | readU8($receiver, o_1 + 2 | 0) << 16 | readU8($receiver, o_1 + 3 | 0) << 24).shiftLeft(32));
  }
  function readF32_le($receiver, o) {
    var bits = readU8($receiver, o + 0 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 2 | 0) << 16 | readU8($receiver, o + 3 | 0) << 24;
    return Kotlin.floatFromBits(bits);
  }
  function readF64_le($receiver, o) {
    var o_0 = o + 0 | 0;
    var o_1 = o + 4 | 0;
    var bits = toUnsigned_0(readU8($receiver, o_0 + 0 | 0) << 0 | readU8($receiver, o_0 + 1 | 0) << 8 | readU8($receiver, o_0 + 2 | 0) << 16 | readU8($receiver, o_0 + 3 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 0 | 0) << 0 | readU8($receiver, o_1 + 1 | 0) << 8 | readU8($receiver, o_1 + 2 | 0) << 16 | readU8($receiver, o_1 + 3 | 0) << 24).shiftLeft(32));
    return Kotlin.doubleFromBits(bits);
  }
  function readS16_be($receiver, o) {
    return signExtend(readU8($receiver, o + 1 | 0) << 0 | readU8($receiver, o + 0 | 0) << 8, 16);
  }
  function readS24_be($receiver, o) {
    return signExtend(readU8($receiver, o + 2 | 0) << 0 | readU8($receiver, o + 1 | 0) << 8 | readU8($receiver, o + 0 | 0) << 16, 24);
  }
  function readS32_be($receiver, o) {
    return readU8($receiver, o + 3 | 0) << 0 | readU8($receiver, o + 2 | 0) << 8 | readU8($receiver, o + 1 | 0) << 16 | readU8($receiver, o + 0 | 0) << 24;
  }
  function readS64_be($receiver, o) {
    var o_0 = o + 4 | 0;
    var o_1 = o + 0 | 0;
    return toUnsigned_0(readU8($receiver, o_0 + 3 | 0) << 0 | readU8($receiver, o_0 + 2 | 0) << 8 | readU8($receiver, o_0 + 1 | 0) << 16 | readU8($receiver, o_0 + 0 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 3 | 0) << 0 | readU8($receiver, o_1 + 2 | 0) << 8 | readU8($receiver, o_1 + 1 | 0) << 16 | readU8($receiver, o_1 + 0 | 0) << 24).shiftLeft(32));
  }
  function readF32_be($receiver, o) {
    var bits = readU8($receiver, o + 3 | 0) << 0 | readU8($receiver, o + 2 | 0) << 8 | readU8($receiver, o + 1 | 0) << 16 | readU8($receiver, o + 0 | 0) << 24;
    return Kotlin.floatFromBits(bits);
  }
  function readF64_be($receiver, o) {
    var o_0 = o + 4 | 0;
    var o_1 = o + 0 | 0;
    var bits = toUnsigned_0(readU8($receiver, o_0 + 3 | 0) << 0 | readU8($receiver, o_0 + 2 | 0) << 8 | readU8($receiver, o_0 + 1 | 0) << 16 | readU8($receiver, o_0 + 0 | 0) << 24).shiftLeft(0).or(toUnsigned_0(readU8($receiver, o_1 + 3 | 0) << 0 | readU8($receiver, o_1 + 2 | 0) << 8 | readU8($receiver, o_1 + 1 | 0) << 16 | readU8($receiver, o_1 + 0 | 0) << 24).shiftLeft(32));
    return Kotlin.doubleFromBits(bits);
  }
  function readS16_LEBE($receiver, o, little) {
    return little ? readS16_le($receiver, o) : readS16_be($receiver, o);
  }
  function readS32_LEBE($receiver, o, little) {
    return little ? readS32_le($receiver, o) : readS32_be($receiver, o);
  }
  function readS64_LEBE($receiver, o, little) {
    return little ? readS64_le($receiver, o) : readS64_be($receiver, o);
  }
  function readF32_LEBE($receiver, o, little) {
    return little ? readF32_le($receiver, o) : readF32_be($receiver, o);
  }
  function readF64_LEBE($receiver, o, little) {
    return little ? readF64_le($receiver, o) : readF64_be($receiver, o);
  }
  function readTypedArray($receiver, o, count, elementSize, gen, read) {
    var array = gen();
    var pos = o;
    for (var n = 0; n < count; n++) {
      read($receiver, array, n, pos);
      pos = pos + elementSize | 0;
    }
    return array;
  }
  function readByteArray($receiver, o, count) {
    var toIndex = o + count | 0;
    return $receiver.slice(o, toIndex);
  }
  function readShortArray_le$lambda(closure$count) {
    return function () {
      return new Int16Array(closure$count);
    };
  }
  function readShortArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = toShort(readS16_le($receiver, pos));
    return Unit;
  }
  function readShortArray_le($receiver, o, count) {
    var array = readShortArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readShortArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 2 | 0;
    }
    return array;
  }
  function readCharArray_le$lambda(closure$count) {
    return function () {
      return Kotlin.charArray(closure$count);
    };
  }
  function readCharArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = toChar(readS16_le($receiver, pos));
    return Unit;
  }
  function readCharArray_le($receiver, o, count) {
    var array = readCharArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readCharArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 2 | 0;
    }
    return array;
  }
  function readIntArray_le$lambda(closure$count) {
    return function () {
      return new Int32Array(closure$count);
    };
  }
  function readIntArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = readS32_le($receiver, pos);
    return Unit;
  }
  function readIntArray_le($receiver, o, count) {
    var array = readIntArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readIntArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 4 | 0;
    }
    return array;
  }
  function readLongArray_le$lambda(closure$count) {
    return function () {
      return Kotlin.longArray(closure$count);
    };
  }
  function readLongArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = readS64_le($receiver, pos);
    return Unit;
  }
  function readLongArray_le($receiver, o, count) {
    var array = readLongArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readLongArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 8 | 0;
    }
    return array;
  }
  function readFloatArray_le$lambda(closure$count) {
    return function () {
      return new Float32Array(closure$count);
    };
  }
  function readFloatArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = readF32_le($receiver, pos);
    return Unit;
  }
  function readFloatArray_le($receiver, o, count) {
    var array = readFloatArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readFloatArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 4 | 0;
    }
    return array;
  }
  function readDoubleArray_le$lambda(closure$count) {
    return function () {
      return new Float64Array(closure$count);
    };
  }
  function readDoubleArray_le$lambda_0($receiver, array, n, pos) {
    array[n] = readF64_le($receiver, pos);
    return Unit;
  }
  function readDoubleArray_le($receiver, o, count) {
    var array = readDoubleArray_le$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readDoubleArray_le$lambda_0($receiver, array, n, pos);
      pos = pos + 8 | 0;
    }
    return array;
  }
  function readShortArray_be$lambda(closure$count) {
    return function () {
      return new Int16Array(closure$count);
    };
  }
  function readShortArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = toShort(readS16_be($receiver, pos));
    return Unit;
  }
  function readShortArray_be($receiver, o, count) {
    var array = readShortArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readShortArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 2 | 0;
    }
    return array;
  }
  function readCharArray_be$lambda(closure$count) {
    return function () {
      return Kotlin.charArray(closure$count);
    };
  }
  function readCharArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = toChar(readS16_be($receiver, pos));
    return Unit;
  }
  function readCharArray_be($receiver, o, count) {
    var array = readCharArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readCharArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 2 | 0;
    }
    return array;
  }
  function readIntArray_be$lambda(closure$count) {
    return function () {
      return new Int32Array(closure$count);
    };
  }
  function readIntArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = readS32_be($receiver, pos);
    return Unit;
  }
  function readIntArray_be($receiver, o, count) {
    var array = readIntArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readIntArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 4 | 0;
    }
    return array;
  }
  function readLongArray_be$lambda(closure$count) {
    return function () {
      return Kotlin.longArray(closure$count);
    };
  }
  function readLongArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = readS64_be($receiver, pos);
    return Unit;
  }
  function readLongArray_be($receiver, o, count) {
    var array = readLongArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readLongArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 8 | 0;
    }
    return array;
  }
  function readFloatArray_be$lambda(closure$count) {
    return function () {
      return new Float32Array(closure$count);
    };
  }
  function readFloatArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = readF32_be($receiver, pos);
    return Unit;
  }
  function readFloatArray_be($receiver, o, count) {
    var array = readFloatArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readFloatArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 4 | 0;
    }
    return array;
  }
  function readDoubleArray_be$lambda(closure$count) {
    return function () {
      return new Float64Array(closure$count);
    };
  }
  function readDoubleArray_be$lambda_0($receiver, array, n, pos) {
    array[n] = readF64_be($receiver, pos);
    return Unit;
  }
  function readDoubleArray_be($receiver, o, count) {
    var array = readDoubleArray_be$lambda(count)();
    var pos = o;
    for (var n = 0; n < count; n++) {
      readDoubleArray_be$lambda_0($receiver, array, n, pos);
      pos = pos + 8 | 0;
    }
    return array;
  }
  function UByteArray(data) {
    UByteArray$Companion_getInstance();
    this.data = data;
    this.size = this.data.length;
  }
  function UByteArray$Companion() {
    UByteArray$Companion_instance = this;
  }
  UByteArray$Companion.prototype.invoke_wc9gac$ = defineInlineFunction('kmem-js.com.soywiz.kmem.UByteArray.Companion.invoke_wc9gac$', wrapFunction(function () {
    var toByte = Kotlin.toByte;
    var UByteArray_init = _.com.soywiz.kmem.UByteArray;
    return function (size, init) {
      var array = new Int8Array(size);
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = toByte(init(i));
      }
      return new UByteArray_init(array);
    };
  }));
  UByteArray$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UByteArray$Companion_instance = null;
  function UByteArray$Companion_getInstance() {
    if (UByteArray$Companion_instance === null) {
      new UByteArray$Companion();
    }
    return UByteArray$Companion_instance;
  }
  UByteArray.prototype.get_za3lpa$ = defineInlineFunction('kmem-js.com.soywiz.kmem.UByteArray.get_za3lpa$', function (n) {
    return this.data[n] & 255;
  });
  UByteArray.prototype.set_vux9f0$ = defineInlineFunction('kmem-js.com.soywiz.kmem.UByteArray.set_vux9f0$', wrapFunction(function () {
    var toByte = Kotlin.toByte;
    return function (n, v) {
      this.data[n] = toByte(v);
    };
  }));
  UByteArray.prototype.getu_za3lpa$ = function (n) {
    return this.data[n] & 255;
  };
  UByteArray.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UByteArray',
    interfaces: []
  };
  function UByteArray_init(size, $this) {
    $this = $this || Object.create(UByteArray.prototype);
    UByteArray.call($this, new Int8Array(size));
    return $this;
  }
  function write8($receiver, o, v) {
    $receiver[o] = toByte(v);
  }
  function write8_0($receiver, o, v) {
    $receiver[o] = toByte(v.toInt());
  }
  function write16_LEBE($receiver, o, v, little) {
    little ? write16_le($receiver, o, v) : write16_be($receiver, o, v);
  }
  function write32_LEBE($receiver, o, v, little) {
    little ? write32_le($receiver, o, v) : write32_be($receiver, o, v);
  }
  function write64_LEBE($receiver, o, v, little) {
    little ? write64_le($receiver, o, v) : write64_be($receiver, o, v);
  }
  function writeF32_LEBE($receiver, o, v, little) {
    little ? writeF32_le($receiver, o, v) : writeF32_be($receiver, o, v);
  }
  function writeF64_LEBE($receiver, o, v, little) {
    little ? writeF64_le($receiver, o, v) : writeF64_be($receiver, o, v);
  }
  function write16_le($receiver, o, v) {
    $receiver[o + 0 | 0] = toByte(extract8(v, 0));
    $receiver[o + 1 | 0] = toByte(extract8(v, 8));
  }
  function write24_le($receiver, o, v) {
    $receiver[o + 0 | 0] = toByte(extract8(v, 0));
    $receiver[o + 1 | 0] = toByte(extract8(v, 8));
    $receiver[o + 2 | 0] = toByte(extract8(v, 16));
  }
  function write32_le($receiver, o, v) {
    $receiver[o + 0 | 0] = toByte(extract8(v, 0));
    $receiver[o + 1 | 0] = toByte(extract8(v, 8));
    $receiver[o + 2 | 0] = toByte(extract8(v, 16));
    $receiver[o + 3 | 0] = toByte(extract8(v, 24));
  }
  function write32_le_0($receiver, o, v) {
    write32_le($receiver, o, v.toInt());
  }
  function write64_le($receiver, o, v) {
    write32_le($receiver, o + 0 | 0, v.shiftRightUnsigned(0).toInt());
    write32_le($receiver, o + 4 | 0, v.shiftRightUnsigned(32).toInt());
  }
  function writeF32_le($receiver, o, v) {
    write32_le($receiver, o + 0 | 0, toRawBits(v));
  }
  function writeF64_le($receiver, o, v) {
    write64_le($receiver, o + 0 | 0, toRawBits_0(v));
  }
  function write16_be($receiver, o, v) {
    $receiver[o + 1 | 0] = toByte(extract8(v, 0));
    $receiver[o + 0 | 0] = toByte(extract8(v, 8));
  }
  function write24_be($receiver, o, v) {
    $receiver[o + 2 | 0] = toByte(extract8(v, 0));
    $receiver[o + 1 | 0] = toByte(extract8(v, 8));
    $receiver[o + 0 | 0] = toByte(extract8(v, 16));
  }
  function write32_be($receiver, o, v) {
    $receiver[o + 3 | 0] = toByte(extract8(v, 0));
    $receiver[o + 2 | 0] = toByte(extract8(v, 8));
    $receiver[o + 1 | 0] = toByte(extract8(v, 16));
    $receiver[o + 0 | 0] = toByte(extract8(v, 24));
  }
  function write32_be_0($receiver, o, v) {
    write32_be($receiver, o, v.toInt());
  }
  function write64_be($receiver, o, v) {
    write32_le($receiver, o + 0 | 0, v.shiftRightUnsigned(32).toInt());
    write32_le($receiver, o + 4 | 0, v.shiftRightUnsigned(0).toInt());
  }
  function writeF32_be($receiver, o, v) {
    write32_be($receiver, o + 0 | 0, toRawBits(v));
  }
  function writeF64_be($receiver, o, v) {
    write64_be($receiver, o + 0 | 0, toRawBits_0(v));
  }
  function writeBytes($receiver, o, bytes) {
    arraycopy_17(bytes, 0, $receiver, o, bytes.length);
  }
  function writeBytes_0($receiver, o, bytes) {
    arraycopy_17(bytes.data, 0, $receiver, o, bytes.size);
  }
  function writeTypedArray(o, elementSize, indices, write) {
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write(p, n);
      p = p + elementSize | 0;
    }
  }
  function writeArray_le($receiver, o, array) {
    var indices = get_indices_0(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write16_le($receiver, p, array[n] | 0);
      p = p + 2 | 0;
    }
  }
  function writeArray_le_0($receiver, o, array) {
    var indices = get_indices_1(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write16_le($receiver, p, array[n]);
      p = p + 2 | 0;
    }
  }
  function writeArray_le_1($receiver, o, array) {
    var indices = get_indices_2(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write32_le($receiver, p, array[n]);
      p = p + 4 | 0;
    }
  }
  function writeArray_le_2($receiver, o, array) {
    var indices = get_indices_3(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write64_le($receiver, p, array[n]);
      p = p + 8 | 0;
    }
  }
  function writeArray_le_3($receiver, o, array) {
    var indices = get_indices_4(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      writeF32_le($receiver, p, array[n]);
      p = p + 4 | 0;
    }
  }
  function writeArray_le_4($receiver, o, array) {
    var indices = get_indices_5(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      writeF64_le($receiver, p, array[n]);
      p = p + 8 | 0;
    }
  }
  function writeArray_be($receiver, o, array) {
    var indices = get_indices_0(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write16_be($receiver, p, array[n] | 0);
      p = p + 2 | 0;
    }
  }
  function writeArray_be_0($receiver, o, array) {
    var indices = get_indices_1(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write16_be($receiver, p, array[n]);
      p = p + 2 | 0;
    }
  }
  function writeArray_be_1($receiver, o, array) {
    var indices = get_indices_2(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write32_be($receiver, p, array[n]);
      p = p + 4 | 0;
    }
  }
  function writeArray_be_2($receiver, o, array) {
    var indices = get_indices_3(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      write64_be($receiver, p, array[n]);
      p = p + 8 | 0;
    }
  }
  function writeArray_be_3($receiver, o, array) {
    var indices = get_indices_4(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      writeF32_be($receiver, p, array[n]);
      p = p + 4 | 0;
    }
  }
  function writeArray_be_4($receiver, o, array) {
    var indices = get_indices_5(array);
    var tmp$, tmp$_0, tmp$_1;
    var p = o;
    tmp$ = indices.first;
    tmp$_0 = indices.last;
    tmp$_1 = indices.step;
    for (var n = tmp$; n <= tmp$_0; n += tmp$_1) {
      writeF64_be($receiver, p, array[n]);
      p = p + 8 | 0;
    }
  }
  var MemBufferAlloc = defineInlineFunction('kmem-js.com.soywiz.kmem.MemBufferAlloc_za3lpa$', wrapFunction(function () {
    var ArrayBuffer_init = ArrayBuffer;
    return function (size) {
      return new ArrayBuffer_init(size + 15 & -16);
    };
  }));
  var MemBufferWrap = defineInlineFunction('kmem-js.com.soywiz.kmem.MemBufferWrap_fqrh44$', function (array) {
    return array.buffer;
  });
  var get_size = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_qfdq9h$', function ($receiver) {
    return $receiver.byteLength;
  });
  var _sliceInt8Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem._sliceInt8Buffer_3gn6rj$', wrapFunction(function () {
    var Int8Array_init = Int8Array;
    return function ($receiver, offset, size) {
      return new Int8Array_init($receiver, offset * 1 | 0, size);
    };
  }));
  var _sliceInt16Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem._sliceInt16Buffer_3gn6rj$', wrapFunction(function () {
    var Int16Array_init = Int16Array;
    return function ($receiver, offset, size) {
      return new Int16Array_init($receiver, offset * 2 | 0, size);
    };
  }));
  var _sliceInt32Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem._sliceInt32Buffer_3gn6rj$', wrapFunction(function () {
    var Int32Array_init = Int32Array;
    return function ($receiver, offset, size) {
      return new Int32Array_init($receiver, offset * 4 | 0, size);
    };
  }));
  var _sliceFloat32Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem._sliceFloat32Buffer_3gn6rj$', wrapFunction(function () {
    var Float32Array_init = Float32Array;
    return function ($receiver, offset, size) {
      return new Float32Array_init($receiver, offset * 4 | 0, size);
    };
  }));
  var _sliceFloat64Buffer = defineInlineFunction('kmem-js.com.soywiz.kmem._sliceFloat64Buffer_3gn6rj$', wrapFunction(function () {
    var Float64Array_init = Float64Array;
    return function ($receiver, offset, size) {
      return new Float64Array_init($receiver, offset * 8 | 0, size);
    };
  }));
  function getData($receiver) {
    return new DataView($receiver);
  }
  var get_mem = defineInlineFunction('kmem-js.com.soywiz.kmem.get_mem_t4ci45$', function ($receiver) {
    return $receiver.buffer;
  });
  function getByte($receiver, index) {
    return $receiver.getInt8(index);
  }
  function setByte($receiver, index, value) {
    $receiver.setInt8(index, value);
  }
  function getShort($receiver, index) {
    return $receiver.getInt16(index, true);
  }
  function setShort($receiver, index, value) {
    $receiver.setInt16(index, value, true);
  }
  function getInt($receiver, index) {
    return $receiver.getInt32(index, true);
  }
  function setInt($receiver, index, value) {
    $receiver.setInt32(index, value, true);
  }
  function getFloat($receiver, index) {
    return $receiver.getFloat32(index, true);
  }
  function setFloat($receiver, index, value) {
    $receiver.setFloat32(index, value, true);
  }
  function getDouble($receiver, index) {
    return $receiver.getFloat64(index, true);
  }
  function setDouble($receiver, index, value) {
    $receiver.setFloat64(index, value, true);
  }
  var get_mem_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_mem_1c7w7g$', function ($receiver) {
    return $receiver.buffer;
  });
  var get_offset = defineInlineFunction('kmem-js.com.soywiz.kmem.get_offset_1c7w7g$', function ($receiver) {
    return $receiver.byteOffset / 1 | 0;
  });
  var get_size_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_1c7w7g$', function ($receiver) {
    return $receiver.length;
  });
  var get_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_xri1zq$', function ($receiver, index) {
    return $receiver[index];
  });
  var set = defineInlineFunction('kmem-js.com.soywiz.kmem.set_wq71gh$', wrapFunction(function () {
    return function ($receiver, index, value) {
      $receiver[index] = value;
    };
  }));
  var get_mem_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_mem_1qrwyz$', function ($receiver) {
    return $receiver.buffer;
  });
  var get_offset_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_offset_1qrwyz$', function ($receiver) {
    return $receiver.byteOffset / 2 | 0;
  });
  var get_size_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_1qrwyz$', function ($receiver) {
    return $receiver.length;
  });
  var get_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_cwlqq1$', function ($receiver, index) {
    return $receiver[index];
  });
  var set_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.set_3szanw$', wrapFunction(function () {
    return function ($receiver, index, value) {
      $receiver[index] = value;
    };
  }));
  var get_mem_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_mem_2t43qp$', function ($receiver) {
    return $receiver.buffer;
  });
  var get_offset_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_offset_2t43qp$', function ($receiver) {
    return $receiver.byteOffset / 4 | 0;
  });
  var get_size_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_2t43qp$', function ($receiver) {
    return $receiver.length;
  });
  var get_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_6ngfjl$', function ($receiver, index) {
    return $receiver[index];
  });
  var set_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.set_yyuw59$', wrapFunction(function () {
    return function ($receiver, index, value) {
      $receiver[index] = value;
    };
  }));
  var get_mem_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_mem_948t6k$', function ($receiver) {
    return $receiver.buffer;
  });
  var get_offset_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_offset_948t6k$', function ($receiver) {
    return $receiver.byteOffset / 4 | 0;
  });
  var get_size_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_948t6k$', function ($receiver) {
    return $receiver.length;
  });
  var get_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_vvlk2q$', function ($receiver, index) {
    return $receiver[index];
  });
  var set_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.set_rpd3xf$', wrapFunction(function () {
    return function ($receiver, index, value) {
      $receiver[index] = value;
    };
  }));
  var get_mem_4 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_mem_h4bb51$', function ($receiver) {
    return $receiver.buffer;
  });
  var get_offset_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_offset_h4bb51$', function ($receiver) {
    return $receiver.byteOffset / 8 | 0;
  });
  var get_size_4 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_size_h4bb51$', function ($receiver) {
    return $receiver.length;
  });
  var get_4 = defineInlineFunction('kmem-js.com.soywiz.kmem.get_yg2kxp$', function ($receiver, index) {
    return $receiver[index];
  });
  var set_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.set_ogqgs1$', wrapFunction(function () {
    return function ($receiver, index, value) {
      $receiver[index] = value;
    };
  }));
  var asInt8Array = defineInlineFunction('kmem-js.com.soywiz.kmem.asInt8Array_964n91$', function ($receiver) {
    return $receiver;
  });
  var asTyped = defineInlineFunction('kmem-js.com.soywiz.kmem.asTyped_964n91$', function ($receiver) {
    return $receiver;
  });
  var asInt16Array = defineInlineFunction('kmem-js.com.soywiz.kmem.asInt16Array_i2lc79$', function ($receiver) {
    return $receiver;
  });
  var asTyped_0 = defineInlineFunction('kmem-js.com.soywiz.kmem.asTyped_i2lc79$', function ($receiver) {
    return $receiver;
  });
  var asInt32Array = defineInlineFunction('kmem-js.com.soywiz.kmem.asInt32Array_tmsbgo$', function ($receiver) {
    return $receiver;
  });
  var asTyped_1 = defineInlineFunction('kmem-js.com.soywiz.kmem.asTyped_tmsbgo$', function ($receiver) {
    return $receiver;
  });
  var asFloat32Array = defineInlineFunction('kmem-js.com.soywiz.kmem.asFloat32Array_rjqryz$', function ($receiver) {
    return $receiver;
  });
  var asTyped_2 = defineInlineFunction('kmem-js.com.soywiz.kmem.asTyped_rjqryz$', function ($receiver) {
    return $receiver;
  });
  var asFloat64Array = defineInlineFunction('kmem-js.com.soywiz.kmem.asFloat64Array_bvy38s$', function ($receiver) {
    return $receiver;
  });
  var asTyped_3 = defineInlineFunction('kmem-js.com.soywiz.kmem.asTyped_bvy38s$', function ($receiver) {
    return $receiver;
  });
  function arraycopy_14(src, srcPos, dst, dstPos, size) {
    if (src === dst && srcPos >= dstPos) {
      for (var n = 0; n < size; n++)
        dst[dstPos + n | 0] = src[srcPos + n | 0];
    }
     else {
      for (var n_0 = size - 1 | 0; n_0 >= 0; n_0--)
        dst[dstPos + n_0 | 0] = src[srcPos + n_0 | 0];
    }
  }
  function arraycopy_15(src, srcPos, dst, dstPos, size) {
    if (src === dst && srcPos >= dstPos) {
      for (var n = 0; n < size; n++)
        dst[dstPos + n | 0] = src[srcPos + n | 0];
    }
     else {
      for (var n_0 = size - 1 | 0; n_0 >= 0; n_0--)
        dst[dstPos + n_0 | 0] = src[srcPos + n_0 | 0];
    }
  }
  function arraycopy_16(src, srcPos, dst, dstPos, size) {
    if (src === dst && srcPos >= dstPos) {
      for (var n = 0; n < size; n++)
        dst[dstPos + n | 0] = src[srcPos + n | 0];
    }
     else {
      for (var n_0 = size - 1 | 0; n_0 >= 0; n_0--)
        dst[dstPos + n_0 | 0] = src[srcPos + n_0 | 0];
    }
  }
  function arraycopy_17(src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_18(src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_19(src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_20(src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_21(src, srcPos, dst, dstPos, size) {
    dst.set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_22(src, srcPos, dst, dstPos, size) {
    (new Int8Array(dst, dstPos)).set(new Int8Array(src, srcPos, size), 0);
  }
  function arraycopy_23(src, srcPos, dst, dstPos, size) {
    (new Int8Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_24(src, srcPos, dst, dstPos, size) {
    dst.set((new Int8Array_init(src, 0 * 1 | 0, src.byteLength / 1 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_25(src, srcPos, dst, dstPos, size) {
    (new Int16Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_26(src, srcPos, dst, dstPos, size) {
    dst.set((new Int16Array_init(src, 0 * 2 | 0, src.byteLength / 2 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_27(src, srcPos, dst, dstPos, size) {
    (new Int32Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_28(src, srcPos, dst, dstPos, size) {
    dst.set((new Int32Array_init(src, 0 * 4 | 0, src.byteLength / 4 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_29(src, srcPos, dst, dstPos, size) {
    (new Float32Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_30(src, srcPos, dst, dstPos, size) {
    dst.set((new Float32Array_init(src, 0 * 4 | 0, src.byteLength / 4 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_31(src, srcPos, dst, dstPos, size) {
    (new Float64Array(dst)).set(src.subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function arraycopy_32(src, srcPos, dst, dstPos, size) {
    dst.set((new Float64Array_init(src, 0 * 8 | 0, src.byteLength / 8 | 0)).subarray(srcPos, srcPos + size | 0), dstPos);
  }
  function _fill(array, value, start, end) {
    for (var n = start; n < end; n++)
      array[n] = value;
  }
  function _fill_0(array, value, start, end) {
    for (var n = start; n < end; n++)
      array[n] = value;
  }
  function _fill_1(array, value, start, end) {
    for (var n = start; n < end; n++)
      array[n] = value;
  }
  var _fill_2 = defineInlineFunction('kmem-js.com.soywiz.kmem._fill_diwe25$', wrapFunction(function () {
    return function (array, value, start, end) {
      array.fill(value, start, end);
    };
  }));
  var _fill_3 = defineInlineFunction('kmem-js.com.soywiz.kmem._fill_38ja29$', wrapFunction(function () {
    return function (array, value, start, end) {
      array.fill(value, start, end);
    };
  }));
  var _fill_4 = defineInlineFunction('kmem-js.com.soywiz.kmem._fill_7lcbvb$', wrapFunction(function () {
    return function (array, value, start, end) {
      array.fill(value, start, end);
    };
  }));
  var _fill_5 = defineInlineFunction('kmem-js.com.soywiz.kmem._fill_9c50fl$', wrapFunction(function () {
    return function (array, value, start, end) {
      array.fill(value, start, end);
    };
  }));
  var _fill_6 = defineInlineFunction('kmem-js.com.soywiz.kmem._fill_7e20el$', wrapFunction(function () {
    return function (array, value, start, end) {
      array.fill(value, start, end);
    };
  }));
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$kmem = package$soywiz.kmem || (package$soywiz.kmem = {});
  package$kmem.reinterpretAsInt_81szk$ = reinterpretAsInt;
  package$kmem.reinterpretAsFloat_s8ev3n$ = reinterpretAsFloat;
  package$kmem.reinterpretAsLong_yrwdxr$ = reinterpretAsLong;
  package$kmem.reinterpretAsDouble_mts6qi$ = reinterpretAsDouble;
  package$kmem.rotateLeft_dqglrj$ = rotateLeft;
  package$kmem.rotateRight_dqglrj$ = rotateRight;
  package$kmem.reverseBytes_s8ev3n$ = reverseBytes;
  package$kmem.reverseBytes_5vcgdc$ = reverseBytes_0;
  package$kmem.reverseBytes_myv2d0$ = reverseBytes_1;
  package$kmem.reverseBytes_mts6qi$ = reverseBytes_2;
  package$kmem.reverseBits_s8ev3n$ = reverseBits;
  package$kmem.countLeadingZeros_s8ev3n$ = countLeadingZeros;
  package$kmem.countTrailingZeros_s8ev3n$ = countTrailingZeros;
  package$kmem.countLeadingOnes_s8ev3n$ = countLeadingOnes;
  package$kmem.countTrailingOnes_s8ev3n$ = countTrailingOnes;
  package$kmem.signExtend_dqglrj$ = signExtend;
  package$kmem.signExtend8_s8ev3n$ = signExtend8;
  package$kmem.signExtend16_s8ev3n$ = signExtend16;
  package$kmem.signExtend_if0zpk$ = signExtend_0;
  package$kmem.signExtend8_mts6qi$ = signExtend8_0;
  package$kmem.signExtend16_mts6qi$ = signExtend16_0;
  package$kmem.toUnsigned_mz3mee$ = toUnsigned;
  package$kmem.toUnsigned_s8ev3n$ = toUnsigned_0;
  package$kmem.mask_s8ev3n$ = mask;
  package$kmem.mask_mts6qi$ = mask_0;
  package$kmem.toUInt_s8ev3n$ = toUInt;
  $$importsForInline$$['kmem-js'] = _;
  package$kmem.getBits_e4yvb3$ = getBits;
  package$kmem.getBit_dqglrj$ = getBit;
  package$kmem.extract_e4yvb3$ = extract;
  package$kmem.extract_dqglrj$ = extract_0;
  package$kmem.extract8_dqglrj$ = extract8;
  package$kmem.extract16_dqglrj$ = extract16;
  package$kmem.extractSigned_e4yvb3$ = extractSigned;
  package$kmem.extract8Signed_dqglrj$ = extract8Signed;
  package$kmem.extract16Signed_dqglrj$ = extract16Signed;
  package$kmem.extractScaled_4684dr$ = extractScaled;
  package$kmem.extractScaledf01_e4yvb3$ = extractScaledf01;
  package$kmem.extractScaledFF_e4yvb3$ = extractScaledFF;
  package$kmem.extractScaledFFDefault_4684dr$ = extractScaledFFDefault;
  package$kmem.insert_4684dr$ = insert;
  package$kmem.insert8_e4yvb3$ = insert8;
  package$kmem.insert_kvkj6u$ = insert_0;
  package$kmem.insertScaled_oxkt1b$ = insertScaled;
  package$kmem.insertScaledFF_4684dr$ = insertScaledFF;
  package$kmem.rint_14dthe$ = rint;
  package$kmem.signum_14dthe$ = signum;
  package$kmem.clamp_e4yvb3$ = clamp;
  package$kmem.clamp_ekzx8g$ = clamp_0;
  package$kmem.clamp_nig4hr$ = clamp_1;
  package$kmem.clamp_wj6e7o$ = clamp_2;
  package$kmem.clamp01_yrwdxr$ = clamp01;
  package$kmem.isAlmostZero_81szk$ = isAlmostZero;
  package$kmem.isNanOrInfinite_81szk$ = isNanOrInfinite;
  package$kmem.ult_dqglrj$ = ult;
  package$kmem.ule_dqglrj$ = ule;
  package$kmem.ugt_dqglrj$ = ugt;
  package$kmem.uge_dqglrj$ = uge;
  package$kmem.extractBool_dqglrj$ = extractBool;
  package$kmem.hasFlag_dqglrj$ = hasFlag;
  package$kmem.get_unsigned_s8ev3n$ = get_unsigned;
  Object.defineProperty(package$kmem, 'BitUtils', {
    get: BitUtils_getInstance
  });
  package$kmem.compareToUnsigned_dqglrj$ = compareToUnsigned;
  Object.defineProperty(package$kmem, 'LongEx', {
    get: LongEx_getInstance
  });
  Object.defineProperty(package$kmem, 'IntEx', {
    get: IntEx_getInstance
  });
  package$kmem.udiv_dqglrj$ = udiv;
  package$kmem.urem_dqglrj$ = urem;
  package$kmem.udiv_2p08ub$ = udiv_0;
  package$kmem.urem_2p08ub$ = urem_0;
  package$kmem.divCeil_dqglrj$ = divCeil;
  package$kmem.umod_dqglrj$ = umod;
  package$kmem.umod_38ydlf$ = umod_0;
  package$kmem.ilog2_za3lpa$ = ilog2;
  package$kmem.imul32_64_nps3vt$ = imul32_64;
  package$kmem.umul32_64_nps3vt$ = umul32_64;
  package$kmem.toIntCeil_yrwdxr$ = toIntCeil;
  package$kmem.toIntFloor_yrwdxr$ = toIntFloor;
  package$kmem.toIntRound_yrwdxr$ = toIntRound;
  package$kmem.get_isOdd_s8ev3n$ = get_isOdd;
  package$kmem.get_isEven_s8ev3n$ = get_isEven;
  package$kmem.convertRange_legt9$ = convertRange;
  package$kmem.convertRangeClamped_legt9$ = convertRangeClamped;
  package$kmem.convertRange_dvkv0a$ = convertRange_0;
  package$kmem.nextAlignedTo_dqglrj$ = nextAlignedTo;
  package$kmem.nextAlignedTo_2p08ub$ = nextAlignedTo_0;
  package$kmem.prevAlignedTo_dqglrj$ = prevAlignedTo;
  package$kmem.prevAlignedTo_2p08ub$ = prevAlignedTo_0;
  package$kmem.isAlignedTo_dqglrj$ = isAlignedTo;
  package$kmem.toIntSafe_mts6qi$ = toIntSafe;
  package$kmem.toIntClamp_jfhjuu$ = toIntClamp;
  package$kmem.toUintClamp_jfhjuu$ = toUintClamp;
  package$kmem.and_bv3xan$ = and;
  package$kmem.and_798l30$ = and_0;
  package$kmem.and_di2vk2$ = and_1;
  package$kmem.or_798l30$ = or;
  package$kmem.or_di2vk2$ = or_0;
  package$kmem.or_mvfjzl$ = or_1;
  package$kmem.shl_798l30$ = shl;
  package$kmem.shl_di2vk2$ = shl_0;
  package$kmem.shr_798l30$ = shr;
  package$kmem.shr_di2vk2$ = shr_0;
  package$kmem.ushr_798l30$ = ushr;
  package$kmem.ushr_di2vk2$ = ushr_0;
  package$kmem.toInt_1v8dcc$ = toInt;
  package$kmem.get_niceStr_81szk$ = get_niceStr;
  package$kmem.get_niceStr_yrwdxr$ = get_niceStr_0;
  package$kmem.get_nextPowerOfTwo_s8ev3n$ = get_nextPowerOfTwo;
  package$kmem.get_isPowerOfTwo_s8ev3n$ = get_isPowerOfTwo;
  package$kmem.ByteArrayBuffer_init_za3lpa$ = ByteArrayBuffer_init;
  package$kmem.ByteArrayBuffer = ByteArrayBuffer;
  Object.defineProperty(ByteArraySlice, 'Companion', {
    get: ByteArraySlice$Companion_getInstance
  });
  package$kmem.ByteArraySlice = ByteArraySlice;
  package$kmem.toByteArraySlice_964n91$ = toByteArraySlice;
  package$kmem.contains_ndt7zj$ = contains;
  package$kmem.indexOf_ndt7zj$ = indexOf;
  Object.defineProperty(Float16, 'Companion', {
    get: Float16$Companion_getInstance
  });
  package$kmem.Float16_init_14dthe$ = Float16_init;
  package$kmem.Float16 = Float16;
  package$kmem.FloatArrayFromIntArray = FloatArrayFromIntArray;
  package$kmem.asFloatArray_tmsbgo$ = asFloatArray;
  Object.defineProperty(package$kmem, 'Kmem', {
    get: Kmem_getInstance
  });
  package$kmem.arraycopyAny_iwivz8$ = arraycopyAny;
  package$kmem.DataBufferAlloc_za3lpa$ = DataBufferAlloc;
  package$kmem.sliceInt8Buffer_3gn6rj$ = sliceInt8Buffer;
  package$kmem.sliceInt16Buffer_3gn6rj$ = sliceInt16Buffer;
  package$kmem.sliceInt32Buffer_3gn6rj$ = sliceInt32Buffer;
  package$kmem.sliceFloat32Buffer_3gn6rj$ = sliceFloat32Buffer;
  package$kmem.sliceFloat64Buffer_3gn6rj$ = sliceFloat64Buffer;
  package$kmem.sliceUint8Buffer_3gn6rj$ = sliceUint8Buffer;
  package$kmem.sliceUint16Buffer_3gn6rj$ = sliceUint16Buffer;
  package$kmem.sliceInt8BufferByteOffset_3gn6rj$ = sliceInt8BufferByteOffset;
  package$kmem.sliceInt16BufferByteOffset_3gn6rj$ = sliceInt16BufferByteOffset;
  package$kmem.sliceInt32BufferByteOffset_3gn6rj$ = sliceInt32BufferByteOffset;
  package$kmem.sliceFloat32BufferByteOffset_3gn6rj$ = sliceFloat32BufferByteOffset;
  package$kmem.sliceFloat64BufferByteOffset_3gn6rj$ = sliceFloat64BufferByteOffset;
  package$kmem.sliceUint8BufferByteOffset_3gn6rj$ = sliceUint8BufferByteOffset;
  package$kmem.sliceUint16BufferByteOffset_3gn6rj$ = sliceUint16BufferByteOffset;
  package$kmem.asInt8Buffer_qfdq9h$ = asInt8Buffer;
  package$kmem.asInt16Buffer_qfdq9h$ = asInt16Buffer;
  package$kmem.asInt32Buffer_qfdq9h$ = asInt32Buffer;
  package$kmem.asFloat32Buffer_qfdq9h$ = asFloat32Buffer;
  package$kmem.asFloat64Buffer_qfdq9h$ = asFloat64Buffer;
  package$kmem.MemBufferAlloc_za3lpa$ = MemBufferAlloc;
  package$kmem.Int8BufferAlloc_za3lpa$ = Int8BufferAlloc;
  package$kmem.subarray_o5cym0$ = subarray;
  package$kmem.Int16BufferAlloc_za3lpa$ = Int16BufferAlloc;
  package$kmem.subarray_4t3t55$ = subarray_0;
  package$kmem.Int32BufferAlloc_za3lpa$ = Int32BufferAlloc;
  package$kmem.subarray_yyuw59$ = subarray_1;
  package$kmem.Float32BufferAlloc_za3lpa$ = Float32BufferAlloc;
  package$kmem.subarray_ae5d4g$ = subarray_2;
  package$kmem.Float64BufferAlloc_za3lpa$ = Float64BufferAlloc;
  package$kmem.subarray_yobqq7$ = subarray_3;
  package$kmem.arraycopy_uwef9a$ = arraycopy;
  package$kmem.arraycopy_8tjh9j$ = arraycopy_0;
  package$kmem.arraycopy_qkjr37$ = arraycopy_1;
  package$kmem.arraycopy_158rwy$ = arraycopy_2;
  package$kmem.arraycopy_4z3iam$ = arraycopy_3;
  package$kmem.arraycopy_ygklgy$ = arraycopy_4;
  package$kmem.arraycopy_180aji$ = arraycopy_5;
  package$kmem.arraycopy_ou7pqt$ = arraycopy_6;
  package$kmem.arraycopy_qjgkt5$ = arraycopy_7;
  package$kmem.arraycopy_kf4lg$ = arraycopy_8;
  package$kmem.arraycopy_3broed$ = arraycopy_9;
  package$kmem.arraycopy_clb6nt$ = arraycopy_10;
  package$kmem.arraycopy_y3efd2$ = arraycopy_11;
  package$kmem.arraycopy_9x1f59$ = arraycopy_12;
  package$kmem.arraycopy_pxmij7$ = arraycopy_13;
  package$kmem.fill_jfbbbd$ = fill;
  package$kmem.fill_py0txo$ = fill_0;
  package$kmem.fill_wp4zxy$ = fill_1;
  package$kmem._fill_diwe25$ = _fill_2;
  package$kmem.fill_6mk3ue$ = fill_2;
  package$kmem._fill_38ja29$ = _fill_3;
  package$kmem.fill_htcctw$ = fill_3;
  package$kmem._fill_7lcbvb$ = _fill_4;
  package$kmem.fill_tpuxuu$ = fill_4;
  package$kmem._fill_9c50fl$ = _fill_5;
  package$kmem.fill_nwy378$ = fill_5;
  package$kmem._fill_7e20el$ = _fill_6;
  package$kmem.fill_x4f2cq$ = fill_6;
  Object.defineProperty(package$kmem, 'Float64Buffer_BYTES_PER_ELEMENT', {
    get: function () {
      return Float64Buffer_BYTES_PER_ELEMENT;
    }
  });
  Object.defineProperty(package$kmem, 'Float32Buffer_BYTES_PER_ELEMENT', {
    get: function () {
      return Float32Buffer_BYTES_PER_ELEMENT;
    }
  });
  Object.defineProperty(package$kmem, 'Int32Buffer_BYTES_PER_ELEMENT', {
    get: function () {
      return Int32Buffer_BYTES_PER_ELEMENT;
    }
  });
  Object.defineProperty(package$kmem, 'Int16Buffer_BYTES_PER_ELEMENT', {
    get: function () {
      return Int16Buffer_BYTES_PER_ELEMENT;
    }
  });
  Object.defineProperty(package$kmem, 'Int8Buffer_BYTES_PER_ELEMENT', {
    get: function () {
      return Int8Buffer_BYTES_PER_ELEMENT;
    }
  });
  Object.defineProperty(package$kmem, 'Uint8Buffer_BYTES_PER_ELEMENT', {
    get: function () {
      return Uint8Buffer_BYTES_PER_ELEMENT;
    }
  });
  Object.defineProperty(package$kmem, 'Uint16Buffer_BYTES_PER_ELEMENT', {
    get: function () {
      return Uint16Buffer_BYTES_PER_ELEMENT;
    }
  });
  package$kmem.NewUint8Buffer_qmgm5g$ = NewUint8Buffer;
  package$kmem.NewUint16Buffer_qmgm5g$ = NewUint16Buffer;
  package$kmem.NewInt8Buffer_qmgm5g$ = NewInt8Buffer;
  package$kmem.NewInt16Buffer_qmgm5g$ = NewInt16Buffer;
  package$kmem.NewInt32Buffer_qmgm5g$ = NewInt32Buffer;
  package$kmem.NewFloat32Buffer_qmgm5g$ = NewFloat32Buffer;
  package$kmem.NewFloat64Buffer_qmgm5g$ = NewFloat64Buffer;
  Object.defineProperty(package$kmem, 'KMEM_VERSION_8be2vx$', {
    get: function () {
      return KMEM_VERSION;
    }
  });
  Object.defineProperty(KmlNativeBuffer, 'Companion', {
    get: KmlNativeBuffer$Companion_getInstance
  });
  package$kmem.KmlNativeBuffer_init_za3lpa$ = KmlNativeBuffer_init;
  package$kmem.KmlNativeBuffer = KmlNativeBuffer;
  Object.defineProperty(Uint8Buffer, 'Companion', {
    get: Uint8Buffer$Companion_getInstance
  });
  package$kmem.Uint8Buffer = Uint8Buffer;
  Object.defineProperty(Uint16Buffer, 'Companion', {
    get: Uint16Buffer$Companion_getInstance
  });
  package$kmem.Uint16Buffer = Uint16Buffer;
  package$kmem.Uint8BufferAlloc_za3lpa$ = Uint8BufferAlloc;
  package$kmem.Uint16BufferAlloc_za3lpa$ = Uint16BufferAlloc;
  package$kmem.kmlNativeBuffer_poguz7$ = kmlNativeBuffer;
  package$kmem.setFloats_x5rszg$ = setFloats;
  package$kmem.Pointer = Pointer;
  package$kmem.readU8_mrm5p$ = readU8;
  package$kmem.readU16_le_mrm5p$ = readU16_le;
  package$kmem.readU24_le_mrm5p$ = readU24_le;
  package$kmem.readU32_le_mrm5p$ = readU32_le;
  package$kmem.readU16_be_mrm5p$ = readU16_be;
  package$kmem.readU24_be_mrm5p$ = readU24_be;
  package$kmem.readU32_be_mrm5p$ = readU32_be;
  package$kmem.readS8_mrm5p$ = readS8;
  package$kmem.readS16_le_mrm5p$ = readS16_le;
  package$kmem.readS24_le_mrm5p$ = readS24_le;
  package$kmem.readS32_le_mrm5p$ = readS32_le;
  package$kmem.readS64_le_mrm5p$ = readS64_le;
  package$kmem.readF32_le_mrm5p$ = readF32_le;
  package$kmem.readF64_le_mrm5p$ = readF64_le;
  package$kmem.readS16_be_mrm5p$ = readS16_be;
  package$kmem.readS24_be_mrm5p$ = readS24_be;
  package$kmem.readS32_be_mrm5p$ = readS32_be;
  package$kmem.readS64_be_mrm5p$ = readS64_be;
  package$kmem.readF32_be_mrm5p$ = readF32_be;
  package$kmem.readF64_be_mrm5p$ = readF64_be;
  package$kmem.readS16_LEBE_v6bsu2$ = readS16_LEBE;
  package$kmem.readS32_LEBE_v6bsu2$ = readS32_LEBE;
  package$kmem.readS64_LEBE_v6bsu2$ = readS64_LEBE;
  package$kmem.readF32_LEBE_v6bsu2$ = readF32_LEBE;
  package$kmem.readF64_LEBE_v6bsu2$ = readF64_LEBE;
  package$kmem.readByteArray_ietg8x$ = readByteArray;
  package$kmem.readShortArray_le_ietg8x$ = readShortArray_le;
  package$kmem.readCharArray_le_ietg8x$ = readCharArray_le;
  package$kmem.readIntArray_le_ietg8x$ = readIntArray_le;
  package$kmem.readLongArray_le_ietg8x$ = readLongArray_le;
  package$kmem.readFloatArray_le_ietg8x$ = readFloatArray_le;
  package$kmem.readDoubleArray_le_ietg8x$ = readDoubleArray_le;
  package$kmem.readShortArray_be_ietg8x$ = readShortArray_be;
  package$kmem.readCharArray_be_ietg8x$ = readCharArray_be;
  package$kmem.readIntArray_be_ietg8x$ = readIntArray_be;
  package$kmem.readLongArray_be_ietg8x$ = readLongArray_be;
  package$kmem.readFloatArray_be_ietg8x$ = readFloatArray_be;
  package$kmem.readDoubleArray_be_ietg8x$ = readDoubleArray_be;
  Object.defineProperty(UByteArray, 'Companion', {
    get: UByteArray$Companion_getInstance
  });
  package$kmem.UByteArray_init_za3lpa$ = UByteArray_init;
  package$kmem.UByteArray = UByteArray;
  package$kmem.write8_ietg8x$ = write8;
  package$kmem.write8_2iihii$ = write8_0;
  package$kmem.write16_LEBE_vahp5y$ = write16_LEBE;
  package$kmem.write32_LEBE_vahp5y$ = write32_LEBE;
  package$kmem.write64_LEBE_zb9jod$ = write64_LEBE;
  package$kmem.writeF32_LEBE_wimvbt$ = writeF32_LEBE;
  package$kmem.writeF64_LEBE_nq0ryw$ = writeF64_LEBE;
  package$kmem.write16_le_ietg8x$ = write16_le;
  package$kmem.write24_le_ietg8x$ = write24_le;
  package$kmem.write32_le_ietg8x$ = write32_le;
  package$kmem.write32_le_2iihii$ = write32_le_0;
  package$kmem.write64_le_2iihii$ = write64_le;
  package$kmem.writeF32_le_6tgd4e$ = writeF32_le;
  package$kmem.writeF64_le_2mkvlt$ = writeF64_le;
  package$kmem.write16_be_ietg8x$ = write16_be;
  package$kmem.write24_be_ietg8x$ = write24_be;
  package$kmem.write32_be_ietg8x$ = write32_be;
  package$kmem.write32_be_2iihii$ = write32_be_0;
  package$kmem.write64_be_2iihii$ = write64_be;
  package$kmem.writeF32_be_6tgd4e$ = writeF32_be;
  package$kmem.writeF64_be_2mkvlt$ = writeF64_be;
  package$kmem.writeBytes_cinhdp$ = writeBytes;
  package$kmem.writeBytes_ote1qv$ = writeBytes_0;
  package$kmem.writeArray_le_ns39l7$ = writeArray_le;
  package$kmem.writeArray_le_744o0l$ = writeArray_le_0;
  package$kmem.writeArray_le_ir5l5k$ = writeArray_le_1;
  package$kmem.writeArray_le_nitnbj$ = writeArray_le_2;
  package$kmem.writeArray_le_l7896z$ = writeArray_le_3;
  package$kmem.writeArray_le_t2mdne$ = writeArray_le_4;
  package$kmem.writeArray_be_ns39l7$ = writeArray_be;
  package$kmem.writeArray_be_744o0l$ = writeArray_be_0;
  package$kmem.writeArray_be_ir5l5k$ = writeArray_be_1;
  package$kmem.writeArray_be_nitnbj$ = writeArray_be_2;
  package$kmem.writeArray_be_l7896z$ = writeArray_be_3;
  package$kmem.writeArray_be_t2mdne$ = writeArray_be_4;
  package$kmem.MemBufferWrap_fqrh44$ = MemBufferWrap;
  package$kmem.get_size_qfdq9h$ = get_size;
  package$kmem._sliceInt8Buffer_3gn6rj$ = _sliceInt8Buffer;
  package$kmem._sliceInt16Buffer_3gn6rj$ = _sliceInt16Buffer;
  package$kmem._sliceInt32Buffer_3gn6rj$ = _sliceInt32Buffer;
  package$kmem._sliceFloat32Buffer_3gn6rj$ = _sliceFloat32Buffer;
  package$kmem._sliceFloat64Buffer_3gn6rj$ = _sliceFloat64Buffer;
  package$kmem.getData_qfdq9h$ = getData;
  package$kmem.get_mem_t4ci45$ = get_mem;
  package$kmem.getByte_gt8xkd$ = getByte;
  package$kmem.setByte_pfef92$ = setByte;
  package$kmem.getShort_gt8xkd$ = getShort;
  package$kmem.setShort_76832m$ = setShort;
  package$kmem.getInt_gt8xkd$ = getInt;
  package$kmem.setInt_61xgu7$ = setInt;
  package$kmem.getFloat_gt8xkd$ = getFloat;
  package$kmem.setFloat_6z5awe$ = setFloat;
  package$kmem.getDouble_gt8xkd$ = getDouble;
  package$kmem.setDouble_29w7i7$ = setDouble;
  package$kmem.get_mem_1c7w7g$ = get_mem_0;
  package$kmem.get_offset_1c7w7g$ = get_offset;
  package$kmem.get_size_1c7w7g$ = get_size_0;
  package$kmem.get_xri1zq$ = get_0;
  package$kmem.set_wq71gh$ = set;
  package$kmem.get_mem_1qrwyz$ = get_mem_1;
  package$kmem.get_offset_1qrwyz$ = get_offset_0;
  package$kmem.get_size_1qrwyz$ = get_size_1;
  package$kmem.get_cwlqq1$ = get_1;
  package$kmem.set_3szanw$ = set_0;
  package$kmem.get_mem_2t43qp$ = get_mem_2;
  package$kmem.get_offset_2t43qp$ = get_offset_1;
  package$kmem.get_size_2t43qp$ = get_size_2;
  package$kmem.get_6ngfjl$ = get_2;
  package$kmem.set_yyuw59$ = set_1;
  package$kmem.get_mem_948t6k$ = get_mem_3;
  package$kmem.get_offset_948t6k$ = get_offset_2;
  package$kmem.get_size_948t6k$ = get_size_3;
  package$kmem.get_vvlk2q$ = get_3;
  package$kmem.set_rpd3xf$ = set_2;
  package$kmem.get_mem_h4bb51$ = get_mem_4;
  package$kmem.get_offset_h4bb51$ = get_offset_3;
  package$kmem.get_size_h4bb51$ = get_size_4;
  package$kmem.get_yg2kxp$ = get_4;
  package$kmem.set_ogqgs1$ = set_3;
  package$kmem.asInt8Array_964n91$ = asInt8Array;
  package$kmem.asTyped_964n91$ = asTyped;
  package$kmem.asInt16Array_i2lc79$ = asInt16Array;
  package$kmem.asTyped_i2lc79$ = asTyped_0;
  package$kmem.asInt32Array_tmsbgo$ = asInt32Array;
  package$kmem.asTyped_tmsbgo$ = asTyped_1;
  package$kmem.asFloat32Array_rjqryz$ = asFloat32Array;
  package$kmem.asTyped_rjqryz$ = asTyped_2;
  package$kmem.asFloat64Array_bvy38s$ = asFloat64Array;
  package$kmem.asTyped_bvy38s$ = asTyped_3;
  package$kmem.arraycopy_vybhjg$ = arraycopy_14;
  package$kmem.arraycopy_3poh7i$ = arraycopy_15;
  package$kmem.arraycopy_m70dtq$ = arraycopy_16;
  package$kmem.arraycopy_nlwz52$ = arraycopy_17;
  package$kmem.arraycopy_ai5qaq$ = arraycopy_18;
  package$kmem.arraycopy_lvhpry$ = arraycopy_19;
  package$kmem.arraycopy_5ukzfm$ = arraycopy_20;
  package$kmem.arraycopy_dgpv4k$ = arraycopy_21;
  package$kmem.arraycopy_mwgkm6$ = arraycopy_22;
  package$kmem.arraycopy_jf0qaq$ = arraycopy_23;
  package$kmem.arraycopy_7bkom2$ = arraycopy_24;
  package$kmem.arraycopy_c6wrq4$ = arraycopy_25;
  package$kmem.arraycopy_mihd94$ = arraycopy_26;
  package$kmem.arraycopy_ciuv3l$ = arraycopy_27;
  package$kmem.arraycopy_x0s07p$ = arraycopy_28;
  package$kmem.arraycopy_mx3ol8$ = arraycopy_29;
  package$kmem.arraycopy_owenk8$ = arraycopy_30;
  package$kmem.arraycopy_buz8ph$ = arraycopy_31;
  package$kmem.arraycopy_km662r$ = arraycopy_32;
  package$kmem._fill_iv3oks$ = _fill;
  package$kmem._fill_9l0r9l$ = _fill_0;
  package$kmem._fill_cjoi1f$ = _fill_1;
  Float64Buffer_BYTES_PER_ELEMENT = 8;
  Float32Buffer_BYTES_PER_ELEMENT = 4;
  Int32Buffer_BYTES_PER_ELEMENT = 4;
  Int16Buffer_BYTES_PER_ELEMENT = 2;
  Int8Buffer_BYTES_PER_ELEMENT = 2;
  Uint8Buffer_BYTES_PER_ELEMENT = 1;
  Uint16Buffer_BYTES_PER_ELEMENT = 2;
  KMEM_VERSION = '0.21.0';
  Kotlin.defineModule('kmem-js', _);
  return _;
}));

//# sourceMappingURL=kmem-js.js.map
