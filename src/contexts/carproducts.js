import React, { createContext, useState } from 'react';

export const CarProductsContext = createContext({});

export default function CarProductsProvider({children}) {

  const [cartProducts, setCartProducts] = useState([]);

  return (
    <CarProductsContext.Provider value={{ cartProducts, setCartProducts }}>
      {children}
    </CarProductsContext.Provider>
  )
} 