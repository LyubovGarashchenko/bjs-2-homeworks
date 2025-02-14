//Task 1. Усовершенствовать кеширующий декоратор

function cachingDecoratorNew(func) {
	let cache = [];

	function wrapper(...args) {
		const hash = md5(args);
		const objectInCache = cache.find(item => item.hash === hash);
		if (objectInCache) {
			console.log("Из кеша: " + objectInCache.value);
			return "Из кеша: " + objectInCache.value;
		}

		let result = func(...args);
		cache.push({
			hash,
			value: result
		});
		if (cache.length > 5) {
			cache.shift();
		}
		console.log("Вычисляем: " + result);
		return "Вычисляем: " + result;
	}
	return wrapper;
}

//Task 2. Декоратор debounce с моментальным вызовом и подсчётом количества вызовов

function debounceDecoratorNew(func, delay) {
	let timeoutId;
	wrapper.count = 0;
	wrapper.allCount = 0;

	function wrapper(...args) {
		if (timeoutId) {
			clearTimeout(timeoutId);
		}

		if (!timeoutId) {
			func(args);
			wrapper.count++;
		}

		timeoutId = setTimeout(() => {
			wrapper.count++;
			func(args);
		}, delay);

		wrapper.allCount++;
	}
	return wrapper;
}
