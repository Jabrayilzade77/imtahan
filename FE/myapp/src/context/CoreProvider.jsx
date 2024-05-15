import React from 'react'
import MainProvider from './MainProvider'
import WishListProvider from './WishListProvider'

function CoreProvider({children}) {
  return (
    <>
    <MainProvider>
        <WishListProvider>
            {children}
        </WishListProvider>
    </MainProvider>
    </>
  )
}

export default CoreProvider