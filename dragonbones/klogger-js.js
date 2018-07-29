(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korlibstd-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korlibstd-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'klogger-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'klogger-js'.");
    }
    if (typeof this['korlibstd-js'] === 'undefined') {
      throw new Error("Error loading module 'klogger-js'. Its dependency 'korlibstd-js' was not found. Please, check whether 'korlibstd-js' is loaded prior to 'klogger-js'.");
    }
    root['klogger-js'] = factory(typeof this['klogger-js'] === 'undefined' ? {} : this['klogger-js'], kotlin, this['korlibstd-js']);
  }
}(this, function (_, Kotlin, $module$korlibstd_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var atomicRef = $module$korlibstd_js.com.soywiz.std.atomicRef;
  var Enum = Kotlin.kotlin.Enum;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var throwISE = Kotlin.throwISE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var equals = Kotlin.equals;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var mapOf = Kotlin.kotlin.collections.mapOf_x2b85n$;
  var plus = Kotlin.kotlin.collections.plus_iwxh38$;
  Logger$Level.prototype = Object.create(Enum.prototype);
  Logger$Level.prototype.constructor = Logger$Level;
  function Console() {
    Console_instance = this;
  }
  Console.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Console',
    interfaces: []
  };
  var Console_instance = null;
  function Console_getInstance() {
    if (Console_instance === null) {
      new Console();
    }
    return Console_instance;
  }
  var err_print = defineInlineFunction('klogger-js.com.soywiz.klogger.err_print_f60uv7$', wrapFunction(function () {
    var print = Kotlin.kotlin.io.print_s8jyv4$;
    return function ($receiver, str) {
      print(str);
    };
  }));
  var out_print = defineInlineFunction('klogger-js.com.soywiz.klogger.out_print_f60uv7$', wrapFunction(function () {
    var print = Kotlin.kotlin.io.print_s8jyv4$;
    return function ($receiver, str) {
      print(str);
    };
  }));
  function Logger(name, dummy) {
    Logger$Companion_getInstance();
    this.name = name;
    this.dummy = dummy;
    Logger$Companion_getInstance().loggers_0;
    var tmp$;
    tmp$ = Logger$Companion_getInstance();
    tmp$.loggers_0 = plus(tmp$.loggers_0, mapOf(to(this.name, this)));
    this.level_n5cah7$_0 = new atomicRef(null);
    this.output_c5n464$_0 = new atomicRef(null);
  }
  var emptyMap = Kotlin.kotlin.collections.emptyMap_q3lmfv$;
  function Logger$Companion() {
    Logger$Companion_instance = this;
    this.loggers_r340y6$_0 = new atomicRef(emptyMap());
    this.defaultLevel_h5k928$_0 = new atomicRef(null);
    this.defaultOutput = Logger$ConsoleLogOutput_getInstance();
  }
  var get_0 = $module$korlibstd_js.com.soywiz.std.get_9a66ys$;
  var Any = Object;
  var throwCCE = Kotlin.throwCCE;
  var set = $module$korlibstd_js.com.soywiz.std.set_w3bxl6$;
  Object.defineProperty(Logger$Companion.prototype, 'loggers_0', {
    get: function () {
      var tmp$;
      return (tmp$ = get_0(this.loggers_r340y6$_0.value)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (loggers) {
      set(this.loggers_r340y6$_0.value, loggers);
    }
  });
  Object.defineProperty(Logger$Companion.prototype, 'defaultLevel', {
    get: function () {
      var tmp$;
      return (tmp$ = get_0(this.defaultLevel_h5k928$_0.value)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (defaultLevel) {
      set(this.defaultLevel_h5k928$_0.value, defaultLevel);
    }
  });
  Logger$Companion.prototype.getLogger_61zpoe$ = function (name) {
    var tmp$;
    return (tmp$ = this.loggers_0.get_11rb$(name)) != null ? tmp$ : new Logger(name, true);
  };
  Logger$Companion.prototype.setLevel_9aclq7$ = function (name, level) {
    var $receiver = this.getLogger_61zpoe$(name);
    $receiver.level = level;
    return $receiver;
  };
  Logger$Companion.prototype.setOutput_24hyho$ = function (name, output) {
    var $receiver = this.getLogger_61zpoe$(name);
    $receiver.output = output;
    return $receiver;
  };
  Logger$Companion.prototype.invoke_61zpoe$ = function (name) {
    return Logger$Companion_getInstance().getLogger_61zpoe$(name);
  };
  Logger$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Logger$Companion_instance = null;
  function Logger$Companion_getInstance() {
    if (Logger$Companion_instance === null) {
      new Logger$Companion();
    }
    return Logger$Companion_instance;
  }
  function Logger$Level(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Logger$Level_initFields() {
    Logger$Level_initFields = function () {
    };
    Logger$Level$NONE_instance = new Logger$Level('NONE', 0, 0);
    Logger$Level$FATAL_instance = new Logger$Level('FATAL', 1, 1);
    Logger$Level$ERROR_instance = new Logger$Level('ERROR', 2, 2);
    Logger$Level$WARN_instance = new Logger$Level('WARN', 3, 3);
    Logger$Level$INFO_instance = new Logger$Level('INFO', 4, 4);
    Logger$Level$DEBUG_instance = new Logger$Level('DEBUG', 5, 5);
    Logger$Level$TRACE_instance = new Logger$Level('TRACE', 6, 6);
  }
  var Logger$Level$NONE_instance;
  function Logger$Level$NONE_getInstance() {
    Logger$Level_initFields();
    return Logger$Level$NONE_instance;
  }
  var Logger$Level$FATAL_instance;
  function Logger$Level$FATAL_getInstance() {
    Logger$Level_initFields();
    return Logger$Level$FATAL_instance;
  }
  var Logger$Level$ERROR_instance;
  function Logger$Level$ERROR_getInstance() {
    Logger$Level_initFields();
    return Logger$Level$ERROR_instance;
  }
  var Logger$Level$WARN_instance;
  function Logger$Level$WARN_getInstance() {
    Logger$Level_initFields();
    return Logger$Level$WARN_instance;
  }
  var Logger$Level$INFO_instance;
  function Logger$Level$INFO_getInstance() {
    Logger$Level_initFields();
    return Logger$Level$INFO_instance;
  }
  var Logger$Level$DEBUG_instance;
  function Logger$Level$DEBUG_getInstance() {
    Logger$Level_initFields();
    return Logger$Level$DEBUG_instance;
  }
  var Logger$Level$TRACE_instance;
  function Logger$Level$TRACE_getInstance() {
    Logger$Level_initFields();
    return Logger$Level$TRACE_instance;
  }
  Logger$Level.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Level',
    interfaces: [Enum]
  };
  function Logger$Level$values() {
    return [Logger$Level$NONE_getInstance(), Logger$Level$FATAL_getInstance(), Logger$Level$ERROR_getInstance(), Logger$Level$WARN_getInstance(), Logger$Level$INFO_getInstance(), Logger$Level$DEBUG_getInstance(), Logger$Level$TRACE_getInstance()];
  }
  Logger$Level.values = Logger$Level$values;
  function Logger$Level$valueOf(name) {
    switch (name) {
      case 'NONE':
        return Logger$Level$NONE_getInstance();
      case 'FATAL':
        return Logger$Level$FATAL_getInstance();
      case 'ERROR':
        return Logger$Level$ERROR_getInstance();
      case 'WARN':
        return Logger$Level$WARN_getInstance();
      case 'INFO':
        return Logger$Level$INFO_getInstance();
      case 'DEBUG':
        return Logger$Level$DEBUG_getInstance();
      case 'TRACE':
        return Logger$Level$TRACE_getInstance();
      default:throwISE('No enum constant com.soywiz.klogger.Logger.Level.' + name);
    }
  }
  Logger$Level.valueOf_61zpoe$ = Logger$Level$valueOf;
  function Logger$Output() {
  }
  Logger$Output.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'Output',
    interfaces: []
  };
  function Logger$ConsoleLogOutput() {
    Logger$ConsoleLogOutput_instance = this;
  }
  Logger$ConsoleLogOutput.prototype.output_wgz3sg$ = function (logger, level, msg) {
    if (equals(level, Logger$Level$ERROR_getInstance())) {
      Console_getInstance();
      var msg_0 = [logger.name, msg];
      var tmp$;
      (tmp$ = console).error.apply(tmp$, msg_0);
    }
     else {
      Console_getInstance();
      var msg_1 = [logger.name, msg];
      var tmp$_0;
      (tmp$_0 = console).log.apply(tmp$_0, msg_1);
    }
  };
  Logger$ConsoleLogOutput.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'ConsoleLogOutput',
    interfaces: [Logger$Output]
  };
  var Logger$ConsoleLogOutput_instance = null;
  function Logger$ConsoleLogOutput_getInstance() {
    if (Logger$ConsoleLogOutput_instance === null) {
      new Logger$ConsoleLogOutput();
    }
    return Logger$ConsoleLogOutput_instance;
  }
  Object.defineProperty(Logger.prototype, 'level', {
    get: function () {
      var tmp$;
      return (tmp$ = get_0(this.level_n5cah7$_0.value)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (level) {
      set(this.level_n5cah7$_0.value, level);
    }
  });
  Object.defineProperty(Logger.prototype, 'output', {
    get: function () {
      var tmp$;
      return (tmp$ = get_0(this.output_c5n464$_0.value)) == null || Kotlin.isType(tmp$, Any) ? tmp$ : throwCCE();
    },
    set: function (output) {
      set(this.output_c5n464$_0.value, output);
    }
  });
  Object.defineProperty(Logger.prototype, 'processedLevel_0', {
    get: function () {
      var tmp$, tmp$_0;
      return (tmp$_0 = (tmp$ = this.level) != null ? tmp$ : Logger$Companion_getInstance().defaultLevel) != null ? tmp$_0 : Logger$Level$WARN_getInstance();
    }
  });
  Object.defineProperty(Logger.prototype, 'processedOutput_0', {
    get: function () {
      var tmp$;
      return (tmp$ = this.output) != null ? tmp$ : Logger$Companion_getInstance().defaultOutput;
    }
  });
  Logger.prototype.actualLog_pwm3k3$ = function (level, msg) {
    this.processedOutput_0.output_wgz3sg$(this, level, msg);
  };
  Logger.prototype.log_ky4efp$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.log_ky4efp$', function (level, msg) {
    if (this.isEnabled_fs4ikx$(level)) {
      this.actualLog_pwm3k3$(level, msg());
    }
  });
  Logger.prototype.fatal_nq59yw$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.fatal_nq59yw$', wrapFunction(function () {
    var Logger$Level = _.com.soywiz.klogger.Logger.Level;
    return function (msg) {
      var level = Logger$Level.FATAL;
      if (this.isEnabled_fs4ikx$(level)) {
        this.actualLog_pwm3k3$(level, msg());
      }
    };
  }));
  Logger.prototype.error_nq59yw$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.error_nq59yw$', wrapFunction(function () {
    var Logger$Level = _.com.soywiz.klogger.Logger.Level;
    return function (msg) {
      var level = Logger$Level.ERROR;
      if (this.isEnabled_fs4ikx$(level)) {
        this.actualLog_pwm3k3$(level, msg());
      }
    };
  }));
  Logger.prototype.warn_nq59yw$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.warn_nq59yw$', wrapFunction(function () {
    var Logger$Level = _.com.soywiz.klogger.Logger.Level;
    return function (msg) {
      var level = Logger$Level.WARN;
      if (this.isEnabled_fs4ikx$(level)) {
        this.actualLog_pwm3k3$(level, msg());
      }
    };
  }));
  Logger.prototype.info_nq59yw$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.info_nq59yw$', wrapFunction(function () {
    var Logger$Level = _.com.soywiz.klogger.Logger.Level;
    return function (msg) {
      var level = Logger$Level.INFO;
      if (this.isEnabled_fs4ikx$(level)) {
        this.actualLog_pwm3k3$(level, msg());
      }
    };
  }));
  Logger.prototype.debug_nq59yw$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.debug_nq59yw$', wrapFunction(function () {
    var Logger$Level = _.com.soywiz.klogger.Logger.Level;
    return function (msg) {
      var level = Logger$Level.DEBUG;
      if (this.isEnabled_fs4ikx$(level)) {
        this.actualLog_pwm3k3$(level, msg());
      }
    };
  }));
  Logger.prototype.trace_nq59yw$ = defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.trace_nq59yw$', wrapFunction(function () {
    var Logger$Level = _.com.soywiz.klogger.Logger.Level;
    return function (msg) {
      var level = Logger$Level.TRACE;
      if (this.isEnabled_fs4ikx$(level)) {
        this.actualLog_pwm3k3$(level, msg());
      }
    };
  }));
  Logger.prototype.fatal_61zpoe$ = function (msg) {
    var level = Logger$Level.FATAL;
    if (this.isEnabled_fs4ikx$(level)) {
      this.actualLog_pwm3k3$(level, msg);
    }
  };
  Logger.prototype.error_61zpoe$ = function (msg) {
    var level = Logger$Level.ERROR;
    if (this.isEnabled_fs4ikx$(level)) {
      this.actualLog_pwm3k3$(level, msg);
    }
  };
  Logger.prototype.warn_61zpoe$ = function (msg) {
    var level = Logger$Level.WARN;
    if (this.isEnabled_fs4ikx$(level)) {
      this.actualLog_pwm3k3$(level, msg);
    }
  };
  Logger.prototype.info_61zpoe$ = function (msg) {
    var level = Logger$Level.INFO;
    if (this.isEnabled_fs4ikx$(level)) {
      this.actualLog_pwm3k3$(level, msg);
    }
  };
  Logger.prototype.debug_61zpoe$ = function (msg) {
    var level = Logger$Level.DEBUG;
    if (this.isEnabled_fs4ikx$(level)) {
      this.actualLog_pwm3k3$(level, msg);
    }
  };
  Logger.prototype.trace_61zpoe$ = function (msg) {
    var level = Logger$Level.TRACE;
    if (this.isEnabled_fs4ikx$(level)) {
      this.actualLog_pwm3k3$(level, msg);
    }
  };
  Logger.prototype.isEnabled_fs4ikx$ = function (level) {
    return level.index <= this.processedLevel_0.index;
  };
  Object.defineProperty(Logger.prototype, 'isFatalEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isFatalEnabled', wrapFunction(function () {
      var Logger$Level = _.com.soywiz.klogger.Logger.Level;
      return function () {
        return this.isEnabled_fs4ikx$(Logger$Level.FATAL);
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isErrorEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isErrorEnabled', wrapFunction(function () {
      var Logger$Level = _.com.soywiz.klogger.Logger.Level;
      return function () {
        return this.isEnabled_fs4ikx$(Logger$Level.ERROR);
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isWarnEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isWarnEnabled', wrapFunction(function () {
      var Logger$Level = _.com.soywiz.klogger.Logger.Level;
      return function () {
        return this.isEnabled_fs4ikx$(Logger$Level.WARN);
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isInfoEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isInfoEnabled', wrapFunction(function () {
      var Logger$Level = _.com.soywiz.klogger.Logger.Level;
      return function () {
        return this.isEnabled_fs4ikx$(Logger$Level.INFO);
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isDebugEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isDebugEnabled', wrapFunction(function () {
      var Logger$Level = _.com.soywiz.klogger.Logger.Level;
      return function () {
        return this.isEnabled_fs4ikx$(Logger$Level.DEBUG);
      };
    }))
  });
  Object.defineProperty(Logger.prototype, 'isTraceEnabled', {
    get: defineInlineFunction('klogger-js.com.soywiz.klogger.Logger.get_isTraceEnabled', wrapFunction(function () {
      var Logger$Level = _.com.soywiz.klogger.Logger.Level;
      return function () {
        return this.isEnabled_fs4ikx$(Logger$Level.TRACE);
      };
    }))
  });
  Logger.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Logger',
    interfaces: []
  };
  var error = defineInlineFunction('klogger-js.com.soywiz.klogger.error_38edjy$', function ($receiver, msg) {
    var tmp$;
    (tmp$ = console).error.apply(tmp$, msg);
  });
  var log = defineInlineFunction('klogger-js.com.soywiz.klogger.log_38edjy$', function ($receiver, msg) {
    var tmp$;
    (tmp$ = console).log.apply(tmp$, msg);
  });
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$klogger = package$soywiz.klogger || (package$soywiz.klogger = {});
  Object.defineProperty(package$klogger, 'Console', {
    get: Console_getInstance
  });
  package$klogger.err_print_f60uv7$ = err_print;
  package$klogger.out_print_f60uv7$ = out_print;
  $$importsForInline$$['korlibstd-js'] = $module$korlibstd_js;
  Object.defineProperty(Logger, 'Companion', {
    get: Logger$Companion_getInstance
  });
  Object.defineProperty(Logger$Level, 'NONE', {
    get: Logger$Level$NONE_getInstance
  });
  Object.defineProperty(Logger$Level, 'FATAL', {
    get: Logger$Level$FATAL_getInstance
  });
  Object.defineProperty(Logger$Level, 'ERROR', {
    get: Logger$Level$ERROR_getInstance
  });
  Object.defineProperty(Logger$Level, 'WARN', {
    get: Logger$Level$WARN_getInstance
  });
  Object.defineProperty(Logger$Level, 'INFO', {
    get: Logger$Level$INFO_getInstance
  });
  Object.defineProperty(Logger$Level, 'DEBUG', {
    get: Logger$Level$DEBUG_getInstance
  });
  Object.defineProperty(Logger$Level, 'TRACE', {
    get: Logger$Level$TRACE_getInstance
  });
  Logger.Level = Logger$Level;
  Logger.Output = Logger$Output;
  $$importsForInline$$['klogger-js'] = _;
  Object.defineProperty(Logger, 'ConsoleLogOutput', {
    get: Logger$ConsoleLogOutput_getInstance
  });
  package$klogger.Logger = Logger;
  package$klogger.error_38edjy$ = error;
  package$klogger.log_38edjy$ = log;
  Kotlin.defineModule('klogger-js', _);
  return _;
}));

//# sourceMappingURL=klogger-js.js.map
