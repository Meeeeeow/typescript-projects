import React ,{useEffect, useState} from 'react'
import { Offcanvas, Stack } from 'react-bootstrap'
import CartItem from './cartItem'
import { useShoppingCart } from './context/shoppingCartContext'
import { StoreItemProps } from './storeItem'
import { formatCurrency } from './utilities/formatCurrency'

type ShoppingCartProps ={
    isOpen : boolean
}
const ShoppingCart = ({isOpen} : ShoppingCartProps) => {
    const {cartItems , closeCart} = useShoppingCart()
    const [loading , setLoading] = useState<boolean>(false);
    const [items , setItems] = useState<StoreItemProps[]>([]);
    useEffect(()=>{
      let componentMounted = true;
      const getProducts = async()=>{
        setLoading(true);
        const response = await fetch('https://fakestoreapi.com/products');
     
  
        if(componentMounted)
        {
          setLoading(false);
          setItems(await response.clone().json());
        }
        return()=>{
          componentMounted = false;
        }
      }
      getProducts();
    },[])
    
  return (
    <Offcanvas show={isOpen} placement="end" onHide={closeCart}>
        <Offcanvas.Header closeButton>
            <Offcanvas.Title>Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <Stack gap ={3}>
              {
                cartItems.map(item =>(
                  <CartItem key={item.id} {...item}/>
                ))
              }
              <div className='ms-auto fw-bold fs-5'>
               Total : {
                 formatCurrency(cartItems.reduce((total , cartItem) =>{
                  const item = items.find(item => item.id === cartItem.id);
                  return total + (item?.price || 0) * cartItem.quantity
                 } , 0))
               }
              </div>
            </Stack>
        </Offcanvas.Body>
    </Offcanvas>
  )
}

export default ShoppingCart