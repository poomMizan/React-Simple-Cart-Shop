import React from 'react'

export default function Cartitem({id, name, price, qty, updateQty}) {

  function manageQty (symbol) {
    if(symbol === "+")  updateQty(id, qty + 1);
    if(symbol === "-")  updateQty(id, qty - 1);
  }
  return (
    <div className="row text-left"> 
      <div className="col-3"> {name} </div>
      <div className="col-3">$ {price}</div>
      <div className="col-1"> {qty} </div>   
      <div className="col-1">
        <button onClick={()=> manageQty("-")} disabled={qty <= 0}> - </button>
      </div>
      
      <div className="col-1">
        <button onClick={()=> manageQty("+")} disabled={qty >= 10}>+</button>
      </div>
      <div className="col-3">$ {Math.round(qty * price)}</div>
    </div>
  )
}
