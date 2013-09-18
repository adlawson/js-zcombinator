(function() {

    var z = require('../../../src/z');
    var assert = require('chai').assert;

    test('`z` is a function', function() {
        assert.isFunction(z);
    });

    test('`z` contains the contained function', function() {
        var f = function() {
            return 'foo';
        };
        var g = z(function(fn) {
            return f;
        });

        assert.strictEqual(f(), g());
    });

    test('`z` passes the contained function to itself', function() {
        var f = z(function(fn) {
            return function(n) {
                return 0 === n ? n : fn(n - 1);
            };
        });

        assert.strictEqual(0, f(100));
    });

    suite('factorial:', function() {

        var factorial;

        setup(function() {
            factorial = z(function(fn) {
                return function(n) {
                    return 2 >= n ? n : n * fn(n - 1);
                };
            });
        });

        test('`z` can be used to build a function for the factorial of `n`', function() {
            assert.strictEqual(0, factorial(0));
            assert.strictEqual(1, factorial(1));
            assert.strictEqual(2, factorial(2));
            assert.strictEqual(6, factorial(3));
            assert.strictEqual(24, factorial(4));
            assert.strictEqual(120, factorial(5));
            // ...
            assert.strictEqual(3628800, factorial(10));
            // ...
            assert.strictEqual(2432902008176640000, factorial(20));
        });

    });

})();
