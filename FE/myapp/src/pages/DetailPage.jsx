import React, { useEffect, useState } from 'react'
import styles from "./Detail.module.scss";
import { useParams  } from "react-router-dom";

function DetailPage() {
    let { id } = useParams();

  const [detailProducts, setDetailProducts] = useState([])

  useEffect(() => {
    getById()
  }, [])
  

  async function getById() {
    const res = await fetch("http://localhost:3000/myapp/"+id);
    const data = await res.json();
    setDetailProducts(data)
  }

  
   return (
   <>
    {
        
            <div className={styles.container}>
                <img src={detailProducts.image} alt="" />
                <div className="title">{detailProducts.title}</div>
                <div className="price">{detailProducts.price} $</div>
            </div>
    
    }
   
   </>
  )
}

export default DetailPage