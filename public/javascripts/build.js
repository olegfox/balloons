/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "public/javascripts";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var $ = __webpack_require__(1);
	__webpack_require__(2);
	__webpack_require__(5);
	__webpack_require__(7);

	var gameProp = {
		    init: function () {
		        game.stage.backgroundColor = '#000000';
				circles = game.add.physicsGroup(Phaser.Physics.ARCADE);
				gameProp.newCircle();
		    },
		    preload: function(){

		    },
		    create: function(){
		        var that = this;
		    },
		    update: function(){
				game.physics.arcade.collide(circles);
		    },
		    render: function() {

		    },
		    newCircle: function(size) {
		    	var size = size || 64;
		    	circle = game.add.graphics(0, 0);
				circle.beginFill(0xFF3300);
				circle.drawCircle(100, 100, size);
				circle.endFill();
				sprite = circles.create(50,50, circle.generateTexture());
				sprite.anchor.set(0.5,0.5);
				sprite.inputEnabled = true;
				sprite.input.enableDrag(true);
				sprite.body.velocity.set(game.rnd.integerInRange(-200, 200), game.rnd.integerInRange(-200, 200));
				circles.setAll('body.collideWorldBounds', true);
				circles.setAll('body.bounce.x', 1);
				circles.setAll('body.bounce.y', 1);
				circle.destroy();
		    }
		},
		game = new Phaser.Game($(window).width(), $(window).height(), 'game', Phaser.AUTO, gameProp),
		circles;

	$(function(){
		$(window).bind('dblclick', function() {
			var size = prompt('Введите размер окружности (px):', '');

			if (size) {
				gameProp.newCircle(parseInt(size));
			}
		});
	});



/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	 * jQuery JavaScript Library v3.0.0
	 * https://jquery.com/
	 *
	 * Includes Sizzle.js
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * https://jquery.org/license
	 *
	 * Date: 2016-06-09T18:02Z
	 */
	( function( global, factory ) {

		"use strict";

		if ( typeof module === "object" && typeof module.exports === "object" ) {

			// For CommonJS and CommonJS-like environments where a proper `window`
			// is present, execute the factory and get jQuery.
			// For environments that do not have a `window` with a `document`
			// (such as Node.js), expose a factory as module.exports.
			// This accentuates the need for the creation of a real `window`.
			// e.g. var jQuery = require("jquery")(window);
			// See ticket #14549 for more info.
			module.exports = global.document ?
				factory( global, true ) :
				function( w ) {
					if ( !w.document ) {
						throw new Error( "jQuery requires a window with a document" );
					}
					return factory( w );
				};
		} else {
			factory( global );
		}

	// Pass this if window is not defined yet
	}( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

	// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
	// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
	// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
	// enough that all such attempts are guarded in a try block.
	"use strict";

	var arr = [];

	var document = window.document;

	var getProto = Object.getPrototypeOf;

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var fnToString = hasOwn.toString;

	var ObjectFunctionString = fnToString.call( Object );

	var support = {};



		function DOMEval( code, doc ) {
			doc = doc || document;

			var script = doc.createElement( "script" );

			script.text = code;
			doc.head.appendChild( script ).parentNode.removeChild( script );
		}


	var
		version = "3.0.0",

		// Define a local copy of jQuery
		jQuery = function( selector, context ) {

			// The jQuery object is actually just the init constructor 'enhanced'
			// Need init if jQuery is called (just allow error to be thrown if not included)
			return new jQuery.fn.init( selector, context );
		},

		// Support: Android <=4.0 only
		// Make sure we trim BOM and NBSP
		rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

		// Matches dashed string for camelizing
		rmsPrefix = /^-ms-/,
		rdashAlpha = /-([a-z])/g,

		// Used by jQuery.camelCase as callback to replace()
		fcamelCase = function( all, letter ) {
			return letter.toUpperCase();
		};

	jQuery.fn = jQuery.prototype = {

		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function() {
			return slice.call( this );
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function( num ) {
			return num != null ?

				// Return just the one element from the set
				( num < 0 ? this[ num + this.length ] : this[ num ] ) :

				// Return all the elements in a clean array
				slice.call( this );
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function( elems ) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge( this.constructor(), elems );

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		each: function( callback ) {
			return jQuery.each( this, callback );
		},

		map: function( callback ) {
			return this.pushStack( jQuery.map( this, function( elem, i ) {
				return callback.call( elem, i, elem );
			} ) );
		},

		slice: function() {
			return this.pushStack( slice.apply( this, arguments ) );
		},

		first: function() {
			return this.eq( 0 );
		},

		last: function() {
			return this.eq( -1 );
		},

		eq: function( i ) {
			var len = this.length,
				j = +i + ( i < 0 ? len : 0 );
			return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
		},

		end: function() {
			return this.prevObject || this.constructor();
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function() {
		var options, name, src, copy, copyIsArray, clone,
			target = arguments[ 0 ] || {},
			i = 1,
			length = arguments.length,
			deep = false;

		// Handle a deep copy situation
		if ( typeof target === "boolean" ) {
			deep = target;

			// Skip the boolean and the target
			target = arguments[ i ] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if ( i === length ) {
			target = this;
			i--;
		}

		for ( ; i < length; i++ ) {

			// Only deal with non-null/undefined values
			if ( ( options = arguments[ i ] ) != null ) {

				// Extend the base object
				for ( name in options ) {
					src = target[ name ];
					copy = options[ name ];

					// Prevent never-ending loop
					if ( target === copy ) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
						( copyIsArray = jQuery.isArray( copy ) ) ) ) {

						if ( copyIsArray ) {
							copyIsArray = false;
							clone = src && jQuery.isArray( src ) ? src : [];

						} else {
							clone = src && jQuery.isPlainObject( src ) ? src : {};
						}

						// Never move original objects, clone them
						target[ name ] = jQuery.extend( deep, clone, copy );

					// Don't bring in undefined values
					} else if ( copy !== undefined ) {
						target[ name ] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend( {

		// Unique for each copy of jQuery on the page
		expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function( msg ) {
			throw new Error( msg );
		},

		noop: function() {},

		isFunction: function( obj ) {
			return jQuery.type( obj ) === "function";
		},

		isArray: Array.isArray,

		isWindow: function( obj ) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function( obj ) {

			// As of jQuery 3.0, isNumeric is limited to
			// strings and numbers (primitives or objects)
			// that can be coerced to finite numbers (gh-2662)
			var type = jQuery.type( obj );
			return ( type === "number" || type === "string" ) &&

				// parseFloat NaNs numeric-cast false positives ("")
				// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
				// subtraction forces infinities to NaN
				!isNaN( obj - parseFloat( obj ) );
		},

		isPlainObject: function( obj ) {
			var proto, Ctor;

			// Detect obvious negatives
			// Use toString instead of jQuery.type to catch host objects
			if ( !obj || toString.call( obj ) !== "[object Object]" ) {
				return false;
			}

			proto = getProto( obj );

			// Objects with no prototype (e.g., `Object.create( null )`) are plain
			if ( !proto ) {
				return true;
			}

			// Objects with prototype are plain iff they were constructed by a global Object function
			Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
			return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
		},

		isEmptyObject: function( obj ) {
			var name;
			for ( name in obj ) {
				return false;
			}
			return true;
		},

		type: function( obj ) {
			if ( obj == null ) {
				return obj + "";
			}

			// Support: Android <=2.3 only (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ?
				class2type[ toString.call( obj ) ] || "object" :
				typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function( code ) {
			DOMEval( code );
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE <=9 - 11, Edge 12 - 13
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function( string ) {
			return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
		},

		nodeName: function( elem, name ) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		each: function( obj, callback ) {
			var length, i = 0;

			if ( isArrayLike( obj ) ) {
				length = obj.length;
				for ( ; i < length; i++ ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			} else {
				for ( i in obj ) {
					if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
						break;
					}
				}
			}

			return obj;
		},

		// Support: Android <=4.0 only
		trim: function( text ) {
			return text == null ?
				"" :
				( text + "" ).replace( rtrim, "" );
		},

		// results is for internal usage only
		makeArray: function( arr, results ) {
			var ret = results || [];

			if ( arr != null ) {
				if ( isArrayLike( Object( arr ) ) ) {
					jQuery.merge( ret,
						typeof arr === "string" ?
						[ arr ] : arr
					);
				} else {
					push.call( ret, arr );
				}
			}

			return ret;
		},

		inArray: function( elem, arr, i ) {
			return arr == null ? -1 : indexOf.call( arr, elem, i );
		},

		// Support: Android <=4.0 only, PhantomJS 1 only
		// push.apply(_, arraylike) throws on ancient WebKit
		merge: function( first, second ) {
			var len = +second.length,
				j = 0,
				i = first.length;

			for ( ; j < len; j++ ) {
				first[ i++ ] = second[ j ];
			}

			first.length = i;

			return first;
		},

		grep: function( elems, callback, invert ) {
			var callbackInverse,
				matches = [],
				i = 0,
				length = elems.length,
				callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for ( ; i < length; i++ ) {
				callbackInverse = !callback( elems[ i ], i );
				if ( callbackInverse !== callbackExpect ) {
					matches.push( elems[ i ] );
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function( elems, callback, arg ) {
			var length, value,
				i = 0,
				ret = [];

			// Go through the array, translating each of the items to their new values
			if ( isArrayLike( elems ) ) {
				length = elems.length;
				for ( ; i < length; i++ ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}

			// Go through every key on the object,
			} else {
				for ( i in elems ) {
					value = callback( elems[ i ], i, arg );

					if ( value != null ) {
						ret.push( value );
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply( [], ret );
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function( fn, context ) {
			var tmp, args, proxy;

			if ( typeof context === "string" ) {
				tmp = fn[ context ];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if ( !jQuery.isFunction( fn ) ) {
				return undefined;
			}

			// Simulated bind
			args = slice.call( arguments, 2 );
			proxy = function() {
				return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	} );

	// JSHint would error on this code due to the Symbol not being defined in ES5.
	// Defining this global in .jshintrc would create a danger of using the global
	// unguarded in another place, it seems safer to just disable JSHint for these
	// three lines.
	/* jshint ignore: start */
	if ( typeof Symbol === "function" ) {
		jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
	}
	/* jshint ignore: end */

	// Populate the class2type map
	jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
	function( i, name ) {
		class2type[ "[object " + name + "]" ] = name.toLowerCase();
	} );

	function isArrayLike( obj ) {

		// Support: real iOS 8.2 only (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = !!obj && "length" in obj && obj.length,
			type = jQuery.type( obj );

		if ( type === "function" || jQuery.isWindow( obj ) ) {
			return false;
		}

		return type === "array" || length === 0 ||
			typeof length === "number" && length > 0 && ( length - 1 ) in obj;
	}
	var Sizzle =
	/*!
	 * Sizzle CSS Selector Engine v2.3.0
	 * https://sizzlejs.com/
	 *
	 * Copyright jQuery Foundation and other contributors
	 * Released under the MIT license
	 * http://jquery.org/license
	 *
	 * Date: 2016-01-04
	 */
	(function( window ) {

	var i,
		support,
		Expr,
		getText,
		isXML,
		tokenize,
		compile,
		select,
		outermostContext,
		sortInput,
		hasDuplicate,

		// Local document vars
		setDocument,
		document,
		docElem,
		documentIsHTML,
		rbuggyQSA,
		rbuggyMatches,
		matches,
		contains,

		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		preferredDoc = window.document,
		dirruns = 0,
		done = 0,
		classCache = createCache(),
		tokenCache = createCache(),
		compilerCache = createCache(),
		sortOrder = function( a, b ) {
			if ( a === b ) {
				hasDuplicate = true;
			}
			return 0;
		},

		// Instance methods
		hasOwn = ({}).hasOwnProperty,
		arr = [],
		pop = arr.pop,
		push_native = arr.push,
		push = arr.push,
		slice = arr.slice,
		// Use a stripped-down indexOf as it's faster than native
		// https://jsperf.com/thor-indexof-vs-for/5
		indexOf = function( list, elem ) {
			var i = 0,
				len = list.length;
			for ( ; i < len; i++ ) {
				if ( list[i] === elem ) {
					return i;
				}
			}
			return -1;
		},

		booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

		// Regular expressions

		// http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
			// Operator (capture 2)
			"*([*^$|!~]?=)" + whitespace +
			// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
			"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
			"*\\]",

		pseudos = ":(" + identifier + ")(?:\\((" +
			// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
			// 1. quoted (capture 3; capture 4 or capture 5)
			"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
			// 2. simple (capture 6)
			"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
			// 3. anything else (capture 2)
			".*" +
			")\\)|)",

		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp( whitespace + "+", "g" ),
		rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

		rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
		rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

		rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

		rpseudo = new RegExp( pseudos ),
		ridentifier = new RegExp( "^" + identifier + "$" ),

		matchExpr = {
			"ID": new RegExp( "^#(" + identifier + ")" ),
			"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
			"TAG": new RegExp( "^(" + identifier + "|[*])" ),
			"ATTR": new RegExp( "^" + attributes ),
			"PSEUDO": new RegExp( "^" + pseudos ),
			"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
				"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
				"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
			"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
				whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
		},

		rinputs = /^(?:input|select|textarea|button)$/i,
		rheader = /^h\d$/i,

		rnative = /^[^{]+\{\s*\[native \w/,

		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

		rsibling = /[+~]/,

		// CSS escapes
		// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
		funescape = function( _, escaped, escapedWhitespace ) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ?
				escaped :
				high < 0 ?
					// BMP codepoint
					String.fromCharCode( high + 0x10000 ) :
					// Supplemental Plane codepoint (surrogate pair)
					String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
		},

		// CSS string/identifier serialization
		// https://drafts.csswg.org/cssom/#common-serializing-idioms
		rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
		fcssescape = function( ch, asCodePoint ) {
			if ( asCodePoint ) {

				// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
				if ( ch === "\0" ) {
					return "\uFFFD";
				}

				// Control characters and (dependent upon position) numbers get escaped as code points
				return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
			}

			// Other potentially-special ASCII characters get backslash-escaped
			return "\\" + ch;
		},

		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function() {
			setDocument();
		},

		disabledAncestor = addCombinator(
			function( elem ) {
				return elem.disabled === true;
			},
			{ dir: "parentNode", next: "legend" }
		);

	// Optimize for push.apply( _, NodeList )
	try {
		push.apply(
			(arr = slice.call( preferredDoc.childNodes )),
			preferredDoc.childNodes
		);
		// Support: Android<4.0
		// Detect silently failing push.apply
		arr[ preferredDoc.childNodes.length ].nodeType;
	} catch ( e ) {
		push = { apply: arr.length ?

			// Leverage slice if possible
			function( target, els ) {
				push_native.apply( target, slice.call(els) );
			} :

			// Support: IE<9
			// Otherwise append directly
			function( target, els ) {
				var j = target.length,
					i = 0;
				// Can't trust NodeList.length
				while ( (target[j++] = els[i++]) ) {}
				target.length = j - 1;
			}
		};
	}

	function Sizzle( selector, context, results, seed ) {
		var m, i, elem, nid, match, groups, newSelector,
			newContext = context && context.ownerDocument,

			// nodeType defaults to 9, since context defaults to document
			nodeType = context ? context.nodeType : 9;

		results = results || [];

		// Return early from calls with invalid selector or context
		if ( typeof selector !== "string" || !selector ||
			nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

			return results;
		}

		// Try to shortcut find operations (as opposed to filters) in HTML documents
		if ( !seed ) {

			if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
				setDocument( context );
			}
			context = context || document;

			if ( documentIsHTML ) {

				// If the selector is sufficiently simple, try using a "get*By*" DOM method
				// (excepting DocumentFragment context, where the methods don't exist)
				if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

					// ID selector
					if ( (m = match[1]) ) {

						// Document context
						if ( nodeType === 9 ) {
							if ( (elem = context.getElementById( m )) ) {

								// Support: IE, Opera, Webkit
								// TODO: identify versions
								// getElementById can match elements by name instead of ID
								if ( elem.id === m ) {
									results.push( elem );
									return results;
								}
							} else {
								return results;
							}

						// Element context
						} else {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( newContext && (elem = newContext.getElementById( m )) &&
								contains( context, elem ) &&
								elem.id === m ) {

								results.push( elem );
								return results;
							}
						}

					// Type selector
					} else if ( match[2] ) {
						push.apply( results, context.getElementsByTagName( selector ) );
						return results;

					// Class selector
					} else if ( (m = match[3]) && support.getElementsByClassName &&
						context.getElementsByClassName ) {

						push.apply( results, context.getElementsByClassName( m ) );
						return results;
					}
				}

				// Take advantage of querySelectorAll
				if ( support.qsa &&
					!compilerCache[ selector + " " ] &&
					(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

					if ( nodeType !== 1 ) {
						newContext = context;
						newSelector = selector;

					// qSA looks outside Element context, which is not what we want
					// Thanks to Andrew Dupont for this workaround technique
					// Support: IE <=8
					// Exclude object elements
					} else if ( context.nodeName.toLowerCase() !== "object" ) {

						// Capture the context ID, setting it first if necessary
						if ( (nid = context.getAttribute( "id" )) ) {
							nid = nid.replace( rcssescape, fcssescape );
						} else {
							context.setAttribute( "id", (nid = expando) );
						}

						// Prefix every selector in the list
						groups = tokenize( selector );
						i = groups.length;
						while ( i-- ) {
							groups[i] = "#" + nid + " " + toSelector( groups[i] );
						}
						newSelector = groups.join( "," );

						// Expand context for sibling selectors
						newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
							context;
					}

					if ( newSelector ) {
						try {
							push.apply( results,
								newContext.querySelectorAll( newSelector )
							);
							return results;
						} catch ( qsaError ) {
						} finally {
							if ( nid === expando ) {
								context.removeAttribute( "id" );
							}
						}
					}
				}
			}
		}

		// All others
		return select( selector.replace( rtrim, "$1" ), context, results, seed );
	}

	/**
	 * Create key-value caches of limited size
	 * @returns {function(string, object)} Returns the Object data after storing it on itself with
	 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
	 *	deleting the oldest entry
	 */
	function createCache() {
		var keys = [];

		function cache( key, value ) {
			// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
			if ( keys.push( key + " " ) > Expr.cacheLength ) {
				// Only keep the most recent entries
				delete cache[ keys.shift() ];
			}
			return (cache[ key + " " ] = value);
		}
		return cache;
	}

	/**
	 * Mark a function for special use by Sizzle
	 * @param {Function} fn The function to mark
	 */
	function markFunction( fn ) {
		fn[ expando ] = true;
		return fn;
	}

	/**
	 * Support testing using an element
	 * @param {Function} fn Passed the created element and returns a boolean result
	 */
	function assert( fn ) {
		var el = document.createElement("fieldset");

		try {
			return !!fn( el );
		} catch (e) {
			return false;
		} finally {
			// Remove from its parent by default
			if ( el.parentNode ) {
				el.parentNode.removeChild( el );
			}
			// release memory in IE
			el = null;
		}
	}

	/**
	 * Adds the same handler for all of the specified attrs
	 * @param {String} attrs Pipe-separated list of attributes
	 * @param {Function} handler The method that will be applied
	 */
	function addHandle( attrs, handler ) {
		var arr = attrs.split("|"),
			i = arr.length;

		while ( i-- ) {
			Expr.attrHandle[ arr[i] ] = handler;
		}
	}

	/**
	 * Checks document order of two siblings
	 * @param {Element} a
	 * @param {Element} b
	 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
	 */
	function siblingCheck( a, b ) {
		var cur = b && a,
			diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
				a.sourceIndex - b.sourceIndex;

		// Use IE sourceIndex if available on both nodes
		if ( diff ) {
			return diff;
		}

		// Check if b follows a
		if ( cur ) {
			while ( (cur = cur.nextSibling) ) {
				if ( cur === b ) {
					return -1;
				}
			}
		}

		return a ? 1 : -1;
	}

	/**
	 * Returns a function to use in pseudos for input types
	 * @param {String} type
	 */
	function createInputPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for buttons
	 * @param {String} type
	 */
	function createButtonPseudo( type ) {
		return function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return (name === "input" || name === "button") && elem.type === type;
		};
	}

	/**
	 * Returns a function to use in pseudos for :enabled/:disabled
	 * @param {Boolean} disabled true for :disabled; false for :enabled
	 */
	function createDisabledPseudo( disabled ) {
		// Known :disabled false positives:
		// IE: *[disabled]:not(button, input, select, textarea, optgroup, option, menuitem, fieldset)
		// not IE: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
		return function( elem ) {

			// Check form elements and option elements for explicit disabling
			return "label" in elem && elem.disabled === disabled ||
				"form" in elem && elem.disabled === disabled ||

				// Check non-disabled form elements for fieldset[disabled] ancestors
				"form" in elem && elem.disabled === false && (
					// Support: IE6-11+
					// Ancestry is covered for us
					elem.isDisabled === disabled ||

					// Otherwise, assume any non-<option> under fieldset[disabled] is disabled
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						("label" in elem || !disabledAncestor( elem )) !== disabled
				);
		};
	}

	/**
	 * Returns a function to use in pseudos for positionals
	 * @param {Function} fn
	 */
	function createPositionalPseudo( fn ) {
		return markFunction(function( argument ) {
			argument = +argument;
			return markFunction(function( seed, matches ) {
				var j,
					matchIndexes = fn( [], seed.length, argument ),
					i = matchIndexes.length;

				// Match elements found at the specified indexes
				while ( i-- ) {
					if ( seed[ (j = matchIndexes[i]) ] ) {
						seed[j] = !(matches[j] = seed[j]);
					}
				}
			});
		});
	}

	/**
	 * Checks a node for validity as a Sizzle context
	 * @param {Element|Object=} context
	 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
	 */
	function testContext( context ) {
		return context && typeof context.getElementsByTagName !== "undefined" && context;
	}

	// Expose support vars for convenience
	support = Sizzle.support = {};

	/**
	 * Detects XML nodes
	 * @param {Element|Object} elem An element or a document
	 * @returns {Boolean} True iff elem is a non-HTML XML node
	 */
	isXML = Sizzle.isXML = function( elem ) {
		// documentElement is verified for cases where it doesn't yet exist
		// (such as loading iframes in IE - #4833)
		var documentElement = elem && (elem.ownerDocument || elem).documentElement;
		return documentElement ? documentElement.nodeName !== "HTML" : false;
	};

	/**
	 * Sets document-related variables once based on the current document
	 * @param {Element|Object} [doc] An element or document object to use to set the document
	 * @returns {Object} Returns the current document
	 */
	setDocument = Sizzle.setDocument = function( node ) {
		var hasCompare, subWindow,
			doc = node ? node.ownerDocument || node : preferredDoc;

		// Return early if doc is invalid or already selected
		if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
			return document;
		}

		// Update global variables
		document = doc;
		docElem = document.documentElement;
		documentIsHTML = !isXML( document );

		// Support: IE 9-11, Edge
		// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
		if ( preferredDoc !== document &&
			(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

			// Support: IE 11, Edge
			if ( subWindow.addEventListener ) {
				subWindow.addEventListener( "unload", unloadHandler, false );

			// Support: IE 9 - 10 only
			} else if ( subWindow.attachEvent ) {
				subWindow.attachEvent( "onunload", unloadHandler );
			}
		}

		/* Attributes
		---------------------------------------------------------------------- */

		// Support: IE<8
		// Verify that getAttribute really returns attributes and not properties
		// (excepting IE8 booleans)
		support.attributes = assert(function( el ) {
			el.className = "i";
			return !el.getAttribute("className");
		});

		/* getElement(s)By*
		---------------------------------------------------------------------- */

		// Check if getElementsByTagName("*") returns only elements
		support.getElementsByTagName = assert(function( el ) {
			el.appendChild( document.createComment("") );
			return !el.getElementsByTagName("*").length;
		});

		// Support: IE<9
		support.getElementsByClassName = rnative.test( document.getElementsByClassName );

		// Support: IE<10
		// Check if getElementById returns elements by name
		// The broken getElementById methods don't pick up programmatically-set names,
		// so use a roundabout getElementsByName test
		support.getById = assert(function( el ) {
			docElem.appendChild( el ).id = expando;
			return !document.getElementsByName || !document.getElementsByName( expando ).length;
		});

		// ID find and filter
		if ( support.getById ) {
			Expr.find["ID"] = function( id, context ) {
				if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
					var m = context.getElementById( id );
					return m ? [ m ] : [];
				}
			};
			Expr.filter["ID"] = function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					return elem.getAttribute("id") === attrId;
				};
			};
		} else {
			// Support: IE6/7
			// getElementById is not reliable as a find shortcut
			delete Expr.find["ID"];

			Expr.filter["ID"] =  function( id ) {
				var attrId = id.replace( runescape, funescape );
				return function( elem ) {
					var node = typeof elem.getAttributeNode !== "undefined" &&
						elem.getAttributeNode("id");
					return node && node.value === attrId;
				};
			};
		}

		// Tag
		Expr.find["TAG"] = support.getElementsByTagName ?
			function( tag, context ) {
				if ( typeof context.getElementsByTagName !== "undefined" ) {
					return context.getElementsByTagName( tag );

				// DocumentFragment nodes don't have gEBTN
				} else if ( support.qsa ) {
					return context.querySelectorAll( tag );
				}
			} :

			function( tag, context ) {
				var elem,
					tmp = [],
					i = 0,
					// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
					results = context.getElementsByTagName( tag );

				// Filter out possible comments
				if ( tag === "*" ) {
					while ( (elem = results[i++]) ) {
						if ( elem.nodeType === 1 ) {
							tmp.push( elem );
						}
					}

					return tmp;
				}
				return results;
			};

		// Class
		Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
			if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
				return context.getElementsByClassName( className );
			}
		};

		/* QSA/matchesSelector
		---------------------------------------------------------------------- */

		// QSA and matchesSelector support

		// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
		rbuggyMatches = [];

		// qSa(:focus) reports false when true (Chrome 21)
		// We allow this because of a bug in IE8/9 that throws an error
		// whenever `document.activeElement` is accessed on an iframe
		// So, we allow :focus to pass through QSA all the time to avoid the IE error
		// See https://bugs.jquery.com/ticket/13378
		rbuggyQSA = [];

		if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
			// Build QSA regex
			// Regex strategy adopted from Diego Perini
			assert(function( el ) {
				// Select is set to empty string on purpose
				// This is to test IE's treatment of not explicitly
				// setting a boolean content attribute,
				// since its presence should be enough
				// https://bugs.jquery.com/ticket/12359
				docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
					"<select id='" + expando + "-\r\\' msallowcapture=''>" +
					"<option selected=''></option></select>";

				// Support: IE8, Opera 11-12.16
				// Nothing should be selected when empty strings follow ^= or $= or *=
				// The test attribute must be unknown in Opera but "safe" for WinRT
				// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
				if ( el.querySelectorAll("[msallowcapture^='']").length ) {
					rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
				}

				// Support: IE8
				// Boolean attributes and "value" are not treated correctly
				if ( !el.querySelectorAll("[selected]").length ) {
					rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
				}

				// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
				if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
					rbuggyQSA.push("~=");
				}

				// Webkit/Opera - :checked should return selected option elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				// IE8 throws error here and will not see later tests
				if ( !el.querySelectorAll(":checked").length ) {
					rbuggyQSA.push(":checked");
				}

				// Support: Safari 8+, iOS 8+
				// https://bugs.webkit.org/show_bug.cgi?id=136851
				// In-page `selector#id sibling-combinator selector` fails
				if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
					rbuggyQSA.push(".#.+[+~]");
				}
			});

			assert(function( el ) {
				el.innerHTML = "<a href='' disabled='disabled'></a>" +
					"<select disabled='disabled'><option/></select>";

				// Support: Windows 8 Native Apps
				// The type and name attributes are restricted during .innerHTML assignment
				var input = document.createElement("input");
				input.setAttribute( "type", "hidden" );
				el.appendChild( input ).setAttribute( "name", "D" );

				// Support: IE8
				// Enforce case-sensitivity of name attribute
				if ( el.querySelectorAll("[name=d]").length ) {
					rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
				}

				// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
				// IE8 throws error here and will not see later tests
				if ( el.querySelectorAll(":enabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Support: IE9-11+
				// IE's :disabled selector does not pick up the children of disabled fieldsets
				docElem.appendChild( el ).disabled = true;
				if ( el.querySelectorAll(":disabled").length !== 2 ) {
					rbuggyQSA.push( ":enabled", ":disabled" );
				}

				// Opera 10-11 does not throw on post-comma invalid pseudos
				el.querySelectorAll("*,:x");
				rbuggyQSA.push(",.*:");
			});
		}

		if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
			docElem.webkitMatchesSelector ||
			docElem.mozMatchesSelector ||
			docElem.oMatchesSelector ||
			docElem.msMatchesSelector) )) ) {

			assert(function( el ) {
				// Check to see if it's possible to do matchesSelector
				// on a disconnected node (IE 9)
				support.disconnectedMatch = matches.call( el, "*" );

				// This should fail with an exception
				// Gecko does not error, returns false instead
				matches.call( el, "[s!='']:x" );
				rbuggyMatches.push( "!=", pseudos );
			});
		}

		rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
		rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

		/* Contains
		---------------------------------------------------------------------- */
		hasCompare = rnative.test( docElem.compareDocumentPosition );

		// Element contains another
		// Purposefully self-exclusive
		// As in, an element does not contain itself
		contains = hasCompare || rnative.test( docElem.contains ) ?
			function( a, b ) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
					bup = b && b.parentNode;
				return a === bup || !!( bup && bup.nodeType === 1 && (
					adown.contains ?
						adown.contains( bup ) :
						a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
				));
			} :
			function( a, b ) {
				if ( b ) {
					while ( (b = b.parentNode) ) {
						if ( b === a ) {
							return true;
						}
					}
				}
				return false;
			};

		/* Sorting
		---------------------------------------------------------------------- */

		// Document order sorting
		sortOrder = hasCompare ?
		function( a, b ) {

			// Flag for duplicate removal
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			// Sort on method existence if only one input has compareDocumentPosition
			var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
			if ( compare ) {
				return compare;
			}

			// Calculate position if both inputs belong to the same document
			compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
				a.compareDocumentPosition( b ) :

				// Otherwise we know they are disconnected
				1;

			// Disconnected nodes
			if ( compare & 1 ||
				(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

				// Choose the first element that is related to our preferred document
				if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
					return -1;
				}
				if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
					return 1;
				}

				// Maintain original order
				return sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;
			}

			return compare & 4 ? -1 : 1;
		} :
		function( a, b ) {
			// Exit early if the nodes are identical
			if ( a === b ) {
				hasDuplicate = true;
				return 0;
			}

			var cur,
				i = 0,
				aup = a.parentNode,
				bup = b.parentNode,
				ap = [ a ],
				bp = [ b ];

			// Parentless nodes are either documents or disconnected
			if ( !aup || !bup ) {
				return a === document ? -1 :
					b === document ? 1 :
					aup ? -1 :
					bup ? 1 :
					sortInput ?
					( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
					0;

			// If the nodes are siblings, we can do a quick check
			} else if ( aup === bup ) {
				return siblingCheck( a, b );
			}

			// Otherwise we need full lists of their ancestors for comparison
			cur = a;
			while ( (cur = cur.parentNode) ) {
				ap.unshift( cur );
			}
			cur = b;
			while ( (cur = cur.parentNode) ) {
				bp.unshift( cur );
			}

			// Walk down the tree looking for a discrepancy
			while ( ap[i] === bp[i] ) {
				i++;
			}

			return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck( ap[i], bp[i] ) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 :
				bp[i] === preferredDoc ? 1 :
				0;
		};

		return document;
	};

	Sizzle.matches = function( expr, elements ) {
		return Sizzle( expr, null, null, elements );
	};

	Sizzle.matchesSelector = function( elem, expr ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		// Make sure that attribute selectors are quoted
		expr = expr.replace( rattributeQuotes, "='$1']" );

		if ( support.matchesSelector && documentIsHTML &&
			!compilerCache[ expr + " " ] &&
			( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
			( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

			try {
				var ret = matches.call( elem, expr );

				// IE 9's matchesSelector returns false on disconnected nodes
				if ( ret || support.disconnectedMatch ||
						// As well, disconnected nodes are said to be in a document
						// fragment in IE 9
						elem.document && elem.document.nodeType !== 11 ) {
					return ret;
				}
			} catch (e) {}
		}

		return Sizzle( expr, document, null, [ elem ] ).length > 0;
	};

	Sizzle.contains = function( context, elem ) {
		// Set document vars if needed
		if ( ( context.ownerDocument || context ) !== document ) {
			setDocument( context );
		}
		return contains( context, elem );
	};

	Sizzle.attr = function( elem, name ) {
		// Set document vars if needed
		if ( ( elem.ownerDocument || elem ) !== document ) {
			setDocument( elem );
		}

		var fn = Expr.attrHandle[ name.toLowerCase() ],
			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
				fn( elem, name, !documentIsHTML ) :
				undefined;

		return val !== undefined ?
			val :
			support.attributes || !documentIsHTML ?
				elem.getAttribute( name ) :
				(val = elem.getAttributeNode(name)) && val.specified ?
					val.value :
					null;
	};

	Sizzle.escape = function( sel ) {
		return (sel + "").replace( rcssescape, fcssescape );
	};

	Sizzle.error = function( msg ) {
		throw new Error( "Syntax error, unrecognized expression: " + msg );
	};

	/**
	 * Document sorting and removing duplicates
	 * @param {ArrayLike} results
	 */
	Sizzle.uniqueSort = function( results ) {
		var elem,
			duplicates = [],
			j = 0,
			i = 0;

		// Unless we *know* we can detect duplicates, assume their presence
		hasDuplicate = !support.detectDuplicates;
		sortInput = !support.sortStable && results.slice( 0 );
		results.sort( sortOrder );

		if ( hasDuplicate ) {
			while ( (elem = results[i++]) ) {
				if ( elem === results[ i ] ) {
					j = duplicates.push( i );
				}
			}
			while ( j-- ) {
				results.splice( duplicates[ j ], 1 );
			}
		}

		// Clear input after sorting to release objects
		// See https://github.com/jquery/sizzle/pull/225
		sortInput = null;

		return results;
	};

	/**
	 * Utility function for retrieving the text value of an array of DOM nodes
	 * @param {Array|Element} elem
	 */
	getText = Sizzle.getText = function( elem ) {
		var node,
			ret = "",
			i = 0,
			nodeType = elem.nodeType;

		if ( !nodeType ) {
			// If no nodeType, this is expected to be an array
			while ( (node = elem[i++]) ) {
				// Do not traverse comment nodes
				ret += getText( node );
			}
		} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
			// Use textContent for elements
			// innerText usage removed for consistency of new lines (jQuery #11153)
			if ( typeof elem.textContent === "string" ) {
				return elem.textContent;
			} else {
				// Traverse its children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					ret += getText( elem );
				}
			}
		} else if ( nodeType === 3 || nodeType === 4 ) {
			return elem.nodeValue;
		}
		// Do not include comment or processing instruction nodes

		return ret;
	};

	Expr = Sizzle.selectors = {

		// Can be adjusted by the user
		cacheLength: 50,

		createPseudo: markFunction,

		match: matchExpr,

		attrHandle: {},

		find: {},

		relative: {
			">": { dir: "parentNode", first: true },
			" ": { dir: "parentNode" },
			"+": { dir: "previousSibling", first: true },
			"~": { dir: "previousSibling" }
		},

		preFilter: {
			"ATTR": function( match ) {
				match[1] = match[1].replace( runescape, funescape );

				// Move the given value to match[3] whether quoted or unquoted
				match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

				if ( match[2] === "~=" ) {
					match[3] = " " + match[3] + " ";
				}

				return match.slice( 0, 4 );
			},

			"CHILD": function( match ) {
				/* matches from matchExpr["CHILD"]
					1 type (only|nth|...)
					2 what (child|of-type)
					3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
					4 xn-component of xn+y argument ([+-]?\d*n|)
					5 sign of xn-component
					6 x of xn-component
					7 sign of y-component
					8 y of y-component
				*/
				match[1] = match[1].toLowerCase();

				if ( match[1].slice( 0, 3 ) === "nth" ) {
					// nth-* requires argument
					if ( !match[3] ) {
						Sizzle.error( match[0] );
					}

					// numeric x and y parameters for Expr.filter.CHILD
					// remember that false/true cast respectively to 0/1
					match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
					match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

				// other types prohibit arguments
				} else if ( match[3] ) {
					Sizzle.error( match[0] );
				}

				return match;
			},

			"PSEUDO": function( match ) {
				var excess,
					unquoted = !match[6] && match[2];

				if ( matchExpr["CHILD"].test( match[0] ) ) {
					return null;
				}

				// Accept quoted arguments as-is
				if ( match[3] ) {
					match[2] = match[4] || match[5] || "";

				// Strip excess characters from unquoted arguments
				} else if ( unquoted && rpseudo.test( unquoted ) &&
					// Get excess from tokenize (recursively)
					(excess = tokenize( unquoted, true )) &&
					// advance to the next closing parenthesis
					(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

					// excess is a negative index
					match[0] = match[0].slice( 0, excess );
					match[2] = unquoted.slice( 0, excess );
				}

				// Return only captures needed by the pseudo filter method (type and argument)
				return match.slice( 0, 3 );
			}
		},

		filter: {

			"TAG": function( nodeNameSelector ) {
				var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
				return nodeNameSelector === "*" ?
					function() { return true; } :
					function( elem ) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
			},

			"CLASS": function( className ) {
				var pattern = classCache[ className + " " ];

				return pattern ||
					(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
					classCache( className, function( elem ) {
						return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
					});
			},

			"ATTR": function( name, operator, check ) {
				return function( elem ) {
					var result = Sizzle.attr( elem, name );

					if ( result == null ) {
						return operator === "!=";
					}
					if ( !operator ) {
						return true;
					}

					result += "";

					return operator === "=" ? result === check :
						operator === "!=" ? result !== check :
						operator === "^=" ? check && result.indexOf( check ) === 0 :
						operator === "*=" ? check && result.indexOf( check ) > -1 :
						operator === "$=" ? check && result.slice( -check.length ) === check :
						operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
						operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
						false;
				};
			},

			"CHILD": function( type, what, argument, first, last ) {
				var simple = type.slice( 0, 3 ) !== "nth",
					forward = type.slice( -4 ) !== "last",
					ofType = what === "of-type";

				return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function( elem ) {
						return !!elem.parentNode;
					} :

					function( elem, context, xml ) {
						var cache, uniqueCache, outerCache, node, nodeIndex, start,
							dir = simple !== forward ? "nextSibling" : "previousSibling",
							parent = elem.parentNode,
							name = ofType && elem.nodeName.toLowerCase(),
							useCache = !xml && !ofType,
							diff = false;

						if ( parent ) {

							// :(first|last|only)-(child|of-type)
							if ( simple ) {
								while ( dir ) {
									node = elem;
									while ( (node = node[ dir ]) ) {
										if ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) {

											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [ forward ? parent.firstChild : parent.lastChild ];

							// non-xml :nth-child(...) stores cache data on `parent`
							if ( forward && useCache ) {

								// Seek `elem` from a previously-cached index

								// ...in a gzip-friendly way
								node = parent;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex && cache[ 2 ];
								node = nodeIndex && parent.childNodes[ nodeIndex ];

								while ( (node = ++nodeIndex && node && node[ dir ] ||

									// Fallback to seeking `elem` from the start
									(diff = nodeIndex = 0) || start.pop()) ) {

									// When found, cache indexes on `parent` and break
									if ( node.nodeType === 1 && ++diff && node === elem ) {
										uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
										break;
									}
								}

							} else {
								// Use previously-cached element index if available
								if ( useCache ) {
									// ...in a gzip-friendly way
									node = elem;
									outerCache = node[ expando ] || (node[ expando ] = {});

									// Support: IE <9 only
									// Defend against cloned attroperties (jQuery gh-1709)
									uniqueCache = outerCache[ node.uniqueID ] ||
										(outerCache[ node.uniqueID ] = {});

									cache = uniqueCache[ type ] || [];
									nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
									diff = nodeIndex;
								}

								// xml :nth-child(...)
								// or :nth-last-child(...) or :nth(-last)?-of-type(...)
								if ( diff === false ) {
									// Use the same loop as above to seek `elem` from the start
									while ( (node = ++nodeIndex && node && node[ dir ] ||
										(diff = nodeIndex = 0) || start.pop()) ) {

										if ( ( ofType ?
											node.nodeName.toLowerCase() === name :
											node.nodeType === 1 ) &&
											++diff ) {

											// Cache the index of each encountered element
											if ( useCache ) {
												outerCache = node[ expando ] || (node[ expando ] = {});

												// Support: IE <9 only
												// Defend against cloned attroperties (jQuery gh-1709)
												uniqueCache = outerCache[ node.uniqueID ] ||
													(outerCache[ node.uniqueID ] = {});

												uniqueCache[ type ] = [ dirruns, diff ];
											}

											if ( node === elem ) {
												break;
											}
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || ( diff % first === 0 && diff / first >= 0 );
						}
					};
			},

			"PSEUDO": function( pseudo, argument ) {
				// pseudo-class names are case-insensitive
				// http://www.w3.org/TR/selectors/#pseudo-classes
				// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
				// Remember that setFilters inherits from pseudos
				var args,
					fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
						Sizzle.error( "unsupported pseudo: " + pseudo );

				// The user may use createPseudo to indicate that
				// arguments are needed to create the filter function
				// just as Sizzle does
				if ( fn[ expando ] ) {
					return fn( argument );
				}

				// But maintain support for old signatures
				if ( fn.length > 1 ) {
					args = [ pseudo, pseudo, "", argument ];
					return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
						markFunction(function( seed, matches ) {
							var idx,
								matched = fn( seed, argument ),
								i = matched.length;
							while ( i-- ) {
								idx = indexOf( seed, matched[i] );
								seed[ idx ] = !( matches[ idx ] = matched[i] );
							}
						}) :
						function( elem ) {
							return fn( elem, 0, args );
						};
				}

				return fn;
			}
		},

		pseudos: {
			// Potentially complex pseudos
			"not": markFunction(function( selector ) {
				// Trim the selector passed to compile
				// to avoid treating leading and trailing
				// spaces as combinators
				var input = [],
					results = [],
					matcher = compile( selector.replace( rtrim, "$1" ) );

				return matcher[ expando ] ?
					markFunction(function( seed, matches, context, xml ) {
						var elem,
							unmatched = matcher( seed, null, xml, [] ),
							i = seed.length;

						// Match elements unmatched by `matcher`
						while ( i-- ) {
							if ( (elem = unmatched[i]) ) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) :
					function( elem, context, xml ) {
						input[0] = elem;
						matcher( input, null, xml, results );
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
			}),

			"has": markFunction(function( selector ) {
				return function( elem ) {
					return Sizzle( selector, elem ).length > 0;
				};
			}),

			"contains": markFunction(function( text ) {
				text = text.replace( runescape, funescape );
				return function( elem ) {
					return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
				};
			}),

			// "Whether an element is represented by a :lang() selector
			// is based solely on the element's language value
			// being equal to the identifier C,
			// or beginning with the identifier C immediately followed by "-".
			// The matching of C against the element's language value is performed case-insensitively.
			// The identifier C does not have to be a valid language name."
			// http://www.w3.org/TR/selectors/#lang-pseudo
			"lang": markFunction( function( lang ) {
				// lang value must be a valid identifier
				if ( !ridentifier.test(lang || "") ) {
					Sizzle.error( "unsupported lang: " + lang );
				}
				lang = lang.replace( runescape, funescape ).toLowerCase();
				return function( elem ) {
					var elemLang;
					do {
						if ( (elemLang = documentIsHTML ?
							elem.lang :
							elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

							elemLang = elemLang.toLowerCase();
							return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
						}
					} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
					return false;
				};
			}),

			// Miscellaneous
			"target": function( elem ) {
				var hash = window.location && window.location.hash;
				return hash && hash.slice( 1 ) === elem.id;
			},

			"root": function( elem ) {
				return elem === docElem;
			},

			"focus": function( elem ) {
				return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
			},

			// Boolean properties
			"enabled": createDisabledPseudo( false ),
			"disabled": createDisabledPseudo( true ),

			"checked": function( elem ) {
				// In CSS3, :checked should return both checked and selected elements
				// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
				var nodeName = elem.nodeName.toLowerCase();
				return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
			},

			"selected": function( elem ) {
				// Accessing this property makes selected-by-default
				// options in Safari work properly
				if ( elem.parentNode ) {
					elem.parentNode.selectedIndex;
				}

				return elem.selected === true;
			},

			// Contents
			"empty": function( elem ) {
				// http://www.w3.org/TR/selectors/#empty-pseudo
				// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
				//   but not by others (comment: 8; processing instruction: 7; etc.)
				// nodeType < 6 works because attributes (2) do not appear as children
				for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
					if ( elem.nodeType < 6 ) {
						return false;
					}
				}
				return true;
			},

			"parent": function( elem ) {
				return !Expr.pseudos["empty"]( elem );
			},

			// Element/input types
			"header": function( elem ) {
				return rheader.test( elem.nodeName );
			},

			"input": function( elem ) {
				return rinputs.test( elem.nodeName );
			},

			"button": function( elem ) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === "button" || name === "button";
			},

			"text": function( elem ) {
				var attr;
				return elem.nodeName.toLowerCase() === "input" &&
					elem.type === "text" &&

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
			},

			// Position-in-collection
			"first": createPositionalPseudo(function() {
				return [ 0 ];
			}),

			"last": createPositionalPseudo(function( matchIndexes, length ) {
				return [ length - 1 ];
			}),

			"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
				return [ argument < 0 ? argument + length : argument ];
			}),

			"even": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 0;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"odd": createPositionalPseudo(function( matchIndexes, length ) {
				var i = 1;
				for ( ; i < length; i += 2 ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; --i >= 0; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			}),

			"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
				var i = argument < 0 ? argument + length : argument;
				for ( ; ++i < length; ) {
					matchIndexes.push( i );
				}
				return matchIndexes;
			})
		}
	};

	Expr.pseudos["nth"] = Expr.pseudos["eq"];

	// Add button/input type pseudos
	for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
		Expr.pseudos[ i ] = createInputPseudo( i );
	}
	for ( i in { submit: true, reset: true } ) {
		Expr.pseudos[ i ] = createButtonPseudo( i );
	}

	// Easy API for creating new setFilters
	function setFilters() {}
	setFilters.prototype = Expr.filters = Expr.pseudos;
	Expr.setFilters = new setFilters();

	tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
		var matched, match, tokens, type,
			soFar, groups, preFilters,
			cached = tokenCache[ selector + " " ];

		if ( cached ) {
			return parseOnly ? 0 : cached.slice( 0 );
		}

		soFar = selector;
		groups = [];
		preFilters = Expr.preFilter;

		while ( soFar ) {

			// Comma and first run
			if ( !matched || (match = rcomma.exec( soFar )) ) {
				if ( match ) {
					// Don't consume trailing commas as valid
					soFar = soFar.slice( match[0].length ) || soFar;
				}
				groups.push( (tokens = []) );
			}

			matched = false;

			// Combinators
			if ( (match = rcombinators.exec( soFar )) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					// Cast descendant combinators to space
					type: match[0].replace( rtrim, " " )
				});
				soFar = soFar.slice( matched.length );
			}

			// Filters
			for ( type in Expr.filter ) {
				if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
					(match = preFilters[ type ]( match ))) ) {
					matched = match.shift();
					tokens.push({
						value: matched,
						type: type,
						matches: match
					});
					soFar = soFar.slice( matched.length );
				}
			}

			if ( !matched ) {
				break;
			}
		}

		// Return the length of the invalid excess
		// if we're just parsing
		// Otherwise, throw an error or return tokens
		return parseOnly ?
			soFar.length :
			soFar ?
				Sizzle.error( selector ) :
				// Cache the tokens
				tokenCache( selector, groups ).slice( 0 );
	};

	function toSelector( tokens ) {
		var i = 0,
			len = tokens.length,
			selector = "";
		for ( ; i < len; i++ ) {
			selector += tokens[i].value;
		}
		return selector;
	}

	function addCombinator( matcher, combinator, base ) {
		var dir = combinator.dir,
			skip = combinator.next,
			key = skip || dir,
			checkNonElements = base && key === "parentNode",
			doneName = done++;

		return combinator.first ?
			// Check against closest ancestor/preceding element
			function( elem, context, xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						return matcher( elem, context, xml );
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function( elem, context, xml ) {
				var oldCache, uniqueCache, outerCache,
					newCache = [ dirruns, doneName ];

				// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
				if ( xml ) {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							if ( matcher( elem, context, xml ) ) {
								return true;
							}
						}
					}
				} else {
					while ( (elem = elem[ dir ]) ) {
						if ( elem.nodeType === 1 || checkNonElements ) {
							outerCache = elem[ expando ] || (elem[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

							if ( skip && skip === elem.nodeName.toLowerCase() ) {
								elem = elem[ dir ] || elem;
							} else if ( (oldCache = uniqueCache[ key ]) &&
								oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

								// Assign to newCache so results back-propagate to previous elements
								return (newCache[ 2 ] = oldCache[ 2 ]);
							} else {
								// Reuse newcache so results back-propagate to previous elements
								uniqueCache[ key ] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
									return true;
								}
							}
						}
					}
				}
			};
	}

	function elementMatcher( matchers ) {
		return matchers.length > 1 ?
			function( elem, context, xml ) {
				var i = matchers.length;
				while ( i-- ) {
					if ( !matchers[i]( elem, context, xml ) ) {
						return false;
					}
				}
				return true;
			} :
			matchers[0];
	}

	function multipleContexts( selector, contexts, results ) {
		var i = 0,
			len = contexts.length;
		for ( ; i < len; i++ ) {
			Sizzle( selector, contexts[i], results );
		}
		return results;
	}

	function condense( unmatched, map, filter, context, xml ) {
		var elem,
			newUnmatched = [],
			i = 0,
			len = unmatched.length,
			mapped = map != null;

		for ( ; i < len; i++ ) {
			if ( (elem = unmatched[i]) ) {
				if ( !filter || filter( elem, context, xml ) ) {
					newUnmatched.push( elem );
					if ( mapped ) {
						map.push( i );
					}
				}
			}
		}

		return newUnmatched;
	}

	function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
		if ( postFilter && !postFilter[ expando ] ) {
			postFilter = setMatcher( postFilter );
		}
		if ( postFinder && !postFinder[ expando ] ) {
			postFinder = setMatcher( postFinder, postSelector );
		}
		return markFunction(function( seed, results, context, xml ) {
			var temp, i, elem,
				preMap = [],
				postMap = [],
				preexisting = results.length,

				// Get initial elements from seed or context
				elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && ( seed || !selector ) ?
					condense( elems, preMap, preFilter, context, xml ) :
					elems,

				matcherOut = matcher ?
					// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
					postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

						// ...intermediate processing is necessary
						[] :

						// ...otherwise use results directly
						results :
					matcherIn;

			// Find primary matches
			if ( matcher ) {
				matcher( matcherIn, matcherOut, context, xml );
			}

			// Apply postFilter
			if ( postFilter ) {
				temp = condense( matcherOut, postMap );
				postFilter( temp, [], context, xml );

				// Un-match failing elements by moving them back to matcherIn
				i = temp.length;
				while ( i-- ) {
					if ( (elem = temp[i]) ) {
						matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
					}
				}
			}

			if ( seed ) {
				if ( postFinder || preFilter ) {
					if ( postFinder ) {
						// Get the final matcherOut by condensing this intermediate into postFinder contexts
						temp = [];
						i = matcherOut.length;
						while ( i-- ) {
							if ( (elem = matcherOut[i]) ) {
								// Restore matcherIn since elem is not yet a final match
								temp.push( (matcherIn[i] = elem) );
							}
						}
						postFinder( null, (matcherOut = []), temp, xml );
					}

					// Move matched elements from seed to results to keep them synchronized
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) &&
							(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

							seed[temp] = !(results[temp] = elem);
						}
					}
				}

			// Add elements to results, through postFinder if defined
			} else {
				matcherOut = condense(
					matcherOut === results ?
						matcherOut.splice( preexisting, matcherOut.length ) :
						matcherOut
				);
				if ( postFinder ) {
					postFinder( null, results, matcherOut, xml );
				} else {
					push.apply( results, matcherOut );
				}
			}
		});
	}

	function matcherFromTokens( tokens ) {
		var checkContext, matcher, j,
			len = tokens.length,
			leadingRelative = Expr.relative[ tokens[0].type ],
			implicitRelative = leadingRelative || Expr.relative[" "],
			i = leadingRelative ? 1 : 0,

			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator( function( elem ) {
				return elem === checkContext;
			}, implicitRelative, true ),
			matchAnyContext = addCombinator( function( elem ) {
				return indexOf( checkContext, elem ) > -1;
			}, implicitRelative, true ),
			matchers = [ function( elem, context, xml ) {
				var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
					(checkContext = context).nodeType ?
						matchContext( elem, context, xml ) :
						matchAnyContext( elem, context, xml ) );
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			} ];

		for ( ; i < len; i++ ) {
			if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
				matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
			} else {
				matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

				// Return special upon seeing a positional matcher
				if ( matcher[ expando ] ) {
					// Find the next relative operator (if any) for proper handling
					j = ++i;
					for ( ; j < len; j++ ) {
						if ( Expr.relative[ tokens[j].type ] ) {
							break;
						}
					}
					return setMatcher(
						i > 1 && elementMatcher( matchers ),
						i > 1 && toSelector(
							// If the preceding token was a descendant combinator, insert an implicit any-element `*`
							tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
						).replace( rtrim, "$1" ),
						matcher,
						i < j && matcherFromTokens( tokens.slice( i, j ) ),
						j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
						j < len && toSelector( tokens )
					);
				}
				matchers.push( matcher );
			}
		}

		return elementMatcher( matchers );
	}

	function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
		var bySet = setMatchers.length > 0,
			byElement = elementMatchers.length > 0,
			superMatcher = function( seed, context, xml, results, outermost ) {
				var elem, j, matcher,
					matchedCount = 0,
					i = "0",
					unmatched = seed && [],
					setMatched = [],
					contextBackup = outermostContext,
					// We must always have either seed elements or outermost context
					elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
					// Use integer dirruns iff this is the outermost matcher
					dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
					len = elems.length;

				if ( outermost ) {
					outermostContext = context === document || context || outermost;
				}

				// Add elements passing elementMatchers directly to results
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
					if ( byElement && elem ) {
						j = 0;
						if ( !context && elem.ownerDocument !== document ) {
							setDocument( elem );
							xml = !documentIsHTML;
						}
						while ( (matcher = elementMatchers[j++]) ) {
							if ( matcher( elem, context || document, xml) ) {
								results.push( elem );
								break;
							}
						}
						if ( outermost ) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if ( bySet ) {
						// They will have gone through all possible matchers
						if ( (elem = !matcher && elem) ) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if ( seed ) {
							unmatched.push( elem );
						}
					}
				}

				// `i` is now the count of elements visited above, and adding it to `matchedCount`
				// makes the latter nonnegative.
				matchedCount += i;

				// Apply set filters to unmatched elements
				// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
				// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
				// no element matchers and no seed.
				// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
				// case, which will result in a "00" `matchedCount` that differs from `i` but is also
				// numerically zero.
				if ( bySet && i !== matchedCount ) {
					j = 0;
					while ( (matcher = setMatchers[j++]) ) {
						matcher( unmatched, setMatched, context, xml );
					}

					if ( seed ) {
						// Reintegrate element matches to eliminate the need for sorting
						if ( matchedCount > 0 ) {
							while ( i-- ) {
								if ( !(unmatched[i] || setMatched[i]) ) {
									setMatched[i] = pop.call( results );
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense( setMatched );
					}

					// Add matches to results
					push.apply( results, setMatched );

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if ( outermost && !seed && setMatched.length > 0 &&
						( matchedCount + setMatchers.length ) > 1 ) {

						Sizzle.uniqueSort( results );
					}
				}

				// Override manipulation of globals by nested matchers
				if ( outermost ) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

		return bySet ?
			markFunction( superMatcher ) :
			superMatcher;
	}

	compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
		var i,
			setMatchers = [],
			elementMatchers = [],
			cached = compilerCache[ selector + " " ];

		if ( !cached ) {
			// Generate a function of recursive functions that can be used to check each element
			if ( !match ) {
				match = tokenize( selector );
			}
			i = match.length;
			while ( i-- ) {
				cached = matcherFromTokens( match[i] );
				if ( cached[ expando ] ) {
					setMatchers.push( cached );
				} else {
					elementMatchers.push( cached );
				}
			}

			// Cache the compiled function
			cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

			// Save selector and tokenization
			cached.selector = selector;
		}
		return cached;
	};

	/**
	 * A low-level selection function that works with Sizzle's compiled
	 *  selector functions
	 * @param {String|Function} selector A selector or a pre-compiled
	 *  selector function built with Sizzle.compile
	 * @param {Element} context
	 * @param {Array} [results]
	 * @param {Array} [seed] A set of elements to match against
	 */
	select = Sizzle.select = function( selector, context, results, seed ) {
		var i, tokens, token, type, find,
			compiled = typeof selector === "function" && selector,
			match = !seed && tokenize( (selector = compiled.selector || selector) );

		results = results || [];

		// Try to minimize operations if there is only one selector in the list and no seed
		// (the latter of which guarantees us context)
		if ( match.length === 1 ) {

			// Reduce context if the leading compound selector is an ID
			tokens = match[0] = match[0].slice( 0 );
			if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
					support.getById && context.nodeType === 9 && documentIsHTML &&
					Expr.relative[ tokens[1].type ] ) {

				context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
				if ( !context ) {
					return results;

				// Precompiled matchers will still verify ancestry, so step up a level
				} else if ( compiled ) {
					context = context.parentNode;
				}

				selector = selector.slice( tokens.shift().value.length );
			}

			// Fetch a seed set for right-to-left matching
			i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
			while ( i-- ) {
				token = tokens[i];

				// Abort if we hit a combinator
				if ( Expr.relative[ (type = token.type) ] ) {
					break;
				}
				if ( (find = Expr.find[ type ]) ) {
					// Search, expanding context for leading sibling combinators
					if ( (seed = find(
						token.matches[0].replace( runescape, funescape ),
						rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
					)) ) {

						// If seed is empty or no tokens remain, we can return early
						tokens.splice( i, 1 );
						selector = seed.length && toSelector( tokens );
						if ( !selector ) {
							push.apply( results, seed );
							return results;
						}

						break;
					}
				}
			}
		}

		// Compile and execute a filtering function if one is not provided
		// Provide `match` to avoid retokenization if we modified the selector above
		( compiled || compile( selector, match ) )(
			seed,
			context,
			!documentIsHTML,
			results,
			!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
		);
		return results;
	};

	// One-time assignments

	// Sort stability
	support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

	// Support: Chrome 14-35+
	// Always assume duplicates if they aren't passed to the comparison function
	support.detectDuplicates = !!hasDuplicate;

	// Initialize against the default document
	setDocument();

	// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
	// Detached nodes confoundingly follow *each other*
	support.sortDetached = assert(function( el ) {
		// Should return 1, but returns 4 (following)
		return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
	});

	// Support: IE<8
	// Prevent attribute/property "interpolation"
	// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
	if ( !assert(function( el ) {
		el.innerHTML = "<a href='#'></a>";
		return el.firstChild.getAttribute("href") === "#" ;
	}) ) {
		addHandle( "type|href|height|width", function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
			}
		});
	}

	// Support: IE<9
	// Use defaultValue in place of getAttribute("value")
	if ( !support.attributes || !assert(function( el ) {
		el.innerHTML = "<input/>";
		el.firstChild.setAttribute( "value", "" );
		return el.firstChild.getAttribute( "value" ) === "";
	}) ) {
		addHandle( "value", function( elem, name, isXML ) {
			if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
				return elem.defaultValue;
			}
		});
	}

	// Support: IE<9
	// Use getAttributeNode to fetch booleans when getAttribute lies
	if ( !assert(function( el ) {
		return el.getAttribute("disabled") == null;
	}) ) {
		addHandle( booleans, function( elem, name, isXML ) {
			var val;
			if ( !isXML ) {
				return elem[ name ] === true ? name.toLowerCase() :
						(val = elem.getAttributeNode( name )) && val.specified ?
						val.value :
					null;
			}
		});
	}

	return Sizzle;

	})( window );



	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;

	// Deprecated
	jQuery.expr[ ":" ] = jQuery.expr.pseudos;
	jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;
	jQuery.escapeSelector = Sizzle.escape;



	var dir = function( elem, dir, until ) {
		var matched = [],
			truncate = until !== undefined;

		while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
			if ( elem.nodeType === 1 ) {
				if ( truncate && jQuery( elem ).is( until ) ) {
					break;
				}
				matched.push( elem );
			}
		}
		return matched;
	};


	var siblings = function( n, elem ) {
		var matched = [];

		for ( ; n; n = n.nextSibling ) {
			if ( n.nodeType === 1 && n !== elem ) {
				matched.push( n );
			}
		}

		return matched;
	};


	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow( elements, qualifier, not ) {
		if ( jQuery.isFunction( qualifier ) ) {
			return jQuery.grep( elements, function( elem, i ) {
				/* jshint -W018 */
				return !!qualifier.call( elem, i, elem ) !== not;
			} );

		}

		if ( qualifier.nodeType ) {
			return jQuery.grep( elements, function( elem ) {
				return ( elem === qualifier ) !== not;
			} );

		}

		if ( typeof qualifier === "string" ) {
			if ( risSimple.test( qualifier ) ) {
				return jQuery.filter( qualifier, elements, not );
			}

			qualifier = jQuery.filter( qualifier, elements );
		}

		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not && elem.nodeType === 1;
		} );
	}

	jQuery.filter = function( expr, elems, not ) {
		var elem = elems[ 0 ];

		if ( not ) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ?
			jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
			jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
				return elem.nodeType === 1;
			} ) );
	};

	jQuery.fn.extend( {
		find: function( selector ) {
			var i, ret,
				len = this.length,
				self = this;

			if ( typeof selector !== "string" ) {
				return this.pushStack( jQuery( selector ).filter( function() {
					for ( i = 0; i < len; i++ ) {
						if ( jQuery.contains( self[ i ], this ) ) {
							return true;
						}
					}
				} ) );
			}

			ret = this.pushStack( [] );

			for ( i = 0; i < len; i++ ) {
				jQuery.find( selector, self[ i ], ret );
			}

			return len > 1 ? jQuery.uniqueSort( ret ) : ret;
		},
		filter: function( selector ) {
			return this.pushStack( winnow( this, selector || [], false ) );
		},
		not: function( selector ) {
			return this.pushStack( winnow( this, selector || [], true ) );
		},
		is: function( selector ) {
			return !!winnow(
				this,

				// If this is a positional/relative selector, check membership in the returned set
				// so $("p:first").is("p:last") won't return true for a doc with two "p".
				typeof selector === "string" && rneedsContext.test( selector ) ?
					jQuery( selector ) :
					selector || [],
				false
			).length;
		}
	} );


	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,

		// A simple way to check for HTML strings
		// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
		// Strict HTML recognition (#11290: must start with <)
		// Shortcut simple #id case for speed
		rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

		init = jQuery.fn.init = function( selector, context, root ) {
			var match, elem;

			// HANDLE: $(""), $(null), $(undefined), $(false)
			if ( !selector ) {
				return this;
			}

			// Method init() accepts an alternate rootjQuery
			// so migrate can support jQuery.sub (gh-2101)
			root = root || rootjQuery;

			// Handle HTML strings
			if ( typeof selector === "string" ) {
				if ( selector[ 0 ] === "<" &&
					selector[ selector.length - 1 ] === ">" &&
					selector.length >= 3 ) {

					// Assume that strings that start and end with <> are HTML and skip the regex check
					match = [ null, selector, null ];

				} else {
					match = rquickExpr.exec( selector );
				}

				// Match html or make sure no context is specified for #id
				if ( match && ( match[ 1 ] || !context ) ) {

					// HANDLE: $(html) -> $(array)
					if ( match[ 1 ] ) {
						context = context instanceof jQuery ? context[ 0 ] : context;

						// Option to run scripts is true for back-compat
						// Intentionally let the error be thrown if parseHTML is not present
						jQuery.merge( this, jQuery.parseHTML(
							match[ 1 ],
							context && context.nodeType ? context.ownerDocument || context : document,
							true
						) );

						// HANDLE: $(html, props)
						if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
							for ( match in context ) {

								// Properties of context are called as methods if possible
								if ( jQuery.isFunction( this[ match ] ) ) {
									this[ match ]( context[ match ] );

								// ...and otherwise set as attributes
								} else {
									this.attr( match, context[ match ] );
								}
							}
						}

						return this;

					// HANDLE: $(#id)
					} else {
						elem = document.getElementById( match[ 2 ] );

						if ( elem ) {

							// Inject the element directly into the jQuery object
							this[ 0 ] = elem;
							this.length = 1;
						}
						return this;
					}

				// HANDLE: $(expr, $(...))
				} else if ( !context || context.jquery ) {
					return ( context || root ).find( selector );

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
				} else {
					return this.constructor( context ).find( selector );
				}

			// HANDLE: $(DOMElement)
			} else if ( selector.nodeType ) {
				this[ 0 ] = selector;
				this.length = 1;
				return this;

			// HANDLE: $(function)
			// Shortcut for document ready
			} else if ( jQuery.isFunction( selector ) ) {
				return root.ready !== undefined ?
					root.ready( selector ) :

					// Execute immediately if ready is not present
					selector( jQuery );
			}

			return jQuery.makeArray( selector, this );
		};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery( document );


	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

		// Methods guaranteed to produce a unique set when starting from a unique set
		guaranteedUnique = {
			children: true,
			contents: true,
			next: true,
			prev: true
		};

	jQuery.fn.extend( {
		has: function( target ) {
			var targets = jQuery( target, this ),
				l = targets.length;

			return this.filter( function() {
				var i = 0;
				for ( ; i < l; i++ ) {
					if ( jQuery.contains( this, targets[ i ] ) ) {
						return true;
					}
				}
			} );
		},

		closest: function( selectors, context ) {
			var cur,
				i = 0,
				l = this.length,
				matched = [],
				targets = typeof selectors !== "string" && jQuery( selectors );

			// Positional selectors never match, since there's no _selection_ context
			if ( !rneedsContext.test( selectors ) ) {
				for ( ; i < l; i++ ) {
					for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

						// Always skip document fragments
						if ( cur.nodeType < 11 && ( targets ?
							targets.index( cur ) > -1 :

							// Don't pass non-elements to Sizzle
							cur.nodeType === 1 &&
								jQuery.find.matchesSelector( cur, selectors ) ) ) {

							matched.push( cur );
							break;
						}
					}
				}
			}

			return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
		},

		// Determine the position of an element within the set
		index: function( elem ) {

			// No argument, return index in parent
			if ( !elem ) {
				return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if ( typeof elem === "string" ) {
				return indexOf.call( jQuery( elem ), this[ 0 ] );
			}

			// Locate the position of the desired element
			return indexOf.call( this,

				// If it receives a jQuery object, the first element is used
				elem.jquery ? elem[ 0 ] : elem
			);
		},

		add: function( selector, context ) {
			return this.pushStack(
				jQuery.uniqueSort(
					jQuery.merge( this.get(), jQuery( selector, context ) )
				)
			);
		},

		addBack: function( selector ) {
			return this.add( selector == null ?
				this.prevObject : this.prevObject.filter( selector )
			);
		}
	} );

	function sibling( cur, dir ) {
		while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
		return cur;
	}

	jQuery.each( {
		parent: function( elem ) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function( elem ) {
			return dir( elem, "parentNode" );
		},
		parentsUntil: function( elem, i, until ) {
			return dir( elem, "parentNode", until );
		},
		next: function( elem ) {
			return sibling( elem, "nextSibling" );
		},
		prev: function( elem ) {
			return sibling( elem, "previousSibling" );
		},
		nextAll: function( elem ) {
			return dir( elem, "nextSibling" );
		},
		prevAll: function( elem ) {
			return dir( elem, "previousSibling" );
		},
		nextUntil: function( elem, i, until ) {
			return dir( elem, "nextSibling", until );
		},
		prevUntil: function( elem, i, until ) {
			return dir( elem, "previousSibling", until );
		},
		siblings: function( elem ) {
			return siblings( ( elem.parentNode || {} ).firstChild, elem );
		},
		children: function( elem ) {
			return siblings( elem.firstChild );
		},
		contents: function( elem ) {
			return elem.contentDocument || jQuery.merge( [], elem.childNodes );
		}
	}, function( name, fn ) {
		jQuery.fn[ name ] = function( until, selector ) {
			var matched = jQuery.map( this, fn, until );

			if ( name.slice( -5 ) !== "Until" ) {
				selector = until;
			}

			if ( selector && typeof selector === "string" ) {
				matched = jQuery.filter( selector, matched );
			}

			if ( this.length > 1 ) {

				// Remove duplicates
				if ( !guaranteedUnique[ name ] ) {
					jQuery.uniqueSort( matched );
				}

				// Reverse order for parents* and prev-derivatives
				if ( rparentsprev.test( name ) ) {
					matched.reverse();
				}
			}

			return this.pushStack( matched );
		};
	} );
	var rnotwhite = ( /\S+/g );



	// Convert String-formatted options into Object-formatted ones
	function createOptions( options ) {
		var object = {};
		jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
			object[ flag ] = true;
		} );
		return object;
	}

	/*
	 * Create a callback list using the following parameters:
	 *
	 *	options: an optional list of space-separated options that will change how
	 *			the callback list behaves or a more traditional option object
	 *
	 * By default a callback list will act like an event callback list and can be
	 * "fired" multiple times.
	 *
	 * Possible options:
	 *
	 *	once:			will ensure the callback list can only be fired once (like a Deferred)
	 *
	 *	memory:			will keep track of previous values and will call any callback added
	 *					after the list has been fired right away with the latest "memorized"
	 *					values (like a Deferred)
	 *
	 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
	 *
	 *	stopOnFalse:	interrupt callings when a callback returns false
	 *
	 */
	jQuery.Callbacks = function( options ) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ?
			createOptions( options ) :
			jQuery.extend( {}, options );

		var // Flag to know if list is currently firing
			firing,

			// Last fire value for non-forgettable lists
			memory,

			// Flag to know if list was already fired
			fired,

			// Flag to prevent firing
			locked,

			// Actual callback list
			list = [],

			// Queue of execution data for repeatable lists
			queue = [],

			// Index of currently firing callback (modified by add/remove as needed)
			firingIndex = -1,

			// Fire callbacks
			fire = function() {

				// Enforce single-firing
				locked = options.once;

				// Execute callbacks for all pending executions,
				// respecting firingIndex overrides and runtime changes
				fired = firing = true;
				for ( ; queue.length; firingIndex = -1 ) {
					memory = queue.shift();
					while ( ++firingIndex < list.length ) {

						// Run callback and check for early termination
						if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
							options.stopOnFalse ) {

							// Jump to end and forget the data so .add doesn't re-fire
							firingIndex = list.length;
							memory = false;
						}
					}
				}

				// Forget the data if we're done with it
				if ( !options.memory ) {
					memory = false;
				}

				firing = false;

				// Clean up if we're done firing for good
				if ( locked ) {

					// Keep an empty list if we have data for future add calls
					if ( memory ) {
						list = [];

					// Otherwise, this object is spent
					} else {
						list = "";
					}
				}
			},

			// Actual Callbacks object
			self = {

				// Add a callback or a collection of callbacks to the list
				add: function() {
					if ( list ) {

						// If we have memory from a past run, we should fire after adding
						if ( memory && !firing ) {
							firingIndex = list.length - 1;
							queue.push( memory );
						}

						( function add( args ) {
							jQuery.each( args, function( _, arg ) {
								if ( jQuery.isFunction( arg ) ) {
									if ( !options.unique || !self.has( arg ) ) {
										list.push( arg );
									}
								} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

									// Inspect recursively
									add( arg );
								}
							} );
						} )( arguments );

						if ( memory && !firing ) {
							fire();
						}
					}
					return this;
				},

				// Remove a callback from the list
				remove: function() {
					jQuery.each( arguments, function( _, arg ) {
						var index;
						while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
							list.splice( index, 1 );

							// Handle firing indexes
							if ( index <= firingIndex ) {
								firingIndex--;
							}
						}
					} );
					return this;
				},

				// Check if a given callback is in the list.
				// If no argument is given, return whether or not list has callbacks attached.
				has: function( fn ) {
					return fn ?
						jQuery.inArray( fn, list ) > -1 :
						list.length > 0;
				},

				// Remove all callbacks from the list
				empty: function() {
					if ( list ) {
						list = [];
					}
					return this;
				},

				// Disable .fire and .add
				// Abort any current/pending executions
				// Clear all callbacks and values
				disable: function() {
					locked = queue = [];
					list = memory = "";
					return this;
				},
				disabled: function() {
					return !list;
				},

				// Disable .fire
				// Also disable .add unless we have memory (since it would have no effect)
				// Abort any pending executions
				lock: function() {
					locked = queue = [];
					if ( !memory && !firing ) {
						list = memory = "";
					}
					return this;
				},
				locked: function() {
					return !!locked;
				},

				// Call all callbacks with the given context and arguments
				fireWith: function( context, args ) {
					if ( !locked ) {
						args = args || [];
						args = [ context, args.slice ? args.slice() : args ];
						queue.push( args );
						if ( !firing ) {
							fire();
						}
					}
					return this;
				},

				// Call all the callbacks with the given arguments
				fire: function() {
					self.fireWith( this, arguments );
					return this;
				},

				// To know if the callbacks have already been called at least once
				fired: function() {
					return !!fired;
				}
			};

		return self;
	};


	function Identity( v ) {
		return v;
	}
	function Thrower( ex ) {
		throw ex;
	}

	function adoptValue( value, resolve, reject ) {
		var method;

		try {

			// Check for promise aspect first to privilege synchronous behavior
			if ( value && jQuery.isFunction( ( method = value.promise ) ) ) {
				method.call( value ).done( resolve ).fail( reject );

			// Other thenables
			} else if ( value && jQuery.isFunction( ( method = value.then ) ) ) {
				method.call( value, resolve, reject );

			// Other non-thenables
			} else {

				// Support: Android 4.0 only
				// Strict mode functions invoked without .call/.apply get global-object context
				resolve.call( undefined, value );
			}

		// For Promises/A+, convert exceptions into rejections
		// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
		// Deferred#then to conditionally suppress rejection.
		} catch ( /*jshint -W002 */ value ) {

			// Support: Android 4.0 only
			// Strict mode functions invoked without .call/.apply get global-object context
			reject.call( undefined, value );
		}
	}

	jQuery.extend( {

		Deferred: function( func ) {
			var tuples = [

					// action, add listener, callbacks,
					// ... .then handlers, argument index, [final state]
					[ "notify", "progress", jQuery.Callbacks( "memory" ),
						jQuery.Callbacks( "memory" ), 2 ],
					[ "resolve", "done", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 0, "resolved" ],
					[ "reject", "fail", jQuery.Callbacks( "once memory" ),
						jQuery.Callbacks( "once memory" ), 1, "rejected" ]
				],
				state = "pending",
				promise = {
					state: function() {
						return state;
					},
					always: function() {
						deferred.done( arguments ).fail( arguments );
						return this;
					},
					"catch": function( fn ) {
						return promise.then( null, fn );
					},

					// Keep pipe for back-compat
					pipe: function( /* fnDone, fnFail, fnProgress */ ) {
						var fns = arguments;

						return jQuery.Deferred( function( newDefer ) {
							jQuery.each( tuples, function( i, tuple ) {

								// Map tuples (progress, done, fail) to arguments (done, fail, progress)
								var fn = jQuery.isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

								// deferred.progress(function() { bind to newDefer or newDefer.notify })
								// deferred.done(function() { bind to newDefer or newDefer.resolve })
								// deferred.fail(function() { bind to newDefer or newDefer.reject })
								deferred[ tuple[ 1 ] ]( function() {
									var returned = fn && fn.apply( this, arguments );
									if ( returned && jQuery.isFunction( returned.promise ) ) {
										returned.promise()
											.progress( newDefer.notify )
											.done( newDefer.resolve )
											.fail( newDefer.reject );
									} else {
										newDefer[ tuple[ 0 ] + "With" ](
											this,
											fn ? [ returned ] : arguments
										);
									}
								} );
							} );
							fns = null;
						} ).promise();
					},
					then: function( onFulfilled, onRejected, onProgress ) {
						var maxDepth = 0;
						function resolve( depth, deferred, handler, special ) {
							return function() {
								var that = this,
									args = arguments,
									mightThrow = function() {
										var returned, then;

										// Support: Promises/A+ section 2.3.3.3.3
										// https://promisesaplus.com/#point-59
										// Ignore double-resolution attempts
										if ( depth < maxDepth ) {
											return;
										}

										returned = handler.apply( that, args );

										// Support: Promises/A+ section 2.3.1
										// https://promisesaplus.com/#point-48
										if ( returned === deferred.promise() ) {
											throw new TypeError( "Thenable self-resolution" );
										}

										// Support: Promises/A+ sections 2.3.3.1, 3.5
										// https://promisesaplus.com/#point-54
										// https://promisesaplus.com/#point-75
										// Retrieve `then` only once
										then = returned &&

											// Support: Promises/A+ section 2.3.4
											// https://promisesaplus.com/#point-64
											// Only check objects and functions for thenability
											( typeof returned === "object" ||
												typeof returned === "function" ) &&
											returned.then;

										// Handle a returned thenable
										if ( jQuery.isFunction( then ) ) {

											// Special processors (notify) just wait for resolution
											if ( special ) {
												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special )
												);

											// Normal processors (resolve) also hook into progress
											} else {

												// ...and disregard older resolution values
												maxDepth++;

												then.call(
													returned,
													resolve( maxDepth, deferred, Identity, special ),
													resolve( maxDepth, deferred, Thrower, special ),
													resolve( maxDepth, deferred, Identity,
														deferred.notifyWith )
												);
											}

										// Handle all other returned values
										} else {

											// Only substitute handlers pass on context
											// and multiple values (non-spec behavior)
											if ( handler !== Identity ) {
												that = undefined;
												args = [ returned ];
											}

											// Process the value(s)
											// Default process is resolve
											( special || deferred.resolveWith )( that, args );
										}
									},

									// Only normal processors (resolve) catch and reject exceptions
									process = special ?
										mightThrow :
										function() {
											try {
												mightThrow();
											} catch ( e ) {

												if ( jQuery.Deferred.exceptionHook ) {
													jQuery.Deferred.exceptionHook( e,
														process.stackTrace );
												}

												// Support: Promises/A+ section 2.3.3.3.4.1
												// https://promisesaplus.com/#point-61
												// Ignore post-resolution exceptions
												if ( depth + 1 >= maxDepth ) {

													// Only substitute handlers pass on context
													// and multiple values (non-spec behavior)
													if ( handler !== Thrower ) {
														that = undefined;
														args = [ e ];
													}

													deferred.rejectWith( that, args );
												}
											}
										};

								// Support: Promises/A+ section 2.3.3.3.1
								// https://promisesaplus.com/#point-57
								// Re-resolve promises immediately to dodge false rejection from
								// subsequent errors
								if ( depth ) {
									process();
								} else {

									// Call an optional hook to record the stack, in case of exception
									// since it's otherwise lost when execution goes async
									if ( jQuery.Deferred.getStackHook ) {
										process.stackTrace = jQuery.Deferred.getStackHook();
									}
									window.setTimeout( process );
								}
							};
						}

						return jQuery.Deferred( function( newDefer ) {

							// progress_handlers.add( ... )
							tuples[ 0 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onProgress ) ?
										onProgress :
										Identity,
									newDefer.notifyWith
								)
							);

							// fulfilled_handlers.add( ... )
							tuples[ 1 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onFulfilled ) ?
										onFulfilled :
										Identity
								)
							);

							// rejected_handlers.add( ... )
							tuples[ 2 ][ 3 ].add(
								resolve(
									0,
									newDefer,
									jQuery.isFunction( onRejected ) ?
										onRejected :
										Thrower
								)
							);
						} ).promise();
					},

					// Get a promise for this deferred
					// If obj is provided, the promise aspect is added to the object
					promise: function( obj ) {
						return obj != null ? jQuery.extend( obj, promise ) : promise;
					}
				},
				deferred = {};

			// Add list-specific methods
			jQuery.each( tuples, function( i, tuple ) {
				var list = tuple[ 2 ],
					stateString = tuple[ 5 ];

				// promise.progress = list.add
				// promise.done = list.add
				// promise.fail = list.add
				promise[ tuple[ 1 ] ] = list.add;

				// Handle state
				if ( stateString ) {
					list.add(
						function() {

							// state = "resolved" (i.e., fulfilled)
							// state = "rejected"
							state = stateString;
						},

						// rejected_callbacks.disable
						// fulfilled_callbacks.disable
						tuples[ 3 - i ][ 2 ].disable,

						// progress_callbacks.lock
						tuples[ 0 ][ 2 ].lock
					);
				}

				// progress_handlers.fire
				// fulfilled_handlers.fire
				// rejected_handlers.fire
				list.add( tuple[ 3 ].fire );

				// deferred.notify = function() { deferred.notifyWith(...) }
				// deferred.resolve = function() { deferred.resolveWith(...) }
				// deferred.reject = function() { deferred.rejectWith(...) }
				deferred[ tuple[ 0 ] ] = function() {
					deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
					return this;
				};

				// deferred.notifyWith = list.fireWith
				// deferred.resolveWith = list.fireWith
				// deferred.rejectWith = list.fireWith
				deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
			} );

			// Make the deferred a promise
			promise.promise( deferred );

			// Call given func if any
			if ( func ) {
				func.call( deferred, deferred );
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function( singleValue ) {
			var

				// count of uncompleted subordinates
				remaining = arguments.length,

				// count of unprocessed arguments
				i = remaining,

				// subordinate fulfillment data
				resolveContexts = Array( i ),
				resolveValues = slice.call( arguments ),

				// the master Deferred
				master = jQuery.Deferred(),

				// subordinate callback factory
				updateFunc = function( i ) {
					return function( value ) {
						resolveContexts[ i ] = this;
						resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
						if ( !( --remaining ) ) {
							master.resolveWith( resolveContexts, resolveValues );
						}
					};
				};

			// Single- and empty arguments are adopted like Promise.resolve
			if ( remaining <= 1 ) {
				adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject );

				// Use .then() to unwrap secondary thenables (cf. gh-3000)
				if ( master.state() === "pending" ||
					jQuery.isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

					return master.then();
				}
			}

			// Multiple arguments are aggregated like Promise.all array elements
			while ( i-- ) {
				adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
			}

			return master.promise();
		}
	} );


	// These usually indicate a programmer mistake during development,
	// warn about them ASAP rather than swallowing them by default.
	var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

	jQuery.Deferred.exceptionHook = function( error, stack ) {

		// Support: IE 8 - 9 only
		// Console exists when dev tools are open, which can happen at any time
		if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
			window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
		}
	};




	// The deferred used on DOM ready
	var readyList = jQuery.Deferred();

	jQuery.fn.ready = function( fn ) {

		readyList.then( fn );

		return this;
	};

	jQuery.extend( {

		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function( hold ) {
			if ( hold ) {
				jQuery.readyWait++;
			} else {
				jQuery.ready( true );
			}
		},

		// Handle when the DOM is ready
		ready: function( wait ) {

			// Abort if there are pending holds or we're already ready
			if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if ( wait !== true && --jQuery.readyWait > 0 ) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith( document, [ jQuery ] );
		}
	} );

	jQuery.ready.then = readyList.then;

	// The ready event handler and self cleanup method
	function completed() {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );
		jQuery.ready();
	}

	// Catch cases where $(document).ready() is called
	// after the browser event has already occurred.
	// Support: IE <=9 - 10 only
	// Older IE sometimes signals "interactive" too soon
	if ( document.readyState === "complete" ||
		( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

		// Handle it asynchronously to allow scripts the opportunity to delay ready
		window.setTimeout( jQuery.ready );

	} else {

		// Use the handy event callback
		document.addEventListener( "DOMContentLoaded", completed );

		// A fallback to window.onload, that will always work
		window.addEventListener( "load", completed );
	}




	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
		var i = 0,
			len = elems.length,
			bulk = key == null;

		// Sets many values
		if ( jQuery.type( key ) === "object" ) {
			chainable = true;
			for ( i in key ) {
				access( elems, fn, i, key[ i ], true, emptyGet, raw );
			}

		// Sets one value
		} else if ( value !== undefined ) {
			chainable = true;

			if ( !jQuery.isFunction( value ) ) {
				raw = true;
			}

			if ( bulk ) {

				// Bulk operations run against the entire set
				if ( raw ) {
					fn.call( elems, value );
					fn = null;

				// ...except when executing function values
				} else {
					bulk = fn;
					fn = function( elem, key, value ) {
						return bulk.call( jQuery( elem ), value );
					};
				}
			}

			if ( fn ) {
				for ( ; i < len; i++ ) {
					fn(
						elems[ i ], key, raw ?
						value :
						value.call( elems[ i ], i, fn( elems[ i ], key ) )
					);
				}
			}
		}

		return chainable ?
			elems :

			// Gets
			bulk ?
				fn.call( elems ) :
				len ? fn( elems[ 0 ], key ) : emptyGet;
	};
	var acceptData = function( owner ) {

		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
	};




	function Data() {
		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;

	Data.prototype = {

		cache: function( owner ) {

			// Check if the owner object already has a cache
			var value = owner[ this.expando ];

			// If not, create one
			if ( !value ) {
				value = {};

				// We can accept data for non-element nodes in modern browsers,
				// but we should not, see #8335.
				// Always return an empty object.
				if ( acceptData( owner ) ) {

					// If it is a node unlikely to be stringify-ed or looped over
					// use plain assignment
					if ( owner.nodeType ) {
						owner[ this.expando ] = value;

					// Otherwise secure it in a non-enumerable property
					// configurable must be true to allow the property to be
					// deleted when data is removed
					} else {
						Object.defineProperty( owner, this.expando, {
							value: value,
							configurable: true
						} );
					}
				}
			}

			return value;
		},
		set: function( owner, data, value ) {
			var prop,
				cache = this.cache( owner );

			// Handle: [ owner, key, value ] args
			// Always use camelCase key (gh-2257)
			if ( typeof data === "string" ) {
				cache[ jQuery.camelCase( data ) ] = value;

			// Handle: [ owner, { properties } ] args
			} else {

				// Copy the properties one-by-one to the cache object
				for ( prop in data ) {
					cache[ jQuery.camelCase( prop ) ] = data[ prop ];
				}
			}
			return cache;
		},
		get: function( owner, key ) {
			return key === undefined ?
				this.cache( owner ) :

				// Always use camelCase key (gh-2257)
				owner[ this.expando ] && owner[ this.expando ][ jQuery.camelCase( key ) ];
		},
		access: function( owner, key, value ) {

			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if ( key === undefined ||
					( ( key && typeof key === "string" ) && value === undefined ) ) {

				return this.get( owner, key );
			}

			// When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set( owner, key, value );

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function( owner, key ) {
			var i,
				cache = owner[ this.expando ];

			if ( cache === undefined ) {
				return;
			}

			if ( key !== undefined ) {

				// Support array or space separated string of keys
				if ( jQuery.isArray( key ) ) {

					// If key is an array of keys...
					// We always set camelCase keys, so remove that.
					key = key.map( jQuery.camelCase );
				} else {
					key = jQuery.camelCase( key );

					// If a key with the spaces exists, use it.
					// Otherwise, create an array by matching non-whitespace
					key = key in cache ?
						[ key ] :
						( key.match( rnotwhite ) || [] );
				}

				i = key.length;

				while ( i-- ) {
					delete cache[ key[ i ] ];
				}
			}

			// Remove the expando if there's no more data
			if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

				// Support: Chrome <=35 - 45
				// Webkit & Blink performance suffers when deleting properties
				// from DOM nodes, so set to undefined instead
				// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
				if ( owner.nodeType ) {
					owner[ this.expando ] = undefined;
				} else {
					delete owner[ this.expando ];
				}
			}
		},
		hasData: function( owner ) {
			var cache = owner[ this.expando ];
			return cache !== undefined && !jQuery.isEmptyObject( cache );
		}
	};
	var dataPriv = new Data();

	var dataUser = new Data();



	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
		rmultiDash = /[A-Z]/g;

	function dataAttr( elem, key, data ) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if ( data === undefined && elem.nodeType === 1 ) {
			name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
			data = elem.getAttribute( name );

			if ( typeof data === "string" ) {
				try {
					data = data === "true" ? true :
						data === "false" ? false :
						data === "null" ? null :

						// Only convert to a number if it doesn't change the string
						+data + "" === data ? +data :
						rbrace.test( data ) ? JSON.parse( data ) :
						data;
				} catch ( e ) {}

				// Make sure we set the data so it isn't changed later
				dataUser.set( elem, key, data );
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend( {
		hasData: function( elem ) {
			return dataUser.hasData( elem ) || dataPriv.hasData( elem );
		},

		data: function( elem, name, data ) {
			return dataUser.access( elem, name, data );
		},

		removeData: function( elem, name ) {
			dataUser.remove( elem, name );
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to dataPriv methods, these can be deprecated.
		_data: function( elem, name, data ) {
			return dataPriv.access( elem, name, data );
		},

		_removeData: function( elem, name ) {
			dataPriv.remove( elem, name );
		}
	} );

	jQuery.fn.extend( {
		data: function( key, value ) {
			var i, name, data,
				elem = this[ 0 ],
				attrs = elem && elem.attributes;

			// Gets all values
			if ( key === undefined ) {
				if ( this.length ) {
					data = dataUser.get( elem );

					if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
						i = attrs.length;
						while ( i-- ) {

							// Support: IE 11 only
							// The attrs elements can be null (#14894)
							if ( attrs[ i ] ) {
								name = attrs[ i ].name;
								if ( name.indexOf( "data-" ) === 0 ) {
									name = jQuery.camelCase( name.slice( 5 ) );
									dataAttr( elem, name, data[ name ] );
								}
							}
						}
						dataPriv.set( elem, "hasDataAttrs", true );
					}
				}

				return data;
			}

			// Sets multiple values
			if ( typeof key === "object" ) {
				return this.each( function() {
					dataUser.set( this, key );
				} );
			}

			return access( this, function( value ) {
				var data;

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if ( elem && value === undefined ) {

					// Attempt to get data from the cache
					// The key will always be camelCased in Data
					data = dataUser.get( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr( elem, key );
					if ( data !== undefined ) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each( function() {

					// We always store the camelCased key
					dataUser.set( this, key, value );
				} );
			}, null, value, arguments.length > 1, null, true );
		},

		removeData: function( key ) {
			return this.each( function() {
				dataUser.remove( this, key );
			} );
		}
	} );


	jQuery.extend( {
		queue: function( elem, type, data ) {
			var queue;

			if ( elem ) {
				type = ( type || "fx" ) + "queue";
				queue = dataPriv.get( elem, type );

				// Speed up dequeue by getting out quickly if this is just a lookup
				if ( data ) {
					if ( !queue || jQuery.isArray( data ) ) {
						queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
					} else {
						queue.push( data );
					}
				}
				return queue || [];
			}
		},

		dequeue: function( elem, type ) {
			type = type || "fx";

			var queue = jQuery.queue( elem, type ),
				startLength = queue.length,
				fn = queue.shift(),
				hooks = jQuery._queueHooks( elem, type ),
				next = function() {
					jQuery.dequeue( elem, type );
				};

			// If the fx queue is dequeued, always remove the progress sentinel
			if ( fn === "inprogress" ) {
				fn = queue.shift();
				startLength--;
			}

			if ( fn ) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if ( type === "fx" ) {
					queue.unshift( "inprogress" );
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call( elem, next, hooks );
			}

			if ( !startLength && hooks ) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function( elem, type ) {
			var key = type + "queueHooks";
			return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
				empty: jQuery.Callbacks( "once memory" ).add( function() {
					dataPriv.remove( elem, [ type + "queue", key ] );
				} )
			} );
		}
	} );

	jQuery.fn.extend( {
		queue: function( type, data ) {
			var setter = 2;

			if ( typeof type !== "string" ) {
				data = type;
				type = "fx";
				setter--;
			}

			if ( arguments.length < setter ) {
				return jQuery.queue( this[ 0 ], type );
			}

			return data === undefined ?
				this :
				this.each( function() {
					var queue = jQuery.queue( this, type, data );

					// Ensure a hooks for this queue
					jQuery._queueHooks( this, type );

					if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
						jQuery.dequeue( this, type );
					}
				} );
		},
		dequeue: function( type ) {
			return this.each( function() {
				jQuery.dequeue( this, type );
			} );
		},
		clearQueue: function( type ) {
			return this.queue( type || "fx", [] );
		},

		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function( type, obj ) {
			var tmp,
				count = 1,
				defer = jQuery.Deferred(),
				elements = this,
				i = this.length,
				resolve = function() {
					if ( !( --count ) ) {
						defer.resolveWith( elements, [ elements ] );
					}
				};

			if ( typeof type !== "string" ) {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while ( i-- ) {
				tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
				if ( tmp && tmp.empty ) {
					count++;
					tmp.empty.add( resolve );
				}
			}
			resolve();
			return defer.promise( obj );
		}
	} );
	var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

	var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


	var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

	var isHiddenWithinTree = function( elem, el ) {

			// isHiddenWithinTree might be called from jQuery#filter function;
			// in that case, element will be second argument
			elem = el || elem;

			// Inline style trumps all
			return elem.style.display === "none" ||
				elem.style.display === "" &&

				// Otherwise, check computed style
				// Support: Firefox <=43 - 45
				// Disconnected elements can have computed display: none, so first confirm that elem is
				// in the document.
				jQuery.contains( elem.ownerDocument, elem ) &&

				jQuery.css( elem, "display" ) === "none";
		};

	var swap = function( elem, options, callback, args ) {
		var ret, name,
			old = {};

		// Remember the old values, and insert the new ones
		for ( name in options ) {
			old[ name ] = elem.style[ name ];
			elem.style[ name ] = options[ name ];
		}

		ret = callback.apply( elem, args || [] );

		// Revert the old values
		for ( name in options ) {
			elem.style[ name ] = old[ name ];
		}

		return ret;
	};




	function adjustCSS( elem, prop, valueParts, tween ) {
		var adjusted,
			scale = 1,
			maxIterations = 20,
			currentValue = tween ?
				function() { return tween.cur(); } :
				function() { return jQuery.css( elem, prop, "" ); },
			initial = currentValue(),
			unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

			// Starting value computation is required for potential unit mismatches
			initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
				rcssNum.exec( jQuery.css( elem, prop ) );

		if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

			// Trust units reported by jQuery.css
			unit = unit || initialInUnit[ 3 ];

			// Make sure we update the tween properties later on
			valueParts = valueParts || [];

			// Iteratively approximate from a nonzero starting point
			initialInUnit = +initial || 1;

			do {

				// If previous iteration zeroed out, double until we get *something*.
				// Use string for doubling so we don't accidentally see scale as unchanged below
				scale = scale || ".5";

				// Adjust and apply
				initialInUnit = initialInUnit / scale;
				jQuery.style( elem, prop, initialInUnit + unit );

			// Update scale, tolerating zero or NaN from tween.cur()
			// Break the loop if scale is unchanged or perfect, or if we've just had enough.
			} while (
				scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
			);
		}

		if ( valueParts ) {
			initialInUnit = +initialInUnit || +initial || 0;

			// Apply relative offset (+=/-=) if specified
			adjusted = valueParts[ 1 ] ?
				initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
				+valueParts[ 2 ];
			if ( tween ) {
				tween.unit = unit;
				tween.start = initialInUnit;
				tween.end = adjusted;
			}
		}
		return adjusted;
	}


	var defaultDisplayMap = {};

	function getDefaultDisplay( elem ) {
		var temp,
			doc = elem.ownerDocument,
			nodeName = elem.nodeName,
			display = defaultDisplayMap[ nodeName ];

		if ( display ) {
			return display;
		}

		temp = doc.body.appendChild( doc.createElement( nodeName ) ),
		display = jQuery.css( temp, "display" );

		temp.parentNode.removeChild( temp );

		if ( display === "none" ) {
			display = "block";
		}
		defaultDisplayMap[ nodeName ] = display;

		return display;
	}

	function showHide( elements, show ) {
		var display, elem,
			values = [],
			index = 0,
			length = elements.length;

		// Determine new display value for elements that need to change
		for ( ; index < length; index++ ) {
			elem = elements[ index ];
			if ( !elem.style ) {
				continue;
			}

			display = elem.style.display;
			if ( show ) {

				// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
				// check is required in this first loop unless we have a nonempty display value (either
				// inline or about-to-be-restored)
				if ( display === "none" ) {
					values[ index ] = dataPriv.get( elem, "display" ) || null;
					if ( !values[ index ] ) {
						elem.style.display = "";
					}
				}
				if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
					values[ index ] = getDefaultDisplay( elem );
				}
			} else {
				if ( display !== "none" ) {
					values[ index ] = "none";

					// Remember what we're overwriting
					dataPriv.set( elem, "display", display );
				}
			}
		}

		// Set the display of the elements in a second loop to avoid constant reflow
		for ( index = 0; index < length; index++ ) {
			if ( values[ index ] != null ) {
				elements[ index ].style.display = values[ index ];
			}
		}

		return elements;
	}

	jQuery.fn.extend( {
		show: function() {
			return showHide( this, true );
		},
		hide: function() {
			return showHide( this );
		},
		toggle: function( state ) {
			if ( typeof state === "boolean" ) {
				return state ? this.show() : this.hide();
			}

			return this.each( function() {
				if ( isHiddenWithinTree( this ) ) {
					jQuery( this ).show();
				} else {
					jQuery( this ).hide();
				}
			} );
		}
	} );
	var rcheckableType = ( /^(?:checkbox|radio)$/i );

	var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

	var rscriptType = ( /^$|\/(?:java|ecma)script/i );



	// We have to close these tags to support XHTML (#13200)
	var wrapMap = {

		// Support: IE <=9 only
		option: [ 1, "<select multiple='multiple'>", "</select>" ],

		// XHTML parsers do not magically insert elements in the
		// same way that tag soup parsers do. So we cannot shorten
		// this by omitting <tbody> or other required elements.
		thead: [ 1, "<table>", "</table>" ],
		col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
		tr: [ 2, "<table><tbody>", "</tbody></table>" ],
		td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

		_default: [ 0, "", "" ]
	};

	// Support: IE <=9 only
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;


	function getAll( context, tag ) {

		// Support: IE <=9 - 11 only
		// Use typeof to avoid zero-argument method invocation on host objects (#15151)
		var ret = typeof context.getElementsByTagName !== "undefined" ?
				context.getElementsByTagName( tag || "*" ) :
				typeof context.querySelectorAll !== "undefined" ?
					context.querySelectorAll( tag || "*" ) :
				[];

		return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
			jQuery.merge( [ context ], ret ) :
			ret;
	}


	// Mark scripts as having already been evaluated
	function setGlobalEval( elems, refElements ) {
		var i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			dataPriv.set(
				elems[ i ],
				"globalEval",
				!refElements || dataPriv.get( refElements[ i ], "globalEval" )
			);
		}
	}


	var rhtml = /<|&#?\w+;/;

	function buildFragment( elems, context, scripts, selection, ignored ) {
		var elem, tmp, tag, wrap, contains, j,
			fragment = context.createDocumentFragment(),
			nodes = [],
			i = 0,
			l = elems.length;

		for ( ; i < l; i++ ) {
			elem = elems[ i ];

			if ( elem || elem === 0 ) {

				// Add nodes directly
				if ( jQuery.type( elem ) === "object" ) {

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

				// Convert non-html into a text node
				} else if ( !rhtml.test( elem ) ) {
					nodes.push( context.createTextNode( elem ) );

				// Convert html into DOM nodes
				} else {
					tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

					// Deserialize a standard representation
					tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
					wrap = wrapMap[ tag ] || wrapMap._default;
					tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

					// Descend through wrappers to the right content
					j = wrap[ 0 ];
					while ( j-- ) {
						tmp = tmp.lastChild;
					}

					// Support: Android <=4.0 only, PhantomJS 1 only
					// push.apply(_, arraylike) throws on ancient WebKit
					jQuery.merge( nodes, tmp.childNodes );

					// Remember the top-level container
					tmp = fragment.firstChild;

					// Ensure the created nodes are orphaned (#12392)
					tmp.textContent = "";
				}
			}
		}

		// Remove wrapper from fragment
		fragment.textContent = "";

		i = 0;
		while ( ( elem = nodes[ i++ ] ) ) {

			// Skip elements already in the context collection (trac-4087)
			if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
				if ( ignored ) {
					ignored.push( elem );
				}
				continue;
			}

			contains = jQuery.contains( elem.ownerDocument, elem );

			// Append to fragment
			tmp = getAll( fragment.appendChild( elem ), "script" );

			// Preserve script evaluation history
			if ( contains ) {
				setGlobalEval( tmp );
			}

			// Capture executables
			if ( scripts ) {
				j = 0;
				while ( ( elem = tmp[ j++ ] ) ) {
					if ( rscriptType.test( elem.type || "" ) ) {
						scripts.push( elem );
					}
				}
			}
		}

		return fragment;
	}


	( function() {
		var fragment = document.createDocumentFragment(),
			div = fragment.appendChild( document.createElement( "div" ) ),
			input = document.createElement( "input" );

		// Support: Android 4.0 - 4.3 only
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute( "type", "radio" );
		input.setAttribute( "checked", "checked" );
		input.setAttribute( "name", "t" );

		div.appendChild( input );

		// Support: Android <=4.1 only
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

		// Support: IE <=11 only
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
	} )();
	var documentElement = document.documentElement;



	var
		rkeyEvent = /^key/,
		rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
		rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	// Support: IE <=9 only
	// See #13393 for more info
	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch ( err ) { }
	}

	function on( elem, types, selector, data, fn, one ) {
		var origFn, type;

		// Types can be a map of types/handlers
		if ( typeof types === "object" ) {

			// ( types-Object, selector, data )
			if ( typeof selector !== "string" ) {

				// ( types-Object, data )
				data = data || selector;
				selector = undefined;
			}
			for ( type in types ) {
				on( elem, type, selector, data, types[ type ], one );
			}
			return elem;
		}

		if ( data == null && fn == null ) {

			// ( types, fn )
			fn = selector;
			data = selector = undefined;
		} else if ( fn == null ) {
			if ( typeof selector === "string" ) {

				// ( types, selector, fn )
				fn = data;
				data = undefined;
			} else {

				// ( types, data, fn )
				fn = data;
				data = selector;
				selector = undefined;
			}
		}
		if ( fn === false ) {
			fn = returnFalse;
		} else if ( !fn ) {
			return elem;
		}

		if ( one === 1 ) {
			origFn = fn;
			fn = function( event ) {

				// Can use an empty set, since event contains the info
				jQuery().off( event );
				return origFn.apply( this, arguments );
			};

			// Use same guid so caller can remove using origFn
			fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
		}
		return elem.each( function() {
			jQuery.event.add( this, types, fn, data, selector );
		} );
	}

	/*
	 * Helper functions for managing events -- not part of the public interface.
	 * Props to Dean Edwards' addEvent library for many of the ideas.
	 */
	jQuery.event = {

		global: {},

		add: function( elem, types, handler, data, selector ) {

			var handleObjIn, eventHandle, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.get( elem );

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if ( !elemData ) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if ( handler.handler ) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Ensure that invalid selectors throw exceptions at attach time
			// Evaluate against documentElement in case elem is a non-element node (e.g., document)
			if ( selector ) {
				jQuery.find.matchesSelector( documentElement, selector );
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if ( !handler.guid ) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if ( !( events = elemData.events ) ) {
				events = elemData.events = {};
			}
			if ( !( eventHandle = elemData.handle ) ) {
				eventHandle = elemData.handle = function( e ) {

					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
						jQuery.event.dispatch.apply( elem, arguments ) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// There *must* be a type, no attaching namespace-only handlers
				if ( !type ) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[ type ] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = ( selector ? special.delegateType : special.bindType ) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[ type ] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend( {
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
					namespace: namespaces.join( "." )
				}, handleObjIn );

				// Init the event handler queue if we're the first
				if ( !( handlers = events[ type ] ) ) {
					handlers = events[ type ] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if ( !special.setup ||
						special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

						if ( elem.addEventListener ) {
							elem.addEventListener( type, eventHandle );
						}
					}
				}

				if ( special.add ) {
					special.add.call( elem, handleObj );

					if ( !handleObj.handler.guid ) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if ( selector ) {
					handlers.splice( handlers.delegateCount++, 0, handleObj );
				} else {
					handlers.push( handleObj );
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[ type ] = true;
			}

		},

		// Detach an event or set of events from an element
		remove: function( elem, types, handler, selector, mappedTypes ) {

			var j, origCount, tmp,
				events, t, handleObj,
				special, handlers, type, namespaces, origType,
				elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

			if ( !elemData || !( events = elemData.events ) ) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = ( types || "" ).match( rnotwhite ) || [ "" ];
			t = types.length;
			while ( t-- ) {
				tmp = rtypenamespace.exec( types[ t ] ) || [];
				type = origType = tmp[ 1 ];
				namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

				// Unbind all events (on this namespace, if provided) for the element
				if ( !type ) {
					for ( type in events ) {
						jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
					}
					continue;
				}

				special = jQuery.event.special[ type ] || {};
				type = ( selector ? special.delegateType : special.bindType ) || type;
				handlers = events[ type ] || [];
				tmp = tmp[ 2 ] &&
					new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

				// Remove matching events
				origCount = j = handlers.length;
				while ( j-- ) {
					handleObj = handlers[ j ];

					if ( ( mappedTypes || origType === handleObj.origType ) &&
						( !handler || handler.guid === handleObj.guid ) &&
						( !tmp || tmp.test( handleObj.namespace ) ) &&
						( !selector || selector === handleObj.selector ||
							selector === "**" && handleObj.selector ) ) {
						handlers.splice( j, 1 );

						if ( handleObj.selector ) {
							handlers.delegateCount--;
						}
						if ( special.remove ) {
							special.remove.call( elem, handleObj );
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if ( origCount && !handlers.length ) {
					if ( !special.teardown ||
						special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

						jQuery.removeEvent( elem, type, elemData.handle );
					}

					delete events[ type ];
				}
			}

			// Remove data and the expando if it's no longer used
			if ( jQuery.isEmptyObject( events ) ) {
				dataPriv.remove( elem, "handle events" );
			}
		},

		dispatch: function( nativeEvent ) {

			// Make a writable jQuery.Event from the native event object
			var event = jQuery.event.fix( nativeEvent );

			var i, j, ret, matched, handleObj, handlerQueue,
				args = new Array( arguments.length ),
				handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
				special = jQuery.event.special[ event.type ] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[ 0 ] = event;

			for ( i = 1; i < arguments.length; i++ ) {
				args[ i ] = arguments[ i ];
			}

			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call( this, event, handlers );

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
				event.currentTarget = matched.elem;

				j = 0;
				while ( ( handleObj = matched.handlers[ j++ ] ) &&
					!event.isImmediatePropagationStopped() ) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
							handleObj.handler ).apply( matched.elem, args );

						if ( ret !== undefined ) {
							if ( ( event.result = ret ) === false ) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if ( special.postDispatch ) {
				special.postDispatch.call( this, event );
			}

			return event.result;
		},

		handlers: function( event, handlers ) {
			var i, matches, sel, handleObj,
				handlerQueue = [],
				delegateCount = handlers.delegateCount,
				cur = event.target;

			// Support: IE <=9
			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			//
			// Support: Firefox <=42
			// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
			if ( delegateCount && cur.nodeType &&
				( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

				for ( ; cur !== this; cur = cur.parentNode || this ) {

					// Don't check non-elements (#13208)
					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
						matches = [];
						for ( i = 0; i < delegateCount; i++ ) {
							handleObj = handlers[ i ];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if ( matches[ sel ] === undefined ) {
								matches[ sel ] = handleObj.needsContext ?
									jQuery( sel, this ).index( cur ) > -1 :
									jQuery.find( sel, this, null, [ cur ] ).length;
							}
							if ( matches[ sel ] ) {
								matches.push( handleObj );
							}
						}
						if ( matches.length ) {
							handlerQueue.push( { elem: cur, handlers: matches } );
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if ( delegateCount < handlers.length ) {
				handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
			}

			return handlerQueue;
		},

		addProp: function( name, hook ) {
			Object.defineProperty( jQuery.Event.prototype, name, {
				enumerable: true,
				configurable: true,

				get: jQuery.isFunction( hook ) ?
					function() {
						if ( this.originalEvent ) {
								return hook( this.originalEvent );
						}
					} :
					function() {
						if ( this.originalEvent ) {
								return this.originalEvent[ name ];
						}
					},

				set: function( value ) {
					Object.defineProperty( this, name, {
						enumerable: true,
						configurable: true,
						writable: true,
						value: value
					} );
				}
			} );
		},

		fix: function( originalEvent ) {
			return originalEvent[ jQuery.expando ] ?
				originalEvent :
				new jQuery.Event( originalEvent );
		},

		special: {
			load: {

				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {

				// Fire native event if possible so blur/focus sequence is correct
				trigger: function() {
					if ( this !== safeActiveElement() && this.focus ) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function() {
					if ( this === safeActiveElement() && this.blur ) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {

				// For checkbox, fire native event so checked state will be right
				trigger: function() {
					if ( this.type === "checkbox" && this.click && jQuery.nodeName( this, "input" ) ) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function( event ) {
					return jQuery.nodeName( event.target, "a" );
				}
			},

			beforeunload: {
				postDispatch: function( event ) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if ( event.result !== undefined && event.originalEvent ) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		}
	};

	jQuery.removeEvent = function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	};

	jQuery.Event = function( src, props ) {

		// Allow instantiation without the 'new' keyword
		if ( !( this instanceof jQuery.Event ) ) {
			return new jQuery.Event( src, props );
		}

		// Event object
		if ( src && src.type ) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented ||
					src.defaultPrevented === undefined &&

					// Support: Android <=2.3 only
					src.returnValue === false ?
				returnTrue :
				returnFalse;

			// Create target properties
			// Support: Safari <=6 - 7 only
			// Target should not be a text node (#504, #13143)
			this.target = ( src.target && src.target.nodeType === 3 ) ?
				src.target.parentNode :
				src.target;

			this.currentTarget = src.currentTarget;
			this.relatedTarget = src.relatedTarget;

		// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if ( props ) {
			jQuery.extend( this, props );
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[ jQuery.expando ] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		constructor: jQuery.Event,
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,
		isSimulated: false,

		preventDefault: function() {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if ( e && !this.isSimulated ) {
				e.preventDefault();
			}
		},
		stopPropagation: function() {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function() {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if ( e && !this.isSimulated ) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Includes all common event props including KeyEvent and MouseEvent specific props
	jQuery.each( {
		altKey: true,
		bubbles: true,
		cancelable: true,
		changedTouches: true,
		ctrlKey: true,
		detail: true,
		eventPhase: true,
		metaKey: true,
		pageX: true,
		pageY: true,
		shiftKey: true,
		view: true,
		"char": true,
		charCode: true,
		key: true,
		keyCode: true,
		button: true,
		buttons: true,
		clientX: true,
		clientY: true,
		offsetX: true,
		offsetY: true,
		pointerId: true,
		pointerType: true,
		screenX: true,
		screenY: true,
		targetTouches: true,
		toElement: true,
		touches: true,

		which: function( event ) {
			var button = event.button;

			// Add which for key events
			if ( event.which == null && rkeyEvent.test( event.type ) ) {
				return event.charCode != null ? event.charCode : event.keyCode;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
				return ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event.which;
		}
	}, jQuery.event.addProp );

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// so that event delegation works in jQuery.
	// Do the same for pointerenter/pointerleave and pointerover/pointerout
	//
	// Support: Safari 7 only
	// Safari sends mouseenter too often; see:
	// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
	// for the description of the bug (it existed in older Chrome versions as well).
	jQuery.each( {
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function( orig, fix ) {
		jQuery.event.special[ orig ] = {
			delegateType: fix,
			bindType: fix,

			handle: function( event ) {
				var ret,
					target = this,
					related = event.relatedTarget,
					handleObj = event.handleObj;

				// For mouseenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply( this, arguments );
					event.type = fix;
				}
				return ret;
			}
		};
	} );

	jQuery.fn.extend( {

		on: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn );
		},
		one: function( types, selector, data, fn ) {
			return on( this, types, selector, data, fn, 1 );
		},
		off: function( types, selector, fn ) {
			var handleObj, type;
			if ( types && types.preventDefault && types.handleObj ) {

				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery( types.delegateTarget ).off(
					handleObj.namespace ?
						handleObj.origType + "." + handleObj.namespace :
						handleObj.origType,
					handleObj.selector,
					handleObj.handler
				);
				return this;
			}
			if ( typeof types === "object" ) {

				// ( types-object [, selector] )
				for ( type in types ) {
					this.off( type, selector, types[ type ] );
				}
				return this;
			}
			if ( selector === false || typeof selector === "function" ) {

				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if ( fn === false ) {
				fn = returnFalse;
			}
			return this.each( function() {
				jQuery.event.remove( this, types, fn, selector );
			} );
		}
	} );


	var
		rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

		// Support: IE <=10 - 11, Edge 12 - 13
		// In IE/Edge using regex groups here causes severe slowdowns.
		// See https://connect.microsoft.com/IE/feedback/details/1736512/
		rnoInnerhtml = /<script|<style|<link/i,

		// checked="checked" or checked
		rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
		rscriptTypeMasked = /^true\/(.*)/,
		rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

	function manipulationTarget( elem, content ) {
		if ( jQuery.nodeName( elem, "table" ) &&
			jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

			return elem.getElementsByTagName( "tbody" )[ 0 ] || elem;
		}

		return elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript( elem ) {
		elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
		return elem;
	}
	function restoreScript( elem ) {
		var match = rscriptTypeMasked.exec( elem.type );

		if ( match ) {
			elem.type = match[ 1 ];
		} else {
			elem.removeAttribute( "type" );
		}

		return elem;
	}

	function cloneCopyEvent( src, dest ) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if ( dest.nodeType !== 1 ) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if ( dataPriv.hasData( src ) ) {
			pdataOld = dataPriv.access( src );
			pdataCur = dataPriv.set( dest, pdataOld );
			events = pdataOld.events;

			if ( events ) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for ( type in events ) {
					for ( i = 0, l = events[ type ].length; i < l; i++ ) {
						jQuery.event.add( dest, type, events[ type ][ i ] );
					}
				}
			}
		}

		// 2. Copy user data
		if ( dataUser.hasData( src ) ) {
			udataOld = dataUser.access( src );
			udataCur = jQuery.extend( {}, udataOld );

			dataUser.set( dest, udataCur );
		}
	}

	// Fix IE bugs, see support tests
	function fixInput( src, dest ) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
			dest.checked = src.checked;

		// Fails to return the selected option to the default selected state when cloning options
		} else if ( nodeName === "input" || nodeName === "textarea" ) {
			dest.defaultValue = src.defaultValue;
		}
	}

	function domManip( collection, args, callback, ignored ) {

		// Flatten any nested arrays
		args = concat.apply( [], args );

		var fragment, first, scripts, hasScripts, node, doc,
			i = 0,
			l = collection.length,
			iNoClone = l - 1,
			value = args[ 0 ],
			isFunction = jQuery.isFunction( value );

		// We can't cloneNode fragments that contain checked, in WebKit
		if ( isFunction ||
				( l > 1 && typeof value === "string" &&
					!support.checkClone && rchecked.test( value ) ) ) {
			return collection.each( function( index ) {
				var self = collection.eq( index );
				if ( isFunction ) {
					args[ 0 ] = value.call( this, index, self.html() );
				}
				domManip( self, args, callback, ignored );
			} );
		}

		if ( l ) {
			fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
			first = fragment.firstChild;

			if ( fragment.childNodes.length === 1 ) {
				fragment = first;
			}

			// Require either new content or an interest in ignored elements to invoke the callback
			if ( first || ignored ) {
				scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
				hasScripts = scripts.length;

				// Use the original fragment for the last item
				// instead of the first because it can end up
				// being emptied incorrectly in certain situations (#8070).
				for ( ; i < l; i++ ) {
					node = fragment;

					if ( i !== iNoClone ) {
						node = jQuery.clone( node, true, true );

						// Keep references to cloned scripts for later restoration
						if ( hasScripts ) {

							// Support: Android <=4.0 only, PhantomJS 1 only
							// push.apply(_, arraylike) throws on ancient WebKit
							jQuery.merge( scripts, getAll( node, "script" ) );
						}
					}

					callback.call( collection[ i ], node, i );
				}

				if ( hasScripts ) {
					doc = scripts[ scripts.length - 1 ].ownerDocument;

					// Reenable scripts
					jQuery.map( scripts, restoreScript );

					// Evaluate executable scripts on first document insertion
					for ( i = 0; i < hasScripts; i++ ) {
						node = scripts[ i ];
						if ( rscriptType.test( node.type || "" ) &&
							!dataPriv.access( node, "globalEval" ) &&
							jQuery.contains( doc, node ) ) {

							if ( node.src ) {

								// Optional AJAX dependency, but won't run scripts if not present
								if ( jQuery._evalUrl ) {
									jQuery._evalUrl( node.src );
								}
							} else {
								DOMEval( node.textContent.replace( rcleanScript, "" ), doc );
							}
						}
					}
				}
			}
		}

		return collection;
	}

	function remove( elem, selector, keepData ) {
		var node,
			nodes = selector ? jQuery.filter( selector, elem ) : elem,
			i = 0;

		for ( ; ( node = nodes[ i ] ) != null; i++ ) {
			if ( !keepData && node.nodeType === 1 ) {
				jQuery.cleanData( getAll( node ) );
			}

			if ( node.parentNode ) {
				if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
					setGlobalEval( getAll( node, "script" ) );
				}
				node.parentNode.removeChild( node );
			}
		}

		return elem;
	}

	jQuery.extend( {
		htmlPrefilter: function( html ) {
			return html.replace( rxhtmlTag, "<$1></$2>" );
		},

		clone: function( elem, dataAndEvents, deepDataAndEvents ) {
			var i, l, srcElements, destElements,
				clone = elem.cloneNode( true ),
				inPage = jQuery.contains( elem.ownerDocument, elem );

			// Fix IE cloning issues
			if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
					!jQuery.isXMLDoc( elem ) ) {

				// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
				destElements = getAll( clone );
				srcElements = getAll( elem );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					fixInput( srcElements[ i ], destElements[ i ] );
				}
			}

			// Copy the events from the original to the clone
			if ( dataAndEvents ) {
				if ( deepDataAndEvents ) {
					srcElements = srcElements || getAll( elem );
					destElements = destElements || getAll( clone );

					for ( i = 0, l = srcElements.length; i < l; i++ ) {
						cloneCopyEvent( srcElements[ i ], destElements[ i ] );
					}
				} else {
					cloneCopyEvent( elem, clone );
				}
			}

			// Preserve script evaluation history
			destElements = getAll( clone, "script" );
			if ( destElements.length > 0 ) {
				setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
			}

			// Return the cloned set
			return clone;
		},

		cleanData: function( elems ) {
			var data, elem, type,
				special = jQuery.event.special,
				i = 0;

			for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
				if ( acceptData( elem ) ) {
					if ( ( data = elem[ dataPriv.expando ] ) ) {
						if ( data.events ) {
							for ( type in data.events ) {
								if ( special[ type ] ) {
									jQuery.event.remove( elem, type );

								// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent( elem, type, data.handle );
								}
							}
						}

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataPriv.expando ] = undefined;
					}
					if ( elem[ dataUser.expando ] ) {

						// Support: Chrome <=35 - 45+
						// Assign undefined instead of using delete, see Data#remove
						elem[ dataUser.expando ] = undefined;
					}
				}
			}
		}
	} );

	jQuery.fn.extend( {
		detach: function( selector ) {
			return remove( this, selector, true );
		},

		remove: function( selector ) {
			return remove( this, selector );
		},

		text: function( value ) {
			return access( this, function( value ) {
				return value === undefined ?
					jQuery.text( this ) :
					this.empty().each( function() {
						if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
							this.textContent = value;
						}
					} );
			}, null, value, arguments.length );
		},

		append: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.appendChild( elem );
				}
			} );
		},

		prepend: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
					var target = manipulationTarget( this, elem );
					target.insertBefore( elem, target.firstChild );
				}
			} );
		},

		before: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this );
				}
			} );
		},

		after: function() {
			return domManip( this, arguments, function( elem ) {
				if ( this.parentNode ) {
					this.parentNode.insertBefore( elem, this.nextSibling );
				}
			} );
		},

		empty: function() {
			var elem,
				i = 0;

			for ( ; ( elem = this[ i ] ) != null; i++ ) {
				if ( elem.nodeType === 1 ) {

					// Prevent memory leaks
					jQuery.cleanData( getAll( elem, false ) );

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function( dataAndEvents, deepDataAndEvents ) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map( function() {
				return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
			} );
		},

		html: function( value ) {
			return access( this, function( value ) {
				var elem = this[ 0 ] || {},
					i = 0,
					l = this.length;

				if ( value === undefined && elem.nodeType === 1 ) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
					!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

					value = jQuery.htmlPrefilter( value );

					try {
						for ( ; i < l; i++ ) {
							elem = this[ i ] || {};

							// Remove element nodes and prevent memory leaks
							if ( elem.nodeType === 1 ) {
								jQuery.cleanData( getAll( elem, false ) );
								elem.innerHTML = value;
							}
						}

						elem = 0;

					// If using innerHTML throws an exception, use the fallback method
					} catch ( e ) {}
				}

				if ( elem ) {
					this.empty().append( value );
				}
			}, null, value, arguments.length );
		},

		replaceWith: function() {
			var ignored = [];

			// Make the changes, replacing each non-ignored context element with the new content
			return domManip( this, arguments, function( elem ) {
				var parent = this.parentNode;

				if ( jQuery.inArray( this, ignored ) < 0 ) {
					jQuery.cleanData( getAll( this ) );
					if ( parent ) {
						parent.replaceChild( elem, this );
					}
				}

			// Force callback invocation
			}, ignored );
		}
	} );

	jQuery.each( {
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function( name, original ) {
		jQuery.fn[ name ] = function( selector ) {
			var elems,
				ret = [],
				insert = jQuery( selector ),
				last = insert.length - 1,
				i = 0;

			for ( ; i <= last; i++ ) {
				elems = i === last ? this : this.clone( true );
				jQuery( insert[ i ] )[ original ]( elems );

				// Support: Android <=4.0 only, PhantomJS 1 only
				// .get() because push.apply(_, arraylike) throws on ancient WebKit
				push.apply( ret, elems.get() );
			}

			return this.pushStack( ret );
		};
	} );
	var rmargin = ( /^margin/ );

	var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

	var getStyles = function( elem ) {

			// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
			// IE throws on elements created in popups
			// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
			var view = elem.ownerDocument.defaultView;

			if ( !view || !view.opener ) {
				view = window;
			}

			return view.getComputedStyle( elem );
		};



	( function() {

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computeStyleTests() {

			// This is a singleton, we need to execute it only once
			if ( !div ) {
				return;
			}

			div.style.cssText =
				"box-sizing:border-box;" +
				"position:relative;display:block;" +
				"margin:auto;border:1px;padding:1px;" +
				"top:1%;width:50%";
			div.innerHTML = "";
			documentElement.appendChild( container );

			var divStyle = window.getComputedStyle( div );
			pixelPositionVal = divStyle.top !== "1%";

			// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
			reliableMarginLeftVal = divStyle.marginLeft === "2px";
			boxSizingReliableVal = divStyle.width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = divStyle.marginRight === "4px";

			documentElement.removeChild( container );

			// Nullify the div so it wouldn't be stored in the memory and
			// it will also be a sign that checks already performed
			div = null;
		}

		var pixelPositionVal, boxSizingReliableVal, pixelMarginRightVal, reliableMarginLeftVal,
			container = document.createElement( "div" ),
			div = document.createElement( "div" );

		// Finish early in limited (non-browser) environments
		if ( !div.style ) {
			return;
		}

		// Support: IE <=9 - 11 only
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode( true ).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
			"padding:0;margin-top:1px;position:absolute";
		container.appendChild( div );

		jQuery.extend( support, {
			pixelPosition: function() {
				computeStyleTests();
				return pixelPositionVal;
			},
			boxSizingReliable: function() {
				computeStyleTests();
				return boxSizingReliableVal;
			},
			pixelMarginRight: function() {
				computeStyleTests();
				return pixelMarginRightVal;
			},
			reliableMarginLeft: function() {
				computeStyleTests();
				return reliableMarginLeftVal;
			}
		} );
	} )();


	function curCSS( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// Support: IE <=9 only
		// getPropertyValue is only needed for .css('filter') (#12537)
		if ( computed ) {
			ret = computed.getPropertyValue( name ) || computed[ name ];

			if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
				ret = jQuery.style( elem, name );
			}

			// A tribute to the "awesome hack by Dean Edwards"
			// Android Browser returns percentage for some values,
			// but width seems to be reliably pixels.
			// This is against the CSSOM draft spec:
			// https://drafts.csswg.org/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?

			// Support: IE <=9 - 11 only
			// IE returns zIndex value as an integer.
			ret + "" :
			ret;
	}


	function addGetHookIf( conditionFn, hookFn ) {

		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function() {
				if ( conditionFn() ) {

					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return ( this.get = hookFn ).apply( this, arguments );
			}
		};
	}


	var

		// Swappable if display is none or starts with table
		// except "table", "table-cell", or "table-caption"
		// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
		rdisplayswap = /^(none|table(?!-c[ea]).+)/,
		cssShow = { position: "absolute", visibility: "hidden", display: "block" },
		cssNormalTransform = {
			letterSpacing: "0",
			fontWeight: "400"
		},

		cssPrefixes = [ "Webkit", "Moz", "ms" ],
		emptyStyle = document.createElement( "div" ).style;

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName( name ) {

		// Shortcut for names that are not vendor prefixed
		if ( name in emptyStyle ) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
			i = cssPrefixes.length;

		while ( i-- ) {
			name = cssPrefixes[ i ] + capName;
			if ( name in emptyStyle ) {
				return name;
			}
		}
	}

	function setPositiveNumber( elem, value, subtract ) {

		// Any relative (+/-) values have already been
		// normalized at this point
		var matches = rcssNum.exec( value );
		return matches ?

			// Guard against undefined "subtract", e.g., when used as in cssHooks
			Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
			value;
	}

	function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
		var i = extra === ( isBorderBox ? "border" : "content" ) ?

			// If we already have the right measurement, avoid augmentation
			4 :

			// Otherwise initialize for horizontal or vertical properties
			name === "width" ? 1 : 0,

			val = 0;

		for ( ; i < 4; i += 2 ) {

			// Both box models exclude margin, so add it if we want it
			if ( extra === "margin" ) {
				val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
			}

			if ( isBorderBox ) {

				// border-box includes padding, so remove it if we want content
				if ( extra === "content" ) {
					val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
				}

				// At this point, extra isn't border nor margin, so remove border
				if ( extra !== "margin" ) {
					val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			} else {

				// At this point, extra isn't content, so add padding
				val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

				// At this point, extra isn't content nor padding, so add border
				if ( extra !== "padding" ) {
					val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
				}
			}
		}

		return val;
	}

	function getWidthOrHeight( elem, name, extra ) {

		// Start with offset property, which is equivalent to the border-box value
		var val,
			valueIsBorderBox = true,
			styles = getStyles( elem ),
			isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

		// Support: IE <=11 only
		// Running getBoundingClientRect on a disconnected node
		// in IE throws an error.
		if ( elem.getClientRects().length ) {
			val = elem.getBoundingClientRect()[ name ];
		}

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if ( val <= 0 || val == null ) {

			// Fall back to computed then uncomputed css if necessary
			val = curCSS( elem, name, styles );
			if ( val < 0 || val == null ) {
				val = elem.style[ name ];
			}

			// Computed unit is not pixels. Stop here and return.
			if ( rnumnonpx.test( val ) ) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox &&
				( support.boxSizingReliable() || val === elem.style[ name ] );

			// Normalize "", auto, and prepare for extra
			val = parseFloat( val ) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return ( val +
			augmentWidthOrHeight(
				elem,
				name,
				extra || ( isBorderBox ? "border" : "content" ),
				valueIsBorderBox,
				styles
			)
		) + "px";
	}

	jQuery.extend( {

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function( elem, computed ) {
					if ( computed ) {

						// We should always get a number back from opacity
						var ret = curCSS( elem, "opacity" );
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"animationIterationCount": true,
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function( elem, name, value, extra ) {

			// Don't set styles on text and comment nodes
			if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
				return;
			}

			// Make sure that we're working with the right name
			var ret, type, hooks,
				origName = jQuery.camelCase( name ),
				style = elem.style;

			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// Check if we're setting a value
			if ( value !== undefined ) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
					value = adjustCSS( elem, name, ret );

					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if ( value == null || value !== value ) {
					return;
				}

				// If a number was passed in, add the unit (except for certain CSS properties)
				if ( type === "number" ) {
					value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
				}

				// background-* props affect original clone's values
				if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
					style[ name ] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if ( !hooks || !( "set" in hooks ) ||
					( value = hooks.set( elem, value, extra ) ) !== undefined ) {

					style[ name ] = value;
				}

			} else {

				// If a hook was provided get the non-computed value from there
				if ( hooks && "get" in hooks &&
					( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

					return ret;
				}

				// Otherwise just get the value from the style object
				return style[ name ];
			}
		},

		css: function( elem, name, extra, styles ) {
			var val, num, hooks,
				origName = jQuery.camelCase( name );

			// Make sure that we're working with the right name
			name = jQuery.cssProps[ origName ] ||
				( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

			// If a hook was provided get the computed value from there
			if ( hooks && "get" in hooks ) {
				val = hooks.get( elem, true, extra );
			}

			// Otherwise, if a way to get the computed value exists, use that
			if ( val === undefined ) {
				val = curCSS( elem, name, styles );
			}

			// Convert "normal" to computed value
			if ( val === "normal" && name in cssNormalTransform ) {
				val = cssNormalTransform[ name ];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if ( extra === "" || extra ) {
				num = parseFloat( val );
				return extra === true || isFinite( num ) ? num || 0 : val;
			}
			return val;
		}
	} );

	jQuery.each( [ "height", "width" ], function( i, name ) {
		jQuery.cssHooks[ name ] = {
			get: function( elem, computed, extra ) {
				if ( computed ) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

						// Support: Safari 8+
						// Table columns in Safari have non-zero offsetWidth & zero
						// getBoundingClientRect().width unless display is changed.
						// Support: IE <=11 only
						// Running getBoundingClientRect on a disconnected node
						// in IE throws an error.
						( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
							swap( elem, cssShow, function() {
								return getWidthOrHeight( elem, name, extra );
							} ) :
							getWidthOrHeight( elem, name, extra );
				}
			},

			set: function( elem, value, extra ) {
				var matches,
					styles = extra && getStyles( elem ),
					subtract = extra && augmentWidthOrHeight(
						elem,
						name,
						extra,
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
						styles
					);

				// Convert to pixels if value adjustment is needed
				if ( subtract && ( matches = rcssNum.exec( value ) ) &&
					( matches[ 3 ] || "px" ) !== "px" ) {

					elem.style[ name ] = value;
					value = jQuery.css( elem, name );
				}

				return setPositiveNumber( elem, value, subtract );
			}
		};
	} );

	jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
		function( elem, computed ) {
			if ( computed ) {
				return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} )
					) + "px";
			}
		}
	);

	// These hooks are used by animate to expand properties
	jQuery.each( {
		margin: "",
		padding: "",
		border: "Width"
	}, function( prefix, suffix ) {
		jQuery.cssHooks[ prefix + suffix ] = {
			expand: function( value ) {
				var i = 0,
					expanded = {},

					// Assumes a single number if not a string
					parts = typeof value === "string" ? value.split( " " ) : [ value ];

				for ( ; i < 4; i++ ) {
					expanded[ prefix + cssExpand[ i ] + suffix ] =
						parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
				}

				return expanded;
			}
		};

		if ( !rmargin.test( prefix ) ) {
			jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
		}
	} );

	jQuery.fn.extend( {
		css: function( name, value ) {
			return access( this, function( elem, name, value ) {
				var styles, len,
					map = {},
					i = 0;

				if ( jQuery.isArray( name ) ) {
					styles = getStyles( elem );
					len = name.length;

					for ( ; i < len; i++ ) {
						map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
					}

					return map;
				}

				return value !== undefined ?
					jQuery.style( elem, name, value ) :
					jQuery.css( elem, name );
			}, name, value, arguments.length > 1 );
		}
	} );


	function Tween( elem, options, prop, end, easing ) {
		return new Tween.prototype.init( elem, options, prop, end, easing );
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function( elem, options, prop, end, easing, unit ) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || jQuery.easing._default;
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
		},
		cur: function() {
			var hooks = Tween.propHooks[ this.prop ];

			return hooks && hooks.get ?
				hooks.get( this ) :
				Tween.propHooks._default.get( this );
		},
		run: function( percent ) {
			var eased,
				hooks = Tween.propHooks[ this.prop ];

			if ( this.options.duration ) {
				this.pos = eased = jQuery.easing[ this.easing ](
					percent, this.options.duration * percent, 0, 1, this.options.duration
				);
			} else {
				this.pos = eased = percent;
			}
			this.now = ( this.end - this.start ) * eased + this.start;

			if ( this.options.step ) {
				this.options.step.call( this.elem, this.now, this );
			}

			if ( hooks && hooks.set ) {
				hooks.set( this );
			} else {
				Tween.propHooks._default.set( this );
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function( tween ) {
				var result;

				// Use a property on the element directly when it is not a DOM element,
				// or when there is no matching style property that exists.
				if ( tween.elem.nodeType !== 1 ||
					tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
					return tween.elem[ tween.prop ];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css( tween.elem, tween.prop, "" );

				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function( tween ) {

				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if ( jQuery.fx.step[ tween.prop ] ) {
					jQuery.fx.step[ tween.prop ]( tween );
				} else if ( tween.elem.nodeType === 1 &&
					( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
						jQuery.cssHooks[ tween.prop ] ) ) {
					jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
				} else {
					tween.elem[ tween.prop ] = tween.now;
				}
			}
		}
	};

	// Support: IE <=9 only
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function( tween ) {
			if ( tween.elem.nodeType && tween.elem.parentNode ) {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function( p ) {
			return p;
		},
		swing: function( p ) {
			return 0.5 - Math.cos( p * Math.PI ) / 2;
		},
		_default: "swing"
	};

	jQuery.fx = Tween.prototype.init;

	// Back compat <1.8 extension point
	jQuery.fx.step = {};




	var
		fxNow, timerId,
		rfxtypes = /^(?:toggle|show|hide)$/,
		rrun = /queueHooks$/;

	function raf() {
		if ( timerId ) {
			window.requestAnimationFrame( raf );
			jQuery.fx.tick();
		}
	}

	// Animations created synchronously will run synchronously
	function createFxNow() {
		window.setTimeout( function() {
			fxNow = undefined;
		} );
		return ( fxNow = jQuery.now() );
	}

	// Generate parameters to create a standard animation
	function genFx( type, includeWidth ) {
		var which,
			i = 0,
			attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for ( ; i < 4 ; i += 2 - includeWidth ) {
			which = cssExpand[ i ];
			attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
		}

		if ( includeWidth ) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween( value, prop, animation ) {
		var tween,
			collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
			index = 0,
			length = collection.length;
		for ( ; index < length; index++ ) {
			if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter( elem, props, opts ) {
		/* jshint validthis: true */
		var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
			isBox = "width" in props || "height" in props,
			anim = this,
			orig = {},
			style = elem.style,
			hidden = elem.nodeType && isHiddenWithinTree( elem ),
			dataShow = dataPriv.get( elem, "fxshow" );

		// Queue-skipping animations hijack the fx hooks
		if ( !opts.queue ) {
			hooks = jQuery._queueHooks( elem, "fx" );
			if ( hooks.unqueued == null ) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function() {
					if ( !hooks.unqueued ) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always( function() {

				// Ensure the complete handler is called before this completes
				anim.always( function() {
					hooks.unqueued--;
					if ( !jQuery.queue( elem, "fx" ).length ) {
						hooks.empty.fire();
					}
				} );
			} );
		}

		// Detect show/hide animations
		for ( prop in props ) {
			value = props[ prop ];
			if ( rfxtypes.test( value ) ) {
				delete props[ prop ];
				toggle = toggle || value === "toggle";
				if ( value === ( hidden ? "hide" : "show" ) ) {

					// Pretend to be hidden if this is a "show" and
					// there is still data from a stopped show/hide
					if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
						hidden = true;

					// Ignore all other no-op show/hide data
					} else {
						continue;
					}
				}
				orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
			}
		}

		// Bail out if this is a no-op like .hide().hide()
		propTween = !jQuery.isEmptyObject( props );
		if ( !propTween && jQuery.isEmptyObject( orig ) ) {
			return;
		}

		// Restrict "overflow" and "display" styles during box animations
		if ( isBox && elem.nodeType === 1 ) {

			// Support: IE <=9 - 11, Edge 12 - 13
			// Record all 3 overflow attributes because IE does not infer the shorthand
			// from identically-valued overflowX and overflowY
			opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

			// Identify a display type, preferring old show/hide data over the CSS cascade
			restoreDisplay = dataShow && dataShow.display;
			if ( restoreDisplay == null ) {
				restoreDisplay = dataPriv.get( elem, "display" );
			}
			display = jQuery.css( elem, "display" );
			if ( display === "none" ) {
				if ( restoreDisplay ) {
					display = restoreDisplay;
				} else {

					// Get nonempty value(s) by temporarily forcing visibility
					showHide( [ elem ], true );
					restoreDisplay = elem.style.display || restoreDisplay;
					display = jQuery.css( elem, "display" );
					showHide( [ elem ] );
				}
			}

			// Animate inline elements as inline-block
			if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
				if ( jQuery.css( elem, "float" ) === "none" ) {

					// Restore the original display value at the end of pure show/hide animations
					if ( !propTween ) {
						anim.done( function() {
							style.display = restoreDisplay;
						} );
						if ( restoreDisplay == null ) {
							display = style.display;
							restoreDisplay = display === "none" ? "" : display;
						}
					}
					style.display = "inline-block";
				}
			}
		}

		if ( opts.overflow ) {
			style.overflow = "hidden";
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}

		// Implement show/hide animations
		propTween = false;
		for ( prop in orig ) {

			// General show/hide setup for this element animation
			if ( !propTween ) {
				if ( dataShow ) {
					if ( "hidden" in dataShow ) {
						hidden = dataShow.hidden;
					}
				} else {
					dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
				}

				// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
				if ( toggle ) {
					dataShow.hidden = !hidden;
				}

				// Show elements before animating them
				if ( hidden ) {
					showHide( [ elem ], true );
				}

				/* jshint -W083 */
				anim.done( function() {

					// The final step of a "hide" animation is actually hiding the element
					if ( !hidden ) {
						showHide( [ elem ] );
					}
					dataPriv.remove( elem, "fxshow" );
					for ( prop in orig ) {
						jQuery.style( elem, prop, orig[ prop ] );
					}
				} );
			}

			// Per-property setup
			propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = propTween.start;
				if ( hidden ) {
					propTween.end = propTween.start;
					propTween.start = 0;
				}
			}
		}
	}

	function propFilter( props, specialEasing ) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for ( index in props ) {
			name = jQuery.camelCase( index );
			easing = specialEasing[ name ];
			value = props[ index ];
			if ( jQuery.isArray( value ) ) {
				easing = value[ 1 ];
				value = props[ index ] = value[ 0 ];
			}

			if ( index !== name ) {
				props[ name ] = value;
				delete props[ index ];
			}

			hooks = jQuery.cssHooks[ name ];
			if ( hooks && "expand" in hooks ) {
				value = hooks.expand( value );
				delete props[ name ];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for ( index in value ) {
					if ( !( index in props ) ) {
						props[ index ] = value[ index ];
						specialEasing[ index ] = easing;
					}
				}
			} else {
				specialEasing[ name ] = easing;
			}
		}
	}

	function Animation( elem, properties, options ) {
		var result,
			stopped,
			index = 0,
			length = Animation.prefilters.length,
			deferred = jQuery.Deferred().always( function() {

				// Don't match elem in the :animated selector
				delete tick.elem;
			} ),
			tick = function() {
				if ( stopped ) {
					return false;
				}
				var currentTime = fxNow || createFxNow(),
					remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

					// Support: Android 2.3 only
					// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
					temp = remaining / animation.duration || 0,
					percent = 1 - temp,
					index = 0,
					length = animation.tweens.length;

				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( percent );
				}

				deferred.notifyWith( elem, [ animation, percent, remaining ] );

				if ( percent < 1 && length ) {
					return remaining;
				} else {
					deferred.resolveWith( elem, [ animation ] );
					return false;
				}
			},
			animation = deferred.promise( {
				elem: elem,
				props: jQuery.extend( {}, properties ),
				opts: jQuery.extend( true, {
					specialEasing: {},
					easing: jQuery.easing._default
				}, options ),
				originalProperties: properties,
				originalOptions: options,
				startTime: fxNow || createFxNow(),
				duration: options.duration,
				tweens: [],
				createTween: function( prop, end ) {
					var tween = jQuery.Tween( elem, animation.opts, prop, end,
							animation.opts.specialEasing[ prop ] || animation.opts.easing );
					animation.tweens.push( tween );
					return tween;
				},
				stop: function( gotoEnd ) {
					var index = 0,

						// If we are going to the end, we want to run all the tweens
						// otherwise we skip this part
						length = gotoEnd ? animation.tweens.length : 0;
					if ( stopped ) {
						return this;
					}
					stopped = true;
					for ( ; index < length ; index++ ) {
						animation.tweens[ index ].run( 1 );
					}

					// Resolve when we played the last frame; otherwise, reject
					if ( gotoEnd ) {
						deferred.notifyWith( elem, [ animation, 1, 0 ] );
						deferred.resolveWith( elem, [ animation, gotoEnd ] );
					} else {
						deferred.rejectWith( elem, [ animation, gotoEnd ] );
					}
					return this;
				}
			} ),
			props = animation.props;

		propFilter( props, animation.opts.specialEasing );

		for ( ; index < length ; index++ ) {
			result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
			if ( result ) {
				if ( jQuery.isFunction( result.stop ) ) {
					jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
						jQuery.proxy( result.stop, result );
				}
				return result;
			}
		}

		jQuery.map( props, createTween, animation );

		if ( jQuery.isFunction( animation.opts.start ) ) {
			animation.opts.start.call( elem, animation );
		}

		jQuery.fx.timer(
			jQuery.extend( tick, {
				elem: elem,
				anim: animation,
				queue: animation.opts.queue
			} )
		);

		// attach callbacks from options
		return animation.progress( animation.opts.progress )
			.done( animation.opts.done, animation.opts.complete )
			.fail( animation.opts.fail )
			.always( animation.opts.always );
	}

	jQuery.Animation = jQuery.extend( Animation, {

		tweeners: {
			"*": [ function( prop, value ) {
				var tween = this.createTween( prop, value );
				adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
				return tween;
			} ]
		},

		tweener: function( props, callback ) {
			if ( jQuery.isFunction( props ) ) {
				callback = props;
				props = [ "*" ];
			} else {
				props = props.match( rnotwhite );
			}

			var prop,
				index = 0,
				length = props.length;

			for ( ; index < length ; index++ ) {
				prop = props[ index ];
				Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
				Animation.tweeners[ prop ].unshift( callback );
			}
		},

		prefilters: [ defaultPrefilter ],

		prefilter: function( callback, prepend ) {
			if ( prepend ) {
				Animation.prefilters.unshift( callback );
			} else {
				Animation.prefilters.push( callback );
			}
		}
	} );

	jQuery.speed = function( speed, easing, fn ) {
		var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
			complete: fn || !fn && easing ||
				jQuery.isFunction( speed ) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
		};

		// Go to the end state if fx are off or if document is hidden
		if ( jQuery.fx.off || document.hidden ) {
			opt.duration = 0;

		} else {
			opt.duration = typeof opt.duration === "number" ?
				opt.duration : opt.duration in jQuery.fx.speeds ?
					jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;
		}

		// Normalize opt.queue - true/undefined/null -> "fx"
		if ( opt.queue == null || opt.queue === true ) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function() {
			if ( jQuery.isFunction( opt.old ) ) {
				opt.old.call( this );
			}

			if ( opt.queue ) {
				jQuery.dequeue( this, opt.queue );
			}
		};

		return opt;
	};

	jQuery.fn.extend( {
		fadeTo: function( speed, to, easing, callback ) {

			// Show any hidden elements after setting opacity to 0
			return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

				// Animate to the value specified
				.end().animate( { opacity: to }, speed, easing, callback );
		},
		animate: function( prop, speed, easing, callback ) {
			var empty = jQuery.isEmptyObject( prop ),
				optall = jQuery.speed( speed, easing, callback ),
				doAnimation = function() {

					// Operate on a copy of prop so per-property easing won't be lost
					var anim = Animation( this, jQuery.extend( {}, prop ), optall );

					// Empty animations, or finishing resolves immediately
					if ( empty || dataPriv.get( this, "finish" ) ) {
						anim.stop( true );
					}
				};
				doAnimation.finish = doAnimation;

			return empty || optall.queue === false ?
				this.each( doAnimation ) :
				this.queue( optall.queue, doAnimation );
		},
		stop: function( type, clearQueue, gotoEnd ) {
			var stopQueue = function( hooks ) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop( gotoEnd );
			};

			if ( typeof type !== "string" ) {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if ( clearQueue && type !== false ) {
				this.queue( type || "fx", [] );
			}

			return this.each( function() {
				var dequeue = true,
					index = type != null && type + "queueHooks",
					timers = jQuery.timers,
					data = dataPriv.get( this );

				if ( index ) {
					if ( data[ index ] && data[ index ].stop ) {
						stopQueue( data[ index ] );
					}
				} else {
					for ( index in data ) {
						if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
							stopQueue( data[ index ] );
						}
					}
				}

				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this &&
						( type == null || timers[ index ].queue === type ) ) {

						timers[ index ].anim.stop( gotoEnd );
						dequeue = false;
						timers.splice( index, 1 );
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if ( dequeue || !gotoEnd ) {
					jQuery.dequeue( this, type );
				}
			} );
		},
		finish: function( type ) {
			if ( type !== false ) {
				type = type || "fx";
			}
			return this.each( function() {
				var index,
					data = dataPriv.get( this ),
					queue = data[ type + "queue" ],
					hooks = data[ type + "queueHooks" ],
					timers = jQuery.timers,
					length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue( this, type, [] );

				if ( hooks && hooks.stop ) {
					hooks.stop.call( this, true );
				}

				// Look for any active animations, and finish them
				for ( index = timers.length; index--; ) {
					if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
						timers[ index ].anim.stop( true );
						timers.splice( index, 1 );
					}
				}

				// Look for any animations in the old queue and finish them
				for ( index = 0; index < length; index++ ) {
					if ( queue[ index ] && queue[ index ].finish ) {
						queue[ index ].finish.call( this );
					}
				}

				// Turn off finishing flag
				delete data.finish;
			} );
		}
	} );

	jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
		var cssFn = jQuery.fn[ name ];
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return speed == null || typeof speed === "boolean" ?
				cssFn.apply( this, arguments ) :
				this.animate( genFx( name, true ), speed, easing, callback );
		};
	} );

	// Generate shortcuts for custom animations
	jQuery.each( {
		slideDown: genFx( "show" ),
		slideUp: genFx( "hide" ),
		slideToggle: genFx( "toggle" ),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function( name, props ) {
		jQuery.fn[ name ] = function( speed, easing, callback ) {
			return this.animate( props, speed, easing, callback );
		};
	} );

	jQuery.timers = [];
	jQuery.fx.tick = function() {
		var timer,
			i = 0,
			timers = jQuery.timers;

		fxNow = jQuery.now();

		for ( ; i < timers.length; i++ ) {
			timer = timers[ i ];

			// Checks the timer has not already been removed
			if ( !timer() && timers[ i ] === timer ) {
				timers.splice( i--, 1 );
			}
		}

		if ( !timers.length ) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function( timer ) {
		jQuery.timers.push( timer );
		if ( timer() ) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;
	jQuery.fx.start = function() {
		if ( !timerId ) {
			timerId = window.requestAnimationFrame ?
				window.requestAnimationFrame( raf ) :
				window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
		}
	};

	jQuery.fx.stop = function() {
		if ( window.cancelAnimationFrame ) {
			window.cancelAnimationFrame( timerId );
		} else {
			window.clearInterval( timerId );
		}

		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,

		// Default speed
		_default: 400
	};


	// Based off of the plugin by Clint Helfers, with permission.
	// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function( time, type ) {
		time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
		type = type || "fx";

		return this.queue( type, function( next, hooks ) {
			var timeout = window.setTimeout( next, time );
			hooks.stop = function() {
				window.clearTimeout( timeout );
			};
		} );
	};


	( function() {
		var input = document.createElement( "input" ),
			select = document.createElement( "select" ),
			opt = select.appendChild( document.createElement( "option" ) );

		input.type = "checkbox";

		// Support: Android <=4.3 only
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE <=11 only
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: IE <=11 only
		// An input loses its value after becoming a radio
		input = document.createElement( "input" );
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	} )();


	var boolHook,
		attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend( {
		attr: function( name, value ) {
			return access( this, jQuery.attr, name, value, arguments.length > 1 );
		},

		removeAttr: function( name ) {
			return this.each( function() {
				jQuery.removeAttr( this, name );
			} );
		}
	} );

	jQuery.extend( {
		attr: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set attributes on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if ( typeof elem.getAttribute === "undefined" ) {
				return jQuery.prop( elem, name, value );
			}

			// Attribute hooks are determined by the lowercase version
			// Grab necessary hook if one is defined
			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
				hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
					( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
			}

			if ( value !== undefined ) {
				if ( value === null ) {
					jQuery.removeAttr( elem, name );
					return;
				}

				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				elem.setAttribute( name, value + "" );
				return value;
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			ret = jQuery.find.attr( elem, name );

			// Non-existent attributes return null, we normalize to undefined
			return ret == null ? undefined : ret;
		},

		attrHooks: {
			type: {
				set: function( elem, value ) {
					if ( !support.radioValue && value === "radio" &&
						jQuery.nodeName( elem, "input" ) ) {
						var val = elem.value;
						elem.setAttribute( "type", value );
						if ( val ) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		},

		removeAttr: function( elem, value ) {
			var name,
				i = 0,
				attrNames = value && value.match( rnotwhite );

			if ( attrNames && elem.nodeType === 1 ) {
				while ( ( name = attrNames[ i++ ] ) ) {
					elem.removeAttribute( name );
				}
			}
		}
	} );

	// Hooks for boolean attributes
	boolHook = {
		set: function( elem, value, name ) {
			if ( value === false ) {

				// Remove boolean attributes when set to false
				jQuery.removeAttr( elem, name );
			} else {
				elem.setAttribute( name, name );
			}
			return name;
		}
	};

	jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
		var getter = attrHandle[ name ] || jQuery.find.attr;

		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle,
				lowercaseName = name.toLowerCase();

			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ lowercaseName ];
				attrHandle[ lowercaseName ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					lowercaseName :
					null;
				attrHandle[ lowercaseName ] = handle;
			}
			return ret;
		};
	} );




	var rfocusable = /^(?:input|select|textarea|button)$/i,
		rclickable = /^(?:a|area)$/i;

	jQuery.fn.extend( {
		prop: function( name, value ) {
			return access( this, jQuery.prop, name, value, arguments.length > 1 );
		},

		removeProp: function( name ) {
			return this.each( function() {
				delete this[ jQuery.propFix[ name ] || name ];
			} );
		}
	} );

	jQuery.extend( {
		prop: function( elem, name, value ) {
			var ret, hooks,
				nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if ( nType === 3 || nType === 8 || nType === 2 ) {
				return;
			}

			if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

				// Fix name and attach hooks
				name = jQuery.propFix[ name ] || name;
				hooks = jQuery.propHooks[ name ];
			}

			if ( value !== undefined ) {
				if ( hooks && "set" in hooks &&
					( ret = hooks.set( elem, value, name ) ) !== undefined ) {
					return ret;
				}

				return ( elem[ name ] = value );
			}

			if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
				return ret;
			}

			return elem[ name ];
		},

		propHooks: {
			tabIndex: {
				get: function( elem ) {

					// Support: IE <=9 - 11 only
					// elem.tabIndex doesn't always return the
					// correct value when it hasn't been explicitly set
					// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
					// Use proper attribute retrieval(#12072)
					var tabindex = jQuery.find.attr( elem, "tabindex" );

					return tabindex ?
						parseInt( tabindex, 10 ) :
						rfocusable.test( elem.nodeName ) ||
							rclickable.test( elem.nodeName ) && elem.href ?
								0 :
								-1;
				}
			}
		},

		propFix: {
			"for": "htmlFor",
			"class": "className"
		}
	} );

	// Support: IE <=11 only
	// Accessing the selectedIndex property
	// forces the browser to respect setting selected
	// on the option
	// The getter ensures a default option is selected
	// when in an optgroup
	if ( !support.optSelected ) {
		jQuery.propHooks.selected = {
			get: function( elem ) {
				var parent = elem.parentNode;
				if ( parent && parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
				return null;
			},
			set: function( elem ) {
				var parent = elem.parentNode;
				if ( parent ) {
					parent.selectedIndex;

					if ( parent.parentNode ) {
						parent.parentNode.selectedIndex;
					}
				}
			}
		};
	}

	jQuery.each( [
		"tabIndex",
		"readOnly",
		"maxLength",
		"cellSpacing",
		"cellPadding",
		"rowSpan",
		"colSpan",
		"useMap",
		"frameBorder",
		"contentEditable"
	], function() {
		jQuery.propFix[ this.toLowerCase() ] = this;
	} );




	var rclass = /[\t\r\n\f]/g;

	function getClass( elem ) {
		return elem.getAttribute && elem.getAttribute( "class" ) || "";
	}

	jQuery.fn.extend( {
		addClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {
							if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
								cur += clazz + " ";
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		removeClass: function( value ) {
			var classes, elem, cur, curValue, clazz, j, finalValue,
				i = 0;

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( j ) {
					jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
				} );
			}

			if ( !arguments.length ) {
				return this.attr( "class", "" );
			}

			if ( typeof value === "string" && value ) {
				classes = value.match( rnotwhite ) || [];

				while ( ( elem = this[ i++ ] ) ) {
					curValue = getClass( elem );

					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 &&
						( " " + curValue + " " ).replace( rclass, " " );

					if ( cur ) {
						j = 0;
						while ( ( clazz = classes[ j++ ] ) ) {

							// Remove *all* instances
							while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
								cur = cur.replace( " " + clazz + " ", " " );
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim( cur );
						if ( curValue !== finalValue ) {
							elem.setAttribute( "class", finalValue );
						}
					}
				}
			}

			return this;
		},

		toggleClass: function( value, stateVal ) {
			var type = typeof value;

			if ( typeof stateVal === "boolean" && type === "string" ) {
				return stateVal ? this.addClass( value ) : this.removeClass( value );
			}

			if ( jQuery.isFunction( value ) ) {
				return this.each( function( i ) {
					jQuery( this ).toggleClass(
						value.call( this, i, getClass( this ), stateVal ),
						stateVal
					);
				} );
			}

			return this.each( function() {
				var className, i, self, classNames;

				if ( type === "string" ) {

					// Toggle individual class names
					i = 0;
					self = jQuery( this );
					classNames = value.match( rnotwhite ) || [];

					while ( ( className = classNames[ i++ ] ) ) {

						// Check each className given, space separated list
						if ( self.hasClass( className ) ) {
							self.removeClass( className );
						} else {
							self.addClass( className );
						}
					}

				// Toggle whole class name
				} else if ( value === undefined || type === "boolean" ) {
					className = getClass( this );
					if ( className ) {

						// Store className if set
						dataPriv.set( this, "__className__", className );
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					if ( this.setAttribute ) {
						this.setAttribute( "class",
							className || value === false ?
							"" :
							dataPriv.get( this, "__className__" ) || ""
						);
					}
				}
			} );
		},

		hasClass: function( selector ) {
			var className, elem,
				i = 0;

			className = " " + selector + " ";
			while ( ( elem = this[ i++ ] ) ) {
				if ( elem.nodeType === 1 &&
					( " " + getClass( elem ) + " " ).replace( rclass, " " )
						.indexOf( className ) > -1
				) {
					return true;
				}
			}

			return false;
		}
	} );




	var rreturn = /\r/g,
		rspaces = /[\x20\t\r\n\f]+/g;

	jQuery.fn.extend( {
		val: function( value ) {
			var hooks, ret, isFunction,
				elem = this[ 0 ];

			if ( !arguments.length ) {
				if ( elem ) {
					hooks = jQuery.valHooks[ elem.type ] ||
						jQuery.valHooks[ elem.nodeName.toLowerCase() ];

					if ( hooks &&
						"get" in hooks &&
						( ret = hooks.get( elem, "value" ) ) !== undefined
					) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?

						// Handle most common string cases
						ret.replace( rreturn, "" ) :

						// Handle cases where value is null/undef or number
						ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction( value );

			return this.each( function( i ) {
				var val;

				if ( this.nodeType !== 1 ) {
					return;
				}

				if ( isFunction ) {
					val = value.call( this, i, jQuery( this ).val() );
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if ( val == null ) {
					val = "";

				} else if ( typeof val === "number" ) {
					val += "";

				} else if ( jQuery.isArray( val ) ) {
					val = jQuery.map( val, function( value ) {
						return value == null ? "" : value + "";
					} );
				}

				hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

				// If set returns undefined, fall back to normal setting
				if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
					this.value = val;
				}
			} );
		}
	} );

	jQuery.extend( {
		valHooks: {
			option: {
				get: function( elem ) {

					var val = jQuery.find.attr( elem, "value" );
					return val != null ?
						val :

						// Support: IE <=10 - 11 only
						// option.text throws exceptions (#14686, #14858)
						// Strip and collapse whitespace
						// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
						jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
				}
			},
			select: {
				get: function( elem ) {
					var value, option,
						options = elem.options,
						index = elem.selectedIndex,
						one = elem.type === "select-one",
						values = one ? null : [],
						max = one ? index + 1 : options.length,
						i = index < 0 ?
							max :
							one ? index : 0;

					// Loop through all the selected options
					for ( ; i < max; i++ ) {
						option = options[ i ];

						// Support: IE <=9 only
						// IE8-9 doesn't update selected after form reset (#2551)
						if ( ( option.selected || i === index ) &&

								// Don't return options that are disabled or in a disabled optgroup
								!option.disabled &&
								( !option.parentNode.disabled ||
									!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

							// Get the specific value for the option
							value = jQuery( option ).val();

							// We don't need an array for one selects
							if ( one ) {
								return value;
							}

							// Multi-Selects return an array
							values.push( value );
						}
					}

					return values;
				},

				set: function( elem, value ) {
					var optionSet, option,
						options = elem.options,
						values = jQuery.makeArray( value ),
						i = options.length;

					while ( i-- ) {
						option = options[ i ];
						if ( option.selected =
							jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
						) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if ( !optionSet ) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	} );

	// Radios and checkboxes getter/setter
	jQuery.each( [ "radio", "checkbox" ], function() {
		jQuery.valHooks[ this ] = {
			set: function( elem, value ) {
				if ( jQuery.isArray( value ) ) {
					return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
				}
			}
		};
		if ( !support.checkOn ) {
			jQuery.valHooks[ this ].get = function( elem ) {
				return elem.getAttribute( "value" ) === null ? "on" : elem.value;
			};
		}
	} );




	// Return jQuery for attributes-only inclusion


	var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/;

	jQuery.extend( jQuery.event, {

		trigger: function( event, data, elem, onlyHandlers ) {

			var i, cur, tmp, bubbleType, ontype, handle, special,
				eventPath = [ elem || document ],
				type = hasOwn.call( event, "type" ) ? event.type : event,
				namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
				return;
			}

			if ( type.indexOf( "." ) > -1 ) {

				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split( "." );
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf( ":" ) < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[ jQuery.expando ] ?
				event :
				new jQuery.Event( type, typeof event === "object" && event );

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join( "." );
			event.rnamespace = event.namespace ?
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
				null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if ( !event.target ) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ?
				[ event ] :
				jQuery.makeArray( data, [ event ] );

			// Allow special events to draw outside the lines
			special = jQuery.event.special[ type ] || {};
			if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

				bubbleType = special.delegateType || type;
				if ( !rfocusMorph.test( bubbleType + type ) ) {
					cur = cur.parentNode;
				}
				for ( ; cur; cur = cur.parentNode ) {
					eventPath.push( cur );
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if ( tmp === ( elem.ownerDocument || document ) ) {
					eventPath.push( tmp.defaultView || tmp.parentWindow || window );
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

				event.type = i > 1 ?
					bubbleType :
					special.bindType || type;

				// jQuery handler
				handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
					dataPriv.get( cur, "handle" );
				if ( handle ) {
					handle.apply( cur, data );
				}

				// Native handler
				handle = ontype && cur[ ontype ];
				if ( handle && handle.apply && acceptData( cur ) ) {
					event.result = handle.apply( cur, data );
					if ( event.result === false ) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if ( !onlyHandlers && !event.isDefaultPrevented() ) {

				if ( ( !special._default ||
					special._default.apply( eventPath.pop(), data ) === false ) &&
					acceptData( elem ) ) {

					// Call a native DOM method on the target with the same name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if ( ontype && jQuery.isFunction( elem[ type ] ) && !jQuery.isWindow( elem ) ) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ ontype ];

						if ( tmp ) {
							elem[ ontype ] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[ type ]();
						jQuery.event.triggered = undefined;

						if ( tmp ) {
							elem[ ontype ] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		// Piggyback on a donor event to simulate a different one
		// Used only for `focus(in | out)` events
		simulate: function( type, elem, event ) {
			var e = jQuery.extend(
				new jQuery.Event(),
				event,
				{
					type: type,
					isSimulated: true
				}
			);

			jQuery.event.trigger( e, null, elem );
		}

	} );

	jQuery.fn.extend( {

		trigger: function( type, data ) {
			return this.each( function() {
				jQuery.event.trigger( type, data, this );
			} );
		},
		triggerHandler: function( type, data ) {
			var elem = this[ 0 ];
			if ( elem ) {
				return jQuery.event.trigger( type, data, elem, true );
			}
		}
	} );


	jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
		"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
		"change select submit keydown keypress keyup contextmenu" ).split( " " ),
		function( i, name ) {

		// Handle event binding
		jQuery.fn[ name ] = function( data, fn ) {
			return arguments.length > 0 ?
				this.on( name, null, data, fn ) :
				this.trigger( name );
		};
	} );

	jQuery.fn.extend( {
		hover: function( fnOver, fnOut ) {
			return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
		}
	} );




	support.focusin = "onfocusin" in window;


	// Support: Firefox <=44
	// Firefox doesn't have focus(in | out) events
	// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
	//
	// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
	// focus(in | out) events fire after focus & blur events,
	// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
	// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
	if ( !support.focusin ) {
		jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function( event ) {
				jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
			};

			jQuery.event.special[ fix ] = {
				setup: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix );

					if ( !attaches ) {
						doc.addEventListener( orig, handler, true );
					}
					dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
				},
				teardown: function() {
					var doc = this.ownerDocument || this,
						attaches = dataPriv.access( doc, fix ) - 1;

					if ( !attaches ) {
						doc.removeEventListener( orig, handler, true );
						dataPriv.remove( doc, fix );

					} else {
						dataPriv.access( doc, fix, attaches );
					}
				}
			};
		} );
	}
	var location = window.location;

	var nonce = jQuery.now();

	var rquery = ( /\?/ );



	// Cross-browser xml parsing
	jQuery.parseXML = function( data ) {
		var xml;
		if ( !data || typeof data !== "string" ) {
			return null;
		}

		// Support: IE 9 - 11 only
		// IE throws on parseFromString with invalid input.
		try {
			xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
		} catch ( e ) {
			xml = undefined;
		}

		if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
			jQuery.error( "Invalid XML: " + data );
		}
		return xml;
	};


	var
		rbracket = /\[\]$/,
		rCRLF = /\r?\n/g,
		rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
		rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams( prefix, obj, traditional, add ) {
		var name;

		if ( jQuery.isArray( obj ) ) {

			// Serialize array item.
			jQuery.each( obj, function( i, v ) {
				if ( traditional || rbracket.test( prefix ) ) {

					// Treat each array item as a scalar.
					add( prefix, v );

				} else {

					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(
						prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
						v,
						traditional,
						add
					);
				}
			} );

		} else if ( !traditional && jQuery.type( obj ) === "object" ) {

			// Serialize object item.
			for ( name in obj ) {
				buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
			}

		} else {

			// Serialize scalar item.
			add( prefix, obj );
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function( a, traditional ) {
		var prefix,
			s = [],
			add = function( key, valueOrFunction ) {

				// If value is a function, invoke it and use its return value
				var value = jQuery.isFunction( valueOrFunction ) ?
					valueOrFunction() :
					valueOrFunction;

				s[ s.length ] = encodeURIComponent( key ) + "=" +
					encodeURIComponent( value == null ? "" : value );
			};

		// If an array was passed in, assume that it is an array of form elements.
		if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

			// Serialize the form elements
			jQuery.each( a, function() {
				add( this.name, this.value );
			} );

		} else {

			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for ( prefix in a ) {
				buildParams( prefix, a[ prefix ], traditional, add );
			}
		}

		// Return the resulting serialization
		return s.join( "&" );
	};

	jQuery.fn.extend( {
		serialize: function() {
			return jQuery.param( this.serializeArray() );
		},
		serializeArray: function() {
			return this.map( function() {

				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop( this, "elements" );
				return elements ? jQuery.makeArray( elements ) : this;
			} )
			.filter( function() {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery( this ).is( ":disabled" ) &&
					rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
					( this.checked || !rcheckableType.test( type ) );
			} )
			.map( function( i, elem ) {
				var val = jQuery( this ).val();

				return val == null ?
					null :
					jQuery.isArray( val ) ?
						jQuery.map( val, function( val ) {
							return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
						} ) :
						{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
			} ).get();
		}
	} );


	var
		r20 = /%20/g,
		rhash = /#.*$/,
		rts = /([?&])_=[^&]*/,
		rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

		// #7653, #8125, #8152: local protocol detection
		rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
		rnoContent = /^(?:GET|HEAD)$/,
		rprotocol = /^\/\//,

		/* Prefilters
		 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
		 * 2) These are called:
		 *    - BEFORE asking for a transport
		 *    - AFTER param serialization (s.data is a string if s.processData is true)
		 * 3) key is the dataType
		 * 4) the catchall symbol "*" can be used
		 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
		 */
		prefilters = {},

		/* Transports bindings
		 * 1) key is the dataType
		 * 2) the catchall symbol "*" can be used
		 * 3) selection will start with transport dataType and THEN go to "*" if needed
		 */
		transports = {},

		// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
		allTypes = "*/".concat( "*" ),

		// Anchor tag for parsing the document origin
		originAnchor = document.createElement( "a" );
		originAnchor.href = location.href;

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports( structure ) {

		// dataTypeExpression is optional and defaults to "*"
		return function( dataTypeExpression, func ) {

			if ( typeof dataTypeExpression !== "string" ) {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
				i = 0,
				dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

			if ( jQuery.isFunction( func ) ) {

				// For each dataType in the dataTypeExpression
				while ( ( dataType = dataTypes[ i++ ] ) ) {

					// Prepend if requested
					if ( dataType[ 0 ] === "+" ) {
						dataType = dataType.slice( 1 ) || "*";
						( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

					// Otherwise append
					} else {
						( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

		var inspected = {},
			seekingTransport = ( structure === transports );

		function inspect( dataType ) {
			var selected;
			inspected[ dataType ] = true;
			jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
				var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
				if ( typeof dataTypeOrTransport === "string" &&
					!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

					options.dataTypes.unshift( dataTypeOrTransport );
					inspect( dataTypeOrTransport );
					return false;
				} else if ( seekingTransport ) {
					return !( selected = dataTypeOrTransport );
				}
			} );
			return selected;
		}

		return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend( target, src ) {
		var key, deep,
			flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for ( key in src ) {
			if ( src[ key ] !== undefined ) {
				( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
			}
		}
		if ( deep ) {
			jQuery.extend( true, target, deep );
		}

		return target;
	}

	/* Handles responses to an ajax request:
	 * - finds the right dataType (mediates between content-type and expected dataType)
	 * - returns the corresponding response
	 */
	function ajaxHandleResponses( s, jqXHR, responses ) {

		var ct, type, finalDataType, firstDataType,
			contents = s.contents,
			dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while ( dataTypes[ 0 ] === "*" ) {
			dataTypes.shift();
			if ( ct === undefined ) {
				ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
			}
		}

		// Check if we're dealing with a known content-type
		if ( ct ) {
			for ( type in contents ) {
				if ( contents[ type ] && contents[ type ].test( ct ) ) {
					dataTypes.unshift( type );
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if ( dataTypes[ 0 ] in responses ) {
			finalDataType = dataTypes[ 0 ];
		} else {

			// Try convertible dataTypes
			for ( type in responses ) {
				if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
					finalDataType = type;
					break;
				}
				if ( !firstDataType ) {
					firstDataType = type;
				}
			}

			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if ( finalDataType ) {
			if ( finalDataType !== dataTypes[ 0 ] ) {
				dataTypes.unshift( finalDataType );
			}
			return responses[ finalDataType ];
		}
	}

	/* Chain conversions given the request and the original response
	 * Also sets the responseXXX fields on the jqXHR instance
	 */
	function ajaxConvert( s, response, jqXHR, isSuccess ) {
		var conv2, current, conv, tmp, prev,
			converters = {},

			// Work with a copy of dataTypes in case we need to modify it for conversion
			dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if ( dataTypes[ 1 ] ) {
			for ( conv in s.converters ) {
				converters[ conv.toLowerCase() ] = s.converters[ conv ];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while ( current ) {

			if ( s.responseFields[ current ] ) {
				jqXHR[ s.responseFields[ current ] ] = response;
			}

			// Apply the dataFilter if provided
			if ( !prev && isSuccess && s.dataFilter ) {
				response = s.dataFilter( response, s.dataType );
			}

			prev = current;
			current = dataTypes.shift();

			if ( current ) {

				// There's only work to do if current dataType is non-auto
				if ( current === "*" ) {

					current = prev;

				// Convert response if prev dataType is non-auto and differs from current
				} else if ( prev !== "*" && prev !== current ) {

					// Seek a direct converter
					conv = converters[ prev + " " + current ] || converters[ "* " + current ];

					// If none found, seek a pair
					if ( !conv ) {
						for ( conv2 in converters ) {

							// If conv2 outputs current
							tmp = conv2.split( " " );
							if ( tmp[ 1 ] === current ) {

								// If prev can be converted to accepted input
								conv = converters[ prev + " " + tmp[ 0 ] ] ||
									converters[ "* " + tmp[ 0 ] ];
								if ( conv ) {

									// Condense equivalence converters
									if ( conv === true ) {
										conv = converters[ conv2 ];

									// Otherwise, insert the intermediate dataType
									} else if ( converters[ conv2 ] !== true ) {
										current = tmp[ 0 ];
										dataTypes.unshift( tmp[ 1 ] );
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if ( conv !== true ) {

						// Unless errors are allowed to bubble, catch and return them
						if ( conv && s.throws ) {
							response = conv( response );
						} else {
							try {
								response = conv( response );
							} catch ( e ) {
								return {
									state: "parsererror",
									error: conv ? e : "No conversion from " + prev + " to " + current
								};
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend( {

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: location.href,
			type: "GET",
			isLocal: rlocalProtocol.test( location.protocol ),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
			timeout: 0,
			data: null,
			dataType: null,
			username: null,
			password: null,
			cache: null,
			throws: false,
			traditional: false,
			headers: {},
			*/

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /\bxml\b/,
				html: /\bhtml/,
				json: /\bjson\b/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": JSON.parse,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function( target, settings ) {
			return settings ?

				// Building a settings object
				ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

				// Extending ajaxSettings
				ajaxExtend( jQuery.ajaxSettings, target );
		},

		ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
		ajaxTransport: addToPrefiltersOrTransports( transports ),

		// Main method
		ajax: function( url, options ) {

			// If url is an object, simulate pre-1.5 signature
			if ( typeof url === "object" ) {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

				// URL without anti-cache param
				cacheURL,

				// Response headers
				responseHeadersString,
				responseHeaders,

				// timeout handle
				timeoutTimer,

				// Url cleanup var
				urlAnchor,

				// Request state (becomes false upon send and true upon completion)
				completed,

				// To know if global events are to be dispatched
				fireGlobals,

				// Loop variable
				i,

				// uncached part of the url
				uncached,

				// Create the final options object
				s = jQuery.ajaxSetup( {}, options ),

				// Callbacks context
				callbackContext = s.context || s,

				// Context for global events is callbackContext if it is a DOM node or jQuery collection
				globalEventContext = s.context &&
					( callbackContext.nodeType || callbackContext.jquery ) ?
						jQuery( callbackContext ) :
						jQuery.event,

				// Deferreds
				deferred = jQuery.Deferred(),
				completeDeferred = jQuery.Callbacks( "once memory" ),

				// Status-dependent callbacks
				statusCode = s.statusCode || {},

				// Headers (they are sent all at once)
				requestHeaders = {},
				requestHeadersNames = {},

				// Default abort message
				strAbort = "canceled",

				// Fake xhr
				jqXHR = {
					readyState: 0,

					// Builds headers hashtable if needed
					getResponseHeader: function( key ) {
						var match;
						if ( completed ) {
							if ( !responseHeaders ) {
								responseHeaders = {};
								while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
									responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
								}
							}
							match = responseHeaders[ key.toLowerCase() ];
						}
						return match == null ? null : match;
					},

					// Raw string
					getAllResponseHeaders: function() {
						return completed ? responseHeadersString : null;
					},

					// Caches the header
					setRequestHeader: function( name, value ) {
						if ( completed == null ) {
							name = requestHeadersNames[ name.toLowerCase() ] =
								requestHeadersNames[ name.toLowerCase() ] || name;
							requestHeaders[ name ] = value;
						}
						return this;
					},

					// Overrides response content-type header
					overrideMimeType: function( type ) {
						if ( completed == null ) {
							s.mimeType = type;
						}
						return this;
					},

					// Status-dependent callbacks
					statusCode: function( map ) {
						var code;
						if ( map ) {
							if ( completed ) {

								// Execute the appropriate callbacks
								jqXHR.always( map[ jqXHR.status ] );
							} else {

								// Lazy-add the new callbacks in a way that preserves old ones
								for ( code in map ) {
									statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
								}
							}
						}
						return this;
					},

					// Cancel the request
					abort: function( statusText ) {
						var finalText = statusText || strAbort;
						if ( transport ) {
							transport.abort( finalText );
						}
						done( 0, finalText );
						return this;
					}
				};

			// Attach deferreds
			deferred.promise( jqXHR );

			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ( ( url || s.url || location.href ) + "" )
				.replace( rprotocol, location.protocol + "//" );

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

			// A cross-domain request is in order when the origin doesn't match the current origin.
			if ( s.crossDomain == null ) {
				urlAnchor = document.createElement( "a" );

				// Support: IE <=8 - 11, Edge 12 - 13
				// IE throws exception on accessing the href property if url is malformed,
				// e.g. http://example.com:80x/
				try {
					urlAnchor.href = s.url;

					// Support: IE <=8 - 11 only
					// Anchor's host property isn't correctly set when s.url is relative
					urlAnchor.href = urlAnchor.href;
					s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
						urlAnchor.protocol + "//" + urlAnchor.host;
				} catch ( e ) {

					// If there is an error parsing the URL, assume it is crossDomain,
					// it can be rejected by the transport if it is invalid
					s.crossDomain = true;
				}
			}

			// Convert data if not already a string
			if ( s.data && s.processData && typeof s.data !== "string" ) {
				s.data = jQuery.param( s.data, s.traditional );
			}

			// Apply prefilters
			inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

			// If request was aborted inside a prefilter, stop there
			if ( completed ) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if ( fireGlobals && jQuery.active++ === 0 ) {
				jQuery.event.trigger( "ajaxStart" );
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test( s.type );

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			// Remove hash to simplify url manipulation
			cacheURL = s.url.replace( rhash, "" );

			// More options handling for requests with no content
			if ( !s.hasContent ) {

				// Remember the hash so we can put it back
				uncached = s.url.slice( cacheURL.length );

				// If data is available, append data to url
				if ( s.data ) {
					cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in uncached url if needed
				if ( s.cache === false ) {
					cacheURL = cacheURL.replace( rts, "" );
					uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
				}

				// Put hash and anti-cache on the URL that will be requested (gh-1732)
				s.url = cacheURL + uncached;

			// Change '%20' to '+' if this is encoded form body content (gh-2658)
			} else if ( s.data && s.processData &&
				( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
				s.data = s.data.replace( r20, "+" );
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if ( s.ifModified ) {
				if ( jQuery.lastModified[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
				}
				if ( jQuery.etag[ cacheURL ] ) {
					jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
				}
			}

			// Set the correct header, if data is being sent
			if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
				jqXHR.setRequestHeader( "Content-Type", s.contentType );
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader(
				"Accept",
				s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
					s.accepts[ s.dataTypes[ 0 ] ] +
						( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
					s.accepts[ "*" ]
			);

			// Check for headers option
			for ( i in s.headers ) {
				jqXHR.setRequestHeader( i, s.headers[ i ] );
			}

			// Allow custom headers/mimetypes and early abort
			if ( s.beforeSend &&
				( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			completeDeferred.add( s.complete );
			jqXHR.done( s.success );
			jqXHR.fail( s.error );

			// Get transport
			transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

			// If no transport, we auto-abort
			if ( !transport ) {
				done( -1, "No Transport" );
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
				}

				// If request was aborted inside ajaxSend, stop there
				if ( completed ) {
					return jqXHR;
				}

				// Timeout
				if ( s.async && s.timeout > 0 ) {
					timeoutTimer = window.setTimeout( function() {
						jqXHR.abort( "timeout" );
					}, s.timeout );
				}

				try {
					completed = false;
					transport.send( requestHeaders, done );
				} catch ( e ) {

					// Rethrow post-completion exceptions
					if ( completed ) {
						throw e;
					}

					// Propagate others as results
					done( -1, e );
				}
			}

			// Callback for when everything is done
			function done( status, nativeStatusText, responses, headers ) {
				var isSuccess, success, error, response, modified,
					statusText = nativeStatusText;

				// Ignore repeat invocations
				if ( completed ) {
					return;
				}

				completed = true;

				// Clear timeout if it exists
				if ( timeoutTimer ) {
					window.clearTimeout( timeoutTimer );
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if ( responses ) {
					response = ajaxHandleResponses( s, jqXHR, responses );
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert( s, response, jqXHR, isSuccess );

				// If successful, handle type chaining
				if ( isSuccess ) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if ( s.ifModified ) {
						modified = jqXHR.getResponseHeader( "Last-Modified" );
						if ( modified ) {
							jQuery.lastModified[ cacheURL ] = modified;
						}
						modified = jqXHR.getResponseHeader( "etag" );
						if ( modified ) {
							jQuery.etag[ cacheURL ] = modified;
						}
					}

					// if no content
					if ( status === 204 || s.type === "HEAD" ) {
						statusText = "nocontent";

					// if not modified
					} else if ( status === 304 ) {
						statusText = "notmodified";

					// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {

					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if ( status || !statusText ) {
						statusText = "error";
						if ( status < 0 ) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = ( nativeStatusText || statusText ) + "";

				// Success/Error
				if ( isSuccess ) {
					deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
				} else {
					deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
				}

				// Status-dependent callbacks
				jqXHR.statusCode( statusCode );
				statusCode = undefined;

				if ( fireGlobals ) {
					globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
						[ jqXHR, s, isSuccess ? success : error ] );
				}

				// Complete
				completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

				if ( fireGlobals ) {
					globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

					// Handle the global AJAX counter
					if ( !( --jQuery.active ) ) {
						jQuery.event.trigger( "ajaxStop" );
					}
				}
			}

			return jqXHR;
		},

		getJSON: function( url, data, callback ) {
			return jQuery.get( url, data, callback, "json" );
		},

		getScript: function( url, callback ) {
			return jQuery.get( url, undefined, callback, "script" );
		}
	} );

	jQuery.each( [ "get", "post" ], function( i, method ) {
		jQuery[ method ] = function( url, data, callback, type ) {

			// Shift arguments if data argument was omitted
			if ( jQuery.isFunction( data ) ) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			// The url can be an options object (which then must have .url)
			return jQuery.ajax( jQuery.extend( {
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			}, jQuery.isPlainObject( url ) && url ) );
		};
	} );


	jQuery._evalUrl = function( url ) {
		return jQuery.ajax( {
			url: url,

			// Make this explicit, since user can override this through ajaxSetup (#11264)
			type: "GET",
			dataType: "script",
			cache: true,
			async: false,
			global: false,
			"throws": true
		} );
	};


	jQuery.fn.extend( {
		wrapAll: function( html ) {
			var wrap;

			if ( this[ 0 ] ) {
				if ( jQuery.isFunction( html ) ) {
					html = html.call( this[ 0 ] );
				}

				// The elements to wrap the target around
				wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

				if ( this[ 0 ].parentNode ) {
					wrap.insertBefore( this[ 0 ] );
				}

				wrap.map( function() {
					var elem = this;

					while ( elem.firstElementChild ) {
						elem = elem.firstElementChild;
					}

					return elem;
				} ).append( this );
			}

			return this;
		},

		wrapInner: function( html ) {
			if ( jQuery.isFunction( html ) ) {
				return this.each( function( i ) {
					jQuery( this ).wrapInner( html.call( this, i ) );
				} );
			}

			return this.each( function() {
				var self = jQuery( this ),
					contents = self.contents();

				if ( contents.length ) {
					contents.wrapAll( html );

				} else {
					self.append( html );
				}
			} );
		},

		wrap: function( html ) {
			var isFunction = jQuery.isFunction( html );

			return this.each( function( i ) {
				jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
			} );
		},

		unwrap: function( selector ) {
			this.parent( selector ).not( "body" ).each( function() {
				jQuery( this ).replaceWith( this.childNodes );
			} );
			return this;
		}
	} );


	jQuery.expr.pseudos.hidden = function( elem ) {
		return !jQuery.expr.pseudos.visible( elem );
	};
	jQuery.expr.pseudos.visible = function( elem ) {
		return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
	};




	jQuery.ajaxSettings.xhr = function() {
		try {
			return new window.XMLHttpRequest();
		} catch ( e ) {}
	};

	var xhrSuccessStatus = {

			// File protocol always yields status code 0, assume 200
			0: 200,

			// Support: IE <=9 only
			// #1450: sometimes IE returns 1223 when it should be 204
			1223: 204
		},
		xhrSupported = jQuery.ajaxSettings.xhr();

	support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport( function( options ) {
		var callback, errorCallback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( support.cors || xhrSupported && !options.crossDomain ) {
			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr();

					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {
						xhr.setRequestHeader( i, headers[ i ] );
					}

					// Callback
					callback = function( type ) {
						return function() {
							if ( callback ) {
								callback = errorCallback = xhr.onload =
									xhr.onerror = xhr.onabort = xhr.onreadystatechange = null;

								if ( type === "abort" ) {
									xhr.abort();
								} else if ( type === "error" ) {

									// Support: IE <=9 only
									// On a manual native abort, IE9 throws
									// errors on any property access that is not readyState
									if ( typeof xhr.status !== "number" ) {
										complete( 0, "error" );
									} else {
										complete(

											// File: protocol always yields status 0; see #8605, #14207
											xhr.status,
											xhr.statusText
										);
									}
								} else {
									complete(
										xhrSuccessStatus[ xhr.status ] || xhr.status,
										xhr.statusText,

										// Support: IE <=9 only
										// IE9 has no XHR2 but throws on binary (trac-11426)
										// For XHR2 non-text, let the caller handle it (gh-2498)
										( xhr.responseType || "text" ) !== "text"  ||
										typeof xhr.responseText !== "string" ?
											{ binary: xhr.response } :
											{ text: xhr.responseText },
										xhr.getAllResponseHeaders()
									);
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					errorCallback = xhr.onerror = callback( "error" );

					// Support: IE 9 only
					// Use onreadystatechange to replace onabort
					// to handle uncaught aborts
					if ( xhr.onabort !== undefined ) {
						xhr.onabort = errorCallback;
					} else {
						xhr.onreadystatechange = function() {

							// Check readyState before timeout as it changes
							if ( xhr.readyState === 4 ) {

								// Allow onerror to be called first,
								// but that will not handle a native abort
								// Also, save errorCallback to a variable
								// as xhr.onerror cannot be accessed
								window.setTimeout( function() {
									if ( callback ) {
										errorCallback();
									}
								} );
							}
						};
					}

					// Create the abort callback
					callback = callback( "abort" );

					try {

						// Do send the request (this may raise an exception)
						xhr.send( options.hasContent && options.data || null );
					} catch ( e ) {

						// #14683: Only rethrow if this hasn't been notified as an error yet
						if ( callback ) {
							throw e;
						}
					}
				},

				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
	jQuery.ajaxPrefilter( function( s ) {
		if ( s.crossDomain ) {
			s.contents.script = false;
		}
	} );

	// Install script dataType
	jQuery.ajaxSetup( {
		accepts: {
			script: "text/javascript, application/javascript, " +
				"application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /\b(?:java|ecma)script\b/
		},
		converters: {
			"text script": function( text ) {
				jQuery.globalEval( text );
				return text;
			}
		}
	} );

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter( "script", function( s ) {
		if ( s.cache === undefined ) {
			s.cache = false;
		}
		if ( s.crossDomain ) {
			s.type = "GET";
		}
	} );

	// Bind script tag hack transport
	jQuery.ajaxTransport( "script", function( s ) {

		// This transport only deals with cross domain requests
		if ( s.crossDomain ) {
			var script, callback;
			return {
				send: function( _, complete ) {
					script = jQuery( "<script>" ).prop( {
						charset: s.scriptCharset,
						src: s.url
					} ).on(
						"load error",
						callback = function( evt ) {
							script.remove();
							callback = null;
							if ( evt ) {
								complete( evt.type === "error" ? 404 : 200, evt.type );
							}
						}
					);

					// Use native DOM manipulation to avoid our domManip AJAX trickery
					document.head.appendChild( script[ 0 ] );
				},
				abort: function() {
					if ( callback ) {
						callback();
					}
				}
			};
		}
	} );




	var oldCallbacks = [],
		rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup( {
		jsonp: "callback",
		jsonpCallback: function() {
			var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
			this[ callback ] = true;
			return callback;
		}
	} );

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

		var callbackName, overwritten, responseContainer,
			jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
				"url" :
				typeof s.data === "string" &&
					( s.contentType || "" )
						.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
					rjsonp.test( s.data ) && "data"
			);

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
				s.jsonpCallback() :
				s.jsonpCallback;

			// Insert callback into url or form data
			if ( jsonProp ) {
				s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
			} else if ( s.jsonp !== false ) {
				s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters[ "script json" ] = function() {
				if ( !responseContainer ) {
					jQuery.error( callbackName + " was not called" );
				}
				return responseContainer[ 0 ];
			};

			// Force json dataType
			s.dataTypes[ 0 ] = "json";

			// Install callback
			overwritten = window[ callbackName ];
			window[ callbackName ] = function() {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always( function() {

				// If previous value didn't exist - remove it
				if ( overwritten === undefined ) {
					jQuery( window ).removeProp( callbackName );

				// Otherwise restore preexisting value
				} else {
					window[ callbackName ] = overwritten;
				}

				// Save back as free
				if ( s[ callbackName ] ) {

					// Make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// Save the callback name for future use
					oldCallbacks.push( callbackName );
				}

				// Call if it was a function and we have a response
				if ( responseContainer && jQuery.isFunction( overwritten ) ) {
					overwritten( responseContainer[ 0 ] );
				}

				responseContainer = overwritten = undefined;
			} );

			// Delegate to script
			return "script";
		}
	} );




	// Support: Safari 8 only
	// In Safari 8 documents created via document.implementation.createHTMLDocument
	// collapse sibling forms: the second one becomes a child of the first one.
	// Because of that, this security measure has to be disabled in Safari 8.
	// https://bugs.webkit.org/show_bug.cgi?id=137337
	support.createHTMLDocument = ( function() {
		var body = document.implementation.createHTMLDocument( "" ).body;
		body.innerHTML = "<form></form><form></form>";
		return body.childNodes.length === 2;
	} )();


	// Argument "data" should be string of html
	// context (optional): If specified, the fragment will be created in this context,
	// defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function( data, context, keepScripts ) {
		if ( typeof data !== "string" ) {
			return [];
		}
		if ( typeof context === "boolean" ) {
			keepScripts = context;
			context = false;
		}

		var base, parsed, scripts;

		if ( !context ) {

			// Stop scripts or inline event handlers from being executed immediately
			// by using document.implementation
			if ( support.createHTMLDocument ) {
				context = document.implementation.createHTMLDocument( "" );

				// Set the base href for the created document
				// so any parsed elements with URLs
				// are based on the document's URL (gh-2965)
				base = context.createElement( "base" );
				base.href = document.location.href;
				context.head.appendChild( base );
			} else {
				context = document;
			}
		}

		parsed = rsingleTag.exec( data );
		scripts = !keepScripts && [];

		// Single tag
		if ( parsed ) {
			return [ context.createElement( parsed[ 1 ] ) ];
		}

		parsed = buildFragment( [ data ], context, scripts );

		if ( scripts && scripts.length ) {
			jQuery( scripts ).remove();
		}

		return jQuery.merge( [], parsed.childNodes );
	};


	/**
	 * Load a url into a page
	 */
	jQuery.fn.load = function( url, params, callback ) {
		var selector, type, response,
			self = this,
			off = url.indexOf( " " );

		if ( off > -1 ) {
			selector = jQuery.trim( url.slice( off ) );
			url = url.slice( 0, off );
		}

		// If it's a function
		if ( jQuery.isFunction( params ) ) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

		// Otherwise, build a param string
		} else if ( params && typeof params === "object" ) {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if ( self.length > 0 ) {
			jQuery.ajax( {
				url: url,

				// If "type" variable is undefined, then "GET" method will be used.
				// Make value of this field explicit since
				// user can override it through ajaxSetup method
				type: type || "GET",
				dataType: "html",
				data: params
			} ).done( function( responseText ) {

				// Save response for use in complete callback
				response = arguments;

				self.html( selector ?

					// If a selector was specified, locate the right elements in a dummy div
					// Exclude scripts to avoid IE 'Permission Denied' errors
					jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

					// Otherwise use the full result
					responseText );

			// If the request succeeds, this function gets "data", "status", "jqXHR"
			// but they are ignored because response was set above.
			// If it fails, this function gets "jqXHR", "status", "error"
			} ).always( callback && function( jqXHR, status ) {
				self.each( function() {
					callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
				} );
			} );
		}

		return this;
	};




	// Attach a bunch of functions for handling common AJAX events
	jQuery.each( [
		"ajaxStart",
		"ajaxStop",
		"ajaxComplete",
		"ajaxError",
		"ajaxSuccess",
		"ajaxSend"
	], function( i, type ) {
		jQuery.fn[ type ] = function( fn ) {
			return this.on( type, fn );
		};
	} );




	jQuery.expr.pseudos.animated = function( elem ) {
		return jQuery.grep( jQuery.timers, function( fn ) {
			return elem === fn.elem;
		} ).length;
	};




	/**
	 * Gets a window from an element
	 */
	function getWindow( elem ) {
		return jQuery.isWindow( elem ) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function( elem, options, i ) {
			var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
				position = jQuery.css( elem, "position" ),
				curElem = jQuery( elem ),
				props = {};

			// Set position first, in-case top/left are set even on static elem
			if ( position === "static" ) {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css( elem, "top" );
			curCSSLeft = jQuery.css( elem, "left" );
			calculatePosition = ( position === "absolute" || position === "fixed" ) &&
				( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if ( calculatePosition ) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;

			} else {
				curTop = parseFloat( curCSSTop ) || 0;
				curLeft = parseFloat( curCSSLeft ) || 0;
			}

			if ( jQuery.isFunction( options ) ) {

				// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
				options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
			}

			if ( options.top != null ) {
				props.top = ( options.top - curOffset.top ) + curTop;
			}
			if ( options.left != null ) {
				props.left = ( options.left - curOffset.left ) + curLeft;
			}

			if ( "using" in options ) {
				options.using.call( elem, props );

			} else {
				curElem.css( props );
			}
		}
	};

	jQuery.fn.extend( {
		offset: function( options ) {

			// Preserve chaining for setter
			if ( arguments.length ) {
				return options === undefined ?
					this :
					this.each( function( i ) {
						jQuery.offset.setOffset( this, options, i );
					} );
			}

			var docElem, win, rect, doc,
				elem = this[ 0 ];

			if ( !elem ) {
				return;
			}

			// Support: IE <=11 only
			// Running getBoundingClientRect on a
			// disconnected node in IE throws an error
			if ( !elem.getClientRects().length ) {
				return { top: 0, left: 0 };
			}

			rect = elem.getBoundingClientRect();

			// Make sure element is not hidden (display: none)
			if ( rect.width || rect.height ) {
				doc = elem.ownerDocument;
				win = getWindow( doc );
				docElem = doc.documentElement;

				return {
					top: rect.top + win.pageYOffset - docElem.clientTop,
					left: rect.left + win.pageXOffset - docElem.clientLeft
				};
			}

			// Return zeros for disconnected and hidden elements (gh-2310)
			return rect;
		},

		position: function() {
			if ( !this[ 0 ] ) {
				return;
			}

			var offsetParent, offset,
				elem = this[ 0 ],
				parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
			// because it is its only offset parent
			if ( jQuery.css( elem, "position" ) === "fixed" ) {

				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();

			} else {

				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset = {
					top: parentOffset.top + jQuery.css( offsetParent[ 0 ], "borderTopWidth", true ),
					left: parentOffset.left + jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true )
				};
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
				left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
			};
		},

		// This method will return documentElement in the following cases:
		// 1) For the element inside the iframe without offsetParent, this method will return
		//    documentElement of the parent window
		// 2) For the hidden or detached element
		// 3) For body or html element, i.e. in case of the html node - it will return itself
		//
		// but those exceptions were never presented as a real life use-cases
		// and might be considered as more preferable results.
		//
		// This logic, however, is not guaranteed and can change at any point in the future
		offsetParent: function() {
			return this.map( function() {
				var offsetParent = this.offsetParent;

				while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || documentElement;
			} );
		}
	} );

	// Create scrollLeft and scrollTop methods
	jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
		var top = "pageYOffset" === prop;

		jQuery.fn[ method ] = function( val ) {
			return access( this, function( elem, method, val ) {
				var win = getWindow( elem );

				if ( val === undefined ) {
					return win ? win[ prop ] : elem[ method ];
				}

				if ( win ) {
					win.scrollTo(
						!top ? val : win.pageXOffset,
						top ? val : win.pageYOffset
					);

				} else {
					elem[ method ] = val;
				}
			}, method, val, arguments.length );
		};
	} );

	// Support: Safari <=7 - 9.1, Chrome <=37 - 49
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each( [ "top", "left" ], function( i, prop ) {
		jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
			function( elem, computed ) {
				if ( computed ) {
					computed = curCSS( elem, prop );

					// If curCSS returns percentage, fallback to offset
					return rnumnonpx.test( computed ) ?
						jQuery( elem ).position()[ prop ] + "px" :
						computed;
				}
			}
		);
	} );


	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
		jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
			function( defaultExtra, funcName ) {

			// Margin is only for outerHeight, outerWidth
			jQuery.fn[ funcName ] = function( margin, value ) {
				var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
					extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

				return access( this, function( elem, type, value ) {
					var doc;

					if ( jQuery.isWindow( elem ) ) {

						// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
						return funcName.indexOf( "outer" ) === 0 ?
							elem[ "inner" + name ] :
							elem.document.documentElement[ "client" + name ];
					}

					// Get document width or height
					if ( elem.nodeType === 9 ) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(
							elem.body[ "scroll" + name ], doc[ "scroll" + name ],
							elem.body[ "offset" + name ], doc[ "offset" + name ],
							doc[ "client" + name ]
						);
					}

					return value === undefined ?

						// Get width or height on the element, requesting but not forcing parseFloat
						jQuery.css( elem, type, extra ) :

						// Set width or height on the element
						jQuery.style( elem, type, value, extra );
				}, type, chainable ? margin : undefined, chainable );
			};
		} );
	} );


	jQuery.fn.extend( {

		bind: function( types, data, fn ) {
			return this.on( types, null, data, fn );
		},
		unbind: function( types, fn ) {
			return this.off( types, null, fn );
		},

		delegate: function( selector, types, data, fn ) {
			return this.on( types, selector, data, fn );
		},
		undelegate: function( selector, types, fn ) {

			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ?
				this.off( selector, "**" ) :
				this.off( types, selector || "**", fn );
		}
	} );

	jQuery.parseJSON = JSON.parse;




	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if ( true ) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function() {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}





	var

		// Map over jQuery in case of overwrite
		_jQuery = window.jQuery,

		// Map over the $ in case of overwrite
		_$ = window.$;

	jQuery.noConflict = function( deep ) {
		if ( window.$ === jQuery ) {
			window.$ = _$;
		}

		if ( deep && window.jQuery === jQuery ) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if ( !noGlobal ) {
		window.jQuery = window.$ = jQuery;
	}


	return jQuery;
	} ) );


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(4))

/***/ },
/* 3 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	module.exports = function(src) {
		if (typeof execScript !== "undefined")
			execScript(src);
		else
			eval.call(null, src);
	}


/***/ },
/* 4 */
/***/ function(module, exports) {

	module.exports = "/**\n* @author       Richard Davey <rich@photonstorm.com>\n* @copyright    2016 Photon Storm Ltd.\n* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}\n*\n* @overview\n*\n* Phaser - http://phaser.io\n*\n* v2.5.0 \"Five Kings\" - Built: Fri Jun 17 2016 12:44:51\n*\n* By Richard Davey http://www.photonstorm.com @photonstorm\n*\n* Phaser is a fun, free and fast 2D game framework for making HTML5 games\n* for desktop and mobile web browsers, supporting Canvas and WebGL rendering.\n*\n* Phaser uses Pixi.js for rendering, created by Mat Groves http://matgroves.com @Doormat23\n* Phaser uses p2.js for full-body physics, created by Stefan Hedman https://github.com/schteppe/p2.js @schteppe\n* Phaser contains a port of N+ Physics, converted by Richard Davey, original by http://www.metanetsoftware.com\n*\n* Many thanks to Adam Saltsman (@ADAMATOMIC) for releasing Flixel, from which both Phaser and my love of framework development originate.\n*\n* Follow development at http://phaser.io and on our forum\n*\n* \"If you want your children to be intelligent,  read them fairy tales.\"\n* \"If you want them to be more intelligent, read them more fairy tales.\"\n*                                                     -- Albert Einstein\n*/\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n(function(){\n\n    var root = this;\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n * The [pixi.js](http://www.pixijs.com/) module/namespace.\n *\n * @module PIXI\n */\n \n/**\n * Namespace-class for [pixi.js](http://www.pixijs.com/).\n *\n * Contains assorted static properties and enumerations.\n *\n * @class PIXI\n * @static\n */\nvar PIXI = PIXI || {};\n\n/**\n * A reference to the Phaser Game instance that owns this Pixi renderer.\n * @property {Phaser.Game} game\n * @static \n */\nPIXI.game = null;\n\n/**\n * @property {Number} WEBGL_RENDERER\n * @protected\n * @static \n */\nPIXI.WEBGL_RENDERER = 0;\n\n/**\n * @property {Number} CANVAS_RENDERER\n * @protected\n * @static\n */\nPIXI.CANVAS_RENDERER = 1;\n\n/**\n * Version of pixi that is loaded.\n * @property {String} VERSION\n * @static \n */\nPIXI.VERSION = \"v2.2.9\";\n\n// used to create uids for various pixi objects.\nPIXI._UID = 0;\n\nif (typeof(Float32Array) != 'undefined')\n{\n    PIXI.Float32Array = Float32Array;\n    PIXI.Uint16Array = Uint16Array;\n\n    // Uint32Array and ArrayBuffer only used by WebGL renderer\n    // We can suppose that if WebGL is supported then typed arrays are supported too\n    // as they predate WebGL support for all browsers:\n    // see typed arrays support: http://caniuse.com/#search=TypedArrays\n    // see WebGL support: http://caniuse.com/#search=WebGL\n    PIXI.Uint32Array = Uint32Array;\n    PIXI.ArrayBuffer = ArrayBuffer;\n}\nelse\n{\n    PIXI.Float32Array = Array;\n    PIXI.Uint16Array = Array;\n}\n\n/**\n * @property {Number} PI_2\n * @static\n */\nPIXI.PI_2 = Math.PI * 2;\n\n/**\n * @property {Number} RAD_TO_DEG\n * @static\n */\nPIXI.RAD_TO_DEG = 180 / Math.PI;\n\n/**\n * @property {Number} DEG_TO_RAD\n * @static\n */\nPIXI.DEG_TO_RAD = Math.PI / 180;\n\n/**\n * @property {String} RETINA_PREFIX\n * @protected\n * @static\n */\nPIXI.RETINA_PREFIX = \"@2x\";\n\n/**\n * The default render options if none are supplied to\n * {{#crossLink \"WebGLRenderer\"}}{{/crossLink}} or {{#crossLink \"CanvasRenderer\"}}{{/crossLink}}.\n *\n * @property {Object} defaultRenderOptions\n * @property {Object} defaultRenderOptions.view=null\n * @property {Boolean} defaultRenderOptions.transparent=false\n * @property {Boolean} defaultRenderOptions.antialias=false\n * @property {Boolean} defaultRenderOptions.preserveDrawingBuffer=false\n * @property {Number} defaultRenderOptions.resolution=1\n * @property {Boolean} defaultRenderOptions.clearBeforeRender=true\n * @property {Boolean} defaultRenderOptions.autoResize=false\n * @static\nPIXI.defaultRenderOptions = {\n    view: null,\n    transparent: false,\n    antialias: false, \n    preserveDrawingBuffer: false,\n    resolution: 1,\n    clearBeforeRender: true,\n    autoResize: false\n};\n */\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n * The base class for all objects that are rendered on the screen.\n * This is an abstract class and should not be used on its own rather it should be extended.\n *\n * @class DisplayObject\n * @constructor\n */\nPIXI.DisplayObject = function()\n{\n    /**\n     * The coordinate of the object relative to the local coordinates of the parent.\n     *\n     * @property position\n     * @type Point\n     */\n    this.position = new PIXI.Point(0, 0);\n\n    /**\n     * The scale factor of the object.\n     *\n     * @property scale\n     * @type Point\n     */\n    this.scale = new PIXI.Point(1, 1);\n\n    /**\n     * The pivot point of the displayObject that it rotates around\n     *\n     * @property pivot\n     * @type Point\n     */\n    this.pivot = new PIXI.Point(0, 0);\n\n    /**\n     * The rotation of the object in radians.\n     *\n     * @property rotation\n     * @type Number\n     */\n    this.rotation = 0;\n\n    /**\n     * The opacity of the object.\n     *\n     * @property alpha\n     * @type Number\n     */\n    this.alpha = 1;\n\n    /**\n     * The visibility of the object.\n     *\n     * @property visible\n     * @type Boolean\n     */\n    this.visible = true;\n\n    /**\n     * This is the defined area that will pick up mouse / touch events. It is null by default.\n     * Setting it is a neat way of optimising the hitTest function that the interactionManager will use (as it will not need to hit test all the children)\n     *\n     * @property hitArea\n     * @type Rectangle|Circle|Ellipse|Polygon\n     */\n    this.hitArea = null;\n\n    /**\n     * Can this object be rendered\n     *\n     * @property renderable\n     * @type Boolean\n     */\n    this.renderable = false;\n\n    /**\n     * [read-only] The display object container that contains this display object.\n     *\n     * @property parent\n     * @type DisplayObjectContainer\n     * @readOnly\n     */\n    this.parent = null;\n\n    /**\n     * [read-only] The stage the display object is connected to, or undefined if it is not connected to the stage.\n     *\n     * @property stage\n     * @type Stage\n     * @readOnly\n     */\n    this.stage = null;\n\n    /**\n     * [read-only] The multiplied alpha of the displayObject\n     *\n     * @property worldAlpha\n     * @type Number\n     * @readOnly\n     */\n    this.worldAlpha = 1;\n\n    /**\n     * [read-only] Current transform of the object based on world (parent) factors\n     *\n     * @property worldTransform\n     * @type Matrix\n     * @readOnly\n     * @private\n     */\n    this.worldTransform = new PIXI.Matrix();\n\n    /**\n     * The position of the Display Object based on the world transform.\n     * This value is updated at the end of updateTransform and takes all parent transforms into account.\n     *\n     * @property worldPosition\n     * @type Point\n     * @readOnly\n     */\n    this.worldPosition = new PIXI.Point(0, 0);\n\n    /**\n     * The scale of the Display Object based on the world transform.\n     * This value is updated at the end of updateTransform and takes all parent transforms into account.\n     *\n     * @property worldScale\n     * @type Point\n     * @readOnly\n     */\n    this.worldScale = new PIXI.Point(1, 1);\n\n    /**\n     * The rotation of the Display Object, in radians, based on the world transform.\n     * This value is updated at the end of updateTransform and takes all parent transforms into account.\n     *\n     * @property worldRotation\n     * @type Number\n     * @readOnly\n     */\n    this.worldRotation = 0;\n\n    /**\n     * cached sin rotation and cos rotation\n     *\n     * @property _sr\n     * @type Number\n     * @private\n     */\n    this._sr = 0;\n\n    /**\n     * cached sin rotation and cos rotation\n     *\n     * @property _cr\n     * @type Number\n     * @private\n     */\n    this._cr = 1;\n\n    /**\n     * The area the filter is applied to like the hitArea this is used as more of an optimisation\n     * rather than figuring out the dimensions of the displayObject each frame you can set this rectangle\n     *\n     * @property filterArea\n     * @type Rectangle\n     */\n    this.filterArea = null;\n\n    /**\n     * The original, cached bounds of the object\n     *\n     * @property _bounds\n     * @type Rectangle\n     * @private\n     */\n    this._bounds = new PIXI.Rectangle(0, 0, 1, 1);\n\n    /**\n     * The most up-to-date bounds of the object\n     *\n     * @property _currentBounds\n     * @type Rectangle\n     * @private\n     */\n    this._currentBounds = null;\n\n    /**\n     * The original, cached mask of the object\n     *\n     * @property _mask\n     * @type Rectangle\n     * @private\n     */\n    this._mask = null;\n\n    /**\n     * Cached internal flag.\n     *\n     * @property _cacheAsBitmap\n     * @type Boolean\n     * @private\n     */\n    this._cacheAsBitmap = false;\n\n    /**\n     * Cached internal flag.\n     *\n     * @property _cacheIsDirty\n     * @type Boolean\n     * @private\n     */\n    this._cacheIsDirty = false;\n\n};\n\n// constructor\nPIXI.DisplayObject.prototype.constructor = PIXI.DisplayObject;\n\n/**\n * Destroy this DisplayObject.\n * Removes all references to transformCallbacks, its parent, the stage, filters, bounds, mask and cached Sprites.\n *\n * @method destroy\n */\nPIXI.DisplayObject.prototype.destroy = function()\n{\n    if (this.children)\n    {\n        var i = this.children.length;\n\n        while (i--)\n        {\n            this.children[i].destroy();\n        }\n\n        this.children = [];\n    }\n\n    this.hitArea = null;\n    this.parent = null;\n    this.stage = null;\n    this.worldTransform = null;\n    this.filterArea = null;\n    this._bounds = null;\n    this._currentBounds = null;\n    this._mask = null;\n\n    //  In case Pixi is still going to try and render it even though destroyed\n    this.renderable = false;\n\n    this._destroyCachedSprite();\n};\n\n/**\n * [read-only] Indicates if the sprite is globally visible.\n *\n * @property worldVisible\n * @type Boolean\n */\nObject.defineProperty(PIXI.DisplayObject.prototype, 'worldVisible', {\n\n    get: function() {\n\n        var item = this;\n\n        do\n        {\n            if (!item.visible) return false;\n            item = item.parent;\n        }\n        while(item);\n\n        return true;\n    }\n\n});\n\n/**\n * Sets a mask for the displayObject. A mask is an object that limits the visibility of an object to the shape of the mask applied to it.\n * In PIXI a regular mask must be a PIXI.Graphics object. This allows for much faster masking in canvas as it utilises shape clipping.\n * To remove a mask, set this property to null.\n *\n * @property mask\n * @type Graphics\n */\nObject.defineProperty(PIXI.DisplayObject.prototype, 'mask', {\n\n    get: function() {\n        return this._mask;\n    },\n\n    set: function(value) {\n\n        if (this._mask) this._mask.isMask = false;\n\n        this._mask = value;\n\n        if (this._mask) this._mask.isMask = true;\n    }\n\n});\n\n/**\n * Sets the filters for the displayObject.\n * IMPORTANT: This is a webGL only feature and will be ignored by the Canvas renderer.\n * \n * To remove filters simply set this property to 'null'.\n * \n * You cannot have a filter and a multiply blend mode active at the same time. Setting a filter will reset\n * this objects blend mode to NORMAL.\n * \n * @property filters\n * @type Array(Filter)\n */\nObject.defineProperty(PIXI.DisplayObject.prototype, 'filters', {\n\n    get: function() {\n        return this._filters;\n    },\n\n    set: function(value) {\n\n        if (value)\n        {\n            // now put all the passes in one place..\n            var passes = [];\n\n            for (var i = 0; i < value.length; i++)\n            {\n                var filterPasses = value[i].passes;\n\n                for (var j = 0; j < filterPasses.length; j++)\n                {\n                    passes.push(filterPasses[j]);\n                }\n            }\n\n            // TODO change this as it is legacy\n            this._filterBlock = { target: this, filterPasses: passes };\n        }\n\n        this._filters = value;\n\n        if (this.blendMode && this.blendMode === PIXI.blendModes.MULTIPLY)\n        {\n            this.blendMode = PIXI.blendModes.NORMAL;\n        }\n    }\n});\n\n/**\n * Set if this display object is cached as a bitmap.\n * This basically takes a snap shot of the display object as it is at that moment. It can provide a performance benefit for complex static displayObjects.\n * To remove simply set this property to 'null'\n * @property cacheAsBitmap\n * @type Boolean\n */\nObject.defineProperty(PIXI.DisplayObject.prototype, 'cacheAsBitmap', {\n\n    get: function() {\n        return  this._cacheAsBitmap;\n    },\n\n    set: function(value) {\n\n        if (this._cacheAsBitmap === value)\n        {\n            return;\n        }\n\n        if (value)\n        {\n            this._generateCachedSprite();\n        }\n        else\n        {\n            this._destroyCachedSprite();\n        }\n\n        this._cacheAsBitmap = value;\n    }\n\n});\n\n/*\n * Updates the object transform for rendering.\n *\n * If the object has no parent, and no parent parameter is provided, it will default to Phaser.Game.World as the parent.\n * If that is unavailable the transform fails to take place.\n *\n * The `parent` parameter has priority over the actual parent. Use it as a parent override.\n * Setting it does **not** change the actual parent of this DisplayObject, it just uses the parent for the transform update.\n *\n * @method updateTransform\n * @param {DisplayObject} [parent] - Optional parent to parent this DisplayObject transform from.\n */\nPIXI.DisplayObject.prototype.updateTransform = function(parent)\n{\n    if (!parent && !this.parent && !this.game)\n    {\n        return;\n    }\n\n    var p = this.parent;\n\n    if (parent)\n    {\n        p = parent;\n    }\n    else if (!this.parent)\n    {\n        p = this.game.world;\n    }\n\n    // create some matrix refs for easy access\n    var pt = p.worldTransform;\n    var wt = this.worldTransform;\n\n    // temporary matrix variables\n    var a, b, c, d, tx, ty;\n\n    // so if rotation is between 0 then we can simplify the multiplication process..\n    if (this.rotation % PIXI.PI_2)\n    {\n        // check to see if the rotation is the same as the previous render. This means we only need to use sin and cos when rotation actually changes\n        if (this.rotation !== this.rotationCache)\n        {\n            this.rotationCache = this.rotation;\n            this._sr = Math.sin(this.rotation);\n            this._cr = Math.cos(this.rotation);\n        }\n\n        // get the matrix values of the displayobject based on its transform properties..\n        a  =  this._cr * this.scale.x;\n        b  =  this._sr * this.scale.x;\n        c  = -this._sr * this.scale.y;\n        d  =  this._cr * this.scale.y;\n        tx =  this.position.x;\n        ty =  this.position.y;\n        \n        // check for pivot.. not often used so geared towards that fact!\n        if (this.pivot.x || this.pivot.y)\n        {\n            tx -= this.pivot.x * a + this.pivot.y * c;\n            ty -= this.pivot.x * b + this.pivot.y * d;\n        }\n\n        // concat the parent matrix with the objects transform.\n        wt.a  = a  * pt.a + b  * pt.c;\n        wt.b  = a  * pt.b + b  * pt.d;\n        wt.c  = c  * pt.a + d  * pt.c;\n        wt.d  = c  * pt.b + d  * pt.d;\n        wt.tx = tx * pt.a + ty * pt.c + pt.tx;\n        wt.ty = tx * pt.b + ty * pt.d + pt.ty;\n    }\n    else\n    {\n        // lets do the fast version as we know there is no rotation..\n        a  = this.scale.x;\n        d  = this.scale.y;\n\n        tx = this.position.x - this.pivot.x * a;\n        ty = this.position.y - this.pivot.y * d;\n\n        wt.a  = a  * pt.a;\n        wt.b  = a  * pt.b;\n        wt.c  = d  * pt.c;\n        wt.d  = d  * pt.d;\n        wt.tx = tx * pt.a + ty * pt.c + pt.tx;\n        wt.ty = tx * pt.b + ty * pt.d + pt.ty;\n    }\n\n    //  Set the World values\n    this.worldAlpha = this.alpha * p.worldAlpha;\n    this.worldPosition.set(wt.tx, wt.ty);\n    this.worldScale.set(this.scale.x * Math.sqrt(wt.a * wt.a + wt.c * wt.c), this.scale.y * Math.sqrt(wt.b * wt.b + wt.d * wt.d));\n    this.worldRotation = Math.atan2(-wt.c, wt.d);\n\n    // reset the bounds each time this is called!\n    this._currentBounds = null;\n\n    //  Custom callback?\n    if (this.transformCallback)\n    {\n        this.transformCallback.call(this.transformCallbackContext, wt, pt);\n    }\n\n};\n\n// performance increase to avoid using call.. (10x faster)\nPIXI.DisplayObject.prototype.displayObjectUpdateTransform = PIXI.DisplayObject.prototype.updateTransform;\n\n/**\n * Retrieves the bounds of the displayObject as a rectangle object\n *\n * @method getBounds\n * @param matrix {Matrix}\n * @return {Rectangle} the rectangular bounding area\n */\nPIXI.DisplayObject.prototype.getBounds = function(matrix)\n{\n    matrix = matrix;//just to get passed js hinting (and preserve inheritance)\n    return PIXI.EmptyRectangle;\n};\n\n/**\n * Retrieves the local bounds of the displayObject as a rectangle object\n *\n * @method getLocalBounds\n * @return {Rectangle} the rectangular bounding area\n */\nPIXI.DisplayObject.prototype.getLocalBounds = function()\n{\n    return this.getBounds(PIXI.identityMatrix);///PIXI.EmptyRectangle();\n};\n\n/**\n * Sets the object's stage reference, the stage this object is connected to\n *\n * @method setStageReference\n * @param stage {Stage} the stage that the object will have as its current stage reference\n */\nPIXI.DisplayObject.prototype.setStageReference = function(stage)\n{\n    this.stage = stage;\n};\n\n/**\n * Empty, to be overridden by classes that require it.\n *\n * @method preUpdate\n */\nPIXI.DisplayObject.prototype.preUpdate = function()\n{\n};\n\n/**\n * Useful function that returns a texture of the displayObject object that can then be used to create sprites\n * This can be quite useful if your displayObject is static / complicated and needs to be reused multiple times.\n *\n * @method generateTexture\n * @param resolution {Number} The resolution of the texture being generated\n * @param scaleMode {Number} See {{#crossLink \"PIXI/scaleModes:property\"}}PIXI.scaleModes{{/crossLink}} for possible values\n * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used to generate the texture.\n * @return {RenderTexture} a texture of the graphics object\n */\nPIXI.DisplayObject.prototype.generateTexture = function(resolution, scaleMode, renderer)\n{\n    var bounds = this.getLocalBounds();\n\n    var renderTexture = new PIXI.RenderTexture(bounds.width | 0, bounds.height | 0, renderer, scaleMode, resolution);\n    \n    PIXI.DisplayObject._tempMatrix.tx = -bounds.x;\n    PIXI.DisplayObject._tempMatrix.ty = -bounds.y;\n    \n    renderTexture.render(this, PIXI.DisplayObject._tempMatrix);\n\n    return renderTexture;\n};\n\n/**\n * Generates and updates the cached sprite for this object.\n *\n * @method updateCache\n */\nPIXI.DisplayObject.prototype.updateCache = function()\n{\n    this._generateCachedSprite();\n};\n\n/**\n * Calculates the global position of the display object\n *\n * @method toGlobal\n * @param position {Point} The world origin to calculate from\n * @return {Point} A point object representing the position of this object\n */\nPIXI.DisplayObject.prototype.toGlobal = function(position)\n{\n    // don't need to u[date the lot\n    this.displayObjectUpdateTransform();\n    return this.worldTransform.apply(position);\n};\n\n/**\n * Calculates the local position of the display object relative to another point\n *\n * @method toLocal\n * @param position {Point} The world origin to calculate from\n * @param [from] {DisplayObject} The DisplayObject to calculate the global position from\n * @return {Point} A point object representing the position of this object\n */\nPIXI.DisplayObject.prototype.toLocal = function(position, from)\n{\n    if (from)\n    {\n        position = from.toGlobal(position);\n    }\n\n    // don't need to u[date the lot\n    this.displayObjectUpdateTransform();\n\n    return this.worldTransform.applyInverse(position);\n};\n\n/**\n * Internal method.\n *\n * @method _renderCachedSprite\n * @param renderSession {Object} The render session\n * @private\n */\nPIXI.DisplayObject.prototype._renderCachedSprite = function(renderSession)\n{\n    this._cachedSprite.worldAlpha = this.worldAlpha;\n\n    if (renderSession.gl)\n    {\n        PIXI.Sprite.prototype._renderWebGL.call(this._cachedSprite, renderSession);\n    }\n    else\n    {\n        PIXI.Sprite.prototype._renderCanvas.call(this._cachedSprite, renderSession);\n    }\n};\n\n/**\n * Internal method.\n *\n * @method _generateCachedSprite\n * @private\n */\nPIXI.DisplayObject.prototype._generateCachedSprite = function()\n{\n    this._cacheAsBitmap = false;\n\n    var bounds = this.getLocalBounds();\n\n    //  Round it off and force non-zero dimensions\n    bounds.width = Math.max(1, Math.ceil(bounds.width));\n    bounds.height = Math.max(1, Math.ceil(bounds.height));\n\n    this.updateTransform();\n\n    if (!this._cachedSprite)\n    {\n        var renderTexture = new PIXI.RenderTexture(bounds.width, bounds.height);\n        this._cachedSprite = new PIXI.Sprite(renderTexture);\n        this._cachedSprite.worldTransform = this.worldTransform;\n    }\n    else\n    {\n        this._cachedSprite.texture.resize(bounds.width, bounds.height);\n    }\n\n    //  Remove filters\n    var tempFilters = this._filters;\n    this._filters = null;\n    this._cachedSprite.filters = tempFilters;\n\n    // PIXI.DisplayObject._tempMatrix.identity();\n    PIXI.DisplayObject._tempMatrix.tx = -bounds.x;\n    PIXI.DisplayObject._tempMatrix.ty = -bounds.y;\n\n    this._cachedSprite.texture.render(this, PIXI.DisplayObject._tempMatrix, true);\n    this._cachedSprite.anchor.x = -(bounds.x / bounds.width);\n    this._cachedSprite.anchor.y = -(bounds.y / bounds.height);\n\n    this._filters = tempFilters;\n\n    this._cacheAsBitmap = true;\n};\n\n/**\n* Destroys the cached sprite.\n*\n* @method _destroyCachedSprite\n* @private\n*/\nPIXI.DisplayObject.prototype._destroyCachedSprite = function()\n{\n    if (!this._cachedSprite) return;\n\n    this._cachedSprite.texture.destroy(true);\n\n    // TODO could be object pooled!\n    this._cachedSprite = null;\n};\n\n/**\n* Renders the object using the WebGL renderer\n*\n* @method _renderWebGL\n* @param renderSession {RenderSession}\n* @private\n*/\nPIXI.DisplayObject.prototype._renderWebGL = function(renderSession)\n{\n    // OVERWRITE;\n    // this line is just here to pass jshinting :)\n    renderSession = renderSession;\n};\n\n/**\n* Renders the object using the Canvas renderer\n*\n* @method _renderCanvas\n* @param renderSession {RenderSession}\n* @private\n*/\nPIXI.DisplayObject.prototype._renderCanvas = function(renderSession)\n{\n    // OVERWRITE;\n    // this line is just here to pass jshinting :)\n    renderSession = renderSession;\n};\n\n/**\n * The position of the displayObject on the x axis relative to the local coordinates of the parent.\n *\n * @property x\n * @type Number\n */\nObject.defineProperty(PIXI.DisplayObject.prototype, 'x', {\n\n    get: function() {\n        return  this.position.x;\n    },\n\n    set: function(value) {\n        this.position.x = value;\n    }\n\n});\n\n/**\n * The position of the displayObject on the y axis relative to the local coordinates of the parent.\n *\n * @property y\n * @type Number\n */\nObject.defineProperty(PIXI.DisplayObject.prototype, 'y', {\n\n    get: function() {\n        return  this.position.y;\n    },\n\n    set: function(value) {\n        this.position.y = value;\n    }\n\n});\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n * A DisplayObjectContainer represents a collection of display objects.\n * It is the base class of all display objects that act as a container for other objects.\n *\n * @class DisplayObjectContainer\n * @extends DisplayObject\n * @constructor\n */\nPIXI.DisplayObjectContainer = function()\n{\n    PIXI.DisplayObject.call(this);\n\n    /**\n     * [read-only] The array of children of this container.\n     *\n     * @property children\n     * @type Array(DisplayObject)\n     * @readOnly\n     */\n    this.children = [];\n\n    /**\n    * If `ignoreChildInput`  is `false` it will allow this objects _children_ to be considered as valid for Input events.\n    * \n    * If this property is `true` then the children will _not_ be considered as valid for Input events.\n    * \n    * Note that this property isn't recursive: only immediate children are influenced, it doesn't scan further down.\n    * @property {boolean} ignoreChildInput\n    * @default\n    */\n    this.ignoreChildInput = false;\n    \n};\n\n// constructor\nPIXI.DisplayObjectContainer.prototype = Object.create( PIXI.DisplayObject.prototype );\nPIXI.DisplayObjectContainer.prototype.constructor = PIXI.DisplayObjectContainer;\n\n/**\n * The width of the displayObjectContainer, setting this will actually modify the scale to achieve the value set\n *\n * @property width\n * @type Number\n */\nObject.defineProperty(PIXI.DisplayObjectContainer.prototype, 'width', {\n\n    get: function() {\n        return this.scale.x * this.getLocalBounds().width;\n    },\n\n    set: function(value) {\n        \n        var width = this.getLocalBounds().width;\n\n        if (width !== 0)\n        {\n            this.scale.x = value / width;\n        }\n        else\n        {\n            this.scale.x = 1;\n        }\n        \n        this._width = value;\n    }\n});\n\n/**\n * The height of the displayObjectContainer, setting this will actually modify the scale to achieve the value set\n *\n * @property height\n * @type Number\n */\nObject.defineProperty(PIXI.DisplayObjectContainer.prototype, 'height', {\n\n    get: function() {\n        return  this.scale.y * this.getLocalBounds().height;\n    },\n\n    set: function(value) {\n\n        var height = this.getLocalBounds().height;\n\n        if (height !== 0)\n        {\n            this.scale.y = value / height;\n        }\n        else\n        {\n            this.scale.y = 1;\n        }\n\n        this._height = value;\n    }\n\n});\n\n/**\n * Adds a child to the container.\n *\n * @method addChild\n * @param child {DisplayObject} The DisplayObject to add to the container\n * @return {DisplayObject} The child that was added.\n */\nPIXI.DisplayObjectContainer.prototype.addChild = function(child)\n{\n    return this.addChildAt(child, this.children.length);\n};\n\n/**\n * Adds a child to the container at a specified index. If the index is out of bounds an error will be thrown\n *\n * @method addChildAt\n * @param child {DisplayObject} The child to add\n * @param index {Number} The index to place the child in\n * @return {DisplayObject} The child that was added.\n */\nPIXI.DisplayObjectContainer.prototype.addChildAt = function(child, index)\n{\n    if(index >= 0 && index <= this.children.length)\n    {\n        if(child.parent)\n        {\n            child.parent.removeChild(child);\n        }\n\n        child.parent = this;\n\n        this.children.splice(index, 0, child);\n\n        if(this.stage)child.setStageReference(this.stage);\n\n        return child;\n    }\n    else\n    {\n        throw new Error(child + 'addChildAt: The index '+ index +' supplied is out of bounds ' + this.children.length);\n    }\n};\n\n/**\n * Swaps the position of 2 Display Objects within this container.\n *\n * @method swapChildren\n * @param child {DisplayObject}\n * @param child2 {DisplayObject}\n */\nPIXI.DisplayObjectContainer.prototype.swapChildren = function(child, child2)\n{\n    if(child === child2) {\n        return;\n    }\n\n    var index1 = this.getChildIndex(child);\n    var index2 = this.getChildIndex(child2);\n\n    if(index1 < 0 || index2 < 0) {\n        throw new Error('swapChildren: Both the supplied DisplayObjects must be a child of the caller.');\n    }\n\n    this.children[index1] = child2;\n    this.children[index2] = child;\n\n};\n\n/**\n * Returns the index position of a child DisplayObject instance\n *\n * @method getChildIndex\n * @param child {DisplayObject} The DisplayObject instance to identify\n * @return {Number} The index position of the child display object to identify\n */\nPIXI.DisplayObjectContainer.prototype.getChildIndex = function(child)\n{\n    var index = this.children.indexOf(child);\n    if (index === -1)\n    {\n        throw new Error('The supplied DisplayObject must be a child of the caller');\n    }\n    return index;\n};\n\n/**\n * Changes the position of an existing child in the display object container\n *\n * @method setChildIndex\n * @param child {DisplayObject} The child DisplayObject instance for which you want to change the index number\n * @param index {Number} The resulting index number for the child display object\n */\nPIXI.DisplayObjectContainer.prototype.setChildIndex = function(child, index)\n{\n    if (index < 0 || index >= this.children.length)\n    {\n        throw new Error('The supplied index is out of bounds');\n    }\n    var currentIndex = this.getChildIndex(child);\n    this.children.splice(currentIndex, 1); //remove from old position\n    this.children.splice(index, 0, child); //add at new position\n};\n\n/**\n * Returns the child at the specified index\n *\n * @method getChildAt\n * @param index {Number} The index to get the child from\n * @return {DisplayObject} The child at the given index, if any.\n */\nPIXI.DisplayObjectContainer.prototype.getChildAt = function(index)\n{\n    if (index < 0 || index >= this.children.length)\n    {\n        throw new Error('getChildAt: Supplied index '+ index +' does not exist in the child list, or the supplied DisplayObject must be a child of the caller');\n    }\n    return this.children[index];\n    \n};\n\n/**\n * Removes a child from the container.\n *\n * @method removeChild\n * @param child {DisplayObject} The DisplayObject to remove\n * @return {DisplayObject} The child that was removed.\n */\nPIXI.DisplayObjectContainer.prototype.removeChild = function(child)\n{\n    var index = this.children.indexOf( child );\n    if(index === -1)return;\n    \n    return this.removeChildAt( index );\n};\n\n/**\n * Removes a child from the specified index position.\n *\n * @method removeChildAt\n * @param index {Number} The index to get the child from\n * @return {DisplayObject} The child that was removed.\n */\nPIXI.DisplayObjectContainer.prototype.removeChildAt = function(index)\n{\n    var child = this.getChildAt( index );\n    if(this.stage)\n        child.removeStageReference();\n\n    child.parent = undefined;\n    this.children.splice( index, 1 );\n    return child;\n};\n\n/**\n* Removes all children from this container that are within the begin and end indexes.\n*\n* @method removeChildren\n* @param beginIndex {Number} The beginning position. Default value is 0.\n* @param endIndex {Number} The ending position. Default value is size of the container.\n*/\nPIXI.DisplayObjectContainer.prototype.removeChildren = function(beginIndex, endIndex)\n{\n    var begin = beginIndex || 0;\n    var end = typeof endIndex === 'number' ? endIndex : this.children.length;\n    var range = end - begin;\n\n    if (range > 0 && range <= end)\n    {\n        var removed = this.children.splice(begin, range);\n        for (var i = 0; i < removed.length; i++) {\n            var child = removed[i];\n            if(this.stage)\n                child.removeStageReference();\n            child.parent = undefined;\n        }\n        return removed;\n    }\n    else if (range === 0 && this.children.length === 0)\n    {\n        return [];\n    }\n    else\n    {\n        throw new Error( 'removeChildren: Range Error, numeric values are outside the acceptable range' );\n    }\n};\n\n/*\n * Updates the transform on all children of this container for rendering\n *\n * @method updateTransform\n * @private\n */\nPIXI.DisplayObjectContainer.prototype.updateTransform = function()\n{\n    if (!this.visible)\n    {\n        return;\n    }\n\n    this.displayObjectUpdateTransform();\n\n    if (this._cacheAsBitmap)\n    {\n        return;\n    }\n\n    for (var i = 0; i < this.children.length; i++)\n    {\n        this.children[i].updateTransform();\n    }\n};\n\n// performance increase to avoid using call.. (10x faster)\nPIXI.DisplayObjectContainer.prototype.displayObjectContainerUpdateTransform = PIXI.DisplayObjectContainer.prototype.updateTransform;\n\n/**\n * Retrieves the bounds of the displayObjectContainer as a rectangle. The bounds calculation takes all visible children into consideration.\n *\n * @method getBounds\n * @return {Rectangle} The rectangular bounding area\n */\nPIXI.DisplayObjectContainer.prototype.getBounds = function()\n{\n    if (this.children.length === 0)\n    {\n        return PIXI.EmptyRectangle;\n    }\n\n    var minX = Infinity;\n    var minY = Infinity;\n\n    var maxX = -Infinity;\n    var maxY = -Infinity;\n\n    var childBounds;\n    var childMaxX;\n    var childMaxY;\n\n    var childVisible = false;\n\n    for (var i = 0; i < this.children.length; i++)\n    {\n        var child = this.children[i];\n        \n        if (!child.visible)\n        {\n            continue;\n        }\n\n        childVisible = true;\n\n        childBounds = this.children[i].getBounds();\n     \n        minX = minX < childBounds.x ? minX : childBounds.x;\n        minY = minY < childBounds.y ? minY : childBounds.y;\n\n        childMaxX = childBounds.width + childBounds.x;\n        childMaxY = childBounds.height + childBounds.y;\n\n        maxX = maxX > childMaxX ? maxX : childMaxX;\n        maxY = maxY > childMaxY ? maxY : childMaxY;\n    }\n\n    if (!childVisible)\n    {\n        return PIXI.EmptyRectangle;\n    }\n\n    var bounds = this._bounds;\n\n    bounds.x = minX;\n    bounds.y = minY;\n    bounds.width = maxX - minX;\n    bounds.height = maxY - minY;\n\n    return bounds;\n};\n\n/**\n * Retrieves the non-global local bounds of the displayObjectContainer as a rectangle. The calculation takes all visible children into consideration.\n *\n * @method getLocalBounds\n * @return {Rectangle} The rectangular bounding area\n */\nPIXI.DisplayObjectContainer.prototype.getLocalBounds = function()\n{\n    var matrixCache = this.worldTransform;\n\n    this.worldTransform = PIXI.identityMatrix;\n\n    for (var i = 0; i < this.children.length; i++)\n    {\n        this.children[i].updateTransform();\n    }\n\n    var bounds = this.getBounds();\n\n    this.worldTransform = matrixCache;\n\t\n    for (i = 0; i < this.children.length; i++)\n    {\n        this.children[i].updateTransform();\n    }\t\n\n    return bounds;\n};\n\n/**\n * Sets the containers Stage reference. This is the Stage that this object, and all of its children, is connected to.\n *\n * @method setStageReference\n * @param stage {Stage} the stage that the container will have as its current stage reference\n */\nPIXI.DisplayObjectContainer.prototype.setStageReference = function(stage)\n{\n    this.stage = stage;\n    \n    for (var i=0; i < this.children.length; i++)\n    {\n        this.children[i].setStageReference(stage)\n    }\n};\n\n/**\n * Removes the current stage reference from the container and all of its children.\n *\n * @method removeStageReference\n */\nPIXI.DisplayObjectContainer.prototype.removeStageReference = function()\n{\n    for (var i = 0; i < this.children.length; i++)\n    {\n        this.children[i].removeStageReference();\n    }\n\n    this.stage = null;\n};\n\n/**\n* Renders the object using the WebGL renderer\n*\n* @method _renderWebGL\n* @param renderSession {RenderSession} \n* @private\n*/\nPIXI.DisplayObjectContainer.prototype._renderWebGL = function(renderSession)\n{\n    if (!this.visible || this.alpha <= 0) return;\n    \n    if (this._cacheAsBitmap)\n    {\n        this._renderCachedSprite(renderSession);\n        return;\n    }\n    \n    var i;\n\n    if (this._mask || this._filters)\n    {\n        // push filter first as we need to ensure the stencil buffer is correct for any masking\n        if (this._filters)\n        {\n            renderSession.spriteBatch.flush();\n            renderSession.filterManager.pushFilter(this._filterBlock);\n        }\n\n        if (this._mask)\n        {\n            renderSession.spriteBatch.stop();\n            renderSession.maskManager.pushMask(this.mask, renderSession);\n            renderSession.spriteBatch.start();\n        }\n\n        // simple render children!\n        for (i = 0; i < this.children.length; i++)\n        {\n            this.children[i]._renderWebGL(renderSession);\n        }\n\n        renderSession.spriteBatch.stop();\n\n        if (this._mask) renderSession.maskManager.popMask(this._mask, renderSession);\n        if (this._filters) renderSession.filterManager.popFilter();\n        \n        renderSession.spriteBatch.start();\n    }\n    else\n    {\n        // simple render children!\n        for (i = 0; i < this.children.length; i++)\n        {\n            this.children[i]._renderWebGL(renderSession);\n        }\n    }\n};\n\n/**\n* Renders the object using the Canvas renderer\n*\n* @method _renderCanvas\n* @param renderSession {RenderSession} \n* @private\n*/\nPIXI.DisplayObjectContainer.prototype._renderCanvas = function(renderSession)\n{\n    if (this.visible === false || this.alpha === 0) return;\n\n    if (this._cacheAsBitmap)\n    {\n        this._renderCachedSprite(renderSession);\n        return;\n    }\n\n    if (this._mask)\n    {\n        renderSession.maskManager.pushMask(this._mask, renderSession);\n    }\n\n    for (var i = 0; i < this.children.length; i++)\n    {\n        this.children[i]._renderCanvas(renderSession);\n    }\n\n    if (this._mask)\n    {\n        renderSession.maskManager.popMask(renderSession);\n    }\n\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n * The Sprite object is the base for all textured objects that are rendered to the screen\n *\n * @class Sprite\n * @extends DisplayObjectContainer\n * @constructor\n * @param texture {Texture} The texture for this sprite\n *\n * A sprite can be created directly from an image like this :\n * var sprite = new PIXI.Sprite.fromImage('assets/image.png');\n * yourStage.addChild(sprite);\n * then obviously don't forget to add it to the stage you have already created\n */\nPIXI.Sprite = function(texture)\n{\n    PIXI.DisplayObjectContainer.call(this);\n\n    /**\n     * The anchor sets the origin point of the texture.\n     * The default is 0,0 this means the texture's origin is the top left\n     * Setting than anchor to 0.5,0.5 means the textures origin is centered\n     * Setting the anchor to 1,1 would mean the textures origin points will be the bottom right corner\n     *\n     * @property anchor\n     * @type Point\n     */\n    this.anchor = new PIXI.Point();\n\n    /**\n     * The texture that the sprite is using\n     *\n     * @property texture\n     * @type Texture\n     */\n    this.texture = texture || PIXI.Texture.emptyTexture;\n\n    /**\n     * The width of the sprite (this is initially set by the texture)\n     *\n     * @property _width\n     * @type Number\n     * @private\n     */\n    this._width = 0;\n\n    /**\n     * The height of the sprite (this is initially set by the texture)\n     *\n     * @property _height\n     * @type Number\n     * @private\n     */\n    this._height = 0;\n\n    /**\n     * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.\n     *\n     * @property tint\n     * @type Number\n     * @default 0xFFFFFF\n     */\n    this.tint = 0xFFFFFF;\n\n    /**\n     * The tint applied to the sprite. This is a hex value. A value of 0xFFFFFF will remove any tint effect.\n     *\n     * @property cachedTint\n     * @private\n     * @type Number\n     * @default -1\n     */\n    this.cachedTint = -1;\n\n    /**\n     * A canvas that contains the tinted version of the Sprite (in Canvas mode, WebGL doesn't populate this)\n     *\n     * @property tintedTexture\n     * @type Canvas\n     * @default null\n     */\n    this.tintedTexture = null;\n\n    /**\n     * The blend mode to be applied to the sprite. Set to PIXI.blendModes.NORMAL to remove any blend mode.\n     *\n     * Warning: You cannot have a blend mode and a filter active on the same Sprite. Doing so will render the sprite invisible.\n     *\n     * @property blendMode\n     * @type Number\n     * @default PIXI.blendModes.NORMAL;\n     */\n    this.blendMode = PIXI.blendModes.NORMAL;\n\n    /**\n     * The shader that will be used to render the texture to the stage. Set to null to remove a current shader.\n     *\n     * @property shader\n     * @type AbstractFilter\n     * @default null\n     */\n    this.shader = null;\n\n    /**\n    * Controls if this Sprite is processed by the core Phaser game loops and Group loops.\n    *\n    * @property exists\n    * @type Boolean\n    * @default true\n    */\n    this.exists = true;\n\n    if (this.texture.baseTexture.hasLoaded)\n    {\n        this.onTextureUpdate();\n    }\n\n    this.renderable = true;\n\n};\n\n// constructor\nPIXI.Sprite.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);\nPIXI.Sprite.prototype.constructor = PIXI.Sprite;\n\n/**\n * The width of the sprite, setting this will actually modify the scale to achieve the value set\n *\n * @property width\n * @type Number\n */\nObject.defineProperty(PIXI.Sprite.prototype, 'width', {\n\n    get: function() {\n        return this.scale.x * this.texture.frame.width;\n    },\n\n    set: function(value) {\n        this.scale.x = value / this.texture.frame.width;\n        this._width = value;\n    }\n\n});\n\n/**\n * The height of the sprite, setting this will actually modify the scale to achieve the value set\n *\n * @property height\n * @type Number\n */\nObject.defineProperty(PIXI.Sprite.prototype, 'height', {\n\n    get: function() {\n        return  this.scale.y * this.texture.frame.height;\n    },\n\n    set: function(value) {\n        this.scale.y = value / this.texture.frame.height;\n        this._height = value;\n    }\n\n});\n\n/**\n * Sets the texture of the sprite. Be warned that this doesn't remove or destroy the previous\n * texture this Sprite was using.\n *\n * @method setTexture\n * @param texture {Texture} The PIXI texture that is displayed by the sprite\n * @param [destroy=false] {boolean} Call Texture.destroy on the current texture before replacing it with the new one?\n */\nPIXI.Sprite.prototype.setTexture = function(texture, destroyBase)\n{\n    if (destroyBase !== undefined)\n    {\n        this.texture.baseTexture.destroy();\n    }\n\n    //  Over-ridden by loadTexture as needed\n    this.texture.baseTexture.skipRender = false;\n    this.texture = texture;\n    this.texture.valid = true;\n    this.cachedTint = -1;\n};\n\n/**\n * When the texture is updated, this event will fire to update the scale and frame\n *\n * @method onTextureUpdate\n * @param event\n * @private\n */\nPIXI.Sprite.prototype.onTextureUpdate = function()\n{\n    // so if _width is 0 then width was not set..\n    if (this._width) this.scale.x = this._width / this.texture.frame.width;\n    if (this._height) this.scale.y = this._height / this.texture.frame.height;\n};\n\n/**\n* Returns the bounds of the Sprite as a rectangle.\n* The bounds calculation takes the worldTransform into account.\n*\n* It is important to note that the transform is not updated when you call this method.\n* So if this Sprite is the child of a Display Object which has had its transform\n* updated since the last render pass, those changes will not yet have been applied\n* to this Sprites worldTransform. If you need to ensure that all parent transforms\n* are factored into this getBounds operation then you should call `updateTransform`\n* on the root most object in this Sprites display list first.\n*\n* @method getBounds\n* @param matrix {Matrix} the transformation matrix of the sprite\n* @return {Rectangle} the framing rectangle\n*/\nPIXI.Sprite.prototype.getBounds = function(matrix)\n{\n    var width = this.texture.frame.width;\n    var height = this.texture.frame.height;\n\n    var w0 = width * (1-this.anchor.x);\n    var w1 = width * -this.anchor.x;\n\n    var h0 = height * (1-this.anchor.y);\n    var h1 = height * -this.anchor.y;\n\n    var worldTransform = matrix || this.worldTransform;\n\n    var a = worldTransform.a;\n    var b = worldTransform.b;\n    var c = worldTransform.c;\n    var d = worldTransform.d;\n    var tx = worldTransform.tx;\n    var ty = worldTransform.ty;\n\n    var maxX = -Infinity;\n    var maxY = -Infinity;\n\n    var minX = Infinity;\n    var minY = Infinity;\n\n    if (b === 0 && c === 0)\n    {\n        // scale may be negative!\n        if (a < 0)\n        {\n            a *= -1;\n            var temp = w0;\n            w0 = -w1;\n            w1 = -temp; \n        }\n\n        if (d < 0)\n        {\n            d *= -1;\n            var temp = h0;\n            h0 = -h1;\n            h1 = -temp; \n        }\n\n        // this means there is no rotation going on right? RIGHT?\n        // if thats the case then we can avoid checking the bound values! yay         \n        minX = a * w1 + tx;\n        maxX = a * w0 + tx;\n        minY = d * h1 + ty;\n        maxY = d * h0 + ty;\n    }\n    else\n    {\n        var x1 = a * w1 + c * h1 + tx;\n        var y1 = d * h1 + b * w1 + ty;\n\n        var x2 = a * w0 + c * h1 + tx;\n        var y2 = d * h1 + b * w0 + ty;\n\n        var x3 = a * w0 + c * h0 + tx;\n        var y3 = d * h0 + b * w0 + ty;\n\n        var x4 =  a * w1 + c * h0 + tx;\n        var y4 =  d * h0 + b * w1 + ty;\n\n        minX = x1 < minX ? x1 : minX;\n        minX = x2 < minX ? x2 : minX;\n        minX = x3 < minX ? x3 : minX;\n        minX = x4 < minX ? x4 : minX;\n\n        minY = y1 < minY ? y1 : minY;\n        minY = y2 < minY ? y2 : minY;\n        minY = y3 < minY ? y3 : minY;\n        minY = y4 < minY ? y4 : minY;\n\n        maxX = x1 > maxX ? x1 : maxX;\n        maxX = x2 > maxX ? x2 : maxX;\n        maxX = x3 > maxX ? x3 : maxX;\n        maxX = x4 > maxX ? x4 : maxX;\n\n        maxY = y1 > maxY ? y1 : maxY;\n        maxY = y2 > maxY ? y2 : maxY;\n        maxY = y3 > maxY ? y3 : maxY;\n        maxY = y4 > maxY ? y4 : maxY;\n    }\n\n    var bounds = this._bounds;\n\n    bounds.x = minX;\n    bounds.width = maxX - minX;\n\n    bounds.y = minY;\n    bounds.height = maxY - minY;\n\n    // store a reference so that if this function gets called again in the render cycle we do not have to recalculate\n    this._currentBounds = bounds;\n\n    return bounds;\n};\n\n/**\n* Renders the object using the WebGL renderer\n*\n* @method _renderWebGL\n* @param renderSession {RenderSession}\n* @param {Matrix} [matrix] - Optional matrix. If provided the Display Object will be rendered using this matrix, otherwise it will use its worldTransform.\n* @private\n*/\nPIXI.Sprite.prototype._renderWebGL = function(renderSession, matrix)\n{\n    // if the sprite is not visible or the alpha is 0 then no need to render this element\n    if (!this.visible || this.alpha <= 0 || !this.renderable) return;\n\n    //  They provided an alternative rendering matrix, so use it\n    var wt = this.worldTransform;\n\n    if (matrix)\n    {\n        wt = matrix;\n    }\n\n    //  A quick check to see if this element has a mask or a filter.\n    if (this._mask || this._filters)\n    {\n        var spriteBatch = renderSession.spriteBatch;\n\n        // push filter first as we need to ensure the stencil buffer is correct for any masking\n        if (this._filters)\n        {\n            spriteBatch.flush();\n            renderSession.filterManager.pushFilter(this._filterBlock);\n        }\n\n        if (this._mask)\n        {\n            spriteBatch.stop();\n            renderSession.maskManager.pushMask(this.mask, renderSession);\n            spriteBatch.start();\n        }\n\n        // add this sprite to the batch\n        spriteBatch.render(this);\n\n        // now loop through the children and make sure they get rendered\n        for (var i = 0; i < this.children.length; i++)\n        {\n            this.children[i]._renderWebGL(renderSession);\n        }\n\n        // time to stop the sprite batch as either a mask element or a filter draw will happen next\n        spriteBatch.stop();\n\n        if (this._mask) renderSession.maskManager.popMask(this._mask, renderSession);\n        if (this._filters) renderSession.filterManager.popFilter();\n\n        spriteBatch.start();\n    }\n    else\n    {\n        renderSession.spriteBatch.render(this);\n\n        //  Render children!\n        for (var i = 0; i < this.children.length; i++)\n        {\n            this.children[i]._renderWebGL(renderSession, wt);\n        }\n\n    }\n};\n\n/**\n* Renders the object using the Canvas renderer\n*\n* @method _renderCanvas\n* @param renderSession {RenderSession}\n* @param {Matrix} [matrix] - Optional matrix. If provided the Display Object will be rendered using this matrix, otherwise it will use its worldTransform.\n* @private\n*/\nPIXI.Sprite.prototype._renderCanvas = function(renderSession, matrix)\n{\n    // If the sprite is not visible or the alpha is 0 then no need to render this element\n    if (!this.visible || this.alpha === 0 || !this.renderable || this.texture.crop.width <= 0 || this.texture.crop.height <= 0)\n    {\n        return;\n    }\n\n    var wt = this.worldTransform;\n\n    //  If they provided an alternative rendering matrix then use it\n    if (matrix)\n    {\n        wt = matrix;\n    }\n\n    if (this.blendMode !== renderSession.currentBlendMode)\n    {\n        renderSession.currentBlendMode = this.blendMode;\n        renderSession.context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];\n    }\n\n    if (this._mask)\n    {\n        renderSession.maskManager.pushMask(this._mask, renderSession);\n    }\n\n    //  Ignore null sources\n    if (this.texture.valid)\n    {\n        var resolution = this.texture.baseTexture.resolution / renderSession.resolution;\n\n        renderSession.context.globalAlpha = this.worldAlpha;\n\n        //  If smoothingEnabled is supported and we need to change the smoothing property for this texture\n        if (renderSession.smoothProperty && renderSession.scaleMode !== this.texture.baseTexture.scaleMode)\n        {\n            renderSession.scaleMode = this.texture.baseTexture.scaleMode;\n            renderSession.context[renderSession.smoothProperty] = (renderSession.scaleMode === PIXI.scaleModes.LINEAR);\n        }\n\n        //  If the texture is trimmed we offset by the trim x/y, otherwise we use the frame dimensions\n        var dx = (this.texture.trim) ? this.texture.trim.x - this.anchor.x * this.texture.trim.width : this.anchor.x * -this.texture.frame.width;\n        var dy = (this.texture.trim) ? this.texture.trim.y - this.anchor.y * this.texture.trim.height : this.anchor.y * -this.texture.frame.height;\n\n        var tx = (wt.tx * renderSession.resolution) + renderSession.shakeX;\n        var ty = (wt.ty * renderSession.resolution) + renderSession.shakeY;\n\n        //  Allow for pixel rounding\n        if (renderSession.roundPixels)\n        {\n            renderSession.context.setTransform(wt.a, wt.b, wt.c, wt.d, tx | 0, ty | 0);\n            dx |= 0;\n            dy |= 0;\n        }\n        else\n        {\n            renderSession.context.setTransform(wt.a, wt.b, wt.c, wt.d, tx, ty);\n        }\n\n        var cw = this.texture.crop.width;\n        var ch = this.texture.crop.height;\n\n        dx /= resolution;\n        dy /= resolution;\n\n        if (this.tint !== 0xFFFFFF)\n        {\n            if (this.texture.requiresReTint || this.cachedTint !== this.tint)\n            {\n                this.tintedTexture = PIXI.CanvasTinter.getTintedTexture(this, this.tint);\n\n                this.cachedTint = this.tint;\n                this.texture.requiresReTint = false;\n            }\n\n            renderSession.context.drawImage(this.tintedTexture, 0, 0, cw, ch, dx, dy, cw / resolution, ch / resolution);\n        }\n        else\n        {\n            var cx = this.texture.crop.x;\n            var cy = this.texture.crop.y;\n            renderSession.context.drawImage(this.texture.baseTexture.source, cx, cy, cw, ch, dx, dy, cw / resolution, ch / resolution);\n        }\n    }\n\n    for (var i = 0; i < this.children.length; i++)\n    {\n        this.children[i]._renderCanvas(renderSession);\n    }\n\n    if (this._mask)\n    {\n        renderSession.maskManager.popMask(renderSession);\n    }\n\n};\n\n// some helper functions..\n\n/**\n *\n * Helper function that creates a sprite that will contain a texture from the TextureCache based on the frameId\n * The frame ids are created when a Texture packer file has been loaded\n *\n * @method fromFrame\n * @static\n * @param frameId {String} The frame Id of the texture in the cache\n * @return {Sprite} A new Sprite using a texture from the texture cache matching the frameId\n */\nPIXI.Sprite.fromFrame = function(frameId)\n{\n    var texture = PIXI.TextureCache[frameId];\n\n    if (!texture) throw new Error('The frameId \"' + frameId + '\" does not exist in the texture cache' + this);\n\n    return new PIXI.Sprite(texture);\n};\n\n/**\n *\n * Helper function that creates a sprite that will contain a texture based on an image url\n * If the image is not in the texture cache it will be loaded\n *\n * @method fromImage\n * @static\n * @param imageId {String} The image url of the texture\n * @return {Sprite} A new Sprite using a texture from the texture cache matching the image id\n */\nPIXI.Sprite.fromImage = function(imageId, crossorigin, scaleMode)\n{\n    var texture = PIXI.Texture.fromImage(imageId, crossorigin, scaleMode);\n\n    return new PIXI.Sprite(texture);\n};\n\n/**\n * @author Mat Groves http://matgroves.com/\n */\n\n/**\n * The SpriteBatch class is a really fast version of the DisplayObjectContainer \n * built solely for speed, so use when you need a lot of sprites or particles.\n * And it's extremely easy to use : \n\n    var container = new PIXI.SpriteBatch();\n \n    stage.addChild(container);\n \n    for(var i  = 0; i < 100; i++)\n    {\n        var sprite = new PIXI.Sprite.fromImage(\"myImage.png\");\n        container.addChild(sprite);\n    }\n * And here you have a hundred sprites that will be renderer at the speed of light\n *\n * @class SpriteBatch\n * @constructor\n * @param texture {Texture}\n */\nPIXI.SpriteBatch = function(texture)\n{\n    PIXI.DisplayObjectContainer.call( this);\n\n    this.textureThing = texture;\n\n    this.ready = false;\n};\n\nPIXI.SpriteBatch.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);\nPIXI.SpriteBatch.prototype.constructor = PIXI.SpriteBatch;\n\n/*\n * Initialises the spriteBatch\n *\n * @method initWebGL\n * @param gl {WebGLContext} the current WebGL drawing context\n */\nPIXI.SpriteBatch.prototype.initWebGL = function(gl)\n{\n    // TODO only one needed for the whole engine really?\n    this.fastSpriteBatch = new PIXI.WebGLFastSpriteBatch(gl);\n\n    this.ready = true;\n};\n\n/*\n * Updates the object transform for rendering\n *\n * @method updateTransform\n * @private\n */\nPIXI.SpriteBatch.prototype.updateTransform = function()\n{\n    // TODO don't need to!\n    this.displayObjectUpdateTransform();\n    //  PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );\n};\n\n/**\n* Renders the object using the WebGL renderer\n*\n* @method _renderWebGL\n* @param renderSession {RenderSession} \n* @private\n*/\nPIXI.SpriteBatch.prototype._renderWebGL = function(renderSession)\n{\n    if (!this.visible || this.alpha <= 0 || !this.children.length) return;\n\n    if (!this.ready)\n    {\n        this.initWebGL(renderSession.gl);\n    }\n    \n    if (this.fastSpriteBatch.gl !== renderSession.gl)\n    {\n        this.fastSpriteBatch.setContext(renderSession.gl);\n    }\n\n    renderSession.spriteBatch.stop();\n    \n    renderSession.shaderManager.setShader(renderSession.shaderManager.fastShader);\n    \n    this.fastSpriteBatch.begin(this, renderSession);\n    this.fastSpriteBatch.render(this);\n\n    renderSession.spriteBatch.start();\n \n};\n\n/**\n* Renders the object using the Canvas renderer\n*\n* @method _renderCanvas\n* @param renderSession {RenderSession} \n* @private\n*/\nPIXI.SpriteBatch.prototype._renderCanvas = function(renderSession)\n{\n    if (!this.visible || this.alpha <= 0 || !this.children.length) return;\n    \n    var context = renderSession.context;\n\n    context.globalAlpha = this.worldAlpha;\n\n    this.displayObjectUpdateTransform();\n\n    var transform = this.worldTransform;\n       \n    var isRotated = true;\n\n    for (var i = 0; i < this.children.length; i++)\n    {\n        var child = this.children[i];\n\n        if (!child.visible) continue;\n\n        var texture = child.texture;\n        var frame = texture.frame;\n\n        context.globalAlpha = this.worldAlpha * child.alpha;\n\n        if (child.rotation % (Math.PI * 2) === 0)\n        {\n            if (isRotated)\n            {\n                context.setTransform(transform.a, transform.b, transform.c, transform.d, transform.tx, transform.ty);\n                isRotated = false;\n            }\n\n            // this is the fastest  way to optimise! - if rotation is 0 then we can avoid any kind of setTransform call\n            context.drawImage(texture.baseTexture.source,\n                                 frame.x,\n                                 frame.y,\n                                 frame.width,\n                                 frame.height,\n                                 ((child.anchor.x) * (-frame.width * child.scale.x) + child.position.x + 0.5 + renderSession.shakeX) | 0,\n                                 ((child.anchor.y) * (-frame.height * child.scale.y) + child.position.y + 0.5 + renderSession.shakeY) | 0,\n                                 frame.width * child.scale.x,\n                                 frame.height * child.scale.y);\n        }\n        else\n        {\n            if (!isRotated) isRotated = true;\n    \n            child.displayObjectUpdateTransform();\n           \n            var childTransform = child.worldTransform;\n            var tx = (childTransform.tx * renderSession.resolution) + renderSession.shakeX;\n            var ty = (childTransform.ty * renderSession.resolution) + renderSession.shakeY;\n\n            // allow for trimming\n           \n            if (renderSession.roundPixels)\n            {\n                context.setTransform(childTransform.a, childTransform.b, childTransform.c, childTransform.d, tx | 0, ty | 0);\n            }\n            else\n            {\n                context.setTransform(childTransform.a, childTransform.b, childTransform.c, childTransform.d, tx, ty);\n            }\n\n            context.drawImage(texture.baseTexture.source,\n                                 frame.x,\n                                 frame.y,\n                                 frame.width,\n                                 frame.height,\n                                 ((child.anchor.x) * (-frame.width) + 0.5) | 0,\n                                 ((child.anchor.y) * (-frame.height) + 0.5) | 0,\n                                 frame.width,\n                                 frame.height);\n        }\n    }\n\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n \n/**\n * Converts a hex color number to an [R, G, B] array\n *\n * @method hex2rgb\n * @param hex {Number}\n */\nPIXI.hex2rgb = function(hex) {\n    return [(hex >> 16 & 0xFF) / 255, ( hex >> 8 & 0xFF) / 255, (hex & 0xFF)/ 255];\n};\n\n/**\n * Converts a color as an [R, G, B] array to a hex number\n *\n * @method rgb2hex\n * @param rgb {Array}\n */\nPIXI.rgb2hex = function(rgb) {\n    return ((rgb[0]*255 << 16) + (rgb[1]*255 << 8) + rgb[2]*255);\n};\n\n/**\n * Checks whether the Canvas BlendModes are supported by the current browser for drawImage\n *\n * @method canUseNewCanvasBlendModes\n * @return {Boolean} whether they are supported\n */\nPIXI.canUseNewCanvasBlendModes = function()\n{\n    if (document === undefined) return false;\n\n    var pngHead = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAABAQMAAADD8p2OAAAAA1BMVEX/';\n    var pngEnd = 'AAAACklEQVQI12NgAAAAAgAB4iG8MwAAAABJRU5ErkJggg==';\n\n    var magenta = new Image();\n    magenta.src = pngHead + 'AP804Oa6' + pngEnd;\n\n    var yellow = new Image();\n    yellow.src = pngHead + '/wCKxvRF' + pngEnd;\n\n    var canvas = PIXI.CanvasPool.create(this, 6, 1);\n    var context = canvas.getContext('2d');\n    context.globalCompositeOperation = 'multiply';\n    context.drawImage(magenta, 0, 0);\n    context.drawImage(yellow, 2, 0);\n\n    if (!context.getImageData(2,0,1,1))\n    {\n        return false;\n    }\n\n    var data = context.getImageData(2,0,1,1).data;\n\n    PIXI.CanvasPool.remove(this);\n\n    return (data[0] === 255 && data[1] === 0 && data[2] === 0);\n\n};\n\n/**\n * Given a number, this function returns the closest number that is a power of two\n * this function is taken from Starling Framework as its pretty neat ;)\n *\n * @method getNextPowerOfTwo\n * @param number {Number}\n * @return {Number} the closest number that is a power of two\n */\nPIXI.getNextPowerOfTwo = function(number)\n{\n    if (number > 0 && (number & (number - 1)) === 0) // see: http://goo.gl/D9kPj\n        return number;\n    else\n    {\n        var result = 1;\n        while (result < number) result <<= 1;\n        return result;\n    }\n};\n\n/**\n * checks if the given width and height make a power of two texture\n * @method isPowerOfTwo\n * @param width {Number}\n * @param height {Number}\n * @return {Boolean} \n */\nPIXI.isPowerOfTwo = function(width, height)\n{\n    return (width > 0 && (width & (width - 1)) === 0 && height > 0 && (height & (height - 1)) === 0);\n\n};\n\n/**\n* @author       Richard Davey <rich@photonstorm.com>\n* @copyright    2016 Photon Storm Ltd.\n* @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}\n*/\n\n/**\n* The CanvasPool is a global static object that allows Pixi and Phaser to pool canvas DOM elements.\n*\n* @class CanvasPool\n* @static\n*/\nPIXI.CanvasPool = {\n\n    /**\n    * Creates a new Canvas DOM element, or pulls one from the pool if free.\n    * \n    * @method create\n    * @static\n    * @param parent {any} The parent of the canvas element.\n    * @param width {number} The width of the canvas element.\n    * @param height {number} The height of the canvas element.\n    * @return {HTMLCanvasElement} The canvas element.\n    */\n    create: function (parent, width, height) {\n\n        var idx = PIXI.CanvasPool.getFirst();\n        var canvas;\n\n        if (idx === -1)\n        {\n            var container = {\n                parent: parent,\n                canvas: document.createElement('canvas')\n            }\n\n            PIXI.CanvasPool.pool.push(container);\n\n            canvas = container.canvas;\n        }\n        else\n        {\n            PIXI.CanvasPool.pool[idx].parent = parent;\n\n            canvas = PIXI.CanvasPool.pool[idx].canvas;\n        }\n\n        if (width !== undefined)\n        {\n            canvas.width = width;\n            canvas.height = height;\n        }\n\n        return canvas;\n\n    },\n\n    /**\n    * Gets the first free canvas index from the pool.\n    * \n    * @method getFirst\n    * @static\n    * @return {number}\n    */\n    getFirst: function () {\n\n        var pool = PIXI.CanvasPool.pool;\n\n        for (var i = 0; i < pool.length; i++)\n        {\n            if (pool[i].parent === null)\n            {\n                return i;\n            }\n        }\n\n        return -1;\n\n    },\n\n    /**\n    * Removes the parent from a canvas element from the pool, freeing it up for re-use.\n    * \n    * @method remove\n    * @param parent {any} The parent of the canvas element.\n    * @static\n    */\n    remove: function (parent) {\n\n        var pool = PIXI.CanvasPool.pool;\n\n        for (var i = 0; i < pool.length; i++)\n        {\n            if (pool[i].parent === parent)\n            {\n                pool[i].parent = null;\n            }\n        }\n\n    },\n\n    /**\n    * Removes the parent from a canvas element from the pool, freeing it up for re-use.\n    * \n    * @method removeByCanvas\n    * @param canvas {HTMLCanvasElement} The canvas element to remove\n    * @static\n    */\n    removeByCanvas: function (canvas) {\n\n        var pool = PIXI.CanvasPool.pool;\n\n        for (var i = 0; i < pool.length; i++)\n        {\n            if (pool[i].canvas === canvas)\n            {\n                pool[i].parent = null;\n            }\n        }\n\n    },\n\n    /**\n    * Gets the total number of used canvas elements in the pool.\n    * \n    * @method getTotal\n    * @static\n    * @return {number} The number of in-use (parented) canvas elements in the pool.\n    */\n    getTotal: function () {\n\n        var pool = PIXI.CanvasPool.pool;\n        var c = 0;\n\n        for (var i = 0; i < pool.length; i++)\n        {\n            if (pool[i].parent !== null)\n            {\n                c++;\n            }\n        }\n\n        return c;\n\n    },\n\n    /**\n    * Gets the total number of free canvas elements in the pool.\n    * \n    * @method getFree\n    * @static\n    * @return {number} The number of free (un-parented) canvas elements in the pool.\n    */\n    getFree: function () {\n\n        var pool = PIXI.CanvasPool.pool;\n        var c = 0;\n\n        for (var i = 0; i < pool.length; i++)\n        {\n            if (pool[i].parent === null)\n            {\n                c++;\n            }\n        }\n\n        return c;\n\n    }\n\n};\n\n/**\n * The pool into which the canvas dom elements are placed.\n *\n * @property pool\n * @type Array\n * @static\n */\nPIXI.CanvasPool.pool = [];\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n* @method initDefaultShaders\n* @static\n* @private\n*/\nPIXI.initDefaultShaders = function()\n{\n};\n\n/**\n* @method CompileVertexShader\n* @static\n* @param gl {WebGLContext} the current WebGL drawing context\n* @param shaderSrc {Array}\n* @return {Any}\n*/\nPIXI.CompileVertexShader = function(gl, shaderSrc)\n{\n    return PIXI._CompileShader(gl, shaderSrc, gl.VERTEX_SHADER);\n};\n\n/**\n* @method CompileFragmentShader\n* @static\n* @param gl {WebGLContext} the current WebGL drawing context\n* @param shaderSrc {Array}\n* @return {Any}\n*/\nPIXI.CompileFragmentShader = function(gl, shaderSrc)\n{\n    return PIXI._CompileShader(gl, shaderSrc, gl.FRAGMENT_SHADER);\n};\n\n/**\n* @method _CompileShader\n* @static\n* @private\n* @param gl {WebGLContext} the current WebGL drawing context\n* @param shaderSrc {Array}\n* @param shaderType {Number}\n* @return {Any}\n*/\nPIXI._CompileShader = function(gl, shaderSrc, shaderType)\n{\n    var src = shaderSrc;\n\n    if (Array.isArray(shaderSrc))\n    {\n        src = shaderSrc.join(\"\\n\");\n    }\n\n    var shader = gl.createShader(shaderType);\n    gl.shaderSource(shader, src);\n    gl.compileShader(shader);\n\n    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS))\n    {\n        window.console.log(gl.getShaderInfoLog(shader));\n        return null;\n    }\n\n    return shader;\n};\n\n/**\n* @method compileProgram\n* @static\n* @param gl {WebGLContext} the current WebGL drawing context\n* @param vertexSrc {Array}\n* @param fragmentSrc {Array}\n* @return {Any}\n*/\nPIXI.compileProgram = function(gl, vertexSrc, fragmentSrc)\n{\n    var fragmentShader = PIXI.CompileFragmentShader(gl, fragmentSrc);\n    var vertexShader = PIXI.CompileVertexShader(gl, vertexSrc);\n\n    var shaderProgram = gl.createProgram();\n\n    gl.attachShader(shaderProgram, vertexShader);\n    gl.attachShader(shaderProgram, fragmentShader);\n    gl.linkProgram(shaderProgram);\n\n    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS))\n    {\n        window.console.log(gl.getProgramInfoLog(shaderProgram));\n        window.console.log(\"Could not initialise shaders\");\n    }\n\n    return shaderProgram;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n * @author Richard Davey http://www.photonstorm.com @photonstorm\n */\n\n/**\n* @class PixiShader\n* @constructor\n* @param gl {WebGLContext} the current WebGL drawing context\n*/\nPIXI.PixiShader = function(gl)\n{\n    /**\n     * @property _UID\n     * @type Number\n     * @private\n     */\n    this._UID = PIXI._UID++;\n\n    /**\n     * @property gl\n     * @type WebGLContext\n     */\n    this.gl = gl;\n\n    /**\n     * The WebGL program.\n     * @property program\n     * @type Any\n     */\n    this.program = null;\n\n    /**\n     * The fragment shader.\n     * @property fragmentSrc\n     * @type Array\n     */\n    this.fragmentSrc = [\n        'precision lowp float;',\n        'varying vec2 vTextureCoord;',\n        'varying vec4 vColor;',\n        'uniform sampler2D uSampler;',\n        'void main(void) {',\n        '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',\n        '}'\n    ];\n\n    /**\n     * A local texture counter for multi-texture shaders.\n     * @property textureCount\n     * @type Number\n     */\n    this.textureCount = 0;\n\n    /**\n     * A local flag\n     * @property firstRun\n     * @type Boolean\n     * @private\n     */\n    this.firstRun = true;\n\n    /**\n     * A dirty flag\n     * @property dirty\n     * @type Boolean\n     */\n    this.dirty = true;\n\n    /**\n     * Uniform attributes cache.\n     * @property attributes\n     * @type Array\n     * @private\n     */\n    this.attributes = [];\n\n    this.init();\n};\n\nPIXI.PixiShader.prototype.constructor = PIXI.PixiShader;\n\n/**\n* Initialises the shader.\n*\n* @method init\n*/\nPIXI.PixiShader.prototype.init = function()\n{\n    var gl = this.gl;\n\n    var program = PIXI.compileProgram(gl, this.vertexSrc || PIXI.PixiShader.defaultVertexSrc, this.fragmentSrc);\n\n    gl.useProgram(program);\n\n    // get and store the uniforms for the shader\n    this.uSampler = gl.getUniformLocation(program, 'uSampler');\n    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');\n    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');\n    this.dimensions = gl.getUniformLocation(program, 'dimensions');\n\n    // get and store the attributes\n    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');\n    this.aTextureCoord = gl.getAttribLocation(program, 'aTextureCoord');\n    this.colorAttribute = gl.getAttribLocation(program, 'aColor');\n\n    // Begin worst hack eva //\n\n    // WHY??? ONLY on my chrome pixel the line above returns -1 when using filters?\n    // maybe its something to do with the current state of the gl context.\n    // I'm convinced this is a bug in the chrome browser as there is NO reason why this should be returning -1 especially as it only manifests on my chrome pixel\n    // If theres any webGL people that know why could happen please help :)\n    if(this.colorAttribute === -1)\n    {\n        this.colorAttribute = 2;\n    }\n\n    this.attributes = [this.aVertexPosition, this.aTextureCoord, this.colorAttribute];\n\n    // End worst hack eva //\n\n    // add those custom shaders!\n    for (var key in this.uniforms)\n    {\n        // get the uniform locations..\n        this.uniforms[key].uniformLocation = gl.getUniformLocation(program, key);\n    }\n\n    this.initUniforms();\n\n    this.program = program;\n};\n\n/**\n* Initialises the shader uniform values.\n*\n* Uniforms are specified in the GLSL_ES Specification: http://www.khronos.org/registry/webgl/specs/latest/1.0/\n* http://www.khronos.org/registry/gles/specs/2.0/GLSL_ES_Specification_1.0.17.pdf\n*\n* @method initUniforms\n*/\nPIXI.PixiShader.prototype.initUniforms = function()\n{\n    this.textureCount = 1;\n    var gl = this.gl;\n    var uniform;\n\n    for (var key in this.uniforms)\n    {\n        uniform = this.uniforms[key];\n\n        var type = uniform.type;\n\n        if (type === 'sampler2D')\n        {\n            uniform._init = false;\n\n            if (uniform.value !== null)\n            {\n                this.initSampler2D(uniform);\n            }\n        }\n        else if (type === 'mat2' || type === 'mat3' || type === 'mat4')\n        {\n            //  These require special handling\n            uniform.glMatrix = true;\n            uniform.glValueLength = 1;\n\n            if (type === 'mat2')\n            {\n                uniform.glFunc = gl.uniformMatrix2fv;\n            }\n            else if (type === 'mat3')\n            {\n                uniform.glFunc = gl.uniformMatrix3fv;\n            }\n            else if (type === 'mat4')\n            {\n                uniform.glFunc = gl.uniformMatrix4fv;\n            }\n        }\n        else\n        {\n            //  GL function reference\n            uniform.glFunc = gl['uniform' + type];\n\n            if (type === '2f' || type === '2i')\n            {\n                uniform.glValueLength = 2;\n            }\n            else if (type === '3f' || type === '3i')\n            {\n                uniform.glValueLength = 3;\n            }\n            else if (type === '4f' || type === '4i')\n            {\n                uniform.glValueLength = 4;\n            }\n            else\n            {\n                uniform.glValueLength = 1;\n            }\n        }\n    }\n\n};\n\n/**\n* Initialises a Sampler2D uniform (which may only be available later on after initUniforms once the texture has loaded)\n*\n* @method initSampler2D\n*/\nPIXI.PixiShader.prototype.initSampler2D = function(uniform)\n{\n    if (!uniform.value || !uniform.value.baseTexture || !uniform.value.baseTexture.hasLoaded)\n    {\n        return;\n    }\n\n    var gl = this.gl;\n\n    gl.activeTexture(gl['TEXTURE' + this.textureCount]);\n    gl.bindTexture(gl.TEXTURE_2D, uniform.value.baseTexture._glTextures[gl.id]);\n\n    //  Extended texture data\n    if (uniform.textureData)\n    {\n        var data = uniform.textureData;\n\n        // GLTexture = mag linear, min linear_mipmap_linear, wrap repeat + gl.generateMipmap(gl.TEXTURE_2D);\n        // GLTextureLinear = mag/min linear, wrap clamp\n        // GLTextureNearestRepeat = mag/min NEAREST, wrap repeat\n        // GLTextureNearest = mag/min nearest, wrap clamp\n        // AudioTexture = whatever + luminance + width 512, height 2, border 0\n        // KeyTexture = whatever + luminance + width 256, height 2, border 0\n\n        //  magFilter can be: gl.LINEAR, gl.LINEAR_MIPMAP_LINEAR or gl.NEAREST\n        //  wrapS/T can be: gl.CLAMP_TO_EDGE or gl.REPEAT\n\n        var magFilter = (data.magFilter) ? data.magFilter : gl.LINEAR;\n        var minFilter = (data.minFilter) ? data.minFilter : gl.LINEAR;\n        var wrapS = (data.wrapS) ? data.wrapS : gl.CLAMP_TO_EDGE;\n        var wrapT = (data.wrapT) ? data.wrapT : gl.CLAMP_TO_EDGE;\n        var format = (data.luminance) ? gl.LUMINANCE : gl.RGBA;\n\n        if (data.repeat)\n        {\n            wrapS = gl.REPEAT;\n            wrapT = gl.REPEAT;\n        }\n\n        gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, !!data.flipY);\n\n        if (data.width)\n        {\n            var width = (data.width) ? data.width : 512;\n            var height = (data.height) ? data.height : 2;\n            var border = (data.border) ? data.border : 0;\n\n            // void texImage2D(GLenum target, GLint level, GLenum internalformat, GLsizei width, GLsizei height, GLint border, GLenum format, GLenum type, ArrayBufferView? pixels);\n            gl.texImage2D(gl.TEXTURE_2D, 0, format, width, height, border, format, gl.UNSIGNED_BYTE, null);\n        }\n        else\n        {\n            //  void texImage2D(GLenum target, GLint level, GLenum internalformat, GLenum format, GLenum type, ImageData? pixels);\n            gl.texImage2D(gl.TEXTURE_2D, 0, format, gl.RGBA, gl.UNSIGNED_BYTE, uniform.value.baseTexture.source);\n        }\n\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, magFilter);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, minFilter);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, wrapS);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, wrapT);\n    }\n\n    gl.uniform1i(uniform.uniformLocation, this.textureCount);\n\n    uniform._init = true;\n\n    this.textureCount++;\n\n};\n\n/**\n* Updates the shader uniform values.\n*\n* @method syncUniforms\n*/\nPIXI.PixiShader.prototype.syncUniforms = function()\n{\n    this.textureCount = 1;\n    var uniform;\n    var gl = this.gl;\n\n    //  This would probably be faster in an array and it would guarantee key order\n    for (var key in this.uniforms)\n    {\n        uniform = this.uniforms[key];\n\n        if (uniform.glValueLength === 1)\n        {\n            if (uniform.glMatrix === true)\n            {\n                uniform.glFunc.call(gl, uniform.uniformLocation, uniform.transpose, uniform.value);\n            }\n            else\n            {\n                uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value);\n            }\n        }\n        else if (uniform.glValueLength === 2)\n        {\n            uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value.x, uniform.value.y);\n        }\n        else if (uniform.glValueLength === 3)\n        {\n            uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value.x, uniform.value.y, uniform.value.z);\n        }\n        else if (uniform.glValueLength === 4)\n        {\n            uniform.glFunc.call(gl, uniform.uniformLocation, uniform.value.x, uniform.value.y, uniform.value.z, uniform.value.w);\n        }\n        else if (uniform.type === 'sampler2D')\n        {\n            if (uniform._init)\n            {\n                gl.activeTexture(gl['TEXTURE' + this.textureCount]);\n\n                if(uniform.value.baseTexture._dirty[gl.id])\n                {\n                    PIXI.instances[gl.id].updateTexture(uniform.value.baseTexture);\n                }\n                else\n                {\n                    // bind the current texture\n                    gl.bindTexture(gl.TEXTURE_2D, uniform.value.baseTexture._glTextures[gl.id]);\n                }\n\n                //  gl.bindTexture(gl.TEXTURE_2D, uniform.value.baseTexture._glTextures[gl.id] || PIXI.createWebGLTexture( uniform.value.baseTexture, gl));\n                gl.uniform1i(uniform.uniformLocation, this.textureCount);\n                this.textureCount++;\n            }\n            else\n            {\n                this.initSampler2D(uniform);\n            }\n        }\n    }\n\n};\n\n/**\n* Destroys the shader.\n*\n* @method destroy\n*/\nPIXI.PixiShader.prototype.destroy = function()\n{\n    this.gl.deleteProgram( this.program );\n    this.uniforms = null;\n    this.gl = null;\n\n    this.attributes = null;\n};\n\n/**\n* The Default Vertex shader source.\n*\n* @property defaultVertexSrc\n* @type String\n*/\nPIXI.PixiShader.defaultVertexSrc = [\n    'attribute vec2 aVertexPosition;',\n    'attribute vec2 aTextureCoord;',\n    'attribute vec4 aColor;',\n\n    'uniform vec2 projectionVector;',\n    'uniform vec2 offsetVector;',\n\n    'varying vec2 vTextureCoord;',\n    'varying vec4 vColor;',\n\n    'const vec2 center = vec2(-1.0, 1.0);',\n\n    'void main(void) {',\n    '   gl_Position = vec4( ((aVertexPosition + offsetVector) / projectionVector) + center , 0.0, 1.0);',\n    '   vTextureCoord = aTextureCoord;',\n    '   vColor = vec4(aColor.rgb * aColor.a, aColor.a);',\n    '}'\n];\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n* @class PixiFastShader\n* @constructor\n* @param gl {WebGLContext} the current WebGL drawing context\n*/\nPIXI.PixiFastShader = function(gl)\n{\n    /**\n     * @property _UID\n     * @type Number\n     * @private\n     */\n    this._UID = PIXI._UID++;\n    \n    /**\n     * @property gl\n     * @type WebGLContext\n     */\n    this.gl = gl;\n\n    /**\n     * The WebGL program.\n     * @property program\n     * @type Any\n     */\n    this.program = null;\n\n    /**\n     * The fragment shader.\n     * @property fragmentSrc\n     * @type Array\n     */\n    this.fragmentSrc = [\n        'precision lowp float;',\n        'varying vec2 vTextureCoord;',\n        'varying float vColor;',\n        'uniform sampler2D uSampler;',\n        'void main(void) {',\n        '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',\n        '}'\n    ];\n\n    /**\n     * The vertex shader.\n     * @property vertexSrc\n     * @type Array\n     */\n    this.vertexSrc = [\n        'attribute vec2 aVertexPosition;',\n        'attribute vec2 aPositionCoord;',\n        'attribute vec2 aScale;',\n        'attribute float aRotation;',\n        'attribute vec2 aTextureCoord;',\n        'attribute float aColor;',\n\n        'uniform vec2 projectionVector;',\n        'uniform vec2 offsetVector;',\n        'uniform mat3 uMatrix;',\n\n        'varying vec2 vTextureCoord;',\n        'varying float vColor;',\n\n        'const vec2 center = vec2(-1.0, 1.0);',\n\n        'void main(void) {',\n        '   vec2 v;',\n        '   vec2 sv = aVertexPosition * aScale;',\n        '   v.x = (sv.x) * cos(aRotation) - (sv.y) * sin(aRotation);',\n        '   v.y = (sv.x) * sin(aRotation) + (sv.y) * cos(aRotation);',\n        '   v = ( uMatrix * vec3(v + aPositionCoord , 1.0) ).xy ;',\n        '   gl_Position = vec4( ( v / projectionVector) + center , 0.0, 1.0);',\n        '   vTextureCoord = aTextureCoord;',\n      //  '   vec3 color = mod(vec3(aColor.y/65536.0, aColor.y/256.0, aColor.y), 256.0) / 256.0;',\n        '   vColor = aColor;',\n        '}'\n    ];\n\n    /**\n     * A local texture counter for multi-texture shaders.\n     * @property textureCount\n     * @type Number\n     */\n    this.textureCount = 0;\n    \n    this.init();\n};\n\nPIXI.PixiFastShader.prototype.constructor = PIXI.PixiFastShader;\n\n/**\n* Initialises the shader.\n* \n* @method init\n*/\nPIXI.PixiFastShader.prototype.init = function()\n{\n    var gl = this.gl;\n\n    var program = PIXI.compileProgram(gl, this.vertexSrc, this.fragmentSrc);\n    \n    gl.useProgram(program);\n\n    // get and store the uniforms for the shader\n    this.uSampler = gl.getUniformLocation(program, 'uSampler');\n\n    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');\n    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');\n    this.dimensions = gl.getUniformLocation(program, 'dimensions');\n    this.uMatrix = gl.getUniformLocation(program, 'uMatrix');\n\n    // get and store the attributes\n    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');\n    this.aPositionCoord = gl.getAttribLocation(program, 'aPositionCoord');\n\n    this.aScale = gl.getAttribLocation(program, 'aScale');\n    this.aRotation = gl.getAttribLocation(program, 'aRotation');\n\n    this.aTextureCoord = gl.getAttribLocation(program, 'aTextureCoord');\n    this.colorAttribute = gl.getAttribLocation(program, 'aColor');\n   \n    // Begin worst hack eva //\n\n    // WHY??? ONLY on my chrome pixel the line above returns -1 when using filters?\n    // maybe its somthing to do with the current state of the gl context.\n    // Im convinced this is a bug in the chrome browser as there is NO reason why this should be returning -1 especially as it only manifests on my chrome pixel\n    // If theres any webGL people that know why could happen please help :)\n    if(this.colorAttribute === -1)\n    {\n        this.colorAttribute = 2;\n    }\n\n    this.attributes = [this.aVertexPosition, this.aPositionCoord,  this.aScale, this.aRotation, this.aTextureCoord, this.colorAttribute];\n    \n    // End worst hack eva //\n\n    this.program = program;\n};\n\n/**\n* Destroys the shader.\n* \n* @method destroy\n*/\nPIXI.PixiFastShader.prototype.destroy = function()\n{\n    this.gl.deleteProgram( this.program );\n    this.uniforms = null;\n    this.gl = null;\n\n    this.attributes = null;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n* @class StripShader\n* @constructor\n* @param gl {WebGLContext} the current WebGL drawing context\n*/\nPIXI.StripShader = function(gl)\n{\n    /**\n     * @property _UID\n     * @type Number\n     * @private\n     */\n    this._UID = PIXI._UID++;\n    \n    /**\n     * @property gl\n     * @type WebGLContext\n     */\n    this.gl = gl;\n\n    /**\n     * The WebGL program.\n     * @property program\n     * @type Any\n     */\n    this.program = null;\n\n    /**\n     * The fragment shader.\n     * @property fragmentSrc\n     * @type Array\n     */\n    this.fragmentSrc = [\n        'precision mediump float;',\n        'varying vec2 vTextureCoord;',\n     //   'varying float vColor;',\n        'uniform float alpha;',\n        'uniform sampler2D uSampler;',\n\n        'void main(void) {',\n        '   gl_FragColor = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y)) * alpha;',\n      //  '   gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);',//gl_FragColor * alpha;',\n        '}'\n    ];\n\n    /**\n     * The vertex shader.\n     * @property vertexSrc\n     * @type Array\n     */\n    this.vertexSrc  = [\n        'attribute vec2 aVertexPosition;',\n        'attribute vec2 aTextureCoord;',\n        'uniform mat3 translationMatrix;',\n        'uniform vec2 projectionVector;',\n        'uniform vec2 offsetVector;',\n      //  'uniform float alpha;',\n       // 'uniform vec3 tint;',\n        'varying vec2 vTextureCoord;',\n      //  'varying vec4 vColor;',\n\n        'void main(void) {',\n        '   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);',\n        '   v -= offsetVector.xyx;',\n        '   gl_Position = vec4( v.x / projectionVector.x -1.0, v.y / -projectionVector.y + 1.0 , 0.0, 1.0);',\n        '   vTextureCoord = aTextureCoord;',\n       // '   vColor = aColor * vec4(tint * alpha, alpha);',\n        '}'\n    ];\n\n    this.init();\n};\n\nPIXI.StripShader.prototype.constructor = PIXI.StripShader;\n\n/**\n* Initialises the shader.\n* \n* @method init\n*/\nPIXI.StripShader.prototype.init = function()\n{\n    var gl = this.gl;\n\n    var program = PIXI.compileProgram(gl, this.vertexSrc, this.fragmentSrc);\n    gl.useProgram(program);\n\n    // get and store the uniforms for the shader\n    this.uSampler = gl.getUniformLocation(program, 'uSampler');\n    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');\n    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');\n    this.colorAttribute = gl.getAttribLocation(program, 'aColor');\n    //this.dimensions = gl.getUniformLocation(this.program, 'dimensions');\n\n    // get and store the attributes\n    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');\n    this.aTextureCoord = gl.getAttribLocation(program, 'aTextureCoord');\n\n    this.attributes = [this.aVertexPosition, this.aTextureCoord];\n\n    this.translationMatrix = gl.getUniformLocation(program, 'translationMatrix');\n    this.alpha = gl.getUniformLocation(program, 'alpha');\n\n    this.program = program;\n};\n\n/**\n* Destroys the shader.\n* \n* @method destroy\n*/\nPIXI.StripShader.prototype.destroy = function()\n{\n    this.gl.deleteProgram( this.program );\n    this.uniforms = null;\n    this.gl = null;\n\n    this.attribute = null;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n* @class PrimitiveShader\n* @constructor\n* @param gl {WebGLContext} the current WebGL drawing context\n*/\nPIXI.PrimitiveShader = function(gl)\n{\n    /**\n     * @property _UID\n     * @type Number\n     * @private\n     */\n    this._UID = PIXI._UID++;\n \n    /**\n     * @property gl\n     * @type WebGLContext\n     */\n    this.gl = gl;\n\n    /**\n     * The WebGL program.\n     * @property program\n     * @type Any\n     */\n    this.program = null;\n\n    /**\n     * The fragment shader.\n     * @property fragmentSrc\n     * @type Array\n     */\n    this.fragmentSrc = [\n        'precision mediump float;',\n        'varying vec4 vColor;',\n\n        'void main(void) {',\n        '   gl_FragColor = vColor;',\n        '}'\n    ];\n\n    /**\n     * The vertex shader.\n     * @property vertexSrc\n     * @type Array\n     */\n    this.vertexSrc  = [\n        'attribute vec2 aVertexPosition;',\n        'attribute vec4 aColor;',\n        'uniform mat3 translationMatrix;',\n        'uniform vec2 projectionVector;',\n        'uniform vec2 offsetVector;',\n        'uniform float alpha;',\n        'uniform float flipY;',\n        'uniform vec3 tint;',\n        'varying vec4 vColor;',\n\n        'void main(void) {',\n        '   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);',\n        '   v -= offsetVector.xyx;',\n        '   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);',\n        '   vColor = aColor * vec4(tint * alpha, alpha);',\n        '}'\n    ];\n\n    this.init();\n};\n\nPIXI.PrimitiveShader.prototype.constructor = PIXI.PrimitiveShader;\n\n/**\n* Initialises the shader.\n* \n* @method init\n*/\nPIXI.PrimitiveShader.prototype.init = function()\n{\n    var gl = this.gl;\n\n    var program = PIXI.compileProgram(gl, this.vertexSrc, this.fragmentSrc);\n    gl.useProgram(program);\n\n    // get and store the uniforms for the shader\n    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');\n    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');\n    this.tintColor = gl.getUniformLocation(program, 'tint');\n    this.flipY = gl.getUniformLocation(program, 'flipY');\n\n    // get and store the attributes\n    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');\n    this.colorAttribute = gl.getAttribLocation(program, 'aColor');\n\n    this.attributes = [this.aVertexPosition, this.colorAttribute];\n\n    this.translationMatrix = gl.getUniformLocation(program, 'translationMatrix');\n    this.alpha = gl.getUniformLocation(program, 'alpha');\n\n    this.program = program;\n};\n\n/**\n* Destroys the shader.\n* \n* @method destroy\n*/\nPIXI.PrimitiveShader.prototype.destroy = function()\n{\n    this.gl.deleteProgram( this.program );\n    this.uniforms = null;\n    this.gl = null;\n\n    this.attributes = null;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n* @class ComplexPrimitiveShader\n* @constructor\n* @param gl {WebGLContext} the current WebGL drawing context\n*/\nPIXI.ComplexPrimitiveShader = function(gl)\n{\n    /**\n     * @property _UID\n     * @type Number\n     * @private\n     */\n    this._UID = PIXI._UID++;\n\n    /**\n     * @property gl\n     * @type WebGLContext\n     */\n    this.gl = gl;\n\n    /**\n     * The WebGL program.\n     * @property program\n     * @type Any\n     */\n    this.program = null;\n\n    /**\n     * The fragment shader.\n     * @property fragmentSrc\n     * @type Array\n     */\n    this.fragmentSrc = [\n\n        'precision mediump float;',\n\n        'varying vec4 vColor;',\n\n        'void main(void) {',\n        '   gl_FragColor = vColor;',\n        '}'\n    ];\n\n    /**\n     * The vertex shader.\n     * @property vertexSrc\n     * @type Array\n     */\n    this.vertexSrc  = [\n        'attribute vec2 aVertexPosition;',\n        //'attribute vec4 aColor;',\n        'uniform mat3 translationMatrix;',\n        'uniform vec2 projectionVector;',\n        'uniform vec2 offsetVector;',\n        \n        'uniform vec3 tint;',\n        'uniform float alpha;',\n        'uniform vec3 color;',\n        'uniform float flipY;',\n        'varying vec4 vColor;',\n\n        'void main(void) {',\n        '   vec3 v = translationMatrix * vec3(aVertexPosition , 1.0);',\n        '   v -= offsetVector.xyx;',\n        '   gl_Position = vec4( v.x / projectionVector.x -1.0, (v.y / projectionVector.y * -flipY) + flipY , 0.0, 1.0);',\n        '   vColor = vec4(color * alpha * tint, alpha);',//\" * vec4(tint * alpha, alpha);',\n        '}'\n    ];\n\n    this.init();\n};\n\nPIXI.ComplexPrimitiveShader.prototype.constructor = PIXI.ComplexPrimitiveShader;\n\n/**\n* Initialises the shader.\n* \n* @method init\n*/\nPIXI.ComplexPrimitiveShader.prototype.init = function()\n{\n    var gl = this.gl;\n\n    var program = PIXI.compileProgram(gl, this.vertexSrc, this.fragmentSrc);\n    gl.useProgram(program);\n\n    // get and store the uniforms for the shader\n    this.projectionVector = gl.getUniformLocation(program, 'projectionVector');\n    this.offsetVector = gl.getUniformLocation(program, 'offsetVector');\n    this.tintColor = gl.getUniformLocation(program, 'tint');\n    this.color = gl.getUniformLocation(program, 'color');\n    this.flipY = gl.getUniformLocation(program, 'flipY');\n\n    // get and store the attributes\n    this.aVertexPosition = gl.getAttribLocation(program, 'aVertexPosition');\n   // this.colorAttribute = gl.getAttribLocation(program, 'aColor');\n\n    this.attributes = [this.aVertexPosition, this.colorAttribute];\n\n    this.translationMatrix = gl.getUniformLocation(program, 'translationMatrix');\n    this.alpha = gl.getUniformLocation(program, 'alpha');\n\n    this.program = program;\n};\n\n/**\n* Destroys the shader.\n* \n* @method destroy\n*/\nPIXI.ComplexPrimitiveShader.prototype.destroy = function()\n{\n    this.gl.deleteProgram( this.program );\n    this.uniforms = null;\n    this.gl = null;\n\n    this.attribute = null;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\nPIXI.glContexts = []; // this is where we store the webGL contexts for easy access.\nPIXI.instances = [];\n\n/**\n * The WebGLRenderer draws the stage and all its content onto a webGL enabled canvas. This renderer\n * should be used for browsers that support webGL. This Render works by automatically managing webGLBatchs.\n * So no need for Sprite Batches or Sprite Clouds.\n * Don't forget to add the view to your DOM or you will not see anything :)\n *\n * @class WebGLRenderer\n * @constructor\n * @param game {Phaser.Game} A reference to the Phaser Game instance\n */\nPIXI.WebGLRenderer = function(game) {\n\n    /**\n    * @property {Phaser.Game} game - A reference to the Phaser Game instance.\n    */\n    this.game = game;\n\n    if (!PIXI.defaultRenderer)\n    {\n        PIXI.defaultRenderer = this;\n    }\n\n    /**\n     * @property type\n     * @type Number\n     */\n    this.type = PIXI.WEBGL_RENDERER;\n\n    /**\n     * The resolution of the renderer\n     *\n     * @property resolution\n     * @type Number\n     * @default 1\n     */\n    this.resolution = game.resolution;\n\n    /**\n     * Whether the render view is transparent\n     *\n     * @property transparent\n     * @type Boolean\n     */\n    this.transparent = game.transparent;\n\n    /**\n     * Whether the render view should be resized automatically\n     *\n     * @property autoResize\n     * @type Boolean\n     */\n    this.autoResize = false;\n\n    /**\n     * The value of the preserveDrawingBuffer flag affects whether or not the contents of the stencil buffer is retained after rendering.\n     *\n     * @property preserveDrawingBuffer\n     * @type Boolean\n     */\n    this.preserveDrawingBuffer = game.preserveDrawingBuffer;\n\n    /**\n     * This sets if the WebGLRenderer will clear the context texture or not before the new render pass. If true:\n     * If the Stage is NOT transparent, Pixi will clear to alpha (0, 0, 0, 0).\n     * If the Stage is transparent, Pixi will clear to the target Stage's background color.\n     * Disable this by setting this to false. For example: if your game has a canvas filling background image, you often don't need this set.\n     *\n     * @property clearBeforeRender\n     * @type Boolean\n     * @default\n     */\n    this.clearBeforeRender = game.clearBeforeRender;\n\n    /**\n     * The width of the canvas view\n     *\n     * @property width\n     * @type Number\n     */\n    this.width = game.width;\n\n    /**\n     * The height of the canvas view\n     *\n     * @property height\n     * @type Number\n     */\n    this.height = game.height;\n\n    /**\n     * The canvas element that everything is drawn to\n     *\n     * @property view\n     * @type HTMLCanvasElement\n     */\n    this.view = game.canvas;\n\n    /**\n     * @property _contextOptions\n     * @type Object\n     * @private\n     */\n    this._contextOptions = {\n        alpha: this.transparent,\n        antialias: game.antialias,\n        premultipliedAlpha: this.transparent && this.transparent !== 'notMultiplied',\n        stencil: true,\n        preserveDrawingBuffer: this.preserveDrawingBuffer\n    };\n\n    /**\n     * @property projection\n     * @type Point\n     */\n    this.projection = new PIXI.Point();\n\n    /**\n     * @property offset\n     * @type Point\n     */\n    this.offset = new PIXI.Point();\n\n    // time to create the render managers! each one focuses on managing a state in webGL\n\n    /**\n     * Deals with managing the shader programs and their attribs\n     * @property shaderManager\n     * @type WebGLShaderManager\n     */\n    this.shaderManager = new PIXI.WebGLShaderManager();\n\n    /**\n     * Manages the rendering of sprites\n     * @property spriteBatch\n     * @type WebGLSpriteBatch\n     */\n    this.spriteBatch = new PIXI.WebGLSpriteBatch();\n\n    /**\n     * Manages the masks using the stencil buffer\n     * @property maskManager\n     * @type WebGLMaskManager\n     */\n    this.maskManager = new PIXI.WebGLMaskManager();\n\n    /**\n     * Manages the filters\n     * @property filterManager\n     * @type WebGLFilterManager\n     */\n    this.filterManager = new PIXI.WebGLFilterManager();\n\n    /**\n     * Manages the stencil buffer\n     * @property stencilManager\n     * @type WebGLStencilManager\n     */\n    this.stencilManager = new PIXI.WebGLStencilManager();\n\n    /**\n     * Manages the blendModes\n     * @property blendModeManager\n     * @type WebGLBlendModeManager\n     */\n    this.blendModeManager = new PIXI.WebGLBlendModeManager();\n\n    /**\n     * @property renderSession\n     * @type Object\n     */\n    this.renderSession = {};\n\n    //  Needed?\n    this.renderSession.game = this.game;\n    this.renderSession.gl = this.gl;\n    this.renderSession.drawCount = 0;\n    this.renderSession.shaderManager = this.shaderManager;\n    this.renderSession.maskManager = this.maskManager;\n    this.renderSession.filterManager = this.filterManager;\n    this.renderSession.blendModeManager = this.blendModeManager;\n    this.renderSession.spriteBatch = this.spriteBatch;\n    this.renderSession.stencilManager = this.stencilManager;\n    this.renderSession.renderer = this;\n    this.renderSession.resolution = this.resolution;\n\n    // time init the context..\n    this.initContext();\n\n    // map some webGL blend modes..\n    this.mapBlendModes();\n\n};\n\n// constructor\nPIXI.WebGLRenderer.prototype.constructor = PIXI.WebGLRenderer;\n\n/**\n* @method initContext\n*/\nPIXI.WebGLRenderer.prototype.initContext = function()\n{\n    var gl = this.view.getContext('webgl', this._contextOptions) || this.view.getContext('experimental-webgl', this._contextOptions);\n\n    this.gl = gl;\n\n    if (!gl) {\n        // fail, not able to get a context\n        throw new Error('This browser does not support webGL. Try using the canvas renderer');\n    }\n\n    this.glContextId = gl.id = PIXI.WebGLRenderer.glContextId++;\n\n    PIXI.glContexts[this.glContextId] = gl;\n\n    PIXI.instances[this.glContextId] = this;\n\n    // set up the default pixi settings..\n    gl.disable(gl.DEPTH_TEST);\n    gl.disable(gl.CULL_FACE);\n    gl.enable(gl.BLEND);\n\n    // need to set the context for all the managers...\n    this.shaderManager.setContext(gl);\n    this.spriteBatch.setContext(gl);\n    this.maskManager.setContext(gl);\n    this.filterManager.setContext(gl);\n    this.blendModeManager.setContext(gl);\n    this.stencilManager.setContext(gl);\n\n    this.renderSession.gl = this.gl;\n\n    // now resize and we are good to go!\n    this.resize(this.width, this.height);\n};\n\n/**\n * Renders the stage to its webGL view\n *\n * @method render\n * @param stage {Stage} the Stage element to be rendered\n */\nPIXI.WebGLRenderer.prototype.render = function(stage)\n{\n    // no point rendering if our context has been blown up!\n    if (this.contextLost)\n    {\n        return;\n    }\n\n    var gl = this.gl;\n\n    // -- Does this need to be set every frame? -- //\n    gl.viewport(0, 0, this.width, this.height);\n\n    // make sure we are bound to the main frame buffer\n    gl.bindFramebuffer(gl.FRAMEBUFFER, null);\n\n    if (this.game.clearBeforeRender)\n    {\n        gl.clearColor(stage._bgColor.r, stage._bgColor.g, stage._bgColor.b, stage._bgColor.a);\n\n        gl.clear(gl.COLOR_BUFFER_BIT);\n    }\n\n    this.offset.x = this.game.camera._shake.x;\n    this.offset.y = this.game.camera._shake.y;\n\n    this.renderDisplayObject(stage, this.projection);\n};\n\n/**\n * Renders a Display Object.\n *\n * @method renderDisplayObject\n * @param displayObject {DisplayObject} The DisplayObject to render\n * @param projection {Point} The projection\n * @param buffer {Array} a standard WebGL buffer\n */\nPIXI.WebGLRenderer.prototype.renderDisplayObject = function(displayObject, projection, buffer, matrix)\n{\n    this.renderSession.blendModeManager.setBlendMode(PIXI.blendModes.NORMAL);\n\n    // reset the render session data..\n    this.renderSession.drawCount = 0;\n\n    // make sure to flip the Y if using a render texture..\n    this.renderSession.flipY = buffer ? -1 : 1;\n\n    // set the default projection\n    this.renderSession.projection = projection;\n\n    //set the default offset\n    this.renderSession.offset = this.offset;\n\n    // start the sprite batch\n    this.spriteBatch.begin(this.renderSession);\n\n    // start the filter manager\n    this.filterManager.begin(this.renderSession, buffer);\n\n    // render the scene!\n    displayObject._renderWebGL(this.renderSession, matrix);\n\n    // finish the sprite batch\n    this.spriteBatch.end();\n};\n\n/**\n * Resizes the webGL view to the specified width and height.\n *\n * @method resize\n * @param width {Number} the new width of the webGL view\n * @param height {Number} the new height of the webGL view\n */\nPIXI.WebGLRenderer.prototype.resize = function(width, height)\n{\n    this.width = width * this.resolution;\n    this.height = height * this.resolution;\n\n    this.view.width = this.width;\n    this.view.height = this.height;\n\n    if (this.autoResize) {\n        this.view.style.width = this.width / this.resolution + 'px';\n        this.view.style.height = this.height / this.resolution + 'px';\n    }\n\n    this.gl.viewport(0, 0, this.width, this.height);\n\n    this.projection.x =  this.width / 2 / this.resolution;\n    this.projection.y =  -this.height / 2 / this.resolution;\n};\n\n/**\n * Updates and Creates a WebGL texture for the renderers context.\n *\n * @method updateTexture\n * @param texture {Texture} the texture to update\n * @return {boolean} True if the texture was successfully bound, otherwise false.\n */\nPIXI.WebGLRenderer.prototype.updateTexture = function(texture)\n{\n    if (!texture.hasLoaded)\n    {\n        return false;\n    }\n\n    var gl = this.gl;\n\n    if (!texture._glTextures[gl.id])\n    {\n        texture._glTextures[gl.id] = gl.createTexture();\n    }\n\n    gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);\n\n    gl.pixelStorei(gl.UNPACK_PREMULTIPLY_ALPHA_WEBGL, texture.premultipliedAlpha);\n\n    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, texture.source);\n\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, texture.scaleMode === PIXI.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);\n\n    if (texture.mipmap && PIXI.isPowerOfTwo(texture.width, texture.height))\n    {\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === PIXI.scaleModes.LINEAR ? gl.LINEAR_MIPMAP_LINEAR : gl.NEAREST_MIPMAP_NEAREST);\n        gl.generateMipmap(gl.TEXTURE_2D);\n    }\n    else\n    {\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, texture.scaleMode === PIXI.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);\n    }\n\n    if (!texture._powerOf2)\n    {\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n    }\n    else\n    {\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.REPEAT);\n        gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.REPEAT);\n    }\n\n    texture._dirty[gl.id] = false;\n\n    // return texture._glTextures[gl.id];\n    return true;\n\n};\n\n/**\n * Removes everything from the renderer (event listeners, spritebatch, etc...)\n *\n * @method destroy\n */\nPIXI.WebGLRenderer.prototype.destroy = function()\n{\n    PIXI.glContexts[this.glContextId] = null;\n\n    this.projection = null;\n    this.offset = null;\n\n    this.shaderManager.destroy();\n    this.spriteBatch.destroy();\n    this.maskManager.destroy();\n    this.filterManager.destroy();\n\n    this.shaderManager = null;\n    this.spriteBatch = null;\n    this.maskManager = null;\n    this.filterManager = null;\n\n    this.gl = null;\n    this.renderSession = null;\n\n    PIXI.CanvasPool.remove(this);\n\n    PIXI.instances[this.glContextId] = null;\n\n    PIXI.WebGLRenderer.glContextId--;\n};\n\n/**\n * Maps Pixi blend modes to WebGL blend modes.\n *\n * @method mapBlendModes\n */\nPIXI.WebGLRenderer.prototype.mapBlendModes = function()\n{\n    var gl = this.gl;\n\n    if (!PIXI.blendModesWebGL)\n    {\n        var b = [];\n        var modes = PIXI.blendModes;\n\n        b[modes.NORMAL]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.ADD]           = [gl.SRC_ALPHA, gl.DST_ALPHA];\n        b[modes.MULTIPLY]      = [gl.DST_COLOR, gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.SCREEN]        = [gl.SRC_ALPHA, gl.ONE];\n        b[modes.OVERLAY]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.DARKEN]        = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.LIGHTEN]       = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.COLOR_DODGE]   = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.COLOR_BURN]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.HARD_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.SOFT_LIGHT]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.DIFFERENCE]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.EXCLUSION]     = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.HUE]           = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.SATURATION]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.COLOR]         = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n        b[modes.LUMINOSITY]    = [gl.ONE,       gl.ONE_MINUS_SRC_ALPHA];\n\n        PIXI.blendModesWebGL = b;\n    }\n};\n\nPIXI.WebGLRenderer.glContextId = 0;\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n* @class WebGLBlendModeManager\n* @constructor\n* @param gl {WebGLContext} the current WebGL drawing context\n*/\nPIXI.WebGLBlendModeManager = function()\n{\n    /**\n     * @property currentBlendMode\n     * @type Number\n     */\n    this.currentBlendMode = 99999;\n};\n\nPIXI.WebGLBlendModeManager.prototype.constructor = PIXI.WebGLBlendModeManager;\n\n/**\n * Sets the WebGL Context.\n *\n * @method setContext\n * @param gl {WebGLContext} the current WebGL drawing context\n */\nPIXI.WebGLBlendModeManager.prototype.setContext = function(gl)\n{\n    this.gl = gl;\n};\n\n/**\n* Sets-up the given blendMode from WebGL's point of view.\n* \n* @method setBlendMode \n* @param blendMode {Number} the blendMode, should be a Pixi const, such as PIXI.BlendModes.ADD\n*/\nPIXI.WebGLBlendModeManager.prototype.setBlendMode = function(blendMode)\n{\n    if(this.currentBlendMode === blendMode)return false;\n\n    this.currentBlendMode = blendMode;\n    \n    var blendModeWebGL = PIXI.blendModesWebGL[this.currentBlendMode];\n\n    if (blendModeWebGL)\n    {\n        this.gl.blendFunc(blendModeWebGL[0], blendModeWebGL[1]);\n    }\n    \n    return true;\n};\n\n/**\n* Destroys this object.\n* \n* @method destroy\n*/\nPIXI.WebGLBlendModeManager.prototype.destroy = function()\n{\n    this.gl = null;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n* @class WebGLMaskManager\n* @constructor\n* @private\n*/\nPIXI.WebGLMaskManager = function()\n{\n};\n\nPIXI.WebGLMaskManager.prototype.constructor = PIXI.WebGLMaskManager;\n\n/**\n* Sets the drawing context to the one given in parameter.\n* \n* @method setContext \n* @param gl {WebGLContext} the current WebGL drawing context\n*/\nPIXI.WebGLMaskManager.prototype.setContext = function(gl)\n{\n    this.gl = gl;\n};\n\n/**\n* Applies the Mask and adds it to the current filter stack.\n* \n* @method pushMask\n* @param maskData {Array}\n* @param renderSession {Object}\n*/\nPIXI.WebGLMaskManager.prototype.pushMask = function(maskData, renderSession)\n{\n    var gl = renderSession.gl;\n\n    if (maskData.dirty)\n    {\n        PIXI.WebGLGraphics.updateGraphics(maskData, gl);\n    }\n\n    if (maskData._webGL[gl.id] === undefined || maskData._webGL[gl.id].data === undefined || maskData._webGL[gl.id].data.length === 0)\n    {\n        return;\n    }\n\n    renderSession.stencilManager.pushStencil(maskData, maskData._webGL[gl.id].data[0], renderSession);\n};\n\n/**\n* Removes the last filter from the filter stack and doesn't return it.\n* \n* @method popMask\n* @param maskData {Array}\n* @param renderSession {Object} an object containing all the useful parameters\n*/\nPIXI.WebGLMaskManager.prototype.popMask = function(maskData, renderSession)\n{\n    var gl = this.gl;\n\n    if (maskData._webGL[gl.id] === undefined || maskData._webGL[gl.id].data === undefined || maskData._webGL[gl.id].data.length === 0)\n    {\n        return;\n    }\n\n    renderSession.stencilManager.popStencil(maskData, maskData._webGL[gl.id].data[0], renderSession);\n\n};\n\n/**\n* Destroys the mask stack.\n* \n* @method destroy\n*/\nPIXI.WebGLMaskManager.prototype.destroy = function()\n{\n    this.gl = null;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n* @class WebGLStencilManager\n* @constructor\n* @private\n*/\nPIXI.WebGLStencilManager = function()\n{\n    this.stencilStack = [];\n    this.reverse = true;\n    this.count = 0;\n};\n\n/**\n* Sets the drawing context to the one given in parameter.\n* \n* @method setContext \n* @param gl {WebGLContext} the current WebGL drawing context\n*/\nPIXI.WebGLStencilManager.prototype.setContext = function(gl)\n{\n    this.gl = gl;\n};\n\n/**\n* Applies the Mask and adds it to the current filter stack.\n* \n* @method pushMask\n* @param graphics {Graphics}\n* @param webGLData {Array}\n* @param renderSession {Object}\n*/\nPIXI.WebGLStencilManager.prototype.pushStencil = function(graphics, webGLData, renderSession)\n{\n    var gl = this.gl;\n    this.bindGraphics(graphics, webGLData, renderSession);\n\n    if(this.stencilStack.length === 0)\n    {\n        gl.enable(gl.STENCIL_TEST);\n        gl.clear(gl.STENCIL_BUFFER_BIT);\n        this.reverse = true;\n        this.count = 0;\n    }\n\n    this.stencilStack.push(webGLData);\n\n    var level = this.count;\n\n    gl.colorMask(false, false, false, false);\n\n    gl.stencilFunc(gl.ALWAYS,0,0xFF);\n    gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);\n\n    // draw the triangle strip!\n\n    if(webGLData.mode === 1)\n    {\n        gl.drawElements(gl.TRIANGLE_FAN,  webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0 );\n       \n        if(this.reverse)\n        {\n            gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);\n            gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);\n        }\n        else\n        {\n            gl.stencilFunc(gl.EQUAL,level, 0xFF);\n            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);\n        }\n\n        // draw a quad to increment..\n        gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );\n               \n        if(this.reverse)\n        {\n            gl.stencilFunc(gl.EQUAL,0xFF-(level+1), 0xFF);\n        }\n        else\n        {\n            gl.stencilFunc(gl.EQUAL,level+1, 0xFF);\n        }\n\n        this.reverse = !this.reverse;\n    }\n    else\n    {\n        if(!this.reverse)\n        {\n            gl.stencilFunc(gl.EQUAL, 0xFF - level, 0xFF);\n            gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);\n        }\n        else\n        {\n            gl.stencilFunc(gl.EQUAL,level, 0xFF);\n            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);\n        }\n\n        gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );\n\n        if(!this.reverse)\n        {\n            gl.stencilFunc(gl.EQUAL,0xFF-(level+1), 0xFF);\n        }\n        else\n        {\n            gl.stencilFunc(gl.EQUAL,level+1, 0xFF);\n        }\n    }\n\n    gl.colorMask(true, true, true, true);\n    gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);\n\n    this.count++;\n};\n\n/**\n * TODO this does not belong here!\n * \n * @method bindGraphics\n * @param graphics {Graphics}\n * @param webGLData {Array}\n * @param renderSession {Object}\n */\nPIXI.WebGLStencilManager.prototype.bindGraphics = function(graphics, webGLData, renderSession)\n{\n    //if(this._currentGraphics === graphics)return;\n    this._currentGraphics = graphics;\n\n    var gl = this.gl;\n\n     // bind the graphics object..\n    var projection = renderSession.projection,\n        offset = renderSession.offset,\n        shader;// = renderSession.shaderManager.primitiveShader;\n\n    if(webGLData.mode === 1)\n    {\n        shader = renderSession.shaderManager.complexPrimitiveShader;\n\n        renderSession.shaderManager.setShader( shader );\n\n        gl.uniform1f(shader.flipY, renderSession.flipY);\n       \n        gl.uniformMatrix3fv(shader.translationMatrix, false, graphics.worldTransform.toArray(true));\n\n        gl.uniform2f(shader.projectionVector, projection.x, -projection.y);\n        gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);\n\n        gl.uniform3fv(shader.tintColor, PIXI.hex2rgb(graphics.tint));\n        gl.uniform3fv(shader.color, webGLData.color);\n\n        gl.uniform1f(shader.alpha, graphics.worldAlpha * webGLData.alpha);\n\n        gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);\n\n        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 4 * 2, 0);\n\n\n        // now do the rest..\n        // set the index buffer!\n        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);\n    }\n    else\n    {\n        //renderSession.shaderManager.activatePrimitiveShader();\n        shader = renderSession.shaderManager.primitiveShader;\n        renderSession.shaderManager.setShader( shader );\n\n        gl.uniformMatrix3fv(shader.translationMatrix, false, graphics.worldTransform.toArray(true));\n\n        gl.uniform1f(shader.flipY, renderSession.flipY);\n        gl.uniform2f(shader.projectionVector, projection.x, -projection.y);\n        gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);\n\n        gl.uniform3fv(shader.tintColor, PIXI.hex2rgb(graphics.tint));\n\n        gl.uniform1f(shader.alpha, graphics.worldAlpha);\n        \n        gl.bindBuffer(gl.ARRAY_BUFFER, webGLData.buffer);\n\n        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 4 * 6, 0);\n        gl.vertexAttribPointer(shader.colorAttribute, 4, gl.FLOAT, false,4 * 6, 2 * 4);\n\n        // set the index buffer!\n        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, webGLData.indexBuffer);\n    }\n};\n\n/**\n * @method popStencil\n * @param graphics {Graphics}\n * @param webGLData {Array}\n * @param renderSession {Object}\n */\nPIXI.WebGLStencilManager.prototype.popStencil = function(graphics, webGLData, renderSession)\n{\n\tvar gl = this.gl;\n    this.stencilStack.pop();\n   \n    this.count--;\n\n    if(this.stencilStack.length === 0)\n    {\n        // the stack is empty!\n        gl.disable(gl.STENCIL_TEST);\n\n    }\n    else\n    {\n\n        var level = this.count;\n\n        this.bindGraphics(graphics, webGLData, renderSession);\n\n        gl.colorMask(false, false, false, false);\n    \n        if(webGLData.mode === 1)\n        {\n            this.reverse = !this.reverse;\n\n            if(this.reverse)\n            {\n                gl.stencilFunc(gl.EQUAL, 0xFF - (level+1), 0xFF);\n                gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);\n            }\n            else\n            {\n                gl.stencilFunc(gl.EQUAL,level+1, 0xFF);\n                gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);\n            }\n\n            // draw a quad to increment..\n            gl.drawElements(gl.TRIANGLE_FAN, 4, gl.UNSIGNED_SHORT, ( webGLData.indices.length - 4 ) * 2 );\n            \n            gl.stencilFunc(gl.ALWAYS,0,0xFF);\n            gl.stencilOp(gl.KEEP,gl.KEEP,gl.INVERT);\n\n            // draw the triangle strip!\n            gl.drawElements(gl.TRIANGLE_FAN,  webGLData.indices.length - 4, gl.UNSIGNED_SHORT, 0 );\n           \n            if(!this.reverse)\n            {\n                gl.stencilFunc(gl.EQUAL,0xFF-(level), 0xFF);\n            }\n            else\n            {\n                gl.stencilFunc(gl.EQUAL,level, 0xFF);\n            }\n\n        }\n        else\n        {\n          //  console.log(\"<<>>\")\n            if(!this.reverse)\n            {\n                gl.stencilFunc(gl.EQUAL, 0xFF - (level+1), 0xFF);\n                gl.stencilOp(gl.KEEP,gl.KEEP,gl.INCR);\n            }\n            else\n            {\n                gl.stencilFunc(gl.EQUAL,level+1, 0xFF);\n                gl.stencilOp(gl.KEEP,gl.KEEP,gl.DECR);\n            }\n\n            gl.drawElements(gl.TRIANGLE_STRIP,  webGLData.indices.length, gl.UNSIGNED_SHORT, 0 );\n\n            if(!this.reverse)\n            {\n                gl.stencilFunc(gl.EQUAL,0xFF-(level), 0xFF);\n            }\n            else\n            {\n                gl.stencilFunc(gl.EQUAL,level, 0xFF);\n            }\n        }\n\n        gl.colorMask(true, true, true, true);\n        gl.stencilOp(gl.KEEP,gl.KEEP,gl.KEEP);\n\n\n    }\n};\n\n/**\n* Destroys the mask stack.\n* \n* @method destroy\n*/\nPIXI.WebGLStencilManager.prototype.destroy = function()\n{\n    this.stencilStack = null;\n    this.gl = null;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n* @class WebGLShaderManager\n* @constructor\n* @private\n*/\nPIXI.WebGLShaderManager = function()\n{\n    /**\n     * @property maxAttibs\n     * @type Number\n     */\n    this.maxAttibs = 10;\n\n    /**\n     * @property attribState\n     * @type Array\n     */\n    this.attribState = [];\n\n    /**\n     * @property tempAttribState\n     * @type Array\n     */\n    this.tempAttribState = [];\n\n    for (var i = 0; i < this.maxAttibs; i++)\n    {\n        this.attribState[i] = false;\n    }\n\n    /**\n     * @property stack\n     * @type Array\n     */\n    this.stack = [];\n\n};\n\nPIXI.WebGLShaderManager.prototype.constructor = PIXI.WebGLShaderManager;\n\n/**\n* Initialises the context and the properties.\n* \n* @method setContext \n* @param gl {WebGLContext} the current WebGL drawing context\n*/\nPIXI.WebGLShaderManager.prototype.setContext = function(gl)\n{\n    this.gl = gl;\n    \n    // the next one is used for rendering primitives\n    this.primitiveShader = new PIXI.PrimitiveShader(gl);\n\n    // the next one is used for rendering triangle strips\n    this.complexPrimitiveShader = new PIXI.ComplexPrimitiveShader(gl);\n\n    // this shader is used for the default sprite rendering\n    this.defaultShader = new PIXI.PixiShader(gl);\n\n    // this shader is used for the fast sprite rendering\n    this.fastShader = new PIXI.PixiFastShader(gl);\n\n    // the next one is used for rendering triangle strips\n    this.stripShader = new PIXI.StripShader(gl);\n\n    this.setShader(this.defaultShader);\n};\n\n/**\n* Takes the attributes given in parameters.\n* \n* @method setAttribs\n* @param attribs {Array} attribs \n*/\nPIXI.WebGLShaderManager.prototype.setAttribs = function(attribs)\n{\n    // reset temp state\n    var i;\n\n    for (i = 0; i < this.tempAttribState.length; i++)\n    {\n        this.tempAttribState[i] = false;\n    }\n\n    // set the new attribs\n    for (i = 0; i < attribs.length; i++)\n    {\n        var attribId = attribs[i];\n        this.tempAttribState[attribId] = true;\n    }\n\n    var gl = this.gl;\n\n    for (i = 0; i < this.attribState.length; i++)\n    {\n        if(this.attribState[i] !== this.tempAttribState[i])\n        {\n            this.attribState[i] = this.tempAttribState[i];\n\n            if(this.tempAttribState[i])\n            {\n                gl.enableVertexAttribArray(i);\n            }\n            else\n            {\n                gl.disableVertexAttribArray(i);\n            }\n        }\n    }\n};\n\n/**\n* Sets the current shader.\n* \n* @method setShader\n* @param shader {Any}\n*/\nPIXI.WebGLShaderManager.prototype.setShader = function(shader)\n{\n    if(this._currentId === shader._UID)return false;\n    \n    this._currentId = shader._UID;\n\n    this.currentShader = shader;\n\n    this.gl.useProgram(shader.program);\n    this.setAttribs(shader.attributes);\n\n    return true;\n};\n\n/**\n* Destroys this object.\n* \n* @method destroy\n*/\nPIXI.WebGLShaderManager.prototype.destroy = function()\n{\n    this.attribState = null;\n\n    this.tempAttribState = null;\n\n    this.primitiveShader.destroy();\n\n    this.complexPrimitiveShader.destroy();\n\n    this.defaultShader.destroy();\n\n    this.fastShader.destroy();\n\n    this.stripShader.destroy();\n\n    this.gl = null;\n};\n\n/**\n * @author Mat Groves\n * \n * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/\n * for creating the original pixi version!\n * Also a thanks to https://github.com/bchevalier for tweaking the tint and alpha so that they now share 4 bytes on the vertex buffer\n * \n * Heavily inspired by LibGDX's WebGLSpriteBatch:\n * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/WebGLSpriteBatch.java\n */\n\n /**\n *\n * @class WebGLSpriteBatch\n * @private\n * @constructor\n */\nPIXI.WebGLSpriteBatch = function()\n{\n    /**\n     * @property vertSize\n     * @type Number\n     */\n    this.vertSize = 5;\n\n    /**\n     * The number of images in the SpriteBatch before it flushes\n     * @property size\n     * @type Number\n     */\n    this.size = 2000;//Math.pow(2, 16) /  this.vertSize;\n\n    //the total number of bytes in our batch\n    var numVerts = this.size * 4 * 4 * this.vertSize;\n    //the total number of indices in our batch\n    var numIndices = this.size * 6;\n\n    /**\n    * Holds the vertices\n    *\n    * @property vertices\n    * @type ArrayBuffer\n    */\n    this.vertices = new PIXI.ArrayBuffer(numVerts);\n\n    /**\n    * View on the vertices as a Float32Array\n    *\n    * @property positions\n    * @type Float32Array\n    */\n    this.positions = new PIXI.Float32Array(this.vertices);\n\n    /**\n    * View on the vertices as a Uint32Array\n    *\n    * @property colors\n    * @type Uint32Array\n    */\n    this.colors = new PIXI.Uint32Array(this.vertices);\n\n    /**\n     * Holds the indices\n     *\n     * @property indices\n     * @type Uint16Array\n     */\n    this.indices = new PIXI.Uint16Array(numIndices);\n    \n    /**\n     * @property lastIndexCount\n     * @type Number\n     */\n    this.lastIndexCount = 0;\n\n    for (var i=0, j=0; i < numIndices; i += 6, j += 4)\n    {\n        this.indices[i + 0] = j + 0;\n        this.indices[i + 1] = j + 1;\n        this.indices[i + 2] = j + 2;\n        this.indices[i + 3] = j + 0;\n        this.indices[i + 4] = j + 2;\n        this.indices[i + 5] = j + 3;\n    }\n\n    /**\n     * @property drawing\n     * @type Boolean\n     */\n    this.drawing = false;\n\n    /**\n     * @property currentBatchSize\n     * @type Number\n     */\n    this.currentBatchSize = 0;\n\n    /**\n     * @property currentBaseTexture\n     * @type BaseTexture\n     */\n    this.currentBaseTexture = null;\n\n    /**\n     * @property dirty\n     * @type Boolean\n     */\n    this.dirty = true;\n\n    /**\n     * @property textures\n     * @type Array\n     */\n    this.textures = [];\n\n    /**\n     * @property blendModes\n     * @type Array\n     */\n    this.blendModes = [];\n\n    /**\n     * @property shaders\n     * @type Array\n     */\n    this.shaders = [];\n\n    /**\n     * @property sprites\n     * @type Array\n     */\n    this.sprites = [];\n\n    /**\n     * @property defaultShader\n     * @type AbstractFilter\n     */\n    this.defaultShader = new PIXI.AbstractFilter([\n        'precision lowp float;',\n        'varying vec2 vTextureCoord;',\n        'varying vec4 vColor;',\n        'uniform sampler2D uSampler;',\n        'void main(void) {',\n        '   gl_FragColor = texture2D(uSampler, vTextureCoord) * vColor ;',\n        '}'\n    ]);\n};\n\n/**\n* @method setContext\n* @param gl {WebGLContext} the current WebGL drawing context\n*/\nPIXI.WebGLSpriteBatch.prototype.setContext = function(gl)\n{\n    this.gl = gl;\n\n    // create a couple of buffers\n    this.vertexBuffer = gl.createBuffer();\n    this.indexBuffer = gl.createBuffer();\n\n    // 65535 is max index, so 65535 / 6 = 10922.\n\n    //upload the index data\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);\n    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);\n    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);\n\n    this.currentBlendMode = 99999;\n\n    var shader = new PIXI.PixiShader(gl);\n\n    shader.fragmentSrc = this.defaultShader.fragmentSrc;\n    shader.uniforms = {};\n    shader.init();\n\n    this.defaultShader.shaders[gl.id] = shader;\n};\n\n/**\n* @method begin\n* @param renderSession {Object} The RenderSession object\n*/\nPIXI.WebGLSpriteBatch.prototype.begin = function(renderSession)\n{\n    this.renderSession = renderSession;\n    this.shader = this.renderSession.shaderManager.defaultShader;\n\n    this.start();\n};\n\n/**\n* @method end\n*/\nPIXI.WebGLSpriteBatch.prototype.end = function()\n{\n    this.flush();\n};\n\n/**\n* @method render\n* @param sprite {Sprite} the sprite to render when using this spritebatch\n* @param {Matrix} [matrix] - Optional matrix. If provided the Display Object will be rendered using this matrix, otherwise it will use its worldTransform.\n*/\nPIXI.WebGLSpriteBatch.prototype.render = function(sprite, matrix)\n{\n    var texture = sprite.texture;\n\n    //  They provided an alternative rendering matrix, so use it\n    var wt = sprite.worldTransform;\n\n    if (matrix)\n    {\n        wt = matrix;\n    }\n\n    // check texture..\n    if (this.currentBatchSize >= this.size)\n    {\n        this.flush();\n        this.currentBaseTexture = texture.baseTexture;\n    }\n\n    // get the uvs for the texture\n    var uvs = texture._uvs;\n\n    // if the uvs have not updated then no point rendering just yet!\n    if (!uvs)\n    {\n        return;\n    }\n\n    var aX = sprite.anchor.x;\n    var aY = sprite.anchor.y;\n\n    var w0, w1, h0, h1;\n        \n    if (texture.trim)\n    {\n        // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords.\n        var trim = texture.trim;\n\n        w1 = trim.x - aX * trim.width;\n        w0 = w1 + texture.crop.width;\n\n        h1 = trim.y - aY * trim.height;\n        h0 = h1 + texture.crop.height;\n    }\n    else\n    {\n        w0 = (texture.frame.width) * (1-aX);\n        w1 = (texture.frame.width) * -aX;\n\n        h0 = texture.frame.height * (1-aY);\n        h1 = texture.frame.height * -aY;\n    }\n\n    var i = this.currentBatchSize * 4 * this.vertSize;\n    var resolution = texture.baseTexture.resolution;\n\n    var a = wt.a / resolution;\n    var b = wt.b / resolution;\n    var c = wt.c / resolution;\n    var d = wt.d / resolution;\n    var tx = wt.tx;\n    var ty = wt.ty;\n\n    var colors = this.colors;\n    var positions = this.positions;\n\n    if (this.renderSession.roundPixels)\n    {\n        // xy\n        positions[i] = a * w1 + c * h1 + tx | 0;\n        positions[i+1] = d * h1 + b * w1 + ty | 0;\n\n        // xy\n        positions[i+5] = a * w0 + c * h1 + tx | 0;\n        positions[i+6] = d * h1 + b * w0 + ty | 0;\n\n         // xy\n        positions[i+10] = a * w0 + c * h0 + tx | 0;\n        positions[i+11] = d * h0 + b * w0 + ty | 0;\n\n        // xy\n        positions[i+15] = a * w1 + c * h0 + tx | 0;\n        positions[i+16] = d * h0 + b * w1 + ty | 0;\n    }\n    else\n    {\n        // xy\n        positions[i] = a * w1 + c * h1 + tx;\n        positions[i+1] = d * h1 + b * w1 + ty;\n\n        // xy\n        positions[i+5] = a * w0 + c * h1 + tx;\n        positions[i+6] = d * h1 + b * w0 + ty;\n\n         // xy\n        positions[i+10] = a * w0 + c * h0 + tx;\n        positions[i+11] = d * h0 + b * w0 + ty;\n\n        // xy\n        positions[i+15] = a * w1 + c * h0 + tx;\n        positions[i+16] = d * h0 + b * w1 + ty;\n    }\n    \n    // uv\n    positions[i+2] = uvs.x0;\n    positions[i+3] = uvs.y0;\n\n    // uv\n    positions[i+7] = uvs.x1;\n    positions[i+8] = uvs.y1;\n\n     // uv\n    positions[i+12] = uvs.x2;\n    positions[i+13] = uvs.y2;\n\n    // uv\n    positions[i+17] = uvs.x3;\n    positions[i+18] = uvs.y3;\n\n    // color and alpha\n    var tint = sprite.tint;\n\n    colors[i+4] = colors[i+9] = colors[i+14] = colors[i+19] = (tint >> 16) + (tint & 0xff00) + ((tint & 0xff) << 16) + (sprite.worldAlpha * 255 << 24);\n\n    // increment the batchsize\n    this.sprites[this.currentBatchSize++] = sprite;\n\n};\n\n/**\n* Renders a TilingSprite using the spriteBatch.\n* \n* @method renderTilingSprite\n* @param sprite {TilingSprite} the sprite to render\n*/\nPIXI.WebGLSpriteBatch.prototype.renderTilingSprite = function(sprite)\n{\n    var texture = sprite.tilingTexture;\n\n    // check texture..\n    if (this.currentBatchSize >= this.size)\n    {\n        this.flush();\n        this.currentBaseTexture = texture.baseTexture;\n    }\n\n    // set the textures uvs temporarily\n    if (!sprite._uvs)\n    {\n        sprite._uvs = new PIXI.TextureUvs();\n    }\n\n    var uvs = sprite._uvs;\n\n    var w = texture.baseTexture.width;\n    var h = texture.baseTexture.height;\n\n    // var w = sprite._frame.sourceSizeW;\n    // var h = sprite._frame.sourceSizeH;\n\n    // w = 16;\n    // h = 16;\n\n    sprite.tilePosition.x %= w * sprite.tileScaleOffset.x;\n    sprite.tilePosition.y %= h * sprite.tileScaleOffset.y;\n\n    var offsetX = sprite.tilePosition.x / (w * sprite.tileScaleOffset.x);\n    var offsetY = sprite.tilePosition.y / (h * sprite.tileScaleOffset.y);\n\n    var scaleX = (sprite.width / w) / (sprite.tileScale.x * sprite.tileScaleOffset.x);\n    var scaleY = (sprite.height / h) / (sprite.tileScale.y * sprite.tileScaleOffset.y);\n\n    uvs.x0 = 0 - offsetX;\n    uvs.y0 = 0 - offsetY;\n\n    uvs.x1 = (1 * scaleX) - offsetX;\n    uvs.y1 = 0 - offsetY;\n\n    uvs.x2 = (1 * scaleX) - offsetX;\n    uvs.y2 = (1 * scaleY) - offsetY;\n\n    uvs.x3 = 0 - offsetX;\n    uvs.y3 = (1 * scaleY) - offsetY;\n\n    //  Get the sprites current alpha and tint and combine them into a single color\n    var tint = sprite.tint;\n    var color = (tint >> 16) + (tint & 0xff00) + ((tint & 0xff) << 16) + (sprite.worldAlpha * 255 << 24);\n\n    var positions = this.positions;\n    var colors = this.colors;\n\n    var width = sprite.width;\n    var height = sprite.height;\n\n    // TODO trim??\n    var aX = sprite.anchor.x;\n    var aY = sprite.anchor.y;\n    var w0 = width * (1-aX);\n    var w1 = width * -aX;\n\n    var h0 = height * (1-aY);\n    var h1 = height * -aY;\n\n    var i = this.currentBatchSize * 4 * this.vertSize;\n\n    var resolution = texture.baseTexture.resolution;\n\n    var wt = sprite.worldTransform;\n\n    var a = wt.a / resolution;\n    var b = wt.b / resolution;\n    var c = wt.c / resolution;\n    var d = wt.d / resolution;\n    var tx = wt.tx;\n    var ty = wt.ty;\n\n    // xy\n    positions[i++] = a * w1 + c * h1 + tx;\n    positions[i++] = d * h1 + b * w1 + ty;\n    // uv\n    positions[i++] = uvs.x0;\n    positions[i++] = uvs.y0;\n    // color\n    colors[i++] = color;\n\n    // xy\n    positions[i++] = (a * w0 + c * h1 + tx);\n    positions[i++] = d * h1 + b * w0 + ty;\n    // uv\n    positions[i++] = uvs.x1;\n    positions[i++] = uvs.y1;\n    // color\n    colors[i++] = color;\n    \n    // xy\n    positions[i++] = a * w0 + c * h0 + tx;\n    positions[i++] = d * h0 + b * w0 + ty;\n    // uv\n    positions[i++] = uvs.x2;\n    positions[i++] = uvs.y2;\n    // color\n    colors[i++] = color;\n\n    // xy\n    positions[i++] = a * w1 + c * h0 + tx;\n    positions[i++] = d * h0 + b * w1 + ty;\n    // uv\n    positions[i++] = uvs.x3;\n    positions[i++] = uvs.y3;\n    // color\n    colors[i++] = color;\n\n    // increment the batchsize\n    this.sprites[this.currentBatchSize++] = sprite;\n};\n\n/**\n* Renders the content and empties the current batch.\n*\n* @method flush\n*/\nPIXI.WebGLSpriteBatch.prototype.flush = function()\n{\n    // If the batch is length 0 then return as there is nothing to draw\n    if (this.currentBatchSize === 0)\n    {\n        return;\n    }\n\n    var gl = this.gl;\n    var shader;\n\n    if (this.dirty)\n    {\n        this.dirty = false;\n\n        // bind the main texture\n        gl.activeTexture(gl.TEXTURE0);\n\n        // bind the buffers\n        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);\n        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);\n\n        shader = this.defaultShader.shaders[gl.id];\n\n        // this is the same for each shader?\n        var stride = this.vertSize * 4;\n        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, stride, 0);\n        gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, stride, 2 * 4);\n\n        // color attributes will be interpreted as unsigned bytes and normalized\n        gl.vertexAttribPointer(shader.colorAttribute, 4, gl.UNSIGNED_BYTE, true, stride, 4 * 4);\n    }\n\n    // upload the verts to the buffer  \n    if (this.currentBatchSize > (this.size * 0.5))\n    {\n        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);\n    }\n    else\n    {\n        var view = this.positions.subarray(0, this.currentBatchSize * 4 * this.vertSize);\n        gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);\n    }\n\n    var nextTexture, nextBlendMode, nextShader;\n    var batchSize = 0;\n    var start = 0;\n\n    var currentBaseTexture = null;\n    var currentBlendMode = this.renderSession.blendModeManager.currentBlendMode;\n    var currentShader = null;\n\n    var blendSwap = false;\n    var shaderSwap = false;\n    var sprite;\n\n    for (var i = 0, j = this.currentBatchSize; i < j; i++) {\n        \n        sprite = this.sprites[i];\n\n        if (sprite.tilingTexture)\n        {\n            nextTexture = sprite.tilingTexture.baseTexture;\n        }\n        else\n        {\n            nextTexture = sprite.texture.baseTexture;\n        }\n\n        nextBlendMode = sprite.blendMode;\n        nextShader = sprite.shader || this.defaultShader;\n\n        blendSwap = currentBlendMode !== nextBlendMode;\n        shaderSwap = currentShader !== nextShader; // should I use _UIDS???\n\n        var skip = nextTexture.skipRender;\n\n        if (skip && sprite.children.length > 0)\n        {\n            skip = false;\n        }\n\n        if ((currentBaseTexture !== nextTexture && !skip) || blendSwap || shaderSwap)\n        {\n            this.renderBatch(currentBaseTexture, batchSize, start);\n\n            start = i;\n            batchSize = 0;\n            currentBaseTexture = nextTexture;\n\n            if (blendSwap)\n            {\n                currentBlendMode = nextBlendMode;\n                this.renderSession.blendModeManager.setBlendMode(currentBlendMode);\n            }\n\n            if (shaderSwap)\n            {\n                currentShader = nextShader;\n                \n                shader = currentShader.shaders[gl.id];\n\n                if (!shader)\n                {\n                    shader = new PIXI.PixiShader(gl);\n\n                    shader.fragmentSrc = currentShader.fragmentSrc;\n                    shader.uniforms = currentShader.uniforms;\n                    shader.init();\n\n                    currentShader.shaders[gl.id] = shader;\n                }\n\n                // set shader function???\n                this.renderSession.shaderManager.setShader(shader);\n\n                if (shader.dirty)\n                {\n                    shader.syncUniforms();\n                }\n                \n                // both these only need to be set if they are changing..\n                // set the projection\n                var projection = this.renderSession.projection;\n                gl.uniform2f(shader.projectionVector, projection.x, projection.y);\n\n                // TODO - this is temporary!\n                var offsetVector = this.renderSession.offset;\n                gl.uniform2f(shader.offsetVector, offsetVector.x, offsetVector.y);\n\n                // set the pointers\n            }\n        }\n\n        batchSize++;\n    }\n\n    this.renderBatch(currentBaseTexture, batchSize, start);\n\n    // then reset the batch!\n    this.currentBatchSize = 0;\n};\n\n/**\n* @method renderBatch\n* @param texture {Texture}\n* @param size {Number}\n* @param startIndex {Number}\n*/\nPIXI.WebGLSpriteBatch.prototype.renderBatch = function(texture, size, startIndex)\n{\n    if (size === 0)\n    {\n        return;\n    }\n\n    var gl = this.gl;\n\n    // check if a texture is dirty..\n    if (texture._dirty[gl.id])\n    {\n        if (!this.renderSession.renderer.updateTexture(texture))\n        {\n            //  If updateTexture returns false then we cannot render it, so bail out now\n            return;\n        }\n    }\n    else\n    {\n        // bind the current texture\n        gl.bindTexture(gl.TEXTURE_2D, texture._glTextures[gl.id]);\n    }\n\n    // now draw those suckas!\n    gl.drawElements(gl.TRIANGLES, size * 6, gl.UNSIGNED_SHORT, startIndex * 6 * 2);\n    \n    // increment the draw count\n    this.renderSession.drawCount++;\n};\n\n/**\n* @method stop\n*/\nPIXI.WebGLSpriteBatch.prototype.stop = function()\n{\n    this.flush();\n    this.dirty = true;\n};\n\n/**\n* @method start\n*/\nPIXI.WebGLSpriteBatch.prototype.start = function()\n{\n    this.dirty = true;\n};\n\n/**\n* Destroys the SpriteBatch.\n* \n* @method destroy\n*/\nPIXI.WebGLSpriteBatch.prototype.destroy = function()\n{\n    this.vertices = null;\n    this.indices = null;\n    \n    this.gl.deleteBuffer(this.vertexBuffer);\n    this.gl.deleteBuffer(this.indexBuffer);\n    \n    this.currentBaseTexture = null;\n    \n    this.gl = null;\n};\n/**\n * @author Mat Groves\n * \n * Big thanks to the very clever Matt DesLauriers <mattdesl> https://github.com/mattdesl/\n * for creating the original pixi version!\n *\n * Heavily inspired by LibGDX's WebGLSpriteBatch:\n * https://github.com/libgdx/libgdx/blob/master/gdx/src/com/badlogic/gdx/graphics/g2d/WebGLSpriteBatch.java\n */\n\n/**\n* @class WebGLFastSpriteBatch\n* @constructor\n*/\nPIXI.WebGLFastSpriteBatch = function(gl)\n{\n    /**\n     * @property vertSize\n     * @type Number\n     */\n    this.vertSize = 10;\n\n    /**\n     * @property maxSize\n     * @type Number\n     */\n    this.maxSize = 6000;//Math.pow(2, 16) /  this.vertSize;\n\n    /**\n     * @property size\n     * @type Number\n     */\n    this.size = this.maxSize;\n\n    //the total number of floats in our batch\n    var numVerts = this.size * 4 *  this.vertSize;\n\n    //the total number of indices in our batch\n    var numIndices = this.maxSize * 6;\n\n    /**\n     * Vertex data\n     * @property vertices\n     * @type Float32Array\n     */\n    this.vertices = new PIXI.Float32Array(numVerts);\n\n    /**\n     * Index data\n     * @property indices\n     * @type Uint16Array\n     */\n    this.indices = new PIXI.Uint16Array(numIndices);\n    \n    /**\n     * @property vertexBuffer\n     * @type Object\n     */\n    this.vertexBuffer = null;\n\n    /**\n     * @property indexBuffer\n     * @type Object\n     */\n    this.indexBuffer = null;\n\n    /**\n     * @property lastIndexCount\n     * @type Number\n     */\n    this.lastIndexCount = 0;\n\n    for (var i=0, j=0; i < numIndices; i += 6, j += 4)\n    {\n        this.indices[i + 0] = j + 0;\n        this.indices[i + 1] = j + 1;\n        this.indices[i + 2] = j + 2;\n        this.indices[i + 3] = j + 0;\n        this.indices[i + 4] = j + 2;\n        this.indices[i + 5] = j + 3;\n    }\n\n    /**\n     * @property drawing\n     * @type Boolean\n     */\n    this.drawing = false;\n\n    /**\n     * @property currentBatchSize\n     * @type Number\n     */\n    this.currentBatchSize = 0;\n\n    /**\n     * @property currentBaseTexture\n     * @type BaseTexture\n     */\n    this.currentBaseTexture = null;\n   \n    /**\n     * @property currentBlendMode\n     * @type Number\n     */\n    this.currentBlendMode = 0;\n\n    /**\n     * @property renderSession\n     * @type Object\n     */\n    this.renderSession = null;\n    \n    /**\n     * @property shader\n     * @type Object\n     */\n    this.shader = null;\n\n    /**\n     * @property matrix\n     * @type Matrix\n     */\n    this.matrix = null;\n\n    this.setContext(gl);\n};\n\nPIXI.WebGLFastSpriteBatch.prototype.constructor = PIXI.WebGLFastSpriteBatch;\n\n/**\n * Sets the WebGL Context.\n *\n * @method setContext\n * @param gl {WebGLContext} the current WebGL drawing context\n */\nPIXI.WebGLFastSpriteBatch.prototype.setContext = function(gl)\n{\n    this.gl = gl;\n\n    // create a couple of buffers\n    this.vertexBuffer = gl.createBuffer();\n    this.indexBuffer = gl.createBuffer();\n\n    // 65535 is max index, so 65535 / 6 = 10922.\n\n    //upload the index data\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);\n    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);\n    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);\n};\n\n/**\n * @method begin\n * @param spriteBatch {WebGLSpriteBatch}\n * @param renderSession {Object}\n */\nPIXI.WebGLFastSpriteBatch.prototype.begin = function(spriteBatch, renderSession)\n{\n    this.renderSession = renderSession;\n    this.shader = this.renderSession.shaderManager.fastShader;\n\n    this.matrix = spriteBatch.worldTransform.toArray(true);\n\n    this.start();\n};\n\n/**\n * @method end\n */\nPIXI.WebGLFastSpriteBatch.prototype.end = function()\n{\n    this.flush();\n};\n\n/**\n * @method render\n * @param spriteBatch {WebGLSpriteBatch}\n */\nPIXI.WebGLFastSpriteBatch.prototype.render = function(spriteBatch)\n{\n    var children = spriteBatch.children;\n    var sprite = children[0];\n\n    // if the uvs have not updated then no point rendering just yet!\n    \n    // check texture.\n    if(!sprite.texture._uvs)return;\n   \n    this.currentBaseTexture = sprite.texture.baseTexture;\n    \n    // check blend mode\n    if(sprite.blendMode !== this.renderSession.blendModeManager.currentBlendMode)\n    {\n        this.flush();\n        this.renderSession.blendModeManager.setBlendMode(sprite.blendMode);\n    }\n    \n    for(var i=0,j= children.length; i<j; i++)\n    {\n        this.renderSprite(children[i]);\n    }\n\n    this.flush();\n};\n\n/**\n * @method renderSprite\n * @param sprite {Sprite}\n */\nPIXI.WebGLFastSpriteBatch.prototype.renderSprite = function(sprite)\n{\n    //sprite = children[i];\n    if(!sprite.visible)return;\n    \n    // TODO trim??\n    if(sprite.texture.baseTexture !== this.currentBaseTexture && !sprite.texture.baseTexture.skipRender)\n    {\n        this.flush();\n        this.currentBaseTexture = sprite.texture.baseTexture;\n        \n        if(!sprite.texture._uvs)return;\n    }\n\n    var uvs, vertices = this.vertices, width, height, w0, w1, h0, h1, index;\n\n    uvs = sprite.texture._uvs;\n\n    width = sprite.texture.frame.width;\n    height = sprite.texture.frame.height;\n\n    if (sprite.texture.trim)\n    {\n        // if the sprite is trimmed then we need to add the extra space before transforming the sprite coords..\n        var trim = sprite.texture.trim;\n\n        w1 = trim.x - sprite.anchor.x * trim.width;\n        w0 = w1 + sprite.texture.crop.width;\n\n        h1 = trim.y - sprite.anchor.y * trim.height;\n        h0 = h1 + sprite.texture.crop.height;\n    }\n    else\n    {\n        w0 = (sprite.texture.frame.width ) * (1-sprite.anchor.x);\n        w1 = (sprite.texture.frame.width ) * -sprite.anchor.x;\n\n        h0 = sprite.texture.frame.height * (1-sprite.anchor.y);\n        h1 = sprite.texture.frame.height * -sprite.anchor.y;\n    }\n\n    index = this.currentBatchSize * 4 * this.vertSize;\n\n    // xy\n    vertices[index++] = w1;\n    vertices[index++] = h1;\n\n    vertices[index++] = sprite.position.x;\n    vertices[index++] = sprite.position.y;\n\n    //scale\n    vertices[index++] = sprite.scale.x;\n    vertices[index++] = sprite.scale.y;\n\n    //rotation\n    vertices[index++] = sprite.rotation;\n\n    // uv\n    vertices[index++] = uvs.x0;\n    vertices[index++] = uvs.y1;\n    // color\n    vertices[index++] = sprite.alpha;\n \n\n    // xy\n    vertices[index++] = w0;\n    vertices[index++] = h1;\n\n    vertices[index++] = sprite.position.x;\n    vertices[index++] = sprite.position.y;\n\n    //scale\n    vertices[index++] = sprite.scale.x;\n    vertices[index++] = sprite.scale.y;\n\n     //rotation\n    vertices[index++] = sprite.rotation;\n\n    // uv\n    vertices[index++] = uvs.x1;\n    vertices[index++] = uvs.y1;\n    // color\n    vertices[index++] = sprite.alpha;\n  \n\n    // xy\n    vertices[index++] = w0;\n    vertices[index++] = h0;\n\n    vertices[index++] = sprite.position.x;\n    vertices[index++] = sprite.position.y;\n\n    //scale\n    vertices[index++] = sprite.scale.x;\n    vertices[index++] = sprite.scale.y;\n\n     //rotation\n    vertices[index++] = sprite.rotation;\n\n    // uv\n    vertices[index++] = uvs.x2;\n    vertices[index++] = uvs.y2;\n    // color\n    vertices[index++] = sprite.alpha;\n \n\n\n\n    // xy\n    vertices[index++] = w1;\n    vertices[index++] = h0;\n\n    vertices[index++] = sprite.position.x;\n    vertices[index++] = sprite.position.y;\n\n    //scale\n    vertices[index++] = sprite.scale.x;\n    vertices[index++] = sprite.scale.y;\n\n     //rotation\n    vertices[index++] = sprite.rotation;\n\n    // uv\n    vertices[index++] = uvs.x3;\n    vertices[index++] = uvs.y3;\n    // color\n    vertices[index++] = sprite.alpha;\n\n    // increment the batchs\n    this.currentBatchSize++;\n\n    if(this.currentBatchSize >= this.size)\n    {\n        this.flush();\n    }\n};\n\n/**\n * @method flush\n */\nPIXI.WebGLFastSpriteBatch.prototype.flush = function()\n{\n    // If the batch is length 0 then return as there is nothing to draw\n    if (this.currentBatchSize===0)return;\n\n    var gl = this.gl;\n    \n    // bind the current texture\n\n    if(!this.currentBaseTexture._glTextures[gl.id])this.renderSession.renderer.updateTexture(this.currentBaseTexture, gl);\n\n    gl.bindTexture(gl.TEXTURE_2D, this.currentBaseTexture._glTextures[gl.id]);\n\n    // upload the verts to the buffer\n   \n    if(this.currentBatchSize > ( this.size * 0.5 ) )\n    {\n        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);\n    }\n    else\n    {\n        var view = this.vertices.subarray(0, this.currentBatchSize * 4 * this.vertSize);\n\n        gl.bufferSubData(gl.ARRAY_BUFFER, 0, view);\n    }\n    \n    // now draw those suckas!\n    gl.drawElements(gl.TRIANGLES, this.currentBatchSize * 6, gl.UNSIGNED_SHORT, 0);\n   \n    // then reset the batch!\n    this.currentBatchSize = 0;\n\n    // increment the draw count\n    this.renderSession.drawCount++;\n};\n\n\n/**\n * @method stop\n */\nPIXI.WebGLFastSpriteBatch.prototype.stop = function()\n{\n    this.flush();\n};\n\n/**\n * @method start\n */\nPIXI.WebGLFastSpriteBatch.prototype.start = function()\n{\n    var gl = this.gl;\n\n    // bind the main texture\n    gl.activeTexture(gl.TEXTURE0);\n\n    // bind the buffers\n    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);\n\n    // set the projection\n    var projection = this.renderSession.projection;\n    gl.uniform2f(this.shader.projectionVector, projection.x, projection.y);\n\n    // set the matrix\n    gl.uniformMatrix3fv(this.shader.uMatrix, false, this.matrix);\n\n    // set the pointers\n    var stride =  this.vertSize * 4;\n\n    gl.vertexAttribPointer(this.shader.aVertexPosition, 2, gl.FLOAT, false, stride, 0);\n    gl.vertexAttribPointer(this.shader.aPositionCoord, 2, gl.FLOAT, false, stride, 2 * 4);\n    gl.vertexAttribPointer(this.shader.aScale, 2, gl.FLOAT, false, stride, 4 * 4);\n    gl.vertexAttribPointer(this.shader.aRotation, 1, gl.FLOAT, false, stride, 6 * 4);\n    gl.vertexAttribPointer(this.shader.aTextureCoord, 2, gl.FLOAT, false, stride, 7 * 4);\n    gl.vertexAttribPointer(this.shader.colorAttribute, 1, gl.FLOAT, false, stride, 9 * 4);\n    \n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n* @class WebGLFilterManager\n* @constructor\n*/\nPIXI.WebGLFilterManager = function()\n{\n    /**\n     * @property filterStack\n     * @type Array\n     */\n    this.filterStack = [];\n    \n    /**\n     * @property offsetX\n     * @type Number\n     */\n    this.offsetX = 0;\n\n    /**\n     * @property offsetY\n     * @type Number\n     */\n    this.offsetY = 0;\n};\n\nPIXI.WebGLFilterManager.prototype.constructor = PIXI.WebGLFilterManager;\n\n/**\n* Initialises the context and the properties.\n* \n* @method setContext \n* @param gl {WebGLContext} the current WebGL drawing context\n*/\nPIXI.WebGLFilterManager.prototype.setContext = function(gl)\n{\n    this.gl = gl;\n    this.texturePool = [];\n\n    this.initShaderBuffers();\n};\n\n/**\n* @method begin\n* @param renderSession {RenderSession} \n* @param buffer {ArrayBuffer} \n*/\nPIXI.WebGLFilterManager.prototype.begin = function(renderSession, buffer)\n{\n    this.renderSession = renderSession;\n    this.defaultShader = renderSession.shaderManager.defaultShader;\n\n    var projection = this.renderSession.projection;\n    this.width = projection.x * 2;\n    this.height = -projection.y * 2;\n    this.buffer = buffer;\n};\n\n/**\n* Applies the filter and adds it to the current filter stack.\n* \n* @method pushFilter\n* @param filterBlock {Object} the filter that will be pushed to the current filter stack\n*/\nPIXI.WebGLFilterManager.prototype.pushFilter = function(filterBlock)\n{\n    var gl = this.gl;\n\n    var projection = this.renderSession.projection;\n    var offset = this.renderSession.offset;\n\n    filterBlock._filterArea = filterBlock.target.filterArea || filterBlock.target.getBounds();\n    \n    // >>> modify by nextht\n    filterBlock._previous_stencil_mgr = this.renderSession.stencilManager;\n    this.renderSession.stencilManager = new PIXI.WebGLStencilManager();\n    this.renderSession.stencilManager.setContext(gl);\n    gl.disable(gl.STENCIL_TEST);\n    // <<<  modify by nextht \n   \n    // filter program\n    // OPTIMISATION - the first filter is free if its a simple color change?\n    this.filterStack.push(filterBlock);\n\n    var filter = filterBlock.filterPasses[0];\n\n    this.offsetX += filterBlock._filterArea.x;\n    this.offsetY += filterBlock._filterArea.y;\n\n    var texture = this.texturePool.pop();\n    if(!texture)\n    {\n        texture = new PIXI.FilterTexture(this.gl, this.width * this.renderSession.resolution, this.height * this.renderSession.resolution);\n    }\n    else\n    {\n        texture.resize(this.width * this.renderSession.resolution, this.height * this.renderSession.resolution);\n    }\n\n    gl.bindTexture(gl.TEXTURE_2D,  texture.texture);\n\n    var filterArea = filterBlock._filterArea;// filterBlock.target.getBounds();///filterBlock.target.filterArea;\n\n    var padding = filter.padding;\n    filterArea.x -= padding;\n    filterArea.y -= padding;\n    filterArea.width += padding * 2;\n    filterArea.height += padding * 2;\n\n    // cap filter to screen size..\n    if(filterArea.x < 0)filterArea.x = 0;\n    if(filterArea.width > this.width)filterArea.width = this.width;\n    if(filterArea.y < 0)filterArea.y = 0;\n    if(filterArea.height > this.height)filterArea.height = this.height;\n\n    //gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  filterArea.width, filterArea.height, 0, gl.RGBA, gl.UNSIGNED_BYTE, null);\n    gl.bindFramebuffer(gl.FRAMEBUFFER, texture.frameBuffer);\n\n    // set view port\n    gl.viewport(0, 0, filterArea.width * this.renderSession.resolution, filterArea.height * this.renderSession.resolution);\n\n    projection.x = filterArea.width/2;\n    projection.y = -filterArea.height/2;\n\n    offset.x = -filterArea.x;\n    offset.y = -filterArea.y;\n\n    // update projection\n    // now restore the regular shader..\n    // this.renderSession.shaderManager.setShader(this.defaultShader);\n    //gl.uniform2f(this.defaultShader.projectionVector, filterArea.width/2, -filterArea.height/2);\n    //gl.uniform2f(this.defaultShader.offsetVector, -filterArea.x, -filterArea.y);\n\n    gl.colorMask(true, true, true, true);\n    gl.clearColor(0,0,0, 0);\n    gl.clear(gl.COLOR_BUFFER_BIT);\n\n    filterBlock._glFilterTexture = texture;\n\n};\n\n/**\n* Removes the last filter from the filter stack and doesn't return it.\n* \n* @method popFilter\n*/\nPIXI.WebGLFilterManager.prototype.popFilter = function()\n{\n    var gl = this.gl;\n    var filterBlock = this.filterStack.pop();\n    var filterArea = filterBlock._filterArea;\n    var texture = filterBlock._glFilterTexture;\n    var projection = this.renderSession.projection;\n    var offset = this.renderSession.offset;\n\n    if(filterBlock.filterPasses.length > 1)\n    {\n        gl.viewport(0, 0, filterArea.width * this.renderSession.resolution, filterArea.height * this.renderSession.resolution);\n\n        gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);\n\n        this.vertexArray[0] = 0;\n        this.vertexArray[1] = filterArea.height;\n\n        this.vertexArray[2] = filterArea.width;\n        this.vertexArray[3] = filterArea.height;\n\n        this.vertexArray[4] = 0;\n        this.vertexArray[5] = 0;\n\n        this.vertexArray[6] = filterArea.width;\n        this.vertexArray[7] = 0;\n\n        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertexArray);\n\n        gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);\n        // now set the uvs..\n        this.uvArray[2] = filterArea.width/this.width;\n        this.uvArray[5] = filterArea.height/this.height;\n        this.uvArray[6] = filterArea.width/this.width;\n        this.uvArray[7] = filterArea.height/this.height;\n\n        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.uvArray);\n\n        var inputTexture = texture;\n        var outputTexture = this.texturePool.pop();\n        if(!outputTexture)outputTexture = new PIXI.FilterTexture(this.gl, this.width * this.renderSession.resolution, this.height * this.renderSession.resolution);\n        outputTexture.resize(this.width * this.renderSession.resolution, this.height * this.renderSession.resolution);\n\n        // need to clear this FBO as it may have some left over elements from a previous filter.\n        gl.bindFramebuffer(gl.FRAMEBUFFER, outputTexture.frameBuffer );\n        gl.clear(gl.COLOR_BUFFER_BIT);\n\n        gl.disable(gl.BLEND);\n\n        for (var i = 0; i < filterBlock.filterPasses.length-1; i++)\n        {\n            var filterPass = filterBlock.filterPasses[i];\n\n            gl.bindFramebuffer(gl.FRAMEBUFFER, outputTexture.frameBuffer );\n\n            // set texture\n            gl.activeTexture(gl.TEXTURE0);\n            gl.bindTexture(gl.TEXTURE_2D, inputTexture.texture);\n\n            // draw texture..\n            //filterPass.applyFilterPass(filterArea.width, filterArea.height);\n            this.applyFilterPass(filterPass, filterArea, filterArea.width, filterArea.height);\n\n            // swap the textures..\n            var temp = inputTexture;\n            inputTexture = outputTexture;\n            outputTexture = temp;\n        }\n\n        gl.enable(gl.BLEND);\n\n        texture = inputTexture;\n        this.texturePool.push(outputTexture);\n    }\n\n    var filter = filterBlock.filterPasses[filterBlock.filterPasses.length-1];\n\n    this.offsetX -= filterArea.x;\n    this.offsetY -= filterArea.y;\n\n    var sizeX = this.width;\n    var sizeY = this.height;\n\n    var offsetX = 0;\n    var offsetY = 0;\n\n    var buffer = this.buffer;\n\n    // time to render the filters texture to the previous scene\n    if(this.filterStack.length === 0)\n    {\n        gl.colorMask(true, true, true, true);//this.transparent);\n    }\n    else\n    {\n        var currentFilter = this.filterStack[this.filterStack.length-1];\n        filterArea = currentFilter._filterArea;\n\n        sizeX = filterArea.width;\n        sizeY = filterArea.height;\n\n        offsetX = filterArea.x;\n        offsetY = filterArea.y;\n\n        buffer =  currentFilter._glFilterTexture.frameBuffer;\n    }\n\n    // TODO need to remove these global elements..\n    projection.x = sizeX/2;\n    projection.y = -sizeY/2;\n\n    offset.x = offsetX;\n    offset.y = offsetY;\n\n    filterArea = filterBlock._filterArea;\n\n    var x = filterArea.x-offsetX;\n    var y = filterArea.y-offsetY;\n\n    // update the buffers..\n    // make sure to flip the y!\n    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);\n\n    this.vertexArray[0] = x;\n    this.vertexArray[1] = y + filterArea.height;\n\n    this.vertexArray[2] = x + filterArea.width;\n    this.vertexArray[3] = y + filterArea.height;\n\n    this.vertexArray[4] = x;\n    this.vertexArray[5] = y;\n\n    this.vertexArray[6] = x + filterArea.width;\n    this.vertexArray[7] = y;\n\n    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertexArray);\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);\n\n    this.uvArray[2] = filterArea.width/this.width;\n    this.uvArray[5] = filterArea.height/this.height;\n    this.uvArray[6] = filterArea.width/this.width;\n    this.uvArray[7] = filterArea.height/this.height;\n\n    gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.uvArray);\n\n    gl.viewport(0, 0, sizeX * this.renderSession.resolution, sizeY * this.renderSession.resolution);\n\n    // bind the buffer\n    gl.bindFramebuffer(gl.FRAMEBUFFER, buffer );\n\n    // set the blend mode! \n    //gl.blendFunc(gl.ONE, gl.ONE_MINUS_SRC_ALPHA)\n\n    // set texture\n    gl.activeTexture(gl.TEXTURE0);\n    gl.bindTexture(gl.TEXTURE_2D, texture.texture);\n\n    // >>> modify by nextht\n    if (this.renderSession.stencilManager) {\n        this.renderSession.stencilManager.destroy();\n    }\n    this.renderSession.stencilManager = filterBlock._previous_stencil_mgr;\n    filterBlock._previous_stencil_mgr = null;\n    if (this.renderSession.stencilManager.count > 0) {\n        gl.enable(gl.STENCIL_TEST);\n    }\n    else {\n        gl.disable(gl.STENCIL_TEST);\n    }    \n    // <<< modify by nextht\n\n    // apply!\n    this.applyFilterPass(filter, filterArea, sizeX, sizeY);\n\n    // now restore the regular shader.. should happen automatically now..\n    // this.renderSession.shaderManager.setShader(this.defaultShader);\n    // gl.uniform2f(this.defaultShader.projectionVector, sizeX/2, -sizeY/2);\n    // gl.uniform2f(this.defaultShader.offsetVector, -offsetX, -offsetY);\n\n    // return the texture to the pool\n    this.texturePool.push(texture);\n    filterBlock._glFilterTexture = null;\n};\n\n\n/**\n* Applies the filter to the specified area.\n* \n* @method applyFilterPass\n* @param filter {AbstractFilter} the filter that needs to be applied\n* @param filterArea {Texture} TODO - might need an update\n* @param width {Number} the horizontal range of the filter\n* @param height {Number} the vertical range of the filter\n*/\nPIXI.WebGLFilterManager.prototype.applyFilterPass = function(filter, filterArea, width, height)\n{\n    // use program\n    var gl = this.gl;\n    var shader = filter.shaders[gl.id];\n\n    if(!shader)\n    {\n        shader = new PIXI.PixiShader(gl);\n\n        shader.fragmentSrc = filter.fragmentSrc;\n        shader.uniforms = filter.uniforms;\n        shader.init();\n\n        filter.shaders[gl.id] = shader;\n    }\n\n    // set the shader\n    this.renderSession.shaderManager.setShader(shader);\n\n//    gl.useProgram(shader.program);\n\n    gl.uniform2f(shader.projectionVector, width/2, -height/2);\n    gl.uniform2f(shader.offsetVector, 0,0);\n\n    if(filter.uniforms.dimensions)\n    {\n        filter.uniforms.dimensions.value[0] = this.width;//width;\n        filter.uniforms.dimensions.value[1] = this.height;//height;\n        filter.uniforms.dimensions.value[2] = this.vertexArray[0];\n        filter.uniforms.dimensions.value[3] = this.vertexArray[5];//filterArea.height;\n    }\n\n    shader.syncUniforms();\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);\n    gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 0, 0);\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);\n    gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, 0, 0);\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);\n    gl.vertexAttribPointer(shader.colorAttribute, 2, gl.FLOAT, false, 0, 0);\n\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);\n\n    // draw the filter...\n    gl.drawElements(gl.TRIANGLES, 6, gl.UNSIGNED_SHORT, 0 );\n\n    this.renderSession.drawCount++;\n};\n\n/**\n* Initialises the shader buffers.\n* \n* @method initShaderBuffers\n*/\nPIXI.WebGLFilterManager.prototype.initShaderBuffers = function()\n{\n    var gl = this.gl;\n\n    // create some buffers\n    this.vertexBuffer = gl.createBuffer();\n    this.uvBuffer = gl.createBuffer();\n    this.colorBuffer = gl.createBuffer();\n    this.indexBuffer = gl.createBuffer();\n\n    // bind and upload the vertexs..\n    // keep a reference to the vertexFloatData..\n    this.vertexArray = new PIXI.Float32Array([0.0, 0.0,\n                                         1.0, 0.0,\n                                         0.0, 1.0,\n                                         1.0, 1.0]);\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this.vertexBuffer);\n    gl.bufferData(gl.ARRAY_BUFFER, this.vertexArray, gl.STATIC_DRAW);\n\n    // bind and upload the uv buffer\n    this.uvArray = new PIXI.Float32Array([0.0, 0.0,\n                                     1.0, 0.0,\n                                     0.0, 1.0,\n                                     1.0, 1.0]);\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this.uvBuffer);\n    gl.bufferData(gl.ARRAY_BUFFER, this.uvArray, gl.STATIC_DRAW);\n\n    this.colorArray = new PIXI.Float32Array([1.0, 0xFFFFFF,\n                                        1.0, 0xFFFFFF,\n                                        1.0, 0xFFFFFF,\n                                        1.0, 0xFFFFFF]);\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this.colorBuffer);\n    gl.bufferData(gl.ARRAY_BUFFER, this.colorArray, gl.STATIC_DRAW);\n\n    // bind and upload the index\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this.indexBuffer);\n    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, new Uint16Array([0, 1, 2, 1, 3, 2]), gl.STATIC_DRAW);\n\n};\n\n/**\n* Destroys the filter and removes it from the filter stack.\n* \n* @method destroy\n*/\nPIXI.WebGLFilterManager.prototype.destroy = function()\n{\n    var gl = this.gl;\n\n    this.filterStack = null;\n    \n    this.offsetX = 0;\n    this.offsetY = 0;\n\n    // destroy textures\n    for (var i = 0; i < this.texturePool.length; i++) {\n        this.texturePool[i].destroy();\n    }\n    \n    this.texturePool = null;\n\n    //destroy buffers..\n    gl.deleteBuffer(this.vertexBuffer);\n    gl.deleteBuffer(this.uvBuffer);\n    gl.deleteBuffer(this.colorBuffer);\n    gl.deleteBuffer(this.indexBuffer);\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n* @class FilterTexture\n* @constructor\n* @param gl {WebGLContext} the current WebGL drawing context\n* @param width {Number} the horizontal range of the filter\n* @param height {Number} the vertical range of the filter\n* @param scaleMode {Number} See {{#crossLink \"PIXI/scaleModes:property\"}}PIXI.scaleModes{{/crossLink}} for possible values\n*/\nPIXI.FilterTexture = function(gl, width, height, scaleMode)\n{\n    /**\n     * @property gl\n     * @type WebGLContext\n     */\n    this.gl = gl;\n\n    // next time to create a frame buffer and texture\n\n    /**\n     * @property frameBuffer\n     * @type Any\n     */\n    this.frameBuffer = gl.createFramebuffer();\n\n    /**\n     * @property texture\n     * @type Any\n     */\n    this.texture = gl.createTexture();\n\n    /**\n     * @property scaleMode\n     * @type Number\n     */\n    scaleMode = scaleMode || PIXI.scaleModes.DEFAULT;\n\n    gl.bindTexture(gl.TEXTURE_2D,  this.texture);\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, scaleMode === PIXI.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, scaleMode === PIXI.scaleModes.LINEAR ? gl.LINEAR : gl.NEAREST);\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);\n    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);\n    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer );\n\n    gl.bindFramebuffer(gl.FRAMEBUFFER, this.frameBuffer );\n    gl.framebufferTexture2D(gl.FRAMEBUFFER, gl.COLOR_ATTACHMENT0, gl.TEXTURE_2D, this.texture, 0);\n\n    // required for masking a mask??\n    this.renderBuffer = gl.createRenderbuffer();\n    gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);\n    gl.framebufferRenderbuffer(gl.FRAMEBUFFER, gl.DEPTH_STENCIL_ATTACHMENT, gl.RENDERBUFFER, this.renderBuffer);\n  \n    this.resize(width, height);\n};\n\nPIXI.FilterTexture.prototype.constructor = PIXI.FilterTexture;\n\n/**\n* Clears the filter texture.\n* \n* @method clear\n*/\nPIXI.FilterTexture.prototype.clear = function()\n{\n    var gl = this.gl;\n    \n    gl.clearColor(0,0,0, 0);\n    gl.clear(gl.COLOR_BUFFER_BIT);\n};\n\n/**\n * Resizes the texture to the specified width and height\n *\n * @method resize\n * @param width {Number} the new width of the texture\n * @param height {Number} the new height of the texture\n */\nPIXI.FilterTexture.prototype.resize = function(width, height)\n{\n    if(this.width === width && this.height === height) return;\n\n    this.width = width;\n    this.height = height;\n\n    var gl = this.gl;\n\n    gl.bindTexture(gl.TEXTURE_2D,  this.texture);\n    gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA,  width , height , 0, gl.RGBA, gl.UNSIGNED_BYTE, null);\n    // update the stencil buffer width and height\n    gl.bindRenderbuffer(gl.RENDERBUFFER, this.renderBuffer);\n    gl.renderbufferStorage(gl.RENDERBUFFER, gl.DEPTH_STENCIL, width , height );\n};\n\n/**\n* Destroys the filter texture.\n* \n* @method destroy\n*/\nPIXI.FilterTexture.prototype.destroy = function()\n{\n    var gl = this.gl;\n    gl.deleteFramebuffer( this.frameBuffer );\n    gl.deleteTexture( this.texture );\n\n    this.frameBuffer = null;\n    this.texture = null;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n * Creates a Canvas element of the given size.\n *\n * @class CanvasBuffer\n * @constructor\n * @param width {Number} the width for the newly created canvas\n * @param height {Number} the height for the newly created canvas\n */\nPIXI.CanvasBuffer = function(width, height)\n{\n    /**\n     * The width of the Canvas in pixels.\n     *\n     * @property width\n     * @type Number\n     */\n    this.width = width;\n\n    /**\n     * The height of the Canvas in pixels.\n     *\n     * @property height\n     * @type Number\n     */\n    this.height = height;\n\n    /**\n     * The Canvas object that belongs to this CanvasBuffer.\n     *\n     * @property canvas\n     * @type HTMLCanvasElement\n     */\n    this.canvas = PIXI.CanvasPool.create(this, this.width, this.height);\n\n    /**\n     * A CanvasRenderingContext2D object representing a two-dimensional rendering context.\n     *\n     * @property context\n     * @type CanvasRenderingContext2D\n     */\n    this.context = this.canvas.getContext(\"2d\");\n\n    this.canvas.width = width;\n    this.canvas.height = height;\n};\n\nPIXI.CanvasBuffer.prototype.constructor = PIXI.CanvasBuffer;\n\n/**\n * Clears the canvas that was created by the CanvasBuffer class.\n *\n * @method clear\n * @private\n */\nPIXI.CanvasBuffer.prototype.clear = function()\n{\n    this.context.setTransform(1, 0, 0, 1, 0, 0);\n    this.context.clearRect(0,0, this.width, this.height);\n};\n\n/**\n * Resizes the canvas to the specified width and height.\n *\n * @method resize\n * @param width {Number} the new width of the canvas\n * @param height {Number} the new height of the canvas\n */\nPIXI.CanvasBuffer.prototype.resize = function(width, height)\n{\n    this.width = this.canvas.width = width;\n    this.height = this.canvas.height = height;\n};\n\n/**\n * Frees the canvas up for use again.\n *\n * @method destroy\n */\nPIXI.CanvasBuffer.prototype.destroy = function()\n{\n    PIXI.CanvasPool.remove(this);\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n * A set of functions used to handle masking.\n *\n * @class CanvasMaskManager\n * @constructor\n */\nPIXI.CanvasMaskManager = function()\n{\n};\n\nPIXI.CanvasMaskManager.prototype.constructor = PIXI.CanvasMaskManager;\n\n/**\n * This method adds it to the current stack of masks.\n *\n * @method pushMask\n * @param maskData {Object} the maskData that will be pushed\n * @param renderSession {Object} The renderSession whose context will be used for this mask manager.\n */\nPIXI.CanvasMaskManager.prototype.pushMask = function(maskData, renderSession) {\n\n\tvar context = renderSession.context;\n\n    context.save();\n    \n    var cacheAlpha = maskData.alpha;\n    var transform = maskData.worldTransform;\n\n    var resolution = renderSession.resolution;\n\n    context.setTransform(transform.a * resolution,\n                         transform.b * resolution,\n                         transform.c * resolution,\n                         transform.d * resolution,\n                         transform.tx * resolution,\n                         transform.ty * resolution);\n\n    PIXI.CanvasGraphics.renderGraphicsMask(maskData, context);\n\n    context.clip();\n\n    maskData.worldAlpha = cacheAlpha;\n};\n\n/**\n * Restores the current drawing context to the state it was before the mask was applied.\n *\n * @method popMask\n * @param renderSession {Object} The renderSession whose context will be used for this mask manager.\n */\nPIXI.CanvasMaskManager.prototype.popMask = function(renderSession)\n{\n    renderSession.context.restore();\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n * Utility methods for Sprite/Texture tinting.\n *\n * @class CanvasTinter\n * @static\n */\nPIXI.CanvasTinter = function() {};\n\n/**\n * Basically this method just needs a sprite and a color and tints the sprite with the given color.\n * \n * @method getTintedTexture \n * @static\n * @param sprite {Sprite} the sprite to tint\n * @param color {Number} the color to use to tint the sprite with\n * @return {HTMLCanvasElement} The tinted canvas\n */\nPIXI.CanvasTinter.getTintedTexture = function(sprite, color)\n{\n    var canvas = sprite.tintedTexture || PIXI.CanvasPool.create(this);\n    \n    PIXI.CanvasTinter.tintMethod(sprite.texture, color, canvas);\n\n    return canvas;\n};\n\n/**\n * Tint a texture using the \"multiply\" operation.\n * \n * @method tintWithMultiply\n * @static\n * @param texture {Texture} the texture to tint\n * @param color {Number} the color to use to tint the sprite with\n * @param canvas {HTMLCanvasElement} the current canvas\n */\nPIXI.CanvasTinter.tintWithMultiply = function(texture, color, canvas)\n{\n    var context = canvas.getContext(\"2d\");\n\n    var crop = texture.crop;\n\n    if (canvas.width !== crop.width || canvas.height !== crop.height)\n    {\n        canvas.width = crop.width;\n        canvas.height = crop.height;\n    }\n\n    context.clearRect(0, 0, crop.width, crop.height);\n\n    context.fillStyle = \"#\" + (\"00000\" + (color | 0).toString(16)).substr(-6);\n    context.fillRect(0, 0, crop.width, crop.height);\n\n    context.globalCompositeOperation = \"multiply\";\n    context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);\n\n    context.globalCompositeOperation = \"destination-atop\";\n    context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);\n\n};\n\n/**\n * Tint a texture pixel per pixel.\n * \n * @method tintPerPixel\n * @static\n * @param texture {Texture} the texture to tint\n * @param color {Number} the color to use to tint the sprite with\n * @param canvas {HTMLCanvasElement} the current canvas\n */ \nPIXI.CanvasTinter.tintWithPerPixel = function(texture, color, canvas)\n{\n    var context = canvas.getContext(\"2d\");\n\n    var crop = texture.crop;\n\n    canvas.width = crop.width;\n    canvas.height = crop.height;\n  \n    context.globalCompositeOperation = \"copy\";\n\n    context.drawImage(texture.baseTexture.source, crop.x, crop.y, crop.width, crop.height, 0, 0, crop.width, crop.height);\n\n    var rgbValues = PIXI.hex2rgb(color);\n    var r = rgbValues[0], g = rgbValues[1], b = rgbValues[2];\n\n    var pixelData = context.getImageData(0, 0, crop.width, crop.height);\n\n    var pixels = pixelData.data;\n\n    for (var i = 0; i < pixels.length; i += 4)\n    {\n        pixels[i + 0] *= r;\n        pixels[i + 1] *= g;\n        pixels[i + 2] *= b;\n\n        if (!PIXI.CanvasTinter.canHandleAlpha)\n        {\n            var alpha = pixels[i + 3];\n\n            pixels[i + 0] /= 255 / alpha;\n            pixels[i + 1] /= 255 / alpha;\n            pixels[i + 2] /= 255 / alpha;\n        }\n    }\n\n    context.putImageData(pixelData, 0, 0);\n};\n\n/**\n * Checks if the browser correctly supports putImageData alpha channels.\n * \n * @method checkInverseAlpha\n * @static\n */\nPIXI.CanvasTinter.checkInverseAlpha = function()\n{\n    var canvas = new PIXI.CanvasBuffer(2, 1);\n\n    canvas.context.fillStyle = \"rgba(10, 20, 30, 0.5)\";\n\n    //  Draw a single pixel\n    canvas.context.fillRect(0, 0, 1, 1);\n\n    //  Get the color values\n    var s1 = canvas.context.getImageData(0, 0, 1, 1);\n\n    if (s1 === null)\n    {\n        return false;\n    }\n\n    //  Plot them to x2\n    canvas.context.putImageData(s1, 1, 0);\n\n    //  Get those values\n    var s2 = canvas.context.getImageData(1, 0, 1, 1);\n\n    //  Compare and return\n    return (s2.data[0] === s1.data[0] && s2.data[1] === s1.data[1] && s2.data[2] === s1.data[2] && s2.data[3] === s1.data[3]);\n};\n\n/**\n * If the browser isn't capable of handling tinting with alpha this will be false.\n * This property is only applicable if using tintWithPerPixel.\n *\n * @property canHandleAlpha\n * @type Boolean\n * @static\n */\nPIXI.CanvasTinter.canHandleAlpha = PIXI.CanvasTinter.checkInverseAlpha();\n\n/**\n * Whether or not the Canvas BlendModes are supported, consequently the ability to tint using the multiply method.\n *\n * @property canUseMultiply\n * @type Boolean\n * @static\n */\nPIXI.CanvasTinter.canUseMultiply = PIXI.canUseNewCanvasBlendModes();\n\n/**\n * The tinting method that will be used.\n * \n * @method tintMethod\n * @static\n */\nPIXI.CanvasTinter.tintMethod = PIXI.CanvasTinter.canUseMultiply ? PIXI.CanvasTinter.tintWithMultiply :  PIXI.CanvasTinter.tintWithPerPixel;\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n * The CanvasRenderer draws the Stage and all its content onto a 2d canvas. This renderer should be used for browsers that do not support webGL.\n * Don't forget to add the CanvasRenderer.view to your DOM or you will not see anything :)\n *\n * @class CanvasRenderer\n * @constructor\n * @param game {Phaser.Game} A reference to the Phaser Game instance\n */\nPIXI.CanvasRenderer = function (game) {\n\n    /**\n    * @property {Phaser.Game} game - A reference to the Phaser Game instance.\n    */\n    this.game = game;\n\n    if (!PIXI.defaultRenderer)\n    {\n        PIXI.defaultRenderer = this;\n    }\n\n    /**\n     * The renderer type.\n     *\n     * @property type\n     * @type Number\n     */\n    this.type = PIXI.CANVAS_RENDERER;\n\n    /**\n     * The resolution of the canvas.\n     *\n     * @property resolution\n     * @type Number\n     */\n    this.resolution = game.resolution;\n\n    /**\n     * This sets if the CanvasRenderer will clear the canvas or not before the new render pass.\n     * If the Stage is NOT transparent Pixi will use a canvas sized fillRect operation every frame to set the canvas background color.\n     * If the Stage is transparent Pixi will use clearRect to clear the canvas every frame.\n     * Disable this by setting this to false. For example if your game has a canvas filling background image you often don't need this set.\n     *\n     * @property clearBeforeRender\n     * @type Boolean\n     * @default\n     */\n    this.clearBeforeRender = game.clearBeforeRender;\n\n    /**\n     * Whether the render view is transparent\n     *\n     * @property transparent\n     * @type Boolean\n     */\n    this.transparent = game.transparent;\n\n    /**\n     * Whether the render view should be resized automatically\n     *\n     * @property autoResize\n     * @type Boolean\n     */\n    this.autoResize = false;\n\n    /**\n     * The width of the canvas view\n     *\n     * @property width\n     * @type Number\n     * @default 800\n     */\n    this.width = game.width * this.resolution;\n\n    /**\n     * The height of the canvas view\n     *\n     * @property height\n     * @type Number\n     * @default 600\n     */\n    this.height = game.height * this.resolution;\n\n    /**\n     * The canvas element that everything is drawn to.\n     *\n     * @property view\n     * @type HTMLCanvasElement\n     */\n    this.view = game.canvas;\n\n    /**\n     * The canvas 2d context that everything is drawn with\n     * @property context\n     * @type CanvasRenderingContext2D\n     */\n    this.context = this.view.getContext(\"2d\", { alpha: this.transparent } );\n\n    /**\n     * Boolean flag controlling canvas refresh.\n     *\n     * @property refresh\n     * @type Boolean\n     */\n    this.refresh = true;\n\n    /**\n     * Internal var.\n     *\n     * @property count\n     * @type Number\n     */\n    this.count = 0;\n\n    /**\n     * Instance of a PIXI.CanvasMaskManager, handles masking when using the canvas renderer\n     * @property CanvasMaskManager\n     * @type CanvasMaskManager\n     */\n    this.maskManager = new PIXI.CanvasMaskManager();\n\n    /**\n     * The render session is just a bunch of parameter used for rendering\n     * @property renderSession\n     * @type Object\n     */\n    this.renderSession = {\n        context: this.context,\n        maskManager: this.maskManager,\n        scaleMode: null,\n        smoothProperty: Phaser.Canvas.getSmoothingPrefix(this.context),\n\n        /**\n         * If true Pixi will Math.floor() x/y values when rendering, stopping pixel interpolation.\n         * Handy for crisp pixel art and speed on legacy devices.\n         */\n        roundPixels: false\n    };\n\n    this.mapBlendModes();\n    \n    this.resize(this.width, this.height);\n\n};\n\n// constructor\nPIXI.CanvasRenderer.prototype.constructor = PIXI.CanvasRenderer;\n\n/**\n * Renders the Stage to this canvas view\n *\n * @method render\n * @param stage {Stage} the Stage element to be rendered\n */\nPIXI.CanvasRenderer.prototype.render = function (stage) {\n\n    this.context.setTransform(1, 0, 0, 1, 0, 0);\n\n    this.context.globalAlpha = 1;\n\n    this.renderSession.currentBlendMode = 0;\n    this.renderSession.shakeX = this.game.camera._shake.x;\n    this.renderSession.shakeY = this.game.camera._shake.y;\n\n    this.context.globalCompositeOperation = 'source-over';\n\n    if (navigator.isCocoonJS && this.view.screencanvas)\n    {\n        this.context.fillStyle = \"black\";\n        this.context.clear();\n    }\n    \n    if (this.clearBeforeRender)\n    {\n        if (this.transparent)\n        {\n            this.context.clearRect(0, 0, this.width, this.height);\n        }\n        else\n        {\n            this.context.fillStyle = stage._bgColor.rgba;\n            this.context.fillRect(0, 0, this.width , this.height);\n        }\n    }\n    \n    this.renderDisplayObject(stage);\n\n};\n\n/**\n * Removes everything from the renderer and optionally removes the Canvas DOM element.\n *\n * @method destroy\n * @param [removeView=true] {boolean} Removes the Canvas element from the DOM.\n */\nPIXI.CanvasRenderer.prototype.destroy = function (removeView) {\n\n    if (removeView === undefined) { removeView = true; }\n\n    if (removeView && this.view.parent)\n    {\n        this.view.parent.removeChild(this.view);\n    }\n\n    this.view = null;\n    this.context = null;\n    this.maskManager = null;\n    this.renderSession = null;\n\n};\n\n/**\n * Resizes the canvas view to the specified width and height\n *\n * @method resize\n * @param width {Number} the new width of the canvas view\n * @param height {Number} the new height of the canvas view\n */\nPIXI.CanvasRenderer.prototype.resize = function (width, height) {\n\n    this.width = width * this.resolution;\n    this.height = height * this.resolution;\n\n    this.view.width = this.width;\n    this.view.height = this.height;\n\n    if (this.autoResize)\n    {\n        this.view.style.width = this.width / this.resolution + \"px\";\n        this.view.style.height = this.height / this.resolution + \"px\";\n    }\n\n    if (this.renderSession.smoothProperty)\n    {\n        this.context[this.renderSession.smoothProperty] = (this.renderSession.scaleMode === PIXI.scaleModes.LINEAR);\n    }\n\n};\n\n/**\n * Renders a display object\n *\n * @method renderDisplayObject\n * @param displayObject {DisplayObject} The displayObject to render\n * @param context {CanvasRenderingContext2D} the context 2d method of the canvas\n * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.\n * @private\n */\nPIXI.CanvasRenderer.prototype.renderDisplayObject = function (displayObject, context, matrix) {\n\n    this.renderSession.context = context || this.context;\n    this.renderSession.resolution = this.resolution;\n    displayObject._renderCanvas(this.renderSession, matrix);\n\n};\n\n/**\n * Maps Pixi blend modes to canvas blend modes.\n *\n * @method mapBlendModes\n * @private\n */\nPIXI.CanvasRenderer.prototype.mapBlendModes = function () {\n\n    if (!PIXI.blendModesCanvas)\n    {\n        var b = [];\n        var modes = PIXI.blendModes;\n        var useNew = PIXI.canUseNewCanvasBlendModes();\n\n        b[modes.NORMAL] = 'source-over';\n        b[modes.ADD] = 'lighter';\n        b[modes.MULTIPLY] = (useNew) ? 'multiply' : 'source-over';\n        b[modes.SCREEN] = (useNew) ? 'screen' : 'source-over';\n        b[modes.OVERLAY] = (useNew) ? 'overlay' : 'source-over';\n        b[modes.DARKEN] = (useNew) ? 'darken' : 'source-over';\n        b[modes.LIGHTEN] = (useNew) ? 'lighten' : 'source-over';\n        b[modes.COLOR_DODGE] = (useNew) ? 'color-dodge' : 'source-over';\n        b[modes.COLOR_BURN] = (useNew) ? 'color-burn' : 'source-over';\n        b[modes.HARD_LIGHT] = (useNew) ? 'hard-light' : 'source-over';\n        b[modes.SOFT_LIGHT] = (useNew) ? 'soft-light' : 'source-over';\n        b[modes.DIFFERENCE] = (useNew) ? 'difference' : 'source-over';\n        b[modes.EXCLUSION] = (useNew) ? 'exclusion' : 'source-over';\n        b[modes.HUE] = (useNew) ? 'hue' : 'source-over';\n        b[modes.SATURATION] = (useNew) ? 'saturation' : 'source-over';\n        b[modes.COLOR] = (useNew) ? 'color' : 'source-over';\n        b[modes.LUMINOSITY] = (useNew) ? 'luminosity' : 'source-over';\n\n        PIXI.blendModesCanvas = b;\n    }\n\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\nPIXI.BaseTextureCache = {};\n\nPIXI.BaseTextureCacheIdGenerator = 0;\n\n/**\n * A texture stores the information that represents an image. All textures have a base texture.\n *\n * @class BaseTexture\n * @uses EventTarget\n * @constructor\n * @param source {String} the source object (image or canvas)\n * @param scaleMode {Number} See {{#crossLink \"PIXI/scaleModes:property\"}}PIXI.scaleModes{{/crossLink}} for possible values\n */\nPIXI.BaseTexture = function(source, scaleMode)\n{\n    /**\n     * The Resolution of the texture. \n     *\n     * @property resolution\n     * @type Number\n     */\n    this.resolution = 1;\n    \n    /**\n     * [read-only] The width of the base texture set when the image has loaded\n     *\n     * @property width\n     * @type Number\n     * @readOnly\n     */\n    this.width = 100;\n\n    /**\n     * [read-only] The height of the base texture set when the image has loaded\n     *\n     * @property height\n     * @type Number\n     * @readOnly\n     */\n    this.height = 100;\n\n    /**\n     * The scale mode to apply when scaling this texture\n     * \n     * @property scaleMode\n     * @type {Number}\n     * @default PIXI.scaleModes.LINEAR\n     */\n    this.scaleMode = scaleMode || PIXI.scaleModes.DEFAULT;\n\n    /**\n     * [read-only] Set to true once the base texture has loaded\n     *\n     * @property hasLoaded\n     * @type Boolean\n     * @readOnly\n     */\n    this.hasLoaded = false;\n\n    /**\n     * The image source that is used to create the texture.\n     *\n     * @property source\n     * @type Image\n     */\n    this.source = source;\n\n    this._UID = PIXI._UID++;\n\n    /**\n     * Controls if RGB channels should be pre-multiplied by Alpha  (WebGL only)\n     *\n     * @property premultipliedAlpha\n     * @type Boolean\n     * @default true\n     */\n    this.premultipliedAlpha = true;\n\n    // used for webGL\n\n    /**\n     * @property _glTextures\n     * @type Array\n     * @private\n     */\n    this._glTextures = [];\n\n    /**\n     * Set this to true if a mipmap of this texture needs to be generated. This value needs to be set before the texture is used\n     * Also the texture must be a power of two size to work\n     * \n     * @property mipmap\n     * @type {Boolean}\n     */\n    this.mipmap = false;\n\n    /**\n     * @property _dirty\n     * @type Array\n     * @private\n     */\n    this._dirty = [true, true, true, true];\n\n    if (!source)\n    {\n        return;\n    }\n\n    if ((this.source.complete || this.source.getContext) && this.source.width && this.source.height)\n    {\n        this.hasLoaded = true;\n        this.width = this.source.naturalWidth || this.source.width;\n        this.height = this.source.naturalHeight || this.source.height;\n        this.dirty();\n    }\n\n    /**\n     * A BaseTexture can be set to skip the rendering phase in the WebGL Sprite Batch.\n     * \n     * You may want to do this if you have a parent Sprite with no visible texture (i.e. uses the internal `__default` texture)\n     * that has children that you do want to render, without causing a batch flush in the process.\n     * \n     * @property skipRender\n     * @type Boolean\n     */\n    this.skipRender = false;\n\n    /**\n     * @property imageUrl\n     * @type String\n     */\n    this.imageUrl = null;\n\n    /**\n     * @property _powerOf2\n     * @type Boolean\n     * @private\n     */\n    this._powerOf2 = false;\n\n};\n\nPIXI.BaseTexture.prototype.constructor = PIXI.BaseTexture;\n\n/**\n * Forces this BaseTexture to be set as loaded, with the given width and height.\n * Then calls BaseTexture.dirty.\n * Important for when you don't want to modify the source object by forcing in `complete` or dimension properties it may not have.\n *\n * @method forceLoaded\n * @param {number} width - The new width to force the BaseTexture to be.\n * @param {number} height - The new height to force the BaseTexture to be.\n */\nPIXI.BaseTexture.prototype.forceLoaded = function(width, height)\n{\n    this.hasLoaded = true;\n    this.width = width;\n    this.height = height;\n    this.dirty();\n\n};\n\n/**\n * Destroys this base texture\n *\n * @method destroy\n */\nPIXI.BaseTexture.prototype.destroy = function()\n{\n    if (this.imageUrl)\n    {\n        delete PIXI.BaseTextureCache[this.imageUrl];\n        delete PIXI.TextureCache[this.imageUrl];\n\n        this.imageUrl = null;\n\n        if (!navigator.isCocoonJS) this.source.src = '';\n    }\n    else if (this.source)\n    {\n        PIXI.CanvasPool.removeByCanvas(this.source);\n\n        if (this.source._pixiId)\n        {\n            delete PIXI.BaseTextureCache[this.source._pixiId];\n        }\n    }\n\n    this.source = null;\n\n    this.unloadFromGPU();\n};\n\n/**\n * Changes the source image of the texture\n *\n * @method updateSourceImage\n * @param newSrc {String} the path of the image\n */\nPIXI.BaseTexture.prototype.updateSourceImage = function(newSrc)\n{\n    this.hasLoaded = false;\n    this.source.src = null;\n    this.source.src = newSrc;\n};\n\n/**\n * Sets all glTextures to be dirty.\n *\n * @method dirty\n */\nPIXI.BaseTexture.prototype.dirty = function()\n{\n    for (var i = 0; i < this._glTextures.length; i++)\n    {\n        this._dirty[i] = true;\n    }\n};\n\n/**\n * Removes the base texture from the GPU, useful for managing resources on the GPU.\n * Atexture is still 100% usable and will simply be reuploaded if there is a sprite on screen that is using it.\n *\n * @method unloadFromGPU\n */\nPIXI.BaseTexture.prototype.unloadFromGPU = function()\n{\n    this.dirty();\n\n    // delete the webGL textures if any.\n    for (var i = this._glTextures.length - 1; i >= 0; i--)\n    {\n        var glTexture = this._glTextures[i];\n        var gl = PIXI.glContexts[i];\n\n        if(gl && glTexture)\n        {\n            gl.deleteTexture(glTexture);\n        }\n        \n    }\n\n    this._glTextures.length = 0;\n\n    this.dirty();\n};\n\n/**\n * Helper function that creates a base texture from the given image url.\n * If the image is not in the base texture cache it will be created and loaded.\n *\n * @static\n * @method fromImage\n * @param imageUrl {String} The image url of the texture\n * @param crossorigin {Boolean}\n * @param scaleMode {Number} See {{#crossLink \"PIXI/scaleModes:property\"}}PIXI.scaleModes{{/crossLink}} for possible values\n * @return {BaseTexture}\n */\nPIXI.BaseTexture.fromImage = function(imageUrl, crossorigin, scaleMode)\n{\n    var baseTexture = PIXI.BaseTextureCache[imageUrl];\n\n    if(crossorigin === undefined && imageUrl.indexOf('data:') === -1) crossorigin = true;\n\n    if(!baseTexture)\n    {\n        // new Image() breaks tex loading in some versions of Chrome.\n        // See https://code.google.com/p/chromium/issues/detail?id=238071\n        var image = new Image();\n\n        if (crossorigin)\n        {\n            image.crossOrigin = '';\n        }\n\n        image.src = imageUrl;\n        baseTexture = new PIXI.BaseTexture(image, scaleMode);\n        baseTexture.imageUrl = imageUrl;\n        PIXI.BaseTextureCache[imageUrl] = baseTexture;\n\n        // if there is an @2x at the end of the url we are going to assume its a highres image\n        if( imageUrl.indexOf(PIXI.RETINA_PREFIX + '.') !== -1)\n        {\n            baseTexture.resolution = 2;\n        }\n    }\n\n    return baseTexture;\n};\n\n/**\n * Helper function that creates a base texture from the given canvas element.\n *\n * @static\n * @method fromCanvas\n * @param canvas {Canvas} The canvas element source of the texture\n * @param scaleMode {Number} See {{#crossLink \"PIXI/scaleModes:property\"}}PIXI.scaleModes{{/crossLink}} for possible values\n * @return {BaseTexture}\n */\nPIXI.BaseTexture.fromCanvas = function(canvas, scaleMode)\n{\n    if (!canvas._pixiId)\n    {\n        canvas._pixiId = 'canvas_' + PIXI.TextureCacheIdGenerator++;\n    }\n\n    if (canvas.width === 0)\n    {\n        canvas.width = 1;\n    }\n\n    if (canvas.height === 0)\n    {\n        canvas.height = 1;\n    }\n\n    var baseTexture = PIXI.BaseTextureCache[canvas._pixiId];\n\n    if (!baseTexture)\n    {\n        baseTexture = new PIXI.BaseTexture(canvas, scaleMode);\n        PIXI.BaseTextureCache[canvas._pixiId] = baseTexture;\n    }\n\n    return baseTexture;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\nPIXI.TextureCache = {};\nPIXI.FrameCache = {};\n\n/**\n * TextureSilentFail is a boolean that defaults to `false`. \n * If `true` then `PIXI.Texture.setFrame` will no longer throw an error if the texture dimensions are incorrect. \n * Instead `Texture.valid` will be set to `false` (#1556)\n *\n * @type {boolean}\n */\nPIXI.TextureSilentFail = false;\n\nPIXI.TextureCacheIdGenerator = 0;\n\n/**\n * A texture stores the information that represents an image or part of an image. It cannot be added\n * to the display list directly. Instead use it as the texture for a PIXI.Sprite. If no frame is provided then the whole image is used.\n *\n * @class Texture\n * @uses EventTarget\n * @constructor\n * @param baseTexture {BaseTexture} The base texture source to create the texture from\n * @param frame {Rectangle} The rectangle frame of the texture to show\n * @param [crop] {Rectangle} The area of original texture \n * @param [trim] {Rectangle} Trimmed texture rectangle\n */\nPIXI.Texture = function(baseTexture, frame, crop, trim)\n{\n    /**\n     * Does this Texture have any frame data assigned to it?\n     *\n     * @property noFrame\n     * @type Boolean\n     */\n    this.noFrame = false;\n\n    if (!frame)\n    {\n        this.noFrame = true;\n        frame = new PIXI.Rectangle(0,0,1,1);\n    }\n\n    if (baseTexture instanceof PIXI.Texture)\n    {\n        baseTexture = baseTexture.baseTexture;\n    }\n\n    /**\n     * The base texture that this texture uses.\n     *\n     * @property baseTexture\n     * @type BaseTexture\n     */\n    this.baseTexture = baseTexture;\n\n    /**\n     * The frame specifies the region of the base texture that this texture uses\n     *\n     * @property frame\n     * @type Rectangle\n     */\n    this.frame = frame;\n\n    /**\n     * The texture trim data.\n     *\n     * @property trim\n     * @type Rectangle\n     */\n    this.trim = trim;\n\n    /**\n     * This will let the renderer know if the texture is valid. If it's not then it cannot be rendered.\n     *\n     * @property valid\n     * @type Boolean\n     */\n    this.valid = false;\n\n    /**\n     * Is this a tiling texture? As used by the likes of a TilingSprite.\n     *\n     * @property isTiling\n     * @type Boolean\n     */\n    this.isTiling = false;\n\n    /**\n     * This will let a renderer know that a texture has been updated (used mainly for webGL uv updates)\n     *\n     * @property requiresUpdate\n     * @type Boolean\n     */\n    this.requiresUpdate = false;\n\n    /**\n     * This will let a renderer know that a tinted parent has updated its texture.\n     *\n     * @property requiresReTint\n     * @type Boolean\n     */\n    this.requiresReTint = false;\n\n    /**\n     * The WebGL UV data cache.\n     *\n     * @property _uvs\n     * @type Object\n     * @private\n     */\n    this._uvs = null;\n\n    /**\n     * The width of the Texture in pixels.\n     *\n     * @property width\n     * @type Number\n     */\n    this.width = 0;\n\n    /**\n     * The height of the Texture in pixels.\n     *\n     * @property height\n     * @type Number\n     */\n    this.height = 0;\n\n    /**\n     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,\n     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)\n     *\n     * @property crop\n     * @type Rectangle\n     */\n    this.crop = crop || new PIXI.Rectangle(0, 0, 1, 1);\n\n    if (baseTexture.hasLoaded)\n    {\n        if (this.noFrame) frame = new PIXI.Rectangle(0, 0, baseTexture.width, baseTexture.height);\n        this.setFrame(frame);\n    }\n\n};\n\nPIXI.Texture.prototype.constructor = PIXI.Texture;\n\n/**\n * Called when the base texture is loaded\n *\n * @method onBaseTextureLoaded\n * @private\n */\nPIXI.Texture.prototype.onBaseTextureLoaded = function()\n{\n    var baseTexture = this.baseTexture;\n\n    if (this.noFrame)\n    {\n        this.frame = new PIXI.Rectangle(0, 0, baseTexture.width, baseTexture.height);\n    }\n\n    this.setFrame(this.frame);\n};\n\n/**\n * Destroys this texture\n *\n * @method destroy\n * @param destroyBase {Boolean} Whether to destroy the base texture as well\n */\nPIXI.Texture.prototype.destroy = function(destroyBase)\n{\n    if (destroyBase) this.baseTexture.destroy();\n\n    this.valid = false;\n};\n\n/**\n * Specifies the region of the baseTexture that this texture will use.\n *\n * @method setFrame\n * @param frame {Rectangle} The frame of the texture to set it to\n */\nPIXI.Texture.prototype.setFrame = function(frame)\n{\n    this.noFrame = false;\n\n    this.frame = frame;\n    this.width = frame.width;\n    this.height = frame.height;\n\n    this.crop.x = frame.x;\n    this.crop.y = frame.y;\n    this.crop.width = frame.width;\n    this.crop.height = frame.height;\n\n    if (!this.trim && (frame.x + frame.width > this.baseTexture.width || frame.y + frame.height > this.baseTexture.height))\n    {\n        if (!PIXI.TextureSilentFail)\n        {\n            throw new Error('Texture Error: frame does not fit inside the base Texture dimensions ' + this);\n        }\n\n        this.valid = false;\n        return;\n    }\n\n    this.valid = frame && frame.width && frame.height && this.baseTexture.source && this.baseTexture.hasLoaded;\n\n    if (this.trim)\n    {\n        this.width = this.trim.width;\n        this.height = this.trim.height;\n        this.frame.width = this.trim.width;\n        this.frame.height = this.trim.height;\n    }\n    \n    if (this.valid) this._updateUvs();\n\n};\n\n/**\n * Updates the internal WebGL UV cache.\n *\n * @method _updateUvs\n * @private\n */\nPIXI.Texture.prototype._updateUvs = function()\n{\n    if(!this._uvs)this._uvs = new PIXI.TextureUvs();\n\n    var frame = this.crop;\n    var tw = this.baseTexture.width;\n    var th = this.baseTexture.height;\n    \n    this._uvs.x0 = frame.x / tw;\n    this._uvs.y0 = frame.y / th;\n\n    this._uvs.x1 = (frame.x + frame.width) / tw;\n    this._uvs.y1 = frame.y / th;\n\n    this._uvs.x2 = (frame.x + frame.width) / tw;\n    this._uvs.y2 = (frame.y + frame.height) / th;\n\n    this._uvs.x3 = frame.x / tw;\n    this._uvs.y3 = (frame.y + frame.height) / th;\n};\n\n/**\n * Helper function that creates a Texture object from the given image url.\n * If the image is not in the texture cache it will be  created and loaded.\n *\n * @static\n * @method fromImage\n * @param imageUrl {String} The image url of the texture\n * @param crossorigin {Boolean} Whether requests should be treated as crossorigin\n * @param scaleMode {Number} See {{#crossLink \"PIXI/scaleModes:property\"}}PIXI.scaleModes{{/crossLink}} for possible values\n * @return {Texture}\n */\nPIXI.Texture.fromImage = function(imageUrl, crossorigin, scaleMode)\n{\n    var texture = PIXI.TextureCache[imageUrl];\n\n    if(!texture)\n    {\n        texture = new PIXI.Texture(PIXI.BaseTexture.fromImage(imageUrl, crossorigin, scaleMode));\n        PIXI.TextureCache[imageUrl] = texture;\n    }\n\n    return texture;\n};\n\n/**\n * Helper function that returns a Texture objected based on the given frame id.\n * If the frame id is not in the texture cache an error will be thrown.\n *\n * @static\n * @method fromFrame\n * @param frameId {String} The frame id of the texture\n * @return {Texture}\n */\nPIXI.Texture.fromFrame = function(frameId)\n{\n    var texture = PIXI.TextureCache[frameId];\n    if(!texture) throw new Error('The frameId \"' + frameId + '\" does not exist in the texture cache ');\n    return texture;\n};\n\n/**\n * Helper function that creates a new a Texture based on the given canvas element.\n *\n * @static\n * @method fromCanvas\n * @param canvas {Canvas} The canvas element source of the texture\n * @param scaleMode {Number} See {{#crossLink \"PIXI/scaleModes:property\"}}PIXI.scaleModes{{/crossLink}} for possible values\n * @return {Texture}\n */\nPIXI.Texture.fromCanvas = function(canvas, scaleMode)\n{\n    var baseTexture = PIXI.BaseTexture.fromCanvas(canvas, scaleMode);\n\n    return new PIXI.Texture(baseTexture);\n};\n\n/**\n * Adds a texture to the global PIXI.TextureCache. This cache is shared across the whole PIXI object.\n *\n * @static\n * @method addTextureToCache\n * @param texture {Texture} The Texture to add to the cache.\n * @param id {String} The id that the texture will be stored against.\n */\nPIXI.Texture.addTextureToCache = function(texture, id)\n{\n    PIXI.TextureCache[id] = texture;\n};\n\n/**\n * Remove a texture from the global PIXI.TextureCache.\n *\n * @static\n * @method removeTextureFromCache\n * @param id {String} The id of the texture to be removed\n * @return {Texture} The texture that was removed\n */\nPIXI.Texture.removeTextureFromCache = function(id)\n{\n    var texture = PIXI.TextureCache[id];\n    delete PIXI.TextureCache[id];\n    delete PIXI.BaseTextureCache[id];\n    return texture;\n};\n\nPIXI.TextureUvs = function()\n{\n    this.x0 = 0;\n    this.y0 = 0;\n\n    this.x1 = 0;\n    this.y1 = 0;\n\n    this.x2 = 0;\n    this.y2 = 0;\n\n    this.x3 = 0;\n    this.y3 = 0;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n * A RenderTexture is a special texture that allows any Pixi display object to be rendered to it.\n *\n * __Hint__: All DisplayObjects (i.e. Sprites) that render to a RenderTexture should be preloaded otherwise black rectangles will be drawn instead.\n *\n * A RenderTexture takes a snapshot of any Display Object given to its render method. The position and rotation of the given Display Objects is ignored. For example:\n *\n *    var renderTexture = new PIXI.RenderTexture(800, 600);\n *    var sprite = PIXI.Sprite.fromImage(\"spinObj_01.png\");\n *    sprite.position.x = 800/2;\n *    sprite.position.y = 600/2;\n *    sprite.anchor.x = 0.5;\n *    sprite.anchor.y = 0.5;\n *    renderTexture.render(sprite);\n *\n * The Sprite in this case will be rendered to a position of 0,0. To render this sprite at its actual position a DisplayObjectContainer should be used:\n *\n *    var doc = new PIXI.DisplayObjectContainer();\n *    doc.addChild(sprite);\n *    renderTexture.render(doc);  // Renders to center of renderTexture\n *\n * @class RenderTexture\n * @extends Texture\n * @constructor\n * @param width {Number} The width of the render texture\n * @param height {Number} The height of the render texture\n * @param renderer {CanvasRenderer|WebGLRenderer} The renderer used for this RenderTexture\n * @param scaleMode {Number} See {{#crossLink \"PIXI/scaleModes:property\"}}PIXI.scaleModes{{/crossLink}} for possible values\n * @param resolution {Number} The resolution of the texture being generated\n */\nPIXI.RenderTexture = function(width, height, renderer, scaleMode, resolution)\n{\n    /**\n     * The with of the render texture\n     *\n     * @property width\n     * @type Number\n     */\n    this.width = width || 100;\n\n    /**\n     * The height of the render texture\n     *\n     * @property height\n     * @type Number\n     */\n    this.height = height || 100;\n\n    /**\n     * The Resolution of the texture.\n     *\n     * @property resolution\n     * @type Number\n     */\n    this.resolution = resolution || 1;\n\n    /**\n     * The framing rectangle of the render texture\n     *\n     * @property frame\n     * @type Rectangle\n     */\n    this.frame = new PIXI.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution);\n\n    /**\n     * This is the area of the BaseTexture image to actually copy to the Canvas / WebGL when rendering,\n     * irrespective of the actual frame size or placement (which can be influenced by trimmed texture atlases)\n     *\n     * @property crop\n     * @type Rectangle\n     */\n    this.crop = new PIXI.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution);\n\n    /**\n     * The base texture object that this texture uses\n     *\n     * @property baseTexture\n     * @type BaseTexture\n     */\n    this.baseTexture = new PIXI.BaseTexture();\n    this.baseTexture.width = this.width * this.resolution;\n    this.baseTexture.height = this.height * this.resolution;\n    this.baseTexture._glTextures = [];\n    this.baseTexture.resolution = this.resolution;\n\n    this.baseTexture.scaleMode = scaleMode || PIXI.scaleModes.DEFAULT;\n\n    this.baseTexture.hasLoaded = true;\n\n    PIXI.Texture.call(this,\n        this.baseTexture,\n        new PIXI.Rectangle(0, 0, this.width * this.resolution, this.height * this.resolution)\n    );\n\n    /**\n     * The renderer this RenderTexture uses. A RenderTexture can only belong to one renderer at the moment if its webGL.\n     *\n     * @property renderer\n     * @type CanvasRenderer|WebGLRenderer\n     */\n    this.renderer = renderer || PIXI.defaultRenderer;\n\n    if (this.renderer.type === PIXI.WEBGL_RENDERER)\n    {\n        var gl = this.renderer.gl;\n        this.baseTexture._dirty[gl.id] = false;\n\n        this.textureBuffer = new PIXI.FilterTexture(gl, this.width, this.height, this.baseTexture.scaleMode);\n        this.baseTexture._glTextures[gl.id] =  this.textureBuffer.texture;\n\n        this.render = this.renderWebGL;\n        this.projection = new PIXI.Point(this.width * 0.5, -this.height * 0.5);\n    }\n    else\n    {\n        this.render = this.renderCanvas;\n        this.textureBuffer = new PIXI.CanvasBuffer(this.width * this.resolution, this.height * this.resolution);\n        this.baseTexture.source = this.textureBuffer.canvas;\n    }\n\n    /**\n     * @property valid\n     * @type Boolean\n     */\n    this.valid = true;\n\n    this.tempMatrix = new Phaser.Matrix();\n\n    this._updateUvs();\n};\n\nPIXI.RenderTexture.prototype = Object.create(PIXI.Texture.prototype);\nPIXI.RenderTexture.prototype.constructor = PIXI.RenderTexture;\n\n/**\n * Resizes the RenderTexture.\n *\n * @method resize\n * @param width {Number} The width to resize to.\n * @param height {Number} The height to resize to.\n * @param updateBase {Boolean} Should the baseTexture.width and height values be resized as well?\n */\nPIXI.RenderTexture.prototype.resize = function(width, height, updateBase)\n{\n    if (width === this.width && height === this.height)return;\n\n    this.valid = (width > 0 && height > 0);\n\n    this.width = width;\n    this.height = height;\n    this.frame.width = this.crop.width = width * this.resolution;\n    this.frame.height = this.crop.height = height * this.resolution;\n\n    if (updateBase)\n    {\n        this.baseTexture.width = this.width * this.resolution;\n        this.baseTexture.height = this.height * this.resolution;\n    }\n\n    if (this.renderer.type === PIXI.WEBGL_RENDERER)\n    {\n        this.projection.x = this.width / 2;\n        this.projection.y = -this.height / 2;\n    }\n\n    if(!this.valid)return;\n\n    this.textureBuffer.resize(this.width, this.height);\n};\n\n/**\n * Clears the RenderTexture.\n *\n * @method clear\n */\nPIXI.RenderTexture.prototype.clear = function()\n{\n    if (!this.valid)\n    {\n        return;\n    }\n\n    if (this.renderer.type === PIXI.WEBGL_RENDERER)\n    {\n        this.renderer.gl.bindFramebuffer(this.renderer.gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);\n    }\n\n    this.textureBuffer.clear();\n};\n\n/**\n * This function will draw the display object to the texture.\n *\n * @method renderWebGL\n * @param displayObject {DisplayObject} The display object to render this texture on\n * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.\n * @param [clear] {Boolean} If true the texture will be cleared before the displayObject is drawn\n * @private\n */\nPIXI.RenderTexture.prototype.renderWebGL = function(displayObject, matrix, clear)\n{\n    if (!this.valid || displayObject.alpha === 0)\n    {\n        return;\n    }\n   \n    //  Let's create a nice matrix to apply to our display object.\n    //  Frame buffers come in upside down so we need to flip the matrix.\n    var wt = displayObject.worldTransform;\n    wt.identity();\n    wt.translate(0, this.projection.y * 2);\n\n    if (matrix)\n    {\n        wt.append(matrix);\n    }\n\n    wt.scale(1, -1);\n\n    //  Time to update all the children of the displayObject with the new matrix.\n    for (var i = 0; i < displayObject.children.length; i++)\n    {\n        displayObject.children[i].updateTransform();\n    }\n    \n    //  Time for the webGL fun stuff!\n    var gl = this.renderer.gl;\n\n    gl.viewport(0, 0, this.width * this.resolution, this.height * this.resolution);\n\n    gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureBuffer.frameBuffer );\n\n    if (clear)\n    {\n        this.textureBuffer.clear();\n    }\n\n    this.renderer.spriteBatch.dirty = true;\n\n    this.renderer.renderDisplayObject(displayObject, this.projection, this.textureBuffer.frameBuffer, matrix);\n\n    this.renderer.spriteBatch.dirty = true;\n\n};\n\n/**\n * This function will draw the display object to the texture.\n *\n * @method renderCanvas\n * @param displayObject {DisplayObject} The display object to render this texture on\n * @param [matrix] {Matrix} Optional matrix to apply to the display object before rendering.\n * @param [clear] {Boolean} If true the texture will be cleared before the displayObject is drawn\n * @private\n */\nPIXI.RenderTexture.prototype.renderCanvas = function(displayObject, matrix, clear)\n{\n    if (!this.valid || displayObject.alpha === 0)\n    {\n        return;\n    }\n\n    //  Let's create a nice matrix to apply to our display object.\n    //  Frame buffers come in upside down so we need to flip the matrix.\n    var wt = displayObject.worldTransform;\n    wt.identity();\n\n    if (matrix)\n    {\n        wt.append(matrix);\n    }\n\n    // Time to update all the children of the displayObject with the new matrix (what new matrix? there isn't one!)\n    for (var i = 0; i < displayObject.children.length; i++)\n    {\n        displayObject.children[i].updateTransform();\n    }\n\n    if (clear)\n    {\n        this.textureBuffer.clear();\n    }\n\n    var realResolution = this.renderer.resolution;\n\n    this.renderer.resolution = this.resolution;\n\n    this.renderer.renderDisplayObject(displayObject, this.textureBuffer.context, matrix);\n\n    this.renderer.resolution = realResolution;\n};\n\n/**\n * Will return a HTML Image of the texture\n *\n * @method getImage\n * @return {Image}\n */\nPIXI.RenderTexture.prototype.getImage = function()\n{\n    var image = new Image();\n    image.src = this.getBase64();\n    return image;\n};\n\n/**\n * Will return a base64 encoded string of this texture. It works by calling RenderTexture.getCanvas and then running toDataURL on that.\n *\n * @method getBase64\n * @return {String} A base64 encoded string of the texture.\n */\nPIXI.RenderTexture.prototype.getBase64 = function()\n{\n    return this.getCanvas().toDataURL();\n};\n\n/**\n * Creates a Canvas element, renders this RenderTexture to it and then returns it.\n *\n * @method getCanvas\n * @return {HTMLCanvasElement} A Canvas element with the texture rendered on.\n */\nPIXI.RenderTexture.prototype.getCanvas = function()\n{\n    if (this.renderer.type === PIXI.WEBGL_RENDERER)\n    {\n        var gl =  this.renderer.gl;\n        var width = this.textureBuffer.width;\n        var height = this.textureBuffer.height;\n\n        var webGLPixels = new Uint8Array(4 * width * height);\n\n        gl.bindFramebuffer(gl.FRAMEBUFFER, this.textureBuffer.frameBuffer);\n        gl.readPixels(0, 0, width, height, gl.RGBA, gl.UNSIGNED_BYTE, webGLPixels);\n        gl.bindFramebuffer(gl.FRAMEBUFFER, null);\n\n        var tempCanvas = new PIXI.CanvasBuffer(width, height);\n        var canvasData = tempCanvas.context.getImageData(0, 0, width, height);\n        canvasData.data.set(webGLPixels);\n\n        tempCanvas.context.putImageData(canvasData, 0, 0);\n\n        return tempCanvas.canvas;\n    }\n    else\n    {\n        return this.textureBuffer.canvas;\n    }\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n/**\n * This is the base class for creating a PIXI filter. Currently only webGL supports filters.\n * If you want to make a custom filter this should be your base class.\n * \n * @class AbstractFilter\n * @constructor\n * @param fragmentSrc {Array} The fragment source in an array of strings.\n * @param uniforms {Object} An object containing the uniforms for this filter.\n */\nPIXI.AbstractFilter = function(fragmentSrc, uniforms)\n{\n    /**\n    * An array of passes - some filters contain a few steps this array simply stores the steps in a liniear fashion.\n    * For example the blur filter has two passes blurX and blurY.\n    * @property passes\n    * @type Array\n    * @private\n    */\n    this.passes = [this];\n\n    /**\n    * @property shaders\n    * @type Array\n    * @private\n    */\n    this.shaders = [];\n    \n    /**\n    * @property dirty\n    * @type Boolean\n    */\n    this.dirty = true;\n\n    /**\n    * @property padding\n    * @type Number\n    */\n    this.padding = 0;\n\n    /**\n    * @property uniforms\n    * @type Object\n    * @private\n    */\n    this.uniforms = uniforms || {};\n\n    /**\n    * @property fragmentSrc\n    * @type Array\n    * @private\n    */\n    this.fragmentSrc = fragmentSrc || [];\n};\n\nPIXI.AbstractFilter.prototype.constructor = PIXI.AbstractFilter;\n\n/**\n * Syncs the uniforms between the class object and the shaders.\n *\n * @method syncUniforms\n */\nPIXI.AbstractFilter.prototype.syncUniforms = function()\n{\n    for(var i=0,j=this.shaders.length; i<j; i++)\n    {\n        this.shaders[i].dirty = true;\n    }\n};\n\n/**\n * @author Mat Groves http://matgroves.com/\n */\n\n /**\n *\n * @class Strip\n * @extends DisplayObjectContainer\n * @constructor\n * @param texture {Texture} The texture to use\n * @param width {Number} the width\n * @param height {Number} the height\n *\n */\nPIXI.Strip = function(texture)\n{\n    PIXI.DisplayObjectContainer.call( this );\n\n\n    /**\n     * The texture of the strip\n     *\n     * @property texture\n     * @type Texture\n     */\n    this.texture = texture;\n\n    // set up the main bits..\n    this.uvs = new PIXI.Float32Array([0, 1,\n                                      1, 1,\n                                      1, 0,\n                                      0, 1]);\n\n    this.vertices = new PIXI.Float32Array([0, 0,\n                                            100, 0,\n                                            100, 100,\n                                            0, 100]);\n\n    this.colors = new PIXI.Float32Array([1, 1, 1, 1]);\n\n    this.indices = new PIXI.Uint16Array([0, 1, 2, 3]);\n\n    /**\n     * Whether the strip is dirty or not\n     *\n     * @property dirty\n     * @type Boolean\n     */\n    this.dirty = true;\n\n    /**\n     * The blend mode to be applied to the sprite. Set to PIXI.blendModes.NORMAL to remove any blend mode.\n     *\n     * @property blendMode\n     * @type Number\n     * @default PIXI.blendModes.NORMAL;\n     */\n    this.blendMode = PIXI.blendModes.NORMAL;\n\n    /**\n     * Triangles in canvas mode are automatically antialiased, use this value to force triangles to overlap a bit with each other.\n     *\n     * @property canvasPadding\n     * @type Number\n     */\n    this.canvasPadding = 0;\n\n    this.drawMode = PIXI.Strip.DrawModes.TRIANGLE_STRIP;\n\n};\n\n// constructor\nPIXI.Strip.prototype = Object.create(PIXI.DisplayObjectContainer.prototype);\nPIXI.Strip.prototype.constructor = PIXI.Strip;\n\nPIXI.Strip.prototype._renderWebGL = function(renderSession)\n{\n    // if the sprite is not visible or the alpha is 0 then no need to render this element\n    if(!this.visible || this.alpha <= 0)return;\n    // render triangle strip..\n\n    renderSession.spriteBatch.stop();\n\n    // init! init!\n    if(!this._vertexBuffer)this._initWebGL(renderSession);\n\n    renderSession.shaderManager.setShader(renderSession.shaderManager.stripShader);\n\n    this._renderStrip(renderSession);\n\n    ///renderSession.shaderManager.activateDefaultShader();\n\n    renderSession.spriteBatch.start();\n\n    //TODO check culling\n};\n\nPIXI.Strip.prototype._initWebGL = function(renderSession)\n{\n    // build the strip!\n    var gl = renderSession.gl;\n\n    this._vertexBuffer = gl.createBuffer();\n    this._indexBuffer = gl.createBuffer();\n    this._uvBuffer = gl.createBuffer();\n    this._colorBuffer = gl.createBuffer();\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);\n    gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.DYNAMIC_DRAW);\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this._uvBuffer);\n    gl.bufferData(gl.ARRAY_BUFFER,  this.uvs, gl.STATIC_DRAW);\n\n    gl.bindBuffer(gl.ARRAY_BUFFER, this._colorBuffer);\n    gl.bufferData(gl.ARRAY_BUFFER, this.colors, gl.STATIC_DRAW);\n\n    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);\n    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);\n};\n\nPIXI.Strip.prototype._renderStrip = function(renderSession)\n{\n    var gl = renderSession.gl;\n    var projection = renderSession.projection,\n        offset = renderSession.offset,\n        shader = renderSession.shaderManager.stripShader;\n\n    var drawMode = this.drawMode === PIXI.Strip.DrawModes.TRIANGLE_STRIP ? gl.TRIANGLE_STRIP : gl.TRIANGLES;\n\n    // gl.uniformMatrix4fv(shaderProgram.mvMatrixUniform, false, mat4Real);\n\n    renderSession.blendModeManager.setBlendMode(this.blendMode);\n\n\n    // set uniforms\n    gl.uniformMatrix3fv(shader.translationMatrix, false, this.worldTransform.toArray(true));\n    gl.uniform2f(shader.projectionVector, projection.x, -projection.y);\n    gl.uniform2f(shader.offsetVector, -offset.x, -offset.y);\n    gl.uniform1f(shader.alpha, this.worldAlpha);\n\n    if(!this.dirty)\n    {\n\n        gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);\n        gl.bufferSubData(gl.ARRAY_BUFFER, 0, this.vertices);\n        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 0, 0);\n\n        // update the uvs\n        gl.bindBuffer(gl.ARRAY_BUFFER, this._uvBuffer);\n        gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, 0, 0);\n\n        gl.activeTexture(gl.TEXTURE0);\n\n        // check if a texture is dirty..\n        if(this.texture.baseTexture._dirty[gl.id])\n        {\n            renderSession.renderer.updateTexture(this.texture.baseTexture);\n        }\n        else\n        {\n            // bind the current texture\n            gl.bindTexture(gl.TEXTURE_2D, this.texture.baseTexture._glTextures[gl.id]);\n        }\n\n        // dont need to upload!\n        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);\n\n\n    }\n    else\n    {\n\n        this.dirty = false;\n        gl.bindBuffer(gl.ARRAY_BUFFER, this._vertexBuffer);\n        gl.bufferData(gl.ARRAY_BUFFER, this.vertices, gl.STATIC_DRAW);\n        gl.vertexAttribPointer(shader.aVertexPosition, 2, gl.FLOAT, false, 0, 0);\n\n        // update the uvs\n        gl.bindBuffer(gl.ARRAY_BUFFER, this._uvBuffer);\n        gl.bufferData(gl.ARRAY_BUFFER, this.uvs, gl.STATIC_DRAW);\n        gl.vertexAttribPointer(shader.aTextureCoord, 2, gl.FLOAT, false, 0, 0);\n\n        gl.activeTexture(gl.TEXTURE0);\n\n        // check if a texture is dirty..\n        if(this.texture.baseTexture._dirty[gl.id])\n        {\n            renderSession.renderer.updateTexture(this.texture.baseTexture);\n        }\n        else\n        {\n            gl.bindTexture(gl.TEXTURE_2D, this.texture.baseTexture._glTextures[gl.id]);\n        }\n\n        // dont need to upload!\n        gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, this._indexBuffer);\n        gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, this.indices, gl.STATIC_DRAW);\n\n    }\n    //console.log(gl.TRIANGLE_STRIP)\n    //\n    //\n    gl.drawElements(drawMode, this.indices.length, gl.UNSIGNED_SHORT, 0);\n\n\n};\n\n\n\nPIXI.Strip.prototype._renderCanvas = function(renderSession)\n{\n    var context = renderSession.context;\n\n    var transform = this.worldTransform;\n\n    var tx = (transform.tx * renderSession.resolution) + renderSession.shakeX;\n    var ty = (transform.ty * renderSession.resolution) + renderSession.shakeY;\n\n    if (renderSession.roundPixels)\n    {\n        context.setTransform(transform.a, transform.b, transform.c, transform.d, tx | 0, ty | 0);\n    }\n    else\n    {\n        context.setTransform(transform.a, transform.b, transform.c, transform.d, tx, ty);\n    }\n\n    if (this.drawMode === PIXI.Strip.DrawModes.TRIANGLE_STRIP)\n    {\n        this._renderCanvasTriangleStrip(context);\n    }\n    else\n    {\n        this._renderCanvasTriangles(context);\n    }\n};\n\nPIXI.Strip.prototype._renderCanvasTriangleStrip = function(context)\n{\n    // draw triangles!!\n    var vertices = this.vertices;\n    var uvs = this.uvs;\n\n    var length = vertices.length / 2;\n    this.count++;\n\n    for (var i = 0; i < length - 2; i++) {\n        // draw some triangles!\n        var index = i * 2;\n        this._renderCanvasDrawTriangle(context, vertices, uvs, index, (index + 2), (index + 4));\n    }\n};\n\nPIXI.Strip.prototype._renderCanvasTriangles = function(context)\n{\n    // draw triangles!!\n    var vertices = this.vertices;\n    var uvs = this.uvs;\n    var indices = this.indices;\n\n    var length = indices.length;\n    this.count++;\n\n    for (var i = 0; i < length; i += 3) {\n        // draw some triangles!\n        var index0 = indices[i] * 2, index1 = indices[i + 1] * 2, index2 = indices[i + 2] * 2;\n        this._renderCanvasDrawTriangle(context, vertices, uvs, index0, index1, index2);\n    }\n};\n\nPIXI.Strip.prototype._renderCanvasDrawTriangle = function(context, vertices, uvs, index0, index1, index2)\n{\n    var textureSource = this.texture.baseTexture.source;\n    var textureWidth = this.texture.width;\n    var textureHeight = this.texture.height;\n\n    var x0 = vertices[index0], x1 = vertices[index1], x2 = vertices[index2];\n    var y0 = vertices[index0 + 1], y1 = vertices[index1 + 1], y2 = vertices[index2 + 1];\n\n    var u0 = uvs[index0] * textureWidth, u1 = uvs[index1] * textureWidth, u2 = uvs[index2] * textureWidth;\n    var v0 = uvs[index0 + 1] * textureHeight, v1 = uvs[index1 + 1] * textureHeight, v2 = uvs[index2 + 1] * textureHeight;\n\n    if (this.canvasPadding > 0) {\n        var paddingX = this.canvasPadding / this.worldTransform.a;\n        var paddingY = this.canvasPadding / this.worldTransform.d;\n        var centerX = (x0 + x1 + x2) / 3;\n        var centerY = (y0 + y1 + y2) / 3;\n\n        var normX = x0 - centerX;\n        var normY = y0 - centerY;\n\n        var dist = Math.sqrt(normX * normX + normY * normY);\n        x0 = centerX + (normX / dist) * (dist + paddingX);\n        y0 = centerY + (normY / dist) * (dist + paddingY);\n\n        //\n\n        normX = x1 - centerX;\n        normY = y1 - centerY;\n\n        dist = Math.sqrt(normX * normX + normY * normY);\n        x1 = centerX + (normX / dist) * (dist + paddingX);\n        y1 = centerY + (normY / dist) * (dist + paddingY);\n\n        normX = x2 - centerX;\n        normY = y2 - centerY;\n\n        dist = Math.sqrt(normX * normX + normY * normY);\n        x2 = centerX + (normX / dist) * (dist + paddingX);\n        y2 = centerY + (normY / dist) * (dist + paddingY);\n    }\n\n    context.save();\n    context.beginPath();\n\n\n    context.moveTo(x0, y0);\n    context.lineTo(x1, y1);\n    context.lineTo(x2, y2);\n\n    context.closePath();\n\n    context.clip();\n\n    // Compute matrix transform\n    var delta =  (u0 * v1)      + (v0 * u2)      + (u1 * v2)      - (v1 * u2)      - (v0 * u1)      - (u0 * v2);\n    var deltaA = (x0 * v1)      + (v0 * x2)      + (x1 * v2)      - (v1 * x2)      - (v0 * x1)      - (x0 * v2);\n    var deltaB = (u0 * x1)      + (x0 * u2)      + (u1 * x2)      - (x1 * u2)      - (x0 * u1)      - (u0 * x2);\n    var deltaC = (u0 * v1 * x2) + (v0 * x1 * u2) + (x0 * u1 * v2) - (x0 * v1 * u2) - (v0 * u1 * x2) - (u0 * x1 * v2);\n    var deltaD = (y0 * v1)      + (v0 * y2)      + (y1 * v2)      - (v1 * y2)      - (v0 * y1)      - (y0 * v2);\n    var deltaE = (u0 * y1)      + (y0 * u2)      + (u1 * y2)      - (y1 * u2)      - (y0 * u1)      - (u0 * y2);\n    var deltaF = (u0 * v1 * y2) + (v0 * y1 * u2) + (y0 * u1 * v2) - (y0 * v1 * u2) - (v0 * u1 * y2) - (u0 * y1 * v2);\n\n    context.transform(deltaA / delta, deltaD / delta,\n        deltaB / delta, deltaE / delta,\n        deltaC / delta, deltaF / delta);\n\n    context.drawImage(textureSource, 0, 0);\n    context.restore();\n};\n\n\n\n/**\n * Renders a flat strip\n *\n * @method renderStripFlat\n * @param strip {Strip} The Strip to render\n * @private\n */\nPIXI.Strip.prototype.renderStripFlat = function(strip)\n{\n    var context = this.context;\n    var vertices = strip.vertices;\n\n    var length = vertices.length/2;\n    this.count++;\n\n    context.beginPath();\n    for (var i=1; i < length-2; i++)\n    {\n        // draw some triangles!\n        var index = i*2;\n\n        var x0 = vertices[index],   x1 = vertices[index+2], x2 = vertices[index+4];\n        var y0 = vertices[index+1], y1 = vertices[index+3], y2 = vertices[index+5];\n\n        context.moveTo(x0, y0);\n        context.lineTo(x1, y1);\n        context.lineTo(x2, y2);\n    }\n\n    context.fillStyle = '#FF0000';\n    context.fill();\n    context.closePath();\n};\n\n/*\nPIXI.Strip.prototype.setTexture = function(texture)\n{\n    //TODO SET THE TEXTURES\n    //TODO VISIBILITY\n\n    // stop current texture\n    this.texture = texture;\n    this.width   = texture.frame.width;\n    this.height  = texture.frame.height;\n    this.updateFrame = true;\n};\n*/\n\n/**\n * When the texture is updated, this event will fire to update the scale and frame\n *\n * @method onTextureUpdate\n * @param event\n * @private\n */\n\nPIXI.Strip.prototype.onTextureUpdate = function()\n{\n    this.updateFrame = true;\n};\n\n/**\n * Returns the bounds of the mesh as a rectangle. The bounds calculation takes the worldTransform into account.\n *\n * @method getBounds\n * @param matrix {Matrix} the transformation matrix of the sprite\n * @return {Rectangle} the framing rectangle\n */\nPIXI.Strip.prototype.getBounds = function(matrix)\n{\n    var worldTransform = matrix || this.worldTransform;\n\n    var a = worldTransform.a;\n    var b = worldTransform.b;\n    var c = worldTransform.c;\n    var d = worldTransform.d;\n    var tx = worldTransform.tx;\n    var ty = worldTransform.ty;\n\n    var maxX = -Infinity;\n    var maxY = -Infinity;\n\n    var minX = Infinity;\n    var minY = Infinity;\n\n    var vertices = this.vertices;\n    for (var i = 0, n = vertices.length; i < n; i += 2)\n    {\n        var rawX = vertices[i], rawY = vertices[i + 1];\n        var x = (a * rawX) + (c * rawY) + tx;\n        var y = (d * rawY) + (b * rawX) + ty;\n\n        minX = x < minX ? x : minX;\n        minY = y < minY ? y : minY;\n\n        maxX = x > maxX ? x : maxX;\n        maxY = y > maxY ? y : maxY;\n    }\n\n    if (minX === -Infinity || maxY === Infinity)\n    {\n        return PIXI.EmptyRectangle;\n    }\n\n    var bounds = this._bounds;\n\n    bounds.x = minX;\n    bounds.width = maxX - minX;\n\n    bounds.y = minY;\n    bounds.height = maxY - minY;\n\n    // store a reference so that if this function gets called again in the render cycle we do not have to recalculate\n    this._currentBounds = bounds;\n\n    return bounds;\n};\n\n/**\n * Different drawing buffer modes supported\n *\n * @property\n * @type {{TRIANGLE_STRIP: number, TRIANGLES: number}}\n * @static\n */\nPIXI.Strip.DrawModes = {\n    TRIANGLE_STRIP: 0,\n    TRIANGLES: 1\n};\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n * @copyright Mat Groves, Rovanion Luckey\n */\n\n/**\n *\n * @class Rope\n * @constructor\n * @extends Strip\n * @param {Texture} texture - The texture to use on the rope.\n * @param {Array} points - An array of {PIXI.Point}.\n *\n */\nPIXI.Rope = function(texture, points)\n{\n    PIXI.Strip.call( this, texture );\n    this.points = points;\n\n    this.vertices = new PIXI.Float32Array(points.length * 4);\n    this.uvs = new PIXI.Float32Array(points.length * 4);\n    this.colors = new PIXI.Float32Array(points.length * 2);\n    this.indices = new PIXI.Uint16Array(points.length * 2);\n\n\n    this.refresh();\n};\n\n\n// constructor\nPIXI.Rope.prototype = Object.create( PIXI.Strip.prototype );\nPIXI.Rope.prototype.constructor = PIXI.Rope;\n\n/*\n * Refreshes\n *\n * @method refresh\n */\nPIXI.Rope.prototype.refresh = function()\n{\n    var points = this.points;\n    if(points.length < 1) return;\n\n    var uvs = this.uvs;\n\n    var lastPoint = points[0];\n    var indices = this.indices;\n    var colors = this.colors;\n\n    this.count-=0.2;\n\n    uvs[0] = 0;\n    uvs[1] = 0;\n    uvs[2] = 0;\n    uvs[3] = 1;\n\n    colors[0] = 1;\n    colors[1] = 1;\n\n    indices[0] = 0;\n    indices[1] = 1;\n\n    var total = points.length,\n        point, index, amount;\n\n    for (var i = 1; i < total; i++)\n    {\n        point = points[i];\n        index = i * 4;\n        // time to do some smart drawing!\n        amount = i / (total-1);\n\n        if(i%2)\n        {\n            uvs[index] = amount;\n            uvs[index+1] = 0;\n\n            uvs[index+2] = amount;\n            uvs[index+3] = 1;\n        }\n        else\n        {\n            uvs[index] = amount;\n            uvs[index+1] = 0;\n\n            uvs[index+2] = amount;\n            uvs[index+3] = 1;\n        }\n\n        index = i * 2;\n        colors[index] = 1;\n        colors[index+1] = 1;\n\n        index = i * 2;\n        indices[index] = index;\n        indices[index + 1] = index + 1;\n\n        lastPoint = point;\n    }\n};\n\n/*\n * Updates the object transform for rendering\n *\n * @method updateTransform\n * @private\n */\nPIXI.Rope.prototype.updateTransform = function()\n{\n\n    var points = this.points;\n    if(points.length < 1)return;\n\n    var lastPoint = points[0];\n    var nextPoint;\n    var perp = {x:0, y:0};\n\n    this.count-=0.2;\n\n    var vertices = this.vertices;\n    var total = points.length,\n        point, index, ratio, perpLength, num;\n\n    for (var i = 0; i < total; i++)\n    {\n        point = points[i];\n        index = i * 4;\n\n        if(i < points.length-1)\n        {\n            nextPoint = points[i+1];\n        }\n        else\n        {\n            nextPoint = point;\n        }\n\n        perp.y = -(nextPoint.x - lastPoint.x);\n        perp.x = nextPoint.y - lastPoint.y;\n\n        ratio = (1 - (i / (total-1))) * 10;\n\n        if(ratio > 1) ratio = 1;\n\n        perpLength = Math.sqrt(perp.x * perp.x + perp.y * perp.y);\n        num = this.texture.height / 2; //(20 + Math.abs(Math.sin((i + this.count) * 0.3) * 50) )* ratio;\n        perp.x /= perpLength;\n        perp.y /= perpLength;\n\n        perp.x *= num;\n        perp.y *= num;\n\n        vertices[index] = point.x + perp.x;\n        vertices[index+1] = point.y + perp.y;\n        vertices[index+2] = point.x - perp.x;\n        vertices[index+3] = point.y - perp.y;\n\n        lastPoint = point;\n    }\n\n    PIXI.DisplayObjectContainer.prototype.updateTransform.call( this );\n};\n/*\n * Sets the texture that the Rope will use\n *\n * @method setTexture\n * @param texture {Texture} the texture that will be used\n */\nPIXI.Rope.prototype.setTexture = function(texture)\n{\n    // stop current texture\n    this.texture = texture;\n    //this.updateFrame = true;\n};\n\n/**\n * @author Mat Groves http://matgroves.com/\n */\n\n/**\n * A tiling sprite is a fast way of rendering a tiling image\n *\n * @class TilingSprite\n * @extends Sprite\n * @constructor\n * @param texture {Texture} the texture of the tiling sprite\n * @param width {Number}  the width of the tiling sprite\n * @param height {Number} the height of the tiling sprite\n */\nPIXI.TilingSprite = function(texture, width, height)\n{\n    PIXI.Sprite.call(this, texture);\n\n    /**\n     * The width of the tiling sprite\n     *\n     * @property width\n     * @type Number\n     */\n    this._width = width || 128;\n\n    /**\n     * The height of the tiling sprite\n     *\n     * @property height\n     * @type Number\n     */\n    this._height = height || 128;\n\n    /**\n     * The scaling of the image that is being tiled\n     *\n     * @property tileScale\n     * @type Point\n     */\n    this.tileScale = new PIXI.Point(1, 1);\n\n    /**\n     * A point that represents the scale of the texture object\n     *\n     * @property tileScaleOffset\n     * @type Point\n     */\n    this.tileScaleOffset = new PIXI.Point(1, 1);\n    \n    /**\n     * The offset position of the image that is being tiled\n     *\n     * @property tilePosition\n     * @type Point\n     */\n    this.tilePosition = new PIXI.Point();\n\n    /**\n     * Whether this sprite is renderable or not\n     *\n     * @property renderable\n     * @type Boolean\n     * @default true\n     */\n    this.renderable = true;\n\n    /**\n     * The tint applied to the sprite. This is a hex value\n     *\n     * @property tint\n     * @type Number\n     * @default 0xFFFFFF\n     */\n    this.tint = 0xFFFFFF;\n\n    /**\n     * If enabled a green rectangle will be drawn behind the generated tiling texture, allowing you to visually\n     * debug the texture being used.\n     *\n     * @property textureDebug\n     * @type Boolean\n     */\n    this.textureDebug = false;\n    \n    /**\n     * The blend mode to be applied to the sprite\n     *\n     * @property blendMode\n     * @type Number\n     * @default PIXI.blendModes.NORMAL;\n     */\n    this.blendMode = PIXI.blendModes.NORMAL;\n\n    /**\n     * The CanvasBuffer object that the tiled texture is drawn to.\n     *\n     * @property canvasBuffer\n     * @type PIXI.CanvasBuffer\n     */\n    this.canvasBuffer = null;\n\n    /**\n     * An internal Texture object that holds the tiling texture that was generated from TilingSprite.texture.\n     *\n     * @property tilingTexture\n     * @type PIXI.Texture\n     */\n    this.tilingTexture = null;\n\n    /**\n     * The Context fill pattern that is used to draw the TilingSprite in Canvas mode only (will be null in WebGL).\n     *\n     * @property tilePattern\n     * @type PIXI.Texture\n     */\n    this.tilePattern = null;\n\n    /**\n     * If true the TilingSprite will run generateTexture on its **next** render pass.\n     * This is set by the likes of Phaser.LoadTexture.setFrame.\n     *\n     * @property refreshTexture\n     * @type Boolean\n     * @default true\n     */\n    this.refreshTexture = true;\n\n    this.frameWidth = 0;\n    this.frameHeight = 0;\n\n};\n\nPIXI.TilingSprite.prototype = Object.create(PIXI.Sprite.prototype);\nPIXI.TilingSprite.prototype.constructor = PIXI.TilingSprite;\n\nPIXI.TilingSprite.prototype.setTexture = function(texture)\n{\n    if (this.texture !== texture)\n    {\n        this.texture = texture;\n        this.refreshTexture = true;\n        this.cachedTint = 0xFFFFFF;\n    }\n\n};\n\n/**\n* Renders the object using the WebGL renderer\n*\n* @method _renderWebGL\n* @param renderSession {RenderSession} \n* @private\n*/\nPIXI.TilingSprite.prototype._renderWebGL = function(renderSession)\n{\n    if (!this.visible || !this.renderable || this.alpha === 0)\n    {\n        return;\n    }\n\n    if (this._mask)\n    {\n        renderSession.spriteBatch.stop();\n        renderSession.maskManager.pushMask(this.mask, renderSession);\n        renderSession.spriteBatch.start();\n    }\n\n    if (this._filters)\n    {\n        renderSession.spriteBatch.flush();\n        renderSession.filterManager.pushFilter(this._filterBlock);\n    }\n\n    if (this.refreshTexture)\n    {\n        this.generateTilingTexture(true, renderSession);\n\n        if (this.tilingTexture)\n        {\n            if (this.tilingTexture.needsUpdate)\n            {\n                renderSession.renderer.updateTexture(this.tilingTexture.baseTexture);\n                this.tilingTexture.needsUpdate = false;\n            }\n        }\n        else\n        {\n            return;\n        }\n    }\n    \n    renderSession.spriteBatch.renderTilingSprite(this);\n\n    for (var i = 0; i < this.children.length; i++)\n    {\n        this.children[i]._renderWebGL(renderSession);\n    }\n\n    renderSession.spriteBatch.stop();\n\n    if (this._filters)\n    {\n        renderSession.filterManager.popFilter();\n    }\n\n    if (this._mask)\n    {\n        renderSession.maskManager.popMask(this._mask, renderSession);\n    }\n    \n    renderSession.spriteBatch.start();\n\n};\n\n/**\n* Renders the object using the Canvas renderer\n*\n* @method _renderCanvas\n* @param renderSession {RenderSession} \n* @private\n*/\nPIXI.TilingSprite.prototype._renderCanvas = function(renderSession)\n{\n    if (!this.visible || !this.renderable || this.alpha === 0)\n    {\n        return;\n    }\n    \n    var context = renderSession.context;\n\n    if (this._mask)\n    {\n        renderSession.maskManager.pushMask(this._mask, renderSession);\n    }\n\n    context.globalAlpha = this.worldAlpha;\n    \n    var wt = this.worldTransform;\n    var resolution = renderSession.resolution;\n    var tx = (wt.tx * resolution) + renderSession.shakeX;\n    var ty = (wt.ty * resolution) + renderSession.shakeY;\n\n    context.setTransform(wt.a * resolution, wt.b * resolution, wt.c * resolution, wt.d * resolution, tx, ty);\n\n    if (this.refreshTexture)\n    {\n        this.generateTilingTexture(false, renderSession);\n    \n        if (this.tilingTexture)\n        {\n            this.tilePattern = context.createPattern(this.tilingTexture.baseTexture.source, 'repeat');\n        }\n        else\n        {\n            return;\n        }\n    }\n\n    var sessionBlendMode = renderSession.currentBlendMode;\n\n    //  Check blend mode\n    if (this.blendMode !== renderSession.currentBlendMode)\n    {\n        renderSession.currentBlendMode = this.blendMode;\n        context.globalCompositeOperation = PIXI.blendModesCanvas[renderSession.currentBlendMode];\n    }\n\n    var tilePosition = this.tilePosition;\n    var tileScale = this.tileScale;\n\n    tilePosition.x %= this.tilingTexture.baseTexture.width;\n    tilePosition.y %= this.tilingTexture.baseTexture.height;\n\n    //  Translate\n    context.scale(tileScale.x, tileScale.y);\n    context.translate(tilePosition.x + (this.anchor.x * -this._width), tilePosition.y + (this.anchor.y * -this._height));\n\n    context.fillStyle = this.tilePattern;\n\n    var tx = -tilePosition.x;\n    var ty = -tilePosition.y;\n    var tw = this._width / tileScale.x;\n    var th = this._height / tileScale.y;\n\n    //  Allow for pixel rounding\n    if (renderSession.roundPixels)\n    {\n        tx |= 0;\n        ty |= 0;\n        tw |= 0;\n        th |= 0;\n    }\n\n    context.fillRect(tx, ty, tw, th);\n\n    //  Translate back again\n    context.scale(1 / tileScale.x, 1 / tileScale.y);\n    context.translate(-tilePosition.x + (this.anchor.x * this._width), -tilePosition.y + (this.anchor.y * this._height));\n\n    if (this._mask)\n    {\n        renderSession.maskManager.popMask(renderSession);\n    }\n\n    for (var i = 0; i < this.children.length; i++)\n    {\n        this.children[i]._renderCanvas(renderSession);\n    }\n\n    //  Reset blend mode\n    if (sessionBlendMode !== this.blendMode)\n    {\n        renderSession.currentBlendMode = sessionBlendMode;\n        context.globalCompositeOperation = PIXI.blendModesCanvas[sessionBlendMode];\n    }\n\n};\n\n/**\n * When the texture is updated, this event will fire to update the scale and frame\n *\n * @method onTextureUpdate\n * @param event\n * @private\n */\nPIXI.TilingSprite.prototype.onTextureUpdate = function()\n{\n   // overriding the sprite version of this!\n};\n\n/**\n* \n* @method generateTilingTexture\n* \n* @param forcePowerOfTwo {Boolean} Whether we want to force the texture to be a power of two\n* @param renderSession {RenderSession} \n*/\nPIXI.TilingSprite.prototype.generateTilingTexture = function(forcePowerOfTwo, renderSession)\n{\n    if (!this.texture.baseTexture.hasLoaded)\n    {\n        return;\n    }\n\n    var texture = this.texture;\n    var frame = texture.frame;\n\n    var targetWidth = this._frame.sourceSizeW || this._frame.width;\n    var targetHeight = this._frame.sourceSizeH || this._frame.height;\n\n    var dx = 0;\n    var dy = 0;\n\n    if (this._frame.trimmed)\n    {\n        dx = this._frame.spriteSourceSizeX;\n        dy = this._frame.spriteSourceSizeY;\n    }\n\n    if (forcePowerOfTwo)\n    {\n        targetWidth = PIXI.getNextPowerOfTwo(targetWidth);\n        targetHeight = PIXI.getNextPowerOfTwo(targetHeight);\n    }\n\n    if (this.canvasBuffer)\n    {\n        this.canvasBuffer.resize(targetWidth, targetHeight);\n        this.tilingTexture.baseTexture.width = targetWidth;\n        this.tilingTexture.baseTexture.height = targetHeight;\n        this.tilingTexture.needsUpdate = true;\n    }\n    else\n    {\n        this.canvasBuffer = new PIXI.CanvasBuffer(targetWidth, targetHeight);\n        this.tilingTexture = PIXI.Texture.fromCanvas(this.canvasBuffer.canvas);\n        this.tilingTexture.isTiling = true;\n        this.tilingTexture.needsUpdate = true;\n    }\n\n    if (this.textureDebug)\n    {\n        this.canvasBuffer.context.strokeStyle = '#00ff00';\n        this.canvasBuffer.context.strokeRect(0, 0, targetWidth, targetHeight);\n    }\n\n    //  If a sprite sheet we need this:\n    var w = texture.crop.width;\n    var h = texture.crop.height;\n\n    if (w !== targetWidth || h !== targetHeight)\n    {\n        w = targetWidth;\n        h = targetHeight;\n    }\n\n    this.canvasBuffer.context.drawImage(texture.baseTexture.source,\n                           texture.crop.x,\n                           texture.crop.y,\n                           texture.crop.width,\n                           texture.crop.height,\n                           dx,\n                           dy,\n                           w,\n                           h);\n\n    this.tileScaleOffset.x = frame.width / targetWidth;\n    this.tileScaleOffset.y = frame.height / targetHeight;\n\n    this.refreshTexture = false;\n\n    this.tilingTexture.baseTexture._powerOf2 = true;\n\n};\n\n/**\n* Returns the framing rectangle of the sprite as a PIXI.Rectangle object\n*\n* @method getBounds\n* @return {Rectangle} the framing rectangle\n*/\nPIXI.TilingSprite.prototype.getBounds = function()\n{\n    var width = this._width;\n    var height = this._height;\n\n    var w0 = width * (1-this.anchor.x);\n    var w1 = width * -this.anchor.x;\n\n    var h0 = height * (1-this.anchor.y);\n    var h1 = height * -this.anchor.y;\n\n    var worldTransform = this.worldTransform;\n\n    var a = worldTransform.a;\n    var b = worldTransform.b;\n    var c = worldTransform.c;\n    var d = worldTransform.d;\n    var tx = worldTransform.tx;\n    var ty = worldTransform.ty;\n    \n    var x1 = a * w1 + c * h1 + tx;\n    var y1 = d * h1 + b * w1 + ty;\n\n    var x2 = a * w0 + c * h1 + tx;\n    var y2 = d * h1 + b * w0 + ty;\n\n    var x3 = a * w0 + c * h0 + tx;\n    var y3 = d * h0 + b * w0 + ty;\n\n    var x4 =  a * w1 + c * h0 + tx;\n    var y4 =  d * h0 + b * w1 + ty;\n\n    var maxX = -Infinity;\n    var maxY = -Infinity;\n\n    var minX = Infinity;\n    var minY = Infinity;\n\n    minX = x1 < minX ? x1 : minX;\n    minX = x2 < minX ? x2 : minX;\n    minX = x3 < minX ? x3 : minX;\n    minX = x4 < minX ? x4 : minX;\n\n    minY = y1 < minY ? y1 : minY;\n    minY = y2 < minY ? y2 : minY;\n    minY = y3 < minY ? y3 : minY;\n    minY = y4 < minY ? y4 : minY;\n\n    maxX = x1 > maxX ? x1 : maxX;\n    maxX = x2 > maxX ? x2 : maxX;\n    maxX = x3 > maxX ? x3 : maxX;\n    maxX = x4 > maxX ? x4 : maxX;\n\n    maxY = y1 > maxY ? y1 : maxY;\n    maxY = y2 > maxY ? y2 : maxY;\n    maxY = y3 > maxY ? y3 : maxY;\n    maxY = y4 > maxY ? y4 : maxY;\n\n    var bounds = this._bounds;\n\n    bounds.x = minX;\n    bounds.width = maxX - minX;\n\n    bounds.y = minY;\n    bounds.height = maxY - minY;\n\n    // store a reference so that if this function gets called again in the render cycle we do not have to recalculate\n    this._currentBounds = bounds;\n\n    return bounds;\n};\n\nPIXI.TilingSprite.prototype.destroy = function () {\n\n    PIXI.Sprite.prototype.destroy.call(this);\n\n    if (this.canvasBuffer)\n    {\n        this.canvasBuffer.destroy();\n        this.canvasBuffer = null;\n    }\n\n    this.tileScale = null;\n    this.tileScaleOffset = null;\n    this.tilePosition = null;\n\n    if (this.tilingTexture)\n    {\n        this.tilingTexture.destroy(true);\n        this.tilingTexture = null;\n    }\n\n};\n\n/**\n * The width of the sprite, setting this will actually modify the scale to achieve the value set\n *\n * @property width\n * @type Number\n */\nObject.defineProperty(PIXI.TilingSprite.prototype, 'width', {\n\n    get: function() {\n        return this._width;\n    },\n\n    set: function(value) {\n        this._width = value;\n    }\n\n});\n\n/**\n * The height of the TilingSprite, setting this will actually modify the scale to achieve the value set\n *\n * @property height\n * @type Number\n */\nObject.defineProperty(PIXI.TilingSprite.prototype, 'height', {\n\n    get: function() {\n        return  this._height;\n    },\n\n    set: function(value) {\n        this._height = value;\n    }\n\n});\n\n/**\n * @author Mat Groves http://matgroves.com/ @Doormat23\n */\n\n    if (typeof exports !== 'undefined') {\n        if (typeof module !== 'undefined' && module.exports) {\n            exports = module.exports = PIXI;\n        }\n        exports.PIXI = PIXI;\n    } else if (typeof define !== 'undefined' && define.amd) {\n        define('PIXI', (function() { return root.PIXI = PIXI; })() );\n    } else {\n        root.PIXI = PIXI;\n    }\n\n    return PIXI;\n}).call(this);"

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(6))

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = "/**\n * The MIT License (MIT)\n *\n * Copyright (c) 2015 p2.js authors\n *\n * Permission is hereby granted, free of charge, to any person obtaining a copy\n * of this software and associated documentation files (the \"Software\"), to deal\n * in the Software without restriction, including without limitation the rights\n * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell\n * copies of the Software, and to permit persons to whom the Software is\n * furnished to do so, subject to the following conditions:\n *\n * The above copyright notice and this permission notice shall be included in\n * all copies or substantial portions of the Software.\n *\n * THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\n * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\n * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\n * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\n * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\n * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN\n * THE SOFTWARE.\n */\n!function(e){if(\"object\"==typeof exports)module.exports=e();else if(\"function\"==typeof define&&false)define(e);else{var f;\"undefined\"!=typeof window?f=window:\"undefined\"!=typeof global?f=global:\"undefined\"!=typeof self&&(f=self),f.p2=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require==\"function\"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);throw new Error(\"Cannot find module '\"+o+\"'\")}var f=n[o]={exports:{}};t[o][0].call(f.exports,function(e){var n=t[o][1][e];return s(n?n:e)},f,f.exports,e,t,n,r)}return n[o].exports}var i=typeof require==\"function\"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(_dereq_,module,exports){\nvar Scalar = _dereq_('./Scalar');\n\nmodule.exports = Line;\n\n/**\n * Container for line-related functions\n * @class Line\n */\nfunction Line(){};\n\n/**\n * Compute the intersection between two lines.\n * @static\n * @method lineInt\n * @param  {Array}  l1          Line vector 1\n * @param  {Array}  l2          Line vector 2\n * @param  {Number} precision   Precision to use when checking if the lines are parallel\n * @return {Array}              The intersection point.\n */\nLine.lineInt = function(l1,l2,precision){\n    precision = precision || 0;\n    var i = [0,0]; // point\n    var a1, b1, c1, a2, b2, c2, det; // scalars\n    a1 = l1[1][1] - l1[0][1];\n    b1 = l1[0][0] - l1[1][0];\n    c1 = a1 * l1[0][0] + b1 * l1[0][1];\n    a2 = l2[1][1] - l2[0][1];\n    b2 = l2[0][0] - l2[1][0];\n    c2 = a2 * l2[0][0] + b2 * l2[0][1];\n    det = a1 * b2 - a2*b1;\n    if (!Scalar.eq(det, 0, precision)) { // lines are not parallel\n        i[0] = (b2 * c1 - b1 * c2) / det;\n        i[1] = (a1 * c2 - a2 * c1) / det;\n    }\n    return i;\n};\n\n/**\n * Checks if two line segments intersects.\n * @method segmentsIntersect\n * @param {Array} p1 The start vertex of the first line segment.\n * @param {Array} p2 The end vertex of the first line segment.\n * @param {Array} q1 The start vertex of the second line segment.\n * @param {Array} q2 The end vertex of the second line segment.\n * @return {Boolean} True if the two line segments intersect\n */\nLine.segmentsIntersect = function(p1, p2, q1, q2){\n   var dx = p2[0] - p1[0];\n   var dy = p2[1] - p1[1];\n   var da = q2[0] - q1[0];\n   var db = q2[1] - q1[1];\n\n   // segments are parallel\n   if(da*dy - db*dx == 0)\n      return false;\n\n   var s = (dx * (q1[1] - p1[1]) + dy * (p1[0] - q1[0])) / (da * dy - db * dx)\n   var t = (da * (p1[1] - q1[1]) + db * (q1[0] - p1[0])) / (db * dx - da * dy)\n\n   return (s>=0 && s<=1 && t>=0 && t<=1);\n};\n\n\n},{\"./Scalar\":4}],2:[function(_dereq_,module,exports){\nmodule.exports = Point;\n\n/**\n * Point related functions\n * @class Point\n */\nfunction Point(){};\n\n/**\n * Get the area of a triangle spanned by the three given points. Note that the area will be negative if the points are not given in counter-clockwise order.\n * @static\n * @method area\n * @param  {Array} a\n * @param  {Array} b\n * @param  {Array} c\n * @return {Number}\n */\nPoint.area = function(a,b,c){\n    return (((b[0] - a[0])*(c[1] - a[1]))-((c[0] - a[0])*(b[1] - a[1])));\n};\n\nPoint.left = function(a,b,c){\n    return Point.area(a,b,c) > 0;\n};\n\nPoint.leftOn = function(a,b,c) {\n    return Point.area(a, b, c) >= 0;\n};\n\nPoint.right = function(a,b,c) {\n    return Point.area(a, b, c) < 0;\n};\n\nPoint.rightOn = function(a,b,c) {\n    return Point.area(a, b, c) <= 0;\n};\n\nvar tmpPoint1 = [],\n    tmpPoint2 = [];\n\n/**\n * Check if three points are collinear\n * @method collinear\n * @param  {Array} a\n * @param  {Array} b\n * @param  {Array} c\n * @param  {Number} [thresholdAngle=0] Threshold angle to use when comparing the vectors. The function will return true if the angle between the resulting vectors is less than this value. Use zero for max precision.\n * @return {Boolean}\n */\nPoint.collinear = function(a,b,c,thresholdAngle) {\n    if(!thresholdAngle)\n        return Point.area(a, b, c) == 0;\n    else {\n        var ab = tmpPoint1,\n            bc = tmpPoint2;\n\n        ab[0] = b[0]-a[0];\n        ab[1] = b[1]-a[1];\n        bc[0] = c[0]-b[0];\n        bc[1] = c[1]-b[1];\n\n        var dot = ab[0]*bc[0] + ab[1]*bc[1],\n            magA = Math.sqrt(ab[0]*ab[0] + ab[1]*ab[1]),\n            magB = Math.sqrt(bc[0]*bc[0] + bc[1]*bc[1]),\n            angle = Math.acos(dot/(magA*magB));\n        return angle < thresholdAngle;\n    }\n};\n\nPoint.sqdist = function(a,b){\n    var dx = b[0] - a[0];\n    var dy = b[1] - a[1];\n    return dx * dx + dy * dy;\n};\n\n},{}],3:[function(_dereq_,module,exports){\nvar Line = _dereq_(\"./Line\")\n,   Point = _dereq_(\"./Point\")\n,   Scalar = _dereq_(\"./Scalar\")\n\nmodule.exports = Polygon;\n\n/**\n * Polygon class.\n * @class Polygon\n * @constructor\n */\nfunction Polygon(){\n\n    /**\n     * Vertices that this polygon consists of. An array of array of numbers, example: [[0,0],[1,0],..]\n     * @property vertices\n     * @type {Array}\n     */\n    this.vertices = [];\n}\n\n/**\n * Get a vertex at position i. It does not matter if i is out of bounds, this function will just cycle.\n * @method at\n * @param  {Number} i\n * @return {Array}\n */\nPolygon.prototype.at = function(i){\n    var v = this.vertices,\n        s = v.length;\n    return v[i < 0 ? i % s + s : i % s];\n};\n\n/**\n * Get first vertex\n * @method first\n * @return {Array}\n */\nPolygon.prototype.first = function(){\n    return this.vertices[0];\n};\n\n/**\n * Get last vertex\n * @method last\n * @return {Array}\n */\nPolygon.prototype.last = function(){\n    return this.vertices[this.vertices.length-1];\n};\n\n/**\n * Clear the polygon data\n * @method clear\n * @return {Array}\n */\nPolygon.prototype.clear = function(){\n    this.vertices.length = 0;\n};\n\n/**\n * Append points \"from\" to \"to\"-1 from an other polygon \"poly\" onto this one.\n * @method append\n * @param {Polygon} poly The polygon to get points from.\n * @param {Number}  from The vertex index in \"poly\".\n * @param {Number}  to The end vertex index in \"poly\". Note that this vertex is NOT included when appending.\n * @return {Array}\n */\nPolygon.prototype.append = function(poly,from,to){\n    if(typeof(from) == \"undefined\") throw new Error(\"From is not given!\");\n    if(typeof(to) == \"undefined\")   throw new Error(\"To is not given!\");\n\n    if(to-1 < from)                 throw new Error(\"lol1\");\n    if(to > poly.vertices.length)   throw new Error(\"lol2\");\n    if(from < 0)                    throw new Error(\"lol3\");\n\n    for(var i=from; i<to; i++){\n        this.vertices.push(poly.vertices[i]);\n    }\n};\n\n/**\n * Make sure that the polygon vertices are ordered counter-clockwise.\n * @method makeCCW\n */\nPolygon.prototype.makeCCW = function(){\n    var br = 0,\n        v = this.vertices;\n\n    // find bottom right point\n    for (var i = 1; i < this.vertices.length; ++i) {\n        if (v[i][1] < v[br][1] || (v[i][1] == v[br][1] && v[i][0] > v[br][0])) {\n            br = i;\n        }\n    }\n\n    // reverse poly if clockwise\n    if (!Point.left(this.at(br - 1), this.at(br), this.at(br + 1))) {\n        this.reverse();\n    }\n};\n\n/**\n * Reverse the vertices in the polygon\n * @method reverse\n */\nPolygon.prototype.reverse = function(){\n    var tmp = [];\n    for(var i=0, N=this.vertices.length; i!==N; i++){\n        tmp.push(this.vertices.pop());\n    }\n    this.vertices = tmp;\n};\n\n/**\n * Check if a point in the polygon is a reflex point\n * @method isReflex\n * @param  {Number}  i\n * @return {Boolean}\n */\nPolygon.prototype.isReflex = function(i){\n    return Point.right(this.at(i - 1), this.at(i), this.at(i + 1));\n};\n\nvar tmpLine1=[],\n    tmpLine2=[];\n\n/**\n * Check if two vertices in the polygon can see each other\n * @method canSee\n * @param  {Number} a Vertex index 1\n * @param  {Number} b Vertex index 2\n * @return {Boolean}\n */\nPolygon.prototype.canSee = function(a,b) {\n    var p, dist, l1=tmpLine1, l2=tmpLine2;\n\n    if (Point.leftOn(this.at(a + 1), this.at(a), this.at(b)) && Point.rightOn(this.at(a - 1), this.at(a), this.at(b))) {\n        return false;\n    }\n    dist = Point.sqdist(this.at(a), this.at(b));\n    for (var i = 0; i !== this.vertices.length; ++i) { // for each edge\n        if ((i + 1) % this.vertices.length === a || i === a) // ignore incident edges\n            continue;\n        if (Point.leftOn(this.at(a), this.at(b), this.at(i + 1)) && Point.rightOn(this.at(a), this.at(b), this.at(i))) { // if diag intersects an edge\n            l1[0] = this.at(a);\n            l1[1] = this.at(b);\n            l2[0] = this.at(i);\n            l2[1] = this.at(i + 1);\n            p = Line.lineInt(l1,l2);\n            if (Point.sqdist(this.at(a), p) < dist) { // if edge is blocking visibility to b\n                return false;\n            }\n        }\n    }\n\n    return true;\n};\n\n/**\n * Copy the polygon from vertex i to vertex j.\n * @method copy\n * @param  {Number} i\n * @param  {Number} j\n * @param  {Polygon} [targetPoly]   Optional target polygon to save in.\n * @return {Polygon}                The resulting copy.\n */\nPolygon.prototype.copy = function(i,j,targetPoly){\n    var p = targetPoly || new Polygon();\n    p.clear();\n    if (i < j) {\n        // Insert all vertices from i to j\n        for(var k=i; k<=j; k++)\n            p.vertices.push(this.vertices[k]);\n\n    } else {\n\n        // Insert vertices 0 to j\n        for(var k=0; k<=j; k++)\n            p.vertices.push(this.vertices[k]);\n\n        // Insert vertices i to end\n        for(var k=i; k<this.vertices.length; k++)\n            p.vertices.push(this.vertices[k]);\n    }\n\n    return p;\n};\n\n/**\n * Decomposes the polygon into convex pieces. Returns a list of edges [[p1,p2],[p2,p3],...] that cuts the polygon.\n * Note that this algorithm has complexity O(N^4) and will be very slow for polygons with many vertices.\n * @method getCutEdges\n * @return {Array}\n */\nPolygon.prototype.getCutEdges = function() {\n    var min=[], tmp1=[], tmp2=[], tmpPoly = new Polygon();\n    var nDiags = Number.MAX_VALUE;\n\n    for (var i = 0; i < this.vertices.length; ++i) {\n        if (this.isReflex(i)) {\n            for (var j = 0; j < this.vertices.length; ++j) {\n                if (this.canSee(i, j)) {\n                    tmp1 = this.copy(i, j, tmpPoly).getCutEdges();\n                    tmp2 = this.copy(j, i, tmpPoly).getCutEdges();\n\n                    for(var k=0; k<tmp2.length; k++)\n                        tmp1.push(tmp2[k]);\n\n                    if (tmp1.length < nDiags) {\n                        min = tmp1;\n                        nDiags = tmp1.length;\n                        min.push([this.at(i), this.at(j)]);\n                    }\n                }\n            }\n        }\n    }\n\n    return min;\n};\n\n/**\n * Decomposes the polygon into one or more convex sub-Polygons.\n * @method decomp\n * @return {Array} An array or Polygon objects.\n */\nPolygon.prototype.decomp = function(){\n    var edges = this.getCutEdges();\n    if(edges.length > 0)\n        return this.slice(edges);\n    else\n        return [this];\n};\n\n/**\n * Slices the polygon given one or more cut edges. If given one, this function will return two polygons (false on failure). If many, an array of polygons.\n * @method slice\n * @param {Array} cutEdges A list of edges, as returned by .getCutEdges()\n * @return {Array}\n */\nPolygon.prototype.slice = function(cutEdges){\n    if(cutEdges.length == 0) return [this];\n    if(cutEdges instanceof Array && cutEdges.length && cutEdges[0] instanceof Array && cutEdges[0].length==2 && cutEdges[0][0] instanceof Array){\n\n        var polys = [this];\n\n        for(var i=0; i<cutEdges.length; i++){\n            var cutEdge = cutEdges[i];\n            // Cut all polys\n            for(var j=0; j<polys.length; j++){\n                var poly = polys[j];\n                var result = poly.slice(cutEdge);\n                if(result){\n                    // Found poly! Cut and quit\n                    polys.splice(j,1);\n                    polys.push(result[0],result[1]);\n                    break;\n                }\n            }\n        }\n\n        return polys;\n    } else {\n\n        // Was given one edge\n        var cutEdge = cutEdges;\n        var i = this.vertices.indexOf(cutEdge[0]);\n        var j = this.vertices.indexOf(cutEdge[1]);\n\n        if(i != -1 && j != -1){\n            return [this.copy(i,j),\n                    this.copy(j,i)];\n        } else {\n            return false;\n        }\n    }\n};\n\n/**\n * Checks that the line segments of this polygon do not intersect each other.\n * @method isSimple\n * @param  {Array} path An array of vertices e.g. [[0,0],[0,1],...]\n * @return {Boolean}\n * @todo Should it check all segments with all others?\n */\nPolygon.prototype.isSimple = function(){\n    var path = this.vertices;\n    // Check\n    for(var i=0; i<path.length-1; i++){\n        for(var j=0; j<i-1; j++){\n            if(Line.segmentsIntersect(path[i], path[i+1], path[j], path[j+1] )){\n                return false;\n            }\n        }\n    }\n\n    // Check the segment between the last and the first point to all others\n    for(var i=1; i<path.length-2; i++){\n        if(Line.segmentsIntersect(path[0], path[path.length-1], path[i], path[i+1] )){\n            return false;\n        }\n    }\n\n    return true;\n};\n\nfunction getIntersectionPoint(p1, p2, q1, q2, delta){\n    delta = delta || 0;\n   var a1 = p2[1] - p1[1];\n   var b1 = p1[0] - p2[0];\n   var c1 = (a1 * p1[0]) + (b1 * p1[1]);\n   var a2 = q2[1] - q1[1];\n   var b2 = q1[0] - q2[0];\n   var c2 = (a2 * q1[0]) + (b2 * q1[1]);\n   var det = (a1 * b2) - (a2 * b1);\n\n   if(!Scalar.eq(det,0,delta))\n      return [((b2 * c1) - (b1 * c2)) / det, ((a1 * c2) - (a2 * c1)) / det]\n   else\n      return [0,0]\n}\n\n/**\n * Quickly decompose the Polygon into convex sub-polygons.\n * @method quickDecomp\n * @param  {Array} result\n * @param  {Array} [reflexVertices]\n * @param  {Array} [steinerPoints]\n * @param  {Number} [delta]\n * @param  {Number} [maxlevel]\n * @param  {Number} [level]\n * @return {Array}\n */\nPolygon.prototype.quickDecomp = function(result,reflexVertices,steinerPoints,delta,maxlevel,level){\n    maxlevel = maxlevel || 100;\n    level = level || 0;\n    delta = delta || 25;\n    result = typeof(result)!=\"undefined\" ? result : [];\n    reflexVertices = reflexVertices || [];\n    steinerPoints = steinerPoints || [];\n\n    var upperInt=[0,0], lowerInt=[0,0], p=[0,0]; // Points\n    var upperDist=0, lowerDist=0, d=0, closestDist=0; // scalars\n    var upperIndex=0, lowerIndex=0, closestIndex=0; // Integers\n    var lowerPoly=new Polygon(), upperPoly=new Polygon(); // polygons\n    var poly = this,\n        v = this.vertices;\n\n    if(v.length < 3) return result;\n\n    level++;\n    if(level > maxlevel){\n        console.warn(\"quickDecomp: max level (\"+maxlevel+\") reached.\");\n        return result;\n    }\n\n    for (var i = 0; i < this.vertices.length; ++i) {\n        if (poly.isReflex(i)) {\n            reflexVertices.push(poly.vertices[i]);\n            upperDist = lowerDist = Number.MAX_VALUE;\n\n\n            for (var j = 0; j < this.vertices.length; ++j) {\n                if (Point.left(poly.at(i - 1), poly.at(i), poly.at(j))\n                        && Point.rightOn(poly.at(i - 1), poly.at(i), poly.at(j - 1))) { // if line intersects with an edge\n                    p = getIntersectionPoint(poly.at(i - 1), poly.at(i), poly.at(j), poly.at(j - 1)); // find the point of intersection\n                    if (Point.right(poly.at(i + 1), poly.at(i), p)) { // make sure it's inside the poly\n                        d = Point.sqdist(poly.vertices[i], p);\n                        if (d < lowerDist) { // keep only the closest intersection\n                            lowerDist = d;\n                            lowerInt = p;\n                            lowerIndex = j;\n                        }\n                    }\n                }\n                if (Point.left(poly.at(i + 1), poly.at(i), poly.at(j + 1))\n                        && Point.rightOn(poly.at(i + 1), poly.at(i), poly.at(j))) {\n                    p = getIntersectionPoint(poly.at(i + 1), poly.at(i), poly.at(j), poly.at(j + 1));\n                    if (Point.left(poly.at(i - 1), poly.at(i), p)) {\n                        d = Point.sqdist(poly.vertices[i], p);\n                        if (d < upperDist) {\n                            upperDist = d;\n                            upperInt = p;\n                            upperIndex = j;\n                        }\n                    }\n                }\n            }\n\n            // if there are no vertices to connect to, choose a point in the middle\n            if (lowerIndex == (upperIndex + 1) % this.vertices.length) {\n                //console.log(\"Case 1: Vertex(\"+i+\"), lowerIndex(\"+lowerIndex+\"), upperIndex(\"+upperIndex+\"), poly.size(\"+this.vertices.length+\")\");\n                p[0] = (lowerInt[0] + upperInt[0]) / 2;\n                p[1] = (lowerInt[1] + upperInt[1]) / 2;\n                steinerPoints.push(p);\n\n                if (i < upperIndex) {\n                    //lowerPoly.insert(lowerPoly.end(), poly.begin() + i, poly.begin() + upperIndex + 1);\n                    lowerPoly.append(poly, i, upperIndex+1);\n                    lowerPoly.vertices.push(p);\n                    upperPoly.vertices.push(p);\n                    if (lowerIndex != 0){\n                        //upperPoly.insert(upperPoly.end(), poly.begin() + lowerIndex, poly.end());\n                        upperPoly.append(poly,lowerIndex,poly.vertices.length);\n                    }\n                    //upperPoly.insert(upperPoly.end(), poly.begin(), poly.begin() + i + 1);\n                    upperPoly.append(poly,0,i+1);\n                } else {\n                    if (i != 0){\n                        //lowerPoly.insert(lowerPoly.end(), poly.begin() + i, poly.end());\n                        lowerPoly.append(poly,i,poly.vertices.length);\n                    }\n                    //lowerPoly.insert(lowerPoly.end(), poly.begin(), poly.begin() + upperIndex + 1);\n                    lowerPoly.append(poly,0,upperIndex+1);\n                    lowerPoly.vertices.push(p);\n                    upperPoly.vertices.push(p);\n                    //upperPoly.insert(upperPoly.end(), poly.begin() + lowerIndex, poly.begin() + i + 1);\n                    upperPoly.append(poly,lowerIndex,i+1);\n                }\n            } else {\n                // connect to the closest point within the triangle\n                //console.log(\"Case 2: Vertex(\"+i+\"), closestIndex(\"+closestIndex+\"), poly.size(\"+this.vertices.length+\")\\n\");\n\n                if (lowerIndex > upperIndex) {\n                    upperIndex += this.vertices.length;\n                }\n                closestDist = Number.MAX_VALUE;\n\n                if(upperIndex < lowerIndex){\n                    return result;\n                }\n\n                for (var j = lowerIndex; j <= upperIndex; ++j) {\n                    if (Point.leftOn(poly.at(i - 1), poly.at(i), poly.at(j))\n                            && Point.rightOn(poly.at(i + 1), poly.at(i), poly.at(j))) {\n                        d = Point.sqdist(poly.at(i), poly.at(j));\n                        if (d < closestDist) {\n                            closestDist = d;\n                            closestIndex = j % this.vertices.length;\n                        }\n                    }\n                }\n\n                if (i < closestIndex) {\n                    lowerPoly.append(poly,i,closestIndex+1);\n                    if (closestIndex != 0){\n                        upperPoly.append(poly,closestIndex,v.length);\n                    }\n                    upperPoly.append(poly,0,i+1);\n                } else {\n                    if (i != 0){\n                        lowerPoly.append(poly,i,v.length);\n                    }\n                    lowerPoly.append(poly,0,closestIndex+1);\n                    upperPoly.append(poly,closestIndex,i+1);\n                }\n            }\n\n            // solve smallest poly first\n            if (lowerPoly.vertices.length < upperPoly.vertices.length) {\n                lowerPoly.quickDecomp(result,reflexVertices,steinerPoints,delta,maxlevel,level);\n                upperPoly.quickDecomp(result,reflexVertices,steinerPoints,delta,maxlevel,level);\n            } else {\n                upperPoly.quickDecomp(result,reflexVertices,steinerPoints,delta,maxlevel,level);\n                lowerPoly.quickDecomp(result,reflexVertices,steinerPoints,delta,maxlevel,level);\n            }\n\n            return result;\n        }\n    }\n    result.push(this);\n\n    return result;\n};\n\n/**\n * Remove collinear points in the polygon.\n * @method removeCollinearPoints\n * @param  {Number} [precision] The threshold angle to use when determining whether two edges are collinear. Use zero for finest precision.\n * @return {Number}           The number of points removed\n */\nPolygon.prototype.removeCollinearPoints = function(precision){\n    var num = 0;\n    for(var i=this.vertices.length-1; this.vertices.length>3 && i>=0; --i){\n        if(Point.collinear(this.at(i-1),this.at(i),this.at(i+1),precision)){\n            // Remove the middle point\n            this.vertices.splice(i%this.vertices.length,1);\n            i--; // Jump one point forward. Otherwise we may get a chain removal\n            num++;\n        }\n    }\n    return num;\n};\n\n},{\"./Line\":1,\"./Point\":2,\"./Scalar\":4}],4:[function(_dereq_,module,exports){\nmodule.exports = Scalar;\n\n/**\n * Scalar functions\n * @class Scalar\n */\nfunction Scalar(){}\n\n/**\n * Check if two scalars are equal\n * @static\n * @method eq\n * @param  {Number} a\n * @param  {Number} b\n * @param  {Number} [precision]\n * @return {Boolean}\n */\nScalar.eq = function(a,b,precision){\n    precision = precision || 0;\n    return Math.abs(a-b) < precision;\n};\n\n},{}],5:[function(_dereq_,module,exports){\nmodule.exports = {\n    Polygon : _dereq_(\"./Polygon\"),\n    Point : _dereq_(\"./Point\"),\n};\n\n},{\"./Point\":2,\"./Polygon\":3}],6:[function(_dereq_,module,exports){\nmodule.exports={\n  \"name\": \"p2\",\n  \"version\": \"0.7.0\",\n  \"description\": \"A JavaScript 2D physics engine.\",\n  \"author\": \"Stefan Hedman <schteppe@gmail.com> (http://steffe.se)\",\n  \"keywords\": [\n    \"p2.js\",\n    \"p2\",\n    \"physics\",\n    \"engine\",\n    \"2d\"\n  ],\n  \"main\": \"./src/p2.js\",\n  \"engines\": {\n    \"node\": \"*\"\n  },\n  \"repository\": {\n    \"type\": \"git\",\n    \"url\": \"https://github.com/schteppe/p2.js.git\"\n  },\n  \"bugs\": {\n    \"url\": \"https://github.com/schteppe/p2.js/issues\"\n  },\n  \"licenses\": [\n    {\n      \"type\": \"MIT\"\n    }\n  ],\n  \"devDependencies\": {\n    \"grunt\": \"^0.4.5\",\n    \"grunt-contrib-jshint\": \"^0.11.2\",\n    \"grunt-contrib-nodeunit\": \"^0.4.1\",\n    \"grunt-contrib-uglify\": \"~0.4.0\",\n    \"grunt-contrib-watch\": \"~0.5.0\",\n    \"grunt-browserify\": \"~2.0.1\",\n    \"grunt-contrib-concat\": \"^0.4.0\"\n  },\n  \"dependencies\": {\n    \"poly-decomp\": \"0.1.0\"\n  }\n}\n\n},{}],7:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2')\n,   Utils = _dereq_('../utils/Utils');\n\nmodule.exports = AABB;\n\n/**\n * Axis aligned bounding box class.\n * @class AABB\n * @constructor\n * @param {Object}  [options]\n * @param {Array}   [options.upperBound]\n * @param {Array}   [options.lowerBound]\n */\nfunction AABB(options){\n\n    /**\n     * The lower bound of the bounding box.\n     * @property lowerBound\n     * @type {Array}\n     */\n    this.lowerBound = vec2.create();\n    if(options && options.lowerBound){\n        vec2.copy(this.lowerBound, options.lowerBound);\n    }\n\n    /**\n     * The upper bound of the bounding box.\n     * @property upperBound\n     * @type {Array}\n     */\n    this.upperBound = vec2.create();\n    if(options && options.upperBound){\n        vec2.copy(this.upperBound, options.upperBound);\n    }\n}\n\nvar tmp = vec2.create();\n\n/**\n * Set the AABB bounds from a set of points, transformed by the given position and angle.\n * @method setFromPoints\n * @param {Array} points An array of vec2's.\n * @param {Array} position\n * @param {number} angle\n * @param {number} skinSize Some margin to be added to the AABB.\n */\nAABB.prototype.setFromPoints = function(points, position, angle, skinSize){\n    var l = this.lowerBound,\n        u = this.upperBound;\n\n    if(typeof(angle) !== \"number\"){\n        angle = 0;\n    }\n\n    // Set to the first point\n    if(angle !== 0){\n        vec2.rotate(l, points[0], angle);\n    } else {\n        vec2.copy(l, points[0]);\n    }\n    vec2.copy(u, l);\n\n    // Compute cosines and sines just once\n    var cosAngle = Math.cos(angle),\n        sinAngle = Math.sin(angle);\n    for(var i = 1; i<points.length; i++){\n        var p = points[i];\n\n        if(angle !== 0){\n            var x = p[0],\n                y = p[1];\n            tmp[0] = cosAngle * x -sinAngle * y;\n            tmp[1] = sinAngle * x +cosAngle * y;\n            p = tmp;\n        }\n\n        for(var j=0; j<2; j++){\n            if(p[j] > u[j]){\n                u[j] = p[j];\n            }\n            if(p[j] < l[j]){\n                l[j] = p[j];\n            }\n        }\n    }\n\n    // Add offset\n    if(position){\n        vec2.add(this.lowerBound, this.lowerBound, position);\n        vec2.add(this.upperBound, this.upperBound, position);\n    }\n\n    if(skinSize){\n        this.lowerBound[0] -= skinSize;\n        this.lowerBound[1] -= skinSize;\n        this.upperBound[0] += skinSize;\n        this.upperBound[1] += skinSize;\n    }\n};\n\n/**\n * Copy bounds from an AABB to this AABB\n * @method copy\n * @param  {AABB} aabb\n */\nAABB.prototype.copy = function(aabb){\n    vec2.copy(this.lowerBound, aabb.lowerBound);\n    vec2.copy(this.upperBound, aabb.upperBound);\n};\n\n/**\n * Extend this AABB so that it covers the given AABB too.\n * @method extend\n * @param  {AABB} aabb\n */\nAABB.prototype.extend = function(aabb){\n    // Loop over x and y\n    var i = 2;\n    while(i--){\n        // Extend lower bound\n        var l = aabb.lowerBound[i];\n        if(this.lowerBound[i] > l){\n            this.lowerBound[i] = l;\n        }\n\n        // Upper\n        var u = aabb.upperBound[i];\n        if(this.upperBound[i] < u){\n            this.upperBound[i] = u;\n        }\n    }\n};\n\n/**\n * Returns true if the given AABB overlaps this AABB.\n * @method overlaps\n * @param  {AABB} aabb\n * @return {Boolean}\n */\nAABB.prototype.overlaps = function(aabb){\n    var l1 = this.lowerBound,\n        u1 = this.upperBound,\n        l2 = aabb.lowerBound,\n        u2 = aabb.upperBound;\n\n    //      l2        u2\n    //      |---------|\n    // |--------|\n    // l1       u1\n\n    return ((l2[0] <= u1[0] && u1[0] <= u2[0]) || (l1[0] <= u2[0] && u2[0] <= u1[0])) &&\n           ((l2[1] <= u1[1] && u1[1] <= u2[1]) || (l1[1] <= u2[1] && u2[1] <= u1[1]));\n};\n\n/**\n * @method containsPoint\n * @param  {Array} point\n * @return {boolean}\n */\nAABB.prototype.containsPoint = function(point){\n    var l = this.lowerBound,\n        u = this.upperBound;\n    return l[0] <= point[0] && point[0] <= u[0] && l[1] <= point[1] && point[1] <= u[1];\n};\n\n/**\n * Check if the AABB is hit by a ray.\n * @method overlapsRay\n * @param  {Ray} ray\n * @return {number} -1 if no hit, a number between 0 and 1 if hit.\n */\nAABB.prototype.overlapsRay = function(ray){\n    var t = 0;\n\n    // ray.direction is unit direction vector of ray\n    var dirFracX = 1 / ray.direction[0];\n    var dirFracY = 1 / ray.direction[1];\n\n    // this.lowerBound is the corner of AABB with minimal coordinates - left bottom, rt is maximal corner\n    var t1 = (this.lowerBound[0] - ray.from[0]) * dirFracX;\n    var t2 = (this.upperBound[0] - ray.from[0]) * dirFracX;\n    var t3 = (this.lowerBound[1] - ray.from[1]) * dirFracY;\n    var t4 = (this.upperBound[1] - ray.from[1]) * dirFracY;\n\n    var tmin = Math.max(Math.max(Math.min(t1, t2), Math.min(t3, t4)));\n    var tmax = Math.min(Math.min(Math.max(t1, t2), Math.max(t3, t4)));\n\n    // if tmax < 0, ray (line) is intersecting AABB, but whole AABB is behing us\n    if (tmax < 0){\n        //t = tmax;\n        return -1;\n    }\n\n    // if tmin > tmax, ray doesn't intersect AABB\n    if (tmin > tmax){\n        //t = tmax;\n        return -1;\n    }\n\n    return tmin;\n};\n},{\"../math/vec2\":30,\"../utils/Utils\":57}],8:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2');\nvar Body = _dereq_('../objects/Body');\n\nmodule.exports = Broadphase;\n\n/**\n * Base class for broadphase implementations.\n * @class Broadphase\n * @constructor\n */\nfunction Broadphase(type){\n\n    this.type = type;\n\n    /**\n     * The resulting overlapping pairs. Will be filled with results during .getCollisionPairs().\n     * @property result\n     * @type {Array}\n     */\n    this.result = [];\n\n    /**\n     * The world to search for collision pairs in. To change it, use .setWorld()\n     * @property world\n     * @type {World}\n     * @readOnly\n     */\n    this.world = null;\n\n    /**\n     * The bounding volume type to use in the broadphase algorithms. Should be set to Broadphase.AABB or Broadphase.BOUNDING_CIRCLE.\n     * @property {Number} boundingVolumeType\n     */\n    this.boundingVolumeType = Broadphase.AABB;\n}\n\n/**\n * Axis aligned bounding box type.\n * @static\n * @property {Number} AABB\n */\nBroadphase.AABB = 1;\n\n/**\n * Bounding circle type.\n * @static\n * @property {Number} BOUNDING_CIRCLE\n */\nBroadphase.BOUNDING_CIRCLE = 2;\n\n/**\n * Set the world that we are searching for collision pairs in.\n * @method setWorld\n * @param  {World} world\n */\nBroadphase.prototype.setWorld = function(world){\n    this.world = world;\n};\n\n/**\n * Get all potential intersecting body pairs.\n * @method getCollisionPairs\n * @param  {World} world The world to search in.\n * @return {Array} An array of the bodies, ordered in pairs. Example: A result of [a,b,c,d] means that the potential pairs are: (a,b), (c,d).\n */\nBroadphase.prototype.getCollisionPairs = function(world){};\n\nvar dist = vec2.create();\n\n/**\n * Check whether the bounding radius of two bodies overlap.\n * @method  boundingRadiusCheck\n * @param  {Body} bodyA\n * @param  {Body} bodyB\n * @return {Boolean}\n */\nBroadphase.boundingRadiusCheck = function(bodyA, bodyB){\n    vec2.sub(dist, bodyA.position, bodyB.position);\n    var d2 = vec2.squaredLength(dist),\n        r = bodyA.boundingRadius + bodyB.boundingRadius;\n    return d2 <= r*r;\n};\n\n/**\n * Check whether the bounding radius of two bodies overlap.\n * @method  boundingRadiusCheck\n * @param  {Body} bodyA\n * @param  {Body} bodyB\n * @return {Boolean}\n */\nBroadphase.aabbCheck = function(bodyA, bodyB){\n    return bodyA.getAABB().overlaps(bodyB.getAABB());\n};\n\n/**\n * Check whether the bounding radius of two bodies overlap.\n * @method  boundingRadiusCheck\n * @param  {Body} bodyA\n * @param  {Body} bodyB\n * @return {Boolean}\n */\nBroadphase.prototype.boundingVolumeCheck = function(bodyA, bodyB){\n    var result;\n\n    switch(this.boundingVolumeType){\n    case Broadphase.BOUNDING_CIRCLE:\n        result =  Broadphase.boundingRadiusCheck(bodyA,bodyB);\n        break;\n    case Broadphase.AABB:\n        result = Broadphase.aabbCheck(bodyA,bodyB);\n        break;\n    default:\n        throw new Error('Bounding volume type not recognized: '+this.boundingVolumeType);\n    }\n    return result;\n};\n\n/**\n * Check whether two bodies are allowed to collide at all.\n * @method  canCollide\n * @param  {Body} bodyA\n * @param  {Body} bodyB\n * @return {Boolean}\n */\nBroadphase.canCollide = function(bodyA, bodyB){\n    var KINEMATIC = Body.KINEMATIC;\n    var STATIC = Body.STATIC;\n\n    // Cannot collide static bodies\n    if(bodyA.type === STATIC && bodyB.type === STATIC){\n        return false;\n    }\n\n    // Cannot collide static vs kinematic bodies\n    if( (bodyA.type === KINEMATIC && bodyB.type === STATIC) ||\n        (bodyA.type === STATIC    && bodyB.type === KINEMATIC)){\n        return false;\n    }\n\n    // Cannot collide kinematic vs kinematic\n    if(bodyA.type === KINEMATIC && bodyB.type === KINEMATIC){\n        return false;\n    }\n\n    // Cannot collide both sleeping bodies\n    if(bodyA.sleepState === Body.SLEEPING && bodyB.sleepState === Body.SLEEPING){\n        return false;\n    }\n\n    // Cannot collide if one is static and the other is sleeping\n    if( (bodyA.sleepState === Body.SLEEPING && bodyB.type === STATIC) ||\n        (bodyB.sleepState === Body.SLEEPING && bodyA.type === STATIC)){\n        return false;\n    }\n\n    return true;\n};\n\nBroadphase.NAIVE = 1;\nBroadphase.SAP = 2;\n\n},{\"../math/vec2\":30,\"../objects/Body\":31}],9:[function(_dereq_,module,exports){\nvar Circle = _dereq_('../shapes/Circle'),\n    Plane = _dereq_('../shapes/Plane'),\n    Shape = _dereq_('../shapes/Shape'),\n    Particle = _dereq_('../shapes/Particle'),\n    Broadphase = _dereq_('../collision/Broadphase'),\n    vec2 = _dereq_('../math/vec2');\n\nmodule.exports = NaiveBroadphase;\n\n/**\n * Naive broadphase implementation. Does N^2 tests.\n *\n * @class NaiveBroadphase\n * @constructor\n * @extends Broadphase\n */\nfunction NaiveBroadphase(){\n    Broadphase.call(this, Broadphase.NAIVE);\n}\nNaiveBroadphase.prototype = new Broadphase();\nNaiveBroadphase.prototype.constructor = NaiveBroadphase;\n\n/**\n * Get the colliding pairs\n * @method getCollisionPairs\n * @param  {World} world\n * @return {Array}\n */\nNaiveBroadphase.prototype.getCollisionPairs = function(world){\n    var bodies = world.bodies,\n        result = this.result;\n\n    result.length = 0;\n\n    for(var i=0, Ncolliding=bodies.length; i!==Ncolliding; i++){\n        var bi = bodies[i];\n\n        for(var j=0; j<i; j++){\n            var bj = bodies[j];\n\n            if(Broadphase.canCollide(bi,bj) && this.boundingVolumeCheck(bi,bj)){\n                result.push(bi,bj);\n            }\n        }\n    }\n\n    return result;\n};\n\n/**\n * Returns all the bodies within an AABB.\n * @method aabbQuery\n * @param  {World} world\n * @param  {AABB} aabb\n * @param {array} result An array to store resulting bodies in.\n * @return {array}\n */\nNaiveBroadphase.prototype.aabbQuery = function(world, aabb, result){\n    result = result || [];\n\n    var bodies = world.bodies;\n    for(var i = 0; i < bodies.length; i++){\n        var b = bodies[i];\n\n        if(b.aabbNeedsUpdate){\n            b.updateAABB();\n        }\n\n        if(b.aabb.overlaps(aabb)){\n            result.push(b);\n        }\n    }\n\n    return result;\n};\n},{\"../collision/Broadphase\":8,\"../math/vec2\":30,\"../shapes/Circle\":39,\"../shapes/Particle\":43,\"../shapes/Plane\":44,\"../shapes/Shape\":45}],10:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2')\n,   sub = vec2.sub\n,   add = vec2.add\n,   dot = vec2.dot\n,   Utils = _dereq_('../utils/Utils')\n,   ContactEquationPool = _dereq_('../utils/ContactEquationPool')\n,   FrictionEquationPool = _dereq_('../utils/FrictionEquationPool')\n,   TupleDictionary = _dereq_('../utils/TupleDictionary')\n,   Equation = _dereq_('../equations/Equation')\n,   ContactEquation = _dereq_('../equations/ContactEquation')\n,   FrictionEquation = _dereq_('../equations/FrictionEquation')\n,   Circle = _dereq_('../shapes/Circle')\n,   Convex = _dereq_('../shapes/Convex')\n,   Shape = _dereq_('../shapes/Shape')\n,   Body = _dereq_('../objects/Body')\n,   Box = _dereq_('../shapes/Box');\n\nmodule.exports = Narrowphase;\n\n// Temp things\nvar yAxis = vec2.fromValues(0,1);\n\nvar tmp1 = vec2.fromValues(0,0)\n,   tmp2 = vec2.fromValues(0,0)\n,   tmp3 = vec2.fromValues(0,0)\n,   tmp4 = vec2.fromValues(0,0)\n,   tmp5 = vec2.fromValues(0,0)\n,   tmp6 = vec2.fromValues(0,0)\n,   tmp7 = vec2.fromValues(0,0)\n,   tmp8 = vec2.fromValues(0,0)\n,   tmp9 = vec2.fromValues(0,0)\n,   tmp10 = vec2.fromValues(0,0)\n,   tmp11 = vec2.fromValues(0,0)\n,   tmp12 = vec2.fromValues(0,0)\n,   tmp13 = vec2.fromValues(0,0)\n,   tmp14 = vec2.fromValues(0,0)\n,   tmp15 = vec2.fromValues(0,0)\n,   tmp16 = vec2.fromValues(0,0)\n,   tmp17 = vec2.fromValues(0,0)\n,   tmp18 = vec2.fromValues(0,0)\n,   tmpArray = [];\n\n/**\n * Narrowphase. Creates contacts and friction given shapes and transforms.\n * @class Narrowphase\n * @constructor\n */\nfunction Narrowphase(){\n\n    /**\n     * @property contactEquations\n     * @type {Array}\n     */\n    this.contactEquations = [];\n\n    /**\n     * @property frictionEquations\n     * @type {Array}\n     */\n    this.frictionEquations = [];\n\n    /**\n     * Whether to make friction equations in the upcoming contacts.\n     * @property enableFriction\n     * @type {Boolean}\n     */\n    this.enableFriction = true;\n\n    /**\n     * Whether to make equations enabled in upcoming contacts.\n     * @property enabledEquations\n     * @type {Boolean}\n     */\n    this.enabledEquations = true;\n\n    /**\n     * The friction slip force to use when creating friction equations.\n     * @property slipForce\n     * @type {Number}\n     */\n    this.slipForce = 10.0;\n\n    /**\n     * The friction value to use in the upcoming friction equations.\n     * @property frictionCoefficient\n     * @type {Number}\n     */\n    this.frictionCoefficient = 0.3;\n\n    /**\n     * Will be the .relativeVelocity in each produced FrictionEquation.\n     * @property {Number} surfaceVelocity\n     */\n    this.surfaceVelocity = 0;\n\n    /**\n     * Keeps track of the allocated ContactEquations.\n     * @property {ContactEquationPool} contactEquationPool\n     *\n     * @example\n     *\n     *     // Allocate a few equations before starting the simulation.\n     *     // This way, no contact objects need to be created on the fly in the game loop.\n     *     world.narrowphase.contactEquationPool.resize(1024);\n     *     world.narrowphase.frictionEquationPool.resize(1024);\n     */\n    this.contactEquationPool = new ContactEquationPool({ size: 32 });\n\n    /**\n     * Keeps track of the allocated ContactEquations.\n     * @property {FrictionEquationPool} frictionEquationPool\n     */\n    this.frictionEquationPool = new FrictionEquationPool({ size: 64 });\n\n    /**\n     * The restitution value to use in the next contact equations.\n     * @property restitution\n     * @type {Number}\n     */\n    this.restitution = 0;\n\n    /**\n     * The stiffness value to use in the next contact equations.\n     * @property {Number} stiffness\n     */\n    this.stiffness = Equation.DEFAULT_STIFFNESS;\n\n    /**\n     * The stiffness value to use in the next contact equations.\n     * @property {Number} stiffness\n     */\n    this.relaxation = Equation.DEFAULT_RELAXATION;\n\n    /**\n     * The stiffness value to use in the next friction equations.\n     * @property frictionStiffness\n     * @type {Number}\n     */\n    this.frictionStiffness = Equation.DEFAULT_STIFFNESS;\n\n    /**\n     * The relaxation value to use in the next friction equations.\n     * @property frictionRelaxation\n     * @type {Number}\n     */\n    this.frictionRelaxation = Equation.DEFAULT_RELAXATION;\n\n    /**\n     * Enable reduction of friction equations. If disabled, a box on a plane will generate 2 contact equations and 2 friction equations. If enabled, there will be only one friction equation. Same kind of simplifications are made  for all collision types.\n     * @property enableFrictionReduction\n     * @type {Boolean}\n     * @deprecated This flag will be removed when the feature is stable enough.\n     * @default true\n     */\n    this.enableFrictionReduction = true;\n\n    /**\n     * Keeps track of the colliding bodies last step.\n     * @private\n     * @property collidingBodiesLastStep\n     * @type {TupleDictionary}\n     */\n    this.collidingBodiesLastStep = new TupleDictionary();\n\n    /**\n     * Contact skin size value to use in the next contact equations.\n     * @property {Number} contactSkinSize\n     * @default 0.01\n     */\n    this.contactSkinSize = 0.01;\n}\n\nvar bodiesOverlap_shapePositionA = vec2.create();\nvar bodiesOverlap_shapePositionB = vec2.create();\n\n/**\n * @method bodiesOverlap\n * @param  {Body} bodyA\n * @param  {Body} bodyB\n * @return {Boolean}\n * @todo shape world transforms are wrong\n */\nNarrowphase.prototype.bodiesOverlap = function(bodyA, bodyB){\n    var shapePositionA = bodiesOverlap_shapePositionA;\n    var shapePositionB = bodiesOverlap_shapePositionB;\n\n    // Loop over all shapes of bodyA\n    for(var k=0, Nshapesi=bodyA.shapes.length; k!==Nshapesi; k++){\n        var shapeA = bodyA.shapes[k];\n\n        bodyA.toWorldFrame(shapePositionA, shapeA.position);\n\n        // All shapes of body j\n        for(var l=0, Nshapesj=bodyB.shapes.length; l!==Nshapesj; l++){\n            var shapeB = bodyB.shapes[l];\n\n            bodyB.toWorldFrame(shapePositionB, shapeB.position);\n\n            if(this[shapeA.type | shapeB.type](\n                bodyA,\n                shapeA,\n                shapePositionA,\n                shapeA.angle + bodyA.angle,\n                bodyB,\n                shapeB,\n                shapePositionB,\n                shapeB.angle + bodyB.angle,\n                true\n            )){\n                return true;\n            }\n        }\n    }\n\n    return false;\n};\n\n/**\n * Check if the bodies were in contact since the last reset().\n * @method collidedLastStep\n * @param  {Body} bodyA\n * @param  {Body} bodyB\n * @return {Boolean}\n */\nNarrowphase.prototype.collidedLastStep = function(bodyA, bodyB){\n    var id1 = bodyA.id|0,\n        id2 = bodyB.id|0;\n    return !!this.collidingBodiesLastStep.get(id1, id2);\n};\n\n/**\n * Throws away the old equations and gets ready to create new\n * @method reset\n */\nNarrowphase.prototype.reset = function(){\n    this.collidingBodiesLastStep.reset();\n\n    var eqs = this.contactEquations;\n    var l = eqs.length;\n    while(l--){\n        var eq = eqs[l],\n            id1 = eq.bodyA.id,\n            id2 = eq.bodyB.id;\n        this.collidingBodiesLastStep.set(id1, id2, true);\n    }\n\n    var ce = this.contactEquations,\n        fe = this.frictionEquations;\n    for(var i=0; i<ce.length; i++){\n        this.contactEquationPool.release(ce[i]);\n    }\n    for(var i=0; i<fe.length; i++){\n        this.frictionEquationPool.release(fe[i]);\n    }\n\n    // Reset\n    this.contactEquations.length = this.frictionEquations.length = 0;\n};\n\n/**\n * Creates a ContactEquation, either by reusing an existing object or creating a new one.\n * @method createContactEquation\n * @param  {Body} bodyA\n * @param  {Body} bodyB\n * @return {ContactEquation}\n */\nNarrowphase.prototype.createContactEquation = function(bodyA, bodyB, shapeA, shapeB){\n    var c = this.contactEquationPool.get();\n    c.bodyA = bodyA;\n    c.bodyB = bodyB;\n    c.shapeA = shapeA;\n    c.shapeB = shapeB;\n    c.restitution = this.restitution;\n    c.firstImpact = !this.collidedLastStep(bodyA,bodyB);\n    c.stiffness = this.stiffness;\n    c.relaxation = this.relaxation;\n    c.needsUpdate = true;\n    c.enabled = this.enabledEquations;\n    c.offset = this.contactSkinSize;\n\n    return c;\n};\n\n/**\n * Creates a FrictionEquation, either by reusing an existing object or creating a new one.\n * @method createFrictionEquation\n * @param  {Body} bodyA\n * @param  {Body} bodyB\n * @return {FrictionEquation}\n */\nNarrowphase.prototype.createFrictionEquation = function(bodyA, bodyB, shapeA, shapeB){\n    var c = this.frictionEquationPool.get();\n    c.bodyA = bodyA;\n    c.bodyB = bodyB;\n    c.shapeA = shapeA;\n    c.shapeB = shapeB;\n    c.setSlipForce(this.slipForce);\n    c.frictionCoefficient = this.frictionCoefficient;\n    c.relativeVelocity = this.surfaceVelocity;\n    c.enabled = this.enabledEquations;\n    c.needsUpdate = true;\n    c.stiffness = this.frictionStiffness;\n    c.relaxation = this.frictionRelaxation;\n    c.contactEquations.length = 0;\n    return c;\n};\n\n/**\n * Creates a FrictionEquation given the data in the ContactEquation. Uses same offset vectors ri and rj, but the tangent vector will be constructed from the collision normal.\n * @method createFrictionFromContact\n * @param  {ContactEquation} contactEquation\n * @return {FrictionEquation}\n */\nNarrowphase.prototype.createFrictionFromContact = function(c){\n    var eq = this.createFrictionEquation(c.bodyA, c.bodyB, c.shapeA, c.shapeB);\n    vec2.copy(eq.contactPointA, c.contactPointA);\n    vec2.copy(eq.contactPointB, c.contactPointB);\n    vec2.rotate90cw(eq.t, c.normalA);\n    eq.contactEquations.push(c);\n    return eq;\n};\n\n// Take the average N latest contact point on the plane.\nNarrowphase.prototype.createFrictionFromAverage = function(numContacts){\n    var c = this.contactEquations[this.contactEquations.length - 1];\n    var eq = this.createFrictionEquation(c.bodyA, c.bodyB, c.shapeA, c.shapeB);\n    var bodyA = c.bodyA;\n    var bodyB = c.bodyB;\n    vec2.set(eq.contactPointA, 0, 0);\n    vec2.set(eq.contactPointB, 0, 0);\n    vec2.set(eq.t, 0, 0);\n    for(var i=0; i!==numContacts; i++){\n        c = this.contactEquations[this.contactEquations.length - 1 - i];\n        if(c.bodyA === bodyA){\n            vec2.add(eq.t, eq.t, c.normalA);\n            vec2.add(eq.contactPointA, eq.contactPointA, c.contactPointA);\n            vec2.add(eq.contactPointB, eq.contactPointB, c.contactPointB);\n        } else {\n            vec2.sub(eq.t, eq.t, c.normalA);\n            vec2.add(eq.contactPointA, eq.contactPointA, c.contactPointB);\n            vec2.add(eq.contactPointB, eq.contactPointB, c.contactPointA);\n        }\n        eq.contactEquations.push(c);\n    }\n\n    var invNumContacts = 1/numContacts;\n    vec2.scale(eq.contactPointA, eq.contactPointA, invNumContacts);\n    vec2.scale(eq.contactPointB, eq.contactPointB, invNumContacts);\n    vec2.normalize(eq.t, eq.t);\n    vec2.rotate90cw(eq.t, eq.t);\n    return eq;\n};\n\n/**\n * Convex/line narrowphase\n * @method convexLine\n * @param  {Body}       convexBody\n * @param  {Convex}     convexShape\n * @param  {Array}      convexOffset\n * @param  {Number}     convexAngle\n * @param  {Body}       lineBody\n * @param  {Line}       lineShape\n * @param  {Array}      lineOffset\n * @param  {Number}     lineAngle\n * @param {boolean}     justTest\n * @todo Implement me!\n */\nNarrowphase.prototype[Shape.LINE | Shape.CONVEX] =\nNarrowphase.prototype.convexLine = function(\n    convexBody,\n    convexShape,\n    convexOffset,\n    convexAngle,\n    lineBody,\n    lineShape,\n    lineOffset,\n    lineAngle,\n    justTest\n){\n    // TODO\n    if(justTest){\n        return false;\n    } else {\n        return 0;\n    }\n};\n\n/**\n * Line/box narrowphase\n * @method lineBox\n * @param  {Body}       lineBody\n * @param  {Line}       lineShape\n * @param  {Array}      lineOffset\n * @param  {Number}     lineAngle\n * @param  {Body}       boxBody\n * @param  {Box}  boxShape\n * @param  {Array}      boxOffset\n * @param  {Number}     boxAngle\n * @param  {Boolean}    justTest\n * @todo Implement me!\n */\nNarrowphase.prototype[Shape.LINE | Shape.BOX] =\nNarrowphase.prototype.lineBox = function(\n    lineBody,\n    lineShape,\n    lineOffset,\n    lineAngle,\n    boxBody,\n    boxShape,\n    boxOffset,\n    boxAngle,\n    justTest\n){\n    // TODO\n    if(justTest){\n        return false;\n    } else {\n        return 0;\n    }\n};\n\nfunction setConvexToCapsuleShapeMiddle(convexShape, capsuleShape){\n    vec2.set(convexShape.vertices[0], -capsuleShape.length * 0.5, -capsuleShape.radius);\n    vec2.set(convexShape.vertices[1],  capsuleShape.length * 0.5, -capsuleShape.radius);\n    vec2.set(convexShape.vertices[2],  capsuleShape.length * 0.5,  capsuleShape.radius);\n    vec2.set(convexShape.vertices[3], -capsuleShape.length * 0.5,  capsuleShape.radius);\n}\n\nvar convexCapsule_tempRect = new Box({ width: 1, height: 1 }),\n    convexCapsule_tempVec = vec2.create();\n\n/**\n * Convex/capsule narrowphase\n * @method convexCapsule\n * @param  {Body}       convexBody\n * @param  {Convex}     convexShape\n * @param  {Array}      convexPosition\n * @param  {Number}     convexAngle\n * @param  {Body}       capsuleBody\n * @param  {Capsule}    capsuleShape\n * @param  {Array}      capsulePosition\n * @param  {Number}     capsuleAngle\n */\nNarrowphase.prototype[Shape.CAPSULE | Shape.CONVEX] =\nNarrowphase.prototype[Shape.CAPSULE | Shape.BOX] =\nNarrowphase.prototype.convexCapsule = function(\n    convexBody,\n    convexShape,\n    convexPosition,\n    convexAngle,\n    capsuleBody,\n    capsuleShape,\n    capsulePosition,\n    capsuleAngle,\n    justTest\n){\n\n    // Check the circles\n    // Add offsets!\n    var circlePos = convexCapsule_tempVec;\n    vec2.set(circlePos, capsuleShape.length/2,0);\n    vec2.rotate(circlePos,circlePos,capsuleAngle);\n    vec2.add(circlePos,circlePos,capsulePosition);\n    var result1 = this.circleConvex(capsuleBody,capsuleShape,circlePos,capsuleAngle, convexBody,convexShape,convexPosition,convexAngle, justTest, capsuleShape.radius);\n\n    vec2.set(circlePos,-capsuleShape.length/2, 0);\n    vec2.rotate(circlePos,circlePos,capsuleAngle);\n    vec2.add(circlePos,circlePos,capsulePosition);\n    var result2 = this.circleConvex(capsuleBody,capsuleShape,circlePos,capsuleAngle, convexBody,convexShape,convexPosition,convexAngle, justTest, capsuleShape.radius);\n\n    if(justTest && (result1 || result2)){\n        return true;\n    }\n\n    // Check center rect\n    var r = convexCapsule_tempRect;\n    setConvexToCapsuleShapeMiddle(r,capsuleShape);\n    var result = this.convexConvex(convexBody,convexShape,convexPosition,convexAngle, capsuleBody,r,capsulePosition,capsuleAngle, justTest);\n\n    return result + result1 + result2;\n};\n\n/**\n * Capsule/line narrowphase\n * @method lineCapsule\n * @param  {Body}       lineBody\n * @param  {Line}       lineShape\n * @param  {Array}      linePosition\n * @param  {Number}     lineAngle\n * @param  {Body}       capsuleBody\n * @param  {Capsule}    capsuleShape\n * @param  {Array}      capsulePosition\n * @param  {Number}     capsuleAngle\n * @todo Implement me!\n */\nNarrowphase.prototype[Shape.CAPSULE | Shape.LINE] =\nNarrowphase.prototype.lineCapsule = function(\n    lineBody,\n    lineShape,\n    linePosition,\n    lineAngle,\n    capsuleBody,\n    capsuleShape,\n    capsulePosition,\n    capsuleAngle,\n    justTest\n){\n    // TODO\n    if(justTest){\n        return false;\n    } else {\n        return 0;\n    }\n};\n\nvar capsuleCapsule_tempVec1 = vec2.create();\nvar capsuleCapsule_tempVec2 = vec2.create();\nvar capsuleCapsule_tempRect1 = new Box({ width: 1, height: 1 });\n\n/**\n * Capsule/capsule narrowphase\n * @method capsuleCapsule\n * @param  {Body}       bi\n * @param  {Capsule}    si\n * @param  {Array}      xi\n * @param  {Number}     ai\n * @param  {Body}       bj\n * @param  {Capsule}    sj\n * @param  {Array}      xj\n * @param  {Number}     aj\n */\nNarrowphase.prototype[Shape.CAPSULE | Shape.CAPSULE] =\nNarrowphase.prototype.capsuleCapsule = function(bi,si,xi,ai, bj,sj,xj,aj, justTest){\n\n    var enableFrictionBefore;\n\n    // Check the circles\n    // Add offsets!\n    var circlePosi = capsuleCapsule_tempVec1,\n        circlePosj = capsuleCapsule_tempVec2;\n\n    var numContacts = 0;\n\n\n    // Need 4 circle checks, between all\n    for(var i=0; i<2; i++){\n\n        vec2.set(circlePosi,(i===0?-1:1)*si.length/2,0);\n        vec2.rotate(circlePosi,circlePosi,ai);\n        vec2.add(circlePosi,circlePosi,xi);\n\n        for(var j=0; j<2; j++){\n\n            vec2.set(circlePosj,(j===0?-1:1)*sj.length/2, 0);\n            vec2.rotate(circlePosj,circlePosj,aj);\n            vec2.add(circlePosj,circlePosj,xj);\n\n            // Temporarily turn off friction\n            if(this.enableFrictionReduction){\n                enableFrictionBefore = this.enableFriction;\n                this.enableFriction = false;\n            }\n\n            var result = this.circleCircle(bi,si,circlePosi,ai, bj,sj,circlePosj,aj, justTest, si.radius, sj.radius);\n\n            if(this.enableFrictionReduction){\n                this.enableFriction = enableFrictionBefore;\n            }\n\n            if(justTest && result){\n                return true;\n            }\n\n            numContacts += result;\n        }\n    }\n\n    if(this.enableFrictionReduction){\n        // Temporarily turn off friction\n        enableFrictionBefore = this.enableFriction;\n        this.enableFriction = false;\n    }\n\n    // Check circles against the center boxs\n    var rect = capsuleCapsule_tempRect1;\n    setConvexToCapsuleShapeMiddle(rect,si);\n    var result1 = this.convexCapsule(bi,rect,xi,ai, bj,sj,xj,aj, justTest);\n\n    if(this.enableFrictionReduction){\n        this.enableFriction = enableFrictionBefore;\n    }\n\n    if(justTest && result1){\n        return true;\n    }\n    numContacts += result1;\n\n    if(this.enableFrictionReduction){\n        // Temporarily turn off friction\n        var enableFrictionBefore = this.enableFriction;\n        this.enableFriction = false;\n    }\n\n    setConvexToCapsuleShapeMiddle(rect,sj);\n    var result2 = this.convexCapsule(bj,rect,xj,aj, bi,si,xi,ai, justTest);\n\n    if(this.enableFrictionReduction){\n        this.enableFriction = enableFrictionBefore;\n    }\n\n    if(justTest && result2){\n        return true;\n    }\n    numContacts += result2;\n\n    if(this.enableFrictionReduction){\n        if(numContacts && this.enableFriction){\n            this.frictionEquations.push(this.createFrictionFromAverage(numContacts));\n        }\n    }\n\n    return numContacts;\n};\n\n/**\n * Line/line narrowphase\n * @method lineLine\n * @param  {Body}       bodyA\n * @param  {Line}       shapeA\n * @param  {Array}      positionA\n * @param  {Number}     angleA\n * @param  {Body}       bodyB\n * @param  {Line}       shapeB\n * @param  {Array}      positionB\n * @param  {Number}     angleB\n * @todo Implement me!\n */\nNarrowphase.prototype[Shape.LINE | Shape.LINE] =\nNarrowphase.prototype.lineLine = function(\n    bodyA,\n    shapeA,\n    positionA,\n    angleA,\n    bodyB,\n    shapeB,\n    positionB,\n    angleB,\n    justTest\n){\n    // TODO\n    if(justTest){\n        return false;\n    } else {\n        return 0;\n    }\n};\n\n/**\n * Plane/line Narrowphase\n * @method planeLine\n * @param  {Body}   planeBody\n * @param  {Plane}  planeShape\n * @param  {Array}  planeOffset\n * @param  {Number} planeAngle\n * @param  {Body}   lineBody\n * @param  {Line}   lineShape\n * @param  {Array}  lineOffset\n * @param  {Number} lineAngle\n */\nNarrowphase.prototype[Shape.PLANE | Shape.LINE] =\nNarrowphase.prototype.planeLine = function(planeBody, planeShape, planeOffset, planeAngle,\n                                           lineBody,  lineShape,  lineOffset,  lineAngle, justTest){\n    var worldVertex0 = tmp1,\n        worldVertex1 = tmp2,\n        worldVertex01 = tmp3,\n        worldVertex11 = tmp4,\n        worldEdge = tmp5,\n        worldEdgeUnit = tmp6,\n        dist = tmp7,\n        worldNormal = tmp8,\n        worldTangent = tmp9,\n        verts = tmpArray,\n        numContacts = 0;\n\n    // Get start and end points\n    vec2.set(worldVertex0, -lineShape.length/2, 0);\n    vec2.set(worldVertex1,  lineShape.length/2, 0);\n\n    // Not sure why we have to use worldVertex*1 here, but it won't work otherwise. Tired.\n    vec2.rotate(worldVertex01, worldVertex0, lineAngle);\n    vec2.rotate(worldVertex11, worldVertex1, lineAngle);\n\n    add(worldVertex01, worldVertex01, lineOffset);\n    add(worldVertex11, worldVertex11, lineOffset);\n\n    vec2.copy(worldVertex0,worldVertex01);\n    vec2.copy(worldVertex1,worldVertex11);\n\n    // Get vector along the line\n    sub(worldEdge, worldVertex1, worldVertex0);\n    vec2.normalize(worldEdgeUnit, worldEdge);\n\n    // Get tangent to the edge.\n    vec2.rotate90cw(worldTangent, worldEdgeUnit);\n\n    vec2.rotate(worldNormal, yAxis, planeAngle);\n\n    // Check line ends\n    verts[0] = worldVertex0;\n    verts[1] = worldVertex1;\n    for(var i=0; i<verts.length; i++){\n        var v = verts[i];\n\n        sub(dist, v, planeOffset);\n\n        var d = dot(dist,worldNormal);\n\n        if(d < 0){\n\n            if(justTest){\n                return true;\n            }\n\n            var c = this.createContactEquation(planeBody,lineBody,planeShape,lineShape);\n            numContacts++;\n\n            vec2.copy(c.normalA, worldNormal);\n            vec2.normalize(c.normalA,c.normalA);\n\n            // distance vector along plane normal\n            vec2.scale(dist, worldNormal, d);\n\n            // Vector from plane center to contact\n            sub(c.contactPointA, v, dist);\n            sub(c.contactPointA, c.contactPointA, planeBody.position);\n\n            // From line center to contact\n            sub(c.contactPointB, v,    lineOffset);\n            add(c.contactPointB, c.contactPointB, lineOffset);\n            sub(c.contactPointB, c.contactPointB, lineBody.position);\n\n            this.contactEquations.push(c);\n\n            if(!this.enableFrictionReduction){\n                if(this.enableFriction){\n                    this.frictionEquations.push(this.createFrictionFromContact(c));\n                }\n            }\n        }\n    }\n\n    if(justTest){\n        return false;\n    }\n\n    if(!this.enableFrictionReduction){\n        if(numContacts && this.enableFriction){\n            this.frictionEquations.push(this.createFrictionFromAverage(numContacts));\n        }\n    }\n\n    return numContacts;\n};\n\nNarrowphase.prototype[Shape.PARTICLE | Shape.CAPSULE] =\nNarrowphase.prototype.particleCapsule = function(\n    particleBody,\n    particleShape,\n    particlePosition,\n    particleAngle,\n    capsuleBody,\n    capsuleShape,\n    capsulePosition,\n    capsuleAngle,\n    justTest\n){\n    return this.circleLine(particleBody,particleShape,particlePosition,particleAngle, capsuleBody,capsuleShape,capsulePosition,capsuleAngle, justTest, capsuleShape.radius, 0);\n};\n\n/**\n * Circle/line Narrowphase\n * @method circleLine\n * @param  {Body} circleBody\n * @param  {Circle} circleShape\n * @param  {Array} circleOffset\n * @param  {Number} circleAngle\n * @param  {Body} lineBody\n * @param  {Line} lineShape\n * @param  {Array} lineOffset\n * @param  {Number} lineAngle\n * @param {Boolean} justTest If set to true, this function will return the result (intersection or not) without adding equations.\n * @param {Number} lineRadius Radius to add to the line. Can be used to test Capsules.\n * @param {Number} circleRadius If set, this value overrides the circle shape radius.\n */\nNarrowphase.prototype[Shape.CIRCLE | Shape.LINE] =\nNarrowphase.prototype.circleLine = function(\n    circleBody,\n    circleShape,\n    circleOffset,\n    circleAngle,\n    lineBody,\n    lineShape,\n    lineOffset,\n    lineAngle,\n    justTest,\n    lineRadius,\n    circleRadius\n){\n    var lineRadius = lineRadius || 0,\n        circleRadius = typeof(circleRadius)!==\"undefined\" ? circleRadius : circleShape.radius,\n\n        orthoDist = tmp1,\n        lineToCircleOrthoUnit = tmp2,\n        projectedPoint = tmp3,\n        centerDist = tmp4,\n        worldTangent = tmp5,\n        worldEdge = tmp6,\n        worldEdgeUnit = tmp7,\n        worldVertex0 = tmp8,\n        worldVertex1 = tmp9,\n        worldVertex01 = tmp10,\n        worldVertex11 = tmp11,\n        dist = tmp12,\n        lineToCircle = tmp13,\n        lineEndToLineRadius = tmp14,\n\n        verts = tmpArray;\n\n    // Get start and end points\n    vec2.set(worldVertex0, -lineShape.length/2, 0);\n    vec2.set(worldVertex1,  lineShape.length/2, 0);\n\n    // Not sure why we have to use worldVertex*1 here, but it won't work otherwise. Tired.\n    vec2.rotate(worldVertex01, worldVertex0, lineAngle);\n    vec2.rotate(worldVertex11, worldVertex1, lineAngle);\n\n    add(worldVertex01, worldVertex01, lineOffset);\n    add(worldVertex11, worldVertex11, lineOffset);\n\n    vec2.copy(worldVertex0,worldVertex01);\n    vec2.copy(worldVertex1,worldVertex11);\n\n    // Get vector along the line\n    sub(worldEdge, worldVertex1, worldVertex0);\n    vec2.normalize(worldEdgeUnit, worldEdge);\n\n    // Get tangent to the edge.\n    vec2.rotate90cw(worldTangent, worldEdgeUnit);\n\n    // Check distance from the plane spanned by the edge vs the circle\n    sub(dist, circleOffset, worldVertex0);\n    var d = dot(dist, worldTangent); // Distance from center of line to circle center\n    sub(centerDist, worldVertex0, lineOffset);\n\n    sub(lineToCircle, circleOffset, lineOffset);\n\n    var radiusSum = circleRadius + lineRadius;\n\n    if(Math.abs(d) < radiusSum){\n\n        // Now project the circle onto the edge\n        vec2.scale(orthoDist, worldTangent, d);\n        sub(projectedPoint, circleOffset, orthoDist);\n\n        // Add the missing line radius\n        vec2.scale(lineToCircleOrthoUnit, worldTangent, dot(worldTangent, lineToCircle));\n        vec2.normalize(lineToCircleOrthoUnit,lineToCircleOrthoUnit);\n        vec2.scale(lineToCircleOrthoUnit, lineToCircleOrthoUnit, lineRadius);\n        add(projectedPoint,projectedPoint,lineToCircleOrthoUnit);\n\n        // Check if the point is within the edge span\n        var pos =  dot(worldEdgeUnit, projectedPoint);\n        var pos0 = dot(worldEdgeUnit, worldVertex0);\n        var pos1 = dot(worldEdgeUnit, worldVertex1);\n\n        if(pos > pos0 && pos < pos1){\n            // We got contact!\n\n            if(justTest){\n                return true;\n            }\n\n            var c = this.createContactEquation(circleBody,lineBody,circleShape,lineShape);\n\n            vec2.scale(c.normalA, orthoDist, -1);\n            vec2.normalize(c.normalA, c.normalA);\n\n            vec2.scale( c.contactPointA, c.normalA,  circleRadius);\n            add(c.contactPointA, c.contactPointA, circleOffset);\n            sub(c.contactPointA, c.contactPointA, circleBody.position);\n\n            sub(c.contactPointB, projectedPoint, lineOffset);\n            add(c.contactPointB, c.contactPointB, lineOffset);\n            sub(c.contactPointB, c.contactPointB, lineBody.position);\n\n            this.contactEquations.push(c);\n\n            if(this.enableFriction){\n                this.frictionEquations.push(this.createFrictionFromContact(c));\n            }\n\n            return 1;\n        }\n    }\n\n    // Add corner\n    verts[0] = worldVertex0;\n    verts[1] = worldVertex1;\n\n    for(var i=0; i<verts.length; i++){\n        var v = verts[i];\n\n        sub(dist, v, circleOffset);\n\n        if(vec2.squaredLength(dist) < Math.pow(radiusSum, 2)){\n\n            if(justTest){\n                return true;\n            }\n\n            var c = this.createContactEquation(circleBody,lineBody,circleShape,lineShape);\n\n            vec2.copy(c.normalA, dist);\n            vec2.normalize(c.normalA,c.normalA);\n\n            // Vector from circle to contact point is the normal times the circle radius\n            vec2.scale(c.contactPointA, c.normalA, circleRadius);\n            add(c.contactPointA, c.contactPointA, circleOffset);\n            sub(c.contactPointA, c.contactPointA, circleBody.position);\n\n            sub(c.contactPointB, v, lineOffset);\n            vec2.scale(lineEndToLineRadius, c.normalA, -lineRadius);\n            add(c.contactPointB, c.contactPointB, lineEndToLineRadius);\n            add(c.contactPointB, c.contactPointB, lineOffset);\n            sub(c.contactPointB, c.contactPointB, lineBody.position);\n\n            this.contactEquations.push(c);\n\n            if(this.enableFriction){\n                this.frictionEquations.push(this.createFrictionFromContact(c));\n            }\n\n            return 1;\n        }\n    }\n\n    return 0;\n};\n\n/**\n * Circle/capsule Narrowphase\n * @method circleCapsule\n * @param  {Body}   bi\n * @param  {Circle} si\n * @param  {Array}  xi\n * @param  {Number} ai\n * @param  {Body}   bj\n * @param  {Line}   sj\n * @param  {Array}  xj\n * @param  {Number} aj\n */\nNarrowphase.prototype[Shape.CIRCLE | Shape.CAPSULE] =\nNarrowphase.prototype.circleCapsule = function(bi,si,xi,ai, bj,sj,xj,aj, justTest){\n    return this.circleLine(bi,si,xi,ai, bj,sj,xj,aj, justTest, sj.radius);\n};\n\n/**\n * Circle/convex Narrowphase.\n * @method circleConvex\n * @param  {Body} circleBody\n * @param  {Circle} circleShape\n * @param  {Array} circleOffset\n * @param  {Number} circleAngle\n * @param  {Body} convexBody\n * @param  {Convex} convexShape\n * @param  {Array} convexOffset\n * @param  {Number} convexAngle\n * @param  {Boolean} justTest\n * @param  {Number} circleRadius\n */\nNarrowphase.prototype[Shape.CIRCLE | Shape.CONVEX] =\nNarrowphase.prototype[Shape.CIRCLE | Shape.BOX] =\nNarrowphase.prototype.circleConvex = function(\n    circleBody,\n    circleShape,\n    circleOffset,\n    circleAngle,\n    convexBody,\n    convexShape,\n    convexOffset,\n    convexAngle,\n    justTest,\n    circleRadius\n){\n    var circleRadius = typeof(circleRadius)===\"number\" ? circleRadius : circleShape.radius;\n\n    var worldVertex0 = tmp1,\n        worldVertex1 = tmp2,\n        worldEdge = tmp3,\n        worldEdgeUnit = tmp4,\n        worldNormal = tmp5,\n        centerDist = tmp6,\n        convexToCircle = tmp7,\n        orthoDist = tmp8,\n        projectedPoint = tmp9,\n        dist = tmp10,\n        worldVertex = tmp11,\n\n        closestEdge = -1,\n        closestEdgeDistance = null,\n        closestEdgeOrthoDist = tmp12,\n        closestEdgeProjectedPoint = tmp13,\n        candidate = tmp14,\n        candidateDist = tmp15,\n        minCandidate = tmp16,\n\n        found = false,\n        minCandidateDistance = Number.MAX_VALUE;\n\n    var numReported = 0;\n\n    // New algorithm:\n    // 1. Check so center of circle is not inside the polygon. If it is, this wont work...\n    // 2. For each edge\n    // 2. 1. Get point on circle that is closest to the edge (scale normal with -radius)\n    // 2. 2. Check if point is inside.\n\n    var verts = convexShape.vertices;\n\n    // Check all edges first\n    for(var i=0; i!==verts.length+1; i++){\n        var v0 = verts[i%verts.length],\n            v1 = verts[(i+1)%verts.length];\n\n        vec2.rotate(worldVertex0, v0, convexAngle);\n        vec2.rotate(worldVertex1, v1, convexAngle);\n        add(worldVertex0, worldVertex0, convexOffset);\n        add(worldVertex1, worldVertex1, convexOffset);\n        sub(worldEdge, worldVertex1, worldVertex0);\n\n        vec2.normalize(worldEdgeUnit, worldEdge);\n\n        // Get tangent to the edge. Points out of the Convex\n        vec2.rotate90cw(worldNormal, worldEdgeUnit);\n\n        // Get point on circle, closest to the polygon\n        vec2.scale(candidate,worldNormal,-circleShape.radius);\n        add(candidate,candidate,circleOffset);\n\n        if(pointInConvex(candidate,convexShape,convexOffset,convexAngle)){\n\n            vec2.sub(candidateDist,worldVertex0,candidate);\n            var candidateDistance = Math.abs(vec2.dot(candidateDist,worldNormal));\n\n            if(candidateDistance < minCandidateDistance){\n                vec2.copy(minCandidate,candidate);\n                minCandidateDistance = candidateDistance;\n                vec2.scale(closestEdgeProjectedPoint,worldNormal,candidateDistance);\n                vec2.add(closestEdgeProjectedPoint,closestEdgeProjectedPoint,candidate);\n                found = true;\n            }\n        }\n    }\n\n    if(found){\n\n        if(justTest){\n            return true;\n        }\n\n        var c = this.createContactEquation(circleBody,convexBody,circleShape,convexShape);\n        vec2.sub(c.normalA, minCandidate, circleOffset);\n        vec2.normalize(c.normalA, c.normalA);\n\n        vec2.scale(c.contactPointA,  c.normalA, circleRadius);\n        add(c.contactPointA, c.contactPointA, circleOffset);\n        sub(c.contactPointA, c.contactPointA, circleBody.position);\n\n        sub(c.contactPointB, closestEdgeProjectedPoint, convexOffset);\n        add(c.contactPointB, c.contactPointB, convexOffset);\n        sub(c.contactPointB, c.contactPointB, convexBody.position);\n\n        this.contactEquations.push(c);\n\n        if(this.enableFriction){\n            this.frictionEquations.push( this.createFrictionFromContact(c) );\n        }\n\n        return 1;\n    }\n\n    // Check all vertices\n    if(circleRadius > 0){\n        for(var i=0; i<verts.length; i++){\n            var localVertex = verts[i];\n            vec2.rotate(worldVertex, localVertex, convexAngle);\n            add(worldVertex, worldVertex, convexOffset);\n\n            sub(dist, worldVertex, circleOffset);\n            if(vec2.squaredLength(dist) < Math.pow(circleRadius, 2)){\n\n                if(justTest){\n                    return true;\n                }\n\n                var c = this.createContactEquation(circleBody,convexBody,circleShape,convexShape);\n\n                vec2.copy(c.normalA, dist);\n                vec2.normalize(c.normalA,c.normalA);\n\n                // Vector from circle to contact point is the normal times the circle radius\n                vec2.scale(c.contactPointA, c.normalA, circleRadius);\n                add(c.contactPointA, c.contactPointA, circleOffset);\n                sub(c.contactPointA, c.contactPointA, circleBody.position);\n\n                sub(c.contactPointB, worldVertex, convexOffset);\n                add(c.contactPointB, c.contactPointB, convexOffset);\n                sub(c.contactPointB, c.contactPointB, convexBody.position);\n\n                this.contactEquations.push(c);\n\n                if(this.enableFriction){\n                    this.frictionEquations.push(this.createFrictionFromContact(c));\n                }\n\n                return 1;\n            }\n        }\n    }\n\n    return 0;\n};\n\nvar pic_worldVertex0 = vec2.create(),\n    pic_worldVertex1 = vec2.create(),\n    pic_r0 = vec2.create(),\n    pic_r1 = vec2.create();\n\n/*\n * Check if a point is in a polygon\n */\nfunction pointInConvex(worldPoint,convexShape,convexOffset,convexAngle){\n    var worldVertex0 = pic_worldVertex0,\n        worldVertex1 = pic_worldVertex1,\n        r0 = pic_r0,\n        r1 = pic_r1,\n        point = worldPoint,\n        verts = convexShape.vertices,\n        lastCross = null;\n    for(var i=0; i!==verts.length+1; i++){\n        var v0 = verts[i%verts.length],\n            v1 = verts[(i+1)%verts.length];\n\n        // Transform vertices to world\n        // @todo The point should be transformed to local coordinates in the convex, no need to transform each vertex\n        vec2.rotate(worldVertex0, v0, convexAngle);\n        vec2.rotate(worldVertex1, v1, convexAngle);\n        add(worldVertex0, worldVertex0, convexOffset);\n        add(worldVertex1, worldVertex1, convexOffset);\n\n        sub(r0, worldVertex0, point);\n        sub(r1, worldVertex1, point);\n        var cross = vec2.crossLength(r0,r1);\n\n        if(lastCross===null){\n            lastCross = cross;\n        }\n\n        // If we got a different sign of the distance vector, the point is out of the polygon\n        if(cross*lastCross <= 0){\n            return false;\n        }\n        lastCross = cross;\n    }\n    return true;\n}\n\n/**\n * Particle/convex Narrowphase\n * @method particleConvex\n * @param  {Body} particleBody\n * @param  {Particle} particleShape\n * @param  {Array} particleOffset\n * @param  {Number} particleAngle\n * @param  {Body} convexBody\n * @param  {Convex} convexShape\n * @param  {Array} convexOffset\n * @param  {Number} convexAngle\n * @param {Boolean} justTest\n * @todo use pointInConvex and code more similar to circleConvex\n * @todo don't transform each vertex, but transform the particle position to convex-local instead\n */\nNarrowphase.prototype[Shape.PARTICLE | Shape.CONVEX] =\nNarrowphase.prototype[Shape.PARTICLE | Shape.BOX] =\nNarrowphase.prototype.particleConvex = function(\n    particleBody,\n    particleShape,\n    particleOffset,\n    particleAngle,\n    convexBody,\n    convexShape,\n    convexOffset,\n    convexAngle,\n    justTest\n){\n    var worldVertex0 = tmp1,\n        worldVertex1 = tmp2,\n        worldEdge = tmp3,\n        worldEdgeUnit = tmp4,\n        worldTangent = tmp5,\n        centerDist = tmp6,\n        convexToparticle = tmp7,\n        orthoDist = tmp8,\n        projectedPoint = tmp9,\n        dist = tmp10,\n        worldVertex = tmp11,\n        closestEdge = -1,\n        closestEdgeDistance = null,\n        closestEdgeOrthoDist = tmp12,\n        closestEdgeProjectedPoint = tmp13,\n        r0 = tmp14, // vector from particle to vertex0\n        r1 = tmp15,\n        localPoint = tmp16,\n        candidateDist = tmp17,\n        minEdgeNormal = tmp18,\n        minCandidateDistance = Number.MAX_VALUE;\n\n    var numReported = 0,\n        found = false,\n        verts = convexShape.vertices;\n\n    // Check if the particle is in the polygon at all\n    if(!pointInConvex(particleOffset,convexShape,convexOffset,convexAngle)){\n        return 0;\n    }\n\n    if(justTest){\n        return true;\n    }\n\n    // Check edges first\n    var lastCross = null;\n    for(var i=0; i!==verts.length+1; i++){\n        var v0 = verts[i%verts.length],\n            v1 = verts[(i+1)%verts.length];\n\n        // Transform vertices to world\n        vec2.rotate(worldVertex0, v0, convexAngle);\n        vec2.rotate(worldVertex1, v1, convexAngle);\n        add(worldVertex0, worldVertex0, convexOffset);\n        add(worldVertex1, worldVertex1, convexOffset);\n\n        // Get world edge\n        sub(worldEdge, worldVertex1, worldVertex0);\n        vec2.normalize(worldEdgeUnit, worldEdge);\n\n        // Get tangent to the edge. Points out of the Convex\n        vec2.rotate90cw(worldTangent, worldEdgeUnit);\n\n        // Check distance from the infinite line (spanned by the edge) to the particle\n        sub(dist, particleOffset, worldVertex0);\n        var d = dot(dist, worldTangent);\n        sub(centerDist, worldVertex0, convexOffset);\n\n        sub(convexToparticle, particleOffset, convexOffset);\n\n        vec2.sub(candidateDist,worldVertex0,particleOffset);\n        var candidateDistance = Math.abs(vec2.dot(candidateDist,worldTangent));\n\n        if(candidateDistance < minCandidateDistance){\n            minCandidateDistance = candidateDistance;\n            vec2.scale(closestEdgeProjectedPoint,worldTangent,candidateDistance);\n            vec2.add(closestEdgeProjectedPoint,closestEdgeProjectedPoint,particleOffset);\n            vec2.copy(minEdgeNormal,worldTangent);\n            found = true;\n        }\n    }\n\n    if(found){\n        var c = this.createContactEquation(particleBody,convexBody,particleShape,convexShape);\n\n        vec2.scale(c.normalA, minEdgeNormal, -1);\n        vec2.normalize(c.normalA, c.normalA);\n\n        // Particle has no extent to the contact point\n        vec2.set(c.contactPointA,  0, 0);\n        add(c.contactPointA, c.contactPointA, particleOffset);\n        sub(c.contactPointA, c.contactPointA, particleBody.position);\n\n        // From convex center to point\n        sub(c.contactPointB, closestEdgeProjectedPoint, convexOffset);\n        add(c.contactPointB, c.contactPointB, convexOffset);\n        sub(c.contactPointB, c.contactPointB, convexBody.position);\n\n        this.contactEquations.push(c);\n\n        if(this.enableFriction){\n            this.frictionEquations.push( this.createFrictionFromContact(c) );\n        }\n\n        return 1;\n    }\n\n\n    return 0;\n};\n\n/**\n * Circle/circle Narrowphase\n * @method circleCircle\n * @param  {Body} bodyA\n * @param  {Circle} shapeA\n * @param  {Array} offsetA\n * @param  {Number} angleA\n * @param  {Body} bodyB\n * @param  {Circle} shapeB\n * @param  {Array} offsetB\n * @param  {Number} angleB\n * @param {Boolean} justTest\n * @param {Number} [radiusA] Optional radius to use for shapeA\n * @param {Number} [radiusB] Optional radius to use for shapeB\n */\nNarrowphase.prototype[Shape.CIRCLE] =\nNarrowphase.prototype.circleCircle = function(\n    bodyA,\n    shapeA,\n    offsetA,\n    angleA,\n    bodyB,\n    shapeB,\n    offsetB,\n    angleB,\n    justTest,\n    radiusA,\n    radiusB\n){\n\n    var dist = tmp1,\n        radiusA = radiusA || shapeA.radius,\n        radiusB = radiusB || shapeB.radius;\n\n    sub(dist,offsetA,offsetB);\n    var r = radiusA + radiusB;\n    if(vec2.squaredLength(dist) > Math.pow(r,2)){\n        return 0;\n    }\n\n    if(justTest){\n        return true;\n    }\n\n    var c = this.createContactEquation(bodyA,bodyB,shapeA,shapeB);\n    sub(c.normalA, offsetB, offsetA);\n    vec2.normalize(c.normalA,c.normalA);\n\n    vec2.scale( c.contactPointA, c.normalA,  radiusA);\n    vec2.scale( c.contactPointB, c.normalA, -radiusB);\n\n    add(c.contactPointA, c.contactPointA, offsetA);\n    sub(c.contactPointA, c.contactPointA, bodyA.position);\n\n    add(c.contactPointB, c.contactPointB, offsetB);\n    sub(c.contactPointB, c.contactPointB, bodyB.position);\n\n    this.contactEquations.push(c);\n\n    if(this.enableFriction){\n        this.frictionEquations.push(this.createFrictionFromContact(c));\n    }\n    return 1;\n};\n\n/**\n * Plane/Convex Narrowphase\n * @method planeConvex\n * @param  {Body} planeBody\n * @param  {Plane} planeShape\n * @param  {Array} planeOffset\n * @param  {Number} planeAngle\n * @param  {Body} convexBody\n * @param  {Convex} convexShape\n * @param  {Array} convexOffset\n * @param  {Number} convexAngle\n * @param {Boolean} justTest\n */\nNarrowphase.prototype[Shape.PLANE | Shape.CONVEX] =\nNarrowphase.prototype[Shape.PLANE | Shape.BOX] =\nNarrowphase.prototype.planeConvex = function(\n    planeBody,\n    planeShape,\n    planeOffset,\n    planeAngle,\n    convexBody,\n    convexShape,\n    convexOffset,\n    convexAngle,\n    justTest\n){\n    var worldVertex = tmp1,\n        worldNormal = tmp2,\n        dist = tmp3;\n\n    var numReported = 0;\n    vec2.rotate(worldNormal, yAxis, planeAngle);\n\n    for(var i=0; i!==convexShape.vertices.length; i++){\n        var v = convexShape.vertices[i];\n        vec2.rotate(worldVertex, v, convexAngle);\n        add(worldVertex, worldVertex, convexOffset);\n\n        sub(dist, worldVertex, planeOffset);\n\n        if(dot(dist,worldNormal) <= 0){\n\n            if(justTest){\n                return true;\n            }\n\n            // Found vertex\n            numReported++;\n\n            var c = this.createContactEquation(planeBody,convexBody,planeShape,convexShape);\n\n            sub(dist, worldVertex, planeOffset);\n\n            vec2.copy(c.normalA, worldNormal);\n\n            var d = dot(dist, c.normalA);\n            vec2.scale(dist, c.normalA, d);\n\n            // rj is from convex center to contact\n            sub(c.contactPointB, worldVertex, convexBody.position);\n\n\n            // ri is from plane center to contact\n            sub( c.contactPointA, worldVertex, dist);\n            sub( c.contactPointA, c.contactPointA, planeBody.position);\n\n            this.contactEquations.push(c);\n\n            if(!this.enableFrictionReduction){\n                if(this.enableFriction){\n                    this.frictionEquations.push(this.createFrictionFromContact(c));\n                }\n            }\n        }\n    }\n\n    if(this.enableFrictionReduction){\n        if(this.enableFriction && numReported){\n            this.frictionEquations.push(this.createFrictionFromAverage(numReported));\n        }\n    }\n\n    return numReported;\n};\n\n/**\n * Narrowphase for particle vs plane\n * @method particlePlane\n * @param  {Body}       particleBody\n * @param  {Particle}   particleShape\n * @param  {Array}      particleOffset\n * @param  {Number}     particleAngle\n * @param  {Body}       planeBody\n * @param  {Plane}      planeShape\n * @param  {Array}      planeOffset\n * @param  {Number}     planeAngle\n * @param {Boolean}     justTest\n */\nNarrowphase.prototype[Shape.PARTICLE | Shape.PLANE] =\nNarrowphase.prototype.particlePlane = function(\n    particleBody,\n    particleShape,\n    particleOffset,\n    particleAngle,\n    planeBody,\n    planeShape,\n    planeOffset,\n    planeAngle,\n    justTest\n){\n    var dist = tmp1,\n        worldNormal = tmp2;\n\n    planeAngle = planeAngle || 0;\n\n    sub(dist, particleOffset, planeOffset);\n    vec2.rotate(worldNormal, yAxis, planeAngle);\n\n    var d = dot(dist, worldNormal);\n\n    if(d > 0){\n        return 0;\n    }\n    if(justTest){\n        return true;\n    }\n\n    var c = this.createContactEquation(planeBody,particleBody,planeShape,particleShape);\n\n    vec2.copy(c.normalA, worldNormal);\n    vec2.scale( dist, c.normalA, d );\n    // dist is now the distance vector in the normal direction\n\n    // ri is the particle position projected down onto the plane, from the plane center\n    sub( c.contactPointA, particleOffset, dist);\n    sub( c.contactPointA, c.contactPointA, planeBody.position);\n\n    // rj is from the body center to the particle center\n    sub( c.contactPointB, particleOffset, particleBody.position );\n\n    this.contactEquations.push(c);\n\n    if(this.enableFriction){\n        this.frictionEquations.push(this.createFrictionFromContact(c));\n    }\n    return 1;\n};\n\n/**\n * Circle/Particle Narrowphase\n * @method circleParticle\n * @param  {Body} circleBody\n * @param  {Circle} circleShape\n * @param  {Array} circleOffset\n * @param  {Number} circleAngle\n * @param  {Body} particleBody\n * @param  {Particle} particleShape\n * @param  {Array} particleOffset\n * @param  {Number} particleAngle\n * @param  {Boolean} justTest\n */\nNarrowphase.prototype[Shape.CIRCLE | Shape.PARTICLE] =\nNarrowphase.prototype.circleParticle = function(\n    circleBody,\n    circleShape,\n    circleOffset,\n    circleAngle,\n    particleBody,\n    particleShape,\n    particleOffset,\n    particleAngle,\n    justTest\n){\n    var dist = tmp1;\n\n    sub(dist, particleOffset, circleOffset);\n    if(vec2.squaredLength(dist) > Math.pow(circleShape.radius, 2)){\n        return 0;\n    }\n    if(justTest){\n        return true;\n    }\n\n    var c = this.createContactEquation(circleBody,particleBody,circleShape,particleShape);\n    vec2.copy(c.normalA, dist);\n    vec2.normalize(c.normalA,c.normalA);\n\n    // Vector from circle to contact point is the normal times the circle radius\n    vec2.scale(c.contactPointA, c.normalA, circleShape.radius);\n    add(c.contactPointA, c.contactPointA, circleOffset);\n    sub(c.contactPointA, c.contactPointA, circleBody.position);\n\n    // Vector from particle center to contact point is zero\n    sub(c.contactPointB, particleOffset, particleBody.position);\n\n    this.contactEquations.push(c);\n\n    if(this.enableFriction){\n        this.frictionEquations.push(this.createFrictionFromContact(c));\n    }\n\n    return 1;\n};\n\nvar planeCapsule_tmpCircle = new Circle({ radius: 1 }),\n    planeCapsule_tmp1 = vec2.create(),\n    planeCapsule_tmp2 = vec2.create(),\n    planeCapsule_tmp3 = vec2.create();\n\n/**\n * @method planeCapsule\n * @param  {Body} planeBody\n * @param  {Circle} planeShape\n * @param  {Array} planeOffset\n * @param  {Number} planeAngle\n * @param  {Body} capsuleBody\n * @param  {Particle} capsuleShape\n * @param  {Array} capsuleOffset\n * @param  {Number} capsuleAngle\n * @param {Boolean} justTest\n */\nNarrowphase.prototype[Shape.PLANE | Shape.CAPSULE] =\nNarrowphase.prototype.planeCapsule = function(\n    planeBody,\n    planeShape,\n    planeOffset,\n    planeAngle,\n    capsuleBody,\n    capsuleShape,\n    capsuleOffset,\n    capsuleAngle,\n    justTest\n){\n    var end1 = planeCapsule_tmp1,\n        end2 = planeCapsule_tmp2,\n        circle = planeCapsule_tmpCircle,\n        dst = planeCapsule_tmp3;\n\n    // Compute world end positions\n    vec2.set(end1, -capsuleShape.length/2, 0);\n    vec2.rotate(end1,end1,capsuleAngle);\n    add(end1,end1,capsuleOffset);\n\n    vec2.set(end2,  capsuleShape.length/2, 0);\n    vec2.rotate(end2,end2,capsuleAngle);\n    add(end2,end2,capsuleOffset);\n\n    circle.radius = capsuleShape.radius;\n\n    var enableFrictionBefore;\n\n    // Temporarily turn off friction\n    if(this.enableFrictionReduction){\n        enableFrictionBefore = this.enableFriction;\n        this.enableFriction = false;\n    }\n\n    // Do Narrowphase as two circles\n    var numContacts1 = this.circlePlane(capsuleBody,circle,end1,0, planeBody,planeShape,planeOffset,planeAngle, justTest),\n        numContacts2 = this.circlePlane(capsuleBody,circle,end2,0, planeBody,planeShape,planeOffset,planeAngle, justTest);\n\n    // Restore friction\n    if(this.enableFrictionReduction){\n        this.enableFriction = enableFrictionBefore;\n    }\n\n    if(justTest){\n        return numContacts1 || numContacts2;\n    } else {\n        var numTotal = numContacts1 + numContacts2;\n        if(this.enableFrictionReduction){\n            if(numTotal){\n                this.frictionEquations.push(this.createFrictionFromAverage(numTotal));\n            }\n        }\n        return numTotal;\n    }\n};\n\n/**\n * Creates ContactEquations and FrictionEquations for a collision.\n * @method circlePlane\n * @param  {Body}    bi     The first body that should be connected to the equations.\n * @param  {Circle}  si     The circle shape participating in the collision.\n * @param  {Array}   xi     Extra offset to take into account for the Shape, in addition to the one in circleBody.position. Will *not* be rotated by circleBody.angle (maybe it should, for sake of homogenity?). Set to null if none.\n * @param  {Body}    bj     The second body that should be connected to the equations.\n * @param  {Plane}   sj     The Plane shape that is participating\n * @param  {Array}   xj     Extra offset for the plane shape.\n * @param  {Number}  aj     Extra angle to apply to the plane\n */\nNarrowphase.prototype[Shape.CIRCLE | Shape.PLANE] =\nNarrowphase.prototype.circlePlane = function(   bi,si,xi,ai, bj,sj,xj,aj, justTest ){\n    var circleBody = bi,\n        circleShape = si,\n        circleOffset = xi, // Offset from body center, rotated!\n        planeBody = bj,\n        shapeB = sj,\n        planeOffset = xj,\n        planeAngle = aj;\n\n    planeAngle = planeAngle || 0;\n\n    // Vector from plane to circle\n    var planeToCircle = tmp1,\n        worldNormal = tmp2,\n        temp = tmp3;\n\n    sub(planeToCircle, circleOffset, planeOffset);\n\n    // World plane normal\n    vec2.rotate(worldNormal, yAxis, planeAngle);\n\n    // Normal direction distance\n    var d = dot(worldNormal, planeToCircle);\n\n    if(d > circleShape.radius){\n        return 0; // No overlap. Abort.\n    }\n\n    if(justTest){\n        return true;\n    }\n\n    // Create contact\n    var contact = this.createContactEquation(planeBody,circleBody,sj,si);\n\n    // ni is the plane world normal\n    vec2.copy(contact.normalA, worldNormal);\n\n    // rj is the vector from circle center to the contact point\n    vec2.scale(contact.contactPointB, contact.normalA, -circleShape.radius);\n    add(contact.contactPointB, contact.contactPointB, circleOffset);\n    sub(contact.contactPointB, contact.contactPointB, circleBody.position);\n\n    // ri is the distance from plane center to contact.\n    vec2.scale(temp, contact.normalA, d);\n    sub(contact.contactPointA, planeToCircle, temp ); // Subtract normal distance vector from the distance vector\n    add(contact.contactPointA, contact.contactPointA, planeOffset);\n    sub(contact.contactPointA, contact.contactPointA, planeBody.position);\n\n    this.contactEquations.push(contact);\n\n    if(this.enableFriction){\n        this.frictionEquations.push( this.createFrictionFromContact(contact) );\n    }\n\n    return 1;\n};\n\n/**\n * Convex/convex Narrowphase.See <a href=\"http://www.altdevblogaday.com/2011/05/13/contact-generation-between-3d-convex-meshes/\">this article</a> for more info.\n * @method convexConvex\n * @param  {Body} bi\n * @param  {Convex} si\n * @param  {Array} xi\n * @param  {Number} ai\n * @param  {Body} bj\n * @param  {Convex} sj\n * @param  {Array} xj\n * @param  {Number} aj\n */\nNarrowphase.prototype[Shape.CONVEX] =\nNarrowphase.prototype[Shape.CONVEX | Shape.BOX] =\nNarrowphase.prototype[Shape.BOX] =\nNarrowphase.prototype.convexConvex = function(  bi,si,xi,ai, bj,sj,xj,aj, justTest, precision ){\n    var sepAxis = tmp1,\n        worldPoint = tmp2,\n        worldPoint0 = tmp3,\n        worldPoint1 = tmp4,\n        worldEdge = tmp5,\n        projected = tmp6,\n        penetrationVec = tmp7,\n        dist = tmp8,\n        worldNormal = tmp9,\n        numContacts = 0,\n        precision = typeof(precision) === 'number' ? precision : 0;\n\n    var found = Narrowphase.findSeparatingAxis(si,xi,ai,sj,xj,aj,sepAxis);\n    if(!found){\n        return 0;\n    }\n\n    // Make sure the separating axis is directed from shape i to shape j\n    sub(dist,xj,xi);\n    if(dot(sepAxis,dist) > 0){\n        vec2.scale(sepAxis,sepAxis,-1);\n    }\n\n    // Find edges with normals closest to the separating axis\n    var closestEdge1 = Narrowphase.getClosestEdge(si,ai,sepAxis,true), // Flipped axis\n        closestEdge2 = Narrowphase.getClosestEdge(sj,aj,sepAxis);\n\n    if(closestEdge1 === -1 || closestEdge2 === -1){\n        return 0;\n    }\n\n    // Loop over the shapes\n    for(var k=0; k<2; k++){\n\n        var closestEdgeA = closestEdge1,\n            closestEdgeB = closestEdge2,\n            shapeA =  si, shapeB =  sj,\n            offsetA = xi, offsetB = xj,\n            angleA = ai, angleB = aj,\n            bodyA = bi, bodyB = bj;\n\n        if(k === 0){\n            // Swap!\n            var tmp;\n            tmp = closestEdgeA;\n            closestEdgeA = closestEdgeB;\n            closestEdgeB = tmp;\n\n            tmp = shapeA;\n            shapeA = shapeB;\n            shapeB = tmp;\n\n            tmp = offsetA;\n            offsetA = offsetB;\n            offsetB = tmp;\n\n            tmp = angleA;\n            angleA = angleB;\n            angleB = tmp;\n\n            tmp = bodyA;\n            bodyA = bodyB;\n            bodyB = tmp;\n        }\n\n        // Loop over 2 points in convex B\n        for(var j=closestEdgeB; j<closestEdgeB+2; j++){\n\n            // Get world point\n            var v = shapeB.vertices[(j+shapeB.vertices.length)%shapeB.vertices.length];\n            vec2.rotate(worldPoint, v, angleB);\n            add(worldPoint, worldPoint, offsetB);\n\n            var insideNumEdges = 0;\n\n            // Loop over the 3 closest edges in convex A\n            for(var i=closestEdgeA-1; i<closestEdgeA+2; i++){\n\n                var v0 = shapeA.vertices[(i  +shapeA.vertices.length)%shapeA.vertices.length],\n                    v1 = shapeA.vertices[(i+1+shapeA.vertices.length)%shapeA.vertices.length];\n\n                // Construct the edge\n                vec2.rotate(worldPoint0, v0, angleA);\n                vec2.rotate(worldPoint1, v1, angleA);\n                add(worldPoint0, worldPoint0, offsetA);\n                add(worldPoint1, worldPoint1, offsetA);\n\n                sub(worldEdge, worldPoint1, worldPoint0);\n\n                vec2.rotate90cw(worldNormal, worldEdge); // Normal points out of convex 1\n                vec2.normalize(worldNormal,worldNormal);\n\n                sub(dist, worldPoint, worldPoint0);\n\n                var d = dot(worldNormal,dist);\n\n                if((i === closestEdgeA && d <= precision) || (i !== closestEdgeA && d <= 0)){\n                    insideNumEdges++;\n                }\n            }\n\n            if(insideNumEdges >= 3){\n\n                if(justTest){\n                    return true;\n                }\n\n                // worldPoint was on the \"inside\" side of each of the 3 checked edges.\n                // Project it to the center edge and use the projection direction as normal\n\n                // Create contact\n                var c = this.createContactEquation(bodyA,bodyB,shapeA,shapeB);\n                numContacts++;\n\n                // Get center edge from body A\n                var v0 = shapeA.vertices[(closestEdgeA)   % shapeA.vertices.length],\n                    v1 = shapeA.vertices[(closestEdgeA+1) % shapeA.vertices.length];\n\n                // Construct the edge\n                vec2.rotate(worldPoint0, v0, angleA);\n                vec2.rotate(worldPoint1, v1, angleA);\n                add(worldPoint0, worldPoint0, offsetA);\n                add(worldPoint1, worldPoint1, offsetA);\n\n                sub(worldEdge, worldPoint1, worldPoint0);\n\n                vec2.rotate90cw(c.normalA, worldEdge); // Normal points out of convex A\n                vec2.normalize(c.normalA,c.normalA);\n\n                sub(dist, worldPoint, worldPoint0); // From edge point to the penetrating point\n                var d = dot(c.normalA,dist);             // Penetration\n                vec2.scale(penetrationVec, c.normalA, d);     // Vector penetration\n\n                sub(c.contactPointA, worldPoint, offsetA);\n                sub(c.contactPointA, c.contactPointA, penetrationVec);\n                add(c.contactPointA, c.contactPointA, offsetA);\n                sub(c.contactPointA, c.contactPointA, bodyA.position);\n\n                sub(c.contactPointB, worldPoint, offsetB);\n                add(c.contactPointB, c.contactPointB, offsetB);\n                sub(c.contactPointB, c.contactPointB, bodyB.position);\n\n                this.contactEquations.push(c);\n\n                // Todo reduce to 1 friction equation if we have 2 contact points\n                if(!this.enableFrictionReduction){\n                    if(this.enableFriction){\n                        this.frictionEquations.push(this.createFrictionFromContact(c));\n                    }\n                }\n            }\n        }\n    }\n\n    if(this.enableFrictionReduction){\n        if(this.enableFriction && numContacts){\n            this.frictionEquations.push(this.createFrictionFromAverage(numContacts));\n        }\n    }\n\n    return numContacts;\n};\n\n// .projectConvex is called by other functions, need local tmp vectors\nvar pcoa_tmp1 = vec2.fromValues(0,0);\n\n/**\n * Project a Convex onto a world-oriented axis\n * @method projectConvexOntoAxis\n * @static\n * @param  {Convex} convexShape\n * @param  {Array} convexOffset\n * @param  {Number} convexAngle\n * @param  {Array} worldAxis\n * @param  {Array} result\n */\nNarrowphase.projectConvexOntoAxis = function(convexShape, convexOffset, convexAngle, worldAxis, result){\n    var max=null,\n        min=null,\n        v,\n        value,\n        localAxis = pcoa_tmp1;\n\n    // Convert the axis to local coords of the body\n    vec2.rotate(localAxis, worldAxis, -convexAngle);\n\n    // Get projected position of all vertices\n    for(var i=0; i<convexShape.vertices.length; i++){\n        v = convexShape.vertices[i];\n        value = dot(v,localAxis);\n        if(max === null || value > max){\n            max = value;\n        }\n        if(min === null || value < min){\n            min = value;\n        }\n    }\n\n    if(min > max){\n        var t = min;\n        min = max;\n        max = t;\n    }\n\n    // Project the position of the body onto the axis - need to add this to the result\n    var offset = dot(convexOffset, worldAxis);\n\n    vec2.set( result, min + offset, max + offset);\n};\n\n// .findSeparatingAxis is called by other functions, need local tmp vectors\nvar fsa_tmp1 = vec2.fromValues(0,0)\n,   fsa_tmp2 = vec2.fromValues(0,0)\n,   fsa_tmp3 = vec2.fromValues(0,0)\n,   fsa_tmp4 = vec2.fromValues(0,0)\n,   fsa_tmp5 = vec2.fromValues(0,0)\n,   fsa_tmp6 = vec2.fromValues(0,0);\n\n/**\n * Find a separating axis between the shapes, that maximizes the separating distance between them.\n * @method findSeparatingAxis\n * @static\n * @param  {Convex}     c1\n * @param  {Array}      offset1\n * @param  {Number}     angle1\n * @param  {Convex}     c2\n * @param  {Array}      offset2\n * @param  {Number}     angle2\n * @param  {Array}      sepAxis     The resulting axis\n * @return {Boolean}                Whether the axis could be found.\n */\nNarrowphase.findSeparatingAxis = function(c1,offset1,angle1,c2,offset2,angle2,sepAxis){\n    var maxDist = null,\n        overlap = false,\n        found = false,\n        edge = fsa_tmp1,\n        worldPoint0 = fsa_tmp2,\n        worldPoint1 = fsa_tmp3,\n        normal = fsa_tmp4,\n        span1 = fsa_tmp5,\n        span2 = fsa_tmp6;\n\n    if(c1 instanceof Box && c2 instanceof Box){\n\n        for(var j=0; j!==2; j++){\n            var c = c1,\n                angle = angle1;\n            if(j===1){\n                c = c2;\n                angle = angle2;\n            }\n\n            for(var i=0; i!==2; i++){\n\n                // Get the world edge\n                if(i === 0){\n                    vec2.set(normal, 0, 1);\n                } else if(i === 1) {\n                    vec2.set(normal, 1, 0);\n                }\n                if(angle !== 0){\n                    vec2.rotate(normal, normal, angle);\n                }\n\n                // Project hulls onto that normal\n                Narrowphase.projectConvexOntoAxis(c1,offset1,angle1,normal,span1);\n                Narrowphase.projectConvexOntoAxis(c2,offset2,angle2,normal,span2);\n\n                // Order by span position\n                var a=span1,\n                    b=span2,\n                    swapped = false;\n                if(span1[0] > span2[0]){\n                    b=span1;\n                    a=span2;\n                    swapped = true;\n                }\n\n                // Get separating distance\n                var dist = b[0] - a[1];\n                overlap = (dist <= 0);\n\n                if(maxDist===null || dist > maxDist){\n                    vec2.copy(sepAxis, normal);\n                    maxDist = dist;\n                    found = overlap;\n                }\n            }\n        }\n\n    } else {\n\n        for(var j=0; j!==2; j++){\n            var c = c1,\n                angle = angle1;\n            if(j===1){\n                c = c2;\n                angle = angle2;\n            }\n\n            for(var i=0; i!==c.vertices.length; i++){\n                // Get the world edge\n                vec2.rotate(worldPoint0, c.vertices[i], angle);\n                vec2.rotate(worldPoint1, c.vertices[(i+1)%c.vertices.length], angle);\n\n                sub(edge, worldPoint1, worldPoint0);\n\n                // Get normal - just rotate 90 degrees since vertices are given in CCW\n                vec2.rotate90cw(normal, edge);\n                vec2.normalize(normal,normal);\n\n                // Project hulls onto that normal\n                Narrowphase.projectConvexOntoAxis(c1,offset1,angle1,normal,span1);\n                Narrowphase.projectConvexOntoAxis(c2,offset2,angle2,normal,span2);\n\n                // Order by span position\n                var a=span1,\n                    b=span2,\n                    swapped = false;\n                if(span1[0] > span2[0]){\n                    b=span1;\n                    a=span2;\n                    swapped = true;\n                }\n\n                // Get separating distance\n                var dist = b[0] - a[1];\n                overlap = (dist <= 0);\n\n                if(maxDist===null || dist > maxDist){\n                    vec2.copy(sepAxis, normal);\n                    maxDist = dist;\n                    found = overlap;\n                }\n            }\n        }\n    }\n\n\n    /*\n    // Needs to be tested some more\n    for(var j=0; j!==2; j++){\n        var c = c1,\n            angle = angle1;\n        if(j===1){\n            c = c2;\n            angle = angle2;\n        }\n\n        for(var i=0; i!==c.axes.length; i++){\n\n            var normal = c.axes[i];\n\n            // Project hulls onto that normal\n            Narrowphase.projectConvexOntoAxis(c1, offset1, angle1, normal, span1);\n            Narrowphase.projectConvexOntoAxis(c2, offset2, angle2, normal, span2);\n\n            // Order by span position\n            var a=span1,\n                b=span2,\n                swapped = false;\n            if(span1[0] > span2[0]){\n                b=span1;\n                a=span2;\n                swapped = true;\n            }\n\n            // Get separating distance\n            var dist = b[0] - a[1];\n            overlap = (dist <= Narrowphase.convexPrecision);\n\n            if(maxDist===null || dist > maxDist){\n                vec2.copy(sepAxis, normal);\n                maxDist = dist;\n                found = overlap;\n            }\n        }\n    }\n    */\n\n    return found;\n};\n\n// .getClosestEdge is called by other functions, need local tmp vectors\nvar gce_tmp1 = vec2.fromValues(0,0)\n,   gce_tmp2 = vec2.fromValues(0,0)\n,   gce_tmp3 = vec2.fromValues(0,0);\n\n/**\n * Get the edge that has a normal closest to an axis.\n * @method getClosestEdge\n * @static\n * @param  {Convex}     c\n * @param  {Number}     angle\n * @param  {Array}      axis\n * @param  {Boolean}    flip\n * @return {Number}             Index of the edge that is closest. This index and the next spans the resulting edge. Returns -1 if failed.\n */\nNarrowphase.getClosestEdge = function(c,angle,axis,flip){\n    var localAxis = gce_tmp1,\n        edge = gce_tmp2,\n        normal = gce_tmp3;\n\n    // Convert the axis to local coords of the body\n    vec2.rotate(localAxis, axis, -angle);\n    if(flip){\n        vec2.scale(localAxis,localAxis,-1);\n    }\n\n    var closestEdge = -1,\n        N = c.vertices.length,\n        maxDot = -1;\n    for(var i=0; i!==N; i++){\n        // Get the edge\n        sub(edge, c.vertices[(i+1)%N], c.vertices[i%N]);\n\n        // Get normal - just rotate 90 degrees since vertices are given in CCW\n        vec2.rotate90cw(normal, edge);\n        vec2.normalize(normal,normal);\n\n        var d = dot(normal,localAxis);\n        if(closestEdge === -1 || d > maxDot){\n            closestEdge = i % N;\n            maxDot = d;\n        }\n    }\n\n    return closestEdge;\n};\n\nvar circleHeightfield_candidate = vec2.create(),\n    circleHeightfield_dist = vec2.create(),\n    circleHeightfield_v0 = vec2.create(),\n    circleHeightfield_v1 = vec2.create(),\n    circleHeightfield_minCandidate = vec2.create(),\n    circleHeightfield_worldNormal = vec2.create(),\n    circleHeightfield_minCandidateNormal = vec2.create();\n\n/**\n * @method circleHeightfield\n * @param  {Body}           bi\n * @param  {Circle}         si\n * @param  {Array}          xi\n * @param  {Body}           bj\n * @param  {Heightfield}    sj\n * @param  {Array}          xj\n * @param  {Number}         aj\n */\nNarrowphase.prototype[Shape.CIRCLE | Shape.HEIGHTFIELD] =\nNarrowphase.prototype.circleHeightfield = function( circleBody,circleShape,circlePos,circleAngle,\n                                                    hfBody,hfShape,hfPos,hfAngle, justTest, radius ){\n    var data = hfShape.heights,\n        radius = radius || circleShape.radius,\n        w = hfShape.elementWidth,\n        dist = circleHeightfield_dist,\n        candidate = circleHeightfield_candidate,\n        minCandidate = circleHeightfield_minCandidate,\n        minCandidateNormal = circleHeightfield_minCandidateNormal,\n        worldNormal = circleHeightfield_worldNormal,\n        v0 = circleHeightfield_v0,\n        v1 = circleHeightfield_v1;\n\n    // Get the index of the points to test against\n    var idxA = Math.floor( (circlePos[0] - radius - hfPos[0]) / w ),\n        idxB = Math.ceil(  (circlePos[0] + radius - hfPos[0]) / w );\n\n    /*if(idxB < 0 || idxA >= data.length)\n        return justTest ? false : 0;*/\n\n    if(idxA < 0){\n        idxA = 0;\n    }\n    if(idxB >= data.length){\n        idxB = data.length-1;\n    }\n\n    // Get max and min\n    var max = data[idxA],\n        min = data[idxB];\n    for(var i=idxA; i<idxB; i++){\n        if(data[i] < min){\n            min = data[i];\n        }\n        if(data[i] > max){\n            max = data[i];\n        }\n    }\n\n    if(circlePos[1]-radius > max){\n        return justTest ? false : 0;\n    }\n\n    /*\n    if(circlePos[1]+radius < min){\n        // Below the minimum point... We can just guess.\n        // TODO\n    }\n    */\n\n    // 1. Check so center of circle is not inside the field. If it is, this wont work...\n    // 2. For each edge\n    // 2. 1. Get point on circle that is closest to the edge (scale normal with -radius)\n    // 2. 2. Check if point is inside.\n\n    var found = false;\n\n    // Check all edges first\n    for(var i=idxA; i<idxB; i++){\n\n        // Get points\n        vec2.set(v0,     i*w, data[i]  );\n        vec2.set(v1, (i+1)*w, data[i+1]);\n        vec2.add(v0,v0,hfPos);\n        vec2.add(v1,v1,hfPos);\n\n        // Get normal\n        vec2.sub(worldNormal, v1, v0);\n        vec2.rotate(worldNormal, worldNormal, Math.PI/2);\n        vec2.normalize(worldNormal,worldNormal);\n\n        // Get point on circle, closest to the edge\n        vec2.scale(candidate,worldNormal,-radius);\n        vec2.add(candidate,candidate,circlePos);\n\n        // Distance from v0 to the candidate point\n        vec2.sub(dist,candidate,v0);\n\n        // Check if it is in the element \"stick\"\n        var d = vec2.dot(dist,worldNormal);\n        if(candidate[0] >= v0[0] && candidate[0] < v1[0] && d <= 0){\n\n            if(justTest){\n                return true;\n            }\n\n            found = true;\n\n            // Store the candidate point, projected to the edge\n            vec2.scale(dist,worldNormal,-d);\n            vec2.add(minCandidate,candidate,dist);\n            vec2.copy(minCandidateNormal,worldNormal);\n\n            var c = this.createContactEquation(hfBody,circleBody,hfShape,circleShape);\n\n            // Normal is out of the heightfield\n            vec2.copy(c.normalA, minCandidateNormal);\n\n            // Vector from circle to heightfield\n            vec2.scale(c.contactPointB,  c.normalA, -radius);\n            add(c.contactPointB, c.contactPointB, circlePos);\n            sub(c.contactPointB, c.contactPointB, circleBody.position);\n\n            vec2.copy(c.contactPointA, minCandidate);\n            vec2.sub(c.contactPointA, c.contactPointA, hfBody.position);\n\n            this.contactEquations.push(c);\n\n            if(this.enableFriction){\n                this.frictionEquations.push( this.createFrictionFromContact(c) );\n            }\n        }\n    }\n\n    // Check all vertices\n    found = false;\n    if(radius > 0){\n        for(var i=idxA; i<=idxB; i++){\n\n            // Get point\n            vec2.set(v0, i*w, data[i]);\n            vec2.add(v0,v0,hfPos);\n\n            vec2.sub(dist, circlePos, v0);\n\n            if(vec2.squaredLength(dist) < Math.pow(radius, 2)){\n\n                if(justTest){\n                    return true;\n                }\n\n                found = true;\n\n                var c = this.createContactEquation(hfBody,circleBody,hfShape,circleShape);\n\n                // Construct normal - out of heightfield\n                vec2.copy(c.normalA, dist);\n                vec2.normalize(c.normalA,c.normalA);\n\n                vec2.scale(c.contactPointB, c.normalA, -radius);\n                add(c.contactPointB, c.contactPointB, circlePos);\n                sub(c.contactPointB, c.contactPointB, circleBody.position);\n\n                sub(c.contactPointA, v0, hfPos);\n                add(c.contactPointA, c.contactPointA, hfPos);\n                sub(c.contactPointA, c.contactPointA, hfBody.position);\n\n                this.contactEquations.push(c);\n\n                if(this.enableFriction){\n                    this.frictionEquations.push(this.createFrictionFromContact(c));\n                }\n            }\n        }\n    }\n\n    if(found){\n        return 1;\n    }\n\n    return 0;\n\n};\n\nvar convexHeightfield_v0 = vec2.create(),\n    convexHeightfield_v1 = vec2.create(),\n    convexHeightfield_tilePos = vec2.create(),\n    convexHeightfield_tempConvexShape = new Convex({ vertices: [vec2.create(),vec2.create(),vec2.create(),vec2.create()] });\n/**\n * @method circleHeightfield\n * @param  {Body}           bi\n * @param  {Circle}         si\n * @param  {Array}          xi\n * @param  {Body}           bj\n * @param  {Heightfield}    sj\n * @param  {Array}          xj\n * @param  {Number}         aj\n */\nNarrowphase.prototype[Shape.BOX | Shape.HEIGHTFIELD] =\nNarrowphase.prototype[Shape.CONVEX | Shape.HEIGHTFIELD] =\nNarrowphase.prototype.convexHeightfield = function( convexBody,convexShape,convexPos,convexAngle,\n                                                    hfBody,hfShape,hfPos,hfAngle, justTest ){\n    var data = hfShape.heights,\n        w = hfShape.elementWidth,\n        v0 = convexHeightfield_v0,\n        v1 = convexHeightfield_v1,\n        tilePos = convexHeightfield_tilePos,\n        tileConvex = convexHeightfield_tempConvexShape;\n\n    // Get the index of the points to test against\n    var idxA = Math.floor( (convexBody.aabb.lowerBound[0] - hfPos[0]) / w ),\n        idxB = Math.ceil(  (convexBody.aabb.upperBound[0] - hfPos[0]) / w );\n\n    if(idxA < 0){\n        idxA = 0;\n    }\n    if(idxB >= data.length){\n        idxB = data.length-1;\n    }\n\n    // Get max and min\n    var max = data[idxA],\n        min = data[idxB];\n    for(var i=idxA; i<idxB; i++){\n        if(data[i] < min){\n            min = data[i];\n        }\n        if(data[i] > max){\n            max = data[i];\n        }\n    }\n\n    if(convexBody.aabb.lowerBound[1] > max){\n        return justTest ? false : 0;\n    }\n\n    var found = false;\n    var numContacts = 0;\n\n    // Loop over all edges\n    // TODO: If possible, construct a convex from several data points (need o check if the points make a convex shape)\n    for(var i=idxA; i<idxB; i++){\n\n        // Get points\n        vec2.set(v0,     i*w, data[i]  );\n        vec2.set(v1, (i+1)*w, data[i+1]);\n        vec2.add(v0,v0,hfPos);\n        vec2.add(v1,v1,hfPos);\n\n        // Construct a convex\n        var tileHeight = 100; // todo\n        vec2.set(tilePos, (v1[0] + v0[0])*0.5, (v1[1] + v0[1] - tileHeight)*0.5);\n\n        vec2.sub(tileConvex.vertices[0], v1, tilePos);\n        vec2.sub(tileConvex.vertices[1], v0, tilePos);\n        vec2.copy(tileConvex.vertices[2], tileConvex.vertices[1]);\n        vec2.copy(tileConvex.vertices[3], tileConvex.vertices[0]);\n        tileConvex.vertices[2][1] -= tileHeight;\n        tileConvex.vertices[3][1] -= tileHeight;\n\n        // Do convex collision\n        numContacts += this.convexConvex(   convexBody, convexShape, convexPos, convexAngle,\n                                            hfBody, tileConvex, tilePos, 0, justTest);\n    }\n\n    return numContacts;\n};\n},{\"../equations/ContactEquation\":21,\"../equations/Equation\":22,\"../equations/FrictionEquation\":23,\"../math/vec2\":30,\"../objects/Body\":31,\"../shapes/Box\":37,\"../shapes/Circle\":39,\"../shapes/Convex\":40,\"../shapes/Shape\":45,\"../utils/ContactEquationPool\":48,\"../utils/FrictionEquationPool\":49,\"../utils/TupleDictionary\":56,\"../utils/Utils\":57}],11:[function(_dereq_,module,exports){\nmodule.exports = Ray;\n\nvar vec2 = _dereq_('../math/vec2');\nvar RaycastResult = _dereq_('../collision/RaycastResult');\nvar Shape = _dereq_('../shapes/Shape');\nvar AABB = _dereq_('../collision/AABB');\n\n/**\n * A line with a start and end point that is used to intersect shapes. For an example, see {{#crossLink \"World/raycast:method\"}}World.raycast{{/crossLink}}\n * @class Ray\n * @constructor\n * @param {object} [options]\n * @param {array} [options.from]\n * @param {array} [options.to]\n * @param {boolean} [options.checkCollisionResponse=true]\n * @param {boolean} [options.skipBackfaces=false]\n * @param {number} [options.collisionMask=-1]\n * @param {number} [options.collisionGroup=-1]\n * @param {number} [options.mode=Ray.ANY]\n * @param {number} [options.callback]\n */\nfunction Ray(options){\n    options = options || {};\n\n    /**\n     * Ray start point.\n     * @property {array} from\n     */\n    this.from = options.from ? vec2.fromValues(options.from[0], options.from[1]) : vec2.create();\n\n    /**\n     * Ray end point\n     * @property {array} to\n     */\n    this.to = options.to ? vec2.fromValues(options.to[0], options.to[1]) : vec2.create();\n\n    /**\n     * Set to true if you want the Ray to take .collisionResponse flags into account on bodies and shapes.\n     * @property {Boolean} checkCollisionResponse\n     */\n    this.checkCollisionResponse = options.checkCollisionResponse !== undefined ? options.checkCollisionResponse : true;\n\n    /**\n     * If set to true, the ray skips any hits with normal.dot(rayDirection) < 0.\n     * @property {Boolean} skipBackfaces\n     */\n    this.skipBackfaces = !!options.skipBackfaces;\n\n    /**\n     * @property {number} collisionMask\n     * @default -1\n     */\n    this.collisionMask = options.collisionMask !== undefined ? options.collisionMask : -1;\n\n    /**\n     * @property {number} collisionGroup\n     * @default -1\n     */\n    this.collisionGroup = options.collisionGroup !== undefined ? options.collisionGroup : -1;\n\n    /**\n     * The intersection mode. Should be {{#crossLink \"Ray/ANY:property\"}}Ray.ANY{{/crossLink}}, {{#crossLink \"Ray/ALL:property\"}}Ray.ALL{{/crossLink}} or {{#crossLink \"Ray/CLOSEST:property\"}}Ray.CLOSEST{{/crossLink}}.\n     * @property {number} mode\n     */\n    this.mode = options.mode !== undefined ? options.mode : Ray.ANY;\n\n    /**\n     * Current, user-provided result callback. Will be used if mode is Ray.ALL.\n     * @property {Function} callback\n     */\n    this.callback = options.callback || function(result){};\n\n    /**\n     * @readOnly\n     * @property {array} direction\n     */\n    this.direction = vec2.create();\n\n    /**\n     * Length of the ray\n     * @readOnly\n     * @property {number} length\n     */\n    this.length = 1;\n\n    this.update();\n}\nRay.prototype.constructor = Ray;\n\n/**\n * This raycasting mode will make the Ray traverse through all intersection points and only return the closest one.\n * @static\n * @property {Number} CLOSEST\n */\nRay.CLOSEST = 1;\n\n/**\n * This raycasting mode will make the Ray stop when it finds the first intersection point.\n * @static\n * @property {Number} ANY\n */\nRay.ANY = 2;\n\n/**\n * This raycasting mode will traverse all intersection points and executes a callback for each one.\n * @static\n * @property {Number} ALL\n */\nRay.ALL = 4;\n\n/**\n * Should be called if you change the from or to point.\n * @method update\n */\nRay.prototype.update = function(){\n\n    // Update .direction and .length\n    var d = this.direction;\n    vec2.sub(d, this.to, this.from);\n    this.length = vec2.length(d);\n    vec2.normalize(d, d);\n\n};\n\n/**\n * @method intersectBodies\n * @param {Array} bodies An array of Body objects.\n */\nRay.prototype.intersectBodies = function (result, bodies) {\n    for (var i = 0, l = bodies.length; !result.shouldStop(this) && i < l; i++) {\n        var body = bodies[i];\n        var aabb = body.getAABB();\n        if(aabb.overlapsRay(this) >= 0 || aabb.containsPoint(this.from)){\n            this.intersectBody(result, body);\n        }\n    }\n};\n\nvar intersectBody_worldPosition = vec2.create();\n\n/**\n * Shoot a ray at a body, get back information about the hit.\n * @method intersectBody\n * @private\n * @param {Body} body\n */\nRay.prototype.intersectBody = function (result, body) {\n    var checkCollisionResponse = this.checkCollisionResponse;\n\n    if(checkCollisionResponse && !body.collisionResponse){\n        return;\n    }\n\n    var worldPosition = intersectBody_worldPosition;\n\n    for (var i = 0, N = body.shapes.length; i < N; i++) {\n        var shape = body.shapes[i];\n\n        if(checkCollisionResponse && !shape.collisionResponse){\n            continue; // Skip\n        }\n\n        if((this.collisionGroup & shape.collisionMask) === 0 || (shape.collisionGroup & this.collisionMask) === 0){\n            continue;\n        }\n\n        // Get world angle and position of the shape\n        vec2.rotate(worldPosition, shape.position, body.angle);\n        vec2.add(worldPosition, worldPosition, body.position);\n        var worldAngle = shape.angle + body.angle;\n\n        this.intersectShape(\n            result,\n            shape,\n            worldAngle,\n            worldPosition,\n            body\n        );\n\n        if(result.shouldStop(this)){\n            break;\n        }\n    }\n};\n\n/**\n * @method intersectShape\n * @private\n * @param {Shape} shape\n * @param {number} angle\n * @param {array} position\n * @param {Body} body\n */\nRay.prototype.intersectShape = function(result, shape, angle, position, body){\n    var from = this.from;\n\n    // Checking radius\n    var distance = distanceFromIntersectionSquared(from, this.direction, position);\n    if (distance > shape.boundingRadius * shape.boundingRadius) {\n        return;\n    }\n\n    this._currentBody = body;\n    this._currentShape = shape;\n\n    shape.raycast(result, this, position, angle);\n\n    this._currentBody = this._currentShape = null;\n};\n\n/**\n * Get the AABB of the ray.\n * @method getAABB\n * @param  {AABB} aabb\n */\nRay.prototype.getAABB = function(result){\n    var to = this.to;\n    var from = this.from;\n    vec2.set(\n        result.lowerBound,\n        Math.min(to[0], from[0]),\n        Math.min(to[1], from[1])\n    );\n    vec2.set(\n        result.upperBound,\n        Math.max(to[0], from[0]),\n        Math.max(to[1], from[1])\n    );\n};\n\nvar hitPointWorld = vec2.create();\n\n/**\n * @method reportIntersection\n * @private\n * @param  {number} fraction\n * @param  {array} normal\n * @param  {number} [faceIndex=-1]\n * @return {boolean} True if the intersections should continue\n */\nRay.prototype.reportIntersection = function(result, fraction, normal, faceIndex){\n    var from = this.from;\n    var to = this.to;\n    var shape = this._currentShape;\n    var body = this._currentBody;\n\n    // Skip back faces?\n    if(this.skipBackfaces && vec2.dot(normal, this.direction) > 0){\n        return;\n    }\n\n    switch(this.mode){\n\n    case Ray.ALL:\n        result.set(\n            normal,\n            shape,\n            body,\n            fraction,\n            faceIndex\n        );\n        this.callback(result);\n        break;\n\n    case Ray.CLOSEST:\n\n        // Store if closer than current closest\n        if(fraction < result.fraction || !result.hasHit()){\n            result.set(\n                normal,\n                shape,\n                body,\n                fraction,\n                faceIndex\n            );\n        }\n        break;\n\n    case Ray.ANY:\n\n        // Report and stop.\n        result.set(\n            normal,\n            shape,\n            body,\n            fraction,\n            faceIndex\n        );\n        break;\n    }\n};\n\nvar v0 = vec2.create(),\n    intersect = vec2.create();\nfunction distanceFromIntersectionSquared(from, direction, position) {\n\n    // v0 is vector from from to position\n    vec2.sub(v0, position, from);\n    var dot = vec2.dot(v0, direction);\n\n    // intersect = direction * dot + from\n    vec2.scale(intersect, direction, dot);\n    vec2.add(intersect, intersect, from);\n\n    return vec2.squaredDistance(position, intersect);\n}\n\n\n},{\"../collision/AABB\":7,\"../collision/RaycastResult\":12,\"../math/vec2\":30,\"../shapes/Shape\":45}],12:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2');\nvar Ray = _dereq_('../collision/Ray');\n\nmodule.exports = RaycastResult;\n\n/**\n * Storage for Ray casting hit data.\n * @class RaycastResult\n * @constructor\n */\nfunction RaycastResult(){\n\n\t/**\n\t * The normal of the hit, oriented in world space.\n\t * @property {array} normal\n\t */\n\tthis.normal = vec2.create();\n\n\t/**\n\t * The hit shape, or null.\n\t * @property {Shape} shape\n\t */\n\tthis.shape = null;\n\n\t/**\n\t * The hit body, or null.\n\t * @property {Body} body\n\t */\n\tthis.body = null;\n\n\t/**\n\t * The index of the hit triangle, if the hit shape was indexable.\n\t * @property {number} faceIndex\n\t * @default -1\n\t */\n\tthis.faceIndex = -1;\n\n\t/**\n\t * Distance to the hit, as a fraction. 0 is at the \"from\" point, 1 is at the \"to\" point. Will be set to -1 if there was no hit yet.\n\t * @property {number} fraction\n\t * @default -1\n\t */\n\tthis.fraction = -1;\n\n\t/**\n\t * If the ray should stop traversing.\n\t * @readonly\n\t * @property {Boolean} isStopped\n\t */\n\tthis.isStopped = false;\n}\n\n/**\n * Reset all result data. Must be done before re-using the result object.\n * @method reset\n */\nRaycastResult.prototype.reset = function () {\n\tvec2.set(this.normal, 0, 0);\n\tthis.shape = null;\n\tthis.body = null;\n\tthis.faceIndex = -1;\n\tthis.fraction = -1;\n\tthis.isStopped = false;\n};\n\n/**\n * Get the distance to the hit point.\n * @method getHitDistance\n * @param {Ray} ray\n */\nRaycastResult.prototype.getHitDistance = function (ray) {\n\treturn vec2.distance(ray.from, ray.to) * this.fraction;\n};\n\n/**\n * Returns true if the ray hit something since the last reset().\n * @method hasHit\n */\nRaycastResult.prototype.hasHit = function () {\n\treturn this.fraction !== -1;\n};\n\n/**\n * Get world hit point.\n * @method getHitPoint\n * @param {array} out\n * @param {Ray} ray\n */\nRaycastResult.prototype.getHitPoint = function (out, ray) {\n\tvec2.lerp(out, ray.from, ray.to, this.fraction);\n};\n\n/**\n * Can be called while iterating over hits to stop searching for hit points.\n * @method stop\n */\nRaycastResult.prototype.stop = function(){\n\tthis.isStopped = true;\n};\n\n/**\n * @method shouldStop\n * @private\n * @param {Ray} ray\n * @return {boolean}\n */\nRaycastResult.prototype.shouldStop = function(ray){\n\treturn this.isStopped || (this.fraction !== -1 && ray.mode === Ray.ANY);\n};\n\n/**\n * @method set\n * @private\n * @param {array} normal\n * @param {Shape} shape\n * @param {Body} body\n * @param {number} fraction\n */\nRaycastResult.prototype.set = function(\n\tnormal,\n\tshape,\n\tbody,\n\tfraction,\n\tfaceIndex\n){\n\tvec2.copy(this.normal, normal);\n\tthis.shape = shape;\n\tthis.body = body;\n\tthis.fraction = fraction;\n\tthis.faceIndex = faceIndex;\n};\n},{\"../collision/Ray\":11,\"../math/vec2\":30}],13:[function(_dereq_,module,exports){\nvar Utils = _dereq_('../utils/Utils')\n,   Broadphase = _dereq_('../collision/Broadphase');\n\nmodule.exports = SAPBroadphase;\n\n/**\n * Sweep and prune broadphase along one axis.\n *\n * @class SAPBroadphase\n * @constructor\n * @extends Broadphase\n */\nfunction SAPBroadphase(){\n    Broadphase.call(this,Broadphase.SAP);\n\n    /**\n     * List of bodies currently in the broadphase.\n     * @property axisList\n     * @type {Array}\n     */\n    this.axisList = [];\n\n    /**\n     * The axis to sort along. 0 means x-axis and 1 y-axis. If your bodies are more spread out over the X axis, set axisIndex to 0, and you will gain some performance.\n     * @property axisIndex\n     * @type {Number}\n     */\n    this.axisIndex = 0;\n\n    var that = this;\n    this._addBodyHandler = function(e){\n        that.axisList.push(e.body);\n    };\n\n    this._removeBodyHandler = function(e){\n        // Remove from list\n        var idx = that.axisList.indexOf(e.body);\n        if(idx !== -1){\n            that.axisList.splice(idx,1);\n        }\n    };\n}\nSAPBroadphase.prototype = new Broadphase();\nSAPBroadphase.prototype.constructor = SAPBroadphase;\n\n/**\n * Change the world\n * @method setWorld\n * @param {World} world\n */\nSAPBroadphase.prototype.setWorld = function(world){\n    // Clear the old axis array\n    this.axisList.length = 0;\n\n    // Add all bodies from the new world\n    Utils.appendArray(this.axisList, world.bodies);\n\n    // Remove old handlers, if any\n    world\n        .off(\"addBody\",this._addBodyHandler)\n        .off(\"removeBody\",this._removeBodyHandler);\n\n    // Add handlers to update the list of bodies.\n    world.on(\"addBody\",this._addBodyHandler).on(\"removeBody\",this._removeBodyHandler);\n\n    this.world = world;\n};\n\n/**\n * Sorts bodies along an axis.\n * @method sortAxisList\n * @param {Array} a\n * @param {number} axisIndex\n * @return {Array}\n */\nSAPBroadphase.sortAxisList = function(a, axisIndex){\n    axisIndex = axisIndex|0;\n    for(var i=1,l=a.length; i<l; i++) {\n        var v = a[i];\n        for(var j=i - 1;j>=0;j--) {\n            if(a[j].aabb.lowerBound[axisIndex] <= v.aabb.lowerBound[axisIndex]){\n                break;\n            }\n            a[j+1] = a[j];\n        }\n        a[j+1] = v;\n    }\n    return a;\n};\n\nSAPBroadphase.prototype.sortList = function(){\n    var bodies = this.axisList,\n    axisIndex = this.axisIndex;\n\n    // Sort the lists\n    SAPBroadphase.sortAxisList(bodies, axisIndex);\n};\n\n/**\n * Get the colliding pairs\n * @method getCollisionPairs\n * @param  {World} world\n * @return {Array}\n */\nSAPBroadphase.prototype.getCollisionPairs = function(world){\n    var bodies = this.axisList,\n        result = this.result,\n        axisIndex = this.axisIndex;\n\n    result.length = 0;\n\n    // Update all AABBs if needed\n    var l = bodies.length;\n    while(l--){\n        var b = bodies[l];\n        if(b.aabbNeedsUpdate){\n            b.updateAABB();\n        }\n    }\n\n    // Sort the lists\n    this.sortList();\n\n    // Look through the X list\n    for(var i=0, N=bodies.length|0; i!==N; i++){\n        var bi = bodies[i];\n\n        for(var j=i+1; j<N; j++){\n            var bj = bodies[j];\n\n            // Bounds overlap?\n            var overlaps = (bj.aabb.lowerBound[axisIndex] <= bi.aabb.upperBound[axisIndex]);\n            if(!overlaps){\n                break;\n            }\n\n            if(Broadphase.canCollide(bi,bj) && this.boundingVolumeCheck(bi,bj)){\n                result.push(bi,bj);\n            }\n        }\n    }\n\n    return result;\n};\n\n/**\n * Returns all the bodies within an AABB.\n * @method aabbQuery\n * @param  {World} world\n * @param  {AABB} aabb\n * @param {array} result An array to store resulting bodies in.\n * @return {array}\n */\nSAPBroadphase.prototype.aabbQuery = function(world, aabb, result){\n    result = result || [];\n\n    this.sortList();\n\n    var axisIndex = this.axisIndex;\n    var axis = 'x';\n    if(axisIndex === 1){ axis = 'y'; }\n    if(axisIndex === 2){ axis = 'z'; }\n\n    var axisList = this.axisList;\n    var lower = aabb.lowerBound[axis];\n    var upper = aabb.upperBound[axis];\n    for(var i = 0; i < axisList.length; i++){\n        var b = axisList[i];\n\n        if(b.aabbNeedsUpdate){\n            b.updateAABB();\n        }\n\n        if(b.aabb.overlaps(aabb)){\n            result.push(b);\n        }\n    }\n\n    return result;\n};\n},{\"../collision/Broadphase\":8,\"../utils/Utils\":57}],14:[function(_dereq_,module,exports){\nmodule.exports = Constraint;\n\nvar Utils = _dereq_('../utils/Utils');\n\n/**\n * Base constraint class.\n *\n * @class Constraint\n * @constructor\n * @author schteppe\n * @param {Body} bodyA\n * @param {Body} bodyB\n * @param {Number} type\n * @param {Object} [options]\n * @param {Object} [options.collideConnected=true]\n */\nfunction Constraint(bodyA, bodyB, type, options){\n\n    /**\n     * The type of constraint. May be one of Constraint.DISTANCE, Constraint.GEAR, Constraint.LOCK, Constraint.PRISMATIC or Constraint.REVOLUTE.\n     * @property {number} type\n     */\n    this.type = type;\n\n    options = Utils.defaults(options,{\n        collideConnected : true,\n        wakeUpBodies : true,\n    });\n\n    /**\n     * Equations to be solved in this constraint\n     *\n     * @property equations\n     * @type {Array}\n     */\n    this.equations = [];\n\n    /**\n     * First body participating in the constraint.\n     * @property bodyA\n     * @type {Body}\n     */\n    this.bodyA = bodyA;\n\n    /**\n     * Second body participating in the constraint.\n     * @property bodyB\n     * @type {Body}\n     */\n    this.bodyB = bodyB;\n\n    /**\n     * Set to true if you want the connected bodies to collide.\n     * @property collideConnected\n     * @type {Boolean}\n     * @default true\n     */\n    this.collideConnected = options.collideConnected;\n\n    // Wake up bodies when connected\n    if(options.wakeUpBodies){\n        if(bodyA){\n            bodyA.wakeUp();\n        }\n        if(bodyB){\n            bodyB.wakeUp();\n        }\n    }\n}\n\n/**\n * Updates the internal constraint parameters before solve.\n * @method update\n */\nConstraint.prototype.update = function(){\n    throw new Error(\"method update() not implmemented in this Constraint subclass!\");\n};\n\n/**\n * @static\n * @property {number} DISTANCE\n */\nConstraint.DISTANCE = 1;\n\n/**\n * @static\n * @property {number} GEAR\n */\nConstraint.GEAR = 2;\n\n/**\n * @static\n * @property {number} LOCK\n */\nConstraint.LOCK = 3;\n\n/**\n * @static\n * @property {number} PRISMATIC\n */\nConstraint.PRISMATIC = 4;\n\n/**\n * @static\n * @property {number} REVOLUTE\n */\nConstraint.REVOLUTE = 5;\n\n/**\n * Set stiffness for this constraint.\n * @method setStiffness\n * @param {Number} stiffness\n */\nConstraint.prototype.setStiffness = function(stiffness){\n    var eqs = this.equations;\n    for(var i=0; i !== eqs.length; i++){\n        var eq = eqs[i];\n        eq.stiffness = stiffness;\n        eq.needsUpdate = true;\n    }\n};\n\n/**\n * Set relaxation for this constraint.\n * @method setRelaxation\n * @param {Number} relaxation\n */\nConstraint.prototype.setRelaxation = function(relaxation){\n    var eqs = this.equations;\n    for(var i=0; i !== eqs.length; i++){\n        var eq = eqs[i];\n        eq.relaxation = relaxation;\n        eq.needsUpdate = true;\n    }\n};\n\n},{\"../utils/Utils\":57}],15:[function(_dereq_,module,exports){\nvar Constraint = _dereq_('./Constraint')\n,   Equation = _dereq_('../equations/Equation')\n,   vec2 = _dereq_('../math/vec2')\n,   Utils = _dereq_('../utils/Utils');\n\nmodule.exports = DistanceConstraint;\n\n/**\n * Constraint that tries to keep the distance between two bodies constant.\n *\n * @class DistanceConstraint\n * @constructor\n * @author schteppe\n * @param {Body} bodyA\n * @param {Body} bodyB\n * @param {object} [options]\n * @param {number} [options.distance] The distance to keep between the anchor points. Defaults to the current distance between the bodies.\n * @param {Array} [options.localAnchorA] The anchor point for bodyA, defined locally in bodyA frame. Defaults to [0,0].\n * @param {Array} [options.localAnchorB] The anchor point for bodyB, defined locally in bodyB frame. Defaults to [0,0].\n * @param {object} [options.maxForce=Number.MAX_VALUE] Maximum force to apply.\n * @extends Constraint\n *\n * @example\n *     // If distance is not given as an option, then the current distance between the bodies is used.\n *     // In this example, the bodies will be constrained to have a distance of 2 between their centers.\n *     var bodyA = new Body({ mass: 1, position: [-1, 0] });\n *     var bodyB = new Body({ mass: 1, position: [1, 0] });\n *     var constraint = new DistanceConstraint(bodyA, bodyB);\n *     world.addConstraint(constraint);\n *\n * @example\n *     // Manually set the distance and anchors\n *     var constraint = new DistanceConstraint(bodyA, bodyB, {\n *         distance: 1,          // Distance to keep between the points\n *         localAnchorA: [1, 0], // Point on bodyA\n *         localAnchorB: [-1, 0] // Point on bodyB\n *     });\n *     world.addConstraint(constraint);\n */\nfunction DistanceConstraint(bodyA,bodyB,options){\n    options = Utils.defaults(options,{\n        localAnchorA:[0,0],\n        localAnchorB:[0,0]\n    });\n\n    Constraint.call(this,bodyA,bodyB,Constraint.DISTANCE,options);\n\n    /**\n     * Local anchor in body A.\n     * @property localAnchorA\n     * @type {Array}\n     */\n    this.localAnchorA = vec2.fromValues(options.localAnchorA[0], options.localAnchorA[1]);\n\n    /**\n     * Local anchor in body B.\n     * @property localAnchorB\n     * @type {Array}\n     */\n    this.localAnchorB = vec2.fromValues(options.localAnchorB[0], options.localAnchorB[1]);\n\n    var localAnchorA = this.localAnchorA;\n    var localAnchorB = this.localAnchorB;\n\n    /**\n     * The distance to keep.\n     * @property distance\n     * @type {Number}\n     */\n    this.distance = 0;\n\n    if(typeof(options.distance) === 'number'){\n        this.distance = options.distance;\n    } else {\n        // Use the current world distance between the world anchor points.\n        var worldAnchorA = vec2.create(),\n            worldAnchorB = vec2.create(),\n            r = vec2.create();\n\n        // Transform local anchors to world\n        vec2.rotate(worldAnchorA, localAnchorA, bodyA.angle);\n        vec2.rotate(worldAnchorB, localAnchorB, bodyB.angle);\n\n        vec2.add(r, bodyB.position, worldAnchorB);\n        vec2.sub(r, r, worldAnchorA);\n        vec2.sub(r, r, bodyA.position);\n\n        this.distance = vec2.length(r);\n    }\n\n    var maxForce;\n    if(typeof(options.maxForce)===\"undefined\" ){\n        maxForce = Number.MAX_VALUE;\n    } else {\n        maxForce = options.maxForce;\n    }\n\n    var normal = new Equation(bodyA,bodyB,-maxForce,maxForce); // Just in the normal direction\n    this.equations = [ normal ];\n\n    /**\n     * Max force to apply.\n     * @property {number} maxForce\n     */\n    this.maxForce = maxForce;\n\n    // g = (xi - xj).dot(n)\n    // dg/dt = (vi - vj).dot(n) = G*W = [n 0 -n 0] * [vi wi vj wj]'\n\n    // ...and if we were to include offset points:\n    // g =\n    //      (xj + rj - xi - ri).dot(n) - distance\n    //\n    // dg/dt =\n    //      (vj + wj x rj - vi - wi x ri).dot(n) =\n    //      { term 2 is near zero } =\n    //      [-n   -ri x n   n   rj x n] * [vi wi vj wj]' =\n    //      G * W\n    //\n    // => G = [-n -rixn n rjxn]\n\n    var r = vec2.create();\n    var ri = vec2.create(); // worldAnchorA\n    var rj = vec2.create(); // worldAnchorB\n    var that = this;\n    normal.computeGq = function(){\n        var bodyA = this.bodyA,\n            bodyB = this.bodyB,\n            xi = bodyA.position,\n            xj = bodyB.position;\n\n        // Transform local anchors to world\n        vec2.rotate(ri, localAnchorA, bodyA.angle);\n        vec2.rotate(rj, localAnchorB, bodyB.angle);\n\n        vec2.add(r, xj, rj);\n        vec2.sub(r, r, ri);\n        vec2.sub(r, r, xi);\n\n        //vec2.sub(r, bodyB.position, bodyA.position);\n        return vec2.length(r) - that.distance;\n    };\n\n    // Make the contact constraint bilateral\n    this.setMaxForce(maxForce);\n\n    /**\n     * If the upper limit is enabled or not.\n     * @property {Boolean} upperLimitEnabled\n     */\n    this.upperLimitEnabled = false;\n\n    /**\n     * The upper constraint limit.\n     * @property {number} upperLimit\n     */\n    this.upperLimit = 1;\n\n    /**\n     * If the lower limit is enabled or not.\n     * @property {Boolean} lowerLimitEnabled\n     */\n    this.lowerLimitEnabled = false;\n\n    /**\n     * The lower constraint limit.\n     * @property {number} lowerLimit\n     */\n    this.lowerLimit = 0;\n\n    /**\n     * Current constraint position. This is equal to the current distance between the world anchor points.\n     * @property {number} position\n     */\n    this.position = 0;\n}\nDistanceConstraint.prototype = new Constraint();\nDistanceConstraint.prototype.constructor = DistanceConstraint;\n\n/**\n * Update the constraint equations. Should be done if any of the bodies changed position, before solving.\n * @method update\n */\nvar n = vec2.create();\nvar ri = vec2.create(); // worldAnchorA\nvar rj = vec2.create(); // worldAnchorB\nDistanceConstraint.prototype.update = function(){\n    var normal = this.equations[0],\n        bodyA = this.bodyA,\n        bodyB = this.bodyB,\n        distance = this.distance,\n        xi = bodyA.position,\n        xj = bodyB.position,\n        normalEquation = this.equations[0],\n        G = normal.G;\n\n    // Transform local anchors to world\n    vec2.rotate(ri, this.localAnchorA, bodyA.angle);\n    vec2.rotate(rj, this.localAnchorB, bodyB.angle);\n\n    // Get world anchor points and normal\n    vec2.add(n, xj, rj);\n    vec2.sub(n, n, ri);\n    vec2.sub(n, n, xi);\n    this.position = vec2.length(n);\n\n    var violating = false;\n    if(this.upperLimitEnabled){\n        if(this.position > this.upperLimit){\n            normalEquation.maxForce = 0;\n            normalEquation.minForce = -this.maxForce;\n            this.distance = this.upperLimit;\n            violating = true;\n        }\n    }\n\n    if(this.lowerLimitEnabled){\n        if(this.position < this.lowerLimit){\n            normalEquation.maxForce = this.maxForce;\n            normalEquation.minForce = 0;\n            this.distance = this.lowerLimit;\n            violating = true;\n        }\n    }\n\n    if((this.lowerLimitEnabled || this.upperLimitEnabled) && !violating){\n        // No constraint needed.\n        normalEquation.enabled = false;\n        return;\n    }\n\n    normalEquation.enabled = true;\n\n    vec2.normalize(n,n);\n\n    // Caluclate cross products\n    var rixn = vec2.crossLength(ri, n),\n        rjxn = vec2.crossLength(rj, n);\n\n    // G = [-n -rixn n rjxn]\n    G[0] = -n[0];\n    G[1] = -n[1];\n    G[2] = -rixn;\n    G[3] = n[0];\n    G[4] = n[1];\n    G[5] = rjxn;\n};\n\n/**\n * Set the max force to be used\n * @method setMaxForce\n * @param {Number} maxForce\n */\nDistanceConstraint.prototype.setMaxForce = function(maxForce){\n    var normal = this.equations[0];\n    normal.minForce = -maxForce;\n    normal.maxForce =  maxForce;\n};\n\n/**\n * Get the max force\n * @method getMaxForce\n * @return {Number}\n */\nDistanceConstraint.prototype.getMaxForce = function(){\n    var normal = this.equations[0];\n    return normal.maxForce;\n};\n\n},{\"../equations/Equation\":22,\"../math/vec2\":30,\"../utils/Utils\":57,\"./Constraint\":14}],16:[function(_dereq_,module,exports){\nvar Constraint = _dereq_('./Constraint')\n,   Equation = _dereq_('../equations/Equation')\n,   AngleLockEquation = _dereq_('../equations/AngleLockEquation')\n,   vec2 = _dereq_('../math/vec2');\n\nmodule.exports = GearConstraint;\n\n/**\n * Constrains the angle of two bodies to each other to be equal. If a gear ratio is not one, the angle of bodyA must be a multiple of the angle of bodyB.\n * @class GearConstraint\n * @constructor\n * @author schteppe\n * @param {Body}            bodyA\n * @param {Body}            bodyB\n * @param {Object}          [options]\n * @param {Number}          [options.angle=0] Relative angle between the bodies. Will be set to the current angle between the bodies (the gear ratio is accounted for).\n * @param {Number}          [options.ratio=1] Gear ratio.\n * @param {Number}          [options.maxTorque] Maximum torque to apply.\n * @extends Constraint\n *\n * @example\n *     var constraint = new GearConstraint(bodyA, bodyB);\n *     world.addConstraint(constraint);\n *\n * @example\n *     var constraint = new GearConstraint(bodyA, bodyB, {\n *         ratio: 2,\n *         maxTorque: 1000\n *     });\n *     world.addConstraint(constraint);\n */\nfunction GearConstraint(bodyA, bodyB, options){\n    options = options || {};\n\n    Constraint.call(this, bodyA, bodyB, Constraint.GEAR, options);\n\n    /**\n     * The gear ratio.\n     * @property ratio\n     * @type {Number}\n     */\n    this.ratio = options.ratio !== undefined ? options.ratio : 1;\n\n    /**\n     * The relative angle\n     * @property angle\n     * @type {Number}\n     */\n    this.angle = options.angle !== undefined ? options.angle : bodyB.angle - this.ratio * bodyA.angle;\n\n    // Send same parameters to the equation\n    options.angle = this.angle;\n    options.ratio = this.ratio;\n\n    this.equations = [\n        new AngleLockEquation(bodyA,bodyB,options),\n    ];\n\n    // Set max torque\n    if(options.maxTorque !== undefined){\n        this.setMaxTorque(options.maxTorque);\n    }\n}\nGearConstraint.prototype = new Constraint();\nGearConstraint.prototype.constructor = GearConstraint;\n\nGearConstraint.prototype.update = function(){\n    var eq = this.equations[0];\n    if(eq.ratio !== this.ratio){\n        eq.setRatio(this.ratio);\n    }\n    eq.angle = this.angle;\n};\n\n/**\n * Set the max torque for the constraint.\n * @method setMaxTorque\n * @param {Number} torque\n */\nGearConstraint.prototype.setMaxTorque = function(torque){\n    this.equations[0].setMaxTorque(torque);\n};\n\n/**\n * Get the max torque for the constraint.\n * @method getMaxTorque\n * @return {Number}\n */\nGearConstraint.prototype.getMaxTorque = function(torque){\n    return this.equations[0].maxForce;\n};\n},{\"../equations/AngleLockEquation\":20,\"../equations/Equation\":22,\"../math/vec2\":30,\"./Constraint\":14}],17:[function(_dereq_,module,exports){\nvar Constraint = _dereq_('./Constraint')\n,   vec2 = _dereq_('../math/vec2')\n,   Equation = _dereq_('../equations/Equation');\n\nmodule.exports = LockConstraint;\n\n/**\n * Locks the relative position and rotation between two bodies.\n *\n * @class LockConstraint\n * @constructor\n * @author schteppe\n * @param {Body} bodyA\n * @param {Body} bodyB\n * @param {Object} [options]\n * @param {Array}  [options.localOffsetB] The offset of bodyB in bodyA's frame. If not given the offset is computed from current positions.\n * @param {number} [options.localAngleB] The angle of bodyB in bodyA's frame. If not given, the angle is computed from current angles.\n * @param {number} [options.maxForce]\n * @extends Constraint\n *\n * @example\n *     // Locks the relative position and rotation between bodyA and bodyB\n *     var constraint = new LockConstraint(bodyA, bodyB);\n *     world.addConstraint(constraint);\n */\nfunction LockConstraint(bodyA, bodyB, options){\n    options = options || {};\n\n    Constraint.call(this,bodyA,bodyB,Constraint.LOCK,options);\n\n    var maxForce = ( typeof(options.maxForce)===\"undefined\" ? Number.MAX_VALUE : options.maxForce );\n\n    var localAngleB = options.localAngleB || 0;\n\n    // Use 3 equations:\n    // gx =   (xj - xi - l) * xhat = 0\n    // gy =   (xj - xi - l) * yhat = 0\n    // gr =   (xi - xj + r) * that = 0\n    //\n    // ...where:\n    //   l is the localOffsetB vector rotated to world in bodyA frame\n    //   r is the same vector but reversed and rotated from bodyB frame\n    //   xhat, yhat are world axis vectors\n    //   that is the tangent of r\n    //\n    // For the first two constraints, we get\n    // G*W = (vj - vi - ldot  ) * xhat\n    //     = (vj - vi - wi x l) * xhat\n    //\n    // Since (wi x l) * xhat = (l x xhat) * wi, we get\n    // G*W = [ -1   0   (-l x xhat)  1   0   0] * [vi wi vj wj]\n    //\n    // The last constraint gives\n    // GW = (vi - vj + wj x r) * that\n    //    = [  that   0  -that  (r x t) ]\n\n    var x =     new Equation(bodyA,bodyB,-maxForce,maxForce),\n        y =     new Equation(bodyA,bodyB,-maxForce,maxForce),\n        rot =   new Equation(bodyA,bodyB,-maxForce,maxForce);\n\n    var l = vec2.create(),\n        g = vec2.create(),\n        that = this;\n    x.computeGq = function(){\n        vec2.rotate(l, that.localOffsetB, bodyA.angle);\n        vec2.sub(g, bodyB.position, bodyA.position);\n        vec2.sub(g, g, l);\n        return g[0];\n    };\n    y.computeGq = function(){\n        vec2.rotate(l, that.localOffsetB, bodyA.angle);\n        vec2.sub(g, bodyB.position, bodyA.position);\n        vec2.sub(g, g, l);\n        return g[1];\n    };\n    var r = vec2.create(),\n        t = vec2.create();\n    rot.computeGq = function(){\n        vec2.rotate(r, that.localOffsetB, bodyB.angle - that.localAngleB);\n        vec2.scale(r,r,-1);\n        vec2.sub(g,bodyA.position,bodyB.position);\n        vec2.add(g,g,r);\n        vec2.rotate(t,r,-Math.PI/2);\n        vec2.normalize(t,t);\n        return vec2.dot(g,t);\n    };\n\n    /**\n     * The offset of bodyB in bodyA's frame.\n     * @property {Array} localOffsetB\n     */\n    this.localOffsetB = vec2.create();\n    if(options.localOffsetB){\n        vec2.copy(this.localOffsetB, options.localOffsetB);\n    } else {\n        // Construct from current positions\n        vec2.sub(this.localOffsetB, bodyB.position, bodyA.position);\n        vec2.rotate(this.localOffsetB, this.localOffsetB, -bodyA.angle);\n    }\n\n    /**\n     * The offset angle of bodyB in bodyA's frame.\n     * @property {Number} localAngleB\n     */\n    this.localAngleB = 0;\n    if(typeof(options.localAngleB) === 'number'){\n        this.localAngleB = options.localAngleB;\n    } else {\n        // Construct\n        this.localAngleB = bodyB.angle - bodyA.angle;\n    }\n\n    this.equations.push(x, y, rot);\n    this.setMaxForce(maxForce);\n}\nLockConstraint.prototype = new Constraint();\nLockConstraint.prototype.constructor = LockConstraint;\n\n/**\n * Set the maximum force to be applied.\n * @method setMaxForce\n * @param {Number} force\n */\nLockConstraint.prototype.setMaxForce = function(force){\n    var eqs = this.equations;\n    for(var i=0; i<this.equations.length; i++){\n        eqs[i].maxForce =  force;\n        eqs[i].minForce = -force;\n    }\n};\n\n/**\n * Get the max force.\n * @method getMaxForce\n * @return {Number}\n */\nLockConstraint.prototype.getMaxForce = function(){\n    return this.equations[0].maxForce;\n};\n\nvar l = vec2.create();\nvar r = vec2.create();\nvar t = vec2.create();\nvar xAxis = vec2.fromValues(1,0);\nvar yAxis = vec2.fromValues(0,1);\nLockConstraint.prototype.update = function(){\n    var x =   this.equations[0],\n        y =   this.equations[1],\n        rot = this.equations[2],\n        bodyA = this.bodyA,\n        bodyB = this.bodyB;\n\n    vec2.rotate(l,this.localOffsetB,bodyA.angle);\n    vec2.rotate(r,this.localOffsetB,bodyB.angle - this.localAngleB);\n    vec2.scale(r,r,-1);\n\n    vec2.rotate(t,r,Math.PI/2);\n    vec2.normalize(t,t);\n\n    x.G[0] = -1;\n    x.G[1] =  0;\n    x.G[2] = -vec2.crossLength(l,xAxis);\n    x.G[3] =  1;\n\n    y.G[0] =  0;\n    y.G[1] = -1;\n    y.G[2] = -vec2.crossLength(l,yAxis);\n    y.G[4] =  1;\n\n    rot.G[0] =  -t[0];\n    rot.G[1] =  -t[1];\n    rot.G[3] =  t[0];\n    rot.G[4] =  t[1];\n    rot.G[5] =  vec2.crossLength(r,t);\n};\n\n},{\"../equations/Equation\":22,\"../math/vec2\":30,\"./Constraint\":14}],18:[function(_dereq_,module,exports){\nvar Constraint = _dereq_('./Constraint')\n,   ContactEquation = _dereq_('../equations/ContactEquation')\n,   Equation = _dereq_('../equations/Equation')\n,   vec2 = _dereq_('../math/vec2')\n,   RotationalLockEquation = _dereq_('../equations/RotationalLockEquation');\n\nmodule.exports = PrismaticConstraint;\n\n/**\n * Constraint that only allows bodies to move along a line, relative to each other. See <a href=\"http://www.iforce2d.net/b2dtut/joints-prismatic\">this tutorial</a>. Also called \"slider constraint\".\n *\n * @class PrismaticConstraint\n * @constructor\n * @extends Constraint\n * @author schteppe\n * @param {Body}    bodyA\n * @param {Body}    bodyB\n * @param {Object}  [options]\n * @param {Number}  [options.maxForce]                Max force to be applied by the constraint\n * @param {Array}   [options.localAnchorA]            Body A's anchor point, defined in its own local frame.\n * @param {Array}   [options.localAnchorB]            Body B's anchor point, defined in its own local frame.\n * @param {Array}   [options.localAxisA]              An axis, defined in body A frame, that body B's anchor point may slide along.\n * @param {Boolean} [options.disableRotationalLock]   If set to true, bodyB will be free to rotate around its anchor point.\n * @param {Number}  [options.upperLimit]\n * @param {Number}  [options.lowerLimit]\n * @todo Ability to create using only a point and a worldAxis\n */\nfunction PrismaticConstraint(bodyA, bodyB, options){\n    options = options || {};\n    Constraint.call(this,bodyA,bodyB,Constraint.PRISMATIC,options);\n\n    // Get anchors\n    var localAnchorA = vec2.fromValues(0,0),\n        localAxisA = vec2.fromValues(1,0),\n        localAnchorB = vec2.fromValues(0,0);\n    if(options.localAnchorA){ vec2.copy(localAnchorA, options.localAnchorA); }\n    if(options.localAxisA){ vec2.copy(localAxisA,   options.localAxisA); }\n    if(options.localAnchorB){ vec2.copy(localAnchorB, options.localAnchorB); }\n\n    /**\n     * @property localAnchorA\n     * @type {Array}\n     */\n    this.localAnchorA = localAnchorA;\n\n    /**\n     * @property localAnchorB\n     * @type {Array}\n     */\n    this.localAnchorB = localAnchorB;\n\n    /**\n     * @property localAxisA\n     * @type {Array}\n     */\n    this.localAxisA = localAxisA;\n\n    /*\n\n    The constraint violation for the common axis point is\n\n        g = ( xj + rj - xi - ri ) * t   :=  gg*t\n\n    where r are body-local anchor points, and t is a tangent to the constraint axis defined in body i frame.\n\n        gdot =  ( vj + wj x rj - vi - wi x ri ) * t + ( xj + rj - xi - ri ) * ( wi x t )\n\n    Note the use of the chain rule. Now we identify the jacobian\n\n        G*W = [ -t      -ri x t + t x gg     t    rj x t ] * [vi wi vj wj]\n\n    The rotational part is just a rotation lock.\n\n     */\n\n    var maxForce = this.maxForce = typeof(options.maxForce)!==\"undefined\" ? options.maxForce : Number.MAX_VALUE;\n\n    // Translational part\n    var trans = new Equation(bodyA,bodyB,-maxForce,maxForce);\n    var ri = new vec2.create(),\n        rj = new vec2.create(),\n        gg = new vec2.create(),\n        t =  new vec2.create();\n    trans.computeGq = function(){\n        // g = ( xj + rj - xi - ri ) * t\n        return vec2.dot(gg,t);\n    };\n    trans.updateJacobian = function(){\n        var G = this.G,\n            xi = bodyA.position,\n            xj = bodyB.position;\n        vec2.rotate(ri,localAnchorA,bodyA.angle);\n        vec2.rotate(rj,localAnchorB,bodyB.angle);\n        vec2.add(gg,xj,rj);\n        vec2.sub(gg,gg,xi);\n        vec2.sub(gg,gg,ri);\n        vec2.rotate(t,localAxisA,bodyA.angle+Math.PI/2);\n\n        G[0] = -t[0];\n        G[1] = -t[1];\n        G[2] = -vec2.crossLength(ri,t) + vec2.crossLength(t,gg);\n        G[3] = t[0];\n        G[4] = t[1];\n        G[5] = vec2.crossLength(rj,t);\n    };\n    this.equations.push(trans);\n\n    // Rotational part\n    if(!options.disableRotationalLock){\n        var rot = new RotationalLockEquation(bodyA,bodyB,-maxForce,maxForce);\n        this.equations.push(rot);\n    }\n\n    /**\n     * The position of anchor A relative to anchor B, along the constraint axis.\n     * @property position\n     * @type {Number}\n     */\n    this.position = 0;\n\n    // Is this one used at all?\n    this.velocity = 0;\n\n    /**\n     * Set to true to enable lower limit.\n     * @property lowerLimitEnabled\n     * @type {Boolean}\n     */\n    this.lowerLimitEnabled = typeof(options.lowerLimit)!==\"undefined\" ? true : false;\n\n    /**\n     * Set to true to enable upper limit.\n     * @property upperLimitEnabled\n     * @type {Boolean}\n     */\n    this.upperLimitEnabled = typeof(options.upperLimit)!==\"undefined\" ? true : false;\n\n    /**\n     * Lower constraint limit. The constraint position is forced to be larger than this value.\n     * @property lowerLimit\n     * @type {Number}\n     */\n    this.lowerLimit = typeof(options.lowerLimit)!==\"undefined\" ? options.lowerLimit : 0;\n\n    /**\n     * Upper constraint limit. The constraint position is forced to be smaller than this value.\n     * @property upperLimit\n     * @type {Number}\n     */\n    this.upperLimit = typeof(options.upperLimit)!==\"undefined\" ? options.upperLimit : 1;\n\n    // Equations used for limits\n    this.upperLimitEquation = new ContactEquation(bodyA,bodyB);\n    this.lowerLimitEquation = new ContactEquation(bodyA,bodyB);\n\n    // Set max/min forces\n    this.upperLimitEquation.minForce = this.lowerLimitEquation.minForce = 0;\n    this.upperLimitEquation.maxForce = this.lowerLimitEquation.maxForce = maxForce;\n\n    /**\n     * Equation used for the motor.\n     * @property motorEquation\n     * @type {Equation}\n     */\n    this.motorEquation = new Equation(bodyA,bodyB);\n\n    /**\n     * The current motor state. Enable or disable the motor using .enableMotor\n     * @property motorEnabled\n     * @type {Boolean}\n     */\n    this.motorEnabled = false;\n\n    /**\n     * Set the target speed for the motor.\n     * @property motorSpeed\n     * @type {Number}\n     */\n    this.motorSpeed = 0;\n\n    var that = this;\n    var motorEquation = this.motorEquation;\n    var old = motorEquation.computeGW;\n    motorEquation.computeGq = function(){ return 0; };\n    motorEquation.computeGW = function(){\n        var G = this.G,\n            bi = this.bodyA,\n            bj = this.bodyB,\n            vi = bi.velocity,\n            vj = bj.velocity,\n            wi = bi.angularVelocity,\n            wj = bj.angularVelocity;\n        return this.gmult(G,vi,wi,vj,wj) + that.motorSpeed;\n    };\n}\n\nPrismaticConstraint.prototype = new Constraint();\nPrismaticConstraint.prototype.constructor = PrismaticConstraint;\n\nvar worldAxisA = vec2.create(),\n    worldAnchorA = vec2.create(),\n    worldAnchorB = vec2.create(),\n    orientedAnchorA = vec2.create(),\n    orientedAnchorB = vec2.create(),\n    tmp = vec2.create();\n\n/**\n * Update the constraint equations. Should be done if any of the bodies changed position, before solving.\n * @method update\n */\nPrismaticConstraint.prototype.update = function(){\n    var eqs = this.equations,\n        trans = eqs[0],\n        upperLimit = this.upperLimit,\n        lowerLimit = this.lowerLimit,\n        upperLimitEquation = this.upperLimitEquation,\n        lowerLimitEquation = this.lowerLimitEquation,\n        bodyA = this.bodyA,\n        bodyB = this.bodyB,\n        localAxisA = this.localAxisA,\n        localAnchorA = this.localAnchorA,\n        localAnchorB = this.localAnchorB;\n\n    trans.updateJacobian();\n\n    // Transform local things to world\n    vec2.rotate(worldAxisA,      localAxisA,      bodyA.angle);\n    vec2.rotate(orientedAnchorA, localAnchorA,    bodyA.angle);\n    vec2.add(worldAnchorA,       orientedAnchorA, bodyA.position);\n    vec2.rotate(orientedAnchorB, localAnchorB,    bodyB.angle);\n    vec2.add(worldAnchorB,       orientedAnchorB, bodyB.position);\n\n    var relPosition = this.position = vec2.dot(worldAnchorB,worldAxisA) - vec2.dot(worldAnchorA,worldAxisA);\n\n    // Motor\n    if(this.motorEnabled){\n        // G = [ a     a x ri   -a   -a x rj ]\n        var G = this.motorEquation.G;\n        G[0] = worldAxisA[0];\n        G[1] = worldAxisA[1];\n        G[2] = vec2.crossLength(worldAxisA,orientedAnchorB);\n        G[3] = -worldAxisA[0];\n        G[4] = -worldAxisA[1];\n        G[5] = -vec2.crossLength(worldAxisA,orientedAnchorA);\n    }\n\n    /*\n        Limits strategy:\n        Add contact equation, with normal along the constraint axis.\n        min/maxForce is set so the constraint is repulsive in the correct direction.\n        Some offset is added to either equation.contactPointA or .contactPointB to get the correct upper/lower limit.\n\n                 ^\n                 |\n      upperLimit x\n                 |    ------\n         anchorB x<---|  B |\n                 |    |    |\n        ------   |    ------\n        |    |   |\n        |  A |-->x anchorA\n        ------   |\n                 x lowerLimit\n                 |\n                axis\n     */\n\n\n    if(this.upperLimitEnabled && relPosition > upperLimit){\n        // Update contact constraint normal, etc\n        vec2.scale(upperLimitEquation.normalA, worldAxisA, -1);\n        vec2.sub(upperLimitEquation.contactPointA, worldAnchorA, bodyA.position);\n        vec2.sub(upperLimitEquation.contactPointB, worldAnchorB, bodyB.position);\n        vec2.scale(tmp,worldAxisA,upperLimit);\n        vec2.add(upperLimitEquation.contactPointA,upperLimitEquation.contactPointA,tmp);\n        if(eqs.indexOf(upperLimitEquation) === -1){\n            eqs.push(upperLimitEquation);\n        }\n    } else {\n        var idx = eqs.indexOf(upperLimitEquation);\n        if(idx !== -1){\n            eqs.splice(idx,1);\n        }\n    }\n\n    if(this.lowerLimitEnabled && relPosition < lowerLimit){\n        // Update contact constraint normal, etc\n        vec2.scale(lowerLimitEquation.normalA, worldAxisA, 1);\n        vec2.sub(lowerLimitEquation.contactPointA, worldAnchorA, bodyA.position);\n        vec2.sub(lowerLimitEquation.contactPointB, worldAnchorB, bodyB.position);\n        vec2.scale(tmp,worldAxisA,lowerLimit);\n        vec2.sub(lowerLimitEquation.contactPointB,lowerLimitEquation.contactPointB,tmp);\n        if(eqs.indexOf(lowerLimitEquation) === -1){\n            eqs.push(lowerLimitEquation);\n        }\n    } else {\n        var idx = eqs.indexOf(lowerLimitEquation);\n        if(idx !== -1){\n            eqs.splice(idx,1);\n        }\n    }\n};\n\n/**\n * Enable the motor\n * @method enableMotor\n */\nPrismaticConstraint.prototype.enableMotor = function(){\n    if(this.motorEnabled){\n        return;\n    }\n    this.equations.push(this.motorEquation);\n    this.motorEnabled = true;\n};\n\n/**\n * Disable the rotational motor\n * @method disableMotor\n */\nPrismaticConstraint.prototype.disableMotor = function(){\n    if(!this.motorEnabled){\n        return;\n    }\n    var i = this.equations.indexOf(this.motorEquation);\n    this.equations.splice(i,1);\n    this.motorEnabled = false;\n};\n\n/**\n * Set the constraint limits.\n * @method setLimits\n * @param {number} lower Lower limit.\n * @param {number} upper Upper limit.\n */\nPrismaticConstraint.prototype.setLimits = function (lower, upper) {\n    if(typeof(lower) === 'number'){\n        this.lowerLimit = lower;\n        this.lowerLimitEnabled = true;\n    } else {\n        this.lowerLimit = lower;\n        this.lowerLimitEnabled = false;\n    }\n\n    if(typeof(upper) === 'number'){\n        this.upperLimit = upper;\n        this.upperLimitEnabled = true;\n    } else {\n        this.upperLimit = upper;\n        this.upperLimitEnabled = false;\n    }\n};\n\n\n},{\"../equations/ContactEquation\":21,\"../equations/Equation\":22,\"../equations/RotationalLockEquation\":24,\"../math/vec2\":30,\"./Constraint\":14}],19:[function(_dereq_,module,exports){\nvar Constraint = _dereq_('./Constraint')\n,   Equation = _dereq_('../equations/Equation')\n,   RotationalVelocityEquation = _dereq_('../equations/RotationalVelocityEquation')\n,   RotationalLockEquation = _dereq_('../equations/RotationalLockEquation')\n,   vec2 = _dereq_('../math/vec2');\n\nmodule.exports = RevoluteConstraint;\n\nvar worldPivotA = vec2.create(),\n    worldPivotB = vec2.create(),\n    xAxis = vec2.fromValues(1,0),\n    yAxis = vec2.fromValues(0,1),\n    g = vec2.create();\n\n/**\n * Connects two bodies at given offset points, letting them rotate relative to each other around this point.\n * @class RevoluteConstraint\n * @constructor\n * @author schteppe\n * @param {Body}    bodyA\n * @param {Body}    bodyB\n * @param {Object}  [options]\n * @param {Array}   [options.worldPivot] A pivot point given in world coordinates. If specified, localPivotA and localPivotB are automatically computed from this value.\n * @param {Array}   [options.localPivotA] The point relative to the center of mass of bodyA which bodyA is constrained to.\n * @param {Array}   [options.localPivotB] See localPivotA.\n * @param {Number}  [options.maxForce] The maximum force that should be applied to constrain the bodies.\n * @extends Constraint\n *\n * @example\n *     // This will create a revolute constraint between two bodies with pivot point in between them.\n *     var bodyA = new Body({ mass: 1, position: [-1, 0] });\n *     var bodyB = new Body({ mass: 1, position: [1, 0] });\n *     var constraint = new RevoluteConstraint(bodyA, bodyB, {\n *         worldPivot: [0, 0]\n *     });\n *     world.addConstraint(constraint);\n *\n *     // Using body-local pivot points, the constraint could have been constructed like this:\n *     var constraint = new RevoluteConstraint(bodyA, bodyB, {\n *         localPivotA: [1, 0],\n *         localPivotB: [-1, 0]\n *     });\n */\nfunction RevoluteConstraint(bodyA, bodyB, options){\n    options = options || {};\n    Constraint.call(this,bodyA,bodyB,Constraint.REVOLUTE,options);\n\n    var maxForce = this.maxForce = typeof(options.maxForce) !== \"undefined\" ? options.maxForce : Number.MAX_VALUE;\n\n    /**\n     * @property {Array} pivotA\n     */\n    this.pivotA = vec2.create();\n\n    /**\n     * @property {Array} pivotB\n     */\n    this.pivotB = vec2.create();\n\n    if(options.worldPivot){\n        // Compute pivotA and pivotB\n        vec2.sub(this.pivotA, options.worldPivot, bodyA.position);\n        vec2.sub(this.pivotB, options.worldPivot, bodyB.position);\n        // Rotate to local coordinate system\n        vec2.rotate(this.pivotA, this.pivotA, -bodyA.angle);\n        vec2.rotate(this.pivotB, this.pivotB, -bodyB.angle);\n    } else {\n        // Get pivotA and pivotB\n        vec2.copy(this.pivotA, options.localPivotA);\n        vec2.copy(this.pivotB, options.localPivotB);\n    }\n\n    // Equations to be fed to the solver\n    var eqs = this.equations = [\n        new Equation(bodyA,bodyB,-maxForce,maxForce),\n        new Equation(bodyA,bodyB,-maxForce,maxForce),\n    ];\n\n    var x = eqs[0];\n    var y = eqs[1];\n    var that = this;\n\n    x.computeGq = function(){\n        vec2.rotate(worldPivotA, that.pivotA, bodyA.angle);\n        vec2.rotate(worldPivotB, that.pivotB, bodyB.angle);\n        vec2.add(g, bodyB.position, worldPivotB);\n        vec2.sub(g, g, bodyA.position);\n        vec2.sub(g, g, worldPivotA);\n        return vec2.dot(g,xAxis);\n    };\n\n    y.computeGq = function(){\n        vec2.rotate(worldPivotA, that.pivotA, bodyA.angle);\n        vec2.rotate(worldPivotB, that.pivotB, bodyB.angle);\n        vec2.add(g, bodyB.position, worldPivotB);\n        vec2.sub(g, g, bodyA.position);\n        vec2.sub(g, g, worldPivotA);\n        return vec2.dot(g,yAxis);\n    };\n\n    y.minForce = x.minForce = -maxForce;\n    y.maxForce = x.maxForce =  maxForce;\n\n    this.motorEquation = new RotationalVelocityEquation(bodyA,bodyB);\n\n    /**\n     * Indicates whether the motor is enabled. Use .enableMotor() to enable the constraint motor.\n     * @property {Boolean} motorEnabled\n     * @readOnly\n     */\n    this.motorEnabled = false;\n\n    /**\n     * The constraint position.\n     * @property angle\n     * @type {Number}\n     * @readOnly\n     */\n    this.angle = 0;\n\n    /**\n     * Set to true to enable lower limit\n     * @property lowerLimitEnabled\n     * @type {Boolean}\n     */\n    this.lowerLimitEnabled = false;\n\n    /**\n     * Set to true to enable upper limit\n     * @property upperLimitEnabled\n     * @type {Boolean}\n     */\n    this.upperLimitEnabled = false;\n\n    /**\n     * The lower limit on the constraint angle.\n     * @property lowerLimit\n     * @type {Boolean}\n     */\n    this.lowerLimit = 0;\n\n    /**\n     * The upper limit on the constraint angle.\n     * @property upperLimit\n     * @type {Boolean}\n     */\n    this.upperLimit = 0;\n\n    this.upperLimitEquation = new RotationalLockEquation(bodyA,bodyB);\n    this.lowerLimitEquation = new RotationalLockEquation(bodyA,bodyB);\n    this.upperLimitEquation.minForce = 0;\n    this.lowerLimitEquation.maxForce = 0;\n}\nRevoluteConstraint.prototype = new Constraint();\nRevoluteConstraint.prototype.constructor = RevoluteConstraint;\n\n/**\n * Set the constraint angle limits.\n * @method setLimits\n * @param {number} lower Lower angle limit.\n * @param {number} upper Upper angle limit.\n */\nRevoluteConstraint.prototype.setLimits = function (lower, upper) {\n    if(typeof(lower) === 'number'){\n        this.lowerLimit = lower;\n        this.lowerLimitEnabled = true;\n    } else {\n        this.lowerLimit = lower;\n        this.lowerLimitEnabled = false;\n    }\n\n    if(typeof(upper) === 'number'){\n        this.upperLimit = upper;\n        this.upperLimitEnabled = true;\n    } else {\n        this.upperLimit = upper;\n        this.upperLimitEnabled = false;\n    }\n};\n\nRevoluteConstraint.prototype.update = function(){\n    var bodyA =  this.bodyA,\n        bodyB =  this.bodyB,\n        pivotA = this.pivotA,\n        pivotB = this.pivotB,\n        eqs =    this.equations,\n        normal = eqs[0],\n        tangent= eqs[1],\n        x = eqs[0],\n        y = eqs[1],\n        upperLimit = this.upperLimit,\n        lowerLimit = this.lowerLimit,\n        upperLimitEquation = this.upperLimitEquation,\n        lowerLimitEquation = this.lowerLimitEquation;\n\n    var relAngle = this.angle = bodyB.angle - bodyA.angle;\n\n    if(this.upperLimitEnabled && relAngle > upperLimit){\n        upperLimitEquation.angle = upperLimit;\n        if(eqs.indexOf(upperLimitEquation) === -1){\n            eqs.push(upperLimitEquation);\n        }\n    } else {\n        var idx = eqs.indexOf(upperLimitEquation);\n        if(idx !== -1){\n            eqs.splice(idx,1);\n        }\n    }\n\n    if(this.lowerLimitEnabled && relAngle < lowerLimit){\n        lowerLimitEquation.angle = lowerLimit;\n        if(eqs.indexOf(lowerLimitEquation) === -1){\n            eqs.push(lowerLimitEquation);\n        }\n    } else {\n        var idx = eqs.indexOf(lowerLimitEquation);\n        if(idx !== -1){\n            eqs.splice(idx,1);\n        }\n    }\n\n    /*\n\n    The constraint violation is\n\n        g = xj + rj - xi - ri\n\n    ...where xi and xj are the body positions and ri and rj world-oriented offset vectors. Differentiate:\n\n        gdot = vj + wj x rj - vi - wi x ri\n\n    We split this into x and y directions. (let x and y be unit vectors along the respective axes)\n\n        gdot * x = ( vj + wj x rj - vi - wi x ri ) * x\n                 = ( vj*x + (wj x rj)*x -vi*x -(wi x ri)*x\n                 = ( vj*x + (rj x x)*wj -vi*x -(ri x x)*wi\n                 = [ -x   -(ri x x)   x   (rj x x)] * [vi wi vj wj]\n                 = G*W\n\n    ...and similar for y. We have then identified the jacobian entries for x and y directions:\n\n        Gx = [ x   (rj x x)   -x   -(ri x x)]\n        Gy = [ y   (rj x y)   -y   -(ri x y)]\n\n     */\n\n    vec2.rotate(worldPivotA, pivotA, bodyA.angle);\n    vec2.rotate(worldPivotB, pivotB, bodyB.angle);\n\n    // todo: these are a bit sparse. We could save some computations on making custom eq.computeGW functions, etc\n\n    x.G[0] = -1;\n    x.G[1] =  0;\n    x.G[2] = -vec2.crossLength(worldPivotA,xAxis);\n    x.G[3] =  1;\n    x.G[4] =  0;\n    x.G[5] =  vec2.crossLength(worldPivotB,xAxis);\n\n    y.G[0] =  0;\n    y.G[1] = -1;\n    y.G[2] = -vec2.crossLength(worldPivotA,yAxis);\n    y.G[3] =  0;\n    y.G[4] =  1;\n    y.G[5] =  vec2.crossLength(worldPivotB,yAxis);\n};\n\n/**\n * Enable the rotational motor\n * @method enableMotor\n */\nRevoluteConstraint.prototype.enableMotor = function(){\n    if(this.motorEnabled){\n        return;\n    }\n    this.equations.push(this.motorEquation);\n    this.motorEnabled = true;\n};\n\n/**\n * Disable the rotational motor\n * @method disableMotor\n */\nRevoluteConstraint.prototype.disableMotor = function(){\n    if(!this.motorEnabled){\n        return;\n    }\n    var i = this.equations.indexOf(this.motorEquation);\n    this.equations.splice(i,1);\n    this.motorEnabled = false;\n};\n\n/**\n * Check if the motor is enabled.\n * @method motorIsEnabled\n * @deprecated use property motorEnabled instead.\n * @return {Boolean}\n */\nRevoluteConstraint.prototype.motorIsEnabled = function(){\n    return !!this.motorEnabled;\n};\n\n/**\n * Set the speed of the rotational constraint motor\n * @method setMotorSpeed\n * @param  {Number} speed\n */\nRevoluteConstraint.prototype.setMotorSpeed = function(speed){\n    if(!this.motorEnabled){\n        return;\n    }\n    var i = this.equations.indexOf(this.motorEquation);\n    this.equations[i].relativeVelocity = speed;\n};\n\n/**\n * Get the speed of the rotational constraint motor\n * @method getMotorSpeed\n * @return {Number} The current speed, or false if the motor is not enabled.\n */\nRevoluteConstraint.prototype.getMotorSpeed = function(){\n    if(!this.motorEnabled){\n        return false;\n    }\n    return this.motorEquation.relativeVelocity;\n};\n\n},{\"../equations/Equation\":22,\"../equations/RotationalLockEquation\":24,\"../equations/RotationalVelocityEquation\":25,\"../math/vec2\":30,\"./Constraint\":14}],20:[function(_dereq_,module,exports){\nvar Equation = _dereq_(\"./Equation\"),\n    vec2 = _dereq_('../math/vec2');\n\nmodule.exports = AngleLockEquation;\n\n/**\n * Locks the relative angle between two bodies. The constraint tries to keep the dot product between two vectors, local in each body, to zero. The local angle in body i is a parameter.\n *\n * @class AngleLockEquation\n * @constructor\n * @extends Equation\n * @param {Body} bodyA\n * @param {Body} bodyB\n * @param {Object} [options]\n * @param {Number} [options.angle] Angle to add to the local vector in body A.\n * @param {Number} [options.ratio] Gear ratio\n */\nfunction AngleLockEquation(bodyA, bodyB, options){\n    options = options || {};\n    Equation.call(this,bodyA,bodyB,-Number.MAX_VALUE,Number.MAX_VALUE);\n    this.angle = options.angle || 0;\n\n    /**\n     * The gear ratio.\n     * @property {Number} ratio\n     * @private\n     * @see setRatio\n     */\n    this.ratio = typeof(options.ratio)===\"number\" ? options.ratio : 1;\n\n    this.setRatio(this.ratio);\n}\nAngleLockEquation.prototype = new Equation();\nAngleLockEquation.prototype.constructor = AngleLockEquation;\n\nAngleLockEquation.prototype.computeGq = function(){\n    return this.ratio * this.bodyA.angle - this.bodyB.angle + this.angle;\n};\n\n/**\n * Set the gear ratio for this equation\n * @method setRatio\n * @param {Number} ratio\n */\nAngleLockEquation.prototype.setRatio = function(ratio){\n    var G = this.G;\n    G[2] =  ratio;\n    G[5] = -1;\n    this.ratio = ratio;\n};\n\n/**\n * Set the max force for the equation.\n * @method setMaxTorque\n * @param {Number} torque\n */\nAngleLockEquation.prototype.setMaxTorque = function(torque){\n    this.maxForce =  torque;\n    this.minForce = -torque;\n};\n\n},{\"../math/vec2\":30,\"./Equation\":22}],21:[function(_dereq_,module,exports){\nvar Equation = _dereq_(\"./Equation\"),\n    vec2 = _dereq_('../math/vec2');\n\nmodule.exports = ContactEquation;\n\n/**\n * Non-penetration constraint equation. Tries to make the contactPointA and contactPointB vectors coincide, while keeping the applied force repulsive.\n *\n * @class ContactEquation\n * @constructor\n * @extends Equation\n * @param {Body} bodyA\n * @param {Body} bodyB\n */\nfunction ContactEquation(bodyA, bodyB){\n    Equation.call(this, bodyA, bodyB, 0, Number.MAX_VALUE);\n\n    /**\n     * Vector from body i center of mass to the contact point.\n     * @property contactPointA\n     * @type {Array}\n     */\n    this.contactPointA = vec2.create();\n    this.penetrationVec = vec2.create();\n\n    /**\n     * World-oriented vector from body A center of mass to the contact point.\n     * @property contactPointB\n     * @type {Array}\n     */\n    this.contactPointB = vec2.create();\n\n    /**\n     * The normal vector, pointing out of body i\n     * @property normalA\n     * @type {Array}\n     */\n    this.normalA = vec2.create();\n\n    /**\n     * The restitution to use (0=no bounciness, 1=max bounciness).\n     * @property restitution\n     * @type {Number}\n     */\n    this.restitution = 0;\n\n    /**\n     * This property is set to true if this is the first impact between the bodies (not persistant contact).\n     * @property firstImpact\n     * @type {Boolean}\n     * @readOnly\n     */\n    this.firstImpact = false;\n\n    /**\n     * The shape in body i that triggered this contact.\n     * @property shapeA\n     * @type {Shape}\n     */\n    this.shapeA = null;\n\n    /**\n     * The shape in body j that triggered this contact.\n     * @property shapeB\n     * @type {Shape}\n     */\n    this.shapeB = null;\n}\nContactEquation.prototype = new Equation();\nContactEquation.prototype.constructor = ContactEquation;\nContactEquation.prototype.computeB = function(a,b,h){\n    var bi = this.bodyA,\n        bj = this.bodyB,\n        ri = this.contactPointA,\n        rj = this.contactPointB,\n        xi = bi.position,\n        xj = bj.position;\n\n    var penetrationVec = this.penetrationVec,\n        n = this.normalA,\n        G = this.G;\n\n    // Caluclate cross products\n    var rixn = vec2.crossLength(ri,n),\n        rjxn = vec2.crossLength(rj,n);\n\n    // G = [-n -rixn n rjxn]\n    G[0] = -n[0];\n    G[1] = -n[1];\n    G[2] = -rixn;\n    G[3] = n[0];\n    G[4] = n[1];\n    G[5] = rjxn;\n\n    // Calculate q = xj+rj -(xi+ri) i.e. the penetration vector\n    vec2.add(penetrationVec,xj,rj);\n    vec2.sub(penetrationVec,penetrationVec,xi);\n    vec2.sub(penetrationVec,penetrationVec,ri);\n\n    // Compute iteration\n    var GW, Gq;\n    if(this.firstImpact && this.restitution !== 0){\n        Gq = 0;\n        GW = (1/b)*(1+this.restitution) * this.computeGW();\n    } else {\n        Gq = vec2.dot(n,penetrationVec) + this.offset;\n        GW = this.computeGW();\n    }\n\n    var GiMf = this.computeGiMf();\n    var B = - Gq * a - GW * b - h*GiMf;\n\n    return B;\n};\n\n},{\"../math/vec2\":30,\"./Equation\":22}],22:[function(_dereq_,module,exports){\nmodule.exports = Equation;\n\nvar vec2 = _dereq_('../math/vec2'),\n    Utils = _dereq_('../utils/Utils'),\n    Body = _dereq_('../objects/Body');\n\n/**\n * Base class for constraint equations.\n * @class Equation\n * @constructor\n * @param {Body} bodyA First body participating in the equation\n * @param {Body} bodyB Second body participating in the equation\n * @param {number} minForce Minimum force to apply. Default: -Number.MAX_VALUE\n * @param {number} maxForce Maximum force to apply. Default: Number.MAX_VALUE\n */\nfunction Equation(bodyA, bodyB, minForce, maxForce){\n\n    /**\n     * Minimum force to apply when solving.\n     * @property minForce\n     * @type {Number}\n     */\n    this.minForce = typeof(minForce)===\"undefined\" ? -Number.MAX_VALUE : minForce;\n\n    /**\n     * Max force to apply when solving.\n     * @property maxForce\n     * @type {Number}\n     */\n    this.maxForce = typeof(maxForce)===\"undefined\" ? Number.MAX_VALUE : maxForce;\n\n    /**\n     * First body participating in the constraint\n     * @property bodyA\n     * @type {Body}\n     */\n    this.bodyA = bodyA;\n\n    /**\n     * Second body participating in the constraint\n     * @property bodyB\n     * @type {Body}\n     */\n    this.bodyB = bodyB;\n\n    /**\n     * The stiffness of this equation. Typically chosen to a large number (~1e7), but can be chosen somewhat freely to get a stable simulation.\n     * @property stiffness\n     * @type {Number}\n     */\n    this.stiffness = Equation.DEFAULT_STIFFNESS;\n\n    /**\n     * The number of time steps needed to stabilize the constraint equation. Typically between 3 and 5 time steps.\n     * @property relaxation\n     * @type {Number}\n     */\n    this.relaxation = Equation.DEFAULT_RELAXATION;\n\n    /**\n     * The Jacobian entry of this equation. 6 numbers, 3 per body (x,y,angle).\n     * @property G\n     * @type {Array}\n     */\n    this.G = new Utils.ARRAY_TYPE(6);\n    for(var i=0; i<6; i++){\n        this.G[i]=0;\n    }\n\n    this.offset = 0;\n\n    this.a = 0;\n    this.b = 0;\n    this.epsilon = 0;\n    this.timeStep = 1/60;\n\n    /**\n     * Indicates if stiffness or relaxation was changed.\n     * @property {Boolean} needsUpdate\n     */\n    this.needsUpdate = true;\n\n    /**\n     * The resulting constraint multiplier from the last solve. This is mostly equivalent to the force produced by the constraint.\n     * @property multiplier\n     * @type {Number}\n     */\n    this.multiplier = 0;\n\n    /**\n     * Relative velocity.\n     * @property {Number} relativeVelocity\n     */\n    this.relativeVelocity = 0;\n\n    /**\n     * Whether this equation is enabled or not. If true, it will be added to the solver.\n     * @property {Boolean} enabled\n     */\n    this.enabled = true;\n}\nEquation.prototype.constructor = Equation;\n\n/**\n * The default stiffness when creating a new Equation.\n * @static\n * @property {Number} DEFAULT_STIFFNESS\n * @default 1e6\n */\nEquation.DEFAULT_STIFFNESS = 1e6;\n\n/**\n * The default relaxation when creating a new Equation.\n * @static\n * @property {Number} DEFAULT_RELAXATION\n * @default 4\n */\nEquation.DEFAULT_RELAXATION = 4;\n\n/**\n * Compute SPOOK parameters .a, .b and .epsilon according to the current parameters. See equations 9, 10 and 11 in the <a href=\"http://www8.cs.umu.se/kurser/5DV058/VT09/lectures/spooknotes.pdf\">SPOOK notes</a>.\n * @method update\n */\nEquation.prototype.update = function(){\n    var k = this.stiffness,\n        d = this.relaxation,\n        h = this.timeStep;\n\n    this.a = 4.0 / (h * (1 + 4 * d));\n    this.b = (4.0 * d) / (1 + 4 * d);\n    this.epsilon = 4.0 / (h * h * k * (1 + 4 * d));\n\n    this.needsUpdate = false;\n};\n\n/**\n * Multiply a jacobian entry with corresponding positions or velocities\n * @method gmult\n * @return {Number}\n */\nEquation.prototype.gmult = function(G,vi,wi,vj,wj){\n    return  G[0] * vi[0] +\n            G[1] * vi[1] +\n            G[2] * wi +\n            G[3] * vj[0] +\n            G[4] * vj[1] +\n            G[5] * wj;\n};\n\n/**\n * Computes the RHS of the SPOOK equation\n * @method computeB\n * @return {Number}\n */\nEquation.prototype.computeB = function(a,b,h){\n    var GW = this.computeGW();\n    var Gq = this.computeGq();\n    var GiMf = this.computeGiMf();\n    return - Gq * a - GW * b - GiMf*h;\n};\n\n/**\n * Computes G\\*q, where q are the generalized body coordinates\n * @method computeGq\n * @return {Number}\n */\nvar qi = vec2.create(),\n    qj = vec2.create();\nEquation.prototype.computeGq = function(){\n    var G = this.G,\n        bi = this.bodyA,\n        bj = this.bodyB,\n        xi = bi.position,\n        xj = bj.position,\n        ai = bi.angle,\n        aj = bj.angle;\n\n    return this.gmult(G, qi, ai, qj, aj) + this.offset;\n};\n\n/**\n * Computes G\\*W, where W are the body velocities\n * @method computeGW\n * @return {Number}\n */\nEquation.prototype.computeGW = function(){\n    var G = this.G,\n        bi = this.bodyA,\n        bj = this.bodyB,\n        vi = bi.velocity,\n        vj = bj.velocity,\n        wi = bi.angularVelocity,\n        wj = bj.angularVelocity;\n    return this.gmult(G,vi,wi,vj,wj) + this.relativeVelocity;\n};\n\n/**\n * Computes G\\*Wlambda, where W are the body velocities\n * @method computeGWlambda\n * @return {Number}\n */\nEquation.prototype.computeGWlambda = function(){\n    var G = this.G,\n        bi = this.bodyA,\n        bj = this.bodyB,\n        vi = bi.vlambda,\n        vj = bj.vlambda,\n        wi = bi.wlambda,\n        wj = bj.wlambda;\n    return this.gmult(G,vi,wi,vj,wj);\n};\n\n/**\n * Computes G\\*inv(M)\\*f, where M is the mass matrix with diagonal blocks for each body, and f are the forces on the bodies.\n * @method computeGiMf\n * @return {Number}\n */\nvar iMfi = vec2.create(),\n    iMfj = vec2.create();\nEquation.prototype.computeGiMf = function(){\n    var bi = this.bodyA,\n        bj = this.bodyB,\n        fi = bi.force,\n        ti = bi.angularForce,\n        fj = bj.force,\n        tj = bj.angularForce,\n        invMassi = bi.invMassSolve,\n        invMassj = bj.invMassSolve,\n        invIi = bi.invInertiaSolve,\n        invIj = bj.invInertiaSolve,\n        G = this.G;\n\n    vec2.scale(iMfi, fi, invMassi);\n    vec2.multiply(iMfi, bi.massMultiplier, iMfi);\n    vec2.scale(iMfj, fj,invMassj);\n    vec2.multiply(iMfj, bj.massMultiplier, iMfj);\n\n    return this.gmult(G,iMfi,ti*invIi,iMfj,tj*invIj);\n};\n\n/**\n * Computes G\\*inv(M)\\*G'\n * @method computeGiMGt\n * @return {Number}\n */\nEquation.prototype.computeGiMGt = function(){\n    var bi = this.bodyA,\n        bj = this.bodyB,\n        invMassi = bi.invMassSolve,\n        invMassj = bj.invMassSolve,\n        invIi = bi.invInertiaSolve,\n        invIj = bj.invInertiaSolve,\n        G = this.G;\n\n    return  G[0] * G[0] * invMassi * bi.massMultiplier[0] +\n            G[1] * G[1] * invMassi * bi.massMultiplier[1] +\n            G[2] * G[2] *    invIi +\n            G[3] * G[3] * invMassj * bj.massMultiplier[0] +\n            G[4] * G[4] * invMassj * bj.massMultiplier[1] +\n            G[5] * G[5] *    invIj;\n};\n\nvar addToWlambda_temp = vec2.create(),\n    addToWlambda_Gi = vec2.create(),\n    addToWlambda_Gj = vec2.create(),\n    addToWlambda_ri = vec2.create(),\n    addToWlambda_rj = vec2.create(),\n    addToWlambda_Mdiag = vec2.create();\n\n/**\n * Add constraint velocity to the bodies.\n * @method addToWlambda\n * @param {Number} deltalambda\n */\nEquation.prototype.addToWlambda = function(deltalambda){\n    var bi = this.bodyA,\n        bj = this.bodyB,\n        temp = addToWlambda_temp,\n        Gi = addToWlambda_Gi,\n        Gj = addToWlambda_Gj,\n        ri = addToWlambda_ri,\n        rj = addToWlambda_rj,\n        invMassi = bi.invMassSolve,\n        invMassj = bj.invMassSolve,\n        invIi = bi.invInertiaSolve,\n        invIj = bj.invInertiaSolve,\n        Mdiag = addToWlambda_Mdiag,\n        G = this.G;\n\n    Gi[0] = G[0];\n    Gi[1] = G[1];\n    Gj[0] = G[3];\n    Gj[1] = G[4];\n\n    // Add to linear velocity\n    // v_lambda += inv(M) * delta_lamba * G\n    vec2.scale(temp, Gi, invMassi*deltalambda);\n    vec2.multiply(temp, temp, bi.massMultiplier);\n    vec2.add( bi.vlambda, bi.vlambda, temp);\n    // This impulse is in the offset frame\n    // Also add contribution to angular\n    //bi.wlambda -= vec2.crossLength(temp,ri);\n    bi.wlambda += invIi * G[2] * deltalambda;\n\n\n    vec2.scale(temp, Gj, invMassj*deltalambda);\n    vec2.multiply(temp, temp, bj.massMultiplier);\n    vec2.add( bj.vlambda, bj.vlambda, temp);\n    //bj.wlambda -= vec2.crossLength(temp,rj);\n    bj.wlambda += invIj * G[5] * deltalambda;\n};\n\n/**\n * Compute the denominator part of the SPOOK equation: C = G\\*inv(M)\\*G' + eps\n * @method computeInvC\n * @param  {Number} eps\n * @return {Number}\n */\nEquation.prototype.computeInvC = function(eps){\n    return 1.0 / (this.computeGiMGt() + eps);\n};\n\n},{\"../math/vec2\":30,\"../objects/Body\":31,\"../utils/Utils\":57}],23:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2')\n,   Equation = _dereq_('./Equation')\n,   Utils = _dereq_('../utils/Utils');\n\nmodule.exports = FrictionEquation;\n\n/**\n * Constrains the slipping in a contact along a tangent\n *\n * @class FrictionEquation\n * @constructor\n * @param {Body} bodyA\n * @param {Body} bodyB\n * @param {Number} slipForce\n * @extends Equation\n */\nfunction FrictionEquation(bodyA, bodyB, slipForce){\n    Equation.call(this, bodyA, bodyB, -slipForce, slipForce);\n\n    /**\n     * Relative vector from center of body A to the contact point, world oriented.\n     * @property contactPointA\n     * @type {Array}\n     */\n    this.contactPointA = vec2.create();\n\n    /**\n     * Relative vector from center of body B to the contact point, world oriented.\n     * @property contactPointB\n     * @type {Array}\n     */\n    this.contactPointB = vec2.create();\n\n    /**\n     * Tangent vector that the friction force will act along. World oriented.\n     * @property t\n     * @type {Array}\n     */\n    this.t = vec2.create();\n\n    /**\n     * ContactEquations connected to this friction equation. The contact equations can be used to rescale the max force for the friction. If more than one contact equation is given, then the max force can be set to the average.\n     * @property contactEquations\n     * @type {ContactEquation}\n     */\n    this.contactEquations = [];\n\n    /**\n     * The shape in body i that triggered this friction.\n     * @property shapeA\n     * @type {Shape}\n     * @todo Needed? The shape can be looked up via contactEquation.shapeA...\n     */\n    this.shapeA = null;\n\n    /**\n     * The shape in body j that triggered this friction.\n     * @property shapeB\n     * @type {Shape}\n     * @todo Needed? The shape can be looked up via contactEquation.shapeB...\n     */\n    this.shapeB = null;\n\n    /**\n     * The friction coefficient to use.\n     * @property frictionCoefficient\n     * @type {Number}\n     */\n    this.frictionCoefficient = 0.3;\n}\nFrictionEquation.prototype = new Equation();\nFrictionEquation.prototype.constructor = FrictionEquation;\n\n/**\n * Set the slipping condition for the constraint. The friction force cannot be\n * larger than this value.\n * @method setSlipForce\n * @param  {Number} slipForce\n */\nFrictionEquation.prototype.setSlipForce = function(slipForce){\n    this.maxForce = slipForce;\n    this.minForce = -slipForce;\n};\n\n/**\n * Get the max force for the constraint.\n * @method getSlipForce\n * @return {Number}\n */\nFrictionEquation.prototype.getSlipForce = function(){\n    return this.maxForce;\n};\n\nFrictionEquation.prototype.computeB = function(a,b,h){\n    var bi = this.bodyA,\n        bj = this.bodyB,\n        ri = this.contactPointA,\n        rj = this.contactPointB,\n        t = this.t,\n        G = this.G;\n\n    // G = [-t -rixt t rjxt]\n    // And remember, this is a pure velocity constraint, g is always zero!\n    G[0] = -t[0];\n    G[1] = -t[1];\n    G[2] = -vec2.crossLength(ri,t);\n    G[3] = t[0];\n    G[4] = t[1];\n    G[5] = vec2.crossLength(rj,t);\n\n    var GW = this.computeGW(),\n        GiMf = this.computeGiMf();\n\n    var B = /* - g * a  */ - GW * b - h*GiMf;\n\n    return B;\n};\n\n},{\"../math/vec2\":30,\"../utils/Utils\":57,\"./Equation\":22}],24:[function(_dereq_,module,exports){\nvar Equation = _dereq_(\"./Equation\"),\n    vec2 = _dereq_('../math/vec2');\n\nmodule.exports = RotationalLockEquation;\n\n/**\n * Locks the relative angle between two bodies. The constraint tries to keep the dot product between two vectors, local in each body, to zero. The local angle in body i is a parameter.\n *\n * @class RotationalLockEquation\n * @constructor\n * @extends Equation\n * @param {Body} bodyA\n * @param {Body} bodyB\n * @param {Object} [options]\n * @param {Number} [options.angle] Angle to add to the local vector in bodyA.\n */\nfunction RotationalLockEquation(bodyA, bodyB, options){\n    options = options || {};\n    Equation.call(this, bodyA, bodyB, -Number.MAX_VALUE, Number.MAX_VALUE);\n\n    /**\n     * @property {number} angle\n     */\n    this.angle = options.angle || 0;\n\n    var G = this.G;\n    G[2] =  1;\n    G[5] = -1;\n}\nRotationalLockEquation.prototype = new Equation();\nRotationalLockEquation.prototype.constructor = RotationalLockEquation;\n\nvar worldVectorA = vec2.create(),\n    worldVectorB = vec2.create(),\n    xAxis = vec2.fromValues(1,0),\n    yAxis = vec2.fromValues(0,1);\nRotationalLockEquation.prototype.computeGq = function(){\n    vec2.rotate(worldVectorA,xAxis,this.bodyA.angle+this.angle);\n    vec2.rotate(worldVectorB,yAxis,this.bodyB.angle);\n    return vec2.dot(worldVectorA,worldVectorB);\n};\n\n},{\"../math/vec2\":30,\"./Equation\":22}],25:[function(_dereq_,module,exports){\nvar Equation = _dereq_(\"./Equation\"),\n    vec2 = _dereq_('../math/vec2');\n\nmodule.exports = RotationalVelocityEquation;\n\n/**\n * Syncs rotational velocity of two bodies, or sets a relative velocity (motor).\n *\n * @class RotationalVelocityEquation\n * @constructor\n * @extends Equation\n * @param {Body} bodyA\n * @param {Body} bodyB\n */\nfunction RotationalVelocityEquation(bodyA, bodyB){\n    Equation.call(this, bodyA, bodyB, -Number.MAX_VALUE, Number.MAX_VALUE);\n    this.relativeVelocity = 1;\n    this.ratio = 1;\n}\nRotationalVelocityEquation.prototype = new Equation();\nRotationalVelocityEquation.prototype.constructor = RotationalVelocityEquation;\nRotationalVelocityEquation.prototype.computeB = function(a,b,h){\n    var G = this.G;\n    G[2] = -1;\n    G[5] = this.ratio;\n\n    var GiMf = this.computeGiMf();\n    var GW = this.computeGW();\n    var B = - GW * b - h*GiMf;\n\n    return B;\n};\n\n},{\"../math/vec2\":30,\"./Equation\":22}],26:[function(_dereq_,module,exports){\n/**\n * Base class for objects that dispatches events.\n * @class EventEmitter\n * @constructor\n */\nvar EventEmitter = function () {};\n\nmodule.exports = EventEmitter;\n\nEventEmitter.prototype = {\n    constructor: EventEmitter,\n\n    /**\n     * Add an event listener\n     * @method on\n     * @param  {String} type\n     * @param  {Function} listener\n     * @return {EventEmitter} The self object, for chainability.\n     */\n    on: function ( type, listener, context ) {\n        listener.context = context || this;\n        if ( this._listeners === undefined ){\n            this._listeners = {};\n        }\n        var listeners = this._listeners;\n        if ( listeners[ type ] === undefined ) {\n            listeners[ type ] = [];\n        }\n        if ( listeners[ type ].indexOf( listener ) === - 1 ) {\n            listeners[ type ].push( listener );\n        }\n        return this;\n    },\n\n    /**\n     * Check if an event listener is added\n     * @method has\n     * @param  {String} type\n     * @param  {Function} listener\n     * @return {Boolean}\n     */\n    has: function ( type, listener ) {\n        if ( this._listeners === undefined ){\n            return false;\n        }\n        var listeners = this._listeners;\n        if(listener){\n            if ( listeners[ type ] !== undefined && listeners[ type ].indexOf( listener ) !== - 1 ) {\n                return true;\n            }\n        } else {\n            if ( listeners[ type ] !== undefined ) {\n                return true;\n            }\n        }\n\n        return false;\n    },\n\n    /**\n     * Remove an event listener\n     * @method off\n     * @param  {String} type\n     * @param  {Function} listener\n     * @return {EventEmitter} The self object, for chainability.\n     */\n    off: function ( type, listener ) {\n        if ( this._listeners === undefined ){\n            return this;\n        }\n        var listeners = this._listeners;\n        var index = listeners[ type ].indexOf( listener );\n        if ( index !== - 1 ) {\n            listeners[ type ].splice( index, 1 );\n        }\n        return this;\n    },\n\n    /**\n     * Emit an event.\n     * @method emit\n     * @param  {Object} event\n     * @param  {String} event.type\n     * @return {EventEmitter} The self object, for chainability.\n     */\n    emit: function ( event ) {\n        if ( this._listeners === undefined ){\n            return this;\n        }\n        var listeners = this._listeners;\n        var listenerArray = listeners[ event.type ];\n        if ( listenerArray !== undefined ) {\n            event.target = this;\n            for ( var i = 0, l = listenerArray.length; i < l; i ++ ) {\n                var listener = listenerArray[ i ];\n                listener.call( listener.context, event );\n            }\n        }\n        return this;\n    }\n};\n\n},{}],27:[function(_dereq_,module,exports){\nvar Material = _dereq_('./Material');\nvar Equation = _dereq_('../equations/Equation');\n\nmodule.exports = ContactMaterial;\n\n/**\n * Defines what happens when two materials meet, such as what friction coefficient to use. You can also set other things such as restitution, surface velocity and constraint parameters.\n * @class ContactMaterial\n * @constructor\n * @param {Material} materialA\n * @param {Material} materialB\n * @param {Object}   [options]\n * @param {Number}   [options.friction=0.3]       Friction coefficient.\n * @param {Number}   [options.restitution=0]      Restitution coefficient aka \"bounciness\".\n * @param {Number}   [options.stiffness]          ContactEquation stiffness.\n * @param {Number}   [options.relaxation]         ContactEquation relaxation.\n * @param {Number}   [options.frictionStiffness]  FrictionEquation stiffness.\n * @param {Number}   [options.frictionRelaxation] FrictionEquation relaxation.\n * @param {Number}   [options.surfaceVelocity=0]  Surface velocity.\n * @author schteppe\n */\nfunction ContactMaterial(materialA, materialB, options){\n    options = options || {};\n\n    if(!(materialA instanceof Material) || !(materialB instanceof Material)){\n        throw new Error(\"First two arguments must be Material instances.\");\n    }\n\n    /**\n     * The contact material identifier\n     * @property id\n     * @type {Number}\n     */\n    this.id = ContactMaterial.idCounter++;\n\n    /**\n     * First material participating in the contact material\n     * @property materialA\n     * @type {Material}\n     */\n    this.materialA = materialA;\n\n    /**\n     * Second material participating in the contact material\n     * @property materialB\n     * @type {Material}\n     */\n    this.materialB = materialB;\n\n    /**\n     * Friction to use in the contact of these two materials\n     * @property friction\n     * @type {Number}\n     */\n    this.friction    =  typeof(options.friction)    !== \"undefined\" ?   Number(options.friction)    : 0.3;\n\n    /**\n     * Restitution to use in the contact of these two materials\n     * @property restitution\n     * @type {Number}\n     */\n    this.restitution =  typeof(options.restitution) !== \"undefined\" ?   Number(options.restitution) : 0.0;\n\n    /**\n     * Stiffness of the resulting ContactEquation that this ContactMaterial generate\n     * @property stiffness\n     * @type {Number}\n     */\n    this.stiffness =            typeof(options.stiffness)           !== \"undefined\" ?   Number(options.stiffness)   : Equation.DEFAULT_STIFFNESS;\n\n    /**\n     * Relaxation of the resulting ContactEquation that this ContactMaterial generate\n     * @property relaxation\n     * @type {Number}\n     */\n    this.relaxation =           typeof(options.relaxation)          !== \"undefined\" ?   Number(options.relaxation)  : Equation.DEFAULT_RELAXATION;\n\n    /**\n     * Stiffness of the resulting FrictionEquation that this ContactMaterial generate\n     * @property frictionStiffness\n     * @type {Number}\n     */\n    this.frictionStiffness =    typeof(options.frictionStiffness)   !== \"undefined\" ?   Number(options.frictionStiffness)   : Equation.DEFAULT_STIFFNESS;\n\n    /**\n     * Relaxation of the resulting FrictionEquation that this ContactMaterial generate\n     * @property frictionRelaxation\n     * @type {Number}\n     */\n    this.frictionRelaxation =   typeof(options.frictionRelaxation)  !== \"undefined\" ?   Number(options.frictionRelaxation)  : Equation.DEFAULT_RELAXATION;\n\n    /**\n     * Will add surface velocity to this material. If bodyA rests on top if bodyB, and the surface velocity is positive, bodyA will slide to the right.\n     * @property {Number} surfaceVelocity\n     */\n    this.surfaceVelocity = typeof(options.surfaceVelocity)    !== \"undefined\" ?   Number(options.surfaceVelocity)    : 0;\n\n    /**\n     * Offset to be set on ContactEquations. A positive value will make the bodies penetrate more into each other. Can be useful in scenes where contacts need to be more persistent, for example when stacking. Aka \"cure for nervous contacts\".\n     * @property contactSkinSize\n     * @type {Number}\n     */\n    this.contactSkinSize = 0.005;\n}\n\nContactMaterial.idCounter = 0;\n\n},{\"../equations/Equation\":22,\"./Material\":28}],28:[function(_dereq_,module,exports){\nmodule.exports = Material;\n\n/**\n * Defines a physics material.\n * @class Material\n * @constructor\n * @param {number} id Material identifier\n * @author schteppe\n */\nfunction Material(id){\n    /**\n     * The material identifier\n     * @property id\n     * @type {Number}\n     */\n    this.id = id || Material.idCounter++;\n}\n\nMaterial.idCounter = 0;\n\n},{}],29:[function(_dereq_,module,exports){\n\n    /*\n        PolyK library\n        url: http://polyk.ivank.net\n        Released under MIT licence.\n\n        Copyright (c) 2012 Ivan Kuckir\n\n        Permission is hereby granted, free of charge, to any person\n        obtaining a copy of this software and associated documentation\n        files (the \"Software\"), to deal in the Software without\n        restriction, including without limitation the rights to use,\n        copy, modify, merge, publish, distribute, sublicense, and/or sell\n        copies of the Software, and to permit persons to whom the\n        Software is furnished to do so, subject to the following\n        conditions:\n\n        The above copyright notice and this permission notice shall be\n        included in all copies or substantial portions of the Software.\n\n        THE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND,\n        EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES\n        OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND\n        NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT\n        HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,\n        WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING\n        FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR\n        OTHER DEALINGS IN THE SOFTWARE.\n    */\n\n    var PolyK = {};\n\n    /*\n        Is Polygon self-intersecting?\n\n        O(n^2)\n    */\n    /*\n    PolyK.IsSimple = function(p)\n    {\n        var n = p.length>>1;\n        if(n<4) return true;\n        var a1 = new PolyK._P(), a2 = new PolyK._P();\n        var b1 = new PolyK._P(), b2 = new PolyK._P();\n        var c = new PolyK._P();\n\n        for(var i=0; i<n; i++)\n        {\n            a1.x = p[2*i  ];\n            a1.y = p[2*i+1];\n            if(i==n-1)  { a2.x = p[0    ];  a2.y = p[1    ]; }\n            else        { a2.x = p[2*i+2];  a2.y = p[2*i+3]; }\n\n            for(var j=0; j<n; j++)\n            {\n                if(Math.abs(i-j) < 2) continue;\n                if(j==n-1 && i==0) continue;\n                if(i==n-1 && j==0) continue;\n\n                b1.x = p[2*j  ];\n                b1.y = p[2*j+1];\n                if(j==n-1)  { b2.x = p[0    ];  b2.y = p[1    ]; }\n                else        { b2.x = p[2*j+2];  b2.y = p[2*j+3]; }\n\n                if(PolyK._GetLineIntersection(a1,a2,b1,b2,c) != null) return false;\n            }\n        }\n        return true;\n    }\n\n    PolyK.IsConvex = function(p)\n    {\n        if(p.length<6) return true;\n        var l = p.length - 4;\n        for(var i=0; i<l; i+=2)\n            if(!PolyK._convex(p[i], p[i+1], p[i+2], p[i+3], p[i+4], p[i+5])) return false;\n        if(!PolyK._convex(p[l  ], p[l+1], p[l+2], p[l+3], p[0], p[1])) return false;\n        if(!PolyK._convex(p[l+2], p[l+3], p[0  ], p[1  ], p[2], p[3])) return false;\n        return true;\n    }\n    */\n    PolyK.GetArea = function(p)\n    {\n        if(p.length <6) return 0;\n        var l = p.length - 2;\n        var sum = 0;\n        for(var i=0; i<l; i+=2)\n            sum += (p[i+2]-p[i]) * (p[i+1]+p[i+3]);\n        sum += (p[0]-p[l]) * (p[l+1]+p[1]);\n        return - sum * 0.5;\n    }\n    /*\n    PolyK.GetAABB = function(p)\n    {\n        var minx = Infinity;\n        var miny = Infinity;\n        var maxx = -minx;\n        var maxy = -miny;\n        for(var i=0; i<p.length; i+=2)\n        {\n            minx = Math.min(minx, p[i  ]);\n            maxx = Math.max(maxx, p[i  ]);\n            miny = Math.min(miny, p[i+1]);\n            maxy = Math.max(maxy, p[i+1]);\n        }\n        return {x:minx, y:miny, width:maxx-minx, height:maxy-miny};\n    }\n    */\n\n    PolyK.Triangulate = function(p)\n    {\n        var n = p.length>>1;\n        if(n<3) return [];\n        var tgs = [];\n        var avl = [];\n        for(var i=0; i<n; i++) avl.push(i);\n\n        var i = 0;\n        var al = n;\n        while(al > 3)\n        {\n            var i0 = avl[(i+0)%al];\n            var i1 = avl[(i+1)%al];\n            var i2 = avl[(i+2)%al];\n\n            var ax = p[2*i0],  ay = p[2*i0+1];\n            var bx = p[2*i1],  by = p[2*i1+1];\n            var cx = p[2*i2],  cy = p[2*i2+1];\n\n            var earFound = false;\n            if(PolyK._convex(ax, ay, bx, by, cx, cy))\n            {\n                earFound = true;\n                for(var j=0; j<al; j++)\n                {\n                    var vi = avl[j];\n                    if(vi==i0 || vi==i1 || vi==i2) continue;\n                    if(PolyK._PointInTriangle(p[2*vi], p[2*vi+1], ax, ay, bx, by, cx, cy)) {earFound = false; break;}\n                }\n            }\n            if(earFound)\n            {\n                tgs.push(i0, i1, i2);\n                avl.splice((i+1)%al, 1);\n                al--;\n                i= 0;\n            }\n            else if(i++ > 3*al) break;      // no convex angles :(\n        }\n        tgs.push(avl[0], avl[1], avl[2]);\n        return tgs;\n    }\n    /*\n    PolyK.ContainsPoint = function(p, px, py)\n    {\n        var n = p.length>>1;\n        var ax, ay, bx = p[2*n-2]-px, by = p[2*n-1]-py;\n        var depth = 0;\n        for(var i=0; i<n; i++)\n        {\n            ax = bx;  ay = by;\n            bx = p[2*i  ] - px;\n            by = p[2*i+1] - py;\n            if(ay< 0 && by< 0) continue;    // both \"up\" or both \"donw\"\n            if(ay>=0 && by>=0) continue;    // both \"up\" or both \"donw\"\n            if(ax< 0 && bx< 0) continue;\n\n            var lx = ax + (bx-ax)*(-ay)/(by-ay);\n            if(lx>0) depth++;\n        }\n        return (depth & 1) == 1;\n    }\n\n    PolyK.Slice = function(p, ax, ay, bx, by)\n    {\n        if(PolyK.ContainsPoint(p, ax, ay) || PolyK.ContainsPoint(p, bx, by)) return [p.slice(0)];\n\n        var a = new PolyK._P(ax, ay);\n        var b = new PolyK._P(bx, by);\n        var iscs = [];  // intersections\n        var ps = [];    // points\n        for(var i=0; i<p.length; i+=2) ps.push(new PolyK._P(p[i], p[i+1]));\n\n        for(var i=0; i<ps.length; i++)\n        {\n            var isc = new PolyK._P(0,0);\n            isc = PolyK._GetLineIntersection(a, b, ps[i], ps[(i+1)%ps.length], isc);\n\n            if(isc)\n            {\n                isc.flag = true;\n                iscs.push(isc);\n                ps.splice(i+1,0,isc);\n                i++;\n            }\n        }\n        if(iscs.length == 0) return [p.slice(0)];\n        var comp = function(u,v) {return PolyK._P.dist(a,u) - PolyK._P.dist(a,v); }\n        iscs.sort(comp);\n\n        var pgs = [];\n        var dir = 0;\n        while(iscs.length > 0)\n        {\n            var n = ps.length;\n            var i0 = iscs[0];\n            var i1 = iscs[1];\n            var ind0 = ps.indexOf(i0);\n            var ind1 = ps.indexOf(i1);\n            var solved = false;\n\n            if(PolyK._firstWithFlag(ps, ind0) == ind1) solved = true;\n            else\n            {\n                i0 = iscs[1];\n                i1 = iscs[0];\n                ind0 = ps.indexOf(i0);\n                ind1 = ps.indexOf(i1);\n                if(PolyK._firstWithFlag(ps, ind0) == ind1) solved = true;\n            }\n            if(solved)\n            {\n                dir--;\n                var pgn = PolyK._getPoints(ps, ind0, ind1);\n                pgs.push(pgn);\n                ps = PolyK._getPoints(ps, ind1, ind0);\n                i0.flag = i1.flag = false;\n                iscs.splice(0,2);\n                if(iscs.length == 0) pgs.push(ps);\n            }\n            else { dir++; iscs.reverse(); }\n            if(dir>1) break;\n        }\n        var result = [];\n        for(var i=0; i<pgs.length; i++)\n        {\n            var pg = pgs[i];\n            var npg = [];\n            for(var j=0; j<pg.length; j++) npg.push(pg[j].x, pg[j].y);\n            result.push(npg);\n        }\n        return result;\n    }\n\n    PolyK.Raycast = function(p, x, y, dx, dy, isc)\n    {\n        var l = p.length - 2;\n        var tp = PolyK._tp;\n        var a1 = tp[0], a2 = tp[1],\n        b1 = tp[2], b2 = tp[3], c = tp[4];\n        a1.x = x; a1.y = y;\n        a2.x = x+dx; a2.y = y+dy;\n\n        if(isc==null) isc = {dist:0, edge:0, norm:{x:0, y:0}, refl:{x:0, y:0}};\n        isc.dist = Infinity;\n\n        for(var i=0; i<l; i+=2)\n        {\n            b1.x = p[i  ];  b1.y = p[i+1];\n            b2.x = p[i+2];  b2.y = p[i+3];\n            var nisc = PolyK._RayLineIntersection(a1, a2, b1, b2, c);\n            if(nisc) PolyK._updateISC(dx, dy, a1, b1, b2, c, i/2, isc);\n        }\n        b1.x = b2.x;  b1.y = b2.y;\n        b2.x = p[0];  b2.y = p[1];\n        var nisc = PolyK._RayLineIntersection(a1, a2, b1, b2, c);\n        if(nisc) PolyK._updateISC(dx, dy, a1, b1, b2, c, p.length/2, isc);\n\n        return (isc.dist != Infinity) ? isc : null;\n    }\n\n    PolyK.ClosestEdge = function(p, x, y, isc)\n    {\n        var l = p.length - 2;\n        var tp = PolyK._tp;\n        var a1 = tp[0],\n        b1 = tp[2], b2 = tp[3], c = tp[4];\n        a1.x = x; a1.y = y;\n\n        if(isc==null) isc = {dist:0, edge:0, point:{x:0, y:0}, norm:{x:0, y:0}};\n        isc.dist = Infinity;\n\n        for(var i=0; i<l; i+=2)\n        {\n            b1.x = p[i  ];  b1.y = p[i+1];\n            b2.x = p[i+2];  b2.y = p[i+3];\n            PolyK._pointLineDist(a1, b1, b2, i>>1, isc);\n        }\n        b1.x = b2.x;  b1.y = b2.y;\n        b2.x = p[0];  b2.y = p[1];\n        PolyK._pointLineDist(a1, b1, b2, l>>1, isc);\n\n        var idst = 1/isc.dist;\n        isc.norm.x = (x-isc.point.x)*idst;\n        isc.norm.y = (y-isc.point.y)*idst;\n        return isc;\n    }\n\n    PolyK._pointLineDist = function(p, a, b, edge, isc)\n    {\n        var x = p.x, y = p.y, x1 = a.x, y1 = a.y, x2 = b.x, y2 = b.y;\n\n        var A = x - x1;\n        var B = y - y1;\n        var C = x2 - x1;\n        var D = y2 - y1;\n\n        var dot = A * C + B * D;\n        var len_sq = C * C + D * D;\n        var param = dot / len_sq;\n\n        var xx, yy;\n\n        if (param < 0 || (x1 == x2 && y1 == y2)) {\n            xx = x1;\n            yy = y1;\n        }\n        else if (param > 1) {\n            xx = x2;\n            yy = y2;\n        }\n        else {\n            xx = x1 + param * C;\n            yy = y1 + param * D;\n        }\n\n        var dx = x - xx;\n        var dy = y - yy;\n        var dst = Math.sqrt(dx * dx + dy * dy);\n        if(dst<isc.dist)\n        {\n            isc.dist = dst;\n            isc.edge = edge;\n            isc.point.x = xx;\n            isc.point.y = yy;\n        }\n    }\n\n    PolyK._updateISC = function(dx, dy, a1, b1, b2, c, edge, isc)\n    {\n        var nrl = PolyK._P.dist(a1, c);\n        if(nrl<isc.dist)\n        {\n            var ibl = 1/PolyK._P.dist(b1, b2);\n            var nx = -(b2.y-b1.y)*ibl;\n            var ny =  (b2.x-b1.x)*ibl;\n            var ddot = 2*(dx*nx+dy*ny);\n            isc.dist = nrl;\n            isc.norm.x = nx;\n            isc.norm.y = ny;\n            isc.refl.x = -ddot*nx+dx;\n            isc.refl.y = -ddot*ny+dy;\n            isc.edge = edge;\n        }\n    }\n\n    PolyK._getPoints = function(ps, ind0, ind1)\n    {\n        var n = ps.length;\n        var nps = [];\n        if(ind1<ind0) ind1 += n;\n        for(var i=ind0; i<= ind1; i++) nps.push(ps[i%n]);\n        return nps;\n    }\n\n    PolyK._firstWithFlag = function(ps, ind)\n    {\n        var n = ps.length;\n        while(true)\n        {\n            ind = (ind+1)%n;\n            if(ps[ind].flag) return ind;\n        }\n    }\n    */\n    PolyK._PointInTriangle = function(px, py, ax, ay, bx, by, cx, cy)\n    {\n        var v0x = cx-ax;\n        var v0y = cy-ay;\n        var v1x = bx-ax;\n        var v1y = by-ay;\n        var v2x = px-ax;\n        var v2y = py-ay;\n\n        var dot00 = v0x*v0x+v0y*v0y;\n        var dot01 = v0x*v1x+v0y*v1y;\n        var dot02 = v0x*v2x+v0y*v2y;\n        var dot11 = v1x*v1x+v1y*v1y;\n        var dot12 = v1x*v2x+v1y*v2y;\n\n        var invDenom = 1 / (dot00 * dot11 - dot01 * dot01);\n        var u = (dot11 * dot02 - dot01 * dot12) * invDenom;\n        var v = (dot00 * dot12 - dot01 * dot02) * invDenom;\n\n        // Check if point is in triangle\n        return (u >= 0) && (v >= 0) && (u + v < 1);\n    }\n    /*\n    PolyK._RayLineIntersection = function(a1, a2, b1, b2, c)\n    {\n        var dax = (a1.x-a2.x), dbx = (b1.x-b2.x);\n        var day = (a1.y-a2.y), dby = (b1.y-b2.y);\n\n        var Den = dax*dby - day*dbx;\n        if (Den == 0) return null;  // parallel\n\n        var A = (a1.x * a2.y - a1.y * a2.x);\n        var B = (b1.x * b2.y - b1.y * b2.x);\n\n        var I = c;\n        var iDen = 1/Den;\n        I.x = ( A*dbx - dax*B ) * iDen;\n        I.y = ( A*dby - day*B ) * iDen;\n\n        if(!PolyK._InRect(I, b1, b2)) return null;\n        if((day>0 && I.y>a1.y) || (day<0 && I.y<a1.y)) return null;\n        if((dax>0 && I.x>a1.x) || (dax<0 && I.x<a1.x)) return null;\n        return I;\n    }\n\n    PolyK._GetLineIntersection = function(a1, a2, b1, b2, c)\n    {\n        var dax = (a1.x-a2.x), dbx = (b1.x-b2.x);\n        var day = (a1.y-a2.y), dby = (b1.y-b2.y);\n\n        var Den = dax*dby - day*dbx;\n        if (Den == 0) return null;  // parallel\n\n        var A = (a1.x * a2.y - a1.y * a2.x);\n        var B = (b1.x * b2.y - b1.y * b2.x);\n\n        var I = c;\n        I.x = ( A*dbx - dax*B ) / Den;\n        I.y = ( A*dby - day*B ) / Den;\n\n        if(PolyK._InRect(I, a1, a2) && PolyK._InRect(I, b1, b2)) return I;\n        return null;\n    }\n\n    PolyK._InRect = function(a, b, c)\n    {\n        if  (b.x == c.x) return (a.y>=Math.min(b.y, c.y) && a.y<=Math.max(b.y, c.y));\n        if  (b.y == c.y) return (a.x>=Math.min(b.x, c.x) && a.x<=Math.max(b.x, c.x));\n\n        if(a.x >= Math.min(b.x, c.x) && a.x <= Math.max(b.x, c.x)\n        && a.y >= Math.min(b.y, c.y) && a.y <= Math.max(b.y, c.y))\n        return true;\n        return false;\n    }\n    */\n    PolyK._convex = function(ax, ay, bx, by, cx, cy)\n    {\n        return (ay-by)*(cx-bx) + (bx-ax)*(cy-by) >= 0;\n    }\n    /*\n    PolyK._P = function(x,y)\n    {\n        this.x = x;\n        this.y = y;\n        this.flag = false;\n    }\n    PolyK._P.prototype.toString = function()\n    {\n        return \"Point [\"+this.x+\", \"+this.y+\"]\";\n    }\n    PolyK._P.dist = function(a,b)\n    {\n        var dx = b.x-a.x;\n        var dy = b.y-a.y;\n        return Math.sqrt(dx*dx + dy*dy);\n    }\n\n    PolyK._tp = [];\n    for(var i=0; i<10; i++) PolyK._tp.push(new PolyK._P(0,0));\n        */\n\nmodule.exports = PolyK;\n\n},{}],30:[function(_dereq_,module,exports){\n/* Copyright (c) 2013, Brandon Jones, Colin MacKenzie IV. All rights reserved.\n\nRedistribution and use in source and binary forms, with or without modification,\nare permitted provided that the following conditions are met:\n\n  * Redistributions of source code must retain the above copyright notice, this\n    list of conditions and the following disclaimer.\n  * Redistributions in binary form must reproduce the above copyright notice,\n    this list of conditions and the following disclaimer in the documentation\n    and/or other materials provided with the distribution.\n\nTHIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS \"AS IS\" AND\nANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED\nWARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE\nDISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR\nANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES\n(INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES;\nLOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON\nANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT\n(INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS\nSOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE. */\n\n/**\n * The vec2 object from glMatrix, with some extensions and some removed methods. See http://glmatrix.net.\n * @class vec2\n */\n\nvar vec2 = module.exports = {};\n\nvar Utils = _dereq_('../utils/Utils');\n\n/**\n * Make a cross product and only return the z component\n * @method crossLength\n * @static\n * @param  {Array} a\n * @param  {Array} b\n * @return {Number}\n */\nvec2.crossLength = function(a,b){\n    return a[0] * b[1] - a[1] * b[0];\n};\n\n/**\n * Cross product between a vector and the Z component of a vector\n * @method crossVZ\n * @static\n * @param  {Array} out\n * @param  {Array} vec\n * @param  {Number} zcomp\n * @return {Number}\n */\nvec2.crossVZ = function(out, vec, zcomp){\n    vec2.rotate(out,vec,-Math.PI/2);// Rotate according to the right hand rule\n    vec2.scale(out,out,zcomp);      // Scale with z\n    return out;\n};\n\n/**\n * Cross product between a vector and the Z component of a vector\n * @method crossZV\n * @static\n * @param  {Array} out\n * @param  {Number} zcomp\n * @param  {Array} vec\n * @return {Number}\n */\nvec2.crossZV = function(out, zcomp, vec){\n    vec2.rotate(out,vec,Math.PI/2); // Rotate according to the right hand rule\n    vec2.scale(out,out,zcomp);      // Scale with z\n    return out;\n};\n\n/**\n * Rotate a vector by an angle\n * @method rotate\n * @static\n * @param  {Array} out\n * @param  {Array} a\n * @param  {Number} angle\n */\nvec2.rotate = function(out,a,angle){\n    if(angle !== 0){\n        var c = Math.cos(angle),\n            s = Math.sin(angle),\n            x = a[0],\n            y = a[1];\n        out[0] = c*x -s*y;\n        out[1] = s*x +c*y;\n    } else {\n        out[0] = a[0];\n        out[1] = a[1];\n    }\n};\n\n/**\n * Rotate a vector 90 degrees clockwise\n * @method rotate90cw\n * @static\n * @param  {Array} out\n * @param  {Array} a\n * @param  {Number} angle\n */\nvec2.rotate90cw = function(out, a) {\n    var x = a[0];\n    var y = a[1];\n    out[0] = y;\n    out[1] = -x;\n};\n\n/**\n * Transform a point position to local frame.\n * @method toLocalFrame\n * @param  {Array} out\n * @param  {Array} worldPoint\n * @param  {Array} framePosition\n * @param  {Number} frameAngle\n */\nvec2.toLocalFrame = function(out, worldPoint, framePosition, frameAngle){\n    vec2.copy(out, worldPoint);\n    vec2.sub(out, out, framePosition);\n    vec2.rotate(out, out, -frameAngle);\n};\n\n/**\n * Transform a point position to global frame.\n * @method toGlobalFrame\n * @param  {Array} out\n * @param  {Array} localPoint\n * @param  {Array} framePosition\n * @param  {Number} frameAngle\n */\nvec2.toGlobalFrame = function(out, localPoint, framePosition, frameAngle){\n    vec2.copy(out, localPoint);\n    vec2.rotate(out, out, frameAngle);\n    vec2.add(out, out, framePosition);\n};\n\n/**\n * Transform a vector to local frame.\n * @method vectorToLocalFrame\n * @param  {Array} out\n * @param  {Array} worldVector\n * @param  {Number} frameAngle\n */\nvec2.vectorToLocalFrame = function(out, worldVector, frameAngle){\n    vec2.rotate(out, worldVector, -frameAngle);\n};\n\n/**\n * Transform a point position to global frame.\n * @method toGlobalFrame\n * @param  {Array} out\n * @param  {Array} localVector\n * @param  {Number} frameAngle\n */\nvec2.vectorToGlobalFrame = function(out, localVector, frameAngle){\n    vec2.rotate(out, localVector, frameAngle);\n};\n\n/**\n * Compute centroid of a triangle spanned by vectors a,b,c. See http://easycalculation.com/analytical/learn-centroid.php\n * @method centroid\n * @static\n * @param  {Array} out\n * @param  {Array} a\n * @param  {Array} b\n * @param  {Array} c\n * @return  {Array} The out object\n */\nvec2.centroid = function(out, a, b, c){\n    vec2.add(out, a, b);\n    vec2.add(out, out, c);\n    vec2.scale(out, out, 1/3);\n    return out;\n};\n\n/**\n * Creates a new, empty vec2\n * @static\n * @method create\n * @return {Array} a new 2D vector\n */\nvec2.create = function() {\n    var out = new Utils.ARRAY_TYPE(2);\n    out[0] = 0;\n    out[1] = 0;\n    return out;\n};\n\n/**\n * Creates a new vec2 initialized with values from an existing vector\n * @static\n * @method clone\n * @param {Array} a vector to clone\n * @return {Array} a new 2D vector\n */\nvec2.clone = function(a) {\n    var out = new Utils.ARRAY_TYPE(2);\n    out[0] = a[0];\n    out[1] = a[1];\n    return out;\n};\n\n/**\n * Creates a new vec2 initialized with the given values\n * @static\n * @method fromValues\n * @param {Number} x X component\n * @param {Number} y Y component\n * @return {Array} a new 2D vector\n */\nvec2.fromValues = function(x, y) {\n    var out = new Utils.ARRAY_TYPE(2);\n    out[0] = x;\n    out[1] = y;\n    return out;\n};\n\n/**\n * Copy the values from one vec2 to another\n * @static\n * @method copy\n * @param {Array} out the receiving vector\n * @param {Array} a the source vector\n * @return {Array} out\n */\nvec2.copy = function(out, a) {\n    out[0] = a[0];\n    out[1] = a[1];\n    return out;\n};\n\n/**\n * Set the components of a vec2 to the given values\n * @static\n * @method set\n * @param {Array} out the receiving vector\n * @param {Number} x X component\n * @param {Number} y Y component\n * @return {Array} out\n */\nvec2.set = function(out, x, y) {\n    out[0] = x;\n    out[1] = y;\n    return out;\n};\n\n/**\n * Adds two vec2's\n * @static\n * @method add\n * @param {Array} out the receiving vector\n * @param {Array} a the first operand\n * @param {Array} b the second operand\n * @return {Array} out\n */\nvec2.add = function(out, a, b) {\n    out[0] = a[0] + b[0];\n    out[1] = a[1] + b[1];\n    return out;\n};\n\n/**\n * Subtracts two vec2's\n * @static\n * @method subtract\n * @param {Array} out the receiving vector\n * @param {Array} a the first operand\n * @param {Array} b the second operand\n * @return {Array} out\n */\nvec2.subtract = function(out, a, b) {\n    out[0] = a[0] - b[0];\n    out[1] = a[1] - b[1];\n    return out;\n};\n\n/**\n * Alias for vec2.subtract\n * @static\n * @method sub\n */\nvec2.sub = vec2.subtract;\n\n/**\n * Multiplies two vec2's\n * @static\n * @method multiply\n * @param {Array} out the receiving vector\n * @param {Array} a the first operand\n * @param {Array} b the second operand\n * @return {Array} out\n */\nvec2.multiply = function(out, a, b) {\n    out[0] = a[0] * b[0];\n    out[1] = a[1] * b[1];\n    return out;\n};\n\n/**\n * Alias for vec2.multiply\n * @static\n * @method mul\n */\nvec2.mul = vec2.multiply;\n\n/**\n * Divides two vec2's\n * @static\n * @method divide\n * @param {Array} out the receiving vector\n * @param {Array} a the first operand\n * @param {Array} b the second operand\n * @return {Array} out\n */\nvec2.divide = function(out, a, b) {\n    out[0] = a[0] / b[0];\n    out[1] = a[1] / b[1];\n    return out;\n};\n\n/**\n * Alias for vec2.divide\n * @static\n * @method div\n */\nvec2.div = vec2.divide;\n\n/**\n * Scales a vec2 by a scalar number\n * @static\n * @method scale\n * @param {Array} out the receiving vector\n * @param {Array} a the vector to scale\n * @param {Number} b amount to scale the vector by\n * @return {Array} out\n */\nvec2.scale = function(out, a, b) {\n    out[0] = a[0] * b;\n    out[1] = a[1] * b;\n    return out;\n};\n\n/**\n * Calculates the euclidian distance between two vec2's\n * @static\n * @method distance\n * @param {Array} a the first operand\n * @param {Array} b the second operand\n * @return {Number} distance between a and b\n */\nvec2.distance = function(a, b) {\n    var x = b[0] - a[0],\n        y = b[1] - a[1];\n    return Math.sqrt(x*x + y*y);\n};\n\n/**\n * Alias for vec2.distance\n * @static\n * @method dist\n */\nvec2.dist = vec2.distance;\n\n/**\n * Calculates the squared euclidian distance between two vec2's\n * @static\n * @method squaredDistance\n * @param {Array} a the first operand\n * @param {Array} b the second operand\n * @return {Number} squared distance between a and b\n */\nvec2.squaredDistance = function(a, b) {\n    var x = b[0] - a[0],\n        y = b[1] - a[1];\n    return x*x + y*y;\n};\n\n/**\n * Alias for vec2.squaredDistance\n * @static\n * @method sqrDist\n */\nvec2.sqrDist = vec2.squaredDistance;\n\n/**\n * Calculates the length of a vec2\n * @static\n * @method length\n * @param {Array} a vector to calculate length of\n * @return {Number} length of a\n */\nvec2.length = function (a) {\n    var x = a[0],\n        y = a[1];\n    return Math.sqrt(x*x + y*y);\n};\n\n/**\n * Alias for vec2.length\n * @method len\n * @static\n */\nvec2.len = vec2.length;\n\n/**\n * Calculates the squared length of a vec2\n * @static\n * @method squaredLength\n * @param {Array} a vector to calculate squared length of\n * @return {Number} squared length of a\n */\nvec2.squaredLength = function (a) {\n    var x = a[0],\n        y = a[1];\n    return x*x + y*y;\n};\n\n/**\n * Alias for vec2.squaredLength\n * @static\n * @method sqrLen\n */\nvec2.sqrLen = vec2.squaredLength;\n\n/**\n * Negates the components of a vec2\n * @static\n * @method negate\n * @param {Array} out the receiving vector\n * @param {Array} a vector to negate\n * @return {Array} out\n */\nvec2.negate = function(out, a) {\n    out[0] = -a[0];\n    out[1] = -a[1];\n    return out;\n};\n\n/**\n * Normalize a vec2\n * @static\n * @method normalize\n * @param {Array} out the receiving vector\n * @param {Array} a vector to normalize\n * @return {Array} out\n */\nvec2.normalize = function(out, a) {\n    var x = a[0],\n        y = a[1];\n    var len = x*x + y*y;\n    if (len > 0) {\n        //TODO: evaluate use of glm_invsqrt here?\n        len = 1 / Math.sqrt(len);\n        out[0] = a[0] * len;\n        out[1] = a[1] * len;\n    }\n    return out;\n};\n\n/**\n * Calculates the dot product of two vec2's\n * @static\n * @method dot\n * @param {Array} a the first operand\n * @param {Array} b the second operand\n * @return {Number} dot product of a and b\n */\nvec2.dot = function (a, b) {\n    return a[0] * b[0] + a[1] * b[1];\n};\n\n/**\n * Returns a string representation of a vector\n * @static\n * @method str\n * @param {Array} vec vector to represent as a string\n * @return {String} string representation of the vector\n */\nvec2.str = function (a) {\n    return 'vec2(' + a[0] + ', ' + a[1] + ')';\n};\n\n/**\n * Linearly interpolate/mix two vectors.\n * @static\n * @method lerp\n * @param {Array} out\n * @param {Array} a First vector\n * @param {Array} b Second vector\n * @param {number} t Lerp factor\n */\nvec2.lerp = function (out, a, b, t) {\n    var ax = a[0],\n        ay = a[1];\n    out[0] = ax + t * (b[0] - ax);\n    out[1] = ay + t * (b[1] - ay);\n    return out;\n};\n\n/**\n * Reflect a vector along a normal.\n * @static\n * @method reflect\n * @param {Array} out\n * @param {Array} vector\n * @param {Array} normal\n */\nvec2.reflect = function(out, vector, normal){\n    var dot = vector[0] * normal[0] + vector[1] * normal[1];\n    out[0] = vector[0] - 2 * normal[0] * dot;\n    out[1] = vector[1] - 2 * normal[1] * dot;\n};\n\n/**\n * Get the intersection point between two line segments.\n * @static\n * @method getLineSegmentsIntersection\n * @param  {Array} out\n * @param  {Array} p0\n * @param  {Array} p1\n * @param  {Array} p2\n * @param  {Array} p3\n * @return {boolean} True if there was an intersection, otherwise false.\n */\nvec2.getLineSegmentsIntersection = function(out, p0, p1, p2, p3) {\n    var t = vec2.getLineSegmentsIntersectionFraction(p0, p1, p2, p3);\n    if(t < 0){\n        return false;\n    } else {\n        out[0] = p0[0] + (t * (p1[0] - p0[0]));\n        out[1] = p0[1] + (t * (p1[1] - p0[1]));\n        return true;\n    }\n};\n\n/**\n * Get the intersection fraction between two line segments. If successful, the intersection is at p0 + t * (p1 - p0)\n * @static\n * @method getLineSegmentsIntersectionFraction\n * @param  {Array} p0\n * @param  {Array} p1\n * @param  {Array} p2\n * @param  {Array} p3\n * @return {number} A number between 0 and 1 if there was an intersection, otherwise -1.\n */\nvec2.getLineSegmentsIntersectionFraction = function(p0, p1, p2, p3) {\n    var s1_x = p1[0] - p0[0];\n    var s1_y = p1[1] - p0[1];\n    var s2_x = p3[0] - p2[0];\n    var s2_y = p3[1] - p2[1];\n\n    var s, t;\n    s = (-s1_y * (p0[0] - p2[0]) + s1_x * (p0[1] - p2[1])) / (-s2_x * s1_y + s1_x * s2_y);\n    t = ( s2_x * (p0[1] - p2[1]) - s2_y * (p0[0] - p2[0])) / (-s2_x * s1_y + s1_x * s2_y);\n    if (s >= 0 && s <= 1 && t >= 0 && t <= 1) { // Collision detected\n        return t;\n    }\n    return -1; // No collision\n};\n\n},{\"../utils/Utils\":57}],31:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2')\n,   decomp = _dereq_('poly-decomp')\n,   Convex = _dereq_('../shapes/Convex')\n,   RaycastResult = _dereq_('../collision/RaycastResult')\n,   Ray = _dereq_('../collision/Ray')\n,   AABB = _dereq_('../collision/AABB')\n,   EventEmitter = _dereq_('../events/EventEmitter');\n\nmodule.exports = Body;\n\n/**\n * A rigid body. Has got a center of mass, position, velocity and a number of\n * shapes that are used for collisions.\n *\n * @class Body\n * @constructor\n * @extends EventEmitter\n * @param {Array} [options.force]\n * @param {Array} [options.position]\n * @param {Array} [options.velocity]\n * @param {Boolean} [options.allowSleep]\n * @param {Boolean} [options.collisionResponse]\n * @param {Number} [options.angle=0]\n * @param {Number} [options.angularForce=0]\n * @param {Number} [options.angularVelocity=0]\n * @param {Number} [options.ccdIterations=10]\n * @param {Number} [options.ccdSpeedThreshold=-1]\n * @param {Number} [options.fixedRotation=false]\n * @param {Number} [options.gravityScale]\n * @param {Number} [options.id]\n * @param {Number} [options.mass=0] A number >= 0. If zero, the .type will be set to Body.STATIC.\n * @param {Number} [options.sleepSpeedLimit]\n * @param {Number} [options.sleepTimeLimit]\n * @param {Object} [options]\n *\n * @example\n *\n *     // Create a typical dynamic body\n *     var body = new Body({\n *         mass: 1,\n *         position: [0, 0],\n *         angle: 0,\n *         velocity: [0, 0],\n *         angularVelocity: 0\n *     });\n *\n *     // Add a circular shape to the body\n *     body.addShape(new Circle({ radius: 1 }));\n *\n *     // Add the body to the world\n *     world.addBody(body);\n */\nfunction Body(options){\n    options = options || {};\n\n    EventEmitter.call(this);\n\n    /**\n     * The body identifyer\n     * @property id\n     * @type {Number}\n     */\n    this.id = options.id || ++Body._idCounter;\n\n    /**\n     * The world that this body is added to. This property is set to NULL if the body is not added to any world.\n     * @property world\n     * @type {World}\n     */\n    this.world = null;\n\n    /**\n     * The shapes of the body.\n     *\n     * @property shapes\n     * @type {Array}\n     */\n    this.shapes = [];\n\n    /**\n     * The mass of the body.\n     * @property mass\n     * @type {number}\n     */\n    this.mass = options.mass || 0;\n\n    /**\n     * The inverse mass of the body.\n     * @property invMass\n     * @type {number}\n     */\n    this.invMass = 0;\n\n    /**\n     * The inertia of the body around the Z axis.\n     * @property inertia\n     * @type {number}\n     */\n    this.inertia = 0;\n\n    /**\n     * The inverse inertia of the body.\n     * @property invInertia\n     * @type {number}\n     */\n    this.invInertia = 0;\n\n    this.invMassSolve = 0;\n    this.invInertiaSolve = 0;\n\n    /**\n     * Set to true if you want to fix the rotation of the body.\n     * @property fixedRotation\n     * @type {Boolean}\n     */\n    this.fixedRotation = !!options.fixedRotation;\n\n    /**\n     * Set to true if you want to fix the body movement along the X axis. The body will still be able to move along Y.\n     * @property {Boolean} fixedX\n     */\n    this.fixedX = !!options.fixedX;\n\n    /**\n     * Set to true if you want to fix the body movement along the Y axis. The body will still be able to move along X.\n     * @property {Boolean} fixedY\n     */\n    this.fixedY = !!options.fixedY;\n\n    /**\n     * @private\n     * @property {array} massMultiplier\n     */\n    this.massMultiplier = vec2.create();\n\n    /**\n     * The position of the body\n     * @property position\n     * @type {Array}\n     */\n    this.position = vec2.fromValues(0,0);\n    if(options.position){\n        vec2.copy(this.position, options.position);\n    }\n\n    /**\n     * The interpolated position of the body. Use this for rendering.\n     * @property interpolatedPosition\n     * @type {Array}\n     */\n    this.interpolatedPosition = vec2.fromValues(0,0);\n\n    /**\n     * The interpolated angle of the body. Use this for rendering.\n     * @property interpolatedAngle\n     * @type {Number}\n     */\n    this.interpolatedAngle = 0;\n\n    /**\n     * The previous position of the body.\n     * @property previousPosition\n     * @type {Array}\n     */\n    this.previousPosition = vec2.fromValues(0,0);\n\n    /**\n     * The previous angle of the body.\n     * @property previousAngle\n     * @type {Number}\n     */\n    this.previousAngle = 0;\n\n    /**\n     * The current velocity of the body.\n     * @property velocity\n     * @type {Array}\n     */\n    this.velocity = vec2.fromValues(0,0);\n    if(options.velocity){\n        vec2.copy(this.velocity, options.velocity);\n    }\n\n    /**\n     * Constraint velocity that was added to the body during the last step.\n     * @property vlambda\n     * @type {Array}\n     */\n    this.vlambda = vec2.fromValues(0,0);\n\n    /**\n     * Angular constraint velocity that was added to the body during last step.\n     * @property wlambda\n     * @type {Array}\n     */\n    this.wlambda = 0;\n\n    /**\n     * The angle of the body, in radians.\n     * @property angle\n     * @type {number}\n     * @example\n     *     // The angle property is not normalized to the interval 0 to 2*pi, it can be any value.\n     *     // If you need a value between 0 and 2*pi, use the following function to normalize it.\n     *     function normalizeAngle(angle){\n     *         angle = angle % (2*Math.PI);\n     *         if(angle < 0){\n     *             angle += (2*Math.PI);\n     *         }\n     *         return angle;\n     *     }\n     */\n    this.angle = options.angle || 0;\n\n    /**\n     * The angular velocity of the body, in radians per second.\n     * @property angularVelocity\n     * @type {number}\n     */\n    this.angularVelocity = options.angularVelocity || 0;\n\n    /**\n     * The force acting on the body. Since the body force (and {{#crossLink \"Body/angularForce:property\"}}{{/crossLink}}) will be zeroed after each step, so you need to set the force before each step.\n     * @property force\n     * @type {Array}\n     *\n     * @example\n     *     // This produces a forcefield of 1 Newton in the positive x direction.\n     *     for(var i=0; i<numSteps; i++){\n     *         body.force[0] = 1;\n     *         world.step(1/60);\n     *     }\n     *\n     * @example\n     *     // This will apply a rotational force on the body\n     *     for(var i=0; i<numSteps; i++){\n     *         body.angularForce = -3;\n     *         world.step(1/60);\n     *     }\n     */\n    this.force = vec2.create();\n    if(options.force){\n        vec2.copy(this.force, options.force);\n    }\n\n    /**\n     * The angular force acting on the body. See {{#crossLink \"Body/force:property\"}}{{/crossLink}}.\n     * @property angularForce\n     * @type {number}\n     */\n    this.angularForce = options.angularForce || 0;\n\n    /**\n     * The linear damping acting on the body in the velocity direction. Should be a value between 0 and 1.\n     * @property damping\n     * @type {Number}\n     * @default 0.1\n     */\n    this.damping = typeof(options.damping) === \"number\" ? options.damping : 0.1;\n\n    /**\n     * The angular force acting on the body. Should be a value between 0 and 1.\n     * @property angularDamping\n     * @type {Number}\n     * @default 0.1\n     */\n    this.angularDamping = typeof(options.angularDamping) === \"number\" ? options.angularDamping : 0.1;\n\n    /**\n     * The type of motion this body has. Should be one of: {{#crossLink \"Body/STATIC:property\"}}Body.STATIC{{/crossLink}}, {{#crossLink \"Body/DYNAMIC:property\"}}Body.DYNAMIC{{/crossLink}} and {{#crossLink \"Body/KINEMATIC:property\"}}Body.KINEMATIC{{/crossLink}}.\n     *\n     * * Static bodies do not move, and they do not respond to forces or collision.\n     * * Dynamic bodies body can move and respond to collisions and forces.\n     * * Kinematic bodies only moves according to its .velocity, and does not respond to collisions or force.\n     *\n     * @property type\n     * @type {number}\n     *\n     * @example\n     *     // Bodies are static by default. Static bodies will never move.\n     *     var body = new Body();\n     *     console.log(body.type == Body.STATIC); // true\n     *\n     * @example\n     *     // By setting the mass of a body to a nonzero number, the body\n     *     // will become dynamic and will move and interact with other bodies.\n     *     var dynamicBody = new Body({\n     *         mass : 1\n     *     });\n     *     console.log(dynamicBody.type == Body.DYNAMIC); // true\n     *\n     * @example\n     *     // Kinematic bodies will only move if you change their velocity.\n     *     var kinematicBody = new Body({\n     *         type: Body.KINEMATIC // Type can be set via the options object.\n     *     });\n     */\n    this.type = Body.STATIC;\n\n    if(typeof(options.type) !== 'undefined'){\n        this.type = options.type;\n    } else if(!options.mass){\n        this.type = Body.STATIC;\n    } else {\n        this.type = Body.DYNAMIC;\n    }\n\n    /**\n     * Bounding circle radius.\n     * @property boundingRadius\n     * @type {Number}\n     */\n    this.boundingRadius = 0;\n\n    /**\n     * Bounding box of this body.\n     * @property aabb\n     * @type {AABB}\n     */\n    this.aabb = new AABB();\n\n    /**\n     * Indicates if the AABB needs update. Update it with {{#crossLink \"Body/updateAABB:method\"}}.updateAABB(){{/crossLink}}.\n     * @property aabbNeedsUpdate\n     * @type {Boolean}\n     * @see updateAABB\n     *\n     * @example\n     *     // Force update the AABB\n     *     body.aabbNeedsUpdate = true;\n     *     body.updateAABB();\n     *     console.log(body.aabbNeedsUpdate); // false\n     */\n    this.aabbNeedsUpdate = true;\n\n    /**\n     * If true, the body will automatically fall to sleep. Note that you need to enable sleeping in the {{#crossLink \"World\"}}{{/crossLink}} before anything will happen.\n     * @property allowSleep\n     * @type {Boolean}\n     * @default true\n     */\n    this.allowSleep = options.allowSleep !== undefined ? options.allowSleep : true;\n\n    this.wantsToSleep = false;\n\n    /**\n     * One of {{#crossLink \"Body/AWAKE:property\"}}Body.AWAKE{{/crossLink}}, {{#crossLink \"Body/SLEEPY:property\"}}Body.SLEEPY{{/crossLink}} and {{#crossLink \"Body/SLEEPING:property\"}}Body.SLEEPING{{/crossLink}}.\n     *\n     * The body is initially Body.AWAKE. If its velocity norm is below .sleepSpeedLimit, the sleepState will become Body.SLEEPY. If the body continues to be Body.SLEEPY for .sleepTimeLimit seconds, it will fall asleep (Body.SLEEPY).\n     *\n     * @property sleepState\n     * @type {Number}\n     * @default Body.AWAKE\n     */\n    this.sleepState = Body.AWAKE;\n\n    /**\n     * If the speed (the norm of the velocity) is smaller than this value, the body is considered sleepy.\n     * @property sleepSpeedLimit\n     * @type {Number}\n     * @default 0.2\n     */\n    this.sleepSpeedLimit = options.sleepSpeedLimit !== undefined ? options.sleepSpeedLimit : 0.2;\n\n    /**\n     * If the body has been sleepy for this sleepTimeLimit seconds, it is considered sleeping.\n     * @property sleepTimeLimit\n     * @type {Number}\n     * @default 1\n     */\n    this.sleepTimeLimit = options.sleepTimeLimit !== undefined ? options.sleepTimeLimit : 1;\n\n    /**\n     * Gravity scaling factor. If you want the body to ignore gravity, set this to zero. If you want to reverse gravity, set it to -1.\n     * @property {Number} gravityScale\n     * @default 1\n     */\n    this.gravityScale = options.gravityScale !== undefined ? options.gravityScale : 1;\n\n    /**\n     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled. That means that this body will move through other bodies, but it will still trigger contact events, etc.\n     * @property {Boolean} collisionResponse\n     */\n    this.collisionResponse = options.collisionResponse !== undefined ? options.collisionResponse : true;\n\n    /**\n     * How long the body has been sleeping.\n     * @property {Number} idleTime\n     */\n    this.idleTime = 0;\n\n    /**\n     * The last time when the body went to SLEEPY state.\n     * @property {Number} timeLastSleepy\n     * @private\n     */\n    this.timeLastSleepy = 0;\n\n    /**\n     * If the body speed exceeds this threshold, CCD (continuous collision detection) will be enabled. Set it to a negative number to disable CCD completely for this body.\n     * @property {number} ccdSpeedThreshold\n     * @default -1\n     */\n    this.ccdSpeedThreshold = options.ccdSpeedThreshold !== undefined ? options.ccdSpeedThreshold : -1;\n\n    /**\n     * The number of iterations that should be used when searching for the time of impact during CCD. A larger number will assure that there's a small penetration on CCD collision, but a small number will give more performance.\n     * @property {number} ccdIterations\n     * @default 10\n     */\n    this.ccdIterations = options.ccdIterations !== undefined ? options.ccdIterations : 10;\n\n    this.concavePath = null;\n\n    this._wakeUpAfterNarrowphase = false;\n\n    this.updateMassProperties();\n}\nBody.prototype = new EventEmitter();\nBody.prototype.constructor = Body;\n\nBody._idCounter = 0;\n\n/**\n * @private\n * @method updateSolveMassProperties\n */\nBody.prototype.updateSolveMassProperties = function(){\n    if(this.sleepState === Body.SLEEPING || this.type === Body.KINEMATIC){\n        this.invMassSolve = 0;\n        this.invInertiaSolve = 0;\n    } else {\n        this.invMassSolve = this.invMass;\n        this.invInertiaSolve = this.invInertia;\n    }\n};\n\n/**\n * Set the total density of the body\n * @method setDensity\n * @param {number} density\n */\nBody.prototype.setDensity = function(density) {\n    var totalArea = this.getArea();\n    this.mass = totalArea * density;\n    this.updateMassProperties();\n};\n\n/**\n * Get the total area of all shapes in the body\n * @method getArea\n * @return {Number}\n */\nBody.prototype.getArea = function() {\n    var totalArea = 0;\n    for(var i=0; i<this.shapes.length; i++){\n        totalArea += this.shapes[i].area;\n    }\n    return totalArea;\n};\n\n/**\n * Get the AABB from the body. The AABB is updated if necessary.\n * @method getAABB\n * @return {AABB} The AABB instance (this.aabb)\n */\nBody.prototype.getAABB = function(){\n    if(this.aabbNeedsUpdate){\n        this.updateAABB();\n    }\n    return this.aabb;\n};\n\nvar shapeAABB = new AABB(),\n    tmp = vec2.create();\n\n/**\n * Updates the AABB of the Body, and set .aabbNeedsUpdate = false.\n * @method updateAABB\n */\nBody.prototype.updateAABB = function() {\n    var shapes = this.shapes,\n        N = shapes.length,\n        offset = tmp,\n        bodyAngle = this.angle;\n\n    for(var i=0; i!==N; i++){\n        var shape = shapes[i],\n            angle = shape.angle + bodyAngle;\n\n        // Get shape world offset\n        vec2.rotate(offset, shape.position, bodyAngle);\n        vec2.add(offset, offset, this.position);\n\n        // Get shape AABB\n        shape.computeAABB(shapeAABB, offset, angle);\n\n        if(i===0){\n            this.aabb.copy(shapeAABB);\n        } else {\n            this.aabb.extend(shapeAABB);\n        }\n    }\n\n    this.aabbNeedsUpdate = false;\n};\n\n/**\n * Update the bounding radius of the body (this.boundingRadius). Should be done if any of the shape dimensions or positions are changed.\n * @method updateBoundingRadius\n */\nBody.prototype.updateBoundingRadius = function(){\n    var shapes = this.shapes,\n        N = shapes.length,\n        radius = 0;\n\n    for(var i=0; i!==N; i++){\n        var shape = shapes[i],\n            offset = vec2.length(shape.position),\n            r = shape.boundingRadius;\n        if(offset + r > radius){\n            radius = offset + r;\n        }\n    }\n\n    this.boundingRadius = radius;\n};\n\n/**\n * Add a shape to the body. You can pass a local transform when adding a shape,\n * so that the shape gets an offset and angle relative to the body center of mass.\n * Will automatically update the mass properties and bounding radius.\n *\n * @method addShape\n * @param  {Shape}              shape\n * @param  {Array} [offset] Local body offset of the shape.\n * @param  {Number}             [angle]  Local body angle.\n *\n * @example\n *     var body = new Body(),\n *         shape = new Circle({ radius: 1 });\n *\n *     // Add the shape to the body, positioned in the center\n *     body.addShape(shape);\n *\n *     // Add another shape to the body, positioned 1 unit length from the body center of mass along the local x-axis.\n *     body.addShape(shape,[1,0]);\n *\n *     // Add another shape to the body, positioned 1 unit length from the body center of mass along the local y-axis, and rotated 90 degrees CCW.\n *     body.addShape(shape,[0,1],Math.PI/2);\n */\nBody.prototype.addShape = function(shape, offset, angle){\n    if(shape.body){\n        throw new Error('A shape can only be added to one body.');\n    }\n    shape.body = this;\n\n    // Copy the offset vector\n    if(offset){\n        vec2.copy(shape.position, offset);\n    } else {\n        vec2.set(shape.position, 0, 0);\n    }\n\n    shape.angle = angle || 0;\n\n    this.shapes.push(shape);\n    this.updateMassProperties();\n    this.updateBoundingRadius();\n\n    this.aabbNeedsUpdate = true;\n};\n\n/**\n * Remove a shape\n * @method removeShape\n * @param  {Shape} shape\n * @return {Boolean} True if the shape was found and removed, else false.\n */\nBody.prototype.removeShape = function(shape){\n    var idx = this.shapes.indexOf(shape);\n\n    if(idx !== -1){\n        this.shapes.splice(idx,1);\n        this.aabbNeedsUpdate = true;\n        shape.body = null;\n        return true;\n    } else {\n        return false;\n    }\n};\n\n/**\n * Updates .inertia, .invMass, .invInertia for this Body. Should be called when\n * changing the structure or mass of the Body.\n *\n * @method updateMassProperties\n *\n * @example\n *     body.mass += 1;\n *     body.updateMassProperties();\n */\nBody.prototype.updateMassProperties = function(){\n    if(this.type === Body.STATIC || this.type === Body.KINEMATIC){\n\n        this.mass = Number.MAX_VALUE;\n        this.invMass = 0;\n        this.inertia = Number.MAX_VALUE;\n        this.invInertia = 0;\n\n    } else {\n\n        var shapes = this.shapes,\n            N = shapes.length,\n            m = this.mass / N,\n            I = 0;\n\n        if(!this.fixedRotation){\n            for(var i=0; i<N; i++){\n                var shape = shapes[i],\n                    r2 = vec2.squaredLength(shape.position),\n                    Icm = shape.computeMomentOfInertia(m);\n                I += Icm + m*r2;\n            }\n            this.inertia = I;\n            this.invInertia = I>0 ? 1/I : 0;\n\n        } else {\n            this.inertia = Number.MAX_VALUE;\n            this.invInertia = 0;\n        }\n\n        // Inverse mass properties are easy\n        this.invMass = 1 / this.mass;\n\n        vec2.set(\n            this.massMultiplier,\n            this.fixedX ? 0 : 1,\n            this.fixedY ? 0 : 1\n        );\n    }\n};\n\nvar Body_applyForce_r = vec2.create();\n\n/**\n * Apply force to a point relative to the center of mass of the body. This could for example be a point on the RigidBody surface. Applying force this way will add to Body.force and Body.angularForce. If relativePoint is zero, the force will be applied directly on the center of mass, and the torque produced will be zero.\n * @method applyForce\n * @param {Array} force The force to add.\n * @param {Array} [relativePoint] A world point to apply the force on.\n */\nBody.prototype.applyForce = function(force, relativePoint){\n\n    // Add linear force\n    vec2.add(this.force, this.force, force);\n\n    if(relativePoint){\n\n        // Compute produced rotational force\n        var rotForce = vec2.crossLength(relativePoint,force);\n\n        // Add rotational force\n        this.angularForce += rotForce;\n    }\n};\n\n/**\n * Apply force to a body-local point.\n * @method applyForceLocal\n * @param  {Array} localForce The force vector to add, oriented in local body space.\n * @param  {Array} localPoint A point relative to the body in world space. If not given, it is set to zero and all of the impulse will be excerted on the center of mass.\n */\nvar Body_applyForce_forceWorld = vec2.create();\nvar Body_applyForce_pointWorld = vec2.create();\nvar Body_applyForce_pointLocal = vec2.create();\nBody.prototype.applyForceLocal = function(localForce, localPoint){\n    localPoint = localPoint || Body_applyForce_pointLocal;\n    var worldForce = Body_applyForce_forceWorld;\n    var worldPoint = Body_applyForce_pointWorld;\n    this.vectorToWorldFrame(worldForce, localForce);\n    this.vectorToWorldFrame(worldPoint, localPoint);\n    this.applyForce(worldForce, worldPoint);\n};\n\n/**\n * Apply impulse to a point relative to the body. This could for example be a point on the Body surface. An impulse is a force added to a body during a short period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity.\n * @method applyImpulse\n * @param  {Array} impulse The impulse vector to add, oriented in world space.\n * @param  {Array} [relativePoint] A point relative to the body in world space. If not given, it is set to zero and all of the impulse will be excerted on the center of mass.\n */\nvar Body_applyImpulse_velo = vec2.create();\nBody.prototype.applyImpulse = function(impulseVector, relativePoint){\n    if(this.type !== Body.DYNAMIC){\n        return;\n    }\n\n    // Compute produced central impulse velocity\n    var velo = Body_applyImpulse_velo;\n    vec2.scale(velo, impulseVector, this.invMass);\n    vec2.multiply(velo, this.massMultiplier, velo);\n\n    // Add linear impulse\n    vec2.add(this.velocity, velo, this.velocity);\n\n    if(relativePoint){\n        // Compute produced rotational impulse velocity\n        var rotVelo = vec2.crossLength(relativePoint, impulseVector);\n        rotVelo *= this.invInertia;\n\n        // Add rotational Impulse\n        this.angularVelocity += rotVelo;\n    }\n};\n\n/**\n * Apply impulse to a point relative to the body. This could for example be a point on the Body surface. An impulse is a force added to a body during a short period of time (impulse = force * time). Impulses will be added to Body.velocity and Body.angularVelocity.\n * @method applyImpulseLocal\n * @param  {Array} impulse The impulse vector to add, oriented in world space.\n * @param  {Array} [relativePoint] A point relative to the body in world space. If not given, it is set to zero and all of the impulse will be excerted on the center of mass.\n */\nvar Body_applyImpulse_impulseWorld = vec2.create();\nvar Body_applyImpulse_pointWorld = vec2.create();\nvar Body_applyImpulse_pointLocal = vec2.create();\nBody.prototype.applyImpulseLocal = function(localImpulse, localPoint){\n    localPoint = localPoint || Body_applyImpulse_pointLocal;\n    var worldImpulse = Body_applyImpulse_impulseWorld;\n    var worldPoint = Body_applyImpulse_pointWorld;\n    this.vectorToWorldFrame(worldImpulse, localImpulse);\n    this.vectorToWorldFrame(worldPoint, localPoint);\n    this.applyImpulse(worldImpulse, worldPoint);\n};\n\n/**\n * Transform a world point to local body frame.\n * @method toLocalFrame\n * @param  {Array} out          The vector to store the result in\n * @param  {Array} worldPoint   The input world point\n */\nBody.prototype.toLocalFrame = function(out, worldPoint){\n    vec2.toLocalFrame(out, worldPoint, this.position, this.angle);\n};\n\n/**\n * Transform a local point to world frame.\n * @method toWorldFrame\n * @param  {Array} out          The vector to store the result in\n * @param  {Array} localPoint   The input local point\n */\nBody.prototype.toWorldFrame = function(out, localPoint){\n    vec2.toGlobalFrame(out, localPoint, this.position, this.angle);\n};\n\n/**\n * Transform a world point to local body frame.\n * @method vectorToLocalFrame\n * @param  {Array} out          The vector to store the result in\n * @param  {Array} worldVector  The input world vector\n */\nBody.prototype.vectorToLocalFrame = function(out, worldVector){\n    vec2.vectorToLocalFrame(out, worldVector, this.angle);\n};\n\n/**\n * Transform a local point to world frame.\n * @method vectorToWorldFrame\n * @param  {Array} out          The vector to store the result in\n * @param  {Array} localVector  The input local vector\n */\nBody.prototype.vectorToWorldFrame = function(out, localVector){\n    vec2.vectorToGlobalFrame(out, localVector, this.angle);\n};\n\n/**\n * Reads a polygon shape path, and assembles convex shapes from that and puts them at proper offset points.\n * @method fromPolygon\n * @param {Array} path An array of 2d vectors, e.g. [[0,0],[0,1],...] that resembles a concave or convex polygon. The shape must be simple and without holes.\n * @param {Object} [options]\n * @param {Boolean} [options.optimalDecomp=false]   Set to true if you need optimal decomposition. Warning: very slow for polygons with more than 10 vertices.\n * @param {Boolean} [options.skipSimpleCheck=false] Set to true if you already know that the path is not intersecting itself.\n * @param {Boolean|Number} [options.removeCollinearPoints=false] Set to a number (angle threshold value) to remove collinear points, or false to keep all points.\n * @return {Boolean} True on success, else false.\n */\nBody.prototype.fromPolygon = function(path,options){\n    options = options || {};\n\n    // Remove all shapes\n    for(var i=this.shapes.length; i>=0; --i){\n        this.removeShape(this.shapes[i]);\n    }\n\n    var p = new decomp.Polygon();\n    p.vertices = path;\n\n    // Make it counter-clockwise\n    p.makeCCW();\n\n    if(typeof(options.removeCollinearPoints) === \"number\"){\n        p.removeCollinearPoints(options.removeCollinearPoints);\n    }\n\n    // Check if any line segment intersects the path itself\n    if(typeof(options.skipSimpleCheck) === \"undefined\"){\n        if(!p.isSimple()){\n            return false;\n        }\n    }\n\n    // Save this path for later\n    this.concavePath = p.vertices.slice(0);\n    for(var i=0; i<this.concavePath.length; i++){\n        var v = [0,0];\n        vec2.copy(v,this.concavePath[i]);\n        this.concavePath[i] = v;\n    }\n\n    // Slow or fast decomp?\n    var convexes;\n    if(options.optimalDecomp){\n        convexes = p.decomp();\n    } else {\n        convexes = p.quickDecomp();\n    }\n\n    var cm = vec2.create();\n\n    // Add convexes\n    for(var i=0; i!==convexes.length; i++){\n        // Create convex\n        var c = new Convex({ vertices: convexes[i].vertices });\n\n        // Move all vertices so its center of mass is in the local center of the convex\n        for(var j=0; j!==c.vertices.length; j++){\n            var v = c.vertices[j];\n            vec2.sub(v,v,c.centerOfMass);\n        }\n\n        vec2.scale(cm,c.centerOfMass,1);\n        c.updateTriangles();\n        c.updateCenterOfMass();\n        c.updateBoundingRadius();\n\n        // Add the shape\n        this.addShape(c,cm);\n    }\n\n    this.adjustCenterOfMass();\n\n    this.aabbNeedsUpdate = true;\n\n    return true;\n};\n\nvar adjustCenterOfMass_tmp1 = vec2.fromValues(0,0),\n    adjustCenterOfMass_tmp2 = vec2.fromValues(0,0),\n    adjustCenterOfMass_tmp3 = vec2.fromValues(0,0),\n    adjustCenterOfMass_tmp4 = vec2.fromValues(0,0);\n\n/**\n * Moves the shape offsets so their center of mass becomes the body center of mass.\n * @method adjustCenterOfMass\n */\nBody.prototype.adjustCenterOfMass = function(){\n    var offset_times_area = adjustCenterOfMass_tmp2,\n        sum =               adjustCenterOfMass_tmp3,\n        cm =                adjustCenterOfMass_tmp4,\n        totalArea =         0;\n    vec2.set(sum,0,0);\n\n    for(var i=0; i!==this.shapes.length; i++){\n        var s = this.shapes[i];\n        vec2.scale(offset_times_area, s.position, s.area);\n        vec2.add(sum, sum, offset_times_area);\n        totalArea += s.area;\n    }\n\n    vec2.scale(cm,sum,1/totalArea);\n\n    // Now move all shapes\n    for(var i=0; i!==this.shapes.length; i++){\n        var s = this.shapes[i];\n        vec2.sub(s.position, s.position, cm);\n    }\n\n    // Move the body position too\n    vec2.add(this.position,this.position,cm);\n\n    // And concave path\n    for(var i=0; this.concavePath && i<this.concavePath.length; i++){\n        vec2.sub(this.concavePath[i], this.concavePath[i], cm);\n    }\n\n    this.updateMassProperties();\n    this.updateBoundingRadius();\n};\n\n/**\n * Sets the force on the body to zero.\n * @method setZeroForce\n */\nBody.prototype.setZeroForce = function(){\n    vec2.set(this.force,0.0,0.0);\n    this.angularForce = 0.0;\n};\n\nBody.prototype.resetConstraintVelocity = function(){\n    var b = this,\n        vlambda = b.vlambda;\n    vec2.set(vlambda,0,0);\n    b.wlambda = 0;\n};\n\nBody.prototype.addConstraintVelocity = function(){\n    var b = this,\n        v = b.velocity;\n    vec2.add( v, v, b.vlambda);\n    b.angularVelocity += b.wlambda;\n};\n\n/**\n * Apply damping, see <a href=\"http://code.google.com/p/bullet/issues/detail?id=74\">this</a> for details.\n * @method applyDamping\n * @param  {number} dt Current time step\n */\nBody.prototype.applyDamping = function(dt){\n    if(this.type === Body.DYNAMIC){ // Only for dynamic bodies\n        var v = this.velocity;\n        vec2.scale(v, v, Math.pow(1.0 - this.damping,dt));\n        this.angularVelocity *= Math.pow(1.0 - this.angularDamping,dt);\n    }\n};\n\n/**\n * Wake the body up. Normally you should not need this, as the body is automatically awoken at events such as collisions.\n * Sets the sleepState to {{#crossLink \"Body/AWAKE:property\"}}Body.AWAKE{{/crossLink}} and emits the wakeUp event if the body wasn't awake before.\n * @method wakeUp\n */\nBody.prototype.wakeUp = function(){\n    var s = this.sleepState;\n    this.sleepState = Body.AWAKE;\n    this.idleTime = 0;\n    if(s !== Body.AWAKE){\n        this.emit(Body.wakeUpEvent);\n    }\n};\n\n/**\n * Force body sleep\n * @method sleep\n */\nBody.prototype.sleep = function(){\n    this.sleepState = Body.SLEEPING;\n    this.angularVelocity = 0;\n    this.angularForce = 0;\n    vec2.set(this.velocity,0,0);\n    vec2.set(this.force,0,0);\n    this.emit(Body.sleepEvent);\n};\n\n/**\n * Called every timestep to update internal sleep timer and change sleep state if needed.\n * @method sleepTick\n * @param {number} time The world time in seconds\n * @param {boolean} dontSleep\n * @param {number} dt\n */\nBody.prototype.sleepTick = function(time, dontSleep, dt){\n    if(!this.allowSleep || this.type === Body.SLEEPING){\n        return;\n    }\n\n    this.wantsToSleep = false;\n\n    var sleepState = this.sleepState,\n        speedSquared = vec2.squaredLength(this.velocity) + Math.pow(this.angularVelocity,2),\n        speedLimitSquared = Math.pow(this.sleepSpeedLimit,2);\n\n    // Add to idle time\n    if(speedSquared >= speedLimitSquared){\n        this.idleTime = 0;\n        this.sleepState = Body.AWAKE;\n    } else {\n        this.idleTime += dt;\n        this.sleepState = Body.SLEEPY;\n    }\n    if(this.idleTime > this.sleepTimeLimit){\n        if(!dontSleep){\n            this.sleep();\n        } else {\n            this.wantsToSleep = true;\n        }\n    }\n};\n\n/**\n * Check if the body is overlapping another body. Note that this method only works if the body was added to a World and if at least one step was taken.\n * @method overlaps\n * @param  {Body} body\n * @return {boolean}\n */\nBody.prototype.overlaps = function(body){\n    return this.world.overlapKeeper.bodiesAreOverlapping(this, body);\n};\n\nvar integrate_fhMinv = vec2.create();\nvar integrate_velodt = vec2.create();\n\n/**\n * Move the body forward in time given its current velocity.\n * @method integrate\n * @param  {Number} dt\n */\nBody.prototype.integrate = function(dt){\n    var minv = this.invMass,\n        f = this.force,\n        pos = this.position,\n        velo = this.velocity;\n\n    // Save old position\n    vec2.copy(this.previousPosition, this.position);\n    this.previousAngle = this.angle;\n\n    // Velocity update\n    if(!this.fixedRotation){\n        this.angularVelocity += this.angularForce * this.invInertia * dt;\n    }\n    vec2.scale(integrate_fhMinv, f, dt * minv);\n    vec2.multiply(integrate_fhMinv, this.massMultiplier, integrate_fhMinv);\n    vec2.add(velo, integrate_fhMinv, velo);\n\n    // CCD\n    if(!this.integrateToTimeOfImpact(dt)){\n\n        // Regular position update\n        vec2.scale(integrate_velodt, velo, dt);\n        vec2.add(pos, pos, integrate_velodt);\n        if(!this.fixedRotation){\n            this.angle += this.angularVelocity * dt;\n        }\n    }\n\n    this.aabbNeedsUpdate = true;\n};\n\nvar result = new RaycastResult();\nvar ray = new Ray({\n    mode: Ray.ALL\n});\nvar direction = vec2.create();\nvar end = vec2.create();\nvar startToEnd = vec2.create();\nvar rememberPosition = vec2.create();\nBody.prototype.integrateToTimeOfImpact = function(dt){\n\n    if(this.ccdSpeedThreshold < 0 || vec2.squaredLength(this.velocity) < Math.pow(this.ccdSpeedThreshold, 2)){\n        return false;\n    }\n\n    vec2.normalize(direction, this.velocity);\n\n    vec2.scale(end, this.velocity, dt);\n    vec2.add(end, end, this.position);\n\n    vec2.sub(startToEnd, end, this.position);\n    var startToEndAngle = this.angularVelocity * dt;\n    var len = vec2.length(startToEnd);\n\n    var timeOfImpact = 1;\n\n    var hit;\n    var that = this;\n    result.reset();\n    ray.callback = function (result) {\n        if(result.body === that){\n            return;\n        }\n        hit = result.body;\n        result.getHitPoint(end, ray);\n        vec2.sub(startToEnd, end, that.position);\n        timeOfImpact = vec2.length(startToEnd) / len;\n        result.stop();\n    };\n    vec2.copy(ray.from, this.position);\n    vec2.copy(ray.to, end);\n    ray.update();\n    this.world.raycast(result, ray);\n\n    if(!hit){\n        return false;\n    }\n\n    var rememberAngle = this.angle;\n    vec2.copy(rememberPosition, this.position);\n\n    // Got a start and end point. Approximate time of impact using binary search\n    var iter = 0;\n    var tmin = 0;\n    var tmid = 0;\n    var tmax = timeOfImpact;\n    while (tmax >= tmin && iter < this.ccdIterations) {\n        iter++;\n\n        // calculate the midpoint\n        tmid = (tmax - tmin) / 2;\n\n        // Move the body to that point\n        vec2.scale(integrate_velodt, startToEnd, timeOfImpact);\n        vec2.add(this.position, rememberPosition, integrate_velodt);\n        this.angle = rememberAngle + startToEndAngle * timeOfImpact;\n        this.updateAABB();\n\n        // check overlap\n        var overlaps = this.aabb.overlaps(hit.aabb) && this.world.narrowphase.bodiesOverlap(this, hit);\n\n        if (overlaps) {\n            // change min to search upper interval\n            tmin = tmid;\n        } else {\n            // change max to search lower interval\n            tmax = tmid;\n        }\n    }\n\n    timeOfImpact = tmid;\n\n    vec2.copy(this.position, rememberPosition);\n    this.angle = rememberAngle;\n\n    // move to TOI\n    vec2.scale(integrate_velodt, startToEnd, timeOfImpact);\n    vec2.add(this.position, this.position, integrate_velodt);\n    if(!this.fixedRotation){\n        this.angle += startToEndAngle * timeOfImpact;\n    }\n\n    return true;\n};\n\n/**\n * Get velocity of a point in the body.\n * @method getVelocityAtPoint\n * @param  {Array} result A vector to store the result in\n * @param  {Array} relativePoint A world oriented vector, indicating the position of the point to get the velocity from\n * @return {Array} The result vector\n */\nBody.prototype.getVelocityAtPoint = function(result, relativePoint){\n    vec2.crossVZ(result, relativePoint, this.angularVelocity);\n    vec2.subtract(result, this.velocity, result);\n    return result;\n};\n\n/**\n * @event sleepy\n */\nBody.sleepyEvent = {\n    type: \"sleepy\"\n};\n\n/**\n * @event sleep\n */\nBody.sleepEvent = {\n    type: \"sleep\"\n};\n\n/**\n * @event wakeup\n */\nBody.wakeUpEvent = {\n    type: \"wakeup\"\n};\n\n/**\n * Dynamic body.\n * @property DYNAMIC\n * @type {Number}\n * @static\n */\nBody.DYNAMIC = 1;\n\n/**\n * Static body.\n * @property STATIC\n * @type {Number}\n * @static\n */\nBody.STATIC = 2;\n\n/**\n * Kinematic body.\n * @property KINEMATIC\n * @type {Number}\n * @static\n */\nBody.KINEMATIC = 4;\n\n/**\n * @property AWAKE\n * @type {Number}\n * @static\n */\nBody.AWAKE = 0;\n\n/**\n * @property SLEEPY\n * @type {Number}\n * @static\n */\nBody.SLEEPY = 1;\n\n/**\n * @property SLEEPING\n * @type {Number}\n * @static\n */\nBody.SLEEPING = 2;\n\n\n},{\"../collision/AABB\":7,\"../collision/Ray\":11,\"../collision/RaycastResult\":12,\"../events/EventEmitter\":26,\"../math/vec2\":30,\"../shapes/Convex\":40,\"poly-decomp\":5}],32:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2');\nvar Spring = _dereq_('./Spring');\nvar Utils = _dereq_('../utils/Utils');\n\nmodule.exports = LinearSpring;\n\n/**\n * A spring, connecting two bodies.\n *\n * The Spring explicitly adds force and angularForce to the bodies.\n *\n * @class LinearSpring\n * @extends Spring\n * @constructor\n * @param {Body} bodyA\n * @param {Body} bodyB\n * @param {Object} [options]\n * @param {number} [options.restLength]   A number > 0. Default is the current distance between the world anchor points.\n * @param {number} [options.stiffness=100]  Spring constant (see Hookes Law). A number >= 0.\n * @param {number} [options.damping=1]      A number >= 0. Default: 1\n * @param {Array}  [options.worldAnchorA]   Where to hook the spring to body A, in world coordinates. Overrides the option \"localAnchorA\" if given.\n * @param {Array}  [options.worldAnchorB]\n * @param {Array}  [options.localAnchorA]   Where to hook the spring to body A, in local body coordinates. Defaults to the body center.\n * @param {Array}  [options.localAnchorB]\n */\nfunction LinearSpring(bodyA,bodyB,options){\n    options = options || {};\n\n    Spring.call(this, bodyA, bodyB, options);\n\n    /**\n     * Anchor for bodyA in local bodyA coordinates.\n     * @property localAnchorA\n     * @type {Array}\n     */\n    this.localAnchorA = vec2.fromValues(0,0);\n\n    /**\n     * Anchor for bodyB in local bodyB coordinates.\n     * @property localAnchorB\n     * @type {Array}\n     */\n    this.localAnchorB = vec2.fromValues(0,0);\n\n    if(options.localAnchorA){ vec2.copy(this.localAnchorA, options.localAnchorA); }\n    if(options.localAnchorB){ vec2.copy(this.localAnchorB, options.localAnchorB); }\n    if(options.worldAnchorA){ this.setWorldAnchorA(options.worldAnchorA); }\n    if(options.worldAnchorB){ this.setWorldAnchorB(options.worldAnchorB); }\n\n    var worldAnchorA = vec2.create();\n    var worldAnchorB = vec2.create();\n    this.getWorldAnchorA(worldAnchorA);\n    this.getWorldAnchorB(worldAnchorB);\n    var worldDistance = vec2.distance(worldAnchorA, worldAnchorB);\n\n    /**\n     * Rest length of the spring.\n     * @property restLength\n     * @type {number}\n     */\n    this.restLength = typeof(options.restLength) === \"number\" ? options.restLength : worldDistance;\n}\nLinearSpring.prototype = new Spring();\nLinearSpring.prototype.constructor = LinearSpring;\n\n/**\n * Set the anchor point on body A, using world coordinates.\n * @method setWorldAnchorA\n * @param {Array} worldAnchorA\n */\nLinearSpring.prototype.setWorldAnchorA = function(worldAnchorA){\n    this.bodyA.toLocalFrame(this.localAnchorA, worldAnchorA);\n};\n\n/**\n * Set the anchor point on body B, using world coordinates.\n * @method setWorldAnchorB\n * @param {Array} worldAnchorB\n */\nLinearSpring.prototype.setWorldAnchorB = function(worldAnchorB){\n    this.bodyB.toLocalFrame(this.localAnchorB, worldAnchorB);\n};\n\n/**\n * Get the anchor point on body A, in world coordinates.\n * @method getWorldAnchorA\n * @param {Array} result The vector to store the result in.\n */\nLinearSpring.prototype.getWorldAnchorA = function(result){\n    this.bodyA.toWorldFrame(result, this.localAnchorA);\n};\n\n/**\n * Get the anchor point on body B, in world coordinates.\n * @method getWorldAnchorB\n * @param {Array} result The vector to store the result in.\n */\nLinearSpring.prototype.getWorldAnchorB = function(result){\n    this.bodyB.toWorldFrame(result, this.localAnchorB);\n};\n\nvar applyForce_r =              vec2.create(),\n    applyForce_r_unit =         vec2.create(),\n    applyForce_u =              vec2.create(),\n    applyForce_f =              vec2.create(),\n    applyForce_worldAnchorA =   vec2.create(),\n    applyForce_worldAnchorB =   vec2.create(),\n    applyForce_ri =             vec2.create(),\n    applyForce_rj =             vec2.create(),\n    applyForce_tmp =            vec2.create();\n\n/**\n * Apply the spring force to the connected bodies.\n * @method applyForce\n */\nLinearSpring.prototype.applyForce = function(){\n    var k = this.stiffness,\n        d = this.damping,\n        l = this.restLength,\n        bodyA = this.bodyA,\n        bodyB = this.bodyB,\n        r = applyForce_r,\n        r_unit = applyForce_r_unit,\n        u = applyForce_u,\n        f = applyForce_f,\n        tmp = applyForce_tmp;\n\n    var worldAnchorA = applyForce_worldAnchorA,\n        worldAnchorB = applyForce_worldAnchorB,\n        ri = applyForce_ri,\n        rj = applyForce_rj;\n\n    // Get world anchors\n    this.getWorldAnchorA(worldAnchorA);\n    this.getWorldAnchorB(worldAnchorB);\n\n    // Get offset points\n    vec2.sub(ri, worldAnchorA, bodyA.position);\n    vec2.sub(rj, worldAnchorB, bodyB.position);\n\n    // Compute distance vector between world anchor points\n    vec2.sub(r, worldAnchorB, worldAnchorA);\n    var rlen = vec2.len(r);\n    vec2.normalize(r_unit,r);\n\n    //console.log(rlen)\n    //console.log(\"A\",vec2.str(worldAnchorA),\"B\",vec2.str(worldAnchorB))\n\n    // Compute relative velocity of the anchor points, u\n    vec2.sub(u, bodyB.velocity, bodyA.velocity);\n    vec2.crossZV(tmp, bodyB.angularVelocity, rj);\n    vec2.add(u, u, tmp);\n    vec2.crossZV(tmp, bodyA.angularVelocity, ri);\n    vec2.sub(u, u, tmp);\n\n    // F = - k * ( x - L ) - D * ( u )\n    vec2.scale(f, r_unit, -k*(rlen-l) - d*vec2.dot(u,r_unit));\n\n    // Add forces to bodies\n    vec2.sub( bodyA.force, bodyA.force, f);\n    vec2.add( bodyB.force, bodyB.force, f);\n\n    // Angular force\n    var ri_x_f = vec2.crossLength(ri, f);\n    var rj_x_f = vec2.crossLength(rj, f);\n    bodyA.angularForce -= ri_x_f;\n    bodyB.angularForce += rj_x_f;\n};\n\n},{\"../math/vec2\":30,\"../utils/Utils\":57,\"./Spring\":34}],33:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2');\nvar Spring = _dereq_('./Spring');\n\nmodule.exports = RotationalSpring;\n\n/**\n * A rotational spring, connecting two bodies rotation. This spring explicitly adds angularForce (torque) to the bodies.\n *\n * The spring can be combined with a {{#crossLink \"RevoluteConstraint\"}}{{/crossLink}} to make, for example, a mouse trap.\n *\n * @class RotationalSpring\n * @extends Spring\n * @constructor\n * @param {Body} bodyA\n * @param {Body} bodyB\n * @param {Object} [options]\n * @param {number} [options.restAngle] The relative angle of bodies at which the spring is at rest. If not given, it's set to the current relative angle between the bodies.\n * @param {number} [options.stiffness=100] Spring constant (see Hookes Law). A number >= 0.\n * @param {number} [options.damping=1] A number >= 0.\n */\nfunction RotationalSpring(bodyA, bodyB, options){\n    options = options || {};\n\n    Spring.call(this, bodyA, bodyB, options);\n\n    /**\n     * Rest angle of the spring.\n     * @property restAngle\n     * @type {number}\n     */\n    this.restAngle = typeof(options.restAngle) === \"number\" ? options.restAngle : bodyB.angle - bodyA.angle;\n}\nRotationalSpring.prototype = new Spring();\nRotationalSpring.prototype.constructor = RotationalSpring;\n\n/**\n * Apply the spring force to the connected bodies.\n * @method applyForce\n */\nRotationalSpring.prototype.applyForce = function(){\n    var k = this.stiffness,\n        d = this.damping,\n        l = this.restAngle,\n        bodyA = this.bodyA,\n        bodyB = this.bodyB,\n        x = bodyB.angle - bodyA.angle,\n        u = bodyB.angularVelocity - bodyA.angularVelocity;\n\n    var torque = - k * (x - l) - d * u * 0;\n\n    bodyA.angularForce -= torque;\n    bodyB.angularForce += torque;\n};\n\n},{\"../math/vec2\":30,\"./Spring\":34}],34:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2');\nvar Utils = _dereq_('../utils/Utils');\n\nmodule.exports = Spring;\n\n/**\n * A spring, connecting two bodies. The Spring explicitly adds force and angularForce to the bodies and does therefore not put load on the constraint solver.\n *\n * @class Spring\n * @constructor\n * @param {Body} bodyA\n * @param {Body} bodyB\n * @param {Object} [options]\n * @param {number} [options.stiffness=100]  Spring constant (see Hookes Law). A number >= 0.\n * @param {number} [options.damping=1]      A number >= 0. Default: 1\n * @param {Array}  [options.localAnchorA]   Where to hook the spring to body A, in local body coordinates. Defaults to the body center.\n * @param {Array}  [options.localAnchorB]\n * @param {Array}  [options.worldAnchorA]   Where to hook the spring to body A, in world coordinates. Overrides the option \"localAnchorA\" if given.\n * @param {Array}  [options.worldAnchorB]\n */\nfunction Spring(bodyA, bodyB, options){\n    options = Utils.defaults(options,{\n        stiffness: 100,\n        damping: 1,\n    });\n\n    /**\n     * Stiffness of the spring.\n     * @property stiffness\n     * @type {number}\n     */\n    this.stiffness = options.stiffness;\n\n    /**\n     * Damping of the spring.\n     * @property damping\n     * @type {number}\n     */\n    this.damping = options.damping;\n\n    /**\n     * First connected body.\n     * @property bodyA\n     * @type {Body}\n     */\n    this.bodyA = bodyA;\n\n    /**\n     * Second connected body.\n     * @property bodyB\n     * @type {Body}\n     */\n    this.bodyB = bodyB;\n}\n\n/**\n * Apply the spring force to the connected bodies.\n * @method applyForce\n */\nSpring.prototype.applyForce = function(){\n    // To be implemented by subclasses\n};\n\n},{\"../math/vec2\":30,\"../utils/Utils\":57}],35:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2');\nvar Utils = _dereq_('../utils/Utils');\nvar Constraint = _dereq_('../constraints/Constraint');\nvar FrictionEquation = _dereq_('../equations/FrictionEquation');\nvar Body = _dereq_('../objects/Body');\n\nmodule.exports = TopDownVehicle;\n\n/**\n * @class TopDownVehicle\n * @constructor\n * @param {Body} chassisBody A dynamic body, already added to the world.\n * @param {Object} [options]\n *\n * @example\n *\n *     // Create a dynamic body for the chassis\n *     var chassisBody = new Body({\n *         mass: 1\n *     });\n *     var boxShape = new Box({ width: 0.5, height: 1 });\n *     chassisBody.addShape(boxShape);\n *     world.addBody(chassisBody);\n *\n *     // Create the vehicle\n *     var vehicle = new TopDownVehicle(chassisBody);\n *\n *     // Add one front wheel and one back wheel - we don't actually need four :)\n *     var frontWheel = vehicle.addWheel({\n *         localPosition: [0, 0.5] // front\n *     });\n *     frontWheel.setSideFriction(4);\n *\n *     // Back wheel\n *     var backWheel = vehicle.addWheel({\n *         localPosition: [0, -0.5] // back\n *     });\n *     backWheel.setSideFriction(3); // Less side friction on back wheel makes it easier to drift\n *     vehicle.addToWorld(world);\n *\n *     // Steer value zero means straight forward. Positive is left and negative right.\n *     frontWheel.steerValue = Math.PI / 16;\n *\n *     // Engine force forward\n *     backWheel.engineForce = 10;\n *     backWheel.setBrakeForce(0);\n */\nfunction TopDownVehicle(chassisBody, options){\n    options = options || {};\n\n    /**\n     * @property {Body} chassisBody\n     */\n    this.chassisBody = chassisBody;\n\n    /**\n     * @property {Array} wheels\n     */\n    this.wheels = [];\n\n    // A dummy body to constrain the chassis to\n    this.groundBody = new Body({ mass: 0 });\n\n    this.world = null;\n\n    var that = this;\n    this.preStepCallback = function(){\n        that.update();\n    };\n}\n\n/**\n * @method addToWorld\n * @param {World} world\n */\nTopDownVehicle.prototype.addToWorld = function(world){\n    this.world = world;\n    world.addBody(this.groundBody);\n    world.on('preStep', this.preStepCallback);\n    for (var i = 0; i < this.wheels.length; i++) {\n        var wheel = this.wheels[i];\n        world.addConstraint(wheel);\n    }\n};\n\n/**\n * @method removeFromWorld\n * @param {World} world\n */\nTopDownVehicle.prototype.removeFromWorld = function(){\n    var world = this.world;\n    world.removeBody(this.groundBody);\n    world.off('preStep', this.preStepCallback);\n    for (var i = 0; i < this.wheels.length; i++) {\n        var wheel = this.wheels[i];\n        world.removeConstraint(wheel);\n    }\n    this.world = null;\n};\n\n/**\n * @method addWheel\n * @param {object} [wheelOptions]\n * @return {WheelConstraint}\n */\nTopDownVehicle.prototype.addWheel = function(wheelOptions){\n    var wheel = new WheelConstraint(this,wheelOptions);\n    this.wheels.push(wheel);\n    return wheel;\n};\n\n/**\n * @method update\n */\nTopDownVehicle.prototype.update = function(){\n    for (var i = 0; i < this.wheels.length; i++) {\n        this.wheels[i].update();\n    }\n};\n\n/**\n * @class WheelConstraint\n * @constructor\n * @extends {Constraint}\n * @param {Vehicle} vehicle\n * @param {object} [options]\n * @param {Array} [options.localForwardVector]The local wheel forward vector in local body space. Default is zero.\n * @param {Array} [options.localPosition] The local position of the wheen in the chassis body. Default is zero - the center of the body.\n * @param {Array} [options.sideFriction=5] The max friction force in the sideways direction.\n */\nfunction WheelConstraint(vehicle, options){\n    options = options || {};\n\n    this.vehicle = vehicle;\n\n    this.forwardEquation = new FrictionEquation(vehicle.chassisBody, vehicle.groundBody);\n\n    this.sideEquation = new FrictionEquation(vehicle.chassisBody, vehicle.groundBody);\n\n    /**\n     * @property {number} steerValue\n     */\n    this.steerValue = 0;\n\n    /**\n     * @property {number} engineForce\n     */\n    this.engineForce = 0;\n\n    this.setSideFriction(options.sideFriction !== undefined ? options.sideFriction : 5);\n\n    /**\n     * @property {Array} localForwardVector\n     */\n    this.localForwardVector = vec2.fromValues(0, 1);\n    if(options.localForwardVector){\n        vec2.copy(this.localForwardVector, options.localForwardVector);\n    }\n\n    /**\n     * @property {Array} localPosition\n     */\n    this.localPosition = vec2.fromValues(0, 0);\n    if(options.localPosition){\n        vec2.copy(this.localPosition, options.localPosition);\n    }\n\n    Constraint.apply(this, vehicle.chassisBody, vehicle.groundBody);\n\n    this.equations.push(\n        this.forwardEquation,\n        this.sideEquation\n    );\n\n    this.setBrakeForce(0);\n}\nWheelConstraint.prototype = new Constraint();\n\n/**\n * @method setForwardFriction\n */\nWheelConstraint.prototype.setBrakeForce = function(force){\n    this.forwardEquation.setSlipForce(force);\n};\n\n/**\n * @method setSideFriction\n */\nWheelConstraint.prototype.setSideFriction = function(force){\n    this.sideEquation.setSlipForce(force);\n};\n\nvar worldVelocity = vec2.create();\nvar relativePoint = vec2.create();\n\n/**\n * @method getSpeed\n */\nWheelConstraint.prototype.getSpeed = function(){\n    this.vehicle.chassisBody.vectorToWorldFrame(relativePoint, this.localForwardVector);\n    this.vehicle.chassisBody.getVelocityAtPoint(worldVelocity, relativePoint);\n    return vec2.dot(worldVelocity, relativePoint);\n};\n\nvar tmpVec = vec2.create();\n\n/**\n * @method update\n */\nWheelConstraint.prototype.update = function(){\n\n    // Directional\n    this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.t, this.localForwardVector);\n    vec2.rotate(this.sideEquation.t, this.localForwardVector, Math.PI / 2);\n    this.vehicle.chassisBody.vectorToWorldFrame(this.sideEquation.t, this.sideEquation.t);\n\n    vec2.rotate(this.forwardEquation.t, this.forwardEquation.t, this.steerValue);\n    vec2.rotate(this.sideEquation.t, this.sideEquation.t, this.steerValue);\n\n    // Attachment point\n    this.vehicle.chassisBody.toWorldFrame(this.forwardEquation.contactPointB, this.localPosition);\n    vec2.copy(this.sideEquation.contactPointB, this.forwardEquation.contactPointB);\n\n    this.vehicle.chassisBody.vectorToWorldFrame(this.forwardEquation.contactPointA, this.localPosition);\n    vec2.copy(this.sideEquation.contactPointA, this.forwardEquation.contactPointA);\n\n    // Add engine force\n    vec2.normalize(tmpVec, this.forwardEquation.t);\n    vec2.scale(tmpVec, tmpVec, this.engineForce);\n\n    this.vehicle.chassisBody.applyForce(tmpVec, this.forwardEquation.contactPointA);\n};\n},{\"../constraints/Constraint\":14,\"../equations/FrictionEquation\":23,\"../math/vec2\":30,\"../objects/Body\":31,\"../utils/Utils\":57}],36:[function(_dereq_,module,exports){\n// Export p2 classes\nvar p2 = module.exports = {\n    AABB :                          _dereq_('./collision/AABB'),\n    AngleLockEquation :             _dereq_('./equations/AngleLockEquation'),\n    Body :                          _dereq_('./objects/Body'),\n    Broadphase :                    _dereq_('./collision/Broadphase'),\n    Capsule :                       _dereq_('./shapes/Capsule'),\n    Circle :                        _dereq_('./shapes/Circle'),\n    Constraint :                    _dereq_('./constraints/Constraint'),\n    ContactEquation :               _dereq_('./equations/ContactEquation'),\n    ContactEquationPool :           _dereq_('./utils/ContactEquationPool'),\n    ContactMaterial :               _dereq_('./material/ContactMaterial'),\n    Convex :                        _dereq_('./shapes/Convex'),\n    DistanceConstraint :            _dereq_('./constraints/DistanceConstraint'),\n    Equation :                      _dereq_('./equations/Equation'),\n    EventEmitter :                  _dereq_('./events/EventEmitter'),\n    FrictionEquation :              _dereq_('./equations/FrictionEquation'),\n    FrictionEquationPool :          _dereq_('./utils/FrictionEquationPool'),\n    GearConstraint :                _dereq_('./constraints/GearConstraint'),\n    GSSolver :                      _dereq_('./solver/GSSolver'),\n    Heightfield :                   _dereq_('./shapes/Heightfield'),\n    Line :                          _dereq_('./shapes/Line'),\n    LockConstraint :                _dereq_('./constraints/LockConstraint'),\n    Material :                      _dereq_('./material/Material'),\n    Narrowphase :                   _dereq_('./collision/Narrowphase'),\n    NaiveBroadphase :               _dereq_('./collision/NaiveBroadphase'),\n    Particle :                      _dereq_('./shapes/Particle'),\n    Plane :                         _dereq_('./shapes/Plane'),\n    Pool :                          _dereq_('./utils/Pool'),\n    RevoluteConstraint :            _dereq_('./constraints/RevoluteConstraint'),\n    PrismaticConstraint :           _dereq_('./constraints/PrismaticConstraint'),\n    Ray :                           _dereq_('./collision/Ray'),\n    RaycastResult :                 _dereq_('./collision/RaycastResult'),\n    Box :                           _dereq_('./shapes/Box'),\n    RotationalVelocityEquation :    _dereq_('./equations/RotationalVelocityEquation'),\n    SAPBroadphase :                 _dereq_('./collision/SAPBroadphase'),\n    Shape :                         _dereq_('./shapes/Shape'),\n    Solver :                        _dereq_('./solver/Solver'),\n    Spring :                        _dereq_('./objects/Spring'),\n    TopDownVehicle :                _dereq_('./objects/TopDownVehicle'),\n    LinearSpring :                  _dereq_('./objects/LinearSpring'),\n    RotationalSpring :              _dereq_('./objects/RotationalSpring'),\n    Utils :                         _dereq_('./utils/Utils'),\n    World :                         _dereq_('./world/World'),\n    vec2 :                          _dereq_('./math/vec2'),\n    version :                       _dereq_('../package.json').version,\n};\n\nObject.defineProperty(p2, 'Rectangle', {\n    get: function() {\n        console.warn('The Rectangle class has been renamed to Box.');\n        return this.Box;\n    }\n});\n},{\"../package.json\":6,\"./collision/AABB\":7,\"./collision/Broadphase\":8,\"./collision/NaiveBroadphase\":9,\"./collision/Narrowphase\":10,\"./collision/Ray\":11,\"./collision/RaycastResult\":12,\"./collision/SAPBroadphase\":13,\"./constraints/Constraint\":14,\"./constraints/DistanceConstraint\":15,\"./constraints/GearConstraint\":16,\"./constraints/LockConstraint\":17,\"./constraints/PrismaticConstraint\":18,\"./constraints/RevoluteConstraint\":19,\"./equations/AngleLockEquation\":20,\"./equations/ContactEquation\":21,\"./equations/Equation\":22,\"./equations/FrictionEquation\":23,\"./equations/RotationalVelocityEquation\":25,\"./events/EventEmitter\":26,\"./material/ContactMaterial\":27,\"./material/Material\":28,\"./math/vec2\":30,\"./objects/Body\":31,\"./objects/LinearSpring\":32,\"./objects/RotationalSpring\":33,\"./objects/Spring\":34,\"./objects/TopDownVehicle\":35,\"./shapes/Box\":37,\"./shapes/Capsule\":38,\"./shapes/Circle\":39,\"./shapes/Convex\":40,\"./shapes/Heightfield\":41,\"./shapes/Line\":42,\"./shapes/Particle\":43,\"./shapes/Plane\":44,\"./shapes/Shape\":45,\"./solver/GSSolver\":46,\"./solver/Solver\":47,\"./utils/ContactEquationPool\":48,\"./utils/FrictionEquationPool\":49,\"./utils/Pool\":55,\"./utils/Utils\":57,\"./world/World\":61}],37:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2')\n,   Shape = _dereq_('./Shape')\n,   Convex = _dereq_('./Convex');\n\nmodule.exports = Box;\n\n/**\n * Box shape class.\n * @class Box\n * @constructor\n * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink \"Shape\"}}{{/crossLink}} constructor.)\n * @param {Number} [options.width=1] Total width of the box\n * @param {Number} [options.height=1] Total height of the box\n * @extends Convex\n */\nfunction Box(options){\n    if(typeof(arguments[0]) === 'number' && typeof(arguments[1]) === 'number'){\n        options = {\n            width: arguments[0],\n            height: arguments[1]\n        };\n        console.warn('The Rectangle has been renamed to Box and its constructor signature has changed. Please use the following format: new Box({ width: 1, height: 1, ... })');\n    }\n    options = options || {};\n\n    /**\n     * Total width of the box\n     * @property width\n     * @type {Number}\n     */\n    var width = this.width = options.width || 1;\n\n    /**\n     * Total height of the box\n     * @property height\n     * @type {Number}\n     */\n    var height = this.height = options.height || 1;\n\n    var verts = [\n        vec2.fromValues(-width/2, -height/2),\n        vec2.fromValues( width/2, -height/2),\n        vec2.fromValues( width/2,  height/2),\n        vec2.fromValues(-width/2,  height/2)\n    ];\n    var axes = [\n        vec2.fromValues(1, 0),\n        vec2.fromValues(0, 1)\n    ];\n\n    options.vertices = verts;\n    options.axes = axes;\n    options.type = Shape.BOX;\n    Convex.call(this, options);\n}\nBox.prototype = new Convex();\nBox.prototype.constructor = Box;\n\n/**\n * Compute moment of inertia\n * @method computeMomentOfInertia\n * @param  {Number} mass\n * @return {Number}\n */\nBox.prototype.computeMomentOfInertia = function(mass){\n    var w = this.width,\n        h = this.height;\n    return mass * (h*h + w*w) / 12;\n};\n\n/**\n * Update the bounding radius\n * @method updateBoundingRadius\n */\nBox.prototype.updateBoundingRadius = function(){\n    var w = this.width,\n        h = this.height;\n    this.boundingRadius = Math.sqrt(w*w + h*h) / 2;\n};\n\nvar corner1 = vec2.create(),\n    corner2 = vec2.create(),\n    corner3 = vec2.create(),\n    corner4 = vec2.create();\n\n/**\n * @method computeAABB\n * @param  {AABB}   out      The resulting AABB.\n * @param  {Array}  position\n * @param  {Number} angle\n */\nBox.prototype.computeAABB = function(out, position, angle){\n    out.setFromPoints(this.vertices,position,angle,0);\n};\n\nBox.prototype.updateArea = function(){\n    this.area = this.width * this.height;\n};\n\n\n},{\"../math/vec2\":30,\"./Convex\":40,\"./Shape\":45}],38:[function(_dereq_,module,exports){\nvar Shape = _dereq_('./Shape')\n,   vec2 = _dereq_('../math/vec2');\n\nmodule.exports = Capsule;\n\n/**\n * Capsule shape class.\n * @class Capsule\n * @constructor\n * @extends Shape\n * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink \"Shape\"}}{{/crossLink}} constructor.)\n * @param {Number} [options.length=1] The distance between the end points\n * @param {Number} [options.radius=1] Radius of the capsule\n * @example\n *     var capsuleShape = new Capsule({\n *         length: 1,\n *         radius: 2\n *     });\n *     body.addShape(capsuleShape);\n */\nfunction Capsule(options){\n    if(typeof(arguments[0]) === 'number' && typeof(arguments[1]) === 'number'){\n        options = {\n            length: arguments[0],\n            radius: arguments[1]\n        };\n        console.warn('The Capsule constructor signature has changed. Please use the following format: new Capsule({ radius: 1, length: 1 })');\n    }\n    options = options || {};\n\n    /**\n     * The distance between the end points.\n     * @property {Number} length\n     */\n    this.length = options.length || 1;\n\n    /**\n     * The radius of the capsule.\n     * @property {Number} radius\n     */\n    this.radius = options.radius || 1;\n\n    options.type = Shape.CAPSULE;\n    Shape.call(this, options);\n}\nCapsule.prototype = new Shape();\nCapsule.prototype.constructor = Capsule;\n\n/**\n * Compute the mass moment of inertia of the Capsule.\n * @method conputeMomentOfInertia\n * @param  {Number} mass\n * @return {Number}\n * @todo\n */\nCapsule.prototype.computeMomentOfInertia = function(mass){\n    // Approximate with rectangle\n    var r = this.radius,\n        w = this.length + r, // 2*r is too much, 0 is too little\n        h = r*2;\n    return mass * (h*h + w*w) / 12;\n};\n\n/**\n * @method updateBoundingRadius\n */\nCapsule.prototype.updateBoundingRadius = function(){\n    this.boundingRadius = this.radius + this.length/2;\n};\n\n/**\n * @method updateArea\n */\nCapsule.prototype.updateArea = function(){\n    this.area = Math.PI * this.radius * this.radius + this.radius * 2 * this.length;\n};\n\nvar r = vec2.create();\n\n/**\n * @method computeAABB\n * @param  {AABB}   out      The resulting AABB.\n * @param  {Array}  position\n * @param  {Number} angle\n */\nCapsule.prototype.computeAABB = function(out, position, angle){\n    var radius = this.radius;\n\n    // Compute center position of one of the the circles, world oriented, but with local offset\n    vec2.set(r,this.length / 2,0);\n    if(angle !== 0){\n        vec2.rotate(r,r,angle);\n    }\n\n    // Get bounds\n    vec2.set(out.upperBound,  Math.max(r[0]+radius, -r[0]+radius),\n                              Math.max(r[1]+radius, -r[1]+radius));\n    vec2.set(out.lowerBound,  Math.min(r[0]-radius, -r[0]-radius),\n                              Math.min(r[1]-radius, -r[1]-radius));\n\n    // Add offset\n    vec2.add(out.lowerBound, out.lowerBound, position);\n    vec2.add(out.upperBound, out.upperBound, position);\n};\n\nvar intersectCapsule_hitPointWorld = vec2.create();\nvar intersectCapsule_normal = vec2.create();\nvar intersectCapsule_l0 = vec2.create();\nvar intersectCapsule_l1 = vec2.create();\nvar intersectCapsule_unit_y = vec2.fromValues(0,1);\n\n/**\n * @method raycast\n * @param  {RaycastResult} result\n * @param  {Ray} ray\n * @param  {array} position\n * @param  {number} angle\n */\nCapsule.prototype.raycast = function(result, ray, position, angle){\n    var from = ray.from;\n    var to = ray.to;\n    var direction = ray.direction;\n\n    var hitPointWorld = intersectCapsule_hitPointWorld;\n    var normal = intersectCapsule_normal;\n    var l0 = intersectCapsule_l0;\n    var l1 = intersectCapsule_l1;\n\n    // The sides\n    var halfLen = this.length / 2;\n    for(var i=0; i<2; i++){\n\n        // get start and end of the line\n        var y = this.radius * (i*2-1);\n        vec2.set(l0, -halfLen, y);\n        vec2.set(l1, halfLen, y);\n        vec2.toGlobalFrame(l0, l0, position, angle);\n        vec2.toGlobalFrame(l1, l1, position, angle);\n\n        var delta = vec2.getLineSegmentsIntersectionFraction(from, to, l0, l1);\n        if(delta >= 0){\n            vec2.rotate(normal, intersectCapsule_unit_y, angle);\n            vec2.scale(normal, normal, (i*2-1));\n            ray.reportIntersection(result, delta, normal, -1);\n            if(result.shouldStop(ray)){\n                return;\n            }\n        }\n    }\n\n    // Circles\n    var diagonalLengthSquared = Math.pow(this.radius, 2) + Math.pow(halfLen, 2);\n    for(var i=0; i<2; i++){\n        vec2.set(l0, halfLen * (i*2-1), 0);\n        vec2.toGlobalFrame(l0, l0, position, angle);\n\n        var a = Math.pow(to[0] - from[0], 2) + Math.pow(to[1] - from[1], 2);\n        var b = 2 * ((to[0] - from[0]) * (from[0] - l0[0]) + (to[1] - from[1]) * (from[1] - l0[1]));\n        var c = Math.pow(from[0] - l0[0], 2) + Math.pow(from[1] - l0[1], 2) - Math.pow(this.radius, 2);\n        var delta = Math.pow(b, 2) - 4 * a * c;\n\n        if(delta < 0){\n            // No intersection\n            continue;\n\n        } else if(delta === 0){\n            // single intersection point\n            vec2.lerp(hitPointWorld, from, to, delta);\n\n            if(vec2.squaredDistance(hitPointWorld, position) > diagonalLengthSquared){\n                vec2.sub(normal, hitPointWorld, l0);\n                vec2.normalize(normal,normal);\n                ray.reportIntersection(result, delta, normal, -1);\n                if(result.shouldStop(ray)){\n                    return;\n                }\n            }\n\n        } else {\n            var sqrtDelta = Math.sqrt(delta);\n            var inv2a = 1 / (2 * a);\n            var d1 = (- b - sqrtDelta) * inv2a;\n            var d2 = (- b + sqrtDelta) * inv2a;\n\n            if(d1 >= 0 && d1 <= 1){\n                vec2.lerp(hitPointWorld, from, to, d1);\n                if(vec2.squaredDistance(hitPointWorld, position) > diagonalLengthSquared){\n                    vec2.sub(normal, hitPointWorld, l0);\n                    vec2.normalize(normal,normal);\n                    ray.reportIntersection(result, d1, normal, -1);\n                    if(result.shouldStop(ray)){\n                        return;\n                    }\n                }\n            }\n\n            if(d2 >= 0 && d2 <= 1){\n                vec2.lerp(hitPointWorld, from, to, d2);\n                if(vec2.squaredDistance(hitPointWorld, position) > diagonalLengthSquared){\n                    vec2.sub(normal, hitPointWorld, l0);\n                    vec2.normalize(normal,normal);\n                    ray.reportIntersection(result, d2, normal, -1);\n                    if(result.shouldStop(ray)){\n                        return;\n                    }\n                }\n            }\n        }\n    }\n};\n},{\"../math/vec2\":30,\"./Shape\":45}],39:[function(_dereq_,module,exports){\nvar Shape = _dereq_('./Shape')\n,    vec2 = _dereq_('../math/vec2');\n\nmodule.exports = Circle;\n\n/**\n * Circle shape class.\n * @class Circle\n * @extends Shape\n * @constructor\n * @param {options} [options] (Note that this options object will be passed on to the {{#crossLink \"Shape\"}}{{/crossLink}} constructor.)\n * @param {number} [options.radius=1] The radius of this circle\n *\n * @example\n *     var circleShape = new Circle({ radius: 1 });\n *     body.addShape(circleShape);\n */\nfunction Circle(options){\n    if(typeof(arguments[0]) === 'number'){\n        options = {\n            radius: arguments[0]\n        };\n        console.warn('The Circle constructor signature has changed. Please use the following format: new Circle({ radius: 1 })');\n    }\n    options = options || {};\n\n    /**\n     * The radius of the circle.\n     * @property radius\n     * @type {number}\n     */\n    this.radius = options.radius || 1;\n\n    options.type = Shape.CIRCLE;\n    Shape.call(this, options);\n}\nCircle.prototype = new Shape();\nCircle.prototype.constructor = Circle;\n\n/**\n * @method computeMomentOfInertia\n * @param  {Number} mass\n * @return {Number}\n */\nCircle.prototype.computeMomentOfInertia = function(mass){\n    var r = this.radius;\n    return mass * r * r / 2;\n};\n\n/**\n * @method updateBoundingRadius\n * @return {Number}\n */\nCircle.prototype.updateBoundingRadius = function(){\n    this.boundingRadius = this.radius;\n};\n\n/**\n * @method updateArea\n * @return {Number}\n */\nCircle.prototype.updateArea = function(){\n    this.area = Math.PI * this.radius * this.radius;\n};\n\n/**\n * @method computeAABB\n * @param  {AABB}   out      The resulting AABB.\n * @param  {Array}  position\n * @param  {Number} angle\n */\nCircle.prototype.computeAABB = function(out, position, angle){\n    var r = this.radius;\n    vec2.set(out.upperBound,  r,  r);\n    vec2.set(out.lowerBound, -r, -r);\n    if(position){\n        vec2.add(out.lowerBound, out.lowerBound, position);\n        vec2.add(out.upperBound, out.upperBound, position);\n    }\n};\n\nvar Ray_intersectSphere_intersectionPoint = vec2.create();\nvar Ray_intersectSphere_normal = vec2.create();\n\n/**\n * @method raycast\n * @param  {RaycastResult} result\n * @param  {Ray} ray\n * @param  {array} position\n * @param  {number} angle\n */\nCircle.prototype.raycast = function(result, ray, position, angle){\n    var from = ray.from,\n        to = ray.to,\n        r = this.radius;\n\n    var a = Math.pow(to[0] - from[0], 2) + Math.pow(to[1] - from[1], 2);\n    var b = 2 * ((to[0] - from[0]) * (from[0] - position[0]) + (to[1] - from[1]) * (from[1] - position[1]));\n    var c = Math.pow(from[0] - position[0], 2) + Math.pow(from[1] - position[1], 2) - Math.pow(r, 2);\n    var delta = Math.pow(b, 2) - 4 * a * c;\n\n    var intersectionPoint = Ray_intersectSphere_intersectionPoint;\n    var normal = Ray_intersectSphere_normal;\n\n    if(delta < 0){\n        // No intersection\n        return;\n\n    } else if(delta === 0){\n        // single intersection point\n        vec2.lerp(intersectionPoint, from, to, delta);\n\n        vec2.sub(normal, intersectionPoint, position);\n        vec2.normalize(normal,normal);\n\n        ray.reportIntersection(result, delta, normal, -1);\n\n    } else {\n        var sqrtDelta = Math.sqrt(delta);\n        var inv2a = 1 / (2 * a);\n        var d1 = (- b - sqrtDelta) * inv2a;\n        var d2 = (- b + sqrtDelta) * inv2a;\n\n        if(d1 >= 0 && d1 <= 1){\n            vec2.lerp(intersectionPoint, from, to, d1);\n\n            vec2.sub(normal, intersectionPoint, position);\n            vec2.normalize(normal,normal);\n\n            ray.reportIntersection(result, d1, normal, -1);\n\n            if(result.shouldStop(ray)){\n                return;\n            }\n        }\n\n        if(d2 >= 0 && d2 <= 1){\n            vec2.lerp(intersectionPoint, from, to, d2);\n\n            vec2.sub(normal, intersectionPoint, position);\n            vec2.normalize(normal,normal);\n\n            ray.reportIntersection(result, d2, normal, -1);\n        }\n    }\n};\n},{\"../math/vec2\":30,\"./Shape\":45}],40:[function(_dereq_,module,exports){\nvar Shape = _dereq_('./Shape')\n,   vec2 = _dereq_('../math/vec2')\n,   polyk = _dereq_('../math/polyk')\n,   decomp = _dereq_('poly-decomp');\n\nmodule.exports = Convex;\n\n/**\n * Convex shape class.\n * @class Convex\n * @constructor\n * @extends Shape\n * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink \"Shape\"}}{{/crossLink}} constructor.)\n * @param {Array} [options.vertices] An array of vertices that span this shape. Vertices are given in counter-clockwise (CCW) direction.\n * @param {Array} [options.axes] An array of unit length vectors, representing the symmetry axes in the convex.\n * @example\n *     // Create a box\n *     var vertices = [[-1,-1], [1,-1], [1,1], [-1,1]];\n *     var convexShape = new Convex({ vertices: vertices });\n *     body.addShape(convexShape);\n */\nfunction Convex(options){\n    if(Array.isArray(arguments[0])){\n        options = {\n            vertices: arguments[0],\n            axes: arguments[1]\n        };\n        console.warn('The Convex constructor signature has changed. Please use the following format: new Convex({ vertices: [...], ... })');\n    }\n    options = options || {};\n\n    /**\n     * Vertices defined in the local frame.\n     * @property vertices\n     * @type {Array}\n     */\n    this.vertices = [];\n\n    // Copy the verts\n    var vertices = options.vertices !== undefined ? options.vertices : [];\n    for(var i=0; i < vertices.length; i++){\n        var v = vec2.create();\n        vec2.copy(v, vertices[i]);\n        this.vertices.push(v);\n    }\n\n    /**\n     * Axes defined in the local frame.\n     * @property axes\n     * @type {Array}\n     */\n    this.axes = [];\n\n    if(options.axes){\n\n        // Copy the axes\n        for(var i=0; i < options.axes.length; i++){\n            var axis = vec2.create();\n            vec2.copy(axis, options.axes[i]);\n            this.axes.push(axis);\n        }\n\n    } else {\n\n        // Construct axes from the vertex data\n        for(var i = 0; i < this.vertices.length; i++){\n            // Get the world edge\n            var worldPoint0 = this.vertices[i];\n            var worldPoint1 = this.vertices[(i+1) % this.vertices.length];\n\n            var normal = vec2.create();\n            vec2.sub(normal, worldPoint1, worldPoint0);\n\n            // Get normal - just rotate 90 degrees since vertices are given in CCW\n            vec2.rotate90cw(normal, normal);\n            vec2.normalize(normal, normal);\n\n            this.axes.push(normal);\n        }\n\n    }\n\n    /**\n     * The center of mass of the Convex\n     * @property centerOfMass\n     * @type {Array}\n     */\n    this.centerOfMass = vec2.fromValues(0,0);\n\n    /**\n     * Triangulated version of this convex. The structure is Array of 3-Arrays, and each subarray contains 3 integers, referencing the vertices.\n     * @property triangles\n     * @type {Array}\n     */\n    this.triangles = [];\n\n    if(this.vertices.length){\n        this.updateTriangles();\n        this.updateCenterOfMass();\n    }\n\n    /**\n     * The bounding radius of the convex\n     * @property boundingRadius\n     * @type {Number}\n     */\n    this.boundingRadius = 0;\n\n    options.type = Shape.CONVEX;\n    Shape.call(this, options);\n\n    this.updateBoundingRadius();\n    this.updateArea();\n    if(this.area < 0){\n        throw new Error(\"Convex vertices must be given in conter-clockwise winding.\");\n    }\n}\nConvex.prototype = new Shape();\nConvex.prototype.constructor = Convex;\n\nvar tmpVec1 = vec2.create();\nvar tmpVec2 = vec2.create();\n\n/**\n * Project a Convex onto a world-oriented axis\n * @method projectOntoAxis\n * @static\n * @param  {Array} offset\n * @param  {Array} localAxis\n * @param  {Array} result\n */\nConvex.prototype.projectOntoLocalAxis = function(localAxis, result){\n    var max=null,\n        min=null,\n        v,\n        value,\n        localAxis = tmpVec1;\n\n    // Get projected position of all vertices\n    for(var i=0; i<this.vertices.length; i++){\n        v = this.vertices[i];\n        value = vec2.dot(v, localAxis);\n        if(max === null || value > max){\n            max = value;\n        }\n        if(min === null || value < min){\n            min = value;\n        }\n    }\n\n    if(min > max){\n        var t = min;\n        min = max;\n        max = t;\n    }\n\n    vec2.set(result, min, max);\n};\n\nConvex.prototype.projectOntoWorldAxis = function(localAxis, shapeOffset, shapeAngle, result){\n    var worldAxis = tmpVec2;\n\n    this.projectOntoLocalAxis(localAxis, result);\n\n    // Project the position of the body onto the axis - need to add this to the result\n    if(shapeAngle !== 0){\n        vec2.rotate(worldAxis, localAxis, shapeAngle);\n    } else {\n        worldAxis = localAxis;\n    }\n    var offset = vec2.dot(shapeOffset, worldAxis);\n\n    vec2.set(result, result[0] + offset, result[1] + offset);\n};\n\n\n/**\n * Update the .triangles property\n * @method updateTriangles\n */\nConvex.prototype.updateTriangles = function(){\n\n    this.triangles.length = 0;\n\n    // Rewrite on polyk notation, array of numbers\n    var polykVerts = [];\n    for(var i=0; i<this.vertices.length; i++){\n        var v = this.vertices[i];\n        polykVerts.push(v[0],v[1]);\n    }\n\n    // Triangulate\n    var triangles = polyk.Triangulate(polykVerts);\n\n    // Loop over all triangles, add their inertia contributions to I\n    for(var i=0; i<triangles.length; i+=3){\n        var id1 = triangles[i],\n            id2 = triangles[i+1],\n            id3 = triangles[i+2];\n\n        // Add to triangles\n        this.triangles.push([id1,id2,id3]);\n    }\n};\n\nvar updateCenterOfMass_centroid = vec2.create(),\n    updateCenterOfMass_centroid_times_mass = vec2.create(),\n    updateCenterOfMass_a = vec2.create(),\n    updateCenterOfMass_b = vec2.create(),\n    updateCenterOfMass_c = vec2.create(),\n    updateCenterOfMass_ac = vec2.create(),\n    updateCenterOfMass_ca = vec2.create(),\n    updateCenterOfMass_cb = vec2.create(),\n    updateCenterOfMass_n = vec2.create();\n\n/**\n * Update the .centerOfMass property.\n * @method updateCenterOfMass\n */\nConvex.prototype.updateCenterOfMass = function(){\n    var triangles = this.triangles,\n        verts = this.vertices,\n        cm = this.centerOfMass,\n        centroid = updateCenterOfMass_centroid,\n        n = updateCenterOfMass_n,\n        a = updateCenterOfMass_a,\n        b = updateCenterOfMass_b,\n        c = updateCenterOfMass_c,\n        ac = updateCenterOfMass_ac,\n        ca = updateCenterOfMass_ca,\n        cb = updateCenterOfMass_cb,\n        centroid_times_mass = updateCenterOfMass_centroid_times_mass;\n\n    vec2.set(cm,0,0);\n    var totalArea = 0;\n\n    for(var i=0; i!==triangles.length; i++){\n        var t = triangles[i],\n            a = verts[t[0]],\n            b = verts[t[1]],\n            c = verts[t[2]];\n\n        vec2.centroid(centroid,a,b,c);\n\n        // Get mass for the triangle (density=1 in this case)\n        // http://math.stackexchange.com/questions/80198/area-of-triangle-via-vectors\n        var m = Convex.triangleArea(a,b,c);\n        totalArea += m;\n\n        // Add to center of mass\n        vec2.scale(centroid_times_mass, centroid, m);\n        vec2.add(cm, cm, centroid_times_mass);\n    }\n\n    vec2.scale(cm,cm,1/totalArea);\n};\n\n/**\n * Compute the mass moment of inertia of the Convex.\n * @method computeMomentOfInertia\n * @param  {Number} mass\n * @return {Number}\n * @see http://www.gamedev.net/topic/342822-moment-of-inertia-of-a-polygon-2d/\n */\nConvex.prototype.computeMomentOfInertia = function(mass){\n    var denom = 0.0,\n        numer = 0.0,\n        N = this.vertices.length;\n    for(var j = N-1, i = 0; i < N; j = i, i ++){\n        var p0 = this.vertices[j];\n        var p1 = this.vertices[i];\n        var a = Math.abs(vec2.crossLength(p0,p1));\n        var b = vec2.dot(p1,p1) + vec2.dot(p1,p0) + vec2.dot(p0,p0);\n        denom += a * b;\n        numer += a;\n    }\n    return (mass / 6.0) * (denom / numer);\n};\n\n/**\n * Updates the .boundingRadius property\n * @method updateBoundingRadius\n */\nConvex.prototype.updateBoundingRadius = function(){\n    var verts = this.vertices,\n        r2 = 0;\n\n    for(var i=0; i!==verts.length; i++){\n        var l2 = vec2.squaredLength(verts[i]);\n        if(l2 > r2){\n            r2 = l2;\n        }\n    }\n\n    this.boundingRadius = Math.sqrt(r2);\n};\n\n/**\n * Get the area of the triangle spanned by the three points a, b, c. The area is positive if the points are given in counter-clockwise order, otherwise negative.\n * @static\n * @method triangleArea\n * @param {Array} a\n * @param {Array} b\n * @param {Array} c\n * @return {Number}\n */\nConvex.triangleArea = function(a,b,c){\n    return (((b[0] - a[0])*(c[1] - a[1]))-((c[0] - a[0])*(b[1] - a[1]))) * 0.5;\n};\n\n/**\n * Update the .area\n * @method updateArea\n */\nConvex.prototype.updateArea = function(){\n    this.updateTriangles();\n    this.area = 0;\n\n    var triangles = this.triangles,\n        verts = this.vertices;\n    for(var i=0; i!==triangles.length; i++){\n        var t = triangles[i],\n            a = verts[t[0]],\n            b = verts[t[1]],\n            c = verts[t[2]];\n\n        // Get mass for the triangle (density=1 in this case)\n        var m = Convex.triangleArea(a,b,c);\n        this.area += m;\n    }\n};\n\n/**\n * @method computeAABB\n * @param  {AABB}   out\n * @param  {Array}  position\n * @param  {Number} angle\n */\nConvex.prototype.computeAABB = function(out, position, angle){\n    out.setFromPoints(this.vertices, position, angle, 0);\n};\n\nvar intersectConvex_rayStart = vec2.create();\nvar intersectConvex_rayEnd = vec2.create();\nvar intersectConvex_normal = vec2.create();\n\n/**\n * @method raycast\n * @param  {RaycastResult} result\n * @param  {Ray} ray\n * @param  {array} position\n * @param  {number} angle\n */\nConvex.prototype.raycast = function(result, ray, position, angle){\n    var rayStart = intersectConvex_rayStart;\n    var rayEnd = intersectConvex_rayEnd;\n    var normal = intersectConvex_normal;\n    var vertices = this.vertices;\n\n    // Transform to local shape space\n    vec2.toLocalFrame(rayStart, ray.from, position, angle);\n    vec2.toLocalFrame(rayEnd, ray.to, position, angle);\n\n    var n = vertices.length;\n\n    for (var i = 0; i < n && !result.shouldStop(ray); i++) {\n        var q1 = vertices[i];\n        var q2 = vertices[(i+1) % n];\n        var delta = vec2.getLineSegmentsIntersectionFraction(rayStart, rayEnd, q1, q2);\n\n        if(delta >= 0){\n            vec2.sub(normal, q2, q1);\n            vec2.rotate(normal, normal, -Math.PI / 2 + angle);\n            vec2.normalize(normal, normal);\n            ray.reportIntersection(result, delta, normal, i);\n        }\n    }\n};\n\n},{\"../math/polyk\":29,\"../math/vec2\":30,\"./Shape\":45,\"poly-decomp\":5}],41:[function(_dereq_,module,exports){\nvar Shape = _dereq_('./Shape')\n,    vec2 = _dereq_('../math/vec2')\n,    Utils = _dereq_('../utils/Utils');\n\nmodule.exports = Heightfield;\n\n/**\n * Heightfield shape class. Height data is given as an array. These data points are spread out evenly with a distance \"elementWidth\".\n * @class Heightfield\n * @extends Shape\n * @constructor\n * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink \"Shape\"}}{{/crossLink}} constructor.)\n * @param {array} [options.heights] An array of Y values that will be used to construct the terrain.\n * @param {Number} [options.minValue] Minimum value of the data points in the data array. Will be computed automatically if not given.\n * @param {Number} [options.maxValue] Maximum value.\n * @param {Number} [options.elementWidth=0.1] World spacing between the data points in X direction.\n *\n * @example\n *     // Generate some height data (y-values).\n *     var heights = [];\n *     for(var i = 0; i < 1000; i++){\n *         var y = 0.5 * Math.cos(0.2 * i);\n *         heights.push(y);\n *     }\n *\n *     // Create the heightfield shape\n *     var heightfieldShape = new Heightfield({\n *         heights: heights,\n *         elementWidth: 1 // Distance between the data points in X direction\n *     });\n *     var heightfieldBody = new Body();\n *     heightfieldBody.addShape(heightfieldShape);\n *     world.addBody(heightfieldBody);\n *\n * @todo Should use a scale property with X and Y direction instead of just elementWidth\n */\nfunction Heightfield(options){\n    if(Array.isArray(arguments[0])){\n        options = {\n            heights: arguments[0]\n        };\n\n        if(typeof(arguments[1]) === 'object'){\n            for(var key in arguments[1]){\n                options[key] = arguments[1][key];\n            }\n        }\n\n        console.warn('The Heightfield constructor signature has changed. Please use the following format: new Heightfield({ heights: [...], ... })');\n    }\n    options = options || {};\n\n    /**\n     * An array of numbers, or height values, that are spread out along the x axis.\n     * @property {array} heights\n     */\n    this.heights = options.heights ? options.heights.slice(0) : [];\n\n    /**\n     * Max value of the heights\n     * @property {number} maxValue\n     */\n    this.maxValue = options.maxValue || null;\n\n    /**\n     * Max value of the heights\n     * @property {number} minValue\n     */\n    this.minValue = options.minValue || null;\n\n    /**\n     * The width of each element\n     * @property {number} elementWidth\n     */\n    this.elementWidth = options.elementWidth || 0.1;\n\n    if(options.maxValue === undefined || options.minValue === undefined){\n        this.updateMaxMinValues();\n    }\n\n    options.type = Shape.HEIGHTFIELD;\n    Shape.call(this, options);\n}\nHeightfield.prototype = new Shape();\nHeightfield.prototype.constructor = Heightfield;\n\n/**\n * Update the .minValue and the .maxValue\n * @method updateMaxMinValues\n */\nHeightfield.prototype.updateMaxMinValues = function(){\n    var data = this.heights;\n    var maxValue = data[0];\n    var minValue = data[0];\n    for(var i=0; i !== data.length; i++){\n        var v = data[i];\n        if(v > maxValue){\n            maxValue = v;\n        }\n        if(v < minValue){\n            minValue = v;\n        }\n    }\n    this.maxValue = maxValue;\n    this.minValue = minValue;\n};\n\n/**\n * @method computeMomentOfInertia\n * @param  {Number} mass\n * @return {Number}\n */\nHeightfield.prototype.computeMomentOfInertia = function(mass){\n    return Number.MAX_VALUE;\n};\n\nHeightfield.prototype.updateBoundingRadius = function(){\n    this.boundingRadius = Number.MAX_VALUE;\n};\n\nHeightfield.prototype.updateArea = function(){\n    var data = this.heights,\n        area = 0;\n    for(var i=0; i<data.length-1; i++){\n        area += (data[i]+data[i+1]) / 2 * this.elementWidth;\n    }\n    this.area = area;\n};\n\nvar points = [\n    vec2.create(),\n    vec2.create(),\n    vec2.create(),\n    vec2.create()\n];\n\n/**\n * @method computeAABB\n * @param  {AABB}   out      The resulting AABB.\n * @param  {Array}  position\n * @param  {Number} angle\n */\nHeightfield.prototype.computeAABB = function(out, position, angle){\n    vec2.set(points[0], 0, this.maxValue);\n    vec2.set(points[1], this.elementWidth * this.heights.length, this.maxValue);\n    vec2.set(points[2], this.elementWidth * this.heights.length, this.minValue);\n    vec2.set(points[3], 0, this.minValue);\n    out.setFromPoints(points, position, angle);\n};\n\n/**\n * Get a line segment in the heightfield\n * @method getLineSegment\n * @param  {array} start Where to store the resulting start point\n * @param  {array} end Where to store the resulting end point\n * @param  {number} i\n */\nHeightfield.prototype.getLineSegment = function(start, end, i){\n    var data = this.heights;\n    var width = this.elementWidth;\n    vec2.set(start, i * width, data[i]);\n    vec2.set(end, (i + 1) * width, data[i + 1]);\n};\n\nHeightfield.prototype.getSegmentIndex = function(position){\n    return Math.floor(position[0] / this.elementWidth);\n};\n\nHeightfield.prototype.getClampedSegmentIndex = function(position){\n    var i = this.getSegmentIndex(position);\n    i = Math.min(this.heights.length, Math.max(i, 0)); // clamp\n    return i;\n};\n\nvar intersectHeightfield_hitPointWorld = vec2.create();\nvar intersectHeightfield_worldNormal = vec2.create();\nvar intersectHeightfield_l0 = vec2.create();\nvar intersectHeightfield_l1 = vec2.create();\nvar intersectHeightfield_localFrom = vec2.create();\nvar intersectHeightfield_localTo = vec2.create();\nvar intersectHeightfield_unit_y = vec2.fromValues(0,1);\n\n// Returns 1 if the lines intersect, otherwise 0.\nfunction getLineSegmentsIntersection (out, p0, p1, p2, p3) {\n\n    var s1_x, s1_y, s2_x, s2_y;\n    s1_x = p1[0] - p0[0];\n    s1_y = p1[1] - p0[1];\n    s2_x = p3[0] - p2[0];\n    s2_y = p3[1] - p2[1];\n\n    var s, t;\n    s = (-s1_y * (p0[0] - p2[0]) + s1_x * (p0[1] - p2[1])) / (-s2_x * s1_y + s1_x * s2_y);\n    t = ( s2_x * (p0[1] - p2[1]) - s2_y * (p0[0] - p2[0])) / (-s2_x * s1_y + s1_x * s2_y);\n    if (s >= 0 && s <= 1 && t >= 0 && t <= 1) { // Collision detected\n        var intX = p0[0] + (t * s1_x);\n        var intY = p0[1] + (t * s1_y);\n        out[0] = intX;\n        out[1] = intY;\n        return t;\n    }\n    return -1; // No collision\n}\n\n/**\n * @method raycast\n * @param  {RayResult} result\n * @param  {Ray} ray\n * @param  {array} position\n * @param  {number} angle\n */\nHeightfield.prototype.raycast = function(result, ray, position, angle){\n    var from = ray.from;\n    var to = ray.to;\n    var direction = ray.direction;\n\n    var hitPointWorld = intersectHeightfield_hitPointWorld;\n    var worldNormal = intersectHeightfield_worldNormal;\n    var l0 = intersectHeightfield_l0;\n    var l1 = intersectHeightfield_l1;\n    var localFrom = intersectHeightfield_localFrom;\n    var localTo = intersectHeightfield_localTo;\n\n    // get local ray start and end\n    vec2.toLocalFrame(localFrom, from, position, angle);\n    vec2.toLocalFrame(localTo, to, position, angle);\n\n    // Get the segment range\n    var i0 = this.getClampedSegmentIndex(localFrom);\n    var i1 = this.getClampedSegmentIndex(localTo);\n    if(i0 > i1){\n        var tmp = i0;\n        i0 = i1;\n        i1 = tmp;\n    }\n\n    // The segments\n    for(var i=0; i<this.heights.length - 1; i++){\n        this.getLineSegment(l0, l1, i);\n        var t = vec2.getLineSegmentsIntersectionFraction(localFrom, localTo, l0, l1);\n        if(t >= 0){\n            vec2.sub(worldNormal, l1, l0);\n            vec2.rotate(worldNormal, worldNormal, angle + Math.PI / 2);\n            vec2.normalize(worldNormal, worldNormal);\n            ray.reportIntersection(result, t, worldNormal, -1);\n            if(result.shouldStop(ray)){\n                return;\n            }\n        }\n    }\n};\n},{\"../math/vec2\":30,\"../utils/Utils\":57,\"./Shape\":45}],42:[function(_dereq_,module,exports){\nvar Shape = _dereq_('./Shape')\n,   vec2 = _dereq_('../math/vec2');\n\nmodule.exports = Line;\n\n/**\n * Line shape class. The line shape is along the x direction, and stretches from [-length/2, 0] to [length/2,0].\n * @class Line\n * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink \"Shape\"}}{{/crossLink}} constructor.)\n * @param {Number} [options.length=1] The total length of the line\n * @extends Shape\n * @constructor\n */\nfunction Line(options){\n    if(typeof(arguments[0]) === 'number'){\n        options = {\n            length: arguments[0]\n        };\n        console.warn('The Line constructor signature has changed. Please use the following format: new Line({ length: 1, ... })');\n    }\n    options = options || {};\n\n    /**\n     * Length of this line\n     * @property {Number} length\n     * @default 1\n     */\n    this.length = options.length || 1;\n\n    options.type = Shape.LINE;\n    Shape.call(this, options);\n}\nLine.prototype = new Shape();\nLine.prototype.constructor = Line;\n\nLine.prototype.computeMomentOfInertia = function(mass){\n    return mass * Math.pow(this.length,2) / 12;\n};\n\nLine.prototype.updateBoundingRadius = function(){\n    this.boundingRadius = this.length/2;\n};\n\nvar points = [vec2.create(),vec2.create()];\n\n/**\n * @method computeAABB\n * @param  {AABB}   out      The resulting AABB.\n * @param  {Array}  position\n * @param  {Number} angle\n */\nLine.prototype.computeAABB = function(out, position, angle){\n    var l2 = this.length / 2;\n    vec2.set(points[0], -l2,  0);\n    vec2.set(points[1],  l2,  0);\n    out.setFromPoints(points,position,angle,0);\n};\n\nvar raycast_hitPoint = vec2.create();\nvar raycast_normal = vec2.create();\nvar raycast_l0 = vec2.create();\nvar raycast_l1 = vec2.create();\nvar raycast_unit_y = vec2.fromValues(0,1);\n\n/**\n * @method raycast\n * @param  {RaycastResult} result\n * @param  {Ray} ray\n * @param  {number} angle\n * @param  {array} position\n */\nLine.prototype.raycast = function(result, ray, position, angle){\n    var from = ray.from;\n    var to = ray.to;\n\n    var l0 = raycast_l0;\n    var l1 = raycast_l1;\n\n    // get start and end of the line\n    var halfLen = this.length / 2;\n    vec2.set(l0, -halfLen, 0);\n    vec2.set(l1, halfLen, 0);\n    vec2.toGlobalFrame(l0, l0, position, angle);\n    vec2.toGlobalFrame(l1, l1, position, angle);\n\n    var fraction = vec2.getLineSegmentsIntersectionFraction(l0, l1, from, to);\n    if(fraction >= 0){\n        var normal = raycast_normal;\n        vec2.rotate(normal, raycast_unit_y, angle); // todo: this should depend on which side the ray comes from\n        ray.reportIntersection(result, fraction, normal, -1);\n    }\n};\n},{\"../math/vec2\":30,\"./Shape\":45}],43:[function(_dereq_,module,exports){\nvar Shape = _dereq_('./Shape')\n,   vec2 = _dereq_('../math/vec2');\n\nmodule.exports = Particle;\n\n/**\n * Particle shape class.\n * @class Particle\n * @constructor\n * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink \"Shape\"}}{{/crossLink}} constructor.)\n * @extends Shape\n */\nfunction Particle(options){\n    options = options || {};\n\toptions.type = Shape.PARTICLE;\n    Shape.call(this, options);\n}\nParticle.prototype = new Shape();\nParticle.prototype.constructor = Particle;\n\nParticle.prototype.computeMomentOfInertia = function(mass){\n    return 0; // Can't rotate a particle\n};\n\nParticle.prototype.updateBoundingRadius = function(){\n    this.boundingRadius = 0;\n};\n\n/**\n * @method computeAABB\n * @param  {AABB}   out\n * @param  {Array}  position\n * @param  {Number} angle\n */\nParticle.prototype.computeAABB = function(out, position, angle){\n    vec2.copy(out.lowerBound, position);\n    vec2.copy(out.upperBound, position);\n};\n\n},{\"../math/vec2\":30,\"./Shape\":45}],44:[function(_dereq_,module,exports){\nvar Shape =  _dereq_('./Shape')\n,    vec2 =  _dereq_('../math/vec2')\n,    Utils = _dereq_('../utils/Utils');\n\nmodule.exports = Plane;\n\n/**\n * Plane shape class. The plane is facing in the Y direction.\n * @class Plane\n * @extends Shape\n * @constructor\n * @param {object} [options] (Note that this options object will be passed on to the {{#crossLink \"Shape\"}}{{/crossLink}} constructor.)\n */\nfunction Plane(options){\n    options = options || {};\n    options.type = Shape.PLANE;\n    Shape.call(this, options);\n}\nPlane.prototype = new Shape();\nPlane.prototype.constructor = Plane;\n\n/**\n * Compute moment of inertia\n * @method computeMomentOfInertia\n */\nPlane.prototype.computeMomentOfInertia = function(mass){\n    return 0; // Plane is infinite. The inertia should therefore be infinty but by convention we set 0 here\n};\n\n/**\n * Update the bounding radius\n * @method updateBoundingRadius\n */\nPlane.prototype.updateBoundingRadius = function(){\n    this.boundingRadius = Number.MAX_VALUE;\n};\n\n/**\n * @method computeAABB\n * @param  {AABB}   out\n * @param  {Array}  position\n * @param  {Number} angle\n */\nPlane.prototype.computeAABB = function(out, position, angle){\n    var a = angle % (2 * Math.PI);\n    var set = vec2.set;\n    var max = Number.MAX_VALUE;\n    var lowerBound = out.lowerBound;\n    var upperBound = out.upperBound;\n\n    if(a === 0){\n        // y goes from -inf to 0\n        set(lowerBound, -max, -max);\n        set(upperBound,  max,  0);\n\n    } else if(a === Math.PI / 2){\n\n        // x goes from 0 to inf\n        set(lowerBound, 0, -max);\n        set(upperBound,      max,  max);\n\n    } else if(a === Math.PI){\n\n        // y goes from 0 to inf\n        set(lowerBound, -max, 0);\n        set(upperBound,  max, max);\n\n    } else if(a === 3*Math.PI/2){\n\n        // x goes from -inf to 0\n        set(lowerBound, -max,     -max);\n        set(upperBound,  0,  max);\n\n    } else {\n\n        // Set max bounds\n        set(lowerBound, -max, -max);\n        set(upperBound,  max,  max);\n    }\n\n    vec2.add(lowerBound, lowerBound, position);\n    vec2.add(upperBound, upperBound, position);\n};\n\nPlane.prototype.updateArea = function(){\n    this.area = Number.MAX_VALUE;\n};\n\nvar intersectPlane_planePointToFrom = vec2.create();\nvar intersectPlane_dir_scaled_with_t = vec2.create();\nvar intersectPlane_hitPoint = vec2.create();\nvar intersectPlane_normal = vec2.create();\nvar intersectPlane_len = vec2.create();\n\n/**\n * @method raycast\n * @param  {RayResult} result\n * @param  {Ray} ray\n * @param  {array} position\n * @param  {number} angle\n */\nPlane.prototype.raycast = function(result, ray, position, angle){\n    var from = ray.from;\n    var to = ray.to;\n    var direction = ray.direction;\n    var planePointToFrom = intersectPlane_planePointToFrom;\n    var dir_scaled_with_t = intersectPlane_dir_scaled_with_t;\n    var hitPoint = intersectPlane_hitPoint;\n    var normal = intersectPlane_normal;\n    var len = intersectPlane_len;\n\n    // Get plane normal\n    vec2.set(normal, 0, 1);\n    vec2.rotate(normal, normal, angle);\n\n    vec2.sub(len, from, position);\n    var planeToFrom = vec2.dot(len, normal);\n    vec2.sub(len, to, position);\n    var planeToTo = vec2.dot(len, normal);\n\n    if(planeToFrom * planeToTo > 0){\n        // \"from\" and \"to\" are on the same side of the plane... bail out\n        return;\n    }\n\n    if(vec2.squaredDistance(from, to) < planeToFrom * planeToFrom){\n        return;\n    }\n\n    var n_dot_dir = vec2.dot(normal, direction);\n\n    vec2.sub(planePointToFrom, from, position);\n    var t = -vec2.dot(normal, planePointToFrom) / n_dot_dir / ray.length;\n\n    ray.reportIntersection(result, t, normal, -1);\n};\n},{\"../math/vec2\":30,\"../utils/Utils\":57,\"./Shape\":45}],45:[function(_dereq_,module,exports){\nmodule.exports = Shape;\n\nvar vec2 = _dereq_('../math/vec2');\n\n/**\n * Base class for shapes.\n * @class Shape\n * @constructor\n * @param {object} [options]\n * @param {array} [options.position]\n * @param {number} [options.angle=0]\n * @param {number} [options.collisionGroup=1]\n * @param {number} [options.collisionMask=1]\n * @param {boolean} [options.sensor=false]\n * @param {boolean} [options.collisionResponse=true]\n * @param {object} [options.type=0]\n */\nfunction Shape(options){\n    options = options || {};\n\n    /**\n     * The body this shape is attached to. A shape can only be attached to a single body.\n     * @property {Body} body\n     */\n    this.body = null;\n\n    /**\n     * Body-local position of the shape.\n     * @property {Array} position\n     */\n    this.position = vec2.fromValues(0,0);\n    if(options.position){\n        vec2.copy(this.position, options.position);\n    }\n\n    /**\n     * Body-local angle of the shape.\n     * @property {number} angle\n     */\n    this.angle = options.angle || 0;\n\n    /**\n     * The type of the shape. One of:\n     *\n     * * {{#crossLink \"Shape/CIRCLE:property\"}}Shape.CIRCLE{{/crossLink}}\n     * * {{#crossLink \"Shape/PARTICLE:property\"}}Shape.PARTICLE{{/crossLink}}\n     * * {{#crossLink \"Shape/PLANE:property\"}}Shape.PLANE{{/crossLink}}\n     * * {{#crossLink \"Shape/CONVEX:property\"}}Shape.CONVEX{{/crossLink}}\n     * * {{#crossLink \"Shape/LINE:property\"}}Shape.LINE{{/crossLink}}\n     * * {{#crossLink \"Shape/BOX:property\"}}Shape.BOX{{/crossLink}}\n     * * {{#crossLink \"Shape/CAPSULE:property\"}}Shape.CAPSULE{{/crossLink}}\n     * * {{#crossLink \"Shape/HEIGHTFIELD:property\"}}Shape.HEIGHTFIELD{{/crossLink}}\n     *\n     * @property {number} type\n     */\n    this.type = options.type || 0;\n\n    /**\n     * Shape object identifier.\n     * @type {Number}\n     * @property id\n     */\n    this.id = Shape.idCounter++;\n\n    /**\n     * Bounding circle radius of this shape\n     * @property boundingRadius\n     * @type {Number}\n     */\n    this.boundingRadius = 0;\n\n    /**\n     * Collision group that this shape belongs to (bit mask). See <a href=\"http://www.aurelienribon.com/blog/2011/07/box2d-tutorial-collision-filtering/\">this tutorial</a>.\n     * @property collisionGroup\n     * @type {Number}\n     * @example\n     *     // Setup bits for each available group\n     *     var PLAYER = Math.pow(2,0),\n     *         ENEMY =  Math.pow(2,1),\n     *         GROUND = Math.pow(2,2)\n     *\n     *     // Put shapes into their groups\n     *     player1Shape.collisionGroup = PLAYER;\n     *     player2Shape.collisionGroup = PLAYER;\n     *     enemyShape  .collisionGroup = ENEMY;\n     *     groundShape .collisionGroup = GROUND;\n     *\n     *     // Assign groups that each shape collide with.\n     *     // Note that the players can collide with ground and enemies, but not with other players.\n     *     player1Shape.collisionMask = ENEMY | GROUND;\n     *     player2Shape.collisionMask = ENEMY | GROUND;\n     *     enemyShape  .collisionMask = PLAYER | GROUND;\n     *     groundShape .collisionMask = PLAYER | ENEMY;\n     *\n     * @example\n     *     // How collision check is done\n     *     if(shapeA.collisionGroup & shapeB.collisionMask)!=0 && (shapeB.collisionGroup & shapeA.collisionMask)!=0){\n     *         // The shapes will collide\n     *     }\n     */\n    this.collisionGroup = options.collisionGroup !== undefined ? options.collisionGroup : 1;\n\n    /**\n     * Whether to produce contact forces when in contact with other bodies. Note that contacts will be generated, but they will be disabled. That means that this shape will move through other body shapes, but it will still trigger contact events, etc.\n     * @property {Boolean} collisionResponse\n     */\n    this.collisionResponse = options.collisionResponse !== undefined ? options.collisionResponse : true;\n\n    /**\n     * Collision mask of this shape. See .collisionGroup.\n     * @property collisionMask\n     * @type {Number}\n     */\n    this.collisionMask = options.collisionMask !== undefined ? options.collisionMask : 1;\n\n    /**\n     * Material to use in collisions for this Shape. If this is set to null, the world will use default material properties instead.\n     * @property material\n     * @type {Material}\n     */\n    this.material = options.material || null;\n\n    /**\n     * Area of this shape.\n     * @property area\n     * @type {Number}\n     */\n    this.area = 0;\n\n    /**\n     * Set to true if you want this shape to be a sensor. A sensor does not generate contacts, but it still reports contact events. This is good if you want to know if a shape is overlapping another shape, without them generating contacts.\n     * @property {Boolean} sensor\n     */\n    this.sensor = options.sensor !== undefined ? options.sensor : false;\n\n    if(this.type){\n        this.updateBoundingRadius();\n    }\n\n    this.updateArea();\n}\n\nShape.idCounter = 0;\n\n/**\n * @static\n * @property {Number} CIRCLE\n */\nShape.CIRCLE =      1;\n\n/**\n * @static\n * @property {Number} PARTICLE\n */\nShape.PARTICLE =    2;\n\n/**\n * @static\n * @property {Number} PLANE\n */\nShape.PLANE =       4;\n\n/**\n * @static\n * @property {Number} CONVEX\n */\nShape.CONVEX =      8;\n\n/**\n * @static\n * @property {Number} LINE\n */\nShape.LINE =        16;\n\n/**\n * @static\n * @property {Number} BOX\n */\nShape.BOX =   32;\n\nObject.defineProperty(Shape, 'RECTANGLE', {\n    get: function() {\n        console.warn('Shape.RECTANGLE is deprecated, use Shape.BOX instead.');\n        return Shape.BOX;\n    }\n});\n\n/**\n * @static\n * @property {Number} CAPSULE\n */\nShape.CAPSULE =     64;\n\n/**\n * @static\n * @property {Number} HEIGHTFIELD\n */\nShape.HEIGHTFIELD = 128;\n\n/**\n * Should return the moment of inertia around the Z axis of the body given the total mass. See <a href=\"http://en.wikipedia.org/wiki/List_of_moments_of_inertia\">Wikipedia's list of moments of inertia</a>.\n * @method computeMomentOfInertia\n * @param  {Number} mass\n * @return {Number} If the inertia is infinity or if the object simply isn't possible to rotate, return 0.\n */\nShape.prototype.computeMomentOfInertia = function(mass){};\n\n/**\n * Returns the bounding circle radius of this shape.\n * @method updateBoundingRadius\n * @return {Number}\n */\nShape.prototype.updateBoundingRadius = function(){};\n\n/**\n * Update the .area property of the shape.\n * @method updateArea\n */\nShape.prototype.updateArea = function(){\n    // To be implemented in all subclasses\n};\n\n/**\n * Compute the world axis-aligned bounding box (AABB) of this shape.\n * @method computeAABB\n * @param  {AABB} out The resulting AABB.\n * @param  {Array} position World position of the shape.\n * @param  {Number} angle World angle of the shape.\n */\nShape.prototype.computeAABB = function(out, position, angle){\n    // To be implemented in each subclass\n};\n\n/**\n * Perform raycasting on this shape.\n * @method raycast\n * @param  {RayResult} result Where to store the resulting data.\n * @param  {Ray} ray The Ray that you want to use for raycasting.\n * @param  {array} position World position of the shape (the .position property will be ignored).\n * @param  {number} angle World angle of the shape (the .angle property will be ignored).\n */\nShape.prototype.raycast = function(result, ray, position, angle){\n    // To be implemented in each subclass\n};\n},{\"../math/vec2\":30}],46:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2')\n,   Solver = _dereq_('./Solver')\n,   Utils = _dereq_('../utils/Utils')\n,   FrictionEquation = _dereq_('../equations/FrictionEquation');\n\nmodule.exports = GSSolver;\n\n/**\n * Iterative Gauss-Seidel constraint equation solver.\n *\n * @class GSSolver\n * @constructor\n * @extends Solver\n * @param {Object} [options]\n * @param {Number} [options.iterations=10]\n * @param {Number} [options.tolerance=0]\n */\nfunction GSSolver(options){\n    Solver.call(this,options,Solver.GS);\n    options = options || {};\n\n    /**\n     * The max number of iterations to do when solving. More gives better results, but is more expensive.\n     * @property iterations\n     * @type {Number}\n     */\n    this.iterations = options.iterations || 10;\n\n    /**\n     * The error tolerance, per constraint. If the total error is below this limit, the solver will stop iterating. Set to zero for as good solution as possible, but to something larger than zero to make computations faster.\n     * @property tolerance\n     * @type {Number}\n     * @default 1e-7\n     */\n    this.tolerance = options.tolerance || 1e-7;\n\n    this.arrayStep = 30;\n    this.lambda = new Utils.ARRAY_TYPE(this.arrayStep);\n    this.Bs =     new Utils.ARRAY_TYPE(this.arrayStep);\n    this.invCs =  new Utils.ARRAY_TYPE(this.arrayStep);\n\n    /**\n     * Set to true to set all right hand side terms to zero when solving. Can be handy for a few applications.\n     * @property useZeroRHS\n     * @type {Boolean}\n     */\n    this.useZeroRHS = false;\n\n    /**\n     * Number of solver iterations that are done to approximate normal forces. When these iterations are done, friction force will be computed from the contact normal forces. These friction forces will override any other friction forces set from the World for example.\n     * The solver will use less iterations if the solution is below the .tolerance.\n     * @property frictionIterations\n     * @type {Number}\n     */\n    this.frictionIterations = 0;\n\n    /**\n     * The number of iterations that were made during the last solve. If .tolerance is zero, this value will always be equal to .iterations, but if .tolerance is larger than zero, and the solver can quit early, then this number will be somewhere between 1 and .iterations.\n     * @property {Number} usedIterations\n     */\n    this.usedIterations = 0;\n}\nGSSolver.prototype = new Solver();\nGSSolver.prototype.constructor = GSSolver;\n\nfunction setArrayZero(array){\n    var l = array.length;\n    while(l--){\n        array[l] = +0.0;\n    }\n}\n\n/**\n * Solve the system of equations\n * @method solve\n * @param  {Number}  h       Time step\n * @param  {World}   world    World to solve\n */\nGSSolver.prototype.solve = function(h, world){\n\n    this.sortEquations();\n\n    var iter = 0,\n        maxIter = this.iterations,\n        maxFrictionIter = this.frictionIterations,\n        equations = this.equations,\n        Neq = equations.length,\n        tolSquared = Math.pow(this.tolerance*Neq, 2),\n        bodies = world.bodies,\n        Nbodies = world.bodies.length,\n        add = vec2.add,\n        set = vec2.set,\n        useZeroRHS = this.useZeroRHS,\n        lambda = this.lambda;\n\n    this.usedIterations = 0;\n\n    if(Neq){\n        for(var i=0; i!==Nbodies; i++){\n            var b = bodies[i];\n\n            // Update solve mass\n            b.updateSolveMassProperties();\n        }\n    }\n\n    // Things that does not change during iteration can be computed once\n    if(lambda.length < Neq){\n        lambda = this.lambda =  new Utils.ARRAY_TYPE(Neq + this.arrayStep);\n        this.Bs =               new Utils.ARRAY_TYPE(Neq + this.arrayStep);\n        this.invCs =            new Utils.ARRAY_TYPE(Neq + this.arrayStep);\n    }\n    setArrayZero(lambda);\n    var invCs = this.invCs,\n        Bs = this.Bs,\n        lambda = this.lambda;\n\n    for(var i=0; i!==equations.length; i++){\n        var c = equations[i];\n        if(c.timeStep !== h || c.needsUpdate){\n            c.timeStep = h;\n            c.update();\n        }\n        Bs[i] =     c.computeB(c.a,c.b,h);\n        invCs[i] =  c.computeInvC(c.epsilon);\n    }\n\n    var q, B, c, deltalambdaTot,i,j;\n\n    if(Neq !== 0){\n\n        for(i=0; i!==Nbodies; i++){\n            var b = bodies[i];\n\n            // Reset vlambda\n            b.resetConstraintVelocity();\n        }\n\n        if(maxFrictionIter){\n            // Iterate over contact equations to get normal forces\n            for(iter=0; iter!==maxFrictionIter; iter++){\n\n                // Accumulate the total error for each iteration.\n                deltalambdaTot = 0.0;\n\n                for(j=0; j!==Neq; j++){\n                    c = equations[j];\n\n                    var deltalambda = GSSolver.iterateEquation(j,c,c.epsilon,Bs,invCs,lambda,useZeroRHS,h,iter);\n                    deltalambdaTot += Math.abs(deltalambda);\n                }\n\n                this.usedIterations++;\n\n                // If the total error is small enough - stop iterate\n                if(deltalambdaTot*deltalambdaTot <= tolSquared){\n                    break;\n                }\n            }\n\n            GSSolver.updateMultipliers(equations, lambda, 1/h);\n\n            // Set computed friction force\n            for(j=0; j!==Neq; j++){\n                var eq = equations[j];\n                if(eq instanceof FrictionEquation){\n                    var f = 0.0;\n                    for(var k=0; k!==eq.contactEquations.length; k++){\n                        f += eq.contactEquations[k].multiplier;\n                    }\n                    f *= eq.frictionCoefficient / eq.contactEquations.length;\n                    eq.maxForce =  f;\n                    eq.minForce = -f;\n                }\n            }\n        }\n\n        // Iterate over all equations\n        for(iter=0; iter!==maxIter; iter++){\n\n            // Accumulate the total error for each iteration.\n            deltalambdaTot = 0.0;\n\n            for(j=0; j!==Neq; j++){\n                c = equations[j];\n\n                var deltalambda = GSSolver.iterateEquation(j,c,c.epsilon,Bs,invCs,lambda,useZeroRHS,h,iter);\n                deltalambdaTot += Math.abs(deltalambda);\n            }\n\n            this.usedIterations++;\n\n            // If the total error is small enough - stop iterate\n            if(deltalambdaTot*deltalambdaTot <= tolSquared){\n                break;\n            }\n        }\n\n        // Add result to velocity\n        for(i=0; i!==Nbodies; i++){\n            bodies[i].addConstraintVelocity();\n        }\n\n        GSSolver.updateMultipliers(equations, lambda, 1/h);\n    }\n};\n\n// Sets the .multiplier property of each equation\nGSSolver.updateMultipliers = function(equations, lambda, invDt){\n    // Set the .multiplier property of each equation\n    var l = equations.length;\n    while(l--){\n        equations[l].multiplier = lambda[l] * invDt;\n    }\n};\n\nGSSolver.iterateEquation = function(j,eq,eps,Bs,invCs,lambda,useZeroRHS,dt,iter){\n    // Compute iteration\n    var B = Bs[j],\n        invC = invCs[j],\n        lambdaj = lambda[j],\n        GWlambda = eq.computeGWlambda();\n\n    var maxForce = eq.maxForce,\n        minForce = eq.minForce;\n\n    if(useZeroRHS){\n        B = 0;\n    }\n\n    var deltalambda = invC * ( B - GWlambda - eps * lambdaj );\n\n    // Clamp if we are not within the min/max interval\n    var lambdaj_plus_deltalambda = lambdaj + deltalambda;\n    if(lambdaj_plus_deltalambda < minForce*dt){\n        deltalambda = minForce*dt - lambdaj;\n    } else if(lambdaj_plus_deltalambda > maxForce*dt){\n        deltalambda = maxForce*dt - lambdaj;\n    }\n    lambda[j] += deltalambda;\n    eq.addToWlambda(deltalambda);\n\n    return deltalambda;\n};\n\n},{\"../equations/FrictionEquation\":23,\"../math/vec2\":30,\"../utils/Utils\":57,\"./Solver\":47}],47:[function(_dereq_,module,exports){\nvar Utils = _dereq_('../utils/Utils')\n,   EventEmitter = _dereq_('../events/EventEmitter');\n\nmodule.exports = Solver;\n\n/**\n * Base class for constraint solvers.\n * @class Solver\n * @constructor\n * @extends EventEmitter\n */\nfunction Solver(options,type){\n    options = options || {};\n\n    EventEmitter.call(this);\n\n    this.type = type;\n\n    /**\n     * Current equations in the solver.\n     *\n     * @property equations\n     * @type {Array}\n     */\n    this.equations = [];\n\n    /**\n     * Function that is used to sort all equations before each solve.\n     * @property equationSortFunction\n     * @type {function|boolean}\n     */\n    this.equationSortFunction = options.equationSortFunction || false;\n}\nSolver.prototype = new EventEmitter();\nSolver.prototype.constructor = Solver;\n\n/**\n * Method to be implemented in each subclass\n * @method solve\n * @param  {Number} dt\n * @param  {World} world\n */\nSolver.prototype.solve = function(dt,world){\n    throw new Error(\"Solver.solve should be implemented by subclasses!\");\n};\n\nvar mockWorld = {bodies:[]};\n\n/**\n * Solves all constraints in an island.\n * @method solveIsland\n * @param  {Number} dt\n * @param  {Island} island\n */\nSolver.prototype.solveIsland = function(dt,island){\n\n    this.removeAllEquations();\n\n    if(island.equations.length){\n        // Add equations to solver\n        this.addEquations(island.equations);\n        mockWorld.bodies.length = 0;\n        island.getBodies(mockWorld.bodies);\n\n        // Solve\n        if(mockWorld.bodies.length){\n            this.solve(dt,mockWorld);\n        }\n    }\n};\n\n/**\n * Sort all equations using the .equationSortFunction. Should be called by subclasses before solving.\n * @method sortEquations\n */\nSolver.prototype.sortEquations = function(){\n    if(this.equationSortFunction){\n        this.equations.sort(this.equationSortFunction);\n    }\n};\n\n/**\n * Add an equation to be solved.\n *\n * @method addEquation\n * @param {Equation} eq\n */\nSolver.prototype.addEquation = function(eq){\n    if(eq.enabled){\n        this.equations.push(eq);\n    }\n};\n\n/**\n * Add equations. Same as .addEquation, but this time the argument is an array of Equations\n *\n * @method addEquations\n * @param {Array} eqs\n */\nSolver.prototype.addEquations = function(eqs){\n    //Utils.appendArray(this.equations,eqs);\n    for(var i=0, N=eqs.length; i!==N; i++){\n        var eq = eqs[i];\n        if(eq.enabled){\n            this.equations.push(eq);\n        }\n    }\n};\n\n/**\n * Remove an equation.\n *\n * @method removeEquation\n * @param {Equation} eq\n */\nSolver.prototype.removeEquation = function(eq){\n    var i = this.equations.indexOf(eq);\n    if(i !== -1){\n        this.equations.splice(i,1);\n    }\n};\n\n/**\n * Remove all currently added equations.\n *\n * @method removeAllEquations\n */\nSolver.prototype.removeAllEquations = function(){\n    this.equations.length=0;\n};\n\nSolver.GS = 1;\nSolver.ISLAND = 2;\n\n},{\"../events/EventEmitter\":26,\"../utils/Utils\":57}],48:[function(_dereq_,module,exports){\nvar ContactEquation = _dereq_('../equations/ContactEquation');\nvar Pool = _dereq_('./Pool');\n\nmodule.exports = ContactEquationPool;\n\n/**\n * @class\n */\nfunction ContactEquationPool() {\n\tPool.apply(this, arguments);\n}\nContactEquationPool.prototype = new Pool();\nContactEquationPool.prototype.constructor = ContactEquationPool;\n\n/**\n * @method create\n * @return {ContactEquation}\n */\nContactEquationPool.prototype.create = function () {\n\treturn new ContactEquation();\n};\n\n/**\n * @method destroy\n * @param {ContactEquation} equation\n * @return {ContactEquationPool}\n */\nContactEquationPool.prototype.destroy = function (equation) {\n\tequation.bodyA = equation.bodyB = null;\n\treturn this;\n};\n\n},{\"../equations/ContactEquation\":21,\"./Pool\":55}],49:[function(_dereq_,module,exports){\nvar FrictionEquation = _dereq_('../equations/FrictionEquation');\nvar Pool = _dereq_('./Pool');\n\nmodule.exports = FrictionEquationPool;\n\n/**\n * @class\n */\nfunction FrictionEquationPool() {\n\tPool.apply(this, arguments);\n}\nFrictionEquationPool.prototype = new Pool();\nFrictionEquationPool.prototype.constructor = FrictionEquationPool;\n\n/**\n * @method create\n * @return {FrictionEquation}\n */\nFrictionEquationPool.prototype.create = function () {\n\treturn new FrictionEquation();\n};\n\n/**\n * @method destroy\n * @param {FrictionEquation} equation\n * @return {FrictionEquationPool}\n */\nFrictionEquationPool.prototype.destroy = function (equation) {\n\tequation.bodyA = equation.bodyB = null;\n\treturn this;\n};\n\n},{\"../equations/FrictionEquation\":23,\"./Pool\":55}],50:[function(_dereq_,module,exports){\nvar IslandNode = _dereq_('../world/IslandNode');\nvar Pool = _dereq_('./Pool');\n\nmodule.exports = IslandNodePool;\n\n/**\n * @class\n */\nfunction IslandNodePool() {\n\tPool.apply(this, arguments);\n}\nIslandNodePool.prototype = new Pool();\nIslandNodePool.prototype.constructor = IslandNodePool;\n\n/**\n * @method create\n * @return {IslandNode}\n */\nIslandNodePool.prototype.create = function () {\n\treturn new IslandNode();\n};\n\n/**\n * @method destroy\n * @param {IslandNode} node\n * @return {IslandNodePool}\n */\nIslandNodePool.prototype.destroy = function (node) {\n\tnode.reset();\n\treturn this;\n};\n\n},{\"../world/IslandNode\":60,\"./Pool\":55}],51:[function(_dereq_,module,exports){\nvar Island = _dereq_('../world/Island');\nvar Pool = _dereq_('./Pool');\n\nmodule.exports = IslandPool;\n\n/**\n * @class\n */\nfunction IslandPool() {\n\tPool.apply(this, arguments);\n}\nIslandPool.prototype = new Pool();\nIslandPool.prototype.constructor = IslandPool;\n\n/**\n * @method create\n * @return {Island}\n */\nIslandPool.prototype.create = function () {\n\treturn new Island();\n};\n\n/**\n * @method destroy\n * @param {Island} island\n * @return {IslandPool}\n */\nIslandPool.prototype.destroy = function (island) {\n\tisland.reset();\n\treturn this;\n};\n\n},{\"../world/Island\":58,\"./Pool\":55}],52:[function(_dereq_,module,exports){\nvar TupleDictionary = _dereq_('./TupleDictionary');\nvar OverlapKeeperRecord = _dereq_('./OverlapKeeperRecord');\nvar OverlapKeeperRecordPool = _dereq_('./OverlapKeeperRecordPool');\nvar Utils = _dereq_('./Utils');\n\nmodule.exports = OverlapKeeper;\n\n/**\n * Keeps track of overlaps in the current state and the last step state.\n * @class OverlapKeeper\n * @constructor\n */\nfunction OverlapKeeper() {\n    this.overlappingShapesLastState = new TupleDictionary();\n    this.overlappingShapesCurrentState = new TupleDictionary();\n    this.recordPool = new OverlapKeeperRecordPool({ size: 16 });\n    this.tmpDict = new TupleDictionary();\n    this.tmpArray1 = [];\n}\n\n/**\n * Ticks one step forward in time. This will move the current overlap state to the \"old\" overlap state, and create a new one as current.\n * @method tick\n */\nOverlapKeeper.prototype.tick = function() {\n    var last = this.overlappingShapesLastState;\n    var current = this.overlappingShapesCurrentState;\n\n    // Save old objects into pool\n    var l = last.keys.length;\n    while(l--){\n        var key = last.keys[l];\n        var lastObject = last.getByKey(key);\n        var currentObject = current.getByKey(key);\n        if(lastObject){\n            // The record is only used in the \"last\" dict, and will be removed. We might as well pool it.\n            this.recordPool.release(lastObject);\n        }\n    }\n\n    // Clear last object\n    last.reset();\n\n    // Transfer from new object to old\n    last.copy(current);\n\n    // Clear current object\n    current.reset();\n};\n\n/**\n * @method setOverlapping\n * @param {Body} bodyA\n * @param {Body} shapeA\n * @param {Body} bodyB\n * @param {Body} shapeB\n */\nOverlapKeeper.prototype.setOverlapping = function(bodyA, shapeA, bodyB, shapeB) {\n    var last = this.overlappingShapesLastState;\n    var current = this.overlappingShapesCurrentState;\n\n    // Store current contact state\n    if(!current.get(shapeA.id, shapeB.id)){\n        var data = this.recordPool.get();\n        data.set(bodyA, shapeA, bodyB, shapeB);\n        current.set(shapeA.id, shapeB.id, data);\n    }\n};\n\nOverlapKeeper.prototype.getNewOverlaps = function(result){\n    return this.getDiff(this.overlappingShapesLastState, this.overlappingShapesCurrentState, result);\n};\n\nOverlapKeeper.prototype.getEndOverlaps = function(result){\n    return this.getDiff(this.overlappingShapesCurrentState, this.overlappingShapesLastState, result);\n};\n\n/**\n * Checks if two bodies are currently overlapping.\n * @method bodiesAreOverlapping\n * @param  {Body} bodyA\n * @param  {Body} bodyB\n * @return {boolean}\n */\nOverlapKeeper.prototype.bodiesAreOverlapping = function(bodyA, bodyB){\n    var current = this.overlappingShapesCurrentState;\n    var l = current.keys.length;\n    while(l--){\n        var key = current.keys[l];\n        var data = current.data[key];\n        if((data.bodyA === bodyA && data.bodyB === bodyB) || data.bodyA === bodyB && data.bodyB === bodyA){\n            return true;\n        }\n    }\n    return false;\n};\n\nOverlapKeeper.prototype.getDiff = function(dictA, dictB, result){\n    var result = result || [];\n    var last = dictA;\n    var current = dictB;\n\n    result.length = 0;\n\n    var l = current.keys.length;\n    while(l--){\n        var key = current.keys[l];\n        var data = current.data[key];\n\n        if(!data){\n            throw new Error('Key '+key+' had no data!');\n        }\n\n        var lastData = last.data[key];\n        if(!lastData){\n            // Not overlapping in last state, but in current.\n            result.push(data);\n        }\n    }\n\n    return result;\n};\n\nOverlapKeeper.prototype.isNewOverlap = function(shapeA, shapeB){\n    var idA = shapeA.id|0,\n        idB = shapeB.id|0;\n    var last = this.overlappingShapesLastState;\n    var current = this.overlappingShapesCurrentState;\n    // Not in last but in new\n    return !!!last.get(idA, idB) && !!current.get(idA, idB);\n};\n\nOverlapKeeper.prototype.getNewBodyOverlaps = function(result){\n    this.tmpArray1.length = 0;\n    var overlaps = this.getNewOverlaps(this.tmpArray1);\n    return this.getBodyDiff(overlaps, result);\n};\n\nOverlapKeeper.prototype.getEndBodyOverlaps = function(result){\n    this.tmpArray1.length = 0;\n    var overlaps = this.getEndOverlaps(this.tmpArray1);\n    return this.getBodyDiff(overlaps, result);\n};\n\nOverlapKeeper.prototype.getBodyDiff = function(overlaps, result){\n    result = result || [];\n    var accumulator = this.tmpDict;\n\n    var l = overlaps.length;\n\n    while(l--){\n        var data = overlaps[l];\n\n        // Since we use body id's for the accumulator, these will be a subset of the original one\n        accumulator.set(data.bodyA.id|0, data.bodyB.id|0, data);\n    }\n\n    l = accumulator.keys.length;\n    while(l--){\n        var data = accumulator.getByKey(accumulator.keys[l]);\n        if(data){\n            result.push(data.bodyA, data.bodyB);\n        }\n    }\n\n    accumulator.reset();\n\n    return result;\n};\n\n},{\"./OverlapKeeperRecord\":53,\"./OverlapKeeperRecordPool\":54,\"./TupleDictionary\":56,\"./Utils\":57}],53:[function(_dereq_,module,exports){\nmodule.exports = OverlapKeeperRecord;\n\n/**\n * Overlap data container for the OverlapKeeper\n * @class OverlapKeeperRecord\n * @constructor\n * @param {Body} bodyA\n * @param {Shape} shapeA\n * @param {Body} bodyB\n * @param {Shape} shapeB\n */\nfunction OverlapKeeperRecord(bodyA, shapeA, bodyB, shapeB){\n    /**\n     * @property {Shape} shapeA\n     */\n    this.shapeA = shapeA;\n    /**\n     * @property {Shape} shapeB\n     */\n    this.shapeB = shapeB;\n    /**\n     * @property {Body} bodyA\n     */\n    this.bodyA = bodyA;\n    /**\n     * @property {Body} bodyB\n     */\n    this.bodyB = bodyB;\n}\n\n/**\n * Set the data for the record\n * @method set\n * @param {Body} bodyA\n * @param {Shape} shapeA\n * @param {Body} bodyB\n * @param {Shape} shapeB\n */\nOverlapKeeperRecord.prototype.set = function(bodyA, shapeA, bodyB, shapeB){\n    OverlapKeeperRecord.call(this, bodyA, shapeA, bodyB, shapeB);\n};\n\n},{}],54:[function(_dereq_,module,exports){\nvar OverlapKeeperRecord = _dereq_('./OverlapKeeperRecord');\nvar Pool = _dereq_('./Pool');\n\nmodule.exports = OverlapKeeperRecordPool;\n\n/**\n * @class\n */\nfunction OverlapKeeperRecordPool() {\n\tPool.apply(this, arguments);\n}\nOverlapKeeperRecordPool.prototype = new Pool();\nOverlapKeeperRecordPool.prototype.constructor = OverlapKeeperRecordPool;\n\n/**\n * @method create\n * @return {OverlapKeeperRecord}\n */\nOverlapKeeperRecordPool.prototype.create = function () {\n\treturn new OverlapKeeperRecord();\n};\n\n/**\n * @method destroy\n * @param {OverlapKeeperRecord} record\n * @return {OverlapKeeperRecordPool}\n */\nOverlapKeeperRecordPool.prototype.destroy = function (record) {\n\trecord.bodyA = record.bodyB = record.shapeA = record.shapeB = null;\n\treturn this;\n};\n\n},{\"./OverlapKeeperRecord\":53,\"./Pool\":55}],55:[function(_dereq_,module,exports){\nmodule.exports = Pool;\n\n/**\n * @class Object pooling utility.\n */\nfunction Pool(options) {\n\toptions = options || {};\n\n\t/**\n\t * @property {Array} objects\n\t * @type {Array}\n\t */\n\tthis.objects = [];\n\n\tif(options.size !== undefined){\n\t\tthis.resize(options.size);\n\t}\n}\n\n/**\n * @method resize\n * @param {number} size\n * @return {Pool} Self, for chaining\n */\nPool.prototype.resize = function (size) {\n\tvar objects = this.objects;\n\n\twhile (objects.length > size) {\n\t\tobjects.pop();\n\t}\n\n\twhile (objects.length < size) {\n\t\tobjects.push(this.create());\n\t}\n\n\treturn this;\n};\n\n/**\n * Get an object from the pool or create a new instance.\n * @method get\n * @return {Object}\n */\nPool.prototype.get = function () {\n\tvar objects = this.objects;\n\treturn objects.length ? objects.pop() : this.create();\n};\n\n/**\n * Clean up and put the object back into the pool for later use.\n * @method release\n * @param {Object} object\n * @return {Pool} Self for chaining\n */\nPool.prototype.release = function (object) {\n\tthis.destroy(object);\n\tthis.objects.push(object);\n\treturn this;\n};\n\n},{}],56:[function(_dereq_,module,exports){\nvar Utils = _dereq_('./Utils');\n\nmodule.exports = TupleDictionary;\n\n/**\n * @class TupleDictionary\n * @constructor\n */\nfunction TupleDictionary() {\n\n    /**\n     * The data storage\n     * @property data\n     * @type {Object}\n     */\n    this.data = {};\n\n    /**\n     * Keys that are currently used.\n     * @property {Array} keys\n     */\n    this.keys = [];\n}\n\n/**\n * Generate a key given two integers\n * @method getKey\n * @param  {number} i\n * @param  {number} j\n * @return {string}\n */\nTupleDictionary.prototype.getKey = function(id1, id2) {\n    id1 = id1|0;\n    id2 = id2|0;\n\n    if ( (id1|0) === (id2|0) ){\n        return -1;\n    }\n\n    // valid for values < 2^16\n    return ((id1|0) > (id2|0) ?\n        (id1 << 16) | (id2 & 0xFFFF) :\n        (id2 << 16) | (id1 & 0xFFFF))|0\n        ;\n};\n\n/**\n * @method getByKey\n * @param  {Number} key\n * @return {Object}\n */\nTupleDictionary.prototype.getByKey = function(key) {\n    key = key|0;\n    return this.data[key];\n};\n\n/**\n * @method get\n * @param  {Number} i\n * @param  {Number} j\n * @return {Number}\n */\nTupleDictionary.prototype.get = function(i, j) {\n    return this.data[this.getKey(i, j)];\n};\n\n/**\n * Set a value.\n * @method set\n * @param  {Number} i\n * @param  {Number} j\n * @param {Number} value\n */\nTupleDictionary.prototype.set = function(i, j, value) {\n    if(!value){\n        throw new Error(\"No data!\");\n    }\n\n    var key = this.getKey(i, j);\n\n    // Check if key already exists\n    if(!this.data[key]){\n        this.keys.push(key);\n    }\n\n    this.data[key] = value;\n\n    return key;\n};\n\n/**\n * Remove all data.\n * @method reset\n */\nTupleDictionary.prototype.reset = function() {\n    var data = this.data,\n        keys = this.keys;\n\n    var l = keys.length;\n    while(l--) {\n        delete data[keys[l]];\n    }\n\n    keys.length = 0;\n};\n\n/**\n * Copy another TupleDictionary. Note that all data in this dictionary will be removed.\n * @method copy\n * @param {TupleDictionary} dict The TupleDictionary to copy into this one.\n */\nTupleDictionary.prototype.copy = function(dict) {\n    this.reset();\n    Utils.appendArray(this.keys, dict.keys);\n    var l = dict.keys.length;\n    while(l--){\n        var key = dict.keys[l];\n        this.data[key] = dict.data[key];\n    }\n};\n\n},{\"./Utils\":57}],57:[function(_dereq_,module,exports){\n/* global P2_ARRAY_TYPE */\n\nmodule.exports = Utils;\n\n/**\n * Misc utility functions\n * @class Utils\n * @constructor\n */\nfunction Utils(){}\n\n/**\n * Append the values in array b to the array a. See <a href=\"http://stackoverflow.com/questions/1374126/how-to-append-an-array-to-an-existing-javascript-array/1374131#1374131\">this</a> for an explanation.\n * @method appendArray\n * @static\n * @param  {Array} a\n * @param  {Array} b\n */\nUtils.appendArray = function(a,b){\n    if (b.length < 150000) {\n        a.push.apply(a, b);\n    } else {\n        for (var i = 0, len = b.length; i !== len; ++i) {\n            a.push(b[i]);\n        }\n    }\n};\n\n/**\n * Garbage free Array.splice(). Does not allocate a new array.\n * @method splice\n * @static\n * @param  {Array} array\n * @param  {Number} index\n * @param  {Number} howmany\n */\nUtils.splice = function(array,index,howmany){\n    howmany = howmany || 1;\n    for (var i=index, len=array.length-howmany; i < len; i++){\n        array[i] = array[i + howmany];\n    }\n    array.length = len;\n};\n\n/**\n * The array type to use for internal numeric computations throughout the library. Float32Array is used if it is available, but falls back on Array. If you want to set array type manually, inject it via the global variable P2_ARRAY_TYPE. See example below.\n * @static\n * @property {function} ARRAY_TYPE\n * @example\n *     <script>\n *         <!-- Inject your preferred array type before loading p2.js -->\n *         P2_ARRAY_TYPE = Array;\n *     </script>\n *     <script src=\"p2.js\"></script>\n */\nif(typeof P2_ARRAY_TYPE !== 'undefined') {\n    Utils.ARRAY_TYPE = P2_ARRAY_TYPE;\n} else if (typeof Float32Array !== 'undefined'){\n    Utils.ARRAY_TYPE = Float32Array;\n} else {\n    Utils.ARRAY_TYPE = Array;\n}\n\n/**\n * Extend an object with the properties of another\n * @static\n * @method extend\n * @param  {object} a\n * @param  {object} b\n */\nUtils.extend = function(a,b){\n    for(var key in b){\n        a[key] = b[key];\n    }\n};\n\n/**\n * Extend an options object with default values.\n * @static\n * @method defaults\n * @param  {object} options The options object. May be falsy: in this case, a new object is created and returned.\n * @param  {object} defaults An object containing default values.\n * @return {object} The modified options object.\n */\nUtils.defaults = function(options, defaults){\n    options = options || {};\n    for(var key in defaults){\n        if(!(key in options)){\n            options[key] = defaults[key];\n        }\n    }\n    return options;\n};\n\n},{}],58:[function(_dereq_,module,exports){\nvar Body = _dereq_('../objects/Body');\n\nmodule.exports = Island;\n\n/**\n * An island of bodies connected with equations.\n * @class Island\n * @constructor\n */\nfunction Island(){\n\n    /**\n     * Current equations in this island.\n     * @property equations\n     * @type {Array}\n     */\n    this.equations = [];\n\n    /**\n     * Current bodies in this island.\n     * @property bodies\n     * @type {Array}\n     */\n    this.bodies = [];\n}\n\n/**\n * Clean this island from bodies and equations.\n * @method reset\n */\nIsland.prototype.reset = function(){\n    this.equations.length = this.bodies.length = 0;\n};\n\nvar bodyIds = [];\n\n/**\n * Get all unique bodies in this island.\n * @method getBodies\n * @return {Array} An array of Body\n */\nIsland.prototype.getBodies = function(result){\n    var bodies = result || [],\n        eqs = this.equations;\n    bodyIds.length = 0;\n    for(var i=0; i!==eqs.length; i++){\n        var eq = eqs[i];\n        if(bodyIds.indexOf(eq.bodyA.id)===-1){\n            bodies.push(eq.bodyA);\n            bodyIds.push(eq.bodyA.id);\n        }\n        if(bodyIds.indexOf(eq.bodyB.id)===-1){\n            bodies.push(eq.bodyB);\n            bodyIds.push(eq.bodyB.id);\n        }\n    }\n    return bodies;\n};\n\n/**\n * Check if the entire island wants to sleep.\n * @method wantsToSleep\n * @return {Boolean}\n */\nIsland.prototype.wantsToSleep = function(){\n    for(var i=0; i<this.bodies.length; i++){\n        var b = this.bodies[i];\n        if(b.type === Body.DYNAMIC && !b.wantsToSleep){\n            return false;\n        }\n    }\n    return true;\n};\n\n/**\n * Make all bodies in the island sleep.\n * @method sleep\n */\nIsland.prototype.sleep = function(){\n    for(var i=0; i<this.bodies.length; i++){\n        var b = this.bodies[i];\n        b.sleep();\n    }\n    return true;\n};\n\n},{\"../objects/Body\":31}],59:[function(_dereq_,module,exports){\nvar vec2 = _dereq_('../math/vec2')\n,   Island = _dereq_('./Island')\n,   IslandNode = _dereq_('./IslandNode')\n,   IslandNodePool = _dereq_('./../utils/IslandNodePool')\n,   IslandPool = _dereq_('./../utils/IslandPool')\n,   Body = _dereq_('../objects/Body');\n\nmodule.exports = IslandManager;\n\n/**\n * Splits the system of bodies and equations into independent islands\n *\n * @class IslandManager\n * @constructor\n * @param {Object} [options]\n * @extends Solver\n */\nfunction IslandManager(options){\n\n    /**\n     * @property nodePool\n     * @type {IslandNodePool}\n     */\n    this.nodePool = new IslandNodePool({ size: 16 });\n\n    /**\n     * @property islandPool\n     * @type {IslandPool}\n     */\n    this.islandPool = new IslandPool({ size: 8 });\n\n    /**\n     * The equations to split. Manually fill this array before running .split().\n     * @property {Array} equations\n     */\n    this.equations = [];\n\n    /**\n     * The resulting {{#crossLink \"Island\"}}{{/crossLink}}s.\n     * @property {Array} islands\n     */\n    this.islands = [];\n\n    /**\n     * The resulting graph nodes.\n     * @property {Array} nodes\n     */\n    this.nodes = [];\n\n    /**\n     * The node queue, used when traversing the graph of nodes.\n     * @private\n     * @property {Array} queue\n     */\n    this.queue = [];\n}\n\n/**\n * Get an unvisited node from a list of nodes.\n * @static\n * @method getUnvisitedNode\n * @param  {Array} nodes\n * @return {IslandNode|boolean} The node if found, else false.\n */\nIslandManager.getUnvisitedNode = function(nodes){\n    var Nnodes = nodes.length;\n    for(var i=0; i!==Nnodes; i++){\n        var node = nodes[i];\n        if(!node.visited && node.body.type === Body.DYNAMIC){\n            return node;\n        }\n    }\n    return false;\n};\n\n/**\n * Visit a node.\n * @method visit\n * @param  {IslandNode} node\n * @param  {Array} bds\n * @param  {Array} eqs\n */\nIslandManager.prototype.visit = function (node,bds,eqs){\n    bds.push(node.body);\n    var Neqs = node.equations.length;\n    for(var i=0; i!==Neqs; i++){\n        var eq = node.equations[i];\n        if(eqs.indexOf(eq) === -1){ // Already added?\n            eqs.push(eq);\n        }\n    }\n};\n\n/**\n * Runs the search algorithm, starting at a root node. The resulting bodies and equations will be stored in the provided arrays.\n * @method bfs\n * @param  {IslandNode} root The node to start from\n * @param  {Array} bds  An array to append resulting Bodies to.\n * @param  {Array} eqs  An array to append resulting Equations to.\n */\nIslandManager.prototype.bfs = function(root,bds,eqs){\n\n    // Reset the visit queue\n    var queue = this.queue;\n    queue.length = 0;\n\n    // Add root node to queue\n    queue.push(root);\n    root.visited = true;\n    this.visit(root,bds,eqs);\n\n    // Process all queued nodes\n    while(queue.length) {\n\n        // Get next node in the queue\n        var node = queue.pop();\n\n        // Visit unvisited neighboring nodes\n        var child;\n        while((child = IslandManager.getUnvisitedNode(node.neighbors))) {\n            child.visited = true;\n            this.visit(child,bds,eqs);\n\n            // Only visit the children of this node if it's dynamic\n            if(child.body.type === Body.DYNAMIC){\n                queue.push(child);\n            }\n        }\n    }\n};\n\n/**\n * Split the world into independent islands. The result is stored in .islands.\n * @method split\n * @param  {World} world\n * @return {Array} The generated islands\n */\nIslandManager.prototype.split = function(world){\n    var bodies = world.bodies,\n        nodes = this.nodes,\n        equations = this.equations;\n\n    // Move old nodes to the node pool\n    while(nodes.length){\n        this.nodePool.release(nodes.pop());\n    }\n\n    // Create needed nodes, reuse if possible\n    for(var i=0; i!==bodies.length; i++){\n        var node = this.nodePool.get();\n        node.body = bodies[i];\n        nodes.push(node);\n        // if(this.nodePool.length){\n        //     var node = this.nodePool.pop();\n        //     node.reset();\n        //     node.body = bodies[i];\n        //     nodes.push(node);\n        // } else {\n        //     nodes.push(new IslandNode(bodies[i]));\n        // }\n    }\n\n    // Add connectivity data. Each equation connects 2 bodies.\n    for(var k=0; k!==equations.length; k++){\n        var eq=equations[k],\n            i=bodies.indexOf(eq.bodyA),\n            j=bodies.indexOf(eq.bodyB),\n            ni=nodes[i],\n            nj=nodes[j];\n        ni.neighbors.push(nj);\n        nj.neighbors.push(ni);\n        ni.equations.push(eq);\n        nj.equations.push(eq);\n    }\n\n    // Move old islands to the island pool\n    var islands = this.islands;\n    for(var i=0; i<islands.length; i++){\n        this.islandPool.release(islands[i]);\n    }\n    islands.length = 0;\n\n    // Get islands\n    var child;\n    while((child = IslandManager.getUnvisitedNode(nodes))){\n\n        // Create new island\n        var island = this.islandPool.get();\n\n        // Get all equations and bodies in this island\n        this.bfs(child, island.bodies, island.equations);\n\n        islands.push(island);\n    }\n\n    return islands;\n};\n\n},{\"../math/vec2\":30,\"../objects/Body\":31,\"./../utils/IslandNodePool\":50,\"./../utils/IslandPool\":51,\"./Island\":58,\"./IslandNode\":60}],60:[function(_dereq_,module,exports){\nmodule.exports = IslandNode;\n\n/**\n * Holds a body and keeps track of some additional properties needed for graph traversal.\n * @class IslandNode\n * @constructor\n * @param {Body} body\n */\nfunction IslandNode(body){\n\n\t/**\n\t * The body that is contained in this node.\n\t * @property {Body} body\n\t */\n    this.body = body;\n\n    /**\n     * Neighboring IslandNodes\n     * @property {Array} neighbors\n     */\n    this.neighbors = [];\n\n    /**\n     * Equations connected to this node.\n     * @property {Array} equations\n     */\n    this.equations = [];\n\n    /**\n     * If this node was visiting during the graph traversal.\n     * @property visited\n     * @type {Boolean}\n     */\n    this.visited = false;\n}\n\n/**\n * Clean this node from bodies and equations.\n * @method reset\n */\nIslandNode.prototype.reset = function(){\n    this.equations.length = 0;\n    this.neighbors.length = 0;\n    this.visited = false;\n    this.body = null;\n};\n\n},{}],61:[function(_dereq_,module,exports){\nvar  GSSolver = _dereq_('../solver/GSSolver')\n,    Solver = _dereq_('../solver/Solver')\n,    Ray = _dereq_('../collision/Ray')\n,    vec2 = _dereq_('../math/vec2')\n,    Circle = _dereq_('../shapes/Circle')\n,    Convex = _dereq_('../shapes/Convex')\n,    Line = _dereq_('../shapes/Line')\n,    Plane = _dereq_('../shapes/Plane')\n,    Capsule = _dereq_('../shapes/Capsule')\n,    Particle = _dereq_('../shapes/Particle')\n,    EventEmitter = _dereq_('../events/EventEmitter')\n,    Body = _dereq_('../objects/Body')\n,    Shape = _dereq_('../shapes/Shape')\n,    LinearSpring = _dereq_('../objects/LinearSpring')\n,    Material = _dereq_('../material/Material')\n,    ContactMaterial = _dereq_('../material/ContactMaterial')\n,    DistanceConstraint = _dereq_('../constraints/DistanceConstraint')\n,    Constraint = _dereq_('../constraints/Constraint')\n,    LockConstraint = _dereq_('../constraints/LockConstraint')\n,    RevoluteConstraint = _dereq_('../constraints/RevoluteConstraint')\n,    PrismaticConstraint = _dereq_('../constraints/PrismaticConstraint')\n,    GearConstraint = _dereq_('../constraints/GearConstraint')\n,    pkg = _dereq_('../../package.json')\n,    Broadphase = _dereq_('../collision/Broadphase')\n,    AABB = _dereq_('../collision/AABB')\n,    SAPBroadphase = _dereq_('../collision/SAPBroadphase')\n,    Narrowphase = _dereq_('../collision/Narrowphase')\n,    Utils = _dereq_('../utils/Utils')\n,    OverlapKeeper = _dereq_('../utils/OverlapKeeper')\n,    IslandManager = _dereq_('./IslandManager')\n,    RotationalSpring = _dereq_('../objects/RotationalSpring');\n\nmodule.exports = World;\n\n/**\n * The dynamics world, where all bodies and constraints live.\n *\n * @class World\n * @constructor\n * @param {Object} [options]\n * @param {Solver} [options.solver] Defaults to GSSolver.\n * @param {Array} [options.gravity] Defaults to y=-9.78.\n * @param {Broadphase} [options.broadphase] Defaults to SAPBroadphase\n * @param {Boolean} [options.islandSplit=true]\n * @extends EventEmitter\n *\n * @example\n *     var world = new World({\n *         gravity: [0, -10],\n *         broadphase: new SAPBroadphase()\n *     });\n *     world.addBody(new Body());\n */\nfunction World(options){\n    EventEmitter.apply(this);\n\n    options = options || {};\n\n    /**\n     * All springs in the world. To add a spring to the world, use {{#crossLink \"World/addSpring:method\"}}{{/crossLink}}.\n     *\n     * @property springs\n     * @type {Array}\n     */\n    this.springs = [];\n\n    /**\n     * All bodies in the world. To add a body to the world, use {{#crossLink \"World/addBody:method\"}}{{/crossLink}}.\n     * @property {Array} bodies\n     */\n    this.bodies = [];\n\n    /**\n     * Disabled body collision pairs. See {{#crossLink \"World/disableBodyCollision:method\"}}.\n     * @private\n     * @property {Array} disabledBodyCollisionPairs\n     */\n    this.disabledBodyCollisionPairs = [];\n\n    /**\n     * The solver used to satisfy constraints and contacts. Default is {{#crossLink \"GSSolver\"}}{{/crossLink}}.\n     * @property {Solver} solver\n     */\n    this.solver = options.solver || new GSSolver();\n\n    /**\n     * The narrowphase to use to generate contacts.\n     *\n     * @property narrowphase\n     * @type {Narrowphase}\n     */\n    this.narrowphase = new Narrowphase(this);\n\n    /**\n     * The island manager of this world.\n     * @property {IslandManager} islandManager\n     */\n    this.islandManager = new IslandManager();\n\n    /**\n     * Gravity in the world. This is applied on all bodies in the beginning of each step().\n     *\n     * @property gravity\n     * @type {Array}\n     */\n    this.gravity = vec2.fromValues(0, -9.78);\n    if(options.gravity){\n        vec2.copy(this.gravity, options.gravity);\n    }\n\n    /**\n     * Gravity to use when approximating the friction max force (mu*mass*gravity).\n     * @property {Number} frictionGravity\n     */\n    this.frictionGravity = vec2.length(this.gravity) || 10;\n\n    /**\n     * Set to true if you want .frictionGravity to be automatically set to the length of .gravity.\n     * @property {Boolean} useWorldGravityAsFrictionGravity\n     * @default true\n     */\n    this.useWorldGravityAsFrictionGravity = true;\n\n    /**\n     * If the length of .gravity is zero, and .useWorldGravityAsFrictionGravity=true, then switch to using .frictionGravity for friction instead. This fallback is useful for gravityless games.\n     * @property {Boolean} useFrictionGravityOnZeroGravity\n     * @default true\n     */\n    this.useFrictionGravityOnZeroGravity = true;\n\n    /**\n     * The broadphase algorithm to use.\n     *\n     * @property broadphase\n     * @type {Broadphase}\n     */\n    this.broadphase = options.broadphase || new SAPBroadphase();\n    this.broadphase.setWorld(this);\n\n    /**\n     * User-added constraints.\n     *\n     * @property constraints\n     * @type {Array}\n     */\n    this.constraints = [];\n\n    /**\n     * Dummy default material in the world, used in .defaultContactMaterial\n     * @property {Material} defaultMaterial\n     */\n    this.defaultMaterial = new Material();\n\n    /**\n     * The default contact material to use, if no contact material was set for the colliding materials.\n     * @property {ContactMaterial} defaultContactMaterial\n     */\n    this.defaultContactMaterial = new ContactMaterial(this.defaultMaterial,this.defaultMaterial);\n\n    /**\n     * For keeping track of what time step size we used last step\n     * @property lastTimeStep\n     * @type {Number}\n     */\n    this.lastTimeStep = 1/60;\n\n    /**\n     * Enable to automatically apply spring forces each step.\n     * @property applySpringForces\n     * @type {Boolean}\n     * @default true\n     */\n    this.applySpringForces = true;\n\n    /**\n     * Enable to automatically apply body damping each step.\n     * @property applyDamping\n     * @type {Boolean}\n     * @default true\n     */\n    this.applyDamping = true;\n\n    /**\n     * Enable to automatically apply gravity each step.\n     * @property applyGravity\n     * @type {Boolean}\n     * @default true\n     */\n    this.applyGravity = true;\n\n    /**\n     * Enable/disable constraint solving in each step.\n     * @property solveConstraints\n     * @type {Boolean}\n     * @default true\n     */\n    this.solveConstraints = true;\n\n    /**\n     * The ContactMaterials added to the World.\n     * @property contactMaterials\n     * @type {Array}\n     */\n    this.contactMaterials = [];\n\n    /**\n     * World time.\n     * @property time\n     * @type {Number}\n     */\n    this.time = 0.0;\n    this.accumulator = 0;\n\n    /**\n     * Is true during step().\n     * @property {Boolean} stepping\n     */\n    this.stepping = false;\n\n    /**\n     * Bodies that are scheduled to be removed at the end of the step.\n     * @property {Array} bodiesToBeRemoved\n     * @private\n     */\n    this.bodiesToBeRemoved = [];\n\n    /**\n     * Whether to enable island splitting. Island splitting can be an advantage for both precision and performance. See {{#crossLink \"IslandManager\"}}{{/crossLink}}.\n     * @property {Boolean} islandSplit\n     * @default true\n     */\n    this.islandSplit = typeof(options.islandSplit)!==\"undefined\" ? !!options.islandSplit : true;\n\n    /**\n     * Set to true if you want to the world to emit the \"impact\" event. Turning this off could improve performance.\n     * @property emitImpactEvent\n     * @type {Boolean}\n     * @default true\n     */\n    this.emitImpactEvent = true;\n\n    // Id counters\n    this._constraintIdCounter = 0;\n    this._bodyIdCounter = 0;\n\n    /**\n     * Fired after the step().\n     * @event postStep\n     */\n    this.postStepEvent = {\n        type : \"postStep\"\n    };\n\n    /**\n     * Fired when a body is added to the world.\n     * @event addBody\n     * @param {Body} body\n     */\n    this.addBodyEvent = {\n        type : \"addBody\",\n        body : null\n    };\n\n    /**\n     * Fired when a body is removed from the world.\n     * @event removeBody\n     * @param {Body} body\n     */\n    this.removeBodyEvent = {\n        type : \"removeBody\",\n        body : null\n    };\n\n    /**\n     * Fired when a spring is added to the world.\n     * @event addSpring\n     * @param {Spring} spring\n     */\n    this.addSpringEvent = {\n        type : \"addSpring\",\n        spring : null\n    };\n\n    /**\n     * Fired when a first contact is created between two bodies. This event is fired after the step has been done.\n     * @event impact\n     * @param {Body} bodyA\n     * @param {Body} bodyB\n     */\n    this.impactEvent = {\n        type: \"impact\",\n        bodyA : null,\n        bodyB : null,\n        shapeA : null,\n        shapeB : null,\n        contactEquation : null\n    };\n\n    /**\n     * Fired after the Broadphase has collected collision pairs in the world.\n     * Inside the event handler, you can modify the pairs array as you like, to\n     * prevent collisions between objects that you don't want.\n     * @event postBroadphase\n     * @param {Array} pairs An array of collision pairs. If this array is [body1,body2,body3,body4], then the body pairs 1,2 and 3,4 would advance to narrowphase.\n     */\n    this.postBroadphaseEvent = {\n        type: \"postBroadphase\",\n        pairs: null\n    };\n\n    /**\n     * How to deactivate bodies during simulation. Possible modes are: {{#crossLink \"World/NO_SLEEPING:property\"}}World.NO_SLEEPING{{/crossLink}}, {{#crossLink \"World/BODY_SLEEPING:property\"}}World.BODY_SLEEPING{{/crossLink}} and {{#crossLink \"World/ISLAND_SLEEPING:property\"}}World.ISLAND_SLEEPING{{/crossLink}}.\n     * If sleeping is enabled, you might need to {{#crossLink \"Body/wakeUp:method\"}}wake up{{/crossLink}} the bodies if they fall asleep when they shouldn't. If you want to enable sleeping in the world, but want to disable it for a particular body, see {{#crossLink \"Body/allowSleep:property\"}}Body.allowSleep{{/crossLink}}.\n     * @property sleepMode\n     * @type {number}\n     * @default World.NO_SLEEPING\n     */\n    this.sleepMode = World.NO_SLEEPING;\n\n    /**\n     * Fired when two shapes starts start to overlap. Fired in the narrowphase, during step.\n     * @event beginContact\n     * @param {Shape} shapeA\n     * @param {Shape} shapeB\n     * @param {Body}  bodyA\n     * @param {Body}  bodyB\n     * @param {Array} contactEquations\n     */\n    this.beginContactEvent = {\n        type: \"beginContact\",\n        shapeA: null,\n        shapeB: null,\n        bodyA: null,\n        bodyB: null,\n        contactEquations: []\n    };\n\n    /**\n     * Fired when two shapes stop overlapping, after the narrowphase (during step).\n     * @event endContact\n     * @param {Shape} shapeA\n     * @param {Shape} shapeB\n     * @param {Body}  bodyA\n     * @param {Body}  bodyB\n     */\n    this.endContactEvent = {\n        type: \"endContact\",\n        shapeA: null,\n        shapeB: null,\n        bodyA: null,\n        bodyB: null\n    };\n\n    /**\n     * Fired just before equations are added to the solver to be solved. Can be used to control what equations goes into the solver.\n     * @event preSolve\n     * @param {Array} contactEquations  An array of contacts to be solved.\n     * @param {Array} frictionEquations An array of friction equations to be solved.\n     */\n    this.preSolveEvent = {\n        type: \"preSolve\",\n        contactEquations: null,\n        frictionEquations: null\n    };\n\n    // For keeping track of overlapping shapes\n    this.overlappingShapesLastState = { keys:[] };\n    this.overlappingShapesCurrentState = { keys:[] };\n\n    /**\n     * @property {OverlapKeeper} overlapKeeper\n     */\n    this.overlapKeeper = new OverlapKeeper();\n}\nWorld.prototype = new Object(EventEmitter.prototype);\nWorld.prototype.constructor = World;\n\n/**\n * Never deactivate bodies.\n * @static\n * @property {number} NO_SLEEPING\n */\nWorld.NO_SLEEPING = 1;\n\n/**\n * Deactivate individual bodies if they are sleepy.\n * @static\n * @property {number} BODY_SLEEPING\n */\nWorld.BODY_SLEEPING = 2;\n\n/**\n * Deactivates bodies that are in contact, if all of them are sleepy. Note that you must enable {{#crossLink \"World/islandSplit:property\"}}.islandSplit{{/crossLink}} for this to work.\n * @static\n * @property {number} ISLAND_SLEEPING\n */\nWorld.ISLAND_SLEEPING = 4;\n\n/**\n * Add a constraint to the simulation.\n *\n * @method addConstraint\n * @param {Constraint} constraint\n * @example\n *     var constraint = new LockConstraint(bodyA, bodyB);\n *     world.addConstraint(constraint);\n */\nWorld.prototype.addConstraint = function(constraint){\n    this.constraints.push(constraint);\n};\n\n/**\n * Add a ContactMaterial to the simulation.\n * @method addContactMaterial\n * @param {ContactMaterial} contactMaterial\n */\nWorld.prototype.addContactMaterial = function(contactMaterial){\n    this.contactMaterials.push(contactMaterial);\n};\n\n/**\n * Removes a contact material\n *\n * @method removeContactMaterial\n * @param {ContactMaterial} cm\n */\nWorld.prototype.removeContactMaterial = function(cm){\n    var idx = this.contactMaterials.indexOf(cm);\n    if(idx!==-1){\n        Utils.splice(this.contactMaterials,idx,1);\n    }\n};\n\n/**\n * Get a contact material given two materials\n * @method getContactMaterial\n * @param {Material} materialA\n * @param {Material} materialB\n * @return {ContactMaterial} The matching ContactMaterial, or false on fail.\n * @todo Use faster hash map to lookup from material id's\n */\nWorld.prototype.getContactMaterial = function(materialA,materialB){\n    var cmats = this.contactMaterials;\n    for(var i=0, N=cmats.length; i!==N; i++){\n        var cm = cmats[i];\n        if( (cm.materialA.id === materialA.id) && (cm.materialB.id === materialB.id) ||\n            (cm.materialA.id === materialB.id) && (cm.materialB.id === materialA.id) ){\n            return cm;\n        }\n    }\n    return false;\n};\n\n/**\n * Removes a constraint\n *\n * @method removeConstraint\n * @param {Constraint} constraint\n */\nWorld.prototype.removeConstraint = function(constraint){\n    var idx = this.constraints.indexOf(constraint);\n    if(idx!==-1){\n        Utils.splice(this.constraints,idx,1);\n    }\n};\n\nvar step_r = vec2.create(),\n    step_runit = vec2.create(),\n    step_u = vec2.create(),\n    step_f = vec2.create(),\n    step_fhMinv = vec2.create(),\n    step_velodt = vec2.create(),\n    step_mg = vec2.create(),\n    xiw = vec2.fromValues(0,0),\n    xjw = vec2.fromValues(0,0),\n    zero = vec2.fromValues(0,0),\n    interpvelo = vec2.fromValues(0,0);\n\n/**\n * Step the physics world forward in time.\n *\n * There are two modes. The simple mode is fixed timestepping without interpolation. In this case you only use the first argument. The second case uses interpolation. In that you also provide the time since the function was last used, as well as the maximum fixed timesteps to take.\n *\n * @method step\n * @param {Number} dt                       The fixed time step size to use.\n * @param {Number} [timeSinceLastCalled=0]  The time elapsed since the function was last called.\n * @param {Number} [maxSubSteps=10]         Maximum number of fixed steps to take per function call.\n *\n * @example\n *     // Simple fixed timestepping without interpolation\n *     var fixedTimeStep = 1 / 60;\n *     var world = new World();\n *     var body = new Body({ mass: 1 });\n *     world.addBody(body);\n *\n *     function animate(){\n *         requestAnimationFrame(animate);\n *         world.step(fixedTimeStep);\n *         renderBody(body.position, body.angle);\n *     }\n *\n *     // Start animation loop\n *     requestAnimationFrame(animate);\n *\n * @example\n *     // Fixed timestepping with interpolation\n *     var maxSubSteps = 10;\n *     var lastTimeSeconds;\n *\n *     function animate(t){\n *         requestAnimationFrame(animate);\n *         timeSeconds = t / 1000;\n *         lastTimeSeconds = lastTimeSeconds || timeSeconds;\n *\n *         deltaTime = timeSeconds - lastTimeSeconds;\n *         world.step(fixedTimeStep, deltaTime, maxSubSteps);\n *\n *         renderBody(body.interpolatedPosition, body.interpolatedAngle);\n *     }\n *\n *     // Start animation loop\n *     requestAnimationFrame(animate);\n *\n * @see http://bulletphysics.org/mediawiki-1.5.8/index.php/Stepping_The_World\n */\nWorld.prototype.step = function(dt,timeSinceLastCalled,maxSubSteps){\n    maxSubSteps = maxSubSteps || 10;\n    timeSinceLastCalled = timeSinceLastCalled || 0;\n\n    if(timeSinceLastCalled === 0){ // Fixed, simple stepping\n\n        this.internalStep(dt);\n\n        // Increment time\n        this.time += dt;\n\n    } else {\n\n        this.accumulator += timeSinceLastCalled;\n        var substeps = 0;\n        while (this.accumulator >= dt && substeps < maxSubSteps) {\n            // Do fixed steps to catch up\n            this.internalStep(dt);\n            this.time += dt;\n            this.accumulator -= dt;\n            substeps++;\n        }\n\n        var t = (this.accumulator % dt) / dt;\n        for(var j=0; j!==this.bodies.length; j++){\n            var b = this.bodies[j];\n            vec2.lerp(b.interpolatedPosition, b.previousPosition, b.position, t);\n            b.interpolatedAngle = b.previousAngle + t * (b.angle - b.previousAngle);\n        }\n    }\n};\n\nvar endOverlaps = [];\n\n/**\n * Make a fixed step.\n * @method internalStep\n * @param  {number} dt\n * @private\n */\nWorld.prototype.internalStep = function(dt){\n    this.stepping = true;\n\n    var that = this,\n        Nsprings = this.springs.length,\n        springs = this.springs,\n        bodies = this.bodies,\n        g = this.gravity,\n        solver = this.solver,\n        Nbodies = this.bodies.length,\n        broadphase = this.broadphase,\n        np = this.narrowphase,\n        constraints = this.constraints,\n        t0, t1,\n        fhMinv = step_fhMinv,\n        velodt = step_velodt,\n        mg = step_mg,\n        scale = vec2.scale,\n        add = vec2.add,\n        rotate = vec2.rotate,\n        islandManager = this.islandManager;\n\n    this.overlapKeeper.tick();\n\n    this.lastTimeStep = dt;\n\n    // Update approximate friction gravity.\n    if(this.useWorldGravityAsFrictionGravity){\n        var gravityLen = vec2.length(this.gravity);\n        if(!(gravityLen === 0 && this.useFrictionGravityOnZeroGravity)){\n            // Nonzero gravity. Use it.\n            this.frictionGravity = gravityLen;\n        }\n    }\n\n    // Add gravity to bodies\n    if(this.applyGravity){\n        for(var i=0; i!==Nbodies; i++){\n            var b = bodies[i],\n                fi = b.force;\n            if(b.type !== Body.DYNAMIC || b.sleepState === Body.SLEEPING){\n                continue;\n            }\n            vec2.scale(mg,g,b.mass*b.gravityScale); // F=m*g\n            add(fi,fi,mg);\n        }\n    }\n\n    // Add spring forces\n    if(this.applySpringForces){\n        for(var i=0; i!==Nsprings; i++){\n            var s = springs[i];\n            s.applyForce();\n        }\n    }\n\n    if(this.applyDamping){\n        for(var i=0; i!==Nbodies; i++){\n            var b = bodies[i];\n            if(b.type === Body.DYNAMIC){\n                b.applyDamping(dt);\n            }\n        }\n    }\n\n    // Broadphase\n    var result = broadphase.getCollisionPairs(this);\n\n    // Remove ignored collision pairs\n    var ignoredPairs = this.disabledBodyCollisionPairs;\n    for(var i=ignoredPairs.length-2; i>=0; i-=2){\n        for(var j=result.length-2; j>=0; j-=2){\n            if( (ignoredPairs[i]   === result[j] && ignoredPairs[i+1] === result[j+1]) ||\n                (ignoredPairs[i+1] === result[j] && ignoredPairs[i]   === result[j+1])){\n                result.splice(j,2);\n            }\n        }\n    }\n\n    // Remove constrained pairs with collideConnected == false\n    var Nconstraints = constraints.length;\n    for(i=0; i!==Nconstraints; i++){\n        var c = constraints[i];\n        if(!c.collideConnected){\n            for(var j=result.length-2; j>=0; j-=2){\n                if( (c.bodyA === result[j] && c.bodyB === result[j+1]) ||\n                    (c.bodyB === result[j] && c.bodyA === result[j+1])){\n                    result.splice(j,2);\n                }\n            }\n        }\n    }\n\n    // postBroadphase event\n    this.postBroadphaseEvent.pairs = result;\n    this.emit(this.postBroadphaseEvent);\n    this.postBroadphaseEvent.pairs = null;\n\n    // Narrowphase\n    np.reset(this);\n    for(var i=0, Nresults=result.length; i!==Nresults; i+=2){\n        var bi = result[i],\n            bj = result[i+1];\n\n        // Loop over all shapes of body i\n        for(var k=0, Nshapesi=bi.shapes.length; k!==Nshapesi; k++){\n            var si = bi.shapes[k],\n                xi = si.position,\n                ai = si.angle;\n\n            // All shapes of body j\n            for(var l=0, Nshapesj=bj.shapes.length; l!==Nshapesj; l++){\n                var sj = bj.shapes[l],\n                    xj = sj.position,\n                    aj = sj.angle;\n\n                var cm = this.defaultContactMaterial;\n                if(si.material && sj.material){\n                    var tmp = this.getContactMaterial(si.material,sj.material);\n                    if(tmp){\n                        cm = tmp;\n                    }\n                }\n\n                this.runNarrowphase(np,bi,si,xi,ai,bj,sj,xj,aj,cm,this.frictionGravity);\n            }\n        }\n    }\n\n    // Wake up bodies\n    for(var i=0; i!==Nbodies; i++){\n        var body = bodies[i];\n        if(body._wakeUpAfterNarrowphase){\n            body.wakeUp();\n            body._wakeUpAfterNarrowphase = false;\n        }\n    }\n\n    // Emit end overlap events\n    if(this.has('endContact')){\n        this.overlapKeeper.getEndOverlaps(endOverlaps);\n        var e = this.endContactEvent;\n        var l = endOverlaps.length;\n        while(l--){\n            var data = endOverlaps[l];\n            e.shapeA = data.shapeA;\n            e.shapeB = data.shapeB;\n            e.bodyA = data.bodyA;\n            e.bodyB = data.bodyB;\n            this.emit(e);\n        }\n        endOverlaps.length = 0;\n    }\n\n    var preSolveEvent = this.preSolveEvent;\n    preSolveEvent.contactEquations = np.contactEquations;\n    preSolveEvent.frictionEquations = np.frictionEquations;\n    this.emit(preSolveEvent);\n    preSolveEvent.contactEquations = preSolveEvent.frictionEquations = null;\n\n    // update constraint equations\n    var Nconstraints = constraints.length;\n    for(i=0; i!==Nconstraints; i++){\n        constraints[i].update();\n    }\n\n    if(np.contactEquations.length || np.frictionEquations.length || Nconstraints){\n        if(this.islandSplit){\n            // Split into islands\n            islandManager.equations.length = 0;\n            Utils.appendArray(islandManager.equations, np.contactEquations);\n            Utils.appendArray(islandManager.equations, np.frictionEquations);\n            for(i=0; i!==Nconstraints; i++){\n                Utils.appendArray(islandManager.equations, constraints[i].equations);\n            }\n            islandManager.split(this);\n\n            for(var i=0; i!==islandManager.islands.length; i++){\n                var island = islandManager.islands[i];\n                if(island.equations.length){\n                    solver.solveIsland(dt,island);\n                }\n            }\n\n        } else {\n\n            // Add contact equations to solver\n            solver.addEquations(np.contactEquations);\n            solver.addEquations(np.frictionEquations);\n\n            // Add user-defined constraint equations\n            for(i=0; i!==Nconstraints; i++){\n                solver.addEquations(constraints[i].equations);\n            }\n\n            if(this.solveConstraints){\n                solver.solve(dt,this);\n            }\n\n            solver.removeAllEquations();\n        }\n    }\n\n    // Step forward\n    for(var i=0; i!==Nbodies; i++){\n        var body = bodies[i];\n\n        // if(body.sleepState !== Body.SLEEPING && body.type !== Body.STATIC){\n        body.integrate(dt);\n        // }\n    }\n\n    // Reset force\n    for(var i=0; i!==Nbodies; i++){\n        bodies[i].setZeroForce();\n    }\n\n    // Emit impact event\n    if(this.emitImpactEvent && this.has('impact')){\n        var ev = this.impactEvent;\n        for(var i=0; i!==np.contactEquations.length; i++){\n            var eq = np.contactEquations[i];\n            if(eq.firstImpact){\n                ev.bodyA = eq.bodyA;\n                ev.bodyB = eq.bodyB;\n                ev.shapeA = eq.shapeA;\n                ev.shapeB = eq.shapeB;\n                ev.contactEquation = eq;\n                this.emit(ev);\n            }\n        }\n    }\n\n    // Sleeping update\n    if(this.sleepMode === World.BODY_SLEEPING){\n        for(i=0; i!==Nbodies; i++){\n            bodies[i].sleepTick(this.time, false, dt);\n        }\n    } else if(this.sleepMode === World.ISLAND_SLEEPING && this.islandSplit){\n\n        // Tell all bodies to sleep tick but dont sleep yet\n        for(i=0; i!==Nbodies; i++){\n            bodies[i].sleepTick(this.time, true, dt);\n        }\n\n        // Sleep islands\n        for(var i=0; i<this.islandManager.islands.length; i++){\n            var island = this.islandManager.islands[i];\n            if(island.wantsToSleep()){\n                island.sleep();\n            }\n        }\n    }\n\n    this.stepping = false;\n\n    // Remove bodies that are scheduled for removal\n    var bodiesToBeRemoved = this.bodiesToBeRemoved;\n    for(var i=0; i!==bodiesToBeRemoved.length; i++){\n        this.removeBody(bodiesToBeRemoved[i]);\n    }\n    bodiesToBeRemoved.length = 0;\n\n    this.emit(this.postStepEvent);\n};\n\n/**\n * Runs narrowphase for the shape pair i and j.\n * @method runNarrowphase\n * @param  {Narrowphase} np\n * @param  {Body} bi\n * @param  {Shape} si\n * @param  {Array} xi\n * @param  {Number} ai\n * @param  {Body} bj\n * @param  {Shape} sj\n * @param  {Array} xj\n * @param  {Number} aj\n * @param  {Number} mu\n */\nWorld.prototype.runNarrowphase = function(np,bi,si,xi,ai,bj,sj,xj,aj,cm,glen){\n\n    // Check collision groups and masks\n    if(!((si.collisionGroup & sj.collisionMask) !== 0 && (sj.collisionGroup & si.collisionMask) !== 0)){\n        return;\n    }\n\n    // Get world position and angle of each shape\n    vec2.rotate(xiw, xi, bi.angle);\n    vec2.rotate(xjw, xj, bj.angle);\n    vec2.add(xiw, xiw, bi.position);\n    vec2.add(xjw, xjw, bj.position);\n    var aiw = ai + bi.angle;\n    var ajw = aj + bj.angle;\n\n    np.enableFriction = cm.friction > 0;\n    np.frictionCoefficient = cm.friction;\n    var reducedMass;\n    if(bi.type === Body.STATIC || bi.type === Body.KINEMATIC){\n        reducedMass = bj.mass;\n    } else if(bj.type === Body.STATIC || bj.type === Body.KINEMATIC){\n        reducedMass = bi.mass;\n    } else {\n        reducedMass = (bi.mass*bj.mass)/(bi.mass+bj.mass);\n    }\n    np.slipForce = cm.friction*glen*reducedMass;\n    np.restitution = cm.restitution;\n    np.surfaceVelocity = cm.surfaceVelocity;\n    np.frictionStiffness = cm.frictionStiffness;\n    np.frictionRelaxation = cm.frictionRelaxation;\n    np.stiffness = cm.stiffness;\n    np.relaxation = cm.relaxation;\n    np.contactSkinSize = cm.contactSkinSize;\n    np.enabledEquations = bi.collisionResponse && bj.collisionResponse && si.collisionResponse && sj.collisionResponse;\n\n    var resolver = np[si.type | sj.type],\n        numContacts = 0;\n    if (resolver) {\n        var sensor = si.sensor || sj.sensor;\n        var numFrictionBefore = np.frictionEquations.length;\n        if (si.type < sj.type) {\n            numContacts = resolver.call(np, bi,si,xiw,aiw, bj,sj,xjw,ajw, sensor);\n        } else {\n            numContacts = resolver.call(np, bj,sj,xjw,ajw, bi,si,xiw,aiw, sensor);\n        }\n        var numFrictionEquations = np.frictionEquations.length - numFrictionBefore;\n\n        if(numContacts){\n\n            if( bi.allowSleep &&\n                bi.type === Body.DYNAMIC &&\n                bi.sleepState  === Body.SLEEPING &&\n                bj.sleepState  === Body.AWAKE &&\n                bj.type !== Body.STATIC\n            ){\n                var speedSquaredB = vec2.squaredLength(bj.velocity) + Math.pow(bj.angularVelocity,2);\n                var speedLimitSquaredB = Math.pow(bj.sleepSpeedLimit,2);\n                if(speedSquaredB >= speedLimitSquaredB*2){\n                    bi._wakeUpAfterNarrowphase = true;\n                }\n            }\n\n            if( bj.allowSleep &&\n                bj.type === Body.DYNAMIC &&\n                bj.sleepState  === Body.SLEEPING &&\n                bi.sleepState  === Body.AWAKE &&\n                bi.type !== Body.STATIC\n            ){\n                var speedSquaredA = vec2.squaredLength(bi.velocity) + Math.pow(bi.angularVelocity,2);\n                var speedLimitSquaredA = Math.pow(bi.sleepSpeedLimit,2);\n                if(speedSquaredA >= speedLimitSquaredA*2){\n                    bj._wakeUpAfterNarrowphase = true;\n                }\n            }\n\n            this.overlapKeeper.setOverlapping(bi, si, bj, sj);\n            if(this.has('beginContact') && this.overlapKeeper.isNewOverlap(si, sj)){\n\n                // Report new shape overlap\n                var e = this.beginContactEvent;\n                e.shapeA = si;\n                e.shapeB = sj;\n                e.bodyA = bi;\n                e.bodyB = bj;\n\n                // Reset contact equations\n                e.contactEquations.length = 0;\n\n                if(typeof(numContacts)===\"number\"){\n                    for(var i=np.contactEquations.length-numContacts; i<np.contactEquations.length; i++){\n                        e.contactEquations.push(np.contactEquations[i]);\n                    }\n                }\n\n                this.emit(e);\n            }\n\n            // divide the max friction force by the number of contacts\n            if(typeof(numContacts)===\"number\" && numFrictionEquations > 1){ // Why divide by 1?\n                for(var i=np.frictionEquations.length-numFrictionEquations; i<np.frictionEquations.length; i++){\n                    var f = np.frictionEquations[i];\n                    f.setSlipForce(f.getSlipForce() / numFrictionEquations);\n                }\n            }\n        }\n    }\n\n};\n\n/**\n * Add a spring to the simulation\n *\n * @method addSpring\n * @param {Spring} spring\n */\nWorld.prototype.addSpring = function(spring){\n    this.springs.push(spring);\n    var evt = this.addSpringEvent;\n    evt.spring = spring;\n    this.emit(evt);\n    evt.spring = null;\n};\n\n/**\n * Remove a spring\n *\n * @method removeSpring\n * @param {Spring} spring\n */\nWorld.prototype.removeSpring = function(spring){\n    var idx = this.springs.indexOf(spring);\n    if(idx !== -1){\n        Utils.splice(this.springs,idx,1);\n    }\n};\n\n/**\n * Add a body to the simulation\n *\n * @method addBody\n * @param {Body} body\n *\n * @example\n *     var world = new World(),\n *         body = new Body();\n *     world.addBody(body);\n * @todo What if this is done during step?\n */\nWorld.prototype.addBody = function(body){\n    if(this.bodies.indexOf(body) === -1){\n        this.bodies.push(body);\n        body.world = this;\n        var evt = this.addBodyEvent;\n        evt.body = body;\n        this.emit(evt);\n        evt.body = null;\n    }\n};\n\n/**\n * Remove a body from the simulation. If this method is called during step(), the body removal is scheduled to after the step.\n *\n * @method removeBody\n * @param {Body} body\n */\nWorld.prototype.removeBody = function(body){\n    if(this.stepping){\n        this.bodiesToBeRemoved.push(body);\n    } else {\n        body.world = null;\n        var idx = this.bodies.indexOf(body);\n        if(idx!==-1){\n            Utils.splice(this.bodies,idx,1);\n            this.removeBodyEvent.body = body;\n            body.resetConstraintVelocity();\n            this.emit(this.removeBodyEvent);\n            this.removeBodyEvent.body = null;\n        }\n    }\n};\n\n/**\n * Get a body by its id.\n * @method getBodyById\n * @param {number} id\n * @return {Body} The body, or false if it was not found.\n */\nWorld.prototype.getBodyById = function(id){\n    var bodies = this.bodies;\n    for(var i=0; i<bodies.length; i++){\n        var b = bodies[i];\n        if(b.id === id){\n            return b;\n        }\n    }\n    return false;\n};\n\n/**\n * Disable collision between two bodies\n * @method disableBodyCollision\n * @param {Body} bodyA\n * @param {Body} bodyB\n */\nWorld.prototype.disableBodyCollision = function(bodyA,bodyB){\n    this.disabledBodyCollisionPairs.push(bodyA,bodyB);\n};\n\n/**\n * Enable collisions between the given two bodies\n * @method enableBodyCollision\n * @param {Body} bodyA\n * @param {Body} bodyB\n */\nWorld.prototype.enableBodyCollision = function(bodyA,bodyB){\n    var pairs = this.disabledBodyCollisionPairs;\n    for(var i=0; i<pairs.length; i+=2){\n        if((pairs[i] === bodyA && pairs[i+1] === bodyB) || (pairs[i+1] === bodyA && pairs[i] === bodyB)){\n            pairs.splice(i,2);\n            return;\n        }\n    }\n};\n\n/**\n * Resets the World, removes all bodies, constraints and springs.\n *\n * @method clear\n */\nWorld.prototype.clear = function(){\n\n    this.time = 0;\n\n    // Remove all solver equations\n    if(this.solver && this.solver.equations.length){\n        this.solver.removeAllEquations();\n    }\n\n    // Remove all constraints\n    var cs = this.constraints;\n    for(var i=cs.length-1; i>=0; i--){\n        this.removeConstraint(cs[i]);\n    }\n\n    // Remove all bodies\n    var bodies = this.bodies;\n    for(var i=bodies.length-1; i>=0; i--){\n        this.removeBody(bodies[i]);\n    }\n\n    // Remove all springs\n    var springs = this.springs;\n    for(var i=springs.length-1; i>=0; i--){\n        this.removeSpring(springs[i]);\n    }\n\n    // Remove all contact materials\n    var cms = this.contactMaterials;\n    for(var i=cms.length-1; i>=0; i--){\n        this.removeContactMaterial(cms[i]);\n    }\n\n    World.apply(this);\n};\n\nvar hitTest_tmp1 = vec2.create(),\n    hitTest_zero = vec2.fromValues(0,0),\n    hitTest_tmp2 = vec2.fromValues(0,0);\n\n/**\n * Test if a world point overlaps bodies\n * @method hitTest\n * @param  {Array}  worldPoint  Point to use for intersection tests\n * @param  {Array}  bodies      A list of objects to check for intersection\n * @param  {Number} precision   Used for matching against particles and lines. Adds some margin to these infinitesimal objects.\n * @return {Array}              Array of bodies that overlap the point\n * @todo Should use an api similar to the raycast function\n * @todo Should probably implement a .containsPoint method for all shapes. Would be more efficient\n */\nWorld.prototype.hitTest = function(worldPoint,bodies,precision){\n    precision = precision || 0;\n\n    // Create a dummy particle body with a particle shape to test against the bodies\n    var pb = new Body({ position:worldPoint }),\n        ps = new Particle(),\n        px = worldPoint,\n        pa = 0,\n        x = hitTest_tmp1,\n        zero = hitTest_zero,\n        tmp = hitTest_tmp2;\n    pb.addShape(ps);\n\n    var n = this.narrowphase,\n        result = [];\n\n    // Check bodies\n    for(var i=0, N=bodies.length; i!==N; i++){\n        var b = bodies[i];\n\n        for(var j=0, NS=b.shapes.length; j!==NS; j++){\n            var s = b.shapes[j];\n\n            // Get shape world position + angle\n            vec2.rotate(x, s.position, b.angle);\n            vec2.add(x, x, b.position);\n            var a = s.angle + b.angle;\n\n            if( (s instanceof Circle    && n.circleParticle  (b,s,x,a,     pb,ps,px,pa, true)) ||\n                (s instanceof Convex    && n.particleConvex  (pb,ps,px,pa, b,s,x,a,     true)) ||\n                (s instanceof Plane     && n.particlePlane   (pb,ps,px,pa, b,s,x,a,     true)) ||\n                (s instanceof Capsule   && n.particleCapsule (pb,ps,px,pa, b,s,x,a,     true)) ||\n                (s instanceof Particle  && vec2.squaredLength(vec2.sub(tmp,x,worldPoint)) < precision*precision)\n                ){\n                result.push(b);\n            }\n        }\n    }\n\n    return result;\n};\n\n/**\n * Set the stiffness for all equations and contact materials.\n * @method setGlobalStiffness\n * @param {Number} stiffness\n */\nWorld.prototype.setGlobalStiffness = function(stiffness){\n\n    // Set for all constraints\n    var constraints = this.constraints;\n    for(var i=0; i !== constraints.length; i++){\n        var c = constraints[i];\n        for(var j=0; j !== c.equations.length; j++){\n            var eq = c.equations[j];\n            eq.stiffness = stiffness;\n            eq.needsUpdate = true;\n        }\n    }\n\n    // Set for all contact materials\n    var contactMaterials = this.contactMaterials;\n    for(var i=0; i !== contactMaterials.length; i++){\n        var c = contactMaterials[i];\n        c.stiffness = c.frictionStiffness = stiffness;\n    }\n\n    // Set for default contact material\n    var c = this.defaultContactMaterial;\n    c.stiffness = c.frictionStiffness = stiffness;\n};\n\n/**\n * Set the relaxation for all equations and contact materials.\n * @method setGlobalRelaxation\n * @param {Number} relaxation\n */\nWorld.prototype.setGlobalRelaxation = function(relaxation){\n\n    // Set for all constraints\n    for(var i=0; i !== this.constraints.length; i++){\n        var c = this.constraints[i];\n        for(var j=0; j !== c.equations.length; j++){\n            var eq = c.equations[j];\n            eq.relaxation = relaxation;\n            eq.needsUpdate = true;\n        }\n    }\n\n    // Set for all contact materials\n    for(var i=0; i !== this.contactMaterials.length; i++){\n        var c = this.contactMaterials[i];\n        c.relaxation = c.frictionRelaxation = relaxation;\n    }\n\n    // Set for default contact material\n    var c = this.defaultContactMaterial;\n    c.relaxation = c.frictionRelaxation = relaxation;\n};\n\nvar tmpAABB = new AABB();\nvar tmpArray = [];\n\n/**\n * Ray cast against all bodies in the world.\n * @method raycast\n * @param  {RaycastResult} result\n * @param  {Ray} ray\n * @return {boolean} True if any body was hit.\n *\n * @example\n *     var ray = new Ray({\n *         mode: Ray.CLOSEST, // or ANY\n *         from: [0, 0],\n *         to: [10, 0],\n *     });\n *     var result = new RaycastResult();\n *     world.raycast(result, ray);\n *\n *     // Get the hit point\n *     var hitPoint = vec2.create();\n *     result.getHitPoint(hitPoint, ray);\n *     console.log('Hit point: ', hitPoint[0], hitPoint[1], ' at distance ' + result.getHitDistance(ray));\n *\n * @example\n *     var ray = new Ray({\n *         mode: Ray.ALL,\n *         from: [0, 0],\n *         to: [10, 0],\n *         callback: function(result){\n *\n *             // Print some info about the hit\n *             console.log('Hit body and shape: ', result.body, result.shape);\n *\n *             // Get the hit point\n *             var hitPoint = vec2.create();\n *             result.getHitPoint(hitPoint, ray);\n *             console.log('Hit point: ', hitPoint[0], hitPoint[1], ' at distance ' + result.getHitDistance(ray));\n *\n *             // If you are happy with the hits you got this far, you can stop the traversal here:\n *             result.stop();\n *         }\n *     });\n *     var result = new RaycastResult();\n *     world.raycast(result, ray);\n */\nWorld.prototype.raycast = function(result, ray){\n\n    // Get all bodies within the ray AABB\n    ray.getAABB(tmpAABB);\n    this.broadphase.aabbQuery(this, tmpAABB, tmpArray);\n    ray.intersectBodies(result, tmpArray);\n    tmpArray.length = 0;\n\n    return result.hasHit();\n};\n\n},{\"../../package.json\":6,\"../collision/AABB\":7,\"../collision/Broadphase\":8,\"../collision/Narrowphase\":10,\"../collision/Ray\":11,\"../collision/SAPBroadphase\":13,\"../constraints/Constraint\":14,\"../constraints/DistanceConstraint\":15,\"../constraints/GearConstraint\":16,\"../constraints/LockConstraint\":17,\"../constraints/PrismaticConstraint\":18,\"../constraints/RevoluteConstraint\":19,\"../events/EventEmitter\":26,\"../material/ContactMaterial\":27,\"../material/Material\":28,\"../math/vec2\":30,\"../objects/Body\":31,\"../objects/LinearSpring\":32,\"../objects/RotationalSpring\":33,\"../shapes/Capsule\":38,\"../shapes/Circle\":39,\"../shapes/Convex\":40,\"../shapes/Line\":42,\"../shapes/Particle\":43,\"../shapes/Plane\":44,\"../shapes/Shape\":45,\"../solver/GSSolver\":46,\"../solver/Solver\":47,\"../utils/OverlapKeeper\":52,\"../utils/Utils\":57,\"./IslandManager\":59}]},{},[36])\n(36)\n});"

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	__webpack_require__(3)(__webpack_require__(8))

/***/ },
/* 8 */
/***/ function(module, exports) {


/***/ }
/******/ ]);