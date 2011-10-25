(function() {
  var __slice = Array.prototype.slice;
  (function() {
    var first, rest;
    first = arguments[0], rest = 2 <= arguments.length ? __slice.call(arguments, 1) : [];
    if (first == null) {
      first = 1;
    }
    console.log(first);
    return console.log(rest);
  });
}).call(this);
