import { useQuery } from "react-query";
import { fetchProductsData } from "../utils/apiRequests";

export const useFetchData = () =>{
    return useQuery('products', () =>
    fetchProductsData()
  ); 
}