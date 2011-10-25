var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
(function() {
  return client.open(__bind(function(err, p_client) {
    return client.collection('worker', add_to_db);
  }, this));
});