export function addToCartRequest(product) {
  return {
    type: '@cart/ADD_REQUEST',
    payload: { product }
  }
}

export function addToCartSuccess(product) {
  return {
    type: '@cart/ADD_SUCCESS',
    payload: { product }
  }
}

export function addQty(product, cart) {
  return {
    type: '@cart/ADD_QTY',
    payload: { product, cart }
  }
}

export function removeQty(product, cart) {
  return {
    type: '@cart/REMOVE_QTY',
    payload: { product, cart }
  }
}

export function removeItem(product, cart) {
  return {
    type: '@cart/REMOVE_ITEM',
    payload: { product, cart }
  }
}

export function confirmOrder(cart) {
  return {
    type: '@cart/CONFIRM_ORDER',
    payload: { cart }
  }
}
