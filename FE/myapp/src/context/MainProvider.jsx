import React, { createContext, useState } from "react";

export const MainContext = createContext();

function MainProvider({ children }) {
  const [basket, setBasket] = useState([]);

  function addBasket(item) {
    const index = basket.findIndex(x=>x._id === item._id)
  
    const element = basket[index]

    if (index !== -1) {
        element.count++
        setBasket([...basket])
    }
    else{
      return  setBasket([...basket, {...item,count :1}]);
    }
  }

  function removeBasket(item) {
    setBasket([...basket.filter(x=> x._id !== item._id)])
  }

  function decBasket(item) {
    const index = basket.findIndex(x=>x._id === item._id)
  
    const element = basket[index]

    if (element.count > 1) {
        element.count--
        setBasket([...basket])
    }
   
  }

  function getTotal() {

    return basket.reduce((prev,initial)=> (prev + (initial.price * initial.count)),0)
    
  }
  return (
    <MainContext.Provider value={{ basket, addBasket,removeBasket,decBasket,getTotal }}>
      {children}
    </MainContext.Provider>
  );
}

export default MainProvider;
