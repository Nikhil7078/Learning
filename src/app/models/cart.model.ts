export interface Cart{
    items:Array<CartItem> 
}

export interface CartItem {
    product: string;
    name: string;
    quantity: number;
    id: number;
    price :number
}

