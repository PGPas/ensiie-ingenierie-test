describe("Factorial : ", function() {
  [
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
  ].forEach(function(cas) {
    it(cas.n + '! = ' + cas.factorial, function() {
      expect(Util.factorial(cas.n)).toBe(cas.factorial);
    });
  });

  [
    -5,
    '5',
    '-6',
    5.20
  ].forEach(function(cas) {
    it('Non natural integer', function() {
        var toThrow = () => {
          Util.factorial(cas);
        };
        expect(toThrow).toThrow('Input is not natural integer');
    });
  });

});

describe("Arrangements : ", function() {
  [
    {
      r: 2,
      n: 3,
      result: 6
    },
    {
      r: 3,
      n: 6,
      result: 120
    },
    {
      r: 6,
      n: 3,
      result: 6
    }
  ].forEach(function(cas) {
    it('No. of arrangements de ' + cas.r + ' parmi ' + cas.n + " = " + cas.result, function() {
      expect(Util.arrangement(cas.n, cas.r)).toBe(cas.result);
    });
  });

});

describe("Combinations : ", function() {
  var normalCases = [
    {
      r: 6,
      n: 3,
      result: 0
    },
    {
      r: 3,
      n: 4,
      result: 4
    },
    {
      r: 5,
      n: 6,
      result: 6
    }


  ];

  normalCases.forEach(function(cas) {
    it('No. of combinations de ' + cas.r + ' parmi ' + cas.n + " = " + cas.result, function() {
      expect(Util.combination(cas.n, cas.r)).toBe(cas.result);
    });
  });

});