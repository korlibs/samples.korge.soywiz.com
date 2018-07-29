(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'korge-js', 'korinject-js', 'korui-js', 'korma-js', 'korim-js', 'korio-js', 'korge-dragonbones-js', 'kds-js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('korge-js'), require('korinject-js'), require('korui-js'), require('korma-js'), require('korim-js'), require('korio-js'), require('korge-dragonbones-js'), require('kds-js'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'game'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'game'.");
    }
    if (typeof this['korge-js'] === 'undefined') {
      throw new Error("Error loading module 'game'. Its dependency 'korge-js' was not found. Please, check whether 'korge-js' is loaded prior to 'game'.");
    }
    if (typeof this['korinject-js'] === 'undefined') {
      throw new Error("Error loading module 'game'. Its dependency 'korinject-js' was not found. Please, check whether 'korinject-js' is loaded prior to 'game'.");
    }
    if (typeof this['korui-js'] === 'undefined') {
      throw new Error("Error loading module 'game'. Its dependency 'korui-js' was not found. Please, check whether 'korui-js' is loaded prior to 'game'.");
    }
    if (typeof this['korma-js'] === 'undefined') {
      throw new Error("Error loading module 'game'. Its dependency 'korma-js' was not found. Please, check whether 'korma-js' is loaded prior to 'game'.");
    }
    if (typeof this['korim-js'] === 'undefined') {
      throw new Error("Error loading module 'game'. Its dependency 'korim-js' was not found. Please, check whether 'korim-js' is loaded prior to 'game'.");
    }
    if (typeof this['korio-js'] === 'undefined') {
      throw new Error("Error loading module 'game'. Its dependency 'korio-js' was not found. Please, check whether 'korio-js' is loaded prior to 'game'.");
    }
    if (typeof this['korge-dragonbones-js'] === 'undefined') {
      throw new Error("Error loading module 'game'. Its dependency 'korge-dragonbones-js' was not found. Please, check whether 'korge-dragonbones-js' is loaded prior to 'game'.");
    }
    if (typeof this['kds-js'] === 'undefined') {
      throw new Error("Error loading module 'game'. Its dependency 'kds-js' was not found. Please, check whether 'kds-js' is loaded prior to 'game'.");
    }
    root.game = factory(typeof game === 'undefined' ? {} : game, kotlin, this['korge-js'], this['korinject-js'], this['korui-js'], this['korma-js'], this['korim-js'], this['korio-js'], this['korge-dragonbones-js'], this['kds-js']);
  }
}(this, function (_, Kotlin, $module$korge_js, $module$korinject_js, $module$korui_js, $module$korma_js, $module$korim_js, $module$korio_js, $module$korge_dragonbones_js, $module$kds_js) {
  'use strict';
  var $$importsForInline$$ = _.$$importsForInline$$ || (_.$$importsForInline$$ = {});
  var korge = $module$korge_js.com.soywiz.korge;
  var CoroutineImpl = Kotlin.kotlin.coroutines.CoroutineImpl;
  var COROUTINE_SUSPENDED = Kotlin.kotlin.coroutines.intrinsics.COROUTINE_SUSPENDED;
  var Module = $module$korge_js.com.soywiz.korge.scene.Module;
  var getKClass = Kotlin.getKClass;
  var LightQuality = $module$korui_js.com.soywiz.korui.light.LightQuality;
  var SizeInt = $module$korma_js.com.soywiz.korma.geom.SizeInt;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var throwUPAE = Kotlin.throwUPAE;
  var Unit = Kotlin.kotlin.Unit;
  var defineInlineFunction = Kotlin.defineInlineFunction;
  var wrapFunction = Kotlin.wrapFunction;
  var Scene = $module$korge_js.com.soywiz.korge.scene.Scene;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Container = $module$korge_js.com.soywiz.korge.view.Container;
  var Text = $module$korge_js.com.soywiz.korge.view.Text;
  var Graphics = $module$korge_js.com.soywiz.korge.view.Graphics;
  var color = $module$korim_js.com.soywiz.korim.color;
  var json = $module$korio_js.com.soywiz.korio.serialization.json;
  var ensureNotNull = Kotlin.ensureNotNull;
  var readBitmapOptimized = $module$korim_js.com.soywiz.korim.format.readBitmapOptimized_2axf5n$;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var mipmaps = $module$korge_js.com.soywiz.korge.render.mipmaps_6tbmt4$;
  var MVector2 = $module$korma_js.com.soywiz.korma.MVector2;
  var toString = Kotlin.toString;
  var EventObject = $module$korge_dragonbones_js.com.dragonbones.event.EventObject;
  var get_0 = $module$korma_js.com.soywiz.korma.random.get_3xvuk4$;
  var nextDouble = $module$korma_js.com.soywiz.korma.random.nextDouble_eyy2ov$;
  var numberToInt = Kotlin.numberToInt;
  var splice = $module$kds_js.com.soywiz.kds.splice_b7gcku$;
  var Rand = $module$korma_js.com.soywiz.korma.random.Rand;
  var std = $module$korio_js.com.soywiz.korio.file.std;
  var KorgeDbFactory = $module$korge_dragonbones_js.com.soywiz.korge.dragonbones.KorgeDbFactory;
  MyModule.prototype = Object.create(Module.prototype);
  MyModule.prototype.constructor = MyModule;
  MyScene.prototype = Object.create(Scene.prototype);
  MyScene.prototype.constructor = MyScene;
  Button.prototype = Object.create(Container.prototype);
  Button.prototype.constructor = Button;
  BaseDbScene.prototype = Object.create(Scene.prototype);
  BaseDbScene.prototype.constructor = BaseDbScene;
  HelloWorldScene.prototype = Object.create(BaseDbScene.prototype);
  HelloWorldScene.prototype.constructor = HelloWorldScene;
  ClassicDragonScene.prototype = Object.create(BaseDbScene.prototype);
  ClassicDragonScene.prototype.constructor = ClassicDragonScene;
  EyeTrackingScene.prototype = Object.create(BaseDbScene.prototype);
  EyeTrackingScene.prototype.constructor = EyeTrackingScene;
  SkinChangingScene.prototype = Object.create(BaseDbScene.prototype);
  SkinChangingScene.prototype.constructor = SkinChangingScene;
  function main(args) {
    korge.Korge.invoke_bkwmix$(MyModule_getInstance(), void 0, void 0, void 0, void 0, void 0, void 0, void 0, false);
  }
  function MyModule() {
    MyModule_instance = this;
    Module.call(this);
    this.mainScene_hwinxz$_0 = getKClass(MyScene);
    this.quality_8uxawl$_0 = LightQuality.QUALITY;
    this.size_tqni09$_0 = new SizeInt(1280, 720);
    this.windowSize_17e76h$_0 = new SizeInt(1280, 720);
  }
  Object.defineProperty(MyModule.prototype, 'mainScene', {
    get: function () {
      return this.mainScene_hwinxz$_0;
    }
  });
  Object.defineProperty(MyModule.prototype, 'quality', {
    get: function () {
      return this.quality_8uxawl$_0;
    }
  });
  function MyModule$init$lambda($receiver, continuation_0, suspended) {
    var instance = new Coroutine$MyModule$init$lambda($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$MyModule$init$lambda($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$MyModule$init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MyModule$init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MyModule$init$lambda.prototype.constructor = Coroutine$MyModule$init$lambda;
  Coroutine$MyModule$init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new MyScene();
          case 1:
            throw this.exception_0;
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
  function MyModule$init$lambda_0($receiver, continuation_0, suspended) {
    var instance = new Coroutine$MyModule$init$lambda_0($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$MyModule$init$lambda_0($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$MyModule$init$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MyModule$init$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MyModule$init$lambda_0.prototype.constructor = Coroutine$MyModule$init$lambda_0;
  Coroutine$MyModule$init$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new ClassicDragonScene();
          case 1:
            throw this.exception_0;
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
  function MyModule$init$lambda_1($receiver, continuation_0, suspended) {
    var instance = new Coroutine$MyModule$init$lambda_1($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$MyModule$init$lambda_1($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$MyModule$init$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MyModule$init$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MyModule$init$lambda_1.prototype.constructor = Coroutine$MyModule$init$lambda_1;
  Coroutine$MyModule$init$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new EyeTrackingScene();
          case 1:
            throw this.exception_0;
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
  function MyModule$init$lambda_2($receiver, continuation_0, suspended) {
    var instance = new Coroutine$MyModule$init$lambda_2($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$MyModule$init$lambda_2($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$MyModule$init$lambda_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MyModule$init$lambda_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MyModule$init$lambda_2.prototype.constructor = Coroutine$MyModule$init$lambda_2;
  Coroutine$MyModule$init$lambda_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new HelloWorldScene();
          case 1:
            throw this.exception_0;
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
  function MyModule$init$lambda_3($receiver, continuation_0, suspended) {
    var instance = new Coroutine$MyModule$init$lambda_3($receiver, this, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  }
  function Coroutine$MyModule$init$lambda_3($receiver, controller, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.$controller = controller;
    this.exceptionState_0 = 1;
  }
  Coroutine$MyModule$init$lambda_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MyModule$init$lambda_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MyModule$init$lambda_3.prototype.constructor = Coroutine$MyModule$init$lambda_3;
  Coroutine$MyModule$init$lambda_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            return new SkinChangingScene();
          case 1:
            throw this.exception_0;
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
  MyModule.prototype.init_y6n311$ = function (injector, continuation) {
    injector.mapPrototype_siz2e9$(getKClass(MyScene), MyModule$init$lambda).mapPrototype_siz2e9$(getKClass(ClassicDragonScene), MyModule$init$lambda_0).mapPrototype_siz2e9$(getKClass(EyeTrackingScene), MyModule$init$lambda_1).mapPrototype_siz2e9$(getKClass(HelloWorldScene), MyModule$init$lambda_2).mapPrototype_siz2e9$(getKClass(SkinChangingScene), MyModule$init$lambda_3);
  };
  Object.defineProperty(MyModule.prototype, 'size', {
    get: function () {
      return this.size_tqni09$_0;
    }
  });
  Object.defineProperty(MyModule.prototype, 'windowSize', {
    get: function () {
      return this.windowSize_17e76h$_0;
    }
  });
  MyModule.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MyModule',
    interfaces: [Module]
  };
  var MyModule_instance = null;
  function MyModule_getInstance() {
    if (MyModule_instance === null) {
      new MyModule();
    }
    return MyModule_instance;
  }
  function MyScene() {
    Scene.call(this);
    this.buttonContainer_6xj3mp$_0 = this.buttonContainer_6xj3mp$_0;
  }
  Object.defineProperty(MyScene.prototype, 'buttonContainer', {
    get: function () {
      if (this.buttonContainer_6xj3mp$_0 == null)
        return throwUPAE('buttonContainer');
      return this.buttonContainer_6xj3mp$_0;
    },
    set: function (buttonContainer) {
      this.buttonContainer_6xj3mp$_0 = buttonContainer;
    }
  });
  var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
  var scene = $module$korge_js.com.soywiz.korge.scene;
  var TimeSpan = $module$korge_js.$$importsForInline$$['klock-js'].com.soywiz.klock.TimeSpan;
  var numberToDouble = Kotlin.numberToDouble;
  function MyScene$sceneInit$lambda(closure$mySceneContainer_0, this$MyScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MyScene$sceneInit$lambda(closure$mySceneContainer_0, this$MyScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MyScene$sceneInit$lambda(closure$mySceneContainer_0, this$MyScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$closure$mySceneContainer = closure$mySceneContainer_0;
    this.local$this$MyScene = this$MyScene_0;
    this.local$$this = void 0;
  }
  Coroutine$MyScene$sceneInit$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MyScene$sceneInit$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MyScene$sceneInit$lambda.prototype.constructor = Coroutine$MyScene$sceneInit$lambda;
  Coroutine$MyScene$sceneInit$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$this = this.local$this$MyScene;
            var $receiver = this.local$closure$mySceneContainer;
            var tmp$, tmp$_0;
            var $receiver_0 = this.local$$this.buttonContainer.children;
            var destination = ArrayList_init();
            var tmp$_1;
            tmp$_1 = $receiver_0.iterator();
            while (tmp$_1.hasNext()) {
              var element = tmp$_1.next();
              if (Kotlin.isType(element, Button))
                destination.add_11rb$(element);
            }

            tmp$ = destination.iterator();
            while (tmp$.hasNext()) {
              var child = tmp$.next();
              child.enabledButton = false;
            }

            this.exceptionState_0 = 3;
            var injects_0 = [];
            var time_0;
            var transition_0;
            if (time_0 === void 0) {
              time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
            }

            if (transition_0 === void 0)
              transition_0 = scene.AlphaTransition;
            this.state_0 = 1;
            this.result_0 = $receiver.changeTo_oszfv1$(getKClass(HelloWorldScene), injects_0.slice(), time_0, transition_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.result_0;
            this.exceptionState_0 = 5;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.finallyPath_0 = [5];
            this.state_0 = 4;
            continue;
          case 4:
            var $receiver_1 = this.local$$this.buttonContainer.children;
            var destination_0 = ArrayList_init();
            var tmp$_2;
            tmp$_2 = $receiver_1.iterator();
            while (tmp$_2.hasNext()) {
              var element_0 = tmp$_2.next();
              if (Kotlin.isType(element_0, Button))
                destination_0.add_11rb$(element_0);
            }

            tmp$_0 = destination_0.iterator();
            while (tmp$_0.hasNext()) {
              var child_0 = tmp$_0.next();
              child_0.enabledButton = true;
            }

            this.state_0 = this.finallyPath_0.shift();
            continue;
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
  function MyScene$sceneInit$lambda_0(closure$mySceneContainer_0, this$MyScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MyScene$sceneInit$lambda_0(closure$mySceneContainer_0, this$MyScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MyScene$sceneInit$lambda_0(closure$mySceneContainer_0, this$MyScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$closure$mySceneContainer = closure$mySceneContainer_0;
    this.local$this$MyScene = this$MyScene_0;
    this.local$$this = void 0;
  }
  Coroutine$MyScene$sceneInit$lambda_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MyScene$sceneInit$lambda_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MyScene$sceneInit$lambda_0.prototype.constructor = Coroutine$MyScene$sceneInit$lambda_0;
  Coroutine$MyScene$sceneInit$lambda_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$this = this.local$this$MyScene;
            var $receiver = this.local$closure$mySceneContainer;
            var tmp$, tmp$_0;
            var $receiver_0 = this.local$$this.buttonContainer.children;
            var destination = ArrayList_init();
            var tmp$_1;
            tmp$_1 = $receiver_0.iterator();
            while (tmp$_1.hasNext()) {
              var element = tmp$_1.next();
              if (Kotlin.isType(element, Button))
                destination.add_11rb$(element);
            }

            tmp$ = destination.iterator();
            while (tmp$.hasNext()) {
              var child = tmp$.next();
              child.enabledButton = false;
            }

            this.exceptionState_0 = 3;
            var injects_0 = [];
            var time_0;
            var transition_0;
            if (time_0 === void 0) {
              time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
            }

            if (transition_0 === void 0)
              transition_0 = scene.AlphaTransition;
            this.state_0 = 1;
            this.result_0 = $receiver.changeTo_oszfv1$(getKClass(EyeTrackingScene), injects_0.slice(), time_0, transition_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.result_0;
            this.exceptionState_0 = 5;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.finallyPath_0 = [5];
            this.state_0 = 4;
            continue;
          case 4:
            var $receiver_1 = this.local$$this.buttonContainer.children;
            var destination_0 = ArrayList_init();
            var tmp$_2;
            tmp$_2 = $receiver_1.iterator();
            while (tmp$_2.hasNext()) {
              var element_0 = tmp$_2.next();
              if (Kotlin.isType(element_0, Button))
                destination_0.add_11rb$(element_0);
            }

            tmp$_0 = destination_0.iterator();
            while (tmp$_0.hasNext()) {
              var child_0 = tmp$_0.next();
              child_0.enabledButton = true;
            }

            this.state_0 = this.finallyPath_0.shift();
            continue;
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
  function MyScene$sceneInit$lambda_1(closure$mySceneContainer_0, this$MyScene_0) {
    return function (continuation_0, suspended) {
      var instance = new Coroutine$MyScene$sceneInit$lambda_1(closure$mySceneContainer_0, this$MyScene_0, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$MyScene$sceneInit$lambda_1(closure$mySceneContainer_0, this$MyScene_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.local$closure$mySceneContainer = closure$mySceneContainer_0;
    this.local$this$MyScene = this$MyScene_0;
    this.local$$this = void 0;
  }
  Coroutine$MyScene$sceneInit$lambda_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$MyScene$sceneInit$lambda_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$MyScene$sceneInit$lambda_1.prototype.constructor = Coroutine$MyScene$sceneInit$lambda_1;
  Coroutine$MyScene$sceneInit$lambda_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$$this = this.local$this$MyScene;
            var $receiver = this.local$closure$mySceneContainer;
            var tmp$, tmp$_0;
            var $receiver_0 = this.local$$this.buttonContainer.children;
            var destination = ArrayList_init();
            var tmp$_1;
            tmp$_1 = $receiver_0.iterator();
            while (tmp$_1.hasNext()) {
              var element = tmp$_1.next();
              if (Kotlin.isType(element, Button))
                destination.add_11rb$(element);
            }

            tmp$ = destination.iterator();
            while (tmp$.hasNext()) {
              var child = tmp$.next();
              child.enabledButton = false;
            }

            this.exceptionState_0 = 3;
            var injects_0 = [];
            var time_0;
            var transition_0;
            if (time_0 === void 0) {
              time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
            }

            if (transition_0 === void 0)
              transition_0 = scene.AlphaTransition;
            this.state_0 = 1;
            this.result_0 = $receiver.changeTo_oszfv1$(getKClass(SkinChangingScene), injects_0.slice(), time_0, transition_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.result_0;
            this.exceptionState_0 = 5;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            continue;
          case 2:
            return this.result_0;
          case 3:
            this.finallyPath_0 = [5];
            this.state_0 = 4;
            continue;
          case 4:
            var $receiver_1 = this.local$$this.buttonContainer.children;
            var destination_0 = ArrayList_init();
            var tmp$_2;
            tmp$_2 = $receiver_1.iterator();
            while (tmp$_2.hasNext()) {
              var element_0 = tmp$_2.next();
              if (Kotlin.isType(element_0, Button))
                destination_0.add_11rb$(element_0);
            }

            tmp$_0 = destination_0.iterator();
            while (tmp$_0.hasNext()) {
              var child_0 = tmp$_0.next();
              child_0.enabledButton = true;
            }

            this.state_0 = this.finallyPath_0.shift();
            continue;
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
  var SceneContainer_init = $module$korge_js.com.soywiz.korge.scene.SceneContainer;
  var addTo = $module$korge_js.com.soywiz.korge.view.addTo_fct211$;
  function sceneContainer$lambda($receiver) {
    return Unit;
  }
  MyScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneInit_st8p7j$($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$.prototype.constructor = Coroutine$sceneInit_st8p7j$;
  Coroutine$sceneInit_st8p7j$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var $receiver_0 = addTo(new SceneContainer_init(this.$this.views), this.local$$receiver);
            $receiver_0.x = $receiver_0.views.virtualWidth * 0.5;
            $receiver_0.y = $receiver_0.views.virtualHeight * 0.5;
            var mySceneContainer = $receiver_0;
            this.$this.buttonContainer = this.local$$receiver;
            var $receiver = new Button('Hello', MyScene$sceneInit$lambda(mySceneContainer, this.$this));
            var y = this.$this.views.virtualHeight - 48 | 0;
            $receiver.x = numberToDouble(8);
            $receiver.y = numberToDouble(y);
            this.local$$receiver.plusAssign_l5rad2$($receiver);
            var $receiver_1 = new Button('Eye Tracking', MyScene$sceneInit$lambda_0(mySceneContainer, this.$this));
            var y_0 = this.$this.views.virtualHeight - 48 | 0;
            $receiver_1.x = numberToDouble(150);
            $receiver_1.y = numberToDouble(y_0);
            this.local$$receiver.plusAssign_l5rad2$($receiver_1);
            var $receiver_2 = new Button('Skin Changing', MyScene$sceneInit$lambda_1(mySceneContainer, this.$this));
            var y_1 = this.$this.views.virtualHeight - 48 | 0;
            $receiver_2.x = numberToDouble(410);
            $receiver_2.y = numberToDouble(y_1);
            this.local$$receiver.plusAssign_l5rad2$($receiver_2);
            var tmp$, tmp$_0;
            var $receiver_3 = this.$this.buttonContainer.children;
            var destination = ArrayList_init();
            var tmp$_1;
            tmp$_1 = $receiver_3.iterator();
            while (tmp$_1.hasNext()) {
              var element = tmp$_1.next();
              if (Kotlin.isType(element, Button))
                destination.add_11rb$(element);
            }

            tmp$ = destination.iterator();
            while (tmp$.hasNext()) {
              var child = tmp$.next();
              child.enabledButton = false;
            }

            this.exceptionState_0 = 3;
            var injects_0 = [];
            var time_0;
            var transition_0;
            if (time_0 === void 0) {
              time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
            }

            if (transition_0 === void 0)
              transition_0 = scene.AlphaTransition;
            this.state_0 = 1;
            this.result_0 = mySceneContainer.changeTo_oszfv1$(getKClass(HelloWorldScene), injects_0.slice(), time_0, transition_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.result_0;
            this.exceptionState_0 = 5;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            continue;
          case 2:
            return;
          case 3:
            this.finallyPath_0 = [5];
            this.state_0 = 4;
            continue;
          case 4:
            var $receiver_4 = this.$this.buttonContainer.children;
            var destination_0 = ArrayList_init();
            var tmp$_2;
            tmp$_2 = $receiver_4.iterator();
            while (tmp$_2.hasNext()) {
              var element_0 = tmp$_2.next();
              if (Kotlin.isType(element_0, Button))
                destination_0.add_11rb$(element_0);
            }

            tmp$_0 = destination_0.iterator();
            while (tmp$_0.hasNext()) {
              var child_0 = tmp$_0.next();
              child_0.enabledButton = true;
            }

            this.state_0 = this.finallyPath_0.shift();
            continue;
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
  MyScene.prototype.changeToDisablingButtons_h1ksqu$ = function (T_0, isT, $receiver, continuation, suspended) {
    var instance = new Coroutine$changeToDisablingButtons_h1ksqu$(this, T_0, isT, $receiver, continuation);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$changeToDisablingButtons_h1ksqu$($this, T_0, isT, $receiver, continuation) {
    CoroutineImpl.call(this, continuation);
    this.exceptionState_0 = 5;
    this.$this = $this;
    this.local$T_0 = T_0;
    this.local$$receiver = $receiver;
  }
  Coroutine$changeToDisablingButtons_h1ksqu$.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$changeToDisablingButtons_h1ksqu$.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$changeToDisablingButtons_h1ksqu$.prototype.constructor = Coroutine$changeToDisablingButtons_h1ksqu$;
  Coroutine$changeToDisablingButtons_h1ksqu$.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$_1, tmp$_2;
            var $receiver = this.$this.buttonContainer.children;
            var destination = ArrayList_init();
            var tmp$_1;
            tmp$_1 = $receiver.iterator();
            while (tmp$_1.hasNext()) {
              var element = tmp$_1.next();
              if (Kotlin.isType(element, Button))
                destination.add_11rb$(element);
            }

            tmp$_1 = destination.iterator();
            while (tmp$_1.hasNext()) {
              var child_1 = tmp$_1.next();
              child_1.enabledButton = false;
            }

            this.exceptionState_0 = 3;
            var injects_0 = [];
            var time_0;
            var transition_0;
            if (time_0 === void 0) {
              time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
            }

            if (transition_0 === void 0)
              transition_0 = scene.AlphaTransition;
            this.state_0 = 1;
            this.result_0 = this.local$$receiver.changeTo_oszfv1$(getKClass(this.local$T_0), injects_0.slice(), time_0, transition_0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            this.result_0;
            this.exceptionState_0 = 5;
            this.finallyPath_0 = [2];
            this.state_0 = 4;
            continue;
          case 2:
            return;
          case 3:
            this.finallyPath_0 = [5];
            this.state_0 = 4;
            continue;
          case 4:
            var $receiver_0 = this.$this.buttonContainer.children;
            var destination_0 = ArrayList_init();
            var tmp$_2;
            tmp$_2 = $receiver_0.iterator();
            while (tmp$_2.hasNext()) {
              var element_0 = tmp$_2.next();
              if (Kotlin.isType(element_0, Button))
                destination_0.add_11rb$(element_0);
            }

            tmp$_2 = destination_0.iterator();
            while (tmp$_2.hasNext()) {
              var child_2 = tmp$_2.next();
              child_2.enabledButton = true;
            }

            this.state_0 = this.finallyPath_0.shift();
            continue;
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
  defineInlineFunction('game.example2.MyScene.changeToDisablingButtons_h1ksqu$', wrapFunction(function () {
    var Button = _.example2.Button;
    var ArrayList_init = Kotlin.kotlin.collections.ArrayList_init_287e2$;
    var scene = _.$$importsForInline$$['korge-js'].com.soywiz.korge.scene;
    var getKClass = Kotlin.getKClass;
    var TimeSpan = _.$$importsForInline$$['korge-js'].$$importsForInline$$['klock-js'].com.soywiz.klock.TimeSpan;
    var numberToDouble = Kotlin.numberToDouble;
    var numberToInt = Kotlin.numberToInt;
    return function (T_0, isT, $receiver, continuation) {
      var tmp$_1, tmp$_2;
      var $receiver_1 = this.buttonContainer.children;
      var destination = ArrayList_init();
      var tmp$_3;
      tmp$_3 = $receiver_1.iterator();
      while (tmp$_3.hasNext()) {
        var element = tmp$_3.next();
        if (Kotlin.isType(element, Button))
          destination.add_11rb$(element);
      }
      tmp$_1 = destination.iterator();
      while (tmp$_1.hasNext()) {
        var child_1 = tmp$_1.next();
        child_1.enabledButton = false;
      }
      try {
        var injects_0 = [];
        var time_0;
        var transition_0;
        if (time_0 === void 0) {
          time_0 = TimeSpan.Companion.fromMilliseconds_za3lpa$(numberToInt(numberToDouble(0) * 1000.0));
        }
        if (transition_0 === void 0)
          transition_0 = scene.AlphaTransition;
        Kotlin.suspendCall($receiver.changeTo_oszfv1$(getKClass(T_0), injects_0.slice(), time_0, transition_0, Kotlin.coroutineReceiver()));
        Kotlin.coroutineResult(Kotlin.coroutineReceiver());
      }
      finally {
        var $receiver_2 = this.buttonContainer.children;
        var destination_0 = ArrayList_init();
        var tmp$_4;
        tmp$_4 = $receiver_2.iterator();
        while (tmp$_4.hasNext()) {
          var element_0 = tmp$_4.next();
          if (Kotlin.isType(element_0, Button))
            destination_0.add_11rb$(element_0);
        }
        tmp$_2 = destination_0.iterator();
        while (tmp$_2.hasNext()) {
          var child_2 = tmp$_2.next();
          child_2.enabledButton = true;
        }
      }
    };
  }));
  MyScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'MyScene',
    interfaces: [Scene]
  };
  var get_mouse = $module$korge_js.com.soywiz.korge.input.get_mouse_gohfi1$;
  var get_KorgeDispatcher = $module$korge_js.com.soywiz.korge.async.get_KorgeDispatcher;
  var addSuspend = $module$korge_js.$$importsForInline$$['korio-js'].com.soywiz.korio.async.addSuspend_w4tsgb$;
  function Button(text, handler) {
    Container.call(this);
    this.textField = Text.Companion.invoke_fnvenn$(text, 32.0);
    this.bounds_0 = this.textField.textBounds;
    var $receiver = new Graphics();
    var color_0 = color.Colors.DARKGREY;
    $receiver.beginFill_kzd6w3$(color_0, numberToDouble(0.7));
    try {
      $receiver.drawRoundRect_15yvbs$(this.bounds_0.x, this.bounds_0.y, this.bounds_0.width + 16, this.bounds_0.height + 16, 8.0, 8.0);
    }
    finally {
      $receiver.endFill();
    }
    this.g = $receiver;
    this.enabledButton_w48cjh$_0 = true;
    this.overButton_8q58o2$_0 = false;
    var $receiver_0 = this.g;
    $receiver_0.mouseEnabled = true;
    this.plusAssign_l5rad2$($receiver_0);
    var $receiver_1 = this.textField;
    $receiver_1.x = numberToDouble(8);
    $receiver_1.y = numberToDouble(8);
    this.plusAssign_l5rad2$($receiver_1);
    var $receiver_2 = get_mouse(this);
    $receiver_2.over.invoke_qlkmfe$(Button_init$lambda$lambda(this));
    $receiver_2.out.invoke_qlkmfe$(Button_init$lambda$lambda_0(this));
    var tmp$, tmp$_0;
    (tmp$_0 = (tmp$ = this != null ? get_mouse(this) : null) != null ? tmp$.onClick : null) != null ? addSuspend(tmp$_0, get_KorgeDispatcher(), Button_init$lambda(this, handler)) : null;
    this.updateState();
  }
  Object.defineProperty(Button.prototype, 'enabledButton', {
    get: function () {
      return this.enabledButton_w48cjh$_0;
    },
    set: function (value) {
      this.enabledButton_w48cjh$_0 = value;
      this.updateState();
    }
  });
  Object.defineProperty(Button.prototype, 'overButton_0', {
    get: function () {
      return this.overButton_8q58o2$_0;
    },
    set: function (value) {
      this.overButton_8q58o2$_0 = value;
      this.updateState();
    }
  });
  Button.prototype.updateState = function () {
    if (!this.enabledButton)
      this.alpha = 0.3;
    else if (this.overButton_0)
      this.alpha = 1.0;
    else
      this.alpha = 0.8;
  };
  function Button_init$lambda$lambda(this$Button) {
    return function (it) {
      this$Button.overButton_0 = true;
      return Unit;
    };
  }
  function Button_init$lambda$lambda_0(this$Button) {
    return function (it) {
      this$Button.overButton_0 = false;
      return Unit;
    };
  }
  function Button_init$lambda(this$Button_0, closure$handler_0) {
    return function (it, continuation_0, suspended) {
      var instance = new Coroutine$Button_init$lambda(this$Button_0, closure$handler_0, it, continuation_0);
      if (suspended)
        return instance;
      else
        return instance.doResume(null);
    };
  }
  function Coroutine$Button_init$lambda(this$Button_0, closure$handler_0, it, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.local$this$Button = this$Button_0;
    this.local$closure$handler = closure$handler_0;
  }
  Coroutine$Button_init$lambda.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$Button_init$lambda.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$Button_init$lambda.prototype.constructor = Coroutine$Button_init$lambda;
  Coroutine$Button_init$lambda.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            if (this.local$this$Button.enabledButton) {
              this.state_0 = 2;
              this.result_0 = this.local$closure$handler(this);
              if (this.result_0 === COROUTINE_SUSPENDED)
                return COROUTINE_SUSPENDED;
              continue;
            }
             else {
              this.state_0 = 3;
              continue;
            }

          case 1:
            throw this.exception_0;
          case 2:
            return Unit;
          case 3:
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
  Button.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Button',
    interfaces: [Container]
  };
  function HelloWorldScene() {
    BaseDbScene.call(this);
    this.SCALE = 1.6;
  }
  HelloWorldScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_0(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneInit_st8p7j$_0($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_0.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_0.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_0.prototype.constructor = Coroutine$sceneInit_st8p7j$_0;
  Coroutine$sceneInit_st8p7j$_0.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$tmp$_0 = this.$this.factory;
            this.local$tmp$ = json.Json;
            this.state_0 = 2;
            this.result_0 = this.$this.resources.get_61zpoe$('mecha_1002_101d_show/mecha_1002_101d_show_ske.json').readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var data = this.local$tmp$_0.parseDragonBonesData_md6wsg$(ensureNotNull(this.local$tmp$.parse_61zpoe$(this.result_0)));
            this.local$tmp$_3 = this.$this.factory;
            this.local$tmp$_1 = json.Json;
            this.state_0 = 3;
            this.result_0 = this.$this.resources.get_61zpoe$('mecha_1002_101d_show/mecha_1002_101d_show_tex.json').readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_2 = ensureNotNull(this.local$tmp$_1.parse_61zpoe$(this.result_0));
            this.state_0 = 4;
            this.result_0 = readBitmapOptimized(this.$this.resources.get_61zpoe$('mecha_1002_101d_show/mecha_1002_101d_show_tex.png'), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var atlas = this.local$tmp$_3.parseTextureAtlasData_go2jhv$(this.local$tmp$_2, this.result_0);
            var $receiver = ensureNotNull(this.$this.factory.buildArmatureDisplay_w74nik$('mecha_1002_101d'));
            $receiver.x = numberToDouble(0);
            $receiver.y = numberToDouble(300);
            var sx = this.$this.SCALE;
            $receiver.scaleX = numberToDouble(sx);
            $receiver.scaleY = numberToDouble(sx);
            var armatureDisplay = $receiver;
            println(armatureDisplay.animation.animationNames);
            armatureDisplay.animation.play_9d67ql$('idle');
            this.local$$receiver.plusAssign_l5rad2$(armatureDisplay);
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
  HelloWorldScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'HelloWorldScene',
    interfaces: [BaseDbScene]
  };
  function ClassicDragonScene() {
    BaseDbScene.call(this);
  }
  ClassicDragonScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_1(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneInit_st8p7j$_1($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$scale = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_1.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_1.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_1.prototype.constructor = Coroutine$sceneInit_st8p7j$_1;
  Coroutine$sceneInit_st8p7j$_1.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$scale = 0.8;
            this.local$tmp$_0 = this.$this.factory;
            this.local$tmp$ = json.Json;
            this.state_0 = 2;
            this.result_0 = this.$this.resources.get_61zpoe$('Dragon/Dragon_ske.json').readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            var data = this.local$tmp$_0.parseDragonBonesData_md6wsg$(ensureNotNull(this.local$tmp$.parse_61zpoe$(this.result_0)));
            this.local$tmp$_3 = this.$this.factory;
            this.local$tmp$_1 = json.Json;
            this.state_0 = 3;
            this.result_0 = this.$this.resources.get_61zpoe$('Dragon/Dragon_tex.json').readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_2 = ensureNotNull(this.local$tmp$_1.parse_61zpoe$(this.result_0));
            this.state_0 = 4;
            this.result_0 = readBitmapOptimized(this.$this.resources.get_61zpoe$('Dragon/Dragon_tex.png'), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var atlas = this.local$tmp$_3.parseTextureAtlasData_go2jhv$(this.local$tmp$_2, this.result_0);
            var $receiver = ensureNotNull(this.$this.factory.buildArmatureDisplay_w74nik$('Dragon', 'Dragon'));
            $receiver.x = numberToDouble(0);
            $receiver.y = numberToDouble(200);
            $receiver.scaleX = numberToDouble(this.local$scale);
            $receiver.scaleY = numberToDouble(this.local$scale);
            var armatureDisplay = $receiver;
            armatureDisplay.animation.play_9d67ql$('walk');
            println(armatureDisplay.animation.animationNames);
            this.local$$receiver.plusAssign_l5rad2$(armatureDisplay);
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
  ClassicDragonScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'ClassicDragonScene',
    interfaces: [BaseDbScene]
  };
  function EyeTrackingScene() {
    BaseDbScene.call(this);
    this.scale = 0.46;
    this.totalTime = 0.0;
  }
  function EyeTrackingScene$sceneInit$lambda$lambda(this$EyeTrackingScene, this$sceneInit, closure$armatureDisplay, closure$target) {
    return function (it) {
      closure$target.x = (this$sceneInit.localMouseX_gohfjx$(this$EyeTrackingScene.views) - closure$armatureDisplay.x) / this$EyeTrackingScene.scale;
      closure$target.y = (this$sceneInit.localMouseY_gohfjx$(this$EyeTrackingScene.views) - closure$armatureDisplay.y) / this$EyeTrackingScene.scale;
      return Unit;
    };
  }
  var Math_0 = Math;
  function EyeTrackingScene$sceneInit$lambda(this$EyeTrackingScene, closure$armatureDisplay, closure$target, closure$_animationNames) {
    return function (it) {
      var tmp$;
      this$EyeTrackingScene.totalTime += it;
      var armature = closure$armatureDisplay.armature;
      var animation = closure$armatureDisplay.animation;
      var canvas = ensureNotNull(armature.armatureData.canvas);
      var p = 0.0;
      var a = (closure$target.x - canvas.x) / (canvas.width * 0.5);
      var a_0 = Math_0.min(a, 1.0);
      var b = -1.0;
      var pX = Math_0.max(a_0, b);
      var a_1 = (closure$target.y - canvas.y) / (canvas.height * 0.5);
      var a_2 = Math_0.min(a_1, 1.0);
      var b_0 = -1.0;
      var pY = -Math_0.max(a_2, b_0);
      tmp$ = closure$_animationNames.iterator();
      while (tmp$.hasNext()) {
        var animationName = tmp$.next();
        if (!animation.hasAnimation_61zpoe$(animationName)) {
          continue;
        }
        var animationState = animation.getState_bm4lxs$(animationName, 1);
        if (animationState == null) {
          animationState = animation.fadeIn_qtlk36$(animationName, 0.1, 1, 1, animationName);
          if (animationState != null) {
            animationState.resetToPose = false;
            animationState.stop();
          }
        }
        if (animationState == null) {
          continue;
        }
        switch (animationName) {
          case 'PARAM_ANGLE_X':
          case 'PARAM_EYE_BALL_X':
            p = (pX + 1.0) * 0.5;
            break;
          case 'PARAM_ANGLE_Y':
          case 'PARAM_EYE_BALL_Y':
            p = (pY + 1.0) * 0.5;
            break;
          case 'PARAM_ANGLE_Z':
            p = (-pX * pY + 1.0) * 0.5;
            break;
          case 'PARAM_BODY_X':
          case 'PARAM_BODY_ANGLE_X':
            p = (pX + 1.0) * 0.5;
            break;
          case 'PARAM_BODY_Y':
          case 'PARAM_BODY_ANGLE_Y':
            p = (-pX * pY + 1.0) * 0.5;
            break;
          case 'PARAM_BODY_Z':
          case 'PARAM_BODY_ANGLE_Z':
            p = (-pX * pY + 1.0) * 0.5;
            break;
          case 'PARAM_BREATH':
            var x = this$EyeTrackingScene.totalTime / 1000.0;
            p = (Math_0.sin(x) + 1.0) * 0.5;
            break;
        }
        animationState.currentTime = p * animationState.totalTime;
      }
      return Unit;
    };
  }
  EyeTrackingScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_2(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneInit_st8p7j$_2($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$tmp$_4 = void 0;
    this.local$_animationNames = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_2.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_2.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_2.prototype.constructor = Coroutine$sceneInit_st8p7j$_2;
  Coroutine$sceneInit_st8p7j$_2.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            this.local$_animationNames = listOf(['PARAM_ANGLE_X', 'PARAM_ANGLE_Y', 'PARAM_ANGLE_Z', 'PARAM_EYE_BALL_X', 'PARAM_EYE_BALL_Y', 'PARAM_BODY_X', 'PARAM_BODY_Y', 'PARAM_BODY_Z', 'PARAM_BODY_ANGLE_X', 'PARAM_BODY_ANGLE_Y', 'PARAM_BODY_ANGLE_Z', 'PARAM_BREATH']);
            this.local$tmp$_0 = this.$this.factory;
            this.local$tmp$ = json.Json;
            this.state_0 = 2;
            this.result_0 = this.$this.resources.get_61zpoe$('shizuku/shizuku_ske.json').readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0.parseDragonBonesData_md6wsg$(ensureNotNull(this.local$tmp$.parse_61zpoe$(this.result_0)), 'shizuku');
            this.local$tmp$_4 = this.$this.factory;
            this.state_0 = 3;
            this.result_0 = readBitmapOptimized(this.$this.resources.get_61zpoe$('shizuku/shizuku.1024/texture_00.png'), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_1 = mipmaps(this.result_0);
            this.state_0 = 4;
            this.result_0 = readBitmapOptimized(this.$this.resources.get_61zpoe$('shizuku/shizuku.1024/texture_01.png'), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            this.local$tmp$_2 = mipmaps(this.result_0);
            this.state_0 = 5;
            this.result_0 = readBitmapOptimized(this.$this.resources.get_61zpoe$('shizuku/shizuku.1024/texture_02.png'), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 5:
            this.local$tmp$_3 = mipmaps(this.result_0);
            this.state_0 = 6;
            this.result_0 = readBitmapOptimized(this.$this.resources.get_61zpoe$('shizuku/shizuku.1024/texture_03.png'), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 6:
            this.local$tmp$_4.updateTextureAtlases_3r0dep$([this.local$tmp$_1, this.local$tmp$_2, this.local$tmp$_3, mipmaps(this.result_0)], 'shizuku');
            var $receiver = ensureNotNull(this.$this.factory.buildArmatureDisplay_w74nik$('shizuku', 'shizuku'));
            $receiver.x = numberToDouble(0);
            $receiver.y = numberToDouble(300);
            var sx = this.$this.scale;
            $receiver.scaleX = numberToDouble(sx);
            $receiver.scaleY = numberToDouble(sx);
            var armatureDisplay = $receiver;
            this.local$$receiver.plusAssign_l5rad2$(armatureDisplay);
            println(armatureDisplay.animation.animationNames);
            armatureDisplay.animation.play_9d67ql$('idle_00');
            var target = new MVector2();
            get_mouse(this.local$$receiver).moveAnywhere.invoke_qlkmfe$(EyeTrackingScene$sceneInit$lambda$lambda(this.$this, this.local$$receiver, armatureDisplay, target));
            this.local$$receiver.addUpdatable_b4k9x1$(EyeTrackingScene$sceneInit$lambda(this.$this, armatureDisplay, target, this.local$_animationNames));
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
  EyeTrackingScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'EyeTrackingScene',
    interfaces: [BaseDbScene]
  };
  function SkinChangingScene() {
    BaseDbScene.call(this);
    this.SCALE = 0.42;
    this.random = Rand.Companion.invoke();
  }
  function SkinChangingScene$sceneInit$lambda(this$SkinChangingScene, closure$armatureDisplay) {
    return function (it) {
      var nextAnimationName = get_0(this$SkinChangingScene.random, closure$armatureDisplay.animation.animationNames);
      closure$armatureDisplay.animation.fadeIn_qtlk36$(nextAnimationName, 0.3, 0);
      return Unit;
    };
  }
  function SkinChangingScene$sceneInit$lambda$lambda(closure$_replaceSuitParts, closure$_replaceSuitIndex, closure$suitConfigs, this$SkinChangingScene, closure$armatureDisplay) {
    return function (it) {
      var tmp$, tmp$_0;
      if (closure$_replaceSuitParts.size === 0) {
        tmp$ = closure$_replaceSuitIndex.v;
        closure$_replaceSuitIndex.v = tmp$ + 1 | 0;
        if (closure$_replaceSuitIndex.v >= closure$suitConfigs.size) {
          closure$_replaceSuitIndex.v = 0;
        }
        tmp$_0 = closure$suitConfigs.get_za3lpa$(closure$_replaceSuitIndex.v).iterator();
        while (tmp$_0.hasNext()) {
          var partArmatureName = tmp$_0.next();
          closure$_replaceSuitParts.add_11rb$(partArmatureName);
        }
      }
      var x = nextDouble(this$SkinChangingScene.random) * closure$_replaceSuitParts.size;
      var partIndex = numberToInt(Math_0.floor(x));
      var partArmatureName_0 = closure$_replaceSuitParts.get_za3lpa$(partIndex);
      var partArmatureData = this$SkinChangingScene.factory.getArmatureData_puj7f4$(partArmatureName_0);
      this$SkinChangingScene.factory.replaceSkin_s4r90c$(closure$armatureDisplay.armature, ensureNotNull(ensureNotNull(partArmatureData).defaultSkin));
      splice(closure$_replaceSuitParts, partIndex, 1, []);
      return Unit;
    };
  }
  SkinChangingScene.prototype.sceneInit_st8p7j$ = function ($receiver_0, continuation_0, suspended) {
    var instance = new Coroutine$sceneInit_st8p7j$_3(this, $receiver_0, continuation_0);
    if (suspended)
      return instance;
    else
      return instance.doResume(null);
  };
  function Coroutine$sceneInit_st8p7j$_3($this, $receiver_0, continuation_0) {
    CoroutineImpl.call(this, continuation_0);
    this.exceptionState_0 = 1;
    this.$this = $this;
    this.local$tmp$ = void 0;
    this.local$tmp$_0 = void 0;
    this.local$tmp$_1 = void 0;
    this.local$tmp$_2 = void 0;
    this.local$tmp$_3 = void 0;
    this.local$suitConfigs = void 0;
    this.local$i = void 0;
    this.local$tmp$_5 = void 0;
    this.local$tmp$_6 = void 0;
    this.local$tmp$_7 = void 0;
    this.local$tmp$_8 = void 0;
    this.local$tmp$_9 = void 0;
    this.local$tmp$_10 = void 0;
    this.local$tmp$_11 = void 0;
    this.local$textureAtlasJSONPath = void 0;
    this.local$textureAtlasPath = void 0;
    this.local$$receiver = $receiver_0;
  }
  Coroutine$sceneInit_st8p7j$_3.$metadata$ = {
    kind: Kotlin.Kind.CLASS,
    simpleName: null,
    interfaces: [CoroutineImpl]
  };
  Coroutine$sceneInit_st8p7j$_3.prototype = Object.create(CoroutineImpl.prototype);
  Coroutine$sceneInit_st8p7j$_3.prototype.constructor = Coroutine$sceneInit_st8p7j$_3;
  Coroutine$sceneInit_st8p7j$_3.prototype.doResume = function () {
    do
      try {
        switch (this.state_0) {
          case 0:
            var tmp$;
            this.local$suitConfigs = listOf([listOf(['2010600a', '2010600a_1', '20208003', '20208003_1', '20208003_2', '20208003_3', '20405006', '20509005', '20703016', '20703016_1', '2080100c', '2080100e', '2080100e_1', '20803005', '2080500b', '2080500b_1']), listOf(['20106010', '20106010_1', '20208006', '20208006_1', '20208006_2', '20208006_3', '2040600b', '2040600b_1', '20509007', '20703020', '20703020_1', '2080b003', '20801015'])]);
            this.local$tmp$_0 = this.$this.factory;
            this.local$tmp$ = json.Json;
            this.state_0 = 2;
            this.result_0 = this.$this.resources.get_61zpoe$('you_xin/body/body_ske.json').readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 1:
            throw this.exception_0;
          case 2:
            this.local$tmp$_0.parseDragonBonesData_md6wsg$(ensureNotNull(this.local$tmp$.parse_61zpoe$(this.result_0)));
            this.local$tmp$_3 = this.$this.factory;
            this.local$tmp$_1 = json.Json;
            this.state_0 = 3;
            this.result_0 = this.$this.resources.get_61zpoe$('you_xin/body/body_tex.json').readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 3:
            this.local$tmp$_2 = ensureNotNull(this.local$tmp$_1.parse_61zpoe$(this.result_0));
            this.state_0 = 4;
            this.result_0 = readBitmapOptimized(this.$this.resources.get_61zpoe$('you_xin/body/body_tex.png'), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 4:
            var atlas = this.local$tmp$_3.parseTextureAtlasData_go2jhv$(this.local$tmp$_2, this.result_0);
            this.local$i = 0;
            this.local$tmp$_5 = this.local$suitConfigs.iterator();
            this.state_0 = 5;
            continue;
          case 5:
            if (!this.local$tmp$_5.hasNext()) {
              this.state_0 = 12;
              continue;
            }

            var suitConfig = this.local$tmp$_5.next();
            this.local$tmp$_6 = suitConfig.iterator();
            this.state_0 = 6;
            continue;
          case 6:
            if (!this.local$tmp$_6.hasNext()) {
              this.state_0 = 10;
              continue;
            }

            var partArmatureName = this.local$tmp$_6.next();
            var path = 'you_xin/' + 'suit' + toString(this.local$i + 1 | 0) + '/' + partArmatureName + '/' + partArmatureName;
            var dragonBonesJSONPath = path + '_ske.json';
            this.local$textureAtlasJSONPath = path + '_tex.json';
            this.local$textureAtlasPath = path + '_tex.png';
            this.local$tmp$_8 = this.$this.factory;
            this.local$tmp$_7 = json.Json;
            this.state_0 = 7;
            this.result_0 = this.$this.resources.get_61zpoe$(dragonBonesJSONPath).readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 7:
            this.local$tmp$_8.parseDragonBonesData_md6wsg$(ensureNotNull(this.local$tmp$_7.parse_61zpoe$(this.result_0)));
            this.local$tmp$_11 = this.$this.factory;
            this.local$tmp$_9 = json.Json;
            this.state_0 = 8;
            this.result_0 = this.$this.resources.get_61zpoe$(this.local$textureAtlasJSONPath).readString_qa9gbo$(void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 8:
            this.local$tmp$_10 = ensureNotNull(this.local$tmp$_9.parse_61zpoe$(this.result_0));
            this.state_0 = 9;
            this.result_0 = readBitmapOptimized(this.$this.resources.get_61zpoe$(this.local$textureAtlasPath), void 0, this);
            if (this.result_0 === COROUTINE_SUSPENDED)
              return COROUTINE_SUSPENDED;
            continue;
          case 9:
            this.local$tmp$_11.parseTextureAtlasData_go2jhv$(this.local$tmp$_10, this.result_0);
            this.state_0 = 6;
            continue;
          case 10:
            this.state_0 = 11;
            continue;
          case 11:
            ++this.local$i;
            this.state_0 = 5;
            continue;
          case 12:
            var $receiver = ensureNotNull(this.$this.factory.buildArmatureDisplay_w74nik$('body'));
            $receiver.x = numberToDouble(0);
            $receiver.y = numberToDouble(360);
            var sx = this.$this.SCALE;
            $receiver.scaleX = numberToDouble(sx);
            $receiver.scaleY = numberToDouble(sx);
            var armatureDisplay = $receiver;
            this.local$$receiver.plusAssign_l5rad2$(armatureDisplay);
            println(armatureDisplay.animation.animationNames);
            armatureDisplay.on_x4mc7b$(EventObject.Companion.LOOP_COMPLETE, SkinChangingScene$sceneInit$lambda(this.$this, armatureDisplay));
            armatureDisplay.animation.play_9d67ql$('idle', 0);
            tmp$ = this.local$suitConfigs.get_za3lpa$(0).iterator();
            while (tmp$.hasNext()) {
              var part = tmp$.next();
              var partArmatureData = this.$this.factory.getArmatureData_puj7f4$(part);
              this.$this.factory.replaceSkin_s4r90c$(armatureDisplay.armature, ensureNotNull(ensureNotNull(partArmatureData).defaultSkin));
            }

            var _replaceSuitParts = ArrayList_init();
            var _replaceSuitIndex = {v: 0};
            get_mouse(this.local$$receiver).onUpAnywhere.invoke_qlkmfe$(SkinChangingScene$sceneInit$lambda$lambda(_replaceSuitParts, _replaceSuitIndex, this.local$suitConfigs, this.$this, armatureDisplay));
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
  SkinChangingScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'SkinChangingScene',
    interfaces: [BaseDbScene]
  };
  function BaseDbScene() {
    Scene.call(this);
    this.resources = std.ResourcesVfs;
    this.factory = new KorgeDbFactory();
  }
  BaseDbScene.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'BaseDbScene',
    interfaces: [Scene]
  };
  var package$example2 = _.example2 || (_.example2 = {});
  package$example2.main_kand9s$ = main;
  $$importsForInline$$['korinject-js'] = $module$korinject_js;
  Object.defineProperty(package$example2, 'MyModule', {
    get: MyModule_getInstance
  });
  $$importsForInline$$['korge-js'] = $module$korge_js;
  $$importsForInline$$.game = _;
  package$example2.Button = Button;
  package$example2.MyScene = MyScene;
  package$example2.HelloWorldScene = HelloWorldScene;
  package$example2.ClassicDragonScene = ClassicDragonScene;
  package$example2.EyeTrackingScene = EyeTrackingScene;
  package$example2.SkinChangingScene = SkinChangingScene;
  package$example2.BaseDbScene = BaseDbScene;
  main([]);
  Kotlin.defineModule('game', _);
  return _;
}));
