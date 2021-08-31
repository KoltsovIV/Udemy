/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)
const promotion = document.querySelectorAll(".promo__adv img");

const deleteElements = (arr) => {
    arr.forEach(item => {
        item.remove();
    });
};

deleteElements(promotion);


// 2) Изменить жанр фильма, поменять "комедия" на "драма"

const movieType = document.querySelector('.promo__genre');

movieType.textContent = 'драма';


// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

const topBG = document.querySelector('.promo__bg');

const bgChange = (item, url) => {
    item.style.backgroundImage = 'url("img/bg.jpg")';
};

bgChange(topBG);


// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

const movieList = document.querySelector('.promo__interactive-list');

const sortArr = (arr) => {
    arr.sort();
};

// 5) Добавить нумерацию выведенных фильмов */

function addMovieToList(films, parent) {
    sortArr (films);
    parent.innerHTML = "";
        films.forEach((film, i) => {
        parent.innerHTML += `
            <li class="promo__interactive-item">${i+1} ${film}
              <div class="delete"></div>
            </li>
        `;
    });
}

addMovieToList(movieDB.movies, movieList);