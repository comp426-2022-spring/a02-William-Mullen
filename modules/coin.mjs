/** Coin flip functions 
 * This module will emulate a coin flip given various conditions as parameters as defined below
 */

/** Simple coin flip
 * 
 * Write a function that accepts no parameters but returns either heads or tails at random.
 * 
 * @param {*}
 * @returns {string} 
 * 
 * example: coinFlip()
 * returns: heads
 * 
 */

function coinFlip() {
  let flip = Math.random();
  if (flip < 0.5)
    return "tails"
  return "heads"

}

/** Multiple coin flips
 * 
 * Write a function that accepts one parameter (number of flips) and returns an array of 
 * resulting "heads" or "tails".
 * 
 * @param {number} flips 
 * @returns {string[]} results
 * 
 * example: coinFlips(10)
 * returns:
 *  [
      'heads', 'heads',
      'heads', 'tails',
      'heads', 'tails',
      'tails', 'heads',
      'tails', 'heads'
    ]
 */

function coinFlips(flips) {
  const results = [];
  var i = 0;
  while (i<flips) {
    results[i] = coinFlip();
    i++;
  }
  return results

}
console.log(coinFlips(7))

/** Count multiple flips
 * 
 * Write a function that accepts an array consisting of "heads" or "tails" 
 * (e.g. the results of your `coinFlips()` function) and counts each, returning 
 * an object containing the number of each.
 * 
 * example: conutFlips(['heads', 'heads','heads', 'tails','heads', 'tails','tails', 'heads','tails', 'heads'])
 * { tails: 5, heads: 5 }
 * 
 * @param {string[]} array 
 * @returns {{ heads: number, tails: number }}
 */

function countFlips(array) {
  headsNum = 0;
  tailsNum = 0;
  array.forEach(element => {
    if (element = "heads")
      headsNum++;
    else
      tailsNum++;
  });
  let dict = new Object()
  dict["heads"] = headsNum
  dict["tails"] = tailsNum
  return dict
}

/** Flip a coin!
 * 
 * Write a function that accepts one input parameter: a string either "heads" or "tails", flips a coin, and then records "win" or "lose". 
 * 
 * @param {string} call 
 * @returns {object} with keys that are the input param (heads or tails), a flip (heads or tails), and the result (win or lose). See below example.
 * 
 * example: flipACoin('tails')
 * returns: { call: 'tails', flip: 'heads', result: 'lose' }
 */

function flipACoin(call) {
  let dict = new Object()
  dict["call"] = call
  let flip = coinFlip()
  dict["flip"] = flip
  if (flip == call)
    dict["result"] = "win"
  else 
    dict["result"] = "lose"
  return dict
}


/** Export 
 * 
 * Export all of your named functions
*/
export {coinFlip,flipACoin,countFlips,coinFlips};