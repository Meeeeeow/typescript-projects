import React  from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from './context/shoppingCartContext'
import { formatCurrency } from './utilities/formatCurrency'


type CartItemProps = {
    id : number,
    quantity : number
}
const CartItem = ({id , quantity} : CartItemProps) => {
 const {data } = useShoppingCart()
  
  const {removeFromCart} = useShoppingCart();
  const item = data.find(item => item.id === id);
  console.log(item);
  if(item == null) return null; 
  
  return (
          <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
              <img src={item.image} style={{width : "100px" , height : "100px" , objectFit : "cover"}} alt={item.title}/>
              <div className="me-auto">
                <div>
                  {item.title} {quantity > 1 && <span className='text-muted' style={{fontSize : "0.7rem"}}>x{quantity}</span>}
                </div>
                <div className='text-muted' style={{fontSize : "0.8rem"}}>{formatCurrency(item.price)}</div>
              </div>
              <div className='ms-auto'>
                {formatCurrency(item.price * quantity)}
              </div>
              <Button variant="outline-danger" size ="sm" onClick ={() => removeFromCart(item.id)}>&times;</Button>
              
          </Stack>
  )
}

export default CartItem