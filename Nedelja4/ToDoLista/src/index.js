

const addTaskButton=document.querySelector('#btn-add');
const taskListContainer=document.querySelector('#tasks-container');
const textBoxTitle= document.querySelector('#txt-title');
const removeAllSelectedItemsButton = document.querySelector('#btn-remove');
const selectInverted=document.querySelector('#select-inverted');
//console.log(taskListContainer);
//console.log(addTaskButton);

//console.log(addTaskButton.parentElement);
//console.log(addTaskButton.parentNode);

addTaskButton.addEventListener('click',btnAddClick);
removeAllSelectedItemsButton.addEventListener('click', removeAllSelectedTasks);
textBoxTitle.addEventListener('keyup',txtKeyUp);
selectInverted.addEventListener('click', inventer);
function btnAddClick(e){
    //console.log(e);
    //console.log(e.target);
    e;
    addItem();
}

function txtKeyUp(e){
    //console.log(e);
    if(e.keyCode==13){
        addItem();
    }
}

function addItem(){
    
    let txtBox=document.querySelector('#txt-title');
    //console.log(txtBox);    
   
    let text=txtBox.value;
    text=text.trim();
    if(text==''){
        alert('Task Title can not be empty!');
        return;
    }

    //console.log(text);
    
    let itemContainer=document.createElement("div");
    //console.log(itemContainer);
    itemContainer.className='task-item';
    
    let itemText=document.createElement('p');
    itemText.innerHTML=text;
    itemText.className='task-title';
    //console.log(itemText);

    let checkContainer=document.createElement('div');
    checkContainer.className='task-check';
    
    let removeBtn=document.createElement('button');
    removeBtn.className='task-remove-btn';
    removeBtn.addEventListener('click',removeTask);
    removeBtn.innerHTML='X';

    let chkDone=document.createElement('input');
    chkDone.type='checkbox';
    chkDone.className='chk-state';
    chkDone.value='done';
    chkDone.addEventListener('change',handleCheckChange);

    checkContainer.appendChild(removeBtn);
    checkContainer.appendChild(chkDone);


		
    itemContainer.appendChild(itemText);
    itemContainer.appendChild(checkContainer);
    taskListContainer.appendChild(itemContainer);
		createSelectWithOptions(itemContainer,3,['Low','Medium','High']);

    txtBox.value='';
    

}
function removeTask(e){
    //console.log(e);
    //console.log(e.target);
    if(!confirm('Are you sure?')){
        return;
    }
    let btnToRemove=e.target;
    let divToRemove=btnToRemove.parentElement.parentElement;
    //console.log(divToRemove);
    divToRemove.remove();
}
function removeAllSelectedTasks() {
	let taskContainer = document.getElementById('tasks-container');
	var taskItem = taskContainer.firstElementChild;  
	while (taskItem) { 	
		var checkboxElement = taskItem.getElementsByClassName('task-check')[0].getElementsByTagName('input')[0];
		if(checkboxElement.checked == true) {
			var tmpTaskItem = taskItem.nextSibling; 
			taskContainer.removeChild(taskItem); 
			taskItem = tmpTaskItem;
			continue;
		}
		taskItem = taskItem.nextSibling; 
	} 
}
function inventer(){
    let stiklirani=document.querySelectorAll('.chk-state');
    for(let stikliran of stiklirani){
        if(stikliran.checked==true) {
            stikliran.checked=false;
        }else{
            stikliran.checked=true;
        }
    }

    
}
function handleCheckChange(e){
    //console.log(e);
    let chkBox=e.target;

    let checkContainer=chkBox.parentElement;
    let itemContainer=checkContainer.parentElement;

    if(chkBox.checked){
        itemContainer.children[0].style.textDecoration='line-through';
    }
    else{
        
        itemContainer.children[0].style.textDecoration='none';
    }
}
function createSelectWithOptions(itemContainer, numOfOpts, namesOfOpts){
    let select=document.createElement('select');
    select.className='select-priority';
    itemContainer.prepend(select);
		var selectEl = itemContainer.children[0]; //ovo je problem, on hvata prvi select i tu dodaje sve...
		
for (let i = 0; i<numOfOpts; i++){ //to je undefined
    let opt = document.createElement('option');
    opt.value = namesOfOpts[i];
    opt.innerHTML = namesOfOpts[i];
    selectEl.appendChild(opt);
}
}