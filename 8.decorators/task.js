//Задача 1. Усовершенствовать кеширующий декоратор
function cachingDecoratorNew(func) {
    let cache = [];

    function wrapper (...args) {
        const hash = md5(args); // получаем правильный хеш c помощью функции md5
        const objectInCache = cache.find(item => item.hash === hash); // ищем элемент, хеш которого равен нашему хешу
        if(objectInCache) { // если элемент найден
            console.log("Из кеша: " + objectInCache.value); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
            return "Из кеша: " + objectInCache.value;
        }
        
        let result = func(...args); // в кеше результата нет — придётся считать
        cache.push({
            hash,
            value: result
        }); // добавляем элемент с правильной структурой

        if (cache.length > 5) {
            cache.shift(); // если слишком много элементов в кеше, надо удалить самый старый (первый) 
        }
        
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;
    }
    return wrapper;
}

//Задача № 2. Декоратор debounce с моментальным вызовом и подсчётом количества вызовов
function debounceDecoratorNew(func, delay) {
    let timeoutId;
    wrapper.count = 0;
    wrapper.allCount = 0;

    function wrapper(...args) {
        if(timeoutId) { // если уже есть таймаут
            clearTimeout(timeoutId);
        }

        if(!timeoutId) { // первый сигнал
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