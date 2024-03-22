//Задача №1 Сравнить массивы
function compareArrays(arr1, arr2) {
    return arr1.length === arr2.length && arr1.every((element, index) => element === arr2[index]);
}

//Задача №2 Получение среднего возраста пользователей одного пола
function getUsersNamesInAgeRange(users, gender) {
    const usersFilter = users.filter(user => user.gender === gender);

    if(usersFilter.length === 0){
        return 0;
    }

    return usersFilter.reduce((acc, user) => acc + user.age / usersFilter.length, 0);
}