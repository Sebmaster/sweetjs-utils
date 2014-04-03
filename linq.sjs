macro from {
	rule { $x in $enum select $select } => {
		Enumerable.From($enum)
			.Select(function($x) { return $select });
	}
	
	rule { $x in $enum orderby $order : expr select $select : expr } => {
		Enumerable.From($enum)
			.Where(function($x) { return $where })
			.OrderBy(function($x) { return $order })
			.Select(function($x) { return $select })
		
	}
	
	rule { $x in $enum where $where : expr select $select : expr } => {
		Enumerable.From($enum)
			.Where(function($x) { return $where })
			.Select(function($x) { return $select })
		
	}
	
	rule { $x in $enum where $where : expr orderby $order : expr select $select : expr } => {
		Enumerable.From($enum)
			.Where(function($x) { return $where })
			.OrderBy(function($x) { return $order })
			.Select(function($x) { return $select })
		
	}
}

(from x in jsonArray where x.test == 'A' orderby x.order == 1 ? 2 : 3 select x.other).ToArray();