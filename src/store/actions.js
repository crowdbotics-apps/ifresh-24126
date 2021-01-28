import * as types from "./constants"
export const woocommerceproducts_get_wpjson_wc_v3_products_list = () => ({
  type: types.WOOCOMMERCEPRODUCTS_GET_WPJSON_WC_V3_PRODUCTS_LIST
})
export const woocommerceproducts_get_wpjson_wc_v3_products_listSucceeded = (
  response,
  starter
) => ({
  type: types.WOOCOMMERCEPRODUCTS_GET_WPJSON_WC_V3_PRODUCTS_LIST_SUCCEEDED,
  response,
  starter
})
export const woocommerceproducts_get_wpjson_wc_v3_products_listFailed = (
  response,
  starter
) => ({
  type: types.WOOCOMMERCEPRODUCTS_GET_WPJSON_WC_V3_PRODUCTS_LIST_FAILED,
  response,
  starter
})
