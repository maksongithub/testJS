"use strict";

let numberOfFilms = prompt("Сколько фильмов посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};

let filmOne = prompt("Какой из последних фильмов вы посмотрели?");
let filmOneStar = prompt("На скольков вы его оцените?");
let filmTwo = prompt("Какой из последних фильмов вы посмотрели?");
let filmTwoStar = prompt("На скольков вы его оцените?");

personalMovieDB.movies[filmOne] = filmOneStar;
personalMovieDB.movies[filmTwo] = filmTwoStar;

console.log(personalMovieDB);