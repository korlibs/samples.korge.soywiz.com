(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'klock-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'klock-js'.");
    }
    root['klock-js'] = factory(typeof this['klock-js'] === 'undefined' ? {} : this['klock-js'], kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var Comparable = Kotlin.kotlin.Comparable;
  var RuntimeException_init = Kotlin.kotlin.RuntimeException_init_pdl1vj$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var L0 = Kotlin.Long.ZERO;
  var equals = Kotlin.equals;
  var throwCCE = Kotlin.throwCCE;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var abs = Kotlin.kotlin.math.abs_za3lpa$;
  var L86400000 = Kotlin.Long.fromInt(86400000);
  var hashCode = Kotlin.hashCode;
  var numberToInt = Kotlin.numberToInt;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var getOrNull = Kotlin.kotlin.collections.getOrNull_yzln2o$;
  var reversed = Kotlin.kotlin.collections.reversed_7wnvza$;
  var joinToString = Kotlin.kotlin.collections.joinToString_fmv235$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Throwable = Error;
  var ensureNotNull = Kotlin.ensureNotNull;
  var Regex_init = Kotlin.kotlin.text.Regex_init_61zpoe$;
  var trim = Kotlin.kotlin.text.trim_wqw3xr$;
  var capitalize = Kotlin.kotlin.text.capitalize_pdl1vz$;
  var drop = Kotlin.kotlin.collections.drop_ba2ldo$;
  var zip = Kotlin.kotlin.collections.zip_45mdf7$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var Regex = Kotlin.kotlin.text.Regex;
  var startsWith = Kotlin.kotlin.text.startsWith_7epoxm$;
  var numberToLong = Kotlin.numberToLong;
  var startsWith_0 = Kotlin.kotlin.text.startsWith_sgbm27$;
  var toIntOrNull = Kotlin.kotlin.text.toIntOrNull_pdl1vz$;
  var abs_0 = Kotlin.kotlin.math.abs_s8cxhz$;
  var substring = Kotlin.kotlin.text.substring_fc3b62$;
  DayOfWeek.prototype = Object.create(Enum.prototype);
  DayOfWeek.prototype.constructor = DayOfWeek;
  Month.prototype = Object.create(Enum.prototype);
  Month.prototype.constructor = Month;
  DateException.prototype = Object.create(RuntimeException.prototype);
  DateException.prototype.constructor = DateException;
  TimeProvider$Companion$invoke$ObjectLiteral.prototype = Object.create(TimeProvider.prototype);
  TimeProvider$Companion$invoke$ObjectLiteral.prototype.constructor = TimeProvider$Companion$invoke$ObjectLiteral;
  var measureTimeMs = defineInlineFunction('klock-js.com.soywiz.klock.measureTimeMs_o14v8n$', wrapFunction(function () {
    var klock = _.com.soywiz.klock;
    var numberToInt = Kotlin.numberToInt;
    return function (callback) {
      var start = klock.Klock.currentTimeMillisDouble();
      callback();
      var end = klock.Klock.currentTimeMillisDouble();
      return numberToInt(end - start);
    };
  }));
  function TimedResult(result, time) {
    this.result = result;
    this.time = time;
  }
  TimedResult.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimedResult',
    interfaces: []
  };
  TimedResult.prototype.component1 = function () {
    return this.result;
  };
  TimedResult.prototype.component2 = function () {
    return this.time;
  };
  TimedResult.prototype.copy_lx99sw$ = function (result, time) {
    return new TimedResult(result === void 0 ? this.result : result, time === void 0 ? this.time : time);
  };
  TimedResult.prototype.toString = function () {
    return 'TimedResult(result=' + Kotlin.toString(this.result) + (', time=' + Kotlin.toString(this.time)) + ')';
  };
  TimedResult.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.result) | 0;
    result = result * 31 + Kotlin.hashCode(this.time) | 0;
    return result;
  };
  TimedResult.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.result, other.result) && Kotlin.equals(this.time, other.time)))));
  };
  var measureTime = defineInlineFunction('klock-js.com.soywiz.klock.measureTime_9ce4rd$', wrapFunction(function () {
    var throwUPAE = Kotlin.throwUPAE;
    var TimedResult_init = _.com.soywiz.klock.TimedResult;
    var klock = _.com.soywiz.klock;
    var numberToInt = Kotlin.numberToInt;
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    return function (callback) {
      var result = {v: null};
      var start = klock.Klock.currentTimeMillisDouble();
      result.v = callback();
      var end = klock.Klock.currentTimeMillisDouble();
      var ms = numberToInt(end - start);
      return new TimedResult_init(result.v == null ? throwUPAE('result') : result.v, TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(ms)));
    };
  }));
  function DayOfWeek(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DayOfWeek_initFields() {
    DayOfWeek_initFields = function () {
    };
    DayOfWeek$Sunday_instance = new DayOfWeek('Sunday', 0, 0);
    DayOfWeek$Monday_instance = new DayOfWeek('Monday', 1, 1);
    DayOfWeek$Tuesday_instance = new DayOfWeek('Tuesday', 2, 2);
    DayOfWeek$Wednesday_instance = new DayOfWeek('Wednesday', 3, 3);
    DayOfWeek$Thursday_instance = new DayOfWeek('Thursday', 4, 4);
    DayOfWeek$Friday_instance = new DayOfWeek('Friday', 5, 5);
    DayOfWeek$Saturday_instance = new DayOfWeek('Saturday', 6, 6);
    DayOfWeek$Companion_getInstance();
  }
  var DayOfWeek$Sunday_instance;
  function DayOfWeek$Sunday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Sunday_instance;
  }
  var DayOfWeek$Monday_instance;
  function DayOfWeek$Monday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Monday_instance;
  }
  var DayOfWeek$Tuesday_instance;
  function DayOfWeek$Tuesday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Tuesday_instance;
  }
  var DayOfWeek$Wednesday_instance;
  function DayOfWeek$Wednesday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Wednesday_instance;
  }
  var DayOfWeek$Thursday_instance;
  function DayOfWeek$Thursday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Thursday_instance;
  }
  var DayOfWeek$Friday_instance;
  function DayOfWeek$Friday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Friday_instance;
  }
  var DayOfWeek$Saturday_instance;
  function DayOfWeek$Saturday_getInstance() {
    DayOfWeek_initFields();
    return DayOfWeek$Saturday_instance;
  }
  function DayOfWeek$Companion() {
    DayOfWeek$Companion_instance = this;
    this.BY_INDEX = DayOfWeek$values();
  }
  DayOfWeek$Companion.prototype.get_za3lpa$ = function (index) {
    return this.BY_INDEX[index];
  };
  DayOfWeek$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DayOfWeek$Companion_instance = null;
  function DayOfWeek$Companion_getInstance() {
    DayOfWeek_initFields();
    if (DayOfWeek$Companion_instance === null) {
      new DayOfWeek$Companion();
    }
    return DayOfWeek$Companion_instance;
  }
  DayOfWeek.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DayOfWeek',
    interfaces: [Enum]
  };
  function DayOfWeek$values() {
    return [DayOfWeek$Sunday_getInstance(), DayOfWeek$Monday_getInstance(), DayOfWeek$Tuesday_getInstance(), DayOfWeek$Wednesday_getInstance(), DayOfWeek$Thursday_getInstance(), DayOfWeek$Friday_getInstance(), DayOfWeek$Saturday_getInstance()];
  }
  DayOfWeek.values = DayOfWeek$values;
  function DayOfWeek$valueOf(name) {
    switch (name) {
      case 'Sunday':
        return DayOfWeek$Sunday_getInstance();
      case 'Monday':
        return DayOfWeek$Monday_getInstance();
      case 'Tuesday':
        return DayOfWeek$Tuesday_getInstance();
      case 'Wednesday':
        return DayOfWeek$Wednesday_getInstance();
      case 'Thursday':
        return DayOfWeek$Thursday_getInstance();
      case 'Friday':
        return DayOfWeek$Friday_getInstance();
      case 'Saturday':
        return DayOfWeek$Saturday_getInstance();
      default:throwISE('No enum constant com.soywiz.klock.DayOfWeek.' + name);
    }
  }
  DayOfWeek.valueOf_61zpoe$ = DayOfWeek$valueOf;
  function Year(year) {
    Year$Companion_getInstance();
    this.year = year;
  }
  function Year$Companion() {
    Year$Companion_instance = this;
  }
  Year$Companion.prototype.checked_za3lpa$ = function (year) {
    if (!(1 <= year && year <= 9999))
      throw new DateException('Year ' + year + ' not in 1..9999');
    return year;
  };
  Year$Companion.prototype.isLeapChecked_za3lpa$ = function (year) {
    return this.isLeap_za3lpa$(this.checked_za3lpa$(year));
  };
  Year$Companion.prototype.isLeap_za3lpa$ = function (year) {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
  };
  Year$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Year$Companion_instance = null;
  function Year$Companion_getInstance() {
    if (Year$Companion_instance === null) {
      new Year$Companion();
    }
    return Year$Companion_instance;
  }
  Year.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.year, other.year);
  };
  Year.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Year',
    interfaces: [Comparable]
  };
  Year.prototype.component1 = function () {
    return this.year;
  };
  Year.prototype.copy_za3lpa$ = function (year) {
    return new Year(year === void 0 ? this.year : year);
  };
  Year.prototype.toString = function () {
    return 'Year(year=' + Kotlin.toString(this.year) + ')';
  };
  Year.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.year) | 0;
    return result;
  };
  Year.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && Kotlin.equals(this.year, other.year))));
  };
  function Month(name, ordinal, index) {
    Enum.call(this);
    this.index = index;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function Month_initFields() {
    Month_initFields = function () {
    };
    Month$January_instance = new Month('January', 0, 1);
    Month$February_instance = new Month('February', 1, 2);
    Month$March_instance = new Month('March', 2, 3);
    Month$April_instance = new Month('April', 3, 4);
    Month$May_instance = new Month('May', 4, 5);
    Month$June_instance = new Month('June', 5, 6);
    Month$July_instance = new Month('July', 6, 7);
    Month$August_instance = new Month('August', 7, 8);
    Month$September_instance = new Month('September', 8, 9);
    Month$October_instance = new Month('October', 9, 10);
    Month$November_instance = new Month('November', 10, 11);
    Month$December_instance = new Month('December', 11, 12);
    Month$Companion_getInstance();
  }
  var Month$January_instance;
  function Month$January_getInstance() {
    Month_initFields();
    return Month$January_instance;
  }
  var Month$February_instance;
  function Month$February_getInstance() {
    Month_initFields();
    return Month$February_instance;
  }
  var Month$March_instance;
  function Month$March_getInstance() {
    Month_initFields();
    return Month$March_instance;
  }
  var Month$April_instance;
  function Month$April_getInstance() {
    Month_initFields();
    return Month$April_instance;
  }
  var Month$May_instance;
  function Month$May_getInstance() {
    Month_initFields();
    return Month$May_instance;
  }
  var Month$June_instance;
  function Month$June_getInstance() {
    Month_initFields();
    return Month$June_instance;
  }
  var Month$July_instance;
  function Month$July_getInstance() {
    Month_initFields();
    return Month$July_instance;
  }
  var Month$August_instance;
  function Month$August_getInstance() {
    Month_initFields();
    return Month$August_instance;
  }
  var Month$September_instance;
  function Month$September_getInstance() {
    Month_initFields();
    return Month$September_instance;
  }
  var Month$October_instance;
  function Month$October_getInstance() {
    Month_initFields();
    return Month$October_instance;
  }
  var Month$November_instance;
  function Month$November_getInstance() {
    Month_initFields();
    return Month$November_instance;
  }
  var Month$December_instance;
  function Month$December_getInstance() {
    Month_initFields();
    return Month$December_instance;
  }
  Object.defineProperty(Month.prototype, 'index0', {
    get: function () {
      return this.index - 1 | 0;
    }
  });
  Month.prototype.days_6taknv$ = function (isLeap) {
    return Month$Companion_getInstance().days_fzusl$(this.index, isLeap);
  };
  Month.prototype.daysToStart_6taknv$ = function (isLeap) {
    return Month$Companion_getInstance().daysToStart_fzusl$(this.index, isLeap);
  };
  Month.prototype.daysToEnd_6taknv$ = function (isLeap) {
    return Month$Companion_getInstance().daysToEnd_fzusl$(this.index, isLeap);
  };
  Month.prototype.days_za3lpa$ = function (year) {
    return Month$Companion_getInstance().days_vux9f0$(this.index, year);
  };
  Month.prototype.daysToStart_za3lpa$ = function (year) {
    return Month$Companion_getInstance().daysToStart_vux9f0$(this.index, year);
  };
  Month.prototype.daysToEnd_za3lpa$ = function (year) {
    return Month$Companion_getInstance().daysToEnd_vux9f0$(this.index, year);
  };
  function Month$Companion() {
    Month$Companion_instance = this;
    this.BY_INDEX0 = Month$values();
    this.DAYS_TO_MONTH_366 = new Int32Array([0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335, 366]);
    this.DAYS_TO_MONTH_365 = new Int32Array([0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334, 365]);
  }
  Month$Companion.prototype.invoke_za3lpa$ = function (index1) {
    return this.BY_INDEX0[umod(index1 - 1 | 0, 12)];
  };
  Month$Companion.prototype.get_za3lpa$ = function (index1) {
    return this.BY_INDEX0[umod(index1 - 1 | 0, 12)];
  };
  Month$Companion.prototype.check_za3lpa$ = function (month) {
    if (!(1 <= month && month <= 12))
      throw new DateException('Month ' + month + ' not in 1..12');
    return month;
  };
  Month$Companion.prototype.normalize_za3lpa$ = function (month) {
    return umod(month - 1 | 0, 12) + 1 | 0;
  };
  Month$Companion.prototype.days_fzusl$ = function (month, isLeap) {
    var nmonth = this.normalize_za3lpa$(month);
    var days = this.DAYS_TO_MONTH_6taknv$(isLeap);
    return days[nmonth] - days[nmonth - 1 | 0] | 0;
  };
  Month$Companion.prototype.daysToStart_fzusl$ = function (month, isLeap) {
    return this.DAYS_TO_MONTH_6taknv$(isLeap)[umod(month - 1 | 0, 13)];
  };
  Month$Companion.prototype.daysToEnd_fzusl$ = function (month, isLeap) {
    return this.DAYS_TO_MONTH_6taknv$(isLeap)[umod(month, 13)];
  };
  Month$Companion.prototype.days_vux9f0$ = function (month, year) {
    return this.days_fzusl$(month, Year$Companion_getInstance().isLeap_za3lpa$(year));
  };
  Month$Companion.prototype.daysToStart_vux9f0$ = function (month, year) {
    return this.daysToStart_fzusl$(month, Year$Companion_getInstance().isLeap_za3lpa$(year));
  };
  Month$Companion.prototype.daysToEnd_vux9f0$ = function (month, year) {
    return this.daysToEnd_fzusl$(month, Year$Companion_getInstance().isLeap_za3lpa$(year));
  };
  Month$Companion.prototype.DAYS_TO_MONTH_6taknv$ = function (isLeap) {
    return isLeap ? this.DAYS_TO_MONTH_366 : this.DAYS_TO_MONTH_365;
  };
  Month$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Month$Companion_instance = null;
  function Month$Companion_getInstance() {
    Month_initFields();
    if (Month$Companion_instance === null) {
      new Month$Companion();
    }
    return Month$Companion_instance;
  }
  Month.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Month',
    interfaces: [Enum]
  };
  function Month$values() {
    return [Month$January_getInstance(), Month$February_getInstance(), Month$March_getInstance(), Month$April_getInstance(), Month$May_getInstance(), Month$June_getInstance(), Month$July_getInstance(), Month$August_getInstance(), Month$September_getInstance(), Month$October_getInstance(), Month$November_getInstance(), Month$December_getInstance()];
  }
  Month.values = Month$values;
  function Month$valueOf(name) {
    switch (name) {
      case 'January':
        return Month$January_getInstance();
      case 'February':
        return Month$February_getInstance();
      case 'March':
        return Month$March_getInstance();
      case 'April':
        return Month$April_getInstance();
      case 'May':
        return Month$May_getInstance();
      case 'June':
        return Month$June_getInstance();
      case 'July':
        return Month$July_getInstance();
      case 'August':
        return Month$August_getInstance();
      case 'September':
        return Month$September_getInstance();
      case 'October':
        return Month$October_getInstance();
      case 'November':
        return Month$November_getInstance();
      case 'December':
        return Month$December_getInstance();
      default:throwISE('No enum constant com.soywiz.klock.Month.' + name);
    }
  }
  Month.valueOf_61zpoe$ = Month$valueOf;
  function DateException(msg) {
    RuntimeException_init(msg, this);
    this.name = 'DateException';
  }
  DateException.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DateException',
    interfaces: [RuntimeException]
  };
  var MILLIS_PER_SECOND;
  var MILLIS_PER_MINUTE;
  var MILLIS_PER_HOUR;
  var MILLIS_PER_DAY;
  var MILLIS_PER_WEEK;
  var DAYS_PER_YEAR;
  var DAYS_PER_4_YEARS;
  var DAYS_PER_100_YEARS;
  var DAYS_PER_400_YEARS;
  function DateTime() {
    DateTime$Companion_getInstance();
  }
  Object.defineProperty(DateTime.prototype, 'dayOfWeek', {
    get: function () {
      return DayOfWeek$Companion_getInstance().get_za3lpa$(this.dayOfWeekInt);
    }
  });
  Object.defineProperty(DateTime.prototype, 'month0', {
    get: function () {
      return this.month - 1 | 0;
    }
  });
  Object.defineProperty(DateTime.prototype, 'month1', {
    get: function () {
      return this.month;
    }
  });
  Object.defineProperty(DateTime.prototype, 'monthEnum', {
    get: function () {
      return Month$Companion_getInstance().get_za3lpa$(this.month1);
    }
  });
  DateTime.prototype.toUtc = function () {
    return this.utc;
  };
  DateTime.prototype.toLocal = function () {
    return OffsetDateTime$Companion_getInstance().invoke_yatgbp$(this, Klock_getInstance().getLocalTimezoneOffset_s8cxhz$(this.unix));
  };
  DateTime.prototype.addOffset_za3lpa$ = function (offset) {
    return OffsetDateTime$Companion_getInstance().invoke_yatgbp$(this, this.offset + offset | 0);
  };
  DateTime.prototype.toOffset_za3lpa$ = function (offset) {
    return OffsetDateTime$Companion_getInstance().invoke_yatgbp$(this, offset);
  };
  DateTime.prototype.addYears_za3lpa$ = function (delta) {
    return this.add_6svq3l$(delta * 12 | 0, L0);
  };
  DateTime.prototype.addMonths_za3lpa$ = function (delta) {
    return this.add_6svq3l$(delta, L0);
  };
  DateTime.prototype.addDays_14dthe$ = function (delta) {
    return this.add_6svq3l$(0, Kotlin.Long.fromNumber(delta * 86400000));
  };
  DateTime.prototype.addWeeks_14dthe$ = function (delta) {
    return this.add_6svq3l$(0, Kotlin.Long.fromNumber(delta * 604800000));
  };
  DateTime.prototype.addHours_14dthe$ = function (delta) {
    return this.add_6svq3l$(0, Kotlin.Long.fromNumber(delta * 3600000));
  };
  DateTime.prototype.addMinutes_14dthe$ = function (delta) {
    return this.add_6svq3l$(0, Kotlin.Long.fromNumber(delta * 60000));
  };
  DateTime.prototype.addSeconds_14dthe$ = function (delta) {
    return this.add_6svq3l$(0, Kotlin.Long.fromNumber(delta * 1000));
  };
  DateTime.prototype.addMilliseconds_14dthe$ = function (delta) {
    return delta === 0.0 ? this : this.add_6svq3l$(0, Kotlin.Long.fromNumber(delta));
  };
  DateTime.prototype.addMilliseconds_s8cxhz$ = function (delta) {
    return equals(delta, L0) ? this : this.add_6svq3l$(0, delta);
  };
  DateTime.prototype.plus_5t6mhc$ = function (delta) {
    return this.add_6svq3l$(delta.totalMonths, delta.totalMilliseconds);
  };
  DateTime.prototype.plus_fv8bff$ = function (delta) {
    return this.addMilliseconds_14dthe$(delta.milliseconds);
  };
  DateTime.prototype.minus_5t6mhc$ = function (delta) {
    return this.plus_5t6mhc$(delta.unaryMinus());
  };
  DateTime.prototype.minus_fv8bff$ = function (delta) {
    return this.addMilliseconds_14dthe$(-delta.milliseconds);
  };
  DateTime.prototype.toString_61zpoe$ = function (format) {
    return this.toString_2xh361$(new SimplerDateFormat(format));
  };
  DateTime.prototype.toString_2xh361$ = function (format) {
    return format.format_mw5vjr$(this);
  };
  function DateTime$Companion() {
    DateTime$Companion_instance = this;
    var tmp$;
    this.EPOCH = Kotlin.isType(tmp$ = DateTime$Companion_getInstance().invoke_ui44o2$(1970, 1, 1, 0, 0, 0), UtcDateTime) ? tmp$ : throwCCE();
    this.EPOCH_INTERNAL_MILLIS_0 = this.EPOCH.internalMillis_8be2vx$;
  }
  DateTime$Companion.prototype.invoke_ui44o2$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    return new UtcDateTime(UtcDateTime$Companion_getInstance().dateToMillis_cub51b$(year, month, day).add(UtcDateTime$Companion_getInstance().timeToMillis_cub51b$(hour, minute, second)).add(Kotlin.Long.fromInt(milliseconds)), true);
  };
  DateTime$Companion.prototype.invoke_s8cxhz$ = function (time) {
    return this.fromUnix_s8cxhz$(time);
  };
  DateTime$Companion.prototype.fromString_61zpoe$ = function (str) {
    return SimplerDateFormat$Companion_getInstance().parse_61zpoe$(str);
  };
  DateTime$Companion.prototype.parse_61zpoe$ = function (str) {
    return SimplerDateFormat$Companion_getInstance().parse_61zpoe$(str);
  };
  DateTime$Companion.prototype.fromUnix_s8cxhz$ = function (time) {
    return new UtcDateTime(this.EPOCH_INTERNAL_MILLIS_0.add(time), true);
  };
  DateTime$Companion.prototype.fromUnixLocal_s8cxhz$ = function (time) {
    return (new UtcDateTime(this.EPOCH_INTERNAL_MILLIS_0.add(time), true)).toLocal();
  };
  DateTime$Companion.prototype.nowUnix = function () {
    return Klock_getInstance().currentTimeMillis();
  };
  DateTime$Companion.prototype.now = function () {
    return this.fromUnix_s8cxhz$(this.nowUnix());
  };
  DateTime$Companion.prototype.nowLocal = function () {
    return this.fromUnix_s8cxhz$(this.nowUnix()).toLocal();
  };
  DateTime$Companion.prototype.createClamped_ui44o2$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    var clampedMonth = clamp(month, 1, 12);
    return this.createUnchecked_ui44o2$(year, clampedMonth, clamp(day, 1, this.daysInMonth_vux9f0$(clampedMonth, year)), clamp(hour, 0, 23), clamp(minute, 0, 59), clamp(second, 0, 59), milliseconds);
  };
  DateTime$Companion.prototype.createAdjusted_ui44o2$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    var dy = year;
    var dm = month;
    var dd = day;
    var th = hour;
    var tm = minute;
    var ts = second;
    tm = tm + cycleSteps(ts, 0, 59) | 0;
    ts = cycle(ts, 0, 59);
    th = th + cycleSteps(tm, 0, 59) | 0;
    tm = cycle(tm, 0, 59);
    dd = dd + cycleSteps(th, 0, 23) | 0;
    th = cycle(th, 0, 23);
    while (true) {
      var dup = this.daysInMonth_vux9f0$(dm, dy);
      dm = dm + cycleSteps(dd, 1, dup) | 0;
      dd = cycle(dd, 1, dup);
      dy = dy + cycleSteps(dm, 1, 12) | 0;
      dm = cycle(dm, 1, 12);
      if (cycle(dd, 1, this.daysInMonth_vux9f0$(dm, dy)) === dd) {
        break;
      }
    }
    return this.createUnchecked_ui44o2$(dy, dm, dd, th, tm, ts, milliseconds);
  };
  DateTime$Companion.prototype.createUnchecked_ui44o2$ = function (year, month, day, hour, minute, second, milliseconds) {
    if (hour === void 0)
      hour = 0;
    if (minute === void 0)
      minute = 0;
    if (second === void 0)
      second = 0;
    if (milliseconds === void 0)
      milliseconds = 0;
    return new UtcDateTime(UtcDateTime$Companion_getInstance().dateToMillisUnchecked_cub51b$(year, month, day).add(UtcDateTime$Companion_getInstance().timeToMillisUnchecked_cub51b$(hour, minute, second)).add(Kotlin.Long.fromInt(milliseconds)), true);
  };
  DateTime$Companion.prototype.isLeapYear_za3lpa$ = function (year) {
    return Year$Companion_getInstance().isLeap_za3lpa$(year);
  };
  DateTime$Companion.prototype.daysInMonth_fzusl$ = function (month, isLeap) {
    return Month$Companion_getInstance().days_fzusl$(month, isLeap);
  };
  DateTime$Companion.prototype.daysInMonth_vux9f0$ = function (month, year) {
    return this.daysInMonth_fzusl$(month, this.isLeapYear_za3lpa$(year));
  };
  DateTime$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var DateTime$Companion_instance = null;
  function DateTime$Companion_getInstance() {
    if (DateTime$Companion_instance === null) {
      new DateTime$Companion();
    }
    return DateTime$Companion_instance;
  }
  DateTime.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'DateTime',
    interfaces: [Comparable]
  };
  function OffsetDateTime(utc, offset, adjusted) {
    OffsetDateTime$Companion_getInstance();
    if (adjusted === void 0)
      adjusted = utc.addMinutes_14dthe$(offset);
    this.utc_omxz7c$_0 = utc;
    this.offset_vvyht7$_0 = offset;
    this.adjusted = adjusted;
    this.deltaTotalMinutesAbs_0 = abs(this.offset);
    this.timeZone_362zv3$_0 = format('GMT%s%02d%02d', [this.positive ? '+' : '-', this.deltaHoursAbs, this.deltaMinutesAbs]);
  }
  Object.defineProperty(OffsetDateTime.prototype, 'utc', {
    get: function () {
      return this.utc_omxz7c$_0;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'offset', {
    get: function () {
      return this.offset_vvyht7$_0;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'positive', {
    get: function () {
      return this.offset >= 0;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'deltaHoursAbs', {
    get: function () {
      return this.deltaTotalMinutesAbs_0 / 60 | 0;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'deltaMinutesAbs', {
    get: function () {
      return this.deltaTotalMinutesAbs_0 % 60;
    }
  });
  function OffsetDateTime$Companion() {
    OffsetDateTime$Companion_instance = this;
  }
  OffsetDateTime$Companion.prototype.invoke_yatgbp$ = function (utc, offset) {
    return new OffsetDateTime(utc.utc, offset);
  };
  OffsetDateTime$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var OffsetDateTime$Companion_instance = null;
  function OffsetDateTime$Companion_getInstance() {
    if (OffsetDateTime$Companion_instance === null) {
      new OffsetDateTime$Companion();
    }
    return OffsetDateTime$Companion_instance;
  }
  Object.defineProperty(OffsetDateTime.prototype, 'timeZone', {
    get: function () {
      return this.timeZone_362zv3$_0;
    }
  });
  OffsetDateTime.prototype.add_6svq3l$ = function (deltaMonths, deltaMilliseconds) {
    return OffsetDateTime$Companion_getInstance().invoke_yatgbp$(this.utc.add_6svq3l$(deltaMonths, deltaMilliseconds), this.offset);
  };
  OffsetDateTime.prototype.toString = function () {
    return SimplerDateFormat$Companion_getInstance().DEFAULT_FORMAT.format_mw5vjr$(this);
  };
  Object.defineProperty(OffsetDateTime.prototype, 'dayOfMonth', {
    get: function () {
      return this.adjusted.dayOfMonth;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'dayOfWeek', {
    get: function () {
      return this.adjusted.dayOfWeek;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'dayOfWeekInt', {
    get: function () {
      return this.adjusted.dayOfWeekInt;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'dayOfYear', {
    get: function () {
      return this.adjusted.dayOfYear;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'hours', {
    get: function () {
      return this.adjusted.hours;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'milliseconds', {
    get: function () {
      return this.adjusted.milliseconds;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'minutes', {
    get: function () {
      return this.adjusted.minutes;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'month', {
    get: function () {
      return this.adjusted.month;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'month0', {
    get: function () {
      return this.adjusted.month0;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'month1', {
    get: function () {
      return this.adjusted.month1;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'monthEnum', {
    get: function () {
      return this.adjusted.monthEnum;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'seconds', {
    get: function () {
      return this.adjusted.seconds;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'unix', {
    get: function () {
      return this.adjusted.unix;
    }
  });
  Object.defineProperty(OffsetDateTime.prototype, 'year', {
    get: function () {
      return this.adjusted.year;
    }
  });
  OffsetDateTime.prototype.addDays_14dthe$ = function (delta) {
    return this.adjusted.addDays_14dthe$(delta);
  };
  OffsetDateTime.prototype.addHours_14dthe$ = function (delta) {
    return this.adjusted.addHours_14dthe$(delta);
  };
  OffsetDateTime.prototype.addMilliseconds_14dthe$ = function (delta) {
    return this.adjusted.addMilliseconds_14dthe$(delta);
  };
  OffsetDateTime.prototype.addMilliseconds_s8cxhz$ = function (delta) {
    return this.adjusted.addMilliseconds_s8cxhz$(delta);
  };
  OffsetDateTime.prototype.addMinutes_14dthe$ = function (delta) {
    return this.adjusted.addMinutes_14dthe$(delta);
  };
  OffsetDateTime.prototype.addMonths_za3lpa$ = function (delta) {
    return this.adjusted.addMonths_za3lpa$(delta);
  };
  OffsetDateTime.prototype.addOffset_za3lpa$ = function (offset) {
    return this.adjusted.addOffset_za3lpa$(offset);
  };
  OffsetDateTime.prototype.addSeconds_14dthe$ = function (delta) {
    return this.adjusted.addSeconds_14dthe$(delta);
  };
  OffsetDateTime.prototype.addWeeks_14dthe$ = function (delta) {
    return this.adjusted.addWeeks_14dthe$(delta);
  };
  OffsetDateTime.prototype.addYears_za3lpa$ = function (delta) {
    return this.adjusted.addYears_za3lpa$(delta);
  };
  OffsetDateTime.prototype.compareTo_11rb$ = function (other) {
    return this.adjusted.compareTo_11rb$(other);
  };
  OffsetDateTime.prototype.equals = function (other) {
    return this.adjusted.equals(other);
  };
  OffsetDateTime.prototype.hashCode = function () {
    return this.adjusted.hashCode();
  };
  OffsetDateTime.prototype.minus_5t6mhc$ = function (delta) {
    return this.adjusted.minus_5t6mhc$(delta);
  };
  OffsetDateTime.prototype.minus_fv8bff$ = function (delta) {
    return this.adjusted.minus_fv8bff$(delta);
  };
  OffsetDateTime.prototype.plus_5t6mhc$ = function (delta) {
    return this.adjusted.plus_5t6mhc$(delta);
  };
  OffsetDateTime.prototype.plus_fv8bff$ = function (delta) {
    return this.adjusted.plus_fv8bff$(delta);
  };
  OffsetDateTime.prototype.toLocal = function () {
    return this.adjusted.toLocal();
  };
  OffsetDateTime.prototype.toOffset_za3lpa$ = function (offset) {
    return this.adjusted.toOffset_za3lpa$(offset);
  };
  OffsetDateTime.prototype.toString_2xh361$ = function (format) {
    return this.adjusted.toString_2xh361$(format);
  };
  OffsetDateTime.prototype.toString_61zpoe$ = function (format) {
    return this.adjusted.toString_61zpoe$(format);
  };
  OffsetDateTime.prototype.toUtc = function () {
    return this.adjusted.toUtc();
  };
  OffsetDateTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'OffsetDateTime',
    interfaces: [DateTime]
  };
  function UtcDateTime(internalMillis, dummy) {
    UtcDateTime$Companion_getInstance();
    this.internalMillis_8be2vx$ = internalMillis;
    this.offset_rmcc3u$_0 = 0;
    this.utc_14qx0z$_0 = this;
  }
  function UtcDateTime$Companion() {
    UtcDateTime$Companion_instance = this;
    this.DATE_PART_YEAR_0 = 0;
    this.DATE_PART_DAY_OF_YEAR_0 = 1;
    this.DATE_PART_MONTH_0 = 2;
    this.DATE_PART_DAY_0 = 3;
  }
  UtcDateTime$Companion.prototype.dateToMillisUnchecked_cub51b$ = function (year, month, day) {
    var y = year - 1 | 0;
    Month$Companion_getInstance().daysToStart_vux9f0$(month, year);
    var n = (y * 365 | 0) + (y / 4 | 0) - (y / 100 | 0) + (y / 400 | 0) + Month$Companion_getInstance().daysToStart_vux9f0$(month, year) + day - 1 | 0;
    return Kotlin.Long.fromInt(n).multiply(L86400000);
  };
  UtcDateTime$Companion.prototype.timeToMillisUnchecked_cub51b$ = function (hour, minute, second) {
    return Kotlin.Long.fromInt(hour).multiply(Kotlin.Long.fromInt(3600)).add(Kotlin.Long.fromInt(minute).multiply(Kotlin.Long.fromInt(60))).add(Kotlin.Long.fromInt(second)).multiply(Kotlin.Long.fromInt(1000));
  };
  UtcDateTime$Companion.prototype.dateToMillis_cub51b$ = function (year, month, day) {
    var tmp$;
    Month$Companion_getInstance().check_za3lpa$(month);
    tmp$ = Month$Companion_getInstance().days_vux9f0$(month, year);
    if (!(1 <= day && day <= tmp$))
      throw new DateException('Day ' + day + ' not valid for year=' + year + ' and month=' + month);
    return this.dateToMillisUnchecked_cub51b$(year, month, day);
  };
  UtcDateTime$Companion.prototype.timeToMillis_cub51b$ = function (hour, minute, second) {
    if (!(0 <= hour && hour <= 23))
      throw new DateException('Hour ' + hour + ' not in 0..23');
    if (!(0 <= minute && minute <= 59))
      throw new DateException('Minute ' + minute + ' not in 0..59');
    if (!(0 <= second && second <= 59))
      throw new DateException('Second ' + second + ' not in 0..59');
    return this.timeToMillisUnchecked_cub51b$(hour, minute, second);
  };
  UtcDateTime$Companion.prototype.getDatePart_plstum$ = function (millis, part) {
    var n = millis.div(Kotlin.Long.fromInt(86400000)).toInt();
    var y400 = n / 146097 | 0;
    n = n - (y400 * 146097 | 0) | 0;
    var y100 = n / 36524 | 0;
    if (y100 === 4)
      y100 = 3;
    n = n - (y100 * 36524 | 0) | 0;
    var y4 = n / 1461 | 0;
    n = n - (y4 * 1461 | 0) | 0;
    var y1 = n / 365 | 0;
    if (y1 === 4)
      y1 = 3;
    if (part === 0)
      return (y400 * 400 | 0) + (y100 * 100 | 0) + (y4 * 4 | 0) + y1 + 1 | 0;
    n = n - (y1 * 365 | 0) | 0;
    if (part === 1)
      return n + 1 | 0;
    var leapYear = y1 === 3 && (y4 !== 24 || y100 === 3);
    var m = n >> 6;
    while (n >= Month$Companion_getInstance().daysToEnd_fzusl$(m, leapYear)) {
      m = m + 1 | 0;
    }
    return part === 2 ? m : n - Month$Companion_getInstance().daysToStart_fzusl$(m, leapYear) + 1 | 0;
  };
  UtcDateTime$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var UtcDateTime$Companion_instance = null;
  function UtcDateTime$Companion_getInstance() {
    if (UtcDateTime$Companion_instance === null) {
      new UtcDateTime$Companion();
    }
    return UtcDateTime$Companion_instance;
  }
  UtcDateTime.prototype.getDatePart_0 = function (part) {
    return UtcDateTime$Companion_getInstance().getDatePart_plstum$(this.internalMillis_8be2vx$, part);
  };
  Object.defineProperty(UtcDateTime.prototype, 'offset', {
    get: function () {
      return this.offset_rmcc3u$_0;
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'utc', {
    get: function () {
      return this.utc_14qx0z$_0;
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'unix', {
    get: function () {
      return this.internalMillis_8be2vx$.subtract(DateTime$Companion_getInstance().EPOCH.internalMillis_8be2vx$);
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'year', {
    get: function () {
      return this.getDatePart_0(0);
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'month', {
    get: function () {
      return this.getDatePart_0(2);
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'dayOfMonth', {
    get: function () {
      return this.getDatePart_0(3);
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'dayOfWeekInt', {
    get: function () {
      return this.internalMillis_8be2vx$.div(Kotlin.Long.fromInt(86400000)).add(Kotlin.Long.fromInt(1)).modulo(Kotlin.Long.fromInt(7)).toInt();
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'dayOfYear', {
    get: function () {
      return this.getDatePart_0(1);
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'hours', {
    get: function () {
      return this.internalMillis_8be2vx$.div(Kotlin.Long.fromInt(3600000)).modulo(Kotlin.Long.fromInt(24)).toInt();
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'minutes', {
    get: function () {
      return this.internalMillis_8be2vx$.div(Kotlin.Long.fromInt(60000)).modulo(Kotlin.Long.fromInt(60)).toInt();
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'seconds', {
    get: function () {
      return this.internalMillis_8be2vx$.div(Kotlin.Long.fromInt(1000)).modulo(Kotlin.Long.fromInt(60)).toInt();
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'milliseconds', {
    get: function () {
      return this.internalMillis_8be2vx$.modulo(Kotlin.Long.fromInt(1000)).toInt();
    }
  });
  Object.defineProperty(UtcDateTime.prototype, 'timeZone', {
    get: function () {
      return 'UTC';
    }
  });
  UtcDateTime.prototype.add_6svq3l$ = function (deltaMonths, deltaMilliseconds) {
    if (deltaMonths === 0 && equals(deltaMilliseconds, L0))
      return this;
    else if (deltaMonths === 0)
      return new UtcDateTime(this.internalMillis_8be2vx$.add(deltaMilliseconds), true);
    else {
      var year = this.year;
      var month = this.month;
      var day = this.dayOfMonth;
      var i = month - 1 + deltaMonths | 0;
      if (i >= 0) {
        month = i % 12 + 1 | 0;
        year = year + (i / 12 | 0) | 0;
      }
       else {
        month = 12 + (i + 1 | 0) % 12 | 0;
        year = year + ((i - 11 | 0) / 12 | 0) | 0;
      }
      var days = Month$Companion_getInstance().days_vux9f0$(month, year);
      if (day > days)
        day = days;
      return new UtcDateTime(UtcDateTime$Companion_getInstance().dateToMillisUnchecked_cub51b$(year, month, day).add(this.internalMillis_8be2vx$.modulo(Kotlin.Long.fromInt(86400000))).add(deltaMilliseconds), true);
    }
  };
  UtcDateTime.prototype.compareTo_11rb$ = function (other) {
    return this.unix.compareTo_11rb$(other.unix);
  };
  UtcDateTime.prototype.hashCode = function () {
    return hashCode(this.internalMillis_8be2vx$);
  };
  UtcDateTime.prototype.equals = function (other) {
    var tmp$, tmp$_0;
    return equals(this.unix, (tmp$_0 = (tmp$ = other) == null || Kotlin.isType(tmp$, DateTime) ? tmp$ : null) != null ? tmp$_0.unix : null);
  };
  UtcDateTime.prototype.toString = function () {
    return SimplerDateFormat$Companion_getInstance().DEFAULT_FORMAT.format_mw5vjr$(this);
  };
  UtcDateTime.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'UtcDateTime',
    interfaces: [DateTime]
  };
  function TimeDistance(years, months, days, hours, minutes, seconds, milliseconds) {
    if (years === void 0)
      years = 0;
    if (months === void 0)
      months = 0;
    if (days === void 0)
      days = 0.0;
    if (hours === void 0)
      hours = 0.0;
    if (minutes === void 0)
      minutes = 0.0;
    if (seconds === void 0)
      seconds = 0.0;
    if (milliseconds === void 0)
      milliseconds = 0.0;
    this.years = years;
    this.months = months;
    this.days = days;
    this.hours = hours;
    this.minutes = minutes;
    this.seconds = seconds;
    this.milliseconds = milliseconds;
    this.totalMilliseconds_hyfowy$_0 = lazy(TimeDistance$totalMilliseconds$lambda(this));
  }
  TimeDistance.prototype.unaryMinus = function () {
    return new TimeDistance(-this.years | 0, -this.months | 0, -this.days, -this.hours, -this.minutes, -this.seconds, -this.milliseconds);
  };
  TimeDistance.prototype.minus_5t6mhc$ = function (other) {
    return this.plus_5t6mhc$(other.unaryMinus());
  };
  TimeDistance.prototype.plus_5t6mhc$ = function (other) {
    return new TimeDistance(this.years + other.years | 0, this.months + other.months | 0, this.days + other.days, this.hours + other.hours, this.minutes + other.minutes, this.seconds + other.seconds, this.milliseconds + other.milliseconds);
  };
  TimeDistance.prototype.times_3p81yu$ = defineInlineFunction('klock-js.com.soywiz.klock.TimeDistance.times_3p81yu$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    return function (times) {
      return this.times_14dthe$(numberToDouble(times));
    };
  }));
  TimeDistance.prototype.times_14dthe$ = function (times) {
    return new TimeDistance(numberToInt(this.years * times), numberToInt(this.months * times), this.days * times, this.hours * times, this.minutes * times, this.seconds * times, this.milliseconds * times);
  };
  Object.defineProperty(TimeDistance.prototype, 'totalMonths', {
    get: function () {
      return (this.years * 12 | 0) + this.months | 0;
    }
  });
  Object.defineProperty(TimeDistance.prototype, 'totalMilliseconds', {
    get: function () {
      return this.totalMilliseconds_hyfowy$_0.value;
    }
  });
  TimeDistance.prototype.compareTo_11rb$ = function (other) {
    if (this.totalMonths !== other.totalMonths)
      return Kotlin.primitiveCompareTo(this.totalMonths, other.totalMonths);
    return this.totalMilliseconds.compareTo_11rb$(other.totalMilliseconds);
  };
  function TimeDistance$totalMilliseconds$lambda(this$TimeDistance) {
    return function () {
      return Kotlin.Long.fromNumber(this$TimeDistance.days * 86400000 + this$TimeDistance.hours * 3600000 + this$TimeDistance.minutes * 60000 + this$TimeDistance.seconds * 1000 + this$TimeDistance.milliseconds);
    };
  }
  TimeDistance.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeDistance',
    interfaces: [Comparable]
  };
  TimeDistance.prototype.component1 = function () {
    return this.years;
  };
  TimeDistance.prototype.component2 = function () {
    return this.months;
  };
  TimeDistance.prototype.component3 = function () {
    return this.days;
  };
  TimeDistance.prototype.component4 = function () {
    return this.hours;
  };
  TimeDistance.prototype.component5 = function () {
    return this.minutes;
  };
  TimeDistance.prototype.component6 = function () {
    return this.seconds;
  };
  TimeDistance.prototype.component7 = function () {
    return this.milliseconds;
  };
  TimeDistance.prototype.copy_hw4um2$ = function (years, months, days, hours, minutes, seconds, milliseconds) {
    return new TimeDistance(years === void 0 ? this.years : years, months === void 0 ? this.months : months, days === void 0 ? this.days : days, hours === void 0 ? this.hours : hours, minutes === void 0 ? this.minutes : minutes, seconds === void 0 ? this.seconds : seconds, milliseconds === void 0 ? this.milliseconds : milliseconds);
  };
  TimeDistance.prototype.toString = function () {
    return 'TimeDistance(years=' + Kotlin.toString(this.years) + (', months=' + Kotlin.toString(this.months)) + (', days=' + Kotlin.toString(this.days)) + (', hours=' + Kotlin.toString(this.hours)) + (', minutes=' + Kotlin.toString(this.minutes)) + (', seconds=' + Kotlin.toString(this.seconds)) + (', milliseconds=' + Kotlin.toString(this.milliseconds)) + ')';
  };
  TimeDistance.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.years) | 0;
    result = result * 31 + Kotlin.hashCode(this.months) | 0;
    result = result * 31 + Kotlin.hashCode(this.days) | 0;
    result = result * 31 + Kotlin.hashCode(this.hours) | 0;
    result = result * 31 + Kotlin.hashCode(this.minutes) | 0;
    result = result * 31 + Kotlin.hashCode(this.seconds) | 0;
    result = result * 31 + Kotlin.hashCode(this.milliseconds) | 0;
    return result;
  };
  TimeDistance.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.years, other.years) && Kotlin.equals(this.months, other.months) && Kotlin.equals(this.days, other.days) && Kotlin.equals(this.hours, other.hours) && Kotlin.equals(this.minutes, other.minutes) && Kotlin.equals(this.seconds, other.seconds) && Kotlin.equals(this.milliseconds, other.milliseconds)))));
  };
  var get_years = defineInlineFunction('klock-js.com.soywiz.klock.get_years_s8ev3n$', wrapFunction(function () {
    var TimeDistance_init = _.com.soywiz.klock.TimeDistance;
    return function ($receiver) {
      return new TimeDistance_init($receiver);
    };
  }));
  var get_months = defineInlineFunction('klock-js.com.soywiz.klock.get_months_s8ev3n$', wrapFunction(function () {
    var TimeDistance_init = _.com.soywiz.klock.TimeDistance;
    return function ($receiver) {
      return new TimeDistance_init(void 0, $receiver);
    };
  }));
  var get_days = defineInlineFunction('klock-js.com.soywiz.klock.get_days_rcaex3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var TimeDistance_init = _.com.soywiz.klock.TimeDistance;
    return function ($receiver) {
      return new TimeDistance_init(void 0, void 0, numberToDouble($receiver));
    };
  }));
  var get_weeks = defineInlineFunction('klock-js.com.soywiz.klock.get_weeks_rcaex3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var TimeDistance_init = _.com.soywiz.klock.TimeDistance;
    return function ($receiver) {
      return new TimeDistance_init(void 0, void 0, numberToDouble($receiver) * 7);
    };
  }));
  var get_hours = defineInlineFunction('klock-js.com.soywiz.klock.get_hours_rcaex3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var TimeDistance_init = _.com.soywiz.klock.TimeDistance;
    return function ($receiver) {
      return new TimeDistance_init(void 0, void 0, void 0, numberToDouble($receiver));
    };
  }));
  var get_minutes = defineInlineFunction('klock-js.com.soywiz.klock.get_minutes_rcaex3$', wrapFunction(function () {
    var numberToDouble = Kotlin.numberToDouble;
    var TimeDistance_init = _.com.soywiz.klock.TimeDistance;
    return function ($receiver) {
      return new TimeDistance_init(void 0, void 0, void 0, void 0, numberToDouble($receiver));
    };
  }));
  function TimeSpan(ms) {
    TimeSpan$Companion_getInstance();
    this.ms = ms;
  }
  Object.defineProperty(TimeSpan.prototype, 'milliseconds', {
    get: function () {
      return this.ms;
    }
  });
  Object.defineProperty(TimeSpan.prototype, 'seconds', {
    get: function () {
      return this.ms / 1000.0;
    }
  });
  function TimeSpan$Companion() {
    TimeSpan$Companion_instance = this;
    this.ZERO = new TimeSpan(0);
    this.timeSteps_0 = listOf([60, 60, 24]);
  }
  TimeSpan$Companion.prototype.fromMilliseconds_za3lpa$ = function (ms) {
    if (ms === 0)
      return this.ZERO;
    else
      return new TimeSpan(ms);
  };
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  TimeSpan$Companion.prototype.toTimeStringRaw_0 = function (totalMilliseconds, components) {
    if (components === void 0)
      components = 3;
    var tmp$;
    var timeUnit = totalMilliseconds / 1000 | 0;
    var out = ArrayList_init();
    for (var n = 0; n < components; n++) {
      if (n === (components - 1 | 0)) {
        var element = format('%02d', [timeUnit]);
        out.add_11rb$(element);
        break;
      }
      tmp$ = getOrNull(this.timeSteps_0, n);
      if (tmp$ == null) {
        throw RuntimeException_init('Just supported ' + this.timeSteps_0.size + ' steps');
      }
      var step = tmp$;
      var cunit = timeUnit % step;
      timeUnit = timeUnit / step | 0;
      var element_0 = format('%02d', [cunit]);
      out.add_11rb$(element_0);
    }
    return joinToString(reversed(out), ':');
  };
  TimeSpan$Companion.prototype.toTimeString_ydzd23$ = function (totalMilliseconds, components, addMilliseconds) {
    if (components === void 0)
      components = 3;
    if (addMilliseconds === void 0)
      addMilliseconds = false;
    var milliseconds = totalMilliseconds % 1000;
    var out = this.toTimeStringRaw_0(totalMilliseconds, components);
    return addMilliseconds ? out + '.' + milliseconds : out;
  };
  TimeSpan$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeSpan$Companion_instance = null;
  function TimeSpan$Companion_getInstance() {
    if (TimeSpan$Companion_instance === null) {
      new TimeSpan$Companion();
    }
    return TimeSpan$Companion_instance;
  }
  TimeSpan.prototype.compareTo_11rb$ = function (other) {
    return Kotlin.primitiveCompareTo(this.ms, other.ms);
  };
  TimeSpan.prototype.plus_fv8bff$ = function (other) {
    return new TimeSpan(this.ms + other.ms | 0);
  };
  TimeSpan.prototype.minus_fv8bff$ = function (other) {
    return new TimeSpan(this.ms - other.ms | 0);
  };
  TimeSpan.prototype.times_za3lpa$ = function (scale) {
    return new TimeSpan(Kotlin.imul(this.ms, scale));
  };
  TimeSpan.prototype.times_14dthe$ = function (scale) {
    return new TimeSpan(numberToInt(this.ms * scale));
  };
  TimeSpan.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeSpan',
    interfaces: [Comparable]
  };
  function toTimeString($receiver, components, addMilliseconds) {
    if (components === void 0)
      components = 3;
    if (addMilliseconds === void 0)
      addMilliseconds = false;
    return TimeSpan$Companion_getInstance().toTimeString_ydzd23$($receiver.milliseconds, components, addMilliseconds);
  }
  var get_milliseconds = defineInlineFunction('klock-js.com.soywiz.klock.get_milliseconds_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt($receiver));
    };
  }));
  var get_seconds = defineInlineFunction('klock-js.com.soywiz.klock.get_seconds_rcaex3$', wrapFunction(function () {
    var TimeSpan = _.com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    return function ($receiver) {
      return TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble($receiver) * 1000.0));
    };
  }));
  var StringBuilder_init = Kotlin.kotlin.text.StringBuilder_init_za3lpa$;
  function SimplerDateFormat(format) {
    SimplerDateFormat$Companion_getInstance();
    this.format = format;
    this.parts_0 = ArrayList_init();
    this.escapedFormat_0 = Regex.Companion.escapeReplacement_61zpoe$(this.format);
    var $receiver = this.escapedFormat_0;
    var regex = SimplerDateFormat$Companion_getInstance().rx_0;
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = regex.find_905azu$($receiver);
      if (match == null) {
        replace_20wsma$result = $receiver.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = $receiver.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
        var tmp$ = sb.append_gw00v9$;
        var transform$result;
        var v = foundMatch.groupValues.get_za3lpa$(0);
        this.parts_0.add_11rb$(v);
        if (startsWith(v, "'")) {
          transform$result = '(' + Regex.Companion.escapeReplacement_61zpoe$(trim(v, Kotlin.charArrayOf(39))) + ')';
        }
         else {
          transform$result = '([\\w\\+\\-]+)';
        }
        tmp$.call(sb, transform$result);
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$($receiver, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    this.rx2_0 = Regex_init('^' + replace_20wsma$result + '$');
    this.parts2_0 = splitKeep(this.escapedFormat_0, SimplerDateFormat$Companion_getInstance().rx_0);
  }
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  var ArrayList_init_0 = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function SimplerDateFormat$Companion() {
    SimplerDateFormat$Companion_instance = this;
    this.rx_0 = Regex_init("('[\\w]+'|[\\w]+)");
    this.englishDaysOfWeek_0 = listOf(['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']);
    this.englishMonths_0 = listOf(['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august', 'september', 'october', 'november', 'december']);
    var $receiver = this.englishMonths_0;
    var destination = ArrayList_init_0(collectionSizeOrDefault($receiver, 10));
    var tmp$;
    tmp$ = $receiver.iterator();
    while (tmp$.hasNext()) {
      var item = tmp$.next();
      destination.add_11rb$(substr_0(item, 0, 3));
    }
    this.englishMonths3_0 = destination;
    this.DEFAULT_FORMAT_tm2gek$_0 = lazy(SimplerDateFormat$Companion$DEFAULT_FORMAT$lambda);
    this.FORMAT1_nnjo7b$_0 = lazy(SimplerDateFormat$Companion$FORMAT1$lambda);
    this.FORMATS = listOf([this.DEFAULT_FORMAT, this.FORMAT1]);
  }
  Object.defineProperty(SimplerDateFormat$Companion.prototype, 'DEFAULT_FORMAT', {
    get: function () {
      return this.DEFAULT_FORMAT_tm2gek$_0.value;
    }
  });
  Object.defineProperty(SimplerDateFormat$Companion.prototype, 'FORMAT1', {
    get: function () {
      return this.FORMAT1_nnjo7b$_0.value;
    }
  });
  SimplerDateFormat$Companion.prototype.parse_61zpoe$ = function (str) {
    var tmp$;
    var lastError = null;
    tmp$ = this.FORMATS.iterator();
    while (tmp$.hasNext()) {
      var format = tmp$.next();
      try {
        return format.parseDate_61zpoe$(str);
      }
       catch (e) {
        if (Kotlin.isType(e, Throwable)) {
          lastError = e;
        }
         else
          throw e;
      }
    }
    throw ensureNotNull(lastError);
  };
  function SimplerDateFormat$Companion$DEFAULT_FORMAT$lambda() {
    return new SimplerDateFormat('EEE, dd MMM yyyy HH:mm:ss z');
  }
  function SimplerDateFormat$Companion$FORMAT1$lambda() {
    return new SimplerDateFormat("yyyy-MM-dd'T'HH:mm:ss'Z'");
  }
  SimplerDateFormat$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var SimplerDateFormat$Companion_instance = null;
  function SimplerDateFormat$Companion_getInstance() {
    if (SimplerDateFormat$Companion_instance === null) {
      new SimplerDateFormat$Companion();
    }
    return SimplerDateFormat$Companion_instance;
  }
  SimplerDateFormat.prototype.format_s8cxhz$ = function (date) {
    return this.format_mw5vjr$(DateTime$Companion_getInstance().fromUnix_s8cxhz$(date));
  };
  SimplerDateFormat.prototype.format_mw5vjr$ = function (dd) {
    var tmp$, tmp$_0, tmp$_1;
    var out = '';
    tmp$ = this.parts2_0.iterator();
    while (tmp$.hasNext()) {
      var name2 = tmp$.next();
      var name = trim(name2, Kotlin.charArrayOf(39));
      tmp$_1 = out;
      switch (name) {
        case 'EEE':
          tmp$_0 = capitalize(substr_0(SimplerDateFormat$Companion_getInstance().englishDaysOfWeek_0.get_za3lpa$(dd.dayOfWeek.index), 0, 3));
          break;
        case 'z':
        case 'zzz':
          tmp$_0 = dd.timeZone;
          break;
        case 'd':
          tmp$_0 = format('%d', [dd.dayOfMonth]);
          break;
        case 'dd':
          tmp$_0 = format('%02d', [dd.dayOfMonth]);
          break;
        case 'MM':
          tmp$_0 = format('%02d', [dd.month1]);
          break;
        case 'MMM':
          tmp$_0 = capitalize(substr_0(SimplerDateFormat$Companion_getInstance().englishMonths_0.get_za3lpa$(dd.month0), 0, 3));
          break;
        case 'yyyy':
          tmp$_0 = format('%04d', [dd.year]);
          break;
        case 'YYYY':
          tmp$_0 = format('%04d', [dd.year]);
          break;
        case 'HH':
          tmp$_0 = format('%02d', [dd.hours]);
          break;
        case 'mm':
          tmp$_0 = format('%02d', [dd.minutes]);
          break;
        case 'ss':
          tmp$_0 = format('%02d', [dd.seconds]);
          break;
        default:tmp$_0 = name;
          break;
      }
      out = tmp$_1 + tmp$_0;
    }
    return out;
  };
  SimplerDateFormat.prototype.parse_61zpoe$ = function (str) {
    return this.parseDate_61zpoe$(str).unix;
  };
  SimplerDateFormat.prototype.parseOrNull_pdl1vj$ = function (str) {
    try {
      return str != null ? this.parse_61zpoe$(str) : null;
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        return null;
      }
       else
        throw e;
    }
  };
  SimplerDateFormat.prototype.parseDate_61zpoe$ = function (str) {
    var tmp$;
    tmp$ = this.tryParseDate_61zpoe$(str);
    if (tmp$ == null) {
      throw RuntimeException_init("Not a valid format: '" + str + "' for '" + this.format + "'");
    }
    return tmp$;
  };
  SimplerDateFormat.prototype.tryParseDate_61zpoe$ = function (str) {
    var tmp$, tmp$_0;
    var second = 0;
    var minute = 0;
    var hour = 0;
    var day = 1;
    var month = 1;
    var fullYear = 1970;
    tmp$ = this.rx2_0.find_905azu$(str);
    if (tmp$ == null) {
      return null;
    }
    var result = tmp$;
    tmp$_0 = zip(this.parts_0, drop(result.groupValues, 1)).iterator();
    while (tmp$_0.hasNext()) {
      var tmp$_1 = tmp$_0.next();
      var name = tmp$_1.component1()
      , value = tmp$_1.component2();
      switch (name) {
        case 'EEE':
          break;
        case 'z':
        case 'zzz':
          break;
        case 'd':
        case 'dd':
          day = toInt(value);
          break;
        case 'MM':
          month = toInt(value);
          break;
        case 'MMM':
          month = SimplerDateFormat$Companion_getInstance().englishMonths3_0.indexOf_11rb$(value.toLowerCase()) + 1 | 0;
          break;
        case 'yyyy':
        case 'YYYY':
          fullYear = toInt(value);
          break;
        case 'HH':
          hour = toInt(value);
          break;
        case 'mm':
          minute = toInt(value);
          break;
        case 'ss':
          second = toInt(value);
          break;
        default:break;
      }
    }
    return DateTime$Companion_getInstance().createAdjusted_ui44o2$(fullYear, month, day, hour, minute, second);
  };
  SimplerDateFormat.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SimplerDateFormat',
    interfaces: []
  };
  var formatRegex;
  function format($receiver, params) {
    var paramIndex = {v: 0};
    var $this = formatRegex;
    var replace_20wsma$result;
    replace_20wsma$break: do {
      var match = $this.find_905azu$($receiver);
      if (match == null) {
        replace_20wsma$result = $receiver.toString();
        break replace_20wsma$break;
      }
      var lastStart = 0;
      var length = $receiver.length;
      var sb = StringBuilder_init(length);
      do {
        var foundMatch = ensureNotNull(match);
        sb.append_ezbsdh$($receiver, lastStart, foundMatch.range.start);
        var tmp$ = sb.append_gw00v9$;
        var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
        var param = params[tmp$_0 = paramIndex.v, paramIndex.v = tmp$_0 + 1 | 0, tmp$_0];
        var size = foundMatch.groupValues.get_za3lpa$(1);
        var type = foundMatch.groupValues.get_za3lpa$(2);
        switch (type) {
          case 'd':
            tmp$_4 = numberToLong(Kotlin.isNumber(tmp$_1 = param) ? tmp$_1 : throwCCE()).toString();
            break;
          case 'X':
            tmp$_4 = toString(numberToLong(Kotlin.isNumber(tmp$_2 = param) ? tmp$_2 : throwCCE()), 16).toUpperCase();
            break;
          case 'x':
            tmp$_4 = toString(numberToLong(Kotlin.isNumber(tmp$_3 = param) ? tmp$_3 : throwCCE()), 16).toLowerCase();
            break;
          default:tmp$_4 = param.toString();
            break;
        }
        var str = tmp$_4;
        var prefix = startsWith_0(size, 48) ? 48 : 32;
        var asize = toIntOrNull(size);
        var str2 = str;
        if (asize != null) {
          while (str2.length < asize) {
            var other = str2;
            str2 = String.fromCharCode(prefix) + other;
          }
        }
        tmp$.call(sb, str2);
        lastStart = foundMatch.range.endInclusive + 1 | 0;
        match = foundMatch.next();
      }
       while (lastStart < length && match != null);
      if (lastStart < length) {
        sb.append_ezbsdh$($receiver, lastStart, length);
      }
      replace_20wsma$result = sb.toString();
    }
     while (false);
    return replace_20wsma$result;
  }
  var DIGITS_UPPER;
  var reversed_0 = Kotlin.kotlin.text.reversed_gw00vp$;
  function toString($receiver, radix) {
    var isNegative = $receiver.toNumber() < 0;
    var temp = abs_0($receiver);
    if (equals(temp, L0)) {
      return '0';
    }
     else {
      var out = '';
      while (!equals(temp, L0)) {
        var digit = temp.modulo(Kotlin.Long.fromInt(radix));
        temp = temp.div(Kotlin.Long.fromInt(radix));
        out += String.fromCharCode(DIGITS_UPPER.charCodeAt(digit.toInt()));
      }
      var tmp$;
      var rout = reversed_0(Kotlin.isCharSequence(tmp$ = out) ? tmp$ : throwCCE()).toString();
      return isNegative ? '-' + rout : rout;
    }
  }
  function substr($receiver, start) {
    return substr_0($receiver, start, $receiver.length);
  }
  function substr_0($receiver, start, length) {
    var low = clamp(start >= 0 ? start : $receiver.length + start | 0, 0, $receiver.length);
    var high = clamp(length >= 0 ? low + length | 0 : $receiver.length + length | 0, 0, $receiver.length);
    if (high < low) {
      return '';
    }
     else {
      return $receiver.substring(low, high);
    }
  }
  function clamp($receiver, min, max) {
    return $receiver < min ? min : $receiver > max ? max : $receiver;
  }
  function cycle($receiver, min, max) {
    return umod($receiver - min | 0, max - min + 1 | 0) + min | 0;
  }
  function cycleSteps($receiver, min, max) {
    return ($receiver - min | 0) / (max - min + 1 | 0) | 0;
  }
  function splitKeep($receiver, regex) {
    var tmp$;
    var str = $receiver;
    var out = ArrayList_init();
    var lastPos = 0;
    tmp$ = regex.findAll_905azu$($receiver).iterator();
    while (tmp$.hasNext()) {
      var part = tmp$.next();
      var prange = part.range;
      if (lastPos !== prange.start) {
        var startIndex = lastPos;
        var endIndex = prange.start;
        var element = str.substring(startIndex, endIndex);
        out.add_11rb$(element);
      }
      var element_0 = substring(str, prange);
      out.add_11rb$(element_0);
      lastPos = prange.endInclusive + 1 | 0;
    }
    if (lastPos !== str.length) {
      var startIndex_0 = lastPos;
      var element_1 = str.substring(startIndex_0);
      out.add_11rb$(element_1);
    }
    return out;
  }
  function umod($receiver, that) {
    var tmp$;
    var remainder = $receiver % that;
    if (remainder < 0)
      tmp$ = remainder + that | 0;
    else
      tmp$ = remainder;
    return tmp$;
  }
  function TimeProvider() {
    TimeProvider$Companion_getInstance();
  }
  TimeProvider.prototype.currentTimeMillis = function () {
    return Klock_getInstance().currentTimeMillis();
  };
  function TimeProvider$Companion() {
    TimeProvider$Companion_instance = this;
  }
  TimeProvider$Companion.prototype.now = function () {
    return Klock_getInstance().currentTimeMillis();
  };
  function TimeProvider$Companion$invoke$ObjectLiteral(closure$callback) {
    this.closure$callback = closure$callback;
    TimeProvider.call(this);
  }
  TimeProvider$Companion$invoke$ObjectLiteral.prototype.currentTimeMillis = function () {
    return this.closure$callback();
  };
  TimeProvider$Companion$invoke$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [TimeProvider]
  };
  TimeProvider$Companion.prototype.invoke_nw7ga7$ = function (callback) {
    return new TimeProvider$Companion$invoke$ObjectLiteral(callback);
  };
  TimeProvider$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var TimeProvider$Companion_instance = null;
  function TimeProvider$Companion_getInstance() {
    if (TimeProvider$Companion_instance === null) {
      new TimeProvider$Companion();
    }
    return TimeProvider$Companion_instance;
  }
  TimeProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'TimeProvider',
    interfaces: []
  };
  function Klock() {
    Klock_instance = this;
  }
  Klock.prototype.currentTimeMillis = function () {
    return Kotlin.Long.fromNumber(Date.now());
  };
  Klock.prototype.currentTimeMillisDouble = function () {
    return Date.now();
  };
  Klock.prototype.getLocalTimezoneOffset_s8cxhz$ = function (unix) {
    var rtime = unix.toNumber();
    return -(new Date(rtime)).getTimezoneOffset();
  };
  var Math_0 = Math;
  Klock.prototype.microClock = function () {
    var x = window.performance.now() * 1000;
    return Math_0.floor(x);
  };
  Klock.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Klock',
    interfaces: []
  };
  var Klock_instance = null;
  function Klock_getInstance() {
    if (Klock_instance === null) {
      new Klock();
    }
    return Klock_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$klock = package$soywiz.klock || (package$soywiz.klock = {});
  $$importsForInline$$['klock-js'] = _;
  package$klock.measureTimeMs_o14v8n$ = measureTimeMs;
  package$klock.TimedResult = TimedResult;
  package$klock.get_milliseconds_rcaex3$ = get_milliseconds;
  package$klock.measureTime_9ce4rd$ = measureTime;
  Object.defineProperty(DayOfWeek, 'Sunday', {
    get: DayOfWeek$Sunday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Monday', {
    get: DayOfWeek$Monday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Tuesday', {
    get: DayOfWeek$Tuesday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Wednesday', {
    get: DayOfWeek$Wednesday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Thursday', {
    get: DayOfWeek$Thursday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Friday', {
    get: DayOfWeek$Friday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Saturday', {
    get: DayOfWeek$Saturday_getInstance
  });
  Object.defineProperty(DayOfWeek, 'Companion', {
    get: DayOfWeek$Companion_getInstance
  });
  package$klock.DayOfWeek = DayOfWeek;
  Object.defineProperty(Year, 'Companion', {
    get: Year$Companion_getInstance
  });
  package$klock.Year = Year;
  Object.defineProperty(Month, 'January', {
    get: Month$January_getInstance
  });
  Object.defineProperty(Month, 'February', {
    get: Month$February_getInstance
  });
  Object.defineProperty(Month, 'March', {
    get: Month$March_getInstance
  });
  Object.defineProperty(Month, 'April', {
    get: Month$April_getInstance
  });
  Object.defineProperty(Month, 'May', {
    get: Month$May_getInstance
  });
  Object.defineProperty(Month, 'June', {
    get: Month$June_getInstance
  });
  Object.defineProperty(Month, 'July', {
    get: Month$July_getInstance
  });
  Object.defineProperty(Month, 'August', {
    get: Month$August_getInstance
  });
  Object.defineProperty(Month, 'September', {
    get: Month$September_getInstance
  });
  Object.defineProperty(Month, 'October', {
    get: Month$October_getInstance
  });
  Object.defineProperty(Month, 'November', {
    get: Month$November_getInstance
  });
  Object.defineProperty(Month, 'December', {
    get: Month$December_getInstance
  });
  Object.defineProperty(Month, 'Companion', {
    get: Month$Companion_getInstance
  });
  package$klock.Month = Month;
  package$klock.DateException = DateException;
  Object.defineProperty(DateTime, 'Companion', {
    get: DateTime$Companion_getInstance
  });
  package$klock.DateTime = DateTime;
  Object.defineProperty(OffsetDateTime, 'Companion', {
    get: OffsetDateTime$Companion_getInstance
  });
  package$klock.OffsetDateTime = OffsetDateTime;
  Object.defineProperty(UtcDateTime, 'Companion', {
    get: UtcDateTime$Companion_getInstance
  });
  package$klock.UtcDateTime = UtcDateTime;
  package$klock.TimeDistance = TimeDistance;
  package$klock.get_years_s8ev3n$ = get_years;
  package$klock.get_months_s8ev3n$ = get_months;
  package$klock.get_days_rcaex3$ = get_days;
  package$klock.get_weeks_rcaex3$ = get_weeks;
  package$klock.get_hours_rcaex3$ = get_hours;
  package$klock.get_minutes_rcaex3$ = get_minutes;
  Object.defineProperty(TimeSpan, 'Companion', {
    get: TimeSpan$Companion_getInstance
  });
  package$klock.TimeSpan = TimeSpan;
  package$klock.toTimeString_l8uqez$ = toTimeString;
  package$klock.get_seconds_rcaex3$ = get_seconds;
  Object.defineProperty(SimplerDateFormat, 'Companion', {
    get: SimplerDateFormat$Companion_getInstance
  });
  package$klock.SimplerDateFormat = SimplerDateFormat;
  Object.defineProperty(TimeProvider, 'Companion', {
    get: TimeProvider$Companion_getInstance
  });
  package$klock.TimeProvider = TimeProvider;
  Object.defineProperty(package$klock, 'Klock', {
    get: Klock_getInstance
  });
  UtcDateTime.prototype.toString_61zpoe$ = DateTime.prototype.toString_61zpoe$;
  UtcDateTime.prototype.toString_2xh361$ = DateTime.prototype.toString_2xh361$;
  Object.defineProperty(UtcDateTime.prototype, 'dayOfWeek', Object.getOwnPropertyDescriptor(DateTime.prototype, 'dayOfWeek'));
  Object.defineProperty(UtcDateTime.prototype, 'month0', Object.getOwnPropertyDescriptor(DateTime.prototype, 'month0'));
  Object.defineProperty(UtcDateTime.prototype, 'month1', Object.getOwnPropertyDescriptor(DateTime.prototype, 'month1'));
  Object.defineProperty(UtcDateTime.prototype, 'monthEnum', Object.getOwnPropertyDescriptor(DateTime.prototype, 'monthEnum'));
  UtcDateTime.prototype.toUtc = DateTime.prototype.toUtc;
  UtcDateTime.prototype.toLocal = DateTime.prototype.toLocal;
  UtcDateTime.prototype.addOffset_za3lpa$ = DateTime.prototype.addOffset_za3lpa$;
  UtcDateTime.prototype.toOffset_za3lpa$ = DateTime.prototype.toOffset_za3lpa$;
  UtcDateTime.prototype.addYears_za3lpa$ = DateTime.prototype.addYears_za3lpa$;
  UtcDateTime.prototype.addMonths_za3lpa$ = DateTime.prototype.addMonths_za3lpa$;
  UtcDateTime.prototype.addDays_14dthe$ = DateTime.prototype.addDays_14dthe$;
  UtcDateTime.prototype.addWeeks_14dthe$ = DateTime.prototype.addWeeks_14dthe$;
  UtcDateTime.prototype.addHours_14dthe$ = DateTime.prototype.addHours_14dthe$;
  UtcDateTime.prototype.addMinutes_14dthe$ = DateTime.prototype.addMinutes_14dthe$;
  UtcDateTime.prototype.addSeconds_14dthe$ = DateTime.prototype.addSeconds_14dthe$;
  UtcDateTime.prototype.addMilliseconds_14dthe$ = DateTime.prototype.addMilliseconds_14dthe$;
  UtcDateTime.prototype.addMilliseconds_s8cxhz$ = DateTime.prototype.addMilliseconds_s8cxhz$;
  UtcDateTime.prototype.plus_5t6mhc$ = DateTime.prototype.plus_5t6mhc$;
  UtcDateTime.prototype.plus_fv8bff$ = DateTime.prototype.plus_fv8bff$;
  UtcDateTime.prototype.minus_5t6mhc$ = DateTime.prototype.minus_5t6mhc$;
  UtcDateTime.prototype.minus_fv8bff$ = DateTime.prototype.minus_fv8bff$;
  MILLIS_PER_SECOND = 1000;
  MILLIS_PER_MINUTE = 60000;
  MILLIS_PER_HOUR = 3600000;
  MILLIS_PER_DAY = 86400000;
  MILLIS_PER_WEEK = 604800000;
  DAYS_PER_YEAR = 365;
  DAYS_PER_4_YEARS = 1461;
  DAYS_PER_100_YEARS = 36524;
  DAYS_PER_400_YEARS = 146097;
  formatRegex = Regex_init('%([-]?\\d+)?(\\w)');
  DIGITS_UPPER = '0123456789ABCDEF';
  Kotlin.defineModule('klock-js', _);
  return _;
}));

//# sourceMappingURL=klock-js.js.map
