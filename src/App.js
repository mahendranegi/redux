// import logo from './logo.svg';
import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import ProductCart from './components/ProductCart';

function App() {
  const [val, setVal] = useState([]);
  console.log(val,'Hello val')
  useEffect(() => {
    let url = 'https://dummyjson.com/products';
    fetch(url).then((response)=>{
      return response.json()
    }).then((data)=>{
      setVal(data.products)
      // console.log(data,'data')
    }).catch((error)=>{
      console.log(error,'error')
    })
  
  }, [])
  
  return (
    <div className="App">
      <Header />
  
         {/* <ProductCart price='23' title="hello" /> */}
     
     {val?.map((item)=>{
      return  <ProductCart
            key={item.id}
            price={item.price}
            title={item.title}
            image={item?.thumbnail}
          />
     })}
    </div>
  );
}

export default App;
