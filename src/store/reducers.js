import * as types from "./constants"

const initialState = {
  woocommerceproducts_response_get_products: [],
  woocommerceproducts: [],
  customTexts: [],
  iFreshAPI: [],
  homePages: [],
  signups: [],
  logins: [],
  passwordChanges: [],
  passwords: [],
  passwordResetConfirms: [],
  verifyEmails: [],
  userDetails: []
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
    case types.API_V1_CUSTOMTEXT_LIST:
    case types.API_V1_CUSTOMTEXT_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: [...state.customTexts, action.response]
      })
    case types.API_V1_CUSTOMTEXT_LIST_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_READ:
    case types.API_V1_CUSTOMTEXT_READ_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: [
          ...state.customTexts.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.API_V1_CUSTOMTEXT_READ_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_UPDATE:
    case types.API_V1_CUSTOMTEXT_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: state.customTexts.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CUSTOMTEXT_UPDATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE:
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        customTexts: state.customTexts.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_CUSTOMTEXT_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST:
    case types.API_V1_HOMEPAGE_LIST_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: [...state.homePages, action.response]
      })
    case types.API_V1_HOMEPAGE_LIST_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_READ:
    case types.API_V1_HOMEPAGE_READ_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: [
          ...state.homePages.filter(record => record.id !== action.response.id),
          action.response
        ]
      })
    case types.API_V1_HOMEPAGE_READ_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_UPDATE:
    case types.API_V1_HOMEPAGE_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: state.homePages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_HOMEPAGE_UPDATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE:
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        homePages: state.homePages.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.API_V1_HOMEPAGE_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.API_V1_LOGIN_CREATE:
    case types.API_V1_LOGIN_CREATE_SUCCEEDED:
    case types.API_V1_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.API_V1_SIGNUP_CREATE:
    case types.API_V1_SIGNUP_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        signups: [...state.signups, action.response]
      })
    case types.API_V1_SIGNUP_CREATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE:
    case types.REST_AUTH_LOGIN_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        logins: [...state.logins, action.response]
      })
    case types.REST_AUTH_LOGIN_CREATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_LIST:
    case types.REST_AUTH_LOGOUT_LIST_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_LIST_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.REST_AUTH_LOGOUT_CREATE:
    case types.REST_AUTH_LOGOUT_CREATE_SUCCEEDED:
    case types.REST_AUTH_LOGOUT_CREATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE:
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwordChanges: [...state.passwordChanges, action.response]
      })
    case types.REST_AUTH_PASSWORD_CHANGE_CREATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwords: [...state.passwords, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CREATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE:
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        passwordResetConfirms: [...state.passwordResetConfirms, action.response]
      })
    case types.REST_AUTH_PASSWORD_RESET_CONFIRM_CREATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE:
    case types.REST_AUTH_REGISTRATION_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        signups: [...state.signups, action.response]
      })
    case types.REST_AUTH_REGISTRATION_CREATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE:
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_SUCCEEDED:
      return Object.assign({}, state, {
        verifyEmails: [...state.verifyEmails, action.response]
      })
    case types.REST_AUTH_REGISTRATION_VERIFY_EMAIL_CREATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.REST_AUTH_USER_READ:
    case types.REST_AUTH_USER_READ_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: [
          ...state.userDetails.filter(
            record => record.id !== action.response.id
          ),
          action.response
        ]
      })
    case types.REST_AUTH_USER_READ_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.REST_AUTH_USER_UPDATE:
    case types.REST_AUTH_USER_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: state.userDetails.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.REST_AUTH_USER_UPDATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE:
    case types.REST_AUTH_USER_PARTIAL_UPDATE_SUCCEEDED:
      return Object.assign({}, state, {
        userDetails: state.userDetails.map(record =>
          record.id === action.response.id ? action.response : record
        )
      })
    case types.REST_AUTH_USER_PARTIAL_UPDATE_FAILED:
      return Object.assign({}, state, {
        iFreshAPI: [...state.iFreshAPI, action.response]
      })
    default:
      return state
  }
}
