import axios from "axios"
import { WOOCOMMERCE_PRODUCTS_SECRET } from "react-native-dotenv"
const woocommerceproducts = axios.create({
  baseURL: "https://ifresh.modernyeshop.eu",
  params: {
    ck_cd1840e4cab91b479ccac4cad9ca09bd5c93afcd: WOOCOMMERCE_PRODUCTS_SECRET
  },
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function woocommerceproducts_get_wpjson_wc_v3_products_list(action) {
  return woocommerceproducts.get(`/wp-json/wc/v3/products`)
}
export const apiService = { woocommerceproducts_get_wpjson_wc_v3_products_list }
