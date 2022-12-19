var anime = {
    name: "жизнь бессмертного короля",
    releaseDate: "20.12.2022 ",
    mainActor: "Лин Ван, Жун Сунь",
    episodes: "24",
    LinVan: {
        rost: "190 cм",
        ves: "68 кг",
        let: "19 лет",
    },
};

console.log(
    "Название аниме: ",
    anime.name,
    "\nДата выхода аниме: ",
    anime.releaseDate,
    "\nГлавные герои: ",
    anime.mainActor,
    "\nКол-во серий: ",
    anime.episodes,
    "\nО главном герое: ",
    "\n Рост: ", anime.LinVan.rost,
    "\n Вес: ", anime.LinVan.ves,
    "\n Лет: ", anime.LinVan.let,

);
let week = prompt("Введите день недели на английском");
switch (week) {
    case "Monday":
    case "monday":
        alert("Понедельник");
        break;
    case "Tuesday":
    case "еuesday":
        alert("Вторник");
        break;
    case "Wednesday":
    case "wednesday":
        alert("Среда");
        break;
    case "Thursday":
    case "thursday":
        alert("Четрверг");
        break;
    case "Friday":
    case "friday":
        alert("Пятница");
        break;
    case "Saturday":
    case "saturday":
        alert("Суббота");
        break;
    case "Sunday":
    case "sunday":
        alert("Воскресенье");
        break;
    default:
        alert("Пожалуйста введите правильно");
}