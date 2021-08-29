/*
start global variables
*/
const player={
  name:'player',
  score:0
}
let tiles=0;
const box=document.querySelector('.parent');
const grids=document.querySelectorAll('.child');
const score=document.querySelector('#score');
const nextLevel=document.querySelector('.next-level');
const newGame=document.querySelector('.new-game');
const nextLevelButton=document.querySelector('#next-level-button');
const newGameButton=document.querySelector('#new-game-button');
const playerName=document.querySelector('#player-name');
const playerNameHeader=document.querySelector('#player-name-header');
const highScore=document.querySelector('#high-score');
const header= document.querySelector('#user-info');
const gameInfo=document.querySelector('#game-info');
const gameOver=document.querySelector('.game-over');
const playAgainButton=document.querySelector('#play-again-button');
const loseAudio=new Audio('./audio/lose.wav');
const goodMoveAudio =new Audio('./audio/goodmove.wav');
const buttonAudio= new Audio('./audio/button.wav');

