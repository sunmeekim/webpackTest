import _ from 'lodash';
import '../base.css';
// import { isMoment } from '../node_modules/moment';
var moment = require('moment');
// var ele = document.querySelectorAll('p');
// var ele2 = document.getElementsByClassName('container')[0];
var $ = require('jquery');
console.log("loaded jQuery version is " + $.fn.jquery);


const todoList = () => {
  
  const todoWrap = document.getElementById('todoCont');
  const todoList = '<ul class=\"todoList\" id=\"todoList\"></ul>';
  todoWrap.innerHTML = todoList;

  return 
}
const todoItem = () => {
  
  const inputData = document.getElementById('todo').value;
  const itemLink = document.createElement('a');
  itemLink.className = 'todoLink';
  itemLink.href = '#'
  itemLink.innerHTML = inputData;
  const item  = document.createElement('li');
  item.className = 'todoItem';
// const item = '<li class=\"todoItem\"><a href=\"#\" class=\"todoLink\">'+ inputData +'</a></li>'

  document.getElementById("todoList").appendChild(item).appendChild(itemLink);
}

// const todoCheck = () => {
//   var checkPoint = document.querySelector('.todoItem').classList.contains('done');
//   if(checkPoint) {
//     document.querySelector('.todoItem').setAttribute("class","todoItem done")
//   } else {
//     document.querySelector('.todoItem').setAttribute("class","todoItem")
//   }

// } 
// const todoLink = document.querySelector('.todoLink');
// todoLink.addEventListener ("click", function(e){
//   e.preventDefault();
//   todoCheck();
// });

const inputBtn = document.getElementById('todoBtn');
const resetBtn = document.getElementById('todoResetBtn');

inputBtn.addEventListener("click", function(e){
  e.preventDefault()
  todoList();
  todoItem();
  
});
resetBtn.addEventListener("click", function(e) {
  e.preventDefault()
  document.getElementsByClassName("todoList")[0].remove();
});