(function() {
  var Snake;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  Snake = (function() {
    __extends(Snake, Animal);
    function Snake(noise) {
      this.noise = noise;
      Snake.__super__.constructor.call(this, this.animal);
      Animal.prototype.noise();
    }
    return Snake;
  })();
}).call(this);
