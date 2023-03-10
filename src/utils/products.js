export const increaseCartItemQuantity = (product, cartProducts) => {
    const updatedCartProduct = cartProducts.map(el => {
        if(el.id === product.id){
            el.quantity = el.quantity+1
            return el
        }
        return el
    })
    return updatedCartProduct
}

export const decreaseCartItemQuantity = (product, cartProducts) => {
    const updatedCartProduct = cartProducts.map(el => {
        if(el.id === product.id && el.quantity > 1){
            el.quantity = el.quantity-1
            return el
        }
        return el
    })
    return updatedCartProduct
}

export const removeCartItem = (product, cartProducts) => {
    return cartProducts.filter(el => el.id!==product.id)
}
