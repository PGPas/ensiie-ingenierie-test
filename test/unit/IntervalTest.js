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
            let expectedString = ""; testCase.union.forEach(interval => expectedString += interval.toString());

            res.forEach(interval => expect(expectedString).toContain(interval.toString()));
        });
    });
});

