import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Navbar.module.scss';
import { useContext } from 'react';
import { MainContext } from '../../context/MainProvider';


function Navbar() {

  const {basket} = useContext(MainContext)
  return (
  <div className={styles.navbar}>
   <Link to={"/home"}>Home</Link>
   <Link to={"/admin"}>Admin</Link>
   <Link to={"/add"}>AddEmployee</Link>
   <Link to={"/basket"}>BasketPage {basket.length}</Link>
  </div>
  )
}

export default Navbar