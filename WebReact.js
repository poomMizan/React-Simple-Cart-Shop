import React from 'react';
import Cart from './Cart';
const items = [ 
  { id : 1, name: "Burger", price: 2.9, qty: 0},
  { id : 2, name: "Hotdog", price: 0.9, qty: 0},
  { id : 3, name: "Sandwidh", price: 1.9, qty: 0},
  { id : 4, name: "Sushi", price: 0.9, qty: 0} 
]
export default function WebReact() {
  return ( <div> <Cart initialitems={items}/> </div> )
} 