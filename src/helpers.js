const choice = (items) => {
    let index = Math.floor(Math.random() * items.length);
    return items[index];
};

const remove = (items, item) => {
    let idx = items.indexOf(item);
    if (idx >= -1) {
        items.slice(idx, 1);
        return items;
    } else {
        return undefined;
    }
};

export { choice, remove };
