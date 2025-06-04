
import data from "../services/db.json"
import Product from "./Product"
import type {ProductType} from "../types/ProductType"

type ListProductProps = {
  cardCount: number
}
const ListProduct = ({cardCount}: ListProductProps) => {


  const cards = data.products.slice(0, cardCount)

  return (
    <div className="font-poppins grid gap-10 md:px-20 place-items-center md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {cards.map((product: ProductType) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ListProduct