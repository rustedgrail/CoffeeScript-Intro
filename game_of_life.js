(function() {
  var Grid;
  exports.Grid = Grid = (function() {
    function Grid(grid) {
      this.grid = grid;
    }
    Grid.prototype.grid = function() {
      return this.grid;
    };
    Grid.prototype.find_neighbors = function(x, y) {
      var mod_x, mod_y, sum, _i, _j, _len, _len2, _ref, _ref2;
      sum = 0;
      _ref = [-1, 0, 1];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        mod_x = _ref[_i];
        if (this.grid[x + mod_x] != null) {
          _ref2 = [-1, 0, 1];
          for (_j = 0, _len2 = _ref2.length; _j < _len2; _j++) {
            mod_y = _ref2[_j];
            if (this.grid[y + mod_y] != null) {
              sum += this.grid[x + mod_x][y + mod_y];
            }
          }
        }
      }
      return sum -= this.grid[x][y];
    };
    Grid.prototype.should_live = function(x, y) {
      var neighbors;
      neighbors = this.find_neighbors(x, y);
      return neighbors === 3 || (neighbors === 2 && this.grid[x][y] === 1);
    };
    Grid.prototype.step = function(grid) {
      var new_grid, x, y, _ref, _ref2;
      new_grid = [];
      for (x = 0, _ref = this.grid.length; 0 <= _ref ? x < _ref : x > _ref; 0 <= _ref ? x++ : x--) {
        new_grid[x] = [];
        for (y = 0, _ref2 = this.grid[x].length; 0 <= _ref2 ? y < _ref2 : y > _ref2; 0 <= _ref2 ? y++ : y--) {
          new_grid[x][y] = this.should_live(x, y) ? 1 : 0;
        }
      }
      return new Grid(new_grid);
    };
    return Grid;
  })();
}).call(this);
