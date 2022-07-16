import Link from 'next/link'
import styles from './ProductItem.module.scss'

export default function ProductItem({product, style}) {
    return (
        <>
            <Link href={`/product/${product.id}`}>
                <div className={styles.product_item} style={style}>
                    <div className={styles.product_header}>
                        <div className={styles.product_image}>
                            <picture>
                                <source srcSet={product.profileImageUrl} type="image/webp" />
                                <img src={product.profileImageUrl} alt="Product Name" className={styles.product_image} />
                            </picture>

                            <div className={styles.commission_wrapper}>
                                <div className={styles.commission_content}>
                                    <span className={styles.percentage}>{product.commissionLabel}</span>
                                    <span className={styles.label}>Komisi</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.product_content}>
                        <div className={styles.title}>
                            <div className={styles.label_title}>
                                {product.name}
                            </div>
                        </div>
                        <div className={styles.price}>
                            <div className={styles.label_price}>
                                <div className={styles.price_label}>Harga Reseller</div>
                                <div className={styles.price_before}>{product.normalPriceLabel}</div>
                                <div className={styles.price_after}>{product.customerPriceLabel}</div>
                            </div>
                            <div>
                                <picture>
                                    <source srcSet="https://evermos.com/gratis-ongkir-label.png" type="image/webp" />
                                    <img src="https://evermos.com/gratis-ongkir-label.png" alt="Product Name" style={{height: "20px"}} />
                                </picture>
                            </div>
                        </div>
                        <div className={styles.origin}>
                            <div className={styles.origin_label}>
                                {product.stockLocations[0].name}
                            </div>
                        </div>
                    </div>
                </div>
            </Link>
        </>
    )
}