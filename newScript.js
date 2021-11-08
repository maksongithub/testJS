"use strict";

let numberOfFilms = prompt("Сколько фильмов посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};

for(let i = 0; i < 2; i++){
    let film = prompt("Какой из последних фильмов вы посмотрели?");
    let filmStar = prompt("На скольков вы его оцените?");

    if(film == "" || filmStar == ""){
        i--;
        film = "", filmStar = "";
        console.log("Error");
    }
    if(film.length>50){
        i--;
        film = "";
        console.log("Error");
    }
    else{
        personalMovieDB.movies[film] = filmStar;
    }
}
if(personalMovieDB.count<=10){
    alert("Вы посмотрели мало фильмов");
}
if(11<=personalMovieDB.count<=15){
    alert("Вы видели не мало фильмов");
}
if(personalMovieDB.count>=16){
    alert("Вы киноман");
}
console.log(personalMovieDB);