window.addEventListener('load', solve);

function solve() {
   
    let modelEl=document.getElementById('model');
    let yearEl=document.getElementById('year');
    let discriptionEl=document.getElementById('description');
    let priceEl=document.getElementById('price');
    
    
    
    let furnitureListEl=document.getElementById('furniture-list');

    let addButton=document.getElementById('add');
    addButton.addEventListener('click', addHandler);

    function addHandler(e){
        e.preventDefault();
        let trInfo=document.createElement('tr');
        trInfo.classList.add('info');
        let tdModel=document.createElement('td');
        tdModel.textContent=modelEl.value;
        let tdPrice=document.createElement('td');
        let price=Number(priceEl.value);
        tdPrice.textContent=price.toFixed(2);
        let buttonsTd=document.createElement('td');
        let moreBtn=document.createElement('button');
        moreBtn.textContent='More Info';
        moreBtn.classList.add('moreBtn');
        moreBtn.addEventListener('click',moreInfoHandler);
        let buyBtn=document.createElement('button');
        buyBtn.textContent='Buy it';
        buyBtn.classList.add('buyBtn');
        buyBtn.addEventListener('click', buyHandler);
        let trHide=document.createElement('tr');
        trHide.classList.add('hide');
        let tdYear=document.createElement('td');
        tdYear.textContent=`Year: ${yearEl.value}`;
        let tdDiscription=document.createElement('td');
        tdDiscription.textContent=`Discription: ${discriptionEl.value}`;
        tdDiscription.colSpan=3;
        buttonsTd.appendChild(moreBtn);
        buttonsTd.appendChild(buyBtn);
        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(buttonsTd);
        trHide.appendChild(tdYear);
        trHide.appendChild(tdDiscription);
        furnitureListEl.appendChild(trInfo);
        furnitureListEl.appendChild(trHide);
        modelEl.value='';
        priceEl.value='';
        discriptionEl.value='';
        yearEl.value='';
    }

function moreInfoHandler(e){


   
let currentFurnitureList=e.target.parentNode.parentNode.parentNode;
let hideTr=currentFurnitureList.querySelector('.hide');
hideTr.style.display=e.target.textContent=='More Info'
? hideTr.style.display='contents'
: hideTr.style.display='none';
 e.target.textContent=e.target.textContent=='More Info' 
    ? e.target.textContent='Less Info'
    : e.target.textContent='More Info';

}

function buyHandler(e){
let currentRow=e.target.parentNode.parentNode;
let currentPriceEl=currentRow.querySelector('td:nth-child(2)');
currentPrice=currentPriceEl.textContent;


let totalPriceEl=document.querySelector('.total-price');
let totalPrice=totalPriceEl.textContent;
totalPrice=Number(totalPrice)
currentPrice=Number(currentPrice);
totalPrice+=currentPrice;
totalPriceEl.textContent=totalPrice.toFixed(2);
currentRow.remove();
}

}
