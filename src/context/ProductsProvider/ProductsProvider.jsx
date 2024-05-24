
import { createContext, useEffect, useState } from "react";

export const ProductsContext = createContext()

export const ProductsProvider = ({ children }) => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('https://fakestoreapi.com/products')
            const data = await response.json()
            setProducts(data)
        }

        fetchProducts()
    }, [])
    return (
        <ProductsContext.Provider value={{ products, setProducts }}>
            {children}
        </ProductsContext.Provider>
    )
}