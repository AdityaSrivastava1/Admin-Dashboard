


export type OrderItemType ={
    name:string,
    photo:string,
    price:number,
    quantity:number,
    _id:string,
};

export type OderType ={
    name:string,
    address:string,
    city:number,
    country:number,
    state:number,
    pinCode:number,
    status:"Processing" | "Shipped " | "Delivered",
    discount :number,
    shippingCharges :number,
    subTotal :number,
    tax :number,
    total :number,
    orderItems:OrderItemType[],
    _id:string,
};