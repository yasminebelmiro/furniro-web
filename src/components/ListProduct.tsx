import { useState } from "react"
import data from "../service/db.json"
import Product from "./Product"


const ListProduct = () => {

    
  return (
    <div>
        {data.products.map((product) => <Product  />)}
    </div>
  )
}

export default ListProduct