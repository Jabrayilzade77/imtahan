import React from "react";
import styles from "./AdminPage.module.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function AdminPage() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAllProducts();
  }, []);

  async function getAllProducts() {
    const res = await fetch("http://localhost:3000/myapp");
    const data = await res.json();
    setProducts(data);
  }

  async function deleteById(id) {
    const res = await fetch("http://localhost:3000/myapp/"+id,{method:"delete"});
    const data = await res.json();
    getAllProducts()
  }
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>image</th>
            <th>price</th>
            <th>option</th>
          </tr>
        </thead>
        <tbody>
         {products.map(x=>
          <>
           <tr>
            <td>{x._id}</td>
            <td>{x.title}</td>
            <td><img src={x.image} alt="" /></td>
            <td>{x.price}</td>
            <td >
             <div className={styles.btns}>
             <button className={styles.btn1}><Link to={"/edit/"+x._id}>edit</Link></button>
              <button className={styles.btn2} onClick={()=>deleteById(x._id)}>delete</button>
             </div>
            </td>
          </tr>
          </>
          )}
        </tbody>
      </table>
    </>
  );
}

export default AdminPage;
