/**
 * @author Smith, Sierra (sjsmith8147@gmail.com)
 * @Verson 0.0.
 * @Summary Project 3  || created 10.19.2016
 * @todo
 */

"use strict";
const PROMPT = require('readline-sync');

let continueResponse;
let movies;
let movieRating;
let numRating;

function main(){
    while (continueResponse == null || continueResponse === 1){
        setMovies();
    }
    totalRating();
    setNumRating();
    setMovieRating();

}

main();

function setContinueResponse() {
    continueResponse = Number(PROMPT.question('\nDo you want to continue rating this movie? 0 = no, 1=yes '));
    if (continueResponse !== 0 && continueResponse !== 1) {
        console.log(`${continueResponse} is an incorrect value. Please try again.`);
        setContinueResponse();
    }
}

function setMovies() {
    let j = 0;
    let answered = 0;
    const MAX = 3;
    const LOW = 0;
    const HIGH =5;
    movies = Number(PROMPT.question('NightMare Before Christmas (Max 5 Stars) '));
    while (j < MAX || answered != 1) {
        movies = Number(PROMPT.question('\n Nightmare Before Christmas (Max Stars 5) '));
        if (movies < LOW || movies > HIGH) {
            console.log('\n ${movies} is incorrect please try again');//TALK to Howard
            j++;
        } else {
            answered = 1;
            setContinueResponse();
        }
    }

}
function totalRating(){
    totalRating = totalRating + movies;
}
function setNumRating(){
    numRating++;
}
function setMovieRating() {
    movieRating= (totalRating) / (numRating);

}