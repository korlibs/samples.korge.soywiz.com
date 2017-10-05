(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korio-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korio-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korau-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korau-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korau-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korau-js'.");
    }
    root['korau-js'] = factory(typeof this['korau-js'] === 'undefined' ? {} : this['korau-js'], kotlin, this['korio-js']);
  }
}(this, function (_, Kotlin, $module$korio_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var copyOf = Kotlin.kotlin.collections.copyOf_m2jy6x$;
  var copyRangeTo = $module$korio_js.com.soywiz.korio.typedarray.copyRangeTo_4axpaz$;
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var Extra = $module$korio_js.com.soywiz.korio.util.Extra;
  var Extra$Mixin = $module$korio_js.com.soywiz.korio.util.Extra.Mixin;
  var MemorySyncStream = $module$korio_js.com.soywiz.korio.stream.MemorySyncStream_fqrh44$;
  var toAsync = $module$korio_js.com.soywiz.korio.stream.toAsync_ucmi9i$;
  var toByteArray = $module$korio_js.com.soywiz.korio.stream.toByteArray_ucmi9i$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var Unit = Kotlin.kotlin.Unit;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var PathInfo = $module$korio_js.com.soywiz.korio.vfs.PathInfo;
  var UnsupportedOperationException = Kotlin.kotlin.UnsupportedOperationException;
  var LinkedList = $module$korio_js.com.soywiz.korio.ds.LinkedList;
  var VfsOpenMode = $module$korio_js.com.soywiz.korio.vfs.VfsOpenMode;
  var readStream = $module$korio_js.com.soywiz.korio.stream.readStream_50x9bh$;
  var readBytes = $module$korio_js.com.soywiz.korio.stream.readBytes_a0g59h$;
  var getu = $module$korio_js.com.soywiz.korio.util.getu_mrm5p$;
  var openSync = $module$korio_js.com.soywiz.korio.stream.openSync_m1iwyb$;
  var readString = $module$korio_js.com.soywiz.korio.stream.readString_6ey4ts$;
  var readString_0 = $module$korio_js.com.soywiz.korio.stream.readString_4xit9n$;
  var readU8 = $module$korio_js.com.soywiz.korio.stream.readU8_yjldv$;
  var extract = $module$korio_js.com.soywiz.korio.util.extract_dqglrj$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Enum = Kotlin.kotlin.Enum;
  var error = $module$korio_js.com.soywiz.korio.error;
  var extract_0 = $module$korio_js.com.soywiz.korio.util.extract_e4yvb3$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var format = $module$korio_js.com.soywiz.korio.lang.format_e33kwl$;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var hasAvailable = $module$korio_js.com.soywiz.korio.stream.hasAvailable_g5ykjz$;
  var readS8 = $module$korio_js.com.soywiz.korio.stream.readS8_yjldv$;
  var readS64_le = $module$korio_js.com.soywiz.korio.stream.readS64_le_yjldv$;
  var readS32_le = $module$korio_js.com.soywiz.korio.stream.readS32_le_yjldv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var FastByteArrayInputStream = $module$korio_js.com.soywiz.korio.stream.FastByteArrayInputStream;
  var writeString = $module$korio_js.com.soywiz.korio.stream.writeString_wczyte$;
  var write32_le = $module$korio_js.com.soywiz.korio.stream.write32_le_1j05bi$;
  var write16_le = $module$korio_js.com.soywiz.korio.stream.write16_le_1j05bi$;
  var writeShortArray_le = $module$korio_js.com.soywiz.korio.stream.writeShortArray_le_axfcu2$;
  var readS16_le = $module$korio_js.com.soywiz.korio.stream.readS16_le_yjldv$;
  var readU32_le = $module$korio_js.com.soywiz.korio.stream.readU32_le_yjldv$;
  var await_0 = $module$korio_js.com.soywiz.korio.async.await_7zc599$;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var AsyncDependency = $module$korio_js.com.soywiz.korio.inject.AsyncDependency;
  var LocalVfs = $module$korio_js.com.soywiz.korio.vfs.LocalVfs;
  var UrlVfs = $module$korio_js.com.soywiz.korio.vfs.UrlVfs;
  var VfsSpecialReader = $module$korio_js.com.soywiz.korio.vfs.VfsSpecialReader;
  AudioData$toStream$ObjectLiteral.prototype = Object.create(AudioStream.prototype);
  AudioData$toStream$ObjectLiteral.prototype.constructor = AudioData$toStream$ObjectLiteral;
  AudioFormats.prototype = Object.create(AudioFormat.prototype);
  AudioFormats.prototype.constructor = AudioFormats;
  AudioStream$Companion$generator$ObjectLiteral.prototype = Object.create(AudioStream.prototype);
  AudioStream$Companion$generator$ObjectLiteral.prototype.constructor = AudioStream$Companion$generator$ObjectLiteral;
  MP3Base.prototype = Object.create(AudioFormat.prototype);
  MP3Base.prototype.constructor = MP3Base;
  MP3.prototype = Object.create(MP3Base.prototype);
  MP3.prototype.constructor = MP3;
  MP3Base$Parser$Companion$ChannelMode.prototype = Object.create(Enum.prototype);
  MP3Base$Parser$Companion$ChannelMode.prototype.constructor = MP3Base$Parser$Companion$ChannelMode;
  OggBase.prototype = Object.create(AudioFormat.prototype);
  OggBase.prototype.constructor = OggBase;
  OGG.prototype = Object.create(OggBase.prototype);
  OGG.prototype.constructor = OGG;
  WAV$decodeStream$ObjectLiteral.prototype = Object.create(AudioStream.prototype);
  WAV$decodeStream$ObjectLiteral.prototype.constructor = WAV$decodeStream$ObjectLiteral;
  WAV.prototype = Object.create(AudioFormat.prototype);
  WAV.prototype.constructor = WAV;
  DummyNativeSoundProvider.prototype = Object.create(NativeSoundProvider.prototype);
  DummyNativeSoundProvider.prototype.constructor = DummyNativeSoundProvider;
  HtmlNativeSoundProvider.prototype = Object.create(NativeSoundProvider.prototype);
  HtmlNativeSoundProvider.prototype.constructor = HtmlNativeSoundProvider;
  HtmlNativeSound.prototype = Object.create(NativeSound.prototype);
  HtmlNativeSound.prototype.constructor = HtmlNativeSound;
  HtmlNativeSoundSpecialReader.prototype = Object.create(VfsSpecialReader.prototype);
  HtmlNativeSoundSpecialReader.prototype.constructor = HtmlNativeSoundSpecialReader;
  function AudioBuffer() {
    this.buffer = new Int16Array(0);
    this.bufferlen = 0;
  }
  AudioBuffer.prototype.ensure_za3lpa$ = function (len) {
    if ((this.bufferlen + len | 0) > this.buffer.length) {
      this.buffer = copyOf(this.buffer, (this.bufferlen + len | 0) * 2 | 0);
    }
  };
  AudioBuffer.prototype.write_359eei$ = function (data, offset, len) {
    if (len <= 0)
      return;
    this.ensure_za3lpa$(len);
    copyRangeTo(data, offset, this.buffer, this.bufferlen, len);
    this.bufferlen = this.bufferlen + len | 0;
  };
  AudioBuffer.prototype.toShortArray = function () {
    return copyOf(this.buffer, this.bufferlen);
  };
  AudioBuffer.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AudioBuffer',
    interfaces: []
  };
  function AudioData(rate, channels, samples) {
    this.rate = rate;
    this.channels = channels;
    this.samples = samples;
  }
  Object.defineProperty(AudioData.prototype, 'seconds', {
    get: function () {
      return (this.samples.length / this.channels | 0) / this.rate;
    }
  });
  var NotImplementedError_init = Kotlin.kotlin.NotImplementedError;
  AudioData.prototype.convertTo_vux9f0$ = function (rate, channels) {
    if (rate === void 0)
      rate = 44100;
    if (channels === void 0)
      channels = 2;
    throw new NotImplementedError_init();
  };
  function AudioData$toStream$ObjectLiteral(this$AudioData, rate, channels) {
    this.this$AudioData = this$AudioData;
    AudioStream.call(this, rate, channels);
    this.cursor = 0;
  }
  var Math_0 = Math;
  AudioData$toStream$ObjectLiteral.prototype.read_359eei$ = function (out, offset, length, continuation) {
    var available = this.this$AudioData.samples.length - this.cursor | 0;
    var toread = Math_0.min(available, length);
    if (toread > 0)
      copyRangeTo(this.this$AudioData.samples, this.cursor, out, offset, toread);
    return toread;
  };
  AudioData$toStream$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [AudioStream]
  };
  AudioData.prototype.toStream = function () {
    return new AudioData$toStream$ObjectLiteral(this, this.rate, this.channels);
  };
  AudioData.prototype.toString = function () {
    return 'AudioData(rate=' + this.rate + ', channels=' + this.channels + ', samples=' + this.samples.length + ')';
  };
  AudioData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AudioData',
    interfaces: []
  };
  function toNativeSound($receiver, continuation) {
    return get_nativeSoundProvider().createSound_35xt9g$($receiver, void 0, continuation);
  }
  function play($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$play($receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$play($receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$play.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$play.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$play.prototype.constructor = Coroutine$play;
  Coroutine$play.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = toNativeSound(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.result_0.play(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0;
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
  function readAudioData$lambda(closure$formats_0, this$readAudioData_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$readAudioData$lambda(closure$formats_0, this$readAudioData_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$readAudioData$lambda(closure$formats_0, this$readAudioData_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$formats = closure$formats_0;
    this.local$this$readAudioData = this$readAudioData_0;
    this.local$tmp$ = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readAudioData$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAudioData$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAudioData$lambda.prototype.constructor = Coroutine$readAudioData$lambda;
  Coroutine$readAudioData$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$formats.decode_axnxby$(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            return this.local$tmp$ != null ? this.local$tmp$ : invalidOp("Can't decode audio file " + this.local$this$readAudioData);
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
  function VfsFile$openUse$lambda(closure$callback) {
    return function ($receiver, continuation) {
      await_0(closure$callback, $receiver, $this$);
      return $this$.$$coroutineResult$$;
    };
  }
  function readAudioData($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readAudioData($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readAudioData($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$mode_0 = void 0;
    this.local$continuation_0 = void 0;
    this.local$suspended = void 0;
    this.local$instance = void 0;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readAudioData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAudioData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAudioData.prototype.constructor = Coroutine$readAudioData;
  Coroutine$readAudioData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultAudioFormats;
            this.local$mode_0 = void 0;
            this.local$continuation_0 = this;
            this.local$instance = new Coroutine$openUse_v2mq79$(this.local$$receiver, this.local$mode_0, readAudioData$lambda(this.local$formats, this.local$$receiver), this.local$continuation_0);
            if (this.local$suspended) {
              this.result_0 = this.local$instance;
            }
             else {
              this.result_0 = this.local$instance.doResume(null);
            }

            return this.result_0;
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
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function AudioFormat(exts) {
    var destination = ArrayList_init(exts.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== exts.length; ++tmp$) {
      var item = exts[tmp$];
      var tmp$_0 = destination.add_11rb$;
      var trim = Kotlin.kotlin.text.trim_gw00vp$;
      var $receiver = item.toLowerCase();
      var tmp$_1;
      tmp$_0.call(destination, trim(Kotlin.isCharSequence(tmp$_1 = $receiver) ? tmp$_1 : Kotlin.throwCCE()).toString());
    }
    this.extensions = toSet(destination);
  }
  function AudioFormat$Info(lengthInMicroseconds, channels) {
    if (lengthInMicroseconds === void 0)
      lengthInMicroseconds = Kotlin.Long.ZERO;
    if (channels === void 0)
      channels = 2;
    this.lengthInMicroseconds = lengthInMicroseconds;
    this.channels = channels;
    this.$delegate_q4l724$_0 = new Extra$Mixin();
    this.msLength = this.lengthInMicroseconds.div(Kotlin.Long.fromInt(1000));
    this.length = this.lengthInMicroseconds.toNumber() / 1000000.0;
  }
  Object.defineProperty(AudioFormat$Info.prototype, 'extra', {
    get: function () {
      return this.$delegate_q4l724$_0.extra;
    },
    set: function (tmp$) {
      this.$delegate_q4l724$_0.extra = tmp$;
    }
  });
  AudioFormat$Info.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Info',
    interfaces: [Extra]
  };
  AudioFormat$Info.prototype.component1 = function () {
    return this.lengthInMicroseconds;
  };
  AudioFormat$Info.prototype.component2 = function () {
    return this.channels;
  };
  AudioFormat$Info.prototype.copy_yhmem3$ = function (lengthInMicroseconds, channels) {
    return new AudioFormat$Info(lengthInMicroseconds === void 0 ? this.lengthInMicroseconds : lengthInMicroseconds, channels === void 0 ? this.channels : channels);
  };
  AudioFormat$Info.prototype.toString = function () {
    return 'Info(lengthInMicroseconds=' + Kotlin.toString(this.lengthInMicroseconds) + (', channels=' + Kotlin.toString(this.channels)) + ')';
  };
  AudioFormat$Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.lengthInMicroseconds) | 0;
    result = result * 31 + Kotlin.hashCode(this.channels) | 0;
    return result;
  };
  AudioFormat$Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.lengthInMicroseconds, other.lengthInMicroseconds) && Kotlin.equals(this.channels, other.channels)))));
  };
  AudioFormat.prototype.tryReadInfo_axnxby$ = function (data, continuation) {
    return null;
  };
  AudioFormat.prototype.decodeStream_axnxby$ = function (data, continuation) {
    return null;
  };
  AudioFormat.prototype.decode_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decode_axnxby$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decode_axnxby$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$data = data_0;
  }
  Coroutine$decode_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decode_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decode_axnxby$.prototype.constructor = Coroutine$decode_axnxby$;
  Coroutine$decode_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.decodeStream_axnxby$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$ = this.result_0;
            this.state_0 = 3;
            this.result_0 = this.local$tmp$ != null ? this.local$tmp$.toData(this) : null;
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0;
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
  AudioFormat.prototype.encode_rpn7n4$ = function (data, out, filename, continuation) {
    throw new NotImplementedError_init();
  };
  AudioFormat.prototype.encodeToByteArray_tdqliv$ = function (data_0, filename_0, format_0, continuation_0, suspended) {
    var instance = new Coroutine$encodeToByteArray_tdqliv$(this, data_0, filename_0, format_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$encodeToByteArray_tdqliv$($this, data_0, filename_0, format_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$out = void 0;
    this.local$data = data_0;
    this.local$filename = filename_0;
    this.local$format = format_0;
  }
  Coroutine$encodeToByteArray_tdqliv$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$encodeToByteArray_tdqliv$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$encodeToByteArray_tdqliv$.prototype.constructor = Coroutine$encodeToByteArray_tdqliv$;
  Coroutine$encodeToByteArray_tdqliv$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$filename === void 0)
              this.local$filename = 'out.wav';
            if (this.local$format === void 0)
              this.local$format = this.$this;
            this.local$out = MemorySyncStream();
            this.state_0 = 2;
            this.result_0 = this.local$format.encode_rpn7n4$(this.local$data, toAsync(this.local$out), this.local$filename, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return toByteArray(this.local$out);
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
  AudioFormat.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AudioFormat',
    interfaces: []
  };
  var defaultAudioFormats;
  var LinkedHashSet_init = Kotlin.kotlin.collections.LinkedHashSet_init_287e2$;
  function AudioFormats() {
    AudioFormat.call(this, []);
    this.formats = LinkedHashSet_init();
  }
  var addAll = Kotlin.kotlin.collections.addAll_ye1y7v$;
  AudioFormats.prototype.register_rtj1ud$ = function (formats) {
    addAll(this.formats, formats);
    return this;
  };
  AudioFormats.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$tryReadInfo_axnxby$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$format = void 0;
    this.local$data = data_0;
    this.local$e = void 0;
  }
  Coroutine$tryReadInfo_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$.prototype.constructor = Coroutine$tryReadInfo_axnxby$;
  Coroutine$tryReadInfo_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.formats.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 8;
              continue;
            }

            this.local$format = this.local$tmp$.next();
            this.exceptionState_0 = 5;
            this.state_0 = 2;
            this.result_0 = this.local$data.clone(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$format.tryReadInfo_axnxby$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$tmp$_0 = this.result_0;
            if (this.local$tmp$_0 == null) {
              this.exceptionState_0 = 5;
              this.state_0 = 1;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            return this.local$tmp$_0;
          case 5:
            this.exceptionState_0 = 7;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, Throwable)) {
              printStackTrace(this.local$e);
            }
             else
              throw this.local$e;
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 1;
            continue;
          case 7:
            throw this.exception_0;
          case 8:
            return null;
        }
      }
       catch (e) {
        if (this.state_0 === 7)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AudioFormats.prototype.decodeStream_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeStream_axnxby$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decodeStream_axnxby$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 10;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$format = void 0;
    this.local$data = data_0;
    this.local$e = void 0;
  }
  Coroutine$decodeStream_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeStream_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeStream_axnxby$.prototype.constructor = Coroutine$decodeStream_axnxby$;
  Coroutine$decodeStream_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = this.$this.formats.iterator();
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 11;
              continue;
            }

            this.local$format = this.local$tmp$.next();
            this.exceptionState_0 = 8;
            this.state_0 = 2;
            this.result_0 = this.local$data.clone(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$format.tryReadInfo_axnxby$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            if (this.result_0 == null) {
              this.exceptionState_0 = 8;
              this.state_0 = 1;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = this.local$data.clone(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 5:
            this.state_0 = 6;
            this.result_0 = this.local$format.decodeStream_axnxby$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.local$tmp$_0 = this.result_0;
            if (this.local$tmp$_0 == null) {
              this.exceptionState_0 = 8;
              this.state_0 = 1;
              continue;
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 7:
            return this.local$tmp$_0;
          case 8:
            this.exceptionState_0 = 10;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, Throwable)) {
              printStackTrace(this.local$e);
            }
             else
              throw this.local$e;
            this.state_0 = 9;
            continue;
          case 9:
            this.state_0 = 1;
            continue;
          case 10:
            throw this.exception_0;
          case 11:
            return null;
        }
      }
       catch (e) {
        if (this.state_0 === 10)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  AudioFormats.prototype.encode_rpn7n4$ = function (data, out, filename, continuation) {
    var tmp$;
    var ext = (new PathInfo(filename)).extensionLC;
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
      throw new UnsupportedOperationException("Don't know how to generate file for extension '" + ext + "'");
    }
    var format = tmp$;
    return format.encode_rpn7n4$(data, out, filename, continuation);
  };
  AudioFormats.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AudioFormats',
    interfaces: [AudioFormat]
  };
  function readSoundInfo$lambda(closure$formats_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$readSoundInfo$lambda(closure$formats_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$readSoundInfo$lambda(closure$formats_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$formats = closure$formats_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$readSoundInfo$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSoundInfo$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSoundInfo$lambda.prototype.constructor = Coroutine$readSoundInfo$lambda;
  Coroutine$readSoundInfo$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$formats.tryReadInfo_axnxby$(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
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
  function VfsFile$openUse$lambda_0(closure$callback) {
    return function ($receiver, continuation) {
      await_0(closure$callback, $receiver, $this$);
      return $this$.$$coroutineResult$$;
    };
  }
  function readSoundInfo($receiver, formats, continuation) {
    if (formats === void 0)
      formats = defaultAudioFormats;
    var mode_0 = void 0;
    var suspended;
    var openUse_v2mq79$result;
    var instance = new Coroutine$openUse_v2mq79$($receiver, mode_0, readSoundInfo$lambda(formats), continuation);
    if (suspended) {
      openUse_v2mq79$result = instance;
    }
     else {
      openUse_v2mq79$result = instance.doResume(null);
    }
    return openUse_v2mq79$result;
  }
  function registerStandard($receiver) {
    $receiver.register_rtj1ud$([WAV_getInstance(), OGG_getInstance(), MP3_getInstance()]);
    return $receiver;
  }
  function AudioStream(rate_0, channels_0) {
    AudioStream$Companion_getInstance();
    this.rate = rate_0;
    this.channels = channels_0;
  }
  AudioStream.prototype.read_359eei$ = function (out, offset, length, continuation) {
    return 0;
  };
  AudioStream.prototype.toData = function (continuation_0, suspended) {
    var instance = new Coroutine$toData(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$toData($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$out = void 0;
    this.local$buffer = void 0;
    this.local$read = void 0;
  }
  Coroutine$toData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$toData.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$toData.prototype.constructor = Coroutine$toData;
  Coroutine$toData.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$out = new AudioBuffer();
            this.local$buffer = new Int16Array(1024);
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.read_359eei$(this.local$buffer, 0, this.local$buffer.length, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$read = this.result_0;
            if (this.local$read <= 0) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.local$out.write_359eei$(this.local$buffer, 0, this.local$read);
            this.state_0 = 2;
            continue;
          case 5:
            return new AudioData(this.$this.rate, this.$this.channels, this.local$out.toShortArray());
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
  function AudioStream$Companion() {
    AudioStream$Companion_instance = this;
  }
  function AudioStream$Companion$generator$ObjectLiteral(closure$gen, rate_0, channels_0) {
    this.closure$gen = closure$gen;
    AudioStream.call(this, rate_0, channels_0);
    this.chunk = new Int16Array([]);
    this.pos = 0;
    this.chunks = new LinkedList();
  }
  Object.defineProperty(AudioStream$Companion$generator$ObjectLiteral.prototype, 'available', {
    get: function () {
      return this.chunk.length - this.pos | 0;
    }
  });
  AudioStream$Companion$generator$ObjectLiteral.prototype.read_359eei$ = function (out_0, offset_0, length_0, continuation_0, suspended) {
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
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$b = void 0;
    this.local$read = void 0;
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
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.available > 0) {
              this.state_0 = 6;
              continue;
            }

            if (this.$this.chunks.isEmpty()) {
              this.local$tmp$ = this.$this.chunks;
              this.state_0 = 3;
              this.result_0 = this.$this.closure$gen(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 5;
              continue;
            }

          case 3:
            this.local$tmp$_0 = this.result_0;
            if (this.local$tmp$_0 == null) {
              return 0;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.local$tmp$.add_11rb$(this.local$tmp$_0);
            this.state_0 = 5;
            continue;
          case 5:
            this.$this.chunk = this.$this.chunks.removeFirst();
            this.$this.pos = 0;
            this.state_0 = 2;
            continue;
          case 6:
            this.local$b = this.$this.available;
            this.local$read = Math_0.min(this.local$length, this.local$b);
            copyRangeTo(this.$this.chunk, this.$this.pos, this.local$out, this.local$offset, this.local$read);
            this.$this.pos = this.$this.pos + this.local$read | 0;
            return this.local$read;
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
  AudioStream$Companion$generator$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [AudioStream]
  };
  AudioStream$Companion.prototype.generator_uu7nn5$ = function (rate, channels, gen) {
    return new AudioStream$Companion$generator$ObjectLiteral(gen, rate, channels);
  };
  AudioStream$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var AudioStream$Companion_instance = null;
  function AudioStream$Companion_getInstance() {
    if (AudioStream$Companion_instance === null) {
      new AudioStream$Companion();
    }
    return AudioStream$Companion_instance;
  }
  AudioStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'AudioStream',
    interfaces: []
  };
  function play_0($receiver, continuation) {
    return get_nativeSoundProvider().play_b8gm0x$($receiver, continuation);
  }
  function readAudioStream($receiver_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$readAudioStream($receiver_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$readAudioStream($receiver_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$$receiver = $receiver_0;
    this.local$formats = formats_0;
  }
  Coroutine$readAudioStream.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readAudioStream.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readAudioStream.prototype.constructor = Coroutine$readAudioStream;
  Coroutine$readAudioStream.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultAudioFormats;
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.open_7c7tmz$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.decodeStream_axnxby$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0;
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
  function writeAudio$lambda(closure$formats_0, closure$data_0, this$writeAudio_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$writeAudio$lambda(closure$formats_0, closure$data_0, this$writeAudio_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$writeAudio$lambda(closure$formats_0, closure$data_0, this$writeAudio_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$formats = closure$formats_0;
    this.local$closure$data = closure$data_0;
    this.local$this$writeAudio = this$writeAudio_0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$writeAudio$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeAudio$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeAudio$lambda.prototype.constructor = Coroutine$writeAudio$lambda;
  Coroutine$writeAudio$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$closure$formats.encode_rpn7n4$(this.local$closure$data, this.local$$receiver, this.local$this$writeAudio.basename, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
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
  function VfsFile$openUse$lambda_1(closure$callback) {
    return function ($receiver, continuation) {
      await_0(closure$callback, $receiver, $this$);
      return $this$.$$coroutineResult$$;
    };
  }
  function writeAudio($receiver_0, data_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$writeAudio($receiver_0, data_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$writeAudio($receiver_0, data_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$mode_0 = void 0;
    this.local$continuation_0 = void 0;
    this.local$suspended = void 0;
    this.local$instance = void 0;
    this.local$$receiver = $receiver_0;
    this.local$data = data_0;
    this.local$formats = formats_0;
  }
  Coroutine$writeAudio.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$writeAudio.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$writeAudio.prototype.constructor = Coroutine$writeAudio;
  Coroutine$writeAudio.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$formats === void 0)
              this.local$formats = defaultAudioFormats;
            this.local$mode_0 = VfsOpenMode.CREATE_OR_TRUNCATE;
            this.local$continuation_0 = this;
            this.local$instance = new Coroutine$openUse_v2mq79$(this.local$$receiver, this.local$mode_0, writeAudio$lambda(this.local$formats, this.local$data, this.local$$receiver), this.local$continuation_0);
            if (this.local$suspended) {
              this.result_0 = this.local$instance;
            }
             else {
              this.result_0 = this.local$instance.doResume(null);
            }

            return this.result_0;
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
  function MP3() {
    MP3_instance = this;
    MP3Base.call(this);
  }
  MP3.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'MP3',
    interfaces: [MP3Base]
  };
  var MP3_instance = null;
  function MP3_getInstance() {
    if (MP3_instance === null) {
      new MP3();
    }
    return MP3_instance;
  }
  function MP3Base() {
    AudioFormat.call(this, ['mp3']);
  }
  MP3Base.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$_0(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$tryReadInfo_axnxby$_0($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$parser = void 0;
    this.local$duration = void 0;
    this.local$data = data_0;
    this.local$e = void 0;
  }
  Coroutine$tryReadInfo_axnxby$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$_0.prototype.constructor = Coroutine$tryReadInfo_axnxby$_0;
  Coroutine$tryReadInfo_axnxby$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.local$parser = new MP3Base$Parser(this.local$data);
            this.state_0 = 1;
            this.result_0 = this.local$parser.getDurationEstimate(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.local$duration = this.result_0;
            return new AudioFormat$Info(this.local$duration, (this.local$tmp$_1 = (this.local$tmp$_0 = (this.local$tmp$ = this.local$parser.info) != null ? this.local$tmp$.channelMode : null) != null ? this.local$tmp$_0.channels : null) != null ? this.local$tmp$_1 : 2);
          case 2:
            this.exceptionState_0 = 5;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, Throwable)) {
              return null;
            }
             else {
              throw this.local$e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
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
  function MP3Base$Parser(data) {
    MP3Base$Parser$Companion_getInstance();
    this.data = data;
    this.info = null;
  }
  MP3Base$Parser.prototype.getDurationEstimate = function (continuation) {
    return this._getDuration_0(true, continuation);
  };
  MP3Base$Parser.prototype.getDurationExact = function (continuation) {
    return this._getDuration_0(false, continuation);
  };
  MP3Base$Parser.prototype._getDuration_0 = function (use_cbr_estimate_0, continuation_0, suspended) {
    var instance = new Coroutine$_getDuration_0(this, use_cbr_estimate_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$_getDuration_0($this, use_cbr_estimate_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fd = void 0;
    this.local$duration = void 0;
    this.local$offset = void 0;
    this.local$info = void 0;
    this.local$block2 = void 0;
    this.local$use_cbr_estimate = use_cbr_estimate_0;
  }
  Coroutine$_getDuration_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$_getDuration_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$_getDuration_0.prototype.constructor = Coroutine$_getDuration_0;
  Coroutine$_getDuration_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.data.position = Kotlin.Long.ZERO;
            this.state_0 = 2;
            this.result_0 = this.$this.data.clone(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$fd = this.result_0;
            this.local$duration = Kotlin.Long.ZERO;
            this.state_0 = 3;
            this.result_0 = readStream(this.local$fd, 100, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.$this.skipID3v2Tag_0(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.local$offset = this.result_0;
            this.local$fd.position = this.local$offset;
            this.local$info = null;
            this.state_0 = 5;
            continue;
          case 5:
            this.state_0 = 6;
            this.result_0 = this.local$fd.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            if (!!this.result_0) {
              this.state_0 = 15;
              continue;
            }
             else {
              this.state_0 = 7;
              continue;
            }

          case 7:
            this.state_0 = 8;
            this.result_0 = readBytes(this.local$fd, 10, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 8:
            this.local$block2 = this.result_0;
            if (this.local$block2.length < 10) {
              this.state_0 = 15;
              continue;
            }
             else {
              this.state_0 = 9;
              continue;
            }

          case 9:
            if (getu(this.local$block2, 0) === 255 && (getu(this.local$block2, 1) & 224) !== 0) {
              this.state_0 = 10;
              this.result_0 = MP3Base$Parser$Companion_getInstance().parseFrameHeader_fqrh44$(this.local$block2, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              if (Kotlin.equals(readString(openSync(this.local$block2), 3), 'TAG')) {
                this.local$fd.position = this.local$fd.position.add(Kotlin.Long.fromInt(128 - 10 | 0));
              }
               else {
                this.local$fd.position = this.local$fd.position.subtract(Kotlin.Long.fromInt(9));
              }
              this.state_0 = 12;
              continue;
            }

          case 10:
            this.local$info = this.result_0;
            this.$this.info = this.local$info;
            if (this.local$info.frameSize === 0) {
              return this.local$duration;
            }
             else {
              this.state_0 = 11;
              continue;
            }

          case 11:
            this.local$fd.position = this.local$fd.position.add(Kotlin.Long.fromInt(this.local$info.frameSize - 10 | 0));
            this.local$duration = this.local$duration.add(Kotlin.Long.fromInt(this.local$info.samples).multiply(Kotlin.Long.fromInt(1000000)).div(Kotlin.Long.fromInt(this.local$info.samplingRate)));
            this.state_0 = 12;
            continue;
          case 12:
            if (this.local$info != null && this.local$use_cbr_estimate) {
              this.state_0 = 13;
              this.result_0 = this.$this.estimateDuration_0(this.local$info.bitrate, this.local$info.channelMode.channels, this.local$offset.toInt(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 14;
              continue;
            }

          case 13:
            return this.result_0;
          case 14:
            this.state_0 = 5;
            continue;
          case 15:
            return this.local$duration;
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
  MP3Base$Parser.prototype.estimateDuration_0 = function (bitrate_0, channels_0, offset_0, continuation_0, suspended) {
    var instance = new Coroutine$estimateDuration_0(this, bitrate_0, channels_0, offset_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$estimateDuration_0($this, bitrate_0, channels_0, offset_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$kbps = void 0;
    this.local$dataSize = void 0;
    this.local$bitrate = bitrate_0;
    this.local$channels = channels_0;
    this.local$offset = offset_0;
  }
  Coroutine$estimateDuration_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$estimateDuration_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$estimateDuration_0.prototype.constructor = Coroutine$estimateDuration_0;
  Coroutine$estimateDuration_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$kbps = (this.local$bitrate * 1000 | 0) / 8 | 0;
            this.state_0 = 2;
            this.result_0 = this.$this.data.getLength(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$dataSize = this.result_0.subtract(Kotlin.Long.fromInt(this.local$offset));
            return this.local$dataSize.multiply(Kotlin.Long.fromInt(2 / this.local$channels | 0)).multiply(Kotlin.Long.fromInt(1000000)).div(Kotlin.Long.fromInt(this.local$kbps));
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
  MP3Base$Parser.prototype.skipID3v2Tag_0 = function (block_0, continuation_0, suspended) {
    var instance = new Coroutine$skipID3v2Tag_0(this, block_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$skipID3v2Tag_0($this, block_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$b = void 0;
    this.local$id3v2_major_version = void 0;
    this.local$id3v2_minor_version = void 0;
    this.local$id3v2_flags = void 0;
    this.local$flag_unsynchronisation = void 0;
    this.local$flag_extended_header = void 0;
    this.local$flag_experimental_ind = void 0;
    this.local$flag_footer_present = void 0;
    this.local$z0 = void 0;
    this.local$z1 = void 0;
    this.local$z2 = void 0;
    this.local$z3 = void 0;
    this.local$header_size = void 0;
    this.local$tag_size = void 0;
    this.local$footer_size = void 0;
    this.local$block = block_0;
  }
  Coroutine$skipID3v2Tag_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$skipID3v2Tag_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$skipID3v2Tag_0.prototype.constructor = Coroutine$skipID3v2Tag_0;
  Coroutine$skipID3v2Tag_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$block.clone(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$b = this.result_0;
            this.state_0 = 3;
            this.result_0 = readString_0(this.local$b, 3, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            if (Kotlin.equals(this.result_0, 'ID3')) {
              this.state_0 = 4;
              this.result_0 = readU8(this.local$b, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 12;
              continue;
            }

          case 4:
            this.local$id3v2_major_version = this.result_0;
            this.state_0 = 5;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 5:
            this.local$id3v2_minor_version = this.result_0;
            this.state_0 = 6;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.local$id3v2_flags = this.result_0;
            this.local$flag_unsynchronisation = extract(this.local$id3v2_flags, 7);
            this.local$flag_extended_header = extract(this.local$id3v2_flags, 6);
            this.local$flag_experimental_ind = extract(this.local$id3v2_flags, 5);
            this.local$flag_footer_present = extract(this.local$id3v2_flags, 4);
            this.state_0 = 7;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 7:
            this.local$z0 = this.result_0;
            this.state_0 = 8;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 8:
            this.local$z1 = this.result_0;
            this.state_0 = 9;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 9:
            this.local$z2 = this.result_0;
            this.state_0 = 10;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 10:
            this.local$z3 = this.result_0;
            if ((this.local$z0 & 128) === 0 && (this.local$z1 & 128) === 0 && (this.local$z2 & 128) === 0 && (this.local$z3 & 128) === 0) {
              this.local$header_size = 10;
              this.local$tag_size = Kotlin.imul(this.local$z0 & 127, 2097152) + ((this.local$z1 & 127) * 16384 | 0) + ((this.local$z2 & 127) * 128 | 0) + (this.local$z3 & 127) | 0;
              this.local$footer_size = this.local$flag_footer_present ? 10 : 0;
              return Kotlin.Long.fromInt(this.local$header_size + this.local$tag_size + this.local$footer_size | 0);
            }
             else {
              this.state_0 = 11;
              continue;
            }

          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            return Kotlin.Long.ZERO;
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
  function MP3Base$Parser$Companion() {
    MP3Base$Parser$Companion_instance = this;
    this.versions = ['2.5', 'x', '2', '1'];
    this.layers = new Int32Array([-1, 3, 2, 1]);
    this.bitrates = mapOf([to('V1L1', new Int32Array([0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448])), to('V1L2', new Int32Array([0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384])), to('V1L3', new Int32Array([0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320])), to('V2L1', new Int32Array([0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256])), to('V2L2', new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160])), to('V2L3', new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]))]);
    this.sampleRates = mapOf([to('1', new Int32Array([44100, 48000, 32000])), to('2', new Int32Array([22050, 24000, 16000])), to('2.5', new Int32Array([11025, 12000, 8000]))]);
    this.samples = mapOf([to(1, mapOf([to(1, 384), to(2, 1152), to(3, 1152)])), to(2, mapOf([to(1, 384), to(2, 1152), to(3, 576)]))]);
  }
  function MP3Base$Parser$Companion$ChannelMode(name, ordinal, id, channels) {
    Enum.call(this);
    this.id = id;
    this.channels = channels;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function MP3Base$Parser$Companion$ChannelMode_initFields() {
    MP3Base$Parser$Companion$ChannelMode_initFields = function () {
    };
    MP3Base$Parser$Companion$ChannelMode$STEREO_instance = new MP3Base$Parser$Companion$ChannelMode('STEREO', 0, 0, 2);
    MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance = new MP3Base$Parser$Companion$ChannelMode('JOINT_STEREO', 1, 1, 1);
    MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance = new MP3Base$Parser$Companion$ChannelMode('DUAL_CHANNEL', 2, 2, 2);
    MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance = new MP3Base$Parser$Companion$ChannelMode('SINGLE_CHANNEL', 3, 3, 1);
    MP3Base$Parser$Companion$ChannelMode$Companion_getInstance();
  }
  var MP3Base$Parser$Companion$ChannelMode$STEREO_instance;
  function MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$STEREO_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance;
  function MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance;
  function MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_instance;
  }
  var MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance;
  function MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    return MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_instance;
  }
  function MP3Base$Parser$Companion$ChannelMode$Companion() {
    MP3Base$Parser$Companion$ChannelMode$Companion_instance = this;
    var $receiver = MP3Base$Parser$Companion$ChannelMode$values();
    var destination = ArrayList_init($receiver.length);
    var tmp$;
    for (tmp$ = 0; tmp$ !== $receiver.length; ++tmp$) {
      var item = $receiver[tmp$];
      destination.add_11rb$(to(item.id, item));
    }
    this.BY_ID = toMap(destination);
  }
  MP3Base$Parser$Companion$ChannelMode$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MP3Base$Parser$Companion$ChannelMode$Companion_instance = null;
  function MP3Base$Parser$Companion$ChannelMode$Companion_getInstance() {
    MP3Base$Parser$Companion$ChannelMode_initFields();
    if (MP3Base$Parser$Companion$ChannelMode$Companion_instance === null) {
      new MP3Base$Parser$Companion$ChannelMode$Companion();
    }
    return MP3Base$Parser$Companion$ChannelMode$Companion_instance;
  }
  MP3Base$Parser$Companion$ChannelMode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ChannelMode',
    interfaces: [Enum]
  };
  function MP3Base$Parser$Companion$ChannelMode$values() {
    return [MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance(), MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance(), MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance(), MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance()];
  }
  MP3Base$Parser$Companion$ChannelMode.values = MP3Base$Parser$Companion$ChannelMode$values;
  function MP3Base$Parser$Companion$ChannelMode$valueOf(name) {
    switch (name) {
      case 'STEREO':
        return MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance();
      case 'JOINT_STEREO':
        return MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance();
      case 'DUAL_CHANNEL':
        return MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance();
      case 'SINGLE_CHANNEL':
        return MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance();
      default:Kotlin.throwISE('No enum constant com.soywiz.korau.format.MP3Base.Parser.Companion.ChannelMode.' + name);
    }
  }
  MP3Base$Parser$Companion$ChannelMode.valueOf_61zpoe$ = MP3Base$Parser$Companion$ChannelMode$valueOf;
  function MP3Base$Parser$Companion$Mp3Info(version, layer, bitrate, samplingRate, channelMode, frameSize, samples) {
    this.version = version;
    this.layer = layer;
    this.bitrate = bitrate;
    this.samplingRate = samplingRate;
    this.channelMode = channelMode;
    this.frameSize = frameSize;
    this.samples = samples;
  }
  MP3Base$Parser$Companion$Mp3Info.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Mp3Info',
    interfaces: []
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component1 = function () {
    return this.version;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component2 = function () {
    return this.layer;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component3 = function () {
    return this.bitrate;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component4 = function () {
    return this.samplingRate;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component5 = function () {
    return this.channelMode;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component6 = function () {
    return this.frameSize;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.component7 = function () {
    return this.samples;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.copy_wikoj$ = function (version, layer, bitrate, samplingRate, channelMode, frameSize, samples) {
    return new MP3Base$Parser$Companion$Mp3Info(version === void 0 ? this.version : version, layer === void 0 ? this.layer : layer, bitrate === void 0 ? this.bitrate : bitrate, samplingRate === void 0 ? this.samplingRate : samplingRate, channelMode === void 0 ? this.channelMode : channelMode, frameSize === void 0 ? this.frameSize : frameSize, samples === void 0 ? this.samples : samples);
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.toString = function () {
    return 'Mp3Info(version=' + Kotlin.toString(this.version) + (', layer=' + Kotlin.toString(this.layer)) + (', bitrate=' + Kotlin.toString(this.bitrate)) + (', samplingRate=' + Kotlin.toString(this.samplingRate)) + (', channelMode=' + Kotlin.toString(this.channelMode)) + (', frameSize=' + Kotlin.toString(this.frameSize)) + (', samples=' + Kotlin.toString(this.samples)) + ')';
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.version) | 0;
    result = result * 31 + Kotlin.hashCode(this.layer) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitrate) | 0;
    result = result * 31 + Kotlin.hashCode(this.samplingRate) | 0;
    result = result * 31 + Kotlin.hashCode(this.channelMode) | 0;
    result = result * 31 + Kotlin.hashCode(this.frameSize) | 0;
    result = result * 31 + Kotlin.hashCode(this.samples) | 0;
    return result;
  };
  MP3Base$Parser$Companion$Mp3Info.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.version, other.version) && Kotlin.equals(this.layer, other.layer) && Kotlin.equals(this.bitrate, other.bitrate) && Kotlin.equals(this.samplingRate, other.samplingRate) && Kotlin.equals(this.channelMode, other.channelMode) && Kotlin.equals(this.frameSize, other.frameSize) && Kotlin.equals(this.samples, other.samples)))));
  };
  MP3Base$Parser$Companion.prototype.parseFrameHeader_fqrh44$ = function (f4, continuation) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var b0 = getu(f4, 0);
    var b1 = getu(f4, 1);
    var b2 = getu(f4, 2);
    var b3 = getu(f4, 3);
    if (b0 !== 255)
      error.invalidOp;
    var version = this.versions[extract_0(b1, 3, 2)];
    var simple_version = Kotlin.equals(version, '2.5') ? 2 : toInt(version);
    var layer = this.layers[extract_0(b1, 1, 2)];
    var protection_bit = extract_0(b1, 0, 1);
    var bitrate_key = format('V%dL%d', [simple_version, layer]);
    var bitrate_idx = extract_0(b2, 4, 4);
    var bitrate = (tmp$_0 = (tmp$ = this.bitrates.get_11rb$(bitrate_key)) != null ? tmp$[bitrate_idx] : null) != null ? tmp$_0 : 0;
    var sample_rate = (tmp$_2 = (tmp$_1 = this.sampleRates.get_11rb$(version)) != null ? tmp$_1[extract_0(b2, 2, 2)] : null) != null ? tmp$_2 : 0;
    var padding_bit = extract_0(b2, 1, 1);
    var private_bit = extract_0(b2, 0, 1);
    var channelMode = (tmp$_3 = MP3Base$Parser$Companion$ChannelMode$Companion_getInstance().BY_ID.get_11rb$(extract_0(b3, 6, 2))) != null ? tmp$_3 : Kotlin.throwNPE();
    var mode_extension_bits = extract_0(b3, 4, 2);
    var copyright_bit = extract_0(b3, 3, 1);
    var original_bit = extract_0(b3, 2, 1);
    var emphasis = extract_0(b3, 0, 2);
    return new MP3Base$Parser$Companion$Mp3Info(version, layer, bitrate, sample_rate, channelMode, this.framesize_0(layer, bitrate, sample_rate, padding_bit), (tmp$_5 = (tmp$_4 = this.samples.get_11rb$(simple_version)) != null ? tmp$_4.get_11rb$(layer) : null) != null ? tmp$_5 : 0);
  };
  MP3Base$Parser$Companion.prototype.framesize_0 = function (layer, bitrate, sample_rate, padding_bit) {
    var tmp$;
    if (layer === 1) {
      tmp$ = ((((12 * bitrate | 0) * 1000 | 0) / sample_rate | 0) + padding_bit | 0) * 4 | 0;
    }
     else {
      tmp$ = (((144 * bitrate | 0) * 1000 | 0) / sample_rate | 0) + padding_bit | 0;
    }
    return tmp$;
  };
  MP3Base$Parser$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MP3Base$Parser$Companion_instance = null;
  function MP3Base$Parser$Companion_getInstance() {
    if (MP3Base$Parser$Companion_instance === null) {
      new MP3Base$Parser$Companion();
    }
    return MP3Base$Parser$Companion_instance;
  }
  MP3Base$Parser.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Parser',
    interfaces: []
  };
  MP3Base.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MP3Base',
    interfaces: [AudioFormat]
  };
  function OGG() {
    OGG_instance = this;
    OggBase.call(this);
  }
  OGG.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'OGG',
    interfaces: [OggBase]
  };
  var OGG_instance = null;
  function OGG_getInstance() {
    if (OGG_instance === null) {
      new OGG();
    }
    return OGG_instance;
  }
  function OggBase() {
    AudioFormat.call(this, ['ogg']);
  }
  OggBase.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$_1(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$tryReadInfo_axnxby$_1($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$data = data_0;
    this.local$e = void 0;
  }
  Coroutine$tryReadInfo_axnxby$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$_1.prototype.constructor = Coroutine$tryReadInfo_axnxby$_1;
  Coroutine$tryReadInfo_axnxby$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.$this.parse_axnxby$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, Throwable)) {
              return null;
            }
             else {
              throw this.local$e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            return;
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
  var collectionSizeOrDefault = Kotlin.kotlin.collections.collectionSizeOrDefault_ba2ldo$;
  OggBase.prototype.parse_axnxby$ = function (s_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_axnxby$(this, s_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parse_axnxby$($this, s_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$channels = void 0;
    this.local$sampleRate = void 0;
    this.local$brnom = void 0;
    this.local$magic = void 0;
    this.local$type = void 0;
    this.local$cont = void 0;
    this.local$bos = void 0;
    this.local$eos = void 0;
    this.local$gpos = void 0;
    this.local$sn = void 0;
    this.local$psn = void 0;
    this.local$chk = void 0;
    this.local$pseg = void 0;
    this.local$$receiver = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$item = void 0;
    this.local$tmp$_0 = void 0;
    this.local$closure$continuation = void 0;
    this.local$psizs = void 0;
    this.local$destination_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$item_0 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$closure$continuation_0 = void 0;
    this.local$pages = void 0;
    this.local$info = void 0;
    this.local$packetType = void 0;
    this.local$vver = void 0;
    this.local$brmax = void 0;
    this.local$brmin = void 0;
    this.local$bsinfo = void 0;
    this.local$s = s_0;
  }
  Coroutine$parse_axnxby$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_axnxby$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_axnxby$.prototype.constructor = Coroutine$parse_axnxby$;
  Coroutine$parse_axnxby$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$channels = 2;
            this.local$sampleRate = 44100;
            this.local$brnom = 160000;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = hasAvailable(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            if (!this.result_0) {
              this.state_0 = 30;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.state_0 = 5;
            this.result_0 = readString_0(this.local$s, 5, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 5:
            this.local$magic = this.result_0;
            if (!Kotlin.equals(this.local$magic, 'OggS\x00'))
              invalidOp('Not an OGG file');
            this.state_0 = 6;
            this.result_0 = readS8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.local$type = this.result_0;
            this.local$cont = extract(this.local$type, 0);
            this.local$bos = extract(this.local$type, 1);
            this.local$eos = extract(this.local$type, 2);
            this.state_0 = 7;
            this.result_0 = readS64_le(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 7:
            this.local$gpos = this.result_0;
            this.state_0 = 8;
            this.result_0 = readS32_le(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 8:
            this.local$sn = this.result_0;
            this.state_0 = 9;
            this.result_0 = readS32_le(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 9:
            this.local$psn = this.result_0;
            this.state_0 = 10;
            this.result_0 = readS32_le(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 10:
            this.local$chk = this.result_0;
            this.state_0 = 11;
            this.result_0 = readU8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 11:
            this.local$pseg = this.result_0;
            this.local$$receiver = until(0, this.local$pseg);
            this.local$destination = ArrayList_init(collectionSizeOrDefault(this.local$$receiver, 10));
            this.local$tmp$ = this.local$$receiver.iterator();
            this.state_0 = 12;
            continue;
          case 12:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 14;
              continue;
            }

            this.local$item = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.local$closure$continuation = this;
            this.state_0 = 13;
            this.result_0 = readU8(this.local$s, this.local$closure$continuation);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 13:
            this.local$tmp$_0.call(this.local$destination, this.local$closure$continuation.result_0);
            this.state_0 = 12;
            continue;
          case 14:
            this.local$psizs = this.local$destination;
            this.local$destination_0 = ArrayList_init(collectionSizeOrDefault(this.local$psizs, 10));
            this.local$tmp$_1 = this.local$psizs.iterator();
            this.state_0 = 15;
            continue;
          case 15:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 17;
              continue;
            }

            this.local$item_0 = this.local$tmp$_1.next();
            this.local$tmp$_2 = this.local$destination_0.add_11rb$;
            this.local$closure$continuation_0 = this;
            this.state_0 = 16;
            this.result_0 = readStream(this.local$s, this.local$item_0, this.local$closure$continuation_0);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 16:
            this.local$tmp$_2.call(this.local$destination_0, this.local$closure$continuation_0.result_0);
            this.state_0 = 15;
            continue;
          case 17:
            this.local$pages = this.local$destination_0;
            if (this.local$bos) {
              this.local$info = this.local$pages.get_za3lpa$(0);
              this.state_0 = 18;
              this.result_0 = readU8(this.local$info, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 28;
              continue;
            }

          case 18:
            this.local$packetType = this.result_0;
            if (this.local$packetType > 3)
              invalidOp('Unsupported OGG vorbis file');
            this.state_0 = 19;
            this.result_0 = readString_0(this.local$info, 6, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 19:
            if (!Kotlin.equals(this.result_0, 'vorbis'))
              invalidOp('Unsupported OGG vorbis file');
            if (this.local$packetType === OggBase$PacketTypes_getInstance().ID_HEADER) {
              this.state_0 = 20;
              this.result_0 = readS32_le(this.local$info, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              if (this.local$packetType !== OggBase$PacketTypes_getInstance().COMMENT_HEADER)
                OggBase$PacketTypes_getInstance().SETUP_HEADER;
              this.state_0 = 27;
              continue;
            }

          case 20:
            this.local$vver = this.result_0;
            this.state_0 = 21;
            this.result_0 = readU8(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 21:
            this.local$channels = this.result_0;
            this.state_0 = 22;
            this.result_0 = readS32_le(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 22:
            this.local$sampleRate = this.result_0;
            this.state_0 = 23;
            this.result_0 = readS32_le(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 23:
            this.local$brmax = this.result_0;
            this.state_0 = 24;
            this.result_0 = readS32_le(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 24:
            this.local$brnom = this.result_0;
            this.state_0 = 25;
            this.result_0 = readS32_le(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 25:
            this.local$brmin = this.result_0;
            this.state_0 = 26;
            this.result_0 = readU8(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 26:
            this.local$bsinfo = this.result_0;
            this.state_0 = 27;
            continue;
          case 27:
            this.state_0 = 28;
            continue;
          case 28:
            if (this.local$eos) {
              return new AudioFormat$Info(Kotlin.Long.fromNumber(this.local$gpos.toNumber() * 1000000.0 / this.local$sampleRate), this.local$channels);
            }
             else {
              this.state_0 = 29;
              continue;
            }

          case 29:
            this.state_0 = 2;
            continue;
          case 30:
            invalidOp('Cannot parse stream');
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
  function OggBase$PacketTypes() {
    OggBase$PacketTypes_instance = this;
    this.ID_HEADER = 1;
    this.COMMENT_HEADER = 3;
    this.SETUP_HEADER = 5;
  }
  OggBase$PacketTypes.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'PacketTypes',
    interfaces: []
  };
  var OggBase$PacketTypes_instance = null;
  function OggBase$PacketTypes_getInstance() {
    if (OggBase$PacketTypes_instance === null) {
      new OggBase$PacketTypes();
    }
    return OggBase$PacketTypes_instance;
  }
  OggBase.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'OggBase',
    interfaces: [AudioFormat]
  };
  function WAV() {
    WAV_instance = this;
    AudioFormat.call(this, ['wav']);
  }
  function WAV$Chunk(type, data) {
    this.type = type;
    this.data = data;
  }
  WAV$Chunk.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Chunk',
    interfaces: []
  };
  WAV$Chunk.prototype.component1 = function () {
    return this.type;
  };
  WAV$Chunk.prototype.component2 = function () {
    return this.data;
  };
  WAV$Chunk.prototype.copy_519pps$ = function (type, data) {
    return new WAV$Chunk(type === void 0 ? this.type : type, data === void 0 ? this.data : data);
  };
  WAV$Chunk.prototype.toString = function () {
    return 'Chunk(type=' + Kotlin.toString(this.type) + (', data=' + Kotlin.toString(this.data)) + ')';
  };
  WAV$Chunk.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    return result;
  };
  WAV$Chunk.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.data, other.data)))));
  };
  function WAV$ProcessedChunk(type, data, extra) {
    this.type = type;
    this.data = data;
    this.extra = extra;
  }
  WAV$ProcessedChunk.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ProcessedChunk',
    interfaces: []
  };
  WAV$ProcessedChunk.prototype.component1 = function () {
    return this.type;
  };
  WAV$ProcessedChunk.prototype.component2 = function () {
    return this.data;
  };
  WAV$ProcessedChunk.prototype.component3 = function () {
    return this.extra;
  };
  WAV$ProcessedChunk.prototype.copy_rxnnyd$ = function (type, data, extra) {
    return new WAV$ProcessedChunk(type === void 0 ? this.type : type, data === void 0 ? this.data : data, extra === void 0 ? this.extra : extra);
  };
  WAV$ProcessedChunk.prototype.toString = function () {
    return 'ProcessedChunk(type=' + Kotlin.toString(this.type) + (', data=' + Kotlin.toString(this.data)) + (', extra=' + Kotlin.toString(this.extra)) + ')';
  };
  WAV$ProcessedChunk.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.type) | 0;
    result = result * 31 + Kotlin.hashCode(this.data) | 0;
    result = result * 31 + Kotlin.hashCode(this.extra) | 0;
    return result;
  };
  WAV$ProcessedChunk.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.type, other.type) && Kotlin.equals(this.data, other.data) && Kotlin.equals(this.extra, other.extra)))));
  };
  function WAV$tryReadInfo$lambda$lambda(it) {
    return Unit;
  }
  WAV.prototype.tryReadInfo_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$tryReadInfo_axnxby$_2(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$tryReadInfo_axnxby$_2($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.$this = $this;
    this.local$show = void 0;
    this.local$ignoreErrors$result = void 0;
    this.local$closure$continuation = void 0;
    this.local$data = data_0;
    this.local$e = void 0;
  }
  Coroutine$tryReadInfo_axnxby$_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$tryReadInfo_axnxby$_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$tryReadInfo_axnxby$_2.prototype.constructor = Coroutine$tryReadInfo_axnxby$_2;
  Coroutine$tryReadInfo_axnxby$_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$show = void 0;
            this.state_0 = 1;
            continue;
          case 1:
            if (this.local$show === void 0)
              this.local$show = false;
            this.exceptionState_0 = 3;
            this.local$closure$continuation = this;
            this.state_0 = 2;
            this.result_0 = this.$this.parse_phffkd$(this.local$data, WAV$tryReadInfo$lambda$lambda, this.local$closure$continuation);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 2:
            this.local$ignoreErrors$result = this.local$closure$continuation.result_0;
            this.exceptionState_0 = 7;
            this.state_0 = 5;
            continue;
          case 3:
            this.exceptionState_0 = 7;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, Throwable)) {
              if (this.local$show)
                printStackTrace(this.local$e);
              this.local$ignoreErrors$result = null;
              this.exceptionState_0 = 3;
              this.state_0 = 6;
              continue;
            }
             else {
              throw this.local$e;
            }

          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            if (!false) {
              this.state_0 = 6;
              continue;
            }

            this.state_0 = 1;
            continue;
          case 6:
            return this.local$ignoreErrors$result;
          case 7:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 7)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function WAV$decodeStream$lambda(closure$fmt, closure$buffer) {
    return function (it) {
      var extra = it.extra;
      if (Kotlin.isType(extra, WAV$Fmt))
        closure$fmt.v = extra;
      if (Kotlin.equals(it.type, 'data')) {
        closure$buffer.v = it.data;
      }
      return Unit;
    };
  }
  function WAV$decodeStream$ObjectLiteral(closure$buffer, closure$bytesPerSample, rate, channels) {
    this.closure$buffer = closure$buffer;
    this.closure$bytesPerSample = closure$bytesPerSample;
    AudioStream.call(this, rate, channels);
  }
  WAV$decodeStream$ObjectLiteral.prototype.read_359eei$ = function (out_0, offset_0, length_0, continuation_0, suspended) {
    var instance = new Coroutine$read_359eei$_0(this, out_0, offset_0, length_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$read_359eei$_0($this, out_0, offset_0, length_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$bytes = void 0;
    this.local$availableSamples = void 0;
    this.local$temp = void 0;
    this.local$n = void 0;
    this.local$out = out_0;
    this.local$offset = offset_0;
    this.local$length = length_0;
  }
  Coroutine$read_359eei$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_359eei$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_359eei$_0.prototype.constructor = Coroutine$read_359eei$_0;
  Coroutine$read_359eei$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = readBytes(this.$this.closure$buffer.v, Kotlin.imul(this.local$length, this.$this.closure$bytesPerSample), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$bytes = new FastByteArrayInputStream(this.result_0);
            this.local$availableSamples = this.local$bytes.length / this.$this.closure$bytesPerSample | 0;
            this.local$tmp$ = this.$this.closure$bytesPerSample;
            if (this.local$tmp$ === 2) {
              this.local$temp = this.local$bytes.readShortArray_le_za3lpa$(this.local$availableSamples);
              copyRangeTo(this.local$temp, 0, this.local$out, this.local$offset, this.local$temp.length);
              this.state_0 = 8;
              continue;
            }
             else {
              if (this.local$tmp$ === 3) {
                this.local$n = 0;
                this.state_0 = 3;
                continue;
              }
               else {
                invalidOp('Unsupported bytesPerSample=' + this.$this.closure$bytesPerSample);
                this.state_0 = 7;
                continue;
              }
            }

          case 3:
            if (this.local$n >= this.local$length) {
              this.state_0 = 6;
              continue;
            }

            if (this.local$bytes.available < 3) {
              return this.local$n;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 4:
            this.local$out[this.local$offset + this.local$n | 0] = Kotlin.toShort(this.local$bytes.readS24_le() >>> 8);
            this.state_0 = 5;
            continue;
          case 5:
            this.local$n++;
            this.state_0 = 3;
            continue;
          case 6:
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            return this.local$availableSamples;
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
  WAV$decodeStream$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [AudioStream]
  };
  WAV.prototype.decodeStream_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeStream_axnxby$_0(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decodeStream_axnxby$_0($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fmt = void 0;
    this.local$buffer = void 0;
    this.local$bytesPerSample = void 0;
    this.local$data = data_0;
  }
  Coroutine$decodeStream_axnxby$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$decodeStream_axnxby$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$decodeStream_axnxby$_0.prototype.constructor = Coroutine$decodeStream_axnxby$_0;
  Coroutine$decodeStream_axnxby$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fmt = {v: new WAV$Fmt()};
            this.local$buffer = {v: toAsync(MemorySyncStream())};
            this.state_0 = 2;
            this.result_0 = this.$this.parse_phffkd$(this.local$data, WAV$decodeStream$lambda(this.local$fmt, this.local$buffer), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$bytesPerSample = this.local$fmt.v.bitsPerSample / 8 | 0;
            return new WAV$decodeStream$ObjectLiteral(this.local$buffer, this.local$bytesPerSample, this.local$fmt.v.samplesPerSec, this.local$fmt.v.channels);
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
  WAV.prototype.encode_rpn7n4$ = function (data_0, out_0, filename_0, continuation_0, suspended) {
    var instance = new Coroutine$encode_rpn7n4$(this, data_0, out_0, filename_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$encode_rpn7n4$($this, data_0, out_0, filename_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$out = out_0;
    this.local$filename = filename_0;
  }
  Coroutine$encode_rpn7n4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$encode_rpn7n4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$encode_rpn7n4$.prototype.constructor = Coroutine$encode_rpn7n4$;
  Coroutine$encode_rpn7n4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = writeString(this.local$out, 'RIFF', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = write32_le(this.local$out, 36 + (this.local$data.samples.length * 2 | 0) | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.state_0 = 4;
            this.result_0 = writeString(this.local$out, 'WAVE', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.state_0 = 5;
            this.result_0 = writeString(this.local$out, 'fmt ', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 5:
            this.state_0 = 6;
            this.result_0 = write32_le(this.local$out, 16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.state_0 = 7;
            this.result_0 = write16_le(this.local$out, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 7:
            this.state_0 = 8;
            this.result_0 = write16_le(this.local$out, this.local$data.channels, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 8:
            this.state_0 = 9;
            this.result_0 = write32_le(this.local$out, this.local$data.rate, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 9:
            this.state_0 = 10;
            this.result_0 = write32_le(this.local$out, Kotlin.imul(this.local$data.rate, this.local$data.channels) * 2 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 10:
            this.state_0 = 11;
            this.result_0 = write16_le(this.local$out, 2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 11:
            this.state_0 = 12;
            this.result_0 = write16_le(this.local$out, 16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 12:
            this.state_0 = 13;
            this.result_0 = writeString(this.local$out, 'data', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 13:
            this.state_0 = 14;
            this.result_0 = write32_le(this.local$out, this.local$data.samples.length * 2 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 14:
            this.state_0 = 15;
            this.result_0 = writeShortArray_le(this.local$out, this.local$data.samples, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 15:
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
  function WAV$Fmt(formatTag, channels, samplesPerSec, avgBytesPerSec, blockAlign, bitsPerSample) {
    if (formatTag === void 0)
      formatTag = -1;
    if (channels === void 0)
      channels = 2;
    if (samplesPerSec === void 0)
      samplesPerSec = 44100;
    if (avgBytesPerSec === void 0)
      avgBytesPerSec = Kotlin.Long.ZERO;
    if (blockAlign === void 0)
      blockAlign = 0;
    if (bitsPerSample === void 0)
      bitsPerSample = 0;
    this.formatTag = formatTag;
    this.channels = channels;
    this.samplesPerSec = samplesPerSec;
    this.avgBytesPerSec = avgBytesPerSec;
    this.blockAlign = blockAlign;
    this.bitsPerSample = bitsPerSample;
  }
  WAV$Fmt.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Fmt',
    interfaces: []
  };
  WAV$Fmt.prototype.component1 = function () {
    return this.formatTag;
  };
  WAV$Fmt.prototype.component2 = function () {
    return this.channels;
  };
  WAV$Fmt.prototype.component3 = function () {
    return this.samplesPerSec;
  };
  WAV$Fmt.prototype.component4 = function () {
    return this.avgBytesPerSec;
  };
  WAV$Fmt.prototype.component5 = function () {
    return this.blockAlign;
  };
  WAV$Fmt.prototype.component6 = function () {
    return this.bitsPerSample;
  };
  WAV$Fmt.prototype.copy_9l942n$ = function (formatTag, channels, samplesPerSec, avgBytesPerSec, blockAlign, bitsPerSample) {
    return new WAV$Fmt(formatTag === void 0 ? this.formatTag : formatTag, channels === void 0 ? this.channels : channels, samplesPerSec === void 0 ? this.samplesPerSec : samplesPerSec, avgBytesPerSec === void 0 ? this.avgBytesPerSec : avgBytesPerSec, blockAlign === void 0 ? this.blockAlign : blockAlign, bitsPerSample === void 0 ? this.bitsPerSample : bitsPerSample);
  };
  WAV$Fmt.prototype.toString = function () {
    return 'Fmt(formatTag=' + Kotlin.toString(this.formatTag) + (', channels=' + Kotlin.toString(this.channels)) + (', samplesPerSec=' + Kotlin.toString(this.samplesPerSec)) + (', avgBytesPerSec=' + Kotlin.toString(this.avgBytesPerSec)) + (', blockAlign=' + Kotlin.toString(this.blockAlign)) + (', bitsPerSample=' + Kotlin.toString(this.bitsPerSample)) + ')';
  };
  WAV$Fmt.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.formatTag) | 0;
    result = result * 31 + Kotlin.hashCode(this.channels) | 0;
    result = result * 31 + Kotlin.hashCode(this.samplesPerSec) | 0;
    result = result * 31 + Kotlin.hashCode(this.avgBytesPerSec) | 0;
    result = result * 31 + Kotlin.hashCode(this.blockAlign) | 0;
    result = result * 31 + Kotlin.hashCode(this.bitsPerSample) | 0;
    return result;
  };
  WAV$Fmt.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.formatTag, other.formatTag) && Kotlin.equals(this.channels, other.channels) && Kotlin.equals(this.samplesPerSec, other.samplesPerSec) && Kotlin.equals(this.avgBytesPerSec, other.avgBytesPerSec) && Kotlin.equals(this.blockAlign, other.blockAlign) && Kotlin.equals(this.bitsPerSample, other.bitsPerSample)))));
  };
  function WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0) {
    return function ($receiver_0, continuation_0, suspended) {
      var instance = new Coroutine$WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0, $receiver_0, this, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$WAV$parse$lambda(closure$fmt_0, closure$dataSize_0, closure$handle_0, $receiver_0, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
    this.local$closure$fmt = closure$fmt_0;
    this.local$closure$dataSize = closure$dataSize_0;
    this.local$closure$handle = closure$handle_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$tmp$_5 = void 0;
    this.local$type = void 0;
    this.local$d2 = void 0;
    this.local$d = void 0;
    this.local$cdata = void 0;
    this.local$tmp$_6 = void 0;
    this.local$tmp$_7 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$WAV$parse$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$WAV$parse$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$WAV$parse$lambda.prototype.constructor = Coroutine$WAV$parse$lambda;
  Coroutine$WAV$parse$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$_5 = this.local$$receiver;
            this.local$type = this.local$tmp$_5.component1(), this.local$d2 = this.local$tmp$_5.component2();
            this.state_0 = 2;
            this.result_0 = this.local$d2.clone(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$d = this.result_0;
            this.local$cdata = Unit;
            if (Kotlin.equals(this.local$type, 'fmt ')) {
              this.local$tmp$ = this.local$closure$fmt;
              this.state_0 = 5;
              this.result_0 = readS16_le(this.local$d, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              if (Kotlin.equals(this.local$type, 'data')) {
                this.local$tmp$_6 = this.local$closure$dataSize.v;
                this.state_0 = 3;
                this.result_0 = this.local$d.getLength(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                break;
              }
               else {
                this.state_0 = 4;
                continue;
              }
            }

          case 3:
            this.local$tmp$_7 = this.result_0;
            this.local$closure$dataSize.v = this.local$tmp$_6.add(this.local$tmp$_7);
            this.local$cdata = this.local$d;
            this.state_0 = 4;
            continue;
          case 4:
            this.state_0 = 11;
            continue;
          case 5:
            this.local$tmp$.formatTag = this.result_0;
            this.local$tmp$_0 = this.local$closure$fmt;
            this.state_0 = 6;
            this.result_0 = readS16_le(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.local$tmp$_0.channels = this.result_0;
            this.local$tmp$_1 = this.local$closure$fmt;
            this.state_0 = 7;
            this.result_0 = readS32_le(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 7:
            this.local$tmp$_1.samplesPerSec = this.result_0;
            this.local$tmp$_2 = this.local$closure$fmt;
            this.state_0 = 8;
            this.result_0 = readU32_le(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 8:
            this.local$tmp$_2.avgBytesPerSec = this.result_0;
            this.local$tmp$_3 = this.local$closure$fmt;
            this.state_0 = 9;
            this.result_0 = readS16_le(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 9:
            this.local$tmp$_3.blockAlign = this.result_0;
            this.local$tmp$_4 = this.local$closure$fmt;
            this.state_0 = 10;
            this.result_0 = readS16_le(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 10:
            this.local$tmp$_4.bitsPerSample = this.result_0;
            this.local$cdata = this.local$closure$fmt;
            this.state_0 = 11;
            continue;
          case 11:
            return this.local$closure$handle(new WAV$ProcessedChunk(this.local$$receiver.type, this.local$$receiver.data, this.local$cdata));
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
  WAV.prototype.parse_phffkd$ = function (data_0, handle_0, continuation_0, suspended) {
    var instance = new Coroutine$parse_phffkd$(this, data_0, handle_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$parse_phffkd$($this, data_0, handle_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$fmt = void 0;
    this.local$dataSize = void 0;
    this.local$data = data_0;
    this.local$handle = handle_0;
  }
  Coroutine$parse_phffkd$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$parse_phffkd$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$parse_phffkd$.prototype.constructor = Coroutine$parse_phffkd$;
  Coroutine$parse_phffkd$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$fmt = new WAV$Fmt();
            this.local$dataSize = {v: Kotlin.Long.ZERO};
            this.state_0 = 2;
            this.result_0 = this.$this.riff_9bjwaz$(this.local$data, WAV$parse$lambda(this.local$fmt, this.local$dataSize, this.local$handle), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$fmt.formatTag < 0)
              invalidOp("Couldn't find RIFF 'fmt ' chunk");
            return new AudioFormat$Info(this.local$dataSize.v.multiply(Kotlin.Long.fromInt(1000)).multiply(Kotlin.Long.fromInt(1000)).div(this.local$fmt.avgBytesPerSec), this.local$fmt.channels);
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
  WAV.prototype.riff_9bjwaz$ = function (data_0, handler_0, continuation_0, suspended) {
    var instance = new Coroutine$riff_9bjwaz$(this, data_0, handler_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$riff_9bjwaz$($this, data_0, handler_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$s2 = void 0;
    this.local$magic = void 0;
    this.local$length = void 0;
    this.local$magic2 = void 0;
    this.local$s = void 0;
    this.local$type = void 0;
    this.local$size = void 0;
    this.local$d = void 0;
    this.local$data = data_0;
    this.local$handler = handler_0;
  }
  Coroutine$riff_9bjwaz$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$riff_9bjwaz$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$riff_9bjwaz$.prototype.constructor = Coroutine$riff_9bjwaz$;
  Coroutine$riff_9bjwaz$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$data.clone(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$s2 = this.result_0;
            this.state_0 = 3;
            this.result_0 = readString_0(this.local$s2, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$magic = this.result_0;
            this.state_0 = 4;
            this.result_0 = readS32_le(this.local$s2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 4:
            this.local$length = this.result_0;
            this.state_0 = 5;
            this.result_0 = readString_0(this.local$s2, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 5:
            this.local$magic2 = this.result_0;
            if (!Kotlin.equals(this.local$magic, 'RIFF'))
              invalidOp("Not a RIFF file but '" + this.local$magic + "'");
            if (!Kotlin.equals(this.local$magic2, 'WAVE'))
              invalidOp('Not a RIFF + WAVE file');
            this.state_0 = 6;
            this.result_0 = readStream(this.local$s2, this.local$length - 4 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 6:
            this.local$s = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = this.local$s.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 8:
            if (!!this.result_0) {
              this.state_0 = 14;
              continue;
            }
             else {
              this.state_0 = 9;
              continue;
            }

          case 9:
            this.state_0 = 10;
            this.result_0 = readString_0(this.local$s, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 10:
            this.local$type = this.result_0;
            this.state_0 = 11;
            this.result_0 = readS32_le(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 11:
            this.local$size = this.result_0;
            this.state_0 = 12;
            this.result_0 = readStream(this.local$s, this.local$size, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 12:
            this.local$d = this.result_0;
            this.state_0 = 13;
            this.result_0 = await_0(this.local$handler, new WAV$Chunk(this.local$type, this.local$d), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 13:
            this.state_0 = 7;
            continue;
          case 14:
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
  WAV.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'WAV',
    interfaces: [AudioFormat]
  };
  var WAV_instance = null;
  function WAV_getInstance() {
    if (WAV_instance === null) {
      new WAV();
    }
    return WAV_instance;
  }
  function toWav($receiver, continuation) {
    return WAV_getInstance().encodeToByteArray_tdqliv$($receiver, void 0, void 0, continuation);
  }
  function nativeSoundProvider$lambda() {
    return NativeNativeSoundProvider_getInstance().instance;
  }
  var nativeSoundProvider;
  function get_nativeSoundProvider() {
    new Kotlin.PropertyMetadata('nativeSoundProvider');
    return nativeSoundProvider.value;
  }
  function NativeSoundProvider() {
  }
  NativeSoundProvider.prototype.init = function (continuation) {
    return Unit;
  };
  NativeSoundProvider.prototype.createSound_fqrh44$ = function (data, continuation) {
    return new NativeSound();
  };
  NativeSoundProvider.prototype.createSound_phxig4$ = function (file_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_phxig4$(this, file_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_phxig4$($this, file_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
  }
  Coroutine$createSound_phxig4$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_phxig4$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_phxig4$.prototype.constructor = Coroutine$createSound_phxig4$;
  Coroutine$createSound_phxig4$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$file.read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_fqrh44$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0;
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
  NativeSoundProvider.prototype.createSound_35xt9g$$default = function (data_0, formats_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_35xt9g$$default(this, data_0, formats_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_35xt9g$$default($this, data_0, formats_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$formats = formats_0;
  }
  Coroutine$createSound_35xt9g$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_35xt9g$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_35xt9g$$default.prototype.constructor = Coroutine$createSound_35xt9g$$default;
  Coroutine$createSound_35xt9g$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$formats.encodeToByteArray_tdqliv$(this.local$data, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_fqrh44$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0;
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
  NativeSoundProvider.prototype.createSound_35xt9g$ = function (data, formats, continuation, callback$default) {
    if (formats === void 0)
      formats = defaultAudioFormats;
    return callback$default ? callback$default(data, formats, continuation) : this.createSound_35xt9g$$default(data, formats, continuation);
  };
  NativeSoundProvider.prototype.play_b8gm0x$ = function (stream, continuation) {
    return Unit;
  };
  NativeSoundProvider.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NativeSoundProvider',
    interfaces: [AsyncDependency]
  };
  function DummyNativeSoundProvider() {
    NativeSoundProvider.call(this);
  }
  DummyNativeSoundProvider.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DummyNativeSoundProvider',
    interfaces: [NativeSoundProvider]
  };
  function NativeSound() {
    this.lengthInMs_r0ixea$_0 = Kotlin.Long.ZERO;
  }
  Object.defineProperty(NativeSound.prototype, 'lengthInMs', {
    get: function () {
      return this.lengthInMs_r0ixea$_0;
    }
  });
  NativeSound.prototype.play = function (continuation) {
  };
  NativeSound.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'NativeSound',
    interfaces: []
  };
  function readNativeSound($receiver, continuation) {
    return get_nativeSoundProvider().createSound_phxig4$($receiver, continuation);
  }
  function readNativeSoundOptimized($receiver, continuation) {
    return $receiver.vfs.readSpecial_62dmce$($receiver.path, Kotlin.getKClass(NativeSound), continuation);
  }
  function HtmlNativeSoundProviderImpl() {
    HtmlNativeSoundProviderImpl_instance = this;
  }
  HtmlNativeSoundProviderImpl.prototype.createSound_fqrh44$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_fqrh44$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_fqrh44$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 6;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$type = void 0;
    this.local$o = void 0;
    this.local$blob = void 0;
    this.local$blobURL = void 0;
    this.local$data = data_0;
  }
  Coroutine$createSound_fqrh44$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_fqrh44$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_fqrh44$.prototype.constructor = Coroutine$createSound_fqrh44$;
  Coroutine$createSound_fqrh44$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$ = [this.local$data];
            this.local$type = 'audio/mp3';
            if (this.local$type === void 0)
              this.local$type = '';
            this.local$o = {};
            this.local$o['type'] = this.local$type;
            this.local$blob = new Blob(this.local$tmp$, this.local$o);
            this.local$blobURL = URL.createObjectURL(this.local$blob);
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            this.result_0 = this.$this.createFromUrl_61zpoe$(this.local$blobURL, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
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
        if (this.state_0 === 6)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  HtmlNativeSoundProviderImpl.prototype.createFromUrl_61zpoe$ = function (url_0, continuation_0, suspended) {
    var instance = new Coroutine$createFromUrl_61zpoe$(this, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createFromUrl_61zpoe$($this, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$$receiver = void 0;
    this.local$url = url_0;
  }
  Coroutine$createFromUrl_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createFromUrl_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createFromUrl_61zpoe$.prototype.constructor = Coroutine$createFromUrl_61zpoe$;
  Coroutine$createFromUrl_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$receiver = new HtmlNativeSound(this.local$url);
            this.state_0 = 2;
            this.result_0 = this.local$$receiver.init(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            return this.local$$receiver;
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
  HtmlNativeSoundProviderImpl.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'HtmlNativeSoundProviderImpl',
    interfaces: []
  };
  var HtmlNativeSoundProviderImpl_instance = null;
  function HtmlNativeSoundProviderImpl_getInstance() {
    if (HtmlNativeSoundProviderImpl_instance === null) {
      new HtmlNativeSoundProviderImpl();
    }
    return HtmlNativeSoundProviderImpl_instance;
  }
  function HtmlNativeSoundProvider() {
    NativeSoundProvider.call(this);
  }
  HtmlNativeSoundProvider.prototype.createSound_fqrh44$ = function (data, continuation) {
    return HtmlNativeSoundProviderImpl_getInstance().createSound_fqrh44$(data, continuation);
  };
  HtmlNativeSoundProvider.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HtmlNativeSoundProvider',
    interfaces: [NativeSoundProvider]
  };
  function HtmlNativeSound(url) {
    NativeSound.call(this);
    this.url = url;
    var tmp$;
    this.audio = Kotlin.isType(tmp$ = document.createElement('audio'), HTMLAudioElement) ? tmp$ : Kotlin.throwCCE();
    this.daudio = this.audio;
    this.lengthInMs_8si7ne$_0 = Kotlin.Long.ZERO;
  }
  Object.defineProperty(HtmlNativeSound.prototype, 'lengthInMs', {
    get: function () {
      return this.lengthInMs_8si7ne$_0;
    },
    set: function (lengthInMs) {
      this.lengthInMs_8si7ne$_0 = lengthInMs;
    }
  });
  HtmlNativeSound.prototype.init = function (continuation_0, suspended) {
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
            this.result_0 = this.$this.initInternal(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.$this.lengthInMs = Kotlin.Long.fromNumber(this.$this.audio.duration * Kotlin.Long.fromInt(1000).toNumber());
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
  function HtmlNativeSound$initInternal$lambda$removeEventListeners(this$HtmlNativeSound, closure$ok, closure$error) {
    return function () {
      this$HtmlNativeSound.audio.removeEventListener('canplaythrough', closure$ok.v);
      this$HtmlNativeSound.audio.removeEventListener('error', closure$error.v);
      this$HtmlNativeSound.audio.removeEventListener('abort', closure$error.v);
    };
  }
  function HtmlNativeSound$initInternal$lambda$lambda(closure$removeEventListeners, closure$c) {
    return function (it) {
      closure$removeEventListeners();
      closure$c.resume_11rb$(Unit);
      return Unit;
    };
  }
  function HtmlNativeSound$initInternal$lambda$lambda_0(closure$removeEventListeners, closure$c) {
    return function (it) {
      closure$removeEventListeners();
      closure$c.resume_11rb$(Unit);
      return Unit;
    };
  }
  function HtmlNativeSound$initInternal$lambda$lambda_1(this$HtmlNativeSound) {
    return function (it) {
      this$HtmlNativeSound.daudio.stop();
      return Unit;
    };
  }
  function HtmlNativeSound$initInternal$lambda(this$HtmlNativeSound) {
    return function (c) {
      var ok = {v: null};
      var error = {v: null};
      var removeEventListeners = HtmlNativeSound$initInternal$lambda$removeEventListeners(this$HtmlNativeSound, ok, error);
      ok.v = HtmlNativeSound$initInternal$lambda$lambda(removeEventListeners, c);
      error.v = HtmlNativeSound$initInternal$lambda$lambda_0(removeEventListeners, c);
      this$HtmlNativeSound.audio.addEventListener('canplaythrough', ok.v);
      this$HtmlNativeSound.audio.addEventListener('error', error.v);
      this$HtmlNativeSound.audio.addEventListener('abort', error.v);
      c.onCancel_4m4org$(HtmlNativeSound$initInternal$lambda$lambda_1(this$HtmlNativeSound));
      return Unit;
    };
  }
  var CancellableContinuation_init = $module$korio_js.com.soywiz.korio.async.CancellableContinuation;
  function suspendCancellableCoroutine$lambda(closure$block) {
    return function (c) {
      closure$block(new CancellableContinuation_init(c));
      return Unit;
    };
  }
  var toEventLoop = $module$korio_js.com.soywiz.korio.async.toEventLoop_5cx0c9$;
  function suspendCoroutineEL$lambda(closure$block) {
    return function (c) {
      closure$block(toEventLoop(c));
      return Unit;
    };
  }
  function _korioSuspendCoroutine$lambda(closure$block) {
    return function (c) {
      closure$block(c);
      return Unit;
    };
  }
  var SafeContinuation_init = Kotlin.kotlin.coroutines.experimental.SafeContinuation_init_n4f53e$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  HtmlNativeSound.prototype.initInternal = function (continuation) {
    return suspendCoroutine$lambda(_korioSuspendCoroutine$lambda(suspendCoroutineEL$lambda(suspendCancellableCoroutine$lambda(HtmlNativeSound$initInternal$lambda(this)))))(continuation.facade);
  };
  function HtmlNativeSound$play$lambda$removeEventListeners(this$HtmlNativeSound, closure$done) {
    return function () {
      this$HtmlNativeSound.audio.removeEventListener('ended', closure$done.v);
      this$HtmlNativeSound.audio.removeEventListener('pause', closure$done.v);
      this$HtmlNativeSound.audio.removeEventListener('stalled', closure$done.v);
      this$HtmlNativeSound.audio.removeEventListener('error', closure$done.v);
    };
  }
  function HtmlNativeSound$play$lambda$lambda(closure$removeEventListeners, closure$c) {
    return function (it) {
      closure$removeEventListeners();
      closure$c.resume_11rb$(Unit);
      return Unit;
    };
  }
  function HtmlNativeSound$play$lambda$lambda_0(this$HtmlNativeSound) {
    return function (it) {
      this$HtmlNativeSound.daudio.stop();
      return Unit;
    };
  }
  function HtmlNativeSound$play$lambda(this$HtmlNativeSound) {
    return function (c) {
      var done = {v: null};
      var removeEventListeners = HtmlNativeSound$play$lambda$removeEventListeners(this$HtmlNativeSound, done);
      done.v = HtmlNativeSound$play$lambda$lambda(removeEventListeners, c);
      this$HtmlNativeSound.audio.addEventListener('ended', done.v);
      this$HtmlNativeSound.audio.addEventListener('pause', done.v);
      this$HtmlNativeSound.audio.addEventListener('stalled', done.v);
      this$HtmlNativeSound.audio.addEventListener('error', done.v);
      this$HtmlNativeSound.audio.play();
      c.onCancel_4m4org$(HtmlNativeSound$play$lambda$lambda_0(this$HtmlNativeSound));
      return Unit;
    };
  }
  function suspendCancellableCoroutine$lambda_0(closure$block) {
    return function (c) {
      closure$block(new CancellableContinuation_init(c));
      return Unit;
    };
  }
  function suspendCoroutineEL$lambda_0(closure$block) {
    return function (c) {
      closure$block(toEventLoop(c));
      return Unit;
    };
  }
  function _korioSuspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      closure$block(c);
      return Unit;
    };
  }
  function suspendCoroutine$lambda_0(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(c);
      closure$block(safe);
      return safe.getResult();
    };
  }
  HtmlNativeSound.prototype.play = function (continuation) {
    return suspendCoroutine$lambda_0(_korioSuspendCoroutine$lambda_0(suspendCoroutineEL$lambda_0(suspendCancellableCoroutine$lambda_0(HtmlNativeSound$play$lambda(this)))))(continuation.facade);
  };
  HtmlNativeSound.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HtmlNativeSound',
    interfaces: [AsyncDependency, NativeSound]
  };
  function HtmlNativeSoundSpecialReader() {
    VfsSpecialReader.call(this, Kotlin.getKClass(NativeSound));
  }
  HtmlNativeSoundSpecialReader.prototype.readSpecial_9oq4me$ = function (vfs_0, path_0, continuation_0, suspended) {
    var instance = new Coroutine$readSpecial_9oq4me$(this, vfs_0, path_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$readSpecial_9oq4me$($this, vfs_0, path_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
  }
  Coroutine$readSpecial_9oq4me$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$readSpecial_9oq4me$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$readSpecial_9oq4me$.prototype.constructor = Coroutine$readSpecial_9oq4me$;
  Coroutine$readSpecial_9oq4me$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (Kotlin.isType(this.local$vfs, LocalVfs)) {
              return new HtmlNativeSound(this.local$path);
            }
             else {
              if (Kotlin.isType(this.local$vfs, UrlVfs)) {
                return new HtmlNativeSound(this.local$vfs.getFullUrl_61zpoe$(this.local$path));
              }
               else {
                this.local$tmp$ = HtmlNativeSoundProviderImpl_getInstance();
                this.state_0 = 2;
                this.result_0 = this.local$vfs.get_61zpoe$(this.local$path).readBytes(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                break;
              }
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$tmp$.createSound_fqrh44$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            return this.result_0;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
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
  HtmlNativeSoundSpecialReader.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'HtmlNativeSoundSpecialReader',
    interfaces: [VfsSpecialReader]
  };
  function NativeNativeSoundProvider() {
    NativeNativeSoundProvider_instance = this;
    this.instance_tk6otk$_0 = lazy(NativeNativeSoundProvider$instance$lambda);
  }
  Object.defineProperty(NativeNativeSoundProvider.prototype, 'instance', {
    get: function () {
      var $receiver = this.instance_tk6otk$_0;
      new Kotlin.PropertyMetadata('instance');
      return $receiver.value;
    }
  });
  function NativeNativeSoundProvider$instance$lambda() {
    return new HtmlNativeSoundProvider();
  }
  NativeNativeSoundProvider.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'NativeNativeSoundProvider',
    interfaces: []
  };
  var NativeNativeSoundProvider_instance = null;
  function NativeNativeSoundProvider_getInstance() {
    if (NativeNativeSoundProvider_instance === null) {
      new NativeNativeSoundProvider();
    }
    return NativeNativeSoundProvider_instance;
  }
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korau = package$soywiz.korau || (package$soywiz.korau = {});
  var package$format = package$korau.format || (package$korau.format = {});
  package$format.AudioBuffer = AudioBuffer;
  package$format.AudioData = AudioData;
  package$format.toNativeSound_igd38k$ = toNativeSound;
  package$format.play_igd38k$ = play;
  $$importsForInline$$['korio-js'] = $module$korio_js;
  package$format.readAudioData_gecmbq$ = readAudioData;
  AudioFormat.Info = AudioFormat$Info;
  package$format.AudioFormat = AudioFormat;
  Object.defineProperty(package$format, 'defaultAudioFormats', {
    get: function () {
      return defaultAudioFormats;
    }
  });
  package$format.AudioFormats = AudioFormats;
  package$format.readSoundInfo_gecmbq$ = readSoundInfo;
  package$format.registerStandard_llp23w$ = registerStandard;
  Object.defineProperty(AudioStream, 'Companion', {
    get: AudioStream$Companion_getInstance
  });
  package$format.AudioStream = AudioStream;
  package$format.play_6v9b1u$ = play_0;
  package$format.readAudioStream_gecmbq$ = readAudioStream;
  package$format.writeAudio_fgbt5z$ = writeAudio;
  Object.defineProperty(package$format, 'MP3', {
    get: MP3_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'STEREO', {
    get: MP3Base$Parser$Companion$ChannelMode$STEREO_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'JOINT_STEREO', {
    get: MP3Base$Parser$Companion$ChannelMode$JOINT_STEREO_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'DUAL_CHANNEL', {
    get: MP3Base$Parser$Companion$ChannelMode$DUAL_CHANNEL_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'SINGLE_CHANNEL', {
    get: MP3Base$Parser$Companion$ChannelMode$SINGLE_CHANNEL_getInstance
  });
  Object.defineProperty(MP3Base$Parser$Companion$ChannelMode, 'Companion', {
    get: MP3Base$Parser$Companion$ChannelMode$Companion_getInstance
  });
  MP3Base$Parser$Companion.prototype.ChannelMode = MP3Base$Parser$Companion$ChannelMode;
  MP3Base$Parser$Companion.prototype.Mp3Info = MP3Base$Parser$Companion$Mp3Info;
  Object.defineProperty(MP3Base$Parser, 'Companion', {
    get: MP3Base$Parser$Companion_getInstance
  });
  MP3Base.Parser = MP3Base$Parser;
  package$format.MP3Base = MP3Base;
  Object.defineProperty(package$format, 'OGG', {
    get: OGG_getInstance
  });
  Object.defineProperty(OggBase, 'PacketTypes', {
    get: OggBase$PacketTypes_getInstance
  });
  package$format.OggBase = OggBase;
  WAV.prototype.Chunk = WAV$Chunk;
  WAV.prototype.ProcessedChunk = WAV$ProcessedChunk;
  WAV.prototype.Fmt = WAV$Fmt;
  Object.defineProperty(package$format, 'WAV', {
    get: WAV_getInstance
  });
  package$format.toWav_igd38k$ = toWav;
  var package$sound = package$korau.sound || (package$korau.sound = {});
  Object.defineProperty(package$sound, 'nativeSoundProvider', {
    get: get_nativeSoundProvider
  });
  package$sound.NativeSoundProvider = NativeSoundProvider;
  package$sound.DummyNativeSoundProvider = DummyNativeSoundProvider;
  package$sound.NativeSound = NativeSound;
  package$sound.readNativeSound_93ma6j$ = readNativeSound;
  package$sound.readNativeSoundOptimized_93ma6j$ = readNativeSoundOptimized;
  Object.defineProperty(package$korau, 'HtmlNativeSoundProviderImpl', {
    get: HtmlNativeSoundProviderImpl_getInstance
  });
  package$korau.HtmlNativeSoundProvider = HtmlNativeSoundProvider;
  package$korau.HtmlNativeSound = HtmlNativeSound;
  package$korau.HtmlNativeSoundSpecialReader = HtmlNativeSoundSpecialReader;
  Object.defineProperty(package$sound, 'NativeNativeSoundProvider', {
    get: NativeNativeSoundProvider_getInstance
  });
  defaultAudioFormats = new AudioFormats();
  nativeSoundProvider = lazy(nativeSoundProvider$lambda);
  Kotlin.defineModule('korau-js', _);
  return _;
}));
