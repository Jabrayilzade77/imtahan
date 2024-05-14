import React, { useContext, useEffect, useState } from "react";
import styles from "./Home.module.scss";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainProvider";

function HomePage() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("")
  const {addBasket} = useContext(MainContext)

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myapp");
    const data = await res.json();
    setProducts(data);
  }

  function ascSorted() {
   return setProducts([...products].sort((a,b) => (a.title > b.title) ? 1 : ((b.title > a.title) ? -1 : 0)))
  }
  function decSorted() {
    return setProducts([...products].sort((a,b) => (a.title < b.title) ? 1 : ((b.title < a.title) ? -1 : 0)))
   }
  return (
    <>
   <div className={styles.headers}>
   <h1>Employees</h1>
      <input type="text" name="" value={search} onChange={(e)=>setSearch(e.target.value)} id="" placeholder="search"/>
      <button onClick={()=>ascSorted()}>a-z</button>
      <button onClick={()=>decSorted()}>z-a</button>
   </div>
      <br />
      <br />
      <div className={styles.container}>
        {products
        .filter(x=>x.title.toLowerCase().includes(search.toLowerCase()))
        .map((x) => (
          <div key={x._id} className={styles.card}>
            <img src={x.image} alt="" />
            <div className="title">{x.title}</div>
            <div className="price">{x.price} $</div>
           <div className={styles.btns_home}>
           <button onClick={()=> addBasket(x)}>add basket</button>
            <button><Link to={"/detail/"+x._id}>go detail</Link></button>
           </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default HomePage;
