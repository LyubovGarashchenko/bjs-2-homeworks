// Task 1
"use strict";

function solveEquation(a, b, c) {
	// Вычислим  discriminant (d)
	const d = b * b - 4 * a * c;

	if (d < 0) {
		return []; // Возврвщает пустой массив, корней нет
	} else if (d === 0) {
		return [-b / (2 * a)]; // Возврвщает один корень
	} else {
		const sqrtD = Math.sqrt(d);
		return [
			-b / (2 * a) + sqrtD / (2 * a),
			-b / (2 * a) - sqrtD / (2 * a)
		]; // Возврвщает два корня
	}
}

// Task 2

function calculateTotalMortgage(percent, contribution, amount, countMonths) {

	// Переведёмм процентную ставку в месячную
	const monthlyRate = percent / 1200;

	// Рассчитаем тело кредита
	const creditBody = amount - contribution;

	// Рассчитаем ежемесячный платеж
	const payment = creditBody * (monthlyRate + monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1));

	// Рассчитаем общую сумму выплаты
	const totalPayment = payment * countMonths;

	// Округляем результат
	const roundedTotalPayment = Math.round(totalPayment * 100) / 100;

	return roundedTotalPayment;
}
