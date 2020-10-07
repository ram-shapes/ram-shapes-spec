/** @param {HTMLTableElement} table */
function transformOpResult(table) {
    const firstRow = table.querySelector('tr');
    if (firstRow) {
        const head = document.createElement('thead');
        for (const child of firstRow.children) {
            const cell = document.createElement('td');
            const [inner] = child.children;
            if (inner) {
                if (inner.classList.contains('ramp-dataset')) {
                    cell.innerText = 'dataset';
                } else if (inner.classList.contains('ramp-framed')) {
                    cell.innerText = 'framed match';
                }
            }
            head.append(cell);
        }
        table.prepend(head);
    }
}

function postProcessFormatting(config, document) {
    for (const table of document.querySelectorAll('.ramp-op-result')) {
        transformOpResult(table);
    }
}
