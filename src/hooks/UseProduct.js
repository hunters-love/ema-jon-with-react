import { useEffect, useState } from "react"

const UseProduct = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('./products.JSON')
            .then(Response => Response.json())
            .then(data => setProducts(data))
    }, [])

    return [products];
}
export default UseProduct;