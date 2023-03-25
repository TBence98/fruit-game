export function createPoolDatas(fruits) {
    return fruits.map((fruit) => ({
        ...fruit,
        isSelected: false,
        isActiveInPool: true,
    }));
}
