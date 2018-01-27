describe("Interval - overlapping", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(8, 12),
        new Interval(15, 16),
        new Interval(17, 22),
        new Interval(10, 20),
        new Interval(8, 21)

    ].forEach(function (interval) {
        it("should overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeTruthy();
        });
    });

    [
        new Interval(8, 9),
        new Interval(21, 22)

    ].forEach(function (interval) {
        it("should not overlaps " + testedInterval.toString() + " and " + interval.toString(), function () {
            expect(testedInterval.overlaps(interval)).toBeFalsy();
        });
    });
});

describe("Interval - including", function () {
    testedInterval = new Interval(10, 20);

    [
        new Interval(15, 16),
        new Interval(17, 18),
        new Interval(10, 20)

    ].forEach(function (interval) {
        it(testedInterval.toString() + " should include " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toEqual(true);
        });
    });

    [
        new Interval(9, 10),
        new Interval(20, 21),
        new Interval(5, 8),
        new Interval(25, 27),

    ].forEach(function (interval) {
        it(testedInterval.toString() + " should not include " + interval.toString(), function () {
            expect(testedInterval.includes(interval)).toEqual(false);
        });
    });
});

describe("Interval - union", function () {
    [
        {
            a: new Interval(1, 10),
            b: new Interval(15, 20),
            union: [ new Interval(1, 10), new Interval(15, 20) ]
        },
        {
            b: new Interval(15, 20),
            a: new Interval(1, 10),
            union: [ new Interval(1, 10), new Interval(15, 20) ]
        },
        {
            a: new Interval(10, 20),
            b: new Interval(7, 10),
            union: [ new Interval(7, 20) ]
        },
        {
            a: new Interval(1, 15),
            b: new Interval(10, 20),
            union: [ new Interval(1, 20) ]
        },
        {
            a: new Interval(10, 20),
            b: new Interval(20, 21),
            union: [ new Interval(10, 21) ]
        }

    ].forEach(function (testCase) {
        let testCaseDescription = testCase.a.toString() + " U " + testCase.b.toString() + " should contains";
        testCase.union.forEach(interval => testCaseDescription += " " + interval.toString());

        it(testCaseDescription, function () {
            let res = testCase.a.union(testCase.b);
            let expectedString = ""; 
            testCase.union.forEach(interval => expectedString += interval.toString());

            res.forEach(interval => expect(expectedString).toContain(interval.toString()));
        });
    });
});

describe("Interval - intersection", function () {
    // null cases
    [
        {
            a: new Interval(1, 10),
            b: new Interval(15, 20)
        },
        {
            b: new Interval(15, 20),
            a: new Interval(1, 10)
        }
    ].forEach(function (testCase) {
        let testCaseDescription = testCase.a.toString() + " ∩ " + testCase.b.toString() + " should be null";

        it(testCaseDescription, function () {
            let res = testCase.a.intersection(testCase.b);
            expect(res).toBe(null);
        });
    });

    // normal cases
    [
        {
            a: new Interval(10, 20),
            b: new Interval(7, 10),
            intersection: new Interval(10, 10)
        },
        {
            a: new Interval(1, 15),
            b: new Interval(10, 20),
            intersection: new Interval(10, 15)
        },
        {
            a: new Interval(10, 20),
            b: new Interval(20, 21),
            intersection: new Interval(20, 20)
        },
        {
            a: new Interval(10, 20),
            b: new Interval(13, 17),
            intersection: new Interval(13, 17)
        },
        {
            a: new Interval(11, 19),
            b: new Interval(10, 20),
            intersection: new Interval(11, 19)
        },
        {
            a: new Interval(11, 20),
            b: new Interval(10, 20),
            intersection: new Interval(11, 20)
        },
        {
            a: new Interval(10, 15),
            b: new Interval(10, 20),
            intersection: new Interval(10, 15)
        }

    ].forEach(function (testCase) {
        let testCaseDescription = testCase.a.toString() + " ∩ " + testCase.b.toString() + " should be " + testCase.intersection.toString();

        it(testCaseDescription, function () {
            let res = testCase.a.intersection(testCase.b);
            expect(res.toString()).toBe(testCase.intersection.toString());
        });
    });
});

describe("Interval - exclusion", function () {
    // check for overlapping
    [
        {
            a: new Interval(1, 10),
            b: new Interval(15, 20)
        },
        {
            a: new Interval(15, 20),
            b: new Interval(1, 14)
        }
    ].forEach(function (testCase) {
        let testCaseDescription = testCase.a.toString() + " \\ " + testCase.b.toString() + " should throw don't overlaps exception";

        it(testCaseDescription, function () {
            let f = function () { 
                testCase.a.exclusion(testCase.b);
            }
            expect(f).toThrow('No overlap between two intervals');
        });
    });

    // Same interval
    [
        {
            a: new Interval(10, 20),
            b: new Interval(10, 20),
            exclusion: []
        },
        {
            a: new Interval(15, 30),
            b: new Interval(15, 30),
            exclusion: []
        }

    ].forEach(function (testCase) {
        let testCaseDescription = testCase.a.toString() + " \\ " + testCase.b.toString() + " should be []";
        testCase.exclusion.forEach(interval => testCaseDescription += " " + interval.toString());

        it(testCaseDescription, function () {
            let res = testCase.a.exclusion(testCase.b);
            expect(res).toEqual([]);
        });
    });

    // normal cases
    [
        {
            a: new Interval(10, 20),
            b: new Interval(20, 21),
            exclusion: [ new Interval(10, 19), new Interval(21, 21) ]
        },
        {
            a: new Interval(20, 25),
            b: new Interval(10, 20),
            exclusion: [ new Interval(10, 19), new Interval(21, 25) ]
        },
        {
            a: new Interval(10, 20),
            b: new Interval(15, 21),
            exclusion: [ new Interval(10, 14), new Interval(21, 21) ]
        },
        {
            a: new Interval(13, 23),
            b: new Interval(10, 20),
            exclusion: [ new Interval(10, 12), new Interval(21, 23) ]
        },
        {
            a: new Interval(10, 20),
            b: new Interval(13, 17),
            exclusion: [ new Interval(10, 12), new Interval(18, 20) ]
        },
        {
            a: new Interval(10, 20),
            b: new Interval(10, 27),
            exclusion: [ new Interval(21, 27) ]
        },
        {
            a: new Interval(10, 20),
            b: new Interval(15, 20),
            exclusion: [ new Interval(10, 14) ]
        }

    ].forEach(function (testCase) {
        let testCaseDescription = testCase.a.toString() + " \\ " + testCase.b.toString() + " should contains";
        testCase.exclusion.forEach(interval => testCaseDescription += " " + interval.toString());

        it(testCaseDescription, function () {
            let res = testCase.a.exclusion(testCase.b);
            let expectedString = ""; 
            testCase.exclusion.forEach(interval => expectedString += interval.toString());

            res.forEach(interval => expect(expectedString).toContain(interval.toString()));
        });
    });
});