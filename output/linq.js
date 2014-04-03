Enumerable.From(jsonArray).Where(function (x) {
	return x.test == 'A';
}).OrderBy(function (x) {
	return x.order == 1 ? 2 : 3;
}).Select(function (x) {
	return x.other;
}).ToArray();