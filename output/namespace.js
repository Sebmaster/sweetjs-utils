if (typeof Test.A === 'undefined') {
	Test.A = {};
}
Test.A.x = null;
if (typeof Test.B === 'undefined') {
	Test.B = {};
}
Test.B.x = function (a) {
	console.log(a);
};
Test.B.y = function (a) {
	console.log('b');
};
if (typeof Test.AB === 'undefined') {
	Test.AB = {};
}
Test.AB.x = null;
Test.AB.y = null;
Test.AB.x = function (a) {
	console.log(a);
};
Test.AB.y = function (a) {
	console.log('b');
};
if (typeof New === 'undefined') {
	New = {};
}
if (typeof New.Other === 'undefined') {
	New.Other = {};
}
if (typeof New.Other.Third === 'undefined') {
	New.Other.Third = {};
}
New.Other.Third.x = function (a) {
	console.log('c');
};
New.Other.Third.y = function (a) {
	console.log('d');
};