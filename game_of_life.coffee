exports.Grid = class Grid
  constructor: (@grid) ->

  grid: -> @grid

  find_neighbors: (x, y) ->
    sum = 0
    for mod_x in [-1, 0, 1] when @grid[x + mod_x]?
      for mod_y in [-1, 0, 1] when @grid[y + mod_y]?
        sum += @grid[x + mod_x][y + mod_y]
    sum -= @grid[x][y]

  should_live: (x, y) ->
    neighbors = @find_neighbors x, y
    neighbors == 3 || (neighbors == 2 && @grid[x][y] == 1)
    
  step: (grid) ->
    new_grid = []
    for x in [0...@grid.length]
      new_grid[x] = []
      for y in [0...@grid[x].length]
        new_grid[x][y] = if @should_live(x, y) then 1 else 0
    new Grid(new_grid)
