
'use strict';

/**
 * Keys
 */

var keys = {
  ctrl: 17,
  control: 17,
  alt: 18,
  option: 18,
  shift: 16,
  esc: 27,
  escape: 27,
  '`': 192,
  '-': 189,
  '=': 187,
  backspace: 8,
  tab: 9,
  '\\': 220,
  '[': 219,
  ']': 221,
  ';': 186,
  '\'': 222,
  enter: 13,
  'return': 13,
  ',': 188,
  '.': 190,
  '/': 191,
  space: 32,
  pause: 19,
  insert: 45,
  'delete': 46,
  home: 36,
  end: 35,
  pageup: 33,
  pagedown: 34,
  left: 37,
  up: 38,
  right: 39,
  down: 40
};

/**
 * Functions
 */

for (var f = 1; f < 20; f++) {
  keys['f' + f] = 111 + f;
}


/**
 * Expose keycodes
 *
 * @param  {String|Number} input
 * @return {Number|String}
 * @api public
 */

module.exports = function(input) {
  if (typeof input === 'string') return code(input);
  if (typeof input === 'number') return key(input);
};

/**
 * Get code
 *
 * @param  {String} input
 * @return {Number}
 * @api private
 */

function code(input) {
  return keys[input.toLowerCase()] || input.toUpperCase().charCodeAt(0);
}

/**
 * Get key
 *
 * @param  {Number} input
 * @return {String}
 * @api private
 */

function key(input) {
  for (var k in keys) {
    if (keys.hasOwnProperty(k)) {
      if (keys[k] === input) return k;
    }
  }

  return String.fromCharCode(input).toLowerCase();
}
