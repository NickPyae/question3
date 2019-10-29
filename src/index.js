// Alternate implementation
const list = readHugeList();

const nextListItem = () => {
    const item = list.pop();

    if (item) {
        setTimeout(nextListItem, 0);
    }
};
