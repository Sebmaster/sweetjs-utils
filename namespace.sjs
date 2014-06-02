macro namespace {
	rule {
		$nname:expr {
			$(function $fname $fparams $fbody) ...
		}
	} => {
		$($nname.$fname = function $fparams $fbody;) ...
	}
	
	rule {
		$nname {
			$(namespace $newname $newbody) ...
		}
	} => {
		$(namespace $nname.$newname $newbody) ...
	}
}

namespace Test {
	function x(a) {
		console.log('a');
	}
	
	function y(a) {
		console.log('b');
	}
}

namespace New {
	namespace Other {
		function x(a) {
			console.log('c');
		}
	
		function y(a) {
			console.log('d');
		}
	}
}