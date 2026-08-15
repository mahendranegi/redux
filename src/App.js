// import logo from './logo.svg';
import { lazy, Suspense, useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { ClearAllItems } from './redux/slice';
// import ProductCart from './components/ProductCart';
const ProductCart = lazy(()=> import("./components/ProductCart"))


function App() {
   const dispatch = useDispatch();
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
  
  const handleClearAll = () =>{
    dispatch(ClearAllItems())
  }
  return (
    <div className="App">
      <Header />
  <button onClick={handleClearAll} style={{width:'fit-content',margin:' 24px 0 0 24px'}} className='add-btn'>Clear All</button>
         {/* <ProductCart price='23' title="hello" /> */}
         <Suspense fallback={ <Button
         
          loading
          loadingPosition="start"
          variant="outlined"
        >
          Save
        </Button>}>
     <div className="container"> 
       <div className="products">
{val?.map((item)=>{
      return  <ProductCart
            key={item.id}
            price={item.price}
            title={item.title}
            image={item?.thumbnail}

          />
     })}

       </div>
     </div>
     </Suspense>
     
    </div>
  );
}

export default App;
