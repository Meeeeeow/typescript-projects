import { createContext, ReactNode, useContext, useState } from "react";
import { useLocalStorage }  from "../hooks/useLocalStorage";
import ShoppingCart from "../shoppingCart";
//type
type ShoppingCartProviderProps={
    children :ReactNode
}

type ShoppingCartContextProps ={
    getItemQuantity: (id : number) => number,
    increaseItemQuantity: (id : number) =>void,
    decreaseItemQuantity : (id : number) =>void,
    removeFromCart : (id : number) =>void,
    openCart : () => void,
    closeCart : ()=> void,
    cartQuantity : number,
    cartItems : CartItem[]
}
type CartItem ={
    id : number,
    quantity : number
}

//create context
const ShoppingCartContext = createContext({} as ShoppingCartContextProps);
//custom hook
export function useShoppingCart(){
    return useContext(ShoppingCartContext);
}


//provider
export function ShoppingCartProvider({children} : ShoppingCartProviderProps){
    const [cartItems , setCartItems] = useLocalStorage<CartItem[]>("shopping-cart" , []);
    const cartQuantity = cartItems.reduce((quantity , item) => item.quantity + quantity ,0);
    const [isOpen , setIsOpen] = useState(false);
    
    function getItemQuantity(id : number){
        console.log(cartItems.find(item => item.id === id)?.quantity || 0);
        return cartItems.find(item => item.id === id)?.quantity || 0;
    }

    function increaseItemQuantity(id : number){
        console.log("Hello");
        setCartItems(currItems =>{

            if(currItems.find(item => item.id === id) == null){
                console.log("Good");
                return [...currItems , {id , quantity : 1}]
            }else{
               return currItems.map(item=>{
                if(item.id === id)
                {
                    return {...item , quantity : item.quantity + 1}
                }else{
                    return item;
                }
               })
            }
        })
    }
    function decreaseItemQuantity(id : number){
        setCartItems(currItems =>{
            if(currItems.find(item => item.id === id)?.quantity === 1){
                return currItems.filter(item => item.id !== id)
            }else{
               return currItems.map(item=>{
                if(item.id === id)
                {
                    return {...item , quantity : item.quantity - 1}
                }else{
                    return item;
                }
               })
            }
        })
    }

    function removeFromCart(id :  number){
        setCartItems(currItems =>{
            return currItems.filter(item => item.id !== id)
        })
    }

    function openCart(){
        setIsOpen(true);
    }
    function closeCart(){
        setIsOpen(false);
    }
    return(
        <ShoppingCartContext.Provider 
        value ={{
                getItemQuantity , 
                increaseItemQuantity , 
                decreaseItemQuantity , 
                removeFromCart , 
                cartItems , 
                cartQuantity , 
                openCart , 
                closeCart
            }}>
                {children}
                <ShoppingCart isOpen = {isOpen}/>
        </ShoppingCartContext.Provider>
    )
}