
import data from "../service/db.json"
import Product from "./Product"
import type {ProductType} from "../types/ProductType"
import { useState } from "react"

type ListProductProps = {
  cardCount: number
}
const ListProduct = ({cardCount}: ListProductProps) => {


  const cards = data.products.slice(0, cardCount)

  return (
    <div className="grid items-center justify-center gap-x-0 gap-y-8 py-7 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ListProduct