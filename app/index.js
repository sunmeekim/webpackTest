import _ from 'lodash';
import '../base.css';
// import { isMoment } from '../node_modules/moment';
var moment = require('moment');
var ele = document.querySelectorAll('p');
var ele2 = document.getElementsByClassName('container')[0];
var $ = require('jquery');
console.log("loaded jQuery version is " + $.fn.jquery);


function component () {
    var element = document.createElement('div');
  
    /* lodash is required for the next line to work */
    element.innerHTML = _.join(['Hello','webpack'], ' ');
  
    return element;
}
  
document.body.appendChild(component());

document.addEventListener("DOMContentLoaded", function(event) {
  ele[0].innerHTML = moment().format();
  ele[1].innerHTML = _.drop([1,2,3],0);
  ele2.innerHTML = "webpack loader!!!!!!!!!";
});