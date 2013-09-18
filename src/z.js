/*
 * This file is part of Z Combinator
 *
 * Copyright (c) 2013 Andrew Lawson <http://adlawson.com>
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 *
 * @see  http://github.com/adlawson/z-combinator/blob/master/LICENSE
 * @link http://github.com/adlawson/z-combinator
 */
(function(globals) {

    'use strict';

    /**
     * Build an anonymous function composed of itself
     *
     * @param {Function} fn
     * @return {Function}
     * @api public
     *
     * @example
     *      var factorial = z(function(fn) {
     *          return function(n) {
     *              return 2 >= n ? n : n * fn(n - 1);
     *          };
     *      });
     *
     *      factorial(5);
     *      // => 120
     */
    function z(fn) {
        return (function(recur) {
            return recur(recur);
        })(function(r) {
            return function(x) {
                return fn(r(r))(x);
            }
        });
    };

    if (typeof define === 'function' && define.amd) {
        define(function() {
            return z;
        });
    } else if (typeof module !== 'undefined' && null !== module) {
        module.exports = z;
    } else {
        globals.z = z;
    }

})(this);
