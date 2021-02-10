import React from 'react'
import Cartitem from './Cartitem';

export default function Cart( {initialitems}) {
  let [items, setItems] = React.useState(initialitems);

  function updateQty(id, newQty){
    let newItems = items.map( (item) => {
      if( item.id === id) { return { ...item, qty: newQty} }
      else { return item; }
    });
    setItems(newItems);
  }
  let totalPrice = items.reduce( (total, item) => {
    return total + item.qty * item.price
  }, 0).toFixed(2);

  return (
    <div className="col-md-6">
      <h2 className="text-success">Food Cart Shop</h2>
      <div className="row text-danger text-left">
        <div className="col-3">Product</div>
        <div className="col-3">Price</div>
        <div className="col-1">Qty</div>
        <div className="col-1"></div>   
        <div className="col-1"></div>
        <div className="col-3">Total $</div>
      </div>
      {items.map( (item) => { 
        return <Cartitem key={item.id} 
        updateQty={updateQty} {...item}/>
      })}
      <div className="col-12 text-warning">Total Price : {totalPrice} $</div>
    </div>
  )
}