import React from 'react'
import { Button, Card } from 'react-bootstrap'
import { useShoppingCart } from './context/shoppingCartContext'
import { formatCurrency } from './utilities/formatCurrency'
export type StoreItemProps ={
    id:number,
    title : string,
    category : string,
    description : string,
    image : string,
    price : number
}
const StoreItem = ({id , title , category , description , image , price} : StoreItemProps) => {
  const {getItemQuantity , increaseItemQuantity , decreaseItemQuantity , removeFromCart} = useShoppingCart();
  const quantity = getItemQuantity(id);
  return (
    <Card className='h-100'>
      <Card.Img 
        variant="top" 
        src={image} 
        height = "250px"
        style ={{objectFit:"cover"}} 
      />
      <Card.Body className='d-flex flex-column'>
          <Card.Title className='mb-4 d-flex justify-content-between align-items-baseline'>
            <span className='fs-4'>{title}</span>
            <span className='ms-2 text-muted'>{formatCurrency(price)}</span>
          </Card.Title>
          <div className='mt-auto'>
            {
              quantity === 0 ? (
                <Button className='w-100' onClick={()=> increaseItemQuantity(id)}>+ Add to Cart</Button>
              ) : (
                <div className='d-flex flex-column align-items-center' style={{gap : "0.5rem"}}>
                  <div className='d-flex align-items-center justify-content-center' style={{gap : "0.5rem"}}>
                      <Button onClick={()=> increaseItemQuantity(id)}>+</Button>
                      <div>
                        <span className='fs-3'>{quantity} </span>in Cart
                      </div>
                      <Button onClick={()=> decreaseItemQuantity(id)}>-</Button>
                  </div>
                  <Button variant='danger' size='sm' onClick={()=> removeFromCart(id)}>Remove</Button>
                </div>
              )
            }
          </div>
      </Card.Body>
    </Card>
  )
}

export default StoreItem