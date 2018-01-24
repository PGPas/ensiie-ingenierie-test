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
