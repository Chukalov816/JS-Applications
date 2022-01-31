window.addEventListener('load', solve);

function solve() {
    let addBtnEl = document.getElementById('add');
    addBtnEl.addEventListener('click', addHandler);

    function addHandler(e) {
        e.preventDefault();
        let modelEl = document.getElementById('model');
        let yearEl = document.getElementById('year');
        let descriptionEl = document.getElementById('description');
        let priceEl = document.getElementById('price');

        let furnitureListEl = document.getElementById('furniture-list');

        let trInfo = document.createElement('tr');
        trInfo.classList.add('info');
        let tdModel = document.createElement('td');
        tdModel.textContent = modelEl.value;
        let tdPrice = document.createElement('td');
        tdPrice.textContent = Number(priceEl.value).toFixed(2);
        let tdActions = document.createElement('td');
        let moreBtn = document.createElement('button');
        moreBtn.classList.add('moreBtn');
        moreBtn.textContent = 'More Info';
        moreBtn.addEventListener('click', moreBtnHandler);
        let buyBtn = document.createElement('button');
        buyBtn.classList.add('buyBtn');
        buyBtn.textContent = 'Buy it';
        buyBtn.addEventListener('click', buyBtnHandler);
        let trHide = document.createElement('tr');
        trHide.classList.add('hide');
        let tdYear = document.createElement('td');
        tdYear.textContent = `Year: ${yearEl.value}`;
        let tdDescription = document.createElement('td');
        tdDescription.colSpan = '3';
        tdDescription.textContent = `Description: ${descriptionEl.value}`;

        tdActions.appendChild(moreBtn);
        tdActions.appendChild(buyBtn);
        trInfo.appendChild(tdModel);
        trInfo.appendChild(tdPrice);
        trInfo.appendChild(tdActions);
        trHide.appendChild(tdYear);
        trHide.appendChild(tdDescription);
        furnitureListEl.appendChild(trInfo);
        furnitureListEl.appendChild(trHide);


        modelEl.value = '';
        yearEl.value = '';
        priceEl.value = '';
        descriptionEl.value = '';

        function moreBtnHandler(e) {
            e.preventDefault();
            moreBtn.textContent == 'More Info'
                ? moreBtn.textContent = 'Less Info'
                : moreBtn.textContent = 'More Info';
            (trHide.style.display == '' || trHide.style.display=='none')
                ? trHide.style.display = 'contents'
                : trHide.style.display = 'none';

        }
        function buyBtnHandler(e) {
        
            let toRemoveEl = e.target.parentElement.parentElement;
            let tdRows = toRemoveEl.querySelectorAll('td');
            let currentPrice = Number(tdRows[1].textContent);
            let totalPriceEls = document.getElementsByClassName('total-price');
            let totalPriceEl=totalPriceEls[0];
            let newPrice = Number(totalPriceEl.textContent) + currentPrice;
            totalPriceEl.textContent = newPrice.toFixed(2);
            toRemoveEl.remove();

        }
    }




}
