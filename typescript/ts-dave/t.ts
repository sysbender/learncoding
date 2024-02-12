function findRowByCellContent(): Promise<number|null> {...}

let rowIndex = 0;
const index = await findRowByCellContent();
rowIndex = index;