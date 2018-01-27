Interval = function(start, end) {
    this.start = start;
    this.end = end
};

Interval.prototype.toString = function () {
    return "[" + this.start + "," + this.end + "]";
};

/**
 *
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.overlaps = function (interval) {
    return this.end >= interval.start && this.start <= interval.end;
};


/**
 * Retourne true si cet interval inclu le parametre interval
 * @param {Interval} interval
 * @returns {boolean}
 */
Interval.prototype.includes = function (interval) {
	return this.start <= interval.start && this.end >= interval.end;
};

/**
 * Retourne l'union de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.union = function (interval) {
	if (this.overlaps(interval) || this.start == interval.end || this.end == interval.start) {
		return [ new Interval(Math.min(this.start, interval.start), Math.max(this.end, interval.end)) ];
	} else {
		return [this, interval];
	}
};

/**
 * Retourne l'intersection de deux intervals
 * @param {Interval} interval
 * @returns {Interval|null}
 */
Interval.prototype.intersection = function (interval) {
	if(!this.overlaps(interval)) return null;
	return new Interval(Math.max(this.start, interval.start), Math.min(this.end, interval.end));
};

/**
 * Retourne l'exclusion de deux intervals
 * @param {Interval} interval
 * @returns {Interval[]}
 */
Interval.prototype.exclusion = function (interval) {
	if(!this.overlaps(interval)) throw 'No overlap between two intervals';
	let ret = [];
	let union = this.union(interval)[0];
	let intersection = this.intersection(interval);

	if(union.start == intersection.start && union.end == intersection.end) {
		return [];
	} else if (union.start == intersection.start) {
		ret.push(new Interval(intersection.end + 1, union.end));
	} else if (union.end == intersection.end) {
		ret.push(new Interval(union.start, intersection.start - 1));
	} else {
		ret.push(new Interval(union.start, intersection.start - 1));
		ret.push(new Interval(intersection.end + 1, union.end));
	}

	return ret;
};



