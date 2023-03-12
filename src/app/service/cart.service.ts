import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { BehaviorSubject } from 'rxjs';
import { Cart, CartItem } from '../models/cart.model';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  cart = new BehaviorSubject<Cart>({ items: [] });

  constructor(private _snackerBar: MatSnackBar) { }

  addToCart(item: CartItem): void {
    const items = [...this.cart.value.items];

    const itemInCart = items.find((_item) => _item.id === item.id);

    if (itemInCart) {
      itemInCart.quantity++;
    }
    else {
      items.push(item);
    }

    this.cart.next({ items });
    this._snackerBar.open('1 item added to cart.', 'Ok', { duration: 3000 });
    console.log(this.cart.value);
  }

  ClearCart(): void {
    this.cart.next({ items: [] });
    this._snackerBar.open('Cart is cleared.', 'Ok', { duration: 3000 });
  }
  removeFromCart(item : CartItem) {
    const filteredItems = this.cart.value.items.filter((_item) => _item.id != item.id);
    this.cart.next({ items: filteredItems });
    this._snackerBar.open('1 item removed from cart.', 'ok', { duration: 500 });
  }
  
  removeQuantity(item:CartItem) {
    this.cart.value.items.map((_item) => {
      if (_item.id === item.id) {
        item.quantity--;
        if (item.quantity == 0) {
          this.removeFromCart(item);
        }
      }
    })
  }
}

