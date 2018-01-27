describe("Factorial : ", function() {
  // Normal
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

  // Invalid input
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
  // Normal
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
      r: 4,
      n: 6,
      result: 360
    },
    // Same r and n
    {
      r: 4,
      n: 4,
      result: 24
    },
    {
      r: 0,
      n: 0,
      result: 1
    },
    {
      r: 2,
      n: 2,
      result: 2
    }
  ].forEach(function(cas) {
    it('No. of arrangements of ' + cas.r + ' from ' + cas.n + " = " + cas.result, function() {
      expect(Util.arrangement(cas.n, cas.r)).toBe(cas.result);
    });
  });

  // r > n cases
  [
    {
      r: 3,
      n: 2,
      result : 0
    },
    {
      r: 6,
      n: 3,
      result : 0
    },
    {
      r: 6,
      n: 4,
      result : 0
    }
  ].forEach(function(cas) {
    it('No. of arrangements of ' + cas.r + ' from ' + cas.n + " = " + cas.result, function() {
      expect(Util.arrangement(cas.n, cas.r)).toBe(cas.result);
    });
  });

  // Invalid r input
  [
    {
      r: '3',
      n: 2,
    },
    {
      r: 6.33,
      n: 3,
    },
    {
      r: -6,
      n: 4,
    }
  ].forEach(function(cas) {
    it('r is not natural integer', function() {
        var toThrow = () => {
          Util.arrangement(cas.n, cas.r);
        };
        expect(toThrow).toThrow('Input r is not natural integer');
    });
  });

  // Invalid n input
  [
    {
      r: 2,
      n: '3',
    },
    {
      r: 3,
      n: 6.33,
    },
    {
      r: 4,
      n: -6,
    }
  ].forEach(function(cas) {
    it('n is not natural integer', function() {
        var toThrow = () => {
          Util.arrangement(cas.n, cas.r);
        };
        expect(toThrow).toThrow('Input n is not natural integer');
    });
  });

});

describe("Combinations : ", function() {
  // Normal
  [
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
    },

    // Same r and n
    {
      r: 4,
      n: 4,
      result: 1
    },
    {
      r: 0,
      n: 0,
      result: 1
    },
    {
      r: 2,
      n: 2,
      result: 1
    }
  ].forEach(function(cas) {
    it('No. of combinations of ' + cas.r + ' from ' + cas.n + " = " + cas.result, function() {
      expect(Util.combination(cas.n, cas.r)).toBe(cas.result);
    });
  });

  // r > n cases
  [
    {
      r: 3,
      n: 2,
      result : 0
    },
    {
      r: 6,
      n: 3,
      result : 0
    },
    {
      r: 6,
      n: 4,
      result : 0
    }
  ].forEach(function(cas) {
    it('No. of combinations of ' + cas.r + ' from ' + cas.n + " = " + cas.result, function() {
      expect(Util.arrangement(cas.n, cas.r)).toBe(cas.result);
    });
  });

  // Invalid r input
  [
    {
      r: '3',
      n: 2,
    },
    {
      r: 6.33,
      n: 3,
    },
    {
      r: -6,
      n: 4,
    }
  ].forEach(function(cas) {
    it('r is not natural integer', function() {
        var toThrow = () => {
          Util.arrangement(cas.n, cas.r);
        };
        expect(toThrow).toThrow('Input r is not natural integer');
    });
  });

  // Invalid n input
  [
    {
      r: 2,
      n: '3',
    },
    {
      r: 3,
      n: 6.33,
    },
    {
      r: 4,
      n: -6,
    }
  ].forEach(function(cas) {
    it('n is not natural integer', function() {
        var toThrow = () => {
          Util.arrangement(cas.n, cas.r);
        };
        expect(toThrow).toThrow('Input n is not natural integer');
    });
  });

});

describe("isPrime : ", function() {
  // Invalid n input
  [
    { n: '3'},
    { n: 6.33 },
    { n: -6 }
  ].forEach(function(cas) {
    it('n is not natural integer', function() {
        var toThrow = () => {
          Util.isPrime(cas.n);
        };
        expect(toThrow).toThrow('Input n is not natural integer');
    });
  });

  // is prime
  [
    { n: 2, isPrime: true },
    { n: 3, isPrime: true },
    { n: 5, isPrime: true },
    { n: 7, isPrime: true },
    { n: 11, isPrime: true },
    { n: 13, isPrime: true },
    { n: 17, isPrime: true },
    { n: 19, isPrime: true },
    { n: 23, isPrime: true },
    { n: 29, isPrime: true },
    { n: 31, isPrime: true },
    { n: 1697, isPrime: true },
    { n: 2137, isPrime: true },
    { n: 7883, isPrime: true },
    { n: 7919, isPrime: true },
  ].forEach(function(cas) {
    it(cas.n + ' must be prime', function() {
      expect(Util.isPrime(cas.n)).toBe(cas.isPrime);
    });
  });

  // is not prime
  [
    { n: 0, isPrime: false },
    { n: 1, isPrime: false },
    { n: 4, isPrime: false },
    { n: 6, isPrime: false },
    { n: 8, isPrime: false },
    { n: 14, isPrime: false },
    { n: 18, isPrime: false },
    { n: 21, isPrime: false },
    { n: 2100, isPrime: false },
    { n: 2102, isPrime: false },
  ].forEach(function(cas) {
    it(cas.n + ' must not be prime', function() {
      expect(Util.isPrime(cas.n)).toBe(cas.isPrime);
    });
  });
  
});

describe("sumPrime : ", function() {
  // Invalid n input
  [
    { n: '3'},
    { n: 6.33 },
    { n: -6 }
  ].forEach(function(cas) {
    it('n is not natural integer', function() {
        var toThrow = () => {
          Util.sumPrime(cas.n);
        };
        expect(toThrow).toThrow('Input n is not natural integer');
    });
  });

  [
    { n: 2, result: 2 },
    { n: 3, result: 5 },
    { n: 6, result: 10 },
    { n: 8, result: 17 },
    { n: 11, result: 28 },
    { n: 13, result: 41 },
    { n: 17, result: 58 }
  ].forEach(function(cas) {
    it('sumPrime(' + cas.n + ') should equals ' + cas.result, function() {
      expect(Util.sumPrime(cas.n)).toBe(cas.result);
    });
  });  
});