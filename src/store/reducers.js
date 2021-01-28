import * as types from "./constants"

const initialState = {
  woocommerceproducts_response_get_products: [],
  woocommerceproducts: []
}

export default function apiReducer(state = initialState, action) {
  switch (action.type) {
    case types.WOOCOMMERCEPRODUCTS_GET_WPJSON_WC_V3_PRODUCTS_LIST:
    case types.WOOCOMMERCEPRODUCTS_GET_WPJSON_WC_V3_PRODUCTS_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        woocommerceproducts_response_get_products: [
          ...state.woocommerceproducts_response_get_products,
          action.response
        ]
      })
    case types.WOOCOMMERCEPRODUCTS_GET_WPJSON_WC_V3_PRODUCTS_LIST_FAILED:
      return Object.assign({}, state, {
        woocommerceproducts: [...state.woocommerceproducts, action.response]
      })
    default:
      return state
  }
}
