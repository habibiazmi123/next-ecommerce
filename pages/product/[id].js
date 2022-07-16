import Layout from "../../components/Layout";
import SliderProduct from "../../components/SliderProduct";
import styles from "../../styles/product.detail.module.scss"
import { getData } from "../../utils/fetchData";

export default function DetailProduct({product, productRecommendations}) {
    return (
        <Layout title={product.name}>
            <div className={styles.product_detail_container}>
                <div className={styles.product_media}>
                    <picture>
                        <source srcSet={product.profileImageUrl} type="image/webp" />
                        <img src={product.profileImageUrl} alt={product.name} />
                    </picture>
                </div>
                <div className={styles.product_content}>
                    <div className={styles.title_label}>
                        <span>{product.name}</span>
                    </div>
                    <div style={{margin: "10px 0"}}>
                        <div className={styles.product_price}>
                            <div className={styles.price_before}>{product.normalPriceLabel}</div>
                            <div className={styles.price_after}>{product.customerPriceLabel}</div>
                        </div>
                    </div>

                    <div>
                        <div className={styles.content_head}>
                            Deskripsi Produk
                        </div>
                        <div className={styles.product_description}>
                            {`${product.description}`}
                        </div>
                    </div>
                </div>
            </div>

            <div style={{marginTop: "20px"}}>
                <SliderProduct products={productRecommendations}/>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({params: {id}}) {
    const productRecommendations = await getData(`products?_limit=15`);
    const product = await getData(`products/${id}`);
  
    return {
      props: {
        productRecommendations: productRecommendations,
        product: product
      }
    }
  }