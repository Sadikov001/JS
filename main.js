// Первое задание с использованием if-else

var asd = +prompt("Введите свой возраст: ")

if (asd >= 0 && asd <= 18) {
    console.log("Вы ещё молоды.Вам нужно учиться!");
} else if(asd >= 18 && asd <= 50) {
    console.log("Вам нужно работать! ");
} else if (asd >= 50 && asd <= 59) {
    console.log("Вам скоро на пенсию!");
} else if (asd >= 59 && asd <= 150) {
    console.log("Вы настоящий пенсионер");
} else if (asd >= 150) {
    console.log("Что-то пошло не так");
}



//Второе задание с использованием конструкции switch (использовал вместо if-else);

var num = +prompt("Введите время: ");

switch (num) {
    case 1:
        alert(1 + " час ночи");
        break;
    case 2:
        alert(2 + " часа ночи");
        break;
    case 3:
        alert(3 + " часа ночи");
        break;
    case 4:
        alert(4 + " часа утра");
        break;
    case 5:
        alert(5 + " часов утра");
        break;
    case 6:
        alert(6 + " часов утра");
        break;
    case 7:
        alert(7 + " часов утра");
        break;
    case 8:
        alert(8 + " часов утра");
        break;
    case 9:
        alert(9 + " часов утра");
        break;
    case 10:
        alert(10 + " часов утра");
        break;
    case 11:
        alert(11 + " часов утра");
        break;
    case 12:
        alert(12 + " часов дня");
        break;
    case 13:
        alert(1 + " час дня");
        break;
    case 14:
        alert(2 + " часа дня");
        break;
    case 15:
        alert(3 + " часа дня");
        break;
    case 16:
        alert(4 + " часа дня");
        break;
    case 17:
        alert(5 + " часов вечера");
        break;
    case 18:
        alert(6 + " часов вечера");
        break;
    case 19:
        alert(7 + " часов вечера");
        break;
    case 20:
        alert(8 + " часов вечера");
        break;
    case 21:
        alert(9 + " часов вечера");
        break;
    case 22:
        alert(10 + " часов вечера");
        break;
    case 23:
        alert(11 + " часов вечера");
        break;
    case 24:
        alert(12 + " часов ночи");
        break;                           
}

//Третье задание с использованием if-else. Логические задачи.

var x = +prompt("Введите первую цифру: ")

var y = +prompt("Введите вторую цифру: ")

var z = +prompt("Введите третью цифру: ")

if (x > y && y < z || x < y && x > z) {
    alert("Среднее число: " + x);
} else if (y > x && y < z || y < x && y > z) {
    alert("Среднее число: " + y)
} else if (z > x && z < y || z < x && z > y) {
    alert("Среднее число: " + z)
}            