macro (?.) {
	rule infix { $obj:expr (.) ... | $rest } => {
		(typeof $obj (.) ... === 'undefined' ? undefined : $obj ... . $rest)
	}
}

var x = {a:{d: 'b'}, c:'d'};
console.log(x.a?.d);
console.log(x?.y?.z);
