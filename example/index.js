// Generated by CoffeeScript 1.10.0
(function() {
  "use strict";
  var Phaser;

  Phaser = this.Phaser;

  window.GAME = new Phaser.Game({
    state: {
      init: function() {},
      preload: function() {
        this.load.baseURL = "http://examples.phaser.io/assets/";
        this.load.crossOrigin = "anonymous";
        this.load.image("backdrop", "pics/remember-me.jpg");
        this.load.image("hotdog", "sprites/hotdog.png");
      },
      create: function() {
        var hotdog, i, len, ref, scale;
        this.world.setBounds(0, 0, 1920, 1200);
        this.camera.focusOnXY(this.world.centerX, 0);
        if (!this.gameGuiPlugin) {
          this.gameGuiPlugin = this.game.plugins.add(Phaser.Plugin.GameGui, {
            width: 400
          });
        }
        this.add.image(0, 0, "backdrop");
        this.hotdogs = this.add.physicsGroup();
        ref = this.hotdogs.createMultiple(10, "hotdog", 0, true);
        for (i = 0, len = ref.length; i < len; i++) {
          hotdog = ref[i];
          hotdog.position.set(this.world.randomX, this.world.randomY);
          scale = this.rnd.realInRange(0.25, 0.75);
          hotdog.scale.set(scale);
          hotdog.body.velocity.x = scale * -100;
        }
      },
      update: function() {
        var hotdog, i, len, ref;
        ref = this.hotdogs.children;
        for (i = 0, len = ref.length; i < len; i++) {
          hotdog = ref[i];
          this.world.wrap(hotdog, 230);
        }
      },
      render: function() {},
      shutdown: function() {}
    }
  });

}).call(this);
