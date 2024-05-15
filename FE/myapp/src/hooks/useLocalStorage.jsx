import React, { useEffect, useState } from 'react'

function useLocalStorage(key,initial) {

    const [data, setData] = useState(localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : initial)

    useEffect(() => {
      
    localStorage.setItem(key,JSON.stringify(data))
    }, [key,data])
    
  return [data,setData]
}

export default useLocalStorage