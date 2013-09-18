# Z Combinator #

<img src="http://www.threadbombing.com/data/media/67/Recursive_shades.gif" alt="Z Combinator" align="right"/>

**Version:** *0.1.0*<br/>
**Master build:** [![Master branch build status][travis-master]][travis]<br/>
**Develop build:** [![Master branch build status][travis-develop]][travis]<br/>

This library provides a utility function to support the creation of a self referencing anonymous functions.<br/>
It can be installed in whichever way you prefer, but I recommend [NPM][npm].

The Z Combinator is the same, in principle, as the Y Combinator except it works in languages with applicative (eager)
order of execution (arguments are evaluated before the function call) just like JavaScript.

For more information about the Z Combinator please read Douglas Crockford's ["The Little JavaScripter"][little-js].


### Basic usage ###
```js
var z = require('z-combinator');

// Factorial
var factorial = z(function(fn) {
    return function(n) {
        return 2 >= n ? n : n * fn(n - 1);
    }
});

factorial(2) // => 2
factorial(3) // => 6
factorial(4) // => 24
factorial(5) // => 120
```


### Contributing ###
I accept contributions to the source via Pull Request,
but passing unit tests must be included before it will be considered for merge.
```bash
$ make install
$ make tests
```

If you have [Vagrant][vagrant] installed, you can build the dev environment to assist development.
The repository will be mounted in `/srv`.
```bash
$ vagrant up
$ vagrant ssh

Welcome to Ubuntu 12.04 LTS (GNU/Linux 3.2.0-23-generic x86_64)
$ cd /srv
```


### License ###
The content of this library is released under the **MIT License** by **Andrew Lawson**.<br/>
You can find a copy of this license at http://www.opensource.org/licenses/mit or in [`LICENSE`][license]


<!-- Links -->
[travis]:         https://travis-ci.org/adlawson/z-combinator
[travis-master]:  https://travis-ci.org/adlawson/z-combinator.png?branch=master
[travis-develop]: https://travis-ci.org/adlawson/z-combinator.png?branch=develop
[npm]:            https://npmjs.org/package/z-combinator
[vagrant]:        http://vagrantup.com
[license]:        /LICENSE
[little-js]:      http://www.crockford.com/javascript/little.html
