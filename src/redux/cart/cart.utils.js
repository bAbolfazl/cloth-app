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

export const decreaseProductFromCart = (items, decItem) => {

    if (decItem.number === 1) {
        return removeProductFromCart(items, decItem)
    }

    return items.map((item) => {

        if (item.id === decItem.id) {
            // item.number = item.number - 1
            return { ...item, number: item.number - 1 }
        } else return item
    })
}

export const itemsNo = (items) => {
    return items.reduce((acc, item) => {
        return acc += item.number
    }, 1)
}

export const removeProductFromCart = (items, reomveItem) => {
    console.log('removeProductFromCarts')
    return items.filter(item => item.id !== reomveItem.id)
}
