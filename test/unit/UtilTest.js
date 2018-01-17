describe("Factorial : ", function() {
  var cases = [
  	{
  		n: 0,
  		factorial: 1
  	},
  	{
  		n: 1,
  		factorial: 1
  	},
  	{
  		n: 2,
  		factorial: 2
  	},
  	{
  		n: 3,
  		factorial: 6
  	},
  	{
  		n: 4,
  		factorial: 24
  	}
  ];

  cases.forEach(function(cas) {
  	it(cas.n + '! = ' + cas.factorial, function() {
  		expect(Util.factorial(cas.n)).toBe(cas.factorial);
  	});
  });

});

describe("Arrangements : ", function() {
  var normalCases = [
  	{
  		r: 3,
  		n: 2,
  		result: 6
  	},
  	{
  		r: 6,
  		n: 3,
  		result: 120
  	},
  	{
  		r: 3,
  		n: 6,
  		result: 6
  	}


  ];

  normalCases.forEach(function(cas) {
  	it('No. of arrangements of ' + cas.r + ' from ' + cas.n + " = " + cas.result, function() {
  		expect(Util.arrangement(cas.r, cas.n)).toBe(cas.result);
  	});
  });

});


