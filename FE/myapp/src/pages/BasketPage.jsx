import React, { useContext } from 'react'
import { MainContext } from '../context/MainProvider'
import styles from "./Home.module.scss";


function BasketPage() {
  const {basket,addBasket,decBasket,removeBasket,getTotal} =useContext(MainContext)
  return (
   <>
   <h1>Total {getTotal()}</h1>
         <div className={styles.container}>
    {basket.map((x) => (
          <div key={x._id} className={styles.card}>
            <img src={x.image} alt="" />
            <div className="title">{x.title}</div>
            <div className="price">{x.price} $</div>
            <div>{x.count}</div>
           <div className={styles.btns_home}>
           <button onClick={()=> decBasket(x)}>-</button>
           <button onClick={()=> addBasket(x)}>+</button>
           <button onClick={()=> removeBasket(x)}>remove</button>
           </div>
          </div>
        ))}
        </div>
   </>
  )
}

export default BasketPage