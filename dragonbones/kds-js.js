(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'kds-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'kds-js'.");
    }
    root['kds-js'] = factory(typeof this['kds-js'] === 'undefined' ? {} : this['kds-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Unit = Kotlin.kotlin.Unit;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var contentEquals = Kotlin.arrayEquals;
  var hashCode = Kotlin.hashCode;
  var contains = Kotlin.kotlin.collections.contains_mjy6jw$;
  var get_indices = Kotlin.kotlin.collections.get_indices_m7z4lg$;
  var equals = Kotlin.equals;
  var Pair = Kotlin.kotlin.Pair;
  var print = Kotlin.kotlin.io.print_s8jyv4$;
  var println = Kotlin.kotlin.io.println;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var unboxChar = Kotlin.unboxChar;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Iterable = Kotlin.kotlin.collections.Iterable;
  var first = Kotlin.kotlin.collections.first_7wnvza$;
  var toList = Kotlin.kotlin.collections.toList_7wnvza$;
  var LinkedHashMap_init = Kotlin.kotlin.collections.LinkedHashMap_init_q3lmfv$;
  var throwCCE = Kotlin.throwCCE;
  var count = Kotlin.kotlin.collections.count_7wnvza$;
  var Any = Object;
  var IndexOutOfBoundsException_init = Kotlin.kotlin.IndexOutOfBoundsException_init;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var MutableIterator = Kotlin.kotlin.collections.MutableIterator;
  var MutableCollection = Kotlin.kotlin.collections.MutableCollection;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var copyOf = Kotlin.kotlin.collections.copyOf_xgrzbe$;
  var take = Kotlin.kotlin.collections.take_xgrzbe$;
  var Collection = Kotlin.kotlin.collections.Collection;
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_xgrzbe$;
  var copyOf_0 = Kotlin.kotlin.collections.copyOf_c03ot6$;
  var IllegalArgumentException_init = Kotlin.kotlin.IllegalArgumentException_init;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var take_0 = Kotlin.kotlin.collections.take_c03ot6$;
  var numberToInt = Kotlin.numberToInt;
  var toRawBits = Kotlin.floatToRawBits;
  var getOrNull_0 = Kotlin.kotlin.collections.getOrNull_c03ot6$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var getOrNull_1 = Kotlin.kotlin.collections.getOrNull_8ujjk8$;
  var copyOf_1 = Kotlin.kotlin.collections.copyOf_8ujjk8$;
  var println_0 = Kotlin.kotlin.io.println_s8jyv4$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var MutableMap = Kotlin.kotlin.collections.MutableMap;
  var firstOrNull = Kotlin.kotlin.collections.firstOrNull_2p1efm$;
  var sortWith = Kotlin.kotlin.collections.sortWith_nqfjgj$;
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  var addAll_0 = Kotlin.kotlin.collections.addAll_ipc267$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var sortedWith = Kotlin.kotlin.collections.sortedWith_eknfly$;
  DoubleArrayList.prototype = Object.create(NumberArrayList.prototype);
  DoubleArrayList.prototype.constructor = DoubleArrayList;
  IntArrayList.prototype = Object.create(NumberArrayList.prototype);
  IntArrayList.prototype.constructor = IntArrayList;
  function Array2(width, height, data) {
    Array2$Companion_getInstance();
    this.width = width;
    this.height = height;
    this.data = data;
  }
  function Array2$Companion() {
    Array2$Companion_instance = this;
  }
  Array2$Companion.prototype.invoke_9p1r4w$ = defineInlineFunction('kds-js.com.soywiz.kds.Array2.Companion.invoke_9p1r4w$', wrapFunction(function () {
    var Array2_init = _.com.soywiz.kds.Array2;
    var Array_0 = Array;
    return function (T_0, isT, width, height, gen) {
      var array = Array_0(Kotlin.imul(width, height));
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = gen(i);
      }
      return new Array2_init(width, height, array);
    };
  }));
  Array2$Companion.prototype.withGen_6qkxfg$ = defineInlineFunction('kds-js.com.soywiz.kds.Array2.Companion.withGen_6qkxfg$', wrapFunction(function () {
    var Array2_init = _.com.soywiz.kds.Array2;
    var Array_0 = Array;
    return function (T_0, isT, width, height, gen) {
      var array = Array_0(Kotlin.imul(width, height));
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = gen(i % width, i / width | 0);
      }
      return new Array2_init(width, height, array);
    };
  }));
  Array2$Companion.prototype.invoke_n7b3v4$ = defineInlineFunction('kds-js.com.soywiz.kds.Array2.Companion.invoke_n7b3v4$', wrapFunction(function () {
    var Array2 = _.com.soywiz.kds.Array2;
    var Array_0 = Array;
    return function (T_0, isT, rows) {
      var width = rows.get_za3lpa$(0).size;
      var height = rows.size;
      var anyCell = rows.get_za3lpa$(0).get_za3lpa$(0);
      var array = Array_0(Kotlin.imul(width, height));
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        array[i] = anyCell;
      }
      var $receiver = new Array2(width, height, array);
      $receiver.set_ndhni1$(rows);
      return $receiver;
    };
  }));
  Array2$Companion.prototype.invoke_23h2vo$ = defineInlineFunction('kds-js.com.soywiz.kds.Array2.Companion.invoke_23h2vo$', wrapFunction(function () {
    var lines = Kotlin.kotlin.text.lines_gw00vp$;
    var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
    var wrapFunction = Kotlin.wrapFunction;
    var max = Kotlin.kotlin.collections.max_exjks8$;
    var Array2 = _.com.soywiz.kds.Array2;
    var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
    var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
    var toBoxedChar = Kotlin.toBoxedChar;
    var Array2$Companion$invoke$lambda = wrapFunction(function () {
      var throwCCE = Kotlin.throwCCE;
      var trim = Kotlin.kotlin.text.trim_gw00vp$;
      return function (closure$marginChar) {
        return function (it) {
          var tmp$;
          var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
          if (startsWith(res, closure$marginChar)) {
            var endIndex = res.length;
            return res.substring(0, endIndex);
          }
           else {
            return res;
          }
        };
      };
    });
    var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var throwCCE = Kotlin.throwCCE;
    var trim = Kotlin.kotlin.text.trim_gw00vp$;
    var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var Array_0 = Array;
    return function (T_0, isT, map, marginChar, gen) {
      if (marginChar === void 0)
        marginChar = 0;
      var tmp$;
      var $receiver = lines(map);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1 = destination.add_11rb$;
        var transform$result;
        var tmp$_2;
        var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
        if (startsWith(res, marginChar)) {
          var endIndex = res.length;
          transform$result = res.substring(0, endIndex);
        }
         else {
          transform$result = res;
        }
        tmp$_1.call(destination, transform$result);
      }
      var destination_0 = ArrayList_init_0();
      var tmp$_3;
      tmp$_3 = destination.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (element.length > 0)
          destination_0.add_11rb$(element);
      }
      var lines_0 = destination_0;
      var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
      var tmp$_4;
      tmp$_4 = lines_0.iterator();
      while (tmp$_4.hasNext()) {
        var item_0 = tmp$_4.next();
        destination_1.add_11rb$(item_0.length);
      }
      var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
      var height = lines_0.size;
      var array = Array_0(Kotlin.imul(width, height));
      var tmp$_5;
      tmp$_5 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_5; i++) {
        var tmp$_6, tmp$_7;
        var x = i % width;
        var y = i / width | 0;
        array[i] = gen(toBoxedChar((tmp$_7 = (tmp$_6 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_6, x) : null) != null ? tmp$_7 : 32), x, y);
      }
      return new Array2(width, height, array);
    };
  }));
  Array2$Companion.prototype.invoke_pu6olq$ = defineInlineFunction('kds-js.com.soywiz.kds.Array2.Companion.invoke_pu6olq$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var lines = Kotlin.kotlin.text.lines_gw00vp$;
    var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
    var max = Kotlin.kotlin.collections.max_exjks8$;
    var Array2 = _.com.soywiz.kds.Array2;
    var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
    var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
    var toBoxedChar = Kotlin.toBoxedChar;
    var Array2$Companion$invoke$lambda = wrapFunction(function () {
      var throwCCE = Kotlin.throwCCE;
      var trim = Kotlin.kotlin.text.trim_gw00vp$;
      return function (closure$marginChar) {
        return function (it) {
          var tmp$;
          var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
          if (startsWith(res, closure$marginChar)) {
            var endIndex = res.length;
            return res.substring(0, endIndex);
          }
           else {
            return res;
          }
        };
      };
    });
    var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var throwCCE = Kotlin.throwCCE;
    var trim = Kotlin.kotlin.text.trim_gw00vp$;
    var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var Array_0 = Array;
    return function (T_0, isT, map, default_0, transform) {
      var tmp$;
      var $receiver = lines(map);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1 = destination.add_11rb$;
        var transform$result;
        var tmp$_2;
        var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
        if (startsWith(res, 0)) {
          var endIndex = res.length;
          transform$result = res.substring(0, endIndex);
        }
         else {
          transform$result = res;
        }
        tmp$_1.call(destination, transform$result);
      }
      var destination_0 = ArrayList_init_0();
      var tmp$_3;
      tmp$_3 = destination.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (element.length > 0)
          destination_0.add_11rb$(element);
      }
      var lines_0 = destination_0;
      var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
      var tmp$_4;
      tmp$_4 = lines_0.iterator();
      while (tmp$_4.hasNext()) {
        var item_0 = tmp$_4.next();
        destination_1.add_11rb$(item_0.length);
      }
      var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
      var height = lines_0.size;
      var array = Array_0(Kotlin.imul(width, height));
      var tmp$_5;
      tmp$_5 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_5; i++) {
        var tmp$_6, tmp$_7;
        var x = i % width;
        var y = i / width | 0;
        var tmp$_8;
        array[i] = (tmp$_8 = transform.get_11rb$(toBoxedChar((tmp$_7 = (tmp$_6 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_6, x) : null) != null ? tmp$_7 : 32))) != null ? tmp$_8 : default_0;
      }
      return new Array2(width, height, array);
    };
  }));
  Array2$Companion.prototype.fromString_d4ez4v$ = defineInlineFunction('kds-js.com.soywiz.kds.Array2.Companion.fromString_d4ez4v$', wrapFunction(function () {
    var wrapFunction = Kotlin.wrapFunction;
    var lines = Kotlin.kotlin.text.lines_gw00vp$;
    var startsWith = Kotlin.kotlin.text.startsWith_sgbm27$;
    var max = Kotlin.kotlin.collections.max_exjks8$;
    var Array2 = _.com.soywiz.kds.Array2;
    var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
    var getOrNull_0 = Kotlin.kotlin.text.getOrNull_94bcnn$;
    var toBoxedChar = Kotlin.toBoxedChar;
    var Array2$Companion$invoke$lambda = wrapFunction(function () {
      var throwCCE = Kotlin.throwCCE;
      var trim = Kotlin.kotlin.text.trim_gw00vp$;
      return function (closure$marginChar) {
        return function (it) {
          var tmp$;
          var res = trim(Kotlin.isCharSequence(tmp$ = it) ? tmp$ : throwCCE()).toString();
          if (startsWith(res, closure$marginChar)) {
            var endIndex = res.length;
            return res.substring(0, endIndex);
          }
           else {
            return res;
          }
        };
      };
    });
    var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
    var throwCCE = Kotlin.throwCCE;
    var trim = Kotlin.kotlin.text.trim_gw00vp$;
    var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var Array_0 = Array;
    return function (T_0, isT, maps, default_0, code, marginChar) {
      if (marginChar === void 0)
        marginChar = 0;
      var tmp$;
      var $receiver = lines(code);
      var destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
      var tmp$_0;
      tmp$_0 = $receiver.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        var tmp$_1 = destination.add_11rb$;
        var transform$result;
        var tmp$_2;
        var res = trim(Kotlin.isCharSequence(tmp$_2 = item) ? tmp$_2 : throwCCE()).toString();
        if (startsWith(res, marginChar)) {
          var endIndex = res.length;
          transform$result = res.substring(0, endIndex);
        }
         else {
          transform$result = res;
        }
        tmp$_1.call(destination, transform$result);
      }
      var destination_0 = ArrayList_init_0();
      var tmp$_3;
      tmp$_3 = destination.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (element.length > 0)
          destination_0.add_11rb$(element);
      }
      var lines_0 = destination_0;
      var destination_1 = ArrayList_init(collectionSizeOrDefault(lines_0, 10));
      var tmp$_4;
      tmp$_4 = lines_0.iterator();
      while (tmp$_4.hasNext()) {
        var item_0 = tmp$_4.next();
        destination_1.add_11rb$(item_0.length);
      }
      var width = (tmp$ = max(destination_1)) != null ? tmp$ : 0;
      var height = lines_0.size;
      var array = Array_0(Kotlin.imul(width, height));
      var tmp$_5;
      tmp$_5 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_5; i++) {
        var tmp$_6, tmp$_7;
        var x = i % width;
        var y = i / width | 0;
        var tmp$_8;
        array[i] = (tmp$_8 = maps.get_11rb$(toBoxedChar((tmp$_7 = (tmp$_6 = getOrNull(lines_0, y)) != null ? getOrNull_0(tmp$_6, x) : null) != null ? tmp$_7 : 32))) != null ? tmp$_8 : default_0;
      }
      return new Array2(width, height, array);
    };
  }));
  Array2$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Array2$Companion_instance = null;
  function Array2$Companion_getInstance() {
    if (Array2$Companion_instance === null) {
      new Array2$Companion();
    }
    return Array2$Companion_instance;
  }
  Array2.prototype.set_ndhni1$ = function (rows) {
    var n = 0;
    for (var y = 0; y !== rows.size; ++y) {
      var row = rows.get_za3lpa$(y);
      for (var x = 0; x !== row.size; ++x) {
        var tmp$;
        this.data[tmp$ = n, n = tmp$ + 1 | 0, tmp$] = row.get_za3lpa$(x);
      }
    }
  };
  Array2.prototype.equals = function (other) {
    return Kotlin.isType(other, Array2) && this.width === other.width && this.height === other.height && contentEquals(this.data, other.data);
  };
  Array2.prototype.hashCode = function () {
    return this.width + this.height + hashCode(this.data) | 0;
  };
  Array2.prototype.index_0 = function (x, y) {
    return Kotlin.imul(y, this.width) + x | 0;
  };
  Array2.prototype.get_vux9f0$ = function (x, y) {
    return this.data[Kotlin.imul(y, this.width) + x | 0];
  };
  Array2.prototype.set_vq7693$ = function (x, y, value) {
    this.data[Kotlin.imul(y, this.width) + x | 0] = value;
  };
  Array2.prototype.tryGet_vux9f0$ = function (x, y) {
    return this.inside_vux9f0$(x, y) ? this.data[Kotlin.imul(y, this.width) + x | 0] : null;
  };
  Array2.prototype.trySet_vq7693$ = function (x, y, value) {
    if (this.inside_vux9f0$(x, y)) {
      this.data[Kotlin.imul(y, this.width) + x | 0] = value;
    }
  };
  Array2.prototype.inside_vux9f0$ = function (x, y) {
    return x >= 0 && y >= 0 && x < this.width && y < this.height;
  };
  Array2.prototype.contains_11rb$ = function (v) {
    return contains(this.data, v);
  };
  Array2.prototype.each_lbptwu$ = defineInlineFunction('kds-js.com.soywiz.kds.Array2.each_lbptwu$', function (callback) {
    var tmp$, tmp$_0, tmp$_1;
    var n = 0;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.width;
      for (var x = 0; x < tmp$_0; x++) {
        callback(x, y, this.data[tmp$_1 = n, n = tmp$_1 + 1 | 0, tmp$_1]);
      }
    }
  });
  Array2.prototype.fill_ru8m0w$ = defineInlineFunction('kds-js.com.soywiz.kds.Array2.fill_ru8m0w$', function (gen) {
    var tmp$, tmp$_0;
    var n = 0;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.width;
      for (var x = 0; x < tmp$_0; x++) {
        this.data[n] = gen(this.data[n]);
        n = n + 1 | 0;
      }
    }
  });
  Array2.prototype.map2_m84jwd$ = defineInlineFunction('kds-js.com.soywiz.kds.Array2.map2_m84jwd$', wrapFunction(function () {
    var Array2 = _.com.soywiz.kds.Array2;
    var Array_0 = Array;
    return function (TR_0, isTR, gen) {
      var width = this.width;
      var height = this.height;
      var array = Array_0(Kotlin.imul(width, height));
      var tmp$;
      tmp$ = array.length - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        var x = i % this.width;
        var y = i / this.width | 0;
        array[i] = gen(x, y, this.get_vux9f0$(x, y));
      }
      return new Array2(width, height, array);
    };
  }));
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  Array2.prototype.getPositionsWithValue_11rb$ = function (value) {
    var $receiver = get_indices(this.data);
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      if (equals(this.data[element], value))
        destination.add_11rb$(element);
    }
    var destination_0 = ArrayList_init_0(collectionSizeOrDefault(destination, 10));
    var tmp$_0;
    tmp$_0 = destination.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination_0.add_11rb$(new Pair(item % this.width, item / this.width | 0));
    }
    return destination_0;
  };
  Array2.prototype.clone = function () {
    return new Array2(this.width, this.height, this.data.slice());
  };
  Array2.prototype.dump = function () {
    var tmp$, tmp$_0;
    tmp$ = this.height;
    for (var y = 0; y < tmp$; y++) {
      tmp$_0 = this.width;
      for (var x = 0; x < tmp$_0; x++) {
        print(this.get_vux9f0$(x, y));
      }
      println();
    }
  };
  Array2.prototype.iterator = function () {
    return Kotlin.arrayIterator(this.data);
  };
  var charArray = Kotlin.charArray;
  Array2.prototype.toStringList_9fqlme$ = function (charMap, margin) {
    if (margin === void 0)
      margin = '';
    var $receiver = until(0, this.height);
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      var tmp$_0 = destination.add_11rb$;
      var tmp$_1;
      var array = charArray(this.width, null);
      tmp$_1 = array.length - 1 | 0;
      for (var i = 0; i <= tmp$_1; i++) {
        var value = unboxChar(charMap(this.get_vux9f0$(i, item)));
        array[i] = value;
      }
      tmp$_0.call(destination, margin + String.fromCharCode.apply(null, array));
    }
    return destination;
  };
  Array2.prototype.toString_s6lhx2$ = function (margin, charMap) {
    if (margin === void 0)
      margin = '';
    return joinToString(this.toStringList_9fqlme$(charMap, margin), '\n');
  };
  function Array2$toString$lambda(closure$map) {
    return function (it) {
      var tmp$;
      return (tmp$ = unboxChar(closure$map.get_11rb$(it))) != null ? tmp$ : 32;
    };
  }
  Array2.prototype.toString_q8euur$ = function (map, margin) {
    if (margin === void 0)
      margin = '';
    return this.toString_s6lhx2$(margin, Array2$toString$lambda(map));
  };
  Array2.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Array2',
    interfaces: [Iterable]
  };
  Array2.prototype.component1 = function () {
    return this.width;
  };
  Array2.prototype.component2 = function () {
    return this.height;
  };
  Array2.prototype.component3 = function () {
    return this.data;
  };
  Array2.prototype.copy_ohzztl$ = function (width, height, data) {
    return new Array2(width === void 0 ? this.width : width, height === void 0 ? this.height : height, data === void 0 ? this.data : data);
  };
  Array2.prototype.toString = function () {
    return 'Array2(width=' + Kotlin.toString(this.width) + (', height=' + Kotlin.toString(this.height)) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  function BitSet(size) {
    this.size = size;
    this.data = new Int32Array(package$kds.KdsExt.divCeil_dqglrj$(this.size, 4));
  }
  BitSet.prototype.part_0 = function (index) {
    return index >>> 5;
  };
  BitSet.prototype.bit_0 = function (index) {
    return index & 31;
  };
  BitSet.prototype.get_za3lpa$ = function (index) {
    return (this.data[this.part_0(index)] >>> this.bit_0(index) & 1) !== 0;
  };
  BitSet.prototype.set_fzusl$ = function (index, value) {
    var i = this.part_0(index);
    var b = this.bit_0(index);
    if (value) {
      this.data[i] = this.data[i] | 1 << b;
    }
     else {
      this.data[i] = this.data[i] & ~(1 << b);
    }
  };
  BitSet.prototype.set_za3lpa$ = function (index) {
    this.set_fzusl$(index, true);
  };
  BitSet.prototype.unset_za3lpa$ = function (index) {
    this.set_fzusl$(index, false);
  };
  BitSet.prototype.clear = function () {
    MemTools_getInstance().fill_u4kcgn$(this.data, 0);
  };
  BitSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BitSet',
    interfaces: []
  };
  function CacheMap(maxSize, free) {
    if (maxSize === void 0)
      maxSize = 16;
    if (free === void 0)
      free = CacheMap_init$lambda;
    this.maxSize = maxSize;
    this.free = free;
    this.entries = LinkedHashMap_init();
  }
  Object.defineProperty(CacheMap.prototype, 'size', {
    get: function () {
      return this.entries.size;
    }
  });
  CacheMap.prototype.has_11rb$ = function (key) {
    return this.entries.containsKey_11rb$(key);
  };
  CacheMap.prototype.remove_11rb$ = function (key) {
    var value = this.entries.remove_11rb$(key);
    if (value != null)
      this.free(key, value);
  };
  CacheMap.prototype.get_11rb$ = function (key) {
    return this.entries.get_11rb$(key);
  };
  CacheMap.prototype.set_xwzc9p$ = function (key, value) {
    if (this.size >= this.maxSize && !this.entries.containsKey_11rb$(key))
      this.remove_11rb$(first(this.entries.keys));
    var oldValue = this.entries.get_11rb$(key);
    if (!equals(oldValue, value)) {
      this.remove_11rb$(key);
      this.entries.put_xwzc9p$(key, value);
    }
  };
  CacheMap.prototype.getOrPut_mhvqli$ = defineInlineFunction('kds-js.com.soywiz.kds.CacheMap.getOrPut_mhvqli$', wrapFunction(function () {
    var ensureNotNull = Kotlin.ensureNotNull;
    return function (key, callback) {
      if (!this.has_11rb$(key))
        this.set_xwzc9p$(key, callback(key));
      return ensureNotNull(this.get_11rb$(key));
    };
  }));
  CacheMap.prototype.clear = function () {
    var tmp$;
    var keys = toList(this.entries.keys);
    tmp$ = keys.iterator();
    while (tmp$.hasNext()) {
      var key = tmp$.next();
      this.remove_11rb$(key);
    }
  };
  function CacheMap_init$lambda(k, v) {
    return Unit;
  }
  CacheMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CacheMap',
    interfaces: []
  };
  function CircularList() {
    this._start_0 = 0;
    this._size_0 = 0;
    var tmp$;
    this.data_0 = Kotlin.isArray(tmp$ = Kotlin.newArray(16, null)) ? tmp$ : throwCCE();
  }
  Object.defineProperty(CircularList.prototype, 'capacity_0', {
    get: function () {
      return this.data_0.length;
    }
  });
  Object.defineProperty(CircularList.prototype, 'size', {
    get: function () {
      return this._size_0;
    }
  });
  CircularList.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  CircularList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  CircularList.prototype.resizeIfRequiredFor_0 = function (count) {
    var tmp$;
    if ((this.size + count | 0) > this.capacity_0) {
      var i = this.data_0;
      var istart = this._start_0;
      var o = Kotlin.isArray(tmp$ = Kotlin.newArray(this.data_0.length * 2 | 0, null)) ? tmp$ : throwCCE();
      this.copyCyclic_0(i, istart, o, this._size_0);
      this.data_0 = o;
      this._start_0 = 0;
    }
  };
  var Math_0 = Math;
  CircularList.prototype.copyCyclic_0 = function (i, istart, o, count) {
    var a = i.length - istart | 0;
    var size1 = Math_0.min(a, count);
    var size2 = count - size1 | 0;
    MemTools_getInstance().arraycopy_vybhjg$(i, istart, o, 0, size1);
    if (size2 > 0)
      MemTools_getInstance().arraycopy_vybhjg$(i, 0, o, size1, size2);
  };
  CircularList.prototype.addAll_p1ys8y$ = function (items) {
    var tmp$;
    this.resizeIfRequiredFor_0(count(items));
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      this.addLast_11rb$(i);
    }
  };
  CircularList.prototype.addFirst_11rb$ = function (item) {
    var tmp$;
    this.resizeIfRequiredFor_0(1);
    this._start_0 = package$kds.KdsExt.umod_dqglrj$(this._start_0 - 1 | 0, this.capacity_0);
    this._size_0 = this._size_0 + 1 | 0;
    this.data_0[this._start_0] = Kotlin.isType(tmp$ = item, Any) ? tmp$ : throwCCE();
  };
  CircularList.prototype.addLast_11rb$ = function (item) {
    var tmp$;
    this.resizeIfRequiredFor_0(1);
    this.data_0[package$kds.KdsExt.umod_dqglrj$(this._start_0 + this.size | 0, this.capacity_0)] = Kotlin.isType(tmp$ = item, Any) ? tmp$ : throwCCE();
    this._size_0 = this._size_0 + 1 | 0;
  };
  CircularList.prototype.removeFirst = function () {
    if (this._size_0 <= 0)
      throw IndexOutOfBoundsException_init();
    var $receiver = this.first;
    var tmp$;
    this._start_0 = package$kds.KdsExt.umod_dqglrj$(this._start_0 + 1 | 0, this.capacity_0);
    tmp$ = this._size_0, this._size_0 = tmp$ - 1 | 0;
    return $receiver;
  };
  CircularList.prototype.removeLast = function () {
    if (this._size_0 <= 0)
      throw IndexOutOfBoundsException_init();
    var $receiver = this.last;
    this._size_0 = this._size_0 - 1 | 0;
    return $receiver;
  };
  CircularList.prototype.removeAt_za3lpa$ = function (index) {
    var tmp$;
    if (index < 0 || index >= this.size)
      throw IndexOutOfBoundsException_init();
    if (index === 0)
      return this.removeFirst();
    if (index === (this.size - 1 | 0))
      return this.removeLast();
    var old = this.get_za3lpa$(index);
    tmp$ = this.size - 1 | 0;
    for (var n = index; n < tmp$; n++)
      this.set_wxm5ur$(n, this.get_za3lpa$(n + 1 | 0));
    this._size_0 = this._size_0 - 1 | 0;
    return old;
  };
  CircularList.prototype.add_11rb$ = function (element) {
    this.addLast_11rb$(element);
    return true;
  };
  CircularList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    this.addAll_p1ys8y$(Kotlin.isType(tmp$ = elements, Iterable) ? tmp$ : throwCCE());
    return true;
  };
  CircularList.prototype.clear = function () {
    this._size_0 = 0;
  };
  CircularList.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_11rb$(element);
    if (index >= 0)
      this.removeAt_za3lpa$(index);
    return index >= 0;
  };
  CircularList.prototype.removeAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, false);
  };
  CircularList.prototype.retainAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, true);
  };
  CircularList.prototype._removeRetainAll_0 = function (elements, retain) {
    var tmp$, tmp$_0, tmp$_1;
    var eset = toSet(elements);
    var temp = this.data_0.slice();
    var tsize = 0;
    var osize = this.size;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      var c = this.get_za3lpa$(n);
      if (eset.contains_11rb$(c) === retain) {
        temp[tmp$_1 = tsize, tsize = tmp$_1 + 1 | 0, tmp$_1] = Kotlin.isType(tmp$_0 = c, Any) ? tmp$_0 : throwCCE();
      }
    }
    this.data_0 = temp;
    this._start_0 = 0;
    this._size_0 = tsize;
    return tsize !== osize;
  };
  Object.defineProperty(CircularList.prototype, 'first', {
    get: function () {
      var tmp$;
      return (tmp$ = this.data_0[this._start_0]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }
  });
  Object.defineProperty(CircularList.prototype, 'last', {
    get: function () {
      var tmp$;
      return (tmp$ = this.data_0[this.internalIndex_0(this.size - 1 | 0)]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    }
  });
  CircularList.prototype.internalIndex_0 = function (index) {
    return package$kds.KdsExt.umod_dqglrj$(this._start_0 + index | 0, this.capacity_0);
  };
  CircularList.prototype.set_wxm5ur$ = function (index, value) {
    var tmp$;
    this.data_0[this.internalIndex_0(index)] = Kotlin.isType(tmp$ = value, Any) ? tmp$ : throwCCE();
  };
  CircularList.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    return (tmp$ = this.data_0[this.internalIndex_0(index)]) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  CircularList.prototype.contains_11rb$ = function (element) {
    var $receiver = until(0, this.size);
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element_0 = tmp$.next();
        if (equals(this.get_za3lpa$(element_0), element)) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  CircularList.prototype.indexOf_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++)
      if (equals(this.get_za3lpa$(n), element))
        return n;
    return -1;
  };
  var Map = Kotlin.kotlin.collections.Map;
  CircularList.prototype.containsAll_brywnq$ = function (elements) {
    var tmp$;
    var destination = ArrayList_init_0(collectionSizeOrDefault(elements, 10));
    var tmp$_0;
    tmp$_0 = elements.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(to(item, 0));
    }
    var emap = toLinkedMap(destination);
    tmp$ = this.size;
    for (var it = 0; it < tmp$; it++) {
      var e = this.get_za3lpa$(it);
      var tmp$_1;
      if ((Kotlin.isType(tmp$_1 = emap, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(e)) {
        emap.put_xwzc9p$(e, 1);
      }
    }
    var $receiver = emap.values;
    var all$result;
    all$break: do {
      var tmp$_2;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (!(element === 1)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  function CircularList$iterator$ObjectLiteral(this$CircularList) {
    this.this$CircularList = this$CircularList;
    this.index = 0;
  }
  CircularList$iterator$ObjectLiteral.prototype.next = function () {
    var tmp$;
    return this.this$CircularList.get_za3lpa$((tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$));
  };
  CircularList$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.index < this.this$CircularList.size;
  };
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  CircularList$iterator$ObjectLiteral.prototype.remove = function () {
    throw new NotImplementedError_init();
  };
  CircularList$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MutableIterator]
  };
  CircularList.prototype.iterator = function () {
    return new CircularList$iterator$ObjectLiteral(this);
  };
  CircularList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CircularList',
    interfaces: [MutableCollection]
  };
  function Computed(prop, default_0) {
    this.prop = prop;
    this.default = default_0;
  }
  function Computed$WithParent() {
  }
  Computed$WithParent.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'WithParent',
    interfaces: []
  };
  Computed.prototype.getValue_608w9m$ = function (thisRef, p) {
    var current = thisRef;
    while (current != null) {
      var result = this.prop.get(current);
      if (result != null)
        return result;
      current = current.parent;
    }
    return this.default();
  };
  Computed.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Computed',
    interfaces: []
  };
  function DoubleArrayList(capacity) {
    if (capacity === void 0)
      capacity = 7;
    NumberArrayList.call(this);
    this.data_dakdwi$_0 = new Float64Array(capacity);
    this.length_0 = 0;
  }
  Object.defineProperty(DoubleArrayList.prototype, 'data', {
    get: function () {
      return this.data_dakdwi$_0;
    },
    set: function (data) {
      this.data_dakdwi$_0 = data;
    }
  });
  Object.defineProperty(DoubleArrayList.prototype, 'capacity_8be2vx$', {
    get: function () {
      return this.data.length;
    }
  });
  Object.defineProperty(DoubleArrayList.prototype, 'size', {
    get: function () {
      return this.length_0;
    },
    set: function (value) {
      this.ensure_0(value);
      this.length_0 = value;
    }
  });
  DoubleArrayList.prototype.ensure_0 = function (count) {
    if ((this.length_0 + count | 0) > this.data.length) {
      var tmp$ = this.data;
      var a = this.length_0 + count | 0;
      var b = this.data.length * 3 | 0;
      this.data = copyOf(tmp$, Math_0.max(a, b));
    }
  };
  DoubleArrayList.prototype.clear = function () {
    this.length_0 = 0;
  };
  DoubleArrayList.prototype.add_14dthe$ = function (value) {
    var tmp$;
    this.ensure_0(1);
    this.data[tmp$ = this.length_0, this.length_0 = tmp$ + 1 | 0, tmp$] = value;
  };
  DoubleArrayList.prototype.plusAssign_14dthe$ = function (value) {
    this.add_14dthe$(value);
  };
  DoubleArrayList.prototype.plusAssign_gf7tl1$ = function (value) {
    this.add_6icyh1$(value);
  };
  DoubleArrayList.prototype.plusAssign_avch8c$ = function (value) {
    this.add_avch8c$(value);
  };
  DoubleArrayList.prototype.plusAssign_layyx3$ = function (value) {
    this.add_layyx3$(value);
  };
  DoubleArrayList.prototype.add_6icyh1$ = function (values, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = values.length;
    this.ensure_0(values.length);
    MemTools_getInstance().arraycopy_dgpv4k$(values, offset, this.data, this.length_0, length);
    this.length_0 = this.length_0 + values.length | 0;
  };
  DoubleArrayList.prototype.add_avch8c$ = function (values) {
    this.add_6icyh1$(values.data, 0, values.length_0);
  };
  DoubleArrayList.prototype.add_layyx3$ = function (values) {
    var tmp$;
    tmp$ = values.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      this.add_14dthe$(v);
    }
  };
  DoubleArrayList.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    tmp$ = this.length_0;
    return 0 <= index && index < tmp$ ? this.data[index] : 0.0;
  };
  DoubleArrayList.prototype.set_5wr77w$ = function (index, value) {
    if (index >= this.length_0) {
      this.ensure_0(index + 1 | 0);
      this.length_0 = index + 1 | 0;
    }
    this.data[index] = value;
  };
  DoubleArrayList.prototype.iterator = function () {
    return take(this.data, this.length_0).iterator();
  };
  DoubleArrayList.prototype.contains_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.length_0;
    for (var n = 0; n < tmp$; n++)
      if (this.data[n] === element)
        return true;
    return false;
  };
  DoubleArrayList.prototype.containsAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      if (!this.contains_11rb$(e))
        return false;
    }
    return true;
  };
  DoubleArrayList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  DoubleArrayList.prototype.indexOf_mqu1mq$ = function (value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = this.size;
    for (var n = start; n < end; n++)
      if (this.data[n] === value)
        return n;
    return -1;
  };
  DoubleArrayList.prototype.removeAt_za3lpa$ = function (index) {
    if (index < 0 || index >= this.length_0)
      throw IndexOutOfBoundsException_init();
    var out = this.data[index];
    if (index < (this.length_0 - 1 | 0))
      MemTools_getInstance().arraycopy_dgpv4k$(this.data, index + 1 | 0, this.data, index, this.length_0 - index - 1 | 0);
    this.length_0 = this.length_0 - 1 | 0;
    return out;
  };
  DoubleArrayList.prototype.getDouble_za3lpa$ = function (index) {
    return this.get_za3lpa$(index);
  };
  DoubleArrayList.prototype.setDouble_5wr77w$ = function (index, value) {
    this.set_5wr77w$(index, value);
  };
  DoubleArrayList.prototype.toDoubleArray = function () {
    return copyOf(this.data, this.length_0);
  };
  DoubleArrayList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleArrayList',
    interfaces: [Collection, NumberArrayList]
  };
  function DoubleArrayList_init(other, $this) {
    $this = $this || Object.create(DoubleArrayList.prototype);
    DoubleArrayList.call($this);
    $this.add_avch8c$(other);
    return $this;
  }
  function DoubleArrayList_init_0(other, $this) {
    $this = $this || Object.create(DoubleArrayList.prototype);
    DoubleArrayList.call($this);
    $this.add_6icyh1$(other);
    return $this;
  }
  function binarySearch($receiver, value) {
    return binarySearch_2($receiver.data, value, 0, $receiver.size);
  }
  function doubleArrayListOf(doubles) {
    return DoubleArrayList_init_0(doubles.slice());
  }
  function DoubleCircularList() {
    this._start_0 = 0;
    this._size_0 = 0;
    this.data_0 = new Float64Array(16);
  }
  Object.defineProperty(DoubleCircularList.prototype, 'capacity_0', {
    get: function () {
      return this.data_0.length;
    }
  });
  Object.defineProperty(DoubleCircularList.prototype, 'size', {
    get: function () {
      return this._size_0;
    }
  });
  DoubleCircularList.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  DoubleCircularList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  DoubleCircularList.prototype.resizeIfRequiredFor_0 = function (count) {
    if ((this.size + count | 0) > this.capacity_0) {
      var i = this.data_0;
      var istart = this._start_0;
      var o = new Float64Array(this.data_0.length * 2 | 0);
      this.copyCyclic_0(i, istart, o, this._size_0);
      this.data_0 = o;
      this._start_0 = 0;
    }
  };
  DoubleCircularList.prototype.copyCyclic_0 = function (i, istart, o, count) {
    var a = i.length - istart | 0;
    var size1 = Math_0.min(a, count);
    var size2 = count - size1 | 0;
    MemTools_getInstance().arraycopy_dgpv4k$(i, istart, o, 0, size1);
    if (size2 > 0)
      MemTools_getInstance().arraycopy_dgpv4k$(i, 0, o, size1, size2);
  };
  DoubleCircularList.prototype.addAll_layyx3$ = function (items) {
    var tmp$;
    this.resizeIfRequiredFor_0(count(items));
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      this.addLast_14dthe$(i);
    }
  };
  DoubleCircularList.prototype.addFirst_14dthe$ = function (item) {
    this.resizeIfRequiredFor_0(1);
    this._start_0 = package$kds.KdsExt.umod_dqglrj$(this._start_0 - 1 | 0, this.capacity_0);
    this._size_0 = this._size_0 + 1 | 0;
    this.data_0[this._start_0] = item;
  };
  DoubleCircularList.prototype.addLast_14dthe$ = function (item) {
    this.resizeIfRequiredFor_0(1);
    this.data_0[package$kds.KdsExt.umod_dqglrj$(this._start_0 + this.size | 0, this.capacity_0)] = item;
    this._size_0 = this._size_0 + 1 | 0;
  };
  DoubleCircularList.prototype.removeFirst = function () {
    if (this._size_0 <= 0)
      throw IndexOutOfBoundsException_init();
    var $receiver = this.first;
    var tmp$;
    this._start_0 = package$kds.KdsExt.umod_dqglrj$(this._start_0 + 1 | 0, this.capacity_0);
    tmp$ = this._size_0, this._size_0 = tmp$ - 1 | 0;
    return $receiver;
  };
  DoubleCircularList.prototype.removeLast = function () {
    if (this._size_0 <= 0)
      throw IndexOutOfBoundsException_init();
    var $receiver = this.last;
    this._size_0 = this._size_0 - 1 | 0;
    return $receiver;
  };
  DoubleCircularList.prototype.removeAt_za3lpa$ = function (index) {
    var tmp$;
    if (index < 0 || index >= this.size)
      throw IndexOutOfBoundsException_init();
    if (index === 0)
      return this.removeFirst();
    if (index === (this.size - 1 | 0))
      return this.removeLast();
    var old = this.get_za3lpa$(index);
    tmp$ = this.size - 1 | 0;
    for (var n = index; n < tmp$; n++)
      this.set_5wr77w$(n, this.get_za3lpa$(n + 1 | 0));
    this._size_0 = this._size_0 - 1 | 0;
    return old;
  };
  DoubleCircularList.prototype.add_11rb$ = function (element) {
    this.addLast_14dthe$(element);
    return true;
  };
  DoubleCircularList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    this.addAll_layyx3$(Kotlin.isType(tmp$ = elements, Iterable) ? tmp$ : throwCCE());
    return true;
  };
  DoubleCircularList.prototype.clear = function () {
    this._size_0 = 0;
  };
  DoubleCircularList.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_14dthe$(element);
    if (index >= 0)
      this.removeAt_za3lpa$(index);
    return index >= 0;
  };
  DoubleCircularList.prototype.removeAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, false);
  };
  DoubleCircularList.prototype.retainAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, true);
  };
  DoubleCircularList.prototype._removeRetainAll_0 = function (elements, retain) {
    var tmp$, tmp$_0;
    var eset = toSet(elements);
    var temp = this.data_0.slice();
    var tsize = 0;
    var osize = this.size;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      var c = this.get_za3lpa$(n);
      if (eset.contains_11rb$(c) === retain) {
        temp[tmp$_0 = tsize, tsize = tmp$_0 + 1 | 0, tmp$_0] = c;
      }
    }
    this.data_0 = temp;
    this._start_0 = 0;
    this._size_0 = tsize;
    return tsize !== osize;
  };
  Object.defineProperty(DoubleCircularList.prototype, 'first', {
    get: function () {
      return this.data_0[this._start_0];
    }
  });
  Object.defineProperty(DoubleCircularList.prototype, 'last', {
    get: function () {
      return this.data_0[this.internalIndex_0(this.size - 1 | 0)];
    }
  });
  DoubleCircularList.prototype.internalIndex_0 = function (index) {
    return package$kds.KdsExt.umod_dqglrj$(this._start_0 + index | 0, this.capacity_0);
  };
  DoubleCircularList.prototype.set_5wr77w$ = function (index, value) {
    this.data_0[this.internalIndex_0(index)] = value;
  };
  DoubleCircularList.prototype.get_za3lpa$ = function (index) {
    return this.data_0[this.internalIndex_0(index)];
  };
  DoubleCircularList.prototype.contains_11rb$ = function (element) {
    var $receiver = until(0, this.size);
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element_0 = tmp$.next();
        if (this.get_za3lpa$(element_0) === element) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  DoubleCircularList.prototype.indexOf_14dthe$ = function (element) {
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++)
      if (this.get_za3lpa$(n) === element)
        return n;
    return -1;
  };
  DoubleCircularList.prototype.containsAll_brywnq$ = function (elements) {
    var tmp$;
    var destination = ArrayList_init_0(collectionSizeOrDefault(elements, 10));
    var tmp$_0;
    tmp$_0 = elements.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(to(item, 0));
    }
    var emap = toLinkedMap(destination);
    tmp$ = this.size;
    for (var it = 0; it < tmp$; it++) {
      var e = this.get_za3lpa$(it);
      var tmp$_1;
      if ((Kotlin.isType(tmp$_1 = emap, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(e)) {
        emap.put_xwzc9p$(e, 1);
      }
    }
    var $receiver = emap.values;
    var all$result;
    all$break: do {
      var tmp$_2;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (!(element === 1)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  function DoubleCircularList$iterator$ObjectLiteral(this$DoubleCircularList) {
    this.this$DoubleCircularList = this$DoubleCircularList;
    this.index = 0;
  }
  DoubleCircularList$iterator$ObjectLiteral.prototype.next = function () {
    var tmp$;
    return this.this$DoubleCircularList.get_za3lpa$((tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$));
  };
  DoubleCircularList$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.index < this.this$DoubleCircularList.size;
  };
  DoubleCircularList$iterator$ObjectLiteral.prototype.remove = function () {
    throw new NotImplementedError_init();
  };
  DoubleCircularList$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MutableIterator]
  };
  DoubleCircularList.prototype.iterator = function () {
    return new DoubleCircularList$iterator$ObjectLiteral(this);
  };
  DoubleCircularList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleCircularList',
    interfaces: [MutableCollection]
  };
  function DoubleLinkedList(debug) {
    DoubleLinkedList$Companion_getInstance();
    this.debug_0 = debug;
    this.firstSlot_0 = -1;
    this.lastSlot_0 = -1;
    this.firstFreeSlot_0 = 0;
    this.lastFreeSlot_0 = 15;
    this.size_8648u5$_0 = 0;
    var array = new Int32Array(16);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = i - 1 | 0;
    }
    this.prev_0 = array;
    var array_0 = new Int32Array(16);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = i_0 + 1 | 0;
    }
    this.next_0 = array_0;
    this.items_0 = new Float64Array(16);
    this.prev_0[0] = -1;
    this.next_0[this.next_0.length - 1 | 0] = -1;
    this.checkInternalState_0();
  }
  function DoubleLinkedList$Companion() {
    DoubleLinkedList$Companion_instance = this;
    this.NONE_0 = -1;
  }
  DoubleLinkedList$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DoubleLinkedList$Companion_instance = null;
  function DoubleLinkedList$Companion_getInstance() {
    if (DoubleLinkedList$Companion_instance === null) {
      new DoubleLinkedList$Companion();
    }
    return DoubleLinkedList$Companion_instance;
  }
  Object.defineProperty(DoubleLinkedList.prototype, 'size', {
    get: function () {
      return this.size_8648u5$_0;
    },
    set: function (size) {
      this.size_8648u5$_0 = size;
    }
  });
  Object.defineProperty(DoubleLinkedList.prototype, 'capacity_0', {
    get: function () {
      return this.items_0.length;
    }
  });
  DoubleLinkedList.prototype.get_za3lpa$ = function (index) {
    if (index < 0 || index >= this.size)
      throw IndexOutOfBoundsException_init();
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cindex_0 = cindex;
      var slot = cslot;
      if (cindex_0 === index)
        return this.items_0[slot];
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    throw IllegalStateException_init();
  };
  DoubleLinkedList.prototype.contains_11rb$ = function (item) {
    return this.indexOf_14dthe$(item) !== -1;
  };
  Object.defineProperty(DoubleLinkedList.prototype, 'first', {
    get: function () {
      return getOrNull(this.items_0, this.firstSlot_0);
    }
  });
  Object.defineProperty(DoubleLinkedList.prototype, 'last', {
    get: function () {
      return getOrNull(this.items_0, this.lastSlot_0);
    }
  });
  DoubleLinkedList.prototype.ensure_0 = function (count) {
    var oldCapacity = this.capacity_0;
    if ((this.size + count | 0) >= oldCapacity) {
      var newCapacity = oldCapacity * 4 | 0;
      this.prev_0 = copyOf_0(this.prev_0, newCapacity);
      this.next_0 = copyOf_0(this.next_0, newCapacity);
      this.items_0 = copyOf(this.items_0, newCapacity);
      for (var n = oldCapacity + 1 | 0; n < newCapacity; n++)
        this.prev_0[n] = n - 1 | 0;
      for (var n_0 = oldCapacity; n_0 < newCapacity; n_0++)
        this.next_0[n_0] = n_0 + 1 | 0;
      this.prev_0[oldCapacity] = this.lastFreeSlot_0;
      this.next_0[this.lastFreeSlot_0] = oldCapacity;
      this.next_0[newCapacity - 1 | 0] = -1;
      this.lastFreeSlot_0 = newCapacity - 1 | 0;
    }
  };
  DoubleLinkedList.prototype.addLast_14dthe$ = function (item) {
    var slot = this.allocateSlot_0();
    if (this.lastSlot_0 !== -1)
      this.next_0[this.lastSlot_0] = slot;
    this.next_0[slot] = -1;
    this.prev_0[slot] = this.lastSlot_0;
    this.items_0[slot] = item;
    if (this.firstSlot_0 === -1)
      this.firstSlot_0 = slot;
    this.lastSlot_0 = slot;
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return slot;
  };
  DoubleLinkedList.prototype.addFirst_14dthe$ = function (item) {
    var slot = this.allocateSlot_0();
    if (this.firstSlot_0 !== -1)
      this.prev_0[this.firstSlot_0] = slot;
    this.prev_0[slot] = -1;
    this.next_0[slot] = this.firstSlot_0;
    this.items_0[slot] = item;
    if (this.lastSlot_0 === -1)
      this.lastSlot_0 = slot;
    this.firstSlot_0 = slot;
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return slot;
  };
  DoubleLinkedList.prototype.allocateSlot_0 = function () {
    this.ensure_0(1);
    var slot = this.firstFreeSlot_0;
    this.firstFreeSlot_0 = this.next_0[this.firstFreeSlot_0];
    if (this.firstFreeSlot_0 === -1) {
      throw IllegalStateException_init();
    }
    this.prev_0[this.firstFreeSlot_0] = -1;
    return slot;
  };
  DoubleLinkedList.prototype.freeSlot_0 = function (slot) {
    this.prev_0[this.firstFreeSlot_0] = slot;
    this.next_0[slot] = this.firstFreeSlot_0;
    this.prev_0[slot] = -1;
    this.firstFreeSlot_0 = slot;
    this.checkInternalState_0();
  };
  DoubleLinkedList.prototype.addAt_5wr77w$ = function (index, item) {
    if (index === 0)
      return this.addFirst_14dthe$(item);
    if (index === this.size)
      return this.addLast_14dthe$(item);
    return this.addBeforeSlot_5wr77w$(this.slotOfIndex_za3lpa$(index), item);
  };
  DoubleLinkedList.prototype.addBeforeSlot_5wr77w$ = function (slot, item) {
    if (slot === -1)
      throw IllegalArgumentException_init();
    var newSlot = this.allocateSlot_0();
    this.items_0[newSlot] = item;
    this.prev_0[newSlot] = this.prev_0[slot];
    this.next_0[newSlot] = slot;
    if (this.prev_0[slot] !== -1) {
      this.next_0[this.prev_0[slot]] = newSlot;
    }
    this.prev_0[slot] = newSlot;
    if (this.firstSlot_0 === slot) {
      this.firstSlot_0 = newSlot;
    }
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return newSlot;
  };
  DoubleLinkedList.prototype.addAfterSlot_5wr77w$ = function (slot, item) {
    var newSlot = this.allocateSlot_0();
    this.next_0[newSlot] = this.next_0[slot];
    this.prev_0[newSlot] = slot;
    if (this.next_0[slot] !== -1) {
      this.prev_0[this.next_0[slot]] = newSlot;
    }
    this.next_0[slot] = newSlot;
    this.items_0[newSlot] = item;
    if (this.lastSlot_0 === slot) {
      this.lastSlot_0 = newSlot;
    }
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return newSlot;
  };
  DoubleLinkedList.prototype.indexOf_14dthe$ = function (item) {
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cindex_0 = cindex;
      if (this.items_0[cslot] === item)
        return cindex_0;
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return -1;
  };
  DoubleLinkedList.prototype.slotOf_14dthe$ = function (item) {
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      if (this.items_0[cslot_0] === item)
        return cslot_0;
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return -1;
  };
  DoubleLinkedList.prototype.slotOfIndex_za3lpa$ = function (index) {
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cindex_0 = cindex;
      var cslot_0 = cslot;
      if (cindex_0 === index)
        return cslot_0;
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return -1;
  };
  DoubleLinkedList.prototype.remove_11rb$ = function (item) {
    var slot = this.slotOf_14dthe$(item);
    if (slot !== -1)
      this.removeSlot_za3lpa$(slot);
    return slot !== -1;
  };
  DoubleLinkedList.prototype.removeAt_za3lpa$ = function (index) {
    if (index < 0 || index >= this.size)
      throw IndexOutOfBoundsException_init();
    if (index >= (this.size / 2 | 0)) {
      var startSlot;
      startSlot = this.lastSlot_0;
      var cindex = this.size - 1 | 0;
      var cslot = startSlot;
      while (cslot !== -1) {
        var cindex_0 = cindex;
        var cslot_0 = cslot;
        if (cindex_0 === index)
          return this.removeSlot_za3lpa$(cslot_0);
        cslot = this.prev_0[cslot];
        cindex = cindex - 1 | 0;
      }
    }
     else {
      var cindex_1 = 0;
      var cslot_1 = this.firstSlot_0;
      while (cslot_1 !== -1) {
        var cindex_2 = cindex_1;
        var cslot_2 = cslot_1;
        if (cindex_2 === index)
          return this.removeSlot_za3lpa$(cslot_2);
        cslot_1 = this.next_0[cslot_1];
        cindex_1 = cindex_1 + 1 | 0;
      }
    }
    throw IllegalStateException_init();
  };
  DoubleLinkedList.prototype.removeFirst = function () {
    return this.removeSlot_za3lpa$(this.firstSlot_0);
  };
  DoubleLinkedList.prototype.removeLast = function () {
    return this.removeSlot_za3lpa$(this.lastSlot_0);
  };
  DoubleLinkedList.prototype.removeSlot_za3lpa$ = function (slot) {
    if (slot < 0 || slot >= this.capacity_0)
      throw IndexOutOfBoundsException_init();
    if (this.firstSlot_0 === slot)
      this.firstSlot_0 = this.next_0[slot];
    if (this.lastSlot_0 === slot)
      this.lastSlot_0 = this.prev_0[slot];
    var p = this.prev_0[slot];
    var n = this.next_0[slot];
    if (p !== -1)
      this.next_0[p] = n;
    if (n !== -1)
      this.prev_0[n] = p;
    this.size = this.size - 1 | 0;
    this.freeSlot_0(slot);
    this.checkInternalState_0();
    return this.items_0[slot];
  };
  DoubleLinkedList.prototype.iterate_0 = function (startSlot, callback) {
    if (startSlot === void 0)
      startSlot = this.firstSlot_0;
    var cindex = 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      callback(cindex, cslot);
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
  };
  DoubleLinkedList.prototype.iterateReverse_0 = function (startSlot, callback) {
    if (startSlot === void 0)
      startSlot = this.lastSlot_0;
    var cindex = this.size - 1 | 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      callback(cindex, cslot);
      cslot = this.prev_0[cslot];
      cindex = cindex - 1 | 0;
    }
  };
  DoubleLinkedList.prototype.removeAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, false);
  };
  DoubleLinkedList.prototype.retainAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, true);
  };
  DoubleLinkedList.prototype._removeRetainAll_0 = function (elements, retain) {
    var tmp$;
    var eset = toSet(elements);
    var temp = ArrayList_init();
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      if (eset.contains_11rb$(this.items_0[cslot_0]) === retain) {
        var element = this.items_0[cslot_0];
        temp.add_11rb$(element);
      }
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    if (temp.size === this.size)
      return false;
    this.clear();
    tmp$ = temp.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.addLast_14dthe$(e);
    }
    this.checkInternalState_0();
    return true;
  };
  DoubleLinkedList.prototype.containsAll_brywnq$ = function (elements) {
    var destination = ArrayList_init_0(collectionSizeOrDefault(elements, 10));
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, 0));
    }
    var emap = toLinkedMap(destination);
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var e = this.items_0[cslot];
      var tmp$_0;
      if ((Kotlin.isType(tmp$_0 = emap, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(e)) {
        emap.put_xwzc9p$(e, 1);
      }
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    this.checkInternalState_0();
    var $receiver = emap.values;
    var all$result;
    all$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (!(element === 1)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  DoubleLinkedList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  DoubleLinkedList.prototype.add_11rb$ = function (element) {
    this.addLast_14dthe$(element);
    return true;
  };
  DoubleLinkedList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    this.ensure_0(elements.size);
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.addLast_14dthe$(e);
    }
    return true;
  };
  DoubleLinkedList.prototype.clear = function () {
    var tmp$;
    this.firstSlot_0 = -1;
    this.lastSlot_0 = -1;
    this.firstFreeSlot_0 = 0;
    this.size = 0;
    tmp$ = this.prev_0;
    for (var n = 0; n !== tmp$.length; ++n) {
      this.prev_0[n] = n === 0 ? -1 : n - 1 | 0;
      this.next_0[n] = n === (this.prev_0.length - 1 | 0) ? -1 : n + 1 | 0;
    }
  };
  function DoubleLinkedList$iterator$ObjectLiteral(this$DoubleLinkedList) {
    this.this$DoubleLinkedList = this$DoubleLinkedList;
    this.cslot = this$DoubleLinkedList.firstSlot_0;
    this.lastCslot_0 = this.cslot;
  }
  DoubleLinkedList$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.cslot !== -1;
  };
  DoubleLinkedList$iterator$ObjectLiteral.prototype.next = function () {
    this.lastCslot_0 = this.cslot;
    var $receiver = this.this$DoubleLinkedList.items_0[this.cslot];
    this.this$DoubleLinkedList;
    this.cslot = this.this$DoubleLinkedList.next_0[this.cslot];
    return $receiver;
  };
  DoubleLinkedList$iterator$ObjectLiteral.prototype.remove = function () {
    this.this$DoubleLinkedList.removeSlot_za3lpa$(this.lastCslot_0);
  };
  DoubleLinkedList$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MutableIterator]
  };
  DoubleLinkedList.prototype.iterator = function () {
    return new DoubleLinkedList$iterator$ObjectLiteral(this);
  };
  DoubleLinkedList.prototype.checkInternalState_0 = function () {
    if (this.debug_0)
      this.checkInternalStateFull_0();
  };
  DoubleLinkedList.prototype.checkInternalStateFull_0 = function () {
    var slots = this._getAllocatedSlots_0();
    var slotsReversed = reversed(this._getAllocatedSlotsReverse_0());
    var freeSlots = this._getFreeSlots_0();
    var freeSlotsReverse = reversed(this._getFreeSlotsReverse_0());
    if (!equals(slots, slotsReversed)) {
      throw IllegalStateException_init();
    }
    if (!equals(freeSlots, freeSlotsReverse)) {
      throw IllegalStateException_init();
    }
    if (slots.size !== this.size) {
      throw IllegalStateException_init();
    }
    if ((slots.size + freeSlots.size | 0) !== this.capacity_0) {
      throw IllegalStateException_init();
    }
  };
  DoubleLinkedList.prototype._getAllocatedSlots_0 = function () {
    var slots = ArrayList_init();
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return slots;
  };
  DoubleLinkedList.prototype._getAllocatedSlotsReverse_0 = function () {
    var slots = ArrayList_init();
    var startSlot = this.lastSlot_0;
    var cindex = this.size - 1 | 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.prev_0[cslot];
      cindex = cindex - 1 | 0;
    }
    return slots;
  };
  DoubleLinkedList.prototype._getFreeSlots_0 = function () {
    var slots = ArrayList_init();
    var cindex = 0;
    var cslot = this.firstFreeSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return slots;
  };
  DoubleLinkedList.prototype._getFreeSlotsReverse_0 = function () {
    var slots = ArrayList_init();
    var startSlot = this.lastFreeSlot_0;
    var cindex = this.size - 1 | 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.prev_0[cslot];
      cindex = cindex - 1 | 0;
    }
    return slots;
  };
  DoubleLinkedList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleLinkedList',
    interfaces: [MutableCollection]
  };
  function DoubleLinkedList_init($this) {
    $this = $this || Object.create(DoubleLinkedList.prototype);
    DoubleLinkedList.call($this, false);
    return $this;
  }
  function DoubleQueue() {
    this.items_0 = new DoubleCircularList();
  }
  Object.defineProperty(DoubleQueue.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  Object.defineProperty(DoubleQueue.prototype, 'hasMore', {
    get: function () {
      return this.size > 0;
    }
  });
  DoubleQueue.prototype.isEmpty = function () {
    return this.size === 0;
  };
  DoubleQueue.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  DoubleQueue.prototype.enqueue_14dthe$ = function (v) {
    this.items_0.addLast_14dthe$(v);
  };
  DoubleQueue.prototype.dequeue = function () {
    return this.items_0.removeFirst();
  };
  DoubleQueue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleQueue',
    interfaces: []
  };
  function DoubleQueue_init(items, $this) {
    $this = $this || Object.create(DoubleQueue.prototype);
    DoubleQueue.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      $this.enqueue_14dthe$(item);
    }
    return $this;
  }
  function DoubleStack() {
    this.items_0 = new DoubleArrayList();
  }
  Object.defineProperty(DoubleStack.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  Object.defineProperty(DoubleStack.prototype, 'hasMore', {
    get: function () {
      return this.size > 0;
    }
  });
  DoubleStack.prototype.isEmpty = function () {
    return this.size === 0;
  };
  DoubleStack.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  DoubleStack.prototype.push_14dthe$ = function (v) {
    this.items_0.add_14dthe$(v);
  };
  DoubleStack.prototype.pop = function () {
    return this.items_0.removeAt_za3lpa$(this.items_0.size - 1 | 0);
  };
  DoubleStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DoubleStack',
    interfaces: []
  };
  function DoubleStack_init(items, $this) {
    $this = $this || Object.create(DoubleStack.prototype);
    DoubleStack.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      $this.push_14dthe$(item);
    }
    return $this;
  }
  function Extra() {
  }
  function Extra$Mixin(extra) {
    if (extra === void 0)
      extra = null;
    this.extra_xlwwn3$_0 = extra;
  }
  Object.defineProperty(Extra$Mixin.prototype, 'extra', {
    get: function () {
      return this.extra_xlwwn3$_0;
    },
    set: function (extra) {
      this.extra_xlwwn3$_0 = extra;
    }
  });
  Extra$Mixin.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Mixin',
    interfaces: [Extra]
  };
  function Extra$Property(name, defaultGen) {
    if (name === void 0)
      name = null;
    this.name = name;
    this.defaultGen = defaultGen;
  }
  Extra$Property.prototype.getValue_jvq2vc$ = defineInlineFunction('kds-js.com.soywiz.kds.Extra.Property.getValue_jvq2vc$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var setExtra = _.com.soywiz.kds.setExtra_46skc7$;
    return function (thisRef, property) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = this.defaultGen();
        var tmp$_3, tmp$_4;
        setExtra(thisRef, (tmp$_3 = this.name) != null ? tmp$_3 : property.callableName, (tmp$_4 = r) == null || Kotlin.isType(tmp$_4, Any) ? tmp$_4 : throwCCE());
        return r;
      }
      return res;
    };
  }));
  Extra$Property.prototype.setValue_tgmkxv$ = defineInlineFunction('kds-js.com.soywiz.kds.Extra.Property.setValue_tgmkxv$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var setExtra = _.com.soywiz.kds.setExtra_46skc7$;
    return function (thisRef, property, value) {
      var tmp$, tmp$_0;
      setExtra(thisRef, (tmp$ = this.name) != null ? tmp$ : property.callableName, (tmp$_0 = value) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE());
    };
  }));
  Extra$Property.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Property',
    interfaces: []
  };
  function Extra$PropertyThis(name, defaultGen) {
    if (name === void 0)
      name = null;
    this.name = name;
    this.defaultGen = defaultGen;
  }
  Extra$PropertyThis.prototype.getValue_e5fciw$ = defineInlineFunction('kds-js.com.soywiz.kds.Extra.PropertyThis.getValue_e5fciw$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    var lmapOf = _.com.soywiz.kds.lmapOf_qfcya0$;
    return function (thisRef, property) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2;
      tmp$_1 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      var res = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE();
      if (res == null) {
        var r = this.defaultGen(thisRef);
        var tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
        if (thisRef.extra == null)
          thisRef.extra = lmapOf([]);
        tmp$_7 = thisRef.extra;
        tmp$_4 = (tmp$_3 = this.name) != null ? tmp$_3 : property.callableName;
        tmp$_6 = (tmp$_5 = r) == null || Kotlin.isType(tmp$_5, Any) ? tmp$_5 : throwCCE();
        if (tmp$_7 != null) {
          tmp$_7.put_xwzc9p$(tmp$_4, tmp$_6);
        }
        return r;
      }
      return res;
    };
  }));
  Extra$PropertyThis.prototype.setValue_ajenn0$ = defineInlineFunction('kds-js.com.soywiz.kds.Extra.PropertyThis.setValue_ajenn0$', wrapFunction(function () {
    var lmapOf = _.com.soywiz.kds.lmapOf_qfcya0$;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (thisRef, property, value) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      if (thisRef.extra == null)
        thisRef.extra = lmapOf([]);
      tmp$_3 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      tmp$_2 = (tmp$_1 = value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
      if (tmp$_3 != null) {
        tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
      }
    };
  }));
  Extra$PropertyThis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PropertyThis',
    interfaces: []
  };
  Extra.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Extra',
    interfaces: []
  };
  function getExtraTyped($receiver, name) {
    var tmp$, tmp$_0;
    return (tmp$_0 = (tmp$ = $receiver.extra) != null ? tmp$.get_11rb$(name) : null) == null || Kotlin.isType(tmp$_0, Any) ? tmp$_0 : throwCCE();
  }
  function getExtra($receiver, name) {
    var tmp$;
    return (tmp$ = $receiver.extra) != null ? tmp$.get_11rb$(name) : null;
  }
  function setExtra($receiver, name, value) {
    var tmp$;
    if ($receiver.extra == null)
      $receiver.extra = LinkedHashMap_init();
    if ((tmp$ = $receiver.extra) != null) {
      tmp$.put_xwzc9p$(name, value);
    }
  }
  function extraProperty(name, default_0) {
    if (name === void 0)
      name = null;
    this.name = name;
    this.default = default_0;
  }
  extraProperty.prototype.getValue_jvq2vc$ = defineInlineFunction('kds-js.com.soywiz.kds.extraProperty.getValue_jvq2vc$', wrapFunction(function () {
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (thisRef, property) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      tmp$_1 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      return (tmp$_3 = (tmp$_2 = tmp$_1 != null ? tmp$_1.get_11rb$(tmp$_0) : null) == null || Kotlin.isType(tmp$_2, Any) ? tmp$_2 : throwCCE()) != null ? tmp$_3 : this.default();
    };
  }));
  extraProperty.prototype.setValue_tgmkxv$ = defineInlineFunction('kds-js.com.soywiz.kds.extraProperty.setValue_tgmkxv$', wrapFunction(function () {
    var lmapOf = _.com.soywiz.kds.lmapOf_qfcya0$;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (thisRef, property, value) {
      var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3;
      if (thisRef.extra == null)
        thisRef.extra = lmapOf([]);
      tmp$_3 = thisRef.extra;
      tmp$_0 = (tmp$ = this.name) != null ? tmp$ : property.callableName;
      tmp$_2 = (tmp$_1 = value) == null || Kotlin.isType(tmp$_1, Any) ? tmp$_1 : throwCCE();
      if (tmp$_3 != null) {
        tmp$_3.put_xwzc9p$(tmp$_0, tmp$_2);
      }
    };
  }));
  extraProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'extraProperty',
    interfaces: []
  };
  function IntArrayList(capacity) {
    if (capacity === void 0)
      capacity = 7;
    NumberArrayList.call(this);
    this.data_t2mhd8$_0 = new Int32Array(capacity);
    this.length_0 = 0;
  }
  Object.defineProperty(IntArrayList.prototype, 'data', {
    get: function () {
      return this.data_t2mhd8$_0;
    },
    set: function (data) {
      this.data_t2mhd8$_0 = data;
    }
  });
  Object.defineProperty(IntArrayList.prototype, 'capacity', {
    get: function () {
      return this.data.length;
    }
  });
  Object.defineProperty(IntArrayList.prototype, 'size', {
    get: function () {
      return this.length_0;
    },
    set: function (value) {
      this.ensure_0(value);
      this.length_0 = value;
    }
  });
  IntArrayList.prototype.ensure_0 = function (count) {
    if ((this.length_0 + count | 0) > this.data.length) {
      var tmp$ = this.data;
      var a = this.length_0 + count | 0;
      var b = this.data.length * 3 | 0;
      this.data = copyOf_0(tmp$, Math_0.max(a, b));
    }
  };
  IntArrayList.prototype.clear = function () {
    this.length_0 = 0;
  };
  IntArrayList.prototype.add_za3lpa$ = function (value) {
    var tmp$;
    this.ensure_0(1);
    this.data[tmp$ = this.length_0, this.length_0 = tmp$ + 1 | 0, tmp$] = value;
  };
  IntArrayList.prototype.plusAssign_za3lpa$ = function (value) {
    this.add_za3lpa$(value);
  };
  IntArrayList.prototype.plusAssign_q5rwfd$ = function (value) {
    this.add_nd5v6f$(value);
  };
  IntArrayList.prototype.plusAssign_38vc8i$ = function (value) {
    this.add_38vc8i$(value);
  };
  IntArrayList.prototype.plusAssign_ampky3$ = function (value) {
    this.add_ampky3$(value);
  };
  IntArrayList.prototype.add_nd5v6f$ = function (values, offset, length) {
    if (offset === void 0)
      offset = 0;
    if (length === void 0)
      length = values.length;
    this.ensure_0(values.length);
    MemTools_getInstance().arraycopy_lvhpry$(values, offset, this.data, this.length_0, length);
    this.length_0 = this.length_0 + values.length | 0;
  };
  IntArrayList.prototype.add_38vc8i$ = function (values) {
    this.add_nd5v6f$(values.data, 0, values.length_0);
  };
  IntArrayList.prototype.add_ampky3$ = function (values) {
    var tmp$;
    tmp$ = values.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      this.add_za3lpa$(v);
    }
  };
  IntArrayList.prototype.get_za3lpa$ = function (index) {
    var tmp$;
    tmp$ = this.length_0;
    return 0 <= index && index < tmp$ ? this.data[index] : 0;
  };
  IntArrayList.prototype.set_vux9f0$ = function (index, value) {
    if (index >= this.length_0) {
      this.ensure_0(index + 1 | 0);
      this.length_0 = index + 1 | 0;
    }
    this.data[index] = value;
  };
  IntArrayList.prototype.iterator = function () {
    return take_0(this.data, this.length_0).iterator();
  };
  IntArrayList.prototype.contains_11rb$ = function (element) {
    var tmp$;
    tmp$ = this.length_0;
    for (var n = 0; n < tmp$; n++)
      if (this.data[n] === element)
        return true;
    return false;
  };
  IntArrayList.prototype.containsAll_brywnq$ = function (elements) {
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      if (!this.contains_11rb$(e))
        return false;
    }
    return true;
  };
  IntArrayList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  IntArrayList.prototype.indexOf_qt1dr2$ = function (value, start, end) {
    if (start === void 0)
      start = 0;
    if (end === void 0)
      end = this.size;
    for (var n = start; n < end; n++)
      if (this.data[n] === value)
        return n;
    return -1;
  };
  IntArrayList.prototype.removeAt_za3lpa$ = function (index) {
    if (index < 0 || index >= this.length_0)
      throw IndexOutOfBoundsException_init();
    var out = this.data[index];
    if (index < (this.length_0 - 1 | 0))
      MemTools_getInstance().arraycopy_lvhpry$(this.data, index + 1 | 0, this.data, index, this.length_0 - index - 1 | 0);
    this.length_0 = this.length_0 - 1 | 0;
    return out;
  };
  IntArrayList.prototype.getDouble_za3lpa$ = function (index) {
    return this.get_za3lpa$(index);
  };
  IntArrayList.prototype.setDouble_5wr77w$ = function (index, value) {
    this.set_vux9f0$(index, numberToInt(value));
  };
  IntArrayList.prototype.toIntArray = function () {
    return copyOf_0(this.data, this.length_0);
  };
  IntArrayList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntArrayList',
    interfaces: [Collection, NumberArrayList]
  };
  function IntArrayList_init(other, $this) {
    $this = $this || Object.create(IntArrayList.prototype);
    IntArrayList.call($this);
    $this.add_38vc8i$(other);
    return $this;
  }
  function IntArrayList_init_0(other, $this) {
    $this = $this || Object.create(IntArrayList.prototype);
    IntArrayList.call($this);
    $this.add_nd5v6f$(other);
    return $this;
  }
  function binarySearch_0($receiver, value) {
    return binarySearch_1($receiver.data, value, 0, $receiver.size);
  }
  function intArrayListOf(ints) {
    return IntArrayList_init_0(ints.slice());
  }
  function IntCircularList() {
    this._start_0 = 0;
    this._size_0 = 0;
    this.data_0 = new Int32Array(16);
  }
  Object.defineProperty(IntCircularList.prototype, 'capacity_0', {
    get: function () {
      return this.data_0.length;
    }
  });
  Object.defineProperty(IntCircularList.prototype, 'size', {
    get: function () {
      return this._size_0;
    }
  });
  IntCircularList.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  IntCircularList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  IntCircularList.prototype.resizeIfRequiredFor_0 = function (count) {
    if ((this.size + count | 0) > this.capacity_0) {
      var i = this.data_0;
      var istart = this._start_0;
      var o = new Int32Array(this.data_0.length * 2 | 0);
      this.copyCyclic_0(i, istart, o, this._size_0);
      this.data_0 = o;
      this._start_0 = 0;
    }
  };
  IntCircularList.prototype.copyCyclic_0 = function (i, istart, o, count) {
    var a = i.length - istart | 0;
    var size1 = Math_0.min(a, count);
    var size2 = count - size1 | 0;
    MemTools_getInstance().arraycopy_lvhpry$(i, istart, o, 0, size1);
    if (size2 > 0)
      MemTools_getInstance().arraycopy_lvhpry$(i, 0, o, size1, size2);
  };
  IntCircularList.prototype.addAll_ampky3$ = function (items) {
    var tmp$;
    this.resizeIfRequiredFor_0(count(items));
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var i = tmp$.next();
      this.addLast_za3lpa$(i);
    }
  };
  IntCircularList.prototype.addFirst_za3lpa$ = function (item) {
    this.resizeIfRequiredFor_0(1);
    this._start_0 = package$kds.KdsExt.umod_dqglrj$(this._start_0 - 1 | 0, this.capacity_0);
    this._size_0 = this._size_0 + 1 | 0;
    this.data_0[this._start_0] = item;
  };
  IntCircularList.prototype.addLast_za3lpa$ = function (item) {
    this.resizeIfRequiredFor_0(1);
    this.data_0[package$kds.KdsExt.umod_dqglrj$(this._start_0 + this.size | 0, this.capacity_0)] = item;
    this._size_0 = this._size_0 + 1 | 0;
  };
  IntCircularList.prototype.removeFirst = function () {
    if (this._size_0 <= 0)
      throw IndexOutOfBoundsException_init();
    var $receiver = this.first;
    var tmp$;
    this._start_0 = package$kds.KdsExt.umod_dqglrj$(this._start_0 + 1 | 0, this.capacity_0);
    tmp$ = this._size_0, this._size_0 = tmp$ - 1 | 0;
    return $receiver;
  };
  IntCircularList.prototype.removeLast = function () {
    if (this._size_0 <= 0)
      throw IndexOutOfBoundsException_init();
    var $receiver = this.last;
    this._size_0 = this._size_0 - 1 | 0;
    return $receiver;
  };
  IntCircularList.prototype.removeAt_za3lpa$ = function (index) {
    var tmp$;
    if (index < 0 || index >= this.size)
      throw IndexOutOfBoundsException_init();
    if (index === 0)
      return this.removeFirst();
    if (index === (this.size - 1 | 0))
      return this.removeLast();
    var old = this.get_za3lpa$(index);
    tmp$ = this.size - 1 | 0;
    for (var n = index; n < tmp$; n++)
      this.set_vux9f0$(n, this.get_za3lpa$(n + 1 | 0));
    this._size_0 = this._size_0 - 1 | 0;
    return old;
  };
  IntCircularList.prototype.add_11rb$ = function (element) {
    this.addLast_za3lpa$(element);
    return true;
  };
  IntCircularList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    this.addAll_ampky3$(Kotlin.isType(tmp$ = elements, Iterable) ? tmp$ : throwCCE());
    return true;
  };
  IntCircularList.prototype.clear = function () {
    this._size_0 = 0;
  };
  IntCircularList.prototype.remove_11rb$ = function (element) {
    var index = this.indexOf_za3lpa$(element);
    if (index >= 0)
      this.removeAt_za3lpa$(index);
    return index >= 0;
  };
  IntCircularList.prototype.removeAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, false);
  };
  IntCircularList.prototype.retainAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, true);
  };
  IntCircularList.prototype._removeRetainAll_0 = function (elements, retain) {
    var tmp$, tmp$_0;
    var eset = toSet(elements);
    var temp = this.data_0.slice();
    var tsize = 0;
    var osize = this.size;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++) {
      var c = this.get_za3lpa$(n);
      if (eset.contains_11rb$(c) === retain) {
        temp[tmp$_0 = tsize, tsize = tmp$_0 + 1 | 0, tmp$_0] = c;
      }
    }
    this.data_0 = temp;
    this._start_0 = 0;
    this._size_0 = tsize;
    return tsize !== osize;
  };
  Object.defineProperty(IntCircularList.prototype, 'first', {
    get: function () {
      return this.data_0[this._start_0];
    }
  });
  Object.defineProperty(IntCircularList.prototype, 'last', {
    get: function () {
      return this.data_0[this.internalIndex_0(this.size - 1 | 0)];
    }
  });
  IntCircularList.prototype.internalIndex_0 = function (index) {
    return package$kds.KdsExt.umod_dqglrj$(this._start_0 + index | 0, this.capacity_0);
  };
  IntCircularList.prototype.set_vux9f0$ = function (index, value) {
    this.data_0[this.internalIndex_0(index)] = value;
  };
  IntCircularList.prototype.get_za3lpa$ = function (index) {
    return this.data_0[this.internalIndex_0(index)];
  };
  IntCircularList.prototype.contains_11rb$ = function (element) {
    var $receiver = until(0, this.size);
    var any$result;
    any$break: do {
      var tmp$;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        any$result = false;
        break any$break;
      }
      tmp$ = $receiver.iterator();
      while (tmp$.hasNext()) {
        var element_0 = tmp$.next();
        if (this.get_za3lpa$(element_0) === element) {
          any$result = true;
          break any$break;
        }
      }
      any$result = false;
    }
     while (false);
    return any$result;
  };
  IntCircularList.prototype.indexOf_za3lpa$ = function (element) {
    var tmp$;
    tmp$ = this.size;
    for (var n = 0; n < tmp$; n++)
      if (this.get_za3lpa$(n) === element)
        return n;
    return -1;
  };
  IntCircularList.prototype.containsAll_brywnq$ = function (elements) {
    var tmp$;
    var destination = ArrayList_init_0(collectionSizeOrDefault(elements, 10));
    var tmp$_0;
    tmp$_0 = elements.iterator();
    while (tmp$_0.hasNext()) {
      var item = tmp$_0.next();
      destination.add_11rb$(to(item, 0));
    }
    var emap = toLinkedMap(destination);
    tmp$ = this.size;
    for (var it = 0; it < tmp$; it++) {
      var e = this.get_za3lpa$(it);
      var tmp$_1;
      if ((Kotlin.isType(tmp$_1 = emap, Map) ? tmp$_1 : throwCCE()).containsKey_11rb$(e)) {
        emap.put_xwzc9p$(e, 1);
      }
    }
    var $receiver = emap.values;
    var all$result;
    all$break: do {
      var tmp$_2;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$_2 = $receiver.iterator();
      while (tmp$_2.hasNext()) {
        var element = tmp$_2.next();
        if (!(element === 1)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  function IntCircularList$iterator$ObjectLiteral(this$IntCircularList) {
    this.this$IntCircularList = this$IntCircularList;
    this.index = 0;
  }
  IntCircularList$iterator$ObjectLiteral.prototype.next = function () {
    var tmp$;
    return this.this$IntCircularList.get_za3lpa$((tmp$ = this.index, this.index = tmp$ + 1 | 0, tmp$));
  };
  IntCircularList$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.index < this.this$IntCircularList.size;
  };
  IntCircularList$iterator$ObjectLiteral.prototype.remove = function () {
    throw new NotImplementedError_init();
  };
  IntCircularList$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MutableIterator]
  };
  IntCircularList.prototype.iterator = function () {
    return new IntCircularList$iterator$ObjectLiteral(this);
  };
  IntCircularList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntCircularList',
    interfaces: [MutableCollection]
  };
  function KdsExt() {
    KdsExt_instance = this;
  }
  KdsExt.prototype.divCeil_dqglrj$ = function ($receiver, that) {
    return $receiver % that !== 0 ? ($receiver / that | 0) + 1 | 0 : $receiver / that | 0;
  };
  KdsExt.prototype.umod_dqglrj$ = function ($receiver, other) {
    var tmp$;
    var remainder = $receiver % other;
    if (remainder < 0)
      tmp$ = remainder + other | 0;
    else
      tmp$ = remainder;
    return tmp$;
  };
  KdsExt.prototype.umod_38ydlf$ = function ($receiver, other) {
    var tmp$;
    var remainder = $receiver % other;
    if (remainder < 0)
      tmp$ = remainder + other;
    else
      tmp$ = remainder;
    return tmp$;
  };
  KdsExt.prototype.ilog2_za3lpa$ = function (v) {
    return numberToInt(Math_0.log2(v));
  };
  KdsExt.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'KdsExt',
    interfaces: []
  };
  var KdsExt_instance = null;
  function KdsExt_getInstance() {
    if (KdsExt_instance === null) {
      new KdsExt();
    }
    return KdsExt_instance;
  }
  var KdsExt_0 = defineInlineFunction('kds-js.com.soywiz.kds.KdsExt_5gqd57$', wrapFunction(function () {
    var kds = _.com.soywiz.kds;
    return function (callback) {
      return callback(kds.KdsExt);
    };
  }));
  function IntFloatMap() {
    this.i_0 = IntIntMap_init();
  }
  Object.defineProperty(IntFloatMap.prototype, 'size', {
    get: function () {
      return this.i_0.size;
    }
  });
  IntFloatMap.prototype.clear = function () {
    this.i_0.clear();
  };
  IntFloatMap.prototype.remove_za3lpa$ = function (key) {
    return this.i_0.remove_za3lpa$(key);
  };
  Object.defineProperty(IntFloatMap.prototype, 'keys', {
    get: function () {
      return this.i_0.keys;
    }
  });
  function IntFloatMap$get_IntFloatMap$values$ObjectLiteral(this$IntFloatMap) {
    this.this$IntFloatMap = this$IntFloatMap;
  }
  function IntFloatMap$get_IntFloatMap$values$ObjectLiteral$iterator$ObjectLiteral(this$IntFloatMap) {
    this.it = this$IntFloatMap.i_0.values.iterator();
  }
  IntFloatMap$get_IntFloatMap$values$ObjectLiteral$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.it.hasNext();
  };
  IntFloatMap$get_IntFloatMap$values$ObjectLiteral$iterator$ObjectLiteral.prototype.next = function () {
    var bits = this.it.next();
    return Kotlin.floatFromBits(bits);
  };
  IntFloatMap$get_IntFloatMap$values$ObjectLiteral$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  IntFloatMap$get_IntFloatMap$values$ObjectLiteral.prototype.iterator = function () {
    return new IntFloatMap$get_IntFloatMap$values$ObjectLiteral$iterator$ObjectLiteral(this.this$IntFloatMap);
  };
  IntFloatMap$get_IntFloatMap$values$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  Object.defineProperty(IntFloatMap.prototype, 'values', {
    get: function () {
      return new IntFloatMap$get_IntFloatMap$values$ObjectLiteral(this);
    }
  });
  function IntFloatMap$get_IntFloatMap$entries$ObjectLiteral(this$IntFloatMap) {
    this.this$IntFloatMap = this$IntFloatMap;
  }
  function IntFloatMap$get_IntFloatMap$entries$ObjectLiteral$iterator$ObjectLiteral(this$IntFloatMap) {
    this.it = this$IntFloatMap.i_0.entries.iterator();
  }
  IntFloatMap$get_IntFloatMap$entries$ObjectLiteral$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.it.hasNext();
  };
  IntFloatMap$get_IntFloatMap$entries$ObjectLiteral$iterator$ObjectLiteral.prototype.next = function () {
    var it = this.it.next();
    var tmp$ = it.key;
    var bits = it.value;
    return new IntFloatMap$Entry(tmp$, Kotlin.floatFromBits(bits));
  };
  IntFloatMap$get_IntFloatMap$entries$ObjectLiteral$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  IntFloatMap$get_IntFloatMap$entries$ObjectLiteral.prototype.iterator = function () {
    return new IntFloatMap$get_IntFloatMap$entries$ObjectLiteral$iterator$ObjectLiteral(this.this$IntFloatMap);
  };
  IntFloatMap$get_IntFloatMap$entries$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: []
  };
  Object.defineProperty(IntFloatMap.prototype, 'entries', {
    get: function () {
      return new IntFloatMap$get_IntFloatMap$entries$ObjectLiteral(this);
    }
  });
  function IntFloatMap$Entry(key, value) {
    this.key = key;
    this.value = value;
  }
  IntFloatMap$Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: []
  };
  IntFloatMap$Entry.prototype.component1 = function () {
    return this.key;
  };
  IntFloatMap$Entry.prototype.component2 = function () {
    return this.value;
  };
  IntFloatMap$Entry.prototype.copy_24o109$ = function (key, value) {
    return new IntFloatMap$Entry(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  IntFloatMap$Entry.prototype.toString = function () {
    return 'Entry(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  IntFloatMap$Entry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  IntFloatMap$Entry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };
  IntFloatMap.prototype.contains_za3lpa$ = function (key) {
    return this.i_0.contains_za3lpa$(key);
  };
  IntFloatMap.prototype.get_za3lpa$ = function (key) {
    var bits = this.i_0.get_za3lpa$(key);
    return Kotlin.floatFromBits(bits);
  };
  IntFloatMap.prototype.set_24o109$ = function (key, value) {
    var bits = this.i_0.set_vux9f0$(key, toRawBits(value));
    return Kotlin.floatFromBits(bits);
  };
  IntFloatMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntFloatMap',
    interfaces: []
  };
  function IntIntMap(nbits, loadFactor) {
    IntIntMap$Companion_getInstance();
    this.nbits_0 = nbits;
    this.loadFactor_0 = loadFactor;
    this.capacity_0 = 1 << this.nbits_0;
    this.hasZero_0 = false;
    this.zeroValue_0 = 0;
    this.mask_0 = this.capacity_0 - 1 | 0;
    this.stashSize_0 = 1 + package$kds.KdsExt.ilog2_za3lpa$(this.capacity_0) | 0;
    this._keys_0 = new Int32Array(this.capacity_0 + this.stashSize_0 | 0);
    this._values_0 = new Int32Array(this.capacity_0 + this.stashSize_0 | 0);
    this.growSize_0 = numberToInt(this.capacity_0 * this.loadFactor_0);
    this.size_8bfyfx$_0 = 0;
  }
  function IntIntMap$Companion() {
    IntIntMap$Companion_instance = this;
    this.EOF_0 = 2147483646;
    this.ZERO_INDEX_0 = 2147483647;
    this.EMPTY_0 = 0;
  }
  IntIntMap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntIntMap$Companion_instance = null;
  function IntIntMap$Companion_getInstance() {
    if (IntIntMap$Companion_instance === null) {
      new IntIntMap$Companion();
    }
    return IntIntMap$Companion_instance;
  }
  Object.defineProperty(IntIntMap.prototype, 'stashStart_0', {
    get: function () {
      return this._keys_0.length - this.stashSize_0 | 0;
    }
  });
  Object.defineProperty(IntIntMap.prototype, 'size', {
    get: function () {
      return this.size_8bfyfx$_0;
    },
    set: function (size) {
      this.size_8bfyfx$_0 = size;
    }
  });
  IntIntMap.prototype.grow_0 = function () {
    var tmp$;
    var new_0 = new IntIntMap(this.nbits_0 + 3 | 0, this.loadFactor_0);
    tmp$ = this._keys_0;
    for (var n = 0; n !== tmp$.length; ++n) {
      var k = this._keys_0[n];
      if (k !== 0)
        new_0.set_vux9f0$(k, this._values_0[n]);
    }
    this.nbits_0 = new_0.nbits_0;
    this.capacity_0 = new_0.capacity_0;
    this.mask_0 = new_0.mask_0;
    this.stashSize_0 = new_0.stashSize_0;
    this._keys_0 = new_0._keys_0;
    this._values_0 = new_0._values_0;
    this.growSize_0 = new_0.growSize_0;
  };
  IntIntMap.prototype.contains_za3lpa$ = function (key) {
    return this._getKeyIndex_0(key) >= 0;
  };
  IntIntMap.prototype._getKeyIndex_0 = function (key) {
    var tmp$, tmp$_0;
    if (key === 0)
      return this.hasZero_0 ? 2147483647 : -1;
    var index1 = this.hash1_0(key);
    if (this._keys_0[index1] === key)
      return index1;
    var index2 = this.hash2_0(key);
    if (this._keys_0[index2] === key)
      return index2;
    var index3 = this.hash3_0(key);
    if (this._keys_0[index3] === key)
      return index3;
    tmp$ = this.stashStart_0;
    tmp$_0 = this._keys_0.length;
    for (var n = tmp$; n < tmp$_0; n++)
      if (this._keys_0[n] === key)
        return n;
    return -1;
  };
  IntIntMap.prototype.remove_za3lpa$ = function (key) {
    var index = this._getKeyIndex_0(key);
    if (index < 0)
      return false;
    if (index === 2147483647) {
      this.hasZero_0 = false;
      this.zeroValue_0 = 0;
    }
     else {
      this._keys_0[index] = 0;
    }
    this.size = this.size - 1 | 0;
    return true;
  };
  IntIntMap.prototype.clear = function () {
    this.hasZero_0 = false;
    this.zeroValue_0 = 0;
    MemTools_getInstance().fill_u4kcgn$(this._keys_0, 0);
    MemTools_getInstance().fill_u4kcgn$(this._values_0, 0);
    this.size = 0;
  };
  IntIntMap.prototype.get_za3lpa$ = function (key) {
    var index = this._getKeyIndex_0(key);
    if (index < 0)
      return 0;
    if (index === 2147483647)
      return this.zeroValue_0;
    return this._values_0[index];
  };
  IntIntMap.prototype.setEmptySlot_0 = function (index, key, value) {
    if (this._keys_0[index] !== 0)
      throw IllegalStateException_init();
    this._keys_0[index] = key;
    this._values_0[index] = value;
    this.size = this.size + 1 | 0;
    return 0;
  };
  IntIntMap.prototype.set_vux9f0$ = function (key, value) {
    var tmp$, tmp$_0;
    retry: while (true) {
      var index = this._getKeyIndex_0(key);
      if (index < 0) {
        if (key === 0) {
          this.hasZero_0 = true;
          this.zeroValue_0 = value;
          this.size = this.size + 1 | 0;
          return 0;
        }
        if (this.size >= this.growSize_0)
          this.grow_0();
        var index1 = this.hash1_0(key);
        if (this._keys_0[index1] === 0)
          return this.setEmptySlot_0(index1, key, value);
        var index2 = this.hash2_0(key);
        if (this._keys_0[index2] === 0)
          return this.setEmptySlot_0(index2, key, value);
        var index3 = this.hash3_0(key);
        if (this._keys_0[index3] === 0)
          return this.setEmptySlot_0(index3, key, value);
        tmp$ = this.stashStart_0;
        tmp$_0 = this._keys_0.length;
        for (var n = tmp$; n < tmp$_0; n++)
          if (this._keys_0[n] === 0)
            return this.setEmptySlot_0(n, key, value);
        this.grow_0();
        continue retry;
      }
       else if (index === 2147483647) {
        var $receiver = this.zeroValue_0;
        this.zeroValue_0 = value;
        return $receiver;
      }
       else {
        var $receiver_0 = this._values_0[index];
        this._values_0[index] = value;
        return $receiver_0;
      }
    }
  };
  IntIntMap.prototype.getOrPut_s8if2w$ = function (key, callback) {
    if (!this.contains_za3lpa$(key))
      this.set_vux9f0$(key, callback());
    return this.get_za3lpa$(key);
  };
  IntIntMap.prototype.hash1_0 = function (key) {
    return key & this.mask_0;
  };
  IntIntMap.prototype.hash2_0 = function (key) {
    return Kotlin.imul(key, -306674912) & this.mask_0;
  };
  IntIntMap.prototype.hash3_0 = function (key) {
    return Kotlin.imul(key, -1262997959) & this.mask_0;
  };
  function IntIntMap$Entry(key, value) {
    this.key = key;
    this.value = value;
  }
  IntIntMap$Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: []
  };
  IntIntMap$Entry.prototype.component1 = function () {
    return this.key;
  };
  IntIntMap$Entry.prototype.component2 = function () {
    return this.value;
  };
  IntIntMap$Entry.prototype.copy_vux9f0$ = function (key, value) {
    return new IntIntMap$Entry(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  IntIntMap$Entry.prototype.toString = function () {
    return 'Entry(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  IntIntMap$Entry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  IntIntMap$Entry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };
  Object.defineProperty(IntIntMap.prototype, 'keys', {
    get: function () {
      return new IntIntMap$KeyIterable(this);
    }
  });
  Object.defineProperty(IntIntMap.prototype, 'values', {
    get: function () {
      return new IntIntMap$ValueIterable(this);
    }
  });
  Object.defineProperty(IntIntMap.prototype, 'entries', {
    get: function () {
      return new IntIntMap$EntryIterable(this);
    }
  });
  Object.defineProperty(IntIntMap.prototype, 'pooledKeys', {
    get: function () {
      return new IntIntMap$KeyIterable(this);
    }
  });
  Object.defineProperty(IntIntMap.prototype, 'pooledValues', {
    get: function () {
      return new IntIntMap$ValueIterable(this);
    }
  });
  Object.defineProperty(IntIntMap.prototype, 'pooledEntries', {
    get: function () {
      return new IntIntMap$EntryIterable(this);
    }
  });
  function IntIntMap$KeyIterable($outer) {
    this.$outer = $outer;
  }
  IntIntMap$KeyIterable.prototype.iterator = function () {
    return new IntIntMap$KeyIterator(this.$outer);
  };
  IntIntMap$KeyIterable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyIterable',
    interfaces: []
  };
  function IntIntMap$ValueIterable($outer) {
    this.$outer = $outer;
  }
  IntIntMap$ValueIterable.prototype.iterator = function () {
    return new IntIntMap$ValueIterator(this.$outer);
  };
  IntIntMap$ValueIterable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValueIterable',
    interfaces: []
  };
  function IntIntMap$EntryIterable($outer) {
    this.$outer = $outer;
  }
  IntIntMap$EntryIterable.prototype.iterator = function () {
    return new IntIntMap$EntryIterator(this.$outer);
  };
  IntIntMap$EntryIterable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EntryIterable',
    interfaces: []
  };
  function IntIntMap$KeyIterator($outer, it) {
    this.$outer = $outer;
    if (it === void 0)
      it = new IntIntMap$Iterator(this.$outer);
    this.it_0 = it;
  }
  IntIntMap$KeyIterator.prototype.hasNext = function () {
    return this.it_0.hasNext();
  };
  IntIntMap$KeyIterator.prototype.next = function () {
    return this.it_0.nextKey();
  };
  IntIntMap$KeyIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyIterator',
    interfaces: []
  };
  function IntIntMap$ValueIterator($outer, it) {
    this.$outer = $outer;
    if (it === void 0)
      it = new IntIntMap$Iterator(this.$outer);
    this.it_0 = it;
  }
  IntIntMap$ValueIterator.prototype.hasNext = function () {
    return this.it_0.hasNext();
  };
  IntIntMap$ValueIterator.prototype.next = function () {
    return this.it_0.nextValue();
  };
  IntIntMap$ValueIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValueIterator',
    interfaces: []
  };
  function IntIntMap$EntryIterator($outer, it) {
    this.$outer = $outer;
    if (it === void 0)
      it = new IntIntMap$Iterator(this.$outer);
    this.it_0 = it;
  }
  IntIntMap$EntryIterator.prototype.hasNext = function () {
    return this.it_0.hasNext();
  };
  IntIntMap$EntryIterator.prototype.next = function () {
    return this.it_0.nextEntry().copy_vux9f0$();
  };
  IntIntMap$EntryIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EntryIterator',
    interfaces: []
  };
  function IntIntMap$Iterator($outer) {
    this.$outer = $outer;
    this.index_0 = this.$outer.hasZero_0 ? 2147483647 : this.nextNonEmptyIndex_0(this.$outer._keys_0, 0);
    this.entry_0 = new IntIntMap$Entry(0, 0);
  }
  IntIntMap$Iterator.prototype.hasNext = function () {
    return this.index_0 !== 2147483646;
  };
  IntIntMap$Iterator.prototype.nextEntry = function () {
    var $receiver = this.currentEntry_0();
    this.next_0();
    return $receiver;
  };
  IntIntMap$Iterator.prototype.nextKey = function () {
    var $receiver = this.currentKey_0();
    this.next_0();
    return $receiver;
  };
  IntIntMap$Iterator.prototype.nextValue = function () {
    var $receiver = this.currentValue_0();
    this.next_0();
    return $receiver;
  };
  IntIntMap$Iterator.prototype.currentEntry_0 = function () {
    this.entry_0.key = this.currentKey_0();
    this.entry_0.value = this.currentValue_0();
    return this.entry_0;
  };
  IntIntMap$Iterator.prototype.currentKey_0 = function () {
    switch (this.index_0) {
      case 2147483647:
      case 2147483646:
        return 0;
      default:return this.$outer._keys_0[this.index_0];
    }
  };
  IntIntMap$Iterator.prototype.currentValue_0 = function () {
    switch (this.index_0) {
      case 2147483647:
        return this.$outer.zeroValue_0;
      case 2147483646:
        return 0;
      default:return this.$outer._values_0[this.index_0];
    }
  };
  IntIntMap$Iterator.prototype.nextNonEmptyIndex_0 = function (keys, offset) {
    for (var n = offset; n < keys.length; n++)
      if (keys[n] !== 0)
        return n;
    return 2147483646;
  };
  IntIntMap$Iterator.prototype.next_0 = function () {
    if (this.index_0 !== 2147483646)
      this.index_0 = this.nextNonEmptyIndex_0(this.$outer._keys_0, this.index_0 === 2147483647 ? 0 : this.index_0 + 1 | 0);
  };
  IntIntMap$Iterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Iterator',
    interfaces: []
  };
  IntIntMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntIntMap',
    interfaces: []
  };
  function IntIntMap_init(loadFactor, $this) {
    if (loadFactor === void 0)
      loadFactor = 0.75;
    $this = $this || Object.create(IntIntMap.prototype);
    IntIntMap.call($this, 4, loadFactor);
    return $this;
  }
  function IntLinkedList(debug) {
    IntLinkedList$Companion_getInstance();
    this.debug_0 = debug;
    this.firstSlot_0 = -1;
    this.lastSlot_0 = -1;
    this.firstFreeSlot_0 = 0;
    this.lastFreeSlot_0 = 15;
    this.size_g83n9j$_0 = 0;
    var array = new Int32Array(16);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = i - 1 | 0;
    }
    this.prev_0 = array;
    var array_0 = new Int32Array(16);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = i_0 + 1 | 0;
    }
    this.next_0 = array_0;
    this.items_0 = new Int32Array(16);
    this.prev_0[0] = -1;
    this.next_0[this.next_0.length - 1 | 0] = -1;
    this.checkInternalState_0();
  }
  function IntLinkedList$Companion() {
    IntLinkedList$Companion_instance = this;
    this.NONE_0 = -1;
  }
  IntLinkedList$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntLinkedList$Companion_instance = null;
  function IntLinkedList$Companion_getInstance() {
    if (IntLinkedList$Companion_instance === null) {
      new IntLinkedList$Companion();
    }
    return IntLinkedList$Companion_instance;
  }
  Object.defineProperty(IntLinkedList.prototype, 'size', {
    get: function () {
      return this.size_g83n9j$_0;
    },
    set: function (size) {
      this.size_g83n9j$_0 = size;
    }
  });
  Object.defineProperty(IntLinkedList.prototype, 'capacity_0', {
    get: function () {
      return this.items_0.length;
    }
  });
  IntLinkedList.prototype.get_za3lpa$ = function (index) {
    if (index < 0 || index >= this.size)
      throw IndexOutOfBoundsException_init();
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cindex_0 = cindex;
      var slot = cslot;
      if (cindex_0 === index)
        return this.items_0[slot];
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    throw IllegalStateException_init();
  };
  IntLinkedList.prototype.contains_11rb$ = function (item) {
    return this.indexOf_za3lpa$(item) !== -1;
  };
  Object.defineProperty(IntLinkedList.prototype, 'first', {
    get: function () {
      return getOrNull_0(this.items_0, this.firstSlot_0);
    }
  });
  Object.defineProperty(IntLinkedList.prototype, 'last', {
    get: function () {
      return getOrNull_0(this.items_0, this.lastSlot_0);
    }
  });
  IntLinkedList.prototype.ensure_0 = function (count) {
    var oldCapacity = this.capacity_0;
    if ((this.size + count | 0) >= oldCapacity) {
      var newCapacity = oldCapacity * 4 | 0;
      this.prev_0 = copyOf_0(this.prev_0, newCapacity);
      this.next_0 = copyOf_0(this.next_0, newCapacity);
      this.items_0 = copyOf_0(this.items_0, newCapacity);
      for (var n = oldCapacity + 1 | 0; n < newCapacity; n++)
        this.prev_0[n] = n - 1 | 0;
      for (var n_0 = oldCapacity; n_0 < newCapacity; n_0++)
        this.next_0[n_0] = n_0 + 1 | 0;
      this.prev_0[oldCapacity] = this.lastFreeSlot_0;
      this.next_0[this.lastFreeSlot_0] = oldCapacity;
      this.next_0[newCapacity - 1 | 0] = -1;
      this.lastFreeSlot_0 = newCapacity - 1 | 0;
    }
  };
  IntLinkedList.prototype.addLast_za3lpa$ = function (item) {
    var slot = this.allocateSlot_0();
    if (this.lastSlot_0 !== -1)
      this.next_0[this.lastSlot_0] = slot;
    this.next_0[slot] = -1;
    this.prev_0[slot] = this.lastSlot_0;
    this.items_0[slot] = item;
    if (this.firstSlot_0 === -1)
      this.firstSlot_0 = slot;
    this.lastSlot_0 = slot;
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return slot;
  };
  IntLinkedList.prototype.addFirst_za3lpa$ = function (item) {
    var slot = this.allocateSlot_0();
    if (this.firstSlot_0 !== -1)
      this.prev_0[this.firstSlot_0] = slot;
    this.prev_0[slot] = -1;
    this.next_0[slot] = this.firstSlot_0;
    this.items_0[slot] = item;
    if (this.lastSlot_0 === -1)
      this.lastSlot_0 = slot;
    this.firstSlot_0 = slot;
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return slot;
  };
  IntLinkedList.prototype.allocateSlot_0 = function () {
    this.ensure_0(1);
    var slot = this.firstFreeSlot_0;
    this.firstFreeSlot_0 = this.next_0[this.firstFreeSlot_0];
    if (this.firstFreeSlot_0 === -1) {
      throw IllegalStateException_init();
    }
    this.prev_0[this.firstFreeSlot_0] = -1;
    return slot;
  };
  IntLinkedList.prototype.freeSlot_0 = function (slot) {
    this.prev_0[this.firstFreeSlot_0] = slot;
    this.next_0[slot] = this.firstFreeSlot_0;
    this.prev_0[slot] = -1;
    this.firstFreeSlot_0 = slot;
    this.checkInternalState_0();
  };
  IntLinkedList.prototype.addAt_vux9f0$ = function (index, item) {
    if (index === 0)
      return this.addFirst_za3lpa$(item);
    if (index === this.size)
      return this.addLast_za3lpa$(item);
    return this.addBeforeSlot_vux9f0$(this.slotOfIndex_za3lpa$(index), item);
  };
  IntLinkedList.prototype.addBeforeSlot_vux9f0$ = function (slot, item) {
    if (slot === -1)
      throw IllegalArgumentException_init();
    var newSlot = this.allocateSlot_0();
    this.items_0[newSlot] = item;
    this.prev_0[newSlot] = this.prev_0[slot];
    this.next_0[newSlot] = slot;
    if (this.prev_0[slot] !== -1) {
      this.next_0[this.prev_0[slot]] = newSlot;
    }
    this.prev_0[slot] = newSlot;
    if (this.firstSlot_0 === slot) {
      this.firstSlot_0 = newSlot;
    }
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return newSlot;
  };
  IntLinkedList.prototype.addAfterSlot_vux9f0$ = function (slot, item) {
    var newSlot = this.allocateSlot_0();
    this.next_0[newSlot] = this.next_0[slot];
    this.prev_0[newSlot] = slot;
    if (this.next_0[slot] !== -1) {
      this.prev_0[this.next_0[slot]] = newSlot;
    }
    this.next_0[slot] = newSlot;
    this.items_0[newSlot] = item;
    if (this.lastSlot_0 === slot) {
      this.lastSlot_0 = newSlot;
    }
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return newSlot;
  };
  IntLinkedList.prototype.indexOf_za3lpa$ = function (item) {
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cindex_0 = cindex;
      if (this.items_0[cslot] === item)
        return cindex_0;
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return -1;
  };
  IntLinkedList.prototype.slotOf_za3lpa$ = function (item) {
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      if (this.items_0[cslot_0] === item)
        return cslot_0;
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return -1;
  };
  IntLinkedList.prototype.slotOfIndex_za3lpa$ = function (index) {
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cindex_0 = cindex;
      var cslot_0 = cslot;
      if (cindex_0 === index)
        return cslot_0;
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return -1;
  };
  IntLinkedList.prototype.remove_11rb$ = function (item) {
    var slot = this.slotOf_za3lpa$(item);
    if (slot !== -1)
      this.removeSlot_za3lpa$(slot);
    return slot !== -1;
  };
  IntLinkedList.prototype.removeAt_za3lpa$ = function (index) {
    if (index < 0 || index >= this.size)
      throw IndexOutOfBoundsException_init();
    if (index >= (this.size / 2 | 0)) {
      var startSlot;
      startSlot = this.lastSlot_0;
      var cindex = this.size - 1 | 0;
      var cslot = startSlot;
      while (cslot !== -1) {
        var cindex_0 = cindex;
        var cslot_0 = cslot;
        if (cindex_0 === index)
          return this.removeSlot_za3lpa$(cslot_0);
        cslot = this.prev_0[cslot];
        cindex = cindex - 1 | 0;
      }
    }
     else {
      var cindex_1 = 0;
      var cslot_1 = this.firstSlot_0;
      while (cslot_1 !== -1) {
        var cindex_2 = cindex_1;
        var cslot_2 = cslot_1;
        if (cindex_2 === index)
          return this.removeSlot_za3lpa$(cslot_2);
        cslot_1 = this.next_0[cslot_1];
        cindex_1 = cindex_1 + 1 | 0;
      }
    }
    throw IllegalStateException_init();
  };
  IntLinkedList.prototype.removeFirst = function () {
    return this.removeSlot_za3lpa$(this.firstSlot_0);
  };
  IntLinkedList.prototype.removeLast = function () {
    return this.removeSlot_za3lpa$(this.lastSlot_0);
  };
  IntLinkedList.prototype.removeSlot_za3lpa$ = function (slot) {
    if (slot < 0 || slot >= this.capacity_0)
      throw IndexOutOfBoundsException_init();
    if (this.firstSlot_0 === slot)
      this.firstSlot_0 = this.next_0[slot];
    if (this.lastSlot_0 === slot)
      this.lastSlot_0 = this.prev_0[slot];
    var p = this.prev_0[slot];
    var n = this.next_0[slot];
    if (p !== -1)
      this.next_0[p] = n;
    if (n !== -1)
      this.prev_0[n] = p;
    this.size = this.size - 1 | 0;
    this.freeSlot_0(slot);
    this.checkInternalState_0();
    return this.items_0[slot];
  };
  IntLinkedList.prototype.iterate_0 = function (startSlot, callback) {
    if (startSlot === void 0)
      startSlot = this.firstSlot_0;
    var cindex = 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      callback(cindex, cslot);
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
  };
  IntLinkedList.prototype.iterateReverse_0 = function (startSlot, callback) {
    if (startSlot === void 0)
      startSlot = this.lastSlot_0;
    var cindex = this.size - 1 | 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      callback(cindex, cslot);
      cslot = this.prev_0[cslot];
      cindex = cindex - 1 | 0;
    }
  };
  IntLinkedList.prototype.removeAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, false);
  };
  IntLinkedList.prototype.retainAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, true);
  };
  IntLinkedList.prototype._removeRetainAll_0 = function (elements, retain) {
    var tmp$;
    var eset = toSet(elements);
    var temp = ArrayList_init();
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      if (eset.contains_11rb$(this.items_0[cslot_0]) === retain) {
        var element = this.items_0[cslot_0];
        temp.add_11rb$(element);
      }
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    if (temp.size === this.size)
      return false;
    this.clear();
    tmp$ = temp.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.addLast_za3lpa$(e);
    }
    this.checkInternalState_0();
    return true;
  };
  IntLinkedList.prototype.containsAll_brywnq$ = function (elements) {
    var destination = ArrayList_init_0(collectionSizeOrDefault(elements, 10));
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, 0));
    }
    var emap = toLinkedMap(destination);
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var e = this.items_0[cslot];
      var tmp$_0;
      if ((Kotlin.isType(tmp$_0 = emap, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(e)) {
        emap.put_xwzc9p$(e, 1);
      }
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    this.checkInternalState_0();
    var $receiver = emap.values;
    var all$result;
    all$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (!(element === 1)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  IntLinkedList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  IntLinkedList.prototype.add_11rb$ = function (element) {
    this.addLast_za3lpa$(element);
    return true;
  };
  IntLinkedList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    this.ensure_0(elements.size);
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.addLast_za3lpa$(e);
    }
    return true;
  };
  IntLinkedList.prototype.clear = function () {
    var tmp$;
    this.firstSlot_0 = -1;
    this.lastSlot_0 = -1;
    this.firstFreeSlot_0 = 0;
    this.size = 0;
    tmp$ = this.prev_0;
    for (var n = 0; n !== tmp$.length; ++n) {
      this.prev_0[n] = n === 0 ? -1 : n - 1 | 0;
      this.next_0[n] = n === (this.prev_0.length - 1 | 0) ? -1 : n + 1 | 0;
    }
  };
  function IntLinkedList$iterator$ObjectLiteral(this$IntLinkedList) {
    this.this$IntLinkedList = this$IntLinkedList;
    this.cslot = this$IntLinkedList.firstSlot_0;
    this.lastCslot_0 = this.cslot;
  }
  IntLinkedList$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.cslot !== -1;
  };
  IntLinkedList$iterator$ObjectLiteral.prototype.next = function () {
    this.lastCslot_0 = this.cslot;
    var $receiver = this.this$IntLinkedList.items_0[this.cslot];
    this.this$IntLinkedList;
    this.cslot = this.this$IntLinkedList.next_0[this.cslot];
    return $receiver;
  };
  IntLinkedList$iterator$ObjectLiteral.prototype.remove = function () {
    this.this$IntLinkedList.removeSlot_za3lpa$(this.lastCslot_0);
  };
  IntLinkedList$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MutableIterator]
  };
  IntLinkedList.prototype.iterator = function () {
    return new IntLinkedList$iterator$ObjectLiteral(this);
  };
  IntLinkedList.prototype.checkInternalState_0 = function () {
    if (this.debug_0)
      this.checkInternalStateFull_0();
  };
  IntLinkedList.prototype.checkInternalStateFull_0 = function () {
    var slots = this._getAllocatedSlots_0();
    var slotsReversed = reversed(this._getAllocatedSlotsReverse_0());
    var freeSlots = this._getFreeSlots_0();
    var freeSlotsReverse = reversed(this._getFreeSlotsReverse_0());
    if (!equals(slots, slotsReversed)) {
      throw IllegalStateException_init();
    }
    if (!equals(freeSlots, freeSlotsReverse)) {
      throw IllegalStateException_init();
    }
    if (slots.size !== this.size) {
      throw IllegalStateException_init();
    }
    if ((slots.size + freeSlots.size | 0) !== this.capacity_0) {
      throw IllegalStateException_init();
    }
  };
  IntLinkedList.prototype._getAllocatedSlots_0 = function () {
    var slots = ArrayList_init();
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return slots;
  };
  IntLinkedList.prototype._getAllocatedSlotsReverse_0 = function () {
    var slots = ArrayList_init();
    var startSlot = this.lastSlot_0;
    var cindex = this.size - 1 | 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.prev_0[cslot];
      cindex = cindex - 1 | 0;
    }
    return slots;
  };
  IntLinkedList.prototype._getFreeSlots_0 = function () {
    var slots = ArrayList_init();
    var cindex = 0;
    var cslot = this.firstFreeSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return slots;
  };
  IntLinkedList.prototype._getFreeSlotsReverse_0 = function () {
    var slots = ArrayList_init();
    var startSlot = this.lastFreeSlot_0;
    var cindex = this.size - 1 | 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.prev_0[cslot];
      cindex = cindex - 1 | 0;
    }
    return slots;
  };
  IntLinkedList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntLinkedList',
    interfaces: [MutableCollection]
  };
  function IntLinkedList_init($this) {
    $this = $this || Object.create(IntLinkedList.prototype);
    IntLinkedList.call($this, false);
    return $this;
  }
  function IntMap(nbits, loadFactor) {
    IntMap$Companion_getInstance();
    this.nbits_0 = nbits;
    this.loadFactor_0 = loadFactor;
    this.capacity_0 = 1 << this.nbits_0;
    this.hasZero_0 = false;
    this.zeroValue_0 = null;
    this.mask_0 = this.capacity_0 - 1 | 0;
    this.stashSize_0 = 1 + package$kds.KdsExt.ilog2_za3lpa$(this.capacity_0) | 0;
    this._keys_0 = new Int32Array(this.capacity_0 + this.stashSize_0 | 0);
    var tmp$;
    this._values_0 = Kotlin.isArray(tmp$ = Kotlin.newArray(this.capacity_0 + this.stashSize_0 | 0, null)) ? tmp$ : throwCCE();
    this.growSize_0 = numberToInt(this.capacity_0 * this.loadFactor_0);
    this.size_odij4y$_0 = 0;
  }
  function IntMap$Companion() {
    IntMap$Companion_instance = this;
    this.EOF_0 = 2147483646;
    this.ZERO_INDEX_0 = 2147483647;
    this.EMPTY_0 = 0;
  }
  IntMap$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var IntMap$Companion_instance = null;
  function IntMap$Companion_getInstance() {
    if (IntMap$Companion_instance === null) {
      new IntMap$Companion();
    }
    return IntMap$Companion_instance;
  }
  Object.defineProperty(IntMap.prototype, 'stashStart_0', {
    get: function () {
      return this._keys_0.length - this.stashSize_0 | 0;
    }
  });
  Object.defineProperty(IntMap.prototype, 'size', {
    get: function () {
      return this.size_odij4y$_0;
    },
    set: function (size) {
      this.size_odij4y$_0 = size;
    }
  });
  IntMap.prototype.grow_0 = function () {
    var tmp$;
    var new_0 = new IntMap(this.nbits_0 + 3 | 0, this.loadFactor_0);
    tmp$ = this._keys_0;
    for (var n = 0; n !== tmp$.length; ++n) {
      var k = this._keys_0[n];
      if (k !== 0)
        new_0.set_wxm5ur$(k, this._values_0[n]);
    }
    this.nbits_0 = new_0.nbits_0;
    this.capacity_0 = new_0.capacity_0;
    this.mask_0 = new_0.mask_0;
    this.stashSize_0 = new_0.stashSize_0;
    this._keys_0 = new_0._keys_0;
    this._values_0 = new_0._values_0;
    this.growSize_0 = new_0.growSize_0;
  };
  IntMap.prototype.contains_za3lpa$ = function (key) {
    return this._getKeyIndex_0(key) >= 0;
  };
  IntMap.prototype._getKeyIndex_0 = function (key) {
    var tmp$, tmp$_0;
    if (key === 0)
      return this.hasZero_0 ? 2147483647 : -1;
    var index1 = this.hash1_0(key);
    if (this._keys_0[index1] === key)
      return index1;
    var index2 = this.hash2_0(key);
    if (this._keys_0[index2] === key)
      return index2;
    var index3 = this.hash3_0(key);
    if (this._keys_0[index3] === key)
      return index3;
    tmp$ = this.stashStart_0;
    tmp$_0 = this._keys_0.length;
    for (var n = tmp$; n < tmp$_0; n++)
      if (this._keys_0[n] === key)
        return n;
    return -1;
  };
  IntMap.prototype.remove_za3lpa$ = function (key) {
    var index = this._getKeyIndex_0(key);
    if (index < 0)
      return false;
    if (index === 2147483647) {
      this.hasZero_0 = false;
      this.zeroValue_0 = null;
    }
     else {
      this._keys_0[index] = 0;
    }
    this.size = this.size - 1 | 0;
    return true;
  };
  IntMap.prototype.clear = function () {
    this.hasZero_0 = false;
    this.zeroValue_0 = null;
    MemTools_getInstance().fill_u4kcgn$(this._keys_0, 0);
    MemTools_getInstance().fill_tdelxw$(this._values_0, null);
    this.size = 0;
  };
  IntMap.prototype.get_za3lpa$ = function (key) {
    var index = this._getKeyIndex_0(key);
    if (index < 0)
      return null;
    if (index === 2147483647)
      return this.zeroValue_0;
    return this._values_0[index];
  };
  IntMap.prototype.setEmptySlot_0 = function (index, key, value) {
    if (this._keys_0[index] !== 0)
      throw IllegalStateException_init();
    this._keys_0[index] = key;
    this._values_0[index] = value;
    this.size = this.size + 1 | 0;
    return null;
  };
  IntMap.prototype.set_wxm5ur$ = function (key, value) {
    var tmp$, tmp$_0;
    retry: while (true) {
      var index = this._getKeyIndex_0(key);
      if (index < 0) {
        if (key === 0) {
          this.hasZero_0 = true;
          this.zeroValue_0 = value;
          this.size = this.size + 1 | 0;
          return null;
        }
        if (this.size >= this.growSize_0)
          this.grow_0();
        var index1 = this.hash1_0(key);
        if (this._keys_0[index1] === 0)
          return this.setEmptySlot_0(index1, key, value);
        var index2 = this.hash2_0(key);
        if (this._keys_0[index2] === 0)
          return this.setEmptySlot_0(index2, key, value);
        var index3 = this.hash3_0(key);
        if (this._keys_0[index3] === 0)
          return this.setEmptySlot_0(index3, key, value);
        tmp$ = this.stashStart_0;
        tmp$_0 = this._keys_0.length;
        for (var n = tmp$; n < tmp$_0; n++)
          if (this._keys_0[n] === 0)
            return this.setEmptySlot_0(n, key, value);
        this.grow_0();
        continue retry;
      }
       else if (index === 2147483647) {
        var $receiver = this.zeroValue_0;
        this.zeroValue_0 = value;
        return $receiver;
      }
       else {
        var $receiver_0 = this._values_0[index];
        this._values_0[index] = value;
        return $receiver_0;
      }
    }
  };
  IntMap.prototype.getOrPut_ea1e85$ = function (key, callback) {
    var res = this.get_za3lpa$(key);
    if (res == null)
      this.set_wxm5ur$(key, callback());
    return ensureNotNull(this.get_za3lpa$(key));
  };
  IntMap.prototype.hash1_0 = function (key) {
    return key & this.mask_0;
  };
  IntMap.prototype.hash2_0 = function (key) {
    return Kotlin.imul(key, -306674912) & this.mask_0;
  };
  IntMap.prototype.hash3_0 = function (key) {
    return Kotlin.imul(key, -1262997959) & this.mask_0;
  };
  IntMap.prototype.removeRange_vux9f0$ = function (src, dst) {
    var tmp$;
    tmp$ = this._keys_0;
    for (var n = 0; n !== tmp$.length; ++n) {
      var tmp$_0;
      tmp$_0 = this._keys_0[n];
      if (src <= tmp$_0 && tmp$_0 <= dst)
        this._values_0[n] = null;
    }
  };
  function IntMap$Entry(key, value) {
    this.key = key;
    this.value = value;
  }
  IntMap$Entry.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Entry',
    interfaces: []
  };
  IntMap$Entry.prototype.component1 = function () {
    return this.key;
  };
  IntMap$Entry.prototype.component2 = function () {
    return this.value;
  };
  IntMap$Entry.prototype.copy_wxm5ur$ = function (key, value) {
    return new IntMap$Entry(key === void 0 ? this.key : key, value === void 0 ? this.value : value);
  };
  IntMap$Entry.prototype.toString = function () {
    return 'Entry(key=' + Kotlin.toString(this.key) + (', value=' + Kotlin.toString(this.value)) + ')';
  };
  IntMap$Entry.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.key) | 0;
    result = result * 31 + Kotlin.hashCode(this.value) | 0;
    return result;
  };
  IntMap$Entry.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.key, other.key) && Kotlin.equals(this.value, other.value)))));
  };
  Object.defineProperty(IntMap.prototype, 'keys', {
    get: function () {
      return new IntMap$KeyIterable(this);
    }
  });
  Object.defineProperty(IntMap.prototype, 'values', {
    get: function () {
      return new IntMap$ValueIterable(this);
    }
  });
  Object.defineProperty(IntMap.prototype, 'entries', {
    get: function () {
      return new IntMap$EntryIterable(this);
    }
  });
  Object.defineProperty(IntMap.prototype, 'pooledKeys', {
    get: function () {
      return new IntMap$KeyIterable(this);
    }
  });
  Object.defineProperty(IntMap.prototype, 'pooledValues', {
    get: function () {
      return new IntMap$ValueIterable(this);
    }
  });
  Object.defineProperty(IntMap.prototype, 'pooledEntries', {
    get: function () {
      return new IntMap$EntryIterable(this);
    }
  });
  function IntMap$KeyIterable($outer) {
    this.$outer = $outer;
  }
  IntMap$KeyIterable.prototype.iterator = function () {
    return new IntMap$KeyIterator(this.$outer);
  };
  IntMap$KeyIterable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyIterable',
    interfaces: []
  };
  function IntMap$ValueIterable($outer) {
    this.$outer = $outer;
  }
  IntMap$ValueIterable.prototype.iterator = function () {
    return new IntMap$ValueIterator(this.$outer);
  };
  IntMap$ValueIterable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValueIterable',
    interfaces: []
  };
  function IntMap$EntryIterable($outer) {
    this.$outer = $outer;
  }
  IntMap$EntryIterable.prototype.iterator = function () {
    return new IntMap$EntryIterator(this.$outer);
  };
  IntMap$EntryIterable.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EntryIterable',
    interfaces: []
  };
  function IntMap$KeyIterator($outer, it) {
    this.$outer = $outer;
    if (it === void 0)
      it = new IntMap$Iterator(this.$outer);
    this.it_0 = it;
  }
  IntMap$KeyIterator.prototype.hasNext = function () {
    return this.it_0.hasNext();
  };
  IntMap$KeyIterator.prototype.next = function () {
    return this.it_0.nextKey();
  };
  IntMap$KeyIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'KeyIterator',
    interfaces: []
  };
  function IntMap$ValueIterator($outer, it) {
    this.$outer = $outer;
    if (it === void 0)
      it = new IntMap$Iterator(this.$outer);
    this.it_0 = it;
  }
  IntMap$ValueIterator.prototype.hasNext = function () {
    return this.it_0.hasNext();
  };
  IntMap$ValueIterator.prototype.next = function () {
    return this.it_0.nextValue();
  };
  IntMap$ValueIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ValueIterator',
    interfaces: []
  };
  function IntMap$EntryIterator($outer, it) {
    this.$outer = $outer;
    if (it === void 0)
      it = new IntMap$Iterator(this.$outer);
    this.it_0 = it;
  }
  IntMap$EntryIterator.prototype.hasNext = function () {
    return this.it_0.hasNext();
  };
  IntMap$EntryIterator.prototype.next = function () {
    return this.it_0.nextEntry().copy_wxm5ur$();
  };
  IntMap$EntryIterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EntryIterator',
    interfaces: []
  };
  function IntMap$Iterator($outer) {
    this.$outer = $outer;
    this.index_0 = this.$outer.hasZero_0 ? 2147483647 : this.nextNonEmptyIndex_0(this.$outer._keys_0, 0);
    this.entry_0 = new IntMap$Entry(0, null);
  }
  IntMap$Iterator.prototype.hasNext = function () {
    return this.index_0 !== 2147483646;
  };
  IntMap$Iterator.prototype.nextEntry = function () {
    var $receiver = this.currentEntry_0();
    this.next_0();
    return $receiver;
  };
  IntMap$Iterator.prototype.nextKey = function () {
    var $receiver = this.currentKey_0();
    this.next_0();
    return $receiver;
  };
  IntMap$Iterator.prototype.nextValue = function () {
    var $receiver = this.currentValue_0();
    this.next_0();
    return $receiver;
  };
  IntMap$Iterator.prototype.currentEntry_0 = function () {
    this.entry_0.key = this.currentKey_0();
    this.entry_0.value = this.currentValue_0();
    return this.entry_0;
  };
  IntMap$Iterator.prototype.currentKey_0 = function () {
    switch (this.index_0) {
      case 2147483647:
      case 2147483646:
        return 0;
      default:return this.$outer._keys_0[this.index_0];
    }
  };
  IntMap$Iterator.prototype.currentValue_0 = function () {
    switch (this.index_0) {
      case 2147483647:
        return this.$outer.zeroValue_0;
      case 2147483646:
        return null;
      default:return this.$outer._values_0[this.index_0];
    }
  };
  IntMap$Iterator.prototype.nextNonEmptyIndex_0 = function (keys, offset) {
    for (var n = offset; n < keys.length; n++)
      if (keys[n] !== 0)
        return n;
    return 2147483646;
  };
  IntMap$Iterator.prototype.next_0 = function () {
    if (this.index_0 !== 2147483646)
      this.index_0 = this.nextNonEmptyIndex_0(this.$outer._keys_0, this.index_0 === 2147483647 ? 0 : this.index_0 + 1 | 0);
  };
  IntMap$Iterator.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Iterator',
    interfaces: []
  };
  IntMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntMap',
    interfaces: []
  };
  function IntMap_init(loadFactor, $this) {
    if (loadFactor === void 0)
      loadFactor = 0.75;
    $this = $this || Object.create(IntMap.prototype);
    IntMap.call($this, 4, loadFactor);
    return $this;
  }
  function IntQueue() {
    this.items_0 = new IntCircularList();
  }
  Object.defineProperty(IntQueue.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  Object.defineProperty(IntQueue.prototype, 'hasMore', {
    get: function () {
      return this.size > 0;
    }
  });
  IntQueue.prototype.isEmpty = function () {
    return this.size === 0;
  };
  IntQueue.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  IntQueue.prototype.enqueue_za3lpa$ = function (v) {
    this.items_0.addLast_za3lpa$(v);
  };
  IntQueue.prototype.dequeue = function () {
    return this.items_0.removeFirst();
  };
  IntQueue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntQueue',
    interfaces: []
  };
  function IntQueue_init(items, $this) {
    $this = $this || Object.create(IntQueue.prototype);
    IntQueue.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      $this.enqueue_za3lpa$(item);
    }
    return $this;
  }
  function IntSet() {
    this.data_0 = IntMap_init();
  }
  IntSet.prototype.clear = function () {
    this.data_0.clear();
  };
  IntSet.prototype.add_za3lpa$ = function (item) {
    this.data_0.set_wxm5ur$(item, true);
  };
  IntSet.prototype.contains_za3lpa$ = function (item) {
    return this.data_0.get_za3lpa$(item) === true;
  };
  IntSet.prototype.remove_za3lpa$ = function (item) {
    return this.data_0.remove_za3lpa$(item);
  };
  IntSet.prototype.plusAssign_za3lpa$ = function (value) {
    this.add_za3lpa$(value);
  };
  IntSet.prototype.minusAssign_za3lpa$ = function (value) {
    this.remove_za3lpa$(value);
  };
  IntSet.prototype.toString = function () {
    var tmp$;
    var entries = new IntArrayList();
    tmp$ = this.data_0.entries.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      entries.plusAssign_za3lpa$(e.key);
    }
    return 'IntSet[' + joinToString(entries, ', ') + ']';
  };
  IntSet.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntSet',
    interfaces: []
  };
  function IntStack() {
    this.items_0 = new IntArrayList();
  }
  Object.defineProperty(IntStack.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  Object.defineProperty(IntStack.prototype, 'hasMore', {
    get: function () {
      return this.size > 0;
    }
  });
  IntStack.prototype.isEmpty = function () {
    return this.size === 0;
  };
  IntStack.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  IntStack.prototype.push_za3lpa$ = function (v) {
    this.items_0.add_za3lpa$(v);
  };
  IntStack.prototype.pop = function () {
    return this.items_0.removeAt_za3lpa$(this.items_0.size - 1 | 0);
  };
  IntStack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'IntStack',
    interfaces: []
  };
  function IntStack_init(items, $this) {
    $this = $this || Object.create(IntStack.prototype);
    IntStack.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      $this.push_za3lpa$(item);
    }
    return $this;
  }
  function LinkedList(debug) {
    LinkedList$Companion_getInstance();
    this.debug_0 = debug;
    this.firstSlot_0 = -1;
    this.lastSlot_0 = -1;
    this.firstFreeSlot_0 = 0;
    this.lastFreeSlot_0 = 15;
    this.size_g9o2to$_0 = 0;
    var array = new Int32Array(16);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = i - 1 | 0;
    }
    this.prev_0 = array;
    var array_0 = new Int32Array(16);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = i_0 + 1 | 0;
    }
    this.next_0 = array_0;
    var tmp$_1;
    this.items_0 = Kotlin.isArray(tmp$_1 = Kotlin.newArray(16, null)) ? tmp$_1 : throwCCE();
    this.prev_0[0] = -1;
    this.next_0[this.next_0.length - 1 | 0] = -1;
    this.checkInternalState_0();
  }
  function LinkedList$Companion() {
    LinkedList$Companion_instance = this;
    this.NONE_0 = -1;
  }
  LinkedList$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var LinkedList$Companion_instance = null;
  function LinkedList$Companion_getInstance() {
    if (LinkedList$Companion_instance === null) {
      new LinkedList$Companion();
    }
    return LinkedList$Companion_instance;
  }
  Object.defineProperty(LinkedList.prototype, 'size', {
    get: function () {
      return this.size_g9o2to$_0;
    },
    set: function (size) {
      this.size_g9o2to$_0 = size;
    }
  });
  Object.defineProperty(LinkedList.prototype, 'capacity_0', {
    get: function () {
      return this.items_0.length;
    }
  });
  LinkedList.prototype.get_za3lpa$ = function (index) {
    if (index < 0 || index >= this.size)
      throw IndexOutOfBoundsException_init();
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cindex_0 = cindex;
      var slot = cslot;
      if (cindex_0 === index)
        return this.items_0[slot];
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    throw IllegalStateException_init();
  };
  LinkedList.prototype.contains_11rb$ = function (item) {
    return this.indexOf_11rb$(item) !== -1;
  };
  Object.defineProperty(LinkedList.prototype, 'first', {
    get: function () {
      return getOrNull_1(this.items_0, this.firstSlot_0);
    }
  });
  Object.defineProperty(LinkedList.prototype, 'last', {
    get: function () {
      return getOrNull_1(this.items_0, this.lastSlot_0);
    }
  });
  LinkedList.prototype.ensure_0 = function (count) {
    var tmp$;
    var oldCapacity = this.capacity_0;
    if ((this.size + count | 0) >= oldCapacity) {
      var newCapacity = oldCapacity * 4 | 0;
      this.prev_0 = copyOf_0(this.prev_0, newCapacity);
      this.next_0 = copyOf_0(this.next_0, newCapacity);
      this.items_0 = Kotlin.isArray(tmp$ = copyOf_1(this.items_0, newCapacity)) ? tmp$ : throwCCE();
      for (var n = oldCapacity + 1 | 0; n < newCapacity; n++)
        this.prev_0[n] = n - 1 | 0;
      for (var n_0 = oldCapacity; n_0 < newCapacity; n_0++)
        this.next_0[n_0] = n_0 + 1 | 0;
      this.prev_0[oldCapacity] = this.lastFreeSlot_0;
      this.next_0[this.lastFreeSlot_0] = oldCapacity;
      this.next_0[newCapacity - 1 | 0] = -1;
      this.lastFreeSlot_0 = newCapacity - 1 | 0;
    }
  };
  LinkedList.prototype.addLast_11rb$ = function (item) {
    var slot = this.allocateSlot_0();
    if (this.lastSlot_0 !== -1)
      this.next_0[this.lastSlot_0] = slot;
    this.next_0[slot] = -1;
    this.prev_0[slot] = this.lastSlot_0;
    this.items_0[slot] = item;
    if (this.firstSlot_0 === -1)
      this.firstSlot_0 = slot;
    this.lastSlot_0 = slot;
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return slot;
  };
  LinkedList.prototype.addFirst_11rb$ = function (item) {
    var slot = this.allocateSlot_0();
    if (this.firstSlot_0 !== -1)
      this.prev_0[this.firstSlot_0] = slot;
    this.prev_0[slot] = -1;
    this.next_0[slot] = this.firstSlot_0;
    this.items_0[slot] = item;
    if (this.lastSlot_0 === -1)
      this.lastSlot_0 = slot;
    this.firstSlot_0 = slot;
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return slot;
  };
  LinkedList.prototype.allocateSlot_0 = function () {
    this.ensure_0(1);
    var slot = this.firstFreeSlot_0;
    this.firstFreeSlot_0 = this.next_0[this.firstFreeSlot_0];
    if (this.firstFreeSlot_0 === -1) {
      throw IllegalStateException_init();
    }
    this.prev_0[this.firstFreeSlot_0] = -1;
    return slot;
  };
  LinkedList.prototype.freeSlot_0 = function (slot) {
    this.prev_0[this.firstFreeSlot_0] = slot;
    this.next_0[slot] = this.firstFreeSlot_0;
    this.prev_0[slot] = -1;
    this.firstFreeSlot_0 = slot;
    this.checkInternalState_0();
  };
  LinkedList.prototype.addAt_wxm5ur$ = function (index, item) {
    if (index === 0)
      return this.addFirst_11rb$(item);
    if (index === this.size)
      return this.addLast_11rb$(item);
    return this.addBeforeSlot_wxm5ur$(this.slotOfIndex_za3lpa$(index), item);
  };
  LinkedList.prototype.addBeforeSlot_wxm5ur$ = function (slot, item) {
    if (slot === -1)
      throw IllegalArgumentException_init();
    var newSlot = this.allocateSlot_0();
    this.items_0[newSlot] = item;
    this.prev_0[newSlot] = this.prev_0[slot];
    this.next_0[newSlot] = slot;
    if (this.prev_0[slot] !== -1) {
      this.next_0[this.prev_0[slot]] = newSlot;
    }
    this.prev_0[slot] = newSlot;
    if (this.firstSlot_0 === slot) {
      this.firstSlot_0 = newSlot;
    }
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return newSlot;
  };
  LinkedList.prototype.addAfterSlot_wxm5ur$ = function (slot, item) {
    var newSlot = this.allocateSlot_0();
    this.next_0[newSlot] = this.next_0[slot];
    this.prev_0[newSlot] = slot;
    if (this.next_0[slot] !== -1) {
      this.prev_0[this.next_0[slot]] = newSlot;
    }
    this.next_0[slot] = newSlot;
    this.items_0[newSlot] = item;
    if (this.lastSlot_0 === slot) {
      this.lastSlot_0 = newSlot;
    }
    this.size = this.size + 1 | 0;
    this.checkInternalState_0();
    return newSlot;
  };
  LinkedList.prototype.indexOf_11rb$ = function (item) {
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cindex_0 = cindex;
      if (equals(this.items_0[cslot], item))
        return cindex_0;
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return -1;
  };
  LinkedList.prototype.slotOf_11rb$ = function (item) {
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      if (equals(this.items_0[cslot_0], item))
        return cslot_0;
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return -1;
  };
  LinkedList.prototype.slotOfIndex_za3lpa$ = function (index) {
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cindex_0 = cindex;
      var cslot_0 = cslot;
      if (cindex_0 === index)
        return cslot_0;
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return -1;
  };
  LinkedList.prototype.remove_11rb$ = function (item) {
    var slot = this.slotOf_11rb$(item);
    if (slot !== -1)
      this.removeSlot_za3lpa$(slot);
    return slot !== -1;
  };
  LinkedList.prototype.removeAt_za3lpa$ = function (index) {
    if (index < 0 || index >= this.size)
      throw IndexOutOfBoundsException_init();
    if (index >= (this.size / 2 | 0)) {
      var startSlot;
      startSlot = this.lastSlot_0;
      var cindex = this.size - 1 | 0;
      var cslot = startSlot;
      while (cslot !== -1) {
        var cindex_0 = cindex;
        var cslot_0 = cslot;
        if (cindex_0 === index)
          return this.removeSlot_za3lpa$(cslot_0);
        cslot = this.prev_0[cslot];
        cindex = cindex - 1 | 0;
      }
    }
     else {
      var cindex_1 = 0;
      var cslot_1 = this.firstSlot_0;
      while (cslot_1 !== -1) {
        var cindex_2 = cindex_1;
        var cslot_2 = cslot_1;
        if (cindex_2 === index)
          return this.removeSlot_za3lpa$(cslot_2);
        cslot_1 = this.next_0[cslot_1];
        cindex_1 = cindex_1 + 1 | 0;
      }
    }
    throw IllegalStateException_init();
  };
  LinkedList.prototype.removeFirst = function () {
    return this.removeSlot_za3lpa$(this.firstSlot_0);
  };
  LinkedList.prototype.removeLast = function () {
    return this.removeSlot_za3lpa$(this.lastSlot_0);
  };
  LinkedList.prototype.removeSlot_za3lpa$ = function (slot) {
    if (slot < 0 || slot >= this.capacity_0)
      throw IndexOutOfBoundsException_init();
    if (this.firstSlot_0 === slot)
      this.firstSlot_0 = this.next_0[slot];
    if (this.lastSlot_0 === slot)
      this.lastSlot_0 = this.prev_0[slot];
    var p = this.prev_0[slot];
    var n = this.next_0[slot];
    if (p !== -1)
      this.next_0[p] = n;
    if (n !== -1)
      this.prev_0[n] = p;
    this.size = this.size - 1 | 0;
    this.freeSlot_0(slot);
    this.checkInternalState_0();
    return this.items_0[slot];
  };
  LinkedList.prototype.iterate_0 = function (startSlot, callback) {
    if (startSlot === void 0)
      startSlot = this.firstSlot_0;
    var cindex = 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      callback(cindex, cslot);
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
  };
  LinkedList.prototype.iterateReverse_0 = function (startSlot, callback) {
    if (startSlot === void 0)
      startSlot = this.lastSlot_0;
    var cindex = this.size - 1 | 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      callback(cindex, cslot);
      cslot = this.prev_0[cslot];
      cindex = cindex - 1 | 0;
    }
  };
  LinkedList.prototype.removeAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, false);
  };
  LinkedList.prototype.retainAll_brywnq$ = function (elements) {
    return this._removeRetainAll_0(elements, true);
  };
  LinkedList.prototype._removeRetainAll_0 = function (elements, retain) {
    var tmp$;
    var eset = toSet(elements);
    var temp = ArrayList_init();
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      if (eset.contains_11rb$(this.items_0[cslot_0]) === retain) {
        var element = this.items_0[cslot_0];
        temp.add_11rb$(element);
      }
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    if (temp.size === this.size)
      return false;
    this.clear();
    tmp$ = temp.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.addLast_11rb$(e);
    }
    this.checkInternalState_0();
    return true;
  };
  LinkedList.prototype.containsAll_brywnq$ = function (elements) {
    var destination = ArrayList_init_0(collectionSizeOrDefault(elements, 10));
    var tmp$;
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item, 0));
    }
    var emap = toLinkedMap(destination);
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var e = this.items_0[cslot];
      var tmp$_0;
      if ((Kotlin.isType(tmp$_0 = emap, Map) ? tmp$_0 : throwCCE()).containsKey_11rb$(e)) {
        emap.put_xwzc9p$(e, 1);
      }
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    this.checkInternalState_0();
    var $receiver = emap.values;
    var all$result;
    all$break: do {
      var tmp$_1;
      if (Kotlin.isType($receiver, Collection) && $receiver.isEmpty()) {
        all$result = true;
        break all$break;
      }
      tmp$_1 = $receiver.iterator();
      while (tmp$_1.hasNext()) {
        var element = tmp$_1.next();
        if (!(element === 1)) {
          all$result = false;
          break all$break;
        }
      }
      all$result = true;
    }
     while (false);
    return all$result;
  };
  LinkedList.prototype.isEmpty = function () {
    return this.size === 0;
  };
  LinkedList.prototype.add_11rb$ = function (element) {
    this.addLast_11rb$(element);
    return true;
  };
  LinkedList.prototype.addAll_brywnq$ = function (elements) {
    var tmp$;
    this.ensure_0(elements.size);
    tmp$ = elements.iterator();
    while (tmp$.hasNext()) {
      var e = tmp$.next();
      this.addLast_11rb$(e);
    }
    return true;
  };
  LinkedList.prototype.clear = function () {
    var tmp$;
    this.firstSlot_0 = -1;
    this.lastSlot_0 = -1;
    this.firstFreeSlot_0 = 0;
    this.size = 0;
    tmp$ = this.prev_0;
    for (var n = 0; n !== tmp$.length; ++n) {
      this.prev_0[n] = n === 0 ? -1 : n - 1 | 0;
      this.next_0[n] = n === (this.prev_0.length - 1 | 0) ? -1 : n + 1 | 0;
    }
  };
  function LinkedList$iterator$ObjectLiteral(this$LinkedList) {
    this.this$LinkedList = this$LinkedList;
    this.cslot = this$LinkedList.firstSlot_0;
    this.lastCslot_0 = this.cslot;
  }
  LinkedList$iterator$ObjectLiteral.prototype.hasNext = function () {
    return this.cslot !== -1;
  };
  LinkedList$iterator$ObjectLiteral.prototype.next = function () {
    this.lastCslot_0 = this.cslot;
    var $receiver = this.this$LinkedList.items_0[this.cslot];
    this.this$LinkedList;
    this.cslot = this.this$LinkedList.next_0[this.cslot];
    return $receiver;
  };
  LinkedList$iterator$ObjectLiteral.prototype.remove = function () {
    this.this$LinkedList.removeSlot_za3lpa$(this.lastCslot_0);
  };
  LinkedList$iterator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [MutableIterator]
  };
  LinkedList.prototype.iterator = function () {
    return new LinkedList$iterator$ObjectLiteral(this);
  };
  LinkedList.prototype.checkInternalState_0 = function () {
    if (this.debug_0)
      this.checkInternalStateFull_0();
  };
  LinkedList.prototype.checkInternalStateFull_0 = function () {
    var slots = this._getAllocatedSlots_0();
    var slotsReversed = reversed(this._getAllocatedSlotsReverse_0());
    var freeSlots = this._getFreeSlots_0();
    var freeSlotsReverse = reversed(this._getFreeSlotsReverse_0());
    if (!equals(slots, slotsReversed)) {
      throw IllegalStateException_init();
    }
    if (!equals(freeSlots, freeSlotsReverse)) {
      throw IllegalStateException_init();
    }
    if (slots.size !== this.size) {
      throw IllegalStateException_init();
    }
    if ((slots.size + freeSlots.size | 0) !== this.capacity_0) {
      throw IllegalStateException_init();
    }
  };
  LinkedList.prototype._getAllocatedSlots_0 = function () {
    var slots = ArrayList_init();
    var cindex = 0;
    var cslot = this.firstSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return slots;
  };
  LinkedList.prototype._getAllocatedSlotsReverse_0 = function () {
    var slots = ArrayList_init();
    var startSlot = this.lastSlot_0;
    var cindex = this.size - 1 | 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.prev_0[cslot];
      cindex = cindex - 1 | 0;
    }
    return slots;
  };
  LinkedList.prototype._getFreeSlots_0 = function () {
    var slots = ArrayList_init();
    var cindex = 0;
    var cslot = this.firstFreeSlot_0;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.next_0[cslot];
      cindex = cindex + 1 | 0;
    }
    return slots;
  };
  LinkedList.prototype._getFreeSlotsReverse_0 = function () {
    var slots = ArrayList_init();
    var startSlot = this.lastFreeSlot_0;
    var cindex = this.size - 1 | 0;
    var cslot = startSlot;
    while (cslot !== -1) {
      var cslot_0 = cslot;
      slots.add_11rb$(cslot_0);
      cslot = this.prev_0[cslot];
      cindex = cindex - 1 | 0;
    }
    return slots;
  };
  LinkedList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'LinkedList',
    interfaces: [MutableCollection]
  };
  function LinkedList_init($this) {
    $this = $this || Object.create(LinkedList.prototype);
    LinkedList.call($this, false);
    return $this;
  }
  function getCyclic($receiver, index) {
    return $receiver.get_za3lpa$(index % $receiver.size);
  }
  function getCyclic_0($receiver, index) {
    return $receiver[index % $receiver.length];
  }
  function ListReader(list) {
    this.list = list;
    this.position = 0;
  }
  Object.defineProperty(ListReader.prototype, 'size', {
    get: function () {
      return this.list.size;
    }
  });
  Object.defineProperty(ListReader.prototype, 'eof', {
    get: function () {
      return this.position >= this.list.size;
    }
  });
  Object.defineProperty(ListReader.prototype, 'hasMore', {
    get: function () {
      return this.position < this.list.size;
    }
  });
  ListReader.prototype.peek = function () {
    return this.list.get_za3lpa$(this.position);
  };
  ListReader.prototype.skip_za3lpa$ = function (count) {
    if (count === void 0)
      count = 1;
    this.position = this.position + count | 0;
    return this;
  };
  ListReader.prototype.read = function () {
    var $receiver = this.peek();
    this.skip_za3lpa$(1);
    return $receiver;
  };
  ListReader.prototype.dump = function () {
    var tmp$;
    tmp$ = this.list.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      println_0(item);
    }
  };
  ListReader.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ListReader',
    interfaces: []
  };
  function reader($receiver) {
    return new ListReader($receiver);
  }
  var IllegalStateException_init_0 = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  function expect($receiver, value) {
    var v = $receiver.read();
    if (!equals(v, value)) {
      throw IllegalStateException_init_0(("Expecting '" + value + "' but found '" + v + "'").toString());
    }
    return v;
  }
  function flip($receiver) {
    var destination = ArrayList_init_0($receiver.size);
    var tmp$;
    tmp$ = $receiver.entries.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(new Pair(item.value, item.key));
    }
    return toMap(destination);
  }
  function incr($receiver, key, delta) {
    if (delta === void 0)
      delta = 1;
    var tmp$;
    var value = $receiver.get_11rb$(key);
    if (value == null) {
      var answer = 0;
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value;
    }
    var next = tmp$ + delta | 0;
    $receiver.put_xwzc9p$(key, next);
    return next;
  }
  function toCaseInsensitiveTreeMap($receiver) {
    var res = new CaseInsensitiveHashMap();
    res.putAll_a2k3zr$($receiver);
    return res;
  }
  function CaseInsensitiveHashMap(mapOrig, lcToOrig, mapLC) {
    if (mapOrig === void 0)
      mapOrig = lmapOf([]);
    if (lcToOrig === void 0)
      lcToOrig = lmapOf([]);
    if (mapLC === void 0)
      mapLC = lmapOf([]);
    this.mapOrig_0 = mapOrig;
    this.lcToOrig_0 = lcToOrig;
    this.mapLC_0 = mapLC;
  }
  CaseInsensitiveHashMap.prototype.containsKey_11rb$ = function (key) {
    return this.mapLC_0.containsKey_11rb$(key.toLowerCase());
  };
  CaseInsensitiveHashMap.prototype.clear = function () {
    this.mapOrig_0.clear();
    this.mapLC_0.clear();
    this.lcToOrig_0.clear();
  };
  CaseInsensitiveHashMap.prototype.get_11rb$ = function (key) {
    return this.mapLC_0.get_11rb$(key.toLowerCase());
  };
  CaseInsensitiveHashMap.prototype.put_xwzc9p$ = function (key, value) {
    this.remove_11rb$(key);
    this.mapOrig_0.put_xwzc9p$(key, value);
    this.lcToOrig_0.put_xwzc9p$(key.toLowerCase(), key);
    return this.mapLC_0.put_xwzc9p$(key.toLowerCase(), value);
  };
  CaseInsensitiveHashMap.prototype.putAll_a2k3zr$ = function (from) {
    var tmp$;
    tmp$ = from.entries.iterator();
    while (tmp$.hasNext()) {
      var v = tmp$.next();
      this.put_xwzc9p$(v.key, v.value);
    }
  };
  CaseInsensitiveHashMap.prototype.remove_11rb$ = function (key) {
    var lkey = key.toLowerCase();
    var okey = this.lcToOrig_0.get_11rb$(lkey);
    var $receiver = this.mapOrig_0;
    var tmp$;
    (Kotlin.isType(tmp$ = $receiver, MutableMap) ? tmp$ : throwCCE()).remove_11rb$(okey);
    var res = this.mapLC_0.remove_11rb$(lkey);
    this.lcToOrig_0.remove_11rb$(lkey);
    return res;
  };
  Object.defineProperty(CaseInsensitiveHashMap.prototype, 'entries', {
    get: function () {
      return this.mapOrig_0.entries;
    }
  });
  Object.defineProperty(CaseInsensitiveHashMap.prototype, 'keys', {
    get: function () {
      return this.mapOrig_0.keys;
    }
  });
  Object.defineProperty(CaseInsensitiveHashMap.prototype, 'size', {
    get: function () {
      return this.mapOrig_0.size;
    }
  });
  Object.defineProperty(CaseInsensitiveHashMap.prototype, 'values', {
    get: function () {
      return this.mapOrig_0.values;
    }
  });
  CaseInsensitiveHashMap.prototype.containsValue_11rc$ = function (value) {
    return this.mapOrig_0.containsValue_11rc$(value);
  };
  CaseInsensitiveHashMap.prototype.isEmpty = function () {
    return this.mapOrig_0.isEmpty();
  };
  CaseInsensitiveHashMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CaseInsensitiveHashMap',
    interfaces: [MutableMap]
  };
  function MapList() {
    this.map = lmapOf([]);
  }
  MapList.prototype.iterator = function () {
    var $receiver = this.map.entries;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(to(item.key, item.value));
    }
    return destination.iterator();
  };
  MapList.prototype.flatMapIterator = function () {
    var $receiver = this.map.entries;
    var destination = ArrayList_init();
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var element = tmp$.next();
      var $receiver_0 = element.value;
      var destination_0 = ArrayList_init_0(collectionSizeOrDefault($receiver_0, 10));
      var tmp$_0;
      tmp$_0 = $receiver_0.iterator();
      while (tmp$_0.hasNext()) {
        var item = tmp$_0.next();
        destination_0.add_11rb$(to(element.key, item));
      }
      var list = destination_0;
      addAll_0(destination, list);
    }
    return destination.iterator();
  };
  MapList.prototype.append_xwzc9p$ = function (key, value) {
    var $receiver = this.map;
    var tmp$;
    var value_0 = $receiver.get_11rb$(key);
    if (value_0 == null) {
      var answer = ArrayList_init();
      $receiver.put_xwzc9p$(key, answer);
      tmp$ = answer;
    }
     else {
      tmp$ = value_0;
    }
    ensureNotNull(this.map.get_11rb$(key)).add_11rb$(value);
    return this;
  };
  MapList.prototype.replace_xwzc9p$ = function (key, value) {
    this.map.remove_11rb$(key);
    this.append_xwzc9p$(key, value);
    return this;
  };
  MapList.prototype.appendAll_5csooj$ = function (items) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var tmp$_0 = items[tmp$];
      var k = tmp$_0.component1()
      , v = tmp$_0.component2();
      this.append_xwzc9p$(k, v);
    }
    return this;
  };
  MapList.prototype.replaceAll_5csooj$ = function (items) {
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var tmp$_0 = items[tmp$];
      var k = tmp$_0.component1()
      , v = tmp$_0.component2();
      this.replace_xwzc9p$(k, v);
    }
    return this;
  };
  MapList.prototype.get_11rb$ = function (key) {
    return this.map.get_11rb$(key);
  };
  MapList.prototype.getFirst_11rb$ = function (key) {
    var tmp$;
    return (tmp$ = this.map.get_11rb$(key)) != null ? firstOrNull(tmp$) : null;
  };
  MapList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MapList',
    interfaces: [Iterable]
  };
  function MapList_init(items, $this) {
    $this = $this || Object.create(MapList.prototype);
    MapList.call($this);
    var tmp$;
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.component1()
      , v = tmp$_0.component2();
      $this.append_xwzc9p$(k, v);
    }
    return $this;
  }
  function MapList_init_0(items, $this) {
    $this = $this || Object.create(MapList.prototype);
    MapList.call($this);
    var tmp$;
    tmp$ = items.entries.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var k = tmp$_0.key;
      var v = tmp$_0.value;
      $this.append_xwzc9p$(k, v);
    }
    return $this;
  }
  function MapList_init_1(items, $this) {
    $this = $this || Object.create(MapList.prototype);
    MapList.call($this);
    var tmp$, tmp$_0;
    tmp$ = items.iterator();
    while (tmp$.hasNext()) {
      var tmp$_1 = tmp$.next();
      var k = tmp$_1.component1()
      , values = tmp$_1.component2();
      tmp$_0 = values.iterator();
      while (tmp$_0.hasNext()) {
        var v = tmp$_0.next();
        $this.append_xwzc9p$(k, v);
      }
    }
    return $this;
  }
  function MemTools() {
    MemTools_instance = this;
  }
  MemTools.prototype.arraycopy_vybhjg$ = function (src, srcPos, dst, dstPos, size) {
    var overlapping = src === dst && dstPos > srcPos;
    if (overlapping) {
      var n = size;
      while ((n = n - 1 | 0, n) >= 0)
        dst[dstPos + n | 0] = src[srcPos + n | 0];
    }
     else {
      for (var n_0 = 0; n_0 < size; n_0++)
        dst[dstPos + n_0 | 0] = src[srcPos + n_0 | 0];
    }
  };
  MemTools.prototype.arraycopy_lvhpry$ = function (src, srcPos, dst, dstPos, size) {
    var overlapping = src === dst && dstPos > srcPos;
    if (overlapping) {
      var n = size;
      while ((n = n - 1 | 0, n) >= 0)
        dst[dstPos + n | 0] = src[srcPos + n | 0];
    }
     else {
      for (var n_0 = 0; n_0 < size; n_0++)
        dst[dstPos + n_0 | 0] = src[srcPos + n_0 | 0];
    }
  };
  MemTools.prototype.arraycopy_dgpv4k$ = function (src, srcPos, dst, dstPos, size) {
    var overlapping = src === dst && dstPos > srcPos;
    if (overlapping) {
      var n = size;
      while ((n = n - 1 | 0, n) >= 0)
        dst[dstPos + n | 0] = src[srcPos + n | 0];
    }
     else {
      for (var n_0 = 0; n_0 < size; n_0++)
        dst[dstPos + n_0 | 0] = src[srcPos + n_0 | 0];
    }
  };
  MemTools.prototype.fill_tdelxw$ = function (array, value) {
    for (var n = 0; n < array.length; n++)
      array[n] = value;
  };
  MemTools.prototype.fill_u4kcgn$ = function (array, value) {
    for (var n = 0; n < array.length; n++)
      array[n] = value;
  };
  MemTools.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MemTools',
    interfaces: []
  };
  var MemTools_instance = null;
  function MemTools_getInstance() {
    if (MemTools_instance === null) {
      new MemTools();
    }
    return MemTools_instance;
  }
  function splice($receiver, removeOffset, removeCount, itemsToAdd) {
    for (var n = 0; n < removeCount; n++)
      $receiver.removeAt_za3lpa$(removeOffset);
    for (var n_0 = 0; n_0 < itemsToAdd.length; n_0++) {
      $receiver.add_wxm5ur$(removeOffset + n_0 | 0, itemsToAdd[n_0]);
    }
  }
  function reduceAcumulate($receiver, init, reductor) {
    var tmp$;
    var acc = init;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      acc = reductor(acc, item);
    }
    return acc;
  }
  function NumberArrayList() {
  }
  NumberArrayList.prototype.getInt_za3lpa$ = function (index) {
    return numberToInt(this.getDouble_za3lpa$(index));
  };
  NumberArrayList.prototype.setInt_vux9f0$ = function (index, value) {
    this.setDouble_5wr77w$(index, value);
  };
  NumberArrayList.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NumberArrayList',
    interfaces: []
  };
  function get_0($receiver, index) {
    return $receiver.getDouble_za3lpa$(index);
  }
  function set($receiver, index, value) {
    $receiver.setDouble_5wr77w$(index, value);
  }
  function Pool(reset, preallocate, gen) {
    if (reset === void 0)
      reset = Pool_init$lambda;
    if (preallocate === void 0)
      preallocate = 0;
    this.reset_0 = reset;
    this.gen_0 = gen;
    this.items_0 = new CircularList();
    this.lastId_0 = 0;
    var tmp$;
    tmp$ = preallocate;
    for (var n = 0; n < tmp$; n++) {
      var tmp$_0;
      tmp$_0 = this.items_0;
      var tmp$_1;
      var element = this.gen_0((tmp$_1 = this.lastId_0, this.lastId_0 = tmp$_1 + 1 | 0, tmp$_1));
      tmp$_0.add_11rb$(element);
    }
  }
  Object.defineProperty(Pool.prototype, 'itemsInPool', {
    get: function () {
      return this.items_0.size;
    }
  });
  Pool.prototype.alloc = function () {
    var tmp$;
    if (this.items_0.isNotEmpty()) {
      return this.items_0.removeLast();
    }
     else {
      return this.gen_0((tmp$ = this.lastId_0, this.lastId_0 = tmp$ + 1 | 0, tmp$));
    }
  };
  Pool.prototype.free_11rb$ = function (v) {
    this.reset_0(v);
    this.items_0.addFirst_11rb$(v);
  };
  Pool.prototype.free_p1ys8y$ = function (v) {
    var tmp$;
    tmp$ = v.iterator();
    while (tmp$.hasNext()) {
      var it = tmp$.next();
      this.reset_0(it);
    }
    this.items_0.addAll_p1ys8y$(v);
  };
  Pool.prototype.alloc_2o04qz$ = defineInlineFunction('kds-js.com.soywiz.kds.Pool.alloc_2o04qz$', function (callback) {
    var temp = this.alloc();
    try {
      return callback(temp);
    }
    finally {
      this.free_11rb$(temp);
    }
  });
  function Pool_init$lambda(it) {
    return Unit;
  }
  Pool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Pool',
    interfaces: []
  };
  function Pool_init(preallocate, gen, $this) {
    if (preallocate === void 0)
      preallocate = 0;
    $this = $this || Object.create(Pool.prototype);
    Pool.call($this, Pool_init$lambda_0, preallocate, gen);
    return $this;
  }
  function Pool_init$lambda_0(it) {
    return Unit;
  }
  function PriorityQueue(compare, reversed) {
    if (reversed === void 0)
      reversed = false;
    this.compare_0 = compare;
    this.reversed_0 = reversed;
    this.dirtyList_0 = ArrayList_init();
    this.dirty_0 = false;
  }
  Object.defineProperty(PriorityQueue.prototype, '_sortedList', {
    get: function () {
      if (this.dirty_0) {
        sortWith(this.dirtyList_0, this.compare_0);
        this.dirty_0 = false;
      }
      return this.dirtyList_0;
    }
  });
  Object.defineProperty(PriorityQueue.prototype, 'size', {
    get: function () {
      return this.dirtyList_0.size;
    }
  });
  Object.defineProperty(PriorityQueue.prototype, 'length', {
    get: function () {
      return this.dirtyList_0.size;
    }
  });
  PriorityQueue.prototype.updateObject_11rb$ = function (obj) {
    this.dirty_0 = true;
  };
  PriorityQueue.prototype.contains_11rb$ = function (element) {
    return this.dirtyList_0.indexOf_11rb$(element) !== -1;
  };
  PriorityQueue.prototype.push_11rb$ = function (obj) {
    this.dirtyList_0.add_11rb$(obj);
    this.dirty_0 = true;
  };
  PriorityQueue.prototype.add_11rb$ = function (element) {
    this.dirty_0 = true;
    return this.dirtyList_0.add_11rb$(element);
  };
  PriorityQueue.prototype.addAll_brywnq$ = function (elements) {
    this.dirty_0 = true;
    return this.dirtyList_0.addAll_brywnq$(elements);
  };
  PriorityQueue.prototype.clear = function () {
    this.dirty_0 = true;
    this.dirtyList_0.clear();
  };
  PriorityQueue.prototype.isEmpty = function () {
    return this.dirtyList_0.isEmpty();
  };
  PriorityQueue.prototype.iterator = function () {
    return this._sortedList.iterator();
  };
  PriorityQueue.prototype.remove_11rb$ = function (element) {
    return this._sortedList.remove_11rb$(element);
  };
  PriorityQueue.prototype.retainAll_brywnq$ = function (elements) {
    return this._sortedList.retainAll_brywnq$(elements);
  };
  PriorityQueue.prototype.containsAll_brywnq$ = function (elements) {
    return this._sortedList.containsAll_brywnq$(elements);
  };
  PriorityQueue.prototype.removeAll_brywnq$ = function (elements) {
    return this._sortedList.removeAll_brywnq$(elements);
  };
  PriorityQueue.prototype.add_7l2mas$ = function (objs) {
    addAll(this.dirtyList_0, objs);
    this.dirty_0 = true;
  };
  PriorityQueue.prototype.add_p1ys8y$ = function (objs) {
    addAll_0(this.dirtyList_0, objs);
    this.dirty_0 = true;
  };
  Object.defineProperty(PriorityQueue.prototype, 'head', {
    get: function () {
      return this._sortedList.get_za3lpa$(this.reversed_0 ? this._sortedList.size - 1 | 0 : 0);
    }
  });
  PriorityQueue.prototype.peek = function () {
    return this.head;
  };
  PriorityQueue.prototype.removeHead = function () {
    if (this.reversed_0) {
      return this._sortedList.removeAt_za3lpa$(this._sortedList.size - 1 | 0);
    }
     else {
      return this._sortedList.removeAt_za3lpa$(0);
    }
  };
  PriorityQueue.prototype.remove = function () {
    return this.removeHead();
  };
  PriorityQueue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'PriorityQueue',
    interfaces: [MutableCollection]
  };
  var Comparator = Kotlin.kotlin.Comparator;
  function Comparator$ObjectLiteral(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function PriorityQueue_init(reversed, compare, $this) {
    if (reversed === void 0)
      reversed = false;
    $this = $this || Object.create(PriorityQueue.prototype);
    PriorityQueue.call($this, new Comparator$ObjectLiteral(compare), reversed);
    return $this;
  }
  function Queue() {
    this.items_0 = new CircularList();
  }
  Object.defineProperty(Queue.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  Object.defineProperty(Queue.prototype, 'hasMore', {
    get: function () {
      return this.size > 0;
    }
  });
  Queue.prototype.isEmpty = function () {
    return this.size === 0;
  };
  Queue.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  Queue.prototype.enqueue_11rb$ = function (v) {
    this.items_0.addLast_11rb$(v);
  };
  Queue.prototype.dequeue = function () {
    return this.items_0.removeFirst();
  };
  Queue.prototype.remove_11rb$ = function (v) {
    this.items_0.remove_11rb$(v);
  };
  Queue.prototype.toList = function () {
    return toList(this.items_0);
  };
  Queue.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Queue',
    interfaces: []
  };
  function Queue_init(items, $this) {
    $this = $this || Object.create(Queue.prototype);
    Queue.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      $this.enqueue_11rb$(item);
    }
    return $this;
  }
  function sortedBy2$lambda(closure$callback) {
    return function (a, b) {
      return Kotlin.compareTo(closure$callback(a), closure$callback(b));
    };
  }
  function Comparator$ObjectLiteral_0(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_0.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_0.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function sortedBy2($receiver, callback) {
    return sortedWith($receiver, new Comparator$ObjectLiteral_0(sortedBy2$lambda(callback)));
  }
  function sortedByDescending2$lambda(closure$callback) {
    return function (a, b) {
      return -Kotlin.compareTo(closure$callback(a), closure$callback(b)) | 0;
    };
  }
  function Comparator$ObjectLiteral_1(closure$comparison) {
    this.closure$comparison = closure$comparison;
  }
  Comparator$ObjectLiteral_1.prototype.compare = function (a, b) {
    return this.closure$comparison(a, b);
  };
  Comparator$ObjectLiteral_1.$metadata$ = {kind: Kind_CLASS, interfaces: [Comparator]};
  function sortedByDescending2($receiver, callback) {
    return sortedWith($receiver, new Comparator$ObjectLiteral_1(sortedByDescending2$lambda(callback)));
  }
  function Stack() {
    this.items_0 = ArrayList_init();
  }
  Object.defineProperty(Stack.prototype, 'size', {
    get: function () {
      return this.items_0.size;
    }
  });
  Object.defineProperty(Stack.prototype, 'hasMore', {
    get: function () {
      return this.size > 0;
    }
  });
  Stack.prototype.isEmpty = function () {
    return this.size === 0;
  };
  Stack.prototype.isNotEmpty = function () {
    return this.size !== 0;
  };
  Stack.prototype.push_11rb$ = function (v) {
    this.items_0.add_11rb$(v);
  };
  Stack.prototype.pop = function () {
    return this.items_0.removeAt_za3lpa$(this.items_0.size - 1 | 0);
  };
  Stack.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Stack',
    interfaces: []
  };
  function Stack_init(items, $this) {
    $this = $this || Object.create(Stack.prototype);
    Stack.call($this);
    var tmp$;
    for (tmp$ = 0; tmp$ !== items.length; ++tmp$) {
      var item = items[tmp$];
      $this.push_11rb$(item);
    }
    return $this;
  }
  function getOrPut($receiver, key, value) {
    if (!$receiver.contains_11rb$(key))
      $receiver.set_xwzc9p$(key, value(key));
    return ensureNotNull($receiver.get_11rb$(key));
  }
  function WeakProperty(gen) {
    this.gen = gen;
    this.map = new WeakMap_0();
  }
  function WeakProperty$getValue$lambda(this$WeakProperty) {
    return function (it) {
      return this$WeakProperty.gen();
    };
  }
  WeakProperty.prototype.getValue_t0xcdd$ = function (obj, property) {
    return getOrPut(this.map, obj, WeakProperty$getValue$lambda(this));
  };
  WeakProperty.prototype.setValue_cvomos$ = function (obj, property, value) {
    this.map.set_xwzc9p$(obj, value);
  };
  WeakProperty.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeakProperty',
    interfaces: []
  };
  function WeakPropertyThis(gen) {
    this.gen = gen;
    this.map = new WeakMap_0();
  }
  function WeakPropertyThis$getValue$lambda(this$WeakPropertyThis, closure$obj) {
    return function (it) {
      return this$WeakPropertyThis.gen(closure$obj);
    };
  }
  WeakPropertyThis.prototype.getValue_lrcp0p$ = function (obj, property) {
    return getOrPut(this.map, obj, WeakPropertyThis$getValue$lambda(this, obj));
  };
  WeakPropertyThis.prototype.setValue_9rddgb$ = function (obj, property, value) {
    this.map.set_xwzc9p$(obj, value);
  };
  WeakPropertyThis.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeakPropertyThis',
    interfaces: []
  };
  function binarySearch_1($receiver, v, fromIndex, toIndex) {
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) / 2 | 0;
      var mval = $receiver[mid];
      if (mval < v)
        low = mid + 1 | 0;
      else if (mval > v)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return (-low | 0) - 1 | 0;
  }
  function binarySearch_2($receiver, v, fromIndex, toIndex) {
    var low = fromIndex;
    var high = toIndex - 1 | 0;
    while (low <= high) {
      var mid = (low + high | 0) / 2 | 0;
      var mval = $receiver[mid];
      if (mval < v)
        low = mid + 1 | 0;
      else if (mval > v)
        high = mid - 1 | 0;
      else
        return mid;
    }
    return (-low | 0) - 1 | 0;
  }
  function lmapOf(pairs) {
    var tmp$;
    var out = LinkedHashMap_init();
    for (tmp$ = 0; tmp$ !== pairs.length; ++tmp$) {
      var tmp$_0 = pairs[tmp$];
      var key = tmp$_0.component1()
      , value = tmp$_0.component2();
      out.put_xwzc9p$(key, value);
    }
    return out;
  }
  function toLinkedMap($receiver) {
    var tmp$;
    var out = LinkedHashMap_init();
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var tmp$_0 = tmp$.next();
      var key = tmp$_0.component1()
      , value = tmp$_0.component2();
      out.put_xwzc9p$(key, value);
    }
    return out;
  }
  function mapWhile(cond, gen) {
    var out = ArrayList_init();
    while (cond()) {
      var element = gen(out.size);
      out.add_11rb$(element);
    }
    return out;
  }
  function FastIntMap(dummy) {
  }
  FastIntMap.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'FastIntMap',
    interfaces: []
  };
  function FastIntMap_0() {
    return {};
  }
  var get_1 = defineInlineFunction('kds-js.com.soywiz.kds.get_yuwbmu$', function ($receiver, key) {
    return $receiver[key];
  });
  var set_0 = defineInlineFunction('kds-js.com.soywiz.kds.set_xh22fo$', wrapFunction(function () {
    return function ($receiver, key, value) {
      $receiver[key] = value;
    };
  }));
  var contains_0 = defineInlineFunction('kds-js.com.soywiz.kds.contains_yuwbmu$', function ($receiver, key) {
    return $receiver[key] != undefined;
  });
  var remove = defineInlineFunction('kds-js.com.soywiz.kds.remove_yuwbmu$', wrapFunction(function () {
    return function ($receiver, key) {
      $receiver[key] = null;
    };
  }));
  var removeRange = defineInlineFunction('kds-js.com.soywiz.kds.removeRange_i707ug$', function ($receiver, src, dst) {
    var obj = $receiver;
    for (var key in obj)
      if (key >= src && key <= dst)
        delete obj[key];
  });
  var clear = defineInlineFunction('kds-js.com.soywiz.kds.clear_h8lhhk$', function ($receiver) {
    var obj = $receiver;
    for (var key in obj)
      delete obj[key];
  });
  function WeakMap_0() {
    this.wm = new WeakMap();
  }
  WeakMap_0.prototype.contains_11rb$ = function (key) {
    return this.wm.has(key);
  };
  WeakMap_0.prototype.set_xwzc9p$ = function (key, value) {
    if (typeof key === 'string') {
      throw IllegalStateException_init_0("Can't use String as WeakMap keys".toString());
    }
    this.wm.set(key, value);
  };
  WeakMap_0.prototype.get_11rb$ = function (key) {
    return this.wm.get(key);
  };
  WeakMap_0.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'WeakMap',
    interfaces: []
  };
  $$importsForInline$$['kds-js'] = _;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$kds = package$soywiz.kds || (package$soywiz.kds = {});
  package$kds.Array2 = Array2;
  Object.defineProperty(Array2, 'Companion', {
    get: Array2$Companion_getInstance
  });
  package$kds.BitSet = BitSet;
  package$kds.CacheMap = CacheMap;
  package$kds.CircularList = CircularList;
  Computed.WithParent = Computed$WithParent;
  package$kds.Computed = Computed;
  package$kds.DoubleArrayList_init_avch8c$ = DoubleArrayList_init;
  package$kds.DoubleArrayList_init_yqxtqz$ = DoubleArrayList_init_0;
  package$kds.DoubleArrayList = DoubleArrayList;
  package$kds.binarySearch_q2gx63$ = binarySearch;
  package$kds.doubleArrayListOf_yqxtqz$ = doubleArrayListOf;
  package$kds.DoubleCircularList = DoubleCircularList;
  Object.defineProperty(DoubleLinkedList, 'Companion', {
    get: DoubleLinkedList$Companion_getInstance
  });
  package$kds.DoubleLinkedList_init = DoubleLinkedList_init;
  package$kds.DoubleLinkedList = DoubleLinkedList;
  package$kds.DoubleQueue_init_yqxtqz$ = DoubleQueue_init;
  package$kds.DoubleQueue = DoubleQueue;
  package$kds.DoubleStack_init_yqxtqz$ = DoubleStack_init;
  package$kds.DoubleStack = DoubleStack;
  Extra.Mixin = Extra$Mixin;
  package$kds.setExtra_46skc7$ = setExtra;
  Extra.Property = Extra$Property;
  package$kds.lmapOf_qfcya0$ = lmapOf;
  Extra.PropertyThis = Extra$PropertyThis;
  package$kds.Extra = Extra;
  package$kds.getExtraTyped_qhdxhg$ = getExtraTyped;
  package$kds.getExtra_mr3xxn$ = getExtra;
  package$kds.extraProperty = extraProperty;
  package$kds.IntArrayList_init_38vc8i$ = IntArrayList_init;
  package$kds.IntArrayList_init_pmhfmb$ = IntArrayList_init_0;
  package$kds.IntArrayList = IntArrayList;
  package$kds.binarySearch_s1glwf$ = binarySearch_0;
  package$kds.intArrayListOf_pmhfmb$ = intArrayListOf;
  package$kds.IntCircularList = IntCircularList;
  Object.defineProperty(package$kds, 'KdsExt', {
    get: KdsExt_getInstance
  });
  package$kds.KdsExt_5gqd57$ = KdsExt_0;
  IntFloatMap.Entry = IntFloatMap$Entry;
  package$kds.IntFloatMap = IntFloatMap;
  Object.defineProperty(IntIntMap, 'Companion', {
    get: IntIntMap$Companion_getInstance
  });
  IntIntMap.Entry = IntIntMap$Entry;
  IntIntMap.KeyIterable = IntIntMap$KeyIterable;
  IntIntMap.ValueIterable = IntIntMap$ValueIterable;
  IntIntMap.EntryIterable = IntIntMap$EntryIterable;
  IntIntMap.KeyIterator = IntIntMap$KeyIterator;
  IntIntMap.ValueIterator = IntIntMap$ValueIterator;
  IntIntMap.EntryIterator = IntIntMap$EntryIterator;
  IntIntMap.Iterator = IntIntMap$Iterator;
  package$kds.IntIntMap_init_14dthe$ = IntIntMap_init;
  package$kds.IntIntMap = IntIntMap;
  Object.defineProperty(IntLinkedList, 'Companion', {
    get: IntLinkedList$Companion_getInstance
  });
  package$kds.IntLinkedList_init = IntLinkedList_init;
  package$kds.IntLinkedList = IntLinkedList;
  Object.defineProperty(IntMap, 'Companion', {
    get: IntMap$Companion_getInstance
  });
  IntMap.Entry = IntMap$Entry;
  IntMap.KeyIterable = IntMap$KeyIterable;
  IntMap.ValueIterable = IntMap$ValueIterable;
  IntMap.EntryIterable = IntMap$EntryIterable;
  IntMap.KeyIterator = IntMap$KeyIterator;
  IntMap.ValueIterator = IntMap$ValueIterator;
  IntMap.EntryIterator = IntMap$EntryIterator;
  IntMap.Iterator = IntMap$Iterator;
  package$kds.IntMap_init_42wstk$ = IntMap_init;
  package$kds.IntMap = IntMap;
  package$kds.IntQueue_init_pmhfmb$ = IntQueue_init;
  package$kds.IntQueue = IntQueue;
  package$kds.IntSet = IntSet;
  package$kds.IntStack_init_pmhfmb$ = IntStack_init;
  package$kds.IntStack = IntStack;
  Object.defineProperty(LinkedList, 'Companion', {
    get: LinkedList$Companion_getInstance
  });
  package$kds.LinkedList_init_287e2$ = LinkedList_init;
  package$kds.LinkedList = LinkedList;
  package$kds.getCyclic_yzln2o$ = getCyclic;
  package$kds.getCyclic_r20n03$ = getCyclic_0;
  package$kds.ListReader = ListReader;
  package$kds.reader_2p1efm$ = reader;
  package$kds.expect_2mact2$ = expect;
  package$kds.flip_go3l1a$ = flip;
  package$kds.incr_9idthx$ = incr;
  package$kds.toCaseInsensitiveTreeMap_yrl0k6$ = toCaseInsensitiveTreeMap;
  package$kds.CaseInsensitiveHashMap = CaseInsensitiveHashMap;
  package$kds.MapList_init_svx7l6$ = MapList_init;
  package$kds.MapList_init_4lrrid$ = MapList_init_0;
  package$kds.MapList_init_1z6cj6$ = MapList_init_1;
  package$kds.MapList = MapList;
  Object.defineProperty(package$kds, 'MemTools', {
    get: MemTools_getInstance
  });
  package$kds.splice_b7gcku$ = splice;
  package$kds.reduceAcumulate_l1hrho$ = reduceAcumulate;
  package$kds.NumberArrayList = NumberArrayList;
  package$kds.get_5mtnxv$ = get_0;
  package$kds.set_l23ja9$ = set;
  package$kds.Pool_init_rz0iom$ = Pool_init;
  package$kds.Pool = Pool;
  package$kds.PriorityQueue_init_km2rfd$ = PriorityQueue_init;
  package$kds.PriorityQueue = PriorityQueue;
  package$kds.Queue_init_i5x0yv$ = Queue_init;
  package$kds.Queue = Queue;
  package$kds.sortedBy2_nd8ern$ = sortedBy2;
  package$kds.sortedByDescending2_nd8ern$ = sortedByDescending2;
  package$kds.Stack_init_i5x0yv$ = Stack_init;
  package$kds.Stack = Stack;
  package$kds.getOrPut_mhcqk2$ = getOrPut;
  package$kds.WeakProperty = WeakProperty;
  package$kds.WeakPropertyThis = WeakPropertyThis;
  package$kds.binarySearch_tpuxuu$ = binarySearch_1;
  package$kds.binarySearch_x4f2cq$ = binarySearch_2;
  package$kds.toLinkedMap_6hr0sd$ = toLinkedMap;
  package$kds.mapWhile_sj71nh$ = mapWhile;
  package$kds.FastIntMap = FastIntMap;
  package$kds.FastIntMap_287e2$ = FastIntMap_0;
  package$kds.get_yuwbmu$ = get_1;
  package$kds.set_xh22fo$ = set_0;
  package$kds.contains_yuwbmu$ = contains_0;
  package$kds.remove_yuwbmu$ = remove;
  package$kds.removeRange_i707ug$ = removeRange;
  package$kds.clear_h8lhhk$ = clear;
  package$kds.WeakMap = WeakMap_0;
  Kotlin.defineModule('kds-js', _);
  return _;
}));

//# sourceMappingURL=kds-js.js.map
