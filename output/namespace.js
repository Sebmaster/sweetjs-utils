if (typeof Test.Other === 'undefined') {
	Test.Other = {};
}
Test.Other.x = function (a) {
	console.log(a);
};
Test.Other.y = function (a) {
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