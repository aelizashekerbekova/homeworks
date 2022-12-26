let vush; // пустая для дальнейш работы с ним
function cal() {  // cоздали функции
    let otv; // пустая для дальнейш работы с ним
    let one = Number(document.getElementById("one").value); // перадли первый инпут к переменной one
    let two = Number(document.getElementById("two").value); // перадли второй инпут к переменной two
    let obshOper = document.querySelector(".operatoObsh"); // передеали класс operatoObsh к переменной obshOper
    switch (vush) {  // создали switch/case и передали vush
        case "+":  // еслм данное значение совпадает происхожит следующее
            otv = one + two; // операция
            obshOper.innerHTML = "+"; // и создаем + между инпутами
            break; // останавливаем

        case "-":
            otv = one - two;
            obshOper.innerHTML = "-";
            break;

        case "*":
            otv = one * two;
            obshOper.innerHTML = "*";
            break;

        default:
            otv = "Введите корректно"; //  если не совпадает данные, то выводит след(как оператор else)
    }
    document.getElementById("otv").innerHTML = otv;  // просто показываем ответ
}