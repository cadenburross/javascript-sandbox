function convert(celsius) {
  // Only change code below this line
var fahrenheit = 32 + 9/5 * celsius;   

  // Only change code above this line
  if ( typeof fahrenheit !== 'undefined' ) {
    return fahrenheit;
  } else {
    return 'fahrenheit not defined';
  }
}

convert(30);
