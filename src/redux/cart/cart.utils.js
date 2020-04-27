export const addProductToCart = (oldItems, newItem) => {
    let isOld = oldItems.find(item => item.id === newItem.id)

    if (isOld) {
        return oldItems.map(item => {
            if (item.id === newItem.id) {
                return { ...item, number: item.number + 1 }
            } else { return item }
        })
    } else {
        return [...oldItems, { ...newItem, number: 1 }]
    }
}

export const itemsNo = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.number
    }, 1)
    // let count = 1;

    // items.map((item) => {
    //     return count += item.number
    // })

    // console.log('count', count)
    // return count
}