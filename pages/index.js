/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Catalog from '../components/Catalog'
import Layout from '../components/Layout'
import { getData } from '../utils/fetchData'

export default function Home(props) {
  const [products, setProducts] = useState(props.products)

  return (
    <Layout title="Home">
      <div>
        <h2>Products</h2>
        
        <div>
          <Catalog products={products}/>
        </div>
      </div>
    </Layout>
  )
}

export async function getServerSideProps() {
  const results = await getData(`products?_limit=15`);

  return {
    props: {
      products: results
    }
  }
}