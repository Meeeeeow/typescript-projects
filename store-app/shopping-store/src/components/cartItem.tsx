import React , {useState , useEffect} from 'react'
import { Button, Stack } from 'react-bootstrap'
import { useShoppingCart } from './context/shoppingCartContext'
import { StoreItemProps } from './storeItem'
import { formatCurrency } from './utilities/formatCurrency'


type CartItemProps = {
    id : number,
    quantity : number
}
const CartItem = ({id , quantity} : CartItemProps) => {
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
  
  const {removeFromCart} = useShoppingCart();
  const item = items.find(item => item.id === id);
  console.log(item);
  if(item == null) return null; 
  
  return (
    <>
      {
        loading ? <h2>Loading...</h2> :(
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
              <Button variant="outline-danger" size ="sm" onClick ={() => removeFromCart(id)}>&times;</Button>
              
          </Stack>
        )
      }
    </>
  )
}

export default CartItem