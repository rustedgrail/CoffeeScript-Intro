(function() {
  var printing;
  printing = function() {
    return console.log("Watch this");
  };
  console.log(printing);
  printing();
}).call(this);
