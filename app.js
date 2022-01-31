function solution() {

    let containerDiv = document.querySelector('.container');
    let allSections = containerDiv.querySelectorAll('.card');
    let inputEl = allSections[0].querySelector('input');
    let addBtn = allSections[0].querySelector('button');

    addBtn.addEventListener('click', addBtnHandler);

    function addBtnHandler(e) {
        e.preventDefault();
        let listUl = allSections[1].querySelector('ul');
        let liEl = document.createElement('li');
        liEl.classList.add('gift');
        liEl.textContent = inputEl.value;
        let sendBtn = document.createElement('button');
        sendBtn.id = 'sendButton';
        sendBtn.textContent = 'Send';
        sendBtn.addEventListener('click', sendBtnhandler);
        let discardBtn = document.createElement('button');
        discardBtn.id = 'discardButton';
        discardBtn.textContent = 'Discard';
        discardBtn.addEventListener('click', discardBtnHandler);
        liEl.appendChild(sendBtn);
        liEl.appendChild(discardBtn);
        listUl.appendChild(liEl);
        let currentList = Array.from(listUl.childNodes);
        currentList.sort((a, b) => a.textContent.localeCompare(b.textContent));
        listUl.innerHTML = '';
        for (const li of currentList) {
            listUl.appendChild(li);
        }
        inputEl.value = '';


    }

    function sendBtnhandler(e) {
        e.preventDefault();
        let currentLi = e.target.parentElement;
        let currentText = currentLi.childNodes;
        let sentSectionUl = allSections[2].querySelector('ul');
        let sentLi = document.createElement('li');
        sentLi.classList.add('gift');
        sentLi.textContent = currentText[0].textContent;
        sentSectionUl.appendChild(sentLi);
        currentLi.remove();

    }

    function discardBtnHandler(e) {
        e.preventDefault();
        let currentLi = e.target.parentElement;
        let currentText = currentLi.childNodes;
        let discardedSectionUl = allSections[3].querySelector('ul');
        let discardedLi = document.createElement('li');
        discardedLi.classList.add('gift');
        discardedLi.textContent = currentText[0].textContent;
        discardedSectionUl.appendChild(discardedLi);
        currentLi.remove();
    }

}