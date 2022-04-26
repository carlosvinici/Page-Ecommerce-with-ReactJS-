import { Games } from './components/data/dataBase'
import Header from './components/navBar/header'

import  { useState }  from 'react';



export function App() {
  const [cardProducts, setCardProducts] = useState([{}]);

  function SaveProduct(product) {
    console.log(product)
    setCardProducts([...cardProducts, {product}])
 
   return null;
  }


  return (
    <>
      <Header products={cardProducts}/>
      <Games  saveProduct={SaveProduct}/>
    </> 
  )
  
};