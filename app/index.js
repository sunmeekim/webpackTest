import _ from 'lodash';
import '../base.css';
// import { isMoment } from '../node_modules/moment';
var moment = require('moment');
// var ele = document.querySelectorAll('p');
// var ele2 = document.getElementsByClassName('container')[0];
var $ = require('jquery');
console.log("loaded jQuery version is " + $.fn.jquery);

const inputData = document.getElementById('todo').value;
// const listItem = document.getElementsByClassName('todoLink')[i];  
function todoWriteSubmit () {
  const listItem = document.getElementsByClassName('todoItem')[0];
  return listItem  
}
  
document.getElementsByClassName('todoList').appendChild(todoWriteSubmit ());

document.addEventListener("DOMContentLoaded", function(event) {
  // ele[0].innerHTML = moment().format();
  // ele[1].innerHTML = _.drop([1,2,3],0);
  // ele2.innerHTML = "webpack loader!!!!!!!!!";
});