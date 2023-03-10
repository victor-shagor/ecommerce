import axios from "axios"


const url = 'https://fakestoreapi.com/products'

export const fetchProductsData = async () => {
  const {data} = await axios.get(url)
  return data
  }