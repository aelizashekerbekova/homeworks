// var name = 'Aeliza';
// var surname = 'Shekerbekova';
// console.log('мое ФИО - ',surname + ' ' + name);
// var password = 'mona1iza';
// console.log('мой пароль - ',password);

var name = prompt('введите свое имя:');//Aeliza
var surname = prompt( 'введите свою фамилию:');//Shekerbekova
var password = prompt('пароль:');//mona1iza

if (password === 'mona1iza'){
    alert ( 'хай', name );
}else if  (password ===' ' || password === null){
    alert ( 'Отменено', surname) ;
}else {
    alert ( 'Неверный пароль ');
}

var day = prompt('введите число рождения: ');
var manth = prompt('введите месяц рождения: ');

if (day >= 21 && day <= 31 && manth === 'март' || day >= 20 && manth === 'апрель'){
    console.log('ваш знак - овен')
} else {
    console.error('error')
}






