/* eslint-disable no-unused-vars */
import styles from "./SliderProduct.module.scss";
import ProductItem from './product/ProductItem'
import { useState } from "react";

export default function SliderProduct(props) {
    const [products, setProducts] = useState(props.products)

    return (
        <>
            <div>
                <h2>Recommendation</h2>
            </div>

            <div className={styles.product_container}>
                {products.map(product => {
                    return <ProductItem key={product.id} product={product} style={{marginRight: "1rem"}} />
                })}
            </div>
        </>
    )
}