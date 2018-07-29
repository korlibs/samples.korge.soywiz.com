(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'kmem-js', 'korio-js', 'kds-js', 'kotlinx-coroutines-core', 'klock-js', 'klogger-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('kmem-js'), require('korio-js'), require('kds-js'), require('kotlinx-coroutines-core'), require('klock-js'), require('klogger-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'korau-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korau-js'.");
    }
    if (typeof this['kmem-js'] === 'undefined') {
      throw new Error("Error loading module 'korau-js'. Its dependency 'kmem-js' was not found. Please, check whether 'kmem-js' is loaded prior to 'korau-js'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'korau-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korau-js'.");
    }
    if (typeof this['kds-js'] === 'undefined') {
      throw new Error("Error loading module 'korau-js'. Its dependency 'kds-js' was not found. Please, check whether 'kds-js' is loaded prior to 'korau-js'.");
    }
    if (typeof this['kotlinx-coroutines-core'] === 'undefined') {
      throw new Error("Error loading module 'korau-js'. Its dependency 'kotlinx-coroutines-core' was not found. Please, check whether 'kotlinx-coroutines-core' is loaded prior to 'korau-js'.");
    }
    if (typeof this['klock-js'] === 'undefined') {
      throw new Error("Error loading module 'korau-js'. Its dependency 'klock-js' was not found. Please, check whether 'klock-js' is loaded prior to 'korau-js'.");
    }
    if (typeof this['klogger-js'] === 'undefined') {
      throw new Error("Error loading module 'korau-js'. Its dependency 'klogger-js' was not found. Please, check whether 'klogger-js' is loaded prior to 'korau-js'.");
    }
    root['korau-js'] = factory(typeof this['korau-js'] === 'undefined' ? {} : this['korau-js'], kotlin, this['kmem-js'], this['korio-js'], this['kds-js'], this['kotlinx-coroutines-core'], this['klock-js'], this['klogger-js']);
  }
}(this, function (_, Kotlin, $module$kmem_js, $module$korio_js, $module$kds_js, $module$kotlinx_coroutines_core, $module$klock_js, $module$klogger_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var copyOf = Kotlin.kotlin.collections.copyOf_m2jy6x$;
  var arraycopy = $module$kmem_js.com.soywiz.kmem.arraycopy_ai5qaq$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var invalidOp = $module$korio_js.com.soywiz.korio.error.invalidOp_61zpoe$;
  var L0 = Kotlin.Long.ZERO;
  var Extra = $module$kds_js.com.soywiz.kds.Extra;
  var Extra$Mixin = $module$kds_js.com.soywiz.kds.Extra.Mixin;
  var L1000 = Kotlin.Long.fromInt(1000);
  var MemorySyncStream = $module$korio_js.com.soywiz.korio.stream.MemorySyncStream_fqrh44$;
  var toAsync = $module$korio_js.com.soywiz.korio.stream.toAsync_ucmi9i$;
  var toByteArray = $module$korio_js.com.soywiz.korio.stream.toByteArray_ucmi9i$;
  var toSet = Kotlin.kotlin.collections.toSet_7wnvza$;
  var Unit = Kotlin.kotlin.Unit;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var Throwable = Error;
  var PathInfo = $module$korio_js.com.soywiz.korio.file.PathInfo;
  var get_extensionLC = $module$korio_js.com.soywiz.korio.file.get_extensionLC_hsf53c$;
  var UnsupportedOperationException_init = Kotlin.kotlin.UnsupportedOperationException_init_pdl1vj$;
  var Kind_INTERFACE = Kotlin.Kind.INTERFACE;
  var LinkedList_init = $module$kds_js.com.soywiz.kds.LinkedList_init_287e2$;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var VfsOpenMode = $module$korio_js.com.soywiz.korio.file.VfsOpenMode;
  var get_basename = $module$korio_js.com.soywiz.korio.file.get_basename_hsf53c$;
  var await_0 = $module$korio_js.com.soywiz.korio.async.await_7zc599$;
  var readStream = $module$korio_js.com.soywiz.korio.stream.readStream_50x9bh$;
  var readBytes = $module$korio_js.com.soywiz.korio.stream.readBytes_a0g59h$;
  var getu = $module$korio_js.com.soywiz.korio.util.getu_mrm5p$;
  var L1000000 = Kotlin.Long.fromInt(1000000);
  var openSync = $module$korio_js.com.soywiz.korio.stream.openSync_m1iwyb$;
  var readString = $module$korio_js.com.soywiz.korio.stream.readString_6ey4ts$;
  var equals = Kotlin.equals;
  var readString_0 = $module$korio_js.com.soywiz.korio.stream.readString_4xit9n$;
  var readU8 = $module$korio_js.com.soywiz.korio.stream.readU8_yjldv$;
  var extract = $module$kmem_js.com.soywiz.kmem.extract_dqglrj$;
  var to = Kotlin.kotlin.to_ujzrz7$;
  var toMap = Kotlin.kotlin.collections.toMap_6hr0sd$;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  var error = $module$korio_js.com.soywiz.korio.error;
  var extract_0 = $module$kmem_js.com.soywiz.kmem.extract_e4yvb3$;
  var toInt = Kotlin.kotlin.text.toInt_pdl1vz$;
  var format = $module$korio_js.com.soywiz.korio.lang.format_e33kwl$;
  var ensureNotNull = Kotlin.ensureNotNull;
  var mapOf = Kotlin.kotlin.collections.mapOf_qfcya0$;
  var hasAvailable = $module$korio_js.com.soywiz.korio.stream.hasAvailable_g5ykjz$;
  var readS8 = $module$korio_js.com.soywiz.korio.stream.readS8_yjldv$;
  var readS64_le = $module$korio_js.com.soywiz.korio.stream.readS64_le_yjldv$;
  var readS32_le = $module$korio_js.com.soywiz.korio.stream.readS32_le_yjldv$;
  var until = Kotlin.kotlin.ranges.until_dqglrj$;
  var FastByteArrayInputStream = $module$korio_js.com.soywiz.korio.stream.FastByteArrayInputStream;
  var toShort = Kotlin.toShort;
  var writeString = $module$korio_js.com.soywiz.korio.stream.writeString_wczyte$;
  var write32_le = $module$korio_js.com.soywiz.korio.stream.write32_le_1j05bi$;
  var write16_le = $module$korio_js.com.soywiz.korio.stream.write16_le_1j05bi$;
  var writeShortArray_le = $module$korio_js.com.soywiz.korio.stream.writeShortArray_le_axfcu2$;
  var readS16_le = $module$korio_js.com.soywiz.korio.stream.readS16_le_yjldv$;
  var readU32_le = $module$korio_js.com.soywiz.korio.stream.readU32_le_yjldv$;
  var rangeTo = Kotlin.kotlin.ranges.rangeTo_38ydlf$;
  var contains = Kotlin.kotlin.ranges.contains_x0ackb$;
  var delayNextFrame = $module$korio_js.com.soywiz.korio.async.delayNextFrame_qdnslq$;
  var asyncImmediately = $module$korio_js.com.soywiz.korio.async.asyncImmediately_zctz99$;
  var klock = $module$klock_js.com.soywiz.klock;
  var CancellationException = $module$kotlinx_coroutines_core.kotlinx.coroutines.CancellationException;
  var launchImmediately = $module$korio_js.com.soywiz.korio.async.launchImmediately_vruxnc$;
  var LocalVfs = $module$korio_js.com.soywiz.korio.file.std.LocalVfs;
  var UrlVfs = $module$korio_js.com.soywiz.korio.file.std.UrlVfs;
  var Logger = $module$klogger_js.com.soywiz.klogger.Logger;
  var L100 = Kotlin.Long.fromInt(100);
  var delayNextFrame_0 = $module$korio_js.com.soywiz.korio.async.delayNextFrame;
  var Cancellable = $module$korio_js.com.soywiz.korio.lang.Cancellable;
  var Exception_init = Kotlin.kotlin.Exception_init_pdl1vj$;
  var get_uniVfs = $module$korio_js.com.soywiz.korio.file.std.get_uniVfs_pdl1vz$;
  var Job = $module$kotlinx_coroutines_core.kotlinx.coroutines.Job_5dx9e$;
  var CompletableDeferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.CompletableDeferred_xptg6w$;
  var Deferred = $module$kotlinx_coroutines_core.kotlinx.coroutines.Deferred;
  var throwCCE = Kotlin.throwCCE;
  var throwUPAE = Kotlin.throwUPAE;
  var lazy = Kotlin.kotlin.lazy_klfg04$;
  var delay = $module$korio_js.com.soywiz.korio.async.delay_boqi9f$;
  var kotlin_js_internal_ShortCompanionObject = Kotlin.kotlin.js.internal.ShortCompanionObject;
  var Queue = $module$kds_js.com.soywiz.kds.Queue;
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
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.prototype = Object.create(NativeSoundChannel.prototype);
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.prototype.constructor = NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral;
  NativeSoundProvider$createSound$ObjectLiteral.prototype = Object.create(NativeSound.prototype);
  NativeSoundProvider$createSound$ObjectLiteral.prototype.constructor = NativeSoundProvider$createSound$ObjectLiteral;
  DummyNativeSoundProvider.prototype = Object.create(NativeSoundProvider.prototype);
  DummyNativeSoundProvider.prototype.constructor = DummyNativeSoundProvider;
  HtmlNativeSoundProvider.prototype = Object.create(NativeSoundProvider.prototype);
  HtmlNativeSoundProvider.prototype.constructor = HtmlNativeSoundProvider;
  MediaNativeSound$play$ObjectLiteral.prototype = Object.create(NativeSoundChannel.prototype);
  MediaNativeSound$play$ObjectLiteral.prototype.constructor = MediaNativeSound$play$ObjectLiteral;
  MediaNativeSound.prototype = Object.create(NativeSound.prototype);
  MediaNativeSound.prototype.constructor = MediaNativeSound;
  AudioBufferNativeSound$play$ObjectLiteral.prototype = Object.create(NativeSoundChannel.prototype);
  AudioBufferNativeSound$play$ObjectLiteral.prototype.constructor = AudioBufferNativeSound$play$ObjectLiteral;
  AudioBufferNativeSound.prototype = Object.create(NativeSound.prototype);
  AudioBufferNativeSound.prototype.constructor = AudioBufferNativeSound;
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
    arraycopy(data, offset, this.buffer, this.bufferlen, len);
    this.bufferlen = this.bufferlen + len | 0;
  };
  AudioBuffer.prototype.toShortArray = function () {
    return copyOf(this.buffer, this.bufferlen);
  };
  AudioBuffer.$metadata$ = {
    kind: Kind_CLASS,
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
      arraycopy(this.this$AudioData.samples, this.cursor, out, offset, toread);
    return toread;
  };
  AudioData$toStream$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AudioStream]
  };
  AudioData.prototype.toStream = function () {
    return new AudioData$toStream$ObjectLiteral(this, this.rate, this.channels);
  };
  AudioData.prototype.toString = function () {
    return 'AudioData(rate=' + this.rate + ', channels=' + this.channels + ', samples=' + this.samples.length + ')';
  };
  AudioData.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioData',
    interfaces: []
  };
  function toNativeSound($receiver, continuation) {
    return get_nativeSoundProvider().createSound_gjpej9$($receiver, void 0, void 0, continuation);
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0.play();
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
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.local$closure$formats.decode_axnxby$(this.local$$receiver, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return (tmp$ = this.result_0) != null ? tmp$ : invalidOp("Can't decode audio file " + this.local$this$readAudioData);
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
  function readAudioData($receiver, formats, continuation) {
    if (formats === void 0)
      formats = defaultAudioFormats;
    return openUse2($receiver, void 0, readAudioData$lambda(formats, $receiver), continuation);
  }
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  function AudioFormat(exts) {
    var destination = ArrayList_init(exts.length);
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
  function AudioFormat$Info(lengthInMicroseconds, channels) {
    if (lengthInMicroseconds === void 0)
      lengthInMicroseconds = L0;
    if (channels === void 0)
      channels = 2;
    this.lengthInMicroseconds = lengthInMicroseconds;
    this.channels = channels;
    this.$delegate_q4l724$_0 = new Extra$Mixin();
    this.msLength = this.lengthInMicroseconds.div(L1000);
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
    kind: Kind_CLASS,
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
            var tmp$;
            this.state_0 = 2;
            this.result_0 = this.$this.decodeStream_axnxby$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if ((tmp$ = this.result_0) != null) {
              this.state_0 = 3;
              this.result_0 = tmp$.toData(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.result_0 = null;
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return toByteArray(this.local$out);
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
  AudioFormat.$metadata$ = {
    kind: Kind_CLASS,
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
            continue;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$format.tryReadInfo_axnxby$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
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
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              printStackTrace(e);
            }
             else
              throw e;
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
        if (this.state_0 === 7) {
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
            continue;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$format.tryReadInfo_axnxby$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
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
            continue;
          case 5:
            this.state_0 = 6;
            this.result_0 = this.local$format.decodeStream_axnxby$(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
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
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              printStackTrace(e);
            }
             else
              throw e;
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
        if (this.state_0 === 10) {
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
  AudioFormats.prototype.encode_rpn7n4$ = function (data, out, filename, continuation) {
    var tmp$;
    var ext = get_extensionLC(new PathInfo(filename));
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
      throw UnsupportedOperationException_init("Don't know how to generate file for extension '" + ext + "'");
    }
    var format = tmp$;
    return format.encode_rpn7n4$(data, out, filename, continuation);
  };
  AudioFormats.$metadata$ = {
    kind: Kind_CLASS,
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function readSoundInfo($receiver, formats, continuation) {
    if (formats === void 0)
      formats = defaultAudioFormats;
    return openUse2($receiver, void 0, readSoundInfo$lambda(formats), continuation);
  }
  function registerStandard($receiver) {
    $receiver.register_rtj1ud$([WAV_getInstance(), OGG_getInstance(), MP3_getInstance()]);
    return $receiver;
  }
  function BaseAudioStream() {
  }
  BaseAudioStream.$metadata$ = {
    kind: Kind_INTERFACE,
    simpleName: 'BaseAudioStream',
    interfaces: []
  };
  function AudioStream(rate_0, channels_0) {
    AudioStream$Companion_getInstance();
    this.rate_cfsa4z$_0 = rate_0;
    this.channels_4qtgsd$_0 = channels_0;
  }
  Object.defineProperty(AudioStream.prototype, 'rate', {
    get: function () {
      return this.rate_cfsa4z$_0;
    }
  });
  Object.defineProperty(AudioStream.prototype, 'channels', {
    get: function () {
      return this.channels_4qtgsd$_0;
    }
  });
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
            continue;
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
  function AudioStream$Companion() {
    AudioStream$Companion_instance = this;
  }
  function AudioStream$Companion$generator$ObjectLiteral(closure$gen, rate_0, channels_0) {
    this.closure$gen = closure$gen;
    AudioStream.call(this, rate_0, channels_0);
    this.chunk = new Int16Array([]);
    this.pos = 0;
    this.chunks = LinkedList_init();
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
              continue;
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
            var b = this.$this.available;
            var read = Math_0.min(this.local$length, b);
            arraycopy(this.$this.chunk, this.$this.pos, this.local$out, this.local$offset, read);
            this.$this.pos = this.$this.pos + read | 0;
            return read;
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
  AudioStream$Companion$generator$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [AudioStream]
  };
  AudioStream$Companion.prototype.generator_uu7nn5$ = function (rate, channels, gen) {
    return new AudioStream$Companion$generator$ObjectLiteral(gen, rate, channels);
  };
  AudioStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
    simpleName: 'AudioStream',
    interfaces: [BaseAudioStream]
  };
  function play_0($receiver, bufferSeconds, continuation) {
    if (bufferSeconds === void 0)
      bufferSeconds = 0.1;
    return get_nativeSoundProvider().play_ptyh8e$($receiver, bufferSeconds, continuation);
  }
  function play_1($receiver, bufferSeconds, continuation) {
    if (bufferSeconds === void 0)
      bufferSeconds = 0.1;
    return get_nativeSoundProvider().play_ptyh8e$($receiver, bufferSeconds, continuation);
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
            this.result_0 = this.local$$receiver.open_tiaunm$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$formats.decodeStream_axnxby$(this.result_0, this);
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
            this.result_0 = this.local$closure$formats.encode_rpn7n4$(this.local$closure$data, this.local$$receiver, get_basename(this.local$this$writeAudio), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
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
  function writeAudio($receiver, data, formats, continuation) {
    if (formats === void 0)
      formats = defaultAudioFormats;
    return openUse2($receiver, VfsOpenMode.CREATE_OR_TRUNCATE, writeAudio$lambda(formats, data, $receiver), continuation);
  }
  function openUse2($receiver_0, mode_0, callback_0, continuation_0, suspended) {
    var instance = new Coroutine$openUse2($receiver_0, mode_0, callback_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$openUse2($receiver_0, mode_0, callback_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 8;
    this.local$s = void 0;
    this.local$$receiver = $receiver_0;
    this.local$mode = mode_0;
    this.local$callback = callback_0;
  }
  Coroutine$openUse2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$openUse2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$openUse2.prototype.constructor = Coroutine$openUse2;
  Coroutine$openUse2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$mode === void 0)
              this.local$mode = VfsOpenMode.READ;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.open_tiaunm$(this.local$mode, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.local$s = this.result_0;
            this.exceptionState_0 = 5;
            this.state_0 = 2;
            this.result_0 = await_0(this.local$callback, this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.exceptionState_0 = 8;
            this.finallyPath_0 = [3];
            this.state_0 = 6;
            this.$returnValue = this.result_0;
            continue;
          case 3:
            return this.$returnValue;
          case 4:
            return;
          case 5:
            this.finallyPath_0 = [8];
            this.state_0 = 6;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = this.local$s.close(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = this.finallyPath_0.shift();
            continue;
          case 8:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 8) {
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
  function MP3() {
    MP3_instance = this;
    MP3Base.call(this);
  }
  MP3.$metadata$ = {
    kind: Kind_OBJECT,
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
    this.local$parser = void 0;
    this.local$data = data_0;
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
            var tmp$, tmp$_0, tmp$_1;
            this.exceptionState_0 = 2;
            this.local$parser = new MP3Base$Parser(this.local$data);
            this.state_0 = 1;
            this.result_0 = this.local$parser.getDurationEstimate(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            var duration = this.result_0;
            return new AudioFormat$Info(duration, (tmp$_1 = (tmp$_0 = (tmp$ = this.local$parser.info) != null ? tmp$.channelMode : null) != null ? tmp$_0.channels : null) != null ? tmp$_1 : 2);
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return null;
            }
             else {
              throw e;
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
            this.$this.data.position = L0;
            this.state_0 = 2;
            this.result_0 = this.$this.data.clone(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$fd = this.result_0;
            this.local$duration = L0;
            this.state_0 = 3;
            this.result_0 = readStream(this.local$fd, 100, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = this.$this.skipID3v2Tag_0(this.result_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
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
            continue;
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
            continue;
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
              continue;
            }
             else {
              if (equals(readString(openSync(this.local$block2), 3), 'TAG')) {
                this.local$fd.position = this.local$fd.position.add(Kotlin.Long.fromInt(118));
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
            this.local$duration = this.local$duration.add(Kotlin.Long.fromInt(this.local$info.samples).multiply(L1000000).div(Kotlin.Long.fromInt(this.local$info.samplingRate)));
            this.state_0 = 12;
            continue;
          case 12:
            if (this.local$info != null && this.local$use_cbr_estimate) {
              this.state_0 = 13;
              this.result_0 = this.$this.estimateDuration_0(this.local$info.bitrate, this.local$info.channelMode.channels, this.local$offset.toInt(), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var dataSize = this.result_0.subtract(Kotlin.Long.fromInt(this.local$offset));
            return dataSize.multiply(Kotlin.Long.fromInt(2 / this.local$channels | 0)).multiply(L1000000).div(Kotlin.Long.fromInt(this.local$kbps));
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
    this.local$flag_footer_present = void 0;
    this.local$z0 = void 0;
    this.local$z1 = void 0;
    this.local$z2 = void 0;
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$b = this.result_0;
            this.state_0 = 3;
            this.result_0 = readString_0(this.local$b, 3, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            if (equals(this.result_0, 'ID3')) {
              this.state_0 = 4;
              this.result_0 = readU8(this.local$b, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 12;
              continue;
            }

          case 4:
            var id3v2_major_version = this.result_0;
            this.state_0 = 5;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var id3v2_minor_version = this.result_0;
            this.state_0 = 6;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var id3v2_flags = this.result_0;
            var flag_unsynchronisation = extract(id3v2_flags, 7);
            var flag_extended_header = extract(id3v2_flags, 6);
            var flag_experimental_ind = extract(id3v2_flags, 5);
            this.local$flag_footer_present = extract(id3v2_flags, 4);
            this.state_0 = 7;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$z0 = this.result_0;
            this.state_0 = 8;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$z1 = this.result_0;
            this.state_0 = 9;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.local$z2 = this.result_0;
            this.state_0 = 10;
            this.result_0 = readU8(this.local$b, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            var z3 = this.result_0;
            if ((this.local$z0 & 128) === 0 && (this.local$z1 & 128) === 0 && (this.local$z2 & 128) === 0 && (z3 & 128) === 0) {
              var header_size = 10;
              var tag_size = Kotlin.imul(this.local$z0 & 127, 2097152) + ((this.local$z1 & 127) * 16384 | 0) + ((this.local$z2 & 127) * 128 | 0) + (z3 & 127) | 0;
              var footer_size = this.local$flag_footer_present ? 10 : 0;
              return Kotlin.Long.fromInt(header_size + tag_size + footer_size | 0);
            }
             else {
              this.state_0 = 11;
              continue;
            }

          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            return L0;
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
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
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
      default:throwISE('No enum constant com.soywiz.korau.format.MP3Base.Parser.Companion.ChannelMode.' + name);
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
    kind: Kind_CLASS,
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
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    var b0 = getu(f4, 0);
    var b1 = getu(f4, 1);
    var b2 = getu(f4, 2);
    var b3 = getu(f4, 3);
    if (b0 !== 255)
      error.invalidOp;
    var version = this.versions[extract_0(b1, 3, 2)];
    var simple_version = equals(version, '2.5') ? 2 : toInt(version);
    var layer = this.layers[extract_0(b1, 1, 2)];
    var protection_bit = extract_0(b1, 0, 1);
    var bitrate_key = format('V%dL%d', [simple_version, layer]);
    var bitrate_idx = extract_0(b2, 4, 4);
    var bitrate = (tmp$_0 = (tmp$ = this.bitrates.get_11rb$(bitrate_key)) != null ? tmp$[bitrate_idx] : null) != null ? tmp$_0 : 0;
    var sample_rate = (tmp$_2 = (tmp$_1 = this.sampleRates.get_11rb$(version)) != null ? tmp$_1[extract_0(b2, 2, 2)] : null) != null ? tmp$_2 : 0;
    var padding_bit = extract_0(b2, 1, 1);
    var private_bit = extract_0(b2, 0, 1);
    var channelMode = ensureNotNull(MP3Base$Parser$Companion$ChannelMode$Companion_getInstance().BY_ID.get_11rb$(extract_0(b3, 6, 2)));
    var mode_extension_bits = extract_0(b3, 4, 2);
    var copyright_bit = extract_0(b3, 3, 1);
    var original_bit = extract_0(b3, 2, 1);
    var emphasis = extract_0(b3, 0, 2);
    return new MP3Base$Parser$Companion$Mp3Info(version, layer, bitrate, sample_rate, channelMode, this.framesize_0(layer, bitrate, sample_rate, padding_bit), (tmp$_4 = (tmp$_3 = this.samples.get_11rb$(simple_version)) != null ? tmp$_3.get_11rb$(layer) : null) != null ? tmp$_4 : 0);
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
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
    simpleName: 'Parser',
    interfaces: []
  };
  MP3Base.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MP3Base',
    interfaces: [AudioFormat]
  };
  function OGG() {
    OGG_instance = this;
    OggBase.call(this);
  }
  OGG.$metadata$ = {
    kind: Kind_OBJECT,
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
            continue;
          case 1:
            return this.result_0;
          case 2:
            this.exceptionState_0 = 5;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              return null;
            }
             else {
              throw e;
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
    this.local$bos = void 0;
    this.local$eos = void 0;
    this.local$gpos = void 0;
    this.local$destination = void 0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$destination_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$info = void 0;
    this.local$packetType = void 0;
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
            var brnom = 160000;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = hasAvailable(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
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
            continue;
          case 5:
            var magic = this.result_0;
            if (!equals(magic, 'OggS\x00'))
              invalidOp('Not an OGG file');
            this.state_0 = 6;
            this.result_0 = readS8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            var type = this.result_0;
            var cont = extract(type, 0);
            this.local$bos = extract(type, 1);
            this.local$eos = extract(type, 2);
            this.state_0 = 7;
            this.result_0 = readS64_le(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$gpos = this.result_0;
            this.state_0 = 8;
            this.result_0 = readS32_le(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            var sn = this.result_0;
            this.state_0 = 9;
            this.result_0 = readS32_le(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            var psn = this.result_0;
            this.state_0 = 10;
            this.result_0 = readS32_le(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            var chk = this.result_0;
            this.state_0 = 11;
            this.result_0 = readU8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            var pseg = this.result_0;
            var $receiver = until(0, pseg);
            this.local$destination = ArrayList_init(collectionSizeOrDefault($receiver, 10));
            this.local$tmp$ = $receiver.iterator();
            this.state_0 = 12;
            continue;
          case 12:
            if (!this.local$tmp$.hasNext()) {
              this.state_0 = 14;
              continue;
            }

            var item = this.local$tmp$.next();
            this.local$tmp$_0 = this.local$destination.add_11rb$;
            this.state_0 = 13;
            this.result_0 = readU8(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.local$tmp$_0.call(this.local$destination, this.result_0);
            this.state_0 = 12;
            continue;
          case 14:
            var psizs = this.local$destination;
            this.local$destination_0 = ArrayList_init(collectionSizeOrDefault(psizs, 10));
            this.local$tmp$_1 = psizs.iterator();
            this.state_0 = 15;
            continue;
          case 15:
            if (!this.local$tmp$_1.hasNext()) {
              this.state_0 = 17;
              continue;
            }

            var item_0 = this.local$tmp$_1.next();
            this.local$tmp$_2 = this.local$destination_0.add_11rb$;
            this.state_0 = 16;
            this.result_0 = readStream(this.local$s, item_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 16:
            this.local$tmp$_2.call(this.local$destination_0, this.result_0);
            this.state_0 = 15;
            continue;
          case 17:
            var pages = this.local$destination_0;
            if (this.local$bos) {
              this.local$info = pages.get_za3lpa$(0);
              this.state_0 = 18;
              this.result_0 = readU8(this.local$info, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
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
            continue;
          case 19:
            if (!equals(this.result_0, 'vorbis'))
              invalidOp('Unsupported OGG vorbis file');
            switch (this.local$packetType) {
              case 1:
                this.state_0 = 20;
                this.result_0 = readS32_le(this.local$info, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 3:
                this.state_0 = 27;
                continue;
              case 5:
                this.state_0 = 27;
                continue;
            }

          case 20:
            var vver = this.result_0;
            this.state_0 = 21;
            this.result_0 = readU8(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 21:
            this.local$channels = this.result_0;
            this.state_0 = 22;
            this.result_0 = readS32_le(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 22:
            this.local$sampleRate = this.result_0;
            this.state_0 = 23;
            this.result_0 = readS32_le(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 23:
            var brmax = this.result_0;
            this.state_0 = 24;
            this.result_0 = readS32_le(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 24:
            brnom = this.result_0;
            this.state_0 = 25;
            this.result_0 = readS32_le(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 25:
            var brmin = this.result_0;
            this.state_0 = 26;
            this.result_0 = readU8(this.local$info, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 26:
            var bsinfo = this.result_0;
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
  function OggBase$PacketTypes() {
    OggBase$PacketTypes_instance = this;
    this.ID_HEADER = 1;
    this.COMMENT_HEADER = 3;
    this.SETUP_HEADER = 5;
  }
  OggBase$PacketTypes.$metadata$ = {
    kind: Kind_OBJECT,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    kind: Kind_CLASS,
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
    this.local$ignoreErrors$result = void 0;
    this.local$data = data_0;
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
            this.state_0 = 1;
            continue;
          case 1:
            this.exceptionState_0 = 3;
            this.state_0 = 2;
            this.result_0 = this.$this.parse_phffkd$(this.local$data, WAV$tryReadInfo$lambda$lambda, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.local$ignoreErrors$result = this.result_0;
            this.exceptionState_0 = 7;
            this.state_0 = 5;
            continue;
          case 3:
            this.exceptionState_0 = 7;
            var e = this.exception_0;
            if (Kotlin.isType(e, Throwable)) {
              if (false)
                printStackTrace(e);
              this.local$ignoreErrors$result = null;
              this.exceptionState_0 = 3;
              this.state_0 = 6;
              continue;
            }
             else {
              throw e;
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
        if (this.state_0 === 7) {
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
  function WAV$decodeStream$lambda(closure$fmt, closure$buffer) {
    return function (it) {
      var extra = it.extra;
      if (Kotlin.isType(extra, WAV$Fmt))
        closure$fmt.v = extra;
      if (equals(it.type, 'data')) {
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
    this.local$bytes = void 0;
    this.local$availableSamples = void 0;
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$bytes = new FastByteArrayInputStream(this.result_0);
            this.local$availableSamples = this.local$bytes.length / this.$this.closure$bytesPerSample | 0;
            switch (this.$this.closure$bytesPerSample) {
              case 2:
                var temp = this.local$bytes.readShortArray_le_za3lpa$(this.local$availableSamples);
                arraycopy(temp, 0, this.local$out, this.local$offset, temp.length);
                this.state_0 = 7;
                continue;
              case 3:
                this.local$n = 0;
                this.state_0 = 3;
                continue;
              default:invalidOp('Unsupported bytesPerSample=' + this.$this.closure$bytesPerSample);
                this.state_0 = 7;
                continue;
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
            this.local$out[this.local$offset + this.local$n | 0] = toShort(this.local$bytes.readS24_le() >>> 8);
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
            return this.local$availableSamples;
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
  WAV$decodeStream$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var bytesPerSample = this.local$fmt.v.bitsPerSample / 8 | 0;
            return new WAV$decodeStream$ObjectLiteral(this.local$buffer, bytesPerSample, this.local$fmt.v.samplesPerSec, this.local$fmt.v.channels);
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
  WAV.prototype.encode_rpn7n4$ = function (data_0, out_0, filename, continuation_0, suspended) {
    var instance = new Coroutine$encode_rpn7n4$(this, data_0, out_0, filename, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$encode_rpn7n4$($this, data_0, out_0, filename, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$out = out_0;
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = write32_le(this.local$out, 36 + (this.local$data.samples.length * 2 | 0) | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 4;
            this.result_0 = writeString(this.local$out, 'WAVE', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            this.result_0 = writeString(this.local$out, 'fmt ', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.state_0 = 6;
            this.result_0 = write32_le(this.local$out, 16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 7;
            this.result_0 = write16_le(this.local$out, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = write16_le(this.local$out, this.local$data.channels, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.state_0 = 9;
            this.result_0 = write32_le(this.local$out, this.local$data.rate, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.state_0 = 10;
            this.result_0 = write32_le(this.local$out, Kotlin.imul(this.local$data.rate, this.local$data.channels) * 2 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 10:
            this.state_0 = 11;
            this.result_0 = write16_le(this.local$out, 2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            this.state_0 = 12;
            this.result_0 = write16_le(this.local$out, 16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            this.state_0 = 13;
            this.result_0 = writeString(this.local$out, 'data', void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.state_0 = 14;
            this.result_0 = write32_le(this.local$out, this.local$data.samples.length * 2 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 14:
            this.state_0 = 15;
            this.result_0 = writeShortArray_le(this.local$out, this.local$data.samples, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 15:
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
  function WAV$Fmt(formatTag, channels, samplesPerSec, avgBytesPerSec, blockAlign, bitsPerSample) {
    if (formatTag === void 0)
      formatTag = -1;
    if (channels === void 0)
      channels = 2;
    if (samplesPerSec === void 0)
      samplesPerSec = 44100;
    if (avgBytesPerSec === void 0)
      avgBytesPerSec = L0;
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
    kind: Kind_CLASS,
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
    this.local$type = void 0;
    this.local$d = void 0;
    this.local$cdata = void 0;
    this.local$tmp$_5 = void 0;
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
            this.local$type = this.local$$receiver.component1(), this.local$d2 = this.local$$receiver.component2();
            var d2 = this.local$$receiver.component2();
            this.state_0 = 2;
            this.result_0 = d2.clone(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$d = this.result_0;
            this.local$cdata = Unit;
            switch (this.local$type) {
              case 'fmt ':
                this.local$tmp$ = this.local$closure$fmt;
                this.state_0 = 4;
                this.result_0 = readS16_le(this.local$d, this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              case 'data':
                this.local$tmp$_5 = this.local$closure$dataSize.v;
                this.state_0 = 3;
                this.result_0 = this.local$d.getLength(this);
                if (this.result_0 === COROUTINE_SUSPENDED)
                  return COROUTINE_SUSPENDED;
                continue;
              default:this.state_0 = 10;
                continue;
            }

          case 3:
            this.local$closure$dataSize.v = this.local$tmp$_5.add(this.result_0);
            this.local$cdata = this.local$d;
            this.state_0 = 10;
            continue;
          case 4:
            this.local$tmp$.formatTag = this.result_0;
            this.local$tmp$_0 = this.local$closure$fmt;
            this.state_0 = 5;
            this.result_0 = readS16_le(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$tmp$_0.channels = this.result_0;
            this.local$tmp$_1 = this.local$closure$fmt;
            this.state_0 = 6;
            this.result_0 = readS32_le(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_1.samplesPerSec = this.result_0;
            this.local$tmp$_2 = this.local$closure$fmt;
            this.state_0 = 7;
            this.result_0 = readU32_le(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$tmp$_2.avgBytesPerSec = this.result_0;
            this.local$tmp$_3 = this.local$closure$fmt;
            this.state_0 = 8;
            this.result_0 = readS16_le(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$tmp$_3.blockAlign = this.result_0;
            this.local$tmp$_4 = this.local$closure$fmt;
            this.state_0 = 9;
            this.result_0 = readS16_le(this.local$d, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.local$tmp$_4.bitsPerSample = this.result_0;
            this.local$cdata = this.local$closure$fmt;
            this.state_0 = 10;
            continue;
          case 10:
            return this.local$closure$handle(new WAV$ProcessedChunk(this.local$$receiver.type, this.local$$receiver.data, this.local$cdata));
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
            this.local$dataSize = {v: L0};
            this.state_0 = 2;
            this.result_0 = this.$this.riff_9bjwaz$(this.local$data, WAV$parse$lambda(this.local$fmt, this.local$dataSize, this.local$handle), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            if (this.local$fmt.formatTag < 0)
              invalidOp("Couldn't find RIFF 'fmt ' chunk");
            return new AudioFormat$Info(this.local$dataSize.v.multiply(Kotlin.Long.fromInt(1000)).multiply(Kotlin.Long.fromInt(1000)).div(this.local$fmt.avgBytesPerSec), this.local$fmt.channels);
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
    this.local$s = void 0;
    this.local$type = void 0;
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
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$s2 = this.result_0;
            this.state_0 = 3;
            this.result_0 = readString_0(this.local$s2, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$magic = this.result_0;
            this.state_0 = 4;
            this.result_0 = readS32_le(this.local$s2, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$length = this.result_0;
            this.state_0 = 5;
            this.result_0 = readString_0(this.local$s2, 4, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            var magic2 = this.result_0;
            if (!equals(this.local$magic, 'RIFF'))
              invalidOp("Not a RIFF file but '" + this.local$magic + "'");
            if (!equals(magic2, 'WAVE'))
              invalidOp('Not a RIFF + WAVE file');
            this.state_0 = 6;
            this.result_0 = readStream(this.local$s2, this.local$length - 4 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$s = this.result_0;
            this.state_0 = 7;
            continue;
          case 7:
            this.state_0 = 8;
            this.result_0 = this.local$s.eof(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
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
            continue;
          case 10:
            this.local$type = this.result_0;
            this.state_0 = 11;
            this.result_0 = readS32_le(this.local$s, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 11:
            var size = this.result_0;
            this.state_0 = 12;
            this.result_0 = readStream(this.local$s, size, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 12:
            var d = this.result_0;
            this.state_0 = 13;
            this.result_0 = await_0(this.local$handler, new WAV$Chunk(this.local$type, d), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 13:
            this.state_0 = 7;
            continue;
          case 14:
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
  WAV.$metadata$ = {
    kind: Kind_OBJECT,
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
  function NewNativeAudioStream() {
    return new NativeAudioStream(44100);
  }
  function addSamples($receiver, samples, continuation) {
    return $receiver.addSamples_359eei$(samples, 0, samples.length, continuation);
  }
  function NativeSoundProvider() {
    this.initialized_768h90$_0 = false;
  }
  NativeSoundProvider.prototype.initOnce = function () {
    if (!this.initialized_768h90$_0) {
      this.initialized_768h90$_0 = true;
      this.init();
    }
  };
  NativeSoundProvider.prototype.init = function () {
  };
  function NativeSoundProvider$createSound$ObjectLiteral() {
    NativeSound.call(this);
  }
  function NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral(sound_0) {
    NativeSoundChannel.call(this, sound_0);
  }
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.prototype.stop = function () {
  };
  NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSoundChannel]
  };
  NativeSoundProvider$createSound$ObjectLiteral.prototype.play = function () {
    return new NativeSoundProvider$createSound$ObjectLiteral$play$ObjectLiteral(this);
  };
  NativeSoundProvider$createSound$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSound]
  };
  NativeSoundProvider.prototype.createSound_1fhb37$$default = function (data, streaming, continuation) {
    return new NativeSoundProvider$createSound$ObjectLiteral();
  };
  NativeSoundProvider.prototype.createSound_1fhb37$ = function (data, streaming, continuation, callback$default) {
    if (streaming === void 0)
      streaming = false;
    return callback$default ? callback$default(data, streaming, continuation) : this.createSound_1fhb37$$default(data, streaming, continuation);
  };
  NativeSoundProvider.prototype.createSound_52yb2k$$default = function (vfs_0, path_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_52yb2k$$default(this, vfs_0, path_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_52yb2k$$default($this, vfs_0, path_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
    this.local$streaming = streaming_0;
  }
  Coroutine$createSound_52yb2k$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_52yb2k$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_52yb2k$$default.prototype.constructor = Coroutine$createSound_52yb2k$$default;
  Coroutine$createSound_52yb2k$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$vfs.file_61zpoe$(this.local$path).read(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_1fhb37$(this.result_0, this.local$streaming, this);
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
  NativeSoundProvider.prototype.createSound_52yb2k$ = function (vfs, path, streaming, continuation, callback$default) {
    if (streaming === void 0)
      streaming = false;
    return callback$default ? callback$default(vfs, path, streaming, continuation) : this.createSound_52yb2k$$default(vfs, path, streaming, continuation);
  };
  NativeSoundProvider.prototype.createSound_1ecnpg$ = function (file, streaming, continuation) {
    if (streaming === void 0)
      streaming = false;
    return this.createSound_52yb2k$(file.vfs, file.path, streaming, continuation);
  };
  NativeSoundProvider.prototype.createSound_x9gm8m$ = function (file_0, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_x9gm8m$(this, file_0, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_x9gm8m$($this, file_0, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$file = file_0;
    this.local$streaming = streaming_0;
  }
  Coroutine$createSound_x9gm8m$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_x9gm8m$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_x9gm8m$.prototype.constructor = Coroutine$createSound_x9gm8m$;
  Coroutine$createSound_x9gm8m$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$streaming === void 0)
              this.local$streaming = false;
            this.state_0 = 2;
            this.result_0 = this.local$file.getUnderlyingUnscapedFile(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_1ecnpg$(this.result_0, this.local$streaming, this);
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
  NativeSoundProvider.prototype.createSound_gjpej9$$default = function (data_0, formats, streaming_0, continuation_0, suspended) {
    var instance = new Coroutine$createSound_gjpej9$$default(this, data_0, formats, streaming_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_gjpej9$$default($this, data_0, formats, streaming_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$streaming = streaming_0;
  }
  Coroutine$createSound_gjpej9$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_gjpej9$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_gjpej9$$default.prototype.constructor = Coroutine$createSound_gjpej9$$default;
  Coroutine$createSound_gjpej9$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = WAV_getInstance().encodeToByteArray_tdqliv$(this.local$data, void 0, void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.createSound_1fhb37$(this.result_0, this.local$streaming, this);
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
  NativeSoundProvider.prototype.createSound_gjpej9$ = function (data, formats, streaming, continuation, callback$default) {
    if (formats === void 0)
      formats = defaultAudioFormats;
    if (streaming === void 0)
      streaming = false;
    return callback$default ? callback$default(data, formats, streaming, continuation) : this.createSound_gjpej9$$default(data, formats, streaming, continuation);
  };
  function NativeSoundProvider$play$lambda$lambda(closure$stream_0, closure$bufferSeconds_0, closure$nas_0, closure$c_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NativeSoundProvider$play$lambda$lambda(closure$stream_0, closure$bufferSeconds_0, closure$nas_0, closure$c_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$NativeSoundProvider$play$lambda$lambda(closure$stream_0, closure$bufferSeconds_0, closure$nas_0, closure$c_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$stream = closure$stream_0;
    this.local$closure$bufferSeconds = closure$bufferSeconds_0;
    this.local$closure$nas = closure$nas_0;
    this.local$closure$c = closure$c_0;
    this.local$temp = void 0;
    this.local$minBuf = void 0;
  }
  Coroutine$NativeSoundProvider$play$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NativeSoundProvider$play$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NativeSoundProvider$play$lambda$lambda.prototype.constructor = Coroutine$NativeSoundProvider$play$lambda$lambda;
  Coroutine$NativeSoundProvider$play$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$temp = new Int16Array(1024);
            var nchannels = 2;
            this.local$minBuf = Kotlin.imul(this.local$closure$stream.rate, nchannels) * this.local$closure$bufferSeconds;
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.local$closure$stream.read_359eei$(this.local$temp, 0, this.local$temp.length, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            var read = this.result_0;
            this.state_0 = 4;
            this.result_0 = this.local$closure$nas.addSamples_359eei$(this.local$temp, 0, read, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 5;
            continue;
          case 5:
            if (!contains(rangeTo(this.local$minBuf, this.local$minBuf * 2), this.local$closure$nas.availableSamples)) {
              this.state_0 = 7;
              continue;
            }

            this.state_0 = 6;
            this.result_0 = delayNextFrame(this.local$closure$c.context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.state_0 = 5;
            continue;
          case 7:
            this.state_0 = 2;
            continue;
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
  function NativeSoundProvider$play$lambda$lambda_0(closure$task, closure$nas) {
    return function (it) {
      closure$task.cancel_dbl4no$();
      closure$nas.stop();
      return Unit;
    };
  }
  function NativeSoundProvider$play$lambda(closure$stream, closure$bufferSeconds) {
    return function (c) {
      var nas = NewNativeAudioStream();
      var task = asyncImmediately(c.context, void 0, NativeSoundProvider$play$lambda$lambda(closure$stream, closure$bufferSeconds, nas, c));
      nas.start();
      c.invokeOnCancellation_f05bi3$(NativeSoundProvider$play$lambda$lambda_0(task, nas));
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
  NativeSoundProvider.prototype.play_ptyh8e$$default = function (stream_0, bufferSeconds_0, continuation_0, suspended) {
    var instance = new Coroutine$play_ptyh8e$$default(this, stream_0, bufferSeconds_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$play_ptyh8e$$default($this, stream_0, bufferSeconds_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$stream = stream_0;
    this.local$bufferSeconds = bufferSeconds_0;
  }
  Coroutine$play_ptyh8e$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$play_ptyh8e$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$play_ptyh8e$$default.prototype.constructor = Coroutine$play_ptyh8e$$default;
  Coroutine$play_ptyh8e$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda(false, NativeSoundProvider$play$lambda(this.local$stream, this.local$bufferSeconds))(this);
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
  NativeSoundProvider.prototype.play_ptyh8e$ = function (stream, bufferSeconds, continuation, callback$default) {
    if (bufferSeconds === void 0)
      bufferSeconds = 0.1;
    return callback$default ? callback$default(stream, bufferSeconds, continuation) : this.play_ptyh8e$$default(stream, bufferSeconds, continuation);
  };
  NativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSoundProvider',
    interfaces: []
  };
  function DummyNativeSoundProvider() {
    NativeSoundProvider.call(this);
  }
  DummyNativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DummyNativeSoundProvider',
    interfaces: [NativeSoundProvider]
  };
  function NativeSoundChannel(sound_0) {
    this.sound = sound_0;
    this.startTime_po208j$_0 = klock.Klock.currentTimeMillisDouble();
    this.volume_jvnuhq$_0 = 1.0;
  }
  Object.defineProperty(NativeSoundChannel.prototype, 'volume', {
    get: function () {
      return this.volume_jvnuhq$_0;
    },
    set: function (volume) {
      this.volume_jvnuhq$_0 = volume;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'current', {
    get: function () {
      return klock.Klock.currentTimeMillisDouble() - this.startTime_po208j$_0;
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'total', {
    get: function () {
      return get_lengthInSeconds(this.sound);
    }
  });
  Object.defineProperty(NativeSoundChannel.prototype, 'playing', {
    get: function () {
      return this.current < this.total;
    }
  });
  function NativeSoundChannel$await$lambda(current, total) {
    return Unit;
  }
  function NativeSoundChannel$await$lambda$lambda(this$NativeSoundChannel_0, closure$progress_0, closure$c_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$NativeSoundChannel$await$lambda$lambda(this$NativeSoundChannel_0, closure$progress_0, closure$c_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$NativeSoundChannel$await$lambda$lambda(this$NativeSoundChannel_0, closure$progress_0, closure$c_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 7;
    this.local$this$NativeSoundChannel = this$NativeSoundChannel_0;
    this.local$closure$progress = closure$progress_0;
    this.local$closure$c = closure$c_0;
  }
  Coroutine$NativeSoundChannel$await$lambda$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$NativeSoundChannel$await$lambda$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$NativeSoundChannel$await$lambda$lambda.prototype.constructor = Coroutine$NativeSoundChannel$await$lambda$lambda;
  Coroutine$NativeSoundChannel$await$lambda$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 4;
            this.state_0 = 1;
            continue;
          case 1:
            if (!this.local$this$NativeSoundChannel.playing) {
              this.state_0 = 3;
              continue;
            }

            this.local$closure$progress(this.local$this$NativeSoundChannel.current, this.local$this$NativeSoundChannel.total);
            this.state_0 = 2;
            this.result_0 = delayNextFrame(this.local$closure$c.context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 2:
            this.state_0 = 1;
            continue;
          case 3:
            return this.local$closure$progress(this.local$this$NativeSoundChannel.total, this.local$this$NativeSoundChannel.total);
          case 4:
            this.exceptionState_0 = 7;
            var e = this.exception_0;
            if (Kotlin.isType(e, CancellationException)) {
              return this.local$this$NativeSoundChannel.stop(), Unit;
            }
             else {
              throw e;
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            return;
          case 7:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 7) {
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
  function NativeSoundChannel$await$lambda$lambda_0(this$NativeSoundChannel) {
    return function (it) {
      this$NativeSoundChannel.stop();
      return Unit;
    };
  }
  function NativeSoundChannel$await$lambda_0(this$NativeSoundChannel, closure$progress) {
    return function (c) {
      launchImmediately(c.context, void 0, NativeSoundChannel$await$lambda$lambda(this$NativeSoundChannel, closure$progress, c));
      c.invokeOnCancellation_f05bi3$(NativeSoundChannel$await$lambda$lambda_0(this$NativeSoundChannel));
      return Unit;
    };
  }
  function suspendCancellableCoroutine$lambda_0(closure$holdCancellability, closure$block) {
    return function (uCont) {
      var cancellable = new CancellableContinuationImpl_init(intercepted(uCont), 1);
      if (!closure$holdCancellability)
        cancellable.initCancellability();
      closure$block(cancellable);
      return cancellable.getResult();
    };
  }
  NativeSoundChannel.prototype.await_tuav61$ = function (progress_0, continuation_0, suspended) {
    var instance = new Coroutine$await_tuav61$(this, progress_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$await_tuav61$($this, progress_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$progress = progress_0;
  }
  Coroutine$await_tuav61$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$await_tuav61$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$await_tuav61$.prototype.constructor = Coroutine$await_tuav61$;
  Coroutine$await_tuav61$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$progress === void 0)
              this.local$progress = NativeSoundChannel$await$lambda;
            this.state_0 = 2;
            this.result_0 = suspendCancellableCoroutine$lambda_0(false, NativeSoundChannel$await$lambda_0(this.$this, this.local$progress))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.result_0;
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
  NativeSoundChannel.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSoundChannel',
    interfaces: []
  };
  function NativeSound() {
    this.lengthInMs_r0ixea$_0 = L0;
  }
  Object.defineProperty(NativeSound.prototype, 'lengthInMs', {
    get: function () {
      return this.lengthInMs_r0ixea$_0;
    }
  });
  function NativeSound$playAndWait$lambda(current, total) {
    return Unit;
  }
  NativeSound.prototype.playAndWait_tuav61$ = function (progress, continuation) {
    if (progress === void 0)
      progress = NativeSound$playAndWait$lambda;
    return this.play().await_tuav61$(progress, continuation);
  };
  NativeSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeSound',
    interfaces: []
  };
  function get_lengthInSeconds($receiver) {
    return $receiver.lengthInMs.toNumber() / 1000.0;
  }
  function readNativeSound($receiver, streaming, continuation) {
    if (streaming === void 0)
      streaming = false;
    return get_nativeSoundProvider().createSound_x9gm8m$($receiver, streaming, continuation);
  }
  function readNativeSoundOptimized($receiver, streaming, continuation) {
    if (streaming === void 0)
      streaming = false;
    return get_nativeSoundProvider().createSound_x9gm8m$($receiver, streaming, continuation);
  }
  function SoundUtils() {
    SoundUtils_instance = this;
  }
  SoundUtils.prototype.convertS16ToF32_r43jz4$ = function (channels, input, leftVolume, rightVolume) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var output = new Float32Array((input.length * 2 | 0) / channels | 0);
    var optimized = leftVolume === 1 && rightVolume === 1;
    switch (channels) {
      case 2:
        if (optimized) {
          for (var n = 0; n < output.length; n++)
            output[n] = input[n] / 32767.0;
        }
         else {
          for (var n_0 = 0; n_0 < output.length; n_0 += 2) {
            output[n_0 + 0 | 0] = input[n_0 + 0 | 0] / 32767.0 * leftVolume;
            output[n_0 + 1 | 0] = input[n_0 + 1 | 0] / 32767.0 * rightVolume;
          }
        }

        break;
      case 1:
        if (optimized) {
          var m = 0;
          for (var n_1 = 0; n_1 < input.length; n_1++) {
            var v = input[n_1] / 32767.0;
            output[tmp$ = m, m = tmp$ + 1 | 0, tmp$] = v;
            output[tmp$_0 = m, m = tmp$_0 + 1 | 0, tmp$_0] = v;
          }
        }
         else {
          var m_0 = 0;
          for (var n_2 = 0; n_2 < input.length; n_2++) {
            var sample = input[n_2] / 32767.0;
            output[tmp$_1 = m_0, m_0 = tmp$_1 + 1 | 0, tmp$_1] = sample * leftVolume;
            output[tmp$_2 = m_0, m_0 = tmp$_2 + 1 | 0, tmp$_2] = sample * rightVolume;
          }
        }

        break;
    }
    return output;
  };
  SoundUtils.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'SoundUtils',
    interfaces: []
  };
  var SoundUtils_instance = null;
  function SoundUtils_getInstance() {
    if (SoundUtils_instance === null) {
      new SoundUtils();
    }
    return SoundUtils_instance;
  }
  function HtmlNativeSoundProvider() {
    NativeSoundProvider.call(this);
    this.log_0 = Logger.Companion.invoke_61zpoe$('HtmlNativeSoundProvider');
  }
  HtmlNativeSoundProvider.prototype.initOnce = function () {
  };
  HtmlNativeSoundProvider.prototype.createSound_1fhb37$$default = function (data_0, streaming, continuation_0, suspended) {
    var instance = new Coroutine$createSound_1fhb37$$default(this, data_0, streaming, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_1fhb37$$default($this, data_0, streaming, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
  }
  Coroutine$createSound_1fhb37$$default.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_1fhb37$$default.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_1fhb37$$default.prototype.constructor = Coroutine$createSound_1fhb37$$default;
  Coroutine$createSound_1fhb37$$default.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = HtmlSimpleSound_getInstance().loadSound_fqrh44$(this.local$data, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return new AudioBufferNativeSound(this.result_0);
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
  var Logger$Level = $module$klogger_js.com.soywiz.klogger.Logger.Level;
  HtmlNativeSoundProvider.prototype.createSound_52yb2k$$default = function (vfs_0, path_0, streaming, continuation_0, suspended) {
    var instance = new Coroutine$createSound_52yb2k$$default_0(this, vfs_0, path_0, streaming, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$createSound_52yb2k$$default_0($this, vfs_0, path_0, streaming, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$vfs = vfs_0;
    this.local$path = path_0;
  }
  Coroutine$createSound_52yb2k$$default_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$createSound_52yb2k$$default_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$createSound_52yb2k$$default_0.prototype.constructor = Coroutine$createSound_52yb2k$$default_0;
  Coroutine$createSound_52yb2k$$default_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            if (Kotlin.isType(this.local$vfs, LocalVfs) || Kotlin.isType(this.local$vfs, UrlVfs)) {
              if (Kotlin.isType(this.local$vfs, LocalVfs)) {
                var $this = this.$this.log_0;
                var level = Logger$Level.TRACE;
                if ($this.isEnabled_fs4ikx$(level)) {
                  $this.actualLog_pwm3k3$(level, 'LOCAL: HtmlNativeSoundSpecialReader: ' + this.local$vfs + ', ' + this.local$path);
                }
                tmp$ = this.local$path;
              }
               else if (Kotlin.isType(this.local$vfs, UrlVfs)) {
                var $this_0 = this.$this.log_0;
                var level_0 = Logger$Level.TRACE;
                if ($this_0.isEnabled_fs4ikx$(level_0)) {
                  $this_0.actualLog_pwm3k3$(level_0, 'URL: HtmlNativeSoundSpecialReader: ' + this.local$vfs + ', ' + this.local$path);
                }
                tmp$ = this.local$vfs.getFullUrl_61zpoe$(this.local$path);
              }
               else
                tmp$ = error.invalidOp;
              var rpath = tmp$;
              this.state_0 = 3;
              this.result_0 = HtmlSimpleSound_getInstance().loadSound_61zpoe$(rpath, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              var $this_1 = this.$this.log_0;
              var level_1 = Logger$Level.TRACE;
              if ($this_1.isEnabled_fs4ikx$(level_1)) {
                $this_1.actualLog_pwm3k3$(level_1, 'OTHER: HtmlNativeSoundSpecialReader: ' + this.local$vfs + ', ' + this.local$path);
              }
              this.state_0 = 2;
              this.result_0 = this.$this.createSound_52yb2k$(this.local$vfs, this.local$path, void 0, this, NativeSoundProvider.prototype.createSound_52yb2k$$default.bind(this.$this));
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
          case 3:
            return new AudioBufferNativeSound(this.result_0);
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
  HtmlNativeSoundProvider.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HtmlNativeSoundProvider',
    interfaces: [NativeSoundProvider]
  };
  function MediaNativeSound(context, url, lengthInMs) {
    MediaNativeSound$Companion_getInstance();
    NativeSound.call(this);
    this.context = context;
    this.url = url;
    this.lengthInMs_ct9qs0$_0 = lengthInMs;
  }
  Object.defineProperty(MediaNativeSound.prototype, 'lengthInMs', {
    get: function () {
      return this.lengthInMs_ct9qs0$_0;
    }
  });
  function MediaNativeSound$Companion() {
    MediaNativeSound$Companion_instance = this;
    this.log = Logger.Companion.invoke_61zpoe$('MediaNativeSound');
  }
  MediaNativeSound$Companion.prototype.invoke_61zpoe$ = function (url, continuation) {
    return new MediaNativeSound(continuation.context, url, L100);
  };
  MediaNativeSound$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MediaNativeSound$Companion_instance = null;
  function MediaNativeSound$Companion_getInstance() {
    if (MediaNativeSound$Companion_instance === null) {
      new MediaNativeSound$Companion();
    }
    return MediaNativeSound$Companion_instance;
  }
  function MediaNativeSound$play$ObjectLiteral(this$MediaNativeSound, sound_0) {
    this.this$MediaNativeSound = this$MediaNativeSound;
    NativeSoundChannel.call(this, sound_0);
    this.bufferPromise = asyncImmediately(this$MediaNativeSound.context, void 0, MediaNativeSound$play$ObjectLiteral$bufferPromise$lambda(this$MediaNativeSound));
    this.channelPromise = asyncImmediately(this$MediaNativeSound.context, void 0, MediaNativeSound$play$ObjectLiteral$channelPromise$lambda(this));
  }
  function MediaNativeSound$play$ObjectLiteral$stop$lambda(this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MediaNativeSound$play$ObjectLiteral$stop$lambda(this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MediaNativeSound$play$ObjectLiteral$stop$lambda(this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$MediaNativeSound$play$ObjectLiteral$stop$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MediaNativeSound$play$ObjectLiteral$stop$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MediaNativeSound$play$ObjectLiteral$stop$lambda.prototype.constructor = Coroutine$MediaNativeSound$play$ObjectLiteral$stop$lambda;
  Coroutine$MediaNativeSound$play$ObjectLiteral$stop$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.bufferPromise.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var res = this.result_0;
            if (res != null) {
              this.state_0 = 3;
              this.result_0 = HtmlSimpleSound_getInstance().stopSoundBuffer_ezpr09$(res, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            return Unit;
          case 4:
            return Unit;
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
  MediaNativeSound$play$ObjectLiteral.prototype.stop = function () {
    launchImmediately(this.this$MediaNativeSound.context, void 0, MediaNativeSound$play$ObjectLiteral$stop$lambda(this));
  };
  function MediaNativeSound$play$ObjectLiteral$bufferPromise$lambda(this$MediaNativeSound_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MediaNativeSound$play$ObjectLiteral$bufferPromise$lambda(this$MediaNativeSound_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MediaNativeSound$play$ObjectLiteral$bufferPromise$lambda(this$MediaNativeSound_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$MediaNativeSound = this$MediaNativeSound_0;
  }
  Coroutine$MediaNativeSound$play$ObjectLiteral$bufferPromise$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MediaNativeSound$play$ObjectLiteral$bufferPromise$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MediaNativeSound$play$ObjectLiteral$bufferPromise$lambda.prototype.constructor = Coroutine$MediaNativeSound$play$ObjectLiteral$bufferPromise$lambda;
  Coroutine$MediaNativeSound$play$ObjectLiteral$bufferPromise$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (HtmlSimpleSound_getInstance().unlocked) {
              this.state_0 = 2;
              this.result_0 = HtmlSimpleSound_getInstance().loadSoundBuffer_61zpoe$(this.local$this$MediaNativeSound.url, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              return null;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return this.result_0;
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
  function MediaNativeSound$play$ObjectLiteral$channelPromise$lambda(this$_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MediaNativeSound$play$ObjectLiteral$channelPromise$lambda(this$_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MediaNativeSound$play$ObjectLiteral$channelPromise$lambda(this$_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$ = this$_0;
  }
  Coroutine$MediaNativeSound$play$ObjectLiteral$channelPromise$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MediaNativeSound$play$ObjectLiteral$channelPromise$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MediaNativeSound$play$ObjectLiteral$channelPromise$lambda.prototype.constructor = Coroutine$MediaNativeSound$play$ObjectLiteral$channelPromise$lambda;
  Coroutine$MediaNativeSound$play$ObjectLiteral$channelPromise$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.local$this$.bufferPromise.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var buffer = this.result_0;
            if (buffer != null) {
              this.state_0 = 3;
              this.result_0 = HtmlSimpleSound_getInstance().playSoundBuffer_ezpr09$(buffer, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              return null;
            }

          case 3:
            return this.result_0;
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
  MediaNativeSound$play$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSoundChannel]
  };
  MediaNativeSound.prototype.play = function () {
    return new MediaNativeSound$play$ObjectLiteral(this, this);
  };
  MediaNativeSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MediaNativeSound',
    interfaces: [NativeSound]
  };
  function AudioBufferNativeSound(buffer) {
    NativeSound.call(this);
    this.buffer = buffer;
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    this.lengthInMs_fg54f6$_0 = (tmp$_2 = (tmp$_1 = (tmp$_0 = (tmp$ = this.buffer) != null ? tmp$.length : null) != null ? tmp$_0 * 1000 : null) != null ? Kotlin.Long.fromNumber(tmp$_1) : null) != null ? tmp$_2 : L0;
  }
  Object.defineProperty(AudioBufferNativeSound.prototype, 'lengthInMs', {
    get: function () {
      return this.lengthInMs_fg54f6$_0;
    }
  });
  function AudioBufferNativeSound$play$ObjectLiteral(this$AudioBufferNativeSound, sound_0) {
    NativeSoundChannel.call(this, sound_0);
    this.channel = this$AudioBufferNativeSound.buffer != null ? HtmlSimpleSound_getInstance().playSound_f3gkkr$(this$AudioBufferNativeSound.buffer) : null;
  }
  AudioBufferNativeSound$play$ObjectLiteral.prototype.stop = function () {
    var tmp$;
    (tmp$ = this.channel) != null ? (tmp$.stop(), Unit) : null;
  };
  AudioBufferNativeSound$play$ObjectLiteral.$metadata$ = {
    kind: Kind_CLASS,
    interfaces: [NativeSoundChannel]
  };
  AudioBufferNativeSound.prototype.play = function () {
    return new AudioBufferNativeSound$play$ObjectLiteral(this, this);
  };
  AudioBufferNativeSound.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'AudioBufferNativeSound',
    interfaces: [NativeSound]
  };
  function soundProgress(totalTime_0, timeProvider_0, progress_0, startTime_0, continuation_0, suspended) {
    var instance = new Coroutine$soundProgress(totalTime_0, timeProvider_0, progress_0, startTime_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$soundProgress(totalTime_0, timeProvider_0, progress_0, startTime_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$elapsed = void 0;
    this.local$totalTime = totalTime_0;
    this.local$timeProvider = timeProvider_0;
    this.local$progress = progress_0;
    this.local$startTime = startTime_0;
  }
  Coroutine$soundProgress.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$soundProgress.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$soundProgress.prototype.constructor = Coroutine$soundProgress;
  Coroutine$soundProgress.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$startTime === void 0)
              this.local$startTime = this.local$timeProvider();
            this.state_0 = 2;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var now = this.local$timeProvider();
            this.local$elapsed = now - this.local$startTime;
            if (this.local$elapsed >= this.local$totalTime) {
              this.state_0 = 5;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            this.local$progress(this.local$elapsed, this.local$totalTime);
            this.state_0 = 4;
            this.result_0 = delayNextFrame_0(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.state_0 = 2;
            continue;
          case 5:
            this.local$progress(this.local$totalTime, this.local$totalTime);
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
  function MediaElementAudioSourceNodeWithAudioElement(node, audio) {
    this.node = node;
    this.audio = audio;
  }
  MediaElementAudioSourceNodeWithAudioElement.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MediaElementAudioSourceNodeWithAudioElement',
    interfaces: []
  };
  function HtmlSimpleSound() {
    HtmlSimpleSound_instance = this;
    var tmp$, tmp$_0, tmp$_1;
    try {
      if (!equals(typeof window.AudioContext, 'undefined'))
        tmp$ = new AudioContext();
      else {
        if (!equals(typeof window.webkitAudioContext, 'undefined'))
          tmp$ = new webkitAudioContext();
        else
          tmp$ = null;
      }
    }
     catch (e) {
      if (Kotlin.isType(e, Throwable)) {
        console.error(e);
        tmp$ = null;
      }
       else
        throw e;
    }
    this.ctx = tmp$;
    this.unlocked = false;
    this.unlockDeferred_0 = CompletableDeferred(Job());
    this.unlock = Kotlin.isType(tmp$_0 = this.unlockDeferred_0, Deferred) ? tmp$_0 : throwCCE();
    var _scratchBuffer = (tmp$_1 = this.ctx) != null ? tmp$_1.createBuffer(1, 1, 22050) : null;
    var unlock = {v: null};
    unlock.v = HtmlSimpleSound_init$lambda(this, _scratchBuffer, unlock);
    document.addEventListener('keydown', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('touchstart', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('touchend', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
    document.addEventListener('mousedown', unlock.v == null ? throwUPAE('unlock') : unlock.v, true);
  }
  Object.defineProperty(HtmlSimpleSound.prototype, 'available', {
    get: function () {
      return this.ctx != null;
    }
  });
  HtmlSimpleSound.prototype.playSound_f3gkkr$ = function (buffer) {
    if (this.ctx == null)
      return null;
    var source = this.ctx.createBufferSource();
    source.buffer = buffer;
    source.connect(this.ctx.destination);
    source.start(0.0);
    return source;
  };
  HtmlSimpleSound.prototype.stopSound_dq0zcj$ = function (channel) {
    channel != null ? (channel.disconnect(0), Unit) : null;
    channel != null ? (channel.stop(0.0), Unit) : null;
  };
  HtmlSimpleSound.prototype.waitUnlocked = function (continuation_0, suspended) {
    var instance = new Coroutine$waitUnlocked(this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$waitUnlocked($this, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
  }
  Coroutine$waitUnlocked.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$waitUnlocked.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$waitUnlocked.prototype.constructor = Coroutine$waitUnlocked;
  Coroutine$waitUnlocked.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.unlock.await(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            return this.$this.ctx;
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
  function HtmlSimpleSound$callOnUnlocked$lambda(closure$cancelled, closure$callback) {
    return function (it) {
      if (!closure$cancelled.v)
        closure$callback(Unit);
      return Unit;
    };
  }
  function HtmlSimpleSound$callOnUnlocked$lambda_0(closure$cancelled) {
    return function (it) {
      closure$cancelled.v = true;
      return Unit;
    };
  }
  HtmlSimpleSound.prototype.callOnUnlocked_x41j5s$ = function (callback) {
    var cancelled = {v: false};
    this.unlock.invokeOnCompletion_f05bi3$(HtmlSimpleSound$callOnUnlocked$lambda(cancelled, callback));
    return Cancellable.Companion.invoke_4m4org$(HtmlSimpleSound$callOnUnlocked$lambda_0(cancelled));
  };
  var SuccessOrFailure = Kotlin.kotlin.SuccessOrFailure;
  function HtmlSimpleSound$loadSound$lambda$lambda(closure$c) {
    return function (data) {
      closure$c.resumeWith_i5d895$(new SuccessOrFailure(data));
      return Unit;
    };
  }
  var SuccessOrFailure$SuccessOrFailure$Failure_init = Kotlin.kotlin.SuccessOrFailure.Failure;
  function HtmlSimpleSound$loadSound$lambda$lambda_0(closure$c, closure$url) {
    return function () {
      var $receiver = closure$c;
      var exception = Exception_init('error decoding ' + closure$url);
      $receiver.resumeWith_i5d895$(new SuccessOrFailure(new SuccessOrFailure$SuccessOrFailure$Failure_init(exception)));
      return Unit;
    };
  }
  function HtmlSimpleSound$loadSound$lambda(this$HtmlSimpleSound, closure$data, closure$url) {
    return function (c) {
      this$HtmlSimpleSound.ctx.decodeAudioData(closure$data, HtmlSimpleSound$loadSound$lambda$lambda(c), HtmlSimpleSound$loadSound$lambda$lambda_0(c, closure$url));
      return Unit;
    };
  }
  var SafeContinuation_init = Kotlin.kotlin.coroutines.SafeContinuation_init_wj8d80$;
  function suspendCoroutine$lambda(closure$block) {
    return function (c) {
      var safe = SafeContinuation_init(intercepted(c));
      closure$block(safe);
      return safe.getOrThrow();
    };
  }
  HtmlSimpleSound.prototype.loadSound_qucnhy$ = function (data_0, url_0, continuation_0, suspended) {
    var instance = new Coroutine$loadSound_qucnhy$(this, data_0, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$loadSound_qucnhy$($this, data_0, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$data = data_0;
    this.local$url = url_0;
  }
  Coroutine$loadSound_qucnhy$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadSound_qucnhy$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadSound_qucnhy$.prototype.constructor = Coroutine$loadSound_qucnhy$;
  Coroutine$loadSound_qucnhy$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.$this.ctx == null) {
              return null;
            }
             else {
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = suspendCoroutine$lambda(HtmlSimpleSound$loadSound$lambda(this.$this, this.local$data, this.local$url))(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
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
  HtmlSimpleSound.prototype.loadSoundBuffer_61zpoe$ = function (url, continuation) {
    if (this.ctx == null)
      return null;
    var audioPool = document.createElement('audio');
    audioPool.currentTime = 0.0;
    audioPool.pause();
    audioPool.autoplay = false;
    audioPool.src = url;
    return new MediaElementAudioSourceNodeWithAudioElement(this.ctx.createMediaElementSource(audioPool), audioPool);
  };
  HtmlSimpleSound.prototype.playSoundBuffer_ezpr09$ = function (buffer, continuation) {
    var tmp$, tmp$_0;
    if (this.ctx != null) {
      (tmp$ = buffer != null ? buffer.audio : null) != null ? tmp$.play() : null;
      (tmp$_0 = buffer != null ? buffer.node : null) != null ? tmp$_0.connect(this.ctx.destination) : null;
    }
  };
  HtmlSimpleSound.prototype.stopSoundBuffer_ezpr09$ = function (buffer, continuation) {
    var tmp$, tmp$_0, tmp$_1;
    if (this.ctx != null) {
      (tmp$ = buffer != null ? buffer.audio : null) != null ? (tmp$.pause(), Unit) : null;
      (tmp$_0 = buffer != null ? buffer.audio : null) != null ? (tmp$_0.currentTime = 0.0) : null;
      (tmp$_1 = buffer != null ? buffer.node : null) != null ? (tmp$_1.disconnect(this.ctx.destination), Unit) : null;
    }
  };
  HtmlSimpleSound.prototype.loadSound_fqrh44$ = function (data, continuation) {
    return this.loadSound_qucnhy$(data.buffer, 'ByteArray', continuation);
  };
  HtmlSimpleSound.prototype.loadSound_61zpoe$ = function (url_0, continuation_0, suspended) {
    var instance = new Coroutine$loadSound_61zpoe$(this, url_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$loadSound_61zpoe$($this, url_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$url = url_0;
  }
  Coroutine$loadSound_61zpoe$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$loadSound_61zpoe$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$loadSound_61zpoe$.prototype.constructor = Coroutine$loadSound_61zpoe$;
  Coroutine$loadSound_61zpoe$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = get_uniVfs(this.local$url).readBytes(this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.state_0 = 3;
            this.result_0 = this.$this.loadSound_fqrh44$(this.result_0, this);
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
  function HtmlSimpleSound_init$lambda$lambda(closure$source, closure$unlock, this$HtmlSimpleSound) {
    return function () {
      closure$source.disconnect(0);
      document.removeEventListener('keydown', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('touchstart', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('touchend', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      document.removeEventListener('mousedown', closure$unlock.v == null ? throwUPAE('unlock') : closure$unlock.v, true);
      this$HtmlSimpleSound.unlocked = true;
      this$HtmlSimpleSound.unlockDeferred_0.complete_11rb$(Unit);
      return Unit;
    };
  }
  function HtmlSimpleSound_init$lambda(this$HtmlSimpleSound, closure$_scratchBuffer, closure$unlock) {
    return function (it) {
      if (this$HtmlSimpleSound.ctx != null) {
        var source = this$HtmlSimpleSound.ctx.createBufferSource();
        source.buffer = closure$_scratchBuffer;
        source.connect(this$HtmlSimpleSound.ctx.destination);
        source.start(0.0);
        if (typeof this$HtmlSimpleSound.ctx.resume === 'function')
          this$HtmlSimpleSound.ctx.resume();
        source.onended = HtmlSimpleSound_init$lambda$lambda(source, closure$unlock, this$HtmlSimpleSound);
      }
      return Unit;
    };
  }
  HtmlSimpleSound.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'HtmlSimpleSound',
    interfaces: []
  };
  var HtmlSimpleSound_instance = null;
  function HtmlSimpleSound_getInstance() {
    if (HtmlSimpleSound_instance === null) {
      new HtmlSimpleSound();
    }
    return HtmlSimpleSound_instance;
  }
  function nativeSoundProvider$lambda() {
    return new HtmlNativeSoundProvider();
  }
  var nativeSoundProvider;
  function get_nativeSoundProvider() {
    return nativeSoundProvider.value;
  }
  function NativeAudioStream(freq) {
    NativeAudioStream$Companion_getInstance();
    this.freq = freq;
    var tmp$;
    this.id = (tmp$ = NativeAudioStream$Companion_getInstance().lastId, NativeAudioStream$Companion_getInstance().lastId = tmp$ + 1 | 0, tmp$);
    this.logger = Logger.Companion.invoke_61zpoe$('NativeAudioStream.js.' + this.id);
    get_nativeSoundProvider().initOnce();
    this.missingDataCount = 0;
    this.nodeRunning = false;
    this.node = null;
    this.currentBuffer = null;
    this.buffers = new Queue();
    this.startPromise_0 = null;
    this.totalShorts = 0;
  }
  function NativeAudioStream$Companion() {
    NativeAudioStream$Companion_instance = this;
    this.lastId = 0;
  }
  NativeAudioStream$Companion.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var NativeAudioStream$Companion_instance = null;
  function NativeAudioStream$Companion_getInstance() {
    if (NativeAudioStream$Companion_instance === null) {
      new NativeAudioStream$Companion();
    }
    return NativeAudioStream$Companion_instance;
  }
  NativeAudioStream.prototype.process_0 = function (e) {
    var left = e.outputBuffer.getChannelData(0);
    var right = e.outputBuffer.getChannelData(1);
    var sampleCount = left.length;
    var hidden = !!document.hidden;
    var hasData = true;
    for (var n = 0; n < sampleCount; n++) {
      if (this.currentBuffer == null) {
        if (this.buffers.size === 0) {
          hasData = false;
          break;
        }
        this.currentBuffer = this.buffers.dequeue();
      }
      var cb = ensureNotNull(this.currentBuffer);
      if (cb.available >= 2) {
        left[n] = cb.read();
        right[n] = cb.read();
        this.totalShorts = this.totalShorts - 2 | 0;
      }
       else {
        this.currentBuffer = null;
        continue;
      }
      if (hidden) {
        left[n] = 0.0;
        right[n] = 0.0;
      }
    }
    if (!hasData) {
      this.missingDataCount = this.missingDataCount + 1 | 0;
    }
    if (this.missingDataCount >= 500) {
      this.stop();
    }
  };
  NativeAudioStream.prototype.ensureInit_0 = function () {
    return this.node;
  };
  function NativeAudioStream$start$lambda$lambda(this$NativeAudioStream) {
    return function (it) {
      this$NativeAudioStream.process_0(it);
      return Unit;
    };
  }
  function NativeAudioStream$start$lambda(this$NativeAudioStream) {
    return function (it) {
      var tmp$, tmp$_0, tmp$_1;
      this$NativeAudioStream.node = (tmp$ = HtmlSimpleSound_getInstance().ctx) != null ? tmp$.createScriptProcessor(1024, 2, 2) : null;
      (tmp$_0 = this$NativeAudioStream.node) != null ? (tmp$_0.onaudioprocess = NativeAudioStream$start$lambda$lambda(this$NativeAudioStream)) : null;
      if (HtmlSimpleSound_getInstance().ctx != null)
        (tmp$_1 = this$NativeAudioStream.node) != null ? tmp$_1.connect(HtmlSimpleSound_getInstance().ctx.destination) : null;
      return Unit;
    };
  }
  NativeAudioStream.prototype.start = function () {
    if (this.nodeRunning)
      return;
    this.startPromise_0 = HtmlSimpleSound_getInstance().callOnUnlocked_x41j5s$(NativeAudioStream$start$lambda(this));
    this.missingDataCount = 0;
    this.nodeRunning = true;
  };
  NativeAudioStream.prototype.stop = function () {
    var tmp$, tmp$_0;
    if (!this.nodeRunning)
      return;
    (tmp$ = this.startPromise_0) != null ? (tmp$.cancel_tcv7n7$(), Unit) : null;
    (tmp$_0 = this.node) != null ? (tmp$_0.disconnect(), Unit) : null;
    this.nodeRunning = false;
  };
  NativeAudioStream.prototype.ensureRunning = function () {
    this.ensureInit_0();
    if (!this.nodeRunning) {
      this.start();
    }
  };
  Object.defineProperty(NativeAudioStream.prototype, 'availableSamples', {
    get: function () {
      return this.totalShorts;
    }
  });
  var TimeSpan = $module$klock_js.com.soywiz.klock.TimeSpan;
  var numberToDouble = Kotlin.numberToDouble;
  var numberToInt = Kotlin.numberToInt;
  NativeAudioStream.prototype.addSamples_359eei$ = function (samples_0, offset_0, size_0, continuation_0, suspended) {
    var instance = new Coroutine$addSamples_359eei$(this, samples_0, offset_0, size_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$addSamples_359eei$($this, samples_0, offset_0, size_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$samples = samples_0;
    this.local$offset = offset_0;
    this.local$size = size_0;
  }
  Coroutine$addSamples_359eei$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$addSamples_359eei$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$addSamples_359eei$.prototype.constructor = Coroutine$addSamples_359eei$;
  Coroutine$addSamples_359eei$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.$this.totalShorts = this.$this.totalShorts + this.local$size | 0;
            if (!HtmlSimpleSound_getInstance().available) {
              var sampleCount = this.local$size / 2 | 0;
              var timeSeconds = sampleCount / 41000.0;
              this.state_0 = 5;
              this.result_0 = delay(this.context, TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(timeSeconds) * 1000.0)), this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.$this.ensureRunning();
              var fsamples = new Float32Array(this.local$size);
              for (var n = 0; n < this.local$size; n++) {
                fsamples[n] = this.local$samples[this.local$offset + n | 0] / kotlin_js_internal_ShortCompanionObject.MAX_VALUE;
              }
              this.$this.buffers.enqueue_11rb$(new MyNativeAudioBuffer(fsamples));
              this.state_0 = 2;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            if (this.$this.buffers.size <= 4) {
              this.state_0 = 4;
              continue;
            }

            this.state_0 = 3;
            this.result_0 = delayNextFrame(this.context, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.state_0 = 2;
            continue;
          case 4:
            this.state_0 = 6;
            continue;
          case 5:
            this.state_0 = 6;
            continue;
          case 6:
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
  NativeAudioStream.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'NativeAudioStream',
    interfaces: []
  };
  function MyNativeAudioBuffer(data, readedCallback) {
    if (readedCallback === void 0)
      readedCallback = null;
    this.data = data;
    this.readedCallback = readedCallback;
    this.offset = 0;
  }
  MyNativeAudioBuffer.prototype.resolve = function () {
    var rc = this.readedCallback;
    this.readedCallback = null;
    rc != null ? rc() : null;
  };
  Object.defineProperty(MyNativeAudioBuffer.prototype, 'hasMore', {
    get: function () {
      return this.offset < this.length;
    }
  });
  MyNativeAudioBuffer.prototype.read = function () {
    var tmp$;
    return this.data[tmp$ = this.offset, this.offset = tmp$ + 1 | 0, tmp$];
  };
  Object.defineProperty(MyNativeAudioBuffer.prototype, 'available', {
    get: function () {
      return this.length - this.offset | 0;
    }
  });
  Object.defineProperty(MyNativeAudioBuffer.prototype, 'length', {
    get: function () {
      return this.data.length;
    }
  });
  MyNativeAudioBuffer.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MyNativeAudioBuffer',
    interfaces: []
  };
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korau = package$soywiz.korau || (package$soywiz.korau = {});
  var package$format = package$korau.format || (package$korau.format = {});
  package$format.AudioBuffer = AudioBuffer;
  package$format.AudioData = AudioData;
  package$format.toNativeSound_igd38k$ = toNativeSound;
  package$format.play_igd38k$ = play;
  package$format.readAudioData_m9jcvn$ = readAudioData;
  AudioFormat.Info = AudioFormat$Info;
  package$format.AudioFormat = AudioFormat;
  Object.defineProperty(package$format, 'defaultAudioFormats', {
    get: function () {
      return defaultAudioFormats;
    }
  });
  package$format.AudioFormats = AudioFormats;
  package$format.readSoundInfo_m9jcvn$ = readSoundInfo;
  package$format.registerStandard_llp23w$ = registerStandard;
  package$format.BaseAudioStream = BaseAudioStream;
  Object.defineProperty(AudioStream, 'Companion', {
    get: AudioStream$Companion_getInstance
  });
  package$format.AudioStream = AudioStream;
  package$format.play_h8qhsg$ = play_0;
  package$format.play_k45y5b$ = play_1;
  package$format.readAudioStream_m9jcvn$ = readAudioStream;
  package$format.writeAudio_9xwa4y$ = writeAudio;
  package$format.openUse2_k0geks$ = openUse2;
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
  $$importsForInline$$['korio-js'] = $module$korio_js;
  WAV.prototype.Fmt = WAV$Fmt;
  Object.defineProperty(package$format, 'WAV', {
    get: WAV_getInstance
  });
  package$format.toWav_igd38k$ = toWav;
  var package$sound = package$korau.sound || (package$korau.sound = {});
  package$sound.NewNativeAudioStream = NewNativeAudioStream;
  package$sound.addSamples_ippixz$ = addSamples;
  $$importsForInline$$['kotlinx-coroutines-core'] = $module$kotlinx_coroutines_core;
  package$sound.NativeSoundProvider = NativeSoundProvider;
  package$sound.DummyNativeSoundProvider = DummyNativeSoundProvider;
  package$sound.NativeSoundChannel = NativeSoundChannel;
  package$sound.NativeSound = NativeSound;
  package$sound.get_lengthInSeconds_kbpa60$ = get_lengthInSeconds;
  package$sound.readNativeSound_thwgyb$ = readNativeSound;
  package$sound.readNativeSoundOptimized_thwgyb$ = readNativeSoundOptimized;
  Object.defineProperty(package$sound, 'SoundUtils', {
    get: SoundUtils_getInstance
  });
  $$importsForInline$$['klogger-js'] = $module$klogger_js;
  package$sound.HtmlNativeSoundProvider = HtmlNativeSoundProvider;
  Object.defineProperty(MediaNativeSound, 'Companion', {
    get: MediaNativeSound$Companion_getInstance
  });
  package$sound.MediaNativeSound = MediaNativeSound;
  package$sound.AudioBufferNativeSound = AudioBufferNativeSound;
  package$sound.MediaElementAudioSourceNodeWithAudioElement = MediaElementAudioSourceNodeWithAudioElement;
  Object.defineProperty(package$sound, 'HtmlSimpleSound', {
    get: HtmlSimpleSound_getInstance
  });
  Object.defineProperty(package$sound, 'nativeSoundProvider', {
    get: get_nativeSoundProvider
  });
  Object.defineProperty(NativeAudioStream, 'Companion', {
    get: NativeAudioStream$Companion_getInstance
  });
  $$importsForInline$$['klock-js'] = $module$klock_js;
  package$sound.NativeAudioStream = NativeAudioStream;
  package$sound.MyNativeAudioBuffer = MyNativeAudioBuffer;
  var $receiver = new AudioFormats();
  registerStandard($receiver);
  defaultAudioFormats = $receiver;
  nativeSoundProvider = lazy(nativeSoundProvider$lambda);
  Kotlin.defineModule('korau-js', _);
  return _;
}));

//# sourceMappingURL=korau-js.js.map
