import produce from 'immer';

const INITIAL_STATE = {
  carts: [],
  qtyItems: 0
};

export default function cart(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@cart/ADD_SUCCESS': {
        const { _id, name, price, cooperative, producer, image } = action.payload.product;

        if(cooperative) {
          const cartIndex = draft.carts.findIndex(cart => cart.cooperative === cooperative._id);
          if(cartIndex === -1) {
            draft.carts.push({
              cooperative: cooperative._id,
              cooperative_name: cooperative.name,
              products: [
                {
                  product: _id,
                  image: image,
                  product_name: name,
                  qty: 1,
                  price: price.toFixed(2),
                  total_price: price.toFixed(2)
                }
              ],
              final_price: price.toFixed(2)
            })
            draft.qtyItems += 1;
            alert('Produto adicionado ao carrinho.')
          } else {
            const productIndex = draft.carts[cartIndex].products.findIndex(product => product.product === _id);
            if(productIndex !== -1) {
              alert('Produto já adicionado ao carrinho.');
              break;
            }
            draft.carts[cartIndex].products.push({
              product: _id,
              image: image,
              product_name: name,
              qty: 1,
              price: price.toFixed(2),
              total_price: price.toFixed(2)
            })
            draft.carts[cartIndex].final_price = Number(draft.carts[cartIndex].final_price) + Number(price)
            draft.qtyItems += 1;
          }
        }

        if(producer) {
          const cartIndex = draft.carts.findIndex(cart => cart.producer === producer._id);
          if(cartIndex === -1) {
            draft.carts.push({
              producer: producer._id,
              producer_name: producer.name,
              products: [
                {
                  product: _id,
                  image: image,
                  product_name: name,
                  qty: 1,
                  price: price.toFixed(2),
                  total_price: price.toFixed(2),
                }
              ],
              final_price: price.toFixed(2)
            })
            draft.qtyItems += 1;
            alert('Produto adicionado ao carrinho.')
          } else {
            const productIndex = draft.carts[cartIndex].products.findIndex(product => product.product === _id);
            if(productIndex !== -1) {
              alert('Produto já adicionado ao carrinho.');
              break;
            }
            draft.carts[cartIndex].products.push({
              product: _id,
              image: image,
              product_name: name,
              qty: 1,
              price: price.toFixed(2),
              total_price: price.toFixed(2)
            })
            draft.carts[cartIndex].final_price = Number(draft.carts[cartIndex].final_price) + Number(price)
            draft.qtyItems += 1;
          }
        }
        
        break;
      }
      case '@cart/ADD_QTY': {
        const { product, cart } = action.payload;
        
        if(cart.producer) {
          const cartIndex = draft.carts.findIndex(cartState => cartState.producer === cart.producer);
          if(cartIndex === -1) {
            break;
          }

          const productIndex = draft.carts[cartIndex].products.findIndex(productState => productState.product === product.product)
          if(productIndex === -1) {
            break;
          }

          const newQty = draft.carts[cartIndex].products[productIndex].qty + 1;
          const newTotalPrice = newQty * draft.carts[cartIndex].products[productIndex].price;
          const newFinalPrice = draft.carts[cartIndex].final_price - (draft.carts[cartIndex].products[productIndex].price * draft.carts[cartIndex].products[productIndex].qty) + newTotalPrice;

          draft.carts[cartIndex].products[productIndex].qty = newQty;
          draft.carts[cartIndex].products[productIndex].total_price = newTotalPrice.toFixed(2);
          draft.carts[cartIndex].final_price = newFinalPrice.toFixed(2);
          draft.qtyItems += 1;
        }

        if(cart.cooperative) {
          const cartIndex = draft.carts.findIndex(cartState => cartState.cooperative === cart.cooperative);
          if(cartIndex === -1) {
            break;
          }
          const productIndex = draft.carts[cartIndex].products.findIndex(productState => productState.product === product.product)
          if(productIndex === -1) {
            break;
          }
          const newQty = draft.carts[cartIndex].products[productIndex].qty + 1;
          const newTotalPrice = newQty * draft.carts[cartIndex].products[productIndex].price;
          const newFinalPrice = draft.carts[cartIndex].final_price - (draft.carts[cartIndex].products[productIndex].price * draft.carts[cartIndex].products[productIndex].qty) + newTotalPrice;

          draft.carts[cartIndex].products[productIndex].qty = newQty;
          draft.carts[cartIndex].products[productIndex].total_price = newTotalPrice.toFixed(2);
          draft.carts[cartIndex].final_price = newFinalPrice.toFixed(2);
          draft.qtyItems += 1;
        }

        break;
      }
      case '@cart/REMOVE_QTY': {
        const { product, cart } = action.payload;
        
                
        if(cart.producer) {
          const cartIndex = draft.carts.findIndex(cartState => cartState.producer === cart.producer);
          if(cartIndex === -1) {
            break;
          }

          const productIndex = draft.carts[cartIndex].products.findIndex(productState => productState.product === product.product)
          if(productIndex === -1) {
            break;
          }

          if(draft.carts[cartIndex].products[productIndex].qty === 1) {
            break;
          }
          const newQty = draft.carts[cartIndex].products[productIndex].qty - 1;
          const newTotalPrice = newQty * draft.carts[cartIndex].products[productIndex].price;
          const newFinalPrice = draft.carts[cartIndex].final_price - draft.carts[cartIndex].products[productIndex].price

          draft.carts[cartIndex].products[productIndex].qty = newQty;
          draft.carts[cartIndex].products[productIndex].total_price = newTotalPrice.toFixed(2);
          draft.carts[cartIndex].final_price = newFinalPrice.toFixed(2);
          draft.qtyItems -= 1;
        }

        if(cart.cooperative) {
          const cartIndex = draft.carts.findIndex(cartState => cartState.cooperative === cart.cooperative);
          if(cartIndex === -1) {
            break;
          }
          const productIndex = draft.carts[cartIndex].products.findIndex(productState => productState.product === product.product)
          if(productIndex === -1) {
            break;
          }

          if(draft.carts[cartIndex].products[productIndex].qty === 1) {
            break;
          }

          const newQty = draft.carts[cartIndex].products[productIndex].qty - 1;
          const newTotalPrice = newQty * draft.carts[cartIndex].products[productIndex].price;
          const newFinalPrice = draft.carts[cartIndex].final_price - draft.carts[cartIndex].products[productIndex].price

          draft.carts[cartIndex].products[productIndex].qty = newQty;
          draft.carts[cartIndex].products[productIndex].total_price = newTotalPrice.toFixed(2);
          draft.carts[cartIndex].final_price = newFinalPrice.toFixed(2);
          draft.qtyItems -= 1;
        }

        break;
      }
      case '@cart/REMOVE_ITEM': {
        const { product, cart } = action.payload;

        if(cart.producer) {
          const cartIndex = draft.carts.findIndex(cartState => cartState.producer === cart.producer);
          if(cartIndex === -1) {
            break;
          }

          const productIndex = draft.carts[cartIndex].products.findIndex(productState => productState.product === product.product)
          if(productIndex === -1) {
            break;
          }

          if(draft.carts[cartIndex].products.length === 1) {
            draft.qtyItems -= draft.carts[cartIndex].products[productIndex].qty;
            draft.carts.splice(cartIndex, 1);
          } else {
            draft.qtyItems -= draft.carts[cartIndex].products[productIndex].qty;

            const oldTotalPrice = draft.carts[cartIndex].products[productIndex].total_price;
            draft.carts[cartIndex].products.splice(productIndex, 1);
            
            const newFinalPrice = draft.carts[cartIndex].final_price -= oldTotalPrice;
            draft.carts[cartIndex].final_price = newFinalPrice.toFixed(2);
          }
        }

        if(cart.cooperative) {
          const cartIndex = draft.carts.findIndex(cartState => cartState.cooperative === cart.cooperative);
          if(cartIndex === -1) {
            break;
          }

          const productIndex = draft.carts[cartIndex].products.findIndex(productState => productState.product === product.product)
          if(productIndex === -1) {
            break;
          }

          if(draft.carts[cartIndex].products.length === 1) {
            draft.qtyItems -= draft.carts[cartIndex].products[productIndex].qty;
            draft.carts.splice(cartIndex, 1);
          } else {
            draft.qtyItems -= draft.carts[cartIndex].products[productIndex].qty;

            const oldTotalPrice = draft.carts[cartIndex].products[productIndex].total_price;
            draft.carts[cartIndex].products.splice(productIndex, 1);
            
            const newFinalPrice = draft.carts[cartIndex].final_price -= oldTotalPrice;
            draft.carts[cartIndex].final_price = newFinalPrice.toFixed(2);
          }
        }

        break;
      }

      case '@cart/CONFIRM_ORDER': {
        const { cart } = action.payload;
        if(cart.producer) {
          const cartIndex = draft.carts.findIndex(cartState => cartState.producer === cart.producer);
          
          if(cartIndex !== -1) {
            draft.carts.splice(cartIndex, 1);
          }
        }
        if(cart.cooperative) {
          const cartIndex = draft.carts.findIndex(cartState => cartState.cooperative === cart.cooperative);
          
          if(cartIndex !== -1) {
            draft.carts.splice(cartIndex, 1);
          }
        }
        break;
      }
      default:
    }
  });
}
