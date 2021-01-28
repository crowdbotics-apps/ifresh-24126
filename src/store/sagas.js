import { put, call, all, spawn, takeEvery } from "redux-saga/effects"
import { apiService } from "./services"
import * as types from "./constants"
import * as actions from "./actions"
function* woocommerceproducts_get_wpjson_wc_v3_products_listWorker(action) {
  try {
    const result = yield call(
      apiService.woocommerceproducts_get_wpjson_wc_v3_products_list,
      action
    )
    yield put(
      actions.woocommerceproducts_get_wpjson_wc_v3_products_listSucceeded(
        result,
        action
      )
    )
  } catch (err) {
    yield put(
      actions.woocommerceproducts_get_wpjson_wc_v3_products_listFailed(
        err,
        action
      )
    )
  }
}
function* woocommerceproducts_get_wpjson_wc_v3_products_listWatcher() {
  yield takeEvery(
    types.WOOCOMMERCEPRODUCTS_GET_WPJSON_WC_V3_PRODUCTS_LIST,
    woocommerceproducts_get_wpjson_wc_v3_products_listWorker
  )
}
export default function* rootSaga() {
  const sagas = [woocommerceproducts_get_wpjson_wc_v3_products_listWatcher]
  yield all(
    sagas.map(saga =>
      spawn(function* () {
        while (true) {
          try {
            yield call(saga)
            break
          } catch (e) {
            console.log(e)
          }
        }
      })
    )
  )
}
