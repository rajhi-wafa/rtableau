import React from 'react';
import PodTab from './component/PodTab'
import './App.css';

function App() {
const  products =[{name:"dress",price:"32$",category:"Clothes"},
{name:"tele",price:"320$",category:" Electronics"},
{name:"pull",price:"62$",category:"Clothes"},
{name:"shoes",price:"70$",category:"Clothes"}
]

return (
    <div className="App">

  <PodTab products = {products}/>
      
    </div>
  );
}

export default App;
