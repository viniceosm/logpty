var logpty = {}

/**
 * @description console.log with font color
 * @example
 * c(['blue', ' word ']);
 * @example
 * c(['blue', ' hello '], ['red', ' word ']);
 */
logpty.c = function(...array) {
	var msg = array.reduce((acc, a) => `${acc}%c${a[1]}`, '')
	var colors = array.map((a) => `color: ${a[0]}`)

	console.log(`${msg}`, ...colors)
}

/**
 * @description console.log with background color
 * @example
 * b(['cyan', ' hello ']);
 * @example
 * b(['cyan', ' hello '], ['yellow', ' word ']);
 */
logpty.b = function(...array) {
	var msg = array.reduce((acc, a) => `${acc}%c${a[1]}`, '')
	var bgColors = array.map((a) => `background-color: ${a[0]}`)

	console.log(`${msg}`, ...bgColors)
}

/**
 * @description console.log with font color and background color
 * @example
 * cb(['white', 'red', ' word ']);
 * @example
 * cb(['aquamarine', 'red', ' hello '], ['red', 'aquamarine', ' word ']);
 */
logpty.cb = function(...array) {
	var msg = array.reduce((acc, a) => `${acc}%c${a[2]}`, '')
	var colorsBgColors = array.map((a) => `color: ${a[0]}; background-color: ${a[1]}`)

	console.log(`${msg}`, ...colorsBgColors)
}

logpty.cb(['aquamarine', 'red', ' hello '], ['red', 'aquamarine', ' word ']);