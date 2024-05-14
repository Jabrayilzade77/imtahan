import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import styles from "./Add.module.scss";
import { useNavigate } from "react-router-dom";

function AddEmployee() {
  const navigate = useNavigate();
  return (
   <>
    <Formik
       initialValues={{ title: '', image: '', price: '' }}
       validationSchema={Yup.object({
        title: Yup.string()
           .required('Required'),
           image: Yup.string()
           .required('Required'),
           price: Yup.string().required('Required'),
       })}
       onSubmit={(values, { setSubmitting }) => {


        async function getPostProduct() {
          const res = await fetch("http://localhost:3000/myapp",{
            method:"post",
            headers: {
              "Content-Type": "application/json",
            },
            body:JSON.stringify(values)
          })
        }
        getPostProduct()
         setTimeout(() => {
           alert(JSON.stringify(values, null, 2));
           setSubmitting(false);
         }, 400);

         navigate("/home");
       }}
     >
       <div >
       <Form className={styles.form}>
         <label htmlFor="title">title</label>
         <Field name="title" type="text" />
         <ErrorMessage name="title" />
 
         <label htmlFor="image">image</label>
         <Field name="image" type="text" />
         <ErrorMessage name="image" />
 
         <label htmlFor="price">price </label>
         <Field name="price" type="text" />
         <ErrorMessage name="price" />
 
         <button type="submit">Submit</button>
       </Form>
       </div>
     </Formik>
   </>
  )
}

export default AddEmployee