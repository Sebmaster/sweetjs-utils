var x = {
	a: { d: 'b' },
	c: 'd'
};
console.log(typeof x.a === 'undefined' ? undefined : x.a.d);
console.log(typeof (typeof x === 'undefined' ? undefined : x.y) === 'undefined' ? undefined : (typeof x === 'undefined' ? undefined : x.y).z);