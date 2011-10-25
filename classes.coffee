class Snake extends Animal
  constructor: (@noise) ->
    super @animal
    Animal::noise()
