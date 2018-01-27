Util = {};

/**
 * Calcule la factorielle d'un nombre n. Exp : 5! = 5 * 4 * 3 * 2 * 1
 * @param {number} n
 * @returns {number}
 */
Util.factorial = function(n) {
	if(n !== parseInt(n, 10) || n < 0) throw 'Input is not natural integer';
	let res = 1;
	for (let i = n; i >= 0; i--) {
		if(i != 0) {
			res *= i;
		} 
	};
	return res;
};

/**
 * Calcule la disposition ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.arrangement(n, r) = n! / (n - r)!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.arrangement = function(n, r) {
	if(r !== parseInt(r, 10) || r < 0) throw 'Input r is not natural integer';
	if(n !== parseInt(n, 10) || n < 0) throw 'Input n is not natural integer';
	if(r > n) return 0;
	return Util.factorial(n) / Util.factorial(n - r);
};

/**
 * Calcule la disposition non ordonnée de r éléments dans un ensemble de n elements.
 * Formule: Util.combination(n, r) = n! / (n - r)!r!
 * @param {number} n
 * @param {number} r
 * @returns {number}
 */
Util.combination = function(n, r) {
	if(r !== parseInt(r, 10) || r < 0) throw 'Input r is not natural integer';
	if(n !== parseInt(n, 10) || n < 0) throw 'Input n is not natural integer';
	if (r > n) return 0;
	return Util.factorial(n) / (Util.factorial(n - r) * Util.factorial(r));
};

/**
 * Détermine si n est un nombre premier.
 * Util.isPrime(5) => false
 * Util.isPrime(6) => true
 *
 * @param {number} n
 * @returns {boolean}
 */
Util.isPrime = function(n) {
	if(n !== parseInt(n, 10) || n < 0) throw 'Input n is not natural integer';
	if (n <= 1) return false; // Si négatif on throw l'exception plus haut
	let result = true;
	let racine = Math.sqrt(n);
	for (var i = 2; i <= racine; i++) {
		if (n % i == 0) {
			result = false;
			break;
		}
	}
	return result;
};


/**
 * Additionne l'ensemble des nombres de 2 à n
 *
 * Util.sumPrime(6) = 2 + 3 + 5 = 10
 * Util.sumPrime(8) = 2 + 3 + 5 + 7 = 17
 *
 * @param {number} n
 * @returns {number}
 */
Util.sumPrime = function(n) {

};

/**
 * Cette méthode doit retourner un tableau de 1 à n tel que:
 * - Pour les nombres multiples de 3, les remplacer par "Fizz"
 * - Pour les nombres multiples de 5, les remplacer par "Buzz"
 * - Pour les nombres multiples de 3 et 5, les remplacer par "FizzBuzz"
 *
 * Exp :
 * Util.fizzBuzz(15) => [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
 *
 * @param {number} n
 * @returns {array}
 */
Util.fizzBuzz = function(n) {

};

/**
 * Chiffre une phrase selon la règle suivante : Les A deviennent des B, les B des C, etc.
 *
 * Exp :
 * Util.cipher("Test Unitaire") => "Uftu Tojubjsf"
 *
 * @param phrase
 * @returns {string}
 */
Util.cipher = function (phrase) {

};
