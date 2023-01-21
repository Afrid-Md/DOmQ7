alert('hello');


var item=document.querySelector('#items');
console.log(item.parentElement);
console.log(item.lastElementChild);
console.log(item.lastChild);
console.log(item.firstElementChild);
console.log(item.nextSibling);
console.log(item.nextElementSibling);
console.log(item.previousElementSibling);
console.log(item.previousSibling);

var newdiv=document.createElement('div');
newdiv.className='ok';
newdiv.id='hello';
newdiv.setAttribute('title','hello1');

var newdivText = document.createTextNode('Hello World');

newdiv.appendChild(newdivText);


console.log(newdiv);


var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');
container.insertBefore(newdiv,h1);

var listgroupitems = document.querySelector('ul .listgroupitems');
var li=document.querySelector('ul li');
listgroupitems.insertBefore(newdiv,li);

