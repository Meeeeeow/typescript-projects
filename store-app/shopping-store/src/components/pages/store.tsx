import React from 'react'
import { Col, Row } from 'react-bootstrap';
import { useShoppingCart } from '../context/shoppingCartContext';
import StoreItem from '../storeItem';

const Store = () => {
  const {data , loading } = useShoppingCart();

  return (
    <>
      <h1>Store</h1>
      {
        loading ? <h1>Loading...</h1> :(
          <Row md={2} sm ={1} lg={4} className="g-3">
              {
                data.map(item=>(
                  <Col key={item.id}><StoreItem {...item}/></Col>
                ))
              }
          </Row>
        )
      }
      
    </>
  )
}

export default Store;