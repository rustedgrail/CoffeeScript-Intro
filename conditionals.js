(function() {
  if (typeof 5 === 'number') {
    if (5 % 2 !== 1) {
      console.log('5 is odd');
    }
  } else {
    throw '5 is not a number';
  }
}).call(this);
