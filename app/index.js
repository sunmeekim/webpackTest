import _ from 'lodash';
import '../base.css';
import moment from 'moment';
import $ from 'jquery';

const todoList = () => {
  const todoWrap = document.getElementById('todoCont');
  const todoList = document.createElement('ul');
  todoList.id = 'todoList';
  todoList.className = 'todoList';
  todoWrap.appendChild(todoList);
}

const todoItem = () => {
  todoList(); //ul태그 만들어주기
  let defaultData = []; // input에 입력된 값을 배열로 받을 예정
  let inputData = document.getElementById('todo').value; //input에 입력된 값
  
  defaultData.push(inputData);// 배열에 input에서 받은 값을 추가
  let list = document.querySelector('ul.todoList'); // 위에서 만들어준 ul 태그를 잡아줌

  //입력된 값의 갯수만큼 li에 값을 추가해줍니다. 
  defaultData.forEach(function(index){
    
    let itemLink = document.createElement('a');
    itemLink.className = 'todoLink';
    itemLink.href = '#'
    itemLink.textContent = inputData;

    let item  = document.createElement('li');
    item.className = 'todoItem';

    list.appendChild(item).appendChild(itemLink);

  })

  //return defaultData;
}

const inputBtn = document.getElementById('todoBtn');
const resetBtn = document.getElementById('todoResetBtn');

inputBtn.addEventListener("click",function(){
  todoItem();
});

resetBtn.addEventListener("click", function(e) {
  e.preventDefault()
  
  document.getElementById("todoList").remove();
});