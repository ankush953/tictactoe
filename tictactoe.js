// created by ankush_953

function script(){

var paraOne = document.querySelector('#One');
var paraTwo = document.querySelector('#Two');
var paraThree = document.querySelector('#Three');
var paraFour = document.querySelector('#Four');
var paraFive = document.querySelector('#Five');
var paraSix = document.querySelector('#Six');
var paraSeven = document.querySelector('#Seven');
var paraEight = document.querySelector('#Eight');
var paraNine = document.querySelector('#Nine');
var paraClear = document.querySelector('#Clear');
//functionClear();
var allcells = document.querySelectorAll('td');

var turn = 0, choice_2= 'X';
var choice_1 = prompt('Enter your choice: X or O');
var player_1 = prompt('Enter your name ');
if(choice_1==='X'){
  turn = 1;
  choice_2 = 'O';
}
var player_2 = prompt('Enter player-2 name ');
// var player = {choice_1:player_1,choice_2:player_2};
// console.log(player.get(choice_1));
var map = new Map();
map.set(choice_1,player_1);
map.set(choice_2,player_2);


function functionAll(){

  if(this.textContent!=='')
  return;
  if(turn===0){
    this.textContent = 'O';
    this.style.fontSize = '100px';
    this.style.color = 'red';
  }
  else {
    this.textContent = 'X';
     this.style.fontSize = '100px';
    this.style.color = '#A3B5D8';
  }
  turn ^= 1;
  this.addEventListener('mouseout',check);
  

}

function functionClear() {


  for(var i=0;i<allcells.length;i++){
    allcells[i].textContent = '';
    allcells[i].style.color = 'black';
  }

//alert('Cleared!!!');
}

function check(){
  var One = paraOne.textContent;
  var Two = paraTwo.textContent;
  var Three = paraThree.textContent;
  var Four = paraFour.textContent;
  var Five = paraFive.textContent;
  var Six = paraSix.textContent;
  var Seven = paraSeven.textContent;
  var Eight = paraEight.textContent;
  var Nine = paraNine.textContent;

  if( (One!=='' && (One===Two && Two===Three || One===Five && Five===Nine || One===Four && Four===Seven))
   || (Five!=='' && (Two===Five && Five===Eight  || Three===Five && Five===Seven || Four===Five && Five===Six) )
    || (Nine!=='' && (Seven===Eight && Eight===Nine || Three===Six && Six===Nine ) ) )
  {
    alert(map.get(this.textContent)+" Won!");
    functionClear();
  }
}

for(var i=0;i<allcells.length;i++)
  allcells[i].addEventListener('click',functionAll);

paraClear.addEventListener('click',functionClear);
}

