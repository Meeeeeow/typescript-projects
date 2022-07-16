import React , { useState , useEffect }from 'react'
import { Col, Row } from 'react-bootstrap';
import StoreItem from '../storeItem';

const Store = () => {
  const [loading , setLoading] = useState<boolean>(false);
  const [data , setData] = useState<{
    id : number,
    title : string,
    category : string,
    description : string,
    image : string,
    price : number
  }[]>([]);

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
        console.log(loading);
      }
      return()=>{
        componentMounted = false;
      }
    }
    getProducts();
    console.log(`i am ${componentMounted}`)
  },[])
  console.log(data);
  console.log(loading);
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