import React, { useContext } from 'react'
import styles from "./Home.module.scss";
import { WishListContext } from '../context/WishListProvider';


function WishListPage() {
  const {wishList,addWishList,isExitsWishList} =useContext(WishListContext)
  return (
   <>
  
         <div className={styles.container}>
    {wishList.map((x) => (
          <div key={x._id} className={styles.card}>
            <div onClick={() => addWishList(x)}>{isExitsWishList ? <i class="fa-solid fa-heart"></i>: <i class="fa-regular fa-heart"></i>}</div>
            <img src={x.image} alt="" />
            <div className="title">{x.title}</div>
            <div className="price">{x.price} $</div>
           <div className={styles.btns_home}>
           </div>
          </div>
        ))}
        </div>
   </>
  )
}

export default WishListPage