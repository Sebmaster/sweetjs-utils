macro namespace {
	rule {
		$nname:expr {
			$(function $fname $fparams $fbody) ...
		}
	} => {
		if (typeof $nname === 'undefined') {
			$nname = {};
		}
		
		$($nname.$fname = function $fparams $fbody;) ...
	}
	
	rule {
		$nname:expr {
			$(namespace $newname $newbody) ...
		}
	} => {
		if (typeof $nname === 'undefined') {
			$nname = {};
		}
		
		$(namespace $nname.$newname $newbody) ...
	}
}

namespace Test.Other {
	function x(a) {
		console.log(a);
	}
	
	function y(a) {
		console.log('b');
	}
}

namespace New {
	namespace Other {
		namespace Third {
			function x(a) {
				console.log('c');
			}
	
			function y(a) {
				console.log('d');
			}
		}
	}
}