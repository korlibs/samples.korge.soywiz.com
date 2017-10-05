if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'korau-mp3-js'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'korau-mp3-js'.");
}
if (typeof this['korio-js'] === 'undefined') {
  throw new Error("Error loading module 'korau-mp3-js'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'korau-mp3-js'.");
}
if (typeof this['korau-js'] === 'undefined') {
  throw new Error("Error loading module 'korau-mp3-js'. Its dependency 'korau-js' was not found. Please, check whether 'korau-js' is loaded prior to 'korau-mp3-js'.");
}
this['korau-mp3-js'] = function (_, Kotlin, $module$korio_js, $module$korau_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var CoroutineImpl = Kotlin.kotlin.coroutines.experimental.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.experimental.intrinsics.COROUTINE_SUSPENDED;
  var IntRange = Kotlin.kotlin.ranges.IntRange;
  var AudioStream = $module$korau_js.com.soywiz.korau.format.AudioStream;
  var MP3Base = $module$korau_js.com.soywiz.korau.format.MP3Base;
  var printStackTrace = $module$korio_js.com.soywiz.korio.lang.printStackTrace_dbl4o4$;
  var IOException = $module$korio_js.com.soywiz.korio.lang.IOException;
  var fill = $module$korio_js.com.soywiz.korio.typedarray.fill_nwy378$;
  var RuntimeException = Kotlin.kotlin.RuntimeException;
  var toUnsigned = $module$korio_js.com.soywiz.korio.util.toUnsigned_mz3mee$;
  var readExact = $module$korio_js.com.soywiz.korio.stream.readExact_8rokfb$;
  var skip = $module$korio_js.com.soywiz.korio.stream.skip_50x9bh$;
  var lang = $module$korio_js.com.soywiz.korio.lang;
  var toString = $module$korio_js.com.soywiz.korio.lang.toString_5kit73$;
  var copyRangeTo = $module$korio_js.com.soywiz.korio.typedarray.copyRangeTo_boa5ab$;
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_ww73n8$;
  var fill_0 = $module$korio_js.com.soywiz.korio.typedarray.fill_tpuxuu$;
  MP3Decoder.prototype = Object.create(MP3Base.prototype);
  MP3Decoder.prototype.constructor = MP3Decoder;
  function MP3Decoder() {
    MP3Decoder_instance = this;
    MP3Base.call(this);
  }
  function MP3Decoder$decodeStream$lambda(closure$lame_0, closure$buffer_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MP3Decoder$decodeStream$lambda(closure$lame_0, closure$buffer_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MP3Decoder$decodeStream$lambda(closure$lame_0, closure$buffer_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$closure$lame = closure$lame_0;
    this.local$closure$buffer = closure$buffer_0;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$flags = void 0;
    this.local$iread = void 0;
    this.local$opos = void 0;
    this.local$out = void 0;
    this.local$mp3InputData = void 0;
    this.local$framesDecodedCounter = void 0;
    this.local$i = void 0;
    this.local$sample = void 0;
  }
  Coroutine$MP3Decoder$decodeStream$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MP3Decoder$decodeStream$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MP3Decoder$decodeStream$lambda.prototype.constructor = Coroutine$MP3Decoder$decodeStream$lambda;
  Coroutine$MP3Decoder$decodeStream$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$flags = this.local$closure$lame.flags;
            this.state_0 = 2;
            this.result_0 = this.local$closure$lame.audio.get_audio16_gc4b7s$(this.local$flags, this.local$closure$buffer, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$iread = this.result_0;
            if (this.local$iread > 0) {
              this.local$opos = 0;
              this.local$out = new Int16Array(Kotlin.imul(this.local$iread, this.local$flags.inNumChannels));
              this.local$mp3InputData = this.local$closure$lame.parser.mp3InputData;
              this.local$framesDecodedCounter = this.local$mp3InputData.framesDecodedCounter + (this.local$iread / this.local$mp3InputData.frameSize | 0) | 0;
              this.local$mp3InputData.framesDecodedCounter = this.local$framesDecodedCounter;
              for (this.local$i = 0; this.local$i < this.local$iread; this.local$i++) {
                this.local$sample = (this.local$closure$buffer[0][this.local$i] | 0) & 65535;
                this.local$out[this.local$tmp$ = this.local$opos, this.local$opos = this.local$tmp$ + 1 | 0, this.local$tmp$] = Kotlin.toShort(this.local$sample);
                if (this.local$flags.inNumChannels === 2) {
                  this.local$sample = (this.local$closure$buffer[1][this.local$i] | 0) & 65535;
                  this.local$out[this.local$tmp$_0 = this.local$opos, this.local$opos = this.local$tmp$_0 + 1 | 0, this.local$tmp$_0] = Kotlin.toShort(this.local$sample);
                }
              }
              return this.local$out;
            }
             else {
              return null;
            }

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
  var AssertionError_init = Kotlin.kotlin.AssertionError;
  var Array_0 = Array;
  MP3Decoder.prototype.decodeStream_axnxby$ = function (data_0, continuation_0, suspended) {
    var instance = new Coroutine$decodeStream_axnxby$(this, data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$decodeStream_axnxby$($this, data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$lame = void 0;
    this.local$array = void 0;
    this.local$tmp$ = void 0;
    this.local$i = void 0;
    this.local$buffer = void 0;
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
            this.local$lame = new Lame();
            this.state_0 = 2;
            this.result_0 = this.local$lame.audio.initInFile_baorw1$(this.local$lame.flags, this.local$data, new FrameSkip(), this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$lame.parser.mp3InputData.totalFrames = this.local$lame.parser.mp3InputData.numSamples / this.local$lame.parser.mp3InputData.frameSize | 0;
            if (!(new IntRange(1, 2)).contains_mef7kx$(this.local$lame.flags.inNumChannels))
              throw new AssertionError_init();
            this.local$array = Array_0(2);
            this.local$tmp$ = this.local$array.length - 1 | 0;
            for (this.local$i = 0; this.local$i <= this.local$tmp$; this.local$i++) {
              this.local$array[this.local$i] = new Float32Array(1152);
            }

            this.local$buffer = this.local$array;
            return AudioStream.Companion.generator_uu7nn5$(this.local$lame.flags.inSampleRate, this.local$lame.flags.inNumChannels, MP3Decoder$decodeStream$lambda(this.local$lame, this.local$buffer));
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
  MP3Decoder.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'MP3Decoder',
    interfaces: [MP3Base]
  };
  var MP3Decoder_instance = null;
  function MP3Decoder_getInstance() {
    if (MP3Decoder_instance === null) {
      new MP3Decoder();
    }
    return MP3Decoder_instance;
  }
  function FrameSkip() {
    this.encoderDelay = -1;
    this.encoderPadding = -1;
  }
  FrameSkip.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'FrameSkip',
    interfaces: []
  };
  function GetAudio(parse, mpg) {
    GetAudio$Companion_getInstance();
    this.parse_8be2vx$ = parse;
    this.mpg_8be2vx$ = mpg;
    this.musicin_7pkf89$_0 = this.musicin_7pkf89$_0;
    this.hip_0 = new MPGLib$mpstr_tag();
  }
  Object.defineProperty(GetAudio.prototype, 'musicin_0', {
    get: function () {
      if (this.musicin_7pkf89$_0 == null)
        return Kotlin.throwUPAE('musicin');
      return this.musicin_7pkf89$_0;
    },
    set: function (musicin) {
      this.musicin_7pkf89$_0 = musicin;
    }
  });
  GetAudio.prototype.initInFile_baorw1$ = function (gfp_0, inPath_0, enc_0, continuation_0, suspended) {
    var instance = new Coroutine$initInFile_baorw1$(this, gfp_0, inPath_0, enc_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$initInFile_baorw1$($this, gfp_0, inPath_0, enc_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 4;
    this.$this = $this;
    this.local$gfp = gfp_0;
    this.local$inPath = inPath_0;
    this.local$enc = enc_0;
    this.local$e = void 0;
  }
  Coroutine$initInFile_baorw1$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$initInFile_baorw1$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$initInFile_baorw1$.prototype.constructor = Coroutine$initInFile_baorw1$;
  Coroutine$initInFile_baorw1$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = this.$this.OpenSndFile_0(this.local$gfp, this.local$inPath, this.local$enc, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.$this.musicin_0 = this.result_0;
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, IOException)) {
              printStackTrace(this.local$e);
            }
             else
              throw this.local$e;
            this.state_0 = 3;
            continue;
          case 3:
            return;
          case 4:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 4)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  GetAudio.prototype.get_audio16_gc4b7s$ = function (gfp, buffer, continuation) {
    return this.get_audio_common_0(gfp, null, buffer, continuation);
  };
  GetAudio.prototype.get_audio_common_0 = function (gfp_0, buffer_0, buffer16_0, continuation_0, suspended) {
    var instance = new Coroutine$get_audio_common_0(this, gfp_0, buffer_0, buffer16_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$get_audio_common_0($this, gfp_0, buffer_0, buffer16_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$num_channels = void 0;
    this.local$array = void 0;
    this.local$tmp$ = void 0;
    this.local$i = void 0;
    this.local$buf_tmp16 = void 0;
    this.local$samples_read = void 0;
    this.local$i_0 = void 0;
    this.local$value = void 0;
    this.local$i_1 = void 0;
    this.local$value_0 = void 0;
    this.local$gfp = gfp_0;
    this.local$buffer = buffer_0;
    this.local$buffer16 = buffer16_0;
  }
  Coroutine$get_audio_common_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$get_audio_common_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$get_audio_common_0.prototype.constructor = Coroutine$get_audio_common_0;
  Coroutine$get_audio_common_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$num_channels = this.local$gfp.inNumChannels;
            this.local$array = Array_0(2);
            this.local$tmp$ = this.local$array.length - 1 | 0;
            for (this.local$i = 0; this.local$i <= this.local$tmp$; this.local$i++) {
              this.local$array[this.local$i] = new Float32Array(1152);
            }

            this.local$buf_tmp16 = this.local$array;
            this.state_0 = 2;
            this.result_0 = this.$this.read_samples_mp3_es6y7b$(this.local$gfp, this.$this.musicin_0, this.local$buffer != null ? this.local$buf_tmp16 : this.local$buffer16, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$samples_read = this.result_0;
            if (this.local$samples_read < 0) {
              return this.local$samples_read;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            if (this.local$buffer != null) {
              this.local$i_0 = this.local$samples_read;
              while ((this.local$i_0 = this.local$i_0 - 1 | 0, this.local$i_0) >= 0) {
                this.local$value = this.local$buf_tmp16[0][this.local$i_0] | 0;
                this.local$buffer[0][this.local$i_0] = this.local$value << 16;
              }
              if (this.local$num_channels === 2) {
                this.local$i_1 = this.local$samples_read;
                while ((this.local$i_1 = this.local$i_1 - 1 | 0, this.local$i_1) >= 0) {
                  this.local$value_0 = this.local$buf_tmp16[1][this.local$i_1] | 0;
                  this.local$buffer[1][this.local$i_1] = this.local$value_0 << 16;
                }
              }
               else if (this.local$num_channels === 1) {
                fill(this.local$buffer[1], 0.0, 0, this.local$samples_read);
              }
               else {
                throw new RuntimeException('Channels must be 1 or 2');
              }
            }

            return this.local$samples_read;
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
  GetAudio.prototype.read_samples_mp3_es6y7b$ = function (gfp_0, musicin_0, mpg123pcm_0, continuation_0, suspended) {
    var instance = new Coroutine$read_samples_mp3_es6y7b$(this, gfp_0, musicin_0, mpg123pcm_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$read_samples_mp3_es6y7b$($this, gfp_0, musicin_0, mpg123pcm_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$out = void 0;
    this.local$gfp = gfp_0;
    this.local$musicin = musicin_0;
    this.local$mpg123pcm = mpg123pcm_0;
  }
  Coroutine$read_samples_mp3_es6y7b$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$read_samples_mp3_es6y7b$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$read_samples_mp3_es6y7b$.prototype.constructor = Coroutine$read_samples_mp3_es6y7b$;
  Coroutine$read_samples_mp3_es6y7b$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.state_0 = 2;
            this.result_0 = this.$this.lame_decode_fromfile_0(this.local$musicin, this.local$mpg123pcm[0], this.local$mpg123pcm[1], this.$this.parse_8be2vx$.mp3InputData, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$out = this.result_0;
            if (this.local$out < 0) {
              fill(this.local$mpg123pcm[0], Kotlin.toShort(0));
              fill(this.local$mpg123pcm[1], Kotlin.toShort(0));
              return 0;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 3:
            if (this.local$gfp.inNumChannels !== this.$this.parse_8be2vx$.mp3InputData.stereo)
              throw new RuntimeException('number of channels has changed');
            if (this.local$gfp.inSampleRate !== this.$this.parse_8be2vx$.mp3InputData.samplerate)
              throw new RuntimeException('sample frequency has changed');
            return this.local$out;
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
  GetAudio.prototype.OpenSndFile_0 = function (gfp_0, musicin2_0, enc_0, continuation_0, suspended) {
    var instance = new Coroutine$OpenSndFile_0(this, gfp_0, musicin2_0, enc_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$OpenSndFile_0($this, gfp_0, musicin2_0, enc_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$flen = void 0;
    this.local$totalseconds = void 0;
    this.local$tmp_num_samples = void 0;
    this.local$gfp = gfp_0;
    this.local$musicin2 = musicin2_0;
    this.local$enc = enc_0;
  }
  Coroutine$OpenSndFile_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$OpenSndFile_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$OpenSndFile_0.prototype.constructor = Coroutine$OpenSndFile_0;
  Coroutine$OpenSndFile_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$gfp.num_samples = -1;
            this.$this.musicin_0 = this.local$musicin2;
            this.state_0 = 2;
            this.result_0 = this.$this.lame_decode_initfile_0(this.$this.musicin_0, this.$this.parse_8be2vx$.mp3InputData, this.local$enc, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            throw this.exception_0;
          case 2:
            if (-1 === this.result_0) {
              throw new RuntimeException('Error reading headers in mp3 input file ' + this.local$musicin2 + '.');
            }

            this.local$gfp.inNumChannels = this.$this.parse_8be2vx$.mp3InputData.stereo;
            this.local$gfp.inSampleRate = this.$this.parse_8be2vx$.mp3InputData.samplerate;
            this.local$gfp.num_samples = this.$this.parse_8be2vx$.mp3InputData.numSamples;
            if (this.local$gfp.num_samples === -1) {
              this.state_0 = 3;
              this.result_0 = this.local$musicin2.getLength(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 4;
              continue;
            }

          case 3:
            this.local$flen = this.result_0;
            if (this.local$flen.compareTo_11rb$(Kotlin.Long.ZERO) >= 0) {
              if (this.$this.parse_8be2vx$.mp3InputData.bitrate > 0) {
                this.local$totalseconds = this.local$flen.toNumber() * 8.0 / (1000.0 * this.$this.parse_8be2vx$.mp3InputData.bitrate);
                this.local$tmp_num_samples = this.local$totalseconds * this.local$gfp.inSampleRate | 0;
                this.local$gfp.num_samples = this.local$tmp_num_samples;
                this.$this.parse_8be2vx$.mp3InputData.numSamples = this.local$tmp_num_samples;
              }
            }

            this.state_0 = 4;
            continue;
          case 4:
            return this.$this.musicin_0;
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
  GetAudio.prototype.check_aid_0 = function (header) {
    return header.length >= 4 && header[0] === Kotlin.toByte(65 | 0) && header[1] === Kotlin.toByte(105 | 0) && header[2] === Kotlin.toByte(68 | 0) && header[3] === 1;
  };
  GetAudio.prototype.is_syncword_mp123_0 = function (headerptr) {
    var tmp$, tmp$_0, tmp$_1;
    var p = 0;
    if ((toUnsigned(headerptr[p + 0 | 0]) & 255) !== 255)
      return false;
    if ((toUnsigned(headerptr[p + 1 | 0]) & 224) !== 224)
      return false;
    if ((toUnsigned(headerptr[p + 1 | 0]) & 24) === 8)
      return false;
    tmp$_1 = this.parse_8be2vx$;
    tmp$ = headerptr[p + 1 | 0] & 6;
    if (tmp$ === 2)
      tmp$_0 = 3;
    else if (tmp$ === 4)
      tmp$_0 = 2;
    else if (tmp$ === 6)
      tmp$_0 = 1;
    else
      return false;
    tmp$_1.layer = tmp$_0;
    if ((toUnsigned(headerptr[p + 1 | 0]) & 6) === 0)
      return false;
    if ((toUnsigned(headerptr[p + 2 | 0]) & 240) === 240)
      return false;
    if ((toUnsigned(headerptr[p + 2 | 0]) & 12) === 12)
      return false;
    if ((toUnsigned(headerptr[p + 1 | 0]) & 24) === 24 && (toUnsigned(headerptr[p + 1 | 0]) & 6) === 4 && ((GetAudio$Companion_getInstance().abl2_0[toUnsigned(headerptr[p + 2 | 0]) >> 4] | 0) & 1 << (toUnsigned(headerptr[p + 3 | 0]) >> 6)) !== 0)
      return false;
    if ((toUnsigned(headerptr[p + 3 | 0]) & 3) === 2)
      return false;
    return true;
  };
  GetAudio.prototype.lame_decode_initfile_0 = function (fd_0, mp3data_0, enc_0, continuation_0, suspended) {
    var instance = new Coroutine$lame_decode_initfile_0(this, fd_0, mp3data_0, enc_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$lame_decode_initfile_0($this, fd_0, mp3data_0, enc_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 47;
    this.$this = $this;
    this.local$buf = void 0;
    this.local$pcm_l = void 0;
    this.local$pcm_r = void 0;
    this.local$freeformat = void 0;
    this.local$len = void 0;
    this.local$$receiver = void 0;
    this.local$$receiver_0 = void 0;
    this.local$$receiver_1 = void 0;
    this.local$$receiver_2 = void 0;
    this.local$aid_header = void 0;
    this.local$i = void 0;
    this.local$ret = void 0;
    this.local$fd = fd_0;
    this.local$mp3data = mp3data_0;
    this.local$enc = enc_0;
    this.local$e = void 0;
    this.local$e_0 = void 0;
    this.local$e_1 = void 0;
    this.local$e_2 = void 0;
    this.local$e_3 = void 0;
    this.local$e_4 = void 0;
    this.local$e_5 = void 0;
    this.local$e_6 = void 0;
    this.local$e_7 = void 0;
  }
  Coroutine$lame_decode_initfile_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$lame_decode_initfile_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$lame_decode_initfile_0.prototype.constructor = Coroutine$lame_decode_initfile_0;
  Coroutine$lame_decode_initfile_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$buf = new Int8Array(100);
            this.local$pcm_l = new Float32Array(1152);
            this.local$pcm_r = new Float32Array(1152);
            this.local$freeformat = false;
            this.$this.mpg_8be2vx$.hip_decode_exit_3y1e80$(this.$this.hip_0);
            this.$this.hip_0 = this.$this.mpg_8be2vx$.hip_decode_init();
            this.local$len = 4;
            this.exceptionState_0 = 2;
            this.state_0 = 1;
            this.result_0 = readExact(this.local$fd, this.local$buf, 0, this.local$len, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 1:
            this.exceptionState_0 = 47;
            this.state_0 = 4;
            continue;
          case 2:
            this.exceptionState_0 = 47;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, IOException)) {
              printStackTrace(this.local$e);
              return -1;
            }
             else {
              throw this.local$e;
            }

          case 3:
            this.state_0 = 4;
            continue;
          case 4:
            if (this.local$buf[0] === Kotlin.toByte(73 | 0) && this.local$buf[1] === Kotlin.toByte(68 | 0) && this.local$buf[2] === Kotlin.toByte(51 | 0)) {
              this.local$len = 6;
              this.exceptionState_0 = 6;
              this.state_0 = 5;
              this.result_0 = readExact(this.local$fd, this.local$buf, 0, this.local$len, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 17;
              continue;
            }

          case 5:
            this.exceptionState_0 = 47;
            this.state_0 = 8;
            continue;
          case 6:
            this.exceptionState_0 = 47;
            this.local$e_0 = this.exception_0;
            if (Kotlin.isType(this.local$e_0, IOException)) {
              printStackTrace(this.local$e_0);
              return -1;
            }
             else {
              throw this.local$e_0;
            }

          case 7:
            this.state_0 = 8;
            continue;
          case 8:
            this.local$$receiver = this.local$buf[2];
            this.local$buf[2] = Kotlin.toByte(this.local$$receiver & 127);
            this.local$$receiver_0 = this.local$buf[3];
            this.local$buf[3] = Kotlin.toByte(this.local$$receiver_0 & 127);
            this.local$$receiver_1 = this.local$buf[4];
            this.local$buf[4] = Kotlin.toByte(this.local$$receiver_1 & 127);
            this.local$$receiver_2 = this.local$buf[5];
            this.local$buf[5] = Kotlin.toByte(this.local$$receiver_2 & 127);
            this.local$len = (((toUnsigned(this.local$buf[2]) << 7) + this.local$buf[3] << 7) + this.local$buf[4] << 7) + this.local$buf[5];
            this.exceptionState_0 = 10;
            this.state_0 = 9;
            this.result_0 = skip(this.local$fd, this.local$len, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 9:
            this.exceptionState_0 = 47;
            this.state_0 = 12;
            continue;
          case 10:
            this.exceptionState_0 = 47;
            this.local$e_1 = this.exception_0;
            if (Kotlin.isType(this.local$e_1, IOException)) {
              printStackTrace(this.local$e_1);
              return -1;
            }
             else {
              throw this.local$e_1;
            }

          case 11:
            this.state_0 = 12;
            continue;
          case 12:
            this.local$len = 4;
            this.exceptionState_0 = 14;
            this.state_0 = 13;
            this.result_0 = readExact(this.local$fd, this.local$buf, 0, this.local$len, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 13:
            this.exceptionState_0 = 47;
            this.state_0 = 16;
            continue;
          case 14:
            this.exceptionState_0 = 47;
            this.local$e_2 = this.exception_0;
            if (Kotlin.isType(this.local$e_2, IOException)) {
              printStackTrace(this.local$e_2);
              return -1;
            }
             else {
              throw this.local$e_2;
            }

          case 15:
            this.state_0 = 16;
            continue;
          case 16:
            this.state_0 = 17;
            continue;
          case 17:
            if (this.$this.check_aid_0(this.local$buf)) {
              this.exceptionState_0 = 19;
              this.state_0 = 18;
              this.result_0 = readExact(this.local$fd, this.local$buf, 0, 2, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 30;
              continue;
            }

          case 18:
            this.exceptionState_0 = 47;
            this.state_0 = 21;
            continue;
          case 19:
            this.exceptionState_0 = 47;
            this.local$e_3 = this.exception_0;
            if (Kotlin.isType(this.local$e_3, IOException)) {
              printStackTrace(this.local$e_3);
              return -1;
            }
             else {
              throw this.local$e_3;
            }

          case 20:
            this.state_0 = 21;
            continue;
          case 21:
            this.local$aid_header = toUnsigned(this.local$buf[0]) + (256 * toUnsigned(this.local$buf[1]) | 0) | 0;
            this.exceptionState_0 = 23;
            this.state_0 = 22;
            this.result_0 = skip(this.local$fd, this.local$aid_header - 6 | 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 22:
            this.exceptionState_0 = 47;
            this.state_0 = 25;
            continue;
          case 23:
            this.exceptionState_0 = 47;
            this.local$e_4 = this.exception_0;
            if (Kotlin.isType(this.local$e_4, IOException)) {
              printStackTrace(this.local$e_4);
              return -1;
            }
             else {
              throw this.local$e_4;
            }

          case 24:
            this.state_0 = 25;
            continue;
          case 25:
            this.exceptionState_0 = 27;
            this.state_0 = 26;
            this.result_0 = readExact(this.local$fd, this.local$buf, 0, this.local$len, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 26:
            this.exceptionState_0 = 47;
            this.state_0 = 29;
            continue;
          case 27:
            this.exceptionState_0 = 47;
            this.local$e_5 = this.exception_0;
            if (Kotlin.isType(this.local$e_5, IOException)) {
              printStackTrace(this.local$e_5);
              return -1;
            }
             else {
              throw this.local$e_5;
            }

          case 28:
            this.state_0 = 29;
            continue;
          case 29:
            this.state_0 = 30;
            continue;
          case 30:
            this.local$len = 4;
            this.state_0 = 31;
            continue;
          case 31:
            if (this.$this.is_syncword_mp123_0(this.local$buf)) {
              this.state_0 = 36;
              continue;
            }

            this.local$i = 0;
            while (this.local$i < (this.local$len - 1 | 0)) {
              this.local$buf[this.local$i] = this.local$buf[this.local$i + 1 | 0];
              this.local$i = this.local$i + 1 | 0;
            }

            this.exceptionState_0 = 33;
            this.state_0 = 32;
            this.result_0 = readExact(this.local$fd, this.local$buf, this.local$len - 1 | 0, 1, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 32:
            this.exceptionState_0 = 47;
            this.state_0 = 35;
            continue;
          case 33:
            this.exceptionState_0 = 47;
            this.local$e_6 = this.exception_0;
            if (Kotlin.isType(this.local$e_6, IOException)) {
              printStackTrace(this.local$e_6);
              return -1;
            }
             else {
              throw this.local$e_6;
            }

          case 34:
            this.state_0 = 35;
            continue;
          case 35:
            this.state_0 = 31;
            continue;
          case 36:
            if ((toUnsigned(this.local$buf[2]) & 240) === 0) {
              this.local$freeformat = true;
            }

            this.local$ret = this.$this.mpg_8be2vx$.hip_decode1_headers_ermln0$(this.$this.hip_0, this.local$buf, this.local$len, this.local$pcm_l, this.local$pcm_r, this.local$mp3data, this.local$enc);
            if (this.local$ret === -1) {
              return -1;
            }
             else {
              this.state_0 = 37;
              continue;
            }

          case 37:
            this.state_0 = 38;
            continue;
          case 38:
            if (this.local$mp3data.header_parsed) {
              this.state_0 = 44;
              continue;
            }

            this.exceptionState_0 = 40;
            this.state_0 = 39;
            this.result_0 = readExact(this.local$fd, this.local$buf, 0, this.local$buf.length, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 39:
            this.exceptionState_0 = 47;
            this.state_0 = 42;
            continue;
          case 40:
            this.exceptionState_0 = 47;
            this.local$e_7 = this.exception_0;
            if (Kotlin.isType(this.local$e_7, IOException)) {
              printStackTrace(this.local$e_7);
              return -1;
            }
             else {
              throw this.local$e_7;
            }

          case 41:
            this.state_0 = 42;
            continue;
          case 42:
            this.local$ret = this.$this.mpg_8be2vx$.hip_decode1_headers_ermln0$(this.$this.hip_0, this.local$buf, this.local$buf.length, this.local$pcm_l, this.local$pcm_r, this.local$mp3data, this.local$enc);
            if (this.local$ret === -1) {
              return -1;
            }
             else {
              this.state_0 = 43;
              continue;
            }

          case 43:
            this.state_0 = 38;
            continue;
          case 44:
            if (this.local$mp3data.bitrate === 0 && !this.local$freeformat) {
              this.state_0 = 45;
              this.result_0 = this.$this.lame_decode_initfile_0(this.local$fd, this.local$mp3data, this.local$enc, this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              break;
            }
             else {
              this.state_0 = 46;
              continue;
            }

          case 45:
            return this.result_0;
          case 46:
            if (this.local$mp3data.totalFrames <= 0)
              this.local$mp3data.numSamples = -1;
            return 0;
          case 47:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 47)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  GetAudio.prototype.lame_decode_fromfile_0 = function (fd_0, pcm_l_0, pcm_r_0, mp3data_0, continuation_0, suspended) {
    var instance = new Coroutine$lame_decode_fromfile_0(this, fd_0, pcm_l_0, pcm_r_0, mp3data_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$lame_decode_fromfile_0($this, fd_0, pcm_l_0, pcm_r_0, mp3data_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 12;
    this.$this = $this;
    this.local$len = void 0;
    this.local$buf = void 0;
    this.local$ret = void 0;
    this.local$fd = fd_0;
    this.local$pcm_l = pcm_l_0;
    this.local$pcm_r = pcm_r_0;
    this.local$mp3data = mp3data_0;
    this.local$e = void 0;
  }
  Coroutine$lame_decode_fromfile_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$lame_decode_fromfile_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$lame_decode_fromfile_0.prototype.constructor = Coroutine$lame_decode_fromfile_0;
  Coroutine$lame_decode_fromfile_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$len = 0;
            this.local$buf = new Int8Array(1024);
            this.local$ret = this.$this.mpg_8be2vx$.hip_decode1_headers_ermln0$(this.$this.hip_0, this.local$buf, this.local$len, this.local$pcm_l, this.local$pcm_r, this.local$mp3data, new FrameSkip());
            if (this.local$ret !== 0) {
              return this.local$ret;
            }
             else {
              this.state_0 = 1;
              continue;
            }

          case 1:
            this.state_0 = 2;
            continue;
          case 2:
            this.exceptionState_0 = 4;
            this.state_0 = 3;
            this.result_0 = this.local$fd.read_mj6st8$(this.local$buf, 0, 1024, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            break;
          case 3:
            this.local$len = this.result_0;
            this.exceptionState_0 = 12;
            this.state_0 = 6;
            continue;
          case 4:
            this.exceptionState_0 = 12;
            this.local$e = this.exception_0;
            if (Kotlin.isType(this.local$e, IOException)) {
              printStackTrace(this.local$e);
              return -1;
            }
             else {
              throw this.local$e;
            }

          case 5:
            this.state_0 = 6;
            continue;
          case 6:
            if (this.local$len <= 0) {
              this.local$ret = this.$this.mpg_8be2vx$.hip_decode1_headers_ermln0$(this.$this.hip_0, this.local$buf, 0, this.local$pcm_l, this.local$pcm_r, this.local$mp3data, new FrameSkip());
              if (this.local$ret <= 0) {
                this.$this.mpg_8be2vx$.hip_decode_exit_3y1e80$(this.$this.hip_0);
                return -1;
              }
               else {
                this.state_0 = 7;
                continue;
              }
            }
             else {
              this.state_0 = 8;
              continue;
            }

          case 7:
            this.state_0 = 11;
            continue;
          case 8:
            this.local$ret = this.$this.mpg_8be2vx$.hip_decode1_headers_ermln0$(this.$this.hip_0, this.local$buf, this.local$len, this.local$pcm_l, this.local$pcm_r, this.local$mp3data, new FrameSkip());
            if (this.local$ret === -1) {
              this.$this.mpg_8be2vx$.hip_decode_exit_3y1e80$(this.$this.hip_0);
              return -1;
            }
             else {
              this.state_0 = 9;
              continue;
            }

          case 9:
            if (this.local$ret > 0) {
              this.state_0 = 11;
              continue;
            }
             else {
              this.state_0 = 10;
              continue;
            }

          case 10:
            this.state_0 = 2;
            continue;
          case 11:
            return this.local$ret;
          case 12:
            throw this.exception_0;
        }
      }
       catch (e) {
        if (this.state_0 === 12)
          throw e;
        else {
          this.state_0 = this.exceptionState_0;
          this.exception_0 = e;
        }
      }
     while (true);
  };
  function GetAudio$Companion() {
    GetAudio$Companion_instance = this;
    this.abl2_0 = Kotlin.charArrayOf(Kotlin.toChar(0), Kotlin.toChar(7), Kotlin.toChar(7), Kotlin.toChar(7), Kotlin.toChar(0), Kotlin.toChar(7), Kotlin.toChar(0), Kotlin.toChar(0), Kotlin.toChar(0), Kotlin.toChar(0), Kotlin.toChar(0), Kotlin.toChar(8), Kotlin.toChar(8), Kotlin.toChar(8), Kotlin.toChar(8), Kotlin.toChar(8));
  }
  GetAudio$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var GetAudio$Companion_instance = null;
  function GetAudio$Companion_getInstance() {
    if (GetAudio$Companion_instance === null) {
      new GetAudio$Companion();
    }
    return GetAudio$Companion_instance;
  }
  GetAudio.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'GetAudio',
    interfaces: []
  };
  function Lame() {
    this.flags = new LameGlobalFlags();
    this.vbr = new VBRTag();
    this.parser = new Parse();
    this.intf = new Interface(this.vbr);
    this.mpg = new MPGLib(this.intf);
    this.audio = new GetAudio(this.parser, this.mpg);
  }
  Lame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Lame',
    interfaces: []
  };
  function LameGlobalFlags() {
    this.num_samples = -1;
    this.inNumChannels = 2;
    this.inSampleRate = 44100;
  }
  LameGlobalFlags.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'LameGlobalFlags',
    interfaces: []
  };
  function MP3Data() {
    this.header_parsed = false;
    this.stereo = 0;
    this.samplerate = 0;
    this.bitrate = 0;
    this.mode = 0;
    this.mode_ext = 0;
    this.frameSize = 0;
    this.numSamples = 0;
    this.totalFrames = 0;
    this.framesDecodedCounter = 0;
  }
  MP3Data.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MP3Data',
    interfaces: []
  };
  function Parse() {
    this.layer = -1;
    this.mp3InputData = new MP3Data();
  }
  Parse.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Parse',
    interfaces: []
  };
  function PlottingData() {
    PlottingData$Companion_getInstance();
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      var array_0 = Array_0(2);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
        array_0[i_0] = new Float64Array(576);
      }
      array[i] = array_0;
    }
    this.mpg123xr = array;
    var array_1 = Array_0(2);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      var array_2 = Array_0(2);
      var tmp$_2;
      tmp$_2 = array_2.length - 1 | 0;
      for (var i_2 = 0; i_2 <= tmp$_2; i_2++) {
        array_2[i_2] = new Float64Array(PlottingData$Companion_getInstance().SBMAX_l);
      }
      array_1[i_1] = array_2;
    }
    this.sfb = array_1;
    var array_3 = Array_0(2);
    var tmp$_3;
    tmp$_3 = array_3.length - 1 | 0;
    for (var i_3 = 0; i_3 <= tmp$_3; i_3++) {
      var array_4 = Array_0(2);
      var tmp$_4;
      tmp$_4 = array_4.length - 1 | 0;
      for (var i_4 = 0; i_4 <= tmp$_4; i_4++) {
        array_4[i_4] = new Float64Array(3 * PlottingData$Companion_getInstance().SBMAX_s | 0);
      }
      array_3[i_3] = array_4;
    }
    this.sfb_s = array_3;
    var array_5 = Array_0(2);
    var tmp$_5;
    tmp$_5 = array_5.length - 1 | 0;
    for (var i_5 = 0; i_5 <= tmp$_5; i_5++) {
      array_5[i_5] = new Int32Array(2);
    }
    this.qss = array_5;
    var array_6 = Array_0(2);
    var tmp$_6;
    tmp$_6 = array_6.length - 1 | 0;
    for (var i_6 = 0; i_6 <= tmp$_6; i_6++) {
      array_6[i_6] = new Int32Array(2);
    }
    this.big_values = array_6;
    var array_7 = Array_0(2);
    var tmp$_7;
    tmp$_7 = array_7.length - 1 | 0;
    for (var i_7 = 0; i_7 <= tmp$_7; i_7++) {
      var array_8 = Array_0(2);
      var tmp$_8;
      tmp$_8 = array_8.length - 1 | 0;
      for (var i_8 = 0; i_8 <= tmp$_8; i_8++) {
        array_8[i_8] = new Int32Array(3);
      }
      array_7[i_7] = array_8;
    }
    this.sub_gain = array_7;
    var array_9 = Array_0(2);
    var tmp$_9;
    tmp$_9 = array_9.length - 1 | 0;
    for (var i_9 = 0; i_9 <= tmp$_9; i_9++) {
      array_9[i_9] = new Int32Array(2);
    }
    this.scalefac_scale = array_9;
    var array_10 = Array_0(2);
    var tmp$_10;
    tmp$_10 = array_10.length - 1 | 0;
    for (var i_10 = 0; i_10 <= tmp$_10; i_10++) {
      array_10[i_10] = new Int32Array(2);
    }
    this.preflag = array_10;
    var array_11 = Array_0(2);
    var tmp$_11;
    tmp$_11 = array_11.length - 1 | 0;
    for (var i_11 = 0; i_11 <= tmp$_11; i_11++) {
      array_11[i_11] = new Int32Array(2);
    }
    this.mpg123blocktype = array_11;
    var array_12 = Array_0(2);
    var tmp$_12;
    tmp$_12 = array_12.length - 1 | 0;
    for (var i_12 = 0; i_12 <= tmp$_12; i_12++) {
      array_12[i_12] = new Int32Array(2);
    }
    this.mixed = array_12;
    var array_13 = Array_0(2);
    var tmp$_13;
    tmp$_13 = array_13.length - 1 | 0;
    for (var i_13 = 0; i_13 <= tmp$_13; i_13++) {
      array_13[i_13] = new Int32Array(2);
    }
    this.mainbits = array_13;
    var array_14 = Array_0(2);
    var tmp$_14;
    tmp$_14 = array_14.length - 1 | 0;
    for (var i_14 = 0; i_14 <= tmp$_14; i_14++) {
      array_14[i_14] = new Int32Array(2);
    }
    this.sfbits = array_14;
    this.stereo = 0;
    this.js = 0;
    this.ms_stereo = 0;
    this.i_stereo = 0;
    this.emph = 0;
    this.bitrate = 0;
    this.sampfreq = 0;
    this.maindata = 0;
    this.crc = 0;
    this.padding = 0;
    this.scfsi = new Int32Array(2);
  }
  function PlottingData$Companion() {
    PlottingData$Companion_instance = this;
    this.SBMAX_l = 22;
    this.SBMAX_s = 13;
  }
  PlottingData$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var PlottingData$Companion_instance = null;
  function PlottingData$Companion_getInstance() {
    if (PlottingData$Companion_instance === null) {
      new PlottingData$Companion();
    }
    return PlottingData$Companion_instance;
  }
  PlottingData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'PlottingData',
    interfaces: []
  };
  function Tables() {
    Tables_instance = this;
    this.bitrate_table = [new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160, -1]), new Int32Array([0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, -1]), new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, -1, -1, -1, -1, -1, -1, -1])];
    this.samplerate_table = [new Int32Array([22050, 24000, 16000, -1]), new Int32Array([44100, 48000, 32000, -1]), new Int32Array([11025, 12000, 8000, -1])];
  }
  Tables.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Tables',
    interfaces: []
  };
  var Tables_instance = null;
  function Tables_getInstance() {
    if (Tables_instance === null) {
      new Tables();
    }
    return Tables_instance;
  }
  function VBRTag() {
    VBRTag$Companion_getInstance();
  }
  function VBRTag$Companion() {
    VBRTag$Companion_instance = this;
    this.NUMTOCENTRIES = 100;
    this.FRAMES_FLAG_0 = 1;
    this.BYTES_FLAG_0 = 2;
    this.TOC_FLAG_0 = 4;
    this.VBR_SCALE_FLAG_0 = 8;
    this.VBRTag0_0 = 'Xing';
    this.VBRTag1_0 = 'Info';
    this.ISO_8859_1_0 = lang.Charsets.ISO_8859_1;
  }
  VBRTag$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var VBRTag$Companion_instance = null;
  function VBRTag$Companion_getInstance() {
    if (VBRTag$Companion_instance === null) {
      new VBRTag$Companion();
    }
    return VBRTag$Companion_instance;
  }
  VBRTag.prototype.extractInteger_0 = function (buf, bufPos) {
    var x = toUnsigned(buf[bufPos + 0 | 0]);
    x = x << 8;
    x = x | toUnsigned(buf[bufPos + 1 | 0]);
    x = x << 8;
    x = x | toUnsigned(buf[bufPos + 2 | 0]);
    x = x << 8;
    x = x | toUnsigned(buf[bufPos + 3 | 0]);
    return x;
  };
  VBRTag.prototype.isVbrTag_0 = function (buf, bufPos) {
    var toIndex = bufPos + VBRTag$Companion_getInstance().VBRTag0_0.length | 0;
    var tmp$ = Kotlin.equals(toString(buf.slice(bufPos, toIndex), VBRTag$Companion_getInstance().ISO_8859_1_0), VBRTag$Companion_getInstance().VBRTag0_0);
    if (!tmp$) {
      var toIndex_0 = bufPos + VBRTag$Companion_getInstance().VBRTag1_0.length | 0;
      tmp$ = Kotlin.equals(toString(buf.slice(bufPos, toIndex_0), VBRTag$Companion_getInstance().ISO_8859_1_0), VBRTag$Companion_getInstance().VBRTag1_0);
    }
    return tmp$;
  };
  VBRTag.prototype.getVbrTag_fqrh44$ = function (buf) {
    var pTagData = new VBRTagData();
    var bufPos = 0;
    pTagData.flags = 0;
    var hId = toUnsigned(buf[bufPos + 1 | 0]) >> 3 & 1;
    var hSrIndex = toUnsigned(buf[bufPos + 2 | 0]) >> 2 & 3;
    var hMode = toUnsigned(buf[bufPos + 3 | 0]) >> 6 & 3;
    var hBitrate = toUnsigned(buf[bufPos + 2 | 0]) >> 4 & 15;
    hBitrate = Tables_getInstance().bitrate_table[hId][hBitrate];
    pTagData.samprate = toUnsigned(buf[bufPos + 1 | 0]) >> 4 === 14 ? Tables_getInstance().samplerate_table[2][hSrIndex] : Tables_getInstance().samplerate_table[hId][hSrIndex];
    if (hId !== 0) {
      bufPos = bufPos + (hMode !== 3 ? 32 + 4 | 0 : 17 + 4 | 0) | 0;
    }
     else {
      bufPos = bufPos + (hMode !== 3 ? 17 + 4 | 0 : 9 + 4 | 0) | 0;
    }
    if (!this.isVbrTag_0(buf, bufPos))
      return null;
    bufPos = bufPos + 4 | 0;
    pTagData.hId = hId;
    pTagData.flags = this.extractInteger_0(buf, bufPos);
    var head_flags = pTagData.flags;
    bufPos = bufPos + 4 | 0;
    if ((head_flags & VBRTag$Companion_getInstance().FRAMES_FLAG_0) !== 0) {
      pTagData.frames = this.extractInteger_0(buf, bufPos);
      bufPos = bufPos + 4 | 0;
    }
    if ((head_flags & VBRTag$Companion_getInstance().BYTES_FLAG_0) !== 0) {
      pTagData.bytes = this.extractInteger_0(buf, bufPos);
      bufPos = bufPos + 4 | 0;
    }
    if ((head_flags & VBRTag$Companion_getInstance().TOC_FLAG_0) !== 0) {
      copyRangeTo(buf, bufPos + 0 | 0, pTagData.toc, 0, VBRTag$Companion_getInstance().NUMTOCENTRIES);
      bufPos = bufPos + VBRTag$Companion_getInstance().NUMTOCENTRIES | 0;
    }
    pTagData.vbrScale = -1;
    if ((head_flags & VBRTag$Companion_getInstance().VBR_SCALE_FLAG_0) !== 0) {
      pTagData.vbrScale = this.extractInteger_0(buf, bufPos);
      bufPos = bufPos + 4 | 0;
    }
    pTagData.headersize = Kotlin.imul((hId + 1 | 0) * 72000 | 0, hBitrate) / pTagData.samprate | 0;
    bufPos = bufPos + 21 | 0;
    var encDelay = toUnsigned(buf[bufPos + 0 | 0]) << 4;
    encDelay = encDelay + (toUnsigned(buf[bufPos + 1 | 0]) >> 4) | 0;
    var encPadding = (toUnsigned(buf[bufPos + 1 | 0]) & 15) << 8;
    encPadding = encPadding + (toUnsigned(buf[bufPos + 2 | 0]) & 255) | 0;
    if (encDelay < 0 || encDelay > 3000)
      encDelay = -1;
    if (encPadding < 0 || encPadding > 3000)
      encPadding = -1;
    pTagData.encDelay = encDelay;
    pTagData.encPadding = encPadding;
    return pTagData;
  };
  VBRTag.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VBRTag',
    interfaces: []
  };
  function VBRTagData() {
    this.frames = 0;
    this.headersize = 0;
    this.encDelay = 0;
    this.encPadding = 0;
    this.hId = 0;
    this.samprate = 0;
    this.flags = 0;
    this.bytes = 0;
    this.vbrScale = 0;
    this.toc = new Int8Array(VBRTag$Companion_getInstance().NUMTOCENTRIES);
  }
  VBRTagData.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'VBRTagData',
    interfaces: []
  };
  function Common() {
    Common$Companion_getInstance();
    var array = Array_0(27);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Float32Array(64);
    }
    this.muls = array;
  }
  function Common$Companion() {
    Common$Companion_instance = this;
    this.tabsel_123 = [[new Int32Array([0, 32, 64, 96, 128, 160, 192, 224, 256, 288, 320, 352, 384, 416, 448]), new Int32Array([0, 32, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320, 384]), new Int32Array([0, 32, 40, 48, 56, 64, 80, 96, 112, 128, 160, 192, 224, 256, 320])], [new Int32Array([0, 32, 48, 56, 64, 80, 96, 112, 128, 144, 160, 176, 192, 224, 256]), new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160]), new Int32Array([0, 8, 16, 24, 32, 40, 48, 56, 64, 80, 96, 112, 128, 144, 160])]];
    this.freqs = new Int32Array([44100, 48000, 32000, 22050, 24000, 16000, 11025, 12000, 8000]);
    this.MAX_INPUT_FRAMESIZE_0 = 4096;
  }
  Common$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Common$Companion_instance = null;
  function Common$Companion_getInstance() {
    if (Common$Companion_instance === null) {
      new Common$Companion();
    }
    return Common$Companion_instance;
  }
  Common.prototype.head_check_yhmem3$ = function (head, check_layer) {
    var nLayer = Kotlin.Long.fromInt(4).subtract(head.shiftRight(17).and(Kotlin.Long.fromInt(3))).toInt();
    if (!Kotlin.equals(head.and(new Kotlin.Long(-2097152, 0)), new Kotlin.Long(-2097152, 0)))
      return false;
    if (nLayer === 4)
      return false;
    if (check_layer > 0 && nLayer !== check_layer)
      return false;
    if (Kotlin.equals(head.shiftRight(12).and(Kotlin.Long.fromInt(15)), Kotlin.Long.fromInt(15)))
      return false;
    if (Kotlin.equals(head.shiftRight(10).and(Kotlin.Long.fromInt(3)), Kotlin.Long.fromInt(3)))
      return false;
    if (Kotlin.equals(head.and(Kotlin.Long.fromInt(3)), Kotlin.Long.fromInt(2)))
      return false;
    return true;
  };
  Common.prototype.decode_header_a35vlz$ = function (fr, newhead) {
    var tmp$;
    if (!Kotlin.equals(newhead.and(Kotlin.Long.fromInt(1048576)), Kotlin.Long.ZERO)) {
      fr.lsf = !Kotlin.equals(newhead.and(Kotlin.Long.fromInt(524288)), Kotlin.Long.ZERO) ? 0 : 1;
      fr.mpeg25 = false;
    }
     else {
      fr.lsf = 1;
      fr.mpeg25 = true;
    }
    fr.lay = Kotlin.Long.fromInt(4).subtract(newhead.shiftRight(17).and(Kotlin.Long.fromInt(3))).toInt();
    if (Kotlin.equals(newhead.shiftRight(10).and(Kotlin.Long.fromInt(3)), Kotlin.Long.fromInt(3)))
      throw new RuntimeException('Stream error');
    if (fr.mpeg25) {
      fr.sampling_frequency = Kotlin.Long.fromInt(6).add(newhead.shiftRight(10).and(Kotlin.Long.fromInt(3))).toInt();
    }
     else {
      fr.sampling_frequency = newhead.shiftRight(10).and(Kotlin.Long.fromInt(3)).add(Kotlin.Long.fromInt(fr.lsf * 3 | 0)).toInt();
    }
    fr.error_protection = Kotlin.equals(newhead.shiftRight(16).and(Kotlin.Long.ONE), Kotlin.Long.ZERO);
    if (fr.mpeg25)
      fr.bitrate_index = newhead.shiftRight(12).and(Kotlin.Long.fromInt(15)).toInt();
    fr.bitrate_index = newhead.shiftRight(12).and(Kotlin.Long.fromInt(15)).toInt();
    fr.padding = newhead.shiftRight(9).and(Kotlin.Long.ONE).toInt();
    fr.extension = newhead.shiftRight(8).and(Kotlin.Long.ONE).toInt();
    fr.mode = newhead.shiftRight(6).and(Kotlin.Long.fromInt(3)).toInt();
    fr.mode_ext = newhead.shiftRight(4).and(Kotlin.Long.fromInt(3)).toInt();
    fr.copyright = newhead.shiftRight(3).and(Kotlin.Long.ONE).toInt();
    fr.original = newhead.shiftRight(2).and(Kotlin.Long.ONE).toInt();
    fr.emphasis = newhead.and(Kotlin.Long.fromInt(3)).toInt();
    fr.stereo = fr.mode === MPG123_getInstance().MPG_MD_MONO ? 1 : 2;
    tmp$ = fr.lay;
    if (tmp$ === 1) {
      fr.framesize = Common$Companion_getInstance().tabsel_123[fr.lsf][0][fr.bitrate_index] * 12000 | 0;
      fr.framesize = fr.framesize / Common$Companion_getInstance().freqs[fr.sampling_frequency] | 0;
      fr.framesize = (fr.framesize + fr.padding << 2) - 4 | 0;
      fr.down_sample = 0;
      fr.down_sample_sblimit = MPG123_getInstance().SBLIMIT >> fr.down_sample;
    }
     else if (tmp$ === 2) {
      fr.framesize = Common$Companion_getInstance().tabsel_123[fr.lsf][1][fr.bitrate_index] * 144000 | 0;
      fr.framesize = fr.framesize / Common$Companion_getInstance().freqs[fr.sampling_frequency] | 0;
      fr.framesize = fr.framesize + (fr.padding - 4) | 0;
      fr.down_sample = 0;
      fr.down_sample_sblimit = MPG123_getInstance().SBLIMIT >> fr.down_sample;
    }
     else if (tmp$ === 3) {
      if (fr.framesize > Common$Companion_getInstance().MAX_INPUT_FRAMESIZE_0) {
        lang.Console.error_61zpoe$('Frame size too big.');
        fr.framesize = Common$Companion_getInstance().MAX_INPUT_FRAMESIZE_0;
        return 0;
      }
      if (fr.bitrate_index === 0)
        fr.framesize = 0;
      else {
        fr.framesize = Common$Companion_getInstance().tabsel_123[fr.lsf][2][fr.bitrate_index] * 144000 | 0;
        fr.framesize = fr.framesize / (Common$Companion_getInstance().freqs[fr.sampling_frequency] << fr.lsf) | 0;
        fr.framesize = fr.framesize + fr.padding - 4 | 0;
      }
    }
     else {
      lang.Console.error_61zpoe$('Sorry, layer ' + fr.lay + ' not supported');
      return 0;
    }
    return 1;
  };
  Common.prototype.getbits_mwy59t$ = function (mp, number_of_bits) {
    var rval;
    if (number_of_bits <= 0 || mp.wordpointer == null)
      return 0;
    rval = Kotlin.Long.fromInt(toUnsigned(mp.wordpointer[mp.wordpointerPos + 0 | 0]));
    rval = rval.shiftLeft(8);
    rval = rval.or(Kotlin.Long.fromInt(toUnsigned(mp.wordpointer[mp.wordpointerPos + 1 | 0])));
    rval = rval.shiftLeft(8);
    rval = rval.or(Kotlin.Long.fromInt(toUnsigned(mp.wordpointer[mp.wordpointerPos + 2 | 0])));
    rval = rval.shiftLeft(mp.bitindex);
    rval = rval.and(Kotlin.Long.fromInt(16777215));
    mp.bitindex = mp.bitindex + number_of_bits | 0;
    rval = rval.shiftRight(24 - number_of_bits | 0);
    mp.wordpointerPos = mp.wordpointerPos + (mp.bitindex >> 3) | 0;
    mp.bitindex = mp.bitindex & 7;
    return rval.toInt();
  };
  Common.prototype.getbits_fast_mwy59t$ = function (mp, number_of_bits) {
    var rval;
    rval = Kotlin.Long.fromInt(toUnsigned(mp.wordpointer[mp.wordpointerPos + 0 | 0]));
    rval = rval.shiftLeft(8);
    rval = rval.or(Kotlin.Long.fromInt(toUnsigned(mp.wordpointer[mp.wordpointerPos + 1 | 0])));
    rval = rval.shiftLeft(mp.bitindex);
    rval = rval.and(Kotlin.Long.fromInt(65535));
    mp.bitindex = mp.bitindex + number_of_bits | 0;
    rval = rval.shiftRight(16 - number_of_bits | 0);
    mp.wordpointerPos = mp.wordpointerPos + (mp.bitindex >> 3) | 0;
    mp.bitindex = mp.bitindex & 7;
    return rval.toInt();
  };
  Common.prototype.set_pointer_mwy59t$ = function (mp, backstep) {
    if (mp.fsizeold < 0 && backstep > 0) {
      lang.Console.error_61zpoe$("hip: Can't step back " + backstep + ' bytes!');
      return MPGLib$Companion_getInstance().MP3_ERR;
    }
    var bsbufold = mp.bsspace[1 - mp.bsnum | 0];
    var bsbufoldPos = 512;
    mp.wordpointerPos = mp.wordpointerPos - backstep | 0;
    if (backstep !== 0)
      copyRangeTo(bsbufold, bsbufoldPos + mp.fsizeold - backstep | 0, mp.wordpointer, mp.wordpointerPos, backstep);
    mp.bitindex = 0;
    return MPGLib$Companion_getInstance().MP3_OK;
  };
  Common.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Common',
    interfaces: []
  };
  function DCT64() {
  }
  DCT64.prototype.dct64_1_sipw9w$ = function (out0, out0Pos, out1, out1Pos, b1, b2, samples, samplesPos, pnts) {
    var costab = pnts[0];
    b1[0] = samples[samplesPos + 0 | 0] + samples[samplesPos + 31 | 0];
    b1[31] = (samples[samplesPos + 0 | 0] - samples[samplesPos + 31 | 0]) * costab[0];
    b1[1] = samples[samplesPos + 1 | 0] + samples[samplesPos + 30 | 0];
    b1[30] = (samples[samplesPos + 1 | 0] - samples[samplesPos + 30 | 0]) * costab[1];
    b1[2] = samples[samplesPos + 2 | 0] + samples[samplesPos + 29 | 0];
    b1[29] = (samples[samplesPos + 2 | 0] - samples[samplesPos + 29 | 0]) * costab[2];
    b1[3] = samples[samplesPos + 3 | 0] + samples[samplesPos + 28 | 0];
    b1[28] = (samples[samplesPos + 3 | 0] - samples[samplesPos + 28 | 0]) * costab[3];
    b1[4] = samples[samplesPos + 4 | 0] + samples[samplesPos + 27 | 0];
    b1[27] = (samples[samplesPos + 4 | 0] - samples[samplesPos + 27 | 0]) * costab[4];
    b1[5] = samples[samplesPos + 5 | 0] + samples[samplesPos + 26 | 0];
    b1[26] = (samples[samplesPos + 5 | 0] - samples[samplesPos + 26 | 0]) * costab[5];
    b1[6] = samples[samplesPos + 6 | 0] + samples[samplesPos + 25 | 0];
    b1[25] = (samples[samplesPos + 6 | 0] - samples[samplesPos + 25 | 0]) * costab[6];
    b1[7] = samples[samplesPos + 7 | 0] + samples[samplesPos + 24 | 0];
    b1[24] = (samples[samplesPos + 7 | 0] - samples[samplesPos + 24 | 0]) * costab[7];
    b1[8] = samples[samplesPos + 8 | 0] + samples[samplesPos + 23 | 0];
    b1[23] = (samples[samplesPos + 8 | 0] - samples[samplesPos + 23 | 0]) * costab[8];
    b1[9] = samples[samplesPos + 9 | 0] + samples[samplesPos + 22 | 0];
    b1[22] = (samples[samplesPos + 9 | 0] - samples[samplesPos + 22 | 0]) * costab[9];
    b1[10] = samples[samplesPos + 10 | 0] + samples[samplesPos + 21 | 0];
    b1[21] = (samples[samplesPos + 10 | 0] - samples[samplesPos + 21 | 0]) * costab[10];
    b1[11] = samples[samplesPos + 11 | 0] + samples[samplesPos + 20 | 0];
    b1[20] = (samples[samplesPos + 11 | 0] - samples[samplesPos + 20 | 0]) * costab[11];
    b1[12] = samples[samplesPos + 12 | 0] + samples[samplesPos + 19 | 0];
    b1[19] = (samples[samplesPos + 12 | 0] - samples[samplesPos + 19 | 0]) * costab[12];
    b1[13] = samples[samplesPos + 13 | 0] + samples[samplesPos + 18 | 0];
    b1[18] = (samples[samplesPos + 13 | 0] - samples[samplesPos + 18 | 0]) * costab[13];
    b1[14] = samples[samplesPos + 14 | 0] + samples[samplesPos + 17 | 0];
    b1[17] = (samples[samplesPos + 14 | 0] - samples[samplesPos + 17 | 0]) * costab[14];
    b1[15] = samples[samplesPos + 15 | 0] + samples[samplesPos + 16 | 0];
    b1[16] = (samples[samplesPos + 15 | 0] - samples[samplesPos + 16 | 0]) * costab[15];
    var costab_0 = pnts[1];
    b1[b2 + 0 | 0] = b1[0] + b1[15];
    b1[b2 + 15 | 0] = (b1[0] - b1[15]) * costab_0[0];
    b1[b2 + 1 | 0] = b1[1] + b1[14];
    b1[b2 + 14 | 0] = (b1[1] - b1[14]) * costab_0[1];
    b1[b2 + 2 | 0] = b1[2] + b1[13];
    b1[b2 + 13 | 0] = (b1[2] - b1[13]) * costab_0[2];
    b1[b2 + 3 | 0] = b1[3] + b1[12];
    b1[b2 + 12 | 0] = (b1[3] - b1[12]) * costab_0[3];
    b1[b2 + 4 | 0] = b1[4] + b1[11];
    b1[b2 + 11 | 0] = (b1[4] - b1[11]) * costab_0[4];
    b1[b2 + 5 | 0] = b1[5] + b1[10];
    b1[b2 + 10 | 0] = (b1[5] - b1[10]) * costab_0[5];
    b1[b2 + 6 | 0] = b1[6] + b1[9];
    b1[b2 + 9 | 0] = (b1[6] - b1[9]) * costab_0[6];
    b1[b2 + 7 | 0] = b1[7] + b1[8];
    b1[b2 + 8 | 0] = (b1[7] - b1[8]) * costab_0[7];
    b1[b2 + 16 | 0] = b1[16] + b1[31];
    b1[b2 + 31 | 0] = (b1[31] - b1[16]) * costab_0[0];
    b1[b2 + 17 | 0] = b1[17] + b1[30];
    b1[b2 + 30 | 0] = (b1[30] - b1[17]) * costab_0[1];
    b1[b2 + 18 | 0] = b1[18] + b1[29];
    b1[b2 + 29 | 0] = (b1[29] - b1[18]) * costab_0[2];
    b1[b2 + 19 | 0] = b1[19] + b1[28];
    b1[b2 + 28 | 0] = (b1[28] - b1[19]) * costab_0[3];
    b1[b2 + 20 | 0] = b1[20] + b1[27];
    b1[b2 + 27 | 0] = (b1[27] - b1[20]) * costab_0[4];
    b1[b2 + 21 | 0] = b1[21] + b1[26];
    b1[b2 + 26 | 0] = (b1[26] - b1[21]) * costab_0[5];
    b1[b2 + 22 | 0] = b1[22] + b1[25];
    b1[b2 + 25 | 0] = (b1[25] - b1[22]) * costab_0[6];
    b1[b2 + 23 | 0] = b1[23] + b1[24];
    b1[b2 + 24 | 0] = (b1[24] - b1[23]) * costab_0[7];
    var costab_1 = pnts[2];
    b1[0] = b1[b2 + 0 | 0] + b1[b2 + 7 | 0];
    b1[7] = (b1[b2 + 0 | 0] - b1[b2 + 7 | 0]) * costab_1[0];
    b1[1] = b1[b2 + 1 | 0] + b1[b2 + 6 | 0];
    b1[6] = (b1[b2 + 1 | 0] - b1[b2 + 6 | 0]) * costab_1[1];
    b1[2] = b1[b2 + 2 | 0] + b1[b2 + 5 | 0];
    b1[5] = (b1[b2 + 2 | 0] - b1[b2 + 5 | 0]) * costab_1[2];
    b1[3] = b1[b2 + 3 | 0] + b1[b2 + 4 | 0];
    b1[4] = (b1[b2 + 3 | 0] - b1[b2 + 4 | 0]) * costab_1[3];
    b1[8] = b1[b2 + 8 | 0] + b1[b2 + 15 | 0];
    b1[15] = (b1[b2 + 15 | 0] - b1[b2 + 8 | 0]) * costab_1[0];
    b1[9] = b1[b2 + 9 | 0] + b1[b2 + 14 | 0];
    b1[14] = (b1[b2 + 14 | 0] - b1[b2 + 9 | 0]) * costab_1[1];
    b1[10] = b1[b2 + 10 | 0] + b1[b2 + 13 | 0];
    b1[13] = (b1[b2 + 13 | 0] - b1[b2 + 10 | 0]) * costab_1[2];
    b1[11] = b1[b2 + 11 | 0] + b1[b2 + 12 | 0];
    b1[12] = (b1[b2 + 12 | 0] - b1[b2 + 11 | 0]) * costab_1[3];
    b1[16] = b1[b2 + 16 | 0] + b1[b2 + 23 | 0];
    b1[23] = (b1[b2 + 16 | 0] - b1[b2 + 23 | 0]) * costab_1[0];
    b1[17] = b1[b2 + 17 | 0] + b1[b2 + 22 | 0];
    b1[22] = (b1[b2 + 17 | 0] - b1[b2 + 22 | 0]) * costab_1[1];
    b1[18] = b1[b2 + 18 | 0] + b1[b2 + 21 | 0];
    b1[21] = (b1[b2 + 18 | 0] - b1[b2 + 21 | 0]) * costab_1[2];
    b1[19] = b1[b2 + 19 | 0] + b1[b2 + 20 | 0];
    b1[20] = (b1[b2 + 19 | 0] - b1[b2 + 20 | 0]) * costab_1[3];
    b1[24] = b1[b2 + 24 | 0] + b1[b2 + 31 | 0];
    b1[31] = (b1[b2 + 31 | 0] - b1[b2 + 24 | 0]) * costab_1[0];
    b1[25] = b1[b2 + 25 | 0] + b1[b2 + 30 | 0];
    b1[30] = (b1[b2 + 30 | 0] - b1[b2 + 25 | 0]) * costab_1[1];
    b1[26] = b1[b2 + 26 | 0] + b1[b2 + 29 | 0];
    b1[29] = (b1[b2 + 29 | 0] - b1[b2 + 26 | 0]) * costab_1[2];
    b1[27] = b1[b2 + 27 | 0] + b1[b2 + 28 | 0];
    b1[28] = (b1[b2 + 28 | 0] - b1[b2 + 27 | 0]) * costab_1[3];
    var cos0 = pnts[3][0];
    var cos1 = pnts[3][1];
    b1[b2 + 0 | 0] = b1[0] + b1[3];
    b1[b2 + 3 | 0] = (b1[0] - b1[3]) * cos0;
    b1[b2 + 1 | 0] = b1[1] + b1[2];
    b1[b2 + 2 | 0] = (b1[1] - b1[2]) * cos1;
    b1[b2 + 4 | 0] = b1[4] + b1[7];
    b1[b2 + 7 | 0] = (b1[7] - b1[4]) * cos0;
    b1[b2 + 5 | 0] = b1[5] + b1[6];
    b1[b2 + 6 | 0] = (b1[6] - b1[5]) * cos1;
    b1[b2 + 8 | 0] = b1[8] + b1[11];
    b1[b2 + 11 | 0] = (b1[8] - b1[11]) * cos0;
    b1[b2 + 9 | 0] = b1[9] + b1[10];
    b1[b2 + 10 | 0] = (b1[9] - b1[10]) * cos1;
    b1[b2 + 12 | 0] = b1[12] + b1[15];
    b1[b2 + 15 | 0] = (b1[15] - b1[12]) * cos0;
    b1[b2 + 13 | 0] = b1[13] + b1[14];
    b1[b2 + 14 | 0] = (b1[14] - b1[13]) * cos1;
    b1[b2 + 16 | 0] = b1[16] + b1[19];
    b1[b2 + 19 | 0] = (b1[16] - b1[19]) * cos0;
    b1[b2 + 17 | 0] = b1[17] + b1[18];
    b1[b2 + 18 | 0] = (b1[17] - b1[18]) * cos1;
    b1[b2 + 20 | 0] = b1[20] + b1[23];
    b1[b2 + 23 | 0] = (b1[23] - b1[20]) * cos0;
    b1[b2 + 21 | 0] = b1[21] + b1[22];
    b1[b2 + 22 | 0] = (b1[22] - b1[21]) * cos1;
    b1[b2 + 24 | 0] = b1[24] + b1[27];
    b1[b2 + 27 | 0] = (b1[24] - b1[27]) * cos0;
    b1[b2 + 25 | 0] = b1[25] + b1[26];
    b1[b2 + 26 | 0] = (b1[25] - b1[26]) * cos1;
    b1[b2 + 28 | 0] = b1[28] + b1[31];
    b1[b2 + 31 | 0] = (b1[31] - b1[28]) * cos0;
    b1[b2 + 29 | 0] = b1[29] + b1[30];
    b1[b2 + 30 | 0] = (b1[30] - b1[29]) * cos1;
    var cos0_0 = pnts[4][0];
    b1[0] = b1[b2 + 0 | 0] + b1[b2 + 1 | 0];
    b1[1] = (b1[b2 + 0 | 0] - b1[b2 + 1 | 0]) * cos0_0;
    b1[2] = b1[b2 + 2 | 0] + b1[b2 + 3 | 0];
    b1[3] = (b1[b2 + 3 | 0] - b1[b2 + 2 | 0]) * cos0_0;
    b1[2] = b1[2] + b1[3];
    b1[4] = b1[b2 + 4 | 0] + b1[b2 + 5 | 0];
    b1[5] = (b1[b2 + 4 | 0] - b1[b2 + 5 | 0]) * cos0_0;
    b1[6] = b1[b2 + 6 | 0] + b1[b2 + 7 | 0];
    b1[7] = (b1[b2 + 7 | 0] - b1[b2 + 6 | 0]) * cos0_0;
    b1[6] = b1[6] + b1[7];
    b1[4] = b1[4] + b1[6];
    b1[6] = b1[6] + b1[5];
    b1[5] = b1[5] + b1[7];
    b1[8] = b1[b2 + 8 | 0] + b1[b2 + 9 | 0];
    b1[9] = (b1[b2 + 8 | 0] - b1[b2 + 9 | 0]) * cos0_0;
    b1[10] = b1[b2 + 10 | 0] + b1[b2 + 11 | 0];
    b1[11] = (b1[b2 + 11 | 0] - b1[b2 + 10 | 0]) * cos0_0;
    b1[10] = b1[10] + b1[11];
    b1[12] = b1[b2 + 12 | 0] + b1[b2 + 13 | 0];
    b1[13] = (b1[b2 + 12 | 0] - b1[b2 + 13 | 0]) * cos0_0;
    b1[14] = b1[b2 + 14 | 0] + b1[b2 + 15 | 0];
    b1[15] = (b1[b2 + 15 | 0] - b1[b2 + 14 | 0]) * cos0_0;
    b1[14] = b1[14] + b1[15];
    b1[12] = b1[12] + b1[14];
    b1[14] = b1[14] + b1[13];
    b1[13] = b1[13] + b1[15];
    b1[16] = b1[b2 + 16 | 0] + b1[b2 + 17 | 0];
    b1[17] = (b1[b2 + 16 | 0] - b1[b2 + 17 | 0]) * cos0_0;
    b1[18] = b1[b2 + 18 | 0] + b1[b2 + 19 | 0];
    b1[19] = (b1[b2 + 19 | 0] - b1[b2 + 18 | 0]) * cos0_0;
    b1[18] = b1[18] + b1[19];
    b1[20] = b1[b2 + 20 | 0] + b1[b2 + 21 | 0];
    b1[21] = (b1[b2 + 20 | 0] - b1[b2 + 21 | 0]) * cos0_0;
    b1[22] = b1[b2 + 22 | 0] + b1[b2 + 23 | 0];
    b1[23] = (b1[b2 + 23 | 0] - b1[b2 + 22 | 0]) * cos0_0;
    b1[22] = b1[22] + b1[23];
    b1[20] = b1[20] + b1[22];
    b1[22] = b1[22] + b1[21];
    b1[21] = b1[21] + b1[23];
    b1[24] = b1[b2 + 24 | 0] + b1[b2 + 25 | 0];
    b1[25] = (b1[b2 + 24 | 0] - b1[b2 + 25 | 0]) * cos0_0;
    b1[26] = b1[b2 + 26 | 0] + b1[b2 + 27 | 0];
    b1[27] = (b1[b2 + 27 | 0] - b1[b2 + 26 | 0]) * cos0_0;
    b1[26] = b1[26] + b1[27];
    b1[28] = b1[b2 + 28 | 0] + b1[b2 + 29 | 0];
    b1[29] = (b1[b2 + 28 | 0] - b1[b2 + 29 | 0]) * cos0_0;
    b1[30] = b1[b2 + 30 | 0] + b1[b2 + 31 | 0];
    b1[31] = (b1[b2 + 31 | 0] - b1[b2 + 30 | 0]) * cos0_0;
    b1[30] = b1[30] + b1[31];
    b1[28] = b1[28] + b1[30];
    b1[30] = b1[30] + b1[29];
    b1[29] = b1[29] + b1[31];
    out0[out0Pos + (16 * 16 | 0) | 0] = b1[0];
    out0[out0Pos + (16 * 12 | 0) | 0] = b1[4];
    out0[out0Pos + (16 * 8 | 0) | 0] = b1[2];
    out0[out0Pos + (16 * 4 | 0) | 0] = b1[6];
    out0[out0Pos + (16 * 0 | 0) | 0] = b1[1];
    out1[out1Pos + (16 * 0 | 0) | 0] = b1[1];
    out1[out1Pos + (16 * 4 | 0) | 0] = b1[5];
    out1[out1Pos + (16 * 8 | 0) | 0] = b1[3];
    out1[out1Pos + (16 * 12 | 0) | 0] = b1[7];
    b1[8] = b1[8] + b1[12];
    out0[out0Pos + (16 * 14 | 0) | 0] = b1[8];
    b1[12] = b1[12] + b1[10];
    out0[out0Pos + (16 * 10 | 0) | 0] = b1[12];
    b1[10] = b1[10] + b1[14];
    out0[out0Pos + (16 * 6 | 0) | 0] = b1[10];
    b1[14] = b1[14] + b1[9];
    out0[out0Pos + (16 * 2 | 0) | 0] = b1[14];
    b1[9] = b1[9] + b1[13];
    out1[out1Pos + (16 * 2 | 0) | 0] = b1[9];
    b1[13] = b1[13] + b1[11];
    out1[out1Pos + (16 * 6 | 0) | 0] = b1[13];
    b1[11] = b1[11] + b1[15];
    out1[out1Pos + (16 * 10 | 0) | 0] = b1[11];
    out1[out1Pos + (16 * 14 | 0) | 0] = b1[15];
    b1[24] = b1[24] + b1[28];
    out0[out0Pos + (16 * 15 | 0) | 0] = b1[16] + b1[24];
    out0[out0Pos + (16 * 13 | 0) | 0] = b1[24] + b1[20];
    b1[28] = b1[28] + b1[26];
    out0[out0Pos + (16 * 11 | 0) | 0] = b1[20] + b1[28];
    out0[out0Pos + (16 * 9 | 0) | 0] = b1[28] + b1[18];
    b1[26] = b1[26] + b1[30];
    out0[out0Pos + (16 * 7 | 0) | 0] = b1[18] + b1[26];
    out0[out0Pos + (16 * 5 | 0) | 0] = b1[26] + b1[22];
    b1[30] = b1[30] + b1[25];
    out0[out0Pos + (16 * 3 | 0) | 0] = b1[22] + b1[30];
    out0[out0Pos + (16 * 1 | 0) | 0] = b1[30] + b1[17];
    b1[25] = b1[25] + b1[29];
    out1[out1Pos + (16 * 1 | 0) | 0] = b1[17] + b1[25];
    out1[out1Pos + (16 * 3 | 0) | 0] = b1[25] + b1[21];
    b1[29] = b1[29] + b1[27];
    out1[out1Pos + (16 * 5 | 0) | 0] = b1[21] + b1[29];
    out1[out1Pos + (16 * 7 | 0) | 0] = b1[29] + b1[19];
    b1[27] = b1[27] + b1[31];
    out1[out1Pos + (16 * 9 | 0) | 0] = b1[19] + b1[27];
    out1[out1Pos + (16 * 11 | 0) | 0] = b1[27] + b1[23];
    out1[out1Pos + (16 * 13 | 0) | 0] = b1[23] + b1[31];
    out1[out1Pos + (16 * 15 | 0) | 0] = b1[31];
  };
  DCT64.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'DCT64',
    interfaces: []
  };
  function Decode() {
    this.tab_0 = TabInit_getInstance();
    this.dct64_0 = new DCT64();
  }
  Decode.prototype.writeSampleClipped_0 = function (sum, clip, out, outPos) {
    if (sum > 32767.0) {
      out[outPos] = 32767.0;
      return clip + 1 | 0;
    }
     else if (sum < -32768.0) {
      out[outPos] = -32768.0;
      return clip + 1 | 0;
    }
     else {
      out[outPos] = (sum > 0 ? sum + 0.5 : sum - 0.5) | 0;
      return clip;
    }
  };
  Decode.prototype.writeSampleUnclipped_0 = function (sum, out, outPos) {
    out[outPos] = sum;
  };
  Decode.prototype.synth1to1mono_ndrce4$ = function (mp, bandPtr, bandPos, out, pnt) {
    var tmp$;
    var samples = new Float32Array(64);
    var clip = this.synth_1to1_80wkc8$(mp, bandPtr, bandPos, 0, samples, new MPGLib$ProcessedBytes());
    var i = 0;
    while (i < samples.length) {
      out[tmp$ = pnt.pb, pnt.pb = tmp$ + 1 | 0, tmp$] = samples[i];
      i = i + 2 | 0;
    }
    return clip;
  };
  Decode.prototype.synth1to1monoUnclipped_ndrce4$ = function (mp, bandPtr, bandPos, out, pnt) {
    var tmp$;
    var samples = new Float32Array(64);
    this.synth_1to1_unclipped_80wkc8$(mp, bandPtr, bandPos, 0, samples, new MPGLib$ProcessedBytes());
    var i = 0;
    while (i < samples.length) {
      out[tmp$ = pnt.pb, pnt.pb = tmp$ + 1 | 0, tmp$] = samples[i];
      i = i + 2 | 0;
    }
  };
  Decode.prototype.synth_1to1_80wkc8$ = function (mp, bandPtr, bandPos, ch, out, pnt) {
    var b0;
    var clip = {v: 0};
    var bo1;
    if (0 === ch) {
      mp.synth_bo = mp.synth_bo - 1 | 0;
      mp.synth_bo = mp.synth_bo & 15;
    }
     else {
      pnt.pb = pnt.pb + 1 | 0;
    }
    if ((mp.synth_bo & 1) !== 0) {
      b0 = mp.synth_buffs[ch][0];
      bo1 = mp.synth_bo;
      var bufs = new Float32Array(64);
      this.dct64_0.dct64_1_sipw9w$(mp.synth_buffs[ch][1], mp.synth_bo + 1 & 15, mp.synth_buffs[ch][0], mp.synth_bo, bufs, 32, bandPtr, bandPos, this.tab_0.pnts);
    }
     else {
      b0 = mp.synth_buffs[ch][1];
      bo1 = mp.synth_bo + 1 | 0;
      var bufs_0 = new Float32Array(64);
      this.dct64_0.dct64_1_sipw9w$(mp.synth_buffs[ch][0], mp.synth_bo, mp.synth_buffs[ch][1], mp.synth_bo + 1 | 0, bufs_0, 32, bandPtr, bandPos, this.tab_0.pnts);
    }
    var closure$bo1 = bo1;
    var closure$b0 = b0;
    var window_0 = {v: 16 - closure$bo1 | 0};
    var b0Pos = {v: 0};
    var j = 16;
    while (j !== 0) {
      var sum = 0.0;
      sum += this.tab_0.decwin[window_0.v + 0 | 0] * closure$b0[b0Pos.v + 0 | 0];
      sum -= this.tab_0.decwin[window_0.v + 1 | 0] * closure$b0[b0Pos.v + 1 | 0];
      sum += this.tab_0.decwin[window_0.v + 2 | 0] * closure$b0[b0Pos.v + 2 | 0];
      sum -= this.tab_0.decwin[window_0.v + 3 | 0] * closure$b0[b0Pos.v + 3 | 0];
      sum += this.tab_0.decwin[window_0.v + 4 | 0] * closure$b0[b0Pos.v + 4 | 0];
      sum -= this.tab_0.decwin[window_0.v + 5 | 0] * closure$b0[b0Pos.v + 5 | 0];
      sum += this.tab_0.decwin[window_0.v + 6 | 0] * closure$b0[b0Pos.v + 6 | 0];
      sum -= this.tab_0.decwin[window_0.v + 7 | 0] * closure$b0[b0Pos.v + 7 | 0];
      sum += this.tab_0.decwin[window_0.v + 8 | 0] * closure$b0[b0Pos.v + 8 | 0];
      sum -= this.tab_0.decwin[window_0.v + 9 | 0] * closure$b0[b0Pos.v + 9 | 0];
      sum += this.tab_0.decwin[window_0.v + 10 | 0] * closure$b0[b0Pos.v + 10 | 0];
      sum -= this.tab_0.decwin[window_0.v + 11 | 0] * closure$b0[b0Pos.v + 11 | 0];
      sum += this.tab_0.decwin[window_0.v + 12 | 0] * closure$b0[b0Pos.v + 12 | 0];
      sum -= this.tab_0.decwin[window_0.v + 13 | 0] * closure$b0[b0Pos.v + 13 | 0];
      sum += this.tab_0.decwin[window_0.v + 14 | 0] * closure$b0[b0Pos.v + 14 | 0];
      sum -= this.tab_0.decwin[window_0.v + 15 | 0] * closure$b0[b0Pos.v + 15 | 0];
      clip.v = this.writeSampleClipped_0(sum, clip.v, out, pnt.pb);
      j = j - 1 | 0;
      b0Pos.v = b0Pos.v + 16 | 0;
      window_0.v = window_0.v + 32 | 0;
      pnt.pb = pnt.pb + 2 | 0;
    }
    var sum_0 = 0.0;
    sum_0 += this.tab_0.decwin[window_0.v + 0 | 0] * closure$b0[b0Pos.v + 0 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 2 | 0] * closure$b0[b0Pos.v + 2 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 4 | 0] * closure$b0[b0Pos.v + 4 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 6 | 0] * closure$b0[b0Pos.v + 6 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 8 | 0] * closure$b0[b0Pos.v + 8 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 10 | 0] * closure$b0[b0Pos.v + 10 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 12 | 0] * closure$b0[b0Pos.v + 12 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 14 | 0] * closure$b0[b0Pos.v + 14 | 0];
    clip.v = this.writeSampleClipped_0(sum_0, clip.v, out, pnt.pb);
    b0Pos.v = b0Pos.v - 16 | 0;
    window_0.v = window_0.v - 32 | 0;
    pnt.pb = pnt.pb + 2 | 0;
    window_0.v = window_0.v + (closure$bo1 << 1) | 0;
    var j_0 = 15;
    while (j_0 !== 0) {
      var sum_1 = 0.0;
      sum_1 -= this.tab_0.decwin[window_0.v + -1 | 0] * closure$b0[b0Pos.v + 0 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -2 | 0] * closure$b0[b0Pos.v + 1 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -3 | 0] * closure$b0[b0Pos.v + 2 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -4 | 0] * closure$b0[b0Pos.v + 3 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -5 | 0] * closure$b0[b0Pos.v + 4 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -6 | 0] * closure$b0[b0Pos.v + 5 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -7 | 0] * closure$b0[b0Pos.v + 6 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -8 | 0] * closure$b0[b0Pos.v + 7 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -9 | 0] * closure$b0[b0Pos.v + 8 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -10 | 0] * closure$b0[b0Pos.v + 9 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -11 | 0] * closure$b0[b0Pos.v + 10 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -12 | 0] * closure$b0[b0Pos.v + 11 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -13 | 0] * closure$b0[b0Pos.v + 12 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -14 | 0] * closure$b0[b0Pos.v + 13 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -15 | 0] * closure$b0[b0Pos.v + 14 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + 0 | 0] * closure$b0[b0Pos.v + 15 | 0];
      clip.v = this.writeSampleClipped_0(sum_1, clip.v, out, pnt.pb);
      j_0 = j_0 - 1 | 0;
      b0Pos.v = b0Pos.v - 16 | 0;
      window_0.v = window_0.v - 32 | 0;
      pnt.pb = pnt.pb + 2 | 0;
    }
    if (ch === 1) {
      pnt.pb = pnt.pb - 1 | 0;
    }
    return clip.v;
  };
  Decode.prototype.synth_1to1_unclipped_80wkc8$ = function (mp, bandPtr, bandPos, ch, out, pnt) {
    var b0;
    var bo1;
    if (0 === ch) {
      mp.synth_bo = mp.synth_bo - 1 | 0;
      mp.synth_bo = mp.synth_bo & 15;
    }
     else {
      pnt.pb = pnt.pb + 1 | 0;
    }
    if ((mp.synth_bo & 1) !== 0) {
      b0 = mp.synth_buffs[ch][0];
      bo1 = mp.synth_bo;
      var bufs = new Float32Array(64);
      this.dct64_0.dct64_1_sipw9w$(mp.synth_buffs[ch][1], mp.synth_bo + 1 & 15, mp.synth_buffs[ch][0], mp.synth_bo, bufs, 32, bandPtr, bandPos, this.tab_0.pnts);
    }
     else {
      b0 = mp.synth_buffs[ch][1];
      bo1 = mp.synth_bo + 1 | 0;
      var bufs_0 = new Float32Array(64);
      this.dct64_0.dct64_1_sipw9w$(mp.synth_buffs[ch][0], mp.synth_bo, mp.synth_buffs[ch][1], mp.synth_bo + 1 | 0, bufs_0, 32, bandPtr, bandPos, this.tab_0.pnts);
    }
    var closure$bo1 = bo1;
    var closure$b0 = b0;
    var window_0 = {v: 16 - closure$bo1 | 0};
    var b0Pos = {v: 0};
    var j = 16;
    while (j !== 0) {
      var sum;
      sum = this.tab_0.decwin[window_0.v + 0 | 0] * closure$b0[b0Pos.v + 0 | 0];
      sum -= this.tab_0.decwin[window_0.v + 1 | 0] * closure$b0[b0Pos.v + 1 | 0];
      sum += this.tab_0.decwin[window_0.v + 2 | 0] * closure$b0[b0Pos.v + 2 | 0];
      sum -= this.tab_0.decwin[window_0.v + 3 | 0] * closure$b0[b0Pos.v + 3 | 0];
      sum += this.tab_0.decwin[window_0.v + 4 | 0] * closure$b0[b0Pos.v + 4 | 0];
      sum -= this.tab_0.decwin[window_0.v + 5 | 0] * closure$b0[b0Pos.v + 5 | 0];
      sum += this.tab_0.decwin[window_0.v + 6 | 0] * closure$b0[b0Pos.v + 6 | 0];
      sum -= this.tab_0.decwin[window_0.v + 7 | 0] * closure$b0[b0Pos.v + 7 | 0];
      sum += this.tab_0.decwin[window_0.v + 8 | 0] * closure$b0[b0Pos.v + 8 | 0];
      sum -= this.tab_0.decwin[window_0.v + 9 | 0] * closure$b0[b0Pos.v + 9 | 0];
      sum += this.tab_0.decwin[window_0.v + 10 | 0] * closure$b0[b0Pos.v + 10 | 0];
      sum -= this.tab_0.decwin[window_0.v + 11 | 0] * closure$b0[b0Pos.v + 11 | 0];
      sum += this.tab_0.decwin[window_0.v + 12 | 0] * closure$b0[b0Pos.v + 12 | 0];
      sum -= this.tab_0.decwin[window_0.v + 13 | 0] * closure$b0[b0Pos.v + 13 | 0];
      sum += this.tab_0.decwin[window_0.v + 14 | 0] * closure$b0[b0Pos.v + 14 | 0];
      sum -= this.tab_0.decwin[window_0.v + 15 | 0] * closure$b0[b0Pos.v + 15 | 0];
      this.writeSampleUnclipped_0(sum, out, pnt.pb);
      j = j - 1 | 0;
      b0Pos.v = b0Pos.v + 16 | 0;
      window_0.v = window_0.v + 32 | 0;
      pnt.pb = pnt.pb + 2 | 0;
    }
    var sum_0;
    sum_0 = this.tab_0.decwin[window_0.v + 0 | 0] * closure$b0[b0Pos.v + 0 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 2 | 0] * closure$b0[b0Pos.v + 2 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 4 | 0] * closure$b0[b0Pos.v + 4 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 6 | 0] * closure$b0[b0Pos.v + 6 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 8 | 0] * closure$b0[b0Pos.v + 8 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 10 | 0] * closure$b0[b0Pos.v + 10 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 12 | 0] * closure$b0[b0Pos.v + 12 | 0];
    sum_0 += this.tab_0.decwin[window_0.v + 14 | 0] * closure$b0[b0Pos.v + 14 | 0];
    this.writeSampleUnclipped_0(sum_0, out, pnt.pb);
    b0Pos.v = b0Pos.v - 16 | 0;
    window_0.v = window_0.v - 32 | 0;
    pnt.pb = pnt.pb + 2 | 0;
    window_0.v = window_0.v + (closure$bo1 << 1) | 0;
    var j_0 = 15;
    while (j_0 !== 0) {
      var sum_1;
      sum_1 = -this.tab_0.decwin[window_0.v + -1 | 0] * closure$b0[b0Pos.v + 0 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -2 | 0] * closure$b0[b0Pos.v + 1 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -3 | 0] * closure$b0[b0Pos.v + 2 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -4 | 0] * closure$b0[b0Pos.v + 3 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -5 | 0] * closure$b0[b0Pos.v + 4 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -6 | 0] * closure$b0[b0Pos.v + 5 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -7 | 0] * closure$b0[b0Pos.v + 6 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -8 | 0] * closure$b0[b0Pos.v + 7 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -9 | 0] * closure$b0[b0Pos.v + 8 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -10 | 0] * closure$b0[b0Pos.v + 9 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -11 | 0] * closure$b0[b0Pos.v + 10 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -12 | 0] * closure$b0[b0Pos.v + 11 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -13 | 0] * closure$b0[b0Pos.v + 12 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -14 | 0] * closure$b0[b0Pos.v + 13 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + -15 | 0] * closure$b0[b0Pos.v + 14 | 0];
      sum_1 -= this.tab_0.decwin[window_0.v + 0 | 0] * closure$b0[b0Pos.v + 15 | 0];
      this.writeSampleUnclipped_0(sum_1, out, pnt.pb);
      j_0 = j_0 - 1 | 0;
      b0Pos.v = b0Pos.v - 16 | 0;
      window_0.v = window_0.v - 32 | 0;
      pnt.pb = pnt.pb + 2 | 0;
    }
    if (ch === 1) {
      pnt.pb = pnt.pb - 1 | 0;
    }
  };
  Decode.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Decode',
    interfaces: []
  };
  function Frame() {
    this.stereo = 0;
    this.jsbound = 0;
    this.single = 0;
    this.lsf = 0;
    this.mpeg25 = false;
    this.lay = 0;
    this.error_protection = false;
    this.bitrate_index = 0;
    this.sampling_frequency = 0;
    this.padding = 0;
    this.extension = 0;
    this.mode = 0;
    this.mode_ext = 0;
    this.copyright = 0;
    this.original = 0;
    this.emphasis = 0;
    this.framesize = 0;
    this.II_sblimit = 0;
    this.alloc = null;
    this.down_sample_sblimit = 0;
    this.down_sample = 0;
  }
  Frame.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Frame',
    interfaces: []
  };
  function Huffman() {
    Huffman_instance = this;
    this.tab0_0 = new Int16Array([0]);
    this.tab1_0 = new Int16Array([-5, -3, -1, 17, 1, 16, 0]);
    this.tab2_0 = new Int16Array([-15, -11, -9, -5, -3, -1, 34, 2, 18, -1, 33, 32, 17, -1, 1, 16, 0]);
    this.tab3_0 = new Int16Array([-13, -11, -9, -5, -3, -1, 34, 2, 18, -1, 33, 32, 16, 17, -1, 1, 0]);
    this.tab5_0 = new Int16Array([-29, -25, -23, -15, -7, -5, -3, -1, 51, 35, 50, 49, -3, -1, 19, 3, -1, 48, 34, -3, -1, 18, 33, -1, 2, 32, 17, -1, 1, 16, 0]);
    this.tab6_0 = new Int16Array([-25, -19, -13, -9, -5, -3, -1, 51, 3, 35, -1, 50, 48, -1, 19, 49, -3, -1, 34, 2, 18, -3, -1, 33, 32, 1, -1, 17, -1, 16, 0]);
    this.tab7_0 = new Int16Array([-69, -65, -57, -39, -29, -17, -11, -7, -3, -1, 85, 69, -1, 84, 83, -1, 53, 68, -3, -1, 37, 82, 21, -5, -1, 81, -1, 5, 52, -1, 80, -1, 67, 51, -5, -3, -1, 36, 66, 20, -1, 65, 64, -11, -7, -3, -1, 4, 35, -1, 50, 3, -1, 19, 49, -3, -1, 48, 34, 18, -5, -1, 33, -1, 2, 32, 17, -1, 1, 16, 0]);
    this.tab8_0 = new Int16Array([-65, -63, -59, -45, -31, -19, -13, -7, -5, -3, -1, 85, 84, 69, 83, -3, -1, 53, 68, 37, -3, -1, 82, 5, 21, -5, -1, 81, -1, 52, 67, -3, -1, 80, 51, 36, -5, -3, -1, 66, 20, 65, -3, -1, 4, 64, -1, 35, 50, -9, -7, -3, -1, 19, 49, -1, 3, 48, 34, -1, 2, 32, -1, 18, 33, 17, -3, -1, 1, 16, 0]);
    this.tab9_0 = new Int16Array([-63, -53, -41, -29, -19, -11, -5, -3, -1, 85, 69, 53, -1, 83, -1, 84, 5, -3, -1, 68, 37, -1, 82, 21, -3, -1, 81, 52, -1, 67, -1, 80, 4, -7, -3, -1, 36, 66, -1, 51, 64, -1, 20, 65, -5, -3, -1, 35, 50, 19, -1, 49, -1, 3, 48, -5, -3, -1, 34, 2, 18, -1, 33, 32, -3, -1, 17, 1, -1, 16, 0]);
    this.tab10_0 = new Int16Array([-125, -121, -111, -83, -55, -35, -21, -13, -7, -3, -1, 119, 103, -1, 118, 87, -3, -1, 117, 102, 71, -3, -1, 116, 86, -1, 101, 55, -9, -3, -1, 115, 70, -3, -1, 85, 84, 99, -1, 39, 114, -11, -5, -3, -1, 100, 7, 112, -1, 98, -1, 69, 53, -5, -1, 6, -1, 83, 68, 23, -17, -5, -1, 113, -1, 54, 38, -5, -3, -1, 37, 82, 21, -1, 81, -1, 52, 67, -3, -1, 22, 97, -1, 96, -1, 5, 80, -19, -11, -7, -3, -1, 36, 66, -1, 51, 4, -1, 20, 65, -3, -1, 64, 35, -1, 50, 3, -3, -1, 19, 49, -1, 48, 34, -7, -3, -1, 18, 33, -1, 2, 32, 17, -1, 1, 16, 0]);
    this.tab11_0 = new Int16Array([-121, -113, -89, -59, -43, -27, -17, -7, -3, -1, 119, 103, -1, 118, 117, -3, -1, 102, 71, -1, 116, -1, 87, 85, -5, -3, -1, 86, 101, 55, -1, 115, 70, -9, -7, -3, -1, 69, 84, -1, 53, 83, 39, -1, 114, -1, 100, 7, -5, -1, 113, -1, 23, 112, -3, -1, 54, 99, -1, 96, -1, 68, 37, -13, -7, -5, -3, -1, 82, 5, 21, 98, -3, -1, 38, 6, 22, -5, -1, 97, -1, 81, 52, -5, -1, 80, -1, 67, 51, -1, 36, 66, -15, -11, -7, -3, -1, 20, 65, -1, 4, 64, -1, 35, 50, -1, 19, 49, -5, -3, -1, 3, 48, 34, 33, -5, -1, 18, -1, 2, 32, 17, -3, -1, 1, 16, 0]);
    this.tab12_0 = new Int16Array([-115, -99, -73, -45, -27, -17, -9, -5, -3, -1, 119, 103, 118, -1, 87, 117, -3, -1, 102, 71, -1, 116, 101, -3, -1, 86, 55, -3, -1, 115, 85, 39, -7, -3, -1, 114, 70, -1, 100, 23, -5, -1, 113, -1, 7, 112, -1, 54, 99, -13, -9, -3, -1, 69, 84, -1, 68, -1, 6, 5, -1, 38, 98, -5, -1, 97, -1, 22, 96, -3, -1, 53, 83, -1, 37, 82, -17, -7, -3, -1, 21, 81, -1, 52, 67, -5, -3, -1, 80, 4, 36, -1, 66, 20, -3, -1, 51, 65, -1, 35, 50, -11, -7, -5, -3, -1, 64, 3, 48, 19, -1, 49, 34, -1, 18, 33, -7, -5, -3, -1, 2, 32, 0, 17, -1, 1, 16]);
    this.tab13_0 = new Int16Array([-509, -503, -475, -405, -333, -265, -205, -153, -115, -83, -53, -35, -21, -13, -9, -7, -5, -3, -1, 254, 252, 253, 237, 255, -1, 239, 223, -3, -1, 238, 207, -1, 222, 191, -9, -3, -1, 251, 206, -1, 220, -1, 175, 233, -1, 236, 221, -9, -5, -3, -1, 250, 205, 190, -1, 235, 159, -3, -1, 249, 234, -1, 189, 219, -17, -9, -3, -1, 143, 248, -1, 204, -1, 174, 158, -5, -1, 142, -1, 127, 126, 247, -5, -1, 218, -1, 173, 188, -3, -1, 203, 246, 111, -15, -7, -3, -1, 232, 95, -1, 157, 217, -3, -1, 245, 231, -1, 172, 187, -9, -3, -1, 79, 244, -3, -1, 202, 230, 243, -1, 63, -1, 141, 216, -21, -9, -3, -1, 47, 242, -3, -1, 110, 156, 15, -5, -3, -1, 201, 94, 171, -3, -1, 125, 215, 78, -11, -5, -3, -1, 200, 214, 62, -1, 185, -1, 155, 170, -1, 31, 241, -23, -13, -5, -1, 240, -1, 186, 229, -3, -1, 228, 140, -1, 109, 227, -5, -1, 226, -1, 46, 14, -1, 30, 225, -15, -7, -3, -1, 224, 93, -1, 213, 124, -3, -1, 199, 77, -1, 139, 184, -7, -3, -1, 212, 154, -1, 169, 108, -1, 198, 61, -37, -21, -9, -5, -3, -1, 211, 123, 45, -1, 210, 29, -5, -1, 183, -1, 92, 197, -3, -1, 153, 122, 195, -7, -5, -3, -1, 167, 151, 75, 209, -3, -1, 13, 208, -1, 138, 168, -11, -7, -3, -1, 76, 196, -1, 107, 182, -1, 60, 44, -3, -1, 194, 91, -3, -1, 181, 137, 28, -43, -23, -11, -5, -1, 193, -1, 152, 12, -1, 192, -1, 180, 106, -5, -3, -1, 166, 121, 59, -1, 179, -1, 136, 90, -11, -5, -1, 43, -1, 165, 105, -1, 164, -1, 120, 135, -5, -1, 148, -1, 119, 118, 178, -11, -3, -1, 27, 177, -3, -1, 11, 176, -1, 150, 74, -7, -3, -1, 58, 163, -1, 89, 149, -1, 42, 162, -47, -23, -9, -3, -1, 26, 161, -3, -1, 10, 104, 160, -5, -3, -1, 134, 73, 147, -3, -1, 57, 88, -1, 133, 103, -9, -3, -1, 41, 146, -3, -1, 87, 117, 56, -5, -1, 131, -1, 102, 71, -3, -1, 116, 86, -1, 101, 115, -11, -3, -1, 25, 145, -3, -1, 9, 144, -1, 72, 132, -7, -5, -1, 114, -1, 70, 100, 40, -1, 130, 24, -41, -27, -11, -5, -3, -1, 55, 39, 23, -1, 113, -1, 85, 7, -7, -3, -1, 112, 54, -1, 99, 69, -3, -1, 84, 38, -1, 98, 53, -5, -1, 129, -1, 8, 128, -3, -1, 22, 97, -1, 6, 96, -13, -9, -5, -3, -1, 83, 68, 37, -1, 82, 5, -1, 21, 81, -7, -3, -1, 52, 67, -1, 80, 36, -3, -1, 66, 51, 20, -19, -11, -5, -1, 65, -1, 4, 64, -3, -1, 35, 50, 19, -3, -1, 49, 3, -1, 48, 34, -3, -1, 18, 33, -1, 2, 32, -3, -1, 17, 1, 16, 0]);
    this.tab15_0 = new Int16Array([-495, -445, -355, -263, -183, -115, -77, -43, -27, -13, -7, -3, -1, 255, 239, -1, 254, 223, -1, 238, -1, 253, 207, -7, -3, -1, 252, 222, -1, 237, 191, -1, 251, -1, 206, 236, -7, -3, -1, 221, 175, -1, 250, 190, -3, -1, 235, 205, -1, 220, 159, -15, -7, -3, -1, 249, 234, -1, 189, 219, -3, -1, 143, 248, -1, 204, 158, -7, -3, -1, 233, 127, -1, 247, 173, -3, -1, 218, 188, -1, 111, -1, 174, 15, -19, -11, -3, -1, 203, 246, -3, -1, 142, 232, -1, 95, 157, -3, -1, 245, 126, -1, 231, 172, -9, -3, -1, 202, 187, -3, -1, 217, 141, 79, -3, -1, 244, 63, -1, 243, 216, -33, -17, -9, -3, -1, 230, 47, -1, 242, -1, 110, 240, -3, -1, 31, 241, -1, 156, 201, -7, -3, -1, 94, 171, -1, 186, 229, -3, -1, 125, 215, -1, 78, 228, -15, -7, -3, -1, 140, 200, -1, 62, 109, -3, -1, 214, 227, -1, 155, 185, -7, -3, -1, 46, 170, -1, 226, 30, -5, -1, 225, -1, 14, 224, -1, 93, 213, -45, -25, -13, -7, -3, -1, 124, 199, -1, 77, 139, -1, 212, -1, 184, 154, -7, -3, -1, 169, 108, -1, 198, 61, -1, 211, 210, -9, -5, -3, -1, 45, 13, 29, -1, 123, 183, -5, -1, 209, -1, 92, 208, -1, 197, 138, -17, -7, -3, -1, 168, 76, -1, 196, 107, -5, -1, 182, -1, 153, 12, -1, 60, 195, -9, -3, -1, 122, 167, -1, 166, -1, 192, 11, -1, 194, -1, 44, 91, -55, -29, -15, -7, -3, -1, 181, 28, -1, 137, 152, -3, -1, 193, 75, -1, 180, 106, -5, -3, -1, 59, 121, 179, -3, -1, 151, 136, -1, 43, 90, -11, -5, -1, 178, -1, 165, 27, -1, 177, -1, 176, 105, -7, -3, -1, 150, 74, -1, 164, 120, -3, -1, 135, 58, 163, -17, -7, -3, -1, 89, 149, -1, 42, 162, -3, -1, 26, 161, -3, -1, 10, 160, 104, -7, -3, -1, 134, 73, -1, 148, 57, -5, -1, 147, -1, 119, 9, -1, 88, 133, -53, -29, -13, -7, -3, -1, 41, 103, -1, 118, 146, -1, 145, -1, 25, 144, -7, -3, -1, 72, 132, -1, 87, 117, -3, -1, 56, 131, -1, 102, 71, -7, -3, -1, 40, 130, -1, 24, 129, -7, -3, -1, 116, 8, -1, 128, 86, -3, -1, 101, 55, -1, 115, 70, -17, -7, -3, -1, 39, 114, -1, 100, 23, -3, -1, 85, 113, -3, -1, 7, 112, 54, -7, -3, -1, 99, 69, -1, 84, 38, -3, -1, 98, 22, -3, -1, 6, 96, 53, -33, -19, -9, -5, -1, 97, -1, 83, 68, -1, 37, 82, -3, -1, 21, 81, -3, -1, 5, 80, 52, -7, -3, -1, 67, 36, -1, 66, 51, -1, 65, -1, 20, 4, -9, -3, -1, 35, 50, -3, -1, 64, 3, 19, -3, -1, 49, 48, 34, -9, -7, -3, -1, 18, 33, -1, 2, 32, 17, -3, -1, 1, 16, 0]);
    this.tab16_0 = new Int16Array([-509, -503, -461, -323, -103, -37, -27, -15, -7, -3, -1, 239, 254, -1, 223, 253, -3, -1, 207, 252, -1, 191, 251, -5, -1, 175, -1, 250, 159, -3, -1, 249, 248, 143, -7, -3, -1, 127, 247, -1, 111, 246, 255, -9, -5, -3, -1, 95, 245, 79, -1, 244, 243, -53, -1, 240, -1, 63, -29, -19, -13, -7, -5, -1, 206, -1, 236, 221, 222, -1, 233, -1, 234, 217, -1, 238, -1, 237, 235, -3, -1, 190, 205, -3, -1, 220, 219, 174, -11, -5, -1, 204, -1, 173, 218, -3, -1, 126, 172, 202, -5, -3, -1, 201, 125, 94, 189, 242, -93, -5, -3, -1, 47, 15, 31, -1, 241, -49, -25, -13, -5, -1, 158, -1, 188, 203, -3, -1, 142, 232, -1, 157, 231, -7, -3, -1, 187, 141, -1, 216, 110, -1, 230, 156, -13, -7, -3, -1, 171, 186, -1, 229, 215, -1, 78, -1, 228, 140, -3, -1, 200, 62, -1, 109, -1, 214, 155, -19, -11, -5, -3, -1, 185, 170, 225, -1, 212, -1, 184, 169, -5, -1, 123, -1, 183, 208, 227, -7, -3, -1, 14, 224, -1, 93, 213, -3, -1, 124, 199, -1, 77, 139, -75, -45, -27, -13, -7, -3, -1, 154, 108, -1, 198, 61, -3, -1, 92, 197, 13, -7, -3, -1, 138, 168, -1, 153, 76, -3, -1, 182, 122, 60, -11, -5, -3, -1, 91, 137, 28, -1, 192, -1, 152, 121, -1, 226, -1, 46, 30, -15, -7, -3, -1, 211, 45, -1, 210, 209, -5, -1, 59, -1, 151, 136, 29, -7, -3, -1, 196, 107, -1, 195, 167, -1, 44, -1, 194, 181, -23, -13, -7, -3, -1, 193, 12, -1, 75, 180, -3, -1, 106, 166, 179, -5, -3, -1, 90, 165, 43, -1, 178, 27, -13, -5, -1, 177, -1, 11, 176, -3, -1, 105, 150, -1, 74, 164, -5, -3, -1, 120, 135, 163, -3, -1, 58, 89, 42, -97, -57, -33, -19, -11, -5, -3, -1, 149, 104, 161, -3, -1, 134, 119, 148, -5, -3, -1, 73, 87, 103, 162, -5, -1, 26, -1, 10, 160, -3, -1, 57, 147, -1, 88, 133, -9, -3, -1, 41, 146, -3, -1, 118, 9, 25, -5, -1, 145, -1, 144, 72, -3, -1, 132, 117, -1, 56, 131, -21, -11, -5, -3, -1, 102, 40, 130, -3, -1, 71, 116, 24, -3, -1, 129, 128, -3, -1, 8, 86, 55, -9, -5, -1, 115, -1, 101, 70, -1, 39, 114, -5, -3, -1, 100, 85, 7, 23, -23, -13, -5, -1, 113, -1, 112, 54, -3, -1, 99, 69, -1, 84, 38, -3, -1, 98, 22, -1, 97, -1, 6, 96, -9, -5, -1, 83, -1, 53, 68, -1, 37, 82, -1, 81, -1, 21, 5, -33, -23, -13, -7, -3, -1, 52, 67, -1, 80, 36, -3, -1, 66, 51, 20, -5, -1, 65, -1, 4, 64, -1, 35, 50, -3, -1, 19, 49, -3, -1, 3, 48, 34, -3, -1, 18, 33, -1, 2, 32, -3, -1, 17, 1, 16, 0]);
    this.tab24_0 = new Int16Array([-451, -117, -43, -25, -15, -7, -3, -1, 239, 254, -1, 223, 253, -3, -1, 207, 252, -1, 191, 251, -5, -1, 250, -1, 175, 159, -1, 249, 248, -9, -5, -3, -1, 143, 127, 247, -1, 111, 246, -3, -1, 95, 245, -1, 79, 244, -71, -7, -3, -1, 63, 243, -1, 47, 242, -5, -1, 241, -1, 31, 240, -25, -9, -1, 15, -3, -1, 238, 222, -1, 237, 206, -7, -3, -1, 236, 221, -1, 190, 235, -3, -1, 205, 220, -1, 174, 234, -15, -7, -3, -1, 189, 219, -1, 204, 158, -3, -1, 233, 173, -1, 218, 188, -7, -3, -1, 203, 142, -1, 232, 157, -3, -1, 217, 126, -1, 231, 172, 255, -235, -143, -77, -45, -25, -15, -7, -3, -1, 202, 187, -1, 141, 216, -5, -3, -1, 14, 224, 13, 230, -5, -3, -1, 110, 156, 201, -1, 94, 186, -9, -5, -1, 229, -1, 171, 125, -1, 215, 228, -3, -1, 140, 200, -3, -1, 78, 46, 62, -15, -7, -3, -1, 109, 214, -1, 227, 155, -3, -1, 185, 170, -1, 226, 30, -7, -3, -1, 225, 93, -1, 213, 124, -3, -1, 199, 77, -1, 139, 184, -31, -15, -7, -3, -1, 212, 154, -1, 169, 108, -3, -1, 198, 61, -1, 211, 45, -7, -3, -1, 210, 29, -1, 123, 183, -3, -1, 209, 92, -1, 197, 138, -17, -7, -3, -1, 168, 153, -1, 76, 196, -3, -1, 107, 182, -3, -1, 208, 12, 60, -7, -3, -1, 195, 122, -1, 167, 44, -3, -1, 194, 91, -1, 181, 28, -57, -35, -19, -7, -3, -1, 137, 152, -1, 193, 75, -5, -3, -1, 192, 11, 59, -3, -1, 176, 10, 26, -5, -1, 180, -1, 106, 166, -3, -1, 121, 151, -3, -1, 160, 9, 144, -9, -3, -1, 179, 136, -3, -1, 43, 90, 178, -7, -3, -1, 165, 27, -1, 177, 105, -1, 150, 164, -17, -9, -5, -3, -1, 74, 120, 135, -1, 58, 163, -3, -1, 89, 149, -1, 42, 162, -7, -3, -1, 161, 104, -1, 134, 119, -3, -1, 73, 148, -1, 57, 147, -63, -31, -15, -7, -3, -1, 88, 133, -1, 41, 103, -3, -1, 118, 146, -1, 25, 145, -7, -3, -1, 72, 132, -1, 87, 117, -3, -1, 56, 131, -1, 102, 40, -17, -7, -3, -1, 130, 24, -1, 71, 116, -5, -1, 129, -1, 8, 128, -1, 86, 101, -7, -5, -1, 23, -1, 7, 112, 115, -3, -1, 55, 39, 114, -15, -7, -3, -1, 70, 100, -1, 85, 113, -3, -1, 54, 99, -1, 69, 84, -7, -3, -1, 38, 98, -1, 22, 97, -5, -3, -1, 6, 96, 53, -1, 83, 68, -51, -37, -23, -15, -9, -3, -1, 37, 82, -1, 21, -1, 5, 80, -1, 81, -1, 52, 67, -3, -1, 36, 66, -1, 51, 20, -9, -5, -1, 65, -1, 4, 64, -1, 35, 50, -1, 19, 49, -7, -5, -3, -1, 3, 48, 34, 18, -1, 33, -1, 2, 32, -3, -1, 17, 1, -1, 16, 0]);
    this.ht = [new Huffman$newhuff(0, this.tab0_0), new Huffman$newhuff(0, this.tab1_0), new Huffman$newhuff(0, this.tab2_0), new Huffman$newhuff(0, this.tab3_0), new Huffman$newhuff(0, this.tab0_0), new Huffman$newhuff(0, this.tab5_0), new Huffman$newhuff(0, this.tab6_0), new Huffman$newhuff(0, this.tab7_0), new Huffman$newhuff(0, this.tab8_0), new Huffman$newhuff(0, this.tab9_0), new Huffman$newhuff(0, this.tab10_0), new Huffman$newhuff(0, this.tab11_0), new Huffman$newhuff(0, this.tab12_0), new Huffman$newhuff(0, this.tab13_0), new Huffman$newhuff(0, this.tab0_0), new Huffman$newhuff(0, this.tab15_0), new Huffman$newhuff(1, this.tab16_0), new Huffman$newhuff(2, this.tab16_0), new Huffman$newhuff(3, this.tab16_0), new Huffman$newhuff(4, this.tab16_0), new Huffman$newhuff(6, this.tab16_0), new Huffman$newhuff(8, this.tab16_0), new Huffman$newhuff(10, this.tab16_0), new Huffman$newhuff(13, this.tab16_0), new Huffman$newhuff(4, this.tab24_0), new Huffman$newhuff(5, this.tab24_0), new Huffman$newhuff(6, this.tab24_0), new Huffman$newhuff(7, this.tab24_0), new Huffman$newhuff(8, this.tab24_0), new Huffman$newhuff(9, this.tab24_0), new Huffman$newhuff(11, this.tab24_0), new Huffman$newhuff(13, this.tab24_0)];
    this.tab_c0_0 = new Int16Array([-29, -21, -13, -7, -3, -1, 11, 15, -1, 13, 14, -3, -1, 7, 5, 9, -3, -1, 6, 3, -1, 10, 12, -3, -1, 2, 1, -1, 4, 8, 0]);
    this.tab_c1_0 = new Int16Array([-15, -7, -3, -1, 15, 14, -1, 13, 12, -3, -1, 11, 10, -1, 9, 8, -7, -3, -1, 7, 6, -1, 5, 4, -3, -1, 3, 2, -1, 1, 0]);
    this.htc = [new Huffman$newhuff(0, this.tab_c0_0), new Huffman$newhuff(0, this.tab_c1_0)];
  }
  function Huffman$newhuff(linbits, table) {
    this.linbits = linbits;
    this.table = table;
  }
  Huffman$newhuff.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'newhuff',
    interfaces: []
  };
  Huffman$newhuff.prototype.component1 = function () {
    return this.linbits;
  };
  Huffman$newhuff.prototype.component2 = function () {
    return this.table;
  };
  Huffman$newhuff.prototype.copy_a2o8kg$ = function (linbits, table) {
    return new Huffman$newhuff(linbits === void 0 ? this.linbits : linbits, table === void 0 ? this.table : table);
  };
  Huffman$newhuff.prototype.toString = function () {
    return 'newhuff(linbits=' + Kotlin.toString(this.linbits) + (', table=' + Kotlin.toString(this.table)) + ')';
  };
  Huffman$newhuff.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.linbits) | 0;
    result = result * 31 + Kotlin.hashCode(this.table) | 0;
    return result;
  };
  Huffman$newhuff.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.linbits, other.linbits) && Kotlin.equals(this.table, other.table)))));
  };
  Huffman.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Huffman',
    interfaces: []
  };
  var Huffman_instance = null;
  function Huffman_getInstance() {
    if (Huffman_instance === null) {
      new Huffman();
    }
    return Huffman_instance;
  }
  function Interface(vbr) {
    Interface$Companion_getInstance();
    this.vbr_0 = vbr;
    this.decode_0 = new Decode();
    this.common_0 = new Common();
    this.layer1_0 = new Layer1(this.common_0, this.decode_0);
    this.layer2_0 = new Layer2(this.common_0);
    this.layer3_0 = new Layer3(this.common_0);
  }
  function Interface$Companion() {
    Interface$Companion_instance = this;
    this.XING_HEADER_SIZE = 194;
  }
  Interface$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Interface$Companion_instance = null;
  function Interface$Companion_getInstance() {
    if (Interface$Companion_instance === null) {
      new Interface$Companion();
    }
    return Interface$Companion_instance;
  }
  Interface.prototype.InitMP3 = function () {
    var mp = new MPGLib$mpstr_tag();
    mp.framesize = 0;
    mp.num_frames = 0;
    mp.enc_delay = -1;
    mp.enc_padding = -1;
    mp.vbr_header = false;
    mp.header_parsed = false;
    mp.side_parsed = false;
    mp.data_parsed = false;
    mp.free_format = false;
    mp.old_free_format = false;
    mp.ssize = 0;
    mp.dsize = 0;
    mp.fsizeold = -1;
    mp.bsize = 0;
    mp.list = ArrayList_init();
    mp.fr.single = -1;
    mp.bsnum = 0;
    mp.wordpointer = mp.bsspace[mp.bsnum];
    mp.wordpointerPos = 512;
    mp.bitindex = 0;
    mp.synth_bo = 1;
    mp.sync_bitstream = true;
    this.layer3_0.init_layer3_za3lpa$(MPG123_getInstance().SBLIMIT);
    this.layer2_0.init_layer2();
    return mp;
  };
  Interface.prototype.ExitMP3_rd9nj3$ = function (mp) {
    mp.list.clear();
  };
  Interface.prototype.addbuf_tg9f1r$ = function (mp, buf, bufPos, size) {
    var nbuf = new MPGLib$buf();
    nbuf.pnt_8be2vx$ = new Int8Array(size);
    nbuf.size_8be2vx$ = size;
    copyRangeTo(buf, bufPos, nbuf.pnt_8be2vx$, 0, size);
    nbuf.pos_8be2vx$ = 0;
    mp.list.add_11rb$(nbuf);
    mp.bsize = mp.bsize + size | 0;
    return nbuf;
  };
  Interface.prototype.remove_buf_rd9nj3$ = function (mp) {
    mp.list.removeAt_za3lpa$(0);
  };
  Interface.prototype.read_buf_byte_rd9nj3$ = function (mp) {
    var b;
    var pos;
    pos = mp.list.get_za3lpa$(0).pos_8be2vx$;
    while (pos >= mp.list.get_za3lpa$(0).size_8be2vx$) {
      this.remove_buf_rd9nj3$(mp);
      if (mp.list.get_za3lpa$(0) == null) {
        throw new RuntimeException('hip: Fatal error! tried to read past mp buffer');
      }
      pos = mp.list.get_za3lpa$(0).pos_8be2vx$;
    }
    b = toUnsigned(mp.list.get_za3lpa$(0).pnt_8be2vx$[pos]);
    mp.bsize = mp.bsize - 1 | 0;
    var tmp$;
    tmp$ = mp.list.get_za3lpa$(0);
    tmp$.pos_8be2vx$ = tmp$.pos_8be2vx$ + 1 | 0;
    return b;
  };
  Interface.prototype.read_head_rd9nj3$ = function (mp) {
    var head;
    head = Kotlin.Long.fromInt(this.read_buf_byte_rd9nj3$(mp));
    head = head.shiftLeft(8);
    head = head.or(Kotlin.Long.fromInt(this.read_buf_byte_rd9nj3$(mp)));
    head = head.shiftLeft(8);
    head = head.or(Kotlin.Long.fromInt(this.read_buf_byte_rd9nj3$(mp)));
    head = head.shiftLeft(8);
    head = head.or(Kotlin.Long.fromInt(this.read_buf_byte_rd9nj3$(mp)));
    mp.header = head;
  };
  Interface.prototype.copy_mp_swb0i5$ = function (mp, size, ptr, ptrPos) {
    var tmp$;
    var len = 0;
    while (len < size && mp.list.get_za3lpa$(0) != null) {
      var nlen;
      var blen = mp.list.get_za3lpa$(0).size_8be2vx$ - mp.list.get_za3lpa$(0).pos_8be2vx$ | 0;
      if ((size - len | 0) <= blen) {
        nlen = size - len | 0;
      }
       else {
        nlen = blen;
      }
      copyRangeTo(mp.list.get_za3lpa$(0).pnt_8be2vx$, mp.list.get_za3lpa$(0).pos_8be2vx$, ptr, ptrPos + len | 0, nlen);
      len = len + nlen | 0;
      tmp$ = mp.list.get_za3lpa$(0);
      tmp$.pos_8be2vx$ = tmp$.pos_8be2vx$ + nlen | 0;
      mp.bsize = mp.bsize - nlen | 0;
      if (mp.list.get_za3lpa$(0).pos_8be2vx$ === mp.list.get_za3lpa$(0).size_8be2vx$) {
        this.remove_buf_rd9nj3$(mp);
      }
    }
  };
  Interface.prototype.check_vbr_header_9wdbak$ = function (mp, bytes) {
    var i;
    var pos;
    var l = 0;
    var buf = mp.list.get_za3lpa$(l);
    var xing = new Int8Array(Interface$Companion_getInstance().XING_HEADER_SIZE);
    pos = buf.pos_8be2vx$;
    i = 0;
    while (i < bytes) {
      while (pos >= buf.size_8be2vx$) {
        if ((l = l + 1 | 0, l) === mp.list.size)
          return -1;
        buf = mp.list.get_za3lpa$(l);
        pos = buf.pos_8be2vx$;
      }
      pos = pos + 1 | 0;
      i = i + 1 | 0;
    }
    i = 0;
    while (i < Interface$Companion_getInstance().XING_HEADER_SIZE) {
      while (pos >= buf.size_8be2vx$) {
        if ((l = l + 1 | 0, l) === mp.list.size)
          return -1;
        buf = mp.list.get_za3lpa$(l);
        pos = buf.pos_8be2vx$;
      }
      xing[i] = buf.pnt_8be2vx$[pos];
      pos = pos + 1 | 0;
      i = i + 1 | 0;
    }
    var pTagData = this.vbr_0.getVbrTag_fqrh44$(xing);
    mp.vbr_header = pTagData != null;
    if (mp.vbr_header) {
      mp.num_frames = (pTagData != null ? pTagData : Kotlin.throwNPE()).frames;
      mp.enc_delay = pTagData.encDelay;
      mp.enc_padding = pTagData.encPadding;
      if (pTagData.headersize < 1)
        return 1;
      return pTagData.headersize;
    }
    return 0;
  };
  Interface.prototype.sync_buffer_1uhcso$ = function (mp, free_match) {
    var b = new Int32Array([0, 0, 0, 0]);
    var i;
    var pos;
    var h;
    var l = 0;
    if (mp.list.size === 0)
      return -1;
    var buf = mp.list.get_za3lpa$(l);
    pos = buf.pos_8be2vx$;
    i = 0;
    while (i < mp.bsize) {
      b[0] = b[1];
      b[1] = b[2];
      b[2] = b[3];
      while (pos >= buf.size_8be2vx$) {
        buf = mp.list.get_za3lpa$((l = l + 1 | 0, l));
        pos = buf.pos_8be2vx$;
      }
      b[3] = toUnsigned(buf.pnt_8be2vx$[pos]);
      pos = pos + 1 | 0;
      if (i >= 3) {
        var fr = mp.fr;
        var head;
        head = Kotlin.Long.fromInt(b[0]);
        head = head.shiftLeft(8);
        head = head.or(Kotlin.Long.fromInt(b[1]));
        head = head.shiftLeft(8);
        head = head.or(Kotlin.Long.fromInt(b[2]));
        head = head.shiftLeft(8);
        head = head.or(Kotlin.Long.fromInt(b[3]));
        h = this.common_0.head_check_yhmem3$(head, fr.lay);
        if (h && free_match) {
          var mode;
          var stereo;
          var sampling_frequency;
          var lsf;
          var mpeg25;
          if (!Kotlin.equals(head.and(Kotlin.Long.fromInt(1048576)), Kotlin.Long.ZERO)) {
            lsf = !Kotlin.equals(head.and(Kotlin.Long.fromInt(524288)), Kotlin.Long.ZERO) ? 0 : 1;
            mpeg25 = false;
          }
           else {
            lsf = 1;
            mpeg25 = true;
          }
          mode = head.shiftRight(6).and(Kotlin.Long.fromInt(3)).toInt();
          stereo = mode === MPG123_getInstance().MPG_MD_MONO ? 1 : 2;
          if (mpeg25)
            sampling_frequency = Kotlin.Long.fromInt(6).add(head.shiftRight(10).and(Kotlin.Long.fromInt(3))).toInt();
          else
            sampling_frequency = head.shiftRight(10).and(Kotlin.Long.fromInt(3)).add(Kotlin.Long.fromInt(lsf * 3 | 0)).toInt();
          h = (stereo === fr.stereo && lsf === fr.lsf && mpeg25 === fr.mpeg25 && sampling_frequency === fr.sampling_frequency);
        }
        if (h) {
          return i - 3 | 0;
        }
      }
      i = i + 1 | 0;
    }
    return -1;
  };
  Interface.prototype.decodeMP3_clipchoice_53820t$ = function (mp, in_0, inPos, isize, out, done, synth) {
    var tmp$;
    var i;
    var iret;
    var bits;
    var bytes;
    if (in_0 != null && isize !== 0 && this.addbuf_tg9f1r$(mp, in_0, inPos, isize) == null)
      return MPGLib$Companion_getInstance().MP3_ERR;
    if (!mp.header_parsed) {
      if (mp.fsizeold === -1 || mp.sync_bitstream) {
        var vbrbytes;
        mp.sync_bitstream = false;
        bytes = this.sync_buffer_1uhcso$(mp, false);
        if (mp.bsize >= (bytes + Interface$Companion_getInstance().XING_HEADER_SIZE | 0)) {
          vbrbytes = this.check_vbr_header_9wdbak$(mp, bytes);
        }
         else {
          return MPGLib$Companion_getInstance().MP3_NEED_MORE;
        }
        if (mp.vbr_header) {
          if ((bytes + vbrbytes | 0) > mp.bsize) {
            return MPGLib$Companion_getInstance().MP3_NEED_MORE;
          }
          i = 0;
          while (i < (vbrbytes + bytes | 0)) {
            this.read_buf_byte_rd9nj3$(mp);
            i = i + 1 | 0;
          }
          return MPGLib$Companion_getInstance().MP3_NEED_MORE;
        }
      }
       else {
        bytes = this.sync_buffer_1uhcso$(mp, true);
      }
      if (bytes < 0) {
        return MPGLib$Companion_getInstance().MP3_NEED_MORE;
      }
      if (bytes > 0) {
        var size;
        lang.Console.error_61zpoe$('hip: bitstream problem, resyncing skipping ' + bytes + ' bytes...');
        mp.old_free_format = false;
        mp.sync_bitstream = true;
        size = mp.wordpointerPos - 512 | 0;
        if (size > MPG123_getInstance().MAXFRAMESIZE) {
          lang.Console.error_61zpoe$('hip: wordpointer trashed.  size=' + size + ' (' + MPG123_getInstance().MAXFRAMESIZE + ')  bytes=' + bytes);
          size = 0;
          mp.wordpointer = mp.bsspace[mp.bsnum];
          mp.wordpointerPos = 512;
        }
        i = size + bytes - MPG123_getInstance().MAXFRAMESIZE | 0;
        while (i > 0) {
          bytes = bytes - 1 | 0;
          this.read_buf_byte_rd9nj3$(mp);
          i = i - 1 | 0;
        }
        this.copy_mp_swb0i5$(mp, bytes, mp.wordpointer, mp.wordpointerPos);
        mp.fsizeold = mp.fsizeold + bytes | 0;
      }
      this.read_head_rd9nj3$(mp);
      this.common_0.decode_header_a35vlz$(mp.fr, mp.header);
      mp.header_parsed = true;
      mp.framesize = mp.fr.framesize;
      mp.free_format = mp.framesize === 0;
      if (mp.fr.lsf !== 0)
        mp.ssize = mp.fr.stereo === 1 ? 9 : 17;
      else
        mp.ssize = mp.fr.stereo === 1 ? 17 : 32;
      if (mp.fr.error_protection)
        mp.ssize = mp.ssize + 2 | 0;
      mp.bsnum = 1 - mp.bsnum | 0;
      mp.wordpointer = mp.bsspace[mp.bsnum];
      mp.wordpointerPos = 512;
      mp.bitindex = 0;
      if (mp.fsizeold === -1) {
        return MPGLib$Companion_getInstance().MP3_NEED_MORE;
      }
    }
    if (!mp.side_parsed) {
      if (mp.fr.lay === 3) {
        if (mp.bsize < mp.ssize)
          return MPGLib$Companion_getInstance().MP3_NEED_MORE;
        this.copy_mp_swb0i5$(mp, mp.ssize, mp.wordpointer, mp.wordpointerPos);
        if (mp.fr.error_protection)
          this.common_0.getbits_mwy59t$(mp, 16);
        bits = this.layer3_0.do_layer3_sideinfo_rd9nj3$(mp);
        if (bits < 0)
          bits = 0;
        mp.dsize = (bits + 7 | 0) / 8 | 0;
      }
       else {
        if (mp.fr.framesize > mp.bsize)
          return MPGLib$Companion_getInstance().MP3_NEED_MORE;
        mp.dsize = mp.fr.framesize;
        mp.ssize = 0;
      }
      mp.side_parsed = true;
    }
    iret = MPGLib$Companion_getInstance().MP3_NEED_MORE;
    if (!mp.data_parsed) {
      if (mp.dsize > mp.bsize) {
        return MPGLib$Companion_getInstance().MP3_NEED_MORE;
      }
      this.copy_mp_swb0i5$(mp, mp.dsize, mp.wordpointer, mp.wordpointerPos);
      done.pb = 0;
      tmp$ = mp.fr.lay;
      if (tmp$ === 1) {
        if (mp.fr.error_protection)
          this.common_0.getbits_mwy59t$(mp, 16);
        this.layer1_0.do_layer1_69z4ye$(mp, out, done);
      }
       else if (tmp$ === 2) {
        if (mp.fr.error_protection)
          this.common_0.getbits_mwy59t$(mp, 16);
        this.layer2_0.do_layer2_iacefz$(mp, out, done, synth);
      }
       else if (tmp$ === 3)
        this.layer3_0.do_layer3_oidyt$(mp, out, done, synth);
      else
        lang.Console.error_61zpoe$('hip: invalid layer ' + mp.fr.lay);
      mp.wordpointer = mp.bsspace[mp.bsnum];
      mp.wordpointerPos = 512 + mp.ssize + mp.dsize | 0;
      mp.data_parsed = true;
      iret = MPGLib$Companion_getInstance().MP3_OK;
    }
    if (mp.free_format) {
      if (mp.old_free_format) {
        mp.framesize = mp.fsizeold_nopadding + mp.fr.padding | 0;
      }
       else {
        bytes = this.sync_buffer_1uhcso$(mp, true);
        if (bytes < 0)
          return iret;
        mp.framesize = bytes + mp.ssize + mp.dsize | 0;
        mp.fsizeold_nopadding = mp.framesize - mp.fr.padding | 0;
      }
    }
    bytes = mp.framesize - (mp.ssize + mp.dsize) | 0;
    if (bytes > mp.bsize) {
      return iret;
    }
    if (bytes > 0) {
      var size_0;
      this.copy_mp_swb0i5$(mp, bytes, mp.wordpointer, mp.wordpointerPos);
      mp.wordpointerPos = mp.wordpointerPos + bytes | 0;
      size_0 = mp.wordpointerPos - 512 | 0;
      if (size_0 > MPG123_getInstance().MAXFRAMESIZE) {
        lang.Console.error_61zpoe$('hip: fatal error.  MAXFRAMESIZE not large enough.');
      }
    }
    mp.fsizeold = mp.framesize;
    mp.old_free_format = mp.free_format;
    mp.framesize = 0;
    mp.header_parsed = false;
    mp.side_parsed = false;
    mp.data_parsed = false;
    return iret;
  };
  function Interface$decodeMP3$ObjectLiteral(this$Interface) {
    this.this$Interface = this$Interface;
  }
  Interface$decodeMP3$ObjectLiteral.prototype.synth_1to1_mono_ptr_ndrce4$ = function (mp, in_0, inPos, out, p) {
    return this.this$Interface.decode_0.synth1to1mono_ndrce4$(mp, in_0, inPos, out, p);
  };
  Interface$decodeMP3$ObjectLiteral.prototype.synth_1to1_ptr_80wkc8$ = function (mp, in_0, inPos, i, out, p) {
    return this.this$Interface.decode_0.synth_1to1_80wkc8$(mp, in_0, inPos, i, out, p);
  };
  Interface$decodeMP3$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Interface$ISynth]
  };
  Interface.prototype.decodeMP3_6mn0mk$ = function (mp, in_0, bufferPos, isize, out, osize, done) {
    if (osize < 2304) {
      lang.Console.error_61zpoe$('hip: Insufficient memory for decoding buffer ' + osize);
      return MPGLib$Companion_getInstance().MP3_ERR;
    }
    var synth = new Interface$decodeMP3$ObjectLiteral(this);
    return this.decodeMP3_clipchoice_53820t$(mp, in_0, bufferPos, isize, out, done, synth);
  };
  function Interface$decodeMP3_unclipped$ObjectLiteral(this$Interface) {
    this.this$Interface = this$Interface;
  }
  Interface$decodeMP3_unclipped$ObjectLiteral.prototype.synth_1to1_mono_ptr_ndrce4$ = function (mp, in_0, inPos, out, p) {
    this.this$Interface.decode_0.synth1to1monoUnclipped_ndrce4$(mp, in_0, inPos, out, p);
    return 0;
  };
  Interface$decodeMP3_unclipped$ObjectLiteral.prototype.synth_1to1_ptr_80wkc8$ = function (mp, in_0, inPos, i, out, p) {
    this.this$Interface.decode_0.synth_1to1_unclipped_80wkc8$(mp, in_0, inPos, i, out, p);
    return 0;
  };
  Interface$decodeMP3_unclipped$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [Interface$ISynth]
  };
  Interface.prototype.decodeMP3_unclipped_6mn0mk$ = function (mp, in_0, bufferPos, isize, out, osize, done) {
    if (osize < (1152 * 2 | 0)) {
      lang.Console.error_61zpoe$('hip: out space too small for unclipped mode');
      return MPGLib$Companion_getInstance().MP3_ERR;
    }
    var synth = new Interface$decodeMP3_unclipped$ObjectLiteral(this);
    return this.decodeMP3_clipchoice_53820t$(mp, in_0, bufferPos, isize, out, done, synth);
  };
  function Interface$ISynth() {
  }
  Interface$ISynth.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'ISynth',
    interfaces: []
  };
  Interface.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Interface',
    interfaces: []
  };
  function L2Tables() {
    L2Tables_instance = this;
    this.alloc_0 = [new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(15, -16383), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(15, -16383), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(15, -16383), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(16, -32767)];
    this.alloc_1 = [new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(15, -16383), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(15, -16383), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(15, -16383), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(16, -32767), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(16, -32767)];
    this.alloc_2 = [new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(15, -16383), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(15, -16383), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63)];
    this.alloc_3 = [new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(15, -16383), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(15, -16383), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63)];
    this.alloc_4 = [new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(4, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(3, -3), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(8, -127), new L2Tables$al_table2(9, -255), new L2Tables$al_table2(10, -511), new L2Tables$al_table2(11, -1023), new L2Tables$al_table2(12, -2047), new L2Tables$al_table2(13, -4095), new L2Tables$al_table2(14, -8191), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(3, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(4, -7), new L2Tables$al_table2(5, -15), new L2Tables$al_table2(6, -31), new L2Tables$al_table2(7, -63), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9), new L2Tables$al_table2(2, 0), new L2Tables$al_table2(5, 3), new L2Tables$al_table2(7, 5), new L2Tables$al_table2(10, 9)];
  }
  function L2Tables$al_table2(bits, d) {
    this.bits = bits;
    this.d = d;
  }
  L2Tables$al_table2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'al_table2',
    interfaces: []
  };
  L2Tables$al_table2.prototype.component1 = function () {
    return this.bits;
  };
  L2Tables$al_table2.prototype.component2 = function () {
    return this.d;
  };
  L2Tables$al_table2.prototype.copy_8bdmd0$ = function (bits, d) {
    return new L2Tables$al_table2(bits === void 0 ? this.bits : bits, d === void 0 ? this.d : d);
  };
  L2Tables$al_table2.prototype.toString = function () {
    return 'al_table2(bits=' + Kotlin.toString(this.bits) + (', d=' + Kotlin.toString(this.d)) + ')';
  };
  L2Tables$al_table2.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.bits) | 0;
    result = result * 31 + Kotlin.hashCode(this.d) | 0;
    return result;
  };
  L2Tables$al_table2.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.bits, other.bits) && Kotlin.equals(this.d, other.d)))));
  };
  L2Tables.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'L2Tables',
    interfaces: []
  };
  var L2Tables_instance = null;
  function L2Tables_getInstance() {
    if (L2Tables_instance === null) {
      new L2Tables();
    }
    return L2Tables_instance;
  }
  function Layer1(common, decode) {
    this.common_0 = common;
    this.decode_0 = decode;
  }
  Layer1.prototype.I_step_one_0 = function (mp, balloc, scale_index, fr) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    var ba = 0;
    var sca = 0;
    if (!(fr.stereo === 1 || fr.stereo === 2))
      throw new AssertionError_init();
    if (fr.stereo === 2) {
      var i;
      var jsbound = fr.jsbound;
      i = 0;
      while (i < jsbound) {
        balloc[tmp$ = ba, ba = tmp$ + 1 | 0, tmp$] = this.common_0.getbits_mwy59t$(mp, 4);
        balloc[tmp$_0 = ba, ba = tmp$_0 + 1 | 0, tmp$_0] = this.common_0.getbits_mwy59t$(mp, 4);
        i = i + 1 | 0;
      }
      i = jsbound;
      while (i < MPG123_getInstance().SBLIMIT) {
        balloc[tmp$_1 = ba, ba = tmp$_1 + 1 | 0, tmp$_1] = this.common_0.getbits_mwy59t$(mp, 4);
        i = i + 1 | 0;
      }
      ba = 0;
      i = 0;
      while (i < jsbound) {
        if ((tmp$_2 = balloc[ba], balloc[ba] = tmp$_2 + 1 | 0, tmp$_2) !== 0) {
          scale_index[tmp$_3 = sca, sca = tmp$_3 + 1 | 0, tmp$_3] = this.common_0.getbits_mwy59t$(mp, 6);
        }
        if (balloc[tmp$_4 = ba, ba = tmp$_4 + 1 | 0, tmp$_4] !== 0) {
          scale_index[tmp$_5 = sca, sca = tmp$_5 + 1 | 0, tmp$_5] = this.common_0.getbits_mwy59t$(mp, 6);
        }
        i = i + 1 | 0;
      }
      i = jsbound;
      while (i < MPG123_getInstance().SBLIMIT) {
        if (balloc[tmp$_6 = ba, ba = tmp$_6 + 1 | 0, tmp$_6] !== 0) {
          scale_index[tmp$_7 = sca, sca = tmp$_7 + 1 | 0, tmp$_7] = this.common_0.getbits_mwy59t$(mp, 6);
          scale_index[tmp$_8 = sca, sca = tmp$_8 + 1 | 0, tmp$_8] = this.common_0.getbits_mwy59t$(mp, 6);
        }
        i = i + 1 | 0;
      }
    }
     else {
      var i_0;
      i_0 = 0;
      while (i_0 < MPG123_getInstance().SBLIMIT) {
        balloc[tmp$_9 = ba, ba = tmp$_9 + 1 | 0, tmp$_9] = this.common_0.getbits_mwy59t$(mp, 4);
        i_0 = i_0 + 1 | 0;
      }
      ba = 0;
      i_0 = 0;
      while (i_0 < MPG123_getInstance().SBLIMIT) {
        if (balloc[tmp$_10 = ba, ba = tmp$_10 + 1 | 0, tmp$_10] !== 0) {
          scale_index[tmp$_11 = sca, sca = tmp$_11 + 1 | 0, tmp$_11] = this.common_0.getbits_mwy59t$(mp, 6);
        }
        i_0 = i_0 + 1 | 0;
      }
    }
  };
  Layer1.prototype.I_step_two_0 = function (mp, fraction, balloc, scale_index, fr) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36, tmp$_37, tmp$_38, tmp$_39, tmp$_40, tmp$_41, tmp$_42;
    var i;
    var n;
    var smpb = new Int32Array(2 * MPG123_getInstance().SBLIMIT | 0);
    var sample;
    var ba = 0;
    var sca = 0;
    if (!(fr.stereo === 1 || fr.stereo === 2))
      throw new AssertionError_init();
    if (fr.stereo === 2) {
      var jsbound = fr.jsbound;
      var f0 = 0;
      var f1 = 0;
      ba = 0;
      sample = 0;
      i = 0;
      while (i < jsbound) {
        n = balloc[tmp$ = ba, ba = tmp$ + 1 | 0, tmp$];
        if (n !== 0) {
          smpb[tmp$_0 = sample, sample = tmp$_0 + 1 | 0, tmp$_0] = this.common_0.getbits_mwy59t$(mp, n + 1 | 0);
        }
        n = balloc[tmp$_1 = ba, ba = tmp$_1 + 1 | 0, tmp$_1];
        if (n !== 0) {
          smpb[tmp$_2 = sample, sample = tmp$_2 + 1 | 0, tmp$_2] = this.common_0.getbits_mwy59t$(mp, n + 1 | 0);
        }
        i = i + 1 | 0;
      }
      i = jsbound;
      while (i < MPG123_getInstance().SBLIMIT) {
        n = balloc[tmp$_3 = ba, ba = tmp$_3 + 1 | 0, tmp$_3];
        if (n !== 0) {
          smpb[tmp$_4 = sample, sample = tmp$_4 + 1 | 0, tmp$_4] = this.common_0.getbits_mwy59t$(mp, n + 1 | 0);
        }
        i = i + 1 | 0;
      }
      ba = 0;
      sample = 0;
      i = 0;
      while (i < jsbound) {
        n = balloc[tmp$_5 = ba, ba = tmp$_5 + 1 | 0, tmp$_5];
        if (n !== 0) {
          tmp$_11 = (tmp$_10 = f0, f0 = tmp$_10 + 1 | 0, tmp$_10);
          tmp$_7 = smpb[tmp$_6 = sample, sample = tmp$_6 + 1 | 0, tmp$_6];
          tmp$_9 = this.common_0.muls[n + 1 | 0][scale_index[tmp$_8 = sca, sca = tmp$_8 + 1 | 0, tmp$_8]];
          fraction[0][tmp$_11] = ((-1 << n) + tmp$_7 + 1 | 0) * tmp$_9;
        }
         else {
          fraction[0][tmp$_12 = f0, f0 = tmp$_12 + 1 | 0, tmp$_12] = 0.0;
        }
        n = balloc[tmp$_13 = ba, ba = tmp$_13 + 1 | 0, tmp$_13];
        if (n !== 0) {
          tmp$_19 = (tmp$_18 = f1, f1 = tmp$_18 + 1 | 0, tmp$_18);
          tmp$_15 = smpb[tmp$_14 = sample, sample = tmp$_14 + 1 | 0, tmp$_14];
          tmp$_17 = this.common_0.muls[n + 1 | 0][scale_index[tmp$_16 = sca, sca = tmp$_16 + 1 | 0, tmp$_16]];
          fraction[1][tmp$_19] = ((-1 << n) + tmp$_15 + 1 | 0) * tmp$_17;
        }
         else {
          fraction[1][tmp$_20 = f1, f1 = tmp$_20 + 1 | 0, tmp$_20] = 0.0;
        }
        i = i + 1 | 0;
      }
      i = jsbound;
      while (i < MPG123_getInstance().SBLIMIT) {
        n = balloc[tmp$_21 = ba, ba = tmp$_21 + 1 | 0, tmp$_21];
        if (n !== 0) {
          var samp = (-1 << n) + smpb[tmp$_22 = sample, sample = tmp$_22 + 1 | 0, tmp$_22] + 1 | 0;
          tmp$_26 = (tmp$_25 = f0, f0 = tmp$_25 + 1 | 0, tmp$_25);
          tmp$_24 = this.common_0.muls[n + 1 | 0][scale_index[tmp$_23 = sca, sca = tmp$_23 + 1 | 0, tmp$_23]];
          fraction[0][tmp$_26] = samp * tmp$_24;
          tmp$_30 = (tmp$_29 = f1, f1 = tmp$_29 + 1 | 0, tmp$_29);
          tmp$_28 = this.common_0.muls[n + 1 | 0][scale_index[tmp$_27 = sca, sca = tmp$_27 + 1 | 0, tmp$_27]];
          fraction[1][tmp$_30] = samp * tmp$_28;
        }
         else {
          fraction[0][tmp$_31 = f0, f0 = tmp$_31 + 1 | 0, tmp$_31] = 0.0;
          fraction[1][tmp$_32 = f1, f1 = tmp$_32 + 1 | 0, tmp$_32] = 0.0;
        }
        i = i + 1 | 0;
      }
      i = fr.down_sample_sblimit;
      while (i < 32) {
        fraction[0][i] = 0.0;
        fraction[1][i] = 0.0;
        i = i + 1 | 0;
      }
    }
     else {
      var f0_0 = 0;
      ba = 0;
      sample = 0;
      i = 0;
      while (i < MPG123_getInstance().SBLIMIT) {
        n = balloc[tmp$_33 = ba, ba = tmp$_33 + 1 | 0, tmp$_33];
        if (n !== 0) {
          smpb[tmp$_34 = sample, sample = tmp$_34 + 1 | 0, tmp$_34] = this.common_0.getbits_mwy59t$(mp, n + 1 | 0);
        }
        i = i + 1 | 0;
      }
      ba = 0;
      sample = 0;
      i = 0;
      while (i < MPG123_getInstance().SBLIMIT) {
        n = balloc[tmp$_35 = ba, ba = tmp$_35 + 1 | 0, tmp$_35];
        if (n !== 0) {
          tmp$_41 = (tmp$_40 = f0_0, f0_0 = tmp$_40 + 1 | 0, tmp$_40);
          tmp$_37 = smpb[tmp$_36 = sample, sample = tmp$_36 + 1 | 0, tmp$_36];
          tmp$_39 = this.common_0.muls[n + 1 | 0][scale_index[tmp$_38 = sca, sca = tmp$_38 + 1 | 0, tmp$_38]];
          fraction[0][tmp$_41] = ((-1 << n) + tmp$_37 + 1 | 0) * tmp$_39;
        }
         else {
          fraction[0][tmp$_42 = f0_0, f0_0 = tmp$_42 + 1 | 0, tmp$_42] = 0.0;
        }
        i = i + 1 | 0;
      }
      i = fr.down_sample_sblimit;
      while (i < 32) {
        fraction[0][i] = 0.0;
        i = i + 1 | 0;
      }
    }
  };
  Layer1.prototype.do_layer1_69z4ye$ = function (mp, pcm_sample, pcm_point) {
    var clip = 0;
    var balloc = new Int32Array(2 * MPG123_getInstance().SBLIMIT | 0);
    var scale_index = new Int32Array(2 * MPG123_getInstance().SBLIMIT | 0);
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Float32Array(MPG123_getInstance().SBLIMIT);
    }
    var fraction = array;
    var fr = mp.fr;
    var stereo = fr.stereo;
    var single = fr.single;
    fr.jsbound = fr.mode === MPG123_getInstance().MPG_MD_JOINT_STEREO ? (fr.mode_ext << 2) + 4 | 0 : 32;
    if (stereo === 1 || single === 3)
      single = 0;
    this.I_step_one_0(mp, balloc, scale_index, fr);
    var i_0 = 0;
    while (i_0 < MPG123_getInstance().SCALE_BLOCK) {
      this.I_step_two_0(mp, fraction, balloc, scale_index, fr);
      if (single >= 0) {
        clip = clip + this.decode_0.synth1to1mono_ndrce4$(mp, fraction[single], 0, pcm_sample, pcm_point) | 0;
      }
       else {
        var p1 = new MPGLib$ProcessedBytes();
        p1.pb = pcm_point.pb;
        clip = clip + this.decode_0.synth_1to1_80wkc8$(mp, fraction[0], 0, 0, pcm_sample, p1) | 0;
        clip = clip + this.decode_0.synth_1to1_80wkc8$(mp, fraction[1], 0, 1, pcm_sample, pcm_point) | 0;
      }
      i_0 = i_0 + 1 | 0;
    }
    return clip;
  };
  Layer1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Layer1',
    interfaces: []
  };
  function Layer2(common) {
    Layer2$Companion_getInstance();
    this.common_0 = common;
    this.nul_tab_0 = new Int32Array([]);
    this.grp_3tab_0 = new Int32Array(32 * 3 | 0);
    this.grp_5tab_0 = new Int32Array(128 * 3 | 0);
    this.grp_9tab_0 = new Int32Array(1024 * 3 | 0);
    this.tables_0 = [this.grp_3tab_0, this.grp_5tab_0, this.grp_9tab_0];
    this.table_0 = [this.nul_tab_0, this.nul_tab_0, this.nul_tab_0, this.grp_3tab_0, this.nul_tab_0, this.grp_5tab_0, this.nul_tab_0, this.nul_tab_0, this.nul_tab_0, this.grp_9tab_0];
    this.base_0 = [new Int32Array([1, 0, 2]), new Int32Array([17, 18, 0, 19, 20]), new Int32Array([21, 1, 22, 23, 0, 24, 25, 2, 26])];
    this.tablen_0 = new Int32Array([3, 5, 9]);
    this.tables2_0 = [L2Tables_getInstance().alloc_0, L2Tables_getInstance().alloc_1, L2Tables_getInstance().alloc_2, L2Tables_getInstance().alloc_3, L2Tables_getInstance().alloc_4];
    this.sblims_0 = new Int32Array([27, 30, 8, 12, 30]);
    this.itable_0 = 0;
    this.scfsi_buf_0 = new Int32Array(64);
  }
  var Math_0 = Math;
  Layer2.prototype.init_layer2 = function () {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4;
    for (var i = 0; i <= 2; i++) {
      this.itable_0 = 0;
      var len = this.tablen_0[i];
      for (var j = 0; j < len; j++) {
        for (var k = 0; k < len; k++) {
          for (var l = 0; l < len; l++) {
            this.tables_0[i][tmp$ = this.itable_0, this.itable_0 = tmp$ + 1 | 0, tmp$] = this.base_0[i][l];
            this.tables_0[i][tmp$_0 = this.itable_0, this.itable_0 = tmp$_0 + 1 | 0, tmp$_0] = this.base_0[i][k];
            this.tables_0[i][tmp$_1 = this.itable_0, this.itable_0 = tmp$_1 + 1 | 0, tmp$_1] = this.base_0[i][j];
          }
        }
      }
    }
    for (var k_0 = 0; k_0 <= 26; k_0++) {
      var m = Layer2$Companion_getInstance().mulmul_0[k_0];
      var table = this.common_0.muls[k_0];
      var tablePos = 0;
      var j_0 = 3;
      var i_0 = 0;
      while (i_0 < 63) {
        tmp$_3 = (tmp$_2 = tablePos, tablePos = tmp$_2 + 1 | 0, tmp$_2);
        var other = j_0 / 3.0;
        table[tmp$_3] = m * Math_0.pow(2.0, other);
        i_0 = i_0 + 1 | 0;
        j_0 = j_0 - 1 | 0;
      }
      table[tmp$_4 = tablePos, tablePos = tmp$_4 + 1 | 0, tmp$_4] = 0.0;
    }
  };
  Layer2.prototype.II_step_one_0 = function (mp, bit_alloc, scale, fr) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23;
    var scalePos = 0;
    var stereo = fr.stereo - 1 | 0;
    var sblimit = fr.II_sblimit;
    var jsbound = fr.jsbound;
    var sblimit2 = fr.II_sblimit << stereo;
    var alloc1 = 0;
    var i;
    var scfsi;
    var bita;
    var sc;
    var step;
    bita = 0;
    if (stereo !== 0) {
      i = jsbound;
      while (i !== 0) {
        step = ((tmp$ = fr.alloc) != null ? tmp$ : Kotlin.throwNPE())[alloc1].bits;
        bit_alloc[tmp$_0 = bita, bita = tmp$_0 + 1 | 0, tmp$_0] = Kotlin.toChar(this.common_0.getbits_mwy59t$(mp, step)) | 0;
        bit_alloc[tmp$_1 = bita, bita = tmp$_1 + 1 | 0, tmp$_1] = Kotlin.toChar(this.common_0.getbits_mwy59t$(mp, step)) | 0;
        i = i - 1 | 0;
        alloc1 = alloc1 + (1 << step) | 0;
      }
      i = sblimit - jsbound | 0;
      while (i !== 0) {
        step = ((tmp$_2 = fr.alloc) != null ? tmp$_2 : Kotlin.throwNPE())[alloc1].bits;
        bit_alloc[bita + 0 | 0] = Kotlin.toChar(this.common_0.getbits_mwy59t$(mp, step)) | 0;
        bit_alloc[bita + 1 | 0] = bit_alloc[bita + 0 | 0];
        bita = bita + 2 | 0;
        i = i - 1 | 0;
        alloc1 = alloc1 + (1 << step) | 0;
      }
      bita = 0;
      scfsi = 0;
      i = sblimit2;
      while (i !== 0) {
        if (bit_alloc[tmp$_3 = bita, bita = tmp$_3 + 1 | 0, tmp$_3] !== 0) {
          this.scfsi_buf_0[tmp$_4 = scfsi, scfsi = tmp$_4 + 1 | 0, tmp$_4] = Kotlin.toChar(this.common_0.getbits_fast_mwy59t$(mp, 2)) | 0;
        }
        i = i - 1 | 0;
      }
    }
     else {
      i = sblimit;
      while (i !== 0) {
        step = ((tmp$_5 = fr.alloc) != null ? tmp$_5 : Kotlin.throwNPE())[alloc1].bits;
        bit_alloc[tmp$_6 = bita, bita = tmp$_6 + 1 | 0, tmp$_6] = Kotlin.toChar(this.common_0.getbits_mwy59t$(mp, step)) | 0;
        i = i - 1 | 0;
        alloc1 = alloc1 + (1 << step) | 0;
      }
      bita = 0;
      scfsi = 0;
      i = sblimit;
      while (i !== 0) {
        if (bit_alloc[tmp$_7 = bita, bita = tmp$_7 + 1 | 0, tmp$_7] !== 0) {
          this.scfsi_buf_0[tmp$_8 = scfsi, scfsi = tmp$_8 + 1 | 0, tmp$_8] = Kotlin.toChar(this.common_0.getbits_fast_mwy59t$(mp, 2)) | 0;
        }
        i = i - 1 | 0;
      }
    }
    bita = 0;
    scfsi = 0;
    i = sblimit2;
    while (i !== 0) {
      if (bit_alloc[tmp$_9 = bita, bita = tmp$_9 + 1 | 0, tmp$_9] !== 0) {
        tmp$_11 = this.scfsi_buf_0[tmp$_10 = scfsi, scfsi = tmp$_10 + 1 | 0, tmp$_10];
        if (tmp$_11 === 0) {
          scale[tmp$_12 = scalePos, scalePos = tmp$_12 + 1 | 0, tmp$_12] = this.common_0.getbits_fast_mwy59t$(mp, 6);
          scale[tmp$_13 = scalePos, scalePos = tmp$_13 + 1 | 0, tmp$_13] = this.common_0.getbits_fast_mwy59t$(mp, 6);
          scale[tmp$_14 = scalePos, scalePos = tmp$_14 + 1 | 0, tmp$_14] = this.common_0.getbits_fast_mwy59t$(mp, 6);
        }
         else if (tmp$_11 === 1) {
          sc = this.common_0.getbits_fast_mwy59t$(mp, 6);
          scale[tmp$_15 = scalePos, scalePos = tmp$_15 + 1 | 0, tmp$_15] = sc;
          scale[tmp$_16 = scalePos, scalePos = tmp$_16 + 1 | 0, tmp$_16] = sc;
          scale[tmp$_17 = scalePos, scalePos = tmp$_17 + 1 | 0, tmp$_17] = this.common_0.getbits_fast_mwy59t$(mp, 6);
        }
         else if (tmp$_11 === 2) {
          sc = this.common_0.getbits_fast_mwy59t$(mp, 6);
          scale[tmp$_18 = scalePos, scalePos = tmp$_18 + 1 | 0, tmp$_18] = sc;
          scale[tmp$_19 = scalePos, scalePos = tmp$_19 + 1 | 0, tmp$_19] = sc;
          scale[tmp$_20 = scalePos, scalePos = tmp$_20 + 1 | 0, tmp$_20] = sc;
        }
         else {
          scale[tmp$_21 = scalePos, scalePos = tmp$_21 + 1 | 0, tmp$_21] = this.common_0.getbits_fast_mwy59t$(mp, 6);
          sc = this.common_0.getbits_fast_mwy59t$(mp, 6);
          scale[tmp$_22 = scalePos, scalePos = tmp$_22 + 1 | 0, tmp$_22] = sc;
          scale[tmp$_23 = scalePos, scalePos = tmp$_23 + 1 | 0, tmp$_23] = sc;
        }
      }
      i = i - 1 | 0;
    }
  };
  Layer2.prototype.II_step_two_0 = function (mp, bit_alloc, fraction, scale, fr, x1) {
    var tmp$;
    var scalePos = {v: 0};
    var k = {v: null};
    var ba = {v: null};
    var stereo = fr.stereo;
    var sblimit = fr.II_sblimit;
    var jsbound = fr.jsbound;
    var alloc2 = {v: null};
    var alloc1 = {v: 0};
    var bita = {v: 0};
    var d1 = {v: null};
    var step = {v: null};
    var tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9;
    var i = 0;
    while (i < jsbound) {
      step.v = ((tmp$_0 = fr.alloc) != null ? tmp$_0 : Kotlin.throwNPE())[alloc1.v].bits;
      for (var j = 0; j < stereo; j++) {
        ba.v = bit_alloc[tmp$_1 = bita.v, bita.v = tmp$_1 + 1 | 0, tmp$_1];
        if (ba.v !== 0) {
          alloc2.v = alloc1.v + ba.v | 0;
          k.v = ((tmp$_2 = fr.alloc) != null ? tmp$_2 : Kotlin.throwNPE())[alloc2.v].bits;
          d1.v = ((tmp$_3 = fr.alloc) != null ? tmp$_3 : Kotlin.throwNPE())[alloc2.v].d;
          if (d1.v < 0) {
            var cm = this.common_0.muls[k.v][scale[scalePos.v + x1 | 0]];
            fraction[j][0][i] = (this.common_0.getbits_mwy59t$(mp, k.v) + d1.v | 0) * cm;
            fraction[j][1][i] = (this.common_0.getbits_mwy59t$(mp, k.v) + d1.v | 0) * cm;
            fraction[j][2][i] = (this.common_0.getbits_mwy59t$(mp, k.v) + d1.v | 0) * cm;
          }
           else {
            var idx;
            var tab;
            var m = scale[scalePos.v + x1 | 0];
            idx = this.common_0.getbits_mwy59t$(mp, k.v);
            tab = idx + idx + idx | 0;
            tmp$_6 = this.common_0.muls;
            tmp$_5 = this.table_0[d1.v][tmp$_4 = tab, tab = tmp$_4 + 1 | 0, tmp$_4];
            fraction[j][0][i] = tmp$_6[tmp$_5][m];
            tmp$_9 = this.common_0.muls;
            tmp$_8 = this.table_0[d1.v][tmp$_7 = tab, tab = tmp$_7 + 1 | 0, tmp$_7];
            fraction[j][1][i] = tmp$_9[tmp$_8][m];
            fraction[j][2][i] = this.common_0.muls[this.table_0[d1.v][tab]][m];
          }
          scalePos.v = scalePos.v + 3 | 0;
        }
         else {
          fraction[j][0][i] = 0.0;
          fraction[j][1][i] = 0.0;
          fraction[j][2][i] = 0.0;
        }
      }
      i = i + 1 | 0;
      alloc1.v = alloc1.v + (1 << step.v) | 0;
    }
    var tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19;
    var i_0 = jsbound;
    while (i_0 < sblimit) {
      step.v = ((tmp$_10 = fr.alloc) != null ? tmp$_10 : Kotlin.throwNPE())[alloc1.v].bits;
      bita.v = bita.v + 1 | 0;
      ba.v = bit_alloc[tmp$_11 = bita.v, bita.v = tmp$_11 + 1 | 0, tmp$_11];
      if (ba.v !== 0) {
        alloc2.v = alloc1.v + ba.v | 0;
        k.v = ((tmp$_12 = fr.alloc) != null ? tmp$_12 : Kotlin.throwNPE())[alloc2.v].bits;
        d1.v = ((tmp$_13 = fr.alloc) != null ? tmp$_13 : Kotlin.throwNPE())[alloc2.v].d;
        if (d1.v < 0) {
          var cm_0;
          cm_0 = this.common_0.muls[k.v][scale[scalePos.v + x1 + 3 | 0]];
          fraction[0][0][i_0] = this.common_0.getbits_mwy59t$(mp, k.v) + d1.v | 0;
          fraction[0][1][i_0] = this.common_0.getbits_mwy59t$(mp, k.v) + d1.v | 0;
          fraction[0][2][i_0] = this.common_0.getbits_mwy59t$(mp, k.v) + d1.v | 0;
          fraction[1][0][i_0] = fraction[0][0][i_0] * cm_0;
          fraction[1][1][i_0] = fraction[0][1][i_0] * cm_0;
          fraction[1][2][i_0] = fraction[0][2][i_0] * cm_0;
          cm_0 = this.common_0.muls[k.v][scale[scalePos.v + x1 | 0]];
          fraction[0][0][i_0] = fraction[0][0][i_0] * cm_0;
          fraction[0][1][i_0] = fraction[0][1][i_0] * cm_0;
          fraction[0][2][i_0] = fraction[0][2][i_0] * cm_0;
        }
         else {
          var idx_0;
          var tab_0;
          var m1;
          var m2;
          m1 = scale[scalePos.v + x1 | 0];
          m2 = scale[scalePos.v + x1 + 3 | 0];
          idx_0 = this.common_0.getbits_mwy59t$(mp, k.v);
          tab_0 = idx_0 + idx_0 + idx_0 | 0;
          fraction[0][0][i_0] = this.common_0.muls[this.table_0[d1.v][tab_0]][m1];
          tmp$_16 = this.common_0.muls;
          tmp$_15 = this.table_0[d1.v][tmp$_14 = tab_0, tab_0 = tmp$_14 + 1 | 0, tmp$_14];
          fraction[1][0][i_0] = tmp$_16[tmp$_15][m2];
          fraction[0][1][i_0] = this.common_0.muls[this.table_0[d1.v][tab_0]][m1];
          tmp$_19 = this.common_0.muls;
          tmp$_18 = this.table_0[d1.v][tmp$_17 = tab_0, tab_0 = tmp$_17 + 1 | 0, tmp$_17];
          fraction[1][1][i_0] = tmp$_19[tmp$_18][m2];
          fraction[0][2][i_0] = this.common_0.muls[this.table_0[d1.v][tab_0]][m1];
          fraction[1][2][i_0] = this.common_0.muls[this.table_0[d1.v][tab_0]][m2];
        }
        scalePos.v = scalePos.v + 6 | 0;
      }
       else {
        fraction[0][0][i_0] = 0.0;
        fraction[0][1][i_0] = 0.0;
        fraction[0][2][i_0] = 0.0;
        fraction[1][0][i_0] = 0.0;
        fraction[1][1][i_0] = 0.0;
        fraction[1][2][i_0] = 0.0;
      }
      i_0 = i_0 + 1 | 0;
      alloc1.v = alloc1.v + (1 << step.v) | 0;
    }
    tmp$ = MPG123_getInstance().SBLIMIT;
    for (var i_1 = sblimit; i_1 < tmp$; i_1++) {
      for (var j_0 = 0; j_0 < stereo; j_0++) {
        fraction[j_0][0][i_1] = 0.0;
        fraction[j_0][1][i_1] = 0.0;
        fraction[j_0][2][i_1] = 0.0;
      }
    }
  };
  Layer2.prototype.II_select_table_0 = function (fr) {
    var table;
    var sblim;
    if (fr.lsf !== 0) {
      table = 4;
    }
     else {
      table = Layer2$Companion_getInstance().translate_0[fr.sampling_frequency][2 - fr.stereo | 0][fr.bitrate_index];
    }
    sblim = this.sblims_0[table];
    fr.alloc = this.tables2_0[table];
    fr.II_sblimit = sblim;
  };
  Layer2.prototype.do_layer2_iacefz$ = function (mp, pcm_sample, pcm_point, synth) {
    var clip = 0;
    var i;
    var j;
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$; i_0++) {
      var array_0 = Array_0(4);
      var tmp$_0;
      tmp$_0 = array_0.length - 1 | 0;
      for (var i_1 = 0; i_1 <= tmp$_0; i_1++) {
        array_0[i_1] = new Float32Array(MPG123_getInstance().SBLIMIT);
      }
      array[i_0] = array_0;
    }
    var fraction = array;
    var bit_alloc = new Int32Array(64);
    var scale = new Int32Array(192);
    var fr = mp.fr;
    var stereo = fr.stereo;
    var single = fr.single;
    this.II_select_table_0(fr);
    fr.jsbound = fr.mode === MPG123_getInstance().MPG_MD_JOINT_STEREO ? (fr.mode_ext << 2) + 4 | 0 : fr.II_sblimit;
    if (stereo === 1 || single === 3)
      single = 0;
    this.II_step_one_0(mp, bit_alloc, scale, fr);
    i = 0;
    while (i < MPG123_getInstance().SCALE_BLOCK) {
      this.II_step_two_0(mp, bit_alloc, fraction, scale, fr, i >> 2);
      j = 0;
      while (j < 3) {
        if (single >= 0) {
          clip = clip + synth.synth_1to1_mono_ptr_ndrce4$(mp, fraction[single][j], 0, pcm_sample, pcm_point) | 0;
        }
         else {
          var p1 = new MPGLib$ProcessedBytes();
          p1.pb = pcm_point.pb;
          clip = clip + synth.synth_1to1_ptr_80wkc8$(mp, fraction[0][j], 0, 0, pcm_sample, p1) | 0;
          clip = clip + synth.synth_1to1_ptr_80wkc8$(mp, fraction[1][j], 0, 1, pcm_sample, pcm_point) | 0;
        }
        j = j + 1 | 0;
      }
      i = i + 1 | 0;
    }
    return clip;
  };
  function Layer2$Companion() {
    Layer2$Companion_instance = this;
    this.mulmul_0 = new Float64Array([0.0, -2.0 / 3.0, 2.0 / 3.0, 2.0 / 7.0, 2.0 / 15.0, 2.0 / 31.0, 2.0 / 63.0, 2.0 / 127.0, 2.0 / 255.0, 2.0 / 511.0, 2.0 / 1023.0, 2.0 / 2047.0, 2.0 / 4095.0, 2.0 / 8191.0, 2.0 / 16383.0, 2.0 / 32767.0, 2.0 / 65535.0, -4.0 / 5.0, -2.0 / 5.0, 2.0 / 5.0, 4.0 / 5.0, -8.0 / 9.0, -4.0 / 9.0, -2.0 / 9.0, 2.0 / 9.0, 4.0 / 9.0, 8.0 / 9.0]);
    this.translate_0 = [[new Int32Array([0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 1, 1, 1, 1, 1, 0]), new Int32Array([0, 2, 2, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0])], [new Int32Array([0, 2, 2, 2, 2, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0]), new Int32Array([0, 2, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0])], [new Int32Array([0, 3, 3, 3, 3, 3, 3, 0, 0, 0, 1, 1, 1, 1, 1, 0]), new Int32Array([0, 3, 3, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0])]];
  }
  Layer2$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Layer2$Companion_instance = null;
  function Layer2$Companion_getInstance() {
    if (Layer2$Companion_instance === null) {
      new Layer2$Companion();
    }
    return Layer2$Companion_instance;
  }
  Layer2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Layer2',
    interfaces: []
  };
  function Layer3(common) {
    Layer3$Companion_getInstance();
    this.common_0 = common;
    this.ispow_0 = new Float32Array(8207);
    this.aa_ca_0 = new Float32Array(8);
    this.aa_cs_0 = new Float32Array(8);
    var array = Array_0(12);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Float32Array(6);
    }
    this.COS1_0 = array;
    var array_0 = Array_0(4);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      array_0[i_0] = new Float32Array(36);
    }
    this.win_0 = array_0;
    var array_1 = Array_0(4);
    var tmp$_1;
    tmp$_1 = array_1.length - 1 | 0;
    for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
      array_1[i_1] = new Float32Array(36);
    }
    this.win1_0 = array_1;
    this.gainpow2_0 = new Float32Array(256 + 118 + 4 | 0);
    this.COS9_0 = new Float32Array(9);
    this.COS6_1_0 = 0;
    this.COS6_2_0 = 0;
    this.tfcos36_0 = new Float32Array(9);
    this.tfcos12_0 = new Float32Array(3);
    var array_2 = Array_0(9);
    var tmp$_2;
    tmp$_2 = array_2.length - 1 | 0;
    for (var i_2 = 0; i_2 <= tmp$_2; i_2++) {
      array_2[i_2] = new Int32Array(23);
    }
    this.longLimit_0 = array_2;
    var array_3 = Array_0(9);
    var tmp$_3;
    tmp$_3 = array_3.length - 1 | 0;
    for (var i_3 = 0; i_3 <= tmp$_3; i_3++) {
      array_3[i_3] = new Int32Array(14);
    }
    this.shortLimit_0 = array_3;
    var array_4 = Array_0(9);
    var tmp$_4;
    tmp$_4 = array_4.length - 1 | 0;
    for (var i_4 = 0; i_4 <= tmp$_4; i_4++) {
      array_4[i_4] = new Int32Array(152);
    }
    this.mapbuf0_0 = array_4;
    var array_5 = Array_0(9);
    var tmp$_5;
    tmp$_5 = array_5.length - 1 | 0;
    for (var i_5 = 0; i_5 <= tmp$_5; i_5++) {
      array_5[i_5] = new Int32Array(156);
    }
    this.mapbuf1_0 = array_5;
    var array_6 = Array_0(9);
    var tmp$_6;
    tmp$_6 = array_6.length - 1 | 0;
    for (var i_6 = 0; i_6 <= tmp$_6; i_6++) {
      array_6[i_6] = new Int32Array(44);
    }
    this.mapbuf2_0 = array_6;
    var array_7 = Array_0(9);
    var tmp$_7;
    tmp$_7 = array_7.length - 1 | 0;
    for (var i_7 = 0; i_7 <= tmp$_7; i_7++) {
      var array_8 = Array_0(3);
      var tmp$_8;
      tmp$_8 = array_8.length - 1 | 0;
      for (var i_8 = 0; i_8 <= tmp$_8; i_8++) {
        array_8[i_8] = new Int32Array([]);
      }
      array_7[i_7] = array_8;
    }
    this.map_0 = array_7;
    var array_9 = Array_0(9);
    var tmp$_9;
    tmp$_9 = array_9.length - 1 | 0;
    for (var i_9 = 0; i_9 <= tmp$_9; i_9++) {
      array_9[i_9] = new Int32Array(3);
    }
    this.mapend_0 = array_9;
    this.n_slen2_0 = new Int32Array(512);
    this.i_slen2_0 = new Int32Array(256);
    this.tan1_1_0 = new Float32Array(16);
    this.tan2_1_0 = new Float32Array(16);
    this.tan1_2_0 = new Float32Array(16);
    this.tan2_2_0 = new Float32Array(16);
    var array_10 = Array_0(2);
    var tmp$_10;
    tmp$_10 = array_10.length - 1 | 0;
    for (var i_10 = 0; i_10 <= tmp$_10; i_10++) {
      array_10[i_10] = new Float32Array(16);
    }
    this.pow1_1_0 = array_10;
    var array_11 = Array_0(2);
    var tmp$_11;
    tmp$_11 = array_11.length - 1 | 0;
    for (var i_11 = 0; i_11 <= tmp$_11; i_11++) {
      array_11[i_11] = new Float32Array(16);
    }
    this.pow2_1_0 = array_11;
    var array_12 = Array_0(2);
    var tmp$_12;
    tmp$_12 = array_12.length - 1 | 0;
    for (var i_12 = 0; i_12 <= tmp$_12; i_12++) {
      array_12[i_12] = new Float32Array(16);
    }
    this.pow1_2_0 = array_12;
    var array_13 = Array_0(2);
    var tmp$_13;
    tmp$_13 = array_13.length - 1 | 0;
    for (var i_13 = 0; i_13 <= tmp$_13; i_13++) {
      array_13[i_13] = new Float32Array(16);
    }
    this.pow2_2_0 = array_13;
    this.sideinfo_0 = new MPG123$III_sideinfo();
    var array_14 = Array_0(2);
    var tmp$_14;
    tmp$_14 = array_14.length - 1 | 0;
    for (var i_14 = 0; i_14 <= tmp$_14; i_14++) {
      array_14[i_14] = new Float32Array(Kotlin.imul(MPG123_getInstance().SBLIMIT, MPG123_getInstance().SSLIMIT));
    }
    this.hybridIn_0 = array_14;
    var array_15 = Array_0(2);
    var tmp$_15;
    tmp$_15 = array_15.length - 1 | 0;
    for (var i_15 = 0; i_15 <= tmp$_15; i_15++) {
      array_15[i_15] = new Float32Array(Kotlin.imul(MPG123_getInstance().SSLIMIT, MPG123_getInstance().SBLIMIT));
    }
    this.hybridOut_0 = array_15;
  }
  Layer3.prototype.get1bit_0 = function (mp) {
    var rval = (mp.wordpointer[mp.wordpointerPos] & 255) << mp.bitindex;
    rval = rval & 255;
    mp.bitindex = mp.bitindex + 1 | 0;
    mp.wordpointerPos = mp.wordpointerPos + (mp.bitindex >> 3) | 0;
    mp.bitindex = mp.bitindex & 7;
    return rval >> 7;
  };
  Layer3.prototype.init_layer3_za3lpa$ = function (down_sample_sblimit) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21;
    tmp$ = 118 + 4 | 0;
    for (var i = -256; i < tmp$; i++) {
      var tmp$_22 = this.gainpow2_0;
      var other = -0.25 * (i + 210 | 0);
      tmp$_22[i + 256 | 0] = Math_0.pow(2.0, other);
    }
    for (var i_0 = 0; i_0 <= 8206; i_0++) {
      var tmp$_23 = this.ispow_0;
      var other_0 = 4.0 / 3.0;
      tmp$_23[i_0] = Math_0.pow(i_0, other_0);
    }
    for (var i_1 = 0; i_1 < 8; i_1++) {
      var a = 1.0 + Layer3$Companion_getInstance().Ci_0[i_1] * Layer3$Companion_getInstance().Ci_0[i_1];
      var sq = Math_0.sqrt(a);
      this.aa_cs_0[i_1] = 1.0 / sq;
      this.aa_ca_0[i_1] = Layer3$Companion_getInstance().Ci_0[i_1] / sq;
    }
    for (var i_2 = 0; i_2 < 18; i_2++) {
      var tmp$_24 = this.win_0[1];
      var a_0 = MPG123_getInstance().M_PI / 72.0 * ((2 * (i_2 + 0 | 0) | 0) + 1 | 0);
      var tmp$_25 = 0.5 * Math_0.sin(a_0);
      var a_1 = MPG123_getInstance().M_PI * ((2 * (i_2 + 0 | 0) | 0) + 19 | 0) / 72.0;
      tmp$_24[i_2] = tmp$_25 / Math_0.cos(a_1);
      this.win_0[0][i_2] = this.win_0[1][i_2];
      var tmp$_26 = this.win_0[3];
      var a_2 = MPG123_getInstance().M_PI / 72.0 * ((2 * (i_2 + 18 | 0) | 0) + 1 | 0);
      var tmp$_27 = 0.5 * Math_0.sin(a_2);
      var a_3 = MPG123_getInstance().M_PI * ((2 * (i_2 + 18 | 0) | 0) + 19 | 0) / 72.0;
      tmp$_26[i_2 + 18 | 0] = tmp$_27 / Math_0.cos(a_3);
      this.win_0[0][i_2 + 18 | 0] = this.win_0[3][i_2 + 18 | 0];
    }
    for (var i_3 = 0; i_3 < 6; i_3++) {
      var tmp$_28 = this.win_0[1];
      var a_4 = MPG123_getInstance().M_PI * ((2 * (i_3 + 18 | 0) | 0) + 19 | 0) / 72.0;
      tmp$_28[i_3 + 18 | 0] = 0.5 / Math_0.cos(a_4);
      var tmp$_29 = this.win_0[3];
      var a_5 = MPG123_getInstance().M_PI * ((2 * (i_3 + 12 | 0) | 0) + 19 | 0) / 72.0;
      tmp$_29[i_3 + 12 | 0] = 0.5 / Math_0.cos(a_5);
      var tmp$_30 = this.win_0[1];
      var a_6 = MPG123_getInstance().M_PI / 24.0 * ((2 * i_3 | 0) + 13 | 0);
      var tmp$_31 = 0.5 * Math_0.sin(a_6);
      var a_7 = MPG123_getInstance().M_PI * ((2 * (i_3 + 24 | 0) | 0) + 19 | 0) / 72.0;
      tmp$_30[i_3 + 24 | 0] = tmp$_31 / Math_0.cos(a_7);
      this.win_0[1][i_3 + 30 | 0] = 0.0;
      this.win_0[3][i_3] = 0.0;
      var tmp$_32 = this.win_0[3];
      var a_8 = MPG123_getInstance().M_PI / 24.0 * ((2 * i_3 | 0) + 1 | 0);
      var tmp$_33 = 0.5 * Math_0.sin(a_8);
      var a_9 = MPG123_getInstance().M_PI * ((2 * (i_3 + 6 | 0) | 0) + 19 | 0) / 72.0;
      tmp$_32[i_3 + 6 | 0] = tmp$_33 / Math_0.cos(a_9);
    }
    for (var i_4 = 0; i_4 <= 8; i_4++) {
      var tmp$_34 = this.COS9_0;
      var a_10 = MPG123_getInstance().M_PI / 18.0 * i_4;
      tmp$_34[i_4] = Math_0.cos(a_10);
    }
    for (var i_5 = 0; i_5 <= 8; i_5++) {
      var tmp$_35 = this.tfcos36_0;
      var a_11 = MPG123_getInstance().M_PI * ((i_5 * 2 | 0) + 1 | 0) / 36.0;
      tmp$_35[i_5] = 0.5 / Math_0.cos(a_11);
    }
    for (var i_6 = 0; i_6 <= 2; i_6++) {
      var tmp$_36 = this.tfcos12_0;
      var a_12 = MPG123_getInstance().M_PI * ((i_6 * 2 | 0) + 1 | 0) / 12.0;
      tmp$_36[i_6] = 0.5 / Math_0.cos(a_12);
    }
    var a_13 = MPG123_getInstance().M_PI / 6.0 * 1;
    this.COS6_1_0 = Math_0.cos(a_13);
    var a_14 = MPG123_getInstance().M_PI / 6.0 * 2;
    this.COS6_2_0 = Math_0.cos(a_14);
    for (var i_7 = 0; i_7 < 12; i_7++) {
      var tmp$_37 = this.win_0[2];
      var a_15 = MPG123_getInstance().M_PI / 24.0 * ((2 * i_7 | 0) + 1 | 0);
      var tmp$_38 = 0.5 * Math_0.sin(a_15);
      var a_16 = MPG123_getInstance().M_PI * ((2 * i_7 | 0) + 7 | 0) / 24.0;
      tmp$_37[i_7] = tmp$_38 / Math_0.cos(a_16);
      for (var j = 0; j <= 5; j++) {
        var tmp$_39 = this.COS1_0[i_7];
        var a_17 = MPG123_getInstance().M_PI / 24.0 * Kotlin.imul((2 * i_7 | 0) + 7 | 0, (2 * j | 0) + 1 | 0);
        tmp$_39[j] = Math_0.cos(a_17);
      }
    }
    for (var j_0 = 0; j_0 < 4; j_0++) {
      tmp$_0 = Layer3$Companion_getInstance().len_0[j_0];
      for (var i_8 = 0; i_8 < tmp$_0; i_8 += 2)
        this.win1_0[j_0][i_8] = +this.win_0[j_0][i_8];
      tmp$_1 = Layer3$Companion_getInstance().len_0[j_0];
      for (var i_9 = 1; i_9 < tmp$_1; i_9 += 2)
        this.win1_0[j_0][i_9] = -this.win_0[j_0][i_9];
    }
    for (var i_10 = 0; i_10 < 16; i_10++) {
      var a_18 = i_10 * MPG123_getInstance().M_PI / 12.0;
      var t = Math_0.tan(a_18);
      this.tan1_1_0[i_10] = t / (1.0 + t);
      this.tan2_1_0[i_10] = 1.0 / (1.0 + t);
      this.tan1_2_0[i_10] = MPG123_getInstance().M_SQRT2 * t / (1.0 + t);
      this.tan2_2_0[i_10] = MPG123_getInstance().M_SQRT2 / (1.0 + t);
      for (var j_1 = 0; j_1 <= 1; j_1++) {
        var other_1 = -0.25 * (j_1 + 1.0);
        var base = Math_0.pow(2.0, other_1);
        var p1 = 1.0;
        var p2 = 1.0;
        if (i_10 > 0) {
          if ((i_10 & 1) !== 0) {
            var other_2 = (i_10 + 1.0) * 0.5;
            p1 = Math_0.pow(base, other_2);
          }
           else {
            var other_3 = i_10 * 0.5;
            p2 = Math_0.pow(base, other_3);
          }
        }
        this.pow1_1_0[j_1][i_10] = p1;
        this.pow2_1_0[j_1][i_10] = p2;
        this.pow1_2_0[j_1][i_10] = MPG123_getInstance().M_SQRT2 * p1;
        this.pow2_2_0[j_1][i_10] = MPG123_getInstance().M_SQRT2 * p2;
      }
    }
    for (var j_2 = 0; j_2 <= 8; j_2++) {
      var bi = Layer3$Companion_getInstance().bandInfo_0[j_2];
      var lwin;
      this.map_0[j_2][0] = this.mapbuf0_0[j_2];
      var mp = 0;
      var bdf = 0;
      var i_11 = 0;
      var cb = 0;
      while (cb < 8) {
        this.map_0[j_2][0][tmp$_2 = mp, mp = tmp$_2 + 1 | 0, tmp$_2] = bi.longDiff_8be2vx$[bdf] >> 1;
        this.map_0[j_2][0][tmp$_3 = mp, mp = tmp$_3 + 1 | 0, tmp$_3] = i_11;
        this.map_0[j_2][0][tmp$_4 = mp, mp = tmp$_4 + 1 | 0, tmp$_4] = 3;
        this.map_0[j_2][0][tmp$_5 = mp, mp = tmp$_5 + 1 | 0, tmp$_5] = cb;
        cb = cb + 1 | 0;
        var tmp$_40;
        i_11 = i_11 + bi.longDiff_8be2vx$[tmp$_40 = bdf, bdf = tmp$_40 + 1 | 0, tmp$_40] | 0;
      }
      bdf = 3;
      cb = 3;
      while (cb < 13) {
        var l = bi.shortDiff_8be2vx$[tmp$_6 = bdf, bdf = tmp$_6 + 1 | 0, tmp$_6] >> 1;
        lwin = 0;
        while (lwin < 3) {
          this.map_0[j_2][0][tmp$_7 = mp, mp = tmp$_7 + 1 | 0, tmp$_7] = l;
          this.map_0[j_2][0][tmp$_8 = mp, mp = tmp$_8 + 1 | 0, tmp$_8] = i_11 + lwin | 0;
          this.map_0[j_2][0][tmp$_9 = mp, mp = tmp$_9 + 1 | 0, tmp$_9] = lwin;
          this.map_0[j_2][0][tmp$_10 = mp, mp = tmp$_10 + 1 | 0, tmp$_10] = cb;
          lwin = lwin + 1 | 0;
        }
        i_11 = i_11 + (6 * l | 0) | 0;
        cb = cb + 1 | 0;
      }
      this.mapend_0[j_2][0] = mp;
      this.map_0[j_2][1] = this.mapbuf1_0[j_2];
      mp = 0;
      bdf = 0;
      i_11 = 0;
      cb = 0;
      while (cb < 13) {
        var l_0 = bi.shortDiff_8be2vx$[tmp$_11 = bdf, bdf = tmp$_11 + 1 | 0, tmp$_11] >> 1;
        lwin = 0;
        while (lwin < 3) {
          this.map_0[j_2][1][tmp$_12 = mp, mp = tmp$_12 + 1 | 0, tmp$_12] = l_0;
          this.map_0[j_2][1][tmp$_13 = mp, mp = tmp$_13 + 1 | 0, tmp$_13] = i_11 + lwin | 0;
          this.map_0[j_2][1][tmp$_14 = mp, mp = tmp$_14 + 1 | 0, tmp$_14] = lwin;
          this.map_0[j_2][1][tmp$_15 = mp, mp = tmp$_15 + 1 | 0, tmp$_15] = cb;
          lwin = lwin + 1 | 0;
        }
        i_11 = i_11 + (6 * l_0 | 0) | 0;
        cb = cb + 1 | 0;
      }
      this.mapend_0[j_2][1] = mp;
      this.map_0[j_2][2] = this.mapbuf2_0[j_2];
      mp = 0;
      bdf = 0;
      cb = 0;
      while (cb < 22) {
        tmp$_20 = (tmp$_19 = mp, mp = tmp$_19 + 1 | 0, tmp$_19);
        tmp$_18 = bi.longDiff_8be2vx$;
        tmp$_17 = (tmp$_16 = bdf, bdf = tmp$_16 + 1 | 0, tmp$_16);
        this.map_0[j_2][2][tmp$_20] = tmp$_18[tmp$_17] >> 1;
        this.map_0[j_2][2][tmp$_21 = mp, mp = tmp$_21 + 1 | 0, tmp$_21] = cb;
        cb = cb + 1 | 0;
      }
      this.mapend_0[j_2][2] = mp;
    }
    for (var j_3 = 0; j_3 <= 8; j_3++) {
      for (var i_12 = 0; i_12 <= 22; i_12++) {
        this.longLimit_0[j_3][i_12] = ((Layer3$Companion_getInstance().bandInfo_0[j_3].longIdx_8be2vx$[i_12] - 1 + 8 | 0) / 18 | 0) + 1 | 0;
        if (this.longLimit_0[j_3][i_12] > down_sample_sblimit)
          this.longLimit_0[j_3][i_12] = down_sample_sblimit;
      }
      for (var i_13 = 0; i_13 <= 13; i_13++) {
        this.shortLimit_0[j_3][i_13] = ((Layer3$Companion_getInstance().bandInfo_0[j_3].shortIdx_8be2vx$[i_13] - 1) / 18 | 0) + 1 | 0;
        if (this.shortLimit_0[j_3][i_13] > down_sample_sblimit)
          this.shortLimit_0[j_3][i_13] = down_sample_sblimit;
      }
    }
    for (var i_14 = 0; i_14 <= 4; i_14++) {
      for (var j_4 = 0; j_4 <= 5; j_4++) {
        for (var k = 0; k <= 5; k++) {
          this.i_slen2_0[k + (j_4 * 6 | 0) + (i_14 * 36 | 0) | 0] = i_14 | j_4 << 3 | k << 6 | 3 << 12;
        }
      }
    }
    for (var i_15 = 0; i_15 <= 3; i_15++) {
      for (var j_5 = 0; j_5 <= 3; j_5++) {
        for (var k_0 = 0; k_0 <= 3; k_0++) {
          this.i_slen2_0[k_0 + (j_5 * 4 | 0) + (i_15 * 16 | 0) + 180 | 0] = i_15 | j_5 << 3 | k_0 << 6 | 4 << 12;
        }
      }
    }
    for (var i_16 = 0; i_16 <= 3; i_16++) {
      for (var j_6 = 0; j_6 <= 2; j_6++) {
        var n = j_6 + (i_16 * 3 | 0) | 0;
        this.i_slen2_0[n + 244 | 0] = i_16 | j_6 << 3 | 5 << 12;
        this.n_slen2_0[n + 500 | 0] = i_16 | j_6 << 3 | 2 << 12 | 1 << 15;
      }
    }
    for (var i_17 = 0; i_17 <= 4; i_17++) {
      for (var j_7 = 0; j_7 <= 4; j_7++) {
        for (var k_1 = 0; k_1 <= 3; k_1++) {
          for (var l_1 = 0; l_1 < 4; l_1++) {
            this.n_slen2_0[l_1 + (k_1 * 4 | 0) + (j_7 * 16 | 0) + (i_17 * 80 | 0) | 0] = i_17 | j_7 << 3 | k_1 << 6 | l_1 << 9 | 0 << 12;
          }
        }
      }
    }
    for (var i_18 = 0; i_18 <= 4; i_18++) {
      for (var j_8 = 0; j_8 <= 4; j_8++) {
        for (var k_2 = 0; k_2 <= 3; k_2++) {
          this.n_slen2_0[k_2 + (j_8 * 4 | 0) + (i_18 * 20 | 0) + 400 | 0] = i_18 | j_8 << 3 | k_2 << 6 | 1 << 12;
        }
      }
    }
  };
  Layer3.prototype.III_get_side_info_1_0 = function (mp, si, stereo, ms_stereo, sfreq, single) {
    var tmp$;
    var ch;
    var powdiff = single === 3 ? 4 : 0;
    si.main_data_begin = this.common_0.getbits_mwy59t$(mp, 9);
    si.private_bits = stereo === 1 ? this.common_0.getbits_fast_mwy59t$(mp, 5) : this.common_0.getbits_fast_mwy59t$(mp, 3);
    ch = 0;
    while (ch < stereo) {
      si.ch[ch].gr[0].scfsi = -1;
      si.ch[ch].gr[1].scfsi = this.common_0.getbits_fast_mwy59t$(mp, 4);
      ch = ch + 1 | 0;
    }
    var gr = 0;
    while (gr < 2) {
      ch = 0;
      while (ch < stereo) {
        var gr_infos = si.ch[ch].gr[gr];
        gr_infos.part2_3_length = this.common_0.getbits_mwy59t$(mp, 12);
        gr_infos.big_values = this.common_0.getbits_fast_mwy59t$(mp, 9);
        if (gr_infos.big_values > 288) {
          lang.Console.error_61zpoe$('big_values too large! ' + gr_infos.big_values);
          gr_infos.big_values = 288;
        }
        var qss = this.common_0.getbits_fast_mwy59t$(mp, 8);
        gr_infos.pow2gain = this.gainpow2_0;
        gr_infos.pow2gainPos = 256 - qss + powdiff | 0;
        mp.pinfo.qss[gr][ch] = qss;
        if (ms_stereo !== 0)
          gr_infos.pow2gainPos = gr_infos.pow2gainPos + 2 | 0;
        gr_infos.scalefac_compress = this.common_0.getbits_fast_mwy59t$(mp, 4);
        if (this.get1bit_0(mp) !== 0) {
          gr_infos.block_type = this.common_0.getbits_fast_mwy59t$(mp, 2);
          gr_infos.mixed_block_flag = this.get1bit_0(mp);
          gr_infos.table_select[0] = this.common_0.getbits_fast_mwy59t$(mp, 5);
          gr_infos.table_select[1] = this.common_0.getbits_fast_mwy59t$(mp, 5);
          gr_infos.table_select[2] = 0;
          var i = 0;
          while (i < 3) {
            var sbg = this.common_0.getbits_fast_mwy59t$(mp, 3) << 3;
            gr_infos.full_gain[i] = gr_infos.pow2gain;
            gr_infos.full_gainPos[i] = gr_infos.pow2gainPos + sbg | 0;
            mp.pinfo.sub_gain[gr][ch][i] = sbg / 8 | 0;
            i = i + 1 | 0;
          }
          if (gr_infos.block_type === 0) {
            lang.Console.error_61zpoe$('Blocktype == 0 and window-switching == 1 not allowed.');
          }
          gr_infos.region1start = 36 >> 1;
          gr_infos.region2start = 576 >> 1;
        }
         else {
          var i_0 = 0;
          while (i_0 < 3) {
            gr_infos.table_select[i_0] = this.common_0.getbits_fast_mwy59t$(mp, 5);
            i_0 = i_0 + 1 | 0;
          }
          var r0c = this.common_0.getbits_fast_mwy59t$(mp, 4);
          var r1c = this.common_0.getbits_fast_mwy59t$(mp, 3);
          gr_infos.region1start = Layer3$Companion_getInstance().bandInfo_0[sfreq].longIdx_8be2vx$[r0c + 1 | 0] >> 1;
          if ((r0c + 1 + r1c + 1 | 0) < Layer3$Companion_getInstance().bandInfo_0[sfreq].longIdx_8be2vx$.length) {
            tmp$ = Layer3$Companion_getInstance().bandInfo_0[sfreq].longIdx_8be2vx$[r0c + 1 + r1c + 1 | 0] >> 1;
          }
           else {
            tmp$ = Layer3$Companion_getInstance().bandInfo_0[sfreq].longDiff_8be2vx$[r0c + 1 + r1c + 1 - Layer3$Companion_getInstance().bandInfo_0[sfreq].longIdx_8be2vx$.length | 0] >> 1;
          }
          gr_infos.region2start = tmp$;
          gr_infos.block_type = 0;
          gr_infos.mixed_block_flag = 0;
        }
        gr_infos.preflag = this.get1bit_0(mp);
        gr_infos.scalefac_scale = this.get1bit_0(mp);
        gr_infos.count1table_select = this.get1bit_0(mp);
        ch = ch + 1 | 0;
      }
      gr = gr + 1 | 0;
    }
  };
  Layer3.prototype.III_get_side_info_2_0 = function (mp, si, stereo, ms_stereo, sfreq, single) {
    var tmp$;
    var powdiff = single === 3 ? 4 : 0;
    si.main_data_begin = this.common_0.getbits_mwy59t$(mp, 8);
    si.private_bits = stereo === 1 ? this.get1bit_0(mp) : this.common_0.getbits_fast_mwy59t$(mp, 2);
    var ch = 0;
    while (ch < stereo) {
      var gr_infos = si.ch[ch].gr[0];
      gr_infos.part2_3_length = this.common_0.getbits_mwy59t$(mp, 12);
      gr_infos.big_values = this.common_0.getbits_fast_mwy59t$(mp, 9);
      if (gr_infos.big_values > 288) {
        lang.Console.error_61zpoe$('big_values too large! ' + gr_infos.big_values);
        gr_infos.big_values = 288;
      }
      var qss = this.common_0.getbits_fast_mwy59t$(mp, 8);
      gr_infos.pow2gain = this.gainpow2_0;
      gr_infos.pow2gainPos = 256 - qss + powdiff | 0;
      mp.pinfo.qss[0][ch] = qss;
      if (ms_stereo !== 0)
        gr_infos.pow2gainPos = gr_infos.pow2gainPos + 2 | 0;
      gr_infos.scalefac_compress = this.common_0.getbits_mwy59t$(mp, 9);
      if (this.get1bit_0(mp) !== 0) {
        gr_infos.block_type = this.common_0.getbits_fast_mwy59t$(mp, 2);
        gr_infos.mixed_block_flag = this.get1bit_0(mp);
        gr_infos.table_select[0] = this.common_0.getbits_fast_mwy59t$(mp, 5);
        gr_infos.table_select[1] = this.common_0.getbits_fast_mwy59t$(mp, 5);
        gr_infos.table_select[2] = 0;
        for (var i = 0; i < 3; i++) {
          var sbg = this.common_0.getbits_fast_mwy59t$(mp, 3) << 3;
          gr_infos.full_gain[i] = gr_infos.pow2gain;
          gr_infos.full_gainPos[i] = gr_infos.pow2gainPos + sbg | 0;
          mp.pinfo.sub_gain[0][ch][i] = sbg / 8 | 0;
        }
        if (gr_infos.block_type === 0)
          lang.Console.error_61zpoe$('Blocktype == 0 and window-switching == 1 not allowed.');
        if (gr_infos.block_type === 2) {
          tmp$ = sfreq === 8 ? 36 : 36 >> 1;
        }
         else if (sfreq === 8) {
          tmp$ = 108 >> 1;
        }
         else {
          tmp$ = 54 >> 1;
        }
        gr_infos.region1start = tmp$;
        gr_infos.region2start = 576 >> 1;
      }
       else {
        for (var i_0 = 0; i_0 < 3; i_0++)
          gr_infos.table_select[i_0] = this.common_0.getbits_fast_mwy59t$(mp, 5);
        var r0c = this.common_0.getbits_fast_mwy59t$(mp, 4);
        var r1c = this.common_0.getbits_fast_mwy59t$(mp, 3);
        gr_infos.region1start = Layer3$Companion_getInstance().bandInfo_0[sfreq].longIdx_8be2vx$[r0c + 1 | 0] >> 1;
        gr_infos.region2start = Layer3$Companion_getInstance().bandInfo_0[sfreq].longIdx_8be2vx$[r0c + 1 + r1c + 1 | 0] >> 1;
        gr_infos.block_type = 0;
        gr_infos.mixed_block_flag = 0;
      }
      gr_infos.scalefac_scale = this.get1bit_0(mp);
      gr_infos.count1table_select = this.get1bit_0(mp);
      ch = ch + 1 | 0;
    }
  };
  Layer3.prototype.III_get_scale_factors_1_0 = function (mp, scf, gr_infos) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11;
    var scfPos = 0;
    var numbits;
    var num0 = Layer3$Companion_getInstance().slen_0[0][gr_infos.scalefac_compress];
    var num1 = Layer3$Companion_getInstance().slen_0[1][gr_infos.scalefac_compress];
    if (gr_infos.block_type === 2) {
      var i = 18;
      numbits = (num0 + num1 | 0) * 18 | 0;
      if (gr_infos.mixed_block_flag !== 0) {
        i = 8;
        while (i !== 0) {
          scf[tmp$ = scfPos, scfPos = tmp$ + 1 | 0, tmp$] = this.common_0.getbits_fast_mwy59t$(mp, num0);
          i = i - 1 | 0;
        }
        i = 9;
        numbits = numbits - num0 | 0;
      }
      while (i !== 0) {
        scf[tmp$_0 = scfPos, scfPos = tmp$_0 + 1 | 0, tmp$_0] = this.common_0.getbits_fast_mwy59t$(mp, num0);
        i = i - 1 | 0;
      }
      i = 18;
      while (i !== 0) {
        scf[tmp$_1 = scfPos, scfPos = tmp$_1 + 1 | 0, tmp$_1] = this.common_0.getbits_fast_mwy59t$(mp, num1);
        i = i - 1 | 0;
      }
      scf[tmp$_2 = scfPos, scfPos = tmp$_2 + 1 | 0, tmp$_2] = 0;
      scf[tmp$_3 = scfPos, scfPos = tmp$_3 + 1 | 0, tmp$_3] = 0;
      scf[tmp$_4 = scfPos, scfPos = tmp$_4 + 1 | 0, tmp$_4] = 0;
    }
     else {
      var i_0;
      var scfsi = gr_infos.scfsi;
      if (scfsi < 0) {
        i_0 = 11;
        while (i_0 !== 0) {
          scf[tmp$_5 = scfPos, scfPos = tmp$_5 + 1 | 0, tmp$_5] = this.common_0.getbits_fast_mwy59t$(mp, num0);
          i_0 = i_0 - 1 | 0;
        }
        i_0 = 10;
        while (i_0 !== 0) {
          scf[tmp$_6 = scfPos, scfPos = tmp$_6 + 1 | 0, tmp$_6] = this.common_0.getbits_fast_mwy59t$(mp, num1);
          i_0 = i_0 - 1 | 0;
        }
        numbits = ((num0 + num1 | 0) * 10 | 0) + num0 | 0;
      }
       else {
        numbits = 0;
        if (0 === (scfsi & 8)) {
          i_0 = 6;
          while (i_0 !== 0) {
            scf[tmp$_7 = scfPos, scfPos = tmp$_7 + 1 | 0, tmp$_7] = this.common_0.getbits_fast_mwy59t$(mp, num0);
            i_0 = i_0 - 1 | 0;
          }
          numbits = numbits + (num0 * 6 | 0) | 0;
        }
         else {
          scfPos = scfPos + 6 | 0;
        }
        if (0 === (scfsi & 4)) {
          i_0 = 5;
          while (i_0 !== 0) {
            scf[tmp$_8 = scfPos, scfPos = tmp$_8 + 1 | 0, tmp$_8] = this.common_0.getbits_fast_mwy59t$(mp, num0);
            i_0 = i_0 - 1 | 0;
          }
          numbits = numbits + (num0 * 5 | 0) | 0;
        }
         else {
          scfPos = scfPos + 5 | 0;
        }
        if (0 === (scfsi & 2)) {
          i_0 = 5;
          while (i_0 !== 0) {
            scf[tmp$_9 = scfPos, scfPos = tmp$_9 + 1 | 0, tmp$_9] = this.common_0.getbits_fast_mwy59t$(mp, num1);
            i_0 = i_0 - 1 | 0;
          }
          numbits = numbits + (num1 * 5 | 0) | 0;
        }
         else {
          scfPos = scfPos + 5 | 0;
        }
        if (0 === (scfsi & 1)) {
          i_0 = 5;
          while (i_0 !== 0) {
            scf[tmp$_10 = scfPos, scfPos = tmp$_10 + 1 | 0, tmp$_10] = this.common_0.getbits_fast_mwy59t$(mp, num1);
            i_0 = i_0 - 1 | 0;
          }
          numbits = numbits + (num1 * 5 | 0) | 0;
        }
         else {
          scfPos = scfPos + 5 | 0;
        }
      }
      scf[tmp$_11 = scfPos, scfPos = tmp$_11 + 1 | 0, tmp$_11] = 0;
    }
    return numbits;
  };
  Layer3.prototype.III_get_scale_factors_2_0 = function (mp, scf, gr_infos, i_stereo) {
    var tmp$, tmp$_0;
    var scfPos = 0;
    var pnt;
    var j;
    var slen;
    var numbits = 0;
    if (i_stereo !== 0) {
      slen = this.i_slen2_0[gr_infos.scalefac_compress >> 1];
    }
     else {
      slen = this.n_slen2_0[gr_infos.scalefac_compress];
    }
    gr_infos.preflag = slen >> 15 & 1;
    var n = 0;
    if (gr_infos.block_type === 2) {
      n = n + 1 | 0;
      if (gr_infos.mixed_block_flag !== 0) {
        n = n + 1 | 0;
      }
    }
    pnt = Layer3$Companion_getInstance().stab_0[n][slen >> 12 & 7];
    var i = 0;
    while (i < 4) {
      var num = slen & 7;
      slen = slen >> 3;
      if (num !== 0) {
        j = 0;
        while (j < pnt[i]) {
          scf[tmp$ = scfPos, scfPos = tmp$ + 1 | 0, tmp$] = this.common_0.getbits_fast_mwy59t$(mp, num);
          j = j + 1 | 0;
        }
        numbits = numbits + Kotlin.imul(pnt[i], num) | 0;
      }
       else {
        j = 0;
        while (j < pnt[i]) {
          scf[tmp$_0 = scfPos, scfPos = tmp$_0 + 1 | 0, tmp$_0] = 0;
          j = j + 1 | 0;
        }
      }
      i = i + 1 | 0;
    }
    n = (n << 1) + 1 | 0;
    fill_0(scf, 0, scfPos, scfPos + n | 0);
    return numbits;
  };
  Layer3.prototype.III_dequantize_sample_0 = function (mp, xr, scf, gr_infos, sfreq, part2bits) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7, tmp$_8, tmp$_9, tmp$_10, tmp$_11, tmp$_12, tmp$_13, tmp$_14, tmp$_15, tmp$_16, tmp$_17, tmp$_18, tmp$_19, tmp$_20, tmp$_21, tmp$_22, tmp$_23, tmp$_24, tmp$_25, tmp$_26, tmp$_27, tmp$_28, tmp$_29, tmp$_30, tmp$_31, tmp$_32, tmp$_33, tmp$_34, tmp$_35, tmp$_36;
    var scfPos = 0;
    var shift = 1 + gr_infos.scalefac_scale | 0;
    var xrpnt = {v: xr};
    var xrpntPos = {v: 0};
    var l = new Int32Array(3);
    var l3 = {v: 0};
    var part2remain = gr_infos.part2_3_length - part2bits | 0;
    var me;
    var tmp$_37, tmp$_38;
    var i = Kotlin.imul(MPG123_getInstance().SBLIMIT, MPG123_getInstance().SSLIMIT) - xrpntPos.v >> 1;
    while (i > 0) {
      xrpnt.v[tmp$_37 = xrpntPos.v, xrpntPos.v = tmp$_37 + 1 | 0, tmp$_37] = 0.0;
      xrpnt.v[tmp$_38 = xrpntPos.v, xrpntPos.v = tmp$_38 + 1 | 0, tmp$_38] = 0.0;
      i = i - 1 | 0;
    }
    xrpnt.v = xr;
    xrpntPos.v = 0;
    var bv = gr_infos.big_values;
    var region1 = gr_infos.region1start;
    var region2 = gr_infos.region2start;
    l3.v = (576 >> 1) - bv >> 1;
    if (bv <= region1) {
      l[0] = bv;
      l[1] = 0;
      l[2] = 0;
    }
     else {
      l[0] = region1;
      if (bv <= region2) {
        l[1] = bv - l[0] | 0;
        l[2] = 0;
      }
       else {
        l[1] = region2 - l[0] | 0;
        l[2] = bv - region2 | 0;
      }
    }
    for (var i_0 = 0; i_0 < 3; i_0++) {
      if (l[i_0] < 0) {
        lang.Console.error_61zpoe$('hip: Bogus region length (' + l[i_0] + ')');
        l[i_0] = 0;
      }
    }
    if (gr_infos.block_type === 2) {
      var i_1;
      var max = new Int32Array(4);
      var step = 0;
      var lwin = 0;
      var cb = 0;
      var v = 0.0;
      var m;
      var mc;
      var mPos = 0;
      if (gr_infos.mixed_block_flag !== 0) {
        max[0] = 2;
        max[1] = 2;
        max[2] = 2;
        max[3] = -1;
        m = this.map_0[sfreq][0];
        mPos = 0;
        me = this.mapend_0[sfreq][0];
      }
       else {
        max[0] = -1;
        max[1] = -1;
        max[2] = -1;
        max[3] = -1;
        m = this.map_0[sfreq][1];
        mPos = 0;
        me = this.mapend_0[sfreq][1];
      }
      mc = 0;
      i_1 = 0;
      while (i_1 < 2) {
        var lp = l[i_1];
        var h = Huffman_getInstance().ht;
        var hPos = gr_infos.table_select[i_1];
        while (lp !== 0) {
          var x = 0;
          var y = 0;
          if (0 === mc) {
            mc = m[tmp$ = mPos, mPos = tmp$ + 1 | 0, tmp$];
            xrpnt.v = xr;
            xrpntPos.v = m[tmp$_0 = mPos, mPos = tmp$_0 + 1 | 0, tmp$_0];
            lwin = m[tmp$_1 = mPos, mPos = tmp$_1 + 1 | 0, tmp$_1];
            cb = m[tmp$_2 = mPos, mPos = tmp$_2 + 1 | 0, tmp$_2];
            if (lwin === 3) {
              v = gr_infos.pow2gain[gr_infos.pow2gainPos + (scf[tmp$_3 = scfPos, scfPos = tmp$_3 + 1 | 0, tmp$_3] << shift) | 0];
              step = 1;
            }
             else {
              v = gr_infos.full_gain[lwin][gr_infos.full_gainPos[lwin] + (scf[tmp$_4 = scfPos, scfPos = tmp$_4 + 1 | 0, tmp$_4] << shift) | 0];
              step = 3;
            }
          }
          var val2 = h[hPos].table;
          var valPos = 0;
          while (true) {
            y = val2[tmp$_5 = valPos, valPos = tmp$_5 + 1 | 0, tmp$_5];
            if (y >= 0)
              break;
            if (this.get1bit_0(mp) !== 0)
              valPos = valPos - y | 0;
            part2remain = part2remain - 1 | 0;
          }
          x = y >> 4;
          y = y & 15;
          if (x === 15) {
            max[lwin] = cb;
            part2remain = part2remain - (h[hPos].linbits + 1) | 0;
            x = x + this.common_0.getbits_mwy59t$(mp, h[hPos].linbits) | 0;
            xrpnt.v[xrpntPos.v] = this.get1bit_0(mp) !== 0 ? -this.ispow_0[x] * v : this.ispow_0[x] * v;
          }
           else if (x !== 0) {
            max[lwin] = cb;
            xrpnt.v[xrpntPos.v] = this.get1bit_0(mp) !== 0 ? -this.ispow_0[x] * v : this.ispow_0[x] * v;
            part2remain = part2remain - 1 | 0;
          }
           else
            xrpnt.v[xrpntPos.v] = 0.0;
          xrpntPos.v = xrpntPos.v + step | 0;
          if (y === 15) {
            max[lwin] = cb;
            part2remain = part2remain - (h[hPos].linbits + 1) | 0;
            y = y + this.common_0.getbits_mwy59t$(mp, h[hPos].linbits) | 0;
            xrpnt.v[xrpntPos.v] = this.get1bit_0(mp) !== 0 ? -this.ispow_0[y] * v : this.ispow_0[y] * v;
          }
           else if (y !== 0) {
            max[lwin] = cb;
            xrpnt.v[xrpntPos.v] = this.get1bit_0(mp) !== 0 ? -this.ispow_0[y] * v : this.ispow_0[y] * v;
            part2remain = part2remain - 1 | 0;
          }
           else
            xrpnt.v[xrpntPos.v] = 0.0;
          xrpntPos.v = xrpntPos.v + step | 0;
          lp = lp - 1 | 0;
          mc = mc - 1 | 0;
        }
        i_1 = i_1 + 1 | 0;
      }
      while (l3.v !== 0 && part2remain > 0) {
        var h_0 = Huffman_getInstance().htc;
        var hPos_0 = gr_infos.count1table_select;
        var val2_0 = h_0[hPos_0].table;
        var valPos_0 = 0;
        var a;
        while (true) {
          a = val2_0[tmp$_6 = valPos_0, valPos_0 = tmp$_6 + 1 | 0, tmp$_6];
          if (a >= 0)
            break;
          part2remain = part2remain - 1 | 0;
          if (part2remain < 0) {
            part2remain = part2remain + 1 | 0;
            a = 0;
            break;
          }
          if (this.get1bit_0(mp) !== 0)
            valPos_0 = valPos_0 - a | 0;
        }
        i_1 = 0;
        while (i_1 < 4) {
          if (0 === (i_1 & 1)) {
            if (0 === mc) {
              mc = m[tmp$_7 = mPos, mPos = tmp$_7 + 1 | 0, tmp$_7];
              xrpnt.v = xr;
              xrpntPos.v = m[tmp$_8 = mPos, mPos = tmp$_8 + 1 | 0, tmp$_8];
              lwin = m[tmp$_9 = mPos, mPos = tmp$_9 + 1 | 0, tmp$_9];
              cb = m[tmp$_10 = mPos, mPos = tmp$_10 + 1 | 0, tmp$_10];
              if (lwin === 3) {
                v = gr_infos.pow2gain[gr_infos.pow2gainPos + (scf[tmp$_11 = scfPos, scfPos = tmp$_11 + 1 | 0, tmp$_11] << shift) | 0];
                step = 1;
              }
               else {
                v = gr_infos.full_gain[lwin][gr_infos.full_gainPos[lwin] + (scf[tmp$_12 = scfPos, scfPos = tmp$_12 + 1 | 0, tmp$_12] << shift) | 0];
                step = 3;
              }
            }
            mc = mc - 1 | 0;
          }
          if ((a & 8 >> i_1) !== 0) {
            max[lwin] = cb;
            part2remain = part2remain - 1 | 0;
            if (part2remain < 0) {
              part2remain = part2remain + 1 | 0;
              break;
            }
            xrpnt.v[xrpntPos.v] = this.get1bit_0(mp) !== 0 ? -v : v;
          }
           else {
            xrpnt.v[xrpntPos.v] = 0.0;
          }
          xrpntPos.v = xrpntPos.v + step | 0;
          i_1 = i_1 + 1 | 0;
        }
        l3.v = l3.v - 1 | 0;
      }
      while (mPos < me) {
        if (0 === mc) {
          mc = m[tmp$_13 = mPos, mPos = tmp$_13 + 1 | 0, tmp$_13];
          xrpnt.v = xr;
          xrpntPos.v = m[tmp$_14 = mPos, mPos = tmp$_14 + 1 | 0, tmp$_14];
          step = m[tmp$_15 = mPos, mPos = tmp$_15 + 1 | 0, tmp$_15] === 3 ? 1 : 3;
          mPos = mPos + 1 | 0;
        }
        mc = mc - 1 | 0;
        xrpnt.v[xrpntPos.v] = 0.0;
        xrpntPos.v = xrpntPos.v + step | 0;
        xrpnt.v[xrpntPos.v] = 0.0;
        xrpntPos.v = xrpntPos.v + step | 0;
      }
      gr_infos.maxband[0] = max[0] + 1 | 0;
      gr_infos.maxband[1] = max[1] + 1 | 0;
      gr_infos.maxband[2] = max[2] + 1 | 0;
      gr_infos.maxbandl = max[3] + 1 | 0;
      var rmax = max[0] > max[1] ? max[0] : max[1];
      rmax = (rmax > max[2] ? rmax : max[2]) + 1 | 0;
      gr_infos.maxb = rmax !== 0 ? this.shortLimit_0[sfreq][rmax] : this.longLimit_0[sfreq][max[3] + 1 | 0];
    }
     else {
      var pretab = gr_infos.preflag !== 0 ? Layer3$Companion_getInstance().pretab1_0 : Layer3$Companion_getInstance().pretab2_0;
      var pretabPos = 0;
      var i_2;
      var max_0 = -1;
      var cb_0 = 0;
      var m_0 = this.map_0[sfreq][2];
      var mPos_0 = 0;
      var v_0 = 0.0;
      var mc_0 = 0;
      i_2 = 0;
      while (i_2 < 3) {
        var lp_0 = l[i_2];
        var h_1 = Huffman_getInstance().ht;
        var hPos_1 = gr_infos.table_select[i_2];
        while (lp_0 !== 0) {
          var x_0 = 0;
          var y_0 = 0;
          if (0 === mc_0) {
            mc_0 = m_0[tmp$_16 = mPos_0, mPos_0 = tmp$_16 + 1 | 0, tmp$_16];
            v_0 = gr_infos.pow2gain[gr_infos.pow2gainPos + (scf[tmp$_17 = scfPos, scfPos = tmp$_17 + 1 | 0, tmp$_17] + pretab[tmp$_18 = pretabPos, pretabPos = tmp$_18 + 1 | 0, tmp$_18] << shift) | 0];
            cb_0 = m_0[tmp$_19 = mPos_0, mPos_0 = tmp$_19 + 1 | 0, tmp$_19];
          }
          var val2_1 = h_1[hPos_1].table;
          var valPos_1 = 0;
          while (true) {
            y_0 = val2_1[tmp$_20 = valPos_1, valPos_1 = tmp$_20 + 1 | 0, tmp$_20];
            if (y_0 >= 0)
              break;
            if (this.get1bit_0(mp) !== 0)
              valPos_1 = valPos_1 - y_0 | 0;
            part2remain = part2remain - 1 | 0;
          }
          x_0 = y_0 >> 4;
          y_0 = y_0 & 15;
          if (x_0 === 15) {
            max_0 = cb_0;
            part2remain = part2remain - (h_1[hPos_1].linbits + 1) | 0;
            x_0 = x_0 + this.common_0.getbits_mwy59t$(mp, h_1[hPos_1].linbits) | 0;
            xrpnt.v[tmp$_21 = xrpntPos.v, xrpntPos.v = tmp$_21 + 1 | 0, tmp$_21] = this.get1bit_0(mp) !== 0 ? -this.ispow_0[x_0] * v_0 : this.ispow_0[x_0] * v_0;
          }
           else if (x_0 !== 0) {
            max_0 = cb_0;
            xrpnt.v[tmp$_22 = xrpntPos.v, xrpntPos.v = tmp$_22 + 1 | 0, tmp$_22] = this.get1bit_0(mp) !== 0 ? -this.ispow_0[x_0] * v_0 : this.ispow_0[x_0] * v_0;
            part2remain = part2remain - 1 | 0;
          }
           else {
            xrpnt.v[tmp$_23 = xrpntPos.v, xrpntPos.v = tmp$_23 + 1 | 0, tmp$_23] = 0.0;
          }
          if (y_0 === 15) {
            max_0 = cb_0;
            part2remain = part2remain - (h_1[hPos_1].linbits + 1) | 0;
            y_0 = y_0 + this.common_0.getbits_mwy59t$(mp, h_1[hPos_1].linbits) | 0;
            xrpnt.v[tmp$_24 = xrpntPos.v, xrpntPos.v = tmp$_24 + 1 | 0, tmp$_24] = this.get1bit_0(mp) !== 0 ? -this.ispow_0[y_0] * v_0 : this.ispow_0[y_0] * v_0;
          }
           else if (y_0 !== 0) {
            max_0 = cb_0;
            xrpnt.v[tmp$_25 = xrpntPos.v, xrpntPos.v = tmp$_25 + 1 | 0, tmp$_25] = this.get1bit_0(mp) !== 0 ? -this.ispow_0[y_0] * v_0 : this.ispow_0[y_0] * v_0;
            part2remain = part2remain - 1 | 0;
          }
           else {
            xrpnt.v[tmp$_26 = xrpntPos.v, xrpntPos.v = tmp$_26 + 1 | 0, tmp$_26] = 0.0;
          }
          lp_0 = lp_0 - 1 | 0;
          mc_0 = mc_0 - 1 | 0;
        }
        i_2 = i_2 + 1 | 0;
      }
      while (l3.v !== 0 && part2remain > 0) {
        var h_2 = Huffman_getInstance().htc;
        var hPos_2 = gr_infos.count1table_select;
        var val2_2 = h_2[hPos_2].table;
        var valPos_2 = 0;
        var a_0;
        while (true) {
          a_0 = val2_2[tmp$_27 = valPos_2, valPos_2 = tmp$_27 + 1 | 0, tmp$_27];
          if (a_0 >= 0)
            break;
          part2remain = part2remain - 1 | 0;
          if (part2remain < 0) {
            part2remain = part2remain + 1 | 0;
            a_0 = 0;
            break;
          }
          if (this.get1bit_0(mp) !== 0)
            valPos_2 = valPos_2 - a_0 | 0;
        }
        i_2 = 0;
        while (i_2 < 4) {
          if (0 === (i_2 & 1)) {
            if (0 === mc_0) {
              mc_0 = m_0[tmp$_28 = mPos_0, mPos_0 = tmp$_28 + 1 | 0, tmp$_28];
              cb_0 = m_0[tmp$_29 = mPos_0, mPos_0 = tmp$_29 + 1 | 0, tmp$_29];
              v_0 = gr_infos.pow2gain[gr_infos.pow2gainPos + (scf[tmp$_30 = scfPos, scfPos = tmp$_30 + 1 | 0, tmp$_30] + pretab[tmp$_31 = pretabPos, pretabPos = tmp$_31 + 1 | 0, tmp$_31] << shift) | 0];
            }
            mc_0 = mc_0 - 1 | 0;
          }
          if ((a_0 & 8 >> i_2) !== 0) {
            max_0 = cb_0;
            part2remain = part2remain - 1 | 0;
            if (part2remain < 0) {
              part2remain = part2remain + 1 | 0;
              break;
            }
            if (this.get1bit_0(mp) !== 0) {
              xrpnt.v[tmp$_32 = xrpntPos.v, xrpntPos.v = tmp$_32 + 1 | 0, tmp$_32] = -v_0;
            }
             else {
              xrpnt.v[tmp$_33 = xrpntPos.v, xrpntPos.v = tmp$_33 + 1 | 0, tmp$_33] = v_0;
            }
          }
           else {
            xrpnt.v[tmp$_34 = xrpntPos.v, xrpntPos.v = tmp$_34 + 1 | 0, tmp$_34] = 0.0;
          }
          i_2 = i_2 + 1 | 0;
        }
        l3.v = l3.v - 1 | 0;
      }
      i_2 = Kotlin.imul(MPG123_getInstance().SBLIMIT, MPG123_getInstance().SSLIMIT) - xrpntPos.v >> 1;
      while (i_2 !== 0) {
        xrpnt.v[tmp$_35 = xrpntPos.v, xrpntPos.v = tmp$_35 + 1 | 0, tmp$_35] = 0.0;
        xrpnt.v[tmp$_36 = xrpntPos.v, xrpntPos.v = tmp$_36 + 1 | 0, tmp$_36] = 0.0;
        i_2 = i_2 - 1 | 0;
      }
      gr_infos.maxbandl = max_0 + 1 | 0;
      gr_infos.maxb = this.longLimit_0[sfreq][gr_infos.maxbandl];
    }
    while (part2remain > 16) {
      this.common_0.getbits_mwy59t$(mp, 16);
      part2remain = part2remain - 16 | 0;
    }
    if (part2remain > 0)
      this.common_0.getbits_mwy59t$(mp, part2remain);
    else if (part2remain < 0) {
      lang.Console.error_61zpoe$("hip: Can't rewind stream by " + -part2remain + ' bits!');
      return 1;
    }
    return 0;
  };
  Layer3.prototype.III_i_stereo_0 = function (xr_buf, scalefac, gr_infos, sfreq, ms_stereo, lsf) {
    var xr = xr_buf;
    var bi = Layer3$Companion_getInstance().bandInfo_0[sfreq];
    var tabl1;
    var tabl2;
    if (lsf !== 0) {
      var p = gr_infos.scalefac_compress & 1;
      tabl1 = ms_stereo !== 0 ? this.pow1_2_0[p] : this.pow1_1_0[p];
      tabl2 = ms_stereo !== 0 ? this.pow2_2_0[p] : this.pow2_1_0[p];
    }
     else {
      tabl1 = ms_stereo !== 0 ? this.tan1_2_0 : this.tan1_1_0;
      tabl2 = ms_stereo !== 0 ? this.tan2_2_0 : this.tan2_1_0;
    }
    if (gr_infos.block_type === 2) {
      var do_l = gr_infos.mixed_block_flag !== 0 ? 1 : 0;
      var lwin = 0;
      while (lwin < 3) {
        var is_p;
        var sb;
        var idx;
        var sfb = gr_infos.maxband[lwin];
        if (sfb > 3)
          do_l = 0;
        while (sfb < 12) {
          is_p = scalefac[(sfb * 3 | 0) + lwin - gr_infos.mixed_block_flag | 0];
          if (is_p !== 7) {
            sb = bi.shortDiff_8be2vx$[sfb];
            idx = bi.shortIdx_8be2vx$[sfb] + lwin;
            var t1 = tabl1[is_p];
            var t2 = tabl2[is_p];
            while (sb > 0) {
              var v = xr[0][idx];
              xr[0][idx] = v * t1;
              xr[1][idx] = v * t2;
              sb = sb - 1 | 0;
              idx = idx + 3 | 0;
            }
          }
          sfb = sfb + 1 | 0;
        }
        is_p = scalefac[(11 * 3 | 0) + lwin - gr_infos.mixed_block_flag | 0];
        sb = bi.shortDiff_8be2vx$[12];
        idx = bi.shortIdx_8be2vx$[12] + lwin;
        if (is_p !== 7) {
          var t1_0;
          var t2_0;
          t1_0 = tabl1[is_p];
          t2_0 = tabl2[is_p];
          while (sb > 0) {
            var v_0 = xr[0][idx];
            xr[0][idx] = v_0 * t1_0;
            xr[1][idx] = v_0 * t2_0;
            sb = sb - 1 | 0;
            idx = idx + 3 | 0;
          }
        }
        lwin = lwin + 1 | 0;
      }
      if (do_l !== 0) {
        var sfb_0 = gr_infos.maxbandl;
        var idx_0 = bi.longIdx_8be2vx$[sfb_0];
        while (sfb_0 < 8) {
          var sb_0 = bi.longDiff_8be2vx$[sfb_0];
          var is_p_0 = scalefac[sfb_0];
          if (is_p_0 !== 7) {
            var t1_1;
            var t2_1;
            t1_1 = tabl1[is_p_0];
            t2_1 = tabl2[is_p_0];
            while (sb_0 > 0) {
              var v_1 = xr[0][idx_0];
              xr[0][idx_0] = v_1 * t1_1;
              xr[1][idx_0] = v_1 * t2_1;
              sb_0 = sb_0 - 1 | 0;
              idx_0 = idx_0 + 1 | 0;
            }
          }
           else
            idx_0 = idx_0 + sb_0 | 0;
          sfb_0 = sfb_0 + 1 | 0;
        }
      }
    }
     else {
      var sfb_1 = gr_infos.maxbandl;
      var is_p_1;
      var idx_1 = bi.longIdx_8be2vx$[sfb_1];
      while (sfb_1 < 21) {
        var sb_1 = bi.longDiff_8be2vx$[sfb_1];
        is_p_1 = scalefac[sfb_1];
        if (is_p_1 !== 7) {
          var t1_2 = tabl1[is_p_1];
          var t2_2 = tabl2[is_p_1];
          while (sb_1 > 0) {
            var v_2 = xr[0][idx_1];
            xr[0][idx_1] = v_2 * t1_2;
            xr[1][idx_1] = v_2 * t2_2;
            sb_1 = sb_1 - 1 | 0;
            idx_1 = idx_1 + 1 | 0;
          }
        }
         else {
          idx_1 = idx_1 + sb_1 | 0;
        }
        sfb_1 = sfb_1 + 1 | 0;
      }
      is_p_1 = scalefac[20];
      if (is_p_1 !== 7) {
        var t1_3 = tabl1[is_p_1];
        var t2_3 = tabl2[is_p_1];
        var sb_2 = bi.longDiff_8be2vx$[21];
        while (sb_2 > 0) {
          var v_3 = xr[0][idx_1];
          xr[0][idx_1] = v_3 * t1_3;
          xr[1][idx_1] = v_3 * t2_3;
          sb_2 = sb_2 - 1 | 0;
          idx_1 = idx_1 + 1 | 0;
        }
      }
    }
  };
  Layer3.prototype.III_antialias_0 = function (xr, gr_infos) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var xr1 = xr;
    var xr1Pos = MPG123_getInstance().SSLIMIT;
    if (gr_infos.block_type === 2) {
      if (0 === gr_infos.mixed_block_flag)
        return;
      tmp$ = 1;
    }
     else {
      tmp$ = gr_infos.maxb - 1 | 0;
    }
    var sb = tmp$;
    while (sb !== 0) {
      var cs = this.aa_cs_0;
      var ca = this.aa_ca_0;
      var caPos = 0;
      var csPos = 0;
      var xr2 = xr1;
      var xr2Pos = xr1Pos;
      var ss = 7;
      while (ss >= 0) {
        var bu = xr2[xr2Pos = xr2Pos - 1 | 0, xr2Pos];
        var bd = xr1[xr1Pos];
        xr2[xr2Pos] = bu * cs[csPos] - bd * ca[caPos];
        xr1[tmp$_2 = xr1Pos, xr1Pos = tmp$_2 + 1 | 0, tmp$_2] = bd * cs[tmp$_0 = csPos, csPos = tmp$_0 + 1 | 0, tmp$_0] + bu * ca[tmp$_1 = caPos, caPos = tmp$_1 + 1 | 0, tmp$_1];
        ss = ss - 1 | 0;
      }
      sb = sb - 1 | 0;
      xr1Pos = xr1Pos + 10 | 0;
    }
  };
  Layer3.prototype.dct36_0 = function (inbuf, inbufPos, o1, o1Pos, o2, o2Pos, wintab, tsbuf, tsPos) {
    var inn = inbuf;
    var inPos = inbufPos;
    inn[inPos + 17 | 0] = inn[inPos + 17 | 0] + inn[inPos + 16 | 0];
    inn[inPos + 16 | 0] = inn[inPos + 16 | 0] + inn[inPos + 15 | 0];
    inn[inPos + 15 | 0] = inn[inPos + 15 | 0] + inn[inPos + 14 | 0];
    inn[inPos + 14 | 0] = inn[inPos + 14 | 0] + inn[inPos + 13 | 0];
    inn[inPos + 13 | 0] = inn[inPos + 13 | 0] + inn[inPos + 12 | 0];
    inn[inPos + 12 | 0] = inn[inPos + 12 | 0] + inn[inPos + 11 | 0];
    inn[inPos + 11 | 0] = inn[inPos + 11 | 0] + inn[inPos + 10 | 0];
    inn[inPos + 10 | 0] = inn[inPos + 10 | 0] + inn[inPos + 9 | 0];
    inn[inPos + 9 | 0] = inn[inPos + 9 | 0] + inn[inPos + 8 | 0];
    inn[inPos + 8 | 0] = inn[inPos + 8 | 0] + inn[inPos + 7 | 0];
    inn[inPos + 7 | 0] = inn[inPos + 7 | 0] + inn[inPos + 6 | 0];
    inn[inPos + 6 | 0] = inn[inPos + 6 | 0] + inn[inPos + 5 | 0];
    inn[inPos + 5 | 0] = inn[inPos + 5 | 0] + inn[inPos + 4 | 0];
    inn[inPos + 4 | 0] = inn[inPos + 4 | 0] + inn[inPos + 3 | 0];
    inn[inPos + 3 | 0] = inn[inPos + 3 | 0] + inn[inPos + 2 | 0];
    inn[inPos + 2 | 0] = inn[inPos + 2 | 0] + inn[inPos + 1 | 0];
    inn[inPos + 1 | 0] = inn[inPos + 1 | 0] + inn[inPos + 0 | 0];
    inn[inPos + 17 | 0] = inn[inPos + 17 | 0] + inn[inPos + 15 | 0];
    inn[inPos + 15 | 0] = inn[inPos + 15 | 0] + inn[inPos + 13 | 0];
    inn[inPos + 13 | 0] = inn[inPos + 13 | 0] + inn[inPos + 11 | 0];
    inn[inPos + 11 | 0] = inn[inPos + 11 | 0] + inn[inPos + 9 | 0];
    inn[inPos + 9 | 0] = inn[inPos + 9 | 0] + inn[inPos + 7 | 0];
    inn[inPos + 7 | 0] = inn[inPos + 7 | 0] + inn[inPos + 5 | 0];
    inn[inPos + 5 | 0] = inn[inPos + 5 | 0] + inn[inPos + 3 | 0];
    inn[inPos + 3 | 0] = inn[inPos + 3 | 0] + inn[inPos + 1 | 0];
    var c = this.COS9_0;
    var out2 = o2;
    var out2Pos = o2Pos;
    var w = wintab;
    var out1 = o1;
    var out1Pos = o1Pos;
    var ts = tsbuf;
    var ta33 = inn[inPos + (2 * 3 | 0) + 0 | 0] * c[3];
    var ta66 = inn[inPos + (2 * 6 | 0) + 0 | 0] * c[6];
    var tb33 = inn[inPos + (2 * 3 | 0) + 1 | 0] * c[3];
    var tb66 = inn[inPos + (2 * 6 | 0) + 1 | 0] * c[6];
    var tmp1a = inn[inPos + (2 * 1 | 0) + 0 | 0] * c[1] + ta33 + inn[inPos + (2 * 5 | 0) + 0 | 0] * c[5] + inn[inPos + (2 * 7 | 0) + 0 | 0] * c[7];
    var tmp1b = inn[inPos + (2 * 1 | 0) + 1 | 0] * c[1] + tb33 + inn[inPos + (2 * 5 | 0) + 1 | 0] * c[5] + inn[inPos + (2 * 7 | 0) + 1 | 0] * c[7];
    var tmp2a = inn[inPos + (2 * 0 | 0) + 0 | 0] + inn[inPos + (2 * 2 | 0) + 0 | 0] * c[2] + inn[inPos + (2 * 4 | 0) + 0 | 0] * c[4] + ta66 + inn[inPos + (2 * 8 | 0) + 0 | 0] * c[8];
    var tmp2b = inn[inPos + (2 * 0 | 0) + 1 | 0] + inn[inPos + (2 * 2 | 0) + 1 | 0] * c[2] + inn[inPos + (2 * 4 | 0) + 1 | 0] * c[4] + tb66 + inn[inPos + (2 * 8 | 0) + 1 | 0] * c[8];
    var sum0 = tmp1a + tmp2a;
    var sum1 = (tmp1b + tmp2b) * this.tfcos36_0[0];
    var tmp = sum0 + sum1;
    out2[out2Pos + 9 + 0 | 0] = tmp * w[27 + 0 | 0];
    out2[out2Pos + 8 - 0 | 0] = tmp * w[26 - 0 | 0];
    sum0 -= sum1;
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 8 - 0 | 0) | 0] = out1[out1Pos + 8 - 0 | 0] + sum0 * w[8 - 0 | 0];
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 9 + 0 | 0) | 0] = out1[out1Pos + 9 + 0 | 0] + sum0 * w[9 + 0 | 0];
    var sum0_0 = tmp2a - tmp1a;
    var sum1_0 = (tmp2b - tmp1b) * this.tfcos36_0[8];
    var tmp_0 = sum0_0 + sum1_0;
    out2[out2Pos + 9 + 8 | 0] = tmp_0 * w[27 + 8 | 0];
    out2[out2Pos + 8 - 8 | 0] = tmp_0 * w[26 - 8 | 0];
    sum0_0 -= sum1_0;
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 8 - 8 | 0) | 0] = out1[out1Pos + 8 - 8 | 0] + sum0_0 * w[8 - 8 | 0];
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 9 + 8 | 0) | 0] = out1[out1Pos + 9 + 8 | 0] + sum0_0 * w[9 + 8 | 0];
    var tmp1a_0 = (inn[inPos + (2 * 1 | 0) + 0 | 0] - inn[inPos + (2 * 5 | 0) + 0 | 0] - inn[inPos + (2 * 7 | 0) + 0 | 0]) * c[3];
    var tmp1b_0 = (inn[inPos + (2 * 1 | 0) + 1 | 0] - inn[inPos + (2 * 5 | 0) + 1 | 0] - inn[inPos + (2 * 7 | 0) + 1 | 0]) * c[3];
    var tmp2a_0 = (inn[inPos + (2 * 2 | 0) + 0 | 0] - inn[inPos + (2 * 4 | 0) + 0 | 0] - inn[inPos + (2 * 8 | 0) + 0 | 0]) * c[6] - inn[inPos + (2 * 6 | 0) + 0 | 0] + inn[inPos + (2 * 0 | 0) + 0 | 0];
    var tmp2b_0 = (inn[inPos + (2 * 2 | 0) + 1 | 0] - inn[inPos + (2 * 4 | 0) + 1 | 0] - inn[inPos + (2 * 8 | 0) + 1 | 0]) * c[6] - inn[inPos + (2 * 6 | 0) + 1 | 0] + inn[inPos + (2 * 0 | 0) + 1 | 0];
    var sum0_1 = tmp1a_0 + tmp2a_0;
    var sum1_1 = (tmp1b_0 + tmp2b_0) * this.tfcos36_0[1];
    var tmp_1 = sum0_1 + sum1_1;
    out2[out2Pos + 9 + 1 | 0] = tmp_1 * w[27 + 1 | 0];
    out2[out2Pos + 8 - 1 | 0] = tmp_1 * w[26 - 1 | 0];
    sum0_1 -= sum1_1;
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 8 - 1 | 0) | 0] = out1[out1Pos + 8 - 1 | 0] + sum0_1 * w[8 - 1 | 0];
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 9 + 1 | 0) | 0] = out1[out1Pos + 9 + 1 | 0] + sum0_1 * w[9 + 1 | 0];
    var sum0_2;
    var sum1_2;
    sum0_2 = tmp2a_0 - tmp1a_0;
    sum1_2 = (tmp2b_0 - tmp1b_0) * this.tfcos36_0[7];
    var tmp_2 = sum0_2 + sum1_2;
    out2[out2Pos + 9 + 7 | 0] = tmp_2 * w[27 + 7 | 0];
    out2[out2Pos + 8 - 7 | 0] = tmp_2 * w[26 - 7 | 0];
    sum0_2 -= sum1_2;
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 8 - 7 | 0) | 0] = out1[out1Pos + 8 - 7 | 0] + sum0_2 * w[8 - 7 | 0];
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 9 + 7 | 0) | 0] = out1[out1Pos + 9 + 7 | 0] + sum0_2 * w[9 + 7 | 0];
    var tmp1a_1 = inn[inPos + (2 * 1 | 0) + 0 | 0] * c[5] - ta33 - inn[inPos + (2 * 5 | 0) + 0 | 0] * c[7] + inn[inPos + (2 * 7 | 0) + 0 | 0] * c[1];
    var tmp1b_1 = inn[inPos + (2 * 1 | 0) + 1 | 0] * c[5] - tb33 - inn[inPos + (2 * 5 | 0) + 1 | 0] * c[7] + inn[inPos + (2 * 7 | 0) + 1 | 0] * c[1];
    var tmp2a_1 = inn[inPos + (2 * 0 | 0) + 0 | 0] - inn[inPos + (2 * 2 | 0) + 0 | 0] * c[8] - inn[inPos + (2 * 4 | 0) + 0 | 0] * c[2] + ta66 + inn[inPos + (2 * 8 | 0) + 0 | 0] * c[4];
    var tmp2b_1 = inn[inPos + (2 * 0 | 0) + 1 | 0] - inn[inPos + (2 * 2 | 0) + 1 | 0] * c[8] - inn[inPos + (2 * 4 | 0) + 1 | 0] * c[2] + tb66 + inn[inPos + (2 * 8 | 0) + 1 | 0] * c[4];
    var sum0_3 = tmp1a_1 + tmp2a_1;
    var sum1_3 = (tmp1b_1 + tmp2b_1) * this.tfcos36_0[2];
    var tmp_3 = sum0_3 + sum1_3;
    out2[out2Pos + 9 + 2 | 0] = tmp_3 * w[27 + 2 | 0];
    out2[out2Pos + 8 - 2 | 0] = tmp_3 * w[26 - 2 | 0];
    sum0_3 -= sum1_3;
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 8 - 2 | 0) | 0] = out1[out1Pos + 8 - 2 | 0] + sum0_3 * w[8 - 2 | 0];
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 9 + 2 | 0) | 0] = out1[out1Pos + 9 + 2 | 0] + sum0_3 * w[9 + 2 | 0];
    var sum0_4 = tmp2a_1 - tmp1a_1;
    var sum1_4 = (tmp2b_1 - tmp1b_1) * this.tfcos36_0[6];
    var tmp_4 = sum0_4 + sum1_4;
    out2[out2Pos + 9 + 6 | 0] = tmp_4 * w[27 + 6 | 0];
    out2[out2Pos + 8 - 6 | 0] = tmp_4 * w[26 - 6 | 0];
    sum0_4 -= sum1_4;
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 8 - 6 | 0) | 0] = out1[out1Pos + 8 - 6 | 0] + sum0_4 * w[8 - 6 | 0];
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 9 + 6 | 0) | 0] = out1[out1Pos + 9 + 6 | 0] + sum0_4 * w[9 + 6 | 0];
    var tmp1a_2 = inn[inPos + (2 * 1 | 0) + 0 | 0] * c[7] - ta33 + inn[inPos + (2 * 5 | 0) + 0 | 0] * c[1] - inn[inPos + (2 * 7 | 0) + 0 | 0] * c[5];
    var tmp1b_2 = inn[inPos + (2 * 1 | 0) + 1 | 0] * c[7] - tb33 + inn[inPos + (2 * 5 | 0) + 1 | 0] * c[1] - inn[inPos + (2 * 7 | 0) + 1 | 0] * c[5];
    var tmp2a_2 = inn[inPos + (2 * 0 | 0) + 0 | 0] - inn[inPos + (2 * 2 | 0) + 0 | 0] * c[4] + inn[inPos + (2 * 4 | 0) + 0 | 0] * c[8] + ta66 - inn[inPos + (2 * 8 | 0) + 0 | 0] * c[2];
    var tmp2b_2 = inn[inPos + (2 * 0 | 0) + 1 | 0] - inn[inPos + (2 * 2 | 0) + 1 | 0] * c[4] + inn[inPos + (2 * 4 | 0) + 1 | 0] * c[8] + tb66 - inn[inPos + (2 * 8 | 0) + 1 | 0] * c[2];
    var sum0_5 = tmp1a_2 + tmp2a_2;
    var sum1_5 = (tmp1b_2 + tmp2b_2) * this.tfcos36_0[3];
    var tmp_5 = sum0_5 + sum1_5;
    out2[out2Pos + 9 + 3 | 0] = tmp_5 * w[27 + 3 | 0];
    out2[out2Pos + 8 - 3 | 0] = tmp_5 * w[26 - 3 | 0];
    sum0_5 -= sum1_5;
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 8 - 3 | 0) | 0] = out1[out1Pos + 8 - 3 | 0] + sum0_5 * w[8 - 3 | 0];
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 9 + 3 | 0) | 0] = out1[out1Pos + 9 + 3 | 0] + sum0_5 * w[9 + 3 | 0];
    var sum0_6 = tmp2a_2 - tmp1a_2;
    var sum1_6 = (tmp2b_2 - tmp1b_2) * this.tfcos36_0[5];
    var tmp_6 = sum0_6 + sum1_6;
    out2[out2Pos + 9 + 5 | 0] = tmp_6 * w[27 + 5 | 0];
    out2[out2Pos + 8 - 5 | 0] = tmp_6 * w[26 - 5 | 0];
    sum0_6 -= sum1_6;
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 8 - 5 | 0) | 0] = out1[out1Pos + 8 - 5 | 0] + sum0_6 * w[8 - 5 | 0];
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 9 + 5 | 0) | 0] = out1[out1Pos + 9 + 5 | 0] + sum0_6 * w[9 + 5 | 0];
    var sum0_7 = {v: inn[inPos + (2 * 0 | 0) + 0 | 0] - inn[inPos + (2 * 2 | 0) + 0 | 0] + inn[inPos + (2 * 4 | 0) + 0 | 0] - inn[inPos + (2 * 6 | 0) + 0 | 0] + inn[inPos + (2 * 8 | 0) + 0 | 0]};
    var sum1_7 = (inn[inPos + (2 * 0 | 0) + 1 | 0] - inn[inPos + (2 * 2 | 0) + 1 | 0] + inn[inPos + (2 * 4 | 0) + 1 | 0] - inn[inPos + (2 * 6 | 0) + 1 | 0] + inn[inPos + (2 * 8 | 0) + 1 | 0]) * this.tfcos36_0[4];
    var tmp_7 = sum0_7.v + sum1_7;
    out2[out2Pos + 9 + 4 | 0] = tmp_7 * w[27 + 4 | 0];
    out2[out2Pos + 8 - 4 | 0] = tmp_7 * w[26 - 4 | 0];
    sum0_7.v -= sum1_7;
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 8 - 4 | 0) | 0] = out1[out1Pos + 8 - 4 | 0] + sum0_7.v * w[8 - 4 | 0];
    ts[tsPos + Kotlin.imul(MPG123_getInstance().SBLIMIT, 9 + 4 | 0) | 0] = out1[out1Pos + 9 + 4 | 0] + sum0_7.v * w[9 + 4 | 0];
  };
  Layer3.prototype.dct12_0 = function (inn, inbufPos, rawout1, rawout1Pos, rawout2, rawout2Pos, wi, ts, tsPos) {
    var inbufPos_0 = {v: inbufPos};
    var out1 = rawout1;
    var out1Pos = rawout1Pos;
    ts[tsPos + (MPG123_getInstance().SBLIMIT * 0 | 0) | 0] = out1[out1Pos + 0 | 0];
    ts[tsPos + (MPG123_getInstance().SBLIMIT * 1 | 0) | 0] = out1[out1Pos + 1 | 0];
    ts[tsPos + (MPG123_getInstance().SBLIMIT * 2 | 0) | 0] = out1[out1Pos + 2 | 0];
    ts[tsPos + (MPG123_getInstance().SBLIMIT * 3 | 0) | 0] = out1[out1Pos + 3 | 0];
    ts[tsPos + (MPG123_getInstance().SBLIMIT * 4 | 0) | 0] = out1[out1Pos + 4 | 0];
    ts[tsPos + (MPG123_getInstance().SBLIMIT * 5 | 0) | 0] = out1[out1Pos + 5 | 0];
    var in5 = inn[inbufPos_0.v + (5 * 3 | 0) | 0];
    var in4 = inn[inbufPos_0.v + (4 * 3 | 0) | 0];
    in5 += in4;
    var in3 = inn[inbufPos_0.v + (3 * 3 | 0) | 0];
    in4 += in3;
    var in2 = inn[inbufPos_0.v + (2 * 3 | 0) | 0];
    in3 += in2;
    var in1 = inn[inbufPos_0.v + (1 * 3 | 0) | 0];
    in2 += in1;
    var in0 = inn[inbufPos_0.v + (0 * 3 | 0) | 0];
    in1 += in0;
    in5 += in3;
    in3 += in1;
    in2 *= this.COS6_1_0;
    in3 *= this.COS6_1_0;
    var tmp0;
    var tmp1 = in0 - in4;
    var tmp2 = (in1 - in5) * this.tfcos12_0[1];
    tmp0 = tmp1 + tmp2;
    tmp1 -= tmp2;
    ts[tsPos + Kotlin.imul(17 - 1 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 17 - 1 | 0] + tmp0 * wi[11 - 1 | 0];
    ts[tsPos + Kotlin.imul(12 + 1 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 12 + 1 | 0] + tmp0 * wi[6 + 1 | 0];
    ts[tsPos + Kotlin.imul(6 + 1 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 6 + 1 | 0] + tmp1 * wi[1];
    ts[tsPos + Kotlin.imul(11 - 1 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 11 - 1 | 0] + tmp1 * wi[5 - 1 | 0];
    in0 += in4 * this.COS6_2_0;
    in4 = in0 + in2;
    in0 -= in2;
    in1 += in5 * this.COS6_2_0;
    in5 = (in1 + in3) * this.tfcos12_0[0];
    in1 = (in1 - in3) * this.tfcos12_0[2];
    in3 = in4 + in5;
    in4 -= in5;
    in2 = in0 + in1;
    in0 -= in1;
    ts[tsPos + Kotlin.imul(17 - 0 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 17 - 0 | 0] + in2 * wi[11 - 0 | 0];
    ts[tsPos + Kotlin.imul(12 + 0 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 12 + 0 | 0] + in2 * wi[6 + 0 | 0];
    ts[tsPos + Kotlin.imul(12 + 2 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 12 + 2 | 0] + in3 * wi[6 + 2 | 0];
    ts[tsPos + Kotlin.imul(17 - 2 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 17 - 2 | 0] + in3 * wi[11 - 2 | 0];
    ts[tsPos + Kotlin.imul(6 + 0 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 6 + 0 | 0] + in0 * wi[0];
    ts[tsPos + Kotlin.imul(11 - 0 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 11 - 0 | 0] + in0 * wi[5 - 0 | 0];
    ts[tsPos + Kotlin.imul(6 + 2 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 6 + 2 | 0] + in4 * wi[2];
    ts[tsPos + Kotlin.imul(11 - 2 | 0, MPG123_getInstance().SBLIMIT) | 0] = out1[out1Pos + 11 - 2 | 0] + in4 * wi[5 - 2 | 0];
    inbufPos_0.v = inbufPos_0.v + 1 | 0;
    var out2 = rawout2;
    var out2Pos = rawout2Pos;
    var in5_0 = inn[inbufPos_0.v + (5 * 3 | 0) | 0];
    var in4_0 = inn[inbufPos_0.v + (4 * 3 | 0) | 0];
    in5_0 += in4_0;
    var in3_0 = inn[inbufPos_0.v + (3 * 3 | 0) | 0];
    in4_0 += in3_0;
    var in2_0 = inn[inbufPos_0.v + (2 * 3 | 0) | 0];
    in3_0 += in2_0;
    var in1_0 = inn[inbufPos_0.v + (1 * 3 | 0) | 0];
    in2_0 += in1_0;
    var in0_0 = inn[inbufPos_0.v + (0 * 3 | 0) | 0];
    in1_0 += in0_0;
    in5_0 += in3_0;
    in3_0 += in1_0;
    in2_0 *= this.COS6_1_0;
    in3_0 *= this.COS6_1_0;
    var tmp0_0;
    var tmp1_0 = in0_0 - in4_0;
    var tmp2_0 = (in1_0 - in5_0) * this.tfcos12_0[1];
    tmp0_0 = tmp1_0 + tmp2_0;
    tmp1_0 -= tmp2_0;
    out2[out2Pos + 5 - 1 | 0] = tmp0_0 * wi[11 - 1 | 0];
    out2[out2Pos + 0 + 1 | 0] = tmp0_0 * wi[6 + 1 | 0];
    ts[tsPos + Kotlin.imul(12 + 1 | 0, MPG123_getInstance().SBLIMIT) | 0] = ts[tsPos + Kotlin.imul(12 + 1 | 0, MPG123_getInstance().SBLIMIT) | 0] + tmp1_0 * wi[1];
    ts[tsPos + Kotlin.imul(17 - 1 | 0, MPG123_getInstance().SBLIMIT) | 0] = ts[tsPos + Kotlin.imul(17 - 1 | 0, MPG123_getInstance().SBLIMIT) | 0] + tmp1_0 * wi[5 - 1 | 0];
    in0_0 += in4_0 * this.COS6_2_0;
    in4_0 = in0_0 + in2_0;
    in0_0 -= in2_0;
    in1_0 += in5_0 * this.COS6_2_0;
    in5_0 = (in1_0 + in3_0) * this.tfcos12_0[0];
    in1_0 = (in1_0 - in3_0) * this.tfcos12_0[2];
    in3_0 = in4_0 + in5_0;
    in4_0 -= in5_0;
    in2_0 = in0_0 + in1_0;
    in0_0 -= in1_0;
    out2[out2Pos + 5 - 0 | 0] = in2_0 * wi[11 - 0 | 0];
    out2[out2Pos + 0 + 0 | 0] = in2_0 * wi[6 + 0 | 0];
    out2[out2Pos + 0 + 2 | 0] = in3_0 * wi[6 + 2 | 0];
    out2[out2Pos + 5 - 2 | 0] = in3_0 * wi[11 - 2 | 0];
    ts[tsPos + Kotlin.imul(12 + 0 | 0, MPG123_getInstance().SBLIMIT) | 0] = ts[tsPos + Kotlin.imul(12 + 0 | 0, MPG123_getInstance().SBLIMIT) | 0] + in0_0 * wi[0];
    ts[tsPos + Kotlin.imul(17 - 0 | 0, MPG123_getInstance().SBLIMIT) | 0] = ts[tsPos + Kotlin.imul(17 - 0 | 0, MPG123_getInstance().SBLIMIT) | 0] + in0_0 * wi[5 - 0 | 0];
    ts[tsPos + Kotlin.imul(12 + 2 | 0, MPG123_getInstance().SBLIMIT) | 0] = ts[tsPos + Kotlin.imul(12 + 2 | 0, MPG123_getInstance().SBLIMIT) | 0] + in4_0 * wi[2];
    ts[tsPos + Kotlin.imul(17 - 2 | 0, MPG123_getInstance().SBLIMIT) | 0] = ts[tsPos + Kotlin.imul(17 - 2 | 0, MPG123_getInstance().SBLIMIT) | 0] + in4_0 * wi[5 - 2 | 0];
    inbufPos_0.v = inbufPos_0.v + 1 | 0;
    var out2_0 = rawout2;
    var out2Pos_0 = rawout2Pos;
    out2_0[out2Pos_0 + 12 | 0] = 0.0;
    out2_0[out2Pos_0 + 13 | 0] = 0.0;
    out2_0[out2Pos_0 + 14 | 0] = 0.0;
    out2_0[out2Pos_0 + 15 | 0] = 0.0;
    out2_0[out2Pos_0 + 16 | 0] = 0.0;
    out2_0[out2Pos_0 + 17 | 0] = 0.0;
    var in5_1 = inn[inbufPos_0.v + (5 * 3 | 0) | 0];
    var in4_1 = inn[inbufPos_0.v + (4 * 3 | 0) | 0];
    in5_1 += in4_1;
    var in3_1 = inn[inbufPos_0.v + (3 * 3 | 0) | 0];
    in4_1 += in3_1;
    var in2_1 = inn[inbufPos_0.v + (2 * 3 | 0) | 0];
    in3_1 += in2_1;
    var in1_1 = inn[inbufPos_0.v + (1 * 3 | 0) | 0];
    in2_1 += in1_1;
    var in0_1 = inn[inbufPos_0.v + (0 * 3 | 0) | 0];
    in1_1 += in0_1;
    in5_1 += in3_1;
    in3_1 += in1_1;
    in2_1 *= this.COS6_1_0;
    in3_1 *= this.COS6_1_0;
    var tmp0_1;
    var tmp1_1 = in0_1 - in4_1;
    var tmp2_1 = (in1_1 - in5_1) * this.tfcos12_0[1];
    tmp0_1 = tmp1_1 + tmp2_1;
    tmp1_1 -= tmp2_1;
    out2_0[out2Pos_0 + 11 - 1 | 0] = tmp0_1 * wi[11 - 1 | 0];
    out2_0[out2Pos_0 + 6 + 1 | 0] = tmp0_1 * wi[6 + 1 | 0];
    out2_0[out2Pos_0 + 0 + 1 | 0] = out2_0[out2Pos_0 + 0 + 1 | 0] + tmp1_1 * wi[1];
    out2_0[out2Pos_0 + 5 - 1 | 0] = out2_0[out2Pos_0 + 5 - 1 | 0] + tmp1_1 * wi[5 - 1 | 0];
    in0_1 += in4_1 * this.COS6_2_0;
    in4_1 = in0_1 + in2_1;
    in0_1 -= in2_1;
    in1_1 += in5_1 * this.COS6_2_0;
    in5_1 = (in1_1 + in3_1) * this.tfcos12_0[0];
    in1_1 = (in1_1 - in3_1) * this.tfcos12_0[2];
    in3_1 = in4_1 + in5_1;
    in4_1 -= in5_1;
    in2_1 = in0_1 + in1_1;
    in0_1 -= in1_1;
    out2_0[out2Pos_0 + 11 - 0 | 0] = in2_1 * wi[11 - 0 | 0];
    out2_0[out2Pos_0 + 6 + 0 | 0] = in2_1 * wi[6 + 0 | 0];
    out2_0[out2Pos_0 + 6 + 2 | 0] = in3_1 * wi[6 + 2 | 0];
    out2_0[out2Pos_0 + 11 - 2 | 0] = in3_1 * wi[11 - 2 | 0];
    out2_0[out2Pos_0 + 0 + 0 | 0] = out2_0[out2Pos_0 + 0 + 0 | 0] + in0_1 * wi[0];
    out2_0[out2Pos_0 + 5 - 0 | 0] = out2_0[out2Pos_0 + 5 - 0 | 0] + in0_1 * wi[5 - 0 | 0];
    out2_0[out2Pos_0 + 0 + 2 | 0] = out2_0[out2Pos_0 + 0 + 2 | 0] + in4_1 * wi[2];
    out2_0[out2Pos_0 + 5 - 2 | 0] = out2_0[out2Pos_0 + 5 - 2 | 0] + in4_1 * wi[5 - 2 | 0];
  };
  Layer3.prototype.III_hybrid_0 = function (mp, fsIn, tsOut, ch, gr_infos) {
    var tmp$, tmp$_0, tmp$_1;
    var tspnt = tsOut;
    var tspntPos = 0;
    var block = mp.hybrid_block;
    var blc = mp.hybrid_blc;
    var sb = 0;
    var b = blc[ch];
    var rawout1 = block[b][ch];
    var rawout1Pos = 0;
    b = -b + 1 | 0;
    var rawout2 = block[b][ch];
    var rawout2Pos = 0;
    blc[ch] = b;
    if (gr_infos.mixed_block_flag !== 0) {
      sb = 2;
      this.dct36_0(fsIn, 0 * MPG123_getInstance().SSLIMIT | 0, rawout1, rawout1Pos, rawout2, rawout2Pos, this.win_0[0], tspnt, tspntPos + 0 | 0);
      this.dct36_0(fsIn, 1 * MPG123_getInstance().SSLIMIT | 0, rawout1, rawout1Pos + 18 | 0, rawout2, rawout2Pos + 18 | 0, this.win1_0[0], tspnt, tspntPos + 1 | 0);
      rawout1Pos = rawout1Pos + 36 | 0;
      rawout2Pos = rawout2Pos + 36 | 0;
      tspntPos = tspntPos + 2 | 0;
    }
    var bt = gr_infos.block_type;
    if (bt === 2) {
      while (sb < gr_infos.maxb) {
        this.dct12_0(fsIn, Kotlin.imul(sb, MPG123_getInstance().SSLIMIT), rawout1, rawout1Pos, rawout2, rawout2Pos, this.win_0[2], tspnt, tspntPos + 0 | 0);
        this.dct12_0(fsIn, Kotlin.imul(sb + 1 | 0, MPG123_getInstance().SSLIMIT), rawout1, rawout1Pos + 18 | 0, rawout2, rawout2Pos + 18 | 0, this.win1_0[2], tspnt, tspntPos + 1 | 0);
        sb = sb + 2 | 0;
        tspntPos = tspntPos + 2 | 0;
        rawout1Pos = rawout1Pos + 36 | 0;
        rawout2Pos = rawout2Pos + 36 | 0;
      }
    }
     else {
      while (sb < gr_infos.maxb) {
        this.dct36_0(fsIn, Kotlin.imul(sb, MPG123_getInstance().SSLIMIT), rawout1, rawout1Pos, rawout2, rawout2Pos, this.win_0[bt], tspnt, tspntPos + 0 | 0);
        this.dct36_0(fsIn, Kotlin.imul(sb + 1 | 0, MPG123_getInstance().SSLIMIT), rawout1, rawout1Pos + 18 | 0, rawout2, rawout2Pos + 18 | 0, this.win1_0[bt], tspnt, tspntPos + 1 | 0);
        sb = sb + 2 | 0;
        tspntPos = tspntPos + 2 | 0;
        rawout1Pos = rawout1Pos + 36 | 0;
        rawout2Pos = rawout2Pos + 36 | 0;
      }
    }
    while (sb < MPG123_getInstance().SBLIMIT) {
      tmp$ = MPG123_getInstance().SSLIMIT - 1 | 0;
      for (var i = 0; i <= tmp$; i++) {
        tspnt[tspntPos + Kotlin.imul(i, MPG123_getInstance().SBLIMIT) | 0] = rawout1[tmp$_0 = rawout1Pos, rawout1Pos = tmp$_0 + 1 | 0, tmp$_0];
        rawout2[tmp$_1 = rawout2Pos, rawout2Pos = tmp$_1 + 1 | 0, tmp$_1] = 0.0;
      }
      sb = sb + 1 | 0;
      tspntPos = tspntPos + 1 | 0;
    }
  };
  Layer3.prototype.do_layer3_sideinfo_rd9nj3$ = function (mp) {
    var fr = mp.fr;
    var stereo = fr.stereo;
    var single = fr.single;
    var ms_stereo;
    var sfreq = fr.sampling_frequency;
    var granules;
    var ch;
    var gr;
    var databits;
    if (stereo === 1)
      single = 0;
    ms_stereo = fr.mode === MPG123_getInstance().MPG_MD_JOINT_STEREO ? 0 : fr.mode_ext & 2;
    if (fr.lsf !== 0) {
      granules = 1;
      this.III_get_side_info_2_0(mp, this.sideinfo_0, stereo, ms_stereo, sfreq, single);
    }
     else {
      granules = 2;
      this.III_get_side_info_1_0(mp, this.sideinfo_0, stereo, ms_stereo, sfreq, single);
    }
    databits = 0;
    gr = 0;
    while (gr < granules) {
      ch = 0;
      while (ch < stereo) {
        var gr_infos = this.sideinfo_0.ch[ch].gr[gr];
        databits = databits + gr_infos.part2_3_length | 0;
        ch = ch + 1 | 0;
      }
      gr = gr + 1 | 0;
    }
    return databits - (8 * this.sideinfo_0.main_data_begin | 0) | 0;
  };
  Layer3.prototype.do_layer3_oidyt$ = function (mp, pcm_sample, pcm_point, synth) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5;
    var ss;
    var clip = 0;
    var array = Array_0(2);
    var tmp$_6;
    tmp$_6 = array.length - 1 | 0;
    for (var i = 0; i <= tmp$_6; i++) {
      array[i] = new Int32Array(39);
    }
    var scalefacs = array;
    var fr = mp.fr;
    var stereo = fr.stereo;
    var single = fr.single;
    var ms_stereo;
    var i_stereo;
    var sfreq = fr.sampling_frequency;
    var granules;
    if (this.common_0.set_pointer_mwy59t$(mp, this.sideinfo_0.main_data_begin) === MPGLib$Companion_getInstance().MP3_ERR)
      return 0;
    if (stereo === 1)
      single = 0;
    var stereo1 = stereo === 1 ? 1 : single >= 0 ? 1 : 2;
    if (fr.mode === MPG123_getInstance().MPG_MD_JOINT_STEREO) {
      ms_stereo = fr.mode_ext & 2;
      i_stereo = fr.mode_ext & 1;
    }
     else {
      i_stereo = 0;
      ms_stereo = i_stereo;
    }
    granules = fr.lsf !== 0 ? 1 : 2;
    var gr = 0;
    while (gr < granules) {
      var gr_infos2 = this.sideinfo_0.ch[0].gr[gr];
      var part2bits2;
      if (fr.lsf !== 0)
        part2bits2 = this.III_get_scale_factors_2_0(mp, scalefacs[0], gr_infos2, 0);
      else {
        part2bits2 = this.III_get_scale_factors_1_0(mp, scalefacs[0], gr_infos2);
      }
      mp.pinfo.sfbits[gr][0] = part2bits2;
      for (var i_0 = 0; i_0 <= 38; i_0++) {
        mp.pinfo.sfb_s[gr][0][i_0] = scalefacs[0][i_0];
      }
      if (this.III_dequantize_sample_0(mp, this.hybridIn_0[0], scalefacs[0], gr_infos2, sfreq, part2bits2) !== 0)
        return clip;
      if (stereo === 2) {
        var gr_infos = this.sideinfo_0.ch[1].gr[gr];
        var part2bits;
        if (fr.lsf !== 0)
          part2bits = this.III_get_scale_factors_2_0(mp, scalefacs[1], gr_infos, i_stereo);
        else {
          part2bits = this.III_get_scale_factors_1_0(mp, scalefacs[1], gr_infos);
        }
        mp.pinfo.sfbits[gr][1] = part2bits;
        for (var i_1 = 0; i_1 <= 38; i_1++)
          mp.pinfo.sfb_s[gr][1][i_1] = scalefacs[1][i_1];
        if (this.III_dequantize_sample_0(mp, this.hybridIn_0[1], scalefacs[1], gr_infos, sfreq, part2bits) !== 0)
          return clip;
        if (ms_stereo !== 0) {
          tmp$ = Kotlin.imul(MPG123_getInstance().SBLIMIT, MPG123_getInstance().SSLIMIT) - 1 | 0;
          for (var i_2 = 0; i_2 <= tmp$; i_2++) {
            var tmp0;
            var tmp1;
            tmp0 = this.hybridIn_0[0][i_2];
            tmp1 = this.hybridIn_0[1][i_2];
            this.hybridIn_0[1][i_2] = tmp0 - tmp1;
            this.hybridIn_0[0][i_2] = tmp0 + tmp1;
          }
        }
        if (i_stereo !== 0)
          this.III_i_stereo_0(this.hybridIn_0, scalefacs[1], gr_infos, sfreq, ms_stereo, fr.lsf);
        if (ms_stereo !== 0 || i_stereo !== 0 || single === 3) {
          if (gr_infos.maxb > this.sideinfo_0.ch[0].gr[gr].maxb) {
            this.sideinfo_0.ch[0].gr[gr].maxb = gr_infos.maxb;
          }
           else {
            gr_infos.maxb = this.sideinfo_0.ch[0].gr[gr].maxb;
          }
        }
        tmp$_0 = single;
        if (tmp$_0 === 3) {
          var in0 = this.hybridIn_0[0];
          var in1 = this.hybridIn_0[1];
          var in0Pos = 0;
          var in1Pos = 0;
          var i_3 = 0;
          while (i_3 < Kotlin.imul(MPG123_getInstance().SSLIMIT, gr_infos.maxb)) {
            in0[in0Pos] = in0[in0Pos] + in1[tmp$_1 = in1Pos, in1Pos = tmp$_1 + 1 | 0, tmp$_1];
            i_3 = i_3 + 1 | 0;
            in0Pos = in0Pos + 1 | 0;
          }
        }
         else if (tmp$_0 === 1) {
          var in0_0 = this.hybridIn_0[0];
          var in1_0 = this.hybridIn_0[1];
          var in0Pos_0 = 0;
          var in1Pos_0 = 0;
          tmp$_2 = Kotlin.imul(MPG123_getInstance().SSLIMIT, gr_infos.maxb) - 1 | 0;
          for (var i_4 = 0; i_4 <= tmp$_2; i_4++) {
            in0_0[tmp$_4 = in0Pos_0, in0Pos_0 = tmp$_4 + 1 | 0, tmp$_4] = in1_0[tmp$_3 = in1Pos_0, in1Pos_0 = tmp$_3 + 1 | 0, tmp$_3];
          }
        }
      }
      var i_5;
      var ifqstep;
      mp.pinfo.bitrate = Common$Companion_getInstance().tabsel_123[fr.lsf][fr.lay - 1 | 0][fr.bitrate_index];
      mp.pinfo.sampfreq = Common$Companion_getInstance().freqs[sfreq];
      mp.pinfo.emph = fr.emphasis;
      mp.pinfo.crc = fr.error_protection ? 1 : 0;
      mp.pinfo.padding = fr.padding;
      mp.pinfo.stereo = fr.stereo;
      mp.pinfo.js = fr.mode === MPG123_getInstance().MPG_MD_JOINT_STEREO ? 1 : 0;
      mp.pinfo.ms_stereo = ms_stereo;
      mp.pinfo.i_stereo = i_stereo;
      mp.pinfo.maindata = this.sideinfo_0.main_data_begin;
      for (var ch = 0; ch < stereo1; ch++) {
        var gr_infos_0 = this.sideinfo_0.ch[ch].gr[gr];
        mp.pinfo.big_values[gr][ch] = gr_infos_0.big_values;
        mp.pinfo.scalefac_scale[gr][ch] = gr_infos_0.scalefac_scale;
        mp.pinfo.mixed[gr][ch] = gr_infos_0.mixed_block_flag;
        mp.pinfo.mpg123blocktype[gr][ch] = gr_infos_0.block_type;
        mp.pinfo.mainbits[gr][ch] = gr_infos_0.part2_3_length;
        mp.pinfo.preflag[gr][ch] = gr_infos_0.preflag;
        if (gr === 1)
          mp.pinfo.scfsi[ch] = gr_infos_0.scfsi;
      }
      for (var ch_0 = 0; ch_0 < stereo1; ch_0++) {
        var sb;
        var gr_infos_1 = this.sideinfo_0.ch[ch_0].gr[gr];
        ifqstep = mp.pinfo.scalefac_scale[gr][ch_0] === 0 ? 0.5 : 1.0;
        var doubles = mp.pinfo.sfb_s[gr][ch_0];
        if (2 === gr_infos_1.block_type) {
          i_5 = 0;
          while (i_5 < 3) {
            var ints = mp.pinfo.sub_gain[gr][ch_0];
            sb = 0;
            while (sb < 12) {
              var j = (3 * sb | 0) + i_5 | 0;
              doubles[j] = -ifqstep * doubles[j - gr_infos_1.mixed_block_flag | 0];
              doubles[j] = doubles[j] - (2 * ints[i_5] | 0);
              sb = sb + 1 | 0;
            }
            doubles[(3 * sb | 0) + i_5 | 0] = -2 * ints[i_5] | 0;
            i_5 = i_5 + 1 | 0;
          }
        }
         else {
          var doubles1 = mp.pinfo.sfb[gr][ch_0];
          sb = 0;
          while (sb < 21) {
            doubles1[sb] = doubles[sb];
            if (gr_infos_1.preflag !== 0)
              doubles1[sb] = doubles1[sb] + Layer3$Companion_getInstance().pretab1_0[sb];
            doubles1[sb] = doubles1[sb] * -ifqstep;
            sb = sb + 1 | 0;
          }
          doubles1[21] = 0.0;
        }
      }
      for (var ch_1 = 0; ch_1 < stereo1; ch_1++) {
        var j_0 = 0;
        tmp$_5 = MPG123_getInstance().SBLIMIT;
        for (var sb_0 = 0; sb_0 < tmp$_5; sb_0++) {
          ss = 0;
          while (ss < MPG123_getInstance().SSLIMIT) {
            mp.pinfo.mpg123xr[gr][ch_1][j_0] = this.hybridIn_0[ch_1][Kotlin.imul(sb_0, MPG123_getInstance().SSLIMIT) + ss | 0];
            ss = ss + 1 | 0;
            j_0 = j_0 + 1 | 0;
          }
        }
      }
      for (var ch_2 = 0; ch_2 < stereo1; ch_2++) {
        var gr_infos_2 = this.sideinfo_0.ch[ch_2].gr[gr];
        this.III_antialias_0(this.hybridIn_0[ch_2], gr_infos_2);
        this.III_hybrid_0(mp, this.hybridIn_0[ch_2], this.hybridOut_0[ch_2], ch_2, gr_infos_2);
      }
      ss = 0;
      while (ss < MPG123_getInstance().SSLIMIT) {
        if (single >= 0) {
          clip = clip + synth.synth_1to1_mono_ptr_ndrce4$(mp, this.hybridOut_0[0], Kotlin.imul(ss, MPG123_getInstance().SBLIMIT), pcm_sample, pcm_point) | 0;
        }
         else {
          var p1 = new MPGLib$ProcessedBytes();
          p1.pb = pcm_point.pb;
          clip = clip + synth.synth_1to1_ptr_80wkc8$(mp, this.hybridOut_0[0], Kotlin.imul(ss, MPG123_getInstance().SBLIMIT), 0, pcm_sample, p1) | 0;
          clip = clip + synth.synth_1to1_ptr_80wkc8$(mp, this.hybridOut_0[1], Kotlin.imul(ss, MPG123_getInstance().SBLIMIT), 1, pcm_sample, pcm_point) | 0;
        }
        ss = ss + 1 | 0;
      }
      gr = gr + 1 | 0;
    }
    return clip;
  };
  function Layer3$bandInfoStruct(lIdx, lDiff, sIdx, sDiff) {
    this.longIdx_8be2vx$ = new Int16Array(23);
    this.longDiff_8be2vx$ = new Int16Array(22);
    this.shortIdx_8be2vx$ = new Int16Array(14);
    this.shortDiff_8be2vx$ = new Int16Array(13);
    this.longIdx_8be2vx$ = lIdx;
    this.longDiff_8be2vx$ = lDiff;
    this.shortIdx_8be2vx$ = sIdx;
    this.shortDiff_8be2vx$ = sDiff;
  }
  Layer3$bandInfoStruct.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'bandInfoStruct',
    interfaces: []
  };
  function Layer3$Companion() {
    Layer3$Companion_instance = this;
    this.slen_0 = [new Int32Array([0, 0, 0, 0, 3, 1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4]), new Int32Array([0, 1, 2, 3, 0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 2, 3])];
    this.stab_0 = [[new Int32Array([6, 5, 5, 5]), new Int32Array([6, 5, 7, 3]), new Int32Array([11, 10, 0, 0]), new Int32Array([7, 7, 7, 0]), new Int32Array([6, 6, 6, 3]), new Int32Array([8, 8, 5, 0])], [new Int32Array([9, 9, 9, 9]), new Int32Array([9, 9, 12, 6]), new Int32Array([18, 18, 0, 0]), new Int32Array([12, 12, 12, 0]), new Int32Array([12, 9, 9, 6]), new Int32Array([15, 12, 9, 0])], [new Int32Array([6, 9, 9, 9]), new Int32Array([6, 9, 12, 6]), new Int32Array([15, 18, 0, 0]), new Int32Array([6, 15, 12, 0]), new Int32Array([6, 12, 9, 6]), new Int32Array([6, 18, 9, 0])]];
    this.pretab1_0 = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 3, 3, 3, 2, 0]);
    this.pretab2_0 = new Int32Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
    this.bandInfo_0 = [new Layer3$bandInfoStruct(new Int16Array([0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 52, 62, 74, 90, 110, 134, 162, 196, 238, 288, 342, 418, 576]), new Int16Array([4, 4, 4, 4, 4, 4, 6, 6, 8, 8, 10, 12, 16, 20, 24, 28, 34, 42, 50, 54, 76, 158]), new Int16Array([0, Kotlin.toShort(4 * 3 | 0), Kotlin.toShort(8 * 3 | 0), Kotlin.toShort(12 * 3 | 0), Kotlin.toShort(16 * 3 | 0), Kotlin.toShort(22 * 3 | 0), Kotlin.toShort(30 * 3 | 0), Kotlin.toShort(40 * 3 | 0), Kotlin.toShort(52 * 3 | 0), Kotlin.toShort(66 * 3 | 0), Kotlin.toShort(84 * 3 | 0), Kotlin.toShort(106 * 3 | 0), Kotlin.toShort(136 * 3 | 0), Kotlin.toShort(192 * 3 | 0)]), new Int16Array([4, 4, 4, 4, 6, 8, 10, 12, 14, 18, 22, 30, 56])), new Layer3$bandInfoStruct(new Int16Array([0, 4, 8, 12, 16, 20, 24, 30, 36, 42, 50, 60, 72, 88, 106, 128, 156, 190, 230, 276, 330, 384, 576]), new Int16Array([4, 4, 4, 4, 4, 4, 6, 6, 6, 8, 10, 12, 16, 18, 22, 28, 34, 40, 46, 54, 54, 192]), new Int16Array([0, Kotlin.toShort(4 * 3 | 0), Kotlin.toShort(8 * 3 | 0), Kotlin.toShort(12 * 3 | 0), Kotlin.toShort(16 * 3 | 0), Kotlin.toShort(22 * 3 | 0), Kotlin.toShort(28 * 3 | 0), Kotlin.toShort(38 * 3 | 0), Kotlin.toShort(50 * 3 | 0), Kotlin.toShort(64 * 3 | 0), Kotlin.toShort(80 * 3 | 0), Kotlin.toShort(100 * 3 | 0), Kotlin.toShort(126 * 3 | 0), Kotlin.toShort(192 * 3 | 0)]), new Int16Array([4, 4, 4, 4, 6, 6, 10, 12, 14, 16, 20, 26, 66])), new Layer3$bandInfoStruct(new Int16Array([0, 4, 8, 12, 16, 20, 24, 30, 36, 44, 54, 66, 82, 102, 126, 156, 194, 240, 296, 364, 448, 550, 576]), new Int16Array([4, 4, 4, 4, 4, 4, 6, 6, 8, 10, 12, 16, 20, 24, 30, 38, 46, 56, 68, 84, 102, 26]), new Int16Array([0, Kotlin.toShort(4 * 3 | 0), Kotlin.toShort(8 * 3 | 0), Kotlin.toShort(12 * 3 | 0), Kotlin.toShort(16 * 3 | 0), Kotlin.toShort(22 * 3 | 0), Kotlin.toShort(30 * 3 | 0), Kotlin.toShort(42 * 3 | 0), Kotlin.toShort(58 * 3 | 0), Kotlin.toShort(78 * 3 | 0), Kotlin.toShort(104 * 3 | 0), Kotlin.toShort(138 * 3 | 0), Kotlin.toShort(180 * 3 | 0), Kotlin.toShort(192 * 3 | 0)]), new Int16Array([4, 4, 4, 4, 6, 8, 12, 16, 20, 26, 34, 42, 12])), new Layer3$bandInfoStruct(new Int16Array([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576]), new Int16Array([6, 6, 6, 6, 6, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 38, 46, 52, 60, 68, 58, 54]), new Int16Array([0, Kotlin.toShort(4 * 3 | 0), Kotlin.toShort(8 * 3 | 0), Kotlin.toShort(12 * 3 | 0), Kotlin.toShort(18 * 3 | 0), Kotlin.toShort(24 * 3 | 0), Kotlin.toShort(32 * 3 | 0), Kotlin.toShort(42 * 3 | 0), Kotlin.toShort(56 * 3 | 0), Kotlin.toShort(74 * 3 | 0), Kotlin.toShort(100 * 3 | 0), Kotlin.toShort(132 * 3 | 0), Kotlin.toShort(174 * 3 | 0), Kotlin.toShort(192 * 3 | 0)]), new Int16Array([4, 4, 4, 6, 6, 8, 10, 14, 18, 26, 32, 42, 18])), new Layer3$bandInfoStruct(new Int16Array([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 114, 136, 162, 194, 232, 278, 332, 394, 464, 540, 576]), new Int16Array([6, 6, 6, 6, 6, 6, 8, 10, 12, 14, 16, 18, 22, 26, 32, 38, 46, 54, 62, 70, 76, 36]), new Int16Array([0, Kotlin.toShort(4 * 3 | 0), Kotlin.toShort(8 * 3 | 0), Kotlin.toShort(12 * 3 | 0), Kotlin.toShort(18 * 3 | 0), Kotlin.toShort(26 * 3 | 0), Kotlin.toShort(36 * 3 | 0), Kotlin.toShort(48 * 3 | 0), Kotlin.toShort(62 * 3 | 0), Kotlin.toShort(80 * 3 | 0), Kotlin.toShort(104 * 3 | 0), Kotlin.toShort(136 * 3 | 0), Kotlin.toShort(180 * 3 | 0), Kotlin.toShort(192 * 3 | 0)]), new Int16Array([4, 4, 4, 6, 8, 10, 12, 14, 18, 24, 32, 44, 12])), new Layer3$bandInfoStruct(new Int16Array([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576]), new Int16Array([6, 6, 6, 6, 6, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 38, 46, 52, 60, 68, 58, 54]), new Int16Array([0, Kotlin.toShort(4 * 3 | 0), Kotlin.toShort(8 * 3 | 0), Kotlin.toShort(12 * 3 | 0), Kotlin.toShort(18 * 3 | 0), Kotlin.toShort(26 * 3 | 0), Kotlin.toShort(36 * 3 | 0), Kotlin.toShort(48 * 3 | 0), Kotlin.toShort(62 * 3 | 0), Kotlin.toShort(80 * 3 | 0), Kotlin.toShort(104 * 3 | 0), Kotlin.toShort(134 * 3 | 0), Kotlin.toShort(174 * 3 | 0), Kotlin.toShort(192 * 3 | 0)]), new Int16Array([4, 4, 4, 6, 8, 10, 12, 14, 18, 24, 30, 40, 18])), new Layer3$bandInfoStruct(new Int16Array([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576]), new Int16Array([6, 6, 6, 6, 6, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 38, 46, 52, 60, 68, 58, 54]), new Int16Array([0, 12, 24, 36, 54, 78, 108, 144, 186, 240, 312, 402, 522, 576]), new Int16Array([4, 4, 4, 6, 8, 10, 12, 14, 18, 24, 30, 40, 18])), new Layer3$bandInfoStruct(new Int16Array([0, 6, 12, 18, 24, 30, 36, 44, 54, 66, 80, 96, 116, 140, 168, 200, 238, 284, 336, 396, 464, 522, 576]), new Int16Array([6, 6, 6, 6, 6, 6, 8, 10, 12, 14, 16, 20, 24, 28, 32, 38, 46, 52, 60, 68, 58, 54]), new Int16Array([0, 12, 24, 36, 54, 78, 108, 144, 186, 240, 312, 402, 522, 576]), new Int16Array([4, 4, 4, 6, 8, 10, 12, 14, 18, 24, 30, 40, 18])), new Layer3$bandInfoStruct(new Int16Array([0, 12, 24, 36, 48, 60, 72, 88, 108, 132, 160, 192, 232, 280, 336, 400, 476, 566, 568, 570, 572, 574, 576]), new Int16Array([12, 12, 12, 12, 12, 12, 16, 20, 24, 28, 32, 40, 48, 56, 64, 76, 90, 2, 2, 2, 2, 2]), new Int16Array([0, 24, 48, 72, 108, 156, 216, 288, 372, 480, 486, 492, 498, 576]), new Int16Array([8, 8, 8, 12, 16, 20, 24, 28, 36, 2, 2, 2, 26]))];
    this.Ci_0 = new Float64Array([-0.6, -0.535, -0.33, -0.185, -0.095, -0.041, -0.0142, -0.0037]);
    this.len_0 = new Int32Array([36, 36, 12, 36]);
  }
  Layer3$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var Layer3$Companion_instance = null;
  function Layer3$Companion_getInstance() {
    if (Layer3$Companion_instance === null) {
      new Layer3$Companion();
    }
    return Layer3$Companion_instance;
  }
  Layer3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'Layer3',
    interfaces: []
  };
  function MPG123() {
    MPG123_instance = this;
    this.M_SQRT2 = 1.4142135623730951;
    this.M_PI = 3.141592653589793;
    this.SBLIMIT = 32;
    this.SSLIMIT = 18;
    this.MPG_MD_JOINT_STEREO = 1;
    this.MPG_MD_MONO = 3;
    this.MAXFRAMESIZE = 2880;
    this.SCALE_BLOCK = 12;
  }
  function MPG123$gr_info_s() {
    this.scfsi = 0;
    this.part2_3_length = 0;
    this.big_values = 0;
    this.scalefac_compress = 0;
    this.block_type = 0;
    this.mixed_block_flag = 0;
    this.table_select = new Int32Array(3);
    this.maxband = new Int32Array(3);
    this.maxbandl = 0;
    this.maxb = 0;
    this.region1start = 0;
    this.region2start = 0;
    this.preflag = 0;
    this.scalefac_scale = 0;
    this.count1table_select = 0;
    var array = Array_0(3);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Float32Array([]);
    }
    this.full_gain = array;
    this.full_gainPos = new Int32Array(3);
    this.pow2gain = new Float32Array([]);
    this.pow2gainPos = 0;
  }
  MPG123$gr_info_s.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'gr_info_s',
    interfaces: []
  };
  function MPG123$grT() {
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new MPG123$gr_info_s();
    }
    this.gr = array;
    this.gr[0] = new MPG123$gr_info_s();
    this.gr[1] = new MPG123$gr_info_s();
  }
  MPG123$grT.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'grT',
    interfaces: []
  };
  function MPG123$III_sideinfo() {
    this.main_data_begin = 0;
    this.private_bits = 0;
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new MPG123$grT();
    }
    this.ch = array;
    this.ch[0] = new MPG123$grT();
    this.ch[1] = new MPG123$grT();
  }
  MPG123$III_sideinfo.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'III_sideinfo',
    interfaces: []
  };
  MPG123.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'MPG123',
    interfaces: []
  };
  var MPG123_instance = null;
  function MPG123_getInstance() {
    if (MPG123_instance === null) {
      new MPG123();
    }
    return MPG123_instance;
  }
  function MPGLib(interf) {
    MPGLib$Companion_getInstance();
    this.interf_8be2vx$ = interf;
  }
  function MPGLib$Companion() {
    MPGLib$Companion_instance = this;
    this.MP3_ERR = -1;
    this.MP3_OK = 0;
    this.MP3_NEED_MORE = 1;
    this.smpls_0 = [new Int32Array([0, 384, 1152, 1152]), new Int32Array([0, 384, 1152, 576])];
    this.OUTSIZE_CLIPPED_0 = 4096;
  }
  MPGLib$Companion.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'Companion',
    interfaces: []
  };
  var MPGLib$Companion_instance = null;
  function MPGLib$Companion_getInstance() {
    if (MPGLib$Companion_instance === null) {
      new MPGLib$Companion();
    }
    return MPGLib$Companion_instance;
  }
  MPGLib.prototype.COPY_MONO_0 = function (pcm_l, pcm_lPos, processed_samples, p) {
    var tmp$, tmp$_0;
    var lp = pcm_lPos;
    var p_samples = 0;
    for (var i = 0; i < processed_samples; i++) {
      pcm_l[tmp$_0 = lp, lp = tmp$_0 + 1 | 0, tmp$_0] = p[tmp$ = p_samples, p_samples = tmp$ + 1 | 0, tmp$];
    }
  };
  MPGLib.prototype.COPY_STEREO_0 = function (pcm_l, pcm_lPos, pcm_r, pcm_rPos, processed_samples, p) {
    var tmp$, tmp$_0, tmp$_1, tmp$_2;
    var lp = pcm_lPos;
    var rp = pcm_rPos;
    var p_samples = 0;
    for (var i = 0; i < processed_samples; i++) {
      pcm_l[tmp$_0 = lp, lp = tmp$_0 + 1 | 0, tmp$_0] = p[tmp$ = p_samples, p_samples = tmp$ + 1 | 0, tmp$];
      pcm_r[tmp$_2 = rp, rp = tmp$_2 + 1 | 0, tmp$_2] = p[tmp$_1 = p_samples, p_samples = tmp$_1 + 1 | 0, tmp$_1];
    }
  };
  MPGLib.prototype.decode1_headersB_clipchoice_0 = function (pmp, buffer, bufferPos, len, pcm_l, pcm_lPos, pcm_r, pcm_rPos, mp3data, enc, p, psize, decodeMP3_ptr) {
    var tmp$;
    mp3data.header_parsed = false;
    var pb = new MPGLib$ProcessedBytes();
    var ret = decodeMP3_ptr.decode_6mn0mk$(pmp, buffer, bufferPos, len, p, psize, pb);
    var processed_samples = pb.pb;
    if (pmp.header_parsed || pmp.fsizeold > 0 || pmp.framesize > 0) {
      mp3data.header_parsed = true;
      mp3data.stereo = pmp.fr.stereo;
      mp3data.samplerate = Common$Companion_getInstance().freqs[pmp.fr.sampling_frequency];
      mp3data.mode = pmp.fr.mode;
      mp3data.mode_ext = pmp.fr.mode_ext;
      mp3data.frameSize = MPGLib$Companion_getInstance().smpls_0[pmp.fr.lsf][pmp.fr.lay];
      if (pmp.fsizeold > 0) {
        mp3data.bitrate = Kotlin.imul(8 * (4 + pmp.fsizeold | 0) | 0, mp3data.samplerate) / (1000.0 * mp3data.frameSize) + 0.5 | 0;
      }
       else if (pmp.framesize > 0) {
        mp3data.bitrate = Kotlin.imul(8 * (4 + pmp.framesize | 0) | 0, mp3data.samplerate) / (1000.0 * mp3data.frameSize) + 0.5 | 0;
      }
       else {
        mp3data.bitrate = Common$Companion_getInstance().tabsel_123[pmp.fr.lsf][pmp.fr.lay - 1 | 0][pmp.fr.bitrate_index];
      }
      if (pmp.num_frames > 0) {
        mp3data.totalFrames = pmp.num_frames;
        mp3data.numSamples = Kotlin.imul(mp3data.frameSize, pmp.num_frames);
        enc.encoderDelay = pmp.enc_delay;
        enc.encoderPadding = pmp.enc_padding;
      }
    }
    if (ret === MPGLib$Companion_getInstance().MP3_OK) {
      tmp$ = pmp.fr.stereo;
      if (tmp$ === 1)
        this.COPY_MONO_0(pcm_l, pcm_lPos, processed_samples, p);
      else if (tmp$ === 2) {
        processed_samples = processed_samples >> 1;
        this.COPY_STEREO_0(pcm_l, pcm_lPos, pcm_r, pcm_rPos, processed_samples, p);
      }
       else {
        processed_samples = -1;
        if (!false)
          throw new AssertionError_init();
      }
    }
     else if (ret === MPGLib$Companion_getInstance().MP3_NEED_MORE)
      processed_samples = 0;
    else if (ret === MPGLib$Companion_getInstance().MP3_ERR)
      processed_samples = -1;
    else {
      processed_samples = -1;
      if (!false)
        throw new AssertionError_init();
    }
    return processed_samples;
  };
  MPGLib.prototype.hip_decode_init = function () {
    return this.interf_8be2vx$.InitMP3();
  };
  MPGLib.prototype.hip_decode_exit_3y1e80$ = function (hip) {
    if (hip != null)
      this.interf_8be2vx$.ExitMP3_rd9nj3$(hip);
    return 0;
  };
  function MPGLib$hip_decode1_headers$ObjectLiteral(this$MPGLib) {
    this.this$MPGLib = this$MPGLib;
  }
  MPGLib$hip_decode1_headers$ObjectLiteral.prototype.decode_6mn0mk$ = function (mp, in_0, bufferPos, isize, out, osize, done) {
    return this.this$MPGLib.interf_8be2vx$.decodeMP3_6mn0mk$(mp, in_0, bufferPos, isize, out, osize, done);
  };
  MPGLib$hip_decode1_headers$ObjectLiteral.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    interfaces: [MPGLib$IDecoder]
  };
  MPGLib.prototype.hip_decode1_headers_ermln0$ = function (hip, buffer, len, pcm_l, pcm_r, mp3data, enc) {
    if (hip != null) {
      var dec = new MPGLib$hip_decode1_headers$ObjectLiteral(this);
      var out = new Float32Array(MPGLib$Companion_getInstance().OUTSIZE_CLIPPED_0);
      return this.decode1_headersB_clipchoice_0(hip, buffer, 0, len, pcm_l, 0, pcm_r, 0, mp3data, enc, out, MPGLib$Companion_getInstance().OUTSIZE_CLIPPED_0, dec);
    }
    return -1;
  };
  function MPGLib$IDecoder() {
  }
  MPGLib$IDecoder.$metadata$ = {
    kind: Kotlin.Kind.INTERFACE,
    simpleName: 'IDecoder',
    interfaces: []
  };
  function MPGLib$buf() {
    this.pnt_8be2vx$ = new Int8Array([]);
    this.size_8be2vx$ = 0;
    this.pos_8be2vx$ = 0;
  }
  MPGLib$buf.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'buf',
    interfaces: []
  };
  function MPGLib$mpstr_tag() {
    this.list = ArrayList_init();
    this.vbr_header = false;
    this.num_frames = 0;
    this.enc_delay = 0;
    this.enc_padding = 0;
    this.header_parsed = false;
    this.side_parsed = false;
    this.data_parsed = false;
    this.free_format = false;
    this.old_free_format = false;
    this.bsize = 0;
    this.framesize = 0;
    this.ssize = 0;
    this.dsize = 0;
    this.fsizeold = 0;
    this.fsizeold_nopadding = 0;
    this.fr = new Frame();
    var array = Array_0(2);
    var tmp$;
    tmp$ = array.length - 1 | 0;
    for (var i = 0; i <= tmp$; i++) {
      array[i] = new Int8Array(MPG123_getInstance().MAXFRAMESIZE + 1024 | 0);
    }
    this.bsspace = array;
    var array_0 = Array_0(2);
    var tmp$_0;
    tmp$_0 = array_0.length - 1 | 0;
    for (var i_0 = 0; i_0 <= tmp$_0; i_0++) {
      var array_1 = Array_0(2);
      var tmp$_1;
      tmp$_1 = array_1.length - 1 | 0;
      for (var i_1 = 0; i_1 <= tmp$_1; i_1++) {
        array_1[i_1] = new Float32Array(Kotlin.imul(MPG123_getInstance().SBLIMIT, MPG123_getInstance().SSLIMIT));
      }
      array_0[i_0] = array_1;
    }
    this.hybrid_block = array_0;
    this.hybrid_blc = new Int32Array(2);
    this.header = Kotlin.Long.ZERO;
    this.bsnum = 0;
    var array_2 = Array_0(2);
    var tmp$_2;
    tmp$_2 = array_2.length - 1 | 0;
    for (var i_2 = 0; i_2 <= tmp$_2; i_2++) {
      var array_3 = Array_0(2);
      var tmp$_3;
      tmp$_3 = array_3.length - 1 | 0;
      for (var i_3 = 0; i_3 <= tmp$_3; i_3++) {
        array_3[i_3] = new Float32Array(272);
      }
      array_2[i_2] = array_3;
    }
    this.synth_buffs = array_2;
    this.synth_bo = 0;
    this.sync_bitstream = false;
    this.bitindex = 0;
    this.wordpointer = new Int8Array([0]);
    this.wordpointerPos = 0;
    this.pinfo = new PlottingData();
  }
  MPGLib$mpstr_tag.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'mpstr_tag',
    interfaces: []
  };
  function MPGLib$ProcessedBytes() {
    this.pb = 0;
  }
  MPGLib$ProcessedBytes.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'ProcessedBytes',
    interfaces: []
  };
  MPGLib.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: 'MPGLib',
    interfaces: []
  };
  function TabInit() {
    TabInit_instance = this;
    this.dewin_0 = new Float64Array([0.0, -1.5259E-5, -1.5259E-5, -1.5259E-5, -1.5259E-5, -1.5259E-5, -1.5259E-5, -3.0518E-5, -3.0518E-5, -3.0518E-5, -3.0518E-5, -4.5776E-5, -4.5776E-5, -6.1035E-5, -6.1035E-5, -7.6294E-5, -7.6294E-5, -9.1553E-5, -1.06812E-4, -1.06812E-4, -1.2207E-4, -1.37329E-4, -1.52588E-4, -1.67847E-4, -1.98364E-4, -2.13623E-4, -2.44141E-4, -2.59399E-4, -2.89917E-4, -3.20435E-4, -3.66211E-4, -3.96729E-4, -4.42505E-4, -4.73022E-4, -5.34058E-4, -5.79834E-4, -6.2561E-4, -6.86646E-4, -7.47681E-4, -8.08716E-4, -8.8501E-4, -9.61304E-4, -0.001037598, -0.001113892, -0.001205444, -0.001296997, -0.00138855, -0.001480103, -0.001586914, -0.001693726, -0.001785278, -0.001907349, -0.00201416, -0.002120972, -0.002243042, -0.002349854, -0.002456665, -0.002578735, -0.002685547, -0.002792358, -0.00289917, -0.002990723, -0.003082275, -0.003173828, -0.003250122, -0.003326416, -0.003387451, -0.003433228, -0.003463745, -0.003479004, -0.003479004, -0.003463745, -0.003417969, -0.003372192, -0.00328064, -0.003173828, -0.003051758, -0.002883911, -0.002700806, -0.002487183, -0.002227783, -0.001937866, -0.001617432, -0.001266479, -8.69751E-4, -4.42505E-4, 3.0518E-5, 5.49316E-4, 0.001098633, 0.001693726, 0.002334595, 0.003005981, 0.003723145, 0.004486084, 0.0052948, 0.006118774, 0.007003784, 0.007919312, 0.008865356, 0.009841919, 0.010848999, 0.011886597, 0.012939453, 0.014022827, 0.01512146, 0.016235352, 0.017349243, 0.018463135, 0.019577026, 0.020690918, 0.021789551, 0.022857666, 0.023910522, 0.024932861, 0.025909424, 0.02684021, 0.02772522, 0.028533936, 0.029281616, 0.029937744, 0.030532837, 0.031005859, 0.031387329, 0.031661987, 0.031814575, 0.031845093, 0.031738281, 0.031478882, 0.031082153, 0.030517578, 0.029785156, 0.028884888, 0.027801514, 0.026535034, 0.025085449, 0.023422241, 0.021575928, 0.01953125, 0.01725769, 0.014801025, 0.012115479, 0.009231567, 0.006134033, 0.002822876, -6.86646E-4, -0.004394531, -0.00831604, -0.012420654, -0.016708374, -0.021179199, -0.025817871, -0.030609131, -0.035552979, -0.040634155, -0.045837402, -0.051132202, -0.056533813, -0.06199646, -0.067520142, -0.073059082, -0.07862854, -0.084182739, -0.089706421, -0.095169067, -0.100540161, -0.105819702, -0.110946655, -0.115921021, -0.120697021, -0.125259399, -0.129562378, -0.133590698, -0.137298584, -0.140670776, -0.143676758, -0.146255493, -0.148422241, -0.150115967, -0.151306152, -0.15196228, -0.152069092, -0.151596069, -0.150497437, -0.148773193, -0.146362305, -0.143264771, -0.139450073, -0.134887695, -0.129577637, -0.123474121, -0.116577148, -0.108856201, -0.100311279, -0.090927124, -0.080688477, -0.069595337, -0.057617187, -0.044784546, -0.031082153, -0.01651001, -0.001068115, 0.015228271, 0.03237915, 0.050354004, 0.069168091, 0.088775635, 0.109161377, 0.130310059, 0.152206421, 0.174789429, 0.198059082, 0.221984863, 0.246505737, 0.271591187, 0.297210693, 0.323318481, 0.349868774, 0.376800537, 0.404083252, 0.431655884, 0.459472656, 0.487472534, 0.515609741, 0.543823242, 0.572036743, 0.600219727, 0.628295898, 0.656219482, 0.683914185, 0.71131897, 0.738372803, 0.765029907, 0.791213989, 0.816864014, 0.841949463, 0.866363525, 0.890090942, 0.91305542, 0.935195923, 0.956481934, 0.976852417, 0.996246338, 1.01461792, 1.031936646, 1.048156738, 1.063217163, 1.07711792, 1.089782715, 1.101211548, 1.111373901, 1.120223999, 1.127746582, 1.133926392, 1.138763428, 1.142211914, 1.144287109, 1.144989014]);
    this.pnts = [new Float32Array(16), new Float32Array(8), new Float32Array(4), new Float32Array(2), new Float32Array(1)];
    this.decwin = new Float32Array(512 + 32 | 0);
    this.make_decode_tables_0(Kotlin.Long.fromInt(32767));
  }
  TabInit.prototype.make_decode_tables_0 = function (scaleval) {
    this.make_decode_tables1_0();
    this.make_decode_tables2_0(scaleval);
    this.make_decode_tables3_0(scaleval);
  };
  TabInit.prototype.make_decode_tables1_0 = function () {
    var tmp$;
    for (var i = 0; i <= 4; i++) {
      var kr = 16 >> i;
      var divv = 64 >> i;
      var costab = this.pnts[i];
      tmp$ = kr - 1 | 0;
      for (var k = 0; k <= tmp$; k++) {
        var a = MPG123_getInstance().M_PI * (k * 2.0 + 1.0) / divv;
        costab[k] = 1.0 / (2.0 * Math_0.cos(a));
      }
    }
  };
  TabInit.prototype.make_decode_tables2_0 = function (scaleval) {
    var table = 0;
    var sval = scaleval.unaryMinus();
    var i = 0;
    var j = 0;
    while (i < 256) {
      if (table < (512 + 16 | 0)) {
        this.decwin[table + 0 | 0] = this.dewin_0[j] * sval.toNumber();
        this.decwin[table + 16 | 0] = this.decwin[table + 0 | 0];
      }
      if (i % 32 === 31)
        table = table - 1023 | 0;
      if (i % 64 === 63)
        sval = sval.unaryMinus();
      i = i + 1 | 0;
      j = j + 1 | 0;
      table = table + 32 | 0;
    }
  };
  TabInit.prototype.make_decode_tables3_0 = function (scaleval) {
    var table = 8;
    var sval2 = scaleval.unaryMinus();
    var i = 256;
    var j = 256;
    while (i < 512) {
      if (table < (512 + 16 | 0)) {
        this.decwin[table + 0 | 0] = this.dewin_0[j] * sval2.toNumber();
        this.decwin[table + 16 | 0] = this.decwin[table + 0 | 0];
      }
      if (i % 32 === 31)
        table = table - 1023 | 0;
      if (i % 64 === 63)
        sval2 = sval2.unaryMinus();
      i = i + 1 | 0;
      j = j - 1 | 0;
      table = table + 32 | 0;
    }
  };
  TabInit.$metadata$ = {
    kind: Kotlin.Kind.OBJECT,
    simpleName: 'TabInit',
    interfaces: []
  };
  var TabInit_instance = null;
  function TabInit_getInstance() {
    if (TabInit_instance === null) {
      new TabInit();
    }
    return TabInit_instance;
  }
  $$importsForInline$$['korio-js'] = $module$korio_js;
  var package$com = _.com || (_.com = {});
  var package$soywiz = package$com.soywiz || (package$com.soywiz = {});
  var package$korau = package$soywiz.korau || (package$soywiz.korau = {});
  var package$format = package$korau.format || (package$korau.format = {});
  Object.defineProperty(package$format, 'MP3Decoder', {
    get: MP3Decoder_getInstance
  });
  var package$net = package$format.net || (package$format.net = {});
  var package$sourceforge = package$net.sourceforge || (package$net.sourceforge = {});
  var package$lame = package$sourceforge.lame || (package$sourceforge.lame = {});
  var package$mp3 = package$lame.mp3 || (package$lame.mp3 = {});
  package$mp3.FrameSkip = FrameSkip;
  Object.defineProperty(GetAudio, 'Companion', {
    get: GetAudio$Companion_getInstance
  });
  package$mp3.GetAudio = GetAudio;
  package$mp3.Lame = Lame;
  package$mp3.LameGlobalFlags = LameGlobalFlags;
  package$mp3.MP3Data = MP3Data;
  package$mp3.Parse = Parse;
  Object.defineProperty(PlottingData, 'Companion', {
    get: PlottingData$Companion_getInstance
  });
  package$mp3.PlottingData = PlottingData;
  Object.defineProperty(package$mp3, 'Tables', {
    get: Tables_getInstance
  });
  Object.defineProperty(VBRTag, 'Companion', {
    get: VBRTag$Companion_getInstance
  });
  package$mp3.VBRTag = VBRTag;
  package$mp3.VBRTagData = VBRTagData;
  Object.defineProperty(Common, 'Companion', {
    get: Common$Companion_getInstance
  });
  var package$mpg = package$lame.mpg || (package$lame.mpg = {});
  package$mpg.Common = Common;
  package$mpg.DCT64 = DCT64;
  package$mpg.Decode = Decode;
  package$mpg.Frame = Frame;
  Huffman.prototype.newhuff = Huffman$newhuff;
  Object.defineProperty(package$mpg, 'Huffman', {
    get: Huffman_getInstance
  });
  Object.defineProperty(Interface, 'Companion', {
    get: Interface$Companion_getInstance
  });
  Interface.ISynth = Interface$ISynth;
  package$mpg.Interface = Interface;
  L2Tables.prototype.al_table2 = L2Tables$al_table2;
  Object.defineProperty(package$mpg, 'L2Tables', {
    get: L2Tables_getInstance
  });
  package$mpg.Layer1 = Layer1;
  Object.defineProperty(Layer2, 'Companion', {
    get: Layer2$Companion_getInstance
  });
  package$mpg.Layer2 = Layer2;
  Object.defineProperty(Layer3, 'Companion', {
    get: Layer3$Companion_getInstance
  });
  package$mpg.Layer3 = Layer3;
  MPG123.prototype.gr_info_s = MPG123$gr_info_s;
  MPG123.prototype.grT = MPG123$grT;
  MPG123.prototype.III_sideinfo = MPG123$III_sideinfo;
  Object.defineProperty(package$mpg, 'MPG123', {
    get: MPG123_getInstance
  });
  Object.defineProperty(MPGLib, 'Companion', {
    get: MPGLib$Companion_getInstance
  });
  MPGLib.IDecoder = MPGLib$IDecoder;
  MPGLib.buf = MPGLib$buf;
  MPGLib.mpstr_tag = MPGLib$mpstr_tag;
  MPGLib.ProcessedBytes = MPGLib$ProcessedBytes;
  package$mpg.MPGLib = MPGLib;
  Object.defineProperty(package$mpg, 'TabInit', {
    get: TabInit_getInstance
  });
  Kotlin.defineModule('korau-mp3-js', _);
  return _;
}(typeof this['korau-mp3-js'] === 'undefined' ? {} : this['korau-mp3-js'], kotlin, this['korio-js'], this['korau-js']);
