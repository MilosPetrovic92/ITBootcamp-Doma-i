console.log('It Works! :D');
const insButton=document.querySelector('#btn-add');
const companyName=document.querySelector('#txt-company-name');
const factureListContainer=document.querySelector('#item-list');
const companyPib=document.querySelector('#txt-company-pib');
const dateOfFacture=document.querySelector('#txt-time');
const valueMoney=document.querySelector('#txt-value');

insButton.addEventListener('click', addInsertButton);


function addInsertButton(e){
    e;
    addFacture();
}
function txtKeyUp(e){
    if(e.keyCode==13){
        addFacture();
    }
}

function addFacture(){
    let textCompany=document.querySelector('#txt-company-name');
    let text=textCompany.value;
    text=text.trim();
    if(text==''){
        alert('Task Title can not be empty!');
        return;
    }
    let textPib=document.querySelector('#txt-company-pib');
    let text1=textPib.value;
    
    let textTime=document.querySelector('#txt-time');
    let text2=textTime.value;

    let textValue=document.querySelector('#txt-value');
    let text3=textValue.value;

    let itemContainer=document.createElement("div");
    itemContainer.className='item-info';

    let itemText=document.createElement("label");
    itemText.innerHTML=text+' ';
    itemText.className='company-name';

    let itemPib=document.createElement("label");
    itemPib.innerHTML=text1+' ';
    itemPib.className='company-pib';

    let itemTime=document.createElement("label");
    itemTime.innerHTML=text2+' ';
    itemTime.className='time-created';

    let itemPrice=document.createElement("label");
    itemPrice.innerHTML=text3 +' '+'RSD';
    itemPrice.className='price-value';
    
    itemContainer.appendChild(itemText);
    itemContainer.appendChild(itemPib);
    itemContainer.appendChild(itemTime);
    itemContainer.appendChild(itemPrice);
    factureListContainer.appendChild(itemContainer);

    textCompany.value=''; 
    textPib.value='';
    textTime.value='';
    textValue.value='';
    let removeBtn=document.createElement('button');
    removeBtn.className='item-trashCan';
    removeBtn.addEventListener('click',removeFacture);
    removeBtn.innerHTML='DELETE';  
}


function removeFacture(e){
    if(!confirm('Are you sure?')){
        return;
    }
    let btnToRemove=e.target;
    let divToRemove=btnToRemove.parentElement.parentElement;
    divToRemove.remove();
}
