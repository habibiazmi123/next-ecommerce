
import styles from './Catalog.module.scss'
import ProductItem from './product/ProductItem'

export default function Catalog({products}) {
    return (
        <>
            <div className={styles.product_container}>
                {products.map(product => {
                    return (
                        <ProductItem key={product.id} product={product} />
                    )
                })}
            </div>
        </>
    )
}