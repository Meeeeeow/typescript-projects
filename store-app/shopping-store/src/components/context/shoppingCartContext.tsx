import { createContext, ReactNode, useContext, useState , useEffect } from "react";
import { useLocalStorage }  from "../hooks/useLocalStorage";
import ShoppingCart from "../shoppingCart";
import { StoreItemProps } from "../storeItem";
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
    cartItems : CartItem[],
    data :StoreItemProps[],
    setData : React.Dispatch<React.SetStateAction<StoreItemProps[]>>,
    loading : boolean,
    setLoading : React.Dispatch<React.SetStateAction<boolean>>
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
    const [loading ,setLoading] = useState<boolean>(false);
    const [data , setData] = useState<StoreItemProps[]>([]);
    const [cartItems , setCartItems] = useLocalStorage<CartItem[]>("shopping-cart" , []);
    const cartQuantity = cartItems.reduce((quantity , item) => item.quantity + quantity ,0);
    const [isOpen , setIsOpen] = useState(false);
    useEffect(()=>{
        let componentMounted = true;
        const getProducts = async()=>{
          setLoading(true);      
          const response = await fetch('https://fakestoreapi.com/products');
       
    
          if(componentMounted)
          {
            setLoading(false);
            setData(await response.clone().json());
            console.log(data);
          }
          return()=>{
            componentMounted = false;
          }
        }
        getProducts();
        console.log(`i am ${componentMounted}`)
      },[])
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
                closeCart,
                data,
                setData,
                loading,
                setLoading
            }}>
                {children}
                <ShoppingCart isOpen = {isOpen}/>
        </ShoppingCartContext.Provider>
    )
}