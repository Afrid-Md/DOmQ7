var filter = document.getElementById("filter");
var itemList = document.getElementById('items');
var form=document.getElementById("addForm");
var description=document.getElementById("description");

form.addEventListener('submit',addDescription);
form.addEventListener('submit',addItem);
filter.addEventListener('keyup', filterItems);

function filterItems(e){
       var text = e.target.value.toLowerCase();
       console.log(text);

       var items=itemList.getElementsByTagName('li');
       console.log(items);

       Array.from(items).forEach(function(item){
              var itemName = item.firstChild.textContent;
              if(itemName.toLowerCase().indexOf(text)!=-1){
                     item.style.display='block';
              }else{
                     item.style.display='none';
              }
       })
}

function addItem(e){
       e.preventDefault();
       
       var newItem=document.getElementById('item').value;

       var li=document.createElement('li');

       li.className="list-group-item";

       li.appendChild(document.createTextNode(newItem));

       itemList.appendChild(li);
}

function addDescription(e){
       e.preventDefault();
       var newDes = document.getElementById('description').value;

       var li=document.createElement('li');

       li.className="list-group-item";

       li.appendChild(document.createTextNode(newDis));

       itemList.appendChild(li);
}