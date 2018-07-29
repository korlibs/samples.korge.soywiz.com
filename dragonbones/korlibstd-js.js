(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korlibstd-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korlibstd-js'.");
    }
    root['korlibstd-js'] = factory(typeof this['korlibstd-js'] === 'undefined' ? {} : this['korlibstd-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var L1 = Kotlin.Long.ONE;
  var L_1 = Kotlin.Long.NEG_ONE;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var Annotation = Kotlin.kotlin.Annotation;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var L0 = Kotlin.Long.ZERO;
  function AtomicBool(value) {
    if (value === void 0)
      value = false;
    this.value = value;
    this.atomic_0 = NewAtomicInt(this.toInt_1v8dcc$(this.value));
  }
  AtomicBool.prototype.toInt_1v8dcc$ = function ($receiver) {
    return this.value ? 1 : 0;
  };
  AtomicBool.prototype.set_6taknv$ = function (value) {
    set_0(this.atomic_0, this.toInt_1v8dcc$(value));
  };
  AtomicBool.prototype.get = function () {
    return get_0(this.atomic_0) !== 0;
  };
  AtomicBool.prototype.getValue_n5byny$ = defineInlineFunction('korlibstd-js.com.soywiz.std.AtomicBool.getValue_n5byny$', function (obj, property) {
    return this.get();
  });
  AtomicBool.prototype.setValue_t08ssb$ = defineInlineFunction('korlibstd-js.com.soywiz.std.AtomicBool.setValue_t08ssb$', function (obj, property, v) {
    this.set_6taknv$(v);
  });
  AtomicBool.prototype.compareAndSet_dqye30$ = function (expected, newValue) {
    return compareAndSet(this.atomic_0, this.toInt_1v8dcc$(expected), this.toInt_1v8dcc$(newValue));
  };
  AtomicBool.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicBool',
    interfaces: []
  };
  function preIncrement($receiver) {
    return addAndGet($receiver, 1) - 1 | 0;
  }
  function increment($receiver) {
    return addAndGet($receiver, 1);
  }
  function decrement($receiver) {
    return addAndGet($receiver, -1);
  }
  function preIncrement_0($receiver) {
    return addAndGet_0($receiver, L1).subtract(Kotlin.Long.fromInt(1));
  }
  function increment_0($receiver) {
    return addAndGet_0($receiver, L1);
  }
  function decrement_0($receiver) {
    return addAndGet_0($receiver, L_1);
  }
  function atomicRef(initial) {
    this.initial = initial;
    this.value = NewAtomicReference(this.initial);
  }
  atomicRef.prototype.getValue_n5byny$ = defineInlineFunction('korlibstd-js.com.soywiz.std.atomicRef.getValue_n5byny$', wrapFunction(function () {
    var get = _.com.soywiz.std.get_9a66ys$;
    var Any = Object;
    var throwCCE = Kotlin.throwCCE;
    return function (obj, property) {
      var tmp$;
      return (tmp$ = get(this.value)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    };
  }));
  atomicRef.prototype.setValue_sq4zib$ = defineInlineFunction('korlibstd-js.com.soywiz.std.atomicRef.setValue_sq4zib$', wrapFunction(function () {
    var set = _.com.soywiz.std.set_w3bxl6$;
    return function (obj, property, v) {
      set(this.value, v);
    };
  }));
  atomicRef.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'atomicRef',
    interfaces: []
  };
  function atomicLateinit() {
    this.value = NewAtomicReference(null);
  }
  var IllegalStateException_init = Kotlin.kotlin.IllegalStateException_init_pdl1vj$;
  atomicLateinit.prototype.getValue_n5byny$ = function (obj, property) {
    var tmp$;
    if (get(this.value) == null) {
      throw IllegalStateException_init('Tried to access atomicLateinit value without setting it first'.toString());
    }
    return (tmp$ = get(this.value)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
  };
  atomicLateinit.prototype.setValue_sq4zib$ = function (obj, property, v) {
    set(this.value, v);
  };
  atomicLateinit.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'atomicLateinit',
    interfaces: []
  };
  function ThreadLocal() {
  }
  ThreadLocal.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ThreadLocal',
    interfaces: [Annotation]
  };
  function atomicLazy(initializer) {
    return lazy(initializer);
  }
  function AtomicReference(value) {
    this.value = value;
  }
  AtomicReference.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicReference',
    interfaces: []
  };
  function NewAtomicReference(value) {
    return new AtomicReference(value);
  }
  function set($receiver, value) {
    $receiver.value = value;
  }
  function get($receiver) {
    return $receiver.value;
  }
  function AtomicInt() {
    this.value = 0;
  }
  AtomicInt.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicInt',
    interfaces: []
  };
  function NewAtomicInt(value) {
    var $receiver = new AtomicInt();
    $receiver.value = value;
    return $receiver;
  }
  function compareAndSet($receiver, expected, newValue) {
    if ($receiver.value === expected) {
      $receiver.value = newValue;
      return true;
    }
     else {
      return false;
    }
  }
  function addAndGet($receiver, delta) {
    $receiver.value = $receiver.value + delta | 0;
    return $receiver.value;
  }
  function set_0($receiver, value) {
    $receiver.value = value;
  }
  function get_0($receiver) {
    return $receiver.value;
  }
  function AtomicLong() {
    this.value = L0;
  }
  AtomicLong.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AtomicLong',
    interfaces: []
  };
  function NewAtomicLong(value) {
    var $receiver = new AtomicLong();
    $receiver.value = value;
    return $receiver;
  }
  function addAndGet_0($receiver, delta) {
    $receiver.value = $receiver.value.add(delta);
    return $receiver.value;
  }
  function set_1($receiver, value) {
    $receiver.value = value;
  }
  function get_1($receiver) {
    return $receiver.value;
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$std = package$soywiz.std || (package$soywiz.std = {});
  package$std.AtomicBool = AtomicBool;
  package$std.preIncrement_oy43sc$ = preIncrement;
  package$std.increment_oy43sc$ = increment;
  package$std.decrement_oy43sc$ = decrement;
  package$std.preIncrement_7x1emx$ = preIncrement_0;
  package$std.increment_7x1emx$ = increment_0;
  package$std.decrement_7x1emx$ = decrement_0;
  package$std.get_9a66ys$ = get;
  package$std.set_w3bxl6$ = set;
  package$std.atomicRef = atomicRef;
  package$std.atomicLateinit = atomicLateinit;
  package$std.ThreadLocal = ThreadLocal;
  package$std.atomicLazy_klfg04$ = atomicLazy;
  package$std.AtomicReference = AtomicReference;
  package$std.NewAtomicReference_mh5how$ = NewAtomicReference;
  package$std.AtomicInt = AtomicInt;
  package$std.NewAtomicInt_za3lpa$ = NewAtomicInt;
  package$std.compareAndSet_sr6d34$ = compareAndSet;
  package$std.addAndGet_ne5qq6$ = addAndGet;
  package$std.set_ne5qq6$ = set_0;
  package$std.get_oy43sc$ = get_0;
  package$std.AtomicLong = AtomicLong;
  package$std.NewAtomicLong_s8cxhz$ = NewAtomicLong;
  package$std.addAndGet_kqph9a$ = addAndGet_0;
  package$std.set_kqph9a$ = set_1;
  package$std.get_7x1emx$ = get_1;
  Kotlin.defineModule('korlibstd-js', _);
  return _;
}));

//# sourceMappingURL=korlibstd-js.js.map
