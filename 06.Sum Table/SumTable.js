function sumTable() {
    let sum = Array.from(document.querySelectorAll('td:nth-child(2)'));
    sum.pop();
    sum = sum.map(x => Number(x.textContent))
        .reduce((x, y) => x += y, 0);
    document.querySelector('#sum').textContent = sum;
}
